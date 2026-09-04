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
  note: '5 options printed (A-E). Read off the full page rendered at 150 dpi (pg-1565-1565.png); the page is one large-serif question per sheet and every numeral was individually legible at that scale. NUMERAL ESCALATION: the core temperature was re-rendered as a 600 dpi band crop (crop-1565-temp, -x 3400 -y 760 -W 1500 -H 280, one render, nothing clipped) because override 5 names a temperature as a risky numeral -- it reads 35.5°C, degree sign and capital C both present. All other numerals ("4 kg", "6 hours of age", "ruptured 24 hours previously", "90 breaths/min", "4 seconds", "pulse 180/min", "89% in air") were read directly off the 150 dpi page image, none from OCR. Key: the yellow highlight sits on option B, "Group B streptococcus" (highlighted, bold, underlined) -> zero-based index 1; the explanation box agrees. Box is inset to the RIGHT of options B-C, two printed lines, transcribed verbatim including the slash in "sepsis/pneumonia". Printed number "41." matches n41. Red folio "1565" at the foot confirms the PDF page IS the printed page (override 1 holds). No boiler line printed.' }

{ n: 42, pr: 42, p: 1567,
  key: 3,
  stem: 'A 5-year-old boy, at a birthday party, presented with sudden onset of edema that started in his lips and eyelids, then spread to the dorsum of the hands and the genitalia. What is the first possibility?',
  opts: ['Nutritional anemia', 'Nephrotic syndrome', 'Hepatic insufficiency', 'Angioedema', 'Heart failure'],
  expl: 'Rapid onset swelling without renal, hepatic, or cardiac features → allergic angioedema.',
  note: '5 options printed (A-E). Read off pg-1567-1567.png at 150 dpi. The only numeral in the question is "5-year-old", read directly off the page image, not from OCR; nothing on this page is a dose, exponent, temperature or threshold, so no 600 dpi crop was needed. Key: yellow highlight on option D, "Angioedema" (highlighted, bold, underlined) -> zero-based index 3; the explanation box agrees. The box sits BELOW the whole option ladder, centred, two printed lines, and prints a literal right-arrow glyph and red bold text on "allergic angioedema" -- the arrow is transcribed as printed. Printed number "42." matches n42. Red folio "1567". No boiler line printed.' }

{ n: 43, pr: 43, p: 1569,
  key: 2,
  stem: 'Which of the following is true about neonatal sepsis?',
  opts: ['A heart murmur is usually present.', 'Early-onset sepsis is usually acquired via the placenta following maternal infection.', 'Pneumonia is the commonest presentation in early-onset sepsis.', 'High fever is commonly present.', 'CBC is done to detect neutrophilia.'],
  expl: '•Early-onset neonatal sepsis (within the first 72 hours) is usually acquired from the maternal genital tract during delivery. The most frequent clinical manifestation is respiratory distress or pneumonia, often caused by pathogens like Group B Streptococcus or E. coli.',
  note: '5 options printed (A-E); each option is a full sentence and each prints a trailing full stop, reproduced here. Read off pg-1569-1569.png at 150 dpi. The single numeral is the box\'s "within the first 72 hours", read directly off the page image, not from OCR; it is a plain duration rather than a dose, exponent, temperature or threshold, so no 600 dpi crop was taken. Key: yellow highlight on option C, "Pneumonia is the commonest presentation in early-onset sepsis." (highlighted, bold, underlined, and the highlight runs the full width of the line including the trailing stop) -> zero-based index 2; the box agrees. The box sits BELOW the option ladder, four printed lines, italic bold, and opens with a literal bullet glyph immediately against the first word with no space -- transcribed exactly as printed. Printed number "43." matches n43. Red folio "1569". No boiler line printed. Topically adjacent to n41 on p.1565 (both early-onset neonatal sepsis / GBS) but a different question -- not a reprint.' }

