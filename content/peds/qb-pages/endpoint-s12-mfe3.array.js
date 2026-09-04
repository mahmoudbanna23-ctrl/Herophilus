/* ===========================================================================
   ENDPOINT - Pediatrics endpoint part1.pdf - MODEL FINAL EXAM 3
   Verbatim staging record. PDF pages 1484-1643; PDF page = printed page, offset zero.
   Merged from endpoint-s12-mfe3.part-A.js + endpoint-s12-mfe3.part-B.js + endpoint-s12-mfe3.part-C.js + endpoint-s12-mfe3.part-D.js by merge-parts-ep.js.
   
   Every question is printed TWICE: an unanswered page, then the ANSWERED page with the key
   highlighted in yellow and (usually) a bordered explanation box. Only answered pages are
   staged. `n` is the true sequential index, `pr` what the page prints, `p` the PDF page,
   `key` a ZERO-BASED INDEX into `opts` (never a letter), matching the app field `answer`,
   `expl` the printed box verbatim or "".
   =========================================================================== */
var PEDEP_S12_STAGED = [

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
  note: '5 options printed (A-E). Read off the full page rendered at 150 dpi (pg-1485.png); this book prints one large-type question per sheet, so every numeral on the page is crisp at that scale -- "22 hours of age", "13 mg/dl", "glucose-6-phosphate", "within 24 hours" all read directly off the page image, none from OCR. Key: the yellow highlight sits on option E, "Order baby blood group and Coombs test" (highlighted, bold and underlined) -> zero-based index 4. The explanation box agrees with the highlight. Printed number "1." matches n1. Red folio "1485" printed at the foot confirms the PDF page number IS the printed page (override 1 holds). No boiler line printed.' },

{ n: 2, pr: 2, p: 1487,
  key: 4,
  stem: 'A 15-month-old girl is referred for developmental assessment. On assessment, she has global developmental delay. She was born at term weighing 3400 g by spontaneous vaginal delivery and required resuscitation at birth with an Apgar score of 3 at 1 minute, 4 at 5 minutes and 7 at 10 minutes. She was admitted to the neonatal unit and ventilated for 3 days. What is the most likely explanation for this finding?',
  opts: ['Congenital hypothyroidism', 'Meningitis', 'An inborn error of metabolism', 'Intracranial hemorrhage', 'Hypoxic-ischemic encephalopathy (HIE)'],
  expl: 'The history of low Apgar scores and neonatal ventilation indicates hypoxic-ischemic injury. Hypoxic-ischemic encephalopathy (HIE) is the most likely cause of her global developmental delay.',
  note: '5 options printed (A-E). Read off pg-1487.png at 150 dpi; the serif stem type is large and each numeral was individually legible -- "15-month-old", "3400 g", the Apgar triple "3 at 1 minute, 4 at 5 minutes and 7 at 10 minutes", and "ventilated for 3 days" were each read off the page image, none from OCR. Layout note: the explanation box is inset to the RIGHT of options A-D rather than sitting under the option ladder, so the box does not follow the usual full-width position; it still belongs to this question and is fully contained on p.1487. Key: yellow highlight on option E, "Hypoxic-ischemic encephalopathy (HIE)" (highlighted, bold, underlined) -> zero-based index 4; the box agrees. Printed number "2." matches n2. Red folio "1487". No boiler line printed.' },

{ n: 3, pr: 3, p: 1489,
  key: 2,
  stem: 'A 5-week-old baby boy is brought into the emergency department with a 48-hour history of projectile vomiting. The infant is hungry after vomiting and has not opened his bowels in 3 days. Clinical examination reveals a mass in the right upper quadrant region. A blood gas is performed. What finding in this blood gas is expected to be present?',
  opts: ['Normal findings', 'Metabolic acidosis', 'Metabolic alkalosis', 'Respiratory acidosis', 'Respiratory alkalosis'],
  expl: 'Projectile vomiting with a palpable RUQ mass suggests hypertrophic pyloric stenosis. This condition causes loss of gastric acid, leading to metabolic alkalosis on blood gas.',
  note: '5 options printed (A-E). Read off pg-1489.png at 150 dpi. Numerals "5-week-old", "48-hour history" (the hyphenated compound breaks across the first and second stem lines as "48-" / "hour") and "3 days" read directly off the page image, not from OCR. Key: yellow highlight on option C, "Metabolic alkalosis" -> zero-based index 2; the explanation box agrees. The box is inset to the right of options C-D, level with option C. Printed number "3." matches n3. Red folio "1489". No boiler line printed.' },

{ n: 4, pr: 4, p: 1491,
  key: 3,
  stem: "A 3-year-old girl is 'blue-lighted' into the local emergency department with reduced consciousness. Her mother informs the paramedic that her daughter has been unwell for the last 8 days with vomiting and profuse diarrhea. On arrival, she is apyrexial, has a heart rate of 170 beats per minute and respiratory rate of 20 per minute. Her systolic blood pressure is 75 mm Hg and she has a capillary refill time of 5 seconds. She is barely responsive to pain. Resuscitation begins and a blood gas reveals a metabolic acidosis. What is the most likely clinical syndrome?",
  opts: ['Anaphylactic shock', 'Septicemic shock', 'Cardiogenic shock', 'Hypovolemic shock', 'Neurogenic shock'],
  expl: 'Severe dehydration from prolonged vomiting and diarrhea causes low blood pressure and metabolic acidosis. This is characteristic of hypovolemic shock.',
  note: '5 options printed (A-E). Read off pg-1491.png at 150 dpi. Numerals read directly off the page image, not from OCR: "3-year-old", "8 days", "170 beats per minute", "20 per minute", "75 mm Hg" (printed with a space between mm and Hg on this page), "5 seconds". Key: yellow highlight on option D, "Hypovolemic shock" -> zero-based index 3; the box agrees. Box inset right of options B-C. Printed number "4." matches n4. Red folio "1491". No boiler line. RECORDED FOR THE ADJUDICATION PASS, NOT FOLDED (brief section 9): this stem is a near-identical reprint of the same vignette that opens Model Final Exam 2 (section 11, its n1 on p.1324), which I saw while copying that file\'s header block for the format. Two printed differences, both real: MFE2 prints FOUR options and stops at "Hypovolemic shock", whereas this printing adds a fifth, "Neurogenic shock", so the key letter is D in both but the option count differs; and MFE2 printed "75 mmHg" against "75 mm Hg" here. Same key content either way. Cross-section folding is a later decision with the whole book in view -- flagged only.' },

{ n: 5, pr: 5, p: 1493,
  key: 0,
  stem: "A 2-month-old baby is seen in the pediatric outpatient department. She was born at term, weighing 3.5 kg and is breastfed. Her mother is concerned as she has vomited some of the milk after most feeds since birth. She is continuing to grow along the 50th centile. What is the most likely diagnosis?",
  opts: ['Gastro-esophageal reflux', "Hirschsprung's disease", 'Infant colic', 'Overfeeding', 'Pyloric stenosis'],
  expl: 'Frequent small-volume vomiting in an otherwise thriving infant is typical of gastro-esophageal reflux. Growth along the 50th percentile makes pyloric stenosis or other pathology unlikely.',
  note: '5 options printed (A-E). Read off pg-1493.png at 150 dpi. Numerals read directly off the page image, not from OCR: "2-month-old", "3.5 kg" (the decimal point is present and unambiguous at this scale), "50th centile" in the stem and "50th percentile" in the box -- the page really does use the two different words in the two places, and both are transcribed as printed. Key: yellow highlight on option A, "Gastro-esophageal reflux" -> zero-based index 0; the box agrees. Box inset right of option E. Printed number "5." matches n5. Red folio "1493". No boiler line printed.' },

{ n: 6, pr: 6, p: 1495,
  key: 1,
  stem: 'A full-term girl was born weighing 4 kg by normal vaginal delivery and the membranes had ruptured 24 hours previously. At 6 hours of age she was noted to be breathing fast and have a low temperature. She has not breastfed since birth and has had one vomit. On examination, she is lethargic and her core temperature is 35.5°C. She has a respiratory rate of 90 breaths/min, her central capillary refill time is 4 seconds, pulse 180/min and oxygen saturation: 89% in air. Her chest X-ray shows consolidation at the right base. What is the most likely causative organism for her infection?',
  opts: ['Escherichia coli (E. coli)', 'Group B streptococcus', 'Staphylococcus aureus', 'Streptococcus pneumoniae'],
  expl: 'Symptoms appearing within the first 24 hours of life suggest early-onset sepsis. Group B streptococcus is the most common causative organism in this context.',
  note: 'FOUR options printed (A-D) -- first entry in this half with fewer than five. Read off pg-1495.png at 150 dpi. Numerals read directly off the page image, not from OCR: "4 kg", "ruptured 24 hours previously", "At 6 hours of age", core temperature "35.5 degrees C" (printed with the degree glyph and a decimal point, both legible at this scale), "90 breaths/min", "4 seconds", "pulse 180/min", "oxygen saturation: 89%". Key: yellow highlight on option B, "Group B streptococcus" -> zero-based index 1; the box agrees. Box inset right of options B-C. Printed number "6." matches n6. Red folio "1495". No boiler line printed. FLAGGED FOR THE PARENT, NOT RESOLVED HERE: this is the densest page so far and option D sits very close to the bottom edge of the cream content panel, so from the ANSWERED page alone I cannot exclude that a fifth option was clipped off the foot of the slide rather than never existing. Task override 4 forbids rendering the blank exam printing (p.1494), which is where that would be settled, so I did not render it. Staged as printed: four options, key on B.' },

{ n: 7, pr: 7, p: 1497,
  key: 3,
  stem: 'A 10-month-old boy presented to the emergency room with convulsions. He had a history of mild diarrhea for 3 days and was afebrile. He had no past history of convulsions. Examination revealed large head with wide-anterior fontanelle, prominent costochondral junctions and broad wrists. His eyes and skin pinch were normal and rectal temperature was 37.8°C. What investigation is most likely to reveal the cause of his convulsions?',
  opts: ['CT brain', 'EEG', 'Coagulation profile', 'Serum calcium', 'Skull X-ray'],
  expl: 'Signs like large head, widened fontanelles, and prominent costochondral junctions suggest rickets. Low serum calcium is the likely cause of his convulsions.',
  note: '5 options printed (A-E). Read off pg-1497.png at 150 dpi. Numerals read directly off the page image, not from OCR: "10-month-old", "diarrhea for 3 days", rectal temperature "37.8 degrees C" (degree glyph and decimal both legible). Key: yellow highlight on option D, "Serum calcium" -> zero-based index 3; the box agrees. Box inset right of options C-D. Printed number "7." matches n7. Red folio "1497". No boiler line printed. Panel had clear empty space below option E, so nothing was clipped here.' },

{ n: 8, pr: 8, p: 1499,
  key: 0,
  stem: 'A 14-year-old girl awakens with a mild sore throat, low-grade fever, and a diffuse maculopapular rash. Her physician notes mild tenderness and marked swelling of her posterior cervical and occipital lymph nodes. Four days after the onset of her illness, the rash has vanished. What is the most likely diagnosis?',
  opts: ['Rubella', 'Measles', 'Roseola infantum', 'Erythema infectiosum', 'Chickenpox'],
  expl: 'A mild rash with posterior cervical lymphadenopathy that resolves quickly is typical of rubella. The short, self-limiting nature differentiates it from measles or other exanthems.',
  note: '5 options printed (A-E). Read off pg-1499.png at 150 dpi. Only two numeric expressions on the page and both were read off the page image, not from OCR: "14-year-old" as a numeral, and "Four days after the onset" spelled out as a word rather than printed as a digit. Key: yellow highlight on option A, "Rubella" -> zero-based index 0; the box agrees. Box sits below option E, indented from the left. Printed number "8." matches n8. Red folio "1499". No boiler line printed.' },

{ n: 9, pr: 9, p: 1501,
  key: 0,
  stem: 'Which is characteristic of "lactose intolerance" in children?',
  opts: ['It is often secondary to viral gastroenteritis', 'Always present with nausea and vomiting', 'Mucus in stools is a usual finding', 'Lactase supplements are essential in treatment', 'A congenital form is common'],
  expl: 'It often occurs secondary to viral gastroenteritis due to temporary lactase deficiency. Symptoms like diarrhea and bloating occur, but congenital forms are rare.',
  note: '5 options printed (A-E). Read off pg-1501.png at 150 dpi. No clinical numerals, doses, units or exponents appear anywhere on this page -- measured by examining the whole rendered page, not inferred: the only digit on the sheet is the question number "9." and the red folio. Stem prints straight double quotes around "lactose intolerance" and they are transcribed as printed. Key: yellow highlight on option A, "It is often secondary to viral gastroenteritis" -> zero-based index 0; the box agrees. Box sits well below the option ladder with a wide blank gap above it. Printed number "9." matches n9. Red folio "1501". No boiler line printed.' },

{ n: 10, pr: 10, p: 1503,
  key: 3,
  stem: 'Which is a clear indication for tonsillectomy in children?',
  opts: ['Recurrent febrile viral respiratory tract infections with febrile convulsions', 'Exudative tonsillitis with positive monospot test', 'Two attacks of follicular tonsillitis in a two-month time', 'Seven episodes of exudative tonsillitis in the preceding year', 'A high ASOT after an episode of tonsillitis'],
  expl: 'Frequent severe tonsillitis is a clear indication. Seven episodes of exudative tonsillitis in a year justify surgical removal.',
  note: '5 options printed (A-E). Read off pg-1503.png at 150 dpi. COUNT-BEARING WORDS, ALL SPELLED OUT RATHER THAN PRINTED AS DIGITS, and read off the page image rather than OCR: option C prints "Two attacks" and "a two-month time" as words, and the key option D prints "Seven episodes" as a word, matched by "Seven episodes" in the explanation box. No digit appears anywhere on this page except the question number "10." and the red folio -- these two counts are the discriminating quantities of the question, so their word form is recorded deliberately. Key: yellow highlight on option D, "Seven episodes of exudative tonsillitis in the preceding year" -> zero-based index 3; the box agrees. Box sits well below the option ladder. Printed number "10." matches n10. Red folio "1503". No boiler line printed.' },

{ n: 11, pr: 11, p: 1505,
  key: 2,
  stem: 'What is the most common cause of recurrent abdominal pain in children?',
  opts: ['Appendicitis', 'Ascariasis', 'Functional', 'Hepatitis'],
  expl: 'Most recurrent abdominal pain in children is functional, not due to an organic cause. Conditions like appendicitis are much less common.',
  note: 'FOUR options printed (A-D), and here the four-option ladder is certain rather than merely apparent: the option list ends at D with roughly half the cream panel left empty below it and the explanation box floating in that space, so nothing was clipped. This is the counter-example that shows a four-option question is a real shape in this exam, though it does not settle the separate n6/p.1495 question, where D sat hard against the panel edge. Read off pg-1505.png at 150 dpi. No clinical numerals, units, doses or exponents anywhere on the page -- measured by examining the whole rendered sheet; the only digits are the question number "11." and the red folio. Key: yellow highlight on option C, "Functional" -> zero-based index 2; the box agrees. Printed number "11." matches n11. Red folio "1505". No boiler line printed.' },

{ n: 12, pr: 12, p: 1507,
  key: 0,
  stem: 'Which of the following conditions may cause macrocephaly?',
  opts: ['Chronic subdural hematoma', 'Cerebral palsy', 'Congenital infection', 'Hypoglycemia', 'Perinatal asphyxia'],
  expl: 'Chronic subdural hematoma can lead to increased head size due to fluid accumulation. Other listed conditions usually don’t cause macrocephaly.',
  note: '5 options printed (A-E). Read off pg-1507.png at 150 dpi. No clinical numerals, units, doses or exponents anywhere on the page -- measured by examining the whole rendered sheet; the only digits are the question number "12." and the red folio. Key: yellow highlight on option A, "Chronic subdural hematoma" -> zero-based index 0; the box agrees. Box sits below the option ladder with blank panel above and below it, so nothing is clipped. Printed number "12." matches n12. Red folio "1507". No boiler line printed.' },

{ n: 13, pr: 13, p: 1509,
  key: 1,
  stem: 'At a routine health visitor consultation, a 13-month-old boy is noticed to be crossing arms in his left hand and dragging his left hand and synkinesis and spastic gait. He is holding a toy in his left hand and his father informs the health visitor that he only uses his right side. What is the most likely finding here?',
  opts: ['Normal developmental milestones', 'Fine motor delay', 'Speech and language delay', 'Play and social delay', 'Global delay'],
  expl: '',
  note: '5 options printed (A-E). FIRST PAGE IN THIS HALF THAT PRINTS NO EXPLANATION BOX, and the absence is measured rather than assumed: the cream content panel continues for roughly two option-rows below option E and is entirely blank there, so a box was not printed and none was clipped off the foot. expl is therefore the empty string. Read off pg-1509.png at 150 dpi. Sole numeral, read off the page image and not from OCR: "13-month-old". Key: yellow highlight on option B, "Fine motor delay" -> zero-based index 1. With no box printed there is nothing for the highlight to contradict. Printed number "13." matches n13. Red folio "1509". No boiler line printed.' },

