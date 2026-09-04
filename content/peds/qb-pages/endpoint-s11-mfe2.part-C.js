/* ENDPOINT part1 -- Model Final Exam 2 -- staging half C (questions n41..n60).
   Source: "Pediatrics endpoint part1.pdf" (Semester 8\Pedo\Questions\, read-only, never modified).
   Answered pages p:1404,1406,1408,1410,1412,1414,1416,1418,1420,1422,1424,1426,1428,1430,1432,1434,
   1436,1438,1440,1442 (task-supplied list, measured from content/peds/qb-pages/ocr/ep1/index.json
   2026-09-04) -- a clean +2 step throughout. Every question in this exam prints twice (blank exam
   page, then answered page carrying the yellow-highlighted key and usually a bordered explanation
   box); staging is from the answered pages ONLY, per task instructions. Continues directly from
   endpoint-s11-mfe2.part-B.js (n21..n40, pp.1364-1402); do not edit that sibling file.
   PDF is 1:1, NOT 2-up -- brief pd-staging-brief.md Section 2's 2-up folio arithmetic does NOT
   apply here, per task override 1.
   key is a ZERO-BASED INDEX into opts (integer), never a letter -- per task override 2, this
   differs from the House-bank brief Section 7.
   Per task override 3: Paediatric surgery topics are IN SCOPE for this book -- the House-bank
   Section 11a exclusion does not apply here.
   OCR at content/peds/qb-pages/ocr/ep1/p<NNNN>.txt NOT opened during this staging pass, per brief
   Section 4 / task instructions.
   Every numeral, unit, dose, exponent and every answer-key highlight position is read off a
   600 dpi band crop, never off a 300 dpi full render, per task instructions.
   Per task override 5: a box overflowing onto the next sheet while stem/options/key sit on one
   sheet is recorded via a `box` field and described in the note WITHOUT the word "straddle" --
   only a stem/options span across sheets gets straddle:true + the uppercase marker.
   CLOSED 2026-09-04 -- all 20 entries staged, n41..n60 complete, pp.1404-1442, contiguous n and
   strictly increasing p throughout. check-part-ep.js: 20 entries, option counts {4:3,5:17}, key
   positions {0:2,1:3,2:4,3:5,4:6}, no empty expl, no pr!=n, no figures, "OK" with 0 FAILED. No
   suspected duplicates noticed within this half (n41-n60) during staging; NOT cross-checked
   exhaustively against part-B (n21-n40) topic-by-topic -- a spot check on the one topic that
   looked similar (n58 EBV mono vs part-B n38) found no match (n38 is stunting/growth charts), but
   this is a single spot check, not a sweep, and should not be read as "no duplicates exist." No
   straddles found in this range (measured, not assumed -- every page's stem/options/key fit on
   one sheet). No true box overflows found (measured). Five layout variants found where the
   explanation box sits beside rather than below the options while everything still fits one page:
   n52, n53, n56, n59 (n52/n56/n59 beside options C-D, n53 beside options D-E) -- classified as
   layout variants per task override 5, none is a straddle or a box overflow. No figures on any of
   these 20 pages (measured -- each page examined as a whole via 300 dpi full-page render before
   any 600 dpi crop). No shared option menus found pairing two of these questions. */

{ n: 41, pr: 41, p: 1404,
  key: 4,
  stem: 'How would you manage a choking child with mild airway obstruction?',
  opts: ['Start early CPR', 'Give 5 abdominal thrusts', 'Do 5 back blows', 'Give 5 chest thrusts', 'Encourage cough'],
  expl: 'If the child has mild obstruction and can cough effectively, the best management is to encourage coughing. Back blows or thrusts are for severe obstruction.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1404-full-1404.png W4961 H1600 at x0 y0, 600dpi). Numerals "5" (x3, options B-D) confirmed on the same crop. Key highlighted: yellow box on "E. Encourage cough". Printed number "41." and footer "1404" both match n41 -- walk restarts cleanly from part-B\'s n40. No boiler line present.' }

