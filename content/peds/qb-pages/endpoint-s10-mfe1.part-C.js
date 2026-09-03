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
  note: 'Only 4 options printed (A-D). Key highlighted: yellow box on "C. Gastric lavage and induced vomiting are not recommended". STRADDLE, and it was MISSED on the first pass: p.1240 ends at option D with blank margin, and this entry was originally staged expl:\'\' on that evidence. The box is printed on the NEXT sheet, p.1241, which the page map handed to the stager as a "notes" page -- the map was wrong, and index.json labels it "notes" only because it carries no stem. Corrected 2026-09-03 from a 600 dpi render of p.1241 read by eye: explanation prose alone in a bordered box, no heading, no question number, no options, no yellow, no figure. The digits are why it was rendered rather than taken from the cache -- the box reads "within 1 hour (sometimes up to 3)", confirmed on a 2x-upscaled tight crop (pg-1241-crop2.png), and the OCR cache renders that same 1 as a capital I. Numerals "4-year-old", "3 hours" in the stem/options confirmed at 600 dpi band crops (crop-1240-full-1240.png W4700 H1500 at x100 y100, and crop-1240-opts-1240.png W4700 H1000 at x100 y1550). No boiler line present.' }

{ n: 42, pr: 42, p: 1243,
  key: 1,
  stem: 'A 6-year-old boy is brought to the Emergency Department after becoming unwell at a family party. He is unable to say more than a single word and indicates that he is finding it hard to breathe. He is very anxious. He has a raised, itchy rash that is spreading from his face down to his chest. He has never had an episode like this before, although his mother explains that he has asthma, and he has been prescribed a salbutamol inhaler previously for wheezy episodes. What will be your first step in management?',
  opts: ['Administer a budesonide nebulizer', 'Assess his airway and give him high-flow oxygen', 'Give intramuscular benzylpenicillin', 'Insert an intravenous cannula', 'Lay him flat'],
  expl: 'Airway compromise and hypoxia are the immediate threats in anaphylaxis. Oxygen and airway assessment come first before giving IM epinephrine.',
  note: 'Key highlighted: yellow box on "B. Assess his airway and give him high-flow oxygen". Numeral "6-year-old" confirmed at 600 dpi band crop (crop-1243-top-1243.png W4700 H1400 at x100 y100, 600dpi) -- matched the 300 dpi read exactly; key confirmed at crop-1243-opts-1243.png (W4700 H900 at x100 y1450, 600dpi). No boiler line present.' }

{ n: 43, pr: 43, p: 1245,
  key: 4,
  stem: 'A 2-year-old girl has been ill for 2 days with fever, decreased appetite, and a rash. On physical examination, you note ulcers on the mouth and tongue. You also see vesicles with surrounding erythema on the palms and the dorsum of the hands and feet. What is the most likely causative microorganism?',
  opts: ['Candida albicans', 'Herpes simplex type 1', 'Parvo B19 virus', 'Varicella', 'Enterovirus'],
  expl: 'The classic presentation is oral ulcers plus vesicles on hands and feet, most often caused by Coxsackie A virus.',
  note: 'Key highlighted: yellow box on "E. Enterovirus". Numerals "2-year-old", "2 days" confirmed at 600 dpi band crop (crop-1245-top-1245.png W4700 H900 at x100 y100, 600dpi); "Parvo B19 virus" and the key confirmed at crop-1245-opts-1245.png (W4700 H1200 at x100 y900, 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' }

{ n: 44, pr: 44, p: 1247,
  key: 0,
  stem: 'What is the fastest period of growth in a normal human?',
  opts: ['Fetal', 'Infantile', 'Childhood', 'Prepubertal', 'Pubertal'],
  expl: 'Growth is most rapid in utero, particularly during the second trimester. Postnatal growth rates are slower compared to fetal growth.',
  note: 'Key highlighted: yellow box on "A. Fetal". No clinical measurement numerals on this page ("second trimester" is spelled out, not a digit); key confirmed at 600 dpi band crop (crop-1247-full-1247.png W4700 H900 at x100 y100, 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' }

