# Endpoint Part 2, Section 13 "Model Final Exam 2" — fold adjudication, n1-n30

Run against: the staged section-13 entries n1-n30 (read verbatim through the brief's `dump13.js`
helper) vs `app\data\questions.peds.ep2.js` (live `Q_PEDS_EP2`) and `app\data\questions.peds.ep.js`
(live `Q_PEDS_EP`). Candidate list: `cand13-A.txt`.

**The part-1 leg was adjudicated, not recorded.** The sweep output labels `[LIVE PART 1]` as
"another chat writes that file: RECORD ONLY"; the brief states that label is stale — part 1 closed
and was folded against part 2 earlier today, both files carry `bank:'endpoint'`, and the split is
two source PDFs rather than two banks. One part-1 reprint was found and is called as a reprint
(n8 == `pedep-mf3-29`).

Page images opened for every REPRINT call, `…\scratchpad\ep2-index\native\pNNNN.jpeg`, all sixteen
at native resolution, none needing the hires fallback: p.1440, p.1442, p.1446, p.1448, p.1458,
p.1460, p.1462, p.1466, p.1468, p.1470, p.1476, p.1478, p.1480, p.1482, p.1486, p.1488. Live-side
pages were not rendered — the live text on disk is the record, per the brief.

Two structural notes on this section:

1. **Section 13 is dense with "Which of the following is the most common cause of X?" one-liners**
   (n2, n13, n14, n15, and the out-of-range n33/n39/n47/n76). The sweep pairs these to each other and
   to a dozen live entries purely on the template. Every within-section pair among them was rejected:
   the template is shared, the disease is not. Each in-range one was settled by the disease named in
   the stem, and two of the four (n13, n14) turned out to have a genuine live twin anyway.
2. **The sweep's top-sim candidate is not always the right target.** n17's highest sim was
   `pedep2-ren-35` (0.922) but the correct fold target is `pedep2-ren-13` (0.832) — the option ladder
   decides, and the two live entries were deliberately kept separate for exactly that reason. n4's
   true match, `pedep2-car-51`, ranked only 0.667, below two false leads.

---

## n2 == (no live twin) (p.1436)

**NOT A REPRINT.** Staged n2 is "Which of the following is the most common cause of **haematuria** in
children?", key index 2 "Urinary tract infection".

Every candidate the sweep raised is the same sentence frame around a different disease, which is the
shared-option-menu trap in its purest form — and here not even the options are shared, only the
sentence:

- within-section n13 = most common organism of **infective endocarditis**; n14 = most common cause of
  **chronic wet cough**; n15 = most common **malignant tumour**; n33/n39/n47/n76 out of range.
- `pedep-mf3-50` = most common cause of **paediatric cardiopulmonary arrest** (key "Respiratory
  problems"); `pedep-inf-25` = most common organism of **acute otitis media** (key "Streptococcus
  pneumoniae"); `pedep-mf4-21` = most common complication of **meconium aspiration** (key
  "Pneumothorax"); `pedep-gi-65` and `pedep-mf4-21` likewise off-topic.
- `pedep2-hem-65` = most common cause of **aplastic crisis in sickle cell disease**;
  `pedep2-res-31` = most common cause of **pneumonia**; `pedep2-car-2` = most common **congenital
  heart disease**; `pedep2-mal-23` = most common **malignant tumour**.

No discriminating token can be named because there is no shared clinical picture. **No live entry in
either endpoint file asks for the most common cause of haematuria** — n2 is a new question and must
be drafted.

## n4 == pedep2-car-51 (p.1440)

**REPRINT.**

