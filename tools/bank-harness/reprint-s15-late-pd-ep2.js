// reprint-s15-late-pd-ep2.js — the seven section-15 reprints that the fold adjudication ruled NOT a
// reprint, found afterwards and cited here.  Same exam, same book, same mechanism as
// reprint-s15-pd-ep2.js; a separate file because that one has already run and its 63 rows are
// committed.  Neither file is reused or overwritten by the other.
//
// HOW THESE WERE FOUND, and why the earlier verdict was wrong.  Section 15's eleven silent n's were
// ruled by hand, and all eleven came back NOT A REPRINT.  Seven of those hand rulings were wrong.
// They were caught while measuring where the live corpus puts each undrafted question's topic, for
// the chapter rulings — a probe on the KEY TEXT rather than on the stem returned a live entry whose
// key was the staged key word for word.  The candidate generator had not offered these because it
// ranks on stem similarity, and in six of the seven the two printings word the stem differently:
//
//   n1  -> pedep-emg-18   part 1 prints the same 9-year-old condensed to one sentence
//   n3  -> pedep2-car-19  the same 4-year-old with the post-antibiotic murmur, a fifth option added
//   n19 -> pedep-inf-72   part 1 prints the same febrile 2-year-old condensed, options as bare nouns
//   n34 -> pedep2-mal-19  the same ALL prognosis question with a two-sentence lead-in added
//   n69 -> pedep2-res-47  the same chronic-wet-cough question, option menu rebuilt, key moved
//   n79 -> pedep2-res-42  the same asthma-preventer question, option menu rebuilt, key moved
//   n80 -> pedep2-mf1-41  the same mature-pincer-grip question, the five ages replaced, key moved
//
// ⚠️ THE RULE THIS PRODUCED, and it is the third time this stream has paid for it: a candidate
// list's silence is not a verdict, AND a hand ruling made against a stem-ranked candidate list
// inherits that list's blind spot.  A one-line recall question carries almost no stem to rank on, so
// the stem probe is the wrong instrument for it; the key text is the right one.  Four of the seven
// (n69, n79, n80, and n34's option ladder) were invisible to every stem-similarity sweep run on this
// section and visible immediately to a key-text probe.
//
// ⚠️ n69, n79 and n80 are the shape that is easiest to get wrong in the other direction.  Each is a
// one-line recall question whose distractors the exam rebuilds wholesale, so almost nothing is shared
// but the question itself and the answer.  They are folded, not drafted, because in each case the
// stem asks the same question of the same topic and the key names the same answer; and because
// pedep2-res-47 already carries a Model Final Exam 2 printing folded on exactly these terms, "with a
// rebuilt set of four options and the key printed third".  Drafting them would have put a second
// entry with the same question and the same answer into the bank.
//
// ⚠️ Nine of the sixteen survive the re-check and are still drafted: n15, n21, n25, n36, n44, n56,
// n67, n71, n73.  Each was probed on its key text as well as its stem and the corpus holds nothing
// that asks its question.  n25, n67 and n73 ranked high on the stem sweep only through a shared
// option MENU of ages or of respiratory diagnoses, which pairs questions and never folds them.
//
// ⚠️ n34 was the only DRAFTED row of the four whose explanation box overflows onto its own page
// (n16 p.1790, n31 p.1821, n34 p.1828, n52 p.1865).  Folding it means section 15 no longer exercises
// val-pd-ep2.js's overflow-page hard fail; nothing in that check changed, it simply has no row left
// to fire on.
//
// Dry run by default; --write to apply.
const fs = require('fs'), vm = require('vm'), cp = require('child_process');
const R = 'D:/claude os/Medical school/Herophilus/';
const D = R + 'app/data/';
const WRITE = process.argv.includes('--write');
const EP2 = 'questions.peds.ep2.js', EP1 = 'questions.peds.ep.js';
const EXAM = 'Model Final Exam 4';
const PAGE_LO = 1759, PAGE_HI = 1921;
const EXPECTED = 7;
const STAGING = R + 'content/peds/qb-pages/endpoint-p2-s15-mfe4.array.js';
const SVAR = 'PEDEP2_S15_STAGED';

