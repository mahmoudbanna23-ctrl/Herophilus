/* ===========================================================================
   ENDPOINT - Pediatrics endpoint part1.pdf - SECTION 7: "Neonatology"
   Verbatim staging record. PDF pages 774-903; PDF page = printed page, offset zero.
   Merged from endpoint-s07-neonatology.part-A.js + endpoint-s07-neonatology.part-B.js + endpoint-s07-neonatology.part-C.js by merge-parts-ep.js.
   
   Every question is printed TWICE: an unanswered page, then the ANSWERED page with the key
   highlighted in yellow and (usually) a bordered explanation box. Only answered pages are
   staged. `n` is the true sequential index, `pr` what the page prints, `p` the PDF page,
   `key` a ZERO-BASED INDEX into `opts` (never a letter), matching the app field `answer`,
   `expl` the printed box verbatim or "".
   =========================================================================== */
var PEDEP_S07_STAGED = [

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
  note: 'Page genuinely prints only 4 options (A-D), no C missing -- the "few-options" OCR flag is a false positive; see header. Key highlighted: yellow box on "C. There is ventilation-perfusion mismatch from surfactant deficiency". p.798 is this question\'s explanation-box overflow (see header) -- its text is folded into expl above; nothing staged for p.798 itself. Cross-bank match CONFIRMED: pedhd-neo-1 (House, app\\data\\questions.peds.js) prints the identical stem/figure/key but with a 5th option ("The alveoli still contain fluid") that this printing omits -- record only, no fold (different bank).' },

{ n: 2, pr: 2, p: 800,
  key: 0,
  stem: 'Robert is a full-term male infant, born 10 hours ago. His mother is blood group O Rhesus positive, and her membranes ruptured 2 days before delivery. He is breastfeeding well, but the midwife noticed he looks jaundiced. On examination, the baby is clinically well but markedly jaundiced. What investigation should be performed first?',
  opts: ['Bilirubin level', 'Blood culture', 'Blood group', 'Congenital infection screen', 'Direct antibody test'],
  expl: 'In any jaundiced newborn, especially within the first 24 hours, the initial step is to measure the serum bilirubin level. This helps determine the severity of jaundice and guides further investigation and treatment.',
  note: 'Key highlighted: yellow box on "A. Bilirubin level". Cross-bank match CONFIRMED: pedhd-neo-2 (House, app\\data\\questions.peds.js) prints the identical stem/options/key -- record only, no fold (different bank).' },

{ n: 3, pr: 3, p: 802,
  key: 1,
  stem: 'Isabelle was born at term weighing 4 kg. At 6 hours of age, she was noted to be breathing fast and have a low temperature. She was born by normal vaginal delivery and the membranes had ruptured 24 hours previously. Isabelle has not breastfed since birth and has vomited once. On examination, she is lethargic, her core temperature is 35.5' + String.fromCharCode(176) + 'C, respiratory rate 90 breaths/min, capillary refill time 4 seconds, pulse 180/min, and oxygen saturation 89% in air. Her chest X-ray shows consolidation at the right base. What is the most likely causative organism?',
  opts: ['Escherichia coli (E. coli)', 'Group B streptococcus', 'Herpes simplex virus (HSV)', 'Listeria monocytogenes'],
  expl: 'Isabelle\'s clinical picture suggests early-onset neonatal sepsis, which commonly presents with respiratory distress and temperature instability. Group B Streptococcus is the most common cause in neonates, especially with prolonged rupture of membranes.',
  note: 'Page genuinely prints only 4 options (A-D). Numerals read directly off the image (native 800x450, legible, no crop needed): weight 4 kg, age at onset 6 hours, membranes ruptured 24 hours previously, temp 35.5' + String.fromCharCode(176) + 'C, RR 90/min, CRT 4 sec, pulse 180/min, SpO2 89%. Key highlighted: yellow box on "B. Group B streptococcus". Cross-bank match CONFIRMED: pedhd-neo-3 (House) prints the identical stem/key with a 5th option ("Staphylococcus aureus") that this printing omits -- record only, no fold (different bank).' },

{ n: 4, pr: 4, p: 804,
  key: 0,
  stem: 'James was born at 39 weeks\' gestation by elective caesarean section because of pre-eclampsia. His birth weight was 3.7 kg. He fed well initially but is now vomiting after every feed. He is now 18 hours old, and after the last two feeds, he "vomited everything up" and it was greenish. On examination, his temperature is 36.5' + String.fromCharCode(176) + 'C, and he is alert and hungry. His abdomen is not distended. He has not yet passed meconium. What is the most likely diagnosis?',
  opts: ['Duodenal atresia', 'Hirschsprung' + String.fromCharCode(8217) + 's disease', 'Meconium ileus', 'Neonatal sepsis', 'Pyloric stenosis'],
  expl: 'Bilious vomiting in a neonate without meconium passage raises suspicion for intestinal obstruction. Duodenal atresia is a common cause and often presents within the first day of life with greenish (bilious) vomiting.',
  note: 'All 5 options printed (A-E), read cleanly off the native image, no crop needed. Numerals: gestation 39 weeks, birth weight 3.7 kg, age 18 hours, temp 36.5' + String.fromCharCode(176) + 'C. Key highlighted: yellow box on "A. Duodenal atresia". Cross-bank match CONFIRMED: pedhd-neo-4 (House) prints identical stem/options/key -- record only, no fold (different bank).' },

{ n: 5, pr: 5, p: 806,
  key: 1,
  stem: 'Mohammed was born at term, weighing 3 kg. He is 6 hours old and on the postnatal ward with his mother, who asked the midwife to review him because he is breathing very quickly. He required mask ventilation at birth to establish breathing. By 5 minutes, he was crying and handed to his mother. On examination, he is breathing at 64 breaths/min, with mild chest recession. Breath sounds are reduced on the left compared with the right. Oxygen saturation is 95%. What is the most likely diagnosis?',
  opts: ['Pneumonia', 'Pneumothorax', 'Respiratory distress syndrome', 'Persistent pulmonary hypertension of the newborn'],
  expl: 'Reduced breath sounds on one side in a neonate with respiratory distress following resuscitation suggest pneumothorax. This is a known complication after positive pressure ventilation.',
  fig: 'Grayscale frontal (AP) chest radiograph of a newborn infant, positioned to the right of the explanation box.',
  figAlt: 'Grayscale frontal (AP) chest radiograph of a newborn infant.',
  note: 'Page genuinely prints only 4 options (A-D). Numerals: birth weight 3 kg, age 6 hours, RR 64/min, SpO2 95%. Key highlighted: yellow box on "B. Pneumothorax". Cross-bank match CONFIRMED: pedhd-neo-5 (House, image q-pd-hd-55) prints identical stem/figure/key with a 5th option ("Bronchopulmonary dysplasia") that this printing omits -- record only, no fold (different bank).' },

{ n: 6, pr: 6, p: 808,
  key: 3,
  stem: 'Sabrina was born at 37 weeks\' gestation, birth weight 2.8 kg. At 2 hours of age, she was noted to be breathing very fast. On examination, respiratory rate is 72 breaths/min with moderate chest recession. Heart sounds are difficult to hear on the left, and the apex beat is palpable on the right side. What is the most likely diagnosis?',
  opts: ['Pneumonia', 'Pneumothorax', 'Respiratory distress syndrome', 'Diaphragmatic hernia', 'Bronchopulmonary dysplasia'],
  expl: 'Displacement of heart sounds and apex beat to the right with respiratory distress in a newborn suggests a diaphragmatic hernia. Abdominal contents herniate into the thoracic cavity, causing pulmonary hypoplasia.',
  fig: 'Grayscale frontal (AP) chest radiograph of a newborn infant, positioned to the right of the options.',
  figAlt: 'Grayscale frontal (AP) chest radiograph of a newborn infant.',
  note: 'All 5 options printed (A-E). Numerals: gestation 37 weeks, birth weight 2.8 kg, age 2 hours, RR 72/min. Key highlighted: yellow box on "D. Diaphragmatic hernia". Not on the brief\'s predicted-House-match list (only 797/800/802/804/806); not checked against House for a match.' },