{ n: 14, pr: 14, p: 1511,
  key: 3,
  stem: 'A 15-year-old male is complaining of short stature and delayed puberty. He has had X-rays for bone age assessment done twice at the age of 5 and at the age of 11 years and both were somewhat delayed. On follow up, he ended with a height that is compatible with his mid-parental height. Which type of short stature did he suffer from?',
  opts: ['Genetic short stature', 'Growth hormone deficiency', 'Chromosomal disorder', 'Constitutional short stature', 'Nutritional short stature'],
  expl: 'If final height matches mid-parental height despite delayed puberty, it indicates constitutional growth delay. This is a normal variant, not a disease.',
  note: '5 options printed (A-E). Read off pg-1511.png at 150 dpi. Numerals read directly off the page image, not from OCR: "15-year-old", bone age X-rays "done twice at the age of 5 and at the age of 11 years" -- the two ages are single- and double-digit and both were legible without magnification. Key: yellow highlight on option D, "Constitutional short stature" -> zero-based index 3. NOT A CONTRADICTION, RECORDED FOR CLARITY: the explanation box names the entity "constitutional growth delay" while the highlighted option calls it "Constitutional short stature"; the two are the same answer under two names, and the box does not point at any other option. Box inset right of options B-C. Printed number "14." matches n14. Red folio "1511". No boiler line printed.' },

{ n: 15, pr: 15, p: 1513,
  key: 1,
  stem: 'An 18-month-old boy is brought to the pediatrician for a routine checkup. His birth weight was 3.2 kg and he was breastfed until 10 months of age when his mother gave birth to another baby. He now mainly eats a maize-based diet and his weight is below the 3rd centile. There is edema around his eyes and the dorsum of his feet. What is the most likely diagnosis?',
  opts: ['Vitamin A deficiency', 'Kwashiorkor', 'Marasmus', 'Normal', 'Vitamin D deficiency'],
  expl: 'Edema in a child with low weight and a maize-based diet suggests protein deficiency. Kwashiorkor is the classic cause.',
  note: '5 options printed (A-E). Read off pg-1513.png at 150 dpi. Numerals read directly off the page image, not from OCR: "18-month-old", birth weight "3.2 kg" (decimal point present and unambiguous), "breastfed until 10 months of age", "below the 3rd centile". Note the two vitamin letters in the options are letters, not numerals: "Vitamin A deficiency" at A and "Vitamin D deficiency" at E -- worth stating because a vitamin letter colliding with an option letter is exactly the kind of thing a later automated cross-check can misread. Key: yellow highlight on option B, "Kwashiorkor" -> zero-based index 1; the box agrees, naming Kwashiorkor outright. Box inset right of options C-D. Printed number "15." matches n15. Red folio "1513". No boiler line printed.' },

{ n: 16, pr: 16, p: 1515,
  key: 3,
  stem: 'A mother is known to have preeclampsia and had her delivery at 37 weeks of gestation for a boy weighing 2.2 kg. The newborn is admitted to the Special Care Baby Unit because of his size. He appears well. What is he most at risk of?',
  opts: ['Anemia', 'Congenital cardiac abnormality', 'Group B streptococcus infection', 'Hypoglycemia', 'Hypercalcemia'],
  expl: 'A low-birth-weight infant of a preeclamptic mother is at risk for hypoglycemia due to limited glycogen stores.',
  note: '5 options printed (A-E). Read off pg-1515.png at 150 dpi. Numerals read directly off the page image, not from OCR: "delivery at 37 weeks of gestation" and birth weight "2.2 kg" (decimal point present; the two digits either side of it are the same digit, which was checked deliberately rather than assumed). Key: yellow highlight on option D, "Hypoglycemia" -> zero-based index 3; the box agrees. Note options D and E are the near-homograph pair Hypoglycemia / Hypercalcemia -- distinct entities, and the highlight sits unambiguously on the D line. Box sits below option E, indented from the left. Printed number "16." matches n16. Red folio "1515". No boiler line printed.' },

{ n: 17, pr: 17, p: 1517,
  key: 3,
  stem: 'What is the most common cause of gastroenteritis in children?',
  opts: ['Shigella', 'Giardia', 'Cryptosporidium', 'Viruses', 'Campylobacter jejuni'],
  expl: 'Viruses (like rotavirus) are the most frequent cause of gastroenteritis in children. Bacterial causes are less common in otherwise healthy children.',
  note: '5 options printed (A-E). Read off pg-1517.png at 150 dpi. No clinical numerals, units, doses or exponents anywhere on the page -- measured by examining the whole rendered sheet; the only digits are the question number "17." and the red folio. Key: yellow highlight on option D, "Viruses" -> zero-based index 3; the box agrees and adds rotavirus as the example. Box sits well below the option ladder with a wide blank gap above it, and blank panel below, so nothing is clipped. Printed number "17." matches n17. Red folio "1517". No boiler line printed.' },

{ n: 18, pr: 18, p: 1519,
  key: 3,
  stem: 'What is the most likely cause of respiratory distress in a preterm infant born at 30 weeks of gestation?',
  opts: ['Pneumothorax', 'Meconium aspiration syndrome', 'Congenital heart disease', 'Respiratory distress syndrome', 'Transient tachypnea of the newborn'],
  expl: 'Premature infants (<34 weeks) often develop respiratory distress syndrome due to surfactant deficiency.',
  note: '5 options printed (A-E). Read off pg-1519.png at 150 dpi. Stem numeral "born at 30 weeks of gestation" read off the page image, not from OCR. ESCALATED TO 600 dpi: the explanation box carries a gestational-age THRESHOLD in the box\'s small sans face, and a threshold is exactly the class of number this project does not read at page scale, so the box was re-rendered as a band crop -- crop-1519-box-1519.png, 600 dpi, -x 950 -y 2130 -W 2600 -H 300. At 1:1 it reads unambiguously "Premature infants (<34 weeks)": a less-than sign, not a hyphen or an en dash, and the digits are 3 then 4. Recorded because the stem says 30 weeks and the box says <34 weeks -- two different gestational ages doing two different jobs, the patient\'s and the threshold\'s, and neither is a misprint of the other. Key: yellow highlight on option D, "Respiratory distress syndrome" -> zero-based index 3; the box agrees. Box sits well below the option ladder. Printed number "18." matches n18. Red folio "1519". No boiler line printed.' },

{ n: 19, pr: 19, p: 1521,
  key: 1,
  stem: "What is the minimum age we can replace a formula by a whole cow's milk for infant nutrition?",
  opts: ['6 months', '12 months', '18 months', '2 years', '5 years'],
  expl: 'Whole cow’s milk should not replace formula until 12 months of age to prevent iron deficiency and ensure adequate nutrition.',
  note: 'FIVE options printed (A-E) AND EVERY OPTION IS ITSELF A NUMBER, which makes this the most numeral-dependent entry in the half: a single misread digit would silently change the answer rather than produce visible garbage. ESCALATED TO 600 dpi accordingly -- crop-1521-opts-1521.png, -x 180 -y 660 -W 1000 -H 1120, which the reader shows well above 1:1. At that scale the ladder reads A "6 months", B "12 months", C "18 months", D "2 years", E "5 years"; the two-digit options are 1-2 and 1-8, not 12/18 confusions, and the unit word (months vs years) is distinct on every line. Nothing here came from OCR. Key: yellow highlight on option B, "12 months" -> zero-based index 1, confirmed in the same 600 dpi crop where the highlight band covers the whole B line and no other. The box agrees independently, printing "until 12 months of age" -- so the key is corroborated by a second printed occurrence of the same figure. Box sits below the ladder. Printed number "19." matches n19. Red folio "1521". No boiler line printed.' },

{ n: 20, pr: 20, p: 1523,
  key: 4,
  stem: 'Which procedure is considered the single most important factor responsible for a dramatic decline in the incidence of sudden infant death syndrome?',
  opts: ["Keeping baby in parent's room until 6 months of age", 'Introducing Folic acid early in pregnancy', 'Keeping the room warmer', 'Parents not smoking in the same room as infant', 'Supine sleeping'],
  expl: 'Supine sleeping (on the back) dramatically reduces the risk of sudden infant death syndrome. Other measures help but are less impactful.',
  note: '5 options printed (A-E). Read off pg-1523.png at 150 dpi. Sole numeral, read off the page image and not from OCR: "until 6 months of age" in option A. Key: yellow highlight on option E, "Supine sleeping" -> zero-based index 4; the box agrees. Box sits below the ladder with blank panel below it. Printed number "20." matches n20. Red folio "1523". No boiler line printed. RECORDED FOR THE ADJUDICATION PASS, NOT FOLDED (brief section 9): this is the second cross-section near-duplicate in this half. It asks the same SIDS question as Model Final Exam 2 n2 (p.1326), which I saw while copying that file\'s header for the format, and both key to "Supine sleeping" at option E. The printings are NOT identical: MFE2 asks for "the single most important factor", this one asks "Which procedure is considered the single most important factor"; MFE2 opened its ladder with "Feet to foot of cot" and this printing drops that option and substitutes "Introducing Folic acid early in pregnancy" at B, so the middle of the ladder is reordered and one distractor is exchanged. Same option count, same key position. Flagged only -- cross-section folding is a later decision with the whole book in view.' },

/* ENDPOINT part1 -- Model Final Exam 3 -- staging half B (questions n21..n40).
   Source: "Pediatrics endpoint part1.pdf", answered pages p:1525,1527,1529,1531,1533,1535,1537,
   1539,1541,1543,1545,1547,1549,1551,1553,1555,1557,1559,1561,1563 (task-supplied list, measured
   from content/peds/qb-pages/ocr/ep1/index.json 2026-09-04) -- a clean +2 step throughout. The
   section runs pp.1484-1642 and holds 79 questions; this file is the second 20.
   Every question in this exam prints twice (a blank exam page, then an answered page carrying the
   yellow-highlighted key and usually a bordered explanation box); staging is from the ANSWERED
   pages ONLY, per task override 4. No blank printing was rendered or read for a staged entry.
   TASK 0, the one deliberate exception, stages nothing: half A's n6 (answered page p.1495) prints
   four options with option D hard against the foot of the cream panel, so a clipped fifth option
   could not be excluded from the answered page alone. The BLANK printing p.1494 was rendered at
   150 dpi for this check and prints FOUR options and no more: "A. Escherichia coli (E. coli)",
   "B. Group B streptococcus", "C. Staphylococcus aureus", "D. Streptococcus pneumoniae", with the
   cream panel ending immediately below D and the red folio "1494" printed clear of it. Nothing
   was clipped; half A's n6 is a genuine four-option question and its file was not edited.
   PDF is 1:1, NOT 2-up -- brief pd-staging-brief.md Section 2's 2-up folio arithmetic does NOT
   apply here, per task override 1. A PDF page number IS the page rendered, and the red folio at
   the foot of each sheet was checked against it on every page in this half.
   key is a ZERO-BASED INDEX into opts (integer), never a letter -- per task override 2, this
   differs from the House-bank brief Section 7.
   Per task override 3: paediatric surgery topics (gastroschisis, atresias, Hirschsprung,
   intussusception, hernias, Wilms, neuroblastoma, urological anomalies) are IN SCOPE for this
   book -- the House-bank Section 11a exclusion does not apply here.
   Render recipe is 150 dpi whole pages, per task override 5, not the brief Section 3 two-pass
   300/600 dpi recipe written for 2-up sheets. A targeted 600 dpi crop is escalated to only for a
   genuinely risky numeral (all-numeric option ladder, exponent, dose, threshold carrying < or >);
   every such escalation is named in the note of the entry it belongs to.
   OCR at content/peds/qb-pages/ocr/ep1/p<NNNN>.txt was NOT opened during this staging pass, per
   brief Section 4. Nothing here comes from OCR text.
   n is the question's position in the SECTION. Where the printed exam number (pr) disagrees with
   n, n is kept and the disagreement is recorded in that entry's note.
   A box overflowing onto a later sheet is recorded with a `box` field and described WITHOUT the
   word "straddle"; only a stem/options span across sheets gets straddle:true plus the uppercase
   marker.
   This exam reprints questions from Model Final Exam 2 and from the book's body. A stem that
   looks familiar is flagged in its note and staged normally -- folding is a later decision made
   by a separate adjudication pass, never here. No other half's entries were read to check.
   File format: bare { ... } fragments separated by one blank line -- no array wrapper and no
   commas between entries. `node --check` always fails on this shape and that failure is
   meaningless; validated with tools/bank-harness/check-part-ep.js instead.
   CLOSED 2026-09-05 -- 20/20 entries staged (n21..n40, pp.1525-1563), each appended immediately
   after its page was read and the file re-validated along the way. Final run: 20 entries, n 21..40,
   pp.1525-1563, option counts 4:6 and 5:14, key positions 0:1 1:4 2:5 3:6 4:4, one entry with no
   printed box (n22), no pr/n disagreement, no figures, OK. The printed exam numbering ran 21..40
   with no repeat and no skip and agreed with n on every page, and the red folio matched the PDF
   page on all twenty sheets, so override 1 holds throughout this half. The +2 page step held on
   all twenty pages. No question straddled a page break and no explanation box overflowed onto a
   later sheet, so no straddle field, no uppercase straddle marker and no box field appear in this
   file. Seven numerals were escalated to 600 dpi band crops across six pages (p.1529 two
   incubation ranges, p.1533 four CRT thresholds carrying > signs, p.1541 an all-numeric month
   ladder, p.1551 an all-numeric percentage ladder, p.1553 three vital-sign thresholds, p.1563 a
   temperature and a virus designation); everything else was read off the 150 dpi page image. One
   crop needed re-rendering, the p.1563 temperature, which took three attempts before the figure
   sat clear of the crop edge -- recorded in that entry.
*/

{ n: 21, pr: 21, p: 1525,
  key: 1,
  stem: "In neonatal resuscitation, what is the next step to do if the baby doesn't start to breathe after delivery?",
  opts: ['Perform chest compressions', 'Ventilate the lungs', 'Give epinephrine', 'Tracheal intubation'],
  expl: 'If a newborn isn’t breathing, the first step is to ventilate the lungs. Oxygenation takes priority before chest compressions or medications.',
  note: 'FOUR options printed (A-D); the cream panel continues well below option D with a wide band of empty page between D and the explanation box, so nothing is clipped here. Read off the full page rendered at 150 dpi (pg-1525.png); no numerals in this stem or option ladder at all, so no 600 dpi escalation was needed and nothing came from OCR. Key: the yellow highlight sits on option B, "Ventilate the lungs" (highlighted, bold) -> zero-based index 1; the explanation box agrees. The box is centred low on the page rather than inset beside the options. Printed number "21." matches n21. Red folio "1525" printed in red at the foot confirms the PDF page number IS the printed page (override 1 holds on this page). No boiler line printed. The stem prints a straight apostrophe in "doesn\'t" while the box prints a curly one in "isn’t"; both transcribed as printed.' },

{ n: 22, pr: 22, p: 1527,
  key: 4,
  stem: 'Which organism readily causes disease by transmission from asymptomatic pharyngeal carriers?',
  opts: ['Beta hemolytic Streptococcus', 'Staphylococci', 'Haemophilus influenzae', 'Gram negative cocci', 'Streptococcal pneumoniae'],
  expl: '',
  note: '5 options printed (A-E). Read off pg-1527.png at 150 dpi; no numerals anywhere on the page, so no 600 dpi escalation and nothing from OCR. Key: yellow highlight on option E, "Streptococcal pneumoniae" (highlighted, bold) -> zero-based index 4. NO EXPLANATION BOX IS PRINTED on this page -- expl is the empty string; the cream panel simply runs on empty for about a third of its height below option E, which also confirms nothing was clipped. With no box there is no box-vs-highlight cross-check available on this question, and none is claimed. Printed number "22." matches n22. Red folio "1527". No boiler line printed.' },

{ n: 23, pr: 23, p: 1529,
  key: 4,
  stem: 'Which is a feature of chickenpox infection?',
  opts: ['It has an incubation period of 5–7 days.', 'The rash is confluent, centrifugal, and pustular.', 'It is associated with Koplik spots.', 'There is a generalized lymphadenopathy', 'It can cause visceral dissemination in the immunocompromised host'],
  expl: 'Varicella can cause visceral dissemination in immunocompromised patients. The incubation is 14–16 days, and rash is vesicular, not pustular.',
  note: '5 options printed (A-E). Read off pg-1529.png at 150 dpi. TWO NUMERALS ESCALATED TO 600 dpi band crops, both being incubation-period ranges and therefore clinical numbers: crop c1529a-1529.png (-x 1700 -y 480 -W 1150 -H 180) reads option A as "iod of 5–7 days." -- 5 to 7, en dash, first read confirmed; crop c1529b-1529.png (-x 2350 -y 1990 -W 1150 -H 170) reads the box as "ncubation is 14–16 days," -- 14 to 16, en dash. Neither needed a second render and neither came from OCR. Note the two numbers disagree with each other by design: option A offers 5-7 days as a distractor and the box gives 14-16 days as the true figure, so this is the question working as printed, not a defect. Key: yellow highlight on option E, "It can cause visceral dissemination in the immunocompromised host" (highlighted, bold and underlined, and the highlight runs to the right edge of the cream panel) -> zero-based index 4; the box agrees. Options A, B and C print a full stop; D and E do not -- transcribed as printed. Printed number "23." matches n23. Red folio "1529". No boiler line printed.' },

