/* ===========================================================================
   ENDPOINT part1 - Model Final Exam 3 - DRAFT half C, app entries.
   Source staging record: content/peds/qb-pages/endpoint-s12-mfe3.array.js
   (var PEDEP_S12_STAGED, 80 entries). Stems, options and keys are copied from
   that record byte for byte; the key is the staged zero-based index and never
   moves.
   Id prefix: pedep-mf3-<staged n>.
   ROWS IN THIS FILE, fifteen: n43, n44, n45, n48, n49, n50, n51, n54,
   n55, n58, n62, n63, n64, n65, n66. The unfilled numbers inside that range
   are handled elsewhere in the stream and are deliberately absent here.
   n46 WAS DRAFTED HERE AND HAS BEEN REMOVED. The drafting agent flagged it as
   a third printing of live pedep-nut-16, and it is: that entry's own source
   already records a p.366 printing phrased "What is the main cause of edema in
   kwashiorkor?", which is this exam page word for word, same five options in
   the same order, same key, differing only in casing and in stool/stools. The
   live source was extended by the reprint pass instead, so this row is a
   reprint rather than a new entry.
   Format: COMMA-JOINED fragments - every entry but the last ends "}," and the
   last ends "}" with no comma. This differs from the staging halves, which are
   comma-free.
   Boxed vs unboxed follows the staged expl field: n64 (p.1610) and n66
   (p.1614) print NO explanation box and carry the authored marker; the other
   fourteen quote their printed box.
   No staged row in this range carries a fig or a box field, so no entry here
   takes an image field and no source names a second page.
   RECORDED WHILE DRAFTING:
   - n50 (p.1583) and n58 (p.1599) are word-for-word twins with the same key
     and differently worded boxes. Both are drafted in full, separately.
   - n62 (p.1606) and n63 (p.1608) both print the exam number 63 on two
     different questions; n64 onward the printed number and the section
     position coincide again. Printed numbers are staging data and appear
     nowhere in these entries.
   - Lowercase a-d option letters on pp.1606-1614 are a printing style only;
     the app supplies its own letters and options carry no prefixes.
   =========================================================================== */

{
  id: 'pedep-mf3-43',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal-sepsis',
  stem: 'Which of the following is true about neonatal sepsis?',
  options: ['A heart murmur is usually present.', 'Early-onset sepsis is usually acquired via the placenta following maternal infection.', 'Pneumonia is the commonest presentation in early-onset sepsis.', 'High fever is commonly present.', 'CBC is done to detect neutrophilia.'],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> •Early-onset neonatal sepsis (within the first 72 hours) is usually acquired from the maternal genital tract during delivery. The most frequent clinical manifestation is respiratory distress or pneumonia, often caused by pathogens like Group B Streptococcus or E. coli.\n\n---\n\n`11) Neonatal sepsis.txt` splits neonatal sepsis at 72 hours: early-onset sepsis is the first 72 hours of life, late-onset after it. For the early-onset column the deck writes "Asymptomatic at birth, pneumonia or septicemia" as the clinical picture and names "GBS and Echoli" as the organisms, which is the box\'s claim in the lecture\'s own words.\n\n**Why the other statements fail.** *A heart murmur* is not a septic sign at all — the organs the deck lists as affected are blood stream, lung, urinary tract, meninges and bone/joint, and a murmur points to structural heart disease instead. *Acquisition via the placenta* misdescribes the route: the early-onset risk factors printed are maternal genital-tract colonisation with group B streptococci, prolonged (>18 hours) or prelabour rupture of the membranes, intrapartum fever >38°C and chorioamnionitis — an ascending, intrapartum exposure, not a transplacental one (*Listeria is the classical transplacental exception, and it is the one organism that behaves that way; not taken from the course material*). *High fever* inverts the usual thermal response — the same deck states that neonatal sepsis is manifested by hypothermia and devotes slides to the link between hypothermia and sepsis. *CBC to detect neutrophilia* names only one line of a panel: the haematological markers table lists leucopenia (WBC <5000/mm3), leukocytosis (>20,000/mm3), neutropenia (ANC <1000/mm3), neutrophilia (ANC ≥10,000/mm3), a raised I/T ratio and a platelet count <120,000/mm3, and neutropenia is the more ominous of the two neutrophil results.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Recognise early-onset neonatal sepsis as intrapartum, GBS/E. coli driven and presenting as pneumonia, with hypothermia rather than fever.',
  source: 'Pediatrics endpoint part1.pdf p.1569'
},

