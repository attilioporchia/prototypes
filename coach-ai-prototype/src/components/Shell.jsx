import React from 'react';
import { Icons } from './common.jsx';

const NAV = [
  { section: 'Administrator', items: [['Users', Icons.User], ['Connectors', Icons.Plug], ['Campaigns', Icons.Users], ['Automations', Icons.Clock], ['Configuration', Icons.Gear]] },
  { section: 'Analytics', items: [['Users', Icons.User], ['Campaigns', Icons.Users], ['Outbound hub', Icons.Hub], ['Interactions', Icons.Chat], ['Wallboards', Icons.Board], ['Coach AI', Icons.Spark, true]] },
  { section: 'Developer', items: [['Forms', Icons.Form]] },
];

export default function Shell({ children, onOpenSettings, onHome, hideNav, apiKeySet }) {
  return (
    <div className={`shell ${hideNav ? 'no-nav' : ''}`}>
      <aside className="rail">
        <button className="rail-btn" aria-label="Menu"><Icons.Menu /></button>
        <div style={{ height: 10 }} />
        <button className="rail-btn active" aria-label="Supervisor"><Icons.Monitor /></button>
        <button className="rail-btn" aria-label="Inbox"><Icons.Inbox /></button>
        <button className="rail-btn" aria-label="Contacts"><Icons.Contact /></button>
        <div className="rail-spacer" />
        <button className="rail-btn" aria-label="Info"><Icons.Info /></button>
      </aside>

      <header className="topbar">
        <button className="logo" onClick={onHome} style={{ background: 'none', border: 0, cursor: 'pointer' }} aria-label="Home">
          <span className="logo-mark"><i style={{ height: 12 }} /><i style={{ height: 20 }} /><i style={{ height: 16 }} /></span>
          ucontact
        </button>
        <button className="top-icon" aria-label="Search"><Icons.Search /></button>
        <div className="spacer" />
        <button className="top-icon" aria-label="Break"><Icons.Coffee /></button>
        <button className="top-icon" aria-label="Notifications"><Icons.Bell /></button>
        <button className="top-icon" aria-label="Settings" onClick={onOpenSettings} title={apiKeySet ? 'API key set' : 'Set API key'} style={{ position: 'relative' }}>
          <Icons.Gear />
          {apiKeySet && <span style={{ position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, background: 'var(--green)' }} />}
        </button>
        <div className="avatar">SV<span className="dot" /></div>
      </header>

      {!hideNav && (
        <nav className="nav">
          {NAV.map((g) => (
            <div key={g.section}>
              <div className="nav-section">{g.section}</div>
              {g.items.map(([label, Icon, isNew]) => (
                <button key={g.section + label} className={`nav-item ${isNew ? 'active' : ''}`} onClick={isNew ? onHome : undefined}>
                  <Icon size={20} />
                  <span>{label}</span>
                  {isNew && <span className="new-badge">NEW</span>}
                </button>
              ))}
            </div>
          ))}
        </nav>
      )}

      <main className="main">{children}</main>
    </div>
  );
}