{ n: 44, pr: 44, p: 1571,
  key: 1,
  stem: 'Which of the following is a cause of bacterial meningitis in children?',
  opts: ['Group A streptococci', 'Streptococcus pneumoniae', 'E. coli', 'Pseudomonas'],
  expl: 'After the neonatal period, S. pneumoniae is the most common cause of bacterial meningitis.',
  note: 'FOUR options printed (A-D), which is a real shape in this exam and not a clipped ladder: the cream question panel runs on empty for roughly a third of its height below option D before the explanation box, and there is no E line and no page-break artefact -- checked on the whole page rendered at 150 dpi (pg-1571-1571.png). No numerals in stem, options or box, so nothing to escalate to 600 dpi; that zero is stated from reading the whole page as one image. Key: yellow highlight on option B, "Streptococcus pneumoniae" (highlighted, bold, underlined) -> zero-based index 1; the box agrees, naming the same organism in its abbreviated form "S. pneumoniae" (an abbreviation of the same answer is agreement, not a contradiction). Box sits below the ladder, two printed lines. Printed number "44." matches n44. Red folio "1571". No boiler line printed.' }

{ n: 45, pr: 45, p: 1573,
  key: 2,
  stem: 'How is the preterm newborn defined?',
  opts: ['≤ 37 weeks gestation', '> 37 weeks gestation', '< 37 weeks gestation', '≥ 30 weeks gestation', '≤ 30 weeks gestation'],
  expl: 'Preterm is defined as <37 completed weeks of gestation.',
  note: '5 options printed (A-E). NUMERAL ESCALATION, the exact case override 5 names: an all-numeric option ladder whose whole discrimination is the inequality sign, so the entire ladder was re-rendered as a 600 dpi band crop (crop-1573-ladder, -x 140 -y 470 -W 1500 -H 1140, one render, no line clipped at either edge). At 600 dpi the five signs resolve unambiguously: A prints a two-stroke less-than-or-equal, B a bare greater-than, C a bare less-than, D a two-stroke greater-than-or-equal, E a two-stroke less-than-or-equal. The options print a space between the sign and the number ("≤ 37"); the explanation box prints its sign closed up against the number ("<37 completed weeks") -- both transcribed as printed. Key: yellow highlight on option C, "< 37 weeks gestation" (highlighted, bold, underlined, highlight spans the whole line) -> zero-based index 2; the box agrees, and the A/C pair differ only by the equality stroke, which is why the crop was taken. Box sits below the ladder, one printed line. Printed number "45." matches n45. Red folio "1573". No boiler line printed.' }

{ n: 46, pr: 46, p: 1575,
  key: 3,
  stem: 'What is the main cause of edema in kwashiorkor?',
  opts: ['Proteinuria', 'Hepatomegaly', 'Elevated serum sodium', 'Low Protein intake', 'Protein loss in stools'],
  expl: 'Hypoalbuminemia from protein deficiency leads to decreased oncotic pressure and edema.',
  note: '5 options printed (A-E). Read off pg-1575-1575.png at 150 dpi. No numerals anywhere in stem, options or box -- stated after reading the whole page as one image -- so nothing to escalate to 600 dpi. Key: yellow highlight on option D, "Low Protein intake" (highlighted, bold, underlined; the mid-word capital P is as printed) -> zero-based index 3; the box agrees, giving the mechanism rather than repeating the option wording. Box sits below the ladder, two printed lines. Printed number "46." matches n46. Red folio "1575". No boiler line printed.' }

{ n: 47, pr: 47, p: 1577,
  key: 1,
  stem: 'Which of the following is a feature of marasmus?',
  opts: ['Dermatosis', 'Gross muscle wasting', 'Edema', 'Hair changes'],
  expl: 'Marasmus = severe wasting without edema. Kwashiorkor shows edema and dermatosis.',
  note: 'FOUR options printed (A-D), a real shape and not a clipped ladder: the cream panel runs on empty for about a third of its height below option D before the explanation box, with no E line and no page-break artefact -- checked on the whole page at 150 dpi (pg-1577-1577.png). No numerals in stem, options or box, so nothing to escalate to 600 dpi; that zero is stated from reading the whole page as one image. Key: yellow highlight on option B, "Gross muscle wasting" (highlighted, bold, underlined) -> zero-based index 1; the box agrees. Box sits below the ladder, two printed lines, and prints a literal equals sign in "Marasmus = severe wasting". Printed number "47." matches n47. Red folio "1577". No boiler line printed. Paired topically with n46 on p.1575 (kwashiorkor edema): the two share the malnutrition theme and the box here names kwashiorkor, but the stems and ladders differ entirely -- not a shared menu and not a reprint.' }

