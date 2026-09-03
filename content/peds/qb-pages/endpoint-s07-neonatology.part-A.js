/* ===========================================================================
   ENDPOINT — Pediatrics endpoint part1.pdf — SECTION 7 "Neonatology", PART A.
   Verbatim staging record. Written 2026-09-03. Covers n=1..18 (pp.797-832,
   answered pages only). Source is a 1-up exported slide deck: one PDF page =
   one book page = the cited page number. Pages pulled as native embedded
   JPEGs via tools\ep-index\pull.py (no rasterising unless noted). OCR index
   under content\peds\qb-pages\ocr\ was NOT opened for transcription, per
   brief -- used only as a locate aid where cited.

   Header extended page by page as staging proceeds; see notes below and in
   each entry for what was checked.

   Boundary check: p.774 = "Neonatology" title slide; p.795 = "Questions"
   divider; p.796 = Q1 unanswered printing (4 options, A-D, no E). Section
   preamble/questions boundary confirmed at p.795/796 as the brief states.

   p.797 few-options flag CONFIRMED REAL, not an OCR miss: the page genuinely
   prints only 4 options (A-D). Cross-checked against the House-bank match
   `pedhd-neo-1` (app\data\questions.peds.js), which prints the identical
   stem/vignette but with a 5th option ("The alveoli still contain fluid",
   the TTN distractor) that this ENDPOINT printing omits entirely -- a real
   difference between the two banks' printings, not a transcription defect.

   p.798 CONFIRMED to be the explanation-box overflow for n1 (Q1, p.797): its
   34 words ("This preterm infant at 32 weeks is at high risk of respiratory
   distress syndrome due to surfactant deficiency...") continue directly from
   the highlighted key with no new stem/options/banner -- folded into n1's
   expl, nothing staged as its own entry.
   =========================================================================== */

{ n: 1, pr: 1, p: 797,
  key: 2,
  stem: 'Natasha, a female infant, is delivered by caesarean section at 32 weeks\' gestation because of maternal pre-eclampsia. Her birth weight is 1.9 kg. No resuscitation is required. At 2 hours of age, she develops respiratory distress, with a respiratory rate of 70 breaths/min, grunting, and indrawing of her rib cage. Respiratory support with CPAP (continuous positive airway pressure) and 45% oxygen is required. A chest X-ray is taken at 4 hours of age. What is the most likely reason that this baby needs oxygen therapy and respiratory support?',
  opts: ['Aspiration of meconium has resulted in lung collapse', 'Blood is still flowing from the pulmonary artery to the aorta as in the fetal circulation', 'There is ventilation-perfusion mismatch from surfactant deficiency', 'The chest wall and ribs are too compliant'],
  expl: 'This preterm infant at 32 weeks is at high risk of respiratory distress syndrome due to surfactant deficiency. Surfactant reduces alveolar surface tension, and its absence leads to alveolar collapse and ventilation-perfusion mismatch.',
  fig: 'Grayscale frontal (AP) chest radiograph of a newborn infant, positioned to the right of the stem/options.',
  figAlt: 'Grayscale frontal (AP) chest radiograph of a newborn infant.',
  note: 'Page genuinely prints only 4 options (A-D), no C missing -- the "few-options" OCR flag is a false positive; see header. Key highlighted: yellow box on "C. There is ventilation-perfusion mismatch from surfactant deficiency". p.798 is this question\'s explanation-box overflow (see header) -- its text is folded into expl above; nothing staged for p.798 itself. Cross-bank match CONFIRMED: pedhd-neo-1 (House, app\\data\\questions.peds.js) prints the identical stem/figure/key but with a 5th option ("The alveoli still contain fluid") that this printing omits -- record only, no fold (different bank).' }