{
  id: 'pedep-mf3-44',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'infection-bact',
  stem: 'Which of the following is a cause of bacterial meningitis in children?',
  options: ['Group A streptococci', 'Streptococcus pneumoniae', 'E. coli', 'Pseudomonas'],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> After the neonatal period, S. pneumoniae is the most common cause of bacterial meningitis.\n\n---\n\n`18) febrile child and life threatening infections.txt` prints the organisms causing bacterial meningitis by age: neonatal to 3 months — Group B streptococcus, Escherichia coli, Listeria monocytogenes; 1 month to 6 years — Neisseria meningitides, Streptococcus pneumoniae, Haemophilus influenza; over 6 years — Neisseria meningitides, Streptococcus pneumoniae. S. pneumoniae is the only listed organism that appears in every band beyond the newborn period, which is why it is the answer to a question asked about children rather than about neonates.\n\n**The distractors.** *Group A streptococci* and *Pseudomonas* appear nowhere in that table; Pseudomonas meningitis is a hospital-acquired or immunocompromised-host problem, not a community paediatric one (*not taken from the course material — the deck lists no organism outside the three age bands above*). *E. coli* is the one that needs care: the lecture does list it, but only in the neonatal-to-3-months band, so it is a neonatal pathogen rather than the general paediatric answer the stem asks for — and the printed box makes the same distinction by saying "after the neonatal period".\n\nWorth carrying alongside: the same deck notes that viral infections are the most common cause of meningitis overall, and that bacterial meningitis carries 5% to 10% mortality.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Name S. pneumoniae as the leading cause of bacterial meningitis beyond the neonatal period, and place E. coli in the neonatal band only.',
  source: 'Pediatrics endpoint part1.pdf p.1571'
},

{
  id: 'pedep-mf3-45',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal',
  stem: 'How is the preterm newborn defined?',
  options: ['≤ 37 weeks gestation', '> 37 weeks gestation', '< 37 weeks gestation', '≥ 30 weeks gestation', '≤ 30 weeks gestation'],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> Preterm is defined as <37 completed weeks of gestation.\n\n---\n\nThe boundary is 37 completed weeks and the sign is strictly "less than": a baby born at 37 weeks and 0 days has completed 37 weeks and is term. `10) new Seizures . Birth injuries , Hpoglycemia 2.txt` uses exactly this cut-off when it lists the babies at risk of neonatal hypoglycaemia — "low birth weight <2 kg or preterm <37week".\n\n**Reading the ladder.** Every option here is the same number under a different sign, so the whole question turns on the sign. *≤ 37 weeks* sweeps in the 37-week term baby and so overstates prematurity by a whole week of gestation. *> 37 weeks* is the definition of term and post-term, the opposite population. *≥ 30 weeks* and *≤ 30 weeks* both move the boundary to a number that is not the term/preterm line at all — 30 weeks marks nothing in this classification, and the sub-division the material actually uses inside prematurity is 32 weeks, `7) Intro to neonatology.txt` recording that approximately 11% of livebirths in the US are preterm and 2% are < 32 weeks.\n\nGestational age and birth weight are separate axes and are not interchangeable: the same deck classifies by birth weight as LBW < 2500 grams, VLBW < 1500 grams and ELBW < 1000 grams, so a 36-week baby of 2600 g is preterm but not low birth weight.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Define preterm as birth before 37 completed weeks, distinguishing the strict inequality from the inclusive one and gestational age from birth weight.',
  source: 'Pediatrics endpoint part1.pdf p.1573'
},

