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
  {id:'legal',    v:'The customer mentions a complaint, a lawyer or the regulator', short:'mentions a complaint or a lawyer'},
  {id:'offtopic', v:'The customer asks about something outside this agent’s job', short:'asks about something outside its job'},
  {id:'repeat',   v:'The agent has asked the same question twice without an answer', short:'will not answer a question twice over'},
  {id:'promise',  v:'The customer insists on something the agent may not promise', short:'insists on something it may not promise'},
  {id:'silence',  v:'The customer goes quiet for more than ten seconds', short:'goes quiet'},
];
/* "a, b or c" — used by the prose summary */
const orList = xs => xs.length<2 ? (xs[0]||'') : xs.slice(0,-1).join(', ')+' or '+xs[xs.length-1];
const HANDOVER_SEED = {
  reception:    ['repeat'],
  leads:        ['promise','offtopic'],
  appointments: ['offtopic'],
  messages:     ['repeat'],
  collections:  ['legal','promise'],
};
const SEED_HANDOVER = [
  ['offtopic'], ['promise','offtopic'],
  ['repeat'],                      // the receptionist's own
  [], ['legal','promise'], ['legal','promise'],
];

/* Collections may never discuss a balance with whoever happens to answer, so
   "speaks to whoever answers" is not an option there — it cannot be chosen at all. */
const identityFor = tid => tid==='collections' ? IDENTITY.filter(o => o.id!=='none') : IDENTITY;
/* Every template offers every hand-off, the receptionist included — putting callers through is
   much of that job. Kept as a function so a template can restrict it later without hunting. */
const handoffFor = tid => HANDOFF;
/* A live transfer goes to a campaign, chosen from the ones the platform already runs. The list
   is the campaigns the Interactions log and the dialers already name — no new platform detail. */
const CAMPAIGNS = ['Citas_Sept', 'Cobros_Ago', 'Cobros_Septiembre', 'Cotizaciones_Q3', 'Leads_Web', 'Sales_Engineers'];
const campaignOf = o => ((o && o.tokens) || {}).campaign || CAMPAIGNS[0];
/* What the hand-off reads as on screen: the campaign is part of the sentence. */
const handLabel = o => { const h = val(HANDOFF, ((o && o.tokens) || {}).handoff);
  return h.id === 'campaign' ? 'transfers to the ' + campaignOf(o) + ' campaign' : h.v; };

/* ---- Collections only: what it says about the balance, and how the customer pays ---- */
const DISCLOSE = [
  {id:'amount', v:'states the amount owed',
   say:'Tiene un saldo pendiente de {amount}.', sayEn:'You have an outstanding balance of {amount}.'},
  {id:'exists', v:'says only that there is an outstanding balance',
   say:'Tiene un saldo pendiente con nosotros.', sayEn:'You have an outstanding balance with us.'},
];
/* no real balance exists in this prototype; the seed carries a stand-in figure */
const AMOUNT_PLACEHOLDER = '$184.50';
const amountOf    = o => ((o && o.tokens) || {}).amount || AMOUNT_PLACEHOLDER;
const discloseOf  = o => val(DISCLOSE, ((o && o.tokens) || {}).disclose);
const discloseLabel = o => discloseOf(o).v;
const discloseSay = o => saysIn(discloseOf(o), langOf(o)).replace('{amount}', amountOf(o));
const PAYMENT = [
  {id:'channel', v:'sends the payment link to the contact channel on file, without saying which',
   say:'Le envío el enlace de pago al canal de contacto que tenemos registrado.',
   sayEn:'I will send the payment link to the contact channel we have on file.'},
  {id:'place',   v:'tells the customer where to pay',
   say:'Puede pagar en {place}.', sayEn:'You can pay at {place}.'},
];
const paymentOf    = o => val(PAYMENT, ((o && o.tokens) || {}).payment);
const paymentPlace = o => (((o && o.tokens) || {}).paymentPlace || '').trim();
const paymentLabel = o => { const p = paymentOf(o);
  return p.id === 'place' ? p.v + ': ' + (paymentPlace(o) || '…') : p.v; };
const paymentSay   = o => saysIn(paymentOf(o), langOf(o)).replace('{place}', (paymentPlace(o) || '…').replace(/\{contract\}/g, contractOf(o)));

/* ---- Collections: what else it mentions about the account ------------------------------
   Siblings of the amount radio, not children of it: they apply whichever radio is chosen.
   Every value comes from a column of the campaign's contact list; the column name is the
   only thing the supervisor types, and a stand-in figure plays the value in the preview, the
   way $184.50 stands in for the balance. */
const LIST_COLS = {overdue:'DIAS_MORA', contract:'CUENTA', minimum:'PAGO_MIN', reduced:'SALDO_REDUCIDO'};
const PLACEHOLDERS = {overdue:{days:45, months:2}, contract:'4821', minimum:'$45.00', reduced:'$152.00'};
const colOf      = (o, k) => ((((o && o.tokens) || {}).cols || {})[k] || '').trim() || LIST_COLS[k];
const mentionsOf = o => { const m = ((o && o.tokens) || {}).mentions || {}; return {overdue:!!m.overdue, contract:!!m.contract}; };
const overdueUnit = o => (((o && o.tokens) || {}).overdueUnit === 'months') ? 'months' : 'days';
const overdueN   = o => PLACEHOLDERS.overdue[overdueUnit(o)];
const contractOf = () => PLACEHOLDERS.contract;
const MENTIONS = [
  {id:'overdue',  v:'how long the payment is overdue', short:'how long it’s overdue'},
  {id:'contract', v:'the contract or account number',   short:'the contract number'},
];
const mentionsLabel = o => { const m = mentionsOf(o);
  return MENTIONS.filter(x => m[x.id]).map(x => x.short); };
