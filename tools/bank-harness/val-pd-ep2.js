// Validate a peds ENDPOINT PART 2 draft against its staging record.
//   node tools/bank-harness/val-pd-ep2.js <section>              # single-file draft  (*.draft.js)
//   node tools/bank-harness/val-pd-ep2.js <section> <A|B|...>    # a half             (*.draft-X.js)
//
// Copied from val-pd-ep.js on 2026-09-04 and retargeted at PART 2. Three banks' worth of tools
// now sit in this folder and each writes a DIFFERENT live file, so running the wrong one is the
// standing hazard:
//   *-pd.js     -> app/data/questions.peds.js      (House, Chat B)
//   *-pd-ep.js  -> app/data/questions.peds.ep.js   (endpoint part 1, the part-1 chat)
//   *-pd-ep2.js -> app/data/questions.peds.ep2.js  (endpoint part 2, THIS pair)
// Part 2 is the same bank (bank:'endpoint') in its own file, so two chats can write at once.
//
// What differs from part 1: the id prefix is pedep2-, the source string names part2.pdf, and
// figures are q-pd-ep2-<page>. That last one is not cosmetic -- part 2's page numbers restart
// at 1, so a q-pd-ep-<page> basename would COLLIDE with a part-1 crop of the same number.
//
// What differs from House, all of it derived from the endpoint staging record:
//   - the record's `key` is a NUMERIC index (key:3), not a letter
//   - `expl` holds the printed box verbatim, or '' where the page prints none -- so which
//     closing marker an entry must carry is decided by the record, not asserted here
//   - `box` names the page an overflowed box was printed on; the source must name it too
//   - figures are q-pd-ep2-<page>, not q-pd-hd-<page>
//   - there is no "(Part I, ch.N QN)" source tail; the source is the file and the page
//
// Written with the Write tool, not a heredoc: the heredoc collapses \\ to \ and would eat \s+.
const fs = require('fs'), vm = require('vm');
const R = 'D:/claude os/Medical school/Herophilus/';

