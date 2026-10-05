/* The prerequisites page the "Learn more" links point at. Everything it states is something
   this prototype already enforces or says elsewhere — no invented platform detail, and no
   outbound link, since there is no real documentation URL to send anyone to. Self-contained
   (it owns its own open state) so no screen using it gains a useState. */
const PREREQS = [
  {t:'A dialer to run in', ico:'board',
   d:'An agent runs inside a dialer. It is live only while it is in one, and the agent page says which dialers are running it. Dialers are assigned in the Outbound Hub, not here.'},
  {t:'A list of people to call', ico:'users',
   d:'An outbound agent calls the contacts in its dialer\u2019s list. Testing never touches that list \u2014 a test call rings your own number and nobody else\u2019s.'},
  {t:'Dispositions on the campaign', ico:'form',
   d:'How an interaction is coded when it ends is configured on the campaign, outside the agent. The agent reports what happened; it does not define the codes.'},
  {t:'Credits on the account', ico:'bolt',
   d:'Every interaction an agent handles spends credits, and each one reports its own total. What is left is shown on the AI Agents screen.'},
];
function PrereqLink({label, className}){
  const [open, setOpen] = useState(false);
  return <>
    <a className={className||'learnmore'} href="#"
      onClick={e=>{ e.preventDefault(); setOpen(true); }}>{label}</a>
    {open && <Modal title="AI agent collection prerequisites" onClose={()=>setOpen(false)}
      actions={<button className="btn btn-gho" onClick={()=>setOpen(false)}>Close</button>}>
      <p style={{marginTop:0}}>Four things have to be in place before an agent can take or make
        interactions. Three of them are set up outside this screen.</p>
      <div className="prereqs">
        {PREREQS.map(x=>
          <div className="prereq" key={x.t}>
            <span className="prereq-ico">{I[x.ico]}</span>
            <div><div className="prereq-t">{x.t}</div><div className="prereq-d">{x.d}</div></div>
          </div>)}
      </div>
    </Modal>}
  </>;
}

/* ============================ collapsible section ============================ */
function Section({title, hint, summary, defaultOpen, children}){
  const [open, setOpen] = useState(defaultOpen===true);
  return <div className="sec" data-open={open?'1':'0'}>
    <button className="sec-hd" aria-expanded={open} onClick={()=>setOpen(!open)}>
      <span className="sec-chev">{I.fwd}</span>
      <span className="sec-t">{title}</span>
      <span className="sec-sum mono">{summary}</span>
    </button>
    {open && <div className="sec-body">
      {hint && <div className="field-h" style={{marginBottom:15, maxWidth:'62ch'}}>{hint}</div>}
      {children}
    </div>}
  </div>;
}

/* ============================ 1 · DIRECTION + JOB ============================ */
/* Per direction: one template is featured (shown first, full colour); its opposite-number
   is hidden outright (an inbound receptionist has no outbound counterpart, and vice versa
   for collections); everything else stays pickable but visually dimmed. Purely a gallery
   presentation choice — seedFromTemplate/newDraft and every downstream screen are untouched. */
const GALLERY_FOCUS = {out: {featured:'collections', hide:'reception'}, in: {featured:'reception', hide:'collections'}};
function galleryTemplates(direction){
  const g = GALLERY_FOCUS[direction];
  if(!g) return TEMPLATES;
  const feat = TEMPLATES.find(t=>t.id===g.featured);
  const rest = TEMPLATES.filter(t=>t.id!==g.featured && t.id!==g.hide);
  return feat ? [feat, ...rest] : rest;
}
function TemplateGallery({draft, set, talk}){
  const focus = GALLERY_FOCUS[draft.direction];
  return <>
    <div className="grid" style={{gridTemplateColumns:'1fr 1fr'}}>
      {galleryTemplates(draft.direction).map(t=>{
        const on = draft.template===t.id;
        const dim = !!focus && t.id!==focus.featured;
        return <button key={t.id} className={dim?'pick dim':'pick'} aria-pressed={on}
          onClick={()=>set(seedFromTemplate(draft, t.id))}>
          {on && <span className="pick-check">{I.check}</span>}
          <span className="pick-ico">{t.icon}</span>
          <span className="pick-t">{t.name}</span>
          <span className="pick-d">{t.blurb}</span>
          <span style={{marginTop:'auto', paddingTop:6}}><span className="mono">{t.stat}</span></span>
        </button>;
      })}
      <button className="pick" style={{gridColumn:'1 / -1', flexDirection:'row', alignItems:'center', gap:16}} onClick={talk}>
        <span className="pick-ico" style={{background:'var(--grey-soft)', color:'var(--ink-2)'}}>{I.wand}</span>
        <span>
          <span className="pick-t" style={{display:'block'}}>Something else</span>
          <span className="pick-d">Describe the job in your own words and our team builds the template with you.</span>
        </span>
        <span className="btn btn-gho btn-sm" style={{marginLeft:'auto'}}>Talk to our team{I.fwd}</span>
      </button>
    </div>
    <div className="note" style={{marginTop:18}}>{I.info}
      <span>Nothing here is locked in. Every rule a template brings can be changed in step 4.</span></div>
    <div style={{marginTop:12}}>
      <PrereqLink label="Learn more: AI agent collection prerequisites — list, dialer and disposition requirements"/>
    </div>
  </>;
}

function StepDirection({draft, set, next, locked, talk}){
  const opts = [{id:'out', t:'Outbound', ico:I.phoneOut}, {id:'in', t:'Inbound', ico:I.phoneIn}];
  return <>
    <div className="wrap"><div className="col">
      <StepHead title="Who starts the interaction?"/>
      <div className="grid" style={{gridTemplateColumns:'1fr 1fr'}}>
        {opts.map(o=>{
          const on = draft.direction===o.id;
          return <button key={o.id} className="pick" aria-pressed={on} disabled={!!locked}
            onClick={locked?undefined:()=>set({direction:o.id, template:null})}
            style={{minHeight:132, justifyContent:'center', alignItems:'flex-start', gap:14, padding:24}}>
            {on && <span className="pick-check">{I.check}</span>}
            <span className="pick-ico">{o.ico}</span>
            <span className="pick-t" style={{fontSize:18, color:(locked && !on)?'var(--ink-3)':null}}>{o.t}</span>
          </button>;
        })}
      </div>
      {locked && <div className="note" style={{marginTop:18}}>{I.lock}
        <span>Direction is fixed once an agent exists.</span></div>}

      {draft.direction && <div style={{marginTop:32, borderTop:'1px solid var(--line-2)', paddingTop:26, animation:'pop .2s ease-out'}}>
        <h1 style={{margin:'0 0 6px', fontSize:23}}>What job should it do?</h1>
        <p className="sub" style={{marginTop:0, marginBottom:18}}>
          Pick the closest one. Each brings rules already filled in{draft.direction==='in'?', worded for calls coming in':''}.</p>
        <TemplateGallery draft={draft} set={set} talk={talk}/>
      </div>}
    </div></div>
    <Foot onNext={next} nextOk={!!draft.direction && !!draft.template}/>
  </>;
}

/* ============================ 6 · BUSINESS RULES ============================ */
function HandoverRules({draft, set}){
  const [ho, setHo] = useState('');
  const hv = draft.handover || [], other = draft.handoverOther || [];
  const toggle = id => set({handover: hv.indexOf(id)>-1 ? hv.filter(x=>x!==id) : [...hv, id]});
  const addOther = () => { const t = ho.trim(); if(t) set({handoverOther:[...other, t]}); setHo(''); };
  return <>
    <div role="group" aria-label="Handover rules">
      {HANDOVER.map(o=>{
        const on = o.always || hv.indexOf(o.id)>-1;
        return o.always
          ? <div className="opt opt-lock" aria-checked="true" key={o.id} style={{cursor:'default'}}>
              <span className="cbx">{I.check}</span>
              <span>{o.v}<span className="lock-note" style={{marginLeft:9}}>{I.lock}Always on</span></span>
            </div>
          : <button className="opt" role="checkbox" aria-checked={on} key={o.id} onClick={()=>toggle(o.id)}>
              <span className="cbx">{on && I.check}</span><span>{o.v}</span>
            </button>;
      })}
    </div>
    {other.length>0 && <div style={{marginTop:12}}>
      <div className="mono" style={{marginBottom:8}}>Your own</div>
      {other.map((t,i)=>
        <div className="prom" key={i} style={{marginTop:i?8:0}}>
          <span className="no-ico" style={{background:'var(--accent-soft)', color:'var(--accent)'}}>{I.check}</span>
          <span style={{fontSize:14}}>{t}</span>
          <button className="prom-x" aria-label="Remove handover rule"
            onClick={()=>set({handoverOther:other.filter((_,j)=>j!==i)})}>{I.x}</button>
        </div>)}
    </div>}
    <div className="prom" style={{marginTop:12, background:'var(--panel-2)'}}>
      <span className="no-ico" style={{background:'var(--accent-soft)', color:'var(--accent)'}}>{I.plus}</span>
      <span style={{fontSize:13, color:'var(--ink-3)', flex:'none'}}>Other (specify)</span>
      <input className="inp" style={{border:0, padding:'2px 0', background:'none'}} value={ho}
        placeholder="Describe it in your own words…" onChange={e=>setHo(e.target.value)}
        onKeyDown={e=>e.key==='Enter'&&addOther()}/>
      {ho.trim() && <button className="btn btn-gho btn-sm" onClick={addOther}>Add</button>}
    </div>
  </>;
}