/* the radio's phrase, then whatever else it mentions: "states the amount owed and how long it's overdue" */
const discloseFull = o => { const xs = mentionsLabel(o);
  return discloseOf(o).v + (xs.length ? ' and ' + andList(xs) : ''); };
const overdueSay = o => { const n = overdueN(o), mo = overdueUnit(o) === 'months', en = langOf(o) === 'en';
  return en ? 'Your account is ' + n + ' ' + (mo ? 'months' : 'days') + ' overdue.'
            : 'Su cuenta lleva ' + n + ' ' + (mo ? 'meses' : 'días') + ' de atraso.'; };
/* the contract rides on the balance sentence; the overdue line follows it */
const discloseSentence = o => { const m = mentionsOf(o), en = langOf(o) === 'en';
  let s = discloseSay(o);
  if (m.contract) s = s.replace(/\.$/, en ? ' on the contract ending ' + contractOf(o) + '.' : ' del contrato terminado en ' + contractOf(o) + '.');
  return s + (m.overdue ? ' ' + overdueSay(o) : ''); };

/* ---- Collections: what it can offer, in order ------------------------------------------
   An ordered list rather than one goal. The agent offers them one at a time, in this order, and
   stops at the first yes. Nothing ticked, or nothing accepted, falls through to the fixed
   fallback: it asks when the customer intends to pay and records that date. */
const OFFER_IDS = ['date5', 'partial', 'minimum', 'twopart', 'reduced'];
const INTENT_ASK = {say:'¿Para qué fecha tiene pensado realizar el pago?', sayEn:'When are you planning to make the payment?'};
const FALLBACK_LINE = 'If no offer is accepted (or none is ticked), it asks when the customer intends to pay and records the date.';
/* An agent saved before offers existed carries one goal; read it as that one offer, ticked. */
const offersOf = o => { const t = (o && o.tokens) || {};
  const raw = Array.isArray(t.offers) ? t.offers : OFFER_IDS.map(id => ({id, on: id === t.goal}));
  const list = raw.filter(x => OFFER_IDS.indexOf(x.id) > -1).map(x => ({id:x.id, on:!!x.on}));
  OFFER_IDS.forEach(id => { if (!list.some(x => x.id === id)) list.push({id, on:false}); });
  return list; };
const offerDef     = id => val(goalsFor('collections'), id);
const activeOffers = o => offersOf(o).filter(x => x.on).map(x => offerDef(x.id));
const reducedOn    = o => !!o && o.template === 'collections' && activeOffers(o).some(x => x.id === 'reduced');
const moneyNum  = s => parseFloat(String(s).replace(/[^\d.]/g, '')) || 0;
const moneyFmt  = n => '$' + n.toFixed(2);
const offerLabel = (o, id) => { const g = offerDef(id), gp = paramOf(id);
  return gp ? g.v + ' ' + gp.fmt(paramVal(o, id)) : g.v; };
const offerAmount = (o, id) => id === 'partial' ? moneyFmt(moneyNum(amountOf(o)) * paramVal(o, 'partial') / 100)
  : id === 'minimum' ? PLACEHOLDERS.minimum : id === 'reduced' ? PLACEHOLDERS.reduced : amountOf(o);
const offerSay = (o, id) => { const g = offerDef(id), gp = paramOf(id), lang = langOf(o);
  let line = saysIn(g, lang);
  if (gp) line = line.replace('{n}', ((lang === 'en' && gp.sayEn) ? gp.sayEn : gp.say)(paramVal(o, id)));
  return line.replace('{amt}', offerAmount(o, id)).replace('{min}', PLACEHOLDERS.minimum).replace('{red}', PLACEHOLDERS.reduced); };
const intentSay   = o => saysIn(INTENT_ASK, langOf(o));
const offersLabel = o => { const xs = activeOffers(o).map(g => offerLabel(o, g.id));
  return xs.length ? 'offers ' + orList(xs) : 'makes no payment offer'; };
const fallbackPhrase = o => activeOffers(o).length ? 'and otherwise asks when the customer intends to pay'
  : 'and asks when the customer intends to pay';
/* the promise it records on reaching a date */
const DAY_MS = 864e5;
const dateIn = n => { const d = new Date(Date.now() + n * DAY_MS);
  return d.getDate() + ' ' + MONTHS[d.getMonth()] + ' ' + d.getFullYear(); };
const promiseFor = (o, id, stated) => id === 'intent'
  ? {offer:'intent', amount:amountOf(o), date:stated || dateIn(0)}
  : {offer:offerLabel(o, id), amount:offerAmount(o, id),
     date: id === 'date5' ? dateIn(paramVal(o, 'date5')) : id === 'twopart' ? dateIn(paramVal(o, 'twopart')) : dateIn(0)};
/* the optional last line, read word for word at the end of every call */
const closingOf = o => ((((o && o.tokens) || {}).closing) || '').trim();

