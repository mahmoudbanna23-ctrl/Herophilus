# Section 14 — chapter rulings

Binding for every drafting half of peds endpoint part 2 section 14, "Model Final Exam 3",
pp.1595–1756, 80 staged questions of which **53 are adjudicated reprints that are NOT drafted** and
**27 are drafted**. Measured against `app\data\modules.js` (the pediatrics chapter table read in
full) and against the staged verbatim text of all 27 — stem, options and printed key — in
`endpoint-p2-s14-mfe3.array.js`.

⚠️ **Written AFTER staging, deliberately.** A body section is one topic and can be ruled before a
page is opened; a model exam is mixed by construction, so the ruling can only be made once the
questions exist.

Read with `endpoint-p2-s14-reprint-map.md` (the count, the 53 reprints and what the pass wrote),
`endpoint-p2-s14-fold-adjudication-A/B/C.md` (why most of the 53 are reprints) and
`endpoint-p2-s14-late-reprint-rulings.md` (the four that no adjudication ever ruled on, and the rule
that came out of them).

## How these rulings were made

Not from the topic name. Every ruling below was set by **measuring where the live corpus already
puts that exact topic** — `questions.peds.ep2.js` (588) first, then `questions.peds.ep.js` (704),
then `questions.peds.js` (393) — and following it. Where the corpus was silent the chapter was
chosen from `modules.js` and the choice is argued in "Rulings that are not obvious" below.

**Three of the rulings carried in from the earlier pass were changed or re-grounded by measuring
them.** They are recorded here rather than quietly corrected, because in each case the carried note
made a claim about the corpus that the corpus does not support:

