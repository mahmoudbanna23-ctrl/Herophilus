// Fifth fold pass over questions.peds.ep.js: the two within-bank reprints section 6 brought in.
// 293 -> 291.
//
//   keep pedep-gp-5  (p.38/p.169) <- drop pedep-per-17 (p.760)  reworded stem, options REORDERED
//   keep pedep-gp-70 (p.171)      <- drop pedep-per-21 (p.768)  exact reprint across sections
//
// Both are WITHIN the endpoint bank, so neither takes `alsoIn`. The cross-bank pass against the
// House bank is still owed separately, and section 6 adds a great deal to it: the sweep put
// endpoint section 6 against House chapter 6 at three whole-stem matches and a further seven
// option-set matches with the key in the same place. Nothing folds across the two banks while
// both chats write.
//
// ⚠️ THE SURVIVOR IS THE FULLER PRINTING, AND IT KEEPS THE WORDING ITS OWN CITED PAGE PRINTS.
// fold3's precedent, held again here: only `source` and `explanation` are touched, never `stem`,
// `options` or `answer`. Both survivors are the fuller entry by a wide margin -- 457 words against
// 232, and 505 against 270 -- and pedep-gp-70 is already filed under `perinatal` despite being
// printed inside the Growth and Puberty section, so the fold costs the perinatal chapter nothing.
//
// ⚠️ pedep-gp-5 / pedep-per-17 IS THE ONE THE SWEEP COULD NOT SEE, and that is the finding worth
// keeping. sweep-staged-ep.js scored the stems at well under its 0.55 threshold -- "How is a very
// low birth weight infant defined?" against "Very low birth weight infants are those who have:" --
// and its option-set matcher missed too, because p.38 prints "Birth weight less than 1750 g" where
// p.760 prints "birth weight less than 1750 gm", so no option string is equal. Two independent
// instruments, both blind to the same reprint. A drafting agent reading the page caught it. The
// options are also REORDERED between the printings (p.38 runs 2500 / 1500 / 1750 / 1000 / 500;
// p.760 runs 1750 / 1500 / 2500 / 1000 / 500), and the key text -- "less than 1500 g" -- happens
// to land at index 1 in both, which is coincidence, not a check that passed.
//
// ⚠️ p.760 SETTLES pedep-gp-5's OWN TRANSCRIPTION NOTE. That entry records that p.38 prints its
// last option as "Birth weight less than 500" with no unit. p.760 prints the same option as
// "birth weight less than 500 gm". The unit is grams; the note is updated to say so, and the
// option itself is left exactly as p.38 prints it, because the entry cites p.38.
//
// ⚠️ NO BACK-REFERENCES POINT AT EITHER DROPPED ID -- both were spliced minutes before this pass
// and nothing in the file mentions them. Measured, not assumed: the dead-id check at the foot of
// this script runs on the OUTPUT and would fail the pass if it were wrong.
//
// ⚠️ NOT A FOLD, and checked on the page: sweep-staged-ep.js scored pedep-per-18 against
// pedep-emg-32 at 0.556 with the keys differing. They share nothing but the phrase "which of the
// following is TRUE" -- per-18 is fetal circulation, emg-32 is capillary refill time. A shared
// question template pairs questions; it never folds them.
const fs = require('fs');
const P = 'D:/claude os/Medical school/Herophilus/app/data/questions.peds.ep.js';
const doWrite = process.argv.includes('--write');

const BS   = String.fromCharCode(92);        // a literal backslash, as it sits in the file
const NL   = BS + 'n';                       // the two characters \ and n
const BR   = NL + NL;                        // a paragraph break inside a single-quoted string
const TICK = String.fromCharCode(96);

const para = parts => parts.map(p => Array.isArray(p) ? p.join(NL) : p).join(BR);
const MARK = BR + "*The expansion above this line is written for this bank; the box itself is the endpoint file\u2019s own.*',";

const FOLD = {
  'pedep-gp-5': {
    drop: ['pedep-per-17'],
    from: "source:'Pediatrics endpoint part1.pdf p.38 (the same question is printed again on p.169)'",
    to:   "source:'Pediatrics endpoint part1.pdf p.38 (the same question is printed again on p.169, and a third time on p.760 inside the Perinatal section with the first three options reordered and every weight written gm rather than g)'",
    add: para([
      "**\u26a0\ufe0f Within-bank reprint \u2014 p.760, a third printing.** The endpoint file asks this three times: here on p.38, again on p.169, and again on p.760 in the Perinatal section as \u201cVery low birth weight infants are those who have:\u201d. The five weights are the same on every printing and the key is the same weight on every printing. p.760 reorders the first three options \u2014 1750, 1500, 2500 where this page runs 2500, 1500, 1750 \u2014 so the key happens to stay at the same position by coincidence rather than because the order was preserved. It is held once in the app, under the p.38 printing, whose wording the option list above reproduces.",
      "**\u26a0\ufe0f The transcription note above is now settled.** p.760 prints the last option as \u201cbirth weight less than 500 gm\u201d, so the missing unit on this page is grams, and the option means birth weight under 500 g. The option is left exactly as p.38 prints it, because that is the page this entry cites.",
    ]),
  },

  'pedep-gp-70': {
    drop: ['pedep-per-21'],
    from: "source:'Pediatrics endpoint part1.pdf p.171'",
    to:   "source:'Pediatrics endpoint part1.pdf p.171 (reprinted without a single change on p.768 inside the Perinatal section \u2014 same stem, same five options in the same order, same key, same explanation box)'",
    add: para([
      "**\u26a0\ufe0f Within-bank reprint \u2014 p.768.** The endpoint file prints this question twice, once in the Growth and Puberty section and once in Perinatal, and the two printings are identical: the same stem, the same five options in the same order, the same key and the same explanation box. It is held once in the app. The filing note above is why it sits in the perinatal chapter rather than the section it was printed in, and the p.768 printing is the book agreeing.",
    ]),
  },
};

// ---- back-references from entries that are not themselves folded ---------------------------
// None. Both dropped ids were spliced minutes before this pass and nothing references them; the
// dead-id check on the OUTPUT is what proves it rather than this comment.
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
// anything: run before the edits it would flag references this pass is about to fix.
let dead = 0;
for (const d of dropSet) {
  const re = new RegExp(d.replace(/-/g, '\\-') + '(?![0-9])');
  const refs = outArr.filter(q => re.test(q.explanation || '') || re.test(q.source || '') || re.test(q.objective || '') || re.test(q.stem || '')).map(q => q.id);
  if (refs.length) { console.error('DEAD ID: ' + d + ' still referenced by ' + refs.join(', ')); dead++; }
}
if (dead) process.exit(2);
console.log('output parses, array holds ' + outArr.length + ', 0 holes, 0 dead ids');

if (!doWrite) { console.log('DRY RUN — nothing written'); process.exit(0); }
fs.writeFileSync(P, out);
console.log('written. chars ' + src0.length + ' -> ' + out.length);
