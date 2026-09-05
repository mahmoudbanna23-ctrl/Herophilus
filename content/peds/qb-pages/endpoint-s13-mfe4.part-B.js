/* ENDPOINT part1 -- Model Final Exam 4 -- staging half B (questions n21..n40).
   Source: "Pediatrics endpoint part1.pdf" (Semester 8/Pedo/Questions/), answered pages
   p:1686,1688,1690,1692,1694,1696,1698,1700,1702,1704,1706,1708,1710,1712,1714,1716,1718,1720,
   1722,1724 -- task-supplied list, measured from content/peds/qb-pages/ocr/ep1/index.json on
   2026-09-05 (kind == "answered" within pp.1644-1804; 80 answered sheets, every gap exactly 2).
   That index counts SHEETS, not printed numbers, so the printed question number was read off
   every page and recorded in each entry's note.
   Every question in this exam prints twice (a blank exam sheet, then an answered sheet carrying
   the yellow-highlighted key and usually a bordered explanation box); staging is from the
   ANSWERED sheets ONLY. The blank printings were neither rendered nor read.
   PDF is 1:1, NOT 2-up -- one large-type question per sheet. Confirmed on every page read here:
   the red folio at the foot of each sheet prints that sheet's own PDF page number.
   key is a ZERO-BASED INDEX into opts (integer), never a letter. key follows the YELLOW
   HIGHLIGHT; where the explanation box disagrees with the highlight, the key stays on the
   highlight and the disagreement is recorded in the note. Contradictions are recorded, never
   corrected.
   Paediatric surgery topics (gastroschisis, atresias, Hirschsprung, intussusception, hernias,
   Wilms, neuroblastoma, urological anomalies) are IN SCOPE for this book and are staged.
   OCR at content/peds/qb-pages/ocr/ep1/p<NNNN>.txt was NOT opened during this staging pass.
   Nothing here comes from OCR text; every character was read off a rendered page image.
   n is the question's position in the SECTION (21..40 here). pr is the PRINTED exam number.
   Where they disagree, n is kept and the disagreement is recorded in that entry's note.
   File format: bare { ... } fragments separated by one blank line -- no array wrapper and no
   commas between entries. `node --check` always fails on this shape and that failure is
   meaningless; validated with tools/bank-harness/check-part-ep.js instead.

   CLOSED 2026-09-05 -- 20/20 entries staged (n21..n40, pp.1686-1724), each appended immediately
   after its page was read and the file re-validated along the way. Final run: 20 entries,
   n 21..40, pp.1686-1724, OK.
   Measured, not assumed: every one of the 20 pages carried a printed exam number, the numbering
   ran 21..40 with NO skip and NO repeat, and it agreed with n on every single page -- so pr
   equals n throughout and no disagreement had to be recorded. The red folio matched the PDF page
   number on all 20 sheets. The supplied page list was exact: every listed page was an ANSWERED
   sheet carrying a yellow highlight, and the printed numbers ran consecutively across the gaps of
   two, so no page is missing from the list and none is a blank printing.
   Option counts, and they are NOT uniform in this half: 4 options (A-D) on 9 pages -- n21, n23,
   n26, n27, n28, n30, n34, n39, n40 -- and 5 options (A-E) on 11 pages -- n22, n24, n25, n29,
   n31, n32, n33, n35, n36, n37, n38. The all-four-option pattern reported for half A does NOT
   hold here; the ladder was counted on every page.
   19 of 20 pages printed an explanation box. n33 (p.1710) prints NO box and carries expl:''.
   No page printed a figure, and no box overflowed onto a later sheet.
   Key distribution: index 0 x10, index 1 x4, index 2 x2, index 3 x3, index 4 x1.
   Numerals ESCALATED to 600 dpi band crops -- four of them:
     p.1692 box, the neonatal varicella window   (crop1692-1692.png) -- 5 days before, 2 days after
     p.1700 option ladder, age range and volume  (crop1700-1700.png) -- 9 and 14 years, >4 ml
     p.1714 box, the two virus serotypes         (crop1714-1714.png) -- HHV6 or HHV7
     p.1718 laboratory lines, counts/units/exponent (crop1718-1718.png) -- 95 lymphocytes,
       10 neutrophils, 0 red blood cells/mm SUPERSCRIPT 3, protein 2.2 g/L, CSF glucose
       1.3 mmol/L, blood glucose 6.3 mmol/L
   Everything else numeric on these pages sat in the large question type (ages, months, centiles,
   the 24-hour timing on n30) where a 150 dpi read is unambiguous, and none of it was a dose, a
   unit-bearing threshold or an exponent.
   Recorded, never corrected -- five things this half prints that a reader will trip on:
     n24 (p.1692) stem says the mother developed chickenpox 1 day AFTER delivery while the box
       explains transmission through the placenta during delivery
     n28 (p.1700) asks for the INCORRECT statement yet prints All of the above as option D
     n31 (p.1706) prints the SAME explanation box, word for word, as n30 (p.1704)
     n32 (p.1708) prints options D and E IDENTICALLY, both Hepatitis A vaccine; both are staged,
       so the ladder stays five long and the key index still lands on Rotavirus vaccine
     n40 (p.1724) box says Low (or normal) calcium where every option begins Low calcium
   In every case the key stayed on the yellow highlight.
   Paediatric surgery staged as in scope: n32 (intussusception after rotavirus vaccine) and the
   Wilms tumour distractor in n25.
*/

