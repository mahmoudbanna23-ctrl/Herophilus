/* Section 7 (Neonatology), half B — pedep-neo-19 .. pedep-neo-36.
   Source: Pediatrics endpoint part1.pdf pp.834-868. Staged in
   content\peds\qb-pages\endpoint-s07-neonatology.array.js, n19-n36. */

{
  id: 'pedep-neo-19',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: "A term infant born at home is brought on day 4 with bleeding from the umbilical stump. The mother mentions her other children received vitamin K, but she’s unsure about this baby. Which blood result is likely to be abnormal?",
  options: [
    'Platelets',
    'Prothrombin time (PT)',
    'Activated partial thromboplastin time (APTT)',
    'Hemoglobin',
    'Antiplatelet antibodies'
  ],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> Vitamin K deficiency bleeding (VKDB) commonly presents around day 4 with bleeding (e.g. from the umbilical stump). The PT is typically prolonged due to deficient clotting factor production.\n\n---\n\nVitamin K activates the gamma-carboxylation of clotting factors II, VII, IX and X in the liver; without it these factors are made but functionally inactive, so the extrinsic pathway (and, later, the intrinsic pathway too) fails. `47)Hemorrhagic disorders .txt` sets vitamin K deficiency against DIC in a comparison table: PT is prolonged in both, but vitamin K deficiency keeps a normal thrombin time, a normal platelet count and a normal bleeding time — the pattern that separates an isolated factor-activation defect from a consumptive coagulopathy.\n\nWorking through the ladder against that table: **Platelets** stay normal in isolated vitamin K deficiency, since the defect sits in coagulation factor activation, not in platelet number or function. **APTT** does eventually prolong once factors IX and X fall, but factor VII — the vitamin K-dependent factor with by far the shortest half-life — collapses first, so the **PT**, which is most sensitive to factor VII, is the test that turns abnormal earliest; that is why the box names PT specifically rather than APTT. **Hemoglobin** falls only as a secondary consequence of ongoing blood loss and is not itself diagnostic of the underlying clotting defect. **Antiplatelet antibodies** belong to the work-up of immune thrombocytopenia, a platelet-destruction disorder unrelated to vitamin K.\n\nThe vignette detail that this baby’s status is unknown while siblings received vitamin K points at a missed dose of the routine intramuscular vitamin K prophylaxis given at birth to prevent exactly this bleed *(not taken from the course material; the cached deck carries the DIC-versus-vitamin-K-deficiency lab table but not the prophylaxis protocol itself)*. Bleeding on day 4 sits in the "classic" VKDB window of day 2–7, distinct from the early form (first 24 hours, usually maternal-drug-induced) and the late form (weeks 2–12, usually from malabsorption) *(also not taken from the course material)*.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Identify prothrombin time as the lab abnormality in classic vitamin K deficiency bleeding and distinguish it from a consumptive coagulopathy.',
  source: 'Pediatrics endpoint part1.pdf p.834'
},

{
  id: 'pedep-neo-20',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'A 4-week-old formula-fed girl presents with jaundice. Her urine is dark and stools are pale. She has not regained her birth weight. Total bilirubin is 135 μmol/L (normal <100), conjugated 65 μmol/L (normal <20). Blood counts are normal. What is the most likely diagnosis?',
  options: [
    'Physiological jaundice',
    'Biliary atresia',
    'Spherocytosis',
    'G6PD deficiency',
    'Urinary tract infection'
  ],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> Cholestatic jaundice (raised conjugated bilirubin), pale stools, and poor weight gain point to biliary atresia. Early diagnosis is critical to allow for timely surgical intervention (Kasai procedure).\n\n---\n\nHere the conjugated fraction is roughly half of an already-raised total, and dark urine with pale (acholic) stools confirms bile is not reaching the gut. `8) COMMON PROBLEMS IN THE TERM NEWBORN.txt` lists a fractionated bilirubin as the correct test whenever jaundice is prolonged, stool is acholic, or the infant is failing to regain birth weight — every one of those triggers is present here. `43)Infantile cholestasis_.txt` names biliary atresia the single most common cause of cholestatic jaundice in early infancy and stresses that the Kasai portoenterostomy must happen within roughly the first 6–8 weeks of life for a meaningful chance of success, which is why pale-stool jaundice at this age is treated as urgent — matching the box’s own emphasis on early diagnosis.\n\nAgainst the ladder: **Physiological jaundice** is unconjugated and resolves within the first week of life; a 4-week-old with a raised *conjugated* fraction and pale stools cannot be physiological. **Spherocytosis** and **G6PD deficiency** are both haemolytic, unconjugated processes that present early, often the first days of life, with normal-coloured stools, since bile flow itself is intact — neither produces acholic stools or a raised conjugated fraction, and blood counts here are stated to be normal, arguing against active haemolysis. **Urinary tract infection** can cause conjugated hyperbilirubinemia and poor weight gain in a neonate, but it does not typically produce pale stools, and nothing in the vignette (fever, irritability, poor feeding from illness) points to sepsis; the specific combination of pale stools plus dark urine is a biliary, not an infective, signature.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise pale stools, dark urine and a raised conjugated fraction at 4 weeks as biliary atresia rather than a haemolytic or infective cause of jaundice.',
  source: 'Pediatrics endpoint part1.pdf p.836'
},

