// reprint-uncited-pd-ep2.js — write the six citation clauses that the closing page-coverage test
// found missing from questions.peds.ep2.js.
//
// ⚠️ THIS TOOL EXISTS BECAUSE AN ADJUDICATION IS NOT A CITATION. All six pages below were read,
// compared and ruled reprints during the section passes; each ruling is recorded in
// progress/resume-peds-endpoint-part2.md or in endpoint-p2-s15-fold-adjudication-D.md; and then
// none of the six was ever appended to the surviving entry's `source`. The page-coverage test
// (every OCR-`answered` page against every `p.<n>` cited across all three peds banks) is the only
// instrument that saw it, because it reads the live file rather than the adjudication notes.
//
// The six, with the surviving entry each folds into:
//   p.322  -> pedep2-hem-27 (p.323)   the unanswered twin: same question, no key marked, no box
//   p.375  -> pedep2-hem-86 (p.442)   the age printed 3 rather than 12
//   p.420  -> pedep2-hem-75 (p.419)   byte-identical apart from the missing explanation box
//   p.448  -> pedep2-hem-57 (p.383)   the age printed 3 rather than 5
//   p.450  -> pedep2-hem-82 (p.434)   the fifth option dropped, the values rewritten with units
//   p.1911 -> pedep2-mf4-67 (p.1895)  the same question printed twice inside Model Final Exam 4
//
// ⚠️ FOUR OF THE SIX ARE STAGED AND ARE MEASURED FIELD BY FIELD AGAINST DISK HERE; TWO ARE NOT.
// p.322 and p.420 were deliberately never staged — the adjudication ruled that neither page gets
// an entry — so there is no staged record to compare against and the checks below instead require
// the journal to still carry the ruling in the words it was written in. A hand-typed clause with
// no disk-side check behind it is exactly what this stream has been punished for, so the two
// unstaged rows are marked `unstaged: true` and the journal grep is their gate.
//
// Nothing here adds alsoIn: every one of these is a part-2 page folding into a part-2 entry, which
// is a WITHIN-bank fold. Nothing here touches a stem, an option, a key or an explanation — the
// three entries whose twin changed a printed number (hem-57, hem-82, hem-86) already record that
// number in their explanations, which is the journal's "the discarded age is written into the
// surviving entry" instruction, and it was honoured when those entries were drafted.
//
// Built on reprint-s16-s17-pd-ep2.js. Dry run by default; --write to apply.
const fs = require('fs'), vm = require('vm');
const R = 'D:/claude os/Medical school/Herophilus/';
const D = R + 'app/data/';
const QB = R + 'content/peds/qb-pages/';
const WRITE = process.argv.includes('--write');
const EP2 = 'questions.peds.ep2.js';

const STAGING = {
  s4:  { file: QB + 'endpoint-p2-s04-haematology.array.js', svar: 'PEDEP2_S04_STAGED', staged: 90, lo: 268, hi: 450 },
  s15: { file: QB + 'endpoint-p2-s15-mfe4.array.js',        svar: 'PEDEP2_S15_STAGED', staged: 80, lo: 1757, hi: 1921 },
};

// Declared divergences, keyed by row tag. Anything measured off disk that is not declared here
// stops the pass: a key that moved for a real reason is a different question, not a reprint.
const KEYTEXT_OK = {
  's4n89': ['Intravenous gamma globulins', 'Intravenous gammaglobulins', 'the same drug set solid, p.448'],
  's4n90': ['Hemoglobin (7.5), MCV (65), reticulocyte (1.0%)',
            'Hemoglobin 7.5 g/dL, MCV 65 fL, Reticulocyte count 1%',
            'the same three values written out with their units, p.450'],
};
const KEYINDEX_OK = {};              // no key index moves in any of the six
const OPTCOUNT_OK = {
  's4n90': [5, 4],                   // the live entry's fifth option, Hb 7 / MCV 80 / retic 16%, is not printed on p.450
};

// The journal rulings that stand behind the two unstaged rows. Each string must still appear in the
// named file, byte for byte, or the pass refuses to write the clause built on it.
// A journal ruling is prose and cannot be indexed, so each unstaged row also states what its clause
// asserts about the surviving entry, and those are measured off the live file like any other check.
const JOURNAL = {
  's4p322': { file: R + 'progress/resume-peds-endpoint-part2.md',
              text: 'p.322 carries no yellow highlight\nand no box at all',
              opts: 5, key: 'Sickle cell disease', figure: true },
  's4p420': { file: R + 'progress/resume-peds-endpoint-part2.md',
              text: 'Identical stem, identical four options, the same option b "Leukemia" highlighted on each. The\n  only difference is that p.420 prints **no box at all**',
              opts: 4, key: 'Leukemia', figure: false },
};