Discriminating token: the identical five-item **negative-stem ladder on Fallot's tetralogy**, in the
same printed order, with the same false statement keyed — **"Cyanosis starts at birth in all cases"**
at index 0 in both. The other four options are the same four true statements, word for word up to
hyphenation ("boot shaped" / "boot-shaped", "hypercyanotic" / "hyper-cyanotic"). Fold shape: reworded
stem only ("Which of the following is not true regarding Fallot's tetralogy?" vs "In Fallot's
tetralogy, the following is NOT true:"); the ladder and the key are untouched.

The sweep ranked this candidate fifth. Its four higher-sim leads are all different negative-stem
questions and were rejected: `pedep-mf3-75` (intussusception), `pedep-nut-27` (breast feeding),
`pedep-mf4-64` (congenital diaphragmatic hernia), `pedep2-dp-25` / `pedep2-neu-36` (cerebral palsy),
`pedep2-car-41` (innocent murmurs), `pedep2-liv-11` (hepatitis A), `pedep2-dp-22` (autism),
`pedep2-dp-24` (global developmental delay), `pedep-mf1-73` (gastroschisis), `pedep-mf3-76` (duodenal
atresia).

Image confirms: highlighted key is "A. Cyanosis starts at birth in all cases", five options A-E, no
figure. The box is a five-bullet list whose first bullet contradicts the keyed option in the bank's
own words — "Only a few cases present with severe cyanosis in the first few days of life" — and whose
remaining four bullets restate options B-E verbatim.

Live `source` will need: `Pediatrics endpoint part2.pdf p.731; reprinted in Model Final Exam 2,
p.1440`. The box wording differs between printings and both should stand: p.731's box against the
p.1440 bullet list quoted above.

## n5 == pedep2-ren-34 (p.1442)

**REPRINT.**

Discriminating token: **oedema that extended to the abdominal wall and scrotum two days before
admission** in a 5-year-old boy with a week of periorbital and lower-limb pitting oedema and an
otherwise unremarkable history — asked for the *most important complication*, keyed **"Spontaneous
bacterial peritonitis"** at index 2 in both, over the identical four-option ladder (hypertensive
encephalopathy / heart failure / SBP / malnutrition) in the same order. Fold shape: reworded stem
("marked eye puffiness" for "marked periorbital edema", "this boy's disease" for "this condition").

This makes it a **third** printing: the live `source` already records p.886 and a reprint at p.1201
shelved inside the liver-disorders section.

Image confirms: highlighted key is "C. Spontaneous bacterial peritonitis", only four options printed
(A-D), no figure. Box reads "This boy has manifestations suggestive of nephrotic syndrome. Nephrotic
syndrome increases the risk for infection in general, and spontaneous bacterial peritonitis may
occur."

Live `source` will need: `Pediatrics endpoint part2.pdf p.886 (reprinted at p.1201, inside the
liver-disorders section; reprinted again in Model Final Exam 2, p.1442)`. This is a third distinct
box wording — the live explanation already quotes p.886's and p.1201's; the p.1442 box quoted above
adds the diagnostic inference like p.1201's but does **not** name complement loss.

## n7 == pedep2-hem-48 (p.1446)

**REPRINT.**

