/* Section 6 "Perinatal" — half A (n1-11, PDF pp.728-748).
   Drafted from content/peds/qb-pages/endpoint-s06-perinatal.array.js (PEDEP_S06_STAGED).
   Bare fragments; splicer strips this header. */

{
  id: 'pedep-per-1',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal',
  stem: 'A mother has just found out she is pregnant and asks for advice about how to look after her health and nutrition during pregnancy. She smokes 15 cigarettes a day. You recommend she gives up smoking. If she continues to smoke despite your advice, the baby is at increased risk of which of the following health problems?',
  options: ['Growth restriction', 'Dysmorphic syndromes', 'Neural tube defects', 'Shoulder dystocia', 'Vitamin D deficiency'],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> Smoking during pregnancy reduces placental blood flow and oxygen delivery, increasing the risk of intrauterine growth restriction (IUGR). It is a well-established modifiable risk factor.\n\n---\n\nMaternal smoking causes chronic placental vasoconstriction and raises maternal carboxyhaemoglobin, so less oxygen and fewer nutrients cross to the fetus across the whole pregnancy — a steady insult that restricts growth rather than disrupting organ formation at one point in time. `7) Intro to neonatology.txt` lists "maternal heavy cigarette smoking" directly alongside maternal diabetes and pre-eclampsia among the causes of a small-for-gestational-age infant.\n\n**Why each wrong option is wrong.** *Dysmorphic syndromes* describes a structural embryopathy such as fetal alcohol syndrome — alcohol, not tobacco, is the classic teratogen that dysmorphs the face. *Neural tube defects* trace to periconceptional folate deficiency, not smoking. *Shoulder dystocia* is a complication of a large baby (macrosomia, as in gestational diabetes) — smoking produces the opposite phenotype, a small baby. *Vitamin D deficiency* is a maternal nutritional problem, not a smoking effect.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise maternal smoking as a modifiable cause of fetal growth restriction.',
  source: 'Pediatrics endpoint part1.pdf p.728'
},

{
  id: 'pedep-per-2',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal',
  stem: 'At the 20-week routine antenatal scan, the sonographer notes normal abdominal and head circumferences but an abnormally small amount of amniotic fluid (oligohydramnios). What is the most likely cause?',
  options: ['Duodenal atresia', 'Gastroschisis', 'Maternal diabetes', 'Poorly functioning fetal kidneys', 'Severe intrauterine growth restriction'],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> Amniotic fluid is primarily produced by fetal kidneys from the second trimester onward. Renal dysfunction leads to reduced urine output and hence low amniotic fluid.\n\n---\n\nBefore mid-gestation, amniotic fluid is mostly a transudate across fetal skin; from the second trimester onward fetal urine becomes the dominant source, so a fetus that is not passing urine cannot maintain fluid volume. `40)Congenital anomalies of the kidneys and the urinary tracts 5 th year.txt` gives the extreme case of this principle: bilateral renal agenesis causes severe oligohydramnios and the resulting Potter sequence.\n\n**Why each wrong option is wrong.** *Duodenal atresia* blocks fetal swallowing of amniotic fluid, so it causes **polyhydramnios**, not oligohydramnios. *Gastroschisis* does not impair renal urine output and is not the typical cause of isolated oligohydramnios. *Maternal diabetes* classically causes fetal polyuria from hyperglycaemia-driven osmotic diuresis, producing **polyhydramnios**. *Severe IUGR* is excluded by the stem itself — the abdominal and head circumferences are stated as normal, which a growth-restricted fetus would not show.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Link oligohydramnios found on a normally-grown fetus to reduced fetal urine output.',
  source: 'Pediatrics endpoint part1.pdf p.730'
},

