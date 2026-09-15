import React, { useState } from 'react';
import {
  qualityModels, mainModel, team, agentById, liveCalls, interactions, flaggedInteractions,
  analyzedPerMonth, costFor, totalCost, defaultCoverage, costFormula, euro, copy,
} from '../scenario.js';
import { Icons, AgentCell, Avatar, Sparkline, Tooltip, Toggle, fmtDuration, useToasts, Toasts } from '../components/common.jsx';
import LiveMonitor from '../components/LiveMonitor.jsx';
import Evaluation from '../components/Evaluation.jsx';
import { AgentKpis, ClipList } from '../components/KpiCharts.jsx';

// ------------------------------------------------------------------ chrome
function Tabs({ active, tabs }) {
  return (
    <div className="tabs">
      {tabs.map(([label, count, ai]) => (
        <button key={label} className={`tab ${label === active ? 'active' : ''}`}>
          {label} {count != null && <span className={`count ${ai ? 'ai' : ''}`}>{count}</span>}
        </button>
      ))}
      <button className="tab" style={{ flex: '0 0 44px' }}><Icons.ChevronR size={16} /></button>
    </div>
  );
}
const ADMIN_TABS = [['Campaigns', 7], ['Dispositions', 10], ['Quality models', 3], ['Holidays'], ['Templates', 3], ['Status', 5]];
const COACH_TABS = [['Live', 4], ['Coverage', 6], ['Review queue', 6, true], ['Agents', 6], ['Settings']];

function Screen({ tabs, active, children }) {
  return (
    <div className="sheet with-story">
      <Tabs active={active} tabs={tabs} />
      <div className="sheet-body">{children}</div>
    </div>
  );
}

