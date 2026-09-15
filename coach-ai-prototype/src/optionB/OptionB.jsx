import React, { useCallback, useEffect, useRef, useState } from 'react';
import { optionBBeats, buildSystemPrompt, copy, defaultCoverage } from '../scenario.js';
import { askCoach, hostedSampler } from '../lib/claude.js';
import ChatPanel from './ChatPanel.jsx';
import Console from './Console.jsx';

const uid = () => Math.random().toString(36).slice(2);
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Option B: persistent coach chat (left) + the coach console (right, tabbed, hideable).
 * Scripted beat messages are inserted locally; Claude is used only for free typing.
 */
export default function OptionB({ index, apiKey }) {
  const beat = optionBBeats[index];
  const [chat, setChat] = useState([]);
  const [typing, setTyping] = useState(0);
  const [sample, setSample] = useState(null);
  const [offline, setOffline] = useState(!apiKey);
  const [state, setStateRaw] = useState({ coverage: defaultCoverage });
  const [tab, setTab] = useState(beat.tab);
  const [consoleOpen, setConsoleOpen] = useState(true);
  const seeded = useRef(new Set());
  const setState = useCallback((patch) => setStateRaw((s) => ({ ...s, ...patch })), []);

  useEffect(() => { let on = true; hostedSampler().then((fn) => { if (on && fn) { setSample(() => fn); setOffline(false); } }); return () => { on = false; }; }, []);
  useEffect(() => setOffline(!apiKey && !sample), [apiKey, sample]);

  // The story drives the active tab; the presenter can still click any tab.
  useEffect(() => { setTab(beat.tab); setConsoleOpen(true); }, [beat]);

  const push = useCallback((msg) => setChat((c) => [...c, { id: uid(), beat: index, ...msg }]), [index]);

  useEffect(() => {
    if (seeded.current.has(beat.id)) return undefined;
    seeded.current.add(beat.id);
    let started = false, cancelled = false;
    (async () => {
      for (const m of beat.messages) {
        setTyping((t) => t + 1);
        await wait(700);
        setTyping((t) => Math.max(0, t - 1));
        if (cancelled && !started) return;
        started = true;
        setChat((c) => [...c, { id: uid(), beat: index, role: 'coach', text: m.text, quickReplies: m.quickReplies }]);
        await wait(350);
      }
    })();
    return () => { if (!started) { cancelled = true; seeded.current.delete(beat.id); } };
  }, [beat, index]);

  const say = useCallback(async (text, extra) => {
    setTyping((t) => t + 1);
    await wait(600);
    setTyping((t) => Math.max(0, t - 1));
    push({ role: 'coach', text, ...extra });
  }, [push]);

  // Quick replies can chain: `response` is a string, or { text, quickReplies } for the next question.
  const onQuickReply = async (msg, q) => {
    setChat((c) => c.map((m) => (m.id === msg.id ? { ...m, chosen: q.label } : m)));
    push({ role: 'user', text: q.reply });
    if (q.effect) {
      setStateRaw((s) => {
        const n = { ...s, ...q.effect };
        if (q.effect.coverage) n.coverage = { ...(s.coverage ?? defaultCoverage), ...q.effect.coverage }; // partial coverage patches merge
        return n;
      });
    }
    if (q.effect?.liveOpen) { setTab('live'); setConsoleOpen(true); }
    if (typeof q.response === 'string') await say(q.response);
    else if (q.response) await say(q.response.text, { quickReplies: q.response.quickReplies });
  };

  const onSend = async (text) => {
    push({ role: 'user', text });
    const history = [...chat.filter((m) => m.beat <= index), { role: 'user', text }];
    setTyping((t) => t + 1);
    try {
      const reply = await askCoach({ apiKey, sample, system: buildSystemPrompt(beat.id), chat: history });
      setOffline(false);
      setTyping((t) => Math.max(0, t - 1));
      push({ role: 'coach', text: reply, live: true });
    } catch {
      setOffline(true);
      await wait(500);
      setTyping((t) => Math.max(0, t - 1));
      push({ role: 'coach', text: copy.offlineReply });
    }
  };

  const visible = chat.filter((m) => m.beat <= index);
  const openActions = 3 - Object.keys(state.b4 || {}).length;
  const badges = {
    actions: index >= 3 && openActions > 0 ? { n: openActions, tone: 'red' } : undefined,
    live: index >= 4 && state.liveOpen !== 'julia' ? { n: 1, tone: 'red' } : undefined,
    team: index >= 3 ? { n: 2, tone: 'ai' } : undefined,
  };

  return (
    <div className="main-inner with-story lock">
      <div className={`optb ${consoleOpen ? '' : 'console-hidden'}`}>
        <ChatPanel
          messages={visible}
          typing={typing > 0}
          offline={offline}
          liveReady={!!apiKey || !!sample}
          onSend={onSend}
          onQuickReply={onQuickReply}
          consoleOpen={consoleOpen}
          onToggleConsole={() => setConsoleOpen((o) => !o)}
        />
        {consoleOpen && (
          <Console tab={tab} setTab={setTab} onHide={() => setConsoleOpen(false)} state={state} setState={setState} say={say} badges={badges} />
        )}
      </div>
    </div>
  );
}