{
  id: 'pedep-per-3',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal',
  stem: 'At 32 weeks\' gestation, a mother\'s symphysis–fundal height is smaller than expected. Ultrasound confirms intrauterine growth restriction. Which ultrasound feature is of most concern?',
  options: ['Accelerations of fetal heart rate', 'Active fetal movements', 'Breech presentation', 'Fetal breathing movements seen', 'Reverse end-diastolic flow in the umbilical artery'],
  answer: 4,
  explanation: '**The endpoint file prints this explanation:**\n\n> This indicates increased placental resistance and is a sign of fetal compromise. It may warrant urgent delivery depending on gestational age.\n\n---\n\nUmbilical artery Doppler tracks how easily blood empties from the fetus into the placenta during diastole. As placental vascular resistance rises with worsening insufficiency, diastolic flow first falls, then disappears (absent end-diastolic flow), and finally reverses — blood is pushed backward toward the fetus between contractions of the fetal heart. Reversed flow is the most severe of these findings and signals a fetus close to decompensation *(the absent-then-reversed sequence itself is standard obstetric teaching and is not detailed in the cached neonatology deck — not taken from the course material)*.\n\n**Why each wrong option is wrong.** Fetal heart rate accelerations, active fetal movements and fetal breathing movements are all **reassuring** biophysical signs — their presence argues against, not for, fetal compromise. Breech presentation is a positional finding with no bearing on placental function or fetal wellbeing.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Identify reverse end-diastolic umbilical artery flow as the most severe Doppler marker of placental insufficiency.',
  source: 'Pediatrics endpoint part1.pdf p.732'
},

{
  id: 'pedep-per-4',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal',
  stem: 'A mother is pregnant with dichorionic, diamniotic twins. Which condition carries the greatest increased risk in this pregnancy?',
  options: ['Congenital abnormalities', 'Gestational diabetes', 'Macrosomia', 'Post-term gestation', 'Twin-to-twin transfusion'],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> Twin pregnancies are associated with a higher rate of congenital malformations, especially in dichorionic pregnancies. Twin-to-twin transfusion is more common in monochorionic twins.\n\n---\n\nDichorionic, diamniotic twins each have their own placenta, so the vascular anastomoses that cause twin-to-twin transfusion syndrome (TTTS) cannot form — TTTS is a disease of a **shared** monochorionic placenta. What dichorionic twinning does raise is the baseline rate of structural malformations, roughly double the singleton rate *(the exact multiple is general obstetric teaching, not stated in the cached decks — not taken from the course material)*, which is why this is the option the vignette is testing.\n\n**Why each wrong option is wrong.** *Gestational diabetes* and *macrosomia* are maternal-metabolic and growth complications with no particular link to chorionicity. *Post-term gestation* is, if anything, less likely in twins — twin pregnancies deliver earlier than singletons on average. *Twin-to-twin transfusion* is the trap: it is the twin complication students remember first, but it requires the monochorionic placenta this vignette specifically excludes.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Distinguish complications specific to monochorionic twinning (TTTS) from those raised by twinning generally (congenital abnormalities).',
  source: 'Pediatrics endpoint part1.pdf p.734'
},

{
  id: 'pedep-per-5',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal',
  stem: 'During a routine newborn examination at 20 hours old, which of the following findings requires further immediate assessment?',
  options: ['Acrocyanosis (cyanosis of hands and feet)', 'A heart murmur', 'An undescended testis', 'Breast enlargement', 'Subconjunctival haemorrhages'],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> A heart murmur may indicate congenital heart disease. Early evaluation, especially if symptomatic, is critical.\n\n---\n\nNot every newborn murmur is pathological, but every one needs to be checked against the criteria for an innocent murmur before it can be dismissed. `33)Congenital acyanotic heart disease_.txt` gives that checklist: the infant must be asymptomatic, the murmur soft and blowing, systolic only (never diastolic), best heard at the left sternal edge, with normal heart sounds, no added sounds and no parasternal thrill. A murmur that is loud, harsh, diastolic, or accompanied by any symptom fails this checklist and needs echocardiography to exclude structural congenital heart disease.\n\n**Why each wrong option is wrong.** Acrocyanosis, an undescended testis found at birth (often descends within the first months), transient breast enlargement (from residual maternal hormone), and subconjunctival haemorrhages (from the pressure of vaginal delivery) are all common, benign findings on the routine newborn check and need only reassurance, not urgent work-up.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Apply the innocent-versus-pathological murmur criteria to a routine newborn examination finding.',
  source: 'Pediatrics endpoint part1.pdf p.736'
},