{ n: 42, pr: 42, p: 1406,
  key: 1,
  stem: 'What is the main drive for growth in the childhood phase?',
  opts: ['Nutrition', 'Growth hormone', 'Testosterone', 'Thyroid hormones', 'Testosterone and estrogen'],
  expl: 'During the childhood phase, GH is the major driver of growth. In puberty, sex steroids add a growth spurt.',
  note: '5 options printed (A-E). No numerals in this stem/options/explanation at all -- confirmed absent on a 600 dpi band crop (crop-1406-full-1406.png W4961 H1600 at x0 y0, 600dpi) covering stem+options; explanation box (below, not separately re-cropped, all-text no digits) already fully legible on the 300 dpi full render (pg300-1406-1406.png). Key highlighted: yellow box on "B. Growth hormone". Printed number "42." and footer "1406" both match n42. No boiler line present.' }

{ n: 43, pr: 43, p: 1408,
  key: 2,
  stem: 'What is the most common cause of recurrent abdominal pain in children?',
  opts: ['Appendicitis', 'Ascariasis', 'Functional', 'Hepatitis'],
  expl: 'Functional abdominal pain is the most common cause, especially in school-aged children, often with no organic pathology.',
  note: 'Only 4 options printed (A-D). No numerals in this stem/options/explanation. Whole question box (stem, options A-D, explanation box) confirmed in a single 600 dpi band crop (crop-1408-full-1408.png W4961 H1300 at x0 y0, 600dpi; option D "Hepatitis" clipped at bottom edge but already fully legible on the 300 dpi full render pg300-1408-1408.png, and the crop was only needed to confirm options A-C and the key). Key highlighted: yellow box on "C. Functional". Printed number "43." and footer "1408" both match n43. No boiler line present.' }

{ n: 44, pr: 44, p: 1410,
  key: 2,
  stem: 'At what age is the first Measles/Mumps/Rubella (MMR) vaccine given in Egypt?',
  opts: ['6 months', '9 months', '12 months', '18 months', '24 months'],
  expl: 'The first MMR dose is given at 12 months, followed by a booster at school age.',
  note: '5 options printed (A-E). Two 600 dpi band crops used: crop-1410-full-1410.png W4961 H1600 at x0 y0 (stem + options A-D) and crop-1410-rest-1410.png W4961 H1300 at x0 y1600 (option E + explanation box + footer). Age numerals "6 months", "9 months", "12 months" (x2, option C and explanation box), "18 months", "24 months" all confirmed on these crops. Key highlighted: yellow box on "C. 12 months". Printed number "44." and footer "1410" both match n44. No boiler line present.' }

{ n: 45, pr: 45, p: 1412,
  key: 0,
  stem: 'Which of the following is an example of passive immunity?',
  opts: ['Palivizumab (monoclonal antibody to RSV)', 'Diphtheria-Tetanus toxoid', 'MMR', 'Influenza vaccine', 'Hepatitis B vaccine given at birth'],
  expl: 'Passive immunity is provided by pre-formed antibodies, such as palivizumab. Vaccines like MMR or DTaP induce active immunity.',
  note: '5 options printed (A-E). No numerals in this stem/options/explanation. Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1412-full-1412.png W4961 H1600 at x0 y0, 600dpi) covering stem+options; explanation box (below, not separately re-cropped, all-text no digits) already fully legible on the 300 dpi full render (pg300-1412-1412.png). Key highlighted: yellow box on "A. Palivizumab (monoclonal antibody to RSV)". Printed number "45." and footer "1412" both match n45. No boiler line present.' }

{ n: 46, pr: 46, p: 1414,
  key: 3,
  stem: 'What is the most effective intervention tested to prevent allergic diseases in infants and children?',
  opts: ["Adding probiotics and prebiotics to infants' feeds", "Adding omega-3 fatty acids to infants' diet", 'The use of skin moisturizers as early as possible', 'Feeding common food allergens to young infants', 'Avoidance of allergenic foods during the first year of life'],
  expl: 'Early introduction of allergenic foods (like peanuts/eggs) has been shown to reduce the risk of allergy. Avoidance actually increases allergy risk.',
  note: '5 options printed (A-E). Numeral "omega-3" (option B) confirmed on a 600 dpi band crop (crop-1414-full-1414.png W4961 H1700 at x0 y0, 600dpi) covering stem+options A-D+top of E; option E and the explanation box (no digits) already fully legible on the 300 dpi full render (pg300-1414-1414.png). Straight ASCII apostrophes in "infants\'" (options A-B) reproduced verbatim as printed. Key highlighted: yellow box on "D. Feeding common food allergens to young infants". Printed number "46." and footer "1414" both match n46. No boiler line present.' }

