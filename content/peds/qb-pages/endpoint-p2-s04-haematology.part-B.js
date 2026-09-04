/* Peds ENDPOINT PART 2, section 4 "Hematological Disorders" (PDF pp.245-451), PART B of 4.
   Staged, not authored -- verbatim transcription only. Chapters in scope: haematology
   (Anaemia and marrow failure) and haem-bleeding (Bleeding and clotting disorders).
   Range assigned: PDF pp.311-357. Answered pages per the index: 311, 314, 316, 318, 320,
   322, 323, 325, 327, 329, 331, 333, 335, 337, 339, 341, 343, 345, 347, 349, 351, 353, 355, 357.
   n starts at 1 in this part (per instruction -- merge-parts-ep2.js validates n as position,
   does not renumber; it does not offset across parts).
   OCR (content\peds\qb-pages\ocr\ep2\) was NOT opened during this pass -- native/hires renders only.
   Geometry: this is a slide deck, one PDF page = one slide, offset zero, no 2-up, no ghost.

   PAGE-KIND WALK (measured page by page, confirming the parent's map):
   309 = notes-only slide (iron deficiency teaching box) -- NOT part of Q22, a preceding
         unrelated teaching slide, no question content.
   310 = Q22 unanswered (stem+options plain).
   311 = Q22 ANSWERED (key C highlighted, hereditary spherocytosis). No box printed on this
         page itself.
   312 = the explanation box for Q22, OVERFLOWED onto its own page (confirmed by reading both:
         312's box explicitly reasons through Q22's anemia/jaundice/spherocytosis vignette).
         So n=1 carries box:312 and expl is 312's text; 312 gets no entry of its own.
   313 = Q23 unanswered.
   314 = Q23 answered.
   315-320 = clean alternation (unanswered/answered pairs), to be confirmed page by page below.
   321 = to be inspected (parent flagged as lone notes page).
   322, 323 = BOTH flagged answered with no unanswered twin between -- to be inspected together;
              parent's box-overflow hypothesis (§3) to be tested against the alternative that
              323 is a genuine second question or reprint.
   324 = unanswered (per parent map).
   325 = answered.
   326-357 = clean alternation per parent map, to be confirmed as reached.

   QUESTION-NUMBER WALK (pr = printed number, n = true sequential index):
   n1 p.311 pr22 -- n2 p.314 pr23 -- n3 p.316 pr24 -- n4 p.318 pr25 -- n5 p.320 pr26 (box:321)
   -- n6 p.323 pr27 -- n7 p.325 pr28 -- n8 p.327 pr29 -- n9 p.329 pr30 -- n10 p.331 pr31
   -- n11 p.333 pr32 -- n12 p.335 pr33 -- n13 p.337 pr34 -- n14 p.339 pr35 (box TRUNCATED
   in its own printed border, not an overflow -- see n14 note) -- n15 p.341 pr36 -- n16 p.343
   pr37 -- n17 p.345 pr38. Printed numbers run 1-for-1 with n across this whole range (n
   offset is +21 vs pr throughout, ie pr = n+21), no printed-number repeats or skips found.

   pp.322/323 RESOLVED (this was the flagged structural question): p.322 carries no yellow
   highlight and no box -- it is an ordinary UNANSWERED printing of Q27, the page-kind index's
   "answered" tag for it was wrong. p.323 is the true answered page (key E). Neither an
   overflow-box split nor a duplicate-with/without-box reprint (the part-D pp.419/420 pattern)
   -- just a normal pair the index misclassified. Only p.323 staged (n:6).

   p.321 RESOLVED: it IS the overflow explanation box for n:5 (Q26, p.320) -- content
   (microcytic/hypochromic anemia, normal electrophoresis, HbA2 not raised) matches Q26's
   vignette exactly. n:5 carries box:321. This differs from p.309, which was an unrelated
   preceding teaching slide and correctly unstaged.

   RESUME POINT for the next agent: last complete entry is n:17, pr:38, p:345. Continue from
   the next answered page, p:347, through the rest of this part's range: 347, 349, 351, 353,
   355, 357. Render one page past 357 to confirm the section boundary before the file is
   declared done.

   Pages 329-351 in this file (n:9 through n:17 so far, and likely further) were RECORDED,
   NOT ACTED ON, as matching House-bank questions one-for-one in page order per the task
   instruction -- flagged in each affected entry's note; the House file was never opened,
   audited or compared, and nothing folds across files here.

   CONTINUATION 2026-09-04: staged the last 6 answered pages of this part's assigned range:
   347 (Q39,keyC), 349 (Q40,keyD), 351 (Q41,keyC), 353 (Q42,keyB), 355 (Q43,keyC),
   357 (Q44,keyA) -- n18-n23, pr39-pr44. Every unanswered twin (346/348/350/352/354/356)
   checked and identical to its answered page; every box fit on the answered page itself,
   no overflow, no misclassified "answered" tag, no duplicate reprint -- clean alternation
   throughout this stretch, confirmed page by page. pr = n+21 holds through n23 (44=23+21).
   PART B's ASSIGNED RANGE (pp.311-357) IS NOW CLOSED at n:23/pr:44/p:357.
   All six FBC-panel exponents (10^9) in this stretch confirmed as genuine superscript
   nines at a 300 dpi crop of p.347 (the first of the six); the identical typeset repeats
   unchanged across 349-357, so later pages were not separately re-escalated.
   Hb is printed in g/dL on all six of these pages (n18-n23) -- same unit already seen
   starting at n:17 (p.345) -- transcribed as printed, not converted, each flagged in its
   own note.
   BOUNDARY PROVEN: p.358 rendered and read -- Q45 UNANSWERED (WCC 1.0x10^9/L, Neutrophils
   0.4x10^9/L, Platelets 100x10^9/L, Hb 10 g/dL; options A-E, no highlight). p.359 rendered
   and read -- Q45 ANSWERED, key E "Intravenous antibiotics" highlighted, boxed explanation
   on febrile neutropenia. This CONFIRMS the task prompt's claim: p.359 is part C's first
   answered page, staged there as pr:45. Neither p.358 nor p.359 is staged in this file.
*/

