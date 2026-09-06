# Peds Endpoint Part 2 — Section 15 ("Model Final Exam 4") — Fold Adjudication, Quarter A (n1–n20)

**Summary.** 16 of the 20 entries in this quarter are reprints: 15 fold into live entries already in
this stream's own file (`questions.peds.ep2.js`), and 1 (n12) folds into a live entry in endpoint
**part 1** (`questions.peds.ep.js`), noted explicitly per brief because part 1 and part 2 are
within-bank. 4 entries (n1, n3, n15, n19) are not reprints of anything live in this bank — two of them
(n1, n19) have exact or near-exact **House**-bank twins, recorded as observations only, never folded.
No entry in this quarter carries PAIRED as its primary verdict, but three templated option families
generated the false-positive candidates that had to be worked through and dismissed:

1. **The five-way developmental-delay domain menu** (gross motor / fine motor / speech and language /
   play and social / global delay), reused verbatim by `pedep2-nd-19`, `pedep2-nd-20`, `pedep-mf3-13`,
   `pedhd-dev-19` and `pedhd-dev-20`. n9 and n10 both sit on this menu and both independently fold into
   their own correct P2 targets (nd-19 and nd-20 respectively) — the menu pairs them with each other,
   it does not merge them, and `pedep-mf3-13` (P1) turns out to be a *different* clinical case (a
   hemiplegic/spastic-gait picture) wearing the same five labels, not a reprint of either.
2. **The five-lesion cyanotic/acyanotic cardiac "clue table"** (ASD / TGA / PDA / ToF / VSD, or AS /
   AVSD / CoA / Innocent / PDA depending on the vignette), reused across `pedep2-car-18/20/22/24` and
   their House twins. n2, n8 and n14 each sit on one arm of this table; each folds cleanly into its own
   direct stem match and the OPTSET-only hits against the table's other members are dismissed as
   template noise, not fold candidates.
3. **The Down-syndrome murmur menu** (AVSD / ASD / AS / CoA / PDA), which prints twice with the
   syndrome named outright (`pedep2-gen-17` "Olive", 10-day-old, loud murmur) and twice with the
   syndrome left for the reader to spot from dysmorphic features (`pedep2-gen-24`, 2-day-old,
   hypotonic + palmar crease + epicanthic folds). n7 belongs to the second pair and folds into
   `pedep2-gen-24`; the "Olive" pair (`pedep2-gen-17`/`pedhd-gen-5`) is a genuinely different question
   (syndrome given vs. syndrome to be recognised) and is correctly not a candidate for n7 at all
   despite sharing 4 of 5 options.

Page images were opened for n7 (p.1771), n9 (p.1775), n10 (p.1777) and n18 (p.1794) to settle
borderline calls (a dropped-detail fold and a genuine age re-skin); the rest were decided from the
staged transcription (each carrying its own "read directly off the native JPEG" note) cross-checked
against the live-entry text, which was sufficient given the similarity scores involved.

---

### n1 (p.1759) — VERDICT: NOT A REPRINT

**Candidates examined:** `HOUSE:pedhd-emg-18` only (sweep sim 1.000, key 3/3). No P2, P1 or WITHIN
candidate was produced for n1 anywhere in `sw15.txt`.

**Comparison.** n1's stem (9-year-old boy "blue-lighted" into ED, reduced consciousness, headache and
fever earlier in the day, pyrexial, GCS 14/15, cardiovascularly stable, a few petechiae on his legs)
is word-for-word identical to `pedhd-emg-18`'s stem bar one comma. Both print the same five options and
the same key, index 3, "Gain intravenous access, take blood cultures, and administer broad-spectrum
antibiotics."

**Fold shape / ruling.** This is a **cross-bank** match only — `pedhd-emg-18` lives in the House bank
(`pediatric .pdf p.132`, Part I ch.17 Q18). Per brief, a House match is **recorded only, never
folded, never proposed for folding**. Nothing else — no P2 entry, no P1 entry, no other n inside
section 15 — prints this vignette, so there is no within-bank fold available and the verdict is NOT A
REPRINT.

**House observation:** `pedhd-emg-18`, sim 1.000, essentially a verbatim cross-bank twin.

**What was opened:** the staged p.1759 transcription (its own note: "Read directly off p.1759 native
JPEG, fully legible… Key D (index 3) highlighted") and `live15.js pedhd-emg-18`. No further page image
needed given the transcription is already a direct page read and the two texts match at word level.

---

### n2 (p.1761) — VERDICT: REPRINT of `pedep2-car-18`

**Candidates examined:** `P2:pedep2-car-18` (sim 0.956, key 1/1) — the fold target.
`HOUSE:pedhd-card-18` (record only, cross-bank, same near-verbatim stem).
`OPTSET:pedep2-car-22`, `pedep2-car-24`, `pedhd-card-22`, `pedhd-card-24` — dismissed. These four are
the separate five-lesion cardiac "clue table" cluster that `car-22` and `car-24` already document as
sharing an option ladder *with each other* (rubella/PDA vignette vs. saturation-78%/ToF vignette);
n2's own clinical picture (profound cyanosis, single loud S2, no murmur, increased pulmonary
vascularity, TGA) is neither of those two cases, so the option-set overlap is template noise, not a
fold candidate.

