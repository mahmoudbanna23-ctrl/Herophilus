/* ===========================================================================
   ENDPOINT - Pediatrics endpoint part1.pdf - MODEL FINAL EXAM 4
   Verbatim staging record. PDF pages 1644-1804; PDF page = printed page, offset zero.
   Merged from endpoint-s13-mfe4.part-A.js + endpoint-s13-mfe4.part-B.js + endpoint-s13-mfe4.part-C.js + endpoint-s13-mfe4.part-D.js by merge-parts-ep.js.
   
   Every question is printed TWICE: an unanswered page, then the ANSWERED page with the key
   highlighted in yellow and (usually) a bordered explanation box. Only answered pages are
   staged. `n` is the true sequential index, `pr` what the page prints, `p` the PDF page,
   `key` a ZERO-BASED INDEX into `opts` (never a letter), matching the app field `answer`,
   `expl` the printed box verbatim or "".
   =========================================================================== */
var PEDEP_S13_STAGED = [

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
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1646.png); this book prints one large-type question per sheet, so the type is crisp at that scale. Numerals on this page: "one year of age" in the stem (printed as a word) and "1 year of age" in the box -- both read at 150 dpi, neither escalated, as a small-print box figure that is a plain single digit next to the spelled-out stem value cross-checks itself. No dose, unit or exponent on the page. Key: the yellow highlight sits on option B, "Honey" (highlighted, bold, underlined) -> zero-based index 1. The explanation box agrees with the highlight. Printed number "1." matches n1. Red folio "1646" printed in red at the foot of the page confirms the PDF page number IS the printed page -- the book is 1:1, not 2-up. Layout otherwise unremarkable.' },

{ n: 2, pr: 2, p: 1648,
  key: 3,
  stem: 'Which of the following neonatal conditions is known to resolve spontaneously?',
  opts: ['Talipes equinovarus', 'Port-Wine stain', 'Infantile hemangioma', 'Umbilical hernia'],
  expl: 'Note: Most important findings in the newborn that resolve spontaneously: •Umbilical hernia •Erythema toxicum •Milia •Breast enlargement •Mongolian blue spots •Cephalhematoma & caput succedaneum',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1648.png). No numerals of any kind on this page -- no dose, unit, exponent, lab threshold or numeric option ladder -- so nothing was escalated to 600 dpi. Key: the yellow highlight sits on option D, "Umbilical hernia" (highlighted, bold, underlined) -> zero-based index 3. The explanation box agrees: its first bullet is "Umbilical hernia". Printed number "2." matches n2. Red folio "1648" at the foot. Box layout: the word "Note:" and the lead sentence are printed in red, followed by a six-item bulleted list in black; the bullets are set as a vertical list and are transcribed here separated by their bullet characters on one line. Note the box lists infantile hemangioma nowhere even though hemangiomas do involute -- recorded, not corrected; the key stays on the highlight.' },

{ n: 3, pr: 3, p: 1650,
  key: 1,
  stem: "A 2-year-old child was brought to the pediatric ED by his parents who report that they noticed their child taking his grandmother's tablets (for treating her heart disease) half an hour ago. Which of the following is true regarding the management of this child?",
  opts: ['Activated charcoal can not be used', 'Gastric lavage and induced vomiting are not recommended (or contraindicated)', 'Induced vomiting is recommended', 'All of the above'],
  expl: 'Activated charcoal can be effective in reducing absorption of toxic agent if administered within 1 h of ingestion. Gastric lavage and induced vomiting are no longer recommended.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1650.png). Numerals: "2-year-old" in the stem, read at 150 dpi in large type; "within 1 h of ingestion" in the small-print box -- the unit "h" and the figure 1 were checked against the surrounding word shapes at 150 dpi and are unambiguous, so no 600 dpi crop was needed. No dose, exponent or lab threshold on the page. Key: the yellow highlight sits on option B, "Gastric lavage and induced vomiting are not recommended (or contraindicated)" (highlighted, bold, underlined, and it wraps onto a second line with the highlight continuing) -> zero-based index 1. The explanation box agrees with the highlight. Printed number "3." matches n3. Red folio "1650" at the foot. Stem is a four-line vignette; option B is the only option that wraps.' },

{ n: 4, pr: 4, p: 1652,
  key: 0,
  stem: 'Which of the following is a drawback (a disadvantage) of breastfeeding?',
  opts: ['It is contraindicated in certain metabolic / genetic disorders', 'It carries a high risk of developing gastroenteritis', 'It increases maternal weight gain', 'It increases the risk of hypertension later in life'],
  expl: 'In certain rare metabolic disorders (such as galactosaemia, glucose galactose malabsorption, certain long chain fatty acid oxidation disorders), breastfeeding is contraindicated.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1652.png). No numerals of any kind on this page -- no dose, unit, exponent, lab threshold or numeric option ladder -- so nothing was escalated to 600 dpi. Key: the yellow highlight sits on option A, "It is contraindicated in certain metabolic / genetic disorders" (highlighted, bold, underlined) -> zero-based index 0. The explanation box agrees with the highlight. Printed number "4." matches n4. Red folio "1652" at the foot. The box sits low on the page with a wide gap above it; the leading space inside the box before "In certain" belongs to the source and is not reproduced in expl.' },

{ n: 5, pr: 5, p: 1654,
  key: 2,
  stem: 'Which of the following would be the effect of premature fusion of the lamdoid suture (localized craniosynostosis of lamdoid suture)?',
  opts: ['Long narrow skull', 'Asymmetrical skull', 'Flattening of the back of skull', 'Plagiocephaly'],
  expl: 'Note: Localized craniosynostosis: •Sagittal suture → long narrow skull •Coronal suture → asymmetrical skull •Lambdoid suture → flattening of skull',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1654.png). No numerals of any kind on this page -- no dose, unit, exponent, lab threshold or numeric option ladder -- so nothing was escalated to 600 dpi. Key: the yellow highlight sits on option C, "Flattening of the back of skull" (highlighted, bold, underlined) -> zero-based index 2. The explanation box agrees: its third bullet reads "Lambdoid suture → flattening of skull". Printed number "5." matches n5. Red folio "1654" at the foot. Box layout: "Note:" in black, "Localized craniosynostosis:" in red, then three black bullets each using a printed right-arrow glyph, transcribed here with that arrow character on one line. The stem spells the suture "lamdoid" twice while the box spells it "Lambdoid" -- transcribed as printed in each place, not harmonised. The stem also offers both "Asymmetrical skull" (B) and "Plagiocephaly" (D), which name the same coronal deformity, while the highlighted C describes the lambdoid result -- recorded, not corrected; the key stays on the highlight.' },

{ n: 6, pr: 6, p: 1656,
  key: 0,
  stem: 'A young girl is brought by her mother who says that she is constantly screaming. Her mother reports that she is formula-fed, has poor feeding and she occasionally passes blood streaked stool. Her weight and height are within normal range. What is your diagnosis?',
  opts: ['Cow’s milk protein allergy', 'Inherited genetic disorder', 'Down’s syndrome', 'Celiac disease'],
  expl: 'This case is solved by exclusion. Cow’s milk protein allergy can cause faltering growth. Also, it causes impaired feeding and can cause blood in stool.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1656.png). No numerals of any kind on this page -- no age, dose, unit, exponent or lab threshold ("A young girl", no figure given) -- so nothing was escalated to 600 dpi. Key: the yellow highlight sits on option A, "Cow’s milk protein allergy" (highlighted, bold, underlined) -> zero-based index 0. The explanation box agrees with the highlight. Printed number "6." matches n6. Red folio "1656" at the foot. The page prints curly (typographic) apostrophes in "Cow’s" and "Down’s"; these are reproduced as printed. Contradiction recorded, not corrected: the stem states the weight and height are within normal range, while the box justifies the answer by saying cow’s milk protein allergy "can cause faltering growth" -- the box argues from a feature the stem explicitly excludes. The key stays on the highlight.' },

{ n: 7, pr: 7, p: 1658,
  key: 0,
  stem: 'Which of the following is the most important risk factor for intraventricular hemorrhage in neonates?',
  opts: ['Extreme prematurity', 'Pneumothorax', 'Postmaturity', 'None of the above'],
  expl: 'The most important risk factor for intraventricular hemorrhage in neonates is extreme prematurity.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1658.png). No numerals of any kind on this page -- no dose, unit, exponent, lab threshold or numeric option ladder -- so nothing was escalated to 600 dpi. Key: the yellow highlight sits on option A, "Extreme prematurity" (highlighted, bold, underlined) -> zero-based index 0. The explanation box agrees with the highlight and simply restates the stem. Printed number "7." matches n7. Red folio "1658" at the foot. Layout unremarkable.' },

{ n: 8, pr: 8, p: 1660,
  key: 0,
  stem: 'A 2-year-old child with fever, rash, strawberry tongue and circumoral pallor. Which of the following is the line of treatment of choice for this child?',
  opts: ['Penicillin', 'Acetaminophen', 'Amoxicillin', 'Metronidazole'],
  expl: 'Antibiotics such as penicillin V or erythromycin may hasten recovery from streptococcal tonsillitis.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1660.png). The only numeral on the page is "2-year-old" in the large-type stem, read directly at 150 dpi; no dose, unit, exponent or lab threshold is printed, so nothing was escalated to 600 dpi. The box prints "penicillin V" -- the V is a Roman-numeral-style drug designation, not a quantity; it was checked at 150 dpi against the surrounding lowercase and is unambiguous. Key: the yellow highlight sits on option A, "Penicillin" (highlighted, bold, underlined) -> zero-based index 0. The explanation box agrees with the highlight. Printed number "8." matches n8. Red folio "1660" at the foot. The stem describes scarlet fever without naming it and the box answers about streptococcal tonsillitis; recorded, not corrected.' },

{ n: 9, pr: 9, p: 1662,
  key: 3,
  stem: 'A 4-month old child presents to the clinic with his mother complaining about his small size. She reports that he was born prematurely and he is formula fed. Otherwise, he appears normal. What should you do?',
  opts: ['Encourage mother to breast feed', 'Increase formula feeding', 'Introduce solid food early', 'Account for prematurity in his growth before taking additional steps'],
  expl: 'Adjusting for prematurity needs to be considered for children who were born prematurely in the first 2 years of their life when evaluating their growth / development.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1662.png). Numerals: "4-month old" in the large-type stem, read at 150 dpi; and "the first 2 years of their life" inside the small-print explanation box, which was ESCALATED to a 600 dpi band crop (crop1662-1662.png, -x 950 -y 2020 -W 2700 -H 480) because a box figure that sets a clinical time window can be misread -- the crop confirms a single digit 2, not 3 and not a two-digit value. No dose, unit or exponent on the page. Key: the yellow highlight sits on option D, "Account for prematurity in his growth before taking additional steps" (highlighted, bold, underlined, running the full width of the text column) -> zero-based index 3. The explanation box agrees with the highlight. Printed number "9." matches n9. Red folio "1662" at the foot. The stem prints "4-month old" without the second hyphen, as transcribed.' },

