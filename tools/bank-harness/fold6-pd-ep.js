// Sixth fold pass over questions.peds.ep.js: the one within-bank reprint section 7 brought in.
// 344 -> 343.
//
//   keep pedep-neo-46 (p.888) <- drop pedep-neo-22 (p.840)  reworded stem, option 0 spelled out
//
// WITHIN the endpoint bank, so it takes no `alsoIn`. The cross-bank pass against the House bank
// is still owed separately and section 7 adds a great deal to it: reprint-pd-ep.js put pp.774-903
// against the live House file at 12 one-for-one collisions across the neonatal and perinatal
// chapters (p.797/800/802/804/806/810/812/824/838 -> pedhd-neo-1/2/3/4/5/7/8/14/21, and
// p.866/870/876 -> pedhd-peri-5/9/6). Nothing folds across the two banks while both chats write.
//
// ⚠️ THE SURVIVOR IS THE FULLER PRINTING. fold3's precedent, held again: only `source` and
// `explanation` are touched, never `stem`, `options` or `answer`. p.888 is fuller on the two
// places the printings differ -- it spells out "lab investigations" where p.840 abbreviates to
// "lab Ix.", and its stem is the grammatical one ("Indirect bilirubin is 6.4 mg/dl") -- and its
// written expansion is 352 words against 240. Both printings key index 0.
//
// ⚠️ THE EARLIER PAGE HAS THE FULLER BOX, WHICH IS WHY THIS FOLD EDITS THE EXPLANATION AND NOT
// JUST THE SOURCE. p.888's box opens "As with earlier case" -- the book itself marking the
// repeat -- and that phrase points at nothing once p.840 is dropped. p.840's box is what it
// points at, so it is folded in verbatim. Read the other way, p.888's box names one cause p.840
// does not: infection, alongside haemolysis. Neither box is complete without the other, and the
// survivor now carries both.
//
// ⚠️ NOT A FOLD, and this is the finding worth keeping about the sweep: reprint-pd-ep.js scored
// 67 CROSS-FILE candidates over pp.774-903 and exactly ONE within-section candidate, which is
// this pair. The cross-file 67 are noise plus the 12 real House collisions above; the
// within-section count was right first time. The 25-30 end-of-stream cross-bank estimate in
// MEMORY.md is LOW -- section 7 alone contributes 12.
//
// ⚠️ THE CARVE REGEXES ARE NOT fold5's. The splicer writes `  id: 'x',` -- two-space indent,
// space after the colon -- where fold5 matched `id:'x'`. Measured on disk: 344 of 344 id lines
// are the spaced form and zero are the tight form. A copied `idOf` returns undefined for every
// block here and the keeper-present check fails; it is fixed below, not worked around.
const fs = require('fs');
const P = 'D:/claude os/Medical school/Herophilus/app/data/questions.peds.ep.js';
const doWrite = process.argv.includes('--write');

const BS   = String.fromCharCode(92);        // a literal backslash, as it sits in the file
const NL   = BS + 'n';                       // the two characters \ and n
const BR   = NL + NL;                        // a paragraph break inside a single-quoted string

const para = parts => parts.map(p => Array.isArray(p) ? p.join(NL) : p).join(BR);
const MARK = BR + "*The expansion above this line is written for this bank; the box itself is the endpoint file\u2019s own.*',";

const FOLD = {
  'pedep-neo-46': {
    drop: ['pedep-neo-22'],
    from: "source: 'Pediatrics endpoint part1.pdf p.888'",
    to:   "source: 'Pediatrics endpoint part1.pdf p.888 (first printed on p.840 inside the same Neonatology section, with the stem one word shorter and the first option abbreviated to \u201clab Ix.\u201d)'",
    add: para([
      "**\u26a0\ufe0f Within-bank reprint \u2014 p.840, the first printing.** The endpoint file asks this question twice inside Neonatology, first on p.840 and again here on p.888, and the book knows it: the box on this page opens \u201cAs with earlier case\u201d, pointing back at p.840. The two printings carry the same five options in the same order and the same key, and differ in two cosmetic ways only. p.840 writes the stem as \u201cIndirect bilirubin 6.4 mg/dl\u201d where this page writes \u201cIndirect bilirubin is 6.4 mg/dl\u201d, and p.840 abbreviates the first option to \u201cAdmit the baby to the incubator for phototherapy and lab Ix.\u201d where this page spells out \u201clab investigations\u201d. It is held once in the app, under this fuller p.888 printing.",
      "**The p.840 box, folded in.** The earlier printing prints the fuller explanation of the two, and it is the passage \u201cAs with earlier case\u201d refers back to:",
      "> Jaundice appearing within the first 24 hours is always pathologic, often due to hemolysis. Such cases require immediate phototherapy and investigations to determine the cause.",
      "The two boxes agree on the reasoning and on the key. Each names something the other leaves out: p.840 states the rule in full \u2014 first-day jaundice is *always* pathologic, and the investigations exist to find the cause \u2014 while p.888 adds **infection** alongside haemolysis as a cause to evaluate. The expansion above works through both.",
    ]),
  },
};

// ---- back-references from entries that are not themselves folded ---------------------------
// None expected. The dead-id check at the foot of this script runs on the OUTPUT and is what
// proves it, rather than this comment.
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
// Stem and options are never edited by a fold, so if this pass has the pair wrong the app keeps
// a question the drop was supposed to preserve. Checked here rather than trusted from the note.
for (const keepId of Object.keys(FOLD)) {
  const k = ARR.filter(x => x.id === keepId)[0];
  for (const d of FOLD[keepId].drop) {
    const q = ARR.filter(x => x.id === d)[0];
    if (k.answer !== q.answer) { console.error(keepId + ' keys ' + k.answer + ' but ' + d + ' keys ' + q.answer + ' — not the same question, or a key moved'); process.exit(2); }
    if (k.options.length !== q.options.length) { console.error(keepId + '/' + d + ': option counts differ'); process.exit(2); }
    if (k.options[k.answer].slice(0, 40) !== q.options[q.answer].slice(0, 40)) { console.error(keepId + '/' + d + ': the keyed option is not the same text'); process.exit(2); }
    console.log('pair check: ' + keepId + ' and ' + d + ' key index ' + k.answer + ', same keyed option, ' + k.options.length + ' options each');
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

// ---- the survivor must still read as one entry, not two glued together ----------------------
{
  const s = outArr.filter(q => q.id === 'pedep-neo-46')[0];
  const marks = s.explanation.split('The expansion above this line').length - 1;
  if (marks !== 1) { console.error('survivor carries the marker ' + marks + ' times'); process.exit(2); }
  if (s.explanation.indexOf('p.840') < 0) { console.error('survivor does not mention p.840'); process.exit(2); }
  if (s.source.indexOf('p.840') < 0) { console.error('survivor source does not cite p.840'); process.exit(2); }
  console.log('survivor pedep-neo-46: marker once, cites p.840 in source and explanation, ' + s.explanation.split(/\s+/).length + ' words');
}
console.log('output parses, array holds ' + outArr.length + ', 0 holes, 0 dead ids');

if (!doWrite) { console.log('DRY RUN — nothing written'); process.exit(0); }
fs.writeFileSync(P, out);
console.log('written. chars ' + src0.length + ' -> ' + out.length);