{ n: 45, pr: 45, p: 1249,
  key: 0,
  stem: 'A 9-month-old infant presents to the local outpatient clinic with fever, irritability, and a stiff neck. When examining the child, the physician notes a spreading purpuric rash. The decision is made to refer the child to the hospital. What is the most important action to be taken before referral?',
  opts: ['Administer IM antibiotics', 'Administer oral antibiotics', 'Perform blood cultures', 'Obtain a CT scan of the head', 'Administer antipyretics'],
  expl: 'In suspected meningococcal disease, immediate parenteral antibiotics (usually benzylpenicillin or ceftriaxone) should be given before hospital transfer to reduce mortality.',
  note: 'Key highlighted: yellow box on "A. Administer IM antibiotics". Numeral "9-month-old" confirmed at 600 dpi band crop (crop-1249-top-1249.png W4700 H900 at x100 y100, 600dpi); key confirmed at crop-1249-opts-1249.png (W4700 H900 at x100 y900, 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' }

{ n: 46, pr: 46, p: 1251,
  key: 1,
  stem: 'An 18-month-old girl is seen in the outpatient department. She presents with loose stools two to three times each day, with no blood in them. She is generally difficult, and it has become a battle to get her to feed. Examination of her abdomen, although difficult due to distress at being examined, is unremarkable apart from being distended. She is not on any medication. Her weight was at the 9th centile and is now below the 0.4th centile. What is the most likely cause for weight loss?',
  opts: ['Chronic non-specific diarrhea', 'Celiac disease', 'Hirschsprung disease', 'Lactose intolerance', 'Ulcerative colitis'],
  expl: 'Failure to thrive, distended abdomen, and persistent diarrhea with weight dropping below centiles strongly suggest malabsorption due to celiac disease.',
  note: 'Key highlighted: yellow box on "B. Celiac disease". Numerals "18-month-old" confirmed at 600 dpi band crop (crop-1251-age-1251.png W4700 H500 at x100 y100, 600dpi); "9th centile" and "0.4th centile" confirmed at crop-1251-centile2-1251.png (W4700 H500 at x100 y850, 600dpi); key confirmed at crop-1251-key3-1251.png (W4700 H500 at x100 y1650, 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' }

{ n: 47, pr: 47, p: 1253,
  key: 1,
  stem: 'What is the main driver for growth in the childhood phase?',
  opts: ['Nutrition', 'Growth hormone', 'Testosterone', 'Thyroid hormones', 'Testosterone and estrogen'],
  expl: 'During childhood (after infancy, before puberty), growth is largely regulated by growth hormone rather than nutrition or sex hormones.',
  note: 'Key highlighted: yellow box on "B. Growth hormone". No numerals on this page; key confirmed at 600 dpi band crop (crop-1253-full-1253.png W4700 H700 at x100 y100, 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' }

{ n: 48, pr: 48, p: 1255,
  key: 4,
  stem: 'What would be the shape of the head if craniosynostosis affects the lambdoid suture?',
  opts: ['Wide and broad', 'Long and narrow', 'Plagiocephalic', 'Prominent forehead', 'Flattening of the skull'],
  expl: '',
  note: 'Key highlighted: yellow box on "E. Flattening of the skull". No numerals on this page. No printed explanation box -- rest of the page is blank white margin, confirmed on the full 300 dpi render. Key confirmed at 600 dpi band crop (crop-1255-key2-1255.png W4700 H500 at x100 y1150, 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' }

{ n: 49, pr: 49, p: 1257,
  key: 1,
  stem: 'A 4-year-old girl has been complaining of pain in her tummy for a month. It is worse when she goes to the toilet; her stools are firm, and she passes stools only once every 2–3 days. She has not had any vomiting. For the last 2 days her stools have become loose. On examination, she has a mass in the left iliac fossa. What is the most likely diagnosis?',
  opts: ['Appendix mass', 'Constipation', 'Gastroenteritis', 'Inguinal hernia', 'Wilms tumor'],
  expl: 'Chronic constipation causes firm stools, pain, and palpable fecal mass in the left iliac fossa. Loose stools may occur due to overflow diarrhea.',
  note: 'Key highlighted: yellow box on "B. Constipation". Numerals "4-year-old", "2–3 days", "2 days" confirmed at 600 dpi band crop (crop-1257-top-1257.png W4700 H900 at x100 y100, 600dpi); key confirmed at crop-1257-key-1257.png (W4700 H900 at x100 y900, 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' }