{ n:22, pr:22, p:311, key:2, box:312,
  stem:'Tia is a 4-year-old Caucasian girl referred to the paediatric ward by her general practitioner because her mother noticed a yellow tinge to her eyes after an upper respiratory tract infection. She is otherwise well and has no history of weight loss. There is no family history of blood disorders. On examination, she is pale, and her spleen is enlarged 3 cm below the costal margin. Full blood count results are: Hb (hemoglobin): 60 g/L WBC (white blood cell count): 8 x 10^9/L Platelet count: 255 x 10^9/L Blood film: small red cells MCV (mean cell volume): 60 fL (normal: 75–87 fL)\nWhat is the most likely diagnosis?',
  opts:['Acute lymphoblastic leukaemia','Glucose-6-phosphate dehydrogenase (G6PD) deficiency','Hereditary spherocytosis','Sickle cell disease','Thalassaemia'],
  expl:'This child presents with anemia, jaundice following a viral illness, splenomegaly, and a microcytic picture on blood film, which can be seen in hereditary spherocytosis, especially during aplastic crises. Though the MCV is low (which is more typical of thalassemia), spherocytes may have a falsely low MCV. Hereditary spherocytosis is also more common in Caucasian children and can worsen during infections, consistent with her history.',
  note:'Key highlighted = option C, "Hereditary spherocytosis" (index 2). Page 311 itself prints no box; the explanation box is on p.312, printed alone (the "notes" page the index flagged) -- confirmed by content, it reasons through this exact vignette. p.309 (also flagged notes) is a separate, unrelated preceding teaching slide on iron deficiency/toddler anemia, not part of this question; it precedes the unanswered twin p.310 and is not staged. Stem/options read cleanly off the answered page; the bullet-separated FBC line and superscripts (10^9) transcribed as printed with caret notation since the source renders "10" with a small raised "9"/"6" glyph -- read directly off the image, not OCR.' }

{ n:23, pr:23, p:314, key:2,
  stem:'Ahmed, a 10-year-old boy of Egyptian descent, presents to his general practitioner. This evening, he is more lethargic than usual, and his urine has turned dark. There is no history of excessive exercise or beetroot consumption; lunch consisted of chicken, fish, broad beans, and rice. His examination is normal except he is febrile. There is no recent upper respiratory tract infection and no significant past medical history. What is the most likely underlying cause of his new symptoms?',
  opts:['Acute lymphoblastic leukaemia','Thalassemia trait','G6PD (Glucose-6-phosphate dehydrogenase) deficiency','Pyelonephritis','Sickle cell disease'],
  expl:'The history of broad bean ingestion, dark urine, and hemolytic features suggest G6PD deficiency, which is common in Middle Eastern populations. G6PD triggers include infections, certain foods, and drugs.',
  note:'Key highlighted = option C, "G6PD (Glucose-6-phosphate dehydrogenase) deficiency" (index 2). Box fits on the answered page itself, no overflow. Stem/options match the unanswered twin p.313 exactly.' }