// PART 2's OWN SECTIONS. Agreed with the user 2026-09-04 against
// content/peds/qb-pages/endpoint-p2-section-map.md, which carries the measurement behind every
// page range here and must be read before trusting the counts.
//
// `pages` and `ans` are DOCUMENTATION, never read by this file. They are here because the page
// range is what reprint-pd-ep2.js takes by hand, and because `ans` is the index's `answered`
// count -- which is NOT the question count. A summary slide with lettered bullets carries yellow
// and reads as options, so `answered` runs high; the section map lists the 15 pages where it
// does. Re-measure a section's true count as it is staged; never quote `ans` as a count.
//
// `chapter` is documentation only in EVERY entry -- each question's own chapter is checked
// against the real chapter set from modules.js (chapIds, below), never against this field. Every
// part-2 section lands on a pediatrics chapter that already exists, so modules.js is untouched.
const SEC = {
  1: { prefix: 'pedep2-nd-', file: 'endpoint-p2-s01-normal-dev.array.js', svar: 'PEDEP2_S01_STAGED',
       draft: 'endpoint-p2-s01-normal-dev.draft', chapter: 'normal-dev', pages: [5, 75], ans: 28 },
  // Developmental problems spans dev-problems and dev-nd (the neurodevelopmental chapter);
  // both exist, both are legitimate here.
  2: { prefix: 'pedep2-dp-', file: 'endpoint-p2-s02-dev-problems.array.js', svar: 'PEDEP2_S02_STAGED',
       draft: 'endpoint-p2-s02-dev-problems.draft', chapter: 'dev-problems', pages: [76, 154], ans: 30 },
  3: { prefix: 'pedep2-gen-', file: 'endpoint-p2-s03-genetics.array.js', svar: 'PEDEP2_S03_STAGED',
       draft: 'endpoint-p2-s03-genetics.draft', chapter: 'genetics', pages: [155, 244], ans: 42 },
  // The biggest body section, 207 pages. Splits across haematology and haem-bleeding; it needed
  // FOUR staging parts (A-D) through merge-parts-ep2.js.
  // ⚠️ `ans` here is 90, NOT the OCR index's 95 -- CLOSED 2026-09-04, every one of the five
  // reconciled on the page: 255/256/257 are lettered content slides whose bullets carry yellow and
  // read as options; 322 is the index's own tag being WRONG (an ordinary unanswered printing of
  // Q27 -- p.323 is the real answered page); 420 is the second half of the exact duplicate reprint
  // at 419+420, staged once from the fuller printing. ⚠️ The two genuine overflow boxes (312, 321)
  // are NOT among the five -- the index classified them `notes`, so they never inflated 95 at all.
  // A shortfall is reconciled by DIFFERENCING THE PAGE SETS, never by subtracting a category.
  // `folded` lists the staged entries adjudicated as duplicate reprints and DROPPED at drafting --
  // n53 (p.375) into n86 (p.442), n89 (p.448) into n57 (p.383), n90 (p.450) into n82 (p.434).
  // ⚠️ It exists because the shared-menu detector derives its groups from the STAGED array, which
  // still holds the discards, and so it demanded that pedep2-hem-86 point at a pedep2-hem-53 that
  // will never exist -- a hard FAILURE on a correct file, 2026-09-04. A fold and a genuine sibling
  // pairing look identical to an option-menu comparison; only the adjudication tells them apart, so
  // the adjudication has to be recorded here for the tool to see it.
  4: { prefix: 'pedep2-hem-', file: 'endpoint-p2-s04-haematology.array.js', svar: 'PEDEP2_S04_STAGED',
       draft: 'endpoint-p2-s04-haematology.draft', chapter: 'haematology', pages: [245, 451], ans: 90,
       folded: [53, 89, 90] },
  5: { prefix: 'pedep2-res-', file: 'endpoint-p2-s05-respiratory.array.js', svar: 'PEDEP2_S05_STAGED',
       draft: 'endpoint-p2-s05-respiratory.draft', chapter: 'respiratory', pages: [452, 606], ans: 65 },
  // ⚠️ Section 6's `ans` was 85 until 2026-09-05 and 85 was WRONG -- it is the OCR index's `answered`
  // count, and pp.613, 617, 618 and 619 are outline slides inside the opening teaching notes, read by
  // eye against 612/614/615/616/620 before staging began. `answered` is a yellow-pixel threshold and
  // this book's notes slides cross it. The section stages 81 and n:1 is p.629.
  // `chapter: 'cardiac'` here is documentation only, and for this section it is documentation of the
  // majority, not of the rule: the section spreads over `cardiac`, `cardiac-cyan` and `cardiac-acq`,
  // and two entries leave cardiology entirely (scarlet fever -> `infection-rash`, shock recognition
  // -> `emergencies`). The rulings are in the drafting prompts; nothing here checks them.
  // `folded` is the two within-bank reprints dropped at drafting: n57 (p.743) into n26 (p.680), and
  // n73 (p.775) into n32 (p.693). Both kept printings carry the fuller explanation box.
  6: { prefix: 'pedep2-car-', file: 'endpoint-p2-s06-cardiac.array.js', svar: 'PEDEP2_S06_STAGED',
       draft: 'endpoint-p2-s06-cardiac.draft', chapter: 'cardiac', pages: [607, 792], ans: 81,
       folded: [57, 73] },
  // Section 7's four within-section folds. pp.876-928 systematically re-run the pp.820-874
  // material, so the candidates were found with a Jaccard sweep over stem tokens; a first-60-
  // character comparison caught only two of the eight pairs it turned up. Folded, with the kept
  // printing first: n49 into n36 (stem byte-identical, options differ only in spelling, n36 keeps
  // the box and n49 prints none), n47 into n39 (same four options in order, abbreviated, key
  // unmoved), n51 into n31 (options differ by one hyphen, explanation byte-identical at 157
  // chars), and n30 into n1 (the same five options REORDERED, which moves the key from index 2 to
  // index 3; the second printing also renames the child Emily to Iman and adds limping, both
  // recorded in the kept entry rather than merged into its stem).
  //
  // Four further pairs the same sweep raised are NOT folded, and folding any of them would have
  // destroyed a correct question: n41/n54 both ask about a complication of minimal change
  // nephrotic syndrome but one asks the most common (repeated infections) and the other a major
  // one (thrombosis); n29/n50 are mirror images, glomerular causes EXCEPT against non-glomerular
  // causes EXCEPT; n11/n43 and n13/n35 re-set one vignette against a DIFFERENT option set, not a
  // reordered one -- the 4-option printing drops two real distractors and adds one the 5-option
  // printing never had. The line is: fold when the option set is the same question, pair when the
  // option set changes what is being discriminated.
  7: { prefix: 'pedep2-ren-', file: 'endpoint-p2-s07-renal.array.js', svar: 'PEDEP2_S07_STAGED',
       draft: 'endpoint-p2-s07-renal.draft', chapter: 'renal', pages: [793, 929], ans: 55,
       folded: [30, 47, 49, 51] },
  8: { prefix: 'pedep2-neu-', file: 'endpoint-p2-s08-neuro.array.js', svar: 'PEDEP2_S08_STAGED',
       draft: 'endpoint-p2-s08-neuro.draft', chapter: 'neurological', pages: [930, 1078], ans: 60 },
  9: { prefix: 'pedep2-end-', file: 'endpoint-p2-s09-endocrine.array.js', svar: 'PEDEP2_S09_STAGED',
       draft: 'endpoint-p2-s09-endocrine.draft', chapter: 'endocrine', pages: [1079, 1145], ans: 27 },
  10: { prefix: 'pedep2-liv-', file: 'endpoint-p2-s10-liver.array.js', svar: 'PEDEP2_S10_STAGED',
        draft: 'endpoint-p2-s10-liver.draft', chapter: 'liver', pages: [1146, 1210], ans: 20 },
  11: { prefix: 'pedep2-mal-', file: 'endpoint-p2-s11-malignant.array.js', svar: 'PEDEP2_S11_STAGED',
        draft: 'endpoint-p2-s11-malignant.draft', chapter: 'malignant', pages: [1211, 1269], ans: 23 },

  // ⚠️ SECTIONS 12-17 ARE MIXED-TOPIC: `chapter` is a LABEL ONLY. An entry here is filed by its
  // content in whatever chapter modules.js actually has. Sections 12-15 are the four model final
  // exams, 80 questions each, and they reprint the body sections -- part 1's Model Final Exam 1
  // was 30 reprints of 80. Run reprint-pd-ep2.js over a model exam BEFORE drafting it; a reprint
  // extends `source` and gets no new entry.
  12: { prefix: 'pedep2-mf1-', file: 'endpoint-p2-s12-mfe1.array.js', svar: 'PEDEP2_S12_STAGED',
        draft: 'endpoint-p2-s12-mfe1.draft', chapter: '(mixed)', pages: [1270, 1431], ans: 80 },
  13: { prefix: 'pedep2-mf2-', file: 'endpoint-p2-s13-mfe2.array.js', svar: 'PEDEP2_S13_STAGED',
        draft: 'endpoint-p2-s13-mfe2.draft', chapter: '(mixed)', pages: [1432, 1594], ans: 80 },
  14: { prefix: 'pedep2-mf3-', file: 'endpoint-p2-s14-mfe3.array.js', svar: 'PEDEP2_S14_STAGED',
        draft: 'endpoint-p2-s14-mfe3.draft', chapter: '(mixed)', pages: [1595, 1756], ans: 80 },
  15: { prefix: 'pedep2-mf4-', file: 'endpoint-p2-s15-mfe4.array.js', svar: 'PEDEP2_S15_STAGED',
        draft: 'endpoint-p2-s15-mfe4.draft', chapter: '(mixed)', pages: [1757, 1921], ans: 80 },

  // ⚠️ SECTIONS 16 AND 17 PRINT THE ANSWERED PAGE ONLY -- there is no unanswered twin, verified
  // by eye on p.1923 and p.1949. So every `answered` page here is one real question and `ans` is
  // right for once. Do not read the missing twin as a defect in the index.
  16: { prefix: 'pedep2-rm-', file: 'endpoint-p2-s16-recent-mod.array.js', svar: 'PEDEP2_S16_STAGED',
        draft: 'endpoint-p2-s16-recent-mod.draft', chapter: '(mixed)', pages: [1922, 1940], ans: 18 },
  17: { prefix: 'pedep2-ra-', file: 'endpoint-p2-s17-recent-add.array.js', svar: 'PEDEP2_S17_STAGED',
        draft: 'endpoint-p2-s17-recent-add.draft', chapter: '(mixed)', pages: [1941, 1949], ans: 8 },

  // SECTION 18, Exam Night Review, pp.1950-1992, HAS NO ENTRY AND MUST NOT GET ONE. It is 43
  // pages of prose revision cards -- 41 classify as notes, and the 2 that classify as `answered`
  // (pp.1977, 1984) are revision cards with lettered bullets, read and confirmed not to be
  // questions. There is nothing there to stage. It is left out of this table deliberately, so
  // that `node val-pd-ep2.js 18` fails loudly rather than inviting a section that does not exist.
};

