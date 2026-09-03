// Eighth fold pass over questions.peds.ep.js: the one reprint section 9 (Infection) brought in.
// 446 -> 445.
//
//   keep pedep-inf-23 (p.1011) <- drop pedep-inf-36 (p.1037)   respelled reprint
//
// WITHIN the endpoint bank, so it takes no `alsoIn`. This is the SECOND of the six fold shapes --
// respelled, not exact: the book asks the same recall question twice, 26 pages apart, rewording
// the stem's opening clause and adding an article to option a. Nothing else moves. The key sits
// on the same option text on both pages.
//
// ⚠️ WHAT THE SWEEP SAID, AND WHY IT IS NOT THE REASON. sweep-staged-ep.js scored this pair at
// sim 0.667 -- BELOW the pairs it ranked above it -- because five shared options dominate the
// score and the two stems share few words. The score is not the evidence. Both pages were
// rendered at 150 dpi and read: same question, same five options, same highlighted key, no
// figure on either sheet, one question per sheet. That is the evidence.
//
// ⚠️ THE PAIR THIS PASS DOES **NOT** FOLD, AND WHY THAT IS DELIBERATE.
// The sweep also flagged n2 (p.969) against n40 (p.1045): a four-year-old girl, one day of high
// fever and sore throat, pinpoint rash, circumoral pallor, coated tongue, five identical options,
// same key -- to the eye, one question printed twice, and a stronger-looking fold than this one.
// It is NOT folded, and it must not be folded later either. `pedep-inf-2`, `pedep-inf-40` and
// `pedep-inf-44` print the SAME five-option exanthem ladder in the SAME order, and
// pd-ep-draft-brief.md is absolute on that case: "A shared menu PAIRS questions. It NEVER folds
// them. They stay separate entries." The rule exists precisely because a shared ladder inflates
// the similarity score of questions that are not reprints -- and the safe failure of that rule is
// keeping a near-duplicate the book really prints, while the unsafe failure is deleting a
// question the student would otherwise see. `pedep-inf-40` and `pedep-inf-44` already name
// `pedep-inf-2` as the anchor holding the comparative table, so the relationship is recorded in
// the app without anything being dropped. This pass leaves all three standing.
// The sweep's third within-section hit, n29 (live vaccines) against n81 (contraindications to
// live vaccination), sim 0.632 with the keys disagreeing and different option counts, is two
// different questions on one topic. Dismissed on the text; no render needed.
//
// ⚠️ THE OPTIONS ARE NOT IDENTICAL HERE, so fold7's pair check would reject this pair outright.
// That check encodes the exact-reprint shape. This pass states the respelled shape instead and
// proves it character by character below: option a gains a leading "A ", options b-e are byte
// identical, and the stems differ only in the interrogative that opens them. Anything else on
// disk halts the pass.
//
// ⚠️ WHY p.1011 SURVIVES. It is the first printing, its stem is the fuller of the two ("Which of
// the following is..." against "What is..."), and its option a is the book's unarticled form,
// which is how the rest of this ladder is printed. p.1037's box adds one word this one lacks --
// "tiny" -- and that word is carried across below, so the fold loses nothing. Nothing in the file
// names `pedep-inf-36`; the dead-id check on the OUTPUT is what proves that, not this comment.
//
// Carve regexes and string mechanics are fold7's. Written with the Write tool -- a heredoc would
// eat the \u escapes and the backslashes.
const fs = require('fs');
const P = 'D:/claude os/Medical school/Herophilus/app/data/questions.peds.ep.js';
const doWrite = process.argv.includes('--write');

const BS   = String.fromCharCode(92);        // a literal backslash, as it sits in the file
const NL   = BS + 'n';                       // the two characters \ and n
const BR   = NL + NL;                        // a paragraph break inside a single-quoted string

const para = parts => parts.map(p => Array.isArray(p) ? p.join(NL) : p).join(BR);
const MARK = BR + "*The expansion above this line is written for this bank; the box itself is the endpoint file\u2019s own.*',";

