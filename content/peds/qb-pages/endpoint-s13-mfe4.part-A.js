/* ENDPOINT part1 -- Model Final Exam 4 -- staging half A (questions n1..n20).
   Source: "Pediatrics endpoint part1.pdf" (Semester 8/Pedo/Questions/), answered pages
   p:1646,1648,1650,1652,1654,1656,1658,1660,1662,1664,1666,1668,1670,1672,1674,1676,1678,1680,
   1682,1684 -- task-supplied list, measured from content/peds/qb-pages/ocr/ep1/index.json on
   2026-09-05 (kind == "answered" within pp.1644-1804; 80 answered sheets, every gap exactly 2).
   That index counts SHEETS, not printed numbers, so the printed question number was read off
   every page and recorded in each entry's note.
   Every question in this exam prints twice (a blank exam sheet, then an answered sheet carrying
   the yellow-highlighted key and usually a bordered explanation box); staging is from the
   ANSWERED sheets ONLY. The blank printings were neither rendered nor read.
   PDF is 1:1, NOT 2-up -- one large-type question per sheet. Confirmed on the first page read:
   the red folio at the foot of PDF page 1646 prints "1646". A PDF page number IS the printed page.
   key is a ZERO-BASED INDEX into opts (integer), never a letter. key follows the YELLOW
   HIGHLIGHT; where the explanation box disagrees with the highlight, the key stays on the
   highlight and the disagreement is recorded in the note. Contradictions are recorded, never
   corrected.
   Paediatric surgery topics (gastroschisis, atresias, Hirschsprung, intussusception, hernias,
   Wilms, neuroblastoma, urological anomalies) are IN SCOPE for this book and are staged.
   OCR at content/peds/qb-pages/ocr/ep1/p<NNNN>.txt was NOT opened during this staging pass.
   Nothing here comes from OCR text; every character was read off a rendered page image.
   n is the question's position in the SECTION (1..20 here). pr is the PRINTED exam number.
   Where they disagree, n is kept and the disagreement is recorded in that entry's note.
   File format: bare { ... } fragments separated by one blank line -- no array wrapper and no
   commas between entries. `node --check` always fails on this shape and that failure is
   meaningless; validated with tools/bank-harness/check-part-ep.js instead.

   CLOSED 2026-09-05 -- 20/20 entries staged (n1..n20, pp.1646-1684), each appended immediately
   after its page was read and the file re-validated along the way. Final run: 20 entries,
   n 1..20, pp.1646-1684, OK.
   Measured, not assumed: every one of the 20 pages carried a printed exam number, the numbering
   ran 1..20 with NO skip and NO repeat, and it agreed with n on every single page -- so pr equals
   n throughout and no disagreement had to be recorded. The red folio matched the PDF page number
   on all 20 sheets. Every page printed exactly 4 options (A-D); no page in this half printed 5.
   Every page printed an explanation box, so no entry has expl:''. No page printed a figure, and
   no box overflowed onto a later sheet. Key distribution: index 0 x9, index 1 x6, index 2 x3,
   index 3 x2.
   Numerals ESCALATED to 600 dpi band crops -- six of them, all on this book's small-print
   explanation boxes or on an all-numeric option ladder:
     p.1662 box, "the first 2 years"          (crop1662-1662.png)
     p.1664 stem, "<0.4th" and "25th percentile" (crop1664-1664.png)
     p.1670 box, "children up to 5 years"     (crop1670-1670.png)
     p.1674 option ladder + box, "3-6 days" / "1-2 weeks" / "3-6 weeks" / "day 5; average: 3-6
            days" -- options B and D differ only in the UNIT (crop1674-1674.png)
     p.1680 box, "< 3 months old"             (crop1680-1680.png)
     p.1682 box, "about 30% of eventual height" (crop1682-1682.png)
     p.1684 box, "IGF-1"                      (crop1684-1684.png)
   Everything else was read off the 150 dpi full page, which this book supports because it prints
   one large-type question per sheet. Not one page in this half printed a drug dose or a dose
   unit; where a drug is named (penicillin, adrenaline, vitamin D) the book gives no quantity.
   Contradictions recorded in notes and NOT corrected, keys left on the highlight: n2 (box omits
   infantile hemangioma), n5 (two options name the same coronal deformity; "lamdoid" vs
   "Lambdoid"), n6 (box argues from faltering growth that the stem excludes), n8 (stem describes
   scarlet fever, box answers on streptococcal tonsillitis), n13 (UK recommendation in an Egyptian
   exam), n15 (stem asks about Egypt, box gives generic timing), n16 (box list order), n20 (box
   names nutrition as a condition alongside GH).
*/