{ n: 10, pr: 10, p: 1664,
  key: 1,
  stem: 'An 8-year-old girl presented with short stature. Her height was found to be <0.4th percentile and her weight was on the 25th percentile. She had a history of recurrent ear infections, but was otherwise well. Which of the following is the best next step?',
  opts: ['Reassure mother and follow up in 6 months', 'Do karyotyping', 'Brain MRI', 'None of the above'],
  expl: 'A girl with marked short stature with features / manifestations suggestive of genetic abnormality (e.g. Turner syndrome) → Karyotyping.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1664.png). Numerals ESCALATED to a 600 dpi band crop (crop1664-1664.png, -x 160 -y 400 -W 4700 -H 700) because the stem carries a decimal percentile threshold, where a misread changes the medicine: the crop confirms "<0.4th percentile" (less-than sign, zero, decimal point, four) and "the 25th percentile". "8-year-old" and "follow up in 6 months" were read at 150 dpi in large type and are unambiguous. No dose, unit or exponent on the page. Key: the yellow highlight sits on option B, "Do karyotyping" (highlighted, bold, underlined) -> zero-based index 1. The explanation box agrees with the highlight. Printed number "10." matches n10. Red folio "1664" at the foot. The box ends with a printed right-arrow glyph before "Karyotyping.", transcribed with that arrow character.' },

{ n: 11, pr: 11, p: 1666,
  key: 0,
  stem: 'An 8-month-old child presenting with tachypnea and loose stool. His growth was normal until the age of 4 months, then it stopped / declined. X-ray was done and it showed bilateral lung infiltration. Which of the following is your provisional diagnosis?',
  opts: ['Severe combined immunodeficiency (SCID)', 'Barton’s syndrome', 'Complement deficiency', 'DiGeorge syndrome'],
  expl: 'T-cell defect (SCID) → Heterogeneous group of inherited disorders of profoundly defective cellular and humoral immunity.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1666.png). Numerals: "8-month-old" and "the age of 4 months", both in the large-type stem and read directly at 150 dpi; no dose, unit, exponent, lab threshold or numeric option ladder is printed anywhere on the page, and the box carries no figure at all, so nothing was escalated to 600 dpi. Key: the yellow highlight sits on option A, "Severe combined immunodeficiency (SCID)" (highlighted, bold, underlined) -> zero-based index 0. The explanation box agrees with the highlight. Printed number "11." matches n11. Red folio "1666" at the foot. Option B is printed "Barton’s syndrome" with a curly apostrophe -- transcribed exactly as printed. The box uses a printed right-arrow glyph, transcribed with that arrow character.' },

{ n: 12, pr: 12, p: 1668,
  key: 1,
  stem: 'A 5-year-old girl has severe allergic attacks to multiple types of foods. What part of her management plan is most critical?',
  opts: ['Avoidance of foods she is allergic to', 'Carrying an Epipen with her', 'Consulting a dietician', 'Eating minimal quantities of food'],
  expl: 'Mild reactions (rash, swelling of lips/face/eyes) are treated with non-sedating antihistamines. Severe reactions (i.e. with cardiovascular, laryngeal or bronchial involvement) are treated with adrenaline given intramuscularly by autoinjector (e.g. EpiPen), which the child or parent should carry with them at all times.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1668.png). The only numeral on the page is "5-year-old" in the large-type stem, read at 150 dpi. The box names adrenaline and the intramuscular route but prints NO dose and NO unit, so there was no dose figure to escalate; nothing on this page was taken to 600 dpi. Key: the yellow highlight sits on option B, "Carrying an Epipen with her" (highlighted, bold, underlined) -> zero-based index 1. The explanation box agrees with the highlight. Printed number "12." matches n12. Red folio "1668" at the foot. The option spells the device "Epipen" and the box spells it "EpiPen" -- transcribed as printed in each place, not harmonised. The box is the tallest so far at five lines and is fully contained on this sheet.' },

{ n: 13, pr: 13, p: 1670,
  key: 1,
  stem: 'A 4-month-old infant is breastfed by a vegan mother (the child has craniotabes and wide anterior fontanelle). What do you suggest the child should take?',
  opts: ['Calcium Supplements', 'Vitamin D drops', 'Vitamin K supplementation', 'Zinc supplementation'],
  expl: 'Note: It is recommended that all infants (and children up to 5 years) in the UK should be given vitamin D supplements. Nutritional rickets is managed with vitamin D and ensuring adequate dietary calcium.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1670.png). Numerals: "4-month-old" in the large-type stem, read at 150 dpi; and "children up to 5 years" inside the small-print box, ESCALATED to a 600 dpi band crop (crop1670-1670.png, -x 900 -y 1900 -W 2700 -H 500) because it is a box figure setting an age cut-off -- the crop confirms a single digit 5. The vitamins are named by letter (D, K) and carry NO dose and NO unit anywhere on the page, so there was no dose figure to escalate. Key: the yellow highlight sits on option B, "Vitamin D drops" (highlighted, bold, underlined) -> zero-based index 1. The explanation box agrees with the highlight. Printed number "13." matches n13. Red folio "1670" at the foot. The box states a UK recommendation while the exam is Egyptian -- recorded, not corrected.' },

{ n: 14, pr: 14, p: 1672,
  key: 0,
  stem: 'A 3-year-old underfed child presents with manifestations of marasmus (severe wasting without edema). Which of the following is the best management of this child?',
  opts: ['Gradual feeding with balanced diet', 'Rapid high caloric feeding', 'Rapid high protein intake', 'Iron supplementation'],
  expl: 'Note: Treatment of marasmus requires gradual introduction of balanced diet.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1672.png). The only numeral on the page is "3-year-old" in the large-type stem, read at 150 dpi; the box carries no figure at all and no dose, unit, exponent or lab threshold is printed, so nothing was escalated to 600 dpi. Key: the yellow highlight sits on option A, "Gradual feeding with balanced diet" (highlighted, bold, underlined) -> zero-based index 0. The explanation box agrees with the highlight. Printed number "14." matches n14. Red folio "1672" at the foot. The box is a short two-line note; layout otherwise unremarkable.' },

{ n: 15, pr: 15, p: 1674,
  key: 1,
  stem: 'Which of the following is the suitable time of performing Guthrie test in Egypt?',
  opts: ['Immediately after birth', '3-6 days after birth', '1-2 weeks after birth', '3-6 weeks after birth'],
  expl: 'Guthrie test (Neonatal blood spot screening) is done after breastfeeding has been established (on day 5; average: 3-6 days).',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1674.png), then ESCALATED to a 600 dpi band crop covering both the option ladder and the explanation box (crop1674-1674.png, -x 180 -y 660 -W 3300 -H 1660) because this is an all-numeric option ladder in which a misread digit changes the medicine, and the box adds a small-print day figure. The crop confirms, digit by digit: option B "3-6 days after birth", option C "1-2 weeks after birth", option D "3-6 weeks after birth", and in the box "on day 5; average: 3-6 days". Note options B and D differ only in the UNIT (days vs weeks) on the same 3-6 range -- the unit was read at 600 dpi in each. Key: the yellow highlight sits on option B, "3-6 days after birth" (highlighted, bold, underlined) -> zero-based index 1. The explanation box agrees with the highlight. Printed number "15." matches n15. Red folio "1674" at the foot. The stem asks specifically about Egypt while the box gives a generic timing; recorded, not corrected.' },

{ n: 16, pr: 16, p: 1676,
  key: 2,
  stem: 'Which of the following is the latest sign of puberty in girls?',
  opts: ['Breast enlargement', 'Axillary hair development', 'Menarche', 'Pubic hair development'],
  expl: 'Note: Sequence of pubertal changes → menarche finally. Thelarche, adrenarche, growth spurt.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1676.png). No numerals of any kind on this page -- no age, dose, unit, exponent, lab threshold or numeric option ladder, and no Tanner stage number -- so nothing was escalated to 600 dpi. Key: the yellow highlight sits on option C, "Menarche" (highlighted, bold, underlined) -> zero-based index 2. The explanation box agrees with the highlight. Printed number "16." matches n16. Red folio "1676" at the foot. Box layout: "Note:" and the lead line, which uses a printed right-arrow glyph, then a second line listing three changes; both lines are transcribed here as printed. The box lists the three earlier changes AFTER the sentence that places menarche last, so its order is not itself a sequence -- recorded, not corrected. The whole question block sits higher on this sheet than on the previous pages because the stem is a single line.' },

{ n: 17, pr: 17, p: 1678,
  key: 0,
  stem: 'Which of the following can help to improve / prevent necrotizing enterocolitis in preterm infants?',
  opts: ['Probiotics', 'Formula feeding', 'Antibiotics', 'Iron supplementation'],
  expl: 'Note: Necrotizing enterocolitis is improved with breast milk and possibly prebiotics and probiotics, and adversely affected by formula feeds, unduly rapid increase in enteral feeds and antibiotics.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1678.png). No numerals of any kind on this page -- no age, dose, unit, exponent, lab threshold or numeric option ladder -- so nothing was escalated to 600 dpi. Key: the yellow highlight sits on option A, "Probiotics" (highlighted, bold, underlined) -> zero-based index 0. The explanation box agrees with the highlight, and it also names the three distractors as harmful (formula feeds, antibiotics) or irrelevant. Printed number "17." matches n17. Red folio "1678" at the foot. The box distinguishes "prebiotics" from "probiotics" one word apart; both were read at 150 dpi and the spellings are as transcribed.' },

{ n: 18, pr: 18, p: 1680,
  key: 2,
  stem: 'A 2-month-old infant was brought by his parents who were concerned about his fever. Examination revealed fever accompanied by purpuric rash. Which of the following would be a must to do before referral of that child?',
  opts: ['Antipyretics', 'Oral antibiotics', 'Intramuscular antibiotics', 'None of the above'],
  expl: 'Note: Fever in an infant < 3 months old + purpuric rash → suspect meningococcal septicemia and give IM antibiotics immediately.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1680.png). Numerals: "2-month-old" in the large-type stem, read at 150 dpi; and "< 3 months old" inside the small-print box, ESCALATED to a 600 dpi band crop (crop1680-1680.png, -x 800 -y 2020 -W 3100 -H 400) because it is an age threshold carrying a less-than sign, where a misread digit changes who gets emergency antibiotics -- the crop confirms a less-than sign followed by a single digit 3. No dose and no unit are printed for the antibiotic, so there was no dose figure to escalate. Key: the yellow highlight sits on option C, "Intramuscular antibiotics" (highlighted, bold, underlined) -> zero-based index 2. The explanation box agrees with the highlight. Printed number "18." matches n18. Red folio "1680" at the foot. The box uses a printed right-arrow glyph and a printed plus sign, both transcribed as printed.' },

{ n: 19, pr: 19, p: 1682,
  key: 0,
  stem: 'Which of the following phases of growth is the most rapid one (fastest one)?',
  opts: ['Fetal', 'Infantile', 'Childhood', 'Pubertal'],
  expl: 'Note: Fetal phase is the fastest period of growth, accounting for about 30% of eventual height.',
  note: '4 options printed (A-D), all single words. Read off the full page rendered at 150 dpi (pg-1682.png). The stem and options carry no numerals at all; the only figure on the page is "about 30% of eventual height" inside the small-print box, which was ESCALATED to a 600 dpi band crop (crop1682-1682.png, -x 830 -y 1930 -W 2700 -H 400) because a percentage in small print is exactly the shape that flattens on a low-resolution read -- the crop confirms three-zero followed by a percent sign, 30%, not 3% and not 80%. Key: the yellow highlight sits on option A, "Fetal" (highlighted, bold, underlined) -> zero-based index 0. The explanation box agrees with the highlight. Printed number "19." matches n19. Red folio "1682" at the foot.' },

