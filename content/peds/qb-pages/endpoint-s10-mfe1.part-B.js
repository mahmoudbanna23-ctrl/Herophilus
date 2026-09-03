/* ENDPOINT part1 -- Model Final Exam 1 -- staging half B (questions 21..40, n21..n40).
   Source: "Pediatrics endpoint part1.pdf", PDF pages n21=1199, n22=1201, n23=1203, n24=1205,
   n25=1207, n26=1209, n27=1211, n28=1214, n29=1216, n30=1218, n31=1220, n32=1222, n33=1224,
   n34=1226, n35=1228, n36=1230, n37=1232, n38=1234, n39=1236, n40=1238 -- step +2 EXCEPT
   between n27 (1211) and n28 (1214): p.1212 is a notes page and p.1213 the blank exam printing,
   per task instructions -- not recomputed, taken as given.
   PDF is 1:1 (no 2-up split) -- brief pd-staging-brief.md's Section 2 2-up arithmetic does NOT
   apply here, per task instructions. Every question in this exam prints twice (blank exam page,
   then answer-key page with a yellow highlight); staging is from the answer-key pages listed
   above only.
   OCR at content/peds/qb-pages/ocr/ep1/p<NNNN>.txt used for orientation/location only, never
   transcribed from -- confirmed per brief Section 4. Every numeral, unit, dose, exponent and
   every answer-key letter is read off a 600 dpi band crop, never off a 300 dpi full render --
   per task instructions Section 5 (Part A's "born-digital" 300-dpi-only shortcut is NOT repeated
   here).
   COMPLETE -- all 20 entries (n21..n40) staged, one page at a time, each validated with
   check-part-ep.js immediately after appending. Final validator run: 20 entries, n 21..40,
   pp.1199-1238, option counts {4:6, 5:14}, key positions {0:3, 1:7, 2:3, 3:4, 4:3}, no printed
   box (expl:""): none, pr != n: none, figures: none -- OK.
   Straddles: ONE -- n27 (p.1211) straddles onto p.1212 for its explanation box; verified by
   rendering both p.1212 (notes page, confirms the straddle) and p.1213 (confirmed blank/unanswered
   printing of Q28, no yellow anywhere -- validates the given page-gap rather than contradicting it).
   Defective printed options: n34 (p.1226) -- options B and D both print "Gestational age" verbatim
   (exact duplicate); the yellow highlight is on D, so key=3 as printed, recorded not disputed.
   Figures: none encountered in n21..n40. Paediatric surgery: not encountered in this range --
   nothing skipped for that reason. Boiler line ("Select one answer only." or similar): not printed
   on any of the 20 pages. Every numeral, unit, dose, exponent and answer-key letter across all 20
   entries was read off a 600 dpi band crop, named in that entry's note, and cross-checked against
   the 300 dpi full render -- no mismatches found, no re-render-shifted crops were needed. */

{ n: 21, pr: 21, p: 1199,
  key: 1,
  stem: 'A 13-year-old girl is brought to the clinic for concerns about delayed puberty. She is in the 10th percentile for height and 25th percentile for weight. Physical examination reveals no signs of puberty, and her bone age is mildly delayed. Her mother also had a past history of delayed puberty. What is the most likely diagnosis?',
  opts: ['Turner syndrome', 'Constitutional growth delay', 'Growth hormone deficiency', 'Hypothyroidism', 'Familial short stature'],
  expl: 'This condition presents with delayed puberty, mildly delayed bone age, and family history of delayed puberty. The child usually catches up later.',
  note: 'Key highlighted: yellow box on "B. Constitutional growth delay". Numerals "13-year-old", "10th percentile", "25th percentile" confirmed at 600 dpi band crop (crop-1199-full-1199.png, box x100 y150 W4700 H2200 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' }

{ n: 22, pr: 22, p: 1201,
  key: 3,
  stem: 'An 8-year-old girl presents with a 6-month history of pain most days around the umbilicus which lasts for an hour and responds to paracetamol syrup. It does not occur at weekends usually. She opens her bowels daily and passes a soft stool. She is thriving with her weight and height on the 75th centile. Which of the following options is the appropriate next step?',
  opts: ['Abdominal radiograph', 'Referral to a pediatric gastroenterologist', 'Liver function tests', 'Reassurance and no further investigation', 'Prescription for laxatives'],
  expl: "The girl's pain is functional abdominal pain since growth and examination are normal, and symptoms stop on weekends. No further tests are needed.",
  note: 'Key highlighted: yellow box on "D. Reassurance and no further investigation". Numerals "8-year-old", "6-month", "75th centile" confirmed at 600 dpi band crop (crop-1201-full-1201.png, box x100 y150 W4700 H2200 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' }

