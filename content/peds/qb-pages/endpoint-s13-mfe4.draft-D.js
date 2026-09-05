/* ===========================================================================
   ENDPOINT - Pediatrics endpoint part1.pdf - MODEL FINAL EXAM 4 - draft half D
   Drafted from endpoint-s13-mfe4.array.js (PEDEP_S13_STAGED), rows n61..n80,
   minus n68 (adjudicated reprint of pedep-mf3-63; already cited in the live
   entry's source and excluded here per the drafting brief).
   Ids: pedep-mf4-<n>. bank:'endpoint', module:'pediatrics'.
   =========================================================================== */

{
  id: 'pedep-mf4-61',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'allergy',
  stem: 'Jonathan, aged 6 years, is brought to the Emergency Department after becoming unwell at a family party. He is unable to say more than a single word and he indicates that he is finding it hard to breathe. He is very anxious. He has a raised itchy rash that is spreading from his face down to his chest. He has never had an episode like this before, although his mother explains that he has asthma and he has been prescribed a salbutamol inhaler previously for wheezy episodes. What is the best management of this child?',
  options: ['Give oxygen and establish airway', 'Give anti-histamines', 'Watchful waiting', 'Give anti-asthmatic'],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> Anaphylaxis with inability to breathe and establishing airway. The initial management is giving oxygen.\n\n---\n\nJonathan\'s episode meets the description of anaphylaxis this bank works through elsewhere -- an itchy, spreading rash together with respiratory compromise severe enough that he can only manage a single word at a time -- but this question does not ask for that diagnosis, only for what to do about it. `27)Anaphylaxsis.txt` sets the hospital sequence out in that order: "Rapidly assess airway, breathing, circulation, skin and weight (body mass)" comes first, ahead of the main drug therapy, and only afterwards does the lecture move to intramuscular adrenaline and the additional treatments (oxygen, inhaled salbutamol, IV fluids, antihistamines, steroids). Securing his airway and giving oxygen is therefore the immediate, literal first action for a child who is struggling to breathe and can barely speak, buying the time the rest of the protocol needs.\n\n**Why each distractor fails.** *Give anti-histamines* treats only the skin component of a multi-system reaction and acts far too slowly to reverse airway compromise already this severe. *Watchful waiting* is actively dangerous -- anaphylaxis can progress from this point to complete airway obstruction or cardiovascular collapse within minutes, and nothing about "never had an episode like this before" makes it likely to resolve unassisted. *Give anti-asthmatic* is the tempting distractor because his known asthma and salbutamol inhaler are named in the stem, but a first-ever episode with a spreading urticarial rash is anaphylaxis, not a routine wheeze exacerbation; inhaled salbutamol has a place only as one of the additional treatments alongside adrenaline, not as a stand-alone substitute for airway management.\n\nThis exam prints a second question on the same vignette, `pedep-alg-1`, which asks for Jonathan\'s diagnosis rather than his management -- the two keys are not interchangeable, since naming anaphylaxis and acting on it are different tasks.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'In a child with a first-ever spreading urticarial rash and severe respiratory compromise, secure the airway and give oxygen as the immediate first step, ahead of antihistamines, watchful waiting or treating it as a routine asthma exacerbation.',
  source: 'Pediatrics endpoint part1.pdf p.1766'
},

{
  id: 'pedep-mf4-62',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'allergy',
  stem: 'An 8-year-old girl is brought to hospital following ingestion of a cereal bar containing peanuts. She is noted to have a widespread urticarial rash and swelling of the face and lips. She is finding it difficult to speak and there is widespread wheeze on auscultation. What is the single most important step in her management?',
  options: ['Intramuscular epinephrine', 'Oral corticosteroids', 'Oxygen therapy', 'Chlorphenamine (anti-histamine)'],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> The single most important step in management of anaphylaxis (without severe breathing affection) is IM epinephrine.\n\n---\n\nThis is the same underlying scenario `pedep-emg-24` tests -- an 8-year-old girl with peanut-triggered anaphylaxis, widespread urticaria, facial and lip swelling and respiratory compromise -- but the two menus test different things. `pedep-emg-24`\'s five options print doses and routes ("Intramuscular 1 microgram/kg... (1:1000)" against "Intravenous... (1:10,000)"), so answering it correctly means knowing the dose and route together. This exam\'s four options print bare drug and treatment names with no dose or route attached, so all it can test is which single agent and modality comes first -- and that answer is unchanged: `27)Anaphylaxsis.txt` states "the main therapy is... Inject epinephrine (adrenaline) intramuscularly in the mid-outer thigh."\n\n**Recorded, not corrected.** The box on this page qualifies its own rule with "(without severe breathing affection)", yet the stem describes exactly that -- "widespread wheeze on auscultation" and a girl "finding it difficult to speak". IM epinephrine remains first-line for anaphylaxis regardless of how severe the respiratory compromise is; the qualifier does not change the key, and the disagreement is left as printed.\n\n**Why each distractor fails.** *Oral corticosteroids* act over hours, not minutes, and have no role in reversing acute airway swelling or bronchospasm. *Oxygen therapy* is one of the lecture\'s listed additional treatments, valuable alongside adrenaline but not the single most important step when the reaction itself needs immediate reversal. *Chlorphenamine (anti-histamine)* similarly sits among the additional treatments and acts too slowly and too weakly against a reaction that has already reached the airway and chest.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'IM epinephrine remains the single most important first step in anaphylaxis even where the option menu prints bare drug names rather than doses -- and the box\'s qualifier "without severe breathing affection" does not hold against a stem describing severe wheeze, a contradiction recorded, not corrected.',
  source: 'Pediatrics endpoint part1.pdf p.1768'
},