function OtherRules({draft, set}){
  const [np, setNp] = useState('');
  const list = draft.promises || [];
  const ready = !!np.trim();
  /* the template's rules are ticked by default and can be unticked rather than deleted, so a
     supervisor can see what the template offered and put it back */
  const toggle = i => set({promises:list.map((p,j)=>j===i?{...p, on:p.on===false}:p)});
  const add = () => { if(!ready) return;
    set({promises:[...list, {t:np.trim(), on:true, custom:true, kind:'rule'}]}); setNp(''); };
  return <>
    {reducedOn(draft) && <div className="note" style={{marginBottom:8}}>{I.info}<span>Two rules are off while the brief offers a reduced balance without interest: that offer removes interest, so the agent cannot also promise never to.</span></div>}
    <div role="group" aria-label="Other rules">
      {list.map((p,i)=>{
        /* off, greyed and not clickable while a reduced balance is on offer; never rewritten,
           so unticking that offer brings the rule back exactly as it was */
        if(suspendedByOffer(draft, p)) return <div className="cf" key={i}>
          <div className="opt opt-lock opt-off" aria-checked="false" aria-disabled="true"
            title="Off while the brief offers a reduced balance without interest">
            <span className="cbx"></span><span>{p.t}<span className="cf-q">Off while a reduced balance without interest is on offer</span></span>
          </div>
        </div>;
        const on = p.on !== false;
        return <div className="cf" key={i}>
          <button className="opt" role="checkbox" aria-checked={on} onClick={()=>toggle(i)}>
            <span className="cbx">{on && I.check}</span>
            <span>{p.t}{p.param!==undefined && <span className="cf-q">“{p.param || '…'}”</span>}</span>
          </button>
          {p.custom && <button className="prom-x" aria-label={'Remove '+p.t}
            onClick={()=>set({promises:list.filter((_,j)=>j!==i)})}>{I.x}</button>}
          {/* a rule that carries a text of its own: the field sits under its tick box */}
          {p.param!==undefined && on && <div className="addq addq-mini rule-param">
            <label className="addq-f addq-wide"><span className="addq-l">The message it leaves</span>
              <input className="inp" value={p.param} aria-label="Message for whoever answers"
                placeholder="What it says to whoever picked up"
                onChange={e=>set({promises:list.map((x,j)=>j===i?{...x, param:e.target.value}:x)})}/></label>
          </div>}
        </div>;})}
    </div>
    <div className="addq">
      <div className="addq-row">
        <label className="addq-f addq-wide">
          <span className="addq-l">A rule of your own</span>
          <input className="inp" value={np} placeholder="End the call if the customer is driving"
            onChange={e=>setNp(e.target.value)}
            onKeyDown={e=>{ if(e.key==='Enter'){ e.preventDefault(); add(); } }}/>
        </label>
        <button className="btn btn-pri btn-sm" disabled={!ready} onClick={add}
          title={ready ? 'Add this rule' : 'Type the rule first'}>Add</button>
      </div>
    </div>
  </>;
}

/* The words the template bans are shown as standard options to tick, not as things you can only
   delete; anything you type yourself sits below them and stays removable. */
function BannedWords({draft, set}){
  const defaults = bannedDefaults(draft), on = draft.banned || [];
  const extras = on.filter(w => defaults.indexOf(w) < 0);
  const toggle = w => set({banned: on.indexOf(w)>-1 ? on.filter(x=>x!==w) : [...on, w]});
  return <>
    <div role="group" aria-label="Standard words">
      {defaults.map(w=>{ const isOn = on.indexOf(w)>-1;
        return <button className="opt" role="checkbox" aria-checked={isOn} key={w} onClick={()=>toggle(w)}>
          <span className="cbx">{isOn && I.check}</span><span>{w}</span>
        </button>;})}
    </div>
    <div className="mono" style={{margin:'14px 0 8px'}}>Your own</div>
    <TagInput tags={extras} placeholder="Add a word…"
      onChange={next => set({banned:[...on.filter(w=>defaults.indexOf(w)>-1), ...next]})}/>
  </>;
}

function CollectFields({draft, set}){
  const fields = draft.collect || [];
  const [label, setLabel] = useState('');
  const [q, setQ] = useState('');
  const toggle = id => set({collect: fields.map(f=>f.id===id?{...f, on:!f.on}:f)});
  const remove = id => set({collect: fields.filter(f=>f.id!==id)});
  const ready = !!label.trim() && !!q.trim();
  const add = () => { if(!ready) return;
    set({collect:[...fields, {id:'custom_'+Date.now().toString(36), label:label.trim(), question:q.trim(), on:true, custom:true}]});
    setLabel(''); setQ(''); };
  const onKey = e => { if(e.key==='Enter'){ e.preventDefault(); add(); } };
  return <>
    <div role="group" aria-label="What it asks every caller">
      {fields.map(f=>
        <div className="cf" key={f.id}>
          <button className="opt" role="checkbox" aria-checked={f.on} onClick={()=>toggle(f.id)}>
            <span className="cbx">{f.on && I.check}</span>
            <span><b>{f.label}</b><span className="cf-q">“{f.question}”</span></span>
          </button>
          {f.custom && <button className="prom-x" aria-label={'Remove '+f.label} onClick={()=>remove(f.id)}>{I.x}</button>}
        </div>)}
    </div>
    {/* Add is always present and simply disabled until both halves are filled — it used to
        appear only once they were, which read as the form refusing to save. */}
    <div className="addq">
      <div className="addq-t">Add a question of your own</div>
      <div className="addq-row">
        <label className="addq-f">
          <span className="addq-l">What you call it</span>
          <input className="inp" value={label} placeholder="Order number"
            onChange={e=>setLabel(e.target.value)} onKeyDown={onKey}/>
        </label>
        <label className="addq-f addq-wide">
          <span className="addq-l">What it asks out loud</span>
          <input className="inp" value={q} placeholder="Do you have your order number handy?"
            onChange={e=>setQ(e.target.value)} onKeyDown={onKey}/>
        </label>
        <button className="btn btn-pri btn-sm" disabled={!ready} onClick={add}
          title={ready ? 'Add this question' : 'Fill both boxes to add it'}>{I.plus}Add</button>
      </div>
      <div className="note" style={{marginTop:10}}>{I.info}<span>Asked of every caller, after the
        ones ticked above. You can switch it off or remove it later.</span></div>
    </div>
  </>;
}

function StepRules({draft, set, next, back}){
  const isRec = draft.template==='reception';
  const asked = (draft.collect||[]).filter(f=>f.on).length;
  const hv = draft.handover || [], other = draft.handoverOther || [];
  const chosen = hv.length + other.length + 1;               // +1 for the always-on trigger
  const n = (k, one, many) => k+(k===1?' '+one:' '+many);
  return <>
    <div className="wrap"><div className="col">
      <StepHead title={isRec ? 'What it asks, and the rules it cannot break' : 'The rules it cannot break'}
        sub={'Filled in from the '+template(draft.template).name.toLowerCase()+' template. Open a section to change what is in it.'}/>

      {isRec && <Section title="What it asks every caller" summary={n(asked,'question','questions')}
        hint="Toggle what it asks. Your own questions are asked after these, in the order you add them.">
        <CollectFields draft={draft} set={set}/>
      </Section>}

      <Section title="Handover rules" summary={n(chosen,'rule','rules')}
        hint={'When any of these happens the agent stops, says a person will take over, and hands the call across. It hands over by: '+handLabel(draft)+' — change that on the brief.'}>
        <HandoverRules draft={draft} set={set}/>
      </Section>

      <Section title="Words it must never use" summary={n(draft.banned.length,'word','words')}
        hint="Tick the ones that apply. If a word here would come up, the agent rephrases.">
        <BannedWords draft={draft} set={set}/>
      </Section>

      <Section title="Other rules" summary={n(activePromises(draft).length,'rule','rules')}
        hint="Tick the ones that apply. A never-promise rule makes the agent say it cannot promise that, then offer what it can do instead; the others change what it does on the call.">
        <OtherRules draft={draft} set={set}/>
      </Section>
    </div></div>
    <Foot onBack={back} onNext={next} nextLabel="Save & open the agent" nextOk/>
  </>;
}