{ n: 23, pr: 23, p: 1203,
  key: 4,
  stem: "What is appropriate about the role of vitamins in children's nutrition?",
  opts: ['Folic acid has no role in blood production', 'Vitamin K main function is in the synthesis of RBCs', 'Vitamin E deficiency leads to decreased clot generation', 'Vitamin B12 deficiency is common in infants', 'Vitamin C deficiency can lead to petechiae and mucosal bleeding'],
  expl: 'Vitamin C is required for collagen synthesis; deficiency causes scurvy with bleeding signs.',
  note: 'Key highlighted: yellow box on "E. Vitamin C deficiency can lead to petechiae and mucosal bleeding". No clinical measurement numerals on this page ("B12" is a vitamin-name label, not a dose); confirmed at 600 dpi band crop (crop-1203-full-1203.png, box x100 y150 W4700 H1500 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' }

{ n: 24, pr: 24, p: 1205,
  key: 0,
  stem: "A 4-month-old infant is brought in for concerns about small size. The infant was born at 32 weeks gestation and has been primarily formula-fed. Which of the following is the first most important factor to consider in managing this infant's growth?",
  opts: ['Adjusting for corrected gestational age', 'Introducing solid foods early', 'Switching to a higher-calorie formula', 'Recommending breastfeeding'],
  expl: "Premature infants' growth should be assessed using corrected age, not chronological age, to avoid mislabeling them as small.",
  note: 'Only 4 options printed (A-D). Key highlighted: yellow box on "A. Adjusting for corrected gestational age". Numerals "4-month-old", "32 weeks" confirmed at 600 dpi band crop (crop-1205-full-1205.png, box x100 y150 W4700 H2200 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' }

{ n: 25, pr: 25, p: 1207,
  key: 3,
  stem: 'A 2-year-old boy has been unwell for 6 days with a fever, sore eyes, and throat. He is noted to have red eyes, an injected throat, and cervical lymphadenopathy. He also has a generalized maculopapular rash, and the skin is peeling from his hands and feet. What is the next best step in management?',
  opts: ['Antipyretic/analgesia', 'Highly active antiretroviral therapy', 'Intravenous antibiotics', 'Intravenous immunoglobulin', 'Oral antibiotic'],
  expl: 'This child has Kawasaki disease (fever >5 days, rash, lymphadenopathy, peeling). IVIG reduces the risk of coronary aneurysms.',
  note: 'Key highlighted: yellow box on "D. Intravenous immunoglobulin". Numerals "2-year-old", "6 days", ">5 days" confirmed at 600 dpi band crop (crop-1207-full-1207.png, box x100 y150 W4700 H2200 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' }

{ n: 26, pr: 26, p: 1209,
  key: 2,
  stem: 'A 31-week female infant is born via elective cesarean section for intrauterine growth retardation and reversed end-diastolic flow; birthweight is 1010 g. Which one of the following management options will be most effective in decreasing the risk of developing necrotizing enterocolitis?',
  opts: ['Oral antibiotics', 'Formula feeding', 'Probiotics', 'Oral immunoglobulin'],
  expl: 'Probiotics reduce the risk of necrotizing enterocolitis in preterm, low-birth-weight infants. Formula feeding increases the risk.',
  note: 'Only 4 options printed (A-D). Key highlighted: yellow box on "C. Probiotics". Numerals "31-week", "1010 g" confirmed at 600 dpi band crop (crop-1209-full-1209.png, box x100 y150 W4700 H2200 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' }