{ n: 21, pr: 21, p: 1686,
  key: 0,
  stem: 'Which of the following is the most common complication of meconium aspiration?',
  opts: ['Pneumothorax', 'Bacterial pneumonia', 'Sepsis', 'None of the above'],
  expl: 'Among the complications of meconium aspiration, pneumothorax has the highest incidence.',
  note: 'Four options printed (A-D). Yellow highlight on A, Pneumothorax, bold and underlined; the box agrees. Printed number 21 matches n. Red folio 1686. No numerals in stem, options or box, so nothing needed escalation. Read at 150 dpi.' }

{ n: 22, pr: 22, p: 1688,
  key: 1,
  stem: "What is appropriate about the role of vitamins in children's nutrition?",
  opts: ['Vitamin K main function is synthesis of RBCs', 'Vitamin C deficiency can cause mucosal bleeding and petechiae', 'Folic has no role in blood production', 'Vitamin B12 deficiency is common in infants', 'Vitamin E deficiency leads to decreased clot generation'],
  expl: 'Note: Vitamin C deficiency (Scurvy) → Petechiae and bruising, gingivitis, coiled hair, poor growth, irritability; painful joints, impaired wound healing.',
  note: "FIVE options printed (A-E), not four -- this page breaks the all-four-option pattern reported for half A. Yellow highlight on B, bold and underlined; the box agrees. Printed number 22 matches n. Red folio 1688. Only numeral is the vitamin designation B12 in option D, read at 150 dpi and unambiguous in the large stem type; no dose, unit or exponent on the page, so no 600 dpi crop was needed. The box prints a right arrow between (Scurvy) and Petechiae; it is kept as the arrow character." }

{ n: 23, pr: 23, p: 1690,
  key: 3,
  stem: 'Breast milk is deficient in which of the following nutritional elements?',
  opts: ['Carbohydrates', 'Milk oligosaccharides', 'Secretory immunoglobulin A', 'Vitamin D'],
  expl: 'Note: Breastmilk is deficient in vitamin D, vitamin K and iron.',
  note: 'Four options printed (A-D). Yellow highlight on D, bold and underlined; the box agrees. Printed number 23 matches n. Red folio 1690. No numerals anywhere on the page, so nothing needed escalation. Read at 150 dpi.' }

{ n: 24, pr: 24, p: 1692,
  key: 4,
  stem: 'Mohammed is born 24 hours ago. His mother developed chickenpox (varicella) 1 day after his delivery. what is the best advice you could give?',
  opts: ['Breastfeeding is contraindicated', 'Neonatal infection is unlikely due to transplacentally acquired antibodies', 'Reassure and discharge home asking mother to return if the baby develops symptoms.', "The infant's varicella antibody status should be checked", 'There is a significant risk of serious neonatal infection'],
  expl: 'Note: Since the mother developed chickenpox, she is not immune against varicella zoster virus, which means that the child could have been infected from his mother through the placenta during delivery. Neonates born from 5 days before to up to 2 days after the onset of maternal rash may exhibit progressive severe neonatal varicella disease.',
  note: "FIVE options printed (A-E). Yellow highlight on E, bold and underlined; the box agrees. Printed number 24 matches n. Red folio 1692. ESCALATED to a 600 dpi band crop of the small-print box (crop1692-1692.png) because it carries a day window: confirmed 5 days before and up to 2 days after. Stem numerals 24 hours and 1 day are in the large type and were read at 150 dpi. Recorded, not corrected: the stem says the mother developed chickenpox 1 day AFTER delivery, while the box explains transmission through the placenta during delivery; the box also reads as though maternal chickenpox means she is not immune. Both are the printed wording and are left exactly as printed." }

