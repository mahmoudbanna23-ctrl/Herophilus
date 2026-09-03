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
  note: 'Only 4 options printed (A-D). Whole question box (stem, options A-D, explanation box) confirmed across two 600 dpi band crops (crop-1324-full-1324.png W4700 H1700 at x0 y150; crop-1324-opts-1324.png W4700 H1100 at x0 y1750, 600dpi). Numerals "3-year-old", "8 days", "170 beats per minute", "20 per minute", "75 mmHg", "5 seconds" confirmed in crop-1324-full. Key highlighted: yellow box on "D. Hypovolemic shock" confirmed in crop-1324-opts. Printed number "1." matches n1. No boiler line present.' }

{ n: 2, pr: 2, p: 1326,
  key: 4,
  stem: 'Which of the following would be the single most important factor responsible for a possible decline in the incidence of sudden infant death syndrome (SIDS)?',
  opts: ['Feet to foot of cot', "Keeping baby in parent's room until 6 months of age", 'Keeping room cool to prevent overheating', 'Parents not smoking in the same room as the infant', 'Supine sleeping'],
  expl: 'The most important factor in reducing SIDS has been the "Back to Sleep" campaign, encouraging babies to sleep on their backs. Other measures help but are less impactful.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1326-full-1326.png W4700 H3000 at x0 y150, 600dpi). Numeral "6 months of age" in option B confirmed in the same crop. Key highlighted: yellow box on "E. Supine sleeping". Printed number "2." matches n2. No boiler line present.' }

{ n: 3, pr: 3, p: 1328,
  key: 3,
  stem: 'Which is a characteristic of constitutional growth delay?',
  opts: ['Adequate bone age', 'More common in girls', 'Anal height is affected', 'A delayed onset of puberty', 'Presentation is in infancy'],
  expl: 'Children with constitutional growth delay have delayed bone age and puberty, but eventually reach normal adult height. It is more common in boys.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1328-full-1328.png W4700 H3000 at x0 y150, 600dpi). Key highlighted: yellow box on "D. A delayed onset of puberty". No numerals/units/doses in this stem/options/explanation. Printed number "3." matches n3. No boiler line present.' }

{ n: 4, pr: 4, p: 1330,
  key: 4,
  stem: 'A 1-year-old girl is brought to the emergency room with a history of persistent vomiting and loose, watery stools. Which of the following would be a sign of uncompensated shock?',
  opts: ['Capillary refill time greater than 3 seconds', 'Heart rate greater than 120 beats/min', 'Cold extremities', 'Respiratory rate greater than 40 breaths/min', 'Low blood pressure'],
  expl: 'In compensated shock, blood pressure is maintained by tachycardia and vasoconstriction. Hypotension indicates progression to uncompensated (decompensated) shock.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1330-full-1330.png W4700 H3000 at x0 y150, 600dpi). Numerals "1-year-old", "3 seconds", "120 beats/min", "40 breaths/min" confirmed in the same crop. Key highlighted: yellow box on "E. Low blood pressure". Printed number "4." matches n4. No boiler line present.' }

{ n: 5, pr: 5, p: 1332,
  key: 3,
  stem: 'What is the first sign of normal puberty in girls?',
  opts: ['Height acceleration', 'Pubic hair changes', 'Menarche', 'Palpable Breast bud', 'Clitoris growth'],
  expl: 'Thelarche is the first sign of puberty in girls, typically around age 9–11. Menarche and pubic hair changes occur later.',
  note: '5 options printed (A-E; option D printed as "D.Palpable Breast bud" with no space after the period, transcribed as printed). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1332-full-1332.png W4700 H3000 at x0 y150, 600dpi). Numeral "age 9–11" (en dash as printed) confirmed in the same crop. Key highlighted: yellow box on "D.Palpable Breast bud". Printed number "5." matches n5. No boiler line present.' }

