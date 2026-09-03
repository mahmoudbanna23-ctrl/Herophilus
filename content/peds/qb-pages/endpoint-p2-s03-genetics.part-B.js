/* endpoint part 2, section 3 "Genetics", HALF B (pp.201-243, answered pages only)
   Staged from Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf via
   <SCRATCH>\ep2-index\hires\pNNNN.png (native JPEG not opened where hires was clear).
   OCR (content\peds\qb-pages\ocr\ep2\) NOT opened during this pass -- used only as the
   page list given in the task prompt.
   n starts at 100 (non-overlapping base while Half A's true count is still unknown).
   pr = printed question number on the page. p = PDF page of the ANSWERED page staged.
   Range: answered pages 201,203,205,...,243 (22 pages, each preceded by its unanswered
   twin on the page before). Header extended as pages are read.

   Walk of printed numbers (pr), page by page: 17,18,19,20,21,22,23,24,24,25,25,26,27,
   28,29,30,31,32,33,34,35,36 -- pr repeats twice (24 at p.215+p.217, 25 at p.219+p.221),
   n stays strictly sequential 100-121 regardless (22 entries, no gaps, no folds).
   Boundary proof: p.245 rendered and read -- red banner slide "Hematological Disorders",
   the opening divider of section 4. Section 3 (Genetics) closes cleanly at p.243. */

{ n:17, pr:17, p:201, key:1,
  stem:'Olive is a 10-day-old baby with Down syndrome. On examination, you hear a loud heart murmur. What is the most likely cause?',
  opts:['Aortic stenosis','Atrioventricular septal defect','Coarctation of the aorta','Innocent murmur','Patent ductus arteriosus'],
  expl:'This is the most common cardiac defect in Down syndrome, resulting from endocardial cushion defects.',
  note:'p.201 clear on hires, no crop needed. Highlighted option seen: "B. Atrioventricular septal defect" (bold, underlined, yellow) = index 1. No figure. No twin at p.200 checked yet (not needed, page fully legible).' }

{ n:18, pr:18, p:203, key:3,
  stem:'Fiona is a well 4-year-old girl with Down syndrome. She attends her yearly follow-up appointment with her mother. There are no real problems other than constipation, for which her general practitioner has started treatment. When you plot Fiona on the Down syndrome growth chart, you notice that her height has dropped from the 75th centile to the 25th centile. Her weight, however, has increased from the 50th to the 75th centile. Which of the following investigations would you perform?',
  opts:['Coeliac screen','Abdominal ultrasound','Full blood count','Thyroid function tests'],
  expl:'Children with Down syndrome are at increased risk for hypothyroidism, which can cause growth deceleration and weight gain.',
  note:'Only 4 options printed (A-D), no E. Highlighted: "D. Thyroid function tests" (bold, underlined, yellow) = index 3. No figure. Clear on hires.' }

{ n:19, pr:19, p:205, key:3,
  stem:'Mary is an infant with Down syndrome. Her antenatal scans were normal, and an echocardiogram in the neonatal unit shortly after birth was also normal. She attends the community clinic at 4 weeks of age, thriving and feeding well. Her parents have many questions about future risks. Which condition is Mary at increased risk of developing compared to the general population?',
  opts:['Congenital heart disease','Duodenal atresia','Ischaemic heart disease','Leukaemia','Pyloric stenosis'],
  expl:'Children with Down syndrome have a significantly increased risk of developing acute lymphoblastic and myeloid leukemia.',
  note:'Highlighted: "D. Leukaemia" (bold, underlined, yellow) = index 3. No figure. Clear on hires.' }

