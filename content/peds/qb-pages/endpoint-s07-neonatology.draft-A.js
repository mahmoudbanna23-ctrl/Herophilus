/* Section 7 "Neonatology" — half A (n1-18, PDF pp.797-832).
   Drafted from content/peds/qb-pages/endpoint-s07-neonatology.array.js (PEDEP_S07_STAGED).
   Bare fragments; splicer strips this header. */

{
  id: 'pedep-neo-1',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  image: 'q-pd-ep-797',
  imgAlt: 'Grayscale frontal (AP) radiograph of a newborn infant covering the chest and upper abdomen, portrait framing.',
  stem: "Natasha, a female infant, is delivered by caesarean section at 32 weeks' gestation because of maternal pre-eclampsia. Her birth weight is 1.9 kg. No resuscitation is required. At 2 hours of age, she develops respiratory distress, with a respiratory rate of 70 breaths/min, grunting, and indrawing of her rib cage. Respiratory support with CPAP (continuous positive airway pressure) and 45% oxygen is required. A chest X-ray is taken at 4 hours of age. What is the most likely reason that this baby needs oxygen therapy and respiratory support?",
  options: ['Aspiration of meconium has resulted in lung collapse', 'Blood is still flowing from the pulmonary artery to the aorta as in the fetal circulation', 'There is ventilation-perfusion mismatch from surfactant deficiency', 'The chest wall and ribs are too compliant'],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> This preterm infant at 32 weeks is at high risk of respiratory distress syndrome due to surfactant deficiency. Surfactant reduces alveolar surface tension, and its absence leads to alveolar collapse and ventilation-perfusion mismatch.\n\n---\n\nType II pneumocytes only begin making surfactant from 24-28 weeks and the supply is not mature until 35 weeks, so a 32-week infant is caught in the gap. `9) Respiratory distress in newborn.txt` gives the mechanism directly: without surfactant\'s surface-tension-lowering action, alveoli collapse on expiration (atelectasis), producing poor pulmonary compliance and severe hypoxia — exactly the ventilation-perfusion mismatch the box names, and it explains why onset is within hours of birth with a chest film showing the classic fine reticulogranular, ground-glass pattern.\n\n**Why each wrong option is wrong.** *Meconium aspiration* needs meconium-stained liquor in the history, which this vignette does not give, and its film shows patchy asymmetric infiltrates and hyperinflation, not the diffuse ground-glass picture of RDS. *Blood still flowing pulmonary artery to aorta* describes persisting fetal-pattern ductal shunting (as in persistent pulmonary hypertension of the newborn) — a separate diagnosis with its own trigger (usually asphyxia or meconium), not the routine course of prematurity. *The chest wall being too compliant* is true of every preterm infant and worsens the work of breathing by letting the ribs cave in during inspiration, but it is a mechanical contributor, not the reason gas exchange itself fails — the primary defect is alveolar, not thoracic.\n\nThe radiograph shows the low lung volumes and diffuse granular opacification typical of surfactant-deficient lungs.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Attribute early-onset respiratory distress in a preterm infant to surfactant-deficiency RDS rather than its mechanical or vascular mimics.',
  source: 'Pediatrics endpoint part1.pdf p.797 (the explanation box is printed alone on p.798)'
},

{
  id: 'pedep-neo-2',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: "Robert is a full-term male infant, born 10 hours ago. His mother is blood group O Rhesus positive, and her membranes ruptured 2 days before delivery. He is breastfeeding well, but the midwife noticed he looks jaundiced. On examination, the baby is clinically well but markedly jaundiced. What investigation should be performed first?",
  options: ['Bilirubin level', 'Blood culture', 'Blood group', 'Congenital infection screen', 'Direct antibody test'],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> In any jaundiced newborn, especially within the first 24 hours, the initial step is to measure the serum bilirubin level. This helps determine the severity of jaundice and guides further investigation and treatment.\n\n---\n\nJaundice this early — 10 hours of age — is never dismissed as physiological, because physiological jaundice by definition appears **after** 24 hours (`8) COMMON PROBLEMS IN THE TERM NEWBORN.txt`: "Visible jaundice with a TSB greater than 5 mg/dL before 24 hours of age is most commonly a result of significant hemolysis"). Measuring the total serum bilirubin is the first step for two reasons at once: it quantifies how urgent treatment is, and a fractionated level (conjugated vs unconjugated) starts to narrow the cause. Every other test in the list is a *second-line* test chosen once the bilirubin confirms the picture is real and the differential needs narrowing.\n\n**Why each wrong option is wrong.** *Blood culture* and a *congenital infection screen* are reached for once sepsis or TORCH infection is actually suspected clinically — this baby is described as clinically well, breastfeeding well, with no fever or lethargy. *Blood group* and the *direct antibody (Coombs) test* are exactly the right next tests **once early jaundice is confirmed** — mother is group O, which raises ABO incompatibility as a cause — but they cannot be interpreted or requested sensibly before the severity of the jaundice itself is known, so bilirubin comes first.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Order serum bilirubin as the first investigation in early neonatal jaundice, before the causal work-up.',
  source: 'Pediatrics endpoint part1.pdf p.800'
},

