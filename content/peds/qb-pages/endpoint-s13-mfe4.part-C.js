/* ENDPOINT part1 -- Model Final Exam 4 -- staging half C (questions n41..n60).
   Source: "Pediatrics endpoint part1.pdf" (Semester 8/Pedo/Questions/), answered pages
   p:1726,1728,1730,1732,1734,1736,1738,1740,1742,1744,1746,1748,1750,1752,1754,1756,1758,1760,
   1762,1764 -- task-supplied list, measured from content/peds/qb-pages/ocr/ep1/index.json on
   2026-09-05 (kind == "answered" within pp.1644-1804; 80 answered sheets, every gap exactly 2).
   That index counts SHEETS, not printed numbers, so the printed question number was read off
   every page and recorded in each entry's note.
   Every question in this exam prints twice (a blank exam sheet, then an answered sheet carrying
   the yellow-highlighted key and usually a bordered explanation box); staging is from the
   ANSWERED sheets ONLY. The blank printings were neither rendered nor read.
   PDF is 1:1, NOT 2-up -- one large-type question per sheet. Confirmed on every page read here:
   the red folio at the foot of the sheet prints the PDF page number. A PDF page number IS the
   printed page.
   key is a ZERO-BASED INDEX into opts (integer), never a letter. key follows the YELLOW
   HIGHLIGHT; where the explanation box disagrees with the highlight, the key stays on the
   highlight and the disagreement is recorded in the note. Contradictions are recorded, never
   corrected.
   Paediatric surgery topics (gastroschisis, atresias, Hirschsprung, intussusception, hernias,
   Wilms, neuroblastoma, urological anomalies) are IN SCOPE for this book and are staged.
   OCR at content/peds/qb-pages/ocr/ep1/p<NNNN>.txt was NOT opened during this staging pass.
   Nothing here comes from OCR text; every character was read off a rendered page image.
   n is the question's position in the SECTION (41..60 here). pr is the PRINTED exam number.
   Where they disagree, n is kept and the disagreement is recorded in that entry's note.
   File format: bare { ... } fragments separated by one blank line -- no array wrapper and no
   commas between entries. `node --check` always fails on this shape and that failure is
   meaningless; validated with tools/bank-harness/check-part-ep.js instead.

   CLOSED 2026-09-05 -- 20/20 entries staged (n41..n60, pp.1726-1764), each appended immediately
   after its page was read and the file re-validated along the way. Final run of
   check-part-ep.js: 20 entries, n 41..60, pp.1726-1764, OK.
   Measured, not assumed: every one of the 20 pages carried a printed exam number, the numbering
   ran 41..60 with NO skip and NO repeat, and it agreed with n on every page -- pr equals n
   throughout and no disagreement had to be recorded. The red folio matched the PDF page number
   on all 20 sheets. Boundary checked one page past the end: PDF p.1766 prints exam question 61,
   so this half ends exactly at p.1764.
   Option counts SPLIT EXACTLY IN HALF: 4 options on 10 sheets (pp.1726,1728,1730,1734,1738,1740,
   1742,1744,1746,1756) and 5 options on 10 sheets (pp.1732,1736,1748,1750,1752,1754,1758,1760,
   1762,1764). Key positions: index 0 x4, 1 x6, 2 x5, 3 x3, 4 x2.
   Two sheets print NO explanation box, so expl is empty on n42 (p.1728) and n60 (p.1764).
   No page printed a figure, and no box overflowed onto a later sheet.
   Four sheets print the box to the RIGHT of the option ladder rather than below it -- p.1736
   (beside A-E), p.1754 (beside B-C), p.1758 (beside B-C) and p.1760 (beside B-E); on each the
   ladder was read down the left margin past the box.
   Defects recorded, never corrected: p.1732 option C is printed incomplete, ending at
   "found in compensated" with no noun; p.1742 box sets thresholds (five or more stools, more
   than twice vomiting) that its own distractors miss (three or more, twice); p.1744 option and
   box state the same duration in different units (>2 months against 12 weeks); p.1746 box names
   hypoglycemia against option C hyperglycemia; p.1754 box names Kawasaki disease but never names
   immunoglobulin explicitly; p.1762 prints its fifth option under a REPEATED letter C with no E
   on the sheet.
   Numerals ESCALATED to 600 dpi band crops -- eleven pages, sixteen crops in all:
     p.1730 stem  -- age 13, 5th centile, 25th centile
     p.1732 box   -- CRT >2 seconds, temperature gap >4 (bare 4, no unit printed)
     p.1736 stem and option/box band -- age 5, 3rd percentile, 25th percentile, every 6 months
     p.1742 ladder and box -- 24 hours, 6 months, three, five, 24hours (printed closed up) x2
     p.1744 option and box -- >2 months against 12 weeks (the unit differs between them)
     p.1748 ladder -- Herpes simplex type 1, Parvovirus B19
     p.1752 stem and box -- 18-month-old against beyond 6 months of age
     p.1754 stem  -- 9-year-old, 3 years of age
     p.1758 stem  -- 11-month-old, 2.4 kg, 0.4th centile, 2nd centile, 7.0 kg, 5th centile,
                     40th centile (the densest page in this half)
     p.1760 stem  -- temperature 38.3°C with degree sign, age 6 years
     p.1762 ladder -- confirming the repeated option letter C is a C and not a smudged E
   No exponent, dose or drug quantity is printed anywhere in this half; the only drug names,
   nystatin and fluconazole on p.1756, carry no dose.
*/

