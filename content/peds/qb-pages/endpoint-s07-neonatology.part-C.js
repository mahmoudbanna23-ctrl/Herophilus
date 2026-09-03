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
  note: 'All 5 options printed (a-e, lowercase as printed). Numerals: gestation 37 weeks, birth weight 2.2 kg, read clearly off the native image, no crop needed. Key highlighted: yellow box on "d. Hypoglycemia". Predicted CROSS-BANK match per task brief: p.870 -> pedhd-peri-9 (House) -- this stem/scenario (pre-eclampsia, IUGR, 37 weeks, 2.2 kg, SCBU, well, breast-fed, "most at risk of" hypoglycemia) is consistent with a small-for-gestational-age/hypoglycemia stem; House file not opened per brief (§5: record predicted id only, no cross-bank check). Record only, no fold.' }

{ n: 38, pr: 38, p: 872,
  key: 4,
  stem: 'Which of the following is RIGHT regarding pathological apnea in newborns?',
  opts: ['It lasts < 20 seconds with tachycardia', 'It is central if there is cessation of air flow with presence of respiratory effort', 'More common in full term neonates', 'Bag and mask ventilation are contraindicated', 'May be treated with theophylline'],
  expl: 'Pathological apnea lasts >20 seconds or is associated with bradycardia. In preterms, caffeine or theophylline can be used as respiratory stimulants.',
  note: '"RIGHT" question form, no vignette -- transcribed as printed. All 5 options printed (a-e, lowercase as printed). Numeral: "< 20 seconds" in option a, ">20 seconds" in explanation box, both read clearly off the native image, no crop needed. Key highlighted: yellow box on "e. May be treated with theophylline". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' }

{ n: 39, pr: 39, p: 874,
  key: 1,
  stem: 'Which one of the following is the most important cause of jaundice presenting in the first 24 h of life?',
  opts: ['Prematurity', 'Hemolysis', 'Breastfeeding', 'Physiological jaundice', 'Early-onset sepsis'],
  expl: 'Jaundice appearing within 24 hrs is always pathologic, most often due to hemolysis (Rh or ABO incompatibility). Physiological jaundice never appears this early.',
  note: 'All 5 options printed (a-e, lowercase as printed). Numeral: "24 h" in stem, "24 hrs" in explanation box, read clearly off the native image. Key highlighted: yellow box on "b. Hemolysis". Thematically similar (early-onset jaundice, pathologic cause) to the p.840/p.888 pairing but a distinct stem, options and framing (general "most important cause" question vs. a specific-patient management vignette) -- not the same question, not flagged as a reprint or menu pairing. Not on the brief\'s predicted-match list for this range; not checked against House for a match.' }

{ n: 40, pr: 40, p: 876,
  key: 2,
  stem: 'A black mother is found to have glycosuria at her midwife appointment at 32 weeks\' gestation. Her glucose tolerance test and fasting glucose are abnormal. She is given dietary advice to control her blood glucose. What problem is her newborn baby at most increased risk of?',
  opts: ['Anemia', 'Hyperglycemia', 'Respiratory distress syndrome', 'Hypocalcemia'],
  expl: 'Hyperinsulinemia delays surfactant synthesis, so IDM infants have increased risk of RDS even at term.',
  note: 'Page genuinely prints only 4 options (a-d), no e -- verified by direct re-read of the native image. Numeral: gestation "32 weeks\'" at glycosuria detection, read clearly off the native image, no crop needed. Key highlighted: yellow box on "c. Respiratory distress syndrome". Predicted CROSS-BANK match per task brief: p.876 -> pedhd-peri-6 (House) -- this stem/scenario (mother with gestational glucose abnormality at a mid-pregnancy antenatal visit, dietary advice, "most increased risk of" -> RDS as the keyed answer) is consistent with an infant-of-diabetic-mother/RDS stem; House file not opened per brief (§5: record predicted id only, no cross-bank check). Record only, no fold.' }

{ n: 41, pr: 41, p: 878,
  key: 0,
  stem: 'Single most common cause of the decline in SIDS:',
  opts: ['supine sleeping', 'Feet to foot of cot', 'separate bed', 'avoid smoking'],
  expl: 'The "Back to Sleep" campaign (supine sleeping) has been the most significant factor in reducing SIDS rates worldwide.',
  note: 'No vignette, short stem -- transcribed as printed, including its lowercase run-on options and mixed capitalisation across options (a/c/d lowercase, b capitalised, as printed). Page genuinely prints only 4 options (a-d), no e -- verified by direct re-read of the native image. Key highlighted: yellow box on "a. supine sleeping". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' }

