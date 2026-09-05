/* ===========================================================================
   ENDPOINT - Pediatrics endpoint part2.pdf - MODEL FINAL EXAM 1
   Verbatim staging record. PDF pages 1270-1431; PDF page = printed page, offset zero.
   Merged from endpoint-p2-s12-mfe1.part-A.js + endpoint-p2-s12-mfe1.part-B.js + endpoint-p2-s12-mfe1.part-C.js + endpoint-p2-s12-mfe1.part-D.js by merge-parts-ep2.js.
   
   Every question is printed TWICE: an unanswered page, then the ANSWERED page with the key
   highlighted in yellow and (usually) a bordered explanation box. Only answered pages are
   staged. `n` is the true sequential index, `pr` what the page prints, `p` the PDF page,
   `key` a ZERO-BASED INDEX into `opts` (never a letter), matching the app field `answer`,
   `expl` the printed box verbatim or "".
   =========================================================================== */
var PEDEP2_S12_STAGED = [

/* Peds endpoint PART 2, SECTION 12 "MODEL FINAL EXAM 1" -- STAGING HALF A/4, n:1-20.
   Source: Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf (NEVER modified).
   Cache used: C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\0ffb5f86-a1df-4f33-a8c4-fc32a73946ba\scratchpad\ep2-index\
   native\pNNNN.jpeg (800x450) read first; hires\pNNNN.png used when native not legible enough.
   No 300dpi re-render performed unless noted per-entry (ceiling is 800x450 either way).
   OCR index at content\peds\qb-pages\ocr\ep2\ was NOT opened during this staging pass.
   Reprint map content\peds\qb-pages\endpoint-p2-s12-reprint-map.md read before staging; NOT acted
   on -- reprints staged verbatim like any other question, folds are a separate later pass.
   Boundary p.1270: section title slide "Model Final Exam 1" -- confirmed by image.
   Boundary p.1271: unanswered twin of Q1 (stem+5 options, no highlight, no box) -- confirmed.
   Section arithmetic per reprint map: answered pages are even 1272..1430, question n on page
   1270+2n, unanswered twin the odd page before it. This half tests that hypothesis page by page.
   Question-number walk (pr = printed number on page; filled in as each page is read):
     n:1  p:1272  pr:1
     n:2  p:1274  pr:2
     n:3  p:1276  pr:3
     n:4  p:1278  pr:4
     n:5  p:1280  pr:5  (reprint-map fold candidate vs pedep2-gen-26 -- staged verbatim, not folded)
     n:6  p:1282  pr:6
     n:7  p:1284  pr:7
     n:8  p:1286  pr:8
     n:9  p:1288  pr:9
     n:10 p:1290  pr:10
     n:11 p:1292  pr:11  (only 4 options printed, not 5)
     n:12 p:1294  pr:12
     n:13 p:1296  pr:13
     n:14 p:1298  pr:14  (only 4 options printed, not 5)
     n:15 p:1300  pr:15
     n:16 p:1302  pr:16  (only 4 options printed, not 5)
     n:17 p:1304  pr:17
     n:18 p:1306  pr:18  (reprint-map fold candidate vs pedep2-hem-68 -- staged verbatim, not folded)
     n:19 p:1308  pr:19  (reprint-map fold candidate vs pedep2-car-18 -- staged verbatim, not folded)
     n:20 p:1310  pr:20
   Half A ends here (n:1-20). Boundary check: p1311 peeked (read-only, not staged, belongs to
   Half B) -- unanswered twin of Q21, "A 6-year-old boy is seen ... recurrent wheezing ... asthma",
   5 options, no highlight, no box. p1312 also peeked -- the answered page for the same Q21,
   highlighted key "E. The presence of symptoms between coughs and colds", box printed on same
   page. Confirms n:21 will open Half B cleanly, arithmetic (1270+2n) holding exactly across the
   boundary, pr:21 matching n:21, no parity flip, no gap.
   All 20 answered pages in this half printed a genuine question with a visible highlighted key
   and a box on the same page (or, for a boxless case, none occurred here -- every one of these
   20 pages DID carry its own box, so no next-page box check was needed for any of them) -- none
   was a teaching-notes false positive, none was a mistagged unanswered page. No figures found on
   any of the 20 pages (every page read whole, stem + up to 5 options + box, text only).
   Two entries had only 4 printed options rather than 5 (n:11 p1292, n:14 p1298, n:16 p1302) --
   confirmed on the image, not a transcription miss.
   Reprint-map fold candidates confirmed present and staged verbatim, not folded: n:5/p1280 (vs
   pedep2-gen-26), n:18/p1306 (vs pedep2-hem-68), n:19/p1308 (vs pedep2-car-18).
   Section total (80) not re-confirmed beyond this quarter; Half B/C/D cover n:21-80.
*/

{ n:1, pr:1, p:1272, key:2,
  stem:'At what age (median age) would one expect a boy to be able to follow his mother\u2019s two-step commands, such as "Go to the cupboard and fetch your red shoes"?',
  opts:['18 months','2 years','3 years','4 years','5 years'],
  expl:'By around 3 years, most children can understand and follow simple two-step instructions. This reflects typical language comprehension and short-term memory development. Younger children usually can only follow one-step commands.',
  note:'native p1272.jpeg fully legible, no crop needed. Twin at p1271 read first (unanswered, identical stem/options). Highlighted option: "C. 3 years" (bold, underlined, yellow highlight) -> key index 2. Box printed on same page. No figure.' },

{ n:2, pr:2, p:1274, key:3,
  stem:'An 8-month-old girl is born at term. She is seen in the pediatric outpatient department. She can roll over. She does not crawl. She can say "dada" but says it to everyone, not just her father. She reaches out and grasps objects with her left hand but not with her right and puts objects in her mouth. She smiles but is unable to wave bye-bye. Which aspect of her development is of most concern?',
  opts:['Does not wave bye-bye','Inability to crawl','Inability to use sounds discriminately to parents','Left-hand preference','None of the above'],
  expl:'A strong hand preference before 1 year may indicate hemiplegia or underlying neurological problems. Other milestones like rolling over, grasping, or babbling are within normal limits for her age.',
  note:'native p1274.jpeg fully legible, no crop needed. Highlighted option: "D. Left-hand preference" (bold, underlined, yellow highlight) -> key index 3. Box printed on same page, to the right of options. No figure.' },

{ n:3, pr:3, p:1276, key:4,
  stem:'A 2-year-old child is brought to the outpatient clinic for developmental delay. He is just able to stand with support and can pronounce 2 or 3 words. He cannot grasp a pencil. What is the most important initial diagnostic step?',
  opts:['MRI brain','CT brain','Fundus examination','EEG','Detailed birth history'],
  expl:'The first step in evaluating developmental delay is a thorough history, especially perinatal and birth events. Imaging or EEG may follow based on history and examination findings.',
  note:'native p1276.jpeg fully legible, no crop needed. Highlighted option: "E. Detailed birth history" (bold, underlined, yellow highlight) -> key index 4. Box printed on same page. No figure.' },

{ n:4, pr:4, p:1278, key:3,
  stem:'A 3-year-old boy presents with fever and difficulty breathing, getting worse for the last 3 days. Examination shows the following clinical signs: respiratory rate 40 breaths/min, heart rate 120 beats/min, heart sounds normal, no murmurs, dullness on percussion, bronchial breathing, and inspiratory crepitations over the right lower chest front. Select the most likely diagnosis.',
  opts:['Acute exacerbation of asthma','Inhaled foreign body (right side)','Pleural effusion (right-sided)','Pneumonia (right-sided)','Pneumothorax (right-sided)'],
  expl:'Fever, crepitations, bronchial breathing, and dullness on percussion suggest lobar pneumonia. Other options like asthma or pneumothorax usually have different clinical signs.',
  note:'native p1278.jpeg fully legible, no crop needed. RR 40/min and HR 120/min read directly off image, both clear at native resolution, no crop needed. Highlighted option: "D. Pneumonia (right-sided)" (bold, underlined, yellow highlight) -> key index 3. Box printed on same page. No figure.' },

{ n:5, pr:5, p:1280, key:3,
  stem:'A 6-year-old boy attends the outpatient clinic with a diagnosis of Down syndrome. He has been pale and lethargic for the last 4 weeks and has some bruises on his shins. Which of the following conditions is it important to rule out in view of his underlying diagnosis?',
  opts:['Parvovirus infection','ITP','Hemophilia A','Acute leukemia','Henoch-Schönlein purpura'],
  expl:'Children with Down syndrome have a higher risk of leukemia. Pallor, bruising, and lethargy are red flags that need urgent evaluation.',
  note:'native p1280.jpeg fully legible, no crop needed. Highlighted option: "D. Acute leukemia" (bold, underlined, yellow highlight) -> key index 3. Box printed on same page. No figure. Reprint-map fold candidate vs pedep2-gen-26 -- staged verbatim per brief, not folded; also recorded there as overlapping House pedhd-gen-17.' },

{ n:6, pr:6, p:1282, key:3,
  stem:'A well-to-do 4-year-old girl with Down syndrome attends her annual follow-up appointment with her mother. There are no real problems other than constipation, for which her general practitioner has started treatment. When you plot her on the Down syndrome growth chart, you notice that her height has gone from the 75th centile to the 25th centile. Her weight, however, has gone from the 50th centile to the 75th centile. Which of the following investigations would you perform?',
  opts:['Celiac screen','Abdominal ultrasound','Full blood count','Thyroid function tests','Vitamin D levels'],
  expl:'Down syndrome increases the risk of hypothyroidism. Falling height centile with weight gain suggests endocrine dysfunction rather than celiac disease.',
  note:'native p1282.jpeg fully legible, no crop needed. Centile numbers (75th/25th/50th/75th) read directly off image, all clear. Highlighted option: "D. Thyroid function tests" (bold, underlined, yellow highlight) -> key index 3. Box printed on same page. No figure.' },

{ n:7, pr:7, p:1284, key:2,
  stem:'A 5-year-old girl is accidentally discovered to have a murmur during routine school health check-up. She is otherwise well with no previous hospital admissions or illnesses. The S1 is normal and the S2 shows wide and fixed splitting. There is a grade I/VI ejection systolic murmur best heard at the left upper sternal edge. Which of the following is the most likely diagnosis?',
  opts:['Aortic stenosis','Aorto-pulmonary window','Atrial septal defect','Pulmonary stenosis','Ventricular septal defect'],
  expl:'A fixed, wide splitting of S2 with an ejection systolic murmur at the left upper sternal edge is classic for ASD. The child is otherwise asymptomatic, which fits this diagnosis.',
  note:'native p1284.jpeg fully legible, no crop needed. Grade I/VI read directly off image, clear. Highlighted option: "C. Atrial septal defect" (bold, underlined, yellow highlight) -> key index 2. Box printed on same page. No figure.' },

{ n:8, pr:8, p:1286, key:2,
  stem:'An 11-year-old girl presents following 6 days of fever, abdominal pain, and bloody diarrhea. She has become increasingly irritable and lethargic. Blood tests reveal: Hb 7.5 g/dL, WCC 15,000/mL, platelets 40,000/mL, urea 90.0 mmol/L (high), creatinine 200 mmol/L (high), blood film shows red blood cell fragments. Which of the following is the most likely diagnosis?',
  opts:['Inflammatory bowel disease','Glucose-6-phosphate dehydrogenase deficiency','Hemolytic uremic syndrome','Dehydration','Viral gastroenteritis'],
  expl:'Triad of anemia, thrombocytopenia, and acute kidney injury following diarrhea is characteristic of HUS. Blood film shows fragmented RBCs (schistocytes).',
  note:'All lab values checked at 300dpi hires\\p1286.png crop, per the numbers/units rule: Hb 7.5 g/dL, WCC 15,000/mL, platelets 40,000/mL, urea 90.0 mmol/L, creatinine 200 mmol/L -- ALL confirmed as printed, including creatinine given in mmol/L rather than the conventional µmol/L; transcribed exactly as printed, unit not corrected (this is what the book prints, not a staging error). Highlighted option: "C. Hemolytic uremic syndrome" (bold, underlined, yellow highlight) -> key index 2. Box printed on same page. No figure. Overlaps House pedhd-renal-22 per reprint map (record only, not folded).' },

{ n:9, pr:9, p:1288, key:0,
  stem:'Which clinical sign is characteristic of a disorder of the corticospinal (pyramidal) tract?',
  opts:['Brisk hyperreflexia and extensor plantar reflex','Difficulty initiating movements','Dystonia or dyskinesia','Jerky movements','Wide-based gait'],
  expl:'Lesions of the corticospinal tract cause upper motor neuron signs such as spasticity, hyperreflexia, and Babinski sign.',
  note:'native p1288.jpeg fully legible, no crop needed. Highlighted option: "A. Brisk hyperreflexia and extensor plantar reflex" (bold, underlined, yellow highlight) -> key index 0. Box printed on same page, lower area. No figure.' },

{ n:10, pr:10, p:1290, key:4,
  stem:'At what age can a child draw a triangle without seeing how it is done?',
  opts:['One year','Two years','Three years','Four years','Five years'],
  expl:'Children typically develop the motor and cognitive skills to draw shapes like a triangle around 5 years old. Earlier attempts usually result in scribbles or simpler shapes.',
  note:'native p1290.jpeg fully legible, no crop needed. Highlighted option: "E. Five years" (bold, underlined, yellow highlight) -> key index 4. Box printed on same page. No figure.' },

{ n:11, pr:11, p:1292, key:2,
  stem:'Which type of genetically determined diseases is responsible for the production of Turner syndrome?',
  opts:['Single gene mutation','Imprinting','Chromosomal abnormality','Multifactorial disorder'],
  expl:'Turner syndrome is caused by monosomy X or structural abnormalities of the X chromosome. It is not caused by single-gene mutations or multifactorial disorders.',
  note:'native p1292.jpeg fully legible, no crop needed. Only 4 options printed on this page (no E option) -- confirmed, not a transcription miss. Highlighted option: "C. Chromosomal abnormality" (bold, underlined, yellow highlight) -> key index 2. Box printed on same page. No figure.' },

{ n:12, pr:12, p:1294, key:0,
  stem:'A 2-day-old baby is admitted to the neonatal unit with respiratory distress and jaundice. A full septic screen is performed, which yields positive E. coli blood cultures. Ophthalmological assessment confirms the presence of cataracts. What is the most likely diagnosis?',
  opts:['Galactosemia','Neonatal hepatitis','Biliary atresia','Hypothyroidism','Breast milk jaundice'],
  expl:'E. coli sepsis in a neonate with cataracts suggests galactosemia. Accumulated galactose causes liver dysfunction, sepsis susceptibility, and eye lens changes.',
  note:'native p1294.jpeg fully legible, no crop needed. Highlighted option: "A. Galactosemia" (bold, underlined, yellow highlight) -> key index 0. Box printed on same page. No figure. "E. coli" in stem is the bacterium abbreviation, verbatim, not a lettered option -- unaffected by the single-prefixed-option check since it is not in opts.' },

{ n:13, pr:13, p:1296, key:2,
  stem:'An infant can sit without support, roll over, and crawl but cannot stand alone. What is her most likely developmental age?',
  opts:['4 months','6 months','9 months','13 months','16 months'],
  expl:'Crawling and sitting without support typically occur around 8–9 months. Standing without support usually develops closer to 12 months.',
  note:'native p1296.jpeg fully legible, no crop needed. Highlighted option: "C. 9 months" (bold, underlined, yellow highlight) -> key index 2. Box printed on same page. No figure.' },

{ n:14, pr:14, p:1298, key:0,
  stem:'What is the predominant evidence of developmental progression during school age?',
  opts:['Cognitive development and abstract thinking','Gross motor, vision, and fine motor skills','Hearing and language milestones','Social interaction and self-care skills'],
  expl:'School-age children develop advanced cognitive skills, problem solving, and abstract thinking, while gross and fine motor skills are mostly established.',
  note:'native p1298.jpeg fully legible, no crop needed. Only 4 options printed on this page -- confirmed. Highlighted option: "A. Cognitive development and abstract thinking" (bold, underlined, yellow highlight) -> key index 0. Box printed on same page. No figure.' },

{ n:15, pr:15, p:1300, key:0,
  stem:'A 3-year-old boy was eating peanuts 2 days ago when his younger brother pushed him over. He coughed up the peanuts and was all right. Today, he has been coughing and becomes breathless as soon as he runs about. He is afebrile. Examination findings are: Respiratory rate 36 breaths/min, heart apex beat displaced to the right, reduced air entry on the left chest. Percussion normal. What is the most likely diagnosis?',
  opts:['Inhaled foreign body (left side)','Inhaled foreign body (right side)','Pleural effusion','Pneumonia','Pneumothorax'],
  expl:'Sudden onset respiratory symptoms with reduced air entry on one side suggest foreign body aspiration. The history of choking confirms this.',
  note:'native p1300.jpeg fully legible, no crop needed. RR 36/min read directly off image, clear. Highlighted option: "A. Inhaled foreign body (left side)" (bold, underlined, yellow highlight) -> key index 0. Box printed on same page. No figure.' },

{ n:16, pr:16, p:1302, key:2,
  stem:'A 2-month-old male infant was born to a 37-year-old mother. The baby was noticed by the primary health care physician to have dysmorphic features, including a flat nasal bridge, short neck, upslanted palpebral fissures, epicanthic folds, and left single palmar crease. Detailed examination revealed a pansystolic murmur heard on the left sternal border, generalized hypotonia, and a 2.5-kg current weight, while his birth weight was 3 kg. What is the most probable cause of all his findings?',
  opts:['Congenital heart disease','Severe malnutrition','Chromosomal abnormality','Congenital infection'],
  expl:'Features like flat nasal bridge, epicanthic folds, and single palmar crease suggest Down syndrome, a chromosomal disorder (trisomy 21).',
  note:'native p1302.jpeg fully legible, no crop needed. Numbers checked directly off image: mother 37-year-old, current weight 2.5-kg, birth weight 3 kg -- all clear. Only 4 options printed on this page. Highlighted option: "C. Chromosomal abnormality" (bold, underlined, yellow highlight) -> key index 2. Box printed on same page. No figure.' },

{ n:17, pr:17, p:1304, key:1,
  stem:'What is the initial management of diabetic ketoacidosis?',
  opts:['Insulin','Fluids','Potassium','Bicarbonate','Antibiotics'],
  expl:'Fluid resuscitation is the first priority in DKA to correct dehydration. Insulin, potassium, and other measures are started after stabilizing circulation.',
  note:'native p1304.jpeg fully legible, no crop needed. Highlighted option: "B. Fluids" (bold, underlined, yellow highlight) -> key index 1. Box printed on same page. No figure.' },

{ n:18, pr:18, p:1306, key:3,
  stem:'A 7-year-old boy has abdominal pain and a rash that started several days ago. On examination, you notice a palpable purpuric rash over his calves and buttocks, with swelling of both ankles. Abdominal examination is unremarkable. What is the most likely laboratory finding?',
  opts:['Decreased platelet count','Hypochromic microcytic anemia','Low C3 complement level','Normal clotting parameters','Prolonged prothrombin time'],
  expl:'Henoch-Schönlein purpura presents with palpable purpura and normal coagulation. Platelets, PT, and aPTT are usually normal.',
  note:'native p1306.jpeg fully legible, no crop needed. Highlighted option: "D. Normal clotting parameters" (bold, underlined, yellow highlight) -> key index 3. Box printed on same page. No figure. Reprint-map fold candidate vs pedep2-hem-68 -- staged verbatim per brief, not folded; also recorded there as overlapping House pedhd-card-18 (per the map’s label, though this stem is HSP not cardiac -- recorded as printed in the map, not adjudicated here).' },

{ n:19, pr:19, p:1308, key:1,
  stem:'A pediatrician is called to urgently review a 3-day-old baby on the postnatal ward. On arrival, the baby is profoundly cyanotic, and saturations do not improve with high-flow oxygen therapy. Examination reveals a single loud second heart sound but no murmur. Intravenous access is secured, and the blood gas shows severe metabolic acidosis. A CXR performed shows increased pulmonary vasculature. What is the most likely diagnosis?',
  opts:['Atrial septal defect','Transposition of the great arteries','Patent ductus arteriosus','Tetralogy of Fallot','Ventricular septal defect'],
  expl:'Profound cyanosis from birth, single loud S2, and poor oxygen response indicate TGA. Increased pulmonary vasculature is seen on CXR.',
  note:'native p1308.jpeg fully legible, no crop needed. Highlighted option: "B. Transposition of the great arteries" (bold, underlined, yellow highlight) -> key index 1. Box printed on same page. No figure -- CXR is described in the stem text but no image is printed on the slide. Reprint-map fold candidate vs pedep2-car-18 -- staged verbatim per brief, not folded; also recorded there as overlapping House pedhd-card-18.' },

{ n:20, pr:20, p:1310, key:3,
  stem:'A 3-month-old baby girl presents with a urinary tract infection. Which of the following organisms is most likely to be isolated from her urine?',
  opts:['Enterococcus spp.','Pseudomonas','Proteus','Escherichia coli','Klebsiella'],
  expl:'E. coli is the most frequent cause of UTI in infants due to its prevalence in the gut flora and proximity to the urinary tract.',
  note:'native p1310.jpeg fully legible, no crop needed. Highlighted option: "D. Escherichia coli" (bold, underlined, yellow highlight) -> key index 3. Box printed on same page. No figure. Last entry of Half A (n:1-20).' },

/* Peds endpoint PART 2, SECTION 12 "MODEL FINAL EXAM 1" -- STAGING HALF B/4, n:21-40.
   Source: Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf (NEVER modified).
   Cache used: C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\0ffb5f86-a1df-4f33-a8c4-fc32a73946ba\scratchpad\ep2-index\
   native\pNNNN.jpeg (800x450) read first; hires\pNNNN.png used when native not legible enough.
   No 300dpi re-render performed unless noted per-entry (ceiling is 800x450 either way).
   OCR index at content\peds\qb-pages\ocr\ep2\ was NOT opened during this staging pass.
   Task prompt assigns n:21-40 directly (matches page arithmetic p=1270+2n: n21->p1312, n40->p1350);
   did not read sibling part-A.js per scope instruction (do not touch other agents' files).
   Answered pages in range: 1312,1314,1316,1318,1320,1322,1324,1326,1328,1330,1332,1334,1336,1338,1340,1342,1344,1346,1348,1350 -> n:21..40.
   Question-number walk (pr = printed number seen on page; filled in as each page is read):
     n:21 p:1312 pr:21
     n:22 p:1314 pr:22
     n:23 p:1316 pr:23
     n:24 p:1318 pr:24
     n:25 p:1320 pr:25
     n:26 p:1322 pr:26
     n:27 p:1324 pr:27
     n:28 p:1326 pr:28 (no box printed on p1326; checked next page p1327, which is Q29's unanswered twin, not an overflow box -- boxless question confirmed, no overflow)
     n:29 p:1328 pr:29
     n:30 p:1330 pr:30
     n:31 p:1332 pr:31
     n:32 p:1334 pr:32
     n:33 p:1336 pr:33
     n:34 p:1338 pr:34 (only 4 options printed A-D, confirmed on both pages)
     n:35 p:1340 pr:35
     n:36 p:1342 pr:36
     n:37 p:1344 pr:37
     n:38 p:1346 pr:38
     n:39 p:1348 pr:39
     n:40 p:1350 pr:40
   Half B ends here (n:21-40). Boundary check: p1351/p1352 peeked (read-only, not staged, belongs to
   Half C) -- confirms pr:41 on p1352, clean answered page, same format, no parity flip, no gap.
   Continuity into Half C is clean.
*/

{ n:21, pr:21, p:1312, key:4,
  stem:'A 6-year-old boy is seen by his general practitioner because of recurrent wheezing associated with upper respiratory tract infections. Which of the following features most supports the diagnosis of asthma?',
  opts:['Daytime cough','Finger clubbing','Spasmodic cough','Persistent moist cough','The presence of symptoms between coughs and colds'],
  expl:'Persistent symptoms outside acute infections suggest underlying asthma. Finger clubbing or constant cough is uncommon in mild/moderate asthma.',
  note:'native p1312.jpeg fully legible, no crop needed. Twin p1311.jpeg checked, identical stem/options. Highlighted option: "E. The presence of symptoms between coughs and colds" (bold, yellow, underlined) -> key index 4. Box printed on same page. No figure.' },

{ n:22, pr:22, p:1314, key:0,
  stem:'A 12-year-old girl experienced diarrhea 3 days before manifesting progressive weakness and inability to walk. Examination reveals marked peripheral symmetrical muscle weakness without atrophy. Deep tendon reflexes were absent in the ankles and 1+ in the knees. What is the most likely diagnosis?',
  opts:['Guillain-Barré syndrome','Transverse myelitis','Myasthenia gravis','Muscular dystrophy','Poliomyelitis'],
  expl:'Symmetrical ascending weakness with decreased reflexes after a recent infection is classic for GBS. Lack of muscle atrophy helps distinguish it from muscular dystrophy.',
  note:'native p1314.jpeg fully legible, no crop needed. Twin p1313.jpeg checked, identical stem/options. Highlighted option: "A. Guillain-Barré syndrome" (bold, yellow, underlined) -> key index 0. Box printed on same page. No figure.' },

{ n:23, pr:23, p:1316, key:4,
  stem:'A 5-year-old boy presents to the outpatient clinic with weakness. His parents report that he finds it difficult to climb the stairs at home. This has been becoming progressively worse over the preceding 6–12 months. He is playing on the carpet with his brother when his mother calls. Which clinical sign does this child suffer from?',
  opts:['Kernig\'s sign','Romberg\'s sign','Babinski\'s sign','Dyskinesia','Gower\'s sign'],
  expl:'Gower\'s sign (using hands to rise from the floor) indicates proximal muscle weakness, typical of Duchenne or Becker muscular dystrophy.',
  note:'native p1316.jpeg fully legible, no crop needed. Twin p1315.jpeg checked, identical stem/options. Highlighted option: "E. Gower\'s sign" (bold, yellow, underlined) -> key index 4. Box printed on same page. No figure.' },

{ n:24, pr:24, p:1318, key:4,
  stem:'When a girl with Down syndrome was investigated, three copies of chromosome 21 were seen in karyotyping, one of which is attached to chromosome 14. How would you describe this abnormality?',
  opts:['Balanced Robertsonian translocation','Mosaicism','Nondisjunction','Triplet repeat expansion','Unbalanced Robertsonian translocation'],
  expl:'The extra chromosome 21 attached to 14 causes trisomy 21. This is unbalanced, unlike a balanced translocation where no extra material is present.',
  note:'native p1318.jpeg fully legible, no crop needed. Twin p1317.jpeg checked, identical stem/options. Highlighted option: "E. Unbalanced Robertsonian translocation" (bold, yellow, underlined) -> key index 4. Box printed on same page. No figure.' },

{ n:25, pr:25, p:1320, key:4,
  stem:'A 15-year-old boy presents to the hospital with malaise, fever, and mild jaundice over the last week. On examination, there is intense inflammation of the tonsils with purulent discharge, splenomegaly, and cervical lymphadenopathy. What is the most likely cause of his illness?',
  opts:['Acute lymphoblastic leukemia','Beta-hemolytic Streptococcus','Hepatitis A infection','Non-Hodgkin’s lymphoma','Epstein-Barr virus (EBV) infection'],
  expl:'Fever, sore throat with exudate, and splenomegaly point to infectious mononucleosis caused by EBV.',
  note:'native p1320.jpeg fully legible, no crop needed. Twin p1319.jpeg checked, identical stem/options. Highlighted option: "E. Epstein-Barr virus (EBV) infection" (bold, yellow, underlined) -> key index 4. Box printed on same page. No figure. Reprint-map records this page as overlapping endpoint part 1 pedep-inf-82 -- recorded only, no fold or edit made.' },

{ n:26, pr:26, p:1322, key:0,
  stem:'A 2-year-old girl is admitted with a 3-day history of coryzal symptoms followed by an acute onset of breathing difficulty. She was previously well and is otherwise healthy. The parents are non-smokers and have no history of atopic disorders. She is thriving, and on examination, she has widespread wheeze with no crepitations. What is the most likely diagnosis?',
  opts:['Viral episodic wheeze','Asthma','Heart failure','Bronchiolitis','Recurrent aspiration'],
  expl:'Wheezing only during viral infections in a previously healthy child is characteristic of viral-induced episodic wheeze. Chronic asthma usually shows symptoms between infections.',
  note:'native p1322.jpeg fully legible, no crop needed. Twin p1321.jpeg checked, identical stem/options. Highlighted option: "A. Viral episodic wheeze" (bold, yellow, underlined) -> key index 0. Box printed on same page. No figure. Reprint-map records this page as an ep2 fold candidate (pedep2-res-22) and a House overlap (pedhd-resp-23) -- recorded only, no fold made.' },

{ n:27, pr:27, p:1324, key:3,
  stem:'Which of the following is not a feature of an innocent heart murmur and requires further investigation?',
  opts:['No radiation','Varies with posture','Systolic','Third heart sound','No symptoms'],
  expl:'Innocent murmurs are usually systolic, vary with posture, have no radiation, and occur in asymptomatic children. A third heart sound is abnormal in children and may indicate heart disease, so it requires further investigation.',
  note:'native p1324.jpeg fully legible, no crop needed. Twin p1323.jpeg checked, identical stem/options. Highlighted option: "D. Third heart sound" (bold, yellow, underlined) -> key index 3. Box printed on same page. No figure.' },

{ n:28, pr:28, p:1326, key:1,
  stem:'At a routine health visitor consultation, a 13-month-old boy is noticed to be crossing arms in his left hand and dragging his left hand and synkinesis and spastic gait. He is holding a toy in his left hand and his father informs the health visitor that he only uses his right side. What is the most likely finding here?',
  opts:['Normal developmental milestones','Fine motor delay','Speech and language delay','Play and social delay','Global delay'],
  expl:'',
  note:'native p1326.jpeg fully legible, no crop needed. Twin p1325.jpeg checked, identical stem/options. Highlighted option: "B. Fine motor delay" (bold, yellow, underlined) -> key index 1. NO box printed on this page (page ends after option E with white space). Checked next page p1327 per box-check rule: it is Q29\'s unanswered twin (plain stem+options, no box, no highlight) -- not an overflow box. So p1326 is a genuinely boxless answered question, expl left empty. No figure. Reprint-map records this page as an ep2 fold candidate (pedep2-nd-19), a House overlap (pedhd-dev-19), and an endpoint part-1 overlap (pedep-mf3-13) -- recorded only, no fold made.' },

{ n:29, pr:29, p:1328, key:3,
  stem:'A 10-year-old boy has a 1-year history of cough that is worse at night and with exercise. Which one of the following tests is most likely to assist you in making a diagnosis?',
  opts:['Barium swallow','Bronchoscopy','Chest radiograph','Spirometry','CT chest'],
  expl:'Chronic cough worse at night or with exercise suggests asthma. Spirometry measures lung function and helps confirm obstructive airway disease.',
  note:'native p1328.jpeg fully legible, no crop needed. Twin p1327.jpeg (already opened as the boundary check for n28) checked, identical stem/options. Highlighted option: "D. Spirometry" (bold, yellow, underlined) -> key index 3. Box printed on same page. No figure.' },

{ n:30, pr:30, p:1330, key:0,
  stem:'An 18-month-old girl is reviewed in the pediatric clinic. She is unsteady on her feet but has normal vision and gaze. She walks with a limp and tends to fall to her left side. Her limb tone and reflexes show the following: Right arm: Tone normal, Reflexes normal. Left arm: Tone increased, Reflexes brisk. Right leg: Tone normal, Reflexes normal. Left leg: Tone increased, Reflexes brisk. Which is the site of her neurological lesion?',
  opts:['Upper motor neuron lesion','Lower motor neuron lesion','Cerebellar lesion','Basal ganglia lesion','Neuromuscular junction'],
  expl:'Increased tone and brisk reflexes on one side suggest a lesion in the upper motor neurons controlling that side of the body.',
  note:'native p1330.jpeg fully legible, no crop needed. Twin p1329.jpeg checked, identical stem/options/four-item tone-reflex list (each line marked with a small round bullet icon, no image content -- not treated as a fig). Highlighted option: "A. Upper motor neuron lesion" (bold, yellow, underlined) -> key index 0. Box printed on same page.' },

{ n:31, pr:31, p:1332, key:2,
  stem:'At what age does autism spectrum disorder usually become evident?',
  opts:['0–12 months','12–24 months','2–4 years','4–8 years','Above 8 years'],
  expl:'Autism spectrum disorder usually presents at this age because this is when language and social skills rapidly develop.',
  note:'native p1332.jpeg fully legible, no crop needed. Twin p1331.jpeg checked, identical stem/options. Highlighted option: "C. 2–4 years" (bold, yellow, underlined) -> key index 2. Box printed on same page. No figure. Reprint-map records this page as an ep2 fold candidate (pedep2-dp-2) and a House overlap (pedhd-devp-2) -- recorded only, no fold made.' },

{ n:32, pr:32, p:1334, key:3,
  stem:'A 3-month-old infant presents with breathlessness and sweating while feeding. He has had several chest infections. You suspect heart failure. Which of the following is most likely to be correct regarding his heart failure?',
  opts:['Hepatomegaly is not a common feature at this age.','It is caused by Eisenmenger syndrome.','It is due to left heart obstruction.','It is due to a left-to-right shunt.','It is due to an increase in right-to-left shunt.'],
  expl:'Infants with breathlessness, sweating while feeding, and repeated infections often have heart failure due to left-to-right shunts, which increase pulmonary blood flow.',
  note:'native p1334.jpeg fully legible, no crop needed. Twin p1333.jpeg checked, identical stem/options. Highlighted option: "D. It is due to a left-to-right shunt." (bold, yellow, underlined) -> key index 3. Box printed on same page. No figure.' },

{ n:33, pr:33, p:1336, key:2,
  stem:'Which of the following is the best reliever therapy in asthma?',
  opts:['Antihistamines','Inhaled corticosteroids','Inhaled short-acting beta agonists','Short-acting theophylline','Inhaled anticholinergic bronchodilators.'],
  expl:'Short-acting beta agonists quickly relieve bronchospasm in asthma attacks, making them the first-choice reliever therapy.',
  note:'native p1336.jpeg fully legible, no crop needed. Twin p1335.jpeg checked, identical stem/options. Highlighted option: "C. Inhaled short-acting beta agonists" (bold, yellow, underlined) -> key index 2. Box printed on same page. No figure.' },

{ n:34, pr:34, p:1338, key:0,
  stem:'A 14-month-old is seen in the clinic because his mother is concerned that he may be having seizures. The episodes occur when he is angry or upset. He has color changes followed by collapse and occasional jerking movements. What is the most likely diagnosis?',
  opts:['Breath-holding spells','Myoclonic epilepsy','Non-epileptic seizure','Vasovagal syncope.'],
  expl:'These spells are triggered by emotional upset and may include brief cyanosis or pallor with collapse; they are benign and self-limiting.',
  note:'native p1338.jpeg fully legible, no crop needed. Twin p1337.jpeg checked, identical stem/options -- ONLY 4 options printed (A-D), no E option on this page (confirmed on both twin pages). Highlighted option: "A. Breath-holding spells" (bold, yellow, underlined) -> key index 0. Box printed on same page. No figure.' },

{ n:35, pr:35, p:1340, key:3,
  stem:'Which of the following is a feature of a typical febrile seizure?',
  opts:['Age usually before 6 months','Focal or generalized','Lasts more than 15 minutes','No post-ictal manifestations','Recurs within 24 hours'],
  expl:'Typical febrile seizures usually occur in children 6 months–5 years, are brief (<15 min), and can be generalized or focal, often with post-ictal recovery.',
  note:'native p1340.jpeg fully legible, no crop needed. Twin p1339.jpeg checked, identical stem/options. Highlighted option: "D. No post-ictal manifestations" (bold, yellow, underlined) -> key index 3. Box printed on same page. No figure. Flagging for the record only, not corrected: the printed box says a typical febrile seizure is "often with post-ictal recovery" (i.e. a post-ictal period does occur), which reads as in tension with the highlighted key D "No post-ictal manifestations" -- and the box also omits mentioning that D is what makes a seizure "simple/typical" vs age or duration. Box transcribed verbatim, key transcribed as printed; not disputed.' },

{ n:36, pr:36, p:1342, key:3,
  stem:'Neonatal blood spot screening program for congenital hypothyroidism in Egypt aims at detecting which abnormality?',
  opts:['Low TSH','Low T4','Low T3','High TSH','High T3'],
  expl:'The test detects elevated TSH, which indicates primary hypothyroidism, allowing early treatment to prevent developmental delay.',
  note:'native p1342.jpeg fully legible, no crop needed. Twin p1341.jpeg checked, identical stem/options. Highlighted option: "D. High TSH" (bold, yellow, underlined) -> key index 3. Box printed on same page. No figure.' },

{ n:37, pr:37, p:1344, key:4,
  stem:'Which is the pathophysiologic cause of type I diabetes in children?',
  opts:['Insulin resistance','B-cell failure','Obesity','Carbohydrate overfeeding','Autoimmune destruction of B cells'],
  expl:'Type I diabetes occurs due to autoimmune destruction of pancreatic beta cells, leading to insulin deficiency.',
  note:'native p1344.jpeg fully legible, no crop needed. Twin p1343.jpeg checked, identical stem/options. Options B and E print "B cells" (as printed, presumably meaning pancreatic beta cells given the box\'s wording "pancreatic beta cells") -- transcribed exactly as printed, not corrected to "beta". Highlighted option: "E. Autoimmune destruction of B cells" (bold, yellow, underlined) -> key index 4. Box printed on same page. No figure.' },

{ n:38, pr:38, p:1346, key:2,
  stem:'What is the diagnostic clue for anemia due to acute blood loss?',
  opts:['Normal retic count and high bilirubin','High retic count and high bilirubin','High retic count and normal bilirubin','High retic count and marked red cell hypochromia','Marked red cell hypochromia and microcytosis'],
  expl:'Acute blood loss stimulates the bone marrow to produce reticulocytes, while bilirubin remains normal because hemolysis is not the cause.',
  note:'native p1346.jpeg fully legible, no crop needed. Twin p1345.jpeg checked, identical stem/options. Highlighted option: "C. High retic count and normal bilirubin" (bold, yellow, underlined) -> key index 2. Box printed on same page. No figure.' },

{ n:39, pr:39, p:1348, key:3,
  stem:'What is the pathophysiologic defect in sickle cell anemia?',
  opts:['Enzyme deficiency','Absent red cell precursors','Red cell membrane abnormality','Amino acid replacement','mRNA abnormality'],
  expl:'Sickle cell anemia is caused by a mutation replacing glutamic acid with valine in the beta-globin chain, altering hemoglobin structure.',
  note:'native p1348.jpeg fully legible, no crop needed. Twin p1347.jpeg checked, identical stem/options. Highlighted option: "D. Amino acid replacement" (bold, yellow, underlined) -> key index 3. Box printed on same page. No figure.' },

{ n:40, pr:40, p:1350, key:2,
  stem:'Which ONE of the following disorders is inherited as a sex-linked recessive disorder?',
  opts:['Thalassemia','Idiopathic thrombocytopenia','Glucose-6-phosphate dehydrogenase deficiency','Von Willebrand\'s disease','Hereditary spherocytosis'],
  expl:'G6PD deficiency is X-linked recessive, mostly affecting males, with females being carriers.',
  note:'native p1350.jpeg fully legible, no crop needed. Twin p1349.jpeg checked, identical stem/options. Highlighted option: "C. Glucose-6-phosphate dehydrogenase deficiency" (bold, yellow, underlined) -> key index 2. Box printed on same page. No figure. Last entry of Half B (n:21-40).' },

/* Peds endpoint PART 2, SECTION 12 "MODEL FINAL EXAM 1" -- STAGING QUARTER C, n:41-60.
   Source: Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf (NEVER modified).
   Cache used: C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\0ffb5f86-a1df-4f33-a8c4-fc32a73946ba\scratchpad\ep2-index\
   native\pNNNN.jpeg (800x450) read first; hires\pNNNN.png used when native not legible enough.
   OCR index at content\peds\qb-pages\ocr\ep2\ was NOT opened during this staging pass.
   Task prompt assigned n:41-60 directly (section-global numbering already fixed by the parent);
   per the prompt's explicit instruction I did NOT open sibling part files (A/B/D) to verify the
   preceding part's last n -- this diverges from staging-brief section 5's "read the last entry of
   the preceding part off disk" bullet, and is flagged in the report as a brief-vs-prompt conflict,
   resolved in the prompt's favour because it explicitly forbids touching sibling files.
   Page arithmetic hypothesis (reprint map): n sits on page 1270+2n, even pages 1352..1390,
   unanswered twin on the odd page before. Confirmed page-by-page below via printed pr numbers.
   Answered pages in this quarter, in order: 1352,1354,1356,1358,1360,1362,1364,1366,1368,1370,
   1372,1374,1376,1378,1380,1382,1384,1386,1388,1390 -> n:41..60.

   Question-number walk (pr = printed number seen on page; filled in as each page is read):
     n:41 p:1352 pr:41
     n:42 p:1354 pr:42
     n:43 p:1356 pr:43
     n:44 p:1358 pr:44
     n:45 p:1360 pr:45
     n:46 p:1362 pr:46
     n:47 p:1364 pr:47
     n:48 p:1366 pr:48
     n:49 p:1368 pr:49
     n:50 p:1370 pr:50
     n:51 p:1372 pr:51
     n:52 p:1374 pr:52
     n:53 p:1376 pr:53
     n:54 p:1378 pr:54
     n:55 p:1380 pr:55
     n:56 p:1382 pr:56
     n:57 p:1384 pr:57
     n:58 p:1386 pr:58
     n:59 p:1388 pr:59
     n:60 p:1390 pr:60
   Printed numbers ran 41..60 with no gap and no repeat, matching the section-global n one-for-one.
   Every one of the 20 answered pages carried a printed stem, a full option ladder and one option
   highlighted yellow -- none was a teaching-notes false positive and none needed the box-only-page
   reclassification. Two pages (n41, n47) print a box that sits beside rather than below the
   options -- read in full regardless.
   Boxless questions in this quarter: n:41 only (p1352) -- confirmed genuine (not an overflow) by
   reading the next page p1353, which is the ordinary unanswered twin of n:42. No overflow-box page
   (no `box:` field) occurred anywhere in this quarter -- the alternation never broke.
   Figures: ZERO in this quarter -- measured by reading every one of the 20 answered pages whole;
   none printed an image, table, ECG, X-ray or other figure.
   Shared option menus: none found in this quarter -- each of the 20 questions has a distinct option
   list; no menu recurs from n41-60 (the four-question shared-menu run seen in section 11 does not
   appear here).
   Reprint-map candidates landing in this quarter, recorded per entry and NOT adjudicated here:
     n:46 p1362 -> candidate overlap, endpoint part-1 pedep-mf3-37 (record only)
     n:51 p1372 -> candidate overlap, House pedhd-inf-17 (record only)
     n:53 p1376 -> fold candidate, live pedep2-car-20; candidate overlap, House pedhd-card-20
     n:57 p1384 -> fold candidate, live pedep2-ren-20; candidate overlap, House pedhd-renal-20
   Boundary: p1392 read (one page past range, not staged) -- confirms pr:61, a clean answered page
   in the same format (highlighted key "C. Thalassemia major", boxed explanation), no parity flip,
   no gap. Quarter C ends cleanly at n:60/p1390.
   Per the task prompt's explicit instruction, sibling part files A/B/D were never opened, read or
   touched -- the prompt fixed n:41-60 directly, which the parent evidently derived from the same
   section-global count the staging brief (section 5) would otherwise have this agent verify by
   reading part-B's last entry. That brief bullet and this prompt point in different directions on
   HOW the range is confirmed; the prompt's explicit "do not touch their files" wins, and the printed
   pr:41 opening this quarter (matching the prompt's stated n:41) is the independent confirmation
   the brief's bullet was chasing, obtained without opening the sibling file.
*/

{ n:41, pr:41, p:1352, key:1,
  stem:'What is the median age of mature pincer grasp?',
  opts:['8 months','10 months','12 months','14 months','16 months'],
  expl:'',
  note:'native p1352.jpeg fully legible, no crop needed. Highlighted option: "B. 10 months" (bold, yellow highlight, underlined) -> key index 1. No box printed on the answered page; checked next page p1353 per the boxless-question rule -- it is the normal unanswered twin of pr:42 (no highlight, no box), so p1352 genuinely prints no explanation, not an overflow. No figure.' },

{ n:42, pr:42, p:1354, key:4,
  stem:'How does the "Automated Otoacoustic Emission" neonatal hearing screening test used in Egypt function?',
  opts:['It tests for auditory neuropathy.','It is a screening for brain function.','There are no false positive results.','It is not affected by ambient noise.','It establishes normal cochlear function.'],
  expl:'OAE screening measures sound emissions from the cochlea in response to stimuli, indicating normal cochlear function.',
  note:'native p1354.jpeg fully legible, no crop needed. Highlighted option: "E. It establishes normal cochlear function." (bold, yellow, underlined) -> key index 4. Box printed on same page. No figure.' },

{ n:43, pr:43, p:1356, key:4,
  stem:'A 9-month-old infant attends the clinic because of unusual movements. She has developed episodes of jerking movements of her neck and trunk. These occur in repetitive bursts. She was able to sit and babble but has stopped doing so. Which of these investigations would you choose to initially undertake to confirm the diagnosis of developmental delay in this case?',
  opts:['Chromosome karyotype','Congenital infection screen','Cranial ultrasound scan','Thyroid function tests','EEG'],
  expl:'EEG is the first investigation for suspected seizure activity to confirm the type and guide further management.',
  note:'native p1356.jpeg fully legible, no crop needed. Highlighted option: "E. EEG" (bold, yellow, underlined) -> key index 4. Box printed on same page, to the right of the highlighted option. No figure. Stem describes infantile spasms/West syndrome (developmental regression + jerking spasm bursts) though question asks re: initial investigation.' },

{ n:44, pr:44, p:1358, key:2,
  stem:'What is the most common type of cerebral palsy associated with hypoxic-ischemic encephalopathy?',
  opts:['Spastic hemiplegia','Spastic diplegia','Spastic quadriplegia','Spastic paraplegia'],
  expl:'Severe perinatal hypoxia commonly results in spastic quadriplegia, affecting all four limbs with increased tone.',
  note:'native p1358.jpeg fully legible, no crop needed. Only 4 options printed on this page (A-D). Highlighted option: "C. Spastic quadriplegia" (bold, yellow, underlined) -> key index 2. Box printed on same page. No figure.' },

{ n:45, pr:45, p:1360, key:3,
  stem:'A cheerful 20-month-old girl is referred to the child development clinic by her health visitor because she is not yet walking. She was born at term with no complications. She learned to sit without support at 10 months and is now able to crawl although she drags her right leg behind her. Her mother says that she has always been left-handed. Examination of the right arm and leg reveals reduced power but increased tone and reflexes. Which of the following investigations would you choose to confirm the diagnosis of developmental delay?',
  opts:['Chromosome karyotype','Congenital infection screen','Creatine kinase','CT or MRI scan of the brain','Thyroid function tests'],
  expl:'Imaging helps identify structural brain lesions causing hemiplegia and developmental delay.',
  note:'native p1360.jpeg fully legible, no crop needed. Highlighted option: "D. CT or MRI scan of the brain" (bold, yellow, underlined) -> key index 3. Box printed on same page, overlapping options B/C in layout but text fully legible. No figure.' },

{ n:46, pr:46, p:1362, key:2,
  stem:'A 3-month-old baby is admitted with a diagnosis of bronchiolitis. Her condition has further worsened, and she developed audible grunting sounds. What is the best pathophysiologic explanation for grunting in this baby?',
  opts:['Oxygen consumption is decreased with grunting, which helps resolve hypoxemia.','During grunting, lung volume increases as more air moves through the conducting airways.','Grunting increases end-expiratory pressure and promotes gas exchange.','During grunting, the diameter of the bronchi and bronchioles is increased.'],
  expl:'Grunting acts like a natural PEEP (positive end-expiratory pressure) to keep alveoli open and improve oxygenation.',
  note:'native p1362.jpeg fully legible, no crop needed. Only 4 options printed on this page (A-D). Highlighted option: "C. Grunting increases end-expiratory pressure and promotes gas exchange." (bold, yellow, underlined) -> key index 2. Box printed on same page. No figure. Per reprint map this page is a candidate overlap with endpoint part-1 pedep-mf3-37 -- recorded here only, not folded, no other file touched.' },

{ n:47, pr:47, p:1364, key:2,
  stem:"A couple brought their second male child to the immunologist because he suffers from a primary immune disorder that causes high serum IgE and repeated staphylococcal infections. Parents are non-consanguineous, and the older brother is not affected. By investigating both parents, the father was found to have the same immune defect. What is the most probable mode of inheritance of the child's illness?",
  opts:['Autosomal recessive','X-linked recessive','Autosomal dominant','X-linked dominant','Y-linked'],
  expl:'The disorder is seen in the father and son, suggesting vertical transmission, which is consistent with autosomal dominant inheritance.',
  note:'native p1364.jpeg fully legible, no crop needed. Highlighted option: "C. Autosomal dominant" (bold, yellow, underlined) -> key index 2. Box printed on same page, immediately right of the highlighted option. No figure.' },

{ n:48, pr:48, p:1366, key:1,
  stem:'A 10-year-old boy presents to a pediatric outpatient with a concern from the school teacher that he had lapses in class. Parents noticed that he develops sudden episodes of staring and unresponsiveness for about 10–15 seconds and then returns to his baseline activity. Which type of seizure does this boy have?',
  opts:['Myoclonic seizure','Absence seizure','Tonic-clonic seizure','Simple febrile seizure','Complex febrile seizure'],
  expl:'Absence seizures present as sudden, brief lapses in awareness with immediate return to normal activity.',
  note:'native p1366.jpeg fully legible, no crop needed. Highlighted option: "B. Absence seizure" (bold, yellow, underlined) -> key index 1. Box printed on same page. No figure. Duration "10-15 seconds" read directly off image.' },

{ n:49, pr:49, p:1368, key:3,
  stem:'A 20-month-old child with a febrile illness developed a generalized tonic-clonic seizure that lasted 5 minutes. Her systemic examination was unremarkable. After evaluation, she was diagnosed with febrile convulsions. Her parents are concerned about the risk of future epilepsy. Which of the following is considered a risk factor for future epilepsy in this child?',
  opts:['Generalized tonic-clonic seizures','Seizure lasting up to 10 minutes','Age of onset less than two years','History of epilepsy in the father'],
  expl:'Family history of epilepsy increases the risk of future seizures more than the characteristics of the febrile seizure itself.',
  note:'native p1368.jpeg fully legible, no crop needed. Only 4 options printed on this page (A-D). Highlighted option: "D. History of epilepsy in the father" (bold, yellow, underlined) -> key index 3. Box printed on same page. No figure. Seizure duration "5 minutes" read directly off image.' },

{ n:50, pr:50, p:1370, key:2,
  stem:'A 16-month-old child presents to the Emergency Department with a cough and nasal congestion for 2 days. The mother reports that the quality of his cough has recently changed, in that it is now barking in nature. He has been otherwise healthy and has no chronic illness. Your examination reveals a child who appears to be in mild respiratory distress with a respiratory rate of 35/min. Other vital signs, including oxygen saturation, are within normal parameters. There is no accessory muscle use or excessive work of breathing noted. Which one of the following findings are you most likely to find on your clinical examination?',
  opts:['Expiratory wheezes','Bilateral fine crackles','Inspiratory stridor','Bilateral rhinorrhea','Increased vocal resonance'],
  expl:'Barking cough and mild respiratory distress in a previously healthy child suggest croup, which produces inspiratory stridor.',
  note:'native p1370.jpeg fully legible, no crop needed. Word "barking" printed in red in the stem, transcribed as plain text per verbatim rule (colour not represented in schema). Highlighted option: "C. Inspiratory stridor" (bold, yellow, underlined) -> key index 2. Box printed on same page. No figure. Respiratory rate "35/min" read directly off image.' },

{ n:51, pr:51, p:1372, key:2,
  stem:"A 2-year-old boy is brought into the emergency department by ambulance at night with an acute history of cough and stridor following a 2-day history of coryzal symptoms. On examination, he is afebrile but has marked intercostal recession with stridor and a 'barking cough' is heard. What is the most likely causative organism?",
  opts:['Adenovirus','Respiratory syncytial virus','Parainfluenza virus','Rhinovirus','Influenza virus'],
  expl:'Parainfluenza virus is the most common cause of croup in young children, which presents with a barking cough, stridor, and sometimes respiratory distress after mild cold symptoms',
  note:"native p1372.jpeg fully legible, no crop needed. Phrase 'barking cough' printed in red in the stem (with the quote marks), transcribed as plain text per verbatim rule. Highlighted option: \"C. Parainfluenza virus\" (bold, yellow, underlined) -> key index 2. Box printed on same page. No figure. Per reprint map this page is a candidate overlap with House pedhd-inf-17 -- recorded here only, not folded, no other file touched." },

{ n:52, pr:52, p:1374, key:3,
  stem:"A 3-year-old boy presents to his family doctor. He has a 'hacking' cough that started several weeks ago and has failed to respond to two courses of antibiotics. He is otherwise well and has had no previous chest problems. On examination, there is decreased air entry in the right lower zone with normal percussion noted. His growth is normal. Which is the most appropriate next step?",
  opts:['Admit for intravenous antibiotic therapy','Assess bronchodilator response','Organize for ultrasound-guided drainage of his pleural effusion','Request a chest X-ray','Request an evaluation of immunoglobulins and functional antibodies'],
  expl:'A chest X-ray is the next best step to evaluate localized lung pathology, such as consolidation or collapse, since the child has a persistent cough unresponsive to antibiotics. It helps guide further management, like drainage or specialist referral.',
  note:'native p1374.jpeg fully legible, no crop needed. Highlighted option: "D. Request a chest X-ray" (bold, yellow, underlined) -> key index 3. Box printed on same page. No figure.' },

{ n:53, pr:53, p:1376, key:4,
  stem:'A mother on the postnatal ward has urgently requested a medical review for her 3-day-old baby who appears blue. On arrival, the baby is deeply cyanosed with cool peripheries and saturations do not improve despite maximum oxygen therapy. Femoral pulses are palpable and a single, loud second heart sound can be heard, but no murmur. The baby is brought to the neonatal unit for further care. What is the next most important intervention?',
  opts:['IV furosemide','IV antibiotics','IV fluid bolus of normal saline','IV fluid bolus of dextrose','IV infusion of prostaglandin E1'],
  expl:'The baby likely has a duct-dependent congenital heart lesion. Prostaglandin E1 keeps the ductus arteriosus open, maintaining pulmonary or systemic blood flow until definitive management.',
  note:'native p1376.jpeg fully legible, no crop needed. Highlighted option: "E. IV infusion of prostaglandin E1" (bold, yellow, underlined) -> key index 4. Box printed on same page. No figure. Per reprint map this page is a fold candidate against live pedep2-car-20, and a candidate overlap with House pedhd-card-20 -- both recorded here only, not folded, no other file touched.' },

{ n:54, pr:54, p:1378, key:2,
  stem:'A 6-year-old boy with a known diagnosis of ventricular septal defect has a 2-week history of fever of unknown source, fatigue, weight loss, myalgia, and headaches. On repeated examinations during this time, he is found to have developed a new heart murmur, petechiae, and mild splenomegaly. Which of the following investigations are essential to establish a diagnosis?',
  opts:['Echocardiography & ECG','Complete blood count & CRP','Blood culture & Echocardiography','ASOT & CRP','Chest X-ray & ECG'],
  expl:'These findings suggest infective endocarditis. Blood cultures identify the organism, and echocardiography detects vegetations on the heart valves.',
  note:'native p1378.jpeg fully legible, no crop needed. Highlighted option: "C. Blood culture & Echocardiography" (bold, yellow, underlined) -> key index 2. Box printed on same page. No figure.' },

{ n:55, pr:55, p:1380, key:3,
  stem:'An 8-month-old baby girl presented to the pediatrician with an instrumental murmur below the left infraclavicular area. She was tachypneic; RR of 48/min, with bounding peripheral pulsations. Her body weight is 5.8 kg (birth weight was 3.4 kg). What is the most likely diagnosis?',
  opts:['Small PDA','Moderate VSD','Wide ASD','Moderate to large PDA','Coarctation of aorta'],
  expl:'A patent ductus arteriosus (PDA) of moderate to large size causes left-to-right shunt, leading to tachypnea, poor weight gain, and bounding pulses due to increased stroke volume.',
  note:'native p1380.jpeg fully legible, no crop needed. Highlighted option: "D. Moderate to large PDA" (bold, yellow, underlined) -> key index 3. Box printed on same page. No figure. Weights "5.8 kg"/"3.4 kg" and RR "48/min" read directly off image.' },

{ n:56, pr:56, p:1382, key:0,
  stem:'A 1-month-old infant is taken to his general practitioner by his mother because of vomiting and not taking his feeds as usual during the last 24 hours. He is irritable and has a temperature of 39°C. His heart rate is 170 beats/min and his respiratory rate is 45 breaths/min. The remainder of his examination is unremarkable. A clean catch urine sample is obtained. Microscopic examination shows innumerable pus cells and is positive for nitrites and protein on a dipstick. Which is the most appropriate next course of action?',
  opts:['Intravenous antibiotics','Intravenous fluids','Oral antibiotics','Oral paracetamol','Oral rehydration solution'],
  expl:'In infants <2 months, a UTI can quickly lead to sepsis. IV antibiotics are required for effective treatment and to prevent complications.',
  note:'native p1382.jpeg fully legible, no crop needed. Highlighted option: "A. Intravenous antibiotics" (bold, yellow, underlined) -> key index 0. Box printed on same page. No figure. Temperature "39°C", HR "170 beats/min", RR "45 breaths/min" read directly off image.' },

{ n:57, pr:57, p:1384, key:0,
  stem:'A 9-year-old girl presents with hematuria. She is usually fit and well but was treated for tonsillitis last week by her GP. On examination, there is peripheral edema and hypertension but no abdominal mass. Urine dipstick is positive for blood and protein. What is the likely diagnosis?',
  opts:['Post-streptococcal glomerulonephritis','Hemolytic uremic syndrome','Systemic lupus erythematosus (SLE)','Henoch-Schönlein purpura','Minimal change nephropathy'],
  expl:'This classic presentation occurs 1–2 weeks after a streptococcal infection, causing hematuria, proteinuria, edema, and hypertension.',
  note:'native p1384.jpeg fully legible, no crop needed. Highlighted option: "A. Post-streptococcal glomerulonephritis" (bold, yellow, underlined) -> key index 0. Box printed on same page. No figure. Per reprint map this page is a fold candidate against live pedep2-ren-20, and a candidate overlap with House pedhd-renal-20 -- both recorded here only, not folded, no other file touched.' },

{ n:58, pr:58, p:1386, key:3,
  stem:'A 7-year-old girl presents with edema of the face and legs, and abdominal pain. There is no hypertension, and the urine dipstick shows 4+ protein. She is started on prednisolone. What would be the likely finding on biopsy and light microscopy?',
  opts:['Focal-segmental glomerulosclerosis','Mesangiocapillary glomerulonephritis','Crescentic glomerulonephritis','Minimal change disease'],
  expl:'Minimal change disease is the most common cause of nephrotic syndrome in young children, showing normal glomeruli on light microscopy but responding well to steroids.',
  note:'native p1386.jpeg fully legible, no crop needed. Only 4 options printed on this page (A-D). Highlighted option: "D. Minimal change disease" (bold, yellow, underlined) -> key index 3. Box printed on same page. No figure.' },

{ n:59, pr:59, p:1388, key:1,
  stem:'What is the most common solid childhood cancer?',
  opts:['Lymphomas','Brain tumors','Wilms tumor','Soft tissue sarcomas','Neuroblastoma'],
  expl:'Brain tumors are the most common solid tumors in children, more frequent than Wilms tumor or neuroblastoma.',
  note:'native p1388.jpeg fully legible, no crop needed. Highlighted option: "B. Brain tumors" (bold, yellow, underlined) -> key index 1. Box printed on same page, well below the option list. No figure.' },

{ n:60, pr:60, p:1390, key:0,
  stem:'What is the most common complication of minimal change nephrotic syndrome?',
  opts:['Susceptibility to infections','Acute kidney injury','Bleeding tendency','Electrolyte disturbances','Hypertension'],
  expl:'Protein loss in urine leads to decreased immunoglobulins, making children prone to infections.',
  note:'native p1390.jpeg fully legible, no crop needed. Highlighted option: "A. Susceptibility to infections" (bold, yellow, underlined) -> key index 0. Box printed on same page. No figure. Last entry of quarter C (n:41-60). Boundary check: p1392 read (read-only, not staged, belongs to part-D) -- confirms pr:61, clean answered page, same format, key highlighted "C. Thalassemia major", no parity flip, no gap. Continuity into part D is clean.' },

/* Peds endpoint PART 2, SECTION 12 "MODEL FINAL EXAM 1" -- STAGING HALF D, n:61-80.
   Source: Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf (NEVER modified).
   Cache used: C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\0ffb5f86-a1df-4f33-a8c4-fc32a73946ba\scratchpad\ep2-index\
   native\pNNNN.jpeg (800x450) read first; hires\pNNNN.png used when native not legible enough.
   No 300dpi re-render performed unless noted per-entry (ceiling is 800x450 either way).
   OCR index at content\peds\qb-pages\ocr\ep2\ was NOT opened during this staging pass.
   Range: answered pages 1392,1394,1396,...,1430 (even), unanswered twin the odd page before each,
   per the index hypothesis in endpoint-p2-s12-reprint-map.md (n = 1270+2n) and confirmed page by
   page below rather than trusted. n is section-global; this file covers n:61-80, the section's
   closing quarter (section total 80).
   Confirmed at start: p1391 unanswered / p1392 answered, printed number 61 -- matches n:61,
   arithmetic holds at the open of this range.
   Question-number walk (pr = printed number seen on page; filled in as each page is read):
     n:61 p:1392 pr:61
     n:62 p:1394 pr:62
     n:63 p:1396 pr:63
     n:64 p:1398 pr:64
     n:65 p:1400 pr:65
     n:66 p:1402 pr:66
     n:67 p:1404 pr:67
     n:68 p:1406 pr:68
     n:69 p:1408 pr:69
     n:70 p:1410 pr:70
     n:71 p:1412 pr:71
     n:72 p:1414 pr:72 (reprint-map fold candidate vs pedep2-car-26 -- staged verbatim, not adjudicated)
     n:73 p:1416 pr:73
     n:74 p:1418 pr:74
     n:75 p:1420 pr:75
     n:76 p:1422 pr:76
     n:77 p:1424 pr:77
     n:78 p:1426 pr:78
     n:79 p:1428 pr:79
     n:80 p:1430 pr:80 -- last entry of this quarter AND of the section.
   Boundary confirmed on the two pages past the range: p1431 is a full-page image of a handwritten
   Arabic religious supplication (about the night prayer / Witr prayer) -- not a question, not an
   overflow box, closes the section (same shape as the p.244 closing slide reported in section 3's
   staging). p1432 is a title slide reading "Model Final Exam 2" in red -- the next section opens
   here exactly where predicted. Section 12 confirmed to run pp.1270-1431, 80 questions, printed
   numbers 61..80 with no gap and no repeat in this quarter.
   Checker flagged n:68 opt 5 "E. coli" as looking like a stray list-letter prefix -- confirmed
   against p1406/p1405 images, it is the genuine option text (the bacterium), not a defect.
*/

{ n:61, pr:61, p:1392, key:2,
  stem:'An 8-month-old girl is brought to her GP because of poor weight gain. On examination, there is pallor and mildly icteric sclera. She has a distended abdomen with hepatosplenomegaly and mild frontal bossing. CBC shows microcytic hypochromic anemia. What is the likely diagnosis?',
  opts:['Sickle cell disease','Hereditary spherocytosis','Thalassemia major','Glucose-6-phosphate dehydrogenase deficiency (G6PD)','Iron deficiency anemia'],
  expl:'Thalassemia major presents in infancy with severe anemia, growth delay, hepatosplenomegaly, and characteristic facial features due to extramedullary hematopoiesis.',
  note:'native p1392.jpeg fully legible, no crop needed. Twin p1391.jpeg checked, identical stem/opts. Highlighted option: "C. Thalassemia major" (bold, yellow highlight, underlined) -> key index 2. Box printed on same page. No figure.' },

{ n:62, pr:62, p:1394, key:4,
  stem:'Which of the following hematological disorders is associated with prolongation of partial thromboplastin time (PTT) with normal prothrombin time (PT)?',
  opts:['Hemorrhagic disease of the newborn','DIC','Chronic ITP','Henoch-Schönlein purpura','Hemophilia A'],
  expl:'Hemophilia A is a factor VIII deficiency causing prolonged PTT, while PT remains normal because the extrinsic pathway is unaffected.',
  note:'native p1394.jpeg fully legible, no crop needed. Twin p1393.jpeg checked, identical stem/opts. Highlighted option: "E. Hemophilia A" (bold, yellow highlight, underlined) -> key index 4. Box printed on same page. No figure.' },

{ n:63, pr:63, p:1396, key:2,
  stem:'Two weeks after URTI, a 2-year-old child develops bruising and generalized petechiae. No hepatosplenomegaly or lymph node enlargement is noted. Physical examination is otherwise unremarkable. CBC reveals hemoglobin of 12.3 g/dL, WBC: 8,800/ml & platelet count: 8,000/ml. Which of the following is the most likely diagnosis',
  opts:['Von Willebrand disease (VWD)','Acute leukemia','Immune thrombocytopenic purpura (ITP)','Aplastic anemia','Thrombotic thrombocytopenic purpura'],
  expl:'ITP is a common post-viral cause of isolated thrombocytopenia in children, usually with normal hemoglobin and WBC counts.',
  note:'native p1396.jpeg fully legible, no crop needed. Twin p1395.jpeg checked, identical stem/opts. Highlighted option: "C. Immune thrombocytopenic purpura (ITP)" (bold, yellow highlight, underlined) -> key index 2. Numbers read directly off image: Hb 12.3 g/dL, WBC 8,800/ml, platelets 8,000/ml. Box printed on same page. No figure. Stem prints no question mark after "diagnosis" -- transcribed as printed.' },

{ n:64, pr:64, p:1398, key:3,
  stem:'A 3-year-old boy developed a preference for using his left hand at 7 months of age. His upper limbs are stiff, with increased reflexes. What is the type of movement disorder that fits with this type of cerebral palsy?',
  opts:['Dyskinetic','Ataxic','Spastic diplegia','Spastic hemiplegia','Spastic quadriplegia'],
  expl:'Spastic hemiplegia affects one side of the body, causing increased tone and reflexes, often leading to early hand preference on the unaffected side.',
  note:'native p1398.jpeg fully legible, no crop needed. Twin p1397.jpeg checked, identical stem/opts. Highlighted option: "D. Spastic hemiplegia" (bold, yellow highlight, underlined) -> key index 3. Box printed on same page. No figure.' },

{ n:65, pr:65, p:1400, key:1,
  stem:'Which laboratory finding is characteristic of bone marrow failure?',
  opts:['Reticulocytosis','Low reticulocyte count','Positive Coombs test','Hypochromic microcytic anemia'],
  expl:'Bone marrow failure leads to decreased red cell production, so the reticulocyte count is low despite anemia.',
  note:'native p1400.jpeg fully legible, no crop needed. Twin p1399.jpeg checked, identical stem/opts. This question prints only FOUR options (A-D), not the usual five -- confirmed on both twin pages. Highlighted option: "B. Low reticulocyte count" (bold, yellow highlight, underlined) -> key index 1. Box printed on same page. No figure.' },

{ n:66, pr:66, p:1402, key:3,
  stem:'Which of the following can be used as a treatment modality in cerebral palsy?',
  opts:['Resection of the affected part of the brain','Treatment of the cause of cerebral palsy','Restriction of certain proteins in the diet','Botulinum toxin injections to the spastic muscles'],
  expl:'Botulinum toxin reduces spasticity and improves mobility in children with cerebral palsy, but it does not cure the underlying brain injury.',
  note:'native p1402.jpeg fully legible, no crop needed. Twin p1401.jpeg checked, identical stem/opts. Again only FOUR options (A-D), confirmed both pages. Highlighted option: "D. Botulinum toxin injections to the spastic muscles" (bold, yellow highlight, underlined) -> key index 3. Box printed on same page. No figure.' },

{ n:67, pr:67, p:1404, key:0,
  stem:"A 10-year-old boy is admitted with left lower lobe pneumonia. On day 3 of admission, he develops gradually increased work of breathing and a fever of 40°C. On assessment, he has a respiratory rate of 40 per minute, and auscultation reveals a clear right lung field but reduced breath sounds throughout his left lung. The percussion note is 'stony dull,' and chest expansion is reduced on his left side. What is the most likely diagnosis?",
  opts:['Empyema','Lobar collapse','Lung abscess','Pneumothorax','Cor pulmonale'],
  expl:'Empyema is pus in the pleural space, causing stony dull percussion, reduced breath sounds, and impaired chest expansion.',
  note:'native p1404.jpeg fully legible, no crop needed. Twin p1403.jpeg checked, identical stem/opts. Numbers read directly off image: fever 40°C, respiratory rate 40/min. Highlighted option: "A. Empyema" (bold, yellow highlight, underlined) -> key index 0. Box printed to the right of the stem/options rather than below -- same page, still counted as printed with the answered page. No figure.' },

{ n:68, pr:68, p:1406, key:0,
  stem:'A 4-year-old girl is admitted with fever, difficulty breathing, and cough. Chest examination revealed reduced air entry and bronchial breathing over the right lower lobe. What is the most likely pathogen?',
  opts:['Streptococcus pneumoniae','Haemophilus influenzae','Mycoplasma pneumoniae','Chlamydia trachomatis','E. coli'],
  expl:'S. pneumoniae is the most common bacterial cause of community-acquired pneumonia in children, presenting with fever, cough, and localized findings on examination.',
  note:'native p1406.jpeg fully legible, no crop needed. Twin p1405.jpeg checked, identical stem/opts. Highlighted option: "A. Streptococcus pneumoniae" (bold, yellow highlight, underlined) -> key index 0. Box printed on same page. No figure.' },

{ n:69, pr:69, p:1408, key:2,
  stem:'What is the most probable type of abnormality found on karyotyping in cases of Down syndrome?',
  opts:['Mitotic nondisjunction','Translocation','Meiotic nondisjunction','Mosaicism'],
  expl:'Most cases of Down syndrome result from trisomy 21 due to meiotic nondisjunction during gamete formation.',
  note:'native p1408.jpeg fully legible, no crop needed. Twin p1407.jpeg checked, identical stem/opts. FOUR options (A-D). Highlighted option: "C. Meiotic nondisjunction" (bold, yellow highlight, underlined) -> key index 2. Box printed on same page. No figure.' },

{ n:70, pr:70, p:1410, key:2,
  stem:'Which clinical condition is associated with a diastolic cardiac murmur?',
  opts:['Anemia','Hyperthyroidism with hyperdynamic circulation','Mitral stenosis','Aortic stenosis','Fever'],
  expl:'Diastolic murmurs arise from turbulent blood flow during ventricular filling, commonly due to mitral stenosis.',
  note:'native p1410.jpeg fully legible, no crop needed. Twin p1409.jpeg checked, identical stem/opts. Highlighted option: "C. Mitral stenosis" (bold, yellow highlight, underlined) -> key index 2. Box printed on same page. No figure.' },

{ n:71, pr:71, p:1412, key:1,
  stem:'A six-year-old boy presents with cyanosis. He was diagnosed to have a large VSD earlier in infancy, but his parents have refused surgical repair. On physical examination, his weight and height are below the 5th centile. He has central cyanosis, with an O2 saturation of 81% in room air. What is the pathophysiologic mechanism of his cyanosis?',
  opts:['Reduced cardiac output','Shunt reversal','Heart block','Tachyarrhythmia','Methemoglobinemia'],
  expl:'Long-standing large VSD can cause Eisenmenger syndrome, where left-to-right shunt reverses, leading to cyanosis and hypoxemia.',
  note:'native p1412.jpeg fully legible, no crop needed. Twin p1411.jpeg checked, identical stem/opts. Number read directly off image: O2 saturation 81%. Highlighted option: "B. Shunt reversal" (bold, yellow highlight, underlined) -> key index 1. Box printed on same page (positioned right of options). No figure.' },

{ n:72, pr:72, p:1414, key:2,
  stem:'An 8-month-old girl is brought to the emergency room because she appears ill. She is pale and dyspneic with a respiratory rate of 80 breaths/min. Heart rate is 195 bpm, heart sounds are weak, and a gallop is heard. Chest auscultation reveals fine crepitations. There is cardiomegaly on chest X-ray. She had low-grade fever and rhinorrhea 2 days before. What is the most probable diagnosis?',
  opts:['Acute glomerulonephritis','Bronchopneumonia','Viral myocarditis','Pericarditis','Wide VSD'],
  expl:'This child presents with signs of acute heart failure: tachypnea, tachycardia, weak heart sounds, gallop rhythm, and cardiomegaly. The recent viral prodrome (fever and rhinorrhea) and fine lung crepitations suggest pulmonary congestion due to impaired myocardial function, which is characteristic of viral myocarditis.',
  note:'native p1414.jpeg fully legible, no crop needed. Twin p1413.jpeg checked, identical stem/opts. Numbers read directly off image: RR 80/min, HR 195 bpm, prodrome "2 days before". Highlighted option: "C. Viral myocarditis" (bold, yellow highlight, underlined) -> key index 2. Box printed on same page (right of options). No figure. This page is a reprint-map fold candidate (endpoint-p2-s12-reprint-map.md, p.1414 vs pedep2-car-26) -- staged verbatim per brief, not adjudicated here.' },

{ n:73, pr:73, p:1416, key:3,
  stem:'A girl was born 48 hours ago at term. She weighed 3.2 kg. You are asked to review her on the postnatal ward as she is breathing very quickly. She is not feeding. On examination, she is breathing at 68 breaths/min and has mild chest recession. She looks unwell. You cannot confidently feel her femoral pulses. Her oxygen saturation is 85% in air. What is the most likely diagnosis?',
  opts:["Heart failure","Fallot's tetralogy",'Pneumonia','Coarctation of the aorta','Supraventricular tachycardia'],
  expl:'Coarctation obstructs blood flow to the lower body, causing weak femoral pulses, tachypnea, and differential cyanosis.',
  note:'native p1416.jpeg fully legible, no crop needed. Twin p1415.jpeg checked, identical stem/opts. Numbers read directly off image: age 48 hours, weight 3.2 kg, RR 68/min, O2 sat 85%. Highlighted option: "D. Coarctation of the aorta" (bold, yellow highlight, underlined) -> key index 3. Box printed on same page (right of options). No figure.' },

{ n:74, pr:74, p:1418, key:2,
  stem:'A 6-month-old male infant is noted to have a cardiac murmur. Four-limb blood pressures are normal, but oxygen saturation is 78% and does not improve with oxygen therapy. A chest X-ray shows a boat-shaped heart. What is the possible clinical presentation for this case?',
  opts:['Recurrent chest infections','Heart failure','Cyanotic spell','Choking during feeding'],
  expl:'The boat-shaped heart on X-ray and hypoxia indicate Tetralogy of Fallot, which presents with cyanotic spells.',
  note:'native p1418.jpeg fully legible, no crop needed. Twin p1417.jpeg checked, identical stem/opts. FOUR options (A-D). Number read directly off image: O2 saturation 78%. Highlighted option: "C. Cyanotic spell" (bold, yellow highlight, underlined) -> key index 2. Box printed on same page. No figure.' },

{ n:75, pr:75, p:1420, key:0,
  stem:'A 5-year-old boy presents with a low-grade fever for the last two weeks. On examination, large lymph nodes are palpable on both sides of the neck, under the axillae, and in the inguinal regions. There is hepatosplenomegaly. He is pale and has some purpuric spots over the back. What is the most likely diagnosis?',
  opts:['Acute lymphocytic leukemia','Miliary tuberculosis','Idiopathic thrombocytopenic purpura','Henoch-Schönlein purpura','Aplastic anemia'],
  expl:'Leukemia causes bone marrow infiltration leading to pallor, bruising, lymphadenopathy, and hepatosplenomegaly.',
  note:'native p1420.jpeg fully legible, no crop needed. Twin p1419.jpeg checked, identical stem/opts. Highlighted option: "A. Acute lymphocytic leukemia" (bold, yellow highlight, underlined) -> key index 0. Box printed on same page. No figure.' },

{ n:76, pr:76, p:1422, key:0,
  stem:'Which is true when investigating a child with "leukemia"?',
  opts:['Bone marrow examination is essential','Circulating blast cells are present in all cases','CBC always shows leukocytosis','Platelet count is usually normal in CBC','CT scan of the abdomen is essential for classification of the disease'],
  expl:'Definitive diagnosis of leukemia requires bone marrow aspiration to identify blast cells and classify the subtype.',
  note:'native p1422.jpeg fully legible, no crop needed. Twin p1421.jpeg checked, identical stem/opts. Highlighted option: "A. Bone marrow examination is essential" (bold, yellow highlight, underlined) -> key index 0. Box printed on same page. No figure. Stem quotes "leukemia" in double quotes as printed.' },

{ n:77, pr:77, p:1424, key:0,
  stem:'A 7-year-old boy presents to the emergency room as his mother is concerned that he has become increasingly jaundiced during the last 3 days. On examination, he has deep jaundice, is pale and breathless. CBC shows: Hb 5.5 g/dL, reticulocytes 6%, WBC 15,000/ml, platelet count 200,000/ml. Blood film shows red cell fragments, bite cells, and Heinz bodies on staining. What is the most likely diagnosis?',
  opts:['Glucose-6-phosphate dehydrogenase deficiency (G6PD)','Iron deficiency anemia','Sickle cell disease','Beta-thalassemia','Hereditary spherocytosis'],
  expl:'G6PD deficiency leads to hemolysis during oxidative stress, producing bite cells, Heinz bodies, and acute anemia.',
  note:'native p1424.jpeg fully legible, no crop needed. Twin p1423.jpeg checked, identical stem/opts. Numbers read directly off image: 3 days, Hb 5.5 g/dL, reticulocytes 6%, WBC 15,000/ml, platelets 200,000/ml. Highlighted option: "A. Glucose-6-phosphate dehydrogenase deficiency (G6PD)" (bold, yellow highlight, underlined) -> key index 0. Box printed on same page (right of options). No figure.' },

{ n:78, pr:78, p:1426, key:3,
  stem:'Which one of the following organisms is most likely to cause a life-threatening infection in a child who underwent emergency splenectomy?',
  opts:['Actinomyces','Pseudomonas aeruginosa','Staphylococcus aureus','Streptococcus pneumoniae'],
  expl:'Asplenic children are highly susceptible to encapsulated bacteria, particularly S. pneumoniae, which can cause overwhelming sepsis.',
  note:'native p1426.jpeg fully legible, no crop needed. Twin p1425.jpeg checked, identical stem/opts. FOUR options (A-D). Highlighted option: "D. Streptococcus pneumoniae" (bold, yellow highlight, underlined) -> key index 3. Box printed on same page. No figure.' },

{ n:79, pr:79, p:1428, key:0,
  stem:'What is the most common cause of cerebral palsy?',
  opts:['Prenatal cause','Perinatal brain injury','Neonatal infections','Accidents','Meningitis/encephalitis'],
  expl:'The majority of cerebral palsy cases are due to prenatal brain injury, not perinatal events or infections.',
  note:'native p1428.jpeg fully legible, no crop needed. Twin p1427.jpeg checked, identical stem/opts. Highlighted option: "A. Prenatal cause" (bold, yellow highlight, underlined) -> key index 0. Box printed on same page. No figure.' },

{ n:80, pr:80, p:1430, key:2,
  stem:"A 3-year-old boy was born at 26 weeks' gestation weighing 700 g. He is 10 months old and has just started to walk. He can build a tower of three blocks and is able to feed himself. On examination, he walks on tiptoes, and his legs scissor when lifted. What is the most appropriate type of cerebral palsy?",
  opts:['Dyskinetic','Ataxic','Spastic diplegia','Spastic hemiplegia'],
  expl:'Spastic diplegia primarily affects the lower limbs, causing scissoring gait and tiptoe walking, common in premature infants.',
  note:'native p1430.jpeg fully legible, no crop needed. Twin p1429.jpeg checked, identical stem/opts. FOUR options (A-D). Numbers read directly off image: 26 weeks gestation, 700 g birth weight, "10 months old" as printed (stated alongside "3-year-old" in the same stem -- transcribed exactly as printed, not reconciled by staging). Highlighted option: "C. Spastic diplegia" (bold, yellow highlight, underlined) -> key index 2. Box printed on same page. No figure. This is the last question of the quarter and of section 12 -- confirmed by boundary check below.' }

];
