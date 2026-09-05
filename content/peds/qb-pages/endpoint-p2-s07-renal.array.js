/* ===========================================================================
   ENDPOINT - Pediatrics endpoint part2.pdf - SECTION 7: "Kidney & Urinary Tract Disorders"
   Verbatim staging record. PDF pages 793-929; PDF page = printed page, offset zero.
   Merged from endpoint-p2-s07-renal.part-A.js + endpoint-p2-s07-renal.part-B.js + endpoint-p2-s07-renal.part-C.js + endpoint-p2-s07-renal.part-D.js by merge-parts-ep2.js.
   
   Every question is printed TWICE: an unanswered page, then the ANSWERED page with the key
   highlighted in yellow and (usually) a bordered explanation box. Only answered pages are
   staged. `n` is the true sequential index, `pr` what the page prints, `p` the PDF page,
   `key` a ZERO-BASED INDEX into `opts` (never a letter), matching the app field `answer`,
   `expl` the printed box verbatim or "".
   =========================================================================== */
var PEDEP2_S07_STAGED = [

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
  note: "Twin checked: p.819 prints the identical stem/options plain, no highlight -- confirmed unanswered. Key highlighted: yellow box on \"C. Clean catch\". Stem's missing space before \"What\" (\"tenderness.What\") is printed exactly that way on the page, transcribed as-is. Numeral 39" + String.fromCharCode(176) + "C read directly off native image, legible, no crop needed." },

{ n: 2, pr: 2, p: 822,
  key: 1,
  stem: "Becky is a 7-year-old girl seen by her general practitioner with a 2-day history of fever and abdominal pain. Her mother has noticed increased urinary frequency. On examination, she is now afebrile with no abdominal tenderness.What is the most likely diagnosis?",
  opts: ['Appendicitis', 'Cystitis', 'Diabetic ketoacidosis', 'Glomerulonephritis', 'Pyelonephritis'],
  expl: 'Becky has urinary frequency and abdominal pain that have resolved with no fever or tenderness now, suggesting lower UTI (cystitis). Pyelonephritis is less likely due to the lack of systemic features or loin pain.',
  note: "Key highlighted: yellow box on \"B. Cystitis\". Stem again prints no space before \"What\" (\"tenderness.What\"), as on p.820 -- printed that way, transcribed as-is. No numerals to verify." },

{ n: 3, pr: 3, p: 824,
  key: 2,
  stem: 'Jonathan is an 8-year-old boy with a history of urinary tract infections. He now presents with acute spasmodic pain in the left side of his abdomen, describing it as the worst pain he has ever felt. He played football yesterday but did not sustain any injury. On examination, he is afebrile, his abdomen is soft with no guarding, and he is tender over the left loin. Urinalysis reveals 2+ haematuria, but no protein or leucocytes. What is the most likely cause of his pain?',
  opts: ['Constipation', 'Glomerulonephritis', 'Renal stone', 'Trauma', 'Wilms tumor'],
  expl: 'Severe, colicky loin pain with microscopic hematuria and a history of UTIs strongly suggests a renal stone. The absence of fever and normal abdominal exam makes infection and trauma less likely.',
  note: 'Key highlighted: yellow box on "C. Renal stone". "2+ haematuria" read directly off native image, legible, no crop needed. Explanation box spells "hematuria" without the "ae" used in the stem\'s "haematuria" -- both spellings printed verbatim as they appear.' },

{ n: 4, pr: 4, p: 826,
  key: 2,
  stem: "In Jonathan" + String.fromCharCode(8217) + "s case (see previous question), what is the most likely organism responsible for his previous urinary tract infections?.",
  opts: ['Escherichia coli', 'Klebsiella species', 'Proteus species', 'Pseudomonas aeruginosa', 'Streptococcus faecalis'],
  expl: "Proteus is a urease-producing organism associated with recurrent UTIs and renal stones, especially in boys. It promotes the formation of struvite stones, explaining Jonathan" + String.fromCharCode(8217) + "s current presentation.",
  note: 'Key highlighted: yellow box on "C. Proteus species". This question explicitly refers back to n3\'s vignette ("Jonathan\'s case, see previous question") -- a linked follow-up, not a shared option menu; recorded, not folded (different question, different answer). Stem prints double punctuation "infections?." verbatim, transcribed as-is.' },

{ n: 5, pr: 5, p: 828,
  key: 0,
  stem: "Eesa is a 1-month-old Pakistani infant brought to the GP by his mother due to vomiting and reduced feeding. He is irritable and has a temperature of 39" + String.fromCharCode(176) + "C. His heart rate is 170 beats/min and respiratory rate is 45 breaths/min. The remainder of the examination is unremarkable. A clean-catch urine sample shows nitrites, leucocytes, and protein on dipstick. What is the most appropriate next course of action?",
  opts: ['Intravenous antibiotics', 'Intravenous fluids', 'Oral antibiotics', 'Oral paracetamol', 'Oral rehydration solution'],
  expl: 'A febrile neonate with signs of sepsis and a positive urine dipstick requires hospital admission and IV antibiotics. This age group is at risk for serious bacterial infection and must be treated urgently.',
  note: "Key highlighted: yellow box on \"A. Intravenous antibiotics\". Numerals read directly off native image, legible, no crop needed: temp 39" + String.fromCharCode(176) + "C, HR 170/min, RR 45/min." },

{ n: 6, pr: 6, p: 830,
  key: 3,
  stem: 'Freddie is a 3-year-old boy referred due to facial swelling. His mother suspects a peanut allergy. On examination, he has abdominal distension, bilateral scrotal swelling, and pitting edema of the lower limbs. Urine dipstick shows 4+ protein, 2+ blood, nitrites present, and negative leucocytes. Blood pressure and renal function are normal. Complement levels (C3, C4) are normal. What is the most likely diagnosis?',
  opts: ['Acute allergic reaction to peanuts', 'Acute glomerulonephritis', 'Hemolytic-uraemic syndrome', 'Nephrotic syndrome', 'Urinary tract infection'],
  expl: "Freddie" + String.fromCharCode(8217) + "s generalized edema, heavy proteinuria (4+), and normal renal function and complement levels are typical of nephrotic syndrome. The absence of hypertension and hematuria argues against glomerulonephritis.",
  fig: 'Colour clinical photograph of a young child, head and bare upper chest visible, positioned to the right of the stem, above the explanation box. Face shows marked facial/periorbital swelling with eyes nearly swollen shut, consistent with the stem\'s "facial swelling"; light-coloured hair, indoor setting with a dark background.',
  figAlt: "Colour clinical photograph of a young child" + String.fromCharCode(8217) + "s face and upper chest, showing facial swelling.",
  note: 'Key highlighted: yellow box on "D. Nephrotic syndrome". Numerals read directly off native image, legible, no crop needed: 4+ protein, 2+ blood on dipstick. Option C spells "Hemolytic-uraemic syndrome" (mixed US/UK spelling) exactly as printed.' },

{ n: 7, pr: 7, p: 832,
  key: 4,
  stem: "What is the initial treatment of Freddie" + String.fromCharCode(8217) + "s condition?",
  opts: ['Diuretics', 'Fluid restriction', 'Intravenous human albumin solution 20%', 'Intravenous hydrocortisone', 'Oral prednisolone'],
  expl: 'The first-line treatment for minimal-change nephrotic syndrome is oral corticosteroids like prednisolone. Most children respond well, and other treatments are reserved for non-responders or relapses.',
  note: "Key highlighted: yellow box on \"E. Oral prednisolone\". Linked follow-up to n6 (Freddie" + String.fromCharCode(8217) + "s case) -- recorded, not folded (separate question, separate answer). Numeral 20% read directly off native image, legible, no crop needed." },

