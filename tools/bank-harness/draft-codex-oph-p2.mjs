// Drafts part-2 survivors through Codex (own login), one `codex exec` per row; Codex finds and reads the lecture itself.
// usage: node draft-codex-oph-p2.mjs <sec> <slug> <firstN> <lastN>
// Writes the same _s<sec>-work/draft-parts/n<N>.json parts as draft-oph-p2.mjs; run that script afterwards to assemble (it skips rows with a part).
// Resume-safe. Stops after two failures in a row (no retry loop). ~2-5 min a row: run disjoint n ranges in parallel.
import fs from 'node:fs';
import { createRequire } from 'node:module';
import { spawnSync } from 'node:child_process';
const require = createRequire(import.meta.url);
const ROOT = 'D:/claude os/Medical school/Herophilus/';
const R = ROOT + 'content/ophtho/qb-pages/', LEC = ROOT + 'content/ophtho/lectures/';
const [SEC, SLUG, A, B] = process.argv.slice(2);
if (!SEC || !SLUG || !A || !B) throw new Error('usage: node draft-codex-oph-p2.mjs <sec> <slug> <firstN> <lastN>');
const MODEL = process.env.CODEX_MODEL || 'gpt-5.6-terra';
const BASE = 'oph-ep-p2-s' + SEC + '-' + SLUG, PARTS = R + '_s' + SEC + '-work/draft-parts/', TMP = R + '_s' + SEC + '-work/draft-codex-out/';
fs.mkdirSync(PARTS, { recursive: true }); fs.mkdirSync(TMP, { recursive: true });
const rows = new Function(fs.readFileSync(R + BASE + '.array.js', 'utf8') + ';return OPHEP2_S' + SEC + '_STAGED')();
const folded = new Set(require('./sec-oph.js').SEC_P2[SEC].folded || []);
const todo = rows.filter(r => !folded.has(r.n) && r.n >= +A && r.n <= +B);
const chapters = [...fs.readFileSync(ROOT + 'app/data/modules.js', 'utf8').matchAll(/\['(op-[a-z-]+)','([^']*)'\]/g)].map(m => m[1] + ' = ' + m[2]);
const lectures = fs.readdirSync(LEC).filter(f => f.endsWith('.txt'));

const q = r => 'STEM: ' + r.stem + '\nOPTIONS:\n' + r.opts.map((o, i) => String.fromCharCode(65 + i) + '. ' + o).join('\n') +
  '\nPRINTED KEY: ' + String.fromCharCode(65 + r.key) + (r.expl ? '\nPRINTED EXPLANATION BOX: ' + r.expl : '');

const prompt = r =>
  'You write the explanation for one MCQ in a medical student question bank. The printed key is ALWAYS right for this purpose: never dispute it, never move it. ' +
  'If the lecture contradicts the printed key or box, keep the key and note the discrepancy inside the expansion, quoting the lecture.\n\n' + q(r) +
  '\n\nYour working directory holds the lecture text files (read-only). Find the lecture that teaches the fact this question tests by grepping the WHOLE folder for the distinctive term or sign, then read that span of the file. ' +
  'Slides are marked by "SLIDE N" headers, EXCEPT files L11, L12 and L15,16, which have none: for those count form-feed pages and cite "page N". ' +
  'Before you tag any claim as absent from the course material, grep every lecture file for the sign itself, not only the disease name.\n\n' +
  'Write plain prose: why the keyed option is right, then why EACH other option is wrong, one by one. About 250 words for a straight slide-recall question, up to about 520 for a vignette, a defect in the key, or a fact the lecture lacks. ' +
  'Ground it in the lecture: quote it and cite as (L<number>, slide N), where L<number> is the file name up to its first ")" (for example L7,8), or (L11, page N) for the no-header files. ' +
  'Where the lecture does not cover a fact, still answer it from general medical knowledge and tag that claim "(not taken from the course material)". ' +
  'Do not repeat the printed explanation box; it is appended separately. Copy every number and unit exactly. No markdown headers, no bullet lists, no bold. Paragraphs separated by a blank line.\n\n' +
  'CHAPTER IDS (pick ONE by the question content):\n' + chapters.join('\n') +
  '\n\nYour final message must be ONE JSON object and nothing else, no greeting, no fence: ' +
  '{"lecture":"<exact file name you used>","chapter":"<one id from the list>","expansion":"...","objective":"<one sentence stating the fact tested>","lectureCovers":true|false}';

let fails = 0, ok = 0;
for (const r of todo) {
  const out = PARTS + 'n' + r.n + '.json';
  if (fs.existsSync(out)) { ok++; continue; }
  const lastMsg = TMP + 'n' + r.n + '.txt';
  try { fs.unlinkSync(lastMsg); } catch (e) {}
  spawnSync('codex', ['exec', '-m', MODEL, '-s', 'read-only', '--skip-git-repo-check', '-o', '"' + lastMsg + '"', '-'],
    { input: prompt(r), shell: true, encoding: 'utf8', cwd: LEC, timeout: 900000 });
  let d = null, why = '';
  try {
    const t = fs.readFileSync(lastMsg, 'utf8');
    d = JSON.parse(t.slice(t.indexOf('{'), t.lastIndexOf('}') + 1));
    if (!chapters.some(c => c.startsWith(d.chapter + ' ='))) { why = 'unknown chapter ' + d.chapter; d = null; }
    else if (!lectures.includes(d.lecture)) { why = 'unknown lecture ' + d.lecture; d = null; }
    else if (!d.expansion || d.expansion.length < 400) { why = 'expansion too short'; d = null; }
  } catch (e) { why = 'no parseable JSON'; }
  if (d) {
    fs.writeFileSync(out, JSON.stringify({ n: r.n, lecture: d.lecture, model: 'codex ' + MODEL, chapter: d.chapter, expansion: d.expansion, objective: d.objective, lectureCovers: d.lectureCovers }, null, 1), 'utf8');
    ok++; fails = 0; console.log('n' + r.n, 'OK', d.chapter, d.lecture.slice(0, 12));
  } else {
    fails++; console.log('n' + r.n, 'FAIL', why);
    if (fails >= 2) { console.log('two failures in a row, stopping (no retry loop).'); break; }
  }
}
console.log('parts', ok, 'of', todo.length, 'in n' + A + '-n' + B);
