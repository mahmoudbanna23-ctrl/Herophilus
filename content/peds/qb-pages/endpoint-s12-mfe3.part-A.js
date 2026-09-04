/* ENDPOINT part1 -- Model Final Exam 3 -- staging half A (questions n1..n20).
   Source: "Pediatrics endpoint part1.pdf", answered pages p:1485,1487,1489,1491,1493,1495,1497,
   1499,1501,1503,1505,1507,1509,1511,1513,1515,1517,1519,1521,1523 (task-supplied list, measured
   from content/peds/qb-pages/ocr/ep1/index.json 2026-09-04) -- a clean +2 step throughout. The
   section runs pp.1484-1642 and holds 79 questions; this file is the first 20.
   Every question in this exam prints twice (a blank exam page, then an answered page carrying the
   yellow-highlighted key and usually a bordered explanation box); staging is from the ANSWERED
   pages ONLY, per task override 4. The blank printings were neither rendered nor read.
   PDF is 1:1, NOT 2-up -- brief pd-staging-brief.md Section 2's 2-up folio arithmetic does NOT
   apply here, per task override 1. A PDF page number IS the page rendered.
   key is a ZERO-BASED INDEX into opts (integer), never a letter -- per task override 2, this
   differs from the House-bank brief Section 7.
   Per task override 3: paediatric surgery topics (gastroschisis, atresias, Hirschsprung,
   intussusception, hernias, Wilms, neuroblastoma, urological anomalies) are IN SCOPE for this
   book -- the House-bank Section 11a exclusion does not apply here.
   OCR at content/peds/qb-pages/ocr/ep1/p<NNNN>.txt was NOT opened during this staging pass, per
   brief Section 4 / task instructions. Nothing here comes from OCR text.
   n is the question's position in the SECTION. Where the printed exam number (pr) disagrees with
   n, n is kept and the disagreement is recorded in that entry's note.
   A box overflowing onto a later sheet is recorded with a `box` field and described WITHOUT the
   word "straddle"; only a stem/options span across sheets gets straddle:true plus the uppercase
   marker.
   File format: bare { ... } fragments separated by one blank line -- no array wrapper and no
   commas between entries. `node --check` always fails on this shape and that failure is
   meaningless; validated with tools/bank-harness/check-part-ep.js instead.
   CLOSED 2026-09-04 -- 20/20 entries staged (n1..n20, pp.1485-1523), each appended immediately
   after its page was read and the file re-validated along the way. Final run: 20 entries, n 1..20,
   OK. Printed exam numbering ran 1..20 with no repeat and no skip and agreed with n on every page,
   so no pr/n disagreement had to be recorded. Two numerals were escalated to 600 dpi band crops
   (p.1519 box threshold, p.1521 all-numeric option ladder); everything else was read off the
   150 dpi full page, which this book supports because it prints one large-type question per sheet.
   Two cross-section near-duplicates of Model Final Exam 2 are flagged in the notes of n4 and n20
   and were NOT folded. */

{ n: 1, pr: 1, p: 1485,
  key: 4,
  stem: 'A healthy, full-term, breastfed infant is jaundiced at 22 hours of age. The indirect serum bilirubin level is 13 mg/dl. The mother is blood type O, Rh positive. Which of the following is the most appropriate next step?',
  opts: ['Culture the blood', 'Determine glucose-6-phosphate dehydrogenase activity', 'Interrupt breast feeding', 'Obtain a reticulocyte count', 'Order baby blood group and Coombs test'],
  expl: 'Early jaundice within 24 hours suggests hemolytic disease (ABO incompatibility). The most appropriate next step is to confirm with blood group and direct Coombs test to check for maternal antibodies causing hemolysis.',
  note: '5 options printed (A-E). Read off the full page rendered at 150 dpi (pg-1485.png); this book prints one large-type question per sheet, so every numeral on the page is crisp at that scale -- "22 hours of age", "13 mg/dl", "glucose-6-phosphate", "within 24 hours" all read directly off the page image, none from OCR. Key: the yellow highlight sits on option E, "Order baby blood group and Coombs test" (highlighted, bold and underlined) -> zero-based index 4. The explanation box agrees with the highlight. Printed number "1." matches n1. Red folio "1485" printed at the foot confirms the PDF page number IS the printed page (override 1 holds). No boiler line printed.' }

