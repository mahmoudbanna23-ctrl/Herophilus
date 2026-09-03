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
  note: 'All 5 options printed (A-E), read clearly off the native image, no crop needed. Numeral: age day 4. Key highlighted: yellow box on "B. Prothrombin time (PT)". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' }

{ n: 20, pr: 20, p: 836,
  key: 1,
  stem: 'A 4-week-old formula-fed girl presents with jaundice. Her urine is dark and stools are pale. She has not regained her birth weight. Total bilirubin is 135 ' + String.fromCharCode(956) + 'mol/L (normal <100), conjugated 65 ' + String.fromCharCode(956) + 'mol/L (normal <20). Blood counts are normal. What is the most likely diagnosis?',
  opts: ['Physiological jaundice', 'Biliary atresia', 'Spherocytosis', 'G6PD deficiency', 'Urinary tract infection'],
  expl: 'Cholestatic jaundice (raised conjugated bilirubin), pale stools, and poor weight gain point to biliary atresia. Early diagnosis is critical to allow for timely surgical intervention (Kasai procedure).',
  note: 'All 5 options printed (A-E), read clearly off the native image, no crop needed. Numerals: age 4 weeks, total bilirubin 135 ' + String.fromCharCode(956) + 'mol/L (normal <100), conjugated 65 ' + String.fromCharCode(956) + 'mol/L (normal <20). Key highlighted: yellow box on "B. Biliary atresia". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' }

{ n: 21, pr: 21, p: 838,
  key: 4,
  stem: 'A 6-day-old baby who is breast-feeding well and thriving is referred by the midwife because she appears jaundiced. She has pigmented stools and is passing urine normally. Examination is unremarkable. Her bilirubin is 68 ' + String.fromCharCode(956) + 'mol/L (normal <100 ' + String.fromCharCode(956) + 'mol/L) with a conjugated level of 8 ' + String.fromCharCode(956) + 'mol/L (normal <20 ' + String.fromCharCode(956) + 'mol/L).\n\nWhich of the following would be your management of this infant?',
  opts: ['Complete a prolonged jaundice screen', 'Commence phototherapy', 'Top up feeds with formula milk', 'Repeat the bilirubin level in 8 hours', 'No treatment required'],
  expl: 'This baby has normal unconjugated jaundice at 6 days, is feeding well, and has normal stool and urine color. No further action is needed unless jaundice persists beyond 14 days.',
  note: 'All 5 options printed (A-E), read clearly off the native image, no crop needed. Numerals: age 6 days, bilirubin 68 ' + String.fromCharCode(956) + 'mol/L (normal <100 ' + String.fromCharCode(956) + 'mol/L), conjugated 8 ' + String.fromCharCode(956) + 'mol/L (normal <20 ' + String.fromCharCode(956) + 'mol/L), threshold "beyond 14 days" in explanation box -- this printing gives the units correctly as ' + String.fromCharCode(956) + 'mol/L throughout, unlike its House cross-bank match. Key highlighted: yellow box on "E. No treatment required". CROSS-BANK MATCH CONFIRMED as predicted: pedhd-neo-21 (House, app\\data\\questions.peds.js) prints the identical stem/options/key -- House\'s printing has a units defect ("mmol/L" in both bracketed thresholds, corrected in that entry\'s explanation to ' + String.fromCharCode(956) + 'mol/L); this ENDPOINT printing has no such defect, printing ' + String.fromCharCode(956) + 'mol/L correctly throughout. Record only, no fold (different bank).' }

{ n: 22, pr: 22, p: 840,
  key: 0,
  stem: 'A 12-hour newborn is noted to be jaundiced. Indirect bilirubin 6.4 mg/dl. What is the appropriate management?',
  opts: ['Admit the baby to the incubator for phototherapy and lab Ix.', 'Repeat the bilirubin measurement after another 12 hours', 'Ensure adequate breast feeding and repeat bilirubin measurement after 24 hours', 'Reassure the mother that this is normal', 'Give bottle feeds for 24 hours then resume breast feeding'],
  expl: 'Jaundice appearing within the first 24 hours is always pathologic, often due to hemolysis. Such cases require immediate phototherapy and investigations to determine the cause.',
  note: '⚠️ PREDICTED WITHIN-SECTION REPRINT: brief predicts p.840 == p.888 (part C\'s range). FOR THE FOLD PASS TO COMPARE -- this page in full: printed question number "22."; options are printed lowercase "a./b./c./d./e." (unlike the rest of this range\'s uppercase A-E, transcribed as printed -- letters not carried into opts array); stem is short, no vignette name, just "A 12-hour newborn is noted to be jaundiced. Indirect bilirubin 6.4 mg/dl."; unit is mg/dl (not ' + String.fromCharCode(956) + 'mol/L, unlike most of this section\'s jaundice questions); key highlighted yellow on "a. Admit the baby to the incubator for phototherapy and lab Ix." (note "Ix." abbreviation for investigations, printed exactly so); explanation box present, 2 sentences on pathologic early jaundice and hemolysis. Numeral 6.4 mg/dl read directly off the native image, legible, no crop needed. Staged complete and normally per brief; no fold performed here -- that is a later pass with p.888 in view.' }