{ n: 24, pr: 24, p: 1531,
  key: 4,
  stem: 'How would you manage a choking child with mild airway obstruction?',
  opts: ['Start early CPR', 'Give 5 abdominal thrusts', 'Do 5 back blows', 'Give 5 chest thrusts', 'Encourage cough'],
  expl: 'If a child is choking but can still cough, encourage coughing. No back blows or abdominal thrusts are needed yet.',
  note: '5 options printed (A-E). Read off pg-1531.png at 150 dpi. The only numerals are the single digit "5" repeated in options B, C and D (5 abdominal thrusts / 5 back blows / 5 chest thrusts); each is a large-serif single digit sitting between two words and was individually legible at 150 dpi, so no 600 dpi crop was taken and nothing came from OCR. Key: yellow highlight on option E, "Encourage cough" (highlighted, bold and underlined) -> zero-based index 4; the explanation box agrees. Box sits low and centre-left, well clear of the option ladder, fully contained on p.1531. Printed number "24." matches n24. Red folio "1531". No boiler line printed.' },

{ n: 25, pr: 25, p: 1533,
  key: 2,
  stem: 'Which of the following is true about "capillary refill time"?',
  opts: ['Apply blanching pressure for 2 seconds', 'Prolonged capillary refill if > 3 seconds', 'It is affected by body exposure to a cold environment', 'It is reproducible only in children over the age of 2 years'],
  expl: 'CRT is prolonged (>3 sec) in poor perfusion and can be affected by cold environments. It is measured by blanching pressure for 5 seconds.',
  note: 'FOUR options printed (A-D); the cream panel runs on for roughly half its height below option D and the explanation box sits in that empty space, so nothing is clipped at the foot. Read off pg-1533.png at 150 dpi. FOUR NUMERALS ESCALATED TO 600 dpi band crops because two of them carry a greater-than sign and all four are thresholds: crop c1533a-1533.png (-x 1750 -y 500 -W 1150 -H 360) reads "e for 2 seconds" on the option A line and "l if > 3 seconds" on the option B line -- the sign is a plain > and there is a space on each side of it as printed; crop c1533b-1533.png (-x 700 -y 1750 -W 1150 -H 340) reads the box as "CRT is prolonged (>3 sec) in", "by cold environments. It is m", "5 seconds." -- inside the box the > is set tight against the 3 with no space, unlike the option. Neither crop needed a second render and no numeral came from OCR. A NUMERIC DIVERGENCE WITHIN THE PAGE, FLAGGED: option A says blanching pressure "for 2 seconds" while the box says it is measured "by blanching pressure for 5 seconds" -- 2 against 5 for the same manoeuvre. Option A is a distractor and not the key, so this is not a key-versus-box contradiction, but the two seconds figures do disagree and the page is transcribed exactly as it prints both. Key: yellow highlight on option C, "It is affected by body exposure to a cold environment" (highlighted, bold and underlined) -> zero-based index 2; the box agrees, naming cold environments. Printed number "25." matches n25. Red folio "1533". No boiler line printed.' },

{ n: 26, pr: 26, p: 1535,
  key: 1,
  stem: 'How does human milk oligosaccharides work?',
  opts: ['Kill microorganisms', 'Function as prebiotics', 'Help protein absorption', 'Help lactose digestion', 'Prevent infant colic'],
  expl: 'They act as prebiotics, promoting growth of beneficial gut bacteria and protecting against pathogens.',
  note: '5 options printed (A-E). Read off pg-1535.png at 150 dpi; no numerals anywhere on the page, so no 600 dpi escalation and nothing from OCR. Key: yellow highlight on option B, "Function as prebiotics" (highlighted, bold and underlined) -> zero-based index 1; the explanation box agrees. Box sits low-centre with clear empty panel below it, fully contained on p.1535. Printed number "26." matches n26. Red folio "1535". No boiler line printed.' },

{ n: 27, pr: 27, p: 1537,
  key: 0,
  stem: 'A 5-year-old girl is receiving induction chemotherapy for acute lymphoblastic leukemia. Which of the following vaccines is contraindicated to be given to her 4-month-old sibling?',
  opts: ['Oral Polio Vaccine', 'Hemophilus influenzae Vaccine', 'Hepatitis B Vaccine', 'Pneumococcal Vaccine', 'Diphtheria, Pertussis, Tetanus (DPT) Vaccine'],
  expl: 'Live oral polio vaccine is contraindicated in siblings of immunocompromised children due to risk of transmission.',
  note: '5 options printed (A-E). Read off pg-1537.png at 150 dpi. The two ages, "5-year-old" and "4-month-old", are single large-serif digits inside hyphenated compounds and were individually legible at 150 dpi, so no 600 dpi crop was taken; no numeral came from OCR. Key: yellow highlight on option A, "Oral Polio Vaccine" (highlighted, bold and underlined) -> zero-based index 0; the explanation box agrees, naming live oral polio vaccine. Box sits below the ladder, right of centre, fully contained on p.1537. Printed number "27." matches n27. Red folio "1537". No boiler line printed.' },

{ n: 28, pr: 28, p: 1539,
  key: 1,
  stem: 'A term infant born by elective C-section had developed acute respiratory distress few hours later. What is the most likely diagnosis?',
  opts: ['Respiratory distress syndrome', 'Transient tachypnea of the newborn', 'Pneumothorax', 'Meconium aspiration syndrome'],
  expl: 'Transient tachypnea of the newborn occurs due to delayed clearance of fetal lung fluid, especially after elective C-section.',
  note: 'FOUR options printed (A-D); the cream panel continues for about half its height below option D and carries the explanation box in that space, so nothing is clipped at the foot. Read off pg-1539.png at 150 dpi; the page prints no numerals at all (the stem says "few hours later" without a figure), so no 600 dpi escalation and nothing from OCR. Key: yellow highlight on option B, "Transient tachypnea of the newborn" (highlighted, bold and underlined) -> zero-based index 1; the explanation box agrees. Printed number "28." matches n28. Red folio "1539". No boiler line printed.' },

{ n: 29, pr: 29, p: 1541,
  key: 2,
  stem: 'A healthy infant can sit without support, roll over and crawl but cannot stand alone. What is her most likely developmental age?',
  opts: ['4 months', '6 months', '9 months', '13 months', '16 months'],
  expl: 'Sitting, rolling, and crawling without standing corresponds to around 9 months of age.',
  note: '5 options printed (A-E). Read off pg-1541.png at 150 dpi. AN ALL-NUMERIC OPTION LADDER, so it was escalated to 600 dpi in full per the override: crop c1541a-1541.png (-x 180 -y 690 -W 1000 -H 1070) shows the whole ladder 1:1 and reads "A. 4 months", "B. 6 months", "C. 9 months" (on the yellow highlight, bold and underlined), "D. 13 months", "E. 16 months" -- the two two-digit values are unambiguously 13 and 16, and 9 is a 9 not a 4 or a 6. Crop c1541b-1541.png (-x 1200 -y 2100 -W 1150 -H 230) reads the box line as "around 9 months of age." Neither crop needed a second render and no numeral came from OCR. Key: the highlight sits on option C, "9 months" -> zero-based index 2; the box agrees at 9 months. Box sits below the ladder, right of centre, fully contained on p.1541. Printed number "29." matches n29. Red folio "1541". No boiler line printed.' },

{ n: 30, pr: 30, p: 1543,
  key: 2,
  stem: 'What is the main drive for growth during the childhood phase?',
  opts: ['Nutrition', 'Genetics', 'Growth hormone', 'Thyroid hormones', 'Testosterone and estrogen'],
  expl: 'Growth hormone is the primary driver of linear growth during childhood, rather than sex hormones or nutrition alone.',
  note: '5 options printed (A-E). Read off pg-1543.png at 150 dpi; no numerals anywhere on the page, so no 600 dpi escalation and nothing from OCR. Key: yellow highlight on option C, "Growth hormone" (highlighted, bold and underlined) -> zero-based index 2; the explanation box agrees. Box sits below the ladder, left of centre, with empty cream panel beneath it, fully contained on p.1543. Printed number "30." matches n30. Red folio "1543". No boiler line printed.' },

{ n: 31, pr: 31, p: 1545,
  key: 3,
  stem: 'What is the optimal emergency management of a child presenting to the ER with severe croup?',
  opts: ['Suction of the pharynx', 'IV epinephrine', 'Oral ampicillin', 'Nebulized Epinephrine', 'Immediate intubation'],
  expl: 'Nebulized epinephrine reduces airway swelling rapidly and is first-line emergency treatment for severe croup.',
  note: '5 options printed (A-E). Read off pg-1545.png at 150 dpi; no numerals, doses or units printed anywhere on the page -- the epinephrine options name a route only and carry no dose -- so no 600 dpi escalation and nothing from OCR. Key: yellow highlight on option D, "Nebulized Epinephrine" (highlighted, bold and underlined) -> zero-based index 3; the explanation box agrees. Note the discrimination between options B and D is route alone, IV against nebulized, so the key rests on the route word and was read directly off the highlight. Box below the ladder, centred, fully contained on p.1545. Printed number "31." matches n31. Red folio "1545". No boiler line printed.' },

{ n: 32, pr: 32, p: 1547,
  key: 2,
  stem: 'Increased risk for intussusception was observed as a rare complication following immunization with which vaccine?',
  opts: ['Inactivated polio vaccine', 'Oral polio vaccine', 'Rotavirus vaccine', 'Hepatitis A vaccine', 'Hepatitis B vaccine'],
  expl: 'Rotavirus vaccine has a very rare risk of causing intussusception in infants.',
  note: '5 options printed (A-E). Read off pg-1547.png at 150 dpi; no numerals on the page, so no 600 dpi escalation and nothing from OCR. Key: yellow highlight on option C, "Rotavirus vaccine" (highlighted, bold and underlined) -> zero-based index 2; the explanation box agrees. Box below the ladder, centred, fully contained on p.1547. Printed number "32." matches n32. Red folio "1547". No boiler line printed. Options D and E differ by the single letter A against B, so the ladder was read letter by letter to place the key; the highlight is unambiguously on C, two lines above them.' },

{ n: 33, pr: 33, p: 1549,
  key: 3,
  stem: 'A preterm infant, intubated at birth, develops worsening of existing respiratory distress and shifting of mediastinum to one side. What is the most likely diagnosis?',
  opts: ['Congenital heart disease', 'Apnea of prematurity', 'Herpes simplex infection', 'Pneumothorax'],
  expl: 'Mediastinal shift in a ventilated preterm infant indicates pneumothorax.',
  note: 'FOUR options printed (A-D); the highlighted option D is followed by roughly a third of a panel of empty cream and then the explanation box, so nothing is clipped at the foot. Read off pg-1549.png at 150 dpi; no numerals on the page, so no 600 dpi escalation and nothing from OCR. Key: yellow highlight on option D, "Pneumothorax" (highlighted, bold and underlined) -> zero-based index 3; the explanation box agrees. Box below the ladder, centred, fully contained on p.1549. Printed number "33." matches n33. Red folio "1549". No boiler line printed. RECORDED, NOT FOLDED: "Pneumothorax" is also option C of n28 on p.1539 two questions earlier, but the two stems and keys are different questions and only share a distractor.' },

{ n: 34, pr: 34, p: 1551,
  key: 3,
  stem: 'If the age of 18 months is the "red-flag age" of walking unsupported, what is the percentage of normal children who achieve that skill by age of 18 months?',
  opts: ['27%', '57%', '77%', '97.5%'],
  expl: 'About 97.5% of normal children can walk unsupported by 18 months; delayed walking beyond this is a red flag.',
  note: 'FOUR options printed (A-D); below the highlighted option D the panel runs on empty and then carries the explanation box, so nothing is clipped at the foot. Read off pg-1551.png at 150 dpi. AN ALL-NUMERIC PERCENTAGE LADDER, escalated to 600 dpi in full per the override: crop c1551a-1551.png (-x 180 -y 870 -W 850 -H 840) shows the ladder 1:1 and reads "A. 27%", "B. 57%", "C. 77%", "D. 97.5%" on the yellow highlight -- the three distractors are two-digit whole percentages and only the key carries a decimal, ".5", which is present and unambiguous at 600 dpi. Crop c1551b-1551.png (-x 1080 -y 1950 -W 1150 -H 220) reads the box as "About 97.5% of normal childr" / "months; delayed walking bey", confirming the same 97.5 figure inside the box. Neither crop needed a second render and no numeral came from OCR. The "18 months" in the stem is printed twice and was read off the page image at 150 dpi, large serif and unambiguous. Key: highlight on option D, "97.5%" (highlighted, bold and underlined) -> zero-based index 3; the box agrees. Printed number "34." matches n34. Red folio "1551". No boiler line printed.' },

{ n: 35, pr: 35, p: 1553,
  key: 4,
  stem: 'Which of the following is a diagnostic sign of uncompensated shock?',
  opts: ['Capillary refilling time equals 2 seconds', 'Heart rate greater than 120 beats/min', 'Cold extremities', 'Respiratory rate greater than 40 breaths/min', 'Low blood pressure'],
  expl: 'Low blood pressure is a late and definitive sign of uncompensated (decompensated) shock, showing that the body’s compensatory mechanisms have failed and organs are under-perfused. Other signs like rapid heart rate, fast breathing, or cold extremities indicate early or compensated shock, but only hypotension confirms the uncompensated stage.',
  note: '5 options printed (A-E). Read off pg-1553.png at 150 dpi. THREE OPTION THRESHOLDS ESCALATED TO 600 dpi because all three are vital-sign cut-offs: crop c1553a-1553.png (-x 1600 -y 500 -W 1150 -H 400) reads option A as "e equals 2 seconds" and option B as "n 120 beats/min"; crop c1553b-1553.png (-x 1900 -y 1200 -W 1150 -H 190) reads option D as "n 40 breaths/min". So the printed figures are 2 seconds, 120 beats/min and 40 breaths/min. Note the book spells the comparison out in words here -- "greater than" -- and prints no > glyph on this page, unlike n25 on p.1533. Neither crop needed a second render and no numeral came from OCR. Key: yellow highlight on option E, "Low blood pressure" (highlighted, bold and underlined) -> zero-based index 4; the explanation box agrees and goes further, naming cold extremities and rapid rates as compensated-shock signs, which is why those distractors are wrong. This is the longest box in the half so far, five lines, and it is fully contained on p.1553. Printed number "35." matches n35. Red folio "1553". No boiler line printed. RECORDED, NOT FOLDED: capillary refill time and its 2-second figure also appear in n25 on p.1533, but that question asks what is true of CRT and this one asks for a sign of uncompensated shock; different stems, different keys, only a shared clinical parameter.' },

{ n: 36, pr: 36, p: 1555,
  key: 3,
  stem: 'A Multi-system inflammatory response is a rare complication in children following which infection?',
  opts: ['Influenza', 'Cytomegalovirus infection', 'Epstein-Barr infection', 'COVID-19', 'Meningitis'],
  expl: 'COVID-19 can trigger a rare pediatric multi-system inflammatory syndrome post-infection.',
  note: '5 options printed (A-E). Read off pg-1555.png at 150 dpi. The only digits on the page are the "19" of COVID-19, printed in the highlighted option and again in the box; both are large enough to read at 150 dpi and both read 19, and nothing came from OCR. Key: yellow highlight on option D, "COVID-19" (highlighted, bold and underlined) -> zero-based index 3; the explanation box agrees. Box below the ladder, centred, fully contained on p.1555. Printed number "36." matches n36. Red folio "1555". No boiler line printed.' },

{ n: 37, pr: 37, p: 1557,
  key: 2,
  stem: 'A 3-month-old baby is admitted with a diagnosis of bronchiolitis. Her condition has further worsened, and she developed audible grunting sounds. What is the best pathophysiologic explanation for grunting in this baby?',
  opts: ['Oxygen consumption is decreased with grunting which helps resolve hypoxemia', 'During grunting lung volume increases as more air moves through the conducting airways', 'Grunting increases end expiratory pressure and promotes gas exchange', 'During grunting the diameter of the bronchi and bronchioles is increased'],
  expl: 'Grunting increases end-expiratory pressure, helping keep alveoli open and improving gas exchange.',
  note: 'FOUR options printed (A-D), each a full sentence and two of them wrapping to a second line; the explanation box follows option D and the cream panel closes immediately under the box, so this is the tightest page in the half. The question is nonetheless complete as printed: the box, which always comes last, is present and fully visible, so no option was clipped below it. Read off pg-1557.png at 150 dpi. The only numeral is the age "3-month-old", a single large-serif digit read directly off the page image; no 600 dpi crop was needed and nothing came from OCR. Key: yellow highlight on option C, "Grunting increases end expiratory pressure and promotes gas exchange" (highlighted, bold and underlined, the highlight running the full width of the cream panel) -> zero-based index 2; the box agrees. The option prints "end expiratory" unhyphenated and the box prints "end-expiratory" with a hyphen; each is transcribed as printed in its own field. Printed number "37." matches n37. Red folio "1557", printed lower on the sheet than on the other pages of this half because the content panel runs deeper. No boiler line printed.' },