{ n: 20, pr: 20, p: 1684,
  key: 0,
  stem: 'Child growth in childhood phase depends on which of the following parameters?',
  opts: ['GH', 'Nutrition', 'Sex hormones', 'Thyroid hormones'],
  expl: 'The main determinants of growth in different growth phases: •Fetal phase → The fetus’s genetic growth potential, maternal nutrition and the health of the fetus, placenta and mother. •Infantile phase → Adequate nutrition, good health and normal hormone levels, especially thyroid hormones. •Childhood phase → Pituitary growth hormone (GH) secretion acting to produce IGF-1 at the epiphyses of the bones is the main determinant of a child’s rate of growth, provided there is adequate nutrition and good health.',
  note: '4 options printed (A-D). Read off the full page rendered at 150 dpi (pg-1684.png). The stem and options carry no numerals; the only figure on the page is "IGF-1" in the third bullet of the small-print box, ESCALATED to a 600 dpi band crop (crop1684-1684.png, -x 700 -y 2200 -W 3400 -H 400) because a hyphenated numeral in a molecule name is a place a misread changes the medicine -- the crop confirms IGF-1 (letters I G F, hyphen, digit 1), not IGF-2. No dose, unit, exponent or lab threshold is printed anywhere on the page. Key: the yellow highlight sits on option A, "GH" (highlighted, bold, underlined) -> zero-based index 0. The explanation box agrees with the highlight via its third bullet. Printed number "20." matches n20. Red folio "1684" at the foot. Box layout: a black lead line, then three bullets whose phase labels ("Fetal phase", "Infantile phase", "Childhood phase") are printed in red bold and whose bodies are black, each introduced by a printed right-arrow glyph; the bullets are transcribed here on one line separated by their bullet characters. The box prints curly apostrophes in "fetus’s" and "child’s", reproduced as printed. This is the tallest box in this half at seven lines and it is fully contained on this sheet. Contradiction recorded, not corrected: the box says the childhood-phase determinant is GH "provided there is adequate nutrition and good health", so nutrition (option B) is named as a condition too; the key stays on the highlight.' },

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
  note: 'Four options printed (A-D). Yellow highlight on A, Pneumothorax, bold and underlined; the box agrees. Printed number 21 matches n. Red folio 1686. No numerals in stem, options or box, so nothing needed escalation. Read at 150 dpi.' },

{ n: 22, pr: 22, p: 1688,
  key: 1,
  stem: "What is appropriate about the role of vitamins in children's nutrition?",
  opts: ['Vitamin K main function is synthesis of RBCs', 'Vitamin C deficiency can cause mucosal bleeding and petechiae', 'Folic has no role in blood production', 'Vitamin B12 deficiency is common in infants', 'Vitamin E deficiency leads to decreased clot generation'],
  expl: 'Note: Vitamin C deficiency (Scurvy) → Petechiae and bruising, gingivitis, coiled hair, poor growth, irritability; painful joints, impaired wound healing.',
  note: "FIVE options printed (A-E), not four -- this page breaks the all-four-option pattern reported for half A. Yellow highlight on B, bold and underlined; the box agrees. Printed number 22 matches n. Red folio 1688. Only numeral is the vitamin designation B12 in option D, read at 150 dpi and unambiguous in the large stem type; no dose, unit or exponent on the page, so no 600 dpi crop was needed. The box prints a right arrow between (Scurvy) and Petechiae; it is kept as the arrow character." },

{ n: 23, pr: 23, p: 1690,
  key: 3,
  stem: 'Breast milk is deficient in which of the following nutritional elements?',
  opts: ['Carbohydrates', 'Milk oligosaccharides', 'Secretory immunoglobulin A', 'Vitamin D'],
  expl: 'Note: Breastmilk is deficient in vitamin D, vitamin K and iron.',
  note: 'Four options printed (A-D). Yellow highlight on D, bold and underlined; the box agrees. Printed number 23 matches n. Red folio 1690. No numerals anywhere on the page, so nothing needed escalation. Read at 150 dpi.' },

{ n: 24, pr: 24, p: 1692,
  key: 4,
  stem: 'Mohammed is born 24 hours ago. His mother developed chickenpox (varicella) 1 day after his delivery. what is the best advice you could give?',
  opts: ['Breastfeeding is contraindicated', 'Neonatal infection is unlikely due to transplacentally acquired antibodies', 'Reassure and discharge home asking mother to return if the baby develops symptoms.', "The infant's varicella antibody status should be checked", 'There is a significant risk of serious neonatal infection'],
  expl: 'Note: Since the mother developed chickenpox, she is not immune against varicella zoster virus, which means that the child could have been infected from his mother through the placenta during delivery. Neonates born from 5 days before to up to 2 days after the onset of maternal rash may exhibit progressive severe neonatal varicella disease.',
  note: "FIVE options printed (A-E). Yellow highlight on E, bold and underlined; the box agrees. Printed number 24 matches n. Red folio 1692. ESCALATED to a 600 dpi band crop of the small-print box (crop1692-1692.png) because it carries a day window: confirmed 5 days before and up to 2 days after. Stem numerals 24 hours and 1 day are in the large type and were read at 150 dpi. Recorded, not corrected: the stem says the mother developed chickenpox 1 day AFTER delivery, while the box explains transmission through the placenta during delivery; the box also reads as though maternal chickenpox means she is not immune. Both are the printed wording and are left exactly as printed." },

{ n: 25, pr: 25, p: 1694,
  key: 1,
  stem: 'Ellie is a 4-year-old girl who has been complaining of pain in her tummy for a month. It is worse when she goes to the toilet; her stools are firm and she opens her bowels only every 2–3 days. She has not had any vomiting. For the last 2 weeks her stools have become loose. On examination she has a mass in the left iliac fossa. What is the most likely diagnosis?',
  opts: ['Appendix mass', 'Constipation', 'Gastroenteritis', 'Inguinal hernia', 'Wilms tumour'],
  expl: 'Note: Abdominal pain + firm stool + imapcted mass in left iliac fossa → Constipation.',
  note: 'FIVE options printed (A-E). Yellow highlight on B, bold and underlined; the box agrees. Printed number 25 matches n. Red folio 1694. Numerals are all in the large stem type and were read at 150 dpi: 4-year-old, every 2-3 days, last 2 weeks. None is a dose, unit, exponent or lab threshold, so none was escalated. The interval between 2 and 3 is printed as an en dash and is kept as an en dash. Layout: the explanation box sits to the RIGHT of options C and D rather than below the ladder, so the ladder must be read down the left margin past the box. Option E, Wilms tumour, is a paediatric surgery distractor and is staged as printed.' },

{ n: 26, pr: 26, p: 1696,
  key: 0,
  stem: 'Which of the following is the most important mode of transmission of varicella zoster infection?',
  opts: ['Airborne respiratory droplets', 'Direct contact with the lesion', 'Ingestion of contaminated food', 'None of the above'],
  expl: 'Note: The most important mode of transmission of varicella zoster infection → Airborne respiratory droplets.',
  note: 'Four options printed (A-D). Yellow highlight on A, bold and underlined; the box agrees. Printed number 26 matches n. Red folio 1696. No numerals anywhere on the page, so nothing needed escalation. Read at 150 dpi.' },

{ n: 27, pr: 27, p: 1698,
  key: 1,
  stem: 'Which of the following statements is true about familial short stature?',
  opts: ['It is usually associated with obesity', "Child's height fluctuates 2 centiles between mid-parental height", 'It is a form of delay in attaining normal height', 'It leads to achieving normal height eventually'],
  expl: "Note: In familial short stature, child's height fluctuates 2 centiles between mid-parental height. Familial short stature is associated with being underweight (not obesity).",
  note: "Four options printed (A-D). Yellow highlight on B, bold and underlined; the box agrees. Printed number 27 matches n. Red folio 1698. The only numeral is the centile count 2, and it is printed TWICE -- once in the large-type option B and once in the small-print box -- and the two agree, so the large-type printing carried the read and no 600 dpi crop was needed. It is a centile count, not a dose, unit or exponent. Read at 150 dpi." },

{ n: 28, pr: 28, p: 1700,
  key: 0,
  stem: 'Which of the following is incorrect regarding normal puberty of boys (males)?',
  opts: ['It is characterized by early closure of epiphyses', 'It starts between the age of 9 and 14 years', 'The first sign of male puberty is testicular volume >4 ml', 'All of the above'],
  expl: 'Note: Normal puberty in boys is not characterized by early epiphyseal fusion.',
  note: 'Four options printed (A-D). Yellow highlight on A, bold and underlined; the box agrees. Printed number 28 matches n. Red folio 1700. ESCALATED to a 600 dpi crop of the whole option ladder (crop1700-1700.png) because the ladder carries an age range and a volume threshold with a unit: confirmed the age of 9 and 14 years, and testicular volume >4 ml -- the ml unit and the greater-than sign both verified at 600 dpi. Recorded, not corrected: the stem asks for the INCORRECT statement, so option D, All of the above, cannot be consistent with a single highlighted key; the highlight is unambiguously on A and the key stays there.' },

{ n: 29, pr: 29, p: 1702,
  key: 0,
  stem: 'Rodney, a boisterous 2-year-old, has had diarrhoea for the last 3 months. He produces up to four stools a day, which are loose, brown in colour and usually contain undigested food. The rest of the family are well. He has never been abroad. Examination is normal and his personal child health record shows that he is growing along the 50th centile. What is the most likely diagnosis?',
  opts: ['Chronic non-specific diarrhoea', 'Coeliac disease', "Cow's milk protein allergy", 'Inflammatory bowel disease', 'Lactose intolerance'],
  expl: 'Note: In chronic non-specific diarrhoea there are loose stools with undigested food present. The children grow well and have plenty of energy.',
  note: 'FIVE options printed (A-E). Yellow highlight on A, bold and underlined; the box agrees. Printed number 29 matches n. Red folio 1702. Numerals are all in the large stem type and were read at 150 dpi: 2-year-old, last 3 months, the 50th centile. The stool frequency is printed as the word four, not a digit. None is a dose, unit, exponent or lab threshold, so none was escalated. Layout: the explanation box sits to the RIGHT of options C and D rather than below the ladder.' },

{ n: 30, pr: 30, p: 1704,
  key: 1,
  stem: 'Which of the following statements is true regarding child vaccination?',
  opts: ['In case of missing a vaccine, the whole course needs to be restarted', 'OPV vaccine should not be given to a child whose brother suffers leukemia', 'IPV is given within the first 24 hours after birth', 'All of the above'],
  expl: 'Note: OPV is a live attenuated viral vaccine that is contraindicated in children with immunodeficiency or to children who are close contacts of immunodeficient patients due to risk of transmission.',
  note: 'Four options printed (A-D). Yellow highlight on B, bold and underlined, and the highlight wraps onto a second line to cover the word leukemia; the box agrees. Printed number 30 matches n. Red folio 1704. The only numeral is 24 hours in option C, in the large type, read at 150 dpi; it is a timing, not a dose or an exponent, so it was not escalated.' },

{ n: 31, pr: 31, p: 1706,
  key: 0,
  stem: 'A 5-year-old girl is receiving induction chemotherapy for acute lymphoblastic leukemia. Which of the following vaccines is contraindicated to be given to her 4-month-old sibling?',
  opts: ['Oral polio vaccine', 'H. Influenza vaccine', 'Hepatitis B vaccine', 'Pneumococcal vaccine', 'DPT vaccine'],
  expl: 'Note: OPV is a live attenuated viral vaccine that is contraindicated in children with immunodeficiency or to children who are close contacts of immunodeficient patients due to risk of transmission.',
  note: 'FIVE options printed (A-E). Yellow highlight on A, bold and underlined; the box agrees. Printed number 31 matches n. Red folio 1706. Stem numerals 5-year-old and 4-month-old are in the large type and were read at 150 dpi; neither is a dose, unit or exponent. Noted, not corrected: this page prints the SAME explanation box, word for word, as n30 on p.1704.' },

