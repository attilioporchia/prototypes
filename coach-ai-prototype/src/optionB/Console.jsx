import React, { useRef, useState } from 'react';
import {
  business, team, agentById, interactions, allQuestions, defaultCoverage, liveCalls, kpiHistory,
  analyzedPerMonth, costFor, totalCost, euro, costFormula, auditLog, consoleTabs, mainModel,
} from '../scenario.js';
import { Icons, Avatar, AgentCell, Sparkline, Tooltip, fmtDuration } from '../components/common.jsx';
import LiveMonitor from '../components/LiveMonitor.jsx';
import Evaluation from '../components/Evaluation.jsx';
import { AgentKpis, ClipList } from '../components/KpiCharts.jsx';

/** Every panel shares the same header: title, one-line context, optional status chips. */
function PanelHead({ title, ctx, chips }) {
  return (
    <div className="panel-head">
      <div>
        <h3>{title}</h3>
        {ctx && <div className="ctx">{ctx}</div>}
      </div>
      {chips && <div className="row wrap" style={{ justifyContent: 'flex-end' }}>{chips}</div>}
    </div>
  );
}

// ------------------------------------------------------------------ Setup
function SetupPanel({ state, setState, say }) {
  const files = state.files || [];
  const [site, setSite] = useState('');
  const addFile = () => {
    if (files.length >= business.documents.length) return;
    const next = business.documents[files.length];
    setState({ files: [...files, next] });
    if (files.length === 0) say(`Got "${next}". Reading it now — I can already check quoted prices against it.`);
  };
  const addSite = () => {
    if (!site.trim()) return;
    setState({ website: site.trim() });
    say(`Thanks — I'll read ${site.trim()} for product names, prices and the refund policy.`);
  };
  const focus = state.focusAgent ? agentById(state.focusAgent) : null;
  return (
    <div className="fade">
      <PanelHead title="Setup" ctx="answer the coach in chat — this panel fills in as you go" />
      <div className="grid-2" style={{ alignItems: 'start' }}>
        <div className="card">
          <div className="card-title">Coaching scope</div>
          <div className="kv-list">
            <div className="kv"><span className="k">Campaign</span><span className={state.campaign ? 'strong' : 'muted'}>{state.campaign ?? 'waiting for your answer'}</span></div>
            <div className="kv"><span className="k">Quality Model</span><span className={state.campaign ? 'strong' : 'muted'}>{state.campaign ? `${mainModel.name} · ${allQuestions.length} questions · 100 pts` : '—'}</span></div>
            <div className="kv"><span className="k">Team</span><span className="strong">{team.length} agents</span></div>
            <div className="kv"><span className="k">Extra attention</span><span>{state.focusAgent === undefined ? <span className="muted">—</span> : focus ? <span className="row" style={{ gap: 8 }}><Avatar agent={focus} size={22} /> {focus.name} · {focus.tenure}</span> : <span className="muted">no one</span>}</span></div>
            <div className="kv"><span className="k">Coaching depth</span><span>{state.wantsDocs === undefined ? <span className="muted">—</span> : state.wantsDocs || files.length ? <span className="chip ai">Behavior + substance</span> : <span className="chip">Behavior</span>}</span></div>
          </div>
        </div>
        <div className="card">
          <div className="card-title">Teach the coach <span className="tiny muted" style={{ fontWeight: 400 }}>optional</span></div>
          <div className="dropzone" onClick={addFile} role="button" tabIndex={0}>
            <Icons.Upload size={24} />
            <div className="dz-title">Price list, scripts, refund policy</div>
            <div className="dz-sub">{files.length < business.documents.length ? 'Click to add a document (demo)' : 'All demo documents added'}</div>
          </div>
          {files.length > 0 && (
            <div className="row wrap mt" style={{ gap: 8 }}>
              {files.map((f) => <span key={f} className="file-chip"><Icons.Doc size={15} /> {f} <Icons.Check size={13} style={{ color: 'var(--green)' }} /></span>)}
            </div>
          )}
          <div className="row mt" style={{ gap: 8 }}>
            <div className="field" style={{ flex: 1, padding: '6px 14px' }}>
              <label>…or point me at your website</label>
              <input value={site} onChange={(e) => setSite(e.target.value)} placeholder="fiberly.example" />
            </div>
            <button className="btn ai-soft sm" onClick={addSite} disabled={!site.trim()}>Add</button>
          </div>
          {state.website && <div className="tiny muted mt">Reading {state.website}</div>}
        </div>
      </div>
      <div className="grid-2 mt">
        <div className="card soft">
          <div className="card-title">Without documents</div>
          <div className="small muted">I coach <b>behavior</b>: scores against the Quality Model, sentiment, compliance moments.</div>
          <div className="row wrap mt"><span className="chip">Scores</span><span className="chip">Sentiment</span><span className="chip">Compliance</span></div>
        </div>
        <div className={`card ${files.length || state.website ? 'ai' : 'soft'}`}>
          <div className="card-title">With documents {(files.length > 0 || state.website) && <span className="chip ai">✦ unlocked</span>}</div>
          <div className="small muted">I also coach <b>substance</b>: right answers, right prices, right objection handling.</div>
          <div className="row wrap mt"><span className={`chip ${files.length ? 'ai' : ''}`}>Right answers</span><span className={`chip ${files.length ? 'ai' : ''}`}>Right prices</span><span className={`chip ${files.length ? 'ai' : ''}`}>Objection handling</span></div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------- Knowledge
function KnowledgePanel({ state, setState, say }) {
  const confirmed = state.b1Confirmed || {};
  const confirm = (id) => setState({ b1Confirmed: { ...confirmed, [id]: true } });
  const files = state.files || [];
  const fixRefund = () => {
    setState({ b1Confirmed: { ...confirmed, refund: true }, refundFixed: true, refundResolved: '14 days', b1Editing: false });
    say('Thanks — 14 days it is. I\'ll re-check the calls where an agent said 30 and flag them.');
  };
  const nConfirmed = Object.keys(confirmed).length;
  return (
    <div className="fade">
      <PanelHead title="What the coach knows" ctx="drafted from 214 calls · confirm or correct each card" chips={<><span className="chip green">{nConfirmed} / 5 confirmed</span>{files.length > 0 && <span className="chip ai">✦ {files.length} document{files.length > 1 ? 's' : ''}</span>}</>} />
      <div className="grid-3">
        {business.products.map((p) => (
          <div key={p.id} className={`kcard ${confirmed[p.id] ? 'ok' : ''}`}>
            <span className="ai-tag">heard in {p.heardIn} calls</span>
            <div className="k-title">{p.name}</div>
            <div className="k-price">{p.price}</div>
            <div className="k-sub">{files.length ? 'Matches the price list' : 'Quoted consistently by all agents'}</div>
            <div className="k-actions">
              {confirmed[p.id] ? <span className="chip green"><Icons.Check size={13} /> Confirmed</span> : (
                <>
                  <button className="btn primary xs" onClick={() => confirm(p.id)}>Confirm</button>
                  <button className="btn ghost xs" onClick={() => confirm(p.id)}>Correct</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="grid-2 mt">
        <div className={`kcard ${state.refundFixed ? 'fixed' : confirmed.refund || state.refundResolved ? 'ok' : 'doubt'}`}>
          <span className="ai-tag">heard two versions</span>
          <div className="k-title">Refund policy</div>
          <div className="k-price">{state.refundResolved ?? business.refundPolicy.draft}</div>
          <div className="k-sub">{state.refundResolved ? 'Resolved by you — now knowledge.' : 'Agents said "14 days" in 9 calls and "30 days" in 4. I\'m not sure which is right.'}</div>
          <div className="k-actions">
            {state.refundResolved ? <span className="chip ai">✦ Learned</span> : state.b1Editing ? (
              <>
                <button className="btn ai xs" onClick={fixRefund}>14 days</button>
                <button className="btn ghost xs" onClick={() => { setState({ b1Confirmed: { ...confirmed, refund: true }, refundResolved: '30 days', b1Editing: false }); say('Noted — 30 days. I\'ll hold the agents to that.'); }}>30 days</button>
              </>
            ) : (
              <>
                <button className="btn primary xs" onClick={() => { setState({ b1Confirmed: { ...confirmed, refund: true }, refundResolved: '30 days' }); say('Noted — 30 days. I\'ll hold the agents to that.'); }}>Confirm</button>
                <button className="btn ai-soft xs" onClick={() => setState({ b1Editing: true })}>Correct</button>
              </>
            )}
          </div>
        </div>
        <div className={`kcard ${confirmed.objections ? 'ok' : ''}`}>
          <span className="ai-tag">top objections</span>
          <div className="k-title">What customers push back on</div>
          <div className="stack" style={{ gap: 6 }}>
            {business.objections.map((o) => (
              <div key={o.id} className="row between small"><span>{o.text}</span><span className="muted">{o.share}% of calls</span></div>
            ))}
          </div>
          <div className="k-sub">Switch cover I heard: {business.earlyTerminationCover.toLowerCase()}</div>
          <div className="k-actions">
            {confirmed.objections ? <span className="chip green"><Icons.Check size={13} /> Confirmed</span> : <button className="btn primary xs" onClick={() => confirm('objections')}>Confirm</button>}
          </div>
        </div>
      </div>
      <div className="card mt">
        <div className="card-title">Sources</div>
        <div className="row wrap" style={{ gap: 8 }}>
          <span className="chip">Quality Model · {mainModel.name}</span>
          <span className="chip">214 recorded calls · 4 weeks</span>
          {files.map((f) => <span key={f} className="chip ai">✦ {f}</span>)}
          {state.website && <span className="chip ai">✦ {state.website}</span>}
          {!files.length && !state.website && <span className="tiny muted">No documents yet — add them in Setup to unlock substance coaching.</span>}
        </div>
      </div>
    </div>
  );
}

// ------------------------------------------------------------------- Plan
const CALIBRATION_CALL = interactions.find((i) => i.id === 'INT-4861');
function PlanPanel({ state, setState, say }) {
  const coverage = state.coverage ?? defaultCoverage;
  const total = totalCost(coverage);
  const pending = useRef(null);
  const setCov = (id, v) => {
    const next = { ...coverage, [id]: v };
    setState({ coverage: next, planApproved: false });
    clearTimeout(pending.current);
    pending.current = setTimeout(() => say(`Updated — ${agentById(id).name.split(' ')[0]} at ${v}%, about ${analyzedPerMonth(agentById(id), v).toLocaleString()} calls a month. New total: ${euro(totalCost(next))} a month.`), 1200);
  };
  const [answers, setAnswers] = useState({});
  const answered = Object.keys(answers).length;
  const scored = state.calibrated || 0;
  const approve = () => { setState({ planApproved: true }); say('Approved. I\'ll start with Friday\'s calls tonight.'); };
  const submitOne = () => {
    setState({ calibrated: 1 });
    say('Thanks — we agree on four of five. You were stricter on Discovery than I was; I\'ll hold that bar from now on. Four more, or skip ahead?');
  };
  return (
    <div className="fade">
      <PanelHead title="Coverage plan" ctx={state.planCapped ? 'rebalanced to your €200 cap · move a slider to adjust' : 'proposed by the coach · move a slider or ask in chat'} chips={<><span className={`chip ${state.planApproved ? 'green' : 'amber'}`}>{state.planApproved ? 'Approved' : 'Awaiting approval'}</span><span className={`chip ${scored >= 5 ? 'green' : ''}`}>Calibration {scored}/5</span></>} />
      <div className="card">
        {team.map((a) => {
          const c = coverage[a.id];
          return (
            <div className="plan-row" key={a.id}>
              <AgentCell agent={a} sub={a.id === 'julia' ? 'new — listen to everything' : a.id === 'marco' ? 'senior — catch drift' : 'team default'} />
              <div className="row"><input type="range" min="0" max="100" step="5" value={c} style={{ '--pct': `${c}%` }} onChange={(e) => setCov(a.id, Number(e.target.value))} aria-label={`${a.name} coverage`} /></div>
              <div className="muted"><b style={{ color: 'var(--text)' }}>{c}%</b> · {analyzedPerMonth(a, c).toLocaleString()} calls</div>
              <div className="right strong">{euro(costFor(a, c))}</div>
            </div>
          );
        })}
        <div className="plan-total">
          <span className="row" style={{ gap: 8 }}>Total per month <Tooltip text={costFormula}><span className="info-i">i</span></Tooltip></span>
          <span>{euro(total)}{Math.round(total) !== 280 && <span className="small muted"> (proposal €280)</span>}</span>
        </div>
        <div className="row mt" style={{ justifyContent: 'flex-end' }}>
          <button className={`btn ${state.planApproved ? 'done' : 'ai'}`} onClick={approve} disabled={state.planApproved}>{state.planApproved ? <><Icons.Check size={16} /> Approved</> : 'Approve plan'}</button>
        </div>
      </div>

      <div className="section-gap" />
      <PanelHead title="Calibration" ctx="score five calls alongside the coach so it learns your standard" chips={<span className="chip">call {Math.min(scored + 1, 5)} of 5</span>} />
      <div className="card">
        {scored >= 5 ? (
          <div className="learn-note">✦ 5/5 calibrated — I know your standard now.</div>
        ) : (
          <>
            <div className="row between mb">
              <AgentCell agent={agentById(CALIBRATION_CALL.agentId)} sub={`${CALIBRATION_CALL.id} · ${CALIBRATION_CALL.date} · ${CALIBRATION_CALL.disposition}`} />
              <Sparkline data={CALIBRATION_CALL.sentiment} color="var(--faint)" />
            </div>
            {allQuestions.map((q) => (
              <div className="q-row" key={q.id}>
                <div className="q-cat">{q.category}</div>
                <div className="q-text">{q.text}</div>
                <div className="row between">
                  <div className="answers">
                    {q.answers.map((a) => (
                      <button key={a.id} className={`ans ${answers[q.id] === a.id ? 'selected' : ''}`} disabled={scored >= 1} onClick={() => setAnswers((x) => ({ ...x, [q.id]: a.id }))}>{a.label} · {a.score}</button>
                    ))}
                  </div>
                  <span className="tiny muted">coach: {q.answers[0].label}</span>
                </div>
              </div>
            ))}
            <div className="row between mt">
              <span className="small muted">{answered}/{allQuestions.length} answered</span>
              <div className="row">
                {scored >= 1 && <button className="btn ai-soft sm" onClick={() => { setState({ calibrated: 5 }); say('Calibrated. From here on I score the way you do.'); }}>5/5 calibrated ✓ (skip ahead)</button>}
                <button className="btn ai sm" disabled={answered < allQuestions.length || scored >= 1} onClick={submitOne}>{scored >= 1 ? 'Submitted' : 'Submit my scores'}</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------- Actions
function ActionsPanel({ state, setState, say }) {
  const marco = agentById('marco'), julia = agentById('julia');
  const done = state.b4 || {};
  const set = (k, v) => setState({ b4: { ...done, [k]: v } });
  const open = 3 - Object.keys(done).length;
  return (
    <div className="fade">
      <PanelHead title="Actions" ctx="what needs your judgment · everything else the coach handled" chips={<><span className={`chip ${open ? 'red' : 'green'}`}>{open ? `${open} waiting` : 'All handled'}</span><span className="chip">✦ 214 reviewed overnight</span></>} />
      <div className="stack">
        <div className={`action-card ${done.marco ? 'resolved' : ''}`}>
          <div className="ac-head"><Avatar agent={marco} size={30} /> Marco skipped identity verification on two calls <span className="chip red">INT-4812 · INT-4830</span></div>
          <div className="ac-body">Same pattern both times: pitch first, verification never. Clips and a feedback draft are attached to his file in Team.</div>
          <ClipList agentId="marco" />
          <div className="ac-actions">
            {done.marco ? <span className="chip green"><Icons.Check size={13} /> {done.marco}</span> : (
              <>
                <button className="btn ghost sm" onClick={() => { set('marco', 'Feedback sent'); say('Sent. Marco gets the two clips with the draft feedback; I\'ll watch his next calls for verification.'); }}><Icons.Send size={15} /> Send feedback</button>
                <button className="btn ai sm" onClick={() => { set('marco', "You'll handle it in person"); say('Got it — I\'ll keep the clips and the draft in his file for your 1:1 and won\'t send anything.'); }}>I'll handle it</button>
              </>
            )}
          </div>
        </div>
        <div className={`action-card ${done.julia ? 'resolved' : ''}`}>
          <div className="ac-head"><Avatar agent={julia} size={30} /> Julia's sentiment is up 12 points <span className="chip green">▲ 12 · 4 weeks</span></div>
          <div className="ac-body">From 64 to 76 average. Biggest jump on billing calls since she started using the acknowledge-first opener.</div>
          <div className="ac-actions">
            {done.julia ? <span className="chip green"><Icons.Check size={13} /> Shout-out sent</span> : <button className="btn ai sm" onClick={() => { set('julia', true); say('Sent. She\'ll see it when she logs in — I quoted the call where the customer thanked her by name.'); }}>Send shout-out →</button>}
          </div>
        </div>
        <div className={`action-card ${done.objection ? 'resolved' : ''}`}>
          <div className="ac-head"><span className="coach-orb" style={{ width: 30, height: 30 }}>✦</span> New pricing objection in 1 call out of 5 <span className="chip amber">emerging</span></div>
          <div className="ac-body">{business.emergingObjection.text} — {business.emergingObjection.share}% of Friday's sales calls. Three agents handled it well; most didn't.</div>
          <div className="ac-actions">
            {done.objection ? <span className="chip green"><Icons.Check size={13} /> Talking point drafted</span> : <button className="btn ai sm" onClick={() => { set('objection', true); say('Drafted from the three calls that handled it best — Ahmed\'s, Sofia\'s and Marco\'s. Edit it or push it to the team.'); }}>Draft it →</button>}
          </div>
          {done.objection && (
            <div className="card ai fade">
              <div className="card-title"><span className="ai-tag">Draft</span> {business.emergingObjection.talkingPoint.title}</div>
              <ol style={{ margin: 0, paddingLeft: 18, display: 'grid', gap: 6 }} className="small">
                {business.emergingObjection.talkingPoint.bullets.map((b) => <li key={b}>{b}</li>)}
              </ol>
              <div className="tiny muted mt">Sourced from: {business.emergingObjection.talkingPoint.sourcedFrom.join(' · ')}</div>
              <div className="row mt"><button className="btn primary xs">Push to team</button><button className="btn ghost xs">Edit</button></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ------------------------------------------------------------------- Live
function LivePanel({ state, setState }) {
  const onCalls = liveCalls.filter((c) => c.status === 'On call');
  const openCall = state.liveOpen ? liveCalls.find((c) => c.agentId === state.liveOpen) : null;
  const open = (id, mode) => setState({ liveOpen: id, liveMode: mode ?? null });
  const [elapsed, setElapsed] = useState(0);
  React.useEffect(() => { const t = setInterval(() => setElapsed((e) => e + 1), 1000); return () => clearInterval(t); }, []);
  return (
    <div className="fade">
      <PanelHead title="Live calls" ctx="every call is one click away · Whisper AI helps each agent, Barge AI flags the ones that need you" chips={<><span className="chip green">{onCalls.length} on calls</span><span className="chip red live">{onCalls.filter((c) => c.needsYou).length} needs you</span></>} />
      <div className="card" style={{ padding: '4px 14px' }}>
        {liveCalls.map((c) => {
          const a = agentById(c.agentId);
          const on = c.status === 'On call';
          const isOpen = openCall?.agentId === c.agentId;
          const sent = c.sentimentNow;
          return (
            <div key={c.agentId} className={`live-card ${c.needsYou ? 'needs' : ''} ${isOpen ? 'open' : ''}`}>
              <div className="lc-top">
                <AgentCell agent={a} sub={on ? `${c.customer} · ${c.campaign}` : c.status} />
                {on ? (
                  <div className="row" style={{ gap: 6 }}>
                    <span className="muted small" style={{ fontVariantNumeric: 'tabular-nums', marginRight: 6 }}>{fmtDuration(c.startedSecondsAgo + elapsed)}</span>
                    <button className={`btn xs ${isOpen ? 'done' : c.needsYou ? 'danger' : 'ghost'}`} onClick={() => open(c.agentId, 'listen')}><Icons.Ear size={13} /> {isOpen ? 'Listening' : 'Listen'}</button>
                    <button className="btn ghost xs" onClick={() => open(c.agentId, 'whisper')} title="Whisper"><Icons.Mic size={13} /> Whisper</button>
                    <button className="btn ghost xs" onClick={() => open(c.agentId, 'barge')} title="Barge"><Icons.Phone size={13} /> Barge</button>
                  </div>
                ) : <span className="chip">{c.status}</span>}
              </div>
              {on && (
                <div className="lc-meta">
                  <span className="lc-stage"><b>{c.stage}</b> · {c.topic}</span>
                  <span className="lc-sep" />
                  <span className="row" style={{ gap: 6 }}><span className="tiny muted">Sentiment</span><span className={`chip ${sent < 40 ? 'red' : sent < 60 ? 'amber' : 'green'}`}>{sent}</span><Sparkline data={c.trend} width={48} height={18} danger={sent < 40} color="var(--faint)" /></span>
                  <span className={`chip ${c.whispers ? 'ai' : ''}`}>{c.whispers ? `✦ ${c.whispers} suggestion${c.whispers > 1 ? 's' : ''}` : '✦ listening'}</span>
                  <span className={`chip ${c.disclosure ? 'green' : 'amber'}`}>{c.disclosure ? 'Disclosure read' : 'Disclosure pending'}</span>
                  <span className="chip" title="Projected score against Outbound Sales v2">Score so far <b style={{ color: c.scoreSoFar < 60 ? 'var(--red)' : c.scoreSoFar < 80 ? 'var(--amber)' : 'var(--green)', marginLeft: 4 }}>{c.scoreSoFar}</b></span>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {openCall && (
        <div className="card mt fade" key={openCall.agentId}>
          <div className="row between mb" style={{ marginBottom: 8 }}>
            <span className="tiny muted">Live monitor</span>
            <button className="btn ghost xs" onClick={() => setState({ liveOpen: null })}>Close</button>
          </div>
          <LiveMonitor call={openCall} compact initialMode={state.liveMode} />
        </div>
      )}
    </div>
  );
}

// ------------------------------------------------------------------- Team
function TeamPanel({ state, setState, say }) {
  const [selected, setSelected] = useState('marco');
  const [openEval, setOpenEval] = useState(null);
  const agent = agentById(selected);
  const coverageMap = state.coverage ?? defaultCoverage;
  const cov = coverageMap[selected];
  const isMarco = selected === 'marco';
  return (
    <div className="fade">
      <PanelHead title="Team" ctx="one file per agent · KPIs, clips, drafts and every score with its evidence" />
      <div className="agent-strip">
        {team.map((a) => {
          const q = kpiHistory[a.id].quality;
          return (
            <button key={a.id} className={`agent-pill ${a.id === selected ? 'active' : ''}`} onClick={() => { setSelected(a.id); setOpenEval(null); }}>
              <Avatar agent={a} size={28} />
              <span>
                <span className="strong small" style={{ display: 'block' }}>{a.name.split(' ')[0]}</span>
                <span className="tiny muted">{coverageMap[a.id]}%</span>
              </span>
              <Sparkline data={q} width={44} height={18} color={q[q.length - 1] < q[0] ? 'var(--red)' : 'var(--faint)'} />
              {a.id === 'marco' && <span className="count red">2</span>}
            </button>
          );
        })}
      </div>
      <div className="team-layout">
        <div className="stack">
          <div className="row between">
            <div className="row" style={{ gap: 12 }}>
              <Avatar agent={agent} size={40} />
              <div>
                <div className="strong" style={{ fontSize: 16 }}>{agent.name}</div>
                <div className="small muted">{agent.role} · {agent.tenure}{isMarco ? ' · 1:1 today 2 pm' : ''}</div>
              </div>
            </div>
            <span className={`chip ${isMarco && cov === 40 ? 'ai' : ''}`}>Coverage {cov}% · {euro(costFor(agent, cov))} /mo</span>
          </div>
          <AgentKpis agentId={selected} highlightFrom={isMarco ? 5 : undefined} />
          {isMarco ? (
            <>
              <div className="grid-2" style={{ alignItems: 'start' }}>
                <div className="card">
                  <div className="card-title">Flagged clips <span className="chip red">2</span></div>
                  <ClipList agentId="marco" onOpen={(i) => setOpenEval(i)} />
                </div>
                <div className="card ai">
                  <div className="card-title"><span className="ai-tag">Feedback draft</span> held for you</div>
                  <p className="small" style={{ lineHeight: 1.6 }}>Marco — two of Friday's calls went straight into the offer before verifying who you were talking to (INT-4812 at 00:10, INT-4830 at 00:09). Your pitch and objection handling were strong on both. Let's make verification automatic: name, then date of birth or postcode, then the offer.</p>
                  <div className="divider" />
                  <div className="row between">
                    <div><div className="small muted">Team total</div><div className="strong">{euro(totalCost(coverageMap))} /mo</div></div>
                    {cov === 40 && <span className="learn-note fade">✦ 4 in 10 calls reviewed until verification is back</span>}
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-title">Evaluation {openEval ? `· ${openEval.id}` : '· open a clip above'} {openEval && <button className="btn ghost xs" style={{ marginLeft: 'auto' }} onClick={() => setOpenEval(null)}>Close</button>}</div>
                {openEval ? (
                  <Evaluation
                    key={openEval.id}
                    interaction={openEval}
                    compact
                    learnNote="Got it — I'll score that differently from now on."
                    onCorrection={(qid, aid) => {
                      const q = allQuestions.find((x) => x.id === qid);
                      const a = q.answers.find((x) => x.id === aid);
                      say(`Got it — I'll score that differently from now on. "${q.text}" → ${a.label} for calls like this one.`);
                      setState({ b6Corrected: true });
                    }}
                  />
                ) : (
                  <div className="small muted">Click <b>Open</b> on a clip to see the scoring with evidence. Correct any answer — the coach learns from it.</div>
                )}
              </div>
            </>
          ) : (
            <div className="card soft small muted">No open items for {agent.name.split(' ')[0]}. Recent calls scored {kpiHistory[selected].quality.slice(-1)[0]} on average; nothing flagged this week.</div>
          )}
        </div>
      </div>
    </div>
  );
}

// --------------------------------------------------------------- Activity
function ActivityPanel({ state }) {
  const rows = auditLog.filter((r) => {
    if (r.kind === 'autonomous' && state.autonomyGranted !== true) return false;
    if (r.kind === 'config' && !state.marcoDropped) return false;
    return true;
  });
  return (
    <div className="fade">
      <PanelHead title="Activity" ctx="everything the coach did, with a timestamp and a link" chips={<><span className={`chip ${state.autonomyGranted ? 'ai' : ''}`}>{state.autonomyGranted ? '✦ Autonomy: routine positive feedback' : 'Autonomy: none granted'}</span><span className="chip">30 drafts approved unedited</span><span className="chip green">41 clean verifications</span></>} />
      <div className="card">
        <table className="audit">
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="fade">
                <td className="ts">{r.ts}</td>
                <td><span className={`kind ${r.kind}`}>{r.kind}</span></td>
                <td>{r.action}</td>
                <td className="right"><button className="evidence-link">View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        {!state.autonomyGranted && <div className="tiny muted mt">Grant autonomy in chat and autonomous actions appear here.</div>}
      </div>
    </div>
  );
}

const PANELS = { setup: SetupPanel, knowledge: KnowledgePanel, plan: PlanPanel, actions: ActionsPanel, live: LivePanel, team: TeamPanel, activity: ActivityPanel };

/** The coach console: one consistent surface with tabs; the chat drives the active tab, the presenter can browse. */
export default function Console({ tab, setTab, onHide, state, setState, say, badges }) {
  const Panel = PANELS[tab] ?? SetupPanel;
  return (
    <section className="console">
      <div className="console-bar">
        <div className="console-tabs">
          {consoleTabs.map((t) => (
            <button key={t.id} className={`ctab ${t.id === tab ? 'active' : ''}`} onClick={() => setTab(t.id)}>
              {t.label}
              {badges?.[t.id] != null && <span className={`count ${badges[t.id].tone ?? 'ai'}`}>{badges[t.id].n}</span>}
            </button>
          ))}
        </div>
        <button className="icon-btn" onClick={onHide} title="Hide console" aria-label="Hide console"><Icons.ChevronR size={18} /></button>
      </div>
      <div className="console-body">
        <Panel key={tab} state={state} setState={setState} say={say} />
      </div>
    </section>
  );
}