{ n: 2, pr: 2, p: 800,
  key: 0,
  stem: 'Robert is a full-term male infant, born 10 hours ago. His mother is blood group O Rhesus positive, and her membranes ruptured 2 days before delivery. He is breastfeeding well, but the midwife noticed he looks jaundiced. On examination, the baby is clinically well but markedly jaundiced. What investigation should be performed first?',
  opts: ['Bilirubin level', 'Blood culture', 'Blood group', 'Congenital infection screen', 'Direct antibody test'],
  expl: 'In any jaundiced newborn, especially within the first 24 hours, the initial step is to measure the serum bilirubin level. This helps determine the severity of jaundice and guides further investigation and treatment.',
  note: 'Key highlighted: yellow box on "A. Bilirubin level". Cross-bank match CONFIRMED: pedhd-neo-2 (House, app\\data\\questions.peds.js) prints the identical stem/options/key -- record only, no fold (different bank).' }

{ n: 3, pr: 3, p: 802,
  key: 1,
  stem: 'Isabelle was born at term weighing 4 kg. At 6 hours of age, she was noted to be breathing fast and have a low temperature. She was born by normal vaginal delivery and the membranes had ruptured 24 hours previously. Isabelle has not breastfed since birth and has vomited once. On examination, she is lethargic, her core temperature is 35.5' + String.fromCharCode(176) + 'C, respiratory rate 90 breaths/min, capillary refill time 4 seconds, pulse 180/min, and oxygen saturation 89% in air. Her chest X-ray shows consolidation at the right base. What is the most likely causative organism?',
  opts: ['Escherichia coli (E. coli)', 'Group B streptococcus', 'Herpes simplex virus (HSV)', 'Listeria monocytogenes'],
  expl: 'Isabelle\'s clinical picture suggests early-onset neonatal sepsis, which commonly presents with respiratory distress and temperature instability. Group B Streptococcus is the most common cause in neonates, especially with prolonged rupture of membranes.',
  note: 'Page genuinely prints only 4 options (A-D). Numerals read directly off the image (native 800x450, legible, no crop needed): weight 4 kg, age at onset 6 hours, membranes ruptured 24 hours previously, temp 35.5' + String.fromCharCode(176) + 'C, RR 90/min, CRT 4 sec, pulse 180/min, SpO2 89%. Key highlighted: yellow box on "B. Group B streptococcus". Cross-bank match CONFIRMED: pedhd-neo-3 (House) prints the identical stem/key with a 5th option ("Staphylococcus aureus") that this printing omits -- record only, no fold (different bank).' }

{ n: 4, pr: 4, p: 804,
  key: 0,
  stem: 'James was born at 39 weeks\' gestation by elective caesarean section because of pre-eclampsia. His birth weight was 3.7 kg. He fed well initially but is now vomiting after every feed. He is now 18 hours old, and after the last two feeds, he "vomited everything up" and it was greenish. On examination, his temperature is 36.5' + String.fromCharCode(176) + 'C, and he is alert and hungry. His abdomen is not distended. He has not yet passed meconium. What is the most likely diagnosis?',
  opts: ['Duodenal atresia', 'Hirschsprung' + String.fromCharCode(8217) + 's disease', 'Meconium ileus', 'Neonatal sepsis', 'Pyloric stenosis'],
  expl: 'Bilious vomiting in a neonate without meconium passage raises suspicion for intestinal obstruction. Duodenal atresia is a common cause and often presents within the first day of life with greenish (bilious) vomiting.',
  note: 'All 5 options printed (A-E), read cleanly off the native image, no crop needed. Numerals: gestation 39 weeks, birth weight 3.7 kg, age 18 hours, temp 36.5' + String.fromCharCode(176) + 'C. Key highlighted: yellow box on "A. Duodenal atresia". Cross-bank match CONFIRMED: pedhd-neo-4 (House) prints identical stem/options/key -- record only, no fold (different bank).' }

