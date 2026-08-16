/* neonatal — "Neonatal medicine", Paediatrics. Written 2026-08-16 under
   START-HERE.md §14 (slide-density revision notes) + §14.3a (layout), and
   content\peds\theory-plan.md, whose ONE local difference is that PAEDIATRICS
   HAS NO 3,000-WORD CAP: budget = max(lecture words, 25 x questions, 600).
   Tenth paediatrics chapter, after cardiac, renal, respiratory,
   gastroenterology, neurological, nutrition, haematology, perinatal and
   endocrine. Shape copied from haematology.draft.js and perinatal.draft.js.

   DECK LABELS USED IN THE Src LINES:
     L8  = 8) COMMON PROBLEMS IN THE TERM NEWBORN.txt — Dr Hassan Heshmat,
           Assistant Professor of Pediatrics, Division of Neonatology.
           32 PDF pages. Despite the plural title it is ONE topic end to end:
           NEONATAL JAUNDICE. Nothing else appears in it.
     L10 = 10) new Seizures . Birth injuries , Hpoglycemia 2.txt — no author
           printed. 61 PDF pages, of which pp.50–61 are an unkeyed MCQ bank.
           THREE unrelated topics in one deck, in this order: neonatal
           seizures (pp.1–26) · hypoglycaemia (pp.27–36) · birth injuries
           (pp.37–48).
     L11 = 11) Neonatal sepsis.txt — no author is printed: slide 3 reads
           "Neonatal Sepsis / By" and nothing follows it. 37 PDF pages.
   All three are BORN-DIGITAL PDFs in Semester 8\Pedo\Theoritical\PPT\, not
   .pptx conversions — checked against the 14-file .pptx list, none is there.

   ⚠️ PAGE NUMBERING. Split page N = PDF page N for all three. The cached
   `pdftotext` split reports ONE PAGE MORE than each deck actually has (33/62/38
   against 32/61/37) — that is the trailing form feed, not a page. So
   `visual-read-triage.md`'s "L8 p33", "L10 p62" and "L11 p38" DO NOT EXIST and
   were not rendered. Confirmed by pdftoppm refusing the range.

   ============================================================================
   ⚠️⚠️ FINDING 0 — THIS CHAPTER NEEDS A THREE-WAY SPLIT, NOT THE TWO-WAY ONE
   THE BRIEF EXPECTED, AND THE BOUNDARIES ARE THE DECK BOUNDARIES.
   ============================================================================
   Written as ONE file per the brief, sections in deck order, so a CONTIGUOUS
   split needs no rewriting and no reordering:

     · `neonatal`         = nnj-1 … nnj-12 — NEONATAL JAUNDICE (L8).
     · `neonatal-seiz`    = nns-1 … nns-13 — NEONATAL SEIZURES, HYPOGLYCAEMIA
                            AND BIRTH INJURY (L10).
     · `neonatal-sepsis`  = nsp-1 … nsp-12 — NEONATAL SEPSIS (L11).

   ⚠️ WHY NOT THE TWO-WAY SEAM THE BRIEF PROPOSED. The brief's seam was
   "term newborn's common problems | sepsis + seizures + birth injury +
   hypoglycaemia". Measured, that puts ~1,900 words on the first side and
   ~3,200 on the second — about 8 pp against about 13 pp, i.e. the second unit
   lands exactly ON the ~13 pp hard shape with no margin, and it would bundle
   four unrelated diseases under one chapter title. Three units at roughly
   8 / 7 / 6 pages is both safer and honest to the material: each is one deck,
   one lecturer, one subject. The measured halves are in the outcome block.

   ⚠️ THE SPLIT IS VACUOUS FOR QUESTION REASSIGNMENT. ZERO questions are filed
   with chapter:'neonatal' today, `qs: []` on all 37 sections, so §14.5's
   "verify no question tests it" is trivially satisfied and the theory-plan's
   "reassign questions from the theory links" step has nothing to move. Say so
   explicitly rather than reporting a clean mapping of an empty set.

   ⚠️ NO CROSS-BOUNDARY DEPENDENCY. Each boundary is also a source boundary: no
   section past nnj-12 cites L8, none past nns-13 cites L10. The only links
   across are *italic* cross-references that POINT and do not depend —
   nnj-4/nnj-7 → nns-12 for cephalhaematoma as a birth injury; nns-3 → nnj-10
   for kernicterus; nsp-11 → nns-9 for the hypoglycaemia limb of the energy
   triangle; nsp-6 → nnj-2 for prolonged jaundice as a sign of UTI.

   ============================================================================
   FINDING 1 — ⚠️⚠️ THE VISUAL READ WAS THE MAIN JOB AND IT RECOVERED ROUGHLY
   1,230 WORDS THE TEXT PASS CANNOT SEE — INCLUDING BOTH OF THIS CHAPTER'S
   DISCRIMINATION MATRICES, ITS TWO ALGORITHMS AND ITS ONLY EPIDEMIOLOGY.
   ============================================================================
   Work in C:\Users\Alfa388\AppData\Local\Temp\hbth1\neonatal\.

   TRIAGE FIRST, per theory-plan.md. Each deck was re-extracted with
   `pdftotext -layout`, split on the form feed, and the TITLES of every page
   under 8 words printed before anything was rendered. Blank share on that
   fresh count (pages under 5 words):
     L8  1 of 32 (3 %) · L10 20 of 61 (33 %) · L11 8 of 37 (22 %)
     Pooled 29 of 130 = 22 %, against the plan's published 23 %.

   ⚠️ THE BLANK-PAGE COUNT WAS THE WRONG INSTRUMENT FOR L8 AND WOULD HAVE COST
   THE CHAPTER ITS TREATMENT THRESHOLDS. L8 scores 3 % — the lowest of any
   paediatrics deck — and its ONE blank page is a "THANK YOU" photograph. But
   pp.26–28 carry 22, 22 and 32 words apiece and are therefore invisible to a
   under-5-word filter, and every one of those words is a CAPTION on a
   full-page AAP nomogram whose axes, six gestational-age curves and inset
   TABLE 2 extract as nothing. Three pages, ~230 words of content, sitting
   above the blank threshold. **A page whose extracted text is a caption is as
   blank as a page with none — read the page index, not the blank list.**

   RENDERED 46 pages at 110 dpi as FOUR-UP CONTACT SHEETS (12 sheets), with
   4 plates re-rendered at 220–260 dpi. What was skipped and why: the two
   bismillah cover images (L11 pp.1–2), the "By" author card (L11 p.3), the
   three "Thank you" pages (L8 p.32, L10 p.49, L11 p.37), and L10's twelve
   trailing MCQ pages, which are text and were read as text.

   ⚠️ EVERY UNTITLED BLANK WAS RENDERED, per the brief and the `perinatal`
   precedent, and it paid TWICE. L10 p.48 is a zero-word page immediately
   before "Thank YOU" — every instinct says trailing filler. It is Figures
   11.26–11.28, and 11.28 is the ONLY place in the corpus that prints the
   WAITER'S TIP POSITION, which is the one thing an examiner asks about Erb
   palsy. L10 pp.4–5, also zero-word, hold the neonatal-brain excitability
   plate and the motor-cortex rule.

   WHAT THE RENDER RECOVERED, ALL NOW WRITTEN AS SOURCED RATHER THAN TAGGED:

   FROM L8, ~230 words:
     · p.26 FIGURE 2 — the AAP 2022 PHOTOTHERAPY THRESHOLD NOMOGRAM for infants
       with NO hyperbilirubinaemia neurotoxicity risk factors. TSB in mg/dL
       against age in hours out to 336 h (14 d), SIX curves — ≥40, 39, 38, 37,
       36 and 35 weeks — rising from ~6.5–9 mg/dL at birth to a plateau at
       ~96 h (day 4) of ~21.8 / 21.5 / 20.8 / 20.1 / 19.4 / 18.7. nnj-11.
     · p.27 FIGURE 3 — the same for infants WITH one or more risk factors. FOUR
       curves — ≥38, 37, 36, 35 weeks — plateauing at ~18.3 / 18.3 / 17.0 /
       16.1. nnj-11.
     · pp.26–27 inset TABLE 2, "HYPERBILIRUBINEMIA NEUROTOXICITY RISK FACTORS",
       printed on both figures and extracting as nothing on either: gestational
       age <38 weeks and this risk increases with the degree of prematurity ·
       albumin <3.0 g/dL · isoimmune haemolytic disease (i.e. positive DAT),
       G6PD deficiency, or other haemolytic conditions · sepsis · significant
       clinical instability in the previous 24 hours. Attributed on the slide to
       Kemper AR, Newman TB, Slaughter JL et al., Pediatrics 2022, AAP. nnj-11.
       ⚠️ THIS IS THE LIST THAT DECIDES WHICH OF THE TWO CURVES A BABY IS ON,
       so without it the two figures cannot be used at all.
     · p.28 the two figures side by side; only its caption extracts. nnj-11.

   FROM L10, ~800 words:
     · p.4  "FACTORS INCREASE SEIZURE SUSCEPTIBILITY IN NEWBORN BRAIN" — an
       eight-item two-column plate, INCREASED EXCITATORY (overabundance of
       synaptic connections, overexpression of glutamatergic receptors, altered
       composition of NMDA and AMPA receptors, excitatory nature of GABA)
       against DECREASED INHIBITORY (GABA synapses form before glutamatergic
       synapses, lack of developed inhibitory network, immature astrocyte, gap
       junctions are prevalent and facilitate seizure spread). Zero extracted
       words. nns-2.
     · p.5  the motor-cortex map with the deck's own yellow overlay: "Seizures
       ONLY associated with abnormal movements if seizure reaches motor
       cortex" — which is the MECHANISM behind the electrographic-only rule the
       deck states three slides later without explaining. Zero words. nns-2.
     · p.12 "TRANSIENT BENIGN PAROXYSMAL MOVEMENT DISORDERS IN INFANCY" — an
       8-row × 4-column table (jitteriness · benign neonatal sleep myoclonus ·
       shuddering · benign myoclonus of early infancy · transient idiopathic
       dystonia in infancy · spasmus nutans · paroxysmal tonic upgaze of
       infancy · benign paroxysmal torticollis) across age of onset, age of
       resolution, secondary causes yes/no, and further testing. Sourced on the
       slide to Mosca S, Martins J, Temudo T, Rev Neurol 2022;74(4):135–140.
       Zero extracted words. nns-6.
     · p.18 "TABLE 8.1 INVESTIGATIONS REQUIRED IN NEONATES WITH SEIZURES" —
       essential versus additional, twelve items. The cache holds the single
       word "Investigation". nns-7.
     · p.24 THE NEONATAL SEIZURE TREATMENT ALGORITHM, re-rendered at 220 dpi —
       the whole ladder with doses, from the stabilisation box through
       phenobarbitone 20 mg/kg, the 10 mg/kg aliquots to 40 mg/kg, phenytoin
       20 then 10 mg/kg, lorazepam/midazolam, to weaning onto maintenance
       phenobarbitone, with the levetiracetam/lidocaine footnote and the
       hypoglycaemia and hypocalcaemia boluses. Zero extracted words. Written as
       the chapter's flow in nns-8, and it is ALSO the only place the deck
       states a calcium dose.
     · p.38 THE BIRTH-INJURY CLASSIFICATION — soft-tissue (caput succedaneum,
       cephalhaematoma, chignon, bruises and abrasions, subaponeurotic
       haemorrhage) · nerve palsies (brachial plexus – Erb palsy, facial nerve
       palsy) · fractures (clavicle, humerus, femur) — with Figure 11.25,
       "Location of extracranial haemorrhages". Two extracted words. nns-11.
     · p.41 the layered scalp diagram — skin, loose areolar tissue, galeal
       aponeurosis, subgaleal space, periosteum, parietal bone, dura — showing
       each collection at its own level. nns-11.
     · p.42 "DD OF SCALP SWELLINGS" — a 4-row × 3-column DISCRIMINATION MATRIX
       across location, characteristic findings, timing and volume of blood.
       Four extracted words. THE most examinable plate in the three decks, and
       the one `visual-read-triage.md` names as the reason its classifier was
       thrown away. nns-12.
     · p.48 Figures 11.26 (a large cephalhaematoma), 11.27 (chignon) and 11.28
       (Erb palsy) — the last carrying "the affected arm lies straight, is limp,
       and with the hand pronated and the fingers flexed (WAITER'S TIP
       POSITION)". A zero-word page. nns-13.
     · pp.21–23 the cranial-ultrasound IVH series, the CUS brain-anomaly image
       and the MRI pair; p.17 the ash-leaf macule photograph. Imaging only, no
       text to recover, all looked at. nns-5, nns-7.

   FROM L11, ~200 words:
     · p.10 THE PATHOGEN CHART, re-rendered at 220 dpi — percentage of total
       isolates, EONS against LONS, sourced on the slide to Chaurasia, BMJ 2019:
       Klebsiella 25.5 / 24.6 · Staph. aureus 18.8 / 21.8 · E. coli 11.1 /
       11.65 · CONS 9.4 / 0.4 · Pseudomonas 8 / 5.9 · Enterobacter 7.6 / 8.2 ·
       Acinetobacter 5.9 / 7 · Group D streptococci/Enterococcus 2.7 / 3.3.
       ZERO extracted words, and it is the deck's ONLY quantitative
       microbiology. nsp-3, and see FINDING 4.
     · p.34 THE "STABLE" SUPPORTIVE-CARE GRID — S sugar and safe · T temperature
       control · A airways · B blood pressure · L laboratory · E effective organ
       management, each with its own content column. Zero extracted words, on a
       slide the deck's own "Topics" page promises. nsp-11.
     · p.36 ADJUNCTIVE THERAPY IN FULL — IVIG · GM-CSF and G-CSF · LF
       (lactoferrin), colostrum, exclusive early breast feeding · zinc ·
       pentoxyphylline · granulocyte transfusion · DVET · melatonin. The cache
       holds three words, "Adjuntive therapy .", and the Topics slide promises
       "Adjuvant therapy" as one of the deck's eight subjects. Without this
       render the topic would have been an empty heading. nsp-12.
     · pp.1–2, 19 the bismillah covers and the two clinical photographs of
       septic neonates; p.12's skin-development histology insets; p.29's
       "WHO / WHAT / WHEN / WHICH" clip-art. Nothing to recover, all looked at.

   NO LOSS from the remaining rendered pages: L10 pp.7, 9, 19, 25 and L11
   pp.7, 12, 26, 29, 30, 33 were rendered as a control precisely because their
   extracted text looked like it might be a fragment of a figure. Every one
   extracts complete. Reported because a negative control is what makes the
   positives above believable.

   ============================================================================
   FINDING 2 — THE CACHE IS COMPLETE, MEASURED, NOT ASSUMED.
   ============================================================================
   §14's ".pptx cache may not be the whole deck" check was run even though none
   of the three is a .pptx. A fresh `pdftotext -layout` of each source was
   vocabulary-diffed against the cache:
     L8  PDF-only vocabulary 0 of 862 tokens (0.0 %)
     L10 PDF-only vocabulary 0 of 792 tokens (0.0 %)
     L11 PDF-only 3 of 517 (0.6 %) — and all three are layout-interleaving
         artefacts, not words: "venmtielantionrgyitsiesttings", "onlduatrgiteio",
         "nal". The cache holds the same content as "ventilatory settings",
         "oldage", "nutritional".
   Cache-only tokens are the injected SOURCE header in all three cases.
   THE `14) Puberty` FAILURE MODE DOES NOT REACH HERE. What DOES reach here is
   the different failure mode in FINDING 1: the cache is complete as TEXT and
   the decks are 22 % PICTURES.

   ============================================================================
   FINDING 3 — TWO INTERNAL CONTRADICTIONS, RECORDED AND NOT "CORRECTED",
   per CLAUDE.md §4.
   ============================================================================
   1. ⚠️ L11 CONTRADICTS ITSELF ABOUT CONS. Its EONS/LONS grid (p.8) lists
      "CONS (staph epidermidis), staph. aureus" as the LATE-onset organisms.
      Its own pathogen chart (p.10) puts CONS at 9.4 % of EARLY-onset isolates
      and 0.4 % of LATE-onset — the opposite way round, and the only bar on the
      chart where the two columns diverge by more than a factor of two. Both are
      written in nsp-2 and nsp-3 as the deck prints them, with a one-line note;
      neither is silently rewritten.
   2. ⚠️ L11's ANTIBIOTIC-DURATION TABLE (p.32) HAS "Culture negative" IN TWO
      ADJACENT ROWS with different answers — "culture negative probable or
      possible sepsis, 5–7 days" and "culture negative sepsis with no
      meningitis, 14 days". As printed the two rows cannot both be true of the
      same baby. Written verbatim in nsp-10 with the discrepancy noted.

   ============================================================================
   FINDING 4 — BOILERPLATE AND REPETITION, MEASURED BEFORE THE BUDGET.
   ============================================================================
     · L8 prints "TREATMENT OF UNCONJUGATED HYPERBILIRUBINEMIA" as the banner of
       three consecutive slides (pp.25, 29, 30) and "CAUSES OF PATHOLOGIC
       UNCONJUGATED HYPERBILIRUBINEMIA." twice (pp.8, 9); the content under each
       differs and is kept. It also prints the caption "Use TSB; do not subtract
       the direct-reacting or conjugated bilirubin from the total serum
       bilirubin" THREE times (pp.26, 27, 28), 51 redundant words.
     · L10's title slide is two words and its "Thank YOU" two more. Its
       hypoglycaemia and birth-injury section dividers (pp.27, 37) carry one and
       four words and no content.
     · ⚠️ L10 ENDS IN THIRTEEN MCQs THAT PRINT NO ANSWER KEY — one at p.26 and
       twelve at pp.50–61, 479 words. They cannot ground a fact, so they are not
       counted. They are still READ, and three of them earned their place: the
       "commonest cause of seizure in full term / in preterm" pair is the only
       place the deck states that ranking as a question, the focal-seizure /
       MCA-territory vignette is the only place perinatal arterial ischaemic
       stroke gets a clinical presentation, and the 32-week jitteriness
       vignette with glucose 50 mg/dL and ionised calcium 0.7 mmol/L is the only
       place the deck implies a calcium threshold at all.
     · L11's "Topics" slide (p.4, 23 words) is an ILO index for the body below
       it and is not counted, per §14.1.

   ============================================================================
   BUDGET — §14.1, counted from disk with node
   `String(s).split(/\s+/).filter(Boolean).length`, the project convention
   (NOT `wc -w`, which reads 3–6 % low on these files).
   ============================================================================
     Per file as cached, SOURCE header line included:
       L8 2,621 · L10 1,985 · L11 1,363 · naive sum 5,969
       = exactly theory-plan.md's published ceiling, to the word.

     TERM 1, THE HONEST UNION. No line-range split is needed: no other chapter
     draws on any of the three, verified by grepping all ten written drafts —
     every other mention of these decks is a DEFERRAL TO here, never a claim on
     the words.
       L8  2,621 − 9 SOURCE header − 16 cover/title
             − 51 duplicated figure captions = 2,545, + ~230 recovered = 2,775
       L10 1,985 − 12 SOURCE − 2 title − 2 thanks
             − 479 unkeyed MCQs = 1,490, + ~800 recovered           = 2,290
       L11 1,363 − 5 SOURCE − 3 title/"By" − 23 Topics ILO index
             − 2 thanks = 1,330, + ~200 recovered                   = 1,530
                                                                      -----
     TERM 1 = 6,595.
     TERM 2 = 25 × 0 linked questions = 0. ZERO questions are filed with
       chapter:'neonatal' today, so §14.2's second term contributes NOTHING and
       the LECTURE side of the coverage floor governs entirely. `qs: []` on
       every section. A reconciliation pass is owed when the paediatrics banks
       close.
     max(6,595 · 0 · 600) = 6,595. TERM 1 GOVERNS.

     ⚠️ SO THE PUBLISHED CEILING UNDER-STATES THIS CHAPTER BY ~630 WORDS, for
     the reason theory-plan.md predicts: 5,969 is the ceiling of what EXTRACTS.
     The remedy is the SPLIT in FINDING 0, not compression.

     ⚠️ AND THE CALLER'S BAND OF 4,200–4,600 WAS DERIVED FROM THE PUBLISHED
     CEILING, SO IT MOVES WITH IT. 74 % — the measured landing point of the
     first six paediatrics chapters — of 6,595 is ~4,880, not ~4,400. The
     prediction below is set against the corrected figure and the discrepancy is
     stated here rather than resolved silently in either direction.

     Decks CITED BUT NOT COUNTED, per §14.1: `30) Pneumonia` (the antenatal
     GBS/Chlamydia screening line deferred here by `respiratory`, one clause);
     `7) Intro to neonatology` (the neonatal energy triangle, cross-referenced
     from nsp-11, written and counted in `perinatal`).

   ⚠️ ENTITY FLOOR AND OVERRUN, COUNTED BEFORE WRITING (§14.1 rule 3, with the
   `haematology` correction that a framework slide costs ~85 words in this
   format and not ~55).
   THIRTY DEVELOPED ENTITIES at ~90 w: 1 physiologic jaundice · 2 ABO
   incompatibility · 3 Rh isoimmunisation / erythroblastosis fetalis ·
   4 hereditary spherocytosis · 5 G6PD deficiency · 6 non-haemolytic
   overproduction · 7 Crigler–Najjar I and II · 8 Gilbert syndrome ·
   9 breast-feeding-associated jaundice · 10 breast-milk jaundice · 11 acute
   bilirubin encephalopathy · 12 kernicterus · 13 phototherapy · 14 exchange
   transfusion · 15 neonatal seizures · 16 jitteriness · 17 benign neonatal
   sleep myoclonus · 18 benign familial neonatal convulsions · 19 neonatal
   hypoglycaemia · 20 PHHI · 21 neonatal hypocalcaemia · 22 caput succedaneum ·
   23 cephalhaematoma · 24 subgaleal haemorrhage · 25 chignon · 26 Erb palsy ·
   27 early-onset sepsis · 28 late-onset sepsis · 29 group B streptococcus ·
   30 neonatal meningitis = ~2,700.
   FRAMEWORK SLIDES NOT INSIDE AN ENTITY, costed one by one at ~85: bilirubin
   metabolism (two slides) · types of hyperbilirubinaemia · the overproduction
   causes tree · the decreased-conjugation tree · race and prematurity ·
   bilirubin toxicity determinants · risk factors for severe
   hyperbilirubinaemia · the evaluation run · the two nomograms · TABLE 2 ·
   exchange indications · exchange complications · the seizure definitions ·
   epidemiology · aetiology HAM · the six-panel injury map · the susceptibility
   plate · prognosis by cause · the seizure-type table · subtle convulsions ·
   the history run · onset by day · examination · the jitteriness table · the
   benign-movements table · Table 8.1 · the five-step diagnostic approach · the
   treatment algorithm · hypoglycaemia definition · aetiology · pathogenesis ·
   symptoms · the glucose ladder · resistant and persistent · the birth-injury
   classification · scalp anatomy · the DD matrix · sepsis definitions · the
   magnitude figures · the EONS/LONS grid · the pathogen chart · GBS risk
   factors · organs affected · host susceptibility · maternal, intrapartum and
   neonatal risk lists · the clinical picture · site-specific pictures · the
   common DD · the laboratory list · the haematological cut-off table · CRP vs
   PCT · presepsin and SAA · the biomarker limitation · blood culture · CSF and
   urine · empirical antibiotics · the duration table · supportive care ·
   STABLE · hypothermia and sepsis · adjunctive therapy = 61 × 85 = ~5,185, of
   which roughly half sits INSIDE the entity blocks above and is not additive.
   COMPARISON GRIDS AT ROWS × COLUMNS: causes tree (9×2) · ABO vs Rh (6×2) ·
   the two breast jaundices (5×2) · ABE vs kernicterus (4×2) · phototherapy
   plateaus (6×2) · TABLE 2 (5×1) · seizure types (4×2) · jitteriness vs seizure
   (7×2) · benign movements (8×4=32) · Table 8.1 (2×6) · EONS vs LONS (6×2) ·
   pathogen chart (8×2) · haematological cut-offs (9×2) · CRP vs PCT (5×2) ·
   antibiotic duration (7×2) · STABLE (6×2) · DD of scalp swellings (4×3) =
   ~230 cells at ~4 words = ~920, all of it inside the sections costed above.
   PREDICTION MADE BEFORE WRITING: 4,900–5,300 body words over ~37 sections,
   ~20–22 printed pages unsplit, requiring the three-way split of FINDING 0.
   The prediction is stated here in advance and compared with the measurement in
   the outcome block, never fitted to it.

   ⚠️ SIX GAPS, ANSWERED AND TAGGED rather than declared (CLAUDE.md §4). Each
   was greped across ALL 64 cached paediatrics decks before being called a gap,
   and each was checked against the rendered image slides FIRST:
     · TRANSCUTANEOUS BILIRUBIN AS A METHOD. L8 p.23 uses the abbreviation
       "TcB" in a risk-factor bullet and expands it in the slide's footnote, and
       never says what the device is or when it fails. `transcutaneous` returns
       hits in no other deck. Two lines in nnj-11.
     · THE CEPHALOCAUDAL PROGRESSION OF JAUNDICE / KRAMER'S RULE. `kramer`,
       `cephalocaudal` and `dermal zone` return ZERO corpus-wide, and L8's whole
       clinical-assessment content is "examination for sources of excessive heme
       breakdown". Two lines in nnj-11, because a clinical exam of a jaundiced
       baby cannot be written without it.
     · IVIG DOSE IN HAEMOLYTIC DISEASE. L8 p.11 says IVIG "given to the infant
       as soon as the diagnosis is made may decrease the need for exchange
       transfusion" and prints no dose. Named, not invented — the drop-list
       rule for doses the material does not state is followed, and the omission
       is on the record here.
     · NEONATAL HYPOCALCAEMIA'S THRESHOLD AND EARLY/LATE SPLIT. Deferred to me
       by `nutrition`, and the receiving deck is thinner than the row assumed —
       see FINDING 5. Written short in nns-10 and tagged.
     · UMBILICAL HERNIA AS A NEWBORN PROBLEM. Deferred to me by `endocrine`.
       `umbilical` in L8 and L11 means the umbilical VEIN and the umbilical
       CATHETER; the hernia is nowhere in my three decks. One line in nnj-2,
       tagged, so the row is discharged rather than dropped.
     · FIFTH-DAY FITS / BFNC BEYOND THE NAME. L10 p.11 gives "5th day seizure
       familial benign neonatal seizure" and p.15 the family history that
       suggests it, and nothing else. One line of substance added in nns-5 and
       tagged.

   ⚠️ SIX OMISSIONS, each a decision on the record:
     1. Cover, author, bismillah, "Topics" ILO index and "Thank you" slides.
     2. L10's thirteen unkeyed MCQs AS TEXT. Their CONTENT is written where the
        deck teaches it; only the four-option format is dropped.
     3. The bare bibliographic strings on the recovered plates — Huang/Tain/Lai
        (susceptibility), Mosca/Martins/Temudo (benign movements),
        Kemper/Newman/Slaughter (AAP), Chaurasia BMJ (pathogens). The SOURCE
        NAMES are kept where the plate is a guideline or a dataset the reader
        might need to identify (AAP 2022, Chaurasia BMJ 2019); the volume-and-
        page strings are not.
     4. L10 pp.21–23's cranial-ultrasound and MRI plates beyond one line each.
        They are unlabelled findings, not teaching diagrams: p.21 shows three
        unnamed IVH grades, p.22 one anomaly, p.23 two MRI slices. Naming a
        grade from an image the notes cannot reproduce would be invention.
     5. L11 p.26's "over 3,000 studies, almost 200 candidate biomarkers"
        framing beyond its one operative conclusion. The conclusion is kept.
     6. L11's WHONET programme mechanics (6-month data, 1st/2nd/3rd lines) as
        an administrative process. The PRINCIPLE it serves — empirical choice
        follows local antibiograms — is kept.

   ⚠️ SEVEN DEFERRALS RECEIVED, and where each landed (§14.5):
     · `haematology` → HEREDITARY SPHEROCYTOSIS AND G6PD DEFICIENCY as diseases.
       ✅ DELIVERED: nnj-6, both in full — the membrane/deformability mechanism,
       splenomegaly, the smear and family history for HS; the X-linked
       inactivation account, the ethnic distribution, the reticulocyte
       false-normal trap and the 3-month retest for G6PD. The row named L8's own
       headed sections and it was exactly right.
     · `perinatal` → NEONATAL JAUNDICE, HYPERBILIRUBINAEMIA AND KERNICTERUS.
       ✅ DELIVERED: the whole of nnj-1 … nnj-12.
     · `perinatal` → NEONATAL HYPOGLYCAEMIA as a disease.
       ✅ DELIVERED: nns-9, nns-10.
     · `perinatal` and `respiratory` → NEONATAL SEPSIS end to end.
       ✅ DELIVERED: the whole of nsp-1 … nsp-12. `respiratory`'s half-row —
       antenatal screening and treatment of pregnant women for group B
       streptococcus and Chlamydia trachomatis — is nsp-4's last bullet, cited
       to `30) Pneumonia` and not counted in TERM 1.
     · `neurological` → NEONATAL SEIZURES, BIRTH INJURIES, KERNICTERUS AND
       NEONATAL HYPOGLYCAEMIA. ✅ DELIVERED: nns-1 … nns-13 and nnj-10.
     · `endocrine` → NEONATAL AND NON-DIABETIC HYPOGLYCAEMIA — risk factors,
       PHHI, the 12 mg/kg/min threshold, hydrocortisone for resistant disease.
       ✅ DELIVERED: nns-9 and nns-10, every named item present.
     · `endocrine` → PROLONGED PHYSIOLOGIC JAUNDICE AND UMBILICAL HERNIA as
       newborn problems. ✅ DELIVERED with a correction: prolonged jaundice is
       nnj-3 and nnj-8 (hypothyroidism is named by L8 twice, exactly as the row
       predicted); UMBILICAL HERNIA IS NOT IN ANY OF MY THREE DECKS and is
       written tagged in nnj-2, one line, so the row closes.
     · `nutrition` → NEONATAL HYPOCALCAEMIA. ⚠️ DELIVERED SHORT — see FINDING 5.

   ============================================================================
   FINDING 5 — ⚠️ ONE RECEIVED REGISTER ROW OVERSTATES ITS DECK. Reported with
   evidence rather than manufactured, per §14.5.
   ============================================================================
   `nutrition` deferred NEONATAL HYPOCALCAEMIA here and verified the receiving
   deck as naming "metabolic hypocalcemia, late-onset hypocalcaemia and cow's-
   milk intake as its cause, AT FIVE SEPARATE LINES". Greped: `hypocalc` returns
   FOUR lines in L10, not five, and they are — (1) "Metabolic hypocalcemia and
   hypoglycemia" in the HAM aetiology list, (2) "Seizures due to SAH and late
   onset hypocalcemia carry a good prognosis", (3) "IEM, Late onset
   hypocalcemia. intake Cow's milk" under feeding history, (4) "Jitteriness may
   be due to hypoglycemia or hypocalcemia". A fifth mention exists but is
   "hypocalcemia" inside the ACUTE MANAGEMENT list of reversible causes, which
   is a treatment line, not an aetiology one. THE CONTENT IS REAL AND ALL OF IT
   IS WRITTEN (nns-3, nns-5, nns-6, nns-8, nns-10); what the row over-promised
   is that this constitutes an aetiology of neonatal hypocalcaemia. IT DOES NOT
   — L10 states no calcium threshold, no early-versus-late timing, and no cause
   list beyond cow's milk. The one number the deck gives is a TREATMENT dose,
   2 mL/kg of 10 % calcium gluconate IV under cardiac monitoring, and it is on
   the image-only algorithm slide (p.24), so it would have been lost without the
   render. The threshold and the early/late split are supplied and tagged in
   nns-10. The row is delivered as far as the deck allows and the shortfall is
   named here rather than filled silently and ticked.

   ⚠️ THE `neonatal` / `perinatal` BOUNDARY, drawn by `perinatal`'s agent and
   honoured here without change. MINE: the TERM newborn's problems — jaundice
   and bilirubin metabolism, haemolytic disease, spherocytosis and G6PD,
   neonatal seizures, birth injuries, neonatal hypoglycaemia, neonatal sepsis.
   THEIRS: classification of the newborn, prematurity organ by organ,
   respiratory distress in full, SGA/LGA/IDM, birth asphyxia and HIE.
   THE ONE PLACE THEY MEET is HIE, which L10 names as the commonest cause of
   neonatal seizures (40 %) and as the indication for therapeutic hypothermia.
   `perinatal-hie` writes it in full across thirteen sections; nns-3 and nns-8
   therefore carry ONLY the seizure-facing clauses — the 40 % share, the 12–24
   hour onset, the ≥36 week / 33.5–34.5 °C / 6 hour / 72 hour cooling line the
   deck itself prints — and point at `perinatal-hie` for the rest.

   ============================================================================
   ✅ TRUE MEASUREMENT — node `String(s.body).split(/\s+/).filter(Boolean).length`
   over `body` ONLY, run against the file ON DISK as the genuinely LAST action:
   after the compression pass, after the anchor pass, and after the two
   redundancy cuts. WRITING THIS BLOCK IS THE ONLY EDIT SINCE, AND IT TOUCHES
   NOTHING BUT THIS COMMENT.

   ⚠️ NO OUTCOME BLOCK WAS PRE-WRITTEN. Until this counter ran, the placeholder
   above said "NOT YET MEASURED". The prediction under BUDGET was written before
   the sections and is left exactly as it stood, wrong direction and all.
   ============================================================================

       body 6,582 words over 37 sections · intro 36 words · 0 questions filed
       weights: 35 `must`, 2 `high` · 19 tables, 141 table rows · 1 flow
       102 `###` sub-headings · 37 of 37 `Src:` lines · `qs: []` on all 37
       parse: `new Function(src)` clean; 0 unanchored lead-bold lines of 334

     nnj-1  179 · nnj-2  153 · nnj-3  125 · nnj-4  130 · nnj-5  252
     nnj-6  165 · nnj-7  146 · nnj-8  244 · nnj-9  128 · nnj-10 202
     nnj-11 428 · nnj-12 269
     nns-1  142 · nns-2  112 · nns-3  253 · nns-4   86 · nns-5  230
     nns-6  196 · nns-7  220 · nns-8  162 · nns-9  184 · nns-10 274
     nns-11 189 · nns-12 222 · nns-13 149
     nsp-1  132 · nsp-2   66 · nsp-3  143 · nsp-4  125 · nsp-5  142
     nsp-6  173 · nsp-7  130 · nsp-8  227 · nsp-9  116 · nsp-10 178
     nsp-11 216 · nsp-12  94

   THE THREE SPLIT UNITS, MEASURED (FINDING 0):
     · `neonatal`        nnj-1 … nnj-12  = 2,421 words = 10.1 pp at ÷240
     · `neonatal-seiz`   nns-1 … nns-13  = 2,419 words = 10.1 pp
     · `neonatal-sepsis` nsp-1 … nsp-12  = 1,742 words =  7.3 pp
     Sum 6,582 = 27.4 pp UNSPLIT, which is why the split is not optional.
     Every unit clears the ~13 pp hard shape with 3–6 pages of margin.

   AGAINST THE BANDS:
     · vs TERM 1, the honest union of 6,595: **6,582 = 99.8 %**, i.e. 13 words
       UNDER. Inside §14.1's 10 % trigger, so no page test is owed — but it was
       run anyway and every split unit passes.
     · vs theory-plan.md's published ceiling of 5,969: 110.3 %, 613 words over.
       That is the image-only content of FINDING 1 arriving in the notes, and it
       is the SMALLEST overshoot of the three visual-read paediatrics chapters —
       `haematology` landed at 134 % of its published ceiling and `perinatal` at
       168 % of its own. Nothing here is padding the counter could not have seen.
     · vs the caller's stated band of 4,200–4,600: 43 % over the top of it. That
       band is 73–77 % of the PUBLISHED ceiling and the published ceiling was
       wrong by 613 words for this chapter; 74 % of the corrected 6,595 is
       ~4,880, so the honest overshoot against a corrected band is 35 %, not 43.
       ⚠️ STATED PLAINLY RATHER THAN EXPLAINED AWAY: this chapter did NOT land
       at 74 % and no arithmetic makes it. The reason is the entity count. It
       carries THIRTY developed entities across three unrelated decks — jaundice
       alone has fourteen — against `perinatal`'s twenty-one and `cardiac`'s
       eleven, and §14.1's ~90-words-per-entity floor is 2,700 before a single
       framework slide is costed. The floor, not the ceiling, governed here.
     · vs my own pre-writing prediction of 4,900–5,300: **the prediction was
       1,300 words LOW, and the reason is on the record.** I costed 61 framework
       slides at 85 and then wrote "of which roughly half sits INSIDE the entity
       blocks and is not additive". That halving was a guess and it was too
       generous: the entity blocks and the framework slides overlap by nearer a
       third than a half, because these decks teach each disease ONCE and then
       teach five separate frameworks (the causes tree, the risk-factor list, the
       evaluation run, the investigation table, the duration table) that name no
       disease at all. **The `haematology` correction raised the per-slide rate
       from 55 to 85 and that held; what is still unreliable is the OVERLAP
       fraction, and the next agent should cost it at one third, not one half.**

   ⚠️ WHAT A FURTHER 600 WORDS WOULD HAVE COST, itemised per §14.1 rather than
   quietly cut. A systematic tightening pass was already run (345 words, no fact
   removed) and two genuine redundancies were cut afterwards (the two bullets in
   nns-12 that restated rows of the table above them, and one clause of nns-3's
   overlap with its own HAM list). Past that, the next 600 words are content:
   the AAP plateau table (~70), TABLE 2 (~70), the eight benign movement
   disorders (~130), the twelve items of Table 8.1 (~110), the nine
   haematological cut-offs (~90), and the four tagged general-knowledge
   supplements that discharge four received register rows (~150). Every one of
   those is a fact an examiner can ask for, and five of the six are plates the
   visual read is the only reason we have. STOPPED AT THE FLOOR, per §14.1.

   ⚠️ ONE SECTION IS OVERSIZED AND IT IS DELIBERATE: nnj-11 at 428 words, nearly
   double the next. It is the assessment-and-threshold section — risk factors,
   evaluation, both nomograms and TABLE 2 — and splitting it would put the
   thresholds in one section and the list that decides WHICH threshold applies
   in another. If the hub wants it halved the clean cut is after the evaluation
   bullets, with the AAP block becoming its own `nnj-11b`; nothing depends across
   that line. Recorded so the choice is visible either way.
*/