{ n: 2, pr: 2, p: 1487,
  key: 4,
  stem: 'A 15-month-old girl is referred for developmental assessment. On assessment, she has global developmental delay. She was born at term weighing 3400 g by spontaneous vaginal delivery and required resuscitation at birth with an Apgar score of 3 at 1 minute, 4 at 5 minutes and 7 at 10 minutes. She was admitted to the neonatal unit and ventilated for 3 days. What is the most likely explanation for this finding?',
  opts: ['Congenital hypothyroidism', 'Meningitis', 'An inborn error of metabolism', 'Intracranial hemorrhage', 'Hypoxic-ischemic encephalopathy (HIE)'],
  expl: 'The history of low Apgar scores and neonatal ventilation indicates hypoxic-ischemic injury. Hypoxic-ischemic encephalopathy (HIE) is the most likely cause of her global developmental delay.',
  note: '5 options printed (A-E). Read off pg-1487.png at 150 dpi; the serif stem type is large and each numeral was individually legible -- "15-month-old", "3400 g", the Apgar triple "3 at 1 minute, 4 at 5 minutes and 7 at 10 minutes", and "ventilated for 3 days" were each read off the page image, none from OCR. Layout note: the explanation box is inset to the RIGHT of options A-D rather than sitting under the option ladder, so the box does not follow the usual full-width position; it still belongs to this question and is fully contained on p.1487. Key: yellow highlight on option E, "Hypoxic-ischemic encephalopathy (HIE)" (highlighted, bold, underlined) -> zero-based index 4; the box agrees. Printed number "2." matches n2. Red folio "1487". No boiler line printed.' }

{ n: 3, pr: 3, p: 1489,
  key: 2,
  stem: 'A 5-week-old baby boy is brought into the emergency department with a 48-hour history of projectile vomiting. The infant is hungry after vomiting and has not opened his bowels in 3 days. Clinical examination reveals a mass in the right upper quadrant region. A blood gas is performed. What finding in this blood gas is expected to be present?',
  opts: ['Normal findings', 'Metabolic acidosis', 'Metabolic alkalosis', 'Respiratory acidosis', 'Respiratory alkalosis'],
  expl: 'Projectile vomiting with a palpable RUQ mass suggests hypertrophic pyloric stenosis. This condition causes loss of gastric acid, leading to metabolic alkalosis on blood gas.',
  note: '5 options printed (A-E). Read off pg-1489.png at 150 dpi. Numerals "5-week-old", "48-hour history" (the hyphenated compound breaks across the first and second stem lines as "48-" / "hour") and "3 days" read directly off the page image, not from OCR. Key: yellow highlight on option C, "Metabolic alkalosis" -> zero-based index 2; the explanation box agrees. The box is inset to the right of options C-D, level with option C. Printed number "3." matches n3. Red folio "1489". No boiler line printed.' }

{ n: 4, pr: 4, p: 1491,
  key: 3,
  stem: "A 3-year-old girl is 'blue-lighted' into the local emergency department with reduced consciousness. Her mother informs the paramedic that her daughter has been unwell for the last 8 days with vomiting and profuse diarrhea. On arrival, she is apyrexial, has a heart rate of 170 beats per minute and respiratory rate of 20 per minute. Her systolic blood pressure is 75 mm Hg and she has a capillary refill time of 5 seconds. She is barely responsive to pain. Resuscitation begins and a blood gas reveals a metabolic acidosis. What is the most likely clinical syndrome?",
  opts: ['Anaphylactic shock', 'Septicemic shock', 'Cardiogenic shock', 'Hypovolemic shock', 'Neurogenic shock'],
  expl: 'Severe dehydration from prolonged vomiting and diarrhea causes low blood pressure and metabolic acidosis. This is characteristic of hypovolemic shock.',
  note: '5 options printed (A-E). Read off pg-1491.png at 150 dpi. Numerals read directly off the page image, not from OCR: "3-year-old", "8 days", "170 beats per minute", "20 per minute", "75 mm Hg" (printed with a space between mm and Hg on this page), "5 seconds". Key: yellow highlight on option D, "Hypovolemic shock" -> zero-based index 3; the box agrees. Box inset right of options B-C. Printed number "4." matches n4. Red folio "1491". No boiler line. RECORDED FOR THE ADJUDICATION PASS, NOT FOLDED (brief section 9): this stem is a near-identical reprint of the same vignette that opens Model Final Exam 2 (section 11, its n1 on p.1324), which I saw while copying that file\'s header block for the format. Two printed differences, both real: MFE2 prints FOUR options and stops at "Hypovolemic shock", whereas this printing adds a fifth, "Neurogenic shock", so the key letter is D in both but the option count differs; and MFE2 printed "75 mmHg" against "75 mm Hg" here. Same key content either way. Cross-section folding is a later decision with the whole book in view -- flagged only.' }

