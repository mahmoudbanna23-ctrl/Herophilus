// Fourth fold pass over questions.peds.ep.js: the seven within-bank reprints standing open after
// section 5 was spliced. 277 -> 270.
//
//   keep pedep-emg-5  (p.586)  <- drop pedep-emg-27 (p.630)   respelled reprint
//   keep pedep-acc-2  (p.559)  <- drop pedep-emg-30 (p.636)   reprint across sections, reformatted
//   keep pedep-emg-33 (p.642)  <- drop pedep-acc-3  (p.561)   ABBREVIATED reprint, fuller kept
//   keep pedep-emg-59 (p.697)  <- drop pedep-emg-55 (p.689)   dropped-filler shape, KEY LETTER MOVES
//   keep pedep-gi-1   (p.414)  <- drop pedep-gi-62  (p.538)   same question, child's age changed
//   keep pedep-nut-16 (p.268)  <- drop pedep-nut-64 (p.366)   reworded stem, two options respelled
//   keep pedep-nut-59 (p.356)  <- drop pedep-nut-74 (p.387)   reworded stem, key option respelled
//
// Every one of these is WITHIN the endpoint bank, so none of them takes `alsoIn`. A cross-bank
// match adds a bank and never removes an entry, and that pass is still owed separately.
//
// ⚠️ THE SURVIVOR IS THE FULLER PRINTING, AND IT KEEPS THE WORDING ITS OWN CITED PAGE PRINTS.
// fold3-pd-ep.js set the precedent and it holds here: only `source` and `explanation` are touched,
// never `stem`, `options` or `answer`. Rewriting an option to a wording the cited page does not
// print would make the entry misquote its own citation.
//
// ⚠️ pedep-emg-55/59 IS THE ONE WHERE THE KEY LETTER MOVES. p.689 prints four options and keys the
// answer at index 1; p.697 prints the same four plus nasogastric rehydration therapy and keys the
// SAME ANSWER TEXT at index 4. Letters are positional, so this is the "reordered/expanded, which
// moves the key letter" fold shape, not two different questions. The five-option printing is kept.
//
// ⚠️ THREE BACK-REFERENCES POINT AT IDS THIS PASS REMOVES and are repaired here, not left dead:
// pedep-gi-1 -> gi-62, pedep-nut-59 -> nut-74 (both inside their own survivor blocks), and
// pedep-nut-65 / pedep-nut-67 -> nut-64, which are NOT survivors of any fold and are redirected to
// pedep-nut-16 through OTHER_EDITS. Each was hand-read against its antecedent AND its own key:
// nut-65 keys "gross muscle wasting" and nut-16 is about kwashiorkor oedema, so no leak; nut-67
// keys "edema" and already states the low-albumin mechanism in its own printed box, so pointing it
// at nut-16 rather than nut-64 changes nothing about what it gives away. No instrument sees this --
// it is read, not measured.
const fs = require('fs');
const P = 'D:/claude os/Medical school/Herophilus/app/data/questions.peds.ep.js';
const doWrite = process.argv.includes('--write');

const BS   = String.fromCharCode(92);        // a literal backslash, as it sits in the data file
const NL   = BS + 'n';                       // the two characters \ and n
const BR   = NL + NL;                        // a paragraph break inside a single-quoted JS string
const TICK = String.fromCharCode(96);

const para = parts => parts.map(p => Array.isArray(p) ? p.join(NL) : p).join(BR);
const MARK = BR + "*The expansion above this line is written for this bank; the box itself is the endpoint file\u2019s own.*',";

