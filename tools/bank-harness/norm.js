/* Normalisation for the TAIL sweep (Q686-Q724 + S1-S110).
   The fourth section RE-PUBLISHES departmental items, so it overlaps the main run
   by design — but three recorded defect families defeat a naive comparison:
     1. WHITESPACE IS NOT STABLE ACROSS REPRINTS. S70 restates S21 with the two
        printings' defects SWAPPED: S21 has "hearing losscan" + "neuroma (space)",
        S70 has "hearing loss can" + "neuroma(no space)". Strip whitespace entirely.
     2. ONE EPONYM PRINTS SEVEN WAYS ("Plummer vinson syndrome", "Plummer vinson's",
        "Plummer-Vinson's syndrome", ...), Meniere three ("Menière's", "Meniere's",
        "Meniere"). Strip punctuation and accents.
     3. REAL TYPOS, INCLUDING IN KEYS — "Peumothorax", "Herptic", "Aeuroginosa",
        "rapture" for rupture, "Stidor", "jugulodiagastric". These survive 1 and 2,
        so option matching also needs an edit-distance tolerance.
   Plus British/American, which defeated three sweep stages once already. */
const DEACC = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const BR = [[/tumour/g,'tumor'],[/oesophag/g,'esophag'],[/anaemi/g,'anemi'],[/odour/g,'odor'],
  [/foetid/g,'fetid'],[/paediatr/g,'pediatr'],[/oedema/g,'edema'],[/haemo/g,'hemo'],
  [/haemat/g,'hemat'],[/leucoplakia/g,'leukoplakia'],[/oesophag/g,'esophag']];
function base(s) {
  let t = DEACC(String(s || '')).toLowerCase();
  for (const [re, to] of BR) t = t.replace(re, to);
  return t;
}
/* tight: letters and digits only — kills every whitespace and punctuation defect */
const tight = s => base(s).replace(/[^a-z0-9]/g, '');
/* loose: words, for token comparisons */
const words = s => base(s).replace(/[^a-z0-9]+/g, ' ').trim();
/* Levenshtein, capped — only used on option strings, which are short */
function lev(a, b) {
  if (a === b) return 0;
  if (Math.abs(a.length - b.length) > 6) return 99;
  const m = a.length, n = b.length;
  let prev = Array.from({ length: n + 1 }, (_, j) => j), cur = new Array(n + 1);
  for (let i = 1; i <= m; i++) {
    cur[0] = i;
    for (let j = 1; j <= n; j++)
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    [prev, cur] = [cur, prev];
  }
  return prev[n];
}
/* two option strings are "the same option" if tight-equal, or within a small edit
   distance scaled to length — this is what catches Peumothorax vs Pneumothorax */
/* ⚠️⚠️ THE TOLERANCE THAT CATCHES A TYPO ALSO COLLAPSES AN ENUMERATION, AND AN
   ENUMERATED KEY IS ALL DIFFERENCE. Measured 2026-08-24, before this guard:
   sameOpt said SAME for "Type 1"/"Type 3", "Type 3"/"Type B", "Grade II"/"Grade IV",
   "A & C"/"A & B" and "B and C"/"B and D" — every one of them a pair where the single
   differing character IS the answer. It had already produced a false "option-set +
   key" label on the Q692/Q693 neck-trauma pair, whose keys are II and IV.
   Three guards, each aimed at one shape, applied before the edit distance:
     1. the digit strings must match      — "type1" vs "type3", "ct" vs "3dct"
     2. a trailing roman numeral must match — "gradeii" vs "gradeiv"
     3. a difference confined to the FINAL character, where that character is a
        digit, a roman numeral or a letter a-e, is an option label, not a typo
                                          — "bandc" vs "bandd"
   and anything shorter than five characters must match exactly ("ac"/"ab",
   "ct"/"us", "high"/"low"). Everything longer keeps the tolerance that catches
   Peumothorax, Stidor and Plummer-Vinson. */