{ n: 42, pr: 42, p: 880,
  key: 0,
  stem: 'Which requires further immediate investigation in a newborn?',
  opts: ['heart murmur', 'undescended testes', 'subconjunctival hemorrhage', 'breast enlargement'],
  expl: 'Unlike findings such as subconjunctival hemorrhage or breast enlargement, a murmur may indicate serious congenital heart disease.',
  note: 'No vignette, short stem, lowercase options as printed. Page genuinely prints only 4 options (a-d), no e -- verified by direct re-read of the native image. Key highlighted: yellow box on "a. heart murmur". Same newborn-exam-findings item set (heart murmur / undescended testes / subconjunctival hemorrhage / breast enlargement) as part B\'s n35 (p.866, a 72-hour-old vignette with a 5th option "White vaginal discharge" and CROSS-BANK match to pedhd-peri-5); this p.880 page is a distinct, shorter, no-vignette general-knowledge stem rather than a specific-patient vignette, both key the same finding (heart murmur), but they are separate printed questions, not a straddle or duplicate of each other -- flagged for the fold pass to consider together with n35. Not itself on the brief\'s predicted-match list for this range.' }

{ n: 43, pr: 43, p: 882,
  key: 0,
  stem: 'A full-term male infant, with a birth weight of 3.7 kg, is born by elective caesarean section. His mother was well during pregnancy and had a normal blood glucose screen. Zak becomes tachypnoeic with indrawing between his ribs at 2 hours of age. Examination is otherwise normal. A chest X-ray looks normal. Diagnosis?',
  opts: ['transient tachypnea of new born', 'pneumonia', 'aspiration of meconium', 'bronchopulmonary dysplasia', 'respiratory distress syndrome'],
  expl: 'TTN presents with tachypnea soon after birth, especially after C-section, and resolves with supportive care. CXR is often normal or shows mild fluid retention.',
  note: 'All 5 options printed (a-e, lowercase as printed). Numerals: birth weight 3.7 kg, onset "2 hours of age", read clearly off the native image, no crop needed. Key highlighted: yellow box on "a. transient tachypnea of new born". Thematically related to part B\'s n32 (p.860, general TRUE/FALSE stem on TTN, no vignette, keyed to caesarean association) but a distinct specific-patient vignette here -- not the same question. Not on the brief\'s predicted-match list for this range; not checked against House for a match.' }

{ n: 44, pr: 44, p: 884,
  key: 0,
  stem: 'Which group has the largest water distribution?',
  opts: ['Preterm', 'Full term', '1 year', '5 years'],
  expl: 'Preterm infants have the highest total body water proportion (up to 80–85%). This decreases with increasing age.',
  note: 'No vignette, short stem, capitalised options as printed. Page genuinely prints only 4 options (a-d), no e -- verified by direct re-read of the native image. Numeral: "80–85%" range in explanation box, en dash printed, read clearly off the native image, no crop needed. Key highlighted: yellow box on "a. Preterm". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' }

{ n: 45, pr: 45, p: 886,
  key: 0,
  stem: 'Which of the following is a common complication in infants of diabetic mothers?',
  opts: ['Hypertrophic cardiomyopathy', 'Microsomia', 'Hyperglycemia', 'Hypocalcemia'],
  expl: 'Infants of diabetic mothers may develop hypertrophic cardiomyopathy due to fetal hyperinsulinism causing septal hypertrophy.',
  note: 'No vignette, short stem, capitalised options as printed. Page genuinely prints only 4 options (a-d), no e -- verified by direct re-read of the native image. Key highlighted: yellow box on "a. Hypertrophic cardiomyopathy". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' }

