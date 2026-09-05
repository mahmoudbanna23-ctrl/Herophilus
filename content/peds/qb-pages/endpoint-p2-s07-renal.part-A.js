/* ===========================================================================
   ENDPOINT PART 2 -- Pediatrics endpoint part2.pdf -- SECTION 7 "Kidney &
   Urinary Tract Disorders", PART A. Verbatim staging record. Written
   2026-09-05. Range assigned: answered pages 820, 822, 824 ... 846 (14
   pages), n=1..14. Source is a 1-up exported slide deck: one PDF page = one
   printed slide page, no 2-up split, no duplex show-through (brief SS2).
   Native embedded JPEGs pulled from a prior session's extraction under
   ep2-index\native (800x450 ceiling); OCR index under
   content\peds\qb-pages\ocr\ep2\ was NOT opened for transcription, only its
   index.json page-structure metadata was read (per brief SS4) to derive the
   page walk before any image was opened.

   BOUNDARY CHECK (mine per prompt): pp.793-819 were checked against the
   claim that they carry no answered page. index.json kind field for every
   page 793-818 reads "notes"; p.819 reads "question" (i.e. an unanswered
   printing, the twin of p.820's Q1). Images opened: p.793 ("Kidney & Urinary
   Tract Disorders" section-title slide), p.805 (a "Proteinuria" teaching
   slide), p.815 ("Acute Kidney Injury (AKI)" teaching slide), p.817
   ("Pathophysiology"/HUS teaching slide), p.819 (Q1, Emily/UTI-sample vignette,
   printed plain with no yellow highlight -- confirmed the unanswered twin of
   p.820). All five are exactly what their kind tag says. NO hidden question
   found in pp.793-819; nothing staged from that range, per brief instruction.

   COMPLETE (n=1..14, pp.820-846). Question-number walk: printed numbers 1-14
   ran in strict order matching n, one per answered page, no repeats, no
   skips (pr==n on every entry). No overflow explanation box, no box-only
   page, no alternation break anywhere in the range -- every one of the 14
   answered pages carried its own explanation box; no boxless page occurred
   (so the "open the next page" test from brief SS3a was never triggered).
   One figure: n6 (p.830), a colour clinical photograph of a child's face
   with facial swelling; figAlt kept to modality/view only, no diagnosis
   named. No shared option menus with a matching ladder found (n3/n4 and
   n6/n7 are linked follow-up questions referencing the same vignette, but
   each prints its own distinct option list -- recorded as linked in their
   notes, not folded, per brief SS7). n12 (p.842/841 twin) genuinely prints
   only 4 options (A-D), confirmed on both printings. Four numeral/exponent
   crops made at 300dpi and confirmed genuine typeset superscripts, never
   flat or caret: n8 (10^9/L x2), n10 (mm^3), n11 (mm^2, 10^5), n12 (mm^2),
   n13 (mm^2), n14 (mm^2, 10^5) -- all transcribed as ASCII per brief SS4a
   convention. One printed-unit oddity recorded, not corrected: n11's stem
   gives the WBC count as "/mm^2" (area) where "/mm^3" (volume) would be
   expected -- staged exactly as printed.

   BOUNDARY PROOF, one page past my range: p.847 opens Q15 ("Max, a
   12-year-old boy with cerebral palsy...", unanswered, options A-D shown,
   continuing straight into the section -- no section banner, no divider).
   This is part B's first question; part A's range ends cleanly at n=14/p.846
   with nothing left unstaged before it.

   No cross-bank match was attempted or checked for this part (House/
   endpoint-part-1 comparison was out of scope for this staging pass; not
   claimed here).
   =========================================================================== */

