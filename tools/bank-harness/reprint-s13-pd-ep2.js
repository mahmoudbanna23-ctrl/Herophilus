// Record section 13's reprints on the live entries they reprint, so the 29 staged questions that
// Model Final Exam 2 re-prints are never drafted a second time.
//
//   node tools/bank-harness/reprint-s13-pd-ep2.js            (dry run -- prints, writes nothing)
//   node tools/bank-harness/reprint-s13-pd-ep2.js --write
//
// FOUR THINGS HERE ARE NOT WHAT reprint-s12-pd-ep2.js DOES. Each was measured before it was written.
//
// 1. IT TOUCHES BOTH LIVE FILES. Twenty-five targets are pedep2-* in questions.peds.ep2.js and four
//    are pedep-* in questions.peds.ep.js. Part 1 closed at 705 and then folded to 704, and both files
//    carry bank:'endpoint' -- the split is two source PDFs, not two banks -- so a section-13 page
//    that re-prints a part-1 question is a within-bank reprint exactly like a part-2 one. The s12
//    pass reads and rewrites one file and would have silently found four of these targets missing.
//
// 2. TWO CLAUSE SHAPES, BECAUSE THE EXAM NAME IS AMBIGUOUS ACROSS THE TWO BOOKS. Both books print a
//    section called Model Final Exam 2: part1.pdf pp.1361-1425, and this one at part2.pdf
//    pp.1434-1593. On a part-2 entry the bare name is unambiguous, because the citation and the
//    reprint are in the same file. On a PART-1 entry it is not, so the clause names the file:
//    "reprinted in Pediatrics endpoint part2.pdf, Model Final Exam 2, p.1506". Without that, p.1506
//    reads as a page of part 1's own Model Final Exam 2, which is a real and different page.
//
// 3. THE GUARD AND THE CENSUS CANNOT KEY ON THE BARE EXAM NAME. Measured before writing: 33 live
//    part-1 sources already contain the string "Model Final Exam 2", because part 1 recorded its own
//    exam's reprints that way; part 2 contains 0. s12's guard is new RegExp(MARK).test(q.source),
//    which is already true for every part-1 target and would refuse all four. Both the guard and the
//    census therefore key on the exact clause planned for that entry, never on the name alone.
//
// 4. ONE LIVE ENTRY IS NAMED TWICE. n8 (p.1448) and n37 (p.1506) both reprint pedep-mf3-29 -- the
//    same milestone question printed twice inside one exam, once with a 3/6/9/12/15-month ladder and
//    once with the live 4/6/9/13/16, keying 9 months in both. So 29 verdicts map to 28 distinct
//    targets, and s12's uniqueness check (new Set(ids).size !== EXPECTED) is replaced by a check on
//    the pair (id, page) instead. pedep-mf3-29 ends with four recorded printings.
//
// Written with the Write tool: the Bash heredoc collapses \\ to \ and would eat these strings.
const fs = require('fs'), vm = require('vm'), cp = require('child_process');
const R = 'D:/claude os/Medical school/Herophilus/';
const D = R + 'app/data/';
const WRITE = process.argv.includes('--write');

const EP2 = 'questions.peds.ep2.js', EP1 = 'questions.peds.ep.js';

