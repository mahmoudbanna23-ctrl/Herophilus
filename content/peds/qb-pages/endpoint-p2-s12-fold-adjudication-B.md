# Peds endpoint part 2, section 12 "Model Final Exam 1" — fold adjudication B (n31-n60)

Run against:
- STAGED: `content\peds\qb-pages\endpoint-p2-s12-mfe1.array.js`, entries n31-n60 and n79 (read directly off disk, verbatim staging).
- LIVE: `app\data\questions.peds.ep2.js` (`Q_PEDS_EP2`), the specific ids named in the candidate list plus `pedep2-neu-35` and `pedep2-mal-23`, found by two extra greps described below (read directly off disk).
- Page images: `…\0ffb5f86-a1df-4f33-a8c4-fc32a73946ba\scratchpad\ep2-index\native\p{page}.jpeg` for every pair called REPRINT — p1332, p1334, p1338, p1356, p1360, p1374, p1376, p1382, p1384, p1386, p1390. All eleven images opened, all legible at native resolution, no crop needed.

No image was needed for a NOT A REPRINT verdict — those turn on the transcribed text alone (per the prompt), which is already verbatim staging on one side and a verified live entry on the other.

**Note on where this prompt was wrong:** none of the sixteen listed pairs failed to resolve as described. Two extra checks turned up material worth reporting under the "a miss is not proof of absence" instruction — see n35 and n59 below; neither changes any candidate-list verdict but both should be flagged to the parent.

---

## n31 == pedep2-dp-2

**REPRINT.**
Discriminating token: stem "At what age does autism spectrum disorder usually become evident?" and the identical five-item bracket list `0–12 months / 12–24 months / 2–4 years / 4–8 years / Above 8 years`, key "2–4 years" both sides. Byte-for-byte match (sim 1.000).
Page image p.1332 confirmed: key highlighted "C. 2–4 years", box present, no figure.
Live `source` currently reads `Pediatrics endpoint part2.pdf p.99 (reprinted at p.1039)` — this is a **third** printing and needs `p.1332` added.
Model-exam box: "Autism spectrum disorder usually presents at this age because this is when language and social skills rapidly develop." Live's own printed box: "Autism typically becomes noticeable between 2–4 years of age when delays in speech, social interaction, and repetitive behaviors emerge. Subtle signs may be present earlier but often become more apparent in toddlerhood." Different wording, same fact — nothing in the model-exam box is missing from the live explanation's content.

## n32 == pedep2-car-3

**REPRINT.**
Discriminating token: "3-month-old infant presents with breathlessness and sweating while feeding...several chest infections...suspect heart failure" plus the identical five-option list (staged periods after each option, live has none — punctuation only). Key text "It is due to a left-to-right shunt" both sides (sim 0.986).
Page image p.1334 confirmed: key "D. It is due to a left-to-right shunt." highlighted, box present, no figure. Live entry names the patient "Sunil"; the staged/model-exam printing carries no name.
Live `source` currently `p.631` — needs `p.1334` added.
Model-exam box: "Infants with breathlessness, sweating while feeding, and repeated infections often have heart failure due to left-to-right shunts, which increase pulmonary blood flow." Live's box: "In infancy, heart failure is often due to large left-to-right shunts such as VSD or PDA. This leads to pulmonary overcirculation, breathlessness, sweating, and recurrent infections." Different wording; live's box is the only one naming VSD/PDA specifically — nothing in the model-exam box is missing from live.

## n34 == pedep2-neu-21