{ n:24, pr:24, p:316, key:2,
  stem:'Tom is a 5-year-old boy presenting with a recent history of easy bruising. Two weeks ago, he had an upper respiratory tract infection that resolved spontaneously. Today, he is afebrile but has many widespread bruises and scattered petechiae. Investigations reveal: Hb (hemoglobin): 116 g/L WBC (white blood cell count): 10.2 x 10^9/L Platelet count: 32 x 10^9/L Prothrombin time: 15 seconds (control: 12–15 seconds) Activated partial thromboplastin time: 30 seconds (control: 25–35 seconds) Fibrinogen: 2.5 g/L (normal: 2–4 g/L)\nWhat is the most likely diagnosis?',
  opts:['Acute lymphoblastic leukaemia','Hemophilia A','Immune thrombocytopenic purpura','Non-accidental injury','Vitamin D deficiency'],
  expl:'ITP typically presents after viral illness with isolated thrombocytopenia and petechiae or bruising in a well-appearing child. Normal Hb and WBCs, along with recent URTI, support this diagnosis.',
  note:'Key highlighted = option C, "Immune thrombocytopenic purpura" (index 2). haem-bleeding chapter content (platelet/coagulation panel). Box fits on page, no overflow. Stem/options match unanswered twin p.315 exactly. Platelet count 32 x 10^9/L and other lab values read directly off the image (not OCR).' }

{ n:25, pr:25, p:318, key:2,
  stem:'Amir is a 2-year-old Bangladeshi boy with eczema. During a routine review, his general practitioner notices he is pale. The rest of the examination is normal. His mother reports that he has been eating bits of carpet recently. Investigations reveal: Hb (hemoglobin): 66 g/L WBC (white blood cell count): 10.2 x 10^9/L Platelet count: 350 x 10^9/L MCV (mean cell volume): 60 fL (normal: 75–87 fL). What is the most appropriate treatment?',
  opts:['Dietary advice','Folic acid','Iron supplements','Multivitamin tablets','Vitamin B12 injections'],
  expl:'The presence of pica (eating carpet) and microcytic anemia (MCV 60 fL) are classic for iron deficiency anemia. Iron supplementation is the first-line treatment.',
  note:'Key highlighted = option C, "Iron supplements" (index 2). Box fits on page, no overflow. Stem/options match unanswered twin p.317 exactly. Pica presentation echoes the standalone teaching box on p.309 (iron deficiency/toddler anemia) that precedes n=1 -- recorded as an observation only.' }

{ n:26, pr:26, p:320, key:2, box:321,
  stem:'Joseph, a 2-year-old Black Caribbean boy from London, is admitted to the hospital for elective inguinal hernia repair. He has no other medical problems. His pre-operative assessment reveals the following results: Hb (hemoglobin): 86 g/L MCV (mean cell volume): 68 fL (normal: 75–87 fL) MCHC (mean corpuscular hemoglobin concentration): 22 g/dL (normal: 32–35 g/dL) WBC (white blood cell count): 11.2 x 10^9/L Platelet count: 262 x 10^9/L Hemoglobin electrophoresis: HbA 98%, HbA2 2%\nWhat is the most likely diagnosis?',
  opts:['β-Thalassaemia trait','Glucose-6-phosphate dehydrogenase deficiency','Iron-deficiency anemia','Normal variation for age and ethnicity'],
  fig:'A stained peripheral blood film/smear image printed to the right of the answer options, low-to-medium power, showing numerous red cells on a pale background; most cells appear small with pale (hypochromic) centres, a few cells stain darker/more compact; no labels, arrows, or scale bar on the image itself.',
  figAlt:'peripheral blood film, low power',
  expl:'This child has microcytic, hypochromic anemia with normal hemoglobin electrophoresis, making thalassemia unlikely. Iron-deficiency anemia is the most common cause of these findings in young children and is usually due to dietary insufficiency. The absence of HbA2 or HbF elevation supports iron deficiency over β-thalassemia trait.',
  note:'Key highlighted = option C, "Iron-deficiency anemia" (index 2). Page 320 itself prints no box; the explanation box overflowed onto p.321 (the lone "notes" page flagged in the task) -- confirmed by content, it reasons through this exact vignette (microcytic/hypochromic, normal electrophoresis, HbA2 not elevated) and matches Q26, not a separate teaching slide. So p.321 IS the overflow box for n:5, unlike p.309 which was unrelated. Stem/options/values (Hb 86, MCV 68, MCHC 22, WBC 11.2 x 10^9/L, platelets 262 x 10^9/L, HbA 98%/HbA2 2%) read off the answered page and cross-checked against the unanswered twin p.319, identical. Only 4 options printed on this page (A-D), unlike the 5-option pages before it -- read directly off image, confirmed on both p.319 and p.320.' }