{ n: 8, pr: 8, p: 834,
  key: 1,
  stem: 'Finlay, a 5-year-old boy, had a birthday party at a local farm. He now has had 3 days of bloody diarrhea and appears pale. He has not passed urine for 12 hours. On examination, he is pale but normotensive. Lab tests show: Hemoglobin: 76 g/L WBC: 14.2 x 10^9/L Platelets: 50 x 10^9/L Creatinine: 200 ' + String.fromCharCode(181) + 'mol/L PT: 13 sec aPTT: 34 sec What is the most likely diagnosis?',
  opts: ['Acute lymphatic leukaemia', 'Hemolytic-uraemic syndrome', 'Henoch-Sch' + String.fromCharCode(246) + 'nlein purpura', 'Immune thrombocytopenic purpura', 'Post-streptococcal glomerulonephritis'],
  expl: "Finlay" + String.fromCharCode(8217) + "s presentation following bloody diarrhea with anemia, thrombocytopenia, and acute kidney injury is classic for HUS, often caused by Shiga-toxin-producing E. coli after farm visits. It is the most common cause of AKI in children.",
  note: 'Key highlighted: yellow box on "B. Hemolytic-uraemic syndrome". Lab line printed as a row of coloured bullet icons + text, not a clinical photo -- no fig/figAlt needed. Exponent CONFIRMED at 300dpi crop (ep2-stage/p-0834.jpg): both "10' + String.fromCharCode(8313) + '/L" instances are genuine small typeset superscripts, not flat text and not a caret -- transcribed per brief convention as 10^9 in both stem and note. All numerals read at 300dpi: Hb 76 g/L, WBC 14.2 x 10^9/L, Platelets 50 x 10^9/L, Creatinine 200 ' + String.fromCharCode(181) + 'mol/L (Greek mu, confirmed at 300dpi, not "u"), PT 13 sec, aPTT 34 sec, anuria 12 hours.' },

{ n: 9, pr: 9, p: 836,
  key: 2,
  stem: 'Jane, a 5-year-old girl, presents with 4 months of bedwetting, occurring about three times a week. She had previously been dry for almost a year. She also recently started school and had two episodes of wetting during the day. No other symptoms are reported. What is the first investigation you would perform?',
  opts: ['Blood glucose', 'Ultrasound of the abdomen', 'Urine dipstick', 'Urine microscopy and culture', 'Water deprivation test'],
  expl: "The first step in evaluating secondary enuresis is to rule out UTI or diabetes with a simple urine dipstick. Jane's regression after being previously dry, especially with daytime wetting, suggests a possible underlying issue.",
  note: 'Key highlighted: yellow box on "C. Urine dipstick". Explanation box prints a straight apostrophe in "Jane\'s" (unlike the curly marks seen on p.830/832/834), transcribed as printed. No numerals needing a crop.' },

{ n: 10, pr: 10, p: 838,
  key: 3,
  stem: 'Ji, a 12-month-old Japanese girl, presents with a 2-day history of fever and vomiting. She is well-hydrated and has signs of coryza and pharyngitis. A bag urine sample was sent. Results: WBCs 100/mm^3, RBCs negative, organisms not seen, red cell casts absent, culture not available. What is the most likely diagnosis?',
  opts: ['Balanitis', 'Glomerulonephritis', 'Normal result', 'Perineal contamination', 'Urinary tract infection (UTI)'],
  expl: 'A bag-collected urine sample showing high WBCs without organisms or red cells, especially in a child with viral symptoms, suggests contamination rather than true UTI. Bag samples are unreliable and prone to contamination.',
  note: 'Key highlighted: yellow box on "D. Perineal contamination". Unit CONFIRMED at 300dpi crop (ep2-stage/p-0838.jpg): "mm' + String.fromCharCode(179) + '" is a genuine small typeset superscript cubic-unit mark, not flat or caret -- transcribed per brief exponent convention as mm^3.' },

{ n: 11, pr: 11, p: 840,
  key: 4,
  stem: "Harriet, a 12-year-old girl, presents to the Emergency Department with abdominal pain and pain on micturition. A midstream urine sample is obtained and is positive for leucocytes but negative for nitrites. She is started on oral antibiotics and discharged. Forty-eight hours later, the following result from microscopy and culture is received: white blood cells >200/mm^2; red blood cells, many seen; organisms, none seen; red cell casts, none seen; culture, >10^5 coliforms. Which of the following is the most likely diagnosis?",
  opts: ['Balanitis', 'Glomerulonephritis', 'Renal stone', 'Perineal contamination', 'Urinary tract infection (UTI)'],
  expl: "Despite initial negative nitrites, the culture shows >10^5 coliforms, high WBCs, and visible RBCs, confirming a true UTI. Nitrites may be absent if the infection is caused by a non-nitrate-reducing organism or if the urine hasn't been in the bladder long enough.",
  note: 'Key highlighted: yellow box on "E. Urinary tract infection (UTI)". Both exponents CONFIRMED at 300dpi crop (ep2-stage/p-0840.jpg): ">200/mm' + String.fromCharCode(178) + '" and ">10' + String.fromCharCode(8309) + '" are genuine small typeset superscripts (2 and 5), not flat and not carets -- transcribed per brief convention as mm^2 and 10^5. Note: the stem\'s WBC unit prints "mm^2" (area) rather than the expected "mm^3" (volume) -- printed exactly as it reads on the page at 300dpi, not corrected; a likely book typo (per user ruling, defects are recorded, never corrected).' },

{ n: 12, pr: 12, p: 842,
  key: 3,
  stem: 'Gary is a 6-month-old boy who has been febrile for 1 day, is feeding poorly, and has difficulty breathing. On examination, he has a respiratory rate of 60 breaths/min, marked chest recession, and widespread wheeze and fine crepitations on auscultation. He requires admission for oxygen therapy. A urine sample is sent from the Emergency Department, and the results are: white blood cells <50/mm^2; red blood cells, none seen; organisms, none seen; red cell casts, none seen; culture, mixed coliforms. Which of the following is the most likely diagnosis?',
  opts: ['Balanitis', 'Glomerulonephritis', 'Nephrotic syndrome', 'Perineal contamination'],
  expl: 'A mixed growth of coliforms, with low WBCs and no organisms seen on microscopy, indicates a contaminated sample, especially in a child presenting with respiratory symptoms rather than UTI.',
  note: 'Key highlighted: yellow box on "D. Perineal contamination". PAGE GENUINELY PRINTS ONLY 4 OPTIONS (A-D) -- confirmed on both the answered page (native + 300dpi crop ep2-stage/p-0842.jpg) and the unanswered twin p.841, same 4 options, same vertical layout with empty space below D, not a cut-off. Exponent CONFIRMED at 300dpi: "<50/mm' + String.fromCharCode(178) + '" is a genuine small typeset superscript 2, transcribed as mm^2 per convention.' },