{ n: 5, pr: 5, p: 806,
  key: 1,
  stem: 'Mohammed was born at term, weighing 3 kg. He is 6 hours old and on the postnatal ward with his mother, who asked the midwife to review him because he is breathing very quickly. He required mask ventilation at birth to establish breathing. By 5 minutes, he was crying and handed to his mother. On examination, he is breathing at 64 breaths/min, with mild chest recession. Breath sounds are reduced on the left compared with the right. Oxygen saturation is 95%. What is the most likely diagnosis?',
  opts: ['Pneumonia', 'Pneumothorax', 'Respiratory distress syndrome', 'Persistent pulmonary hypertension of the newborn'],
  expl: 'Reduced breath sounds on one side in a neonate with respiratory distress following resuscitation suggest pneumothorax. This is a known complication after positive pressure ventilation.',
  fig: 'Grayscale frontal (AP) chest radiograph of a newborn infant, positioned to the right of the explanation box.',
  figAlt: 'Grayscale frontal (AP) chest radiograph of a newborn infant.',
  note: 'Page genuinely prints only 4 options (A-D). Numerals: birth weight 3 kg, age 6 hours, RR 64/min, SpO2 95%. Key highlighted: yellow box on "B. Pneumothorax". Cross-bank match CONFIRMED: pedhd-neo-5 (House, image q-pd-hd-55) prints identical stem/figure/key with a 5th option ("Bronchopulmonary dysplasia") that this printing omits -- record only, no fold (different bank).' }

{ n: 6, pr: 6, p: 808,
  key: 3,
  stem: 'Sabrina was born at 37 weeks\' gestation, birth weight 2.8 kg. At 2 hours of age, she was noted to be breathing very fast. On examination, respiratory rate is 72 breaths/min with moderate chest recession. Heart sounds are difficult to hear on the left, and the apex beat is palpable on the right side. What is the most likely diagnosis?',
  opts: ['Pneumonia', 'Pneumothorax', 'Respiratory distress syndrome', 'Diaphragmatic hernia', 'Bronchopulmonary dysplasia'],
  expl: 'Displacement of heart sounds and apex beat to the right with respiratory distress in a newborn suggests a diaphragmatic hernia. Abdominal contents herniate into the thoracic cavity, causing pulmonary hypoplasia.',
  fig: 'Grayscale frontal (AP) chest radiograph of a newborn infant, positioned to the right of the options.',
  figAlt: 'Grayscale frontal (AP) chest radiograph of a newborn infant.',
  note: 'All 5 options printed (A-E). Numerals: gestation 37 weeks, birth weight 2.8 kg, age 2 hours, RR 72/min. Key highlighted: yellow box on "D. Diaphragmatic hernia". Not on the brief\'s predicted-House-match list (only 797/800/802/804/806); not checked against House for a match.' }

{ n: 7, pr: 7, p: 810,
  key: 4,
  stem: 'Thomas, a baby boy with a birth weight of 875 g at 28 weeks\' gestation, required artificial ventilation for 2 weeks. At 10 weeks of age, he still needs additional oxygen via nasal cannulae. What is the most likely diagnosis?',
  opts: ['Pneumonia', 'Pneumothorax', 'Respiratory distress syndrome', 'Diaphragmatic hernia', 'Bronchopulmonary dysplasia'],
  expl: 'Bronchopulmonary dysplasia is a chronic lung disease in preterm infants who required prolonged ventilation and oxygen. Ongoing oxygen need at 36 weeks corrected gestational age confirms this diagnosis.',
  fig: 'Grayscale frontal (AP) chest radiograph of an infant, positioned to the right of the options.',
  figAlt: 'Grayscale frontal (AP) chest radiograph of an infant.',
  note: 'All 5 options printed (A-E). Numerals read clearly off the native image, no ambiguity: birth weight 875 g, gestation 28 weeks, ventilation duration 2 weeks, age at assessment 10 weeks. Key highlighted: yellow box on "E. Bronchopulmonary dysplasia". Cross-bank match CONFIRMED: pedhd-neo-7 (House, image q-pd-hd-56b) prints identical stem/figure/options/key -- record only, no fold (different bank). Task table\'s n7 cell said "809->810"; read at 810 per the brief\'s own correction.' }