{ n: 1, pr: 1, p: 1646,
  key: 1,
  stem: 'Which of the following types of food is contraindicated and has to be avoided in a child under one year of age?',
  opts: ['Eggs', 'Honey', 'Peanut', 'All of the above'],
  expl: 'Foods high in salt and sugar should be avoided and honey must not be given until 1 year of age because of risk of infantile botulism.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1646.png); this book prints one large-type question per sheet, so the type is crisp at that scale. Numerals on this page: "one year of age" in the stem (printed as a word) and "1 year of age" in the box -- both read at 150 dpi, neither escalated, as a small-print box figure that is a plain single digit next to the spelled-out stem value cross-checks itself. No dose, unit or exponent on the page. Key: the yellow highlight sits on option B, "Honey" (highlighted, bold, underlined) -> zero-based index 1. The explanation box agrees with the highlight. Printed number "1." matches n1. Red folio "1646" printed in red at the foot of the page confirms the PDF page number IS the printed page -- the book is 1:1, not 2-up. Layout otherwise unremarkable.' }

{ n: 2, pr: 2, p: 1648,
  key: 3,
  stem: 'Which of the following neonatal conditions is known to resolve spontaneously?',
  opts: ['Talipes equinovarus', 'Port-Wine stain', 'Infantile hemangioma', 'Umbilical hernia'],
  expl: 'Note: Most important findings in the newborn that resolve spontaneously: •Umbilical hernia •Erythema toxicum •Milia •Breast enlargement •Mongolian blue spots •Cephalhematoma & caput succedaneum',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1648.png). No numerals of any kind on this page -- no dose, unit, exponent, lab threshold or numeric option ladder -- so nothing was escalated to 600 dpi. Key: the yellow highlight sits on option D, "Umbilical hernia" (highlighted, bold, underlined) -> zero-based index 3. The explanation box agrees: its first bullet is "Umbilical hernia". Printed number "2." matches n2. Red folio "1648" at the foot. Box layout: the word "Note:" and the lead sentence are printed in red, followed by a six-item bulleted list in black; the bullets are set as a vertical list and are transcribed here separated by their bullet characters on one line. Note the box lists infantile hemangioma nowhere even though hemangiomas do involute -- recorded, not corrected; the key stays on the highlight.' }

{ n: 3, pr: 3, p: 1650,
  key: 1,
  stem: "A 2-year-old child was brought to the pediatric ED by his parents who report that they noticed their child taking his grandmother's tablets (for treating her heart disease) half an hour ago. Which of the following is true regarding the management of this child?",
  opts: ['Activated charcoal can not be used', 'Gastric lavage and induced vomiting are not recommended (or contraindicated)', 'Induced vomiting is recommended', 'All of the above'],
  expl: 'Activated charcoal can be effective in reducing absorption of toxic agent if administered within 1 h of ingestion. Gastric lavage and induced vomiting are no longer recommended.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1650.png). Numerals: "2-year-old" in the stem, read at 150 dpi in large type; "within 1 h of ingestion" in the small-print box -- the unit "h" and the figure 1 were checked against the surrounding word shapes at 150 dpi and are unambiguous, so no 600 dpi crop was needed. No dose, exponent or lab threshold on the page. Key: the yellow highlight sits on option B, "Gastric lavage and induced vomiting are not recommended (or contraindicated)" (highlighted, bold, underlined, and it wraps onto a second line with the highlight continuing) -> zero-based index 1. The explanation box agrees with the highlight. Printed number "3." matches n3. Red folio "1650" at the foot. Stem is a four-line vignette; option B is the only option that wraps.' }