Discriminating token: **a raised hemoglobin A2 on electrophoresis in a 1.5-year-old with microcytic
hypochromic anaemia found on routine CBC screening** — keyed **"β-thalassemia minor"** at index 4 in
both, over the identical five-option ladder (lead poisoning / iron deficiency / chronic systemic
illness / sickle cell trait / β-thalassemia minor) in the same order. Fold shape: respelling only
("β-thalassemia minor" vs "Beta thalassemia minor") plus a reworded lead-in ("Which of the following
is the most likely diagnosis?" vs "The child is MOST likely to have:").

Image confirms: highlighted key is "E. β-thalassemia minor", five options, no figure. Box is a
four-line table using a printed arrow glyph: "Hb HPLC or hemoglobin electrophoresis shows: In sickle
cell disease → HbS and no HbA / In β-thalassemia major → only HbF / In β-thalassemia trait →
increased HbA2 / In α-thalassemia trait → normal Hb pattern."

Live `source` will need: `Pediatrics endpoint part2.pdf p.365; reprinted in Model Final Exam 2,
p.1446`. The two boxes are different and neither contains the other — the live box states the HbA2
hallmark and the failure to respond to iron; the p.1446 box is the four-pattern electrophoresis table
quoted above, which the live explanation should carry.

## n8 == pedep-mf3-29 (p.1448)

**REPRINT — across the part-1/part-2 split.**

Discriminating token: **an infant who can sit without support, roll over and crawl but cannot stand
alone**, asked for her *developmental age* and keyed **"9 months"** — the stem is verbatim identical
but for one comma. Fold shape 3+6: the option ladder is rebuilt, which here happens to leave the key
index unmoved. Staged n8 prints **3 / 6 / 9 / 12 / 15 months**; `pedep-mf3-29` prints **4 / 6 / 9 /
13 / 16 months**. Key text "9 months" at index 2 in both.

Image confirms: highlighted key is "C. 9 months", the five options are 3/6/9/12/15 months as staged,
no figure. Box reads "The median age for crawling is 8–9 months, while that for standing
independently is about 10 months."

Live `source` will need: `Pediatrics endpoint part1.pdf p.1541 (also printed in Pediatrics endpoint
part2.pdf p.1296, respelled; the options and the key are unchanged; reprinted again in part 2's Model
Final Exam 2, p.1448, with a rebuilt option ladder — 3/6/9/12/15 months in place of 4/6/9/13/16 — and
the key text unchanged)`. The p.1448 box is worded differently from the live box ("Sitting, rolling,
and crawling without standing corresponds to around 9 months of age") and gives two numbers the live
box does not: **median crawling 8–9 months, independent standing about 10 months** — record both.

**Out-of-range observation, not a verdict:** the same question is printed a second time inside this
section at **p.1506 (n37)** with the 4/6/9/13/16 ladder, i.e. verbatim `pedep-mf3-29` including its
box. n37 is outside my n1-n30 range and is left to whoever adjudicates n31-n49; if it is also folded,
both p.1448 and p.1506 belong in the same `source` clause.

## n11 == (no live twin) (p.1454)

**NOT A REPRINT.** Staged n11 is "Which of the following is a feature of **pediatric nephrotic
syndrome**?", four options, key index 2 "It rarely causes chronic renal failure".

All six candidates are the "Which of the following is a feature of X?" template around a different
disease, and none shares a single option with n11: `pedep-nut-20` (NOT a feature of marasmus),
`pedep-nut-65` (feature of marasmus), `pedep-mf2-65` (not a feature of hypospadias), `pedep-mf4-41`
(feature of kwashiorkor), `pedep2-hem-80` (feature of hereditary spherocytosis), `pedep2-mf1-35`
(feature of a typical febrile seizure). No discriminating token exists to name. n11 must be drafted.

## n13 == pedep2-car-40 (p.1458)

**REPRINT.**

Discriminating token: **the most common causative organism of infective endocarditis**, keyed
**"Streptococcus viridans"** in both. This is a pure single-fact recall item with no vignette, so the
disease named in the stem *is* the discriminator — it is not a shared menu, because the menus differ.
Fold shape 3: the ladder is rebuilt and the key letter moves. Staged n13 prints five options (S.
pyogenes / S. pneumoniae / **S. viridans** / S. aureus / Listeria monocytogenes), key index 2;
`pedep2-car-40` prints four (**S. viridans** / S. aureus / Enterococcus / Pseudomonas aeruginosa),
key index 0. **Compared at the text rather than the index, the key is identical.**

Recorded, not corrected: three of the five distractors differ between printings (S. pyogenes, S.
pneumoniae and Listeria in the model exam; Enterococcus and Pseudomonas in the section printing).
Both ladders exclude the same alternative — staphylococcal endocarditis — so the reasoning the
question tests is unchanged, which is why this folds rather than standing as a second entry the way
`pedep2-ren-13` / `pedep2-ren-35` deliberately do.

Image confirms: highlighted key is "C. Streptococcus viridans", five options A-E as staged, no
figure. Box reads "The most common cause of infective endocarditis is α-hemolytic Streptococcus
(Streptococcus viridans)."

Live `source` will need: `Pediatrics endpoint part2.pdf p.709; reprinted in Model Final Exam 2,
p.1458, with a rebuilt five-option ladder (Streptococcus pyogenes, Streptococcus pneumoniae,
Streptococcus viridans, Staphylococcus aureus, Listeria monocytogenes) that moves the key to C; the
key text is unchanged`. The p.1458 box adds the term **α-hemolytic Streptococcus** as the synonym for
the key — fold that into the explanation.

## n14 == pedep2-res-47 (p.1460)

**REPRINT.**

Discriminating token: **the most common cause of chronic wet (productive) cough in children**, keyed
**"Persistent bacterial bronchitis"** in both. Fold shape 3: rebuilt four-option ladder moving the
key letter. Staged n14 prints bronchial asthma / habit cough / **PBB** / tracheomalacia, key index 2;
`pedep2-res-47` prints **PBB** / bacterial bronchitis / viral bronchitis / asthma, key index 0. Key
text identical.

Recorded: the two ladders keep asthma as the common distractor and swap the rest — the model exam
offers habit cough and tracheomalacia, the section printing offers bacterial and viral bronchitis.

Image confirms: highlighted key is "C. Persistent bacterial bronchitis", only four options (A-D), no
figure. Box reads "Persistent bacterial bronchitis (PBB) is the leading cause of chronic wet cough in
young children in high-income countries."

Live `source` will need: `Pediatrics endpoint part2.pdf p.569; reprinted in Model Final Exam 2,
p.1460, with a rebuilt option ladder (bronchial asthma, habit cough, persistent bacterial bronchitis,
tracheomalacia) that moves the key to C; the key text is unchanged`. The p.1460 box adds a
qualification the live box does not carry — **"in young children in high-income countries"** — record
it.

## n15 == pedep2-mal-23 (p.1462)

**REPRINT.**

Discriminating token: **the most common malignant tumour in children**, with the unusual **Kaposi
sarcoma** distractor sitting third in an otherwise ordinary leukaemia/lymphoma/Wilms ladder — the same
four options in the same printed order, key **"Leukemia"** at index 0 in both. Stem verbatim
identical. Fold shape: respelling only ("Wilms tumor" / "Wilm's tumor").

Image confirms: highlighted key is "A. Leukemia", four options A-D, no figure. Box reads "Leukemia is
the most common childhood cancer. Acute lymphoblastic leukemia (ALL) accounts for ~80% of cases." The
numeral **~80%** was checked on the native render and reads clearly.

Live `source` will need: `Pediatrics endpoint part2.pdf p.1268; reprinted in Model Final Exam 2,
p.1462`. The p.1462 box carries the figure **ALL ≈ 80% of childhood cancer** — record it as printed.

## n17 == pedep2-ren-13 (p.1466)

**REPRINT — of `pedep2-ren-13`, not of the higher-sim `pedep2-ren-35`.**

Discriminating token: **red cell casts with a sterile culture at 48 hours in a well 7-year-old boy
called George with cloudy urine**, keyed **"Glomerulonephritis"**. That vignette is shared by both
live entries, so it does not by itself pick the target — **the option ladder does**, and the live
explanations record that the two entries were kept separate precisely because their ladders change
what must be excluded. Staged n17 prints the **five-option ladder in `pedep2-ren-13`'s exact order**:
Balanitis / **Glomerulonephritis** / Nephrotic syndrome / Perineal contamination / UTI, key index 1 —
identical to the live entry's options and `answer:1`. `pedep2-ren-35` prints four options (GN / UTI /
nephrotic syndrome / **kidney stones**), and n17 offers no kidney-stones option at all, so it is not
that printing.

Mixed provenance, recorded not resolved: n17's stem takes its wording from `pedep2-ren-35` ("You
obtain the following result from the microscopy and culture") and its lead-in and ladder from
`pedep2-ren-13` ("Which of the following is the most likely diagnosis?").

**Numbers and units — the three printings disagree and all three are recorded as printed:**
`pedep2-ren-13` (p.844) prints white blood cells **50–100/mm^2**; `pedep2-ren-35` (p.888) prints
**50-100/mm3** with no superscript; the model-exam page p.1466 prints **50–100/mm³** with a genuine
typeset superscript 3, checked on the image. The live `pedep2-ren-13` explanation already flags its
own `/mm^2` as a printing defect carried over from `pedep2-ren-11`; the model exam prints the
dimensionally correct unit.

Image confirms: highlighted key is "B. Glomerulonephritis", five options A-E, superscript 3 legible
in the WBC unit, no figure. Box reads "The presence of red cell casts in the urine is always
pathological. It is strongly indicative of glomerular damage."

Live `source` will need: `Pediatrics endpoint part2.pdf p.844; reprinted in Model Final Exam 2,
p.1466, where the same white-cell range is printed with a superscript as 50–100/mm³`. The p.1466 box
adds the absolute claim that **red cell casts in urine are always pathological**, which neither live
box states in those terms — record it.

## n18 == pedep2-res-8 (p.1468)

**REPRINT.**

Discriminating token: **Norah, an 18-month-old with 3 days of coryza, cough and mild fever, feeding
poorly and unsettled at night, with a normal respiratory rate and no chest recession** — the absence
of tachypnoea and recession is what forces the key. Stem verbatim identical; the same five options in
the same order (bronchiolitis / frontal sinusitis / pneumonia (LRTI) / tonsillitis / **URTI**), key
**"Upper respiratory tract infection"** at index 4 in both.

Image confirms: highlighted key is "E. Upper respiratory tract infection", five options, no figure.
Box reads "This child has an upper respiratory tract infection, most likely a common cold."

Live `source` will need: `Pediatrics endpoint part2.pdf p.491; reprinted in Model Final Exam 2,
p.1468`. The boxes differ — the live box names the negative findings, the p.1468 box names **the
common cold** as the likely illness; keep both.

## n19 == pedep2-car-12 (p.1470)

**REPRINT — and the staged printing is the fuller one on the option ladder.**

Discriminating token: **a term newborn discharged well at 8 hours who collapsed at 48 hours, shocked
and unresponsive, in whom the only palpable pulse is the right brachial** — keyed **"Coarctation of
the aorta"** at index 2 in both. Stem verbatim identical but for one tense ("She is resuscitated" /
"She was resuscitated").