{ n: 5, pr: 5, p: 1493,
  key: 0,
  stem: "A 2-month-old baby is seen in the pediatric outpatient department. She was born at term, weighing 3.5 kg and is breastfed. Her mother is concerned as she has vomited some of the milk after most feeds since birth. She is continuing to grow along the 50th centile. What is the most likely diagnosis?",
  opts: ['Gastro-esophageal reflux', "Hirschsprung's disease", 'Infant colic', 'Overfeeding', 'Pyloric stenosis'],
  expl: 'Frequent small-volume vomiting in an otherwise thriving infant is typical of gastro-esophageal reflux. Growth along the 50th percentile makes pyloric stenosis or other pathology unlikely.',
  note: '5 options printed (A-E). Read off pg-1493.png at 150 dpi. Numerals read directly off the page image, not from OCR: "2-month-old", "3.5 kg" (the decimal point is present and unambiguous at this scale), "50th centile" in the stem and "50th percentile" in the box -- the page really does use the two different words in the two places, and both are transcribed as printed. Key: yellow highlight on option A, "Gastro-esophageal reflux" -> zero-based index 0; the box agrees. Box inset right of option E. Printed number "5." matches n5. Red folio "1493". No boiler line printed.' }

{ n: 6, pr: 6, p: 1495,
  key: 1,
  stem: 'A full-term girl was born weighing 4 kg by normal vaginal delivery and the membranes had ruptured 24 hours previously. At 6 hours of age she was noted to be breathing fast and have a low temperature. She has not breastfed since birth and has had one vomit. On examination, she is lethargic and her core temperature is 35.5°C. She has a respiratory rate of 90 breaths/min, her central capillary refill time is 4 seconds, pulse 180/min and oxygen saturation: 89% in air. Her chest X-ray shows consolidation at the right base. What is the most likely causative organism for her infection?',
  opts: ['Escherichia coli (E. coli)', 'Group B streptococcus', 'Staphylococcus aureus', 'Streptococcus pneumoniae'],
  expl: 'Symptoms appearing within the first 24 hours of life suggest early-onset sepsis. Group B streptococcus is the most common causative organism in this context.',
  note: 'FOUR options printed (A-D) -- first entry in this half with fewer than five. Read off pg-1495.png at 150 dpi. Numerals read directly off the page image, not from OCR: "4 kg", "ruptured 24 hours previously", "At 6 hours of age", core temperature "35.5 degrees C" (printed with the degree glyph and a decimal point, both legible at this scale), "90 breaths/min", "4 seconds", "pulse 180/min", "oxygen saturation: 89%". Key: yellow highlight on option B, "Group B streptococcus" -> zero-based index 1; the box agrees. Box inset right of options B-C. Printed number "6." matches n6. Red folio "1495". No boiler line printed. FLAGGED FOR THE PARENT, NOT RESOLVED HERE: this is the densest page so far and option D sits very close to the bottom edge of the cream content panel, so from the ANSWERED page alone I cannot exclude that a fifth option was clipped off the foot of the slide rather than never existing. Task override 4 forbids rendering the blank exam printing (p.1494), which is where that would be settled, so I did not render it. Staged as printed: four options, key on B.' }