{ n: 50, pr: 50, p: 1259,
  key: 3,
  stem: 'A 2-year-old boy is seen in the pediatric emergency department. He has been vomiting and has had diarrhea for 3 days. His stool is watery and foul-smelling but has no blood in it. Examination reveals mild dehydration but is otherwise normal. What is the most likely organism that has caused his symptoms?',
  opts: ['Campylobacter', 'Escherichia coli', 'Giardia lamblia', 'Rotavirus', 'Shigella'],
  expl: 'Rotavirus is the most common cause of acute viral gastroenteritis in young children, presenting with watery diarrhea and vomiting.',
  note: 'Key highlighted: yellow box on "D. Rotavirus". Numerals "2-year-old", "3 days" confirmed at 600 dpi band crop (crop-1259-top-1259.png W4700 H700 at x100 y100, 600dpi); key confirmed at crop-1259-key3-1259.png (W4700 H500 at x100 y1650, 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' }

{ n: 51, pr: 51, p: 1261,
  box: 1262,
  key: 3,
  stem: 'You are performing a routine discharge examination on a term baby on day 4 of life and notice a swelling on the head. The baby had been delivered by vaginal delivery and has been well since birth. The swelling is confined to the right parietal bone and measures approximately 4 x 4 cm. It does not cross the suture lines; it is soft and fluctuant. Which one of the following statements is true?',
  opts: ['This is most likely a subaponeurotic haemorrhage, and the baby should immediately be admitted to the nursery for observation.', 'The baby has caput succedaneum.', 'This swelling may be associated with an underlying skull fracture, and the baby should have a CT scan of the head performed before discharge.', 'This is a cephalhaematoma.'],
  expl: 'Cephalhaematoma = subperiosteal blood collection -> does not cross suture lines, localized to one cranial bone (often parietal). Appears hours-days after birth, soft and fluctuant, as in this case. Caput succedaneum crosses sutures, is present at birth, and resolves quickly. Subaponeurotic hemorrhage is serious, extensive, and needs urgent care. CT is not routinely indicated unless neurological signs suggest underlying trauma.',
  note: '⚠️ STRADDLES THE PAGE BREAK p.1261 -> p.1262 -- the printed explanation for n51 is entirely on p.1262 (unboxed, bold/italic bullet style, unlike the bordered boxes used elsewhere in this exam), matching the n27 straddle pattern from part B; stem, options and the yellow key are all on p.1261. Only 4 options printed (A-D). Key highlighted: yellow box on "D. This is a cephalhaematoma." Numerals "day 4", "4 x 4 cm" confirmed at 600 dpi band crop (crop-1261-top-1261.png W4700 H900 at x100 y100, 600dpi); key confirmed at crop-1261-key3-1261.png (W4700 H400 at x100 y2400, 600dpi) -- matched the 300 dpi read exactly. p.1262 (given in the task page-gap as a "notes page") rendered at 300 dpi to confirm/capture this straddled explanation; no boiler line present on p.1261.' }

{ n: 52, pr: 52, p: 1264,
  key: 2,
  stem: 'A 3-year-old boy\'s height has fallen from the 50th percentile to below the 3rd percentile over the past year. What is the most likely cause?',
  opts: ['Familial short stature', 'Constitutional growth delay', 'Growth hormone deficiency', 'Turner syndrome'],
  expl: 'A child with progressive drop in growth centiles suggests pathological short stature such as growth hormone deficiency, not familial or constitutional.',
  note: 'Only 4 options printed (A-D). Key highlighted: yellow box on "C. Growth hormone deficiency". Numerals "3-year-old", "50th percentile", "3rd percentile" confirmed at 600 dpi band crop (crop-1264-top-1264.png W4700 H600 at x100 y100, 600dpi); key confirmed at crop-1264-key-1264.png (W4700 H700 at x100 y600, 600dpi) -- matched the 300 dpi read exactly. No boiler line present.' }

{ n: 53, pr: 53, p: 1266,
  key: 0,
  stem: 'A mother, while changing the diaper for her full-term 2-month-old baby, noticed a bulge in the groin area. This bulge increased in size while the baby was crying. Regarding the management of this swelling, which of the following is true?',
  opts: ['Surgery can be done as a day-case procedure.', 'Premature infants are best operated on once they are full-term.', 'Bilateral exploration should routinely be performed in females,', 'It is more common on the left side.'],
  expl: 'Inguinal hernia repair in infants is usually straightforward and safe as a day-case surgery, except in high-risk neonates.',
  note: 'Not the excluded "Pediatric surgery" back-of-book chapter (brief Section 11a) -- that section is short-answer-only with no options/no answer letter; this is a normal MCQ page with 4 lettered options and a yellow key, embedded in Model Final Exam 1 -- staged in scope. Only 4 options printed (A-D). Option C carries a trailing comma exactly as printed ("...in females,") -- transcribed verbatim, not corrected. Key highlighted: yellow box on "A. Surgery can be done as a day-case procedure." Numeral "2-month-old" confirmed at 600 dpi band crop (crop-1266-top-1266.png W4700 H700 at x100 y100, 600dpi); key confirmed at crop-1266-key2-1266.png (W4700 H500 at x100 y900, 600dpi; a first attempt crop-1266-key-1266.png at y550 clipped above the options and was discarded) -- matched the 300 dpi read exactly. No boiler line present.' }

