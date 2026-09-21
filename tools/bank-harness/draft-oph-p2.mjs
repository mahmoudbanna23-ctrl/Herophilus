// Single-shot survivor drafter for ophtho endpoint part 2. Two gateway calls per row:
// (1) pick the lecture file, (2) write chapter + expansion + objective against that lecture.
// Stem, options, answer, box and source are assembled HERE from the array, never by the model.
// Usage: node draft-oph-p2.mjs <sec> <slug> <exam-no>      env DRAFT_MODEL (default work-text)
// Resumable: one part file per row in _s<sec>-work/draft-parts/; rerun skips rows already written.
import fs from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const ROOT = 'D:/claude os/Medical school/Herophilus/';
const R = ROOT + 'content/ophtho/qb-pages/', LEC = ROOT + 'content/ophtho/lectures/';
const [SEC, SLUG, EXAM] = process.argv.slice(2);
if (!SEC || !SLUG || !EXAM) throw new Error('usage: node draft-oph-p2.mjs <sec> <slug> <exam-no>');
const MODEL = process.env.DRAFT_MODEL || 'work-text';
if (/^auto\//.test(MODEL) || /^(dva|cxa|aug|zc)\//.test(MODEL)) throw new Error('banned model ' + MODEL);
const key = process.env.OMNIROUTE_API_KEY;
if (!key) throw new Error('OMNIROUTE_API_KEY not set');

const BASE = 'oph-ep-p2-s' + SEC + '-' + SLUG, PARTS = R + '_s' + SEC + '-work/draft-parts/';
fs.mkdirSync(PARTS, { recursive: true });
const rows = new Function(fs.readFileSync(R + BASE + '.array.js', 'utf8') + ';return OPHEP2_S' + SEC + '_STAGED')();
const folded = new Set(require('./sec-oph.js').SEC_P2[SEC].folded || []);
const survivors = rows.filter(r => !folded.has(r.n));
const lectures = fs.readdirSync(LEC).filter(f => f.endsWith('.txt'));
const chapters = [...fs.readFileSync(ROOT + 'app/data/modules.js', 'utf8').matchAll(/\['(op-[a-z-]+)','([^']*)'\]/g)].map(m => m[1] + ' = ' + m[2]);

async function ask(prompt) {
  const r = await fetch('http://localhost:20128/v1/chat/completions', {
    method: 'POST',
    headers: { 'content-type': 'application/json', Authorization: 'Bearer ' + key, 'x-omniroute-no-cache': 'true' },
    body: JSON.stringify({ model: MODEL, max_tokens: 3000, messages: [{ role: 'user', content: prompt }] }),
    signal: AbortSignal.timeout(180000),
  });
  const j = JSON.parse(await r.text());
  const t = (j.choices?.[0]?.message?.content || '').trim();
  if (!t) throw new Error('HTTP ' + r.status + ' ' + (j.error?.message || 'empty').slice(0, 200));
  return JSON.parse(t.slice(t.indexOf('{'), t.lastIndexOf('}') + 1));
}

const q = r => 'STEM: ' + r.stem + '\nOPTIONS:\n' + r.opts.map((o, i) => String.fromCharCode(65 + i) + '. ' + o).join('\n') +
  '\nPRINTED KEY: ' + String.fromCharCode(65 + r.key) + (r.expl ? '\nPRINTED EXPLANATION BOX: ' + r.expl : '');

let ok = 0, fail = 0;
for (const r of survivors) {
  const out = PARTS + 'n' + r.n + '.json';
  if (fs.existsSync(out)) { ok++; continue; }
  await new Promise(z => setTimeout(z, 8000)); // pacing: free seats rate-limit
  try {
    const pick = await ask('Ophthalmology MCQ:\n' + q(r) + '\n\nLecture files:\n' + lectures.join('\n') +
      '\n\nWhich ONE lecture file most likely teaches the fact this question tests? Reply JSON only: {"file":"<exact filename>"}');
    pick.file = lectures.find(f => f === pick.file) || lectures.find(f => f.endsWith(') ' + pick.file)) || pick.file;
    if (!lectures.includes(pick.file)) throw new Error('picked unknown lecture ' + pick.file);
    const d = await ask(
      'You write the explanation for one MCQ in a medical student question bank. The printed key is ALWAYS right for this purpose: never dispute it, never move it.\n\n' + q(r) +
      '\n\nLECTURE TEXT (file "' + pick.file + '"; slides are marked by "SLIDE N" headers where present, otherwise count form-feed pages and cite "page N"):\n<<<\n' +
      fs.readFileSync(LEC + pick.file, 'utf8') + '\n>>>\n\nCHAPTER IDS:\n' + chapters.join('\n') +
      '\n\nWrite 150-300 words of plain prose: why the keyed option is right, then why EACH other option is wrong, one by one. Ground it in the lecture: quote it and cite as (' +
      pick.file.split(')')[0] + ', slide N). Where the lecture does not cover a fact, still answer it and tag that claim with "(not taken from the course material)". ' +
      'Do not repeat the printed explanation box; it is appended separately. Copy every number and unit exactly. No markdown headers, no bullet lists. Paragraphs separated by a blank line.\n' +
      'Reply JSON only: {"chapter":"<one id from the list, chosen by the question content>","expansion":"...","objective":"<one sentence stating the fact tested>","lectureCovers":true|false}');
    if (!chapters.some(c => c.startsWith(d.chapter + ' ='))) throw new Error('unknown chapter ' + d.chapter);
    fs.writeFileSync(out, JSON.stringify({ n: r.n, lecture: pick.file, model: MODEL, ...d }, null, 1), 'utf8');
    ok++; console.log('n' + r.n, 'OK', d.chapter, pick.file.slice(0, 12));
  } catch (e) { fail++; console.log('n' + r.n, 'FAIL', e.message); }
}
console.log('parts', ok, 'of', survivors.length, 'fail', fail);
if (fail) process.exit(1);

// Assemble. ponytail: no fold/House notes added here; Claude adds those by hand before the refuter.
const E = s => JSON.stringify(String(s));
let js = '/* Drafted by tools/bank-harness/draft-oph-p2.mjs (' + MODEL + ', single-shot per row) -- ophthalmology endpoint,\n   part 2, section ' + SEC +
  ', survivors only (n' + survivors.map(r => r.n).join(', ') + '). Stems, options, keys and boxes are copied\n   from ' + BASE + '.array.js by the script; only chapter, expansion and objective are model-written. */\n\nvar OPHEP2_S' + SEC + '_DRAFT = [\n\n';
for (const r of survivors) {
  const d = JSON.parse(fs.readFileSync(PARTS + 'n' + r.n + '.json', 'utf8'));
  const expl = r.expl
    ? d.expansion.trim() + '\n\n**The endpoint file prints this explanation:**\n\n> ' + r.expl + '\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file\u2019s own.*'
    : d.expansion.trim() + '\n\nWritten for this bank \u2014 the endpoint file prints no explanation here.';
  js += '{ id:"' + require('./sec-oph.js').SEC_P2[SEC].prefix + r.n + '", module:"ophtho", bank:"endpoint", chapter:' + E(d.chapter) + ',\n  stem:' + E(r.stem) +
    ',\n  options:' + JSON.stringify(r.opts) + ',\n  answer:' + r.key + ',\n  explanation:' + E(expl) + ',\n  objective:' + E(d.objective) +
    ',\n  source:"Opthalmology endpoint.pdf p.' + (r.markedOnly ? r.mp : r.p + '-' + r.mp) + '" },\n\n';
}
fs.writeFileSync(R + BASE + '.draft.js', js + '];\n', 'utf8');
console.log('wrote', BASE + '.draft.js', survivors.length, 'entries');