{ n: 27, pr: 27, p: 1211,
  box: 1212,
  key: 1,
  stem: 'A 9-month-old boy presented to the emergency room with convulsions. He had a history of mild diarrhea for 3 days and was afebrile. His mother described that he was not thirsty and had no past history of convulsions. The examination revealed a large head, prominent fontanelles, and broad wrists. His eyes and skin were normal, and rectal temperature was 37.8°C. Which of the following is expected in his investigations?',
  opts: ['Normal calcium level, low phosphate level, high alkaline phosphatase level', 'Low calcium level, low phosphate level, high alkaline phosphatase level', 'Low calcium level, normal phosphate level, normal alkaline phosphatase level', 'Normal calcium level, normal phosphate level, high alkaline phosphatase level', 'Low calcium level, normal phosphate level, high alkaline phosphatase level'],
  expl: "This 9-month-old with convulsions, large head, open fontanelles, and broad wrists has vitamin D deficiency rickets. Vitamin D deficiency -> decreased calcium absorption -> hypocalcemia. Secondary hyperparathyroidism -> increased phosphate excretion -> hypophosphatemia. Alkaline phosphatase increased due to active osteoblasts trying to mineralize bone. Classic labs in nutritional rickets = low calcium + low phosphate + high ALP.",
  note: '⚠️ STRADDLES THE PAGE BREAK p.1211 -> p.1212 -- the printed explanation box for n27 is entirely on p.1212 (unboxed, bold/italic style, unlike the bordered boxes used elsewhere in this exam); stem, options and the yellow key are all on p.1211. Key highlighted: yellow box on "B. Low calcium level, low phosphate level, high alkaline phosphatase level". Numerals "9-month-old", "3 days", "37.8°C" confirmed at 600 dpi band crop (crop-1211-full-1211.png, box x100 y150 W4700 H2400 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present. Verified p.1213 (the printed "blank" page in the given gap) is the UNANSWERED exam printing of n28 (no yellow anywhere on it, confirming it is the wrong sheet to stage from) and p.1214 carries n28 with its key -- consistent with the task instructions\' step gap.' }

{ n: 28, pr: 28, p: 1214,
  key: 1,
  stem: "A 4-month-old baby girl is assessed by her general practitioner because of constant crying and poor feeding. She is fed by bottle on infant formula. Her mother tearfully complains that she is finding it very difficult to cope. Her development, growth, and physical examination are normal, but her stools frequently contain streaks of blood. What is the likely cause of the girl's problem?",
  opts: ['An inherited genetic condition', "Cow's milk protein allergy", 'Down syndrome', 'Gastroesophageal reflux', 'Cystic fibrosis'],
  expl: "Blood-streaked stools in an otherwise healthy infant suggest cow's milk protein allergy. Reflux does not cause blood.",
  note: 'Key highlighted: yellow box on "B. Cow\'s milk protein allergy". Numeral "4-month-old" confirmed at 600 dpi band crop (crop-1214-full-1214.png, box x100 y150 W4700 H2200 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present. This page is p.1214, immediately after the notes/blank gap (p.1212-1213), per task instructions.' }

{ n: 29, pr: 29, p: 1216,
  key: 2,
  stem: 'An infant arrives at the emergency department with a 2-day history of diarrhea. The mother is concerned about the child developing dehydration. Which of the following increases the risk of dehydration?',
  opts: ['If the child vomited twice in the previous 24 hours', 'If the child had a similar attack one month ago', "If the child's age was below 6 months", 'If the child has bloody diarrhea'],
  expl: 'Infants <6 months are at higher risk of dehydration due to higher water turnover and immature renal function.',
  note: 'Only 4 options printed (A-D). Key highlighted: yellow box on "C. If the child\'s age was below 6 months". Numerals "2-day", "twice", "24 hours", "one month", "6 months" confirmed at 600 dpi band crop (crop-1216-full-1216.png, box x100 y150 W4700 H2200 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' }

{ n: 30, pr: 30, p: 1218,
  key: 1,
  stem: 'At which of these ages is the biochemical screening test (Guthrie test) done in Egypt?',
  opts: ['At birth', '3–6 days', '12 days', '3 weeks', '3 months'],
  expl: 'The Guthrie test (metabolic screening) in Egypt is performed between 3–6 days after birth to allow metabolites to accumulate.',
  note: 'Key highlighted: yellow box on "B. 3-6 days" (printed with an en dash, preserved verbatim as "3–6"). Numerals "3-6 days" (option and explanation), "12 days", "3 weeks", "3 months" confirmed at 600 dpi band crop (crop-1218-full-1218.png, box x100 y150 W4700 H2200 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' }

{ n: 31, pr: 31, p: 1220,
  key: 1,
  stem: 'Which of the following is TRUE about transient tachypnea of the newborn?',
  opts: ['Commonly associated with vaginal delivery', 'Commonly associated with term delivery', 'Usually treated with mechanical ventilation', 'Caused by surfactant deficiency'],
  expl: 'Transient tachypnea of the newborn occurs more in term infants, especially after cesarean section, due to delayed lung fluid clearance.',
  note: 'Only 4 options printed (A-D). No numerals on this page. Key highlighted: yellow box on "B. Commonly associated with term delivery"; confirmed at 600 dpi band crop (crop-1220-full-1220.png, box x100 y150 W4700 H1500 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' }