{ n: 32, pr: 32, p: 1708,
  key: 2,
  stem: 'Increased risk for intussusception was observed as a rare complication following immunization with which vaccine?',
  opts: ['IPV', 'OPV', 'Rotavirus vaccine', 'Hepatitis A vaccine', 'Hepatitis A vaccine'],
  expl: "Note: There's an association between a rotavirus vaccine and an increased risk of intussusception.",
  note: 'FIVE options printed (A-E). Yellow highlight on C, bold and underlined; the box agrees. Printed number 32 matches n. Red folio 1708. No numerals anywhere on the page, so nothing needed escalation; read at 150 dpi. RECORDED, NOT CORRECTED: options D and E are printed IDENTICALLY, both reading Hepatitis A vaccine. Both are staged as printed and no letter is dropped, so the ladder stays five long and the zero-based key index 2 still lands on Rotavirus vaccine. Intussusception is paediatric surgery and is in scope for this book.' },

{ n: 33, pr: 33, p: 1710,
  key: 0,
  stem: 'A 5-year-old child presents with a maculopapular rash, high fever, cough, and conjunctivitis. The rash started behind the ears and spread to the trunk and extremities. What is the most likely complication of this condition?',
  opts: ['Subacute sclerosing panencephalitis', 'Acute glomerulonephritis', 'Myocarditis', 'Guillain-Barré syndrome', 'Rheumatic fever'],
  expl: '',
  note: 'FIVE options printed (A-E). Yellow highlight on A, bold and underlined. THIS PAGE PRINTS NO EXPLANATION BOX -- the sheet is blank below the option ladder, so expl is the empty string and there is nothing to agree or disagree with the highlight. Printed number 33 matches n. Red folio 1710. The only numeral is 5-year-old in the large stem type, read at 150 dpi; not a dose, unit or exponent, so nothing was escalated. Option D prints an accented e in Guillain-Barré and it is kept accented.' },

{ n: 34, pr: 34, p: 1712,
  key: 0,
  stem: 'A 18-month-old infant developed manifestations of allergy (hives, swelling of the lips, itching) after eating a peanut in a party with his parents. He also suffered gastrointestinal manifestations. Which of the following would be found in that infant?',
  opts: ['Increased eosinophils', 'Increased WBCs', 'Reduced RBCs', 'Increased neutrophils'],
  expl: 'Note: Allergy → Increased eosinophils.',
  note: 'Four options printed (A-D). Yellow highlight on A, bold and underlined; the box agrees. Printed number 34 matches n. Red folio 1712. The only numeral is 18-month-old in the large stem type, read at 150 dpi; not a dose, unit or exponent, so nothing was escalated. The stem opens "A 18-month-old" rather than "An 18-month-old"; transcribed as printed.' },

{ n: 35, pr: 35, p: 1714,
  key: 2,
  stem: 'A 6-month-old female infant is admitted with a 4-day history of high fever with no focus. A full septic screen is performed which yields negative cultures and normal inflammatory markers. On day 7 of her illness she develops a blanching morbilliform rash all over her body and her fever subsides. What is the most likely diagnosis?',
  opts: ['Measles', 'Rubella', 'Roseola infantum', 'Scarlet fever', 'Chicken pox'],
  expl: 'Note: Roseola infantum. Also known as ‘sixth disease’. This is commonly caused by HHV6 or HHV7 and is a well recognized cause of febrile convulsions.',
  note: 'FIVE options printed (A-E). Yellow highlight on C, bold and underlined; the box agrees. Printed number 35 matches n. Red folio 1714. ESCALATED to a 600 dpi crop of the small-print box (crop1714-1714.png) because it carries two virus serotype numerals that a 150 dpi read could transpose: confirmed HHV6 and HHV7, in that order. Stem numerals 6-month-old, 4-day history and day 7 are in the large type and were read at 150 dpi. The box prints curly single quotes around sixth disease and they are kept as printed. Layout: the box sits to the RIGHT of options C and D rather than below the ladder.' },

{ n: 36, pr: 36, p: 1716,
  key: 3,
  stem: 'A 6-month-old girl is seen in local health center for regular vaccination. Her weight is below the 3rd centile for age and sex, and her height is in the 75th centile. She is active and has attained normal developmental milestones so far. What would be your next step?',
  opts: ['Vaccinate the child and give a follow-up appointment after 6 months', 'Refer immediately to the nearest hospital for admission and evaluation', 'Do full blood count, liver and renal functions', 'Obtain a detailed nutritional history', 'Send for chromosomal analysis'],
  expl: 'Note: Normal height + Underweight → Assess nutrition.',
  note: 'FIVE options printed (A-E). Yellow highlight on D, bold and underlined; the box agrees. Printed number 36 matches n. Red folio 1716. Numerals 6-month-old, below the 3rd centile, the 75th centile and after 6 months are all in the large stem and option type and were read at 150 dpi, where 3rd and 75th are unambiguous; none is a dose, unit or exponent, so none was escalated.' },

{ n: 37, pr: 37, p: 1718,
  key: 3,
  stem: 'Graham is 5 years old and has had an intermittent fever for 4 weeks. He presents to the Emergency Department with a headache and neck stiffness. A CT scan is performed, which is normal. A lumbar puncture is performed. You receive the following result from the laboratory: CSF microscopy: 95 lymphocytes, 10 neutrophils and 0 red blood cells/mm³ ● CSF protein: 2.2 g/L ● CSF glucose: 1.3 mmol/L ● Blood glucose: 6.3 mmol/L What is the most likely diagnosis?',
  opts: ['Ascending polyneuritis (Guillain–Barré syndrome)', 'Bacterial meningitis', 'Blood-stained tap', 'Tuberculosis meningitis', 'Viral meningitis'],
  expl: 'Note: Increased lymphocytes + decreased glucose + increased protein → TB meningitis.',
  note: 'FIVE options printed (A-E). Yellow highlight on D, bold and underlined; the box agrees. Printed number 37 matches n. Red folio 1718. ESCALATED to a 600 dpi crop of the two laboratory lines (crop1718-1718.png) because they carry cell counts, an EXPONENT and three unit-bearing values: confirmed 95 lymphocytes, 10 neutrophils, 0 red blood cells/mm with a SUPERSCRIPT 3 (mm cubed, not mm3 flattened), CSF protein 2.2 g/L, CSF glucose 1.3 mmol/L, Blood glucose 6.3 mmol/L. Stem numerals 5 years old and 4 weeks are large type at 150 dpi. Layout: the three CSF/blood values sit on one line separated by solid round red bullet markers, not on separate lines; they are joined into the stem here with a bullet character between them, and the whole lab block sits between the vignette and the lead-in question. The explanation box sits to the RIGHT of options B and C rather than below the ladder. Noted: option A prints an EN DASH in Guillain–Barré on this page, where n33 on p.1710 printed a hyphen; each is kept as its own page prints it.' },

{ n: 38, pr: 38, p: 1720,
  key: 0,
  stem: 'Which of the following is a characteristic of lactose intolerance in children?',
  opts: ['It is often secondary to viral gastroenteritis', 'It always presents with nausea and vomiting', 'Mucus in stools is a usual finding', 'Lactase supplements are essential in treatment', 'A congenital form is common'],
  expl: 'Note: Lactose intolerance in children is often secondary to viral gastroenteritis (Temporary secondary acquired lactase deficiency).',
  note: 'FIVE options printed (A-E). Yellow highlight on A, bold and underlined; the box agrees. Printed number 38 matches n. Red folio 1720. No numerals anywhere on the page, so nothing needed escalation. Read at 150 dpi.' },

{ n: 39, pr: 39, p: 1722,
  key: 0,
  stem: 'Head circumference of a child was found to be on the 50th centile. 6 months later, it became on the 97th centile. Which of the following is the best next step in management?',
  opts: ['Order MRI head (MRI brain)', 'Measure the mid-parental centile', 'Take a detailed history', 'Do nothing'],
  expl: 'Note: Abrupt increase in head circumference is an indication for brain MRI.',
  note: 'Four options printed (A-D). Yellow highlight on A, bold and underlined; the box agrees. Printed number 39 matches n. Red folio 1722. Numerals 50th centile, 6 months and 97th centile are all in the large stem type and were read at 150 dpi, where each is unambiguous; none is a dose, unit or exponent, so none was escalated.' },

{ n: 40, pr: 40, p: 1724,
  key: 0,
  stem: 'A 2-year-old child presented with convulsions. Examination revealed craniotabes and wide anterior fontanelle. Which of the following would be the most likley serum findings in that patient?',
  opts: ['Low calcium, low phosporus, high alkaline phosphatase', 'Low calcium, low phosporus, low alkaline phosphatase', 'Low calcium, high phosporus, high alkaline phosphatase', 'Low calcium, high phosporus, low alkaline phosphatase'],
  expl: 'Note: Lab findings in case of Rickets: Low (or normal) calcium, low phosporus, high alkaline phosphatase.',
  note: 'Four options printed (A-D). Yellow highlight on A, bold and underlined; the box agrees. Printed number 40 matches n, and it is the last question of this half. Red folio 1724. The only numeral is 2-year-old in the large stem type, read at 150 dpi; the option ladder is entirely qualitative (low/high), carries no figure, unit or exponent, and so needed no escalation. Noted, not corrected: the box widens the key by saying Low (or normal) calcium while every printed option begins Low calcium; the highlight is on A and the key stays there.' },

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
  note: "4 options printed (A-D). Yellow highlight on A (Edema), underlined and bold; the printed note box agrees. Printed number 41 matches n. Red folio 1726 matches the PDF page. No numerals in stem, options or box, so nothing needed escalation on this page. Box is a single short line centred under the ladder." },

{ n: 42, pr: 42, p: 1728,
  key: 0,
  stem: 'The parents of a 10 month-old child are stressed due to small size of the baby as compared to babies who are his age. The mother reports that she gives him little food. Which of the following is the cause for her small size?',
  opts: ['Inadequate caloric intake', 'Genetic Disorder', 'Celiac disease', "Hirschsprung's disease"],
  expl: '',
  note: "4 options printed (A-D). Yellow highlight on A (Inadequate caloric intake). NO explanation box is printed on this sheet, so expl is empty. Printed number 42 matches n. Red folio 1728 matches the PDF page. Only numeral is the age 10 month-old, read cleanly at 150 dpi; not escalated. The stem switches gender mid-way (his age, then her small size) -- transcribed as printed." },

{ n: 43, pr: 43, p: 1730,
  key: 1,
  stem: 'A 13 year-old girl complaining of delayed puberty. Her height is at the 5th centile and the weight is at the 25th centile, with mild delayed bone age. Her mother also had a history of delayed puberty but is now normal. What is the diagnosis?',
  opts: ['Turner syndrome', 'Constitutional growth delay', 'Familial growth delay', 'Endocrinal short stature'],
  expl: 'Note: Delayed puberty + short stature + history of delayed puberty and short stature of a parent who is currently normal → Constitutional delay in growth and puberty.',
  note: "4 options printed (A-D). Yellow highlight on B (Constitutional growth delay); the box agrees, naming constitutional delay in growth and puberty. Printed number 43 matches n. Red folio 1730 matches the PDF page. ESCALATED to a 600 dpi band crop of the stem to confirm the three numerals: age 13, height 5th centile, weight 25th centile -- all confirmed at 600 dpi. The box prints a right-arrow glyph, kept as the arrow character." },