{ n: 47, pr: 47, p: 1416,
  key: 4,
  stem: 'A 6-day-old baby who is breastfeeding well and thriving is referred by the midwife because she appears jaundiced. She has pigmented stools and is passing urine normally. Examination is unremarkable. Her bilirubin is 5 mg/dl. What would be the appropriate management of this infant?',
  opts: ['Complete a prolonged jaundice screen', 'Commence phototherapy', 'Top up feeds with formula milk', 'Repeat the bilirubin level in 8 hours', 'No treatment required'],
  expl: 'This is physiological jaundice; bilirubin is low, baby is well, stools/urine normal. No intervention is needed.',
  note: '5 options printed (A-E). Two 600 dpi band crops used: crop-1416-stem-1416.png W4961 H1700 at x0 y0 (stem + options A-C) and crop-1416-rest-1416.png W4961 H1300 at x0 y1700 (options D-E + explanation box + footer). Numerals "6-day-old" and "5 mg/dl" (stem) and "8 hours" (option D) all confirmed on these crops. Key highlighted: yellow box on "E. No treatment required". Printed number "47." and footer "1416" both match n47. No boiler line present.' }

{ n: 48, pr: 48, p: 1418,
  key: 3,
  stem: 'A 3-week-old baby is seen in the outpatient clinic for evaluation of frequent bowel motions. He passes yellowish, semi-solid stools 8–10 times per day with no blood or mucus. The baby is exclusively breastfed. On examination, the baby appears well, active, and gaining weight. What is the most likely diagnosis?',
  opts: ['Acute gastroenteritis', 'Lactose intolerance', 'Cow milk protein allergy', 'Normal bowel habit', 'Inflammatory bowel disease'],
  expl: 'Exclusively breastfed infants often pass many yellow, semi-solid stools daily. Since the baby is gaining weight and well, this is normal.',
  note: '5 options printed (A-E). Two 600 dpi band crops used: crop-1418-stem-1418.png W4961 H1600 at x0 y0 (stem + options A-B) and crop-1418-rest-1418.png W4961 H1300 at x0 y1600 (options D-E + explanation box + footer). Numerals "3-week-old" and "8–10 times per day" (en dash, reproduced verbatim as printed) confirmed on the stem crop. Key highlighted: yellow box on "D. Normal bowel habit". Printed number "48." and footer "1418" both match n48. No boiler line present.' }

{ n: 49, pr: 49, p: 1420,
  key: 2,
  stem: 'A 4-year-old girl with a family history of atopy attends her GP. Her older brother suffers from nut allergy and hay fever from grass-end polio. Her mother is very keen to have her tested before introducing her to nuts and requests skin-prick testing.Which of the following statements describe the role of skin-prick testing in this case?',
  opts: ['A positive test confirms the presence of clinical allergy.', 'It is suitable for identifying both IgE and non-IgE-mediated allergy.', 'It tests only for IgE-mediated allergy.', 'It tests for levels of allergen-specific IgE in serum'],
  expl: 'Skin-prick testing detects IgE-mediated sensitization. A positive test shows sensitization, but clinical correlation is required for allergy.',
  note: 'Only 4 options printed (A-D). Two 600 dpi band crops used: crop-1420-stem-1420.png W4961 H1200 at x0 y0 (full stem) and crop-1420-rest-1420.png W4961 H1300 at x0 y1200 (options A-D + top of explanation box). Numeral "4-year-old" confirmed on the stem crop. The stem\'s missing space before "Which" ("testing.Which") and the phrase "grass-end polio" are reproduced verbatim as printed -- transcribed silently per the no-numeral, no-unit, no-dose exception (these are not numerals/units/doses). Key highlighted: yellow box on "C. It tests only for IgE-mediated allergy.". Printed number "49." and footer "1420" both match n49. No boiler line present.' }

{ n: 50, pr: 50, p: 1422,
  key: 4,
  stem: 'Which of the following vaccines would be contraindicated in a 4-year-old boy receiving immunosuppressive therapy for autoimmune hepatitis?',
  opts: ['Tetanus toxoid', 'Hepatitis B vaccine', 'Acellular pertussis vaccine', 'Inactivated polio vaccine', 'BCG'],
  expl: 'Live vaccines (e.g., BCG, MMR, OPV) are contraindicated in immunosuppressed patients. Inactivated vaccines remain safe',
  note: '5 options printed (A-E). Numeral "4-year-old" confirmed on a 600 dpi band crop (crop-1422-full-1422.png W4961 H1600 at x0 y0, 600dpi) covering stem+options A-D; option E and the explanation box (no digits) already fully legible on the 300 dpi full render (pg300-1422-1422.png). Key highlighted: yellow box on "E. BCG". Printed number "50." and footer "1422" both match n50. No boiler line present.' }