{ n: 13, pr: 13, p: 844,
  key: 1,
  stem: 'George, a 7-year-old boy, presents to his family doctor with cloudy urine. He has no other symptoms, and his examination is normal. Urine microscopy and culture reveal: white blood cells 50' + String.fromCharCode(8211) + '100/mm^2; red blood cells, many seen; organisms, none seen; red cell casts seen; culture, negative at 48 hours. Which of the following is the most likely diagnosis?',
  opts: ['Balanitis', 'Glomerulonephritis', 'Nephrotic syndrome', 'Perineal contamination', 'Urinary tract infection (UTI)'],
  expl: 'The presence of red cell casts and microscopic hematuria, with no bacteria growth on culture, is highly suggestive of glomerulonephritis. This indicates a renal, not infectious, cause of hematuria.',
  note: 'Key highlighted: yellow box on "B. Glomerulonephritis". Exponent CONFIRMED at 300dpi crop (ep2-stage/p-0844.jpg): "/mm' + String.fromCharCode(178) + '" is a genuine small typeset superscript 2, transcribed as mm^2. Range printed with an en dash ("50' + String.fromCharCode(8211) + '100"), transcribed as printed.' },

{ n: 14, pr: 14, p: 846,
  key: 4,
  stem: 'Gregor is a 6-week-old baby who has recently moved to the UK from Estonia. He presents with fever and irritability. On examination, he is clinically shocked. A catheterized urine sample is taken urgently, and intravenous antibiotics are started after a saline bolus. Microscopy and culture results are: white blood cells >200/mm^2; red blood cells, none seen; organisms seen on microscopy; red cell casts not seen; culture, >10^5 coliforms. Which of the following is the most likely diagnosis?',
  opts: ['Balanitis', 'Glomerulonephritis', 'Nephrotic syndrome', 'Perineal contamination', 'Urinary tract infection (UTI)'],
  expl: 'A febrile neonate in shock with >200 WBCs, visible organisms, and a high coliform count indicates a serious bacterial UTI. This justifies immediate treatment with IV antibiotics.',
  note: 'Key highlighted: yellow box on "E. Urinary tract infection (UTI)". Both exponents CONFIRMED at 300dpi crop (ep2-stage/p-0846.jpg): ">200/mm' + String.fromCharCode(178) + '" and ">10' + String.fromCharCode(8309) + '" are genuine small typeset superscripts, transcribed as mm^2 and 10^5 per convention -- same "mm^2 for a WBC count" wording as n11/n12, printed exactly as it reads.' },

/* endpoint-p2-s07-renal.part-B.js
   Peds ENDPOINT PART 2, section 7 "Kidney & Urinary Tract Disorders", part B.
   Staged from Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf (READ-ONLY, never modified).
   Range owned by this part: answered pages 848, 850, 852 ... 874 (14 pages), n:15 through n:28.
   n is SECTION-GLOBAL and continues from part A (which was not yet on disk when this part
   started -- see header note below). Images read from a parallel chat's already-extracted
   scratch cache (native JPEG 800x450, one per PDF page) rather than a fresh render, since that
   cache already exists on disk and is the ceiling resolution per the brief (Section 2).
   OCR (content\peds\qb-pages\ocr\ep2\) was NOT opened during this pass -- search index only.

   HEADER NOTE -- disk vs prompt: at the start of this pass, neither
   endpoint-p2-s07-renal.part-A.js nor .part-B.js existed on disk yet (checked by directory
   listing). The task prompt explicitly assigns this part n:15-28, so that numbering is used
   as given rather than derived from a preceding part's last entry (brief Sec.5 fallback did
   not apply because there was nothing to read). p.848 prints "15." as its question number,
   which matches n:15 -- consistent with the prompt's assignment. Flagged for the merge step:
   confirm part A actually ends at n:14 before merging.

   Question-number walk (printed number "pr", page by page):
     n:15 pr:15 p:848
   (extended entry by entry below)
*/

{ n:15, pr:15, p:848, key:3,
  stem:'Max, a 12-year-old boy with cerebral palsy and epilepsy, presents to the Emergency Department with severe right-sided colicky abdominal pain. He has had one similar episode previously that resolved spontaneously. Today, the pain is so severe that he requires morphine. On examination, his abdomen is generally tender. Temperature is 37°C, heart rate is 160 beats/min, and blood pressure is 120/80 mmHg. A urine dipstick reveals haematuria. Which of the following investigations would you perform next?',
  opts:['DMSA scan','Urinary electrolytes','Urine microscopy and culture','Ultrasound of the kidneys and urinary tract'],
  expl:'Severe colicky pain and hematuria point towards a renal stone or obstruction. Ultrasound is the initial investigation of choice to assess for structural or obstructive causes.',
  note:'p.848 answered, highlighted key D boxed. Twin p.847 checked, stem/opts byte-identical. No figure. Printed number "15." matches n:15.' },

{ n:16, pr:16, p:850, key:2,
  stem:'Rosa, a 2-year-old girl, presents to her general practitioner with a 24-hour history of vomiting and fever. Her temperature is 38°C, and she has generalized abdominal tenderness. A dipstick reveals leucocytes and nitrites. Blood pressure is 90/50 mmHg.\nWhich of the following investigations would you perform next?',
  opts:['DMSA scan','Urinary electrolytes','Urine microscopy and culture','Ultrasound of the kidneys and urinary tract','Plasma creatinine and electrolytes'],
  expl:'A child with fever, vomiting, and positive dipstick for nitrites and leukocytes needs confirmation of UTI with microscopy and culture to guide appropriate antibiotic therapy.',
  note:'p.850 answered, highlighted key C boxed, 5 options. Legible clearly at native res, twin not opened. No figure. Printed "16." matches n:16.' },

{ n:17, pr:17, p:852, key:3,
  stem:'Usmaan is an 18-hour-old newborn baby boy undergoing a routine discharge baby check. His notes mention bilateral hydronephrosis and a distended bladder on antenatal ultrasound. His mother is breastfeeding but reports he has not yet passed urine. Blood pressure is normal for a neonate.\nWhich of the following investigations would you perform next?',
  opts:['DMSA scan','Urinary electrolytes','Urine microscopy and culture','Ultrasound of the kidneys and urinary tract','Plasma creatinine and electrolytes'],
  expl:'In a newborn with antenatal hydronephrosis and urinary retention, urgent postnatal renal ultrasound is needed to assess for posterior urethral valves or other obstructive uropathies.',
  note:'p.852 answered, highlighted key D boxed, 5 options. Legible clearly at native res, twin not opened. No figure. Printed "17." matches n:17.' },

{ n:18, pr:18, p:854, key:4,
  stem:'John is a 9-year-old boy with a history of multiple urinary tract infections. An ultrasound shows dysplastic kidneys. At a routine paediatric follow-up, his mother reports he is not growing as well as his siblings. His blood pressure is 130/90 mmHg.\nWhich of the following investigations would you perform next?',
  opts:['DMSA scan','Urinary electrolytes','Urine microscopy and culture','Ultrasound of the kidneys and urinary tract','Plasma creatinine and electrolytes'],
  expl:'Hypertension, poor growth, and dysplastic kidneys suggest chronic kidney disease. Measuring creatinine and electrolytes is crucial to assess renal function and guide further management.',
  note:'p.854 answered, highlighted key E boxed, 5 options. Legible clearly at native res, twin not opened. No figure. Printed "18." matches n:18. SHARED MENU: n:15-18 all reuse the same 4-5 option ladder (DMSA scan / urinary electrolytes / urine microscopy+culture / USS KUB / plasma creatinine+electrolytes) with different discriminating clinical token each time -- n15 renal colic/haematuria->USS, n16 UTI symptoms->microscopy+culture, n17 antenatal hydronephrosis+neonatal retention->USS, n18 dysplastic kidneys+HTN+poor growth (CKD picture)->creatinine+electrolytes. Recorded as a pairing per brief Sec.7, not folded.' },

