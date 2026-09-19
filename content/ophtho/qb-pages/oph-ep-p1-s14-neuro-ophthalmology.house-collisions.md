# Section 14 (Neuro-ophthalmology) — endpoint vs House collisions

Measured 2026-09-19 with `tools/bank-harness/sweep-oph-staged.js` against the live `questions.ophtho.ep.js`
(313 entries) and `questions.ophtho.js` (1,598 entries). Stem arm = bigram Dice, option arm = whole
option-set Dice; every hit below was read off the sweep output and, for the borderline ones, off the two
printed stems. Numbers are array row `n` (position-numbered: n1 = unmarked p.1014 / marked p.1015 ...
n26 = p.1064 / p.1065), with the unmarked page in brackets.

No cross-bank fold is done now. At the end of the ophthalmology endpoint stream, each row listed under
"Same question" gets `alsoIn` extended with the other bank on the surviving entry (a question may belong
to several banks); nothing is written to a House entry until then.

## Within-bank folds

- n18 [p.1048] is an exact reprint of live `ophep-squint-10` (section 15, p.1094): stem 1.000, options 1.000
  including the duplicated "Left abducent palsy" in A and D, same key (A), neither printing has a box.
  Folded at drafting (`folded: [18]` in `sec-oph.js` row 14); the section 15 entry stays as the survivor.
  Pending, not done here: add "the same question is printed again on p.1048" to that entry's `source`
  (a live-entry edit, same as the section 11 fold into `ophep-cornea-16`, which was left untouched).
- The same question is printed in the House bank as `opmcq-c14-5` (stem 0.788, options 0.857, same key;
  House prints options A and D only); that `alsoIn` merge belongs to the surviving `ophep-squint-10`.

## Same question printed in the House bank (merge at the end, add the bank to `alsoIn`)

- n12 [p.1036] = `opmcq-c14-19` (stem 0.824, same key text "Elevated intracranial pressure"; House option set differs: Intracranial tumor / Elevated intracranial pressure / Myasthenia gravis / Multiple sclerosis).
- n16 [p.1044] = `opmcq-c14-17` (stem 0.720, options 1.000, same key).
- n17 [p.1046] = `opmcq-c14-9` (stem 0.939, options 0.889, same key; House adds a fifth option "None of the above").
- n19 [p.1050] = `opmcq-c14-3` (stem 0.847, options 1.000, same key).
- n20 [p.1052] = `opmcq-c14-23` (stem 0.585, options 1.000, same key).
- n21 [p.1054] = `opqb-t27-17` (stem 0.974, options 1.000, same key).
- n22 [p.1056] = `opqb-t27-22` (stem 1.000, options 1.000, same key).
- n23 [p.1058] = `opqb-t27-21` (stem 1.000, options 1.000, same key).
- n24 [p.1060] = `opqb-t27-23` (stem 1.000, options 1.000, same key).
- n25 [p.1062] = `opqb-t27-24` (stem 1.000, options 1.000, same key).
- n26 [p.1064] = `opqb-t14-585` (stem 0.943, options 1.000, same key).

## Pairs, not the same question (shared option menu or mirrored vignette; nothing to merge)

- n5 [p.1022] "A left optic tract lesion..." (key Right homonymous hemianopia) and House `opqb-t14-599`
  "A right optic tract lesion..." (key Left homonymous hemianopia): mirror questions, opposite keys.
- n8 [p.1028] (60-year-old, ptosis, miosis, enophthalmos, key MRI thorax) and House `opmcq-c14-24`
  (39-year-old male, unilateral miosis, lid drooping, apparent enophthalmos; same key text, options in a
  different order): different vignette and stem (stem 0.089).
- n11 [p.1034] and n15 [p.1042] share an option menu (papilloedema / AION); different stems and keys.
- n16 [p.1044] and n17 [p.1046] share a menu (Horner / Argyll-Robertson / ...); different questions.
- n1 [p.1014] shares an option menu with live `ophep-glaucoma-9` and House `opqb-t26-30` (key differs).
- n6 [p.1024] shares a menu with live `ophep-cornea-10` and House `opqb-t1-48` (keys differ).
- n9 [p.1030] shares a menu with House `opqb-t22-1` (key differs).
- n21 [p.1054] vs live `ophep-uveal-tract-23`: stem 0.761, options 0.000, keys differ — different question.

## No House counterpart

- n2, n3, n4, n7, n10, n13, n14: no candidate above threshold, or only a shared-menu pair listed above.
