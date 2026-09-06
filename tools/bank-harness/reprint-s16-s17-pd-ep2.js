// reprint-s16-s17-pd-ep2.js — write the reprint citations for the last two sections of
// Pediatrics endpoint part2.pdf onto the entries that already carry the questions.
//
// Section 16, "Recently modified Questions", pp.1923-1940, 18 staged, and all 18 are reprints
//   — all eighteen, after n11 was run down by hand (see below).
// Section 17, "Recently Added Questions", pp.1942-1949, 8 staged: 2 reprints (here) + 6 drafted.
//
// ⚠️ THE RATIO IS THE FINDING, AND IT IS WHAT THE TWO SECTION NAMES PROMISE. A section called
// "recently modified" is 17/18 reprints; a section called "recently added" is 6/8 new. Neither
// number was assumed — both come from sweep-staged-ep2.js run over the staged verbatim text, then
// from a field-by-field comparison of every candidate pair (stem byte-for-byte, option list element
// by element, key index) against the live entries. The comparison is what separates the eleven that
// are byte-identical from the six that were genuinely modified.
//
// ⚠️ A MODIFIED REPRINT IS STILL A REPRINT. This stream's fold model has six shapes and three of
// them are exactly what this section prints: a respelled option, a reworded stem, and a reordered
// menu that moves the key index. The modification is recorded in the citation clause and the live
// entry is not otherwise touched — its own stem, options, key and explanation all stand.
//
// Every target is in questions.peds.ep2.js. Nothing here touches questions.peds.ep.js: the part-1
// arm of the sweep returned no candidate above threshold for any of the nineteen. Nothing here adds
// alsoIn — that is only ever a House match, and the four House hits the sweep found (pedhd-gen-8,
// pedhd-mal-21, pedhd-devp-2, pedhd-dev-21) are recorded in the journal and folded nowhere.
//
// Built on reprint-s15-pd-ep2.js. Not the same tool, not a reuse of it, and it must never be run in
// its place: the two carry different page ranges, different exam names and different PLANs.
//
// Dry run by default; --write to apply.
const fs = require('fs'), vm = require('vm');
const R = 'D:/claude os/Medical school/Herophilus/';
const D = R + 'app/data/';
const QB = R + 'content/peds/qb-pages/';
const WRITE = process.argv.includes('--write');
const EP2 = 'questions.peds.ep2.js';

const SEC = {
  16: { name: 'Recently modified Questions', lo: 1923, hi: 1940,
        file: QB + 'endpoint-p2-s16-recent-mod.array.js', svar: 'PEDEP2_S16_STAGED', staged: 18, reprints: 18 },
  17: { name: 'Recently Added Questions', lo: 1942, hi: 1949,
        file: QB + 'endpoint-p2-s17-recent-add.array.js', svar: 'PEDEP2_S17_STAGED', staged: 8, reprints: 2 },
};

// Declared divergences. Each is measured off disk by the checks below, and an UNDECLARED one stops
// the pass — a key that moved for a real reason is a different question, not a reprint.
//
// Keyed 's<section>n<n>' because the two sections number from 1 independently.
const KEYTEXT_OK = {
  's16n12': ['2–4 years', '2-4 years', 'the en dash of the live entry printed as a hyphen, p.1934'],
  's16n15': ['Continuous positive airway pressure (CPAP)', 'C-PAP', 'the same intervention abbreviated, p.1937'],
  's16n11': ['Explain that this is an innocent murmur and inform the GP to re-evaluate the child once she has recovered from illness',
             'Explain that this is an innocent murmur and inform the GP to re-evaluate after recovery',
             'the same option shortened, p.1933'],
  's17n6':  ['Pneumonia (right-sided)', 'Pneumonia (right sided)', 'the same diagnosis with the hyphen dropped, p.1947'],
};
const KEYINDEX_OK = {
  's16n15': [1, 3],   // live second option, this printing's fourth
};
const OPTCOUNT_OK = {
  's16n11': [4, 5],   // the live entry's four, plus "Change the present antibiotic"
  's16n15': [4, 5],   // the live entry's four, plus "Bronchodilators"
  's17n6':  [5, 4],   // the five-option menu replaced by a four-option laterality menu
  's17n7':  [5, 4],
};

