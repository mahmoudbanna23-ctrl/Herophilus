// Validate a peds House draft half against its staging record.
//   node tools/bank-harness/val-pd.js <chapter> <A|B>
//
// Generalised from val-pd10.js. The difference that matters: the chapter-specific facts
// (which questions straddle, which carry figures, which share an option menu, how many
// options each has) are DERIVED FROM THE STAGING RECORD rather than hardcoded here.
// val-pd10.js hardcoded STRADDLE = {2,5} and "n:1 is the only figure" and "5 options";
// each of those is a place the validator and the staging record could silently disagree.
//
// Written with the Write tool, not a heredoc: the heredoc collapses \\ to \ and would eat \s+.
const fs = require('fs'), vm = require('vm');
const R = 'D:/claude os/Medical school/Herophilus/';

const CH = {
  10: { prefix: 'pedhd-nutr-',   file: 'house-ch10-nutrition.array.js',        svar: 'PEDHD_NUTR_STAGED',
        draft: 'house-ch10-nutrition.draft-' },
  11: { prefix: 'pedhd-gastro-', file: 'house-ch11-gastroenterology.array.js', svar: 'PEDHD_GASTRO_STAGED',
        draft: 'house-ch11-gastroenterology.draft-' },
};

// imgAlt must give MODALITY AND VIEW ONLY. Naming the finding answers the question --
// this mistake gave away six answers once. Broad list; add to it, never trim it.
const GIVEAWAY = /rickets|ricket|widen|fray|cupping|splay|rosary|bowing|metaphys|swell|deficien|scurvy|osteomalac|dilat|obstruct|atresia|stenos|volvulus|intussuscept|target sign|double bubble|perforat|free air|pneumoperit|megacolon|stricture|mass|tumour|tumor|inflamm|ulcer|polyp|varice|ascites|hernia|malrotat|coeliac|celiac|atroph|villous/i;