{ n:19, pr:19, p:856, key:4,
  stem:'A 4-year-old boy presents with a 24-hour history of abdominal and joint pain. He is afebrile. Examination reveals diffuse abdominal tenderness without masses, lymphadenopathy, or hepatosplenomegaly. A widespread purpuric rash is noted over the legs and buttocks. Urine dipstick shows 2+ blood. Routine blood tests are normal.What is the most likely diagnosis?',
  opts:['Idiopathic thrombocytopenic purpura','Meningococcal sepsis','Acute lymphoblastic leukaemia (ALL)','Vitamin C deficiency (scurvy)','Henoch–Schönlein purpura'],
  expl:'This child presents with the classic triad of HSP: palpable purpura, abdominal pain, and joint involvement. The hematuria on dipstick is due to renal involvement common in HSP.',
  note:'p.856 answered, highlighted key E boxed, 5 options. Legible clearly at native res, twin not opened. No figure. Printed "19." matches n:19. "normal.What" printed with no space, transcribed verbatim.' },

{ n:20, pr:20, p:858, key:0,
  stem:'A 9-year-old girl presents with hematuria. She is usually fit and well but was treated for tonsillitis last week. On examination, she has peripheral edema and hypertension. No abdominal mass is found. Urine dipstick is positive for blood and protein.\nWhat is the likely diagnosis?',
  opts:['Post-streptococcal glomerulonephritis','Hemolytic uraemic syndrome','Systemic lupus erythematosus (SLE)','Henoch–Schönlein purpura','Minimal change nephropathy'],
  expl:'Recent streptococcal infection, hematuria, hypertension, and edema point to post-streptococcal glomerulonephritis, a common cause of nephritic syndrome in school-aged children.',
  note:'p.858 answered, highlighted key A boxed, 5 options. Legible clearly at native res, twin not opened. No figure. Printed "20." matches n:20.' },

{ n:21, pr:21, p:860, key:3,
  stem:'A 7-year-old girl presents with edema of the face and legs and abdominal pain. Urine dipstick shows 4+ protein. A diagnosis of nephrotic syndrome is made, and she is started on prednisolone.\nWhat would be the likely finding on biopsy and light microscopy?',
  opts:['Focal-segmental glomerulosclerosis','Mesangiocapillary glomerulonephritis','Crescentic glomerulonephritis','Minimal change disease','Membranous glomerulonephritis'],
  expl:'In children with nephrotic syndrome, the most common histological finding is minimal change disease, which appears normal under light microscopy and responds well to steroids.',
  note:'p.860 answered, highlighted key D boxed, 5 options. Legible clearly at native res, twin not opened. No figure. Printed "21." matches n:21.' },

{ n:22, pr:22, p:862, key:2,
  stem:'An 11-year-old girl presents with 6 days of fever, abdominal pain, and bloody diarrhea. She becomes increasingly irritable and lethargic. Blood tests show: Hb 7.5 g/dL, WCC 15 × 10^9/L, platelets 40 × 10^9/L, urea 9.0 mmol/L, creatinine 200 µmol/L, and red blood cell fragments on blood film.\nWhat is the most likely diagnosis?',
  opts:['Ulcerative colitis','Glucose-6-phosphate dehydrogenase deficiency','Hemolytic uraemic syndrome','Dehydration','Viral gastroenteritis'],
  expl:'This child has the classic triad of HUS: anemia, thrombocytopenia, and renal impairment following bloody diarrhea. The presence of RBC fragments on blood film supports microangiopathic hemolytic anemia.',
  note:'p.862 answered, highlighted key C boxed, 5 options. Escalated to 300dpi crop (p-0862.jpg) to check the exponent glyphs on both WCC and platelet counts -- confirmed genuine typeset superscript "10⁹" both times (not a caret, not flat), transcribed per convention as "10^9". No figure.' },

{ n:23, pr:23, p:864, key:3,
  stem:'A 3-month-old baby girl presents with a fever of 38.6°C, crying, and vomiting. A urine dipstick shows white cells and protein.\nWhich organism is most likely responsible for her urinary tract infection?',
  opts:['Enterococcus spp.','Pseudomonas','Proteus','Escherichia coli','Klebsiella'],
  expl:'E. coli is the most common cause of urinary tract infections (UTIs) in infants and children due to its ability to adhere to the uroepithelium. The presence of fever, vomiting, and white cells in the urine strongly supports a diagnosis of UTI in this 3-month-old.',
  note:'p.864 answered, highlighted key D boxed, 5 options. Legible clearly at native res, twin not opened. No figure. Printed "23." matches n:23.' },

{ n:24, pr:24, p:866, key:4,
  stem:'A 2-month-old girl is brought to the clinic after an admission for a urinary tract infection. When discussing the case with her mother, which of the following statements regarding UTI is true?',
  opts:['It is more common in girls under the age of 3 months','Can be diagnosed with >10^5 white blood cells/mL urine','Presents with specific urinary features in young children','Is most commonly due to enterococci','The risk is increased by constipation'],
  expl:'Constipation can contribute to UTIs in young children by causing bladder outlet obstruction or incomplete voiding, leading to urinary stasis. Although UTIs are more common in boys under 3 months, in general, constipation is a well-established modifiable risk factor.',
  note:'p.866 answered, highlighted key E boxed, 5 options. Escalated to 300dpi crop (p-0866.jpg) to check the option B exponent -- confirmed genuine typeset superscript "10⁵", transcribed as "10^5" per convention. No figure.' },

{ n:25, pr:25, p:868, key:2,
  stem:'A 6-year-old boy is diagnosed with nephrotic syndrome and admitted to start steroid therapy and be monitored for complications.\nWhich of the following complications is he unlikely to be at risk of?',
  opts:['Bacterial infection','Hypovolaemia','Reduced glucose tolerance','Pleural effusion','Pulmonary embolus'],
  expl:'Nephrotic syndrome is associated with complications such as hypovolemia, infections, thromboembolism, and effusions due to massive protein loss. Reduced glucose tolerance is not typically a complication unless high-dose corticosteroids are used for prolonged periods.',
  note:'p.868 answered, highlighted key C boxed, 5 options. Legible clearly at native res, twin not opened. No figure. Printed "25." matches n:25.' },

{ n:26, pr:26, p:870, key:2,
  stem:'A newborn baby girl is born after a pregnancy complicated by oligohydramnios and bilateral talipes. She requires ventilation for pulmonary hypoplasia and fails to pass urine in the first 24 hours of life.\nWhich of the following is the likely cause?',
  opts:['Nephrotic syndrome','Posterior urethral valves','Bilateral renal agenesis','Autosomal dominant polycystic kidney disease','Duplex kidney'],
  expl:'Bilateral renal agenesis leads to severe oligohydramnios in utero, resulting in Potter sequence features like pulmonary hypoplasia and limb deformities (e.g., talipes). The absence of kidneys also explains the failure to pass urine postnatally.',
  note:'p.870 answered, highlighted key C boxed, 5 options. Legible clearly at native res, twin not opened. No figure. Printed "26." matches n:26. Baby is female with posterior urethral valves listed as a distractor (PUV is a male-only condition) -- printed as-is, not remarked on further.' },