/* Two collections goals hold a number the supervisor taps rather than types. */
const GOAL_PARAMS = {
  /* custom:'replace' drops the last preset in favour of a Custom pill; custom:'add' keeps every
     preset and appends one. Either way the supervisor can type an exact number. */
  date5:   {def:5,  opts:[3,5,7,15,30], fmt:n=>n+' days', say:n=>n+' días', sayEn:n=>n+' days',
            title:'Days to pay', hint:'How long the customer gets before the date it agrees.',
            custom:'replace', unit:'days', max:180},
  partial: {def:30, opts:[30,50,70],    fmt:n=>n+'%',     say:n=>n+'%',     sayEn:n=>n+'%',
            title:'Minimum share', hint:'The smallest part of the balance the agent may accept.',
            custom:'add', unit:'%', max:100},
  twopart: {def:15, opts:[7,15,30,45,60], fmt:n=>n+' days', say:n=>n+' días', sayEn:n=>n+' days',
            title:'Days for the rest', hint:'How long the customer gets for the second part.',
            custom:'replace', unit:'days', max:180},
};
const paramOf = goalId => GOAL_PARAMS[goalId] || null;
const paramVal = (o, goalId) => {
  const gp = paramOf(goalId); if(!gp) return null;
  const ps = (o && o.tokens && o.tokens.params) || {};
  return ps[goalId]==null ? gp.def : ps[goalId];
};
/* A receptionist does several jobs at once — takes messages, books, answers questions — so its
   goal is a list. Every other template keeps exactly one. tokens.goal stays the first of that
   list either way, so everything that quotes "the goal" (the spoken line, the simulator, the
   correction flow) keeps reading a single id and needs no change. */
const multiGoal = tid => tid==='reception';
const goalIds = o => { const t = o.tokens || {}, g = t.goals;
  /* goals is the list and goal is its first. If a writer sets goal alone, or to something the
     list does not contain, that single goal wins — so the two can never silently disagree. */
  return (g && g.length && g.indexOf(t.goal) > -1) ? g : [t.goal].filter(Boolean); };
/* An agent speaks one language, so everything it says has to follow the voice. Every spoken
   line carries an English twin (sayEn / openerEn / custSayEn); this picks the right one, and
   falls back to the Spanish when a line has no twin rather than rendering nothing. */
const langOf = o => (o && o.lang) || (o && o.personaId ? persona(o.personaId).lang : 'es');
const inLang = (obj, key, lang) => (lang==='en' && obj && obj[key+'En']) ? obj[key+'En'] : (obj ? obj[key] : '');
const saysIn = (obj, lang) => inLang(obj, 'say', lang);

/* Read a goal through these two so the number shows up everywhere it is quoted. */
const goalOf    = o => val(goalsFor(o.template), o.tokens.goal);
const oneGoalLabel = (o, id) => { const g = val(goalsFor(o.template), id), gp = paramOf(g.id);
  return gp ? g.v+' '+gp.fmt(paramVal(o, g.id)) : g.v; };
const goalLabel = o => { if(o && o.template === 'collections') return offersLabel(o) + ', ' + fallbackPhrase(o);
  const ids = goalIds(o);
  if(ids.length < 2) return oneGoalLabel(o, goalOf(o).id);
  /* listed together, the short forms read as a sentence; alone, the full phrase still stands */
  return andList(ids.map(id => { const g = val(goalsFor(o.template), id);
    return g.short || oneGoalLabel(o, id); })); };
const goalSay   = o => { if(o && o.template === 'collections') { const a = activeOffers(o);
    return a.length ? offerSay(o, a[0].id) : intentSay(o); }
  const g = goalOf(o), gp = paramOf(g.id), lang = langOf(o);
  const line = saysIn(g, lang);
  if(!gp) return line;
  const unit = (lang==='en' && gp.sayEn) ? gp.sayEn : gp.say;   // "5 days", not "5 días"
  return line.replace('{n}', unit(paramVal(o, g.id))); };
const optLabel  = (o, draft) => { const gp = paramOf(o.id);
  return gp ? o.v+' '+gp.fmt(paramVal(draft, o.id)) : o.v; };

/* ---- Credits ----------------------------------------------------------------------------
   Two separate facts, from two separate places, exactly as the platform reports them:
   the balance comes from the n2p usage API and is about the account, while every interaction
   carries its own credit total from the webhook. Nothing here derives one from the other —
   the balance is not the sum of this log, because the log is one month of one screen. */
const CREDITS = {remaining:12480, included:20000, renews:'1 Oct 2026', source:'n2p usage API'};
const creditsLeft  = () => CREDITS.remaining;
const creditsPct   = () => Math.max(0, Math.min(100, Math.round(CREDITS.remaining / CREDITS.included * 100)));
const creditsLow   = () => creditsPct() <= 15;
const fmtCredits   = n => (n==null ? '—' : String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ','));
/* Only an AI-handled interaction spends credits; a person handling one spends none. */
const creditsOf    = row => (row && row.voice) ? (row.credits || 0) : null;
const creditsBy    = id => INTERACTIONS.filter(r => r.agent===id && r.voice)
  .reduce((n, r) => n + (r.credits || 0), 0);
const creditsRows  = id => INTERACTIONS.filter(r => r.agent===id && r.voice).length;

const callsFor = a => (a.calls ? CALL_LOG.slice() : []);

/* What a customer asks, and the rule that governs the answer. The refusal only happens when
   that rule is actually ticked on the rules step — untick it and the agent answers plainly, so
   the simulated call follows the settings rather than a fixed script. Each entry names the rule
   it matched, which is what the caption under the reply shows. */
