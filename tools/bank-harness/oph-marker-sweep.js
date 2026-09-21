#!/usr/bin/env node
/* Read-only marker cross-check; output is confined to _close-work/marker-sweep. */
const fs = require('fs');
const path = require('path');
const { tight, words, sameOpt, sameSet } = require('./norm');

const ROOT = path.resolve(__dirname, '..', '..');
const OUT = path.join(ROOT, 'content', 'ophtho', 'qb-pages', '_close-work', 'marker-sweep');
const STAGING = [
  '_s22-work/oph-ep-p2-s22-model-exam-1.staging.json',
  '_s23-work/oph-ep-p2-s23-model-exam-2.staging.json',
  '_s24-work/oph-ep-p2-s24-model-exam-3.staging.json',
  '_s25-work/oph-ep-p2-s25-model-exam-4.staging.json',
  '_s26-work/oph-ep-p2-s26-model-exam-5.staging.json',
  '_s27-work/oph-ep-p2-s27-summer-exam.staging.json'
].map(x => path.join(ROOT, 'content', 'ophtho', 'qb-pages', x));
const MARKER = /prints no explanation here/i;
const arg = process.argv.indexOf('--data');
if (arg >= 0 && !process.argv[arg + 1]) throw new Error('--data needs a directory');
const dataDir = path.resolve(arg >= 0 ? process.argv[arg + 1] : path.join(ROOT, 'app', 'data'));

function load(name, variable) {
  const src = fs.readFileSync(path.join(dataDir, name), 'utf8');
  return new Function(src + ';return ' + variable)();
}
function arr(x) { return Array.isArray(x) ? x.filter(v => typeof v === 'string') : []; }
function tokens(s) { return new Set(words(s).split(' ').filter(Boolean)); }
function overlap(a, b) {
  const A = tokens(a), B = tokens(b); let common = 0;
  for (const x of A) if (B.has(x)) common++;
  return common / Math.max(A.size, B.size, 1);
}
function optionMatches(a, b) {
  const A = arr(a), B = arr(b); if (!A.length || !B.length) return { count: 0, ratio: 0, set: false };
  const used = new Array(B.length).fill(false); let count = 0;
  for (const x of A) for (let i = 0; i < B.length; i++) if (!used[i] && sameOpt(x, B[i])) { used[i] = true; count++; break; }
  return { count, ratio: count / Math.max(A.length, B.length), set: A.length === B.length && sameSet(A, B) };
}
function cited(source, page) {
  const s = String(source || '');
  for (const m of s.matchAll(/p\.\s*(\d+)(?:\s*[-–]\s*(\d+))?/gi)) {
    const lo = +m[1], hi = +(m[2] || m[1]); if (page >= lo && page <= hi) return true;
  }
  return false;
}
function tail(x) { const s = String(x || ''); return s.slice(-200); }
function candidate(entry, row, tier, score, kind) {
  return { id: entry.id, file: entry.__file, tier, score, matched_pdf_page: row.pdf_page,
    printed_q: row.printed_q, page_already_cited: cited(entry.source, Number(row.pdf_page)),
    staged_stem: row.stem, boxed_text_verbatim: kind === 'ocr' ? row.text : row.explanation_verbatim,
    explanation_last_200: tail(entry.explanation), ...(kind === 'ocr' ? { note: 'OCR text, unverified' } : {}) };
}
function ocrTail(text, options) {
  let first = String(text || '').split(/--- 150dpi ---/i)[0];
  first = first.replace(/^\s*\d+\s*$/gm, '');
  const lines = first.split(/\r?\n/); let at = -1;
  for (const opt of arr(options)) {
    const needle = tight(opt);
    for (let i = 0; i < lines.length; i++) if (needle && tight(lines[i]).includes(needle)) at = Math.max(at, i);
  }
  return at >= 0 ? lines.slice(at + 1).join('\n').trim() : '';
}