{ n: 1, pr: 1, p: 820,
  key: 2,
  stem: "Emily is a 2-year-old girl who presents to the Emergency Department with a 2-day history of fever, vomiting, and foul-smelling urine. She has no significant past medical history and is not on any medication. On examination, her temperature is 39" + String.fromCharCode(176) + "C, and her heart rate is 126 beats/min. She has generalized abdominal tenderness.What is the best method to collect a urine sample from her?",
  opts: ['Bag sample', 'Catheter sample', 'Clean catch', 'Pad/cotton wool balls in nappy', 'Suprapubic aspirate'],
  expl: 'Clean catch involves waiting with a sterile bowl to catch the urine. It is the least invasive and has less risk of contamination. The child is well enough to wait before starting treatment and you want to be sure that you are actually treating a urinary tract infection. The smell of urine is an unreliable sign of genuine infection.',
  note: "Twin checked: p.819 prints the identical stem/options plain, no highlight -- confirmed unanswered. Key highlighted: yellow box on \"C. Clean catch\". Stem's missing space before \"What\" (\"tenderness.What\") is printed exactly that way on the page, transcribed as-is. Numeral 39" + String.fromCharCode(176) + "C read directly off native image, legible, no crop needed." }

{ n: 2, pr: 2, p: 822,
  key: 1,
  stem: "Becky is a 7-year-old girl seen by her general practitioner with a 2-day history of fever and abdominal pain. Her mother has noticed increased urinary frequency. On examination, she is now afebrile with no abdominal tenderness.What is the most likely diagnosis?",
  opts: ['Appendicitis', 'Cystitis', 'Diabetic ketoacidosis', 'Glomerulonephritis', 'Pyelonephritis'],
  expl: 'Becky has urinary frequency and abdominal pain that have resolved with no fever or tenderness now, suggesting lower UTI (cystitis). Pyelonephritis is less likely due to the lack of systemic features or loin pain.',
  note: "Key highlighted: yellow box on \"B. Cystitis\". Stem again prints no space before \"What\" (\"tenderness.What\"), as on p.820 -- printed that way, transcribed as-is. No numerals to verify." }

{ n: 3, pr: 3, p: 824,
  key: 2,
  stem: 'Jonathan is an 8-year-old boy with a history of urinary tract infections. He now presents with acute spasmodic pain in the left side of his abdomen, describing it as the worst pain he has ever felt. He played football yesterday but did not sustain any injury. On examination, he is afebrile, his abdomen is soft with no guarding, and he is tender over the left loin. Urinalysis reveals 2+ haematuria, but no protein or leucocytes. What is the most likely cause of his pain?',
  opts: ['Constipation', 'Glomerulonephritis', 'Renal stone', 'Trauma', 'Wilms tumor'],
  expl: 'Severe, colicky loin pain with microscopic hematuria and a history of UTIs strongly suggests a renal stone. The absence of fever and normal abdominal exam makes infection and trauma less likely.',
  note: 'Key highlighted: yellow box on "C. Renal stone". "2+ haematuria" read directly off native image, legible, no crop needed. Explanation box spells "hematuria" without the "ae" used in the stem\'s "haematuria" -- both spellings printed verbatim as they appear.' }

{ n: 4, pr: 4, p: 826,
  key: 2,
  stem: "In Jonathan" + String.fromCharCode(8217) + "s case (see previous question), what is the most likely organism responsible for his previous urinary tract infections?.",
  opts: ['Escherichia coli', 'Klebsiella species', 'Proteus species', 'Pseudomonas aeruginosa', 'Streptococcus faecalis'],
  expl: "Proteus is a urease-producing organism associated with recurrent UTIs and renal stones, especially in boys. It promotes the formation of struvite stones, explaining Jonathan" + String.fromCharCode(8217) + "s current presentation.",
  note: 'Key highlighted: yellow box on "C. Proteus species". This question explicitly refers back to n3\'s vignette ("Jonathan\'s case, see previous question") -- a linked follow-up, not a shared option menu; recorded, not folded (different question, different answer). Stem prints double punctuation "infections?." verbatim, transcribed as-is.' }

