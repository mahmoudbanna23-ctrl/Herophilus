// Execute the adjudicated cross-PART folds between the two peds endpoint files.
//   node tools/bank-harness/crossparts-fold-pd-ep2.js            (dry run -- prints, writes nothing)
//   node tools/bank-harness/crossparts-fold-pd-ep2.js --write
//
// WHAT A FOLD IS HERE, AND WHY IT DELETES. questions.peds.ep.js (part 1) and questions.peds.ep2.js
// (part 2) both carry bank:'endpoint'. The split is two source PDFs, not two banks, so a match
// across them is a WITHIN-bank duplicate: it folds by DELETING the lesser printing and folding its
// citation into the survivor's source. That is the opposite of a House match, which is cross-bank
// and folds by adding a bank, never by deleting. Getting the direction wrong destroys a question.
//
// The twelve folds below come from crossparts-adjudication-A.md and -B.md, both of which were read
// against the live text before this table was written. Four shortlist pairs were adjudicated NOT A
// REPRINT and appear nowhere here. Two of the survivor calls were reversed against the adjudicator
// on re-reading the entries whole -- the reasons are in the adjudication files.
//
// Eleven losers are part-2 entries and one is a part-1 entry (pedep-inf-82), so BOTH live files
// shrink. Part 1 was closed at 705 and becomes 704; its p.1129 is still cited, from the survivor in
// the sibling file, so a future page-coverage re-run must read both files as the one bank they are.
//
// Written with the Write tool: the Bash heredoc collapses \\ to \ and would eat these strings.
const fs = require('fs'), vm = require('vm'), cp = require('child_process');
const R = 'D:/claude os/Medical school/Herophilus/';
const D = R + 'app/data/';
const WRITE = process.argv.includes('--write');

const EP2 = 'questions.peds.ep2.js', EP1 = 'questions.peds.ep.js';

// loser is deleted; survivor keeps the question and gains the loser's citation.
const FOLDS = [
  { loser: 'pedep2-dp-29',  lf: EP2, surv: 'pedep-gp-40',   sf: EP1,
    note: 'also printed in Pediatrics endpoint part2.pdf p.153, with a rebuilt distractor set; the stem and the key text are unchanged' },
  { loser: 'pedep2-mf1-28', lf: EP2, surv: 'pedep-mf3-13',  sf: EP1,
    note: 'also printed in Pediatrics endpoint part2.pdf p.1326, in a different chapter, where the stem and the options are identical' },
  { loser: 'pedep2-mf1-46', lf: EP2, surv: 'pedep-mf3-37',  sf: EP1,
    note: 'also printed in Pediatrics endpoint part2.pdf p.1362, where the stem and the options are identical apart from punctuation; the key is unchanged' },
  { loser: 'pedep2-mf1-13', lf: EP2, surv: 'pedep-mf3-29',  sf: EP1,
    note: 'also printed in Pediatrics endpoint part2.pdf p.1296, respelled; the options and the key are unchanged' },
  { loser: 'pedep2-liv-15', lf: EP2, surv: 'pedep-neo-39',  sf: EP1,
    note: 'also printed in Pediatrics endpoint part2.pdf p.1197, with the fifth option Early-onset sepsis dropped; the key text is unchanged' },
  { loser: 'pedep2-end-25', lf: EP2, surv: 'pedep-emg-28',  sf: EP1,
    note: 'also printed in Pediatrics endpoint part2.pdf p.1142, in a different chapter, respelled; the options and the key are unchanged' },
  { loser: 'pedep2-res-29', lf: EP2, surv: 'pedep-alg-1',   sf: EP1,
    note: 'also printed in Pediatrics endpoint part2.pdf p.533, with the patient renamed and several clauses paraphrased; the options and the key are unchanged' },
  { loser: 'pedep2-liv-14', lf: EP2, surv: 'pedep-neo-8',   sf: EP1,
    note: 'also printed in Pediatrics endpoint part2.pdf p.1195, with a rebuilt distractor set and bilirubin reported in mg/dL rather than in micromoles per litre; the stem and the key text are unchanged' },
  { loser: 'pedep2-res-41', lf: EP2, surv: 'pedep-mf3-43',  sf: EP1,
    note: 'also printed in Pediatrics endpoint part2.pdf p.557, with the stem clauses reordered; the options and the key are unchanged' },
  { loser: 'pedep2-end-18', lf: EP2, surv: 'pedep-neo-37',  sf: EP1,
    note: 'also printed in Pediatrics endpoint part2.pdf p.1128, with the antenatal growth-restriction clause and the fifth option Hyperglycemia dropped; the key text is unchanged' },
  { loser: 'pedep2-res-30', lf: EP2, surv: 'pedep-mf3-42',  sf: EP1,
    note: 'also printed in Pediatrics endpoint part2.pdf p.535, with the age omitted and a third site added to the swelling distribution; the options and the key are unchanged' },
  // The one fold whose survivor is the part-2 printing, so the deletion lands in part 1.
  { loser: 'pedep-inf-82',  lf: EP1, surv: 'pedep2-mf1-25', sf: EP2,
    note: 'also printed in Pediatrics endpoint part1.pdf p.1129, where the tonsillar discharge is not described as purulent; the options and the key text are unchanged' },
];