**REPRINT.**
Discriminating token: "14-month-old...seizures...episodes occur when he is angry or upset...color change[s]...followed by collapse and occasional jerking movements", key "Breath-holding spells" both sides (sim 0.774, depressed by an option-count difference).
Staged prints only 4 options (`Breath-holding spells / Myoclonic epilepsy / Non-epileptic seizure / Vasovagal syncope.`); live prints 5, with `Tet spells` inserted as the second option (fold shape 6 — one distractor added/dropped, not the key). Key text and index both stay 0 = "Breath-holding spells" either way, so this is not a reordering case, just a missing distractor on the model-exam printing.
Page image p.1338 confirmed: only 4 options printed on the page (matches staging note), key "A. Breath-holding spells" highlighted, box present, no figure. This confirms the missing 5th option is a real property of this printing, not a staging miss.
Live `source` currently `p.1034` — needs `p.1338` added.
Model-exam box: "These spells are triggered by emotional upset and may include brief cyanosis or pallor with collapse; they are benign and self-limiting." Live's box: "Triggered by anger or frustration, these episodes involve breath-holding, color change, and brief loss of consciousness. They are benign and self-limiting." Different wording, same fact, nothing new in the model-exam box.

## n35 == pedep2-hem-80

**NOT A REPRINT.** Shared stem frame only — different disease entirely.
n35's stem is "Which of the following is a feature of a **typical febrile seizure**?" with options built around seizure duration/age/recurrence/post-ictal state. `pedep2-hem-80`'s stem is "Which one of the following is a feature of **hereditary spherocytosis**?" with a completely disjoint option set (bilirubin type, favism, short stature, splenomegaly, inheritance pattern). The only thing shared is the frame "Which [one] of the following is a feature of X?" — a template, not a question. The sweep's 0.571 similarity is entirely frame text, not content.
**Extra finding (sweep did not list this):** grepping the live file for "typical febrile seizure" turns up `pedep2-neu-35`, "About typical febrile seizures, all are true EXCEPT:" (options: Focal or generalized / Occur in children 6 months–5 years / Last less than 15 minutes / No neurological deficit afterward; answer 0 = "Focal or generalized" is the false statement). This is the actually-related live entry, built from the same feature table n35 draws on (age band, duration, absence of post-ictal deficit, non-focality, non-recurrence). I am **not** calling it a reprint of n35: the two are structurally different questions — one is an affirmative "which IS a feature" with key "No post-ictal manifestations", the other is a negative "all are true EXCEPT" with key "Focal or generalized" — different question construction and a different flagged fact, in the same shape this bank already uses deliberately elsewhere (see n60/`ren-41`/`ren-54` below). Flagging for the parent's awareness rather than deciding it either way, since it wasn't in my candidate list and isn't a clean template/reprint call.

## n43 == pedep2-dp-10 — KEYS DIFFER, resolved by text

**REPRINT.**
Discriminating token: "9-month-old infant...unusual movements...jerking movements...repetitive bursts...was able to sit and babble but has stopped doing so", key text "EEG" both sides.
The "KEYS DIFFER" flag is a reordering artefact plus one swapped distractor, not a different question: staged key index 4 = "EEG"; live answer index 1 = "EEG" — same word, different position, because the five-item set is differently ordered **and** one distractor differs (staged has "Chromosome karyotype", live has "CT or MRI scan of the brain" in that slot; the other four items — Congenital infection screen, Cranial ultrasound scan, Thyroid function tests, EEG — are common to both). The swapped item is a distractor, not the key, so it does not change the correct answer.
Page image p.1356 confirmed: key "E. EEG" highlighted, box present, no figure.
Live `source` currently `p.115` — needs `p.1356` added.
Model-exam box: "EEG is the first investigation for suspected seizure activity to confirm the type and guide further management." Live's box: "The description fits infantile spasms (West syndrome), characterized by sudden flexor spasms and developmental regression. EEG is diagnostic, often showing hypsarrhythmia." **The live box says something the model-exam box does not** — it names the diagnosis (West syndrome/infantile spasms) and the EEG finding (hypsarrhythmia); the model-exam box is generic and names neither. Nothing needs pulling from the model-exam box into the live explanation; live's box is already the fuller one.

## n45 == pedep2-dp-7 (sim 0.843, KEYS DIFFER) and n45 == pedep2-neu-40 (sim 0.957, key 3/answer 3)

