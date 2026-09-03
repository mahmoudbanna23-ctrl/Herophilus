// Seventh fold pass over questions.peds.ep.js: the one reprint section 8 brought in. 352 -> 351.
//
//   keep pedep-nut-63 (p.364, Nutrition) <- drop pedep-alg-7 (p.923, Allergy)   exact reprint
//
// WITHIN the endpoint bank, so it takes no `alsoIn`. This is the CROSS-CHAPTER exact shape, the
// fifth of the six fold shapes: the book asks one question twice, hundreds of pages apart, in two
// different sections. sweep-staged-ep.js scored it at sim 1.000, key 0 against answer 0, and it
// was the ONLY hit section 8 produced (within-section 0, vs live endpoint 1, vs House 0).
//
// ⚠️ THE STEMS ARE NOT BYTE-IDENTICAL, AND THAT IS NOT A PRINTING VARIANT. p.364 writes
// "this baby\u2019s urticaria" with a curly apostrophe; the p.923 staging wrote it straight. Two agents
// read two different page images months apart, and one of them normalised the glyph. Every other
// character of both stems, all five options and both explanation boxes are identical word for
// word. This is recorded in the survivor so that nobody later "discovers" a variant that the book
// does not print. The curly form is the one kept -- it is what the rest of this file uses.
//
// ⚠️ THE SURVIVOR IS THE ONE WITH A LIVE SIBLING POINTING AT IT. p.364 is not the fuller entry:
// its expansion runs 169 words against p.923's 252. It survives anyway, for three reasons that
// outrank length here, because a fold may carry the loser's material across and this one does:
//   1. `pedep-nut-72` (p.383, non-IgE cow\u2019s milk allergy presenting with bloody stools) already
//      names `pedep-nut-63` by id as its IgE counterpart. The two are the same clinical scenario
//      split on mechanism, and they teach as a pair inside the same chapter. Keeping p.923 instead
//      would break that pair across two chapters and need the back-reference repointed.
//   2. p.364 is the first printing.
//   3. p.364 carries the book\u2019s own curly apostrophe; see above.
// Nothing is lost: the two things p.923 says that p.364 does not -- the reaction-timing numbers
// and the Type 1 row of the lecture\u2019s hypersensitivity table -- are folded into the survivor below.
//
// ⚠️ THE COST, STATED. The surviving entry stays filed under `nutrition-feed`, so the Allergy
// chapter ends section 8 with 8 questions rather than 9 and a student filtering on Allergy will
// not see this one. That is the price of keeping the nut-63/nut-72 pair together, and it is the
// same trade fold5 made when it kept `pedep-gp-70` under `perinatal`.
//
// Carve regexes are fold6's, not fold5's: the splicer writes `  id: 'x',` with a space after the
// colon. Written with the Write tool -- a heredoc would eat the \u escapes and the backslashes.
const fs = require('fs');
const P = 'D:/claude os/Medical school/Herophilus/app/data/questions.peds.ep.js';
const doWrite = process.argv.includes('--write');

const BS   = String.fromCharCode(92);        // a literal backslash, as it sits in the file
const NL   = BS + 'n';                       // the two characters \ and n
const BR   = NL + NL;                        // a paragraph break inside a single-quoted string

const para = parts => parts.map(p => Array.isArray(p) ? p.join(NL) : p).join(BR);
const MARK = BR + "*The expansion above this line is written for this bank; the box itself is the endpoint file\u2019s own.*',";

const FOLD = {
  'pedep-nut-63': {
    drop: ['pedep-alg-7'],
    // ⚠️ TIGHT FORM, no space after the colon. THIS FILE MIXES TWO ENTRY STYLES and the survivor
    // is in the older one: `{ id:'pedep-nut-63', bank:'endpoint', ...` on one line, `source:'...'`
    // with no space, where the splicer writes `  id: 'x',` and `  source: 'x'`. fold6's `idOf`
    // regex `/id: *'/` tolerates both, so the carve was clean and gave no warning -- but a `from`
    // string copied from a spliced entry matches ZERO times here and the pass halts on
    // "source not matched exactly once". That is the fold6 lesson recurring in a second field:
    // read the block off disk, never copy a field shape from a sibling pass.
    from: "source:'Pediatrics endpoint part1.pdf p.364'",
    to:   "source:'Pediatrics endpoint part1.pdf p.364 (reprinted word for word on p.923, inside the Allergy section)'",
    add: para([
      "**\u26a0\ufe0f Within-bank reprint \u2014 p.923, in the Allergy section.** The endpoint file asks this question twice, hundreds of pages apart: here in Nutrition, and again on p.923 among the allergy questions. The two printings carry the same five options in the same order, the same key, and the same explanation box word for word. It is held once in the app, under this first printing, beside `pedep-nut-72` \u2014 the non-IgE half of the same clinical split.",
      "The two transcriptions differ in one character and one only: the apostrophe in \u201cthis baby\u2019s urticaria\u201d, curly on this page and straight on the p.923 pass. That is an artefact of two readers working from two page images, **not a variant the book prints.** There is nothing here to find.",
      "**Timing, folded in from the p.923 expansion.** `26)allergy_.txt` puts numbers on the split this box states qualitatively: IgE-mediated food reactions appear rapidly \u2014 usually within 10-15 minutes, and up to about 2 hours after ingestion \u2014 and present cutaneously, with urticaria and angioedema; non-IgE-mediated reactions typically emerge hours later and are largely gastrointestinal. Timing and morphology together place this case in the lecture\u2019s own Type 1 / immediate row: histamine-driven, minutes to onset.",
    ]),
  },
};

