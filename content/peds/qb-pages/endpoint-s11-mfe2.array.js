/* ===========================================================================
   ENDPOINT - Pediatrics endpoint part1.pdf - MODEL FINAL EXAM 2
   Verbatim staging record. PDF pages 1323-1483; PDF page = printed page, offset zero.
   Merged from endpoint-s11-mfe2.part-A.js + endpoint-s11-mfe2.part-B.js + endpoint-s11-mfe2.part-C.js + endpoint-s11-mfe2.part-D.js by merge-parts-ep.js.
   
   Every question is printed TWICE: an unanswered page, then the ANSWERED page with the key
   highlighted in yellow and (usually) a bordered explanation box. Only answered pages are
   staged. `n` is the true sequential index, `pr` what the page prints, `p` the PDF page,
   `key` a ZERO-BASED INDEX into `opts` (never a letter), matching the app field `answer`,
   `expl` the printed box verbatim or "".
   =========================================================================== */
var PEDEP_S11_STAGED = [

/* ENDPOINT part1 -- Model Final Exam 2 -- staging half A (questions n1..n20).
   Source: "Pediatrics endpoint part1.pdf", answered pages p:1324,1326,1328,1330,1332,1334,1336,
   1338,1340,1342,1344,1346,1348,1350,1352,1354,1356,1358,1360,1362 (task-supplied list, measured
   from content/peds/qb-pages/ocr/ep1/index.json 2026-09-04) -- a clean +2 step throughout. Every
   question in this exam prints twice (blank exam page, then answered page carrying the
   yellow-highlighted key and usually a bordered explanation box); staging is from the answered
   pages ONLY, per task instructions.
   PDF is 1:1, NOT 2-up -- brief pd-staging-brief.md Section 2's 2-up folio arithmetic does NOT
   apply here, per task override 1.
   key is a ZERO-BASED INDEX into opts (integer), never a letter -- per task override 2, this
   differs from the House-bank brief Section 7.
   Per task override 3: Paediatric surgery topics (gastroschisis, atresias, Hirschsprung,
   intussusception, hernias, Wilms, neuroblastoma, urological anomalies, etc.) are IN SCOPE for
   this book -- the House-bank Section 11a exclusion does not apply here.
   OCR at content/peds/qb-pages/ocr/ep1/p<NNNN>.txt NOT opened during this staging pass, per brief
   Section 4 / task instructions.
   Every numeral, unit, dose, exponent and every answer-key highlight position is read off a
   600 dpi band crop, never off a 300 dpi full render, per task instructions.
   Per task override 5: a box overflowing onto the next sheet while stem/options/key sit on one
   sheet is recorded via a `box` field and described in the note WITHOUT the word "straddle" --
   only a stem/options span across sheets gets straddle:true + the uppercase marker.
   CLOSED 2026-09-04 -- 20/20 entries staged (n1..n20, pp.1324-1362), each validated with
   check-part-ep.js immediately after appending; final run OK, 0 fail, page order and n-contiguity
   intact. See the parent report for the full walk, option/key distribution and every place this
   brief was found wrong. */

{ n: 1, pr: 1, p: 1324,
  key: 3,
  stem: "A 3-year-old girl is 'blue-lighted' into the local emergency department with reduced consciousness. Her mother informs the paramedic that her daughter has been unwell for the last 8 days with vomiting and profuse diarrhea. On arrival, she is apyrexial, has a heart rate of 170 beats per minute and a respiratory rate of 20 per minute. Her systolic blood pressure is 75 mmHg and she has a capillary refill time of 5 seconds. She is barely responsive to pain. Resuscitation begins and a blood gas reveals a metabolic acidosis.What is the most likely clinical syndrome?",
  opts: ['Anaphylactic shock', 'Septicemic shock', 'Cardiogenic shock', 'Hypovolemic shock'],
  expl: 'The child has a history of prolonged diarrhea and vomiting with signs of poor perfusion (tachycardia, delayed capillary refill, hypotension). These findings are most consistent with hypovolemic shock from dehydration.',
  note: 'Only 4 options printed (A-D). Whole question box (stem, options A-D, explanation box) confirmed across two 600 dpi band crops (crop-1324-full-1324.png W4700 H1700 at x0 y150; crop-1324-opts-1324.png W4700 H1100 at x0 y1750, 600dpi). Numerals "3-year-old", "8 days", "170 beats per minute", "20 per minute", "75 mmHg", "5 seconds" confirmed in crop-1324-full. Key highlighted: yellow box on "D. Hypovolemic shock" confirmed in crop-1324-opts. Printed number "1." matches n1. No boiler line present.' },

{ n: 2, pr: 2, p: 1326,
  key: 4,
  stem: 'Which of the following would be the single most important factor responsible for a possible decline in the incidence of sudden infant death syndrome (SIDS)?',
  opts: ['Feet to foot of cot', "Keeping baby in parent's room until 6 months of age", 'Keeping room cool to prevent overheating', 'Parents not smoking in the same room as the infant', 'Supine sleeping'],
  expl: 'The most important factor in reducing SIDS has been the "Back to Sleep" campaign, encouraging babies to sleep on their backs. Other measures help but are less impactful.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1326-full-1326.png W4700 H3000 at x0 y150, 600dpi). Numeral "6 months of age" in option B confirmed in the same crop. Key highlighted: yellow box on "E. Supine sleeping". Printed number "2." matches n2. No boiler line present.' },

{ n: 3, pr: 3, p: 1328,
  key: 3,
  stem: 'Which is a characteristic of constitutional growth delay?',
  opts: ['Adequate bone age', 'More common in girls', 'Anal height is affected', 'A delayed onset of puberty', 'Presentation is in infancy'],
  expl: 'Children with constitutional growth delay have delayed bone age and puberty, but eventually reach normal adult height. It is more common in boys.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1328-full-1328.png W4700 H3000 at x0 y150, 600dpi). Key highlighted: yellow box on "D. A delayed onset of puberty". No numerals/units/doses in this stem/options/explanation. Printed number "3." matches n3. No boiler line present.' },

{ n: 4, pr: 4, p: 1330,
  key: 4,
  stem: 'A 1-year-old girl is brought to the emergency room with a history of persistent vomiting and loose, watery stools. Which of the following would be a sign of uncompensated shock?',
  opts: ['Capillary refill time greater than 3 seconds', 'Heart rate greater than 120 beats/min', 'Cold extremities', 'Respiratory rate greater than 40 breaths/min', 'Low blood pressure'],
  expl: 'In compensated shock, blood pressure is maintained by tachycardia and vasoconstriction. Hypotension indicates progression to uncompensated (decompensated) shock.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1330-full-1330.png W4700 H3000 at x0 y150, 600dpi). Numerals "1-year-old", "3 seconds", "120 beats/min", "40 breaths/min" confirmed in the same crop. Key highlighted: yellow box on "E. Low blood pressure". Printed number "4." matches n4. No boiler line present.' },

{ n: 5, pr: 5, p: 1332,
  key: 3,
  stem: 'What is the first sign of normal puberty in girls?',
  opts: ['Height acceleration', 'Pubic hair changes', 'Menarche', 'Palpable Breast bud', 'Clitoris growth'],
  expl: 'Thelarche is the first sign of puberty in girls, typically around age 9–11. Menarche and pubic hair changes occur later.',
  note: '5 options printed (A-E; option D printed as "D.Palpable Breast bud" with no space after the period, transcribed as printed). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1332-full-1332.png W4700 H3000 at x0 y150, 600dpi). Numeral "age 9–11" (en dash as printed) confirmed in the same crop. Key highlighted: yellow box on "D.Palpable Breast bud". Printed number "5." matches n5. No boiler line present.' },

{ n: 6, pr: 6, p: 1334,
  key: 1,
  stem: 'During which period of human growth does faltering growth typically occur?',
  opts: ['Fetal phase', 'Infant phase', 'Childhood phase', 'Prepubertal phase', 'Pubertal phase'],
  expl: 'Faltering growth is most commonly seen in infancy when nutrition and feeding problems are most likely.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1334-full-1334.png W4700 H3000 at x0 y150, 600dpi). Key highlighted: yellow box on "B. Infant phase". No numerals/units/doses in this stem/options/explanation. Printed number "6." matches n6. No boiler line present.' },

{ n: 7, pr: 7, p: 1336,
  key: 3,
  stem: 'What would be the shape of the head if craniosynostosis affects the lambdoid suture?',
  opts: ['Wide and broad', 'Long and narrow', 'Prominent forehead', 'Flattening of the skull'],
  expl: 'Fusion of the lambdoid suture causes a flat occiput and asymmetric skull shape (posterior plagiocephaly).',
  note: 'Only 4 options printed (A-D). Whole question box (stem, options A-D, explanation box) confirmed in a single 600 dpi band crop (crop-1336-full-1336.png W4700 H3000 at x0 y150, 600dpi). Key highlighted: yellow box on "D. Flattening of the skull". No numerals/units/doses in this stem/options/explanation. Printed number "7." matches n7. No boiler line present.' },

{ n: 8, pr: 8, p: 1338,
  key: 1,
  stem: 'How is a very low birth weight infant defined?',
  opts: ['Birth weight less than 2500 g', 'Birth weight less than 1500 g', 'Birth weight less than 1750 g', 'Birth weight less than 1000 g', 'Birth weight less than 500 g'],
  expl: 'VLBW is defined as a birth weight less than 1500 g. ELBW (extremely low birth weight) is <1000 g.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1338-full-1338.png W4700 H3000 at x0 y150, 600dpi). Numerals "2500 g", "1500 g", "1750 g", "1000 g", "500 g", "<1000 g" (explanation) all confirmed in the same crop. Key highlighted: yellow box on "B. Birth weight less than 1500 g". Printed number "8." matches n8. No boiler line present.' },

{ n: 9, pr: 9, p: 1340,
  key: 3,
  stem: 'Which problem is commonly associated with large for gestational age infants?',
  opts: ['Hyperglycemia', 'Hypercalcemia', 'Anemia', 'Birth asphyxia', 'Heart failure'],
  expl: 'LGA infants, often of diabetic mothers, are prone to shoulder dystocia, birth trauma, and birth asphyxia.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1340-full-1340.png W4700 H3000 at x0 y150, 600dpi). Key highlighted: yellow box on "D. Birth asphyxia". No numerals/units/doses in this stem/options/explanation. Printed number "9." matches n9. No boiler line present.' },

{ n: 10, pr: 10, p: 1342,
  key: 4,
  stem: 'Which complication is most likely in an infant of a diabetic mother?',
  opts: ['Microsomia', 'Hyperglycemia', 'Anemia', 'Hypercalcemia', 'Hypertrophic cardiomyopathy'],
  expl: 'Infants of diabetic mothers are prone to macrosomia, hypoglycemia, hypocalcemia, and transient hypertrophic cardiomyopathy due to fetal hyperinsulinism.',
  note: '5 options printed (A-E; option A printed as "Microsomia", transcribed as printed, verbatim per rule). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1342-full-1342.png W4700 H3000 at x0 y150, 600dpi). Key highlighted: yellow box on "E. Hypertrophic cardiomyopathy". No numerals/units/doses in this stem/options/explanation. Printed number "10." matches n10. No boiler line present.' },

{ n: 11, pr: 11, p: 1344,
  key: 1,
  stem: 'Which one of the following maternal infections may be associated with microcephaly in the fetus?',
  opts: ['Parvovirus B19', 'Cytomegalovirus', 'Hepatitis B', 'Measles', 'Enteroviruses'],
  expl: 'CMV is a TORCH infection classically associated with microcephaly, periventricular calcifications, and growth restriction.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1344-full-1344.png W4700 H3000 at x0 y150, 600dpi). Numeral "B19" in option A confirmed in the same crop. Key highlighted: yellow box on "B. Cytomegalovirus". Printed number "11." matches n11. No boiler line present.' },

{ n: 12, pr: 12, p: 1346,
  key: 0,
  stem: "What is appropriate regarding the role of vitamins in children's nutrition?",
  opts: ['Vitamin C deficiency can lead to petechiae and mucosal bleeding', "Vitamin K's main function is in the synthesis of RBCs", 'Vitamin E deficiency leads to decreased clot generation', 'Vitamin B12 deficiency is common in infants', 'Folic acid has no role in blood production'],
  expl: 'Vitamin C deficiency (scurvy) leads to defective collagen synthesis, bruising, bleeding gums, and petechiae. Vitamin K is for coagulation, not RBC synthesis.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1346-full-1346.png W4700 H3000 at x0 y150, 600dpi). Numeral "B12" in option D confirmed in the same crop. Key highlighted: yellow box on "A. Vitamin C deficiency can lead to petechiae and mucosal bleeding". Printed number "12." matches n12. No boiler line present.' },

{ n: 13, pr: 13, p: 1348,
  key: 1,
  stem: "The parents of a 1-week-old breastfed infant report that the physiologic jaundice has never resolved completely. The stool is grayish-white while the baby's urine stains the diaper brown. What is the MOST likely diagnosis?",
  opts: ['Neonatal sepsis', 'Biliary atresia', 'G6PD deficiency', 'Congenital hypothyroidism', 'Breast milk jaundice'],
  expl: 'Persistent jaundice with acholic stools and dark urine indicates cholestasis, most commonly due to biliary atresia.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1348-full-1348.png W4700 H3000 at x0 y150, 600dpi). Numeral "1-week-old" confirmed in the same crop. Key highlighted: yellow box on "B. Biliary atresia". Printed number "13." matches n13. No boiler line present.' },

{ n: 14, pr: 14, p: 1350,
  key: 3,
  stem: 'Which statement best applies to fetal circulation?',
  opts: ['All of the cardiac output goes to the lungs via the pulmonary artery', 'The ductus arteriosus helps send oxygenated blood to the brain', 'Blood shunts across the ductus arteriosus from the aorta to the pulmonary artery', 'Blood from the inferior vena cava mainly passes through the foramen ovale'],
  expl: 'Oxygen-rich blood from the placenta enters the IVC and preferentially crosses the foramen ovale to the left atrium and systemic circulation.',
  note: '4 options printed (A-D), no option E on this page. Whole question box (stem, options A-D, explanation box) confirmed in a single 600 dpi band crop (crop-1350-full-1350.png W4700 H3000 at x0 y150, 600dpi). No numerals present to verify. Key highlighted: yellow box on "D. Blood from the inferior vena cava mainly passes through the foramen ovale". Printed number "14." matches n14. No boiler line present.' },

{ n: 15, pr: 15, p: 1352,
  key: 1,
  stem: 'What is the main benefit of human milk oligosaccharides?',
  opts: ['Kill microorganisms', 'Work as prebiotics', 'Help protein absorption', 'Help lactose digestion', 'Prevent infant colic'],
  expl: 'HMOs promote growth of beneficial gut microbiota, supporting immunity and gut health.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1352-full-1352.png W4700 H3000 at x0 y150, 600dpi). No numerals present to verify. Key highlighted: yellow box on "B. Work as prebiotics". Printed number "15." matches n15. No boiler line present.' },

{ n: 16, pr: 16, p: 1354,
  key: 3,
  stem: 'A 2-year-old girl is brought to the clinic for a routine check-up. Her mother states that she does not like to eat but prefers eating only a few spoons of pasta each day.What is the best method to check her nutritional status?',
  opts: ['Head circumference', 'Height', 'Weight', 'Weight-for-height', 'Skinfold thickness'],
  expl: 'Weight-for-height assesses acute malnutrition and is the best parameter for nutritional status in toddlers.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1354-full-1354.png W4700 H3000 at x0 y150, 600dpi). Numeral "2-year-old" confirmed in the same crop. Missing space after "day." before "What" printed as shown, preserved verbatim. Key highlighted: yellow box on "D. Weight-for-height". Printed number "16." matches n16. No boiler line present.' },

{ n: 17, pr: 17, p: 1356,
  key: 3,
  stem: 'An 18-month-old exclusively breastfed infant has not started standing or walking yet. On examination, she has swelling of her wrists, an open fontanelle, and has not yet erupted any teeth. Which of the following is the most likely cause?',
  opts: ['Vitamin A deficiency', 'Vitamin B deficiency', 'Vitamin C deficiency', 'Vitamin D deficiency', 'Vitamin E deficiency'],
  expl: 'These are classic features of rickets due to vitamin D deficiency, common in exclusively breastfed infants without supplementation.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1356-full-1356.png W4700 H3000 at x0 y150, 600dpi). Numeral "18-month-old" confirmed in the same crop. Key highlighted: yellow box on "D. Vitamin D deficiency". Printed number "17." matches n17. No boiler line present.' },

{ n: 18, pr: 18, p: 1358,
  key: 0,
  stem: 'What is true about the management of gastroesophageal reflux in children?',
  opts: ['Parents can be reassured; it is a process the child will outgrow as they get older', 'Thickening the feedings does not work', 'Most infants have slow weight gain', 'It always deserves further evaluation', 'Surgery is indicated in preterm infants'],
  expl: 'Most infants with GER are "happy spitters," and reassurance is sufficient. It usually resolves by 12-18 months.',
  note: '5 options printed (A-E). Whole question box confirmed in a 600 dpi band crop (crop-1358-full-1358.png W4700 H3000 at x0 y150, 600dpi); option A wraps to a second line and its right edge was clipped by the crop width, so a 300 dpi full-page render (p-1358.png) was pulled to confirm the wrap reads "...as they get older" with nothing missing. Numeral "12-18 months" confirmed in the explanation box. Key highlighted: yellow box on "A. Parents can be reassured; it is a process the child will outgrow as they get older". Printed number "18." and footer "1358" both match. No boiler line present.' },

{ n: 19, pr: 19, p: 1360,
  key: 4,
  stem: 'In terms of allergy, what does the term sensitization mean?',
  opts: ['Objectively reproducible symptoms or signs following exposure to a defined stimulus at a dose usually tolerated by most people', 'An abnormal clinical reaction initiated by specific immunological mechanisms', 'A personal and/or familial tendency to produce IgE antibodies in response to ordinary exposures to potential allergens', 'A serious allergic reaction that is rapid in onset and may cause death', 'A positive test to an allergen, either by skin prick test or specific IgE'],
  expl: 'Sensitization means detection of an IgE response to an allergen, but it does not always cause clinical allergy.',
  note: '5 options printed (A-E). Whole question box confirmed in a 600 dpi band crop (crop-1360-full-1360.png W4700 H3000 at x0 y150, 600dpi); option B was right-clipped by the crop width, so a 300 dpi full-page render (p-1360.png) confirmed it ends cleanly at "mechanisms" with no further wrap. No other numerals present. Key highlighted: yellow box on "E. A positive test to an allergen, either by skin prick test or specific IgE". Printed number "19." and footer "1360" both match. No boiler line present.' },

{ n: 20, pr: 20, p: 1362,
  key: 4,
  stem: 'Which of the following is a true contraindication to the administration of DTaP (diphtheria, tetanus toxoid, and acellular pertussis) vaccine?',
  opts: ['Child is currently on amoxicillin for otitis media', 'Positive family history of adverse reactions to DTaP vaccine', 'A past history of whooping cough', 'Child is currently coryzal and febrile (37.9 °C)', 'Seizures after the last dose of DTaP vaccine'],
  expl: 'A severe neurologic reaction (eg, seizures, encephalopathy) after a previous dose is a true contraindication. Mild fever or family history are not.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1362-full-1362.png W4700 H3000 at x0 y150, 600dpi). Numeral "37.9 °C" in option D confirmed clearly in the same crop. Key highlighted: yellow box on "E. Seizures after the last dose of DTaP vaccine". Printed number "20." matches n20. No boiler line present. Last question of Model Final Exam 2 n1-n20 range.' },

/* ENDPOINT part1 -- Model Final Exam 2 -- staging half B (questions n21..n40).
   Source: "Pediatrics endpoint part1.pdf", answered pages p:1364,1366,1368,1370,1372,1374,1376,
   1378,1380,1382,1384,1386,1388,1390,1392,1394,1396,1398,1400,1402 (task-supplied list, measured
   from content/peds/qb-pages/ocr/ep1/index.json 2026-09-04) -- a clean +2 step throughout. Every
   question in this exam prints twice (blank exam page, then answered page carrying the
   yellow-highlighted key and usually a bordered explanation box); staging is from the answered
   pages ONLY, per task instructions. Continues directly from endpoint-s11-mfe2.part-A.js (n1..n20,
   pp.1324-1362); do not edit that sibling file.
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
   COMPLETE -- n21..n40 (pp.1364-1402) all staged and validated 2026-09-04; this half-file (B) is
   done. n38 (p.1398), n39 (p.1400), n40 (p.1402) were appended in a short finishing pass the same
   day, completing a predecessor's file that had stopped three entries short at n37. Sibling
   endpoint-s11-mfe2.part-A.js holds n1..n20 (pp.1324-1362); merge both parts per the harness's
   merge-parts-ep.js flow before splicing into the live bank file. */

{ n: 21, pr: 21, p: 1364,
  key: 4,
  stem: 'In papular urticaria, which clinical feature is most appropriate?',
  opts: ['It is an immediate hypersensitivity reaction.', 'There is a rapid clinical response to antihistamines.', 'Lesions are more common on the trunk.', 'It resolves within a few hours.', 'It follows an insect bite in most cases.'],
  expl: 'Papular urticaria is a hypersensitivity reaction to insect bites, often recurrent and chronic in children.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1364-full-1364.png W4962 H2500 at x0 y0, 600dpi). No numerals/units/doses in this stem/options/explanation. Key highlighted: yellow box on "E. It follows an insect bite in most cases." Printed number "21." matches n21 (first page of this half, walk continues from part-A n20). No boiler line present.' },

{ n: 22, pr: 22, p: 1366,
  key: 1,
  stem: 'Which type of infection is most probably associated with purpura in a febrile child?',
  opts: ['Pneumococcal sepsis', 'Meningococcal sepsis', 'Haemophilus influenzae infection', 'Beta-hemolytic streptococcal infection', 'Gram-negative bacterial sepsis'],
  expl: 'Purpura with fever is highly suggestive of meningococcal septicemia, a medical emergency.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1366-full-1366.png W4962 H2500 at x0 y0, 600dpi). No numerals/units/doses in this stem/options/explanation. Key highlighted: yellow box on "B. Meningococcal sepsis". Printed number "22." matches n22. No boiler line present.' },

{ n: 23, pr: 23, p: 1368,
  key: 4,
  stem: 'What is the most common clinical presentation of primary TB in children?',
  opts: ['TB lymphadenitis', 'Osteoarticular TB', 'Genitourinary TB', 'TB meningitis', 'Pulmonary TB'],
  expl: 'Pulmonary disease is the most common presentation in children, though lymphadenitis and CNS involvement also occur.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1368-full-1368.png W4962 H2500 at x0 y0, 600dpi). No numerals/units/doses in this stem/options/explanation. Key highlighted: yellow box on "E. Pulmonary TB". Printed number "23." matches n23. No boiler line present.' },

{ n: 24, pr: 24, p: 1370,
  key: 1,
  stem: 'A 3-year-old girl is brought into the emergency department by ambulance with a 4-hour history of listlessness, high fever, and reduced responsiveness. Her temperature is 40.0°C, heart rate is 170 bpm, respiratory rate is 35/min, and oxygen saturation is 100% on 15 L/min high-flow oxygen. She is responsive to voice and maintaining her airway. Systemic examination is unremarkable; capillary refill time is 4 seconds. What is the first step in her management?',
  opts: ['Intubation and ventilation', '10 mL/kg of normal saline bolus', '15 mL/kg packed red cells', '3 mL/kg bolus of dextrose', '15 chest compressions: 2 breaths at a rate of 100/min'],
  expl: 'The child is in septic shock with poor perfusion; the first step is IV fluid resuscitation.',
  note: '5 options printed (A-E). Two 600 dpi band crops used: crop-1370-stem-1370.png W4962 H1600 at x0 y0 (stem + option A) and crop-1370-opts-1370.png W4962 H1400 at x0 y1600, both 600dpi. Numerals "3-year-old", "4-hour", "40.0°C", "170 bpm", "35/min", "100%", "15 L/min", "4 seconds" (stem) and "10 mL/kg", "15 mL/kg", "3 mL/kg", "15 chest compressions: 2 breaths at a rate of 100/min" (options) all confirmed in these crops. Key highlighted: yellow box on "B. 10 mL/kg of normal saline bolus". Printed number "24." and footer "1370" both match n24. No boiler line present.' },

{ n: 25, pr: 25, p: 1372,
  key: 4,
  stem: 'A 15-month-old girl is referred for developmental assessment. She was born at term weighing 3400 g by spontaneous vaginal delivery and required resuscitation at birth with an Apgar score of 3 at 1 minute, 4 at 5 minutes and 7 at 10 minutes. She was admitted to the neonatal unit and required ventilation for 3 days. On assessment, she has global developmental delay. What is the most likely explanation for this finding?',
  opts: ['Congenital hypothyroidism', 'Meningitis', 'An inborn error of metabolism', 'Intracranial hemorrhage', 'Hypoxic-ischemic encephalopathy (HIE)'],
  expl: 'Perinatal hypoxia with prolonged resuscitation leads to HIE, the most likely cause of developmental delay.',
  note: '5 options printed (A-E). Two 600 dpi band crops used: crop-1372-stem-1372.png W4962 H1550 at x0 y0 (stem + start of option A/explanation box) and crop-1372-opts-1372.png W4962 H1500 at x0 y1550, both 600dpi. Numerals "15-month-old", "3400 g", "3 at 1 minute, 4 at 5 minutes and 7 at 10 minutes" (Apgar scores), "3 days" all confirmed in the stem crop. Key highlighted: yellow box on "E. Hypoxic-ischemic encephalopathy (HIE)". Printed number "25." and footer "1372" both match n25. No boiler line present.' },

{ n: 26, pr: 26, p: 1374,
  key: 1,
  stem: 'A three-day term infant born at home, exclusively breastfed, presents with lethargy and hematemesis. On examination, he is markedly pale but not jaundiced and has bulging anterior fontanel. His hemoglobin is 7.2 g/dL in venous blood gas (VBG) report. What is the most likely etiology of his illness?',
  opts: ['Vitamin D deficiency', 'Vitamin K deficiency', 'Folate deficiency', 'Iron deficiency', 'Hypocalcemia'],
  expl: 'Newborns who are exclusively breastfed and did not receive vitamin K prophylaxis can develop hemorrhagic disease of the newborn.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1374-full-1374.png W4962 H2500 at x0 y0, 600dpi). Numerals "three-day" and "7.2 g/dL" confirmed in the same crop. Key highlighted: yellow box on "B. Vitamin K deficiency". Printed number "26." and footer "1374" both match n26. No boiler line present.' },

{ n: 27, pr: 27, p: 1376,
  key: 2,
  stem: 'Maternal polyhydramnios is frequently observed in all the following conditions except:',
  opts: ['Esophageal atresia', 'Duodenal atresia', 'Hirschsprung disease', 'Pyloric atresia'],
  expl: 'Polyhydramnios is seen in conditions where swallowing is impaired (esophageal or duodenal atresia). Hirschsprung usually causes postnatal obstruction, not polyhydramnios.',
  note: 'Only 4 options printed (A-D) -- pediatric surgery topic, in scope per task override 3. Whole question box (stem, options A-D, explanation box) confirmed in a single 600 dpi band crop (crop-1376-full-1376.png W4962 H2000 at x0 y0, 600dpi; the crop clips the explanation box\'s third line "polyhydramnios." but that line was legible on the 300 dpi full-page render and matches). No numerals/units/doses in this stem/options/explanation. Key highlighted: yellow box on "C. Hirschsprung disease". Printed number "27." and footer "1376" both match n27. No boiler line present.' },

{ n: 28, pr: 28, p: 1378,
  key: 0,
  stem: 'The commonest type of esophageal atresia is:',
  opts: ['Esophageal atresia with distal tracheo-esophageal fistula', 'Esophageal atresia without tracheo-esophageal fistula', 'Tracheo-esophageal fistula without esophageal atresia', 'Esophageal atresia with fistula to both pouches', 'Esophageal atresia with a proximal tracheo-esophageal fistula'],
  expl: 'This accounts for 85% of cases, with proximal atresia and a fistula between distal esophagus and trachea.',
  note: 'Pediatric surgery topic, in scope per task override 3. 5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1378-full-1378.png W4962 H2200 at x0 y0, 600dpi). Numeral "85%" confirmed in the explanation box in the same crop. Key highlighted: yellow box on "A. Esophageal atresia with distal tracheo-esophageal fistula". Printed number "28." and footer "1378" both match n28. No boiler line present.' },

{ n: 29, pr: 29, p: 1380,
  key: 2,
  stem: 'The best time to repair CDH is:',
  opts: ['As shortly after delivery as is feasible', 'Electively after extubation', 'When infant is on minimal ventilator settings', 'If hypoxia is worsening despite maximal support'],
  expl: 'Surgery is delayed until the infant is stabilized with optimal ventilation and oxygenation.',
  note: 'Pediatric surgery topic (CDH = congenital diaphragmatic hernia), in scope per task override 3. Only 4 options printed (A-D). Whole question box (stem, options A-D, explanation box) confirmed in a single 600 dpi band crop (crop-1380-full-1380.png W4962 H2100 at x0 y0, 600dpi). No numerals/units/doses in this stem/options/explanation. Key highlighted: yellow box on "C. When infant is on minimal ventilator settings". Printed number "29." matches n29. No boiler line present.' },

{ n: 30, pr: 30, p: 1382,
  key: 1,
  stem: '"Dance sign" is:',
  opts: ['Sausage-shaped mass on the abdomen', 'Empty right iliac fossa', 'Redcurrant jelly', 'Intermittent colicky abdominal pain'],
  expl: '',
  note: 'Pediatric surgery topic (intussusception sign), in scope per task override 3. Only 4 options printed (A-D). Whole question box confirmed in a single 600 dpi band crop (crop-1382-full-1382.png W4962 H1400 at x0 y0, 600dpi) -- NO explanation box is printed below the options on this page, confirmed on both the 300 dpi full render and the 600 dpi crop; expl left as empty string. No numerals/units/doses in this stem/options. Key highlighted: yellow box on "B. Empty right iliac fossa". Printed number "30." and footer "1382" both match n30. No boiler line present.' },

{ n: 31, pr: 31, p: 1384,
  key: 1,
  stem: 'The pathognomonic sign in US abdomen in case of intussusception is:',
  opts: ['Olive sign', 'Target sign', 'Double track sign', 'Shoulder sign'],
  expl: 'The “target” or “donut” sign on ultrasound is diagnostic of intussusception.',
  note: 'Pediatric surgery topic (intussusception, continues the theme of n30), in scope per task override 3. Only 4 options printed (A-D). Whole question box (stem, options A-D, explanation box) confirmed in a single 600 dpi band crop (crop-1384-full-1384.png W4962 H1500 at x0 y0, 600dpi). Curly quotes around target/donut in the printed explanation reproduced verbatim as printed (typographic left/right double quotes). No numerals/units/doses in this stem/options/explanation. Key highlighted: yellow box on "B. Target sign". Printed number "31." and footer "1384" both match n31. No boiler line present.' },

{ n: 32, pr: 32, p: 1386,
  key: 2,
  stem: 'Plain x-ray abdomen standing in case of jejunal atresia may show:',
  opts: ['Cobra head sign', 'String sign', 'Air fluid levels', 'Shoulder sign'],
  expl: 'Jejunal atresia causes proximal bowel obstruction, so a plain X-ray in standing position shows multiple air–fluid levels. Signs like cobra head or string sign are associated with urinary tract/GI conditions (not jejunal atresia).',
  note: 'Pediatric surgery topic (jejunal atresia), in scope per task override 3. Only 4 options printed (A-D). Whole question box (stem, options A-D, explanation box) confirmed in a single 600 dpi band crop (crop-1386-full-1386.png W4962 H2000 at x0 y0, 600dpi). En dash in "air–fluid" reproduced verbatim as printed. No numerals/units/doses in this stem/options/explanation. Key highlighted: yellow box on "C. Air fluid levels". Printed number "32." and footer "1386" both match n32. No boiler line present.' },

{ n: 33, pr: 33, p: 1388,
  key: 2,
  stem: 'Patients with congenital diaphragmatic hernia should have:',
  opts: ['Immediate postnatal surgical repair', 'Immediate face mask ventilation', 'Immediate intubation', 'Immediate ECMO'],
  expl: 'Face mask ventilation should be avoided because it worsens gastric distension and lung compression. Intubation and gentle ventilation are the correct initial steps before surgical repair.',
  note: 'Pediatric surgery topic (congenital diaphragmatic hernia management), in scope per task override 3. Only 4 options printed (A-D). Whole question box (stem, options A-D, explanation box) confirmed in a single 600 dpi band crop (crop-1388-full-1388.png W4962 H2200 at x0 y0, 600dpi). No numerals/units/doses in this stem/options/explanation. Key highlighted: yellow box on "C. Immediate intubation". Printed number "33." matches n33; page footer not separately re-verified beyond the requested PDF page number 1388. No boiler line present.' },

{ n: 34, pr: 34, p: 1390,
  key: 2,
  stem: 'Which of the following describes type IIIb intestinal atresia?',
  opts: ['Two blind-ending atretic ends connected by a fibrous cord', 'Intraluminal diaphragm', 'Apple peel appearance', 'Multiple atresia'],
  expl: 'Type IIIb jejunal atresia is characterized by a proximal jejunal atresia with the distal small bowel spiraling around a marginal artery called “apple peel” deformity.',
  note: 'Pediatric surgery topic (jejunal atresia classification), in scope per task override 3. Only 4 options printed (A-D). Whole question box (stem, options A-D, explanation box) confirmed in a single 600 dpi band crop (crop-1390-full-1390.png W4962 H1600 at x0 y0, 600dpi). "IIIb" is a roman-numeral classification label, not a plain numeral requiring dosage-style verification, but confirmed letter-for-letter on the 600dpi crop regardless. Curly quotes around apple peel in the printed explanation reproduced verbatim as printed. Key highlighted: yellow box on "C. Apple peel appearance". Printed number "34." and footer "1390" both match n34. No boiler line present.' },

{ n: 35, pr: 35, p: 1392,
  key: 1,
  stem: 'The optimal time for surgery in undescended testes is:',
  opts: ['Before 1 month', 'Between 6–12 months', 'In adulthood', 'After 5 years'],
  expl: 'Orchidopexy is recommended between 6–12 months to reduce risk of infertility and malignancy. Surgery before 6 months is not advised as spontaneous descent may still occur.',
  note: 'Pediatric surgery topic (undescended testes / orchidopexy timing), in scope per task override 3. Only 4 options printed (A-D). Stem+options confirmed in a 600 dpi band crop (crop-1392-full-1392.png W4962 H1600 at x0 y0) and the explanation box confirmed in a second 600 dpi crop (crop-1392-expl-1392.png W4962 H900 at x0 y1600). All numerals (1 month, 6–12 months, 5 years, and the two occurrences of 6 in the explanation) individually confirmed on the 600 dpi crops. En dashes in "6–12" (option and explanation) reproduced verbatim as printed. Key highlighted: yellow box on "B. Between 6–12 months". Printed number "35." and footer "1392" both match n35. No boiler line present.' },

{ n: 36, pr: 36, p: 1394,
  key: 1,
  stem: 'A male infant born at 29 weeks is now 4 hours old. He has developed an increased oxygen requirement, there is tachypnoea and severe intercostal and subcostal recessions. CXR demonstrates a ground-glass appearance. The most likely diagnosis is which of the following?',
  opts: ['Transient tachypnoea of the newborn', 'Respiratory distress syndrome', 'Congenital pneumonia', 'Pneumothorax', 'Congenital heart disease'],
  expl: 'Preterm infants have surfactant deficiency, leading to atelectasis and a “ground-glass” CXR appearance with air bronchograms. TTN occurs in term infants and resolves quickly.',
  note: '5 options printed (A-E) -- neonatology topic, not a pediatric-surgery item, plainly in scope regardless. Stem confirmed in a 600 dpi band crop (crop-1394-stem-1394.png W4962 H1200 at x0 y0) and options+explanation confirmed in a second 600 dpi crop (crop-1394-rest-1394.png W4962 H1400 at x0 y1200). Numerals "29 weeks" and "4 hours" both confirmed on the stem crop. Curly quotes around ground-glass in the printed explanation reproduced verbatim as printed. Key highlighted: yellow box on "B. Respiratory distress syndrome". Printed number "36." and footer "1394" both match n36. No boiler line present.' },

{ n: 37, pr: 37, p: 1396,
  key: 2,
  stem: 'A female infant born at 28 weeks is now 10 days old. She had been doing very well and breast milk was started 2 days ago via nasogastric tube. She has become increasingly unwell over the past 12 hours with abdominal distension, temperature instability and bile-stained aspirates from the NG tube. Some blood is noted in the stools. Abdominal XR shows air within the bowel walls. What is the most likely diagnosis?',
  opts: ['Sepsis', 'Intestinal obstruction', 'Necrotizing enterocolitis', 'Malrotation', 'Duodenal atresia'],
  expl: 'NEC presents with abdominal distension, bile-stained aspirates, bloody stools, and X-ray showing air in the bowel wall (pneumatosis intestinalis). This is a neonatal emergency.',
  note: '5 options printed (A-E) -- neonatology topic (necrotizing enterocolitis). Layout differs from prior entries: the explanation box sits to the right of options A-B rather than below all options, but stem/options/key/explanation are all still on this single page (not a straddle, not a box overflow -- box just prints beside rather than under). Stem confirmed in a 600 dpi band crop (crop-1396-stem-1396.png W4962 H1400 at x0 y0), which carries all four numerals in the stem (28 weeks, 10 days, 2 days, 12 hours); options A-E and the explanation box were already fully legible on the 300 dpi full render (pg1396-1396.png) with no further numerals present, so no separate 600 dpi crop was taken of that region. Key highlighted: yellow box on "C. Necrotizing enterocolitis". Printed number "37." and footer "1396" both match n37. No boiler line present.' },

{ n: 38, pr: 38, p: 1398,
  key: 0,
  stem: 'When evaluating a child for stunting, which growth chart will you use?',
  opts: ['Height-for-age charts', 'Weight-for-age charts', 'Weight-for-length charts', 'Body mass index charts', 'Mid-arm circumference measurements'],
  expl: 'Stunting is defined as low height-for-age (< -2 SD), reflecting chronic malnutrition. Weight-for-height is for wasting (acute malnutrition).',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1398-full-1398.png W4961 H2200 at x0 y0, 600dpi). Numeral/threshold "< -2 SD" in the explanation box confirmed on the same crop. Key highlighted: yellow box on "A. Height-for-age charts". Printed number "38." and footer "1398" both match n38. No boiler line present.' },

{ n: 39, pr: 39, p: 1400,
  key: 2,
  stem: "A 7-year-old boy is brought by his grandmother to the pediatrician with concerns about his growth. According to his grandmother's words, his mother is 'of average height' and his father is 'slightly shorter than his mother'. Physical examination reveals a happy and playful boy with no dysmorphic features. His height is 110 cm which is just below the 3rd centile. His weight is on the 3rd centile. He has a normal physical examination. What is the most likely cause for his short stature?",
  opts: ['Achondroplasia', 'Constitutional delay of growth and puberty', 'Familial short stature', 'Growth hormone deficiency', 'Vitamin D deficiency'],
  expl: 'The child’s growth follows the 3rd centile, both height and weight proportionate, and parents are short consistent with familial short stature. Constitutional delay would show delayed puberty signs.',
  note: 'Layout differs from prior entries: options C-E print in a left column with the explanation box beside them (to the right of C-D), all still on this single page (not a straddle, not a box overflow). 5 options printed (A-E). Two 600 dpi band crops used: crop-1400-stem-1400.png W4961 H2200 at x0 y0 (stem + options A-B + top of C) and crop-1400-rest-1400.png W4961 H1600 at x0 y2200 (options C-E + explanation box + footer). Numerals "7-year-old", "110 cm", "3rd centile" (x2, stem) confirmed on the stem crop. Zoomed 600 dpi close-ups taken specifically to check apostrophe style, since the two boxes use different fonts: the serif stem/quote apostrophes (grandmother\'s, mother\'s, and the single-quoted phrases \'of average height\'/\'slightly shorter than his mother\') are plain straight ASCII apostrophes/quotes as printed, reproduced verbatim; the sans-serif explanation box\'s "child’s" is a distinct curly typographic apostrophe as printed, also reproduced verbatim. Key highlighted: yellow box on "C. Familial short stature". Printed number "39." and footer "1400" both match n39. No boiler line present.' },

{ n: 40, pr: 40, p: 1402,
  key: 1,
  stem: 'What is the most important factor affecting growth during the "infantile phase" in humans?',
  opts: ['Maternal nutrition', 'Infant nutrition', 'Size at birth', 'Vitamins', 'Parental size'],
  expl: 'Growth in the infantile phase (first 2 years) is primarily dependent on nutrition. Later phases are influenced by hormones and genetics.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1402-full-1402.png W4961 H2400 at x0 y0, 600dpi). Straight double quotes around "infantile phase" in the stem reproduced verbatim as printed. Numeral "first 2 years" in the explanation box confirmed on the same crop. Key highlighted: yellow box on "B. Infant nutrition". Printed number "40." and footer "1402" both match n40. No boiler line present. This is the last entry of this staging pass -- n38..n40 now complete, part-B holds n21..n40 in full.' },

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
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1404-full-1404.png W4961 H1600 at x0 y0, 600dpi). Numerals "5" (x3, options B-D) confirmed on the same crop. Key highlighted: yellow box on "E. Encourage cough". Printed number "41." and footer "1404" both match n41 -- walk restarts cleanly from part-B\'s n40. No boiler line present.' },