{ n:20, pr:20, p:207, key:1,
  stem:"Mr. and Mrs. Walsh attend the clinic with their new baby, Ophelia, who has Down syndrome. They are keen to have further children and want to know more about their future risk of having children with Down syndrome. What chromosomal abnormality is most likely to have caused Ophelia's condition?",
  opts:['Mosaicism','Nondisjunction','Point mutation','Translocation','Triplet repeat expansion'],
  expl:'Most cases of Down syndrome are due to nondisjunction, a random error during meiosis. Risk increases with maternal age.',
  note:'Highlighted: "B. Nondisjunction" (bold, underlined, yellow) = index 1. No figure. Clear on hires.' }

{ n:21, pr:21, p:209, key:3,
  stem:'A Bangladeshi couple are referred for genetic counselling. Both parents are carriers of a faulty PEX1 gene; possession of two abnormal copies leads to death in infancy. They have lost two children who both died in the first 2 years of life and have one healthy daughter aged 3 years. What is the risk that their daughter is a carrier?',
  opts:['None','1 in 4','1 in 2','2 in 3','100%'],
  expl:'Unaffected siblings of affected children have a 2/3 chance of being carriers in autosomal recessive inheritance.',
  note:'Highlighted: "D. 2 in 3" (bold, underlined, yellow) = index 3. No figure. Clear on hires.' }

{ n:22, pr:22, p:211, key:4,
  stem:'George has Klinefelter syndrome. What is his karyotype?',
  opts:['46, XO','46, XY','45, XO','45, XY','47, XXY'],
  expl:'Unaffected siblings of affected children have a 2/3 chance of being carriers in autosomal recessive inheritance.',
  note:'Highlighted: "E. 47, XXY" (bold, underlined, yellow) = index 4. FINDING: the printed box text is IDENTICAL, word for word, to the box printed on p.209 (previous question, PEX1 carrier risk) and has nothing to do with Klinefelter/karyotype -- staged verbatim as printed, per the rule that a printed box is captured unmarked; escalating this mismatch rather than deciding it. No figure.' }

{ n:23, pr:23, p:213, key:1,
  stem:'Rachael is a 3-month-old girl who attends the Emergency Department because of rapid breathing. She is the seventh infant born to a 39-year-old mother. On developmental history, she smiled at 7 weeks but cannot yet hold her head unsupported. On examination, she is tachypnoeic, sweaty, and hypotonic. Her weight is below the 0.4th centile. What is the most likely diagnosis?',
  opts:['Achondroplasia','Down syndrome','Turner syndrome','Klinefelter syndrome','Prader-Willi syndrome'],
  expl:'Features including hypotonia, feeding issues, and developmental delay in a baby of advanced maternal age suggest Down syndrome.',
  note:'Highlighted: "B. Down syndrome" (bold, underlined, yellow) = index 1. No figure. Clear on hires.' }

{ n:24, pr:24, p:215, key:0,
  stem:'A paediatrician is asked to review a heart murmur in a 2-day-old baby born by vaginal delivery following an uneventful pregnancy to a 38-year-old primiparous mother. The baby has been feeding well. On examination, he is hypotonic and has single palmar creases and epicanthic folds. What is the most likely heart lesion?',
  opts:['Atrioventricular septal defect','Atrial septal defect','Aortic stenosis','Coarctation of the aorta','Patent ductus arteriosus'],
  expl:'This is the hallmark cardiac anomaly in infants with Down syndrome and presents early with a murmur.',
  note:'Highlighted: "A. Atrioventricular septal defect" (bold, underlined, yellow) = index 0. No figure. Clear on hires.' }

{ n:25, pr:24, p:217, key:0,
  stem:'Common forms of inheritance include autosomal dominant and autosomal recessive patterns. Which of the following conditions is autosomal dominant?',
  opts:['Neurofibromatosis type 1','Cystic fibrosis','Sickle cell disease','Haemophilia A','Duchenne muscular dystrophy'],
  expl:'Neurofibromatosis type 1 is inherited in an autosomal dominant pattern, meaning only one copy of the defective gene is sufficient to cause the condition. In contrast, cystic fibrosis and sickle cell disease are autosomal recessive, and hemophilia A and Duchenne muscular dystrophy are X-linked.',
  note:'FINDING: printed number is "24" again, a repeat of the previous page (p.215 also prints 24) -- staged as printed, n kept strictly sequential per the true walk. Highlighted: "A. Neurofibromatosis type 1" (bold, underlined, yellow) = index 0. No figure. Clear on hires.' }

