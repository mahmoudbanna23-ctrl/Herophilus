// Ninth fold pass over questions.peds.ep.js: the within-section twin Model Final Exam 3 prints.
// 602 -> 601.
//
//   keep pedep-mf3-50 (p.1583) <- drop pedep-mf3-58 (p.1599)   exact reprint, different box
//
// WITHIN the endpoint bank, and within a single exam paper, so it takes no `alsoIn`. This is the
// FIRST of the six fold shapes -- exact -- with the boxed-second-printing variation on top: stem,
// all five options, their order and the key are byte-identical, and the only difference between
// the two sheets is the wording of the printed explanation box.
//
// ⚠️ WHY THIS PAIR WAS NOT HANDLED BY THE REPRINT PASS. reprint-s12-pd-ep.js extends the `source`
// of a LIVE entry when the exam reprints something the book printed earlier. Both of these rows
// are new: n50 and n58 reprint each other, not anything already in the file, so there was no live
// source to extend and nothing for that pass to write. Both were drafted in full, spliced, and
// the pair is resolved here -- the fold being the only operation allowed to pick a survivor and
// delete a loser. The staging header, the reprint pass header and splice-pd-ep.js all say so.
//
// ⚠️ WHY p.1583 SURVIVES. It is the first printing; its box states the discriminator the question
// is built on ("Unlike adults (cardiac), in children respiratory failure is the most common
// cause"), which is the comparison the ladder tests, where p.1599's box states the conclusion
// alone. The p.1599 entry is the longer of the two only because it defers the option-by-option
// comparison to p.1583 and spends its length on the physiology instead -- and that physiology is
// carried across below, so the fold loses nothing. The second box is quoted in the survivor too.
//
// ⚠️ THE DROPPED ENTRY IS THE ONLY THING IN THE FILE THAT NAMES THE SURVIVOR. `pedep-mf3-58`
// carries the shared-menu sentence the validator demands, pointing at `pedep-mf3-50`; it dies with
// the entry, and nothing else in the file references either id. The dead-id check on the OUTPUT is
// what proves that, not this comment.
//
// Carve regexes and string mechanics are fold8's. Written with the Write tool -- a heredoc would
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
  'pedep-mf3-50': {
    drop: ['pedep-mf3-58'],
    // The splicer writes `  source: 'x'` with a space after the colon; this entry was spliced by
    // it minutes ago, so that is the shape on disk. Read off the file, not copied from fold8.
    from: "  source: 'Pediatrics endpoint part1.pdf p.1583'",
    to:   "  source: 'Pediatrics endpoint part1.pdf p.1583 (printed again, word for word, on p.1599 of the same exam)'",
    add: para([
      "**\u26a0\ufe0f Reprinted inside the same exam \u2014 p.1599.** Model Final Exam 3 sets this question twice, sixteen pages apart, and the two sheets are identical: the same stem, the same five options in the same order, and the key on the same option. Only the printed box differs. It is held once in the app, under this first printing. **The p.1599 box reads:** \u201crespiratory failure is the leading cause of cardiac arrest in children.\u201d \u2014 the same statement as the box above, without the comparison with adults.",
      "**Folded in from the p.1599 printing:** the sequence in a child is hypoxic, not electrical. Breathing fails, oxygen delivery falls, the myocardium becomes hypoxic and acidotic, the heart rate slows, and asystole or pulseless electrical activity follows. That is why the deck\u2019s assessment opens on airway and breathing, work of breathing, respiratory rate and oxygen saturation, and why a primary arrhythmia \u2014 the adult route \u2014 reaches a child mainly in known congenital or cardiomyopathic heart disease.",
    ]),
  },
};

// ---- back-references from entries that are not themselves folded ---------------------------
// None. The only entry naming `pedep-mf3-50` is `pedep-mf3-58`, which this pass drops, and
// nothing names `pedep-mf3-58`. Both statements are proved on the OUTPUT below.
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