const PROMISE_GUARDS = [
  {ask:/descuento|interes|rebaj|condon|discount|interest|waive|knock off/i, rule:/discount|interest/i,
   es:'No le puedo prometer quitar intereses ni descuentos. ',
   en:'I cannot promise to remove interest or give a discount. '},
  {ask:/precio|cuanto|cuesta|vale|tarifa|price|cost|how much|charge/i, rule:/price/i,
   es:'No le puedo dar un precio final por teléfono. ',
   en:'I cannot give you a final price over the phone. '},
  {ask:/demanda|juicio|acciones legales|legal action|lawsuit|sue/i, rule:/legal action/i,
   es:'No le puedo prometer detener acciones legales. ',
   en:'I cannot promise to stop legal action. '},
  {ask:/entrega|envio|cuando llega|delivery|deliver|ship/i, rule:/delivery/i,
   es:'No le puedo prometer una entrega el mismo día. ',
   en:'I cannot promise same-day delivery. '},
  {ask:/medico|doctor|especialista/i, rule:/specific doctor/i,
   es:'No le puedo asegurar un médico en particular. ',
   en:'I cannot promise a specific doctor. '},
  {ask:/hoy mismo|mismo dia|today|same.?day/i, rule:/same-day slot/i,
   es:'No le puedo prometer un turno para hoy. ',
   en:'I cannot promise a same-day slot. '},
  {ask:/resolver|solucion|resolution|fix it|sort it/i, rule:/resolution/i,
   es:'No le puedo prometer una solución. ',
   en:'I cannot promise a resolution. '},
];
/* the rule that covers what was asked, but only if it is ticked */
const guardFor = (draft, s) => { for(const g of PROMISE_GUARDS){ if(!g.ask.test(s)) continue;
  return {g, rule: promisesOf(draft).filter(p => g.rule.test(p.t))[0] || null}; } return null; };
/* a word the agent is set never to say, as the customer just said it */
const bannedHit = (draft, s) => (draft.banned || []).filter(w =>
  w && s.indexOf(norm(w)) > -1)[0] || null;
/* one of the supervisor's own handover rules, matched on its distinctive words */
const ownHandoverHit = (draft, s) => (draft.handoverOther || []).filter(r =>
  norm(r).split(/[^a-z0-9]+/).filter(w => w.length > 4).some(w => s.indexOf(w) > -1))[0] || null;

/* ---- The agent, written out as the instructions a model would need ------------------------
   This is the one place the prototype composes a prompt, and no supervisor ever sees it: it is
   assembled from the same settings the wizard shows them, so the brief, the rules step and the
   simulated call all describe one agent. Every setting that can be changed on a screen appears
   here, and an unticked rule is simply absent. */
/* The wizard's phrases are third person because on screen they follow "It" — "agrees a payment
   date", "verifies who it is speaking to". Addressed to the model as "you" they need the bare
   verb. Only template phrases go through this; anything a supervisor typed is quoted untouched. */
const asYou = ph => String(ph || '')
  .split(/(,\s+|\s+and\s+)/)                       // convert the verb that opens each clause
  .map((seg, i) => i % 2 ? seg : seg.replace(/^((?:only|never|also|then)\s+)?(\w+?)(ies|s)\b/,
    (m, adv, stem, end) => (adv || '') + (end === 'ies' ? stem + 'y' : stem)))
  .join('')
  .replace(/\bit is\b/g, 'you are').replace(/\bits\b/g, 'your');