{
  id: 'pedep-neo-3',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: "Isabelle was born at term weighing 4 kg. At 6 hours of age, she was noted to be breathing fast and have a low temperature. She was born by normal vaginal delivery and the membranes had ruptured 24 hours previously. Isabelle has not breastfed since birth and has vomited once. On examination, she is lethargic, her core temperature is 35.5°C, respiratory rate 90 breaths/min, capillary refill time 4 seconds, pulse 180/min, and oxygen saturation 89% in air. Her chest X-ray shows consolidation at the right base. What is the most likely causative organism?",
  options: ['Escherichia coli (E. coli)', 'Group B streptococcus', 'Herpes simplex virus (HSV)', 'Listeria monocytogenes'],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> Isabelle\'s clinical picture suggests early-onset neonatal sepsis, which commonly presents with respiratory distress and temperature instability. Group B Streptococcus is the most common cause in neonates, especially with prolonged rupture of membranes.\n\n---\n\nEverything in the vignette is textbook early-onset neonatal sepsis (EONS): onset within the first 72 hours (here, 6 hours), a maternal risk factor — membranes ruptured 24 hours before delivery, meeting the ">18 hours" prolonged-rupture threshold — and a baby who is "not doing well": hypothermic, tachypnoeic, poorly perfused (CRT 4 s), tachycardic and hypoxic, with a focal consolidation on the film consistent with pneumonia. `11) Neonatal sepsis.txt` names GBS and *E. coli* together as the classic EONS organisms and specifically lists prolonged (>18 h) or prelabour rupture of membranes as a maternal risk factor; GBS is the more common of the two.\n\n**Why each wrong option is wrong.** *E. coli* is the correct organism family (EONS, vertical transmission) but is statistically second to GBS as the leading cause. *Herpes simplex virus* causes neonatal sepsis-like illness too, but classically with vesicular skin lesions, hepatitis or seizures, and a maternal history of genital HSV — none of which is given here. *Listeria monocytogenes* is a recognised but much rarer EONS organism, usually linked to maternal ingestion of unpasteurised dairy or deli meats, which the stem does not mention.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise the maternal and clinical risk pattern of early-onset GBS sepsis with pneumonia in a term newborn.',
  source: 'Pediatrics endpoint part1.pdf p.802'
},

{
  id: 'pedep-neo-4',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'James was born at 39 weeks\' gestation by elective caesarean section because of pre-eclampsia. His birth weight was 3.7 kg. He fed well initially but is now vomiting after every feed. He is now 18 hours old, and after the last two feeds, he "vomited everything up" and it was greenish. On examination, his temperature is 36.5°C, and he is alert and hungry. His abdomen is not distended. He has not yet passed meconium. What is the most likely diagnosis?',
  options: ['Duodenal atresia', 'Hirschsprung’s disease', 'Meconium ileus', 'Neonatal sepsis', 'Pyloric stenosis'],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> Bilious vomiting in a neonate without meconium passage raises suspicion for intestinal obstruction. Duodenal atresia is a common cause and often presents within the first day of life with greenish (bilious) vomiting.\n\n---\n\nBilious (greenish) vomiting in a newborn always means the obstruction is **distal to the ampulla of Vater**, and it is a surgical emergency until proven otherwise. Duodenal atresia is the classic cause presenting within the first day of life: complete failure of the duodenal lumen to recanalise in fetal life, so bile-stained fluid backs up as soon as feeding begins. James is alert, hungry and well — he has not had time to develop the systemic signs of a lower obstruction — and delayed passage of meconium is consistent with an obstruction proximal enough that the distal bowel was never used.\n\n**Why each wrong option is wrong.** *Hirschsprung’s disease* and *meconium ileus* are both **lower** bowel obstructions that classically present with marked abdominal **distension** and failure to pass meconium at all — this abdomen is explicitly not distended, arguing against a low obstruction. *Neonatal sepsis* can cause vomiting and feed intolerance, but the vomit would not be reliably bile-stained, and James is afebrile, alert and hungry rather than lethargic or unwell. *Pyloric stenosis* causes **non-bilious**, projectile vomiting (the obstruction is proximal to the bile duct) and typically presents from around 3-6 weeks of age, not on day one of life.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Localise a neonatal bowel obstruction using the presence of bile in the vomitus and the timing of presentation.',
  source: 'Pediatrics endpoint part1.pdf p.804'
},

