# Peds endpoint part 2, section 15 ("Model Final Exam 4") — fold adjudication, quarter B (n21–n40)

Summary: of the 20 entries in this quarter, **16 are REPRINT** (all fold within this stream's own live
file `questions.peds.ep2.js`, i.e. into other `pedep2-*` entries — none folds into part 1 and none
folds into House), **4 are NOT A REPRINT** (n21, n25, n34, n36), **0 are PAIRED** as a primary verdict
(two option-set matches — n26/`pedep2-mf3-1` and n30/`pedep2-mf1-77` — are shared-menu pairs noted as
dismissed candidates inside a REPRINT entry, not separate n's needing their own verdict). Every one of
the 16 reprints also has an exact or near-exact match in the live House file; every one is recorded as
a cross-bank observation and none of them folds — House stays untouched. The templated families that
generated false pairs in this range: (1) the five-way microcytic/haemolytic-anaemia differential
option ladder (Sickle cell / Hereditary spherocytosis or Thalassaemia / G6PD / Iron deficiency, in
varying order) recurs across n26, n30, n32, n33 and reappears as `pedep2-mf1-77` and `pedep2-mf3-1`
with different clinical vignettes keying different members of the same ladder — never folds across
vignettes; (2) the developmental-milestone "which of the following is/is not a concern/delay" stem
template (n25) recurs with entirely different option content each time it is used and never folds on
template alone.

---

### n21 (p.1800) — VERDICT: NOT A REPRINT
Candidates examined: none — `cand15-B.txt` line 1 records no candidate, and a direct grep of
`sw15.txt` for `n21` returns nothing in any of the five arms (within-section, live P2, live P1, live
House, option-set). Checked what that silence means rather than trusting it: the stem is a specific
deteriorating-bronchiolitis vignette with an arterial blood gas (pH 7.30, pCO2 7.8 kPa) driving a
"next step in management" question keyed to CPAP — a different question shape from every other
bronchiolitis entry in this quarter (n22 is a bare feature-recognition question). Nothing in this
quarter or the sweep's other pools shares this vignette or this key. Opened `p1800.jpeg` only via the
staged transcription (already confirmed "read directly off native JPEG, fully legible" in the dump);
no independent re-render needed given the total absence of any candidate to compare against.
Satisfied this is a genuinely novel question in this quarter.

### n22 (p.1802) — VERDICT: REPRINT of `pedep2-res-26`
Candidates examined: `P2:pedep2-res-26` (sim 1.000, key 4/4 — accepted) and `HOUSE:pedhd-resp-27`
(sim 1.000, key 4/4 — cross-bank, recorded only). Fold shape: exact reprint — stem, all five options
("Tachypnoea / Apnoea / Wheeze / Fine crackles / Paroxysmal cough") and key (E, Paroxysmal cough) are
word-for-word identical between the staged text and the live `pedep2-res-26` entry. Key text and key
index both unchanged. Decided from the transcribed text alone (both sides independently read "off
native JPEG, fully legible" per their own NOTE fields); no further image needed given a 1.000 stem
similarity plus a hand line-by-line compare turning up zero differences.
**House observation:** `pedhd-resp-27` prints the identical stem and options — recorded, not folded.

### n23 (p.1804) — VERDICT: REPRINT of `pedep2-res-24`
Candidates examined: `P2:pedep2-res-24` (sim 1.000, key 1/1 — accepted) and `HOUSE:pedhd-resp-25`
(sim 1.000, key 1/1 — cross-bank, recorded only). Fold shape: exact reprint. The trisomy-21 /
conductive-hearing-loss vignette, all five options, and the key (B, Otitis media with effusion) match
the live `pedep2-res-24` entry exactly, including the punctuation. Key text and index both unchanged.
**House observation:** `pedhd-resp-25` prints the same stem, options and key — recorded, not folded.

### n24 (p.1806) — VERDICT: REPRINT of `pedep2-mf1-67`
Candidates examined: `P2:pedep2-mf1-67` (sim 1.000, key 0/0 — accepted). No House candidate was
produced for n24 by the generator, and a check of `sw15.txt`'s House arm confirms n24 is genuinely
absent from it — checked and satisfied there is no cross-bank sibling to record here, unlike every
neighbouring n in this quarter. Fold shape: exact reprint. The 10-year-old-boy empyema-after-pneumonia
vignette, all five options and the key (A, Empyema) match `pedep2-mf1-67` exactly. Key text and index
unchanged.

### n25 (p.1808) — VERDICT: NOT A REPRINT
Candidates examined: `P2:pedep2-mf2-1` (sim 0.800, **KEYS DIFFER**: staged key 2 / mf2-1's answer 4)
and `HOUSE:pedhd-dev-21` (sim 1.000, key 2/2 — cross-bank, recorded only). The P2 candidate shares this
quarter's developmental-milestone template ("which of the following is/is not a
concern/delay" over a five-item list of ages and milestones) but is a different question on inspection:
n25's five options are visual fixing at 5 weeks / sitting at 7 months / single words at 16 months /
walking at 17 months / copying a line at 24 months, keyed to "not using single words at 16 months";
`pedep2-mf2-1`'s five options are following objects at 4 weeks / sitting at 5 months / walking at 12
months / crawling at 6 months / head control at 6 months, keyed to "poor head control at 6 months" —
no option and no key is shared between the two. This is the templated-stem trap the sweep is built to
flag and not fold: same framing, disjoint content, ruled NOT A REPRINT of the P2 pool.
**House observation:** `pedhd-dev-21` prints n25's exact stem, all five options and the same key
(C, "Not using single words at 16 months") — this is the true cross-bank twin, and per rule it is
recorded only, never folded, even though it is the closer match than the dismissed P2 candidate.
Also recorded: n25 carries a printed discrepancy already flagged in the staged transcription — option
C reads "16 months" while the explanation box says "15 months" — recorded as printed, not disputed,
matching the identical discrepancy printed in `pedhd-dev-21`'s own source page.

### n26 (p.1810) — VERDICT: REPRINT of `pedep2-hem-38`
Candidates examined: `P2:pedep2-hem-38` (sim 0.877, key 2/2 — accepted), `HOUSE:pedhd-haem-17`
(sim 1.000, key 2/2 — cross-bank, recorded only), and `OPTSET:pedep2-mf3-1` (options match, stems do
not — examined and dismissed as a PAIR, not a fold). Fold shape: near-exact/respelled reprint — the
11-month-old Caucasian boy on cow's-milk weaning, Hb 7.8 g/dL, MCV 69 fL, four-option ladder (no
folate option) and key (C, Iron deficiency anemia) match `pedep2-hem-38` with only cosmetic wording
differences ("will drink" phrasing, apostrophe style). Key text and index unchanged.
**House observation:** `pedhd-haem-17` prints the same case (five options there, including folate) and
the same key — recorded, not folded.
**Dismissed pair, not folded:** `pedep2-mf3-1` shares this quarter's MCV-69/no-hepatosplenomegaly
finding and the same key (Iron deficiency anemia) over a five-option menu holding the same diagnoses,
but keys a different patient entirely — a 12-year-old boy with fatigue and poor concentration, no
feeding history, no age given as an infant. `pedep2-mf3-1`'s own live explanation already states
in its own text that "the two are not the same question." Discriminating token: infant + cow's-milk
diet (n26/`pedep2-hem-38`) vs 12-year-old + fatigue/concentration (`pedep2-mf3-1`) — this is a shared
option-ladder template, not a reprint, and it is not this n's fold target.

### n27 (p.1812) — VERDICT: REPRINT of `pedep2-ren-19`
Candidates examined: `HOUSE:pedhd-renal-19` (sim 1.000, key 4/4 — cross-bank, recorded only) and
`OPTSET:pedep2-ren-19` (options 1.000, stems 0.487 below the whole-stem threshold, key 4/4 — accepted
after opening the page). Opened `p1812.jpeg`: staged text confirmed verbatim — "A 4-year-old boy
presents with pain in his abdomen and joints for the past 24 hours. He is afebrile... A widespread
purpuric rash is present over the legs and buttocks. A urine dip shows 2+ blood. Routine bloods are
normal," options A–E in the order ITP / Meningococcal sepsis / ALL / Vitamin C deficiency (scurvy) /
**Henoch–Schönlein purpura** (key E, highlighted). This is the same clinical case as the live
`pedep2-ren-19` (which reads "a 24-hour history of abdominal and joint pain... Examination reveals
diffuse abdominal tenderness without masses, lymphadenopathy, or hepatosplenomegaly. A widespread
purpuric rash is noted over the legs and buttocks. Urine dipstick shows 2+ blood. Routine blood tests
are normal" over the identical five options and the identical key) — fold shape 2, reworded stem, same
patient, same option ladder, same key text and index. This is why the automatic stem-similarity score
landed below threshold even though the case is identical: the rewording is heavier here than in most
of this quarter's reprints, and only the option-set arm caught it — exactly the trap this arm exists
for. Key text and index unchanged.
**House observation:** `pedhd-renal-19` is, word for word, an even closer match to n27's own printed
wording than `pedep2-ren-19` is ("pain in his abdomen and joints for the past 24 hours... Routine
bloods are normal" — nearly identical punctuation to n27) — recorded as the closer cross-bank twin,
but per rule it is never the fold target; the within-bank `pedep2-ren-19` is.

### n28 (p.1814) — VERDICT: REPRINT of `pedep2-hem-39`
Candidates examined: `P2:pedep2-hem-39` (sim 0.667, key 2/2 — accepted) and `HOUSE:pedhd-haem-18`
(sim 0.740, key 2/2 — cross-bank, recorded only). Fold shape: reworded stem — the 3-year-old
Afro-Caribbean girl with hand/abdominal pain, jaundice and hepatosplenomegaly, the same Hb 6.1/MCV
78/WCC 6.0/platelets 300 values, the same five-option ladder and the same key (C, Sickle cell disease)
match `pedep2-hem-39`, whose own citation already records the Model Final Exam 3 re-skin (age changed
to 8, ethnicity dropped, MCV re-annotated, units changed) as a separate reprint of itself — n28 is the
p.347 printing essentially verbatim, not that re-skin. Key text and index unchanged.
**House observation:** `pedhd-haem-18` prints the same case and key — recorded, not folded.

### n29 (p.1816) — VERDICT: REPRINT of `pedep2-hem-40`
Candidates examined: `P2:pedep2-hem-40` (sim 0.974, key 3/3 — accepted) and `HOUSE:pedhd-haem-19`
(sim 0.909, key 3/3 — cross-bank, recorded only). Fold shape: near-exact reprint — the 9-year-old girl
with known sickle cell disease, coryzal prodrome, lacy rash, and pancytopenic FBC (Hb 5.9/WCC 1.0/
platelets 50) match `pedep2-hem-40` word for word, five options in the same order, key D (Parvovirus
B19 infection) unchanged in text and index.
**House observation:** `pedhd-haem-19` prints the same case and key — recorded, not folded.

### n30 (p.1818) — VERDICT: REPRINT of `pedep2-hem-41`
Candidates examined: `P2:pedep2-hem-41` (sim 0.973, key 2/2 — accepted as the fold target),
`P2:pedep2-mf1-61` (sim 0.576, key 2/2 — examined, a separate already-existing sibling re-skin of the
same underlying case, not this n's fold target), `HOUSE:pedhd-haem-20` (sim 0.940, key 2/2 —
cross-bank, recorded only), and `OPTSET:pedep2-mf1-77` (options match, stems do not — examined and
dismissed as a PAIR). Fold shape: exact/respelled reprint — the 8-month-old Greek-Cypriot girl,
25th-to-below-2nd-centile fall, hepatosplenomegaly, frontal bossing, microcytic hypochromic anaemia,
and the five-option ladder match `pedep2-hem-41` with only a single "sclera"/"sclerae" spelling
difference. Key text and index (C, Thalassaemia major) unchanged.
**House observation:** `pedhd-haem-20` prints the same case and key — recorded, not folded.
**Dismissed pair, not folded:** `pedep2-mf1-77` shares this quarter's five-diagnosis anaemia ladder
(Sickle cell / Hereditary spherocytosis / Thalassaemia / G6PD / Iron deficiency, reordered) but keys a
completely different vignette — a 7-year-old boy jaundiced after primaquine for malaria, keyed to G6PD
deficiency. Discriminating token: Greek-Cypriot infant with faltering growth and bossing (n30/
`pedep2-hem-41`) vs West African boy on primaquine with bite cells/Heinz bodies (`pedep2-mf1-77`) —
a shared option-ladder template, not a reprint.
**Not the fold target, but noted:** the live `pedep2-mf1-61` is itself a lighter re-skin of this same
underlying case (no ethnicity named, "poor weight gain" rather than "not growing well," no centile
detail) already sitting in the pool as its own entry — n30 is not a reprint of that lighter re-skin,
it is the fuller Greek-Cypriot printing that `pedep2-hem-41` already holds.

### n31 (p.1820, box p.1821) — VERDICT: REPRINT of `pedep2-mf3-10`
Candidates examined: `P2:pedep2-mf3-10` (sim 0.811, key 2/2 — accepted) and `HOUSE:pedhd-haem-22`
(sim 0.925, key 2/2 — cross-bank, recorded only). Opened `p1820.jpeg` to settle the Hb value: confirmed
the page reads "Hb 10.4 g/dL, WCC 13 × 10⁹/L, platelet count 15 × 10⁹/L" (the last phrase printed in
red ink), and petechiae are listed on "his chest, legs, and abdomen." The live `pedep2-mf3-10` gives
the same nosebleed/viral-URTI/petechiae vignette and the same key (C, ITP) over the same five options,
but its own printed Hb is **14 g/dL, not 10.4**, and its petechiae list is "chest and abdomen," dropping
"legs." This is the exam's light re-skin house style (one lab value changed, one item added to a
finding) rather than a different question — same patient age, same trigger, same option ladder, same
key text and index. Recorded, not reconciled: the Hb and the petechiae-site list differ between the two
printings.
**House observation:** `pedhd-haem-22` is, number for number and word for word, an even closer match to
n31's own printed text than `pedep2-mf3-10` is (Hb 10.4, WCC 13 × 10⁹/L, platelets 15 × 10⁹/L, "chest,
legs and abdomen" — all matching n31 exactly) — recorded as the closer cross-bank twin, but per rule
never the fold target; the within-bank `pedep2-mf3-10` is.

### n32 (p.1823) — VERDICT: REPRINT of `pedep2-hem-44`
Candidates examined: `HOUSE:pedhd-haem-23` (sim 0.930, key 0/0 — cross-bank, recorded only) and
`OPTSET:pedep2-hem-44` (options 0.750, stems 0.435 below threshold, key 0/0 — accepted after opening
the page). Opened `p1823.jpeg`: confirmed only four options are printed (A–D, no fifth option, matching
the transcription's own note), key A ("Glucose-6-phosphate dehydrogenase deficiency (G6PD)")
highlighted. The 7-year-old Ghanaian boy on primaquine after malaria, with Hb 5.5 g/dL, WCC 15 × 10⁹/L,
platelets 200 × 10⁹/L, and a bite-cell/Heinz-body film, over the same four-option ladder in the same
order, matches the live `pedep2-hem-44` exactly bar cosmetic rewording of the opening sentence ("3 days
ago on his return" vs "3 days after returning"). Fold shape: reworded stem — this is the shape the
option-set arm exists to catch, since the heavy paraphrase pushed whole-stem similarity below the fold
threshold even though the case, options and key are identical. Key text and index unchanged.
**House observation:** `pedhd-haem-23` is closer in wording to n32's own text than `pedep2-hem-44` is —
recorded, but per rule never the fold target.

### n33 (p.1825) — VERDICT: REPRINT of `pedep2-hem-45`
Candidates examined: `P2:pedep2-hem-45` (sim 0.860, key 4/4 — accepted) and `HOUSE:pedhd-haem-24`
(sim 0.813, key 4/4 — cross-bank, recorded only). Fold shape: near-exact reprint — the 4-year-old girl
on chemotherapy for ALL, portacath in situ, fever 8 days post-treatment, FBC (WCC 1.0/neutrophils 0.4/
platelets 100/Hb 10), five options in the same order, and key E (Intravenous antibiotics) match
`pedep2-hem-45` word for word bar a trivial option wording difference ("Packed red blood cell
transfusion" vs "Packed red cell transfusion," "Administration of G-CSF" vs "G-CSF administration" —
same meaning, reworded). Key text and index unchanged.
**House observation:** `pedhd-haem-24` prints the same case and key — recorded, not folded.

### n34 (p.1827, box p.1828) — VERDICT: NOT A REPRINT
Candidates examined: `HOUSE:pedhd-mal-19` (sim 1.000, key 3/3 — cross-bank only). No P2 or P1 candidate
was produced by the generator for n34, and a direct check of `sw15.txt`'s live-P2, live-P1 and
option-set arms confirms n34 is genuinely absent from all three — this entry has no within-bank sibling
anywhere in this stream, unlike almost every other n in this quarter. Opened `p1827.jpeg` to be certain
nothing was missed: confirmed the ALL-prognostic-factor stem, five options (WCC >50×10⁹/L / age >10 /
age <1 / **Non-B cell or non-T cell leukaemia** (key D, highlighted) / Philadelphia chromosome
translocation), matching the transcription exactly. This is, word for word, the same question House
prints as `pedhd-mal-19` — but since House is cross-bank and this stream carries no other printing of
it anywhere in part 1 or part 2, there is no within-bank fold target and the rule against folding House
is decisive here: **NOT A REPRINT** for this stream's purposes.
**House observation:** `pedhd-mal-19` prints the identical stem, options (its option D reads "Non-B
cell, non-T cell leukaemia," a comma where this printing has "or" — cosmetic) and key — recorded, not
folded, and not something this entry can fold into for lack of any endpoint-pool sibling.

### n35 (p.1830) — VERDICT: REPRINT of `pedep2-mal-21`
Candidates examined: `HOUSE:pedhd-mal-21` (sim 1.000, key 2/2 — cross-bank, recorded only) and
`OPTSET:pedep2-mal-21` (options 1.000, stems 0.450 below threshold, key 2/2 — accepted after opening
the page). Opened `p1830.jpeg`: confirmed n35 carries the full opening sentence "Brain tumors are the
most common solid tumor of childhood, and presentation may be insidious, leading to late diagnosis"
before the question proper, five options in the same order, key C (Astrocytomas carry poor prognosis)
highlighted, box text present on the same page. The live `pedep2-mal-21` is the **abbreviated stub** of
this exact question — its own stem is only "Which of the following statements about brain tumours in
childhood is true?", missing n35's opening context sentence entirely — while sharing the identical five
options, key text and key index. Fold shape: reprint abbreviated to a stub, this time in the direction
of n35 being the fuller printing and the existing live entry being the stub; this is exactly the shape
the option-set arm exists to catch (stem similarity 0.450, well under threshold, options a perfect
1.000). Key text and index unchanged.
**House observation:** `pedhd-mal-21` carries the fuller wording, matching n35's opening sentence almost
verbatim ("Brain tumours are the most common solid tumour of childhood and presentation may be
insidious leading to late diagnosis") — recorded as the closer cross-bank twin, but never the fold
target; the within-bank `pedep2-mal-21` is, regardless of which printing is fuller.

### n36 (p.1832, printed "37") — VERDICT: NOT A REPRINT
Candidates examined: none — `cand15-B.txt` line 16 records no candidate, and a grep of `sw15.txt` for
`n36` returns nothing in any arm. The stem is an 11-year-old girl with pneumonia developing hyponatraemia
(Na 127) with low plasma osmolality and raised urinary sodium, keyed to SIADH — a distinct vignette
from anything else in this quarter or flagged elsewhere in the sweep. Also recorded here, matching the
brief's own flagged defect: this page prints "37." though it is n36 in section order — the printed
numbering skips 36 entirely, and n stays sequential per the brief's own instruction; this offset does
not affect the fold search, since the generator and the sweep both key on rendered page and section
order (n), not on the book's own defective printed number. Satisfied this is a genuinely novel question.

### n37 (p.1834, printed "38") — VERDICT: REPRINT of `pedep2-ren-20`
Candidates examined: `P2:pedep2-ren-20` (sim 0.800, key 0/0 — accepted) and `HOUSE:pedhd-renal-20`
(sim 0.969, key 0/0 — cross-bank, recorded only). Fold shape: reworded stem — the 9-year-old girl with
haematuria after tonsillitis, peripheral oedema, hypertension, no abdominal mass, positive dipstick
blood and protein, five options in the same order, and key A (Post-streptococcal glomerulonephritis)
match `pedep2-ren-20`, whose own citation already records a Model Final Exam 1 reprint of itself adding
a latency detail — n37 is the p.858 printing itself, reworded lightly ("She is usually fit and well but
was treated for tonsillitis last week" vs "...but was treated for tonsillitis last week by her GP").
Key text and index unchanged.
**House observation:** `pedhd-renal-20` prints the same case and key — recorded, not folded.

### n38 (p.1836, printed "39") — VERDICT: REPRINT of `pedep2-ren-21`
Candidates examined: `P2:pedep2-ren-21` (sim 1.000, key 3/3 — accepted) and `HOUSE:pedhd-renal-21`
(sim 1.000, key 3/3 — cross-bank, recorded only). Fold shape: exact reprint — the 7-year-old girl with
facial/leg oedema, abdominal pain, 4+ protein on dipstick, nephrotic syndrome started on prednisolone,
"what would biopsy and light microscopy show," five options in the same order, and key D (Minimal
change disease) match `pedep2-ren-21` word for word. Key text and index unchanged.
**House observation:** `pedhd-renal-21` prints the same case and key — recorded, not folded.

### n39 (p.1838, printed "40") — VERDICT: REPRINT of `pedep2-ren-22`
Candidates examined: `P2:pedep2-ren-22` (sim 0.760, key 2/2 — accepted) and `HOUSE:pedhd-renal-22`
(sim 0.848, key 2/2 — cross-bank, recorded only). Fold shape: near-exact reprint. n39's own lab values
(Hb 7.5, WCC 15 × 10⁹/L, platelets 40 × 10⁹/L, urea 9.0 mmol/L, creatinine 200 µmol/L) match the live
`pedep2-ren-22`'s **p.862 printing** exactly, not the Model Final Exam 1 reprint of that same entry
which its own citation already records as disagreeing on units (urea "90.0," creatinine "200 mmol/L,"
an impossible value the citation already calls the book's own defect) and on the first option's wording
("Inflammatory bowel disease" vs "Ulcerative colitis") — n39 is confirmed as the p.862 printing itself,
not that variant reprint. Five options in the same order, key C (Hemolytic uraemic syndrome) unchanged
in text and index.
**House observation:** `pedhd-renal-22` prints the same case, the same (correct) units and the same key
— recorded, not folded.

### n40 (p.1840, printed "41") — VERDICT: REPRINT of `pedep2-ren-23`
Candidates examined: `P2:pedep2-ren-23` (sim 0.701, key 3/3 — accepted as the fold target),
`P2:pedep2-mf1-20` (sim 0.597, key 3/3 — examined, a separate already-existing abbreviated sibling of
the same case, not this n's fold target), and `HOUSE:pedhd-renal-23` (sim 0.965, key 3/3 — cross-bank,
recorded only). Fold shape: reworded stem — the 3-month-old baby girl with fever 38.6°C, crying,
vomiting, dipstick showing white cells and protein, "most likely organism," five options in the same
order, and key D (Escherichia coli) match `pedep2-ren-23` closely; wording is lightly reworded ("A
dipstick demonstrates" vs "A urine dipstick shows," "responsible for" vs "most likely responsible
for"). The live sibling `pedep2-mf1-20` is a more heavily abbreviated re-skin of the same underlying
case (drops the fever/crying/vomiting vignette entirely, asks what would be "isolated from her urine"
rather than "responsible for her urinary tract infection") and is the more distant of the two P2
matches (sim 0.597 vs 0.701) — not this n's fold target. Key text and index unchanged.
**House observation:** `pedhd-renal-23` is the closest wording match of all three (matching n40's
"crying and with vomiting... A dipstick demonstrates white cells and protein" almost verbatim) —
recorded as the closer cross-bank twin, but per rule never the fold target; the within-bank
`pedep2-ren-23` is.