{ n: 7, pr: 7, p: 810,
  key: 4,
  stem: 'Thomas, a baby boy with a birth weight of 875 g at 28 weeks\' gestation, required artificial ventilation for 2 weeks. At 10 weeks of age, he still needs additional oxygen via nasal cannulae. What is the most likely diagnosis?',
  opts: ['Pneumonia', 'Pneumothorax', 'Respiratory distress syndrome', 'Diaphragmatic hernia', 'Bronchopulmonary dysplasia'],
  expl: 'Bronchopulmonary dysplasia is a chronic lung disease in preterm infants who required prolonged ventilation and oxygen. Ongoing oxygen need at 36 weeks corrected gestational age confirms this diagnosis.',
  fig: 'Grayscale frontal (AP) chest radiograph of an infant, positioned to the right of the options.',
  figAlt: 'Grayscale frontal (AP) chest radiograph of an infant.',
  note: 'All 5 options printed (A-E). Numerals read clearly off the native image, no ambiguity: birth weight 875 g, gestation 28 weeks, ventilation duration 2 weeks, age at assessment 10 weeks. Key highlighted: yellow box on "E. Bronchopulmonary dysplasia". Cross-bank match CONFIRMED: pedhd-neo-7 (House, image q-pd-hd-56b) prints identical stem/figure/options/key -- record only, no fold (different bank). Task table\'s n7 cell said "809->810"; read at 810 per the brief\'s own correction.' },

{ n: 8, pr: 8, p: 812,
  key: 0,
  stem: 'Stewart is a full-term baby boy, born 16 hours ago. His mother is blood group O Rhesus positive. The baby is breastfeeding well, but the midwife noted he looks jaundiced. His bilirubin was 150 ' + String.fromCharCode(956) + 'mol/L at 10 hours and intensive phototherapy was started. Six hours later, bilirubin is 250 ' + String.fromCharCode(956) + 'mol/L. The baby\'s blood group is A Rhesus positive. What is the most likely cause?',
  opts: ['ABO incompatibility', 'Biliary atresia', 'Breastmilk jaundice', 'Physiological jaundice', 'Rhesus hemolytic disease'],
  expl: 'The infant has early and rapidly rising jaundice, with maternal group O and baby group A' + String.fromCharCode(8212) + 'indicating ABO incompatibility. This is a common cause of hemolytic disease in neonates.',
  note: 'All 5 options printed (A-E). Numerals read directly off the native image, legible, no crop needed: age 16 hours, bilirubin 150 ' + String.fromCharCode(956) + 'mol/L at 10 hours, repeat 250 ' + String.fromCharCode(956) + 'mol/L six hours later. Key highlighted: yellow box on "A. ABO incompatibility". Cross-bank match CONFIRMED: pedhd-neo-8 (House) prints identical options/key -- record only, no fold (different bank).' },

{ n: 9, pr: 9, p: 814,
  key: 1,
  stem: 'Alfie is a 3-week-old male infant whose mother is concerned about pale stools. He is breastfed. On examination, he is jaundiced, has mild hepatomegaly, and has only just regained his birth weight. What is the most likely diagnosis?',
  opts: ['ABO incompatibility', 'Biliary atresia', 'Breastmilk jaundice', 'Physiological jaundice', 'Rhesus hemolytic disease'],
  expl: 'Prolonged jaundice with pale stools and hepatomegaly in a neonate is classic for biliary atresia. It causes conjugated hyperbilirubinemia and requires early surgical intervention for better outcomes.',
  note: 'All 5 options printed (A-E), identical option ladder/order to n8 (p.812) -- a shared option menu, not a fold: discriminating tokens are age (3 weeks vs. hours old) and clinical picture (pale stools + hepatomegaly + failure to regain birth weight vs. an ABO/bilirubin-trend setup). Key highlighted: yellow box on "B. Biliary atresia". Not on the brief\'s predicted-House-match list; not checked against House for a match.' },

{ n: 10, pr: 10, p: 816,
  key: 2,
  stem: 'Poppy is a 2-week-old breastfed baby who is thriving but jaundiced. Her bilirubin level is 170 ' + String.fromCharCode(956) + 'mol/L and nearly all unconjugated. Urine dipstick is negative. What is the most likely cause?',
  opts: ['ABO incompatibility', 'Biliary atresia', 'Breastmilk jaundice', 'Physiological jaundice', 'Rhesus hemolytic disease'],
  expl: 'Breastmilk jaundice presents in a thriving breastfed baby with prolonged unconjugated jaundice beyond the first week. It is benign and requires no treatment.',
  note: 'All 5 options printed (A-E), identical option ladder/order to n8/n9 -- a shared menu, not a fold: discriminating tokens are age (2 weeks), thriving/well baby, bilirubin 170 ' + String.fromCharCode(956) + 'mol/L nearly all unconjugated, negative urine dipstick. Numeral read directly off the native image, legible. Key highlighted: yellow box on "C. Breastmilk jaundice". Not on the brief\'s predicted-House-match list; not checked against House for a match.' },

{ n: 11, pr: 11, p: 818,
  key: 3,
  stem: 'Dimitri is 20 hours old and markedly jaundiced, requiring intensive phototherapy. Both mother and baby are group A Rhesus positive. He is feeding well and is alert. What is the most likely cause?',
  opts: ['ABO incompatibility', 'Biliary atresia', 'Breastmilk jaundice', 'G6PD deficiency', 'Rhesus hemolytic disease'],
  expl: 'In a jaundiced baby with no ABO or Rh incompatibility, G6PD deficiency is a likely cause of hemolytic jaundice, especially if the jaundice appears early and is significant. It is more common in certain ethnic groups.',
  note: 'All 5 options printed (A-E). Shares A/B/C/E with n8-n10\'s ladder but option D differs here (G6PD deficiency in place of Physiological jaundice) -- a related but not identical menu; discriminating token is same-group mother/baby (ruling out ABO/Rh) plus early/marked jaundice. Key highlighted: yellow box on "D. G6PD deficiency". Not on the brief\'s predicted-House-match list; not checked against House for a match.' },

{ n: 12, pr: 12, p: 820,
  key: 2,
  stem: 'Rebecca was born 48 hours ago at term weighing 3.2 kg. She is breathing very quickly and not feeding. On examination, respiratory rate is 68 breaths/min, with mild chest recession. She appears unwell. Femoral pulses are weak, and oxygen saturation is 85% in air. What is the most likely diagnosis?',
  opts: ['Pneumonia', 'Transient tachypnoea of the newborn', 'Coarctation of the aorta', 'Respiratory distress syndrome', 'Anaemia'],
  expl: 'Weak femoral pulses, hypoxia, and poor feeding in a newborn suggest duct-dependent congenital heart disease like coarctation. This typically presents after ductal closure in the first few days of life.',
  note: 'All 5 options printed (A-E). Numerals: age 48 hours, birth weight 3.2 kg, RR 68/min, SpO2 85%. Key highlighted: yellow box on "C. Coarctation of the aorta". Not on the brief\'s predicted-House-match list; not checked against House for a match.' },