{ n: 25, pr: 25, p: 1694,
  key: 1,
  stem: 'Ellie is a 4-year-old girl who has been complaining of pain in her tummy for a month. It is worse when she goes to the toilet; her stools are firm and she opens her bowels only every 2–3 days. She has not had any vomiting. For the last 2 weeks her stools have become loose. On examination she has a mass in the left iliac fossa. What is the most likely diagnosis?',
  opts: ['Appendix mass', 'Constipation', 'Gastroenteritis', 'Inguinal hernia', 'Wilms tumour'],
  expl: 'Note: Abdominal pain + firm stool + imapcted mass in left iliac fossa → Constipation.',
  note: 'FIVE options printed (A-E). Yellow highlight on B, bold and underlined; the box agrees. Printed number 25 matches n. Red folio 1694. Numerals are all in the large stem type and were read at 150 dpi: 4-year-old, every 2-3 days, last 2 weeks. None is a dose, unit, exponent or lab threshold, so none was escalated. The interval between 2 and 3 is printed as an en dash and is kept as an en dash. Layout: the explanation box sits to the RIGHT of options C and D rather than below the ladder, so the ladder must be read down the left margin past the box. Option E, Wilms tumour, is a paediatric surgery distractor and is staged as printed.' }

{ n: 26, pr: 26, p: 1696,
  key: 0,
  stem: 'Which of the following is the most important mode of transmission of varicella zoster infection?',
  opts: ['Airborne respiratory droplets', 'Direct contact with the lesion', 'Ingestion of contaminated food', 'None of the above'],
  expl: 'Note: The most important mode of transmission of varicella zoster infection → Airborne respiratory droplets.',
  note: 'Four options printed (A-D). Yellow highlight on A, bold and underlined; the box agrees. Printed number 26 matches n. Red folio 1696. No numerals anywhere on the page, so nothing needed escalation. Read at 150 dpi.' }

{ n: 27, pr: 27, p: 1698,
  key: 1,
  stem: 'Which of the following statements is true about familial short stature?',
  opts: ['It is usually associated with obesity', "Child's height fluctuates 2 centiles between mid-parental height", 'It is a form of delay in attaining normal height', 'It leads to achieving normal height eventually'],
  expl: "Note: In familial short stature, child's height fluctuates 2 centiles between mid-parental height. Familial short stature is associated with being underweight (not obesity).",
  note: "Four options printed (A-D). Yellow highlight on B, bold and underlined; the box agrees. Printed number 27 matches n. Red folio 1698. The only numeral is the centile count 2, and it is printed TWICE -- once in the large-type option B and once in the small-print box -- and the two agree, so the large-type printing carried the read and no 600 dpi crop was needed. It is a centile count, not a dose, unit or exponent. Read at 150 dpi." }

{ n: 28, pr: 28, p: 1700,
  key: 0,
  stem: 'Which of the following is incorrect regarding normal puberty of boys (males)?',
  opts: ['It is characterized by early closure of epiphyses', 'It starts between the age of 9 and 14 years', 'The first sign of male puberty is testicular volume >4 ml', 'All of the above'],
  expl: 'Note: Normal puberty in boys is not characterized by early epiphyseal fusion.',
  note: 'Four options printed (A-D). Yellow highlight on A, bold and underlined; the box agrees. Printed number 28 matches n. Red folio 1700. ESCALATED to a 600 dpi crop of the whole option ladder (crop1700-1700.png) because the ladder carries an age range and a volume threshold with a unit: confirmed the age of 9 and 14 years, and testicular volume >4 ml -- the ml unit and the greater-than sign both verified at 600 dpi. Recorded, not corrected: the stem asks for the INCORRECT statement, so option D, All of the above, cannot be consistent with a single highlighted key; the highlight is unambiguously on A and the key stays there.' }

