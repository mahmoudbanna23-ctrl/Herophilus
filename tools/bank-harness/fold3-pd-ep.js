// Third fold pass over questions.peds.ep.js: the two section-3 printings of the functional
// abdominal pain vignette that is already live as pedep-gp-79.
//
//   pedep-gi-60 (p.534)  exact reprint of pedep-gp-79 (p.189) -- stem and options byte-identical
//   pedep-gi-22 (p.457)  reworded reprint -- same five options bar one, same key (index 3)
//
// Both were drafted in full and spliced in full: a staging file short of its page count fails the
// splice gate, so the fold is always a SEPARATE pass afterwards. 215 -> 213.
//
// ⚠️ THE OPTIONS ARE NOT REWRITTEN. p.189 prints the third option as "Liver function tests" and
// p.457 prints it as "Inflammatory markers and liver function tests". The survivor keeps the
// wording ITS OWN cited page prints; the variant is recorded in the explanation. Rewriting an
// option to a wording the cited page does not print would make the entry misquote p.189 -- the
// transcription rule outranks the "keep the fuller printing" rule on a field-by-field basis, and
// fold pass 2 set the precedent by touching only `source` and `explanation`.
//
// ⚠️ NOT A CROSS-BANK FOLD. The House bank prints this vignette too (pedhd-gastro-22, and it is
// live). A cross-bank match adds a bank to `alsoIn`; it NEVER removes an entry, and it is not
// done here -- section 3 has 21 such hits against House and they are one deliberate pass, not a
// side effect of this one. questions.peds.js is Chat B's file and is not written by this tool.
//
// Carve, dead-id guard and the loaded-length assertion are fold2-pd-ep.js's, unchanged; the only
// structural change is `edits`, a generic list of exact old -> new string swaps applied inside
// the survivor's block, so a chapter move does not need its own mechanism.
const fs = require('fs');
const P = 'D:/claude os/Medical school/Herophilus/app/data/questions.peds.ep.js';
const doWrite = process.argv.includes('--write');

const NL = String.fromCharCode(92) + 'n';   // the two characters \ and n, as they sit in the data file
const BR = NL + NL;                          // a paragraph break inside a single-quoted JS string
const TICK = String.fromCharCode(96);

// ⚠️ A MARKDOWN TABLE'S ROWS MUST SIT ON CONSECUTIVE LINES -- see fold2-pd-ep.js. No table here,
// but para() keeps the two tools interchangeable.
const para = parts => parts.map(p => Array.isArray(p) ? p.join(NL) : p).join(BR);
const MARK = BR + "*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',";

const GP79_ADD = para([
  "**⚠️ Within-bank reprint — pp.457 and 534.** The endpoint file prints this vignette three times: here on p.189 inside its Growth and Puberty section, and twice more inside Gastroenterology. It is held once in the app. p.534 reprints p.189 word for word. p.457 rewords the stem, keeps the same key, and prints its own shorter box:",
  "> Chronic periumbilical pain in a thriving child with normal bowel habits and no red flags suggests functional abdominal pain. It is common and does not require further investigation if there are no alarm features.",
  "**The three printings disagree in exactly one place.** p.189 and p.534 print the third option as “Liver function tests”; p.457 prints it as “Inflammatory markers and liver function tests”. The option list above is p.189’s, the page this entry cites.",
  "**Which is worth a moment, because of where the wording comes from.** The House bank prints this same vignette (" + TICK + "pedhd-gastro-22" + TICK + ") with p.189’s stem word for word but with p.457’s options — “paediatric” and the inflammatory-markers wording alike. The endpoint file is therefore assembling this question from two upstream printings rather than simply reprinting itself, which is the same seam visible elsewhere in its Gastroenterology section.",
  "**The key is untouched by any of it.** “Reassurance and no further investigation” is the answer in all three endpoint printings and in House, and the argument against the third option holds whichever wording it carries: inflammatory markers and liver enzymes are both organic-disease screens, and it is the absence of alarm signals — not the choice of test — that makes ordering one unjustified.",
]);

const FOLD = {
  'pedep-gp-79': {
    drop: ['pedep-gi-22', 'pedep-gi-60'],
    from: "source:'Pediatrics endpoint part1.pdf p.189'",
    to:   "source:'Pediatrics endpoint part1.pdf p.189 (the same vignette is printed again on p.534 word for word, and on p.457 reworded and with one option worded differently; all three carry the same key)'",
    explFrom: MARK,
    explTo:   BR + GP79_ADD + MARK,
    edits: [
      // The question is functional abdominal pain, and the two folded-in printings were both filed
      // under gi-abdopain. The original filing note justified `gastroenterology` on the grounds
      // that the question sat in the Growth and Puberty section; that reasoning no longer holds
      // now the Gastroenterology printings are folded in here.
      ["chapter:'gastroenterology',", "chapter:'gi-abdopain',"],
      ["This is a **gastroenterology** question printed inside the Growth and Puberty section of the endpoint file. It is filed under " + TICK + "gastroenterology" + TICK + ";",
       "This is a **gastroenterology** question printed inside the Growth and Puberty section of the endpoint file and twice more inside its Gastroenterology section. It is filed under " + TICK + "gi-abdopain" + TICK + " with the rest of the abdominal pain questions;"],
    ],
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

let dropped = 0, sourced = 0, expl = 0, edited = 0;
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
    for (const [from, to] of (f.edits || [])) {
      if (t.split(from).length - 1 !== 1) { console.error('edit not matched exactly once for ' + id + ': ' + from.slice(0, 60)); process.exit(2); }
      t = t.split(from).join(to);
      edited++;
    }
    console.log('  keep  ' + id + '  <- ' + f.drop.join(', '));
  }
  kept.push(t.replace(/\},$/, '}'));
}
console.log('dropped ' + dropped + ' | sources rewritten ' + sourced + ' | explanations extended ' + expl + ' | other edits ' + edited + ' | ' + blocks.length + ' -> ' + kept.length);

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
