# Section 13 — chapter rulings

Binding for every drafting half of peds endpoint part 2 section 13, "Model Final Exam 2",
pp.1434–1593, 80 staged questions of which **29 are adjudicated reprints that are NOT drafted** and
**51 are drafted**. Measured against `app\data\modules.js` (the pediatrics chapter table read in
full) and against the staged verbatim text of all 51 — stem, options and printed key — in
`endpoint-p2-s13-mfe2.array.js`.

⚠️ **Written AFTER staging, deliberately.** A body section is one topic and can be ruled before a
page is opened; a model exam is mixed by construction, so the ruling can only be made once the
questions exist. `endpoint-p2-s13-reprint-map.md` says the same thing under "What this file does
NOT settle".

Read with `endpoint-p2-s13-reprint-map.md` (the count, the parity flip at p.1531, the 29 reprints
and what the pass wrote) and `endpoint-p2-s13-fold-adjudication-A/B/C.md` (why each of the 29 is
one).

## How these rulings were made

Not from the topic name. Every ruling below was set by **measuring where the live corpus already
puts that exact topic** — `questions.peds.ep2.js` first, then `questions.peds.ep.js`, then
`questions.peds.js` — and following it. Where the corpus was silent the chapter was chosen from
`modules.js` and the choice is argued in "Rulings that are not obvious" below.

Five measurements changed a ruling I would otherwise have written from the topic name. The last of
them landed **after this file was first written**, and the file was corrected rather than left
standing — recorded here because the order matters: a clinical argument lost to a measurement.

- **Autism goes to `dev-problems`, not `dev-nd`.** `dev-nd` ("Autism and ADHD") exists and looks
  purpose-built, but it holds **5 entries, all House** (`pedhd-devp-1`, `-2`, `-18`). All **seven**
  autism entries in `questions.peds.ep2.js` are `dev-problems`. The endpoint bank's own convention
  wins; splitting n43 and n46 away from their seven neighbours would help nobody.
- **Malaria goes to `haematology`.** Both live malaria vignettes (`pedep2-hem-44`, `pedep2-hem-66`)
  are chaptered there, and so is House's `pedhd-haem-23`. It is filed as a cause of anaemia and
  haemolysis in this course, not under infection.
- **Epiglottitis goes to `infection`.** `pedep2-res-45` is the live epiglottitis vignette and it is
  `infection`, not a respiratory chapter. Croup stays in `resp-bronch` (6 live entries) — the two
  sit in different chapters here and that is the corpus's choice, not a slip.
- **HSP splits by what the question tests.** The renal-leaning HSP vignettes are `renal`
  (`pedep2-ren-19`, `-42`); the ones whose distractors are a purpura differential are
  `haem-bleeding` (`pedep2-hem-56`, `-67`, `-85`). n36 and n58 both take `haem-bleeding` on that
  test.
- **Primary ciliary dyskinesia goes to `respiratory`, not `resp-pneumonia`.** Recurrent chest
  infection is what the vignette describes, so the pneumonia chapter is the instinctive answer. But
  `theory.peds.js` teaches PCD in exactly one place — `resp-14`, the "these are not asthma" red-flag
  table, chapter `respiratory` — and the only live entry anywhere that mentions ciliary dyskinesia is
  `respiratory` as well. A question is chaptered where its teaching lives.

## The split, measured

**Twenty-four chapters carry the 51.** No chapter takes more than seven:

| chapter | n values | count |
|---|---|---|
| `haematology` | 9, 10, 16, 54, 56, 63, 64 | 7 |
| `haem-bleeding` | 36, 44, 57, 58, 59, 60, 62 | 7 |
| `renal` | 2, 11, 45, 55, 65 | 5 |
| `neurological` | 12, 29, 33 | 3 |
| `respiratory` | 52, 67, 68 | 3 |
| `neuro-nm` | 3, 53 | 2 |
| `neuro-cp` | 6, 74 | 2 |
| `genetics` | 21, 75 | 2 |
| `infection` | 32, 73 | 2 |
| `cardiac` | 39, 49 | 2 |
| `resp-bronch` | 40, 51 | 2 |
| `dev-problems` | 43, 46 | 2 |
| `normal-dev` | 1 | 1 |
| `resp-pneumonia` | 30 | 1 |
| `renal-cakut` | 20 | 1 |
| `endocrine` | 26 | 1 |
| `gastroenterology` | 31 | 1 |
| `endo-thyroid` | 34 | 1 |
| `emergencies` | 35 | 1 |
| `malignant-solid` | 47 | 1 |
| `cardiac-acq` | 48 | 1 |
| `neonatal-sepsis` | 50 | 1 |
| `malignant` | 69 | 1 |
| `cardiac-cyan` | 72 | 1 |