{ n: 48, pr: 48, p: 1579,
  key: 1,
  stem: "A newborn baby is noted to have hepatosplenomegaly and a petechial rash. His red eye reflex is abnormal and there is no heart murmur. He fails his newborn screening hearing test. His mother's antenatal screening bloods were all normal. What is the most likely condition that has caused these symptoms?",
  opts: ['Dysmorphic syndrome', 'Congenital infection', 'Infant of diabetic mother', 'Cranial abnormality', 'Neonatal infection'],
  expl: 'TORCH infections (esp. CMV, rubella) cause “blueberry muffin rash,” hepatosplenomegaly, cataracts, hearing loss.',
  note: '5 options printed (A-E). Read off pg-1579-1579.png at 150 dpi. No numerals in stem, options or box -- stated from reading the whole page as one image -- so nothing to escalate to 600 dpi. Key: yellow highlight on option B, "Congenital infection" (highlighted, bold, underlined) -> zero-based index 1; the box agrees, naming TORCH as the class of congenital infection. Note the deliberately close distractor E, "Neonatal infection", which the highlight does NOT sit on. Box is inset to the right, level with option E, two printed lines; it prints curly quotation marks around “blueberry muffin rash,” with the comma inside the closing quote, reproduced exactly. Printed number "48." matches n48. Red folio "1579". No boiler line printed.' }

{ n: 49, pr: 49, p: 1581,
  key: 2,
  stem: 'What is the most important and effective action in neonatal resuscitation if the baby does not start to breathe after delivery?',
  opts: ['Provide oxygen.', 'Perform chest compressions.', 'Ventilate the lungs.', 'Give epinephrine.', 'Tracheal intubation.'],
  expl: 'Failure to breathe requires positive pressure ventilation, the single most important intervention.',
  note: '5 options printed (A-E); every option prints a trailing full stop, reproduced. Read off pg-1581-1581.png at 150 dpi. No numerals in stem, options or box -- stated from reading the whole page as one image -- so nothing to escalate to 600 dpi. Key: yellow highlight on option C, "Ventilate the lungs." (highlighted, bold, underlined, the highlight covering the trailing stop) -> zero-based index 2; the box agrees, naming the same action as "positive pressure ventilation" (different words for the same answer, which is agreement, not a contradiction). Box sits below the ladder, two printed lines. Printed number "49." matches n49. Red folio "1581". No boiler line printed.' }

{ n: 50, pr: 50, p: 1583,
  key: 4,
  stem: 'Which of the following is the most common cause of pediatric cardiopulmonary arrest?',
  opts: ['Cardiac arrhythmias', 'Metabolic abnormalities', 'Overwhelming infections', 'Trauma', 'Respiratory problems'],
  expl: 'Unlike adults (cardiac), in children respiratory failure is the most common cause.',
  note: '5 options printed (A-E). Read off pg-1583-1583.png at 150 dpi. No numerals in stem, options or box -- stated from reading the whole page as one image -- so nothing to escalate to 600 dpi. Key: yellow highlight on option E, "Respiratory problems" (highlighted, bold, underlined) -> zero-based index 4; the box agrees, phrasing it as "respiratory failure" (same answer in different words). Box sits below the ladder, one printed line. Printed number "50." matches n50. Red folio "1583". No boiler line printed.' }