// The plan. `tail` is appended to the clause with a comma where a reader following the citation
// would otherwise find something different from what the live entry shows -- a rebuilt option
// ladder, an added option, a moved key, a unit rewritten. An empty tail means the two printings
// differ by nothing but spelling and punctuation, which this project transcribes silently.
const PLAN = [
  { n: 4,  p: 1440, id: 'pedep2-car-51', file: EP2,
    tail: 'with the stem reworded as a direct question; the options and the key are unchanged' },
  { n: 5,  p: 1442, id: 'pedep2-ren-34', file: EP2,
    tail: 'with the stem paraphrased; the options and the key are unchanged' },
  { n: 7,  p: 1446, id: 'pedep2-hem-48', file: EP2,
    tail: 'with the stem reworded and the key printed as \u03b2-thalassemia minor' },
  { n: 8,  p: 1448, id: 'pedep-mf3-29',  file: EP1,
    tail: 'where the age ladder is printed as 3, 6, 9, 12 and 15 months rather than 4, 6, 9, 13 and 16; the key 9 months is unchanged' },
  { n: 13, p: 1458, id: 'pedep2-car-40', file: EP2,
    tail: 'with a rebuilt set of five options and the key printed third; the key text Streptococcus viridans is unchanged' },
  { n: 14, p: 1460, id: 'pedep2-res-47', file: EP2,
    tail: 'with a rebuilt set of four options and the key printed third; the key text Persistent bacterial bronchitis is unchanged' },
  { n: 15, p: 1462, id: 'pedep2-mal-23', file: EP2, tail: '' },
  { n: 17, p: 1466, id: 'pedep2-ren-13', file: EP2,
    tail: 'where the white cell count is printed as 50\u2013100/mm\u00b3' },
  { n: 18, p: 1468, id: 'pedep2-res-8',  file: EP2, tail: '' },
  { n: 19, p: 1470, id: 'pedep2-car-12', file: EP2,
    tail: 'with a fifth option, Mitral regurgitation, added' },
  { n: 22, p: 1476, id: 'pedep2-end-4',  file: EP2,
    tail: 'with a fifth option, Inflammatory bowel disease, added' },
  { n: 23, p: 1478, id: 'pedep2-ren-26', file: EP2, tail: '' },
  { n: 24, p: 1480, id: 'pedep2-liv-7',  file: EP2, tail: '' },
  { n: 25, p: 1482, id: 'pedep2-neu-21', file: EP2, tail: '' },
  { n: 27, p: 1486, id: 'pedep2-ren-42', file: EP2,
    tail: 'where the boy is named Finlay, a birthday party at a local farm is given as the exposure, and every laboratory value is printed in SI units with its reference range' },
  { n: 28, p: 1488, id: 'pedep2-liv-4',  file: EP2, tail: '' },
  { n: 37, p: 1506, id: 'pedep-mf3-29',  file: EP1, tail: '' },
  { n: 38, p: 1508, id: 'pedep-mf3-31',  file: EP1, tail: '' },
  { n: 41, p: 1514, id: 'pedep-mf3-34',  file: EP1, tail: '' },
  { n: 42, p: 1516, id: 'pedep-mf3-37',  file: EP1, tail: '' },
  { n: 61, p: 1555, id: 'pedep2-end-8',  file: EP2,
    tail: 'where every option is printed with a leading article' },
  { n: 66, p: 1565, id: 'pedep2-ren-38', file: EP2,
    tail: 'where the fourth option is printed as High serum cholesterol and triglycerides' },
  { n: 70, p: 1573, id: 'pedep2-gen-28', file: EP2, tail: '' },
  { n: 71, p: 1575, id: 'pedep2-car-3',  file: EP2, tail: '' },
  { n: 76, p: 1585, id: 'pedep2-hem-51', file: EP2,
    tail: 'with a rebuilt set of five options and anaemia in the British spelling; the key text is unchanged' },
  { n: 77, p: 1587, id: 'pedep2-end-24', file: EP2,
    tail: 'with a fifth option, Once daily long-acting insulin, inserted first so the key moves to third, and the key printed as Basal bolus' },
  { n: 78, p: 1589, id: 'pedep2-nd-4',   file: EP2, tail: '' },
  { n: 79, p: 1591, id: 'pedep2-nd-5',   file: EP2, tail: '' },
  { n: 80, p: 1593, id: 'pedep2-nd-6',   file: EP2, tail: '' },
];
const EXPECTED = 29;

// The five key texts that differ between the live entry and the exam printing. Every one was read
// off both printings before it was listed; an unlisted difference stops the run, because a key that
// moved for a real reason is a different question and must not be folded into this one.
const KEYTEXT_OK = {
  7:  ['Beta thalassemia minor', '\u03b2-thalassemia minor',
       'British-form spelling of the same organism-free diagnosis, p.1446'],
  27: ['Hemolytic-uremic syndrome', 'Haemolytic-uraemic syndrome',
       'British-form spelling, p.1486'],
  61: ['Markedly raised plasma 17\u03b1-hydroxyprogesterone', 'A markedly raised plasma 17\u03b1-hydroxyprogesterone',
       'the exam prints a leading article on every option, p.1555'],
  76: ['Iron deficiency anemia', 'Iron deficiency anaemia',
       'British-form spelling, p.1585'],
  77: ['Basal-bolus regimen', 'Basal bolus',
       'the same regimen named without the word regimen, p.1587'],
};