{ n: 29, pr: 29, p: 1702,
  key: 0,
  stem: 'Rodney, a boisterous 2-year-old, has had diarrhoea for the last 3 months. He produces up to four stools a day, which are loose, brown in colour and usually contain undigested food. The rest of the family are well. He has never been abroad. Examination is normal and his personal child health record shows that he is growing along the 50th centile. What is the most likely diagnosis?',
  opts: ['Chronic non-specific diarrhoea', 'Coeliac disease', "Cow's milk protein allergy", 'Inflammatory bowel disease', 'Lactose intolerance'],
  expl: 'Note: In chronic non-specific diarrhoea there are loose stools with undigested food present. The children grow well and have plenty of energy.',
  note: 'FIVE options printed (A-E). Yellow highlight on A, bold and underlined; the box agrees. Printed number 29 matches n. Red folio 1702. Numerals are all in the large stem type and were read at 150 dpi: 2-year-old, last 3 months, the 50th centile. The stool frequency is printed as the word four, not a digit. None is a dose, unit, exponent or lab threshold, so none was escalated. Layout: the explanation box sits to the RIGHT of options C and D rather than below the ladder.' }

{ n: 30, pr: 30, p: 1704,
  key: 1,
  stem: 'Which of the following statements is true regarding child vaccination?',
  opts: ['In case of missing a vaccine, the whole course needs to be restarted', 'OPV vaccine should not be given to a child whose brother suffers leukemia', 'IPV is given within the first 24 hours after birth', 'All of the above'],
  expl: 'Note: OPV is a live attenuated viral vaccine that is contraindicated in children with immunodeficiency or to children who are close contacts of immunodeficient patients due to risk of transmission.',
  note: 'Four options printed (A-D). Yellow highlight on B, bold and underlined, and the highlight wraps onto a second line to cover the word leukemia; the box agrees. Printed number 30 matches n. Red folio 1704. The only numeral is 24 hours in option C, in the large type, read at 150 dpi; it is a timing, not a dose or an exponent, so it was not escalated.' }

{ n: 31, pr: 31, p: 1706,
  key: 0,
  stem: 'A 5-year-old girl is receiving induction chemotherapy for acute lymphoblastic leukemia. Which of the following vaccines is contraindicated to be given to her 4-month-old sibling?',
  opts: ['Oral polio vaccine', 'H. Influenza vaccine', 'Hepatitis B vaccine', 'Pneumococcal vaccine', 'DPT vaccine'],
  expl: 'Note: OPV is a live attenuated viral vaccine that is contraindicated in children with immunodeficiency or to children who are close contacts of immunodeficient patients due to risk of transmission.',
  note: 'FIVE options printed (A-E). Yellow highlight on A, bold and underlined; the box agrees. Printed number 31 matches n. Red folio 1706. Stem numerals 5-year-old and 4-month-old are in the large type and were read at 150 dpi; neither is a dose, unit or exponent. Noted, not corrected: this page prints the SAME explanation box, word for word, as n30 on p.1704.' }

{ n: 32, pr: 32, p: 1708,
  key: 2,
  stem: 'Increased risk for intussusception was observed as a rare complication following immunization with which vaccine?',
  opts: ['IPV', 'OPV', 'Rotavirus vaccine', 'Hepatitis A vaccine', 'Hepatitis A vaccine'],
  expl: "Note: There's an association between a rotavirus vaccine and an increased risk of intussusception.",
  note: 'FIVE options printed (A-E). Yellow highlight on C, bold and underlined; the box agrees. Printed number 32 matches n. Red folio 1708. No numerals anywhere on the page, so nothing needed escalation; read at 150 dpi. RECORDED, NOT CORRECTED: options D and E are printed IDENTICALLY, both reading Hepatitis A vaccine. Both are staged as printed and no letter is dropped, so the ladder stays five long and the zero-based key index 2 still lands on Rotavirus vaccine. Intussusception is paediatric surgery and is in scope for this book.' }

