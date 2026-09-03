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
  12: { prefix: 'pedhd-neuro-',  file: 'house-ch12-neurological.array.js',     svar: 'PEDHD_NEURO_STAGED',
        draft: 'house-ch12-neurological.draft-' },
  13: { prefix: 'pedhd-resp-',   file: 'house-ch13-respiratory.array.js',      svar: 'PEDHD_RESP_STAGED',
        draft: 'house-ch13-respiratory.draft-' },
  14: { prefix: 'pedhd-endo-',   file: 'house-ch14-endocrine.array.js',        svar: 'PEDHD_ENDO_STAGED',
        draft: 'house-ch14-endocrine.draft-' },
  15: { prefix: 'pedhd-alg-',    file: 'house-ch15-allergy.array.js',          svar: 'PEDHD_ALLERGY_STAGED',
        draft: 'house-ch15-allergy.draft-' },
  16: { prefix: 'pedhd-gp-',     file: 'house-ch16-growth.array.js',           svar: 'PEDHD_GROWTH_STAGED',
        draft: 'house-ch16-growth.draft-' },
};

// imgAlt must give MODALITY AND VIEW ONLY. Naming the finding answers the question --
// this mistake gave away six answers once. Broad list; add to it, never trim it.
const GIVEAWAY = /rickets|ricket|widen|fray|cupping|splay|rosary|bowing|metaphys|swell|deficien|scurvy|osteomalac|dilat|obstruct|atresia|stenos|volvulus|intussuscept|target sign|double bubble|perforat|free air|pneumoperit|megacolon|stricture|mass|tumour|tumor|inflamm|ulcer|polyp|varice|ascites|hernia|malrotat|coeliac|celiac|atroph|villous|hydroceph|ventriculomeg|myelomening|meningocele|encephalocele|spina bifida|neural tube|craniosynostos|macroceph|microceph|h(?:a)?emorrhag|h(?:a)?ematoma|infarct|isch(?:a)?em|calcif|midline shift|subdural|extradural|epidural|port-wine|caf(?:e|é)-au-lait|neurofibrom|tuberous|hypsarrhythm|spike|epileptiform|slow wave|papill(?:o)?edema|papilloedema|ptosis|squint|strabism|gower|wasting|fascicul|contractur|consolidat|hyperinflat|bronchogram|atelectas|collapse|opacit|infiltrat|effusion|pneumothorax|bronchiectas|steeple|thumbprint|epiglott|croup|pertussis|cystic fibrosis|clubbing|recession|indrawing|stridor|wheez|grunting|flaring|cyanos|erythema|exudate|purulen|bulging|hypertroph|adenoid|urticari|wheal|weal|annular|maculopapular|purpur|vesic|blister|macule|papule|eczema|excoriat|angio-?o?edema/i;
// ch.13 added the respiratory and ENT half of this list on 2026-09-03. The regex had NO term for
// any finding this chapter's six figures actually show -- tonsils, tympanic membrane, two chest
// X-rays and a photo of sternal recession -- so an imgAlt reading "chest X-ray showing lobar
// consolidation" or "sternal recession" would have passed the guard and answered its own question.
// "recession" is in the list deliberately: this chapter's own staging note describes n:10's figure
// that way, which is correct for a note and forbidden in an imgAlt. Modality and view only.
// ch.15 added the rash-morphology terms on 2026-09-03 for the same reason. Its one figure is a
// photograph of a rash and the question asks WHICH TERM DESCRIBES IT, so every one of the five
// printed options -- annular, maculopapular, purpuric, urticarial, vesicular -- is a giveaway word
// in an imgAlt, and the guard held none of them. Modality and view only.
// Add to this list, never trim it.

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

// Which page may a figure's crop be cut from? Normally the one page the question is printed on.
// A question that straddles the break is printed across two, and the figure may sit on either --
// so both are legal and the drafted basename is what says which. Returned as strings because
// staging stores p as a string.
function figPagesFor(s) {
  return s.straddle ? [String(s.p), String(Number(s.p) + 1)] : [String(s.p)];
}