{
  id: 'pedep-mf4-63',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal-rd',
  stem: 'An infant with a prenatal diagnosis of a diaphragmatic hernia is born at 38 weeks gestation and weighs 3 kg. The child develops respiratory distress within three hours of birth. Which of the following is a poor prognostic indicator for survival?',
  options: ['Presence of stomach in the chest', 'Left-sided diaphragmatic hernia', 'Lung-to-head ratio (LHR) of 1.5', 'Normal vaginal delivery as the mode of birth'],
  answer: 0,
  explanation: 'A poor prognostic indicator for survival in congenital diaphragmatic hernia (CDH) here is intrathoracic herniation of the **stomach**. Liver herniation into the chest and a very low lung-to-head ratio are the other classic antenatal markers of a poor outcome; the presence of stomach in the chest signals a larger defect and correlates with more severe pulmonary hypoplasia and worse survival than a hernia containing bowel alone.\n\n**Why the other three are not poor prognostic signs here.** *Left-sided herniation* is actually the more favourable and by far the more common variant (roughly 85% of CDH), because it more often leaves the liver in the abdomen, unlike a right-sided hernia which more often carries the liver into the chest -- a left-sided hernia is not the "poor" indicator this question asks for. *Lung-to-head ratio (LHR) of 1.5* sits in a more reassuring range: an LHR below about 1.0, not 1.5, is the widely used cut-off associated with a poor prognosis, so this printed figure is on the better side of that threshold. *Normal vaginal delivery as the mode of birth* has no established bearing on CDH survival, which is driven by the degree of pulmonary hypoplasia and any associated anomalies, not by how the baby is delivered.\n\n`9) Respiratory distress in newborn.txt` covers CDH\'s presentation -- "Severe, immediate respiratory distress," a "Scaphoid (sunken) abdomen," and heart sounds shifted to the right -- and its usual antenatal detection window ("often diagnosed via prenatal ultrasound (18-20 weeks)") -- but it stops at diagnosis and does not rank these features by prognosis. *Every prognostic detail above -- stomach-in-chest, the left-sided predominance, the LHR cut-off and its lack of association with delivery mode -- is not taken from the course material.*\n\nWritten for this bank — Pediatrics endpoint part1.pdf prints no explanation here.',
  objective: 'Presence of stomach in the intrathoracic cavity is a poor prognostic sign in congenital diaphragmatic hernia, distinguished from the more favourable left-sided predominance, a reassuring LHR of 1.5, and delivery mode, which carries no independent prognostic weight.',
  source: 'Pediatrics endpoint part1.pdf p.1770'
},

{
  id: 'pedep-mf4-64',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal-rd',
  stem: 'Which of the following is NOT true regarding congenital diaphragmatic hernia (CDH)?',
  options: ['May be diagnosed antenatally', 'Is usually left-sided', 'May be associated with pulmonary hypoplasia', 'Repair is required within the next 48 hours'],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> Surgery is delayed until the infant is hemodynamically stable, rather than performed immediately within 48 hours.\n\n---\n\nCongenital diaphragmatic hernia is treated as a physiological emergency at birth and a surgical one only once the baby survives past it. The bowel, and often the stomach or liver, sit in the hemithorax on top of lungs already hypoplastic and prone to pulmonary hypertension, so the first days are spent stabilising gas exchange and circulation -- ventilation, gastric decompression and correction of pulmonary hypertension, the same delivery-room priorities `pedep-mf3-77` works through for this lesion. Repair is deliberately deferred until the infant is hemodynamically stable, which can take days to weeks, because operating on a baby still crashing from pulmonary hypertension makes the surgery, not the hernia, the thing that kills. "Repair is required within the next 48 hours" is therefore the false statement, and the one the stem asks for.\n\n**Why the other three are true.** *May be diagnosed antenatally* -- `9) Respiratory distress in newborn.txt` states CDH "is often diagnosed via prenatal ultrasound (18-20 weeks)," the same window used to plan delivery at a centre with a surgeon and neonatal unit available. *Is usually left-sided* -- left-sided herniation accounts for the large majority of cases, since the right hemidiaphragm closes earlier in development and is further protected by the liver *(not taken from the course material)*. *May be associated with pulmonary hypoplasia* -- this is the central pathophysiology of the condition: bowel occupying the chest throughout lung development compresses the developing lung on the affected side and, through mediastinal shift, the contralateral lung too, which is why respiratory distress is immediate and severe rather than a separate comorbid finding.\n\nThis exam repeats the same "repair should be delayed" template against a different organ in `pedep-mf3-80`, whose false option claims inguinal hernia repair should wait until the child is over two years old -- there the delay claim is wrong because an inguinal hernia never closes spontaneously and carries an early incarceration risk, while here the true statement is the opposite: the diaphragmatic repair genuinely should wait, just not for the fixed 48-hour deadline the false option gives.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Congenital diaphragmatic hernia repair is deliberately delayed until the infant is hemodynamically stable rather than fixed to 48 hours, distinguished from the true facts that CDH may be diagnosed antenatally, is usually left-sided and causes pulmonary hypoplasia.',
  source: 'Pediatrics endpoint part1.pdf p.1772'
},