{ n:27, pr:27, p:323, key:4,
  stem:'Peter, aged 9 months, presents to the Emergency Department. His family moved to the UK when he was 6 weeks old. He has had pain in his fingers for the past 6 hours and an upper respiratory tract infection for the last 24 hours. He has no medical history and is not on any medications. The appearance of his left hand is shown in the figure What is the most likely diagnosis?',
  opts:['Acute lymphoblastic leukaemia','β-Thalassaemia major','Glucose-6-phosphate dehydrogenase deficiency','Haemophilia A','Sickle cell disease'],
  fig:'Clinical colour photograph of an infant, printed to the right of the option list: an adult holds the infant\'s left hand/forearm, the fingers of the hand resting near a colourful shape-sorter toy; the hand/fingers are visibly swollen. Identical image on p.322 (unanswered twin) and p.323 (answered).',
  figAlt:'clinical photograph, infant\'s hand',
  expl:'Painful dactylitis (hand-foot syndrome) in an infant with recent infection is often the first manifestation of sickle cell disease. It is common in children of African origin and presents early in life.',
  note:'RESOLVES the pp.322-323 structural question flagged in the task: read both pages whole. p.322 carries NO yellow highlight and NO box -- it is a plain, ordinary UNANSWERED printing of Q27 (ie the index tagged it "answered" incorrectly; visually it is indistinguishable from every other unanswered page in this section). p.323 is the genuinely answered page: option E, "Sickle cell disease" (index 4), highlighted yellow, with an explanation box. So this is neither an overflow-box split, nor a duplicate-with/without-box reprint (the part-D pp.419/420 pattern) -- it is a normal unanswered/answered pair that the page-kind index misclassified. Only p.323 (the answered page) gets an entry; p.322 is the unanswered twin and is not staged, per the section\'s standing rule. Stem, options and figure identical on both pages.' }

{ n:28, pr:28, p:325, key:2,
  stem:'Shlomo is a 9-day-old Jewish boy born in the UK. He underwent religious circumcision yesterday, but the wound has not stopped bleeding. On examination, he is pale and tachycardic. There is oozing of blood from the circumcision site and, later, from the cannula site after insertion. Investigations show: Hb (hemoglobin): 84 g/L WBC (white blood cell count): 12 x 10^9/L Platelet count: 322 x 10^9/L Prothrombin time: 16 seconds (control: 12–15 seconds) Activated partial thromboplastin time: >120 seconds (control: 25–35 seconds)\nWhat is the most likely diagnosis?',
  opts:['β-Thalassaemia major','Liver disease','Hemophilia A','von Willebrand disease'],
  expl:'A significantly prolonged APTT with normal platelets and PT in a male infant with prolonged bleeding after circumcision is classic for Hemophilia A (factor VIII deficiency), an X-linked condition.',
  note:'Key highlighted = option C, "Hemophilia A" (index 2). Box fits on the answered page, no overflow. Stem/options/values (Hb 84, WBC 12 x 10^9/L, platelets 322 x 10^9/L, PT 16s, APTT >120s) read off the answered page and cross-checked against the unanswered twin p.324, identical. Only 4 options printed (A-D).' }

{ n:29, pr:29, p:327, key:3,
  stem:'Charlie, aged 5 years, has recurrent nosebleeds, the most recent of which lasted 1.5 hours. He has no other medical problems. On examination, he is pale, with normal findings otherwise. Investigations reveal: Hb (hemoglobin): 86 g/L WBC (white blood cell count): 10.2 x 10^9/L Platelet count: 350 x 10^9/L Prothrombin time: 16 seconds (control: 12–15 seconds) Activated partial thromboplastin time: 46 seconds (control: 25–35 seconds) Fibrinogen: 2.5 g/L (normal: 2–4 g/L) Factor VIII: just below the normal range\nWhat is the most likely diagnosis?',
  opts:['Vitamin K deficiency','Liver disease','Immune thrombocytopenic purpura','von Willebrand disease'],
  expl:'Recurrent mucosal bleeding with mild anemia, prolonged PTT, and slightly reduced factor VIII levels suggests von Willebrand disease. Platelets and PT are typically normal or near-normal.',
  note:'Key highlighted = option D, "von Willebrand disease" (index 3). Box fits on page, no overflow. Stem/options/values (Hb 86, WBC 10.2 x 10^9/L, platelets 350 x 10^9/L, PT 16s, APTT 46s, fibrinogen 2.5 g/L, "Factor VIII: just below the normal range" -- printed as prose, not a number) read off the answered page and cross-checked against unanswered twin p.326, identical. Only 4 options printed (A-D).' }

