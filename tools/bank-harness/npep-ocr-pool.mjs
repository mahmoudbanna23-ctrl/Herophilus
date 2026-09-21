// Parallel, resume-safe page OCR through the gateway: worker pool over already-rendered pages.
// usage: node npep-ocr-pool.mjs <ocrDir> <firstPage> <lastPage> <concurrency>      (paths relative to the repo root)
// Expects <ocrDir>/pages/p-<4-digit>.png (from Tools/omniroute/transcribe-pages.mjs or pdftoppm). Writes <ocrDir>/p<4-digit>.txt.
// Skips pages that already have a .txt. Transient 5xx/empty: backoff 10/20/40 s. 429 (quota): stop everything.
// Same prompt as Tools/omniroute/transcribe-pages.mjs; model = the named combo work-vision, never auto/*.
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const [DIR, A, B, C] = process.argv.slice(2);
if (!DIR || !A || !B) throw new Error('usage: node npep-ocr-pool.mjs <ocrDir> <first> <last> [concurrency]');
const CONC = +C || 4;
const pad = p => String(p).padStart(4, '0');
const key = process.env.OMNIROUTE_API_KEY || execFileSync('reg', ['query', 'HKCU\\Environment', '/v', 'OMNIROUTE_API_KEY'], { encoding: 'utf8' }).match(/REG_(?:EXPAND_)?SZ\s+(.+)/)[1].trim();
const PROMPT = 'Transcribe this page exactly as printed: every heading, every question number, every question, every option letter and option text, in the order they appear. Do not answer any question. Do not summarise, reorder or explain. Preserve medical terms, numbers, doses and units exactly as written. If a word is unreadable write [?]. Output only the transcription.';
const todo = [];
for (let p = +A; p <= +B; p++) if (!fs.existsSync(`${DIR}/p${pad(p)}.txt`) && fs.existsSync(`${DIR}/pages/p-${pad(p)}.png`)) todo.push(p);
let stop = false, done = 0, failed = [];
async function one(p) {
  const url = 'data:image/png;base64,' + fs.readFileSync(`${DIR}/pages/p-${pad(p)}.png`).toString('base64');
  for (let t = 0; t < 4 && !stop; t++) {
    let status = 0, text = '';
    try {
      const x = await fetch('http://localhost:20128/v1/chat/completions', {
        method: 'POST', headers: { 'content-type': 'application/json', Authorization: 'Bearer ' + key, 'x-omniroute-no-cache': 'true' },
        body: JSON.stringify({ model: 'work-vision', max_tokens: 3000, messages: [{ role: 'user', content: [{ type: 'text', text: PROMPT }, { type: 'image_url', image_url: { url } }] }] }),
        signal: AbortSignal.timeout(180000) });
      status = x.status; const j = await x.json().catch(() => ({}));
      text = (j.choices?.[0]?.message?.content || '').trim();
    } catch (e) { status = 0; }
    if (status === 429) { stop = true; console.log('429 quota at p.' + p + ', stopping'); return; }
    if (status === 200 && text) { fs.writeFileSync(`${DIR}/p${pad(p)}.txt`, text); done++; console.log('p.' + p, 'OK', text.length + 'ch'); return; }
    await new Promise(r => setTimeout(r, 10000 * 2 ** t));
  }
  failed.push(p); console.log('p.' + p, 'FAILED');
}
const q = [...todo];
await Promise.all(Array.from({ length: CONC }, async () => { while (q.length && !stop) await one(q.shift()); }));
console.log('done', done, 'of', todo.length, 'failed', JSON.stringify(failed));