var THEORY_DRAFT = {

  'neonatal': {

    intro: 'Three decks on what happens to a baby born on time: it turns yellow, it fits, its sugar falls, the delivery marked it, or it gets infected. Prematurity, breathlessness and asphyxia are next door in `perinatal`.',

    sections: [

{
  id: 'nnj-1', w: 'must',
  h: 'Neonatal jaundice — the numbers, and where bilirubin comes from',
  body: [
    '### How common, and how dangerous',
    '- **Visible jaundice:** **65 % of newborns**, with a **total serum bilirubin (TSB) above 6 mg/dL** in the first week.',
    '- **Excessive hyperbilirubinaemia:** **8–10 %** of newborns.',
    '- **Extreme TSB:** rare, but causes **kernicterus** — **injury to the basal ganglia and brainstem**.',
    '',
    '### Bilirubin metabolism',
    '- **Source:** breakdown of **haem (iron protoporphyrin)** in the **RES and bone marrow**.',
    '- **Haem oxygenase cleaves it to three:** **iron** (conserved) · **carbon monoxide** (exhaled) · **biliverdin**.',
    '- **Biliverdin → bilirubin:** by **bilirubin reductase**.',
    '- **Transport:** unconjugated bilirubin **bound to albumin**, taken up by hepatocytes.',
    '- **Conjugation:** **uridyl diphosphoglucuronyl transferase (UDPGT, glucuronyl transferase)** attaches **one or two glucuronide molecules**.',
    '- **Excretion:** into **bile → intestine**, metabolised by **normal gut flora**, passed in stool.',
    '',
    '### Why the newborn re-absorbs it — the enterohepatic circulation',
    '- **Two newborn defects:** **absent gut flora** and **slow GI motility**.',
    '- **Consequence:** conjugated bilirubin **stagnates in the lumen**.',
    '- **The enzyme that undoes it:** mucosal **β-glucuronidase** strips the glucuronide off.',
    '- **Result:** **unconjugated bilirubin is reabsorbed** — the **enterohepatic circulation**.',
    '',
    'Src: L8 pp.2–4'
  ].join('\n'),
  qs: []
},

{
  id: 'nnj-2', w: 'must',
  h: 'Unconjugated or conjugated — the first fork',
  body: [
    '- **What sets the level:** the **balance of the rate of production against the rate of excretion**.',
    '- **⚠️ How it is judged:** an **HOUR-SPECIFIC TSB** against a standard curve of **TSB by age in hours** — never a single number.',
    '- **Fractionate it:** serum bilirubin splits into an **unconjugated** and a **conjugated** component.',
    '',
    '### Which one, and what it means',
    '- **Unconjugated:** **most neonatal jaundice presenting in the first week**.',
    '- **Conjugated:** **congenital infections · intrahepatic cholestasis · extrahepatic biliary obstruction**.',
    '',
    '*Conjugated hyperbilirubinaemia as a disease — biliary atresia, the infantile cholestasis work-up — is `liver`, from `43)Infantile cholestasis_`.*',
    '',
    '**Umbilical hernia** *(not in course material)* **—** a soft, reducible, skin-covered umbilical swelling, common at term and commoner in **prematurity, hypothyroidism and Down syndrome**; **most close by 3–4 years**, and surgery is for persistence, a large defect or incarceration.',
    '',
    'Src: L8 p.5; the umbilical hernia entry supplied and tagged, deferred here by `endocrine`'
  ].join('\n'),
  qs: []
},

{
  id: 'nnj-3', w: 'must',
  h: 'Physiologic jaundice — four criteria, and the line that makes it pathologic',
  body: [
    '### The four defining features',
    '- **Timing of onset:** visible jaundice appearing **AFTER 24 hours of age**.',
    '- **Rate of rise:** total bilirubin rises by **less than 5 mg/dL (86 µmol/L) per day**.',
    '- **Peak:** at **3–5 days of age**, and **no higher than 15 mg/dL (258 µmol/L)**.',
    '- **Resolution:** by **1 week in the full-term** infant, **2 weeks in the preterm**.',
    '',
    '### The five factors that produce it',
    '- **Low UDPGT activity** · **relatively high red cell mass** · **absence of intestinal flora** · **slow intestinal motility** · **increased enterohepatic circulation** in the first days.',
    '',
    '### ⚠️ The exclusion that matters most',
    '**Before 24 hours:** **visible jaundice with a TSB above 5 mg/dL** is **most commonly significant haemolysis** — never physiologic.',
    '',
    'Src: L8 pp.6–7'
  ].join('\n'),
  qs: []
},

{
  id: 'nnj-4', w: 'must',
  h: 'Pathologic unconjugated hyperbilirubinaemia — the causes tree',
  body: [
    'Two branches only: **overproduction of bilirubin**, or **decreased conjugation**.',
    '',
    '### Overproduction — and the reticulocyte count separates the two halves',
    '',
    '|Group|Reticulocytes|Coombs (DAT)|Causes|',
    '|---|---|---|---|',
    '|**Immune haemolysis**|**Elevated**|**POSITIVE**|**ABO incompatibility · Rh incompatibility · minor blood group antigen incompatibility**|',
    '|**Non-immune haemolysis**|**Elevated**|**NEGATIVE**|**Abnormal red cell shapes** — spherocytosis, elliptocytosis, pyknocytosis, stomatocytosis · **red cell enzyme defects** — G6PD, pyruvate kinase, hexokinase · **metabolic defects**|',
    '|**Non-haemolytic**|**NORMAL**|—|**Extravascular haemorrhage** — cephalhaematoma, extensive bruising, intracranial haemorrhage · **polycythaemia** · **exaggerated enterohepatic circulation** — bowel obstruction, functional ileus · **breastfeeding-associated jaundice**|',
    '',
    '### Decreased rate of conjugation',
    '- **Crigler–Najjar type I:** **complete** glucuronyl transferase deficiency, **autosomal recessive**. Rare, severe.',
    '- **Crigler–Najjar type II:** **partial** deficiency, **autosomal dominant**.',
    '- **Gilbert syndrome:** **common, milder**.',
    '- **Hypothyroidism.**',
    '',
    '*Cephalhaematoma as a birth injury, with its own differential, is nns-12; congenital hypothyroidism is `endocrine`.*',
    '',
    'Src: L8 pp.7–9'
  ].join('\n'),
  qs: []
},

{
  id: 'nnj-5', w: 'must',
  h: 'ABO incompatibility and Rh isoimmunisation',
  body: [
    '### ABO incompatibility',
    '- **Who:** **any pregnancy in a type O mother**.',
    '- **Severity:** usually **mild**, but **UNPREDICTABLE** — maternal **anti-A / anti-B IgG** varies.',
    '- **The numbers:** **15 % of pregnancies are "setups"** (mother O, infant A or B); **33 %** of those are **Coombs-positive**; **under 10 %** of those need therapy.',
    '- **⚠️ The late trap:** maternal antibody **persists for months**, so the infant may grow **progressively anaemic over the first few weeks**, sometimes needing transfusion.',
    '',
    '### Rh isoimmunisation',
    '- **Character:** **less common, MORE severe, MORE predictable** than ABO.',
    '- **⚠️ It worsens each time:** severity **increases with each immunised pregnancy**.',
    '- **Prevention:** **high-titre Rho(D) immune globulin** to the Rh-negative woman after **invasive procedures, miscarriage, abortion, or delivery of an Rh-positive infant**.',
    '- **At birth:** often **already anaemic**; continued haemolysis gives **hyperbilirubinaemia and worsening anaemia**.',
    '',
    '### Erythroblastosis fetalis — the severe end',
    '- **Triad:** **life-threatening anaemia · generalised oedema · fetal or neonatal heart failure**.',
    '- **Untreated:** fetal or neonatal **death often results**.',
    '- **Antenatal cornerstone:** **transfuse the FETUS with Rh-NEGATIVE cells**, into the **umbilical vein** or the **fetal abdominal cavity**.',
    '- **At delivery:** **phototherapy from birth**, **exchange transfusion frequently needed**.',
    '- **IVIG** as soon as the diagnosis is made **may reduce the need for exchange** (L8 states no dose).',
    '- **⚠️ Follow-up:** haemolysis runs until all maternal antibody is gone — **monitor 2–3 months for recurrent anaemia**.',
    '',
    '|Feature|ABO|Rh|',
    '|---|---|---|',
    '|**Frequency**|**Commoner**|**Less common**|',
    '|**Severity**|**Usually mild**|**More severe**|',
    '|**Predictability**|**Unpredictable**|**Predictable**|',
    '|**Effect of successive pregnancies**|**No trend**|**Worsens each time**|',
    '|**Preventable antenatally**|**No**|**YES — anti-D**|',
    '',
    'Src: L8 pp.10–11'
  ].join('\n'),
  qs: []
},

{
  id: 'nnj-6', w: 'must',
  h: 'Hereditary spherocytosis and G6PD deficiency',
  body: [
    '### Hereditary spherocytosis',
    '- **Rank:** the **commonest red cell MEMBRANE defect**.',
    '- **Mechanism:** haemolysis by **decreasing red cell deformability**.',
    '- **In the newborn:** hyperbilirubinaemia may be **severe enough to need exchange transfusion**.',
    '- **Sign:** **splenomegaly may be present**.',
    '- **Diagnosis:** suspected on the **peripheral blood smear** and the **family history**.',
    '',
    '### G6PD deficiency',
    '- **Rank:** the **commonest red cell ENZYME defect causing haemolysis**.',
    '- **Who:** infants of **African, Mediterranean or Asian descent**.',
    '- **⚠️ X-linked, but girls are still at risk:** **female heterozygotes** are affected through **X-chromosome inactivation**.',
    '- **Two mechanisms at once:** increased bilirubin **production**, exaggerated by a **decreased rate of conjugation**.',
    '- **⚠️ THE TESTING TRAP:** **G6PD activity is HIGH IN RETICULOCYTES**, so a reticulocytosis gives a **falsely normal enzyme test**.',
    '- **So:** **a low level always raises suspicion**, and a suspect case with a normal result is **retested at 3 months**.',
    '',
    '*Both as haematological diseases outside the newborn are `haematology`; the causes tree there names them and points here.*',
    '',
    'Src: L8 pp.12–13'
  ].join('\n'),
  qs: []
},

{
  id: 'nnj-7', w: 'must',
  h: 'Non-haemolytic overproduction, and the conjugation defects',
  body: [
    '### Non-haemolytic increased production',
    '- **Enclosed haemorrhage:** **cephalhaematoma · intracranial haemorrhage · extensive skin bruising**.',
    '- **Polycythaemia:** increased red cell mass, so **more cells reach senescence each day**.',
    '- **Bowel obstruction:** functional or mechanical, raising the **enterohepatic circulation**.',
    '',
    '### Crigler–Najjar syndrome',
    '- **Defect:** **UDPGT gene mutations** giving **complete or nearly complete absence of enzyme activity**.',
    '- **Type I:** complete deficiency, **autosomal recessive**. **Type II:** partial, **autosomal dominant**.',
    '- **Untreated:** **severe unconjugated hyperbilirubinaemia, encephalopathy, death**.',
    '- **⚠️ Type II is inducible:** **phenobarbital lowers bilirubin by 30–80 %**. Type I is not.',
    '- **Cure:** **liver transplantation**.',
    '',
    '### Gilbert syndrome',
    '- **Nature:** **common, mild, autosomal dominant**.',
    '- **Defect:** low hepatic UDPGT activity from a **polymorphism at the PROMOTER region** — not the coding sequence.',
    '- **Prevalence:** **~9 % homozygous, 42 % heterozygous**.',
    '- **Behaviour:** jaundice **whenever the bilirubin load rises**; more **prolonged neonatal and breast-milk jaundice**.',
    '',
    'Src: L8 pp.14–16'
  ].join('\n'),
  qs: []
},

{
  id: 'nnj-8', w: 'must',
  h: 'Race, prematurity, and the two breastfeeding jaundices',
  body: [
    '### Unknown or multiple factors',
    '- **Race:** peak TSB above **12 mg/dL (206 µmol/L)** in **Asians 23 % · whites 10–13 % · African Americans 4 %** — probably **UDPGT polymorphism or G6PD deficiency**.',
    '- **Prematurity:** **poor enteral intake, delayed stooling, increased enterohepatic circulation, shorter red cell life**.',
    '- **⚠️ The late-preterm number:** at **35–36 weeks, 13 TIMES more likely than term** to be **readmitted for hyperbilirubinaemia**.',
    '',
    '### Breast-FEEDING-associated jaundice — "lack of breast milk" jaundice',
    '- **Incidence:** **9 % of breastfed** infants against **2 % of formula-fed**.',
    '- **Mechanism:** **poor intake and increased enterohepatic circulation** — a feeding failure, not a milk problem.',
    '- **⚠️ Read it as a warning:** excessive jaundice **may mean the milk supply is not established**.',
    '- **Assessing feeding:** monitor **weight, urine output and stool output**.',
    '- **Management:** **supplemental formula · nurse more often · electric pump every 2 hours · lactation specialist**.',
    '- **⚠️ Why follow-up exists:** discharge precedes **both the milk supply and the jaundice peak** — AAP advises a **visit 2 days after discharge**.',
    '',
    '### Breast-MILK jaundice',
    '- **Duration:** unconjugated hyperbilirubinaemia **to 2–3 months**, common in breastfed infants.',
    '- **The diagnostic picture:** **moderate unconjugated hyperbilirubinaemia for 6–12 weeks in a THRIVING breastfed infant**, with **no haemolysis, hypothyroidism or other disease**.',
    '',
    '|Feature|Breast-FEEDING jaundice|Breast-MILK jaundice|',
    '|---|---|---|',
    '|**Cause**|**Not enough milk taken**|**A property of the milk**|',
    '|**Timing**|**First week**|**Persists 6–12 weeks, up to 2–3 months**|',
    '|**Weight**|**Poor gain, excess loss**|**THRIVING**|',
    '|**Action**|**Feed more, supplement, pump**|**Exclude haemolysis and hypothyroidism, then reassure**|',
    '',
    'Src: L8 pp.17–19'
  ].join('\n'),
  qs: []
},

{
  id: 'nnj-9', w: 'must',
  h: 'Bilirubin toxicity — what decides whether the brain is hurt',
  body: [
    '- **The toxic agent:** the **unconjugated bilirubin ANION**, not total bilirubin.',
    '- **⚠️ No proven cut-off:** it is **unknown whether a fixed level exists above which damage always occurs**.',
    '- **The barrier:** the **blood–brain barrier protects**, but **its integrity cannot be measured clinically**.',
    '- **The buffer:** **albumin binds unconjugated bilirubin** and is **protective**.',
    '- **So two things matter:** **how much albumin is free**, and **whether other anions are displacing bilirubin off it**.',
    '',
    '### The five risk determinants',
    '- **Duration** of hyperbilirubinaemia · **serum albumin concentration** · **associated illness** · **acidosis** · **competing anions**.',
    '- **⚠️ The two named competitors:** **sulfamethoxazole** and **ceftriaxone** — both compete for the albumin binding site.',
    '- **Baseline risk:** small in a **healthy term neonate even at 25–30 mg/dL (430–516 µmol/L)**.',
    '',
    'Src: L8 p.20'
  ].join('\n'),
  qs: []
},

{
  id: 'nnj-10', w: 'must',
  h: 'Acute bilirubin encephalopathy and kernicterus',
  body: [
    '### Acute bilirubin encephalopathy — evolving injury',
    '- **Early:** **lethargy, poor feeding**.',
    '- **Then:** **irritability, high-pitched cry**.',
    '- **Then:** **arching of the neck (retrocollis) and of the trunk (opisthotonos)**.',
    '- **Late:** **apnoea, seizures, coma**.',
    '- **⚠️ The earliest sign is the least alarming:** *"sleepy and not interested in feeding"* — nonspecific, and still the trigger.',
    '- **What it triggers:** detailed **birth, postnatal, feeding and elimination history**, urgent assessment for **bilirubin-induced neurologic dysfunction (BIND)**, and **TSB with albumin**.',
    '- **Most sensitive test of neurotoxicity:** the **auditory brainstem-evoked response**.',
    '',
    '### Kernicterus — chronic, and irreversible',
    '- **Movement:** **extrapyramidal — choreoathetoid cerebral palsy**.',
    '- **Eyes:** **gaze abnormality, especially limitation of UPWARD gaze**.',
    '- **Hearing:** deafness; **a failed ABR with NORMAL otoacoustic emissions** — **auditory neuropathy / dyssynchrony**.',
    '- **Teeth:** **dysplasia of the enamel of the deciduous teeth**.',
    '- **Diagnosis is CLINICAL.** **MRI is nearly diagnostic** if abnormality is **isolated to the globus pallidus, subthalamic nuclei, or both**.',
    '',
    '|Feature|Acute encephalopathy|Kernicterus|',
    '|---|---|---|',
    '|**Timing**|**During the hyperbilirubinaemia**|**The permanent sequel**|',
    '|**Reversible**|**Potentially**|**NO**|',
    '|**Hallmark**|**Retrocollis and opisthotonos**|**Choreoathetoid CP + deafness**|',
    '|**Test**|**ABR, TSB, albumin**|**Clinical; MRI globus pallidus / subthalamic nuclei**|',
    '',
    '*Kernicterus is also one of L10’s HAM causes of neonatal seizures, and one of `neurological`’s perinatal risk factors for cerebral palsy.*',
    '',
    'Src: L8 pp.21–22'
  ].join('\n'),
  qs: []
},

{
  id: 'nnj-11', w: 'must',
  h: 'Who is at risk, how the baby is assessed, and the phototherapy thresholds',
  body: [
    '### The eight risk factors for severe hyperbilirubinaemia',
    '- **Bilirubin —** a **predischarge TSB or TcB close to the phototherapy threshold**; **jaundice in the first 24 h**.',
    '- **Haemolysis —** **blood group incompatibility with a positive direct Coombs**, or **G6PD deficiency**.',
    '- **Gestational age 35–36 weeks** · **a previous sibling who needed phototherapy**.',
    '- **Cephalhaematoma or significant bruising** · **exclusive breastfeeding with excessive weight loss**.',
    '- **Jaundice seen before discharge** · **a macrosomic infant of a diabetic mother**.',
    '',
    '### Evaluation',
    '- **History:** **feeding and elimination**; **birth weight and per cent weight change since birth**.',
    '- **Examination:** for **sources of excessive haem breakdown**.',
    '- **Always:** **blood type · Coombs · CBC with smear · serum albumin · TSB**.',
    '- **G6PD:** if jaundice is **otherwise unexplained**, and in **African-American infants with severe jaundice**.',
    '- **⚠️ FRACTIONATE the bilirubin** if the infant **appears ill**, or has **prolonged jaundice, acholic stool, hepatosplenomegaly or dark urine** — the cholestasis question.',
    '- **Transcutaneous bilirubin (TcB)** *(not in course material)* **—** a **non-invasive reflectance screen** for who needs a blood TSB; **unreliable once phototherapy has started** and at high levels, so **a value near the threshold is confirmed on serum**.',
    '- **Cephalocaudal progression** *(not in course material)* **—** jaundice starts at the **face and descends to the palms and soles as TSB rises**, so **the soles are the alarming site**; visual estimation **never replaces measurement**.',
    '',
    '### The AAP 2022 phototherapy thresholds',
    '- **The plot:** **TSB in mg/dL against age in HOURS**, to **336 h (14 days)**, **one curve per gestational week**.',
    '- **⚠️ Use TSB — do NOT subtract the direct-reacting or conjugated fraction.**',
    '- **Two charts, and TABLE 2 picks which:** **Figure 2** with **no neurotoxicity risk factors**, **Figure 3** with **one or more**.',
    '- **Shape:** thresholds **rise with gestational and postnatal age**, and **plateau at about 96 hours (day 4)**.',
    '',
    '|Gestation|Plateau, NO risk factors (Fig 2)|Plateau, ONE OR MORE (Fig 3)|',
    '|---|---|---|',
    '|**≥ 40 weeks**|**~21.8 mg/dL**|—|',
    '|**39 weeks**|**~21.5**|—|',
    '|**38 weeks**|**~20.8**|**~18.3**|',
    '|**37 weeks**|**~20.1**|**~18.3**|',
    '|**36 weeks**|**~19.4**|**~17.0**|',
    '|**35 weeks**|**~18.7**|**~16.1**|',
    '',
    '**TABLE 2 — the five hyperbilirubinaemia neurotoxicity risk factors:**',
    '- **Gestational age under 38 weeks**, worsening with the degree of prematurity.',
    '- **Albumin below 3.0 g/dL.**',
    '- **Isoimmune haemolytic disease** (**positive DAT**), **G6PD deficiency**, or other haemolytic conditions.',
    '- **Sepsis.**',
    '- **Instability —** **significant clinical instability in the previous 24 hours**.',
    '',
    '*Curve values are read off the printed nomograms and are approximate; the charts are the instrument.*',
    '',
    'Src: L8 pp.23–24, 26–28 (pp.26–28 are image-only nomograms recovered by render; attributed on the slide to Kemper, Newman & Slaughter, Pediatrics 2022, AAP). TcB and cephalocaudal progression supplied and tagged'
  ].join('\n'),
  qs: []
},

{
  id: 'nnj-12', w: 'must',
  h: 'Phototherapy and exchange transfusion',
  body: [
    '### Phototherapy',
    '- **Rank:** the **commonest treatment** of unconjugated hyperbilirubinaemia; **non-invasive and safe**.',
    '- **Expected effect:** **TSB down 30–40 % in the first 24 hours** with intensive phototherapy.',
    '- **⚠️ Shield the eyes — to prevent retinal damage.**',
    '- **Elective start:** TSB about **6 mg/dL (102 µmol/L) BELOW that infant’s predicted exchange level**.',
    '- **Tool:** the AAP thresholds for **≥ 35 weeks** are in **BiliTool**.',
    '- **Feed by mouth** where possible, **to cut the enterohepatic circulation**.',
    '- **Where:** the **mother’s room**, or a room she can stay in with the infant.',
    '',
    '### Exchange transfusion — escalation',
    '- **⚠️ The trigger:** a bilirubin **within 2 mg/dL of the double-volume exchange threshold** demands **rapid escalation**.',
    '- **Where:** a **NICU that can perform exchange**, before irreversible neurologic damage.',
    '- **Meanwhile:** **intensive phototherapy immediately, during transport if possible**.',
    '',
    '### Exchange transfusion — the procedure',
    '- **Volume:** **double volume ≈ 160–200 mL/kg body weight**.',
    '- **Typical indication:** extreme hyperbilirubinaemia from **Rh isoimmunisation, ABO incompatibility or hereditary spherocytosis**.',
    '- **What it achieves:** **TSB down ~50 %**, **~80 % of sensitised cells and offending antibody removed**, so haemolysis falls.',
    '- **Three other indications:** **TSB above 30 mg/dL** · **signs of encephalopathy** · **TSB not down 0.5 mg/dL/h after 4 hours of intensive phototherapy**.',
    '- **⚠️ Decide on TSB —** **NOT on the unconjugated fraction**.',
    '',
    '### Complications',
    '- **Mortality 1–5 %**, worst in the **smallest, most immature, unstable** infants; do it at a **referral centre**.',
    '- **⚠️ Sudden death —** it **can occur during the procedure in ANY infant**.',
    '- **Serious complications 5–10 %:** **necrotizing enterocolitis · infection · electrolyte disturbance · thrombocytopenia**.',
    '',
    'Src: L8 pp.25, 28–31'
  ].join('\n'),
  qs: []
},

{
  id: 'nns-1', w: 'must',
  h: 'Neonatal seizures — two definitions, three categories, and the incidence',
  body: [
    '### The clinical definition',
    'A **paroxysmal alteration in neurologic function** — **motor, behavioural and/or autonomic** — indicating **neurological damage or a severe illness needing urgent treatment**.',
    '',
    '### The electrographic definition',
    'A pattern of **sudden, repetitive, evolving stereotyped waveform with a beginning and an end**, **duration usually over 10 seconds**.',
    '',
    '### The three categories, and why they exist',
    '- **Epileptic:** clinical phenomena **WITH** an EEG correlate — e.g. **clonic**.',
    '- **Non-epileptic:** clinical seizures **WITHOUT** an EEG correlate — e.g. **subtle**, **generalised tonic**.',
    '- **EEG seizures:** **abnormal EEG activity with no clinical correlate**.',
    '',
    '### Incidence',
    '- **Overall:** **1.5–5.5 per 1,000 live births** (National Neonatal Perinatal Database, 2002–03).',
    '- **⚠️ It rises as gestation and weight fall.**',
    '- **Preterm against term:** **20.8 against 8.4 per 1,000** — almost double.',
    '- **Very low birth weight:** **36.1 per 1,000** — more than four-fold.',
    '',
    'Src: L10 pp.2–3, 20'
  ].join('\n'),
  qs: []
},

{
  id: 'nns-2', w: 'high',
  h: 'Why the newborn brain seizes, and why so much of it is invisible',
  body: [
    '### The excitation–inhibition imbalance',
    '',
    '|Increased excitatory|Decreased inhibitory|',
    '|---|---|',
    '|**Overabundance of synaptic connections**|**GABA synapses form BEFORE glutamatergic synapses**|',
    '|**Overexpression of glutamatergic receptors**|**Lack of a developed inhibitory network**|',
    '|**Altered composition of NMDA and AMPA receptors**|**Immature astrocyte**|',
    '|**Excitatory nature of GABA**|**Gap junctions are prevalent and facilitate seizure spread**|',
    '',
    '- **⚠️ GABA is EXCITATORY in the newborn brain**, which is why the adult logic of inhibition does not transfer.',
    '',
    '### Why the seizure may not be seen',
    '**The rule:** **seizures produce abnormal MOVEMENTS only if the discharge reaches the MOTOR CORTEX**. A discharge confined elsewhere gives nothing to watch — the mechanism behind the electrographic-only rule in nns-7.',
    '',
    'Src: L10 pp.4–5 (both image-only, recovered by render)'
  ].join('\n'),
  qs: []
},

{
  id: 'nns-3', w: 'must',
  h: 'Aetiology — HAM, the six injury groups, and what the cause predicts',
  body: [
    '### HAM — the deck’s own aetiology list',
    '- **Hypoxic-ischaemic encephalopathy — 40 %** — and **stroke**.',
    '- **Intracranial haemorrhage.**',
    '- **Kernicterus / hyperbilirubinaemia.**',
    '- **Meningitis, encephalitis and septicaemia.**',
    '- **Metabolic:** **hypocalcaemia and hypoglycaemia**.',
    '- **Also:** **IEM · brain anomalies · abstinence syndrome · pyridoxine deficiency · genetic and epileptic syndromes**.',
    '',
    '### The six major causes of neonatal brain injury',
    '- **HIE / neonatal encephalopathy:** **commonest acute symptomatic cause at term**; onset **in the first 12–24 hours**; eligible infants **benefit from therapeutic hypothermia**.',
    '- **IVH / white matter injury:** **preterm ≤ 32 weeks or VLBW** — **germinal matrix fragility**, ventricular bleeding, **posthaemorrhagic ventricular dilatation**.',
    '- **Perinatal stroke:** often **focal clonic**; suspect it when seizures are **lateralized** or imaging is **unilateral**.',
    '- **Infection:** meningitis, encephalitis and sepsis, which **also worsen the brain injury**.',
    '- **Metabolic:** **always check glucose, calcium, magnesium, sodium**; consider **pyridoxine-dependent** or other IEM when **refractory**.',
    '- **Structural / genetic:** **malformations, channelopathies, neonatal epilepsies** — when **persistent or unexplained**.',
    '',
    '### ⚠️ Two rankings the deck asks for directly',
    '- **Commonest cause in the FULL-TERM infant: HIE.**',
    '- **Commonest cause in the PRETERM infant: IVH.**',
    '',
    '### Why identifying the cause matters',
    '- **Treat the cause and the seizure can stop** — often without long-term therapy.',
    '- **⚠️ Prognosis follows the CAUSE —** not the seizure. **Good:** SAH, **late-onset** hypocalcaemia. **High risk:** **hypoglycaemia, cerebral malformations, meningitis**.',
    '',
    '*HIE as a disease — Sarnat and Thompson staging, the phases of injury, cooling criteria — is `perinatal-hie` in full.*',
    '',
    'Src: L10 pp.6–8; the term/preterm ranking L10 pp.50–51'
  ].join('\n'),
  qs: []
},

{
  id: 'nns-4', w: 'must',
  h: 'Types of seizure, and the subtle seizure in detail',
  body: [
    '|Type|Note|',
    '|---|---|',
    '|**Subtle**|**Most common type of seizure**|',
    '|**Tonic**|**Preterm patients with IVH**|',
    '|**Clonic**|**Focal clonic has the BEST prognosis**|',
    '|**Myoclonic**|**WORST prognosis of all types**|',
    '',
    '### The five subtle manifestations',
    '- **Ocular:** **tonic horizontal deviation of the eyes**, or **sustained eye opening with ocular fixation**, or **cycled fluttering**.',
    '- **Oral–facial–lingual:** **chewing, lip-smacking**.',
    '- **Limb:** **cycling, paddling**.',
    '- **Autonomic:** **tachycardia or bradycardia**.',
    '- **⚠️ Apnoea:** a **rare** manifestation of seizure — with **tachycardia early and bradycardia late**, which is what separates it from apnoea of other causes.',
    '',
    'Src: L10 pp.9–10'
  ].join('\n'),
  qs: []
},

{
  id: 'nns-5', w: 'must',
  h: 'History and examination — the day of onset does most of the work',
  body: [
    '### Describing the event',
    '- **Get a complete description** from the parents, or by **video recording**.',
    '- **Awake or asleep:** an event only in sleep suggests **benign neonatal sleep myoclonus**.',
    '',
    '### Onset by day of life',
    '- **Day 0–3:** **perinatal asphyxia · intracranial haemorrhage · drug abstinence · metabolic causes**.',
    '- **Day 4–7:** **sepsis · meningitis · metabolic causes · developmental defects**.',
    '- **⚠️ Fifth day:** **benign familial neonatal seizure** — the classic "fifth-day fit".',
    '',
    '### The rest of the history',
    '- **Antenatal:** **intrauterine infection, maternal diabetes, narcotic addiction**; **sudden increase in fetal movements**.',
    '- **Feeding:** a **sepsis-like picture AFTER a feed** suggests **IEM**, or **late-onset hypocalcaemia from cow’s milk**.',
    '- **Family:** **consanguinity**, family history of **seizures, mental retardation, early fetal or neonatal deaths** → **IEM**. Neonatal seizures **in a parent or sibling** → **benign familial neonatal convulsions (BFNC)**.',
    '- **BFNC** *(not in course material)* **—** **autosomal dominant**, usually **KCNQ2/KCNQ3** channel mutations, **remitting within weeks to months** with **normal development** in most.',
    '',
    '### Examination',
    '- **Vitals**, then **gestational age, birth weight, pallor, malformations**.',
    '- **⚠️ Jitteriness on general examination** may itself be **hypoglycaemia or hypocalcaemia**.',
    '- **CNS:** a **bulging anterior fontanelle** → **meningitis or intracranial haemorrhage**; **fundus for chorioretinitis**.',
    '- **Systemic:** **hepatosplenomegaly or an abnormal urine odour** → **IEM**.',
    '- **Skin:** **neurocutaneous markers** — **hypopigmented ash-leaf macules of tuberous sclerosis**.',
    '',
    'Src: L10 pp.11, 15–17; the BFNC genetics supplied and tagged'
  ].join('\n'),
  qs: []
},

{
  id: 'nns-6', w: 'must',
  h: 'The mimics — jitteriness, sleep myoclonus and the benign movement disorders',
  body: [
    '### Jitteriness against seizure',
    '',
    '|Feature|Jitteriness|Seizure|',
    '|---|---|---|',
    '|**Stimulus sensitive**|**++**|**−**|',
    '|**Cessation**|**Passive flexion and gentle grasp stop it**|**Nothing stops it**|',
    '|**Frequency of jerk**|**5–6 per second**|**2–3 per second**|',
    '|**Rhythmicity**|**Rhythmic oscillation**|**Fast and slow component**|',
    '|**Abnormal gaze or eye movement**|**Nil**|**Present**|',
    '|**Autonomic disturbance**|**Nil**|**Increased HR and BP**|',
    '|**aEEG**|**Normal**|**Abnormal**|',
    '',
    '### Benign neonatal sleep myoclonus',
    '- **When:** **non-REM sleep**, **preterm** infants, **first week of life**.',
    '- **⚠️ Backwards to a seizure:** **restraint and benzodiazepines INCREASE the jerks**.',
    '- **The confirming sign:** **rapidly abolished on arousal**; **EEG normal**.',
    '',
    '### The other transient benign paroxysmal movement disorders of infancy',
    '',
    '|Disorder|Onset|Resolution|Secondary causes|Testing|',
    '|---|---|---|---|---|',
    '|**Jitteriness**|**< 2 weeks**|**< 1 month** (2 months–1 year)|**Yes**|**Biochemical tests, EEG**|',
    '|**Benign neonatal sleep myoclonus**|**< 2 weeks**|**< 6 months**|**Yes**|**EEG**|',
    '|**Shuddering**|**< 1 year**|**< 4 years**|**No**|**EEG**|',
    '|**Benign myoclonus of early infancy**|**6 months** (< 1 year)|**< 2–3 years**|**No**|**EEG, brain MRI**|',
    '|**Transient idiopathic dystonia of infancy**|**5–10 months**|**< 5 years**|**No**|**Brain MRI**|',
    '|**Spasmus nutans**|**4–18 months**|**1–2 years after onset**|**Yes**|**Brain MRI; ophthalmological evaluation (VEP, ERG)**|',
    '|**Paroxysmal tonic upgaze of infancy**|**5 months**|**< 4 years**|**Yes**|**EEG, brain MRI, ophthalmology, CACNA1A sequencing**|',
    '|**Benign paroxysmal torticollis**|**< 3 months**|**< 4 years**|**No**|**EEG, brain and cervical MRI, CACNA1A sequencing**|',
    '',
    'Src: L10 pp.13–14; the movement-disorder table L10 p.12 (image-only, recovered by render; attributed on the slide to Mosca, Martins & Temudo, Rev Neurol 2022)'
  ].join('\n'),
  qs: []
},

{
  id: 'nns-7', w: 'must',
  h: 'Investigation — the essential list and the five-step approach',
  body: [
    '### Table 8.1 — investigations required in neonates with seizures',
    '',
    '|Essential (required in all, with few exceptions)|Additional|',
    '|---|---|',
    '|**Blood sugar**|**Haematocrit** — if plethoric or at risk of polycythaemia|',
    '|**Serum sodium and calcium**|**Serum bilirubin** — if icteric|',
    '|**Cerebrospinal fluid examination**|**Serum magnesium**|',
    '|**Cranial ultrasound**|**Arterial blood gas and anion gap** — lethargy, vomiting, family history|',
    '|**EEG and/or amplitude-integrated EEG**|**CT and/or MRI** — if no aetiology after the essential tests|',
    '|—|**TORCH screen** for congenital infections; **work-up for inborn errors of metabolism**|',
    '',
    '### The five-step diagnostic approach',
    '- **1 Stabilize —** airway, breathing, circulation, temperature, **bedside glucose**; **treat hypoglycaemia immediately**.',
    '- **2 Rapid reversible causes —** electrolytes, calcium, magnesium, sodium, blood gas, **sepsis screen if indicated**.',
    '- **3 EEG / aEEG —** **continuous EEG is the GOLD STANDARD**; **aEEG screens and trends, and CAN MISS seizures**.',
    '- **4 Neuroimaging —** **cranial ultrasound** for IVH and hydrocephalus; **MRI** for stroke, an HIE pattern or malformation.',
    '- **5 Aetiology-specific work-up —** lumbar puncture, metabolic testing, genetics, stroke evaluation.',
    '',
    '### ⚠️ The EEG pearl',
    '**The pearl:** **many neonatal seizures are electrographic-only** — **never rule them out by observation alone in a high-risk infant**.',
    '',
    '*L10 illustrates this with an unlabelled cranial-ultrasound IVH series, one brain-anomaly scan and two MRI slices; it names no grades, so none is written here.*',
    '',
    'Src: L10 pp.18–19, 21–23 (p.18’s table image-only, recovered by render)'
  ].join('\n'),
  qs: []
},

{
  id: 'nns-8', w: 'must',
  h: 'Treatment — reversible causes first, then the drug ladder',
  body: [
    '### The principle',
    '- **⚠️ Reversible cause FIRST —** **hypoglycaemia, hypocalcaemia, hyponatraemia, hypomagnesaemia, infection, toxin or medication**, before any anticonvulsant.',
    '- **Why:** this **may stop the seizures without any long-term antiseizure therapy**.',
    '',
    '### First-line drugs',
    '- **Phenobarbital** remains the **common first-line** drug; **levetiracetam** is also widely used.',
    '- **Escalation depends on** the **response, the EEG burden and the aetiology**.',
    '',
    '### Monitoring',
    '- **Watch both —** the **clinical examination AND the EEG trajectory**.',
    '- **⚠️ Electroclinical uncoupling —** it follows medication: **the movements stop and the discharges do not**.',
    '',
    '### The HIE overlay the deck prints here',
    '- **Who is cooled —** **moderate-to-severe HIE born at ≥ 36 weeks**; **therapeutic hypothermia is standard of care**.',
    '- **Target 33.5–34.5 °C**, started **within 6 hours of birth**, continued **72 hours**, then **controlled rewarming**.',
    '- **Where:** centres with **neuromonitoring, neuroimaging and follow-up expertise**.',
    '',
    '*Cooling criteria A, B and C and the technique are `perinatal-hie`.*',
    '',
    'Src: L10 pp.24–25; the algorithm below from p.24 (image-only, recovered by render)'
  ].join('\n'),
  flow: {
    title: 'Neonate with seizures',
    steps: [
      { k: 'step', t: 'STABILISE AND SAMPLE — identify and characterise the seizure · secure airway, optimise breathing, circulation and temperature · start oxygen if needed · secure IV access and take baseline bloods: sugar, calcium, magnesium, sodium, potassium, arterial blood gas, haematocrit, sepsis screen', n: 'step 1' },
      { k: 'alert', t: 'IF HYPOGLYCAEMIC (blood sugar < 40 mg/dL) — 2 mL/kg of 10 % dextrose as a bolus, then a continuous infusion of 6–8 mg/kg/min. IF SUGAR IS NORMAL — withdraw a blood calcium; if abnormal, 2 mL/kg of 10 % calcium gluconate IV UNDER CARDIAC MONITORING', n: 'the reversible causes' },
      { k: 'decision', t: 'Seizures persist?', yes: 'Go to phenobarbitone', no: 'No antiseizure drug needed — the metabolic correction was the treatment' },
      { k: 'step', t: 'PHENOBARBITONE 20 mg/kg IV stat over 20 minutes', n: 'first line' },
      { k: 'step', t: 'Seizures continue — repeat phenobarbitone in 10 mg/kg/dose aliquots UNTIL 40 mg/kg IS REACHED', n: 'load to the ceiling' },
      { k: 'step', t: 'Seizures continue — PHENYTOIN 20 mg/kg IV slowly over 20 minutes under cardiac monitoring. Levetiracetam or lidocaine may replace phenytoin as the second-line agent', n: 'second line' },
      { k: 'step', t: 'Seizures continue — repeat phenytoin 10 mg/kg/dose', n: 'second line, repeat' },
      { k: 'step', t: 'Seizures continue — consider a lorazepam or midazolam bolus, and a midazolam infusion if needed', n: 'third line' },
      { k: 'alert', t: 'SEIZURES CONTROLLED — wean the antiepileptic slowly to maintenance phenobarbitone', n: 'exit' }
    ]
  },
  qs: []
},

{
  id: 'nns-9', w: 'must',
  h: 'Neonatal hypoglycaemia — thresholds, who gets it, and how',
  body: [
    '**Why it matters:** neonatal hypoglycaemia carries **long-term neurological sequelae**, and is one of the seizure causes with a **high risk of adverse outcome**.',
    '',
    '### Definition — the deck states there is no consensus',
    '',
    '|Age|Blood glucose below|',
    '|---|---|',
    '|**First 24 hours**|**30 mg/dL**|',
    '|**1–3 days**|**40 mg/dL**|',
    '|**After 3 days**|**45 mg/dL**|',
    '',
    '### The six risk groups',
    '- **LGA** infants · **infants of diabetic mothers**.',
    '- **SGA** infants — **decreased glycogen stores**.',
    '- **AGA but under 2 kg**, or **preterm under 37 weeks**.',
    '- **Disease:** **hypoxia · hypothermia · shock · sepsis · RDS · polycythaemia**.',
    '',
    '### The four mechanisms',
    '- **Hyperinsulinaemia —** **PHHI**, persistent hyperinsulinaemic hypoglycaemia of infancy.',
    '- **Limited glycogen stores —** **preterm and IUGR**.',
    '- **Increased glucose use —** **polycythaemia, sepsis, hypothermia**.',
    '- **Reduced glycogenolysis —** or gluconeogenesis: **inborn errors of metabolism, adrenal insufficiency**.',
    '',
    '### Symptoms',
    '- **⚠️ Non-specific —** they **mimic many illnesses**, hence bedside glucose at step 1 of every neonatal algorithm.',
    '- **Commonest:** **not looking well · lethargic · weak cry · poor feeding · temperature instability · shallow breathing or apnoea**.',
    '- **CNS:** **hypotonia · jitteriness · convulsion**.',
    '',
    'Src: L10 pp.28–32'
  ].join('\n'),
  qs: []
},

{
  id: 'nns-10', w: 'must',
  h: 'Hypoglycaemia — the glucose ladder, and when it will not correct',
  body: [
    '### The bolus',
    '- **Dose:** **intravenous dextrose 0.2 g/kg (200 mg/kg) over 5–15 minutes**.',
    '- **In practice:** **2 mL/kg of D10 %** — D10 % being **10 g in 100 mL**.',
    '',
    '### The infusion',
    '- **Then:** a **glucose infusion rate (GIR) of 6–8 mg/kg/min** in maintenance fluid.',
    '- **⚠️ Peripheral line ceiling: 12.5 %.** Above that needs central access.',
    '- **Recheck:** glucose **after 15–30 minutes**; if still low, **add 1–2 mg/kg/min to the GIR**.',
    '',
    '### The two names for failure',
    '- **Resistant hypoglycaemia:** a requirement of **GIR ≥ 12 mg/kg/min**.',
    '- **Persistent hypoglycaemia:** hypoglycaemia **beyond 1 week** despite adequate management.',
    '- **Then:** **rule out inborn errors of metabolism and hyperinsulinism**.',
    '- **Drugs to consider:** **hydrocortisone · glucagon · diazoxide · octreotide**.',
    '',
    '### Neonatal hypocalcaemia',
    '- **Where it sits:** a **metabolic cause of neonatal seizure**, beside hypoglycaemia.',
    '- **The cause named:** **cow’s milk intake**, as a **sepsis-like picture after a feed** — late-onset hypocalcaemia.',
    '- **⚠️ Prognosis:** **late-onset hypocalcaemia has a GOOD neurodevelopmental outcome**, unlike hypoglycaemia.',
    '- **Treatment, the deck’s only figure:** **2 mL/kg of 10 % calcium gluconate IV under cardiac monitoring**.',
    '- **Thresholds** *(not in course material)* **—** total calcium **< 7 mg/dL** or ionised **< 1.1 mmol/L** in the term infant.',
    '- **Early against late** *(not in course material)* **—** **early, under 72 h:** prematurity, infant of a diabetic mother, birth asphyxia, maternal hyperparathyroidism. **Late, past the first week:** high-phosphate feeds such as **cow’s milk**, maternal vitamin D deficiency, hypomagnesaemia, **DiGeorge syndrome**.',
    '',
    'Src: L10 pp.33–36; the calcium gluconate dose L10 p.24 (image-only). Thresholds and the early/late split supplied and tagged; the row deferring this here is corrected in the header, FINDING 5'
  ].join('\n'),
  qs: []
},

{
  id: 'nns-11', w: 'must',
  h: 'Birth injuries — the classification, and the anatomy that explains the scalp',
  body: [
    '### Three groups',
    '- **Soft tissue —** **caput succedaneum · cephalhaematoma · chignon · bruises and abrasions · subaponeurotic (subgaleal) haemorrhage**.',
    '- **Nerve palsies —** **brachial plexus (Erb palsy)** · **facial nerve palsy**.',
    '- **Fractures —** **clavicle · humerus · femur**.',
    '',
    '### Two more the deck photographs',
    '- **Facial in-suffusion —** the congested, bruised face of a **face presentation**.',
    '- **Forceps mark —** a linear bruise or abrasion along the line of the blade.',
    '',
    '### The layers, from outside in — this is what decides the differential',
    '- **Skin**, then **subcutaneous tissue** — a collection here is a **CAPUT SUCCEDANEUM**, free to spread wherever skin goes.',
    '- **Galeal aponeurosis**, then the **subgaleal space** — bleeding here is a **SUBAPONEUROTIC (SUBGALEAL) HAEMORRHAGE**, in a space **large enough to reach the orbits and the nape of the neck**.',
    '- **Periosteum**, then the **parietal bone** — bleeding **under the periosteum** is a **CEPHALHAEMATOMA**; the periosteum is **fixed at the sutures**, so it **cannot cross them**.',
    '- **Then** the skull bones, **venous sinus** and **dura**.',
    '',
    'Src: L10 pp.37–41 (pp.38, 41 image-only, recovered by render; the layer diagram is captioned "Location of extracranial haemorrhages")'
  ].join('\n'),
  qs: []
},

{
  id: 'nns-12', w: 'must',
  h: 'DD of scalp swellings — the discrimination matrix',
  body: [
    '|Feature|Caput succedaneum|Cephalhaematoma|Subgaleal haemorrhage|',
    '|---|---|---|---|',
    '|**Location**|**At the point of contact; CAN extend across sutures**|**Usually over the parietal bones; DOES NOT cross sutures**|**Beneath the epicranial aponeurosis; may extend to the ORBITS and the NAPE OF THE NECK**|',
    '|**Characteristic findings**|**Vaguely demarcated; PITTING oedema that SHIFTS WITH GRAVITY**|**Distinct margins; initially firm, MORE FLUCTUANT AFTER 48 h**|**Firm to fluctuant; ill-defined borders; may have CREPITUS or FLUID WAVES**|',
    '|**Timing**|**Maximal size and firmness AT BIRTH; resolves in 48–72 h**|**INCREASES after birth for 12–24 h; resolution over 2–3 weeks**|**PROGRESSIVE after birth; resolution over 2–3 weeks**|',
    '|**Volume of blood**|**Minimal**|**Rarely severe**|**MAY BE MASSIVE**, especially with an associated coagulopathy|',
    '',
    '### The line the table does not print',
    '- **⚠️ Can it kill?** **Only the subgaleal** — the space holds enough blood to **exsanguinate the infant**, and a coagulopathy makes that likely.',
    '',
    '### Chignon',
    '- **What it is:** **subcutaneous scalp oedema from a VENTOUSE delivery** — the artificial caput the cup makes.',
    '- **Shape:** **discrete and circular**, the diameter of the cup.',
    '',
    '### Caput succedaneum, in the deck’s own words',
    '- **Definition:** **oedema of the subcutaneous tissues of the presenting part**.',
    '- **Duration:** **may last for 48 hours**.',
    '',
    '*Cephalhaematoma is also a non-haemolytic cause of jaundice (nnj-4) and a risk factor for severe hyperbilirubinaemia (nnj-11) — enclosed blood is a bilirubin load.*',
    '',
    'Src: L10 pp.42–46 (the matrix on p.42 is image-only, recovered by render)'
  ].join('\n'),
  qs: []
},

{
  id: 'nns-13', w: 'must',
  h: 'Erb’s palsy',
  body: [
    '- **The lesion:** the injury can **stretch, rupture or AVULSE the plexus roots from the spinal cord**.',
    '- **Rank:** the **commonest birth-related brachial plexus injury — 50–60 %**.',
    '- **Roots:** **C5 and C6**, and **in some cases C7**.',
    '',
    '### ⚠️ The position — what the examiner asks for',
    '**Waiter’s tip:** the affected arm **lies STRAIGHT and LIMP**, with the **hand PRONATED and the fingers FLEXED**.',
    '',
    '### Risk factors',
    '- **The fetus —** **shoulder dystocia · fetal macrosomia · gestational diabetes**.',
    '- **A second stage of labour over 60 minutes** · **breech presentation**.',
    '',
    '### Diagnosis',
    '- **MRI of the shoulder:** may show **dislocation**; **pseudomeningoceles indicate AVULSION** of the roots.',
    '- **EMG / nerve conduction studies:** **fibrillation potentials indicate denervation**.',
    '',
    '### Treatment',
    '- **Physiotherapy** — **usually resolves in 4 months**, **up to 2 years** in some, **± surgery**.',
    '',
    'Src: L10 pp.47–48 (the waiter’s tip description from p.48, image-only, recovered by render)'
  ].join('\n'),
  qs: []
},

{
  id: 'nsp-1', w: 'must',
  h: 'Neonatal sepsis — the definition, the three certainties, and the size of it',
  body: [
    '**Neonatal sepsis:** a **clinical syndrome** characterised by **signs and symptoms of infection**, **with OR WITHOUT accompanying bacteraemia**, in the **first month of life**.',
    '',
    '### The three levels of certainty',
    '- **Definite —** the syndrome **plus growth of bacteria in a STERILE site**: positive **blood, CSF or BAL** culture.',
    '- **Probable —** clinical features of sepsis with **STERILE cultures**, usually with **supportive tests** — biomarkers, CSF or urine, chest X-ray.',
    '- **Possible —** **only** clinical features, **or** **risk factors for early-onset sepsis**, **unsupported by laboratory tests or cultures**.',
    '',
    '### Magnitude',
    '- **WHO 2016:** **46 % of deaths in children under five were neonates**, and **7 % of those were caused by neonatal sepsis**.',
    '- **⚠️ First week of life —** in developing countries **30–50 % of all deaths are sepsis-related**.',
    '',
    'Src: L11 pp.5–7'
  ].join('\n'),
  qs: []
},

{
  id: 'nsp-2', w: 'must',
  h: 'Early-onset against late-onset sepsis',
  body: [
    '|Feature|EONS|LONS|',
    '|---|---|---|',
    '|**Timing**|**First 72 hours of life**|**After 72 hours**|',
    '|**Transmission**|**Vertical OR horizontal**|**Horizontal only**|',
    '|**Presentation**|**Asymptomatic at birth, pneumonia or septicaemia**|**Septicaemia, septic arthritis, UTI, catheter-associated infection, VAP**|',
    '|**Risk factors**|**MATERNAL**|**ENVIRONMENTAL**|',
    '|**Organisms named by the deck**|**GBS and E. coli**|**CONS (Staph. epidermidis), Staph. aureus**|',
    '',
    '### The five organs sepsis presents through',
    '- **Septicaemia and bloodstream infection** · **pneumonia** · **UTI** · **meningitis** · **joint and bone infections**.',
    '',
    'Src: L11 pp.8, 11'
  ].join('\n'),
  qs: []
},

{
  id: 'nsp-3', w: 'must',
  h: 'The organisms, measured',
  body: [
    'Percentage of total isolates, early against late onset, from the deck’s own cited dataset.',
    '',
    '|Organism|EONS %|LONS %|',
    '|---|---|---|',
    '|**Klebsiella species**|**25.5**|**24.6**|',
    '|**Staphylococcus aureus**|**18.8**|**21.8**|',
    '|**Escherichia coli**|**11.1**|**11.65**|',
    '|**CONS**|**9.4**|**0.4**|',
    '|**Pseudomonas species**|**8**|**5.9**|',
    '|**Enterobacter species**|**7.6**|**8.2**|',
    '|**Acinetobacter species**|**5.9**|**7**|',
    '|**Group D streptococci / Enterococcus**|**2.7**|**3.3**|',
    '',
    '### What the numbers say',
    '- **⚠️ Klebsiella leads BOTH groups —** not GBS, and not E. coli.',
    '- **Gram-negatives dominate:** **Klebsiella, E. coli, Enterobacter and Acinetobacter together exceed half of all isolates** in both groups.',
    '- **Staph. aureus is the leading Gram-positive** in both, and **rises** in late onset.',
    '',
    '*⚠️ The deck contradicts itself on CONS: this chart makes it a mainly EARLY-onset isolate (9.4 % against 0.4 %), while the EONS/LONS grid in nsp-2 lists CONS as the LATE-onset organism. Both are recorded as printed.*',
    '',
    'Src: L11 p.10 (image-only, recovered by render; attributed on the slide to Chaurasia, BMJ 2019); the conflicting attribution L11 p.8'
  ].join('\n'),
  qs: []
},

{
  id: 'nsp-4', w: 'must',
  h: 'Group B streptococcus',
  body: [
    '### The colonisation cascade',
    '- **15–40 % of pregnant women** have **rectal or vaginal colonisation** with group B streptococci.',
    '- **About 50 %** of their infants **become colonised**.',
    '- **Then:** **1–2 % of colonised infants develop early-onset infection**.',
    '',
    '### The five risk factors for GBS early-onset disease',
    '- **Preterm**, especially **preterm prolonged rupture of the membranes**.',
    '- **Membranes —** **prolonged rupture over 18 hours, or prelabour rupture**.',
    '- **Fever —** **intrapartum fever above 38 °C, or chorioamnionitis**.',
    '- **A previous child with GBS infection.**',
    '- **GBS bacteriuria during pregnancy.**',
    '',
    '- **Prevention:** **screening and treating pregnant women** for **group B streptococcus and Chlamydia trachomatis** — the antenatal half of preventing neonatal pneumonia.',
    '',
    'Src: L11 p.9; antenatal screening from `30) Pneumonia`, cited only, deferred here by `respiratory`'
  ].join('\n'),
  qs: []
},

{
  id: 'nsp-5', w: 'must',
  h: 'Why the neonate is liable, and the three risk lists',
  body: [
    '### Host — why a newborn is defenceless',
    '- **Barrier:** **defective skin and mucous membrane barriers**, **decreased acidity**.',
    '- **Passive immunity:** **lacking in the preterm** — transplacental IgG comes late.',
    '- **Active immunity:** **defective humoral and cellular response**, **no opsonisation**.',
    '- **Exposure:** **VLBW and prolonged hospital stay**.',
    '',
    '### Maternal',
    '- **Vulvovaginitis** · **chorioamnionitis** · **UTI and pyrexia** · **sexually transmitted infection and inadequate antenatal care**.',
    '',
    '### Intrapartum',
    '- **Hypoxia** · **need for resuscitation, meconium-stained liquor** · **low Apgar score**.',
    '- **Prolonged labour over 24 hours, or PROM** · **instrumental or vaginal delivery**.',
    '',
    '### Neonatal',
    '- **Male sex.**',
    '- **⚠️ Prematurity and low birth weight — a 3- to 10-fold risk**, the single largest factor.',
    '- **Interventions:** **IV fluids · IV cannulation · NG feeding · central lines, umbilical catheters and PICC lines · ventilation and ETT · urinary catheters**.',
    '',
    'Src: L11 pp.12–15'
  ].join('\n'),
  qs: []
},

{
  id: 'nsp-6', w: 'must',
  h: 'Clinical picture — general, site by site, and what it imitates',
  body: [
    '### The general picture',
    '- **Not doing well** · **off colour, an earthy look**.',
    '- **Temperature:** **hypothermia OR hyperthermia** — the low reading is the commoner.',
    '- **Respiratory:** **tachypnoea, apnoea, respiratory distress, shallow breathing**.',
    '- **Cardiovascular:** **heart rate variability**, then **hypotension and shock**.',
    '- **Neurological:** **hypoactivity or convulsions**.',
    '- **Gastrointestinal:** **feed intolerance, vomiting, poor feeding**.',
    '',
    '### Site by site',
    '- **On mechanical ventilation:** **increased secretions, coloured secretions, increased ventilatory settings**.',
    '- **Meningitis:** **mostly non-specific**; **tense or bulging fontanelle**; **head retraction (opisthotonos)**; **seizure and disturbed sensorium are RARE**.',
    '- **UTI:** with a **catheter or malformation**; non-specific — **vomiting, fever, PROLONGED JAUNDICE, poor weight gain**.',
    '- **Bone and joints:** **limited and painful movement**, or fever alone.',
    '',
    '### The sepsis-like mimics',
    '',
    '|Early onset|Late onset|',
    '|---|---|',
    '|**Perinatal asphyxia**|**Left ventricular outflow tract obstruction**|',
    '|**Hypoglycaemia**|**Patent ductus arteriosus**|',
    '|**Inborn errors of metabolism**|**Inborn errors of metabolism**|',
    '|**Viral infection**|**Congenital adrenal hyperplasia**|',
    '|—|**Abdominal catastrophes such as volvulus**|',
    '',
    '*Prolonged jaundice is a presenting sign of neonatal UTI as well as a jaundice problem in its own right — nnj-2 and nnj-8.*',
    '',
    'Src: L11 pp.16–18'
  ].join('\n'),
  qs: []
},

{
  id: 'nsp-7', w: 'must',
  h: 'The laboratory — what is sent, and the haematological cut-offs',
  body: [
    '### What is sent',
    '- **CBC:** **TLC, ANC, I/T ratio, platelet count and volume, PLR, NLR, RDW, toxic granules**.',
    '- **Inflammatory and immunological markers:** **CRP · procalcitonin · SAA · IL-6 and IL-8 · CD64 (the EARLIEST marker) · CD163 · CD14 (presepsin)**.',
    '- **⚠️ The "triple taps":** **blood culture · CSF analysis and culture · urine analysis and culture**.',
    '- **Where indicated:** **joint fluid · conjunctival swab · BAL**.',
    '',
    '### Haematological markers of sepsis — the cut-offs',
    '',
    '|Marker|Cut-off|',
    '|---|---|',
    '|**Leucopenia**|**WBC < 5,000/mm³ after 4 h of life**|',
    '|**Leucocytosis**|**WBC > 20,000/mm³**|',
    '|**Neutropenia**|**ANC < 1,000/mm³ at ≥ 4 h**|',
    '|**Neutrophilia**|**ANC ≥ 10,000/mm³**|',
    '|**High I:T ratio**|**> 0.27 in term, > 0.22 in preterm**|',
    '|**Platelet count**|**< 120,000/mm³**|',
    '|**Mean platelet volume**|**cut-off between 8.6 and 11.4**|',
    '|**NLR**|**1.24 : 6**|',
    '|**PLR**|**57 : 94**|',
    '',
    'Src: L11 pp.20–21'
  ].join('\n'),
  qs: []
},

{
  id: 'nsp-8', w: 'must',
  h: 'CRP, procalcitonin, presepsin — and why no single marker works',
  body: [
    '### Haematological markers on their own',
    '- **⚠️ The weakness —** they are **poor at discriminating sepsis from no sepsis**.',
    '- **The sepsis screen:** **NPV 65–95 %**, **PPV very low** — it excludes better than it confirms.',
    '',
    '### CRP against procalcitonin',
    '',
    '|Feature|CRP|Procalcitonin|',
    '|---|---|---|',
    '|**Rise**|**Within 12 h**|**Starts at 4 h**|',
    '|**Peak**|**48 h**|**8 h — earlier**|',
    '|**Sensitivity / specificity in LOS**|**62 % / 71 %**|**90 % / 88 %**|',
    '|**Viral vs bacterial**|**No**|**YES, discriminates**|',
    '|**Practical gain**|**NPV rises with serial negatives 12–24 h apart**|**Shorter antibiotic duration**|',
    '',
    '- **Both markers —** better in **LATE-onset than early-onset sepsis**, and **PCT beats CRP even there**.',
    '- **⚠️ Best practice is to combine both**, not to choose.',
    '',
    '### Presepsin — the early-onset marker',
    '- **What it is:** the **soluble CD14 fragment**, a **high-affinity receptor complex of lipopolysaccharide**.',
    '- **Head to head in EOS** against PCT, IL-6 and IL-8, **presepsin was most accurate — 88.9 % sensitivity, 85.7 % specificity**.',
    '- **Strength:** as accurate as PCT and CRP, **especially in Gram-negative infection**.',
    '',
    '### Serum amyloid A',
    '- **Behaviour:** **rises up to 1,000 times baseline** in response to infection or injury.',
    '- **⚠️ Confounded by** **hepatic function and nutritional status**; **lowest in cord blood, highest in old age**.',
    '',
    '### The conclusion the deck draws',
    '**The conclusion:** **no single biomarker has sufficient diagnostic accuracy** for neonatal sepsis. What works is **combining biomarkers** or **serial measurement**.',
    '',
    'Src: L11 pp.22–26'
  ].join('\n'),
  qs: []
},

{
  id: 'nsp-9', w: 'must',
  h: 'Cultures — the gold standards and how they fail',
  body: [
    '### Blood culture',
    '- **Technique:** the **volume of inoculated blood to broth ratio is 1:5 or 1:10**.',
    '- **Time to growth:** **most Gram-positives 24 h, most Gram-negatives 48 h**.',
    '- **False negative:** **inadequate sample · prior antibiotics · a cold bottle**.',
    '- **False positive:** **contamination**.',
    '',
    '### CSF',
    '- **Abnormal values:** **WBC > 25 (polymorphs)/µL · protein > 150 mg/dL · glucose < 30**.',
    '- **⚠️ CSF culture by LP —** the **GOLD STANDARD**, but **prior antibiotics make false negatives common**.',
    '',
    '### Urine',
    '- **Abnormal value:** **WBC > 10 in an uncentrifuged sample**.',
    '- **⚠️ Urine culture is the GOLD STANDARD**, by **sterile catheterisation or suprapubic sample** — a bag specimen will not do.',
    '',
    'Src: L11 pp.27–28'
  ].join('\n'),
  qs: []
},

{
  id: 'nsp-10', w: 'must',
  h: 'Antibiotics — choosing them, and how long',
  body: [
    '### The principle',
    '- **Empirical choice follows LOCAL data** on organism and antibiogram — **narrowest spectrum, and consider synergism**.',
    '- **⚠️ After the culture result, step DOWN** to the simplest and narrowest spectrum.',
    '',
    '### Where there is no local antibiogram — the general rules',
    '- **Septicaemia and pneumonia:** **ampicillin + gentamicin or amikacin**.',
    '- **Meningitis:** **ampicillin + cefotaxime**.',
    '- **Suspected resistant strains:** **ciprofloxacin or piperacillin-tazobactam + amikacin**.',
    '- **Second line:** **meropenem**; **add vancomycin if MRSA is suspected**.',
    '- **Suspected anaerobes (NEC):** **metronidazole or clindamycin**.',
    '- **Suspected pseudomonas:** **piperacillin-tazobactam**.',
    '- **⚠️ Third-generation cephalosporins —** **avoid them wherever possible, EXCEPT in meningitis**.',
    '',
    '### Duration',
    '',
    '|Diagnosis|Duration of antibiotics|',
    '|---|---|',
    '|**Suspected infection, clinical course and biomarkers NOT suggestive of sepsis**|**Stop empirical antibiotics once cultures are negative**|',
    '|**Culture-negative probable or possible sepsis**|**5–7 days**|',
    '|**Culture-negative sepsis with no meningitis**|**14 days**|',
    '|**Meningitis**|**21 days**|',
    '|**Ventriculitis**|**4–6 weeks**|',
    '|**Bone and joint infection**|**4–6 weeks**|',
    '|**Deeply seated infection**|**4–6 weeks**|',
    '',
    '*⚠️ The table prints "culture negative" in the 5–7 day and the 14 day rows, which cannot both apply to one baby; reproduced as printed rather than corrected.*',
    '',
    'Src: L11 pp.30–32'
  ].join('\n'),
  qs: []
},

{
  id: 'nsp-11', w: 'must',
  h: 'Supportive care — STABLE, and the hypothermia loop',
  body: [
    '### Why supportive care outranks the antibiotic in the first day',
    '- **Claim:** supportive care plays the **main role** in managing the septic sick neonate.',
    '- **⚠️ The first 24 hours —** **most of the mortality there is preventable by supportive care**.',
    '- **Why:** **antibiotics need at least 12 hours to work**, and their action causes **bacterial lysis with systemic manifestations** — the first day is bought by support, not the drug.',
    '',
    '### STABLE',
    '',
    '|Letter|Element|What it means|',
    '|---|---|---|',
    '|**S**|**Sugar and safe**|**Maintain glucose and electrolyte levels with IV fluid**|',
    '|**T**|**Temperature control**|**Be aware of the methods of heat loss**|',
    '|**A**|**Airways**|**Suction · positioning · airway management · oxygen, CPAP and IMV**|',
    '|**B**|**Blood pressure**|**Circulatory management by fluids and inotropes**|',
    '|**L**|**Laboratory**|**Blood gas · diagnosis of sepsis**|',
    '|**E**|**Effective organ management**|**Renal: fluid, adjust, dialysis · coagulation: plasma · seizure: anticonvulsant · anaemia: blood**|',
    '',
    '### Hypothermia and sepsis',
    '- **⚠️ It runs BOTH ways —** which is the whole point of the slide.',
    '- **Cold causes sepsis:** **hypothermia suppresses immunity**.',
    '- **Sepsis causes cold:** **neonatal sepsis is manifested by hypothermia**.',
    '- **So:** **keep neonates at normal temperature** — a treatment, not comfort.',
    '',
    '*Hypothermia is one limb of the neonatal energy triangle with hypoglycaemia and hypoxia — drawn in full in `perinatal`.*',
    '',
    'Src: L11 pp.33–35 (the STABLE grid on p.34 is image-only, recovered by render)'
  ].join('\n'),
  qs: []
},

{
  id: 'nsp-12', w: 'high',
  h: 'Adjunctive therapy',
  body: [
    'The deck lists **eight adjuncts** beside antibiotics and supportive care — none a substitute for either.',
    '',
    '- **IVIG —** pooled immunoglobulin.',
    '- **GM-CSF and G-CSF —** colony-stimulating factors, aimed at the neutropenia.',
    '- **Lactoferrin —** with **colostrum and exclusive early breast feeding**, the enteral limb.',
    '- **Zinc.**',
    '- **Pentoxyphylline.**',
    '- **Granulocyte transfusion.**',
    '- **DVET —** **double volume exchange transfusion**.',
    '- **Melatonin.**',
    '',
    '*The deck names them without ranking or evidence; the list itself is the examinable unit.*',
    '',
    'Src: L11 p.36 (image-only, recovered by render — the cached text is the three words "Adjuntive therapy .")'
  ].join('\n'),
  qs: []
}

    ]
  }
};