{ n: 51, pr: 51, p: 1424,
  key: 1,
  stem: 'Which organisms are most possibly associated with "antibiotic resistance" in neonatal units?',
  opts: ['Gram-positive cocci', 'Gram-negative organisms', 'Gonococci', 'Meningococci'],
  expl: 'Multidrug-resistant gram-negative organisms (e.g., Klebsiella, E. coli, Pseudomonas) are the major concern in NICUs.',
  note: 'Only 4 options printed (A-D). No numerals in this stem/options/explanation. Whole question box (stem, options A-D, explanation box) confirmed in a single 600 dpi band crop (crop-1424-full-1424.png W4961 H1600 at x0 y0, 600dpi) covering stem+options; explanation box (below, not separately re-cropped, all-text no digits) already fully legible on the 300 dpi full render (pg300-1424-1424.png). Straight double quotes around "antibiotic resistance" reproduced verbatim as printed. Key highlighted: yellow box on "B. Gram-negative organisms". Printed number "51." and footer "1424" both match n51. No boiler line present.' }

{ n: 52, pr: 52, p: 1426,
  key: 4,
  stem: 'A 3-year-old girl was at a birthday party. She suddenly developed swollen cheeks and lips and a widespread urticarial rash. She is rushed to the nearby general practice surgery, where it is noted that her breathing is very noisy. She is distressed and frightened. On auscultation, she has widespread wheeze. Which medication would you give first?',
  opts: ['Intramuscular antihistamine', 'Intravenous hydrocortisone', 'Oral antihistamine', 'Oral corticosteroid', 'Intramuscular adrenaline'],
  expl: 'First-line treatment for anaphylaxis is IM adrenaline. Antihistamines and steroids are supportive but not lifesaving.',
  note: '5 options printed (A-E). Layout differs from most entries: the explanation box sits to the right of options C-D rather than below all options, but stem/options/key/explanation are all still on this single page (not a straddle, not a box overflow -- same layout variant as part-B n37). Two 600 dpi band crops used: crop-1426-stem-1426.png W4961 H1500 at x0 y0 (stem + option A) and crop-1426-rest-1426.png W4961 H1300 at x0 y1500 (options B-E + explanation box + footer). Numeral "3-year-old" confirmed on the stem crop; no other numerals in this stem/options/explanation. Key highlighted: yellow box on "E. Intramuscular adrenaline". Printed number "52." and footer "1426" both match n52. No boiler line present.' }

{ n:53, pr:53, p:1428, key:4,
  stem:'An eleven-month-old boy presented to the emergency room with convulsions. He had a history of diarrhea for 3 days and was afebrile. His mother described that he was not thirsty and had no history of convulsions. Examination revealed a large head with wide anterior fontanelle, prominent costochondral junctions, and broad wrists. His eyes and skin pinch were normal, and rectal temperature was 37.8 °C. What is the emergency room initial treatment?',
  opts:['ORS','Antipyretic drug and cold fomentations','Low sodium IV fluids','IV Ceftriaxone','IV calcium gluconate'],
  expl:'The child has hypocalcemic seizures from vitamin D deficiency rickets. Emergency management is IV calcium gluconate.',
  note: '5 options printed (A-E). Layout variant again: explanation box sits to the right of options D-E rather than below all options, but stem/options/key/explanation are all still on this single page (not a straddle, not a box overflow -- same layout variant as n52 and part-B n37). Two 600 dpi band crops used: crop-1428-stem-1428.png W4962 H2100 at x0 y0 (stem + options A-C) and crop-1428-lower-1428.png W4962 H2450 at x0 y1900 (options C-E + explanation box + footer, overlapping the first crop by 200px). Numerals "eleven-month-old", "3 days" and "37.8 °C" all confirmed on the stem crop. Key highlighted: yellow box on "E. IV calcium gluconate". Printed number "53." (seen on the earlier 300 dpi full-page render) and footer "1428" both match n53. No boiler line present. Clinical picture (hypocalcemic tetany/seizures, rachitic changes, normal skin pinch/eyes ruling out dehydration) is internally consistent with the stated key.' }