{
  id: 'pedep-per-6',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal-rd',
  stem: 'A black mother at 32 weeks is found to have glycosuria and is diagnosed with gestational diabetes. What is her newborn baby most at risk of?',
  options: ['Anaemia', 'Hyperglycaemia', 'Respiratory distress syndrome', 'Neonatal bacterial infection', 'Neonatal type 1 diabetes mellitus'],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> Maternal hyperglycemia delays surfactant production, increasing the risk of RDS. This occurs even in term infants of diabetic mothers.\n\n---\n\nFetal hyperinsulinaemia, driven by chronic transplacental glucose exposure, antagonises the cortisol signal that normally drives type II pneumocytes to produce surfactant late in gestation. The result is a lung that is structurally mature for its gestational age but biochemically behind — surfactant deficiency at a gestation that would not otherwise cause it. `9) Respiratory distress in newborn.txt` lists infants of diabetic mothers and maternal diabetes among the recognised risk categories for neonatal RDS, alongside prematurity and elective caesarean section.\n\n**Why each wrong option is wrong.** *Anaemia* is not a typical infant-of-diabetic-mother (IDM) complication — IDMs more often become polycythaemic. *Hyperglycaemia* is backwards: the fetus adapts to chronic maternal hyperglycaemia by oversecreting insulin, so after birth, once the maternal glucose supply is cut off, the infant becomes **hypo**glycaemic. *Neonatal bacterial infection* has no particular link to maternal diabetes. *Neonatal type 1 diabetes* is an unrelated, extremely rare condition, not a consequence of maternal gestational diabetes.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Explain why infants of diabetic mothers are at increased risk of RDS even at term.',
  source: 'Pediatrics endpoint part1.pdf p.738'
},

{
  id: 'pedep-per-7',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal',
  stem: 'A newborn has hepatosplenomegaly, petechial rash, and fails the hearing screen. Red reflex and cardiac exam are normal. The mother\'s antenatal bloods were normal. What is the most likely congenital infection?',
  options: ['Cytomegalovirus (CMV)', 'Rubella', 'Syphilis', 'Toxoplasmosis', 'Varicella zoster'],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> CMV is the most common congenital infection and the leading cause of non-hereditary sensorineural hearing loss. Antenatal screening does not typically include CMV.\n\n---\n\n`7) Intro to neonatology.txt` lists TORCH infection among the causes of symmetrical intrauterine growth restriction, but the deck does not break the group down organism by organism *(the individual TORCH clinical patterns below are general medical knowledge — not taken from the course material)*. Working through those patterns is what makes this stem solvable: normal antenatal bloods effectively excludes rubella, syphilis and toxoplasmosis, because all three are looked for (or their maternal risk assessed) on routine antenatal screening in a way CMV is not — CMV congenital infection is acquired from a primary or reactivated maternal infection that standard antenatal bloods never test for.\n\n**Why each wrong option is wrong.** *Rubella* classically adds cataracts (an abnormal red reflex) and a patent ductus arteriosus (an abnormal cardiac exam) — both explicitly normal here. *Syphilis* adds a maculopapular/desquamating rash, snuffles and metaphyseal bony changes rather than an isolated petechial rash, and maternal syphilis serology is a routine antenatal test. *Toxoplasmosis* classically triads with chorioretinitis (again, an abnormal red reflex) and intracranial calcification, and maternal risk is usually screened or assessed. *Varicella zoster* congenital syndrome causes limb hypoplasia and cutaneous scarring, not the picture described, and a maternal chickenpox history would already be flagged antenatally.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Use the pattern of normal red reflex, normal cardiac exam and normal antenatal screening to select CMV over the other TORCH organisms.',
  source: 'Pediatrics endpoint part1.pdf p.740'
},