{ n: 23, pr: 23, p: 842,
  key: 2,
  stem: 'Talia is 2 weeks old and is breastfed. She is active and thriving but is jaundiced. Her bilirubin level is moderately raised at 10 mg/dl and is nearly all unconjugated. A urine dipstick is -VE. The following is a list of diagnoses that are associated with jaundice in the newborn period. Pick the most likely cause of the jaundice in this condition.',
  opts: ['ABO incompatibility', 'Biliary atresia', 'Breast milk jaundice', 'Congenital hypothyroidism', 'Neonatal infection'],
  expl: 'Breast milk jaundice occurs in healthy, thriving infants after the first week of life. It is due to substances in breast milk that increase bilirubin reabsorption, and no treatment is needed.',
  fig: 'Printed 4-column comparison table alongside the explanation box, headed "Diagnosis | Jaundice Type | Typical Presentation | Notes", one row per option: ABO incompatibility -- Unconjugated -- Early jaundice, signs of hemolysis -- Positive Coombs test; Biliary atresia -- Conjugated (direct) -- Jaundice >2 weeks, pale stools, dark urine -- Raised conjugated bilirubin; Breast milk jaundice -- Unconjugated -- Begins 1-2 weeks, thriving infant -- Normal physical exam, negative urine dipstick; Congenital hypothyroidism -- Unconjugated -- Prolonged jaundice with other hypothyroid signs -- Screen at birth; Neonatal infection -- Mixed/unconjugated -- Ill appearing infant, positive infection markers -- Fever, poor feeding, illness.',
  figAlt: 'Printed reference table of five neonatal-jaundice diagnoses with jaundice type, presentation and notes columns.',
  note: 'All 5 options printed (a-e, lowercase as printed). Numeral: age 2 weeks, bilirubin 10 mg/dl. Table re-rendered at --dpi 200 (p0842.png) because the native 800x450 image made the small table text hard to swear to; the 200 dpi pass came out noticeably sharper than a simple upsample would predict -- worth flagging: this contradicts the brief\'s "upsampling buys nothing" expectation for this deck, at least on this page; table transcription above is from the 200 dpi read and cross-matches the initial native-resolution read. Key highlighted: yellow box on "c. Breast milk jaundice". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' }

{ n: 24, pr: 24, p: 844,
  key: 3,
  stem: 'A 4.3 kg infant is delivered to a woman whose diabetes mellitus is poorly controlled. Of the following, the MOST likely neonatal manifestation of maternal diabetes is:',
  opts: ['Anemia', 'Hirschsprung disease', 'Hypercalcemia', 'Polycythemia', 'Blood glucose 75 mg/dl'],
  expl: 'Infants of diabetic mothers are prone to polycythemia due to chronic intrauterine hypoxia stimulating erythropoiesis. They may also have hypoglycemia, hypocalcemia, and cardiomyopathy.',
  note: 'All 5 options printed (a-e, lowercase as printed). Numeral: birth weight 4.3 kg; option e states "Blood glucose 75 mg/dl" (a normal value, printed as a distractor), read clearly off the native image. Key highlighted: yellow box on "d. Polycythemia". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' }

{ n: 25, pr: 25, p: 846,
  key: 2,
  stem: 'A baby is born with cord bilirubin of 5 mg/dl. Two hours later the serum bilirubin increased to 8 mg/dl. There is no history of premature rupture of membrane (PROM). The most probable cause is:',
  opts: ['Congenital spherocytosis', 'Sickle cell anemia', 'RH incompatibility', 'Breast milk jaundice', 'Thalassemia'],
  expl: 'Rapid rise in bilirubin within hours of life strongly suggests hemolysis, most commonly Rh incompatibility in a sensitized mother. This requires urgent evaluation and treatment.',
  note: 'All 5 options printed (a-e, lowercase as printed). Numerals: cord bilirubin 5 mg/dl, serum bilirubin 8 mg/dl two hours later. Key highlighted: yellow box on "c. RH incompatibility". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' }