{ n:30, pr:30, p:329, key:0,
  stem:'Melissa is a 3-year-old girl. She presents to her general practitioner with a 3–4-week history of lethargy and weight loss. On examination, she is pale and has widespread bruising. She has no other medical history and is not currently on any medications. The general practitioner orders a full blood count, which reveals: Hb: 66 g/L WBC: 43.2 x 10^9/L Platelet count: 50 x 10^9/L\nWhich of the following is the most likely diagnosis?',
  opts:['Acute lymphoblastic leukaemia','Acute myeloid leukaemia','Alpha-thalassaemia major','Beta-thalassaemia major','Iron deficiency anemia'],
  expl:'A child with pallor, bruising, and pancytopenia (low Hb, high WBCs, and low platelets) is highly suggestive of ALL, the most common childhood cancer',
  note:'Key highlighted = option A, "Acute lymphoblastic leukaemia" (index 0). Box fits on page, no overflow. Stem/options/values (Hb 66, WBC 43.2 x 10^9/L, platelets 50 x 10^9/L) read off the answered page and cross-checked against unanswered twin p.328, identical. This is the FIRST page of the pp.329-351 range flagged in the task as matching House-bank questions one-for-one in page order -- recorded here per instruction; the House file was not opened, audited or compared.' }

{ n:31, pr:31, p:331, key:1,
  stem:'Xevera is a 7-year-old Greek boy who is seen by a paediatrician for constipation and is noted to look pale. Hematological testing reveals that he is anaemic with an Hb of 100 g/L (both MCV and MCHC are low). He is given a course of iron therapy, but his anemia does not improve. Further testing reveals 5% hemoglobin A2 (HbA2) and 3% fetal hemoglobin (HbF). Which of the following is the most likely diagnosis?',
  opts:['Alpha-thalassaemia trait','Beta-thalassaemia trait','Thalassaemia major','Beta-thalassaemia major','Iron deficiency anemia'],
  expl:'Failure to respond to iron, along with elevated HbA2 and HbF on electrophoresis, is diagnostic of beta-thalassemia trait. Microcytic anemia is present despite adequate iron levels.',
  note:'Key highlighted = option B, "Beta-thalassaemia trait" (index 1). Box fits on page, no overflow. Stem/options/values (Hb 100 g/L, HbA2 5%, HbF 3%) read off the answered page and cross-checked against unanswered twin p.330, identical. Within the pp.329-351 House-overlap range flagged in the task -- observation only, not opened or compared.' }

{ n:32, pr:32, p:333, key:0,
  stem:'Ahmed is a 4-week-old infant of Somali refugees who have just fled to the UK. He was circumcised yesterday, but the wound will not stop bleeding. On examination, there is oozing of blood around the circumcision wound. Investigations reveal: Hb: 122 g/L WBC: 11 x 10^9/L Platelets: 312 x 10^9/L Prothrombin time: 36 seconds (control: 12–15 seconds) APTT: 25 seconds (control: 25–35 seconds)\nWhich of the following is the best treatment option for this patient?',
  opts:['Vitamin K','Vitamin D','Blood transfusion','Iron supplementation'],
  expl:'The infant has an isolated prolonged PT with normal platelets and APTT, which is consistent with vitamin K deficiency bleeding (VKDB), common in exclusively breastfed infants not given prophylaxis.',
  note:'Key highlighted = option A, "Vitamin K" (index 0). Box fits on page, no overflow. Stem/options/values (Hb 122, WBC 11 x 10^9/L, platelets 312 x 10^9/L, PT 36s, APTT 25s) read off the answered page and cross-checked against unanswered twin p.332, identical. Only 4 options printed (A-D). Within the pp.329-351 House-overlap range -- observation only.' }

{ n:33, pr:33, p:335, key:2,
  stem:'Lola is an 8-month-old girl from Cyprus. She is referred to the paediatric department because she is clinically anaemic and has faltering growth. Upon examination, you find that she has a large liver and spleen. Electrophoresis reveals an absence of hemoglobin A (HbA). Which of the following is the best treatment option for this patient?',
  opts:['Vitamin K','Vitamin D','Blood transfusion','Iron supplementation','Chemotherapy'],
  expl:'Absence of HbA on electrophoresis and hepatosplenomegaly in a symptomatic infant from a thalassemia-endemic area (Cyprus) suggest beta-thalassemia major. Lifelong transfusion therapy is often required.',
  note:'Key highlighted = option C, "Blood transfusion" (index 2). Box fits on page, no overflow. Stem/options read off the answered page and cross-checked against unanswered twin p.334, identical. Within the pp.329-351 House-overlap range -- observation only.' }