{ n: 8, pr: 8, p: 812,
  key: 0,
  stem: 'Stewart is a full-term baby boy, born 16 hours ago. His mother is blood group O Rhesus positive. The baby is breastfeeding well, but the midwife noted he looks jaundiced. His bilirubin was 150 ' + String.fromCharCode(956) + 'mol/L at 10 hours and intensive phototherapy was started. Six hours later, bilirubin is 250 ' + String.fromCharCode(956) + 'mol/L. The baby\'s blood group is A Rhesus positive. What is the most likely cause?',
  opts: ['ABO incompatibility', 'Biliary atresia', 'Breastmilk jaundice', 'Physiological jaundice', 'Rhesus hemolytic disease'],
  expl: 'The infant has early and rapidly rising jaundice, with maternal group O and baby group A' + String.fromCharCode(8212) + 'indicating ABO incompatibility. This is a common cause of hemolytic disease in neonates.',
  note: 'All 5 options printed (A-E). Numerals read directly off the native image, legible, no crop needed: age 16 hours, bilirubin 150 ' + String.fromCharCode(956) + 'mol/L at 10 hours, repeat 250 ' + String.fromCharCode(956) + 'mol/L six hours later. Key highlighted: yellow box on "A. ABO incompatibility". Cross-bank match CONFIRMED: pedhd-neo-8 (House) prints identical options/key -- record only, no fold (different bank).' }

{ n: 9, pr: 9, p: 814,
  key: 1,
  stem: 'Alfie is a 3-week-old male infant whose mother is concerned about pale stools. He is breastfed. On examination, he is jaundiced, has mild hepatomegaly, and has only just regained his birth weight. What is the most likely diagnosis?',
  opts: ['ABO incompatibility', 'Biliary atresia', 'Breastmilk jaundice', 'Physiological jaundice', 'Rhesus hemolytic disease'],
  expl: 'Prolonged jaundice with pale stools and hepatomegaly in a neonate is classic for biliary atresia. It causes conjugated hyperbilirubinemia and requires early surgical intervention for better outcomes.',
  note: 'All 5 options printed (A-E), identical option ladder/order to n8 (p.812) -- a shared option menu, not a fold: discriminating tokens are age (3 weeks vs. hours old) and clinical picture (pale stools + hepatomegaly + failure to regain birth weight vs. an ABO/bilirubin-trend setup). Key highlighted: yellow box on "B. Biliary atresia". Not on the brief\'s predicted-House-match list; not checked against House for a match.' }

{ n: 10, pr: 10, p: 816,
  key: 2,
  stem: 'Poppy is a 2-week-old breastfed baby who is thriving but jaundiced. Her bilirubin level is 170 ' + String.fromCharCode(956) + 'mol/L and nearly all unconjugated. Urine dipstick is negative. What is the most likely cause?',
  opts: ['ABO incompatibility', 'Biliary atresia', 'Breastmilk jaundice', 'Physiological jaundice', 'Rhesus hemolytic disease'],
  expl: 'Breastmilk jaundice presents in a thriving breastfed baby with prolonged unconjugated jaundice beyond the first week. It is benign and requires no treatment.',
  note: 'All 5 options printed (A-E), identical option ladder/order to n8/n9 -- a shared menu, not a fold: discriminating tokens are age (2 weeks), thriving/well baby, bilirubin 170 ' + String.fromCharCode(956) + 'mol/L nearly all unconjugated, negative urine dipstick. Numeral read directly off the native image, legible. Key highlighted: yellow box on "C. Breastmilk jaundice". Not on the brief\'s predicted-House-match list; not checked against House for a match.' }

{ n: 11, pr: 11, p: 818,
  key: 3,
  stem: 'Dimitri is 20 hours old and markedly jaundiced, requiring intensive phototherapy. Both mother and baby are group A Rhesus positive. He is feeding well and is alert. What is the most likely cause?',
  opts: ['ABO incompatibility', 'Biliary atresia', 'Breastmilk jaundice', 'G6PD deficiency', 'Rhesus hemolytic disease'],
  expl: 'In a jaundiced baby with no ABO or Rh incompatibility, G6PD deficiency is a likely cause of hemolytic jaundice, especially if the jaundice appears early and is significant. It is more common in certain ethnic groups.',
  note: 'All 5 options printed (A-E). Shares A/B/C/E with n8-n10\'s ladder but option D differs here (G6PD deficiency in place of Physiological jaundice) -- a related but not identical menu; discriminating token is same-group mother/baby (ruling out ABO/Rh) plus early/marked jaundice. Key highlighted: yellow box on "D. G6PD deficiency". Not on the brief\'s predicted-House-match list; not checked against House for a match.' }

