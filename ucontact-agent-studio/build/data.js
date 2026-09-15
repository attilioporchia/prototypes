/* ---- Languages and the voices available in each (as in uContact's Languages panel) ---- */
const LANGS = {
  en:{id:'en', name:'English (United States)', short:'English (US)'},
  es:{id:'es', name:'Spanish (Latin America)', short:'Spanish (LATAM)'},
};
const TIER = 'Premium V2';
const PERSONAS = [
  /* English (United States) */
  {id:'alice',     name:'Alice',     lang:'en', tier:TIER, grad:'linear-gradient(140deg,#7C5BF7,#C25BE0)',
   line:'Good afternoon, I’m calling from the clinic. Do you have a minute?'},
  {id:'alyssa',    name:'Alyssa',    lang:'en', tier:TIER, grad:'linear-gradient(140deg,#F0722E,#F5B03D)',
   line:'Hi! I’m calling about the quote you asked us for.'},
  {id:'catherine', name:'Catherine', lang:'en', tier:TIER, grad:'linear-gradient(140deg,#3D7BF5,#4FC0E8)',
   line:'Good afternoon. Am I speaking with the account holder?'},
  {id:'emily',     name:'Emily',     lang:'en', tier:TIER, grad:'linear-gradient(140deg,#E0489B,#F58BB0)',
   line:'Hello, I’m calling to confirm your appointment on Thursday at ten.'},
  {id:'felix',     name:'Felix',     lang:'en', tier:TIER, grad:'linear-gradient(140deg,#1FA85E,#6BD46A)',
   line:'Good afternoon, I’m calling on behalf of the company.'},
  {id:'gail',      name:'Gail',      lang:'en', tier:TIER, grad:'linear-gradient(140deg,#8A5BF7,#5BA8F7)',
   line:'Hi there, I’m returning your call about the message you left.'},
  {id:'james',     name:'James',     lang:'en', tier:TIER, grad:'linear-gradient(140deg,#2F6BD8,#33A2C4)',
   line:'Good afternoon. I’ll keep this brief — it’s about your request.'},
  /* Spanish (Latin America) */
  {id:'antonio',   name:'Antonio',   lang:'es', tier:TIER, grad:'linear-gradient(140deg,#5B3DF5,#8A5BF7)',
   line:'Buenas tardes, le llamo de parte de la clínica. ¿Tiene un minuto?'},
  {id:'bob',       name:'Bob',       lang:'es', tier:TIER, grad:'linear-gradient(140deg,#0E9F52,#68C98A)',
   line:'Buenas tardes, le llamo en nombre de la compañía.'},
  {id:'charles',   name:'Charles',   lang:'es', tier:TIER, grad:'linear-gradient(140deg,#C97A00,#F0B54A)',
   line:'Buenas, ¿cómo está? Le llamo un momento por su solicitud.'},
  {id:'frank',     name:'Frank',     lang:'es', tier:TIER, grad:'linear-gradient(140deg,#3D7BF5,#5BC0E8)',
   line:'Buenas tardes. ¿Hablo con la persona titular?'},
  {id:'gloria',    name:'Gloria',    lang:'es', tier:TIER, grad:'linear-gradient(140deg,#E0489B,#F79ABF)',
   line:'¡Hola! ¿Cómo está? Le llamo por la consulta que nos dejó.'},
  {id:'linda',     name:'Linda',     lang:'es', tier:TIER, grad:'linear-gradient(140deg,#B8420C,#F0803D)',
   line:'Buenas tardes, le devuelvo la llamada por el mensaje que dejó.'},
].map(v => ({...v, reg:LANGS[v.lang].name+' · '+v.tier}));
const voicesIn = lang => PERSONAS.filter(v => v.lang===lang);

