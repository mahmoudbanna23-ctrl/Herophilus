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

   QUESTION-NUMBER WALK (pr = printed number, filled in as pages are read):
   n1 p.311 pr22 -- n2 p.314 pr23 -- (continuing below)
*/

{ n:1, pr:22, p:311, key:2, box:312,
  stem:'Tia is a 4-year-old Caucasian girl referred to the paediatric ward by her general practitioner because her mother noticed a yellow tinge to her eyes after an upper respiratory tract infection. She is otherwise well and has no history of weight loss. There is no family history of blood disorders. On examination, she is pale, and her spleen is enlarged 3 cm below the costal margin. Full blood count results are: Hb (hemoglobin): 60 g/L WBC (white blood cell count): 8 x 10^9/L Platelet count: 255 x 10^9/L Blood film: small red cells MCV (mean cell volume): 60 fL (normal: 75–87 fL)\nWhat is the most likely diagnosis?',
  opts:['Acute lymphoblastic leukaemia','Glucose-6-phosphate dehydrogenase (G6PD) deficiency','Hereditary spherocytosis','Sickle cell disease','Thalassaemia'],
  expl:'This child presents with anemia, jaundice following a viral illness, splenomegaly, and a microcytic picture on blood film, which can be seen in hereditary spherocytosis, especially during aplastic crises. Though the MCV is low (which is more typical of thalassemia), spherocytes may have a falsely low MCV. Hereditary spherocytosis is also more common in Caucasian children and can worsen during infections, consistent with her history.',
  note:'Key highlighted = option C, "Hereditary spherocytosis" (index 2). Page 311 itself prints no box; the explanation box is on p.312, printed alone (the "notes" page the index flagged) -- confirmed by content, it reasons through this exact vignette. p.309 (also flagged notes) is a separate, unrelated preceding teaching slide on iron deficiency/toddler anemia, not part of this question; it precedes the unanswered twin p.310 and is not staged. Stem/options read cleanly off the answered page; the bullet-separated FBC line and superscripts (10^9) transcribed as printed with caret notation since the source renders "10" with a small raised "9"/"6" glyph -- read directly off the image, not OCR.' }

{ n:2, pr:23, p:314, key:2,
  stem:'Ahmed, a 10-year-old boy of Egyptian descent, presents to his general practitioner. This evening, he is more lethargic than usual, and his urine has turned dark. There is no history of excessive exercise or beetroot consumption; lunch consisted of chicken, fish, broad beans, and rice. His examination is normal except he is febrile. There is no recent upper respiratory tract infection and no significant past medical history. What is the most likely underlying cause of his new symptoms?',
  opts:['Acute lymphoblastic leukaemia','Thalassemia trait','G6PD (Glucose-6-phosphate dehydrogenase) deficiency','Pyelonephritis','Sickle cell disease'],
  expl:'The history of broad bean ingestion, dark urine, and hemolytic features suggest G6PD deficiency, which is common in Middle Eastern populations. G6PD triggers include infections, certain foods, and drugs.',
  note:'Key highlighted = option C, "G6PD (Glucose-6-phosphate dehydrogenase) deficiency" (index 2). Box fits on the answered page itself, no overflow. Stem/options match the unanswered twin p.313 exactly.' }

{ n:3, pr:24, p:316, key:2,
  stem:'Tom is a 5-year-old boy presenting with a recent history of easy bruising. Two weeks ago, he had an upper respiratory tract infection that resolved spontaneously. Today, he is afebrile but has many widespread bruises and scattered petechiae. Investigations reveal: Hb (hemoglobin): 116 g/L WBC (white blood cell count): 10.2 x 10^9/L Platelet count: 32 x 10^9/L Prothrombin time: 15 seconds (control: 12–15 seconds) Activated partial thromboplastin time: 30 seconds (control: 25–35 seconds) Fibrinogen: 2.5 g/L (normal: 2–4 g/L)\nWhat is the most likely diagnosis?',
  opts:['Acute lymphoblastic leukaemia','Hemophilia A','Immune thrombocytopenic purpura','Non-accidental injury','Vitamin D deficiency'],
  expl:'ITP typically presents after viral illness with isolated thrombocytopenia and petechiae or bruising in a well-appearing child. Normal Hb and WBCs, along with recent URTI, support this diagnosis.',
  note:'Key highlighted = option C, "Immune thrombocytopenic purpura" (index 2). haem-bleeding chapter content (platelet/coagulation panel). Box fits on page, no overflow. Stem/options match unanswered twin p.315 exactly. Platelet count 32 x 10^9/L and other lab values read directly off the image (not OCR).' }

{ n:4, pr:25, p:318, key:2,
  stem:'Amir is a 2-year-old Bangladeshi boy with eczema. During a routine review, his general practitioner notices he is pale. The rest of the examination is normal. His mother reports that he has been eating bits of carpet recently. Investigations reveal: Hb (hemoglobin): 66 g/L WBC (white blood cell count): 10.2 x 10^9/L Platelet count: 350 x 10^9/L MCV (mean cell volume): 60 fL (normal: 75–87 fL). What is the most appropriate treatment?',
  opts:['Dietary advice','Folic acid','Iron supplements','Multivitamin tablets','Vitamin B12 injections'],
  expl:'The presence of pica (eating carpet) and microcytic anemia (MCV 60 fL) are classic for iron deficiency anemia. Iron supplementation is the first-line treatment.',
  note:'Key highlighted = option C, "Iron supplements" (index 2). Box fits on page, no overflow. Stem/options match unanswered twin p.317 exactly. Pica presentation echoes the standalone teaching box on p.309 (iron deficiency/toddler anemia) that precedes n=1 -- recorded as an observation only.' }