{ n: 5, pr: 5, p: 828,
  key: 0,
  stem: "Eesa is a 1-month-old Pakistani infant brought to the GP by his mother due to vomiting and reduced feeding. He is irritable and has a temperature of 39" + String.fromCharCode(176) + "C. His heart rate is 170 beats/min and respiratory rate is 45 breaths/min. The remainder of the examination is unremarkable. A clean-catch urine sample shows nitrites, leucocytes, and protein on dipstick. What is the most appropriate next course of action?",
  opts: ['Intravenous antibiotics', 'Intravenous fluids', 'Oral antibiotics', 'Oral paracetamol', 'Oral rehydration solution'],
  expl: 'A febrile neonate with signs of sepsis and a positive urine dipstick requires hospital admission and IV antibiotics. This age group is at risk for serious bacterial infection and must be treated urgently.',
  note: "Key highlighted: yellow box on \"A. Intravenous antibiotics\". Numerals read directly off native image, legible, no crop needed: temp 39" + String.fromCharCode(176) + "C, HR 170/min, RR 45/min." }

{ n: 6, pr: 6, p: 830,
  key: 3,
  stem: 'Freddie is a 3-year-old boy referred due to facial swelling. His mother suspects a peanut allergy. On examination, he has abdominal distension, bilateral scrotal swelling, and pitting edema of the lower limbs. Urine dipstick shows 4+ protein, 2+ blood, nitrites present, and negative leucocytes. Blood pressure and renal function are normal. Complement levels (C3, C4) are normal. What is the most likely diagnosis?',
  opts: ['Acute allergic reaction to peanuts', 'Acute glomerulonephritis', 'Hemolytic-uraemic syndrome', 'Nephrotic syndrome', 'Urinary tract infection'],
  expl: "Freddie" + String.fromCharCode(8217) + "s generalized edema, heavy proteinuria (4+), and normal renal function and complement levels are typical of nephrotic syndrome. The absence of hypertension and hematuria argues against glomerulonephritis.",
  fig: 'Colour clinical photograph of a young child, head and bare upper chest visible, positioned to the right of the stem, above the explanation box. Face shows marked facial/periorbital swelling with eyes nearly swollen shut, consistent with the stem\'s "facial swelling"; light-coloured hair, indoor setting with a dark background.',
  figAlt: "Colour clinical photograph of a young child" + String.fromCharCode(8217) + "s face and upper chest, showing facial swelling.",
  note: 'Key highlighted: yellow box on "D. Nephrotic syndrome". Numerals read directly off native image, legible, no crop needed: 4+ protein, 2+ blood on dipstick. Option C spells "Hemolytic-uraemic syndrome" (mixed US/UK spelling) exactly as printed.' }

{ n: 7, pr: 7, p: 832,
  key: 4,
  stem: "What is the initial treatment of Freddie" + String.fromCharCode(8217) + "s condition?",
  opts: ['Diuretics', 'Fluid restriction', 'Intravenous human albumin solution 20%', 'Intravenous hydrocortisone', 'Oral prednisolone'],
  expl: 'The first-line treatment for minimal-change nephrotic syndrome is oral corticosteroids like prednisolone. Most children respond well, and other treatments are reserved for non-responders or relapses.',
  note: "Key highlighted: yellow box on \"E. Oral prednisolone\". Linked follow-up to n6 (Freddie" + String.fromCharCode(8217) + "s case) -- recorded, not folded (separate question, separate answer). Numeral 20% read directly off native image, legible, no crop needed." }

{ n: 8, pr: 8, p: 834,
  key: 1,
  stem: 'Finlay, a 5-year-old boy, had a birthday party at a local farm. He now has had 3 days of bloody diarrhea and appears pale. He has not passed urine for 12 hours. On examination, he is pale but normotensive. Lab tests show: Hemoglobin: 76 g/L WBC: 14.2 x 10^9/L Platelets: 50 x 10^9/L Creatinine: 200 ' + String.fromCharCode(181) + 'mol/L PT: 13 sec aPTT: 34 sec What is the most likely diagnosis?',
  opts: ['Acute lymphatic leukaemia', 'Hemolytic-uraemic syndrome', 'Henoch-Sch' + String.fromCharCode(246) + 'nlein purpura', 'Immune thrombocytopenic purpura', 'Post-streptococcal glomerulonephritis'],
  expl: "Finlay" + String.fromCharCode(8217) + "s presentation following bloody diarrhea with anemia, thrombocytopenia, and acute kidney injury is classic for HUS, often caused by Shiga-toxin-producing E. coli after farm visits. It is the most common cause of AKI in children.",
  note: 'Key highlighted: yellow box on "B. Hemolytic-uraemic syndrome". Lab line printed as a row of coloured bullet icons + text, not a clinical photo -- no fig/figAlt needed. Exponent CONFIRMED at 300dpi crop (ep2-stage/p-0834.jpg): both "10' + String.fromCharCode(8313) + '/L" instances are genuine small typeset superscripts, not flat text and not a caret -- transcribed per brief convention as 10^9 in both stem and note. All numerals read at 300dpi: Hb 76 g/L, WBC 14.2 x 10^9/L, Platelets 50 x 10^9/L, Creatinine 200 ' + String.fromCharCode(181) + 'mol/L (Greek mu, confirmed at 300dpi, not "u"), PT 13 sec, aPTT 34 sec, anuria 12 hours.' }