**n45 is a REPRINT of `pedep2-neu-40`, and NOT a reprint of `pedep2-dp-7`.**
The staged n45 stem and its five-item option set (`Chromosome karyotype / Congenital infection screen / Creatine kinase / CT or MRI scan of the brain / Thyroid function tests`, key index 3 = "CT or MRI scan of the brain") match `pedep2-neu-40`'s option set and order exactly, item for item, key for key. `pedep2-dp-7` is the same clinical vignette (word-for-word identical stem, patient renamed "Clarissa") but printed with a **different, four-item investigation menu** (`Cranial ultrasound scan / EEG / CT or MRI scan of the brain / Congenital infection screen`, key index 2). Live's own `pedep2-neu-40` entry states this explicitly in its explanation: "The same vignette is also printed with a different four-option investigation menu at `pedep2-dp-7`... different exclusion work, so both stand as separate questions rather than a fold." Since the live bank has already ruled, on this exact vignette, that the option menu is what defines a separate question, and n45 reproduces `neu-40`'s menu exactly rather than `dp-7`'s, the correct fold target is `neu-40` only. This is exactly why "KEYS DIFFER" for the `dp-7` comparison — it isn't a reordering, it's genuinely the other printing.
Page image p.1360 confirmed: key "D. CT or MRI scan of the brain" highlighted, box present (positioned beside the options, per the staging note), no figure. Stem/options match `neu-40`'s option set exactly.
Live `pedep2-neu-40` `source` currently `p.1036 (the explanation box is printed alone on p.1037)` — needs `p.1360` added.
Model-exam box: "Imaging helps identify structural brain lesions causing hemiplegia and developmental delay." Live's box: "Clara has motor delay with early hand preference, right-sided weakness, increased tone and reflexes → classic for hemiplegic cerebral palsy from a perinatal brain insult (e.g., stroke). 👉 The investigation that confirms the diagnosis and shows the underlying lesion is brain imaging (MRI" (cut off mid-word on the source page, per live's own source note). Live's box is fuller (names the diagnosis and mechanism); nothing in the model-exam box is missing from live.

## n52 == pedep2-res-4