function agentPrompt(d){
  const p = persona(d.personaId), tk = d.tokens || {}, L = langOf(d), inb = d.direction === 'in';
  const lang = (LANGS[L] || LANGS.es).name;
  const t = template(d.template), rec = d.template === 'reception';
  const hand = val(handoffFor(d.template), tk.handoff);
  const ident = val(identityFor(d.template), tk.identity);
  const trig = (d.handover || []).map(id => (HANDOVER.find(o => o.id === id) || {}).v).filter(Boolean);
  const own = d.handoverOther || [];
  const proms = promisesOf(d).map(r => r.t), rules = otherRules(d).map(ruleText);
  const col = d.template === 'collections', tp = thirdParty(d);
  const say = x => '"' + x + '"';
  const lines = [];
  lines.push(`You are ${p.name}, a virtual assistant for ${tk.company}, speaking with a customer on the phone.`);
  lines.push(inb ? 'The customer called you.' : 'You placed this call to the customer.');
  lines.push(`Speak only ${lang}. Talk the way a person talks on a call: short turns, one question at a time, no lists, no markdown, no emoji.`);
  lines.push('');
  lines.push('WHAT YOU DO');
  if(rec) lines.push(`- Your job: you ${asYou(goalLabel(d))}. Greet the caller and find out how you can help.`);
  else if(!col) lines.push(`- Your job: you ${asYou(goalLabel(d))}.${t.mid ? ' You ' + asYou(t.mid.replace(/,?\s*and$/, '')) + '.' : ''} When it is time, say something like ${say(goalSay(d))}`);
  if(col){
    const m = mentionsOf(d), offers = activeOffers(d);
    lines.push('- Your job: agree a payment with the customer and record it.');
    lines.push(`- About the balance: you ${asYou(discloseLabel(d))}.${discloseOf(d).id === 'amount' ? ' The amount owed is ' + amountOf(d) + '.' : ' Do not state the amount, even if asked.'}`
      + (m.overdue ? ` Also say how long the payment is overdue, in ${overdueUnit(d)} (from the contact list column ${colOf(d,'overdue')}).` : '')
      + (m.contract ? ` Also name the contract by its last digits (from the contact list column ${colOf(d,'contract')}).` : '')
      + ` Say it like ${say(discloseSentence(d))}`);
    if(offers.length){
      lines.push('- Offer these one at a time, in this order. Stop at the first one the customer accepts:');
      offers.forEach((g, i) => lines.push(`    ${i + 1}. ${offerLabel(d, g.id)}${g.id === 'minimum' || g.id === 'reduced' ? ' (the figure comes from the contact list column ' + colOf(d, g.id) + ')' : ''}: ${say(offerSay(d, g.id))}`));
      if(offers.some(g => g.id === 'partial')) lines.push(`- The partial payment is ${paramVal(d,'partial')}% of the amount on the contact list: ${offerAmount(d,'partial')}.`);
      if(offers.some(g => g.id === 'reduced')) lines.push('- Never calculate a discount yourself. The reduced balance is the figure the contact list gives, read as it is.');
    } else lines.push('- Make no payment offer.');
    lines.push(`- If no offer is accepted${offers.length ? '' : ' (there are none)'}, ask when the customer intends to pay and record that date: ${say(intentSay(d))}`);
    lines.push(`- Once a date is recorded — an accepted offer or the date the customer gave — you ${asYou(paymentLabel(d))}. Say something like ${say(paymentSay(d))}`);
    lines.push('- If no date is recorded, end the call. The payment step does not apply.');
    lines.push('- Whenever you reach a date, record the promise: the offer accepted (or "intent"), the amount and the date.');
  }
  lines.push('');
  lines.push('HOW EVERY CALL STARTS');
  lines.push(`- The very first thing you say is this disclosure, word for word: ${say(disclosureFor(d))}`);
  lines.push(`- Then your opening line: ${say(d.opener)}`);
  if(!rec && tk.identity !== 'none')
    lines.push(`- Before discussing anything about the account, ${asYou(ident.v)}: ${say(saysIn(ident, L))} If it turns out you are not speaking to the right person, do not discuss the reason for the call.`);
  if(col && closingOf(d)){
    lines.push('');
    lines.push('HOW EVERY CALL ENDS');
    lines.push(`- The very last thing you say on every call, word for word: ${say(closingOf(d))}`);
  }
  lines.push('');
  lines.push('HANDING THE CALL TO A PERSON');
  lines.push(`- If the customer asks for a person, you ${asYou(handLabel(d))}. Say ${say(saysIn(hand, L))}`);
  if(trig.length || own.length){
    lines.push('- Also hand the call to a person, saying the same line, when any of these happens:');
    trig.forEach(x => lines.push(`    - ${x}`));
    own.forEach(x => lines.push(`    - ${x}`));
  }
  if(proms.length || rules.length || (d.banned || []).length || (d.extraRules || []).length){
    lines.push('');
    lines.push('RULES YOU CANNOT BREAK');
    proms.forEach(x => lines.push(`- ${x}. If asked, say plainly that you cannot promise that, then offer what you can do.`));
    rules.forEach(x => lines.push(`- ${x}.`));
    if(tp.message !== null && tp.ends) lines.push('- So if the wrong person answers: say that message, nothing else, and end the call.');
    if((d.banned || []).length) lines.push(`- Never say any of these words: ${d.banned.join(', ')}. Rephrase instead.`);
    (d.extraRules || []).forEach(x => lines.push(`- ${x}.`));
  }
  if(rec){
    const asks = (d.collect || []).filter(f => f.on);
    const k = d.knowledge || {};
    lines.push('');
    lines.push('WHAT YOU ASK AND WHAT YOU KNOW');
    if(asks.length){
      lines.push('- Ask every caller for these, in this order, one at a time:');
      asks.forEach(f => lines.push(`    - ${f.label}: ${say(f.question)}`));
    }
    if((k.about || '').trim()) lines.push(`- You may answer questions from this business profile only: ${say(k.about.trim())}`);
    if((k.urls || []).length) lines.push(`- You were also trained on these pages: ${k.urls.join(', ')}.`);
    if((k.files || []).length) lines.push(`- You were also given these files: ${k.files.map(f => f.name).join(', ')}.`);
    lines.push('- Anything not covered above: take a message rather than guess.');
  }
  lines.push('');
  lines.push('HOW TO ANSWER');
  lines.push('Reply with JSON only, nothing else: {"say": "<your next line, in ' + lang + '>", "why": "<the one rule or setting above that governed it, in a few words, in English>"}');
  if(col) lines.push('When you reach a date, add "promise": {"offer": "<the offer accepted, or intent>", "amount": "<amount>", "date": "<date>"} to that reply.');
  lines.push('Keep "say" to one or two short sentences.');
  return lines.join('\n');
}
/* The conversation as the sampler wants it: user/assistant turns, strictly alternating, opening
   with user. The capability has no system prompt, so the standing instructions ride in the first
   user turn, along with the line the agent has already said on screen. Pure, so it is testable. */
