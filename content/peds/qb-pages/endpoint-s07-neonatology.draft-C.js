/* Section 7 (Neonatology), half C, part 1 — pedep-neo-37 .. pedep-neo-45.
   Source: Pediatrics endpoint part1.pdf pp.870-902. Staged in
   content\peds\qb-pages\endpoint-s07-neonatology.array.js, n37-n53.
   This file drafts n37-n45 only; n46-n53 are a second pass. */

{
  id: 'pedep-neo-37',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'A mother is known to have pre-eclampsia and her fetus has shown signs of intrauterine growth restriction on antenatal scans. He is delivered at 37 weeks and weighs 2.2 kg. He is admitted to the Special Care Baby Unit because of his size. He appears well and has had a breast feed. What is he most at risk of?',
  options: [
    'Anemia',
    'Congenital cardiac abnormality',
    'Group B streptococcus infection',
    'Hypoglycemia',
    'Hyperglycemia'
  ],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> Small-for-gestational-age infants have reduced glycogen and fat stores, putting them at high risk of hypoglycemia. Close monitoring is required.\n\n---\n\nPre-eclampsia restricts placental perfusion, and the resulting intrauterine growth restriction leaves this baby small-for-gestational-age (SGA) at term rather than simply preterm. `7) Intro to neonatology.txt` lists the complications of SGA explicitly: respiratory distress, hypothermia, **hypoglycemia**, congenital infection, polycythemia/hyperbilirubinemia and NEC. `10) new Seizures . Birth injuries , Hpoglycemia 2.txt` gives the mechanism directly under its hypoglycemia section — limited glycogen stores from IUGR and prematurity are named as a specific pathogenic route to neonatal hypoglycemia, alongside SGA\'s decreased glycogen and fat stores as an aetiological category in its own right. The same deck\'s working definition of neonatal hypoglycemia is <30 mg/dL in the first 24 hours, <40 mg/dL from 1–3 days and <45 mg/dL after day 3.\n\nThe vignette detail that the baby "appears well" does not argue against hypoglycemia — the same lecture stresses that hypoglycemia is "very non-specific and mimics many illnesses," with signs as subtle as poor feeding, temperature instability, lethargy and jitteriness rather than a dramatic presentation, which is exactly why glycemic screening is protocol-driven in a growth-restricted infant rather than triggered only by symptoms.\n\nAgainst the ladder: **Anemia** is not the SGA-specific risk — chronic intrauterine hypoxia in growth restriction more typically drives fetal erythropoietin up and produces **polycythemia**, the opposite direction from anaemia. **Congenital cardiac abnormality** tracks with the *symmetrical* (early-onset) pattern of IUGR, where chromosomal anomalies and TORCH infection are the drivers; this vignette gives late, pre-eclampsia-driven placental insufficiency, the asymmetrical pattern, with no dysmorphic or cardiac findings described. **Group B streptococcus infection** is a risk conferred by maternal colonisation and obstetric factors (prolonged rupture of membranes, maternal fever in labour), none of which is mentioned here — SGA itself does not specifically raise GBS risk the way it raises hypoglycaemia risk. **Hyperglycemia** runs in the opposite direction from what SGA physiology predicts; it is the infant of a diabetic mother (fetal hyperinsulinaemia in utero, then rebound hypoglycaemia after delivery) who sits at the hyperglycaemia/hypoglycaemia end of that spectrum, not a growth-restricted infant with depleted glycogen reserves.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise a pre-eclampsia-related, growth-restricted term infant as small-for-gestational-age and identify hypoglycaemia, not anaemia or hyperglycaemia, as the specific metabolic risk from depleted glycogen and fat stores.',
  source: 'Pediatrics endpoint part1.pdf p.870'
},

{
  id: 'pedep-neo-38',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'Which of the following is RIGHT regarding pathological apnea in newborns?',
  options: [
    'It lasts < 20 seconds with tachycardia',
    'It is central if there is cessation of air flow with presence of respiratory effort',
    'More common in full term neonates',
    'Bag and mask ventilation are contraindicated',
    'May be treated with theophylline'
  ],
  answer: 4,
  explanation: '**The endpoint file prints this explanation:**\n\n> Pathological apnea lasts >20 seconds or is associated with bradycardia. In preterms, caffeine or theophylline can be used as respiratory stimulants.\n\n---\n\n`7) Intro to neonatology.txt` covers apnea of prematurity as a developmental problem of respiratory regulation whose "incidence is inversely related to GA" (more common the more preterm the infant, the opposite of option c), that generally resolves by 36 weeks corrected gestational age, and that a cessation of breathing of 20 seconds leads to bradycardia and desaturation — the deck\'s own numeral for the pathological cut-off, matching the box\'s ">20 seconds." The same lecture lists secondary causes to screen for: hypoxia, infection, anaemia, electrolyte disturbance, hypoglycaemia, seizures, heart failure, or aspiration from gastro-oesophageal reflux.\n\nMethylxanthines (caffeine, and historically theophylline) as respiratory stimulants for apnea of prematurity, and the central-versus-obstructive-versus-mixed classification of apnoea by airflow and respiratory effort, are standard neonatal teaching but are not spelled out in the cached deck beyond the definition and risk-factor list above *(not taken from the course material)*.\n\nAgainst the ladder: **"< 20 seconds with tachycardia"** inverts both numbers the box gives — pathological apnoea is defined by a *longer* pause than 20 seconds and by *brady*cardia (from vagally-mediated reflex bradycardia and hypoxia), not tachycardia. **"Central if there is cessation of air flow with presence of respiratory effort"** describes *obstructive* apnoea, not central apnoea — central apnoea is cessation of air flow *with absence* of respiratory effort (the drive to breathe itself stops), while obstructive apnoea keeps respiratory effort against a blocked airway; the option swaps the two definitions *(the central/obstructive/mixed distinction itself is not taught in the cached deck; not taken from the course material)*. **"More common in full term neonates"** contradicts the lecture directly, which states the incidence rises with lower gestational age, so apnoea of prematurity is a preterm, not a term, problem. **"Bag and mask ventilation are contraindicated"** is simply wrong — tactile stimulation and, if that fails, bag-and-mask ventilation are standard first-line responses to an apnoeic spell, exactly as in general neonatal resuscitation.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Define pathological neonatal apnoea as a pause >20 seconds with bradycardia, most common in preterm infants, and distinguish central from obstructive apnoea by the presence or absence of respiratory effort.',
  source: 'Pediatrics endpoint part1.pdf p.872'
},