/* ---- Handover: when the agent stops and gives the call to a person ---- */
const HANDOVER = [
  {id:'asks',     v:'The customer asks for a person', always:true, short:'asks for a person'},
  {id:'angry',    v:'The customer is upset or raises their voice', short:'gets upset'},
  {id:'legal',    v:'The customer mentions a complaint, a lawyer or the regulator', short:'mentions a complaint or a lawyer'},
  {id:'consent',  v:'The customer says they never agreed to be contacted', short:'says they never agreed to be contacted'},
  {id:'offtopic', v:'The customer asks about something outside this agent’s job', short:'asks about something outside its job'},
  {id:'repeat',   v:'The agent has asked the same question twice without an answer', short:'will not answer a question twice over'},
  {id:'promise',  v:'The customer insists on something the agent may not promise', short:'insists on something it may not promise'},
  {id:'silence',  v:'The customer goes quiet for more than ten seconds', short:'goes quiet'},
];
/* "a, b or c" — used by the prose summary */
const orList = xs => xs.length<2 ? (xs[0]||'') : xs.slice(0,-1).join(', ')+' or '+xs[xs.length-1];
const HANDOVER_SEED = {
  reception:    ['angry','repeat'],
  leads:        ['promise','offtopic'],
  appointments: ['angry','offtopic'],
  messages:     ['angry','repeat'],
  collections:  ['legal','consent','promise'],
};
const SEED_HANDOVER = [
  ['angry','offtopic'], ['promise','offtopic'], ['angry','repeat'], [], ['legal','consent','promise'],
];

/* Collections may never discuss a balance with whoever happens to answer, so
   "speaks to whoever answers" is not an option there — it cannot be chosen at all. */
const identityFor = tid => tid==='collections' ? IDENTITY.filter(o => o.id!=='none') : IDENTITY;

/* Two collections goals hold a number the supervisor taps rather than types. */
const GOAL_PARAMS = {
  /* custom:'replace' drops the last preset in favour of a Custom pill; custom:'add' keeps every
     preset and appends one. Either way the supervisor can type an exact number. */
  date5:   {def:5,  opts:[3,5,7,15,30], fmt:n=>n+' days', say:n=>n+' días',
            title:'Days to pay', hint:'How long the customer gets before the date it agrees.',
            custom:'replace', unit:'days', max:180},
  partial: {def:30, opts:[30,50,70],    fmt:n=>n+'%',     say:n=>n+'%',
            title:'Minimum share', hint:'The smallest part of the balance the agent may accept.',
            custom:'add', unit:'%', max:100},
};
const paramOf = goalId => GOAL_PARAMS[goalId] || null;
const paramVal = (o, goalId) => {
  const gp = paramOf(goalId); if(!gp) return null;
  const ps = (o && o.tokens && o.tokens.params) || {};
  return ps[goalId]==null ? gp.def : ps[goalId];
};
/* Read a goal through these two so the number shows up everywhere it is quoted. */
const goalOf    = o => val(goalsFor(o.template), o.tokens.goal);
const goalLabel = o => { const g = goalOf(o), gp = paramOf(g.id);
  return gp ? g.v+' '+gp.fmt(paramVal(o, g.id)) : g.v; };
const goalSay   = o => { const g = goalOf(o), gp = paramOf(g.id);
  return gp ? g.say.replace('{n}', gp.say(paramVal(o, g.id))) : g.say; };
const optLabel  = (o, draft) => { const gp = paramOf(o.id);
  return gp ? o.v+' '+gp.fmt(paramVal(draft, o.id)) : o.v; };

const callsFor = a => (a.calls ? CALL_LOG.slice() : []);

