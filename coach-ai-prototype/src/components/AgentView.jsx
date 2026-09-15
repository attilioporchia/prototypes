import React, { useEffect, useState } from 'react';
import { transcripts, agentById, liveCallFor } from '../scenario.js';
import { Icons, fmtDuration } from './common.jsx';
import { useStream } from './LiveMonitor.jsx';

/** Julia's softphone with the Coach side panel — reachable from A4 and B5. */
export default function AgentView({ call = liveCallFor('julia'), onBack }) {
  const tr = transcripts[call.transcriptId];
  const julia = agentById(call.agentId);
  const info = call.customerInfo;
  const count = useStream(tr.lines.length, 2000, 1);
  const [elapsed, setElapsed] = useState(call.startedSecondsAgo);
  useEffect(() => {
    const id = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const visible = tr.lines.slice(0, count);
  const suggestions = visible.filter((l) => l.whisper).map((l, i) => ({ ...l.whisper, id: i }));
  const usedIds = new Set(visible.filter((l) => l.usesSuggestion).map(() => 0));
  const sentiment = visible[visible.length - 1]?.sentiment ?? 40;

  return (
    <div className="fade">
      <div className="row between mb">
        <div className="row" style={{ gap: 10 }}>
          <span className="chip ai">Agent view</span>
          <span className="strong">You are seeing what {julia.name} sees</span>
        </div>
        <button className="btn primary sm" onClick={onBack}><Icons.Back size={16} /> Back to supervisor</button>
      </div>

      <div className="agentview">
        <div className="softphone">
          <div className="row between">
            <span className="chip" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', borderColor: 'transparent' }}>{call.campaign}</span>
            <span className="chip red live" style={{ background: 'rgba(229,72,77,0.25)', color: '#fff' }}>On call</span>
          </div>
          <div>
            <div className="cust">{call.customer}</div>
            <div className="small" style={{ opacity: 0.7 }}>{info.phone}</div>
          </div>
          <div className="timer">{fmtDuration(elapsed)}</div>
          <div className="kv">
            <span>Account</span><span>{info.account}</span>
            <span>Plan</span><span>{info.plan}</span>
            <span>Since</span><span>{info.since}</span>
            <span>Open tickets</span><span>{info.tickets}</span>
            <span>Last contact</span><span>{info.lastContact}</span>
          </div>
          <div className="call-btns">
            <button className="call-btn">Hold</button>
            <button className="call-btn">Transfer</button>
            <button className="call-btn end">End</button>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Live transcript</div>
          <div className="transcript" style={{ maxHeight: 480 }}>
            {visible.map((l, i) => (
              <div key={i} className={`line ${l.speaker} ${l.usesSuggestion ? 'uses' : ''}`}>
                <span className="ts">{fmtDuration(l.t)}</span>
                <div>
                  <div className="who">{l.speaker === 'agent' ? 'You' : call.customer}</div>
                  <div>{l.text}</div>
                  {l.usesSuggestion && <div className="uses-note">✦ Nice — that's the suggestion in your own words.</div>}
                </div>
              </div>
            ))}
            {count < tr.lines.length && <div className="typing"><i /><i /><i /></div>}
          </div>
        </div>

        <div className="coach-panel">
          <div className="cp-head"><span className="coach-orb">✦</span> Coach</div>
          <div className="cp-sub">I'm listening with you. Suggestions show up when they might help — use them, or don't.</div>
          <div className="divider" style={{ margin: '4px 0' }} />
          {suggestions.length === 0 && <div className="tiny muted">Nothing yet — you're doing fine.</div>}
          {suggestions.map((s, i) => (
            <div key={i} className={`whisper-chip ${s.type}`}>
              <span>✦</span>
              <div>
                <span className="w-kind">{s.type === 'compliance' ? 'Reminder' : s.type === 'sentiment' ? 'How it\'s going' : 'You could say'}</span>
                {s.text}
                {s.type === 'suggestion' && i === 0 && usedIds.size > 0 && <div className="tiny" style={{ marginTop: 4, fontWeight: 700 }}>✓ Used</div>}
              </div>
            </div>
          ))}
          <div style={{ marginTop: 'auto' }}>
            <div className="tiny muted mb" style={{ marginBottom: 6 }}>Customer mood</div>
            <div style={{ height: 8, borderRadius: 999, background: '#eef0f4', overflow: 'hidden' }}>
              <div style={{ width: `${sentiment}%`, height: '100%', background: sentiment < 40 ? 'var(--red)' : sentiment < 60 ? 'var(--amber)' : 'var(--green)', transition: 'width 0.6s, background 0.6s' }} />
            </div>
            <div className="tiny muted" style={{ marginTop: 6 }}>{sentiment < 40 ? 'Tense — slow down, acknowledge first.' : sentiment < 60 ? 'Warming up. Keep it concrete.' : 'Recovered. Good moment to confirm next steps.'}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
