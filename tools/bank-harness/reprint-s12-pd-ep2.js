// Section 12 (Model Final Exam 1) reprint pass over app/data/questions.peds.ep2.js.
//   node tools/bank-harness/reprint-s12-pd-ep2.js            # dry run, writes nothing
//   node tools/bank-harness/reprint-s12-pd-ep2.js --write
//
// ⚠️ THIS PASS DROPS NOTHING AND CHANGES NO KEY. It is not a fold: a fold picks a survivor from two
// LIVE entries and deletes the loser. Here the 28 reprints were never drafted at all -- the exam
// reprints a question the body already printed, so the entry that would have been created is not
// created, and the live entry's `source` gains the exam page. Entry count is unchanged by design;
// `source` is the only field any entry gains.
//
// WHY IT RUNS BEFORE THE SPLICE. splice-pd-ep2.js demands every staged n be drafted exactly once.
// Section 12 stages 80 and drafts 52, so SEC[12].reprints there records the 28 that are deliberately
// absent, and its check 2a counts how many live sources name `reprintMark`. This file is where that
// list is PROVED against the two files on disk -- the splicer only ever reads the count.
//
// The verdicts below are not invented here. Each was read page against page and written up in
// content/peds/qb-pages/endpoint-p2-s12-fold-adjudication-A.md (n1-n30), -B.md (n31-n60) and
// -C.md (n61-n80), with the page image opened for every REPRINT call. This file re-derives what it
// can from the two texts and halts on anything it cannot.
//
// Written with the Write tool, not a heredoc: the heredoc collapses \\ to \ and would eat the
// regexes below.
const fs = require('fs'), vm = require('vm');
const R = 'D:/claude os/Medical school/Herophilus/';
const LIVE = R + 'app/data/questions.peds.ep2.js';
const MARK = 'Model Final Exam 1';

// ---- EXACT: stem, options and key identical apart from the apostrophe glyph. ----
// The staging records ASCII U+0027 where the live entries carry the curly U+2019; that difference is
// cosmetic and is transcribed silently rather than catalogued in a user-visible string, so the pair
// check below is apostrophe-blind and strict about everything else.
const EXACT = {
  18: 'hem-68',   // sim 1.000
  31: 'dp-2',     // sim 1.000, and already a second printing (p.99, p.1039) -- this is the third
  72: 'car-26',   // sim 1.000, box included; already p.680 + p.743 -- this is the third
};