/* ---- Interactions log (Analytics › Interactions) ---- */
const MEDIA = {
  call:  {label:'Call',     ink:'#3D7BF5', soft:'#E8F1FE'},
  chat:  {label:'Web chat', ink:'#D8433A', soft:'#FCEBEA'},
  wa:    {label:'WhatsApp', ink:'#12A150', soft:'#E4F6EC'},
  email: {label:'Email',    ink:'#EF7327', soft:'#FDF0E8'},
  sms:   {label:'SMS',      ink:'#7C3AED', soft:'#F0EAFE'},
};
/* Rows an AI agent handled carry `voice`; the rest were handled by people. */
const INTERACTIONS = [
  {id:'i1',  start:'2026-08-31 09:14:02', end:'2026-08-31 09:15:08', medium:'call',  dir:'out',
   client:'María Herrera',        source:'5980114227', campaign:'Citas_Sept',   voice:'gloria',  agent:'a1',
   call:'c2', disp:'Confirmed',   dur:'1m 06s'},
  {id:'i5',  start:'2026-08-31 09:05:12', end:'2026-08-31 09:06:04', medium:'call',  dir:'in',
   client:'+16172853680',         source:'15513483152', campaign:'Sales_Engineers', user:'PS Agent',
   disp:'Unsolved',   dur:'52s'},
  {id:'i2',  start:'2026-08-31 09:12:44', end:'2026-08-31 09:13:36', medium:'wa',    dir:'in',
   client:'+57 310 555 0142',     source:'wa_business', campaign:'Cobros_Ago', voice:'frank',   agent:'a5',
   call:'c1', disp:'Handed over', dur:'52s'},
  {id:'i9',  start:'2026-08-31 08:40:07', end:'2026-08-31 09:02:19', medium:'email', dir:'in',
   client:'Team Twilio',          source:'',           campaign:'Test',        user:'ccass_spena',
   disp:'Unsolved',   dur:'22m 12s'},
  {id:'i3',  start:'2026-08-31 09:11:20', end:'2026-08-31 09:12:31', medium:'call',  dir:'out',
   client:'Jorge Betancur',       source:'5980114227', campaign:'Citas_Sept',   voice:'gloria',  agent:'a1',
   call:'c1', disp:'Took a message', dur:'1m 11s'},
  {id:'i12', start:'2026-08-31 08:15:03', end:'2026-08-31 08:16:44', medium:'call',  dir:'in',
   client:'+16172853680',         source:'15513483152', campaign:'Sales_Engineers', user:'Support_IVR',
   disp:'',           dur:'1m 41s'},
  {id:'i4',  start:'2026-08-31 09:08:55', end:'2026-08-31 09:09:37', medium:'chat',  dir:'in',
   client:'sebastian.pena…',      source:'web_widget', campaign:'Test',        voice:'linda',   agent:'a3',
   call:'c5', disp:'Solved',      dur:'42s'},
  {id:'i10', start:'2026-08-31 08:31:55', end:'2026-08-31 08:33:02', medium:'chat',  dir:'in',
   client:'Facebook Ads Team',    source:'web_widget', campaign:'Test',        user:'ccass_spena',
   disp:'Solved',     dur:'1m 07s'},
  {id:'i13', start:'2026-08-31 08:04:58', end:'2026-08-31 08:06:12', medium:'call',  dir:'out',
   client:'Camilo Restrepo',      source:'5980114227', campaign:'Citas_Sept',   voice:'gloria',  agent:'a1',
   call:'c4', disp:'Handed over', then:'psagent1', dur:'1m 14s'},
  {id:'i6',  start:'2026-08-31 08:58:30', end:'2026-08-31 08:59:38', medium:'call',  dir:'out',
   client:'6172853680',           source:'15513483152', campaign:'Sales_Engineers', user:'PS Agent',
   disp:'Answering Machine', dur:'1m 08s'},
  {id:'i7',  start:'2026-08-31 08:51:02', end:'2026-08-31 08:52:47', medium:'sms',   dir:'out',
   client:'Andrea Salgado',       source:'wa_business', campaign:'Cobros_Ago', voice:'antonio', agent:'a2',
   call:'c5', disp:'Payment agreed', dur:'1m 45s'},
  {id:'i14', start:'2026-08-31 07:58:22', end:'2026-08-31 07:59:03', medium:'chat',  dir:'in',
   client:'Instagram',            source:'web_widget', campaign:'Test',        user:'ccass_spena',
   disp:'Unsolved',   dur:'41s'},
  {id:'i11', start:'2026-08-31 08:22:41', end:'2026-08-31 08:23:29', medium:'wa',    dir:'in',
   client:'+57 300 555 8891',     source:'wa_business', campaign:'Cobros_Ago', voice:'frank',   agent:'a5',
   call:'c6', disp:'Took a message', dur:'48s'},
  {id:'i15', start:'2026-08-30 19:42:10', end:'2026-08-30 19:43:51', medium:'sms',   dir:'out',
   client:'Nicolás Ospina',       source:'wa_business', campaign:'Cobros_Ago', voice:'antonio', agent:'a2',
   call:'c7', disp:'Payment agreed', dur:'1m 41s'},
  {id:'i8',  start:'2026-08-31 08:44:19', end:'2026-08-31 08:44:31', medium:'call',  dir:'out',
   client:'Luz Mariana Ríos',     source:'5980114227', campaign:'Citas_Sept',   voice:'gloria',  agent:'a1',
   call:'c3', disp:'No answer',   dur:'12s'},
];
const aiRows = () => INTERACTIONS.filter(r => r.voice);