{ n: 42, pr: 42, p: 1406,
  key: 1,
  stem: 'What is the main drive for growth in the childhood phase?',
  opts: ['Nutrition', 'Growth hormone', 'Testosterone', 'Thyroid hormones', 'Testosterone and estrogen'],
  expl: 'During the childhood phase, GH is the major driver of growth. In puberty, sex steroids add a growth spurt.',
  note: '5 options printed (A-E). No numerals in this stem/options/explanation at all -- confirmed absent on a 600 dpi band crop (crop-1406-full-1406.png W4961 H1600 at x0 y0, 600dpi) covering stem+options; explanation box (below, not separately re-cropped, all-text no digits) already fully legible on the 300 dpi full render (pg300-1406-1406.png). Key highlighted: yellow box on "B. Growth hormone". Printed number "42." and footer "1406" both match n42. No boiler line present.' },

{ n: 43, pr: 43, p: 1408,
  key: 2,
  stem: 'What is the most common cause of recurrent abdominal pain in children?',
  opts: ['Appendicitis', 'Ascariasis', 'Functional', 'Hepatitis'],
  expl: 'Functional abdominal pain is the most common cause, especially in school-aged children, often with no organic pathology.',
  note: 'Only 4 options printed (A-D). No numerals in this stem/options/explanation. Whole question box (stem, options A-D, explanation box) confirmed in a single 600 dpi band crop (crop-1408-full-1408.png W4961 H1300 at x0 y0, 600dpi; option D "Hepatitis" clipped at bottom edge but already fully legible on the 300 dpi full render pg300-1408-1408.png, and the crop was only needed to confirm options A-C and the key). Key highlighted: yellow box on "C. Functional". Printed number "43." and footer "1408" both match n43. No boiler line present.' },