{ n: 46, pr: 46, p: 888,
  key: 0,
  stem: 'A 12-hour newborn is noted to be jaundiced. Indirect bilirubin is 6.4 mg/dl. What is the appropriate management?',
  opts: ['Admit the baby to the incubator for phototherapy and lab investigations', 'Repeat the bilirubin measurement after another 12 hours', 'Ensure adequate breast feeding and repeat bilirubin measurement after 24 hours', 'Reassure the mother that this is normal', 'Give bottle feeds for 24 hours then resume breast feeding'],
  expl: 'As with earlier case, jaundice before 24 hours is pathologic. The appropriate action is phototherapy with evaluation of hemolysis or infection.',
  note: '⚠️ CONFIRMED WITHIN-SECTION REPRINT of part B\'s n22 (p.840), as predicted by the task brief. Full comparison against p.840 (quoted in the task brief): STEM -- NOT word-for-word identical: p.840 reads "Indirect bilirubin 6.4 mg/dl."; this page (p.888) reads "Indirect bilirubin is 6.4 mg/dl." (one word, "is", inserted) -- otherwise identical, both "A 12-hour newborn is noted to be jaundiced." and both close "What is the appropriate management?". Numerals identical: "12-hour", "6.4 mg/dl", both read directly off the native image, legible, no crop needed. OPTIONS -- same 5 options, SAME ORDER, checked position by position: (0) admit/incubator/phototherapy+labs -- wording differs only in the last two words, p.840 abbreviates "lab Ix." where p.888 spells out "lab investigations", otherwise identical; (1) repeat bilirubin after another 12 hours -- word-for-word identical; (2) ensure breast feeding + repeat at 24 hours -- word-for-word identical; (3) reassure mother this is normal -- word-for-word identical; (4) bottle feeds 24h then resume breast feeding -- word-for-word identical. No reordering. KEY -- same position, option index 0 / letter "a" on both pages (p.840 highlighted "a. Admit...lab Ix."; this page highlights "a. Admit...lab investigations"). Letter case: both pages print lowercase a-e (the task brief\'s block above describes p.840 as printing "lowercase a-e, unlike most of this section\'s uppercase A-E" -- on direct re-read this p.888 page also prints lowercase a-e, matching p.840, not uppercase). UNITS -- identical, mg/dl on both, no ' + String.fromCharCode(956) + 'mol/L conversion on either printing. EXPLANATION BOX -- DIFFERENT TEXT on the two pages, not a verbatim reprint of the box: p.840\'s box reads "Jaundice appearing within the first 24 hours is always pathologic, often due to hemolysis. Such cases require immediate phototherapy and investigations to determine the cause."; this page\'s box reads "As with earlier case, jaundice before 24 hours is pathologic. The appropriate action is phototherapy with evaluation of hemolysis or infection." -- shorter, explicitly says "As with earlier case" (confirming the book itself treats this as a repeat), and additionally names "infection" as a cause to evaluate, which p.840\'s box does not mention. SUMMARY for the fold pass: same clinical scenario, same options in the same order, same keyed option, near-identical stem (one word added) and a re-worded, shortened, self-referencing explanation box. Staged complete and normally per brief -- no fold performed here.' }

{ n: 47, pr: 47, p: 890,
  key: 1,
  stem: 'Which of the following is TRUE about Transient Tachypnea of the Newborn?',
  opts: ['Oxygen therapy is always required', 'It is the most common cause of respiratory distress in term infants', 'It persists for several weeks', 'Chest X-ray is always normal'],
  expl: 'TTN is the leading cause of respiratory distress in term babies. It is benign and resolves within 2–3 days.',
  note: '"TRUE" question form, no vignette -- transcribed as printed. Page genuinely prints only 4 options (a-d), no e -- verified by direct re-read of the native image. Numeral: "2–3 days" in explanation box, en dash printed, read clearly off the native image, no crop needed. Key highlighted: yellow box on "b. It is the most common cause of respiratory distress in term infants". Third TTN-themed question in this section (after part B\'s n32, p.860, a different TRUE/FALSE stem keyed to caesarean association, and this part\'s own n43, p.882, a specific-patient vignette) -- distinct options and distinct stem from both, not a reprint or shared menu; flagged for the fold pass to view together. Not on the brief\'s predicted-match list for this range; not checked against House for a match.' }

{ n: 48, pr: 48, p: 892,
  key: 1,
  stem: 'In neonatal resuscitation, which is the FIRST most important step?',
  opts: ['Suction of the mouth and throat', 'Drying, warming, and ensuring airway', 'Administration of drugs', 'Immediate chest compressions'],
  expl: 'The priority is to prevent hypothermia and establish airway patency. Suction, ventilation, or drugs follow if needed.',
  note: '"FIRST" question form, no vignette -- transcribed as printed. Page genuinely prints only 4 options (a-d), no e -- verified by direct re-read of the native image. Key highlighted: yellow box on "b. Drying, warming, and ensuring airway". Same "first step in neonatal resuscitation" theme as part B\'s n31 (p.858, "which of the following should be performed first?", keyed to "dried and kept warm under a radiant heater") -- same underlying teaching point (dry/warm first) but distinct wording and a distinct option set (this page adds "ensuring airway" to the keyed option, and its distractors are suction / drugs / chest compressions rather than n31\'s heart-sound/breath-sound auscultation and suctioning distractors); not a verbatim reprint, flagged for the fold pass to view together. Not on the brief\'s predicted-match list for this range; not checked against House for a match.' }

{ n: 49, pr: 49, p: 894,
  key: 0,
  stem: 'Which of the following is TRUE regarding oxygen therapy in preterm infants?',
  opts: ['Low oxygen saturation increases risk of NEC and death', 'High oxygen saturation reduces risk of retinopathy of prematurity', 'Initial therapy should begin with 100% oxygen', 'Oxygen therapy has no effect on mortality'],
  expl: 'Hypoxemia in preterm infants increases the risk of necrotizing enterocolitis (NEC), brain injury, and mortality',
  note: '"TRUE" question form, no vignette -- transcribed as printed. Page genuinely prints only 4 options (a-d), no e -- verified by direct re-read of the native image. Numeral: "100%" in option c, read clearly off the native image, no crop needed. Explanation box prints no closing period after "mortality" -- transcribed exactly as printed, not added. Key highlighted: yellow box on "a. Low oxygen saturation increases risk of NEC and death". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' }