{ n: 4, pr: 4, p: 1652,
  key: 0,
  stem: 'Which of the following is a drawback (a disadvantage) of breastfeeding?',
  opts: ['It is contraindicated in certain metabolic / genetic disorders', 'It carries a high risk of developing gastroenteritis', 'It increases maternal weight gain', 'It increases the risk of hypertension later in life'],
  expl: 'In certain rare metabolic disorders (such as galactosaemia, glucose galactose malabsorption, certain long chain fatty acid oxidation disorders), breastfeeding is contraindicated.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1652.png). No numerals of any kind on this page -- no dose, unit, exponent, lab threshold or numeric option ladder -- so nothing was escalated to 600 dpi. Key: the yellow highlight sits on option A, "It is contraindicated in certain metabolic / genetic disorders" (highlighted, bold, underlined) -> zero-based index 0. The explanation box agrees with the highlight. Printed number "4." matches n4. Red folio "1652" at the foot. The box sits low on the page with a wide gap above it; the leading space inside the box before "In certain" belongs to the source and is not reproduced in expl.' }

{ n: 5, pr: 5, p: 1654,
  key: 2,
  stem: 'Which of the following would be the effect of premature fusion of the lamdoid suture (localized craniosynostosis of lamdoid suture)?',
  opts: ['Long narrow skull', 'Asymmetrical skull', 'Flattening of the back of skull', 'Plagiocephaly'],
  expl: 'Note: Localized craniosynostosis: •Sagittal suture → long narrow skull •Coronal suture → asymmetrical skull •Lambdoid suture → flattening of skull',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1654.png). No numerals of any kind on this page -- no dose, unit, exponent, lab threshold or numeric option ladder -- so nothing was escalated to 600 dpi. Key: the yellow highlight sits on option C, "Flattening of the back of skull" (highlighted, bold, underlined) -> zero-based index 2. The explanation box agrees: its third bullet reads "Lambdoid suture → flattening of skull". Printed number "5." matches n5. Red folio "1654" at the foot. Box layout: "Note:" in black, "Localized craniosynostosis:" in red, then three black bullets each using a printed right-arrow glyph, transcribed here with that arrow character on one line. The stem spells the suture "lamdoid" twice while the box spells it "Lambdoid" -- transcribed as printed in each place, not harmonised. The stem also offers both "Asymmetrical skull" (B) and "Plagiocephaly" (D), which name the same coronal deformity, while the highlighted C describes the lambdoid result -- recorded, not corrected; the key stays on the highlight.' }

{ n: 6, pr: 6, p: 1656,
  key: 0,
  stem: 'A young girl is brought by her mother who says that she is constantly screaming. Her mother reports that she is formula-fed, has poor feeding and she occasionally passes blood streaked stool. Her weight and height are within normal range. What is your diagnosis?',
  opts: ['Cow’s milk protein allergy', 'Inherited genetic disorder', 'Down’s syndrome', 'Celiac disease'],
  expl: 'This case is solved by exclusion. Cow’s milk protein allergy can cause faltering growth. Also, it causes impaired feeding and can cause blood in stool.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1656.png). No numerals of any kind on this page -- no age, dose, unit, exponent or lab threshold ("A young girl", no figure given) -- so nothing was escalated to 600 dpi. Key: the yellow highlight sits on option A, "Cow’s milk protein allergy" (highlighted, bold, underlined) -> zero-based index 0. The explanation box agrees with the highlight. Printed number "6." matches n6. Red folio "1656" at the foot. The page prints curly (typographic) apostrophes in "Cow’s" and "Down’s"; these are reproduced as printed. Contradiction recorded, not corrected: the stem states the weight and height are within normal range, while the box justifies the answer by saying cow’s milk protein allergy "can cause faltering growth" -- the box argues from a feature the stem explicitly excludes. The key stays on the highlight.' }

{ n: 7, pr: 7, p: 1658,
  key: 0,
  stem: 'Which of the following is the most important risk factor for intraventricular hemorrhage in neonates?',
  opts: ['Extreme prematurity', 'Pneumothorax', 'Postmaturity', 'None of the above'],
  expl: 'The most important risk factor for intraventricular hemorrhage in neonates is extreme prematurity.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1658.png). No numerals of any kind on this page -- no dose, unit, exponent, lab threshold or numeric option ladder -- so nothing was escalated to 600 dpi. Key: the yellow highlight sits on option A, "Extreme prematurity" (highlighted, bold, underlined) -> zero-based index 0. The explanation box agrees with the highlight and simply restates the stem. Printed number "7." matches n7. Red folio "1658" at the foot. Layout unremarkable.' }