{
  id: 'pedep-mf4-65',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'renal-cakut',
  stem: 'Which of the following is TRUE regarding undescended testes (cryptorchidism)?',
  options: ['Always approached using an inguinal approach', 'Ectopic testes may be found in the perineum', 'Usually requires a two-stage procedure', 'Are bilateral in 50% of cases'],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> Some undescended testes are ectopic and located outside the normal path, like in the perineum or femoral region.\n\n---\n\n**Cryptorchidism is not taught in the cached course material** -- as this bank\'s other undescended-testis questions already note (`pedep-mf3-71`, `pedep-mf2-35`), grepping `content\\peds\\lectures\\` for "cryptorchid" and "undescended" returns zero files, so every statement below is standard paediatric surgical knowledge, not taken from the course material.\n\nA truly **undescended** testis is simply arrested somewhere along the normal path of descent -- abdominal, inguinal canal or high scrotal -- and is usually palpable if canalicular. An **ectopic** testis has left that path altogether and lodged somewhere the normal descent never passes through: the perineum, the femoral triangle, the base of the penis, or occasionally the opposite hemiscrotum. Because the two terms describe genuinely different anatomical outcomes, "ectopic testes may be found in the perineum" is simply a true statement of where an ectopic testis can end up, matching the box\'s own examples (perineum, femoral region).\n\n**Why the other three are false.** *Always approached using an inguinal approach* overstates the surgical options -- a palpable, canalicular testis is usually reached through a standard inguinal (or scrotal) incision, but a non-palpable, high intra-abdominal testis is generally located and mobilised laparoscopically, so "always" is too strong. *Usually requires a two-stage procedure* is backwards: the great majority of orchidopexies are completed in a single operation, and a staged (Fowler-Stephens) repair is reserved for the minority of very high, intra-abdominal testes whose vascular pedicle is too short to reach the scrotum in one step. *Are bilateral in 50% of cases* overstates the frequency of bilaterality -- cryptorchidism is unilateral in the large majority of boys, more often on the right, with bilateral involvement being the minority pattern rather than a coin flip.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Distinguish an ectopic testis, found outside the normal path of descent (e.g. perineum, femoral region), from an undescended testis, and reject the overstated claims about approach, staging and bilaterality.',
  source: 'Pediatrics endpoint part1.pdf p.1774'
},

{
  id: 'pedep-mf4-66',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'gastroenterology',
  stem: 'An infant with duodenal atresia is also likely to have:',
  options: ['Biliary atresia', "Down's syndrome", 'Imperforate anus', 'Pyloric stenosis'],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> About 30% of duodenal atresia cases are associated with trisomy 21 (Down syndrome).\n\n---\n\n`6) Genetically determined disease_.txt` lists "Duodenal atresia" among the features of Down syndrome, alongside congenital heart defects (40%) and Hirschsprung disease, so the association the box quotes runs in the direction this stem asks about: an infant with duodenal atresia is likely to also have trisomy 21. *The lecture names the association but prints no percentage for it; the 30% figure is not taken from the course material.* A "double bubble" on plain film or antenatal ultrasound should prompt a karyotype alongside an echocardiogram, since the same slide lists congenital heart defects as the commonest associated feature.\n\n**Why the other three are false.** *Biliary atresia* has no recognised link to duodenal atresia -- it is a separate hepatobiliary anomaly with its own, unrelated associations. *Imperforate anus* is part of the VACTERL association together with duodenal-level bowel anomalies, but it is not the specific chromosomal link this question tests, and duodenal atresia\'s best-known syndromic association remains trisomy 21. *Pyloric stenosis* is an acquired, postnatal hypertrophy of the pyloric muscle with its own separate epidemiology (favouring firstborn boys) and carries no recognised association with duodenal atresia.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Link duodenal atresia to trisomy 21 (Down syndrome), distinguishing it from biliary atresia, imperforate anus and pyloric stenosis, none of which share that specific association.',
  source: 'Pediatrics endpoint part1.pdf p.1776'
},