{ n: 54, pr: 54, p: 1268,
  key: 2,
  stem: 'A full-term baby was born with massive abdominal distension, non-passage of meconium, and bilious vomiting. A familial history of cystic fibrosis is present. A plain abdominal radiograph may be pathognomonic for the pathology when disparate-sized bowel loops are associated with which of the following?',
  opts: ['Small-bowel air-fluid levels with absence of gas in the rectum', 'Portal venous gas in the liver and free intra-abdominal air', 'Soap bubbly appearance in the right lower quadrant and absence of small-bowel air', 'Left upper quadrant calcifications and distension of the stomach and duodenum'],
  expl: 'This is the classic radiographic finding of meconium ileus associated with cystic fibrosis.',
  note: 'Only 4 options printed (A-D). No numerals/units/doses in this stem -- confirmed on the 300 dpi full render. Key highlighted: yellow box on "C. Soap bubbly appearance in the right lower quadrant and absence of small-bowel air" -- confirmed at 600 dpi band crop crop-1268-key2-1268.png (W4700 H500 at x100 y1300, 600dpi; a first attempt crop-1268-key-1268.png at y950 landed above the highlighted option and was discarded) -- matched the 300 dpi read exactly. No boiler line present.' }

{ n: 55, pr: 55, p: 1270,
  key: 2,
  stem: 'A 7-month-old baby was found suddenly by his mother excessively crying and dragging his legs to his abdomen. The baby became calm and then had a similar attack of excessive crying. Which segment of the bowel is most frequently associated with this disease?',
  opts: ['Ileo-ileal', 'Colocolic', 'Ileo-colic', 'Cecocolic', 'Jejuno-jejunal'],
  expl: 'The most common type of intussusception in infants is ileo-colic.',
  note: '5 options printed (A-E). Numeral "7-month-old" confirmed at 600 dpi band crop (crop-1270-top-1270.png W4700 H400 at x100 y100, 600dpi); key confirmed at crop-1270-key-1270.png (W4700 H400 at x100 y1350, 600dpi) -- yellow box on "C. Ileo-colic" -- matched the 300 dpi read exactly. No boiler line present.' }

{ n: 56, pr: 56, p: 1272,
  key: 2,
  stem: 'A baby was born with severe respiratory distress. An endotracheal intubation was performed immediately after birth. The plain X-ray showed a mediastinal shift to the right side with a honeycomb appearance in the left side. What is the best time to repair this anomaly?',
  opts: ['As soon after delivery as is feasible', 'Electively after extubation', 'When the infant is on minimal ventilator settings', 'If hypoxia is worsening despite maximum support'],
  expl: 'Surgical repair is delayed until the infant is stabilized, as early surgery before stabilization increases mortality.',
  note: 'Only 4 options printed (A-D). No numerals/units/doses in this stem -- confirmed on the 300 dpi full render. Key highlighted: yellow box on "C. When the infant is on minimal ventilator settings" -- confirmed at 600 dpi band crop crop-1272-key2-1272.png (W4700 H400 at x100 y1300, 600dpi; a first attempt crop-1272-key-1272.png at y950 landed on option A and was discarded) -- matched the 300 dpi read exactly. No boiler line present. Congenital diaphragmatic hernia management -- general pediatrics content, not the excluded back-of-book surgery chapter.' }