function liveTurns(d, msgs, input){
  const turns = [];
  const push = (role, content) => { const c = String(content == null ? '' : content).trim(); if(!c) return;
    if(turns.length && turns[turns.length-1].role === role) turns[turns.length-1].content += '\n\n' + c;
    else turns.push({role, content:c}); };
  const opening = (msgs.length && msgs[0].who === 'a') ? msgs[0].txt : '';
  const all = (opening ? msgs.slice(1) : msgs).concat([{who:'c', txt:input}]);
  const lead = agentPrompt(d)
    + (opening ? '\n\nYOU HAVE ALREADY SAID\n"' + opening + '"' : '')
    + '\n\nTHE CONVERSATION CONTINUES\n';
  let first = true;
  all.forEach(m => {
    if(m.who === 'c'){ push('user', (first ? lead + 'The customer says: ' : '') + m.txt); first = false; }
    else push('assistant', m.txt);
  });
  if(!turns.length || turns[0].role !== 'user') turns.unshift({role:'user', content: lead + 'The customer is on the line.'});
  return turns;
}

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
   call:'c2', disp:'Confirmed',   credits:18, dur:'1m 06s'},
  {id:'i5',  start:'2026-08-31 09:05:12', end:'2026-08-31 09:06:04', medium:'call',  dir:'in',
   client:'+16172853680',         source:'15513483152', campaign:'Sales_Engineers', user:'PS Agent',
   disp:'Unsolved',   dur:'52s'},
  {id:'i2',  start:'2026-08-31 09:12:44', end:'2026-08-31 09:13:36', medium:'wa',    dir:'in',
   client:'+57 310 555 0142',     source:'wa_business', campaign:'Cobros_Ago', voice:'frank',   agent:'a5',
   call:'c1', disp:'Handed over', credits:14, dur:'52s'},
  {id:'i9',  start:'2026-08-31 08:40:07', end:'2026-08-31 09:02:19', medium:'email', dir:'in',
   client:'Team Twilio',          source:'',           campaign:'Test',        user:'ccass_spena',
   disp:'Unsolved',   dur:'22m 12s'},
  {id:'i3',  start:'2026-08-31 09:11:20', end:'2026-08-31 09:12:31', medium:'call',  dir:'out',
   client:'Jorge Betancur',       source:'5980114227', campaign:'Citas_Sept',   voice:'gloria',  agent:'a1',
   call:'c1', disp:'Took a message', credits:19, dur:'1m 11s'},
  {id:'i12', start:'2026-08-31 08:15:03', end:'2026-08-31 08:16:44', medium:'call',  dir:'in',
   client:'+16172853680',         source:'15513483152', campaign:'Sales_Engineers', user:'Support_IVR',
   disp:'',           dur:'1m 41s'},
  {id:'i4',  start:'2026-08-31 09:08:55', end:'2026-08-31 09:09:37', medium:'chat',  dir:'in',
   client:'sebastian.pena…',      source:'web_widget', campaign:'Test',        voice:'linda',   agent:'a3',
   call:'c5', disp:'Solved',      credits:23, dur:'42s'},
  {id:'i10', start:'2026-08-31 08:31:55', end:'2026-08-31 08:33:02', medium:'chat',  dir:'in',
   client:'Facebook Ads Team',    source:'web_widget', campaign:'Test',        user:'ccass_spena',
   disp:'Solved',     dur:'1m 07s'},
  {id:'i13', start:'2026-08-31 08:04:58', end:'2026-08-31 08:06:12', medium:'call',  dir:'out',
   client:'Camilo Restrepo',      source:'5980114227', campaign:'Citas_Sept',   voice:'gloria',  agent:'a1',
   call:'c4', disp:'Handed over', then:'psagent1', credits:21, dur:'1m 14s'},
  {id:'i6',  start:'2026-08-31 08:58:30', end:'2026-08-31 08:59:38', medium:'call',  dir:'out',
   client:'6172853680',           source:'15513483152', campaign:'Sales_Engineers', user:'PS Agent',
   disp:'Answering Machine', dur:'1m 08s'},
  {id:'i7',  start:'2026-08-31 08:51:02', end:'2026-08-31 08:52:47', medium:'sms',   dir:'out',
   client:'Andrea Salgado',       source:'wa_business', campaign:'Cobros_Ago', voice:'antonio', agent:'a6',
   call:'c5', disp:'Payment agreed', credits:26, dur:'1m 45s',
   // what the agent recorded on reaching a date: the offer accepted (or "intent"), amount, date
   promise:{offer:'full payment within 5 days', amount:'$184.50', date:'5 Sep 2026'}},
  {id:'i14', start:'2026-08-31 07:58:22', end:'2026-08-31 07:59:03', medium:'chat',  dir:'in',
   client:'Instagram',            source:'web_widget', campaign:'Test',        user:'ccass_spena',
   disp:'Unsolved',   dur:'41s'},
  {id:'i11', start:'2026-08-31 08:22:41', end:'2026-08-31 08:23:29', medium:'wa',    dir:'in',
   client:'+57 300 555 8891',     source:'wa_business', campaign:'Cobros_Ago', voice:'frank',   agent:'a5',
   call:'c6', disp:'Took a message', credits:31, dur:'48s'},
  {id:'i15', start:'2026-08-30 19:42:10', end:'2026-08-30 19:43:51', medium:'sms',   dir:'out',
   client:'Nicolás Ospina',       source:'wa_business', campaign:'Cobros_Ago', voice:'antonio', agent:'a6',
   call:'c7', disp:'Payment agreed', credits:12, dur:'1m 41s',
   promise:{offer:'a partial payment of at least 30%', amount:'$55.35', date:'30 Aug 2026'}},
  {id:'i8',  start:'2026-08-31 08:44:19', end:'2026-08-31 08:44:31', medium:'call',  dir:'out',
   client:'Luz Mariana Ríos',     source:'5980114227', campaign:'Citas_Sept',   voice:'gloria',  agent:'a1',
   call:'c3', disp:'No answer',   credits:15, dur:'12s'},
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
   outMES:87.9, status:null, CHANNEL:row.medium, DIRECTION:row.dir, DISPOSITION:row.disp||null,
   creditsUsed:creditsOf(row), ...(row.promise ? {promise:row.promise} : {})},
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
/* There are no drafts. Every save writes a new version and that version is the one the agent
   runs from then on — the newest version is always the current one. "Live" is not a property of
   a version: it only says the agent is attached to a dialer in the Outbound Hub. */