const ep = load('questions.ophtho.ep.js', 'Q_OPHTHO_EP').map(x => ({ ...x, __file: 'questions.ophtho.ep.js' }));
const ep2 = load('questions.ophtho.ep2.js', 'Q_OPHTHO_EP2').map(x => ({ ...x, __file: 'questions.ophtho.ep2.js' }));
const entries = ep.concat(ep2), anywhere = entries.filter(x => MARKER.test(String(x.explanation || '')));
const ending = anywhere.filter(x => MARKER.test(tail(x.explanation)));
const rows = STAGING.flatMap(f => JSON.parse(fs.readFileSync(f, 'utf8')));
const boxed = rows.filter(r => r.box_printed === true && String(r.explanation_verbatim || '').trim());
const results = [];
for (const e of anywhere) for (const r of boxed) {
  if (!e.stem || !r.stem) continue;
  const score = overlap(e.stem, r.stem), om = optionMatches(e.options, r.options);
  const exact = tight(e.stem) === tight(r.stem);
  if (exact || (score >= .9 && om.set)) results.push(candidate(e, r, 1, { stem_overlap: score, option_matches: om.count }, 'stage'));
  else if (score >= .7 && score < .9 && om.ratio >= .6) results.push(candidate(e, r, 2, { stem_overlap: score, option_matches: om.count }, 'stage'));
}
const ocrDir = path.join(ROOT, 'content', 'ophtho', 'qb-pages', 'ocr', 'ep');
const ocrPages = fs.readdirSync(ocrDir).filter(x => /^p\d{4}\.txt$/i.test(x)).map(file =>
  ({ file, raw: fs.readFileSync(path.join(ocrDir, file), 'utf8') }));
for (const e of anywhere.filter(x => /^ophep2-/.test(x.id))) {
  for (const { file, raw } of ocrPages) {
    const stemTokens = tokens(e.stem), pageTokens = tokens(raw);
    let common = 0; for (const token of stemTokens) if (pageTokens.has(token)) common++;
    const score = common / Math.max(stemTokens.size, 1);
    if (score >= .8) {
      const text = ocrTail(raw, e.options);
      results.push(candidate(e, { pdf_page: +file.slice(1, 5), printed_q: null, stem: null, text }, 3, { stem_overlap: score }, 'ocr'));
    }
  }
}
fs.mkdirSync(OUT, { recursive: true });
const fixture = /[\\/]_fixture$/i.test(dataDir);
if (fixture) fs.writeFileSync(path.join(OUT, 'fixture-result.json'), JSON.stringify({ ids: [...new Set(results.filter(x => x.tier < 3).map(x => x.id))], candidates: results }, null, 2) + '\n');
fs.writeFileSync(path.join(OUT, 'candidates.json'), JSON.stringify(results, null, 2) + '\n');
const count = xs => xs.length;
const by = key => Object.entries(results.reduce((a, x) => ((a[x[key]] ||= 0), a[x[key]]++, a), {})).map(([k,v]) => `${k}: ${v}`).join(', ') || 'none';
const multi = Object.entries(results.reduce((a,x) => ((a[x.id] ||= 0), a[x.id]++, a), {})).filter(([,n]) => n > 1).map(([id,n]) => `${id} (${n})`).join(', ') || 'none';
let fixtureLine = 'not run in this invocation';
const fixtureFile = path.join(OUT, 'fixture-result.json');
if (!fixture && fs.existsSync(fixtureFile)) {
  const f = JSON.parse(fs.readFileSync(fixtureFile, 'utf8')); const need = ['ophep-vitreous-8','ophep-ocular-systemic-diseases-17','ophep-ocular-trauma-16'];
  fixtureLine = `${need.filter(x => f.ids.includes(x)).join(', ') || 'none'}; missing: ${need.filter(x => !f.ids.includes(x)).join(', ') || 'none'}`;
}
const endingEp = count(ep.filter(x => MARKER.test(tail(x.explanation))));
const endingEp2 = count(ep2.filter(x => MARKER.test(tail(x.explanation))));
const ocrEmpty = results.filter(x => x.tier === 3 && !String(x.boxed_text_verbatim || '').trim()).length;
const md = [`# Ophthalmology marker sweep`, ``, `Data: ${dataDir}`, `Marker anywhere: ep ${count(ep.filter(x=>MARKER.test(String(x.explanation||''))))}; ep2 ${count(ep2.filter(x=>MARKER.test(String(x.explanation||''))))}.`, `Marker in last 200: ep ${endingEp}; ep2 ${endingEp2}.`, ...(endingEp !== 191 || endingEp2 !== 80 ? [`Last-200 count differs from journal (ep 191; ep2 80); reported without adjustment.`] : []), `Candidates by tier: ${by('tier')}.`, `Candidates by entry file: ${by('file')}.`, `Entries with more than one candidate: ${multi}.`, `Fixture result: ${fixtureLine}.`, `Unchecked: OCR tier 3 is OCR text, unverified; ${ocrEmpty} OCR hit(s) had no text after a detected last option; no visual/PDF verification was performed.`].join('\n') + '\n';
fs.writeFileSync(path.join(OUT, 'summary.md'), md);
process.stdout.write(md);