// ---- back-references from entries that are not themselves folded ---------------------------
// None. `pedep-nut-72` names `pedep-nut-63`, and pedep-nut-63 SURVIVES this pass -- which is
// part of why it is the survivor. Nothing in the file names `pedep-alg-7`. The dead-id check at
// the foot of this script runs on the OUTPUT and is what proves that, rather than this comment.
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
  if (q.alsoIn && q.alsoIn.length) { console.error(d + ' carries alsoIn ' + JSON.stringify(q.alsoIn) + ' — a cross-bank record would be lost'); process.exit(2); }
  if (q.image) { console.error(d + ' carries an image (' + q.image + ') — look at the figure before folding'); process.exit(2); }
}
console.log('drop guard: ' + dropSet.size + ' entries, none carries alsoIn or an image');

// ---- the survivor must really be the same question -----------------------------------------
// Stem and options are never edited by a fold, so if this pass has the pair wrong the app keeps a
// question the drop was supposed to preserve. Checked here rather than trusted from the sweep.
for (const keepId of Object.keys(FOLD)) {
  const k = ARR.filter(x => x.id === keepId)[0];
  for (const d of FOLD[keepId].drop) {
    const q = ARR.filter(x => x.id === d)[0];
    if (k.answer !== q.answer) { console.error(keepId + ' keys ' + k.answer + ' but ' + d + ' keys ' + q.answer + ' — not the same question, or a key moved'); process.exit(2); }
    if (k.options.length !== q.options.length) { console.error(keepId + '/' + d + ': option counts differ'); process.exit(2); }
    for (let i = 0; i < k.options.length; i++) {
      if (k.options[i] !== q.options[i]) { console.error(keepId + '/' + d + ': option ' + i + ' differs — this is not the exact-reprint shape this pass assumes'); process.exit(2); }
    }
    // The stems differ in the apostrophe glyph and nothing else. Prove that, rather than assert
    // it: normalise the two curly quote characters away and require byte identity of the rest.
    const flat = s => s.split('\u2019').join("'").split('\u201c').join('"').split('\u201d').join('"');
    if (k.stem === q.stem) console.log('pair check: stems byte-identical');
    else if (flat(k.stem) === flat(q.stem)) {
      let n = 0;
      for (let i = 0; i < k.stem.length; i++) if (k.stem[i] !== q.stem[i]) n++;
      console.log('pair check: stems differ at ' + n + ' character(s), ALL of them curly-vs-straight quote glyphs — a transcription artefact, not a printed variant');
    } else { console.error(keepId + '/' + d + ': stems differ by more than quote glyphs — read both pages before folding'); process.exit(2); }
    console.log('pair check: ' + keepId + ' and ' + d + ' key index ' + k.answer + ', all ' + k.options.length + ' options identical');
  }
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
  console.error('carved ' + blocks.length + ', loaded array holds ' + LOADED + ' — the carve is missing an entry shape');
  process.exit(2);
}
console.log('carved ' + blocks.length + ' blocks, loaded array ' + LOADED + ' — agree');

const seen = new Set(blocks.map(b => idOf(b.text)));
if (seen.has(undefined)) { console.error('at least one carved block has no id — the id regex does not match this file'); process.exit(2); }
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

// ---- the survivor must still read as one entry, and its pair must still resolve ---------------
{
  const s = outArr.filter(q => q.id === 'pedep-nut-63')[0];
  const marks = s.explanation.split('The expansion above this line').length - 1;
  if (marks !== 1) { console.error('survivor carries the marker ' + marks + ' times'); process.exit(2); }
  if (s.explanation.indexOf('p.923') < 0) { console.error('survivor does not mention p.923'); process.exit(2); }
  if (s.source.indexOf('p.923') < 0) { console.error('survivor source does not cite p.923'); process.exit(2); }
  if (s.stem.indexOf('\u2019') < 0) { console.error('survivor stem lost its curly apostrophe — the wrong printing was kept'); process.exit(2); }
  console.log('survivor pedep-nut-63: marker once, cites p.923 in source and explanation, curly apostrophe intact, ' + s.explanation.split(/\s+/).length + ' words');

  // the reason this entry is the survivor: the sibling that names it must still find it
  const sib = outArr.filter(q => q.id === 'pedep-nut-72')[0];
  if (!sib) { console.error('pedep-nut-72 is gone — the pair this fold was decided on no longer exists'); process.exit(2); }
  if (sib.explanation.indexOf('pedep-nut-63') < 0) { console.error('pedep-nut-72 no longer names pedep-nut-63'); process.exit(2); }
  console.log('pair intact: pedep-nut-72 still points at pedep-nut-63');
}
console.log('output parses, array holds ' + outArr.length + ', 0 holes, 0 dead ids');

if (!doWrite) { console.log('DRY RUN — nothing written'); process.exit(0); }
fs.writeFileSync(P, out);
console.log('written. chars ' + src0.length + ' -> ' + out.length);