const chNum = process.argv[2], which = process.argv[3];
const cfg = CH[chNum];
// ch.11 is split three ways, so the half letter is any single capital, not just A or B.
if (!cfg || !/^[A-Z]$/.test(which || '')) {
  console.error('usage: node val-pd.js <' + Object.keys(CH).join('|') + '> <half letter>');
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

const fp = 'content/peds/qb-pages/' + cfg.draft + which + '.js';
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

const fail = [], warn = [], notes = [];

// ---- everything below is DERIVED FROM STAGING, not asserted here ----

// A question straddles if its staging row SAYS SO IN A FIELD.
//
// This was originally derived by grepping the note for "straddle". That is wrong, and ch.11
// proved it: the note is prose, so the grep also matched "no straddle" and "wrongly flagged
// this one as a straddle" and returned 14 straddles where there are 6. ch.10 only escaped it
// by luck -- it happened to contain no negated mention. A boolean field cannot be negated.
const STRADDLE = new Set(S.filter(s => s.straddle === true).map(s => s.n));

// ...but a staging pass could write the prose marker and forget the field, which would put us
// straight back to a silent under-count. The marker is uppercase and deliberate; require the two
// to agree in both directions.
S.forEach(s => {
  const marked = /STRADDLES THE PAGE BREAK/.test(s.note || '');
  if (marked && s.straddle !== true) fail.push('staging n:' + s.n + ': note carries the STRADDLES marker but the row has no straddle:true');
  if (!marked && s.straddle === true) fail.push('staging n:' + s.n + ': row says straddle:true but the note does not carry the STRADDLES marker');
});

// A question carries a figure if its staging row has a non-empty fig field.
const FIGURE = new Set(S.filter(s => s.fig && String(s.fig).trim()).map(s => s.n));

// Shared option menus: group staging rows by their exact option ladder. Any group of
// two or more is a PAIRING -- the table is written once in the lowest-n member and the
// siblings must point at that id. A shared menu never folds questions.
const menus = new Map();
S.forEach(s => {
  const k = JSON.stringify(s.opts);
  if (!menus.has(k)) menus.set(k, []);
  menus.get(k).push(s.n);
});
const SHARED = [...menus.values()].filter(g => g.length > 1).map(g => g.slice().sort((a, b) => a - b));

D.forEach(q => {
  const n = Number(String(q.id).replace(cfg.prefix, ''));
  const s = S.find(x => x.n === n);
  if (!s) { fail.push(q.id + ': no staging row'); return; }

  // Byte-identity against staging. No exemption: printed typos, curly quotes and en dashes
  // all survive verbatim, silently.
  if (q.stem !== s.stem) fail.push(q.id + ': stem differs from staging');
  if (JSON.stringify(q.options) !== JSON.stringify(s.opts)) fail.push(q.id + ': options differ from staging');
  if (q.answer !== 'ABCDEFGHIJ'.indexOf(s.key)) fail.push(q.id + ': answer ' + q.answer + ' vs printed key ' + s.key);
  // Option count comes from staging, not from an assumption that every question has five.
  if (q.options.length !== s.opts.length) fail.push(q.id + ': ' + q.options.length + ' options vs ' + s.opts.length + ' staged');

  if (q.module !== 'pediatrics') fail.push(q.id + ': module ' + q.module);
  if (q.bank !== 'house') fail.push(q.id + ': bank ' + q.bank);
  if (!chapIds.has(q.chapter)) fail.push(q.id + ': UNKNOWN CHAPTER ' + q.chapter);

  // Where the book prints no explanation box, every explanation is authored and carries the marker.
  if (!q.explanation.trimEnd().endsWith(MARK)) fail.push(q.id + ': marker not final line');
  if (q.explanation.split(MARK).length - 1 !== 1) fail.push(q.id + ': marker appears more than once');
  if ((q.source || '').indexOf('Written for this bank') >= 0) fail.push(q.id + ': marker inside source');

  // A literal backtick opens a markdown code span in the app and swallows the rest of the
  // text. node --check never sees it. Parity is the only cheap instrument.
  if ((q.explanation.split(BT).length - 1) % 2) fail.push(q.id + ': ODD BACKTICK COUNT in explanation');

  // An explanation is addressed to a student, who has never seen the brief, the staging record
  // or the split. Five ch.11 explanations shipped "per the task prompt" / "as the brief asks" /
  // "one of this range's awkward assignments" and ALL FIVE PASSED -- nothing was looking for it.
  // The substance was right; only the framing was addressed to the drafter's reader instead of
  // the student's. Also catch n:<num>, which is staging notation: a sibling is named by its id
  // in backticks, the convention ch.10 set.
  const LEAK = /task prompt|per the prompt|as instructed|staging record|the brief (?:ask|say|require|want|call)|brief['’]s rule|\bhalf [ABC]\b|draft-[ABC]\b/i;
  const lk = LEAK.exec(q.explanation);
  if (lk) fail.push(q.id + ': DRAFTING-PROCESS LANGUAGE in explanation -- "' + lk[0] + '"');
  const nn = q.explanation.match(/\bn:[0-9]+/g);
  if (nn) fail.push(q.id + ': staging notation ' + [...new Set(nn)].join(' ') + ' in explanation -- name the sibling by its id in backticks');
  // "in this range" is how the drafter refers to their own half, but a clinical value can also
  // sit in a range, so this one is only worth a look.
  if (/\bin this range\b/i.test(q.explanation)) warn.push(q.id + ': "in this range" -- check it means a clinical range, not the drafted block');

  if ((q.source || '').indexOf('p.' + s.p) < 0) fail.push(q.id + ': source does not carry p.' + s.p);
  // The tail may close on ")" or continue with ";" or "," when a straddle note follows.
  // Anchor on the closer so Q1 cannot match Q15.
  if (!new RegExp('\\(Part I, ch\\.' + chNum + ' Q' + n + '[);,]').test(q.source || ''))
    fail.push(q.id + ': source lacks the (Part I, ch.' + chNum + ' Q' + n + ') tail');
  // A straddling entry's source must say where the crossing LANDED, which is the fact a reader
  // needs. Do not grep for the word "straddle": ch.11 n:23 wrote a strictly better line --
  // "with only the closing Answer: E. printed alone at the top of p.89" -- and this check failed
  // it for a vocabulary it never needed. The destination page comes from the staging marker.
  if (STRADDLE.has(n)) {
    const m = /STRADDLES THE PAGE BREAK p\.([0-9]+) -> p\.([0-9]+)/.exec(s.note || '');
    if (!m) fail.push('staging n:' + n + ': straddle marker does not carry a "p.<a> -> p.<b>" pair');
    else if ((q.source || '').indexOf('p.' + m[2]) < 0)
      fail.push(q.id + ': straddles onto p.' + m[2] + ' but source never names that page');
  }

  if (!q.objective || !q.objective.trim()) fail.push(q.id + ': objective empty');

  if (FIGURE.has(n)) {
    const want = 'q-pd-hd-' + s.p;
    if (q.image !== want) fail.push(q.id + ': image should be the basename ' + want + ', got ' + JSON.stringify(q.image));
    if (!q.imgAlt || !q.imgAlt.trim()) fail.push(q.id + ': imgAlt missing');
    // The crop is cut AFTER drafting, so a missing file is a warning here, not a failure.
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

// Two figure questions on one page would collide on the q-pd-hd-<page> basename.
const figPages = {};
[...FIGURE].forEach(n => {
  const p = S.find(x => x.n === n).p;
  (figPages[p] = figPages[p] || []).push(n);
});
Object.keys(figPages).forEach(p => {
  if (figPages[p].length > 1)
    fail.push('BASENAME COLLISION: n:' + figPages[p].join(', n:') + ' all sit on p.' + p + ' and would share q-pd-hd-' + p);
});

// A shared option menu pairs questions; it never folds them. The comparative table lives
// once, in the lowest-numbered member, and every sibling points at that id.
SHARED.forEach(group => {
  const anchor = cfg.prefix + group[0];
  group.slice(1).forEach(n => {
    const q = D.find(x => x.id === cfg.prefix + n);
    if (q && q.explanation.indexOf(anchor) < 0)
      fail.push(q.id + ': shares the n:' + group.join('/n:') + ' option menu but does not point at ' + anchor);
  });
  notes.push('shared menu n:' + group.join(', n:') + ' -> table anchored at ' + anchor);
});

console.log('ch.' + chNum + ' draft-' + which + '  length ' + D.length + '  holes ' + holes + '  var ' + vn);
console.log('derived from staging: straddles ' + (STRADDLE.size ? [...STRADDLE].join(',') : 'none')
  + ' | figures ' + (FIGURE.size ? [...FIGURE].join(',') : 'none')
  + ' | shared menus ' + (SHARED.length || 'none'));
if (notes.length) console.log('  ' + notes.join('\n  '));
if (warn.length) console.log('warnings:\n  ' + warn.join('\n  '));
console.log(fail.length ? 'FAILURES:\n  ' + fail.join('\n  ') : 'ALL CHECKS PASSED');
console.log('words: ' + D.map(q => q.id.replace(cfg.prefix, '') + ':' + q.explanation.split(/\s+/).length).join(' '));
console.log('total words: ' + D.reduce((a, q) => a + q.explanation.split(/\s+/).length, 0));
console.log('chapters: ' + JSON.stringify(D.reduce((a, q) => (a[q.chapter] = (a[q.chapter] || 0) + 1, a), {})));
if (D.some(q => q.imgAlt)) console.log('imgAlt (READ THIS BY EYE): ' + D.filter(q => q.imgAlt).map(q => q.id + ' = ' + JSON.stringify(q.imgAlt)).join(' | '));