{
  id: 'pedep-mf4-67',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'gastroenterology',
  stem: "All of the following statements concerning Hirschsprung's disease in children are true, EXCEPT:",
  options: ['An absence of ganglion cells in a dilated segment of the colon is the underlying problem', 'Constipation is a classic symptom and almost always begins in the early days of life', 'Rectal examination of affected patients usually reveals an empty rectal ampulla', 'It is more common in males'],
  answer: 0,
  explanation: "**The endpoint file prints this explanation:**\n\n> In Hirschsprung's disease, the aganglionic segment is narrow and contracted, not dilated. The proximal segment becomes dilated due to obstruction. Other statements are true: constipation begins early, the rectal ampulla may be distended with failure of relaxation, and the disease is more common in males.\n\n---\n\nHirschsprung's disease is caused by an absence of ganglion cells (aganglionosis) in the distal bowel, but that aganglionic segment itself stays **narrow and contracted**, because without the ganglion cells that normally relax it, the segment cannot dilate and instead remains in tonic spasm. It is the bowel proximal to the block that dilates, distended by the stool and gas it cannot push past the non-relaxing segment beyond it -- the reverse of what option A claims, which is why A is the false statement this EXCEPT stem is looking for.\n\n**Why the other three are true, per the box.** *Constipation is a classic symptom and almost always begins in the early days of life* -- Hirschsprung's disease is congenital, and delayed passage of meconium beyond the first day or two of life is one of its earliest and most consistent signs. *Rectal examination... usually reveals an empty rectal ampulla* -- because the aganglionic rectum fails to relax and stool cannot descend into it, so the ampulla is found empty on digital examination even in a child with marked abdominal distension, a finding that helps separate this disease from functional constipation. *It is more common in males* -- Hirschsprung's disease has a well-recognised male predominance.\n\n**Recorded, not corrected.** The box calls option C true, yet the same box also states the aganglionic ampulla 'may be distended with failure of relaxation' -- a rectal ampulla that is both 'empty' (option C) and 'distended' (the box's own wording) is an internal contradiction the printed page does not resolve; both readings are staged exactly as printed and the key is left on the highlight.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*",
  objective: "In Hirschsprung's disease, the aganglionic segment stays narrow and contracted while the bowel proximal to it dilates -- the reverse of option A -- and recognise the disease's early-onset constipation, male predominance, and the box's own contradiction between an 'empty' and a 'distended' rectal ampulla.",
  source: 'Pediatrics endpoint part1.pdf p.1778'
},

{
  id: 'pedep-mf4-69',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'renal-cakut',
  stem: "Worried parents bring in their full-term 18-month-old infant for evaluation of a unilateral undescended testis (UDT). On examination, normal male genitalia with scrotal asymmetry are noted. Despite maneuvers to detect a retractile testicle, the right testis is not palpable. What should be the next step in this patient's management?",
  options: ['The patient should be reexamined prior to 2 years of age because most patients undergo spontaneous descent of the testicle by 2 years of age.', 'Laparoscopy for presence and localization of the testicle.', 'Hormonal therapy with human chorionic gonadotropin (hCG).', 'Imaging studies.'],
  answer: 1,
  explanation: "**The endpoint file prints this explanation:**\n\n> Non-palpable testes after 6–12 months require laparoscopy to locate or remove, because spontaneous descent is unlikely after 1 year. Hormonal therapy is less effective.\n\n---\n\nThis vignette pattern is not covered in the cached course material -- the same zero-hit grep for \"cryptorchid\" and \"undescended\" noted at `pedep-mf3-71` and `pedep-mf2-35` applies here too, so the management pathway below is standard paediatric surgical teaching. Once a testis remains non-palpable in an infant beyond the age spontaneous descent is expected to have already happened, the diagnostic priority shifts from waiting to finding out where it actually is -- intra-abdominal, in the inguinal canal exiting above a blind-ending vas and vessels (a 'vanishing testis'), or genuinely absent. Diagnostic laparoscopy is both the most reliable way to answer that question and, in the same operation, the first step of treatment (orchidopexy or removal of a non-viable remnant), which is why it is the single next step rather than a test that only informs a later decision.\n\n**Recorded, not corrected.** Option A claims 'most patients undergo spontaneous descent of the testicle by 2 years of age', while the printed box states spontaneous descent is 'unlikely after 1 year' -- the two disagree on the cut-off age, and the key stays on the highlight regardless.\n\n**Why the other two fail.** *Hormonal therapy with human chorionic gonadotropin (hCG)* has been used historically to try to induce descent, but success rates are low and it does not help localise a testis that cannot be felt, so it is not the correct next step for a non-palpable testis -- matching the box's own 'hormonal therapy is less effective'. *Imaging studies* (ultrasound, MRI) are poor at reliably localising a genuinely non-palpable, potentially intra-abdominal testis compared with direct laparoscopic visualisation, and even a negative scan cannot exclude an intra-abdominal testis the way laparoscopy can.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*",
  objective: "For a non-palpable undescended testis beyond the age spontaneous descent is expected, laparoscopy is the next step -- both localising and, in the same operation, beginning treatment -- ahead of hormonal therapy or imaging, and note the box's disagreement with option A on the cut-off age.",
  source: 'Pediatrics endpoint part1.pdf p.1782'
},