{ n: 13, pr: 13, p: 822,
  key: 1,
  stem: 'Zak, a full-term male infant, weighing 3.7 kg, is born by elective caesarean section. He becomes tachypnoeic with indrawing at 2 hours of age. Examination and chest X-ray are otherwise normal. What is the most likely diagnosis?',
  opts: ['Pneumonia', 'Transient tachypnoea of the newborn', 'Coarctation of the aorta', 'Respiratory distress syndrome', 'Anaemia'],
  expl: 'TTN is common after elective caesarean due to delayed lung fluid clearance. It presents with tachypnea shortly after birth and typically resolves within 48-72 hours.',
  note: 'All 5 options printed (A-E), identical option ladder/order to n12 (p.820) -- a shared menu, not a fold: discriminating tokens are delivery mode (elective caesarean) and a normal exam/normal chest X-ray, vs. n12\'s weak femoral pulses/desaturation. Numerals: birth weight 3.7 kg, age 2 hours. Key highlighted: yellow box on "B. Transient tachypnoea of the newborn". Not on the brief\'s predicted-House-match list; not checked against House for a match.' },

{ n: 14, pr: 14, p: 824,
  key: 4,
  stem: 'A 15-month-old girl is referred for developmental assessment. She was born at term weighing 3400 g, needed resuscitation at birth with Apgar scores of 3 at 1 minute, 4 at 5 minutes, and 7 at 10 minutes. She was ventilated for 3 days. She now has global developmental delay. What is the most likely explanation?',
  opts: ['Congenital hypothyroidism', 'Meningitis', 'Inborn error of metabolism', 'Intracranial hemorrhage', 'Hypoxic-ischaemic encephalopathy (HIE)'],
  expl: 'A history of low Apgar scores, ventilation, and developmental delay strongly suggests HIE, resulting from perinatal asphyxia. This is a major cause of cerebral palsy and developmental disorders.',
  note: 'All 5 options printed (A-E). Numerals: age 15 months, birth weight 3400 g, Apgar 3 at 1 min / 4 at 5 min / 7 at 10 min, ventilated 3 days -- all read clearly off the native image. Key highlighted: yellow box on "E. Hypoxic-ischaemic encephalopathy (HIE)". Cross-bank match CONFIRMED: pedhd-neo-14 (House) prints the same stem/options/key; House renders the dash in "Hypoxic-ischaemic" as an en dash, this page prints it as a hyphen -- transcribed as printed here, record only, no fold (different bank).' },

{ n: 15, pr: 15, p: 826,
  key: 4,
  stem: 'A newborn baby is delivered by caesarean following obstructed labor. He requires full resuscitation including adrenaline. His initial capillary blood gas shows pH 6.9. Which of the following is least likely related to perinatal asphyxia?',
  opts: ['Hypotension', 'Renal failure', 'Necrotizing enterocolitis', 'Seizures', 'Heart murmur'],
  expl: 'While hypotension, renal failure, NEC, and seizures are well-known complications of perinatal asphyxia, a heart murmur is not a direct consequence. It may occur coincidentally but is not a specific outcome.',
  note: 'All 5 options printed (A-E). "Least likely" question form -- transcribed as printed. Numeral: pH 6.9, read clearly off the native image. Key highlighted: yellow box on "E. Heart murmur". Not on the brief\'s predicted-House-match list; not checked against House for a match.' },

{ n: 16, pr: 16, p: 828,
  key: 1,
  stem: 'A male infant born at 29 weeks is now 4 hours old with increasing oxygen requirement, tachypnoea, and severe recessions. CXR shows a ground-glass appearance. What is the most likely diagnosis?',
  opts: ['Transient tachypnoea of the newborn', 'Respiratory distress syndrome', 'Congenital pneumonia', 'Pneumothorax', 'Congenital heart disease'],
  expl: 'A preterm infant with worsening respiratory status and ground-glass appearance on CXR is classic for RDS due to surfactant deficiency. This is common in infants born before 32 weeks.',
  note: 'All 5 options printed (A-E). Numerals: gestation 29 weeks, age 4 hours, threshold "before 32 weeks" in the explanation box. Key highlighted: yellow box on "B. Respiratory distress syndrome". Not on the brief\'s predicted-House-match list; not checked against House for a match.' },

{ n: 17, pr: 17, p: 830,
  key: 2,
  stem: 'A female infant born at 28 weeks is now 10 days old. She recently started feeds via NG tube. Over the past 12 hours, she has become unwell with abdominal distension, temperature instability, bile-stained aspirates, and blood in stool. AXR shows air within bowel walls. What is the most likely diagnosis?',
  opts: ['Sepsis', 'Intestinal obstruction', 'Necrotizing enterocolitis', 'Malrotation', 'Duodenal atresia'],
  expl: 'NEC is a serious gastrointestinal emergency in preterm infants, presenting with feeding intolerance, distension, and bloody stools. The pathognomonic X-ray finding is pneumatosis intestinalis (air in the bowel wall).',
  note: 'All 5 options printed (A-E). Numerals: gestation 28 weeks, age 10 days, symptom onset "past 12 hours". Key highlighted: yellow box on "C. Necrotizing enterocolitis". Not on the brief\'s predicted-House-match list; not checked against House for a match.' },

{ n: 18, pr: 18, p: 832,
  key: 3,
  stem: 'A term female baby is 18 hours old and not feeding well. Her mother was supposed to receive intrapartum antibiotics but delivered too quickly. The baby is admitted with suspected sepsis; CXR confirms congenital pneumonia. What is the most likely organism?',
  opts: ['Streptococcus pneumoniae', 'Escherichia coli', 'Listeria monocytogenes', 'Group B streptococcus', 'Chlamydia pneumoniae'],
  expl: 'GBS is the most common cause of early-onset neonatal sepsis and congenital pneumonia. Lack of intrapartum antibiotics and early respiratory symptoms suggest this infection.',
  note: 'All 5 options printed (A-E). Numeral: age 18 hours. Key highlighted: yellow box on "D. Group B streptococcus". Not on the brief\'s predicted-House-match list; not checked against House for a match. This is the LAST entry of part A (n=18). Render-one-past boundary proof: p.833 prints Q19 unanswered ("A term infant born at home is brought on day 4 with bleeding from the umbilical stump...", options A-E Platelets/PT/APTT/Hemoglobin/Antiplatelet antibodies, no highlight) -- section 7 continues past n18 into part B\'s range with no chapter break or renumbering; n18/p.832 is confirmed as this part\'s clean final entry.' },

/* ===========================================================================
   ENDPOINT — Pediatrics endpoint part1.pdf — SECTION 7 "Neonatology", PART B.
   Verbatim staging record. Written 2026-09-03. Covers n=19..36 (pp.834-868,
   answered pages only, every even page in that range). Source is a 1-up
   exported slide deck: one PDF page = one book page = the cited page number.
   Pages pulled as native embedded JPEGs via tools\ep-index\pull.py (no
   rasterising unless noted). OCR index under content\peds\qb-pages\ocr\ was
   NOT opened for transcription, per brief -- used only as a locate aid where
   cited.

   Header extended page by page as staging proceeds; see notes below and in
   each entry for what was checked.

   Continuation note: part A's last entry (n18, p.832) confirmed p.833 prints
   Q19 unanswered with no chapter break -- section 7 continues into this
   part's range with no renumbering. This part picks up at n19/p.834.
   =========================================================================== */

{ n: 19, pr: 19, p: 834,
  key: 1,
  stem: 'A term infant born at home is brought on day 4 with bleeding from the umbilical stump. The mother mentions her other children received vitamin K, but she’s unsure about this baby. Which blood result is likely to be abnormal?',
  opts: ['Platelets', 'Prothrombin time (PT)', 'Activated partial thromboplastin time (APTT)', 'Hemoglobin', 'Antiplatelet antibodies'],
  expl: 'Vitamin K deficiency bleeding (VKDB) commonly presents around day 4 with bleeding (e.g. from the umbilical stump). The PT is typically prolonged due to deficient clotting factor production.',
  note: 'All 5 options printed (A-E), read clearly off the native image, no crop needed. Numeral: age day 4. Key highlighted: yellow box on "B. Prothrombin time (PT)". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' },