// ---- NEAR: each clause names, in its own words, what the exam printing moved. ----
// Written from the two texts on disk rather than from the adjudication's summary of them, because a
// clause is read from the live entry's side, where the exam is the LATER printing.
const NEAR = {
  1:  ['nd-10', 'reprinted in Model Final Exam 1, p.PAGE, with the stem reworded and the option ' +
       'ladder rebuilt; the key text is unchanged'],
  2:  ['dp-4', 'and a third time in Model Final Exam 1, p.PAGE, with the same vignette, the same ' +
       'four options and the same key'],
  5:  ['gen-26', 'reprinted in Model Final Exam 1, p.PAGE, with the same five options and the same key'],
  6:  ['gen-18', 'reprinted in Model Final Exam 1, p.PAGE, which adds a fifth option, ' +
       '\u201CVitamin D levels\u201D; the key text is unchanged'],
  8:  ['ren-22', 'reprinted in Model Final Exam 1, p.PAGE, whose first option reads ' +
       '\u201CInflammatory bowel disease\u201D and whose laboratory values disagree with this ' +
       'printing\u2019s \u2014 see the explanation; the key is unchanged'],
  19: ['car-18', 'reprinted in Model Final Exam 1, p.PAGE, with the same five options and the same key'],
  21: ['res-54', 'reprinted in Model Final Exam 1, p.PAGE, in a six-year-old rather than a ' +
       'three-year-old and with the key option printed in full as \u201CThe presence of symptoms ' +
       'between coughs and colds\u201D; the key is unchanged'],
  22: ['neu-26', 'and again in Model Final Exam 1, p.PAGE, which gives the girl her age, twelve; ' +
       'the options and the key are unchanged'],
  23: ['neu-17', 'and again in Model Final Exam 1, p.PAGE, with the options reordered so the key ' +
       'is printed at E and with \u201CChorea\u201D replaced by \u201CDyskinesia\u201D; the key ' +
       'text is unchanged'],
  26: ['res-22', 'reprinted in Model Final Exam 1, p.PAGE, in a two-year-old and with the atopic ' +
       'history denied where this printing gives mild eczema; the options and the key are unchanged'],
  30: ['neu-33', 'reprinted in Model Final Exam 1, p.PAGE, with the same five options and the same key'],
  32: ['car-3', 'reprinted in Model Final Exam 1, p.PAGE, which names no patient and punctuates ' +
       'each option; the options and the key are unchanged'],
  34: ['neu-21', 'reprinted in Model Final Exam 1, p.PAGE, without the \u201CTet spells\u201D ' +
       'option; the key text is unchanged'],
  43: ['dp-10', 'reprinted in Model Final Exam 1, p.PAGE, with the options reordered and ' +
       '\u201CCT or MRI scan of the brain\u201D replaced by \u201CChromosome karyotype\u201D, ' +
       'which moves the key letter; the key text is unchanged'],
  45: ['neu-40', 'reprinted in Model Final Exam 1, p.PAGE, with this entry\u2019s five-option ' +
       'investigation menu rather than the four-option one, and the same key'],
  52: ['res-4', 'reprinted in Model Final Exam 1, p.PAGE, which names no patient and drops the ' +
       'sweat test from the fifth option; the key text is unchanged'],
  53: ['car-20', 'reprinted in Model Final Exam 1, p.PAGE, with \u201CIntravenous\u201D abbreviated ' +
       'to \u201CIV\u201D; the options and the key are unchanged'],
  56: ['ren-5', 'reprinted in Model Final Exam 1, p.PAGE, with the history and the urine findings ' +
       'worded differently; the options and the key are unchanged'],
  57: ['ren-20', 'reprinted in Model Final Exam 1, p.PAGE, whose box adds that the illness follows ' +
       'the streptococcal infection by one to two weeks; the options and the key are unchanged'],
  58: ['ren-21', 'reprinted in Model Final Exam 1, p.PAGE, without the ' +
       '\u201CMembranous glomerulonephritis\u201D option; the key text is unchanged'],
  60: ['ren-41', 'reprinted in Model Final Exam 1, p.PAGE, in question form, with ' +
       '\u201CCerebral strokes\u201D replaced by \u201CElectrolyte disturbances\u201D and the key ' +
       'option worded \u201CSusceptibility to infections\u201D; the answer is unchanged'],
  62: ['hem-74', 'reprinted in Model Final Exam 1, p.PAGE, with the statement reworded as a ' +
       'question; the five options and the key are unchanged'],
  66: ['neu-50', 'reprinted in Model Final Exam 1, p.PAGE, with the key option printed in full as ' +
       '\u201CBotulinum toxin injections to the spastic muscles\u201D at D and two distractors ' +
       'replaced \u2014 \u201CTreatment of the cause of cerebral palsy\u201D and ' +
       '\u201CRestriction of certain proteins in the diet\u201D for ' +
       '\u201CAnticonvulsants only\u201D and \u201CChemotherapy\u201D; the answer is unchanged'],
  68: ['res-23', 'reprinted in Model Final Exam 1, p.PAGE, which puts the consolidation in the ' +
       'right lower lobe rather than the left \u2014 see the explanation; the options and the key ' +
       'are unchanged'],
  75: ['hem-58', 'reprinted in Model Final Exam 1, p.PAGE, spelling the fourth option ' +
       '\u201CMiliary tuberculosis\u201D; the options and the key are unchanged'],
};