{ n:26, pr:25, p:219, key:3,
  stem:'A 6-year-old boy attends the outpatient clinic with a diagnosis of Down syndrome. He has been pale and lethargic for the last 4 weeks and has some bruises on his shins. Which of the following conditions is important to rule out given his underlying diagnosis?',
  opts:['Parvovirus infection','ITP','Haemophilia A','Acute leukaemia','Henoch-Schönlein purpura'],
  expl:'Children with Down syndrome are at increased risk of developing acute leukemia, especially acute lymphoblastic or myeloid leukemia. Unexplained pallor, lethargy, and bruising warrant prompt evaluation.',
  note:'Highlighted: "D. Acute leukaemia" (bold, underlined, yellow) = index 3. No figure. Clear on hires.' }

{ n:27, pr:25, p:221, key:1,
  stem:'Down syndrome is the most common form of trisomy encountered in children and occurs on chromosome 21. Which of the following statements is true?',
  opts:['Most babies with Down syndrome are born to older mothers','Males are frequently infertile','The incidence is 1 in 1,400','Epicanthic folds are pathognomonic','The majority have severe intellectual impairment'],
  expl:'Most males with Down syndrome are infertile due to abnormal spermatogenesis. While incidence increases with maternal age, most cases still occur in younger mothers due to higher birth rates in that group.',
  note:'FINDING: printed number is "25" again, repeating the previous page (p.219 also prints 25). Highlighted: "B. Males are frequently infertile" (bold, underlined, yellow) = index 1. No figure. Clear on hires.' }

{ n:28, pr:26, p:223, key:2,
  stem:'A 14-year-old girl attends a clinic due to concerns about her height. She is on the 9th centile. On examination, she has not developed secondary sexual characteristics, has a square-shaped chest, webbed neck, and short 4th metacarpals. What is the most likely cause of her short stature?',
  opts:['Hypothyroidism','Constitutional short stature','Turner syndrome','Growth hormone deficiency','Russell-Silver syndrome'],
  expl:'The constellation of features—including short stature, delayed puberty, webbed neck, and short 4th metacarpals is characteristic of Turner syndrome (45,X).',
  note:'Highlighted: "C. Turner syndrome" (bold, underlined, yellow) = index 2. No figure. Clear on hires.' }

{ n:29, pr:27, p:225, key:0,
  stem:'A newborn infant with features of Down syndrome develops vomiting on day 1 of life. The pregnancy was complicated by polyhydramnios. On examination, he is well-perfused, his abdomen is soft, and his anus is patent. He has not opened his bowels yet. Which of the following is the most useful initial investigation to make a diagnosis?',
  opts:['Plain abdominal radiograph','Abdominal ultrasound scan','CT abdomen','MRI abdomen','Barium follow-through'],
  expl:'A plain abdominal X-ray is the first-line investigation to assess for duodenal atresia, which commonly presents in infants with Down syndrome and causes the “double bubble” sign.',
  note:'Highlighted: "A. Plain abdominal radiograph" (bold, underlined, yellow) = index 0. No figure. Clear on hires. Curly quotes around double bubble reproduced verbatim as printed.' }

{ n:30, pr:28, p:227, key:2,
  stem:'Which type of inheritance is expected if a woman with a genetic disorder can have affected offspring of either sex, but an affected father cannot pass on the disease to his offspring?',
  opts:['Pseudogenetic Inheritance','Digenic inheritance','Mitochondrial inheritance','Autosomal recessive inheritance','Autosomal dominant inheritance'],
  expl:'Mitochondrial DNA is inherited only from the mother. Affected mothers can transmit the condition to all children, but affected fathers do not pass it on.',
  note:'Highlighted: "C. Mitochondrial inheritance" (bold, underlined, yellow) = index 2. No figure. Clear on hires. Option A capitalised mid-phrase ("Pseudogenetic Inheritance") as printed, reproduced verbatim.' }