{ n: 20, pr: 20, p: 836,
  key: 1,
  stem: 'A 4-week-old formula-fed girl presents with jaundice. Her urine is dark and stools are pale. She has not regained her birth weight. Total bilirubin is 135 ' + String.fromCharCode(956) + 'mol/L (normal <100), conjugated 65 ' + String.fromCharCode(956) + 'mol/L (normal <20). Blood counts are normal. What is the most likely diagnosis?',
  opts: ['Physiological jaundice', 'Biliary atresia', 'Spherocytosis', 'G6PD deficiency', 'Urinary tract infection'],
  expl: 'Cholestatic jaundice (raised conjugated bilirubin), pale stools, and poor weight gain point to biliary atresia. Early diagnosis is critical to allow for timely surgical intervention (Kasai procedure).',
  note: 'All 5 options printed (A-E), read clearly off the native image, no crop needed. Numerals: age 4 weeks, total bilirubin 135 ' + String.fromCharCode(956) + 'mol/L (normal <100), conjugated 65 ' + String.fromCharCode(956) + 'mol/L (normal <20). Key highlighted: yellow box on "B. Biliary atresia". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' },

{ n: 21, pr: 21, p: 838,
  key: 4,
  stem: 'A 6-day-old baby who is breast-feeding well and thriving is referred by the midwife because she appears jaundiced. She has pigmented stools and is passing urine normally. Examination is unremarkable. Her bilirubin is 68 ' + String.fromCharCode(956) + 'mol/L (normal <100 ' + String.fromCharCode(956) + 'mol/L) with a conjugated level of 8 ' + String.fromCharCode(956) + 'mol/L (normal <20 ' + String.fromCharCode(956) + 'mol/L).\n\nWhich of the following would be your management of this infant?',
  opts: ['Complete a prolonged jaundice screen', 'Commence phototherapy', 'Top up feeds with formula milk', 'Repeat the bilirubin level in 8 hours', 'No treatment required'],
  expl: 'This baby has normal unconjugated jaundice at 6 days, is feeding well, and has normal stool and urine color. No further action is needed unless jaundice persists beyond 14 days.',
  note: 'All 5 options printed (A-E), read clearly off the native image, no crop needed. Numerals: age 6 days, bilirubin 68 ' + String.fromCharCode(956) + 'mol/L (normal <100 ' + String.fromCharCode(956) + 'mol/L), conjugated 8 ' + String.fromCharCode(956) + 'mol/L (normal <20 ' + String.fromCharCode(956) + 'mol/L), threshold "beyond 14 days" in explanation box -- this printing gives the units correctly as ' + String.fromCharCode(956) + 'mol/L throughout, unlike its House cross-bank match. Key highlighted: yellow box on "E. No treatment required". CROSS-BANK MATCH CONFIRMED as predicted: pedhd-neo-21 (House, app\\data\\questions.peds.js) prints the identical stem/options/key -- House\'s printing has a units defect ("mmol/L" in both bracketed thresholds, corrected in that entry\'s explanation to ' + String.fromCharCode(956) + 'mol/L); this ENDPOINT printing has no such defect, printing ' + String.fromCharCode(956) + 'mol/L correctly throughout. Record only, no fold (different bank).' },

{ n: 22, pr: 22, p: 840,
  key: 0,
  stem: 'A 12-hour newborn is noted to be jaundiced. Indirect bilirubin 6.4 mg/dl. What is the appropriate management?',
  opts: ['Admit the baby to the incubator for phototherapy and lab Ix.', 'Repeat the bilirubin measurement after another 12 hours', 'Ensure adequate breast feeding and repeat bilirubin measurement after 24 hours', 'Reassure the mother that this is normal', 'Give bottle feeds for 24 hours then resume breast feeding'],
  expl: 'Jaundice appearing within the first 24 hours is always pathologic, often due to hemolysis. Such cases require immediate phototherapy and investigations to determine the cause.',
  note: '⚠️ PREDICTED WITHIN-SECTION REPRINT: brief predicts p.840 == p.888 (part C\'s range). FOR THE FOLD PASS TO COMPARE -- this page in full: printed question number "22."; options are printed lowercase "a./b./c./d./e." (unlike the rest of this range\'s uppercase A-E, transcribed as printed -- letters not carried into opts array); stem is short, no vignette name, just "A 12-hour newborn is noted to be jaundiced. Indirect bilirubin 6.4 mg/dl."; unit is mg/dl (not ' + String.fromCharCode(956) + 'mol/L, unlike most of this section\'s jaundice questions); key highlighted yellow on "a. Admit the baby to the incubator for phototherapy and lab Ix." (note "Ix." abbreviation for investigations, printed exactly so); explanation box present, 2 sentences on pathologic early jaundice and hemolysis. Numeral 6.4 mg/dl read directly off the native image, legible, no crop needed. Staged complete and normally per brief; no fold performed here -- that is a later pass with p.888 in view.' },

{ n: 23, pr: 23, p: 842,
  key: 2,
  stem: 'Talia is 2 weeks old and is breastfed. She is active and thriving but is jaundiced. Her bilirubin level is moderately raised at 10 mg/dl and is nearly all unconjugated. A urine dipstick is -VE. The following is a list of diagnoses that are associated with jaundice in the newborn period. Pick the most likely cause of the jaundice in this condition.',
  opts: ['ABO incompatibility', 'Biliary atresia', 'Breast milk jaundice', 'Congenital hypothyroidism', 'Neonatal infection'],
  expl: 'Breast milk jaundice occurs in healthy, thriving infants after the first week of life. It is due to substances in breast milk that increase bilirubin reabsorption, and no treatment is needed.',
  fig: 'Printed 4-column comparison table alongside the explanation box, headed "Diagnosis | Jaundice Type | Typical Presentation | Notes", one row per option: ABO incompatibility -- Unconjugated -- Early jaundice, signs of hemolysis -- Positive Coombs test; Biliary atresia -- Conjugated (direct) -- Jaundice >2 weeks, pale stools, dark urine -- Raised conjugated bilirubin; Breast milk jaundice -- Unconjugated -- Begins 1-2 weeks, thriving infant -- Normal physical exam, negative urine dipstick; Congenital hypothyroidism -- Unconjugated -- Prolonged jaundice with other hypothyroid signs -- Screen at birth; Neonatal infection -- Mixed/unconjugated -- Ill appearing infant, positive infection markers -- Fever, poor feeding, illness.',
  figAlt: 'Printed reference table of five neonatal-jaundice diagnoses with jaundice type, presentation and notes columns.',
  note: 'All 5 options printed (a-e, lowercase as printed). Numeral: age 2 weeks, bilirubin 10 mg/dl. Table re-rendered at --dpi 200 (p0842.png) because the native 800x450 image made the small table text hard to swear to; the 200 dpi pass came out noticeably sharper than a simple upsample would predict -- worth flagging: this contradicts the brief\'s "upsampling buys nothing" expectation for this deck, at least on this page; table transcription above is from the 200 dpi read and cross-matches the initial native-resolution read. Key highlighted: yellow box on "c. Breast milk jaundice". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' },

{ n: 24, pr: 24, p: 844,
  key: 3,
  stem: 'A 4.3 kg infant is delivered to a woman whose diabetes mellitus is poorly controlled. Of the following, the MOST likely neonatal manifestation of maternal diabetes is:',
  opts: ['Anemia', 'Hirschsprung disease', 'Hypercalcemia', 'Polycythemia', 'Blood glucose 75 mg/dl'],
  expl: 'Infants of diabetic mothers are prone to polycythemia due to chronic intrauterine hypoxia stimulating erythropoiesis. They may also have hypoglycemia, hypocalcemia, and cardiomyopathy.',
  note: 'All 5 options printed (a-e, lowercase as printed). Numeral: birth weight 4.3 kg; option e states "Blood glucose 75 mg/dl" (a normal value, printed as a distractor), read clearly off the native image. Key highlighted: yellow box on "d. Polycythemia". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' },