{ n: 51, pr: 51, p: 1585,
  key: 0,
  stem: 'Which bone is most often fractured in difficult deliveries?',
  opts: ['Clavicle', 'Humerus', 'Skull', 'Femur', 'Tibia'],
  expl: 'The clavicle is most commonly fractured, often with shoulder dystocia.',
  note: '5 options printed (A-E). Read off pg-1585-1585.png at 150 dpi. No numerals in stem, options or box -- stated from reading the whole page as one image -- so nothing to escalate to 600 dpi. Key: yellow highlight on option A, "Clavicle" (highlighted, bold, underlined), the first option on the page and immediately under the stem -> zero-based index 0; the box agrees. Box sits below the ladder, one printed line. Printed number "51." matches n51. Red folio "1585". No boiler line printed.' }

{ n: 52, pr: 53, p: 1587,
  key: 0,
  stem: 'Which of the following laboratory findings is diagnostic of infantile rickets?',
  opts: ['Normal calcium level and low phosphorus level', 'Low calcium level and normal phosphorus level', 'High calcium level and low phosphorus level', 'High calcium level and normal phosphorus level', 'High calcium level and high phosphorus level'],
  expl: 'Rickets typically shows low phosphate, normal/low calcium, and high alkaline phosphatase.',
  note: '5 options printed (A-E). Read off pg-1587-1587.png at 150 dpi. ⚠️ pr != n, AND THE BOOK CONTRADICTS ITSELF ABOUT THE NUMBER: this answered page prints "53." while the immediately preceding blank sheet p.1586 prints the SAME question -- word-for-word identical stem and the same five options in the same order, unhighlighted -- numbered "52.". p.1586 was rendered at 150 dpi (chk-1586-1586.png) specifically to settle this, because the answered run had printed 41..51 in step up to p.1585 and then jumped to 53. So the answered printing skips the number 52; the blank printing does not. n is kept as the section position (52nd question of the section, the 12th of this half, on the 12th answered sheet of a clean +2 run) per the task instruction, and pr records what this answered page actually prints. This predicts pr = n+1 on the answered sheets that follow; each is recorded as printed rather than assumed. Only ONE question is involved -- no question was lost and none was duplicated; p.1585 (q51, clavicle) and p.1587 are different questions. NUMERALS: none in stem, options or box; the option ladder is qualitative ("Normal/Low/High ... level"), not numeric, so there was nothing to escalate to 600 dpi. Key: yellow highlight on option A, "Normal calcium level and low phosphorus level" (highlighted, bold, underlined) -> zero-based index 0. BOX-vs-KEY: the box says "low phosphate, normal/low calcium, and high alkaline phosphatase" -- it allows calcium to be normal OR low where the highlighted option says normal, and it introduces alkaline phosphatase, which no option mentions; the highlight is unambiguous and the key stays on it. Box sits below the ladder, one printed line. Red folio "1587". No boiler line printed.' }

{ n: 53, pr: 54, p: 1589,
  key: 0,
  stem: 'Which of the following statements is TRUE about transient tachypnea of the newborn?',
  opts: ['Commonly associated with caesarian section delivery.', 'Commonly associated with preterm delivery.', 'Usually treated with mechanical ventilation.', 'Caused by surfactant deficiency.', 'Mild prenatal infection is a common association.'],
  expl: 'TTN is due to delayed clearance of lung fluid, especially after C-section. It resolves within 48–72 hours.',
  note: '5 options printed (A-E); each option prints a trailing full stop, reproduced. Read off pg-1589-1589.png at 150 dpi. ⚠️ pr != n: this page prints "54." against n53, exactly the +1 offset the p.1587 entry predicted -- the answered run skipped the printed number 52 while the blank run used it. pr is recorded as printed and n stays the section position; nothing was renumbered. NUMERALS: the only numeral is the box\'s range "48–72 hours", read directly off the page image, printed with an en dash and no spaces; it is a plain duration, not a dose, exponent, temperature or threshold, so no 600 dpi crop was taken. Key: yellow highlight on option A, "Commonly associated with caesarian section delivery." (highlighted, bold, underlined, highlight covering the trailing stop) -> zero-based index 0; the box agrees, calling it "after C-section". Box sits below the ladder, two printed lines. Red folio "1589". No boiler line printed.' }

