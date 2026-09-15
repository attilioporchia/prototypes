// Direct browser call to the Claude API (no backend). The key lives in
// sessionStorage only — never hardcoded, never logged, never committed.
export const MODEL = 'claude-sonnet-4-6';
const KEY_STORAGE = 'coach_ai_api_key';

export function getApiKey() {
  try { return sessionStorage.getItem(KEY_STORAGE) || ''; } catch { return ''; }
}
export function setApiKey(key) {
  try {
    if (key) sessionStorage.setItem(KEY_STORAGE, key.trim());
    else sessionStorage.removeItem(KEY_STORAGE);
  } catch { /* ignore */ }
}

/**
 * Normalize the visible chat into a valid `messages` array:
 * strictly alternating roles, starting with `user`.
 */
export function toApiMessages(chat) {
  const out = [];
  for (const m of chat) {
    const role = m.role === 'coach' ? 'assistant' : 'user';
    const text = (m.text || '').trim();
    if (!text) continue;
    if (out.length && out[out.length - 1].role === role) {
      out[out.length - 1].content += `\n\n${text}`;
    } else {
      out.push({ role, content: text });
    }
  }
  if (!out.length || out[0].role !== 'user') {
    out.unshift({ role: 'user', content: '(The supervisor opens Coach AI.)' });
  }
  return out;
}

/**
 * When the prototype is published as a claude.ai Artifact, the viewer can ask
 * Claude through the page's `sample` capability — no API key involved.
 * Resolves the function, or null when not hosted (e.g. local `npm run dev`).
 */
export async function hostedSampler() {
  if (typeof window === 'undefined' || !window.claude?.use) return null;
  try { return await window.claude.use('sample'); } catch { return null; }
}

async function askViaSample(sample, system, chat) {
  const turns = toApiMessages(chat);
  // standing instructions ride in the first user turn (the capability has no system prompt)
  turns[0] = { role: 'user', content: `${system}

---
The supervisor says:
${turns[0].content}` };
  const { text } = await sample(turns, { cache: false, modelTier: 'quick' });
  const out = (text || '').trim();
  if (!out) throw new Error('empty');
  return out;
}

export async function askCoach({ apiKey, sample, system, chat }) {
  if (sample) return askViaSample(sample, system, chat);
  if (!apiKey) throw new Error('no-key');
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 400,
      system,
      messages: toApiMessages(chat),
    }),
  });
  if (!res.ok) throw new Error(`api-${res.status}`);
  const data = await res.json();
  const text = (data.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('').trim();
  if (!text) throw new Error('empty');
  return text;
}