{ n: 25, pr: 25, p: 846,
  key: 2,
  stem: 'A baby is born with cord bilirubin of 5 mg/dl. Two hours later the serum bilirubin increased to 8 mg/dl. There is no history of premature rupture of membrane (PROM). The most probable cause is:',
  opts: ['Congenital spherocytosis', 'Sickle cell anemia', 'RH incompatibility', 'Breast milk jaundice', 'Thalassemia'],
  expl: 'Rapid rise in bilirubin within hours of life strongly suggests hemolysis, most commonly Rh incompatibility in a sensitized mother. This requires urgent evaluation and treatment.',
  note: 'All 5 options printed (a-e, lowercase as printed). Numerals: cord bilirubin 5 mg/dl, serum bilirubin 8 mg/dl two hours later. Key highlighted: yellow box on "c. RH incompatibility". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' },

{ n: 26, pr: 26, p: 848,
  key: 0,
  stem: 'A term infant who was delivered at home is breastfeeding poorly. She is referred to you 7 days after birth because of bleeding from the umbilical cord and blood in the stool. Findings on the physical examination are normal. There are no petechiae, and there is no hepatosplenomegaly, purpura, nor neurologic abnormality. Of the following the MOST likely diagnosis is:',
  opts: ['classic vitamin K deficiency', 'disseminated intravascular coagulation', 'factor VIII deficiency', 'neonatal alloimmune thrombocytopenia', 'Von Willebrand disease'],
  expl: 'Infants who did not receive vitamin K prophylaxis are at risk for bleeding in the first week of life. Presentation includes GI or umbilical bleeding with otherwise normal examination.',
  note: 'All 5 options printed (a-e, lowercase as printed). Numeral: age 7 days. Key highlighted: yellow box on "a. classic vitamin K deficiency". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' },

{ n: 27, pr: 27, p: 850,
  key: 3,
  stem: 'In hyaline membrane disease which of the following is WRONG?',
  opts: ['Manifestations appear within 4 hours after birth', 'More common in infants of diabetic mothers', 'Surfactant is an effective replacement therapy in severe cases', 'Steroids given antenatally to the mother is useless', 'Cesarean section delivery is a risk factor'],
  expl: 'Antenatal steroids significantly reduce the risk of RDS by accelerating surfactant production. Saying they are useless is incorrect.',
  note: '"WRONG" question form, no vignette -- transcribed as printed. All 5 options printed (a-e, lowercase as printed). Numeral: "within 4 hours" in option a, read clearly. Key highlighted: yellow box on "d. Steroids given antenatally to the mother is useless". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' },

{ n: 28, pr: 28, p: 852,
  key: 3,
  stem: 'Hypoxic ' + String.fromCharCode(8211) + ' ischemic Encephalopathy may be associated with all of the following except?',
  opts: ['Persistent pulmonary hypertension of newborn', 'Hypotension', 'Renal failure', 'Hypercalcemia', 'DIC'],
  expl: 'HIE can cause hypotension, renal failure, PPHN, and DIC, but hypocalcemia (not hypercalcemia) is more typical. Hypercalcemia is not associated.',
  note: '"except" question form, en dash printed in stem ("Hypoxic ' + String.fromCharCode(8211) + ' ischemic"), transcribed as printed. All 5 options printed (a-e, lowercase as printed). Key highlighted: yellow box on "d. Hypercalcemia". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' },

{ n: 29, pr: 29, p: 854,
  key: 2,
  stem: 'The preterm newborn is defined as:',
  opts: ['<37 weeks gestation', '>37 weeks gestation', '<37 weeks gestation', '<30 weeks gestation', '>30 weeks gestation'],
  expl: 'Preterm is defined as delivery before 37 completed weeks of gestation. This classification is important for risk assessment.',
  note: '⚠️ PRINTED DEFECT, flagged per the numbers/units exception: options a and c print IDENTICAL text, "<37 weeks gestation" -- verified by direct re-read of the native image, not a transcription slip on my part. Transcribed exactly as printed, both instances kept, key left as the page prints it (the highlighted duplicate, option c). Threshold "37 completed weeks" in explanation box read clearly. All 5 options printed (a-e, lowercase as printed). Key highlighted: yellow box on "c. <37 weeks gestation" (the second, identical-text occurrence). Not on the brief\'s predicted-match list for this range; not checked against House for a match.' },

{ n: 30, pr: 30, p: 856,
  key: 1,
  stem: 'Naser, a newborn baby, is noted to have hepatosplenomegaly and a petechial rash. His red eye reflex is abnormal and there is no heart murmur. He fails his newborn screening hearing test. His mother\'s antenatal screening bloods were all normal. What is the most likely condition that has caused these symptoms?',
  opts: ['Dysmorphic syndrome', 'Congenital infection', 'Infant of diabetic mother', 'Cranial abnormality', 'Neonatal infection'],
  expl: 'Classic TORCH infections cause microcephaly, cataracts, hepatosplenomegaly, and sensorineural hearing loss. The abnormal red reflex suggests cataracts from congenital rubella or CMV.',
  note: 'All 5 options printed (a-e, lowercase as printed). Key highlighted: yellow box on "b. Congenital infection". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' },

{ n: 31, pr: 31, p: 858,
  key: 0,
  stem: 'During a normal term newborn resuscitation, which of the following should be performed first?',
  opts: ['The infant should be dried and kept warm under a radiant heater', 'The heart rate should be auscultated.', 'Breath sounds should be auscultated.', 'The nose and oropharynx should be suctioned'],
  expl: 'The initial step is to prevent hypothermia by drying and warming. Airway, breathing, and circulation steps follow as needed.',
  note: 'Page genuinely prints only 4 options (a-d), no e -- verified by direct re-read of the native image. Key highlighted: yellow box on "a. The infant should be dried and kept warm under a radiant heater". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' },

{ n: 32, pr: 32, p: 860,
  key: 0,
  stem: 'Which of the following statements is TRUE about Transient tachypnea of the newborn?',
  opts: ['Commonly associated with caesarian section delivery', 'Commonly associated with preterm delivery', 'Usually treated with mechanical ventilation', 'Caused by surfactant deficiency', 'Mild prenatal infection is a common association'],
  expl: 'TTN results from delayed clearance of lung fluid, more common after C-section where labor-related catecholamine surge is absent. It is usually mild and self-limited.',
  note: '"TRUE" question form, no vignette -- transcribed as printed. All 5 options printed (a-e, lowercase as printed). Key highlighted: yellow box on "a. Commonly associated with caesarian section delivery". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' },

{ n: 33, pr: 33, p: 862,
  key: 3,
  stem: 'Of the following, the MOST likely complications to expect for infants of diabetic mothers are:',
  opts: ['hyperacusis, hypercalcemia, hydronephrosis', 'hyperbilirubinemia, hypercalcemia, polydactyly', 'hyperglycemia, hypocalcemia, polysplenia', 'hypoglycemia, hypocalcemia, polycythemia', 'hypogonadism, hypocalcemia, polyuria'],
  expl: 'Hyperinsulinism causes hypoglycemia; calcium regulation is impaired, and hypoxia-induced erythropoiesis causes polycythemia. These are the classic complications.',
  note: 'All 5 options printed (a-e, lowercase as printed), each a 3-term list -- read clearly off the native image. Key highlighted: yellow box on "d. hypoglycemia, hypocalcemia, polycythemia". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' },