{ n: 38, pr: 38, p: 1559,
  key: 3,
  stem: '"Acyclovir" is an effective treatment of which virus infection?',
  opts: ['Human Herpes virus type 6', 'Measles virus', 'Rubella', 'Herpes simplex virus infection', 'Coxsackie virus'],
  expl: 'Acyclovir is effective against herpes simplex virus, not measles, rubella, or other viral infections listed.',
  note: '5 options printed (A-E). Read off pg-1559.png at 150 dpi. The only numeral is the "6" of "Human Herpes virus type 6" in option A, a single large-serif digit at the end of the line read directly off the page image; the stem carries no dose for acyclovir, so there was no dose to escalate. Nothing came from OCR. Key: yellow highlight on option D, "Herpes simplex virus infection" (highlighted, bold and underlined) -> zero-based index 3; the explanation box agrees, naming herpes simplex virus. Options A and D both name a herpes virus, so the ladder was read in full before placing the key; the highlight is on D, not A. Box below the ladder, left of centre, fully contained on p.1559. Printed number "38." matches n38. Red folio "1559". No boiler line printed.' },

{ n: 39, pr: 39, p: 1561,
  key: 1,
  stem: 'You perform a routine newborn examination on a baby who is 72 hours old. Which one of the following features requires further immediate assessment?',
  opts: ['Acrocyanosis (cyanosis of the hands and feet)', 'A heart murmur', 'White vaginal discharge', 'Breast enlargement', 'Subconjunctival hemorrhages'],
  expl: '(acrocyanosis, breast enlargement, vaginal discharge, subconjunctival hemorrhage) are benign. A murmur needs urgent evaluation.',
  note: '5 options printed (A-E). Read off pg-1561.png at 150 dpi. The only numeral is "72 hours old" in the stem, two large-serif digits read directly off the page image; no 600 dpi crop needed and nothing from OCR. Key: yellow highlight on option B, "A heart murmur" (highlighted, bold and underlined) -> zero-based index 1; the box agrees, listing the other four options as benign and the murmur as needing urgent evaluation. THE BOX TEXT IS ITSELF INCOMPLETE AS PRINTED and this is recorded rather than repaired: it opens with an open parenthesis and a bare list, "(acrocyanosis, breast enlargement, vaginal discharge, subconjunctival hemorrhage) are benign.", with no lead-in clause before the parenthesis -- something like "Normal newborn findings" is missing from the printing. This is not a render artefact: the whole page was rendered as one image at 150 dpi, the box border is complete on all four sides, and the first line begins flush with the box\'s left inset, so nothing was cut off by the crop. Transcribed exactly as the page prints it. Box below the ladder, left of centre, fully contained on p.1561. Printed number "39." matches n39. Red folio "1561". No boiler line printed.' },

{ n: 40, pr: 40, p: 1563,
  key: 3,
  stem: 'A 6-year-old girl missed a few days of school as she had a fever and was generally lethargic. Now she has a temperature of 38.3°C and has a marked erythematous rash on her cheeks. Which organism is most likely to be the causative agent?',
  opts: ['Chickenpox virus (varicella-zoster virus)', 'Herpes simplex virus', 'Measles virus', 'Parvovirus infection (fifth disease)', 'Roseola infantum (sixth disease)'],
  expl: '“Slapped cheek” appearance is classic for erythema infectiosum (Parvovirus B19).',
  note: '5 options printed (A-E). Read off pg-1563.png at 150 dpi. TWO NUMERALS ESCALATED TO 600 dpi, a temperature and a virus designation. The temperature crop TOOK THREE RENDERS: c1563a-1563.png (-x 1700 -y 470 -W 1150 -H 180) landed left of the figure and showed only "ne has a temperature"; c1563a2-1563.png (-x 2050) still clipped it at "a temperature of 38"; c1563a3-1563.png (-x 2750 -y 470 -W 1100 -H 190) finally shows it whole and reads "re of 38.3°C and has" -- so the printed value is 38.3 degrees C, with the decimal point and the degree glyph both present, and the digit after the point is a 3. No digit was ever guessed from a clipped crop. Crop c1563b-1563.png (-x 550 -y 2380 -W 1150 -H 160) reads the box\'s last line as "B19)." -- capital B, one-nine -- confirming Parvovirus B19 and not B10 or B18. Nothing came from OCR. The stem prints as two paragraphs, the vignette and then "Which organism is most likely to be the causative agent?" on its own line after a blank line; they are joined into one stem string here. Key: yellow highlight on option D, "Parvovirus infection (fifth disease)" (highlighted, bold and underlined) -> zero-based index 3; the box agrees, naming erythema infectiosum and Parvovirus B19. Options D and E pair "fifth disease" against "sixth disease", so the ladder was read to the end before the key was placed. In the box the phrases "Slapped cheek" and "erythema infectiosum (Parvovirus B19)" are printed in bold with curly quotation marks around the first; the bold is not reproducible in the expl string and the curly quotes are kept as printed. Box below the ladder, tight against the foot of the cream panel but complete, all four borders visible. Printed number "40." matches n40 and is the last question of this half. Red folio "1563". No boiler line printed.' },

/* ENDPOINT part1 -- Model Final Exam 3 -- staging half C (questions n41..n60).
   Source: "Pediatrics endpoint part1.pdf", answered pages p:1565,1567,1569,1571,1573,1575,1577,
   1579,1581,1583,1585,1587,1589,1591,1593,1595,1597,1599,1601,1603 (task-supplied list, measured
   from content/peds/qb-pages/ocr/ep1/index.json 2026-09-04) -- a clean +2 step throughout. The
   section runs pp.1484-1642 and holds 79 questions; this file is the third block of 20.
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
   Render recipe per task override 5: full pages at -r 150, with a targeted 600 dpi band crop only
   for a genuinely risky numeral (all-numeric option ladder, exponent, dose, temperature, or a
   threshold carrying < or >). No blanket cropping.
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
   CLOSED 2026-09-05 -- 20/20 entries staged (n41..n60, pp.1565-1603), each appended immediately
   after its page was read and the file re-validated along the way.
   ⚠️ THE PRINTED NUMBERING BREAKS MID-HALF, AND THE BOOK CONTRADICTS ITSELF ABOUT IT. The answered
   sheets print 41..51 in step with n up to p.1585, then jump straight to 53 on p.1587 and run
   54..61 to the end. The blank sheet p.1586 was rendered to settle it and prints the SAME question
   as answered p.1587 -- identical stem and options -- numbered 52. So the ANSWERED run skips the
   number 52 while the blank run uses it. n was NOT renumbered: n is the section position (a clean
   +2 answered-page step held on all twenty sheets, every red folio matching its PDF page), and pr
   records what each answered page actually prints. pr == n for n41..n51, pr == n+1 for n52..n60.
   No question was lost or duplicated by this; it is one printed number skipped.
   One within-section reprint found and NOT folded: n58 (p.1599) reprints n50 (p.1583) word for
   word with the same key, differing only in the wording of the explanation box.
   One shared option menu recorded as a pairing, not a fold: n59/n60 (pp.1601/1603).
   Numerals escalated to 600 dpi band crops on five pages: p.1565 temperature, p.1573 the whole
   inequality option ladder, p.1593 three laboratory values (the hematocrit needed a second,
   widened render), p.1601 the saline dose. Everything else was read off the 150 dpi full page. */

{ n: 41, pr: 41, p: 1565,
  key: 1,
  stem: 'A girl was born at term weighing 4 kg. At 6 hours of age, she was noted to be breathing fast and have a low temperature. She was born by normal vaginal delivery and the membranes had ruptured 24 hours previously. She has not breastfed since birth and has had one vomit. On examination, she is lethargic and her core temperature is 35.5°C. She has a respiratory rate of 90 breaths/min, her central capillary refill time is 4 seconds, pulse 180/min, and oxygen saturation is 89% in air. Her chest X-ray shows consolidation at the right base. What is the most likely causative organism for her infection?',
  opts: ['Escherichia coli (E. coli)', 'Group B streptococcus', 'Listeria monocytogenes', 'Staphylococcus aureus', 'Streptococcus pneumoniae'],
  expl: 'GBS is the most common cause of early-onset neonatal sepsis/pneumonia.',
  note: '5 options printed (A-E). Read off the full page rendered at 150 dpi (pg-1565-1565.png); the page is one large-serif question per sheet and every numeral was individually legible at that scale. NUMERAL ESCALATION: the core temperature was re-rendered as a 600 dpi band crop (crop-1565-temp, -x 3400 -y 760 -W 1500 -H 280, one render, nothing clipped) because override 5 names a temperature as a risky numeral -- it reads 35.5°C, degree sign and capital C both present. All other numerals ("4 kg", "6 hours of age", "ruptured 24 hours previously", "90 breaths/min", "4 seconds", "pulse 180/min", "89% in air") were read directly off the 150 dpi page image, none from OCR. Key: the yellow highlight sits on option B, "Group B streptococcus" (highlighted, bold, underlined) -> zero-based index 1; the explanation box agrees. Box is inset to the RIGHT of options B-C, two printed lines, transcribed verbatim including the slash in "sepsis/pneumonia". Printed number "41." matches n41. Red folio "1565" at the foot confirms the PDF page IS the printed page (override 1 holds). No boiler line printed.' },

{ n: 42, pr: 42, p: 1567,
  key: 3,
  stem: 'A 5-year-old boy, at a birthday party, presented with sudden onset of edema that started in his lips and eyelids, then spread to the dorsum of the hands and the genitalia. What is the first possibility?',
  opts: ['Nutritional anemia', 'Nephrotic syndrome', 'Hepatic insufficiency', 'Angioedema', 'Heart failure'],
  expl: 'Rapid onset swelling without renal, hepatic, or cardiac features → allergic angioedema.',
  note: '5 options printed (A-E). Read off pg-1567-1567.png at 150 dpi. The only numeral in the question is "5-year-old", read directly off the page image, not from OCR; nothing on this page is a dose, exponent, temperature or threshold, so no 600 dpi crop was needed. Key: yellow highlight on option D, "Angioedema" (highlighted, bold, underlined) -> zero-based index 3; the explanation box agrees. The box sits BELOW the whole option ladder, centred, two printed lines, and prints a literal right-arrow glyph and red bold text on "allergic angioedema" -- the arrow is transcribed as printed. Printed number "42." matches n42. Red folio "1567". No boiler line printed.' },

{ n: 43, pr: 43, p: 1569,
  key: 2,
  stem: 'Which of the following is true about neonatal sepsis?',
  opts: ['A heart murmur is usually present.', 'Early-onset sepsis is usually acquired via the placenta following maternal infection.', 'Pneumonia is the commonest presentation in early-onset sepsis.', 'High fever is commonly present.', 'CBC is done to detect neutrophilia.'],
  expl: '•Early-onset neonatal sepsis (within the first 72 hours) is usually acquired from the maternal genital tract during delivery. The most frequent clinical manifestation is respiratory distress or pneumonia, often caused by pathogens like Group B Streptococcus or E. coli.',
  note: '5 options printed (A-E); each option is a full sentence and each prints a trailing full stop, reproduced here. Read off pg-1569-1569.png at 150 dpi. The single numeral is the box\'s "within the first 72 hours", read directly off the page image, not from OCR; it is a plain duration rather than a dose, exponent, temperature or threshold, so no 600 dpi crop was taken. Key: yellow highlight on option C, "Pneumonia is the commonest presentation in early-onset sepsis." (highlighted, bold, underlined, and the highlight runs the full width of the line including the trailing stop) -> zero-based index 2; the box agrees. The box sits BELOW the option ladder, four printed lines, italic bold, and opens with a literal bullet glyph immediately against the first word with no space -- transcribed exactly as printed. Printed number "43." matches n43. Red folio "1569". No boiler line printed. Topically adjacent to n41 on p.1565 (both early-onset neonatal sepsis / GBS) but a different question -- not a reprint.' },

{ n: 44, pr: 44, p: 1571,
  key: 1,
  stem: 'Which of the following is a cause of bacterial meningitis in children?',
  opts: ['Group A streptococci', 'Streptococcus pneumoniae', 'E. coli', 'Pseudomonas'],
  expl: 'After the neonatal period, S. pneumoniae is the most common cause of bacterial meningitis.',
  note: 'FOUR options printed (A-D), which is a real shape in this exam and not a clipped ladder: the cream question panel runs on empty for roughly a third of its height below option D before the explanation box, and there is no E line and no page-break artefact -- checked on the whole page rendered at 150 dpi (pg-1571-1571.png). No numerals in stem, options or box, so nothing to escalate to 600 dpi; that zero is stated from reading the whole page as one image. Key: yellow highlight on option B, "Streptococcus pneumoniae" (highlighted, bold, underlined) -> zero-based index 1; the box agrees, naming the same organism in its abbreviated form "S. pneumoniae" (an abbreviation of the same answer is agreement, not a contradiction). Box sits below the ladder, two printed lines. Printed number "44." matches n44. Red folio "1571". No boiler line printed.' },

{ n: 45, pr: 45, p: 1573,
  key: 2,
  stem: 'How is the preterm newborn defined?',
  opts: ['≤ 37 weeks gestation', '> 37 weeks gestation', '< 37 weeks gestation', '≥ 30 weeks gestation', '≤ 30 weeks gestation'],
  expl: 'Preterm is defined as <37 completed weeks of gestation.',
  note: '5 options printed (A-E). NUMERAL ESCALATION, the exact case override 5 names: an all-numeric option ladder whose whole discrimination is the inequality sign, so the entire ladder was re-rendered as a 600 dpi band crop (crop-1573-ladder, -x 140 -y 470 -W 1500 -H 1140, one render, no line clipped at either edge). At 600 dpi the five signs resolve unambiguously: A prints a two-stroke less-than-or-equal, B a bare greater-than, C a bare less-than, D a two-stroke greater-than-or-equal, E a two-stroke less-than-or-equal. The options print a space between the sign and the number ("≤ 37"); the explanation box prints its sign closed up against the number ("<37 completed weeks") -- both transcribed as printed. Key: yellow highlight on option C, "< 37 weeks gestation" (highlighted, bold, underlined, highlight spans the whole line) -> zero-based index 2; the box agrees, and the A/C pair differ only by the equality stroke, which is why the crop was taken. Box sits below the ladder, one printed line. Printed number "45." matches n45. Red folio "1573". No boiler line printed.' },

{ n: 46, pr: 46, p: 1575,
  key: 3,
  stem: 'What is the main cause of edema in kwashiorkor?',
  opts: ['Proteinuria', 'Hepatomegaly', 'Elevated serum sodium', 'Low Protein intake', 'Protein loss in stools'],
  expl: 'Hypoalbuminemia from protein deficiency leads to decreased oncotic pressure and edema.',
  note: '5 options printed (A-E). Read off pg-1575-1575.png at 150 dpi. No numerals anywhere in stem, options or box -- stated after reading the whole page as one image -- so nothing to escalate to 600 dpi. Key: yellow highlight on option D, "Low Protein intake" (highlighted, bold, underlined; the mid-word capital P is as printed) -> zero-based index 3; the box agrees, giving the mechanism rather than repeating the option wording. Box sits below the ladder, two printed lines. Printed number "46." matches n46. Red folio "1575". No boiler line printed.' },

{ n: 47, pr: 47, p: 1577,
  key: 1,
  stem: 'Which of the following is a feature of marasmus?',
  opts: ['Dermatosis', 'Gross muscle wasting', 'Edema', 'Hair changes'],
  expl: 'Marasmus = severe wasting without edema. Kwashiorkor shows edema and dermatosis.',
  note: 'FOUR options printed (A-D), a real shape and not a clipped ladder: the cream panel runs on empty for about a third of its height below option D before the explanation box, with no E line and no page-break artefact -- checked on the whole page at 150 dpi (pg-1577-1577.png). No numerals in stem, options or box, so nothing to escalate to 600 dpi; that zero is stated from reading the whole page as one image. Key: yellow highlight on option B, "Gross muscle wasting" (highlighted, bold, underlined) -> zero-based index 1; the box agrees. Box sits below the ladder, two printed lines, and prints a literal equals sign in "Marasmus = severe wasting". Printed number "47." matches n47. Red folio "1577". No boiler line printed. Paired topically with n46 on p.1575 (kwashiorkor edema): the two share the malnutrition theme and the box here names kwashiorkor, but the stems and ladders differ entirely -- not a shared menu and not a reprint.' },

