// ---------------------------------------------------------------------------
// Coach AI prototype — single source of truth for ALL mock data and copy.
// Both journeys (Option A / Option B) and the live-chat system prompt read
// from this module. No copy strings live inside components.
// ---------------------------------------------------------------------------

export const PRICE_PER_INTERACTION = 0.05; // € per analyzed interaction
export const DEFAULT_COVERAGE = 40; // % for agents without an explicit setting

export const team = [
  { id: 'marco', name: 'Marco Ferri', initials: 'MF', role: 'Senior agent', tenure: '4 years', interactionsPerMonth: 2400, coverage: 10, color: '#2F7BFF' },
  { id: 'julia', name: 'Julia Nowak', initials: 'JN', role: 'New agent', tenure: '3 weeks', interactionsPerMonth: 1900, coverage: 100, color: '#E93E8C' },
  { id: 'sofia', name: 'Sofia Ricci', initials: 'SR', role: 'Agent', tenure: '2 years', interactionsPerMonth: 2200, coverage: DEFAULT_COVERAGE, color: '#1FA971' },
  { id: 'ahmed', name: 'Ahmed Khan', initials: 'AK', role: 'Agent', tenure: '14 months', interactionsPerMonth: 2100, coverage: DEFAULT_COVERAGE, color: '#D98E04' },
  { id: 'lena', name: 'Lena Weber', initials: 'LW', role: 'Agent', tenure: '3 years', interactionsPerMonth: 2200, coverage: DEFAULT_COVERAGE, color: '#6A2BD9' },
  { id: 'tomas', name: 'Tomás Alves', initials: 'TA', role: 'Agent', tenure: '9 months', interactionsPerMonth: 2150, coverage: DEFAULT_COVERAGE, color: '#0EA5B7' },
];

export const agentById = (id) => team.find((a) => a.id === id);

// Budget-capped plan used in B3 ("Cap at €200" → total ≈ €198)
export const cappedCoverage = { marco: 10, julia: 100, sofia: 20, ahmed: 20, lena: 20, tomas: 24 };

export const campaigns = ['Outbound Sales – Fiber Q3', 'Retention – Fiber', 'Billing Support'];