{ n: 54, pr: 55, p: 1591,
  key: 4,
  stem: 'Which of the following statements concerning immunization is TRUE?',
  opts: ['Vaccines should not be given if the baby has a runny nose.', 'Oral polio vaccine is safe in immune-compromised children.', 'Hepatitis A vaccine is given immediately after birth in Egypt.', 'BCG is a killed vaccine.', 'MMR vaccine is a live attenuated virus vaccine.'],
  expl: 'MMR is a live attenuated vaccine. OPV is not safe in immunocompromised, and BCG is also live, not killed.',
  note: '5 options printed (A-E); each option prints a trailing full stop, reproduced. Read off pg-1591-1591.png at 150 dpi. ⚠️ pr != n: prints "55." against n54 -- the same +1 offset first seen at p.1587, recorded as printed, n unchanged. No numerals anywhere in stem, options or box -- stated from reading the whole page as one image -- so nothing to escalate to 600 dpi. Key: yellow highlight on option E, "MMR vaccine is a live attenuated virus vaccine." (highlighted, bold, underlined, covering the trailing stop) -> zero-based index 4; the box agrees and additionally explains why B and D are false. Note the stem prints "immune-compromised" in option B and the box prints "immunocompromised" -- both transcribed as printed. Box sits below the ladder, two printed lines. Red folio "1591". No boiler line printed.' }

{ n: 55, pr: 56, p: 1593,
  key: 3,
  stem: 'A full-term neonate develops jitteriness and poor feeding at 4 hours of life. He was born to a primigravida who had uncontrolled gestational diabetes mellitus. Birth weight was 4 kg. The mother fed the baby at 3 hours of life. On examination, the baby is jittery, but all neonatal reflexes are normal. His systemic examination is normal. His investigation showed blood glucose of 35 mg/dl, hemoglobin 20 g/dl, and hematocrit 63%. His electrolytes and calcium are normal. What is the most probable cause of hypoglycemia in this neonate?',
  opts: ['Polycythemia', 'Delayed feeding', 'Birth asphyxia', 'Hyperinsulinemia'],
  expl: 'Infants of diabetic mothers develop hyperinsulinemia, leading to hypoglycemia after birth.',
  note: 'FOUR options printed (A-D), a real shape and not a clipped ladder: option D is the last line inside the cream panel, the panel closes just beneath it, and the red folio sits immediately below -- no E line and no page-break artefact; checked on the whole page at 150 dpi (pg-1593-1593.png). ⚠️ pr != n: prints "56." against n55, the same +1 offset first seen at p.1587; recorded as printed, n unchanged. NUMERAL ESCALATION -- this page carries three laboratory values, so each was re-rendered at 600 dpi: crop-1593-glu (-x 3200 -y 1020 -W 1500 -H 200) reads "blood glucose of 35"; crop-1593-hb (-x 150 -y 1190 -W 1500 -H 200) reads "mg/dl, hemoglobin 20 g/d"; the hematocrit needed TWO renders -- crop-1593-hct (-x 3100 -y 1190) started past the number and caught only "s electrolytes and calcium", so the band was widened and shifted left to crop-1593-hct2 (-x 2250 -y 1180 -W 1600 -H 220), which reads "atocrit 63%. His electrolytes" with the number clear of both edges. The unit is mg/dl for glucose and g/dl for hemoglobin, both lower-case as printed. The remaining numerals ("4 hours of life", "4 kg", "3 hours of life") were read off the 150 dpi page. Nothing came from OCR. Key: yellow highlight on option D, "Hyperinsulinemia" (highlighted, bold, underlined) -> zero-based index 3; the box agrees. Note that the stem\'s polycythemia numbers (Hb 20 g/dl, Hct 63%) support distractor A while the key is D -- that is the question working as designed, not a contradiction. Box is inset to the RIGHT of options B-C rather than under the ladder, two printed lines. Red folio "1593". No boiler line printed.' }