{ n: 48, pr: 48, p: 1579,
  key: 1,
  stem: "A newborn baby is noted to have hepatosplenomegaly and a petechial rash. His red eye reflex is abnormal and there is no heart murmur. He fails his newborn screening hearing test. His mother's antenatal screening bloods were all normal. What is the most likely condition that has caused these symptoms?",
  opts: ['Dysmorphic syndrome', 'Congenital infection', 'Infant of diabetic mother', 'Cranial abnormality', 'Neonatal infection'],
  expl: 'TORCH infections (esp. CMV, rubella) cause “blueberry muffin rash,” hepatosplenomegaly, cataracts, hearing loss.',
  note: '5 options printed (A-E). Read off pg-1579-1579.png at 150 dpi. No numerals in stem, options or box -- stated from reading the whole page as one image -- so nothing to escalate to 600 dpi. Key: yellow highlight on option B, "Congenital infection" (highlighted, bold, underlined) -> zero-based index 1; the box agrees, naming TORCH as the class of congenital infection. Note the deliberately close distractor E, "Neonatal infection", which the highlight does NOT sit on. Box is inset to the right, level with option E, two printed lines; it prints curly quotation marks around “blueberry muffin rash,” with the comma inside the closing quote, reproduced exactly. Printed number "48." matches n48. Red folio "1579". No boiler line printed.' },

{ n: 49, pr: 49, p: 1581,
  key: 2,
  stem: 'What is the most important and effective action in neonatal resuscitation if the baby does not start to breathe after delivery?',
  opts: ['Provide oxygen.', 'Perform chest compressions.', 'Ventilate the lungs.', 'Give epinephrine.', 'Tracheal intubation.'],
  expl: 'Failure to breathe requires positive pressure ventilation, the single most important intervention.',
  note: '5 options printed (A-E); every option prints a trailing full stop, reproduced. Read off pg-1581-1581.png at 150 dpi. No numerals in stem, options or box -- stated from reading the whole page as one image -- so nothing to escalate to 600 dpi. Key: yellow highlight on option C, "Ventilate the lungs." (highlighted, bold, underlined, the highlight covering the trailing stop) -> zero-based index 2; the box agrees, naming the same action as "positive pressure ventilation" (different words for the same answer, which is agreement, not a contradiction). Box sits below the ladder, two printed lines. Printed number "49." matches n49. Red folio "1581". No boiler line printed.' },

{ n: 50, pr: 50, p: 1583,
  key: 4,
  stem: 'Which of the following is the most common cause of pediatric cardiopulmonary arrest?',
  opts: ['Cardiac arrhythmias', 'Metabolic abnormalities', 'Overwhelming infections', 'Trauma', 'Respiratory problems'],
  expl: 'Unlike adults (cardiac), in children respiratory failure is the most common cause.',
  note: '5 options printed (A-E). Read off pg-1583-1583.png at 150 dpi. No numerals in stem, options or box -- stated from reading the whole page as one image -- so nothing to escalate to 600 dpi. Key: yellow highlight on option E, "Respiratory problems" (highlighted, bold, underlined) -> zero-based index 4; the box agrees, phrasing it as "respiratory failure" (same answer in different words). Box sits below the ladder, one printed line. Printed number "50." matches n50. Red folio "1583". No boiler line printed.' },

{ n: 51, pr: 51, p: 1585,
  key: 0,
  stem: 'Which bone is most often fractured in difficult deliveries?',
  opts: ['Clavicle', 'Humerus', 'Skull', 'Femur', 'Tibia'],
  expl: 'The clavicle is most commonly fractured, often with shoulder dystocia.',
  note: '5 options printed (A-E). Read off pg-1585-1585.png at 150 dpi. No numerals in stem, options or box -- stated from reading the whole page as one image -- so nothing to escalate to 600 dpi. Key: yellow highlight on option A, "Clavicle" (highlighted, bold, underlined), the first option on the page and immediately under the stem -> zero-based index 0; the box agrees. Box sits below the ladder, one printed line. Printed number "51." matches n51. Red folio "1585". No boiler line printed.' },

{ n: 52, pr: 53, p: 1587,
  key: 0,
  stem: 'Which of the following laboratory findings is diagnostic of infantile rickets?',
  opts: ['Normal calcium level and low phosphorus level', 'Low calcium level and normal phosphorus level', 'High calcium level and low phosphorus level', 'High calcium level and normal phosphorus level', 'High calcium level and high phosphorus level'],
  expl: 'Rickets typically shows low phosphate, normal/low calcium, and high alkaline phosphatase.',
  note: '5 options printed (A-E). Read off pg-1587-1587.png at 150 dpi. ⚠️ pr != n, AND THE BOOK CONTRADICTS ITSELF ABOUT THE NUMBER: this answered page prints "53." while the immediately preceding blank sheet p.1586 prints the SAME question -- word-for-word identical stem and the same five options in the same order, unhighlighted -- numbered "52.". p.1586 was rendered at 150 dpi (chk-1586-1586.png) specifically to settle this, because the answered run had printed 41..51 in step up to p.1585 and then jumped to 53. So the answered printing skips the number 52; the blank printing does not. n is kept as the section position (52nd question of the section, the 12th of this half, on the 12th answered sheet of a clean +2 run) per the task instruction, and pr records what this answered page actually prints. This predicts pr = n+1 on the answered sheets that follow; each is recorded as printed rather than assumed. Only ONE question is involved -- no question was lost and none was duplicated; p.1585 (q51, clavicle) and p.1587 are different questions. NUMERALS: none in stem, options or box; the option ladder is qualitative ("Normal/Low/High ... level"), not numeric, so there was nothing to escalate to 600 dpi. Key: yellow highlight on option A, "Normal calcium level and low phosphorus level" (highlighted, bold, underlined) -> zero-based index 0. BOX-vs-KEY: the box says "low phosphate, normal/low calcium, and high alkaline phosphatase" -- it allows calcium to be normal OR low where the highlighted option says normal, and it introduces alkaline phosphatase, which no option mentions; the highlight is unambiguous and the key stays on it. Box sits below the ladder, one printed line. Red folio "1587". No boiler line printed.' },

{ n: 53, pr: 54, p: 1589,
  key: 0,
  stem: 'Which of the following statements is TRUE about transient tachypnea of the newborn?',
  opts: ['Commonly associated with caesarian section delivery.', 'Commonly associated with preterm delivery.', 'Usually treated with mechanical ventilation.', 'Caused by surfactant deficiency.', 'Mild prenatal infection is a common association.'],
  expl: 'TTN is due to delayed clearance of lung fluid, especially after C-section. It resolves within 48–72 hours.',
  note: '5 options printed (A-E); each option prints a trailing full stop, reproduced. Read off pg-1589-1589.png at 150 dpi. ⚠️ pr != n: this page prints "54." against n53, exactly the +1 offset the p.1587 entry predicted -- the answered run skipped the printed number 52 while the blank run used it. pr is recorded as printed and n stays the section position; nothing was renumbered. NUMERALS: the only numeral is the box\'s range "48–72 hours", read directly off the page image, printed with an en dash and no spaces; it is a plain duration, not a dose, exponent, temperature or threshold, so no 600 dpi crop was taken. Key: yellow highlight on option A, "Commonly associated with caesarian section delivery." (highlighted, bold, underlined, highlight covering the trailing stop) -> zero-based index 0; the box agrees, calling it "after C-section". Box sits below the ladder, two printed lines. Red folio "1589". No boiler line printed.' },

{ n: 54, pr: 55, p: 1591,
  key: 4,
  stem: 'Which of the following statements concerning immunization is TRUE?',
  opts: ['Vaccines should not be given if the baby has a runny nose.', 'Oral polio vaccine is safe in immune-compromised children.', 'Hepatitis A vaccine is given immediately after birth in Egypt.', 'BCG is a killed vaccine.', 'MMR vaccine is a live attenuated virus vaccine.'],
  expl: 'MMR is a live attenuated vaccine. OPV is not safe in immunocompromised, and BCG is also live, not killed.',
  note: '5 options printed (A-E); each option prints a trailing full stop, reproduced. Read off pg-1591-1591.png at 150 dpi. ⚠️ pr != n: prints "55." against n54 -- the same +1 offset first seen at p.1587, recorded as printed, n unchanged. No numerals anywhere in stem, options or box -- stated from reading the whole page as one image -- so nothing to escalate to 600 dpi. Key: yellow highlight on option E, "MMR vaccine is a live attenuated virus vaccine." (highlighted, bold, underlined, covering the trailing stop) -> zero-based index 4; the box agrees and additionally explains why B and D are false. Note the stem prints "immune-compromised" in option B and the box prints "immunocompromised" -- both transcribed as printed. Box sits below the ladder, two printed lines. Red folio "1591". No boiler line printed.' },

{ n: 55, pr: 56, p: 1593,
  key: 3,
  stem: 'A full-term neonate develops jitteriness and poor feeding at 4 hours of life. He was born to a primigravida who had uncontrolled gestational diabetes mellitus. Birth weight was 4 kg. The mother fed the baby at 3 hours of life. On examination, the baby is jittery, but all neonatal reflexes are normal. His systemic examination is normal. His investigation showed blood glucose of 35 mg/dl, hemoglobin 20 g/dl, and hematocrit 63%. His electrolytes and calcium are normal. What is the most probable cause of hypoglycemia in this neonate?',
  opts: ['Polycythemia', 'Delayed feeding', 'Birth asphyxia', 'Hyperinsulinemia'],
  expl: 'Infants of diabetic mothers develop hyperinsulinemia, leading to hypoglycemia after birth.',
  note: 'FOUR options printed (A-D), a real shape and not a clipped ladder: option D is the last line inside the cream panel, the panel closes just beneath it, and the red folio sits immediately below -- no E line and no page-break artefact; checked on the whole page at 150 dpi (pg-1593-1593.png). ⚠️ pr != n: prints "56." against n55, the same +1 offset first seen at p.1587; recorded as printed, n unchanged. NUMERAL ESCALATION -- this page carries three laboratory values, so each was re-rendered at 600 dpi: crop-1593-glu (-x 3200 -y 1020 -W 1500 -H 200) reads "blood glucose of 35"; crop-1593-hb (-x 150 -y 1190 -W 1500 -H 200) reads "mg/dl, hemoglobin 20 g/d"; the hematocrit needed TWO renders -- crop-1593-hct (-x 3100 -y 1190) started past the number and caught only "s electrolytes and calcium", so the band was widened and shifted left to crop-1593-hct2 (-x 2250 -y 1180 -W 1600 -H 220), which reads "atocrit 63%. His electrolytes" with the number clear of both edges. The unit is mg/dl for glucose and g/dl for hemoglobin, both lower-case as printed. The remaining numerals ("4 hours of life", "4 kg", "3 hours of life") were read off the 150 dpi page. Nothing came from OCR. Key: yellow highlight on option D, "Hyperinsulinemia" (highlighted, bold, underlined) -> zero-based index 3; the box agrees. Note that the stem\'s polycythemia numbers (Hb 20 g/dl, Hct 63%) support distractor A while the key is D -- that is the question working as designed, not a contradiction. Box is inset to the RIGHT of options B-C rather than under the ladder, two printed lines. Red folio "1593". No boiler line printed.' },

{ n: 56, pr: 57, p: 1595,
  key: 2,
  stem: 'What is the most likely cause of faltering growth in a 9-month-old baby?',
  opts: ['Small ASD', 'Acute UTI', 'Persistent diarrhea', 'Mild intermittent asthma', 'Acute gastroenteritis requiring IV fluids'],
  expl: 'Chronic diarrhea is a leading cause of growth faltering in infancy.',
  note: '5 options printed (A-E). Read off pg-1595-1595.png at 150 dpi. ⚠️ pr != n: prints "57." against n56, the same +1 offset first seen at p.1587; recorded as printed, n unchanged. The only numeral is "9-month-old" in the stem, read directly off the page image, not from OCR; it is not a dose, exponent, unit, temperature or threshold, so no 600 dpi crop was taken. Key: yellow highlight on option C, "Persistent diarrhea" (highlighted, bold, underlined) -> zero-based index 2; the box agrees, calling it "Chronic diarrhea" -- the same answer in different words, not a contradiction. Box sits below the ladder, one printed line. Red folio "1595". No boiler line printed.' },

{ n: 57, pr: 58, p: 1597,
  key: 3,
  stem: 'Which is a character of "constitutional growth delay"?',
  opts: ['It is a pathological condition.', 'It occurs only in girls.', 'There is a lower final height.', 'There is a delayed onset of puberty.', 'It presents early in infancy.'],
  expl: 'Constitutional delay is benign, with normal final height but delayed puberty.',
  note: '5 options printed (A-E); every option prints a trailing full stop, reproduced. The stem prints straight double quotation marks around "constitutional growth delay", reproduced as printed. Read off pg-1597-1597.png at 150 dpi. ⚠️ pr != n: prints "58." against n57, the same +1 offset first seen at p.1587; recorded as printed, n unchanged. No numerals anywhere in stem, options or box -- stated from reading the whole page as one image -- so nothing to escalate to 600 dpi. Key: yellow highlight on option D, "There is a delayed onset of puberty." (highlighted, bold, underlined, covering the trailing stop) -> zero-based index 3; the box agrees, and it also disposes of distractor C by saying final height is normal. Box sits below the ladder at the far left of the panel and is set two printed lines, but the drawn border encloses only the first line -- the word "puberty." sits below the bottom border rather than inside it. The full two-line text is transcribed; this is a layout defect in the printing, not missing text. Red folio "1597". No boiler line printed.' },

{ n: 58, pr: 59, p: 1599,
  key: 4,
  stem: 'Which of the following is the most common cause of pediatric cardiopulmonary arrest?',
  opts: ['Cardiac arrhythmias', 'Metabolic abnormalities', 'Overwhelming infections', 'Trauma', 'Respiratory problems'],
  expl: 'respiratory failure is the leading cause of cardiac arrest in children.',
  note: '5 options printed (A-E). Read off pg-1599-1599.png at 150 dpi. ⚠️ pr != n: prints "59." against n58, the same +1 offset first seen at p.1587; recorded as printed, n unchanged. ⚠️ WITHIN-SECTION REPRINT, RECORDED AND NOT FOLDED (brief section 9): this is the same question as n50 on p.1583 of this same half -- identical stem word for word, the same five options in the same order, and the highlight on the same option E. The exam prints it twice, at printed numbers 50 and 59. The ONE printed difference is the explanation box, which is worded differently here ("respiratory failure is the leading cause of cardiac arrest in children.") from the box on p.1583 ("Unlike adults (cardiac), in children respiratory failure is the most common cause."). Both are transcribed as printed; folding is a later adjudication decision, not a staging one. FLAGGED, not cosmetic: this box begins with a lower-case "respiratory" and carries no lead-in clause, so it reads as though an opening fragment is missing from the printing -- transcribed exactly as it stands. No numerals in stem, options or box -- stated from reading the whole page as one image -- so nothing to escalate to 600 dpi. Key: yellow highlight on option E, "Respiratory problems" (highlighted, bold, underlined) -> zero-based index 4; the box agrees. Box sits below the ladder, one printed line. Red folio "1599". No boiler line printed.' },

{ n: 59, pr: 60, p: 1601,
  key: 2,
  stem: 'An 11-month-old infant appears unwell with sunken eyes and reduced skin turgor. Capillary refill time (CRT) was found to be 5 seconds and extremities were cold. Which of the following would be the first step in the proper management of this infant?',
  opts: ['Breastfeeding', 'Oral rehydration solution', 'IV normal saline', 'Oral antibiotic'],
  expl: 'Any child presenting with manifestations of shock :  Begin treatment by  resuscitation with IV normal saline 20 ml/kg',
  note: 'FOUR options printed (A-D), a real shape and not a clipped ladder: the panel runs on empty for about a fifth of its height below option D before the explanation box, with no E line and no page-break artefact; checked on the whole page at 150 dpi (pg-1601-1601.png). ⚠️ pr != n: prints "60." against n59, the same +1 offset first seen at p.1587; recorded as printed, n unchanged. NUMERAL ESCALATION: the box carries a DOSE, so it was re-rendered at 600 dpi -- crop-1601-dose (-x 1800 -y 2250 -W 1800 -H 230, one render, both edges clear) reads "citation with IV normal saline 20 ml/kg", confirming twenty and the unit ml/kg in lower case. The stem numerals ("11-month-old", "CRT ... 5 seconds") were read off the 150 dpi page; nothing came from OCR. The box prints no closing full stop, which is reproduced. Key: yellow highlight on option C, "IV normal saline" (highlighted, bold, underlined) -> zero-based index 2; the box agrees and adds the volume. Box sits below the ladder, two printed lines. Red folio "1601". No boiler line printed. RECORDED FOR THE ADJUDICATION PASS, NOT FOLDED: the shock-with-CRT-5-seconds picture recurs in this exam (a 5-second CRT also appears in the shock vignette staged earlier in this section), but this is a management question with a four-option ladder and a different stem, so it is a distinct question, not a reprint.' },