{ n: 26, pr: 26, p: 848,
  key: 0,
  stem: 'A term infant who was delivered at home is breastfeeding poorly. She is referred to you 7 days after birth because of bleeding from the umbilical cord and blood in the stool. Findings on the physical examination are normal. There are no petechiae, and there is no hepatosplenomegaly, purpura, nor neurologic abnormality. Of the following the MOST likely diagnosis is:',
  opts: ['classic vitamin K deficiency', 'disseminated intravascular coagulation', 'factor VIII deficiency', 'neonatal alloimmune thrombocytopenia', 'Von Willebrand disease'],
  expl: 'Infants who did not receive vitamin K prophylaxis are at risk for bleeding in the first week of life. Presentation includes GI or umbilical bleeding with otherwise normal examination.',
  note: 'All 5 options printed (a-e, lowercase as printed). Numeral: age 7 days. Key highlighted: yellow box on "a. classic vitamin K deficiency". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' }

{ n: 27, pr: 27, p: 850,
  key: 3,
  stem: 'In hyaline membrane disease which of the following is WRONG?',
  opts: ['Manifestations appear within 4 hours after birth', 'More common in infants of diabetic mothers', 'Surfactant is an effective replacement therapy in severe cases', 'Steroids given antenatally to the mother is useless', 'Cesarean section delivery is a risk factor'],
  expl: 'Antenatal steroids significantly reduce the risk of RDS by accelerating surfactant production. Saying they are useless is incorrect.',
  note: '"WRONG" question form, no vignette -- transcribed as printed. All 5 options printed (a-e, lowercase as printed). Numeral: "within 4 hours" in option a, read clearly. Key highlighted: yellow box on "d. Steroids given antenatally to the mother is useless". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' }

{ n: 28, pr: 28, p: 852,
  key: 3,
  stem: 'Hypoxic ' + String.fromCharCode(8211) + ' ischemic Encephalopathy may be associated with all of the following except?',
  opts: ['Persistent pulmonary hypertension of newborn', 'Hypotension', 'Renal failure', 'Hypercalcemia', 'DIC'],
  expl: 'HIE can cause hypotension, renal failure, PPHN, and DIC, but hypocalcemia (not hypercalcemia) is more typical. Hypercalcemia is not associated.',
  note: '"except" question form, en dash printed in stem ("Hypoxic ' + String.fromCharCode(8211) + ' ischemic"), transcribed as printed. All 5 options printed (a-e, lowercase as printed). Key highlighted: yellow box on "d. Hypercalcemia". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' }

{ n: 29, pr: 29, p: 854,
  key: 2,
  stem: 'The preterm newborn is defined as:',
  opts: ['<37 weeks gestation', '>37 weeks gestation', '<37 weeks gestation', '<30 weeks gestation', '>30 weeks gestation'],
  expl: 'Preterm is defined as delivery before 37 completed weeks of gestation. This classification is important for risk assessment.',
  note: '⚠️ PRINTED DEFECT, flagged per the numbers/units exception: options a and c print IDENTICAL text, "<37 weeks gestation" -- verified by direct re-read of the native image, not a transcription slip on my part. Transcribed exactly as printed, both instances kept, key left as the page prints it (the highlighted duplicate, option c). Threshold "37 completed weeks" in explanation box read clearly. All 5 options printed (a-e, lowercase as printed). Key highlighted: yellow box on "c. <37 weeks gestation" (the second, identical-text occurrence). Not on the brief\'s predicted-match list for this range; not checked against House for a match.' }

{ n: 30, pr: 30, p: 856,
  key: 1,
  stem: 'Naser, a newborn baby, is noted to have hepatosplenomegaly and a petechial rash. His red eye reflex is abnormal and there is no heart murmur. He fails his newborn screening hearing test. His mother\'s antenatal screening bloods were all normal. What is the most likely condition that has caused these symptoms?',
  opts: ['Dysmorphic syndrome', 'Congenital infection', 'Infant of diabetic mother', 'Cranial abnormality', 'Neonatal infection'],
  expl: 'Classic TORCH infections cause microcephaly, cataracts, hepatosplenomegaly, and sensorineural hearing loss. The abnormal red reflex suggests cataracts from congenital rubella or CMV.',
  note: 'All 5 options printed (a-e, lowercase as printed). Key highlighted: yellow box on "b. Congenital infection". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' }

{ n: 31, pr: 31, p: 858,
  key: 0,
  stem: 'During a normal term newborn resuscitation, which of the following should be performed first?',
  opts: ['The infant should be dried and kept warm under a radiant heater', 'The heart rate should be auscultated.', 'Breath sounds should be auscultated.', 'The nose and oropharynx should be suctioned'],
  expl: 'The initial step is to prevent hypothermia by drying and warming. Airway, breathing, and circulation steps follow as needed.',
  note: 'Page genuinely prints only 4 options (a-d), no e -- verified by direct re-read of the native image. Key highlighted: yellow box on "a. The infant should be dried and kept warm under a radiant heater". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' }