{ n: 44, pr: 44, p: 1732,
  key: 2,
  stem: 'Which of the following is true about shock?',
  opts: ['Anaphylaxis causes shock due to hypovolemia', 'Bradycardia found in compensated shock', 'Mottled, pale and cold skin is found in compensated', 'Gastroenteritis causes shock due to fluid maldistribution', 'Decreased urine output in decompensated shock'],
  expl: 'Clinical signs of early (compensated shock): Tachypnea, tachycardia, decreased skin turgor, sunken eyes and fontanelle, delayed CRT >2 seconds, mottled pale cold skin, core-peripheral temperature gap >4 & decreased urinary output. Clinical signs of late (decompensated shock): Acidotic (Kussmaul) breathing, bradycardia, confusion / depressed cerebral state, blue perpheries, absent urinary ouput & hypotension.',
  note: "5 options printed (A-E) -- this page breaks the four-option pattern of the pages before it. Yellow highlight on C; the box agrees, listing mottled pale cold skin among the early (compensated) signs. Option C is printed incomplete: it ends at 'found in compensated' with no noun, transcribed exactly as printed. Note that option E (decreased urine output in decompensated shock) is also supported by the box, which lists absent urinary output as a late sign and decreased urinary output as an early sign -- recorded, key left on the highlight. Printed number 44 matches n. Red folio 1732 matches the PDF page. ESCALATED to a 600 dpi crop of the small-print box to confirm its two numerals: CRT >2 seconds and temperature gap >4 (a bare 4 with no unit printed) -- both confirmed. The two box lines print their headings in red; colour is not carried into the text." },

{ n: 45, pr: 45, p: 1734,
  key: 2,
  stem: "An infant presented with profuse watery diarrhea that has offensive odor and contains no blood. Which of the following organisms might be the cause for that infan'ts condition?",
  opts: ['Campylobacter jejuni', 'Shigella', 'E-Coli', 'Salmonella'],
  expl: 'Note: Campylobacter jejuni infection, Shigella and some salmonellae species produce a dysenteric type of infection, with blood and pus in the stool, abdominal pain and tenesmus. Cholera and enterotoxigenic Escherichia coli infection are associated with profuse, rapidly dehydrating diarrhoea.',
  note: "4 options printed (A-D). Yellow highlight on C (E-Coli); the box agrees, tying enterotoxigenic Escherichia coli to profuse dehydrating diarrhoea. Printed number 45 matches n. Red folio 1734 matches the PDF page. No numerals anywhere on the page, so nothing was escalated. The stem prints the apostrophe inside the word as infan'ts; transcribed as printed. Box sits centred below the ladder." },

{ n: 46, pr: 46, p: 1736,
  key: 2,
  stem: 'A 5-year-old girl is brought to the clinic because her parents are concerned about her short stature. Her height is below the 3rd percentile, and her weight is in the 25th percentile. Her growth velocity is normal. A bone age assessment reveals that her bone age is consistent with her chronological age. What is the most appropriate next step in management?',
  opts: ['Initiate growth hormone therapy', 'Order a karyotype analysis', 'Monitor growth every 6 months', 'Refer to a pediatric endocrinologist', 'Test for celiac disease'],
  expl: 'This child has familial short stature: height below the 3rd percentile, normal growth velocity, and bone age consistent with chronological age. No immediate intervention is needed; the appropriate management is routine monitoring to ensure growth remains consistent and to detect any deviation that might indicate an underlying pathology.',
  note: "5 options printed (A-E). LAYOUT: the explanation box is printed to the RIGHT of options A-E, not below the ladder, so the ladder had to be read down the left margin past it; all five options are on the left column. Yellow highlight on C (Monitor growth every 6 months); the box agrees, calling for routine monitoring. Printed number 46 matches n. Red folio 1736 matches the PDF page. ESCALATED to two 600 dpi band crops (stem band and option/box band) to confirm every numeral: age 5-year-old, height below the 3rd percentile, weight in the 25th percentile, option C every 6 months, and the box repeating 3rd percentile -- all confirmed at 600 dpi. The box prints its diagnosis phrase in red and routine monitoring in bold; neither is carried into the text." },

{ n: 47, pr: 47, p: 1738,
  key: 1,
  stem: 'For a child with an inserted ventriculoperitoneal shunt, which of the following would be the most accurate measure to be done before lumbar puncture (to exclue shunt occlusion)?',
  opts: ['Signs of increased intracranial pressure', 'CT scan', 'Ultrasound', 'X-ray'],
  expl: 'Note: CT is the most accurate method of detecting shunt occlusion',
  note: "4 options printed (A-D). Yellow highlight on B (CT scan); the box agrees. Printed number 47 matches n. Red folio 1738 matches the PDF page. No numerals on the page, so nothing was escalated. The box is a single line with no closing full stop, transcribed as printed." },

{ n: 48, pr: 48, p: 1740,
  key: 2,
  stem: 'During the evaluation of the growth (or development) of an infant who was born prematurely, which of the following ages has to be considered?',
  opts: ['Chronological age', 'Gestational age', 'Corrected age', 'Parental age'],
  expl: 'If a child has been born prematurely, this should be allowed for by calculating the corrected age from the expected date of delivery.',
  note: "4 options printed (A-D). Yellow highlight on C (Corrected age); the box agrees. Printed number 48 matches n. Red folio 1740 matches the PDF page. No numerals on the page, so nothing was escalated. The box opens without the word Note, unlike most sheets in this half." },

{ n: 49, pr: 49, p: 1742,
  key: 2,
  stem: 'Which of the following categories of children is considered at an increased risk of dehydration?',
  opts: ['Infants who have bloody diarrhea', 'Infants who vomited twice in the previous 24 hours', 'Infants under the age of 6 months', 'Infants who passed three or more diarrhoeal stools in the previous 24 hours'],
  expl: 'The following children are at increased risk of dehydration: • infants, particularly those under 6 months of age or those born with low birthweight • if they have passed five or more diarrhoeal stools in the previous 24hours • if they have vomited more than twice in the previous 24hours • if unable to tolerate supplementary fluids • if they have malnutrition or immune deficiency',
  note: "4 options printed (A-D). Yellow highlight on C (Infants under the age of 6 months); the box agrees on its first bullet. CONTRADICTION RECORDED, key not moved: the box sets the stool threshold at FIVE or more in the previous 24hours while option D prints THREE or more, and the box sets the vomiting threshold at MORE THAN twice while option B prints twice -- both distractors are near-misses of the box figures. Printed number 49 matches n. Red folio 1742 matches the PDF page. ESCALATED to two 600 dpi crops, one of the option ladder and one of the five-bullet box, because this page is dense with thresholds: option B 24 hours, option C 6 months, option D three / 24 hours, box 6 months, five, 24hours, 24hours -- all confirmed at 600 dpi, including the box printing 24hours closed up with no space, twice. The box heading is red." },

{ n: 50, pr: 50, p: 1744,
  key: 1,
  stem: 'Which of the following is true regarding breast milk jaundice?',
  opts: ['Conjugated', 'May be prolonged >2 months', 'Managed by advice to switch to formula feeding', 'It causes pale gray stool'],
  expl: 'Note: Breast milk jaundice is benign and the jaundice may last up to 12 weeks.',
  note: "4 options printed (A-D). Yellow highlight on B (May be prolonged >2 months). The box states a different unit for the same duration -- up to 12 weeks against the option's >2 months -- recorded, key left on the highlight. ESCALATED to two 600 dpi crops, of the highlighted option and of the box, precisely because the two numerals carry different units: the option reads >2 months and the box reads 12 weeks, both confirmed at 600 dpi; the > sign is printed, not a hyphen. Printed number 50 matches n. Red folio 1744 matches the PDF page." },

{ n: 51, pr: 51, p: 1746,
  key: 1,
  stem: 'An infant was born to a diabetic mother. Which of the following is a potnetial complication that might occur in this infant?',
  opts: ['Anemia', 'Polycythemia', 'Hyperglycemia', 'Low birth weight'],
  expl: 'Neonatal problems for infant of diabetic mother: Polycythemia, hypoglycemia, RDS, hypertrophic cardiomyopathy.',
  note: "4 options printed (A-D). Yellow highlight on B (Polycythemia); the box agrees, listing polycythemia first. The box also names hypoglycemia, which is the opposite of option C hyperglycemia -- recorded as the distractor logic, key unmoved. Printed number 51 matches n. Red folio 1746 matches the PDF page. No numerals on the page, so nothing was escalated. The box opens without the word Note." },

{ n: 52, pr: 52, p: 1748,
  key: 4,
  stem: 'A 2-year-old girl has been ill for 2 days with fever, decreased appetite and a rash. On physical examination, you note ulcers on the mouth and tongue. You also see vesicles with surrounding erythema on palms and the dorsum of the hands and feet. What is the most likely causative organism?',
  opts: ['Candida albicans', 'Herpes simplex type 1', 'Parvovirus B19', 'Varicella', 'Enterovirus'],
  expl: 'Note: Enterovirus causes hand, foot and mouth disease → Painful vesicular lesions on the hands, feet, mouth, and tongue, and often also on the buttocks.',
  note: "5 options printed (A-E). Yellow highlight on E (Enterovirus), the last option in the ladder; the box agrees. Printed number 52 matches n. Red folio 1748 matches the PDF page. ESCALATED to a 600 dpi crop of the option ladder to confirm the two option numerals, Herpes simplex type 1 and Parvovirus B19 -- both confirmed; the stem numerals 2-year-old and 2 days were read at 150 dpi. LAYOUT: the ladder runs long enough that the box is pushed to the foot of the sheet and its lower border sits on the page edge, but the box is complete and no text overflows to a later sheet. The box prints a right-arrow glyph, kept as the arrow character." },

{ n: 53, pr: 53, p: 1750,
  key: 1,
  stem: 'A term infant born by elective C-section had developed acute respiratory distress few hours later. What is the most likely diagnosis?',
  opts: ['Pneumonia', 'Transient tachypnea of the newborn', 'Coarctation of the aorta', 'Respiratory distress syndrome', 'Anaemia'],
  expl: 'TTN is the most common cause of respiratory distress in a term infant. It is due to a delay in the resorption of lung liquid – an increased risk following caesarean section.',
  note: "5 options printed (A-E). Yellow highlight on B (Transient tachypnea of the newborn); the box agrees, naming TTN. Printed number 53 matches n. Red folio 1750 matches the PDF page. No numerals on the page, so nothing was escalated. The box opens without the word Note and prints an en dash before the clause about caesarean section, kept as printed." },

{ n: 54, pr: 54, p: 1752,
  key: 3,
  stem: 'An 18-month-old exclusively breast fed infant has not started standing or walking yet. On examination she has swelling of her wrists and an open fontanelle. She has yet to erupt any teeth. Which of the following is the most likely cause?',
  opts: ['Vitamin A deficiency', 'Vitamin B deficiency', 'Vitamin C deficiency', 'Vitamin D deficiency', 'Vitamin E deficiency'],
  expl: 'Note: Exclusive breastfeeding beyond 6 months of age + rickets manifestations → Vitamin D deficiency.',
  note: "5 options printed (A-E), an all-vitamin-letter ladder A through E. Yellow highlight on D (Vitamin D deficiency); the box agrees. Printed number 54 matches n. Red folio 1752 matches the PDF page. ESCALATED to two 600 dpi crops because the option letters and the vitamin letters run in parallel and could be confused, and because two ages are printed: the stem reads 18-month-old and the box reads beyond 6 months of age, both confirmed at 600 dpi. The box prints a right-arrow glyph, kept as the arrow character." },