const latestVersion   = a => (a.versions||[])[(a.versions||[]).length-1] || null;
const currentVersion  = latestVersion;
const nextVersionId   = a => 'v' + ((a.versions||[]).length + 1);
/* An agent can serve several dialers, and it runs ONE version in all of them: saving replaces
   that version everywhere at once. Which dialers is decided in the Outbound Hub, not here. The
   `dialers` array is the single source of truth — the `assignedToDialer` boolean the seeds still
   carry is descriptive only, and no logic reads it. */
const dialersOf    = a => (a && a.dialers) || [];
const isLive       = a => dialersOf(a).length > 0;    // attached to a dialer right now
const dialerCount  = a => dialersOf(a).length;
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

/* A rule can be switched off without being thrown away — the templates' defaults stay visible
   and re-tickable. `on` is what counts everywhere a rule is applied or quoted; a rule the
   supervisor typed carries custom:true and is the only kind that can be deleted outright. */
/* Offering a reduced balance without interest IS removing interest, so while that offer is ticked
   the two never-promise rules that forbid it are off — derived here, never written into the
   agent, so unticking the offer brings them straight back. */
const REDUCED_CONFLICTS = ['Never promise to remove interest', 'Never promise a discount on the balance'];
const suspendedByOffer = (o, p) => reducedOn(o) && REDUCED_CONFLICTS.indexOf(p.t) > -1;
const activePromises = o => (o.promises || []).filter(p => p.on !== false && !suspendedByOffer(o, p));
/* The list holds two kinds of rule now. Anything without a kind is a never-promise, which is
   what every entry used to be — so older agents and stored versions read back unchanged. */
const ruleKind   = r => r.kind || 'promise';
const promisesOf = o => activePromises(o).filter(r => ruleKind(r)==='promise');
const otherRules = o => activePromises(o).filter(r => ruleKind(r)==='rule');
/* End the call rather than leave anything with whoever picked up — the same principle that
   removed "speaks to whoever answers" from collections: never disclose to a third party. */
const THIRD_PARTY_RULE = 'End the call if someone other than the intended person answers';
/* Two more on the same subject, seeded for collections. The message one carries a text the
   supervisor edits (`param`); the label quotes it so the rule reads whole wherever it is shown. */
const THIRD_PARTY_NO_AMOUNT = 'If someone other than the intended person answers, never disclose the amount owed';
const THIRD_PARTY_MESSAGE   = 'If someone other than the intended person answers, leave this message';
const THIRD_PARTY_MESSAGE_DEFAULT    = 'Por favor, pida a la persona titular que se comunique con {company}.';
const THIRD_PARTY_MESSAGE_DEFAULT_EN = 'Please ask the account holder to get in touch with {company}.';
const thirdPartyMessageDefault = (lang, company) =>
  (lang === 'en' ? THIRD_PARTY_MESSAGE_DEFAULT_EN : THIRD_PARTY_MESSAGE_DEFAULT).replace('{company}', company || '');
const ruleText = r => r.param !== undefined ? r.t + ': \u201c' + r.param + '\u201d' : r.t;
/* the three rules, read off an agent: which are ticked and the message it leaves */
const thirdParty = o => { const rs = otherRules(o);
  const msg = rs.filter(r => r.t === THIRD_PARTY_MESSAGE)[0] || null;
  return { ends: rs.some(r => r.t === THIRD_PARTY_RULE), noAmount: rs.some(r => r.t === THIRD_PARTY_NO_AMOUNT),
           message: msg ? (msg.param || '').trim() : null }; };
