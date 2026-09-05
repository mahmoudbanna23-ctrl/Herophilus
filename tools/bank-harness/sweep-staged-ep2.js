// Reprint sweep for a peds ENDPOINT PART 2 section, run AFTER it is staged and BEFORE it is drafted.
//   node tools/bank-harness/sweep-staged-ep2.js <section>
//   node tools/bank-harness/sweep-staged-ep2.js --self-test
//
// This is the part-2 sibling of sweep-staged-ep.js and it is a separate file on purpose: part 1 is
// written by another live chat, so the two tools must never share a section table or a live-file
// path. The matcher, the thresholds and the four arms are carried over unchanged, including the
// two traps part 1 measured the hard way and recorded in its own header:
//
//   * lev() is NOT used on stems. It is a BOUNDED matcher (returns 99 past a 6-character length
//     gap), so `1 - lev(a,b)/maxLen` scored any two unrelated ~780-character stems at 0.873. The
//     self-test passed 67/67 BECAUSE of the bug -- it only ever asked whether true pairs scored
//     high, never whether false pairs scored low. Word-bigram Dice, and a NEGATIVE CONTROL.
//   * A prefix probe cannot see a reprint that reworded its opening, and a stem probe cannot see a
//     reprint that was ABBREVIATED to a stub. The option-set arm exists for the second shape and
//     is the only thing that finds it.
//
// The pools, and what each one means here:
//   (a) app/data/questions.peds.ep2.js  -- THIS file. A hit is a FOLD candidate.
//   (b) app/data/questions.peds.js      -- Chat B's House bank. RECORDED, never folded.
//   (e) app/data/questions.peds.ep.js   -- PART 1. A hit is a FOLD candidate, same as (a).
//       ⚠️ CORRECTED 2026-09-05, and the old note here was wrong twice over. It said nothing folds
//       across the part-1/part-2 boundary while both chats are live -- true only until part 1
//       closed, which it has. And it said the two files "merge by ADDING a bank", which they never
//       could: both carry bank:'endpoint', so the split is two source PDFs, not two banks. A
//       part-1/part-2 match is a WITHIN-bank duplicate. It folds by deleting the lesser printing,
//       or by not drafting the staged entry at all, and the survivor's `source` gains the citation.
//       Adding a bank is the HOUSE shape, leg (b), and belongs nowhere near this leg.
//   (c) the other staged entries in the same section -- a within-section reprint.
//
// It RESOLVES NOTHING. Every hit is a page to open, not a verdict.
//
// Written with the Write tool: the Bash heredoc collapses \\ to \ and would eat these regexes.
const fs = require('fs'), vm = require('vm');
const R = 'D:/claude os/Medical school/Herophilus/';
const { tight, words } = require('./norm.js');