{ n: 56, pr: 57, p: 1595,
  key: 2,
  stem: 'What is the most likely cause of faltering growth in a 9-month-old baby?',
  opts: ['Small ASD', 'Acute UTI', 'Persistent diarrhea', 'Mild intermittent asthma', 'Acute gastroenteritis requiring IV fluids'],
  expl: 'Chronic diarrhea is a leading cause of growth faltering in infancy.',
  note: '5 options printed (A-E). Read off pg-1595-1595.png at 150 dpi. ⚠️ pr != n: prints "57." against n56, the same +1 offset first seen at p.1587; recorded as printed, n unchanged. The only numeral is "9-month-old" in the stem, read directly off the page image, not from OCR; it is not a dose, exponent, unit, temperature or threshold, so no 600 dpi crop was taken. Key: yellow highlight on option C, "Persistent diarrhea" (highlighted, bold, underlined) -> zero-based index 2; the box agrees, calling it "Chronic diarrhea" -- the same answer in different words, not a contradiction. Box sits below the ladder, one printed line. Red folio "1595". No boiler line printed.' }

{ n: 57, pr: 58, p: 1597,
  key: 3,
  stem: 'Which is a character of "constitutional growth delay"?',
  opts: ['It is a pathological condition.', 'It occurs only in girls.', 'There is a lower final height.', 'There is a delayed onset of puberty.', 'It presents early in infancy.'],
  expl: 'Constitutional delay is benign, with normal final height but delayed puberty.',
  note: '5 options printed (A-E); every option prints a trailing full stop, reproduced. The stem prints straight double quotation marks around "constitutional growth delay", reproduced as printed. Read off pg-1597-1597.png at 150 dpi. ⚠️ pr != n: prints "58." against n57, the same +1 offset first seen at p.1587; recorded as printed, n unchanged. No numerals anywhere in stem, options or box -- stated from reading the whole page as one image -- so nothing to escalate to 600 dpi. Key: yellow highlight on option D, "There is a delayed onset of puberty." (highlighted, bold, underlined, covering the trailing stop) -> zero-based index 3; the box agrees, and it also disposes of distractor C by saying final height is normal. Box sits below the ladder at the far left of the panel and is set two printed lines, but the drawn border encloses only the first line -- the word "puberty." sits below the bottom border rather than inside it. The full two-line text is transcribed; this is a layout defect in the printing, not missing text. Red folio "1597". No boiler line printed.' }

{ n: 58, pr: 59, p: 1599,
  key: 4,
  stem: 'Which of the following is the most common cause of pediatric cardiopulmonary arrest?',
  opts: ['Cardiac arrhythmias', 'Metabolic abnormalities', 'Overwhelming infections', 'Trauma', 'Respiratory problems'],
  expl: 'respiratory failure is the leading cause of cardiac arrest in children.',
  note: '5 options printed (A-E). Read off pg-1599-1599.png at 150 dpi. ⚠️ pr != n: prints "59." against n58, the same +1 offset first seen at p.1587; recorded as printed, n unchanged. ⚠️ WITHIN-SECTION REPRINT, RECORDED AND NOT FOLDED (brief section 9): this is the same question as n50 on p.1583 of this same half -- identical stem word for word, the same five options in the same order, and the highlight on the same option E. The exam prints it twice, at printed numbers 50 and 59. The ONE printed difference is the explanation box, which is worded differently here ("respiratory failure is the leading cause of cardiac arrest in children.") from the box on p.1583 ("Unlike adults (cardiac), in children respiratory failure is the most common cause."). Both are transcribed as printed; folding is a later adjudication decision, not a staging one. FLAGGED, not cosmetic: this box begins with a lower-case "respiratory" and carries no lead-in clause, so it reads as though an opening fragment is missing from the printing -- transcribed exactly as it stands. No numerals in stem, options or box -- stated from reading the whole page as one image -- so nothing to escalate to 600 dpi. Key: yellow highlight on option E, "Respiratory problems" (highlighted, bold, underlined) -> zero-based index 4; the box agrees. Box sits below the ladder, one printed line. Red folio "1599". No boiler line printed.' }