{ n: 12, pr: 12, p: 820,
  key: 2,
  stem: 'Rebecca was born 48 hours ago at term weighing 3.2 kg. She is breathing very quickly and not feeding. On examination, respiratory rate is 68 breaths/min, with mild chest recession. She appears unwell. Femoral pulses are weak, and oxygen saturation is 85% in air. What is the most likely diagnosis?',
  opts: ['Pneumonia', 'Transient tachypnoea of the newborn', 'Coarctation of the aorta', 'Respiratory distress syndrome', 'Anaemia'],
  expl: 'Weak femoral pulses, hypoxia, and poor feeding in a newborn suggest duct-dependent congenital heart disease like coarctation. This typically presents after ductal closure in the first few days of life.',
  note: 'All 5 options printed (A-E). Numerals: age 48 hours, birth weight 3.2 kg, RR 68/min, SpO2 85%. Key highlighted: yellow box on "C. Coarctation of the aorta". Not on the brief\'s predicted-House-match list; not checked against House for a match.' }

{ n: 13, pr: 13, p: 822,
  key: 1,
  stem: 'Zak, a full-term male infant, weighing 3.7 kg, is born by elective caesarean section. He becomes tachypnoeic with indrawing at 2 hours of age. Examination and chest X-ray are otherwise normal. What is the most likely diagnosis?',
  opts: ['Pneumonia', 'Transient tachypnoea of the newborn', 'Coarctation of the aorta', 'Respiratory distress syndrome', 'Anaemia'],
  expl: 'TTN is common after elective caesarean due to delayed lung fluid clearance. It presents with tachypnea shortly after birth and typically resolves within 48-72 hours.',
  note: 'All 5 options printed (A-E), identical option ladder/order to n12 (p.820) -- a shared menu, not a fold: discriminating tokens are delivery mode (elective caesarean) and a normal exam/normal chest X-ray, vs. n12\'s weak femoral pulses/desaturation. Numerals: birth weight 3.7 kg, age 2 hours. Key highlighted: yellow box on "B. Transient tachypnoea of the newborn". Not on the brief\'s predicted-House-match list; not checked against House for a match.' }

{ n: 14, pr: 14, p: 824,
  key: 4,
  stem: 'A 15-month-old girl is referred for developmental assessment. She was born at term weighing 3400 g, needed resuscitation at birth with Apgar scores of 3 at 1 minute, 4 at 5 minutes, and 7 at 10 minutes. She was ventilated for 3 days. She now has global developmental delay. What is the most likely explanation?',
  opts: ['Congenital hypothyroidism', 'Meningitis', 'Inborn error of metabolism', 'Intracranial hemorrhage', 'Hypoxic-ischaemic encephalopathy (HIE)'],
  expl: 'A history of low Apgar scores, ventilation, and developmental delay strongly suggests HIE, resulting from perinatal asphyxia. This is a major cause of cerebral palsy and developmental disorders.',
  note: 'All 5 options printed (A-E). Numerals: age 15 months, birth weight 3400 g, Apgar 3 at 1 min / 4 at 5 min / 7 at 10 min, ventilated 3 days -- all read clearly off the native image. Key highlighted: yellow box on "E. Hypoxic-ischaemic encephalopathy (HIE)". Cross-bank match CONFIRMED: pedhd-neo-14 (House) prints the same stem/options/key; House renders the dash in "Hypoxic-ischaemic" as an en dash, this page prints it as a hyphen -- transcribed as printed here, record only, no fold (different bank).' }