{ n: 50, pr: 50, p: 896,
  key: 1,
  stem: 'Which of the following complications are associated with preterm infants with RDS?',
  opts: ['Reduced risk of necrotizing enterocolitis', 'Retinopathy of prematurity', 'Non-invasive therapy is contraindicated', 'Hypocalcemia is the main complication'],
  expl: 'Preterm infants with respiratory distress syndrome (RDS) often require oxygen therapy, which predisposes them to retinopathy of prematurity. Non-invasive ventilation is not contraindicated, and hypocalcemia is not the main complication.',
  note: 'No vignette, direct stem -- transcribed as printed. Page genuinely prints only 4 options (a-d), no e -- verified by direct re-read of the native image. Key highlighted: yellow box on "b. Retinopathy of prematurity". Thematically adjacent to n49 (p.894, oxygen therapy in preterm infants, also referencing NEC and ROP) but a distinct stem and option set, not a reprint. Not on the brief\'s predicted-match list for this range; not checked against House for a match.' }

{ n: 51, pr: 51, p: 898,
  key: 0,
  stem: 'A 7-day-old infant is seen in the emergency department for fever and poor feeding. The baby was delivered vaginally 2 hours after the mother arrived to hospital. The delivery was a 36 weeks of gestation and the birth weight was 2900 g. Maternal laboratory test results were negative. The most likely organism causing this patient’s symptoms is:',
  opts: ['Group B Streptococcus (GBS)', 'Listeria monocytogenes', 'Staphylococcus aureus', 'Streptococcus pneumoniae', 'Haemophilus influenza'],
  expl: 'GBS is the most common pathogen to cause neonatal sepsis in infants aged 0 to 3 months',
  note: 'All 5 options printed, and this page prints UPPERCASE letters "A.-E.", unlike most other pages in this part which print lowercase a-e -- transcribed as printed. Numerals: age "7-day-old", "2 hours after the mother arrived to hospital", gestation "36 weeks", birth weight "2900 g", explanation box range "0 to 3 months" -- all read clearly off the native image, no crop needed. Explanation box prints no closing period after "3 months" -- transcribed exactly as printed, not added. Key highlighted: yellow box on "A. Group B Streptococcus (GBS)". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' }

{ n: 52, pr: 52, p: 900,
  key: 1,
  stem: 'What is the most likely cause of respiratory distress in a term infant with history of fetal distress and pea soup like amniotic fluid?',
  opts: ['Pneumothorax', 'Meconium aspiration syndrome', 'Congenital heart disease', 'Respiratory distress syndrome', 'Transient tachypnea of the newborn'],
  expl: 'Term baby + fetal distress + pea soup amniotic fluid ' + String.fromCharCode(8594) + ' classic for Meconium Aspiration Syndrome (MAS).',
  note: 'Uppercase letters "A.-E." as printed. All 5 options printed. Explanation box uses bold and red-coloured text for emphasis (bold on "pea soup amniotic fluid", the whole "classic for Meconium Aspiration Syndrome (MAS)" clause printed in red) and a right-arrow glyph ' + String.fromCharCode(8594) + ' -- text content transcribed in full, colour/bold formatting not reproducible in this schema and not noted further per the no-comment-on-typography rule. Key highlighted: yellow box on "B. Meconium aspiration syndrome". Not on the brief\'s predicted-match list for this range; not checked against House for a match.' }

{ n: 53, pr: 53, p: 902,
  key: 3,
  stem: 'Which clinical condition is left without further intervention on neonatal examination?',
  opts: ['Central cyanosis', 'Heart murmur', 'Inguinal hernia', 'Umbilical hernia', 'Jaundice at 24 hours of age'],
  expl: 'Common in neonates, usually closes spontaneously by 2–3 years of age. No intervention needed unless persistent after 3–5 years or very large.',
  note: 'Uppercase letters "A.-E." as printed. All 5 options printed. Numerals: "2–3 years of age" and "after 3–5 years" in explanation box, en dashes printed, read clearly off the native image, no crop needed. Key highlighted: yellow box on "D. Umbilical hernia". This is the LAST answered page of Section 7 Neonatology and the last entry of part C. Not on the brief\'s predicted-match list for this range; not checked against House for a match. Render-one-past boundary check: per the task brief, p.903 has already been read by a prior pass and is confirmed to be an Arabic closing-divider slide with nothing to stage -- not re-rendered here, per the brief\'s own statement that this section does not need to render past p.902.' }

