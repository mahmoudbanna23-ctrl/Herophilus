// Second fold pass over questions.peds.ep.js: the two REWORDED reprints that the exact
// duplicate-stem check in validate-all.js is structurally blind to. Found by reprint-pd-ep.js
// run in NORMAL mode (not --self-test) over section 1's page range.
//
// ⚠️ THREE ENTRY SHAPES, and a carve that knows two of them silently loses a third of the file.
//   1. bare      `{` on its own line, closing `},`          — section 1 and draft-A  (111)
//   2. inline    `{ id:'...` , closing ` },` on its line    — draft-B                 (38)
//   3. the head  `var Q_PEDS_EP = [{`                       — ONE entry, the first    (1)
// Shape 3 exists because fold-pd-ep.js joined the header to the first block with no newline.
// normaliseHead() below undoes that before carving, and the re-emit puts the newline back, so
// after this tool runs the file is back to two shapes. The block count is asserted against the
// LOADED array length, which is the only count that cannot be fooled by a shape the carve missed.
// Diagnosis: progress\resume-peds-endpoint.md, "OPEN 2026-09-03".
//
// The source rewrite is an explicit old -> new string because pedep-gp-10's source already
// carries a parenthetical from fold pass 1. The explanation rewrite is anchored on the closing
// marker, which is unique inside a block; it carries over the content that would otherwise be
// lost with the dropped entry (workspace CLAUDE.md 6: condense, never silently drop).
const fs = require('fs');
const P = 'D:/claude os/Medical school/Herophilus/app/data/questions.peds.ep.js';
const doWrite = process.argv.includes('--write');

const NL = String.fromCharCode(92) + 'n';   // the two characters \ and n, as they sit in the data file
const BR = NL + NL;                          // a paragraph break inside a single-quoted JS string

// ⚠️ A MARKDOWN TABLE'S ROWS MUST SIT ON CONSECUTIVE LINES. Joining every line of an insert with
// BR turns a table into a run of pipe-paragraphs, and nothing in the pipeline sees it: the file
// parses, the array length is right, node --check passes, boot-check reports 0 errors and
// validate-all passes every hard check. It was caught only by reading the rendered explanation.
// para() takes an array of paragraphs where a table is itself an array of rows.
const para = parts => parts.map(p => Array.isArray(p) ? p.join(NL) : p).join(BR);
const MARK = BR + "*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',";
const TICK = String.fromCharCode(96);

const GP8_ADD = para([
  "**⚠️ Within-bank reprint — p.175.** The endpoint file prints this vignette a second time, reworded, with the same five options and the same key. It is held once in the app. The p.175 printing carries the fuller box, and this is the clause it adds:",
  "> The child’s growth follows the 3rd centile, both height and weight proportionate, and parents are short consistent with familial short stature. **Constitutional delay would show delayed puberty signs.**",
  "**Familial short stature against constitutional delay — the discrimination that box raises, and the one the exam always tests.** " + TICK + "13) Short stature.txt" + TICK + " teaches it as two cases rather than as a table: Case 1 is this boy (short parents, normal proportions, normal puberty stage, bone age = chronological age -> familial short stature), and Case 2 is a 13-year-old with no puberty yet, a father who was a late bloomer, Tanner stage 1, a bone age delayed 2 years and normal labs -> constitutional delay, managed by reassurance ± 3-6 months of testosterone to induce puberty at 13-14 years.",
  ["| | **Familial short stature** | **Constitutional delay (CDGP)** |",
   "|---|---|---|",
   "| Parents | **Short** | Normal height, often a late-developing parent |",
   "| Bone age | **= chronological age** | **Delayed** |",
   "| Puberty | **Normal timing** | **Delayed** |",
   "| Age at presentation | Often school entry | **Adolescence** |",
   "| Sex | Either | **Boys** |",
   "| Final height | **Short**, as predicted | **Normal** |"],
  "The parents, the bone age and the puberty stage are the lecture’s own discriminators; the last two rows — age at presentation and final height — are standard teaching and are *not taken from the course material*. At 7 there are no pubertal signs to read in either direction, which is why the parents’ heights and the wrist film carry the diagnosis: “A. Delayed → Constitutional delay of growth and puberty/ Endocrine. B. Normal → Familial.”",
]);

const GP10_ADD = para([
  "**⚠️ The third printing — p.195** rewords “drive” into “driver” and prints a fuller box than p.48 does:",
  "> During childhood (after infancy, before puberty), growth is largely regulated by growth hormone rather than nutrition or sex hormones.",
  "**The phases, taken from that box’s own boundaries.** The childhood phase runs after infancy and before puberty — roughly 2 years to the onset of the pubertal spurt. It is the longest of the four phases, and although its velocity is the lowest of the growing years, its sheer length makes it the largest single contributor to final height.",
  ["| Phase | Boundaries | Driver |",
   "|---|---|---|",
   "| Fetal | conception → birth | Placenta and maternal nutrition |",
   "| Infantile | birth → about 2 y | **Nutrition** |",
   "| **Childhood** | **about 2 y → puberty** | **GH / IGF-1**, thyroid hormone permissive |",
   "| Pubertal | puberty → epiphyseal fusion | **Sex steroids** |"],
  "⚠️ The lectures put a number on only one phase: " + TICK + "14) Puberty.txt" + TICK + " says the pubertal spurt adds “15% to final adult height”. The shares usually quoted for the other three — about 30% fetal, 15% infantile, 40% childhood — are *not taken from the course material*.",
  "Why the length of the phase matters clinically: a small, sustained deficit over eight childhood years costs more height than a dramatic one over eight months. That is why " + TICK + "13) Short stature.txt" + TICK + " makes growth **velocity** a criterion in its own right — “Height velocity <1.5 SD for age”, and “Poor growth velocity (< 4cm per year)” as a trigger to investigate GH — and why it prints across a slide that “A single measurement is less important than growth trend”.",
]);