/* ---- one interaction, opened ---- */
const addSecs = (stamp, secs) => {
  const t = stamp.slice(11).split(':').map(Number);
  let s = t[0]*3600 + t[1]*60 + t[2] + secs;
  const p = n => String(n).padStart(2,'0');
  return p(Math.floor(s/3600)%24)+':'+p(Math.floor(s/60)%60)+':'+p(s%60);
};
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const stampParts = s => {
  const y = s.slice(0,4), mo = MONTHS[+s.slice(5,7)-1], da = +s.slice(8,10);
  let hh = +s.slice(11,13); const mi = s.slice(14,16), se = s.slice(17,19);
  const ap = hh < 12 ? 'AM' : 'PM'; hh = hh % 12 || 12;
  return {d: mo+' '+da+', '+y+',', t: hh+':'+mi+':'+se+' '+ap};
};
const prettyStamp = s => stampParts(s).d+' '+stampParts(s).t;

/* The event rail down the left of an opened interaction. */
function ixEvents(row, agents){
  const v = row.voice ? persona(row.voice) : null;
  const ag = row.agent && agents ? agents.find(a=>a.id===row.agent) : null;
  const ev = [
    {k:'start',  label:'Started', at:stampParts(row.start)},
    {k:'hold',   label:'Hold time', val:v?'2s':'23s'},
  ];
  ev.push(v
    ? {k:'ai',   label:'Attended by AI agent', at:stampParts(row.start),
       who:v.name, team:row.campaign, dur:row.dur, voice:row.voice, agentName:ag?ag.name:''}
    : {k:'user', label:'Attended by user', at:stampParts(row.start),
       who:row.user, team:row.campaign, dur:row.dur});
  if(row.disp==='Handed over')
    ev.push({k:'hand', label:'Handed over to user', at:stampParts(row.end), who:row.then||'psagent1',
      team:row.campaign, dur:'26s'});
  if(!v && row.user==='Support_IVR')
    ev.push({k:'auto', label:'Attended by automation', who:'Support_IVR', team:row.campaign, dur:'0s'});
  if(row.disp) ev.push({k:'disp', label:'Disposition', list:[row.disp]});
  ev.push({k:'end', label:'Finished', at:stampParts(row.end), dur:row.dur});
  return ev;
}

/* The message thread. AI interactions have a real one; human ones use canned mock text. */
function ixThread(row, agents){
  const v = row.voice ? persona(row.voice) : null;
  const ag = row.agent && agents ? agents.find(a=>a.id===row.agent) : null;
  if(v && ag){
    return transcriptFor(ag, callById(ag, row.call) || {kind:'message'}).map((m,i)=>({
      who:m.w==='a'?'agent':'customer', name:m.w==='a'?v.name:row.client,
      time:addSecs(row.start, i*9), text:m.t, ai:m.w==='a', voice:row.voice}));
  }
  if(row.medium==='email') return [{who:'customer', name:'update@digital.metamail.com',
    time:addSecs(row.start,0), subject:'Share Your Thoughts: Help Shape the Future of Meta Horizon',
    text:'We’re excited to invite you to participate in a brief survey that will help us better understand your experience building with Meta Horizon. Your input is crucial in shaping our strategies.'}];
  return [
    {who:'customer', name:row.client, time:addSecs(row.start,0), text:'Hello, I’m requesting help about some products'},
    {who:'agent',    name:row.user,   time:addSecs(row.start,100), text:'Sure! What kind of products are you looking for?', read:true},
  ];
}

/* The raw payload behind the Data tab. */
const ixJson = row => ([
  {CAMPAIGN:null, telephonycampaign:null},
  {n:'0', res:null, guid:'2f79883d-5b3a-49e3-babb-3d0b620290d8',
   AGENT:row.voice ? persona(row.voice).name : row.user,
   isAI:row.voice ? 'true' : 'false',
   MYCHAN:'PJSIP/urb3vomu6rmwbc9g-00000000',
   apiRes:{result:{isTransferring:row.disp==='Handed over'?'true':'false', needsFinishIvr:'true'},
     index:null, rows:null, total:null, serverDate:row.end},
   outMES:87.9, status:null, CHANNEL:row.medium, DIRECTION:row.dir, DISPOSITION:row.disp||null},
]);