{ n: 7, pr: 7, p: 1497,
  key: 3,
  stem: 'A 10-month-old boy presented to the emergency room with convulsions. He had a history of mild diarrhea for 3 days and was afebrile. He had no past history of convulsions. Examination revealed large head with wide-anterior fontanelle, prominent costochondral junctions and broad wrists. His eyes and skin pinch were normal and rectal temperature was 37.8°C. What investigation is most likely to reveal the cause of his convulsions?',
  opts: ['CT brain', 'EEG', 'Coagulation profile', 'Serum calcium', 'Skull X-ray'],
  expl: 'Signs like large head, widened fontanelles, and prominent costochondral junctions suggest rickets. Low serum calcium is the likely cause of his convulsions.',
  note: '5 options printed (A-E). Read off pg-1497.png at 150 dpi. Numerals read directly off the page image, not from OCR: "10-month-old", "diarrhea for 3 days", rectal temperature "37.8 degrees C" (degree glyph and decimal both legible). Key: yellow highlight on option D, "Serum calcium" -> zero-based index 3; the box agrees. Box inset right of options C-D. Printed number "7." matches n7. Red folio "1497". No boiler line printed. Panel had clear empty space below option E, so nothing was clipped here.' }

{ n: 8, pr: 8, p: 1499,
  key: 0,
  stem: 'A 14-year-old girl awakens with a mild sore throat, low-grade fever, and a diffuse maculopapular rash. Her physician notes mild tenderness and marked swelling of her posterior cervical and occipital lymph nodes. Four days after the onset of her illness, the rash has vanished. What is the most likely diagnosis?',
  opts: ['Rubella', 'Measles', 'Roseola infantum', 'Erythema infectiosum', 'Chickenpox'],
  expl: 'A mild rash with posterior cervical lymphadenopathy that resolves quickly is typical of rubella. The short, self-limiting nature differentiates it from measles or other exanthems.',
  note: '5 options printed (A-E). Read off pg-1499.png at 150 dpi. Only two numeric expressions on the page and both were read off the page image, not from OCR: "14-year-old" as a numeral, and "Four days after the onset" spelled out as a word rather than printed as a digit. Key: yellow highlight on option A, "Rubella" -> zero-based index 0; the box agrees. Box sits below option E, indented from the left. Printed number "8." matches n8. Red folio "1499". No boiler line printed.' }

{ n: 9, pr: 9, p: 1501,
  key: 0,
  stem: 'Which is characteristic of "lactose intolerance" in children?',
  opts: ['It is often secondary to viral gastroenteritis', 'Always present with nausea and vomiting', 'Mucus in stools is a usual finding', 'Lactase supplements are essential in treatment', 'A congenital form is common'],
  expl: 'It often occurs secondary to viral gastroenteritis due to temporary lactase deficiency. Symptoms like diarrhea and bloating occur, but congenital forms are rare.',
  note: '5 options printed (A-E). Read off pg-1501.png at 150 dpi. No clinical numerals, doses, units or exponents appear anywhere on this page -- measured by examining the whole rendered page, not inferred: the only digit on the sheet is the question number "9." and the red folio. Stem prints straight double quotes around "lactose intolerance" and they are transcribed as printed. Key: yellow highlight on option A, "It is often secondary to viral gastroenteritis" -> zero-based index 0; the box agrees. Box sits well below the option ladder with a wide blank gap above it. Printed number "9." matches n9. Red folio "1501". No boiler line printed.' }

{ n: 10, pr: 10, p: 1503,
  key: 3,
  stem: 'Which is a clear indication for tonsillectomy in children?',
  opts: ['Recurrent febrile viral respiratory tract infections with febrile convulsions', 'Exudative tonsillitis with positive monospot test', 'Two attacks of follicular tonsillitis in a two-month time', 'Seven episodes of exudative tonsillitis in the preceding year', 'A high ASOT after an episode of tonsillitis'],
  expl: 'Frequent severe tonsillitis is a clear indication. Seven episodes of exudative tonsillitis in a year justify surgical removal.',
  note: '5 options printed (A-E). Read off pg-1503.png at 150 dpi. COUNT-BEARING WORDS, ALL SPELLED OUT RATHER THAN PRINTED AS DIGITS, and read off the page image rather than OCR: option C prints "Two attacks" and "a two-month time" as words, and the key option D prints "Seven episodes" as a word, matched by "Seven episodes" in the explanation box. No digit appears anywhere on this page except the question number "10." and the red folio -- these two counts are the discriminating quantities of the question, so their word form is recorded deliberately. Key: yellow highlight on option D, "Seven episodes of exudative tonsillitis in the preceding year" -> zero-based index 3; the box agrees. Box sits well below the option ladder. Printed number "10." matches n10. Red folio "1503". No boiler line printed.' }