// ------------------------------------------------------------------ A1
export function A1QualityModels() {
  const [open, setOpen] = useState(null);
  const [expanded, setExpanded] = useState({ greeting: true, compliance: true });
  if (open) {
    const m = open;
    return (
      <Screen tabs={ADMIN_TABS} active="Quality models">
        <div className="breadcrumb"><button onClick={() => setOpen(null)}>Quality models</button> <Icons.ChevronR size={14} /> <span>{m.name}</span></div>
        <div className="row between mb">
          <div>
            <div className="section-title">{m.name}</div>
            <div className="muted">{m.description}</div>
          </div>
          <div className="pill-stat"><span className="big">{m.totalPoints} / 100</span><span className="label">Total Points</span></div>
        </div>
        <div className="stack">
          {m.categories.map((c) => {
            const pts = c.questions.reduce((s, q) => s + Math.max(...q.answers.map((a) => a.score)), 0);
            const isOpen = expanded[c.id];
            return (
              <div className="card soft" key={c.id} style={{ padding: '14px 18px' }}>
                <div className="row between" style={{ cursor: 'pointer' }} onClick={() => setExpanded((e) => ({ ...e, [c.id]: !isOpen }))}>
                  <div className="row" style={{ gap: 12 }}>
                    <Icons.Dots size={16} style={{ color: 'var(--faint)' }} />
                    <span style={{ transform: isOpen ? 'rotate(0)' : 'rotate(-90deg)', display: 'inline-flex', transition: 'transform 0.15s' }}><Icons.ChevronD size={16} /></span>
                    <div className="field" style={{ padding: '6px 14px', minWidth: 420 }}>
                      <label>Category name</label>
                      <div style={{ fontSize: 15 }}>{c.name}</div>
                    </div>
                    <span className="info-i">i</span>
                  </div>
                  <div className="row" style={{ gap: 14 }}>
                    <span className="strong">{c.questions.length} Question{c.questions.length > 1 ? 's' : ''} - {pts} Points</span>
                    <Icons.Dots size={18} />
                  </div>
                </div>
                {isOpen && c.questions.map((q) => (
                  <div key={q.id} className="fade" style={{ margin: '14px 0 4px 58px', padding: '14px 16px', background: '#fff', borderRadius: 10, border: '1px solid var(--border)' }}>
                    <div className="strong" style={{ marginBottom: 10 }}>{q.text}</div>
                    <div className="row wrap">
                      {q.answers.map((a) => (
                        <span key={a.id} className={`chip ${a.score === 0 ? 'red' : a.score === Math.max(...q.answers.map((x) => x.score)) ? 'green' : 'amber'}`}>{a.label} · {a.score} pts</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
        <div className="row" style={{ justifyContent: 'flex-end', marginTop: 24 }}>
          <button className="btn primary upper"><Icons.Plus size={16} /> Add category</button>
        </div>
      </Screen>
    );
  }
  return (
    <Screen tabs={ADMIN_TABS} active="Quality models">
      <div className="toolbar">
        <div className="search"><Icons.Search size={18} /><input placeholder="Search" readOnly /></div>
        <div style={{ flex: 1 }} />
        <button className="btn primary upper"><Icons.Plus size={16} /> New</button>
      </div>
      <table className="table">
        <thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Questions</th><th className="right">Actions</th></tr></thead>
        <tbody>
          {qualityModels.map((m) => (
            <tr key={m.id} className={`clickable ${m.id === mainModel.id ? '' : ''}`} onClick={() => m.categories.length && setOpen(m)}>
              <td className="strong">{m.name} {m.id === mainModel.id && <span className="chip ai" style={{ marginLeft: 8 }}>used by Coach AI</span>}</td>
              <td className="muted">{m.description}</td>
              <td className="muted">{m.type}</td>
              <td className="muted">{m.categories.reduce((s, c) => s + c.questions.length, 0)}</td>
              <td className="right"><Icons.Dots size={18} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Screen>
  );
}

// ------------------------------------------------------------------ A2
export function A2LiveSupervision() {
  const { toasts, push, dismiss } = useToasts();
  const act = (a, what) => push({ title: `${what} — ${a.name}`, body: what === 'Barge' ? 'You joined the call.' : what === 'Whisper' ? 'Only the agent hears you.' : 'Audio connected.', tone: what === 'Barge' ? 'red' : '' });
  return (
    <Screen tabs={COACH_TABS} active="Live">
      <Toasts toasts={toasts} dismiss={dismiss} />
      <div className="row between mb">
        <div>
          <div className="section-title">Live calls</div>
          <div className="muted">{liveCalls.filter((c) => c.status === 'On call').length} agents on calls · 1 in wrap-up · 1 available</div>
        </div>
        <span className="chip amber">Random spot-check: 3 of 214 calls reviewed this week</span>
      </div>
      <table className="table">
        <thead><tr><th>Agent</th><th>Status</th><th>Campaign</th><th>Customer</th><th>Duration</th><th className="right">Supervision</th></tr></thead>
        <tbody>
          {liveCalls.map((c) => {
            const a = agentById(c.agentId);
            const on = c.status === 'On call';
            return (
              <tr key={c.agentId}>
                <td><AgentCell agent={a} /></td>
                <td><span className={`chip ${on ? 'green' : c.status === 'Wrap-up' ? 'amber' : ''}`}>{c.status}</span></td>
                <td className="muted">{c.campaign}</td>
                <td>{c.customer}</td>
                <td className="muted"><LiveTimer base={c.startedSecondsAgo} running={on} /></td>
                <td className="right">
                  <div className="row" style={{ justifyContent: 'flex-end', gap: 6 }}>
                    <button className="btn ghost xs" disabled={!on} onClick={() => act(a, 'Listen')}><Icons.Ear size={14} /> Listen</button>
                    <button className="btn ghost xs" disabled={!on} onClick={() => act(a, 'Whisper')}><Icons.Mic size={14} /> Whisper</button>
                    <button className="btn danger xs" disabled={!on} onClick={() => act(a, 'Barge')}><Icons.Phone size={14} /> Barge</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Screen>
  );
}
function LiveTimer({ base, running }) {
  const [t, setT] = useState(base);
  React.useEffect(() => {
    if (!running) return undefined;
    const id = setInterval(() => setT((x) => x + 1), 1000);
    return () => clearInterval(id);
  }, [running]);
  return <span>{running ? fmtDuration(t) : '—'}</span>;
}

// ------------------------------------------------------------------ A3
export function CoverageTable({ coverage, setCoverage, highlightIds = [], readOnly = false }) {
  return (
    <table className="table">
      <thead><tr><th>Agent</th><th>Interactions / month</th><th style={{ width: 280 }}>Coach AI coverage</th><th className="right">Analyzed / month</th><th className="right">Est. cost</th></tr></thead>
      <tbody>
        {team.map((a) => {
          const c = coverage[a.id];
          return (
            <tr key={a.id} className={highlightIds.includes(a.id) ? 'selected' : ''}>
              <td><AgentCell agent={a} /></td>
              <td className="muted">{a.interactionsPerMonth.toLocaleString()}</td>
              <td>
                <div className="row">
                  <input type="range" min="0" max="100" step="5" value={c} disabled={readOnly} style={{ '--pct': `${c}%` }} onChange={(e) => setCoverage({ ...coverage, [a.id]: Number(e.target.value) })} />
                  <span className="strong" style={{ width: 44, textAlign: 'right' }}>{c}%</span>
                </div>
              </td>
              <td className="right muted">{analyzedPerMonth(a, c).toLocaleString()}</td>
              <td className="right strong">{euro(costFor(a, c))}<span className="tiny muted"> /mo</span></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export function CostPanel({ coverage, onConfirm, confirmed, title = 'Estimated consumption' }) {
  const total = totalCost(coverage);
  const analyzed = team.reduce((s, a) => s + analyzedPerMonth(a, coverage[a.id]), 0);
  const all = team.reduce((s, a) => s + a.interactionsPerMonth, 0);
  return (
    <div className="card cost-panel">
      <div className="card-title">{title} <Tooltip text={costFormula}><span className="info-i">i</span></Tooltip></div>
      <div className="cost-line"><span className="muted">Team interactions / month</span><span>{all.toLocaleString()}</span></div>
      <div className="cost-line"><span className="muted">Analyzed by Coach AI</span><span>{analyzed.toLocaleString()} <span className="tiny muted">({Math.round((analyzed / all) * 100)}%)</span></span></div>
      <div className="cost-line"><span className="muted">Price per analyzed interaction</span><span>€0.05</span></div>
      <div className="cost-total"><span>Total</span><span>{euro(total)}<span className="small muted"> /mo</span></span></div>
      {onConfirm && (
        <button className={`btn ${confirmed ? 'done' : 'primary'} mt`} style={{ width: '100%' }} onClick={onConfirm}>
          {confirmed ? <><Icons.Check size={16} /> Confirmed — {euro(total)} /mo</> : 'Confirm'}
        </button>
      )}
    </div>
  );
}
export function A3Coverage() {
  const [coverage, setCoverage] = useState(defaultCoverage);
  const [confirmed, setConfirmed] = useState(false);
  return (
    <Screen tabs={COACH_TABS} active="Coverage">
      <div className="row between mb">
        <div>
          <div className="section-title">Coach AI coverage</div>
          <div className="muted">Share of each agent's interactions analyzed against <b>Outbound Sales v2</b>. Move a slider — the cost updates before you confirm.</div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20, alignItems: 'start' }}>
        <div className="card" style={{ padding: '6px 12px' }}>
          <CoverageTable coverage={coverage} setCoverage={(c) => { setCoverage(c); setConfirmed(false); }} highlightIds={['marco', 'julia']} />
        </div>
        <CostPanel coverage={coverage} confirmed={confirmed} onConfirm={() => setConfirmed(true)} />
      </div>
    </Screen>
  );
}

// ------------------------------------------------------------------ A4
export function A4WhisperBarge() {
  const [whisperOn, setWhisperOn] = useState({});
  const [phase, setPhase] = useState('setup'); // setup | alerted | monitor
  const { toasts, push, dismiss } = useToasts();
  const julia = agentById('julia');
  const live = interactions.find((i) => i.id === 'INT-4901');

  const enable = (id, v) => {
    setWhisperOn((w) => ({ ...w, [id]: v }));
    if (id === 'julia' && v && phase === 'setup') {
      setTimeout(() => {
        setPhase('alerted');
        push({ title: copy.bargeToast.title, body: copy.bargeToast.body, tone: 'red', sticky: true, icon: <Icons.Alert size={20} style={{ color: 'var(--red)' }} />, onClick: () => setPhase('monitor') });
      }, 1800);
    }
  };

  if (phase === 'monitor') {
    return (
      <Screen tabs={COACH_TABS} active="Live">
        <div className="breadcrumb"><button onClick={() => setPhase('alerted')}>Live</button> <Icons.ChevronR size={14} /> <span>Live monitor · {live.id}</span></div>
        <LiveMonitor />
      </Screen>
    );
  }

  return (
    <Screen tabs={COACH_TABS} active="Live">
      <Toasts toasts={toasts} dismiss={dismiss} />
      <div className="row between mb">
        <div>
          <div className="section-title">Whisper AI &amp; Barge AI</div>
          <div className="muted">Whisper AI coaches the agent in real time. Barge AI watches sentiment and calls you in when a call needs a human.</div>
        </div>
      </div>
      <div className="grid-2" style={{ alignItems: 'start' }}>
        <div className="card">
          <div className="card-title">Per-agent assistance</div>
          <table className="table">
            <thead><tr><th>Agent</th><th>Whisper AI</th><th>Barge AI</th></tr></thead>
            <tbody>
              {team.map((a) => (
                <tr key={a.id} className={a.id === 'julia' ? 'selected' : ''}>
                  <td><AgentCell agent={a} /></td>
                  <td><Toggle on={!!whisperOn[a.id]} onChange={(v) => enable(a.id, v)} label={whisperOn[a.id] ? 'On — every call' : 'Off'} /></td>
                  <td><span className={`chip ${a.id === 'julia' && whisperOn.julia ? 'ai' : ''}`}>{a.id === 'julia' && whisperOn.julia ? 'Watching sentiment' : 'Default threshold'}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="stack">
          <div className={`card ${phase === 'alerted' ? 'ai' : ''}`} style={{ borderColor: phase === 'alerted' ? 'var(--red)' : undefined }}>
            <div className="row between">
              <div className="row" style={{ gap: 12 }}>
                <Avatar agent={julia} size={40} />
                <div>
                  <div className="row" style={{ gap: 8 }}><span className="strong">{julia.name}</span>{whisperOn.julia && <span className="chip red live">Live</span>}</div>
                  <div className="small muted">{live.campaign} · Mr. Conti</div>
                </div>
              </div>
              {phase === 'alerted' ? <Sparkline data={live.sentiment.slice(0, 4)} width={140} height={40} danger fillColor="rgba(229,72,77,0.08)" /> : <Sparkline data={[48, 50, 49, 51, 50]} width={140} height={40} color="var(--faint)" />}
            </div>
            <div className="divider" />
            {phase === 'alerted' ? (
              <div className="stack" style={{ gap: 8 }}>
                <div className="row between"><span className="small muted">Sentiment</span><span className="chip red">28 · dropping</span></div>
                <div className="row between"><span className="small muted">Topic detected</span><span className="chip">Billing dispute</span></div>
                <div className="row between"><span className="small muted">Whisper AI</span><span className="chip ai">1 suggestion delivered</span></div>
                <button className="btn danger mt" onClick={() => setPhase('monitor')}><Icons.Alert size={16} /> Open live monitor</button>
              </div>
            ) : (
              <div className="small muted">{whisperOn.julia ? 'Whisper AI active — listening for the moment to help…' : 'Turn Whisper AI on for Julia to see it in action.'}</div>
            )}
          </div>
          {!whisperOn.julia && (
            <div className="card soft small muted">Today the supervisor would pick one of the six calls at random. Whisper AI + Barge AI replace the guesswork.</div>
          )}
        </div>
      </div>
    </Screen>
  );
}

// ------------------------------------------------------------------ A5
export function A5ReviewQueue() {
  const [open, setOpen] = useState(null);
  if (open) {
    return (
      <Screen tabs={COACH_TABS} active="Review queue">
        <Evaluation interaction={open} onBack={() => setOpen(null)} />
      </Screen>
    );
  }
  return (
    <Screen tabs={COACH_TABS} active="Review queue">
      <div className="row between mb">
        <div>
          <div className="section-title">Review queue</div>
          <div className="muted">Interactions Coach AI flagged against Outbound Sales v2 — worst first. Every answer comes with evidence.</div>
        </div>
        <span className="chip ai">✦ 214 analyzed Friday · {flaggedInteractions.length} flagged</span>
      </div>
      <table className="table">
        <thead><tr><th>Interaction</th><th>Agent</th><th>Flag</th><th>Campaign</th><th>Sentiment</th><th className="right">Score</th><th /></tr></thead>
        <tbody>
          {flaggedInteractions.map((i) => {
            const a = agentById(i.agentId);
            return (
              <tr key={i.id} className="clickable" onClick={() => i.transcriptId && setOpen(i)}>
                <td><div className="strong">{i.id}</div><div className="tiny muted">{i.date} · {fmtDuration(i.duration)}</div></td>
                <td><AgentCell agent={a} sub={a.role} /></td>
                <td>{i.flags.map((f) => <span key={f} className={`chip ${f.includes('Identity') ? 'red' : 'amber'}`}>{f}</span>)}</td>
                <td className="muted">{i.campaign}</td>
                <td><Sparkline data={i.sentiment} color="var(--faint)" /></td>
                <td className="right"><span className={`chip ${i.score < 60 ? 'red' : 'amber'}`}>{i.score}</span></td>
                <td className="right">{i.transcriptId ? <button className="btn ghost xs">Review</button> : <span className="tiny muted">no transcript in demo</span>}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Screen>
  );
}

// ------------------------------------------------------------------ A6
export function A6AgentHistory() {
  const marco = agentById('marco');
  const [coverage, setCoverage] = useState(defaultCoverage);
  const [open, setOpen] = useState(null);
  const { toasts, push, dismiss } = useToasts();
  const raised = coverage.marco >= 40;
  if (open) {
    return (
      <Screen tabs={COACH_TABS} active="Agents">
        <Evaluation interaction={open} onBack={() => setOpen(null)} />
      </Screen>
    );
  }
  return (
    <Screen tabs={COACH_TABS} active="Agents">
      <Toasts toasts={toasts} dismiss={dismiss} />
      <div className="row between mb">
        <div className="row" style={{ gap: 14 }}>
          <Avatar agent={marco} size={48} />
          <div>
            <div className="section-title" style={{ marginBottom: 0 }}>{marco.name}</div>
            <div className="muted">{marco.role} · {marco.tenure} · Outbound Sales – Fiber Q3</div>
          </div>
        </div>
        <div className="row">
          <span className={`chip ${raised ? 'ai' : ''}`}>Coverage {coverage.marco}%</span>
          <button className="btn primary sm" onClick={() => push({ title: '1:1 notes saved', body: 'Two clips reviewed together · coverage decision recorded.', tone: 'green' })}><Icons.Check size={15} /> Save 1:1 notes</button>
        </div>
      </div>
      <AgentKpis agentId="marco" highlightFrom={5} />
      <div className="grid-2 mt" style={{ alignItems: 'start' }}>
        <div className="card">
          <div className="card-title">Flagged clips <span className="chip red">2</span></div>
          <ClipList agentId="marco" onOpen={setOpen} />
          <div className="tiny muted mt">Both from Friday. Same pattern: pitch first, verification never.</div>
        </div>
        <div className="card">
          <div className="card-title">Coach AI coverage for Marco</div>
          <div className="row">
            <input type="range" min="0" max="100" step="5" value={coverage.marco} style={{ '--pct': `${coverage.marco}%` }} onChange={(e) => setCoverage({ ...coverage, marco: Number(e.target.value) })} />
            <span className="strong" style={{ width: 48, textAlign: 'right', fontSize: 18 }}>{coverage.marco}%</span>
          </div>
          <div className="row" style={{ gap: 8, marginTop: 10 }}>
            {[10, 40, 100].map((v) => <button key={v} className={`btn xs ${coverage.marco === v ? 'ai' : 'ghost'}`} onClick={() => setCoverage({ ...coverage, marco: v })}>{v}%</button>)}
          </div>
          <div className="divider" />
          <div className="cost-line"><span className="muted">Analyzed / month</span><span>{analyzedPerMonth(marco, coverage.marco).toLocaleString()} of {marco.interactionsPerMonth.toLocaleString()}</span></div>
          <div className="cost-line"><span className="muted">Marco</span><span className="strong">{euro(costFor(marco, coverage.marco))} /mo <span className="tiny muted">(was {euro(costFor(marco, 10))})</span></span></div>
          <div className="cost-total"><span>Team total</span><span>{euro(totalCost(coverage))} /mo</span></div>
          {raised && <div className="learn-note mt fade">✦ From Monday, Coach AI reviews 4 in 10 of Marco's calls. Next week this screen shows whether verification is back.</div>}
        </div>
      </div>
    </Screen>
  );
}

export const optionAScreens = { A1: A1QualityModels, A2: A2LiveSupervision, A3: A3Coverage, A4: A4WhisperBarge, A5: A5ReviewQueue, A6: A6AgentHistory };
