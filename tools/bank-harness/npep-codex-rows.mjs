// Neuro endpoint: one `codex exec` (own login) per question -> one verified, drafted row.
// usage: node npep-codex-rows.mjs <ocrDir> <pairs.json> <outDir> <chapterId> <fromIdx> <toIdx>
// All paths RELATIVE to the repo root (the space in "claude os" breaks shell:true argument passing). Run from the repo root.
// pairs.json: [{ "n": <printed number>, "q": <question PDF page>, "a": <answer PDF page> }, ...]
// ocrDir holds pages/p-<4-digit>.png and p<4-digit>.txt from Tools/omniroute/transcribe-pages.mjs (gateway OCR, unverified).
// Writes <outDir>/n<N>.json per question. Resume-safe. Stops after two failures in a row (no retry loop).
// Run disjoint index ranges in parallel. ~1-3 min a question.
import fs from 'node:fs';
import { spawnSync } from 'node:child_process';

const [OCR, PAIRS, OUT, CHAPTER, A, B] = process.argv.slice(2);
if (!OCR || !PAIRS || !OUT || !CHAPTER || A === undefined || B === undefined) throw new Error('usage: node npep-codex-rows.mjs <ocrDir> <pairs.json> <outDir> <chapterId> <fromIdx> <toIdx>');
if (/\s/.test(OCR + PAIRS + OUT)) throw new Error('paths must be relative and space-free');
const MODEL = process.env.CODEX_MODEL || 'gpt-5.6-terra';
const pad = p => String(p).padStart(4, '0');
const CHAPTER_LIST = JSON.parse(fs.readFileSync(new URL('./neuro-chapters.json', import.meta.url), 'utf8')).map(c => `${c.id} = ${c.name}`).join('\n');
const pairs = JSON.parse(fs.readFileSync(PAIRS, 'utf8')).slice(+A, +B + 1);
fs.mkdirSync(OUT, { recursive: true });
const ocr = p => { try { return fs.readFileSync(`${OCR}/p${pad(p)}.txt`, 'utf8').trim(); } catch (e) { return '(no OCR text for this page: read the image)'; } };

const prompt = r => `You are staging ONE multiple-choice question from a scanned medical question bank (Neuroscience, Alexandria University endpoint book). ${r.a ? `Two page images are attached, in this order:
IMAGE 1 = the QUESTION page (PDF page ${r.q}).
IMAGE 2 = its ANSWER page (PDF page ${r.a}). The answer page repeats the question with the correct option visibly marked (highlighted, coloured, boxed, ticked or underlined) and may carry a printed explanation box.` : `ONE page image is attached: IMAGE 1 = PDF page ${r.q}. This question has no separate answer page, so look on IMAGE 1 itself for the visibly marked correct option (highlighted, coloured, boxed, ticked or underlined) and for any printed answer note or explanation box. Treat IMAGE 2 below as IMAGE 1.`}

Local OCR (Tesseract) of both pages follows. It is UNVERIFIED and can be wrong; superscripts, numbers, units and doses especially. Check every word of the stem and every option against the IMAGE and correct the OCR from the image.
--- OCR of question page ${r.q} ---
${ocr(r.q)}
--- OCR of answer page ${r.a || "(none)"} ---
${r.a ? ocr(r.a) : "(no separate answer page)"}
---

Rules:
- The printed key is ALWAYS right for this purpose. Never dispute it, never move it. Read it off IMAGE 2 by the visible mark. If you see no mark, set key to null and say so in keyEvidence; never guess a key from medical knowledge.
- Transcribe stem and options exactly as printed (keep printed typos), one string per option, without the leading "a." letter. Copy every number and unit exactly.
- If IMAGE 2 carries a printed explanation box, copy it verbatim into box and leave explanation empty.
- If no box is printed, write explanation: plain prose, about 200-280 words, why the keyed option is right and why EACH other option is wrong, one by one. Where a needed fact is not in the question, answer it from general medical knowledge and tag that claim "(not taken from the course material)". If the printed key conflicts with sound medicine, keep the key and say what the bank printed and what is generally taught. End the explanation with exactly this sentence: Written for this bank — the endpoint file prints no explanation here.
- No markdown, no bullet lists, no bold. Paragraphs separated by a blank line.
- figure: true if either page shows a photo, scan, tracing, diagram or table image that the question depends on; figureDesc = one line naming modality and view only, never the answer.
- chapter: ${CHAPTER === 'AUTO' ? 'choose the ONE best app chapter id for the question by its subject (title sense), from the list below.' : `must be "${CHAPTER}" unless the question is plainly about a different topic; then give that topic's id and say why in filingNote.`} Only ever answer with an id from this list, never invent one:
${CHAPTER_LIST}
- printedNumber: the question number printed at the start of the question on the images (integer), or null if you cannot see one. The OCR guessed ${r.n}; trust the image, not the guess.
- ocrCorrections: list every place the OCR was wrong (empty list if none).

