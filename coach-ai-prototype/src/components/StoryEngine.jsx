import React, { useEffect } from 'react';
import { Icons } from './common.jsx';

/**
 * Presenter chrome: narration strip + bottom bar with Back / dots / Next / Exit.
 * Beats never auto-advance. Keyboard ← → navigate (ignored while typing).
 */
export default function StoryEngine({ option, beats, index, setIndex, onExit, children }) {
  const beat = beats[index];
  const canBack = index > 0, canNext = index < beats.length - 1;

  useEffect(() => {
    const h = (e) => {
      const tag = (e.target?.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || e.target?.isContentEditable) return;
      if (e.key === 'ArrowRight' && canNext) setIndex(index + 1);
      if (e.key === 'ArrowLeft' && canBack) setIndex(index - 1);
      if (e.key === 'Escape') onExit();
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [index, canBack, canNext, setIndex, onExit]);

  return (
    <>
      {children}
      <div className="narration">
        <span className="narr-label">Narration</span>
        <span className="narr-text" title={beat.narration}>{beat.narration}</span>
      </div>
      <div className="storybar">
        <div className="beat-title">
          <span className={`beat-id ${option === 'B' ? 'b' : ''}`}>{beat.id}</span>
          <span>{beat.title}</span>
        </div>
        <div className="controls">
          <button className="nav-btn" disabled={!canBack} onClick={() => setIndex(index - 1)}><Icons.ChevronL size={16} /> Back</button>
          <div className="dots">
            {beats.map((b, i) => (
              <button key={b.id} className={`dot ${i === index ? 'active' : i < index ? 'done' : ''}`} onClick={() => setIndex(i)} aria-label={b.title} title={`${b.id} — ${b.title}`} />
            ))}
          </div>
          <button className="nav-btn next" disabled={!canNext} onClick={() => setIndex(index + 1)}>Next <Icons.ChevronR size={16} /></button>
        </div>
        <div className="exit">
          <span className="keys"><span className="kbd">←</span> <span className="kbd">→</span> to navigate</span>
          <button onClick={onExit} aria-label="Exit scenario" title="Exit">×</button>
        </div>
      </div>
    </>
  );
}