**Option-count difference, fold shape 6:** the live entry prints four options and its explanation
explicitly records that the page offers no fifth distractor and that the unanswered twin page was
checked and agrees. The model exam prints **five**, adding **"E. Mitral regurgitation"**. The first
four are identical in the same order and the key index does not move.

Image confirms: highlighted key is "C. Coarctation of the aorta", five options A-E with mitral
regurgitation as E, no figure. Box reads "Collapse of a newborn can be caused by
septicaemia/meningitis, congenital heart disease, or an inborn error of metabolism. In this case, the
likely diagnosis is outflow obstruction – severe coarctation of the aorta or interrupted aortic arch.
When the ductus arteriosus closes, perfusion to the left arm and lower body is compromised."

Live `source` will need: `Pediatrics endpoint part2.pdf p.652; reprinted in Model Final Exam 2,
p.1470, with a fifth option (mitral regurgitation) added; the key is unchanged`. The live
explanation's closing paragraph — that the printed page offers only four options — must be amended
rather than left standing, since the reprint proves the bank does print a fifth elsewhere. The
p.1470 box names **interrupted aortic arch** alongside coarctation and lists the three causes of
neonatal collapse; the live explanation already makes both points from the lecture, but the box
wording is the bank's own and should be quoted.

## n22 == pedep2-end-4 (p.1476)