{ n:27, pr:27, p:872, key:1,
  stem:'A 4-years old male child developed an upper respiratory tract infection that was followed in a 2-weeks by generalized edema. His blood pressure is normal, urinalysis reveal 2 to 5 RBC/HPF and 4+ protein. His serum urea is 9 mg/dl (normal), creatinine 0.6 mg/dl (normal), ASOT 200 (normal) and C3 is normal.\nThe most likely diagnosis would be:',
  opts:['Post streptococcal glomerulonephritis','Nephrotic syndrome','Membranoproliferative glomerulonephritis','Pyelonephritis','Hemolytic uremic syndrome'],
  expl:'The child has generalized edema, heavy proteinuria (4+), and normal renal function with normal complement, which is typical of nephrotic syndrome. Post-streptococcal GN usually shows low C3 and hypertension, which are absent here.',
  note:'p.872 answered, highlighted key b boxed (this page prints options lowercase a-e, unlike the A-E style of the rest of this range). Twin p.871 checked, stem/opts byte-identical including all numeric values (urea 9 mg/dl, creatinine 0.6 mg/dl, ASOT 200) -- no exponents on this page. No figure. Printed "27." matches n:27.' },

{ n:28, pr:28, p:874, key:1,
  stem:'A 7-year-old girl is seen with a 2-day history of Lever and abdominal pain. Her mother has noted that she is going to the toilet to pass urine more often than usual. On examination she is now afebrile, has normal heart rate and respiratory rate and has no abdominal tenderness. What is the most likely diagnosis?',
  opts:['Appendicitis','Cystitis','Diabetic ketoacidosis','Glomerulonephritis','Pyelonephritis'],
  expl:'The child has urinary frequency and abdominal pain with no fever or systemic signs, suggesting a lower urinary tract infection (cystitis). Pyelonephritis would present with fever and systemic illness.',
  note:'p.874 answered, highlighted key b boxed (lowercase a-e style again, like p.872). Legible clearly at native res, twin not opened. No figure. Printed "28." matches n:28. "Lever" printed for "Fever", transcribed verbatim. This is the last entry of my assigned range (n:15-28, pages 848-874).' },

/* Peds ENDPOINT PART 2 — Section 7 "Kidney & Urinary Tract Disorders", PART C (staging half).
 * Source: Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf (READ-ONLY, never modified).
 * This agent's range: n:29..n:42, PDF pages 876,878,880,882,884,886,888,890,892,894,896,898,900,902
 * (14 answered pages, per the task prompt's index.json measurement: section 7 spans pp.793-929,
 * 55 answered pages = the even numbers 820..928, no interruption/notes block observed yet in this
 * range). n is SECTION-GLOBAL and continues from part B (not verified on disk — part-A/part-B files
 * did not exist at the time this part was started; see header note below).
 *
 * Renders: pdftoppm -png -r 150 (and -r 300 crops on demand) to the session scratchpad, NOT
 * committed anywhere. OCR at content\peds\qb-pages\ocr\ep2\ was NOT opened for transcription -
 * search index only, per the brief.
 *
 * This is a STAGING HALF: bare `{ ... }` object literals separated by one blank line, NO array
 * wrapper, NO commas between entries. `node --check` on this file WILL fail meaninglessly - use
 * tools/bank-harness/check-part-ep.js instead.
 *
 * ⚠️ DISK NOTE: the pre-rendered <SCRATCH>\ep2-index\native\ and \hires\ image caches described in
 * the brief (section 2, "images are already extracted") do NOT exist anywhere on this machine -
 * searched every claude scratch session dir, none contain ep2-index. Rendered fresh via pdftoppm
 * into this session's own scratchpad instead (ep2-stage\). Reported to parent.
 *
 * ⚠️ DISK NOTE 2: part-A and part-B files for this section (endpoint-p2-s07-renal.part-A.js /
 * .part-B.js) do not exist on disk yet either, so the "read the last entry of the preceding part"
 * check in the brief could not be performed. Proceeding with the assigned n:29 start per the task
 * prompt, since it is internally consistent (n:29 = p.876 = 820 + 28*2, matching a straight
 * odd-unanswered/even-answered alternation from n:1=p.820) and p.876 itself prints "29." as its
 * question number, confirming the assignment. Flagged to parent regardless.
 *
 * Header measurements, extended as staging proceeds:
 * - p.876 (n:29): printed "29.", key highlighted = option a "Renal stones". Confirms alternation
 *   n:29 -> p.876 and pr==n at the start of this range.
 * - Straight even=answered/odd=unanswered-twin alternation and pr==n held with NO break across
 *   the whole n:29..n:42 range (p.876..p.902). No overflow boxes (box:<page>), no figures, no
 *   shared-menu pairs found in this range.
 * ⚠️ BOUNDARY FINDING at p.903 (one page past this part's range, rendered per the brief's
 * boundary-proof rule): p.903 is the unanswered twin for the NEXT question, and it prints "42."
 * again -- a DIFFERENT stem ("Harriet, a 12-year-old girl... UTI/perineal contamination"
 * question) reusing the same printed number "42" as THIS part's own n:42/pr:42 ("Fady... HUS"
 * question, p.902). This is a printed duplicate-number collision in the book itself, not a
 * render or transcription artefact (both p.902 and p.903 show "42." clearly at 150dpi). Left
 * for the next part (owns p.904, the answered printing of the Harriet/UTI question) to stage and
 * flag its own pr accordingly -- this part's own numbering (n:29..42, pr:29..42) is unaffected
 * and internally consistent throughout.
 */

{ n:29, pr:29, p:876, key:0,
  stem:'Glomerular causes of hematuria include all of the following except:',
  opts:['Renal stones','IgA nephropathy','Post-streptococcal glomerulonephritis','Alport syndrome'],
  expl:'enal stones cause hematuria but are not a glomerular cause. Glomerular causes include IgA nephropathy, PSGN, and Alport syndrome.',
  note:'Read at 150dpi and confirmed at 300dpi (p-0876.png / hi-0876.png in scratch): the explanation box genuinely prints "enal stones..." with no left padding before the box border -- the initial "R" of "Renal" is missing on the page itself, not a render clip (same at both resolutions, text sits flush against the box edge). Staged verbatim as printed. Twin (unanswered) p.875 checked, identical stem/options. Key highlighted: option a "Renal stones", bold+underlined+yellow.' },

{ n:30, pr:30, p:878, key:3,
  stem:'Iman is a 2-year-old girl. She presents to the Emergency Department with a 2-day history of fever and vomiting, limping, and "smelly" urine. She has no significant medical history and is not on any medication. On examination she has a temperature of 39°C and has a heart rate of 126 beats/min. She has generalized tenderness over her abdomen. What is the best way to collect a urine sample from her?',
  opts:['Bag sample','Catheter sample','Pad/cotton wool balls in nappy','Clean catch','Suprapubic aspirate'],
  expl:'This involves waiting with a sterile bowl to catch the urine. It is the least invasive and has less risk of contamination. The child is well enough to wait before starting treatment and you want to be sure that you are actually treating a urinary tract infection. The smell of urine is an unreliable sign of genuine infection.',
  note:'Twin p.877 checked, identical stem/options. Key highlighted: option d "Clean catch", bold+underlined+yellow. Temperature/heart rate figures read clearly at 150dpi, no crop needed.' },