{
  id: 'pedep-neo-39',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'Which one of the following is the most important cause of jaundice presenting in the first 24 h of life?',
  options: [
    'Prematurity',
    'Hemolysis',
    'Breastfeeding',
    'Physiological jaundice',
    'Early-onset sepsis'
  ],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> Jaundice appearing within 24 hrs is always pathologic, most often due to hemolysis (Rh or ABO incompatibility). Physiological jaundice never appears this early.\n\n---\n\n`8) COMMON PROBLEMS IN THE TERM NEWBORN.txt` states this directly: "visible jaundice with a TSB greater than 5 mg/dL before 24 hours of age is most commonly a result of significant hemolysis," and separately gives Rh alloimmunisation and ABO incompatibility as its two named antibody-mediated (Coombs-positive) hemolytic causes — Rh disease "often anaemic at birth, with continued hemolysis rapidly causing hyperbilirubinaemia and worsening anaemia," and ABO incompatibility "usually mild" but capable of needing therapy in a type-O mother\'s infant.\n\nAgainst the ladder, the same lecture\'s own physiological-jaundice criteria rule out the other options directly. **Physiological jaundice** is defined by the deck as "visible jaundice appearing *after* 24 hours of age," with a rise of <5 mg/dL/day and a peak at 3–5 days — by definition it cannot be the cause of jaundice presenting within the first 24 hours, which is exactly the box\'s closing line. **Prematurity** predisposes to *exaggerated physiological* jaundice (from lower UDPGT activity and immature conjugation) and to delayed clearance, but it operates on the same after-24-hour physiological timeline, not as a first-day trigger. **Breastfeeding** (breastfeeding-associated jaundice, from poor early enteral intake and increased enterohepatic circulation) is a first-week problem that "occurs before the milk supply is established," again after the first 24 hours, and is a nonhemolytic mechanism with a normal reticulocyte count, unlike the elevated reticulocyte count of a hemolytic process. **Early-onset sepsis** can cause jaundice in a sick neonate, but it is not the *most important* cause of first-day jaundice in the framework the lecture gives — hemolysis is named specifically as the leading mechanism, and sepsis-associated jaundice is typically accompanied by other signs of systemic illness rather than isolated first-day hyperbilirubinaemia.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Identify hemolysis (Rh or ABO incompatibility) as the leading cause of jaundice presenting within the first 24 hours of life, and recognise that physiological jaundice by definition cannot appear this early.',
  source: 'Pediatrics endpoint part1.pdf p.874'
},

{
  id: 'pedep-neo-40',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: "A black mother is found to have glycosuria at her midwife appointment at 32 weeks' gestation. Her glucose tolerance test and fasting glucose are abnormal. She is given dietary advice to control her blood glucose. What problem is her newborn baby at most increased risk of?",
  options: [
    'Anemia',
    'Hyperglycemia',
    'Respiratory distress syndrome',
    'Hypocalcemia'
  ],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> Hyperinsulinemia delays surfactant synthesis, so IDM infants have increased risk of RDS even at term.\n\n---\n\nAbnormal glucose tolerance and fasting glucose at 32 weeks with dietary management is gestational diabetes, and this baby is therefore an infant of a diabetic mother (IDM). `7) Intro to neonatology.txt` lists the IDM complication set directly: fetal demise, macrosomia, congenital malformations, **RDS**, hyperbilirubinaemia, hypoglycaemia, hypocalcaemia, polycythaemia, renal vein thrombosis and cardiomyopathy — RDS is named fourth on that list, and the lecture separately gives the aetiological chain as maternal hyperglycaemia driving fetal hyperglycaemia and fetal hyperinsulinaemia. The mechanism by which that fetal hyperinsulinaemia delays type II pneumocyte surfactant production, raising RDS risk in an IDM even at term rather than only in a preterm infant, is standard neonatal physiology but is not spelled out step-by-step in the cached deck beyond naming RDS on the complication list *(not taken from the course material)*.\n\nAgainst the ladder: **Anemia** is not on the deck\'s IDM list — **polycythaemia** is, from chronic fetal hyperinsulinaemia and relative fetal hypoxia driving erythropoietin up, the opposite direction from anaemia. **Hyperglycemia** is not the IDM risk either — the same lecture lists **hypoglycaemia** as complication #6, since the fetus\'s own hyperinsulinaemia persists after birth once the maternal glucose supply is cut off at delivery, driving the newborn\'s glucose *down*, not up. **Hypocalcemia** is genuinely on the IDM list (#7) and is a real risk in this baby, but it is not the option the box keys — RDS is highlighted as the single most-increased risk in the vignette, and between two real complications on the same list the box\'s own emphasis, not this expansion, decides which one is "most."\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Identify RDS, driven by fetal hyperinsulinaemia delaying surfactant synthesis, as the keyed complication of maternal gestational diabetes, distinct from hypoglycaemia, polycythaemia and hypocalcaemia which are also on the IDM complication list.',
  source: 'Pediatrics endpoint part1.pdf p.876'
},

