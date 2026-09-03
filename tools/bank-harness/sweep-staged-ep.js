// Reprint sweep for a peds ENDPOINT section, run AFTER it is staged and BEFORE it is drafted.
//   node tools/bank-harness/sweep-staged-ep.js <section>
//   node tools/bank-harness/sweep-staged-ep.js --self-test
//
// This supersedes reprint-pd-ep.js for any section that is already staged, and it exists because
// of a measured failure of that tool: reprint-pd-ep.js walks the pages the OCR INDEX classified
// as `answered`, and the index mis-filed p.584 as a question page, so the section-5 sweep reported
// "answered pages in range: 60" and never looked at p.584 at all. A sweep that takes its page set
// from a classifier inherits every mistake the classifier made.
//
// The staged array does not have that problem. It is the transcribed record of every answered page
// in the section, settled on the images one page at a time, so its page set is the section's true
// page set and its text is clean rather than OCR. Both sides of every comparison here are clean
// text, which is why this can compare WHOLE stems and option sets instead of a 70-character prefix.
//
// It compares each staged entry against
//   (a) every question already live in app/data/questions.peds.ep.js   -- this bank; a FOLD candidate
//   (b) every question live in app/data/questions.peds.js             -- Chat B's House bank
//   (c) every other staged entry in the same section                  -- a within-section reprint
//
// It RESOLVES NOTHING. (a) and (c) are folds for a later, separate pass to judge on the page
// images; (b) is cross-bank overlap that gets RECORDED and, once both banks close, merged by
// ADDING a bank to alsoIn -- never by deleting an entry. Neither chat folds into the other's file.
//
// Written with the Write tool: the Bash heredoc collapses \\ to \ and would eat these regexes.
const fs = require('fs'), vm = require('vm');
const R = 'D:/claude os/Medical school/Herophilus/';
// lev is deliberately NOT imported -- see the block comment on sim() below.
const { tight, words } = require('./norm.js');

const SEC = {
  1: { base: 'endpoint-s01-growth-puberty', svar: 'PEDEP_S01_STAGED' },
  2: { base: 'endpoint-s02-nutrition',      svar: 'PEDEP_S02_STAGED' },
  3: { base: 'endpoint-s03-gastro',         svar: 'PEDEP_S03_STAGED' },
  4: { base: 'endpoint-s04-accidents',      svar: 'PEDEP_S04_STAGED' },
  5: { base: 'endpoint-s05-emergencies',    svar: 'PEDEP_S05_STAGED' },
  6: { base: 'endpoint-s06-perinatal',      svar: 'PEDEP_S06_STAGED' },
  7: { base: 'endpoint-s07-neonatology',    svar: 'PEDEP_S07_STAGED' },
  8: { base: 'endpoint-s08-allergy',        svar: 'PEDEP_S08_STAGED' },
};

// Similarity over WORD BIGRAMS, Dice coefficient. A reprint that reworded its tail still shares
// its opening, so a prefix probe finds it; a reprint that reworded its OPENING and kept the rest
// is invisible to a prefix probe, and section 5 has one (p.586 / p.630). Bigram overlap catches
// both shapes and does not care that the two printings are different lengths.
//
// ⚠️⚠️ DO NOT PUT norm.js's lev() BACK IN HERE. It is a BOUNDED matcher, not a distance:
//   if (Math.abs(a.length - b.length) > 6) return 99;
// which is correct for the option-level work it was written for and catastrophic here. The first
// version of this file did `1 - lev(a,b)/maxLen` on whole stems, so any two UNRELATED stems of
// ~780 characters scored 1 - 99/780 = 0.873 and cleared a 0.82 threshold. Every staged entry
// "matched" every long live entry, and the self-test passed 67/67 BECAUSE of the bug: it only
// ever asked whether the true pair scored high, never whether a false pair scored low.
// Measured 2026-09-03. That is why --self-test now carries a NEGATIVE CONTROL, and why it must
// keep carrying one: a matcher that says yes to everything passes every positive test there is.
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