{ n:54, pr:54, p:1430, key:3,
  stem:'An 8-year-old girl presents with a 6-month history of pain most days around the umbilicus which lasts for an hour and responds to paracetamol syrup. It usually does not occur at weekends. She opens her bowels daily and passes a soft stool. She is thriving with her weight and height on the 75th centile. Which of the following options is the appropriate next step?',
  opts:['Abdominal radiograph','Referral to a pediatric gastroenterologist','Liver function tests','Reassurance and No further investigation','Prescription for laxatives'],
  expl:'Chronic abdominal pain without red flags, normal growth, and weekday-only pattern suggests functional pain. Reassurance is the best step.',
  note: '5 options printed (A-E). Whole question (stem, options, key, explanation box, footer) fits on one page in normal below-options layout -- no straddle, no box overflow, no layout variant. One 600 dpi crop used: crop-1430-1430.png W4962 H3400 at x0 y0, covering the full page. Numerals "8-year-old", "6-month", "an hour", "75th centile" all confirmed. Key highlighted: yellow box on "D. Reassurance and No further investigation". Printed number "54." and footer "1430" both match n54. No boiler line present.' }

{ n:55, pr:55, p:1432, key:3,
  stem:"A 3-month-old baby is seen in clinic with a severe nappy rash. The rash covers the perineal area including the skin folds and features satellite lesions. There is also a white coating on the baby's tongue. The baby is well and thriving. Which of the following is the most appropriate treatment?",
  opts:['Topical flucloxacillin preparation','1% hydrocortisone ointment','Barrier cream, e.g Zinc and castor oil cream','Antifungal preparation, e.g. miconazole','Emollient, e.g. white soft paraffin'],
  expl:'Candida infection presents with involvement of skin folds, satellite lesions, and oral thrush. Antifungal cream is the treatment.',
  note: '5 options printed (A-E). Whole question fits on one page in normal below-options layout -- no straddle, no box overflow, no layout variant. One 600 dpi crop used: crop-1432-1432.png W4962 H3300 at x0 y0, covering the full page. Numeral "3-month-old" and percentage "1%" (in option B) both confirmed. Key highlighted: yellow box on "D. Antifungal preparation, e.g. miconazole". Printed number "55." and footer "1432" both match n55. No boiler line present.' }

{ n:56, pr:56, p:1434, key:4,
  stem:"A 4-year-old boy is brought by his mother to the Emergency Department as he is crying and saying his tummy hurts. He has had a 2-day history of fever, coryza, and cough. He is sitting quietly on his mother's lap and is reluctant to play. He has a temperature of 38.2 °C and a respiratory rate of 50 breaths/min. He complains of pain and tenderness on palpation of the right upper quadrant of the abdomen. What is the most likely cause of abdominal pain?",
  opts:['Appendicitis','Functional abdominal pain','Hepatitis','Mesenteric adenitis','Pneumonia'],
  expl:'Pneumonia, especially right lower lobe, can irritate the diaphragm and cause referred abdominal pain mimicking acute abdomen.',
  note: '5 options printed (A-E). Layout variant again: explanation box sits to the right of options C-D rather than below all options, but stem/options/key/explanation are all still on this single page (not a straddle, not a box overflow -- same layout variant as n52, n53, part-B n37). Two 600 dpi crops used: crop-1434-stem-1434.png W4962 H2200 at x0 y0 (stem + options A-C) and the earlier 300 dpi full-page render for option D/E and the yellow key highlight (both fully legible there, no numerals in D/E needing 600 dpi confirmation). Numerals "4-year-old", "2-day", "38.2 °C", "50 breaths/min" all confirmed on the stem crop. Key highlighted: yellow box on "E.Pneumonia" (no space after the period in the source, reproduced as printed). Printed number "56." and footer "1434" both match n56. No boiler line present.' }