/* ============================ 4 · LANGUAGE & VOICE ============================ */
function StepVoice({draft, set, next, back}){
  const [playing, setPlaying] = useState(null);
  useEffect(()=>{ if(!playing) return; const t = setTimeout(()=>setPlaying(null), 2600); return ()=>clearTimeout(t); },[playing]);
  const lang = draft.lang || (draft.personaId ? persona(draft.personaId).lang : null);
  const voices = lang ? voicesIn(lang) : [];
  /* The template seeds a Spanish opener a step before the language is chosen, so switching
     language has to bring the opener with it — unless it has been edited, which is the one
     thing we must not overwrite. */
  const pickLang = id => {
    const t = template(draft.template), inb = draft.direction==='in';
    const wasDefault = draft.opener===(inb ? t.inOpener : t.opener)
                    || draft.opener===(inb ? t.inOpenerEn : t.openerEn);
    const next = id==='en' ? (inb ? (t.inOpenerEn||t.inOpener) : (t.openerEn||t.opener))
                           : (inb ? t.inOpener : t.opener);
    /* the banned list swaps on the same terms: only while it is still the template's own */
    const wasStock = (draft.banned||[]).join('|')===bannedDefaults({...draft, lang:draft.lang}).join('|');
    const nextBanned = bannedDefaults({...draft, lang:id});
    /* and the message the third-party rule leaves, while it is still a stock default */
    const co = (draft.tokens||{}).company;
    const stockMsg = [thirdPartyMessageDefault('es', co), thirdPartyMessageDefault('en', co)];
    const nextPromises = (draft.promises||[]).map(r => r.t===THIRD_PARTY_MESSAGE && stockMsg.indexOf(r.param)>-1
      ? {...r, param: thirdPartyMessageDefault(id, co)} : r);
    set({lang:id,
      personaId:(draft.personaId && persona(draft.personaId).lang===id) ? draft.personaId : null,
      ...(wasDefault ? {opener:next} : {}),
      ...(wasStock ? {banned:nextBanned} : {}),
      promises: nextPromises});
  };
  const sel = draft.personaId ? persona(draft.personaId) : null;
  return <>
    <div className="wrap"><div className="col">
      <StepHead title="Which language, and whose voice?"
        sub="An agent speaks one language. Pick it, then listen to the voices available for that language."/>

      <div className="mono" style={{marginBottom:11}}>Language</div>
      <div className="grid" style={{gridTemplateColumns:'1fr 1fr'}}>
        {Object.keys(LANGS).map(id=>{
          const l = LANGS[id], on = lang===id, n = voicesIn(id).length;
          return <button key={id} className="pick" aria-pressed={on} onClick={()=>pickLang(id)}
            style={{flexDirection:'row', alignItems:'center', gap:14, padding:'18px 20px'}}>
            {on && <span className="pick-check">{I.check}</span>}
            <span className="pick-ico">{I.globe}</span>
            <span>
              <span className="pick-t" style={{display:'block'}}>{l.name}</span>
              <span className="mono">{n} voices · {TIER}</span>
            </span>
          </button>;
        })}
      </div>

      {lang && <div style={{marginTop:30, borderTop:'1px solid var(--line-2)', paddingTop:24, animation:'pop .2s ease-out'}}>
        <div className="card" style={{padding:0, overflow:'hidden'}}>
          {voices.map((p,i)=>{
            const on = draft.personaId===p.id;
            return <div key={p.id} className={'vrow'+(on?' on':'')} style={{borderTop:i?'1px solid var(--line-2)':0}}>
              <button className="vrow-pick" role="radio" aria-checked={on} onClick={()=>set({personaId:p.id})}>
                <Avatar p={p} size={30}/>
                <span className="vrow-name">{p.name}</span>
                <span className="vtier mono">{p.tier}</span>
                {on && <span style={{marginLeft:'auto', color:'var(--accent)', display:'grid', placeItems:'center'}}>{I.check}</span>}
              </button>
              <button className={'play'+(playing===p.id?' on':'')} style={{marginTop:0, flex:'none'}}
                onClick={()=>setPlaying(playing===p.id?null:p.id)}>
                {playing===p.id
                  ? <><span className="wave"><i/><i/><i/><i/></span>0:02</>
                  : <>{I.play} Sample</>}
              </button>
            </div>;
          })}
        </div>

        {sel && <div className="prev" style={{marginTop:22, position:'static'}}>
          <div className="prev-hd"><Avatar p={sel} size={26}/>
            <span style={{fontWeight:600, fontSize:13.5}}>{sel.name}</span>
            <span className="mono" style={{marginLeft:'auto'}}>{LANGS[sel.lang].short} · sample line</span></div>
          <div className="prev-body" style={{minHeight:0}}>
            <div className="bub bub-a" key={sel.id}>{sel.line}</div>
          </div>
        </div>}

      </div>}
    </div></div>
    <Foot onBack={back} onNext={next} nextOk={!!lang && !!draft.personaId}/>
  </>;
}

/* ============================ 1 · AGENT LIST ============================ */
const ICO_TRASH = <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
  strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
  <path d="M4 7h16M9.5 7V4.5h5V7M6.5 7l1 13h9l1-13M10 11v6M14 11v6"/></svg>;

/* What is left on the account, read from the n2p usage API. Deliberately not a sum of the
   interactions log — that is one month of one screen, this is the balance. */
function CreditsWidget(){
  const pct = creditsPct();
  return <div className={'credits'+(creditsLow()?' credits-low':'')}
    title={'Remaining credits, from the '+CREDITS.source+' · renews '+CREDITS.renews}>
    <div className="credits-top">
      <span className="credits-n tnum">{fmtCredits(creditsLeft())}</span>
      <span className="credits-of tnum">of {fmtCredits(CREDITS.included)}</span>
    </div>
    <div className="credits-bar"><i style={{width:pct+'%'}}/></div>
    <div className="credits-sub mono">credits left · renews {CREDITS.renews}</div>
  </div>;
}

function AgentList({agents, onCreate, onOpen}){
  const [q, setQ] = useState('');
  const shown = agents.filter(a => (a.name+a.tokens.company).toLowerCase().includes(q.toLowerCase()));
  return <div className="panel">
    <div className="panel-hd">
      <div style={{display:'flex', alignItems:'center', gap:20, flexWrap:'wrap'}}>
        <h1 style={{margin:0}}>AI Agents</h1>
        <CreditsWidget/>
        <button className="btn btn-pri" onClick={onCreate}>{I.plus}Create agent</button>
      </div>
    </div>
    <div className="wrap">
      <div style={{maxWidth:420, marginBottom:22}}>
        <input className="inp" placeholder="Search agents" value={q} onChange={e=>setQ(e.target.value)}/>
      </div>
      <div className="grid list-grid">
        {shown.map(a=>{
          const p = persona(a.personaId), inb = a.direction==='in';
          return <div className="card ag-card" key={a.id} role="button" tabIndex={0}
            aria-label={'Open '+a.name} onClick={()=>onOpen(a.id)}
            onKeyDown={e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); onOpen(a.id); } }}>
            <div className="ag-top">
              <Avatar p={p} size={44}/>
              <div style={{minWidth:0}}>
                <div className="ag-name">{a.name}</div>
                <div className="ag-meta">{p.name} · {LANGS[p.lang].short}</div>
              </div>
            </div>
            <div style={{display:'flex', gap:7, alignItems:'center', flexWrap:'wrap'}}>
              <span className="pill" style={{background:'var(--accent-soft)', color:'var(--accent-ink)'}}>
                <span style={{display:'grid', placeItems:'center', width:13}}>{inb?I.phoneIn:I.phoneOut}</span>
                {dirLabel(a.direction)}</span>
              {/* which template it was built from — the rules and wording it started with */}
              <span className="pill pill-tpl" title={'Built from the '+template(a.template).name+' template'}>
                <span style={{display:'grid', placeItems:'center', width:13}}>{template(a.template).icon}</span>
                {template(a.template).name}</span>
              {isLive(a) && <LiveBadge dialers={a.dialers}/>}
            </div>
            <div className="ag-line">It {goalLabel(a)}.</div>
          </div>;
        })}
      </div>
    </div>
  </div>;
}

/* ============================ 9 · THE AGENT PAGE ============================ */
const ruleCount = a => (a.handover||[]).length + (a.handoverOther||[]).length + 1
  + (a.banned||[]).length + activePromises(a).length;

/* Add a question to what the receptionist collects, without leaving the chip. Mounted only
   while the popover is open, so the two inputs always start empty. */
function CollectAdd({fields, set}){
  const [label, setLabel] = useState('');
  const [q, setQ] = useState('');
  const ready = !!label.trim() && !!q.trim();
  const add = () => { if(!ready) return;
    set({collect:[...fields, {id:'custom_'+Date.now().toString(36), label:label.trim(), question:q.trim(), on:true, custom:true}]});
    setLabel(''); setQ(''); };
  const onKey = e => { if(e.key==='Enter'){ e.preventDefault(); add(); } };
  return <div className="addq addq-mini">
    <div className="addq-row">
      <label className="addq-f">
        <span className="addq-l">Call it</span>
        <input className="inp" value={label} placeholder="Order number"
          onChange={e=>setLabel(e.target.value)} onKeyDown={onKey}/>
      </label>
      <label className="addq-f addq-wide">
        <span className="addq-l">It asks</span>
        <input className="inp" value={q} placeholder="Do you have your order number handy?"
          onChange={e=>setQ(e.target.value)} onKeyDown={onKey}/>
      </label>
      <button className="btn btn-pri btn-sm" disabled={!ready} onClick={add}
        title={ready ? 'Add this question' : 'Fill both boxes to add it'}>Add</button>
    </div>
  </div>;
}

/* What recovering this version would change, against the current one. One line per change,
   each marked gained / lost / changed, so the answer to "what is different?" is countable at a
   glance instead of being two full lists the reader has to compare themselves. */