**REPRINT — and the staged printing is the fuller one on the option ladder.**

Discriminating token: **Mohammed, a 12-year-old with type 1 diabetes, well controlled, whose height
has been static for 9 months and who has lost interest in football, with a normal FBC and CRP and a
satisfactory HbA1c** — keyed **"Hypothyroidism"** at index 3 in both. Stem near-verbatim ("In spite
of" / "Despite", "appetite is alright" / "appetite is normal", "HbA1C" / "HbA1c").

**Option-count difference, fold shape 6:** live prints four (anorexia nervosa / depression / growth
hormone deficiency / **hypothyroidism**); the model exam prints five, adding **"E. Inflammatory bowel
disease"**. The first four are identical in the same order; the key index does not move.

Image confirms: highlighted key is "D. Hypothyroidism", five options A-E, no figure. Box reads
"Children with type 1 diabetes are at increased risk of thyroid disease and should be screened
annually. Static height and lethargy support this diagnosis."

Live `source` will need: `Pediatrics endpoint part2.pdf p.1100; reprinted in Model Final Exam 2,
p.1476, with a fifth option (inflammatory bowel disease) added; the key is unchanged`. The p.1476 box
carries a management point the live box may not — **annual thyroid screening in type 1 diabetes** —
fold it in, and the added IBD distractor now needs an explanation line of its own (normal FBC and CRP
argue against it).

## n23 == pedep2-ren-26 (p.1478)

**REPRINT.**

Discriminating token: **oligohydramnios with bilateral talipes, ventilation for pulmonary hypoplasia,
and failure to pass urine in the first 24 hours** — the full Potter sequence, keyed **"Bilateral renal
agenesis"** at index 2 in both, over the identical five-option ladder (nephrotic syndrome / posterior
urethral valves / **bilateral renal agenesis** / ADPKD / duplex kidney) in the same order. Fold shape:
reworded stem only — the live printing breaks the vignette into two sentences and asks "Which of the
following is the likely cause?"; the model exam runs it as one sentence and asks "Which of the
following is likely to be the cause?".