const bannedDefaults = d => { const t = template(d && d.template), en = langOf(d)==='en';
  return (en ? DEFAULT_BANNED_EN : DEFAULT_BANNED).concat(en ? (t.bannedEn || t.banned) : t.banned)
    .filter((w, i, a) => a.indexOf(w) === i); };

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
  {k:'What it is for',    when:c => c.template !== 'collections', get:c => goalLabel(c)},
  {k:'Asks for a person', get:c => handLabel(c)},
  {k:'Disclosure',                     when:c => c.template === 'collections', get:c => '\u201c' + disclosureFor(c) + '\u201d', long:true},
  {k:'What it says about the balance', when:c => c.template === 'collections', get:c => discloseLabel(c)},
  {k:'It also mentions',               when:c => c.template === 'collections',
                                       get:c => { const m = mentionsOf(c), xs = [];
                                         if(m.overdue) xs.push('how long it’s overdue, in ' + overdueUnit(c) + ' (' + colOf(c,'overdue') + ')');
                                         if(m.contract) xs.push('the contract number (' + colOf(c,'contract') + ')');
                                         return xs.length ? andList(xs) : 'nothing else'; }},
  {k:'How payment is arranged',        when:c => c.template === 'collections', get:c => paymentLabel(c)},
  {k:'Closing line',                   when:c => c.template === 'collections',
                                       get:c => closingOf(c) ? '\u201c' + closingOf(c) + '\u201d' : 'none', long:true},
  {k:'Opening line',      get:c => '\u201c' + (c.opener || '') + '\u201d', long:true},
  {k:'What it knows',     when:c => c.template === 'reception',
                          get:c => knowledgeLabel(c.knowledge || {})},
];
const CFG_LISTS = [
  {k:'Handover rule',   get:c => (c.handover || []).map(id => (HANDOVER.find(o => o.id === id) || {}).short)
                                   .filter(Boolean).concat(c.handoverOther || [])},
  {k:'Offer',           get:c => c.template === 'collections'
                                   ? activeOffers(c).map((g, i) => (i + 1) + ' · ' + offerLabel(c, g.id)
                                       + (g.id === 'minimum' || g.id === 'reduced' ? ' (' + colOf(c, g.id) + ')' : '')) : []},
  {k:'Never promises',  get:c => promisesOf(c).map(x => x.t.replace(/^Never promise /i, ''))},
  {k:'Other rule',      get:c => otherRules(c).map(ruleText)},
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
/* What a version is worth comparing against: the current one. */
const versionBaseline = (a, v) => {
  const cur = currentVersion(a);
  return cur && v && cur.id !== v.id ? cur : null;
};
const versionDiff = (a, v) => { const b = versionBaseline(a, v);
  return b ? {base:b, rows:diffFacts(versionConfig(a, b), versionConfig(a, v), a)} : null; };

const isCurrentVersion = (a, v) => { const c = currentVersion(a); return !!c && !!v && c.id === v.id; };

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
  const about=((k&&k.about)||'').trim(), n=((k&&k.urls)||[]).length, f=((k&&k.files)||[]).length;
  if(!about && !n && !f) return 'knows nothing about the business yet';
  const parts=[]; if(about) parts.push('the business profile'); if(n) parts.push(n+(n===1?' trained page':' trained pages'));
  if(f) parts.push(f+(f===1?' uploaded file':' uploaded files'));
  return 'answers from '+andList(parts);
}
/* the short count on the collapsed "What it knows" section */
function knowledgeCount(k){
  const n=(((k&&k.about)||'').trim()?1:0)+((k&&k.urls)||[]).length+((k&&k.files)||[]).length;
  return n ? n+(n===1?' source':' sources') : 'Empty';
}
const fmtSize = b => b < 1024 ? b+' B' : b < 1048576 ? Math.round(b/1024)+' KB' : (b/1048576).toFixed(1)+' MB';
/* Files the receptionist answers from. The prototype keeps each file's name and size only —
   the contents are never read or sent anywhere. */
function KnowledgeFiles({ k, set }) {
  const ref = useRef(null);
  const files = k.files || [];
  const add = list => {
    const got = Array.from(list || []).map(f => ({ name: f.name, size: f.size }))
      .filter(f => !files.some(x => x.name === f.name));
    if (got.length) set({ knowledge: { ...k, files: [...files, ...got] } });
  };
  return React.createElement(React.Fragment, null, files.length > 0 && React.createElement("div", {
    className: "tags urls",
    style: { marginBottom: 10 }
  }, files.map(f => React.createElement("span", {
    className: "tag",
    key: f.name
  }, f.name, React.createElement("span", {
    style: { opacity: .65, fontWeight: 500 }
  }, fmtSize(f.size)), React.createElement("button", {
    onClick: () => set({ knowledge: { ...k, files: files.filter(x => x.name !== f.name) } }),
    "aria-label": 'Remove ' + f.name
  }, I.x)))), React.createElement("input", {
    ref: ref,
    type: "file",
    multiple: true,
    accept: ".pdf,.doc,.docx,.txt,.md,.csv,.xlsx",
    style: { display: 'none' },
    onChange: e => { add(e.target.files); e.target.value = ''; }
  }), React.createElement("button", {
    className: "btn btn-gho btn-sm",
    onClick: () => ref.current && ref.current.click()
  }, I.arrowUp, "Upload files"), React.createElement("div", {
    className: "note",
    style: { marginTop: 10 }
  }, I.info, React.createElement("span", null, "PDF, Word, text or spreadsheet files: price lists, FAQs, policies. In this prototype only the file name is kept.")));
}
/* The fixed disclosure. Unchanged for every existing template; English for the receptionist. */
/* Collections: the disclosure is still mandatory and locked, but the wording is a choice among
   approved lines. The first is the original line, so an agent that never chose keeps it. */
const DISCLOSURES = [
  {id:'std',    es:'Le hablo desde un asistente virtual de {co}.',
                en:'You’re speaking with a virtual assistant for {co}.'},
  {id:'hola',   es:'Hola, le habla el asistente virtual de {co}.',
                en:'Hello, this is the virtual assistant for {co}.'},
  {id:'behalf', es:'Hola, soy el asistente virtual de {co} y me comunico en nombre de {co}.',
                en:'Hello, I’m the virtual assistant for {co}, calling on behalf of {co}.'},
  {id:'call',   es:'Hola, esta es una llamada realizada por el asistente virtual de {co}.',
                en:'Hello, this call is being made by the virtual assistant for {co}.'},
];
const disclosureLine = (opt, lang, co) => (lang==='en' ? opt.en : opt.es).split('{co}').join(co);
const disclosureOpt  = d => d.template==='collections' ? val(DISCLOSURES, (d.tokens||{}).disclosure) : DISCLOSURES[0];
const disclosureFor = d => d.template==='reception'
  ? disclosureLine(DISCLOSURES[0], 'en', d.tokens.company)
  : disclosureLine(disclosureOpt(d), langOf(d), d.tokens.company);
const RECEPTION_QUICKS = ['I’d like to leave a message', 'Can I book an appointment?', 'What are your opening hours?'];