{
  id: 'pedep-neo-5',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  image: 'q-pd-ep-806',
  imgAlt: 'Grayscale frontal (AP) chest radiograph of a newborn infant, chest-only field of view.',
  stem: 'Mohammed was born at term, weighing 3 kg. He is 6 hours old and on the postnatal ward with his mother, who asked the midwife to review him because he is breathing very quickly. He required mask ventilation at birth to establish breathing. By 5 minutes, he was crying and handed to his mother. On examination, he is breathing at 64 breaths/min, with mild chest recession. Breath sounds are reduced on the left compared with the right. Oxygen saturation is 95%. What is the most likely diagnosis?',
  options: ['Pneumonia', 'Pneumothorax', 'Respiratory distress syndrome', 'Persistent pulmonary hypertension of the newborn'],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> Reduced breath sounds on one side in a neonate with respiratory distress following resuscitation suggest pneumothorax. This is a known complication after positive pressure ventilation.\n\n---\n\nThe two facts that fix this diagnosis are asymmetry and a history of positive-pressure ventilation. `7) Intro to neonatology.txt` describes pneumothorax as occurring spontaneously or, more commonly, after mechanical/positive-pressure ventilation of an unhealthy lung, with sudden deterioration, increased oxygen requirement, and **decreased breath sounds and chest movement on the affected side** — precisely Mohammed\'s findings, and mask ventilation at birth is enough positive pressure to over-distend and rupture an alveolus. A term baby, born well (crying by 5 minutes) with only mild, unilateral signs is a much better fit for a localised air leak than for a diffuse parenchymal process.\n\n**Why each wrong option is wrong.** *Pneumonia* and *respiratory distress syndrome* both cause bilateral, diffuse findings on auscultation and film, not a lateralised difference in air entry. RDS is also a disease of prematurity — Mohammed is term. *Persistent pulmonary hypertension of the newborn (PPHN)* causes profound, labile hypoxaemia out of proportion to the chest signs (often with a saturation gap between right hand and lower limbs) rather than a focal, one-sided reduction in breath sounds.\n\nThe film would be expected to show a lucent, avascular rim of air with a visible collapsed lung edge on the affected side.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Link asymmetric breath sounds after positive-pressure ventilation to pneumothorax as an air-leak complication.',
  source: 'Pediatrics endpoint part1.pdf p.806'
},

{
  id: 'pedep-neo-6',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  image: 'q-pd-ep-808',
  imgAlt: 'Grayscale frontal (AP) radiograph of a newborn infant covering the chest and abdomen.',
  stem: "Sabrina was born at 37 weeks' gestation, birth weight 2.8 kg. At 2 hours of age, she was noted to be breathing very fast. On examination, respiratory rate is 72 breaths/min with moderate chest recession. Heart sounds are difficult to hear on the left, and the apex beat is palpable on the right side. What is the most likely diagnosis?",
  options: ['Pneumonia', 'Pneumothorax', 'Respiratory distress syndrome', 'Diaphragmatic hernia', 'Bronchopulmonary dysplasia'],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> Displacement of heart sounds and apex beat to the right with respiratory distress in a newborn suggests a diaphragmatic hernia. Abdominal contents herniate into the thoracic cavity, causing pulmonary hypoplasia.\n\n---\n\n**Comparative table — this option ladder (Pneumonia / Pneumothorax / RDS / Diaphragmatic hernia / Bronchopulmonary dysplasia) is shared with `pedep-neo-7`.** Both babies have early respiratory distress; the discriminating clinical sign is what separates them:\n\n| | This case (`pedep-neo-6`) | `pedep-neo-7` |\n|---|---|---|\n| Age at onset | 2 hours | Ongoing at 10 weeks |\n| Gestation | 37 weeks (near-term) | 28 weeks, 875 g |\n| Key sign | Heart displaced to the **right** | Continued O2 need long after birth |\n| Diagnosis | Diaphragmatic hernia | Bronchopulmonary dysplasia |\n\n`9) Respiratory distress in newborn.txt` gives the classic congenital diaphragmatic hernia (CDH) triad: severe, immediate respiratory distress, a scaphoid (sunken) abdomen, and heart sounds shifted to the right — bowel has herniated through the defect (almost always the left side) into the chest, pushing the mediastinum rightward and compressing the ipsilateral lung, which is why pulmonary hypoplasia is the complication that drives mortality.\n\n**Why each wrong option is wrong.** *Pneumonia* and *RDS* both produce diffuse, bilateral disease and never shift the heart. *Pneumothorax* can shift the mediastinum **away from** the affected (tension) side, but it does not arise spontaneously at 2 hours in a near-term infant with no ventilation history, and it lacks the sunken-abdomen appearance CDH produces (the abdomen looks empty because its contents are in the chest). *Bronchopulmonary dysplasia* is a **chronic** lung disease of prematurity diagnosed by ongoing oxygen need at 36 weeks corrected age — it cannot present at 2 hours of life.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise displaced heart sounds and immediate respiratory distress as congenital diaphragmatic hernia, distinguishing it from its option-ladder siblings.',
  source: 'Pediatrics endpoint part1.pdf p.808'
},