{
  id: 'pedep-neo-41',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'Single most common cause of the decline in SIDS:',
  options: [
    'supine sleeping',
    'Feet to foot of cot',
    'separate bed',
    'avoid smoking'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> The "Back to Sleep" campaign (supine sleeping) has been the most significant factor in reducing SIDS rates worldwide.\n\n---\n\nSudden infant death syndrome and its risk-reduction advice are not covered in the cached lecture set at all — none of the peds decks carries a SIDS, "Back to Sleep," or safe-sleep section, so this entry is answered in full from general medical knowledge and tagged throughout *(not taken from the course material)*.\n\nThe international "Back to Sleep"/"Safe to Sleep" campaigns of the early 1990s promoted supine (back-lying) sleep positioning after prone sleeping was identified as a major modifiable SIDS risk factor; national SIDS rates fell sharply, often by more than half, in the years immediately following each country\'s campaign, more than any other single intervention introduced around the same time *(not taken from the course material)*.\n\nThe remaining three options are all genuine, guideline-listed components of safe-sleep advice, but none carries the same measured population-level impact as the positional change: **"Feet to foot of cot"** (positioning the baby with feet touching the foot of the cot) reduces the chance of the infant sliding under loose bedding and becoming covered, but it addresses one contributory hazard rather than the dominant modifiable factor. **"Separate bed"** (avoiding bed-sharing, particularly with a smoker, on a sofa, or when a parent is exhausted or has used alcohol/sedatives) lowers accidental overlay and airway-obstruction risk but is one element among several room-sharing/bed-sharing recommendations. **"Avoid smoking"** (both antenatal maternal smoking and postnatal exposure) is an independent, dose-related SIDS risk factor, but epidemiologically the shift to supine positioning produced the largest single drop in incidence when it was introduced, which is why the box names it specifically rather than smoking avoidance *(all not taken from the course material)*.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Identify supine sleep positioning ("Back to Sleep") as the single intervention most responsible for the population-level decline in SIDS, against other genuine but smaller-effect safe-sleep measures.',
  source: 'Pediatrics endpoint part1.pdf p.878'
},

{
  id: 'pedep-neo-42',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'Which requires further immediate investigation in a newborn?',
  options: [
    'heart murmur',
    'undescended testes',
    'subconjunctival hemorrhage',
    'breast enlargement'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> Unlike findings such as subconjunctival hemorrhage or breast enlargement, a murmur may indicate serious congenital heart disease.\n\n---\n\nThis is a general "which finding is not a benign newborn variant" item, testing the same underlying principle as other newborn-examination items in this bank: most soft-tissue and transient findings on a routine check are self-limiting, while a new murmur specifically needs cardiac work-up because it can be the only clinical clue to a structural heart defect that is otherwise asymptomatic in the first days of life. None of the cached peds decks carries a dedicated newborn-examination checklist covering these four specific findings, so the comparative detail below is answered from general medical knowledge and tagged throughout *(not taken from the course material)*.\n\nA **heart murmur** newly heard on a routine check is treated as needing further evaluation because, although many neonatal murmurs are transitional/innocent (e.g. from a closing ductus arteriosus), a persistent or otherwise-abnormal murmur can be the first sign of congenital heart disease that has not yet declared itself with cyanosis or heart failure, so it is not dismissed without at least a follow-up assessment.\n\nAgainst the ladder, the other three are recognised benign findings of the first days of life that do not need urgent work-up: **Undescended testes**, found in a minority of term boys at birth, very often descend spontaneously over the following months and are simply followed clinically rather than investigated immediately, with referral reserved for testes still undescended around 6 months of age. **Subconjunctival hemorrhage** is a minor, self-limited bleed from pressure on the fetal head during vaginal delivery that resolves without treatment over one to two weeks. **Breast enlargement**, seen in newborns of either sex, follows withdrawal of maternal oestrogen after birth and settles on its own over the following days to weeks without intervention *(all not taken from the course material)*.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise a new heart murmur as the newborn examination finding that needs further immediate investigation, against undescended testes, subconjunctival haemorrhage and breast enlargement as benign, self-limiting variants.',
  source: 'Pediatrics endpoint part1.pdf p.880'
},

{
  id: 'pedep-neo-43',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'A full-term male infant, with a birth weight of 3.7 kg, is born by elective caesarean section. His mother was well during pregnancy and had a normal blood glucose screen. Zak becomes tachypnoeic with indrawing between his ribs at 2 hours of age. Examination is otherwise normal. A chest X-ray looks normal. Diagnosis?',
  options: [
    'transient tachypnea of new born',
    'pneumonia',
    'aspiration of meconium',
    'bronchopulmonary dysplasia',
    'respiratory distress syndrome'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> TTN presents with tachypnea soon after birth, especially after C-section, and resolves with supportive care. CXR is often normal or shows mild fluid retention.\n\n---\n\n`9) Respiratory distress in newborn.txt` matches this vignette point for point. Transient tachypnoea of the newborn (TTN, also called RDS type 2 or "wet lung") is the single most common cause of neonatal respiratory distress, over 40% of cases, from delayed lymphatic clearance of fetal lung fluid. Its named risk factors are **elective caesarean section**, **male gender**, and maternal diabetes — this baby has the first two directly, with a normal glucose screen excluding the third. Onset is "within 2 hours after delivery with mild to moderate RD," matching this baby\'s tachypnoea and rib indrawing starting at exactly 2 hours. The chest radiograph classically shows perihilar streaking with fluid in the interlobar fissures, but the lecture also notes "TTN is a clinical diagnosis" — an early or mild film can look unremarkable, consistent with this vignette\'s normal CXR, and the box\'s own wording ("often normal or shows mild fluid retention") reflects that same variability. Management is supportive (supplemental oxygen or CPAP), and it resolves within about 3 days, most cases needing no active treatment.\n\nAgainst the ladder: **Pneumonia** typically presents with additional signs of sepsis (temperature instability, hypotension, lethargy) and is not specifically tied to the elective-CS, term, well-mother picture given here; nothing in the vignette (maternal fever, prolonged rupture of membranes) points to an infective route. **Aspiration of meconium** requires meconium-stained liquor at delivery, which is not mentioned, and MAS classically produces patchy, asymmetric infiltrates on CXR rather than a normal film. **Bronchopulmonary dysplasia** is a chronic lung disease of prematurity from prolonged ventilation/oxygen exposure over weeks; this is a term infant at 2 hours of age, far too early and without the ventilatory history BPD requires. **Respiratory distress syndrome** (surfactant deficiency, RDS type 1) is a disease of prematurity with onset in the first 4 hours and a fine reticulogranular CXR pattern with air bronchograms — this baby is full-term with a normal film, arguing against RDS and for the far more common, milder, self-resolving TTN.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise transient tachypnoea of the newborn from onset within 2 hours of an elective caesarean delivery in a term male infant with a normal or near-normal chest X-ray, against pneumonia, meconium aspiration, BPD and RDS type 1.',
  source: 'Pediatrics endpoint part1.pdf p.882'
},

{
  id: 'pedep-neo-44',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'Which group has the largest water distribution?',
  options: [
    'Preterm',
    'Full term',
    '1 year',
    '5 years'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> Preterm infants have the highest total body water proportion (up to 80–85%). This decreases with increasing age.\n\n---\n\nTotal body water as a proportion of body weight is not covered in the cached peds lecture set, so this entry is answered from general medical developmental physiology and tagged throughout *(not taken from the course material)*.\n\nTotal body water falls progressively across development: it is highest in the preterm fetus/infant, around 80–85% of body weight (matching the box\'s figure), falls to roughly 75–78% in the full-term newborn, continues down to about 60–65% by one year of age as extracellular water contracts relative to intracellular water and to growing fat and lean tissue mass, and settles near the adult figure of roughly 55–60% by around 5 years and beyond *(not taken from the course material)*. The mechanism is that a fetus/very preterm infant is proportionally almost all extracellular fluid and has very little body fat, and both postnatal diuresis in the first days of life and the accumulation of fat (which contains very little water) with advancing age steadily shrink the water fraction as a proportion of total weight.\n\nAgainst the ladder, each older group represents one step further along that same falling curve: **Full term** infants have already undergone some of the third-trimester extracellular fluid contraction and are less water-rich than a preterm infant born earlier in gestation. **1 year** and **5 years** sit progressively lower still as growth adds proportionally more fat and lean tissue relative to water, so ranking the options from highest to lowest water fraction reproduces exactly the order preterm > full term > 1 year > 5 years that the question asks about, with preterm keyed as the highest *(all not taken from the course material)*.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise that total body water as a proportion of body weight is highest in preterm infants and falls progressively through term, infancy and childhood.',
  source: 'Pediatrics endpoint part1.pdf p.884'
},

{
  id: 'pedep-neo-45',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'Which of the following is a common complication in infants of diabetic mothers?',
  options: [
    'Hypertrophic cardiomyopathy',
    'Microsomia',
    'Hyperglycemia',
    'Hypocalcemia'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> Infants of diabetic mothers may develop hypertrophic cardiomyopathy due to fetal hyperinsulinism causing septal hypertrophy.\n\n---\n\n`7) Intro to neonatology.txt` lists IDM complications explicitly and closes its IDM section with a dedicated heading, "HYPERTROPHIC CARDIOMYOPATHY IN IDM," naming it item #10 on the complication list alongside fetal demise, macrosomia, congenital malformations, RDS, hyperbilirubinaemia, hypoglycaemia, hypocalcaemia, polycythaemia and renal vein thrombosis. The mechanism the box gives — fetal hyperinsulinism driving septal hypertrophy — follows the same hyperinsulinaemia pathway the lecture uses to explain the other IDM complications: chronic fetal hyperinsulinaemia acts as a growth factor on cardiac muscle (as it does on overall somatic growth in macrosomia), thickening the interventricular septum.\n\nAgainst the ladder: **"Microsomia,"** as printed on the option, denotes an abnormally small or underdeveloped body part (e.g. hemifacial microsomia) — the opposite growth direction from what IDM actually produces, which is **macrosomia** (excess fetal growth from anabolic fetal hyperinsulinaemia), the complication the lecture lists as #2. **Hyperglycemia** is not the IDM risk after birth — the lecture lists **hypoglycaemia** (#6) instead, since the infant\'s own hyperinsulinaemia persists once the maternal glucose supply is cut off at delivery, driving glucose down rather than up. **Hypocalcemia** is where this option set is defective, and it is worth naming rather than glossing: hypocalcaemia sits on the lecture’s own IDM complication list at #7 and is every bit as common a complication as the keyed one, so as printed the question offers two defensible answers to a stem that asks for one. The endpoint file highlights hypertrophic cardiomyopathy, and `answer` is left there unchanged — the discrepancy is recorded, never disputed. Treat both as expected IDM findings; only the keyed one is what this page was testing.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Identify hypertrophic cardiomyopathy from fetal hyperinsulinism-driven septal hypertrophy as a recognised complication in infants of diabetic mothers, distinct from macrosomia, hypoglycaemia and hypocalcaemia which are also on the IDM list.',
  source: 'Pediatrics endpoint part1.pdf p.886'
},

{
  id: 'pedep-neo-46',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'A 12-hour newborn is noted to be jaundiced. Indirect bilirubin is 6.4 mg/dl. What is the appropriate management?',
  options: [
    'Admit the baby to the incubator for phototherapy and lab investigations',
    'Repeat the bilirubin measurement after another 12 hours',
    'Ensure adequate breast feeding and repeat bilirubin measurement after 24 hours',
    'Reassure the mother that this is normal',
    'Give bottle feeds for 24 hours then resume breast feeding'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> As with earlier case, jaundice before 24 hours is pathologic. The appropriate action is phototherapy with evaluation of hemolysis or infection.\n\n---\n\n`8) COMMON PROBLEMS IN THE TERM NEWBORN.txt` states that "visible jaundice with a TSB greater than 5 mg/dL before 24 hours of age is most commonly a result of significant hemolysis" — this baby is jaundiced at 12 hours with an indirect bilirubin of 6.4 mg/dl, comfortably above that 5 mg/dL threshold, so the jaundice is pathological by definition rather than physiological. The same deck\'s physiologic-jaundice criteria require visible jaundice appearing **after** 24 hours of age, which this baby\'s timing directly fails. First-day pathological jaundice of this kind needs admission for phototherapy together with the work-up the box names — evaluation for haemolysis (blood group/Rh typing, direct Coombs test, reticulocyte count) or infection — rather than outpatient observation, because indirect bilirubin can rise quickly enough in the first day of life to risk kernicterus if left unmonitored.\n\nAgainst the ladder: **"Repeat the bilirubin measurement after another 12 hours"** delays action on a level that is already high for 12 hours of age without doing anything to lower it or find the cause, and risks a dangerous rise in the interval. **"Ensure adequate breast feeding and repeat bilirubin measurement after 24 hours"** is the correct approach to *breastfeeding-associated* jaundice, which the same lecture places after the first week is established and drives by reduced enteral intake with a normal reticulocyte count — it does not fit a pathological, first-day, haemolysis-pattern rise, and 24 hours is far too long to wait at this level. **"Reassure the mother that this is normal"** contradicts the deck\'s own definition outright, since jaundice this early is explicitly *not* physiological. **"Give bottle feeds for 24 hours then resume breast feeding"** is a historical response to suspected breastfeeding jaundice that does nothing for a pathological, likely haemolytic process and again wastes 24 hours a first-day bilirubin of 6.4 mg/dl cannot safely be given.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise jaundice with a raised indirect bilirubin at 12 hours of age as pathological, requiring admission for phototherapy and evaluation for haemolysis or infection rather than observation or delayed rechecking.',
  source: 'Pediatrics endpoint part1.pdf p.888'
},

{
  id: 'pedep-neo-47',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'Which of the following is TRUE about Transient Tachypnea of the Newborn?',
  options: [
    'Oxygen therapy is always required',
    'It is the most common cause of respiratory distress in term infants',
    'It persists for several weeks',
    'Chest X-ray is always normal'
  ],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> TTN is the leading cause of respiratory distress in term babies. It is benign and resolves within 2–3 days.\n\n---\n\n`9) Respiratory distress in newborn.txt` states this directly: TTN is "the most common cause of neonatal RD constituting more than 40% of cases," occurring specifically "in term and late preterm neonates" — matching the option\'s wording almost verbatim. The same deck gives the mechanism (delayed lymphatic clearance of fetal lung fluid after labour), the onset (within 2 hours of delivery), and the course (symptoms lasting from a few hours up to 3 days, matching the box\'s "2–3 days"), a benign, self-limited timeline.\n\nAgainst the ladder: **"Oxygen therapy is always required"** overstates the lecture\'s management line, which is that TTN "is alleviated by supplemental oxygen or CPAP" when needed and that "most cases need no active treatment" at all — supplemental oxygen is a supportive option, not a universal requirement. **"It persists for several weeks"** contradicts the deck\'s own course directly, which caps symptoms at "3 days," a self-resolving illness measured in hours to days, not weeks — a course of weeks instead points toward a chronic process such as bronchopulmonary dysplasia. **"Chest X-ray is always normal"** overstates the opposite direction from what the lecture teaches: the classic film shows "perihilar streaking with fluid in interlobar fissures" (the wet-lung pattern), and while an early or mild film can look unremarkable, TTN is explicitly called "a clinical diagnosis" precisely because the film is variable, not because it is invariably normal.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Confirm TTN as the leading cause of respiratory distress in term and late preterm infants, against overstated claims about mandatory oxygen therapy, a multi-week course, or an invariably normal chest X-ray.',
  source: 'Pediatrics endpoint part1.pdf p.890'
},

{
  id: 'pedep-neo-48',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'In neonatal resuscitation, which is the FIRST most important step?',
  options: [
    'Suction of the mouth and throat',
    'Drying, warming, and ensuring airway',
    'Administration of drugs',
    'Immediate chest compressions'
  ],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> The priority is to prevent hypothermia and establish airway patency. Suction, ventilation, or drugs follow if needed.\n\n---\n\nNone of the cached peds decks covers the delivery-room neonatal resuscitation sequence step-by-step — `7) Intro to neonatology.txt` teaches that newborns are highly vulnerable to heat loss (large surface area relative to mass, thin heat-permeable skin, little subcutaneous fat, and being nursed naked and unable to shiver or curl up), and lists the warming tools used at delivery (polyethylene wrap, head cap, pre-warmed thermal mattress/towels), but it does not lay out the resuscitation algorithm itself, so the sequencing claim below is answered from general neonatal resuscitation teaching and tagged *(not taken from the course material)*.\n\nStandard neonatal resuscitation (e.g. the Neonatal Resuscitation Program approach) opens every delivery with the same initial steps regardless of how depressed the baby appears: dry the baby thoroughly to prevent evaporative heat loss, place under a radiant warmer, position to open the airway, and stimulate — only after these initial steps, and only if breathing or heart rate remain inadequate, does the algorithm escalate to suctioning secretions, positive-pressure ventilation, chest compressions, or drugs such as adrenaline. This ordering exists because most newly born infants who fail to breathe well do so from simple causes (cold stress, airway positioning, fluid in the airway) that the initial steps alone correct, and because hypothermia itself worsens any subsequent resuscitation, so warming and airway positioning are never skipped in favour of jumping straight to more invasive measures *(not taken from the course material)*.\n\nAgainst the ladder: **"Suction of the mouth and throat"** is only performed if the airway is visibly obstructed by secretions after the initial steps, and routine deep suctioning of a vigorous newborn is now avoided because it can trigger reflex bradycardia — it is not the first universal step. **"Administration of drugs"** sits at the bottom of the algorithm, reserved for a heart rate that remains below 60/min despite effective ventilation and chest compressions, and is needed in only a small minority of resuscitations. **"Immediate chest compressions"** would skip establishing effective ventilation first — compressions are added only when the heart rate stays below 60/min despite 30 seconds of adequate positive-pressure ventilation, never as the opening manoeuvre *(all not taken from the course material)*.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Identify drying, warming and airway positioning as the universal first step of neonatal resuscitation, performed before suction, drugs or chest compressions are ever considered.',
  source: 'Pediatrics endpoint part1.pdf p.892'
},

{
  id: 'pedep-neo-49',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'Which of the following is TRUE regarding oxygen therapy in preterm infants?',
  options: [
    'Low oxygen saturation increases risk of NEC and death',
    'High oxygen saturation reduces risk of retinopathy of prematurity',
    'Initial therapy should begin with 100% oxygen',
    'Oxygen therapy has no effect on mortality'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> Hypoxemia in preterm infants increases the risk of necrotizing enterocolitis (NEC), brain injury, and mortality\n\n---\n\n`7) Intro to neonatology.txt` lists NEC as one of the preterm infant\'s major GI complications, with "incidence inversely related to GA" — the more immature the infant, the higher the risk — consistent with the box\'s framing of hypoxaemia as a driver of gut ischaemia and NEC. The same deck lists retinopathy of prematurity separately under "Other Problems," explicitly tagged "(oxygen therapy)," marking oxygen exposure itself as the aetiological link for ROP, which is the key context for judging the other three options.\n\nOxygen management in preterm infants is a balance, not a one-directional relationship: too little oxygen (hypoxaemia) worsens tissue ischaemia and raises the risk of NEC, intraventricular haemorrhage and death, while too much oxygen (hyperoxia) drives retinal vessel injury and raises ROP risk — modern neonatal practice therefore targets oxygen saturation within a defined range rather than maximising or minimising it *(the specific target-range trials are not taught in the cached deck; not taken from the course material)*.\n\nAgainst the ladder: **"High oxygen saturation reduces risk of retinopathy of prematurity"** inverts the relationship the lecture\'s own tag states — oxygen therapy is what drives ROP risk *up*, not down, so higher saturation and more oxygen exposure increases rather than reduces that risk. **"Initial therapy should begin with 100% oxygen"** is not supported — resuscitation and ongoing oxygen therapy in preterm infants use titrated, blended oxygen concentrations guided by saturation targets, not a blanket 100% start, precisely because of the hyperoxia risks named above. **"Oxygen therapy has no effect on mortality"** is directly contradicted by the box, which names mortality as one of the outcomes hypoxaemia worsens — oxygen status clearly affects survival in preterm infants, in both directions.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise that hypoxaemia in preterm infants raises the risk of NEC, brain injury and death, while oxygen therapy itself must be titrated because excess oxygen raises retinopathy of prematurity risk rather than lowering it.',
  source: 'Pediatrics endpoint part1.pdf p.894'
},

{
  id: 'pedep-neo-50',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'Which of the following complications are associated with preterm infants with RDS?',
  options: [
    'Reduced risk of necrotizing enterocolitis',
    'Retinopathy of prematurity',
    'Non-invasive therapy is contraindicated',
    'Hypocalcemia is the main complication'
  ],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> Preterm infants with respiratory distress syndrome (RDS) often require oxygen therapy, which predisposes them to retinopathy of prematurity. Non-invasive ventilation is not contraindicated, and hypocalcemia is not the main complication.\n\n---\n\nAs in `pedep-neo-49`, `7) Intro to neonatology.txt` tags retinopathy of prematurity to "(oxygen therapy)" under the preterm infant\'s complication list — a preterm infant with RDS characteristically needs supplemental oxygen (and often surfactant and respiratory support) to treat the surfactant-deficient lung, and that oxygen exposure is exactly the mechanism the deck links to ROP. RDS and its oxygen requirement therefore sit upstream of ROP risk rather than being unrelated to it.\n\nAgainst the ladder: **"Reduced risk of necrotizing enterocolitis"** runs the wrong direction — the same lecture lists NEC as a preterm complication whose incidence rises, not falls, with prematurity and the ischaemic/hypoxic stress that accompanies a sick, respiratory-distressed preterm infant; RDS does not protect against NEC. **"Non-invasive therapy is contraindicated"** is simply false — non-invasive respiratory support (CPAP, high-flow) is a mainstay of RDS management, used specifically to avoid the lung injury and complications of invasive mechanical ventilation where possible. **"Hypocalcemia is the main complication"** misassigns a real but secondary preterm metabolic problem — the lecture lists hypocalcaemia (from an immature parathyroid gland) as one line among several metabolic complications of prematurity (alongside hypoglycaemia and hypothermia), not as the defining complication of RDS specifically, and the box\'s emphasis is on the oxygen-driven ROP link rather than calcium status.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Link the oxygen therapy needed to treat RDS in preterm infants to an increased risk of retinopathy of prematurity, against distractors that misstate NEC risk, non-invasive ventilation safety, and the role of hypocalcaemia.',
  source: 'Pediatrics endpoint part1.pdf p.896'
},

{
  id: 'pedep-neo-51',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'A 7-day-old infant is seen in the emergency department for fever and poor feeding. The baby was delivered vaginally 2 hours after the mother arrived to hospital. The delivery was a 36 weeks of gestation and the birth weight was 2900 g. Maternal laboratory test results were negative. The most likely organism causing this patient’s symptoms is:',
  options: [
    'Group B Streptococcus (GBS)',
    'Listeria monocytogenes',
    'Staphylococcus aureus',
    'Streptococcus pneumoniae',
    'Haemophilus influenza'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> GBS is the most common pathogen to cause neonatal sepsis in infants aged 0 to 3 months\n\n---\n\n`11) Neonatal sepsis.txt` names GBS (with E. coli) as the leading organism of early-onset neonatal sepsis (EONS), the first-72-hours category, and gives its epidemiology in detail: 15–40% of pregnant women carry rectal or vaginal GBS colonisation, about half of their infants become colonised, and 1–2% of colonised infants go on to develop early-onset GBS disease. This baby is late preterm (36 weeks), a risk factor the same slide lists explicitly for EONS.\n\nWorth flagging on its own terms: this baby presents at **7 days** of age, which sits past the lecture\'s own 72-hour EONS cutoff, in the window the deck labels late-onset sepsis (LONS) — where the slide\'s own organism list names coagulase-negative staphylococci and *Staphylococcus aureus*, driven by horizontal/environmental transmission, rather than GBS. That tension is real, and it is not resolved inside the cached deck. GBS itself remains a well-recognised cause of neonatal sepsis through the first three months of life, not only the first three days — late-onset GBS disease (roughly day 7 to day 89) is a distinct, well-described clinical entity, usually from the same maternal vertical transmission or postnatal acquisition, often presenting with bacteraemia or meningitis rather than the catheter/ventilator-associated infections that dominate other LONS organisms *(not taken from the course material — the cached deck\'s LONS organism list does not mention GBS)*. The box\'s "0 to 3 months" framing matches that broader clinical picture rather than the lecture\'s strict 72-hour EONS/LONS split, and the vignette\'s negative maternal labs do not rule out unscreened or intrapartum GBS colonisation, so GBS stays the best-supported single answer.\n\nAgainst the ladder: **Listeria monocytogenes** is a recognised EONS organism (foodborne, associated with unpasteurised dairy/soft cheeses) but is far less common than GBS and not specifically cued by anything in this vignette. **Staphylococcus aureus** and **coagulase-negative staphylococci** are the lecture\'s own late-onset organisms, but they classically track with an indwelling line, ventilator or prolonged NICU stay, none of which this previously well, term-nursery-timeline infant has. **Streptococcus pneumoniae** and **Haemophilus influenzae** are pathogens of infancy and early childhood pneumonia/meningitis/otitis media rather than leading neonatal sepsis organisms, and neither appears on the deck\'s EONS or LONS lists at all.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Identify GBS as the leading organism of neonatal sepsis across the first three months of life, while recognising the tension between this vignette\'s day-7 timing and the lecture\'s strict 72-hour early/late-onset split and its late-onset organism list.',
  source: 'Pediatrics endpoint part1.pdf p.898'
},

{
  id: 'pedep-neo-52',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'What is the most likely cause of respiratory distress in a term infant with history of fetal distress and pea soup like amniotic fluid?',
  options: [
    'Pneumothorax',
    'Meconium aspiration syndrome',
    'Congenital heart disease',
    'Respiratory distress syndrome',
    'Transient tachypnea of the newborn'
  ],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> Term baby + fetal distress + pea soup amniotic fluid → classic for Meconium Aspiration Syndrome (MAS).\n\n---\n\n`9) Respiratory distress in newborn.txt` walks the exact chain this vignette describes: acute or chronic fetal hypoxia (fetal distress) stimulates fetal peristalsis and relaxes the anal sphincter, passing meconium into the amniotic fluid, and that same hypoxia stimulates fetal breathing, driving aspiration of the meconium-stained fluid. "Pea soup" is the classic bedside description of thick, greenish-black meconium-stained amniotic fluid, and the deck lists "meconium staining of skin, umbilical cord and amniotic fluid" as the defining clinical sign, present specifically in "term and post-term infants who suffered from placental insufficiency," with fetal distress named explicitly as one of its markers. Only 4–5% of infants born through meconium-stained fluid actually develop MAS, but the lecture is explicit that "MAS must be considered in any infant, born through meconium-stained amniotic fluid, who develops symptoms of RD" — exactly this vignette.\n\nAgainst the ladder: **Pneumothorax** is a recognised *complication* of MAS (from ball-valve air trapping and over-inflation with air leak), not the primary diagnosis the fetal-distress-plus-meconium history points to. **Congenital heart disease** is not specifically cued by meconium-stained fluid or fetal distress, which are markers of placental insufficiency/hypoxia and gut/lung events, not cardiac malformation. **Respiratory distress syndrome** is a disease of prematurity from surfactant deficiency; this is a *term* infant, and RDS is not linked to meconium-stained fluid at all. **Transient tachypnea of the newborn** is the most common overall cause of neonatal RD but is tied to elective caesarean section, male gender and maternal diabetes, none of which this vignette mentions, and it carries no meconium history — the pea-soup fluid and fetal distress specifically flag MAS over the far more common but unrelated TTN.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise meconium aspiration syndrome from the combination of fetal distress and "pea soup" (thick, meconium-stained) amniotic fluid in a term infant, against pneumothorax as a complication rather than the primary diagnosis and against RDS/TTN which do not fit a meconium history.',
  source: 'Pediatrics endpoint part1.pdf p.900'
},

{
  id: 'pedep-neo-53',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal',
  stem: 'Which clinical condition is left without further intervention on neonatal examination?',
  options: [
    'Central cyanosis',
    'Heart murmur',
    'Inguinal hernia',
    'Umbilical hernia',
    'Jaundice at 24 hours of age'
  ],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> Common in neonates, usually closes spontaneously by 2–3 years of age. No intervention needed unless persistent after 3–5 years or very large.\n\n---\n\nA benign umbilical hernia on newborn examination is not covered in the cached peds lecture set — the only umbilical-hernia mention in the cache is as one of several signs of congenital hypothyroidism in `52) hypothyrodism.txt`, a different clinical context (a hernia as one feature of a systemic endocrine disease) from this question\'s general newborn-examination finding, so it is not applicable here. This entry is therefore answered from general neonatal examination teaching and tagged throughout *(not taken from the course material)*.\n\nAn umbilical hernia results from incomplete closure of the umbilical ring after the cord separates, and is common in newborns, especially preterm and Black infants. Left alone, the great majority close spontaneously as the abdominal wall musculature strengthens with growth, typically by 2–3 years of age (matching the box\'s figure); surgical referral is reserved for a hernia still present beyond about 3–5 years of age, one that is unusually large (commonly cited as a defect over 1.5–2 cm), or one that becomes symptomatic (incarcerated or strangulated), which is rare. Routine parental reassurance and observation, with no taping, binding or early surgical referral, is the standard first-line approach *(not taken from the course material)*.\n\nAgainst the ladder, each of the other four findings needs some form of active follow-up rather than being left alone: **Central cyanosis** on a newborn examination is never a "leave alone" finding — it signals hypoxaemia from cardiac, pulmonary or other systemic causes and needs urgent assessment (pulse oximetry, oxygen, work-up for the underlying cause). **Heart murmur** needs at least a follow-up cardiac assessment, since although many neonatal murmurs are transitional, a new murmur can be the first sign of otherwise unsuspected congenital heart disease. **Inguinal hernia**, unlike an umbilical hernia, does *not* resolve spontaneously and carries a real risk of incarceration/strangulation, so it is referred for elective surgical repair once diagnosed, generally soon after diagnosis in an infant. **Jaundice at 24 hours of age** is, by the same lecture set\'s own physiological-jaundice definition used elsewhere in this section, pathological rather than physiological when it appears this early, and needs evaluation (bilirubin level, work-up for haemolysis/infection) rather than being left without intervention *(all not taken from the course material)*.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise an uncomplicated umbilical hernia as the newborn examination finding that is safely left without intervention, resolving spontaneously by 2–3 years of age, against central cyanosis, a heart murmur, an inguinal hernia and 24-hour jaundice, each of which needs some form of follow-up or work-up.',
  source: 'Pediatrics endpoint part1.pdf p.902'
},