function VersionDiff({agent, version}){
  const d = versionDiff(agent, version);
  if(!d) return <div className="vd-box">
    <div className="vd-lead">Nothing to compare</div>
    <div className="vd-sub">{version.id} is the current version.</div></div>;
  const against = 'against ' + d.base.id + ', the current version';
  if(!d.rows.length) return <div className="vd-box">
    <div className="vd-lead">Nothing would change</div>
    <div className="vd-sub">{version.id} is identical to {d.base.id}, the current version.</div></div>;
  const nch = d.rows.length;
  return <div className="vd-box">
    <div className="vd-lead">Recovering {version.id} changes {nch===1?'one thing':nch+' things'}</div>
    <div className="vd-sub">{against}</div>
    <div className="vd-rows">
      {d.rows.map((r,i)=>
        <div className={'vd-r vd-'+r.kind} key={i}>
          <span className="vd-m">{r.kind==='add'?I.plus:r.kind==='drop'?I.x:I.pencil}</span>
          <div className="vd-body">
            <span className="vd-lab">{r.kind==='add'?'Gains':r.kind==='drop'?'Loses':'Changes'} · {r.k}</span>
            {r.kind!=='change'
              ? <div className="vd-item">{r.item}</div>
              : r.long
                ? <div className="vd-stack">
                    <span className="vd-old">{r.from}</span>
                    <span className="vd-new">{r.to}</span></div>
                : <div className="vd-pair">
                    <span className="vd-old">{r.from}</span>
                    <span className="vd-arrow">{I.fwd}</span>
                    <span className="vd-new">{r.to}</span></div>}
          </div>
        </div>)}
    </div>
  </div>;
}

/* Live means attached to a dialer in the Outbound Hub — nothing more. One version runs in all of
   them; several is worth saying on screen, so the badge counts them and the tooltip names them. */
function LiveBadge({dialers}){
  const ds = dialers || [], n = ds.length;
  return <span className="pill deployed" title={'Live · running in '+andList(ds)}>
    <i/>Live{n>1 && <span className="pill-sub">in {n} dialers</span>}</span>;
}

function AgentSummary({agent}){
  const a = agent, p = persona(a.personaId), inb = a.direction==='in';
  const ident = val(identityFor(a.template), a.tokens.identity);
  const V = ({children}) => <b className="pv">{children}</b>;
  /* asking for a person is always a trigger, so it belongs in the sentence */
  const triggers = ['asks for a person']
    .concat((a.handover||[]).map(id=>(HANDOVER.find(o=>o.id===id)||{}).short).filter(Boolean));
  const own = a.handoverOther || [];
  const promises = promisesOf(a).map(x=>x.t.replace(/^Never promise /i,''));
  const others = otherRules(a);
  return <div className="brief-prose">
    <p><V>{p.name}</V> {inb?'answers calls to ':(template(a.template).who
      ? 'calls '+template(a.template).who+' ' : 'calls ')}<V>{a.tokens.company}</V> in <V>{LANGS[p.lang].name}</V>.
      {/* a receptionist is never offered an identity setting on its brief, so the summary must
          not claim one — it greets whoever rang in */}
      {' '}It {a.template==='collections'
        ? <><V>{ident.v}</V>, <V>{discloseFull(a)}</V>, <V>{offersLabel(a)}</V>, {fallbackPhrase(a)}. Once a date is agreed, it <V>{paymentLabel(a)}</V>.</>
        : <>{a.template!=='reception' && <><V>{ident.v}</V>, then </>}<V>{goalLabel(a)}</V>.</>}</p>
    <p>Every call opens with the fixed disclosure, then <span className="pq">“{a.opener}”</span>
      {a.template==='collections' && closingOf(a) && <>{' '}It ends every call with <span className="pq">“{closingOf(a)}”</span></>}</p>
    <p>It <V>{handLabel(a)}</V> when the customer {orList(triggers)}.
      {promises.length>0 && <> It never promises <V>{orList(promises)}</V>{a.banned.length?'':'.'}</>}
      {a.banned.length>0 && <>{promises.length?', and':' It'} never says <V>{orList(a.banned)}</V>.</>}</p>
    {others.length>0 && <p>Other {others.length===1?'rule':'rules'} it follows:{' '}
      {others.map((r,i)=><span key={i}><span className="pq">“{ruleText(r)}”</span>{i<others.length-1?', ':''}</span>)}</p>}
    {own.length>0 && <p>It also hands over on your own {own.length===1?'rule':'rules'}:{' '}
      {own.map((t,i)=><span key={i}><span className="pq">“{t}”</span>{i<own.length-1?', ':''}</span>)}</p>}
    {(a.extraRules||[]).length>0 && <p>Corrections you have applied: <V>{orList(a.extraRules)}</V>.</p>}
  </div>;
}

function SumRow({label, children, wide}){
  return <div className="sumrow" style={wide?{gridColumn:'1 / -1'}:null}>
    <span className="sumrow-k mono">{label}</span>
    <span className="sumrow-v">{children}</span>
  </div>;
}

function AgentPage({agent, agents, setAgents, onBack, onEdit, onTest, onRecover, onDelete, toast}){
  const a = agent, p = persona(a.personaId);
  const [askDel, setAskDel] = useState(false);
  const [history, setHistory] = useState(false);
  const [viewing, setViewing] = useState(null);      // a version being read read-only
  const inb = a.direction==='in';
  /* There is no separate publish step: the newest version is the one the agent runs, and it is
     live wherever the Outbound Hub has put it in a dialer. */
  const cur = currentVersion(a);
  const dials = dialersOf(a), live = isLive(a);
  const vs = a.versions || [];
  const replacedBy = v => { const i = vs.findIndex(x => x.id === v.id); return i > -1 && vs[i+1] ? vs[i+1].id : null; };

  /* Recovering loads the version onto the Scope screen for review; nothing changes until it is
     saved from there. */
  const recover = v => { setViewing(null); setHistory(false); onRecover(a.id, v); };

  return <div className="panel">
    <div className="panel-hd">
      <button className="btn btn-qui btn-sm" style={{marginLeft:-12, marginBottom:6}} onClick={onBack}>{I.back}All agents</button>
      <div style={{display:'flex', gap:14, alignItems:'center', flexWrap:'wrap'}}>
        <Avatar p={p} size={46}/>
        <div>
          <div style={{display:'flex', alignItems:'center', gap:11, flexWrap:'wrap'}}>
            <h1 style={{margin:0, fontSize:23}}>{a.name}</h1>
            <span className="pill" style={{background:'var(--accent-soft)', color:'var(--accent-ink)'}}>
              <span style={{display:'grid', placeItems:'center', width:13}}>{inb?I.phoneIn:I.phoneOut}</span>{dirLabel(a.direction)}</span>
            {live && <LiveBadge dialers={a.dialers}/>}
            {cur && <span className="vchip" title="The current version">{cur.id}</span>}
          </div>
          <div className="ag-meta">{p.name} · {LANGS[p.lang].name} · {p.tier}</div></div>
        <div style={{marginLeft:'auto', display:'flex', gap:9, alignItems:'center', flexWrap:'wrap'}}>
          <button className="btn btn-gho btn-sm" onClick={()=>onTest(a.id)}>{I.chat}Test</button>
          <button className="btn btn-gho btn-sm" onClick={()=>setHistory(true)}>{I.clock}History</button>
          <button className="btn btn-gho btn-sm" onClick={()=>onEdit(a.id)}>{I.pencil}Edit</button>
          <PrereqLink label="Prerequisites" className="learnmore prereq-inline"/>
        </div>
      </div>
    </div>
    <div className="wrap">
      <div style={{maxWidth:1120, margin:'0 auto'}}>
        <p className="brief" style={{fontSize:20, marginTop:0}}>
          It {inb?'answers calls to':'calls '+template(a.template).who} <b style={{fontWeight:500}}>{a.tokens.company}</b> and {goalLabel(a)}.
          {' '}Asks for a person → {handLabel(a)}.
        </p>

        <div style={{marginTop:26}}>
          <Section title="How it is set up" summary={template(a.template).name+' · '+ruleCount(a)+' rules'}>
            <AgentSummary agent={a}/>
          </Section>
        </div>

        {!live && <div className="note" style={{marginTop:18}}>{I.info}
          <span>This agent is not in a dialer, so it is not live. Add it to a dialer in the Outbound Hub to
            put it live — it will run {cur ? cur.id : 'its current version'}.</span></div>}

        <div className="actionbar">
          <div className="ab-facts">
            <span className="ab-lead">
              {cur ? <>Current <b>{cur.id}</b> · {live ? 'live' : 'not live'}</> : <>No versions yet</>}</span>
            <span className="mono">
              {cur ? <>Saved {cur.when} by {cur.author}</> : <>Not saved yet</>}</span>
            <span className="mono">
              {creditsRows(a.id)
                ? <>Spent {fmtCredits(creditsBy(a.id))} credits over {creditsRows(a.id)} interactions</>
                : <>No credits spent yet</>}</span>
            {/* which dialers run it is decided in the Outbound Hub; here it is a fact to read */}
            <span className="mono">
              {live ? <>Live in {andList(dials)}</> : <>Not in a dialer</>}</span>
            <PrereqLink label="Learn more: AI agent collection prerequisites"/>
          </div>
          <div className="ab-danger">
            <button className="btn btn-dan btn-sm" onClick={()=>setAskDel(true)}>{ICO_TRASH}Delete agent</button>
          </div>
        </div>
      </div>
    </div>

    {history && !viewing && <Modal title="Version history" onClose={()=>setHistory(false)}
      actions={<button className="btn btn-gho" onClick={()=>setHistory(false)}>Close</button>}>
      <div className="vlist">
        {vs.slice().reverse().map(v=>
          <button className="vrowh" key={v.id} onClick={()=>setViewing(v)}>
            <span className="vid">{v.id}</span>
            <span className="vmeta"><b>{v.changed}</b><span>{v.author} · {v.when}</span></span>
            {/* the newest version is the one it runs; Live only if a dialer is running it */}
            {isCurrentVersion(a,v) && <span className="vdep mono"
              title={live ? 'Live · running in '+andList(dials) : 'The current version · not in a dialer'}>
              {live ? 'Live' : 'Current'}</span>}
            <span style={{color:'var(--ink-3)'}}>{I.fwd}</span>
          </button>)}
      </div>
    </Modal>}

    {viewing && <Modal title={viewing.id+' · read-only'} onClose={()=>setViewing(null)}
      actions={<><button className="btn btn-gho" onClick={()=>setViewing(null)}>Back</button>
        {!isCurrentVersion(a,viewing) &&
          <button className="btn btn-pri" onClick={()=>recover(viewing)}>Recover this version</button>}</>}>
      <div className="mono" style={{marginBottom:8}}>{viewing.author} · {viewing.when}
        {isCurrentVersion(a,viewing) ? (live ? ' · current, live in '+andList(dials) : ' · current, not live')
          : replacedBy(viewing) ? ' · replaced by '+replacedBy(viewing) : ''}</div>
      <p style={{marginTop:0}}>{viewing.changed}</p>
      <VersionDiff agent={a} version={viewing}/>
      <Section title={'How '+viewing.id+' was set up, in full'}
        summary={template(a.template).name}>
        <AgentSummary agent={agentAtVersion(a, viewing)}/>
      </Section>
    </Modal>}

    {askDel && <Modal title={'Delete '+a.name+'?'} onClose={()=>setAskDel(false)}
      actions={<><button className="btn btn-gho" onClick={()=>setAskDel(false)}>Keep it</button>
        <button className="btn btn-dan" onClick={()=>onDelete(a.id)}>{ICO_TRASH}Delete agent</button></>}>
      <p style={{marginTop:0}}>Its brief, its rules and its interaction history go with it. This cannot be undone.
        {live && <> <b>It is live in {andList(dials)}</b> — deleting it stops those calls.</>}</p>
    </Modal>}
  </div>;
}