{ n: 6, pr: 6, p: 1334,
  key: 1,
  stem: 'During which period of human growth does faltering growth typically occur?',
  opts: ['Fetal phase', 'Infant phase', 'Childhood phase', 'Prepubertal phase', 'Pubertal phase'],
  expl: 'Faltering growth is most commonly seen in infancy when nutrition and feeding problems are most likely.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1334-full-1334.png W4700 H3000 at x0 y150, 600dpi). Key highlighted: yellow box on "B. Infant phase". No numerals/units/doses in this stem/options/explanation. Printed number "6." matches n6. No boiler line present.' }

{ n: 7, pr: 7, p: 1336,
  key: 3,
  stem: 'What would be the shape of the head if craniosynostosis affects the lambdoid suture?',
  opts: ['Wide and broad', 'Long and narrow', 'Prominent forehead', 'Flattening of the skull'],
  expl: 'Fusion of the lambdoid suture causes a flat occiput and asymmetric skull shape (posterior plagiocephaly).',
  note: 'Only 4 options printed (A-D). Whole question box (stem, options A-D, explanation box) confirmed in a single 600 dpi band crop (crop-1336-full-1336.png W4700 H3000 at x0 y150, 600dpi). Key highlighted: yellow box on "D. Flattening of the skull". No numerals/units/doses in this stem/options/explanation. Printed number "7." matches n7. No boiler line present.' }

{ n: 8, pr: 8, p: 1338,
  key: 1,
  stem: 'How is a very low birth weight infant defined?',
  opts: ['Birth weight less than 2500 g', 'Birth weight less than 1500 g', 'Birth weight less than 1750 g', 'Birth weight less than 1000 g', 'Birth weight less than 500 g'],
  expl: 'VLBW is defined as a birth weight less than 1500 g. ELBW (extremely low birth weight) is <1000 g.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1338-full-1338.png W4700 H3000 at x0 y150, 600dpi). Numerals "2500 g", "1500 g", "1750 g", "1000 g", "500 g", "<1000 g" (explanation) all confirmed in the same crop. Key highlighted: yellow box on "B. Birth weight less than 1500 g". Printed number "8." matches n8. No boiler line present.' }

{ n: 9, pr: 9, p: 1340,
  key: 3,
  stem: 'Which problem is commonly associated with large for gestational age infants?',
  opts: ['Hyperglycemia', 'Hypercalcemia', 'Anemia', 'Birth asphyxia', 'Heart failure'],
  expl: 'LGA infants, often of diabetic mothers, are prone to shoulder dystocia, birth trauma, and birth asphyxia.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1340-full-1340.png W4700 H3000 at x0 y150, 600dpi). Key highlighted: yellow box on "D. Birth asphyxia". No numerals/units/doses in this stem/options/explanation. Printed number "9." matches n9. No boiler line present.' }

{ n: 10, pr: 10, p: 1342,
  key: 4,
  stem: 'Which complication is most likely in an infant of a diabetic mother?',
  opts: ['Microsomia', 'Hyperglycemia', 'Anemia', 'Hypercalcemia', 'Hypertrophic cardiomyopathy'],
  expl: 'Infants of diabetic mothers are prone to macrosomia, hypoglycemia, hypocalcemia, and transient hypertrophic cardiomyopathy due to fetal hyperinsulinism.',
  note: '5 options printed (A-E; option A printed as "Microsomia", transcribed as printed, verbatim per rule). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1342-full-1342.png W4700 H3000 at x0 y150, 600dpi). Key highlighted: yellow box on "E. Hypertrophic cardiomyopathy". No numerals/units/doses in this stem/options/explanation. Printed number "10." matches n10. No boiler line present.' }

{ n: 11, pr: 11, p: 1344,
  key: 1,
  stem: 'Which one of the following maternal infections may be associated with microcephaly in the fetus?',
  opts: ['Parvovirus B19', 'Cytomegalovirus', 'Hepatitis B', 'Measles', 'Enteroviruses'],
  expl: 'CMV is a TORCH infection classically associated with microcephaly, periventricular calcifications, and growth restriction.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1344-full-1344.png W4700 H3000 at x0 y150, 600dpi). Numeral "B19" in option A confirmed in the same crop. Key highlighted: yellow box on "B. Cytomegalovirus". Printed number "11." matches n11. No boiler line present.' }