{ n:57, pr:57, p:1436, key:0,
  stem:"A 5-month-old infant is exclusively breastfed until yesterday when her mother started her on formula as she is planning to go back to work. The mother noticed that her baby developed an urticarial rash all over her body very soon after the formula feed. What is the most likely mechanism of this baby's urticaria?",
  opts:['IgE-mediated cow milk allergy','Non-IgE mediated cow milk allergy','Non-allergic hypersensitivity','Lactose intolerance','Immune complex-mediated hypersensitivity reaction'],
  expl:'Immediate urticaria after exposure is due to IgE-mediated allergy. Non-IgE allergy causes delayed GI symptoms.',
  note: '5 options printed (A-E). Whole question fits on one page in normal below-options layout -- no straddle, no box overflow, no layout variant. One 600 dpi crop used: crop-1436-stem-1436.png W4962 H1200 at x0 y0, covering stem + option A; options B-E, explanation box and footer already fully legible on the earlier 300 dpi full-page render (no numerals there needing 600 dpi confirmation). Numeral "5-month-old" confirmed. Key highlighted: yellow box on "A. IgE-mediated cow milk allergy". Printed number "57." and footer "1436" both match n57. No boiler line present.' }

{ n:58, pr:58, p:1438, key:3,
  stem:'A 10-year-old boy has a 2-week history of sore throat, fever, and lethargy. Upon clinical examination there is pharyngitis, hepatosplenomegaly, and bilateral shotty cervical lymph nodes. Blood tests reveal atypical lymphocytes. What is the most likely causative pathogen?',
  opts:['Coxsackievirus','Herpes simplex virus','Varicella zoster virus','Epstein-Barr virus','Cytomegalovirus'],
  expl:'This is infectious mononucleosis due to EBV. Classic triad: fever, pharyngitis, lymphadenopathy.',
  note: '5 options printed (A-E). Whole question fits on one page in normal below-options layout -- no straddle, no box overflow, no layout variant. One 600 dpi crop used: crop-1438-stem-1438.png W4962 H900 at x0 y0, covering the stem; options, explanation box and footer already fully legible on the earlier 300 dpi full-page render (no numerals there needing 600 dpi confirmation). Numerals "10-year-old" and "2-week" confirmed. Key highlighted: yellow box on "D. Epstein-Barr virus". Printed number "58." and footer "1438" both match n58. No boiler line present.' }

{ n:59, pr:59, p:1440, key:2,
  stem:'A 6-year-old girl is admitted with high fever, headache, and neck stiffness. A septic screen is performed and intravenous antibiotics are commenced. Her blood sugar is 130 mg/dl. The CSF results are as follows: Cloudy appearance, 8000 polymorphs, CSF protein 200 mg/dl, CSF glucose 46 mg/dl. What is the most likely diagnosis?',
  opts:['TB meningitis','Viral meningitis','Bacterial meningitis','Encephalitis','Not meningitis'],
  expl:'The CSF findings are typical of bacterial meningitis: turbid, neutrophils, high protein, and low glucose.',
  note: '5 options printed (A-E). Layout variant again: explanation box sits to the right of options C-D rather than below all options, but stem/options/key/explanation are all still on this single page (not a straddle, not a box overflow -- same layout variant as n52, n53, n56, part-B n37). One 600 dpi crop used: crop-1440-stem-1440.png W4962 H1600 at x0 y0, covering stem + options A-B; options C-E, explanation box and footer already fully legible on the earlier 300 dpi full-page render. Numerals "6-year-old", "130 mg/dl" (blood sugar), "8000" (polymorphs), "200 mg/dl" (CSF protein), "46 mg/dl" (CSF glucose) all confirmed on the 600 dpi stem crop. Key highlighted: yellow box on "C. Bacterial meningitis". Printed number "59." and footer "1440" both match n59. No boiler line present.' }

{ n:60, pr:60, p:1442, key:1,
  stem:'An eight-year-old girl presented with low-grade fever and a diffuse maculopapular rash. On examination, her physician noted mild tenderness and swelling of her cervical and occipital lymph nodes. Three days after the onset of illness, the rash vanished. What is the most likely diagnosis?',
  opts:['Measles','German measles','Scarlet fever','Infectious mononucleosis','Chickenpox'],
  expl:'Rubella presents with low-grade fever, maculopapular rash, and tender occipital/postauricular lymphadenopathy. Rash resolves quickly.',
  note: '5 options printed (A-E). Whole question fits on one page in normal below-options layout -- no straddle, no box overflow, no layout variant. One 600 dpi crop used: crop-1442-stem-1442.png W4962 H1200 at x0 y0, covering stem + option A; options B-E, explanation box and footer already fully legible on the earlier 300 dpi full-page render. Numerals "eight-year-old" and "Three days" confirmed. Key highlighted: yellow box on "B. German measles". Printed number "60." and footer "1442" both match n60. No boiler line present. FINAL entry of this staging half (n41-n60 complete).' }