const FOLD = {
  'pedep-gp-8': {
    drop: ['pedep-gp-72'],
    from: "source:'Pediatrics endpoint part1.pdf p.44'",
    to:   "source:'Pediatrics endpoint part1.pdf p.44 (the same vignette is printed again on p.175, reworded, with the same options and the same key; the p.175 box is the fuller one and is quoted in the explanation)'",
    explFrom: MARK,
    explTo:   BR + GP8_ADD + MARK,
  },
  'pedep-gp-10': {
    drop: ['pedep-gp-82'],
    from: "source:'Pediatrics endpoint part1.pdf p.48 (the same question is printed again on p.179)'",
    to:   "source:'Pediatrics endpoint part1.pdf p.48 (the same question is printed again on p.179, and on p.195 with “drive” reworded to “driver”; the p.195 box is the fuller one and is quoted in the explanation)'",
    explFrom: MARK,
    explTo:   BR + GP10_ADD + MARK,
  },
};

const dropSet = new Set();
Object.values(FOLD).forEach(f => f.drop.forEach(d => dropSet.add(d)));

// ---- the count that cannot be fooled: load the array and read its length -------------------
const src0 = fs.readFileSync(P, 'utf8');
let LOADED;
{ const m = { }; (new Function('m', src0 + ';m.a = Q_PEDS_EP;'))(m); LOADED = m.a.length; }

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
const idOf = t => (t.match(/id:'([^']+)'/) || [])[1];

if (blocks.length !== LOADED) {
  console.error('carved ' + blocks.length + ', loaded array holds ' + LOADED + ' — the carve is missing an entry shape');
  process.exit(2);
}
console.log('carved ' + blocks.length + ' blocks, loaded array ' + LOADED + ' — agree');

const seen = new Set(blocks.map(b => idOf(b.text)));
for (const d of dropSet) if (!seen.has(d)) { console.error('id to drop not present: ' + d); process.exit(2); }
for (const k of Object.keys(FOLD)) if (!seen.has(k)) { console.error('keeper not present: ' + k); process.exit(2); }

// ---- no dead ids: nothing else may reference an id we are about to remove -------------------
for (const d of dropSet) {
  const re = new RegExp(d + '(?![0-9])', 'g');
  const owner = blocks.find(b => idOf(b.text) === d);
  const others = blocks.filter(b => b !== owner && re.test(b.text)).map(b => idOf(b.text));
  if (others.length) { console.error('dead id would be left: ' + d + ' is referenced by ' + others.join(', ')); process.exit(2); }
}

let dropped = 0, sourced = 0, expl = 0;
const kept = [];
for (const b of blocks) {
  const id = idOf(b.text);
  if (dropSet.has(id)) { dropped++; console.log('  drop  ' + id); continue; }
  let t = b.text;
  if (FOLD[id]) {
    const f = FOLD[id];
    if (t.split(f.from).length - 1 !== 1) { console.error('source not matched exactly once for ' + id); process.exit(2); }
    t = t.split(f.from).join(f.to);
    sourced++;
    if (f.explFrom) {
      if (t.split(f.explFrom).length - 1 !== 1) { console.error('explanation marker not matched exactly once for ' + id); process.exit(2); }
      t = t.split(f.explFrom).join(f.explTo);
      expl++;
    }
    console.log('  keep  ' + id + '  <- ' + f.drop.join(', '));
  }
  kept.push(t.replace(/\},$/, '}'));
}
console.log('dropped ' + dropped + ' | sources rewritten ' + sourced + ' | explanations extended ' + expl + ' | ' + blocks.length + ' -> ' + kept.length);

const out = lines.slice(0, head).join('\n') + '\n' + kept.join(',\n\n') + '\n' + lines.slice(tailStart).join('\n');

// ---- prove the output before it is written --------------------------------------------------
let outLen = -1;
try { const m = {}; (new Function('m', out + ';m.a = Q_PEDS_EP;'))(m); outLen = m.a.length; }
catch (e) { console.error('OUTPUT DOES NOT PARSE: ' + e.message); process.exit(2); }
if (outLen !== kept.length) { console.error('output array holds ' + outLen + ', expected ' + kept.length); process.exit(2); }
console.log('output parses, array holds ' + outLen);

if (!doWrite) { console.log('DRY RUN — nothing written'); process.exit(0); }
fs.writeFileSync(P, out);
console.log('written. chars ' + src0.length + ' -> ' + out.length);