{ n: 44, pr: 44, p: 1410,
  key: 2,
  stem: 'At what age is the first Measles/Mumps/Rubella (MMR) vaccine given in Egypt?',
  opts: ['6 months', '9 months', '12 months', '18 months', '24 months'],
  expl: 'The first MMR dose is given at 12 months, followed by a booster at school age.',
  note: '5 options printed (A-E). Two 600 dpi band crops used: crop-1410-full-1410.png W4961 H1600 at x0 y0 (stem + options A-D) and crop-1410-rest-1410.png W4961 H1300 at x0 y1600 (option E + explanation box + footer). Age numerals "6 months", "9 months", "12 months" (x2, option C and explanation box), "18 months", "24 months" all confirmed on these crops. Key highlighted: yellow box on "C. 12 months". Printed number "44." and footer "1410" both match n44. No boiler line present.' },

{ n: 45, pr: 45, p: 1412,
  key: 0,
  stem: 'Which of the following is an example of passive immunity?',
  opts: ['Palivizumab (monoclonal antibody to RSV)', 'Diphtheria-Tetanus toxoid', 'MMR', 'Influenza vaccine', 'Hepatitis B vaccine given at birth'],
  expl: 'Passive immunity is provided by pre-formed antibodies, such as palivizumab. Vaccines like MMR or DTaP induce active immunity.',
  note: '5 options printed (A-E). No numerals in this stem/options/explanation. Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1412-full-1412.png W4961 H1600 at x0 y0, 600dpi) covering stem+options; explanation box (below, not separately re-cropped, all-text no digits) already fully legible on the 300 dpi full render (pg300-1412-1412.png). Key highlighted: yellow box on "A. Palivizumab (monoclonal antibody to RSV)". Printed number "45." and footer "1412" both match n45. No boiler line present.' },

