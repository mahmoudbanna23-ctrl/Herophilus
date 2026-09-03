/* ===========================================================================
   ENDPOINT - Pediatrics endpoint part1.pdf - SECTION 6: "Perinatal"
   Verbatim staging record. PDF pages 703-773; PDF page = printed page, offset zero.
   Merged from endpoint-s06-perinatal.part-A.js + endpoint-s06-perinatal.part-B.js by merge-parts-ep.js.
   
   Every question is printed TWICE: an unanswered page, then the ANSWERED page with the key
   highlighted in yellow and (usually) a bordered explanation box. Only answered pages are
   staged. `n` is the true sequential index, `pr` what the page prints, `p` the PDF page,
   `key` a ZERO-BASED INDEX into `opts` (never a letter), matching the app field `answer`,
   `expl` the printed box verbatim or "".
   =========================================================================== */
var PEDEP_S06_STAGED = [

{
  n: 1,
  pr: 1,
  p: 728,
  key: 0,
  stem: 'A mother has just found out she is pregnant and asks for advice about how to look after her health and nutrition during pregnancy. She smokes 15 cigarettes a day. You recommend she gives up smoking. If she continues to smoke despite your advice, the baby is at increased risk of which of the following health problems?',
  opts: ['Growth restriction', 'Dysmorphic syndromes', 'Neural tube defects', 'Shoulder dystocia', 'Vitamin D deficiency'],
  expl: 'Smoking during pregnancy reduces placental blood flow and oxygen delivery, increasing the risk of intrauterine growth restriction (IUGR). It is a well-established modifiable risk factor.',
  note: 'key highlighted A'
},

{
  n: 2,
  pr: 2,
  p: 730,
  key: 3,
  stem: 'At the 20-week routine antenatal scan, the sonographer notes normal abdominal and head circumferences but an abnormally small amount of amniotic fluid (oligohydramnios). What is the most likely cause?',
  opts: ['Duodenal atresia', 'Gastroschisis', 'Maternal diabetes', 'Poorly functioning fetal kidneys', 'Severe intrauterine growth restriction'],
  expl: 'Amniotic fluid is primarily produced by fetal kidneys from the second trimester onward. Renal dysfunction leads to reduced urine output and hence low amniotic fluid.',
  note: 'key highlighted D'
},

{
  n: 3,
  pr: 3,
  p: 732,
  key: 4,
  stem: 'At 32 weeks\' gestation, a mother\'s symphysis–fundal height is smaller than expected. Ultrasound confirms intrauterine growth restriction. Which ultrasound feature is of most concern?',
  opts: ['Accelerations of fetal heart rate', 'Active fetal movements', 'Breech presentation', 'Fetal breathing movements seen', 'Reverse end-diastolic flow in the umbilical artery'],
  expl: 'This indicates increased placental resistance and is a sign of fetal compromise. It may warrant urgent delivery depending on gestational age.',
  note: 'key highlighted E'
},

{
  n: 4,
  pr: 4,
  p: 734,
  key: 0,
  stem: 'A mother is pregnant with dichorionic, diamniotic twins. Which condition carries the greatest increased risk in this pregnancy?',
  opts: ['Congenital abnormalities', 'Gestational diabetes', 'Macrosomia', 'Post-term gestation', 'Twin-to-twin transfusion'],
  expl: 'Twin pregnancies are associated with a higher rate of congenital malformations, especially in dichorionic pregnancies. Twin-to-twin transfusion is more common in monochorionic twins.',
  note: 'key highlighted A'
},

{
  n: 5,
  pr: 5,
  p: 736,
  key: 1,
  stem: 'During a routine newborn examination at 20 hours old, which of the following findings requires further immediate assessment?',
  opts: ['Acrocyanosis (cyanosis of hands and feet)', 'A heart murmur', 'An undescended testis', 'Breast enlargement', 'Subconjunctival haemorrhages'],
  expl: 'A heart murmur may indicate congenital heart disease. Early evaluation, especially if symptomatic, is critical.',
  note: 'key highlighted B'
},

{
  n: 6,
  pr: 6,
  p: 738,
  key: 2,
  stem: 'A black mother at 32 weeks is found to have glycosuria and is diagnosed with gestational diabetes. What is her newborn baby most at risk of?',
  opts: ['Anaemia', 'Hyperglycaemia', 'Respiratory distress syndrome', 'Neonatal bacterial infection', 'Neonatal type 1 diabetes mellitus'],
  expl: 'Maternal hyperglycemia delays surfactant production, increasing the risk of RDS. This occurs even in term infants of diabetic mothers.',
  note: 'key highlighted C'
},

{
  n: 7,
  pr: 7,
  p: 740,
  key: 0,
  stem: 'A newborn has hepatosplenomegaly, petechial rash, and fails the hearing screen. Red reflex and cardiac exam are normal. The mother\'s antenatal bloods were normal. What is the most likely congenital infection?',
  opts: ['Cytomegalovirus (CMV)', 'Rubella', 'Syphilis', 'Toxoplasmosis', 'Varicella zoster'],
  expl: 'CMV is the most common congenital infection and the leading cause of non-hereditary sensorineural hearing loss. Antenatal screening does not typically include CMV.',
  note: 'key highlighted A'
},

{
  n: 8,
  pr: 8,
  p: 742,
  key: 3,
  stem: 'A male infant is born at term. At 1 minute of age he is breathing regularly and has a heart rate of 140 beats/min. He is grimacing but has not yet cried. He is pink centrally but still blue around his extremities and his tone is reduced although he has good limb flexion but is not actively moving his limbs. What is his Apgar score at one minute?',
  opts: ['10', '9', '8', '7', '6'],
  expl: '',
  note: 'key highlighted D (score 7). p.741 was flagged by the OCR index as \'other\' rather than \'question\', but on visual inspection it is an ordinary question page matching this pair (Q8, Apgar scenario) -- staged normally. p.742 prints a breakdown table (Component/Clinical Finding/Score/Explanation: Heart Rate 140=2, Respiratory Effort regular=2, Reflex Irritability grimacing not crying=1, Muscle Tone reduced good flexion=1, Color pink centrally blue extremities=1, total=7) plus the standard APGAR reference table (Appearance/Pulse/Grimace/Activity/Respiration x 0/1/2 points) alongside the options -- these serve as the explanation; no separate prose explanation box is printed, so expl is empty and the table content is summarized here instead of invented as fig.'
},

{
  n: 9,
  pr: 9,
  p: 744,
  key: 3,
  stem: 'A 37-week infant born to a pre-eclamptic mother with IUGR weighs 2.2 kg. What is he most at risk of?',
  opts: ['Anaemia', 'Congenital cardiac abnormality', 'Group B streptococcus infection', 'Hypoglycaemia', 'Hypercalcaemia'],
  expl: 'IUGR babies have reduced glycogen and fat stores, predisposing them to hypoglycemia. Early feeding and glucose monitoring are essential.',
  note: 'key highlighted D'
},

{
  n: 10,
  pr: 10,
  p: 746,
  key: 2,
  stem: 'A well 2-day-old forceps-delivered baby has a rash that moves around the body. What is the most likely diagnosis?',
  opts: ['Bruising', 'Milia', 'Erythema toxicum', 'Mongolian blue spots', 'Neonatal varicella zoster'],
  expl: 'Erythema toxicum is a common, benign newborn rash that appears in the first few days of life and may migrate. No treatment is needed.',
  note: 'key highlighted C'
},

{
  n: 11,
  pr: 11,
  p: 748,
  key: 3,
  stem: 'A 1-month-old has a red mark on her face that has not changed since birth. What is the most likely diagnosis?',
  opts: ['Bruising', 'Milia', 'Erythema toxicum', 'Port-wine stain (naevus flammeus)', 'Strawberry naevus (cavernous haemangioma)'],
  expl: 'Port-wine stains are flat, persistent capillary malformations. They do not resolve spontaneously and may require laser treatment.',
  note: 'key highlighted D. Options A-C repeat verbatim from n10 (Q10, p.746) -- same option-menu template, different stem/key/topic (this asks about a fixed red mark vs. a migrating rash); not a fold.'
},

{
  n: 12,
  pr: 12,
  p: 750,
  key: 1,
  stem: 'A 4-day-old infant has small white spots on the nose and cheeks. Feeding well. Most likely diagnosis?',
  opts: ['Group B streptococcal infection', 'Milia', 'Erythema toxicum', 'Mongolian blue spots', 'Neonatal varicella zoster'],
  expl: 'Milia are benign inclusion cysts filled with keratin. They resolve spontaneously without treatment.',
  note: 'key highlighted B'
},

{
  n: 13,
  pr: 13,
  p: 752,
  key: 4,
  stem: 'A 2-month-old ex-preterm has a growing soft red mass on her forehead, first noted at 3 weeks. What is the diagnosis?',
  opts: ['Bruising', 'Milia', 'Erythema toxicum', 'Port-wine stain', 'Strawberry naevus (cavernous haemangioma)'],
  expl: 'Strawberry haemangiomas appear in the first few weeks of life and grow rapidly. Most resolve spontaneously by age 5–7.',
  note: 'key highlighted E'
},

{
  n: 14,
  pr: 14,
  p: 754,
  key: 3,
  stem: 'A 3-day-old Black infant has blue/black macules on the back and buttocks. What is the diagnosis?',
  opts: ['Bruising', 'Milia', 'Erythema toxicum', 'Mongolian blue spots', 'Neonatal varicella zoster'],
  expl: 'These are benign dermal melanocytosis commonly found in darker-skinned infants. They fade with age and require no treatment.',
  note: 'key highlighted D. Shares options B-E with n12 (n12\'s A is "Group B streptococcal infection" instead of "Bruising"); shares options A-C with n13 (n13\'s D/E are "Port-wine stain"/"Strawberry naevus" instead of "Mongolian blue spots"/"Neonatal varicella zoster"). Discriminating token each time is the diagnosis in the highlighted option.'
},

{
  n: 15,
  pr: 15,
  p: 756,
  key: 3,
  stem: 'A mother asks what conditions cannot be accurately diagnosed by amniocentesis. Which one is the exception?',
  opts: ['Sickle cell disease', 'Down syndrome', 'Fragile X syndrome', 'Spina bifida', 'Cystic fibrosis'],
  expl: 'Spina bifida is usually screened via maternal serum AFP and detailed ultrasound. It is not reliably diagnosed through amniocentesis alone.',
  note: 'key highlighted D. Page also prints a reference table (all rows highlighted yellow, for this same question only, not a different one): Condition | Diagnosable by Amniocentesis? | Method of Diagnosis -- Sickle cell disease | Yes | DNA analysis from amniotic fluid cells; Down syndrome | Yes | Chromosomal karyotyping; Fragile X syndrome | Yes | Molecular genetic testing; Spina bifida | No | AFP screening + ultrasound; amniocentesis used adjunctively; Cystic fibrosis | Yes | CFTR gene mutation analysis.'
},

{
  n: 16,
  pr: 16,
  p: 758,
  key: 0,
  stem: 'Which is most often fractured bone in difficult deliveries?',
  opts: ['clavicle', 'humerus', 'skull', 'femur', 'tibia'],
  expl: 'The clavicle is the most commonly fractured bone during difficult deliveries, especially in shoulder dystocia or large infants. It usually heals well without intervention.',
  note: 'key highlighted a. Options printed lower-case a-e on this page (unlike n12-15, printed upper-case A-E).'
},

{
  n: 17,
  pr: 17,
  p: 760,
  key: 1,
  stem: 'Very low birth weight infants are those who have:',
  opts: ['birth weight less than 1750 gm', 'birth weight less than 1500 gm', 'birth weight less than 2500 gm', 'birth weight less than 1000 gm', 'birth weight less than 500 gm'],
  expl: 'Classification: Low birth weight <2500 g, very low birth weight <1500 g, and extremely low birth weight <1000 g. This categorization helps guide neonatal risk assessment and care.',
  note: 'key highlighted b'
},

{
  n: 18,
  pr: 18,
  p: 762,
  key: 2,
  stem: 'In intrauterine life, which of the following is TRUE?',
  opts: ['Oxygen saturation is higher in the lower body than upper body', 'Blood passes from the aorta to the pulmonary artery via the ductus arteriosus', 'There is a shift to the left of the oxygen dissociation curve of fetal hemoglobin', 'Fetal hypoxia results in secondary apnea after birth'],
  expl: 'Fetal hemoglobin (HbF) has higher oxygen affinity than adult hemoglobin, shifting the dissociation curve to the left. This facilitates oxygen transfer from maternal to fetal blood.',
  note: 'key highlighted c. Only 4 options printed (a-d), no fifth option on this page.'
},

{
  n: 19,
  pr: 19,
  p: 764,
  key: 4,
  stem: 'An infant was born at 36 weeks of gestation to a 30-year-old G3P2 mother via spontaneous vaginal delivery. Rupture of membranes occurred 15 hours prior to delivery. Birth weight is 4000 g, and Apgar scores were 6 and 9 at 1 and 5 minutes, respectively. Which of the following factors places this infant at greatest risk for sepsis?',
  opts: ['Maternal age', 'Gestational size', 'Apgar score', 'Length of time membranes were ruptured', 'Gestational age'],
  expl: 'Prematurity places this baby at greater risk for sepsis. Young maternal age, low birth weight, rupture of membranes greater than 18 hours, initial Apgar less than 5, and maternal fever are additional risk factors for sepsis.',
  note: 'key highlighted E. Vignette values (30yo mother, 4000g birth weight, ROM 15h, Apgar 6/9) do not individually cross the risk thresholds given in the explanation (ROM >18h, Apgar <5) -- explanation supports gestational age (36wk, preterm) as the correct risk factor here; transcribed as printed, no dispute.'
},

{
  n: 20,
  pr: 20,
  p: 766,
  key: 0,
  stem: 'A 13-month-old child is noted to be at the 25th percentile for weight, the 10th percentile for height, and less than the 5th percentile for head circumference. She was born at term. She was noted to have a small head at birth, be developmentally delayed throughout her life, and have required cataract surgery shortly after birth. She currently takes phenobarbital for seizures. Caloric intake has been deemed appropriate by history, and neither frequent emesis nor excessive stooling is reported. Her examination is remarkable for a small head and liver enlargement on abdominal palpation. Which of the following would most likely explain this child\'s small size?',
  opts: ['Congenital infection', 'Chromosomal abnormality', 'Metabolic disorder', 'Gastrointestinal dysmotility', 'Increased intracranial pressure'],
  expl: 'Features such as microcephaly, cataracts, seizures, and hepatomegaly suggest congenital TORCH infections (e.g., rubella, CMV). These infections often cause growth restriction and developmental delay.',
  note: 'key highlighted A'
},

{
  n: 21,
  pr: 21,
  p: 768,
  key: 3,
  stem: 'Which problem is commonly associated with large for gestational age infants?',
  opts: ['Hyperglycemia', 'Hypercalcemia', 'Anemia', 'Birth asphyxia', 'Heart failure'],
  expl: 'LGA infants, often of diabetic mothers, are prone to shoulder dystocia, birth trauma, and birth asphyxia.',
  note: 'key highlighted D. FLAGGED AS EXPECTED REPRINT per brief -- content is about large-for-gestational-age (LGA) infant complications (shoulder dystocia, birth trauma, birth asphyxia), not obviously a growth/puberty topic as the brief anticipated; could not identify the specific earlier page it reprints without access to that part of the book -- staged in full regardless, per instructions.'
},

{
  n: 22,
  pr: 22,
  p: 770,
  key: 4,
  stem: 'Which complication is most likely in an infant of a diabetic mother?',
  opts: ['Microsomia', 'Hyperglycemia', 'Anemia', 'Hypercalcemia', 'Hypertrophic cardiomyopathy'],
  expl: 'Infants of diabetic mothers are prone to macrosomia, hypoglycemia, hypocalcemia, and transient hypertrophic cardiomyopathy due to fetal hyperinsulinism.',
  note: 'key highlighted E'
},

{
  n: 23,
  pr: 23,
  p: 772,
  key: 2,
  stem: 'Which of the following describes part of fetal circulation?',
  opts: ['100% of the cardiac output goes to the lungs via the pulmonary artery', 'The ductus arteriosus helps sending oxygenated blood to the brain', 'The foramen ovale closes with the first breaths', 'Blood shunts across the duct arteriosus from the aorta to the pulmonary artery'],
  expl: 'With the first breaths, pulmonary vascular resistance falls, left atrial pressure rises, and the foramen ovale closes functionally.',
  note: 'key highlighted C. Only 4 options printed (A-D), no fifth option on this page. Option D prints "duct arteriosus" (not "ductus arteriosus" as in option B) -- transcribed verbatim as printed.'
}

];