{ n: 9, pr: 9, p: 836,
  key: 2,
  stem: 'Jane, a 5-year-old girl, presents with 4 months of bedwetting, occurring about three times a week. She had previously been dry for almost a year. She also recently started school and had two episodes of wetting during the day. No other symptoms are reported. What is the first investigation you would perform?',
  opts: ['Blood glucose', 'Ultrasound of the abdomen', 'Urine dipstick', 'Urine microscopy and culture', 'Water deprivation test'],
  expl: "The first step in evaluating secondary enuresis is to rule out UTI or diabetes with a simple urine dipstick. Jane's regression after being previously dry, especially with daytime wetting, suggests a possible underlying issue.",
  note: 'Key highlighted: yellow box on "C. Urine dipstick". Explanation box prints a straight apostrophe in "Jane\'s" (unlike the curly marks seen on p.830/832/834), transcribed as printed. No numerals needing a crop.' }

{ n: 10, pr: 10, p: 838,
  key: 3,
  stem: 'Ji, a 12-month-old Japanese girl, presents with a 2-day history of fever and vomiting. She is well-hydrated and has signs of coryza and pharyngitis. A bag urine sample was sent. Results: WBCs 100/mm^3, RBCs negative, organisms not seen, red cell casts absent, culture not available. What is the most likely diagnosis?',
  opts: ['Balanitis', 'Glomerulonephritis', 'Normal result', 'Perineal contamination', 'Urinary tract infection (UTI)'],
  expl: 'A bag-collected urine sample showing high WBCs without organisms or red cells, especially in a child with viral symptoms, suggests contamination rather than true UTI. Bag samples are unreliable and prone to contamination.',
  note: 'Key highlighted: yellow box on "D. Perineal contamination". Unit CONFIRMED at 300dpi crop (ep2-stage/p-0838.jpg): "mm' + String.fromCharCode(179) + '" is a genuine small typeset superscript cubic-unit mark, not flat or caret -- transcribed per brief exponent convention as mm^3.' }

{ n: 11, pr: 11, p: 840,
  key: 4,
  stem: "Harriet, a 12-year-old girl, presents to the Emergency Department with abdominal pain and pain on micturition. A midstream urine sample is obtained and is positive for leucocytes but negative for nitrites. She is started on oral antibiotics and discharged. Forty-eight hours later, the following result from microscopy and culture is received: white blood cells >200/mm^2; red blood cells, many seen; organisms, none seen; red cell casts, none seen; culture, >10^5 coliforms. Which of the following is the most likely diagnosis?",
  opts: ['Balanitis', 'Glomerulonephritis', 'Renal stone', 'Perineal contamination', 'Urinary tract infection (UTI)'],
  expl: "Despite initial negative nitrites, the culture shows >10^5 coliforms, high WBCs, and visible RBCs, confirming a true UTI. Nitrites may be absent if the infection is caused by a non-nitrate-reducing organism or if the urine hasn't been in the bladder long enough.",
  note: 'Key highlighted: yellow box on "E. Urinary tract infection (UTI)". Both exponents CONFIRMED at 300dpi crop (ep2-stage/p-0840.jpg): ">200/mm' + String.fromCharCode(178) + '" and ">10' + String.fromCharCode(8309) + '" are genuine small typeset superscripts (2 and 5), not flat and not carets -- transcribed per brief convention as mm^2 and 10^5. Note: the stem\'s WBC unit prints "mm^2" (area) rather than the expected "mm^3" (volume) -- printed exactly as it reads on the page at 300dpi, not corrected; a likely book typo (per user ruling, defects are recorded, never corrected).' }