{
  id: 'pedep-mf4-70',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'gastroenterology',
  stem: 'One of the important sonographic signs of infantile hypertrophic pyloric stenosis is:',
  options: ['Pyloric thickness ≥11 mm', 'Pyloric duct length ≥17 mm', 'Pyloric muscle thickness ≥2 mm', 'None of the above'],
  answer: 1,
  explanation: 'The diagnosis of infantile hypertrophic pyloric stenosis is now made almost exclusively by abdominal ultrasound, using numeric thresholds rather than the older test-feed and palpation technique `22)Vomiting.txt` describes. **The specific ultrasound criteria for hypertrophic pyloric stenosis are not printed in any cached peds lecture** -- the lecture describes the "olive"-like mass felt during a test feed and an ultrasound image showing an "elongated" and "hypertrophied" pylorus, but gives no millimetre cut-offs, so every figure below is standard radiological teaching, not taken from the course material.\n\nThe criterion this question tests is **pyloric channel length**: a channel measuring **≥17 mm** (commonly cited in the 16–19 mm range depending on the reference used) is diagnostic of hypertrophic pyloric stenosis, alongside a thickened muscular wall and a widened overall pyloric diameter measured on the same scan.\n\n**Why the other two numeric options fail.** *Pyloric thickness ≥11 mm* mislabels what an 11 mm figure would represent -- the pyloric muscle wall itself is thin, normally under about 2 mm and diagnostic of hypertrophy once it thickens to roughly 3–4 mm, so 11 mm badly overstates the muscle-thickness threshold. *Pyloric muscle thickness ≥2 mm* undershoots the diagnostic threshold in the other direction -- around 2 mm is close to the upper limit of normal, not the abnormal cut-off, which sits nearer 3–4 mm. *None of the above* is excluded because the channel-length criterion in option B is itself a genuine, correctly stated diagnostic threshold.\n\nWritten for this bank — Pediatrics endpoint part1.pdf prints no explanation here.',
  objective: 'Recognise a pyloric channel length of ≥17 mm on ultrasound as a genuine sonographic criterion for infantile hypertrophic pyloric stenosis, distinguished from mislabelled or under-threshold thickness figures.',
  source: 'Pediatrics endpoint part1.pdf p.1784'
},

{
  id: 'pedep-mf4-71',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal-rd',
  stem: 'A healthy newborn starts spitting after the first feed. NG tube cannot be passed. X-ray shows a dilated stomach. What is the likely diagnosis?',
  options: ['Hypertrophic pyloric stenosis', 'Esophageal atresia with distal fistula', 'Proximal fistula with distal fistula', 'Meconium ileus'],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> Failure to pass an NG tube and proximal gastric dilation indicate esophageal atresia, not pyloric stenosis or meconium ileus.\n\n---\n\n**Esophageal atresia is not covered in the cached peds lecture set** -- a targeted grep of `content\\peds\\lectures\\` for "esophageal atresia" and "tracheo-esophageal" returns only a single passing mention, in `22)Vomiting.txt`, of reflux being commoner "following surgery for esophageal atresia or diaphragmatic hernia" -- nothing on its own diagnosis or classification. Every claim below is therefore standard paediatric surgical knowledge, not taken from the course material.\n\nA newborn who cannot swallow past a blind-ending upper oesophageal pouch will spit up the first feed, and a nasogastric tube advanced from the mouth or nose will coil in that pouch rather than reach the stomach -- the classic bedside sign of esophageal atresia. In the commonest anatomical form, a fistula connects the distal oesophageal segment to the trachea, so air still enters the stomach and bowel with every breath, producing the dilated, gas-filled stomach this X-ray shows; an isolated (no-fistula) atresia would instead leave a gasless abdomen, since no route exists for air to reach the stomach at all. Together, a failed NG tube passage and a dilated stomach point specifically to esophageal atresia with a distal fistula.\n\n**Why the other options fail.** *Hypertrophic pyloric stenosis* presents later, at two to eight weeks, with projectile vomiting and a normally passing NG tube, not a failed one from birth. *"Proximal fistula with distal fistula"* is printed exactly as staged, but as written it names two fistulae and no atresia at all -- a description matching no recognised anatomical type of this anomaly, transcribed here without correction. *Meconium ileus* obstructs the distal small bowel with thickened meconium and has no bearing on NG tube passage at the mouth or on gastric dilation from swallowed air.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'A failed NG tube passage with a dilated, gas-filled stomach on X-ray points to esophageal atresia with a distal tracheo-esophageal fistula, not pyloric stenosis, meconium ileus, or the malformed "proximal fistula with distal fistula" option as printed.',
  source: 'Pediatrics endpoint part1.pdf p.1786'
},

{
  id: 'pedep-mf4-72',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal',
  stem: 'Major determinant of poor survival after TEF repair:',
  options: ['Esophageal leak', 'Pneumonia', 'Presence of other anomalies', 'Site of fistula'],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> Associated anomalies, especially cardiac, are the biggest factor affecting survival, more than leaks or fistula location.\n\n---\n\nEsophageal atresia rarely occurs in isolation, and this bank already places it inside the **VACTERL** association in `pedep-mf3-78` -- Vertebral, Anorectal, Cardiac, Tracheo-Esophageal, Renal and Limb anomalies -- which `6) Genetically determined disease_.txt` names as its worked example of an association without expanding the acronym. Of those companion anomalies, **cardiac defects** are both the commonest and the ones that most change outcome, because an unrecognised structural (or duct-dependent) heart lesion threatens the infant independently of how well the oesophageal repair itself goes. *The comparative weighting against surgical technical factors is not taken from the course material.*\n\n**Why the other three fail.** *Esophageal leak* at the anastomosis is a recognised technical complication, but modern management (drainage, repeat imaging, delayed feeding) usually salvages it without it being the dominant driver of mortality. *Pneumonia* is a real risk, largely from aspiration around the repair or via a missed fistula, but it is a treatable, usually reversible complication rather than the leading determinant of survival. *Site of fistula* affects surgical technique and timing but has far less bearing on whether the infant survives than the presence of a major associated anomaly, particularly cardiac, does.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Associated anomalies, especially cardiac defects within the VACTERL association, are the major determinant of survival after TEF repair -- more than esophageal leak, pneumonia or fistula site.',
  source: 'Pediatrics endpoint part1.pdf p.1788'
},

