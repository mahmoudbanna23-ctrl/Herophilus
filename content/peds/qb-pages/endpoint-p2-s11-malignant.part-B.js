/* Peds endpoint PART 2, SECTION 11 "Malignant diseases" -- STAGING HALF B, n:13-23.
   Source: Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf (NEVER modified).
   Cache used: C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\0ffb5f86-a1df-4f33-a8c4-fc32a73946ba\scratchpad\ep2-index\
   native\pNNNN.jpeg (800x450) read first; hires\pNNNN.png used when native not legible enough.
   No 300dpi re-render performed unless noted per-entry (ceiling is 800x450 either way).
   OCR index at content\peds\qb-pages\ocr\ep2\ was NOT opened during this staging pass.
   Section believed 23 questions on pp.1224-1268, clean even-page run, no parity flip
   (per prompt/rulings file, confirmed on OCR text only there -- being re-verified visually here,
   page by page, per parent's explicit second job for this pass).
   Half A takes n:1-12, pp.1224-1246 -- not touched here. At the time this half started, part-A
   held only 2 entries on disk (n:1-2); this half's own n:13-23 assignment came directly from the
   task prompt, tied to fixed pages 1248-1268, and does not depend on part-A's completion state.
   Half B answered pages, in order: 1248,1250,1252,1254,1256,1258,1260,1262,1264,1266,1268 -> n:13..23.
   Question-number walk (pr = printed number seen on page; filled in as each page is read):
     n:13  p:1248  pr:13
     n:14  p:1250  pr:14
     n:15  p:1252  pr:15
     n:16  p:1254  pr:16
     n:17  p:1256  pr:17
     n:18  p:1258  pr:18
     n:19  p:1260  pr:19
     n:20  p:1262  pr:20
     n:21  p:1264  pr:21
     n:22  p:1266  pr:22
     n:23  p:1268  pr:23

   Boundary check, both sides: p.1269 is the section's closing Arabic supplication -- three
   forgiveness invocations ("Allahumma aghfir lima ra'at-hu 'ayni...") followed by "Astaghfir
   Allah al-'Adheem wa atoobu ilayh" -- confirming the book's section-closing convention already
   seen at the ends of sections 3, 9 and 10. p.1270 is a red-text title slide reading "Model Final
   Exam 1", confirming p.1269 is the true end of section 11 and p.1270 begins unrelated model-exam
   content, out of scope for this section. Section 11 ends cleanly at n:23/p.1268.
*/

{ n:13, pr:13, p:1248, key:0,
  stem:'Connor, a 4-year-old boy, presents with leg pain, pallor, petechiae, and hepatosplenomegaly. Blood results show pancytopenia. What investigation would confirm the diagnosis?',
  opts:['Bone marrow aspirate','Blood film','Chest X-ray','Clotting screen','CT scan'],
  expl:'Bone marrow aspiration confirms leukaemia by showing blasts. Blood films may suggest it, but definitive diagnosis requires marrow.',
  note:'native p1248.jpeg fully legible, no crop needed. Highlighted option: "A. Bone marrow aspirate" (bold, yellow, underlined) -> key index 0. Box printed on same page. No figure.' }

{ n:14, pr:14, p:1250, key:3,
  stem:'Niamh, a 4-year-old girl, presents with haematuria, abdominal pain, and a left-sided mass. What is the investigation most likely to confirm the diagnosis?',
  opts:['Full blood count','MRI scan','PET scan','Abdominal ultrasound','Urine catecholamines'],
  expl:'Wilms tumour is best confirmed with ultrasound, which is safe and accurate for renal masses.',
  note:'native p1250.jpeg fully legible, no crop needed. Highlighted option: "D. Abdominal ultrasound" (bold, yellow, underlined) -> key index 3. Box printed on same page. No figure.' }

{ n:15, pr:15, p:1252, key:4,
  stem:'Oscar, a 3-year-old boy, has a large irregular abdominal mass and hypertension. What investigation is most likely to confirm the diagnosis?',
  opts:['Full blood count','MRI scan','PET scan','Abdominal ultrasound','Urine catecholamines'],
  expl:'Hypertension and irregular abdominal mass suggest neuroblastoma, which is confirmed by elevated urinary catecholamines.',
  note:'native p1252.jpeg fully legible, no crop needed. Highlighted option: "E. Urine catecholamines" (bold, yellow, underlined) -> key index 4. Box printed on same page. No figure. Per section-11 chapter-rulings ruling 6: this box explanation names neuroblastoma directly, which may conflict with the malignant-solid theory chapter table -- flagged there for the drafting pass, not adjudicated here.' }