{
  id: 'pedep-neo-21',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'A 6-day-old baby who is breast-feeding well and thriving is referred by the midwife because she appears jaundiced. She has pigmented stools and is passing urine normally. Examination is unremarkable. Her bilirubin is 68 μmol/L (normal <100 μmol/L) with a conjugated level of 8 μmol/L (normal <20 μmol/L).\n\nWhich of the following would be your management of this infant?',
  options: [
    'Complete a prolonged jaundice screen',
    'Commence phototherapy',
    'Top up feeds with formula milk',
    'Repeat the bilirubin level in 8 hours',
    'No treatment required'
  ],
  answer: 4,
  explanation: '**The endpoint file prints this explanation:**\n\n> This baby has normal unconjugated jaundice at 6 days, is feeding well, and has normal stool and urine color. No further action is needed unless jaundice persists beyond 14 days.\n\n---\n\n`8) COMMON PROBLEMS IN THE TERM NEWBORN.txt` places physiological jaundice at a peak of 3–5 days with a total bilirubin no higher than 258 μmol/L, resolving by one week in a term infant; this baby’s 68 μmol/L, almost entirely unconjugated, sits comfortably inside that pattern, and pigmented stools with normal urine confirm bile flow is intact. The lecture also names breastfeeding-associated jaundice as common in a thriving breastfed infant, with weight, urine and stool output as the way to check feeding is adequate — all reassuring here.\n\nAgainst the ladder: a **prolonged jaundice screen** is reserved for jaundice still present beyond the 14-day cut-off the box itself names, not at day 6. **Phototherapy** is started when the total bilirubin approaches a threshold roughly 102 μmol/L below the exchange-transfusion level for the infant’s age in hours — a level far above 68 μmol/L at day 6. **Top up feeds with formula milk** is the lecture’s own remedy for breastfeeding-associated jaundice, but only when intake looks inadequate (poor weight gain, reduced urine or stool output); this baby is thriving and feeding well, so supplementing would undermine breastfeeding for no benefit. **Repeating the bilirubin in 8 hours** implies a level close to a treatment threshold that needs tight tracking, which does not apply to a low, unconjugated bilirubin in a well infant — the lecture’s own follow-up advice is a review in the following days, not hours.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise a low, unconjugated bilirubin in a thriving, well 6-day-old as needing no treatment, reserving further work-up for jaundice persisting beyond 14 days.',
  source: 'Pediatrics endpoint part1.pdf p.838'
},

