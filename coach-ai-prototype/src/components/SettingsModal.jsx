import React, { useState } from 'react';
import { Modal } from './common.jsx';
import { MODEL } from '../lib/claude.js';

export default function SettingsModal({ apiKey, onSave, onClose }) {
  const [value, setValue] = useState(apiKey || '');
  const hosted = typeof window !== 'undefined' && !!window.claude?.use;
  if (hosted) {
    return (
      <Modal title="Settings" onClose={onClose} width={520} actions={<button className="btn primary" onClick={onClose}>Close</button>}>
        <p className="small muted" style={{ textAlign: 'center', lineHeight: 1.6 }}>
          This hosted version routes the coach chat through Claude on your own account — no API key needed. The first free-typed question asks for your permission once.
        </p>
      </Modal>
    );
  }
  return (
    <Modal
      title="Settings"
      onClose={onClose}
      width={560}
      actions={
        <>
          <button className="btn secondary" onClick={onClose}>Cancel</button>
          <button className="btn primary" onClick={() => { onSave(value.trim()); onClose(); }}>Save</button>
        </>
      }
    >
      <div className="stack">
        <div className="field">
          <label>Anthropic API key (Option B live chat)</label>
          <input type="password" value={value} onChange={(e) => setValue(e.target.value)} placeholder="sk-ant-…" autoComplete="off" spellCheck={false} />
        </div>
        <p className="small muted">
          Kept in this browser tab's session storage only. Nothing is written to disk or sent anywhere except the Claude API. Model: <code>{MODEL}</code>. Without a key the coach falls back to scripted answers.
        </p>
        {apiKey && <button className="btn ghost sm" style={{ alignSelf: 'flex-start' }} onClick={() => setValue('')}>Clear key</button>}
      </div>
    </Modal>
  );
}
