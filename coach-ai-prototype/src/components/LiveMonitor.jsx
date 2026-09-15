import React, { useEffect, useState } from 'react';
import { transcripts, agentById, liveCallFor, whisperSuggestions } from '../scenario.js';
import { Icons, Gauge, Avatar, fmtDuration, useToasts, Toasts } from './common.jsx';
import AgentView from './AgentView.jsx';

/** Reveals `lines` one at a time. Returns the number of visible lines. */
export function useStream(total, intervalMs = 2000, initial = 1) {
  const [count, setCount] = useState(Math.min(initial, total));
  useEffect(() => {
    if (count >= total) return undefined;
    const id = setTimeout(() => setCount((c) => Math.min(c + 1, total)), intervalMs);
    return () => clearTimeout(id);
  }, [count, total, intervalMs]);
  return count;
}

/**
 * Supervisor live monitor for Julia's billing-dispute call.
 * Shared by A4 and B5. Includes the "View as Julia" toggle → agent view.
 */
export default function LiveMonitor({ call = liveCallFor('julia'), compact = false, initialMode = null, onCloseAgentView }) {
  const tr = transcripts[call.transcriptId];
  const agent = agentById(call.agentId);
  const first = agent.name.split(' ')[0];
  const [asAgent, setAsAgent] = useState(false);
  const [mode, setMode] = useState(initialMode); // listen | whisper | barge
  const count = useStream(tr.lines.length, 2000, Math.min(3, tr.lines.length));
  const { toasts, push, dismiss } = useToasts();
  const visible = tr.lines.slice(0, count);
  const sentiment = visible[visible.length - 1]?.sentiment ?? call.sentimentNow;
  const chips = visible.filter((l) => l.whisper).map((l) => l.whisper);
  const timer = call.startedSecondsAgo + (count - 3) * 4;
  const sentiments = tr.lines.map((l) => l.sentiment).filter((x) => x != null);
  const low = Math.min(...sentiments), lowLine = tr.lines.find((l) => l.sentiment === low);

  if (asAgent) {
    return <AgentView call={call} onBack={() => { setAsAgent(false); onCloseAgentView?.(); }} />;
  }

  const act = (m, label) => {
    setMode(m);
    push({ title: label, body: m === 'barge' ? `You are now in the conversation with ${first} and ${call.customer}.` : m === 'whisper' ? `Only ${first} can hear you.` : `Audio connected — ${first} does not know you are listening.`, tone: m === 'barge' ? 'red' : '' });
  };

  return (
    <div className="fade">
      <Toasts toasts={toasts} dismiss={dismiss} />
      <div className="row between mb">
        <div className="row" style={{ gap: 14 }}>
          <Avatar agent={agent} size={40} />
          <div>
            <div className="row" style={{ gap: 8 }}>
              <span className="strong" style={{ fontSize: 16 }}>{agent.name}</span>
              <span className={`chip ${call.needsYou ? 'red' : 'green'} live`}>Live</span>
              <span className="chip">{call.campaign}</span>
            </div>
            <div className="small muted">{call.customer} · {fmtDuration(timer)} · {call.topic} · {call.stage}</div>
          </div>
        </div>
        <div className="row">
          <button className={`btn ghost sm ${mode === 'listen' ? 'done' : ''}`} onClick={() => act('listen', `Listening to ${first}'s call`)}><Icons.Ear size={16} /> Listen</button>
          <button className={`btn ghost sm ${mode === 'whisper' ? 'done' : ''}`} onClick={() => act('whisper', `Whispering to ${first}`)}><Icons.Mic size={16} /> Whisper</button>
          <button className={`btn danger sm`} onClick={() => act('barge', 'You barged into the call')}><Icons.Phone size={16} /> Barge</button>
          <span style={{ width: 1, height: 24, background: 'var(--border)' }} />
          <button className="btn ai-soft sm" onClick={() => setAsAgent(true)}><Icons.Eye size={16} /> View as {first}</button>
        </div>
      </div>

      <div className="monitor">
        <div className="card">
          <div className="card-title">Live transcript <span className="tiny muted" style={{ fontWeight: 400 }}>streaming</span></div>
          <div className="transcript" style={compact ? { maxHeight: 300 } : undefined}>
            {visible.map((l, i) => (
              <div key={i} className={`line ${l.speaker} ${l.usesSuggestion ? 'uses' : ''}`}>
                <span className="ts">{fmtDuration(l.t)}</span>
                <div>
                  <div className="who">{l.speaker === 'agent' ? first : 'Customer'}</div>
                  <div>{l.text}</div>
                  {l.usesSuggestion && <div className="uses-note">✦ Used Whisper AI suggestion</div>}
                </div>
              </div>
            ))}
            {count < tr.lines.length && <div className="typing"><i /><i /><i /></div>}
          </div>
        </div>
        <div className="stack">
          <div className="card" style={{ display: 'grid', placeItems: 'center' }}>
            <Gauge value={sentiment} />
            <div className="tiny muted">started at {sentiments[0]} · {low < sentiments[0] ? `low ${low} at ${fmtDuration(lowLine.t)}` : 'steady'}</div>
          </div>
          <div className="card ai">
            <div className="card-title"><span className="ai-tag">Whisper AI</span> <span className="tiny muted" style={{ fontWeight: 400 }}>what {first} hears</span></div>
            <div className="stack" style={{ gap: 8 }}>
              {chips.length === 0 && <div className="tiny muted">Listening for the right moment…</div>}
              {chips.map((c, i) => (
                <div key={i} className={`whisper-chip ${c.type}`}>
                  <span>✦</span>
                  <div><span className="w-kind">{c.type === 'compliance' ? 'Compliance' : c.type === 'sentiment' ? 'Sentiment cue' : 'Suggested answer'}</span>{c.text}</div>
                </div>
              ))}
            </div>
            <div className="divider" />
            <div className="tiny muted">Suggestion library for this campaign: {whisperSuggestions.length} active</div>
          </div>
        </div>
      </div>
    </div>
  );
}