{
  id: 'pedep-mf3-48',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal-sepsis',
  stem: "A newborn baby is noted to have hepatosplenomegaly and a petechial rash. His red eye reflex is abnormal and there is no heart murmur. He fails his newborn screening hearing test. His mother's antenatal screening bloods were all normal. What is the most likely condition that has caused these symptoms?",
  options: ['Dysmorphic syndrome', 'Congenital infection', 'Infant of diabetic mother', 'Cranial abnormality', 'Neonatal infection'],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> TORCH infections (esp. CMV, rubella) cause “blueberry muffin rash,” hepatosplenomegaly, cataracts, hearing loss.\n\n---\n\nFour findings are present at birth and each one dates the insult to intrauterine life: hepatosplenomegaly from fetal reticuloendothelial infection, a petechial rash from marrow suppression and dermal haematopoiesis, an abnormal red reflex from a congenital cataract or chorioretinitis, and a failed newborn hearing screen. Nothing acquired during or after delivery has had time to produce a cataract or fixed sensorineural deafness. `7) Intro to neonatology.txt` places TORCH among the causes of symmetrical intrauterine growth restriction and lists congenital infection among the problems of the small-for-gestational-age newborn, which is the same intrauterine timing the box is describing.\n\n**Working through the list.** *Dysmorphic syndrome* is excluded by the description itself — no dysmorphic feature is offered, and hepatosplenomegaly with petechiae is not how a dysmorphic syndrome announces itself. *Infant of a diabetic mother* has a defined complication set in `7) Intro to neonatology.txt` — macrosomia, RDS, hyperbilirubinaemia, hypoglycaemia, hypocalcaemia, polycythaemia, renal vein thrombosis and cardiomyopathy — and neither the eye finding nor the deafness appears in it. *Cranial abnormality* could conceivably explain the failed hearing test, but it leaves the liver, the spleen and the skin unexplained, and a single diagnosis covering all four findings outranks one covering one. *Neonatal infection* is the trap, and the discriminator is timing rather than plausibility: `11) Neonatal sepsis.txt` describes early-onset sepsis as pneumonia or septicaemia in a baby acquiring the organism from the maternal genital tract around delivery, an acute illness with respiratory distress and temperature instability — not congenital cataract, not congenital deafness, and not organomegaly present from the first examination.\n\nThe normal antenatal bloods do not argue against the answer. Routine antenatal serology covers syphilis, HIV, hepatitis B and rubella immunity, and does not screen for cytomegalovirus, which is the commonest congenital infection to present in exactly this way (*not taken from the course material; the cached neonatology and sepsis decks name TORCH and congenital infection but print no antenatal screening panel*).\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Read hepatosplenomegaly, petechiae, an abnormal red reflex and failed hearing screening in a newborn as congenital rather than acquired infection.',
  source: 'Pediatrics endpoint part1.pdf p.1579'
},

{
  id: 'pedep-mf3-49',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal-hie',
  stem: 'What is the most important and effective action in neonatal resuscitation if the baby does not start to breathe after delivery?',
  options: ['Provide oxygen.', 'Perform chest compressions.', 'Ventilate the lungs.', 'Give epinephrine.', 'Tracheal intubation.'],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> Failure to breathe requires positive pressure ventilation, the single most important intervention.\n\n---\n\nThe newborn lung is fluid-filled and has never been inflated, so the one thing that changes everything is aeration. `3) Pediatric resuscitation.txt` builds its whole approach on airway and breathing first — the key element of respiration being gas exchange — and gives its own slides to what makes bag-mask ventilation effective: enough force and volume to make the chest visibly rise, with both rescuers verifying adequate chest expansion.\n\n**Against the ladder.** *Provide oxygen* delivers gas to a face, not to alveoli; without inflation the oxygen never reaches the gas-exchange surface. *Chest compressions* circulate blood that has not been oxygenated, and the deck defines cardiopulmonary arrest by an absent pulse in a major artery with unconsciousness and apnoea — this baby is apnoeic but is not described as pulseless, and compressions belong after ventilation has been established and failed to lift the heart rate (*the neonatal sequencing rule, ventilate first and compress only for persisting bradycardia, is not printed as a standalone algorithm in the cached deck; not taken from the course material*). *Epinephrine* sits further down the same ladder still, for an arrest that has not responded to ventilation and compressions. *Tracheal intubation* is a route to ventilation rather than a rival to it, and the same lecture states plainly that bag and mask ventilation is as effective as endotracheal intubation — so choosing the tube over ventilating the lungs confuses the equipment with the intervention.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Identify lung inflation as the decisive first intervention in an apnoeic newborn, ahead of oxygen, compressions, drugs or intubation.',
  source: 'Pediatrics endpoint part1.pdf p.1581'
},

