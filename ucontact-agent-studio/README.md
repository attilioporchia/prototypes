# uContact Agent Studio

A clickable prototype of the **AI Agent Wizard**: a supervisor builds, tests, versions and
puts live an AI voice agent for a contact centre — without ever seeing or writing a prompt.

**Open [`ucontact-agent-studio.html`](ucontact-agent-studio.html) in a browser.** No server, no
install, no build step: the whole app, React included, is inlined in that one file. It reaches
the network only for its web fonts.

---

## What it covers

- **The wizard** — direction and job, voice and language, scope brief, rules, test. Five
  templates; one (Receptionist) is inbound-only and cannot be chosen for outbound.
- **Versions** — there are no drafts: every save writes a version and that version is the one
  the agent runs. **Live** only means the agent is in a dialer in the Outbound Hub; saving an edit
  of a live agent warns first, because it replaces the running version. Opening an older version
  shows *what would change if you recovered it*, against the current one: single values
  old-against-new, lists item by item, each line marked gains / loses / changes. Recover loads a
  version onto the Scope screen for review; nothing changes until it is saved.
- **Corrections** — pick a line from a past interaction, propose a rule, approve it, and it
  becomes part of the agent's configuration.
- **Interactions** — a log mixing AI-handled and human-handled rows, with a detail view
  (transcript, raw data, conversation summary).

## What it deliberately does not model

The prototype models the lifecycle of an agent's *configuration*, not the platform around it.
A dialer is a name in an array that decides the Live badge. **Outbound hub, queues, campaigns,
contact lists and dispositions are labels with no behaviour behind them**, and the agent has no
access to customer records — the simulated conversation is a pattern match over what you type.
Worth knowing before demoing it as an integration.

---

## Rebuilding

Only needed if you change something. There is no Node dependency: the build drives Babel through
macOS JavaScriptCore (`osascript -l JavaScript`), as do the tests.

```sh
./fetch-libs.sh     # once: pulls babel / react / react-dom / react-dom-server from cdnjs
python3 mk.py       # compiles, concatenates, refreshes the test harnesses, writes the HTML
```

Sources, concatenated in this order into one shared scope:

```
build/data.js   →  build/base.js  →  build/parts.jsx  →  build/boot.js
build/head.html    the entire stylesheet
```

`base.js` is already-compiled React — edit it as `React.createElement` calls, **not** JSX.
`parts.jsx` is the JSX half and the only file Babel compiles.

## Tests

```sh
osascript -l JavaScript assert.js   # 810 behaviour assertions      → expect 0 FAIL
osascript -l JavaScript modals.js   # 83 assertions for modal UI    → expect 0 FAIL
osascript -l JavaScript smoke.js    # renders 994 screen states     → expect 0 failures
```

`modals.js` reaches UI that only exists once opened: `mk.py` gives it a patched `useState` that
serves forced initial values from a queue, so a modal can be rendered without a click.

Each harness is committed as **its hand-written tail only**, starting at a marker line
(`var out=[];` / `var results = [];`). `mk.py` prepends the current app above that marker on
every build — roughly 245 KB per file that would otherwise churn in every diff. This means the
harnesses **do not run straight from a fresh clone**: run `./fetch-libs.sh && python3 mk.py`
first. Only ever edit below the marker.