// The three staged entries whose key sits at a different INDEX from the live entry, each because the
// exam rebuilt or extended the option ladder. Listed so an unlisted index move stops the run.
const KEYINDEX_OK = {
  13: [0, 2, 'the exam prints five options and puts Streptococcus viridans third'],
  14: [0, 2, 'the exam rebuilt the ladder and puts Persistent bacterial bronchitis third'],
  77: [1, 2, 'the exam inserts Once daily long-acting insulin first'],
};

const ap = s => String(s).replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"');
const flat = t => ap(t).toLowerCase().replace(/[.,;:]/g, '').replace(/\s+/g, ' ').trim();

function clauseFor(F) {
  // A part-1 target must name the file: part1.pdf prints its own Model Final Exam 2 and p.1506 is a
  // real page of it. A part-2 target is already in the file the exam lives in.
  const where = F.file === EP1
    ? 'reprinted in Pediatrics endpoint part2.pdf, Model Final Exam 2, p.' + F.p
    : 'reprinted in Model Final Exam 2, p.' + F.p;
  return F.tail ? where + ', ' + F.tail : where;
}

// Structural block scan -- three entry formats live in these two files and a prefix match on one of
// them silently misses the others. Measured: /^\{/ opens and /\},\s*$/ closes count 704 and 540,
// exactly what the two arrays load.
function entryBlock(lines, id) {
  const pats = ["id:'" + id + "'", 'id:"' + id + '"', "id: '" + id + "'", 'id: "' + id + '"'];
  let start = -1, end = -1, open = -1;
  for (let i = 0; i < lines.length; i++) {
    if (/^\{/.test(lines[i])) open = i;
    if (open !== -1 && pats.some(p => lines[i].indexOf(p) !== -1)) {
      if (start !== -1) throw new Error('id appears in two entries: ' + id);
      start = open;
      for (let j = start; j < lines.length; j++) if (/\},\s*$/.test(lines[j])) { end = j; break; }
      if (end === -1) throw new Error('no closing "}," found for ' + id);
      if (end < i) throw new Error('block for ' + id + ' closed before its id line');
    }
  }
  if (start === -1) throw new Error('entry not found: ' + id);
  return { start, end };
}

// Six targets already end in a parenthetical (an earlier reprint, or a box printed alone). Merge
// into it rather than opening a second one, so a four-printing entry reads as one list.
function mergeCitation(line, clause) {
  const c = line.indexOf('source:');
  if (c === -1) throw new Error('not a source line: ' + line);
  const m = /['"]/.exec(line.slice(c));
  if (!m) throw new Error('no opening quote on source line: ' + line);
  const q = m[0];
  if (clause.indexOf(q) !== -1) throw new Error('clause contains the delimiter ' + q + ': ' + clause);
  const open = c + m.index;
  const close = line.lastIndexOf(q);
  if (close <= open) throw new Error('no closing quote on source line: ' + line);
  const inner = line.slice(open + 1, close);
  const neu = /\)$/.test(inner) ? inner.slice(0, -1) + '; ' + clause + ')' : inner + ' (' + clause + ')';
  return line.slice(0, open + 1) + neu + line.slice(close);
}

function loadLive(f, v) {
  vm.runInThisContext(fs.readFileSync(D + f, 'utf8'), { filename: f });
  const a = globalThis[v] || [], o = [];
  for (let i = 0; i < a.length; i++) if (i in a) o.push(a[i]);
  return { n: o.length, holes: a.length - o.length, all: o };
}

// ---- read the staging and the two live files ----------------------------------------------------
const STAGE = R + 'content/peds/qb-pages/endpoint-p2-s13-mfe2.array.js';
vm.runInThisContext(fs.readFileSync(STAGE, 'utf8'), { filename: STAGE });
const STAGED = (globalThis.PEDEP2_S13_STAGED || []).filter(Boolean);
if (STAGED.length !== 80) throw new Error('staging holds ' + STAGED.length + ' entries, expected 80');

