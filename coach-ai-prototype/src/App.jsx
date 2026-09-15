import React, { useCallback, useState } from 'react';
import Shell from './components/Shell.jsx';
import Entry from './components/Entry.jsx';
import StoryEngine from './components/StoryEngine.jsx';
import SettingsModal from './components/SettingsModal.jsx';
import { optionABeats, optionBBeats } from './scenario.js';
import { optionAScreens } from './optionA/beats.jsx';
import OptionB from './optionB/OptionB.jsx';
import { getApiKey, setApiKey as persistKey } from './lib/claude.js';

export default function App() {
  const [route, setRoute] = useState('home'); // home | A | B
  const [index, setIndex] = useState(0);
  const [settings, setSettings] = useState(false);
  const [apiKey, setApiKey] = useState(getApiKey());

  const goHome = useCallback(() => { setRoute('home'); setIndex(0); }, []);
  const play = (opt) => { setIndex(0); setRoute(opt); };
  const saveKey = (k) => { persistKey(k); setApiKey(k); };

  let content;
  if (route === 'home') {
    content = <Entry onPlay={play} />;
  } else if (route === 'A') {
    const beat = optionABeats[index];
    const Screen = optionAScreens[beat.id];
    content = (
      <StoryEngine option="A" beats={optionABeats} index={index} setIndex={setIndex} onExit={goHome}>
        <div className="main-inner with-story"><Screen key={beat.id} /></div>
      </StoryEngine>
    );
  } else {
    content = (
      <StoryEngine option="B" beats={optionBBeats} index={index} setIndex={setIndex} onExit={goHome}>
        <OptionB index={index} apiKey={apiKey} />
      </StoryEngine>
    );
  }

  return (
    <>
      <Shell onOpenSettings={() => setSettings(true)} onHome={goHome} apiKeySet={!!apiKey}>
        {content}
      </Shell>
      {settings && <SettingsModal apiKey={apiKey} onSave={saveKey} onClose={() => setSettings(false)} />}
    </>
  );
}
