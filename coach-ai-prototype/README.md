# Coach AI — clickable prototype

A guided demo of **Coach AI** inside the uContact UCX shell. Two scripted journeys over the same feature set:

- **Option A — The Coach Hub**: the supervisor operates screens (coverage, review queue, live alerts).
- **Option B — The AI Teammate**: the supervisor talks to a coach that works like a colleague. The chat is wired to the Claude API for free-typed questions.

## Run

**No Node installed?** Double-click `Open Coach AI.command` in Finder. It serves the prebuilt `dist/` folder with macOS' built-in `python3` and opens http://localhost:5180/ in your browser. Keep the Terminal window open while presenting. (If macOS blocks it the first time: right-click → Open, or run `chmod +x "Open Coach AI.command"`.)

**With Node 18+ installed** (for editing the source):

```bash
npm install
npm run dev
```

Open the printed URL (default http://localhost:5173). After changes, `npm run build` refreshes `dist/` for the launcher. Desktop only.

## Presenting

- Entry screen → pick a tile. **Next / Back** or **← / →** move between beats; **Esc** or **×** exits.
- Beats never auto-advance. Buttons inside screens change local state only.
- The dark strip above the bottom bar is the narration layer for the presenter.
- **View as Julia** (A4 live monitor, B5 live monitor) opens the agent view.

## Hosted version (claude.ai Artifact)

The prototype can be published as a private claude.ai Artifact and shared by link. There the coach chat uses the page's `sample` capability, so viewers ask Claude on their own account and no API key is needed. Rebuild with `npm run build`, then republish `dist/` (the Artifact HTML strips the document skeleton; see `scripts/artifact-html.py`).

## Live chat (Option B, local)

Click the gear icon (top right) and paste an Anthropic API key. It is held in `sessionStorage` for this tab only, never written to disk or committed. Free-typed questions in the coach chat then call `claude-sonnet-4-6` directly from the browser, grounded in the scenario data.

Without a key, or if a request fails, the coach answers with a scripted line and shows an **offline — scripted mode** badge. Scripted beat messages are always inserted locally, so the story is deterministic.

## Structure

```
src/
  scenario.js          all mock data + narration/copy (single source of truth)
  lib/claude.js        browser call to the Claude Messages API + key storage
  components/          shell, entry, story engine, shared screens (live monitor, agent view, evaluation, charts)
  optionA/beats.jsx    A1–A6 screens
  optionB/             chat panel, tabbed coach console (Console.jsx), Option B layout + live chat
```

No backend, no real telephony, no customer data.