{ n: 34, pr: 34, p: 864,
  key: 3,
  stem: 'Which of the following birth injuries may be associated with severe blood loss and hypovolemic shock?',
  opts: ['caput succedaneum', 'cephalhematoma', 'bruising at face', 'subaponeurotic hemorrhage'],
  expl: 'Subgaleal hemorrhage can accumulate large amounts of blood, leading to hypovolemic shock. It is the most serious scalp birth injury.',
  note: 'Page genuinely prints only 4 options (a-d), no e -- verified by direct re-read of the native image. Stem uses "subaponeurotic hemorrhage" while the explanation box uses "Subgaleal hemorrhage" for the same entity -- both terms preserved exactly as printed in their respective locations, not normalised to one term. Key highlighted: yellow box on "d. subaponeurotic hemorrhage". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' },

{ n: 35, pr: 35, p: 866,
  key: 1,
  stem: 'You perform a routine newborn examination on a baby who is 72 hours old. Which one of the following features requires further immediate assessment?',
  opts: ['Acrocyanosis (cyanosis of the hands and feet)', 'A heart murmur', 'White vaginal discharge', 'Breast enlargement', 'Subconjunctival hemorrhages'],
  expl: 'Many newborn murmurs are benign, but a murmur at 72 hours could indicate congenital heart disease. This requires urgent evaluation.',
  note: 'All 5 options printed (a-e, lowercase as printed). Numeral: age 72 hours. Key highlighted: yellow box on "b. A heart murmur". CROSS-BANK MATCH CONFIRMED as predicted: pedhd-peri-5 (House, app\\data\\questions.peds.js, filed under House\'s "perinatal" chapter) prints a near-identical stem/option-ladder/key -- House\'s age is 20 hours (this printing: 72 hours), and House\'s option c is "An undescended testis" where this printing has "White vaginal discharge" in the same c slot; both print "A heart murmur" as option b/index 1 and both key it. This is the brief\'s predicted chapter-boundary disagreement (House perinatal vs. this book\'s Neonatology) -- record only, no fold (different bank, and the two printings differ in age and one distractor besides).' },

{ n: 36, pr: 36, p: 868,
  key: 2,
  stem: 'The most important and effective action in neonatal resuscitation if the baby does not start to breathe after delivery is:',
  opts: ['Provide oxygen', 'Perform chest compressions', 'Ventilate the lungs', 'Give epinephrine', 'Tracheal intubation'],
  expl: 'Positive pressure ventilation is the single most important and effective intervention in neonatal resuscitation. Oxygen, compressions, and drugs are secondary.',
  note: 'All 5 options printed (a-e, lowercase as printed). Key highlighted: yellow box on "c. Ventilate the lungs". Not on the brief\'s predicted-match list for this range; not checked against House for a match. This is the LAST entry of part B (n=36). Render-one-past boundary check: this range ends at pr.868/n36 per the task brief\'s exact 18-entry table (n19-n36, pp.834-868); the next answered page (n37/p.870) belongs to part C, another agent\'s range -- not rendered here, per brief scope (§11: stay inside the assigned n range).' },

/* ===========================================================================
   ENDPOINT — Pediatrics endpoint part1.pdf — SECTION 7 "Neonatology", PART C
   (closes the section). Verbatim staging record. Written 2026-09-03. Covers
   n=37..53 (pp.870-902, answered pages only, every even page in that range).
   Source is a 1-up exported slide deck: one PDF page = one book page = the
   cited page number. Pages pulled as native embedded JPEGs via
   tools\ep-index\pull.py (no rasterising unless noted). OCR index under
   content\peds\qb-pages\ocr\ was NOT opened for transcription, per brief --
   used only as a locate aid where cited.

   Header extended page by page as staging proceeds; see notes below and in
   each entry for what was checked.

   Continuation note: part B's last entry (n36, p.868) confirmed the next
   answered page (n37/p.870) belongs to this part; per the task brief, p.903
   has already been read by a prior pass and is an Arabic closing-divider
   slide with nothing to stage -- p.902 is the last answered page of the
   section and this part does not need to render past it.
   =========================================================================== */

{ n: 37, pr: 37, p: 870,
  key: 3,
  stem: 'A mother is known to have pre-eclampsia and her fetus has shown signs of intrauterine growth restriction on antenatal scans. He is delivered at 37 weeks and weighs 2.2 kg. He is admitted to the Special Care Baby Unit because of his size. He appears well and has had a breast feed. What is he most at risk of?',
  opts: ['Anemia', 'Congenital cardiac abnormality', 'Group B streptococcus infection', 'Hypoglycemia', 'Hyperglycemia'],
  expl: 'Small-for-gestational-age infants have reduced glycogen and fat stores, putting them at high risk of hypoglycemia. Close monitoring is required.',
  note: 'All 5 options printed (a-e, lowercase as printed). Numerals: gestation 37 weeks, birth weight 2.2 kg, read clearly off the native image, no crop needed. Key highlighted: yellow box on "d. Hypoglycemia". Predicted CROSS-BANK match per task brief: p.870 -> pedhd-peri-9 (House) -- this stem/scenario (pre-eclampsia, IUGR, 37 weeks, 2.2 kg, SCBU, well, breast-fed, "most at risk of" hypoglycemia) is consistent with a small-for-gestational-age/hypoglycemia stem; House file not opened per brief (§5: record predicted id only, no cross-bank check). Record only, no fold.' },

{ n: 38, pr: 38, p: 872,
  key: 4,
  stem: 'Which of the following is RIGHT regarding pathological apnea in newborns?',
  opts: ['It lasts < 20 seconds with tachycardia', 'It is central if there is cessation of air flow with presence of respiratory effort', 'More common in full term neonates', 'Bag and mask ventilation are contraindicated', 'May be treated with theophylline'],
  expl: 'Pathological apnea lasts >20 seconds or is associated with bradycardia. In preterms, caffeine or theophylline can be used as respiratory stimulants.',
  note: '"RIGHT" question form, no vignette -- transcribed as printed. All 5 options printed (a-e, lowercase as printed). Numeral: "< 20 seconds" in option a, ">20 seconds" in explanation box, both read clearly off the native image, no crop needed. Key highlighted: yellow box on "e. May be treated with theophylline". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' },

{ n: 39, pr: 39, p: 874,
  key: 1,
  stem: 'Which one of the following is the most important cause of jaundice presenting in the first 24 h of life?',
  opts: ['Prematurity', 'Hemolysis', 'Breastfeeding', 'Physiological jaundice', 'Early-onset sepsis'],
  expl: 'Jaundice appearing within 24 hrs is always pathologic, most often due to hemolysis (Rh or ABO incompatibility). Physiological jaundice never appears this early.',
  note: 'All 5 options printed (a-e, lowercase as printed). Numeral: "24 h" in stem, "24 hrs" in explanation box, read clearly off the native image. Key highlighted: yellow box on "b. Hemolysis". Thematically similar (early-onset jaundice, pathologic cause) to the p.840/p.888 pairing but a distinct stem, options and framing (general "most important cause" question vs. a specific-patient management vignette) -- not the same question, not flagged as a reprint or menu pairing. Not on the brief\'s predicted-match list for this range; not checked against House for a match.' },

{ n: 40, pr: 40, p: 876,
  key: 2,
  stem: 'A black mother is found to have glycosuria at her midwife appointment at 32 weeks\' gestation. Her glucose tolerance test and fasting glucose are abnormal. She is given dietary advice to control her blood glucose. What problem is her newborn baby at most increased risk of?',
  opts: ['Anemia', 'Hyperglycemia', 'Respiratory distress syndrome', 'Hypocalcemia'],
  expl: 'Hyperinsulinemia delays surfactant synthesis, so IDM infants have increased risk of RDS even at term.',
  note: 'Page genuinely prints only 4 options (a-d), no e -- verified by direct re-read of the native image. Numeral: gestation "32 weeks\'" at glycosuria detection, read clearly off the native image, no crop needed. Key highlighted: yellow box on "c. Respiratory distress syndrome". Predicted CROSS-BANK match per task brief: p.876 -> pedhd-peri-6 (House) -- this stem/scenario (mother with gestational glucose abnormality at a mid-pregnancy antenatal visit, dietary advice, "most increased risk of" -> RDS as the keyed answer) is consistent with an infant-of-diabetic-mother/RDS stem; House file not opened per brief (§5: record predicted id only, no cross-bank check). Record only, no fold.' },