{ n: 15, pr: 15, p: 826,
  key: 4,
  stem: 'A newborn baby is delivered by caesarean following obstructed labor. He requires full resuscitation including adrenaline. His initial capillary blood gas shows pH 6.9. Which of the following is least likely related to perinatal asphyxia?',
  opts: ['Hypotension', 'Renal failure', 'Necrotizing enterocolitis', 'Seizures', 'Heart murmur'],
  expl: 'While hypotension, renal failure, NEC, and seizures are well-known complications of perinatal asphyxia, a heart murmur is not a direct consequence. It may occur coincidentally but is not a specific outcome.',
  note: 'All 5 options printed (A-E). "Least likely" question form -- transcribed as printed. Numeral: pH 6.9, read clearly off the native image. Key highlighted: yellow box on "E. Heart murmur". Not on the brief\'s predicted-House-match list; not checked against House for a match.' }

{ n: 16, pr: 16, p: 828,
  key: 1,
  stem: 'A male infant born at 29 weeks is now 4 hours old with increasing oxygen requirement, tachypnoea, and severe recessions. CXR shows a ground-glass appearance. What is the most likely diagnosis?',
  opts: ['Transient tachypnoea of the newborn', 'Respiratory distress syndrome', 'Congenital pneumonia', 'Pneumothorax', 'Congenital heart disease'],
  expl: 'A preterm infant with worsening respiratory status and ground-glass appearance on CXR is classic for RDS due to surfactant deficiency. This is common in infants born before 32 weeks.',
  note: 'All 5 options printed (A-E). Numerals: gestation 29 weeks, age 4 hours, threshold "before 32 weeks" in the explanation box. Key highlighted: yellow box on "B. Respiratory distress syndrome". Not on the brief\'s predicted-House-match list; not checked against House for a match.' }

{ n: 17, pr: 17, p: 830,
  key: 2,
  stem: 'A female infant born at 28 weeks is now 10 days old. She recently started feeds via NG tube. Over the past 12 hours, she has become unwell with abdominal distension, temperature instability, bile-stained aspirates, and blood in stool. AXR shows air within bowel walls. What is the most likely diagnosis?',
  opts: ['Sepsis', 'Intestinal obstruction', 'Necrotizing enterocolitis', 'Malrotation', 'Duodenal atresia'],
  expl: 'NEC is a serious gastrointestinal emergency in preterm infants, presenting with feeding intolerance, distension, and bloody stools. The pathognomonic X-ray finding is pneumatosis intestinalis (air in the bowel wall).',
  note: 'All 5 options printed (A-E). Numerals: gestation 28 weeks, age 10 days, symptom onset "past 12 hours". Key highlighted: yellow box on "C. Necrotizing enterocolitis". Not on the brief\'s predicted-House-match list; not checked against House for a match.' }

{ n: 18, pr: 18, p: 832,
  key: 3,
  stem: 'A term female baby is 18 hours old and not feeding well. Her mother was supposed to receive intrapartum antibiotics but delivered too quickly. The baby is admitted with suspected sepsis; CXR confirms congenital pneumonia. What is the most likely organism?',
  opts: ['Streptococcus pneumoniae', 'Escherichia coli', 'Listeria monocytogenes', 'Group B streptococcus', 'Chlamydia pneumoniae'],
  expl: 'GBS is the most common cause of early-onset neonatal sepsis and congenital pneumonia. Lack of intrapartum antibiotics and early respiratory symptoms suggest this infection.',
  note: 'All 5 options printed (A-E). Numeral: age 18 hours. Key highlighted: yellow box on "D. Group B streptococcus". Not on the brief\'s predicted-House-match list; not checked against House for a match. This is the LAST entry of part A (n=18). Render-one-past boundary proof: p.833 prints Q19 unanswered ("A term infant born at home is brought on day 4 with bleeding from the umbilical stump...", options A-E Platelets/PT/APTT/Hemoglobin/Antiplatelet antibodies, no highlight) -- section 7 continues past n18 into part B\'s range with no chapter break or renumbering; n18/p.832 is confirmed as this part\'s clean final entry.' }