NOTE: a script picked these pages and may have picked a lecture slide, a recap or a duplicate. If they are anything other than ONE multiple-choice question with its answer, reply with ONLY {"notQuestion":true}.

Your final message must be ONE JSON object and nothing else, no greeting, no code fence:
{"printedNumber":null,"stem":"","options":[],"key":0,"keyEvidence":"","box":"","explanation":"","objective":"one sentence stating the fact tested","figure":false,"figureDesc":"","chapter":"${CHAPTER === 'AUTO' ? '' : CHAPTER}","filingNote":"","ocrCorrections":[]}`;

let fails = 0, ok = 0;
for (const r of pairs) {
  const out = `${OUT}/${r.pk || 'n' + r.n}.json`;
  if (fs.existsSync(out) || fs.existsSync(out.replace(/\.json$/, '.rejected.json'))) { ok++; continue; }
  const lastMsg = `${OUT}/_msg-${r.pk || 'n' + r.n}.txt`;
  try { fs.unlinkSync(lastMsg); } catch (e) {}
  const call = () => spawnSync('codex', ['exec', '-m', MODEL, '-s', 'read-only', '--skip-git-repo-check',
    '-i', `${OCR}/pages/p-${pad(r.q)}.png`, ...(r.a ? ['-i', `${OCR}/pages/p-${pad(r.a)}.png`] : []), '-o', lastMsg, '-'],
    { input: prompt(r), shell: true, encoding: 'utf8', timeout: 900000 });
  const parse = () => {
    try { const t = fs.readFileSync(lastMsg, 'utf8'); return JSON.parse(t.slice(t.indexOf('{'), t.lastIndexOf('}') + 1)); } catch (e) { return null; }
  };
  let res = call(), d = parse(), why = '';
  if (!d) { res = call(); d = parse(); }   // one retry: Codex now and then answers with only its greeting line
  if (d && d.notQuestion) { fs.writeFileSync(out.replace(/\.json$/, '.rejected.json'), JSON.stringify({ pages: [r.q, r.a], note: 'Codex: not a question' })); ok++; fails = 0; console.log(r.pk, 'REJECTED soft pair (not a question)'); continue; }
  if (d && !(Array.isArray(d.options) && d.options.length >= 2 && d.stem && (d.key === null || (Number.isInteger(d.key) && d.key >= 0 && d.key < d.options.length)) && (d.box || (d.explanation && d.explanation.length > 300)))) { why = 'schema/length check'; d = null; }
  if (d) {
    d.pairN = r.n; d.n = Number.isInteger(d.printedNumber) ? d.printedNumber : r.n; d.qPage = r.q; d.aPage = r.a; d.model = 'codex ' + MODEL;
    fs.writeFileSync(out, JSON.stringify(d, null, 1), 'utf8');
    ok++; fails = 0; console.log(r.pk || 'n' + r.n, 'OK key', d.key, d.box ? 'box' : 'written', d.figure ? 'FIG' : '');
  } else {
    fails++; console.log(r.pk || 'n' + r.n, 'FAIL', why || ('exit ' + res.status + ' ' + (res.stderr || '').slice(-160).replace(/\s+/g, ' ')));
    if (fails >= 2) { console.log('two failures in a row, stopping (no retry loop).'); break; }
  }
}
console.log('rows', ok, 'of', pairs.length, 'in idx', A + '-' + B);