const digits = s => (s.match(/\d/g) || []).join('');
const roman = s => (/([ivx]+)$/.exec(s) || ['', ''])[1];
function sameOpt(a, b) {
  const x = tight(a), y = tight(b);
  if (x === y) return true;
  if (!x || !y) return false;
  if (digits(x) !== digits(y)) return false;
  if (roman(x) !== roman(y)) return false;
  if (x.length === y.length && x.slice(0, -1) === y.slice(0, -1)
      && /[0-9a-e]/.test(x.slice(-1) + y.slice(-1))) return false;
  if (Math.min(x.length, y.length) < 5) return false;
  /* ⚠️⚠️ THE LENGTH FLOOR IS NOT ENOUGH — a SHORT word can hide inside a LONG
     option and carry the whole answer. Measured 2026-08-24 by the corpus
     self-sweep: "Type B tympanometry with HIGH basic volume" and "…with LOW
     basic volume" came back SAME, because at 34 characters the 12 % tolerance
     buys four edits and high→low costs three. Those are the two halves of a
     deliberate pair (traumatic perforation against middle-ear effusion) and
     folding them would have destroyed the distinction the question exists for.
     `normtest.js` had tested the bare words "High" / "Low" and passed, because
     bare they fall under the five-character floor. So: if either side contains a
     word of four characters or fewer that the other does not, they are DIFFERENT
     — a bare possessive "s" excepted, since tight() strips the apostrophe and
     "Plummer-Vinson's" must still meet "Plummer vinson".
     ⚠️ And the FIRST version of this guard OVER-corrected: it demoted "Crusting
     and bleeding from nose" against "…from THE nose", splitting two real folds
     (S9 and S104), because "the" is a short word present on one side only. A
     function word carries no answer. So the guard ignores a bare possessive "s"
     AND the closed class of function words below — and nothing else, because
     "high", "low", "left" and "right" are exactly the short words that DO carry
     the answer.
     ⚠️⚠️ AND THE WORD GUARD WAS STILL NOT ENOUGH, because a long word can carry
     the answer too: "Lies ANTERIOR to the prevertebral fascia" against "Lies
     POSTERIOR to …" is two edits inside 34 characters, and a 12 % whole-string
     tolerance buys four. Those are options a and d of ONE question (S44), so
     collapsing them would have made a question identical to itself.
     The real fix is to stop measuring the tolerance over the WHOLE STRING at
     all. A typo lives in ONE WORD, so the tolerance belongs on the word: pair
     the content words up in order and allow at most one edit per word, and only
     in a word of six characters or more. Whole-string distance is kept solely
     as the fallback for when the two sides do not even have the same number of
     content words. */
  const FN = new Set(('s a an the of in on to at by is are was were be and or for with from '
    + 'this that these those it its his her their as into than then').split(' '));
  const w = s => words(s).split(' ').filter(t => t && !FN.has(t));
  const wx = w(a), wy = w(b);
  if (wx.length === wy.length && wx.length) {
    for (let i = 0; i < wx.length; i++) {
      const p = wx[i], q = wy[i];
      if (p === q) continue;
      /* ⚠️ Edit distance ALONE cannot tell a typo from the answer: aeuroginosa
         against aeruginosa is two edits, and so is hypernasality against
         hyponasality. What separates them is whether the LETTERS are the same —
         a transposition or a doubled letter keeps the multiset, a different
         morpheme does not — and whether the word still STARTS the same way,
         because typists slip in the middle while morphemes swap at the front.
         Measured over twenty pairs drawn from this corpus:

           TYPOS         lev 1-2, sorted-letter distance 1-2, first letter same
                         (morhexella/moraxella, moure/maure, haemophylus/…,
                          aeuroginosa/aeruginosa, influenza/influenzae)
           DISTINCTIONS  sorted-letter distance 3 or more, every one
                         (upper/lower 3, major/minor 3, hypernasality/… 3,
                          unilateral/bilateral 3, supraglottic/subglottic 3,
                          anterior/posterior 4, inspiratory/expiratory 4,
                          inner/outer 4, medial/lateral 4, benign/malign 4,
                          before/after 4, polyp/nodule 6, acute/chronic 6)

         Nothing lands between 2 and 3, so the threshold sits in a measured gap
         rather than on a guess — and the first-letter test catches the pair the
         gap would not, nasal/basal (lev 1, sorted 2). */
      if (Math.min(p.length, q.length) < 5) return false;   /* short word: exact or nothing */
      if (p[0] !== q[0]) return false;
      const srt = s => s.split('').sort().join('');
      if (!(lev(p, q) <= 2 && lev(srt(p), srt(q)) <= 2)) return false;
    }
    return true;
  }
  const d = lev(x, y);
  return d <= Math.max(1, Math.floor(Math.min(x.length, y.length) * 0.12));
}
/* option SET equality, order-independent, typo-tolerant */
function sameSet(A, B) {
  if (A.length !== B.length) return false;
  const used = new Array(B.length).fill(false);
  for (const a of A) {
    let hit = -1;
    for (let j = 0; j < B.length; j++) if (!used[j] && sameOpt(a, B[j])) { hit = j; break; }
    if (hit < 0) return false;
    used[hit] = true;
  }
  return true;
}
module.exports = { base, tight, words, lev, sameOpt, sameSet };