/* ---- Conversation summary (the Summary tab) ---- */
const SENTIMENTS = {
  Positive:{ink:'#0E9F52', soft:'#E4F6EC'},
  Neutral: {ink:'#5A5678', soft:'#EFEEF6'},
  Negative:{ink:'#FF5A2D', soft:'#FFE9E1'},
};
/* Only interactions an AI agent held come with one. */
function ixSummary(row, agents){
  if(!row.voice) return null;
  const v = persona(row.voice), co = (agents && row.agent)
    ? (agents.find(a=>a.id===row.agent)||{tokens:{}}).tokens.company : '';
  const S = {
    'Confirmed':{s:'Positive',
      reason:'The customer was called to confirm an appointment already booked with '+co+'.',
      key:v.name+' verified who it was speaking to, stated the date and time, and asked for confirmation. The customer agreed without asking for changes.',
      res:'Appointment confirmed. Nothing was left open and no handover was needed.'},
    'Took a message':{s:'Negative',
      reason:'The customer was called to confirm an appointment with '+co+' and could not make the slot offered.',
      key:'The customer said they work late that day. '+v.name+' took a message instead of offering another slot, then repeated the offer to pass the message on when the customer asked about the afternoon.',
      res:'No new date was agreed. A message was left for the front desk — the customer asked twice for an alternative and was never offered one.'},
    'Handed over':{s:'Negative',
      reason:'The customer was called by '+co+' and asked something '+v.name+' is not allowed to answer.',
      key:'The customer pressed for a commitment on the balance. '+v.name+' declined to promise it, as the rules require, and the customer asked for a person.',
      res:'Handed over to '+(row.then||'a person')+' mid-call. The customer waited 26 seconds before someone picked up.'},
    'Payment agreed':{s:'Positive',
      reason:'The customer was contacted about an overdue balance at '+co+'.',
      key:v.name+' confirmed who it was speaking to, explained the balance and proposed a date. The customer accepted without asking for a discount.',
      res:'A payment date was agreed and the link was sent. No handover was needed.'},
    'No answer':{s:'Neutral',
      reason:'An attempt to reach the customer about an appointment with '+co+'.',
      key:'Nobody picked up. '+v.name+' left no message, as the rules require on a first attempt.',
      res:'No contact. The customer stays in the list for the next attempt.'},
    'Solved':{s:'Positive',
      reason:'The customer got in touch about a message left earlier for '+co+'.',
      key:v.name+' identified the customer, delivered the message, and agreed both the number and the time for the callback.',
      res:'Callback time agreed. The customer had no further questions.'},
  };
  const f = S[row.disp] || {s:'Neutral',
    reason:'The customer was contacted by '+co+'.',
    key:v.name+' followed the brief and stayed inside its rules.',
    res:'The interaction ended without anything left open.'};
  return {sentiment:f.s, reason:f.reason, key:f.key, resolution:f.res};
}

/* ---- versions, deployment and dialer assignment ---- */
const ME = 'attilio.porchia';
const nowStamp = () => {
  const d = new Date(), p = n => String(n).padStart(2,'0');
  return d.getDate()+' '+MONTHS[d.getMonth()]+' '+d.getFullYear()+', '+p(d.getHours())+':'+p(d.getMinutes());
};
/* A version is only "deployed" if it was published; the badge is about dialers. */
const latestVersion   = a => (a.versions||[])[(a.versions||[]).length-1] || null;
const deployedVersion = a => (a.versions||[]).filter(v=>v.deployed).slice(-1)[0] || null;
const everDeployed    = a => !!a.lastDeployed;
const nextVersionId   = a => 'v' + ((a.versions||[]).length + 1);
/* An agent can serve several dialers, and it runs ONE live version in all of them: deploying
   replaces that version everywhere at once. Which dialers is decided in the Outbound Hub, not
   here. The `dialers` array is the single source of truth — the `assignedToDialer` boolean the
   seeds still carry is descriptive only, and no logic reads it. */