// Each mark measures 0 in questions.peds.ep2.js before this pass runs, measured 2026-09-06.
const MARKS = [
  { mark: 'reprinted in Recently modified Questions, p.19', expect: 18 },
  { mark: 'reprinted in Recently Added Questions, p.19', expect: 2 },
];

// The tails are written from the field-by-field comparison, not from prose. Straight quotes are
// curled throughout: a clause holding the quote character that closes the target's source string
// cannot be spliced into it.
const PLAN = [
  { s: 16, n: 1, p: 1923, id: 'pedep2-gen-14', sep: ';',
    tail: 'the stem, the options and the key all unchanged' },
  { s: 16, n: 2, p: 1924, id: 'pedep2-gen-15', sep: ';',
    tail: 'the stem, the options and the key all unchanged' },
  { s: 16, n: 3, p: 1925, id: 'pedep2-car-36', sep: ';',
    tail: 'the stem, the options and the key all unchanged' },
  { s: 16, n: 4, p: 1926, id: 'pedep2-ren-50', sep: ';',
    tail: 'the stem, the options and the key all unchanged' },
  { s: 16, n: 5, p: 1927, id: 'pedep2-ren-31', sep: ',',
    tail: 'rewriting the stem into full sentences — “An 11-month-old presents with rapidly rising fever, vomiting, and appears ill. Urinalysis shows leukocyte esterase positive, 25 WBCs/HPF, and moderate bacteria. What is the next best step?” against the live entry’s note-form “11-month-old presenting to Emergency department with rapidly rising fever and vomiting and ill” and its capitalised “What is the best NEXT step?” — dropping the emergency department, and hyphenating “broad-spectrum” in the first option; the option count and the key are unchanged' },
  { s: 16, n: 6, p: 1928, id: 'pedep2-car-63', sep: ';',
    tail: 'the stem, the options and the key all unchanged' },
  { s: 16, n: 7, p: 1929, id: 'pedep2-end-16', sep: ',',
    tail: 'dropping the routine newborn examination that opens the live entry and asking “Which is the most important initial investigation?” rather than “What is…”, and spelling the first option out as “Karyotype with FISH for sex-determining region of the Y chromosome” where the live entry abbreviates it “Karyotype with FISH for SRY”; the option count and the key are unchanged' },
  { s: 16, n: 8, p: 1930, id: 'pedep2-mal-21', sep: ',',
    tail: 'adding an introductory sentence the live entry does not carry — “Brain tumors are the most common solid tumor of childhood, and presentation may be insidious, leading to late diagnosis” — and spelling “tumors” in American spelling against the live entry’s “tumours”; the options and the key are unchanged' },
  { s: 16, n: 9, p: 1931, id: 'pedep2-hem-68', sep: ';',
    tail: 'the stem, the options and the key all unchanged' },
  { s: 16, n: 10, p: 1932, id: 'pedep2-gen-27', sep: ',',
    tail: 'dropping the live entry’s opening sentence about trisomy 21 and chromosome 21 and asking the bare “Which of the following statements is true about Down syndrome?”, and printing the incidence as “1 in 1400” where the live entry writes “1 in 1,400”; the option count, their order and the key are unchanged' },
  // ⚠️ The sweep did not name this one. It was found by grepping the SIGN -- an innocent murmur
  // during a febrile illness -- rather than by similarity, after the fold adjudication refused to rule
  // it a draft on an empty candidate list. Adding a fifth option and shortening the key text is enough
  // to push a real reprint under the threshold, which is the whole reason a silent sweep is not a verdict.
  { s: 16, n: 11, p: 1933, id: 'pedep2-car-19', sep: ',',
    tail: 'printing the same variant as p.1763 — the ward round dropped, the murmur timed as “The next morning”, “Heart sounds are normal, no pulmonary edema is present” in place of the murmur description, “out-patient ECHO” hyphenated, “Change the present antibiotic” added as a fifth option and the key shortened to “… re-evaluate after recovery” — and asking “What is the single most appropriate management plan?” where both earlier printings ask “What would be”; the key stays fourth, so this is the fourth printing of the question and the second of that variant' },
  { s: 16, n: 12, p: 1934, id: 'pedep2-dp-2', sep: ',',
    tail: 'opening “What age does autism spectrum disorder usually become evident?” where the live entry has “At what age…”, and printing all four age ranges with hyphens where the live entry uses en dashes; the option count and the key are unchanged' },
  { s: 16, n: 13, p: 1935, id: 'pedep2-liv-16', sep: ';',
    tail: 'the stem, the options and the key all unchanged' },
  { s: 16, n: 14, p: 1936, id: 'pedep2-res-36', sep: ';',
    tail: 'the stem, the options and the key all unchanged' },
  // ⚠️ The third printing of this question, and the second variant printing. pedep2-mf2-51 already
  // records the Model Final Exam 4 printing at p.1901 as adding Bronchodilators and moving the key
  // to the fourth position; p.1937 prints that same variant again, so the clause says so rather than
  // describing the same change twice as if it were new.
  { s: 16, n: 15, p: 1937, id: 'pedep2-mf2-51', sep: ',',
    tail: 'printing the same variant as p.1901 — the stem opening “Which clinical intervention is of evidence-based benefit”, “Bronchodilators” added as a fifth option, the key abbreviated to “C-PAP” and moved to the fourth position — so this is the third printing of the question and the second of that variant' },
  { s: 16, n: 16, p: 1938, id: 'pedep2-mf4-25', sep: ';',
    tail: 'the stem, the options and the key all unchanged' },
  { s: 16, n: 17, p: 1939, id: 'pedep2-car-56', sep: ';',
    tail: 'the stem, the options and the key all unchanged' },
  { s: 16, n: 18, p: 1940, id: 'pedep2-mf4-21', sep: ';',
    tail: 'the stem, the options and the key all unchanged' },

  { s: 17, n: 6, p: 1947, id: 'pedep2-mf1-4', sep: ',',
    tail: 'rewritten rather than reprinted — the boy is named Hatem, the examination findings are set out as bulleted lines instead of running prose, and the five-option menu is replaced by a four-option laterality menu (pleural effusion left or right, pneumonia left or right) which drops asthma, inhaled foreign body and pneumothorax and prints the key as “Pneumonia (right sided)” without the live entry’s hyphen; the vignette and the answer are the same' },
  { s: 17, n: 7, p: 1948, id: 'pedep2-mf1-15', sep: ',',
    tail: 'rewritten rather than reprinted — the boy is named Darren, the examination findings are set out as bulleted lines, the reduced air entry is localised to the left lower and middle zones and percussion is stated to be normal throughout, and the five-option menu is replaced by a four-option laterality menu (inhaled foreign body left or right, pleural effusion left or right) which drops pneumonia and pneumothorax; the key, inhaled foreign body on the left, is unchanged' },
];