{ n: 32, pr: 32, p: 1222,
  key: 4,
  stem: 'Parents of a 24-hour-old newborn are concerned because his mother developed chickenpox one day after his delivery. From the following list of options, what is the best advice you could give?',
  opts: ['Breastfeeding is contraindicated', 'Neonatal infection is unlikely due to transplacental acquired antibodies', 'Reassure and discharge home, asking the mother to return if the baby develops symptoms', 'The infant should receive varicella zoster vaccine', 'The infant should receive varicella zoster immunoglobulin'],
  expl: 'Maternal chickenpox around delivery puts the neonate at high risk, so VZIG should be given for protection.',
  note: 'Key highlighted: yellow box on "E. The infant should receive varicella zoster immunoglobulin". Numeral "24-hour-old" confirmed at 600 dpi band crop (crop-1222-full-1222.png, box x100 y150 W4700 H2200 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' }

{ n: 33, pr: 33, p: 1224,
  stem: 'A male infant was delivered at 40 weeks of gestation. The baby was apneic, limp, pale, and covered with meconium-stained amniotic fluid.\n\nWhat is the most common complication?',
  opts: ['Pneumothorax', 'Sepsis', 'Bacterial pneumonia', 'Hyperglycemia', 'Hypernatremia'],
  key: 0,
  expl: 'Meconium aspiration can lead to air trapping and pneumothorax as the most common complication.',
  note: 'Key highlighted: yellow box on "A. Pneumothorax". Numeral "40 weeks" confirmed at 600 dpi band crop (crop-1224-full-1224.png, box x100 y150 W4700 H1300 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' }

{ n: 34, pr: 34, p: 1226,
  stem: 'An infant was born at 35 weeks of gestation to a 30-year-old G3P2 mother via spontaneous vaginal delivery. Rupture of membranes occurred 15 hours prior to delivery. Birth weight is 3400 g, and Apgar scores were 6 and 9 at 1 and 5 minutes, respectively.\n\nWhich of the following factors places this infant at greatest risk for sepsis?',
  opts: ['Male gender', 'Gestational age', 'Apgar score', 'Gestational age'],
  key: 3,
  expl: 'Prematurity (35 weeks) is the strongest risk factor for neonatal sepsis in this case. Prolonged rupture of membranes adds further risk.',
  note: 'DEFECTIVE PRINTED OPTIONS -- B and D are both printed as "Gestational age" verbatim, an exact duplicate; the yellow highlight is on the second (D), so key=3 (the 4th/last option), recorded as printed, not disputed. Numerals "35 weeks", "30-year-old", "G3P2", "15 hours", "3400 g", "6 and 9 at 1", "5 minutes" all confirmed at 600 dpi band crop (crop-1226-a-1226.png, box x100 y150 W4700 H1200 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' }

{ n: 35, pr: 35, p: 1228,
  stem: 'A 7-month-old child presents with a fever of 39°C for 3 days, mildly injected pharynx, and mild diarrhea. On the fourth day of the illness, the fever ceases and a maculopapular rash appears.\n\nWhat is the most likely diagnosis?',
  opts: ['Measles', 'Rubella', 'Varicella', 'Scarlet fever', 'Roseola infantum'],
  key: 4,
  expl: 'Roseola presents with high fever followed by a rash after fever subsides. Measles rash starts before fever resolution',
  note: 'Key highlighted: yellow box on "E. Roseola infantum". Numerals "7-month-old", "39°C", "3 days", "fourth day" confirmed at 600 dpi band crop (crop-1228-a-1228.png, box x100 y150 W4700 H900 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' }

{ n: 36, pr: 36, p: 1230,
  stem: 'A 5-year-old boy has had an intermittent fever for 4 weeks. He presents to the Emergency Department with a headache and neck stiffness. A CT scan is performed, which is normal. A lumbar puncture is performed, and you receive the following results: Cerebrospinal fluid (CSF) microscopy: 95 lymphocytes, 10 neutrophils, and 0 red blood cells/mm3. CSF protein: 220 mg/dl. CSF glucose: 24 mg/dl. Blood glucose: 149 mg/dl. What is the most likely diagnosis?',
  opts: ['Guillain-Barré syndrome', 'Bacterial meningitis', 'Blood-stained tap', 'Tuberculosis meningitis', 'Viral meningitis'],
  key: 3,
  expl: 'CSF shows lymphocytic pleocytosis, very high protein, and low glucose, which is typical for TB meningitis.',
  note: 'Key highlighted: yellow box on "D. Tuberculosis meningitis". Numerals "5-year-old", "4 weeks", "95 lymphocytes", "10 neutrophils", "0 red blood cells/mm3", "protein 220 mg/dl", "CSF glucose 24 mg/dl", "Blood glucose 149 mg/dl" all confirmed at 600 dpi band crop (crop-1230-a-1230.png, box x100 y150 W4700 H1600 at 600dpi) -- matched the 300 dpi read exactly. Printed option "B.Bacterial meningitis" has no space after the period -- transcribed with normal spacing as option text, oddity noted here only. No boiler line present.' }