const FOLD = {
  'pedep-emg-5': {
    drop: ['pedep-emg-27'],
    from: "source:'Pediatrics endpoint part1.pdf p.586'",
    to:   "source:'Pediatrics endpoint part1.pdf p.586 (the same vignette is printed again on p.630 with the same five options in the same order and the same key, differing only in punctuation and a few words of phrasing)'",
    add: para([
      "**\u26a0\ufe0f Within-bank reprint \u2014 p.630.** The endpoint file prints this vignette twice inside its Emergencies section. The two printings differ only in wording that carries no clinical weight \u2014 \u201cruns in screaming\u201d against \u201cruns screaming into the department\u201d, \u201cposition his head neutrally\u201d against \u201cput his head into the neutral position\u201d, and the compression ratio set as 15:2 on one page and 15 : 2 on the other. The five options, their order and the key are identical. It is held once in the app, under the p.586 printing.",
    ]),
  },

  'pedep-acc-2': {
    drop: ['pedep-emg-30'],
    from: "source:'Pediatrics endpoint part1.pdf p.559'",
    to:   "source:'Pediatrics endpoint part1.pdf p.559 (the same vignette is reprinted on p.636 inside the Emergencies section, with the ABCDE findings laid out differently and the Breathing line split across two rows; same five options, same order, same key)'",
    add: para([
      "**\u26a0\ufe0f Within-bank reprint \u2014 p.636.** This vignette is printed once in the Accidents section and again in Emergencies. The clinical content is identical down to every observation \u2014 the same pulse, blood pressure, capillary refill time, saturations and respiratory rate \u2014 and the option list, its order and the key are identical. The only differences are typographic: p.636 lays the findings out with arrows rather than colons and splits the Breathing findings across two rows, so \u201cBreathing\u201d is printed twice on that page. It is held once in the app, under the p.559 printing.",
    ]),
  },

  'pedep-emg-33': {
    drop: ['pedep-acc-3'],
    from: "source:'Pediatrics endpoint part1.pdf p.642'",
    to:   "source:'Pediatrics endpoint part1.pdf p.642 (an ABBREVIATED printing of the same question appears on p.561, cutting the vignette to a single sentence but keeping the same five options in the same order and the same key)'",
    add: para([
      "**\u26a0\ufe0f Within-bank reprint \u2014 p.561, and the shorter printing is the one that was dropped.** The endpoint file prints this question twice: in full here on p.642, with the mechanism, the age, the burn distribution and the appearance of the burnt skin, and again on p.561 cut down to \u201cRoberto, a boy who suffered an extensive burn, is much more settled following intravenous analgesia. which should be undertaken first?\u201d. The five options, their order and the key are identical in both. The fuller printing is kept, because the burn depth described here \u2014 blistering, mottled, with a few white areas \u2014 is what the reasoning actually rests on and the p.561 printing omits it entirely.",
      "\u26a0\ufe0f **The figure is not reproduced.** p.642 refers the reader to a body diagram showing the distribution of the burn (\u201cas shown\u201d) and that figure has not been cropped into this bank, so the printed percentage of body surface area is not available here. The reasoning above does not depend on it: an extensive burn of this description warrants fluid resuscitation whatever the exact figure, and the option list contains no percentage.",
    ]),
  },

  'pedep-emg-59': {
    drop: ['pedep-emg-55'],
    from: "source:'Pediatrics endpoint part1.pdf p.697'",
    to:   "source:'Pediatrics endpoint part1.pdf p.697 (the same vignette is printed on p.689 with a four-option menu \u2014 the same options bar nasogastric rehydration therapy, and the same answer text sitting at a different position in the list)'",
    add: para([
      "**\u26a0\ufe0f Within-bank reprint \u2014 p.689, and the key letter is not the same on both pages.** The endpoint file prints this vignette twice inside its Emergencies section, word for word bar punctuation. p.697, the printing kept here, offers five options and keys oral rehydration solution last. p.689 offers four \u2014 the same list without nasogastric rehydration therapy, and with the intravenous option written simply as \u201cIV normal saline\u201d rather than as a 20 mL/kg bolus \u2014 and keys the same answer text second.",
      "**The answer text is identical on both pages; only its position moves.** That matters because a letter in this bank is positional, so the two printings would be marked differently by letter and identically by content. The five-option printing is kept: it is the fuller menu, and the nasogastric option it adds is the clinically interesting distractor \u2014 nasogastric rehydration is the step for a child who cannot keep oral fluids down, which this boy, whose vomiting has settled, can.",
    ]),
  },

  'pedep-gi-1': {
    drop: ['pedep-gi-62'],
    from: "source:'Pediatrics endpoint part1.pdf p.414'",
    to:   "source:'Pediatrics endpoint part1.pdf p.414 (the same question is printed again on p.538 with the child\\'s age changed from 6 years to 2 years and the travel-history line dropped; same five options, same order, same key)'",
    edits: [
      ["**This vignette is printed twice in this bank.** The identical scenario, option list and key reappear later as " + TICK + "pedep-gi-62" + TICK + ", with the child" + BS + "'s age changed from 6 to 2 years; the reasoning above applies unchanged to that printing.",
       "**\u26a0\ufe0f Within-bank reprint \u2014 p.538, and the two printings are not identical.** The endpoint file prints this question twice: here on p.414 in a 6-year-old who has never left the UK, and again on p.538 in a 2-year-old with the travel-history line dropped. The five options, their order and the key are the same on both pages. It is held once in the app, under the p.414 printing, whose stem is the fuller of the two."
       + BR + "**The age difference is worth naming rather than smoothing over.** Rotavirus incidence peaks below two years, so the p.538 printing is the more typical presentation and the 6-year-old kept here is the harder one \u2014 the reasoning holds for both, but it is the stool character, the short course and the absence of blood that carry it at either age, not the age itself."],
    ],
  },

  'pedep-nut-16': {
    drop: ['pedep-nut-64'],
    from: "source:'Pediatrics endpoint part1.pdf p.268'",
    to:   "source:'Pediatrics endpoint part1.pdf p.268 (the same question is printed again on p.366 as \u201cWhat is the main cause of edema in kwashiorkor?\u201d, with the same five options in the same order and the same key; two options differ only in casing and in stool/stools)'",
    add: para([
      "**\u26a0\ufe0f Within-bank reprint \u2014 p.366.** The endpoint file asks this question twice, once as a sentence completion and once as a direct question. The five options are the same, in the same order, with the same key; the only differences are that p.366 capitalises the key option and prints the last distractor as \u201cstools\u201d rather than \u201cstool\u201d. It is held once in the app, under the p.268 printing.",
    ]),
  },

  'pedep-nut-59': {
    drop: ['pedep-nut-74'],
    from: "source:'Pediatrics endpoint part1.pdf p.356'",
    to:   "source:'Pediatrics endpoint part1.pdf p.356 (the same question is printed again on p.387 as \u201cHow does human milk oligosaccharides work?\u201d, with the same five options in the same order and the key in the same position, respelled there from \u201cWork as prebiotics\u201d to \u201cFunction as prebiotics\u201d)'",
    edits: [
      ["This question is reworded, with the same option ladder and key position, at " + TICK + "pedep-nut-74" + TICK + ".",
       "**\u26a0\ufe0f Within-bank reprint \u2014 p.387.** The endpoint file asks this twice, as \u201cWhat is the main benefit\u201d here and as \u201cHow does human milk oligosaccharides work?\u201d on p.387. The five options run in the same order with the key in the same position; p.387 respells it from \u201cWork as prebiotics\u201d to \u201cFunction as prebiotics\u201d, which changes nothing about what is being asked. It is held once in the app, under the p.356 printing, whose wording the option list above reproduces."],
    ],
  },
};

// ---- back-references from entries that are not themselves folded ---------------------------
// Both point at pedep-nut-64, which this pass removes. Redirected to its survivor, pedep-nut-16.
const OTHER_EDITS = {
  'pedep-nut-65': [
    ["mirror-image question at " + TICK + "pedep-nut-52" + TICK + " and " + TICK + "pedep-nut-64" + TICK + " covers",
     "mirror-image question at " + TICK + "pedep-nut-52" + TICK + " and " + TICK + "pedep-nut-16" + TICK + " covers"],
  ],
  'pedep-nut-67': [
    ["mechanism detailed at " + TICK + "pedep-nut-64" + TICK + ".",
     "mechanism detailed at " + TICK + "pedep-nut-16" + TICK + "."],
  ],
};

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