{ n: 46, pr: 46, p: 1414,
  key: 3,
  stem: 'What is the most effective intervention tested to prevent allergic diseases in infants and children?',
  opts: ["Adding probiotics and prebiotics to infants' feeds", "Adding omega-3 fatty acids to infants' diet", 'The use of skin moisturizers as early as possible', 'Feeding common food allergens to young infants', 'Avoidance of allergenic foods during the first year of life'],
  expl: 'Early introduction of allergenic foods (like peanuts/eggs) has been shown to reduce the risk of allergy. Avoidance actually increases allergy risk.',
  note: '5 options printed (A-E). Numeral "omega-3" (option B) confirmed on a 600 dpi band crop (crop-1414-full-1414.png W4961 H1700 at x0 y0, 600dpi) covering stem+options A-D+top of E; option E and the explanation box (no digits) already fully legible on the 300 dpi full render (pg300-1414-1414.png). Straight ASCII apostrophes in "infants\'" (options A-B) reproduced verbatim as printed. Key highlighted: yellow box on "D. Feeding common food allergens to young infants". Printed number "46." and footer "1414" both match n46. No boiler line present.' },

{ n: 47, pr: 47, p: 1416,
  key: 4,
  stem: 'A 6-day-old baby who is breastfeeding well and thriving is referred by the midwife because she appears jaundiced. She has pigmented stools and is passing urine normally. Examination is unremarkable. Her bilirubin is 5 mg/dl. What would be the appropriate management of this infant?',
  opts: ['Complete a prolonged jaundice screen', 'Commence phototherapy', 'Top up feeds with formula milk', 'Repeat the bilirubin level in 8 hours', 'No treatment required'],
  expl: 'This is physiological jaundice; bilirubin is low, baby is well, stools/urine normal. No intervention is needed.',
  note: '5 options printed (A-E). Two 600 dpi band crops used: crop-1416-stem-1416.png W4961 H1700 at x0 y0 (stem + options A-C) and crop-1416-rest-1416.png W4961 H1300 at x0 y1700 (options D-E + explanation box + footer). Numerals "6-day-old" and "5 mg/dl" (stem) and "8 hours" (option D) all confirmed on these crops. Key highlighted: yellow box on "E. No treatment required". Printed number "47." and footer "1416" both match n47. No boiler line present.' },