const dialersOf      = a => (a && a.dialers) || [];
const isDeployedLive = a => dialersOf(a).length > 0;    // live inside a dialer right now
const dialerCount    = a => dialersOf(a).length;
/* A version is a snapshot of the configuration the wizard can edit — and nothing else: no id,
   no name, no call counters, no version list. Versions created in the app carry their own `cfg`
   snapshot. The seeded history predates that, so those versions carry `was`: only the fields
   that differed back then, laid over what the agent is now. */
const CFG_KEYS = ['personaId','template','direction','lang','attempts','from','to','tokens',
  'opener','banned','promises','extraRules','handover','handoverOther','collect','knowledge'];
const configOf = a => { const o = {};
  CFG_KEYS.forEach(k => { if(a && a[k]!==undefined) o[k] = a[k]; }); return o; };
const versionConfig = (a, v) => v && v.cfg ? v.cfg : {...configOf(a), ...((v && v.was) || {})};
/* An agent carrying the configuration of one of its own versions, for read-only review. */
const agentAtVersion = (a, v) => ({...a, ...versionConfig(a, v)});

/* Comparing two versions. Everything the wizard can change is either a single value (voice,
   language, the opening line…) or a list (handover rules, never-promises, banned words). Single
   values are compared old against new; lists are compared item by item — so a version that drops
   one rule reads as one line about that rule, not as two copies of the whole list. Only what a
   screen can actually edit is compared (`attempts`/`from`/`to` survive in the data but no screen
   edits them, so they are left out). */
const CFG_SCALARS = [
  {k:'Voice',             get:(c,p) => p.name},
  {k:'Language',          get:(c,p) => (LANGS[c.lang || p.lang] || {}).name || ''},
  {k:'Company it says',   get:c => c.tokens.company || ''},
  {k:'How it opens',      get:c => val(identityFor(c.template), c.tokens.identity).v},
  {k:'What it is for',    get:c => goalLabel(c)},
  {k:'Asks for a person', get:c => val(HANDOFF, c.tokens.handoff).v},
  {k:'Opening line',      get:c => '\u201c' + (c.opener || '') + '\u201d', long:true},
  {k:'What it knows',     when:c => c.template === 'reception',
                          get:c => knowledgeLabel(c.knowledge || {})},
];
const CFG_LISTS = [
  {k:'Handover rule',   get:c => (c.handover || []).map(id => (HANDOVER.find(o => o.id === id) || {}).short)
                                   .filter(Boolean).concat(c.handoverOther || [])},
  {k:'Never promises',  get:c => (c.promises || []).map(x => x.t.replace(/^Never promise /i, ''))},
  {k:'Banned word',     get:c => (c.banned || []).slice()},
  {k:'Correction',      get:c => (c.extraRules || []).slice()},
  {k:'Asks every caller', get:c => c.template === 'reception'
                                   ? (c.collect || []).filter(f => f.on).map(f => f.label) : []},
];
/* configOf fills the gaps, and tokens is guaranteed — goalLabel reads tokens.goal. */
function cfgOf(cfg, a){ const c = {...configOf(a || {}), ...cfg}; c.tokens = c.tokens || {}; return c; }
function cfgFacts(cfg, a){
  const c = cfgOf(cfg, a), p = persona(c.personaId), f = {};
  CFG_SCALARS.forEach(s => { if(!s.when || s.when(c)) f[s.k] = s.get(c, p); });
  return f;
}
function cfgLists(cfg, a){
  const c = cfgOf(cfg, a), f = {};
  CFG_LISTS.forEach(s => { f[s.k] = s.get(c) || []; });
  return f;
}
/* One row per actual change: a value that reads differently, or a single list item gained or
   lost. Losses come before gains — what a version takes away is what a supervisor must catch. */