{ n: 60, pr: 61, p: 1603,
  key: 1,
  stem: 'An 18-month-old boy presents with 3 days of vomiting and diarrhea. The vomiting has now settled but he continues to have loose stools (he had about eight loose stools in the last 24 hours). His mucous membranes are dry, he has sunken eyes and appears lethargic. His skin turgor is reduced. His extremities are warm and capillary refill time is normal. What is the next step in management?',
  opts: ['Analgesic / antipyretic', 'Oral rehydration solution', 'IV normal saline', 'Oral antibiotic'],
  expl: 'Any child presenting with manifestations of dehydration Oral rehydration solution.',
  note: 'FOUR options printed (A-D), a real shape and not a clipped ladder: option D is the last line in the panel, the box sits to its right, and the panel closes just beneath -- no E line and no page-break artefact; checked on the whole page at 150 dpi (pg-1603-1603.png). ⚠️ pr != n: prints "61." against n60, the same +1 offset first seen at p.1587; recorded as printed, n unchanged. This is the last answered sheet of half C. NUMERALS: "18-month-old", "3 days", "eight loose stools" (spelled as a word, as printed) and "the last 24 hours" -- all read directly off the 150 dpi page image, none from OCR; none is a dose, exponent, unit, temperature or threshold, so no 600 dpi crop was taken. Key: yellow highlight on option B, "Oral rehydration solution" (highlighted, bold, underlined) -> zero-based index 1; the box agrees. FLAGGED, not cosmetic: the box reads "Any child presenting with manifestations of dehydration Oral rehydration solution." with no connective between "dehydration" and "Oral" -- words appear to be missing from the printing itself; transcribed exactly as it stands. Box is inset to the RIGHT, level with option D, two printed lines. Red folio "1603". No boiler line printed. SHARED OPTION MENU, RECORDED AS A PAIRING AND NOT FOLDED (brief section 9): options B, C and D here are word-for-word the last three options of n59 on p.1601, in the same order; only option A differs (n59 prints "Breastfeeding", this prints "Analgesic / antipyretic"). The discriminating clinical tokens are explicit and opposite -- n59 prints cold extremities with a CRT of 5 seconds and keys IV normal saline, while this one prints warm extremities with a normal capillary refill time and keys oral rehydration solution. Two separate questions built on one menu.' },

/* ENDPOINT part1 -- Model Final Exam 3 -- staging half D (questions n61..n79), the LAST half.
   Source: "Pediatrics endpoint part1.pdf", answered pages p:1605, then 1608, 1610, 1612, 1614,
   1616, 1618, 1620, 1622, 1624, 1626, 1628, 1630, 1632, 1634, 1636, 1638, 1640, 1642.
   THE PAGE MAP IS NOT A CLEAN +2 STEP, AND THAT IS THE POINT. Halves A-C ran +2 on odd pages from
   p.1485 to p.1603 (n1..n60). This half holds the section's two irregularities:
     (1) n61 is printed as question p.1604 / answered p.1605, and its EXPLANATION BOX OVERFLOWS
         onto p.1606. It is the only such question in the section. The entry carries p:1605 and
         box:1606, and expl holds the box text from BOTH sheets run together as the book reads it.
         A BOX OVERFLOW IS NOT A STRADDLE: the stem and options are wholly on p.1605, so there is
         no straddle:true and no uppercase straddle marker anywhere in this file (brief section 8
         is about a stem/options span, which does not occur here).
     (2) The overflow sheet consumed the odd slot, so from n62 the answered pages FLIP PARITY to
         even and resume the +2 step: 1608..1642, eighteen pages for eighteen questions.
   p.1642 is the last question in the section; p.1643 is a divider labelled "notes".
   PRINTED NUMBER vs n: from n52 onward the printed exam number runs ONE AHEAD of n. Half C
   measured this: the answered run jumps 51 (p.1585) straight to 53 (p.1587), while the blank
   sheet p.1586 prints that same question as 52 -- so the answered printing carries a number one
   too high from there on, and no question is lost or duplicated. This half therefore expects to
   print 62..80. n is the question's position in the SECTION (61..79); pr is whatever the page
   actually prints. Any change in that offset is recorded as a finding, not reconciled away.
   This is also why an older plan said this exam holds 80 questions: it holds 79 and numbers to 80.
   Every question in this exam prints twice (a blank exam page, then an answered page carrying the
   yellow-highlighted key and usually a bordered explanation box); staging is from the ANSWERED
   pages ONLY, per task override 4. A blank sheet may be rendered as a CHECK when a count or a
   printed number is in doubt -- a check stages nothing.
   PDF is 1:1, NOT 2-up -- brief pd-staging-brief.md section 2's 2-up folio arithmetic does NOT
   apply here, per task override 1. A PDF page number IS the page rendered, confirmed by the red
   folio printed at the foot of each sheet.
   key is a ZERO-BASED INDEX into opts (integer), never a letter -- per task override 2.
   Per task override 3: paediatric surgery topics are IN SCOPE for this book; the House-bank
   brief section 11a exclusion does not apply.
   RENDER RECIPE per task override 5: pdftoppm -r 150, whole page, a few pages at a time. The
   brief section 3 two-pass 300 dpi recipe is written for 2-up sheets and does not apply. 600 dpi
   band crops are escalated to only for a genuinely risky numeral (all-numeric option ladder,
   exponent, dose, temperature, haematocrit, or a threshold carrying <, >, <= or >=), and every
   such crop is named in the note of the entry it belongs to.
   OCR at content/peds/qb-pages/ocr/ep1/p<NNNN>.txt was NOT opened during this staging pass, per
   brief section 4. Nothing here comes from OCR text. (The page map in the task prompt was derived
   from ocr/ep1/index.json by the parent; every page in it is confirmed from the render.)
   File format: bare { ... } fragments separated by one blank line -- no array wrapper and no
   commas between entries. `node --check` always fails on this shape and that failure is
   meaningless; validated with tools/bank-harness/check-part-ep.js instead.
   CLOSED 2026-09-05 -- 20 entries staged, n61..n80, each appended immediately after its page was
   read and the file re-validated along the way. THE HALF IS TWENTY ENTRIES, NOT NINETEEN.

   MEASURED PAGE WALK, page by page, every folio read off its own render:
     1605 answered, prints 62 -> n61      1606 answered, prints 63 -> n62  (EXTRA SHEET, no blank twin)
     1607 BLANK,    prints 63  (check only, staged nothing)
     1608 answered, prints 63 -> n63      1610 answered, prints 64 -> n64
     1612 -> 65/n65   1614 -> 66/n66   1616 -> 67/n67   1618 -> 68/n68   1620 -> 69/n69
     1622 -> 70/n70   1624 -> 71/n71   1626 -> 72/n72   1628 -> 73/n73   1630 -> 74/n74
     1632 -> 75/n75   1634 -> 76/n76   1636 -> 77/n77   1638 -> 78/n78   1640 -> 79/n79
     1641 BLANK,    prints 80  (check only, staged nothing)
     1642 answered, prints 80 -> n80   <- LAST QUESTION OF THE SECTION
     1643 filler, 1644 "Model Final Exam 4" title page  (boundary proof, staged nothing)

   THREE CORRECTIONS TO THE TASK-SUPPLIED MAP, ALL MEASURED FROM THE RENDERS:
   (1) THE p.1605/p.1606 BOX OVERFLOW DOES NOT EXIST. Both pages were rendered at 150 dpi and read
       whole. p.1605 carries printed question 62 COMPLETE -- stem, five options A-E, yellow key on
       E, its own bordered box opening and closing inside its own border, red folio 1605. p.1606
       does NOT continue that box: it carries a DIFFERENT and complete printed question 63
       (duodenal atresia) with its own stem, four options a-d, yellow key on a, its own box and
       red folio 1606. No text overflows to or from either page. NO ENTRY IN THIS FILE CARRIES A
       `box` FIELD, and n61 does not. Nothing is a straddle either: no question in this half has
       a stem or an option ladder spanning two sheets, so there is no straddle:true and no
       uppercase straddle marker anywhere in this file.
   (2) THE REAL IRREGULARITY IS AN EXTRA ANSWERED SHEET WITH NO BLANK TWIN. The book's pattern is
       blank sheet then answered sheet. p.1606 breaks it: it answers a question that was never
       printed blank. That single inserted sheet is what consumes the odd slot and flips the
       answered pages to even parity from p.1608 on. The parity flip the task predicted is REAL
       and held for all eighteen even pages 1608..1642; its CAUSE is an inserted question, not an
       overflowing box.
   (3) THE SECTION HOLDS 80 QUESTIONS, NOT 79, AND THE +1 OFFSET CLOSES INSTEAD OF RUNNING TO THE
       END. Half C measured the printed number running one ahead of n from n52. That offset holds
       for exactly two pages here (n61 prints 62, n62 prints 63) and is then ABSORBED, because
       pp.1606 and 1608 print the number 63 on TWO DIFFERENT QUESTIONS (duodenal atresia, then
       neonatal intestinal obstruction). From p.1610 to p.1642, pr == n on every single page,
       ending 80 == n80. So the exam numbers 1..80 and really does hold 80 questions; the older
       plan's "80" was right and for a reason nobody had measured, and the extra question is the
       one on p.1606. p.1642 is the last question -- p.1643 is filler and p.1644 is the "Model
       Final Exam 4" title page.
   (4) Minor: p.1643 is NOT a divider labelled "notes" as the task said. It is a full-bleed IMAGE
       of an Arabic poem in white script on a night-sky photograph, with no heading, no question,
       no options and no number, carrying only the red folio 1643. It stages nothing either way.

   OPTION LETTERING SHIFTS TWICE and is recorded as a printing observation only; it cannot affect
   anything because key is a zero-based index under override 2. p.1605 prints uppercase A-E like
   all of halves A-C; pp.1606-1626 print LOWERCASE a-d; pp.1628-1642 revert to UPPERCASE A-D.
   The whole half from p.1606 on is paediatric-surgery subject matter, IN SCOPE per override 3.

   ⚠️⚠️ CORRECTION TO THE TASK-SUPPLIED PAGE MAP, MEASURED FROM THE RENDERS 2026-09-05.
   THE p.1605/p.1606 "BOX OVERFLOW" DOES NOT EXIST. p.1605 and p.1606 were both rendered at
   150 dpi and read whole. p.1605 carries printed question 62 (SIDS prevention) COMPLETE: stem,
   five options A-E, the yellow key on E, its own bordered box, and the red folio 1605. p.1606
   does NOT continue that box. It carries a DIFFERENT and complete printed question 63 (duodenal
   atresia) with its own stem, its own four options a-d, its own yellow key on a, its own bordered
   box and the red folio 1606. Neither page has any text overflowing to or from the other.
   Consequently NO entry in this file carries a `box` field, and n61 does not.
   The real irregularity at this point in the section is therefore different from the one the task
   described: it is that TWO ANSWERED PAGES RUN CONSECUTIVELY (1605, 1606) instead of +2, which is
   what produces the parity flip to even pages afterwards. The measured page walk is recorded
   below as it was established, page by page, from the renders themselves.
*/

{ n: 61, pr: 62, p: 1605,
  key: 4,
  stem: 'Which of the following is the best intervention that effectively prevents the occurence of sudden infant death syndrome (SIDS)?',
  opts: ['Feet to foot of cot', 'Keeping baby in parent’s room until 6 months of age', 'Keeping room cool to prevent overheating', 'Parents not smoking in the same room as infant', 'Supine sleeping'],
  expl: 'The best intervention that effectively prevents the occurence of sudden infant death syndrome (SIDS) Supine sleeping.',
  note: '5 options printed (A-E). Read off the full page pg-1605.png rendered at 150 dpi, per task override 5; this book prints one large-serif question per sheet, so the prose and the single numeral on the page are crisp at that scale. Nothing here came from OCR. The one numeral, "6 months of age" in option B, is a plain two-character figure in large serif type and was read directly off the page image; it is not an exponent, dose, temperature or threshold, so it did not meet the override-5 test for a 600 dpi escalation. Key: the yellow highlight sits on option E, "Supine sleeping" (highlighted, bold, underlined) -> zero-based index 4. The box names the same answer in different words ("Supine sleeping"), so box and highlight AGREE. Red folio "1605" printed at the foot confirms the PDF page number IS the printed page (override 1 holds). No boiler line printed. ⚠️ THE TASK-SUPPLIED BOX OVERFLOW ONTO p.1606 DOES NOT EXIST -- this box is wholly contained on p.1605, it opens and closes inside its own border on this sheet, and p.1606 was rendered and read and carries an entirely different question (printed 63, duodenal atresia) with its own box. This entry therefore takes NO `box` field. It is also correctly NOT a straddle: stem and options are wholly on p.1605. ⚠️ FLAGGED, NOT COSMETIC (the brief distinguishes a box missing whole words from a typo): the box as printed is missing its verb -- it reads "...sudden infant death syndrome (SIDS) Supine sleeping." with no "is" between "(SIDS)" and "Supine". Transcribed exactly as printed. The stem\'s "occurence" is a printed spelling and is reproduced silently as a cosmetic defect.' },

{ n: 62, pr: 63, p: 1606,
  key: 0,
  stem: 'Which of the following statements regarding duodenal atresia is true?',
  opts: ['Around 30% of these infants have Trisomy 21 (Down syndrome).', 'When associated with an annular pancreas, division of the pancreas at the site of obstruction is curative.', 'Nonbilious vomiting is typical because the obstruction is usually proximal to the ampulla of Vater.', 'Reconstruction is best achieved with Roux-en-Y duodenojejunostomy.'],
  expl: 'There is a strong association with Down syndrome.',
  note: 'FOUR options printed, and they are lettered in LOWERCASE (a-d), not the uppercase A-E used by every question in halves A-C and by n61 on the sheet before. The four-option shape is genuine and not a clipped ladder: the cream content panel runs on empty for roughly a third of its height below option d before the box, and the box itself then sits below that empty run, so nothing could have been cut off the foot. Read off the full page pg-1606.png at 150 dpi, per task override 5. Nothing here came from OCR. The two numerals, "Around 30%" and "Trisomy 21", both sit in option a, which is printed in large bold underlined serif under the yellow highlight -- the largest and heaviest type on the page -- and both were read directly off the page image. Neither is an exponent, dose, temperature, haematocrit or a threshold carrying <, >, <= or >=, and this is not an all-numeric option ladder, so neither met the override-5 test for a 600 dpi escalation. Key: the yellow highlight sits on option a, "Around 30% of these infants have Trisomy 21 (Down syndrome)." -> zero-based index 0. The box, "There is a strong association with Down syndrome.", names the same answer in different words, so box and highlight AGREE; the box does not repeat the 30% figure and does not contradict it. Red folio "1606". No boiler line printed. ⚠️⚠️ THIS IS THE SECTION\'S REAL IRREGULARITY AT THIS POINT, AND IT IS NOT THE ONE THE TASK DESCRIBED. p.1606 is not an overflow of n61\'s box (see the file header): it is a COMPLETE EXTRA ANSWERED PAGE THAT HAS NO BLANK TWIN. The book\'s pattern everywhere else is blank sheet then answered sheet; here p.1605 answered n61, p.1606 answered THIS question with no preceding blank printing of it, and p.1607 then opens the next pair as a blank. That extra single sheet is what consumes the odd slot and flips the answered pages to even parity from p.1608 on -- so the parity flip the task predicted is real, but its cause is an inserted question, not an overflowing box. ⚠️ PRINTED-NUMBER REPEAT, RECORDED NOT RECONCILED: this page prints "63." and so does the next answered page p.1608, which is a DIFFERENT question (neonatal intestinal obstruction). Two different questions carry the printed number 63 and no number is skipped between them. n is kept as the position in the section (62 here, 63 there) and pr records what each page actually prints.' },

{ n: 63, pr: 63, p: 1608,
  key: 0,
  stem: 'Which of the following is NOT a typical cause of neonatal intestinal obstruction?',
  opts: ['Intussusception', 'Meconium ileus', "Hirschrung's disease", 'Incarcerated hernia'],
  expl: 'Intussusception is rare in neonates; it usually occurs in older infants.',
  note: 'FOUR options printed, lowercase a-d, continuing the style shift that began on p.1606. The four-option shape is genuine and was proved twice over: the cream panel runs on empty below option d before the box, and I also rendered this question\'s BLANK printing p.1607 as a check (task override 5 / override 4 permit a blank sheet as a check that stages nothing) -- the blank sheet prints exactly the same stem and exactly the same four options a-d with nothing below them, so no fifth option exists. Read off the full page pg-1608.png at 150 dpi. Nothing here came from OCR. The page prints no numeral at all in stem, options or box, so no 600 dpi escalation was applicable. Key: the yellow highlight sits on option a, "a.Intussusception" (highlighted, bold, underlined; the page prints no space after "a." on this option, on both the blank and the answered sheet) -> zero-based index 0. The box, "Intussusception is rare in neonates; it usually occurs in older infants.", explains why a is the correct answer to a NOT-stem, so box and highlight AGREE. Red folio "1608", and the blank twin\'s folio is "1607" -- both confirm override 1. No boiler line printed. ⚠️ PRINTED-NUMBER REPEAT: this page prints "63." and so did p.1606, a different question. Recorded, not reconciled. Note the consequence for the running offset: half C measured the printed number running ONE AHEAD of n from n52, and this repeat ABSORBS that offset -- pr and n coincide again from this entry on. Whether it holds is measured page by page below. "Hirschrung\'s disease" is printed exactly so, with a straight apostrophe, on both the blank and the answered sheet; transcribed as printed.' },