{ n: 41, pr: 41, p: 1726,
  key: 0,
  stem: 'Which of the following is a feature of protien energy malnutrition (Kwashiorkor)?',
  opts: ['Edema', 'Hyperactivity', 'High plasma albumin', 'All of the above'],
  expl: 'Note: Edema occurs in Kwashiorkor due to protein deficiency.',
  note: "4 options printed (A-D). Yellow highlight on A (Edema), underlined and bold; the printed note box agrees. Printed number 41 matches n. Red folio 1726 matches the PDF page. No numerals in stem, options or box, so nothing needed escalation on this page. Box is a single short line centred under the ladder." }

{ n: 42, pr: 42, p: 1728,
  key: 0,
  stem: 'The parents of a 10 month-old child are stressed due to small size of the baby as compared to babies who are his age. The mother reports that she gives him little food. Which of the following is the cause for her small size?',
  opts: ['Inadequate caloric intake', 'Genetic Disorder', 'Celiac disease', "Hirschsprung's disease"],
  expl: '',
  note: "4 options printed (A-D). Yellow highlight on A (Inadequate caloric intake). NO explanation box is printed on this sheet, so expl is empty. Printed number 42 matches n. Red folio 1728 matches the PDF page. Only numeral is the age 10 month-old, read cleanly at 150 dpi; not escalated. The stem switches gender mid-way (his age, then her small size) -- transcribed as printed." }

{ n: 43, pr: 43, p: 1730,
  key: 1,
  stem: 'A 13 year-old girl complaining of delayed puberty. Her height is at the 5th centile and the weight is at the 25th centile, with mild delayed bone age. Her mother also had a history of delayed puberty but is now normal. What is the diagnosis?',
  opts: ['Turner syndrome', 'Constitutional growth delay', 'Familial growth delay', 'Endocrinal short stature'],
  expl: 'Note: Delayed puberty + short stature + history of delayed puberty and short stature of a parent who is currently normal → Constitutional delay in growth and puberty.',
  note: "4 options printed (A-D). Yellow highlight on B (Constitutional growth delay); the box agrees, naming constitutional delay in growth and puberty. Printed number 43 matches n. Red folio 1730 matches the PDF page. ESCALATED to a 600 dpi band crop of the stem to confirm the three numerals: age 13, height 5th centile, weight 25th centile -- all confirmed at 600 dpi. The box prints a right-arrow glyph, kept as the arrow character." }

{ n: 44, pr: 44, p: 1732,
  key: 2,
  stem: 'Which of the following is true about shock?',
  opts: ['Anaphylaxis causes shock due to hypovolemia', 'Bradycardia found in compensated shock', 'Mottled, pale and cold skin is found in compensated', 'Gastroenteritis causes shock due to fluid maldistribution', 'Decreased urine output in decompensated shock'],
  expl: 'Clinical signs of early (compensated shock): Tachypnea, tachycardia, decreased skin turgor, sunken eyes and fontanelle, delayed CRT >2 seconds, mottled pale cold skin, core-peripheral temperature gap >4 & decreased urinary output. Clinical signs of late (decompensated shock): Acidotic (Kussmaul) breathing, bradycardia, confusion / depressed cerebral state, blue perpheries, absent urinary ouput & hypotension.',
  note: "5 options printed (A-E) -- this page breaks the four-option pattern of the pages before it. Yellow highlight on C; the box agrees, listing mottled pale cold skin among the early (compensated) signs. Option C is printed incomplete: it ends at 'found in compensated' with no noun, transcribed exactly as printed. Note that option E (decreased urine output in decompensated shock) is also supported by the box, which lists absent urinary output as a late sign and decreased urinary output as an early sign -- recorded, key left on the highlight. Printed number 44 matches n. Red folio 1732 matches the PDF page. ESCALATED to a 600 dpi crop of the small-print box to confirm its two numerals: CRT >2 seconds and temperature gap >4 (a bare 4 with no unit printed) -- both confirmed. The two box lines print their headings in red; colour is not carried into the text." }