{ n: 11, pr: 11, p: 1505,
  key: 2,
  stem: 'What is the most common cause of recurrent abdominal pain in children?',
  opts: ['Appendicitis', 'Ascariasis', 'Functional', 'Hepatitis'],
  expl: 'Most recurrent abdominal pain in children is functional, not due to an organic cause. Conditions like appendicitis are much less common.',
  note: 'FOUR options printed (A-D), and here the four-option ladder is certain rather than merely apparent: the option list ends at D with roughly half the cream panel left empty below it and the explanation box floating in that space, so nothing was clipped. This is the counter-example that shows a four-option question is a real shape in this exam, though it does not settle the separate n6/p.1495 question, where D sat hard against the panel edge. Read off pg-1505.png at 150 dpi. No clinical numerals, units, doses or exponents anywhere on the page -- measured by examining the whole rendered sheet; the only digits are the question number "11." and the red folio. Key: yellow highlight on option C, "Functional" -> zero-based index 2; the box agrees. Printed number "11." matches n11. Red folio "1505". No boiler line printed.' }

{ n: 12, pr: 12, p: 1507,
  key: 0,
  stem: 'Which of the following conditions may cause macrocephaly?',
  opts: ['Chronic subdural hematoma', 'Cerebral palsy', 'Congenital infection', 'Hypoglycemia', 'Perinatal asphyxia'],
  expl: 'Chronic subdural hematoma can lead to increased head size due to fluid accumulation. Other listed conditions usually don’t cause macrocephaly.',
  note: '5 options printed (A-E). Read off pg-1507.png at 150 dpi. No clinical numerals, units, doses or exponents anywhere on the page -- measured by examining the whole rendered sheet; the only digits are the question number "12." and the red folio. Key: yellow highlight on option A, "Chronic subdural hematoma" -> zero-based index 0; the box agrees. Box sits below the option ladder with blank panel above and below it, so nothing is clipped. Printed number "12." matches n12. Red folio "1507". No boiler line printed.' }

{ n: 13, pr: 13, p: 1509,
  key: 1,
  stem: 'At a routine health visitor consultation, a 13-month-old boy is noticed to be crossing arms in his left hand and dragging his left hand and synkinesis and spastic gait. He is holding a toy in his left hand and his father informs the health visitor that he only uses his right side. What is the most likely finding here?',
  opts: ['Normal developmental milestones', 'Fine motor delay', 'Speech and language delay', 'Play and social delay', 'Global delay'],
  expl: '',
  note: '5 options printed (A-E). FIRST PAGE IN THIS HALF THAT PRINTS NO EXPLANATION BOX, and the absence is measured rather than assumed: the cream content panel continues for roughly two option-rows below option E and is entirely blank there, so a box was not printed and none was clipped off the foot. expl is therefore the empty string. Read off pg-1509.png at 150 dpi. Sole numeral, read off the page image and not from OCR: "13-month-old". Key: yellow highlight on option B, "Fine motor delay" -> zero-based index 1. With no box printed there is nothing for the highlight to contradict. Printed number "13." matches n13. Red folio "1509". No boiler line printed.' }

{ n: 14, pr: 14, p: 1511,
  key: 3,
  stem: 'A 15-year-old male is complaining of short stature and delayed puberty. He has had X-rays for bone age assessment done twice at the age of 5 and at the age of 11 years and both were somewhat delayed. On follow up, he ended with a height that is compatible with his mid-parental height. Which type of short stature did he suffer from?',
  opts: ['Genetic short stature', 'Growth hormone deficiency', 'Chromosomal disorder', 'Constitutional short stature', 'Nutritional short stature'],
  expl: 'If final height matches mid-parental height despite delayed puberty, it indicates constitutional growth delay. This is a normal variant, not a disease.',
  note: '5 options printed (A-E). Read off pg-1511.png at 150 dpi. Numerals read directly off the page image, not from OCR: "15-year-old", bone age X-rays "done twice at the age of 5 and at the age of 11 years" -- the two ages are single- and double-digit and both were legible without magnification. Key: yellow highlight on option D, "Constitutional short stature" -> zero-based index 3. NOT A CONTRADICTION, RECORDED FOR CLARITY: the explanation box names the entity "constitutional growth delay" while the highlighted option calls it "Constitutional short stature"; the two are the same answer under two names, and the box does not point at any other option. Box inset right of options B-C. Printed number "14." matches n14. Red folio "1511". No boiler line printed.' }