{
  id: 'pedep-neo-7',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  image: 'q-pd-ep-810',
  imgAlt: 'Grayscale frontal (AP) chest radiograph of an infant, wide landscape framing.',
  stem: "Thomas, a baby boy with a birth weight of 875 g at 28 weeks' gestation, required artificial ventilation for 2 weeks. At 10 weeks of age, he still needs additional oxygen via nasal cannulae. What is the most likely diagnosis?",
  options: ['Pneumonia', 'Pneumothorax', 'Respiratory distress syndrome', 'Diaphragmatic hernia', 'Bronchopulmonary dysplasia'],
  answer: 4,
  explanation: '**The endpoint file prints this explanation:**\n\n> Bronchopulmonary dysplasia is a chronic lung disease in preterm infants who required prolonged ventilation and oxygen. Ongoing oxygen need at 36 weeks corrected gestational age confirms this diagnosis.\n\n---\n\n**Shared option menu — see `pedep-neo-6`** for the comparative table across this ladder. Thomas\'s discriminating token is chronicity: born extremely preterm (28 weeks, 875 g — extremely low birth weight) and ventilated for 2 weeks, he is now 10 weeks old — well past the 36-week corrected-gestational-age mark used to define bronchopulmonary dysplasia (BPD, chronic lung disease, `7) Intro to neonatology.txt`: "Need for oxygen >36 weeks postmenstrual age"). BPD results from a combination of ventilator/volutrauma, oxygen toxicity and the underlying immaturity of a lung whose alveolar development is still incomplete.\n\n**Why each wrong option is wrong.** *Pneumonia* and *respiratory distress syndrome* are both **acute** processes; RDS in particular is a disease of the first hours to days of life, not one that would still be active, unresolved and unnamed at 10 weeks. *Pneumothorax* is an acute air-leak event, not a state of chronic, stable additional oxygen need. *Diaphragmatic hernia* causes severe respiratory distress from birth with mediastinal shift, not a gradually persisting oxygen requirement after weeks of ventilation.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Identify bronchopulmonary dysplasia from a history of extreme prematurity and persistent oxygen dependence well beyond the acute neonatal period.',
  source: 'Pediatrics endpoint part1.pdf p.810'
},

{
  id: 'pedep-neo-8',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: "Stewart is a full-term baby boy, born 16 hours ago. His mother is blood group O Rhesus positive. The baby is breastfeeding well, but the midwife noted he looks jaundiced. His bilirubin was 150 μmol/L at 10 hours and intensive phototherapy was started. Six hours later, bilirubin is 250 μmol/L. The baby's blood group is A Rhesus positive. What is the most likely cause?",
  options: ['ABO incompatibility', 'Biliary atresia', 'Breastmilk jaundice', 'Physiological jaundice', 'Rhesus hemolytic disease'],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> The infant has early and rapidly rising jaundice, with maternal group O and baby group A—indicating ABO incompatibility. This is a common cause of hemolytic disease in neonates.\n\n---\n\n**Comparative table — this exact five-option ladder (ABO incompatibility / Biliary atresia / Breastmilk jaundice / Physiological jaundice / Rhesus hemolytic disease) recurs at `pedep-neo-9` and `pedep-neo-10`, with a related ladder at `pedep-neo-11`.** Each sibling is picked out from the ladder by a different discriminating feature:\n\n| | This case (`pedep-neo-8`) | `pedep-neo-9` | `pedep-neo-10` | `pedep-neo-11` |\n|---|---|---|---|---|\n| Age | 16 hours | 3 weeks | 2 weeks | 20 hours |\n| Pattern | Rapid rise, group O mother / A baby | Pale stools, hepatomegaly | Thriving, unconjugated, negative dipstick | Same blood groups, still marked |\n| Answer | ABO incompatibility | Biliary atresia | Breastmilk jaundice | G6PD deficiency |\n\n`8) COMMON PROBLEMS IN THE TERM NEWBORN.txt` names ABO incompatibility as an immune-mediated haemolytic cause with a positive direct antibody (Coombs) test, "usually mild" but of unpredictable severity — here the bilirubin nearly doubling in 6 hours despite intensive phototherapy shows active ongoing haemolysis, which the group O mother / group A baby setup produces via maternal anti-A IgG crossing the placenta.\n\n**Why each wrong option is wrong.** *Biliary atresia* and *breastmilk jaundice* both present **later**, over weeks, not within the first day. *Physiological jaundice* by definition appears after 24 hours and rises gradually (<5 mg/dL per day) — this bilirubin trajectory is both too early and too fast. *Rhesus hemolytic disease* requires a Rh-negative mother sensitised against a Rh-positive fetus; this mother is stated to be Rhesus **positive**, which excludes it outright.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Diagnose ABO incompatibility from a rapidly rising bilirubin in the first day of life with a group O mother and group A infant.',
  source: 'Pediatrics endpoint part1.pdf p.812'
},