{ n: 45, pr: 45, p: 1734,
  key: 2,
  stem: "An infant presented with profuse watery diarrhea that has offensive odor and contains no blood. Which of the following organisms might be the cause for that infan'ts condition?",
  opts: ['Campylobacter jejuni', 'Shigella', 'E-Coli', 'Salmonella'],
  expl: 'Note: Campylobacter jejuni infection, Shigella and some salmonellae species produce a dysenteric type of infection, with blood and pus in the stool, abdominal pain and tenesmus. Cholera and enterotoxigenic Escherichia coli infection are associated with profuse, rapidly dehydrating diarrhoea.',
  note: "4 options printed (A-D). Yellow highlight on C (E-Coli); the box agrees, tying enterotoxigenic Escherichia coli to profuse dehydrating diarrhoea. Printed number 45 matches n. Red folio 1734 matches the PDF page. No numerals anywhere on the page, so nothing was escalated. The stem prints the apostrophe inside the word as infan'ts; transcribed as printed. Box sits centred below the ladder." }

{ n: 46, pr: 46, p: 1736,
  key: 2,
  stem: 'A 5-year-old girl is brought to the clinic because her parents are concerned about her short stature. Her height is below the 3rd percentile, and her weight is in the 25th percentile. Her growth velocity is normal. A bone age assessment reveals that her bone age is consistent with her chronological age. What is the most appropriate next step in management?',
  opts: ['Initiate growth hormone therapy', 'Order a karyotype analysis', 'Monitor growth every 6 months', 'Refer to a pediatric endocrinologist', 'Test for celiac disease'],
  expl: 'This child has familial short stature: height below the 3rd percentile, normal growth velocity, and bone age consistent with chronological age. No immediate intervention is needed; the appropriate management is routine monitoring to ensure growth remains consistent and to detect any deviation that might indicate an underlying pathology.',
  note: "5 options printed (A-E). LAYOUT: the explanation box is printed to the RIGHT of options A-E, not below the ladder, so the ladder had to be read down the left margin past it; all five options are on the left column. Yellow highlight on C (Monitor growth every 6 months); the box agrees, calling for routine monitoring. Printed number 46 matches n. Red folio 1736 matches the PDF page. ESCALATED to two 600 dpi band crops (stem band and option/box band) to confirm every numeral: age 5-year-old, height below the 3rd percentile, weight in the 25th percentile, option C every 6 months, and the box repeating 3rd percentile -- all confirmed at 600 dpi. The box prints its diagnosis phrase in red and routine monitoring in bold; neither is carried into the text." }

{ n: 47, pr: 47, p: 1738,
  key: 1,
  stem: 'For a child with an inserted ventriculoperitoneal shunt, which of the following would be the most accurate measure to be done before lumbar puncture (to exclue shunt occlusion)?',
  opts: ['Signs of increased intracranial pressure', 'CT scan', 'Ultrasound', 'X-ray'],
  expl: 'Note: CT is the most accurate method of detecting shunt occlusion',
  note: "4 options printed (A-D). Yellow highlight on B (CT scan); the box agrees. Printed number 47 matches n. Red folio 1738 matches the PDF page. No numerals on the page, so nothing was escalated. The box is a single line with no closing full stop, transcribed as printed." }

{ n: 48, pr: 48, p: 1740,
  key: 2,
  stem: 'During the evaluation of the growth (or development) of an infant who was born prematurely, which of the following ages has to be considered?',
  opts: ['Chronological age', 'Gestational age', 'Corrected age', 'Parental age'],
  expl: 'If a child has been born prematurely, this should be allowed for by calculating the corrected age from the expected date of delivery.',
  note: "4 options printed (A-D). Yellow highlight on C (Corrected age); the box agrees. Printed number 48 matches n. Red folio 1740 matches the PDF page. No numerals on the page, so nothing was escalated. The box opens without the word Note, unlike most sheets in this half." }