{
  id: 'pedep-mf4-73',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal-rd',
  stem: 'True about Esophageal Atresia (EA) EXCEPT:',
  options: ["Primary repair isn't always possible", 'Associated with anomalies in 5%', 'Semi-sitting position is a good nursing position', 'Failure of passage of NG tube'],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> Esophageal atresia is associated with other anomalies in about 50% of cases, not 5%. Primary repair may not always be possible, NG tube fails to pass, and semi-sitting position is recommended for feeding.\n\n---\n\nThis is the same associated-anomaly rate this bank already tests in `pedep-mf3-78` and `pedep-mf4-72` (the VACTERL grouping), and the box gives the specific figure directly: **about 50%** of esophageal atresia cases have another anomaly, not the 5% option B prints. Getting the percentage right, not just the direction, is the point of this question -- 5% badly understates how often a second anomaly needs to be actively looked for. *The 50% figure itself is not taken from the course material -- the cached decks name the VACTERL association without quoting a co-occurrence rate.*\n\n**Why the remaining three statements are true, and the "except" sits on the false percentage alone.** *Primary repair isn\'t always possible* -- a long gap between the two esophageal segments (a "long-gap" atresia) can prevent a single-stage anastomosis, requiring staged repair or oesophageal replacement instead. *Semi-sitting position is a good nursing position* -- it is the position this bank recommends directly in `pedep-mf4-76` for the same lesion, reducing reflux of gastric contents up a fistula and aspiration risk while awaiting repair. *Failure of passage of NG tube* -- the same bedside sign `pedep-mf4-71` tests, a tube coiling in the blind proximal pouch rather than reaching the stomach.\n\n**A number is the clinical risk here and it is transcribed exactly as printed.** Option B\'s "5%" and the box\'s "50%" are reproduced verbatim; the discrepancy is the whole question, and the key stays on option B as the false statement regardless of which figure is the medically accurate one.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Esophageal atresia carries other anomalies in about 50% of cases, not the 5% option B prints -- the false statement in an otherwise true list that also includes non-always-possible primary repair, failed NG tube passage and semi-sitting nursing position.',
  source: 'Pediatrics endpoint part1.pdf p.1790'
},

{
  id: 'pedep-mf4-74',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal',
  stem: 'All of the following are part of VACTERL syndrome except:',
  options: ['Vaginal hypoplasia', 'Imperforate anus', 'Tracheo-esophageal fistula', 'Polycystic kidney', 'Polydactyly'],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> VACTERL includes Vertebral, Anal, Cardiac, Tracheo-esophageal, Renal, and Limb anomalies. Vaginal hypoplasia is not part of the classic association.\n\n---\n\nThe box spells out the acronym this bank has referenced without expansion in `pedep-mf3-78`, `pedep-mf4-72` and `pedep-mf4-73`: **V**ertebral, **A**nal (anorectal), **C**ardiac, **T**racheo-**E**sophageal fistula, **R**enal, **L**imb. Four of this stem\'s five options map directly onto those six letters -- imperforate anus (A), tracheo-esophageal fistula (TE), polycystic kidney (R) and polydactyly (L, a limb anomaly) -- leaving **vaginal hypoplasia** as the one finding with no place in the acronym, which is exactly why it is the EXCEPT answer.\n\n**Recorded, not corrected.** The printed box explains only why vaginal hypoplasia sits outside VACTERL and says nothing about why polydactyly is included rather than excluded -- the page gives no printed reasoning distinguishing the limb anomaly from the reproductive-tract one beyond naming the six-letter acronym itself; the key stays on option A regardless.\n\n**Why the other four are genuine VACTERL components.** *Imperforate anus* is the association\'s A. *Tracheo-esophageal fistula* is its TE, tested directly in `pedep-mf4-71`. *Polycystic kidney* stands in for the association\'s renal (R) component, alongside the renal agenesis this bank associates with VACTERL elsewhere via `40)Congenital anomalies of the kidneys and the urinary tracts 5 th year.txt`. *Polydactyly* is a limb (L) anomaly, the last letter of the acronym. **Vaginal hypoplasia**, by contrast, is a Müllerian/genital-tract anomaly with no assigned letter in VACTERL. *The full expansion of the acronym is not taken from the course material -- `6) Genetically determined disease_.txt` names "VACTERL association" as its example of an association but does not spell out the six components.*\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Vaginal hypoplasia is the finding excluded from VACTERL (Vertebral, Anal, Cardiac, Tracheo-esophageal, Renal, Limb), distinguished from imperforate anus, TEF, renal and limb anomalies that do belong to it -- and note the box gives no printed reason for including polydactyly over vaginal hypoplasia.',
  source: 'Pediatrics endpoint part1.pdf p.1792'
},