{
  id: 'pedep-neo-9',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'Alfie is a 3-week-old male infant whose mother is concerned about pale stools. He is breastfed. On examination, he is jaundiced, has mild hepatomegaly, and has only just regained his birth weight. What is the most likely diagnosis?',
  options: ['ABO incompatibility', 'Biliary atresia', 'Breastmilk jaundice', 'Physiological jaundice', 'Rhesus hemolytic disease'],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> Prolonged jaundice with pale stools and hepatomegaly in a neonate is classic for biliary atresia. It causes conjugated hyperbilirubinemia and requires early surgical intervention for better outcomes.\n\n---\n\n**Shared option menu — see `pedep-neo-8`** for the comparative table across this ladder. Alfie\'s discriminating token is pale (acholic) stools plus hepatomegaly at three weeks — `43)Infantile cholestasis_.txt` calls acholic, clay-coloured stools with dark urine and hepatomegaly the defining picture of neonatal cholestasis, and names biliary atresia the single most common cause of cholestatic jaundice in the first months of life (up to 60% of cases). Poor weight gain (only just back to birth weight at 3 weeks, when a term infant should already be well past it) reflects the failure to thrive that chronic cholestasis produces. The lecture stresses biliary atresia must be found within the first 6 weeks of life for surgery to have the best chance of success, which is why any pale-stool jaundice this age is treated as urgent.\n\n**Why each wrong option is wrong.** *ABO* and *Rhesus haemolytic disease* are early (first-day), unconjugated, haemolytic processes — neither causes pale stools, since bile is still reaching the gut normally in a purely haemolytic jaundice. *Breastmilk jaundice* is unconjugated and occurs in a thriving, well infant with normal-coloured stools, the opposite of Alfie\'s acholic stools and hepatomegaly. *Physiological jaundice* resolves by one week of age and never causes pale stools or hepatomegaly.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise pale stools with hepatomegaly and poor weight gain as biliary atresia, distinguishing conjugated cholestatic jaundice from the haemolytic causes on the same ladder.',
  source: 'Pediatrics endpoint part1.pdf p.814'
},

{
  id: 'pedep-neo-10',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'Poppy is a 2-week-old breastfed baby who is thriving but jaundiced. Her bilirubin level is 170 μmol/L and nearly all unconjugated. Urine dipstick is negative. What is the most likely cause?',
  options: ['ABO incompatibility', 'Biliary atresia', 'Breastmilk jaundice', 'Physiological jaundice', 'Rhesus hemolytic disease'],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> Breastmilk jaundice presents in a thriving breastfed baby with prolonged unconjugated jaundice beyond the first week. It is benign and requires no treatment.\n\n---\n\n**Shared option menu — see `pedep-neo-8`** for the comparative table across this ladder. Poppy\'s discriminating tokens are that she is *thriving* (excludes disease), the bilirubin is *nearly all unconjugated* (excludes the conjugated picture of biliary atresia), and the *urine dipstick is negative* for bilirubin (unconjugated bilirubin is protein-bound and not water-soluble, so it cannot appear in urine — a negative dipstick is expected and reassuring, not a red flag). `8) COMMON PROBLEMS IN THE TERM NEWBORN.txt` describes breastmilk jaundice as unconjugated hyperbilirubinaemia lasting weeks in a thriving breastfed infant "without evidence of hemolysis, hypothyroidism, or other disease" — exactly this picture — and states it needs no specific treatment beyond continued breastfeeding and monitoring.\n\n**Why each wrong option is wrong.** *ABO incompatibility* and *Rhesus haemolytic disease* are haemolytic and present early (within the first day), with a positive Coombs test — nothing here suggests haemolysis at 2 weeks. *Biliary atresia* causes **conjugated** hyperbilirubinaemia with pale stools and hepatomegaly, the opposite of Poppy\'s picture. *Physiological jaundice* resolves within a week in a term infant; Poppy\'s jaundice, still present and unconjugated at 2 weeks in an otherwise well, breastfed baby, has moved past physiological into the specific breastmilk-jaundice pattern.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Diagnose breastmilk jaundice from prolonged unconjugated jaundice in a thriving, well infant, excluding both haemolysis and cholestasis.',
  source: 'Pediatrics endpoint part1.pdf p.816'
},

{
  id: 'pedep-neo-11',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'Dimitri is 20 hours old and markedly jaundiced, requiring intensive phototherapy. Both mother and baby are group A Rhesus positive. He is feeding well and is alert. What is the most likely cause?',
  options: ['ABO incompatibility', 'Biliary atresia', 'Breastmilk jaundice', 'G6PD deficiency', 'Rhesus hemolytic disease'],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> In a jaundiced baby with no ABO or Rh incompatibility, G6PD deficiency is a likely cause of hemolytic jaundice, especially if the jaundice appears early and is significant. It is more common in certain ethnic groups.\n\n---\n\nThis ladder shares four of its five options with `pedep-neo-8` (ABO / breastmilk / Rhesus / biliary atresia all reappear) but here swaps out physiological jaundice for G6PD deficiency — the two ladders are related, not identical, so this is a related sibling rather than a strict shared-menu pair. Dimitri\'s discriminating token is that mother and baby share the **same** blood group (A, Rh-positive both), which mechanically rules out both antibody-mediated causes on the list, yet the jaundice is early and marked enough to need intensive phototherapy — a haemolytic process is still happening, just not an antibody-mediated one. `8) COMMON PROBLEMS IN THE TERM NEWBORN.txt` lists G6PD deficiency as the most common **red cell enzyme** defect causing non-immune haemolysis (Coombs-negative), most common in infants of African, Mediterranean or Asian descent, and specifically flags it as a cause of severe, early hyperbilirubinaemia that can mimic the immune haemolytic causes.\n\n**Why each wrong option is wrong.** *ABO incompatibility* is excluded because mother and baby are the same blood group, so there is no antigen mismatch for maternal antibodies to target. *Rhesus haemolytic disease* is excluded for the same reason — no Rh mismatch. *Biliary atresia* and *breastmilk jaundice* both present over days-to-weeks, not within the first 24 hours, and neither is severe enough at this age to need intensive phototherapy.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Consider G6PD deficiency as a Coombs-negative haemolytic cause of early, severe jaundice once ABO and Rh incompatibility are excluded by matching blood groups.',
  source: 'Pediatrics endpoint part1.pdf p.818'
},