// ---- The seven places the key OPTION TEXT legitimately differs between printings. ----
// ⚠️ THIS IS NOT A WAIVER. A key-text mismatch is the one thing a similarity score cannot tell apart
// from the two printings disagreeing about the answer, so each exception below names both strings and
// the page it was adjudicated on, and the check for it is a comparison rather than an exemption. No n
// may join this list without its own page render behind it -- all seven here are in
// endpoint-p2-s12-fold-adjudication-A.md (n5, n8, n21, n26), -B.md (n53, n60) and -C.md (n66).
//
// Four of the seven are spelling or abbreviation variants. The standing rule transcribes cosmetic
// variation silently rather than cataloguing it in a user-visible string, and none of these four
// reaches one: they are named HERE, in the pass that has to distinguish them from a moved key, and
// nowhere else.
const KEYTEXT_OK = {
  5:  { id: 'gen-26',
        live: 'Acute leukaemia',
        exam: 'Acute leukemia',
        why: 'British against American spelling of the same word; adjudicated on p.1280' },
  8:  { id: 'ren-22',
        live: 'Hemolytic uraemic syndrome',
        exam: 'Hemolytic uremic syndrome',
        why: 'British against American spelling of the same word; adjudicated on p.1286' },
  21: { id: 'res-54',
        live: 'The presence of symptoms between colds',
        exam: 'The presence of symptoms between coughs and colds',
        why: 'the exam prints the same clause in full; adjudicated on p.1312' },
  26: { id: 'res-22',
        live: 'Viral wheeze',
        exam: 'Viral episodic wheeze',
        why: 'the exam prints the fuller name of the same diagnosis; adjudicated on p.1322' },
  53: { id: 'car-20',
        live: 'Intravenous infusion of prostaglandin E1',
        exam: 'IV infusion of prostaglandin E1',
        why: 'the exam abbreviates the route; adjudicated on p.1376' },
  60: { id: 'ren-41',
        live: 'Repeated infections',
        exam: 'Susceptibility to infections',
        why: 'the same answer in different words, and the live bank has already ruled ren-41 ' +
              '(most common) and ren-54 (major) deliberately separate; adjudicated on p.1390' },
  66: { id: 'neu-50',
        live: 'Botulinum toxin',
        exam: 'Botulinum toxin injections to the spastic muscles',
        why: 'the exam names the route and the target of the same treatment; adjudicated on p.1402' },
};

// ---- load ----
vm.runInThisContext(fs.readFileSync(R + 'content/peds/qb-pages/endpoint-p2-s12-mfe1.array.js', 'utf8'));
const S = globalThis.PEDEP2_S12_STAGED;
if (!Array.isArray(S)) { console.error('staging did not load'); process.exit(2); }
const liveSrc = fs.readFileSync(LIVE, 'utf8');
vm.runInThisContext(liveSrc, { filename: 'questions.peds.ep2.js' });
const L = globalThis.Q_PEDS_EP2;
if (!Array.isArray(L)) { console.error('live did not load'); process.exit(2); }
const byId = new Map(L.map(q => [q.id, q]));

const EXPECTED = 28;

// Apostrophe-blind ONLY, and quote-glyph-blind with it -- the staging records ASCII where the live
// entries carry curly quotes. Nothing else is relaxed: a dropped word, a changed number or a
// different option is a mismatch and halts the pass.
const ap = s => String(s).replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"');
// Punctuation-blind, for the reason the part-1 pass records: one printing punctuates its options and
// the other does not, and left strict that single full stop reads as a contradiction in the book.
const flat = t => ap(t).toLowerCase().replace(/[.,;:]/g, '').replace(/\s+/g, ' ').trim();

const fail = [], plan = [];

function target(n, suf) {
  const id = 'pedep2-' + suf;
  const q = byId.get(id);
  if (!q) { fail.push('n' + n + ' -> ' + id + ': not live'); return null; }
  if (new RegExp(MARK).test(q.source || '')) {
    fail.push('n' + n + ' -> ' + id + ': source already names ' + MARK + ' -- this pass has already run');
    return null;
  }
  return q;
}
function staged(n) {
  const s = S.find(x => x.n === n);
  if (!s) fail.push('n' + n + ': not in the staging array');
  return s;
}

Object.keys(EXACT).forEach(k => {
  const n = Number(k), s = staged(n), q = target(n, EXACT[k]);
  if (!s || !q) return;
  if (ap(q.stem) !== ap(s.stem)) fail.push('n' + n + ' -> ' + q.id + ': stem differs beyond the apostrophe');
  if (JSON.stringify(q.options.map(ap)) !== JSON.stringify(s.opts.map(ap)))
    fail.push('n' + n + ' -> ' + q.id + ': options differ beyond the apostrophe');
  if (q.answer !== s.key)
    fail.push('n' + n + ' -> ' + q.id + ': KEY DISAGREES -- live ' + q.answer + ', exam ' + s.key + '. Record it, never fold it.');
  plan.push([q, 'reprinted word for word in ' + MARK + ', p.' + s.p]);
});

