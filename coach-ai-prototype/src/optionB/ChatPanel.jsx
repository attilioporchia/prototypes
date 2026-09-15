import React, { useEffect, useRef, useState } from 'react';
import { Icons } from '../components/common.jsx';
import { copy } from '../scenario.js';

export default function ChatPanel({ messages, typing, offline, liveReady, onSend, onQuickReply, consoleOpen, onToggleConsole }) {
  const [text, setText] = useState('');
  const logRef = useRef(null);
  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [messages.length, typing]);

  const submit = (e) => {
    e.preventDefault();
    const t = text.trim();
    if (!t) return;
    onSend(t);
    setText('');
    e.currentTarget.querySelector('input')?.blur(); // give ← → back to the presenter
  };

  return (
    <section className="chat">
      <div className="chat-head">
        <span className="coach-orb">✦</span>
        <div>
          <div className="name">Coach AI</div>
          <div className="status">online</div>
        </div>
        {offline ? <span className="offline-badge">{copy.offlineBadge}</span> : liveReady ? <span className="live-badge">live</span> : <span style={{ marginLeft: 'auto' }} />}
        <button className="btn ghost xs" onClick={onToggleConsole} title={consoleOpen ? 'Hide console' : 'Show console'} style={{ marginLeft: 10 }}>
          {consoleOpen ? 'Hide console' : 'Show console'}
        </button>
      </div>
      <div className="chat-log" ref={logRef}>
        {messages.map((m) => (
          <div key={m.id} className={`msg ${m.role}`}>
            {m.role === 'coach' && <span className="coach-orb" style={{ width: 26, height: 26, fontSize: 12, marginTop: 4 }}>✦</span>}
            <div>
              <div className="bubble">{m.text}</div>
              {m.quickReplies && (
                <div className="quick">
                  {m.quickReplies.map((q) => (
                    <button key={q.label} className={`btn ${m.chosen === q.label ? 'chosen' : ''}`} disabled={!!m.chosen} onClick={() => onQuickReply(m, q)}>{q.label}</button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        {typing && <div className="msg coach"><span className="coach-orb" style={{ width: 26, height: 26, fontSize: 12 }}>✦</span><div className="bubble typing" style={{ padding: '10px 14px' }}><i /><i /><i /></div></div>}
      </div>
      <form className="chat-input" onSubmit={submit}>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Ask the coach anything about the team…" aria-label="Message the coach" />
        <button type="submit" className="btn ai" aria-label="Send"><Icons.Send size={18} /></button>
      </form>
    </section>
  );
}