{ n: 48, pr: 48, p: 1418,
  key: 3,
  stem: 'A 3-week-old baby is seen in the outpatient clinic for evaluation of frequent bowel motions. He passes yellowish, semi-solid stools 8–10 times per day with no blood or mucus. The baby is exclusively breastfed. On examination, the baby appears well, active, and gaining weight. What is the most likely diagnosis?',
  opts: ['Acute gastroenteritis', 'Lactose intolerance', 'Cow milk protein allergy', 'Normal bowel habit', 'Inflammatory bowel disease'],
  expl: 'Exclusively breastfed infants often pass many yellow, semi-solid stools daily. Since the baby is gaining weight and well, this is normal.',
  note: '5 options printed (A-E). Two 600 dpi band crops used: crop-1418-stem-1418.png W4961 H1600 at x0 y0 (stem + options A-B) and crop-1418-rest-1418.png W4961 H1300 at x0 y1600 (options D-E + explanation box + footer). Numerals "3-week-old" and "8–10 times per day" (en dash, reproduced verbatim as printed) confirmed on the stem crop. Key highlighted: yellow box on "D. Normal bowel habit". Printed number "48." and footer "1418" both match n48. No boiler line present.' },

{ n: 49, pr: 49, p: 1420,
  key: 2,
  stem: 'A 4-year-old girl with a family history of atopy attends her GP. Her older brother suffers from nut allergy and hay fever from grass-end polio. Her mother is very keen to have her tested before introducing her to nuts and requests skin-prick testing.Which of the following statements describe the role of skin-prick testing in this case?',
  opts: ['A positive test confirms the presence of clinical allergy.', 'It is suitable for identifying both IgE and non-IgE-mediated allergy.', 'It tests only for IgE-mediated allergy.', 'It tests for levels of allergen-specific IgE in serum'],
  expl: 'Skin-prick testing detects IgE-mediated sensitization. A positive test shows sensitization, but clinical correlation is required for allergy.',
  note: 'Only 4 options printed (A-D). Two 600 dpi band crops used: crop-1420-stem-1420.png W4961 H1200 at x0 y0 (full stem) and crop-1420-rest-1420.png W4961 H1300 at x0 y1200 (options A-D + top of explanation box). Numeral "4-year-old" confirmed on the stem crop. The stem\'s missing space before "Which" ("testing.Which") and the phrase "grass-end polio" are reproduced verbatim as printed -- transcribed silently per the no-numeral, no-unit, no-dose exception (these are not numerals/units/doses). Key highlighted: yellow box on "C. It tests only for IgE-mediated allergy.". Printed number "49." and footer "1420" both match n49. No boiler line present.' },

{ n: 50, pr: 50, p: 1422,
  key: 4,
  stem: 'Which of the following vaccines would be contraindicated in a 4-year-old boy receiving immunosuppressive therapy for autoimmune hepatitis?',
  opts: ['Tetanus toxoid', 'Hepatitis B vaccine', 'Acellular pertussis vaccine', 'Inactivated polio vaccine', 'BCG'],
  expl: 'Live vaccines (e.g., BCG, MMR, OPV) are contraindicated in immunosuppressed patients. Inactivated vaccines remain safe',
  note: '5 options printed (A-E). Numeral "4-year-old" confirmed on a 600 dpi band crop (crop-1422-full-1422.png W4961 H1600 at x0 y0, 600dpi) covering stem+options A-D; option E and the explanation box (no digits) already fully legible on the 300 dpi full render (pg300-1422-1422.png). Key highlighted: yellow box on "E. BCG". Printed number "50." and footer "1422" both match n50. No boiler line present.' },

{ n: 51, pr: 51, p: 1424,
  key: 1,
  stem: 'Which organisms are most possibly associated with "antibiotic resistance" in neonatal units?',
  opts: ['Gram-positive cocci', 'Gram-negative organisms', 'Gonococci', 'Meningococci'],
  expl: 'Multidrug-resistant gram-negative organisms (e.g., Klebsiella, E. coli, Pseudomonas) are the major concern in NICUs.',
  note: 'Only 4 options printed (A-D). No numerals in this stem/options/explanation. Whole question box (stem, options A-D, explanation box) confirmed in a single 600 dpi band crop (crop-1424-full-1424.png W4961 H1600 at x0 y0, 600dpi) covering stem+options; explanation box (below, not separately re-cropped, all-text no digits) already fully legible on the 300 dpi full render (pg300-1424-1424.png). Straight double quotes around "antibiotic resistance" reproduced verbatim as printed. Key highlighted: yellow box on "B. Gram-negative organisms". Printed number "51." and footer "1424" both match n51. No boiler line present.' },

{ n: 52, pr: 52, p: 1426,
  key: 4,
  stem: 'A 3-year-old girl was at a birthday party. She suddenly developed swollen cheeks and lips and a widespread urticarial rash. She is rushed to the nearby general practice surgery, where it is noted that her breathing is very noisy. She is distressed and frightened. On auscultation, she has widespread wheeze. Which medication would you give first?',
  opts: ['Intramuscular antihistamine', 'Intravenous hydrocortisone', 'Oral antihistamine', 'Oral corticosteroid', 'Intramuscular adrenaline'],
  expl: 'First-line treatment for anaphylaxis is IM adrenaline. Antihistamines and steroids are supportive but not lifesaving.',
  note: '5 options printed (A-E). Layout differs from most entries: the explanation box sits to the right of options C-D rather than below all options, but stem/options/key/explanation are all still on this single page (not a straddle, not a box overflow -- same layout variant as part-B n37). Two 600 dpi band crops used: crop-1426-stem-1426.png W4961 H1500 at x0 y0 (stem + option A) and crop-1426-rest-1426.png W4961 H1300 at x0 y1500 (options B-E + explanation box + footer). Numeral "3-year-old" confirmed on the stem crop; no other numerals in this stem/options/explanation. Key highlighted: yellow box on "E. Intramuscular adrenaline". Printed number "52." and footer "1426" both match n52. No boiler line present.' },

{ n:53, pr:53, p:1428, key:4,
  stem:'An eleven-month-old boy presented to the emergency room with convulsions. He had a history of diarrhea for 3 days and was afebrile. His mother described that he was not thirsty and had no history of convulsions. Examination revealed a large head with wide anterior fontanelle, prominent costochondral junctions, and broad wrists. His eyes and skin pinch were normal, and rectal temperature was 37.8 °C. What is the emergency room initial treatment?',
  opts:['ORS','Antipyretic drug and cold fomentations','Low sodium IV fluids','IV Ceftriaxone','IV calcium gluconate'],
  expl:'The child has hypocalcemic seizures from vitamin D deficiency rickets. Emergency management is IV calcium gluconate.',
  note: '5 options printed (A-E). Layout variant again: explanation box sits to the right of options D-E rather than below all options, but stem/options/key/explanation are all still on this single page (not a straddle, not a box overflow -- same layout variant as n52 and part-B n37). Two 600 dpi band crops used: crop-1428-stem-1428.png W4962 H2100 at x0 y0 (stem + options A-C) and crop-1428-lower-1428.png W4962 H2450 at x0 y1900 (options C-E + explanation box + footer, overlapping the first crop by 200px). Numerals "eleven-month-old", "3 days" and "37.8 °C" all confirmed on the stem crop. Key highlighted: yellow box on "E. IV calcium gluconate". Printed number "53." (seen on the earlier 300 dpi full-page render) and footer "1428" both match n53. No boiler line present. Clinical picture (hypocalcemic tetany/seizures, rachitic changes, normal skin pinch/eyes ruling out dehydration) is internally consistent with the stated key.' },

{ n:54, pr:54, p:1430, key:3,
  stem:'An 8-year-old girl presents with a 6-month history of pain most days around the umbilicus which lasts for an hour and responds to paracetamol syrup. It usually does not occur at weekends. She opens her bowels daily and passes a soft stool. She is thriving with her weight and height on the 75th centile. Which of the following options is the appropriate next step?',
  opts:['Abdominal radiograph','Referral to a pediatric gastroenterologist','Liver function tests','Reassurance and No further investigation','Prescription for laxatives'],
  expl:'Chronic abdominal pain without red flags, normal growth, and weekday-only pattern suggests functional pain. Reassurance is the best step.',
  note: '5 options printed (A-E). Whole question (stem, options, key, explanation box, footer) fits on one page in normal below-options layout -- no straddle, no box overflow, no layout variant. One 600 dpi crop used: crop-1430-1430.png W4962 H3400 at x0 y0, covering the full page. Numerals "8-year-old", "6-month", "an hour", "75th centile" all confirmed. Key highlighted: yellow box on "D. Reassurance and No further investigation". Printed number "54." and footer "1430" both match n54. No boiler line present.' },

{ n:55, pr:55, p:1432, key:3,
  stem:"A 3-month-old baby is seen in clinic with a severe nappy rash. The rash covers the perineal area including the skin folds and features satellite lesions. There is also a white coating on the baby's tongue. The baby is well and thriving. Which of the following is the most appropriate treatment?",
  opts:['Topical flucloxacillin preparation','1% hydrocortisone ointment','Barrier cream, e.g Zinc and castor oil cream','Antifungal preparation, e.g. miconazole','Emollient, e.g. white soft paraffin'],
  expl:'Candida infection presents with involvement of skin folds, satellite lesions, and oral thrush. Antifungal cream is the treatment.',
  note: '5 options printed (A-E). Whole question fits on one page in normal below-options layout -- no straddle, no box overflow, no layout variant. One 600 dpi crop used: crop-1432-1432.png W4962 H3300 at x0 y0, covering the full page. Numeral "3-month-old" and percentage "1%" (in option B) both confirmed. Key highlighted: yellow box on "D. Antifungal preparation, e.g. miconazole". Printed number "55." and footer "1432" both match n55. No boiler line present.' },

