// P3 desk plates — one gateway call per image (plan §6 generation map, R5).
// Usage: node gen-plates.mjs <painted|photo> [model]   (default model gemini/gemini-3-pro-image)
// Key read from OMNIROUTE_API_KEY, never written anywhere. Output: <kind>-<n>.png beside this file.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const kind = process.argv[2];
const model = process.argv[3] || 'gemini/gemini-3-pro-image';
const key = process.env.OMNIROUTE_API_KEY;
if (!key) { console.error('OMNIROUTE_API_KEY not set'); process.exit(2); }
if (/^(auto|dva|cxa|aug|zc)\//.test(model)) { console.error('banned prefix'); process.exit(2); }

// R5: style rules + never-list up front.
const COMMON = `
Wide banner image, 21:9 landscape, for the top band of a study app's home screen.
SCENE: an old scholar's writing desk seen from the front at desk height, night, Alexandria ~300 BC
feel — papyrus scrolls, a closed codex, a reed pen, a small bronze water-clock vessel, one clay oil
lamp or candle with an UNLIT wick (no flame at all — the flame is added later in code), dark warm
walls. Light comes softly from off-frame left, low and warm; deep shadow elsewhere.
COMPOSITION: keep the left third calm and dark (a character is placed there later); the candle
stands right of centre; the bottom 20% fades to near-black so UI text can sit on it.
NEVER: any person, figure, face, hand or statue; any text, letters, numbers, logos or watermark;
any modern object (laptop, lamp, phone, glasses); any lit flame, glow halo or smoke; neon; emoji
style; lens flare; frame or border.`;

const PROMPTS = {
  painted: `${COMMON}
STYLE: match the attached character art's own drawn style exactly — its line quality, flat-to-soft
shading, palette and finish — so she looks like she belongs in this room. The attached image is a
STYLE REFERENCE ONLY: do not draw her, do not include her or any part of her in the output.`,
  photo: `${COMMON}
STYLE: photo-real, shot on a full-frame camera, 35 mm lens, shallow depth of field, natural film
grain, true materials (worn cedar wood, rough papyrus, patinated bronze, fired clay).`,
};
if (!PROMPTS[kind]) { console.error('kind must be painted or photo'); process.exit(2); }

const content = [{ type: 'text', text: PROMPTS[kind] }];
if (kind === 'painted') {
  const png = readFileSync(join(here, '../../../../app/assets/clep/presenting.png')).toString('base64');
  content.push({ type: 'image_url', image_url: { url: 'data:image/png;base64,' + png } });
}

const t0 = Date.now();
const r = await fetch('http://localhost:20128/v1/chat/completions', {
  method: 'POST',
  headers: { Authorization: 'Bearer ' + key, 'Content-Type': 'application/json' },
  body: JSON.stringify({ model, messages: [{ role: 'user', content }], modalities: ['image', 'text'] }),
  signal: AbortSignal.timeout(240000),
});
const txt = await r.text();
console.log('HTTP', r.status, (Date.now() - t0) + 'ms', model);

// Save every base64 image found anywhere in the reply (providers nest it differently).
const found = [...txt.matchAll(/data:image\/(png|jpeg|webp);base64,([A-Za-z0-9+/=]+)/g)];
if (!found.length) { console.log(txt.slice(0, 800)); process.exit(1); }
let n = 1;
for (const [, ext, b64] of found) {
  while (existsSync(join(here, `${kind}-${n}.${ext === 'jpeg' ? 'jpg' : ext}`))) n++;
  const out = join(here, `${kind}-${n}.${ext === 'jpeg' ? 'jpg' : ext}`);
  writeFileSync(out, Buffer.from(b64, 'base64'));
  console.log('saved', out);
}