{
  id: 'pedep-mf4-75',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal-rd',
  stem: 'Best investigation for arrest of catheter at 10 cm from nostril in a newborn:',
  options: ['Plain X-ray', 'Barium swallow', 'Lipidol swallow', 'Gastrografin meal'],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> If a catheter cannot pass beyond a certain point, a plain X-ray can show the level of obstruction or coiling and help diagnose esophageal atresia. Contrast studies are generally not first-line in this situation.\n\n---\n\nA catheter that arrests at a fixed distance from the nostril -- here, 10 cm -- is the same bedside sign `pedep-mf4-71` tests: it stops where the oesophagus ends blindly, in the proximal pouch of an esophageal atresia. A **plain chest and abdominal X-ray** with the catheter left in place shows exactly where it has coiled, confirms the level of the block, and -- by whether or not gas fills the stomach and bowel below -- tells you whether a distal tracheo-esophageal fistula is present, all without instilling anything into a blind-ending pouch that is already at aspiration risk.\n\n**Why the contrast options fail.** *Barium swallow*, *Lipidol swallow* and *Gastrografin meal* all risk pushing contrast material past the catheter tip and into the airway through any fistula, or causing aspiration pneumonitis from spilling contrast out of a pouch that cannot empty forward -- a risk a plain film simply does not carry, which is why contrast studies are not the first-line investigation once a coiled catheter has already made the diagnosis likely.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'When a catheter arrests at a fixed distance from the nostril, a plain X-ray -- not a contrast swallow -- confirms the level of obstruction and any distal fistula in suspected esophageal atresia, avoiding the aspiration risk of instilled contrast.',
  source: 'Pediatrics endpoint part1.pdf p.1794'
},

{
  id: 'pedep-mf4-76',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal-rd',
  stem: 'Ideal position for newborn with esophageal atresia:',
  options: ['Supine', 'Prone', 'Semi-sitting', 'Trendelenburg'],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> Newborns with EA are placed semi-sitting to prevent aspiration of saliva or gastric contents. Supine or prone can increase risk of aspiration, and Trendelenburg is not appropriate.\n\n---\n\nA newborn with esophageal atresia cannot swallow saliva past the blind proximal pouch, and where a distal fistula connects the lower segment to the trachea, gastric contents can also reflux up that fistula into the airway. **Semi-sitting** keeps both pooled saliva and any refluxed gastric fluid below the level that would spill into the trachea, which is exactly the nursing position `pedep-mf4-73` names as one of the true statements about this same anomaly, while continuous suction empties the proximal pouch.\n\n**Why the other three fail.** *Supine* lets pooled secretions sit flat against the airway with nothing keeping gastric contents from tracking up a fistula. *Prone* does not solve the reflux-up-the-fistula problem either and makes monitoring and access to a distressed newborn harder. *Trendelenburg* (head-down) is the opposite of what this baby needs -- it would let gastric contents drain toward the fistula and airway under gravity rather than away from them.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Nurse a newborn with esophageal atresia semi-sitting to keep pooled saliva and any fistula-refluxed gastric contents below the airway, rather than supine, prone or head-down.',
  source: 'Pediatrics endpoint part1.pdf p.1796'
},

{
  id: 'pedep-mf4-77',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal',
  stem: 'Most common type of congenital esophageal anomaly:',
  options: ['Atresia with fistula into upper pouch', 'Atresia with fistula into lower pouch', 'Fistula into both pouches', 'Simple atresia without fistula', 'Fistula without atresia'],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> About 85% of EA cases have a distal tracheoesophageal fistula, making it the most common type. Other forms like isolated EA or H-type are less frequent.\n\n---\n\nEsophageal atresia is classified by where, if anywhere, a fistula connects the airway to the oesophagus. The overwhelmingly commonest pattern is a blind-ending proximal pouch with the **distal** oesophageal segment fistulising into the trachea -- printed here as "atresia with fistula into lower pouch" -- accounting for roughly **85%** of cases *(the exact figure is not taken from the course material)*. That is why air reaches the stomach in most affected infants (matching the gas-filled stomach `pedep-mf4-71` reads off an X-ray) and why this variant, rather than any rarer pattern, is the one most exam questions on the topic default to.\n\n**Why the other four are less common.** *Atresia with fistula into upper pouch* (the fistula connecting to the proximal segment instead) is a rare variant. *Fistula into both pouches* -- both proximal and distal segments connecting to the airway -- is rarer still. *Simple atresia without fistula* (isolated oesophageal atresia, with a long gap and a gasless abdomen since no air route exists to the stomach) is the second most frequent pattern, well behind the distal-fistula type. *Fistula without atresia* (the "H-type" fistula, with the oesophagus otherwise in continuity) is uncommon and often presents later, since swallowing is not mechanically blocked.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Esophageal atresia with a distal tracheo-esophageal fistula (~85% of cases) is by far the commonest anatomical type, ahead of proximal-fistula, double-fistula, isolated (gasless) and H-type variants.',
  source: 'Pediatrics endpoint part1.pdf p.1798'
},

