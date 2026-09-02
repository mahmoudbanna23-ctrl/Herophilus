// Validate a peds ch.10 draft half against the staging record.
// Written with the Write tool, not a heredoc: the heredoc collapses \\ to \ and would eat \s+.
const fs = require('fs'), vm = require('vm');
const R = 'D:/claude os/Medical school/Herophilus/';

function run(p, tail) {
  return vm.runInThisContext(fs.readFileSync(R + p, 'utf8') + (tail || ''), { filename: p });
}

run('content/peds/qb-pages/house-ch10-nutrition.array.js');
const S = PEDHD_NUTR_STAGED;

// MODULES is a const -> not on globalThis; take it as the completion value.
const MODS = run('app/data/modules.js', '\n;MODULES');
const chapIds = new Set();
MODS.forEach(m => (m.groups || []).forEach(g => (g.chapters || []).forEach(c => chapIds.add(Array.isArray(c) ? c[0] : c.id))));

const which = process.argv[2];
const fp = 'content/peds/qb-pages/house-ch10-nutrition.draft-' + which + '.js';
const src = fs.readFileSync(R + fp, 'utf8');
const vn = src.match(/var ([A-Za-z0-9_]+) = \[/)[1];
run(fp);
const D = globalThis[vn];

let holes = 0;
for (let i = 0; i < D.length; i++) if (!(i in D)) holes++;

const MARK = 'Written for this bank — pediatric .pdf prints no explanation here.';
const allowed = new Set(['id', 'module', 'chapter', 'bank', 'stem', 'options', 'answer',
  'explanation', 'objective', 'source', 'image', 'imgAlt']);
const BT = String.fromCharCode(96);

// ch.10 prints 1..15 contiguously, so the printed number IS the ordinal. No mapping needed
// (unlike ch.9, which printed "18." twice and never printed 19).
const STRADDLE = new Set([2, 5]);
const fail = [], warn = [];

D.forEach(q => {
  const n = Number(String(q.id).replace('pedhd-nutr-', ''));
  const s = S.find(x => x.n === n);
  if (!s) { fail.push(q.id + ': no staging row'); return; }

  // Byte-identity against staging. No exemption: printed typos, curly quotes and en dashes are
  // all required to survive verbatim, silently.
  if (q.stem !== s.stem) fail.push(q.id + ': stem differs from staging');
  if (JSON.stringify(q.options) !== JSON.stringify(s.opts)) fail.push(q.id + ': options differ from staging');
  if (q.answer !== 'ABCDE'.indexOf(s.key)) fail.push(q.id + ': answer ' + q.answer + ' vs printed key ' + s.key);
  if (q.options.length !== 5) fail.push(q.id + ': ' + q.options.length + ' options');

  if (q.module !== 'pediatrics') fail.push(q.id + ': module ' + q.module);
  if (q.bank !== 'house') fail.push(q.id + ': bank ' + q.bank);
  if (!chapIds.has(q.chapter)) fail.push(q.id + ': UNKNOWN CHAPTER ' + q.chapter);

  // ch.10 prints ZERO explanation boxes, so the marker is required on every single entry.
  if (!q.explanation.trimEnd().endsWith(MARK)) fail.push(q.id + ': marker not final line');
  if (q.explanation.split(MARK).length - 1 !== 1) fail.push(q.id + ': marker appears more than once');
  if ((q.source || '').indexOf('Written for this bank') >= 0) fail.push(q.id + ': marker inside source');

  // A literal backtick opens a markdown code span in the app and swallows the rest of the
  // text. node --check never sees it. Parity is the only cheap instrument.
  if ((q.explanation.split(BT).length - 1) % 2) fail.push(q.id + ': ODD BACKTICK COUNT in explanation');

  if ((q.source || '').indexOf('p.' + s.p) < 0) fail.push(q.id + ': source does not carry p.' + s.p);
  // The tail may close on ")" or continue with ";" or "," when a straddle note follows.
  // Anchor on the closer so Q1 cannot match Q15.
  if (!new RegExp('\\(Part I, ch\\.10 Q' + n + '[);,]').test(q.source || ''))
    fail.push(q.id + ': source lacks the (Part I, ch.10 Q' + n + ') tail');
  if (STRADDLE.has(n) && !/straddle/i.test(q.source || ''))
    fail.push(q.id + ': straddles the page break but source does not say so');

  if (!q.objective || !q.objective.trim()) fail.push(q.id + ': objective empty');

  // n:1 is the ONLY figure question in the chapter and it carries TWO panels behind ONE basename.
  if (n === 1) {
    if (q.image !== 'q-pd-hd-75') fail.push(q.id + ': image should be the basename q-pd-hd-75, got ' + JSON.stringify(q.image));
    if (!q.imgAlt || !q.imgAlt.trim()) fail.push(q.id + ': imgAlt missing');
    // The crop is cut AFTER drafting, so a missing file is a warning here, not a failure.
    if (!fs.existsSync(R + 'app/assets/q/q-pd-hd-75.jpg')) warn.push(q.id + ': crop q-pd-hd-75.jpg not cut yet (expected at this stage)');
    // The alt text must not answer the question. Flag the give-aways for a human read.
    if (/rickets|ricket|widen|fray|cupping|splay|rosary|bowing|metaphys|swell|deficien|scurvy|osteomalac/i.test(q.imgAlt || ''))
      fail.push(q.id + ': imgAlt NAMES THE FINDING -- it must state modality and view only');
    if (/\b(left|right)\b/i.test(q.imgAlt || ''))
      fail.push(q.id + ': imgAlt STATES LATERALITY -- a crop cannot establish which wrist it is');
  } else if (q.image) {
    fail.push(q.id + ': carries an image, but n:1 is the only figure question in ch.10');
  }

  Object.keys(q).forEach(k => { if (!allowed.has(k)) fail.push(q.id + ': stray field ' + k); });
});

// The shared five-option menu on n:7..n:10 pairs those questions; it never folds them.
// The table lives once, in pedhd-nutr-7, and the siblings must point at that id.
[8, 9, 10].forEach(n => {
  const q = D.find(x => x.id === 'pedhd-nutr-' + n);
  if (q && q.explanation.indexOf('pedhd-nutr-7') < 0)
    fail.push(q.id + ': shares the n:7-n:10 option menu but does not point at pedhd-nutr-7');
});

console.log('draft-' + which + '  length ' + D.length + '  holes ' + holes + '  var ' + vn);
if (warn.length) console.log('warnings:\n  ' + warn.join('\n  '));
console.log(fail.length ? 'FAILURES:\n  ' + fail.join('\n  ') : 'ALL CHECKS PASSED');
console.log('words: ' + D.map(q => q.id.replace('pedhd-nutr-', '') + ':' + q.explanation.split(/\s+/).length).join(' '));
console.log('total words: ' + D.reduce((a, q) => a + q.explanation.split(/\s+/).length, 0));
console.log('chapters: ' + JSON.stringify(D.reduce((a, q) => (a[q.chapter] = (a[q.chapter] || 0) + 1, a), {})));
if (D.some(q => q.imgAlt)) console.log('imgAlt (READ THIS BY EYE): ' + D.filter(q => q.imgAlt).map(q => q.id + ' = ' + JSON.stringify(q.imgAlt)).join(' | '));