{ n: 49, pr: 49, p: 1742,
  key: 2,
  stem: 'Which of the following categories of children is considered at an increased risk of dehydration?',
  opts: ['Infants who have bloody diarrhea', 'Infants who vomited twice in the previous 24 hours', 'Infants under the age of 6 months', 'Infants who passed three or more diarrhoeal stools in the previous 24 hours'],
  expl: 'The following children are at increased risk of dehydration: • infants, particularly those under 6 months of age or those born with low birthweight • if they have passed five or more diarrhoeal stools in the previous 24hours • if they have vomited more than twice in the previous 24hours • if unable to tolerate supplementary fluids • if they have malnutrition or immune deficiency',
  note: "4 options printed (A-D). Yellow highlight on C (Infants under the age of 6 months); the box agrees on its first bullet. CONTRADICTION RECORDED, key not moved: the box sets the stool threshold at FIVE or more in the previous 24hours while option D prints THREE or more, and the box sets the vomiting threshold at MORE THAN twice while option B prints twice -- both distractors are near-misses of the box figures. Printed number 49 matches n. Red folio 1742 matches the PDF page. ESCALATED to two 600 dpi crops, one of the option ladder and one of the five-bullet box, because this page is dense with thresholds: option B 24 hours, option C 6 months, option D three / 24 hours, box 6 months, five, 24hours, 24hours -- all confirmed at 600 dpi, including the box printing 24hours closed up with no space, twice. The box heading is red." }

{ n: 50, pr: 50, p: 1744,
  key: 1,
  stem: 'Which of the following is true regarding breast milk jaundice?',
  opts: ['Conjugated', 'May be prolonged >2 months', 'Managed by advice to switch to formula feeding', 'It causes pale gray stool'],
  expl: 'Note: Breast milk jaundice is benign and the jaundice may last up to 12 weeks.',
  note: "4 options printed (A-D). Yellow highlight on B (May be prolonged >2 months). The box states a different unit for the same duration -- up to 12 weeks against the option's >2 months -- recorded, key left on the highlight. ESCALATED to two 600 dpi crops, of the highlighted option and of the box, precisely because the two numerals carry different units: the option reads >2 months and the box reads 12 weeks, both confirmed at 600 dpi; the > sign is printed, not a hyphen. Printed number 50 matches n. Red folio 1744 matches the PDF page." }

{ n: 51, pr: 51, p: 1746,
  key: 1,
  stem: 'An infant was born to a diabetic mother. Which of the following is a potnetial complication that might occur in this infant?',
  opts: ['Anemia', 'Polycythemia', 'Hyperglycemia', 'Low birth weight'],
  expl: 'Neonatal problems for infant of diabetic mother: Polycythemia, hypoglycemia, RDS, hypertrophic cardiomyopathy.',
  note: "4 options printed (A-D). Yellow highlight on B (Polycythemia); the box agrees, listing polycythemia first. The box also names hypoglycemia, which is the opposite of option C hyperglycemia -- recorded as the distractor logic, key unmoved. Printed number 51 matches n. Red folio 1746 matches the PDF page. No numerals on the page, so nothing was escalated. The box opens without the word Note." }

{ n: 52, pr: 52, p: 1748,
  key: 4,
  stem: 'A 2-year-old girl has been ill for 2 days with fever, decreased appetite and a rash. On physical examination, you note ulcers on the mouth and tongue. You also see vesicles with surrounding erythema on palms and the dorsum of the hands and feet. What is the most likely causative organism?',
  opts: ['Candida albicans', 'Herpes simplex type 1', 'Parvovirus B19', 'Varicella', 'Enterovirus'],
  expl: 'Note: Enterovirus causes hand, foot and mouth disease → Painful vesicular lesions on the hands, feet, mouth, and tongue, and often also on the buttocks.',
  note: "5 options printed (A-E). Yellow highlight on E (Enterovirus), the last option in the ladder; the box agrees. Printed number 52 matches n. Red folio 1748 matches the PDF page. ESCALATED to a 600 dpi crop of the option ladder to confirm the two option numerals, Herpes simplex type 1 and Parvovirus B19 -- both confirmed; the stem numerals 2-year-old and 2 days were read at 150 dpi. LAYOUT: the ladder runs long enough that the box is pushed to the foot of the sheet and its lower border sits on the page edge, but the box is complete and no text overflows to a later sheet. The box prints a right-arrow glyph, kept as the arrow character." }