Image confirms: highlighted key is "C. Bilateral renal agenesis", five options A-E, no figure. Box
reads "Bilateral renal agenesis causes Potter syndrome, which is incompatible with life.
Oligohydramnios results from lack of fetal urine and leads to pulmonary hypoplasia."

Live `source` will need: `Pediatrics endpoint part2.pdf p.870; reprinted in Model Final Exam 2,
p.1478`. The p.1478 box names **Potter syndrome** and states it is incompatible with life — quote it
alongside whatever the live box prints.

## n24 == pedep2-liv-7 (p.1480)

**REPRINT.**

Discriminating token: **Raj, a 14-year-old Asian boy, jaundiced after returning to the UK from a
rural village in India where he had a 10-day diarrhoea and vomiting illness** — keyed **"Hepatitis
A"** at index 0 in both, over the identical five-option ladder (hepatitis A / hepatitis B / biliary
atresia / galactosaemia / primary sclerosing cholangitis) in the same order. Fold shape: respelling
("Galactosemia" / "Galactosaemia", "diarrhoea…whilst" / "diarrhea…while").

Recorded, not corrected: the live stem prints "a previously **well-to-do** 14-year-old Asian boy";
the model-exam page prints "a previously **well** 14-year-old Asian boy". Checked on the image — the
model exam reads "well" with no hyphenated suffix.

Image confirms: highlighted key is "A. Hepatitis A", five options A-E, no figure. Box reads
"Vaccination is recommended for travel to endemic areas. Hepatitis A is common in rural India and
spreads via the fecal-oral route."

Live `source` will need: `Pediatrics endpoint part2.pdf p.1181; reprinted in Model Final Exam 2,
p.1480 (where the stem reads "previously well" rather than "previously well-to-do")`. The p.1480 box
adds the **pre-travel vaccination** point — fold it in.

## n25 == pedep2-neu-21 (p.1482)

**REPRINT — a THIRD printing.** The live `source` already records a reprint in Model Final Exam 1 at
p.1338 with the "Tet spells" option dropped. This Model Final Exam 2 page is a third printing, and it
**restores the full five-option ladder**.