{ n: 55, pr: 55, p: 1754,
  key: 3,
  stem: 'A 9-year-old girl is admitted to the ward with a history of chest pain on exertion. She is otherwise fit and well but was admitted to hospital at 3 years of age for a prolonged febrile illness where she was observed and discharged without diagnosis or treatment. An ECG is performed which is abnormal and an echocardiogram reveals diffuse dilatation of the left coronary artery. What is most likely to have prevented this condition?',
  opts: ['Antibiotics', 'Antivirals', 'Antifungals', 'Immunoglobulin', 'Immunization'],
  expl: 'This is a missed case of Kawasaki disease with serious complications. The clue here is the previous admission for prolonged fever without treatment. Kawasaki disease is the commonest cause of acquired cardiac disease in children.',
  note: "5 options printed (A-E). LAYOUT: the explanation box is printed to the RIGHT of options B and C, not below the ladder, so the ladder was read down the left margin past it; all five options are in the left column and the highlighted D sits below the box. Yellow highlight on D (Immunoglobulin); the box agrees by implication, naming missed Kawasaki disease, though it never names immunoglobulin explicitly -- recorded. Printed number 55 matches n. Red folio 1754 matches the PDF page. ESCALATED to a 600 dpi crop of the first two stem lines to confirm the two ages, 9-year-old and 3 years of age; both confirmed." },

{ n: 56, pr: 56, p: 1756,
  key: 0,
  stem: 'What is the treatment of choice for a child presenting with white plaques on oral mucous membranes (oral thrush)?',
  opts: ['Antifungal', 'Antiviral', 'Antibacterial', 'Steroids'],
  expl: 'Thrush is treated with topical nystatin or an azole antifungal agent such as fluconazole.',
  note: "4 options printed (A-D). Yellow highlight on A (Antifungal); the box agrees, naming nystatin and fluconazole. Printed number 56 matches n. Red folio 1756 matches the PDF page. No numerals anywhere on the page -- the box names two drugs but prints no dose -- so nothing was escalated. The box opens without the word Note." },

{ n: 57, pr: 57, p: 1758,
  key: 4,
  stem: 'Tanya, an 11-month-old Caucasian girl, is being monitored by her health visitor. Her birthweight was 2.4 kg (0.4th centile) and she has remained on the 2nd centile, now weighing 7.0 kg. Her mother is on the 5th centile and her father is on the 40th centile for height. She is well, has a good appetite and has never needed to visit her doctor. She has no abnormal signs on examination and her development is normal. Which of the following is the most likely diagnosis of that patient?',
  opts: ['Cystic fibrosis', 'Obesity', 'Vitamin C deficiency', 'Marasmus', 'Normal'],
  expl: 'She is growing normally along the 2nd centile for weight, and has no symptoms to suggest an underlying illness. She has short parents and is constitutionally small.',
  note: "5 options printed (A-E). LAYOUT: the explanation box is printed to the RIGHT of options B and C, not below the ladder, so the ladder was read down the left margin past it; the highlighted E sits at the very foot of the sheet, its lower edge touching the page border, and the option is complete. Yellow highlight on E (Normal); the box agrees, calling the child constitutionally small. Printed number 57 matches n. Red folio 1758 matches the PDF page. ESCALATED to a 600 dpi crop of the stem, which is the most numeral-dense page in this half: 11-month-old, birthweight 2.4 kg, 0.4th centile, 2nd centile, now 7.0 kg, mother 5th centile, father 40th centile -- every one confirmed at 600 dpi, including the decimal point in 0.4th and the trailing zero in 7.0. The box repeats 2nd centile, also confirmed." },

{ n: 58, pr: 58, p: 1760,
  key: 0,
  stem: 'Katie is 6 years old. She missed a few days of school as she had a fever and was generally lethargic. Now she has a temperature of 38.3°C and has a marked erythematous rash on her cheeks. Which of the following is the organism that is most likely to be the causative agent in this clinical scenario?',
  opts: ['Parvovirus infection (fifth disease)', 'Roseola infantum (sixth disease)', 'Measles virus', 'Mumps virus', 'Cytomegalovirus infection'],
  expl: "Parvovirus B19 causes erythema infectiosum or fifth disease, which is also known as 'slapped cheek syndrome' because of its characteristic facial rash. This infection will temporarily reduce red cell production, which can result in serious anaemia in children with more rapid red cell turnover (hereditary spherocytosis or sickle cell disease) or the fetus.",
  note: "5 options printed (A-E). LAYOUT: the explanation box is printed to the RIGHT of options B through E, not below the ladder, so the ladder was read down the left margin past it. Yellow highlight on A (Parvovirus infection (fifth disease)); the box agrees, naming Parvovirus B19 and fifth disease. Printed number 58 matches n. Red folio 1760 matches the PDF page. ESCALATED to a 600 dpi crop of the first two stem lines to confirm the temperature 38.3°C with its degree sign and the age 6 years, both confirmed; the box numeral B19 was read at 150 dpi and is unambiguous. The box uses curly quotation marks around the syndrome name, kept as printed." },

{ n: 59, pr: 59, p: 1762,
  key: 1,
  stem: 'How does human milk oligosaccharides work?',
  opts: ['Kill microorganisms', 'Function as prebiotics', 'Help protein absorption', 'Help lactose digestion', 'Prevent infant colic'],
  expl: 'Human milk oligosaccharides work as prebiotics.',
  note: "5 options printed. DEFECTIVE OPTION LETTERING, recorded not corrected: the ladder prints A, B, C, D and then C again -- the fifth option Prevent infant colic is labelled C, repeating the third option's letter, and no E is printed on the sheet. All five options are staged in printed order and the ladder keeps its length; key 1 is the second option, Function as prebiotics, which is where the yellow highlight sits, and the box agrees. Printed number 59 matches n. Red folio 1762 matches the PDF page. ESCALATED to a 600 dpi crop of the whole ladder specifically to confirm the repeated C is really a C and not a smudged E -- confirmed at 600 dpi as the letter C. No numerals on the page." },

{ n: 60, pr: 60, p: 1764,
  key: 3,
  stem: 'What is the most common cause of gastroenteritis in children?',
  opts: ['Shigella', 'Giardia', 'Cryptosporidium', 'Viruses', 'Campylobacter jejuni'],
  expl: '',
  note: "5 options printed (A-E). Yellow highlight on D (Viruses). NO explanation box is printed on this sheet, so expl is empty -- the second such page in this half, after n42. Printed number 60 matches n. Red folio 1764 matches the PDF page. No numerals on the page, so nothing was escalated. The lower half of the question panel is blank where a box would sit." },

/* ENDPOINT part1 -- Model Final Exam 4 -- staging half D, the LAST half (questions n61..n80).
   Source: "Pediatrics endpoint part1.pdf" (Semester 8/Pedo/Questions/), answered pages
   p:1766,1768,1770,1772,1774,1776,1778,1780,1782,1784,1786,1788,1790,1792,1794,1796,1798,1800,
   1802,1804 -- task-supplied list, measured from content/peds/qb-pages/ocr/ep1/index.json on
   2026-09-05 (kind == "answered" within pp.1644-1804; 80 answered sheets, every gap exactly 2).
   That index counts SHEETS, not printed numbers, so the printed question number was read off
   every page and recorded in each entry's note. p.1806 -- one page past the end -- was rendered
   and read as a standing check for a missed final question; what it turned out to be is recorded
   in the closing block below.
   Every question in this exam prints twice (a blank exam sheet, then an answered sheet carrying
   the yellow-highlighted key and usually a bordered explanation box); staging is from the
   ANSWERED sheets ONLY. The blank printings were neither rendered nor read.
   PDF is 1:1, NOT 2-up -- one large-type question per sheet. The red folio at the foot of each
   sheet prints the PDF page number, so a PDF page number IS the printed page.
   key is a ZERO-BASED INDEX into opts (integer), never a letter. key follows the YELLOW
   HIGHLIGHT; where an explanation box disagrees with the highlight, the key stays on the
   highlight and the disagreement is recorded in the note. Contradictions are recorded, never
   corrected, and a defective ladder is staged as printed -- same length, same order.
   Paediatric surgery topics (gastroschisis, atresias, Hirschsprung, intussusception, hernias,
   Wilms, neuroblastoma, urological anomalies) are IN SCOPE for this book and are staged.
   OCR at content/peds/qb-pages/ocr/ep1/p<NNNN>.txt was NOT opened during this staging pass.
   Nothing here comes from OCR text; every character was read off a rendered page image.
   n is the question's position in the SECTION (61..80 here). pr is the PRINTED exam number.
   Where they disagree, n is kept and the disagreement is recorded in that entry's note.
   File format: bare { ... } fragments separated by one blank line -- no array wrapper and no
   commas between entries. `node --check` always fails on this shape and that failure is
   meaningless; validated with tools/bank-harness/check-part-ep.js instead.

   CLOSED 2026-09-05 -- 20/20 entries staged (n61..n80, pp.1766-1804), each appended immediately
   after its page was read and the file re-validated along the way. Final run: 20 entries,
   n 61..80, pp.1766-1804, OK.
   Measured, not assumed: every one of the 20 pages carried a printed exam number, the numbering
   ran 61..80 with NO skip and NO repeat, and it agreed with n on every page -- pr equals n
   throughout, so no disagreement had to be recorded. The red folio matched the PDF page number
   on all 20 sheets.
   OPTION COUNTS ARE NOT UNIFORM in this half: 16 pages printed four options (A-D) and 4 pages
   printed five (A-E) -- n74 p.1792, n77 p.1798, n78 p.1800, n79 p.1802, all four of them
   consecutive answered sheets at the end of the run. The ladder was counted by its letters on
   every page.
   Two pages print NO explanation box and carry expl:'' -- n63 p.1770 and n70 p.1784. Nothing was
   written to fill either. On n71 p.1786 the box is undersized and its last word is printed just
   below the border on the same sheet; no box overflowed onto a later sheet anywhere in this half.
   Two pages set the box to the RIGHT of the ladder rather than below it (n61 p.1766, beside
   options C and D; n69 p.1782, beside option D) and the ladder was read down the left margin
   past it. No page printed a figure.
   Key distribution: index 0 x8, index 1 x7, index 2 x2, index 3 x3.
   Contradictions RECORDED, never corrected, key never moved -- six of them: n62 box qualifies its
   rule as "without severe breathing affection" against a stem describing severe wheeze; n67 box
   calls option C true while itself describing a DISTENDED ampulla against the option's EMPTY one;
   n69 option A gives spontaneous descent by 2 years against the box's "unlikely after 1 year";
   n71 option C reads "Proximal fistula with distal fistula" and never names an atresia; n74 box
   explains only option A and gives no printed reason for excluding D or E; n79 stem asks for the
   most common complication while the box answers for the most common LONG-TERM one.
   Numerals ESCALATED to 600 dpi crops -- eleven crops across nine pages, every one of them either
   a small-print box figure or an all-numeric ladder:
     p.1770 stem + full ladder, "38 weeks", "3 kg", "LHR of 1.5"   (crop1770-1770.png)
     p.1772 box, "within 48 hours"                                 (crop1772-1772.png)
     p.1774 option D, "50%"                                        (crop1774-1774.png)
     p.1776 box, "About 30%", "trisomy 21"                         (crop1776-1776.png)
     p.1782 box, "6-12 months" and "after 1 year"                  (crop1782box-1782.png)
     p.1782 stem, "18-month-old", "2 years of age"                 (crop1782stem-1782.png)
     p.1784 whole ladder, the >=11 / >=17 / >=2 mm option ladder   (crop1784-1784.png)
     p.1790 option B, "in 5%"                                      (crop1790optB-1790.png)
     p.1790 box, "about 50% of cases, not 5%"                      (crop1790box-1790.png)
     p.1794 stem, "at 10 cm from nostril"                          (crop1794-1794.png)
     p.1798 box, "About 85%"                                       (crop1798-1798.png)
   The recurring unit trap was hunted for specifically and did NOT bite here: p.1782 is the only
   page whose two intervals differ in unit (6-12 months vs 1 year) and both were confirmed on the
   crop; p.1784's three options are all in mm.
   ONE PAGE PAST THE END, p.1806, was rendered and read: it is a BLANK, UNANSWERED exam sheet --
   no yellow highlight and no explanation box anywhere on it -- and it restarts the numbering at
   "1", printing a 5-week-old male infant with progressive post-prandial vomiting and a pylorus
   measured at 18 mm x 6 mm, with five management options A-E. So Model Final Exam 4 ends at
   printed question 80 on p.1804 and a new exam begins on the next sheet. No missed final
   question. NOTE: p.1805 was NOT rendered (it is an odd sheet and outside the answered list), so
   the new exam's printed TITLE was not read and is not confirmed here.
*/