{
  id: 'pedep-per-8',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal-hie',
  stem: 'A male infant is born at term. At 1 minute of age he is breathing regularly and has a heart rate of 140 beats/min. He is grimacing but has not yet cried. He is pink centrally but still blue around his extremities and his tone is reduced although he has good limb flexion but is not actively moving his limbs. What is his Apgar score at one minute?',
  options: ['10', '9', '8', '7', '6'],
  answer: 3,
  explanation: 'The Apgar score sums five components, each scored 0/1/2 *(the standard scoring table below is general medical knowledge — not taken from the course material; the cached decks mention Apgar only as a clinical criterion, for example a 5-minute score ≤5 flagging neonatal distress in `12) HIE.txt`, without printing the point breakdown)*:\n\n- **Heart rate** — absent = 0, <100/min = 1, ≥100/min = 2. This infant\'s rate is 140/min → **2**.\n- **Respiratory effort** — absent = 0, slow/irregular = 1, good/crying = 2. He is "breathing regularly" → **2**.\n- **Reflex irritability** — no response = 0, grimace = 1, cry/cough/sneeze = 2. He is grimacing, not yet crying → **1**.\n- **Muscle tone** — limp = 0, some flexion of limbs = 1, active motion = 2. He has "good limb flexion" but is "not actively moving his limbs" → **1**.\n- **Colour** — blue/pale = 0, body pink, extremities blue (acrocyanosis) = 1, completely pink = 2. He is "pink centrally but still blue around his extremities" → **1**.\n\nAdding the five components: 2 + 2 + 1 + 1 + 1 = **7**, which is option D.\n\n**Why each wrong option is wrong.** A score of 10, 9 or 8 would require full marks on at least three or four components, but this infant loses a point on three separate components (reflex irritability, tone and colour) — those three deductions alone rule out anything above 7. A score of 6 would require losing a further point somewhere, but heart rate and respiratory effort are both full marks here, leaving no fourth deduction to make.\n\nWritten for this bank — Pediatrics endpoint part1.pdf prints no explanation here.',
  objective: 'Score each of the five Apgar components from a clinical description and sum them correctly.',
  source: 'Pediatrics endpoint part1.pdf p.742'
},

{
  id: 'pedep-per-9',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal',
  stem: 'A 37-week infant born to a pre-eclamptic mother with IUGR weighs 2.2 kg. What is he most at risk of?',
  options: ['Anaemia', 'Congenital cardiac abnormality', 'Group B streptococcus infection', 'Hypoglycaemia', 'Hypercalcaemia'],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> IUGR babies have reduced glycogen and fat stores, predisposing them to hypoglycemia. Early feeding and glucose monitoring are essential.\n\n---\n\nA growth-restricted fetus lays down less hepatic glycogen and less subcutaneous fat across gestation, and placental insufficiency (the mechanism behind IUGR in pre-eclampsia) limits the glucose supply right up to delivery. Once the cord is cut, the infant has both a smaller fuel reserve and a higher metabolic demand relative to its size, so blood glucose can fall quickly in the first hours of life. `7) Intro to neonatology.txt` lists hypoglycaemia directly among the recognised complications of a small-for-gestational-age infant, alongside respiratory distress, hypothermia, congenital infection and polycythaemia.\n\n**Why each wrong option is wrong.** *Anaemia* is not the expected picture — chronic intrauterine hypoxia more often drives erythropoietin up and produces **polycythaemia**, the opposite finding. *Congenital cardiac abnormality* is a risk associated with maternal diabetes and with dichorionic twinning, not specifically with pre-eclamptic IUGR. *Group B streptococcus infection* risk tracks with prolonged rupture of membranes and maternal fever, factors not given here. *Hypercalcaemia* is not a recognised IUGR association; if anything, stressed or growth-restricted neonates trend toward **hypo**calcaemia, not hyper-.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Link reduced fetal glycogen and fat stores in IUGR to postnatal hypoglycaemia risk.',
  source: 'Pediatrics endpoint part1.pdf p.744'
},

