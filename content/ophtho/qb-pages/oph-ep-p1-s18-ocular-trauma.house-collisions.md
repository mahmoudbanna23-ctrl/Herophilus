# Section 18 (Ocular Trauma) — endpoint vs House collisions

Measured 2026-09-19 with a stem/option Jaccard sweep (stem and greedy best-match option arm) of the 20 staged
questions against the live `questions.ophtho.ep.js` and `questions.ophtho.js`. Every hit below was read by hand
against the staged text and the live entry. The array numbers questions by position (n = 1..20) because the book
prints the numbers 11 and 12 twice; the printed number and the unmarked page are given in brackets.

No cross-bank fold is done now. At the end of the ophthalmology endpoint stream, each row under "Same question in the
House bank" gets `alsoIn` extended with the other bank on the surviving entry (a question may belong to several banks);
nothing is written to a House entry until then.

## Within-bank folds (endpoint vs live endpoint) — 4, dropped at drafting, `folded: [3, 4, 9, 17]`

Each is an exact cross-chapter reprint of a live endpoint entry: stem 1.00, option menu identical, same key. None takes `alsoIn`.

- n3 [printed 3, p.1209] = live `ophep-cornea-4` (Corneal blood staining; key Total hyphema with prolonged rise in IOP).
- n4 [printed 4, p.1211] = live `ophep-orbit-4` (left enophthalmos after a punch; key Infraorbital).
- n9 [printed 9, p.1221] = live `ophep-lens-10` (imprinting of the iris on the anterior lens capsule; key Vossius ring).
- n17 [printed 15, p.1237] = live `ophep-cornea-15` (grade of chemical eye injury; the printed options differ only in
  "Grade4" vs "Grade 4"; key Grade 3).

Left as PAIRS, not folds (a shared vignette or a near menu, different question or key):

- n11 [printed 11a, p.1225, diagnosis] / n12 [printed 11b, p.1227, definitive treatment] / n13 [printed 12a, p.1229,
  diagnosis] / n14 [printed 12b, p.1231, source of the bleeding]: the book prints 11 and 12 twice. Each pair shares a vignette
  and asks a different question with its own options and key.
- n11 and n13: three of the four options are the same (Orbital floor fracture, Retrobulbar hemorrhage, Hypopyon); the third
  option and the vignette differ.
- n8 and n10: same question, different option list (both key Removal). n2 and n16: acid vs alkali, different questions.
- n1 [MRI not useful], n5 [best investigation, CT orbit], n15 [MRI contraindicated]: three different questions on foreign-body imaging.

## Same question printed in the House bank (merge at the end, add the bank to `alsoIn`)

- n1 [p.1205] = `opqb-t18-717` (stem 1.00, options 1.00, same key: MRI).
- n11 [p.1225] = `opmcq-c18-5` (stem 1.00, options 1.00 apart from the House fifth option "None of the above", same key:
  Retrobulbar hemorrhage). `opmcq-c18-6` (imaging before treatment) is a sibling on the same vignette with no endpoint counterpart.
- n12 [p.1227] ~ `opmcq-c18-8` (stem 0.67, options 0.92: House adds "None of the above" and spells "cantholysis"; same key:
  Lateral canthotomy, cantholysis and medical management). Do not merge n12 into `opmcq-c18-5`.
- n13 [p.1229] = `opmcq-c18-9` (stem 1.00, options 1.00 apart from the House fifth option "None of the above", same key:
  Traumatic hyphema).
- n15 [p.1233] = `opmcq-c18-17` (stem 1.00, options 1.00, same key: MRI).
- n16 [p.1235] = `opmcq-c18-21` (stem 1.00, options 1.00, same key: Injury to eye by sodium hydroxide). Related but not the same
  question: live `ophep-sclera-10` and House `opmcq-c7-14` share a stem fragment (0.78) and key a different option.
- n17 [p.1237] = `opmcq-c18-15` (stem 1.00, options 0.75 from the "Grade4" spacing; same key). It is folded into live
  `ophep-cornea-15`, which is the entry that takes `alsoIn`.
- n18 [p.1239] = `opqb-t27-25` (stem 1.00, options 1.00, same key).
- n19 [p.1241] ~ `opqb-t27-26` (stem 0.98, options 0.96, same key).
- n20 [p.1243] = `opqb-t27-27` (stem 1.00, options 1.00, same key).

The four folded questions n3, n4, n9 and n17 also have live-bank counterparts only; only n17 has a House match
(`opmcq-c18-15`), listed above.

No House match at stem >= 0.55: n2, n5, n6, n7, n8, n10, n14.
