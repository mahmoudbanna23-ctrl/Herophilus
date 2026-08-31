/* House — "Dr. HOUSE in pediatric medicine & surgery MCQs" (Semester 8\Pedo\Questions\pediatric .pdf)
 * Part I, chapter 4: HAEMATOLOGICAL DISORDERS
 *
 * VERBATIM STAGING RECORD. Transcribed 2026-08-31. Every character below was read off the
 * rendered PNGs; the OCR text index was used only to find a place on a page.
 *
 * PAGE MAP ACTUALLY USED — the PDF is a 2-up landscape scan of a book spread:
 *   book page B is on PDF sheet floor(B/2)+1; left half = 2P-2, right half = 2P-1.
 *   The brief's map was correct on every one of the eleven half-pages.
 *   PDF sheet 17 = book pp. 32|33   chapter banner "Haematological disorders", numbering restarts at 1
 *                                   book p.32 Q1-Q2 · book p.33 Q3-Q4
 *   PDF sheet 18 = book pp. 34|35   book p.34 Q5-Q6 (both with figures) · book p.35 Q7-Q8, Q9 begins
 *   PDF sheet 19 = book pp. 36|37   book p.36 Q9 completes, Q10-Q11 · book p.37 Q12-Q13, Q14 (answer overleaf)
 *   PDF sheet 20 = book pp. 38|39   book p.38 Q14 answer line, Q15-Q17 · book p.39 Q18-Q20
 *   PDF sheet 21 = book pp. 40|41   book p.40 Q21-Q23 · book p.41 Q24-Q25, chapter ends, lower half blank
 *   PDF sheet 22 = book pp. 42|43   OVERRUN CHECK — book p.42 opens the banner "Genetics" with the
 *                                   numbering restarted at 1. CHAPTER 4 DOES NOT OVERRUN. Looked at.
 *
 * 25 QUESTIONS PRINTED, numbered 1-25. Counted by reading every one of the ten chapter pages.
 * The sequence is complete: no number repeated, none skipped. This matches the prior of 25.
 *
 * ZERO EXPLANATION BOXES in this chapter — the same as chapters 1-3. Measured by looking at every
 * answer on all ten chapter pages: each is a bare "Answer: X." line sitting inside the question's
 * own rounded box, with nothing printed after it. There are no separate answer pages, and no
 * question box contains prose below its Answer line.
 *
 * TWO FIGURES, both on book p.34, both inside the question box in its right-hand third:
 *   Q5 — blood film photomicrograph. Densely packed red cells, pale with wide central pallor
 *        (hypochromic, microcytic), a few small dark-staining cells. NOT transcribable as a table:
 *        the question turns on the size and pallor of the cells, which no table reproduces.
 *   Q6 — colour clinical photograph. An infant on a white sheet beside a yellow shape-sorter toy,
 *        left hand towards the camera, dorsum and fingers swollen — dactylitis. Not transcribable.
 * No other figure appears anywhere in the chapter. Counted by looking at all ten pages; the
 * pedigree diagrams faintly visible on the blank lower half of book p.41 are show-through from
 * the reverse of the leaf (chapter 5, Genetics) and are NOT printed on p.41.
 *
 * BOILERPLATE. "Select one answer only." is printed on Q1-Q6 and on NO other question in the
 * chapter; it stops abruptly at Q7. Recorded here in `boiler`, stripped from the drafted stems.
 *
 * PRINTING DEFECTS — all recorded verbatim, never corrected. Details in each entry's `note`:
 *   Q5  "262 × 109/L" with a flat 109 (superscript lost), two lines below a correct "11.2 × 10⁹/L"
 *   Q13, Q14, Q15  option D prints "Recombinant factor IIIV" — VIII transposed, three times
 *   Q15 stem says Angie is "6 weeks old" then presents "At 2 months of age"
 *   Q16 option C prints "Haematopoesis"
 *   Q22 option A prints "Henoch-Schonlein" without the umlaut
 *   Q1  possibly defective key — microcytic data keyed to hereditary spherocytosis (see its note)
 *   Multiplication signs are inconsistent throughout: "×", capital "X", lower-case "x", and
 *   "X10⁹/L" with no space, sometimes within a single sentence (Q18, Q21).
 *
 * Fields: n = printed number, p = book page(s), boiler = "Select one answer only." present,
 *         stem, opts (A..E in printed order), key (printed letter), fig, note, expl.
 */