const before2 = loadLive(EP2, 'Q_PEDS_EP2'), before1 = loadLive(EP1, 'Q_PEDS_EP');
const byId = new Map();
for (const q of before2.all) byId.set(q.id, { f: EP2, q });
for (const q of before1.all) byId.set(q.id, { f: EP1, q });

// ---- checks before anything is rewritten --------------------------------------------------------
if (PLAN.length !== EXPECTED) throw new Error('plan holds ' + PLAN.length + ', expected ' + EXPECTED);

// Not id-uniqueness: one live entry is named twice on purpose. It is the (id, page) pair that must
// be unique, because that pair is what the clause records.
const pairs = new Set(PLAN.map(F => F.id + '@' + F.p));
if (pairs.size !== EXPECTED) throw new Error('duplicate (id, page) in the plan: ' + pairs.size + ' of ' + EXPECTED);

let fail = 0;
for (const F of PLAN) {
  const s = STAGED.find(x => x.n === F.n);
  if (!s) { console.log('FAIL n' + F.n + ': not in the staging'); fail++; continue; }
  if (s.p !== F.p) { console.log('FAIL n' + F.n + ': staged p.' + s.p + ', plan says p.' + F.p); fail++; continue; }
  if (s.p < 1434 || s.p > 1593) { console.log('FAIL n' + F.n + ': p.' + s.p + ' is outside section 13'); fail++; continue; }

  const hit = byId.get(F.id);
  if (!hit) { console.log('FAIL n' + F.n + ': target ' + F.id + ' is not live'); fail++; continue; }
  if (hit.f !== F.file) { console.log('FAIL n' + F.n + ': ' + F.id + ' lives in ' + hit.f + ', plan says ' + F.file); fail++; continue; }
  const q = hit.q;

  // The key must agree, by text and by index, or be an adjudicated and listed exception.
  const liveKey = q.options[q.answer], examKey = s.opts[s.key];
  if (flat(liveKey) !== flat(examKey)) {
    const ok = KEYTEXT_OK[F.n];
    if (!ok || flat(ok[0]) !== flat(liveKey) || flat(ok[1]) !== flat(examKey)) {
      console.log('FAIL n' + F.n + ' ' + F.id + ': key text differs and is not adjudicated');
      console.log('     live "' + liveKey + '"  exam "' + examKey + '"');
      fail++; continue;
    }
  }
  if (q.answer !== s.key) {
    const ok = KEYINDEX_OK[F.n];
    if (!ok || ok[0] !== q.answer || ok[1] !== s.key) {
      console.log('FAIL n' + F.n + ' ' + F.id + ': key index live ' + q.answer + ' exam ' + s.key + ', not adjudicated');
      fail++; continue;
    }
  }

  // Idempotency, keyed on the exact clause. The bare exam name is useless as a guard: 33 part-1
  // sources already contain it.
  const clause = clauseFor(F);
  if (q.source.indexOf(clause) !== -1) {
    console.log('FAIL n' + F.n + ' ' + F.id + ': this clause is already on the entry -- the pass has run');
    fail++; continue;
  }
  console.log('n' + String(F.n).padEnd(3) + ' p.' + F.p + ' -> ' + F.id.padEnd(15) + ' ' + hit.f.replace('questions.peds.', ''));
  console.log('     ' + clause);
}
if (fail) { console.log('\n' + fail + ' CHECKS FAILED. Nothing written.'); process.exit(1); }

const staged = new Set(PLAN.map(F => F.n));
const draft = [];
for (let n = 1; n <= 80; n++) if (!staged.has(n)) draft.push(n);
console.log('');
console.log(EXPECTED + ' reprints across ' + new Set(PLAN.map(F => F.id)).size + ' live entries');
console.log('to draft: ' + draft.length + ' -- n' + draft.join(', n'));
console.log('');

// ---- rewrite -----------------------------------------------------------------------------------
const files = {};
for (const f of [EP2, EP1]) files[f] = fs.readFileSync(D + f, 'utf8').split('\n');