{ n: 61, pr: 61, p: 1766,
  key: 0,
  stem: 'Jonathan, aged 6 years, is brought to the Emergency Department after becoming unwell at a family party. He is unable to say more than a single word and he indicates that he is finding it hard to breathe. He is very anxious. He has a raised itchy rash that is spreading from his face down to his chest. He has never had an episode like this before, although his mother explains that he has asthma and he has been prescribed a salbutamol inhaler previously for wheezy episodes. What is the best management of this child?',
  opts: ['Give oxygen and establish airway', 'Give anti-histamines', 'Watchful waiting', 'Give anti-asthmatic'],
  expl: 'Anaphylaxis with inability to breathe and establishing airway. The initial management is giving oxygen.',
  note: 'Four options printed (A-D). Printed number 61, matches n. Red folio 1766, matches the PDF page. Yellow highlight sits on option A, bold and underlined; the box agrees (initial management is giving oxygen). The explanation box is printed to the RIGHT of options C and D, not below the ladder, so the ladder was read down the left margin past it. The only numerals on the page are the age "6 years" and the question number, both large type and unambiguous at 150 dpi; no numeral needed a 600 dpi crop.' },

{ n: 62, pr: 62, p: 1768,
  key: 0,
  stem: 'An 8-year-old girl is brought to hospital following ingestion of a cereal bar containing peanuts. She is noted to have a widespread urticarial rash and swelling of the face and lips. She is finding it difficult to speak and there is widespread wheeze on auscultation. What is the single most important step in her management?',
  opts: ['Intramuscular epinephrine', 'Oral corticosteroids', 'Oxygen therapy', 'Chlorphenamine (anti-histamine)'],
  expl: 'The single most important step in management of anaphylaxis (without severe breathing affection) is IM epinephrine.',
  note: 'Four options printed (A-D). Printed number 62, matches n. Red folio 1768, matches the PDF page. Yellow highlight sits on option A, bold and underlined; the box agrees. Box printed below the ladder, centred. Only numeral is the age "8-year-old" in large type, read at 150 dpi, no crop needed. Recorded, not corrected: the stem describes widespread wheeze and difficulty speaking, yet the box qualifies its rule as "without severe breathing affection" -- the box and the stem sit oddly together; the key stays on the highlight.' },

{ n: 63, pr: 63, p: 1770,
  key: 0,
  stem: 'An infant with a prenatal diagnosis of a diaphragmatic hernia is born at 38 weeks gestation and weighs 3 kg. The child develops respiratory distress within three hours of birth. Which of the following is a poor prognostic indicator for survival?',
  opts: ['Presence of stomach in the chest', 'Left-sided diaphragmatic hernia', 'Lung-to-head ratio (LHR) of 1.5', 'Normal vaginal delivery as the mode of birth'],
  expl: '',
  note: 'Four options printed (A-D). Printed number 63, matches n. Red folio 1770, matches the PDF page. Yellow highlight sits on option A, bold and underlined. NO EXPLANATION BOX IS PRINTED on this sheet -- the area below the ladder is blank -- so expl is empty; nothing was written to fill it. Paediatric surgery, in scope. ESCALATED to a 600 dpi band crop (crop1770-1770.png) covering the stem and the whole ladder, because option C carries a decimal ratio and the stem carries a gestation and a weight: confirmed "38 weeks gestation", "3 kg", "three hours" spelt out, and "Lung-to-head ratio (LHR) of 1.5" -- the 1.5 is a decimal point, not a comma, and the units read correctly at both resolutions.' },

{ n: 64, pr: 64, p: 1772,
  key: 3,
  stem: 'Which of the following is NOT true regarding congenital diaphragmatic hernia (CDH)?',
  opts: ['May be diagnosed antenatally', 'Is usually left-sided', 'May be associated with pulmonary hypoplasia', 'Repair is required within the next 48 hours'],
  expl: 'Surgery is delayed until the infant is hemodynamically stable, rather than performed immediately within 48 hours.',
  note: 'Four options printed (A-D). Printed number 64, matches n. Red folio 1772, matches the PDF page. Yellow highlight sits on option D, bold and underlined; the box agrees. Box printed below the ladder. In the box, "delayed until the infant is hemodynamically stable" is set bold; the bold is not reproduced in expl. Paediatric surgery, in scope. ESCALATED to a 600 dpi crop of the box band (crop1772-1772.png) because the box repeats the option D interval in small print: confirmed "within 48 hours" in the box and "within the next 48 hours" in option D -- same number, same unit.' },

{ n: 65, pr: 65, p: 1774,
  key: 1,
  stem: 'Which of the following is TRUE regarding undescended testes (cryptorchidism)?',
  opts: ['Always approached using an inguinal approach', 'Ectopic testes may be found in the perineum', 'Usually requires a two-stage procedure', 'Are bilateral in 50% of cases'],
  expl: 'Some undescended testes are ectopic and located outside the normal path, like in the perineum or femoral region.',
  note: 'Four options printed (A-D). Printed number 65, matches n. Red folio 1774, matches the PDF page. Yellow highlight sits on option B, bold and underlined; the box agrees (ectopic testes outside the normal path, perineum). Box printed below the ladder. In the box, "ectopic" is set bold; the bold is not reproduced in expl. Paediatric surgery, in scope. ESCALATED to a 600 dpi crop of option D (crop1774-1774.png) because it carries a bare percentage: confirmed "50%", two digits, not 5.0% and not 60%.' },

{ n: 66, pr: 66, p: 1776,
  key: 1,
  stem: 'An infant with duodenal atresia is also likely to have:',
  opts: ['Biliary atresia', "Down's syndrome", 'Imperforate anus', 'Pyloric stenosis'],
  expl: 'About 30% of duodenal atresia cases are associated with trisomy 21 (Down syndrome).',
  note: "Four options printed (A-D). Printed number 66, matches n. Red folio 1776, matches the PDF page. Yellow highlight sits on option B, bold and underlined; the box agrees. Box printed below the ladder. In the box, \"30% of duodenal atresia cases\" is set bold; the bold is not reproduced in expl. Option B prints an apostrophe in Down's syndrome, so that option string is double-quoted. Paediatric surgery, in scope. ESCALATED to a 600 dpi crop of the box band (crop1776-1776.png) because it carries a percentage and a chromosome number in small print: confirmed \"About 30%\" and \"trisomy 21\" -- 30 not 80, 21 not 24." },

{ n: 67, pr: 67, p: 1778,
  key: 0,
  stem: "All of the following statements concerning Hirschsprung's disease in children are true, EXCEPT:",
  opts: ['An absence of ganglion cells in a dilated segment of the colon is the underlying problem', 'Constipation is a classic symptom and almost always begins in the early days of life', 'Rectal examination of affected patients usually reveals an empty rectal ampulla', 'It is more common in males'],
  expl: "In Hirschsprung's disease, the aganglionic segment is narrow and contracted, not dilated. The proximal segment becomes dilated due to obstruction. Other statements are true: constipation begins early, the rectal ampulla may be distended with failure of relaxation, and the disease is more common in males.",
  note: "Four options printed (A-D); options A, B and C each run onto a second line, so the ladder was counted by its letters, not by its lines. Printed number 67, matches n. Red folio 1778, matches the PDF page. Yellow highlight sits on option A and covers both of its lines, bold and underlined; the box agrees. Box printed below the ladder, four lines, and it sits tight against the foot of the page. In the box, \"aganglionic segment is narrow and contracted\" and \"proximal segment becomes dilated\" are set bold; the bold is not reproduced in expl. Stem and options carry no numerals, so nothing was escalated on this page. Paediatric surgery, in scope. RECORDED, not corrected: the box calls the other statements true, yet option C says rectal examination reveals an EMPTY rectal ampulla while the box says the ampulla may be DISTENDED with failure of relaxation -- the box contradicts the option it is calling true. The key stays on the highlight." },

{ n: 68, pr: 68, p: 1780,
  key: 0,
  stem: 'Which of the following is NOT a typical cause of neonatal intestinal obstruction?',
  opts: ['Intussusception', 'Meconium ileus', "Hirschsprung's disease", 'Incarcerated hernia'],
  expl: "Intussusception is rare in neonates; common causes include meconium ileus, Hirschsprung's disease, and incarcerated hernia.",
  note: "Four options printed (A-D). Printed number 68, matches n. Red folio 1780, matches the PDF page. Yellow highlight sits on option A, bold and underlined; the box agrees. Box printed below the ladder. In the box, \"rare in neonates\" is set bold; the bold is not reproduced in expl. No numerals anywhere on the page beyond the question number, so nothing was escalated. Paediatric surgery, in scope." },

{ n: 69, pr: 69, p: 1782,
  key: 1,
  stem: "Worried parents bring in their full-term 18-month-old infant for evaluation of a unilateral undescended testis (UDT). On examination, normal male genitalia with scrotal asymmetry are noted. Despite maneuvers to detect a retractile testicle, the right testis is not palpable. What should be the next step in this patient's management?",
  opts: ['The patient should be reexamined prior to 2 years of age because most patients undergo spontaneous descent of the testicle by 2 years of age.', 'Laparoscopy for presence and localization of the testicle.', 'Hormonal therapy with human chorionic gonadotropin (hCG).', 'Imaging studies.'],
  expl: 'Non-palpable testes after 6–12 months require laparoscopy to locate or remove, because spontaneous descent is unlikely after 1 year. Hormonal therapy is less effective.',
  note: "Four options printed (A-D); option A runs to two lines. Every option is printed with a closing full stop and that punctuation is transcribed as printed. Printed number 69, matches n. Red folio 1782, matches the PDF page. Yellow highlight sits on option B, bold and underlined; the box agrees. The explanation box is printed to the RIGHT of option D, not below the ladder, so the ladder was read down the left margin past it. ESCALATED to a 600 dpi crop of the box band (crop1782box-1782.png) because the box carries two intervals in small print and this exam's recurring trap is a unit: confirmed \"after 6–12 months\" (en dash, months not weeks) and \"after 1 year\" (year not month). The stem's \"18-month-old\" and option A's two instances of \"2 years of age\" are large type and were read at 150 dpi and re-read on a 600 dpi stem crop (crop1782stem-1782.png), which confirmed \"18\" and \"2 years\" but was cropped short of the right margin. RECORDED, not corrected: option A claims most patients undergo spontaneous descent by 2 years of age, while the box states spontaneous descent is unlikely after 1 year -- the two disagree on the age. The key stays on the highlight." },