function diffFacts(fromCfg, toCfg, a){
  const A = cfgFacts(fromCfg, a), B = cfgFacts(toCfg, a);
  const LA = cfgLists(fromCfg, a), LB = cfgLists(toCfg, a), out = [];
  CFG_SCALARS.forEach(s => { const x = A[s.k], y = B[s.k];
    if(x !== undefined && y !== undefined && x !== y) out.push({kind:'change', k:s.k, from:x, to:y, long:!!s.long});
    else if(x === undefined && y !== undefined) out.push({kind:'add',  k:s.k, item:y});
    else if(x !== undefined && y === undefined) out.push({kind:'drop', k:s.k, item:x}); });
  CFG_LISTS.forEach(s => { const x = LA[s.k] || [], y = LB[s.k] || [];
    x.filter(i => y.indexOf(i) < 0).forEach(i => out.push({kind:'drop', k:s.k, item:i}));
    y.filter(i => x.indexOf(i) < 0).forEach(i => out.push({kind:'add',  k:s.k, item:i})); });
  return out;
}
/* What a version is worth comparing against: whatever is live, else the newest version. */
const versionBaseline = (a, v) => {
  const live = deployedVersion(a) || latestVersion(a);
  return live && v && live.id !== v.id ? live : null;
};
const versionDiff = (a, v) => { const b = versionBaseline(a, v);
  return b ? {base:b, rows:diffFacts(versionConfig(a, b), versionConfig(a, v), a)} : null; };

/* Only one version can be deployed at a time. Several may carry deployed:true — that is the
   record of what went live and when — so "is it live now" is always the newest of them. */
const isLiveVersion = (a, v) => { const d = deployedVersion(a); return !!d && !!v && d.id === v.id; };
const wasLiveVersion = (a, v) => !!v && !!v.deployed && !isLiveVersion(a, v);
const versionState = (a, v) => isLiveVersion(a, v) ? 'live' : wasLiveVersion(a, v) ? 'was' : 'draft';

/* What the Test panel can run: the working draft, then every stored version, newest first. */
function testTargets(a){
  const out = [{id:'draft', label:'Latest draft'}];
  (a.versions||[]).slice().reverse().forEach(v=>{
    const st = versionState(a, v);
    out.push({id:v.id, label:v.id+(st==='live'?' · deployed':st==='was'?' · was live':'')+' · '+v.when});
  });
  return out;
}

/* ---- Receptionist: what it asks every caller, and what it knows ---- */
const COLLECT_DEFAULTS = [
  {id:'name',    label:'Name',              question:'May I have your name?',                          on:true},
  {id:'phone',   label:'Callback number',   question:'What’s the best number to reach you back on?', on:true},
  {id:'reason',  label:'Reason for the call', question:'How can we help you today?',                  on:true},
  {id:'email',   label:'Email',             question:'What’s the best email for you?',               on:false},
  {id:'company', label:'Company',           question:'And what company are you with?',                on:false},
];
const COLLECT_PHRASE = {name:'a name', phone:'a callback number', reason:'the reason for the call',
  email:'an email', company:'the company'};
/* what a caller says back in the preview, per field */
const CALLER_SAYS = {name:'It’s María Herrera.', phone:'310 555 0142.', reason:'I’m calling about an invoice.',
  email:'maria@herrera.co', company:'Andina Seguros.'};
const andList = xs => xs.length<2 ? (xs[0]||'') : xs.slice(0,-1).join(', ')+' and '+xs[xs.length-1];
function collectLabel(fields){
  const on = (fields||[]).filter(f=>f.on);
  const std = on.filter(f=>!f.custom).map(f=>COLLECT_PHRASE[f.id]||f.label.toLowerCase());
  const custom = on.filter(f=>f.custom).length;
  if(!std.length && !custom) return 'collects nothing extra';
  return 'collects '+andList(std)
    +(custom ? (std.length?', plus ':'')+custom+(custom===1?' custom question':' custom questions') : '');
}
function knowledgeLabel(k){
  const about=((k&&k.about)||'').trim(), n=((k&&k.urls)||[]).length;
  if(!about && !n) return 'knows nothing about the business yet';
  const parts=[]; if(about) parts.push('the business profile'); if(n) parts.push(n+(n===1?' trained page':' trained pages'));
  return 'answers from '+parts.join(' and ');
}
/* The fixed disclosure. Unchanged for every existing template; English for the receptionist. */
const disclosureFor = d => d.template==='reception'
  ? 'You’re speaking with a virtual assistant for '+d.tokens.company+'.'
  : 'Le hablo desde un asistente virtual de '+d.tokens.company+'.';
const RECEPTION_QUICKS = ['I’d like to leave a message', 'Can I book an appointment?', 'What are your opening hours?'];