Object.keys(NEAR).forEach(k => {
  const n = Number(k), s = staged(n), q = target(n, NEAR[k][0]);
  if (!s || !q) return;
  // A near reprint is not proved by text equality -- it was proved on the page image and written up
  // in the three adjudication files. What IS checked here is that the key still lands on the same
  // option TEXT, which is the distinction a similarity score cannot make.
  const liveKey = q.options[q.answer], examKey = s.opts[s.key];
  if (flat(liveKey) !== flat(examKey)) {
    const ex = KEYTEXT_OK[n];
    if (ex && ex.id === NEAR[k][0] && flat(ex.live) === flat(liveKey) && flat(ex.exam) === flat(examKey)) {
      console.log('n' + n + ' -> ' + q.id + ': key option WORDED DIFFERENTLY between printings -- ' +
        '"' + liveKey + '" / "' + examKey + '". ' + ex.why + '.');
    } else {
      fail.push('n' + n + ' -> ' + q.id + ': KEY TEXT DIFFERS -- live "' + liveKey + '", exam "' + examKey +
        '"' + (ex ? ' (the KEYTEXT_OK entry for n' + n + ' does not match these two strings)' : '') +
        '. Record it, never fold it.');
    }
  }
  plan.push([q, NEAR[k][1].replace('PAGE', String(s.p))]);
});

// Every reprint must sit on the page the staging says it does, and every one of them must be inside
// this section's page range -- a clause naming a page outside pp.1272-1430 would be a different exam.
for (const n of Object.keys(EXACT).concat(Object.keys(NEAR)).map(Number)) {
  const s = S.find(x => x.n === n);
  if (s && (s.p < 1272 || s.p > 1430)) fail.push('n' + n + ': staged page ' + s.p + ' is outside section 12');
}

if (fail.length) { console.log('FAILURES:\n  ' + fail.join('\n  ')); process.exit(1); }
if (plan.length !== EXPECTED) { console.log('expected ' + EXPECTED + ' reprints, planned ' + plan.length); process.exit(1); }
if (new Set(plan.map(p => p[0].id)).size !== EXPECTED) { console.log('two staged n point at the same live entry'); process.exit(1); }

// ---- rewrite each source, byte-level, in the live text ----
// The existing sources are two shapes: a bare citation, and a citation with a trailing parenthetical.
// Appending a second parenthetical to the latter reads badly, so the clause is merged into the one
// already there.
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
  console.log(q.id.padEnd(15) + ' <- ' + clause);
}

function count(text) {
  vm.runInThisContext(text, { filename: 'questions.peds.ep2.js (in memory)' });
  const a = globalThis.Q_PEDS_EP2;
  let holes = 0, srcs = 0;
  for (let i = 0; i < a.length; i++) { if (!(i in a)) holes++; else if (new RegExp(MARK).test(a[i].source || '')) srcs++; }
  return { n: a.length, holes, srcs };
}
const before = count(liveSrc);
let after;
try { after = count(out); } catch (e) { console.error('REWRITTEN FILE DOES NOT PARSE: ' + e.message); process.exit(1); }
if (after.n !== before.n) { console.error('ENTRY COUNT MOVED: ' + before.n + ' -> ' + after.n + '. This pass must not change it.'); process.exit(1); }
if (after.holes) { console.error('REWRITTEN FILE HAS HOLES'); process.exit(1); }
if (after.srcs !== EXPECTED) { console.error('expected ' + EXPECTED + ' sources naming ' + MARK + ', got ' + after.srcs); process.exit(1); }

console.log('edited ' + edited + ' sources | entries ' + before.n + ' -> ' + after.n + ' (unchanged, as intended) | holes ' + after.holes);
if (!process.argv.includes('--write')) { console.log('DRY RUN. Re-run with --write.'); process.exit(0); }
fs.writeFileSync(LIVE, out, 'utf8');
const chk = count(fs.readFileSync(LIVE, 'utf8'));
console.log('written. entries ' + chk.n + ' | holes ' + chk.holes + ' | sources naming ' + MARK + ': ' + chk.srcs);