const ap   = s => String(s).replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"');
const flat = t => ap(t).toLowerCase().replace(/[.,;:]/g, '').replace(/\s+/g, ' ').trim();
const tagOf = F => 's' + F.s + 'n' + F.n;

function clauseFor(F) {
  const where = 'reprinted in ' + SEC[F.s].name + ', p.' + F.p;
  return F.tail ? where + (F.sep === ';' ? '; ' : ', ') + F.tail : where;
}

// Find one entry's block by scanning structurally. Three entry shapes are live in this file, so
// nothing here anchors on a fixed layout.
function entryBlock(lines, id) {
  const pats = ["id:'" + id + "'", 'id:"' + id + '"', "id: '" + id + "'", 'id: "' + id + '"'];
  let open = -1, found = null;
  for (let i = 0; i < lines.length; i++) {
    const L = lines[i];
    if (/^\{/.test(L.trim()) || /^\s*\{\s*id[:\s]/.test(L)) open = i;
    if (pats.some(p => L.indexOf(p) !== -1)) {
      if (found) throw new Error('id appears in two entries: ' + id);
      if (open === -1) throw new Error('id line found with no open brace above it: ' + id);
      let close = -1;
      for (let j = open; j < lines.length; j++) {
        if (/\},\s*$/.test(lines[j]) || /^\},?\s*$/.test(lines[j].trim())) { close = j; break; }
      }
      if (close === -1) throw new Error('no closing "}," found for ' + id);
      if (close < i) throw new Error('block for ' + id + ' closed before its id line');
      found = { from: open, to: close };
    }
  }
  if (!found) throw new Error('entry not found: ' + id);
  return found;
}