// Two questions printing the same option MENU are not necessarily the same question -- section 5
// prints one identical five-option resuscitation ladder across five different vignettes. So an
// option-set match is reported as a PAIR, never as a fold, and the stem is what decides.
function optKey(opts) {
  return (opts || []).map(o => tight(o)).sort().join('|');
}

// ⚠️ AND THE CONVERSE TRAP, measured on section 5, 2026-09-03. A stem probe cannot see a reprint
// that was ABBREVIATED. Staged n33/p.642 prints the whole Roberto burns vignette in 90 words; live
// pedep-acc-3/p.561 prints the same question as a 33-word stub. Same patient, same question, five
// IDENTICAL options in identical order, same key -- and the stems score 0.190, nowhere near any
// usable threshold. The stem arm missed it completely and the option set caught it outright.
// So the option sets are swept as their own arm. This is the mirror image of the shared-menu rule
// below: a menu match alone never folds anything, but it is the only thing that finds this shape.
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

// Measured on section 3, 2026-09-03: true pairs score 0.862 and up (mean 0.998); known non-pairs
// top out at 0.700. 0.55 therefore sits BELOW the worst non-pair, deliberately. This sweep resolves
// nothing and every hit is looked at on the page, so the cheap error is a candidate that turns out
// not to be one, and the expensive error is a reprint that is never shown to anybody.
//
// ⚠️ What the 0.700 is, because it will recur: two SHORT one-line stems built on the same template
// ("what is the most common cause of X in children") score 0.700 on the template alone while
// sharing zero options. Read any hit on a short stem as template-suspect until the options agree.
const THRESH = 0.55;

// --self-test sweeps a CLOSED section against the live file it was spliced into, and it has TWO
// halves. Both are needed, and the second is the one that matters.
//
//   POSITIVE: every section-3 staged entry is already live, so each must find its counterpart.
//   NEGATIVE: the SECOND-best live match for each staged entry is a known non-pair. If those
//             score anywhere near the true pairs, the matcher is saying yes to everything and
//             every positive result it has ever produced is worthless.
//
// The negative control exists because the first version of this file had none and shipped a
// matcher that scored unrelated stems at 0.873 (see sim()). A probe's zero is a claim about the
// probe first -- and so is a probe's hit.
//
// ⚠️ ONE CORRECTION, MEASURED 2026-09-03. The runner-up is only a known non-pair if it is a
// DIFFERENT QUESTION from the best match, and section 3 turns out to contain three near-identical
// live pairs the fold pass correctly kept apart -- pedep-gi-30/49 (identical stems, the KEY option
// itself differs), gi-4/59 and gi-7/46 (one distractor REPLACED, not dropped). For a staged entry
// whose true counterpart is one of those, the runner-up is the twin, scoring up to 1.000, and the
// first version of this control read that as the bands overlapping. It was reporting a real
// property of the live file as a matcher failure. So a runner-up that is itself a near-duplicate
// of the best match is excluded from the negative band and counted separately.
if (process.argv.includes('--self-test')) {
  const S = staged(3), L = live('questions.peds.ep.js', 'Q_PEDS_EP');
  const LB = L.map(q => bigrams(q.stem));
  let hit = 0; const miss = [], trueScores = [], runnerUp = [], twins = [];
  S.forEach(s => {
    const a = bigrams(s.stem);
    let b1 = { v: 0 }, b2 = { v: 0 };
    L.forEach((q, k) => {
      const v = sim(a, LB[k]);
      if (v > b1.v) { b2 = b1; b1 = { v: v, q: q }; } else if (v > b2.v) { b2 = { v: v, q: q }; }
    });
    if (b1.v >= THRESH) hit++; else miss.push('n' + s.n + ' p.' + s.p + ' best ' + b1.v.toFixed(3));
    trueScores.push(b1.v);
    // A twin shares its stem AND most of its option set. Stem alone is not enough: pedep-gi-64 and
    // -65 are different questions ("most common cause of recurrent abdominal pain" / "of
    // gastroenteritis") that score 0.700 on the shared template "what is the most common cause of X
    // in children" while sharing ZERO options. Excluding that as a twin would have quietly deleted a
    // real non-pair from the negative band and overstated the separation.
    const twinned = b1.q && b2.q && sim(b1.q.stem, b2.q.stem) >= THRESH &&
      sim(optKey(b1.q.options).split('|').join(' '), optKey(b2.q.options).split('|').join(' ')) >= 0.5;
    if (twinned) twins.push(b1.q.id + ' / ' + b2.q.id + '  ' + b2.v.toFixed(3));
    else runnerUp.push(b2.v);
  });
  const mean = a => a.reduce((x, y) => x + y, 0) / a.length;
  console.log('self-test: section 3, ' + S.length + ' staged vs ' + L.length + ' live');
  console.log('  POSITIVE  recovered ' + hit + '/' + S.length +
    '   best-match score min ' + Math.min.apply(null, trueScores).toFixed(3) + ' mean ' + mean(trueScores).toFixed(3));
  console.log('  NEGATIVE  ' + runnerUp.length + ' runner-ups, score max ' + Math.max.apply(null, runnerUp).toFixed(3) +
    ' mean ' + mean(runnerUp).toFixed(3) + '   (known NON-pairs -- they must sit well below)');
  console.log('  EXCLUDED  ' + twins.length + ' runner-ups that are twins of their own best match, not non-pairs:');
  twins.forEach(t => console.log('              ' + t));
  miss.forEach(m => console.log('  MISS ' + m));
  const separated = Math.min.apply(null, trueScores) > Math.max.apply(null, runnerUp);
  console.log('  separation: ' + (separated ? 'clean -- every true pair outscores every non-pair' :
    'NOT CLEAN -- the bands overlap, do not trust a hit near the threshold'));
  process.exit(hit >= 67 ? 0 : 1);
}