{ n:34, pr:34, p:337, key:3,
  stem:'George is a 3-month-old boy. He presents to the paediatric ward with a swollen leg. He had an immunization yesterday and there is now a large swelling at the injection site. Hematological investigation reveals: Hb: 102 g/L WBC: 9.0 x 10^9/L Platelets: 312 x 10^9/L Prothrombin time: 13 seconds (control: 12–15 s) APTT: 100 seconds (control: 25–35 s)\nThere is currently no bleeding and he is hemodynamically stable. His two older brothers both suffer from a bleeding disorder, but both his parents and older sister do not. Which of the following is the best treatment option?',
  opts:['Vitamin K','Blood transfusion','Folic acid supplementation','Recombinant factor VIII'],
  expl:'A prolonged APTT with normal PT and platelets in a male infant, plus a family history of bleeding in male siblings, strongly suggests Hemophilia A. Recombinant factor VIII is the treatment of choice.',
  note:'Key highlighted = option D, "Recombinant factor VIII" (index 3). Box fits on page, no overflow. Stem/options/values (Hb 102, WBC 9.0 x 10^9/L, platelets 312 x 10^9/L, PT 13s, APTT 100s) read off the answered page and cross-checked against unanswered twin p.336, identical. Only 4 options printed (A-D). Within the pp.329-351 House-overlap range -- observation only.' }

{ n:35, pr:35, p:339, key:4,
  stem:'Lizzie is a 9-year-old girl who presents to the paediatric clinic. She is known to have hereditary spherocytosis. Her mother is concerned that she is very pale. Three weeks ago, Lizzie had an upper respiratory tract infection. Her mother reports that she had a fever and was very flushed with bright red cheeks. She is otherwise well and has fully recovered from her infection. Her mother informs you that she has a very good diet. A complete blood count reveals an Hb of 88 g/L. A blood film reveals a normochromic normocytic anemia with no blast cells. Which of the following is the best treatment option?',
  opts:['Vitamin K','Blood transfusion','Folic acid supplementation','Recombinant factor VIII','No action required at present'],
  expl:'She probably had a parvovirus infection associated with bone marrow suppression. This level of anaemia does not need transfusion. If she has a good diet, she will not need iron supplementation. However, she will need a further full blood count in a couple of weeks to ensure that her haemoglobin has not dropped further and reached the level where a blood',
  note:'Key highlighted = option E, "No action required at present" (index 4). ⚠️ PRINTING DEFECT, flagged not corrected: the explanation box\'s own border cuts the last sentence off mid-word after "...reached the level where a blood" -- confirmed on both native and hires renders, the box border closes right there with no continuation visible; p.340 is the next question (Q36, unanswered), not a continuation of this box. Transcribed verbatim as truncated; not completed or guessed. Stem/options/Hb 88 g/L read off the answered page and cross-checked against unanswered twin p.338, identical. Within the pp.329-351 House-overlap range -- observation only.' }

{ n:36, pr:36, p:341, key:4,
  stem:'Angie is 6 weeks old. She was jaundiced at 24 hours of age when her hemoglobin (Hb) was checked and found to be 150 g/L. At 2 months of age, she presents with an upper respiratory tract infection. The full blood count is repeated, and she has an Hb of 102 g/L. Which of the following is the best treatment option for this patient?',
  opts:['Vitamin K','Blood transfusion','Folic acid supplementation','Recombinant factor VIII','No action required at present'],
  expl:'This is a normal variant. At birth, the haemoglobin in term infants is high, 140–215 g/L, to compensate for the low oxygen concentration in the fetus. The haemoglobin falls over the first few weeks, mainly due to reduced red cell production, reaching a nadir of around 100 g/L at 2 months of age',
  note:'Key highlighted = option E, "No action required at present" (index 4). Box fits on page, no overflow (unlike n:14, this box\'s border closes cleanly after a complete sentence). Stem/options/values (Hb 150 g/L at 24h, Hb 102 g/L at repeat, reference range 140-215 g/L) read off the answered page and cross-checked against unanswered twin p.340, identical. Within the pp.329-351 House-overlap range -- observation only.' }

{ n:37, pr:37, p:343, key:1,
  stem:'Hemoglobin production differs through fetal life and extrauterine life, and the molecule itself changes with age. Which of the following statements regarding hemoglobin is correct?',
  opts:['At birth, HbA is predominant','Hb concentration falls after birth until around 7 weeks','Hematopoiesis mainly occurs in the liver and spleen at term','The lifespan of a normal red blood cell is 10 days','Fetal hemoglobin has lower affinity for oxygen'],
  expl:'After birth, Hb levels physiologically drop due to reduced erythropoiesis and transition from fetal to adult hemoglobin, reaching a nadir around 6–8 weeks. This is known as physiological anemia of infancy.',
  note:'Key highlighted = option B, "Hb concentration falls after birth until around 7 weeks" (index 1). p.342 (not in the assigned answered-page list, checked anyway) is the plain unanswered twin, identical stem/options -- confirmed. Box fits on the answered page, no overflow. Note the box text says nadir "around 6-8 weeks" while the correct-option text says "around 7 weeks" -- both printed as-is, not reconciled (7 weeks falls within the stated 6-8 week range, not a contradiction, recorded verbatim only).' }

