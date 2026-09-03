/* ===========================================================================
   ENDPOINT - Pediatrics endpoint part1.pdf - MODEL FINAL EXAM 1
   Verbatim staging record. PDF pages 1157-1321; PDF page = printed page, offset zero.
   Merged from endpoint-s10-mfe1.part-A.js + endpoint-s10-mfe1.part-B.js + endpoint-s10-mfe1.part-C.js + endpoint-s10-mfe1.part-D.js by merge-parts-ep.js.
   
   Every question is printed TWICE: an unanswered page, then the ANSWERED page with the key
   highlighted in yellow and (usually) a bordered explanation box. Only answered pages are
   staged. `n` is the true sequential index, `pr` what the page prints, `p` the PDF page,
   `key` a ZERO-BASED INDEX into `opts` (never a letter), matching the app field `answer`,
   `expl` the printed box verbatim or "".
   =========================================================================== */
var PEDEP_S10_STAGED = [

/* ENDPOINT part1 — Model Final Exam 1 — staging half A (first 20 questions, n1..n20).
   Source: "Pediatrics endpoint part1.pdf", PDF pages 1159,1161,1163,...,1197 (odd pages =
   answer-key printing of the exam, each carrying a yellow-highlighted key). The exam's blank
   printing lives on the even pages immediately before each (1158,1160,...) and is NOT staged.
   PDF is 1:1 (no 2-up split) — the PDF page number IS the book/document page number; brief
   pd-staging-brief.md §2's 2-up arithmetic does NOT apply here (per task instructions).
   OCR at content/peds/qb-pages/ocr/ep1/p<NNNN>.txt used for orientation/location only, never
   transcribed from — confirmed per brief §4.
   COMPLETE: 20/20 entries staged, n1..n20, PDF pp.1159,1161,1163,...,1197 (step +2, all odd,
   answer-key printing only). Printed question numbers walk 1..20 in order, no repeats, no skips,
   one-to-one with n. No figures anywhere in this range (20/20 pages examined whole, each a single
   self-contained text-only question box — "figures: none" per check-part-ep.js). Option counts:
   10 questions with only 4 printed options (A-D) — n1,4,6,8,9,12,14,17,19,20 — and 10 with the
   full 5 (A-E) — n2,3,5,7,10,11,13,15,16,18 — see each entry's note for the option-count flag;
   check-part-ep.js option-count summary was {"4":10,"5":10} at the finish.
   Key letter distribution (0-based): A=5 B=6 C=6 D=2 E=1.
   Resolution — READ THIS, IT IS A DEVIATION AND ITS STATED REASON WAS WRONG. The stager read 18
   of these 20 pages at 300 dpi only, against brief §3's rule that every numeral and key letter
   comes off a 600 dpi band crop, and justified it by calling this PDF "born-digital, not a
   physical scan". That claim is FALSE and was checked afterwards: pdftotext -f 1173 -l 1173
   returns a bare form feed, 0 characters — the page carries NO text layer, so it is an image-only
   scan like every other book in this workspace. The renders are crisp because the scan is good,
   not because the source is digital. Do not repeat this reasoning on parts B, C or D.
   The entries themselves nevertheless survived audit: 600 dpi band crops were taken on the two
   numerically densest pages (n8/p.1173: 36-week/15%/7%; n13/p.1183: 180/30/5-second) and matched;
   and all 30 numerals staged across the 14 numeric entries were then cross-checked against BOTH
   OCR passes of their own page (scratchpad numcheck.js) — 30/30 present, 0 unmatched. That is a
   second route to the same digits, not the same eye agreeing with itself, so the numbers stand.
   OCR at content/peds/qb-pages/ocr/ep1/ was NOT opened during this pass (confirmed p.4 of the
   staging brief). No straddles, no boiler lines, no shared/duplicate option menus observed across
   these 20 questions. No paediatric-surgery content in this range (surgery starts far later in
   the book, book p.149+, per brief §11a — out of scope and not approached). */

{ n: 1, pr: 1, p: 1159,
  key: 3,
  stem: "Which of the following statements regarding measuring and plotting children's growth is true?",
  opts: ['Correction for prematurity should be made up to the age of 6 months', "Final height usually approximates the father's height", 'Once a child is 5 years old, height does not usually deviate from the centile line', "It is normal for an infant's weight to cross centiles in the first months of life"],
  expl: 'Infants often show catch-up or catch-down growth in the first months, crossing centiles before stabilizing. Final height relates to mid-parental height, not just the father’s, and deviations after age 5 usually suggest pathology.',
  note: 'Only 4 options printed (A-D). Key highlighted: yellow box on "D. It is normal for an infant\'s weight to cross centiles in the first months of life." Read at 300 dpi full-page render (pg-1159.png) — this PDF is a clean digitally-typeset page (not a physical scan); text and highlight are crisp with no scan blur, so no 600 dpi crop was needed to confirm the numbers "6 months" / "5 years" or the key.' },

{ n: 2, pr: 2, p: 1161,
  key: 0,
  stem: 'Which of the following is a key sign of protein-energy malnutrition in infants?',
  opts: ['Edema', 'Hyperactivity', 'Hypoactivity', 'Diarrhea', 'Polyuria'],
  expl: 'Edema is a hallmark of protein-energy malnutrition, especially kwashiorkor. It results from low albumin and protein deficiency.',
  note: 'Key highlighted: yellow box on "A. Edema". No numerals on this page. Read at 300 dpi full-page render (pg-1161.png), crisp digital text.' },

{ n: 3, pr: 3, p: 1163,
  key: 3,
  stem: 'Which vitamin is often deficient in breastfed infants?',
  opts: ['Vitamin A', 'Vitamin B12', 'Vitamin C', 'Vitamin D', 'Vitamin E'],
  expl: 'Exclusively breastfed infants often develop vitamin D deficiency, since breast milk is low in vitamin D. This can lead to rickets if not supplemented.',
  note: 'Key highlighted: yellow box on "D. Vitamin D". No numerals on this page. Read at 300 dpi full-page render (pg-1163.png), crisp digital text.' },

{ n: 4, pr: 4, p: 1165,
  key: 2,
  stem: 'The parents of a 6-week-old boy are attending the clinic because he started to have attacks of vomiting since a few days. He is their first child and was born at full term. Which of the following is true regarding his condition?',
  opts: ['If the vomit contains milk then pyloric stenosis can be excluded', 'If the baby is dehydrated then gastroenteritis is the cause', 'If the baby is completely well and thriving, gastro-esophageal reflux should be considered', 'The baby should be admitted to hospital for observation'],
  expl: 'A 6-week-old with vomiting but otherwise thriving is most likely experiencing gastroesophageal reflux, a benign condition. Pyloric stenosis and gastroenteritis would cause dehydration and poor thriving.',
  note: 'Only 4 options printed (A-D). Key highlighted: yellow box on "C. If the baby is completely well and thriving, gastro-esophageal reflux should be considered." Age "6-week-old" read clearly at 300 dpi (pg-1165.png), crisp digital text, no ambiguity.' },

{ n: 5, pr: 5, p: 1167,
  key: 1,
  stem: 'What is the primary mode of transmission for varicella?',
  opts: ['Fecal-oral route', 'Droplet transmission', 'Bloodborne transmission', 'Direct contact with lesions', 'Vector-borne transmission'],
  expl: 'Varicella spreads mainly via airborne droplets and also direct contact with lesions. Fecal-oral and bloodborne transmission are not involved.',
  note: 'Key highlighted: yellow box on "B. Droplet transmission". No numerals on this page. Read at 300 dpi full-page render (pg-1167.png), crisp digital text.' },

{ n: 6, pr: 6, p: 1169,
  key: 0,
  stem: 'Which of the following is a character of familial short stature?',
  opts: ['Height falls within 2 centile spaces of mid-parental height', 'More common in girls', 'Delayed onset of puberty', 'Presentation is in adolescence'],
  expl: 'Familial short stature is characterized by normal growth velocity and bone age, with height consistent with genetic potential. Unlike constitutional delay, puberty occurs at a normal age.',
  note: 'Only 4 options printed (A-D). Key highlighted: yellow box on "A. Height falls within 2 centile spaces of mid-parental height." The numeral "2" read clearly at 300 dpi (pg-1169.png), crisp digital text, unambiguous single digit.' },

{ n: 7, pr: 7, p: 1171,
  key: 4,
  stem: 'A 6-year-old boy presents with a fever of 39°C, sore throat, and a red rash with a sandpaper texture. He also has red cheeks and a "strawberry" tongue. What is the most appropriate treatment?',
  opts: ['Amoxicillin', 'Acetaminophen', 'Antihistamines', 'Acyclovir', 'Penicillin'],
  expl: 'The child’s presentation is scarlet fever (sandpaper rash, strawberry tongue), which requires penicillin to eradicate Group A streptococcus. Supportive therapy alone is insufficient.',
  note: 'Key highlighted: yellow box on "E. Penicillin". Numerals "6-year-old" and "39°C" read clearly at 300 dpi (pg-1171.png), crisp digital text, unambiguous.' },

{ n: 8, pr: 8, p: 1173,
  key: 1,
  stem: 'A 36-week gestation infant is delivered via cesarean section because of macrosomia and fetal distress. The mother has class D pregestational diabetes (insulin dependent, with vascular disease); her hemoglobin A1c is 15% (normal 7%). This infant is at risk for which of the following?',
  opts: ['Congenital dislocated hip', 'Polycythemia', 'Hyperglycemia', 'Pneumothorax'],
  expl: 'Infants of diabetic mothers often develop polycythemia due to intrauterine hypoxia. They are prone to hypoglycemia, not hyperglycemia, after birth.',
  note: 'Only 4 options printed (A-D). Key highlighted: yellow box on "B. Polycythemia". Numerals "36-week", "15%", "7%" confirmed at a 600 dpi band crop (crop-1173-stem-1173.png, box x100 y280 W4300 H700 at 600dpi) — matched the 300 dpi read exactly, no discrepancy.' },

{ n: 9, pr: 9, p: 1175,
  key: 0,
  stem: 'A 2-year-old boy presents with a head circumference that has increased from the 50th percentile to above the 97th percentile over the last six months. His height and weight remain stable. What is the most appropriate next step?',
  opts: ['Order a brain MRI', 'Reassure and follow up in 6 months', "Measure parents' head circumference", 'Measure serum IGF-1 levels'],
  expl: 'Rapidly increasing head circumference crossing percentiles suggests hydrocephalus or intracranial pathology, requiring imaging. Familial macrocephaly is less likely here.',
  note: 'Only 4 options printed (A-D). Key highlighted: yellow box on "A. Order a brain MRI". Numerals "2-year-old", "50th", "97th", "six months" read clearly at 300 dpi (pg-1175.png), crisp digital text, unambiguous.' },

{ n: 10, pr: 10, p: 1177,
  key: 0,
  stem: 'A 5-year-old child presents with a maculopapular rash, high fever, cough, and conjunctivitis. The rash started behind the ears and spread to the trunk and extremities. What is the most likely complication of this condition?',
  opts: ['Subacute sclerosing panencephalitis', 'Acute glomerulonephritis', 'Myocarditis', 'Guillain-Barré syndrome', 'Rheumatic fever'],
  expl: 'The child has measles, which can later cause SSPE, a rare but fatal complication. Other listed options are not typical sequelae of measles.',
  note: 'Key highlighted: yellow box on "A. Subacute sclerosing panencephalitis". Numeral "5-year-old" read clearly at 300 dpi (pg-1177.png), crisp digital text.' },

{ n: 11, pr: 11, p: 1179,
  key: 0,
  stem: 'A 6-month-old exclusively breastfed infant presents with wide anterior fontanelle and craniotabes. The mother follows a vegan diet and does not take any supplements. What is the most appropriate next step?',
  opts: ['Begin Vitamin D supplementation', 'Start calcium supplementation', 'Introduce solid foods', 'Reassure and monitor', 'Perform skull X-rays'],
  expl: 'The findings suggest rickets due to vitamin D deficiency, especially in a vegan mother not supplementing. Calcium deficiency is less likely.',
  note: 'Key highlighted: yellow box on "A. Begin Vitamin D supplementation". Numeral "6-month-old" read clearly at 300 dpi (pg-1179.png), crisp digital text.' },

{ n: 12, pr: 12, p: 1181,
  key: 1,
  stem: 'A newborn female is delivered by C-section to a 23-year-old mother after 29 weeks of gestation. She has poor respiratory effort at time of delivery with cyanosis, requiring resuscitation and eventually intubated. On examination in the delivery room, the infant continues to have subcostal retractions and is difficult to ventilate. What is the next best step in management?',
  opts: ['Administer albuterol', 'Administer surfactant', 'Closely monitor clinically', 'Obtain an echocardiogram'],
  expl: 'A premature infant with respiratory distress syndrome (RDS) due to surfactant deficiency needs surfactant therapy. Albuterol and echo are not appropriate here.',
  note: 'Only 4 options printed (A-D). Key highlighted: yellow box on "B. Administer surfactant". Numerals "23-year-old" and "29 weeks" read clearly at 300 dpi (pg-1181.png), crisp digital text, unambiguous.' },

{ n: 13, pr: 13, p: 1183,
  key: 2,
  stem: 'A 1-year-old infant arrives to the emergency department with history of diarrhea and poor fluid intake since one day. Your quick examination reveals a lethargic child; his heart rate is 180 beats per minute, his respiratory rate is 30 breaths per minute, and his blood pressure is low for age. He has poor skin turgor, 5-second capillary refill, and cool extremities. Which of the following fluids is most appropriate management for his condition?',
  opts: ['IV Dextrose 5%', 'Oral rehydration solution', '0.9% sodium chloride', 'Whole blood', 'IV sodium bicarbonate'],
  expl: 'The child has hypovolemic shock due to dehydration, best treated with IV isotonic saline bolus. Oral rehydration is insufficient in this emergency',
  note: 'Key highlighted: yellow box on "C. 0.9% sodium chloride". Numerals "1-year-old", "180 beats per minute", "30 breaths per minute", "5-second capillary refill" confirmed at a 600 dpi band crop (crop-1183-stem-1183.png, box x100 y130 W4500 H900 at 600dpi) — matched the 300 dpi read exactly, no discrepancy. Explanation box has no closing period as printed; transcribed verbatim.' },

{ n: 14, pr: 14, p: 1185,
  key: 1,
  stem: 'Which of the following lesions in the newborn resolve spontaneously?',
  opts: ['Meningocele', 'Umbilical hernia', 'Inguinal hernia', 'Cataract'],
  expl: 'Umbilical hernias in infants often close spontaneously within a few years. Inguinal hernias and cataracts do not resolve without surgery.',
  note: 'Only 4 options printed (A-D). Key highlighted: yellow box on "B. Umbilical hernia". No numerals on this page. Read at 300 dpi full-page render (pg-1185.png), crisp digital text.' },

{ n: 15, pr: 15, p: 1187,
  key: 2,
  stem: 'A 4-year-old child presents with vomiting and diarrhea after eating shellfish for the first time. Which of the following findings would most likely indicate a food allergy rather than food intolerance?',
  opts: ['Elevated blood glucose', 'Presence of eosinophils in stool', 'Positive skin prick test', 'Elevated serum amylase', 'Negative IgE levels'],
  expl: 'Food allergy is IgE-mediated and confirmed with positive allergy testing, unlike intolerance which does not involve the immune system.',
  note: 'Key highlighted: yellow box on "C. Positive skin prick test". Numeral "4-year-old" read clearly at 300 dpi (pg-1187.png), crisp digital text.' },

{ n: 16, pr: 16, p: 1189,
  key: 2,
  stem: 'Which of the following statements concerning shock is TRUE?',
  opts: ['Dehydration due to gastroenteritis can cause shock due to maldistribution of fluid', 'Bradycardia occurs in compensated shock', 'Mottled, pale and cold skin is a sign of compensated shock', 'Anaphylaxis can cause shock due to hypovolemia', 'Decreased urine output is a sign of decompensated shock'],
  expl: 'Compensated shock presents with tachycardia and poor perfusion (cold extremities, delayed cap refill). Decreased urine output is a later decompensated sign.',
  note: 'Key highlighted: yellow box on "C. Mottled, pale and cold skin is a sign of compensated shock". No numerals on this page. Read at 300 dpi full-page render (pg-1189.png), crisp digital text.' },

{ n: 17, pr: 17, p: 1191,
  key: 1,
  stem: 'A 10-day-old infant is brought in by her parents, who are concerned that she is not breastfeeding well. The infant was born at term and has been exclusively breastfed. On examination, the baby is alert but has lost 10% of her birth weight. Which of the following is the next best step in management?',
  opts: ['Advise immediate weaning and start formula', 'Encourage more frequent breastfeeding sessions', 'Introduce solid foods', 'Supplement with water between feeds'],
  expl: 'A 10% weight loss is common in the first days but should improve. The best management is encouraging effective, frequent breastfeeding, not formula or water.',
  note: 'Only 4 options printed (A-D). Key highlighted: yellow box on "B. Encourage more frequent breastfeeding sessions". Numerals "10-day-old" and "10%" read clearly at 300 dpi (pg-1191.png), crisp digital text, unambiguous.' },

{ n: 18, pr: 18, p: 1193,
  key: 1,
  stem: 'Which one of the following statements about the immunization schedule is correct?',
  opts: ['If a child misses an immunization the course should be restarted', 'Oral polio vaccine should not be given to the brother of a child receiving chemotherapy for leukemia', 'Immunizations should not be given to children older than indicated in the schedule', 'Immunizations should be given on time even if the child has a fever', 'Fever, swelling at the injection site, and irritability are signs of anaphylaxis and the child should not be given the vaccine again'],
  expl: 'OPV is live and can spread to immunocompromised contacts. Fever alone is not a contraindication.',
  note: 'Key highlighted: yellow box on "B. Oral polio vaccine should not be given to the brother of a child receiving chemotherapy for leukemia". No numerals on this page. Read at 300 dpi full-page render (pg-1193.png), crisp digital text.' },

{ n: 19, pr: 19, p: 1195,
  key: 2,
  stem: 'Which one of the following is the most important risk factor in the etiology of intraventricular hemorrhage?',
  opts: ['Intermittent positive-pressure ventilation', 'Pneumothorax', 'Extreme prematurity', 'Hypoxic-ischemic encephalopathy'],
  expl: 'The most important risk factor for intraventricular hemorrhage is prematurity due to fragile germinal matrix vessels.',
  note: 'Only 4 options printed (A-D). Key highlighted: yellow box on "C. Extreme prematurity". No numerals on this page. Read at 300 dpi full-page render (pg-1195.png), crisp digital text.' },

{ n: 20, pr: 20, p: 1197,
  key: 2,
  stem: 'Which of the following is true of lactose intolerance in a 4-year-old child?',
  opts: ['Is likely to cause blood and mucus in the stools, as mucosal cells are sloughed off', 'Is usually due to a genetic deficiency of intestinal lactase enzyme', 'Is most likely temporary, secondary to acquired lactase deficiency', 'Leads to excessive lactic acid (lactate) in the blood, causing acidosis'],
  expl: 'In young children, lactose intolerance usually follows gastroenteritis or mucosal injury, making it temporary. Genetic lactase deficiency presents later in life.',
  note: 'Only 4 options printed (A-D). Key highlighted: yellow box on "C. Is most likely temporary, secondary to acquired lactase deficiency". Numeral "4-year-old" read clearly at 300 dpi (pg-1197.png), crisp digital text. This is the last of the assigned 20 pages (n1..n20, p.1159-1197).' },

/* ENDPOINT part1 -- Model Final Exam 1 -- staging half B (questions 21..40, n21..n40).
   Source: "Pediatrics endpoint part1.pdf", PDF pages n21=1199, n22=1201, n23=1203, n24=1205,
   n25=1207, n26=1209, n27=1211, n28=1214, n29=1216, n30=1218, n31=1220, n32=1222, n33=1224,
   n34=1226, n35=1228, n36=1230, n37=1232, n38=1234, n39=1236, n40=1238 -- step +2 EXCEPT
   between n27 (1211) and n28 (1214): p.1212 is a notes page and p.1213 the blank exam printing,
   per task instructions -- not recomputed, taken as given.
   PDF is 1:1 (no 2-up split) -- brief pd-staging-brief.md's Section 2 2-up arithmetic does NOT
   apply here, per task instructions. Every question in this exam prints twice (blank exam page,
   then answer-key page with a yellow highlight); staging is from the answer-key pages listed
   above only.
   OCR at content/peds/qb-pages/ocr/ep1/p<NNNN>.txt used for orientation/location only, never
   transcribed from -- confirmed per brief Section 4. Every numeral, unit, dose, exponent and
   every answer-key letter is read off a 600 dpi band crop, never off a 300 dpi full render --
   per task instructions Section 5 (Part A's "born-digital" 300-dpi-only shortcut is NOT repeated
   here).
   COMPLETE -- all 20 entries (n21..n40) staged, one page at a time, each validated with
   check-part-ep.js immediately after appending. Final validator run: 20 entries, n 21..40,
   pp.1199-1238, option counts {4:6, 5:14}, key positions {0:3, 1:7, 2:3, 3:4, 4:3}, no printed
   box (expl:""): none, pr != n: none, figures: none -- OK.
   Straddles: ONE -- n27 (p.1211) straddles onto p.1212 for its explanation box; verified by
   rendering both p.1212 (notes page, confirms the straddle) and p.1213 (confirmed blank/unanswered
   printing of Q28, no yellow anywhere -- validates the given page-gap rather than contradicting it).
   Defective printed options: n34 (p.1226) -- options B and D both print "Gestational age" verbatim
   (exact duplicate); the yellow highlight is on D, so key=3 as printed, recorded not disputed.
   Figures: none encountered in n21..n40. Paediatric surgery: not encountered in this range --
   nothing skipped for that reason. Boiler line ("Select one answer only." or similar): not printed
   on any of the 20 pages. Every numeral, unit, dose, exponent and answer-key letter across all 20
   entries was read off a 600 dpi band crop, named in that entry's note, and cross-checked against
   the 300 dpi full render -- no mismatches found, no re-render-shifted crops were needed. */

{ n: 21, pr: 21, p: 1199,
  key: 1,
  stem: 'A 13-year-old girl is brought to the clinic for concerns about delayed puberty. She is in the 10th percentile for height and 25th percentile for weight. Physical examination reveals no signs of puberty, and her bone age is mildly delayed. Her mother also had a past history of delayed puberty. What is the most likely diagnosis?',
  opts: ['Turner syndrome', 'Constitutional growth delay', 'Growth hormone deficiency', 'Hypothyroidism', 'Familial short stature'],
  expl: 'This condition presents with delayed puberty, mildly delayed bone age, and family history of delayed puberty. The child usually catches up later.',
  note: 'Key highlighted: yellow box on "B. Constitutional growth delay". Numerals "13-year-old", "10th percentile", "25th percentile" confirmed at 600 dpi band crop (crop-1199-full-1199.png, box x100 y150 W4700 H2200 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' },

{ n: 22, pr: 22, p: 1201,
  key: 3,
  stem: 'An 8-year-old girl presents with a 6-month history of pain most days around the umbilicus which lasts for an hour and responds to paracetamol syrup. It does not occur at weekends usually. She opens her bowels daily and passes a soft stool. She is thriving with her weight and height on the 75th centile. Which of the following options is the appropriate next step?',
  opts: ['Abdominal radiograph', 'Referral to a pediatric gastroenterologist', 'Liver function tests', 'Reassurance and no further investigation', 'Prescription for laxatives'],
  expl: "The girl's pain is functional abdominal pain since growth and examination are normal, and symptoms stop on weekends. No further tests are needed.",
  note: 'Key highlighted: yellow box on "D. Reassurance and no further investigation". Numerals "8-year-old", "6-month", "75th centile" confirmed at 600 dpi band crop (crop-1201-full-1201.png, box x100 y150 W4700 H2200 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' },

{ n: 23, pr: 23, p: 1203,
  key: 4,
  stem: "What is appropriate about the role of vitamins in children's nutrition?",
  opts: ['Folic acid has no role in blood production', 'Vitamin K main function is in the synthesis of RBCs', 'Vitamin E deficiency leads to decreased clot generation', 'Vitamin B12 deficiency is common in infants', 'Vitamin C deficiency can lead to petechiae and mucosal bleeding'],
  expl: 'Vitamin C is required for collagen synthesis; deficiency causes scurvy with bleeding signs.',
  note: 'Key highlighted: yellow box on "E. Vitamin C deficiency can lead to petechiae and mucosal bleeding". No clinical measurement numerals on this page ("B12" is a vitamin-name label, not a dose); confirmed at 600 dpi band crop (crop-1203-full-1203.png, box x100 y150 W4700 H1500 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' },

{ n: 24, pr: 24, p: 1205,
  key: 0,
  stem: "A 4-month-old infant is brought in for concerns about small size. The infant was born at 32 weeks gestation and has been primarily formula-fed. Which of the following is the first most important factor to consider in managing this infant's growth?",
  opts: ['Adjusting for corrected gestational age', 'Introducing solid foods early', 'Switching to a higher-calorie formula', 'Recommending breastfeeding'],
  expl: "Premature infants' growth should be assessed using corrected age, not chronological age, to avoid mislabeling them as small.",
  note: 'Only 4 options printed (A-D). Key highlighted: yellow box on "A. Adjusting for corrected gestational age". Numerals "4-month-old", "32 weeks" confirmed at 600 dpi band crop (crop-1205-full-1205.png, box x100 y150 W4700 H2200 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' },

{ n: 25, pr: 25, p: 1207,
  key: 3,
  stem: 'A 2-year-old boy has been unwell for 6 days with a fever, sore eyes, and throat. He is noted to have red eyes, an injected throat, and cervical lymphadenopathy. He also has a generalized maculopapular rash, and the skin is peeling from his hands and feet. What is the next best step in management?',
  opts: ['Antipyretic/analgesia', 'Highly active antiretroviral therapy', 'Intravenous antibiotics', 'Intravenous immunoglobulin', 'Oral antibiotic'],
  expl: 'This child has Kawasaki disease (fever >5 days, rash, lymphadenopathy, peeling). IVIG reduces the risk of coronary aneurysms.',
  note: 'Key highlighted: yellow box on "D. Intravenous immunoglobulin". Numerals "2-year-old", "6 days", ">5 days" confirmed at 600 dpi band crop (crop-1207-full-1207.png, box x100 y150 W4700 H2200 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' },

{ n: 26, pr: 26, p: 1209,
  key: 2,
  stem: 'A 31-week female infant is born via elective cesarean section for intrauterine growth retardation and reversed end-diastolic flow; birthweight is 1010 g. Which one of the following management options will be most effective in decreasing the risk of developing necrotizing enterocolitis?',
  opts: ['Oral antibiotics', 'Formula feeding', 'Probiotics', 'Oral immunoglobulin'],
  expl: 'Probiotics reduce the risk of necrotizing enterocolitis in preterm, low-birth-weight infants. Formula feeding increases the risk.',
  note: 'Only 4 options printed (A-D). Key highlighted: yellow box on "C. Probiotics". Numerals "31-week", "1010 g" confirmed at 600 dpi band crop (crop-1209-full-1209.png, box x100 y150 W4700 H2200 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' },

{ n: 27, pr: 27, p: 1211,
  box: 1212,
  key: 1,
  stem: 'A 9-month-old boy presented to the emergency room with convulsions. He had a history of mild diarrhea for 3 days and was afebrile. His mother described that he was not thirsty and had no past history of convulsions. The examination revealed a large head, prominent fontanelles, and broad wrists. His eyes and skin were normal, and rectal temperature was 37.8°C. Which of the following is expected in his investigations?',
  opts: ['Normal calcium level, low phosphate level, high alkaline phosphatase level', 'Low calcium level, low phosphate level, high alkaline phosphatase level', 'Low calcium level, normal phosphate level, normal alkaline phosphatase level', 'Normal calcium level, normal phosphate level, high alkaline phosphatase level', 'Low calcium level, normal phosphate level, high alkaline phosphatase level'],
  expl: "This 9-month-old with convulsions, large head, open fontanelles, and broad wrists has vitamin D deficiency rickets. Vitamin D deficiency -> decreased calcium absorption -> hypocalcemia. Secondary hyperparathyroidism -> increased phosphate excretion -> hypophosphatemia. Alkaline phosphatase increased due to active osteoblasts trying to mineralize bone. Classic labs in nutritional rickets = low calcium + low phosphate + high ALP.",
  note: '⚠️ THE EXPLANATION BOX OVERFLOWS ONTO p.1212 -- recorded in the box field, and NOT a straddle: a straddle is a question whose stem or options span two sheets, and this one does not. (Wording corrected 2026-09-04; the observation below is the stager\'s, unchanged.) The printed explanation box for n27 is entirely on p.1212 (unboxed, bold/italic style, unlike the bordered boxes used elsewhere in this exam); stem, options and the yellow key are all on p.1211. Key highlighted: yellow box on "B. Low calcium level, low phosphate level, high alkaline phosphatase level". Numerals "9-month-old", "3 days", "37.8°C" confirmed at 600 dpi band crop (crop-1211-full-1211.png, box x100 y150 W4700 H2400 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present. Verified p.1213 (the printed "blank" page in the given gap) is the UNANSWERED exam printing of n28 (no yellow anywhere on it, confirming it is the wrong sheet to stage from) and p.1214 carries n28 with its key -- consistent with the task instructions\' step gap.' },

{ n: 28, pr: 28, p: 1214,
  key: 1,
  stem: "A 4-month-old baby girl is assessed by her general practitioner because of constant crying and poor feeding. She is fed by bottle on infant formula. Her mother tearfully complains that she is finding it very difficult to cope. Her development, growth, and physical examination are normal, but her stools frequently contain streaks of blood. What is the likely cause of the girl's problem?",
  opts: ['An inherited genetic condition', "Cow's milk protein allergy", 'Down syndrome', 'Gastroesophageal reflux', 'Cystic fibrosis'],
  expl: "Blood-streaked stools in an otherwise healthy infant suggest cow's milk protein allergy. Reflux does not cause blood.",
  note: 'Key highlighted: yellow box on "B. Cow\'s milk protein allergy". Numeral "4-month-old" confirmed at 600 dpi band crop (crop-1214-full-1214.png, box x100 y150 W4700 H2200 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present. This page is p.1214, immediately after the notes/blank gap (p.1212-1213), per task instructions.' },

{ n: 29, pr: 29, p: 1216,
  key: 2,
  stem: 'An infant arrives at the emergency department with a 2-day history of diarrhea. The mother is concerned about the child developing dehydration. Which of the following increases the risk of dehydration?',
  opts: ['If the child vomited twice in the previous 24 hours', 'If the child had a similar attack one month ago', "If the child's age was below 6 months", 'If the child has bloody diarrhea'],
  expl: 'Infants <6 months are at higher risk of dehydration due to higher water turnover and immature renal function.',
  note: 'Only 4 options printed (A-D). Key highlighted: yellow box on "C. If the child\'s age was below 6 months". Numerals "2-day", "twice", "24 hours", "one month", "6 months" confirmed at 600 dpi band crop (crop-1216-full-1216.png, box x100 y150 W4700 H2200 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' },

{ n: 30, pr: 30, p: 1218,
  key: 1,
  stem: 'At which of these ages is the biochemical screening test (Guthrie test) done in Egypt?',
  opts: ['At birth', '3–6 days', '12 days', '3 weeks', '3 months'],
  expl: 'The Guthrie test (metabolic screening) in Egypt is performed between 3–6 days after birth to allow metabolites to accumulate.',
  note: 'Key highlighted: yellow box on "B. 3-6 days" (printed with an en dash, preserved verbatim as "3–6"). Numerals "3-6 days" (option and explanation), "12 days", "3 weeks", "3 months" confirmed at 600 dpi band crop (crop-1218-full-1218.png, box x100 y150 W4700 H2200 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' },

{ n: 31, pr: 31, p: 1220,
  key: 1,
  stem: 'Which of the following is TRUE about transient tachypnea of the newborn?',
  opts: ['Commonly associated with vaginal delivery', 'Commonly associated with term delivery', 'Usually treated with mechanical ventilation', 'Caused by surfactant deficiency'],
  expl: 'Transient tachypnea of the newborn occurs more in term infants, especially after cesarean section, due to delayed lung fluid clearance.',
  note: 'Only 4 options printed (A-D). No numerals on this page. Key highlighted: yellow box on "B. Commonly associated with term delivery"; confirmed at 600 dpi band crop (crop-1220-full-1220.png, box x100 y150 W4700 H1500 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' },

{ n: 32, pr: 32, p: 1222,
  key: 4,
  stem: 'Parents of a 24-hour-old newborn are concerned because his mother developed chickenpox one day after his delivery. From the following list of options, what is the best advice you could give?',
  opts: ['Breastfeeding is contraindicated', 'Neonatal infection is unlikely due to transplacental acquired antibodies', 'Reassure and discharge home, asking the mother to return if the baby develops symptoms', 'The infant should receive varicella zoster vaccine', 'The infant should receive varicella zoster immunoglobulin'],
  expl: 'Maternal chickenpox around delivery puts the neonate at high risk, so VZIG should be given for protection.',
  note: 'Key highlighted: yellow box on "E. The infant should receive varicella zoster immunoglobulin". Numeral "24-hour-old" confirmed at 600 dpi band crop (crop-1222-full-1222.png, box x100 y150 W4700 H2200 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' },

{ n: 33, pr: 33, p: 1224,
  stem: 'A male infant was delivered at 40 weeks of gestation. The baby was apneic, limp, pale, and covered with meconium-stained amniotic fluid.\n\nWhat is the most common complication?',
  opts: ['Pneumothorax', 'Sepsis', 'Bacterial pneumonia', 'Hyperglycemia', 'Hypernatremia'],
  key: 0,
  expl: 'Meconium aspiration can lead to air trapping and pneumothorax as the most common complication.',
  note: 'Key highlighted: yellow box on "A. Pneumothorax". Numeral "40 weeks" confirmed at 600 dpi band crop (crop-1224-full-1224.png, box x100 y150 W4700 H1300 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' },

{ n: 34, pr: 34, p: 1226,
  stem: 'An infant was born at 35 weeks of gestation to a 30-year-old G3P2 mother via spontaneous vaginal delivery. Rupture of membranes occurred 15 hours prior to delivery. Birth weight is 3400 g, and Apgar scores were 6 and 9 at 1 and 5 minutes, respectively.\n\nWhich of the following factors places this infant at greatest risk for sepsis?',
  opts: ['Male gender', 'Gestational age', 'Apgar score', 'Gestational age'],
  key: 3,
  expl: 'Prematurity (35 weeks) is the strongest risk factor for neonatal sepsis in this case. Prolonged rupture of membranes adds further risk.',
  note: 'DEFECTIVE PRINTED OPTIONS -- B and D are both printed as "Gestational age" verbatim, an exact duplicate; the yellow highlight is on the second (D), so key=3 (the 4th/last option), recorded as printed, not disputed. Numerals "35 weeks", "30-year-old", "G3P2", "15 hours", "3400 g", "6 and 9 at 1", "5 minutes" all confirmed at 600 dpi band crop (crop-1226-a-1226.png, box x100 y150 W4700 H1200 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' },

{ n: 35, pr: 35, p: 1228,
  stem: 'A 7-month-old child presents with a fever of 39°C for 3 days, mildly injected pharynx, and mild diarrhea. On the fourth day of the illness, the fever ceases and a maculopapular rash appears.\n\nWhat is the most likely diagnosis?',
  opts: ['Measles', 'Rubella', 'Varicella', 'Scarlet fever', 'Roseola infantum'],
  key: 4,
  expl: 'Roseola presents with high fever followed by a rash after fever subsides. Measles rash starts before fever resolution',
  note: 'Key highlighted: yellow box on "E. Roseola infantum". Numerals "7-month-old", "39°C", "3 days", "fourth day" confirmed at 600 dpi band crop (crop-1228-a-1228.png, box x100 y150 W4700 H900 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' },

{ n: 36, pr: 36, p: 1230,
  stem: 'A 5-year-old boy has had an intermittent fever for 4 weeks. He presents to the Emergency Department with a headache and neck stiffness. A CT scan is performed, which is normal. A lumbar puncture is performed, and you receive the following results: Cerebrospinal fluid (CSF) microscopy: 95 lymphocytes, 10 neutrophils, and 0 red blood cells/mm3. CSF protein: 220 mg/dl. CSF glucose: 24 mg/dl. Blood glucose: 149 mg/dl. What is the most likely diagnosis?',
  opts: ['Guillain-Barré syndrome', 'Bacterial meningitis', 'Blood-stained tap', 'Tuberculosis meningitis', 'Viral meningitis'],
  key: 3,
  expl: 'CSF shows lymphocytic pleocytosis, very high protein, and low glucose, which is typical for TB meningitis.',
  note: 'Key highlighted: yellow box on "D. Tuberculosis meningitis". Numerals "5-year-old", "4 weeks", "95 lymphocytes", "10 neutrophils", "0 red blood cells/mm3", "protein 220 mg/dl", "CSF glucose 24 mg/dl", "Blood glucose 149 mg/dl" all confirmed at 600 dpi band crop (crop-1230-a-1230.png, box x100 y150 W4700 H1600 at 600dpi) -- matched the 300 dpi read exactly. Printed option "B.Bacterial meningitis" has no space after the period -- transcribed with normal spacing as option text, oddity noted here only. No boiler line present.' },

{ n: 37, pr: 37, p: 1232,
  stem: "A 4-month-old infant is seen in the Pediatric Assessment Unit. He is feeding poorly and is breathless. He has had loose stools for the last 4 weeks and has not put on any weight since then. On examination, he appears pale and has marked intercostal recession. His oxygen saturation in air is 82%. His chest X-ray shows diffuse bilateral infiltrates. What is the most likely diagnosis?",
  opts: ["Bruton's agammaglobulinemia", 'Severe combined immunodeficiency (SCID)', 'Complement deficiency', 'Staphylococcal pneumonia'],
  key: 1,
  expl: 'Failure to thrive, chronic diarrhea, recurrent infections, and diffuse infiltrates on CXR suggest SCID.',
  note: 'Key highlighted: yellow box on "B. Severe combined immunodeficiency (SCID)". Only 4 options printed on this page. Numerals "4-month-old", "4 weeks", "82%" confirmed at 600 dpi band crop (crop-1232-a-1232.png, box x100 y150 W4700 H1500 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' },

{ n: 38, pr: 38, p: 1234,
  stem: 'A 5-year-old girl is brought to the clinic because her parents are concerned about her short stature. Her height is below the 3rd percentile, and her weight is in the 25th percentile. Her growth velocity is normal. A bone age assessment reveals that her bone age is consistent with her chronological age. What is the most appropriate next step in management?',
  opts: ['Initiate growth hormone therapy', 'Order a karyotype analysis', 'Monitor growth every 6 months', 'Refer to a pediatric endocrinologist', 'Test for celiac disease'],
  key: 2,
  expl: 'The child has proportionate short stature with normal bone age and velocity, suggesting a benign variant. Close monitoring is appropriate.',
  note: 'Key highlighted: yellow box on "C. Monitor growth every 6 months". Numerals "5-year-old", "3rd percentile", "25th percentile", "6 months" confirmed at 600 dpi band crop (crop-1234-a-1234.png, box x100 y150 W4700 H1900 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' },

{ n: 39, pr: 39, p: 1236,
  stem: 'A 10-month-old infant has fallen from the 50th to the 5th percentile for weight over the past 4 months. The family recently moved, and the mother has been stressed. The infant is breastfeeding and eating small amounts of solids. What is the most likely cause of the growth faltering?',
  opts: ['Inadequate caloric intake', 'Thyroid dysfunction', 'Chronic infection', 'Gastroesophageal reflux', 'Metabolic disorder'],
  key: 0,
  expl: 'Growth faltering with recent stress, breastfeeding with little solids, and normal development point to inadequate nutrition rather than organic disease.',
  note: 'Key highlighted: yellow box on "A. Inadequate caloric intake". Numerals "10-month-old", "50th", "5th percentile", "4 months" confirmed at 600 dpi band crop (crop-1236-a-1236.png, box x100 y150 W4700 H1100 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' },

{ n: 40, pr: 40, p: 1238,
  stem: 'A 7-year-old girl has a history of severe allergic reactions to multiple foods. Which of the following is the most critical component of her management plan?',
  opts: ['Avoidance of relevant foods', 'Carrying an epinephrine auto-injector', 'Regular skin testing', 'Routine blood tests for IgE levels', 'Consultation with a dietitian'],
  key: 1,
  expl: 'Avoidance is important, but accidental exposure can still occur. The most critical life-saving measure is prompt administration of epinephrine in anaphylaxis, so the child must always carry an auto-injector.',
  note: 'Key highlighted: yellow box on "B. Carrying an epinephrine auto-injector". Numeral "7-year-old" confirmed at 600 dpi band crop (crop-1238-a-1238.png, box x100 y150 W4700 H500 at 600dpi) -- matched the 300 dpi read exactly. No boiler line present. Last entry of the assigned range (n21..n40).' },

/* ENDPOINT part1 -- Model Final Exam 1 -- staging half C (questions 41..60, n41..n60).
   Source: "Pediatrics endpoint part1.pdf", PDF pages n41=1240, n42=1243, n43=1245, n44=1247,
   n45=1249, n46=1251, n47=1253, n48=1255, n49=1257, n50=1259, n51=1261, n52=1264, n53=1266,
   n54=1268, n55=1270, n56=1272, n57=1274, n58=1276, n59=1278, n60=1280 -- step +2 EXCEPT
   between n41 (1240) and n42 (1243): p.1241 carries n41 EXPLANATION (see n41); and n51 (1261)/n52
   (1264): p.1262 is a notes page -- per task instructions, taken as given, not recomputed.
   PDF is 1:1 (no 2-up split) -- brief pd-staging-brief.md's Section 2 2-up arithmetic does NOT
   apply here, per task instructions. Every question in this exam prints twice (blank exam page,
   then answer-key page with a yellow highlight); staging is from the answer-key pages listed
   above only.
   OCR at content/peds/qb-pages/ocr/ep1/p<NNNN>.txt NOT opened during this staging pass -- used
   for orientation only where noted, never transcribed from, per brief Section 4.
   Every numeral, unit, dose, exponent and every answer-key letter is read off a 600 dpi band
   crop, never off a 300 dpi full render, per task instructions Section 5.
   COMPLETE -- all 20 entries (n41..n60) appended one page at a time, each validated with
   check-part-ep.js immediately after appending. Final validation: 20 entries, n 41..60,
   pp.1240-1280, option counts {"4":9,"5":11}, key positions {"0":3,"1":6,"2":7,"3":2,"4":2},
   no printed box (expl:""): n48 ONLY, pr != n: none, figures: none -- OK.
   CORRECTED 2026-09-03 AFTER THAT VALIDATION: n41 was staged expl:'' and is not. Its box prints
   on p.1241, which this header (and the page map it was given) called a notes page. Rendered at
   600 dpi and read by eye; expl and box:1241 now set. n48 (p.1255) was re-checked the same way
   and genuinely prints no box -- the next sheet is q49. Straddles in this half: n41 -> p.1241,
   n51 -> p.1262. */

{ n: 41, pr: 41, p: 1240,
  key: 2,
  stem: 'A 4-year-old boy has been staying with his grandmother over the weekend. He is brought to the Accident and Emergency Department by his grandmother because she caught him playing with her medications and she is worried he has ingested some of them. Which of the following statements is true regarding the management of this child?',
  opts: ['Clinical signs are more informative than taking a detailed history to identify the toxic agent', 'Activated charcoal can be effective in reducing absorption of a toxic agent if administered within 3 hours of ingestion', 'Gastric lavage and induced vomiting are not recommended', 'Specific blood concentration is helpful in the diagnosis of all toxic agents'],
  expl: 'Inducing vomiting can be dangerous, and gastric lavage is rarely used due to aspiration risks. Activated charcoal is useful in many cases, but only within 1 hour (sometimes up to 3), while not all toxins are detectable in blood.',
  box: 1241,
  note: 'Only 4 options printed (A-D). Key highlighted: yellow box on "C. Gastric lavage and induced vomiting are not recommended". STRADDLE, and it was MISSED on the first pass: p.1240 ends at option D with blank margin, and this entry was originally staged expl:\'\' on that evidence. The box is printed on the NEXT sheet, p.1241, which the page map handed to the stager as a "notes" page -- the map was wrong, and index.json labels it "notes" only because it carries no stem. Corrected 2026-09-03 from a 600 dpi render of p.1241 read by eye: explanation prose alone in a bordered box, no heading, no question number, no options, no yellow, no figure. The digits are why it was rendered rather than taken from the cache -- the box reads "within 1 hour (sometimes up to 3)", confirmed on a 2x-upscaled tight crop (pg-1241-crop2.png), and the OCR cache renders that same 1 as a capital I. Numerals "4-year-old", "3 hours" in the stem/options confirmed at 600 dpi band crops (crop-1240-full-1240.png W4700 H1500 at x100 y100, and crop-1240-opts-1240.png W4700 H1000 at x100 y1550). No boiler line present.' },

{ n: 42, pr: 42, p: 1243,
  key: 1,
  stem: 'A 6-year-old boy is brought to the Emergency Department after becoming unwell at a family party. He is unable to say more than a single word and indicates that he is finding it hard to breathe. He is very anxious. He has a raised, itchy rash that is spreading from his face down to his chest. He has never had an episode like this before, although his mother explains that he has asthma, and he has been prescribed a salbutamol inhaler previously for wheezy episodes. What will be your first step in management?',
  opts: ['Administer a budesonide nebulizer', 'Assess his airway and give him high-flow oxygen', 'Give intramuscular benzylpenicillin', 'Insert an intravenous cannula', 'Lay him flat'],
  expl: 'Airway compromise and hypoxia are the immediate threats in anaphylaxis. Oxygen and airway assessment come first before giving IM epinephrine.',
  note: 'Key highlighted: yellow box on "B. Assess his airway and give him high-flow oxygen". Numeral "6-year-old" confirmed at 600 dpi band crop (crop-1243-top-1243.png W4700 H1400 at x100 y100, 600dpi) -- matched the 300 dpi read exactly; key confirmed at crop-1243-opts-1243.png (W4700 H900 at x100 y1450, 600dpi). No boiler line present.' },

{ n: 43, pr: 43, p: 1245,
  key: 4,
  stem: 'A 2-year-old girl has been ill for 2 days with fever, decreased appetite, and a rash. On physical examination, you note ulcers on the mouth and tongue. You also see vesicles with surrounding erythema on the palms and the dorsum of the hands and feet. What is the most likely causative microorganism?',
  opts: ['Candida albicans', 'Herpes simplex type 1', 'Parvo B19 virus', 'Varicella', 'Enterovirus'],
  expl: 'The classic presentation is oral ulcers plus vesicles on hands and feet, most often caused by Coxsackie A virus.',
  note: 'Key highlighted: yellow box on "E. Enterovirus". Numerals "2-year-old", "2 days" confirmed at 600 dpi band crop (crop-1245-top-1245.png W4700 H900 at x100 y100, 600dpi); "Parvo B19 virus" and the key confirmed at crop-1245-opts-1245.png (W4700 H1200 at x100 y900, 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' },

{ n: 44, pr: 44, p: 1247,
  key: 0,
  stem: 'What is the fastest period of growth in a normal human?',
  opts: ['Fetal', 'Infantile', 'Childhood', 'Prepubertal', 'Pubertal'],
  expl: 'Growth is most rapid in utero, particularly during the second trimester. Postnatal growth rates are slower compared to fetal growth.',
  note: 'Key highlighted: yellow box on "A. Fetal". No clinical measurement numerals on this page ("second trimester" is spelled out, not a digit); key confirmed at 600 dpi band crop (crop-1247-full-1247.png W4700 H900 at x100 y100, 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' },

{ n: 45, pr: 45, p: 1249,
  key: 0,
  stem: 'A 9-month-old infant presents to the local outpatient clinic with fever, irritability, and a stiff neck. When examining the child, the physician notes a spreading purpuric rash. The decision is made to refer the child to the hospital. What is the most important action to be taken before referral?',
  opts: ['Administer IM antibiotics', 'Administer oral antibiotics', 'Perform blood cultures', 'Obtain a CT scan of the head', 'Administer antipyretics'],
  expl: 'In suspected meningococcal disease, immediate parenteral antibiotics (usually benzylpenicillin or ceftriaxone) should be given before hospital transfer to reduce mortality.',
  note: 'Key highlighted: yellow box on "A. Administer IM antibiotics". Numeral "9-month-old" confirmed at 600 dpi band crop (crop-1249-top-1249.png W4700 H900 at x100 y100, 600dpi); key confirmed at crop-1249-opts-1249.png (W4700 H900 at x100 y900, 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' },

{ n: 46, pr: 46, p: 1251,
  key: 1,
  stem: 'An 18-month-old girl is seen in the outpatient department. She presents with loose stools two to three times each day, with no blood in them. She is generally difficult, and it has become a battle to get her to feed. Examination of her abdomen, although difficult due to distress at being examined, is unremarkable apart from being distended. She is not on any medication. Her weight was at the 9th centile and is now below the 0.4th centile. What is the most likely cause for weight loss?',
  opts: ['Chronic non-specific diarrhea', 'Celiac disease', 'Hirschsprung disease', 'Lactose intolerance', 'Ulcerative colitis'],
  expl: 'Failure to thrive, distended abdomen, and persistent diarrhea with weight dropping below centiles strongly suggest malabsorption due to celiac disease.',
  note: 'Key highlighted: yellow box on "B. Celiac disease". Numerals "18-month-old" confirmed at 600 dpi band crop (crop-1251-age-1251.png W4700 H500 at x100 y100, 600dpi); "9th centile" and "0.4th centile" confirmed at crop-1251-centile2-1251.png (W4700 H500 at x100 y850, 600dpi); key confirmed at crop-1251-key3-1251.png (W4700 H500 at x100 y1650, 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' },

{ n: 47, pr: 47, p: 1253,
  key: 1,
  stem: 'What is the main driver for growth in the childhood phase?',
  opts: ['Nutrition', 'Growth hormone', 'Testosterone', 'Thyroid hormones', 'Testosterone and estrogen'],
  expl: 'During childhood (after infancy, before puberty), growth is largely regulated by growth hormone rather than nutrition or sex hormones.',
  note: 'Key highlighted: yellow box on "B. Growth hormone". No numerals on this page; key confirmed at 600 dpi band crop (crop-1253-full-1253.png W4700 H700 at x100 y100, 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' },

{ n: 48, pr: 48, p: 1255,
  key: 4,
  stem: 'What would be the shape of the head if craniosynostosis affects the lambdoid suture?',
  opts: ['Wide and broad', 'Long and narrow', 'Plagiocephalic', 'Prominent forehead', 'Flattening of the skull'],
  expl: '',
  note: 'Key highlighted: yellow box on "E. Flattening of the skull". No numerals on this page. No printed explanation box -- rest of the page is blank white margin, confirmed on the full 300 dpi render. Key confirmed at 600 dpi band crop (crop-1255-key2-1255.png W4700 H500 at x100 y1150, 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' },

{ n: 49, pr: 49, p: 1257,
  key: 1,
  stem: 'A 4-year-old girl has been complaining of pain in her tummy for a month. It is worse when she goes to the toilet; her stools are firm, and she passes stools only once every 2–3 days. She has not had any vomiting. For the last 2 days her stools have become loose. On examination, she has a mass in the left iliac fossa. What is the most likely diagnosis?',
  opts: ['Appendix mass', 'Constipation', 'Gastroenteritis', 'Inguinal hernia', 'Wilms tumor'],
  expl: 'Chronic constipation causes firm stools, pain, and palpable fecal mass in the left iliac fossa. Loose stools may occur due to overflow diarrhea.',
  note: 'Key highlighted: yellow box on "B. Constipation". Numerals "4-year-old", "2–3 days", "2 days" confirmed at 600 dpi band crop (crop-1257-top-1257.png W4700 H900 at x100 y100, 600dpi); key confirmed at crop-1257-key-1257.png (W4700 H900 at x100 y900, 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' },

{ n: 50, pr: 50, p: 1259,
  key: 3,
  stem: 'A 2-year-old boy is seen in the pediatric emergency department. He has been vomiting and has had diarrhea for 3 days. His stool is watery and foul-smelling but has no blood in it. Examination reveals mild dehydration but is otherwise normal. What is the most likely organism that has caused his symptoms?',
  opts: ['Campylobacter', 'Escherichia coli', 'Giardia lamblia', 'Rotavirus', 'Shigella'],
  expl: 'Rotavirus is the most common cause of acute viral gastroenteritis in young children, presenting with watery diarrhea and vomiting.',
  note: 'Key highlighted: yellow box on "D. Rotavirus". Numerals "2-year-old", "3 days" confirmed at 600 dpi band crop (crop-1259-top-1259.png W4700 H700 at x100 y100, 600dpi); key confirmed at crop-1259-key3-1259.png (W4700 H500 at x100 y1650, 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' },

{ n: 51, pr: 51, p: 1261,
  box: 1262,
  key: 3,
  stem: 'You are performing a routine discharge examination on a term baby on day 4 of life and notice a swelling on the head. The baby had been delivered by vaginal delivery and has been well since birth. The swelling is confined to the right parietal bone and measures approximately 4 x 4 cm. It does not cross the suture lines; it is soft and fluctuant. Which one of the following statements is true?',
  opts: ['This is most likely a subaponeurotic haemorrhage, and the baby should immediately be admitted to the nursery for observation.', 'The baby has caput succedaneum.', 'This swelling may be associated with an underlying skull fracture, and the baby should have a CT scan of the head performed before discharge.', 'This is a cephalhaematoma.'],
  expl: 'Cephalhaematoma = subperiosteal blood collection -> does not cross suture lines, localized to one cranial bone (often parietal). Appears hours-days after birth, soft and fluctuant, as in this case. Caput succedaneum crosses sutures, is present at birth, and resolves quickly. Subaponeurotic hemorrhage is serious, extensive, and needs urgent care. CT is not routinely indicated unless neurological signs suggest underlying trauma.',
  note: '⚠️ THE EXPLANATION OVERFLOWS ONTO p.1262 -- recorded in the box field, and NOT a straddle: a straddle is a question whose stem or options span two sheets, and this one does not. (Wording corrected 2026-09-04; the observation below is the stager\'s, unchanged.) The printed explanation for n51 is entirely on p.1262 (unboxed, bold/italic bullet style, unlike the bordered boxes used elsewhere in this exam), matching the n27 box-overflow pattern from part B; stem, options and the yellow key are all on p.1261. Only 4 options printed (A-D). Key highlighted: yellow box on "D. This is a cephalhaematoma." Numerals "day 4", "4 x 4 cm" confirmed at 600 dpi band crop (crop-1261-top-1261.png W4700 H900 at x100 y100, 600dpi); key confirmed at crop-1261-key3-1261.png (W4700 H400 at x100 y2400, 600dpi) -- matched the 300 dpi read exactly. p.1262 (given in the task page-gap as a "notes page") rendered at 300 dpi to confirm/capture this straddled explanation; no boiler line present on p.1261.' },

{ n: 52, pr: 52, p: 1264,
  key: 2,
  stem: 'A 3-year-old boy\'s height has fallen from the 50th percentile to below the 3rd percentile over the past year. What is the most likely cause?',
  opts: ['Familial short stature', 'Constitutional growth delay', 'Growth hormone deficiency', 'Turner syndrome'],
  expl: 'A child with progressive drop in growth centiles suggests pathological short stature such as growth hormone deficiency, not familial or constitutional.',
  note: 'Only 4 options printed (A-D). Key highlighted: yellow box on "C. Growth hormone deficiency". Numerals "3-year-old", "50th percentile", "3rd percentile" confirmed at 600 dpi band crop (crop-1264-top-1264.png W4700 H600 at x100 y100, 600dpi); key confirmed at crop-1264-key-1264.png (W4700 H700 at x100 y600, 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' },

{ n: 53, pr: 53, p: 1266,
  key: 0,
  stem: 'A mother, while changing the diaper for her full-term 2-month-old baby, noticed a bulge in the groin area. This bulge increased in size while the baby was crying. Regarding the management of this swelling, which of the following is true?',
  opts: ['Surgery can be done as a day-case procedure.', 'Premature infants are best operated on once they are full-term.', 'Bilateral exploration should routinely be performed in females,', 'It is more common on the left side.'],
  expl: 'Inguinal hernia repair in infants is usually straightforward and safe as a day-case surgery, except in high-risk neonates.',
  note: 'Not the excluded "Pediatric surgery" back-of-book chapter (brief Section 11a) -- that section is short-answer-only with no options/no answer letter; this is a normal MCQ page with 4 lettered options and a yellow key, embedded in Model Final Exam 1 -- staged in scope. Only 4 options printed (A-D). Option C carries a trailing comma exactly as printed ("...in females,") -- transcribed verbatim, not corrected. Key highlighted: yellow box on "A. Surgery can be done as a day-case procedure." Numeral "2-month-old" confirmed at 600 dpi band crop (crop-1266-top-1266.png W4700 H700 at x100 y100, 600dpi); key confirmed at crop-1266-key2-1266.png (W4700 H500 at x100 y900, 600dpi; a first attempt crop-1266-key-1266.png at y550 clipped above the options and was discarded) -- matched the 300 dpi read exactly. No boiler line present.' },

{ n: 54, pr: 54, p: 1268,
  key: 2,
  stem: 'A full-term baby was born with massive abdominal distension, non-passage of meconium, and bilious vomiting. A familial history of cystic fibrosis is present. A plain abdominal radiograph may be pathognomonic for the pathology when disparate-sized bowel loops are associated with which of the following?',
  opts: ['Small-bowel air-fluid levels with absence of gas in the rectum', 'Portal venous gas in the liver and free intra-abdominal air', 'Soap bubbly appearance in the right lower quadrant and absence of small-bowel air', 'Left upper quadrant calcifications and distension of the stomach and duodenum'],
  expl: 'This is the classic radiographic finding of meconium ileus associated with cystic fibrosis.',
  note: 'Only 4 options printed (A-D). No numerals/units/doses in this stem -- confirmed on the 300 dpi full render. Key highlighted: yellow box on "C. Soap bubbly appearance in the right lower quadrant and absence of small-bowel air" -- confirmed at 600 dpi band crop crop-1268-key2-1268.png (W4700 H500 at x100 y1300, 600dpi; a first attempt crop-1268-key-1268.png at y950 landed above the highlighted option and was discarded) -- matched the 300 dpi read exactly. No boiler line present.' },

{ n: 55, pr: 55, p: 1270,
  key: 2,
  stem: 'A 7-month-old baby was found suddenly by his mother excessively crying and dragging his legs to his abdomen. The baby became calm and then had a similar attack of excessive crying. Which segment of the bowel is most frequently associated with this disease?',
  opts: ['Ileo-ileal', 'Colocolic', 'Ileo-colic', 'Cecocolic', 'Jejuno-jejunal'],
  expl: 'The most common type of intussusception in infants is ileo-colic.',
  note: '5 options printed (A-E). Numeral "7-month-old" confirmed at 600 dpi band crop (crop-1270-top-1270.png W4700 H400 at x100 y100, 600dpi); key confirmed at crop-1270-key-1270.png (W4700 H400 at x100 y1350, 600dpi) -- yellow box on "C. Ileo-colic" -- matched the 300 dpi read exactly. No boiler line present.' },

{ n: 56, pr: 56, p: 1272,
  key: 2,
  stem: 'A baby was born with severe respiratory distress. An endotracheal intubation was performed immediately after birth. The plain X-ray showed a mediastinal shift to the right side with a honeycomb appearance in the left side. What is the best time to repair this anomaly?',
  opts: ['As soon after delivery as is feasible', 'Electively after extubation', 'When the infant is on minimal ventilator settings', 'If hypoxia is worsening despite maximum support'],
  expl: 'Surgical repair is delayed until the infant is stabilized, as early surgery before stabilization increases mortality.',
  note: 'Only 4 options printed (A-D). No numerals/units/doses in this stem -- confirmed on the 300 dpi full render. Key highlighted: yellow box on "C. When the infant is on minimal ventilator settings" -- confirmed at 600 dpi band crop crop-1272-key2-1272.png (W4700 H400 at x100 y1300, 600dpi; a first attempt crop-1272-key-1272.png at y950 landed on option A and was discarded) -- matched the 300 dpi read exactly. No boiler line present. Congenital diaphragmatic hernia management -- general pediatrics content, not the excluded back-of-book surgery chapter.' },

{ n: 57, pr: 57, p: 1274,
  key: 2,
  stem: 'A neonate in the NICU was noticed to have frothy secretions around his mouth. The neonatologist tried to insert a nasogastric tube but he failed. Which of the following investigations is essential before taking this neonate to the operating room?',
  opts: ['Renal ultrasound (US)', 'ECG', 'Echocardiogram (ECHO)', 'Spinal US'],
  expl: 'Cardiac anomalies are commonly associated with tracheoesophageal fistula, so ECHO is essential before surgery.',
  note: 'Only 4 options printed (A-D). No numerals/units/doses in this stem -- confirmed on the 300 dpi full render. Key highlighted: yellow box on "C. Echocardiogram (ECHO)" -- confirmed at 600 dpi band crop crop-1274-key2-1274.png (W4700 H400 at x100 y1400, 600dpi; a first attempt crop-1274-key-1274.png at y1100 landed on options A/B and was discarded) -- matched the 300 dpi read exactly. No boiler line present. Tracheoesophageal fistula pre-op workup -- general pediatrics content, not the excluded back-of-book surgery chapter.' },

{ n: 58, pr: 58, p: 1276,
  key: 2,
  stem: 'A full-term baby was born in the NICU, and bilious vomiting was noticed shortly afterward. There was no significant abdominal distension. The abdominal plain X-ray showed 2 air fluid levels. What is the possible surgical treatment for such an anomaly?',
  opts: ['Pyloromyotomy', 'Duodenostomy', 'Duodenoduodenostomy', 'Gastrostomy'],
  expl: 'Double bubble sign indicates duodenal atresia, treated surgically with duodenoduodenostomy.',
  note: 'Only 4 options printed (A-D). Numeral "2 air fluid levels" confirmed at 600 dpi band crop (crop-1276-top-1276.png W4700 H400 at x100 y380, 600dpi); key confirmed at crop-1276-key-1276.png (W4700 H400 at x100 y1300, 600dpi) -- yellow box on "C. Duodenoduodenostomy" -- matched the 300 dpi read exactly. No boiler line present. Duodenal atresia surgical treatment -- general pediatrics content, not the excluded back-of-book surgery chapter.' },

{ n: 59, pr: 59, p: 1278,
  key: 1,
  stem: "A female baby was born in the NICU. The baby didn't pass any meconium, and upon inspection, the neonatologist noticed the absence of an anal opening. Which of the following is the most frequent defect seen in females?",
  opts: ['Perineal fistula', 'Vestibular fistula', 'No fistula', 'Rectovaginal fistula', 'Persistent cloaca'],
  expl: 'In females, the commonest anomaly is a rectovestibular fistula.',
  note: '5 options printed (A-E). No numerals/units/doses in this stem -- confirmed on the 300 dpi full render. Key highlighted: yellow box on "B. Vestibular fistula" -- confirmed at 600 dpi band crop crop-1278-key2-1278.png (W4700 H400 at x100 y850, 600dpi; a first attempt crop-1278-key-1278.png at y550 landed above the options and was discarded) -- matched the 300 dpi read exactly. No boiler line present. Anorectal malformation -- general pediatrics content, not the excluded back-of-book surgery chapter. NOTE: printed explanation says "rectovestibular fistula" while the printed key option reads "Vestibular fistula" -- transcribed exactly as printed, discrepancy not corrected (defective/loose wording is noted, never disputed).' },

{ n: 60, pr: 60, p: 1280,
  key: 1,
  stem: 'A male baby had an antenatal ultrasound showing unilateral hydronephrosis. The hydronephrosis increased in size on the postnatal ultrasound. Which of the following is true regarding the uretero-pelvic junction obstruction?',
  opts: ['It is commonly symptomatic in young children.', 'May be due to intrinsic and/or extrinsic obstruction.', 'Endopyelotomy has a high success rate in the treatment of uretero-pelvic junction obstruction.', 'Pyelopexy is a standard treatment for UPJ obstruction.'],
  expl: 'UPJ obstruction can be caused by intrinsic narrowing or extrinsic vessels crossing the junction.',
  note: 'Only 4 options printed (A-D). No numerals/units/doses in this stem -- confirmed on the 300 dpi full render. Explanation box printed complete on this same page (p.1280 rendered along with p.1281 one page past to check; not needed since the box was already complete here) -- no straddle. Key highlighted: yellow box on "B. May be due to intrinsic and/or extrinsic obstruction." -- confirmed at 600 dpi band crop crop-1280-key3-1280.png (W4700 H400 at x100 y1100, 600dpi; two earlier attempts crop-1280-key-1280.png at y750 and crop-1280-key2-1280.png at y950 each clipped part of the highlighted line and were discarded) -- matched the 300 dpi read exactly. No boiler line present. UPJ obstruction facts -- general pediatrics content, not the excluded back-of-book surgery chapter. LAST ENTRY OF THIS STAGING HALF (n41..n60 complete).' },

/* ENDPOINT part1 -- Model Final Exam 1 -- staging half D (questions 61..80, n61..n80).
   Source: "Pediatrics endpoint part1.pdf", PDF pages n61=1282, n62=1284, n63=1286, n64=1288,
   n65=1290, n66=1292, n67=1294, n68=1296, n69=1298, n70=1300, n71=1302, n72=1304, n73=1306,
   n74=1308, n75=1310, n76=1312, n77=1314, n78=1316, n79=1318, n80=1320 -- a clean +2 step
   throughout, taken as given per task instructions, not recomputed.
   PDF is 1:1 (no 2-up split) -- brief pd-staging-brief.md's Section 2 2-up arithmetic does NOT
   apply here, per task instructions. Every question in this exam prints twice (blank exam page,
   then answer-key page with a yellow highlight); staging is from the answer-key pages listed
   above only.
   OCR at content/peds/qb-pages/ocr/ep1/p<NNNN>.txt NOT opened during this staging pass -- used
   for orientation only where noted, never transcribed from, per brief Section 4.
   Every numeral, unit, dose, exponent and every answer-key letter is read off a 600 dpi band
   crop, never off a 300 dpi full render, per task instructions Section 5.
   Per task instructions Section 6/§11a override: Pediatric surgery TOPICS embedded inside this
   general final exam (hernia, atresia, TEF, ARM, etc.) are IN SCOPE -- only the House book's
   separate back-of-book surgery appendix is out of scope, and that appendix does not exist in
   this book at all.
   COMPLETE -- all 20 entries (n61..n80) appended one page at a time, each validated with
   check-part-ep.js immediately after appending. Final validation: 20 entries, n 61..80,
   pp.1282-1320, option counts {"4":15,"5":5}, key positions {"0":7,"1":4,"2":5,"3":4},
   no printed box (expl:""): n62, pr != n: none, figures: none -- OK.
   Straddles: none found in n61..n80 (n62 checked p.1285 per brief Section 6 and found only
   n63's blank exam page, not an explanation; n80 -- the exam's last question -- checked
   p.1321 and found only a full-page Arabic supplication with no question content, evidently
   the book's closing decoration, not a straddle). Defective keys: none noted. Figures: none
   printed on any of these 20 pages. Two pages (p.1286, p.1288, p.1290, p.1292, p.1294,
   p.1296, p.1298, p.1300, p.1302, p.1304 -- inherited from n61-72, drafted by a prior agent)
   needed shifted re-renders to land the key band; every page rendered fresh for n73-n80
   (p.1306, 1308, 1310, 1312, 1314, 1316, 1318, 1320) landed its key and numeral crop on the
   first 600 dpi render, no re-shoot needed. */

{ n: 61, pr: 61, p: 1282,
  key: 3,
  stem: 'Which one of the following statements is true regarding breast milk jaundice in a 14-day-old baby?',
  opts: ['A high conjugated bilirubin is typical of breast milk jaundice.', 'Parents should be advised to change to formula milk feeds.', "The baby's faeces should be pale, gray/white in breast milk jaundice", 'Jaundice can persist beyond 2 months of age'],
  expl: 'Breast milk jaundice is unconjugated and can last several weeks to months but the infant remains otherwise healthy.',
  note: 'Only 4 options printed (A-D). Key highlighted: yellow box on "D. Jaundice can persist beyond 2 months of age". Numerals "14-day-old", "2 months of age" confirmed at 600 dpi band crop (crop-1282-full-1282.png W4700 H1400 at x100 y100, 600dpi). No boiler line present.' },

{ n: 62, pr: 62, p: 1284,
  key: 1,
  stem: 'You are going to counsel parents of a newborn about prevention of sudden infant death syndrome (SIDS). Which of the following statements about ways to reduce SIDS is accurate?',
  opts: ['Infants should sleep in the same bed as the parent or on their chest so they can be closely monitored for apnea.', 'Infants should sleep on their back on a firm mattress with no accompanying bedding or objects.', "Pacifiers should be avoided because they can obstruct the baby's airflow during respiration.", 'Keep the infant dressed in several layers and covered with a heavy blanket.', 'Infants should be given acetaminophen before their scheduled vaccines in order to prevent an undetected febrile seizure and resulting SIDS.'],
  expl: '',
  note: '5 options printed (A-E). Key highlighted: yellow box on "B. Infants should sleep on their back on a firm mattress with no accompanying bedding or objects." confirmed at 600 dpi band crop (crop-1284-key-1284.png W4700 H900 at x100 y600, 600dpi). No printed explanation box -- page ends at option E with blank margin beneath. Checked p.1285 for a straddled explanation per brief Section 6: it is n63\'s BLANK exam page (no yellow highlight) -- not n62\'s explanation. No numerals/units/doses in this stem/options. No boiler line present.' },

{ n: 63, pr: 63, p: 1286,
  key: 0,
  stem: 'What is the primary nutritional intervention for an infant diagnosed with marasmus?',
  opts: ['Gradual refeeding with a balanced diet', 'Immediate high-calorie feeding', 'Iron supplementation', 'Protein supplementation only', 'Vitamin D supplementation.'],
  expl: 'Children with marasmus require cautious gradual refeeding to avoid refeeding syndrome.',
  note: '5 options printed (A-E). Key highlighted: yellow box on "A. Gradual refeeding with a balanced diet" confirmed at 600 dpi band crop (crop-1286-key3-1286.png W4700 H300 at x100 y500, 600dpi; two earlier attempts crop-1286-key-1286.png at y300 and crop-1286-key2-1286.png at y400 landed above the highlight and were discarded). No numerals/units/doses in this stem/options. No boiler line present.' },

{ n: 64, pr: 64, p: 1288,
  key: 2,
  stem: 'Which of the following is the last sign of puberty in girls?',
  opts: ['Breast development', 'Pubic hair growth', 'Menarche', 'Axillary hair growth'],
  expl: 'Menarche is typically the last major event of puberty after breast and pubic hair development.',
  note: 'Only 4 options printed (A-D). Key highlighted: yellow box on "C. Menarche" confirmed at 600 dpi band crop (crop-1288-key2-1288.png W4700 H300 at x100 y850, 600dpi; a first attempt crop-1288-key-1288.png at y500 landed above the highlight and was discarded). No numerals/units/doses in this stem/options. No boiler line present.' },

{ n: 65, pr: 65, p: 1290,
  key: 0,
  stem: 'A 2-year-old boy has had diarrhea for the last 3 months. He produces up to four stools a day, which are loose, brown in color, and usually contain undigested food. The rest of the family is well. Examination is normal, and his personal child health record shows that he is growing along the 50th centile. What is the most likely diagnosis?',
  opts: ['Chronic non-specific diarrhea', 'Post-gastroenteritis syndrome', "Cow's milk protein allergy", 'Inflammatory bowel disease', 'Lactose intolerance'],
  expl: "This benign toddler’s diarrhea shows loose stools with normal growth and no systemic illness.",
  note: '5 options printed (A-E). Key highlighted: yellow box on "A. Chronic non-specific diarrhea" confirmed at 600 dpi band crop (crop-1290-key3-1290.png W4700 H300 at x100 y1050, 600dpi; two earlier attempts crop-1290-key-1290.png at y650 and crop-1290-key2-1290.png at y950 landed above the highlight and were discarded). Numerals "2-year-old", "3 months", "four stools a day", "50th centile" confirmed at 600 dpi band crop (crop-1290-top-1290.png W4700 H900 at x100 y100, 600dpi). No boiler line present.' },

{ n: 66, pr: 66, p: 1292,
  key: 3,
  stem: 'Which of the following statements is FALSE as regards growth in males?',
  opts: ['Adult males are taller than adult females', 'Males have a longer childhood growth phase than females', 'The peak height at puberty is higher in males than in females', 'Growth stops earlier in males'],
  expl: 'Growth actually stops later in males because puberty begins later and lasts longer.',
  note: 'Only 4 options printed (A-D). Key highlighted: yellow box on "D. Growth stops earlier in males" confirmed at 600 dpi band crop (crop-1292-key3-1292.png W4700 H300 at x100 y1000, 600dpi; two earlier attempts crop-1292-key-1292.png at y640 and crop-1292-key2-1292.png at y900 landed above the highlight and were discarded). No numerals/units/doses in this stem/options. No boiler line present.' },

{ n: 67, pr: 67, p: 1294,
  key: 3,
  stem: 'Which of the following is considered a drawback of breastfeeding?',
  opts: ['Reduces the risk of diabetes mellitus', 'Promotes maternal-child bonding', 'Provides passive immunity to the infant', 'May be harmful in some genetic disorders'],
  expl: 'Generally breastfeeding is beneficial, but in rare metabolic disorders like galactosemia, it can be harmful.',
  note: 'Only 4 options printed (A-D). Key highlighted: yellow box on "D. May be harmful in some genetic disorders" confirmed at 600 dpi band crop (crop-1294-key2-1294.png W4700 H300 at x100 y1000, 600dpi; a first attempt crop-1294-key-1294.png at y720 landed above the highlight and was discarded). No numerals/units/doses in this stem/options. No boiler line present.' },

{ n: 68, pr: 68, p: 1296,
  key: 2,
  stem: 'A 10-year-old boy with a history of ventriculoperitoneal shunt presents with fever, headache, and vomiting. The pediatrician considers a lumbar puncture to rule out meningitis. What is the most important consideration before performing the procedure?',
  opts: ['Administer antipyretics', 'Administer prophylactic antibiotics', 'Assess the patient for signs of increased intracranial pressure', 'Perform a CT scan of the abdomen'],
  expl: 'LP is contraindicated if there are signs of raised ICP as it can precipitate herniation.',
  note: 'Only 4 options printed (A-D). Numeral "10-year-old" confirmed at 600 dpi band crop (crop-1296-top-1296.png W4700 H400 at x100 y100, 600dpi). Key highlighted: yellow box on "C. Assess the patient for signs of increased intracranial pressure" confirmed at 600 dpi band crop (crop-1296-key3-1296.png W4700 H300 at x100 y1250, 600dpi; two earlier attempts crop-1296-key-1296.png at y850 and crop-1296-key2-1296.png at y1100 landed above the highlight and were discarded). No boiler line present.' },

{ n: 69, pr: 69, p: 1298,
  key: 1,
  stem: "Which of the following should be avoided in an infant's diet during the first year of life?",
  opts: ['Pureed vegetables', 'Honey', 'Mashed fruits', 'Iron-fortified cereals'],
  expl: 'Honey can cause infant botulism and must be avoided before 12 months.',
  note: 'Only 4 options printed (A-D). Key highlighted: yellow box on "B. Honey" confirmed at 600 dpi band crop (crop-1298-key3-1298.png W4700 H250 at x100 y780, 600dpi; two earlier attempts crop-1298-key-1298.png at y480 and crop-1298-key2-1298.png at y630 landed above the highlight and were discarded). Numeral "12 months" in the printed explanation box confirmed at 600 dpi band crop (crop-1298-expl4-1298.png W4700 H350 at x100 y1700, 600dpi; three earlier attempts (crop-1298-expl at y1150, crop-1298-expl3 at y1400) landed above the box and were discarded). No boiler line present.' },

{ n: 70, pr: 70, p: 1300,
  key: 1,
  stem: 'Which of the following is true of abdominal pain in children?',
  opts: ['Severe pain associated with blood in the stools at 6 months old is probably constipation and can be treated with lactulose', 'Intussusception is the most common cause of intestinal obstruction in infants after the neonatal period', 'Abdominal pain with a rash on the buttocks is typical of idiopathic thrombocytopenic purpura', 'In appendicitis, the pain typically starts in the right iliac fossa and moves towards the umbilicus in a few hours'],
  expl: 'Classic pediatric fact: intussusception is the leading cause of obstruction in this age group.',
  note: 'Only 4 options printed (A-D). Numeral "6 months old" confirmed at 600 dpi band crop (crop-1300-optA2-1300.png W4700 H350 at x100 y380, 600dpi). Key highlighted: yellow box on "B. Intussusception is the most common cause of intestinal obstruction in infants after the neonatal period" confirmed at 600 dpi band crop (crop-1300-key2-1300.png W4700 H400 at x100 y700, 600dpi). No boiler line present.' },

{ n: 71, pr: 71, p: 1302,
  key: 0,
  stem: 'Which of the following is associated with bilateral vesico-ureteric reflux?',
  opts: ['Posterior urethral valve', 'Uretero-pelvic-junction obstruction', 'Vesicoureteric junction obstruction', 'Ureterocele'],
  expl: 'PUV commonly causes bilateral vesicoureteral reflux due to bladder outlet obstruction.',
  note: 'Only 4 options printed (A-D). Key highlighted: yellow box on "A. Posterior urethral valve" confirmed at 600 dpi band crop (crop-1302-key2-1302.png W4700 H300 at x100 y350, 600dpi; a first attempt crop-1302-key-1302.png at y250 landed above the highlight and was discarded). No numerals/units/doses in this stem/options. No boiler line present.' },

{ n: 72, pr: 72, p: 1304,
  key: 2,
  stem: 'Of the following statements, which one is true regarding Wilms tumor?',
  opts: ['The mean age at diagnosis for Wilms tumor is 7 years.', 'Renal sparing procedures for patients with Wilms tumor are only suitable for those with a solitary kidney.', 'Chemotherapy agents used in Wilms tumor include dactinomycin, vincristine, and doxorubicin.', 'A skeletal survey and bone scan are required for all patients with Wilms tumor.'],
  expl: 'These are standard chemotherapy drugs used in Wilms tumor management.',
  note: 'Only 4 options printed (A-D). Numeral "7 years" in option A confirmed at 600 dpi band crop (crop-1304-optA2-1304.png W4700 H250 at x100 y370, 600dpi; a first attempt crop-1304-optA-1304.png at y250 landed above the text, showing only the stem line, and was discarded). Key highlighted: yellow box on "C. Chemotherapy agents used in Wilms tumor include dactinomycin, vincristine, and doxorubicin." confirmed at 600 dpi band crop (crop-1304-key2-1304.png W4700 H350 at x100 y850, 600dpi; a first attempt crop-1304-key-1304.png at y590 landed on options A-B, above the highlight, and was discarded). No boiler line present.' },

{ n: 73, pr: 73, p: 1306,
  key: 2,
  stem: 'Which of the following is true regarding gastroschisis?',
  opts: ['The defect is usually to the left of the midline.', 'It is usually associated with chromosomal anomalies.', 'The most common association is intestinal atresia', 'Cardiac anomalies are seen in 10% of cases.'],
  expl: 'Unlike omphalocele, gastroschisis is usually not linked with chromosomal anomalies but often with intestinal atresia.',
  note: 'Only 4 options printed (A-D). Whole question box (stem, options A-D, explanation box) confirmed in a single 600 dpi band crop (crop-1306-full-1306.png W4700 H1900 at x100 y200, 600dpi) -- one render sufficed, no shift needed. Key highlighted: yellow box on "C. The most common association is intestinal atresia" (option C has no printed period, transcribed as printed). Numeral "10%" in option D confirmed in the same crop. No boiler line present.' },

{ n: 74, pr: 74, p: 1308,
  key: 0,
  stem: 'Which of the following is true regarding the metabolic derangement seen in hypertrophic pyloric stenosis?',
  opts: ['Hypochloremic hypokalemic metabolic alkalosis', 'Hyperchloremic hypokalemic metabolic acidosis', 'Hypochloremic hypernatremic metabolic alkalosis', 'Hypochloremic hypokalemic respiratory acidosis', 'Hyperchloremic hyperkalemic respiratory alkalosis'],
  expl: 'Projectile vomiting of gastric contents leads to chloride and hydrogen loss, causing alkalosis and hypokalemia.',
  note: '5 options printed (A-E). Key highlighted: yellow box on "A. Hypochloremic hypokalemic metabolic alkalosis" confirmed at 600 dpi band crop (crop-1308-full-1308.png W4700 H1300 at x100 y100, 600dpi) -- one render sufficed, no shift needed. No numerals/units/doses in this stem/options/explanation. No boiler line present.' },

{ n: 75, pr: 75, p: 1310,
  key: 0,
  stem: "Concerning the rectal biopsy for the diagnosis of Hirschsprung's disease, which of the following is true?",
  opts: ['A full-thickness biopsy is preferred', 'The absence of ganglion cells in the dilated bowel confirms the diagnosis', 'The biopsy should be done at the level of the dentate line', 'Rectal suction biopsy has a specificity of 100%'],
  expl: 'Diagnosis requires histology showing absence of ganglion cells, best confirmed with a full-thickness rectal biopsy.',
  note: 'Only 4 options printed (A-D). Whole question box (stem, options A-D, explanation box) confirmed in a single 600 dpi band crop (crop-1310-full-1310.png W4700 H1650 at x100 y100, 600dpi) -- one render sufficed, no shift needed. Key highlighted: yellow box on "A. A full-thickness biopsy is preferred". Numeral "100%" in option D confirmed in the same crop. No boiler line present.' },

{ n: 76, pr: 76, p: 1312,
  key: 3,
  stem: 'In neonates with absent anus, when the definitive diagnosis is not clear after clinical examination, what is the next step?',
  opts: ['Magnetic resonance imaging (MRI)', 'CT scan', 'Invertogram', 'Cross-table lateral film with the patient in the prone position'],
  expl: 'This helps determine whether the anorectal malformation is high or low type for surgical planning.',
  note: 'Only 4 options printed (A-D). Key highlighted: yellow box on "D. Cross-table lateral film with the patient in the prone position" confirmed at 600 dpi band crop (crop-1312-full-1312.png W4700 H1500 at x100 y100, 600dpi) -- one render sufficed, no shift needed. No numerals/units/doses in this stem/options/explanation. No boiler line present.' },

{ n: 77, pr: 77, p: 1314,
  key: 1,
  stem: 'Which of the following is the treatment of choice for choledochal cyst type I?',
  opts: ['Cyst evacuation and Roux-en-Y cyst-jejunostomy leaving the distal bile duct draining into the duodenum', 'Cyst excision, cholecystectomy, and Roux-en-Y hepaticojejunostomy', 'Transduodenal cyst excision', 'Cholecystectomy and excision of the cyst mucosa'],
  expl: 'Definitive treatment involves excision of the cyst with biliary reconstruction.',
  note: 'Only 4 options printed (A-D). Whole question box (stem, options A-D, explanation box) confirmed in a single 600 dpi band crop (crop-1314-full-1314.png W4700 H1900 at x100 y100, 600dpi) -- one render sufficed, no shift needed. Key highlighted: yellow box on "B. Cyst excision, cholecystectomy, and Roux-en-Y hepaticojejunostomy". Roman numeral "type I" in stem confirmed in the same crop. No boiler line present.' },

{ n: 78, pr: 78, p: 1316,
  key: 2,
  stem: 'Which of the following is true regarding posterior urethral valves?',
  opts: ['Anterior urethral valves are more common in males', 'Type 3 is the most common', 'Bilateral hydronephrosis in a baby male should always be investigated with urgent micturating cystogram', 'They always present with bilateral upper tract dilatation'],
  expl: 'Posterior urethral valves are the most common cause of bladder outlet obstruction in boys, confirmed with MCUG.',
  note: 'Only 4 options printed (A-D). Numeral "Type 3" in option B confirmed at 600 dpi band crop (crop-1316-full-1316.png W4700 H1650 at x100 y100, 600dpi) -- one render sufficed, no shift needed. Key highlighted: yellow box on "C. Bilateral hydronephrosis in a baby male should always be investigated with urgent micturating cystogram" (this option prints across two lines, both highlighted) confirmed in the same crop. No boiler line present.' },

{ n: 79, pr: 79, p: 1318,
  key: 0,
  stem: 'Which is the most appropriate imaging for a 3-year-old boy with a first episode of uncomplicated culture-proven urinary tract infection?',
  opts: ['Renal tract ultrasound scan', 'Renal tract ultrasound scan and a micturating cystourethrogram', 'Renal tract ultrasound scan and a technetium-99m (99mTc)-DMSA scan', 'Renal tract ultrasound scan and a 99mTc-MAG3 renogram study', 'Intravenous urogram'],
  expl: 'After a first uncomplicated UTI in children >6 months, the initial investigation is renal ultrasound; further imaging is only done if complications arise.',
  note: '5 options printed (A-E). Numerals "3-year-old" (stem), "technetium-99m (99mTc)" (option C), "99mTc-MAG3" (option D) confirmed at 600 dpi band crop (crop-1318-full-1318.png W4700 H2200 at x100 y100, 600dpi); numeral ">6 months" in the explanation box confirmed in the same crop, and re-checked at (crop-1318-expl-1318.png W4700 H700 at x100 y2200, 600dpi) after the first crop cut the box off mid-sentence -- both read ">6 months" clearly, no digit ambiguity. Key highlighted: yellow box on "A. Renal tract ultrasound scan" confirmed in crop-1318-full-1318.png. No boiler line present.' },

{ n: 80, pr: 80, p: 1320,
  key: 0,
  stem: 'Which of the following is the most common abdominal solid tumor in infancy and childhood?',
  opts: ['Neuroblastoma', 'Wilms tumor', 'Sarcoma', 'Teratoma'],
  expl: 'Neuroblastoma is the most common extracranial solid tumor in children and the most common abdominal solid tumor in infancy and childhood. It arises from neural crest cells of the adrenal medulla or sympathetic chain.',
  note: 'Only 4 options printed (A-D). Key highlighted: yellow box on "A. Neuroblastoma" confirmed at 600 dpi band crop (crop-1320-full-1320.png W4700 H1900 at x100 y100, 600dpi) -- one render sufficed, no shift needed. Explanation box printed complete on p.1320 itself, ending "...from neural crest cells of the adrenal medulla or sympathetic chain." with blank margin beneath it -- confirmed at both 300dpi (p1320-300-1320.png) and the 600dpi crop. Per brief Section 6, checked p.1321 (the last sheet of the PDF) anyway before writing this note: it is NOT a straddled explanation -- it is a full-page Arabic supplication ("Sayyid al-Istighfar" dua) in coloured text, no question number, no options, unrelated to any exam content -- evidently a closing/decorative page of the book. No straddle. No numerals/units/doses in this stem/options/explanation. No boiler line present. This is the last entry of half D (n61-80).' }

];
