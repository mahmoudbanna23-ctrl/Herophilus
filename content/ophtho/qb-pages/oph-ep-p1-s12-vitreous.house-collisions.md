# Section 12 (Vitreous) — endpoint vs House collisions

Measured 2026-09-19 with `tools/bank-harness/sweep-oph-staged.js` against the live `questions.ophtho.ep.js`
(302 entries) and `questions.ophtho.js` (1,598 entries). Stem arm = bigram Dice, option arm = whole
option-set Dice; every hit below was read off the sweep output. Numbers are array row `n` (position-numbered:
n1 = unmarked p.858 / marked p.859 ... n11 = p.878 / p.879), with the marked page in brackets.

No cross-bank fold is done now. At the end of the ophthalmology endpoint stream, each row listed under
"Same question" gets `alsoIn` extended with the other bank on the surviving entry (a question may belong
to several banks); nothing is written to a House entry until then.

## Within-bank folds

None. The sweep found no endpoint reprint of any of the 11 questions: the endpoint hits are different
questions that share an option menu (see pairs below).

## Same question printed in the House bank (merge at the end, add the bank to `alsoIn`)

- n4 [p.865] = `opmcq-c12-7` (stem 1.000, options 1.000, same key). House prints four options only.
- n5 [p.867] = `opmcq-c12-1` (stem 1.000, options 0.889, same key).
- n6 [p.869] = `opmcq-c12-4` (stem 0.955, options 0.889, same key).
- n7 [p.871] = `opmcq-c12-16` (stem 1.000, options 0.667, same key).
- n8 [p.873] = `opmcq-c12-17` (stem 1.000, options 0.889, same key).
- n9 [p.875] = `opmcq-c12-15` (stem 1.000, options 1.000, same key).
- n10 [p.877] = `opmcq-c12-10` (stem 1.000, options 0.889, same key).

## No House counterpart

- n1 [p.859], n3 [p.863], n11 [p.879]: no candidate above threshold (best stem 0.364 / 0.278 / 0.212).
- n2 [p.861]: option menu overlaps `opmcq-c2-5` and `opqb-t21-17` (options 0.750) and endpoint
  `ophep-optics-refraction-14`, stems 0.000-0.235, different keys ("Hyperopia" / "Myopia" against
  "High myopia") — different question, never a fold.

## Pairs only (shared option menu or shared negative-stem template, different question — never a fold)

- n7 [p.871] vs n8 [p.873]: both "NOT true regarding ..." stems (0.700), options 0.000, different keys — two questions.
- n5 [p.867] vs n6 [p.869]: option menu overlap 0.750, stem 0.176 — two questions.
- n7 [p.871] vs live `ophep-uveal-tract-17`, n8 [p.873] vs live `ophep-uveal-tract-17` and `ophep-optics-refraction-20`:
  negative-stem template only (options 0.000).