{ n:38, pr:38, p:345, key:2,
  stem:"An 11-month-old Caucasian boy attends his GP as his mother has been struggling to wean him. He will drink cow's milk at regular intervals and eats some baby rice but refuses most other solids. On examination, he appears very pale but otherwise well. There is no hepatosplenomegaly. A complete blood count (FBC) shows: Hb: 7.8 g/dL MCV: 69 fL\nWhat is the most likely cause of his anemia?",
  opts:['Sickle cell anemia','Thalassaemia','Iron deficiency anemia','Vitamin B12 deficiency'],
  expl:'A diet high in cow’s milk and low in iron-rich solids commonly leads to iron deficiency anemia in infants. The low Hb and microcytic MCV (69 fL) confirm the diagnosis.',
  note:'Key highlighted = option C, "Iron deficiency anemia" (index 2). Box fits on page, no overflow. ⚠️ UNIT FLAG: Hb printed here as "7.8 g/dL" -- this is the first entry in this file using g/dL rather than g/L (every prior entry printed Hb in g/L); read directly off the image on both the answered page and its unanswered twin p.344, identical unit both places, not a transcription slip on my part. Transcribed as printed, not converted. MCV 69 fL also cross-checked against p.344, identical. Only 4 options printed (A-D).' }

{ n:39, pr:39, p:347, key:2,
  stem:'A 3-year-old Afro-Caribbean girl presents with severe pain in her hands and abdomen. On examination, there is mucosal pallor, yellow sclerae, generalized abdominal tenderness with hepatosplenomegaly. Bloods show: Hb: 6.1 g/dL MCV: 78 fL WBC: 6.0 x 10^9/L Platelets: 300 x 10^9/L\nWhat is the most likely cause of her anemia?',
  opts:['Thalassaemia','Iron deficiency anemia','Sickle cell disease','Anemia of chronic disease','G6PD deficiency'],
  expl:'The child’s symptoms (pain crisis, pallor, jaundice) and background are classic for sickle cell disease. The anemia, normocytic MCV, and hepatosplenomegaly support hemolysis from sickling.',
  note:'Key highlighted = option C, "Sickle cell disease" (index 2). Box fits on the answered page, no overflow. Stem/options/values (Hb 6.1 g/dL, MCV 78 fL, WBC 6.0 x 10^9/L, platelets 300 x 10^9/L) cross-checked against unanswered twin p.346, identical. Exponent confirmed genuine superscript 9 (not flattened) at a 300 dpi crop of p.347 -- caret notation used per file convention. ⚠️ UNIT: Hb again printed in g/dL here (as n:17 was), consistent within this run of pages, transcribed as printed.' }

{ n:40, pr:40, p:349, key:3,
  stem:'A 9-year-old girl with known sickle cell disease presents with a 4-day history of fever, coryza, and myalgia. Over the past 24 hours, she has developed a lacy rash particularly over her hands and feet and has become more lethargic. Her mother reports her looking more pale. An FBC reveals: Hb: 5.9 g/dL WCC: 1.0 x 10^9/L Platelets: 50 x 10^9/L\nWhat is the most likely cause for her blood results?',
  opts:['Splenic sequestration crisis','Painful crisis','Chest crisis','Parvovirus B19 infection','Pneumococcal sepsis'],
  expl:'Parvovirus B19 causes transient aplastic crisis in sickle cell patients, presenting with sudden anemia, reticulocytopenia, and pancytopenia. The lacy rash is characteristic of the virus.',
  note:'Key highlighted = option D, "Parvovirus B19 infection" (index 3). Box fits on page, no overflow. Stem/options/values (Hb 5.9 g/dL, WCC 1.0 x 10^9/L, platelets 50 x 10^9/L) cross-checked against unanswered twin p.348, identical. Exponent style (10^9) matches n:18\'s confirmed genuine-superscript reading; not re-escalated to 300 dpi as the same font/rendering was already confirmed one page prior. ⚠️ UNIT: Hb again in g/dL, third consecutive page in this style, transcribed as printed.' }