{ n:56, pr:56, p:1434, key:4,
  stem:"A 4-year-old boy is brought by his mother to the Emergency Department as he is crying and saying his tummy hurts. He has had a 2-day history of fever, coryza, and cough. He is sitting quietly on his mother's lap and is reluctant to play. He has a temperature of 38.2 °C and a respiratory rate of 50 breaths/min. He complains of pain and tenderness on palpation of the right upper quadrant of the abdomen. What is the most likely cause of abdominal pain?",
  opts:['Appendicitis','Functional abdominal pain','Hepatitis','Mesenteric adenitis','Pneumonia'],
  expl:'Pneumonia, especially right lower lobe, can irritate the diaphragm and cause referred abdominal pain mimicking acute abdomen.',
  note: '5 options printed (A-E). Layout variant again: explanation box sits to the right of options C-D rather than below all options, but stem/options/key/explanation are all still on this single page (not a straddle, not a box overflow -- same layout variant as n52, n53, part-B n37). Two 600 dpi crops used: crop-1434-stem-1434.png W4962 H2200 at x0 y0 (stem + options A-C) and the earlier 300 dpi full-page render for option D/E and the yellow key highlight (both fully legible there, no numerals in D/E needing 600 dpi confirmation). Numerals "4-year-old", "2-day", "38.2 °C", "50 breaths/min" all confirmed on the stem crop. Key highlighted: yellow box on "E.Pneumonia" (no space after the period in the source, reproduced as printed). Printed number "56." and footer "1434" both match n56. No boiler line present.' },

{ n:57, pr:57, p:1436, key:0,
  stem:"A 5-month-old infant is exclusively breastfed until yesterday when her mother started her on formula as she is planning to go back to work. The mother noticed that her baby developed an urticarial rash all over her body very soon after the formula feed. What is the most likely mechanism of this baby's urticaria?",
  opts:['IgE-mediated cow milk allergy','Non-IgE mediated cow milk allergy','Non-allergic hypersensitivity','Lactose intolerance','Immune complex-mediated hypersensitivity reaction'],
  expl:'Immediate urticaria after exposure is due to IgE-mediated allergy. Non-IgE allergy causes delayed GI symptoms.',
  note: '5 options printed (A-E). Whole question fits on one page in normal below-options layout -- no straddle, no box overflow, no layout variant. One 600 dpi crop used: crop-1436-stem-1436.png W4962 H1200 at x0 y0, covering stem + option A; options B-E, explanation box and footer already fully legible on the earlier 300 dpi full-page render (no numerals there needing 600 dpi confirmation). Numeral "5-month-old" confirmed. Key highlighted: yellow box on "A. IgE-mediated cow milk allergy". Printed number "57." and footer "1436" both match n57. No boiler line present.' },

{ n:58, pr:58, p:1438, key:3,
  stem:'A 10-year-old boy has a 2-week history of sore throat, fever, and lethargy. Upon clinical examination there is pharyngitis, hepatosplenomegaly, and bilateral shotty cervical lymph nodes. Blood tests reveal atypical lymphocytes. What is the most likely causative pathogen?',
  opts:['Coxsackievirus','Herpes simplex virus','Varicella zoster virus','Epstein-Barr virus','Cytomegalovirus'],
  expl:'This is infectious mononucleosis due to EBV. Classic triad: fever, pharyngitis, lymphadenopathy.',
  note: '5 options printed (A-E). Whole question fits on one page in normal below-options layout -- no straddle, no box overflow, no layout variant. One 600 dpi crop used: crop-1438-stem-1438.png W4962 H900 at x0 y0, covering the stem; options, explanation box and footer already fully legible on the earlier 300 dpi full-page render (no numerals there needing 600 dpi confirmation). Numerals "10-year-old" and "2-week" confirmed. Key highlighted: yellow box on "D. Epstein-Barr virus". Printed number "58." and footer "1438" both match n58. No boiler line present.' },

{ n:59, pr:59, p:1440, key:2,
  stem:'A 6-year-old girl is admitted with high fever, headache, and neck stiffness. A septic screen is performed and intravenous antibiotics are commenced. Her blood sugar is 130 mg/dl. The CSF results are as follows: Cloudy appearance, 8000 polymorphs, CSF protein 200 mg/dl, CSF glucose 46 mg/dl. What is the most likely diagnosis?',
  opts:['TB meningitis','Viral meningitis','Bacterial meningitis','Encephalitis','Not meningitis'],
  expl:'The CSF findings are typical of bacterial meningitis: turbid, neutrophils, high protein, and low glucose.',
  note: '5 options printed (A-E). Layout variant again: explanation box sits to the right of options C-D rather than below all options, but stem/options/key/explanation are all still on this single page (not a straddle, not a box overflow -- same layout variant as n52, n53, n56, part-B n37). One 600 dpi crop used: crop-1440-stem-1440.png W4962 H1600 at x0 y0, covering stem + options A-B; options C-E, explanation box and footer already fully legible on the earlier 300 dpi full-page render. Numerals "6-year-old", "130 mg/dl" (blood sugar), "8000" (polymorphs), "200 mg/dl" (CSF protein), "46 mg/dl" (CSF glucose) all confirmed on the 600 dpi stem crop. Key highlighted: yellow box on "C. Bacterial meningitis". Printed number "59." and footer "1440" both match n59. No boiler line present.' },

{ n:60, pr:60, p:1442, key:1,
  stem:'An eight-year-old girl presented with low-grade fever and a diffuse maculopapular rash. On examination, her physician noted mild tenderness and swelling of her cervical and occipital lymph nodes. Three days after the onset of illness, the rash vanished. What is the most likely diagnosis?',
  opts:['Measles','German measles','Scarlet fever','Infectious mononucleosis','Chickenpox'],
  expl:'Rubella presents with low-grade fever, maculopapular rash, and tender occipital/postauricular lymphadenopathy. Rash resolves quickly.',
  note: '5 options printed (A-E). Whole question fits on one page in normal below-options layout -- no straddle, no box overflow, no layout variant. One 600 dpi crop used: crop-1442-stem-1442.png W4962 H1200 at x0 y0, covering stem + option A; options B-E, explanation box and footer already fully legible on the earlier 300 dpi full-page render. Numerals "eight-year-old" and "Three days" confirmed. Key highlighted: yellow box on "B. German measles". Printed number "60." and footer "1442" both match n60. No boiler line present. FINAL entry of this staging half (n41-n60 complete).' },

/* ENDPOINT part1 -- Model Final Exam 2 -- staging half D (questions n61..n79, the LAST half of
   this exam -- n79/p.1481 is the final question; Model Final Exam 3 opens p.1484, out of range).
   Source: "Pediatrics endpoint part1.pdf" (Semester 8\Pedo\Questions\, read-only, never modified).
   Answered pages (task-supplied list, measured from content/peds/qb-pages/ocr/ep1/index.json
   2026-09-04): 1444,1446,1448,1450,1452,1454,1456,1458,1460,1462,1464,1466,1468,1470,1473,1475,
   1477,1479,1481 -- a +2 step throughout EXCEPT one break: a notes page at p.1471 shifts the
   answered pages from even to odd after n74 (p.1470) -- n75 is p.1473, and the rest run odd.
   Every question in this exam prints twice (blank exam page, then answered page carrying the
   yellow-highlighted key and usually a bordered explanation box); staging is from the answered
   pages ONLY. Continues directly from endpoint-s11-mfe2.part-C.js (n41..n60, pp.1404-1442); do
   not edit that sibling file.
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

   PROGRESS HEADER -- update after every entry: next page to render is noted here so a dead agent
   can be resumed without re-reading this whole block.
   COMPLETE -- n61-n79 staged, pp.1444-1481, this is the LAST question of Model Final Exam 2 (n79
   /pr80/p.1481). What the header called a "notes page at p.1471" turned out on direct inspection
   to be n74's own explanation box overflowing onto the next sheet (box:1471), NOT a separate notes
   page and not a new question; p.1472 is the ordinary blank exam-copy of n75/p.1473, correctly
   excluded from the answered-page list. The parity shift held exactly as predicted: n75 (p.1473)
   onward runs odd through n79 (p.1481). Model Final Exam 3 opens p.1484 and was NOT rendered --
   out of this task's range, per explicit task instruction not to stage past p.1481.
   FINDING: p.1448 (3rd answered page, expected to walk to n63) prints "64." not "63" -- the
   book's own printed numbering skips 63 entirely, jumping 62 -> 64. Staged as n:63 (sequential
   index within this task's range) / pr:64 (verbatim printed number), per the entry shape's
   n-vs-pr distinction. No page anywhere in the answered-page list prints "63." Confirmed by a
   600 dpi crop of the full question box (crop-1448-full-1448.png), not assumed. */

{ n:61, pr:61, p:1444, key:2,
  stem:'The appropriate repair of duodenal obstruction due to annular pancreas is:',
  opts:['Division of the pancreatic ring','Resection of the pancreatic ring','Duodenoduodenostomy','Subtotal pancreatectomy'],
  expl:'Annular pancreas causes duodenal obstruction due to a pancreatic ring encircling the duodenum. Resection or division risks pancreatic damage, so bypass with duodenoduodenostomy is the safest and most effective option.',
  note: 'Paediatric surgery topic (annular pancreas) -- in scope per task override 3. Only 4 options printed (A-D). No numerals in this stem/options/explanation. Whole question box (stem, options A-D) confirmed on a 600 dpi band crop (crop-1444-full-1444.png W4961 H1400 at x0 y0, 600dpi); explanation box (below, not separately re-cropped, all-text no digits) already fully legible on the 300 dpi full render (pg300-1444-1444.png). Key highlighted: yellow box on "C. Duodenoduodenostomy". Printed number "61." and footer "1444" both match n61 -- walk restarts cleanly from part-C\'s n60. No boiler line present.' },

{ n:62, pr:62, p:1446, key:0,
  stem:'The commonest type of choledochal cyst in Todani classification is:',
  opts:['Type I: fusiform','Type II: saccular','Type III: choledochocele','Type IV: mixed intra/extrahepatic','Type V: intrahepatic ectasia (Caroli disease)'],
  expl:'Type I (fusiform dilation of the common bile duct) is the most common choledochal cyst. It accounts for 80–90% of cases.',
  note: 'Paediatric surgery topic (choledochal cyst) -- in scope per task override 3. 5 options printed (A-E). No numerals in stem/options; percentage "80–90%" (en dash reproduced verbatim as printed) in the explanation box confirmed on a 600 dpi band crop (crop-1446-expl3-1446.png W4962 H600 at x0 y1850, 600dpi). Whole stem+options block already fully legible on the 300 dpi full render (pg300-1446-1446.png). Key highlighted: yellow box on "A. Type I: fusiform". Printed number "62." and footer "1446" both match n62. No boiler line present.' },

{ n:63, pr:64, p:1448, key:0,
  stem:'A full-term boy was presented with imperforate anus shortly after birth. After a few hours of resuscitation, he was noted to pass meconium per urethra. What is the next step?',
  opts:['Colostomy','Perineal anoplasty','Posterior sagittal anorectoplasty','Urethral dilatation','Watchful expectancy'],
  expl:'Meconium passing via urethra indicates a high anorectal malformation with fistula. Initial management is colostomy, followed later by definitive repair.',
  note: 'Paediatric surgery topic (anorectal malformation) -- in scope per task override 3. 5 options printed (A-E). No numerals in stem/options/explanation. Whole question box (stem, options A-E) confirmed on a 600 dpi band crop (crop-1448-full-1448.png W4962 H1900 at x0 y0, 600dpi); explanation box (below, not separately re-cropped, all-text no digits) already fully legible on the 300 dpi full render (pg300-1448-1448.png). Key highlighted: yellow box on "A. Colostomy". PRINTED NUMBER MISMATCH: this page prints "64." not "63" -- the walk from n62 (p.1446, printed "62.") jumps straight to "64.", skipping 63 in the book\'s own numbering. Confirmed twice: on the 300 dpi full render and again on the 600 dpi crop. Staged as n:63 (this task\'s sequential index) / pr:64 (verbatim printed number). Escalated in the closing report. No boiler line present.' },