const SEC = {
  1:  { base: 'endpoint-p2-s01-normal-dev',   svar: 'PEDEP2_S01_STAGED' },
  2:  { base: 'endpoint-p2-s02-dev-problems', svar: 'PEDEP2_S02_STAGED' },
  3:  { base: 'endpoint-p2-s03-genetics',     svar: 'PEDEP2_S03_STAGED' },
  4:  { base: 'endpoint-p2-s04-haematology',  svar: 'PEDEP2_S04_STAGED' },
  5:  { base: 'endpoint-p2-s05-respiratory',  svar: 'PEDEP2_S05_STAGED' },
  6:  { base: 'endpoint-p2-s06-cardiac',      svar: 'PEDEP2_S06_STAGED' },
  7:  { base: 'endpoint-p2-s07-renal',        svar: 'PEDEP2_S07_STAGED' },
  8:  { base: 'endpoint-p2-s08-neuro',        svar: 'PEDEP2_S08_STAGED' },
  9:  { base: 'endpoint-p2-s09-endocrine',    svar: 'PEDEP2_S09_STAGED' },
  10: { base: 'endpoint-p2-s10-liver',        svar: 'PEDEP2_S10_STAGED' },
  11: { base: 'endpoint-p2-s11-malignant',    svar: 'PEDEP2_S11_STAGED' },
  // ⚠️ Sections 12-15 are MODEL EXAMS and reprint the body sections wholesale. A long (a) list is
  // the EXPECTED shape there, and a SHORT one is the finding. Run reprint-pd-ep2.js over the range
  // before drafting those, as the section plan requires.
  12: { base: 'endpoint-p2-s12-mfe1',         svar: 'PEDEP2_S12_STAGED' },
  13: { base: 'endpoint-p2-s13-mfe2',         svar: 'PEDEP2_S13_STAGED' },
  14: { base: 'endpoint-p2-s14-mfe3',         svar: 'PEDEP2_S14_STAGED' },
  15: { base: 'endpoint-p2-s15-mfe4',         svar: 'PEDEP2_S15_STAGED' },
  16: { base: 'endpoint-p2-s16-recent-mod',   svar: 'PEDEP2_S16_STAGED' },
  17: { base: 'endpoint-p2-s17-recent-add',   svar: 'PEDEP2_S17_STAGED' },
};

// Similarity over WORD BIGRAMS, Dice coefficient. A reprint that reworded its tail still shares its
// opening, so a prefix probe finds it; a reprint that reworded its OPENING and kept the rest is
// invisible to a prefix probe. Bigram overlap catches both shapes and does not care that the two
// printings are different lengths.
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

// Two questions printing the same option MENU are not necessarily the same question. Section 8
// prints a shared four-option ladder across n10 and n11, which half A read on the page and recorded
// as a PAIRING, not a fold. An option-set match is reported as a pair; the stem decides.
function optKey(opts) {
  return (opts || []).map(o => tight(o)).sort().join('|');
}
function optSetSim(a, b) {
  const A = new Set((a || []).map(o => tight(o))), B = new Set((b || []).map(o => tight(o)));
  if (!A.size || !B.size) return 0;
  let hit = 0;
  A.forEach(o => { if (B.has(o)) hit++; });
  return 2 * hit / (A.size + B.size);
}
const OPT_THRESH = 0.75;

function live(file, varName) {
  const p = R + 'app/data/' + file;
  if (!fs.existsSync(p)) return [];
  vm.runInThisContext(fs.readFileSync(p, 'utf8'), { filename: file });
  const a = globalThis[varName] || [];
  // Array.filter SKIPS SPARSE HOLES, so index the array rather than filtering it.
  const out = [];
  for (let i = 0; i < a.length; i++) if (i in a) out.push(a[i]);
  return out;
}

function staged(secNum) {
  const cfg = SEC[secNum];
  const p = R + 'content/peds/qb-pages/' + cfg.base + '.array.js';
  if (!fs.existsSync(p)) { console.error('no staged array at ' + p); process.exit(2); }
  vm.runInThisContext(fs.readFileSync(p, 'utf8'), { filename: cfg.base });
  return globalThis[cfg.svar] || [];
}

// 0.55 sits BELOW the worst known non-pair measured on part 1's sections (0.700, two short stems
// sharing the template "what is the most common cause of X in children" and zero options). This
// sweep resolves nothing and every hit is looked at on the page, so the cheap error is a candidate
// that turns out not to be one and the expensive error is a reprint nobody is ever shown.
//
// ⚠️ Read any hit on a SHORT stem as template-suspect until the options agree.
const THRESH = 0.55;