{ n:31, pr:29, p:229, key:2,
  stem:'A couple of 38-year-old husband and a 23-year-old wife with Down syndrome consult you because the husband is planning to have a baby, he asks you about the chance of having a baby with Down syndrome, if his wife becomes pregnant. Your proper answer, the chance of having Down syndrome is:',
  opts:['5%','25%','50%','75%','100%'],
  expl:"Women with Down syndrome can occasionally conceive, and because they have trisomy 21, there's a 50% chance they will pass on the extra chromosome.",
  note:'Highlighted: "C. 50%" (bold, underlined, yellow) = index 2. No figure. Clear on hires.' }

{ n:32, pr:30, p:231, key:0,
  stem:"Which of the following is a Hall's criterion to aid in diagnosis of Down syndrome?",
  opts:['Upward slanted palpebral fissures','Epicanthal folds','Speckled irises (Brushfield spots)','Three fontanels','Mild microcephaly'],
  expl:'Hall’s criteria are used clinically to help identify Down syndrome, and upward slanted palpebral fissures are one of the classic facial features included.',
  note:'Highlighted: "A. Upward slanted palpebral fissures" (bold, underlined, yellow) = index 0. No figure. Clear on hires. Stem uses straight apostrophe in "Hall\'s", box uses curly apostrophe in "Hall’s criteria" -- both reproduced verbatim as printed.' }

{ n:33, pr:31, p:233, key:1,
  stem:'Which of the following tests is diagnostic and considered as an important advance in prenatal diagnosis of Down syndrome?',
  opts:['Free β-human chorionic gonadotropin {β-hCG}','Detection of cell-free fetal DNA in maternal plasma','Unconjugated estriol','α-fetoprotein','Fetal nuchal translucency (NT) thickness'],
  expl:'This non-invasive prenatal testing (NIPT) method detects fetal chromosomal abnormalities like trisomy 21 with high sensitivity and specificity using maternal blood.',
  note:'Highlighted: "B. Detection of cell-free fetal DNA in maternal plasma" (bold, underlined, yellow) = index 1. No figure. Clear on hires. Option A prints curly braces {β-hCG} instead of parentheses -- reproduced verbatim as printed.' }

{ n:34, pr:32, p:235, key:2,
  stem:'A 3-week-old small for gestational age newborn presents with webbing of the neck, protruding ears, and non-pitting swellings of the hands and feet. Echo shows bicuspid aortic valve with coarctation of the aorta.\nWhich of the following is the MOST likely diagnosis ?',
  opts:['Noonan syndrome','Trisomy X syndrome','Turner syndrome','Jacobsen syndrome','Kallmann syndrome'],
  expl:'Non-pitting edema, webbed neck, and congenital heart defects like coarctation of the aorta are hallmark features of Turner syndrome (45,X).',
  note:'Highlighted: "C. Turner syndrome" (bold, underlined, yellow) = index 2. No figure. Clear on hires. Stem prints as two sentences/lines on the slide (case then question); space before the question mark ("diagnosis ?") reproduced verbatim.' }

{ n:35, pr:33, p:237, key:4,
  stem:'Jane, a 40-year-old pregnant woman at 14w gestation underwent routine screening maternal serum screening (triple screen examination). She has been taking folic acid 1m before conception till now. Results show elevated alpha-fetoprotein (AFP). These are the likely causes of increased alpha-fetoprotein in Jane EXCEPT:',
  opts:['Anencephaly','Liver necrosis','Sacrococcygeal teratoma','Spina bifida','Trisomy 21'],
  expl:'',
  note:'Highlighted: "e. Trisomy 21" (bold, underlined, yellow) = index 4. No explanation box printed on this page (expl left empty). No figure. Clear on hires. This page prints options as lowercase a-e rather than the A-E used elsewhere in the section, reproduced as-is (letter prefixes stripped from opts per schema either way).' }