{ n:16, pr:16, p:1254, key:1,
  stem:'Francis, a 2-year-old boy, presents with a new squint and absent red reflex in one eye. What is the investigation most likely to confirm the diagnosis?',
  opts:['Full blood count','MRI scan','PET scan','Abdominal ultrasound','Urine catecholamines'],
  expl:'This suggests retinoblastoma, and MRI is needed to confirm and assess local spread. Ultrasound may help but MRI is definitive.',
  note:'native p1254.jpeg fully legible, no crop needed. Highlighted option: "B. MRI scan" (bold, yellow, underlined) -> key index 1. Box printed on same page. No figure/photo printed on this page despite the clinical-sign stem. Per section-11 chapter-rulings ruling 3: retinoblastoma/leukocoria is a measured corpus gap (zero hits), flagged for the drafting pass to answer from general knowledge and tag accordingly -- not adjudicated here.' }

{ n:17, pr:17, p:1256, key:1,
  stem:'Carla, a 4-year-old girl, presents with persistent vomiting, headaches, and abnormal eye movements. What investigation would confirm the diagnosis?',
  opts:['Full blood count','MRI scan','PET scan','Abdominal ultrasound','Urine catecholamines'],
  expl:'These are signs of raised intracranial pressure from a brain tumour. MRI is the best diagnostic tool.',
  note:'native p1256.jpeg fully legible, no crop needed. Highlighted option: "B. MRI scan" (bold, yellow, underlined) -> key index 1. Box printed on same page. No figure. SHARED OPTION MENU: n:14 (p1250), n:15 (p1252), n:16 (p1254) and n:17 (p1256) all print the identical five-option ladder (Full blood count / MRI scan / PET scan / Abdominal ultrasound / Urine catecholamines) in the same order. Discriminating clinical token per question: n:14 = haematuria + left-sided mass (Wilms, key: abdominal ultrasound); n:15 = irregular abdominal mass + hypertension (neuroblastoma, key: urine catecholamines); n:16 = new squint + absent red reflex (retinoblastoma, key: MRI); n:17 = persistent vomiting/headache + abnormal eye movements (brain tumour/raised ICP, key: MRI). n:16 and n:17 share the same key (MRI) but are discriminated by squint+absent red reflex vs vomiting/headache+abnormal eye movements. Recorded as a pairing/shared menu, not folded.' }

{ n:18, pr:18, p:1258, key:4,
  stem:'Solomon, a 12-year-old boy, has persistent cervical lymphadenopathy with normal blood results. What investigation would confirm the diagnosis?',
  opts:['Blood film','Chest X-ray','Clotting screen','CT scan','Excision biopsy'],
  expl:'Persistent lymphadenopathy with normal bloods raises suspicion of lymphoma. Definitive diagnosis requires excision biopsy.',
  note:'native p1258.jpeg fully legible, no crop needed. Highlighted option: "E. Excision biopsy" (bold, yellow, underlined) -> key index 4. Box printed on same page. No figure. Option ladder resembles n:13 (p1248, Bone marrow aspirate/Blood film/Chest X-ray/Clotting screen/CT scan) with the first item swapped for Excision biopsy -- recorded as an observation, not folded. Per section-11 chapter-rulings ruling 4: lymphoma as a disease is a measured corpus gap (named only in passing), flagged for the drafting pass to answer from general knowledge and tag accordingly -- not adjudicated here.' }

{ n:19, pr:19, p:1260, key:3,
  stem:'Which of the following is a good prognostic factor in acute lymphoblastic leukaemia?',
  opts:['White cell count >50 × 10^9/L at diagnosis','Age >10 years at diagnosis','Age <1 year at diagnosis','Non-B cell, non-T cell leukaemia','Presence of translocations, e.g. Philadelphia chromosome'],
  expl:'The "common ALL" (non-B, non-T type) is associated with the best prognosis. Very high WBC, age extremes, and genetic translocations are poor prognostic signs.',
  note:'native p1260.jpeg legible; exponent in option A re-checked on hires\\p1260.png at full size -- a genuine typeset superscript "10⁹" (not a caret, not flat), transcribed per project convention as "10^9" in opts. Highlighted option: "D. Non-B cell, non-T cell leukaemia" (bold, yellow, underlined) -> key index 3. Box printed on same page. No figure.' }