- **n29 — the carried note said "no real precedent; ruled on the AKI triad".** There is a precedent
  and it is unanimous: **seven live HUS entries, all `renal`** (`pedep2-mf2-65` among them, and
  House's own). The ruling does not change; its grounds do. It was never a judgement call.
- **n74 — the carried note claimed a "precedent split infection-bact 3 / renal 2 / cardiac-acq 1".**
  That split is not reproducible. Grepping the corpus for antistreptolysin/ASOT returns **exactly
  one** entry, `pedep2-ren-27`, and there ASOT is a normal-value line inside a nephrotic vignette,
  not the subject of the question. The ruling still lands on `infection-bact`, argued below, but on
  a different footing.
- **n34 — the carried note ruled `endocrine`, and the corpus agrees**, but the measurement also
  found how close its pair is. See "n34 and `pedep2-end-11`" below; the divergence is one swapped
  option and a moved key, and the drafting half must be told exactly which.

Two further measurements set a ruling that the topic name would have set differently:

- **CAH goes to `endo-thyroid`, not `endocrine`.** The chapter is "Thyroid and adrenal disorders"
  and the corpus is decisive — **13 live entries** naming congenital adrenal hyperplasia are
  `endo-thyroid` against 8 `growth-puberty` (ambiguous-genitalia entries about virilisation) and 4
  `puberty`. n17's key is CAH and its vignette is the salt-losing crisis, so it goes where the other
  thirteen are.
- **Diabetes itself goes to `endocrine`, and it is a different chapter from CAH.** Fourteen live
  type-1-diabetes entries are `endocrine`. `endo-dka` exists and takes only the entries whose
  subject is ketoacidosis; none of n27, n34, n47 or n78 is one.

## The split, measured

**Thirteen chapters carry the 27.** No chapter takes more than four:

| chapter | n values | count |
|---|---|---|
| `renal` | 3, 29, 50, 60 | 4 |
| `endocrine` | 27, 34, 47, 78 | 4 |
| `haematology` | 1, 55, 63 | 3 |
| `haem-bleeding` | 10, 26, 48 | 3 |
| `neurological` | 35, 75, 79 | 3 |
| `cardiac` | 2, 66 | 2 |
| `renal-cakut` | 64, 73 | 2 |
| `endo-thyroid` | 17 | 1 |
| `cardiac-acq` | 44 | 1 |
| `neuro-cp` | 53 | 1 |
| `neuro-nm` | 68 | 1 |
| `liver-hep` | 67 | 1 |
| `infection-bact` | 74 | 1 |

27 total. Every one of the thirteen is a chapter `questions.peds.ep2.js` already uses, so this
section introduces no new chapter to the file.

## The ruling, entry by entry

Half A is n1–n50 (14 entries), half B is n53–n79 (13). The `n` values are the staged ones in
`endpoint-p2-s14-mfe3.array.js`; the drafted id is `pedep2-mf3-<n>`.

### Half A

| n | p. | chapter | why |
|---|---|---|---|
| 1 | 1597 | `haematology` | microcytic anaemia keyed iron deficiency; **35 live iron-deficiency entries are `haematology`**. ⚠️ Pairs with `pedep2-hem-38` — see the pairs section |
| 2 | 1599 | `cardiac` | pan-systolic murmur at the lower left sternal edge keyed VSD; 33 live VSD entries are `cardiac` |
| 3 | 1601 | `renal` | steroid-responsive nephrotic syndrome; **26 live nephrotic entries are `renal`**, and the key (normal complements) is the steroid-sensitivity discriminator |
| 10 | 1615 | `haem-bleeding` | ITP after a viral URTI, isolated thrombocytopenia with a normal clotting screen; **30 live ITP entries are `haem-bleeding`**. ⚠️ Cross-**bank** near-twin `pedhd-haem-22` — draft it, and it goes to the end-of-stream cross-bank sweep |
| 17 | 1629 | `endo-thyroid` | salt-losing congenital adrenal hyperplasia, per the measurement above. ⚠️ Shares its whole option menu with `pedep2-end-6` — see the pairs section |
| 26 | 1647 | `haem-bleeding` | haemarthrosis with prolonged APTT and normal PT keyed haemophilia; **26 live haemophilia entries are `haem-bleeding`** |
| 27 | 1649 | `endocrine` | new presentation of type 1 diabetes, well, no acidosis — the key is subcutaneous insulin. **Not `endo-dka`**: the DKA distractors (IV saline, IV bicarbonate) are precisely what is being excluded |
| 29 | 1653 | `renal` | the HUS triad after bloody diarrhoea; **7 live HUS entries, all `renal`**. It straddles `haematology` (fragmented RBCs, thrombocytopenia) and that belongs in the explanation, not in the chapter |
| 34 | 1663 | `endocrine` | hypoglycaemia in a known type 1 diabetic, conscious, keyed oral glucose. ⚠️ **The closest pair in the section** — see "n34 and `pedep2-end-11`" |
| 35 | 1665 | `neurological` | generalised tonic-clonic seizure with post-ictal unawareness; **22 live tonic-clonic entries are `neurological`**. ⚠️ Shares its five-item menu with `pedep2-mf1-48` |
| 44 | 1683 | `cardiac-acq` | SVT in a shocked child keyed DC cardioversion; the live SVT entries split `cardiac-acq` 3 / `cardiac` 1, and `cardiac-acq` ("Acquired heart disease and arrhythmia") is where the arrhythmia teaching sits |
| 47 | 1689 | `endocrine` | acanthosis nigricans keyed insulin resistance. ⚠️ **No precedent at all** — grepping the whole corpus for acanthosis or insulin resistance returns zero. Ruled from `modules.js`: the key is a metabolic-endocrine finding, and obesity/PCOS/type 2 diabetes are all distractors the key deliberately outranks |
| 48 | 1691 | `haem-bleeding` | bleeding with an isolated prolonged PT, keyed malabsorption (fat-soluble vitamin K); **16 live prolonged-PT entries are `haem-bleeding`**. **Not `nutrition-vit`** — 4 entries there, and all four are about vitamin deficiency as the subject, whereas here the subject is the coagulation screen |
| 50 | 1695 | `renal` | serum creatinine as the most specific measure of kidney function. ⚠️ **No precedent** — no live entry asks this. `renal` is the general chapter; `renal-cakut` and `renal-uti` are both narrower than a question about assessing renal function at all |

### Half B

| n | p. | chapter | why |
|---|---|---|---|
| 53 | 1701 | `neuro-cp` | spastic diplegia from periventricular damage in the preterm; **10 live diplegia entries are `neuro-cp`** against 7 `dev-problems`, and the `dev-problems` ones are about the developmental consequence, not the lesion |
| 55 | 1705 | `haematology` | parvovirus B19 aplastic crisis in sickle cell disease. **Not `infection-rash`** — 12 parvovirus entries sit there, but they are slapped-cheek/fifth-disease questions; the one live aplastic-crisis entry, `pedep2-hem-65`, is `haematology`, and the subject here is the haemolytic anaemia, not the exanthem. ⚠️ Pairs with `pedep2-hem-65` |
| 60 | 1715 | `renal` | casts on urinalysis supporting glomerulonephritis; **26 live glomerulonephritis entries are `renal`**. **Not `renal-uti`** — leukocyte esterase, WCC and bacteria are the UTI distractors being excluded |
| 63 | 1721 | `haematology` | serum ferritin as the next step in microcytic anaemia; **8 live ferritin entries, all `haematology`**. Pairs thematically with n1 — same disease, different step |
| 64 | 1723 | `renal-cakut` | bilateral hydroureter and hydronephrosis keyed posterior urethral valve; **7 live PUV entries, all `renal-cakut`** ("CAKUT, stones and enuresis"). **Four options, not five** |
| 66 | 1727 | `cardiac` | shock in the first week keyed coarctation — duct-dependent systemic circulation; **41 live coarctation entries are `cardiac`**. **Not `cardiac-cyan`**: coarctation shock is not a cyanotic lesion, and the 9 `cardiac-cyan` hits are Fallot entries that merely mention it |
| 67 | 1729 | `liver-hep` | defective long-chain fat absorption in chronic liver disease; **5 live chronic-liver-disease entries are `liver-hep`** against 1 `liver`. **Not a nutrition chapter** — the deficiency is a consequence of the liver disease, which is what the question tests |
| 68 | 1731 | `neuro-nm` | EMG as the acute investigation in Guillain–Barré; **7 live GBS entries are `neuro-nm`** ("Neuromuscular disorders") |
| 73 | 1741 | `renal-cakut` | initial management of an antenatally detected urinary tract anomaly, keyed prophylactic antibiotics; **7 live antenatal-anomaly entries are `renal-cakut`**. **Four options, not five** |
| 74 | 1743 | `infection-bact` | ASOT is specific for **recent group A streptococcal infection**, and the three distractors are its sequelae — rheumatic fever, rheumatic heart disease, acute glomerulonephritis. ⚠️ **Ruled against a thin corpus, argued below.** **Four options, not five** |
| 75 | 1745 | `neurological` | principles of antiepileptic drug use, keyed monotherapy; the live AED-principle entries `pedep2-neu-28` and `pedep2-neu-32` are both `neurological`. ⚠️ It is a third sibling of those two — see the pairs section |
| 78 | 1751 | `endocrine` | aetiology of type 1 diabetes, keyed autoimmune beta-cell destruction; **14 live type-1 entries are `endocrine`** |
| 79 | 1753 | `neurological` | the definition of a seizure. ⚠️ **No precedent** — no live entry defines the term. `neurological` is where all 22 seizure-type entries sit |

## Rulings that are not obvious

### n74 — `infection-bact`, ruled against a corpus that is almost silent

The carried note claimed a precedent split of `infection-bact` 3 / `renal` 2 / `cardiac-acq` 1. That
is not what the corpus holds. **Exactly one live entry anywhere mentions antistreptolysin O**, and
it is `pedep2-ren-27`, where "ASOT 200 (normal)" is one line of a lab panel in a nephrotic-syndrome
vignette — it is not a question about the test.

Widening to every entry naming a streptococcus at all returns 53, spread over eleven chapters:
`renal` 11 (post-streptococcal glomerulonephritis), `neonatal-sepsis` 7 (group B strep),
`infection-bact` 6, `infection` 5, `cardiac-acq` 5 (rheumatic fever), `resp-pneumonia` 4,
`infection-rash` 4, and four others. **That spread is the sequelae, not the organism** — every one of
those chapters holds the disease the strep caused.

n74 is the one question in this corpus whose subject is the serology itself, and its three
distractors are exactly those sequelae chapters: rheumatic fever (`cardiac-acq`), rheumatic heart
disease (`cardiac-acq`), acute glomerulonephritis (`renal`). Filing it in any of them would file it
under an answer the key excludes. `pedep2-res-1` — sore throat, group A strep, `infection-bact` — is
the closest live entry by subject, and `infection-bact` is where the organism itself is taught.

### n34 and `pedep2-end-11` — a pair, and the divergence the drafting half must carry

`pedep2-end-11` is the same clinical event: a 5-year-old girl with type 1 diabetes diagnosed two
months ago, playing in the garden, suddenly aggressive and pale, hypoglycaemic, keyed **Oral glucose
drink** — the same key text in both. This was ruled a pair rather than a fold, and the ruling stands,
but it stands on a single discriminating token and the drafting half must be told which:

- **The option sets differ by one member.** `pedep2-end-11` prints two saline options ("Intravenous
  infusion of normal saline (0.9%)" and "Fluid resuscitation with normal saline (0.9%)"). n34 drops
  the second and prints **"Intramuscular (IM) glucagon"** in its place. That is not a dropped filler;
  it is the option that makes n34 test conscious-versus-unconscious management, which
  `pedep2-end-11` does not test at all.
- **The key has moved.** It is option D (index 3) in n34 and option A (index 0) in `pedep2-end-11`.
- The stem differs too — n34 drops the girl's name and the basal-bolus regimen, adds "aggressive
  toward her brother", and prints the glucose as 50 mg/dL where `pedep2-end-11` prints 3 mmol/L.

The rule this is decided under is the standing one: **a shared option menu pairs questions, never
folds them — name the discriminating token or you matched a template.** The token here is IM
glucagon. n34's explanation must earn its place by explaining why oral glucose beats IM glucagon in
a **conscious** child, and must not simply restate `pedep2-end-11`.

### n17 and `pedep2-end-6` — the same menu, a different baby

`pedep2-end-6` prints n17's five options in n17's order with n17's key (Congenital adrenal
hyperplasia, index 1). The vignettes are not the same question: n17 is a **7-day-old** with
**abnormal genitalia**, a weight drop 3200 g → 2750 g, glucose 40 mg/dL, Na 124, K 6;
`pedep2-end-6` is a **2-week-old** with a negative infection screen, Na 112, K 6.8, glucose
1.7 mmol/L and no genital finding. Different age, different numbers, different presenting sign — a
shared menu, so a pair.

A third member of the family exists: `pedep2-mf2-34` (2-week-old, hypotonia and ambiguous genitalia,
`endo-thyroid`), and House carries `pedhd-endo-6` and the `pedhd-endo-9..12` run. **Nothing folds
across banks**; those go to the end-of-stream sweep.

### n75 and the two live AED-principle entries

n75 is a **third** printing of the "what is true about antiepileptic drugs" question, and the other
two are already live: `pedep2-neu-28` ("Which of the following is true about antiepileptic drugs
(AEDs)?", key *All AEDs have side effects*) and `pedep2-neu-32` ("…about antiepileptic drug
treatment?", key *Not all cases need treatment*). Both print **four** options; n75 prints **five**,
shares no option text with either, and its key — *Monotherapy to prevent seizures is the goal* — is a
third distinct proposition. Three questions from one teaching point, each keyed on a different
principle. Draft it, name both siblings, and do not let the three explanations repeat each other.

### n55 and `pedep2-hem-65`

Same disease and same underlying fact, different question. `pedep2-hem-65` asks the most common
**cause** of aplastic crisis in sickle cell disease and offers dehydration, RSV, human parvovirus
B19, repeated transfusion and *Haemophilus* septicaemia. n55 asks which **virus** does it and offers
roseola, parvovirus B19, coxsackie A16, echovirus 11 and CMV — a wholly different menu, all five of
them viruses, and the key sits at index 1 rather than 2. A pair, not a fold.

### n1 and `pedep2-hem-38`

`pedep2-hem-38` is an 11-month-old cow's-milk weaning case with Hb 7.8 and MCV 69 and **four**
options; n1 is a 12-year-old with fatigue and poor concentration, MCV 69, and **five** — the same
four plus "Folate deficiency". Same key text, same key index. Different age, different mechanism
being pointed at, different option count. A pair.

## What every drafting half must carry

- **All 27 print an explanation box.** Measured from the staging: every one of the 27 has a non-empty
  `expl`, 11–49 words. The boxed shape and its contract apply throughout; **no entry here takes the
  "Written for this bank" marker**, because none of them is boxless.
- **No entry here takes an `image` field.** Measured: the section stages no `image`, no `box` row and
  no `straddle` on any of its 80 rows, let alone these 27. An `image` field is a hard failure.
- **Three of the 27 print four options, not five** — **n64, n73, n74**. Do not pad them to five.
- Options are named **by letter (0→A … 4→E) or by their text, never by index**.
- Theory anchors are cited. A gap in the material is **answered and tagged**
  `not taken from the course material`, never declared.
- The staging-part gate is **`check-part-ep.js`**. `check-part-ep2.js` does not exist.

## What this file does NOT settle

- **The 53 reprints.** They are not drafted and take no chapter. They are already cited; see
  `endpoint-p2-s14-reprint-map.md`.
- **The cross-bank overlaps.** `pedhd-haem-22` (n10), the `pedhd-endo-6/9..12` family (n17, n34) and
  the House printings of the AED pair (n75). **Nothing folds across banks.** They go to the
  end-of-stream sweep for an `alsoIn` on the House side.