for (const F of PLAN) {
  const lines = files[F.file];
  const b = entryBlock(lines, F.id);
  let si = -1;
  for (let i = b.start; i <= b.end; i++) if (/^\s*source:/.test(lines[i])) { si = i; break; }
  if (si === -1) throw new Error('no source line inside ' + F.id);
  lines[si] = mergeCitation(lines[si], clauseFor(F));
}

if (!WRITE) { console.log('DRY RUN. Nothing written. Re-run with --write.'); process.exit(0); }

for (const f of [EP2, EP1]) fs.writeFileSync(D + f, files[f].join('\n'));
console.log('wrote both files');

// ---- verify from disk, not from memory ----------------------------------------------------------
for (const f of [EP2, EP1]) {
  const r = cp.spawnSync(process.execPath, ['--check', D + f], { encoding: 'utf8' });
  console.log('node --check ' + f + ': ' + (r.status === 0 ? 'OK' : 'FAILED\n' + r.stderr));
  if (r.status !== 0) process.exit(1);
}

const after2 = loadLive(EP2, 'Q_PEDS_EP2'), after1 = loadLive(EP1, 'Q_PEDS_EP');
console.log('part 2: ' + before2.n + ' -> ' + after2.n + ' entries, ' + after2.holes + ' holes');
console.log('part 1: ' + before1.n + ' -> ' + after1.n + ' entries, ' + after1.holes + ' holes');
if (after2.n !== before2.n || after1.n !== before1.n || after2.holes || after1.holes) {
  console.log('ENTRY COUNT MOVED. This pass rewrites source strings and must not add or drop an entry.');
  process.exit(1);
}

const live = new Map();
for (const q of after2.all.concat(after1.all)) live.set(q.id, q);
let bad = 0;
for (const F of PLAN) {
  const q = live.get(F.id), clause = clauseFor(F);
  const n = q ? q.source.split(clause).length - 1 : 0;
  if (n !== 1) { console.log('FAIL ' + F.id + ' p.' + F.p + ': clause present ' + n + ' times'); bad++; }
}
// Census: every clause this pass writes, and no stray one. Counted from the planned clauses
// themselves rather than from the exam name -- part 1 already carried 33 unrelated mentions of that
// name before this pass ran, so the name counts nothing. 29 clauses land on 28 entries: 24 in part 2
// and 4 in part 1, one of the four (pedep-mf3-29) taking two.
//
// ⚠️ EACH FILE IS SCANNED ONLY FOR ITS OWN ROWS, and the reason is a live collision, not tidiness.
// pedep-inf-73 in PART 1 already reads "reprinted in Model Final Exam 2, p.1468" -- byte-identical
// to the clause this pass writes on pedep2-res-8 -- because a bare exam name means the book the
// entry is in, and part1.pdf p.1468 is a febrile-infant question while part2.pdf p.1468 is Norah's
// URTI. Scanning both files for all 29 clauses counted that pre-existing part-1 string as a stray
// and failed a run that was entirely correct. Same page number, same exam name, two different books.
const clausesIn = (arr, rows) => {
  let e = 0, c = 0;
  for (const q of arr) {
    let k = 0;
    for (const F of rows) k += q.source.split(clauseFor(F)).length - 1;
    if (k) { e++; c += k; }
  }
  return { e, c };
};
const g2 = clausesIn(after2.all, PLAN.filter(F => F.file === EP2));
const g1 = clausesIn(after1.all, PLAN.filter(F => F.file === EP1));
console.log('part 2: ' + g2.e + ' entries carry ' + g2.c + ' section-13 clauses (expect 24 and 24)');
console.log('part 1: ' + g1.e + ' entries carry ' + g1.c + ' section-13 clauses (expect 4 and 5)');
if (g2.e !== 24 || g2.c !== 24 || g1.e !== 4 || g1.c !== 5) { console.log('CENSUS MISMATCH'); bad++; }

console.log(bad === 0 ? 'all ' + EXPECTED + ' reprints recorded and verified on disk' : bad + ' CHECKS FAILED');
process.exit(bad === 0 ? 0 : 1);