{ n:20, pr:20, p:1262, key:4,
  stem:'Which of the following conditions is not associated with an increased risk of malignancy?',
  opts:['Down syndrome','Beckwith–Wiedemann syndrome','Ataxia telangiectasia','Li-Fraumeni syndrome','Turner syndrome'],
  expl:'Turner syndrome is not linked to increased cancer risk. In contrast, Down syndrome (↑ leukaemia), Beckwith–Wiedemann (↑ Wilms tumour, hepatoblastoma), ataxia telangiectasia (↑ lymphoma/leukaemia), and Li-Fraumeni (↑ multiple cancers) all carry higher malignancy risk.',
  note:'native p1262.jpeg fully legible, no crop needed. Highlighted option: "E. Turner syndrome" (bold, yellow, underlined) -> key index 4. Box printed on same page. No figure. Stem and box transcribed verbatim including the printed up-arrows and en dash. Per section-11 chapter-rulings ruling 5/5a: this question spans four chapters, Li-Fraumeni is a measured corpus gap, and the printed key/explanation appears to contradict the genetics chapter (gen-8) on Y-bearing Turner mosaics carrying a gonadoblastoma risk -- per standing project rule a contradictory printed key is recorded, never disputed; transcribed exactly as printed and NOT adjudicated here, per explicit instruction in this task.' }

{ n:21, pr:21, p:1264, key:2,
  stem:'Which of the following statements about brain tumours in childhood is true?',
  opts:['They are usually supratentorial','Signs of raised intracranial pressure are rare','Astrocytomas carry poor prognosis','Medulloblastomas are the most common type','Metastasis is common'],
  expl:'Most childhood brain tumours are infratentorial, and diagnosis is often delayed due to insidious onset and signs of raised intracranial pressure. Astrocytomas are the most common type and generally have a poor prognosis, while metastasis is rare in CNS tumours.',
  note:'native p1264.jpeg fully legible, no crop needed. Highlighted option: "C. Astrocytomas carry poor prognosis" (bold, yellow, underlined) -> key index 2. Box printed on same page, with several phrases in bold (infratentorial, insidious onset, signs of raised intracranial pressure, Astrocytomas, most common type, poor prognosis, metastasis is rare) transcribed as plain text since expl carries text only, no markup. No figure. Box internally states astrocytomas (not medulloblastomas, option D) are the most common type -- consistent with the printed key, not a contradiction.' }

{ n:22, pr:22, p:1266, key:0,
  stem:'A 2-month-old baby has a discrepancy in the red reflex in a family photo. On exam, only one eye has a red reflex. What is the most likely diagnosis?',
  opts:['Retinoblastoma','Retinopathy of prematurity','Congenital cataracts','CMV retinitis','Glaucoma'],
  expl:'A discrepancy in the red reflex (leukocoria) is a classic presentation of retinoblastoma, the most important cause to rule out because it is life-threatening. Congenital cataract can also cause an absent reflex, but in exam questions, retinoblastoma is the top concern when leukocoria is described. Urgent ophthalmology referral is required.',
  note:'native p1266.jpeg fully legible, no crop needed. Highlighted option: "A. Retinoblastoma" (bold, yellow, underlined) -> key index 0. Box printed on same page, several phrases in red/bold ("classic presentation of retinoblastoma", "retinoblastoma is the top concern") transcribed as plain text. No actual photo/figure is printed on this slide -- the "family photo" is described only in the stem text, not shown as an image. Per section-11 chapter-rulings ruling 3: retinoblastoma/leukocoria is a measured corpus gap (zero hits), flagged for the drafting pass to answer from general knowledge and tag accordingly -- not adjudicated here.' }

{ n:23, pr:23, p:1268, key:0,
  stem:'Which of the following is the most common malignant tumor in children?',
  opts:['Leukemia','Lymphoma','Kaposi sarcoma','Wilm’s tumor'],
  expl:'For children in the Western world, leukaemia is the most common malignancy followed by brain tumours. Acute lymphoblastic leukaemia (ALL) accounts for 80% of leukaemia in children. Most of the remainder is acute myeloid leukaemia/acute non-lymphocytic leukaemia (AML/ANLL). Chronic myeloid leukaemia and other myeloproliferative disorders are rare.',
  note:'native p1268.jpeg fully legible, no crop needed. This page prints only FOUR options (A-D), not five -- confirmed on image, not an OCR artefact. Highlighted option: "A. Leukemia" (bold, yellow, underlined) -> key index 0. Box printed on same page. No figure. Percentage 80% read directly off image, plain digits, no exponent involved.' }
