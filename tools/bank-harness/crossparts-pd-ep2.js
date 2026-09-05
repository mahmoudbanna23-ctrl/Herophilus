// Cross-PART sweep: every LIVE peds endpoint part-2 entry against every LIVE part-1 entry.
//   node tools/bank-harness/crossparts-pd-ep2.js
//   node tools/bank-harness/crossparts-pd-ep2.js --self-test
//
// WHY THIS EXISTS, AND WHY IT DID NOT BEFORE. sweep-staged-ep2.js compares one STAGED section
// against the live files and, for part 1, only RECORDS what it finds: its header says nothing folds
// across the part-1/part-2 boundary while both chats are live. Part 1 closed on 2026-09-05 at 705
// entries, and the user then lifted that constraint explicitly. So the boundary is now foldable and
// the recorded hits have to be re-derived properly, because what was recorded is not the answer:
//
//   * The recorded hits are per-section leftovers. Only the sections swept after staging were ever
//     compared, and sections 1-11 were compared against part 1 only as it stood at the time --
//     part 1 was still growing. This tool compares the two files as they are NOW, whole against
//     whole, which is the only comparison that can be complete.
//   * Some recorded hits came from reprint-pd-ep2.js, which is an OCR PREFIX probe. A prefix probe
//     scores an editorial rewrite as a miss and section 2 measured that exactly: 6 found by prefix,
//     19 by verbatim stem. An OCR candidate is a page to open, never a fold.
//
// PART 1 AND PART 2 ARE ONE BANK. Both carry bank:'endpoint'; the split is two source PDFs, not two
// banks. So a match here is a WITHIN-bank duplicate and folds by DELETING an entry, unlike a House
// match, which is cross-bank and folds by adding a bank. Nothing in this tool deletes anything --
// it ranks candidates and resolves nothing.
//
// The matcher is carried over from sweep-staged-ep2.js unchanged, including the trap its header
// records: lev() is NOT used on stems, because it is bounded and scored two unrelated 780-character
// stems at 0.873. Word-bigram Dice, plus a negative control in the self-test.
//
// Written with the Write tool: the Bash heredoc collapses \\ to \ and would eat these regexes.
const fs = require('fs'), vm = require('vm');
const R = 'D:/claude os/Medical school/Herophilus/';
const { tight, words } = require('./norm.js');

const STEM_REPORT = 0.55;   // report threshold -- deliberately low, this is a candidate list
const STEM_STRONG = 0.90;   // "look at this first", never "this is a fold"
const OPT_THRESH  = 0.75;

function bigrams(s) {
  const w = words(s).split(' ').filter(Boolean);
  if (w.length < 2) return new Set(w);
  const out = new Set();
  for (let i = 0; i < w.length - 1; i++) out.add(w[i] + ' ' + w[i + 1]);
  return out;
}
function sim(a, b) {
  const A = a instanceof Set ? a : bigrams(a), B = b instanceof Set ? b : bigrams(b);
  if (!A.size || !B.size) return 0;
  let hit = 0;
  A.forEach(g => { if (B.has(g)) hit++; });
  return 2 * hit / (A.size + B.size);
}
function optSetSim(a, b) {
  const A = new Set((a || []).map(o => tight(o))), B = new Set((b || []).map(o => tight(o)));
  if (!A.size || !B.size) return 0;
  let hit = 0;
  A.forEach(o => { if (B.has(o)) hit++; });
  return 2 * hit / (A.size + B.size);
}

function live(file, varName) {
  const p = R + 'app/data/' + file;
  if (!fs.existsSync(p)) throw new Error('missing live file: ' + p);
  vm.runInThisContext(fs.readFileSync(p, 'utf8'), { filename: file });
  const a = globalThis[varName] || [];
  // Array.filter SKIPS SPARSE HOLES, so index the array rather than filtering it.
  const out = [];
  for (let i = 0; i < a.length; i++) if (i in a) out.push(a[i]);
  return out;
}

if (process.argv.includes('--self-test')) {
  const same = sim('a two year old boy presents with fever and cough',
                   'a two year old boy presents with fever and cough');
  const near = sim('a two year old boy presents with fever and cough',
                   'a 2 year old boy presents with fever and a cough');
  const far  = sim('a two year old boy presents with fever and cough',
                   'which vitamin deficiency causes rickets in a breastfed infant');
  console.log('identical', same.toFixed(3), '(expect 1.000)');
  console.log('reworded ', near.toFixed(3), '(expect high)');
  console.log('NEGATIVE ', far.toFixed(3), '(expect low -- this is the control the old lev() bug failed)');
  const ok = same > 0.999 && near > 0.6 && far < 0.2;
  console.log(ok ? 'self-test PASSED' : 'self-test FAILED');
  process.exit(ok ? 0 : 1);
}

const EP2 = live('questions.peds.ep2.js', 'Q_PEDS_EP2');
const EP1 = live('questions.peds.ep.js',  'Q_PEDS_EP');
console.log('live part 2 ' + EP2.length + '   live part 1 ' + EP1.length +
            '   pairs compared ' + (EP2.length * EP1.length));

const B2 = EP2.map(q => bigrams(q.stem));
const B1 = EP1.map(q => bigrams(q.stem));

const rows = [];
for (let i = 0; i < EP2.length; i++) {
  for (let j = 0; j < EP1.length; j++) {
    const s = sim(B2[i], B1[j]);
    const o = optSetSim(EP2[i].options, EP1[j].options);
    if (s >= STEM_REPORT || (o >= OPT_THRESH && s >= 0.30)) {
      rows.push({ s, o, a: EP2[i], b: EP1[j] });
    }
  }
}
rows.sort((x, y) => y.s - x.s);

const strong = rows.filter(r => r.s >= STEM_STRONG);
console.log('candidates at stem >= ' + STEM_REPORT + ': ' + rows.length +
            '   of which >= ' + STEM_STRONG + ': ' + strong.length);
console.log('');
console.log('sim   opt   part2 id                  ch            part1 id              ch');
for (const r of rows) {
  console.log(r.s.toFixed(3) + ' ' + r.o.toFixed(3) + '  ' +
              r.a.id.padEnd(24) + '  ' + String(r.a.chapter).padEnd(12) + '  ' +
              r.b.id.padEnd(20) + '  ' + String(r.b.chapter));
}

const out = R + 'content/peds/qb-pages/crossparts-candidates.json';
fs.writeFileSync(out, JSON.stringify(rows.map(r => ({
  sim: +r.s.toFixed(4), opt: +r.o.toFixed(4),
  p2: { id: r.a.id, chapter: r.a.chapter, source: r.a.source, answer: r.a.answer,
        stem: r.a.stem, options: r.a.options },
  p1: { id: r.b.id, chapter: r.b.chapter, source: r.b.source, answer: r.b.answer,
        stem: r.b.stem, options: r.b.options },
})), null, 1));
console.log('');
console.log('wrote ' + out);
console.log('RESOLVES NOTHING. Every row is a pair to read, not a verdict.');