{
  id: 'pedep-per-10',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal',
  stem: 'A well 2-day-old forceps-delivered baby has a rash that moves around the body. What is the most likely diagnosis?',
  options: ['Bruising', 'Milia', 'Erythema toxicum', 'Mongolian blue spots', 'Neonatal varicella zoster'],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> Erythema toxicum is a common, benign newborn rash that appears in the first few days of life and may migrate. No treatment is needed.\n\n---\n\nThe defining clue here is that the rash **moves** — erythema toxicum neonatorum produces blotchy erythematous macules with central pale papules or pustules that come and go over hours and shift location day to day, in an otherwise entirely well baby. This same five-option ladder recurs across this section for other common neonatal skin findings, and the discriminator each time is timing and fixedness rather than colour alone:\n\n| Option | Onset | Course | Key feature |\n|---|---|---|---|\n| **Bruising** | Birth | Fades over days, does not migrate | Follows the presenting part; forceps/instrumental delivery is a specific risk |\n| **Milia** | Birth–days | Fixed tiny white/yellow papules, resolve over weeks | Keratin-filled inclusion cysts, classically on nose and cheeks |\n| **Erythema toxicum** | Days 1–4 | **Migrates**, waxes and wanes | Blotchy erythema with central pallor/pustule; benign, resolves spontaneously |\n| **Mongolian blue spots** | Birth | Fixed, fade over years | Flat blue-grey macules on back/buttocks; commoner in darker skin |\n| **Neonatal varicella zoster** | Days 1–10 (or congenital) | Vesicular, crusts | Unwell infant, maternal chickenpox history, vesicles not macules |\n\n**Why each wrong option is wrong here.** Bruising from the forceps delivery is a reasonable first thought given the history, but bruising is a fixed mark that fades in place, not a rash that moves around the body. Mongolian blue spots and milia are both fixed lesions, not migratory. Varicella produces vesicles in an infant who is usually unwell, not a well baby with a wandering blotchy rash.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Use the migratory, waxing-and-waning course to identify erythema toxicum among the common benign newborn rashes.',
  source: 'Pediatrics endpoint part1.pdf p.746'
},

{
  id: 'pedep-per-11',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal',
  stem: 'A 1-month-old has a red mark on her face that has not changed since birth. What is the most likely diagnosis?',
  options: ['Bruising', 'Milia', 'Erythema toxicum', 'Port-wine stain (naevus flammeus)', 'Strawberry naevus (cavernous haemangioma)'],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> Port-wine stains are flat, persistent capillary malformations. They do not resolve spontaneously and may require laser treatment.\n\n---\n\nThe stem\'s whole discriminator is the word "unchanged": a port-wine stain (naevus flammeus) is a flat capillary vascular **malformation**, present from birth and static in size and colour throughout life, unlike the other vascular- or pigment-related newborn lesions that either fade or grow. This is the same reasoning used for `pedep-per-10`, applied to a persistent rather than a migratory lesion.\n\n**Why each wrong option is wrong.** *Bruising* and the benign rashes in the earlier options (milia, erythema toxicum) all resolve within days to weeks — none would still be present, unchanged, at one month. *Strawberry naevus (cavernous haemangioma)* is the closest distractor because it is also vascular and present in infancy, but it is a proliferative lesion: it is typically absent or barely visible at birth, grows rapidly over the first months, and then slowly involutes over years — the opposite of "has not changed since birth."\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Distinguish a static vascular malformation (port-wine stain) from a proliferative infantile haemangioma by its growth course.',
  source: 'Pediatrics endpoint part1.pdf p.748'
}