{ n:41, pr:41, p:351, key:2,
  stem:'An 8-month-old girl with Greek-Cypriot parents is brought to her GP as her parents are worried she is not growing well and is very pale. On examination, there is pallor and mildly icteric sclerae. She has a distended abdomen with hepatosplenomegaly and mild frontal bossing. She was born on the 25th centile and her weight has fallen below the 2nd centile. Blood tests show microcytic hypochromic anemia. What is the likely diagnosis?',
  opts:['Sickle cell disease','Hereditary spherocytosis','Thalassaemia major','G6PD deficiency','Iron deficiency anemia'],
  expl:'Features such as severe microcytic anemia, hepatosplenomegaly, and failure to thrive in a child from a high-risk ethnic group are classic for β-thalassaemia major.',
  note:'Key highlighted = option C, "Thalassaemia major" (index 2). Box fits on page, no overflow. Stem/options match unanswered twin p.350 exactly, no lab numerals or exponents on this page to check.' }

{ n:42, pr:42, p:353, key:1,
  stem:'A 14-month-old boy is brought to the emergency room by his mother with pain and swelling in his right knee. He is unable to weight bear, and on examination, several large bruises are noted over the lower limbs and arms. His blood tests show: Hb: 10.5 g/dL WCC: 11 x 10^9/L Platelets: 340 x 10^9/L PT: 13.3 seconds APTT: >120 seconds\nWhat is the most likely diagnosis?',
  opts:['Vitamin K deficiency','Hemophilia A','Von Willebrand disease','Immune thrombocytopenic purpura'],
  expl:'A significantly prolonged APTT with normal platelets and PT, plus joint bleeding, is typical for Hemophilia A, an X-linked deficiency of factor VIII.',
  note:'Key highlighted = option B, "Hemophilia A" (index 1). Box fits on page, no overflow. Stem/options/values (Hb 10.5 g/dL, WCC 11 x 10^9/L, platelets 340 x 10^9/L, PT 13.3s, APTT >120s) cross-checked against unanswered twin p.352, identical. Exponent style (10^9) matches the confirmed genuine-superscript reading from n:18/n:19; not re-escalated, same font/rendering. Only 4 options printed (A-D). ⚠️ UNIT: Hb again in g/dL, consistent with the run of pages since n:17.' }

{ n:43, pr:43, p:355, key:2,
  stem:'A 5-year-old boy attends the emergency department with a nosebleed that has lasted for 45 minutes. He had a viral upper respiratory tract infection 1 week ago. On examination, he has petechiae over his chest, legs, and abdomen. Blood tests reveal: Hb: 10.4 g/dL WCC: 13 x 10^9/L Platelets: 15 x 10^9/L Clotting screen: normal\nWhat is the most likely diagnosis?',
  opts:['Henoch–Schönlein purpura','Hemophilia B','Immune thrombocytopenic purpura','Meningococcal septicaemia'],
  expl:'Recent viral infection, petechiae, and isolated low platelets with normal clotting suggest ITP, a common immune-mediated cause of thrombocytopenia in children.',
  note:'Key highlighted = option C, "Immune thrombocytopenic purpura" (index 2). Box fits on page, no overflow. Stem/options/values (Hb 10.4 g/dL, WCC 13 x 10^9/L, platelets 15 x 10^9/L, "Clotting screen: normal") cross-checked against unanswered twin p.354, identical. Exponent style (10^9) matches the confirmed genuine-superscript reading from earlier pages in this run; not re-escalated. Only 4 options printed (A-D). ⚠️ UNIT: Hb again in g/dL.' }

{ n:44, pr:44, p:357, key:0,
  stem:'A 7-year-old Ghanaian boy presented to A&E 3 days after returning from West Africa with high fever and rigors. He was diagnosed with malaria and started on primaquine. His mother is now concerned about jaundice. On examination, he is pale, jaundiced, and breathless. Investigations reveal: Hb: 5.5 g/dL WCC: 15 x 10^9/L Platelets: 200 x 10^9/L Blood film: red cell fragments, bite cells, Heinz bodies\nWhat is the most likely diagnosis?',
  opts:['G6PD deficiency','Pyruvate kinase deficiency','Sickle cell disease','Beta-thalassaemia'],
  expl:'G6PD deficiency can cause hemolysis after exposure to oxidative drugs like primaquine. Bite cells and Heinz bodies on blood film confirm oxidative hemolysis.',
  note:'Key highlighted = option A, "G6PD deficiency" (index 0). Box fits on page, no overflow. Stem/options/values (Hb 5.5 g/dL, WCC 15 x 10^9/L, platelets 200 x 10^9/L, blood film findings) cross-checked against unanswered twin p.356, identical. Exponent style (10^9) matches the confirmed genuine-superscript reading from earlier pages in this run; not re-escalated. Only 4 options printed (A-D). ⚠️ UNIT: Hb again in g/dL. This is the LAST entry in Part B\'s assigned range (pp.311-357) -- range now closed at n:23/pr:44/p:357.' }