{
  id: 'pedep-neo-22',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'A 12-hour newborn is noted to be jaundiced. Indirect bilirubin 6.4 mg/dl. What is the appropriate management?',
  options: [
    'Admit the baby to the incubator for phototherapy and lab Ix.',
    'Repeat the bilirubin measurement after another 12 hours',
    'Ensure adequate breast feeding and repeat bilirubin measurement after 24 hours',
    'Reassure the mother that this is normal',
    'Give bottle feeds for 24 hours then resume breast feeding'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> Jaundice appearing within the first 24 hours is always pathologic, often due to hemolysis. Such cases require immediate phototherapy and investigations to determine the cause.\n\n---\n\n`8) COMMON PROBLEMS IN THE TERM NEWBORN.txt` states directly that visible jaundice with a total bilirubin above 5 mg/dL before 24 hours of age is most commonly the result of significant haemolysis — this infant is jaundiced at 12 hours with an indirect (unconjugated) bilirubin of 6.4 mg/dL, already over that threshold, so the timing alone marks this as pathological rather than physiological jaundice, which by definition never appears before 24 hours.\n\nAgainst the ladder: admitting for phototherapy plus laboratory investigations (blood group, Coombs test, full blood count and smear) treats the bilirubin while the haemolytic cause is sought, matching the box. **Repeating the bilirubin after another 12 hours** or **after 24 hours with reassurance about breastfeeding** both delay treatment and investigation of a level that is already pathological and may rise quickly with ongoing haemolysis. **Reassuring the mother that this is normal** is wrong outright, since early jaundice is never a normal finding. **Bottle feeds for 24 hours then resume breastfeeding** treats this as breastfeeding-associated jaundice, which by definition presents later, in a thriving infant with a slower-rising, unconjugated bilirubin — not a jaundiced 12-hour-old requiring urgent evaluation.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise jaundice before 24 hours of age as pathological, most often haemolytic, and requiring immediate phototherapy plus investigation rather than watchful waiting.',
  source: 'Pediatrics endpoint part1.pdf p.840'
},

{
  id: 'pedep-neo-23',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  image: 'q-pd-ep-842',
  imgAlt: 'Printed reference table with columns for diagnosis, jaundice type, presentation and notes.',
  stem: 'Talia is 2 weeks old and is breastfed. She is active and thriving but is jaundiced. Her bilirubin level is moderately raised at 10 mg/dl and is nearly all unconjugated. A urine dipstick is -VE. The following is a list of diagnoses that are associated with jaundice in the newborn period. Pick the most likely cause of the jaundice in this condition.',
  options: [
    'ABO incompatibility',
    'Biliary atresia',
    'Breast milk jaundice',
    'Congenital hypothyroidism',
    'Neonatal infection'
  ],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> Breast milk jaundice occurs in healthy, thriving infants after the first week of life. It is due to substances in breast milk that increase bilirubin reabsorption, and no treatment is needed.\n\n---\n\nThe printed table alongside this question lays the five options out by jaundice type and typical presentation. Talia’s picture — thriving, unconjugated bilirubin, negative urine dipstick, onset after the first week — matches exactly the "breast milk jaundice" row: begins 1–2 weeks, thriving infant, normal exam, negative urine dipstick. `8) COMMON PROBLEMS IN THE TERM NEWBORN.txt` describes moderate unconjugated hyperbilirubinemia lasting 6–12 weeks in a thriving breastfed infant, without evidence of haemolysis, hypothyroidism or other disease, as strongly suggestive of this diagnosis — the negative dipstick argues against a urinary or infective cause, and the infant’s wellbeing argues against anything that would make her unwell.\n\nThe table’s other rows explain why each distractor is wrong: **ABO incompatibility** is unconjugated but presents early, with signs of haemolysis and a positive Coombs test, not at two weeks in a well infant. **Biliary atresia** is a *conjugated* jaundice with pale stools, the opposite of this nearly-all-unconjugated picture. **Congenital hypothyroidism** does cause prolonged unconjugated jaundice, but with other hypothyroid signs (lethargy, constipation, feeding difficulty) that this thriving infant does not have, and it is caught by the newborn screen rather than diagnosed on this picture alone. **Neonatal infection** produces a mixed or unconjugated pattern in an ill-appearing infant with fever or poor feeding — Talia is active and thriving, which excludes it.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Use the printed comparison table to match a thriving, unconjugated, dipstick-negative jaundice at 2 weeks to breast milk jaundice rather than a haemolytic, biliary, endocrine or infective cause.',
  source: 'Pediatrics endpoint part1.pdf p.842'
},

{
  id: 'pedep-neo-24',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'A 4.3 kg infant is delivered to a woman whose diabetes mellitus is poorly controlled. Of the following, the MOST likely neonatal manifestation of maternal diabetes is:',
  options: [
    'Anemia',
    'Hirschsprung disease',
    'Hypercalcemia',
    'Polycythemia',
    'Blood glucose 75 mg/dl'
  ],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> Infants of diabetic mothers are prone to polycythemia due to chronic intrauterine hypoxia stimulating erythropoiesis. They may also have hypoglycemia, hypocalcemia, and cardiomyopathy.\n\n---\n\n`7) Intro to neonatology.txt` lists the recognised complications of an infant of a diabetic mother: fetal demise, macrosomia, congenital malformations, RDS, hyperbilirubinemia, hypoglycemia, hypocalcemia, polycythemia, renal vein thrombosis and cardiomyopathy. This 4.3 kg baby is macrosomic, the expected result of fetal hyperinsulinaemia driving excess growth, and polycythaemia is on that same list, driven by the chronic relative intrauterine hypoxia that hyperglycaemia and placental changes produce.\n\nAgainst the ladder: **Anemia** is the opposite of the expected finding — these infants tend toward polycythaemia, not anaemia. **Hirschsprung disease** is not on the lecture’s IDM list; the bowel anomaly it does name is sacral hypoplasia with small left colon syndrome, a different entity, so Hirschsprung is a distractor built to be confused with that. **Hypercalcemia** inverts the real association — the lecture names *hypo*calcemia, from a functional immaturity of the parathyroid response, as the expected finding. **Blood glucose 75 mg/dl** is printed as a normal value and is itself a distractor: infants of diabetic mothers are prone to *hypoglycemia* after birth once the maternal glucose supply is cut off but fetal hyperinsulinaemia persists, not to a normal or high glucose reading.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Identify polycythaemia as the classic neonatal manifestation of maternal diabetes, distinguishing it from the inverted or unrelated distractors on the list.',
  source: 'Pediatrics endpoint part1.pdf p.844'
},

{
  id: 'pedep-neo-25',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'A baby is born with cord bilirubin of 5 mg/dl. Two hours later the serum bilirubin increased to 8 mg/dl. There is no history of premature rupture of membrane (PROM). The most probable cause is:',
  options: [
    'Congenital spherocytosis',
    'Sickle cell anemia',
    'RH incompatibility',
    'Breast milk jaundice',
    'Thalassemia'
  ],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> Rapid rise in bilirubin within hours of life strongly suggests hemolysis, most commonly Rh incompatibility in a sensitized mother. This requires urgent evaluation and treatment.\n\n---\n\n`8) COMMON PROBLEMS IN THE TERM NEWBORN.txt` states that visible jaundice with a bilirubin rising this fast, this early, is most commonly a result of significant haemolysis, and separately describes Rh-isoimmunisation as less common than ABO incompatibility but more severe and more predictable, with affected neonates often anaemic at birth and continued haemolysis rapidly worsening both the bilirubin and the anaemia — exactly the trajectory described here. The absence of PROM (a risk factor for infection, not haemolysis) points away from sepsis as the cause of this rapid bilirubin rise and keeps the reasoning on an immune-haemolytic process.\n\nAgainst the ladder: **Congenital spherocytosis** and **thalassemia** are both possible causes of neonatal haemolysis, but they are inherited red-cell defects that the lecture notes are diagnosed on smear and family history, not the first, most probable explanation for an immediate, sharply rising bilirubin at birth. **Sickle cell anemia** does not typically cause haemolysis in the immediate newborn period, since fetal haemoglobin still dominates and sickling has not yet begun. **Breast milk jaundice** is unconjugated but slow-onset, appearing after the first week in a thriving infant, the opposite of a bilirubin doubling within two hours of birth.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise a rapidly rising bilirubin from birth as Rh isoimmunisation rather than a slower-onset or non-haemolytic cause.',
  source: 'Pediatrics endpoint part1.pdf p.846'
},

{
  id: 'pedep-neo-26',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'A term infant who was delivered at home is breastfeeding poorly. She is referred to you 7 days after birth because of bleeding from the umbilical cord and blood in the stool. Findings on the physical examination are normal. There are no petechiae, and there is no hepatosplenomegaly, purpura, nor neurologic abnormality. Of the following the MOST likely diagnosis is:',
  options: [
    'classic vitamin K deficiency',
    'disseminated intravascular coagulation',
    'factor VIII deficiency',
    'neonatal alloimmune thrombocytopenia',
    'Von Willebrand disease'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> Infants who did not receive vitamin K prophylaxis are at risk for bleeding in the first week of life. Presentation includes GI or umbilical bleeding with otherwise normal examination.\n\n---\n\nA home delivery raises the likelihood that intramuscular vitamin K prophylaxis was missed *(not taken from the course material; the cached deck does not describe the prophylaxis protocol)*, and bleeding on day 7 from the umbilical stump and gut, with an otherwise entirely normal examination, is the textbook picture of classic vitamin K deficiency bleeding. `47)Hemorrhagic disorders .txt` sets vitamin K deficiency against DIC on a table where vitamin K deficiency keeps a normal platelet count, normal bleeding time and normal thrombin time — consistent with a baby who looks well apart from the bleeding itself.\n\nAgainst the ladder: **DIC** is explicitly excluded by the normal exam — the lecture’s own DIC picture includes petechiae, thrombosis and the clinical signs of the underlying illness driving it, none of which are present here. **Factor VIII deficiency** (haemophilia A) classically causes joint and muscle bleeding rather than umbilical or GI bleeding, and severe bleeding this early, before circumcision or another haemostatic challenge, is less typical. **Neonatal alloimmune thrombocytopenia** causes bleeding through a low platelet count and would be expected to produce petechiae or purpura, which the exam specifically rules out. **Von Willebrand disease** more commonly causes mucosal or post-procedural bleeding later in life and is not the "most likely" explanation for an isolated umbilical-and-GI bleed with a clean exam in an unprophylaxed home-born infant.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise isolated umbilical and GI bleeding with a normal exam at day 7 in an unprophylaxed infant as classic vitamin K deficiency, distinguishing it from causes that also mark the skin or joints.',
  source: 'Pediatrics endpoint part1.pdf p.848'
},

{
  id: 'pedep-neo-27',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'In hyaline membrane disease which of the following is WRONG?',
  options: [
    'Manifestations appear within 4 hours after birth',
    'More common in infants of diabetic mothers',
    'Surfactant is an effective replacement therapy in severe cases',
    'Steroids given antenatally to the mother is useless',
    'Cesarean section delivery is a risk factor'
  ],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> Antenatal steroids significantly reduce the risk of RDS by accelerating surfactant production. Saying they are useless is incorrect.\n\n---\n\nThis is a "which statement is WRONG" question, so the correct choice is the one false statement among five otherwise-true ones. `9) Respiratory distress in newborn.txt` names antenatal corticosteroids — betamethasone or dexamethasone, given intramuscularly to the mother roughly 48 hours before delivery at 34 weeks of gestation or less — as prevention for hyaline membrane disease, working by accelerating fetal lung maturity, the opposite of "useless." That makes the steroid option the wrong (correct-to-select) statement.\n\nThe other four options are each true, and each is confirmed by the same lecture: **manifestations appear within 4 hours after birth** matches the lecture describing respiratory distress appearing "immediately or shortly after birth," worsening over the first 48 hours. **More common in infants of diabetic mothers** — the lecture lists RDS among the recognised complications of maternal diabetes, since fetal hyperinsulinaemia delays surfactant maturation. **Surfactant is an effective replacement therapy in severe cases** is one of the lecture\'s three named treatment pillars for hyaline membrane disease, alongside supportive care and assisted ventilation. **Cesarean section delivery is a risk factor** *(not taken from the course material as a discrete listed risk factor; elective caesarean before labour is a well-established RDS risk factor because the catecholamine surge of labour helps clear fetal lung fluid and prime surfactant release, a surge a pre-labour section bypasses)*.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Identify that antenatal corticosteroids reduce RDS risk by accelerating surfactant production, making "steroids are useless" the false statement among true ones.',
  source: 'Pediatrics endpoint part1.pdf p.850'
},

{
  id: 'pedep-neo-28',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'Hypoxic – ischemic Encephalopathy may be associated with all of the following except?',
  options: [
    'Persistent pulmonary hypertension of newborn',
    'Hypotension',
    'Renal failure',
    'Hypercalcemia',
    'DIC'
  ],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> HIE can cause hypotension, renal failure, PPHN, and DIC, but hypocalcemia (not hypercalcemia) is more typical. Hypercalcemia is not associated.\n\n---\n\nThis is an "except" question: four options are recognised complications of hypoxic-ischaemic encephalopathy and one is not. `12) HIE.txt` covers the multiorgan support a cooled infant needs — maintaining oxygenation, perfusion, vasopressor support, and "normal hematocrit, blood glucose and electrolyte level esp calcium" — which is the lecture\'s own signal that calcium derangement, specifically toward *hypo*calcaemia, belongs to the expected picture, matching the box\'s correction that hypocalcaemia, not hypercalcaemia, is what actually occurs.\n\nHypoxic-ischaemic injury is a systemic insult, not a brain-only one, and the box\'s other three associations follow from that: perinatal asphyxia impairs myocardial contractility and produces **hypotension**; ischaemic tubular injury from the same hypoxic-hypoperfusion event produces **renal failure**; loss of the normal fall in pulmonary vascular resistance at birth produces **persistent pulmonary hypertension of the newborn**; and endothelial and hepatic injury from hypoxia-ischaemia can trigger a consumptive coagulopathy, **DIC** *(these three mechanisms beyond the calcium note above are not spelled out in the cached HIE lecture; not taken from the course material)*. **Hypercalcemia** is the one option with no place in this picture — hypoxic-ischaemic stress and the vasopressor/inotropic support used to treat it both push serum calcium down, not up, which is exactly why the box singles it out as the exception.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise hypercalcaemia, not hypocalcaemia, as the finding not associated with hypoxic-ischaemic encephalopathy, against a background of hypotension, renal failure, PPHN and DIC.',
  source: 'Pediatrics endpoint part1.pdf p.852'
},

{
  id: 'pedep-neo-29',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'The preterm newborn is defined as:',
  options: [
    '<37 weeks gestation',
    '>37 weeks gestation',
    '<37 weeks gestation',
    '<30 weeks gestation',
    '>30 weeks gestation'
  ],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> Preterm is defined as delivery before 37 completed weeks of gestation. This classification is important for risk assessment.\n\n---\n\n**Printed defect, flagged per the numbers exception:** the endpoint file prints options a and c as identical text, "<37 weeks gestation," with the highlighted key sitting on the second occurrence (option c) rather than the first (option a) — an apparent duplication rather than a genuinely distinct fifth option. Both identical options are transcribed here exactly as printed, and `answer` is left at the staged key, index 2 (the highlighted second occurrence), per the standing rule that a defective key is recorded, never disputed or moved.\n\nThe clinical content itself is unambiguous: `7) Intro to neonatology.txt` classifies newborns by gestational age immediately alongside its birth-weight categories (LBW <2500 g, VLBW <1500 g, ELBW <1000 g), and separately gives the incidence of preterm birth as roughly 11% of livebirths in the US — consistent with the standard obstetric cutoff of birth before 37 completed weeks of gestation used throughout the deck\'s prematurity discussion. The specific numeral "37 completed weeks" is not printed verbatim anywhere in the cached slide text extracted from this deck *(not taken from the course material as a literal quoted threshold; it is the standard WHO/obstetric definition of preterm birth)*.\n\nAgainst the distractor design: **>37 weeks gestation** and **>30 weeks gestation** both invert the direction of the cutoff — preterm means born *before*, not after, the threshold. **<30 weeks gestation** sets the cutoff far too low; that range instead marks the extremely-preterm subgroup, not the boundary for "preterm" as a whole.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Identify birth before 37 completed weeks of gestation as the definition of preterm, and record the printed duplicate-option defect without disputing the staged key.',
  source: 'Pediatrics endpoint part1.pdf p.854'
},

{
  id: 'pedep-neo-30',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: "Naser, a newborn baby, is noted to have hepatosplenomegaly and a petechial rash. His red eye reflex is abnormal and there is no heart murmur. He fails his newborn screening hearing test. His mother's antenatal screening bloods were all normal. What is the most likely condition that has caused these symptoms?",
  options: [
    'Dysmorphic syndrome',
    'Congenital infection',
    'Infant of diabetic mother',
    'Cranial abnormality',
    'Neonatal infection'
  ],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> Classic TORCH infections cause microcephaly, cataracts, hepatosplenomegaly, and sensorineural hearing loss. The abnormal red reflex suggests cataracts from congenital rubella or CMV.\n\n---\n\nNaser\'s findings — hepatosplenomegaly, a petechial rash, an abnormal red reflex, and a failed hearing screen — combine four separate systems (liver/spleen, skin, eye, ear) into one intrauterine picture, which is the pattern that points to a TORCH (Toxoplasmosis, Other, Rubella, CMV, Herpes) congenital infection rather than a single-organ diagnosis. `7) Intro to neonatology.txt` lists TORCH and "congenital infection" among the recognised causes of symmetrical IUGR/SGA, and `58) cerebral palsy.txt` names intrauterine TORCH infection as a prenatal risk factor serious enough to warrant TORCH screening when suspected — confirming TORCH as a real, taught cause of multisystem neonatal disease, though neither cached deck spells out the specific tetrad of hepatosplenomegaly, petechiae, cataract and sensorineural hearing loss printed in the box *(that specific clinical constellation, and the fact that congenital rubella and CMV are the two classic causes of a neonatal cataract with an abnormal red reflex, is not taken from the course material)*. A normal maternal antenatal screen does not rule this out, since routine antenatal panels in most settings do not include full TORCH serology, and several TORCH infections (notably CMV) can be asymptomatic in the mother *(also not taken from the course material)*.\n\nAgainst the ladder: a **dysmorphic syndrome** (e.g. a chromosomal disorder) is not excluded outright, but nothing in the vignette describes dysmorphic facial or limb features, and a syndrome alone does not explain a petechial rash. **Infant of diabetic mother** is undermined by the stem itself, which gives no history of maternal diabetes and specifically notes no heart murmur, whereas IDM-associated cardiomyopathy is often what produces one. **Cranial abnormality** is too vague and structural to explain a multisystem picture spanning liver, skin, eye and ear. **Neonatal infection** (postnatal sepsis) can cause hepatosplenomegaly and a petechial rash from DIC or thrombocytopenia, but it does not produce a congenital cataract or congenital sensorineural hearing loss — those two findings are stigmata of an *intrauterine*, not a postnatal, infection, which is exactly what separates "congenital infection" from plain "neonatal infection" as an answer choice.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise hepatosplenomegaly, petechiae, an abnormal red reflex and failed hearing screening together as the multisystem pattern of a TORCH congenital infection, distinguishing it from postnatal sepsis, a syndrome or IDM.',
  source: 'Pediatrics endpoint part1.pdf p.856'
},

{
  id: 'pedep-neo-31',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'During a normal term newborn resuscitation, which of the following should be performed first?',
  options: [
    'The infant should be dried and kept warm under a radiant heater',
    'The heart rate should be auscultated.',
    'Breath sounds should be auscultated.',
    'The nose and oropharynx should be suctioned'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> The initial step is to prevent hypothermia by drying and warming. Airway, breathing, and circulation steps follow as needed.\n\n---\n\nFor a normal term delivery, the very first action in the standard newborn resuscitation sequence is drying the infant and placing it under a radiant heater, because heat loss is rapid in a wet newborn and hypothermia itself raises oxygen consumption and worsens the respiratory and circulatory status that the following steps are trying to assess — drying and warming has to happen *before* that assessment is meaningful, not after it *(the routine stepwise newborn resuscitation sequence itself is not spelled out in the cached decks; not taken from the course material, though `9) Respiratory distress in newborn.txt` does list delivery-room thermoregulation as part of its own supportive-care treatment bullet, consistent with warmth coming first)*.\n\nAgainst the ladder: **auscultating the heart rate** and **auscultating breath sounds** are both part of the primary assessment that follows stabilisation, not the opening action — they only give a meaningful reading once the infant is dried, warm and positioned. **Suctioning the nose and oropharynx** is not the default first step for a vigorous term newborn; the same lecture reserves oropharyngeal suctioning "as soon as the head is delivered" specifically for the meconium-stained delivery, where clearing the airway of aspirated meconium is the priority, not for a routine term birth. Applying suction before drying and warming a normal newborn also risks a vagal bradycardic response and delays the one step that actually needs to happen first.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Identify drying and warming under a radiant heater as the first step of a normal term newborn resuscitation, ahead of auscultation or suctioning.',
  source: 'Pediatrics endpoint part1.pdf p.858'
},

{
  id: 'pedep-neo-32',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'Which of the following statements is TRUE about Transient tachypnea of the newborn?',
  options: [
    'Commonly associated with caesarian section delivery',
    'Commonly associated with preterm delivery',
    'Usually treated with mechanical ventilation',
    'Caused by surfactant deficiency',
    'Mild prenatal infection is a common association'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> TTN results from delayed clearance of lung fluid, more common after C-section where labor-related catecholamine surge is absent. It is usually mild and self-limited.\n\n---\n\n`9) Respiratory distress in newborn.txt` names elective caesarean section, male gender and maternal diabetes as the printed risk factors for transient tachypnea of the newborn (TTN), and explains the mechanism directly: during labour, rising adrenaline makes fetal lung fluid secretion stop and resorption begin, so a delivery that bypasses labour — an elective section — misses that catecholamine trigger and clears fetal lung fluid more slowly, producing the wet-lung picture on chest X-ray (perihilar streaking, fluid in the interlobar fissures) that the same lecture describes.\n\nAgainst the ladder: **commonly associated with preterm delivery** inverts the lecture\'s own statement that TTN "occurs in term and late preterm neonates" — prematurity is the classic association for hyaline membrane disease (surfactant deficiency), not for TTN. **Usually treated with mechanical ventilation** overstates the lecture\'s management, which describes TTN as alleviated by supplemental oxygen or CPAP and resolving within three days, with most cases needing no active treatment at all. **Caused by surfactant deficiency** describes the pathophysiology of hyaline membrane disease, not TTN, which the lecture instead attributes to delayed clearance of fetal lung fluid by the pulmonary lymphatics. **Mild prenatal infection is a common association** is not a risk factor the lecture lists for TTN at all; it is not on the printed list of elective CS, male gender and maternal diabetes.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Identify elective caesarean delivery, via the missing labour catecholamine surge, as the true association for TTN, against prematurity, surfactant deficiency and prenatal infection.',
  source: 'Pediatrics endpoint part1.pdf p.860'
},

{
  id: 'pedep-neo-33',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'Of the following, the MOST likely complications to expect for infants of diabetic mothers are:',
  options: [
    'hyperacusis, hypercalcemia, hydronephrosis',
    'hyperbilirubinemia, hypercalcemia, polydactyly',
    'hyperglycemia, hypocalcemia, polysplenia',
    'hypoglycemia, hypocalcemia, polycythemia',
    'hypogonadism, hypocalcemia, polyuria'
  ],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> Hyperinsulinism causes hypoglycemia; calcium regulation is impaired, and hypoxia-induced erythropoiesis causes polycythemia. These are the classic complications.\n\n---\n\n`7) Intro to neonatology.txt` lists hypoglycemia, hypocalcemia and polycythemia together among the recognised complications of an infant of a diabetic mother (alongside macrosomia, RDS, hyperbilirubinemia, renal vein thrombosis and cardiomyopathy), and the mechanism the box gives matches the lecture directly: fetal hyperinsulinism (from chronic maternal hyperglycaemia) drops the newborn\'s glucose the moment the maternal supply is cut at delivery, calcium regulation is impaired by the same hyperinsulinaemic state, and chronic relative intrauterine hypoxia drives excess erythropoiesis into polycythaemia.\n\nEach distractor is built by inverting or substituting one or more of these three terms: **hyperacusis, hypercalcemia, hydronephrosis** replaces all three with unrelated or opposite findings — hyperacusis and hydronephrosis are not on the IDM list at all, and hypercalcemia inverts the true hypocalcaemia. **Hyperbilirubinemia, hypercalcemia, polydactyly** keeps one real IDM finding (hyperbilirubinaemia is on the lecture\'s list) but inverts the calcium direction and substitutes a structural anomaly, polydactyly, that is not a recognised IDM complication *(polydactyly is not on the cached lecture\'s IDM list; not taken from the course material)*. **Hyperglycemia, hypocalcemia, polysplenia** inverts the glucose direction — these infants become *hypo*glycaemic after birth, not hyperglycaemic — and substitutes polysplenia, an unrelated congenital anomaly. **Hypogonadism, hypocalcemia, polyuria** swaps in two findings absent from the IDM list entirely.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Match hypoglycaemia, hypocalcaemia and polycythaemia as the correct three-term set of classic IDM complications, against distractor sets that invert or substitute one term.',
  source: 'Pediatrics endpoint part1.pdf p.862'
},

{
  id: 'pedep-neo-34',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'Which of the following birth injuries may be associated with severe blood loss and hypovolemic shock?',
  options: [
    'caput succedaneum',
    'cephalhematoma',
    'bruising at face',
    'subaponeurotic hemorrhage'
  ],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> Subgaleal hemorrhage can accumulate large amounts of blood, leading to hypovolemic shock. It is the most serious scalp birth injury.\n\n---\n\n`10) new Seizures . Birth injuries , Hpoglycemia 2.txt` lists subaponeurotic (sub-galeal) hemorrhage alongside caput succedaneum and cephalhematoma as the three differentials for a birth-related scalp swelling, but only the subaponeurotic space is unbounded: it lies between the galea aponeurotica and the periosteum, a loose plane with no anatomic borders, so bleeding into it can spread across the whole scalp and accumulate a large enough volume to cause hypovolemic shock — which is why the lecture and the box both single it out as the most serious of the three scalp injuries *(the specific mechanism — the unbounded subgaleal plane versus the bounded subperiosteal and subcutaneous ones — is not spelled out in the cached lecture beyond naming the three entities; not taken from the course material)*.\n\nAgainst the ladder: **caput succedaneum** is oedema of the subcutaneous tissue of the presenting part, crosses suture lines, and the lecture notes it resolves within about 48 hours — a fluid collection, not a blood collection, and never large enough to cause shock. **Cephalhematoma** is subperiosteal bleeding, and because the periosteum is tightly bound to each individual skull bone, the collection is limited by the suture lines and self-tamponades well before reaching a volume that threatens circulation. **Bruising at face** is superficial soft-tissue bruising from a difficult delivery (e.g. face presentation) and, however visible, does not carry the blood volume needed to produce hypovolaemic shock.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Identify subaponeurotic (subgaleal) haemorrhage, via its unbounded scalp plane, as the birth injury that can cause hypovolaemic shock, against the self-limited caput succedaneum and cephalhematoma.',
  source: 'Pediatrics endpoint part1.pdf p.864'
},

{
  id: 'pedep-neo-35',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'You perform a routine newborn examination on a baby who is 72 hours old. Which one of the following features requires further immediate assessment?',
  options: [
    'Acrocyanosis (cyanosis of the hands and feet)',
    'A heart murmur',
    'White vaginal discharge',
    'Breast enlargement',
    'Subconjunctival hemorrhages'
  ],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> Many newborn murmurs are benign, but a murmur at 72 hours could indicate congenital heart disease. This requires urgent evaluation.\n\n---\n\n`7) Intro to neonatology.txt` describes a systolic murmur (grade ii/vi, at the upper left sternal border) as part of the clinical picture of a haemodynamically significant patent ductus arteriosus — evidence that a newborn murmur is not automatically a normal finding and can be the first clue to a structural or ductal cardiac lesion that needs urgent cardiology work-up, rather than something to reassure the parents about on the spot *(the specific framing of a routine 72-hour check as a comparative checklist of "benign, no action" versus "needs urgent evaluation" findings is not printed in the cached deck as a single list; not taken from the course material)*.\n\nThe other four findings are all recognised benign variants of the first days of life. **Acrocyanosis** — bluish discolouration confined to the hands and feet from normal peripheral vasomotor instability — is distinct from *central* cyanosis, which the same lecture lists as a genuine sign of respiratory distress; acrocyanosis alone resolves without intervention *(the acrocyanosis-versus-central-cyanosis distinction itself is not spelled out in the cached deck beyond that central cyanosis heading; not taken from the course material)*. **White vaginal discharge** and **breast enlargement** both follow withdrawal of maternal oestrogen after delivery, are common in term newborns of either the expected sex, and settle over the following days to weeks without treatment *(not taken from the course material)*. **Subconjunctival hemorrhages** are minor, benign bleeds from pressure on the fetal head during vaginal delivery and resolve on their own within one to two weeks *(not taken from the course material)*.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise a new heart murmur at 72 hours as the finding that needs urgent cardiac evaluation, against acrocyanosis, vaginal discharge, breast enlargement and subconjunctival haemorrhage as benign newborn variants.',
  source: 'Pediatrics endpoint part1.pdf p.866'
},

{
  id: 'pedep-neo-36',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'The most important and effective action in neonatal resuscitation if the baby does not start to breathe after delivery is:',
  options: [
    'Provide oxygen',
    'Perform chest compressions',
    'Ventilate the lungs',
    'Give epinephrine',
    'Tracheal intubation'
  ],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> Positive pressure ventilation is the single most important and effective intervention in neonatal resuscitation. Oxygen, compressions, and drugs are secondary.\n\n---\n\n`3) Pediatric resuscitation.txt` states directly that bag-and-mask ventilation is as effective as endotracheal intubation, and dedicates its own slides to what makes bag-mask ventilation effective — using only the force and tidal volume needed to make the chest visibly rise, avoiding excess pressure, and having a second rescuer verify adequate chest expansion — which is exactly the emphasis behind the box’s claim that ventilating the lungs, not merely supplying oxygen, is the single most important action once a newborn fails to breathe *(the specific "airway is open but the baby still is not breathing → ventilate first" reasoning for the neonatal case is not spelled out as a standalone algorithm in the cached deck beyond this bag-mask-ventilation emphasis; not taken from the course material)*. Establishing lung inflation is what allows oxygen to actually reach the alveoli and what restores the heart rate in the great majority of apnoeic newborns, without needing to progress further down the resuscitation ladder.\n\nAgainst the ladder: **providing oxygen** alone does nothing if the lungs are not being inflated to move that oxygen into the alveoli — supplemental oxygen without ventilation cannot rescue an apnoeic baby. **Chest compressions** are reserved for a heart rate that stays low despite effective ventilation, and starting them before the lungs are ventilated skips the step that would have corrected the bradycardia on its own. **Epinephrine** is a later-tier drug, used only when compressions plus ventilation fail to raise the heart rate — administering it before ventilating would not solve the underlying problem of un-oxygenated blood. **Tracheal intubation** can deliver ventilation, but the same lecture states bag-mask ventilation is just as effective, so intubation is a route to achieve ventilation, not a separate step that outranks ventilating the lungs itself.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Identify lung ventilation, not oxygen alone, compressions, epinephrine or intubation specifically, as the single most important intervention for an apnoeic newborn.',
  source: 'Pediatrics endpoint part1.pdf p.868'
},