// Five of the seven print the key in different words.  All five are the same answer renamed; none is
// a different answer, which is what would disqualify the fold.
const KEYTEXT_OK = {
  1:  ['IV access, blood cultures, and broad-spectrum antibiotics',
       'Gain intravenous access, take blood cultures, and administer broad-spectrum antibiotics',
       'the same three actions written out in full, p.1759'],
  3:  ['Explain that this is an innocent murmur and inform the GP to re-evaluate the child once she has recovered from illness',
       'Explain that this is an innocent murmur and inform the GP to re-evaluate after recovery',
       'the same instruction with its closing clause shortened, p.1763'],
  19: ['Urine dipstick', 'Request a urine dipstick', 'the same test as an instruction, p.1796'],
  34: ['Non-B cell, non-T cell leukaemia', 'Non-B cell or non-T cell leukaemia',
       'the comma written out as or, p.1827'],
  79: ['Inhaled corticosteroids', 'Inhaled steroids', 'the same drug class named without cortico, p.1919'],
};

// Three print the key in a different position.  In each the exam replaced the distractors, so the
// key moved because the ladder around it was rebuilt, not because the answer changed.
const KEYINDEX_OK = {
  69: [0, 2, 'the four-option menu rebuilt to five, the key printed third, p.1899'],
  79: [0, 2, 'the four-option menu rebuilt, the key printed third, p.1919'],
  80: [1, 3, 'the five ages replaced, the key printed fourth, p.1921'],
};

// Two carry a different NUMBER of options.
const OPTCOUNT_OK = {
  3:  [4, 5, 'the exam adds Change the present antibiotic as a fifth option, p.1763'],
  69: [4, 5, 'the exam adds Habit cough, Tracheomalacia and Bacterial tracheitis and drops Bacterial bronchitis and Viral bronchitis, p.1899'],
};

// No target here is named twice, and none is named by the 63 rows reprint-s15-pd-ep2.js already
// wrote — checked against endpoint-p2-s15 map before this file was written.
const DOUBLE_OK = {};

// Both marks are counted AFTER this pass, so each expectation is the earlier pass's census plus this
// one's rows: 51 + 5 in part 2, 12 + 2 in part 1.
const MARKS = [
  { file: EP2, mark: 'reprinted in ' + EXAM + ', p.1', expect: 56 },
  { file: EP1, mark: 'reprinted in Pediatrics endpoint part2.pdf, ' + EXAM + ', p.1', expect: 14 },
];

const PLAN = [
  { n: 1, p: 1759, id: 'pedep-emg-18', file: EP1, sep: ',',
    tail: "printing the vignette in full — the boy blue-lighted into the emergency department by ambulance, the mother’s account of headache and fever earlier in the day, and the petechiae placed on his legs — where this entry condenses it to reduced consciousness, fever and petechiae, spelling the five options out in the same order, and writing the key as “Gain intravenous access, take blood cultures, and administer broad-spectrum antibiotics” where this entry abbreviates it “IV access, blood cultures, and broad-spectrum antibiotics”; the option count and the key index are unchanged" },
  { n: 3, p: 1763, id: 'pedep2-car-19', file: EP2, sep: ',',
    tail: "dropping “to the ward” and the ward round, timing the murmur as “The next morning”, and giving “Heart sounds are normal, no pulmonary edema is present” where this entry gives “an ejection systolic murmur with normal heart sounds and no radiation”, hyphenating “out-patient ECHO” against this entry’s “outpatient ECHO”, adding “Change the present antibiotic” as a fifth option, and shortening the key to “…inform the GP to re-evaluate after recovery” from this entry’s “…re-evaluate the child once she has recovered from illness”; the key stays fourth" },
  { n: 19, p: 1796, id: 'pedep-inf-72', file: EP1, sep: ',',
    tail: "printing the vignette in full — the 24-month-old brought in by her mother, a triage temperature of 38.7°C, antipyretics given pending medical review, 37.7°C ninety minutes later, and a well-hydrated child with good social interaction — where this entry condenses it to a well-appearing 2-year-old with fever and no localizing signs, and writing each option as an instruction (“Request a CXR”, “Take blood for inflammatory markers”, “Take a blood culture”, “Request a urine dipstick”, “Discharge the child home”) where this entry prints the bare nouns; the option count and the key index are unchanged" },
  { n: 34, p: 1827, id: 'pedep2-mal-19', file: EP2, sep: ',',
    tail: "opening with two sentences this entry does not print — that ALL is the commonest form of childhood leukaemia and carries a 5-year survival rate of over 80%, and that prognosis depends on a number of factors — labelling the first option “White cell count (WCC) >50 × 10^9/L at diagnosis” where this entry omits the abbreviation, dropping “years” from “Age >10 at diagnosis”, and printing the key “Non-B cell or non-T cell leukaemia” against this entry’s “Non-B cell, non-T cell leukaemia”; the option count and the key index are unchanged" },
  { n: 69, p: 1899, id: 'pedep2-res-47', file: EP2, sep: ',',
    tail: "asking for “a common cause” of chronic wet (productive) cough where this entry asks for “the most common cause” of chronic wet cough, and rebuilding the menu to five — Bronchial asthma, Habit cough, Tracheomalacia and Bacterial tracheitis in place of this entry’s Bacterial bronchitis, Viral bronchitis and Asthma — which moves the key Persistent bacterial bronchitis from this entry’s first option to the exam’s third; the key text is unchanged" },
  { n: 79, p: 1919, id: 'pedep2-res-42', file: EP2, sep: ',',
    tail: "asking which drug class “is among the preventer therapy for bronchial asthma” where this entry asks which “is considered an asthma preventer”, and rebuilding the four-option menu — Short-acting β2-agonists, Long-acting β2-agonists and IV steroids in place of this entry’s Short-acting beta agonists (SABA), Oral antihistamines and Intravenous magnesium sulfate — which moves the key from this entry’s first option to the exam’s third, where it is printed “Inhaled steroids” against this entry’s “Inhaled corticosteroids”; the option count is unchanged" },
  { n: 80, p: 1921, id: 'pedep2-mf1-41', file: EP2, sep: ',',
    tail: "asking the median age “for a child to achieve mature pincer grip” where this entry asks for “the median age of mature pincer grasp”, and printing the five ages as 5, 7, 9, 10 and 12 months against this entry’s 8, 10, 12, 14 and 16 months, which moves the key 10 months from this entry’s second option to the exam’s fourth; the key text and the option count are unchanged" },
];

