/* ===========================================================================
   ENDPOINT - Pediatrics endpoint part1.pdf - SECTION 2: "Nutrition"
   Verbatim staging record. Written 2026-09-03.

   PDF pages 211-392 (contents page gives 211-392; confirmed by reading p.392
   and p.393). PDF page = printed page. OFFSET IS ZERO, as in section 1.

   STRUCTURE (planned from the OCR index, every answered page then read):
     pp.211-236  section summary / study-notes slides (NOT questions)
     p.237       first question page (unanswered printing)
     pp.238-391  the questions
     p.392       closing Arabic supplication slide (not a question)
     p.393       section 3 "Gastroenterology" title slide -> confirms the range

   EVERY QUESTION IS PRINTED TWICE: an UNANSWERED page, then the ANSWERED page
   carrying the same stem+options with the key HIGHLIGHTED IN YELLOW and (nearly
   always) a bordered explanation box. Only the ANSWERED page is staged here.

   THREE QUESTIONS TAKE A THIRD PAGE, the box printed alone after the answered
   page:   n=54 -> box on p.345 | n=55 -> box on p.348 | n=71 -> box on p.381
   All three were read and confirmed to be the preceding question's explanation.
   They are why the parity of "answered" pages flips twice through the section.

   COUNT: 76 questions. Established twice, independently:
     (a) 76 pages score as `answered` in the OCR index (yellow highlight AND at
         least one option letter), matching the contents page exactly;
     (b) printed numbers run 1..75 but "65" is printed TWICE (pp.368 AND 370)
         -> 75 + 1 = 76.

   THE PRINTED NUMBER IS NOT AN IDENTIFIER. `n` is the TRUE SEQUENTIAL index
   1..76; `pr` is what the page actually prints. They agree through n=65 and
   then `pr` trails `n` by one from n=66 (p.370) to the end.

   BOXES: 74 of 76 carry a printed explanation box. The two that do NOT are
   n=36 (p.308) and n=74 (p.387), both confirmed by looking at the page.
   ⚠️ DO NOT DERIVE THIS FROM OCR. "Text continues after the last option" called
   ELEVEN pages boxless across this section; the images found TWO. An OCR box
   hit is evidence; an OCR box miss is nothing at all.

   FIGURES: p.238 (n=1) prints a clinical wrist photo plus its X-ray, labelled
   (a)/(b) -- section 1 had none, and the book's own p.4 claim that "the exam
   does not contain pictures" does not hold here. See the note on n=1.

   FIELD KEY
     n    true sequential number (1..76)
     pr   the number actually PRINTED on the page
     p    PDF page of the ANSWERED printing
     box  PDF page of the explanation box when it overflowed to its own page
     key  0-based index into opts
     stem/opts  verbatim, including the source's own typos (flagged in `note`)
     expl verbatim transcription of the printed explanation box ('' = none printed)
     note transcription-time observation: typo, defect, reprint, filing
   =========================================================================== */