// --self-test sweeps a CLOSED part-2 section against the live file it was spliced into, in two
// halves. Section 7 is the control: 55 staged, 51 live after four folds, spliced 2026-09-05.
//
//   POSITIVE: every staged entry that was NOT folded is live, so it must find its counterpart.
//   NEGATIVE: the SECOND-best live match is a known non-pair and must sit well below. Without this
//             half, a matcher that says yes to everything passes every test there is.
//
// ⚠️ A runner-up is only a known non-pair if it is a DIFFERENT QUESTION from the best match. A
// section holding near-identical live pairs the fold pass correctly kept apart will show its twin
// as the runner-up at ~1.000, which is a real property of the live file and not a matcher failure.
// Those are excluded from the negative band and counted separately.
// ⚠️⚠️ AND THE CONTROL MUST EXCLUDE THE FOLDED ENTRIES FROM THE POSITIVE BAND. Measured
// 2026-09-05, first run of this file. Section 7 staged 55 and spliced 51; the first version of this
// self-test put all 55 in the positive band and reported "NOT CLEAN -- the bands overlap". They do
// not. The 51 entries that went live score **1.000** against their own counterpart, every one of
// them. The four low scores were the FOLDED entries, which have no counterpart of their own by
// definition and were being scored against the entry they folded INTO -- a different printing, so a
// reprint-band score, which is the very thing this sweep exists to flag. Calling that an overlap
// was the control mis-reading a correct result. The four are reported separately now.
//
// ⚠️ ONE REAL FINDING SURVIVES THAT CORRECTION, and it is about the threshold, not the control:
// folded n51/p.920 scores **0.533** against pedep2-ren-31 -- a genuine reprint sitting BELOW
// THRESH. The fold pass caught it on the page image; this matcher would not have. n30 scores 0.642
// and n47 0.842. So the sweep's 0.55 does not bound the reprint band from below, and a section
// swept clean here is not a section proven free of reprints. Look at the pages.
const FOLDED_S07 = [30, 47, 49, 51];
if (process.argv.includes('--self-test')) {
  const S = staged(7), L = live('questions.peds.ep2.js', 'Q_PEDS_EP2');
  const LB = L.map(q => bigrams(q.stem));
  let hit = 0; const miss = [], trueScores = [], runnerUp = [], twins = [], folded = [];
  S.forEach(s => {
    const a = bigrams(s.stem);
    let b1 = { v: 0 }, b2 = { v: 0 };
    L.forEach((q, k) => {
      const v = sim(a, LB[k]);
      if (v > b1.v) { b2 = b1; b1 = { v: v, q: q }; } else if (v > b2.v) { b2 = { v: v, q: q }; }
    });
    if (FOLDED_S07.includes(s.n)) {
      // No live counterpart of its own -- this is a reprint-band score against its fold partner.
      folded.push('n' + s.n + ' p.' + s.p + ' -> ' + (b1.q && b1.q.id) + '  ' + b1.v.toFixed(3) +
        (b1.v < THRESH ? '   <-- BELOW THRESHOLD: a real reprint this matcher would have missed' : ''));
      return;
    }
    if (b1.v >= THRESH) hit++; else miss.push('n' + s.n + ' p.' + s.p + ' best ' + b1.v.toFixed(3));
    trueScores.push(b1.v);
    const twinned = b1.q && b2.q && sim(b1.q.stem, b2.q.stem) >= THRESH &&
      sim(optKey(b1.q.options).split('|').join(' '), optKey(b2.q.options).split('|').join(' ')) >= 0.5;
    if (twinned) twins.push(b1.q.id + ' / ' + b2.q.id + '  ' + b2.v.toFixed(3));
    else runnerUp.push(b2.v);
  });
  const mean = a => a.reduce((x, y) => x + y, 0) / a.length;
  console.log('self-test: section 7, ' + S.length + ' staged (' + trueScores.length +
    ' spliced live, ' + folded.length + ' folded) vs ' + L.length + ' live');
  console.log('  POSITIVE  recovered ' + hit + '/' + trueScores.length +
    '   best-match score min ' + Math.min.apply(null, trueScores).toFixed(3) + ' mean ' + mean(trueScores).toFixed(3));
  console.log('  NEGATIVE  ' + runnerUp.length + ' runner-ups, score max ' + Math.max.apply(null, runnerUp).toFixed(3) +
    ' mean ' + mean(runnerUp).toFixed(3) + '   (known NON-pairs -- they must sit well below)');
  console.log('  EXCLUDED  ' + twins.length + ' runner-ups that are twins of their own best match, not non-pairs:');
  twins.forEach(t => console.log('              ' + t));
  miss.forEach(m => console.log('  MISS ' + m));
  console.log('  FOLDED    ' + folded.length + ' staged entries with no counterpart of their own,');
  console.log('            scored against the entry they folded INTO -- a reprint-band score:');
  folded.forEach(f => console.log('              ' + f));
  const separated = Math.min.apply(null, trueScores) > Math.max.apply(null, runnerUp);
  console.log('  separation: ' + (separated ? 'clean -- every true pair outscores every non-pair' :
    'NOT CLEAN -- the bands overlap, do not trust a hit near the threshold'));
  process.exit(hit >= trueScores.length ? 0 : 1);
}

