// Validate a peds ENDPOINT draft against its staging record.
//   node tools/bank-harness/val-pd-ep.js <section>              # single-file draft  (*.draft.js)
//   node tools/bank-harness/val-pd-ep.js <section> <A|B|...>    # a half             (*.draft-X.js)
//
// Copied from val-pd.js on 2026-09-02 and retargeted at the endpoint bank. The House pair
// (val-pd.js / splice-pd.js) is Chat B's and must never be run on endpoint files: its splicer
// hardcodes app/data/questions.peds.js as the write target. Everything endpoint goes through
// this file and splice-pd-ep.js, which only ever touch app/data/questions.peds.ep.js.
//
// What differs from House, all of it derived from the endpoint staging record:
//   - the record's `key` is a NUMERIC index (key:3), not a letter
//   - `expl` holds the printed box verbatim, or '' where the page prints none -- so which
//     closing marker an entry must carry is decided by the record, not asserted here
//   - `box` names the page an overflowed box was printed on; the source must name it too
//   - figures are q-pd-ep-<page>, not q-pd-hd-<page>
//   - there is no "(Part I, ch.N QN)" source tail; the source is the file and the page
//
// Written with the Write tool, not a heredoc: the heredoc collapses \\ to \ and would eat \s+.
const fs = require('fs'), vm = require('vm');
const R = 'D:/claude os/Medical school/Herophilus/';

const SEC = {
  1: { prefix: 'pedep-gp-', file: 'endpoint-s01-growth-puberty.array.js', svar: 'PEDEP_S01_STAGED',
       draft: 'endpoint-s01-growth-puberty.draft', chapter: 'growth-puberty' },
  2: { prefix: 'pedep-nut-', file: 'endpoint-s02-nutrition.array.js', svar: 'PEDEP_S02_STAGED',
       draft: 'endpoint-s02-nutrition.draft', chapter: 'nutrition' },
  // `chapter` is documentation only -- every entry's chapter is checked against the real
  // chapter set from modules.js (chapIds, below), never against this field. Section 3 needs
  // that latitude: its questions land in gastroenterology / gi-diarrhoea / gi-abdopain and
  // spill into liver and liver-hep, so no single id would be right here.
  3: { prefix: 'pedep-gi-', file: 'endpoint-s03-gastro.array.js', svar: 'PEDEP_S03_STAGED',
       draft: 'endpoint-s03-gastro.draft', chapter: 'gastroenterology' },
  4: { prefix: 'pedep-acc-', file: 'endpoint-s04-accidents.array.js', svar: 'PEDEP_S04_STAGED',
       draft: 'endpoint-s04-accidents.draft', chapter: 'accidents' },
  5: { prefix: 'pedep-emg-', file: 'endpoint-s05-emergencies.array.js', svar: 'PEDEP_S05_STAGED',
       draft: 'endpoint-s05-emergencies.draft', chapter: 'emergencies' },
  6: { prefix: 'pedep-per-', file: 'endpoint-s06-perinatal.array.js', svar: 'PEDEP_S06_STAGED',
       draft: 'endpoint-s06-perinatal.draft', chapter: 'perinatal' },
  // Section 7 spreads across all six neonatal/perinatal chapters -- `neonatal` is jaundice alone,
  // and prematurity, RDS, HIE, seizures/birth injury and sepsis each have their own. The field
  // below is documentation only; every entry is checked against the real chapter set.
  7: { prefix: 'pedep-neo-', file: 'endpoint-s07-neonatology.array.js', svar: 'PEDEP_S07_STAGED',
       draft: 'endpoint-s07-neonatology.draft', chapter: 'neonatal' },
  8: { prefix: 'pedep-alg-', file: 'endpoint-s08-allergy.array.js', svar: 'PEDEP_S08_STAGED',
       draft: 'endpoint-s08-allergy.draft', chapter: 'allergy' },
};

// imgAlt must give MODALITY AND VIEW ONLY. Naming the finding answers the question --
// this mistake gave away six answers once. Broad list; add to it, never trim it.
const GIVEAWAY = /rickets|ricket|widen|fray|cupping|splay|rosary|bowing|metaphys|swell|deficien|scurvy|osteomalac|dilat|obstruct|atresia|stenos|volvulus|intussuscept|target sign|double bubble|perforat|free air|pneumoperit|megacolon|stricture|mass|tumour|tumor|inflamm|ulcer|polyp|varice|ascites|hernia|malrotat|coeliac|celiac|atroph|villous|hydroceph|ventriculomeg|myelomening|meningocele|encephalocele|spina bifida|neural tube|craniosynostos|macroceph|microceph|h(?:a)?emorrhag|h(?:a)?ematoma|infarct|isch(?:a)?em|calcif|midline shift|subdural|extradural|epidural|port-wine|caf(?:e|é)-au-lait|neurofibrom|tuberous|hypsarrhythm|spike|epileptiform|slow wave|papill(?:o)?edema|papilloedema|ptosis|squint|strabism|gower|wasting|fascicul|contractur/i;

