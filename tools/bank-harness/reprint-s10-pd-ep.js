// Section 10 (Model Final Exam 1) reprint pass over app/data/questions.peds.ep.js.
//   node tools/bank-harness/reprint-s10-pd-ep.js            # dry run, writes nothing
//   node tools/bank-harness/reprint-s10-pd-ep.js --write
//
// ⚠️ THIS PASS DROPS NOTHING AND CHANGES NO KEY. It is not a fold in the fold*-pd-ep.js sense:
// those pick a survivor from two LIVE entries and delete the loser. Here the 30 reprints were
// never drafted at all -- the exam reprints a question the body already printed, so the entry
// that would have been created is not created, and the live entry's `source` gains the exam page.
// Entry count is unchanged by design; `source` is the only field any entry gains.
//
// WHY IT RUNS BEFORE THE SPLICE. splice-pd-ep.js demands every staged n be drafted exactly once.
// Section 10 stages 80 and drafts 50, so SEC[10].reprints there records the 30 that are
// deliberately absent. This file is where that list is PROVED against the two files on disk --
// the splicer only reads the count.
//
// Written with the Write tool, not a heredoc: the heredoc collapses \\ to \ and would eat the
// regexes below.
const fs = require('fs'), vm = require('vm');
const R = 'D:/claude os/Medical school/Herophilus/';
const LIVE = R + 'app/data/questions.peds.ep.js';

// ---- the map, one line per reprint: staged n -> live id, and what the exam printing did ----
//
// EXACT (25): stem, options and printed key all identical. Six of these -- n1, n23, n24, n28,
// n52, n69 -- differ from the live entry ONLY in the apostrophe glyph (staging recorded ASCII
// U+0027, the live entry curly U+2019). The journal called all 25 "byte-exact"; strictly, 19 are.
// The difference is cosmetic and is NOT written into any source: the standing rule transcribes
// cosmetic variation silently rather than cataloguing it in 6 user-visible strings. The pair
// check below is apostrophe-blind for that reason, and strict about everything else.
//
// NEAR (5): each names, in its own words, what moved. These are the documented fold shapes.
const EXACT = {
  1: 'gp-11', 2: 'nut-67', 3: 'nut-68', 6: 'gp-12', 11: 'nut-69', 13: 'emg-60', 15: 'alg-8',
  16: 'emg-61', 17: 'nut-75', 21: 'gp-13', 22: 'gp-79', 23: 'nut-70', 24: 'gp-14', 27: 'nut-71',
  28: 'nut-72', 38: 'gp-88', 40: 'alg-9', 44: 'gp-15', 46: 'gi-61', 52: 'gp-16', 64: 'gp-85',
  65: 'gi-63', 66: 'gp-17', 67: 'nut-73', 69: 'gp-89',
};
const NEAR = {
  // Each clause below was written from the two texts on disk, not from the journal's summary of
  // them: the journal describes n12 and n47 from the exam's side, and read the other way round
  // both come out backwards in a source line, which is where a reader would meet them.
  12: ['emg-47', 'reprinted in Model Final Exam 1, p.PAGE, without the “Obtain a chest x-ray” ' +
       'option and with the options left unpunctuated, which moves the key letter; the key text is unchanged'],
  47: ['gp-10', 'reprinted again in Model Final Exam 1, p.PAGE, with “drive” once more reworded ' +
       'to “driver”; the options are unchanged'],
  48: ['gp-4', 'reprinted in Model Final Exam 1, p.PAGE, again with the fifth option ' +
       '(“Plagiocephalic”, inserted third), which moves the key letter; the key text is unchanged'],
  50: ['gi-1', 'and again in Model Final Exam 1, p.PAGE, in the same shortened form as p.538'],
  62: ['emg-50', 'reprinted in Model Final Exam 1, p.PAGE, with the key option abbreviated; ' +
       'the printing above is the fuller one'],
};

// ---- load ----
vm.runInThisContext(fs.readFileSync(R + 'content/peds/qb-pages/endpoint-s10-mfe1.array.js', 'utf8'));
const S = globalThis.PEDEP_S10_STAGED;
if (!Array.isArray(S)) { console.error('staging did not load'); process.exit(2); }
const liveSrc = fs.readFileSync(LIVE, 'utf8');
vm.runInThisContext(liveSrc, { filename: 'questions.peds.ep.js' });
const L = globalThis.Q_PEDS_EP;
if (!Array.isArray(L)) { console.error('live did not load'); process.exit(2); }
const byId = new Map(L.map(q => [q.id, q]));

// Apostrophe-blind ONLY. Nothing else is relaxed: a dropped word, a changed number or a
// different option is a mismatch and halts the pass.
const ap = s => String(s).replace(/\u2019/g, "'");

const fail = [], plan = [];

function target(n, suf) {
  const id = 'pedep-' + suf;
  const q = byId.get(id);
  if (!q) { fail.push('n' + n + ' -> ' + id + ': not live'); return null; }
  if (/Model Final Exam 1/.test(q.source || '')) { fail.push('n' + n + ' -> ' + id + ': source already names Model Final Exam 1 -- this pass has already run'); return null; }
  return q;
}

Object.keys(EXACT).forEach(k => {
  const n = Number(k), s = S.find(x => x.n === n);
  const q = target(n, EXACT[k]);
  if (!q) return;
  if (ap(q.stem) !== ap(s.stem)) fail.push('n' + n + ' -> ' + q.id + ': stem differs beyond the apostrophe');
  if (JSON.stringify(q.options.map(ap)) !== JSON.stringify(s.opts.map(ap))) fail.push('n' + n + ' -> ' + q.id + ': options differ beyond the apostrophe');
  if (q.answer !== s.key) fail.push('n' + n + ' -> ' + q.id + ': KEY DISAGREES -- live ' + q.answer + ', exam ' + s.key + '. Record it, never fold it.');
  plan.push([q, 'reprinted word for word in Model Final Exam 1, p.' + s.p]);
});