{ n: 15, pr: 15, p: 1513,
  key: 1,
  stem: 'An 18-month-old boy is brought to the pediatrician for a routine checkup. His birth weight was 3.2 kg and he was breastfed until 10 months of age when his mother gave birth to another baby. He now mainly eats a maize-based diet and his weight is below the 3rd centile. There is edema around his eyes and the dorsum of his feet. What is the most likely diagnosis?',
  opts: ['Vitamin A deficiency', 'Kwashiorkor', 'Marasmus', 'Normal', 'Vitamin D deficiency'],
  expl: 'Edema in a child with low weight and a maize-based diet suggests protein deficiency. Kwashiorkor is the classic cause.',
  note: '5 options printed (A-E). Read off pg-1513.png at 150 dpi. Numerals read directly off the page image, not from OCR: "18-month-old", birth weight "3.2 kg" (decimal point present and unambiguous), "breastfed until 10 months of age", "below the 3rd centile". Note the two vitamin letters in the options are letters, not numerals: "Vitamin A deficiency" at A and "Vitamin D deficiency" at E -- worth stating because a vitamin letter colliding with an option letter is exactly the kind of thing a later automated cross-check can misread. Key: yellow highlight on option B, "Kwashiorkor" -> zero-based index 1; the box agrees, naming Kwashiorkor outright. Box inset right of options C-D. Printed number "15." matches n15. Red folio "1513". No boiler line printed.' }

{ n: 16, pr: 16, p: 1515,
  key: 3,
  stem: 'A mother is known to have preeclampsia and had her delivery at 37 weeks of gestation for a boy weighing 2.2 kg. The newborn is admitted to the Special Care Baby Unit because of his size. He appears well. What is he most at risk of?',
  opts: ['Anemia', 'Congenital cardiac abnormality', 'Group B streptococcus infection', 'Hypoglycemia', 'Hypercalcemia'],
  expl: 'A low-birth-weight infant of a preeclamptic mother is at risk for hypoglycemia due to limited glycogen stores.',
  note: '5 options printed (A-E). Read off pg-1515.png at 150 dpi. Numerals read directly off the page image, not from OCR: "delivery at 37 weeks of gestation" and birth weight "2.2 kg" (decimal point present; the two digits either side of it are the same digit, which was checked deliberately rather than assumed). Key: yellow highlight on option D, "Hypoglycemia" -> zero-based index 3; the box agrees. Note options D and E are the near-homograph pair Hypoglycemia / Hypercalcemia -- distinct entities, and the highlight sits unambiguously on the D line. Box sits below option E, indented from the left. Printed number "16." matches n16. Red folio "1515". No boiler line printed.' }

{ n: 17, pr: 17, p: 1517,
  key: 3,
  stem: 'What is the most common cause of gastroenteritis in children?',
  opts: ['Shigella', 'Giardia', 'Cryptosporidium', 'Viruses', 'Campylobacter jejuni'],
  expl: 'Viruses (like rotavirus) are the most frequent cause of gastroenteritis in children. Bacterial causes are less common in otherwise healthy children.',
  note: '5 options printed (A-E). Read off pg-1517.png at 150 dpi. No clinical numerals, units, doses or exponents anywhere on the page -- measured by examining the whole rendered sheet; the only digits are the question number "17." and the red folio. Key: yellow highlight on option D, "Viruses" -> zero-based index 3; the box agrees and adds rotavirus as the example. Box sits well below the option ladder with a wide blank gap above it, and blank panel below, so nothing is clipped. Printed number "17." matches n17. Red folio "1517". No boiler line printed.' }