const FOLD = {
  'pedep-inf-23': {
    drop: ['pedep-inf-36'],
    // The splicer writes `  source: 'x'` with a space after the colon; this entry was spliced by
    // it minutes ago, so that is the shape on disk. Read off the file, not copied from fold7 --
    // fold7's own header records what copying a field shape between passes costs.
    from: "  source: 'Pediatrics endpoint part1.pdf p.1011'",
    to:   "  source: 'Pediatrics endpoint part1.pdf p.1011 (reprinted with light rewording on p.1037)'",
    add: para([
      "**\u26a0\ufe0f Within-bank reprint \u2014 p.1037.** The endpoint file asks this question twice. The second printing opens \u201cWhat is a pathognomonic sign of measles?\u201d instead of \u201cWhich of the following is\u2026\u201d, and prints option a as \u201cA vesicular rash at the hairline\u201d rather than \u201cVesicular rash at the hairline\u201d. The other four options are word for word the same, in the same order, and the key sits on the same option on both pages. It is held once in the app, under this first printing.",
      "**Folded in from the p.1037 box:** that printing describes Koplik spots as **tiny** white lesions \u2014 the only word either box carries that the other does not. Its wording is otherwise the same statement: pathognomonic for measles, appearing before the rash.",
    ]),
  },
};

// ---- back-references from entries that are not themselves folded ---------------------------
// None. Nothing in the file names `pedep-inf-36`. The shared-menu anchor for this section is
// `pedep-inf-2`, which this pass does not touch and which is named by `pedep-inf-40` and
// `pedep-inf-44`; both of those survive. The dead-id check at the foot runs on the OUTPUT.
const OTHER_EDITS = {};
const dropSet = new Set();
Object.values(FOLD).forEach(f => f.drop.forEach(d => dropSet.add(d)));

// ---- the count that cannot be fooled: load the array and read its length -------------------
const src0 = fs.readFileSync(P, 'utf8');
let LOADED, ARR;
{ const m = {}; (new Function('m', src0 + ';m.a = Q_PEDS_EP;'))(m); ARR = m.a; LOADED = m.a.length; }

// ---- a dropped entry must carry nothing the survivor cannot carry --------------------------
for (const d of dropSet) {
  const q = ARR.filter(x => x.id === d)[0];
  if (!q) { console.error('id to drop not in the loaded array: ' + d); process.exit(2); }
  if (q.alsoIn && q.alsoIn.length) { console.error(d + ' carries alsoIn ' + JSON.stringify(q.alsoIn) + ' \u2014 a cross-bank record would be lost'); process.exit(2); }
  if (q.image) { console.error(d + ' carries an image (' + q.image + ') \u2014 look at the figure before folding'); process.exit(2); }
}
console.log('drop guard: ' + dropSet.size + ' entries, none carries alsoIn or an image');

// ---- the survivor must really be the same question, in the RESPELLED shape -------------------
// Stem and options are never edited by a fold, so if this pass has the pair wrong the app keeps a
// question the drop was supposed to preserve. The exact respelling is asserted here, so that a
// different pair, or a re-transcription, halts the pass instead of silently folding.
{
  const k = ARR.filter(x => x.id === 'pedep-inf-23')[0];
  const q = ARR.filter(x => x.id === 'pedep-inf-36')[0];
  const K_STEM = 'Which of the following is a pathognomonic sign of measles?';
  const Q_STEM = 'What is a pathognomonic sign of measles?';
  const K_OPT0 = 'Vesicular rash at the hairline';
  const Q_OPT0 = 'A vesicular rash at the hairline';

  if (k.stem !== K_STEM) { console.error('pedep-inf-23 stem is not the one this pass was written against'); process.exit(2); }
  if (q.stem !== Q_STEM) { console.error('pedep-inf-36 stem is not the one this pass was written against'); process.exit(2); }
  if (k.answer !== q.answer) { console.error('keys differ: ' + k.answer + ' vs ' + q.answer + ' \u2014 not the same question, or a key moved'); process.exit(2); }
  if (k.answer !== 2) { console.error('key is ' + k.answer + ', expected 2 (White spots on the buccal mucosa)'); process.exit(2); }
  if (k.options.length !== 5 || q.options.length !== 5) { console.error('option counts are not 5/5'); process.exit(2); }
  if (k.options[0] !== K_OPT0 || q.options[0] !== Q_OPT0) { console.error('option a is not the article-only difference this pass assumes'); process.exit(2); }
  for (let i = 1; i < 5; i++) {
    if (k.options[i] !== q.options[i]) { console.error('option ' + i + ' differs \u2014 more than the respelling this pass assumes; read both pages again'); process.exit(2); }
  }
  if (k.options[k.answer] !== q.options[q.answer]) { console.error('the key does not sit on the same option TEXT in both printings'); process.exit(2); }
  console.log('pair check: same key index ' + k.answer + ' on the same option text (' + JSON.stringify(k.options[2]) + ')');
  console.log('pair check: options b-e byte-identical; option a differs by the leading article only; stems differ by the opening interrogative only');
}

