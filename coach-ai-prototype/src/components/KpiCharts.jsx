import React from 'react';
import { kpiHistory, weeks, interactions, transcripts } from '../scenario.js';
import { LineChart, Icons } from './common.jsx';

const SERIES = [
  { key: 'quality', label: 'Quality score', unit: '', color: 'var(--navy)' },
  { key: 'sentiment', label: 'Avg. sentiment', unit: '', color: 'var(--blue)' },
  { key: 'conversion', label: 'Conversion', unit: '%', color: 'var(--ai)' },
];

export function AgentKpis({ agentId, highlightFrom }) {
  const h = kpiHistory[agentId];
  return (
    <div className="grid-3">
      {SERIES.map((s) => {
        const d = h[s.key];
        const delta = d[d.length - 1] - d[0];
        return (
          <div className="card chart-card" key={s.key}>
            <div className="chart-head">
              <div>
                <div className="small muted">{s.label}</div>
                <div className="chart-value">{d[d.length - 1]}{s.unit}</div>
              </div>
              <span className={`delta ${delta >= 0 ? 'up' : 'down'}`}>{delta >= 0 ? '▲' : '▼'} {Math.abs(delta)}{s.unit} · 8 wks</span>
            </div>
            <LineChart data={d} labels={weeks} color={s.color} unit={s.unit} highlightFrom={highlightFrom} />
          </div>
        );
      })}
    </div>
  );
}

export function ClipList({ agentId, onOpen }) {
  const flagged = interactions.filter((i) => i.agentId === agentId && i.flags.length && !i.live);
  return (
    <div className="stack" style={{ gap: 8 }}>
      {flagged.map((i) => {
        const line = transcripts[i.transcriptId]?.lines.find((l) => l.flag);
        return (
          <div className="clip" key={i.id}>
            <button className="play" aria-label="Play clip"><Icons.Play size={16} /></button>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="clip-title">{i.id} · {i.flags[0]}</div>
              <div className="clip-sub">{i.date} · from {line ? `00:${String(line.t).padStart(2, '0')}` : '—'} · "{line?.text.slice(0, 70)}…"</div>
            </div>
            <span className="chip red">{i.score}</span>
            {onOpen && <button className="btn ghost xs" onClick={() => onOpen(i)}>Open</button>}
          </div>
        );
      })}
    </div>
  );
}