{
  id: 'pedep-mf4-78',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal',
  stem: 'Diagnosis in a neonate with excessive salivation, respiratory distress, and coiling NG tube:',
  options: ['Proximal esophageal atresia without fistula', 'Proximal EA with distal TEF', 'H-type TEF', 'EA with both proximal and distal TEF', 'Congenital esophageal stricture'],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> Coiling of the NG tube in the upper pouch plus drooling and respiratory distress strongly suggests proximal EA without distal connection.\n\n---\n\nExcessive salivation, respiratory distress and a coiling NG tube together describe a blind-ending proximal pouch that neither swallowed saliva nor a passed tube can get past -- the same catheter sign `pedep-mf4-71` and `pedep-mf4-75` both test. What distinguishes this stem from the commoner distal-fistula pattern in `pedep-mf4-77` is what is missing: no gastric distension or bile-stained content is described, consistent with **no fistula connecting to the stomach at all**, so air never reaches the abdomen below. That combination -- a blind proximal pouch and no distal connection -- is proximal esophageal atresia without fistula.\n\n**Why the other four fail.** *Proximal EA with distal TEF* (the commonest type overall) would also let air reach the stomach via the distal fistula, which this stem\'s description does not support. *H-type TEF* has no atresia at all, so an NG tube generally passes normally, unlike the coiling described here. *EA with both proximal and distal TEF* is a much rarer double-fistula pattern the stem gives no specific reason to prefer over the simpler no-fistula picture. *Congenital esophageal stricture* is a narrowing rather than a complete blind-ending pouch, and would not typically produce a tube that coils this way from birth.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Excessive salivation, respiratory distress and a coiling NG tube with no sign of gastric air point to proximal esophageal atresia without a distal fistula, distinguished from the fistula-bearing and stricture alternatives.',
  source: 'Pediatrics endpoint part1.pdf p.1800'
},

{
  id: 'pedep-mf4-79',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal-rd',
  stem: 'Most common complication after repair of EA with distal TEF:',
  options: ['Anastomotic leak', 'Esophageal stricture', 'Recurrent TEF', 'Gastroesophageal reflux', 'Tracheomalacia'],
  answer: 3,
  explanation: "**The endpoint file prints this explanation:**\n\n> The most common long-term complication after repair of EA with distal TEF is GER, which can cause dysphagia and respiratory problems. Anastomotic strictures are common early, but GER predominates over time.\n\n---\n\n**Recorded, not corrected.** The stem asks for the most common complication without any time qualifier, but the box answers for the most common long-term complication and concedes in the same sentence that anastomotic strictures are common early -- the box narrows the question it is answering in order to make gastroesophageal reflux (GER) the key. As staged, the key stays on GER exactly as the highlight and box print it.\n\nRepair of esophageal atresia with distal TEF joins two segments of oesophagus that were never designed to meet at that length and tension, and disrupts the normal anti-reflux mechanism at the gastro-oesophageal junction in the process. Over the months and years that follow, GER is the complication that dominates, contributing to feeding difficulty, dysphagia, and recurrent respiratory symptoms from aspiration of refluxed contents -- which is why long-term follow-up of these children is built around watching for and treating reflux.\n\n**Why the other four fail (or apply to a different timeframe).** *Anastomotic leak* is an early, perioperative complication, not the long-term picture the box is answering for. *Esophageal stricture* at the anastomosis is common in the early postoperative period, often related to tension or to reflux itself, but the box specifically ranks GER above it once the long term is considered. *Recurrent TEF* is a recognised but less common complication of the repair, well below GER in frequency. *Tracheomalacia* is a genuine long-term problem in these children, from an abnormally soft, compressed trachea related to the original anomaly, but it is not the complication the box names as most common.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*",
  objective: "Gastroesophageal reflux is the most common LONG-TERM complication after repair of EA with distal TEF -- the stem's unqualified 'most common' and the box's long-term qualifier are recorded as printed, not reconciled -- ahead of anastomotic leak, stricture, recurrent fistula and tracheomalacia.",
  source: 'Pediatrics endpoint part1.pdf p.1802'
},

{
  id: 'pedep-mf4-80',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal-rd',
  stem: 'Which statements are true regarding EA?',
  options: ['Most diagnosed after first week', 'Excessive salivation', 'Feeding causes choking', 'B and C are true'],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> Excessive salivation and choking with feeds are classic signs of EA. Diagnosis is often made in the first days of life, not usually after a week.\n\n---\n\nEsophageal atresia typically declares itself almost immediately: a newborn who cannot swallow saliva past the blind pouch drools excessively from birth, and any attempt to feed provokes choking, coughing or regurgitation because the milk cannot pass -- the same clinical picture `pedep-mf4-71` and `pedep-mf4-78` both work through from different angles. Both **B** ("Excessive salivation") and **C** ("Feeding causes choking") are therefore true statements on their own, which is why the combining option "B and C are true" is the correct answer here.\n\n**Why the remaining option fails.** *Most diagnosed after first week* is the reverse of the usual course: because the signs are present from the first feed, esophageal atresia is generally diagnosed within the first days of life, not after waiting a week, matching the box directly. With B and C both genuinely true, no single one of them alone can be the complete answer once a combining option that names both is on offer.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Excessive salivation and choking with feeds are both classic, near-immediate signs of esophageal atresia, correctly captured by the combining "B and C are true" option rather than the false claim that diagnosis is usually delayed past the first week.',
  source: 'Pediatrics endpoint part1.pdf p.1804'
}