{ n: 12, pr: 12, p: 1346,
  key: 0,
  stem: "What is appropriate regarding the role of vitamins in children's nutrition?",
  opts: ['Vitamin C deficiency can lead to petechiae and mucosal bleeding', "Vitamin K's main function is in the synthesis of RBCs", 'Vitamin E deficiency leads to decreased clot generation', 'Vitamin B12 deficiency is common in infants', 'Folic acid has no role in blood production'],
  expl: 'Vitamin C deficiency (scurvy) leads to defective collagen synthesis, bruising, bleeding gums, and petechiae. Vitamin K is for coagulation, not RBC synthesis.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1346-full-1346.png W4700 H3000 at x0 y150, 600dpi). Numeral "B12" in option D confirmed in the same crop. Key highlighted: yellow box on "A. Vitamin C deficiency can lead to petechiae and mucosal bleeding". Printed number "12." matches n12. No boiler line present.' }

{ n: 13, pr: 13, p: 1348,
  key: 1,
  stem: "The parents of a 1-week-old breastfed infant report that the physiologic jaundice has never resolved completely. The stool is grayish-white while the baby's urine stains the diaper brown. What is the MOST likely diagnosis?",
  opts: ['Neonatal sepsis', 'Biliary atresia', 'G6PD deficiency', 'Congenital hypothyroidism', 'Breast milk jaundice'],
  expl: 'Persistent jaundice with acholic stools and dark urine indicates cholestasis, most commonly due to biliary atresia.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1348-full-1348.png W4700 H3000 at x0 y150, 600dpi). Numeral "1-week-old" confirmed in the same crop. Key highlighted: yellow box on "B. Biliary atresia". Printed number "13." matches n13. No boiler line present.' }

{ n: 14, pr: 14, p: 1350,
  key: 3,
  stem: 'Which statement best applies to fetal circulation?',
  opts: ['All of the cardiac output goes to the lungs via the pulmonary artery', 'The ductus arteriosus helps send oxygenated blood to the brain', 'Blood shunts across the ductus arteriosus from the aorta to the pulmonary artery', 'Blood from the inferior vena cava mainly passes through the foramen ovale'],
  expl: 'Oxygen-rich blood from the placenta enters the IVC and preferentially crosses the foramen ovale to the left atrium and systemic circulation.',
  note: '4 options printed (A-D), no option E on this page. Whole question box (stem, options A-D, explanation box) confirmed in a single 600 dpi band crop (crop-1350-full-1350.png W4700 H3000 at x0 y150, 600dpi). No numerals present to verify. Key highlighted: yellow box on "D. Blood from the inferior vena cava mainly passes through the foramen ovale". Printed number "14." matches n14. No boiler line present.' }

{ n: 15, pr: 15, p: 1352,
  key: 1,
  stem: 'What is the main benefit of human milk oligosaccharides?',
  opts: ['Kill microorganisms', 'Work as prebiotics', 'Help protein absorption', 'Help lactose digestion', 'Prevent infant colic'],
  expl: 'HMOs promote growth of beneficial gut microbiota, supporting immunity and gut health.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1352-full-1352.png W4700 H3000 at x0 y150, 600dpi). No numerals present to verify. Key highlighted: yellow box on "B. Work as prebiotics". Printed number "15." matches n15. No boiler line present.' }

{ n: 16, pr: 16, p: 1354,
  key: 3,
  stem: 'A 2-year-old girl is brought to the clinic for a routine check-up. Her mother states that she does not like to eat but prefers eating only a few spoons of pasta each day.What is the best method to check her nutritional status?',
  opts: ['Head circumference', 'Height', 'Weight', 'Weight-for-height', 'Skinfold thickness'],
  expl: 'Weight-for-height assesses acute malnutrition and is the best parameter for nutritional status in toddlers.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1354-full-1354.png W4700 H3000 at x0 y150, 600dpi). Numeral "2-year-old" confirmed in the same crop. Missing space after "day." before "What" printed as shown, preserved verbatim. Key highlighted: yellow box on "D. Weight-for-height". Printed number "16." matches n16. No boiler line present.' }