{ n:31, pr:31, p:880, key:2,
  stem:'11-month-old presenting to Emergency department with rapidly rising fever and vomiting and ill. Urine analysis shows leukocyte esterase positive, 25 WBCs/HPF, moderate bacteria. What is the best NEXT step?',
  opts:['Administer IV broad spectrum antibiotics','Perform CT abdomen and pelvis','Obtain culture then consider starting antibiotics','Obtain renal ultrasound'],
  expl:'The 11-month-old is acutely ill with fever, vomiting, and positive urine findings → start IV antibiotics immediately after sending culture to prevent sepsis.',
  note:'Twin p.879 checked, identical stem/options. Key highlighted: option c "Obtain culture then consider starting antibiotics", bold+underlined+yellow. Explanation box prints a right-arrow glyph (→), kept verbatim in expl rather than substituted with ASCII.' },

{ n:32, pr:32, p:882, key:0,
  stem:'Regarding post-streptococcal glomerulonephritis (PSGN), all are true except:',
  opts:['Increased C3','Hematuria is common','Occurs after a streptococcal throat infection','Usually self-limiting'],
  expl:'In PSGN, C3 is low due to complement consumption. The condition is usually self-limiting, and hematuria is common',
  note:'Twin p.881 checked, identical stem/options. Key highlighted: option a "Increased C3", bold+underlined+yellow. Explanation box prints no closing period after "hematuria is common" -- transcribed verbatim.' },

{ n:33, pr:33, p:884, key:0,
  stem:'The most common causative organism of urinary tract infection (UTI) is:',
  opts:['E. coli','Staphylococcus aureus','Klebsiella','Enterococcus'],
  expl:'E. coli causes about 80–90% of pediatric UTIs. Other organisms like Klebsiella and Enterococcus are less common.',
  note:'Twin p.883 checked, identical stem/options. Key highlighted: option a "E. coli", bold+underlined+yellow. "80-90%" printed with an en dash, kept verbatim.' },

{ n:34, pr:34, p:886, key:2,
  stem:'A 5-year-old boy presents with marked periorbital edema and pitting edema of the lower limbs for 1 week. Two days before admission, edema extended to the abdominal wall and scrotum. History and clinical examination were otherwise unremarkable. What is the most important complication of this condition?',
  opts:['Hypertensive encephalopathy','Heart failure','Spontaneous bacterial peritonitis','Malnutrition'],
  expl:'Nephrotic syndrome patients are at high risk of infections due to urinary loss of immunoglobulins, especially SBP.',
  note:'Twin p.885 checked, identical stem/options. Key highlighted: option c "Spontaneous bacterial peritonitis", bold+underlined+yellow.' },

{ n:35, pr:35, p:888, key:0,
  stem:'George is a 7-year-old boy who presents to his family doctor with cloudy urine. He has no other symptoms, and his examination is normal. You obtain the following result from the microscopy and culture: white blood cells 50-100/mm3; red blood cells, many seen; organisms, none seen; red cell casts seen; culture, negative at 48 hours. What is the most likely diagnosis?',
  opts:['Glomerulonephritis','Urinary tract infection','Nephrotic syndrome','Kidney stones'],
  expl:'Red cell casts and hematuria with sterile culture indicate glomerular disease rather than infection.',
  note:'Twin p.887 checked, identical stem/options. Key highlighted: option a "Glomerulonephritis", bold+underlined+yellow. "mm3" checked at 300dpi on both p.887 and p.888 (hi-0887.png) -- printed completely flat, no superscript glyph and no caret; transcribed as printed, per the brief\'s rule that a flat exponent/unit is never "restored". "50-100" also uses a plain hyphen, not an en dash, on this page (contrast n:33\'s en dash) -- kept as printed.' },

{ n:36, pr:36, p:890, key:3,
  stem:'Which of the following is not a common pathogen in UTI?',
  opts:['E.coli','Klebsiella','S.Faecalis','Staph aureus'],
  expl:'UTI is usually caused by E. coli, Klebsiella, or Enterococcus; Staph aureus is rare.',
  note:'Twin p.889 checked, identical stem/options. Key highlighted: option d "Staph aureus", bold+underlined+yellow. Options print "E.coli" and "S.Faecalis" with no space after the period (contrast expl box, which prints "E. coli" with a space) -- both kept exactly as printed.' },

{ n:37, pr:37, p:892, key:4,
  stem:'Acute glomerulonephritis is characterized by the following EXCEPT:',
  opts:['Urine volume: < 400 ml/m2/day','Hypertension','Hematuria and RBCs casts','+serum urea and creatinine','Urinary protein > 1 g/m2/24 h'],
  expl:'Acute GN usually has mild to moderate proteinuria, not nephrotic-range (>1 g/m²/24h). Other features (oliguria, HTN, hematuria, raised urea/creatinine) are typical.',
  note:'Twin p.891 checked, identical stem/options, five options (a-e), a genuine 5-option question, not a reader artefact. Key highlighted: option e "Urinary protein > 1 g/m2/24 h", bold+underlined+yellow. ⚠️ Checked both pages at 300dpi (hi-0892.png): the stem/options print "m2" completely flat on this page, but the explanation box on the SAME page prints a real superscript "m²" -- a within-page mismatch, not a render artefact. Transcribed each field exactly as its own printing shows: opts keep "m2" flat, expl keeps the printed "m²". Per the brief\'s rule, neither is "restored" to match the other.' },

{ n:38, pr:38, p:894, key:2,
  stem:'The classical clinical presentation of minimal change nephrotic syndrome DOES NOT include:',
  opts:['A child aged between 2-6 years','Normal blood pressure','Abnormal kidney function tests','Serum cholesterol and triglycerides','Response to corticosteroid therapy'],
  expl:'Minimal change nephrotic syndrome usually has normal renal function, normal BP, and responds well to steroids.',
  note:'Twin p.893 checked, identical stem/options, five options (a-e). Key highlighted: option c "Abnormal kidney function tests", bold+underlined+yellow.' },

{ n:39, pr:39, p:896, key:1,
  stem:'Which of the following statements is true about most nephrotic syndromes?',
  opts:['Hematuria is a common feature','They rarely cause chronic renal failure','Low C3 level is typically seen','Always present with hypertension'],
  expl:'Most nephrotic syndromes in children, especially minimal change disease, resolve without causing chronic kidney disease.',
  note:'Twin p.895 checked, identical stem/options. Key highlighted: option b "They rarely cause chronic renal failure", bold+underlined+yellow.' },

{ n:40, pr:40, p:898, key:0,
  stem:'A 17-year-old girl had mild fever, increased frequency of urination, and abdominal pain a few days ago. She is now afebrile and asymptomatic. What is the most likely diagnosis?',
  opts:['Cystitis','Pyelonephritis','Glomerulonephritis','Nephrolithiasis'],
  expl:'The girl had fever and urinary symptoms that resolved, leaving her asymptomatic → consistent with a self-limited lower UTI.',
  note:'Twin p.897 checked, identical stem/options. Key highlighted: option a "Cystitis", bold+underlined+yellow. Explanation box prints a right-arrow glyph (→), kept verbatim as in n:31.' },