{
  id: 'pedep-mf3-50',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'emergencies',
  stem: 'Which of the following is the most common cause of pediatric cardiopulmonary arrest?',
  options: ['Cardiac arrhythmias', 'Metabolic abnormalities', 'Overwhelming infections', 'Trauma', 'Respiratory problems'],
  answer: 4,
  explanation: '**The endpoint file prints this explanation:**\n\n> Unlike adults (cardiac), in children respiratory failure is the most common cause.\n\n---\n\n`3) Pediatric resuscitation.txt` opens on "Children are not small adults" and then poses this exact question as a slide, before spending the rest of the deck on the answer: recognising and reversing respiratory failure. Its stated key to managing the seriously ill child is "early recognition and intervention to prevent respiratory or circulatory failure; once present they are difficult to reverse", and it defines arrest itself by absence of a palpable pulse in a major artery, unconsciousness and apnoea. The child arrests because breathing failed first and hypoxia stopped the heart — a slow, hypoxic decline rather than the sudden electrical event of the adult (*the deck poses the question as a fill-in slide and does not print the word; not taken from the course material*).\n\n**The distractors.** *Cardiac arrhythmias* are the adult answer — primary ventricular fibrillation or pulseless ventricular tachycardia — and in children a shockable rhythm is the exception, usually in known cardiac disease. *Metabolic abnormalities* and *overwhelming infections* do kill children, but they do so through the two failures the deck names: sepsis arrests a child by way of circulatory failure and secondary respiratory failure, so it is the pathway, not the endpoint. *Trauma* is a leading cause of childhood death without being the commonest mechanism of arrest, and when a traumatised child arrests it is again through airway compromise or haemorrhagic shock.\n\nThe practical consequence is the one the deck builds everything on: assess airway and breathing first, and treat the child before the pulse disappears.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Attribute paediatric cardiopulmonary arrest to respiratory failure rather than to the primary arrhythmic mechanism of adults.',
  source: 'Pediatrics endpoint part1.pdf p.1583'
},

