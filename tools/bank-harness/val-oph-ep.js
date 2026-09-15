// OPHTHALMOLOGY ENDPOINT ONLY — validator; this file writes nothing.
//   node tools/bank-harness/val-oph-ep.js --part <1|2> <section> [A|B|...]
// WARNING: tools alongside this one belong to DIFFERENT LIVE BANKS.
// --part 1 -> app/data/questions.ophtho.ep.js  / Q_OPHTHO_EP  / ophep-
// --part 2 -> app/data/questions.ophtho.ep2.js / Q_OPHTHO_EP2 / ophep2-
// NEVER use the pediatrics tools for ophthalmology or target a pediatrics file.
// Adapted from val-pd-ep2.js. Stems, options, numeric keys and printed defects stay
// verbatim. Explanation/overflow/straddle checks derive from staging, not counts.
// Written using the file-writing tool, never a shell heredoc: collapsing \\ to \
// would silently corrupt \s+ and Windows paths.
//
// Figure basenames are q-oph-ep-<page> for BOTH parts. Peds part 2 restarts
// page numbering at 1 and needs a different basename to avoid collisions.
// Ophthalmology is ONE continuous book with disjoint PDF ranges, so each PDF
// page is globally unique. Do not introduce q-oph-ep2-.
// Staged p/box and straddle notes use the source's printed page numbering.
// As in the model, crop basenames use staged p unless cfg.figPage records the
// page of a separately printed figure. A basename is a page label, not a renderer
// instruction: PDF rendering past the flip needs the separately pinned mapping.
//
// SEC is shared, never copied. ans and chapter are documentation only, including
// null values. Question chapters come from the real MODULES completion value.
// Section 3 carries the first two adjudicated ophthalmology folds (see sec-oph.js); no figure
// overrides have been adjudicated yet. The generic optional machinery remains, without any
// pediatrics exemptions.
'use strict';
const fs = require('fs'), vm = require('vm'), path = require('path');
const { SEC_P1, SEC_P2 } = require('./sec-oph.js');
const R = path.resolve(__dirname, '../..') + path.sep;
const BOOK = 'Opthalmology endpoint.pdf'; // the actual, deliberately uncorrected spelling
const TARGETS = Object.freeze({
  1: Object.freeze({ part: '1', prefix: 'ophep-', file: 'questions.ophtho.ep.js', svar: 'Q_OPHTHO_EP', pages: [6, 1390], sec: SEC_P1 }),
  2: Object.freeze({ part: '2', prefix: 'ophep2-', file: 'questions.ophtho.ep2.js', svar: 'Q_OPHTHO_EP2', pages: [1391, 2442], sec: SEC_P2 })
});

function die(message, code = 2) { console.error(message); process.exit(code); }
function parseArgs(args, mode) {
  let part, flip, write = false;
  const pos = [];
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--part') {
      if (part !== undefined || !/^[12]$/.test(args[i + 1] || '')) die('--part must occur once with value 1 or 2');
      part = args[++i];
    } else if (a === '--write' && mode === 'splice') {
      if (write) die('duplicate --write');
      write = true;
    } else if (a === '--flip' && mode === 'pagecov') {
      if (flip !== undefined || !/^\d+$/.test(args[i + 1] || '')) die('--flip requires the pinned PDF page (2151-2170)');
      flip = Number(args[++i]);
      if (flip < 2151 || flip > 2170) die('--flip must be in PDF pages 2151-2170');
    } else if (a.startsWith('-')) die('unknown option: ' + a);
    else pos.push(a);
  }
  if (!part) die('required: --part 1|2 (no default live target)');
  const target = TARGETS[part];
  if (mode === 'pagecov') {
    if (pos.length) die('usage: node pagecov-oph.js --part <1|2> [--flip <pdfpage>]');
    if (part === '1' && flip !== undefined) die('--flip is only valid with --part 2; part 1 has zero offset');
  } else {
    if (!pos.length || pos.length > (mode === 'val' ? 2 : 1) ||
        (pos[1] !== undefined && !/^[A-Z]$/.test(pos[1])))
      die('usage: node ' + (mode === 'val' ? 'val-oph-ep.js --part <1|2> <section> [half letter]' : 'splice-oph-ep.js --part <1|2> <section> [--write]'));
    if (!/^[1-9]\d*$/.test(pos[0]) || !Object.hasOwn(target.sec, pos[0]))
      die('section ' + pos[0] + ' is not in ophthalmology part ' + part);
    const cfg = target.sec[pos[0]];
    if (!cfg.prefix.startsWith(target.prefix) || path.basename(cfg.file) !== cfg.file ||
        path.basename(cfg.draft) !== cfg.draft || /[\\/]/.test(cfg.file + cfg.draft))
      die('unsafe section configuration for section ' + pos[0] + ', part ' + part);
  }
  return { target, part, flip, write, secNum: pos[0], which: pos[1], cfg: target.sec[pos[0]] };
}