// Each mark measures 0 in questions.peds.ep2.js before this pass runs, measured 2026-09-06.
const MARKS = [
  { mark: 'reprinted at p.322', expect: 1 },
  { mark: 'reprinted at p.375', expect: 1 },
  { mark: 'reprinted at p.420', expect: 1 },
  { mark: 'reprinted at p.448', expect: 1 },
  { mark: 'reprinted at p.450', expect: 1 },
  { mark: 'reprinted at p.1911', expect: 1 },
];

// Straight quotes are curled throughout: a clause holding the quote character that closes the
// target's source string cannot be spliced into it.
const PLAN = [
  { tag: 's4p322', sec: 's4', p: 322, id: 'pedep2-hem-27', unstaged: true, base: 323,
    tail: 'which prints the same vignette, the same figure and the same option list without marking a key and without an explanation box — the unanswered twin of the answered printing transcribed here, and the page the OCR page-kind classifier mistagged' },

  { tag: 's4n53', sec: 's4', n: 53, p: 375, id: 'pedep2-hem-86', base: 442,
    tail: 'printing the boy’s age as 3 rather than 12, giving the laboratory values telegraphically — “INR normal, APTT increased, fibrinogen normal, antithrombin III level normal, bleeding time 3.3 min” — and so dropping the (3-8 min) reference range this entry prints beside the bleeding time, and asking “What is the most likely cause?” where this entry asks “Which one of the following is the most likely cause?”; the five options, their order and the key, Hemophilia, are unchanged' },

  { tag: 's4p420', sec: 's4', p: 420, id: 'pedep2-hem-75', unstaged: true, base: 419,
    tail: 'which prints the same stem, the same four options and the same highlighted key, Leukemia, and differs only in carrying no explanation box; the fuller printing is the one transcribed here' },

  { tag: 's4n89', sec: 's4', n: 89, p: 448, id: 'pedep2-hem-57', base: 383,
    tail: 'printing the girl’s age as 3 rather than 5, “while she is recovering from a cold” for this entry’s “while she was recovering”, “widespread petechiae and bruising” for “widespread petechiae and ecchymosis”, and setting the key solid as “Intravenous gammaglobulins”; the option count, their order and the key are unchanged' },

  { tag: 's4n90', sec: 's4', n: 90, p: 450, id: 'pedep2-hem-82', base: 434,
    tail: 'naming the diagnosis in the stem — “is diagnosed with iron deficiency anemia (IDA)” where this entry has the diagnosis made in a separate sentence — printing the normal MCV as 75–100 fL against the 70-100 printed here, writing each option out with its units as “Hemoglobin 10 g/dL, MCV 70 fL, Reticulocyte count 10%”, and dropping this entry’s fifth option, “Hemoglobin (7); MCV (80); reticulocyte (16%)”; the key stays fourth and unchanged in substance' },

  { tag: 's15n75', sec: 's15', n: 75, p: 1911, id: 'pedep2-mf4-67', base: 1895,
    tail: 'printed there as question 75 of the same exam and word for word the same apart from a space after the stem’s full stop; the five options, their order and the key, 3 years, are unchanged, and the explanation box is shorter there — “Copying a circle but not a square corresponds to around 3 years of age.”' },
];

const ap   = s => String(s).replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"');
const flat = t => ap(t).toLowerCase().replace(/[.,;:]/g, '').replace(/\s+/g, ' ').trim();