{ n:36, pr:34, p:239, key:3,
  stem:'The female marked with an arrow in the opposite figure is planning to start a family. If she were to give birth to a son, what would be the risk of him being affected by the disorder?',
  opts:['1 in 1','1 in 2','1 in 3','1 in 4','1 in 5'],
  fig:'A three-generation family pedigree diagram (schematic, circles = females, squares = males, shaded symbols = affected individuals, unshaded = unaffected). Generation I: one unaffected couple. Generation II: their children, including two shaded (affected) individuals among unaffected siblings, one of whom married in and has further children with an unaffected spouse. Generation III: several children shown, including one shaded male; an arrow points to one unaffected female in generation III, marking her as the individual in the question.',
  figAlt:'Three-generation pedigree chart with an arrow marking one individual.',
  expl:'',
  note:'No explanation box printed on this page. Highlighted: "D. 1 in 4" (bold, underlined, yellow) = index 3. Figure described by layout only (symbol shapes/shading and generation structure), no inheritance pattern or diagnosis stated in fig/figAlt per instructions.' }

{ n:37, pr:35, p:241, key:3,
  stem:"Gemma and Mark, who are both well, are planning to start a family. Gemma's older brother has cystic fibrosis. There is no history of cystic fibrosis in Mark's family. The family tree is shown in the opposite figure. What is the chance that they will have a child with cystic fibrosis? The carrier rate in their population is 1 in 25.\nSelect one answer only.",
  opts:['1 in 6','1 in 37.5','1 in 100','1 in 150','1 in 2,500'],
  fig:'A two-family pedigree diagram (circles = females, squares = males). Left family: a half-shaded circle paired with a half-shaded square, with three children below -- two unshaded circles and one fully shaded square, plus a fourth unshaded circle labelled "Gemma". Right family: an unshaded circle paired with an unshaded square, with one child, an unshaded square labelled "Mark", shown paired with Gemma.',
  figAlt:'Two-family pedigree chart labelled Gemma and Mark.',
  expl:'',
  note:'No explanation box printed on this page. Highlighted: "D. 1 in 150" (bold, underlined, yellow) = index 3. "Select one answer only." kept in stem as printed (part of the slide text, not an instruction to omit). Figure described by symbol shading/layout only, no allele or risk conclusion stated in fig/figAlt.' }

{ n:38, pr:36, p:243, key:0,
  stem:'A mother comes to see the geneticist. She has two children, Robert and Elizabeth, both of whom suffer from a genetic disorder. The geneticist takes a history and draws a family tree (see opposite figure). What is the likely pattern of inheritance of this disorder?',
  opts:['Autosomal dominant','Autosomal recessive','Imprinting from uniparental disomy','X-linked dominant','X-linked recessive'],
  fig:'A three-generation pedigree diagram (circles = females, squares = males, shaded symbols = affected). Generation I: one unaffected couple. Generation II: four of their children -- a shaded circle, an unshaded circle married to an unshaded square, an unshaded square, and a shaded circle -- with shaded and unshaded individuals of both sexes present. Generation III: further children below each generation-II individual/couple, again a mix of shaded and unshaded circles and squares.',
  figAlt:'Three-generation pedigree chart.',
  expl:'',
  note:'No explanation box printed on this page. Highlighted: "A. Autosomal dominant" (bold, underlined, yellow) = index 0. Faint background text is visible behind/above the pedigree image but is illegible at 150dpi hires and not a printed answer element -- not transcribed; if it matters, escalate for a 300dpi crop. Figure described by symbol shape/shading and generation layout only, no inheritance-pattern conclusion stated in fig/figAlt.' }