{ n: 8, pr: 8, p: 1660,
  key: 0,
  stem: 'A 2-year-old child with fever, rash, strawberry tongue and circumoral pallor. Which of the following is the line of treatment of choice for this child?',
  opts: ['Penicillin', 'Acetaminophen', 'Amoxicillin', 'Metronidazole'],
  expl: 'Antibiotics such as penicillin V or erythromycin may hasten recovery from streptococcal tonsillitis.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1660.png). The only numeral on the page is "2-year-old" in the large-type stem, read directly at 150 dpi; no dose, unit, exponent or lab threshold is printed, so nothing was escalated to 600 dpi. The box prints "penicillin V" -- the V is a Roman-numeral-style drug designation, not a quantity; it was checked at 150 dpi against the surrounding lowercase and is unambiguous. Key: the yellow highlight sits on option A, "Penicillin" (highlighted, bold, underlined) -> zero-based index 0. The explanation box agrees with the highlight. Printed number "8." matches n8. Red folio "1660" at the foot. The stem describes scarlet fever without naming it and the box answers about streptococcal tonsillitis; recorded, not corrected.' }

{ n: 9, pr: 9, p: 1662,
  key: 3,
  stem: 'A 4-month old child presents to the clinic with his mother complaining about his small size. She reports that he was born prematurely and he is formula fed. Otherwise, he appears normal. What should you do?',
  opts: ['Encourage mother to breast feed', 'Increase formula feeding', 'Introduce solid food early', 'Account for prematurity in his growth before taking additional steps'],
  expl: 'Adjusting for prematurity needs to be considered for children who were born prematurely in the first 2 years of their life when evaluating their growth / development.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1662.png). Numerals: "4-month old" in the large-type stem, read at 150 dpi; and "the first 2 years of their life" inside the small-print explanation box, which was ESCALATED to a 600 dpi band crop (crop1662-1662.png, -x 950 -y 2020 -W 2700 -H 480) because a box figure that sets a clinical time window can be misread -- the crop confirms a single digit 2, not 3 and not a two-digit value. No dose, unit or exponent on the page. Key: the yellow highlight sits on option D, "Account for prematurity in his growth before taking additional steps" (highlighted, bold, underlined, running the full width of the text column) -> zero-based index 3. The explanation box agrees with the highlight. Printed number "9." matches n9. Red folio "1662" at the foot. The stem prints "4-month old" without the second hyphen, as transcribed.' }

{ n: 10, pr: 10, p: 1664,
  key: 1,
  stem: 'An 8-year-old girl presented with short stature. Her height was found to be <0.4th percentile and her weight was on the 25th percentile. She had a history of recurrent ear infections, but was otherwise well. Which of the following is the best next step?',
  opts: ['Reassure mother and follow up in 6 months', 'Do karyotyping', 'Brain MRI', 'None of the above'],
  expl: 'A girl with marked short stature with features / manifestations suggestive of genetic abnormality (e.g. Turner syndrome) → Karyotyping.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1664.png). Numerals ESCALATED to a 600 dpi band crop (crop1664-1664.png, -x 160 -y 400 -W 4700 -H 700) because the stem carries a decimal percentile threshold, where a misread changes the medicine: the crop confirms "<0.4th percentile" (less-than sign, zero, decimal point, four) and "the 25th percentile". "8-year-old" and "follow up in 6 months" were read at 150 dpi in large type and are unambiguous. No dose, unit or exponent on the page. Key: the yellow highlight sits on option B, "Do karyotyping" (highlighted, bold, underlined) -> zero-based index 1. The explanation box agrees with the highlight. Printed number "10." matches n10. Red folio "1664" at the foot. The box ends with a printed right-arrow glyph before "Karyotyping.", transcribed with that arrow character.' }