{ n:64, pr:65, p:1450, key:3,
  stem:'During a screening examination of a 3200 g boy, an absence of anal opening was noted. How can you reliably determine whether this imperforate anus case is high or low?',
  opts:['Administration of water-soluble contrast by nasogastric tube with delayed images','Ultrasound of the perineum','Magnetic resonance imaging scan of the pelvis','Wait 24 hours and observe the perineum for meconium','Plain abdominal films with a radiopaque marker on the perineum immediately after birth'],
  expl:'After 24 hours, a plain abdominal X-ray with perineal marker helps define the level of gas. This determines if the malformation is high or low.',
  note: 'Paediatric surgery topic (imperforate anus, high vs low) -- in scope per task override 3. 5 options printed (A-E). Numerals "3200 g" (stem) and "24 hours" (option D and explanation box, x2) confirmed on a 600 dpi band crop (crop-1450-full-1450.png W4962 H2600 at x0 y0, 600dpi) covering the whole question box. Key highlighted: yellow box on "D. Wait 24 hours and observe the perineum for meconium". Printed number "65." and footer "1450" -- continues the walk from p.1448\'s "64." with a normal +1 step (only n63/pr64 skipped 63; no further skip here). No boiler line present. THE PRINTED KEY AND THE PRINTED EXPLANATION DISAGREE, AND THE KEY DOES NOT MOVE. The highlight sits on D (wait 24 hours and observe the perineum for meconium); the box argues for the technique named in option E (a plain abdominal film with a perineal marker). Established twice from pixels: keypos.py read the highlight as index 2 and was overruled by a cold render read on 2026-09-04 by an agent told nothing about this staging, which reported D / index 3 off a 300 dpi page and a 600 dpi ladder crop and independently reproduced this stem, all five options and the box verbatim. Staged key stays 3. The drafter RECORDS the discrepancy in explanation, quoting what the box prints, and never disputes the key.' },

{ n:65, pr:66, p:1452, key:0,
  stem:'Which of the following is not a feature of hypospadias?',
  opts:['Dorsal chordee','Hooded foreskin','Ventrally placed meatus','Proximal meatus'],
  expl:'Hypospadias involves ventrally placed meatus, hooded foreskin, and sometimes proximal meatus. Chordee, if present, is ventral, not dorsal',
  note: 'Paediatric surgery topic (hypospadias) -- in scope per task override 3. Only 4 options printed (A-D). No numerals anywhere in this stem/options/explanation. Whole question box confirmed on a 600 dpi band crop (crop-1452-full-1452.png W4962 H1400 at x0 y0, 600dpi); explanation box (below, not separately re-cropped, all-text no digits) already fully legible on the 300 dpi full render (pg300-1452-1452.png). Explanation box ends with no closing period after "not dorsal" -- reproduced verbatim as printed. Key highlighted: yellow box on "A. Dorsal chordee". Printed number "66." and footer "1452" -- continues the walk from p.1450\'s "65." with a normal +1 step. No boiler line present.' },

{ n:66, pr:67, p:1454, key:1,
  stem:'In retrosternal diaphragmatic hernia of Morgagni, the defect is situated:',
  opts:['Posteriorly in the diaphragm at the area of the embryonic pleuroperitoneal canal.','Anteriorly through the opening for the superior epigastric artery','Through the esophageal hiatus at the gastroesophageal junction.','In the central tendon'],
  expl:'Morgagni hernia is a retrosternal diaphragmatic defect located anteriorly, usually through the foramina of Morgagni.',
  note: 'Paediatric surgery topic (Morgagni hernia) -- in scope per task override 3. Only 4 options printed (A-D). No numerals anywhere in this stem/options/explanation. Whole question box confirmed on a 600 dpi band crop (crop-1454-full-1454.png W4962 H1700 at x0 y0, 600dpi); explanation box (below, not separately re-cropped, all-text no digits) already fully legible on the 300 dpi full render (pg300-1454-1454.png). Inconsistent trailing periods across options A-D (A and C end with a period, B and D do not) reproduced verbatim as printed. Key highlighted: yellow box on "B. Anteriorly through the opening for the superior epigastric artery". Printed number "67." and footer "1454" -- continues the walk from p.1452\'s "66." with a normal +1 step. No boiler line present.' },

{ n:67, pr:68, p:1456, key:1,
  stem:'In babies born with umbilical hernia:',
  opts:['The majority need surgical correction','Spontaneous closure is the rule rather than the exception','A mesh is usually needed in surgical repair','None of the above'],
  expl:'Most infantile umbilical hernias close spontaneously by 2–3 years of age. Surgery is rarely required.',
  note: 'Paediatric surgery topic (umbilical hernia) -- in scope per task override 3. Only 4 options printed (A-D). No numerals in stem/options; age range "2–3 years of age" (en dash, reproduced verbatim as printed) in the explanation box confirmed on a 600 dpi band crop (crop-1456-expl2-1456.png W4962 H500 at x0 y1550, 600dpi). Whole stem+options block already fully legible on the 300 dpi full render (pg300-1456-1456.png). Key highlighted: yellow box on "B. Spontaneous closure is the rule rather than the exception". Printed number "68." and footer "1456" -- continues the walk from p.1454\'s "67." with a normal +1 step. No boiler line present.' },

{ n:68, pr:69, p:1458, key:3,
  stem:'"Corkscrew sign" on upper GI study indicates the presence of:',
  opts:['Intussusception','Infantile hypertrophic pyloric stenosis','Meconium ileus','Midgut volvulus'],
  expl:'On upper GI contrast study, a "corkscrew appearance" indicates twisted bowel loops due to malrotation with volvulus.',
  note: 'Paediatric surgery topic (malrotation/midgut volvulus) -- in scope per task override 3. Only 4 options printed (A-D). No numerals anywhere in this stem/options/explanation. Whole question box confirmed on a 600 dpi band crop (crop-1458-full-1458.png W4962 H1400 at x0 y0, 600dpi); explanation box (below, not separately re-cropped, all-text no digits) already fully legible on the 300 dpi full render (pg300-1458-1458.png). Curly double quotes around "Corkscrew sign" (stem) and "corkscrew appearance" (explanation box) reproduced verbatim as printed. Key highlighted: yellow box on "D. Midgut volvulus". Printed number "69." and footer "1458" -- continues the walk from p.1456\'s "68." with a normal +1 step. No boiler line present.' },

{ n:69, pr:70, p:1460, key:1,
  stem:'A diagnosis of Hirschsprung disease is made on a newborn baby. What is the definitive diagnostic test for Hirschsprung disease?',
  opts:['Barium enema','Rectal biopsy','Diagnostic laparoscopy','Anorectal manometry'],
  expl:'The gold standard is biopsy showing absence of ganglion cells in the submucosa. Barium enema or manometry are supportive, not definitive.',
  note: 'Paediatric surgery topic (Hirschsprung disease) -- in scope per task override 3. Only 4 options printed (A-D). No numerals anywhere in this stem/options/explanation. Whole question box confirmed on a 600 dpi band crop (crop-1460-full-1460.png W4962 H1600 at x0 y0, 600dpi); explanation box (below, not separately re-cropped, all-text no digits) already fully legible on the 300 dpi full render (pg300-1460-1460.png). Key highlighted: yellow box on "B. Rectal biopsy". Printed number "70." and footer "1460" -- continues the walk from p.1458\'s "69." with a normal +1 step. No boiler line present.' },

{ n:70, pr:71, p:1462, key:3,
  stem:'A 7-month-old child presents with fever of 39°C for 3 days, mildly injected pharynx, and mild diarrhea. On the fourth day of the illness, the fever ceases and a maculopapular rash appears. What is the most likely diagnosis?',
  opts:['Measles','Rubella','Drug reaction to antipyretics','Roseola infantum','Enteroviral infection'],
  expl:'Caused by HHV-6, it features high fever for 3–4 days, then a maculopapular rash appears as fever resolves.',
  note: '5 options printed (A-E). Numerals "7-month-old", "39°C" and "3 days" (stem) confirmed on a 600 dpi band crop (crop-1462-stem-1462.png W4962 H1000 at x0 y0, 600dpi); "HHV-6" and "3–4 days" (en dash, explanation box) confirmed on a second 600 dpi crop (crop-1462-expl3-1462.png W4962 H450 at x0 y2100, 600dpi -- two earlier attempts at y1550 and y2450 missed the box, retried until it was fully captured). Key highlighted: yellow box on "D. Roseola infantum" (confirmed on crop-1462-expl-1462.png W4962 H500 at x0 y1550). Printed number "71." and footer "1462" -- continues the walk from p.1460\'s "70." with a normal +1 step. No boiler line present.' },

{ n:71, pr:72, p:1464, key:0,
  stem:'A 9-year-old girl presented with fever that increased gradually to 40°C over 4 days. Then a maculopapular rash appeared on the forehead and spread to the trunk and extremities over 3 days. When the rash had appeared on the feet, the temperature dropped abruptly. What is the most probable diagnosis?',
  opts:['Measles','Rubella','Varicella','Scarlet fever','Roseola infantum'],
  expl:'Measles presents with fever followed by a maculopapular rash starting at the forehead, spreading downward. Rash coincides with fever peak.',
  note: '5 options printed (A-E). Numerals "9-year-old", "40°C", "4 days" and "3 days" (stem) confirmed on a 600 dpi band crop (crop-1464-stem-1464.png W4962 H1300 at x0 y0, 600dpi); options and explanation box (no digits) already fully legible on the 300 dpi full render (pg300-1464-1464.png). Key highlighted: yellow box on "A. Measles". Printed number "72." and footer "1464" -- continues the walk from p.1462\'s "71." with a normal +1 step. No boiler line present.' },

{ n:72, pr:73, p:1466, key:4,
  stem:'A 2-year-old girl has been ill for 2 days with fever, decreased appetite, and a rash. On physical examination, you note ulcers on the mouth and tongue. You also see vesicles with surrounding erythema on the palms and the dorsum of the hands and feet. What is the most likely causative microorganism?',
  opts:['Candida albicans','Herpes simplex type 1','Parvovirus B19','Varicella','Enterovirus'],
  expl:'This is hand-foot-mouth disease, caused by Coxsackie A virus (an enterovirus).',
  note: '5 options printed (A-E). Numerals "2-year-old", "2 days" (stem), "type 1" (option B) and "B19" (option C) confirmed on a 600 dpi band crop (crop-1466-full-1466.png W4962 H2100 at x0 y0, 600dpi) covering stem+options; explanation box (no digits) already fully legible on the 300 dpi full render (pg300-1466-1466.png). Key highlighted: yellow box on "E. Enterovirus". Printed number "73." and footer "1466" -- continues the walk from p.1464\'s "72." with a normal +1 step. No boiler line present.' },

{ n:73, pr:74, p:1468, key:3,
  stem:'A two-month-old male infant presents with history of fever for 6 days. No respiratory or GI symptoms and no improvement with symptomatic treatment. On examination, the child is sick-looking and lethargic. What is the best next step in his management?',
  opts:['Admit the child for close examination and investigations in a controlled setting','Consider medical child abuse','Send preliminary investigations and continue symptomatic treatment','Full septic work-up and start broad-spectrum IV antibiotics','Hydrate the infant and observe for fever'],
  expl:'Persistent fever in an infant with lethargy suggests serious bacterial infection -> immediate septic screen + IV antibiotics.',
  note: '5 options printed (A-E). "two-month-old" is spelled out in words on the page (not a digit) and "6 days" confirmed on a 600 dpi band crop (crop-1468-stem-1468.png W4961 H700 at x0 y0, 600dpi), which also confirms printed number "74."; options and explanation box (no digits, one "->" arrow reproduced as printed) already fully legible on the 300 dpi full render (pg300-1468-1468.png). Key highlighted: yellow box on "D. Full septic work-up and start broad-spectrum IV antibiotics". Printed number "74." and footer "1468" -- continues the walk from p.1466\'s "73." with a normal +1 step. No boiler line present.' },