// ---- normalise the head so `[{` stops being a third entry shape ----------------------------
function normaliseHead(s) {
  const HEAD = 'var Q_PEDS_EP = [{';
  if (s.indexOf(HEAD) !== 0 && s.indexOf('\n' + HEAD) === -1) return { text: s, fixed: false };
  return { text: s.replace(HEAD, 'var Q_PEDS_EP = [\n{'), fixed: true };
}
const norm = normaliseHead(src0);
if (norm.fixed) console.log('head normalised: "var Q_PEDS_EP = [{" split onto two lines');

const lines = norm.text.split('\n');
const isOpen  = L => /^\{(\s|$)/.test(L);
const isClose = L => /^\},?$/.test(L) || / \},?$/.test(L);

const blocks = [];
let head = null;
for (let i = 0; i < lines.length; i++) {
  if (!isOpen(lines[i])) continue;
  if (head === null) head = i;
  let j = i;
  while (j < lines.length && !isClose(lines[j])) j++;
  if (j >= lines.length) { console.error('unterminated block at line ' + (i + 1)); process.exit(2); }
  blocks.push({ end: j, text: lines.slice(i, j + 1).join('\n') });
  i = j;
}
const tailStart = blocks[blocks.length - 1].end + 1;
const idOf = t => (t.match(/id: *'([^']+)'/) || [])[1];

if (blocks.length !== LOADED) {
  console.error('carved ' + blocks.length + ', loaded array holds ' + LOADED + ' \u2014 the carve is missing an entry shape');
  process.exit(2);
}
console.log('carved ' + blocks.length + ' blocks, loaded array ' + LOADED + ' \u2014 agree');

const seen = new Set(blocks.map(b => idOf(b.text)));
if (seen.has(undefined)) { console.error('at least one carved block has no id \u2014 the id regex does not match this file'); process.exit(2); }
for (const d of dropSet) if (!seen.has(d)) { console.error('id to drop not present: ' + d); process.exit(2); }
for (const k of Object.keys(FOLD)) if (!seen.has(k)) { console.error('keeper not present: ' + k); process.exit(2); }
for (const k of Object.keys(OTHER_EDITS)) if (!seen.has(k)) { console.error('back-reference holder not present: ' + k); process.exit(2); }

// ---- apply, then prove no dead id survives ---------------------------------------------------
let dropped = 0, sourced = 0, expl = 0, edited = 0;
const kept = [];
for (const b of blocks) {
  const id = idOf(b.text);
  if (dropSet.has(id)) { dropped++; console.log('  drop  ' + id); continue; }
  let t = b.text;
  const f = FOLD[id];
  if (f) {
    if (t.split(f.from).length - 1 !== 1) { console.error('source not matched exactly once for ' + id); process.exit(2); }
    t = t.split(f.from).join(f.to);
    sourced++;
    if (f.add) {
      if (t.split(MARK).length - 1 !== 1) { console.error('explanation marker not matched exactly once for ' + id); process.exit(2); }
      t = t.split(MARK).join(BR + f.add + MARK);
      expl++;
    }
  }
  for (const [from, to] of ((f && f.edits) || []).concat(OTHER_EDITS[id] || [])) {
    if (t.split(from).length - 1 !== 1) { console.error('edit not matched exactly once for ' + id + ': ' + from.slice(0, 70)); process.exit(2); }
    t = t.split(from).join(to);
    edited++;
  }
  if (f) console.log('  keep  ' + id + '  <- ' + f.drop.join(', '));
  else if (OTHER_EDITS[id]) console.log('  ref   ' + id + '  back-reference repointed');
  kept.push(t.replace(/\},$/, '}'));
}
console.log('dropped ' + dropped + ' | sources rewritten ' + sourced + ' | explanations extended ' + expl + ' | text edits ' + edited + ' | ' + blocks.length + ' -> ' + kept.length);