{ n: 11, pr: 11, p: 1666,
  key: 0,
  stem: 'An 8-month-old child presenting with tachypnea and loose stool. His growth was normal until the age of 4 months, then it stopped / declined. X-ray was done and it showed bilateral lung infiltration. Which of the following is your provisional diagnosis?',
  opts: ['Severe combined immunodeficiency (SCID)', 'Barton’s syndrome', 'Complement deficiency', 'DiGeorge syndrome'],
  expl: 'T-cell defect (SCID) → Heterogeneous group of inherited disorders of profoundly defective cellular and humoral immunity.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1666.png). Numerals: "8-month-old" and "the age of 4 months", both in the large-type stem and read directly at 150 dpi; no dose, unit, exponent, lab threshold or numeric option ladder is printed anywhere on the page, and the box carries no figure at all, so nothing was escalated to 600 dpi. Key: the yellow highlight sits on option A, "Severe combined immunodeficiency (SCID)" (highlighted, bold, underlined) -> zero-based index 0. The explanation box agrees with the highlight. Printed number "11." matches n11. Red folio "1666" at the foot. Option B is printed "Barton’s syndrome" with a curly apostrophe -- transcribed exactly as printed. The box uses a printed right-arrow glyph, transcribed with that arrow character.' }

{ n: 12, pr: 12, p: 1668,
  key: 1,
  stem: 'A 5-year-old girl has severe allergic attacks to multiple types of foods. What part of her management plan is most critical?',
  opts: ['Avoidance of foods she is allergic to', 'Carrying an Epipen with her', 'Consulting a dietician', 'Eating minimal quantities of food'],
  expl: 'Mild reactions (rash, swelling of lips/face/eyes) are treated with non-sedating antihistamines. Severe reactions (i.e. with cardiovascular, laryngeal or bronchial involvement) are treated with adrenaline given intramuscularly by autoinjector (e.g. EpiPen), which the child or parent should carry with them at all times.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1668.png). The only numeral on the page is "5-year-old" in the large-type stem, read at 150 dpi. The box names adrenaline and the intramuscular route but prints NO dose and NO unit, so there was no dose figure to escalate; nothing on this page was taken to 600 dpi. Key: the yellow highlight sits on option B, "Carrying an Epipen with her" (highlighted, bold, underlined) -> zero-based index 1. The explanation box agrees with the highlight. Printed number "12." matches n12. Red folio "1668" at the foot. The option spells the device "Epipen" and the box spells it "EpiPen" -- transcribed as printed in each place, not harmonised. The box is the tallest so far at five lines and is fully contained on this sheet.' }

{ n: 13, pr: 13, p: 1670,
  key: 1,
  stem: 'A 4-month-old infant is breastfed by a vegan mother (the child has craniotabes and wide anterior fontanelle). What do you suggest the child should take?',
  opts: ['Calcium Supplements', 'Vitamin D drops', 'Vitamin K supplementation', 'Zinc supplementation'],
  expl: 'Note: It is recommended that all infants (and children up to 5 years) in the UK should be given vitamin D supplements. Nutritional rickets is managed with vitamin D and ensuring adequate dietary calcium.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1670.png). Numerals: "4-month-old" in the large-type stem, read at 150 dpi; and "children up to 5 years" inside the small-print box, ESCALATED to a 600 dpi band crop (crop1670-1670.png, -x 900 -y 1900 -W 2700 -H 500) because it is a box figure setting an age cut-off -- the crop confirms a single digit 5. The vitamins are named by letter (D, K) and carry NO dose and NO unit anywhere on the page, so there was no dose figure to escalate. Key: the yellow highlight sits on option B, "Vitamin D drops" (highlighted, bold, underlined) -> zero-based index 1. The explanation box agrees with the highlight. Printed number "13." matches n13. Red folio "1670" at the foot. The box states a UK recommendation while the exam is Egyptian -- recorded, not corrected.' }