{ n: 18, pr: 18, p: 1519,
  key: 3,
  stem: 'What is the most likely cause of respiratory distress in a preterm infant born at 30 weeks of gestation?',
  opts: ['Pneumothorax', 'Meconium aspiration syndrome', 'Congenital heart disease', 'Respiratory distress syndrome', 'Transient tachypnea of the newborn'],
  expl: 'Premature infants (<34 weeks) often develop respiratory distress syndrome due to surfactant deficiency.',
  note: '5 options printed (A-E). Read off pg-1519.png at 150 dpi. Stem numeral "born at 30 weeks of gestation" read off the page image, not from OCR. ESCALATED TO 600 dpi: the explanation box carries a gestational-age THRESHOLD in the box\'s small sans face, and a threshold is exactly the class of number this project does not read at page scale, so the box was re-rendered as a band crop -- crop-1519-box-1519.png, 600 dpi, -x 950 -y 2130 -W 2600 -H 300. At 1:1 it reads unambiguously "Premature infants (<34 weeks)": a less-than sign, not a hyphen or an en dash, and the digits are 3 then 4. Recorded because the stem says 30 weeks and the box says <34 weeks -- two different gestational ages doing two different jobs, the patient\'s and the threshold\'s, and neither is a misprint of the other. Key: yellow highlight on option D, "Respiratory distress syndrome" -> zero-based index 3; the box agrees. Box sits well below the option ladder. Printed number "18." matches n18. Red folio "1519". No boiler line printed.' }

{ n: 19, pr: 19, p: 1521,
  key: 1,
  stem: "What is the minimum age we can replace a formula by a whole cow's milk for infant nutrition?",
  opts: ['6 months', '12 months', '18 months', '2 years', '5 years'],
  expl: 'Whole cow’s milk should not replace formula until 12 months of age to prevent iron deficiency and ensure adequate nutrition.',
  note: 'FIVE options printed (A-E) AND EVERY OPTION IS ITSELF A NUMBER, which makes this the most numeral-dependent entry in the half: a single misread digit would silently change the answer rather than produce visible garbage. ESCALATED TO 600 dpi accordingly -- crop-1521-opts-1521.png, -x 180 -y 660 -W 1000 -H 1120, which the reader shows well above 1:1. At that scale the ladder reads A "6 months", B "12 months", C "18 months", D "2 years", E "5 years"; the two-digit options are 1-2 and 1-8, not 12/18 confusions, and the unit word (months vs years) is distinct on every line. Nothing here came from OCR. Key: yellow highlight on option B, "12 months" -> zero-based index 1, confirmed in the same 600 dpi crop where the highlight band covers the whole B line and no other. The box agrees independently, printing "until 12 months of age" -- so the key is corroborated by a second printed occurrence of the same figure. Box sits below the ladder. Printed number "19." matches n19. Red folio "1521". No boiler line printed.' }

{ n: 20, pr: 20, p: 1523,
  key: 4,
  stem: 'Which procedure is considered the single most important factor responsible for a dramatic decline in the incidence of sudden infant death syndrome?',
  opts: ["Keeping baby in parent's room until 6 months of age", 'Introducing Folic acid early in pregnancy', 'Keeping the room warmer', 'Parents not smoking in the same room as infant', 'Supine sleeping'],
  expl: 'Supine sleeping (on the back) dramatically reduces the risk of sudden infant death syndrome. Other measures help but are less impactful.',
  note: '5 options printed (A-E). Read off pg-1523.png at 150 dpi. Sole numeral, read off the page image and not from OCR: "until 6 months of age" in option A. Key: yellow highlight on option E, "Supine sleeping" -> zero-based index 4; the box agrees. Box sits below the ladder with blank panel below it. Printed number "20." matches n20. Red folio "1523". No boiler line printed. RECORDED FOR THE ADJUDICATION PASS, NOT FOLDED (brief section 9): this is the second cross-section near-duplicate in this half. It asks the same SIDS question as Model Final Exam 2 n2 (p.1326), which I saw while copying that file\'s header for the format, and both key to "Supine sleeping" at option E. The printings are NOT identical: MFE2 asks for "the single most important factor", this one asks "Which procedure is considered the single most important factor"; MFE2 opened its ladder with "Feet to foot of cot" and this printing drops that option and substitutes "Introducing Folic acid early in pregnancy" at B, so the middle of the ladder is reordered and one distractor is exchanged. Same option count, same key position. Flagged only -- cross-section folding is a later decision with the whole book in view.' }