{
  id: 'pedep-neo-12',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'Rebecca was born 48 hours ago at term weighing 3.2 kg. She is breathing very quickly and not feeding. On examination, respiratory rate is 68 breaths/min, with mild chest recession. She appears unwell. Femoral pulses are weak, and oxygen saturation is 85% in air. What is the most likely diagnosis?',
  options: ['Pneumonia', 'Transient tachypnoea of the newborn', 'Coarctation of the aorta', 'Respiratory distress syndrome', 'Anaemia'],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> Weak femoral pulses, hypoxia, and poor feeding in a newborn suggest duct-dependent congenital heart disease like coarctation. This typically presents after ductal closure in the first few days of life.\n\n---\n\n**Comparative table — this option ladder (Pneumonia / TTN / Coarctation of the aorta / RDS / Anaemia) is shared with `pedep-neo-13`.**\n\n| | This case (`pedep-neo-12`) | `pedep-neo-13` |\n|---|---|---|\n| Delivery | Term, normal-course | Elective caesarean |\n| Key sign | Weak femoral pulses, SpO₂ 85%, unwell | Normal exam and normal CXR |\n| Diagnosis | Coarctation of the aorta | Transient tachypnoea of the newborn |\n\n`34)Students Obstructive diseases.pptx` describes critical neonatal coarctation as looking normal on day one, then presenting with acute circulatory collapse "after a few days of age when the duct closes" — the ductus arteriosus had been supplying the lower body around the coarctation, and once it constricts, flow to the legs and abdominal organs collapses. The lecture\'s own triad is here almost verbatim: a sick baby with severe heart failure, **absent/weak femoral pulses**, and severe metabolic acidosis (reflected in the low saturation and poor feeding).\n\n**Why each wrong option is wrong.** *Pneumonia* and *respiratory distress syndrome* do not weaken the femoral pulses — that finding is specific to an obstructed systemic circulation, not a primary lung problem, and RDS is a disease of prematurity, not a 48-hour-old term infant. *Transient tachypnoea of the newborn* is mild, self-limiting and does not cause pulse or perfusion abnormalities. *Anaemia* can cause tachypnoea and poor feeding but does not selectively weaken the **femoral** pulses while presumably sparing others.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise weak femoral pulses with duct closure as coarctation of the aorta, distinguishing it from its ladder siblings.',
  source: 'Pediatrics endpoint part1.pdf p.820'
},

{
  id: 'pedep-neo-13',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'Zak, a full-term male infant, weighing 3.7 kg, is born by elective caesarean section. He becomes tachypnoeic with indrawing at 2 hours of age. Examination and chest X-ray are otherwise normal. What is the most likely diagnosis?',
  options: ['Pneumonia', 'Transient tachypnoea of the newborn', 'Coarctation of the aorta', 'Respiratory distress syndrome', 'Anaemia'],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> TTN is common after elective caesarean due to delayed lung fluid clearance. It presents with tachypnea shortly after birth and typically resolves within 48-72 hours.\n\n---\n\n**Shared option menu — see `pedep-neo-12`** for the comparative table across this ladder. Zak\'s discriminating tokens are exactly the opposite of Rebecca\'s: delivery by **elective caesarean section** (no labour, so the surge of catecholamines that normally switches off fetal lung fluid secretion and starts its resorption never happens) and an otherwise **normal** examination and chest film. `9) Respiratory distress in newborn.txt` names elective caesarean section, male gender and maternal diabetes as the recognised risk factors for transient tachypnoea of the newborn (TTN), with onset within 2 hours of delivery and a course lasting hours to a few days — matching Zak precisely.\n\n**Why each wrong option is wrong.** *Pneumonia* and *respiratory distress syndrome* would be expected to show an abnormal chest film (consolidation, or diffuse ground-glass change), which is explicitly excluded here; RDS is also a disease of prematurity, and Zak is full term. *Coarctation of the aorta* causes weak femoral pulses and hypoxaemia, not a normal exam. *Anaemia* does not typically present as isolated tachypnoea with indrawing in the first hours after an uncomplicated elective delivery.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise transient tachypnoea of the newborn from delayed lung fluid clearance after elective caesarean section, with normal examination and imaging.',
  source: 'Pediatrics endpoint part1.pdf p.822'
},