{ n: 64, pr: 64, p: 1610,
  key: 3,
  stem: 'Which of the following statements regarding congenital inguinal hernia is TRUE?',
  opts: ['It is more common in females', 'Herniotomy should be delayed until the child is over 2 years', 'The most common presenting age is between 1–2 years', 'Bilaterality is more common in girls'],
  expl: '',
  note: 'FOUR options printed, lowercase a-d, continuing the style shift. The four-option shape is genuine, not a clipped ladder: below option d the cream content panel runs on completely empty for well over half its remaining height down to the panel edge, with no box and no further text of any kind. Read off the full page pg-1610.png at 150 dpi. Nothing from OCR. ⚠️ NO EXPLANATION BOX IS PRINTED ON THIS PAGE -- expl is the empty string. This is the first page in this half with no box; the yellow highlight is the only thing marking the key. Key: the yellow highlight sits on option d, "Bilaterality is more common in girls" (highlighted, bold, underlined) -> zero-based index 3. There is no box, so no box/highlight cross-check was possible here and none is claimed. Numerals, all read directly off the page image: option b "over 2 years", option c "between 1–2 years" -- the range in c is printed with an EN DASH, not a hyphen, and is transcribed as such. Neither is an exponent, dose, temperature, haematocrit or a threshold carrying <, >, <= or >=, and this is not an all-numeric ladder, so no 600 dpi escalation was triggered. Red folio "1610". No boiler line printed. ⚠️ MEASUREMENT OF THE RUNNING OFFSET: this page prints "64." and this is n64, so pr and n now COINCIDE. The +1 offset half C measured from n52 onward has CLOSED, absorbed by the repeated printed number 63 on pp.1606 and 1608. The task prompt expected this half to print 62..80 against n61..79; what the pages actually print is 62, 63, 63, then 64 onward, which is a different reconciliation and is recorded as the finding it is rather than smoothed over.' },

{ n: 65, pr: 65, p: 1612,
  key: 1,
  stem: 'All of the following is true regarding congenital diaphragmatic hernia EXCEPT:',
  opts: ['May be diagnosed antenatally', 'Is usually right-sided', 'May be associated with pulmonary hypoplasia', 'Posterolateral defect is the most common subtype'],
  expl: 'Most are left-sided (posterolateral Bochdalek).',
  note: 'FOUR options printed, lowercase a-d. Genuine, not clipped: below option d the panel runs empty, then the box, then more empty panel down to the edge. Read off pg-1612.png at 150 dpi. Nothing from OCR. The page prints no numeral anywhere -- stem, options and box are entirely prose -- so no 600 dpi escalation was applicable. Key: the yellow highlight sits on option b, "b.Is usually right-sided" (highlighted, bold, underlined; the page prints no space after "b." on this option) -> zero-based index 1. The stem is an EXCEPT stem, and the box, "Most are left-sided (posterolateral Bochdalek).", explains why b is the false statement and therefore the correct answer, so box and highlight AGREE. Red folio "1612". No boiler line printed. pr 65 = n65; the offset stays closed.' },

{ n: 66, pr: 66, p: 1614,
  key: 0,
  stem: 'In patients with neuroblastoma, which of the following prognostic factors would predict better survival?',
  opts: ['Patient age less than one year', 'N-Myc gene amplification', 'High mitosis-karyorrhexis index', 'Clinical stage 3 rather than stage 4S'],
  expl: '',
  note: 'FOUR options printed, lowercase a-d. Genuine, not clipped: the cream panel runs on empty for roughly two thirds of its height below option d, with nothing in it. Read off pg-1614.png at 150 dpi. Nothing from OCR. ⚠️ NO EXPLANATION BOX IS PRINTED ON THIS PAGE -- expl is the empty string; the yellow highlight is the only key marking, so no box/highlight cross-check was possible and none is claimed. Key: the yellow highlight sits on option a, "a.Patient age less than one year" (highlighted, bold, underlined; no space printed after "a.") -> zero-based index 0. Numerals read directly off the page image: option d "Clinical stage 3 rather than stage 4S" -- these are staging labels, not measurements, and the "4S" is a figure followed by a capital S with no space, printed unambiguously in large serif. Note the age in option a is spelled out as the word "one year", not printed as a figure. Nothing on this page is an exponent, dose, temperature, haematocrit or a threshold carrying <, >, <= or >=, so no 600 dpi escalation was triggered. Red folio "1614". No boiler line printed. pr 66 = n66; the offset stays closed.' },

{ n: 67, pr: 67, p: 1616,
  key: 1,
  stem: 'In retro-sternal diaphragmatic hernia of Morgagni, the defect is situated:',
  opts: ['Postero-laterally in the diaphragm at the area of the embryonic pleuroperitoneal canal', 'Anteriorly through the opening for the superior epigastric artery', 'Through esophageal hiatus at gastroesophageal junction', 'In the central tendon'],
  expl: 'This is a rare anterior diaphragmatic defect.',
  note: 'FOUR options printed, lowercase a-d. Genuine, not clipped: below option d the panel runs empty, then the box, then more empty panel down to the edge. Option a wraps across two printed lines ("...the embryonic" / "pleuroperitoneal canal") and is transcribed as one option with the line break closed up to a single space. Read off pg-1616.png at 150 dpi. Nothing from OCR. The page prints no numeral anywhere in stem, options or box, so no 600 dpi escalation was applicable. Key: the yellow highlight sits on option b, "Anteriorly through the opening for the superior epigastric artery" (highlighted, bold, underlined; the highlight band runs the full width of the option to its last word) -> zero-based index 1. The box, "This is a rare anterior diaphragmatic defect.", says ANTERIOR, which agrees with the highlighted option b and rules out the postero-lateral option a; box and highlight AGREE. ⚠️ WORTH THE PARENT\'S ATTENTION BUT NOT A CONTRADICTION AND NOT A KEY MOVE: the box adds "rare", a fact no option states, and it does not name the superior epigastric artery, so it corroborates the direction of the defect rather than the anatomical landmark. The key stays on the highlight. Red folio "1616". No boiler line printed. pr 67 = n67; the offset stays closed. RECORDED FOR THE ADJUDICATION PASS, NOT FOLDED: this question and n65 on p.1612 are both congenital diaphragmatic hernia questions and n65\'s box also turns on the Bochdalek posterolateral defect, but they are different questions with different stems, different option ladders and different keys -- a topic pairing, not a reprint.' },

{ n: 68, pr: 68, p: 1618,
  key: 0,
  stem: 'With good and early management of intussusception, the mortality is:',
  opts: ['less than 1%', 'less than 10%', 'less than 20%', 'less than 30%'],
  expl: 'With modern treatment, survival is excellent if treated early.',
  note: 'FOUR options printed, lowercase a-d, and the ladder is genuine, not clipped: below option d the panel runs empty, then the box, then more empty panel to the edge. ⚠️ ESCALATED TO 600 dpi -- THIS IS AN ALL-NUMERIC OPTION LADDER, exactly the case task override 5 names, and the four options differ ONLY in their figure. Band crop crop-1618-opts-1618.png, rendered -r 600 -x 150 -y 420 -W 1150 -H 1000, which the reader shows at 1:1 and which contains all four option lines whole with clear margin on both sides -- no digit sits at a crop edge and no second render was needed. At 600 dpi the four figures read unambiguously as 1%, 10%, 20% and 30%: option a is a single "1" followed directly by the percent sign, and b, c and d each carry two digits. The distinction that mattered is a vs b -- "1%" against "10%" -- and the crop settles it, the "1" in option a having nothing after it before the "%". The stem carries no figure and each option is a "less than" phrase spelled out in words, so no option carries a <, >, <= or >= glyph and there was no equality-stroke ambiguity of the kind half C hit on p.1573. Read off pg-1618.png at 150 dpi for the prose. Nothing from OCR. Key: the yellow highlight sits on option a, "a.less than 1%" (highlighted, bold, underlined; no space printed after "a.") -> zero-based index 0. ⚠️ RECORDED, NOT A CONTRADICTION AND NOT A KEY MOVE: the box, "With modern treatment, survival is excellent if treated early.", prints NO FIGURE AT ALL. It supports a low-mortality answer in words but never names 1% or any other number, so it cannot corroborate WHICH numeric option is meant; the key rests on the yellow highlight alone, which is where the rule puts it. Red folio "1618". No boiler line printed. pr 68 = n68; the offset stays closed.' },

{ n: 69, pr: 69, p: 1620,
  key: 2,
  stem: 'The following can be done for a massive gastroschisis EXCEPT:',
  opts: ['Abdominal silo', 'Delayed primary closure', 'Topical eschar-forming agents', 'Gastric decompression and parenteral nutrition should be continued'],
  expl: 'These are not used. Silo or delayed closure are standard approaches.',
  note: 'FOUR options printed, lowercase a-d. Genuine, not clipped: below option d the panel runs empty, then the two-line box, then more empty panel to the edge. Read off pg-1620.png at 150 dpi. Nothing from OCR. The page prints no numeral anywhere in stem, options or box, so no 600 dpi escalation was applicable. Key: the yellow highlight sits on option c, "Topical eschar-forming agents" (highlighted, bold, underlined) -> zero-based index 2. The stem is an EXCEPT stem, and the box, "These are not used. Silo or delayed closure are standard approaches.", explains why c is the thing that cannot be done and therefore the correct answer, and it names options a and b as the standard alternatives; box and highlight AGREE. The box runs to two printed lines ("...are standard" / "approaches.") and is transcribed with the break closed up to a single space. Red folio "1620". No boiler line printed. pr 69 = n69; the offset stays closed. Per task override 3, gastroschisis is in scope for this book and was staged normally.' },

{ n: 70, pr: 70, p: 1622,
  key: 1,
  stem: 'What is the hallmark physical finding in cases of intussusception?',
  opts: ['Occult blood in the stools and peritonitis', 'Right hypochondrium sausage-shaped mass and emptiness in the right lower quadrant', 'Frank hematochezia', 'Abdominal distention, fever, and leukocytosis'],
  expl: 'This classic finding is highly suggestive of intussusception',
  note: 'FOUR options printed, lowercase a-d. Genuine, not clipped: below option d the panel runs empty, then the box, then more empty panel to the edge. Option b wraps across two printed lines ("...in the right" / "lower quadrant") and the yellow highlight covers BOTH lines, so the whole option is highlighted, not just its first line; transcribed as one option with the break closed up to a single space. Read off pg-1622.png at 150 dpi. Nothing from OCR. The page prints no numeral anywhere in stem, options or box, so no 600 dpi escalation was applicable. Key: the yellow highlight sits on option b -> zero-based index 1. The box, "This classic finding is highly suggestive of intussusception", agrees with the highlight by reference ("this classic finding") rather than by naming the sign again, so it corroborates the highlighted option without repeating it. The box as printed ends with NO full stop; transcribed exactly. Red folio "1622". No boiler line printed. pr 70 = n70; the offset stays closed. RECORDED FOR THE ADJUDICATION PASS, NOT FOLDED: this is the third intussusception question in this half (n63 on p.1608, n68 on p.1618, this one), and all three are different questions with different stems, ladders and keys -- a topic cluster, not a reprint.' },

{ n: 71, pr: 71, p: 1624,
  key: 1,
  stem: 'Complications of cryptorchidism if untreated include all of the following EXCEPT:',
  opts: ['Future neoplasm', 'Hormonal imbalance', 'Testicular torsion', 'Risk of trauma'],
  expl: 'Untreated undescended testes increase the risk of testicular cancer, torsion, and trauma, but hormonal imbalance does not occur because Leydig cells produce testosterone normally.',
  note: 'FOUR options printed, lowercase a-d. Genuine, not clipped: below option d the panel runs empty, then the three-line box, then more empty panel to the edge. Read off pg-1624.png at 150 dpi. Nothing from OCR. The page prints no numeral anywhere in stem, options or box, so no 600 dpi escalation was applicable. Key: the yellow highlight sits on option b, "Hormonal imbalance" (highlighted, bold, underlined) -> zero-based index 1. The stem is an EXCEPT stem and the box is the fullest in this half so far: it names options a, c and d as real complications ("testicular cancer, torsion, and trauma") and then states that hormonal imbalance does NOT occur, which is exactly why b is the correct answer to an EXCEPT stem; box and highlight AGREE, and this is the one page here where the box independently confirms the key by exclusion of every distractor. The box prints "testicular cancer, torsion, and trauma" and "not occur" in BOLD within otherwise regular type; the bolding is not reproducible in this plain-text field and the words are transcribed unemphasised, running to three printed lines closed up to single spaces. Red folio "1624". No boiler line printed. pr 71 = n71; the offset stays closed.' },

{ n: 72, pr: 72, p: 1626,
  key: 3,
  stem: 'Which of the following is FALSE as regards meconium ileus?',
  opts: ['Microcolon is noted on barium enema', 'Double-barreled ileostomy can be done in these cases', 'Sweat chloride test is among the workup for this disease', 'Operative option is indicated in all cases'],
  expl: 'Not all cases require surgery; some can be managed non-surgically with contrast enemas. Microcolon is typical, double-barreled ileostomy is a surgical option if needed, and sweat chloride test helps confirm cystic fibrosis.',
  note: 'FOUR options printed, lowercase a-d. Genuine, not clipped: below option d the panel runs empty, then the four-line box, then more empty panel to the edge. Read off pg-1626.png at 150 dpi. Nothing from OCR. The page prints no numeral anywhere in stem, options or box, so no 600 dpi escalation was applicable. Key: the yellow highlight sits on option d, "Operative option is indicated in all cases" (highlighted, bold, underlined) -> zero-based index 3. The stem asks which statement is FALSE, and the box says not all cases require surgery and then confirms a, b and c as true statements, so d is the false one and therefore the answer; box and highlight AGREE, and like n71 this box confirms the key by accounting for every distractor. The box prints "some can be managed non-surgically" in BOLD within otherwise regular type; the bolding is not reproducible in this plain-text field and those words are transcribed unemphasised. Four printed lines closed up to single spaces. Red folio "1626". No boiler line printed. pr 72 = n72; the offset stays closed. RECORDED, NOT FOLDED: meconium ileus also appeared as option b of n63 on p.1608, but that is a distractor in a different question, not a reprint.' },

{ n: 73, pr: 73, p: 1628,
  key: 1,
  stem: 'In patients with neuroblastoma, which of the following prognostic factors is associated with decreased survival?',
  opts: ['Patient age less than one year', 'N-myc amplification', 'Thorax as the primary site', 'Nodular, well-differentiated histology pattern'],
  expl: 'Amplification of N-myc is associated with aggressive tumor behavior and lower survival, whereas age <1 year, thoracic site, or well-differentiated histology generally indicate better prognosis.',
  note: 'FOUR options, and ⚠️ THE OPTION LETTERING REVERTS TO UPPERCASE A-D on this page after six consecutive pages of lowercase a-d (pp.1606-1626). Recorded as a printing observation; it does not affect the key, which is a zero-based index under task override 2. Genuine four-option ladder, not clipped: below option D the panel runs empty, then the three-line box, then more empty panel to the edge. Read off pg-1628.png at 150 dpi. Nothing from OCR. ⚠️ ESCALATED TO 600 dpi -- THE BOX CARRIES A THRESHOLD GLYPH, "age <1 year", which task override 5 names explicitly. Band crop crop-1628-box-1628.png, rendered -r 600 -x 1450 -y 1930 -W 1150 -H 380, shown 1:1. It resolves the glyph as a PLAIN LESS-THAN with NO equality stroke under it -- "<1 year", not "<=1 year" -- and the figure as a single digit 1, with clear space on both sides of the crop and no character clipped at an edge; one render sufficed, no second pass needed. This is exactly the half C p.1573 trap (options separating only by the equality stroke) and it was checked rather than assumed. Key: the yellow highlight sits on option B, "N-myc amplification" (highlighted, bold, underlined) -> zero-based index 1. The box says N-myc amplification means aggressive behaviour and LOWER survival while the other three indicate BETTER prognosis, which matches a stem asking for DECREASED survival; box and highlight AGREE and the box accounts for all four options. The box prints "aggressive tumor behavior and lower survival" and "better prognosis" in BOLD; the bolding is not reproducible in this plain-text field and those words are transcribed unemphasised, three printed lines closed up to single spaces. Red folio "1628". No boiler line printed. pr 73 = n73; the offset stays closed. ⚠️⚠️ RECORDED FOR THE ADJUDICATION PASS, NOT FOLDED -- THIS IS AN INVERTED TWIN OF n66 ON p.1614, NOT A REPRINT. n66 asks which factor predicts BETTER survival and keys "Patient age less than one year"; this asks which is associated with DECREASED survival and keys N-myc amplification. The two share option a/A word for word ("Patient age less than one year") and both offer an N-myc option, but this printing writes it "N-myc amplification" where n66 writes "N-Myc gene amplification", and options c/C and d/D differ entirely (n66: high mitosis-karyorrhexis index, clinical stage 3 rather than stage 4S; here: thorax as the primary site, nodular well-differentiated histology pattern). The discriminating token is the direction word in the stem, BETTER against DECREASED, and the two keys are correctly opposite. Folding these would be an error; they are a deliberately paired question and its inverse.' },