{ n: 33, pr: 33, p: 1710,
  key: 0,
  stem: 'A 5-year-old child presents with a maculopapular rash, high fever, cough, and conjunctivitis. The rash started behind the ears and spread to the trunk and extremities. What is the most likely complication of this condition?',
  opts: ['Subacute sclerosing panencephalitis', 'Acute glomerulonephritis', 'Myocarditis', 'Guillain-Barré syndrome', 'Rheumatic fever'],
  expl: '',
  note: 'FIVE options printed (A-E). Yellow highlight on A, bold and underlined. THIS PAGE PRINTS NO EXPLANATION BOX -- the sheet is blank below the option ladder, so expl is the empty string and there is nothing to agree or disagree with the highlight. Printed number 33 matches n. Red folio 1710. The only numeral is 5-year-old in the large stem type, read at 150 dpi; not a dose, unit or exponent, so nothing was escalated. Option D prints an accented e in Guillain-Barré and it is kept accented.' }

{ n: 34, pr: 34, p: 1712,
  key: 0,
  stem: 'A 18-month-old infant developed manifestations of allergy (hives, swelling of the lips, itching) after eating a peanut in a party with his parents. He also suffered gastrointestinal manifestations. Which of the following would be found in that infant?',
  opts: ['Increased eosinophils', 'Increased WBCs', 'Reduced RBCs', 'Increased neutrophils'],
  expl: 'Note: Allergy → Increased eosinophils.',
  note: 'Four options printed (A-D). Yellow highlight on A, bold and underlined; the box agrees. Printed number 34 matches n. Red folio 1712. The only numeral is 18-month-old in the large stem type, read at 150 dpi; not a dose, unit or exponent, so nothing was escalated. The stem opens "A 18-month-old" rather than "An 18-month-old"; transcribed as printed.' }

{ n: 35, pr: 35, p: 1714,
  key: 2,
  stem: 'A 6-month-old female infant is admitted with a 4-day history of high fever with no focus. A full septic screen is performed which yields negative cultures and normal inflammatory markers. On day 7 of her illness she develops a blanching morbilliform rash all over her body and her fever subsides. What is the most likely diagnosis?',
  opts: ['Measles', 'Rubella', 'Roseola infantum', 'Scarlet fever', 'Chicken pox'],
  expl: 'Note: Roseola infantum. Also known as ‘sixth disease’. This is commonly caused by HHV6 or HHV7 and is a well recognized cause of febrile convulsions.',
  note: 'FIVE options printed (A-E). Yellow highlight on C, bold and underlined; the box agrees. Printed number 35 matches n. Red folio 1714. ESCALATED to a 600 dpi crop of the small-print box (crop1714-1714.png) because it carries two virus serotype numerals that a 150 dpi read could transpose: confirmed HHV6 and HHV7, in that order. Stem numerals 6-month-old, 4-day history and day 7 are in the large type and were read at 150 dpi. The box prints curly single quotes around sixth disease and they are kept as printed. Layout: the box sits to the RIGHT of options C and D rather than below the ladder.' }

{ n: 36, pr: 36, p: 1716,
  key: 3,
  stem: 'A 6-month-old girl is seen in local health center for regular vaccination. Her weight is below the 3rd centile for age and sex, and her height is in the 75th centile. She is active and has attained normal developmental milestones so far. What would be your next step?',
  opts: ['Vaccinate the child and give a follow-up appointment after 6 months', 'Refer immediately to the nearest hospital for admission and evaluation', 'Do full blood count, liver and renal functions', 'Obtain a detailed nutritional history', 'Send for chromosomal analysis'],
  expl: 'Note: Normal height + Underweight → Assess nutrition.',
  note: 'FIVE options printed (A-E). Yellow highlight on D, bold and underlined; the box agrees. Printed number 36 matches n. Red folio 1716. Numerals 6-month-old, below the 3rd centile, the 75th centile and after 6 months are all in the large stem and option type and were read at 150 dpi, where 3rd and 75th are unambiguous; none is a dose, unit or exponent, so none was escalated.' }