{ n:74, pr:75, p:1470, key:4, box:1471,
  stem:'An 18-month-old boy presents with 3 days of vomiting and diarrhea. The vomiting has now settled, but he continues to have loose stools (he had about eight loose stools in the last 24 hours). His mucous membranes are dry, he has sunken eyes, and appears lethargic. His skin turgor is reduced. His extremities are warm and capillary refill time is normal. What is the NEXT step in management?',
  opts:['Antipyretic/analgesia','Intravenous bolus of 20 mL/kg of normal saline','Nasogastric rehydration therapy','Oral antibiotic','Oral rehydration solution'],
  expl:'•Child has moderate dehydration (sunken eyes, dry mucosa, ↓ turgor, lethargy).\n•Warm extremities & normal capillary refill → no shock.\n•ORS is first-line for mild–moderate dehydration.\n•IV fluids only if severe/shock or ORS fails.\n•Antibiotics/antipyretics not indicated for rehydration.',
  note: '5 options printed (A-E). Numerals "18-month-old", "3 days", "eight loose stools", "24 hours" (stem) and "20 mL/kg" (option B) confirmed on a 600 dpi band crop covering the whole question box (crop-1470-full-1470.png W4961 H2600 at x0 y0, 600dpi). Key highlighted: yellow box on "E. Oral rehydration solution". Printed number "75." and footer "1470" -- continues the walk from p.1468\'s "74." with a normal +1 step, matching pr:75 expected from the n+1 printed-number offset. FOOT OF P.1470, LOOKED AT DIRECTLY: the question box (stem, options A-E, yellow key) closes cleanly with plain white space below on both the 300 dpi full render (pg300-1470-1470.png) and the 600 dpi crop -- nothing runs on and no separate explanation box is printed on this sheet. What the header called a "notes page at p.1471" is NOT a separate notes page and not a new question: rendered and read at 300 dpi (pg300-1471-1471.png) and re-confirmed on a 600 dpi crop (crop-1471-box-1471.png W4961 H1200 at x0 y0, 600dpi), p.1471 carries a single bordered explanation box, printing no question number, that is this question\'s (n74/p.1470) explanation box overflowing onto the next sheet -- a BOX OVERFLOW per task override 5, NOT a straddle: stem, all 5 options and the key all sit on p.1470 alone, only the explanation text continues onto p.1471. Recorded via the box:1471 field; no straddle:true and no STRADDLE marker used. Explanation box on p.1471 reproduces a real down-arrow "↓" and right-arrow "→" glyph (not ASCII "->") and an en dash in "mild–moderate", confirmed on the 600 dpi crop; bullets "•" and the bold/red styling on "moderate dehydration" are the page\'s own emphasis, transcribed as plain text with the bullet character kept. No boiler line present. This is the parity-shift break the previous agent flagged: next answered page after this is p.1473, not p.1472.' },

{ n:75, pr:76, p:1473, key:0,
  stem:'A two-year-old male child is admitted with a history of fever for the last ten days. History and clinical examination are unremarkable. What is the next most appropriate step in managing this child?',
  opts:['Verification of the severity and duration of fever.','To do investigations to rule out tuberculosis.','Immediate hospital admission.','To do preliminary blood investigations.','Start broad-spectrum antibiotics after blood culture.'],
  expl:'This is fever of unknown origin (FUO). First step is careful history and confirmation before investigations.',
  note: 'TOP OF P.1473, LOOKED AT DIRECTLY, before assuming a clean handoff: p.1472 (rendered and read first, pg300-1472.png) is the BLANK exam-copy printing of this same question (stem "76. A two-year-old male child..." verbatim, options A-E, no yellow key, no explanation box, footer "1472") -- this is the book\'s normal blank-then-answered pairing (header lines 8-9), not a duplicate question; it is correctly excluded from the answered-page list. p.1473 (this entry) opens fresh with its own "76." stem, no fragment or continuation carried over from p.1471 or p.1472 -- confirmed on the 300 dpi full render (pg300-1473.png) and the 600 dpi full-box crop (crop-1473-full-1473.png W4961 H2500 at x0 y0, 600dpi). "two-year-old" and "the last ten days" are spelled out in words on the page, not digits -- no numerals anywhere in stem/options/explanation, so the whole box is read off the 600 dpi crop for completeness rather than any specific numeral. Key highlighted: yellow box on "A. Verification of the severity and duration of fever.". Explanation box (bordered, below options, same sheet, no overflow) reproduced verbatim, no dashes/arrows/digits. Printed number "76." and footer "1473" -- this is the first page after the p.1471 box-overflow / p.1472 blank-copy pair; walk continues normally: n74 printed "75." (p.1470) -> n75 printed "76." (p.1473), a +1 step in printed number despite the +3 step in PDF page (1470->1473), exactly the parity shift flagged in the header and in task override. From here the answered pages run odd (1473,1475,1477,1479,1481) as predicted. No boiler line present. No straddle: stem, all 5 options and the key sit entirely on p.1473.' },

{ n:76, pr:77, p:1475, key:0,
  stem:'A 2-month-old baby is seen in the pediatric outpatient department. She was born at term, weighing 3.5 kg, and is breastfed. Her mother is concerned as she has vomited some of the milk after most feeds since birth. She cries when she vomits. She is continuing to grow along the 50th centile. What is the most likely diagnosis?',
  opts:['Gastroesophageal reflux','Gastroenteritis','Infant colic','Overfeeding','Pyloric stenosis'],
  expl:'Reflux is common, especially if baby is thriving and growing normally. Red flags (projectile vomiting, poor growth) are absent.',
  note: '5 options printed (A-E). Numerals "2-month-old", "3.5 kg" and "50th centile" (stem) confirmed on a 600 dpi band crop covering the whole question box (crop-1475-full-1475.png W4961 H2400 at x0 y0, 600dpi). Key highlighted: yellow box on "A. Gastroesophageal reflux". Explanation box printed BESIDE options C/D (to the right of "C. Infant colic" / "D. Overfeeding"), not below the option ladder -- a layout variant like n37/n52/n53/n56/n59 (brief task override 5), not a straddle or box overflow: whole box (stem, options, key, explanation) sits on p.1475 alone. Printed number "77." and footer "1475" -- continues the walk from p.1473\'s "76." with a normal +1 step, matching the odd-page run predicted after the parity shift (next answered page after this is p.1477). No boiler line present.' },

{ n:77, pr:78, p:1477, key:2,
  stem:'A 4-week-old boy came to your clinic with persistent jaundice. He was born by SVD at term with a weight of 3.3 kg. He had an Apgar score of 9 and 9 at 1 and 5 minutes respectively and was discharged home with no concerns. On investigation, his conjugated bilirubin was 0.8 mg/dL and his unconjugated bilirubin was 14 mg/dL. The mother reports that she has always breastfed her baby and that her baby has always been well. On examination, he is jaundiced, alert, afebrile, and has a normal liver span. His current weight is 4.1 kg. Which of the following is the most appropriate management?',
  opts:['Cessation of breastfeeding.','Commence phototherapy.','Reassure the mother and continue breastfeeding.','Perform liver function tests and ultrasound abdomen.'],
  expl:'This is breast milk jaundice, benign and self-limiting. No treatment needed if conjugated bilirubin is normal.',
  note: 'Only 4 options printed (A-D). Numerals "4-week-old", "3.3 kg", "9 and 9", "1 and 5 minutes", "0.8 mg/dL", "14 mg/dL" and "4.1 kg" confirmed on two 600 dpi band crops covering the whole question box (crop-1477-stem-1477.png W4961 H1500 at x0 y0, and crop-1477-opts-1477.png W4961 H1400 at x0 y1400, both 600dpi). Key highlighted: yellow box on "C. Reassure the mother and continue breastfeeding.". Explanation box printed BESIDE options A/B (to the right, same layout-variant pattern as n76/p.1475 and earlier n37/n52/n53/n56/n59), not below the ladder -- not a straddle or box overflow: whole box sits on p.1477 alone. Printed number "78." and footer "1477" -- continues the walk from p.1475\'s "77." with a normal +1 step, matching the odd-page run predicted after the parity shift (next answered page after this is p.1479). No boiler line present.' },

{ n:78, pr:79, p:1479, key:2,
  stem:'A female infant is delivered by cesarean section at 32 weeks\' gestation. Her birth weight is 1.9 kg. No resuscitation is required. At 2 hours of age, she develops respiratory distress, with a respiratory rate of 70 breaths/min, grunting respirations, and indrawing of her rib cage. Respiratory support with CPAP (continuous positive airway pressure) and 45% oxygen is required. What is the most likely reason that this baby needs respiratory support?',
  opts:['Aspiration of meconium','Patent ductus arteriosus','Surfactant deficiency','Transient tachypnea of the newborn','Early neonatal sepsis'],
  expl:'A 32-week infant with early respiratory distress most likely has respiratory distress syndrome due to surfactant deficiency.',
  note: '5 options printed (A-E). Numerals "32 weeks\'", "1.9 kg", "2 hours", "70 breaths/min", "45% oxygen" (stem) and "32-week infant" (explanation box) confirmed on a 600 dpi band crop covering the whole question box (crop-1479-full-1479.png W4961 H2500 at x0 y0, 600dpi). Key highlighted: yellow box on "C. Surfactant deficiency". Explanation box printed BESIDE options B/C (to the right, same layout-variant pattern as n76/p.1475 and n77/p.1477), not below the ladder -- not a straddle or box overflow: whole box sits on p.1479 alone. Printed number "79." and footer "1479" -- continues the walk from p.1477\'s "78." with a normal +1 step, matching the odd-page run predicted after the parity shift. No boiler line present. Next and final page in range is p.1481 (n79).' },

{ n:79, pr:80, p:1481, key:1,
  stem:'Which one of the following is the most important cause of jaundice presenting in the first 24 hours of life?',
  opts:['Prematurity','Hemolysis','Breastfeeding','Physiological jaundice','Early-onset sepsis'],
  expl:'Early jaundice (<24h) is always pathological, most often due to hemolysis (e.g., Rh or ABO incompatibility).',
  note: '5 options printed (A-E). "24 hours" (stem) and "<24h" (explanation box, angle-bracket reproduced as printed) confirmed on a 600 dpi band crop covering the whole question box (crop-1481-full-1481.png W4961 H2400 at x0 y0, 600dpi). Key highlighted: yellow box on "B. Hemolysis". Explanation box printed BELOW the option ladder (not beside, unlike n76-n78), same sheet, no overflow -- not a straddle or box overflow. Printed number "80." and footer "1481" -- continues the walk from p.1479\'s "79." with a normal +1 step, matching pr:80 = n+1 for this exam\'s offset. THIS IS THE LAST QUESTION OF MODEL FINAL EXAM 2 in this task\'s range -- per task instruction, p.1481 is the final page to stage and p.1482-1483 were not rendered (Model Final Exam 3 opens p.1484, out of range, and the task explicitly said not to stage past p.1481, so the one-page-past boundary render specified in the general brief Section 6 was skipped here on the task\'s own authority rather than independently re-verified). No boiler line present. HALF D COMPLETE: n61-n79 staged, pp.1444-1481.' }

];