{ n:41, pr:41, p:900, key:0,
  stem:'The most common complication of minimal change nephrotic syndrome is',
  opts:['Repeated infections','Acute renal failure','Bleeding tendency','Cerebral strokes','Hypertension'],
  expl:'Children with minimal change nephrotic syndrome are prone to infections due to urinary immunoglobulin loss.',
  note:'Twin p.899 checked, identical stem/options, five options (a-e). Key highlighted: option a "Repeated infections", bold+underlined+yellow.' },

{ n:42, pr:42, p:902, key:1,
  stem:'Fady, a 5-year-old boy. He has had 3 days of diarrhea. The loose stool had some blood in it. He appears to be very pale and has not passed urine for 12 hours. He has no other medical problems and is not normally on any medication. On examination you note that he has pale conjunctivae. His blood pressure is 120/70 mmHg. You decide to take tests and get the following results: some blood hemoglobin: 7.5 g/dl; white blood cells: 14,200/ml; platelet count: 50000/ml; creatinine: 1.5 mg/dl (normal: < 0.8 mg/dl) PT & PTT are normal. What is the most likely diagnosis?',
  opts:['Acute lymphoblastic leukemia','Hemolytic-uremic syndrome','Henoch-Schonlein purpura','Immune thrombocytopenic purpura','Post streptococcal glomerulonephritis'],
  expl:'Child with bloody diarrhea, anemia, thrombocytopenia, and acute renal failure has the classic triad of HUS.',
  note:'Twin p.901 checked, identical stem/options, five options (a-e). Key highlighted: option b "Hemolytic-uremic syndrome", bold+underlined+yellow. Numerals (7.5 g/dl, 14,200/ml, 50000/ml, 1.5 mg/dl, <0.8 mg/dl, 120/70 mmHg) all read clearly at 150dpi on both pages, no crop needed. Last entry in this agent\'s assigned range (n:29..n:42).' },

/* endpoint-p2-s07-renal.part-D.js
   Peds ENDPOINT PART 2, section 7 "Kidney & Urinary Tract Disorders", part D.
   Staged from Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf (READ-ONLY, never modified).
   Range owned by this part: answered pages 904, 906, 908 ... 928 (13 pages), n:43 through n:55.
   n is SECTION-GLOBAL and continues from part C. At the start of this pass, part C did NOT
   exist on disk (checked by directory listing: only part-A.js and part-B.js present, part-A
   ends n:14, part-B ends n:28). The task prompt explicitly assigns this part n:43-55, so that
   numbering is used as given; part C's own range (n:29-42, pp.876-902) is not staged or
   verified here. FLAGGED FOR MERGE: confirm part C actually ends at n:42 before merging.
   Images rendered fresh with pdftoppm -jpeg -r150 into this agent's own scratchpad (no shared
   ep2-index cache was found for this session); pages 903-931 rendered (twins + boundary check).
   OCR (content\peds\qb-pages\ocr\ep2\) was NOT opened during this pass -- search index only.

   Question-number walk (printed number "pr", page by page):
     n:43 pr:42 p:904 | n:44 pr:43 p:906 | n:45 pr:44 p:908 | n:46 pr:45 p:910 |
     n:47 pr:46 p:912 | n:48 pr:47 p:914 | n:49 pr:48 p:916 | n:50 pr:49 p:918 |
     n:51 pr:50 p:920 | n:52 pr:51 p:922 | n:53 pr:52 p:924 | n:54 pr:53 p:926 |
     n:55 pr:54 p:928
   Printed number runs exactly one behind n throughout this part (pr = n-1 for
   every one of the 13 entries) -- a steady offset, not drift; recorded per entry, not corrected.

   Boxless page: n:49 (p.916) prints a highlighted key but NO explanation box. Per brief Sec.3,
   opened next page (p.917) before moving on: p.917 is the plain UNANSWERED printing of the
   NEXT question (pr:49), not an overflow box, not a teaching slide, not a duplicate reprint.
   So n:49 is a genuine boxless question and expl was left ''.

   Twin divergence: n:50 (p.918) -- the unanswered twin p.917 prints the stem with a doubled
   word ("Non-glomerular cause cause of hematuria..."), the answered page p.918 prints it once
   ("Non-glomerular cause of hematuria..."). Staged from the answered page (single "cause") per
   brief; the doubled-word twin is recorded as a finding in that entry's note, not corrected.

   No figures anywhere in this part's 13 pages -- measured by looking at every one of the 13
   answered pages (904-928) and both members of each twin pair (903-927 odd) whole; none carries
   an image, diagram or photograph. Zero is a measured zero, not an absence of looking.

   No same-question duplicates and no shared option menus observed across n:43-55 (each of the
   13 stems and option ladders is distinct).

   CLOSING BOUNDARY CHECK (section 7 spans pp.793-929 per prompt; this part's last page is 928):
   rendered and read pp.929, 930, 931.
     - p.929: an Arabic supplication / prayer graphic (two short duas on a grey background,
       decorative, no stem, no options, no question content of any kind). Not a question, not an
       overflow explanation box -- a closing slide, matching the "duplicate reprint" trap shape
       described in the brief for a different section (a non-question page that could be mistaken
       for content). NOT STAGED.
     - p.930: section banner "Neurological disorders" (red bold title on the cream card),
       confirming section 8 opens here.
     - p.931: teaching slide "Headaches" (classification, red-flag bullet list) -- ordinary
       section-8 theory content, not a question.
   CONCLUSION: p.928 (n:55, pr:54) really is section 7's last question. No question sits at
   p.929 or beyond; the section boundary given in the prompt (pp.793-929, section 7 ends before
   the p.930 banner) holds. Nothing outside n:43-55 was staged.
*/

{ n:43, pr:42, p:904, key:3,
  stem:'Harriet, a 12-year-old girl, presents to the Emergency Department. She has abdominal pain and pain on micturition. A mid-stream urine sample is obtained and is positive for leucocytes but negative for nitrites. She was started on oral antibiotics and discharged. 48 hours later you receive the following result from the microscopy and culture: white blood cells >200/mm3; red blood cells, many seen; organisms, none seen; red cell casts, none seen; culture, >100000 coliforms. What is your diagnosis?',
  opts:['Normal result','Perineal contamination','Renal stone (calculi)','Urinary tract infection'],
  expl:"This girl had a 'false negative' on her dipstick test. The clinical story is very important for diagnosing urinary tract infection in this age group. The culture 48 hours later confirms the presence of coliforms.",
  note:'p.904 answered, highlighted key D boxed. Twin p.903 checked, stem/opts byte-identical. No figure. Printed "42." does not match n:43 (expected drift, printed numbering runs its own count -- recorded, not corrected).' },

{ n:44, pr:43, p:906, key:3,
  stem:'Red urine is NOT a feature in:',
  opts:['Nephritis','Henoch Schönlein purpura','Favism','Congestive heart failure','Administration of rifampicin'],
  expl:'Red urine occurs in nephritis, HSP, favism, or drugs (rifampicin), but not in CHF.',
  note:'p.906 answered, highlighted key D boxed, 5 options. Twin p.905 checked, stem/opts byte-identical. No figure. Printed "43." matches n:44.' },