// ---- the survivor must really be the same question, in the EXACT shape ----------------------
// Stem and options are never edited by a fold, so if this pass has the pair wrong the app keeps a
// question the drop was supposed to preserve. The exactness is asserted character by character
// here, so that a different pair, or a re-transcription, halts the pass instead of folding.
{
  const k = ARR.filter(x => x.id === 'pedep-mf3-50')[0];
  const q = ARR.filter(x => x.id === 'pedep-mf3-58')[0];
  const STEM = 'Which of the following is the most common cause of pediatric cardiopulmonary arrest?';

  if (k.stem !== STEM) { console.error('pedep-mf3-50 stem is not the one this pass was written against'); process.exit(2); }
  if (q.stem !== k.stem) { console.error('stems differ \u2014 this is not the exact-reprint shape this pass assumes'); process.exit(2); }
  if (k.answer !== q.answer) { console.error('keys differ: ' + k.answer + ' vs ' + q.answer + ' \u2014 not the same question, or a key moved'); process.exit(2); }
  if (k.answer !== 4) { console.error('key is ' + k.answer + ', expected 4 (Respiratory problems)'); process.exit(2); }
  if (k.options.length !== 5 || q.options.length !== 5) { console.error('option counts are not 5/5'); process.exit(2); }
  for (let i = 0; i < 5; i++) {
    if (k.options[i] !== q.options[i]) { console.error('option ' + i + ' differs \u2014 more than the exact reprint this pass assumes; read both pages again'); process.exit(2); }
  }
  if (k.chapter !== q.chapter) { console.error('the two printings sit in different chapters \u2014 decide the survivor\u2019s chapter before folding'); process.exit(2); }
  console.log('pair check: identical stem, five identical options in the same order, key index ' + k.answer + ' (' + JSON.stringify(k.options[4]) + '), same chapter ' + k.chapter);
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

// ---- apply, then prove no dead id survives ---------------------------------------------------
let dropped = 0, sourced = 0, expl = 0;
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
    console.log('  keep  ' + id + '  <- ' + f.drop.join(', '));
  }
  kept.push(t.replace(/\},$/, '}'));
}
console.log('dropped ' + dropped + ' | sources rewritten ' + sourced + ' | explanations extended ' + expl + ' | ' + blocks.length + ' -> ' + kept.length);

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

// ---- the survivor must still read as one entry, and carry both printings ----------------------
{
  const s = outArr.filter(q => q.id === 'pedep-mf3-50')[0];
  const marks = s.explanation.split('The expansion above this line').length - 1;
  if (marks !== 1) { console.error('survivor carries the marker ' + marks + ' times'); process.exit(2); }
  if (s.explanation.indexOf('p.1599') < 0) { console.error('survivor does not mention p.1599'); process.exit(2); }
  if (s.source.indexOf('p.1599') < 0) { console.error('survivor source does not cite p.1599'); process.exit(2); }
  if (s.explanation.indexOf('leading cause of cardiac arrest in children') < 0) { console.error('survivor does not quote the p.1599 box'); process.exit(2); }
  console.log('survivor pedep-mf3-50: marker once, cites p.1599 in source and explanation, quotes the second box, ' + s.explanation.split(/\s+/).length + ' words');

  // Section 12 must come out of this pass holding 61 drafted entries minus the one dropped.
  const mf3 = outArr.filter(q => /^pedep-mf3-/.test(q.id));
  if (mf3.length !== 60) { console.error('section 12 holds ' + mf3.length + ' entries, expected 60 after the fold'); process.exit(2); }
  console.log('section 12: 61 drafted, 1 folded, 60 standing');
}
console.log('output parses, array holds ' + outArr.length + ', 0 holes, 0 dead ids');

if (!doWrite) { console.log('DRY RUN \u2014 nothing written'); process.exit(0); }
fs.writeFileSync(P, out);
console.log('written. chars ' + src0.length + ' -> ' + out.length);