// Classic scripts run in fresh vm contexts. A const is not a context property:
// evaluate MODULES as the completion value, just as the pediatrics validator does.
// No require/process/fs is supplied to data scripts.
function script(text, filename, tail = '') {
  const ctx = vm.createContext({});
  const value = vm.runInContext(text + tail, ctx, { filename, timeout: 1000 });
  return { ctx, value };
}
function dense(arr, label) {
  if (!Array.isArray(arr)) throw new Error(label + ': did not load as an array');
  for (let i = 0; i < arr.length; i++)
    if (!(i in arr) || !arr[i] || typeof arr[i] !== 'object' || Array.isArray(arr[i]))
      throw new Error(label + ': sparse hole or invalid row at index ' + i);
  return arr;
}
function loadDraft(text, filename) {
  const declaration = text.match(/\bvar\s+([A-Za-z_$][\w$]*)\s*=\s*\[/);
  const arr = declaration
    ? script(text, filename).ctx[declaration[1]]
    : script('[\n' + text.replace(/,\s*$/, '') + '\n]', filename).value;
  return { arr: dense(arr, filename), vn: declaration ? declaration[1] : '(bare fragment)' };
}
function loadArray(filename, svar) {
  return dense(script(fs.readFileSync(filename, 'utf8'), filename).ctx[svar], filename + ' / ' + svar);
}

// imgAlt must give MODALITY AND VIEW ONLY. Naming the finding answers the question --
// this mistake gave away six answers once. Broad list; add to it, never trim it.
const GIVEAWAY = /rickets|ricket|widen|fray|cupping|splay|rosary|bowing|metaphys|swell|deficien|scurvy|osteomalac|dilat|obstruct|atresia|stenos|volvulus|intussuscept|target sign|double bubble|perforat|free air|pneumoperit|megacolon|stricture|mass|tumour|tumor|inflamm|ulcer|polyp|varice|ascites|hernia|malrotat|coeliac|celiac|atroph|villous|hydroceph|ventriculomeg|myelomening|meningocele|encephalocele|spina bifida|neural tube|craniosynostos|macroceph|microceph|h(?:a)?emorrhag|h(?:a)?ematoma|infarct|isch(?:a)?em|calcif|midline shift|subdural|extradural|epidural|port-wine|caf(?:e|é)-au-lait|neurofibrom|tuberous|hypsarrhythm|spike|epileptiform|slow wave|papill(?:o)?edema|papilloedema|ptosis|squint|strabism|gower|wasting|fascicul|contractur/i;


function validate(argv) {
const { target, part, secNum, which, cfg } = parseArgs(argv, 'val');
console.log('OPHTHALMOLOGY ONLY: part ' + part + ', section ' + secNum + ' -> ' + target.file + ' / ' + target.svar + ' (validator is read-only)');
const S = loadArray(path.join(R, 'content/ophtho/qb-pages', cfg.file), cfg.svar);
const MODS = script(fs.readFileSync(path.join(R, 'app/data/modules.js'), 'utf8'), 'modules.js', '\n;MODULES').value;
if (!Array.isArray(MODS)) throw new Error('MODULES did not load');
const chapIds = new Set();
MODS.forEach(m => (m.groups || []).forEach(g => (g.chapters || []).forEach(c => chapIds.add(Array.isArray(c) ? c[0] : c.id))));
const fp = path.join(R, 'content/ophtho/qb-pages', cfg.draft + (which ? '-' + which : '') + '.js');
const { arr: D, vn } = loadDraft(fs.readFileSync(fp, 'utf8'), fp);
const holes = 0; // loadDraft fails on holes rather than merely reporting them.
const BOXED_MARK = 'The expansion above this line is written for this bank; the box itself is the endpoint file’s own.';
const UNBOXED_MARK = 'Written for this bank — Opthalmology endpoint.pdf prints no explanation here.';
const BOX_LEAD = '**The endpoint file prints this explanation:**';
const allowed = new Set(['id', 'module', 'chapter', 'bank', 'stem', 'options', 'answer',
  'explanation', 'objective', 'source', 'image', 'imgAlt']);
const BT = String.fromCharCode(96);
const norm = s => String(s || '').replace(/\s+/g, ' ').trim();
const fail = [], warn = [], notes = [];
const stagedNumbers = new Set();
for (const s of S) {
  if (!Number.isSafeInteger(s.n) || s.n < 1 || stagedNumbers.has(s.n)) throw new Error('invalid or duplicate staging n:' + s.n);
  stagedNumbers.add(s.n);
  if (typeof s.stem !== 'string' || !Array.isArray(s.opts) || !s.opts.length ||
      Array.from(s.opts).some(o => typeof o !== 'string')) throw new Error('staging n:' + s.n + ': invalid stem/options');
  if (s.key !== null && (!Number.isInteger(s.key) || s.key < 0 || s.key >= s.opts.length))
    throw new Error('staging n:' + s.n + ': key must be a zero-based index into opts or null; letters are forbidden');
  if (typeof s.expl !== 'string') throw new Error('staging n:' + s.n + ': expl must be verbatim text or empty string');
  if (!Number.isSafeInteger(s.p) || s.p < target.pages[0] || s.p > target.pages[1] + (part === '2' ? 1 : 0))
    throw new Error('staging n:' + s.n + ': page ' + s.p + ' outside part ' + part);
  if (s.box != null && (!Number.isSafeInteger(s.box) || s.box < 1))
    throw new Error('staging n:' + s.n + ': invalid overflow page');
}
for (const n of [...(cfg.folded || []), ...(cfg.reprints || [])])
  if (!stagedNumbers.has(n)) throw new Error('adjudicated discard has no staging row: n:' + n);
for (const q of D) {
  for (const k of ['id', 'stem', 'explanation', 'objective', 'source'])
    if (typeof q[k] !== 'string') throw new Error('draft: ' + k + ' must be a string');
  if (!Array.isArray(q.options) || Array.from(q.options).some(o => typeof o !== 'string'))
    throw new Error(q.id + ': options must be a dense string array');
  if (q.imgAlt != null && typeof q.imgAlt !== 'string') throw new Error(q.id + ': imgAlt must be text');
}
// ---- everything below is DERIVED FROM STAGING, not asserted here ----
const STRADDLE = new Set(S.filter(s => s.straddle === true).map(s => s.n));
S.forEach(s => {
  const marked = /STRADDLES THE PAGE BREAK/.test(s.note || '');
  if (marked && s.straddle !== true) fail.push('staging n:' + s.n + ': note carries the STRADDLES marker but the row has no straddle:true');
  if (!marked && s.straddle === true) fail.push('staging n:' + s.n + ': row says straddle:true but the note does not carry the STRADDLES marker');
});
const FIGURE = new Set(S.filter(s => s.fig && String(s.fig).trim()).map(s => s.n));

// Which page label names the crop for n. Normally the answered page; a section whose book prints
// a figure on a page of its own overrides it in SEC.figPage. Both the basename check and the
// collision check go through here, so the two can never disagree about which page a crop is from.
function figPageOf(n) {
  if (cfg.figPage && cfg.figPage[n] != null) return cfg.figPage[n];
  const s = S.find(x => x.n === n);
  return s && s.p;
}
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
// A folded entry is never drafted, so it cannot anchor a table and cannot be pointed at. Drop the
// discards before grouping, or every fold manufactures a shared menu with its own survivor and the
// survivor is failed for not citing an id that does not exist.
const FOLDED = new Set([...(cfg.folded || []), ...(cfg.reprints || [])]);
const menus = new Map();
S.filter(s => !FOLDED.has(s.n)).forEach(s => {
  const k = JSON.stringify(s.opts.map(o => String(o).toLowerCase().replace(/\s+/g, ' ').trim()).slice().sort());
  if (!menus.has(k)) menus.set(k, []);
  menus.get(k).push(s.n);
});
const SHARED = [...menus.values()].filter(g => g.length > 1).map(g => g.slice().sort((a, b) => a - b));

// ⚠️ EXACT MATCHING IS NOT ENOUGH. Section 4, 2026-09-04: n69 and n70 print the same four-option
// management ladder in the same order, differing only in that n69's first option reads "No action
// needed" and n70's reads "No action". One trimmed word, and the detector above saw two unrelated
// questions -- the drafter paired them by hand instead, which is exactly the manual catch this tool
// exists to remove. Report a near-miss as a WARNING and never as a failure: a menu one option away
// from another is often a genuine pairing and sometimes just two questions off the same syllabus,
// and only a person reading both can tell. The exact detector above still owns the hard failure.
const NEAR = [];
const pool = S.filter(s => !FOLDED.has(s.n));
const normed = new Map(pool.map(s => [s.n, s.opts.map(o => String(o).toLowerCase().replace(/\s+/g, ' ').trim()).slice().sort()]));
const alreadyGrouped = new Set(SHARED.flatMap(g => g.map(n => g.filter(m => m !== n).map(m => n + '/' + m)).flat()));
for (let i = 0; i < pool.length; i++) {
  for (let j = i + 1; j < pool.length; j++) {
    const a = normed.get(pool[i].n), b = normed.get(pool[j].n);
    if (a.length !== b.length) continue;
    const exact = a.filter((o, k) => o === b[k]).length;
    if (exact === a.length || exact < a.length - 1) continue;      // identical is SHARED's job; 2+ apart is not a near-miss
    if (alreadyGrouped.has(pool[i].n + '/' + pool[j].n)) continue;
    NEAR.push([pool[i].n, pool[j].n]);
  }
}
NEAR.forEach(([a, b]) => warn.push('near-identical option menus n:' + a + ' and n:' + b
  + ' -- one option apart. Read both: if it is the same menu, anchor the table at ' + cfg.prefix + a
  + ' and have ' + cfg.prefix + b + ' point at it. If the differing option changes what is asked, it is not a pairing.'));

const seen = new Map();
D.forEach(q => {
  if (!q.id.startsWith(cfg.prefix) || !/^[1-9][0-9]*$/.test(q.id.slice(cfg.prefix.length))) {
    fail.push(q.id + ': id must use section prefix ' + cfg.prefix + ' and a positive integer'); return;
  }
  const n = Number(q.id.slice(cfg.prefix.length));
  const s = S.find(x => x.n === n);
  if (!s) { fail.push(q.id + ': no staging row'); return; }
  seen.set(n, (seen.get(n) || 0) + 1);

  // Byte-identity against staging. No exemption: printed typos, curly quotes and en dashes
  // all survive verbatim, silently.
  if (q.stem !== s.stem) fail.push(q.id + ': stem differs from staging');
  if (JSON.stringify(q.options) !== JSON.stringify(s.opts)) fail.push(q.id + ': options differ from staging');
  const key = s.key; // zero-based integer or null; never convert a letter or guess
  if (q.answer !== key) fail.push(q.id + ': answer ' + q.answer + ' vs staged key ' + s.key);
  if (q.options.length !== s.opts.length) fail.push(q.id + ': ' + q.options.length + ' options vs ' + s.opts.length + ' staged');

  if (q.module !== 'ophtho') fail.push(q.id + ': module ' + q.module);
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

  if ((q.source || '').indexOf('Opthalmology endpoint.pdf') < 0) fail.push(q.id + ': source does not name Opthalmology endpoint.pdf');
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
    // The crop's page is the answered page UNLESS the section config overrides it -- see `figPage`
    // in SEC. An override must be an explicitly recorded figure-page label.
    const want = 'q-oph-ep-' + figPageOf(n);
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
  const p = figPageOf(n);
  (figPages[p] = figPages[p] || []).push(n);
});
Object.keys(figPages).forEach(p => {
  if (figPages[p].length > 1)
    fail.push('BASENAME COLLISION: n:' + figPages[p].join(', n:') + ' all sit on p.' + p + ' and would share q-oph-ep-' + p);
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

// A folded discard drafted anyway is a silent duplicate in the live bank -- the survivor and the
// reprint both present, under two ids, saying almost the same thing. Nothing downstream catches it.
[...FOLDED].forEach(n => {
  if (seen.has(n)) fail.push(cfg.prefix + n + ': n:' + n + ' was FOLDED and must not be drafted at all');
});
const missing = S.filter(s => !seen.has(s.n) && !FOLDED.has(s.n)).map(s => s.n);
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

return fail.length ? 1 : 0;
}
module.exports = { R, BOOK, TARGETS, parseArgs, script, dense, loadDraft, loadArray };
if (require.main === module) {
  try { process.exitCode = validate(process.argv.slice(2)); }
  catch (e) { console.error('VALIDATOR FAILED: ' + e.message); process.exitCode = 1; }
}