{ n: 53, pr: 53, p: 1750,
  key: 1,
  stem: 'A term infant born by elective C-section had developed acute respiratory distress few hours later. What is the most likely diagnosis?',
  opts: ['Pneumonia', 'Transient tachypnea of the newborn', 'Coarctation of the aorta', 'Respiratory distress syndrome', 'Anaemia'],
  expl: 'TTN is the most common cause of respiratory distress in a term infant. It is due to a delay in the resorption of lung liquid – an increased risk following caesarean section.',
  note: "5 options printed (A-E). Yellow highlight on B (Transient tachypnea of the newborn); the box agrees, naming TTN. Printed number 53 matches n. Red folio 1750 matches the PDF page. No numerals on the page, so nothing was escalated. The box opens without the word Note and prints an en dash before the clause about caesarean section, kept as printed." }

{ n: 54, pr: 54, p: 1752,
  key: 3,
  stem: 'An 18-month-old exclusively breast fed infant has not started standing or walking yet. On examination she has swelling of her wrists and an open fontanelle. She has yet to erupt any teeth. Which of the following is the most likely cause?',
  opts: ['Vitamin A deficiency', 'Vitamin B deficiency', 'Vitamin C deficiency', 'Vitamin D deficiency', 'Vitamin E deficiency'],
  expl: 'Note: Exclusive breastfeeding beyond 6 months of age + rickets manifestations → Vitamin D deficiency.',
  note: "5 options printed (A-E), an all-vitamin-letter ladder A through E. Yellow highlight on D (Vitamin D deficiency); the box agrees. Printed number 54 matches n. Red folio 1752 matches the PDF page. ESCALATED to two 600 dpi crops because the option letters and the vitamin letters run in parallel and could be confused, and because two ages are printed: the stem reads 18-month-old and the box reads beyond 6 months of age, both confirmed at 600 dpi. The box prints a right-arrow glyph, kept as the arrow character." }

{ n: 55, pr: 55, p: 1754,
  key: 3,
  stem: 'A 9-year-old girl is admitted to the ward with a history of chest pain on exertion. She is otherwise fit and well but was admitted to hospital at 3 years of age for a prolonged febrile illness where she was observed and discharged without diagnosis or treatment. An ECG is performed which is abnormal and an echocardiogram reveals diffuse dilatation of the left coronary artery. What is most likely to have prevented this condition?',
  opts: ['Antibiotics', 'Antivirals', 'Antifungals', 'Immunoglobulin', 'Immunization'],
  expl: 'This is a missed case of Kawasaki disease with serious complications. The clue here is the previous admission for prolonged fever without treatment. Kawasaki disease is the commonest cause of acquired cardiac disease in children.',
  note: "5 options printed (A-E). LAYOUT: the explanation box is printed to the RIGHT of options B and C, not below the ladder, so the ladder was read down the left margin past it; all five options are in the left column and the highlighted D sits below the box. Yellow highlight on D (Immunoglobulin); the box agrees by implication, naming missed Kawasaki disease, though it never names immunoglobulin explicitly -- recorded. Printed number 55 matches n. Red folio 1754 matches the PDF page. ESCALATED to a 600 dpi crop of the first two stem lines to confirm the two ages, 9-year-old and 3 years of age; both confirmed." }

{ n: 56, pr: 56, p: 1756,
  key: 0,
  stem: 'What is the treatment of choice for a child presenting with white plaques on oral mucous membranes (oral thrush)?',
  opts: ['Antifungal', 'Antiviral', 'Antibacterial', 'Steroids'],
  expl: 'Thrush is treated with topical nystatin or an azole antifungal agent such as fluconazole.',
  note: "4 options printed (A-D). Yellow highlight on A (Antifungal); the box agrees, naming nystatin and fluconazole. Printed number 56 matches n. Red folio 1756 matches the PDF page. No numerals anywhere on the page -- the box names two drugs but prints no dose -- so nothing was escalated. The box opens without the word Note." }