{ n: 70, pr: 70, p: 1784,
  key: 1,
  stem: 'One of the important sonographic signs of infantile hypertrophic pyloric stenosis is:',
  opts: ['Pyloric thickness ≥11 mm', 'Pyloric duct length ≥17 mm', 'Pyloric muscle thickness ≥2 mm', 'None of the above'],
  expl: '',
  note: 'Four options printed (A-D). Printed number 70, matches n. Red folio 1784, matches the PDF page. Yellow highlight sits on option B, bold and underlined. NO EXPLANATION BOX IS PRINTED on this sheet -- the whole lower half of the page is blank -- so expl is empty and nothing was written to fill it. Paediatric surgery, in scope. This is an ALL-NUMERIC OPTION LADDER and was ESCALATED to a 600 dpi crop of the whole ladder (crop1784-1784.png). Read off that crop: A is "greater-than-or-equal-to 11 mm" (two separate 1s, not 4 and not 1.1), B is "greater-than-or-equal-to 17 mm", C is "greater-than-or-equal-to 2 mm". All three carry the same relational sign, printed as a greater-than over a single underline, and all three are in mm -- no unit differs between options here. Transcribed with the U+2265 character.' },

{ n: 71, pr: 71, p: 1786,
  key: 1,
  stem: 'A healthy newborn starts spitting after the first feed. NG tube cannot be passed. X-ray shows a dilated stomach. What is the likely diagnosis?',
  opts: ['Hypertrophic pyloric stenosis', 'Esophageal atresia with distal fistula', 'Proximal fistula with distal fistula', 'Meconium ileus'],
  expl: 'Failure to pass an NG tube and proximal gastric dilation indicate esophageal atresia, not pyloric stenosis or meconium ileus.',
  note: 'Four options printed (A-D). Printed number 71, matches n. Red folio 1786, matches the PDF page. Yellow highlight sits on option B, bold and underlined; the box agrees. In the box, "esophageal atresia" is set bold; the bold is not reproduced in expl. LAYOUT: the box is undersized for its text and its last word, "ileus.", is printed OUTSIDE and just below the bottom border, on the same sheet -- nothing carries to a later sheet, so no box field is set; the word is included in expl because it is part of the same sentence. No numerals on the page beyond the question number, so nothing was escalated. Paediatric surgery, in scope. RECORDED, not corrected: option C reads "Proximal fistula with distal fistula", which describes a fistula twice and never names an atresia; it is staged exactly as printed.' },

{ n: 72, pr: 72, p: 1788,
  key: 2,
  stem: 'Major determinant of poor survival after TEF repair:',
  opts: ['Esophageal leak', 'Pneumonia', 'Presence of other anomalies', 'Site of fistula'],
  expl: 'Associated anomalies, especially cardiac, are the biggest factor affecting survival, more than leaks or fistula location.',
  note: 'Four options printed (A-D). Printed number 72, matches n. Red folio 1788, matches the PDF page. Yellow highlight sits on option C, bold and underlined; the box agrees. Box printed below the ladder. In the box, "biggest factor affecting survival" is set bold; the bold is not reproduced in expl. No numerals on the page beyond the question number, so nothing was escalated. Paediatric surgery, in scope.' },

{ n: 73, pr: 73, p: 1790,
  key: 1,
  stem: 'True about Esophageal Atresia (EA) EXCEPT:',
  opts: ["Primary repair isn't always possible", 'Associated with anomalies in 5%', 'Semi-sitting position is a good nursing position', 'Failure of passage of NG tube'],
  expl: 'Esophageal atresia is associated with other anomalies in about 50% of cases, not 5%. Primary repair may not always be possible, NG tube fails to pass, and semi-sitting position is recommended for feeding.',
  note: "Four options printed (A-D). Printed number 73, matches n. Red folio 1790, matches the PDF page. Yellow highlight sits on option B, bold and underlined; the box agrees (it names 5% as the wrong figure). Box printed below the ladder, three lines. In the box, \"other anomalies in about 50% of cases\" is set bold; the bold is not reproduced in expl. Option A prints a curly right-single-quote in isn't; transcribed with a plain apostrophe, so that option string is double-quoted. ESCALATED to two 600 dpi crops because the whole question turns on telling two percentages apart: crop1790optB-1790.png confirms option B reads \"in 5%\" (one digit), and crop1790box-1790.png confirms the box reads \"about 50% of cases, not 5%\" -- 50 with two digits in the first position and 5 with one in the second. Paediatric surgery, in scope." },

{ n: 74, pr: 74, p: 1792,
  key: 0,
  stem: 'All of the following are part of VACTERL syndrome except:',
  opts: ['Vaginal hypoplasia', 'Imperforate anus', 'Tracheo-esophageal fistula', 'Polycystic kidney', 'Polydactyly'],
  expl: 'VACTERL includes Vertebral, Anal, Cardiac, Tracheo-esophageal, Renal, and Limb anomalies. Vaginal hypoplasia is not part of the classic association.',
  note: 'FIVE options printed (A-E) -- the first five-option ladder in this half; the ladder was counted by its letters and E. Polydactyly is the last. Printed number 74, matches n. Red folio 1792, matches the PDF page. Yellow highlight sits on option A, bold and underlined; the box agrees. Box printed below the ladder, two lines, no bold anywhere in it. No numerals on the page beyond the question number, so nothing was escalated. Paediatric surgery, in scope. RECORDED, not corrected: the box explains only why option A is outside VACTERL and says nothing about options D or E, so the page gives no printed reason for excluding them from the EXCEPT stem.' },

{ n: 75, pr: 75, p: 1794,
  key: 0,
  stem: 'Best investigation for arrest of catheter at 10 cm from nostril in a newborn:',
  opts: ['Plain X-ray', 'Barium swallow', 'Lipidol swallow', 'Gastrografin meal'],
  expl: 'If a catheter cannot pass beyond a certain point, a plain X-ray can show the level of obstruction or coiling and help diagnose esophageal atresia. Contrast studies are generally not first-line in this situation.',
  note: 'Four options printed (A-D). Printed number 75, matches n. Red folio 1794, matches the PDF page. Yellow highlight sits on option A, bold and underlined; the box agrees. Box printed below the ladder, three lines. In the box, "plain X-ray" is set bold; the bold is not reproduced in expl. ESCALATED to a 600 dpi crop of the stem band (crop1794-1794.png) because the stem carries a distance with a unit: confirmed "at 10 cm from nostril" -- 10 with a one and a zero, and cm, not mm. Paediatric surgery, in scope. Option C spells the contrast agent "Lipidol"; transcribed as printed.' },

{ n: 76, pr: 76, p: 1796,
  key: 2,
  stem: 'Ideal position for newborn with esophageal atresia:',
  opts: ['Supine', 'Prone', 'Semi-sitting', 'Trendelenburg'],
  expl: 'Newborns with EA are placed semi-sitting to prevent aspiration of saliva or gastric contents. Supine or prone can increase risk of aspiration, and Trendelenburg is not appropriate.',
  note: 'Four options printed (A-D). Printed number 76, matches n. Red folio 1796, matches the PDF page. Yellow highlight sits on option C, bold and underlined; the box agrees. Box printed below the ladder, three lines. In the box, "semi-sitting" is set bold; the bold is not reproduced in expl. No numerals on the page beyond the question number, so nothing was escalated. Paediatric surgery, in scope.' },

{ n: 77, pr: 77, p: 1798,
  key: 1,
  stem: 'Most common type of congenital esophageal anomaly:',
  opts: ['Atresia with fistula into upper pouch', 'Atresia with fistula into lower pouch', 'Fistula into both pouches', 'Simple atresia without fistula', 'Fistula without atresia'],
  expl: 'About 85% of EA cases have a distal tracheoesophageal fistula, making it the most common type. Other forms like isolated EA or H-type are less frequent.',
  note: 'FIVE options printed (A-E) -- second five-option ladder in this half. Printed number 77, matches n. Red folio 1798, matches the PDF page. Yellow highlight sits on option B, bold and underlined; the box agrees, since a distal tracheoesophageal fistula is the fistula into the lower pouch. Box printed below the ladder, three lines, no bold anywhere in it. ESCALATED to a 600 dpi crop of the box band (crop1798-1798.png) because the box carries a percentage in small print: confirmed "About 85%" -- 85, not 35 and not 8.5. Paediatric surgery, in scope.' },

{ n: 78, pr: 78, p: 1800,
  key: 0,
  stem: 'Diagnosis in a neonate with excessive salivation, respiratory distress, and coiling NG tube:',
  opts: ['Proximal esophageal atresia without fistula', 'Proximal EA with distal TEF', 'H-type TEF', 'EA with both proximal and distal TEF', 'Congenital esophageal stricture'],
  expl: 'Coiling of the NG tube in the upper pouch plus drooling and respiratory distress strongly suggests proximal EA without distal connection.',
  note: 'FIVE options printed (A-E) -- third five-option ladder in this half. Printed number 78, matches n. Red folio 1800, matches the PDF page. Yellow highlight sits on option A, bold and underlined; the box agrees. Box printed below the ladder, two lines. In the box, "proximal EA without distal connection" is set bold; the bold is not reproduced in expl. No numerals on the page beyond the question number, so nothing was escalated. Paediatric surgery, in scope.' },

{ n: 79, pr: 79, p: 1802,
  key: 3,
  stem: 'Most common complication after repair of EA with distal TEF:',
  opts: ['Anastomotic leak', 'Esophageal stricture', 'Recurrent TEF', 'Gastroesophageal reflux', 'Tracheomalacia'],
  expl: 'The most common long-term complication after repair of EA with distal TEF is GER, which can cause dysphagia and respiratory problems. Anastomotic strictures are common early, but GER predominates over time.',
  note: 'FIVE options printed (A-E) -- fourth five-option ladder in this half. Printed number 79, matches n. Red folio 1802, matches the PDF page. Yellow highlight sits on option D, bold and underlined; the box agrees. Box printed below the ladder, four lines. In the box, "GER" is set bold on its first appearance only; the bold is not reproduced in expl. No numerals on the page beyond the question number, so nothing was escalated. Paediatric surgery, in scope. RECORDED, not corrected: the stem asks for the most common complication without qualification, while the box answers for the most common LONG-TERM complication and concedes that anastomotic strictures are common early -- so the box narrows the stem to make the key work. The key stays on the highlight.' },

{ n: 80, pr: 80, p: 1804,
  key: 3,
  stem: 'Which statements are true regarding EA?',
  opts: ['Most diagnosed after first week', 'Excessive salivation', 'Feeding causes choking', 'B and C are true'],
  expl: 'Excessive salivation and choking with feeds are classic signs of EA. Diagnosis is often made in the first days of life, not usually after a week.',
  note: 'Four options printed (A-D); option D is a combining option that names options B and C by their printed letters, so the letters are preserved inside the option text even though key is a zero-based index. Printed number 80, matches n. Red folio 1804, matches the PDF page. Yellow highlight sits on option D, bold and underlined; the box agrees. Box printed below the ladder, two lines. In the box, "first days of life" is set bold; the bold is not reproduced in expl. The only interval on the page is "first week" in option A and "after a week" in the box; both are large enough to read at 150 dpi and they agree, so no crop was needed. Paediatric surgery, in scope. This is the last answered sheet of Model Final Exam 4.' }

];