{ n: 57, pr: 57, p: 1274,
  key: 2,
  stem: 'A neonate in the NICU was noticed to have frothy secretions around his mouth. The neonatologist tried to insert a nasogastric tube but he failed. Which of the following investigations is essential before taking this neonate to the operating room?',
  opts: ['Renal ultrasound (US)', 'ECG', 'Echocardiogram (ECHO)', 'Spinal US'],
  expl: 'Cardiac anomalies are commonly associated with tracheoesophageal fistula, so ECHO is essential before surgery.',
  note: 'Only 4 options printed (A-D). No numerals/units/doses in this stem -- confirmed on the 300 dpi full render. Key highlighted: yellow box on "C. Echocardiogram (ECHO)" -- confirmed at 600 dpi band crop crop-1274-key2-1274.png (W4700 H400 at x100 y1400, 600dpi; a first attempt crop-1274-key-1274.png at y1100 landed on options A/B and was discarded) -- matched the 300 dpi read exactly. No boiler line present. Tracheoesophageal fistula pre-op workup -- general pediatrics content, not the excluded back-of-book surgery chapter.' }

{ n: 58, pr: 58, p: 1276,
  key: 2,
  stem: 'A full-term baby was born in the NICU, and bilious vomiting was noticed shortly afterward. There was no significant abdominal distension. The abdominal plain X-ray showed 2 air fluid levels. What is the possible surgical treatment for such an anomaly?',
  opts: ['Pyloromyotomy', 'Duodenostomy', 'Duodenoduodenostomy', 'Gastrostomy'],
  expl: 'Double bubble sign indicates duodenal atresia, treated surgically with duodenoduodenostomy.',
  note: 'Only 4 options printed (A-D). Numeral "2 air fluid levels" confirmed at 600 dpi band crop (crop-1276-top-1276.png W4700 H400 at x100 y380, 600dpi); key confirmed at crop-1276-key-1276.png (W4700 H400 at x100 y1300, 600dpi) -- yellow box on "C. Duodenoduodenostomy" -- matched the 300 dpi read exactly. No boiler line present. Duodenal atresia surgical treatment -- general pediatrics content, not the excluded back-of-book surgery chapter.' }

{ n: 59, pr: 59, p: 1278,
  key: 1,
  stem: "A female baby was born in the NICU. The baby didn't pass any meconium, and upon inspection, the neonatologist noticed the absence of an anal opening. Which of the following is the most frequent defect seen in females?",
  opts: ['Perineal fistula', 'Vestibular fistula', 'No fistula', 'Rectovaginal fistula', 'Persistent cloaca'],
  expl: 'In females, the commonest anomaly is a rectovestibular fistula.',
  note: '5 options printed (A-E). No numerals/units/doses in this stem -- confirmed on the 300 dpi full render. Key highlighted: yellow box on "B. Vestibular fistula" -- confirmed at 600 dpi band crop crop-1278-key2-1278.png (W4700 H400 at x100 y850, 600dpi; a first attempt crop-1278-key-1278.png at y550 landed above the options and was discarded) -- matched the 300 dpi read exactly. No boiler line present. Anorectal malformation -- general pediatrics content, not the excluded back-of-book surgery chapter. NOTE: printed explanation says "rectovestibular fistula" while the printed key option reads "Vestibular fistula" -- transcribed exactly as printed, discrepancy not corrected (defective/loose wording is noted, never disputed).' }

{ n: 60, pr: 60, p: 1280,
  key: 1,
  stem: 'A male baby had an antenatal ultrasound showing unilateral hydronephrosis. The hydronephrosis increased in size on the postnatal ultrasound. Which of the following is true regarding the uretero-pelvic junction obstruction?',
  opts: ['It is commonly symptomatic in young children.', 'May be due to intrinsic and/or extrinsic obstruction.', 'Endopyelotomy has a high success rate in the treatment of uretero-pelvic junction obstruction.', 'Pyelopexy is a standard treatment for UPJ obstruction.'],
  expl: 'UPJ obstruction can be caused by intrinsic narrowing or extrinsic vessels crossing the junction.',
  note: 'Only 4 options printed (A-D). No numerals/units/doses in this stem -- confirmed on the 300 dpi full render. Explanation box printed complete on this same page (p.1280 rendered along with p.1281 one page past to check; not needed since the box was already complete here) -- no straddle. Key highlighted: yellow box on "B. May be due to intrinsic and/or extrinsic obstruction." -- confirmed at 600 dpi band crop crop-1280-key3-1280.png (W4700 H400 at x100 y1100, 600dpi; two earlier attempts crop-1280-key-1280.png at y750 and crop-1280-key2-1280.png at y950 each clipped part of the highlighted line and were discarded) -- matched the 300 dpi read exactly. No boiler line present. UPJ obstruction facts -- general pediatrics content, not the excluded back-of-book surgery chapter. LAST ENTRY OF THIS STAGING HALF (n41..n60 complete).' }