{ n: 57, pr: 57, p: 1758,
  key: 4,
  stem: 'Tanya, an 11-month-old Caucasian girl, is being monitored by her health visitor. Her birthweight was 2.4 kg (0.4th centile) and she has remained on the 2nd centile, now weighing 7.0 kg. Her mother is on the 5th centile and her father is on the 40th centile for height. She is well, has a good appetite and has never needed to visit her doctor. She has no abnormal signs on examination and her development is normal. Which of the following is the most likely diagnosis of that patient?',
  opts: ['Cystic fibrosis', 'Obesity', 'Vitamin C deficiency', 'Marasmus', 'Normal'],
  expl: 'She is growing normally along the 2nd centile for weight, and has no symptoms to suggest an underlying illness. She has short parents and is constitutionally small.',
  note: "5 options printed (A-E). LAYOUT: the explanation box is printed to the RIGHT of options B and C, not below the ladder, so the ladder was read down the left margin past it; the highlighted E sits at the very foot of the sheet, its lower edge touching the page border, and the option is complete. Yellow highlight on E (Normal); the box agrees, calling the child constitutionally small. Printed number 57 matches n. Red folio 1758 matches the PDF page. ESCALATED to a 600 dpi crop of the stem, which is the most numeral-dense page in this half: 11-month-old, birthweight 2.4 kg, 0.4th centile, 2nd centile, now 7.0 kg, mother 5th centile, father 40th centile -- every one confirmed at 600 dpi, including the decimal point in 0.4th and the trailing zero in 7.0. The box repeats 2nd centile, also confirmed." }

{ n: 58, pr: 58, p: 1760,
  key: 0,
  stem: 'Katie is 6 years old. She missed a few days of school as she had a fever and was generally lethargic. Now she has a temperature of 38.3°C and has a marked erythematous rash on her cheeks. Which of the following is the organism that is most likely to be the causative agent in this clinical scenario?',
  opts: ['Parvovirus infection (fifth disease)', 'Roseola infantum (sixth disease)', 'Measles virus', 'Mumps virus', 'Cytomegalovirus infection'],
  expl: "Parvovirus B19 causes erythema infectiosum or fifth disease, which is also known as 'slapped cheek syndrome' because of its characteristic facial rash. This infection will temporarily reduce red cell production, which can result in serious anaemia in children with more rapid red cell turnover (hereditary spherocytosis or sickle cell disease) or the fetus.",
  note: "5 options printed (A-E). LAYOUT: the explanation box is printed to the RIGHT of options B through E, not below the ladder, so the ladder was read down the left margin past it. Yellow highlight on A (Parvovirus infection (fifth disease)); the box agrees, naming Parvovirus B19 and fifth disease. Printed number 58 matches n. Red folio 1760 matches the PDF page. ESCALATED to a 600 dpi crop of the first two stem lines to confirm the temperature 38.3°C with its degree sign and the age 6 years, both confirmed; the box numeral B19 was read at 150 dpi and is unambiguous. The box uses curly quotation marks around the syndrome name, kept as printed." }

{ n: 59, pr: 59, p: 1762,
  key: 1,
  stem: 'How does human milk oligosaccharides work?',
  opts: ['Kill microorganisms', 'Function as prebiotics', 'Help protein absorption', 'Help lactose digestion', 'Prevent infant colic'],
  expl: 'Human milk oligosaccharides work as prebiotics.',
  note: "5 options printed. DEFECTIVE OPTION LETTERING, recorded not corrected: the ladder prints A, B, C, D and then C again -- the fifth option Prevent infant colic is labelled C, repeating the third option's letter, and no E is printed on the sheet. All five options are staged in printed order and the ladder keeps its length; key 1 is the second option, Function as prebiotics, which is where the yellow highlight sits, and the box agrees. Printed number 59 matches n. Red folio 1762 matches the PDF page. ESCALATED to a 600 dpi crop of the whole ladder specifically to confirm the repeated C is really a C and not a smudged E -- confirmed at 600 dpi as the letter C. No numerals on the page." }

{ n: 60, pr: 60, p: 1764,
  key: 3,
  stem: 'What is the most common cause of gastroenteritis in children?',
  opts: ['Shigella', 'Giardia', 'Cryptosporidium', 'Viruses', 'Campylobacter jejuni'],
  expl: '',
  note: "5 options printed (A-E). Yellow highlight on D (Viruses). NO explanation box is printed on this sheet, so expl is empty -- the second such page in this half, after n42. Printed number 60 matches n. Red folio 1764 matches the PDF page. No numerals on the page, so nothing was escalated. The lower half of the question panel is blank where a box would sit." }