{ n: 37, pr: 37, p: 1718,
  key: 3,
  stem: 'Graham is 5 years old and has had an intermittent fever for 4 weeks. He presents to the Emergency Department with a headache and neck stiffness. A CT scan is performed, which is normal. A lumbar puncture is performed. You receive the following result from the laboratory: CSF microscopy: 95 lymphocytes, 10 neutrophils and 0 red blood cells/mm³ ● CSF protein: 2.2 g/L ● CSF glucose: 1.3 mmol/L ● Blood glucose: 6.3 mmol/L What is the most likely diagnosis?',
  opts: ['Ascending polyneuritis (Guillain–Barré syndrome)', 'Bacterial meningitis', 'Blood-stained tap', 'Tuberculosis meningitis', 'Viral meningitis'],
  expl: 'Note: Increased lymphocytes + decreased glucose + increased protein → TB meningitis.',
  note: 'FIVE options printed (A-E). Yellow highlight on D, bold and underlined; the box agrees. Printed number 37 matches n. Red folio 1718. ESCALATED to a 600 dpi crop of the two laboratory lines (crop1718-1718.png) because they carry cell counts, an EXPONENT and three unit-bearing values: confirmed 95 lymphocytes, 10 neutrophils, 0 red blood cells/mm with a SUPERSCRIPT 3 (mm cubed, not mm3 flattened), CSF protein 2.2 g/L, CSF glucose 1.3 mmol/L, Blood glucose 6.3 mmol/L. Stem numerals 5 years old and 4 weeks are large type at 150 dpi. Layout: the three CSF/blood values sit on one line separated by solid round red bullet markers, not on separate lines; they are joined into the stem here with a bullet character between them, and the whole lab block sits between the vignette and the lead-in question. The explanation box sits to the RIGHT of options B and C rather than below the ladder. Noted: option A prints an EN DASH in Guillain–Barré on this page, where n33 on p.1710 printed a hyphen; each is kept as its own page prints it.' }

{ n: 38, pr: 38, p: 1720,
  key: 0,
  stem: 'Which of the following is a characteristic of lactose intolerance in children?',
  opts: ['It is often secondary to viral gastroenteritis', 'It always presents with nausea and vomiting', 'Mucus in stools is a usual finding', 'Lactase supplements are essential in treatment', 'A congenital form is common'],
  expl: 'Note: Lactose intolerance in children is often secondary to viral gastroenteritis (Temporary secondary acquired lactase deficiency).',
  note: 'FIVE options printed (A-E). Yellow highlight on A, bold and underlined; the box agrees. Printed number 38 matches n. Red folio 1720. No numerals anywhere on the page, so nothing needed escalation. Read at 150 dpi.' }

{ n: 39, pr: 39, p: 1722,
  key: 0,
  stem: 'Head circumference of a child was found to be on the 50th centile. 6 months later, it became on the 97th centile. Which of the following is the best next step in management?',
  opts: ['Order MRI head (MRI brain)', 'Measure the mid-parental centile', 'Take a detailed history', 'Do nothing'],
  expl: 'Note: Abrupt increase in head circumference is an indication for brain MRI.',
  note: 'Four options printed (A-D). Yellow highlight on A, bold and underlined; the box agrees. Printed number 39 matches n. Red folio 1722. Numerals 50th centile, 6 months and 97th centile are all in the large stem type and were read at 150 dpi, where each is unambiguous; none is a dose, unit or exponent, so none was escalated.' }

{ n: 40, pr: 40, p: 1724,
  key: 0,
  stem: 'A 2-year-old child presented with convulsions. Examination revealed craniotabes and wide anterior fontanelle. Which of the following would be the most likley serum findings in that patient?',
  opts: ['Low calcium, low phosporus, high alkaline phosphatase', 'Low calcium, low phosporus, low alkaline phosphatase', 'Low calcium, high phosporus, high alkaline phosphatase', 'Low calcium, high phosporus, low alkaline phosphatase'],
  expl: 'Note: Lab findings in case of Rickets: Low (or normal) calcium, low phosporus, high alkaline phosphatase.',
  note: 'Four options printed (A-D). Yellow highlight on A, bold and underlined; the box agrees. Printed number 40 matches n, and it is the last question of this half. Red folio 1724. The only numeral is 2-year-old in the large stem type, read at 150 dpi; the option ladder is entirely qualitative (low/high), carries no figure, unit or exponent, and so needed no escalation. Noted, not corrected: the box widens the key by saying Low (or normal) calcium while every printed option begins Low calcium; the highlight is on A and the key stays there.' }