const ap   = s => String(s).replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"');
const flat = t => ap(t).toLowerCase().replace(/[.,;:]/g, '').replace(/\s+/g, ' ').trim();

function clauseFor(F) {
  // A part-2 target does not name the file: its source already opens with it.  A part-1 target must,
  // because its source opens with part1.pdf and the two books both have a Model Final Exam 4.
  const where = F.file === EP1
    ? 'reprinted in Pediatrics endpoint part2.pdf, ' + EXAM + ', p.' + F.p
    : 'reprinted in ' + EXAM + ', p.' + F.p;
  if (!F.tail) return where;
  return where + (F.sep === ';' ? '; ' : ', ') + F.tail;
}

// Find one entry's block by scanning structurally.  Three entry shapes are live in these files --
// multi-line with single-quoted source, multi-line with double-quoted source, and a one-line-ish
// form ending `source:'...' },` -- so nothing here anchors on a fixed layout.
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
  // Where the citation already ends in a parenthetical the clause joins it with '; ' rather than
  // opening a second one beside it.  This is also what makes a doubled target work: the second
  // clause merges into the parenthetical the first one opened.
  const neu = /\)$/.test(inner) ? inner.slice(0, -1) + '; ' + clause + ')' : inner + ' (' + clause + ')';
  return head + q + neu + q + punct;
}

function loadLive(f, v) {
  vm.runInThisContext(fs.readFileSync(D + f, 'utf8'), { filename: f });
  const a = globalThis[v] || [], out = [];
  let holes = 0;
  for (let i = 0; i < a.length; i++) { if (i in a) out.push(a[i]); else holes++; }
  return { n: out.length, holes: holes, all: out };
}

let bad = 0;
const fail = m => { console.log('  FAIL  ' + m); bad++; };

if (PLAN.length !== EXPECTED) fail('PLAN holds ' + PLAN.length + ' rows, expected ' + EXPECTED);