{ n: 41, pr: 41, p: 878,
  key: 0,
  stem: 'Single most common cause of the decline in SIDS:',
  opts: ['supine sleeping', 'Feet to foot of cot', 'separate bed', 'avoid smoking'],
  expl: 'The "Back to Sleep" campaign (supine sleeping) has been the most significant factor in reducing SIDS rates worldwide.',
  note: 'No vignette, short stem -- transcribed as printed, including its lowercase run-on options and mixed capitalisation across options (a/c/d lowercase, b capitalised, as printed). Page genuinely prints only 4 options (a-d), no e -- verified by direct re-read of the native image. Key highlighted: yellow box on "a. supine sleeping". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' },

{ n: 42, pr: 42, p: 880,
  key: 0,
  stem: 'Which requires further immediate investigation in a newborn?',
  opts: ['heart murmur', 'undescended testes', 'subconjunctival hemorrhage', 'breast enlargement'],
  expl: 'Unlike findings such as subconjunctival hemorrhage or breast enlargement, a murmur may indicate serious congenital heart disease.',
  note: 'No vignette, short stem, lowercase options as printed. Page genuinely prints only 4 options (a-d), no e -- verified by direct re-read of the native image. Key highlighted: yellow box on "a. heart murmur". Same newborn-exam-findings item set (heart murmur / undescended testes / subconjunctival hemorrhage / breast enlargement) as part B\'s n35 (p.866, a 72-hour-old vignette with a 5th option "White vaginal discharge" and CROSS-BANK match to pedhd-peri-5); this p.880 page is a distinct, shorter, no-vignette general-knowledge stem rather than a specific-patient vignette, both key the same finding (heart murmur), but they are separate printed questions, not a straddle or duplicate of each other -- flagged for the fold pass to consider together with n35. Not itself on the brief\'s predicted-match list for this range.' },

{ n: 43, pr: 43, p: 882,
  key: 0,
  stem: 'A full-term male infant, with a birth weight of 3.7 kg, is born by elective caesarean section. His mother was well during pregnancy and had a normal blood glucose screen. Zak becomes tachypnoeic with indrawing between his ribs at 2 hours of age. Examination is otherwise normal. A chest X-ray looks normal. Diagnosis?',
  opts: ['transient tachypnea of new born', 'pneumonia', 'aspiration of meconium', 'bronchopulmonary dysplasia', 'respiratory distress syndrome'],
  expl: 'TTN presents with tachypnea soon after birth, especially after C-section, and resolves with supportive care. CXR is often normal or shows mild fluid retention.',
  note: 'All 5 options printed (a-e, lowercase as printed). Numerals: birth weight 3.7 kg, onset "2 hours of age", read clearly off the native image, no crop needed. Key highlighted: yellow box on "a. transient tachypnea of new born". Thematically related to part B\'s n32 (p.860, general TRUE/FALSE stem on TTN, no vignette, keyed to caesarean association) but a distinct specific-patient vignette here -- not the same question. Not on the brief\'s predicted-match list for this range; not checked against House for a match.' },

{ n: 44, pr: 44, p: 884,
  key: 0,
  stem: 'Which group has the largest water distribution?',
  opts: ['Preterm', 'Full term', '1 year', '5 years'],
  expl: 'Preterm infants have the highest total body water proportion (up to 80–85%). This decreases with increasing age.',
  note: 'No vignette, short stem, capitalised options as printed. Page genuinely prints only 4 options (a-d), no e -- verified by direct re-read of the native image. Numeral: "80–85%" range in explanation box, en dash printed, read clearly off the native image, no crop needed. Key highlighted: yellow box on "a. Preterm". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' },

{ n: 45, pr: 45, p: 886,
  key: 0,
  stem: 'Which of the following is a common complication in infants of diabetic mothers?',
  opts: ['Hypertrophic cardiomyopathy', 'Microsomia', 'Hyperglycemia', 'Hypocalcemia'],
  expl: 'Infants of diabetic mothers may develop hypertrophic cardiomyopathy due to fetal hyperinsulinism causing septal hypertrophy.',
  note: 'No vignette, short stem, capitalised options as printed. Page genuinely prints only 4 options (a-d), no e -- verified by direct re-read of the native image. Key highlighted: yellow box on "a. Hypertrophic cardiomyopathy". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' },

{ n: 46, pr: 46, p: 888,
  key: 0,
  stem: 'A 12-hour newborn is noted to be jaundiced. Indirect bilirubin is 6.4 mg/dl. What is the appropriate management?',
  opts: ['Admit the baby to the incubator for phototherapy and lab investigations', 'Repeat the bilirubin measurement after another 12 hours', 'Ensure adequate breast feeding and repeat bilirubin measurement after 24 hours', 'Reassure the mother that this is normal', 'Give bottle feeds for 24 hours then resume breast feeding'],
  expl: 'As with earlier case, jaundice before 24 hours is pathologic. The appropriate action is phototherapy with evaluation of hemolysis or infection.',
  note: '⚠️ CONFIRMED WITHIN-SECTION REPRINT of part B\'s n22 (p.840), as predicted by the task brief. Full comparison against p.840 (quoted in the task brief): STEM -- NOT word-for-word identical: p.840 reads "Indirect bilirubin 6.4 mg/dl."; this page (p.888) reads "Indirect bilirubin is 6.4 mg/dl." (one word, "is", inserted) -- otherwise identical, both "A 12-hour newborn is noted to be jaundiced." and both close "What is the appropriate management?". Numerals identical: "12-hour", "6.4 mg/dl", both read directly off the native image, legible, no crop needed. OPTIONS -- same 5 options, SAME ORDER, checked position by position: (0) admit/incubator/phototherapy+labs -- wording differs only in the last two words, p.840 abbreviates "lab Ix." where p.888 spells out "lab investigations", otherwise identical; (1) repeat bilirubin after another 12 hours -- word-for-word identical; (2) ensure breast feeding + repeat at 24 hours -- word-for-word identical; (3) reassure mother this is normal -- word-for-word identical; (4) bottle feeds 24h then resume breast feeding -- word-for-word identical. No reordering. KEY -- same position, option index 0 / letter "a" on both pages (p.840 highlighted "a. Admit...lab Ix."; this page highlights "a. Admit...lab investigations"). Letter case: both pages print lowercase a-e (the task brief\'s block above describes p.840 as printing "lowercase a-e, unlike most of this section\'s uppercase A-E" -- on direct re-read this p.888 page also prints lowercase a-e, matching p.840, not uppercase). UNITS -- identical, mg/dl on both, no ' + String.fromCharCode(956) + 'mol/L conversion on either printing. EXPLANATION BOX -- DIFFERENT TEXT on the two pages, not a verbatim reprint of the box: p.840\'s box reads "Jaundice appearing within the first 24 hours is always pathologic, often due to hemolysis. Such cases require immediate phototherapy and investigations to determine the cause."; this page\'s box reads "As with earlier case, jaundice before 24 hours is pathologic. The appropriate action is phototherapy with evaluation of hemolysis or infection." -- shorter, explicitly says "As with earlier case" (confirming the book itself treats this as a repeat), and additionally names "infection" as a cause to evaluate, which p.840\'s box does not mention. SUMMARY for the fold pass: same clinical scenario, same options in the same order, same keyed option, near-identical stem (one word added) and a re-worded, shortened, self-referencing explanation box. Staged complete and normally per brief -- no fold performed here.' },