51 total. **`neonatal-sepsis` is the one chapter here that `questions.peds.ep2.js` has never used**
— it holds 14 entries across part 1 and House. That is not a reason to avoid it; it is a real
chapter in `modules.js` and n50 belongs in it.

## The ruling, entry by entry

Half A is n1–n46 (26 entries), half B is n47–n75 (25). The `n` values are the staged ones in
`endpoint-p2-s13-mfe2.array.js`; the drafted id is `pedep2-mf2-<n>`.

### Half A

| n | p. | chapter | why |
|---|---|---|---|
| 1 | 1434 | `normal-dev` | limit ages of normal milestones; poor head control at 6 months is the red flag. 10 live milestone entries are `normal-dev` |
| 2 | 1436 | `renal` | haematuria differential. `pedep2-ren-29` and `-50` (glomerular / non-glomerular causes of haematuria) are both `renal`, and the differential is what is being tested even though the key is UTI |
| 3 | 1438 | `neuro-nm` | fasciculation localises to the anterior horn cell; `pedep2-neu-6` (SMA) is `neuro-nm` |
| 6 | 1444 | `neuro-cp` | site of lesion in dyskinetic CP |
| 9 | 1450 | `haematology` | mechanism of haemolysis in G6PD deficiency |
| 10 | 1452 | `haematology` | osmotic fragility in hereditary spherocytosis; 5 live HS entries are `haematology` |
| 11 | 1454 | `renal` | features of nephrotic syndrome; all 7 live nephrotic entries are `renal` |
| 12 | 1456 | `neurological` | hydrocephalus and VP shunt. The corpus is thin — `pedep-mf4-47` (VP shunt) is `neurological` and there is no hydrocephalus chapter in `modules.js` |
| 16 | 1464 | `haematology` | malaria vignette, per the measurement above |
| 20 | 1472 | `renal-cakut` | secondary enuresis; `renal-cakut` is "CAKUT, stones and enuresis" and holds the live enuresis entries |
| 21 | 1474 | `genetics` | the question asks the **mode of inheritance**, not the growth consequence. Achondroplasia itself also appears under `growth-puberty`; what is tested here is autosomal dominance |
| 26 | 1484 | `endocrine` | sick-day management of type 1 diabetes. **Not `endo-dka`** — the key is a maintenance IV saline infusion, and the distractor that would make it DKA (fluid *resuscitation*) is the one being excluded |
| 29 | 1490 | `neurological` | red-flag features of headache |
| 30 | 1492 | `resp-pneumonia` | macrolide for atypical pneumonia. **Boxless** |
| 31 | 1494 | `gastroenterology` | pyloric stenosis; all 4 live pyloric entries are `gastroenterology` ("Vomiting and reflux") |
| 32 | 1496 | `infection` | epiglottitis, per the measurement above |
| 33 | 1498 | `neurological` | febrile convulsions; 6 live entries are `neurological` |
| 34 | 1500 | `endo-thyroid` | salt-losing CAH; the chapter is "Thyroid and adrenal disorders" |
| 35 | 1502 | `emergencies` | choanal atresia. One live entry exists, `pedep-emg-42`, and it is `emergencies` — cyanosis relieved by crying is taught as a delivery-room emergency here |
| 36 | 1504 | `haem-bleeding` | HSP presenting as a purpura differential (ITP, meningococcaemia, leukaemia, SLE) |
| 39 | 1510 | `cardiac` | duct-dependent systemic circulation; 27 live entries mentioning HLHS or duct dependence are `cardiac` |
| 40 | 1512 | `resp-bronch` | croup; 6 live croup entries are `resp-bronch` |
| 43 | 1518 | `dev-problems` | autism, per the measurement above |
| 44 | 1520 | `haem-bleeding` | vitamin K deficiency bleeding; PT is the extrinsic-pathway answer |
| 45 | 1522 | `renal` | minimal change nephrotic syndrome |
| 46 | 1524 | `dev-problems` | autism. ⚠️ **This one is a known House overlap** — `pedhd-devp-18`, similarity 1.000. It is a cross-**bank** match, so it does **not** fold: draft it, and it goes to the end-of-stream cross-bank sweep for an `alsoIn` on the House side |