{
  id: 'pedep-neo-14',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'A 15-month-old girl is referred for developmental assessment. She was born at term weighing 3400 g, needed resuscitation at birth with Apgar scores of 3 at 1 minute, 4 at 5 minutes, and 7 at 10 minutes. She was ventilated for 3 days. She now has global developmental delay. What is the most likely explanation?',
  options: ['Congenital hypothyroidism', 'Meningitis', 'Inborn error of metabolism', 'Intracranial hemorrhage', 'Hypoxic-ischaemic encephalopathy (HIE)'],
  answer: 4,
  explanation: '**The endpoint file prints this explanation:**\n\n> A history of low Apgar scores, ventilation, and developmental delay strongly suggests HIE, resulting from perinatal asphyxia. This is a major cause of cerebral palsy and developmental disorders.\n\n---\n\nThe Apgar trajectory is the key evidence: severely depressed at 1 and 5 minutes (3, then 4) with slow, incomplete recovery by 10 minutes (7) and a need for 3 days of ventilation, is the pattern of significant perinatal asphyxia. `10) new Seizures . Birth injuries , Hpoglycemia 2.txt` lists hypoxic-ischaemic encephalopathy as the single most common acute symptomatic cause of neonatal brain injury in term and near-term infants (around 40% of cases), and `58) cerebral palsy.txt` names birth asphyxia/HIE among the leading perinatal causes of cerebral palsy and long-term developmental delay — this girl\'s global delay at 15 months is exactly that late outcome.\n\n**Why each wrong option is wrong.** *Congenital hypothyroidism* causes developmental delay but has no relationship to a difficult, asphyxial delivery — it would present with prolonged jaundice, constipation and a hoarse cry, not depressed Apgars. *Meningitis* and *inborn errors of metabolism* are both listed in the same lecture as alternative causes of neonatal brain injury and seizures, but neither is suggested by this history — there is no fever, sepsis picture, or metabolic crisis described, only a difficult birth needing resuscitation. *Intracranial haemorrhage* is a genuine differential for a difficult delivery, but it is not what a depressed, slowly-recovering Apgar score with prolonged ventilation specifically points to — that pattern is the signature of asphyxial hypoxic-ischaemic injury rather than a bleed.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Link a depressed, slowly recovering Apgar score and prolonged ventilation at birth to HIE as the cause of later global developmental delay.',
  source: 'Pediatrics endpoint part1.pdf p.824'
},

{
  id: 'pedep-neo-15',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'A newborn baby is delivered by caesarean following obstructed labor. He requires full resuscitation including adrenaline. His initial capillary blood gas shows pH 6.9. Which of the following is least likely related to perinatal asphyxia?',
  options: ['Hypotension', 'Renal failure', 'Necrotizing enterocolitis', 'Seizures', 'Heart murmur'],
  answer: 4,
  explanation: '**The endpoint file prints this explanation:**\n\n> While hypotension, renal failure, NEC, and seizures are well-known complications of perinatal asphyxia, a heart murmur is not a direct consequence. It may occur coincidentally but is not a specific outcome.\n\n---\n\nSevere perinatal asphyxia — obstructed labour, resuscitation with adrenaline, and a profoundly acidotic pH of 6.9 — does not injure the brain alone; it is a whole-body hypoxic-ischaemic insult, and the organs most sensitive to it fail together as a multi-organ syndrome *(the multi-organ pattern itself is standard neonatal teaching and is not detailed as a single list in the cached decks — not taken from the course material, though each individual complication is)*. *Seizures* are directly grounded: `10) new Seizures . Birth injuries , Hpoglycemia 2.txt` lists hypoxic-ischaemic encephalopathy as the leading cause of neonatal seizures, typically beginning in the first 12-24 hours. *Hypotension* reflects myocardial hypoxic injury and loss of vascular tone. *Renal failure* follows redistribution of blood away from the kidneys during the asphyxial "diving reflex", producing acute tubular injury. *Necrotizing enterocolitis* follows the same redistribution away from the gut, and `11) Neonatal sepsis.txt` lists NEC among the anaerobic-risk conditions treated with metronidazole or clindamycin.\n\n**Why the key is right and the option is not a distractor mistake.** A *heart murmur* is a finding of a structural or flow abnormality across a valve or shunt — it is not a recognised direct consequence of a hypoxic insult itself. A murmur could coexist by chance, or reflect a separate congenital lesion, but asphyxia does not cause murmurs the way it causes organ failure, so it is correctly the "least likely" answer to a "which is NOT related" question.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise the multi-organ pattern of perinatal asphyxia (CNS, cardiovascular, renal, gastrointestinal) and distinguish it from an unrelated finding.',
  source: 'Pediatrics endpoint part1.pdf p.826'
},