// A folded id loses its backticks everywhere it is still mentioned. Only one loser has live
// dependents: pedep2-liv-14 is named twice inside pedep2-liv-13. Bare short forms like liv-15 and
// inf-31 are THEORY section ids in theory.peds.js, not question ids, and are left alone.
const REFIX = [
  { file: EP2, from: '`pedep2-liv-14`', to: '`pedep-neo-8`', expect: 2 },
];

// THREE entry formats live in these two files and a prefix match on one of them silently misses the
// others: part 2 writes "{ id: 'x'," at column 0, part 2 also writes '{ id: "x", bank: ...' with
// several fields per line, and part 1 writes a bare "{" then "  id:'x', bank:'endpoint', ...".
// So blocks are found structurally -- a line starting with { opens one, a line ending }, closes it
// -- and the id is then looked for inside the block. Measured: that pair of markers counts 705 and
// 551, exactly the numbers the two arrays load, so the scan sees every entry and nothing else.
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

// Part 1 writes  source:'TEXT',  and part 2 writes  source: "TEXT" },  -- take the quote character
// from whatever follows the colon rather than assuming either shape, and insert before the closing
// one. A survivor whose source already ends in a parenthetical gets a SECOND parenthetical, never a
// nested one: pedep-gp-40 and pedep-neo-39 already carry a within-part-1 reprint note.
function addCitation(line, note) {
  const c = line.indexOf('source:');
  if (c === -1) throw new Error('not a source line: ' + line);
  const m = /['"]/.exec(line.slice(c));
  if (!m) throw new Error('no opening quote on source line: ' + line);
  const q = m[0];
  if (note.indexOf(q) !== -1) throw new Error('note contains the delimiter ' + q + ': ' + note);
  const close = line.lastIndexOf(q);
  if (close <= c + m.index) throw new Error('no closing quote on source line: ' + line);
  return line.slice(0, close) + ' (' + note + ')' + line.slice(close);
}

const files = {};
for (const f of [EP2, EP1]) files[f] = fs.readFileSync(D + f, 'utf8').split('\n');

const log = [];

// 1. Citations first, while every entry is still where the adjudication found it.
for (const F of FOLDS) {
  const lines = files[F.sf];
  const b = entryBlock(lines, F.surv);
  let si = -1;
  for (let i = b.start; i <= b.end; i++) if (/^\s*source:/.test(lines[i])) { si = i; break; }
  if (si === -1) throw new Error('no source line inside ' + F.surv);
  const before = lines[si];
  lines[si] = addCitation(before, F.note);
  log.push('CITE ' + F.surv.padEnd(15) + ' <- ' + F.loser);
}

// 2. Then the deletions, recomputed against the edited (same-length) line arrays.
for (const F of FOLDS) {
  const lines = files[F.lf];
  const b = entryBlock(lines, F.loser);
  let cut = b.end - b.start + 1;
  if (lines[b.end + 1] === '') cut++;            // take the blank separator with it
  lines.splice(b.start, cut);
  log.push('DROP ' + F.loser.padEnd(15) + ' (' + cut + ' lines) survivor ' + F.surv);
}

// 3. Repoint references to a deleted id.
for (const X of REFIX) {
  const text = files[X.file].join('\n');
  const hits = text.split(X.from).length - 1;
  if (hits !== X.expect) throw new Error('expected ' + X.expect + ' of ' + X.from + ', found ' + hits);
  files[X.file] = text.split(X.from).join(X.to).split('\n');
  log.push('REFIX ' + X.from + ' -> ' + X.to + '  (' + hits + ' in ' + X.file + ')');
}

for (const line of log) console.log(line);
console.log('');

if (!WRITE) {
  console.log('DRY RUN. Nothing written. Re-run with --write.');
  process.exit(0);
}

for (const f of [EP2, EP1]) fs.writeFileSync(D + f, files[f].join('\n'));
console.log('wrote both files');

// 4. Verify from disk, not from memory.
for (const f of [EP2, EP1]) {
  const r = cp.spawnSync(process.execPath, ['--check', D + f], { encoding: 'utf8' });
  console.log('node --check ' + f + ': ' + (r.status === 0 ? 'OK' : 'FAILED\n' + r.stderr));
  if (r.status !== 0) process.exit(1);
}

function live(f, v) {
  vm.runInThisContext(fs.readFileSync(D + f, 'utf8'), { filename: f });
  const a = globalThis[v] || [], o = [];
  for (let i = 0; i < a.length; i++) if (i in a) o.push(a[i]);
  return { n: o.length, holes: a.length - o.length, ids: new Set(o.map(q => q.id)), all: o };
}
const L2 = live(EP2, 'Q_PEDS_EP2'), L1 = live(EP1, 'Q_PEDS_EP');
console.log('part 2: ' + L2.n + ' entries, ' + L2.holes + ' holes');
console.log('part 1: ' + L1.n + ' entries, ' + L1.holes + ' holes');

let bad = 0;
for (const F of FOLDS) {
  const gone = !L2.ids.has(F.loser) && !L1.ids.has(F.loser);
  const kept = L2.ids.has(F.surv) || L1.ids.has(F.surv);
  const q = L2.all.concat(L1.all).find(x => x.id === F.surv);
  const cited = q && q.source.indexOf(F.note) !== -1;
  if (!gone || !kept || !cited) {
    bad++;
    console.log('FAIL ' + F.loser + ' gone=' + gone + ' survivor=' + kept + ' cited=' + cited);
  }
}
console.log(bad === 0 ? 'all ' + FOLDS.length + ' folds verified on disk' : bad + ' FOLDS FAILED');
process.exit(bad === 0 ? 0 : 1);