{ n: 12, pr: 12, p: 842,
  key: 3,
  stem: 'Gary is a 6-month-old boy who has been febrile for 1 day, is feeding poorly, and has difficulty breathing. On examination, he has a respiratory rate of 60 breaths/min, marked chest recession, and widespread wheeze and fine crepitations on auscultation. He requires admission for oxygen therapy. A urine sample is sent from the Emergency Department, and the results are: white blood cells <50/mm^2; red blood cells, none seen; organisms, none seen; red cell casts, none seen; culture, mixed coliforms. Which of the following is the most likely diagnosis?',
  opts: ['Balanitis', 'Glomerulonephritis', 'Nephrotic syndrome', 'Perineal contamination'],
  expl: 'A mixed growth of coliforms, with low WBCs and no organisms seen on microscopy, indicates a contaminated sample, especially in a child presenting with respiratory symptoms rather than UTI.',
  note: 'Key highlighted: yellow box on "D. Perineal contamination". PAGE GENUINELY PRINTS ONLY 4 OPTIONS (A-D) -- confirmed on both the answered page (native + 300dpi crop ep2-stage/p-0842.jpg) and the unanswered twin p.841, same 4 options, same vertical layout with empty space below D, not a cut-off. Exponent CONFIRMED at 300dpi: "<50/mm' + String.fromCharCode(178) + '" is a genuine small typeset superscript 2, transcribed as mm^2 per convention.' }

{ n: 13, pr: 13, p: 844,
  key: 1,
  stem: 'George, a 7-year-old boy, presents to his family doctor with cloudy urine. He has no other symptoms, and his examination is normal. Urine microscopy and culture reveal: white blood cells 50' + String.fromCharCode(8211) + '100/mm^2; red blood cells, many seen; organisms, none seen; red cell casts seen; culture, negative at 48 hours. Which of the following is the most likely diagnosis?',
  opts: ['Balanitis', 'Glomerulonephritis', 'Nephrotic syndrome', 'Perineal contamination', 'Urinary tract infection (UTI)'],
  expl: 'The presence of red cell casts and microscopic hematuria, with no bacteria growth on culture, is highly suggestive of glomerulonephritis. This indicates a renal, not infectious, cause of hematuria.',
  note: 'Key highlighted: yellow box on "B. Glomerulonephritis". Exponent CONFIRMED at 300dpi crop (ep2-stage/p-0844.jpg): "/mm' + String.fromCharCode(178) + '" is a genuine small typeset superscript 2, transcribed as mm^2. Range printed with an en dash ("50' + String.fromCharCode(8211) + '100"), transcribed as printed.' }

{ n: 14, pr: 14, p: 846,
  key: 4,
  stem: 'Gregor is a 6-week-old baby who has recently moved to the UK from Estonia. He presents with fever and irritability. On examination, he is clinically shocked. A catheterized urine sample is taken urgently, and intravenous antibiotics are started after a saline bolus. Microscopy and culture results are: white blood cells >200/mm^2; red blood cells, none seen; organisms seen on microscopy; red cell casts not seen; culture, >10^5 coliforms. Which of the following is the most likely diagnosis?',
  opts: ['Balanitis', 'Glomerulonephritis', 'Nephrotic syndrome', 'Perineal contamination', 'Urinary tract infection (UTI)'],
  expl: 'A febrile neonate in shock with >200 WBCs, visible organisms, and a high coliform count indicates a serious bacterial UTI. This justifies immediate treatment with IV antibiotics.',
  note: 'Key highlighted: yellow box on "E. Urinary tract infection (UTI)". Both exponents CONFIRMED at 300dpi crop (ep2-stage/p-0846.jpg): ">200/mm' + String.fromCharCode(178) + '" and ">10' + String.fromCharCode(8309) + '" are genuine small typeset superscripts, transcribed as mm^2 and 10^5 per convention -- same "mm^2 for a WBC count" wording as n11/n12, printed exactly as it reads.' }
