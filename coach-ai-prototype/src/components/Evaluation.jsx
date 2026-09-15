import React, { useRef, useState } from 'react';
import { transcripts, allQuestions, agentById, copy } from '../scenario.js';
import { Icons, ScoreRing, AgentCell, fmtDuration, useToasts, Toasts } from './common.jsx';

/**
 * Evaluation screen for one interaction: score vs Quality Model per question,
 * transcript with flagged moments, evidence links that scroll + highlight.
 * Shared by A5 (hub) and B6 (coach canvas) — the learn note differs.
 */
export default function Evaluation({ interaction, learnNote = copy.correctionSaved, onCorrection, onBack, compact = false }) {
  const tr = transcripts[interaction.transcriptId];
  const agent = agentById(interaction.agentId);
  const [answers, setAnswers] = useState({ ...interaction.evaluation });
  const [editing, setEditing] = useState(null);
  const [corrected, setCorrected] = useState({});
  const [confirmed, setConfirmed] = useState({});
  const [highlight, setHighlight] = useState(null);
  const [comment, setComment] = useState(null);
  const lineRefs = useRef({});
  const { toasts, push, dismiss } = useToasts();

  const score = allQuestions.reduce((s, q) => s + (q.answers.find((a) => a.id === answers[q.id])?.score ?? 0), 0);

  const showEvidence = (qid) => {
    const idx = tr.lines.findIndex((l) => l.evidence === qid);
    if (idx < 0) return;
    setHighlight(idx);
    lineRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => setHighlight((h) => (h === idx ? null : h)), 2600);
  };

  const choose = (qid, aid) => {
    if (editing !== qid) return;
    setAnswers((a) => ({ ...a, [qid]: aid }));
    setEditing(null);
    setCorrected((c) => ({ ...c, [qid]: true }));
    onCorrection?.(qid, aid);
  };

  return (
    <div className="fade">
      <Toasts toasts={toasts} dismiss={dismiss} />
      {onBack && (
        <div className="breadcrumb"><button onClick={onBack}>Review queue</button> <Icons.ChevronR size={14} /> <span>{interaction.id}</span></div>
      )}
      <div className="row between mb">
        <div className="row" style={{ gap: 18 }}>
          <ScoreRing score={score} />
          <div>
            <div className="row" style={{ gap: 8 }}>
              <span className="strong" style={{ fontSize: 16 }}>{interaction.id}</span>
              <span className="chip">{interaction.campaign}</span>
              {interaction.flags.map((f) => <span key={f} className="chip red">{f}</span>)}
            </div>
            <div className="small muted" style={{ margin: '4px 0 8px' }}>{interaction.date} · {fmtDuration(interaction.duration)} · {interaction.disposition} · scored by <span className="ai-tag">AI Quality</span></div>
            <AgentCell agent={agent} />
          </div>
        </div>
        {!compact && (
          <div className="row">
            <button className="btn ghost sm" onClick={() => setComment(comment === null ? '' : null)}><Icons.Comment size={15} /> Add comment</button>
            <button className="btn ghost sm" onClick={() => push({ title: 'Clip saved', body: `${interaction.id} · 00:06–00:18 added to ${agent.name.split(' ')[0]}'s file.`, tone: 'green' })}><Icons.Scissors size={15} /> Save clip</button>
            <button className="btn primary sm" onClick={() => push({ title: `Feedback sent to ${agent.name}`, body: 'Draft included the flagged clip and the two corrected answers.', tone: 'green' })}><Icons.Send size={15} /> Send feedback to agent</button>
          </div>
        )}
      </div>

      {comment !== null && (
        <div className="field mb fade">
          <label>Supervisor comment</label>
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Marco — the pitch is strong, but we verify identity before we talk about the offer. Every time." />
          <div className="row" style={{ justifyContent: 'flex-end', marginTop: 6 }}>
            <button className="btn primary xs" onClick={() => { push({ title: 'Comment added', tone: 'green' }); setComment(null); }}>Save comment</button>
          </div>
        </div>
      )}

      <div className="eval">
        <div className="card">
          <div className="card-title">Outbound Sales v2 <span className="tiny muted" style={{ fontWeight: 400 }}>· {score} / 100</span></div>
          {allQuestions.map((q) => {
            const sel = answers[q.id];
            const selAns = q.answers.find((a) => a.id === sel);
            const hasEvidence = tr.lines.some((l) => l.evidence === q.id);
            return (
              <div className="q-row" key={q.id}>
                <div className="q-cat">{q.category}</div>
                <div className="q-text">{q.text}</div>
                <div className="answers">
                  {q.answers.map((a) => (
                    <button key={a.id} className={`ans ${a.id === sel ? 'selected' : ''} ${a.id === sel && a.score === 0 ? 'zero' : ''} ${editing === q.id ? 'editing' : ''}`} onClick={() => choose(q.id, a.id)} disabled={editing !== q.id && a.id !== sel}>
                      {a.label} · {a.score}
                    </button>
                  ))}
                </div>
                <div className="row between" style={{ marginTop: 8 }}>
                  <div className="row" style={{ gap: 14 }}>
                    {hasEvidence ? (
                      <button className="evidence-link" onClick={() => showEvidence(q.id)}>✦ evidence</button>
                    ) : (
                      <span className="tiny muted">no single quote — scored on the whole call</span>
                    )}
                    {corrected[q.id] && <span className="learn-note fade">✦ {learnNote}</span>}
                    {confirmed[q.id] && !corrected[q.id] && <span className="chip green">Confirmed</span>}
                  </div>
                  {!corrected[q.id] && !confirmed[q.id] && (
                    <div className="row" style={{ gap: 6 }}>
                      <button className="btn ghost xs" onClick={() => setConfirmed((c) => ({ ...c, [q.id]: true }))}><Icons.Check size={13} /> Confirm</button>
                      <button className={`btn xs ${editing === q.id ? 'ai' : 'ai-soft'}`} onClick={() => setEditing(editing === q.id ? null : q.id)}>{editing === q.id ? 'Pick the right answer…' : 'Correct'}</button>
                    </div>
                  )}
                </div>
                {selAns && sel !== interaction.evaluation[q.id] && <div className="tiny muted" style={{ marginTop: 4 }}>was: {q.answers.find((a) => a.id === interaction.evaluation[q.id])?.label}</div>}
              </div>
            );
          })}
        </div>

        <div className="card">
          <div className="card-title">Transcript <span className="tiny muted" style={{ fontWeight: 400 }}>· flagged moments highlighted</span></div>
          <div className="transcript" style={{ maxHeight: compact ? 420 : 560 }}>
            {tr.lines.map((l, i) => (
              <div key={i} ref={(el) => { lineRefs.current[i] = el; }} className={`line ${l.speaker} ${l.flag ? 'flagged' : ''} ${highlight === i ? 'highlight' : ''}`}>
                <span className="ts">{fmtDuration(l.t)}</span>
                <div>
                  <div className="who">{l.speaker === 'agent' ? agent.name.split(' ')[0] : 'Customer'}</div>
                  <div>{l.text}</div>
                  {l.flag && <div className="flag-note"><Icons.Alert size={14} /> <span>{l.flag}</span></div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