{ n: 32, pr: 32, p: 860,
  key: 0,
  stem: 'Which of the following statements is TRUE about Transient tachypnea of the newborn?',
  opts: ['Commonly associated with caesarian section delivery', 'Commonly associated with preterm delivery', 'Usually treated with mechanical ventilation', 'Caused by surfactant deficiency', 'Mild prenatal infection is a common association'],
  expl: 'TTN results from delayed clearance of lung fluid, more common after C-section where labor-related catecholamine surge is absent. It is usually mild and self-limited.',
  note: '"TRUE" question form, no vignette -- transcribed as printed. All 5 options printed (a-e, lowercase as printed). Key highlighted: yellow box on "a. Commonly associated with caesarian section delivery". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' }

{ n: 33, pr: 33, p: 862,
  key: 3,
  stem: 'Of the following, the MOST likely complications to expect for infants of diabetic mothers are:',
  opts: ['hyperacusis, hypercalcemia, hydronephrosis', 'hyperbilirubinemia, hypercalcemia, polydactyly', 'hyperglycemia, hypocalcemia, polysplenia', 'hypoglycemia, hypocalcemia, polycythemia', 'hypogonadism, hypocalcemia, polyuria'],
  expl: 'Hyperinsulinism causes hypoglycemia; calcium regulation is impaired, and hypoxia-induced erythropoiesis causes polycythemia. These are the classic complications.',
  note: 'All 5 options printed (a-e, lowercase as printed), each a 3-term list -- read clearly off the native image. Key highlighted: yellow box on "d. hypoglycemia, hypocalcemia, polycythemia". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' }

{ n: 34, pr: 34, p: 864,
  key: 3,
  stem: 'Which of the following birth injuries may be associated with severe blood loss and hypovolemic shock?',
  opts: ['caput succedaneum', 'cephalhematoma', 'bruising at face', 'subaponeurotic hemorrhage'],
  expl: 'Subgaleal hemorrhage can accumulate large amounts of blood, leading to hypovolemic shock. It is the most serious scalp birth injury.',
  note: 'Page genuinely prints only 4 options (a-d), no e -- verified by direct re-read of the native image. Stem uses "subaponeurotic hemorrhage" while the explanation box uses "Subgaleal hemorrhage" for the same entity -- both terms preserved exactly as printed in their respective locations, not normalised to one term. Key highlighted: yellow box on "d. subaponeurotic hemorrhage". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' }

{ n: 35, pr: 35, p: 866,
  key: 1,
  stem: 'You perform a routine newborn examination on a baby who is 72 hours old. Which one of the following features requires further immediate assessment?',
  opts: ['Acrocyanosis (cyanosis of the hands and feet)', 'A heart murmur', 'White vaginal discharge', 'Breast enlargement', 'Subconjunctival hemorrhages'],
  expl: 'Many newborn murmurs are benign, but a murmur at 72 hours could indicate congenital heart disease. This requires urgent evaluation.',
  note: 'All 5 options printed (a-e, lowercase as printed). Numeral: age 72 hours. Key highlighted: yellow box on "b. A heart murmur". CROSS-BANK MATCH CONFIRMED as predicted: pedhd-peri-5 (House, app\\data\\questions.peds.js, filed under House\'s "perinatal" chapter) prints a near-identical stem/option-ladder/key -- House\'s age is 20 hours (this printing: 72 hours), and House\'s option c is "An undescended testis" where this printing has "White vaginal discharge" in the same c slot; both print "A heart murmur" as option b/index 1 and both key it. This is the brief\'s predicted chapter-boundary disagreement (House perinatal vs. this book\'s Neonatology) -- record only, no fold (different bank, and the two printings differ in age and one distractor besides).' }

{ n: 36, pr: 36, p: 868,
  key: 2,
  stem: 'The most important and effective action in neonatal resuscitation if the baby does not start to breathe after delivery is:',
  opts: ['Provide oxygen', 'Perform chest compressions', 'Ventilate the lungs', 'Give epinephrine', 'Tracheal intubation'],
  expl: 'Positive pressure ventilation is the single most important and effective intervention in neonatal resuscitation. Oxygen, compressions, and drugs are secondary.',
  note: 'All 5 options printed (a-e, lowercase as printed). Key highlighted: yellow box on "c. Ventilate the lungs". Not on the brief\'s predicted-match list for this range; not checked against House for a match. This is the LAST entry of part B (n=36). Render-one-past boundary check: this range ends at pr.868/n36 per the task brief\'s exact 18-entry table (n19-n36, pp.834-868); the next answered page (n37/p.870) belongs to part C, another agent\'s range -- not rendered here, per brief scope (§11: stay inside the assigned n range).' }