/* ============================ 12 · INTERACTIONS ============================ */
const MED_ICO = {
  call:<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.4 5.6 8.2 3.4a1.6 1.6 0 0 0-2.3 0L4.4 4.9c-1 1-1 2.5-.4 3.9a22 22 0 0 0 11.2 11.2c1.4.6 2.9.6 3.9-.4l1.5-1.5a1.6 1.6 0 0 0 0-2.3l-2.2-2.2a1.6 1.6 0 0 0-2.3 0l-1 1a19 19 0 0 1-5.5-5.5l1-1a1.6 1.6 0 0 0 0-2.3z"/></svg>,
  chat:<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M20 11.5a7 7 0 0 1-10.3 6.2L5 19l1.2-4A7 7 0 1 1 20 11.5z"/><path d="M9.5 11h5"/></svg>,
  wa:<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.5-4.4A8.4 8.4 0 1 1 20.5 11.7z"/>
    <path d="M9 9.2c0 3 2.4 5.4 5.4 5.4.5 0 .9-.4.9-.9v-.9l-1.8-.9-.9.9a4 4 0 0 1-1.8-1.8l.9-.9L10.8 8.3H9.9c-.5 0-.9.4-.9.9z"/></svg>,
  sms:<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="3" width="16" height="18" rx="3"/><path d="M8 8h8M8 12h5"/></svg>,
  email:<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7 12 13l8.5-6"/></svg>,
};
const ICO_IN  = <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M17 7 7 17M7 9v8h8"/></svg>;
const ICO_OUT = <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M17 15V7H9"/></svg>;
const ICO_AI  = <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l2 5.5 5.5 2-5.5 2-2 5.5-2-5.5L4.5 10l5.5-2z"/></svg>;

/* The channel cell: what it was, which way it went, and whether an AI agent held it. */
function ChannelBadge({medium, dir, ai}){
  const m = MEDIA[medium];
  return <span className={'chb'+(ai?' chb-ai':'')} style={{background:m.soft, color:m.ink}}
    title={(ai?'AI agent · ':'')+m.label+' · '+(dir==='in'?'inbound':'outbound')}>
    {MED_ICO[medium]}
    <span className="chb-dir" style={{background:m.ink}}>{dir==='in'?ICO_IN:ICO_OUT}</span>
    {ai && <span className="chb-badge">{ICO_AI}</span>}
  </span>;
}