{ n: 47, pr: 47, p: 890,
  key: 1,
  stem: 'Which of the following is TRUE about Transient Tachypnea of the Newborn?',
  opts: ['Oxygen therapy is always required', 'It is the most common cause of respiratory distress in term infants', 'It persists for several weeks', 'Chest X-ray is always normal'],
  expl: 'TTN is the leading cause of respiratory distress in term babies. It is benign and resolves within 2–3 days.',
  note: '"TRUE" question form, no vignette -- transcribed as printed. Page genuinely prints only 4 options (a-d), no e -- verified by direct re-read of the native image. Numeral: "2–3 days" in explanation box, en dash printed, read clearly off the native image, no crop needed. Key highlighted: yellow box on "b. It is the most common cause of respiratory distress in term infants". Third TTN-themed question in this section (after part B\'s n32, p.860, a different TRUE/FALSE stem keyed to caesarean association, and this part\'s own n43, p.882, a specific-patient vignette) -- distinct options and distinct stem from both, not a reprint or shared menu; flagged for the fold pass to view together. Not on the brief\'s predicted-match list for this range; not checked against House for a match.' },

{ n: 48, pr: 48, p: 892,
  key: 1,
  stem: 'In neonatal resuscitation, which is the FIRST most important step?',
  opts: ['Suction of the mouth and throat', 'Drying, warming, and ensuring airway', 'Administration of drugs', 'Immediate chest compressions'],
  expl: 'The priority is to prevent hypothermia and establish airway patency. Suction, ventilation, or drugs follow if needed.',
  note: '"FIRST" question form, no vignette -- transcribed as printed. Page genuinely prints only 4 options (a-d), no e -- verified by direct re-read of the native image. Key highlighted: yellow box on "b. Drying, warming, and ensuring airway". Same "first step in neonatal resuscitation" theme as part B\'s n31 (p.858, "which of the following should be performed first?", keyed to "dried and kept warm under a radiant heater") -- same underlying teaching point (dry/warm first) but distinct wording and a distinct option set (this page adds "ensuring airway" to the keyed option, and its distractors are suction / drugs / chest compressions rather than n31\'s heart-sound/breath-sound auscultation and suctioning distractors); not a verbatim reprint, flagged for the fold pass to view together. Not on the brief\'s predicted-match list for this range; not checked against House for a match.' },

{ n: 49, pr: 49, p: 894,
  key: 0,
  stem: 'Which of the following is TRUE regarding oxygen therapy in preterm infants?',
  opts: ['Low oxygen saturation increases risk of NEC and death', 'High oxygen saturation reduces risk of retinopathy of prematurity', 'Initial therapy should begin with 100% oxygen', 'Oxygen therapy has no effect on mortality'],
  expl: 'Hypoxemia in preterm infants increases the risk of necrotizing enterocolitis (NEC), brain injury, and mortality',
  note: '"TRUE" question form, no vignette -- transcribed as printed. Page genuinely prints only 4 options (a-d), no e -- verified by direct re-read of the native image. Numeral: "100%" in option c, read clearly off the native image, no crop needed. Explanation box prints no closing period after "mortality" -- transcribed exactly as printed, not added. Key highlighted: yellow box on "a. Low oxygen saturation increases risk of NEC and death". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' },

{ n: 50, pr: 50, p: 896,
  key: 1,
  stem: 'Which of the following complications are associated with preterm infants with RDS?',
  opts: ['Reduced risk of necrotizing enterocolitis', 'Retinopathy of prematurity', 'Non-invasive therapy is contraindicated', 'Hypocalcemia is the main complication'],
  expl: 'Preterm infants with respiratory distress syndrome (RDS) often require oxygen therapy, which predisposes them to retinopathy of prematurity. Non-invasive ventilation is not contraindicated, and hypocalcemia is not the main complication.',
  note: 'No vignette, direct stem -- transcribed as printed. Page genuinely prints only 4 options (a-d), no e -- verified by direct re-read of the native image. Key highlighted: yellow box on "b. Retinopathy of prematurity". Thematically adjacent to n49 (p.894, oxygen therapy in preterm infants, also referencing NEC and ROP) but a distinct stem and option set, not a reprint. Not on the brief\'s predicted-match list for this range; not checked against House for a match.' },

{ n: 51, pr: 51, p: 898,
  key: 0,
  stem: 'A 7-day-old infant is seen in the emergency department for fever and poor feeding. The baby was delivered vaginally 2 hours after the mother arrived to hospital. The delivery was a 36 weeks of gestation and the birth weight was 2900 g. Maternal laboratory test results were negative. The most likely organism causing this patient’s symptoms is:',
  opts: ['Group B Streptococcus (GBS)', 'Listeria monocytogenes', 'Staphylococcus aureus', 'Streptococcus pneumoniae', 'Haemophilus influenza'],
  expl: 'GBS is the most common pathogen to cause neonatal sepsis in infants aged 0 to 3 months',
  note: 'All 5 options printed, and this page prints UPPERCASE letters "A.-E.", unlike most other pages in this part which print lowercase a-e -- transcribed as printed. Numerals: age "7-day-old", "2 hours after the mother arrived to hospital", gestation "36 weeks", birth weight "2900 g", explanation box range "0 to 3 months" -- all read clearly off the native image, no crop needed. Explanation box prints no closing period after "3 months" -- transcribed exactly as printed, not added. Key highlighted: yellow box on "A. Group B Streptococcus (GBS)". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' },

{ n: 52, pr: 52, p: 900,
  key: 1,
  stem: 'What is the most likely cause of respiratory distress in a term infant with history of fetal distress and pea soup like amniotic fluid?',
  opts: ['Pneumothorax', 'Meconium aspiration syndrome', 'Congenital heart disease', 'Respiratory distress syndrome', 'Transient tachypnea of the newborn'],
  expl: 'Term baby + fetal distress + pea soup amniotic fluid ' + String.fromCharCode(8594) + ' classic for Meconium Aspiration Syndrome (MAS).',
  note: 'Uppercase letters "A.-E." as printed. All 5 options printed. Explanation box uses bold and red-coloured text for emphasis (bold on "pea soup amniotic fluid", the whole "classic for Meconium Aspiration Syndrome (MAS)" clause printed in red) and a right-arrow glyph ' + String.fromCharCode(8594) + ' -- text content transcribed in full, colour/bold formatting not reproducible in this schema and not noted further per the no-comment-on-typography rule. Key highlighted: yellow box on "B. Meconium aspiration syndrome". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' },

{ n: 53, pr: 53, p: 902,
  key: 3,
  stem: 'Which clinical condition is left without further intervention on neonatal examination?',
  opts: ['Central cyanosis', 'Heart murmur', 'Inguinal hernia', 'Umbilical hernia', 'Jaundice at 24 hours of age'],
  expl: 'Common in neonates, usually closes spontaneously by 2–3 years of age. No intervention needed unless persistent after 3–5 years or very large.',
  note: 'Uppercase letters "A.-E." as printed. All 5 options printed. Numerals: "2–3 years of age" and "after 3–5 years" in explanation box, en dashes printed, read clearly off the native image, no crop needed. Key highlighted: yellow box on "D. Umbilical hernia". This is the LAST answered page of Section 7 Neonatology and the last entry of part C. Not on the brief\'s predicted-match list for this range; not checked against House for a match. Render-one-past boundary check: per the task brief, p.903 has already been read by a prior pass and is confirmed to be an Arabic closing-divider slide with nothing to stage -- not re-rendered here, per the brief\'s own statement that this section does not need to render past p.902.' }

];