const seenN = new Set(), byTarget = new Map();
for (const F of PLAN) {
  if (seenN.has(F.n)) fail('question n' + F.n + ' is planned twice');
  seenN.add(F.n);
  if (!byTarget.has(F.id)) byTarget.set(F.id, []);
  byTarget.get(F.id).push(F.n);
}
for (const [id, ns] of byTarget) {
  if (ns.length === 1) continue;
  const ok = DOUBLE_OK[id];
  if (!ok) fail('target ' + id + ' is named by ' + ns.length + ' questions (n' + ns.join(', n') + ') and is not declared');
  else if (ok.length !== ns.length || ok.some((v, i) => v !== ns[i]))
    fail('target ' + id + ' is declared for n' + ok.join(', n') + ' but planned for n' + ns.join(', n'));
}
for (const id of Object.keys(DOUBLE_OK))
  if (!byTarget.has(id)) fail('DOUBLE_OK names ' + id + ', which no PLAN row targets');

vm.runInThisContext(fs.readFileSync(STAGING, 'utf8'), { filename: STAGING });
const STAGED = (globalThis[SVAR] || []).filter(Boolean);
if (STAGED.length !== 80) throw new Error('staging holds ' + STAGED.length + ' entries, expected 80');
const byN = new Map(STAGED.map(s => [s.n, s]));

const live = {};
live[EP2] = loadLive(EP2, 'Q_PEDS_EP2');
live[EP1] = loadLive(EP1, 'Q_PEDS_EP');
for (const f of [EP2, EP1]) if (live[f].holes) fail(f + ' has ' + live[f].holes + ' sparse holes');
const byId = new Map();
for (const f of [EP2, EP1]) for (const q of live[f].all) byId.set(q.id, { f: f, q: q });

for (const F of PLAN) {
  const tag = 'n' + F.n + ' (p.' + F.p + ' -> ' + F.id + ')';
  const s = byN.get(F.n);
  if (!s) { fail(tag + ': no staged question with that n'); continue; }
  if (s.p !== F.p) fail(tag + ': staging puts n' + F.n + ' on p.' + s.p);
  if (s.p < PAGE_LO || s.p > PAGE_HI) fail(tag + ': p.' + s.p + ' is outside ' + PAGE_LO + '-' + PAGE_HI);

  const L = byId.get(F.id);
  if (!L) { fail(tag + ': target does not exist in either file'); continue; }
  if (L.f !== F.file) { fail(tag + ': target lives in ' + L.f + ', PLAN says ' + F.file); continue; }

  const liveKey = L.q.options[L.q.answer], examKey = s.opts[s.key];
  if (flat(liveKey) !== flat(examKey)) {
    const ok = KEYTEXT_OK[F.n];
    if (!ok) fail(tag + ': key text differs and is not declared -- live "' + liveKey + '" vs exam "' + examKey + '"');
    else if (flat(ok[0]) !== flat(liveKey) || flat(ok[1]) !== flat(examKey))
      fail(tag + ': declared key text does not match what is on disk -- live "' + liveKey + '" vs exam "' + examKey + '"');
  }
  if (L.q.answer !== s.key) {
    const ok = KEYINDEX_OK[F.n];
    if (!ok) fail(tag + ': key index differs and is not declared -- live ' + L.q.answer + ' vs exam ' + s.key);
    else if (ok[0] !== L.q.answer || ok[1] !== s.key)
      fail(tag + ': declared key index does not match disk -- live ' + L.q.answer + ' vs exam ' + s.key);
  }
  if (L.q.options.length !== s.opts.length) {
    const ok = OPTCOUNT_OK[F.n];
    if (!ok) fail(tag + ': option counts differ and it is not declared -- live ' + L.q.options.length + ' vs exam ' + s.opts.length);
    else if (ok[0] !== L.q.options.length || ok[1] !== s.opts.length)
      fail(tag + ': declared option counts do not match disk -- live ' + L.q.options.length + ' vs exam ' + s.opts.length);
  }
}

// Idempotency is keyed on the exact clause, never on the bare exam name: part 1's own reprints
// already name Model Final Exam 4, and section 15's own targets may name Model Final Exam 1, 2 or 3.
const todo = [];
for (const F of PLAN) {
  const L = byId.get(F.id);
  if (!L) continue;
  const clause = clauseFor(F);
  if (String(L.q.source).indexOf(clause) !== -1) console.log('  already cited, skipping: n' + F.n + ' ' + F.id);
  else todo.push({ F: F, clause: clause });
}

console.log('');
console.log('PLAN ' + PLAN.length + ' rows -- ' + PLAN.filter(F => F.file === EP2).length + ' in ' + EP2 +
            ', ' + PLAN.filter(F => F.file === EP1).length + ' in ' + EP1 +
            ' (' + byTarget.size + ' distinct targets; ' + Object.keys(DOUBLE_OK).length + ' of them cited twice)');
