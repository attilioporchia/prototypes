import React, { useState } from 'react';
import { copy } from '../scenario.js';
import { Icons, Modal } from './common.jsx';

export default function Entry({ onPlay }) {
  const [showFeatures, setShowFeatures] = useState(false);
  return (
    <div className="main-inner">
      <div className="sheet">
        <div className="entry">
          <h1><span className="coach-orb" style={{ width: 44, height: 44, fontSize: 22 }}>✦</span>{copy.appTitle}</h1>
          <p className="subtitle">{copy.subtitle}</p>

          <div className="tiles">
            <div className="tile a">
              <div className="tile-label">{copy.optionA.label}</div>
              <h2>{copy.optionA.title}</h2>
              <div className="preview">
                <div className="mock-rows">
                  {[70, 45, 60, 35].map((w, i) => (
                    <div className="mock-row" key={i}><i style={{ width: 8, height: 8, borderRadius: 4, background: i === 1 ? 'var(--red)' : '#dfe3ea' }} /><i style={{ width: `${w}%` }} /><i style={{ width: 24, marginLeft: 'auto', background: i === 1 ? 'var(--ai-border)' : '#dfe3ea' }} /></div>
                  ))}
                </div>
              </div>
              <p>{copy.optionA.blurb}</p>
              <button className="btn primary wide" onClick={() => onPlay('A')}><Icons.Play size={16} /> {copy.optionA.cta}</button>
            </div>
            <div className="tile b">
              <div className="tile-label">{copy.optionB.label}</div>
              <h2>{copy.optionB.title}</h2>
              <div className="preview">
                <div className="mock-chat">
                  <div className="mock-bubble coach">I reviewed Friday's 214 interactions. Three things need you…</div>
                  <div className="mock-bubble me">I'll handle Marco in person.</div>
                  <div className="mock-bubble coach">Got it — clips are in his file for the 1:1.</div>
                </div>
              </div>
              <p>{copy.optionB.blurb}</p>
              <button className="btn ai wide" onClick={() => onPlay('B')}><Icons.Play size={16} /> {copy.optionB.cta}</button>
            </div>
          </div>

          <div className="entry-footer">
            <button className="link-btn" onClick={() => setShowFeatures(true)}>{copy.featuresLink}</button>
          </div>
        </div>
      </div>

      {showFeatures && (
        <Modal title={copy.featuresLink} onClose={() => setShowFeatures(false)} actions={<button className="btn primary" onClick={() => setShowFeatures(false)}>Close</button>}>
          <ul className="feature-list">
            {copy.features.map((f) => (
              <li key={f.name}><b>{f.name}</b><span>— {f.text}</span></li>
            ))}
          </ul>
        </Modal>
      )}
    </div>
  );
}