var PEDEP_S02_STAGED = [

/* ===========================================================================
   ENDPOINT — Pediatrics endpoint part1.pdf — SECTION 2 "Nutrition", PART A
   Verbatim staging record. Written 2026-09-03. Covers n=1..38 (pp.238-312,
   answered pages only, even pages throughout this run).

   ⚠️ UNLIKE SECTION 1: n=1 (p.238) carries a FIGURE (a clinical photo of a
   wrist plus its X-ray). Not cropped here — flagging for the parent to
   decide whether/how to cut it. No other page in this batch (n=2..38)
   prints an image.

   Letter-case of the printed options SHIFTS through the section:
   n=1..14 print A/B/C/D/E (upper-case); n=15..27 print a/b/c/d/e
   (lower-case); n=28 alone prints upper-case A-E again; n=29..38 print
   a/b/c/d (lower-case, and only 4 options each). Not corrected — `opts`
   below carries no letter prefix either way, so this is transcription
   colour only, noted here rather than per-entry.

   Every one of the six OCR-disagreement pages flagged in the brief
   (244, 264, 278, 284, 302, 304) was unambiguous on the rendered image —
   no escalation was needed for any of them.

   FIELD KEY: n true sequential index (mine) | pr number printed on the
   page (null if none) | p PDF page of the answered printing | key 0-based
   index into opts | stem/opts verbatim | expl verbatim box text ('' = none
   printed) | note transcription-time observation.
   =========================================================================== */

{ n:1, pr:1, p:238, key:2,
  stem:'Sunit, a 13-month-old boy, presents with faltering growth. He is still entirely breastfed. On examination, he is miserable and his wrist appears abnormal, as shown in the figure. An X-ray of his wrist is also provided. What is the most likely diagnosis?',
  opts:['Vitamin A deficiency','Vitamin B1 deficiency','Vitamin D deficiency','Vitamin E deficiency','Vitamin K deficiency'],
  expl:'Clinical signs such as widened wrists, irritability, and poor growth in a breastfed infant are classic for rickets due to vitamin D deficiency.',
  fig:'Two-panel figure to the right of the options: a clinical photograph of the wrist labelled (a) and a radiograph of the same wrist labelled (b). ONE combined crop, q-pd-ep-238.',
  note:'⚠️ Page prints a FIGURE. It belongs to the QUESTION, not the explanation — settled 2026-09-03 by reading p.237, the unanswered printing, which prints the identical stem, the same A–E options with nothing highlighted, and the same two-panel figure, with no explanation box. So the reader is meant to look at it before answering.' },

{ n:2, pr:2, p:240, key:2,
  stem:'Sarah, a 9-year-old girl, is referred by the school nurse to the paediatric clinic because of her weight. She weighs 43 kg (98th centile) and is 141 cm tall (91st centile). She has followed her height centiles over the last 9 months, but her weight centile has increased. Her body mass index is at the 97th centile. Her mother reports that she hardly eats and, when she does, has a very healthy diet. Which of the following statements is most likely to be correct?',
  opts:['A calorie-restricted diet is the treatment of choice','Sarah\'s adrenocortical axis should be checked to rule out Cushing syndrome','Sarah has a higher risk of an abnormal lipid profile and raised blood pressure in adult life','Sarah is obese'],
  expl:'Sarah is overweight [Body mass index (BMI) > 91st centile] rather than obese (BMI > 98th centile). It places her at increased risk of an abnormal lipid profile and raised blood pressure in adult life unless action is taken',
  note:'Only 4 options printed (A-D).' },

{ n:3, pr:3, p:242, key:3,
  stem:'Which of the following term newborns has the lowest risk of cardiovascular disease in later life?',
  opts:['1.8 kg','2.1 kg','2.4 kg','3.9 kg','4.6 kg'],
  expl:'Both low birth weight and high birth weight are associated with higher cardiovascular risk. Birth weight around 3.9 kg is optimal.',
  note:'' },

{ n:4, pr:4, p:244, key:3,
  stem:'A mother asks you whether there are any disadvantages to breastfeeding. Although you would prefer to inform her about the many advantages of breastfeeding, you wish to answer her question honestly. Which of the following is most likely to be a true potential disadvantage?',
  opts:['Breastfeeding will reduce her chance of having more children','The absence of cow\'s milk protein in breast milk increases the risk that the child will develop a milk allergy when weaning','The higher interferon level in breast milk increases the risk of severe bronchiolitis in children who develop respiratory syncytial virus infection','The lower vitamin K concentration in breast milk can result in life-threatening bleeding'],
  expl:'Breast milk has low vitamin K, putting exclusively breastfed infants at risk of VKDB (vitamin K deficiency bleeding) without supplementation.',
  note:'⚠️ Flagged by brief as an OCR-disagreement page; image is unambiguous (option D highlighted). Only 4 options printed (A-D).' },

{ n:5, pr:5, p:246, key:1,
  stem:'Anil is a 2.5-year-old boy who lives in India and attends the local health clinic near their village for a routine check-up. Both his parents are subsistence farmers. He is asymptomatic. On examination, he is very thin, but his hair and skin appear normal, and there is no oedema or other clinical abnormalities. His height is on the 5th centile, but his weight is well below the 0.4th centile (z-score between -2 and -3 below the median).What is the most likely diagnosis?',
  opts:['Kwashiorkor','Marasmus','Normal child','Rickets','Severe gastro-oesophageal reflux'],
  expl:'Marasmus is characterized by severe wasting without edema. It results from chronic calorie deficiency.',
  note:'Stem prints no space between "median)." and "What" — transcribed verbatim. REPRINTED (near-identical) as n=23 (p.282): same clinical picture with vaguer wording, weight centile changed from 0.4th to 3rd, name/country dropped. Same key (Marasmus).' },

{ n:6, pr:6, p:248, key:4,
  stem:'Harry is a 13-year-old boy who attends the paediatric clinic because of obesity. His height is on the 98th centile and his weight is above the 99.6th centile. Which of the following is least likely to be associated with obesity?',
  opts:['Asthma','Hypertension','Low self-esteem','Slipped upper femoral epiphysis','Type 1 diabetes'],
  expl:'Obesity is more associated with type 2 diabetes. Type 1 diabetes is an autoimmune disease and not typically linked to obesity.',
  note:'' },

{ n:7, pr:7, p:250, key:0,
  stem:'Ahmed is an 18-month-old Pakistani boy who was born in the UK with a weight of 3.2 kg. He is on a mixed diet. His height is on the 10th centile and his weight is on the 0.4th centile. He is noted to be miserable. On examination, his wrists feel wider than normal. Which of the following is the most likely diagnosis?',
  opts:['Vitamin D deficiency','Vitamin K deficiency','Kwashiorkor','Marasmus','Cow\'s milk protein allergy'],
  expl:'Features such as wide wrists, poor growth, and irritability in a young child suggest rickets due to vitamin D deficiency.',
  note:'' },

{ n:8, pr:8, p:252, key:1,
  stem:'Harry is a 3-week-old infant who has been exclusively breastfed by his mother. He was born at home as his mother wanted “everything to be natural” and declined all interventions. His birthweight was 3.4 kg. He presents to the hospital with severe rectal bleeding and shock. Which of the following is the most likely diagnosis?',
  opts:['Vitamin D deficiency','Vitamin K deficiency','Kwashiorkor','Marasmus','Cow\'s milk protein allergy'],
  expl:'Newborns are at risk of Vitamin K deficiency bleeding (VKDB), especially if they have not received intramuscular Vitamin K at birth. This infant\'s exclusive breastfeeding and home delivery without prophylaxis increase the risk. VKDB can present with severe bleeding, including GI hemorrhage and shock.',
  note:'Shares the same 5-option menu as n=7, n=9, n=10 (Vitamin D / Vitamin K / Kwashiorkor / Marasmus / Cow\'s milk protein allergy) — a shared option menu, each vignette discriminates on its own clinical picture, not folded.' },

{ n:9, pr:9, p:254, key:2,
  stem:'Jonas is an 18-month-old Black African boy in KwaZulu-Natal, South Africa. He was born weighing 3.2 kg. He was breastfed until 9 months of age when his sibling was born. He now mainly eats traditional maize-based porridge, which is grown on the family farm. His weight is just below the 0.4th centile. He looks thin but has a distended abdomen. There is oedema around his eyes and feet. His hair has a red tinge. Which of the following is the most likely diagnosis?',
  opts:['Vitamin D deficiency','Vitamin K deficiency','Kwashiorkor','Marasmus','Cow\'s milk protein allergy'],
  expl:'Kwashiorkor is a form of protein-energy malnutrition associated with a protein-deficient diet (like maize). Classic features include edema, hepatomegaly, growth failure, and hypopigmented hair.',
  note:'Same shared 5-option menu as n=7/8/10.' },

{ n:10, pr:10, p:256, key:4,
  stem:'Jamie is a 5-month-old male infant who was born with a weight of 3.5 kg (25th centile). He was initially breastfed and was growing well. His mother developed mastitis, so he was changed to formula milk. He now weighs 5.0 kg (<0.4th centile). He has frequent loose stools and eczema. Which of the following is the most likely diagnosis?',
  opts:['Vitamin D deficiency','Vitamin K deficiency','Kwashiorkor','Marasmus','Cow\'s milk protein allergy'],
  expl:'Cow\'s milk protein allergy can present with GI symptoms (diarrhea, poor weight gain), skin manifestations (eczema), and failure to thrive after starting formula.',
  note:'Same shared 5-option menu as n=7/8/9.' },

{ n:11, pr:11, p:258, key:4,
  stem:'Tanya, an 11-month-old Caucasian girl, is being monitored by her health visitor. Her birthweight was 2.4 kg (0.4th centile), and she has remained on the 2nd centile, now weighing 7.0 kg. Her mother is on the 5th centile and her father is on the 40th centile for height. She is well, has a good appetite, and has never needed to visit her doctor. She has no abnormal signs on examination, and her development is normal.Which of the following is the most likely diagnosis?',
  opts:['Cystic fibrosis','Obesity','Vitamin C deficiency','Marasmus','Normal'],
  expl:'This is a case of constitutional (familial) small stature. The child is growing steadily along her centile, is healthy and developing normally. No signs of disease are present.',
  note:'Stem prints no space between "normal." and "Which" — transcribed verbatim.' },

{ n:12, pr:12, p:260, key:0,
  stem:'A 3-year-old boy of Asian origin presents to his GP accompanied by his father. He has a 6-month history of bilateral leg pains and occasionally finds it difficult to walk and has to rest. On examination, he has bowing of his legs but otherwise appears developmentally normal. His father mentions that his son is also due to see the dentist for “bad teeth.” What is the most appropriate initial blood test to aid in diagnosis?',
  opts:['Bone profile','Liver function','Full blood count','C-reactive protein','Renal function'],
  expl:'The presentation suggests rickets, likely due to vitamin D deficiency. A bone profile (calcium, phosphate, alkaline phosphatase) is the initial investigation to assess mineral metabolism.',
  note:'' },

{ n:13, pr:13, p:262, key:0,
  stem:'Breastfeeding is best for babies, and there are very few contraindications. Which of the following is an absolute contraindication to breastfeeding in the UK?',
  opts:['Galactosaemia','Phenylketonuria','Neonatal jaundice','Cleft palate','ABO incompatibility'],
  expl:'Classic galactosaemia is the only absolute contraindication to breastfeeding because affected infants cannot metabolize galactose, which can lead to severe complications.',
  note:'' },

{ n:14, pr:14, p:264, key:3,
  stem:'A 6-week-old baby is referred by the health visitor as she has only just regained her birth weight. She is being fed with formula milk, and her stools are normal. On examination, she appears thin but otherwise normal. She is admitted to the ward and fed by the nursing staff for a week as her mother is readmitted with an infection. She demonstrates excellent weight gain during this period. What is the most likely cause for her initial poor weight gain?',
  opts:['Cow\'s milk protein intolerance','Gastro-oesophageal reflux','Cystic fibrosis','Inadequate intake/neglect','Urinary tract infection'],
  expl:'The excellent weight gain when fed by staff indicates that poor weight gain was due to insufficient intake rather than medical conditions like reflux, cow\'s milk intolerance, or CF.',
  note:'⚠️ Flagged by brief as an OCR-disagreement page; image is unambiguous (option D "Inadequate intake/neglect" highlighted).' },

{ n:15, pr:15, p:266, key:0,
  stem:'Which of the following not a finding in Kwashiorkor?',
  opts:['hyperglycemia','muscle wasting','distributed muscle: fat ratio','dermatosis','edema'],
  expl:'Kwashiorkor is characterized by edema, dermatosis, and muscle wasting with disproportionate fat retention, but hyperglycemia is not typical.',
  note:'DEFECT (typo): stem prints "Which of the following not a finding" — missing "is". Option C prints "distributed muscle: fat ratio" verbatim — plausibly intended "redistributed muscle:fat ratio" per the box\'s "disproportionate fat retention", but transcribed exactly as printed. First page in this run with lower-case option letters (a-e).' },

{ n:16, pr:16, p:268, key:3,
  stem:'Edema in kwashiorkor is mainly due to:',
  opts:['Proteinuria','Hepatomegaly','Elevated serum sodium','low protein intake','Protein loss in stool'],
  expl:'Protein deficiency reduces plasma oncotic pressure, leading to fluid leakage into interstitial spaces and resulting in edema.',
  note:'Option D printed lower-case "low protein intake" while sibling options are capitalized — transcribed as printed.' },

{ n:17, pr:17, p:270, key:0,
  stem:'You are counseling a mother of nutrition to her children, she is very interested in the roles that vitamins play in health. Which is appropriate advice?',
  opts:['Vit C deficiency can lead to petechiae, and mucosal bleeding','Vit k is only important in synthesis of RBCs','Vit E deficiency leads to decrease clot degeneration','Vit B12 deficiency is common in infants','Folic acid has no role in blood production'],
  expl:'Vitamin C is essential for collagen synthesis; deficiency leads to scurvy, causing bleeding gums and petechiae.',
  note:'Stem grammar is garbled as printed ("counseling a mother of nutrition to her children") — transcribed verbatim, not repaired. Option B prints "Vit k" lower-case k; option C "decrease clot degeneration" is odd phrasing printed as-is.' },

{ n:18, pr:18, p:272, key:4,
  stem:'An 11th presented to the emergency room with convulsions. He had a history of diarrhea 3 days and was afebrile. His mother described that he was and had no past history of convulsions. Examination revealed large head wide anterior fontanelle, prominent costochondral junctions and broad wrists. His eyes and skin pinch were normal and rectal temperature was 37.8 c. What is the emergency room initial treatment?',
  opts:['ORS','Antipyretic drug and cold fomentations','low sodium I.V fluids','IV Ceftriaxone','I.V calcium gluconate'],
  expl:'The child\'s convulsions are due to low calcium from rickets, indicated by skeletal signs. Emergency treatment is IV calcium to rapidly correct hypocalcemia.',
  note:'⚠️ Stem is garbled/corrupted in the source itself — CONFIRMED by re-rendering at 200 dpi, not a misread. "An 11th presented" (likely intended "An 11-month-old infant") and "His mother described that he was and had no past history of convulsions" are grammatically broken/truncated as printed. Transcribed verbatim, not repaired.' },

{ n:19, pr:19, p:274, key:0,
  stem:'When advising a mother about the importance of vitamins, what should you tell her?',
  opts:['Vitamin A decreases susceptibility to infection','Vitamin D improves vision in dim light','Vitamin K enhances immune system function','Vitamin C prevents rickets'],
  expl:'Vitamin A is critical for immune function, especially in reducing the severity and incidence of infections in children.',
  note:'Only 4 options printed (a-d).' },

{ n:20, pr:20, p:276, key:0,
  stem:'Which of the following is NOT a feature of marasmus?',
  opts:['Looking apathetic','No edema','Gross muscle wasting','Loss of subcutaneous fat','Weight for height is >3SD below the median in growth chart'],
  expl:'This question is of lesser importance. Apathy occurs in both marasmus and kwashiorkor, but it is more common with kwashiorkor. Therefore, we go with option A, as it is the agreed-upon answer. However, the wording of the question is not very good, but it has appeared before in the old system, so we included it as a backup.',
  note:'⚠️ Explanation box is unusually informal/meta ("This question is of lesser importance... we included it as a backup"), reading like an editorial note from the bank\'s authors rather than a clinical explanation. Transcribed verbatim.' },

{ n:21, pr:21, p:278, key:3,
  stem:'A 2-year-old girl presented to the clinic for a routine check-up. She does not like to eat but she loves potato chips. The best method to check her nutritional status is to assess:',
  opts:['Head circumference','Height','Weight','Weight for height','Skin fold thickness'],
  expl:'Weight-for-height assesses acute malnutrition and is the most sensitive indicator of current nutritional status in children.',
  note:'⚠️ Flagged by brief as an OCR-disagreement page; image is unambiguous (option D highlighted).' },

{ n:22, pr:22, p:280, key:1,
  stem:'The following is NOT a cause of anemia in severe protein-energy malnutrition:',
  opts:['Iron deficiency','Carbohydrate deficiency','Protein deficiency','Folic acid deficiency','Infections'],
  expl:'Anemia in PEM is due to deficiencies in iron, folic acid, protein, or secondary infections; carbohydrate deficiency does not directly cause anemia.',
  note:'REPRINTED as n=29 (p.294). Same stem, options and key; different box wording. HOLD n=22, n=29 references it.' },

{ n:23, pr:23, p:282, key:1,
  stem:'A 2-year-old boy lives in a village and attends the local health clinic near their village for a routine check. Both his parents are farmers. He is asymptomatic. On examination, he is very thin, but his hair and skin appear normal and there is no edema or other clinical abnormalities. His height is on the 5th centile, but his weight is well below the 3rd centile (z-score between -2 and -3 below the median). What is the most likely diagnosis?',
  opts:['Kwashiorkor','Marasmus','Normal child','Rickets','Severe gastro-esophageal reflux'],
  expl:'Severe wasting without edema and normal hair/skin indicates marasmus, reflecting chronic protein-energy deficiency.',
  note:'REPRINT of n=5 (p.246): same vignette structure (thin, farming family, height 5th centile, weight z −2 to −3), name/country dropped, weight centile changed from 0.4th to 3rd. Same key (Marasmus). Stem repeats "village...near their village" and spells "gastro-esophageal" (n=5 used "gastro-oesophageal") — both transcribed verbatim.' },

{ n:24, pr:24, p:284, key:0,
  stem:'Which of the following is true when comparing breast milk to cow\'s milk?',
  opts:['Breast milk has higher lactose content','Breast milk has higher protein content','Breast milk has higher renal solute load','Breast milk has lower essential fatty acids'],
  expl:'Breast milk contains more lactose, which provides energy and supports gut microbiota, whereas protein content is lower than cow\'s milk.',
  note:'⚠️ Flagged by brief as an OCR-disagreement page; image is unambiguous (option A highlighted). Only 4 options printed (a-d).' },

{ n:25, pr:25, p:286, key:3,
  stem:'Breast milk is richer than cow\'s milk in the following:',
  opts:['Proteins','Saturated fatty acids','Calcium and phosphorus','Iron','Sodium and potassium'],
  expl:'Breast milk has highly bioavailable iron, despite lower total iron content, compared to cow\'s milk.',
  note:'' },

{ n:26, pr:26, p:288, key:2,
  stem:'Cow\'s milk differs from breast milk in which of the following?',
  opts:['Increased iron','Less protein','Decreased carbohydrate','Higher lactose'],
  expl:'Cow\'s milk differs from breast milk because it contains less lactose (carbohydrates) and more protein',
  note:'Only 4 options printed (a-d). Box text prints with no closing period, transcribed as printed.' },

{ n:27, pr:27, p:290, key:1,
  stem:'Which of the following is NOT true about breast feeding?',
  opts:['Recommended food for infants both term and preterm','50% of energy from proteins','Contains immunological benefits (i.e. IgA, active lymphocytes)','Promotes growth of lactobacillus in GI','Decreases incidence of allergic disorders'],
  expl:'Breast milk provides 5–7% of energy from proteins, with the majority from fats and carbohydrates. The other options reflect true benefits of breastfeeding.',
  note:'' },

{ n:28, pr:28, p:292, key:2,
  stem:'A 12-month-old patient is seen in the clinic. His mother reports that she exclusively breast-fed the child until he was 6 months of age. He still breast feeds approximately four to five times daily but the mother reports he also drinks 2 to 3 oz of water daily, 8 to 10 oz of juice daily, and has been doing well eating table foods. What dosing of vitamin D would be the most appropriate for this child?',
  opts:['200 IU daily','400 IU daily','600 IU daily','800 IU daily','1000 IU daily'],
  expl:'All infants younger than 12 months should receive 400 IU daily beginning within the first few days after birth. Healthy children 1 to 18 years of age should receive 600 IU daily. Children with liver disease, kidney disease, or malabsorption (ie, secondary to cystic fibrosis, celiac disease, inflammatory bowel disease [IBD], etc.) as well as premature infants need even higher doses to account for the limitations in vitamin D metabolism or absorption brought on by these health issues.',
  note:'Reverts to upper-case option letters (A-E), the only page to do so after n=14. Box prints part of its text in red and highlights "receive 400 IU"/"receive 600 IU" for emphasis — colour/highlight formatting not reproducible in plain text; the words themselves are transcribed verbatim.' },

{ n:29, pr:29, p:294, key:1,
  stem:'The following is NOT a cause of anemia in severe protein-energy malnutrition:',
  opts:['Iron deficiency','Carbohydrate deficiency','Protein deficiency','Folic acid deficiency','Infections'],
  expl:'Anemia in malnutrition is mainly due to deficiencies of iron, folate, protein, or infections. Carbohydrate deficiency does not directly cause anemia.',
  note:'WITHIN-BANK REPRINT of n=22 (p.280). Identical stem, options and key; different box wording ("PEM" vs "malnutrition" phrasing).' },

{ n:30, pr:30, p:296, key:2,
  stem:'A 3-week-old infant has been referred to you because of persistent jaundice. Her current weight is 4050 g. Her neonatal screening test was normal, which one of the following is the most appropriate management?',
  opts:['STOP breastfeeding','Commence phototherapy','Reassure the mother and continue breastfeeding','Perform liver function tests','Arrange an urgent liver ultrasound'],
  expl:'In a healthy infant with normal weight gain and normal neonatal screen, breastfeeding jaundice is usually benign. No intervention is needed other than reassurance and continued feeding.',
  note:'' },

{ n:31, pr:31, p:298, key:0,
  stem:'A farmer\'s child presents with weight below the 2nd centile and no edema. What is the most likely diagnosis?',
  opts:['Marasmus','Normal','Kwashiorkor','Obesity'],
  expl:'Marasmus presents with severe wasting without edema, often in children with inadequate caloric intake. Kwashiorkor, in contrast, has edema despite some fat stores.',
  note:'Only 4 options printed (a-d).' },

{ n:32, pr:32, p:300, key:0,
  stem:'At what age can semi-skimmed cow\'s milk be introduced as the main drink for a child?',
  opts:['2 years','6 months','12 months','18 months'],
  expl:'Semi-skimmed cow\'s milk is not recommended before 2 years because toddlers require higher fat content for brain development. Whole milk is preferred until then.',
  note:'Only 4 options printed (a-d).' },

{ n:33, pr:33, p:302, key:1,
  stem:'Nutritional status in severe malnutrition is best expressed by which measurement?',
  opts:['Weight for age','Weight for height','Height for age','Mid-arm circumference'],
  expl:'Weight-for-height is the most sensitive measure for acute malnutrition, reflecting current nutritional status rather than long-term stunting.',
  note:'⚠️ Flagged by brief as an OCR-disagreement page; image is unambiguous. Only 4 options printed (a-d).' },

{ n:34, pr:34, p:304, key:2,
  stem:'Which tool allows identification of moderate and severe malnutrition?',
  opts:['BMI','Weight for age','Mid-arm circumference','Skin fold thickness'],
  expl:'Mid-arm circumference is a quick, age-independent screening tool for moderate and severe malnutrition in children 6 months–5 years.',
  note:'⚠️ Flagged by brief as an OCR-disagreement page; image is unambiguous. Only 4 options printed (a-d).' },

{ n:35, pr:35, p:306, key:1,
  stem:'Which measurement reflects acute malnutrition?',
  opts:['Height for age','Weight for height','Mid-arm circumference','Head circumference'],
  expl:'Acute malnutrition causes weight loss faster than height changes, so weight-for-height is the key measure.',
  note:'Only 4 options printed (a-d). Third near-duplicate item in this batch on weight-for-height as the acute-malnutrition marker (see n=21, n=33) — not folded, each is its own printed page/box, no exact stem match.' },

{ n:36, pr:36, p:308, key:2,
  stem:'Severe malnutrition can be defined by the presence of which clinical sign?',
  opts:['Severe wasting','Stunting','Bilateral edema','Apathetic look'],
  expl:'',
  note:'No explanation box printed on this page. Only 4 options printed (a-d).' },

{ n:37, pr:37, p:310, key:1,
  stem:'At what age should weaning from exclusive breastfeeding ideally be started?',
  opts:['2 months','4–6 months','9 months','12 months'],
  expl:'Complementary foods should be introduced around 6 months while continuing breastfeeding to ensure adequate nutrition.',
  note:'Only 4 options printed (a-d). Option B printed with an en-dash "4–6 months" — preserved as printed.' },

{ n:38, pr:38, p:312, key:1,
  stem:'Whole pasteurized cow\'s milk can be given as the main drink:',
  opts:['With iron supplements before 1 year','Safely after 1 year','At 6 months','From birth'],
  expl:'Before 1 year, cow\'s milk can lead to iron deficiency and renal solute overload. Whole milk is safe after 12 months.',
  note:'Only 4 options printed (a-d). Last question of this batch (p.312).' },

{ n:39, pr:39, p:314, key:2,
  stem:'Delaying the introduction of allergenic foods (e.g., peanuts, eggs) will:',
  opts:['Prevent food allergy','Delay food allergy','Increase risk of allergy','Have no effect'],
  expl:'Early introduction of allergenic foods like peanuts and eggs reduces the risk of developing allergies, delaying them can increase risk.',
  note:'' },

{ n:40, pr:40, p:316, key:1,
  stem:'Developmental delay occurs in weight faltering if:',
  opts:['Any degree of faltering is present','Only prolonged and severe faltering is present','Only mild faltering is present','Never occurs'],
  expl:'Mild or short-term weight faltering usually does not affect development, whereas prolonged severe malnutrition can impair growth and cognition.',
  note:'' },

{ n:41, pr:41, p:318, key:1,
  stem:'Weight faltering is usually identified when:',
  opts:['Weight fluctuates within one centile space','Weight crosses down two or more centile spaces','Height falters','BMI increases'],
  expl:'Crossing downward by ≥2 centile spaces on a growth chart is considered clinically significant weight faltering.',
  note:'' },

{ n:42, pr:42, p:320, key:0,
  stem:'Severe prolonged weight faltering usually affects:',
  opts:['Height','Only weight','Only head circumference','Only mid-arm circumference'],
  expl:'Chronic malnutrition eventually affects linear growth, leading to stunting, while acute malnutrition initially affects weight.',
  note:'' },

{ n:43, pr:43, p:322, key:2,
  stem:'Weight faltering in children was formerly called:',
  opts:['Protein energy malnutrition','Wasting','Failure to thrive','Growth failure'],
  expl:'"Failure to thrive" was the old term for weight faltering or poor growth, reflecting inadequate nutrition or chronic illness.',
  note:'' },

{ n:44, pr:44, p:324, key:2,
  stem:'Nutritional status of a child can be reliably assessed by:',
  opts:['A single weight measurement','A single height measurement','Multiple anthropometric indices','Only head circumference'],
  expl:'A single measurement is insufficient; weight, height, BMI, and mid-arm circumference together provide a comprehensive assessment.',
  note:'' },

{ n:45, pr:45, p:326, key:1,
  stem:'Mid-arm circumference is independent of age in children between:',
  opts:['Birth–6 months','6 months–5 years','5–10 years','Adolescence'],
  expl:'In this age range, mid-arm circumference can be used without age adjustment to screen for malnutrition.',
  note:'' },

{ n:46, pr:46, p:328, key:0,
  stem:'Which of the following is a poor tool for nutritional assessment?',
  opts:['Skin fold thickness','Weight for height','Mid-arm circumference','BMI'],
  expl:'Skin fold measurements are operator-dependent and less reliable than weight-for-height or mid-arm circumference for clinical assessment.',
  note:'' },

{ n:47, pr:47, p:330, key:1,
  stem:'Immunodeficiency in malnutrition is mainly indicated by:',
  opts:['Low serum immunoglobulins','Impaired cell-mediated immunity','Reduced neutrophil count','Low complement levels'],
  expl:'Protein-energy malnutrition primarily causes T-cell defects, while immunoglobulin levels are often preserved.',
  note:'' },

{ n:48, pr:48, p:332, key:1,
  stem:'Unmodified cow’s milk in infancy is:',
  opts:['Suitable from birth','Unsuitable','Safe at 3 months','Recommended after 6 months'],
  expl:'Cow’s milk is not recommended in the first year due to risk of iron deficiency, high renal solute load, and protein excess.',
  note:'' },

{ n:49, pr:49, p:334, key:1,
  stem:'Compared to human milk, cow’s milk contains:',
  opts:['Less protein and minerals','More protein and minerals','Equal protein and minerals','No protein'],
  expl:'Cow’s milk contains higher protein and mineral content, which can stress an infant’s kidneys compared to breast milk.',
  note:'' },

{ n:50, pr:50, p:336, key:2,
  stem:'A modified cow’s milk–based formula should be continued until at least:',
  opts:['6 months','9 months','12 months','18 months'],
  expl:'Formula is usually continued until 12 months, after which toddlers can transition to cow’s milk or varied diet.',
  note:'' },

{ n:51, pr:51, p:338, key:1,
  stem:'Wasting is best defined as:',
  opts:['Low height for age','Low weight for height','Low BMI','Low mid-arm circumference'],
  expl:'Wasting reflects acute malnutrition, distinguishing it from stunting (chronic malnutrition) or underweight (mixed).',
  note:'Page flagged for OCR undercounting option letters; the image itself is fully legible with four clear options a-d, no ambiguity.' },

{ n:52, pr:52, p:340, key:1,
  stem:'A child with marasmus typically has:',
  opts:['Severe edema','No edema','Puffy face','Ascites'],
  expl:'Marasmus is severe wasting without edema, unlike kwashiorkor which features edema and fatty liver.',
  note:'' },

{ n:53, pr:53, p:342, key:1,
  stem:'Criteria for underfeeding in breast-fed babies do NOT include:',
  opts:['Slow irregular weight gain','Sleeping much after nursing','Decreased amount of urine and ↓ frequency of urination','Sucking fists between feeds','Stay on breast for a long period'],
  expl:'Long feeding sessions alone do not indicate underfeeding; the focus is on growth, urine output, and feeding efficiency.',
  note:'' },

{ n:54, pr:54, p:344, box:345, key:0,
  stem:'Which of the following statements about preterm and term formulae and breast milk is most factually correct?',
  opts:['Babies fed on fortified breast milk have a decreased incidence of late-onset sepsis and necrotizing enterocolitis when compared with babies fed on preterm formulae','Preterm babies fed with fortified breast milk show similar weight gain profiles to preterm babies fed on preterm formula milks','Preterm formula contains more fat, protein, and electrolytes but the same amount of carbohydrate as term formula or unfortified breast milk','Preterm formula has a lower sodium content than term formula','Preterm formula has the same protein content as term formula'],
  expl:'Fortified breast milk combines the nutritional adequacy needed for preterm growth with the immunologic and protective benefits of breast milk. Preterm formula supports growth but does not provide the same protective immune factors, so infants fed formula are at higher risk for serious complications like NEC and late-onset sepsis.',
  note:'Box did not fit on the answered page and is printed alone on p.345 (italic text, "Fortified breast milk" lead-in in red).' },

{ n:55, pr:55, p:347, box:348, key:2,
  stem:'An 18-month-old infant is seen in the pediatrician’s office as a new patient for a well-child visit having moved from Minnesota to Texas. A comparison of new to previous growth parameters suggest he has dropped to less than fifth percentile for height, weight, and head circumference. Physical examination findings are significant for lower-extremity bowing, wrist enlargement, frontal bossing, and some hypotonia. The mother is concerned because he does not pull to stand nor walking. She reports that he was exclusively breast-fed until he was 9 to 10 months old, currently drinks about 24 oz of whole milk daily, and has never taken medications or dietary supplements. The mother also has a question about whether he needs allergy testing given his history of frequent upper respiratory infections. Which of the following laboratory findings would be expected?',
  opts:['Low calcium, normal phosphorus, elevated alkaline phosphatase, elevated parathyroid hormone(PTH)','Low calcium, low phosphorus, low alkaline phosphatase, elevated PTH','Low calcium, low phosphorus, elevated alkaline phosphatase, elevated PTH','Low calcium, high phosphorus, elevated alkaline phosphatase, elevated PTH','Low calcium, low phosphorus, low alkaline phosphatase, low PTH'],
  expl:'Nutritional rickets from vitamin D deficiency commonly presents with hypocalcemia and hypophosphatemia, which leads to secondary hyperparathyroidism and elevated alkaline phosphatase. Clinical signs include bowing of legs, wrist enlargement, frontal bossing, and hypotonia.',
  note:'Long vignette; the allergy-testing question in the stem is a distractor, not part of what is being asked. Box did not fit on the answered page and is printed alone on p.348. Read at native 800x450 without needing a hi-res render — fully legible.' },

{ n:56, pr:56, p:350, key:3,
  stem:'Which of the following would be the most likely radiographic finding in a child who has been diagnosed with calcium-deficient rickets?',
  opts:['Widening of the ribs','Shortening of the radius and ulna','Vertebral fissures and fractures','Prominence of the costochondral junctions','Increased densities in the long bone shafts'],
  expl:'Calcium-deficient rickets causes expansion of the growth plates and metaphyseal changes, often seen as prominent costochondral junctions (“rachitic rosary”). Other classic radiographic features may include cupping and fraying of metaphyses.',
  note:'' },

{ n:57, pr:57, p:352, key:1,
  stem:'Which of the following types of food is contraindicated and has to be avoided in a child under one year of age?',
  opts:['Eggs','Honey','Peanut','All of the above'],
  expl:'● Foods high in salt and sugar should be avoided and honey must not be given until 1 year of age because of risk of infantile botulism.\n● Early introduction of common allergens such as egg and peanut at, or around 4 months of age in infants at high risk of developing IgE-mediated allergy may reduce the risk of developing allergy to these foods.',
  note:'' },

{ n:58, pr:58, p:354, key:0,
  stem:'What is appropriate regarding the role of vitamins in children’s nutrition?',
  opts:['Vitamin C deficiency can lead to petechiae and mucosal bleeding','Vitamin K’s main function is in the synthesis of RBCs','Vitamin E deficiency leads to decreased clot generation','Vitamin B12 deficiency is common in infants','Folic acid has no role in blood production'],
  expl:'Vitamin C deficiency (scurvy) leads to defective collagen synthesis, bruising, bleeding gums, and petechiae. Vitamin K is for coagulation, not RBC synthesis.',
  note:'Duplicate pair with n=70 (p.378): identical five option statements, REORDERED — key here is position A (Vitamin C statement first); at n=70 the same five statements are reordered and the same Vitamin C statement is last, moving the key to E.' },

{ n:59, pr:59, p:356, key:1,
  stem:'What is the main benefit of human milk oligosaccharides?',
  opts:['Kill microorganisms','Work as prebiotics','Help protein absorption','Help lactose digestion','Prevent infant colic'],
  expl:'HMOs promote growth of beneficial gut microbiota, supporting immunity and gut health.',
  note:'Near-repeat of n=74 (p.387): stem reworded to "How does human milk oligosaccharides work?" and option B reworded to "Function as prebiotics"; same options otherwise, same key position B.' },

{ n:60, pr:60, p:358, key:3,
  stem:'An 18-month-old exclusively breastfed infant has not started standing or walking yet. On examination, she has swelling of her wrists, an open fontanelle, and has not yet erupted any teeth. Which of the following is the most likely cause?',
  opts:['Vitamin A deficiency','Vitamin B deficiency','Vitamin C deficiency','Vitamin D deficiency','Vitamin E deficiency'],
  expl:'These are classic features of rickets due to vitamin D deficiency, common in exclusively breastfed infants without supplementation.',
  note:'' },

{ n:61, pr:61, p:360, key:1,
  stem:'A three-day term infant born at home, exclusively breastfed, presents with lethargy and hematemesis. On examination, he is markedly pale but not jaundiced and has bulging anterior fontanel. His hemoglobin is 7.2 g/dL in venous blood gas (VBG) report. What is the most likely etiology of his illness?',
  opts:['Vitamin D deficiency','Vitamin K deficiency','Folate deficiency','Iron deficiency','Hypocalcemia'],
  expl:'Newborns who are exclusively breastfed and did not receive vitamin K prophylaxis can develop hemorrhagic disease of the newborn.',
  note:'' },

{ n:62, pr:62, p:362, key:4,
  stem:'An eleven-month-old boy presented to the emergency room with convulsions. He had a history of diarrhea for 3 days and was afebrile. His mother described that he was not thirsty and had no history of convulsions. Examination revealed a large head with wide anterior fontanelle, prominent costochondral junctions, and broad wrists. His eyes and skin pinch were normal, and rectal temperature was 37.8 °C. What is the emergency room initial treatment?',
  opts:['ORS','Antipyretic drug and cold fomentations','Low sodium IV fluids','IV Ceftriaxone','IV calcium gluconate'],
  expl:'The child has hypocalcemic seizures from vitamin D deficiency rickets. Emergency management is IV calcium gluconate.',
  note:'Paired vignette with n=71 (p.380): same clinical picture (infant with convulsions, diarrhea, large head/fontanelle, broad wrists, normal temp) but a different question — this one asks for initial treatment, n=71 asks for expected investigations. Not a duplicate.' },

{ n:63, pr:63, p:364, key:0,
  stem:'A 5-month-old infant is exclusively breastfed until yesterday when her mother started her on formula as she is planning to go back to work. The mother noticed that her baby developed an urticarial rash all over her body very soon after the formula feed. What is the most likely mechanism of this baby’s urticaria?',
  opts:['IgE-mediated cow milk allergy','Non-IgE mediated cow milk allergy','Non-allergic hypersensitivity','Lactose intolerance','Immune complex-mediated hypersensitivity reaction'],
  expl:'Immediate urticaria after exposure is due to IgE-mediated allergy. Non-IgE allergy causes delayed GI symptoms.',
  note:'' },

{ n:64, pr:64, p:366, key:3,
  stem:'What is the main cause of edema in kwashiorkor?',
  opts:['Proteinuria','Hepatomegaly','Elevated serum sodium','Low Protein intake','Protein loss in stools'],
  expl:'Hypoalbuminemia from protein deficiency leads to decreased oncotic pressure and edema.',
  note:'Option D prints "Low Protein intake" with a capital P mid-sentence, transcribed as printed.' },

{ n:65, pr:65, p:368, key:1,
  stem:'Which of the following is a feature of marasmus?',
  opts:['Dermatosis','Gross muscle wasting','Edema','Hair changes'],
  expl:'Marasmus = severe wasting without edema. Kwashiorkor shows edema and dermatosis.',
  note:'Printed number "65" repeats on p.370 (a different question); my n=65 here is correct for this page (pr matches n).' },

{ n:66, pr:65, p:370, key:0,
  stem:'Which of the following laboratory findings is diagnostic of infantile rickets?',
  opts:['Normal calcium level and low phosphorus level','Low calcium level and normal phosphorus level','High calcium level and low phosphorus level','High calcium level and normal phosphorus level','High calcium level and high phosphorus level'],
  expl:'Rickets typically shows low phosphate, normal/low calcium, and high alkaline phosphatase.',
  note:'Page prints "65", duplicating p.368’s printed number as flagged in the brief. My n=66 is used per instruction; pr:65 records what is actually printed. From this page onward the printed number trails n by one.' },

{ n:67, pr:66, p:372, key:0,
  stem:'Which of the following is a key sign of protein-energy malnutrition in infants?',
  opts:['Edema','Hyperactivity','Hypoactivity','Diarrhea','Polyuria'],
  expl:'Edema is a hallmark of protein-energy malnutrition, especially kwashiorkor. It results from low albumin and protein deficiency.',
  note:'' },

{ n:68, pr:67, p:374, key:3,
  stem:'Which vitamin is often deficient in breastfed infants?',
  opts:['Vitamin A','Vitamin B12','Vitamin C','Vitamin D','Vitamin E'],
  expl:'Exclusively breastfed infants often develop vitamin D deficiency, since breast milk is low in vitamin D. This can lead to rickets if not supplemented.',
  note:'' },

{ n:69, pr:68, p:376, key:0,
  stem:'A 6-month-old exclusively breastfed infant presents with wide anterior fontanelle and craniotabes. The mother follows a vegan diet and does not take any supplements. What is the most appropriate next step?',
  opts:['Begin Vitamin D supplementation','Start calcium supplementation','Introduce solid foods','Reassure and monitor','Perform skull X-rays'],
  expl:'The findings suggest rickets due to vitamin D deficiency, especially in a vegan mother not supplementing. Calcium deficiency is less likely.',
  note:'' },

{ n:70, pr:69, p:378, key:4,
  stem:'What is appropriate about the role of vitamins in children’s nutrition?',
  opts:['Folic acid has no role in blood production','Vitamin K main function is in the synthesis of RBCs','Vitamin E deficiency leads to decreased clot generation','Vitamin B12 deficiency is common in infants','Vitamin C deficiency can lead to petechiae and mucosal bleeding'],
  expl:'Vitamin C is required for collagen synthesis; deficiency causes scurvy with bleeding signs.',
  note:'Duplicate pair with n=58 (p.354): same five option statements REORDERED — n=58 keys the Vitamin C statement at position A, this page keys the identical statement at position E. Option B here prints "Vitamin K main function" (no possessive s); n=58 prints "Vitamin K’s main function" — transcribed as printed on each page.' },

{ n:71, pr:70, p:380, box:381, key:1,
  stem:'A 9-month-old boy presented to the emergency room with convulsions. He had a history of mild diarrhea for 3 days and was afebrile. His mother described that he was not thirsty and had no past history of convulsions. The examination revealed a large head, prominent fontanelles, and broad wrists. His eyes and skin were normal, and rectal temperature was 37.8°C. Which of the following is expected in his investigations?',
  opts:['Normal calcium level, low phosphate level, high alkaline phosphatase level','Low calcium level, low phosphate level, high alkaline phosphatase level','Low calcium level, normal phosphate level, normal alkaline phosphatase level','Normal calcium level, normal phosphate level, high alkaline phosphatase level','Low calcium level, normal phosphate level, high alkaline phosphatase level'],
  expl:'This 9-month-old with convulsions, large head, open fontanelles, and broad wrists has vitamin D deficiency rickets.\n• Vitamin D deficiency → ↓ calcium absorption → hypocalcemia.\n• Secondary hyperparathyroidism → ↑ phosphate excretion → hypophosphatemia.\n• Alkaline phosphatase ↑ due to active osteoblasts trying to mineralize bone.\nClassic labs in nutritional rickets = low calcium + low phosphate + high ALP.',
  note:'Box did not fit on the answered page and is printed alone on p.381 (italic bullet list, red/bold lead sentence). Paired vignette with n=62 (p.362) — same clinical picture, different question (investigations vs. treatment); not a duplicate.' },

{ n:72, pr:71, p:383, key:1,
  stem:'A 4-month-old baby girl is assessed by her general practitioner because of constant crying and poor feeding. She is fed by bottle on infant formula. Her mother tearfully complains that she is finding it very difficult to cope. Her development, growth, and physical examination are normal, but her stools frequently contain streaks of blood. What is the likely cause of the girl’s problem?',
  opts:['An inherited genetic condition','Cow’s milk protein allergy','Down syndrome','Gastroesophageal reflux','Cystic fibrosis'],
  expl:'Blood-streaked stools in an otherwise healthy infant suggest cow’s milk protein allergy. Reflux does not cause blood.',
  note:'' },

{ n:73, pr:72, p:385, key:3,
  stem:'Which of the following is considered a drawback of breastfeeding?',
  opts:['Reduces the risk of diabetes mellitus','Promotes maternal-child bonding','Provides passive immunity to the infant','May be harmful in some genetic disorders'],
  expl:'Generally breastfeeding is beneficial, but in rare metabolic disorders like galactosemia, it can be harmful.',
  note:'' },

{ n:74, pr:73, p:387, key:1,
  stem:'How does human milk oligosaccharides work?',
  opts:['Kill microorganisms','Function as prebiotics','Help protein absorption','Help lactose digestion','Prevent infant colic'],
  expl:'',
  note:'No explanation box printed on this page. Near-repeat of n=59 (p.356) — reworded stem ("What is the main benefit of...") and option B reworded ("Work as prebiotics"); otherwise identical options, same key position B.' },

{ n:75, pr:74, p:389, key:1,
  stem:'A 10-day-old infant is brought in by her parents, who are concerned that she is not breastfeeding well. The infant was born at term and has been exclusively breastfed. On examination, the baby is alert but has lost 10% of her birth weight. Which of the following is the next best step in management?',
  opts:['Advise immediate weaning and start formula','Encourage more frequent breastfeeding sessions','Introduce solid foods','Supplement with water between feeds'],
  expl:'A 10% weight loss is common in the first days but should improve. The best management is encouraging effective, frequent breastfeeding, not formula or water.',
  note:'' },

{ n:76, pr:75, p:391, key:1,
  stem:'Which specialized milk formula best suits infants with cow’s milk protein allergy?',
  opts:['Lactose free formula','Amino acid-based formula','Soy protein formula','Formula high in omega 3 fatty acids','Medium-chain fatty acids formula'],
  expl:'In cow’s milk protein allergy (CMPA), the immune system reacts to the proteins in cow’s milk (casein and whey). Therefore, formulas that still contain these proteins (even in modified form) can trigger allergic reactions.',
  note:'' }

];