Discriminating token: **a 14-month-old whose episodes are triggered by anger or being upset, with
colour change followed by collapse and occasional jerking movements** — the anger/upset trigger is
what separates breath-holding spells from every other option on the ladder. Keyed **"Breath-holding
spells"** at index 0 in both, over the identical five options in the same order (breath-holding spells
/ 'Tet' spells / myoclonic epilepsy / non-epileptic seizure / vasovagal syncope). Fold shape:
reworded stem (the live printing names the child "A 14-month-old boy" and says "characterized by a
color change"; the model exam says "A 14-month-old" and "He has colour change").

Image confirms: highlighted key is "A. Breath-holding spells", five options A-E with B printed as
"'Tet' spells" in typographic quotes, no figure. Box reads "Breath-holding spells typically occur
between 6 months and 2 years and are triggered by strong emotions. There may be transient loss of
consciousness and tonic-clonic movements."

Live `source` will need: `Pediatrics endpoint part2.pdf p.998 (reprinted in Model Final Exam 1,
p.1338, without the "Tet spells" option; reprinted again in Model Final Exam 2, p.1482, with the full
five-option ladder restored; the key text is unchanged in both)`. The p.1482 box gives the **6 months
to 2 years** age window — record the numbers as printed.

## n27 == pedep2-ren-42 (p.1486)

**REPRINT — and the STAGED printing is clearly the fuller one.** Flagging this explicitly, per the
brief: the model-exam printing adds the exposure history, converts every laboratory value to SI units
with reference ranges, and prints the clotting times numerically instead of asserting they are normal.

Discriminating token: **three days of bloody diarrhoea followed by pallor, anuria for 12 hours,
anaemia with thrombocytopenia and a raised creatinine, with a normal PT and APTT** — the normal
clotting screen alongside the low platelets is what separates HUS from DIC and from ITP. Keyed
**"Haemolytic-uraemic syndrome"** at index 1 in both, over the same five-option ladder in the same
order (acute lymphatic/lymphoblastic leukaemia / **HUS** / Henoch–Schönlein purpura / ITP /
post-streptococcal glomerulonephritis).

**Numbers and units — the two printings disagree, recorded exactly as each prints them, neither
corrected:**

| | live `pedep2-ren-42` (p.902) | staged n27 (p.1486) |
|---|---|---|
| haemoglobin | 7.5 g/dl | 76 g/L |
| white blood cells | 14,200/ml | 14.2 × 10⁹/L |
| platelet count | 50000/ml | 50 × 10⁹/L |
| creatinine | 1.5 mg/dl (normal: < 0.8 mg/dl) | 200 µmol/L (normal: 20–80 µmol/L) |
| clotting | "PT & PTT are normal" | prothrombin time 13 seconds (control: 12–15 s); activated partial thromboplastin time 34 seconds (control: 25–35 s) |
| blood pressure | 120/70 mmHg | 120/70 mmHg |

The haemoglobins are close but not equal (76 g/L is 7.6 g/dL against the live 7.5 g/dl), and the
creatinines are not equivalent (200 µmol/L is about 2.3 mg/dL against the live 1.5 mg/dl). Both are
recorded, neither is adjudicated.

Other printing differences: the boy is **Fady** in the live printing and **Finlay** in the model
exam; the model exam adds "recently had a birthday party at his local farm" and "His mother is
concerned as he is still not himself"; option A reads "Acute lymphoblastic leukemia" live and "Acute
lymphatic leukaemia" in the model exam.

Image confirms: highlighted key is "B. Haemolytic-uraemic syndrome", five options A-E, no figure. The
exponents on the white-cell and platelet counts are genuine raised superscript 9 on the page —
checked directly, not taken from OCR. Box reads "Classic triad: acute renal failure, microangiopathic
hemolytic anaemia, and thrombocytopenia. Typically follows GI infection with E. coli O157:H7."

Live `source` will need: `Pediatrics endpoint part2.pdf p.902; reprinted in Model Final Exam 2,
p.1486, in a fuller printing that adds a farm-visit exposure history and gives the laboratory values
in SI units with reference ranges`. Because the staged printing is fuller, **the live stem should
gain the farm exposure and the SI values as a recorded second printing**, and the p.1486 box's two
facts the live box may lack — the **classic triad** naming and **E. coli O157:H7** as the typical
precedent — should be folded in.

## n28 == pedep2-liv-4 (p.1488)

**REPRINT.**

Discriminating token: **Luna, a 32-year-old Cantonese woman, HBsAg positive and HBeAg negative on
antenatal screening, in a household with an extended family and two older children** — the
HBeAg-negative status plus the presence of other children is what makes "the baby and all other
children" the answer rather than immunoglobulin or the baby alone. Stem verbatim identical but for
one verb agreement ("The postnatal team are keen" / "is keen"); the same five options in the same
order, key **"Hepatitis B vaccination for the baby and all other children"** at index 1 in both.

Image confirms: highlighted key is "B. Hepatitis B vaccination for the baby and all other children",
five options A-E, no figure. Box reads "Babies of HBsAg-positive mothers should receive hepatitis B
vaccination. Household contacts (including other children) should also be vaccinated." Unlike the
live printing — where the live `source` records that the box is printed alone on the following page,
p.1175 — the model exam prints the box on the question page itself.

Live `source` will need: `Pediatrics endpoint part2.pdf p.1174 (the explanation box is printed alone
on p.1175); reprinted in Model Final Exam 2, p.1488, with the box on the question page`.

---

## Verdict roster, n1-n30

```
n01 no candidate
n02 not a reprint
n03 no candidate
n04 REPRINT of pedep2-car-51
n05 REPRINT of pedep2-ren-34
n06 no candidate
n07 REPRINT of pedep2-hem-48
n08 REPRINT of pedep-mf3-29
n09 no candidate
n10 no candidate
n11 not a reprint
n12 no candidate
n13 REPRINT of pedep2-car-40
n14 REPRINT of pedep2-res-47
n15 REPRINT of pedep2-mal-23
n16 no candidate
n17 REPRINT of pedep2-ren-13
n18 REPRINT of pedep2-res-8
n19 REPRINT of pedep2-car-12
n20 no candidate
n21 no candidate
n22 REPRINT of pedep2-end-4
n23 REPRINT of pedep2-ren-26
n24 REPRINT of pedep2-liv-7
n25 REPRINT of pedep2-neu-21
n26 no candidate
n27 REPRINT of pedep2-ren-42
n28 REPRINT of pedep2-liv-4
n29 no candidate
n30 no candidate
```

`no candidate` covers both the n with no sweep entry at all (n3, n6, n9, n10, n12, n16, n20, n21,
n29, n30) and the n whose only sweep entry was a cross-bank House match, which takes no verdict
(n1, n26).

**REPRINT 16 · NOT A REPRINT 2 · UNCERTAIN 0** (plus 12 with no in-bank candidate).

Of the 16 reprints, 15 fold into part 2 and 1 (n8) folds into part 1. Three are third printings of a
question the live `source` already records twice (n5, n25) or across the part split (n8). Two staged
printings are fuller than the live one on the option ladder (n19, n22) and one is fuller throughout
(n27) — those three change what gets written, not just the `source` line.

---

## Cross-bank, recorded for the end-of-stream sweep

House (`pedhd-*`) matches in n1-n30. **Different bank — never folded, never deleted, no verdict.**
No page renders were spent on these.

| staged n | House id | sim | keys | House chapter |
|---|---|---|---|---|
| n1 (p.1434) | `pedhd-dev-21` | 0.800 | 4 / 2 — differ | normal-dev |
| n17 (p.1466) | `pedhd-renal-13` | 1.000 | 1 / 1 | renal |
| n18 (p.1468) | `pedhd-resp-8` | 1.000 | 4 / 4 | resp-bronch |
| n19 (p.1470) | `pedhd-card-12` | 1.000 | 2 / 2 | cardiac |
| n22 (p.1476) | `pedhd-endo-4` | 0.976 | 3 / 3 | endo-thyroid |
| n23 (p.1478) | `pedhd-renal-26` | 1.000 | 2 / 2 | renal-cakut |
| n24 (p.1480) | `pedhd-liv-7` | 0.972 | 0 / 0 | liver-hep |
| n25 (p.1482) | `pedhd-neuro-21` | 1.000 | 0 / 0 | neurological |
| n26 (p.1484) | `pedhd-endo-12` | 0.977 | 1 / 1 | endo-dka |
| n27 (p.1486) | `pedhd-renal-8` | 0.924 | 1 / 1 | renal |
| n28 (p.1488) | `pedhd-liv-4` | 1.000 | 1 / 1 | liver-hep |

Note for the end-of-stream sweep: n17-n28 is an almost unbroken run of pages that match House
one-for-one, and every one of them also matched an endpoint entry that this file folds. That run —
p.1466 to p.1488 — looks like a block the model exam drew from the same shared upstream source the
House bank draws from, which is the endpoint/House overlap already recorded as chapter-shaped in
`MEMORY.md`. n1 is the only House match in this range with a differing key (House keys index 4, the
staged page keys index 2) and is the one worth looking at first when that sweep runs.