{ n:45, pr:44, p:908, key:0,
  stem:'Which of the following is commonly associated with secondary enuresis?',
  opts:['Emotional upset','Ectopic ureter','Posterior urethral valves','Neurogenic bladder'],
  expl:'Secondary enuresis (child was previously dry) is usually due to psychological stress, unlike primary enuresis which may have anatomical causes.',
  note:'p.908 answered, highlighted key A boxed. Twin p.907 checked, stem/opts byte-identical. No figure. Printed "44." matches n:45. Per chapter-rulings.md ruling 7, enuresis is renal-cakut for the later drafting pass.' },

{ n:46, pr:45, p:910, key:3,
  stem:'Steroid sensitive nephrotic all true except:',
  opts:['Age 1-10 years','Normal blood pressure','Normal renal function','No microscopic hematuria'],
  expl:'Steroid-sensitive nephrotic syndrome can have microscopic hematuria, so this is not always true.',
  note:'p.910 answered, highlighted key D boxed. Twin p.909 checked, stem/opts byte-identical. No figure. Printed "45." matches n:46.' },

{ n:47, pr:46, p:912, key:1,
  stem:'Which of the following is true about most nephrotic syndromes?',
  opts:['Hematuria','Rarely cause chronic renal failure','Low C3 level','Always present with hypertension'],
  expl:'Most childhood nephrotic syndromes, especially minimal change, resolve without progressing to CKD.',
  note:'p.912 answered, highlighted key B boxed. Twin p.911 checked, stem/opts byte-identical. No figure. Printed "46." matches n:47.' },

{ n:48, pr:47, p:914, key:3,
  stem:'A 1-year-old girl has recently been diagnosed and treated for urinary tract infection. Investigation shows that she has a vesicoureteral reflux. Which of the following is the IDEAL antibiotic prophylaxis in this child?',
  opts:['Monthly IM penicillin','Daily oral cephalexin','Daily oral erythromycin','Daily oral co-trimoxazole','Weekly IV gentamicin'],
  expl:'For vesicoureteral reflux in children, low-dose daily oral antibiotics (co-trimoxazole or nitrofurantoin) are used for prophylaxis.',
  note:'p.914 answered, highlighted key D boxed, 5 options. Twin p.913 checked, stem/opts byte-identical. No figure. Printed "47." matches n:48.' },

{ n:49, pr:48, p:916, key:3,
  stem:'Which of the following is not a common pathogen in UTI?',
  opts:['E coli','Klebsiella','Faecalis','Staph aureus'],
  expl:'',
  note:'p.916 answered (key D highlighted), prints NO explanation box. Per brief Sec.3, opened next page (p.917) before moving on: p.917 is the UNANSWERED printing of the next question (pr:49, no highlight) -- not an overflow box, not a teaching slide, not a duplicate. So p.916 is a genuine boxless question, expl left empty. Twin p.915 checked, stem/opts byte-identical. No figure. Printed "48." matches n:49.' },

{ n:50, pr:49, p:918, key:1,
  stem:'Non-glomerular cause of hematuria includes all of the following EXCEPT:',
  opts:['Infection','Henoch-Schönlein purpura (HSP)','Stones','Sickle cell disease'],
  expl:'1. Non-glomerular causes\n•Infections: Bacterial, viral, tuberculosis, schistosomiasis\n•Trauma: To the genitalia, urinary tract, or kidneys\n•Structural/other causes: Stones, tumors, sickle cell disease\n•Systemic causes: Bleeding disorders, renal vein thrombosis, hypercalciuria\n2. Glomerular causes\n•Postinfectious glomerulonephritis\n•Henoch–Schönlein purpura (HSP) and other vasculitides\n•IgA nephropathy\n•Genetic disorders of the basement membrane: Alport syndrome, thin basement membrane disease',
  note:'p.918 answered, highlighted key B boxed, box is a two-part bulleted list (non-glomerular vs glomerular causes), transcribed verbatim with line breaks. TWINS DIFFER: p.917 (unanswered) prints the stem with a doubled word, "Non-glomerular cause cause of hematuria..."; p.918 (answered, staged here) prints it once, "Non-glomerular cause of hematuria...". Staged from the answered page per brief (single "cause"), doubled-word twin recorded here as the finding. Opts byte-identical on both pages. No figure. Printed "49." matches n:50.' },

{ n:51, pr:50, p:920, key:2,
  stem:'An 11-month-old presents with rapidly rising fever, vomiting, and appears ill. Urinalysis shows leukocyte esterase positive, 25 WBCs/HPF, and moderate bacteria. What is the next best step?',
  opts:['Administer IV broad-spectrum antibiotics','Perform CT abdomen and pelvis','Obtain culture then consider starting antibiotics','Obtain renal ultrasound'],
  expl:'The 11-month-old is acutely ill with fever, vomiting, and positive urine findings → start IV antibiotics immediately after sending culture to prevent sepsis.',
  note:'p.920 answered, highlighted key C boxed. Twin p.919 checked, stem/opts byte-identical. Box contains a printed arrow glyph "→", transcribed as printed. No figure. Printed "50." matches n:51.' },

{ n:52, pr:51, p:922, key:0,
  stem:'Sudden onset of edema starting in eyelids, then lower limbs, then ascites is most likely due to:',
  opts:['Renal disease','Hepatic disease','Allergy','Cardiac disease'],
  expl:'Nephrotic syndrome typically begins with periorbital edema that progresses to generalized edema and ascites.',
  note:'p.922 answered, highlighted key A boxed. Twin p.921 checked, stem/opts byte-identical. No figure. Printed "51." matches n:52.' },

{ n:53, pr:52, p:924, key:0,
  stem:'A 3-year-old child develops puffy eyes and lower limb and scrotal edema following an upper respiratory tract infection. What is the most probable diagnosis?',
  opts:['Steroid-sensitive nephrotic syndrome','Acute post-streptococcal glomerulonephritis','Congenital nephrotic syndrome','Cardiac failure'],
  expl:'A 3-year-old with puffy eyes and edema after infection fits classic presentation of minimal change nephrotic syndrome.',
  note:'p.924 answered, highlighted key A boxed. Twin p.923 checked, stem/opts byte-identical. No figure. Printed "52." matches n:53.' },

{ n:54, pr:53, p:926, key:0,
  stem:'What is a major complication of minimal change nephrotic syndrome?',
  opts:['Thrombosis','Hypertensive encephalopathy','Chronic renal failure','Hematuria'],
  expl:'Nephrotic syndrome causes hypercoagulability due to urinary loss of antithrombin III, leading to thrombosis risk.',
  note:'p.926 answered, highlighted key A boxed. Twin p.925 checked, stem/opts byte-identical. No figure. Printed "53." matches n:54.' },

{ n:55, pr:54, p:928, key:0,
  stem:'A 4-month-old girl presents with a urinary tract infection and a positive dipstick test. What is the next step?',
  opts:['Clean catch for urine culture','Suprapubic aspiration','Start antibiotics immediately without culture','Renal ultrasound'],
  expl:'In infants with a positive dipstick suggesting UTI, a urine culture must be obtained to confirm the diagnosis and guide antibiotics. A clean catch specimen is the preferred method in a 4-month-old, while suprapubic aspiration is reserved for cases where clean catch is not possible. Renal ultrasound is done later after diagnosis, not as the first step',
  note:'p.928 answered, highlighted key A boxed. Twin p.927 checked, stem/opts byte-identical. No figure. Printed "54." matches n:55. This is the last entry owned by part D (n:43-55, pp.904-928). Box text transcribed verbatim including the missing terminal period after "first step".' }

];