{ n: 14, pr: 14, p: 1672,
  key: 0,
  stem: 'A 3-year-old underfed child presents with manifestations of marasmus (severe wasting without edema). Which of the following is the best management of this child?',
  opts: ['Gradual feeding with balanced diet', 'Rapid high caloric feeding', 'Rapid high protein intake', 'Iron supplementation'],
  expl: 'Note: Treatment of marasmus requires gradual introduction of balanced diet.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1672.png). The only numeral on the page is "3-year-old" in the large-type stem, read at 150 dpi; the box carries no figure at all and no dose, unit, exponent or lab threshold is printed, so nothing was escalated to 600 dpi. Key: the yellow highlight sits on option A, "Gradual feeding with balanced diet" (highlighted, bold, underlined) -> zero-based index 0. The explanation box agrees with the highlight. Printed number "14." matches n14. Red folio "1672" at the foot. The box is a short two-line note; layout otherwise unremarkable.' }

{ n: 15, pr: 15, p: 1674,
  key: 1,
  stem: 'Which of the following is the suitable time of performing Guthrie test in Egypt?',
  opts: ['Immediately after birth', '3-6 days after birth', '1-2 weeks after birth', '3-6 weeks after birth'],
  expl: 'Guthrie test (Neonatal blood spot screening) is done after breastfeeding has been established (on day 5; average: 3-6 days).',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1674.png), then ESCALATED to a 600 dpi band crop covering both the option ladder and the explanation box (crop1674-1674.png, -x 180 -y 660 -W 3300 -H 1660) because this is an all-numeric option ladder in which a misread digit changes the medicine, and the box adds a small-print day figure. The crop confirms, digit by digit: option B "3-6 days after birth", option C "1-2 weeks after birth", option D "3-6 weeks after birth", and in the box "on day 5; average: 3-6 days". Note options B and D differ only in the UNIT (days vs weeks) on the same 3-6 range -- the unit was read at 600 dpi in each. Key: the yellow highlight sits on option B, "3-6 days after birth" (highlighted, bold, underlined) -> zero-based index 1. The explanation box agrees with the highlight. Printed number "15." matches n15. Red folio "1674" at the foot. The stem asks specifically about Egypt while the box gives a generic timing; recorded, not corrected.' }

{ n: 16, pr: 16, p: 1676,
  key: 2,
  stem: 'Which of the following is the latest sign of puberty in girls?',
  opts: ['Breast enlargement', 'Axillary hair development', 'Menarche', 'Pubic hair development'],
  expl: 'Note: Sequence of pubertal changes → menarche finally. Thelarche, adrenarche, growth spurt.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1676.png). No numerals of any kind on this page -- no age, dose, unit, exponent, lab threshold or numeric option ladder, and no Tanner stage number -- so nothing was escalated to 600 dpi. Key: the yellow highlight sits on option C, "Menarche" (highlighted, bold, underlined) -> zero-based index 2. The explanation box agrees with the highlight. Printed number "16." matches n16. Red folio "1676" at the foot. Box layout: "Note:" and the lead line, which uses a printed right-arrow glyph, then a second line listing three changes; both lines are transcribed here as printed. The box lists the three earlier changes AFTER the sentence that places menarche last, so its order is not itself a sequence -- recorded, not corrected. The whole question block sits higher on this sheet than on the previous pages because the stem is a single line.' }

{ n: 17, pr: 17, p: 1678,
  key: 0,
  stem: 'Which of the following can help to improve / prevent necrotizing enterocolitis in preterm infants?',
  opts: ['Probiotics', 'Formula feeding', 'Antibiotics', 'Iron supplementation'],
  expl: 'Note: Necrotizing enterocolitis is improved with breast milk and possibly prebiotics and probiotics, and adversely affected by formula feeds, unduly rapid increase in enteral feeds and antibiotics.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1678.png). No numerals of any kind on this page -- no age, dose, unit, exponent, lab threshold or numeric option ladder -- so nothing was escalated to 600 dpi. Key: the yellow highlight sits on option A, "Probiotics" (highlighted, bold, underlined) -> zero-based index 0. The explanation box agrees with the highlight, and it also names the three distractors as harmful (formula feeds, antibiotics) or irrelevant. Printed number "17." matches n17. Red folio "1678" at the foot. The box distinguishes "prebiotics" from "probiotics" one word apart; both were read at 150 dpi and the spellings are as transcribed.' }