function Interactions({agents, onOpenRow}){
  const [filter, setFilter] = useState('all');
  const rows = INTERACTIONS.filter(r => filter==='all' ? true : filter==='ai' ? !!r.voice : !r.voice);
  const chip = on => on
    ? {background:'var(--accent-soft)', borderColor:'var(--accent)', color:'var(--accent-ink)', fontWeight:600}
    : null;
  return <div className="panel">
    <div className="panel-hd">
      <div className="panel-eyebrow">Analytics</div>
      <div style={{display:'flex', alignItems:'flex-end', gap:16, flexWrap:'wrap'}}>
        <h1 style={{margin:0}}>Interactions</h1>
        <div style={{marginLeft:'auto', display:'flex', gap:9, alignItems:'center'}}>
          <button className="btn btn-gho btn-sm">Search interaction</button>
        </div>
      </div>
    </div>
    <div className="wrap" style={{paddingTop:20}}>
      <div style={{display:'flex', gap:8, marginBottom:14, flexWrap:'wrap', alignItems:'center'}}>
        <button className="qbtn" style={chip(filter==='all')} onClick={()=>setFilter('all')}>All {INTERACTIONS.length}</button>
        <button className="qbtn" style={chip(filter==='ai')} onClick={()=>setFilter('ai')}>AI agents {aiRows().length}</button>
        <button className="qbtn" style={chip(filter==='people')} onClick={()=>setFilter('people')}>People {INTERACTIONS.length-aiRows().length}</button>
        <span className="note" style={{marginLeft:'auto'}}>{I.info}
          <span>AI agents and people, side by side. The star marks the AI ones — open any row to read it.</span></span>
      </div>

      <div className="itab-wrap">
        <table className="itab">
          <thead><tr>
            <th>Start time</th><th>End time</th><th>Channel</th><th>Client</th><th>Source</th>
            <th>Campaign</th><th>Handled by</th><th>Disposition</th><th>Promise</th><th className="ta-r">Credits</th><th className="ta-r">Duration</th>
          </tr></thead>
          <tbody>
            {rows.map(r=>{
              const v = r.voice ? persona(r.voice) : null;
              const ag = r.agent ? agents.find(a=>a.id===r.agent) : null;
              const open = () => onOpenRow(r.id);
              return <tr key={r.id} className={'itab-row'+(v?' itab-ai':'')} onClick={open}
                tabIndex={0} role="button"
                onKeyDown={e=>{ if(e.key==='Enter') open(); }}>
                <td className="tnum">{r.start}</td>
                <td className="tnum">{r.end}</td>
                <td><ChannelBadge medium={r.medium} dir={r.dir} ai={!!v}/></td>
                <td className="itab-cl">{r.client}</td>
                <td className="tnum" style={{color:'var(--ink-3)'}}>{r.source||'—'}</td>
                <td><span className={'pill '+(r.campaign==='Test'?'pill-reh':'pill-acc')}>{r.campaign}</span></td>
                <td>{v
                  ? <span style={{display:'flex', flexDirection:'column', gap:4}}>
                      <span className="itab-by"><Avatar p={v} size={22}/>{v.name}
                        <span className="vtier mono" style={{marginLeft:2}}>AI</span></span>
                      {r.then && <span className="itab-by" style={{color:'var(--ink-2)'}}>
                        <span className="itab-hum">{I.user}</span>{r.then}</span>}
                    </span>
                  : <span className="itab-by"><span className="itab-hum">{I.user}</span>{r.user}</span>}</td>
                <td style={{color:r.disp?'var(--ink)':'var(--ink-3)'}}>{r.disp||'—'}</td>
                {/* the promise a collections agent recorded: offer, amount, date */}
                <td className="itab-prom" style={{color:r.promise?'var(--ink)':'var(--ink-3)'}}>{r.promise
                  ? <span><b>{r.promise.offer==='intent' ? 'intent' : r.promise.offer}</b><span className="tnum">{r.promise.amount} · {r.promise.date}</span></span>
                  : '—'}</td>
                <td className="tnum ta-r" style={{color:v?'var(--ink)':'var(--ink-3)'}}
                  title={v?'Reported by the agent for this interaction':'Handled by a person — no credits'}>
                  {v ? fmtCredits(creditsOf(r)) : '—'}</td>
                <td className="tnum ta-r">{r.dur}</td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
      <div className="itab-foot">
        <span className="mono">Items per page: 50</span>
        <span className="mono">Items 1–{rows.length} of {rows.length}</span>
      </div>
    </div>
  </div>;
}

/* ============================ 13 · ONE INTERACTION, OPENED ============================ */
const TL_ICO = {
  hold:<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M7 3h10M7 21h10M8 3c0 4 8 5 8 9s-8 5-8 9"/></svg>,
  user:<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="3.2"/><path d="M5 20a7 7 0 0 1 14 0"/></svg>,
  queue:<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6v12M11 8v8M16 10v4"/></svg>,
  auto:<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="4" y="7" width="16" height="12" rx="4"/><circle cx="9.5" cy="13" r="1.2" fill="currentColor"/><circle cx="14.5" cy="13" r="1.2" fill="currentColor"/><path d="M12 7V4"/></svg>,
  disp:<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M8 4l3 5H5z"/><rect x="4" y="13" width="6" height="6" rx="1"/><circle cx="16.5" cy="16" r="3"/><circle cx="16.5" cy="6.5" r="2.5"/></svg>,
  end:<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"><path d="M7 7l10 10M17 7 7 17"/></svg>,
};
const ICO_LINK = <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9.5 14.5a4 4 0 0 1 0-5.7l2.8-2.8a4 4 0 0 1 5.7 5.7l-1.4 1.4"/><path d="M14.5 9.5a4 4 0 0 1 0 5.7l-2.8 2.8a4 4 0 0 1-5.7-5.7l1.4-1.4"/></svg>;
const ICO_RWD = <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 6 5 12l6 6M19 6l-6 6 6 6"/></svg>;
const ICO_FFW = <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 6l6 6-6 6M5 6l6 6-6 6"/></svg>;
const ICO_TAG = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 9.5 9.5 4H20v10.5L14.5 20H4z"/></svg>;
const ICO_DL = <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M12 8v6M9 11.5l3 3 3-3"/></svg>;
const ICO_COPY = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M15 5.5H6a1.5 1.5 0 0 0-1.5 1.5v9"/></svg>;

function SumField({title, text}){
  const [done, setDone] = useState(false);
  const copy = () => { try{ navigator.clipboard && navigator.clipboard.writeText(text); }catch(e){}
    setDone(true); setTimeout(()=>setDone(false), 1400); };
  return <div className="sf">
    <div className="sf-hd">
      <span className="sf-t">{title}</span>
      <button className="sf-copy" onClick={copy} aria-label={'Copy '+title}>
        {done ? I.check : ICO_COPY}</button>
    </div>
    <p className="sf-b">{text}</p>
  </div>;
}

function ConversationSummary({row, agents}){
  const sum = ixSummary(row, agents);
  if(!sum) return <div className="ixempty">
    <span className="ixempty-ico">{ICO_AI}</span>
    <div style={{fontWeight:600, fontSize:16}}>No summary for this interaction</div>
    <p className="sub" style={{maxWidth:'44ch', margin:'6px auto 0'}}>
      Summaries are written by the AI agent that held the conversation. This one was handled by a person.</p>
  </div>;
  const sen = SENTIMENTS[sum.sentiment];
  return <div className="sumtab">
    <div className="sf-title">Conversation summary</div>
    <p className="field-h" style={{marginTop:2}}>A quick overview of the conversation.</p>
    <div className="sf-t" style={{marginTop:22}}>Sentiment</div>
    <div className="sf-sent" style={{background:sen.ink}}>{sum.sentiment}</div>
    <SumField title="Main reason of the conversation" text={sum.reason}/>
    <SumField title="Key points discussed" text={sum.key}/>
    <SumField title="Resolution" text={sum.resolution}/>
    {row.promise && <div className="sf"><div className="sf-hd"><span className="sf-t">Recorded promise</span></div>
      <PromiseCard p={row.promise} title="What the agent recorded when it reached a date"/></div>}
  </div>;
}

const WAVE = [2,1,1,3,1,1,2,9,2,1,1,14,3,1,1,6,20,14,9,7,5,4,3,3,2,2,3,2,12,7,4,3,5,3,2,1,1,1,2,18,4,3,2,9,7,6,5,4,3,2];

function JsonView({data}){
  const paint = (v, depth) => {
    const pad = '  '.repeat(depth);
    if(v===null) return <span className="j-null">null</span>;
    if(typeof v==='number') return <span className="j-num">{v}</span>;
    if(typeof v==='string') return <span className="j-str">"{v}"</span>;
    if(Array.isArray(v)) return <>{'['}{v.map((x,i)=>
      <div key={i} style={{paddingLeft:16}}>{paint(x, depth+1)}{i<v.length-1?',':''}</div>)}{pad}{']'}</>;
    const ks = Object.keys(v);
    return <>{'{'}{ks.map((k,i)=>
      <div key={k} style={{paddingLeft:16}}><span className="j-key">"{k}"</span>: {paint(v[k], depth+1)}{i<ks.length-1?',':''}</div>)}{pad}{'}'}</>;
  };
  return <pre className="jsonv">{paint(data,0)}</pre>;
}

function InteractionDetail({row, agents, onBack, onTeach, initialTab}){
  const [tab, setTab] = useState(initialTab || (row.voice ? 'sum' : 'main'));
  const [rail, setRail] = useState(null);          // 'comments' | 'quality' | null
  const [evaluating, setEvaluating] = useState(false);
  const [tlOpen, setTlOpen] = useState(true);
  const v = row.voice ? persona(row.voice) : null;
  const ag = row.agent ? agents.find(a=>a.id===row.agent) : null;
  const m = MEDIA[row.medium];
  const isCall = row.medium==='call';
  const events = ixEvents(row, agents);
  const thread = ixThread(row, agents);
  return <div className="panel ixd">
    <div className="ixtabs">
      <button className={'ixtab'+(tab==='sum'?' on':'')} onClick={()=>setTab('sum')}>Summary</button>
      <button className={'ixtab'+(tab==='main'?' on':'')} onClick={()=>setTab('main')}>
        {isCall?'Transcription':'Chat'}</button>
      <button className={'ixtab'+(tab==='data'?' on':'')} onClick={()=>setTab('data')}>Data</button>
    </div>

    <div className="ixd-hd">
      <button className="btn btn-qui btn-sm" onClick={onBack} aria-label="Back to interactions">{I.back}</button>
      <span className="chb" style={{background:m.soft, color:m.ink, boxShadow:'0 0 0 1.5px '+m.ink}}>
        {MED_ICO[row.medium]}</span>
      <span className={'pill '+(row.campaign==='Test'?'pill-reh':'pill-acc')}>{row.campaign}</span>
      <span className="ixd-who">{ICO_LINK}{row.medium==='email' ? 'Subject: '+thread[0].subject : row.source||row.client}</span>
      {v && <span className="pill pill-acc"><i/>{v.name} · AI agent</span>}
      {v && <span className="pill credit-pill tnum"
        title="Credits this interaction reported, from the webhook">{fmtCredits(creditsOf(row))} credits</span>}
      {row.promise && <span className="pill pill-live" title={'Promise recorded: '+row.promise.offer+' · '+row.promise.amount+' · '+row.promise.date}>
        <i/>Promise · {row.promise.amount} · {row.promise.date}</span>}
      <span style={{marginLeft:'auto', display:'flex', gap:9}}>
        {v && ag && <button className="btn btn-gho btn-sm" onClick={()=>onTeach(ag.id, row.call)}>{I.wand}Teach it</button>}
        <button className={'btn-uc'+(rail==='comments'?' on':'')}
          onClick={()=>setRail(rail==='comments'?null:'comments')}>Comments</button>
        <button className={'btn-uc'+(rail==='quality'?' on':'')}
          onClick={()=>setRail(rail==='quality'?null:'quality')}>Quality</button>
      </span>
    </div>

    {isCall && <div className="player">
      <div className="wave-ticks">{[5,10,15,20,25].map(n=><span key={n}>{n}</span>)}</div>
      <div className="wave-cursor"/>
      <div className="wave2">{WAVE.map((h,i)=><i key={i} style={{height:Math.max(2,h)+'px'}}/>)}</div>
      <div className="player-ctl">
        <span className="mono tnum">00:00</span>
        <span className="pbtn">{ICO_RWD}</span>
        <span className="pbtn pbtn-lg">{I.play}</span>
        <span className="pbtn">{ICO_FFW}</span>
        <span className="pbtn" style={{marginLeft:10}}>{I.chat}</span>
        <span className="pbtn">{ICO_TAG}</span>
        <span className="uc-dl" style={{marginLeft:'auto'}} title="Download recording">{ICO_DL}</span>
      </div>
    </div>}

    <div className="ixd-body">
      {tlOpen
        ? <div className="tl">
            <div className="tl-hd">
              <span className="mono">Timeline</span>
              <button className="btn btn-qui btn-sm" onClick={()=>setTlOpen(false)} aria-label="Hide timeline">{I.back}</button>
            </div>
            {events.map((e,i)=>{
              const first = e.k==='start', last = e.k==='end';
              return <div className="tl-row" key={i}>
                <span className="tl-at">{e.at
                  ? <>{e.at.d}<br/>{e.at.t}</>
                  : ''}</span>
                <span className="tl-rail">
                  <span className="tl-ico" style={first?{background:m.ink, color:'#fff'}
                    : last?{background:'var(--uc-red)', color:'#fff'}
                    : e.k==='hold'?{background:'var(--uc-orange)', color:'#fff'}
                    : e.k==='ai'?{background:'var(--accent)', color:'#fff'}
                    : e.k==='auto'?{background:'var(--uc-blue)', color:'#fff'}
                    : e.k==='disp'?{background:'var(--uc-blue-soft)', color:'var(--uc-blue)'}
                    : {background:'var(--uc-grey)', color:'#fff'}}>
                    {first ? MED_ICO[row.medium] : last ? TL_ICO.end
                      : e.k==='ai' ? ICO_AI : e.k==='hold' ? TL_ICO.hold
                      : e.k==='disp' ? TL_ICO.disp : e.k==='auto' ? TL_ICO.auto : TL_ICO.user}
                  </span>
                  {!last && <span className="tl-line" style={{background:m.ink}}/>}
                </span>
                <span className="tl-txt">
                  <span className="tl-lbl">{e.label}</span>
                  {e.who && <span className="tl-sub">
                    {e.voice ? <Avatar p={persona(e.voice)} size={18}/> : TL_ICO.user}{e.who}</span>}
                  {e.team && <span className="tl-sub">{TL_ICO.queue}{e.team}</span>}
                  {e.dur && <span className="tl-sub">{I.clock}{e.dur}</span>}
                  {e.val && <span className="tl-sub">{e.val}</span>}
                  {e.list && e.list.map((d,j)=><span className="tl-sub" key={j}><sup>{j+1}</sup> {d}</span>)}
                </span>
              </div>;
            })}
          </div>
        : <button className="tl-open" onClick={()=>setTlOpen(true)} aria-label="Show timeline">{I.fwd}</button>}

      <div className="ixmain">
        {tab==='sum'
          ? <ConversationSummary row={row} agents={agents}/>
          : tab==='data'
          ? <JsonView data={ixJson(row)}/>
          : (isCall && !v)
            ? <div className="ixempty">
                <span className="ixempty-ico">{I.chat}</span>
                <div style={{fontWeight:600, fontSize:16}}>No transcription for this call</div>
                <p className="sub" style={{maxWidth:'42ch', margin:'6px auto 0'}}>
                  Calls handled by people are recorded, not transcribed. Interactions an AI agent held come with a full transcript.</p>
              </div>
            : <div className="msgs">
                {thread.map((msg,i)=>
                  <div className={'msg'+(msg.who==='agent'?' msg-a':'')} key={i}>
                    {msg.who==='agent' && msg.ai
                      ? <Avatar p={persona(msg.voice)} size={26}/>
                      : <span className="msg-ava" style={msg.who==='agent'?{background:'var(--grey-soft)', color:'var(--ink-3)'}:null}>{TL_ICO.user}</span>}
                    <span className="msg-b">
                      <span className="msg-hd mono">{msg.name} · {msg.time}{msg.read?' ✓✓':''}</span>
                      {msg.subject && <span className="msg-subj">{msg.subject}</span>}
                      <span className="msg-t">{msg.text}</span>
                    </span>
                  </div>)}
              </div>}
      </div>

      {rail==='comments' && <div className="ixrail">
        <div style={{fontWeight:600, fontSize:15, marginBottom:10}}>Comments</div>
        <p className="field-h">Nobody has commented on this interaction.</p>
        <textarea className="inp" placeholder="Add a comment…" style={{marginTop:10, minHeight:70}}/>
      </div>}

      {rail==='quality' && <div className="ixrail">
        {!evaluating
          ? <div style={{textAlign:'center', paddingTop:20}}>
              <span className="ixempty-ico" style={{margin:'0 auto 12px'}}>{I.shield}</span>
              <div style={{fontWeight:600}}>No evaluations yet</div>
              <p className="field-h" style={{margin:'6px 0 14px'}}>Results appear here once you complete one.</p>
              <button className="btn btn-pri btn-sm" onClick={()=>setEvaluating(true)}>Evaluate</button>
            </div>
          : <>
              <div style={{fontWeight:600, fontSize:15, marginBottom:12}}>Evaluation</div>
              <div className="mono" style={{marginBottom:6}}>Evaluee — campaign</div>
              <div className="inp" style={{display:'flex', gap:8, alignItems:'center', marginBottom:12}}>
                {v?v.name:row.user}<span className={'pill '+(row.campaign==='Test'?'pill-reh':'pill-acc')}>{row.campaign}</span></div>
              <div className="mono" style={{marginBottom:6}}>Model</div>
              <select className="inp" defaultValue=""><option value="">No data available</option></select>
              <div style={{display:'flex', gap:9, marginTop:16}}>
                <button className="btn btn-gho btn-sm" onClick={()=>setEvaluating(false)}>Cancel</button>
                <button className="btn btn-pri btn-sm" style={{flex:1}} onClick={()=>setEvaluating(false)}>Save</button>
              </div>
            </>}
      </div>}
    </div>
  </div>;
}

/* ============================ 3 · SCOPE, RECEPTIONIST ============================ */
/* Only routed for template 'reception'. The existing StepBrief is untouched. */
function StepBriefReception({draft, set, next, back}){
  const [open, setOpen] = useState(null);
  const t = template(draft.template), p = persona(draft.personaId);
  const tk = draft.tokens;
  const goals = goalsFor(draft.template);
  const goal = val(goals, tk.goal);
  const fields = draft.collect || [], k = draft.knowledge || {about:'', urls:[]};
  const asked = fields.filter(f=>f.on);
  const setTok = (kk,v) => set({tokens:{...tk, [kk]:v}});
  const tog = kk => () => setOpen(open===kk?null:kk);
  const toggleField = id => set({collect: fields.map(f=>f.id===id?{...f, on:!f.on}:f)});
  /* several jobs at once; the list keeps the canonical order, and tokens.goal tracks its first
     so every screen that quotes a single goal keeps working */
  const gIds = goalIds(draft);
  const toggleGoal = id => {
    const next = goals.map(g=>g.id).filter(x => x===id ? gIds.indexOf(id)<0 : gIds.indexOf(x)>-1);
    if(!next.length) return;                         // it must still do something
    set({tokens:{...tk, goals:next, goal:next[0]}});
  };
  const disclosure = disclosureFor(draft);
  /* putting callers through is much of a receptionist's job, so every hand-off is offered —
     taking a message is simply the one it starts on */
  const handoffs = handoffFor(draft.template);
  return <>
    <div className="wrap wz-wide"><div className="brief-2col">
      <div>
        <StepHead title="What it will do on every call"
          sub="Written out in full. Anything underlined is yours to change — tap it."/>
        <p className="brief">
          It answers calls to <Chip label={tk.company} hint="The name the agent says out loud." isOpen={open==='company'} onOpen={tog('company')}>
            <input className="inp" autoFocus value={tk.company} onChange={e=>setTok('company', e.target.value)}/>
            <div className="note" style={{marginTop:9}}>{I.info}<span>Used in the greeting and the disclosure.</span></div>
          </Chip>.
          {' '}It greets callers, <Chip label={collectLabel(fields)} hint="What it asks every caller, in this order." isOpen={open==='collect'} onOpen={tog('collect')}>
            <div role="group" aria-label="Fields it collects">{fields.map(f=>
              <div className="cf" key={f.id}>
                <button className="opt" role="checkbox" aria-checked={f.on} onClick={()=>toggleField(f.id)}>
                  <span className="cbx">{f.on && I.check}</span><span>{f.label}</span>
                </button>
                {f.custom && <button className="prom-x" aria-label={'Remove '+f.label}
                  onClick={()=>set({collect: fields.filter(x=>x.id!==f.id)})}>{I.x}</button>}
              </div>)}</div>
            <CollectAdd fields={fields} set={set}/>
            <div className="note" style={{marginTop:10}}>{I.info}<span>Anything you add here is asked of every caller, and shows on the rules step with its wording.</span></div>
          </Chip>, <Chip label={goalLabel(draft)} hint="What the call is for. A receptionist can do more than one." isOpen={open==='goal'} onOpen={tog('goal')}>
            <div role="group" aria-label="What the call is for">{goals.map(o=>{
              const on = gIds.indexOf(o.id)>-1;
              return <button className="opt" role="checkbox" aria-checked={on} key={o.id} onClick={()=>toggleGoal(o.id)}>
                <span className="cbx">{on && I.check}</span><span>{o.v}</span>
              </button>;})}</div>
            <div className="note" style={{marginTop:10}}>{I.info}<span>Pick as many as it should handle. It always keeps at least one — {goals[0].v} is the fallback.</span></div>
          </Chip>, and when it can’t help it <Chip label={handLabel(draft)} align="right"
            hint="What it does when it cannot help, or the caller asks for a person."
            isOpen={open==='handoff'} onOpen={tog('handoff')}>
            <div role="radiogroup">{handoffs.map(o=>
              <Option key={o.id} on={o.id===tk.handoff} onClick={()=>{setTok('handoff', o.id); if(o.id!=='campaign') setOpen(null);}}>{o.v}</Option>)}</div>
            {tk.handoff==='campaign' && <select className="inp" style={{marginTop:10}} value={campaignOf(draft)}
              aria-label="Campaign" onChange={e=>setTok('campaign', e.target.value)}>
              {CAMPAIGNS.map(c=><option key={c} value={c}>{c}</option>)}</select>}
            <div className="note" style={{marginTop:10}}>{I.info}<span>Transfer puts the caller
              through live, to the people working that campaign. Taking a message ends the call and sends your team what it collected.</span></div>
          </Chip>.
        </p>
        <p className="brief" style={{marginTop:22}}>
          Every call it answers opens with <span className="chip-fix" title="Required disclosure — cannot be removed">{I.lock}{disclosure}</span>{' '}
          <Chip label={draft.opener} hint="The greeting, in the agent’s own voice." isOpen={open==='opener'} onOpen={tog('opener')}>
            <textarea className="inp" autoFocus value={draft.opener} onChange={e=>set({opener:e.target.value})}/>
            <div className="note" style={{marginTop:9}}>{I.info}<span>Keep it to one sentence. {p.name} says it in {LANGS[p.lang].short}.</span></div>
          </Chip>
        </p>
        <p className="brief" style={{marginTop:22}}>
          It <span className="chip-ro" title="Set below, under What it knows">{knowledgeLabel(k)}</span>.
        </p>

        <div style={{marginTop:26}}>
          <Section title="What it knows" summary={knowledgeCount(k)}
            hint="Answers come only from here. Leave it empty and the agent takes a message instead of guessing.">
            <div className="mono" style={{marginBottom:8}}>About the company</div>
            <textarea className="inp" value={k.about} placeholder="Opening hours, what you do, how to find you…"
              onChange={e=>set({knowledge:{...k, about:e.target.value}})}/>
            <div className="mono" style={{margin:'16px 0 8px'}}>Website pages it learns from</div>
            <div className="urls"><TagInput tags={k.urls} onChange={urls=>set({knowledge:{...k, urls}})}
              placeholder="Paste a page address and press Enter…"/></div>
            <div className="mono" style={{margin:'16px 0 8px'}}>Files it learns from</div>
            <KnowledgeFiles k={k} set={set}/>
          </Section>
        </div>
      </div>

      <div className="prev">
        <div className="prev-hd">
          <Avatar p={p} size={26}/>
          <span style={{fontWeight:600, fontSize:13.5}}>{p.name}</span>
        </div>
        <div className="prev-body">
          <div className="bub bub-a" key={'g'+disclosure+draft.opener}><span className="bub-lab">{p.name}</span>
            <span className="disc">{disclosure}</span> {draft.opener}</div>
          <div className="bub bub-c" key="c0"><span className="bub-lab">Caller</span>{t.custSay}</div>
          {asked.map(f=><React.Fragment key={f.id}>
            <div className="bub bub-a"><span className="bub-lab">{p.name}</span>{f.question}</div>
            <div className="bub bub-c"><span className="bub-lab">Caller</span>{CALLER_SAYS[f.id]||'Sure — yes.'}</div>
          </React.Fragment>)}
          <div className="bub bub-a" key={'goal'+goal.id}><span className="bub-lab">{p.name}</span>{goal.say}</div>
        </div>
      </div>
    </div></div>
    <Foot onBack={back} onNext={next} nextOk={!!tk.company.trim()} wide/>
  </>;
}

/* ============================ COLLECTIONS: BALANCE, OFFERS, CLOSING ============================ */
/* A small field naming the contact-list column a value is read from. */
function ListColumn({draft, set, k, label}){
  const tk = draft.tokens, cols = {...LIST_COLS, ...(tk.cols||{})};
  return <label className="listcol" onClick={e=>e.stopPropagation()}>
    <span className="addq-l">{label || 'List column'}</span>
    <input className="inp" value={cols[k]} aria-label={'List column for '+k} spellCheck={false}
      onChange={e=>set({tokens:{...tk, cols:{...cols, [k]:e.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,'')}}})}/>
  </label>;
}
/* "It also mentions:" — siblings of the amount radio, applied whichever radio is chosen. */
function MentionsPicker({draft, set}){
  const tk = draft.tokens, m = mentionsOf(draft), unit = overdueUnit(draft);
  const tog = id => set({tokens:{...tk, mentions:{...m, [id]:!m[id]}}});
  return <div className="mentions">
    <div className="pop-t" style={{marginTop:14}}>It also mentions:</div>
    <div role="group" aria-label="It also mentions">
      {MENTIONS.map(x => <div className="offer-row" key={x.id}>
        <button className="opt" role="checkbox" aria-checked={m[x.id]} onClick={()=>tog(x.id)}>
          <span className="cbx">{m[x.id] && I.check}</span><span>{x.v}</span>
        </button>
        {m[x.id] && <div className="offer-sub">
          {x.id==='overdue' && <span className="unitpick" role="radiogroup" aria-label="Overdue in">
            {['days','months'].map(u => <button key={u} role="radio" aria-checked={unit===u}
              className={'step-pill'+(unit===u?' on':'')} onClick={()=>set({tokens:{...tk, overdueUnit:u}})}>{u}</button>)}
          </span>}
          <ListColumn draft={draft} set={set} k={x.id}/>
        </div>}
      </div>)}
    </div>
    <div className="note" style={{marginTop:8}}>{I.info}<span>Each value comes from the campaign’s contact list, from the column named here. In this preview {overdueN(draft)} {unit} and contract {contractOf(draft)} stand in for them.</span></div>
  </div>;
}
/* What it can offer: ordered checkboxes. It offers them in this order and stops at the first yes. */
function OffersPicker({draft, set}){
  const tk = draft.tokens, list = offersOf(draft);
  const write = next => set({tokens:{...tk, offers:next}});
  const tog = i => write(list.map((x,j)=> j===i ? {...x, on:!x.on} : x));
  const move = (i, d) => { const j = i + d; if(j<0 || j>=list.length) return;
    const next = list.slice(); const t = next[i]; next[i] = next[j]; next[j] = t; write(next); };
  const setParam = id => n => set({tokens:{...tk, params:{...(tk.params||{}), [id]:n}}});
  let rank = 0;
  return <div>
    <div role="group" aria-label="What it can offer">
      {list.map((x,i) => { const g = offerDef(x.id), gp = paramOf(x.id); if(x.on) rank++;
        return <div className={'offer-row'+(x.on?' on':'')} key={x.id}>
          <div className="offer-top">
            <span className="offer-n mono">{x.on ? rank : ''}</span>
            <button className="opt" role="checkbox" aria-checked={x.on} onClick={()=>tog(i)}>
              <span className="cbx">{x.on && I.check}</span><span>{gp ? g.v+' N '+gp.unit : g.v}</span>
            </button>
            <span className="offer-mv">
              <button className="btn btn-qui btn-sm" aria-label={'Move '+g.v+' up'} disabled={i===0} onClick={()=>move(i,-1)}>{I.arrowUp}</button>
              <button className="btn btn-qui btn-sm" aria-label={'Move '+g.v+' down'} disabled={i===list.length-1} onClick={()=>move(i,1)}>{I.arrowDown}</button>
            </span>
          </div>
          {x.on && (gp || x.id==='minimum' || x.id==='reduced') && <div className="offer-sub">
            {gp && <ParamStepper gp={gp} pv={paramVal(draft, x.id)} setParam={setParam(x.id)} close={()=>{}}/>}
            {(x.id==='minimum' || x.id==='reduced') && <ListColumn draft={draft} set={set} k={x.id}/>}
          </div>}
          {x.on && x.id==='partial' && <div className="offer-note">The agent works out {paramVal(draft,'partial')}% of the amount on the list — {offerAmount(draft,'partial')} here.</div>}
          {x.on && x.id==='reduced' && <div className="offer-note">The agent never calculates a discount; it reads the figure from the list — {PLACEHOLDERS.reduced} here.</div>}
        </div>; })}
    </div>
    <div className="opt-lock offer-fallback">{I.lock}<span>{FALLBACK_LINE}</span></div>
  </div>;
}
function OffersChip({draft, set, open, tog}){
  const isOpen = open==='offers';
  return <span className="chip-wrap">
    <button className={'chip'+(isOpen?' open':'')} onClick={tog('offers')} title={'Edit — '+offersLabel(draft)}>{offersLabel(draft)}</button>
    {isOpen && <Popover onClose={tog('offers')} wide>
      <div className="pop-t">What it can offer</div>
      <div className="pop-h">Tick what it may offer and put them in order. It offers one at a time and stops at the first yes.</div>
      <OffersPicker draft={draft} set={set}/>
    </Popover>}
  </span>;
}
/* Optional. Read word for word at the end of every call, like the disclosure at the start. */
function ClosingChip({draft, set, open, tog}){
  const tk = draft.tokens, c = closingOf(draft), isOpen = open==='closing';
  return <span className="chip-wrap">
    <button className={'chip'+(isOpen?' open':'')+(c?'':' chip-empty')} onClick={tog('closing')}
      title={c ? 'Edit — closing line' : 'Add a closing line'}>{c ? '“'+c+'”' : 'no closing line — add one'}</button>
    {isOpen && <Popover onClose={tog('closing')}>
      <div className="pop-t">Closing line</div>
      <div className="pop-h">Optional. Read word for word at the end of every call. Leave it empty for none.</div>
      <textarea className="inp" autoFocus value={tk.closing||''} placeholder="Gracias por su tiempo. Banco Sol le desea un buen día."
        aria-label="Closing line" onChange={e=>set({tokens:{...tk, closing:e.target.value}})}/>
    </Popover>}
  </span>;
}
/* The promise the agent records whenever it reaches a date. */
function PromiseCard({p, title}){
  if(!p) return null;
  return <div className="promise">
    <span className="mono">{title || 'Promise recorded'}</span>
    <div className="promise-row">
      <span><b>Offer</b>{p.offer==='intent' ? 'intent — the date the customer gave' : p.offer}</span>
      <span><b>Amount</b>{p.amount}</span>
      <span><b>Date</b>{p.date}</span>
    </div>
  </div>;
}