function clauseFor(F) {
  return 'reprinted at p.' + F.p + (F.tail ? ', ' + F.tail : '');
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

const seen = new Set(), byTarget = new Map();
for (const F of PLAN) {
  if (seen.has(F.tag)) fail(F.tag + ' is planned twice');
  seen.add(F.tag);
  if (byTarget.has(F.id)) fail('target ' + F.id + ' is named twice and nothing here declares a doubled target');
  byTarget.set(F.id, F.tag);
}

// Staging, one section at a time.
const byTag = new Map();
for (const k of Object.keys(STAGING)) {
  const S = STAGING[k];
  vm.runInThisContext(fs.readFileSync(S.file, 'utf8'), { filename: S.file });
  const A = (globalThis[S.svar] || []).filter(Boolean);
  if (A.length !== S.staged) throw new Error(k + ' staging holds ' + A.length + ', expected ' + S.staged);
  for (const s of A) byTag.set(k + 'n' + s.n, s);
}

vm.runInThisContext(fs.readFileSync(D + EP2, 'utf8'), { filename: EP2 });
const LIVE = globalThis.Q_PEDS_EP2 || [];
const byId = new Map();
let holes = 0;
for (let i = 0; i < LIVE.length; i++) { if (i in LIVE) byId.set(LIVE[i].id, LIVE[i]); else holes++; }
if (holes) fail(EP2 + ' has ' + holes + ' sparse holes');

for (const F of PLAN) {
  const where = F.tag + ' (p.' + F.p + ' -> ' + F.id + ')';
  const q = byId.get(F.id);
  if (!q) { fail(where + ': target does not exist in ' + EP2); continue; }

  // The surviving entry must still cite the page this fold was ruled against.
  if (String(q.source).indexOf('p.' + F.base) === -1)
    fail(where + ': the target no longer cites p.' + F.base + ' -- source is "' + q.source + '"');

  const S = STAGING[F.sec];
  if (F.p < S.lo || F.p > S.hi) fail(where + ': p.' + F.p + ' is outside ' + F.sec + '\u2019s ' + S.lo + '-' + S.hi);

  if (F.unstaged) {
    // No staged record exists by design. The ruling in the journal is the check instead.
    const J = JOURNAL[F.tag];
    if (!J) { fail(where + ': marked unstaged with no journal ruling declared'); continue; }
    const txt = fs.readFileSync(J.file, 'utf8');
    if (txt.indexOf(J.text) === -1)
      fail(where + ': the journal no longer carries the ruling this clause rests on -- ' + J.file);
    for (const s of byTag.values()) if (s.p === F.p) fail(where + ': marked unstaged but p.' + F.p + ' IS staged as n' + s.n);
    if (q.options.length !== J.opts)
      fail(where + ': the clause says ' + J.opts + ' options, the live entry has ' + q.options.length);
    if (q.options[q.answer] !== J.key)
      fail(where + ': the clause names the key "' + J.key + '", the live entry keys "' + q.options[q.answer] + '"');
    if (Boolean(q.image) !== J.figure)
      fail(where + ': the clause ' + (J.figure ? 'claims' : 'does not claim') + ' a figure, the live entry has ' + (q.image ? q.image : 'none'));
    continue;
  }

  const s = byTag.get(F.sec + 'n' + F.n);
  if (!s) { fail(where + ': no staged question ' + F.sec + ' n' + F.n); continue; }
  if (s.p !== F.p) { fail(where + ': staging puts n' + F.n + ' on p.' + s.p); continue; }

  const liveKey = q.options[q.answer], newKey = s.opts[s.key];
  if (flat(liveKey) !== flat(newKey)) {
    const ok = KEYTEXT_OK[F.tag];
    if (!ok) fail(where + ': key text differs and is not declared -- live "' + liveKey + '" vs staged "' + newKey + '"');
    else if (flat(ok[0]) !== flat(liveKey) || flat(ok[1]) !== flat(newKey))
      fail(where + ': declared key text does not match disk -- live "' + liveKey + '" vs staged "' + newKey + '"');
  }
  if (q.answer !== s.key) {
    const ok = KEYINDEX_OK[F.tag];
    if (!ok) fail(where + ': key index differs and is not declared -- live ' + q.answer + ' vs staged ' + s.key);
    else if (ok[0] !== q.answer || ok[1] !== s.key)
      fail(where + ': declared key index does not match disk -- live ' + q.answer + ' vs staged ' + s.key);
  }
  if (q.options.length !== s.opts.length) {
    const ok = OPTCOUNT_OK[F.tag];
    if (!ok) fail(where + ': option counts differ and it is not declared -- live ' + q.options.length + ' vs staged ' + s.opts.length);
    else if (ok[0] !== q.options.length || ok[1] !== s.opts.length)
      fail(where + ': declared option counts do not match disk -- live ' + q.options.length + ' vs staged ' + s.opts.length);
  }
}
for (const tag of Object.keys(KEYTEXT_OK).concat(Object.keys(KEYINDEX_OK), Object.keys(OPTCOUNT_OK), Object.keys(JOURNAL)))
  if (!seen.has(tag)) fail('a divergence or ruling is declared for ' + tag + ', which no PLAN row names');

// Idempotency is keyed on the whole clause, so re-running after an edit to a tail rewrites nothing
// silently -- it opens a second clause, which the MARKS count below makes visible.
const todo = [];
for (const F of PLAN) {
  const q = byId.get(F.id);
  if (!q) continue;
  const clause = clauseFor(F);
  if (String(q.source).indexOf(clause) !== -1) console.log('  already cited, skipping: ' + F.tag + ' ' + F.id);
  else todo.push({ F: F, clause: clause });
}

console.log('');
console.log('PLAN ' + PLAN.length + ' rows -- ' + PLAN.filter(F => !F.unstaged).length + ' measured against staging, ' +
            PLAN.filter(F => F.unstaged).length + ' against the journal ruling; ' + byTarget.size + ' distinct targets');
console.log('to write: ' + todo.length);
if (bad) { console.log(''); console.log(bad + ' PROBLEM(S). Nothing written.'); process.exit(1); }

const src0 = fs.readFileSync(D + EP2, 'utf8');
for (const M of MARKS)
  console.log('  before: "' + M.mark + '" appears ' + (src0.split(M.mark).length - 1) + ' time(s) in ' + EP2);

if (!WRITE) {
  console.log('');
  for (const t of todo) console.log('  ' + t.F.tag + ' -> ' + t.F.id + ': ' + t.clause);
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