const secNum = process.argv[2], which = process.argv[3];
const cfg = SEC[secNum];
if (!cfg || (which !== undefined && !/^[A-Z]$/.test(which))) {
  console.error('usage: node val-pd-ep.js <' + Object.keys(SEC).join('|') + '> [half letter]');
  process.exit(2);
}

function run(p, tail) {
  return vm.runInThisContext(fs.readFileSync(R + p, 'utf8') + (tail || ''), { filename: p });
}

run('content/peds/qb-pages/' + cfg.file);
const S = globalThis[cfg.svar];
if (!Array.isArray(S)) { console.error('staging var ' + cfg.svar + ' did not load'); process.exit(2); }

// MODULES is a const -> not on globalThis; take it as the completion value.
const MODS = run('app/data/modules.js', '\n;MODULES');
const chapIds = new Set();
MODS.forEach(m => (m.groups || []).forEach(g => (g.chapters || []).forEach(c => chapIds.add(Array.isArray(c) ? c[0] : c.id))));

// A draft may carry its own `var NAME = [` line, or be a bare fragment of object literals
// (the parked section-1 draft is the latter). Both load; a fragment is wrapped in memory.
const fp = 'content/peds/qb-pages/' + cfg.draft + (which ? '-' + which : '') + '.js';
const src = fs.readFileSync(R + fp, 'utf8');
const vm_ = src.match(/var ([A-Za-z0-9_]+) = \[/);
let D, vn;
if (vm_) { vn = vm_[1]; run(fp); D = globalThis[vn]; }
else {
  vn = '(bare fragment)';
  D = vm.runInThisContext('[\n' + src.replace(/,\s*$/, '') + '\n]', { filename: fp });
}
if (!Array.isArray(D)) { console.error('draft did not load as an array'); process.exit(2); }

let holes = 0;
for (let i = 0; i < D.length; i++) if (!(i in D)) holes++;

const BOXED_MARK = 'The expansion above this line is written for this bank; the box itself is the endpoint file’s own.';
const UNBOXED_MARK = 'Written for this bank — Pediatrics endpoint part1.pdf prints no explanation here.';
const BOX_LEAD = '**The endpoint file prints this explanation:**';
const allowed = new Set(['id', 'module', 'chapter', 'bank', 'stem', 'options', 'answer',
  'explanation', 'objective', 'source', 'image', 'imgAlt']);
const BT = String.fromCharCode(96);
const norm = s => String(s || '').replace(/\s+/g, ' ').trim();

const fail = [], warn = [], notes = [];

// ---- everything below is DERIVED FROM STAGING, not asserted here ----
const STRADDLE = new Set(S.filter(s => s.straddle === true).map(s => s.n));
S.forEach(s => {
  const marked = /STRADDLES THE PAGE BREAK/.test(s.note || '');
  if (marked && s.straddle !== true) fail.push('staging n:' + s.n + ': note carries the STRADDLES marker but the row has no straddle:true');
  if (!marked && s.straddle === true) fail.push('staging n:' + s.n + ': row says straddle:true but the note does not carry the STRADDLES marker');
});
const FIGURE = new Set(S.filter(s => s.fig && String(s.fig).trim()).map(s => s.n));
const BOXED = new Set(S.filter(s => norm(s.expl)).map(s => s.n));

// ⚠️ THE MENU KEY IS SORTED, AND THAT IS THE WHOLE POINT. It used to be JSON.stringify(s.opts),
// which is ORDER-SENSITIVE, so it grouped only menus printed in identical order. Measured on
// section 5, 2026-09-03: n10, n11 and n58 print the SAME five anaphylaxis options in THREE
// different orders and were never grouped -- the drafter had to notice the pairing by hand.
// This is not a cosmetic miss. Letters are POSITIONAL here, so a reordered menu MOVES THE KEY
// LETTER (n10 key 3, n11 key 0, n58 key 4 -- and n11 and n58 have the SAME key text), and
// "reordered, which moves the key letter" is one of the six recognised fold shapes. An
// order-sensitive detector is blind to that shape as well as to the pairing.
// ⚠️ Do NOT sort the comparison at 'options differ from staging' below -- that one must stay
// order-sensitive, because there a reordering IS the defect it exists to catch.
const menus = new Map();
S.forEach(s => {
  const k = JSON.stringify(s.opts.map(o => String(o).toLowerCase().replace(/\s+/g, ' ').trim()).slice().sort());
  if (!menus.has(k)) menus.set(k, []);
  menus.get(k).push(s.n);
});
const SHARED = [...menus.values()].filter(g => g.length > 1).map(g => g.slice().sort((a, b) => a - b));

const seen = new Map();
D.forEach(q => {
  const n = Number(String(q.id).replace(cfg.prefix, ''));
  const s = S.find(x => x.n === n);
  if (!s) { fail.push(q.id + ': no staging row'); return; }
  seen.set(n, (seen.get(n) || 0) + 1);

  // Byte-identity against staging. No exemption: printed typos, curly quotes and en dashes
  // all survive verbatim, silently.
  if (q.stem !== s.stem) fail.push(q.id + ': stem differs from staging');
  if (JSON.stringify(q.options) !== JSON.stringify(s.opts)) fail.push(q.id + ': options differ from staging');
  const key = typeof s.key === 'number' ? s.key : 'ABCDEFGHIJ'.indexOf(s.key);
  if (q.answer !== key) fail.push(q.id + ': answer ' + q.answer + ' vs staged key ' + s.key);
  if (q.options.length !== s.opts.length) fail.push(q.id + ': ' + q.options.length + ' options vs ' + s.opts.length + ' staged');

  if (q.module !== 'pediatrics') fail.push(q.id + ': module ' + q.module);
  if (q.bank !== 'endpoint') fail.push(q.id + ': bank ' + q.bank);
  if (!chapIds.has(q.chapter)) fail.push(q.id + ': UNKNOWN CHAPTER ' + q.chapter);

  // The record decides whether the page printed a box. A boxed entry quotes it verbatim
  // under the lead line and closes with the boxed marker; an unboxed entry is authored
  // throughout and closes with the unboxed marker. Neither marker may appear twice.
  const ex = q.explanation || '';
  const boxed = BOXED.has(n);
  const MARK = boxed ? BOXED_MARK : UNBOXED_MARK;
  const OTHER = boxed ? UNBOXED_MARK : BOXED_MARK;
  if (!ex.trimEnd().replace(/\*+$/, '').endsWith(MARK)) fail.push(q.id + ': ' + (boxed ? 'boxed' : 'unboxed') + ' per staging, but the final line is not the ' + (boxed ? 'boxed' : 'unboxed') + ' marker');
  if (ex.split(MARK).length - 1 !== 1) fail.push(q.id + ': marker appears ' + (ex.split(MARK).length - 1) + ' times');
  if (ex.indexOf(OTHER) >= 0) fail.push(q.id + ': carries the wrong marker for its box status');
  if ((q.source || '').indexOf('Written for this bank') >= 0 || (q.source || '').indexOf('written for this bank') >= 0) fail.push(q.id + ': marker inside source');
  if (boxed) {
    if (ex.indexOf(BOX_LEAD) < 0) fail.push(q.id + ': boxed per staging but has no "' + BOX_LEAD + '" lead');
    const quoted = norm((ex.match(/^> .*$/gm) || []).map(l => l.slice(2)).join(' '));
    if (!quoted) fail.push(q.id + ': boxed per staging but no "> " blockquote lines');
    else if (quoted !== norm(s.expl)) warn.push(q.id + ': quoted box differs from staging expl -- read the page and settle which is verbatim');
  } else if (ex.indexOf(BOX_LEAD) >= 0 || /^> /m.test(ex)) {
    fail.push(q.id + ': unboxed per staging but quotes a box');
  }

  // A literal backtick opens a markdown code span in the app and swallows the rest of the
  // text. node --check never sees it. Parity is the only cheap instrument.
  if ((ex.split(BT).length - 1) % 2) fail.push(q.id + ': ODD BACKTICK COUNT in explanation');

  // An explanation is addressed to a student, who has never seen the brief, the staging record
  // or the split. Catch drafting-process language and staging notation.
  const LEAK = /task prompt|per the prompt|as instructed|staging record|the brief (?:ask|say|require|want|call)|brief['’]s rule|\bhalf [ABC]\b|draft-[ABC]\b/i;
  const lk = LEAK.exec(ex);
  if (lk) fail.push(q.id + ': DRAFTING-PROCESS LANGUAGE in explanation -- "' + lk[0] + '"');
  const nn = ex.match(/\bn:[0-9]+/g);
  if (nn) fail.push(q.id + ': staging notation ' + [...new Set(nn)].join(' ') + ' in explanation -- name the sibling by its id in backticks');
  if (/\bin this range\b/i.test(ex)) warn.push(q.id + ': "in this range" -- check it means a clinical range, not the drafted block');

  if ((q.source || '').indexOf('Pediatrics endpoint part1.pdf') < 0) fail.push(q.id + ': source does not name Pediatrics endpoint part1.pdf');
  if (!new RegExp('p\\.' + s.p + '(?![0-9])').test(q.source || '')) fail.push(q.id + ': source does not carry p.' + s.p);
  // An overflowed box was printed on its own page; the source must say where.
  if (s.box && !new RegExp('p\\.' + s.box + '(?![0-9])').test(q.source || ''))
    fail.push(q.id + ': box overflowed onto p.' + s.box + ' but source never names that page');
  if (STRADDLE.has(n)) {
    const m = /STRADDLES THE PAGE BREAK p\.([0-9]+) -> p\.([0-9]+)/.exec(s.note || '');
    if (!m) fail.push('staging n:' + n + ': straddle marker does not carry a "p.<a> -> p.<b>" pair');
    else if (!new RegExp('p\\.' + m[2] + '(?![0-9])').test(q.source || ''))
      fail.push(q.id + ': straddles onto p.' + m[2] + ' but source never names that page');
  }

  if (!q.objective || !q.objective.trim()) fail.push(q.id + ': objective empty');

  if (FIGURE.has(n)) {
    const want = 'q-pd-ep-' + s.p;
    if (q.image !== want) fail.push(q.id + ': image should be the basename ' + want + ', got ' + JSON.stringify(q.image));
    if (!q.imgAlt || !q.imgAlt.trim()) fail.push(q.id + ': imgAlt missing');
    if (q.image && !fs.existsSync(R + 'app/assets/q/' + q.image + '.jpg'))
      warn.push(q.id + ': crop ' + q.image + '.jpg not cut yet (expected at this stage)');
    if (GIVEAWAY.test(q.imgAlt || ''))
      fail.push(q.id + ': imgAlt NAMES THE FINDING -- it must state modality and view only');
    if (/\b(left|right)\b/i.test(q.imgAlt || ''))
      fail.push(q.id + ': imgAlt STATES LATERALITY -- a crop cannot establish which side it is');
  } else if (q.image) {
    fail.push(q.id + ': carries an image, but staging records no figure for n:' + n);
  }

  Object.keys(q).forEach(k => { if (!allowed.has(k)) fail.push(q.id + ': stray field ' + k); });
});

[...seen].forEach(([n, c]) => { if (c > 1) fail.push(cfg.prefix + n + ': drafted ' + c + ' times in this file'); });

const figPages = {};
[...FIGURE].forEach(n => {
  const p = S.find(x => x.n === n).p;
  (figPages[p] = figPages[p] || []).push(n);
});
Object.keys(figPages).forEach(p => {
  if (figPages[p].length > 1)
    fail.push('BASENAME COLLISION: n:' + figPages[p].join(', n:') + ' all sit on p.' + p + ' and would share q-pd-ep-' + p);
});

SHARED.forEach(group => {
  const anchor = cfg.prefix + group[0];
  group.slice(1).forEach(n => {
    const q = D.find(x => x.id === cfg.prefix + n);
    if (q && q.explanation.indexOf(anchor) < 0)
      fail.push(q.id + ': shares the n:' + group.join('/n:') + ' option menu but does not point at ' + anchor);
  });
  notes.push('shared menu n:' + group.join(', n:') + ' -> table anchored at ' + anchor);
});

const missing = S.filter(s => !seen.has(s.n)).map(s => s.n);
console.log('section ' + secNum + (which ? ' draft-' + which : ' draft') + '  length ' + D.length + '  holes ' + holes + '  var ' + vn);
console.log('derived from staging: boxed ' + BOXED.size + '/' + S.length + ' | straddles ' + (STRADDLE.size ? [...STRADDLE].join(',') : 'none')
  + ' | figures ' + (FIGURE.size ? [...FIGURE].join(',') : 'none') + ' | shared menus ' + (SHARED.length || 'none')
  + ' | staged but not in this file: ' + (missing.length ? missing.length + ' (' + missing.slice(0, 8).join(',') + (missing.length > 8 ? ',…' : '') + ')' : 'none'));
if (notes.length) console.log('  ' + notes.join('\n  '));
if (warn.length) console.log('warnings:\n  ' + warn.join('\n  '));
console.log(fail.length ? 'FAILURES:\n  ' + fail.join('\n  ') : 'ALL CHECKS PASSED');
console.log('words: ' + D.map(q => q.id.replace(cfg.prefix, '') + ':' + q.explanation.split(/\s+/).length).join(' '));
console.log('total words: ' + D.reduce((a, q) => a + q.explanation.split(/\s+/).length, 0));
console.log('chapters: ' + JSON.stringify(D.reduce((a, q) => (a[q.chapter] = (a[q.chapter] || 0) + 1, a), {})));
if (D.some(q => q.imgAlt)) console.log('imgAlt (READ THIS BY EYE): ' + D.filter(q => q.imgAlt).map(q => q.id + ' = ' + JSON.stringify(q.imgAlt)).join(' | '));
process.exit(fail.length ? 1 : 0);
