import React, { useEffect, useMemo, useState } from 'react';

// ------------------------------------------------------------------ icons
const I = ({ d, size = 20, stroke = 1.7, children, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    {d ? <path d={d} /> : children}
  </svg>
);
export const Icons = {
  Menu: (p) => <I {...p} d="M4 7h16M4 12h16M4 17h16" />,
  Monitor: (p) => <I {...p}><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></I>,
  Inbox: (p) => <I {...p}><path d="M4 13l2-8h12l2 8v6H4z" /><path d="M4 13h5l1 2h4l1-2h5" /></I>,
  Contact: (p) => <I {...p}><rect x="4" y="3" width="16" height="18" rx="2" /><circle cx="12" cy="10" r="3" /><path d="M7 18c1-2.5 9-2.5 10 0" /></I>,
  Info: (p) => <I {...p}><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></I>,
  Search: (p) => <I {...p}><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></I>,
  Bell: (p) => <I {...p} d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15zM10 20a2 2 0 0 0 4 0" />,
  Coffee: (p) => <I {...p}><path d="M5 10h11v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z" /><path d="M16 12h2a2 2 0 0 1 0 4h-2M8 3v3M11 3v3M14 3v3" /></I>,
  Gear: (p) => <I {...p}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" /></I>,
  User: (p) => <I {...p}><circle cx="12" cy="8" r="4" /><path d="M5 21c1-4 13-4 14 0" /></I>,
  Users: (p) => <I {...p}><circle cx="9" cy="8" r="3.5" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c.5-4 11.5-4 12 0M15 19c.3-2.5 5.7-2.5 6 0" /></I>,
  Plug: (p) => <I {...p}><circle cx="12" cy="12" r="9" /><path d="M8 12l4-4 4 4-4 4z" /></I>,
  Clock: (p) => <I {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></I>,
  Hub: (p) => <I {...p}><circle cx="12" cy="12" r="2.5" /><circle cx="5" cy="6" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" /><path d="M7 7l3 3M17 7l-3 3M7 17l3-3M17 17l-3-3" /></I>,
  Chat: (p) => <I {...p}><path d="M4 5h11a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9l-4 3V7a2 2 0 0 1 2-2z" /><path d="M19 10h1a2 2 0 0 1 2 2v7l-3-2h-6" /></I>,
  Board: (p) => <I {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M7 9h10M7 13h6" /></I>,
  Form: (p) => <I {...p}><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></I>,
  Spark: (p) => <I {...p} d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" />,
  Ear: (p) => <I {...p} d="M6 9a6 6 0 0 1 12 0c0 3-2 4-2 7a3 3 0 0 1-6 0M9 9a3 3 0 0 1 6 0c0 2-2 2.5-2 4" />,
  Mic: (p) => <I {...p}><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></I>,
  Phone: (p) => <I {...p} d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  Play: (p) => <I {...p} d="M8 5v14l11-7z" />,
  Check: (p) => <I {...p} d="M5 12l5 5L20 7" />,
  X: (p) => <I {...p} d="M6 6l12 12M18 6L6 18" />,
  ChevronL: (p) => <I {...p} d="M15 6l-6 6 6 6" />,
  ChevronR: (p) => <I {...p} d="M9 6l6 6-6 6" />,
  ChevronD: (p) => <I {...p} d="M6 9l6 6 6-6" />,
  Dots: (p) => <I {...p}><circle cx="12" cy="5" r="1.2" fill="currentColor" /><circle cx="12" cy="12" r="1.2" fill="currentColor" /><circle cx="12" cy="19" r="1.2" fill="currentColor" /></I>,
  Plus: (p) => <I {...p} d="M12 5v14M5 12h14" />,
  Send: (p) => <I {...p} d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />,
  Alert: (p) => <I {...p}><path d="M12 3l10 18H2z" /><path d="M12 10v4M12 18h.01" /></I>,
  Upload: (p) => <I {...p} d="M12 16V4M6 10l6-6 6 6M4 20h16" />,
  Doc: (p) => <I {...p}><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4" /></I>,
  Eye: (p) => <I {...p}><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></I>,
  Back: (p) => <I {...p} d="M19 12H5M11 6l-6 6 6 6" />,
  Scissors: (p) => <I {...p}><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M20 4L8.1 15.9M14.5 14.5L20 20M8.1 8.1L12 12" /></I>,
  Comment: (p) => <I {...p} d="M4 5h16v11H9l-5 4z" />,
  Log: (p) => <I {...p}><path d="M4 5h16M4 12h16M4 19h10" /></I>,
  Trend: (p) => <I {...p} d="M3 17l6-6 4 4 8-8M15 7h6v6" />,
};

// --------------------------------------------------------------- helpers
export const fmtDuration = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

export function Avatar({ agent, size = 34 }) {
  return (
    <span className="agent-avatar" style={{ width: size, height: size, background: agent.color, fontSize: size * 0.36 }}>
      {agent.initials}
    </span>
  );
}
export function AgentCell({ agent, sub }) {
  return (
    <div className="agent-cell">
      <Avatar agent={agent} />
      <div>
        <div className="strong">{agent.name}</div>
        <div className="sub">{sub ?? `${agent.role} · ${agent.tenure}`}</div>
      </div>
    </div>
  );
}

export function Tooltip({ text, children }) {
  return (
    <span className="tooltip">
      {children}
      <span className="tip">{text}</span>
    </span>
  );
}

export function Toggle({ on, onChange, label }) {
  return (
    <label className="row" style={{ gap: 10, cursor: 'pointer' }}>
      <button type="button" className={`toggle ${on ? 'on' : ''}`} onClick={() => onChange(!on)} aria-pressed={on} aria-label={label} />
      {label && <span className="small strong">{label}</span>}
    </label>
  );
}

// --------------------------------------------------------------- charts
export function Sparkline({ data, width = 110, height = 28, color = 'var(--navy)', fillColor, danger }) {
  const path = useMemo(() => {
    const min = Math.min(...data), max = Math.max(...data);
    const span = max - min || 1;
    return data.map((v, i) => {
      const x = (i / (data.length - 1)) * (width - 2) + 1;
      const y = height - 2 - ((v - min) / span) * (height - 4);
      return `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');
  }, [data, width, height]);
  const stroke = danger ? 'var(--red)' : color;
  return (
    <svg className="sparkline" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {fillColor && <path d={`${path} L${width - 1},${height} L1,${height} Z`} fill={fillColor} stroke="none" />}
      <path d={path} fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LineChart({ data, labels, color = 'var(--navy)', unit = '', min: minIn, max: maxIn, highlightFrom }) {
  const W = 320, H = 150, padL = 30, padB = 22, padT = 10, padR = 8;
  const min = minIn ?? Math.floor(Math.min(...data) / 10) * 10 - 5;
  const max = maxIn ?? Math.ceil(Math.max(...data) / 10) * 10 + 5;
  const x = (i) => padL + (i / (data.length - 1)) * (W - padL - padR);
  const y = (v) => padT + (1 - (v - min) / (max - min)) * (H - padT - padB);
  const path = data.map((v, i) => `${i ? 'L' : 'M'}${x(i)},${y(v)}`).join(' ');
  const ticks = [min, (min + max) / 2, max];
  return (
    <svg className="chart" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
      {ticks.map((t) => (
        <g key={t}>
          <line x1={padL} x2={W - padR} y1={y(t)} y2={y(t)} stroke="#eef0f4" />
          <text x={padL - 6} y={y(t) + 3.5} fontSize="9" fill="#9aa3b2" textAnchor="end">{Math.round(t)}{unit}</text>
        </g>
      ))}
      {highlightFrom != null && (
        <rect x={x(highlightFrom) - 4} y={padT} width={x(data.length - 1) - x(highlightFrom) + 8} height={H - padT - padB} fill="rgba(229,72,77,0.06)" rx="4" />
      )}
      <path d={path} fill="none" stroke={color} strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
      {data.map((v, i) => <circle key={i} cx={x(i)} cy={y(v)} r="2.6" fill="#fff" stroke={color} strokeWidth="2" />)}
      {labels.map((l, i) => <text key={l} x={x(i)} y={H - 6} fontSize="9" fill="#9aa3b2" textAnchor="middle">{l}</text>)}
    </svg>
  );
}

export function Gauge({ value, label = 'Sentiment', size = 150 }) {
  const r = size / 2 - 12, cx = size / 2, cy = size / 2 + 8;
  const angle = Math.PI * (1 - value / 100);
  const px = cx + r * Math.cos(angle), py = cy - r * Math.sin(angle);
  const color = value < 40 ? 'var(--red)' : value < 60 ? 'var(--amber)' : 'var(--green)';
  const arc = (from, to, stroke) => {
    const a1 = Math.PI * (1 - from / 100), a2 = Math.PI * (1 - to / 100);
    return <path d={`M${cx + r * Math.cos(a1)},${cy - r * Math.sin(a1)} A${r},${r} 0 0 1 ${cx + r * Math.cos(a2)},${cy - r * Math.sin(a2)}`} fill="none" stroke={stroke} strokeWidth="10" strokeLinecap="round" />;
  };
  return (
    <div className="gauge-wrap">
      <svg width={size} height={size / 2 + 24} viewBox={`0 0 ${size} ${size / 2 + 24}`}>
        {arc(0, 100, '#eef0f4')}
        {arc(0, Math.max(value, 1), color)}
        <circle cx={px} cy={py} r="6" fill="#fff" stroke={color} strokeWidth="3" />
        <text x={cx} y={cy - 4} textAnchor="middle" fontSize="26" fontWeight="600" fill="var(--text)">{Math.round(value)}</text>
      </svg>
      <div className="tiny muted">{label}</div>
    </div>
  );
}

export function ScoreRing({ score, size = 84 }) {
  const color = score == null ? 'var(--faint)' : score < 60 ? 'var(--red)' : score < 80 ? 'var(--amber)' : 'var(--green)';
  const pct = score ?? 0;
  return (
    <div className="score-ring" style={{ width: size, height: size, background: `conic-gradient(${color} ${pct}%, #eef0f4 0)` }}>
      <div style={{ width: size - 14, height: size - 14, borderRadius: '50%', background: '#fff', display: 'grid', placeItems: 'center' }}>
        {score ?? '—'}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------- modal
export function Modal({ title, onClose, children, actions, width }) {
  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose?.(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose]);
  return (
    <div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose?.(); }}>
      <div className="modal" style={width ? { width } : undefined}>
        {title && <h2>{title}</h2>}
        {children}
        {actions && <div className="modal-actions">{actions}</div>}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------- toasts
export function useToasts() {
  const [toasts, setToasts] = useState([]);
  const push = (t) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((ts) => [...ts, { id, ...t }]);
    if (!t.sticky) setTimeout(() => setToasts((ts) => ts.filter((x) => x.id !== id)), t.ttl ?? 3500);
    return id;
  };
  const dismiss = (id) => setToasts((ts) => ts.filter((x) => x.id !== id));
  return { toasts, push, dismiss };
}
export function Toasts({ toasts, dismiss }) {
  if (!toasts.length) return null;
  return (
    <div className="toast-wrap">
      {toasts.map((t) => (
        <div key={t.id} className={`toast ${t.tone ?? ''} ${t.onClick ? 'clickable' : ''}`} onClick={() => { t.onClick?.(); if (t.onClick) dismiss(t.id); }}>
          {t.icon}
          <div style={{ flex: 1 }}>
            <div className="t-title">{t.title}</div>
            {t.body && <div className="t-body">{t.body}</div>}
          </div>
          <button className="icon-btn" onClick={(e) => { e.stopPropagation(); dismiss(t.id); }} aria-label="Dismiss"><Icons.X size={16} /></button>
        </div>
      ))}
    </div>
  );
}
