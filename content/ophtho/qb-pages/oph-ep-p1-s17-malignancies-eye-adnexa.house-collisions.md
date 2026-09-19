# Section 17 (Malignancies of Eye and Adnexa) — endpoint vs House collisions

Measured 2026-09-19 with a stem/option Jaccard sweep (stem and greedy best-match option arm) of the 12 staged
questions against the live `questions.ophtho.ep.js` and `questions.ophtho.js`. Every hit below was read by hand
against the staged text and the live House entry. Numbers are the printed question number `n`, with the
unmarked page in brackets.

No cross-bank fold is done now. At the end of the ophthalmology endpoint stream, each row under "Same question"
gets `alsoIn` extended with the other bank on the surviving entry (a question may belong to several banks);
nothing is written to a House entry until then.

## Within-bank folds

None. No stem >= 0.55 match against the live endpoint bank was a real repeat (`ophep-exam-eye-31` and
`ophep-conjunctiva-23` hit only on generic "most common ... of the eyelid" wording, options 0.00).
Inside the section, three pairs are PAIRS, not folds:

- n7 [p.1170] adult / n9 [p.1174] pediatric: same "most common primary intraocular malignancy" frame, different
  age group, different key (n7 = Choroidal melanoma, n9 = Retinoblastoma).
- n2 [p.1160] and n10 [p.1176]: both ask the most common eyelid malignancy and both key Basal cell carcinoma,
  but the option menus differ (n2 has Malignant melanoma, no Retinoblastoma; n10 is the House five-option menu
  with Retinoblastoma and Choroidal melanoma) and the key letter moves. Kept as two entries; n10 must point at n2
  in its explanation or vice versa (shared-menu rule).
- n11 [p.1178] squamous / n12 [p.1180] basal cell: different tumour, different key.

## Same question printed in the House bank (merge at the end, add the bank to `alsoIn`)

- n5 [p.1166] = `opmcq-c17-10` (stem 1.00, options 1.00, same key: Basal cell carcinoma).
- n6 [p.1168] = `opmcq-c17-8` (stem 1.00, options 1.00, same key).
- n7 [p.1170] = `opmcq-c17-14` (stem 1.00, options 1.00, same key: Choroidal melanoma). Note `opmcq-c17-15` shares the
  option menu, drops "primary" from the stem, and keys Secondaries: a PAIR with c17-14, do not merge n7 into c17-15.
- n8 [p.1172] = `opmcq-c16-5` (stem 1.00, options 1.00, same key: Retinoblastoma).
- n9 [p.1174] ~ `opmcq-c16-19` (stem 1.00; options 0.75, one distractor differs: endpoint Choroidal melanoma vs
  House Sebaceous carcinoma; same key Retinoblastoma). Same question, merge with the fuller printing and note the
  distractor difference.
- n10 [p.1176] = `opmcq-c17-3` (stem 1.00, options 1.00, same key: Basal cell carcinoma). Related: n2 [p.1160] reworded
  ("most common malignant tumor of the eyelid", four-option menu); House key index differs only because option order
  differs.
- n11 [p.1178] = `opmcq-c17-16` (stem 1.00, options 1.00, same key).
- n12 [p.1180] ~ `opmcq-c17-12` (stem 0.85; House adds a fifth option "None of the above"; same key: Nasal part of lower
  lid).

Not matched in House by the sweep: n1 [p.1158], n3 [p.1162], n4 [p.1164].