{ n: 37, pr: 37, p: 1232,
  stem: "A 4-month-old infant is seen in the Pediatric Assessment Unit. He is feeding poorly and is breathless. He has had loose stools for the last 4 weeks and has not put on any weight since then. On examination, he appears pale and has marked intercostal recession. His oxygen saturation in air is 82%. His chest X-ray shows diffuse bilateral infiltrates. What is the most likely diagnosis?",
  opts: ["Bruton's agammaglobulinemia", 'Severe combined immunodeficiency (SCID)', 'Complement deficiency', 'Staphylococcal pneumonia'],
  key: 1,
  expl: 'Failure to thrive, chronic diarrhea, recurrent infections, and diffuse infiltrates on CXR suggest SCID.',
  note: 'Key highlighted: yellow box on "B. Severe combined immunodeficiency (SCID)". Only 4 options printed on this page. Numerals "4-month-old", "4 weeks", "82%" confirmed at 600 dpi band crop (crop-1232-a-1232.png, box x100 y150 W4700 H1500 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' }

{ n: 38, pr: 38, p: 1234,
  stem: 'A 5-year-old girl is brought to the clinic because her parents are concerned about her short stature. Her height is below the 3rd percentile, and her weight is in the 25th percentile. Her growth velocity is normal. A bone age assessment reveals that her bone age is consistent with her chronological age. What is the most appropriate next step in management?',
  opts: ['Initiate growth hormone therapy', 'Order a karyotype analysis', 'Monitor growth every 6 months', 'Refer to a pediatric endocrinologist', 'Test for celiac disease'],
  key: 2,
  expl: 'The child has proportionate short stature with normal bone age and velocity, suggesting a benign variant. Close monitoring is appropriate.',
  note: 'Key highlighted: yellow box on "C. Monitor growth every 6 months". Numerals "5-year-old", "3rd percentile", "25th percentile", "6 months" confirmed at 600 dpi band crop (crop-1234-a-1234.png, box x100 y150 W4700 H1900 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' }

{ n: 39, pr: 39, p: 1236,
  stem: 'A 10-month-old infant has fallen from the 50th to the 5th percentile for weight over the past 4 months. The family recently moved, and the mother has been stressed. The infant is breastfeeding and eating small amounts of solids. What is the most likely cause of the growth faltering?',
  opts: ['Inadequate caloric intake', 'Thyroid dysfunction', 'Chronic infection', 'Gastroesophageal reflux', 'Metabolic disorder'],
  key: 0,
  expl: 'Growth faltering with recent stress, breastfeeding with little solids, and normal development point to inadequate nutrition rather than organic disease.',
  note: 'Key highlighted: yellow box on "A. Inadequate caloric intake". Numerals "10-month-old", "50th", "5th percentile", "4 months" confirmed at 600 dpi band crop (crop-1236-a-1236.png, box x100 y150 W4700 H1100 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' }

{ n: 40, pr: 40, p: 1238,
  stem: 'A 7-year-old girl has a history of severe allergic reactions to multiple foods. Which of the following is the most critical component of her management plan?',
  opts: ['Avoidance of relevant foods', 'Carrying an epinephrine auto-injector', 'Regular skin testing', 'Routine blood tests for IgE levels', 'Consultation with a dietitian'],
  key: 1,
  expl: 'Avoidance is important, but accidental exposure can still occur. The most critical life-saving measure is prompt administration of epinephrine in anaphylaxis, so the child must always carry an auto-injector.',
  note: 'Key highlighted: yellow box on "B. Carrying an epinephrine auto-injector". Numeral "7-year-old" confirmed at 600 dpi band crop (crop-1238-a-1238.png, box x100 y150 W4700 H500 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present. Last entry of the assigned range (n21..n40).' }