var PEDHD_HAEM_STAGED = [

{ n:1, p:'32', boiler:true,
  stem:'Tia is a 4-year-old Caucasian girl. She is referred to the paediatric ward by her general practitioner as her mother noted that she had a yellow tinge to her eyes since developing an upper respiratory tract infection. She is well in herself and has no history of weight loss. There is no family history of any blood disorders. On examination she was pale and her spleen was enlarged 3 cm below the costal margin. You perform a full blood count, which reveals:\n• Hb (haemoglobin): 60 g/L\n• WBC (white blood cell count): 8 × 10⁹/L\n• platelet count: 255 × 10⁹/L\n• blood film: small red cells\n• MCV (mean cell volume): 60 fL (normal: 75–87 fL)\nWhat is the most likely diagnosis?',
  opts:['Acute lymphoblastic leukaemia','Glucose-6-phosphate dehydrogenase (G6PD) deficiency','Hereditary spherocytosis','Sickle cell disease','Thalassaemia'],
  key:'C',
  note:'POSSIBLY DEFECTIVE KEY, recorded not disputed. The printed data are microcytic (MCV 60 fL, blood film "small red cells"), which points to E. Thalassaemia; hereditary spherocytosis is normocytic-to-slightly-microcytic with SPHEROCYTES on film, and the film here does not say spherocytes. The book prints "Answer: C." and that is what is recorded. Read at 200 dpi; the letter is unambiguous.' },

{ n:2, p:'32', boiler:true,
  stem:'Ahmed, whose parents come from Egypt, is a 10-year-old boy who presents to his general practitioner. This evening he is more lethargic than usual and his urine has become dark in colour. There is no history of excessive exercise or beetroot consumption; in fact, they had a festive meal of chicken, fish, broad beans and rice for lunch. His examination is normal and he is afebrile. He has no medical history of note. He has not had a recent upper respiratory tract infection. What is the most likely underlying cause of his new symptoms?',
  opts:['Acute lymphatic leukaemia','β-Thalassaemia trait','G6PD (Glucose-6-phosphate dehydrogenase) deficiency','Pyelonephritis','Sickle cell disease'],
  key:'C' },

{ n:3, p:'33', boiler:true,
  stem:'Tom is a 5-year-old boy who presents to hospital with a recent history of bruising easily. Two weeks ago he had an upper respiratory tract infection which resolved spontaneously. On examination today he is afebrile but has many, widespread bruises with some scattered petechiae. Investigations reveal:\n• Hb (haemoglobin): 116 g/L\n• WBC (white blood cell count): 10.2 × 10⁹/L\n• platelet count: 32 × 10⁹/L\n• prothrombin time: 15 seconds (control: 12–15 s)\n• activated partial thromboplastin time: 30 seconds (control: 25–35 s)\n• fibrinogen: 2.5 g/L (normal: 2–4 g/L)\nWhat is the most likely diagnosis?',
  opts:['Acute lymphoblastic leukaemia','Haemophilia A','Immune thrombocytopenic purpura','Non-accidental injury','Vitamin D deficiency'],
  key:'C' },

{ n:4, p:'33', boiler:true,
  stem:'Amir is a 2-year-old Bangladeshi boy who has eczema. His general practitioner is undertaking a routine review of his care and notices that Amir is pale. The remainder of his examination is normal. His mother reports that he has been eating bits of carpet from his room recently. Investigations reveal:\n• Hb (haemoglobin): 66 g/L\n• WBC (white blood cell count): 10.2 × 10⁹/L\n• platelet count: 350 × 10⁹/L\n• MCV (mean cell volume): 60 fL (normal: 75–87 fL)\nWhat is the most appropriate treatment?',
  opts:['Dietary advice','Folic acid','Iron supplements','Multivitamin tablets','Vitamin B12 injections'],
  key:'C' },

{ n:5, p:'34', boiler:true,
  stem:'Joseph, a 2-year-old black Caribbean boy from London, is admitted to hospital for an elective repair of an inguinal hernia. He has no other medical problems. His pre-operative assessment reveals the following results and his blood film is shown in the opposite figure:\n• Hb (haemoglobin): 86 g/L\n• MCV (mean cell volume): 68 fL (normal: 75–87 fL)\n• MCHC (mean corpuscular haemoglobin concentration): 22 g/dl (normal: 32–35 g/dl)\n• WBC (white blood cell count): 11.2 × 10⁹/L\n• platelets: 262 × 109/L\n• HB electrophoresis: haemoglobin A (HbA) 98%; haemoglobin A2 (HbA2) 2%\nWhat is the most likely diagnosis?',
  opts:['β-Thalassaemia trait','Glucose-6-phosphate dehydrogenase deficiency','Iron-deficiency anaemia','Normal variation for age and ethnicity','Sickle cell trait'],
  key:'C',
  fig:'blood film photomicrograph, top right of the question box on book p.34',
  note:'PRINTING DEFECT, transcribed verbatim: the platelet bullet prints "262 × 109/L" with a FLAT 109 — the superscript 9 is lost — while the WBC bullet two lines above prints "11.2 × 10⁹/L" correctly. Verified at 400 dpi on a re-rendered crop. Also verbatim: "HB electrophoresis" with a capital B, and "g/dl" lower case in the MCHC bullet where the rest of the chapter uses "g/L".' },

{ n:6, p:'34', boiler:true,
  stem:'Peter, aged 9 months, presents to the Emergency Department. His family moved to the UK when Peter was 6 weeks old. He has a 6 hour history of pain in his fingers. He has had an upper respiratory tract infection for the past 24 hours. He has no other medical history and is not on any medication. The appearance of his left hand is shown in the opposite figure. What is the most likely diagnosis?',
  opts:['Acute lymphoblastic leukaemia','β-Thalassaemia major','Glucose-6-phosphate dehydrogenase deficiency','Haemophilia A','Sickle cell disease'],
  key:'E',
  fig:'colour clinical photograph, right side of the question box on book p.34',
  note:'Figure: an infant lying on a white sheet beside a yellow shape-sorter toy; the left hand and fingers are held towards the camera and the dorsum of the hand and the fingers are swollen — dactylitis. Not transcribable as a table.' },

{ n:7, p:'35', boiler:false,
  stem:'Shlomo is a 9-day-old Jewish boy who was born in the UK. He had a religious circumcision yesterday, but the wound will not stop bleeding. On examination he is pale and has tachycardia. There is oozing of blood around the circumcision wound. A cannula is inserted and a blood cross-match sent. There is now oozing around the cannula site. Investigation reveals:\n• Hb (haemoglobin): 84 g/L\n• WBC (white blood cell count): 12 × 10⁹/L\n• platelet count: 322 × 10⁹/L\n• prothrombin time: 16 seconds (control: 12–15 s)\n• activated partial thromboplastin time: >120 seconds (control: 25–35 s)\nWhich of the following is the most likely diagnosis?',
  opts:['β-Thalassaemia major','Liver disease','Haemophilia A','von Willebrand disease','Immune thrombocytopenic purpura'],
  key:'C',
  note:'No "Select one answer only." line printed on this question — the boilerplate stops here, having been printed on Q1–Q6.' },

{ n:8, p:'35', boiler:false,
  stem:'Charlie, aged 5 years, is troubled by recurrent nose bleeds, the last of which took 1.5 hours to stop. He has no other medical problems. His examination is normal except for pale conjunctivae. Investigation reveals:\n• Hb (haemoglobin): 86 g/L\n• WBC (white blood cells): 10.2 × 10⁹/L\n• platelet count: 350 × 10⁹/L\n• prothrombin time: 16 seconds (control:12–15 s)\n• activated partial thromboplastin time: 46 seconds (control: 25–35 s)\n• fibrinogen: 2.5 g/L (normal: 2–4 g/L)\n• factor VIII: just below the normal range\nWhich of the following is the most likely diagnosis?',
  opts:['Vitamin K deficiency','Liver disease','Immune thrombocytopenic purpura','von Willebrand disease','Haemophilia A'],
  key:'D',
  note:'Two verbatim quirks kept: "WBC (white blood cells)" — the expansion differs from every other question in the chapter, which prints "white blood cell count"; and "(control:12–15 s)" on the prothrombin time bullet, with no space after the colon, where the next bullet prints "(control: 25–35 s)".' },

{ n:9, p:'35–36', boiler:false,
  stem:'Melissa is a 3-year-old girl. She presents to her general practitioner with a 3–4 week history of lethargy and weight loss. On examination she is pale and has widespread bruising. She has no other medical history and is not currently on any medications. The general practitioner orders a full blood count which reveals:\n• Hb (haemoglobin): 66 g/L\n• WBC (white blood cell): 43.2 × 10⁹/L\n• platelet count: 50 × 10⁹/L\nWhich of the following is the most likely diagnosis?',
  opts:['Acute lymphoblastic leukaemia','Acute myeloid leukaemia','α-Thalassaemia major','β-Thalassaemia major','Iron deficiency anaemia'],
  key:'A',
  note:'The question box straddles the spread: the stem down to the first bullet ("Hb (haemoglobin): 66 g/L") is at the foot of book p.35; the remaining two bullets, the lead-in, the options and "Answer: A." are at the top of book p.36. Verbatim quirk: "WBC (white blood cell)" — a third expansion variant in this chapter.' },

{ n:10, p:'36', boiler:false,
  stem:'Xevera is a 7-year-old Greek boy who is seen by a paediatrician for constipation and was noted to look pale. Haematological testing reveals that he is anaemic with Hb of 100 g/L (both MCV and MCHC are low). He is given a course of iron therapy but his anaemia does not improve. Further testing reveals 5% haemoglobin A2 (HbA2) and 3% fetal haemoglobin (HbF). Which of the following is the most likely diagnosis?',
  opts:['α-Thalassaemia trait','β-Thalassaemia trait','α-Thalassaemia major','β-Thalassaemia major','Iron deficiency anaemia'],
  key:'B' },

{ n:11, p:'36', boiler:false,
  stem:'Ahmed is a 4-week-old infant of Somali refugees who have just fled to the UK. He was circumcised yesterday, but the wound will not stop bleeding. On examination there is oozing of blood around the circumcision wound. Investigation reveals:\n• Hb (haemoglobin): 122 g/L\n• WBC (white blood cell count): 11 × 10⁹/L\n• platelet count: 312 × 10⁹/L\n• prothrombin time: 36 seconds (control: 12–15 s)\n• activated partial thromboplastin time: 25 seconds (control: 25–35 s)\nWhich of the following is the best treatment option for this patient?',
  opts:['Vitamin K','Vitamin D','Blood transfusion','Iron supplementation','Chemotherapy'],
  key:'A' },

{ n:12, p:'37', boiler:false,
  stem:'Lola is an 8-month-old girl from Cyprus. She is referred to the paediatric department because she is clinically anaemic and has faltering growth. On examination you find that she has a large liver and spleen. Electrophoresis reveals an absence of haemoglobin A (HbA). Which of the following is the best treatment option for this patient?',
  opts:['Vitamin K','Vitamin D','Blood transfusion','Iron supplementation','Chemotherapy'],
  key:'C',
  note:'Shares its option menu verbatim with Q11 — a PAIRING, not a fold: different stems, different keys (Q11 = A, Q12 = C).' },

{ n:13, p:'37', boiler:false,
  stem:'George is a 3-month-old boy. He presents to the paediatric ward with a swollen leg. He had an immunization yesterday and there is now a large swelling at the injection site. Haematological investigation reveals:\n• Hb (haemoglobin): 102 g/L\n• WBC (white blood cell count): 9.0 × 10⁹/L\n• platelet count: 312 × 10⁹/L\n• prothrombin time: 13 seconds (control: 12–15 s)\n• activated partial thromboplastin time: 100 seconds (control: 25–35 s)\nThere is currently no bleeding and he is haemodynamically stable. His two older brothers both suffer from a bleeding disorder but both his parents and his older sister do not. Which of the following is the best treatment option for this patient?',
  opts:['Vitamin K','Blood transfusion','Folic acid supplementation','Recombinant factor IIIV','No action required at present'],
  key:'D',
  note:'PRINTING DEFECT, transcribed verbatim: option D prints "Recombinant factor IIIV" — the Roman numeral VIII transposed. Verified at 400 dpi on a re-rendered crop. The same misprint recurs as option D of Q14, so it is the book\'s own, not a scan artefact.' },

{ n:14, p:'37 (answer on 38)', boiler:false,
  stem:'Lizzie is a 9-year-old girl who presents to the paediatric clinic. She is known to have hereditary spherocytosis. Her mother is concerned that she is very pale. Three weeks ago Lizzie had an upper respiratory tract infection. Her mother reports that she had a fever and was very flushed with bright red cheeks. She is otherwise well and has fully recovered from her infection. Her mother informs you that she has a very good diet. A full blood count reveals a Hb 88 g/L. A blood film reveals a normochromic normocytic anaemia with no blast cells. Which of the following is the best treatment option for this patient?',
  opts:['Vitamin K','Blood transfusion','Folic acid supplementation','Recombinant factor IIIV','No action required at present'],
  key:'E',
  note:'The question box straddles the spread: stem and options at the foot of book p.37, the "Answer: E." line alone at the top of book p.38. Option D again prints "Recombinant factor IIIV" (see Q13). Shares its option menu verbatim with Q13 and Q15 — three PAIRED questions with three different keys (D, E, E), not folds.' },

{ n:15, p:'38', boiler:false,
  stem:'Angie is 6 weeks old. She was jaundiced at 24 hours of age, when her haemoglobin (Hb) was checked and was 150 g/L. At 2 months of age she presents with an upper respiratory tract infection. The full blood count is repeated and she has Hb 102 g/L. Which of the following is the best treatment option for this patient?',
  opts:['Vitamin K','Blood transfusion','Folic acid supplementation','Recombinant factor IIIV','No action required at present'],
  key:'E',
  note:'Third printing of the "Recombinant factor IIIV" misprint in option D. Internal contradiction in the stem, recorded not corrected: Angie is introduced as "6 weeks old" and then presents "At 2 months of age".' },

{ n:16, p:'38', boiler:false,
  stem:'Haemoglobin production differs through fetal life and extra-uterine life and the molecule itself changes with age. Which of the following statements regarding haemoglobin is correct?',
  opts:['At birth HbA is predominant','Hb concentration falls after birth until around 7 weeks','Haematopoesis mainly occurs in the liver and spleen at term','The lifespan of a normal red blood cell is 10 days','Fetal haemoglobin has lower affinity for oxygen'],
  key:'B',
  note:'Verbatim spelling kept in option C: "Haematopoesis" (the book drops the second i of haematopoiesis).' },

{ n:17, p:'38', boiler:false,
  stem:'An 11-month-old caucasian boy attends his GP as his mother has been struggling to wean him. He will drink cow\'s milk at regular intervals and eats some baby rice but refuses most other solids. On examination he appears very pale but otherwise well. There is no hepatosplenomegaly. A full blood count (FBC) is arranged in view of the pallor which shows: Hb = 7.8 g/dL, mean corpuscular volume (MCV) = 69 fL. What is the most likely cause of his anaemia?',
  opts:['Sickle cell anaemia','Thalassaemia','Iron deficiency anaemia','Vitamin B12 deficiency','Folate deficiency'],
  key:'C',
  note:'Verbatim: lower-case "caucasian"; and this question alone reports haemoglobin as "Hb = 7.8 g/dL" where the rest of the chapter uses g/L.' },

{ n:18, p:'39', boiler:false,
  stem:'A 3-year-old Afro-Caribbean girl presents with severe pain in her hands and abdomen. On examination there is mucosal pallor, yellow sclera, generalized abdominal tenderness with hepatosplenomegaly. Bloods were taken including a FBC: Hb=6.1 g/dL, MCV=78 fL, white cell count (WCC)=6.0 X 10⁹/L, platelets=300 X10⁹/L. What is the most likely cause of her anaemia?',
  opts:['Thalassaemia','Iron deficiency anaemia','Sickle cell disease','Anaemia of chronic disease','Glucose-6-phosphate dehydrogenase deficiency'],
  key:'C',
  note:'Verbatim: the multiplication sign is a capital letter X here ("6.0 X 10⁹/L") and the spacing is inconsistent within the same sentence ("300 X10⁹/L"); "generalized" is spelled with a z where the chapter is otherwise British.' },

{ n:19, p:'39', boiler:false,
  stem:'A 9-year-old girl with known sickle cell disease presents with a 4-day history of fever, coryza and myalgia. Over the past 24 hours she has developed a lacy rash particularly over her hands and feet and has become more lethargic. Her mother reports her looking more pale. A FBC reveals: Hb 5.9 g/dL, WCC 1.0 X 10⁹/L, platelets 50 X10⁹/L. What is the most likely cause for her blood results?',
  opts:['Splenic sequestration crisis','Painful crisis','Chest crisis','Parvovirus B19 infection','Pneumococcal sepsis'],
  key:'D' },

{ n:20, p:'39', boiler:false,
  stem:'An 8-month-old girl with Greek-Cypriot parents is brought to her GP as her parents are worried she is not growing well and is very pale. On examination there is pallor and mildly icteric sclera. She has a distended abdomen with hepatosplenomegaly and there is mild frontal bossing. She was born on the 25th centile and her weight has fallen to below the 2nd centile. Blood tests show a microcytic hypochromic anaemia. What is the likely diagnosis?',
  opts:['Sickle cell disease','Hereditary spherocytosis','Thalassaemia major','Glucose-6-phosphate dehydrogenase deficiency (G6PD)','Iron deficiency anaemia'],
  key:'C' },

{ n:21, p:'40', boiler:false,
  stem:'A 14-month-old boy is brought to accident and emergency by his mother with pain and swelling in his right knee. He is unable to weight bear and on examination several large bruises are noted over the lower limbs and arms. He has blood tests, including a FBC and clotting screen, which show: Hb 10.5 g/dL, WCC 11 X 10⁹/L, platelet count 340 X10⁹/L, prothrombin time 13.3 sec, APTT >120 sec. Which is the most likely diagnosis?',
  opts:['Vitamin K deficiency','Haemophilia A','Von Willebrand disease','Immune (idiopathic) thrombocytopenic purpura','Non-accidental injury'],
  key:'B',
  note:'Verbatim: option C prints "Von Willebrand disease" with a capital V, where Q7 and Q8 print "von Willebrand disease".' },

{ n:22, p:'40', boiler:false,
  stem:'A 5-year-old boy attends accident and emergency with a nosebleed that his mother has been unable to stop for the past 45 minutes. He saw his GP for a viral upper respiratory tract infection 1 week ago but is otherwise well. His nosebleed is stopped with pressure but on examination he is noted to have multiple petechiae on his chest, legs and abdomen. Blood tests reveal: Hb 10.4 g/dL, WCC 13 x 10⁹/L, platelet count 15 x 10⁹/L, clotting screen normal. The most likely diagnosis is which of the following?',
  opts:['Henoch–Schonlein purpura','Haemophilia B (Christmas disease)','Immune (idiopathic) thrombocytopenic purpura (ITP)','Meningococcal septicaemia','Haemolytic uraemic syndrome (HUS)'],
  key:'C',
  note:'Verbatim: "Henoch–Schonlein" is printed without the umlaut on the o. The multiplication sign here is a lower-case x, where Q21 immediately above uses a capital X.' },

{ n:23, p:'40', boiler:false,
  stem:'A 7-year-old Ghanaian boy presented to accident and emergency, 3 days ago, on his return from holiday in West Africa, with high fever and rigors. A diagnosis of malaria was made and he was started on primaquine. His mother is concerned that he has begun to look increasingly jaundiced. On examination there is deep jaundice, and he is looking pale and breathless. A FBC and film are taken which show: Hb 5.5 g/dL, WCC 15 x 10⁹/L, platelet count 200 x 10⁹/L, blood film: red cell fragments and bite cells with Heinz bodies on staining. The most likely underlying diagnosis is which of the following?',
  opts:['Glucose-6-phosphate dehydrogenase deficiency (G6PD)','Pyruvate kinase deficiency','Sickle cell disease','Beta-thalassaemia','Hereditary spherocytosis'],
  key:'A' },

{ n:24, p:'41', boiler:false,
  stem:'A 4-year-old girl is undergoing chemotherapy for acute lymphoblastic leukaemia. She presents 8 days after her last treatment with a fever of 39C. She has a portacath in situ. Her FBC shows a WCC 1.0 x 10⁹/L, neutrophils 0.4 x 10⁹/L, platelets 100 x 10⁹/L, Hb 10 g/dL. What is the most important step in her management?',
  opts:['Packed red blood cell transfusion','Platelet transfusion','Administration of G-CSF','Antipyretics','Intravenous antibiotics'],
  key:'E',
  note:'Verbatim: "a fever of 39C" — no degree symbol and no unit letter separation.' },

{ n:25, p:'41', boiler:false,
  stem:'A 5-month-old baby with no previous attendances at hospital is brought to the hospital by his distraught parents with a swollen left upper arm. Both parents tell you separately that he was playing on the floor and fell to one side. They noticed he was crying so phoned an ambulance to come to hospital. A radiograph of the arm shows a spiral fracture of his left humerus. Which of the following features suggest non-accidental injury?',
  opts:['Immediate presentation at hospital','History of incident does not fit with injury','Parents appearing distraught','Both accounts of the incident matching','No previous attendances at hospital'],
  key:'B',
  note:'LAST question of the chapter. The lower half of book p.41 is blank; the pedigree diagrams faintly visible there are show-through from the reverse of the leaf (the chapter 5 "Genetics" pages), not a figure printed on p.41.' },

];
