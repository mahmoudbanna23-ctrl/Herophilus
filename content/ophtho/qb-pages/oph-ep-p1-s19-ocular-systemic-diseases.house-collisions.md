# Section 19 (Ocular Systemic Diseases) — endpoint vs House collisions

Measured 2026-09-20 with a stem/option Jaccard sweep of the 25 staged questions against the live
`questions.ophtho.ep.js` (354) and `questions.ophtho.js` (1,598). Every hit below was read by hand against the
staged text and the live entry. The array numbers questions by position (n = 1..25) because the book prints the
number 16 twice; the printed number and the unmarked page are given in brackets.

No cross-bank fold is done now. At the end of the ophthalmology endpoint stream, each row under "Same question in the
House bank" gets `alsoIn` extended with the other bank on the surviving entry; nothing is written to a House entry
until then.

## Within-bank folds (endpoint vs live endpoint) — 2, dropped at drafting, `folded: [2, 3]`

Each is an exact cross-chapter reprint of a live endpoint entry: stem 1.00, option menu identical, same key c. None takes `alsoIn`.

- n2 [printed 2, p.1284] = live `ophep-orbit-2` (most common cause of unilateral proptosis in an adult; key Thyroid eye disease).
- n3 [printed 3, p.1286] = live `ophep-eyelids-3` (thyroid eye disease manifestations EXCEPT; key Monocular diplopia due to extraocular muscle involvement).

Left as PAIRS, not folds:

- n16 [printed 16a, p.1312] and n23 [printed 22, p.1326] share the option list 20% / 50% / 60% / 80% but ask different questions
  (risk of diabetic retinopathy at the time of diagnosis of type 2 DM, key 20%; 10 years after diagnosis of type 1 DM, key 60%).
- n12 [printed 12, p.1304] shares the Grade 1-4 menu with live `ophep-cornea-15` (chemical injury grade); a different question (hypertensive retinopathy grade).
- n6 (treatment of macular edema), n19 and n24 (treatment of diabetic macular edema) overlap in topic and partly in options; each is a
  different stem; the validator's shared-menu rule decides the pointers at drafting.

## Same question in the House bank (`alsoIn` merges owed at the end of the stream) — 10 clean, 2 to decide

Stem match at or near 1.00; key identical unless stated.

- n16 [p.1312] = `opmcq-c19-16` (exact).
- n17 [p.1314] = `opmcq-c19-10` (exact).
- n18 [p.1316] = `opmcq-c19-7`. The printed stem here reads "prese11ts" (kept as printed); House has "presents". House carries a fifth option "None of the above".
- n19 [p.1318] = `opmcq-c19-12` (exact).
- n20 [p.1320] = `opmcq-c19-4`. The printed stem here reads "hemorhage" (kept as printed).
- n21 [p.1322] = `opmcq-c19-31`. Printed option C here is "AMO & glaucoma" (kept as printed); House has "AMD & glaucoma".
- n22 [p.1324] = `opmcq-c19-18`. House carries a fifth option "None of the above".
- n23 [p.1326] = `opmcq-c19-22` (exact).
- n24 [p.1328] = `opmcq-c19-14` (exact).
- n25 [p.1330] = `opmcq-c19-30`. Endpoint carries a fifth option "Optic atrophy" that House lacks; key Peripheral scotoma in both.

To decide (not clean):

- n1 [p.1282, key Epiphora] ~ `opqb-t28-5` ("Aging can cause all of the following except:", same four options reordered). **The KEYS DIFFER**:
  endpoint prints Epiphora, House prints Optic disc cupping (index 2). A defective key is noted, never disputed; the merge is
  the owner's call.
- n5 [p.1290, key BRVO] ~ `opmcq-c19-19` (same question, key BRVO in both; endpoint menu CRVO / BRVO / CRAO / diabetic macular edema, House menu CRAO / BRAO / CRVO / BRVO — one option differs).

Hits read and dismissed (a shared menu or topic only, different stem and different question): n10 vs `opmcq-c19-15` (thyroid eye disease
complication vs risk factor); n12 vs `opmcq-c19-5`, `-6`, `-38`, `opqb-t19-775`, `-778` and `opmcq-c19-11`/`-13` (hypertensive
retinopathy grades and management, other vignettes); n1 vs `opqb-t16-683` (retinoblastoma management, stem-word overlap only).
