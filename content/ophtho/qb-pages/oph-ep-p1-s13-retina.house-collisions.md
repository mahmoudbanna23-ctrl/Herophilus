# Section 13 (Retina) — endpoint vs House collisions

Measured 2026-09-20 with `tools/bank-harness/sweep-oph-staged.js` against the live `questions.ophtho.ep.js`
(354 entries) and `questions.ophtho.js` (1,598 entries). Stem arm = bigram Dice, option arm = whole
option-set Dice. The four borderline pairs (n4, n14, n20, n34) were then compared on the rendered page
images of both banks, by a subagent; every other hit was read off the sweep output. Numbers are array row `n`
(position-numbered: n1 = unmarked p.900 / marked p.901 ... n41 = p.980 / p.981), with the unmarked page in
brackets. The sweep prints the book's own question numbers, which run one behind `n` from n28 on (the book
prints 27 twice); every row below has been converted back to `n` by page.

No cross-bank fold is done now. At the end of the ophthalmology endpoint stream, each row listed under
"Same question" gets `alsoIn` extended with the other bank on the surviving entry (a question may belong
to several banks); nothing is written to a House entry until then.

## Within-bank folds

- n16 [p.930] is an exact reprint of n10 [p.918]: stem 1.000, same four options in the same order (one
  glyph differs, capital I for lower-case l in an option), same key (Pneumatic retinopexy). n10 prints a box, n16
  none. Folded at drafting (`folded: [16]` in `sec-oph.js` row 13); `ophep-retina-10` is the survivor and
  `ophep-retina-16` is never created. Its House counterpart is the one listed for n10 below.

## Same question printed in the House bank (merge at the end, add the bank to `alsoIn`)

- n9 [p.916] = `opmcq-c13-17` (stem 1.000, options 1.000, same key; House prints it twice, at MCQ pp.12 and 88).
- n10 [p.918] = `opmcq-c13-4` (stem 1.000, options 1.000, same key). n16's copy matches the same entry.
- n11 [p.920] = `opmcq-c13-7` (stem 1.000, options 1.000, same key).
- n12 [p.922] = `opmcq-c19-10` (stem 1.000, options 1.000, same key).
- n13 [p.924] = `opmcq-c13-10` (stem 1.000, options 1.000, same key).
- n14 [p.926] = `opmcq-c13-12` (stem 1.000; House adds a fifth option "None of the above", so options 0.667;
  same key, option B). Checked on the page images: the stem is word for word identical and both banks print
  option B as "CVRO" (the same page of House prints "CRVO" in Q5 and Q10, so "CVRO" is a real printed variant).
  The sweep called the key different only because the House entry stores the key text as "CRVO".
- n15 [p.928] = `opmcq-c13-5` (stem 1.000, options 1.000, same key).
- n17 [p.932] = `opmcq-c13-25` (stem 1.000, options 1.000, same key).
- n18 [p.934] = `opmcq-c13-18` (stem 1.000, options 1.000, same key).
- n19 [p.936] = `opmcq-c13-8` (stem 1.000, options 1.000, same key).
- n24 [p.946] = `opqb-t27-10` (stem 0.961, options 0.750; the key text is stored there as "B CRAO", the same answer). One
  option differs; read both printings before merging.
- n25 [p.948] = `opqb-t27-11` (options 1.000, same key; the House printing is the chained follow-up, so its stem
  scores only 0.256).
- n26 [p.950] = `opqb-t27-12` (stem 0.982, options 1.000, same key).
- n27 [p.952] = `opqb-t27-13` (stem 1.000, options 1.000, same key).
- n35 [p.968] = `opqb-t13-547` (stem 1.000, options 1.000, same key).
- n36 [p.970] = `opqb-t13-566` (stem 0.906, options 1.000, same key).

## Pairs, not the same question (shared option menu or mirrored stem; nothing to merge)

- n4 [p.906] and House `opqb-t13-531` (QB p.83, key p.91): the stem is the same question reworded
  ("...symptoms of a rhegmatogenous retinal detachment EXCEPT"), three options are shared (Photopsia, Floaters,
  Field defect), and the fourth differs: Night blindness in the endpoint (key), Sudden pain in the House (key). The
  two keys are different options, so this is a pair, not a fold. The endpoint's own figure (a lecture slide)
  is printed on the answer page only.
- n20 [p.938] and House `opqb-t11-454` (QB p.71, key p.77): different questions. The endpoint asks a 52-year-old with
  sudden complete vision loss and headaches worse on chewing (key CRAO, options CRAO / CRVO / BRAO / BRVO / open
  angle glaucoma); the House asks "100 days' glaucoma is seen in" (key CRVO, four occlusion names). Only the
  occlusion names coincide. The same House entry also overlaps n38 [p.974] in options only (stem 0.000, keys differ).
- n34 [p.966] and House `opqb-t13-514` (QB p.82, key p.90, box printed): the same topic, a different question. The endpoint
  asks what characterises the presentation of CRVO (key: gradual loss of vision with masses of dot hemorrhages);
  the House asks "all of these EXCEPT" (key: Cherry red spot). No shared option text.
- n36 [p.970] and House `opqb-t13-562`: options 0.750, same key text, stem 0.033. A different question
  on the same topic.
- n9 [p.916] and n12 [p.922] share an exact four-option menu (tractional / exudative / rhegmatogenous / ...) with
  different stems and different keys; each has its own House counterpart above. `ophep-retina-12` points at
  `ophep-retina-9`.
- n13 [p.924] and n15 [p.928] share four of five options; n14 [p.926] and n18 [p.934] share three of four. Different
  stems and keys.
- n24 [p.946] and n25 [p.948] are one vignette asked twice (diagnosis, then treatment). n31 [p.960] and n32 [p.962] are the dry and wet
  age-related macular degeneration statements (stem 0.600, keys differ).
- n11 [p.920] and live `ophep-optics-refraction-10` (endpoint p.178): stem 0.783, options 0.000, keys differ; a
  different question.
- n24 [p.946] also shares options with House `opqb-t1-64` (options 0.750, stem 0.000, same key text); different question.

## No House counterpart

- n1, n2, n3, n5, n6, n7, n8, n21, n22, n23, n28, n29, n30, n31, n32, n33, n37, n39, n40, n41: no candidate above threshold, or
  only one of the pairs listed above.