**REPRINT.**
Discriminating token: "3-year-old boy presents to his family doctor. He has a 'hacking' cough that started several weeks ago and has failed to respond to two courses of antibiotics...decreased air entry in the right lower zone with normal percussion...growth is normal", key "Request a chest X-ray" both sides (sim 0.940).
Options match closely; live's 5th option reads "Request a sweat test and evaluation of immunoglobulins and functional antibodies" against staged's "Request an evaluation of immunoglobulins and functional antibodies" (live adds "a sweat test and" — a wording difference on a distractor, not the key).
Page image p.1374 confirmed: key "D. Request a chest X-ray" highlighted, box present, no figure. Live names the patient "Tak"; staged/model-exam carries no name.
Live `source` currently `p.483` (confirmed by a follow-up grep after my first read window cut off before reaching this entry's own source line) — needs `p.1374` added.
Model-exam box: "A chest X-ray is the next best step to evaluate localized lung pathology, such as consolidation or collapse, since the child has a persistent cough unresponsive to antibiotics. It helps guide further management, like drainage or specialist referral." Live's box: "In a child with chronic cough and localized findings (decreased air entry), a chest X-ray is the first investigation to rule out pneumonia, foreign body, or structural abnormalities." Different wording, different named differentials (consolidation/collapse vs pneumonia/foreign body/structural abnormality) — worth folding the model-exam's "consolidation or collapse" phrasing into the live citation note since it names something live's box does not.

## n53 == pedep2-car-20

**REPRINT.**
Discriminating token: "mother on the postnatal ward has urgently requested a medical review for her 3-day-old baby who appears blue...deeply cyanos[ed/is] with cool peripheries and saturations do not improve despite maximum oxygen therapy...single, loud second heart sound...no murmur", key "IV infusion of prostaglandin E1" both sides (sim 0.923). Options match one-for-one (staged abbreviates "IV", live spells "Intravenous" — cosmetic only).
Page image p.1376 confirmed: key "E. IV infusion of prostaglandin E1" highlighted, box present, no figure.
Live `source` currently `p.668` (confirmed by a follow-up grep after my first read window cut off before reaching this entry's own source line) — needs `p.1376` added.
Model-exam box: "The baby likely has a duct-dependent congenital heart lesion. Prostaglandin E1 keeps the ductus arteriosus open, maintaining pulmonary or systemic blood flow until definitive management." Live's box: "In duct-dependent congenital heart disease, prostaglandin E1 keeps the ductus arteriosus open to maintain systemic or pulmonary blood flow. This is critical in a cyanotic neonate." Same content, different wording, nothing new in the model-exam box.

## n56 == pedep2-ren-5

**REPRINT.**
Discriminating token: "1-month-old infant...vomiting and not taking his feeds...irritable...temperature of 39°C...heart rate 170...respiratory rate 45...clean catch urine...nitrites and protein...positive for", key "Intravenous antibiotics / IV antibiotics" both sides (sim 0.568, low because of surface wording differences in how the urine findings and history length are phrased, not because it's a different question).
Options match one-for-one. Staged: "not taking his feeds as usual during the last 24 hours...Microscopic examination shows innumerable pus cells and is positive for nitrites and protein on a dipstick." Live: "vomiting and reduced feeding...clean-catch urine sample shows nitrites, leucocytes, and protein on dipstick" (live names the infant "Eesa" and omits the explicit "24 hours" and "innumerable pus cells" phrasing, live also omits temperature/HR/RR from the visible stem text I read — actually all three vitals **are** present in the live stem, matching staged exactly: 39°C, 170 bpm, 45/min).
Page image p.1382 confirmed: key "A. Intravenous antibiotics" highlighted, box present, no figure, all three vitals legible on the page and matching both stagings.
Live `source` currently `p.828` — needs `p.1382` added.
Model-exam box: "In infants <2 months, a UTI can quickly lead to sepsis. IV antibiotics are required for effective treatment and to prevent complications." Live's box: "A febrile neonate with signs of sepsis and a positive urine dipstick requires hospital admission and IV antibiotics. This age group is at risk for serious bacterial infection and must be treated urgently." Different wording, same fact, nothing new in the model-exam box.

## n57 == pedep2-ren-20

**REPRINT.**
Discriminating token: "9-year-old girl presents with hematuria...usually fit and well but was treated for tonsillitis last week...peripheral edema and hypertension...no abdominal mass...urine dipstick is positive for blood and protein", key "Post-streptococcal glomerulonephritis" both sides (sim 0.809). Options match one-for-one (spelling variants only: "uremic"/"uraemic", hyphen vs en-dash in "Henoch-Schönlein").
Page image p.1384 confirmed: key "A. Post-streptococcal glomerulonephritis" highlighted, box present, no figure.
Live `source` currently `p.858` — needs `p.1384` added.
Model-exam box: "This classic presentation occurs 1–2 weeks after a streptococcal infection, causing hematuria, proteinuria, edema, and hypertension." Live's box: "Recent streptococcal infection, hematuria, hypertension, and edema point to post-streptococcal glomerulonephritis, a common cause of nephritic syndrome in school-aged children." **The model-exam box states the specific latency window "1–2 weeks" that live's printed box does not give** (live's fuller explanation body does mention a "latent period" but the printed box itself doesn't quantify it) — worth folding that specific detail into the live citation note.

## n58 == pedep2-ren-21

**REPRINT.**
Discriminating token: "7-year-old girl presents with edema of the face and legs, and abdominal pain...urine dipstick shows 4+ protein...started on prednisolone...biopsy and light microscopy", key "Minimal change disease" both sides (sim 0.791).
Staged prints only 4 options (`Focal-segmental glomerulosclerosis / Mesangiocapillary glomerulonephritis / Crescentic glomerulonephritis / Minimal change disease`); live prints 5, adding "Membranous glomerulonephritis" as the 5th (fold shape 6 — dropped distractor, not the key; key stays index 3 = "Minimal change disease" both sides since the added item is appended after it).
Page image p.1386 confirmed: only 4 options printed on the page (matches staging note "Only 4 options printed on this page (A-D)"), key "D. Minimal change disease" highlighted, box present, no figure.
Live `source` currently `p.860` — needs `p.1386` added.
Model-exam box: "Minimal change disease is the most common cause of nephrotic syndrome in young children, showing normal glomeruli on light microscopy but responding well to steroids." Live's box: "In children with nephrotic syndrome, the most common histological finding is minimal change disease, which appears normal under light microscopy and responds well to steroids." Same content, reworded, nothing new either direction.

## n59 == pedep2-hem-6

**NOT A REPRINT.** Shared stem frame only — different disease, different malignancy class.
n59: "What is the most common **solid childhood cancer**?" — options `Lymphomas / Brain tumors / Wilms tumor / Soft tissue sarcomas / Neuroblastoma`, key "Brain tumors". `pedep2-hem-6`: "What is the MOST common **inherited pancytopenia syndrome**?" — options `Dyskeratosis congenita / Fanconi anemia / Shwachman-Diamond syndrome / Diamond-Blackfan anemia / Congenital amegakaryocytic thrombocytopenia`, key "Fanconi anemia". Completely disjoint disease entities and option sets; the only shared text is the "What is the MOST common X?" frame, which is why the sweep flagged it at all (sim 0.571, all frame text).
**Extra check (sweep did not list this either):** grepped the live file for "most common malignant tumor"/"solid tumor" and found `pedep2-mal-23`, "Which of the following is the most common malignant tumor in children?" (options: Leukemia / Lymphoma / Kaposi sarcoma / Wilm's tumor; answer "Leukemia"). This is **not** a reprint of n59 either — `mal-23` asks about the most common malignant tumor **overall** (leukaemia included, and wins), while n59 explicitly restricts the question to **solid** tumours (leukaemia is not even an option, correctly excluded), with a different correct answer (brain tumors). Two genuinely different, correctly-scoped questions on the same broad topic. No fold anywhere for n59.

## n60 == pedep2-ren-41 (sim 0.842, key 0/answer 0) and n60 == pedep2-ren-54 (sim 0.632, key 0/answer 0)

**n60 is a REPRINT of `pedep2-ren-41`, and NOT a reprint of `pedep2-ren-54`.**
n60: "What is the **most common** complication of minimal change nephrotic syndrome?" — options `Susceptibility to infections / Acute kidney injury / Bleeding tendency / Electrolyte disturbances / Hypertension`, key "Susceptibility to infections".
`pedep2-ren-41`: "The **most common** complication of minimal change nephrotic syndrome is" — options `Repeated infections / Acute renal failure / Bleeding tendency / Cerebral strokes / Hypertension`, answer "Repeated infections". Same question (statement vs question form), same key concept (infection), 3 of 5 options identical (Bleeding tendency, Hypertension, and the AKI/renal-failure pair are synonymous), one distractor swapped (Electrolyte disturbances vs Cerebral strokes). This is a REPRINT.
`pedep2-ren-54`: "What is a **major** complication of minimal change nephrotic syndrome?" — options `Thrombosis / Hypertensive encephalopathy / Chronic renal failure / Hematuria`, answer "Thrombosis". This is a **different question by the live bank's own explicit ruling**: `ren-54`'s explanation states outright, "This question asks for A MAJOR complication... and `pedep2-ren-41` asks for the MOST COMMON one — both keys are correct because the adjective changes what is being asked, not because one of the two entries is wrong." n60 uses "most common" and answers "infections", which is `ren-41`'s question, not `ren-54`'s. Since the live bank has already ruled this pair deliberately un-folded, n60 cannot be a reprint of both, and it matches `ren-41` on both stem-adjective and key.
Page image p.1390 confirmed: key "A. Susceptibility to infections" highlighted, box present, no figure.
Live `pedep2-ren-41` `source` currently `p.900` — needs `p.1390` added.
Model-exam box: "Protein loss in urine leads to decreased immunoglobulins, making children prone to infections." Live's box: "Children with minimal change nephrotic syndrome are prone to infections due to urinary immunoglobulin loss." Same content, reworded, nothing new either direction.

---

## The one within-section pair: n44 (p.1358) vs n79 (p.1428)

**NOT A REPRINT — two different questions about the same disease.**
n44: "What is the most common type of cerebral palsy **associated with hypoxic-ischemic encephalopathy**?" — options `Spastic hemiplegia / Spastic diplegia / Spastic quadriplegia / Spastic paraplegia` (4 options, confirmed on the page image, per staging note), key "Spastic quadriplegia" (index 2).
n79: "What is the most common **cause** of cerebral palsy?" — options `Prenatal cause / Perinatal brain injury / Neonatal infections / Accidents / Meningitis/encephalitis` (5 options), key "Prenatal cause" (index 0).
These ask two different things about cerebral palsy — n44 asks which CP *subtype* follows HIE specifically (answer: spastic quadriplegia); n79 asks the most common overall *cause* of CP in general (answer: prenatal, not perinatal/HIE at all). Different question, different scope, different correct answer, and notably n79's own answer ("Prenatal cause") argues *against* HIE being the dominant cause the way n44's framing might suggest — these are not interchangeable and folding them would be wrong. The `opts 4/5` count difference the prompt flagged is real (confirmed above) but is incidental to two genuinely different questions, not evidence of a fold.
I am **not** deciding which side folds, because I'm reporting this as NOT A REPRINT — no fold is needed for either n44 or n79 on this basis. (Both stand as separate live entries when spliced.)

---

## Summary

| n | live id | verdict |
|---|---|---|
| 31 | pedep2-dp-2 | REPRINT |
| 32 | pedep2-car-3 | REPRINT |
| 34 | pedep2-neu-21 | REPRINT |
| 35 | pedep2-hem-80 | NOT A REPRINT (shared stem frame) |
| 43 | pedep2-dp-10 | REPRINT |
| 45 | pedep2-dp-7 | NOT A REPRINT (matches neu-40's printing, not this one) |
| 45 | pedep2-neu-40 | REPRINT |
| 52 | pedep2-res-4 | REPRINT |
| 53 | pedep2-car-20 | REPRINT |
| 56 | pedep2-ren-5 | REPRINT |
| 57 | pedep2-ren-20 | REPRINT |
| 58 | pedep2-ren-21 | REPRINT |
| 59 | pedep2-hem-6 | NOT A REPRINT (shared stem frame) |
| 60 | pedep2-ren-41 | REPRINT |
| 60 | pedep2-ren-54 | NOT A REPRINT (deliberately separate, per live bank's own ruling) |
| 44/79 | n/a | NOT A REPRINT (different questions, same disease) |

**Recommended `reprints` array for n31-n60: `[31, 32, 34, 43, 45, 52, 53, 56, 57, 58, 60]`** — 11 of the 20.

**UNSETTLED:** none. (An earlier draft of this file flagged `pedep2-res-4`'s and `pedep2-car-20`'s source lines as uncaptured; a follow-up grep confirmed them as `p.483` and `p.668` respectively, both now corrected above.)

**Flagged for the parent's awareness (not unsettled, not reprints):** `pedep2-neu-35` (typical-febrile-seizure "EXCEPT" question) and `pedep2-mal-23` (most-common-malignant-tumor-overall question) were found by extra greps, not by the sweep. Neither is called a reprint of anything in my range, but both sit close enough in topic to n35/n59 that the parent may want them on record.

**Where this prompt was wrong:** nothing in the candidate list or the n44/n79 pair failed to resolve as framed. The two "extra" live entries above (`pedep2-neu-35`, `pedep2-mal-23`) are the only things beyond the prompt's own list, found under the "a miss is not proof of absence" instruction — reported as topically adjacent, not as reprints.
