// Neuro endpoint: render a page range of the source PDF and OCR it locally with Tesseract (no gateway, no quota).
// usage: node npep-prep.mjs <pdf> <workDir> <firstPage> <lastPage> [concurrency=8]     (workDir relative to the repo root)
// Writes <workDir>/pages/p-<4-digit>.png (150 dpi) and <workDir>/p<4-digit>.txt. Resume-safe: skips what exists.
// The .txt is a SEARCH INDEX for page classification and cross-checks only, never a clinical source; Codex reads the image.
import fs from 'node:fs';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
const run = promisify(execFile);

const [PDF, DIR, A, B, C] = process.argv.slice(2);
if (!PDF || !DIR || !A || !B) throw new Error('usage: node npep-prep.mjs <pdf> <workDir> <first> <last> [concurrency]');
const CONC = +C || 8;
const TESS = 'C:/Program Files/Tesseract-OCR/tesseract.exe';
const pad = p => String(p).padStart(4, '0');
fs.mkdirSync(`${DIR}/pages`, { recursive: true });

// 1. render: one pdftoppm per chunk of 40 pages, CONC chunks at a time (a render of a page that already exists is skipped)
const need = [];
for (let p = +A; p <= +B; p++) if (!fs.existsSync(`${DIR}/pages/p-${pad(p)}.png`)) need.push(p);
const chunks = [];
for (let i = 0; i < need.length;) { let j = i; while (j + 1 < need.length && need[j + 1] === need[j] + 1 && j - i < 39) j++; chunks.push([need[i], need[j]]); i = j + 1; }
const q1 = [...chunks];
await Promise.all(Array.from({ length: CONC }, async () => {
  while (q1.length) {
    const [a, b] = q1.shift();
    try { await run('pdftoppm', ['-png', '-r', '150', '-f', String(a), '-l', String(b), PDF, `${DIR}/pages/p`], { maxBuffer: 1 << 26 }); }
    catch (e) { console.log(`render ${a}-${b} FAILED ${String(e.message).slice(0, 120)}`); }
  }
}));
console.log('rendered', need.length, 'pages');

// 2. OCR
const todo = [];
for (let p = +A; p <= +B; p++) if (!fs.existsSync(`${DIR}/p${pad(p)}.txt`) && fs.existsSync(`${DIR}/pages/p-${pad(p)}.png`)) todo.push(p);
let done = 0; const failed = [];
const q2 = [...todo];
await Promise.all(Array.from({ length: CONC }, async () => {
  while (q2.length) {
    const p = q2.shift();
    try {
      const { stdout } = await run(TESS, [`${DIR}/pages/p-${pad(p)}.png`, 'stdout', '-l', 'eng', '--psm', '6'], { maxBuffer: 1 << 24 });
      fs.writeFileSync(`${DIR}/p${pad(p)}.txt`, stdout.replace(/\r/g, '').trim() + '\n'); done++;
    } catch (e) { failed.push(p); }
  }
}));
console.log('ocr', done, 'of', todo.length, 'failed', JSON.stringify(failed));