// ---------------------------------------------------------------------------
// Quality Models
// ---------------------------------------------------------------------------
export const qualityModels = [
  {
    id: 'qm-outbound-v2',
    name: 'Outbound Sales v2',
    description: 'Standard for outbound fiber sales calls',
    type: 'Quality model',
    totalPoints: 100,
    categories: [
      {
        id: 'greeting',
        name: 'Greeting & Identity',
        questions: [
          {
            id: 'q-identity',
            text: 'Did the agent verify the customer\'s identity?',
            answers: [
              { id: 'yes', label: 'Yes', score: 20 },
              { id: 'no', label: 'No', score: 0 },
            ],
          },
        ],
      },
      {
        id: 'discovery',
        name: 'Discovery',
        questions: [
          {
            id: 'q-discovery',
            text: 'Did the agent ask about the customer\'s current provider and usage?',
            answers: [
              { id: 'fully', label: 'Fully', score: 20 },
              { id: 'partially', label: 'Partially', score: 10 },
              { id: 'no', label: 'No', score: 0 },
            ],
          },
        ],
      },
      {
        id: 'compliance',
        name: 'Compliance',
        questions: [
          {
            id: 'q-disclosure',
            text: 'Did the agent read the recording disclosure?',
            answers: [
              { id: 'yes', label: 'Yes', score: 20 },
              { id: 'no', label: 'No', score: 0 },
            ],
          },
        ],
      },
      {
        id: 'objections',
        name: 'Objection handling',
        questions: [
          {
            id: 'q-objection',
            text: 'Did the agent address objections with a relevant benefit?',
            answers: [
              { id: 'yes', label: 'Yes', score: 20 },
              { id: 'partially', label: 'Partially', score: 10 },
              { id: 'no', label: 'No', score: 0 },
            ],
          },
        ],
      },
      {
        id: 'closing',
        name: 'Closing',
        questions: [
          {
            id: 'q-closing',
            text: 'Did the agent confirm next steps and close clearly?',
            answers: [
              { id: 'yes', label: 'Yes', score: 20 },
              { id: 'partially', label: 'Partially', score: 10 },
              { id: 'no', label: 'No', score: 0 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'qm-retention',
    name: 'Retention v1',
    description: 'Save attempts on cancellation calls',
    type: 'Quality model',
    totalPoints: 100,
    categories: [],
  },
  {
    id: 'qm-billing',
    name: 'Billing Support',
    description: 'Dispute handling and empathy',
    type: 'Quality model',
    totalPoints: 100,
    categories: [],
  },
];

export const mainModel = qualityModels[0];
export const allQuestions = mainModel.categories.flatMap((c) =>
  c.questions.map((q) => ({ ...q, category: c.name }))
);

// ---------------------------------------------------------------------------
// Transcripts (timestamped; `t` in seconds). Lines can carry evidence tags.
// ---------------------------------------------------------------------------
export const transcripts = {
  'marco-4812': {
    id: 'marco-4812',
    interactionId: 'INT-4812',
    lines: [
      { t: 0, speaker: 'agent', text: 'Good afternoon, this is Marco calling from Fiberly. Am I speaking with Mr. Rossi?' },
      { t: 4, speaker: 'customer', text: 'Yes, that\'s me.' },
      { t: 6, speaker: 'agent', text: 'Great. This call is recorded for quality and training purposes.', evidence: 'q-disclosure' },
      { t: 10, speaker: 'agent', text: 'Perfect, so I\'m calling about the fiber offer we have in your street right now. Are you currently on a fiber plan?', evidence: 'q-identity', flag: 'Identity verification skipped — moved straight into the pitch without confirming date of birth or postcode.' },
      { t: 18, speaker: 'customer', text: 'I\'m with Velox, 200 megabit I think. It\'s fine, honestly.' },
      { t: 24, speaker: 'agent', text: 'Understood. And how many people are using the connection at home?', evidence: 'q-discovery' },
      { t: 28, speaker: 'customer', text: 'Two of us, plus the kids on weekends.' },
      { t: 33, speaker: 'agent', text: 'Then Fiber 300 at €29.90 would already be a step up, and Fiber 1000 is €39.90 if you want headroom for streaming on several screens.' },
      { t: 42, speaker: 'customer', text: 'Hmm, I\'m still under contract with Velox for six more months.' },
      { t: 46, speaker: 'agent', text: 'That\'s common. We cover up to €100 of any early-termination fee, so most people switch without paying anything extra.', evidence: 'q-objection' },
      { t: 54, speaker: 'customer', text: 'OK, that\'s interesting. Send me something in writing.' },
      { t: 58, speaker: 'agent', text: 'Will do — I\'ll email the offer today and call you back Thursday at the same time to walk through it. Thanks, Mr. Rossi.', evidence: 'q-closing' },
    ],
  },
  'marco-4830': {
    id: 'marco-4830',
    interactionId: 'INT-4830',
    lines: [
      { t: 0, speaker: 'agent', text: 'Hi, Marco from Fiberly here — is this Ms. Bianchi?' },
      { t: 3, speaker: 'customer', text: 'Speaking.' },
      { t: 5, speaker: 'agent', text: 'Quick heads-up that this call is recorded for quality purposes.', evidence: 'q-disclosure' },
      { t: 9, speaker: 'agent', text: 'So, we\'re rolling out Fiber 1000 in your area and I wanted to see if it makes sense for you.', evidence: 'q-identity', flag: 'Identity verification skipped — name confirmation only, no second factor.' },
      { t: 16, speaker: 'customer', text: 'What\'s the price?' },
      { t: 18, speaker: 'agent', text: '€39.90 a month, and the TV bundle is another €12 if you want it.' },
      { t: 24, speaker: 'customer', text: 'That\'s too expensive for me right now.' },
      { t: 27, speaker: 'agent', text: 'I hear you. Fiber 300 is €29.90 and for most households it\'s more than enough — would that work better?', evidence: 'q-objection' },
      { t: 35, speaker: 'customer', text: 'Maybe. Let me think about it.' },
      { t: 38, speaker: 'agent', text: 'Sure. I\'ll send the details and check back next week. Have a good one.', evidence: 'q-closing' },
    ],
  },
  'julia-4901': {
    id: 'julia-4901',
    interactionId: 'INT-4901',
    live: true,
    lines: [
      { t: 0, speaker: 'customer', text: 'I\'ve been charged twice this month. Twice! €39.90 two times, and nobody answers my emails.', sentiment: 38 },
      { t: 4, speaker: 'agent', text: 'I\'m sorry to hear that, Mr. Conti. Let me pull up your account.', sentiment: 36 },
      { t: 8, speaker: 'customer', text: 'This is the third time I\'m calling. Honestly, I\'m about to cancel everything.', sentiment: 28, whisper: { type: 'suggestion', text: 'Acknowledge the double charge, offer the credit' } },
      { t: 13, speaker: 'agent', text: 'You\'re right, I can see the double charge on the 3rd and the 5th — that shouldn\'t have happened. I can credit the €39.90 back today.', sentiment: 41, usesSuggestion: true },
      { t: 20, speaker: 'customer', text: 'Today? Because last time they said the same thing.', sentiment: 44, whisper: { type: 'compliance', text: 'Read the recording disclosure' } },
      { t: 24, speaker: 'agent', text: 'I understand. Just so you know, this call is recorded for quality — and I\'m applying the credit while we speak, you\'ll see it in your app within the hour.', sentiment: 52 },
      { t: 32, speaker: 'customer', text: 'OK… and how do I know it won\'t happen again next month?', sentiment: 55, whisper: { type: 'suggestion', text: 'Explain the fix: duplicate payment method removed' } },
      { t: 36, speaker: 'agent', text: 'There were two payment methods on the account, which caused the duplicate. I\'ve removed the old one, so only a single charge can go through.', sentiment: 63 },
      { t: 44, speaker: 'customer', text: 'Alright. Thank you, that\'s the first clear answer I\'ve had.', sentiment: 71, whisper: { type: 'sentiment', text: 'Sentiment recovering — good moment to confirm next steps' } },
      { t: 48, speaker: 'agent', text: 'I\'ll also email you a confirmation of the credit right now. Is there anything else I can help with today?', sentiment: 74 },
    ],
  },
};

// Live transcripts for the other agents on calls (short, going fine)
Object.assign(transcripts, {
  'marco-live': {
    id: 'marco-live', live: true,
    lines: [
      { t: 0, speaker: 'agent', text: 'So, Ms. Greco, to recap: Fiber 1000 at €39.90, installation next Tuesday, and the TV bundle if you want it later.', sentiment: 60 },
      { t: 6, speaker: 'customer', text: 'Tuesday works. Do I need to be home the whole morning?', sentiment: 64 },
      { t: 10, speaker: 'agent', text: 'Just a two-hour window — I\'ll text you the slot the day before.', sentiment: 68, whisper: { type: 'compliance', text: 'Confirm the 14-day withdrawal right before closing' } },
      { t: 15, speaker: 'agent', text: 'One more thing: you have 14 days to change your mind at no cost. Shall I confirm the order?', sentiment: 71, usesSuggestion: true },
      { t: 21, speaker: 'customer', text: 'Yes, go ahead. Thank you, Marco.', sentiment: 74 },
    ],
  },
  'ahmed-live': {
    id: 'ahmed-live', live: true,
    lines: [
      { t: 0, speaker: 'agent', text: 'And how many devices are usually online at the same time at home, Mr. Esposito?', sentiment: 55 },
      { t: 4, speaker: 'customer', text: 'Two laptops, the TV, phones… my son games a lot in the evening.', sentiment: 58 },
      { t: 9, speaker: 'agent', text: 'Then latency matters more than raw speed for him — that\'s where fiber really beats your current 200.', sentiment: 60 },
      { t: 15, speaker: 'customer', text: 'Honestly, Velox is offering me 500 for €24.90 right now.', sentiment: 58, whisper: { type: 'suggestion', text: 'Velox €24.90 is a 12-month promo, then €44.90 — reframe on 24-month cost' } },
      { t: 20, speaker: 'agent', text: 'That\'s a good promo — it\'s €24.90 for twelve months, then €44.90. Fiber 300 stays €29.90 for the whole contract, so over two years you\'re ahead with us.', sentiment: 62, usesSuggestion: true },
      { t: 30, speaker: 'customer', text: 'Hm. I hadn\'t seen the second-year price. Send me both side by side.', sentiment: 65 },
    ],
  },
  'sofia-live': {
    id: 'sofia-live', live: true,
    lines: [
      { t: 0, speaker: 'customer', text: 'I\'m moving to Lisbon in October, so I need to cancel everything.', sentiment: 45 },
      { t: 4, speaker: 'agent', text: 'Congratulations on the move, Ms. Romano. Let me check what your options are before we cancel anything.', sentiment: 47, whisper: { type: 'suggestion', text: 'Offer the 3-month pause instead of cancellation' } },
      { t: 10, speaker: 'agent', text: 'You can pause the line for up to three months at no cost — if the move slips, you keep your number and your price.', sentiment: 52, usesSuggestion: true },
      { t: 17, speaker: 'customer', text: 'The move won\'t slip, but… what happens to the TV box?', sentiment: 50, whisper: { type: 'compliance', text: 'Mention the equipment return deadline (30 days)' } },
      { t: 21, speaker: 'agent', text: 'We send a prepaid return label; you have 30 days after the line closes. Do you want me to schedule the pause or the cancellation?', sentiment: 49 },
    ],
  },
});

// ---------------------------------------------------------------------------
// Interactions (~10). `sentiment` is a sparkline series (0–100).
// ---------------------------------------------------------------------------
export const interactions = [
  { id: 'INT-4812', agentId: 'marco', campaign: campaigns[0], date: 'Fri 09:14', duration: 62, sentiment: [60, 62, 61, 63, 58, 60, 64, 66], disposition: 'Callback scheduled', score: 60, flags: ['Identity verification skipped'], transcriptId: 'marco-4812',
    evaluation: { 'q-identity': 'no', 'q-discovery': 'partially', 'q-disclosure': 'yes', 'q-objection': 'yes', 'q-closing': 'yes' } },
  { id: 'INT-4830', agentId: 'marco', campaign: campaigns[0], date: 'Fri 11:47', duration: 41, sentiment: [58, 57, 55, 50, 48, 52, 55, 54], disposition: 'Not interested', score: 50, flags: ['Identity verification skipped'], transcriptId: 'marco-4830',
    evaluation: { 'q-identity': 'no', 'q-discovery': 'no', 'q-disclosure': 'yes', 'q-objection': 'yes', 'q-closing': 'partially' } },
  { id: 'INT-4901', agentId: 'julia', campaign: campaigns[2], date: 'Now', duration: 48, sentiment: [38, 36, 28, 41, 44, 52, 55, 63, 71, 74], disposition: 'In progress', score: null, flags: ['Billing dispute · sentiment dropping'], transcriptId: 'julia-4901', live: true },
  { id: 'INT-4855', agentId: 'sofia', campaign: campaigns[1], date: 'Fri 10:02', duration: 312, sentiment: [45, 48, 50, 47, 55, 60, 66, 70], disposition: 'Saved', score: 72, flags: ['Disclosure read late'] },
  { id: 'INT-4861', agentId: 'ahmed', campaign: campaigns[0], date: 'Fri 10:36', duration: 188, sentiment: [62, 64, 63, 65, 67, 66, 68, 70], disposition: 'Sale', score: 90, flags: [] },
  { id: 'INT-4873', agentId: 'lena', campaign: campaigns[0], date: 'Fri 13:20', duration: 145, sentiment: [55, 54, 52, 50, 53, 56, 58, 57], disposition: 'Callback scheduled', score: 80, flags: [] },
  { id: 'INT-4879', agentId: 'julia', campaign: campaigns[0], date: 'Fri 14:05', duration: 201, sentiment: [50, 52, 55, 60, 63, 66, 70, 72], disposition: 'Sale', score: 84, flags: [] },
  { id: 'INT-4884', agentId: 'tomas', campaign: campaigns[0], date: 'Fri 14:48', duration: 97, sentiment: [58, 56, 52, 49, 47, 45, 46, 44], disposition: 'Not interested', score: 66, flags: ['Objection not addressed'] },
  { id: 'INT-4890', agentId: 'sofia', campaign: campaigns[0], date: 'Fri 15:30', duration: 176, sentiment: [60, 62, 63, 62, 64, 66, 65, 68], disposition: 'Sale', score: 88, flags: [] },
  { id: 'INT-4896', agentId: 'marco', campaign: campaigns[0], date: 'Fri 16:12', duration: 133, sentiment: [63, 65, 64, 66, 68, 67, 69, 70], disposition: 'Sale', score: 92, flags: [] },
];

export const flaggedInteractions = interactions
  .filter((i) => i.flags.length > 0 && !i.live)
  .sort((a, b) => (a.score ?? 0) - (b.score ?? 0));

// Live calls board (A2 and Option B Live tab). Every call can be listened to.
export const liveCalls = [
  { agentId: 'julia', campaign: campaigns[2], startedSecondsAgo: 48, customer: 'Mr. Conti', status: 'On call', transcriptId: 'julia-4901', stage: 'Objection', topic: 'Billing dispute · double charge', sentimentNow: 28, trend: [38, 36, 28], whispers: 1, disclosure: false, scoreSoFar: 55, needsYou: true,
    customerInfo: { phone: '+39 02 ••• 4471', account: 'FBL-20481', plan: 'Fiber 1000', since: 'Mar 2025', tickets: '2 (billing)', lastContact: '3 days ago' } },
  { agentId: 'marco', campaign: campaigns[0], startedSecondsAgo: 204, customer: 'Ms. Greco', status: 'On call', transcriptId: 'marco-live', stage: 'Closing', topic: 'Fiber 1000 upsell', sentimentNow: 71, trend: [60, 64, 68, 71], whispers: 0, disclosure: true, scoreSoFar: 80,
    customerInfo: { phone: '+39 06 ••• 2210', account: 'FBL-18877', plan: 'Fiber 300', since: 'Nov 2024', tickets: '0', lastContact: '5 weeks ago' } },
  { agentId: 'ahmed', campaign: campaigns[0], startedSecondsAgo: 96, customer: 'Mr. Esposito', status: 'On call', transcriptId: 'ahmed-live', stage: 'Discovery', topic: 'New fiber offer', sentimentNow: 62, trend: [55, 58, 60, 62], whispers: 1, disclosure: true, scoreSoFar: 90,
    customerInfo: { phone: '+39 081 ••• 7730', account: 'prospect', plan: 'Velox 200 (competitor)', since: '—', tickets: '0', lastContact: 'first contact' } },
  { agentId: 'sofia', campaign: campaigns[1], startedSecondsAgo: 371, customer: 'Ms. Romano', status: 'On call', transcriptId: 'sofia-live', stage: 'Objection', topic: 'Cancellation · moving abroad', sentimentNow: 49, trend: [45, 47, 52, 49], whispers: 2, disclosure: true, scoreSoFar: 70,
    customerInfo: { phone: '+39 011 ••• 9084', account: 'FBL-20112', plan: 'Fiber 300 + TV', since: 'Jan 2025', tickets: '1 (technical)', lastContact: '2 weeks ago' } },
  { agentId: 'lena', campaign: campaigns[0], startedSecondsAgo: 0, customer: '—', status: 'Wrap-up' },
  { agentId: 'tomas', campaign: campaigns[0], startedSecondsAgo: 0, customer: '—', status: 'Available' },
];
export const liveCallFor = (agentId) => liveCalls.find((c) => c.agentId === agentId);

// ---------------------------------------------------------------------------
// KPI history — 8 weeks, per agent
// ---------------------------------------------------------------------------
export const weeks = ['W27', 'W28', 'W29', 'W30', 'W31', 'W32', 'W33', 'W34'];

export const kpiHistory = {
  marco: { quality: [82, 83, 82, 81, 83, 74, 71, 70], sentiment: [68, 70, 69, 70, 68, 62, 60, 59], conversion: [14, 15, 14, 15, 14, 12, 11, 11] },
  julia: { quality: [58, 62, 66, 69, 72, 75, 79, 83], sentiment: [52, 55, 58, 62, 64, 68, 71, 76], conversion: [5, 6, 7, 8, 9, 10, 11, 12] },
  sofia: { quality: [78, 79, 80, 78, 81, 82, 81, 83], sentiment: [64, 65, 66, 65, 67, 68, 67, 69], conversion: [11, 12, 12, 11, 13, 13, 12, 13] },
  ahmed: { quality: [85, 86, 85, 87, 86, 88, 87, 89], sentiment: [70, 71, 70, 72, 71, 73, 72, 74], conversion: [15, 15, 16, 16, 17, 16, 17, 18] },
  lena: { quality: [80, 80, 79, 81, 80, 82, 81, 82], sentiment: [66, 66, 65, 67, 66, 68, 67, 68], conversion: [12, 12, 12, 13, 12, 13, 13, 13] },
  tomas: { quality: [70, 72, 71, 73, 72, 74, 73, 75], sentiment: [58, 59, 60, 60, 61, 62, 62, 63], conversion: [8, 8, 9, 9, 10, 10, 10, 11] },
};

// ---------------------------------------------------------------------------
// Business knowledge (Option B onboarding)
// ---------------------------------------------------------------------------
export const business = {
  company: 'Fiberly',
  products: [
    { id: 'fiber300', name: 'Fiber 300', price: '€29.90 / mo', heardIn: 41, correct: true },
    { id: 'fiber1000', name: 'Fiber 1000', price: '€39.90 / mo', heardIn: 57, correct: true },
    { id: 'tv', name: 'TV bundle', price: '+ €12 / mo', heardIn: 19, correct: true },
  ],
  refundPolicy: { correct: '14 days', draft: '30 days?', heardVariants: ['14 days', '30 days'] },
  earlyTerminationCover: 'Up to €100 of the competitor\'s early-termination fee',
  objections: [
    { id: 'expensive', text: '"Too expensive"', share: 34 },
    { id: 'contract', text: '"Under contract with a competitor"', share: 27 },
    { id: 'partner', text: '"Need to ask my partner"', share: 15 },
  ],
  emergingObjection: {
    text: '"Velox is offering me 500 Mbit for €24.90"',
    share: 20,
    talkingPoint: {
      title: 'Talking point — "Velox 500 for €24.90"',
      bullets: [
        'Acknowledge it: "That is a good promo — it\'s €24.90 for 12 months, then €44.90."',
        'Reframe on total cost: Fiber 300 stays at €29.90 with no promo cliff — cheaper over 24 months.',
        'Add the switch cover: we pay up to €100 of any early-termination fee.',
        'Close with a choice: "Do you want the 300 or the 1000 to compare side by side?"',
      ],
      sourcedFrom: ['INT-4861 (Ahmed)', 'INT-4890 (Sofia)', 'INT-4896 (Marco)'],
    },
  },
  documents: ['Price list Q3.pdf', 'Sales script v4.docx', 'Refund policy.pdf'],
};

// ---------------------------------------------------------------------------
// Costs
// ---------------------------------------------------------------------------
export function analyzedPerMonth(agent, coverage) {
  return Math.round((coverage / 100) * agent.interactionsPerMonth);
}
export function costFor(agent, coverage) {
  return analyzedPerMonth(agent, coverage) * PRICE_PER_INTERACTION;
}
export function totalCost(coverageMap) {
  return team.reduce((sum, a) => sum + costFor(a, coverageMap[a.id] ?? a.coverage), 0);
}
export const defaultCoverage = Object.fromEntries(team.map((a) => [a.id, a.coverage]));
export const costFormula = 'coverage % × interactions / month × €0.05 per analyzed interaction';
export const euro = (n) => `€${Math.round(n)}`;

// ---------------------------------------------------------------------------
// Whisper AI suggestions used in the live monitor (A4 / B5)
// ---------------------------------------------------------------------------
export const whisperSuggestions = [
  'Acknowledge the double charge, offer the credit',
  'Read the recording disclosure',
  'Explain the fix: duplicate payment method removed',
];

// ---------------------------------------------------------------------------
// Audit log (B7)
// ---------------------------------------------------------------------------
export const auditLog = [
  { ts: 'Mon 06:12', action: 'Reviewed 214 Friday interactions against Outbound Sales v2', kind: 'analysis', ref: 'Batch #2287' },
  { ts: 'Mon 06:14', action: 'Drafted feedback for Marco Ferri (INT-4812, INT-4830) — held for supervisor', kind: 'draft', ref: 'INT-4812' },
  { ts: 'Mon 06:15', action: 'Drafted shout-out for Julia Nowak (sentiment +12)', kind: 'draft', ref: 'Julia Nowak' },
  { ts: 'Mon 09:41', action: 'Whispered de-escalation opener to Julia Nowak (INT-4901)', kind: 'whisper', ref: 'INT-4901' },
  { ts: 'Mon 09:42', action: 'Barge AI alert sent to supervisor (INT-4901, sentiment 28)', kind: 'alert', ref: 'INT-4901' },
  { ts: 'Tue 07:02', action: 'Sent routine positive feedback to Ahmed Khan (INT-4861, score 90)', kind: 'autonomous', ref: 'INT-4861' },
  { ts: 'Tue 07:02', action: 'Sent routine positive feedback to Sofia Ricci (INT-4890, score 88)', kind: 'autonomous', ref: 'INT-4890' },
  { ts: 'Wed 18:30', action: 'Coverage change applied: Marco Ferri 40% → 10% (approved by supervisor)', kind: 'config', ref: 'Marco Ferri' },
];

// ---------------------------------------------------------------------------
// Copy — entry screen & feature list (verbatim from spec)
// ---------------------------------------------------------------------------
export const copy = {
  appTitle: 'Coach AI',
  subtitle: 'One quality standard. Every interaction. Two ways to get there.',
  optionA: {
    label: 'Option A',
    title: 'The Coach Hub',
    blurb: 'The supervisor operates the hub: coverage, review queue, live alerts.',
    cta: 'Play scenario A',
  },
  optionB: {
    label: 'Option B',
    title: 'The AI Teammate',
    blurb: 'The supervisor manages a coach that works like a colleague.',
    cta: 'Play scenario B',
  },
  featuresLink: "What's inside Coach AI",
  features: [
    { name: 'Quality Models', text: 'define what a good interaction looks like for your operation. The scoring basis for everything else.' },
    { name: 'AI Quality', text: 'scores interactions against your Quality Model automatically, with evidence. Reviews what matters instead of hand-scoring a sample.' },
    { name: 'Coach AI', text: 'analyzes a chosen share of each agent\'s calls. Feedback for the agent, summary for the supervisor, progress over time.' },
    { name: 'Whisper & Barge', text: 'listen to live calls, whisper advice to the agent, or take over the conversation.' },
    { name: 'Whisper AI', text: 'real-time suggestions and compliance reminders in the agent\'s ear, on every call.' },
    { name: 'Barge AI', text: 'alerts the supervisor when a live call needs them. No more random spot-checking.' },
  ],
  offlineBadge: 'offline — scripted mode',
  offlineReply: 'Let me get back to you on that one.',
  correctionSaved: 'Correction saved — the system learns from this.',
  bargeToast: {
    title: 'Barge AI — Julia\'s call needs you now.',
    body: 'Billing dispute, sentiment dropping.',
  },
};

// ---------------------------------------------------------------------------
// Option A beats — narration verbatim
// ---------------------------------------------------------------------------
export const optionABeats = [
  { id: 'A1', title: 'Quality Models', narration: 'It starts with what UContact already has: the Quality Model — the definition of a good interaction. This becomes the basis Coach AI uses to score agents.' },
  { id: 'A2', title: 'Live supervision today', narration: 'Live supervision as it works now: listen, whisper into the agent\'s ear, or barge in. The problem: the supervisor picks calls at random.' },
  { id: 'A3', title: 'Coach AI coverage', narration: 'He can\'t cover everything, so he sets Coach AI coverage per agent. Before confirming, the screen shows what each setting will consume — coverage is a budget decision, not a surprise on the invoice.' },
  { id: 'A4', title: 'Whisper AI + Barge AI', narration: 'Whisper AI now assists Julia on every call. When sentiment collapses, Barge AI calls the supervisor in — no more random spot-checking.' },
  { id: 'A5', title: 'Review queue', narration: 'The review queue shows what Coach AI flagged, with evidence for every answer. Corrections teach the system.' },
  { id: 'A6', title: 'Agent history & close the loop', narration: 'He plays Marco the two clips in their 1:1, raises his coverage to 40% — and next week, the same screen tells him whether the coaching landed.' },
];

// ---------------------------------------------------------------------------
// Option B beats — narration + scripted coach messages
// ---------------------------------------------------------------------------
export const consoleTabs = [
  { id: 'setup', label: 'Setup' },
  { id: 'knowledge', label: 'Knowledge' },
  { id: 'plan', label: 'Plan' },
  { id: 'actions', label: 'Actions' },
  { id: 'live', label: 'Live' },
  { id: 'team', label: 'Team' },
  { id: 'activity', label: 'Activity' },
];

export const optionBBeats = [
  {
    id: 'B1',
    title: 'Setup',
    tab: 'setup',
    narration: 'Setup is a conversation: the coach asks what it needs — campaign, who\'s new, what you can teach it — and takes it from there.',
    messages: [
      { role: 'coach', text: 'Hi, I\'m your Coach AI. I\'ve read the Quality Models on your campaigns and I can listen to recorded interactions. Before I start, three quick questions. Which campaign should I coach first?', quickReplies: [
        { label: 'Outbound Sales – Fiber Q3', reply: 'Outbound Sales – Fiber Q3.', effect: { campaign: 'Outbound Sales – Fiber Q3' },
          response: { text: 'Good — I\'ll score against Outbound Sales v2, the Quality Model on that campaign. Six agents work it. Is anyone new that I should pay extra attention to?', quickReplies: [
            { label: 'Julia — 3 weeks in', reply: 'Julia — she\'s three weeks in.', effect: { focusAgent: 'julia' },
              response: { text: 'Noted. Last one: do you want me to coach behavior only — scores, sentiment, compliance — or also substance: right answers, right prices, right objection handling? For substance I need a price list, scripts or your refund policy. Drop them in Setup on the right, or skip and I\'ll learn from the calls.', quickReplies: [
                { label: 'I\'ll add documents', reply: 'I\'ll add documents.', effect: { wantsDocs: true }, response: 'Perfect — drop them on the right whenever you\'re ready. Meanwhile I\'ll start listening to the last four weeks of calls.' },
                { label: 'Skip for now', reply: 'Skip for now.', effect: { wantsDocs: false }, response: 'No problem — I\'ll coach behavior and learn the substance from the calls. You can add documents any time from Setup.' },
              ] } },
            { label: 'No one', reply: 'No one right now.', effect: { focusAgent: null },
              response: { text: 'OK. Last one: behavior only — scores, sentiment, compliance — or also substance? For substance I need a price list, scripts or your refund policy. Drop them in Setup on the right, or skip and I\'ll learn from the calls.', quickReplies: [
                { label: 'I\'ll add documents', reply: 'I\'ll add documents.', effect: { wantsDocs: true }, response: 'Perfect — drop them on the right whenever you\'re ready.' },
                { label: 'Skip for now', reply: 'Skip for now.', effect: { wantsDocs: false }, response: 'No problem — I\'ll learn the substance from the calls.' },
              ] } },
          ] } },
        { label: 'Billing Support', reply: 'Billing Support.', effect: { campaign: 'Billing Support' }, response: 'Understood — I\'ll start there and use the Billing Support model. For this walkthrough I\'ll also keep an eye on Outbound Sales, where most of the team works.' },
      ] },
    ],
  },
  {
    id: 'B2',
    title: 'Knowledge',
    tab: 'knowledge',
    narration: 'The coach starts from what the platform already knows — and drafts its own picture of the business from real calls, like a new hire repeating back what they understood.',
    messages: [
      { role: 'coach', text: 'I listened to 214 calls. Here\'s the picture of the business I put together — prices are what I heard agents quote. Could you confirm or correct each card in Knowledge? One of them I\'m not sure about.' },
      { role: 'coach', text: 'One gap I found already: two agents gave customers two different refund windows — 14 and 30 days. Which is correct?', quickReplies: [
        { label: '14 days', reply: '14 days.', response: 'Saved — that\'s knowledge now. I\'ll flag any call that quotes 30 days.', effect: { refundResolved: '14 days', refundFixed: true } },
        { label: '30 days', reply: '30 days.', response: 'Saved — that\'s knowledge now. I\'ll flag any call that quotes 14 days.', effect: { refundResolved: '30 days' } },
      ] },
    ],
  },
  {
    id: 'B3',
    title: 'Plan & calibration',
    tab: 'plan',
    narration: 'The plan is a negotiation with a price tag, not a settings page. Calibration = show the new hire how it\'s done.',
    messages: [
      { role: 'coach', text: 'Here\'s the plan I\'d propose. Julia is three weeks in, so I\'d listen to everything she does for now. Marco is your most experienced agent — 10% is enough to catch drift. The others at the team default. That comes to about €280 a month.', quickReplies: [
        { label: 'Approve', reply: 'Approve the plan.', response: 'Approved. I\'ll start with Friday\'s calls tonight.', effect: { planApproved: true } },
        { label: 'Cap at €200', reply: 'Cap it at €200.', response: 'Done — I kept Julia at 100% and Marco at 10%, and lowered the others to 20–24%. New total: €198 a month.', effect: { planCapped: true, coverage: cappedCoverage } },
      ] },
      { role: 'coach', text: 'One more thing before I start: score five calls alongside me so I learn your standard, not just the model\'s. Call one of five is in Plan, under Calibration.' },
    ],
  },
  {
    id: 'B4',
    title: 'Actions',
    tab: 'actions',
    narration: 'No queue to open. The coach worked overnight and brings only what needs human judgment.',
    messages: [
      { role: 'coach', text: 'I reviewed Friday\'s 214 interactions. Three things need you: Marco skipped identity verification on two calls — clips and draft feedback attached, send it or handle it in person? Julia\'s sentiment is up 12 points — worth a shout-out. A new pricing objection is showing up in one call out of five — want a talking point drafted from the calls that handled it best?' },
    ],
  },
  {
    id: 'B5',
    title: 'Live',
    tab: 'live',
    narration: 'Same Whisper AI, same Barge AI — delivered as a colleague\'s tap on the shoulder.',
    messages: [
      { role: 'coach', text: 'Julia is on a rough call — billing dispute, sentiment dropping. I already whispered her the de-escalation opener. Listen in?', quickReplies: [
        { label: 'Listen in', reply: 'Listen in.', response: 'Opening her call in Live. She just used the opener — sentiment is turning.', effect: { liveOpen: 'julia' } },
      ] },
    ],
  },
  {
    id: 'B6',
    title: 'Team · Marco',
    tab: 'team',
    narration: 'Evidence lives on screens; decisions happen in conversation. Corrections teach the coach.',
    messages: [
      { role: 'coach', text: 'Your 1:1 with Marco is at 2 pm. His file is open in Team: eight weeks of KPIs, the two clips, and the feedback draft — every score links to the transcript line it came from. If any evaluation looks wrong to you, correct it and I\'ll learn from it.', quickReplies: [
        { label: 'Raise Marco to 40%', reply: 'Raise Marco to 40%.', response: 'Done — Marco is at 40% coverage now, about 960 calls a month. That\'s €48 instead of €12 — the new team total is in Plan.', effect: { coverage: { marco: 40 } } },
      ] },
    ],
  },
  {
    id: 'B7',
    title: 'Trust & activity',
    tab: 'activity',
    narration: 'Trust is earned in conversation, autonomy is always logged. That\'s a teammate, not a black box.',
    messages: [
      { role: 'coach', text: 'You\'ve approved my last 30 feedback drafts without edits. Want me to send routine positive feedback on my own and only bring you the hard calls?', quickReplies: [
        { label: 'Yes', reply: 'Yes.', response: 'Thanks. Routine positive feedback goes out on its own from now on — every one is in Activity, and the hard calls still come to you first.', effect: { autonomyGranted: true } },
        { label: 'Keep approving', reply: 'Keep approving.', response: 'Understood — I\'ll keep bringing every draft to you first.', effect: { autonomyGranted: false } },
      ] },
      { role: 'coach', text: 'Two weeks ago you told Marco you\'d lower his monitoring if verification stayed clean. Forty-one clean calls since. Drop him back to 10%?', quickReplies: [
        { label: 'Do it', reply: 'Do it.', response: 'Done — Marco is back at 10%. I\'ve logged the change and I\'ll tell you if verification slips again.', effect: { coverage: { marco: 10 }, marcoDropped: true } },
      ] },
    ],
  },
];

// Beat summaries injected into the live system prompt
export const beatSummaries = {
  B1: 'Setup: the coach asks which campaign to coach, who is new, and whether the supervisor will add documents (price list, scripts, refund policy).',
  B2: 'Knowledge: the coach shows its drafted picture of the business (products, prices, refund policy, objections) for confirmation and asks which refund window (14 or 30 days) is correct.',
  B3: 'The coach proposes a coverage plan (~€280/mo) and asks the supervisor to calibrate by scoring five calls together.',
  B4: 'Monday briefing: Marco skipped identity verification twice, Julia sentiment up 12 points, new pricing objection appearing.',
  B5: 'Live ping: Julia is on a billing dispute call with dropping sentiment; the coach already whispered a de-escalation opener.',
  B6: '1:1 prep for Marco: KPI charts, two clips, feedback draft; the supervisor may correct an evaluation and raise Marco to 40%.',
  B7: 'Trust: the coach asks for autonomy on routine positive feedback and proposes dropping Marco back to 10% after 41 clean calls; audit log shown.',
};

// Data-only bundle for the live system prompt (no UI copy)
export const scenarioData = {
  team,
  qualityModels,
  interactions,
  transcripts,
  kpiHistory,
  weeks,
  business,
  costs: { pricePerInteraction: PRICE_PER_INTERACTION, formula: costFormula, defaultCoverage, cappedCoverage },
  auditLog,
};

export function buildSystemPrompt(beatId) {
  return [
    'You are Coach AI, an AI coaching teammate inside UContact, a contact center platform, talking to a supervisor.',
    'Stay in character, be concise (2–4 sentences), warm and professional.',
    'Ground every answer in this scenario data:',
    JSON.stringify(scenarioData),
    `Current story beat: ${beatId} — ${beatSummaries[beatId] ?? ''}`,
    'Never mention being a demo, a prototype, or Claude.',
  ].join('\n');
}