### Half B

| n | p. | chapter | why |
|---|---|---|---|
| 47 | 1526 | `malignant-solid` | most common **solid** tumour, key brain tumours. `pedep2-mal-23` ("most common malignant tumor", key leukaemia) is `malignant`; this one is the solid-tumour half of the same pair |
| 48 | 1528 | `cardiac-acq` | Jones criteria; 3 live rheumatic fever entries are `cardiac-acq` |
| 49 | 1530 (box 1531) | `cardiac` | Eisenmenger from an untreated left-to-right shunt; `pedep2-car-3` is `cardiac`. ⚠️ **The explanation box is printed alone on p.1531** — `source` takes the `(the explanation box is printed alone on p.1531)` form |
| 50 | 1533 | `neonatal-sepsis` | organisms causing pneumonia in a newborn is early-onset sepsis; GBS, *E. coli*, *Listeria* |
| 51 | 1535 | `resp-bronch` | evidence-based treatment in acute bronchiolitis. **Boxless** |
| 52 | 1537 | `respiratory` | primary ciliary dyskinesia. ⚠️ **Ruled by measurement, against my first instinct.** The course teaches PCD in exactly one place — `resp-14`, the "these are not asthma" red-flag table, which is in chapter `respiratory`. `resp-pneumonia` was the first ruling here on a clinical argument (recurrent chest infection); the theory scan overruled it. The live corpus agrees: the one entry anywhere that mentions ciliary dyskinesia is `respiratory` too. **CF, the distractor being excluded, does not settle this** — measured, CF-mentioning entries scatter over 13 chapters (`genetics` 6, `resp-pneumonia` 5, `respiratory` 2), so it is no guide |
| 53 | 1539 | `neuro-nm` | Guillain–Barré syndrome |
| 54 | 1541 | `haematology` | G6PD deficiency and the offending drug class |
| 55 | 1543 | `renal` | causes of haematuria — same ruling and same reason as n2 |
| 56 | 1545 | `haematology` | haemoglobin electrophoresis; 4 live entries are `haematology` |
| 57 | 1547 | `haem-bleeding` | haemophilia A after circumcision; 11 live haemophilia entries are `haem-bleeding` |
| 58 | 1549 | `haem-bleeding` | pathophysiology of HSP, keyed vasculitis; pairs with `pedep2-hem-56` |
| 59 | 1551 | `haem-bleeding` | laboratory finding supporting DIC |
| 60 | 1553 | `haem-bleeding` | the DIC finding that is **not** consistent. Pairs with n59 — draft them as a pair, and each must explain why thrombocyto**sis** is the odd one out |
| 62 | 1557 | `haem-bleeding` | ITP with no active bleeding; 6 live ITP entries are `haem-bleeding` |
| 63 | 1559 | `haematology` | splenectomy in hereditary spherocytosis |
| 64 | 1561 | `haematology` | iron deficiency indices — low Hb, low MCV, **low** reticulocytes |
| 65 | 1563 | `renal` | HUS; all 4 live HUS entries are `renal` |
| 67 | 1567 | `respiratory` | the feature that supports asthma; 15 live asthma entries are `respiratory` |
| 68 | 1569 | `respiratory` | spirometry as the diagnostic test in an older child |
| 69 | 1571 | `malignant` | intrathecal chemotherapy in ALL; the leukaemia chapter |
| 72 | 1577 | `cardiac-cyan` | complication of tetralogy of Fallot; `pedep2-car-28` ("serious complications of Fallot tetralogy") is `cardiac-cyan` |
| 73 | 1579 | `infection` | Kernig's sign; the meningitis chapter |
| 74 | 1581 | `neuro-cp` | 20-month-old not walking with normal hand function — spastic diplegia |
| 75 | 1583 | `genetics` | example of an X-linked recessive disorder |

## What this file does NOT settle

- **The reprints.** The 29 are not drafted and take no chapter. They are already cited; see the
  reprint map's "Executed" section.
- **The four amendments to live entries.** `pedep2-car-12` and the substance owed to `pedep2-gen-28`,
  `pedep2-nd-5` and `pedep2-nd-6` are edits to entries that already exist. They are not a drafting
  half's work and are listed in `endpoint-p2-s13-drafting-notes.md` under "Not a drafting job".
- **The cross-bank overlaps.** Twelve-plus House matches, n46 among them at similarity 1.000.
  **Nothing folds across banks.** They go to the end-of-stream sweep.