const secNum = process.argv[2];
if (!SEC[secNum]) { console.error('usage: node sweep-staged-ep2.js <' + Object.keys(SEC).join('|') + '> | --self-test'); process.exit(2); }

const S = staged(secNum);
const EP2 = live('questions.peds.ep2.js', 'Q_PEDS_EP2');
const EP1 = live('questions.peds.ep.js', 'Q_PEDS_EP');
const HD = live('questions.peds.js', 'Q_PEDS');

console.log('section ' + secNum + ': ' + S.length + ' staged entries, pp.' + S[0].p + '-' + S[S.length - 1].p);
console.log('pool: ' + EP2.length + ' live endpoint p2, ' + EP1.length + ' live endpoint p1, ' + HD.length + ' live House');
console.log('threshold ' + THRESH + ' on whole-stem similarity, ' + OPT_THRESH + ' on option sets');
console.log('');

const stagedNorm = S.map(s => bigrams(s.stem));
const EP2B = EP2.map(q => bigrams(q.stem));
const EP1B = EP1.map(q => bigrams(q.stem));
const HDB = HD.map(q => bigrams(q.stem));

// (c) within the section
console.log('--- (c) WITHIN-SECTION reprints -- fold candidates, judge on the page images ---');
let cN = 0;
for (let i = 0; i < S.length; i++) {
  for (let j = i + 1; j < S.length; j++) {
    const v = sim(stagedNorm[i], stagedNorm[j]);
    if (v >= THRESH) {
      cN++;
      console.log('  n' + S[i].n + ' (p.' + S[i].p + ')  ==  n' + S[j].n + ' (p.' + S[j].p + ')   sim ' + v.toFixed(3) +
        '   keys ' + S[i].key + '/' + S[j].key + (S[i].key !== S[j].key ? '  <-- KEYS DIFFER' : '') +
        '   opts ' + S[i].opts.length + '/' + S[j].opts.length);
    }
  }
}
if (!cN) console.log('  none');

// (a) against this bank's own live file
console.log('');
console.log('--- (a) AGAINST LIVE ENDPOINT PART 2 -- fold candidates, same file, judge on the images ---');
let aN = 0;
S.forEach((s, i) => {
  EP2.forEach((q, k) => {
    const v = sim(stagedNorm[i], EP2B[k]);
    if (v >= THRESH) {
      aN++;
      console.log('  n' + s.n + ' (p.' + s.p + ')  ==  ' + q.id + '   sim ' + v.toFixed(3) +
        '   key ' + s.key + ' / answer ' + q.answer + (s.key !== q.answer ? '  <-- KEYS DIFFER' : '') +
        '   ' + (q.source || ''));
    }
  });
});
if (!aN) console.log('  none');