const secNum = process.argv[2];
if (!SEC[secNum]) { console.error('usage: node sweep-staged-ep.js <' + Object.keys(SEC).join('|') + '> | --self-test'); process.exit(2); }

const S = staged(secNum);
const EP = live('questions.peds.ep.js', 'Q_PEDS_EP');
const HD = live('questions.peds.js', 'Q_PEDS');

console.log('section ' + secNum + ': ' + S.length + ' staged entries, pp.' + S[0].p + '-' + S[S.length - 1].p);
console.log('pool: ' + EP.length + ' live endpoint, ' + HD.length + ' live House');
console.log('threshold ' + THRESH + ' on whole-stem similarity');
console.log('');

const stagedNorm = S.map(s => bigrams(s.stem));
const EPB = EP.map(q => bigrams(q.stem));
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

// (a) against this bank's live file
console.log('');
console.log('--- (a) AGAINST LIVE ENDPOINT -- fold candidates, same file, judge on the images ---');
let aN = 0;
S.forEach((s, i) => {
  EP.forEach((q, k) => {
    const v = sim(stagedNorm[i], EPB[k]);
    if (v >= THRESH) {
      aN++;
      console.log('  n' + s.n + ' (p.' + s.p + ')  ==  ' + q.id + '   sim ' + v.toFixed(3) +
        '   key ' + s.key + ' / answer ' + q.answer + (s.key !== q.answer ? '  <-- KEYS DIFFER' : '') +
        '   ' + (q.source || ''));
    }
  });
});
if (!aN) console.log('  none');

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

// (d) OPTION-SET arm -- the shape stages (a) and (b) are structurally blind to. Only pairs whose
// stems did NOT already clear THRESH are printed, so this arm shows exactly what the stem missed.
console.log('');
console.log('--- (d) OPTION SETS matching where the STEMS did not -- abbreviated reprints hide here ---');
let dN = 0;
S.forEach((s, i) => {
  [[EP, EPB, 'endpoint'], [HD, HDB, 'House']].forEach(([pool, poolB, label]) => {
    pool.forEach((q, k) => {
      if (sim(stagedNorm[i], poolB[k]) >= THRESH) return;   // the stem arm already has it
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
console.log("totals: within-section " + cN + ", vs live endpoint " + aN + ", vs House " + bN + ", option-set-only " + dN + ", shared menus " + mN);
console.log('A hit is a candidate to LOOK AT on the page, not a verdict. A miss is not proof of absence.');