{ n: 17, pr: 17, p: 1356,
  key: 3,
  stem: 'An 18-month-old exclusively breastfed infant has not started standing or walking yet. On examination, she has swelling of her wrists, an open fontanelle, and has not yet erupted any teeth. Which of the following is the most likely cause?',
  opts: ['Vitamin A deficiency', 'Vitamin B deficiency', 'Vitamin C deficiency', 'Vitamin D deficiency', 'Vitamin E deficiency'],
  expl: 'These are classic features of rickets due to vitamin D deficiency, common in exclusively breastfed infants without supplementation.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1356-full-1356.png W4700 H3000 at x0 y150, 600dpi). Numeral "18-month-old" confirmed in the same crop. Key highlighted: yellow box on "D. Vitamin D deficiency". Printed number "17." matches n17. No boiler line present.' }

{ n: 18, pr: 18, p: 1358,
  key: 0,
  stem: 'What is true about the management of gastroesophageal reflux in children?',
  opts: ['Parents can be reassured; it is a process the child will outgrow as they get older', 'Thickening the feedings does not work', 'Most infants have slow weight gain', 'It always deserves further evaluation', 'Surgery is indicated in preterm infants'],
  expl: 'Most infants with GER are "happy spitters," and reassurance is sufficient. It usually resolves by 12-18 months.',
  note: '5 options printed (A-E). Whole question box confirmed in a 600 dpi band crop (crop-1358-full-1358.png W4700 H3000 at x0 y150, 600dpi); option A wraps to a second line and its right edge was clipped by the crop width, so a 300 dpi full-page render (p-1358.png) was pulled to confirm the wrap reads "...as they get older" with nothing missing. Numeral "12-18 months" confirmed in the explanation box. Key highlighted: yellow box on "A. Parents can be reassured; it is a process the child will outgrow as they get older". Printed number "18." and footer "1358" both match. No boiler line present.' }

{ n: 19, pr: 19, p: 1360,
  key: 4,
  stem: 'In terms of allergy, what does the term sensitization mean?',
  opts: ['Objectively reproducible symptoms or signs following exposure to a defined stimulus at a dose usually tolerated by most people', 'An abnormal clinical reaction initiated by specific immunological mechanisms', 'A personal and/or familial tendency to produce IgE antibodies in response to ordinary exposures to potential allergens', 'A serious allergic reaction that is rapid in onset and may cause death', 'A positive test to an allergen, either by skin prick test or specific IgE'],
  expl: 'Sensitization means detection of an IgE response to an allergen, but it does not always cause clinical allergy.',
  note: '5 options printed (A-E). Whole question box confirmed in a 600 dpi band crop (crop-1360-full-1360.png W4700 H3000 at x0 y150, 600dpi); option B was right-clipped by the crop width, so a 300 dpi full-page render (p-1360.png) confirmed it ends cleanly at "mechanisms" with no further wrap. No other numerals present. Key highlighted: yellow box on "E. A positive test to an allergen, either by skin prick test or specific IgE". Printed number "19." and footer "1360" both match. No boiler line present.' }

{ n: 20, pr: 20, p: 1362,
  key: 4,
  stem: 'Which of the following is a true contraindication to the administration of DTaP (diphtheria, tetanus toxoid, and acellular pertussis) vaccine?',
  opts: ['Child is currently on amoxicillin for otitis media', 'Positive family history of adverse reactions to DTaP vaccine', 'A past history of whooping cough', 'Child is currently coryzal and febrile (37.9 °C)', 'Seizures after the last dose of DTaP vaccine'],
  expl: 'A severe neurologic reaction (eg, seizures, encephalopathy) after a previous dose is a true contraindication. Mild fever or family history are not.',
  note: '5 options printed (A-E). Whole question box (stem, options A-E, explanation box) confirmed in a single 600 dpi band crop (crop-1362-full-1362.png W4700 H3000 at x0 y150, 600dpi). Numeral "37.9 °C" in option D confirmed clearly in the same crop. Key highlighted: yellow box on "E. Seizures after the last dose of DTaP vaccine". Printed number "20." matches n20. No boiler line present. Last question of Model Final Exam 2 n1-n20 range.' }