{
  id: 'pedep-mf3-51',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'neonatal-seiz',
  stem: 'Which bone is most often fractured in difficult deliveries?',
  options: ['Clavicle', 'Humerus', 'Skull', 'Femur', 'Tibia'],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> The clavicle is most commonly fractured, often with shoulder dystocia.\n\n---\n\n**The clavicle is the bone that lies directly across the obstruction.** In shoulder dystocia the anterior shoulder is impacted behind the symphysis and the force used to deliver it is transmitted through the clavicle, which is thin, subcutaneous and the last part of the shoulder girdle to ossify (*the clavicle is not named in the cached birth-injury deck; not taken from the course material — `10) new Seizures . Birth injuries , Hpoglycemia 2.txt` lists facial in-suffusion, forceps marks, chignon, caput succedaneum, subaponeurotic haemorrhage, cephalhaematoma and Erb\'s palsy, and no fracture at all*). The deck does supply the mechanism behind the box: the risk factors it gives for Erb\'s palsy — shoulder dystocia, fetal macrosomia, gestational diabetes, a second stage over 60 minutes and breech presentation — are the same difficult deliveries in which the clavicle breaks, and the two injuries often occur together because the brachial plexus is stretched by the same impaction. A fractured clavicle usually announces itself as reduced arm movement, crepitus over the bone or an asymmetrical Moro reflex, heals with no immobilisation, and its main importance is being distinguished from the plexus injury it mimics.\n\n**The other bones.** *Humerus* and *femur* fractures do occur, but characteristically in breech extraction where a limb is pulled, and far less often than the clavicle. *Skull* fracture is rare and belongs with instrumental delivery; the scalp lesions the deck does list — caput succedaneum, cephalhaematoma and subgaleal haemorrhage — are soft-tissue swellings, not fractures, and are what a "skull" answer usually confuses. *Tibia* is essentially never fractured at birth, as no delivery manoeuvre loads the lower leg.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Name the clavicle as the bone most often fractured at difficult delivery and link it to shoulder dystocia and to brachial plexus injury.',
  source: 'Pediatrics endpoint part1.pdf p.1585'
},

{
  id: 'pedep-mf3-54',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'infection-vaccine',
  stem: 'Which of the following statements concerning immunization is TRUE?',
  options: ['Vaccines should not be given if the baby has a runny nose.', 'Oral polio vaccine is safe in immune-compromised children.', 'Hepatitis A vaccine is given immediately after birth in Egypt.', 'BCG is a killed vaccine.', 'MMR vaccine is a live attenuated virus vaccine.'],
  answer: 4,
  explanation: '**The endpoint file prints this explanation:**\n\n> MMR is a live attenuated vaccine. OPV is not safe in immunocompromised, and BCG is also live, not killed.\n\n---\n\n`25)Immunodeficiency_.txt` sorts the vaccines into three classes, and the whole question can be answered off that one slide: "Live attenuated vaccines, e.g. MMR, varicella, OPV, rotavirus, BCG – modified organisms"; "Inactivated vaccines, e.g. inactivated polio (IPV), whole organisms obtained by chemical or heat treatment (pertussis)"; "Subunit vaccines, e.g. diphtheria, tetanus toxoid, pneumococcus, Hib vaccine, Hepatitis B (HBV) – contain antigens of the organism." MMR sits in the first list, so the key is a direct quotation of the material.\n\n**The other four.** *Oral polio vaccine in an immune-compromised child* is unsafe for the same reason MMR is: it is on the live list, and a live modified organism can replicate unchecked in a child with defective immunity, which is why the inactivated polio vaccine exists as the alternative the deck names beside it. *BCG killed* contradicts the slide outright — BCG is printed in the live attenuated group. *Hepatitis A at birth in Egypt* misplaces the vaccine twice over: hepatitis A appears in the deck only under "Vaccines available in Egypt", the optional list alongside rotavirus, pneumococcal conjugate, varicella, meningococcal and HPV, and the vaccines actually given at birth are BCG and the hepatitis B birth dose (*the compulsory Egyptian schedule slides carry no extractable text in the cached deck, so the birth-dose detail is not taken from the course material*). *Withholding a vaccine for a runny nose* is the everyday error the question is testing: a minor illness without significant fever is not a contraindication, and deferring on that basis is a common reason children fall behind schedule (*not taken from the course material; the cached deck lists no contraindications*).\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Classify MMR, OPV and BCG as live attenuated vaccines, and reject a minor coryzal illness as a contraindication to immunisation.',
  source: 'Pediatrics endpoint part1.pdf p.1591'
},

{
  id: 'pedep-mf3-55',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal',
  stem: 'A full-term neonate develops jitteriness and poor feeding at 4 hours of life. He was born to a primigravida who had uncontrolled gestational diabetes mellitus. Birth weight was 4 kg. The mother fed the baby at 3 hours of life. On examination, the baby is jittery, but all neonatal reflexes are normal. His systemic examination is normal. His investigation showed blood glucose of 35 mg/dl, hemoglobin 20 g/dl, and hematocrit 63%. His electrolytes and calcium are normal. What is the most probable cause of hypoglycemia in this neonate?',
  options: ['Polycythemia', 'Delayed feeding', 'Birth asphyxia', 'Hyperinsulinemia'],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> Infants of diabetic mothers develop hyperinsulinemia, leading to hypoglycemia after birth.\n\n---\n\nThe glucose of 35 mg/dl is hypoglycaemia by the material\'s own cut-off — `10) new Seizures . Birth injuries , Hpoglycemia 2.txt` sets the threshold at "<40mg/dl from 1-3 days" and "<45mg/dl after 3days" — and the same deck warns that the symptoms are "v non specific", with jitteriness attributable to either hypoglycaemia or hypocalcaemia. Here the calcium is normal, so the jitteriness belongs to the glucose.\n\n**Why hyperinsulinaemia.** `7) Intro to neonatology.txt` gives the aetiology of the infant of a diabetic mother in one line — "Maternal Hyperglycemia, Fetal Hyperglycemia & Hyperinsulinemia" — and then lists macrosomia, hypoglycaemia and polycythaemia among the consequences. Maternal glucose crosses the placenta, maternal insulin does not, so the fetus makes its own; the resulting hyperinsulinaemia drives the 4 kg birth weight, and at delivery the placental glucose supply stops while the high insulin level persists for hours, stripping glucose out of the circulation at 4 hours of life. The birth-injuries deck lists the same mechanism first among the pathogenetic groups: "Hyperinsulinemia: PHHI, persistent hyper-insulinemic hypoglycemia of infancy".\n\n**The distractors, two of which are real mechanisms in the wrong patient.** *Polycythaemia* is genuinely present — a haemoglobin of 20 g/dl and a haematocrit of 63% are polycythaemic — and the deck does list polycythaemia among the causes of increased glucose use, so this option is not false in itself; it is subordinate, because in an infant of a diabetic mother the polycythaemia is one more downstream effect of the same fetal hyperinsulinaemia, not an independent explanation for the macrosomia and the hypoglycaemia together. *Delayed feeding* fails on the history: the baby was fed at 3 hours and was hypoglycaemic an hour later, and inadequate intake with limited glycogen stores is the mechanism the deck attaches to the small-for-gestational-age and preterm baby, not to a 4 kg macrosomic one. *Birth asphyxia* is listed among the diseases causing hypoglycaemia — with hypothermia, shock, sepsis, RDS and polycythaemia — but nothing in this delivery or examination supports it; the reflexes and systemic examination are normal.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Attribute early hypoglycaemia in a macrosomic infant of a diabetic mother to fetal hyperinsulinaemia, ranking it above coexisting polycythaemia.',
  source: 'Pediatrics endpoint part1.pdf p.1593'
},

{
  id: 'pedep-mf3-58',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'emergencies',
  stem: 'Which of the following is the most common cause of pediatric cardiopulmonary arrest?',
  options: ['Cardiac arrhythmias', 'Metabolic abnormalities', 'Overwhelming infections', 'Trauma', 'Respiratory problems'],
  answer: 4,
  explanation: '**The endpoint file prints this explanation:**\n\n> respiratory failure is the leading cause of cardiac arrest in children.\n\n---\n\nThis paper sets the same five causes a second time; the comparison across the ladder is laid out at `pedep-mf3-50`, and what follows here is the physiology behind the same answer.\n\nThe sequence in a child is hypoxic, not electrical. Breathing fails, oxygen delivery falls, the myocardium becomes hypoxic and acidotic, the heart rate slows, and asystole or pulseless electrical activity follows — which is why `3) Pediatric resuscitation.txt` insists that the key to managing the seriously ill child is "early recognition and intervention to prevent respiratory or circulatory failure; once present they are difficult to reverse", and why its assessment begins with airway and breathing, work of breathing, respiratory rate and oxygen saturation. The deck defines the arrest itself by absence of a palpable pulse in a major artery, unconsciousness and apnoea, and its opening slide, "Children are not small adults", is the whole point of the question (*the deck poses this question as a fill-in slide without printing the word; not taken from the course material*).\n\n**Ranking the alternatives.** *Cardiac arrhythmias* head the adult list, where a shockable rhythm from ischaemic heart disease is the usual mechanism; in children a primary arrhythmia causes arrest mainly in known congenital or cardiomyopathic heart disease. *Metabolic abnormalities* and *overwhelming infections* reach the heart only through the two failure routes the deck names — severe sepsis arrests a child by circulatory failure with a respiratory component, so naming the infection names the precipitant, not the mechanism. *Trauma* kills many children, but the arrest that follows comes from airway obstruction, thoracic injury or exsanguination rather than from the trauma acting on the heart directly.\n\nThe clinical yield is preventive: a child whose breathing is supported early rarely reaches the arrest that is so hard to reverse.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Trace paediatric arrest through hypoxia and bradycardia from respiratory failure, in contrast with the primary arrhythmic arrest of adults.',
  source: 'Pediatrics endpoint part1.pdf p.1599'
},

{
  id: 'pedep-mf3-62',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'gastroenterology',
  stem: 'Which of the following statements regarding duodenal atresia is true?',
  options: ['Around 30% of these infants have Trisomy 21 (Down syndrome).', 'When associated with an annular pancreas, division of the pancreas at the site of obstruction is curative.', 'Nonbilious vomiting is typical because the obstruction is usually proximal to the ampulla of Vater.', 'Reconstruction is best achieved with Roux-en-Y duodenojejunostomy.'],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> There is a strong association with Down syndrome.\n\n---\n\n`6) Genetically determined disease_.txt` lists duodenal atresia — beside congenital heart defects (40%) and Hirschsprung disease — among the features of Down syndrome, so the association runs in both directions and the figure of around 30% quoted here is the proportion of duodenal atresia infants who have trisomy 21 (*the deck names the association but prints no percentage for it; the 30% figure is not taken from the course material*). Practically, a "double bubble" on antenatal ultrasound or plain film should prompt a karyotype and an echocardiogram.\n\n**Why the other three are false.** *Nonbilious vomiting proximal to the ampulla* is the wrong way round: the atresia is usually distal to the ampulla of Vater, so bile enters above the block and the vomiting is bile-stained. `22)Vomiting.txt` states the principle exactly — in intestinal obstruction the more proximal the obstruction the sooner the vomit becomes bile-stained, "unless the obstruction is proximal to the ampulla of Vater" — and it flags green bile in vomit as an emergency suggesting obstructed bowel. *Dividing an annular pancreas* is neither curative nor safe: the duodenal narrowing is intrinsic and persists after division, while cutting pancreatic tissue risks a pancreatic fistula and duct injury, so the ring is left alone and bypassed. *Roux-en-Y duodenojejunostomy* is the wrong reconstruction; the standard repair is a direct duodenoduodenostomy, classically the diamond-shaped anastomosis, which restores continuity along the natural route and preserves duodenal transit (*neither the operative detail nor the annular pancreas is covered by any cached paediatric deck; not taken from the course material*).\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Link duodenal atresia to trisomy 21 and place the obstruction distal to the ampulla, with bile-stained vomiting and duodenoduodenostomy repair.',
  source: 'Pediatrics endpoint part1.pdf p.1606'
},

{
  id: 'pedep-mf3-63',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'gastroenterology',
  stem: 'Which of the following is NOT a typical cause of neonatal intestinal obstruction?',
  options: ['Intussusception', 'Meconium ileus', "Hirschrung's disease", 'Incarcerated hernia'],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> Intussusception is rare in neonates; it usually occurs in older infants.\n\n---\n\nThe box is a direct restatement of the material. `24)Abdominal pain.txt` describes intussusception as the invagination of proximal bowel into a distal segment, most commonly ileum passing into the caecum through the ileocaecal valve, and then dates it precisely: it is "the most common cause of intestinal obstruction in infants after the neonatal period", and although it "may occur at any age, the peak age of presentation is 3 months – 2 years of age." A cause whose defining epidemiology begins after the neonatal period is the one that does not belong on a list of neonatal obstructions, which is what this negative stem is asking for. The usual trigger — hypertrophied Peyer\'s patches acting as a lead point after a viral illness — needs the lymphoid tissue of later infancy, and the newborn has not developed it yet.\n\n**The three that do obstruct a newborn.** *Meconium ileus* obstructs in the first days of life with abnormally viscid meconium impacting the terminal ileum, and it is the classic neonatal presentation of cystic fibrosis. *Hirschsprung disease* obstructs from birth because the aganglionic distal segment never relaxes, so meconium passage is delayed beyond 48 hours and the abdomen distends; `6) Genetically determined disease_.txt` lists it among the features of Down syndrome, alongside duodenal atresia. *Incarcerated hernia* is a mechanical obstruction at any age including the newborn period, and `22)Vomiting.txt` names strangulated inguinal hernia together with intussusception and malrotation as the emergencies to consider when vomit is bile-stained (*the neonatal detail of meconium ileus and the delayed meconium passage of Hirschsprung disease are not printed in any cached paediatric deck; not taken from the course material*).\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Exclude intussusception from the neonatal obstruction list on its 3 month – 2 year peak age, and retain meconium ileus, Hirschsprung disease and incarcerated hernia.',
  source: 'Pediatrics endpoint part1.pdf p.1608'
},

{
  id: 'pedep-mf3-64',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'gi-abdopain',
  stem: 'Which of the following statements regarding congenital inguinal hernia is TRUE?',
  options: ['It is more common in females', 'Herniotomy should be delayed until the child is over 2 years', 'The most common presenting age is between 1–2 years', 'Bilaterality is more common in girls'],
  answer: 3,
  explanation: 'A congenital inguinal hernia is an indirect hernia through a processus vaginalis that failed to obliterate, so its epidemiology follows the descent of the gonad rather than any weakness of the abdominal wall. **Bilateral hernias are commoner in girls**, and commoner again in preterm infants of either sex, because the girl\'s canal of Nuck tends to remain patent symmetrically while in boys the right side lags behind the left after the later descent of the right testis — which is why an isolated right-sided hernia is the typical boy\'s presentation and a bilateral one is disproportionately a girl\'s (*none of the cached paediatric decks teaches inguinal hernia as a topic; not taken from the course material — the material names it only as a cause of obstruction, `22)Vomiting.txt` listing strangulated inguinal hernia beside intussusception and malrotation among the emergencies behind bile-stained vomiting, and `24)Abdominal pain.txt` listing incarcerated inguinal hernia among the causes of obstruction*).\n\n**The three false statements.** *More common in females* inverts the sex ratio: congenital inguinal hernia is markedly a male condition, on the order of six boys to one girl, because the testis drags a patent processus with it as it descends. *Delaying herniotomy beyond two years* is the dangerous option — the risk of incarceration is highest in the first months of life, and an incarcerated hernia threatens the bowel and the gonad, so repair is arranged promptly after diagnosis rather than postponed; unlike an umbilical hernia, a congenital inguinal hernia does not close spontaneously. *A peak presenting age of one to two years* is too late: most present in the first year, many within the first months, and prematurity brings the presentation earlier still.\n\nThe practical rule that follows is that a groin swelling in an infant is referred, not observed.\n\nWritten for this bank — Pediatrics endpoint part1.pdf prints no explanation here.',
  objective: 'Recognise congenital inguinal hernia as a male-predominant patent processus vaginalis needing prompt repair, with bilaterality commoner in girls.',
  source: 'Pediatrics endpoint part1.pdf p.1610'
},

{
  id: 'pedep-mf3-65',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal-rd',
  stem: 'All of the following is true regarding congenital diaphragmatic hernia EXCEPT:',
  options: ['May be diagnosed antenatally', 'Is usually right-sided', 'May be associated with pulmonary hypoplasia', 'Posterolateral defect is the most common subtype'],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> Most are left-sided (posterolateral Bochdalek).\n\n---\n\nThe material contains the proof of the false statement without ever using the word "left". `9) Respiratory distress in newborn.txt` gives the triad of congenital diaphragmatic hernia as "1. Severe, immediate respiratory distress, 2. Scaphoid (sunken) abdomen, 3. Heart sounds shifted to the right" — the heart is pushed to the right because the bowel has herniated into the LEFT chest. A right-sided hernia would displace the heart leftwards, so option b contradicts the sign the deck teaches, and in an EXCEPT stem the false statement is the answer.\n\n**The three true statements.** *Antenatal diagnosis* is stated outright by the same deck: it "is often diagnosed via prenatal ultrasound (18-20 weeks)", which allows delivery to be planned where surgery and intensive care are available. *Pulmonary hypoplasia* is the reason the condition is lethal rather than merely mechanical — abdominal viscera occupy the chest through the whole canalicular and saccular phases of lung growth, so the ipsilateral lung and its pulmonary vasculature never develop fully, producing the immediate respiratory distress and the pulmonary hypertension that dominate management (*the term is not printed in the cached neonatal respiratory deck; not taken from the course material*). *The posterolateral defect* is the commonest subtype, the Bochdalek hernia the box names, as against the rarer retrosternal Morgagni defect (*also not printed in the cached decks; not taken from the course material*).\n\nThe lung injury outlives the repair: `22)Vomiting.txt` lists children who have had surgery for diaphragmatic hernia among those predisposed to later gastro-oesophageal reflux.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Identify the left-sided posterolateral Bochdalek defect as the usual congenital diaphragmatic hernia, using the rightward shift of the heart sounds.',
  source: 'Pediatrics endpoint part1.pdf p.1612'
},

{
  id: 'pedep-mf3-66',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'malignant-solid',
  stem: 'In patients with neuroblastoma, which of the following prognostic factors would predict better survival?',
  options: ['Patient age less than one year', 'N-Myc gene amplification', 'High mitosis-karyorrhexis index', 'Clinical stage 3 rather than stage 4S'],
  answer: 0,
  explanation: '**Young age is the one favourable factor on this list.** An infant under a year — the modern threshold is set at 18 months — has a far better outcome stage for stage than an older child, because infant tumours are biologically different: they are more often hyperdiploid, they lack the aggressive genomic changes, and some regress or mature spontaneously without cytotoxic treatment. Age is therefore used as a primary risk-stratification variable alongside stage and tumour biology (*neuroblastoma is not taught in any cached paediatric deck — the word appears nowhere in `content/peds/lectures/` or in the module theory, and neither MYCN nor N-Myc appears either; not taken from the course material*).\n\n**Why the other three predict worse survival.** *N-Myc (MYCN) gene amplification* is the single most powerful adverse molecular marker in neuroblastoma; amplified tumours behave aggressively and are treated as high risk whatever the stage, and its presence overrides the favourable effect of young age. *A high mitosis-karyorrhexis index* means many cells dividing and many dying in disarray, the histological definition of unfavourable Shimada histology, and it too carries a worse outcome. *Clinical stage 3 rather than stage 4S* inverts the staging paradox that makes neuroblastoma unusual: stage 4S describes an infant with a localised primary plus dissemination limited to liver, skin or minimal marrow, and it carries an excellent prognosis with frequent spontaneous regression, so trading 4S for stage 3 trades a favourable category for an unfavourable one.\n\nRead together, the four options are one favourable factor set against age-independent biology, histology and stage — the pattern worth carrying out of this question.\n\nWritten for this bank — Pediatrics endpoint part1.pdf prints no explanation here.',
  objective: 'Rank age under one year as favourable in neuroblastoma against MYCN amplification, a high mitosis-karyorrhexis index and stage 3 over stage 4S.',
  source: 'Pediatrics endpoint part1.pdf p.1614'
}