// (e) against PART 1 -- fold candidates since part 1 closed and the two parts folded together
console.log('');
console.log('--- (e) AGAINST LIVE ENDPOINT PART 1 -- same bank, fold candidates, judge on the images ---');
let eN = 0;
S.forEach((s, i) => {
  EP1.forEach((q, k) => {
    const v = sim(stagedNorm[i], EP1B[k]);
    if (v >= THRESH) {
      eN++;
      console.log('  n' + s.n + ' (p.' + s.p + ')  ==  ' + q.id + '   sim ' + v.toFixed(3) +
        '   key ' + s.key + ' / answer ' + q.answer + (s.key !== q.answer ? '  <-- KEYS DIFFER' : '') +
        '   chapter ' + q.chapter);
    }
  });
});
if (!eN) console.log('  none');

// (b) against the House bank -- RECORDED, never folded
console.log('');
console.log('--- (b) AGAINST LIVE HOUSE -- cross-bank, RECORD ONLY, never fold, never delete ---');
let bN = 0;
S.forEach((s, i) => {
  HD.forEach((q, k) => {
    const v = sim(stagedNorm[i], HDB[k]);
    if (v >= THRESH) {
      bN++;
      console.log('  n' + s.n + ' (p.' + s.p + ')  ==  ' + q.id + '   sim ' + v.toFixed(3) +
        '   key ' + s.key + ' / answer ' + q.answer + (s.key !== q.answer ? '  <-- KEYS DIFFER' : '') +
        '   chapter ' + q.chapter);
    }
  });
});
if (!bN) console.log('  none');

// (d) OPTION-SET arm -- the shape the stem arms are structurally blind to. Only pairs whose stems
// did NOT already clear THRESH are printed, so this arm shows exactly what the stem missed.
console.log('');
console.log('--- (d) OPTION SETS matching where the STEMS did not -- abbreviated reprints hide here ---');
let dN = 0;
S.forEach((s, i) => {
  [[EP2, EP2B, 'endpoint p2'], [EP1, EP1B, 'endpoint p1'], [HD, HDB, 'House']].forEach(([pool, poolB, label]) => {
    pool.forEach((q, k) => {
      if (sim(stagedNorm[i], poolB[k]) >= THRESH) return;   // a stem arm already has it
      const v = optSetSim(s.opts, q.options);
      if (v >= OPT_THRESH) {
        dN++;
        console.log('  n' + s.n + ' (p.' + s.p + ')  ==  ' + q.id + '   options ' + v.toFixed(3) +
          '   stems ' + sim(stagedNorm[i], poolB[k]).toFixed(3) +
          '   key ' + s.key + ' / answer ' + q.answer + (s.key !== q.answer ? '  <-- KEYS DIFFER' : '') +
          '   [' + label + '] ' + (q.source || q.chapter || ''));
      }
    });
  });
});
if (!dN) console.log('  none');
console.log('  A hit here is a reprint candidate OR a shared menu. The stem decides which; look at the page.');

// Shared option menus -- a PAIRING, not a fold. Named so a drafter anchors the shared table once.
console.log('');
console.log('--- shared option MENUS inside the section -- these PAIR questions, they never fold ---');
const byOpts = {};
S.forEach(s => { const k = optKey(s.opts); (byOpts[k] = byOpts[k] || []).push(s); });
let mN = 0;
Object.keys(byOpts).forEach(k => {
  const g = byOpts[k];
  if (g.length > 1) {
    mN++;
    console.log('  n' + g.map(s => s.n + '(p.' + s.p + ',key' + s.key + ')').join(' n') +
      '  -- ' + g[0].opts.length + ' identical options');
  }
});
if (!mN) console.log('  none');

console.log('');
console.log('totals: within-section ' + cN + ', vs live p2 ' + aN + ', vs live p1 ' + eN +
  ', vs House ' + bN + ', option-set-only ' + dN + ', shared menus ' + mN);
console.log('A hit is a candidate to LOOK AT on the page, not a verdict. A miss is not proof of absence.');