Object.keys(NEAR).forEach(k => {
  const n = Number(k), s = S.find(x => x.n === n);
  const q = target(n, NEAR[k][0]);
  if (!q) return;
  // A near reprint is not proved by text equality -- it was proved on the page and written up in
  // progress/resume-peds-endpoint.md §10. What IS checked here is that the key still lands on the
  // same option TEXT, which is the distinction a similarity score cannot make. Punctuation-blind,
  // for the reason recorded in the journal: one printing punctuates its options and the other
  // does not, and left strict that single full stop reads as a contradiction in the book.
  const flat = t => ap(t).toLowerCase().replace(/[.,;:]/g, '').replace(/\s+/g, ' ').trim();
  const liveKey = flat(q.options[q.answer]), examKey = flat(s.opts[s.key]);
  if (liveKey !== examKey) {
    // ⚠️ ONE NAMED EXCEPTION, AND IT IS NOT A WAIVER. n62 is the abbreviated-key-option shape the
    // journal adjudicated on the page: the exam prints the same key option with words REMOVED
    // ("soft", and the sleep-positioner clause), which a strict comparison cannot tell apart from
    // the two printings disagreeing about the answer -- the one distinction that matters here.
    // So the exception is proved rather than asserted: every word of the exam's key must already
    // appear in the live key. A single word the exam ADDS means it is not an abbreviation, and
    // the pass halts. Nothing else in this file is relaxed, and no other n may join this list
    // without its own page render behind it.
    const ABBREV_OK = { 62: 'emg-50' };
    const words = t => t.split(' ').filter(Boolean);
    const liveSet = new Set(words(liveKey));
    const added = words(examKey).filter(w => !liveSet.has(w));
    if (ABBREV_OK[n] === NEAR[k][0] && examKey.length < liveKey.length && !added.length) {
      console.log('n' + n + ' -> ' + q.id + ': key option ABBREVIATED in the exam printing (' +
        words(liveKey).length + ' words -> ' + words(examKey).length + ', none added). Adjudicated on the page; the fuller printing survives.');
    } else {
      fail.push('n' + n + ' -> ' + q.id + ': KEY TEXT DIFFERS -- live "' + q.options[q.answer] + '", exam "' + s.opts[s.key] + '"' +
        (added.length ? ' (exam ADDS: ' + added.join(' ') + ')' : '') + '. Record it, never fold it.');
    }
  }
  plan.push([q, NEAR[k][1].replace('PAGE', String(s.p))]);
});

if (fail.length) { console.log('FAILURES:\n  ' + fail.join('\n  ')); process.exit(1); }
if (plan.length !== 30) { console.log('expected 30 reprints, planned ' + plan.length); process.exit(1); }

// ---- rewrite each source, byte-level, in the live text ----
// The existing sources are two shapes: a bare citation, and a citation with a trailing
// parenthetical. Appending a second parenthetical to the latter reads badly, so the clause is
// merged into the one already there.
let out = liveSrc, edited = 0;
for (const [q, clause] of plan) {
  const old = q.source;
  const neu = /\)$/.test(old) ? old.slice(0, -1) + '; ' + clause + ')' : old + ' (' + clause + ')';
  const needle = JSON.stringify(old);
  const single = "'" + old.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
  let hit = null;
  if (out.indexOf(needle) >= 0) hit = [needle, JSON.stringify(neu)];
  else if (out.indexOf(single) >= 0) hit = [single, "'" + neu.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'"];
  if (!hit) { console.error('could not locate the source text of ' + q.id + ' in the live file'); process.exit(1); }
  if (out.split(hit[0]).length - 1 !== 1) { console.error(q.id + ': its source text appears ' + (out.split(hit[0]).length - 1) + ' times -- not a unique anchor'); process.exit(1); }
  out = out.replace(hit[0], hit[1]);
  edited++;
  console.log(q.id.padEnd(14) + ' <- ' + clause);
}

function count(text) {
  vm.runInThisContext(text, { filename: 'questions.peds.ep.js (in memory)' });
  const a = globalThis.Q_PEDS_EP;
  let holes = 0;
  for (let i = 0; i < a.length; i++) if (!(i in a)) holes++;
  return { n: a.length, holes, srcs: a.filter(q => /Model Final Exam 1/.test(q.source || '')).length };
}
const before = count(liveSrc);
let after;
try { after = count(out); } catch (e) { console.error('REWRITTEN FILE DOES NOT PARSE: ' + e.message); process.exit(1); }
if (after.n !== before.n) { console.error('ENTRY COUNT MOVED: ' + before.n + ' -> ' + after.n + '. This pass must not change it.'); process.exit(1); }
if (after.holes) { console.error('REWRITTEN FILE HAS HOLES'); process.exit(1); }
if (after.srcs !== 30) { console.error('expected 30 sources naming Model Final Exam 1, got ' + after.srcs); process.exit(1); }

console.log('edited ' + edited + ' sources | entries ' + before.n + ' -> ' + after.n + ' (unchanged, as intended) | holes ' + after.holes);
if (!process.argv.includes('--write')) { console.log('DRY RUN. Re-run with --write.'); process.exit(0); }
fs.writeFileSync(LIVE, out, 'utf8');
const chk = count(fs.readFileSync(LIVE, 'utf8'));
console.log('written. entries ' + chk.n + ' | holes ' + chk.holes + ' | sources naming Model Final Exam 1: ' + chk.srcs);