function mergeCitation(line, clause) {
  const m = line.match(/^(\s*source:\s*)(['"])([\s\S]*?)\2(\s*(?:\})?\s*,?\s*)$/);
  if (!m) throw new Error('unrecognised source line: ' + line);
  const head = m[1], q = m[2], inner = m[3], punct = m[4];
  if (clause.indexOf(q) !== -1) throw new Error('the clause contains the quote character that closes this string: ' + clause);
  const neu = /\)$/.test(inner) ? inner.slice(0, -1) + '; ' + clause + ')' : inner + ' (' + clause + ')';
  return head + q + neu + q + punct;
}

let bad = 0;
const fail = m => { console.log('  FAIL  ' + m); bad++; };

for (const k of [16, 17]) {
  const rows = PLAN.filter(F => F.s === k).length;
  if (rows !== SEC[k].reprints) fail('section ' + k + ': PLAN holds ' + rows + ' rows, expected ' + SEC[k].reprints);
}

const seen = new Set(), byTarget = new Map();
for (const F of PLAN) {
  const t = tagOf(F);
  if (seen.has(t)) fail(t + ' is planned twice');
  seen.add(t);
  if (!byTarget.has(F.id)) byTarget.set(F.id, []);
  byTarget.get(F.id).push(t);
}
for (const [id, ts] of byTarget)
  if (ts.length > 1) fail('target ' + id + ' is named by ' + ts.length + ' questions (' + ts.join(', ') + ') and nothing here declares a doubled target');

// Staging, one section at a time.
const byTag = new Map();
for (const k of [16, 17]) {
  vm.runInThisContext(fs.readFileSync(SEC[k].file, 'utf8'), { filename: SEC[k].file });
  const A = (globalThis[SEC[k].svar] || []).filter(Boolean);
  if (A.length !== SEC[k].staged) throw new Error('section ' + k + ' staging holds ' + A.length + ', expected ' + SEC[k].staged);
  for (const s of A) byTag.set('s' + k + 'n' + s.n, s);
}

vm.runInThisContext(fs.readFileSync(D + EP2, 'utf8'), { filename: EP2 });
const LIVE = globalThis.Q_PEDS_EP2 || [];
const byId = new Map();
let holes = 0;
for (let i = 0; i < LIVE.length; i++) { if (i in LIVE) byId.set(LIVE[i].id, LIVE[i]); else holes++; }
if (holes) fail(EP2 + ' has ' + holes + ' sparse holes');

for (const F of PLAN) {
  const tag = tagOf(F), where = tag + ' (p.' + F.p + ' -> ' + F.id + ')';
  const s = byTag.get(tag);
  if (!s) { fail(where + ': no staged question with that n'); continue; }
  if (s.p !== F.p) fail(where + ': staging puts it on p.' + s.p);
  if (s.p < SEC[F.s].lo || s.p > SEC[F.s].hi) fail(where + ': p.' + s.p + ' is outside ' + SEC[F.s].lo + '-' + SEC[F.s].hi);

  const q = byId.get(F.id);
  if (!q) { fail(where + ': target does not exist in ' + EP2); continue; }

  const liveKey = q.options[q.answer], newKey = s.opts[s.key];
  if (flat(liveKey) !== flat(newKey)) {
    const ok = KEYTEXT_OK[tag];
    if (!ok) fail(where + ': key text differs and is not declared -- live "' + liveKey + '" vs staged "' + newKey + '"');
    else if (flat(ok[0]) !== flat(liveKey) || flat(ok[1]) !== flat(newKey))
      fail(where + ': declared key text does not match disk -- live "' + liveKey + '" vs staged "' + newKey + '"');
  }
  if (q.answer !== s.key) {
    const ok = KEYINDEX_OK[tag];
    if (!ok) fail(where + ': key index differs and is not declared -- live ' + q.answer + ' vs staged ' + s.key);
    else if (ok[0] !== q.answer || ok[1] !== s.key)
      fail(where + ': declared key index does not match disk -- live ' + q.answer + ' vs staged ' + s.key);
  }
  if (q.options.length !== s.opts.length) {
    const ok = OPTCOUNT_OK[tag];
    if (!ok) fail(where + ': option counts differ and it is not declared -- live ' + q.options.length + ' vs staged ' + s.opts.length);
    else if (ok[0] !== q.options.length || ok[1] !== s.opts.length)
      fail(where + ': declared option counts do not match disk -- live ' + q.options.length + ' vs staged ' + s.opts.length);
  }
}
for (const tag of Object.keys(KEYTEXT_OK).concat(Object.keys(KEYINDEX_OK), Object.keys(OPTCOUNT_OK)))
  if (!seen.has(tag)) fail('a divergence is declared for ' + tag + ', which no PLAN row names');

// Idempotency is keyed on the whole clause, never on the section name.
const todo = [];
for (const F of PLAN) {
  const q = byId.get(F.id);
  if (!q) continue;
  const clause = clauseFor(F);
  if (String(q.source).indexOf(clause) !== -1) console.log('  already cited, skipping: ' + tagOf(F) + ' ' + F.id);
  else todo.push({ F: F, clause: clause });
}

console.log('');
console.log('PLAN ' + PLAN.length + ' rows -- ' + PLAN.filter(F => F.s === 16).length + ' from section 16, ' +
            PLAN.filter(F => F.s === 17).length + ' from section 17, ' + byTarget.size + ' distinct targets');
console.log('to write: ' + todo.length);
if (bad) { console.log(''); console.log(bad + ' PROBLEM(S). Nothing written.'); process.exit(1); }

const src0 = fs.readFileSync(D + EP2, 'utf8');
for (const M of MARKS)
  console.log('  before: "' + M.mark + '" appears ' + (src0.split(M.mark).length - 1) + ' time(s) in ' + EP2);

if (!WRITE) {
  console.log('');
  for (const t of todo.slice(0, 3)) console.log('  sample ' + tagOf(t.F) + ': ' + t.clause);
  console.log('');
  console.log('DRY RUN. Nothing written. Re-run with --write.');
  process.exit(0);
}

const lines = src0.split('\n');
let merged = 0, opened = 0;
for (const t of todo) {
  const blk = entryBlock(lines, t.F.id);
  let si = -1;
  for (let i = blk.from; i <= blk.to; i++) if (/^\s*source:/.test(lines[i])) { si = i; break; }
  if (si === -1) throw new Error('no source line inside the block for ' + t.F.id);
  if (/\)\s*['"]\s*(?:\})?\s*,?\s*$/.test(lines[si])) merged++; else opened++;
  lines[si] = mergeCitation(lines[si], t.clause);
}
fs.writeFileSync(D + EP2, lines.join('\n'));
console.log('written: ' + todo.length + ' citations -- ' + merged + ' merged into an existing parenthetical, ' + opened + ' opened a new one');

const src1 = fs.readFileSync(D + EP2, 'utf8');
for (const M of MARKS) {
  const after = src1.split(M.mark).length - 1;
  console.log('  after: "' + M.mark + '" appears ' + after + ' time(s)' + (after === M.expect ? '' : '  <-- EXPECTED ' + M.expect));
}