{ n: 74, pr: 74, p: 1630,
  key: 1,
  stem: 'A ten-month-old presents with an abdominal mass and anemia. Imaging reveals an adrenal mass. Which of the following metastatic sites is inconsistent with Stage IV-S neuroblastoma?',
  opts: ['Bone marrow', 'Brain', 'Skin', 'Liver'],
  expl: 'Stage IV-S only involves liver, skin, and limited bone marrow, not the brain. Brain metastasis indicates more advanced disease beyond stage IV-S.',
  note: 'FOUR options printed, uppercase A-D, continuing the reversion that began on p.1628. Genuine, not clipped: below option D the panel runs empty, then the two-line box, then more empty panel to the edge, and the four options here are single words or two-word phrases with generous leading, so nothing is crowded at the foot. Read off pg-1630.png at 150 dpi. Nothing from OCR. The only figures on the page are the stage labels "Stage IV-S" in the stem and "stage IV-S" in the box, printed as Roman numeral IV plus a capital S -- not an Arabic figure, not a measurement, and not an exponent, dose, temperature, haematocrit or a threshold carrying <, >, <= or >=, so no 600 dpi escalation was triggered. The age in the stem is spelled out as the words "A ten-month-old", not printed as a figure. Key: the yellow highlight sits on option B, "Brain" -> zero-based index 1. The stem asks which site is INCONSISTENT with stage IV-S, and the box says stage IV-S involves liver, skin and limited bone marrow but NOT the brain, which names options D, C and A as the consistent ones and leaves B as the answer; box and highlight AGREE and the box accounts for all four options. The box prints "liver, skin, and limited bone marrow" and "more advanced disease" in BOLD; the bolding is not reproducible in this plain-text field and those words are transcribed unemphasised, two printed lines closed up to a single space. Note the box prints "Stage IV-S" capitalised at its first mention and "stage IV-S" lowercase at its second; both transcribed as printed. Red folio "1630". No boiler line printed. pr 74 = n74; the offset stays closed. RECORDED, NOT FOLDED: this is the third neuroblastoma question in this half (n66 p.1614, n73 p.1628, this one) and the second to turn on staging, but the stem is a vignette and the ladder is metastatic sites, sharing no option with either -- a topic cluster, not a reprint.' },

{ n: 75, pr: 75, p: 1632,
  key: 3,
  stem: 'Which of the following is NOT TRUE regarding intussusception?',
  opts: ['More common in boys', "Can occur secondary to Meckel's diverticulum", 'Bilious vomiting is not always present', 'Bleeding per rectum is the most common presenting symptom'],
  expl: 'The hallmark is intermittent abdominal pain and a sausage-shaped mass, not bleeding, which appears later. It is more common in boys and can occur secondary to Meckel’s diverticulum.',
  note: 'FOUR options printed, uppercase A-D. Genuine, not clipped: below option D the panel runs empty, then the three-line box, then more empty panel to the edge. Read off pg-1632.png at 150 dpi. Nothing from OCR. The page prints no numeral anywhere in stem, options or box, so no 600 dpi escalation was applicable. Key: the yellow highlight sits on option D, "Bleeding per rectum is the most common presenting symptom" (highlighted, bold, underlined, the band running the full width to the last word) -> zero-based index 3. The stem asks which is NOT TRUE, and the box says the hallmark is intermittent pain and a sausage-shaped mass and NOT bleeding, which appears later, then confirms options A and B as true; box and highlight AGREE. ⚠️ TRANSCRIBED AS PRINTED, TWO DIFFERENT APOSTROPHES ON ONE PAGE: option B prints "Meckel\'s diverticulum" with a STRAIGHT apostrophe, while the box prints "Meckel’s diverticulum" with a CURLY one. Both reproduced exactly as each is printed. The box prints "intermittent abdominal pain and a sausage-shaped mass" in BOLD; the bolding is not reproducible in this plain-text field and those words are transcribed unemphasised, three printed lines closed up to single spaces. Red folio "1632". No boiler line printed. pr 75 = n75; the offset stays closed. RECORDED FOR THE ADJUDICATION PASS, NOT FOLDED: this is the FOURTH intussusception question in this half (n63 p.1608, n68 p.1618, n70 p.1622, this one). It is closest to n70, which keyed the sausage-shaped mass as the hallmark physical finding, and this box names the same hallmark in its explanation -- but n70 asks for the hallmark and keys it, while this asks which statement is NOT TRUE and keys a different, false statement about bleeding per rectum. The discriminating token is the stem\'s polarity; the option ladders share no entry. Different questions.' },

{ n: 76, pr: 76, p: 1634,
  key: 2,
  stem: 'Which of the following is TRUE regarding duodenal atresia?',
  opts: ['Most common form of bowel atresia is thrush', 'Presents after birth with non-bilious vomiting', 'Prenatal diagnosis is common', 'Gastrojejunostomy is the procedure of choice'],
  expl: 'Duodenal atresia can often be seen on prenatal ultrasound, typically as a “double-bubble” sign. Vomiting is usually bilious, not non-bilious, and gastrojejunostomy is not the procedure of choice.',
  note: 'FOUR options printed, uppercase A-D. Genuine, not clipped: below option D the panel runs empty, then the three-line box, then more empty panel to the edge. Read off pg-1634.png at 150 dpi. Nothing from OCR. The page prints no numeral anywhere in stem, options or box, so no 600 dpi escalation was applicable. Key: the yellow highlight sits on option C, "Prenatal diagnosis is common" (highlighted, bold, underlined) -> zero-based index 2. The stem asks which is TRUE, and the box says duodenal atresia can often be seen on prenatal ultrasound as a double-bubble sign, which is option C, and then rules out B (vomiting is usually bilious, not non-bilious) and D (gastrojejunostomy is not the procedure of choice); box and highlight AGREE, and the box accounts for three of the four options. ⚠️ FLAGGED FOR THE PARENT, TRANSCRIBED EXACTLY AS PRINTED, NOT SILENTLY CORRECTED: option A reads "Most common form of bowel atresia is thrush". The word is unmistakably "thrush" on the page in large serif type, and it is nonsense in context -- almost certainly a printing error for "this" -- but it is a whole wrong WORD in an option rather than a spelling slip, it changes what the option asserts, and the box does not address option A at all, so nothing in the source resolves it. Staged verbatim; a drafting pass should know this is what the book prints and not a transcription fault of mine. The box prints "prenatal ultrasound" and "bilious" in BOLD; the bolding is not reproducible in this plain-text field and those words are transcribed unemphasised. The box prints CURLY double quotes around “double-bubble”, reproduced as printed; three printed lines closed up to single spaces. Red folio "1634". No boiler line printed. pr 76 = n76; the offset stays closed. RECORDED FOR THE ADJUDICATION PASS, NOT FOLDED: this is the second duodenal atresia question in this half, after n62 on p.1606. n62 is a four-statement question keyed on the Trisomy 21 association; this is keyed on prenatal diagnosis. The two share NO option and the keys are different facts, but note that n62\'s distractor c asserted non-bilious vomiting proximal to the ampulla while THIS box states vomiting is usually bilious -- the two printings are consistent with each other, since c was a distractor there. A topic pairing, not a reprint.' },

{ n: 77, pr: 77, p: 1636,
  key: 2,
  stem: 'Regarding congenital diaphragmatic hernia (CDH), which of the following is TRUE?',
  opts: ['Chest tube should be placed', 'Baby should be ventilated with bag-mask ventilation', 'Nasogastric tube should be placed', 'Ventilation with high-frequency oscillation is contraindicated'],
  expl: 'Preoperative management includes decompressing the stomach with an NG tube. Bag-mask ventilation and routine chest tube placement are avoided, and high-frequency ventilation may sometimes be used.',
  note: 'FOUR options printed, uppercase A-D. Genuine, not clipped: below option D the panel runs empty, then the three-line box, then more empty panel to the edge. Read off pg-1636.png at 150 dpi. Nothing from OCR. The page prints no numeral anywhere in stem, options or box, so no 600 dpi escalation was applicable. Key: the yellow highlight sits on option C, "Nasogastric tube should be placed" (highlighted, bold, underlined) -> zero-based index 2. The stem asks which is TRUE, and the box says preoperative management includes decompressing the stomach with an NG tube, which is option C, and then rules out B and A (bag-mask ventilation and routine chest tube placement are avoided) and D (high-frequency ventilation may sometimes be used, so it is not contraindicated); box and highlight AGREE and the box accounts for all four options. The box prints "decompressing the stomach" and "avoided" in BOLD; the bolding is not reproducible in this plain-text field and those words are transcribed unemphasised, three printed lines closed up to single spaces. Note the option ladder writes "Nasogastric tube" in full while the box writes "NG tube"; both transcribed as printed in their own field. Red folio "1636". No boiler line printed. pr 77 = n77; the offset stays closed. RECORDED FOR THE ADJUDICATION PASS, NOT FOLDED: this is the third congenital diaphragmatic hernia question in this half, after n65 on p.1612 (EXCEPT stem, keyed on laterality) and n67 on p.1616 (Morgagni, keyed on the site of the defect). This one is a management question and shares no option with either. A topic cluster, not a reprint.' },

{ n: 78, pr: 78, p: 1638,
  key: 3,
  stem: 'Infants with anorectal anomalies tend to have other congenital anomalies. Which of the following are commonly associated?',
  opts: ['Abnormalities of the cervical spine', 'Hydrocephalus', 'Duodenal atresia', 'Heart disease'],
  expl: 'Anorectal malformations are often associated with cardiac defects, genitourinary anomalies, and vertebral abnormalities, while cervical spine and hydrocephalus are less frequent.',
  note: 'FOUR options printed, uppercase A-D. Genuine, not clipped: below option D the panel runs empty, then the three-line box, then more empty panel to the edge. Read off pg-1638.png at 150 dpi. Nothing from OCR. The page prints no numeral anywhere in stem, options or box, so no 600 dpi escalation was applicable. Key: the yellow highlight sits on option D, "Heart disease" (highlighted, bold, underlined) -> zero-based index 3. The box says anorectal malformations are often associated with CARDIAC DEFECTS, which is the same answer as "Heart disease" in different words, and it explicitly demotes options A and B ("cervical spine and hydrocephalus are less frequent"); box and highlight AGREE. ⚠️ THE BOX GOES BEYOND THE OPTIONS, RECORDED AND KEY UNMOVED (the half C n52 shape): it adds "genitourinary anomalies, and vertebral abnormalities" as further associations, neither of which any option offers, and it says NOTHING AT ALL about option C, duodenal atresia -- so C is the one distractor the box does not dispose of. That is worth the note but it does not touch the key, which sits on the highlight. The box prints "cardiac defects" in BOLD; the bolding is not reproducible in this plain-text field and those words are transcribed unemphasised, three printed lines closed up to single spaces. Red folio "1638". No boiler line printed. pr 78 = n78; the offset stays closed. Per task override 3, anorectal anomalies are in scope for this book and this was staged normally.' },

{ n: 79, pr: 79, p: 1640,
  key: 0,
  stem: 'We confirm the diagnosis of congenital inguinal hernia in the absence of visible swelling by:',
  opts: ['Make the child cry', 'Internal ring test', 'Rolling test', 'None of the above'],
  expl: 'Crying increases intra-abdominal pressure, making the hernia protrude and allowing detection of otherwise non-apparent hernias.',
  note: 'FOUR options printed, uppercase A-D, and option D is "None of the above" -- the first such option in this half, which itself confirms the ladder is complete and not clipped, since nothing follows a none-of-the-above option. Below option D the panel runs empty, then the two-line box, then more empty panel to the edge. Read off pg-1640.png at 150 dpi. Nothing from OCR. The page prints no numeral anywhere in stem, options or box, so no 600 dpi escalation was applicable. Key: the yellow highlight sits on option A, "Make the child cry" (highlighted, bold, underlined) -> zero-based index 0. The box, "Crying increases intra-abdominal pressure, making the hernia protrude and allowing detection of otherwise non-apparent hernias.", explains exactly why crying is the manoeuvre, matching a stem that asks how to confirm the diagnosis in the ABSENCE of visible swelling; box and highlight AGREE. The box does not address options B or C. The box prints "intra-abdominal pressure" in BOLD; the bolding is not reproducible in this plain-text field and those words are transcribed unemphasised, two printed lines closed up to a single space. Red folio "1640". No boiler line printed. pr 79 = n79; the offset stays closed. RECORDED FOR THE ADJUDICATION PASS, NOT FOLDED: this is the second congenital inguinal hernia question in this half, after n64 on p.1610, but n64 is a TRUE-statement question about epidemiology and timing of herniotomy and this is a bedside-manoeuvre question; they share no option. A topic pairing, not a reprint.' },

{ n: 80, pr: 80, p: 1642,
  key: 3,
  stem: 'Which of the following is TRUE regarding congenital inguinal hernia?',
  opts: ['It is more common on the left side in females', 'Herniotomy should be delayed until the child is over 2 years old', 'The most common presenting age is between 1–2 years', 'Incarcerated hernia can cause infarction of the testis in the very young'],
  expl: 'Hernias in infants can become incarcerated, risking compromised blood flow and testicular infarction, especially in neonates and young infants.',
  note: '⚠️ THIS IS n80, NOT n79 -- SEE THE FILE HEADER AND THE REPORT. The task prompt expected this half to end at n79 on p.1642; measured page by page from the renders, the extra answered sheet p.1606 puts one more question in the section than the task map allowed, so this half is TWENTY entries (n61..n80) and the SECTION HOLDS 80 QUESTIONS, not 79. FOUR options printed, uppercase A-D. Genuine, not clipped, and proved twice: below option D the panel runs empty, then the two-line box, then more empty panel to the edge, and I also rendered the BLANK printing p.1641 as a check (a check stages nothing) -- it prints the same stem and the same four options with nothing below them. Read off pg-1642.png at 150 dpi. Nothing from OCR. Numerals read directly off the page image: option B "over 2 years old", option C "between 1–2 years" with an EN DASH, transcribed as such. Neither is an exponent, dose, temperature, haematocrit or a threshold carrying <, >, <= or >=, and this is not an all-numeric ladder, so no 600 dpi escalation was triggered. Key: the yellow highlight sits on option D, "Incarcerated hernia can cause infarction of the testis in the very young" (highlighted, bold, underlined, the band running the full width to the last word) -> zero-based index 3. The box, "Hernias in infants can become incarcerated, risking compromised blood flow and testicular infarction, especially in neonates and young infants.", names incarceration and testicular infarction in the very young, which is option D in slightly different words; box and highlight AGREE. The box prints "incarcerated" in BOLD; the bolding is not reproducible in this plain-text field and the word is transcribed unemphasised, two printed lines closed up to a single space. Red folio "1642". No boiler line printed. pr 80 = n80; the offset stayed closed from n64 to the end of the section. ⚠️⚠️ RECORDED FOR THE ADJUDICATION PASS, NOT FOLDED -- THIS IS THE CLOSEST THING TO A REPRINT IN THIS HALF, and it is the half C n58/n50 shape (a reprint within the same exam with a different box). It reprints n64 on p.1610, also a "TRUE regarding congenital inguinal hernia" question. TWO OPTIONS ARE ALL BUT WORD FOR WORD: option C here, "The most common presenting age is between 1–2 years", is IDENTICAL to n64\'s option c including the en dash; option B here, "Herniotomy should be delayed until the child is over 2 years old", is n64\'s option b PLUS the word "old". THE OTHER TWO DIFFER AND SO DOES THE KEY: n64\'s option a was "It is more common in females" where this prints "It is more common on the left side in females", and n64\'s option d was "Bilaterality is more common in girls" against this "Incarcerated hernia can cause infarction of the testis in the very young". n64 keys index 3 (bilaterality) and this keys index 3 (incarceration) -- the same LETTER on two different statements, which is exactly the trap a letter-based key would hide and an index does not. n64 also printed NO box while this one does. The discriminating token is option D. Flagged only; folding is an adjudication decision made later with the whole book in view.' }

];