{
  id: 'pedep-neo-16',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'A male infant born at 29 weeks is now 4 hours old with increasing oxygen requirement, tachypnoea, and severe recessions. CXR shows a ground-glass appearance. What is the most likely diagnosis?',
  options: ['Transient tachypnoea of the newborn', 'Respiratory distress syndrome', 'Congenital pneumonia', 'Pneumothorax', 'Congenital heart disease'],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> A preterm infant with worsening respiratory status and ground-glass appearance on CXR is classic for RDS due to surfactant deficiency. This is common in infants born before 32 weeks.\n\n---\n\nAll three findings point the same way: birth at 29 weeks (surfactant synthesis is not mature until 35 weeks), onset within the first 4 hours (`9) Respiratory distress in newborn.txt`: RDS manifestations "appear immediately or shortly after birth" and worsen over the first 48 hours), and the film — "a fine reticulogranular ground-glass mottling in both lung fields through which an air bronchogram is seen" is the lecture\'s own description of the RDS chest X-ray, matched here almost word for word.\n\n**Why each wrong option is wrong.** *Transient tachypnoea of the newborn* is a term/late-preterm condition with a perihilar-streaking, wet-lung film, not ground-glass mottling, and it is mild rather than a "worsening", "severe" picture. *Congenital pneumonia* can mimic RDS clinically but its film typically shows focal or patchy consolidation rather than the diffuse, symmetric ground-glass pattern described here. *Pneumothorax* causes sudden, asymmetric deterioration with reduced breath sounds on one side, not a diffuse bilateral ground-glass appearance. *Congenital heart disease* would show a cardiac silhouette or vascular abnormality on the film, not the specific lung-parenchymal ground-glass sign being described.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Match the ground-glass, air-bronchogram chest film in an extremely preterm infant to surfactant-deficient respiratory distress syndrome.',
  source: 'Pediatrics endpoint part1.pdf p.828'
},

{
  id: 'pedep-neo-17',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'A female infant born at 28 weeks is now 10 days old. She recently started feeds via NG tube. Over the past 12 hours, she has become unwell with abdominal distension, temperature instability, bile-stained aspirates, and blood in stool. AXR shows air within bowel walls. What is the most likely diagnosis?',
  options: ['Sepsis', 'Intestinal obstruction', 'Necrotizing enterocolitis', 'Malrotation', 'Duodenal atresia'],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> NEC is a serious gastrointestinal emergency in preterm infants, presenting with feeding intolerance, distension, and bloody stools. The pathognomonic X-ray finding is pneumatosis intestinalis (air in the bowel wall).\n\n---\n\n`7) Intro to neonatology.txt` names necrotizing enterocolitis (NEC) the most common serious GI problem of the preterm infant, with an incidence that rises the more preterm the baby is (here, 28 weeks), and lists its own pathognomonic radiological sign as "pneumatosis intestinalis" — air tracking within the bowel wall itself, produced by gas-forming bacteria invading an ischaemic, insulted mucosa. The full clinical picture here — recently started enteral (NG) feeds, feeding intolerance (bile-stained aspirates), abdominal distension, temperature instability and bloody stools — is the textbook NEC presentation, and the air-in-bowel-wall finding on the film clinches it over any other diagnosis on the list.\n\n**Why each wrong option is wrong.** *Sepsis* shares many of the same non-specific signs (temperature instability, unwell appearance) and often coexists with NEC, but it does not explain the specific abdominal film finding of intramural air. *Intestinal obstruction*, *malrotation* and *duodenal atresia* are all mechanical/anatomical causes of bilious vomiting and distension, but none of them produces pneumatosis intestinalis, and duodenal atresia in particular presents in the first day of life, not after ten days of established feeding.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise the feeding-intolerance, distension and pneumatosis-intestinalis picture of necrotizing enterocolitis in a preterm infant on enteral feeds.',
  source: 'Pediatrics endpoint part1.pdf p.830'
},

{
  id: 'pedep-neo-18',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: "A term female baby is 18 hours old and not feeding well. Her mother was supposed to receive intrapartum antibiotics but delivered too quickly. The baby is admitted with suspected sepsis; CXR confirms congenital pneumonia. What is the most likely organism?",
  options: ['Streptococcus pneumoniae', 'Escherichia coli', 'Listeria monocytogenes', 'Group B streptococcus', 'Chlamydia pneumoniae'],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> GBS is the most common cause of early-onset neonatal sepsis and congenital pneumonia. Lack of intrapartum antibiotics and early respiratory symptoms suggest this infection.\n\n---\n\n`11) Neonatal sepsis.txt` names GBS (Group B streptococcus, alongside *E. coli*) as the leading organism of early-onset sepsis (EONS, presenting within the first 72 hours — here 18 hours), and its own risk-factor list includes exactly this scenario: a colonised mother who should have received **intrapartum antibiotic prophylaxis** but did not, because delivery was too rapid to give it. Around 15-40% of pregnant women carry GBS, and without the intended prophylaxis the newborn is exposed to it during passage through the birth canal, producing pneumonia or septicaemia as the two classic early presentations.\n\n**Why each wrong option is wrong.** *Streptococcus pneumoniae* is a cause of childhood, not classic neonatal, pneumonia and is not part of the vertical-transmission organism list. *Escherichia coli* is the correct **category** (a leading EONS organism, vertically transmitted) but is statistically second to GBS. *Listeria monocytogenes* is a recognised but much rarer EONS cause, usually linked to maternal ingestion of unpasteurised dairy or contaminated deli foods, which is not mentioned here. *Chlamydia pneumoniae* (distinct from *Chlamydia trachomatis*, which causes a later, afebrile neonatal pneumonia via vertical transmission) is not a standard neonatal sepsis organism at all.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Identify GBS as the organism behind early-onset congenital pneumonia when intended intrapartum prophylaxis was missed.',
  source: 'Pediatrics endpoint part1.pdf p.832'
},