{ n: 18, pr: 18, p: 1680,
  key: 2,
  stem: 'A 2-month-old infant was brought by his parents who were concerned about his fever. Examination revealed fever accompanied by purpuric rash. Which of the following would be a must to do before referral of that child?',
  opts: ['Antipyretics', 'Oral antibiotics', 'Intramuscular antibiotics', 'None of the above'],
  expl: 'Note: Fever in an infant < 3 months old + purpuric rash → suspect meningococcal septicemia and give IM antibiotics immediately.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1680.png). Numerals: "2-month-old" in the large-type stem, read at 150 dpi; and "< 3 months old" inside the small-print box, ESCALATED to a 600 dpi band crop (crop1680-1680.png, -x 800 -y 2020 -W 3100 -H 400) because it is an age threshold carrying a less-than sign, where a misread digit changes who gets emergency antibiotics -- the crop confirms a less-than sign followed by a single digit 3. No dose and no unit are printed for the antibiotic, so there was no dose figure to escalate. Key: the yellow highlight sits on option C, "Intramuscular antibiotics" (highlighted, bold, underlined) -> zero-based index 2. The explanation box agrees with the highlight. Printed number "18." matches n18. Red folio "1680" at the foot. The box uses a printed right-arrow glyph and a printed plus sign, both transcribed as printed.' }

{ n: 19, pr: 19, p: 1682,
  key: 0,
  stem: 'Which of the following phases of growth is the most rapid one (fastest one)?',
  opts: ['Fetal', 'Infantile', 'Childhood', 'Pubertal'],
  expl: 'Note: Fetal phase is the fastest period of growth, accounting for about 30% of eventual height.',
  note: '4 options printed (A-D), all single words. Read off the full page rendered at 150 dpi (pg-1682.png). The stem and options carry no numerals at all; the only figure on the page is "about 30% of eventual height" inside the small-print box, which was ESCALATED to a 600 dpi band crop (crop1682-1682.png, -x 830 -y 1930 -W 2700 -H 400) because a percentage in small print is exactly the shape that flattens on a low-resolution read -- the crop confirms three-zero followed by a percent sign, 30%, not 3% and not 80%. Key: the yellow highlight sits on option A, "Fetal" (highlighted, bold, underlined) -> zero-based index 0. The explanation box agrees with the highlight. Printed number "19." matches n19. Red folio "1682" at the foot.' }

{ n: 20, pr: 20, p: 1684,
  key: 0,
  stem: 'Child growth in childhood phase depends on which of the following parameters?',
  opts: ['GH', 'Nutrition', 'Sex hormones', 'Thyroid hormones'],
  expl: 'The main determinants of growth in different growth phases: •Fetal phase → The fetus’s genetic growth potential, maternal nutrition and the health of the fetus, placenta and mother. •Infantile phase → Adequate nutrition, good health and normal hormone levels, especially thyroid hormones. •Childhood phase → Pituitary growth hormone (GH) secretion acting to produce IGF-1 at the epiphyses of the bones is the main determinant of a child’s rate of growth, provided there is adequate nutrition and good health.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1684.png). The stem and options carry no numerals; the only figure on the page is "IGF-1" in the third bullet of the small-print box, ESCALATED to a 600 dpi band crop (crop1684-1684.png, -x 700 -y 2200 -W 3400 -H 400) because a hyphenated numeral in a molecule name is a place a misread changes the medicine -- the crop confirms IGF-1 (letters I G F, hyphen, digit 1), not IGF-2. No dose, unit, exponent or lab threshold is printed anywhere on the page. Key: the yellow highlight sits on option A, "GH" (highlighted, bold, underlined) -> zero-based index 0. The explanation box agrees with the highlight via its third bullet. Printed number "20." matches n20. Red folio "1684" at the foot. Box layout: a black lead line, then three bullets whose phase labels ("Fetal phase", "Infantile phase", "Childhood phase") are printed in red bold and whose bodies are black, each introduced by a printed right-arrow glyph; the bullets are transcribed here on one line separated by their bullet characters. The box prints curly apostrophes in "fetus’s" and "child’s", reproduced as printed. This is the tallest box in this half at seven lines and it is fully contained on this sheet. Contradiction recorded, not corrected: the box says the childhood-phase determinant is GH "provided there is adequate nutrition and good health", so nutrition (option B) is named as a condition too; the key stays on the highlight.' }