// imgAlt must give MODALITY AND VIEW ONLY. Naming the finding answers the question --
// this mistake gave away six answers once. Broad list; add to it, never trim it.
const GIVEAWAY = /rickets|ricket|widen|fray|cupping|splay|rosary|bowing|metaphys|swell|deficien|scurvy|osteomalac|dilat|obstruct|atresia|stenos|volvulus|intussuscept|target sign|double bubble|perforat|free air|pneumoperit|megacolon|stricture|mass|tumour|tumor|inflamm|ulcer|polyp|varice|ascites|hernia|malrotat|coeliac|celiac|atroph|villous|hydroceph|ventriculomeg|myelomening|meningocele|encephalocele|spina bifida|neural tube|craniosynostos|macroceph|microceph|h(?:a)?emorrhag|h(?:a)?ematoma|infarct|isch(?:a)?em|calcif|midline shift|subdural|extradural|epidural|port-wine|caf(?:e|é)-au-lait|neurofibrom|tuberous|hypsarrhythm|spike|epileptiform|slow wave|papill(?:o)?edema|papilloedema|ptosis|squint|strabism|gower|wasting|fascicul|contractur/i;

const secNum = process.argv[2], which = process.argv[3];
const cfg = SEC[secNum];
if (!cfg || (which !== undefined && !/^[A-Z]$/.test(which))) {
  console.error('usage: node val-pd-ep2.js <' + Object.keys(SEC).join('|') + '> [half letter]');
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
const UNBOXED_MARK = 'Written for this bank — Pediatrics endpoint part2.pdf prints no explanation here.';
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
// A folded entry is never drafted, so it cannot anchor a table and cannot be pointed at. Drop the
// discards before grouping, or every fold manufactures a shared menu with its own survivor and the
// survivor is failed for not citing an id that does not exist.
const FOLDED = new Set(cfg.folded || []);
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

  if ((q.source || '').indexOf('Pediatrics endpoint part2.pdf') < 0) fail.push(q.id + ': source does not name Pediatrics endpoint part2.pdf');
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
    const want = 'q-pd-ep2-' + s.p;
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
    fail.push('BASENAME COLLISION: n:' + figPages[p].join(', n:') + ' all sit on p.' + p + ' and would share q-pd-ep2-' + p);
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
process.exit(fail.length ? 1 : 0);