{ n: 59, pr: 60, p: 1601,
  key: 2,
  stem: 'An 11-month-old infant appears unwell with sunken eyes and reduced skin turgor. Capillary refill time (CRT) was found to be 5 seconds and extremities were cold. Which of the following would be the first step in the proper management of this infant?',
  opts: ['Breastfeeding', 'Oral rehydration solution', 'IV normal saline', 'Oral antibiotic'],
  expl: 'Any child presenting with manifestations of shock :  Begin treatment by  resuscitation with IV normal saline 20 ml/kg',
  note: 'FOUR options printed (A-D), a real shape and not a clipped ladder: the panel runs on empty for about a fifth of its height below option D before the explanation box, with no E line and no page-break artefact; checked on the whole page at 150 dpi (pg-1601-1601.png). ⚠️ pr != n: prints "60." against n59, the same +1 offset first seen at p.1587; recorded as printed, n unchanged. NUMERAL ESCALATION: the box carries a DOSE, so it was re-rendered at 600 dpi -- crop-1601-dose (-x 1800 -y 2250 -W 1800 -H 230, one render, both edges clear) reads "citation with IV normal saline 20 ml/kg", confirming twenty and the unit ml/kg in lower case. The stem numerals ("11-month-old", "CRT ... 5 seconds") were read off the 150 dpi page; nothing came from OCR. The box prints no closing full stop, which is reproduced. Key: yellow highlight on option C, "IV normal saline" (highlighted, bold, underlined) -> zero-based index 2; the box agrees and adds the volume. Box sits below the ladder, two printed lines. Red folio "1601". No boiler line printed. RECORDED FOR THE ADJUDICATION PASS, NOT FOLDED: the shock-with-CRT-5-seconds picture recurs in this exam (a 5-second CRT also appears in the shock vignette staged earlier in this section), but this is a management question with a four-option ladder and a different stem, so it is a distinct question, not a reprint.' }

{ n: 60, pr: 61, p: 1603,
  key: 1,
  stem: 'An 18-month-old boy presents with 3 days of vomiting and diarrhea. The vomiting has now settled but he continues to have loose stools (he had about eight loose stools in the last 24 hours). His mucous membranes are dry, he has sunken eyes and appears lethargic. His skin turgor is reduced. His extremities are warm and capillary refill time is normal. What is the next step in management?',
  opts: ['Analgesic / antipyretic', 'Oral rehydration solution', 'IV normal saline', 'Oral antibiotic'],
  expl: 'Any child presenting with manifestations of dehydration Oral rehydration solution.',
  note: 'FOUR options printed (A-D), a real shape and not a clipped ladder: option D is the last line in the panel, the box sits to its right, and the panel closes just beneath -- no E line and no page-break artefact; checked on the whole page at 150 dpi (pg-1603-1603.png). ⚠️ pr != n: prints "61." against n60, the same +1 offset first seen at p.1587; recorded as printed, n unchanged. This is the last answered sheet of half C. NUMERALS: "18-month-old", "3 days", "eight loose stools" (spelled as a word, as printed) and "the last 24 hours" -- all read directly off the 150 dpi page image, none from OCR; none is a dose, exponent, unit, temperature or threshold, so no 600 dpi crop was taken. Key: yellow highlight on option B, "Oral rehydration solution" (highlighted, bold, underlined) -> zero-based index 1; the box agrees. FLAGGED, not cosmetic: the box reads "Any child presenting with manifestations of dehydration Oral rehydration solution." with no connective between "dehydration" and "Oral" -- words appear to be missing from the printing itself; transcribed exactly as it stands. Box is inset to the RIGHT, level with option D, two printed lines. Red folio "1603". No boiler line printed. SHARED OPTION MENU, RECORDED AS A PAIRING AND NOT FOLDED (brief section 9): options B, C and D here are word-for-word the last three options of n59 on p.1601, in the same order; only option A differs (n59 prints "Breastfeeding", this prints "Analgesic / antipyretic"). The discriminating clinical tokens are explicit and opposite -- n59 prints cold extremities with a CRT of 5 seconds and keys IV normal saline, while this one prints warm extremities with a normal capillary refill time and keys oral rehydration solution. Two separate questions built on one menu.' }
