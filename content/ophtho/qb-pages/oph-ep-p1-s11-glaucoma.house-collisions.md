# Section 11 (Glaucoma) — endpoint vs House collisions

Measured 2026-09-18 with `tools/bank-harness/sweep-oph-staged.js` against the live `questions.ophtho.ep.js`
(267 entries) and `questions.ophtho.js` (1,598 entries). Stem arm = bigram Dice, option arm = whole
option-set Dice; every hit below was compared on the page images / live entries by hand. Numbers are
array row `n` (position-numbered, see the array header), with the marked page in brackets.

No cross-bank fold is done now. At the end of the ophthalmology endpoint stream, each row listed under
"Same question" gets `alsoIn` extended with the other bank on the surviving entry (a question may belong
to several banks); nothing is written to a House entry until then.

## Within-bank folds (already decided, entered in `sec-oph.js` row 11)

- n14 [p.825] exact cross-chapter reprint of live `ophep-cornea-16` (stem 0.982, options 1.000, same key). Folded into the live entry.
- n18 [p.833] exact reprint of n12 [p.821]. Folded into n12.
- n19 [p.835] exact reprint of live `ophep-uveal-tract-9` (stem 1.000, options 1.000, same key). Folded into the live entry.

## Same question printed in the House bank (merge at the end, add the bank to `alsoIn`)

- n12 [p.821] = `opmcq-c11-4` (stem 1.000, options 1.000, same key).
- n15 [p.827] = `opmcq-c11-7` (stem 0.943, options 0.889, same key; House prints the stem with a stray apostrophe after "iris bombe").
- n16 [p.829] = `opmcq-c11-12` (stem 1.000, options 1.000, same key).
- n17 [p.831] = `opmcq-c11-23` (stem 1.000, options 0.889, same key; one option differs in wording).
- n20 [p.837] = `opmcq-c11-17` (stem 1.000, options 1.000, same key).
- Folded n14 also equals `opmcq-c10-21`, and folded n19 also equals `opmcq-c11-5`; those House ids belong on the surviving live endpoint entries (`ophep-cornea-16`, `ophep-uveal-tract-9`).

## Pairs only (shared option menu, different question — never a fold)

- n13 [p.823] vs `opmcq-c11-17`: stem 0.844. The endpoint stem carries an extra discriminating clause and n20 is the exact match, so n13 stays a separate question and n20 points at n13 in its explanation.
- n7 [p.811] vs `opmcq-c11-6`: same option-menu overlap (options 0.750), stem 0.348, different question.
- n2 [p.801] vs `opqb-t16-684`, n9 [p.815] vs `opqb-t26-30`, n10 [p.817] vs `opqb-t20-812`: options match, stems differ.
- n24 [p.845] shares an option menu with `ophep-lens-21` (options 1.000, stem 0.235, different key) — different question.

## Note on a live entry

`ophep-cornea-16` (section 8) carries a leaked question-number prefix "16. " at the start of its `stem`. Not touched here.