const out = lines.slice(0, head).join('\n') + '\n' + kept.join(',\n\n') + '\n' + lines.slice(tailStart).join('\n');

// ---- prove the output before it is written --------------------------------------------------
let outArr = null;
try { const m = {}; (new Function('m', out + ';m.a = Q_PEDS_EP;'))(m); outArr = m.a; }
catch (e) { console.error('OUTPUT DOES NOT PARSE: ' + e.message); process.exit(2); }
if (outArr.length !== kept.length) { console.error('output array holds ' + outArr.length + ', expected ' + kept.length); process.exit(2); }
let holes = 0;
for (let i = 0; i < outArr.length; i++) if (!(i in outArr)) holes++;
if (holes) { console.error('output holds ' + holes + ' sparse holes'); process.exit(2); }

// The dead-id check runs on the OUTPUT, after every repair, which is the only place it proves
// anything: run before the edits it would flag, it reports faults this pass is about to fix.
let dead = 0;
for (const d of dropSet) {
  const re = new RegExp(d.replace(/-/g, '\\-') + '(?![0-9])');
  const refs = outArr.filter(q => re.test(q.explanation || '') || re.test(q.source || '') || re.test(q.objective || '') || re.test(q.stem || '')).map(q => q.id);
  if (refs.length) { console.error('DEAD ID: ' + d + ' still referenced by ' + refs.join(', ')); dead++; }
}
if (dead) process.exit(2);

// ---- the survivor must still read as one entry, and the pair left standing must still resolve -
{
  const s = outArr.filter(q => q.id === 'pedep-inf-23')[0];
  const marks = s.explanation.split('The expansion above this line').length - 1;
  if (marks !== 1) { console.error('survivor carries the marker ' + marks + ' times'); process.exit(2); }
  if (s.explanation.indexOf('p.1037') < 0) { console.error('survivor does not mention p.1037'); process.exit(2); }
  if (s.source.indexOf('p.1037') < 0) { console.error('survivor source does not cite p.1037'); process.exit(2); }
  console.log('survivor pedep-inf-23: marker once, cites p.1037 in source and explanation, ' + s.explanation.split(/\s+/).length + ' words');

  // The shared-menu group this pass deliberately did NOT fold must come out of it untouched.
  const anchor = outArr.filter(q => q.id === 'pedep-inf-2')[0];
  if (!anchor) { console.error('pedep-inf-2 is gone \u2014 the shared-menu anchor this pass refused to fold no longer exists'); process.exit(2); }
  for (const sib of ['pedep-inf-40', 'pedep-inf-44']) {
    const x = outArr.filter(q => q.id === sib)[0];
    if (!x) { console.error(sib + ' is gone \u2014 a shared-menu sibling was dropped'); process.exit(2); }
    if (x.explanation.indexOf('pedep-inf-2') < 0) { console.error(sib + ' no longer names pedep-inf-2'); process.exit(2); }
  }
  console.log('shared menu intact: pedep-inf-2 stands, named by pedep-inf-40 and pedep-inf-44');
}
console.log('output parses, array holds ' + outArr.length + ', 0 holes, 0 dead ids');

if (!doWrite) { console.log('DRY RUN \u2014 nothing written'); process.exit(0); }
fs.writeFileSync(P, out);
console.log('written. chars ' + src0.length + ' -> ' + out.length);