**Comparison against `pedep2-car-18`.** Both: 3-day-old baby, postnatal ward, profoundly cyanotic,
saturations unresponsive to high-flow oxygen, single loud S2 and no murmur, IV access secured, severe
metabolic acidosis on gas, increased pulmonary vasculature on imaging. The only textual difference is
"A chest X-ray" (`pedep2-car-18`) vs. "A CXR" (n2, staged) — a pure respelling. Same five options in
the same order (ASD / TGA / PDA / ToF / VSD), same key index 1 (TGA). Key text unchanged.

**Fold shape:** exact/respelled reprint (shapes 1–2). `pedep2-car-18`'s own `source` field already
records this question as reprinted in Model Final Exam 1 (p.1308) and Model Final Exam 3 (p.1621, with
the age and "a single loud second heart sound" trimmed). n2 (p.1761, Model Final Exam 4, this section)
is a **fourth** printing of the same question and belongs in that same citation chain.

**House observation:** `pedhd-card-18`, near-verbatim cross-bank twin, record only.

**What was opened:** staged p.1761 transcription and `live15.js` text for all six candidate ids.

---

### n3 (p.1763) — VERDICT: NOT A REPRINT

**Candidates examined:** none. `cand15-A.txt` line 3 reads "(no candidate produced)" — P2, P1, House,
WITHIN and OPTSET/MENU are all silent. Confirmed independently: `grep -n "n3 " sw15.txt` returns no
hits in any of the four sweep blocks (WITHIN, live-P2, live-P1, live-House), not just an absence from
the roster summary.