console.log('to write: ' + todo.length + ' (whether each merges or opens a parenthetical is counted at write time)');
if (bad) { console.log(''); console.log(bad + ' PROBLEM(S). Nothing written.'); process.exit(1); }

// Before-state of both marks, measured rather than assumed.
for (const M of MARKS) {
  const src = fs.readFileSync(D + M.file, 'utf8');
  const before = src.split(M.mark).length - 1;
  console.log('  before: "' + M.mark + '" appears ' + before + ' time(s) in ' + M.file);
}

if (!WRITE) {
  console.log('');
  for (const t of todo.slice(0, 3)) console.log('  sample n' + t.F.n + ': ' + t.clause);
  console.log('');
  console.log('DRY RUN. Nothing written. Re-run with --write.');
  process.exit(0);
}

const files = {};
for (const f of [EP2, EP1]) files[f] = fs.readFileSync(D + f, 'utf8').split('\n');
let merged = 0, opened = 0;
for (const t of todo) {
  const lines = files[t.F.file];
  const blk = entryBlock(lines, t.F.id);
  let si = -1;
  for (let i = blk.from; i <= blk.to; i++) if (/^\s*source:/.test(lines[i])) { si = i; break; }
  if (si === -1) throw new Error('no source line inside the block for ' + t.F.id);
  if (/\)\s*['"]\s*(?:\})?\s*,?\s*$/.test(lines[si])) merged++; else opened++;
  lines[si] = mergeCitation(lines[si], t.clause);
}
for (const f of [EP2, EP1]) fs.writeFileSync(D + f, files[f].join('\n'));
console.log('written: ' + todo.length + ' citations -- ' + merged + ' merged into an existing parenthetical, ' + opened + ' opened a new one');

for (const f of [EP2, EP1]) {
  const r = cp.spawnSync('node', ['--check', D + f], { encoding: 'utf8' });
  if (r.status !== 0) { console.log('  node --check FAILED on ' + f); console.log(r.stderr); process.exit(1); }
  console.log('  node --check ' + f + ': ok');
}

// Reloading is the only way to know the write did not eat an entry.  A citation edit must not move
// either count by one.
const before2 = { [EP2]: live[EP2].n, [EP1]: live[EP1].n };
const after = {};
after[EP2] = loadLive(EP2, 'Q_PEDS_EP2');
after[EP1] = loadLive(EP1, 'Q_PEDS_EP');
for (const f of [EP2, EP1]) {
  const ok = after[f].n === before2[f] && after[f].holes === 0;
  console.log('  ' + f + ': ' + before2[f] + ' -> ' + after[f].n + ' entries, ' + after[f].holes + ' holes  ' + (ok ? 'ok' : 'CHANGED -- investigate'));
  if (!ok) bad++;
}

// Census: each file is scanned only for its own rows, because part 1 already carries a byte-identical
// clause of its own for a different question on a colliding page number.
for (const M of MARKS) {
  const src = fs.readFileSync(D + M.file, 'utf8');
  const n = src.split(M.mark).length - 1;
  const ok = n === M.expect;
  console.log('  census ' + M.file + ': "' + M.mark + '" x' + n + ' (expected ' + M.expect + ') ' + (ok ? 'ok' : 'MISMATCH'));
  if (!ok) bad++;
}

// Every planned clause must now be readable on its own target, in the right file.  The five doubled
// targets are read twice, once per clause, so a second clause that silently overwrote the first
// would be caught here rather than by the census alone.
let placed = 0;
const after2 = new Map();
for (const f of [EP2, EP1]) for (const q of after[f].all) after2.set(q.id, { f: f, q: q });
for (const F of PLAN) {
  const L = after2.get(F.id);
  if (!L) { console.log('  target vanished: ' + F.id); bad++; continue; }
  if (String(L.q.source).indexOf(clauseFor(F)) === -1) { console.log('  clause missing on ' + F.id + ' (n' + F.n + ')'); bad++; }
  else placed++;
}
console.log('  ' + placed + ' of ' + PLAN.length + ' clauses read back off their targets');

console.log('');
console.log(bad ? bad + ' PROBLEM(S) after the write.' : 'section 15 reprints written and verified.');
process.exit(bad ? 1 : 0);