// Shared option menus: group staging rows by their exact option ladder. Any group of
// two or more is a PAIRING -- the table is written once in the lowest-n member and the
// siblings must point at that id. A shared menu never folds questions.
//
// The grouping key is TYPOGRAPHICALLY NORMALISED, and ch.12 is why. n:8 prints
// "Lennox-Gastaut" with a hyphen while n:14/15/16 print "Lennox-Gastaut" with an en dash --
// one glyph, correctly transcribed either way. A byte-exact key split that one clinical menu
// into two groups and then failed n:15/n:16 for pointing at n:8 (the real lowest-numbered
// member) instead of n:14. The stored options stay byte-identical to staging; only this key
// is normalised, and only for dash forms, quote forms and whitespace. Order is NOT normalised
// -- a reordered ladder moves the key letter and is a different question.
function menuKey(opts) {
  return JSON.stringify(opts.map(o => String(o)
    .replace(/[‐-―−]/g, '-')
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/ /g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()));
}
const menus = new Map();
S.forEach(s => {
  const k = menuKey(s.opts);
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
  // Staging carries the printed key two ways: the hand-staged chapters (10-13) store the bare
  // printed LETTER, the Codex runner (14+) stores the 0-based INDEX. Resolve both to an index and
  // range-check it here -- nothing else in this file bounds q.answer, so a key that is null, a
  // stray type, or off the end of the option list must fail on this line or it fails nowhere.
  const sKey = typeof s.key === 'number' && Number.isInteger(s.key) ? s.key
             : typeof s.key === 'string' && s.key.length === 1 ? 'ABCDEFGHIJ'.indexOf(s.key)
             : -1;   // the length test is not decoration: indexOf('') is 0, so an EMPTY key used to
                     // resolve silently to option A and pass. It fails here now.
  if (sKey < 0 || sKey >= s.opts.length) fail.push(q.id + ': staged key ' + JSON.stringify(s.key) + ' does not resolve into ' + s.opts.length + ' options');
  else if (q.answer !== sKey) fail.push(q.id + ': answer ' + q.answer + ' vs printed key ' + s.key);
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
    // A page carrying more than one figure disambiguates with a lowercase letter suffix.
    // q-pd-hd-26a/b/c, -52a/b/c, -5a/b, -7a/b are already live and have been for weeks, so the
    // suffix is the established convention, not a new invention. The old rule demanded the bare
    // q-pd-hd-<page> unconditionally, which no chapter had yet contradicted because none had two
    // figures on one page. ch.13 has three such pages. Corrected 2026-09-03.
    // A basename names the page the CROP IS CUT FROM, not the page the question starts on. Those
    // are the same page except when a question straddles the break and the figure lands overleaf --
    // ch.14 n:3 starts on p.111 and its stem says the chart is "in the figure in the next page
    // (overleaf)"; the chart really is printed on p.112. Read against both page images 2026-09-03.
    // So a straddling question may name p or p+1, and nothing else may. Corrected 2026-09-03.
    const pages = figPagesFor(s);
    const want = pages.map(p => 'q-pd-hd-' + p).join(' or ');
    if (!pages.some(p => new RegExp('^q-pd-hd-' + p + '[a-z]?$').test(q.image || '')))
      fail.push(q.id + ': image should be ' + want + ' (optionally + <letter>), got ' + JSON.stringify(q.image));
    // Two legal pages means the machine cannot tell which is right, and a wrong basename sends the
    // cutter to a page the figure is not on. ch.14 n:3 was drafted q-pd-hd-111 on one run and
    // q-pd-hd-112 on the next; the chart is on p.112. Say so out loud rather than pass in silence.
    else if (pages.length > 1)
      warn.push(q.id + ': STRADDLER, page not machine-decidable -- basename claims the figure is on p.'
                + /^q-pd-hd-(\d+)/.exec(q.image)[1] + ' (legal: p.' + pages.join(' or p.')
                + '). CONFIRM AGAINST THE PAGE IMAGE.');
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

// Two figure questions on one page must not SHARE a basename -- but the fix is the letter suffix,
// not a ban. This block used to fail any such page outright while the rule above simultaneously
// DEMANDED the colliding bare basename, so a chapter with two figures on one page could not pass
// however it was written. That contradiction sat here undetected until ch.13, which has three such
// pages, ran through it. What matters is the actual collision, so test for that instead of for the
// shape that merely predicts one. Corrected 2026-09-03.
// Grouped by the page the crop is actually cut from, read off the drafted basename -- NOT by the
// question's staged page. A straddling question whose figure sits overleaf shares a page with the
// figures of the questions printed there, and it is those it can collide with. Keying this on s.p
// would have grouped it with the wrong page's figures and missed a real collision. 2026-09-03.
const figPages = {};
[...FIGURE].forEach(n => {
  const s = S.find(x => x.n === n);
  const q = D.find(x => x.id === cfg.prefix + n);
  const m = /^q-pd-hd-(\d+)[a-z]?$/.exec((q && q.image) || '');
  const p = m ? m[1] : String(s.p);   // no/blank basename already failed above; fall back to staging
  (figPages[p] = figPages[p] || []).push(n);
});
const seenBase = {};
D.forEach(q => { if (q.image) (seenBase[q.image] = seenBase[q.image] || []).push(q.id); });
Object.keys(seenBase).forEach(b => {
  if (seenBase[b].length > 1)
    fail.push('BASENAME COLLISION: ' + seenBase[b].join(', ') + ' all use ' + b +
              ' -- give each a distinct lowercase letter suffix');
});
// A page with several figures may not leave any of them on the bare basename: the bare form and a
// suffixed form on the same page still read as two names for one crop.
Object.keys(figPages).forEach(p => {
  if (figPages[p].length < 2) return;
  const bare = figPages[p].filter(n => {
    const q = D.find(x => x.id === cfg.prefix + n);
    return q && q.image === 'q-pd-hd-' + p;
  });
  if (bare.length)
    fail.push('p.' + p + ' carries figures on n:' + figPages[p].join(', n:') + ' -- n:' +
              bare.join(', n:') + ' must carry a letter suffix, not the bare basename');
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

// ---- the explanation is long enough to have explained anything ----
// The brief has always carried the budget (~250 words for straight recall, ~520 for a vignette,
// a defect, a divergence or a gap-fill) and nothing has ever measured it. ch.14 half A came back
// at 108-158 words an entry, mean 137, and passed every check in this file. The floors below are
// measured off what has already SHIPPED in questions.peds.js, not chosen: across ch.10-13 the
// lowest non-sibling explanation is 224 words (pedhd-neuro-24) and the lowest shared-menu sibling
// is 132 (pedhd-gastro-15). A sibling is legitimately short -- it points at the anchor's table and
// adds only its own discriminating token -- so it gets its own, lower floor.
// These are floors, not targets. Passing them is not the same as writing to the budget.
const SIB = new Set([].concat(...SHARED.map(g => g.slice(1))));
const FLOOR_SOLO = 200, FLOOR_SIB = 120;
D.forEach(q => {
  const n = Number(q.id.slice(cfg.prefix.length));
  const w = q.explanation.split(/\s+/).filter(Boolean).length;
  const floor = SIB.has(n) ? FLOOR_SIB : FLOOR_SOLO;
  if (w < floor)
    fail.push(q.id + ': explanation is ' + w + ' words, under the ' + floor +
              (SIB.has(n) ? ' floor for a shared-menu sibling' : ' floor') +
              ' -- the budget is ~250 for straight recall and ~520 for a vignette, defect or divergence');
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

// The brief and MEMORY.md both say "the splicer refuses unless its validator gate exits 0".
// Until 2026-09-03 this script printed FAILURES and then fell off the end -- exit 0 either way,
// so that gate had never once fired. splice-pd.js does not invoke this script at all; it runs
// its own independent checks. The claim of coupling was wrong. This makes the exit code real,
// so that a caller (or a human reading $?) gets the answer the docs promise.
if (fail.length) process.exitCode = 1;