**Content.** 4-year-old girl, febrile LRTI already on IV antibiotics, new ejection systolic murmur
noted the next morning, normal heart sounds, no pulmonary oedema, clinically well — key: reassure,
this is an innocent murmur, GP to re-evaluate after recovery. Nothing else in this quarter, in the
live P2/P1/House pools the sweep searched, or elsewhere in section 15 tests this specific
"innocent murmur discovered incidentally during a febrile illness" scenario. The corpus's other
innocent-murmur teaching (the S-criteria list in `pedhd-gen-5`'s explanation box) is background
material, not a matching question.

**What was checked:** the staged p.1763 transcription (its own note: "Read directly off p.1763 native
JPEG, fully legible") and a direct grep of the full sweep output for any mention of n3. No page image
was reopened, since there was nothing live or within-section to compare it against.

---

### n4 (p.1765) — VERDICT: REPRINT of `pedep2-mf1-51`

**Candidates examined:** `WITHIN:n57` (p.1875, sim 0.593, keys 2/2, opts 5/5) · `P2:pedep2-mf1-51`
(sim 0.622, key 2/2) — the fold target · `HOUSE:pedhd-inf-17` (sim 0.622, record only) ·
`OPTSET:pedep-inf-68` (P1, options 0.800, stems 0.364, key 2/2 — a stub-abbreviated printing of the
same case, see below).

**Comparison against `pedep2-mf1-51`.** n4: "A 2-year-old boy presents with acute cough and stridor
following 2 days of coryzal symptoms. He is afebrile but has marked intercostal recession, and a
'barking cough' is heard." `pedep2-mf1-51`: "A 2-year-old boy is brought into the emergency department
by ambulance at night with an acute history of cough and stridor following a 2-day history of coryzal
symptoms. On examination, he is afebrile but has marked intercostal recession with stridor and a
'barking cough' is heard." Same age, same timeline, same afebrile/recession/barking-cough triad; n4 is
a condensed retelling that drops "brought by ambulance at night" and the redundant "with stridor"
clause. Same five options (Adenovirus / RSV / Parainfluenza / Rhinovirus / Influenza) in the same
order, same key index 2 (Parainfluenza virus). Key text unchanged.

**Fold shape:** reworded/condensed stem (shape 6, without an option drop here — all five options
survive). REPRINT of `pedep2-mf1-51`.

**Handoff — within-section duplicate not mine to fold:** `n57` (p.1875, quarter C, outside this
range) reads, on inspection during this pass (`dump15.js 57 57`), as essentially the *same* full-length
wording as `pedep2-mf1-51` ("brought into the emergency department by ambulance at night… a barking
cough is heard"), not n4's condensed version. Recommend that when quarter C is adjudicated, n57 folds
into `pedep2-mf1-51` directly (the pre-existing live target) rather than into n4, since n4 and n57 are
best understood as two independent printings of the same already-live question rather than a WITHIN
pair that folds into each other.

**Cross-bank / cross-part observations:** `pedhd-inf-17` (House) is a near-verbatim twin, record only.
`pedep-inf-68` (P1, `Pediatrics endpoint part1.pdf p.1101`) prints the same case as a bare stub — "A
2-year-old boy has barking cough, stridor, and intercostal recession. What's the most likely causative
organism?" — same five options (with RSV abbreviated), same key. This is exactly the OPTSET arm's
purpose: a reprint abbreviated to a stub. It is a third live printing of the same underlying question,
weaker/terser than either n4 or `pedep2-mf1-51`; recorded here as an observation rather than promoted
over the closer P2 match as the fold target, since `pedep2-mf1-51`'s stem match to n4 (0.622) is
markedly closer than `pedep-inf-68`'s (0.364).

**What was opened:** staged p.1765 transcription, `dump15.js 57 57`, and `live15.js` text for
`pedep2-mf1-51`, `pedhd-inf-17`, `pedep-inf-68`.

---

### n5 (p.1767) — VERDICT: REPRINT of `pedep2-end-13`

**Candidates examined:** `P2:pedep2-end-13` (sim 0.679, key 2/2) — fold target.
`HOUSE:pedhd-endo-13`/OPTSET line (options 1.000, stems 0.424, key 2/2, record only, cross-bank).

**Comparison.** n5: "A newborn baby is noted to have coarse facies, a large fontanelle, hypotonia, and
jaundice. Blood glucose is normal. Which investigation would most likely reveal the diagnosis?"
`pedep2-end-13`: "A newborn is noted to have coarse facies, a large fontanelle, hypotonia, and
jaundice. Blood sugar levels are normal. Which investigation is most likely to reveal the diagnosis?"
"Blood glucose" vs. "blood sugar levels" is a synonym swap, otherwise word-for-word. Same five options
(Growth hormone / Karyotype / TFTs / Blood group / CK) in the same order, same key index 2 (TFTs). Key
text unchanged.

**Fold shape:** respelled reprint (shape 2).

**House observation:** `pedhd-endo-13`, record only.

**What was opened:** staged p.1767 transcription (its own note confirms all numerals legible, no crop
needed) and `live15.js` text for both candidates.

---

### n6 (p.1769) — VERDICT: REPRINT of `pedep2-end-14`

**Candidates examined:** `P2:pedep2-end-14` (sim 0.721, key 3/3) — fold target.
`HOUSE:pedhd-endo-14` (options 1.000, stems 0.356, key 3/3, record only, cross-bank).

**Comparison.** Both: 7-day-old male, poor feeding and vomiting, lethargic, moderately dehydrated,
weight 3200g→2750g, glucose 2.0 mmol/L, sodium 124 mmol/L, potassium 6.8 mmol/L, confirmatory test
requested. n6 drops `pedep2-end-14`'s opening clause ("1-day history…born at term, postnatal period
was normal") and the "after resuscitation" qualifier, keeping every number identical. Same five
options (Abdominal USS / ACTH / Karyotype / 17-OHP / Chloride) in the same order, same key index 3
(17-Hydroxyprogesterone level). Key text unchanged; all five lab values match exactly.

**Fold shape:** reworded/condensed stem, all numerals preserved (shape 6, no option dropped).

**House observation:** `pedhd-endo-14`, record only.

**What was opened:** staged p.1769 transcription (note confirms all five numerals legible, no
exponents present) and `live15.js` text for both candidates.

---

### n7 (p.1771) — VERDICT: REPRINT of `pedep2-gen-24`

**Candidates examined:** `pedep2-gen-17` (options 0.800, stems 0.308, **keys differ** — n7 key 0 vs.
gen-17 answer 1) — dismissed, see below. `pedep2-gen-24` (options 1.000, stems 0.524, key 0/0) — fold
target. `pedhd-gen-5` (options 0.800, stems 0.308, **keys differ**) — dismissed, House twin of
gen-17's picture. `pedhd-gen-15` (options 1.000, stems 0.506, key 0/0) — House twin of gen-24's
picture, record only.

**Why `pedep2-gen-17`/`pedhd-gen-5` are dismissed, not folded.** These two ("Olive is a 10-day-old
baby with **Down syndrome**. On examination, you hear a loud heart murmur.") are a genuinely different
question from n7: the syndrome is named outright and the task is only to recall its cardiac lesion,
against a five-option menu that substitutes "Innocent murmur" for "Atrial septal defect." n7 instead
gives the dysmorphic *signs* (hypotonic, single palmar creases, epicanthic folds) at 2 days old and
asks the reader to both recognise Down syndrome and name its lesion, against a straight AVSD/ASD/
AS/CoA/PDA menu. The option overlap (4 of 5) and shared "AVSD is the answer" theme explain the OPTSET
hit; the keys genuinely differ (n7's key is index 0, `pedep2-gen-17`'s is index 1) because the option
lists are not the same list. Not a reprint, not this pairing's target.

**Comparison against `pedep2-gen-24`, verified on the page image (p.1771).** n7 as printed: "A
paediatrician reviews a 2-day-old baby with a heart murmur. The baby is hypotonic, has single palmar
creases, and epicanthic folds. What is the most likely heart lesion?" with options A. Atrioventricular
septal defect (key, highlighted) / B. Atrial septal defect / C. Aortic stenosis / D. Coarctation of the
aorta / E. Patent ductus arteriosus. `pedep2-gen-24`: "A paediatrician is asked to review a heart
murmur in a 2-day-old baby born by vaginal delivery following an uneventful pregnancy to a 38-year-old
primiparous mother. The baby has been feeding well. On examination, he is hypotonic and has single
palmar creases and epicanthic folds. What is the most likely heart lesion?" — same five options in the
same order, same key index 0 (AVSD). n7 drops the delivery mode, the mother's age, and the feeding
status, keeping the diagnostic triad (hypotonic, palmar crease, epicanthic folds) intact. Key text
unchanged.

**Fold shape:** reworded stem with clauses dropped (shape 6) — mother's age and delivery detail
removed, diagnostic findings and options/key untouched.

**House observation:** `pedhd-gen-15`, near-identical to `pedep2-gen-24`'s fuller wording, record only.

**What was opened:** the p.1771 native JPEG (confirmed stem, all five options, key A highlighted, and
the printed explanation box word-for-word against the staged transcription) plus `live15.js` text for
all four candidates.

---

### n8 (p.1773) — VERDICT: REPRINT of `pedep2-car-20`

**Candidates examined:** `OPTSET:pedep2-car-20` (options 1.000, stems 0.523, key 4/4) — fold target.
`OPTSET:pedhd-card-20` (options 1.000, stems 0.481, key 4/4, record only, cross-bank).

**Comparison.** n8: "A 3-day-old baby is deeply cyanotic with cool peripheries and unresponsive
saturations despite maximum oxygen. Femoral pulses are palpable, and a single loud second heart sound
is heard. What is the next most important intervention?" `pedep2-car-20`: "A mother on the postnatal
ward has urgently requested a medical review for her 3-day-old baby who appears blue. On arrival, the
baby is deeply cyanotic with cool peripheries and saturations not improving despite maximum oxygen
therapy. Femoral pulses are palpable and a single, loud second heart sound can be heard, but no
murmur. The baby is brought to the neonatal unit for further care. What is the next most important
intervention?" n8 is a condensed version dropping the referral framing, the explicit "no murmur," and
the disposition sentence, keeping every clinical finding. Same five options (IV furosemide / IV
antibiotics / IV NS bolus / IV dextrose bolus / IV PGE1) in the same order, same key index 4 (PGE1).
Key text unchanged. (Landed in the sweep's OPTSET arm on stem score alone; the option set, key and
clinical picture all agree, so it is judged here as a genuine reprint rather than a template match.)

**Fold shape:** reworded/condensed stem, clauses dropped, all clinical findings and the key preserved
(shape 6).

**House observation:** `pedhd-card-20`, record only.

**What was opened:** staged p.1773 transcription and `live15.js` text for both candidates.

---

### n9 (p.1775) — VERDICT: REPRINT of `pedep2-nd-19`

**Candidates examined:** `WITHIN:n51` (p.1862, sim 0.568, keys 1/1, opts 5/5) · `P2:pedep2-nd-19`
(sim 0.595, key 1/1) — fold target · `OPTSET:pedep2-nd-20` (key 3, **keys differ** from n9's key 1 —
this is the MENU pairing, not a fold candidate) · `OPTSET:pedep-mf3-13` (P1, stems 0.395, key 1/1,
**different clinical case**, see below) · `OPTSET:pedhd-dev-19` (key 1/1, record only) ·
`OPTSET:pedhd-dev-20` (**keys differ**, MENU pairing only) · `MENU:n10`.

**Comparison against `pedep2-nd-19`, verified on the page image (p.1775).** n9 as printed: "9. At a
routine consultation, a 12-month-old boy is cruising around furniture and saying 'mama' and 'papa'. He
only uses his left hand. What is the most likely finding?" B. Fine motor delay (key, highlighted).
`pedep2-nd-19`: "At a routine health visitor consultation, a 12-month-old boy is noticed to be cruising
around furniture, responding to his name and saying 'mama' and 'papa'. He is holding a crayon in his
left hand, and his father informs the health visitor that he only uses his left hand at home. What is
the most likely finding here?" Same age, same milestones, same left-hand-only finding; n9 drops "his
father informs the health visitor," "at home," "responding to his name" and the crayon detail. Same
five options (Gross motor / Fine motor / Speech and language / Play and social / Global delay) in the
same order, same key index 1 (Fine motor delay). Key text unchanged.

**Fold shape:** reworded/condensed stem (shape 6).

**Why `pedep-mf3-13` (P1) is NOT the fold target and not a reprint of n9.** Despite an identical
option list and the same key index, its stem describes a materially different clinical picture: "a
13-month-old boy… crossing arms in his left hand and dragging his left hand and synkinesis and spastic
gait… only uses his right side" — asymmetric tone, synkinesis and spastic gait are neurological
findings, not a benign hand preference. This is a different question wearing the same five-domain
menu, correctly caught by OPTSET and correctly dismissed on the stem.

**Why n9 does not fold with n10 (MENU).** n9 and n10 share the identical five-way delay-domain option
list, but describe different children with different findings and different keys (n9: 12-month-old,
isolated left-hand preference, key Fine motor; n10: 3-year-old, poor eye contact/repetitive
behaviour, key Play and social). PAIRED, not folded — each folds independently into its own P2 target.

**Handoff — within-section duplicate not mine to fold:** `n51` (p.1862, quarter C) reads, on inspection
during this pass (`dump15.js 51 51`), as a close paraphrase of `pedep2-nd-19` itself ("responding to his
mama," "holding something in his left hand" vs. "holding a crayon"). Recommend it fold into
`pedep2-nd-19` when quarter C is adjudicated, for the same reason as n57 above.

**House observation:** `pedhd-dev-19`, near-verbatim twin of `pedep2-nd-19`, record only.

**What was opened:** the p.1775 native JPEG, `dump15.js 51 51`, and `live15.js` text for all five
candidates.

---

### n10 (p.1777) — VERDICT: REPRINT of `pedep2-nd-20`

**Candidates examined:** `OPTSET:pedep2-nd-19` (**keys differ**, MENU pairing with n9, not a fold
candidate) · `OPTSET:pedep2-nd-20` (options 1.000, stems 0.385 — below the 0.55 auto-fold threshold,
hence routed to OPTSET rather than the (a) live-P2 block; key 3/3) — fold target, judged manually below
· `OPTSET:pedep-mf3-13` (**keys differ**, different case, see n9) · `OPTSET:pedhd-dev-19` (**keys
differ**, MENU family) · `OPTSET:pedhd-dev-20` (key 3/3, record only) · `MENU:n9`.

**Comparison against `pedep2-nd-20`, verified on the page image (p.1777).** n10 as printed: "10. A
3-year-old boy is referred due to developmental concerns. He walks up/down stairs and jumps with both
feet. He has poor eye contact, limited speech, and repetitive behaviors (e.g., opening and closing
drawers). What is the most likely delay?" D. Play and social delay (key, highlighted).
`pedep2-nd-20`: "A 3-year-old boy is referred to a community paediatrician with concerns regarding
development. At assessment, he is able to walk up and down stairs holding the railing and jumps with
both feet. The doctor observes poor eye contact and limited speech. The child is also repeatedly
opening and closing the drawers at the desk. What is the most likely finding here?" Same age, same
gross-motor description (stairs + jump), same poor eye contact, same limited speech, same repetitive
drawer-opening. n10's low string-similarity score (0.385) is a paraphrase artefact (the "(e.g., …)"
condensation reads very differently to a literal-overlap metric from the full sentence it compresses),
not a sign of a different case. Same five options in the same order, same key index 3 (Play and social
delay). Key text unchanged.

**Fold shape:** reworded/condensed stem (shape 6) — this is the OPTSET arm doing exactly the job it
is built for (catching a stem that paraphrased below the auto-fold threshold).

**MENU with n9:** see n9's entry — shares the domain menu, different case, correctly not merged.

**House observation:** `pedhd-dev-20`, near-verbatim twin of `pedep2-nd-20`, record only.

**What was opened:** the p.1777 native JPEG and `live15.js` text for `pedep2-nd-20` and `pedhd-dev-20`.

---

### n11 (p.1779) — VERDICT: REPRINT of `pedep2-end-15`

**Candidates examined:** `OPTSET:pedep2-end-15` (options 1.000, stems 0.519, key 1/1) — fold target.
`OPTSET:pedhd-endo-15` (options 1.000, stems 0.392, key 1/1, record only, cross-bank).

**Comparison.** n11: "A 14-year-old boy is admitted with diabetic ketoacidosis. After 12 hours of IV
insulin and 0.9% saline, blood glucose is 22 mmol/L. He has good urine output. Which serum value is
most likely decreased?" `pedep2-end-15`: "A 14-year-old boy with diabetic ketoacidosis is receiving IV
insulin (0.1 units/kg/h) and 0.9% saline. After 12 hours, his blood sugar is 22 mmol/L, and urine
output is good. Which serum value is most likely to be decreased?" Same age, same regimen, same
12-hour mark, same glucose 22 mmol/L, same "good urine output." n11 drops the insulin rate
(0.1 units/kg/h). Same five options (Sodium / Potassium / Lactate / Chloride / Calcium) in the same
order, same key index 1 (Serum potassium). Key text unchanged. (Note carried in `pedep2-end-15`'s own
explanation: the box text reasons about sodium dilution while the highlighted key is potassium — a
printed-source defect, staged as printed per brief, not something this adjudication disputes or
re-opens.)

**Fold shape:** reworded/condensed stem, one clause dropped (shape 6).

**House observation:** `pedhd-endo-15`, record only.

**What was opened:** staged p.1779 transcription (its own note flags the same box/key mismatch
independently) and `live15.js` text for both candidates.

---

### n12 (p.1781) — VERDICT: REPRINT of `pedep-gi-17` — **the target lives in endpoint PART 1**

**Candidates examined:** `OPTSET:pedep-gi-17` (P1, options 1.000, stems 0.496, key 2/2) — fold target.
`OPTSET:pedhd-gastro-17` (House, options 1.000, stems 0.492, key 2/2, record only). `MENU:n54`
(p.1869, quarter C, outside this range).

**Comparison against `pedep-gi-17`.** n12: "A 5-week-old boy presents with projectile vomiting for 48
hours. He is hungry after vomiting and hasn't opened bowels in 3 days. A mass is felt in the left upper
quadrant. Blood gas: pH 7.50, pCO2 5.5 kPa, HCO3 30 mmol/L. What does this blood gas indicate?"
`pedep-gi-17` (`Pediatrics endpoint part1.pdf p.447`): "A 5-week-old baby boy is brought to the
Emergency Department with a 48-hour history of projectile vomiting. The infant is hungry after
vomiting and has not opened his bowels in 3 days. Clinical examination reveals a mass in the left upper
quadrant. A blood gas is performed: pH 7.50, pCO2 5.5 kPa, and bicarbonate 30 mmol/L. What does this
blood gas represent?" Identical age, identical history, identical **left** upper quadrant mass location,
identical three gas values. Same five options (Normal / Metabolic acidosis / Metabolic alkalosis /
Respiratory acidosis / Respiratory alkalosis) in the same order, same key index 2 (Metabolic
alkalosis). Key text unchanged.

**Fold shape:** respelled/condensed reprint (shapes 2/6). Because this is a part-1/part-2 match, per
brief it is WITHIN-bank (both carry `bank:'endpoint'`) and **folds as a citation appended to the
part-1 entry** — `pedep-gi-17` is the id to cite, and it explicitly needs to be recorded that this
target lives in **endpoint part 1**, not part 2. `pedep-gi-17`'s own `source` field already records a
second printing in Model Final Exam 3 (p.1489, right-upper-quadrant version, values withheld); n12
(this section, p.1781, left-upper-quadrant, values given) is a further printing to add to that chain.

**Handoff — within-section, out-of-scope observation:** `n54` (p.1869, quarter C, flagged via `MENU`)
reads, on inspection during this pass (`dump15.js 54 54`), as the same vignette with the mass moved to
the **right** upper quadrant — a light re-skin (mass side changed) of the same underlying question,
consistent with this exam's house style of trivial re-skins. Recommend that when quarter C is
adjudicated, n54 is checked against `pedep-gi-17` (and its p.1489 RUQ/values-withheld reprint) as a
probable further reprint, not treated as a fresh question purely because the option ladder is shared.

**House observation:** `pedhd-gastro-17` (`pediatric .pdf p.86`), same LUQ location, record only —
never folded, this is another chat's live file.

**What was opened:** staged p.1781 transcription, `dump15.js 54 54`, and `live15.js` text for
`pedep-gi-17` and `pedhd-gastro-17`.

---

### n13 (p.1783) — VERDICT: REPRINT of `pedep2-car-21`

**Candidates examined:** `P2:pedep2-car-21` (sim 1.000, key 2/2) — fold target. `HOUSE:pedhd-card-21`
(sim 1.000, record only, cross-bank).

**Comparison.** n13 and `pedep2-car-21` are word-for-word identical: 3-year-old girl with complex
congenital heart disease, fever, temperature 39.5°C, loud ejection systolic murmur, CRP 250 mg/L,
transthoracic echo confirms vegetations, most likely pathogen. Same five options (S. pneumoniae /
S. pyogenes / S. viridans / Group A strep / Group B strep) in the same order, same key index 2
(Streptococcus viridans). Key text unchanged.

**Fold shape:** exact reprint (shape 1). `pedep2-car-21`'s own `source` field already records a second
printing in Model Final Exam 3 (p.1669, stripped of the vignette, bare-question form); n13 is a third
printing, full vignette, to add to that chain.

**House observation:** `pedhd-card-21`, sim 1.000, essentially a verbatim cross-bank twin, record only
(the House entry separately flags an internal defect — options B and D are the same organism under two
names — irrelevant to this fold since neither is the key).

**What was opened:** staged p.1783 transcription and `live15.js` text for both candidates.

---

### n14 (p.1785) — VERDICT: REPRINT of `pedep2-car-22`

**Candidates examined:** `P2:pedep2-car-22` (sim 0.976, key 4/4) — fold target. `HOUSE:pedhd-card-22`
(sim not separately shown for n14, key 4/4, record only, cross-bank). `OPTSET:pedep2-car-18`,
`pedep2-car-24`, `pedhd-card-18`, `pedhd-card-24` — dismissed as the separate five-lesion cardiac
clue-table cluster (same family as n2/n8), not this vignette.

**Comparison.** Both: 36-hour-old baby, discharge check, antenatal serology incomplete (mother
declined testing), symmetrically growth-restricted, red reflexes bilaterally absent, heart murmur,
femoral pulses palpable, pink and otherwise well; echo most likely to show. Same five options
(VSD / CoA / ASD / ToF / PDA) in the same order, same key index 4 (PDA). Key text unchanged.

**No explanation box on this page — already measured and independently reconfirmed here.** Per the
staged note, p.1785 prints no box; the staging agent checked p.1786 for overflow and found it is
instead the unanswered twin of n15 (matching n15's stem, no highlight) — confirming n14 genuinely
prints no box. This does not affect the fold call, since `pedep2-car-22` supplies its own printed box.

**Fold shape:** near-exact reprint (shape 1/4 — same question, this printing simply carries no box).

**House observation:** `pedhd-card-22`, record only — its box separately documents the rubella/Gregg's
triad reasoning that also underlies this key.

**What was opened:** staged p.1785 transcription (including its p.1786 overflow check) and `live15.js`
text for `pedep2-car-22` and `pedhd-card-22`.

---

### n15 (p.1787) — VERDICT: NOT A REPRINT

**Candidates examined:** none. `cand15-A.txt` line 15 reads "(no candidate produced)." Confirmed
independently: `grep -n "n15 " sw15.txt` returns no hits in any sweep block.

**Content.** 3-month-old female infant, 2-day coryzal history, increased work of breathing, two wet
nappies/24h, taking half feeds, HR 150, RR 60, sats 96% in air, alert/well-perfused/slight recession,
consistent with bronchiolitis — key: admit and give nasogastric feeds. This is the **answered twin** of
the unanswered p.1786 page noted while checking n14's missing box (same stem, this page carries the
highlight and the box, p.1786 does not) — that relationship is already fully accounted for in n14's
entry and is not a separate reprint of anything live; it is simply how this book prints a
question/no-question pair across a page break. No P2, P1, House, WITHIN or MENU candidate exists for
this bronchiolitis-management vignette anywhere in the sweep.

**What was checked:** the staged p.1787 transcription (its own note ties it explicitly to the p.1786
twin found during the n14 check) and a direct grep of the full sweep output for any mention of n15.

---

### n16 (p.1789, box p.1790) — VERDICT: REPRINT of `pedep2-res-21`

**Candidates examined:** `P2:pedep2-res-21` (sim 0.677, key 4/4) — fold target. `HOUSE:pedhd-resp-22`
(sim 0.962, record only, cross-bank).

**Comparison.** Both: 4-year-old girl, outpatient asthma review, preventer 200 micrograms BD, reliever
roughly fortnightly, escalated to every-other-day use over 3 months, new nocturnal cough disturbing
sleep, next step. Same five options (continue same dose / increase to 400 mcg BD / oral steroid course
/ oral theophylline / add LABA) in the same order, same key index 4 (Add a LABA). Key text unchanged.

**Box location, already measured and reconfirmed here.** p.1789 prints stem and options with no box;
the box is printed alone on p.1790, as already established in the task brief and independently
reconfirmed in the staged transcription. The box text on p.1790 matches `pedep2-res-21`'s stepwise-ladder
reasoning (low-dose ICS → add-on LABA at step 3) closely enough to be recognisably the same teaching,
though the box itself is `pedep2-res-21`'s to carry, per the endpoint file's own printed explanation.

**Fold shape:** reworded/condensed stem (shape 6).

**House observation:** `pedhd-resp-22`, near-verbatim twin, record only.

**What was opened:** staged p.1789/p.1790 transcription and `live15.js` text for both candidates.

---

### n17 (p.1792) — VERDICT: REPRINT of `pedep2-res-22`

**Candidates examined:** `WITHIN:n60` (p.1881, sim 0.708, keys 0/0, opts 5/5) · `P2:pedep2-res-22`
(sim 0.774, key 0/0) — fold target · `HOUSE:pedhd-resp-23` (sim 0.963, record only).

**Comparison against `pedep2-res-22`.** Both: 3-year-old girl, 3-day coryzal history then acute
breathing difficulty, previously fit and well apart from mild eczema, non-smoking parents, thriving,
widespread wheeze with no crepitations, most likely diagnosis. Same five options (Viral wheeze /
Asthma / Heart failure / Bronchiolitis / Recurrent aspiration) in the same order, same key index 0
(Viral wheeze). Key text unchanged.

**Fold shape:** near-exact reprint (shape 1/2).

**Handoff — within-section duplicate not mine to fold:** `n60` (p.1881, quarter C, "LAST ENTRY OF
QUARTER C" per its own staged note) reads, on inspection during this pass (`dump15.js 60 60`), as the
same vignette **re-skinned**: age changed 3→2, and "apart from mild eczema" replaced with an explicit
negative, "no history of atopic disorders" — exactly the exam's documented re-skin house style (age
changed, one clause swapped for a negative), still a reprint per the brief's standing rule. Recommend
n60 fold into `pedep2-res-22` when quarter C is adjudicated.

**House observation:** `pedhd-resp-23`, near-verbatim twin, record only.

**What was opened:** staged p.1792 transcription, `dump15.js 60 60`, and `live15.js` text for
`pedep2-res-22` and `pedhd-resp-23`.

---

### n18 (p.1794) — VERDICT: REPRINT of `pedep2-res-25`

**Candidates examined:** `WITHIN:n59` (p.1879, sim 0.857, keys 3/3, opts 5/5) · `P2:pedep2-res-25`
(sim 0.946, key 3/3) — fold target · `HOUSE:pedhd-resp-26` (sim 0.959, record only).

**Age discrepancy verified on the page image (p.1794).** n18 prints "18. A **3-year-old** boy with
known asthma has been brought in by ambulance…" — confirmed directly on the native JPEG, not a
transcription slip. `pedep2-res-25` and `pedhd-resp-26` both print this as a **6-year-old** boy. Every
other clause is otherwise identical or near-identical: already received salbutamol and ipratropium
nebulisers plus IV steroid, exhausted with varying responsiveness, "Fifteen litres of oxygen" (spelled
out, matches exactly) needed to maintain saturations, minimal breath sounds on auscultation, next step.
Same five options (reassess 30 min / IV antibiotics / CXR / IV salbutamol / admit to ward) in the same
order, same key index 3 (IV salbutamol). Key text unchanged.

**Fold shape:** house-style light re-skin — age changed 6→3, everything else unchanged (this is the
brief's documented "one age changed… still a reprint" pattern, not a different case). REPRINT of
`pedep2-res-25`.

**Handoff — within-section duplicate not mine to fold:** `n59` (p.1879, quarter C) reads, on inspection
during this pass (`dump15.js 59 59`), as the same vignette at age 6 (matching `pedep2-res-25`/
`pedhd-resp-26`'s age), with "High-flow oxygen" in place of "Fifteen litres of oxygen" and one option
reworded ("Give high dose inhaled steroids" / "Give inhaled long-acting beta agonist" replacing options
C/E). Recommend n59 be checked against `pedep2-res-25` directly when quarter C is adjudicated — it may
be closer to that live entry than to n18, given n18 is itself the outlier on age.

**House observation:** `pedhd-resp-26`, near-verbatim 6-year-old twin, record only.

**What was opened:** the p.1794 native JPEG (to settle the age), `dump15.js 59 59`, and `live15.js`
text for `pedep2-res-25` and `pedhd-resp-26`.

---

### n19 (p.1796) — VERDICT: NOT A REPRINT

**Candidates examined:** `HOUSE:pedhd-inf-21` (sim 0.931, record only) only. No P2, P1 or WITHIN
candidate was produced.

**Comparison.** n19's stem (24-month-old girl, fever, temperature 38.7°C at triage, normal other vital
signs, antipyretics given, reviewed 90 minutes later, temperature now 37.7°C, well-hydrated and
clinically well with good social interaction, no localising features/source, next step: urine
dipstick) matches `pedhd-inf-21` almost word for word, down to both temperatures and the 90-minute
interval.

**Fold shape / ruling.** Cross-bank match only (`pedhd-inf-21`, House, chapter infection,
`pediatric .pdf p.10`, Part I ch.1 Q21). Per brief, recorded only, never folded. No P2 or P1 live entry
and no other n inside section 15 prints this vignette, so NOT A REPRINT stands for fold purposes.

**House observation:** `pedhd-inf-21`, sim 0.931, near-verbatim cross-bank twin.

**What was opened:** staged p.1796 transcription (note confirms all four numerals legible) and
`live15.js` text for `pedhd-inf-21`.

---

### n20 (p.1798) — VERDICT: REPRINT of `pedep2-res-23`

**Candidates examined:** `P2:pedep2-res-23` (sim 0.938, key 0/0) — fold target. `HOUSE:pedhd-resp-24`
(sim 0.938, record only, cross-bank).

**Comparison.** n20 and `pedep2-res-23` are word-for-word identical: 4-year-old girl, fever, difficulty
breathing, cough, diagnosis of left lower lobe pneumonia already made, IV antibiotics started, most
likely pathogen. Same five options (S. pneumoniae / H. influenzae / M. pneumoniae / C. trachomatis /
E. coli) in the same order, same key index 0 (S. pneumoniae). Key text unchanged. Option E prints as
the abbreviated "E. coli" on both — a genuine option, not a list-letter artefact, per the staged note's
cross-check against the unanswered twin.

**Fold shape:** exact reprint (shape 1). `pedep2-res-23`'s own `source` field already records a second
printing in Model Final Exam 1 (p.1406, right lower lobe, examination-findings framing rather than a
stated diagnosis); n20 is a third printing, left lower lobe, diagnosis-stated framing, to add to that
chain.

**House observation:** `pedhd-resp-24`, sim 0.938, essentially a verbatim cross-bank twin, record only.

**What was opened:** staged p.1798 transcription and `live15.js` text for both candidates.

---

## Count across n1–n20

- **REPRINT: 16** — n2, n4, n5, n6, n7, n8, n9, n10, n11, n12, n13, n14, n16, n17, n18, n20.
  15 fold into endpoint part 2 (`pedep2-car-18`, `pedep2-mf1-51`, `pedep2-end-13`, `pedep2-end-14`,
  `pedep2-gen-24`, `pedep2-car-20`, `pedep2-nd-19`, `pedep2-nd-20`, `pedep2-end-15`, `pedep2-car-21`,
  `pedep2-car-22`, `pedep2-res-21`, `pedep2-res-22`, `pedep2-res-25`, `pedep2-res-23`). 1 (n12) folds
  into endpoint **part 1** (`pedep-gi-17`).
- **NOT A REPRINT: 4** — n1, n3, n15, n19. Of these, n1 and n19 have near-verbatim House-bank twins
  (`pedhd-emg-18`, `pedhd-inf-21`), recorded as observations only. n3 and n15 have no candidate in any
  pool at all, verified by direct grep of the sweep output.
- **PAIRED (as a primary verdict): 0.** n9/n10 share a domain-menu with each other and n7 shares 4/5
  options with the separate `pedep2-gen-17`/`pedhd-gen-5` pair, but in every case the discriminating
  clinical picture is named and each entry folds independently — no entry in this quarter is left with
  nothing but a shared menu.

**Every House observation recorded:** `pedhd-emg-18` (n1) · `pedhd-card-18` (n2) · `pedhd-inf-17` (n4)
· `pedhd-endo-13` (n5) · `pedhd-endo-14` (n6) · `pedhd-gen-15` (n7) · `pedhd-card-20` (n8) ·
`pedhd-dev-19` (n9) · `pedhd-dev-20` (n10) · `pedhd-endo-15` (n11) · `pedhd-gastro-17` (n12) ·
`pedhd-card-21` (n13) · `pedhd-card-22` (n14) · `pedhd-resp-22` (n16) · `pedhd-resp-23` (n17) ·
`pedhd-resp-26` (n18) · `pedhd-inf-21` (n19) · `pedhd-resp-24` (n20). None folded, none proposed for
folding — all are another chat's live file.

**Places the candidate generator was silent where something was found anyway:** none within n1–n20
itself (n3 and n15 were checked and confirmed to genuinely have nothing). The generator-silent findings
in this pass are all in the **handoff notes for quarter C**, found only because this range's WITHIN/MENU
hits pointed there: `n51`, `n57`, `n59` and `n60` (already flagged by the generator as WITHIN hits, but
their own best fold target was worked out here to be the P2 entries n4/n9 themselves already fold into,
not each other) and `n54` (flagged only via MENU, worth checking against `pedep-gi-17` in part 1 when
quarter C is adjudicated, since it looks like a right-upper-quadrant re-skin of n12's own case).

**Entries I could not settle:** none. All 20 carry a reasoned verdict.
