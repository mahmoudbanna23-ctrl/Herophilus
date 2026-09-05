/* ===========================================================================
   ENDPOINT - Pediatrics endpoint part1.pdf - MODEL TRAINING EXAM 1, half A
   Rows n1, n2, n3, n5, n6, n7, n8, n9, n10, n11, n12, n13, n14, n15 (14 entries).
   n4 is NOT drafted here: p.1815 reprints live pedep-mf1-70 word for word, and
   reprint-s14-pd-ep.js has already extended that live entry's source with this
   exam's page. Drafting it here would create a duplicate.
   The splicer strips this header.
   =========================================================================== */

{ id: 'pedep-tr1-1',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'gastroenterology',
  stem: 'A 5-week-old male infant is brought to the clinic by his mother who complains of the gradual onset of vomiting after meals. This has been going on for about 2 weeks and is progressively worsening. He previously had no problems during feedings. The pylorus on ultrasound examination is measured to be 18 mm x 6 mm. What is the best management for this patient\'s likely condition?',
  options: [
    'Circumferential incision into the muscularis',
    'Excision of a wedge-shaped section of pylorus circumferentially',
    'Excision of a wedge-shaped section of pylorus longitudinally',
    'Longitudinal incision into the muscularis',
    'Removal of the pylorus followed by re anastomosis'
  ],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> Hypertrophic pyloric stenosis is treated surgically by splitting the hypertrophied muscle longitudinally without cutting the mucosa. This relieves the gastric outlet obstruction while preserving the pylorus.\n\n---\n\n`22)Vomiting.txt` gives the operative principle directly: "Pyloromyotomy involves division of the hypertrophied muscle down to, but not including, the mucosa" -- a longitudinal split down the length of the thickened muscle that relieves the gastric outlet obstruction while leaving the mucosal tube, and therefore the pylorus itself, intact. The ultrasound here (18 mm x 6 mm) matches the same lecture\'s diagnostic pathway for pyloric stenosis -- an elongated, hypertrophied pylorus on ultrasound, which "has become the standard diagnostic procedure" once progressively worsening, non-bilious vomiting from around 2-8 weeks of age raises the suspicion.\n\n**Why the other four fail.** *Circumferential incision into the muscularis* (A) cuts around the pylorus\'s circumference rather than along its length -- this risks transecting the muscle ring completely rather than simply splitting it open, and is not the accepted operative plane. *Excision of a wedge-shaped section, circumferentially or longitudinally* (B, C) both remove tissue rather than merely divide it -- an excisional wedge is unnecessary trauma for a lesion relieved simply by releasing the hypertrophied muscle\'s grip on the lumen, and it carries a real risk of breaching the mucosa that a controlled incision avoids. *Removal of the pylorus followed by re-anastomosis* (E) is a resection, an operation of an entirely different order -- pyloric stenosis is a benign, self-limited muscular hypertrophy, not a lesion needing the organ removed, and a resection adds anastomotic and gastric-emptying risk with no benefit over simply splitting the muscle.\n\nCorrecting the hypochloraemic, hypokalaemic metabolic alkalosis this same lecture names as the biochemical hallmark of pyloric stenosis is a precondition for safe anaesthesia, but it is not itself the operative answer this question asks for.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Ramstedt pyloromyotomy is a longitudinal incision through the hypertrophied pyloric muscle down to but not through the mucosa -- not a circumferential incision, an excisional wedge in either orientation, or pyloric resection with re-anastomosis.',
  source: 'Pediatrics endpoint part1.pdf p.1807'
},

{ id: 'pedep-tr1-2',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal-rd',
  stem: 'A 3-day-old male newborn is brought to the pediatric emergency department by concerned parents due to excessive drooling, choking, and cyanotic episodes during feeding attempts. The neonate was born full-term via spontaneous vaginal delivery, and prenatal ultrasounds were unremarkable. The diagnosis of esophageal atresia with a tracheoesophageal fistula (TEF) is suspected. What is the most appropriate diagnostic sign in neonate born with esophageal atresia and tracheoesophageal fistula?',
  options: [
    'Polyhydramnios of the mother.',
    'He drools with excessive oral secretions.',
    'Develop choking after feeding.',
    'Have difficulty in maintaining airway.',
    'A suction oral tube becomes blocked at 10-11 cm from the lips.'
  ],
  answer: 4,
  explanation: '**The endpoint file prints this explanation:**\n\n> The most reliable diagnostic sign of esophageal atresia with TEF is inability to pass a nasogastric/orogastric tube beyond 10-11 cm. Clinical features like drooling and choking are suggestive, but the tube blockage is diagnostic.\n\n---\n\n**Esophageal atresia is not covered in the cached peds lecture set** -- grepping `content\\peds\\lectures\\` for "esophageal atresia" and "tracheo-esophageal" returns only a single passing mention, in `22)Vomiting.txt`, of reflux being commoner "following surgery for esophageal atresia or diaphragmatic hernia" -- nothing on its own diagnosis. The reasoning below is standard neonatal surgical knowledge, not taken from the course material. A suction or orogastric tube passed from the mouth advances only as far as the blind-ending proximal oesophageal pouch and then arrests at a fixed distance, classically 10-11 cm from the lips -- a mechanical, reproducible finding that confirms the atresia at the bedside, independent of anyone\'s clinical impression.\n\n**Why the other four are merely suggestive.** *Polyhydramnios* (A) is an antenatal marker, reflecting the fetus\'s inability to swallow and absorb amniotic fluid, but it is nonspecific -- it also occurs with duodenal or pyloric atresia -- and it says nothing once the baby is already born. *Excessive drooling* (B) and *choking after feeding* (C) are the clinical features that first raise suspicion, exactly as this stem describes, but neither confirms the diagnosis on its own -- other causes of poor swallowing coordination can produce similar symptoms. *Difficulty maintaining the airway* (D) reflects secondary aspiration and respiratory compromise rather than the anatomical lesion itself, and is a consequence, not a diagnostic sign. Only the tube arresting at a fixed, reproducible distance demonstrates the blind pouch directly.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'A nasogastric or orogastric tube that arrests at a fixed distance (classically 10-11 cm from the lips) is the diagnostic bedside sign of esophageal atresia with TEF, as distinct from the merely suggestive antenatal and clinical features around it.',
  source: 'Pediatrics endpoint part1.pdf p.1810'
},

{ id: 'pedep-tr1-3',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal',
  stem: 'A 3-day-old baby is vomiting and has a right iliac fossa mass. The ward nurses report that the baby has yet to pass meconium. A barium enema demonstrates soap bubble appearance. Which is the single most likely diagnosis?',
  options: [
    'Anorectal malformation',
    'Cystic fibrosis',
    'Hirschsprung\'s disease',
    'Intussusception',
    'Jejuno-ileal atresia'
  ],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> Failure to pass meconium, right iliac fossa mass, and "soap bubble" appearance on imaging indicate meconium ileus, which is strongly associated with cystic fibrosis. Thick sticky meconium obstructs the distal ileum.\n\n---\n\n**Meconium ileus is not covered in the cached general paediatrics lectures, which focus on medical rather than surgical neonatal disease** -- not taken from the course material; the reasoning below is standard neonatal surgical teaching. Abnormally thick, protein-rich meconium impacts the terminal ileum in cystic fibrosis, producing exactly this triad: failure to pass meconium, a palpable right iliac fossa mass of inspissated meconium-filled bowel, and the pathognomonic "soap bubble" (or ground-glass) appearance on imaging, caused by tiny gas bubbles trapped within the sticky meconium rather than layering into sharp air-fluid levels.\n\n**Why the other four fail.** *Anorectal malformation* (A) is diagnosed on inspection by an absent anal opening, which this vignette does not describe. *Hirschsprung\'s disease* (C) also delays meconium passage, but its distal colonic aganglionosis produces diffuse bowel distension including the rectum on plain film, not a right iliac fossa mass or a soap-bubble sign, which specifically localises to inspissated meconium in the terminal ileum. *Intussusception* (D) classically presents later, from 3 months to 2 years of age, with paroxysmal colic and a "target" or "doughnut" appearance on imaging -- not a 3-day-old with a soap-bubble sign. *Jejuno-ileal atresia* (E) is a mechanical, vascular-accident obstruction that produces multiple air-fluid levels from dilated proximal loops on an erect film, the sharp-layering pattern the soap-bubble sign is specifically distinguished from.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Failure to pass meconium with a right iliac fossa mass and a "soap bubble" appearance on imaging is meconium ileus, the neonatal presentation of cystic fibrosis -- distinct from anorectal malformation, Hirschsprung disease, intussusception and jejuno-ileal atresia.',
  source: 'Pediatrics endpoint part1.pdf p.1813'
},

{ id: 'pedep-tr1-5',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal-rd',
  stem: 'An infant with a prenatal diagnosis of a diaphragmatic hernia is born at 38 weeks gestation and weighs 3 kg. The child develops respiratory distress within three hours of birth. What is a poor prognostic indicator for survival?',
  options: [
    'Presence of stomach down in the abdomen',
    'Left-sided diaphragmatic hernia',
    'Lung-head ratio of 0.8',
    'Normal vaginal delivery as the mode of birth'
  ],
  answer: 2,
  explanation: 'A lung-to-head ratio (LHR) of 0.8 is the poor prognostic indicator here. LHR is measured antenatally on ultrasound and estimates how much lung has been able to develop around the herniated abdominal contents; the widely used cut-off for a poor outcome is an LHR below roughly 1.0, so 0.8 sits on the unfavourable side of that threshold and predicts more severe pulmonary hypoplasia and a harder postnatal course.\n\n**Why the other three are not poor prognostic signs here.** *Stomach down in the abdomen* is the reassuring finding -- it is stomach herniated **up into the chest** that correlates with a larger defect and worse pulmonary hypoplasia, so a stomach that has stayed in the abdomen argues for a smaller, more favourable hernia. *Left-sided diaphragmatic hernia* is in fact the more common and comparatively more favourable variant, since the right hemidiaphragm closes later in development and a right-sided hernia more often carries the liver into the chest, worsening lung compression; left-sidedness is not, by itself, the "poor" indicator the question asks for. *Normal vaginal delivery as the mode of birth* has no established bearing on CDH survival, which is driven by the degree of pulmonary hypoplasia and pulmonary hypertension and by any associated anomalies, not by how the baby is delivered.\n\n**This is a deliberate variant of a question this same exam prints elsewhere, at `pedep-mf4-63` (the same patient details -- 38 weeks, 3 kg, respiratory distress within three hours -- reworded from "Which of the following is a poor prognostic indicator" to "What is a poor prognostic indicator").** Two of the four options there are the exact opposites of two options here, and the key moves with them: where this sheet offers "Presence of stomach down in the abdomen" as a wrong answer, `pedep-mf4-63` offers "Presence of stomach in the chest" as its keyed answer; and where this sheet keys "Lung-head ratio of 0.8", `pedep-mf4-63` offers "Lung-to-head ratio (LHR) of 1.5" as one of its wrong answers. Both printings are correct within their own menus -- stomach in the chest and an LHR of 0.8 are each genuine poor prognostic markers, while stomach kept in the abdomen and an LHR of 1.5 are each reassuring findings well above the unfavourable cut-off -- so the two sheets are testing the same underlying fact from opposite ends of the same menu, not disagreeing with one another.\n\n*None of the specific prognostic markers above is taken from the course material* -- `9) Respiratory distress in newborn.txt` teaches CDH\'s presentation (severe immediate respiratory distress, a scaphoid abdomen, heart sounds shifted to the right) and its usual antenatal detection window, but does not rank findings by prognosis.\n\nWritten for this bank — Pediatrics endpoint part1.pdf prints no explanation here.',
  objective: 'An LHR of 0.8 (below the ~1.0 cut-off) and intrathoracic stomach herniation are poor prognostic markers in congenital diaphragmatic hernia, while left-sided herniation, an LHR of 1.5 and delivery mode are not -- and this exam prints the same fact from the opposite side of the menu in `pedep-mf4-63`.',
  source: 'Pediatrics endpoint part1.pdf p.1817'
},

{ id: 'pedep-tr1-6',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal-rd',
  stem: 'A full-term male newborn experiences respiratory distress immediately after birth. A prenatal sonogram was read as normal. An emergency radiograph is showing the stomach and intestine protruding into the chest. The patient is intubated and placed on 100% O2. Arterial blood gases reveal pH 7.24, Po2 60, and Pco2 52. The baby has sternal retractions and a scaphoid abdomen. Which of the following should be performed in the management of this patient?',
  options: [
    'Administration of intravenous steroids',
    'Placement of bilateral tube thoracostomies',
    'Immediate thoracotomy with lung resection',
    'Immediate laparotomy with repair of the diaphragm',
    'Mechanical ventilation with low tidal volumes'
  ],
  answer: 4,
  explanation: '**The endpoint file prints this explanation:**\n\n> Congenital diaphragmatic hernia (CDH) causes severe respiratory distress at birth due to pulmonary hypoplasia and pulmonary hypertension, not just compression. The first step is cardiopulmonary stabilization with gentle ventilation using low tidal volumes to avoid barotrauma. Definitive surgical repair of the diaphragm is done after stabilization, not immediately.\n\n---\n\n`9) Respiratory distress in newborn.txt` gives the bedside triad of congenital diaphragmatic hernia directly: "Severe, immediate respiratory distress," a "Scaphoid (sunken) abdomen," and heart sounds shifted across the midline -- all three are present here, together with abdominal contents visible in the chest on X-ray. The abdomen is sunken precisely because its contents have herniated into the hemithorax, and the underlying lung on that side (and, through mediastinal shift, the other side too) has been compressed throughout fetal development, producing pulmonary hypoplasia and a predisposition to pulmonary hypertension -- not a simple mechanical problem that surgery alone fixes. Because the lung is fragile and small, ventilation is deliberately gentle, using low tidal volumes and permissive hypercapnia (the blood gases here, pH 7.24 and Pco2 52, show a compensable respiratory acidosis, not a crisis demanding aggressive pressures) to avoid barotrauma while the infant is stabilised.\n\n**Why the other four fail.** *Intravenous steroids* (A) have no established role in the acute resuscitation of CDH. *Bilateral tube thoracostomies* (B) are not placed routinely -- what looks like an air-filled hemithorax on the film is usually herniated bowel, not a pneumothorax, and a blind chest drain risks perforating it; a tube is placed only for a genuine, confirmed pneumothorax. *Immediate thoracotomy with lung resection* (C) is not indicated at all -- the lung is hypoplastic, not diseased, and resecting it would remove functioning tissue the infant cannot spare. *Immediate laparotomy with repair of the diaphragm* (D) is the opposite of correct timing -- definitive surgical repair is deliberately deferred until the infant is haemodynamically and respiratory stable, since operating on a baby still failing gas exchange makes the surgery, not the hernia, the greater risk.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Congenital diaphragmatic hernia is managed first with gentle, low-tidal-volume ventilation to stabilise pulmonary hypoplasia and hypertension, not with steroids, a routine chest drain, lung resection, or immediate diaphragmatic repair.',
  source: 'Pediatrics endpoint part1.pdf p.1819'
},

{ id: 'pedep-tr1-7',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'gastroenterology',
  stem: 'A mother brings her 5-week-old son to the paediatric outpatient clinic. She is concerned as he has been having episodes of forceful vomiting after feeding for the last 2 weeks. She says her son always seems hungry and now is beginning to appear lethargic. Examination of the child reveals mild dehydration and the presence of a smooth, firm, non-tender mass in the right upper quadrant of the abdomen. Blood tests are sent. What biochemical abnormalities would you expect to find?',
  options: [
    'Hyponatraemic, metabolic acidosis',
    'Hyperchloraemic, respiratory alkalosis',
    'Hypernatraemic, hyperkalaemic, metabolic alkalosis',
    'Hypochloraemic, hypokalaemic, metabolic alkalosis'
  ],
  answer: 3,
  explanation: '**The endpoint file prints this explanation:**\n\n> In pyloric stenosis, repeated vomiting of gastric contents leads to loss of HCl and potassium. This produces a metabolic alkalosis with hypochloremia and hypokalemia.\n\n---\n\n`22)Vomiting.txt` names this exact biochemical picture as the hallmark of pyloric stenosis: "A hypochloraemic hypokalaemic metabolic alkalosis develops as a result of vomiting stomach contents," with hyponatraemia also possible. The vignette\'s "olive"-like right upper quadrant mass and forceful, worsening vomiting from around 5 weeks of age is the classic clinical picture the same lecture describes, with vomiting repeatedly emptying the stomach of hydrochloric acid and, through volume depletion and renin-angiotensin-aldosterone activation, driving potassium loss in the kidney as well.\n\n**Why the other three fail.** *Hyponatraemic, metabolic acidosis* (A) gets the direction of the acid-base disturbance backwards -- loss of gastric acid produces alkalosis, not acidosis, though hyponatraemia can genuinely accompany the picture. *Hyperchloraemic, respiratory alkalosis* (B) reverses the chloride change (vomiting loses chloride, producing hypochloraemia, not hyperchloraemia) and wrongly assigns the primary disturbance to the respiratory system, when pyloric stenosis is a purely gastrointestinal, metabolic problem. *Hypernatraemic, hyperkalaemic, metabolic alkalosis* (C) gets the alkalosis right but both electrolytes backwards -- vomiting a chloride- and hydrogen-rich fluid causes hypochloraemia and, through the resulting aldosterone-driven potassium wasting, hypokalaemia, not hyperkalaemia, and sodium more often falls than rises.\n\n**This exam prints the same biochemistry as a bare fact elsewhere, in `pedep-mf1-74`** ("Which of the following is true regarding the metabolic derangement seen in hypertrophic pyloric stenosis?"), with the identical hypochloraemic hypokalaemic metabolic alkalosis as its key. What discriminates the two questions is not the physiology, which is identical, but the task: here the diagnosis itself must first be recognised from an unlabelled vignette (age, feeding pattern, a palpable mass) before the expected biochemistry can be selected, while `pedep-mf1-74` states the diagnosis outright and tests only the biochemical fact.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Repeated vomiting in hypertrophic pyloric stenosis produces a hypochloraemic, hypokalaemic metabolic alkalosis -- recognised here from an unlabelled vignette, the same fact `pedep-mf1-74` tests as a bare biochemical statement.',
  source: 'Pediatrics endpoint part1.pdf p.1822'
},

{ id: 'pedep-tr1-8',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'gastroenterology',
  stem: 'A 2-week-old infant presents with sudden onset of bilious emesis. Plain films of the abdomen show evidence of an intestinal obstruction. Which of the following is the most appropriate next step in the management of this infant?',
  options: [
    'Observation',
    'Abdominal ultrasound',
    'Upper gastrointestinal contrast series',
    'Computed tomography of the abdomen and pelvis',
    'Contrast enema'
  ],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> Bilious vomiting in a neonate suggests malrotation with volvulus until proven otherwise. The gold standard test is an upper GI contrast series to confirm abnormal duodenal position.\n\n---\n\n`22)Vomiting.txt` states the underlying principle directly: bile-stained vomiting is a "potential emergency" pointing to "intestinal obstruction," naming "intussusception, malrotation or strangulated inguinal hernia" as the emergencies to consider, and this vignette\'s combination of sudden bilious emesis with obstruction already visible on plain film is exactly that red flag. An upper gastrointestinal contrast series is the study that confirms or excludes malrotation with midgut volvulus by showing the position of the duodenojejunal junction -- normally sited, or displaced and spiralling if the midgut has twisted around a narrow mesenteric root -- which is why it is the specific next investigation once bilious vomiting has already raised this possibility.\n\n**Why the other four fail.** *Observation* (A) is unsafe once bilious vomiting and obstruction are both present -- malrotation with volvulus can infarct the entire midgut within hours, so watching and waiting risks losing the bowel. *Abdominal ultrasound* (B) can sometimes suggest malrotation (an abnormal relationship of the superior mesenteric artery and vein) but is not the definitive test the way a contrast series is, and plain films here already show obstruction without telling you its cause. *Computed tomography* (D) exposes a neonate to a large radiation dose and is not the standard next step when a targeted contrast study answers the question more directly. *Contrast enema* (E) opacifies the colon, not the upper gut, and would not show the duodenojejunal junction that a malrotation diagnosis depends on.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Bilious vomiting in a neonate with obstruction on plain film is malrotation with volvulus until proven otherwise, confirmed by an upper GI contrast series -- not observation, ultrasound, CT, or a contrast enema.',
  source: 'Pediatrics endpoint part1.pdf p.1825'
},

{ id: 'pedep-tr1-9',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal',
  stem: 'A baby who was delivered a few minutes ago was noted to have a herniated bowel through the abdomen. Regarding abdominal wall defects (omphalocele/gastroschisis) the true statement is:',
  options: [
    'All cases of abdominal wall defects must be delivered by cesarean section.',
    'Omphalocele is caused by an abnormality in the lateral body folds migration and fusion.',
    'The umbilicus is located to the left of the abdominal wall defect in gastroschisis.',
    'Omphalocele has a better prognosis than gastroschisis.',
    'Any abdominal organ can be seen in gastroschisis.'
  ],
  answer: 2,
  explanation: '**This sheet prints two keys, and that is recorded here rather than corrected.** Options B ("Omphalocele is caused by an abnormality in the lateral body folds migration and fusion") and C ("The umbilicus is located to the left of the abdominal wall defect in gastroschisis") are both fully yellow-highlighted, bold and underlined on the answered page, confirmed at 600 dpi and not a rendering artefact -- and no explanation box is printed on this page to arbitrate between them. Both are independently defensible medical statements: omphalocele is conventionally attributed to failed migration and fusion of the lateral (and cranial/caudal) body folds during embryogenesis, and in gastroschisis the defect classically lies just to the right of a normally inserted umbilical cord, so the umbilicus itself sits to the left of the defect.\n\n**The key does not move, and it is resolved on this exam\'s own printed evidence rather than on outside knowledge or on the reader\'s judgement.** The same book keys "The defect is usually to the left of the midline" as **FALSE** for gastroschisis elsewhere in this exam, at `pedep-mf1-73` -- the same proposition as option C here, stated the other way round (a defect to the left of the midline is the same geometry as an umbilicus to the right of a left-of-midline defect being false, i.e. the umbilicus sitting to the defect\'s left is the true, complementary statement) -- while the book offers no comparable printing anywhere that speaks to the B statement specifically. On that basis the key is staged at index 2, option C. Neither highlight has been overruled; the double marking on this page is a genuine defect in the source, recorded as such rather than silently resolved.\n\n**Why the other three fail regardless.** *"All cases... must be delivered by cesarean section"* (A) overstates the obstetric management -- caesarean delivery is considered case by case, not mandated for every abdominal wall defect. *"Omphalocele has a better prognosis than gastroschisis"* (D) is the reverse of the usual teaching -- gastroschisis, with exposed, uncovered bowel but few associated anomalies, generally carries a better overall prognosis than omphalocele, which is more often associated with other structural and chromosomal anomalies. *"Any abdominal organ can be seen in gastroschisis"* (E) overstates gastroschisis, which typically exposes bowel alone through a small paraumbilical defect; it is omphalocele, with its covered sac, that can contain liver and other solid organs alongside bowel.\n\nWritten for this bank — Pediatrics endpoint part1.pdf prints no explanation here.',
  objective: 'This sheet double-marks two defensible statements about abdominal wall defects; the key is settled at "the umbilicus is located to the left of the abdominal wall defect in gastroschisis" using this exam\'s own printing elsewhere (`pedep-mf1-73`), which keys the mirror-image statement about the defect\'s position as false.',
  source: 'Pediatrics endpoint part1.pdf p.1827'
},

{ id: 'pedep-tr1-10',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'gastroenterology',
  stem: 'A 7-week-old girl is referred by her pediatrician for projectile vomiting over the past week. Her weight has remained stable, her fontanelles are not sunken and she sucks avidly. Her abdomen is soft with visible peristalsis in the epigastrium without evidence of a mass. A diagnosis of pyloric stenosis, in this case:',
  options: [
    'Should lead to immediate surgical pyloromyotomy',
    'Should not require any laboratory testing',
    'Should prompt an order for an abdominal ultrasound',
    'Should not be entertained until she has been tried on a new formula',
    'Would be unlikely in the absence of an "olive"'
  ],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> Pyloric stenosis diagnosis is confirmed by abdominal ultrasound (thickened, elongated pylorus). Even without a palpable olive, ultrasound is the test of choice.\n\n---\n\n`22)Vomiting.txt` names visible gastric peristalsis (seen here in the epigastrium) as a sign of pyloric stenosis, and states that the historical bedside diagnosis, palpating an "olive"-shaped mass during a test feed, "has been replaced by ultrasound, which has become the standard diagnostic procedure by visualizing the hypertrophied pylorus." This infant\'s age, projectile vomiting and avid sucking (she remains hungry between episodes, as pyloric stenosis classically allows normal feeding immediately after vomiting) fit the diagnosis even though no mass is felt on this examination, and ultrasound is exactly the next step that does not depend on a positive physical finding.\n\n**Why the other four fail.** *Immediate surgical pyloromyotomy* (A) is premature -- surgery follows correction of any metabolic derangement and, in practice, imaging confirmation, not a leap straight to the operating theatre from clinical suspicion alone. *"Should not require any laboratory testing"* (B) is wrong because electrolytes (looking for the hypochloraemic, hypokalaemic alkalosis this lecture names) are needed before any surgery is safe, whether or not the diagnosis is already suspected clinically. *"Should not be entertained until tried on a new formula"* (D) treats this as a feeding-intolerance problem, which delays a diagnosis that needs timely surgical treatment. *"Would be unlikely in the absence of an olive"* (E) overstates the physical sign -- the lecture\'s own point is that ultrasound has superseded the olive precisely because the mass is not always palpable, so its absence does not make the diagnosis unlikely.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Ultrasound, not a palpable "olive," is the standard confirmatory test for suspected pyloric stenosis -- surgery and formula trials are not appropriate next steps, and laboratory testing for the biochemical derangement is still required.',
  source: 'Pediatrics endpoint part1.pdf p.1829'
},

{ id: 'pedep-tr1-11',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal-rd',
  stem: 'A full-term baby with no known complications during pregnancy. However, immediately after birth, she was distressed and developed a bluish discoloration of the skin. Chest X-ray showed abdominal organs in the chest cavity and collapsed lung tissue on one side, which raised concerns about a congenital diaphragmatic hernia. During treatment of an infant with congenital diaphragmatic hernia, all of the following may be required except:',
  options: [
    'Chest tube insertion',
    'ECMO',
    'High-frequency oscillatory ventilation',
    'Nitric oxide',
    'Immediate surgery'
  ],
  answer: 4,
  explanation: '**The endpoint file prints this explanation:**\n\n> In congenital diaphragmatic hernia (CDH), the main problem is pulmonary hypoplasia and pulmonary hypertension, not the herniated abdominal contents. Stabilization with gentle ventilation, nitric oxide, or even ECMO may be needed before surgery. Immediate surgery is contraindicated because the infant must first be stabilized to improve oxygenation and hemodynamics before diaphragmatic repair.\n\n---\n\nThis is an EXCEPT question, and the highlighted key (E, "Immediate surgery") is the one intervention that is **not** part of the acute stabilisation toolkit -- it is, in fact, the one specifically avoided until the infant is stable, which is what makes it the exception the stem asks for. Because pulmonary hypoplasia and pulmonary hypertension, not the herniated bowel itself, drive the crisis in CDH, the priority is cardiopulmonary stabilisation before any operation.\n\n**Why the other four genuinely may be required.** *Chest tube insertion* (A) is used for a genuine, confirmed pneumothorax, a real risk in a hypoplastic, barotrauma-prone lung. *ECMO* (B) supports gas exchange and circulation in the infant whose pulmonary hypertension and hypoplasia are too severe for ventilation alone to manage, buying time for the lungs to adapt. *High-frequency oscillatory ventilation* (C) is a gentle-ventilation strategy that achieves gas exchange with smaller pressure swings than conventional ventilation, reducing barotrauma to the fragile lung. *Nitric oxide* (D) is an inhaled pulmonary vasodilator used specifically to treat the pulmonary hypertension component of CDH.\n\nOnly once all of that stabilisation is achieved -- which can take days -- does diaphragmatic repair happen; operating on a baby still crashing from pulmonary hypertension makes the surgery, rather than the hernia, the greater danger.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'In congenital diaphragmatic hernia, chest tube insertion, ECMO, HFOV and nitric oxide are all genuine parts of stabilisation, but immediate surgery is specifically avoided until the infant is stable -- making it the exception in this EXCEPT question.',
  source: 'Pediatrics endpoint part1.pdf p.1831'
},

{ id: 'pedep-tr1-12',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'gastroenterology',
  stem: 'A 4-week-old male infant is brought to the pediatric clinic by his parents due to projectile vomiting after feeds. The parents report that the vomiting has been progressively worsening over the past week and is now occurring after almost every feeding. Following confirmative diagnosis of Hypertrophic pyloric stenosis what is the Next BEST step to do:',
  options: [
    'Provide dextrose saline plus 1g KCl in 500 ml solution',
    'Send for OT and perform Ramstedt pyloromyotomy',
    'Place a balloon dilator in the pylorus',
    'Provide antibiotic therapy and send for OT and perform Ramstedt pyloromyotomy',
    'Provide Dextrose saline without potassium due to risk of cardiac arrhythmia'
  ],
  answer: 0,
  explanation: '**The endpoint file prints this explanation:**\n\n> Before pyloromyotomy, the metabolic derangements (hypochloremic, hypokalemic alkalosis) must be corrected. Electrolyte correction with fluids + potassium is the best next step before surgery.\n\n---\n\n`22)Vomiting.txt` gives the operative sequence directly: surgical pyloromyotomy is performed "after acid-base electrolyte imbalances have been corrected (which may take more than 24 hours of intravenous fluid rehydration)." Repeated vomiting has already produced the hypochloraemic, hypokalaemic metabolic alkalosis this same lecture names as the biochemical hallmark of pyloric stenosis, and correcting it -- dextrose saline with added potassium chloride -- is what makes general anaesthesia and surgery safe; operating on an alkalotic, potassium-depleted infant risks arrhythmia and a difficult anaesthetic course.\n\n**Why the other four fail.** *Immediate Ramstedt pyloromyotomy* (B) skips the correction step the lecture insists on -- confirming the diagnosis is not the same as being ready for theatre. *A balloon dilator in the pylorus* (C) is not the treatment for this condition at all; pyloric stenosis is fixed muscular hypertrophy, not a stricture a balloon can stretch open, and pyloromyotomy is the accepted operation. *Antibiotic therapy plus pyloromyotomy* (D) adds an unindicated treatment -- pyloric stenosis is not an infective process, and antibiotics have no role here. *Dextrose saline without potassium, citing arrhythmia risk* (E) has the risk backwards -- it is **uncorrected hypokalaemia**, not appropriately replaced potassium, that predisposes to cardiac arrhythmia, so potassium is added, not withheld.\n\n**This exam repeats the operation itself as a distractor in a different disease, in `pedep-mf1-58`**, which works through a neonate with bilious vomiting and two air-fluid levels on plain film (duodenal atresia) and lists "Pyloromyotomy" -- this question\'s own correct operation -- as its wrong answer A, precisely to catch a learner who confuses the two obstructions. The discriminating token between the two vignettes is the timing and character of the vomiting and the film: non-bilious, projectile vomiting from weeks of age with a normal-looking abdominal film (or an ultrasound-confirmed pylorus) points here, to pyloric stenosis corrected then treated by pyloromyotomy, while bilious vomiting from day one with a double-bubble or two air-fluid levels points to duodenal atresia, treated by duodenoduodenostomy regardless of electrolyte status, since that obstruction is anatomic and complete rather than a hypertrophied muscle causing a biochemical derangement.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'After confirming hypertrophic pyloric stenosis, the next best step is correcting the hypochloraemic, hypokalaemic alkalosis with IV fluids and potassium before pyloromyotomy -- not immediate surgery, balloon dilation, antibiotics, or potassium-free fluids -- and the same operation appears, correctly rejected, as a distractor in the unrelated duodenal-atresia vignette `pedep-mf1-58`.',
  source: 'Pediatrics endpoint part1.pdf p.1834'
},

{ id: 'pedep-tr1-13',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'perinatal',
  stem: 'A 2-day-old male infant is brought to the pediatric clinic by his parents for evaluation due to failure to pass meconium since birth. The parents report that the baby has been feeding well but appears uncomfortable and fussy. On physical examination, the infant appears healthy and well-nourished. However, a digital rectal examination reveals the absence of an anal opening. In Imperforate anus, the lateral prone radiograph is taken after birth:',
  options: [
    '0 hours',
    '6 hours',
    '24 hours',
    '48 hours',
    '12 hours'
  ],
  answer: 2,
  explanation: '**The endpoint file prints this explanation:**\n\n> In imperforate anus, a lateral prone radiograph is done after 24 hours of life. This allows enough time for air to reach the distal bowel, making it easier to determine the distance between the rectal pouch and perineum, and to classify the defect as high or low. Doing it earlier may give inaccurate results due to residual meconium.\n\n---\n\n**Imperforate anus (anorectal malformation) is not covered in the cached general paediatrics lectures beyond a single mention of "anorectal digital examination" as a constipation work-up step** -- not taken from the course material; the reasoning below is standard neonatal surgical teaching. Swallowed air takes time to travel the length of the bowel and reach the most distal, blind-ending rectal pouch. Waiting the full 24 hours lets that air fully distend the pouch, so the lateral prone film (invertogram) accurately shows how far the pouch sits from the perineal skin marker -- the distance that classifies the malformation as "high" (pouch well above the levator sling, usually needing a staged repair with an initial colostomy) or "low" (pouch close to the perineum, often repairable primarily).\n\n**Why the other four fail.** *0, 6 and 12 hours* (A, B, E) are all too early -- air may not yet have reached the rectal pouch at all, or only partially, so the apparent gas-to-perineum distance would understate how low the pouch truly is and could wrongly classify a high lesion as low, or vice versa. *48 hours* (D) is not wrong because it is dangerous, but it is later than necessary and delays a management decision (colostomy versus primary repair) that 24 hours already allows safely; the sheet\'s own timepoint is 24 hours, not 48.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'In suspected imperforate anus, the lateral prone (invertogram) radiograph is taken after 24 hours of life, allowing swallowed air time to reach the rectal pouch and accurately classify the defect as high or low.',
  source: 'Pediatrics endpoint part1.pdf p.1837'
},

{ id: 'pedep-tr1-14',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'gastroenterology',
  stem: 'A 20-month-old female infant is brought to the emergency department (ED) by her father with 4 hours of painless rectal bleeding. Abdominal examination reveals no masses, organomegaly, or tenderness. Rectal examination reveals dark blood in the rectal vault but no tenderness or evidence of trauma. The physician suspects a Meckel diverticulum. What would be the best study to confirm the suspected diagnosis?',
  options: [
    'Abdominal ultrasound',
    'Abdominal x-ray',
    'Barium enema',
    'Small bowel follow-through',
    'Technetium scan'
  ],
  answer: 4,
  explanation: '**The endpoint file prints this explanation:**\n\n> Meckel diverticulum is diagnosed by a Technetium-99m pertechnetate scan, which detects ectopic gastric mucosa. This is the gold standard test.\n\n---\n\n**Meckel diverticulum is only briefly named in the cached course material, as one listed cause of gastrointestinal blood loss, without any diagnostic work-up** -- not taken from the course material; the imaging reasoning below is standard paediatric surgical knowledge. Painless rectal bleeding with an otherwise entirely normal abdominal examination is the classic presentation of a bleeding Meckel diverticulum: ectopic gastric mucosa within the diverticulum secretes acid, which ulcerates adjacent normal ileal mucosa and bleeds, without producing a mass, tenderness or organomegaly. A technetium-99m pertechnetate scan is taken up preferentially by that ectopic gastric mucosa, lighting it up on the scan and directly confirming the diagnosis -- which is why it is the gold-standard test rather than a general anatomical survey.\n\n**Why the other four fail.** *Abdominal ultrasound* (A) and *abdominal x-ray* (B) can occasionally show a diverticulum incidentally or a related complication, but neither reliably identifies the ectopic gastric mucosa that is actually causing the bleeding. *Barium enema* (C) opacifies the colon and would not reliably fill or demonstrate a small-bowel diverticulum, particularly one bleeding rather than obstructing. *Small bowel follow-through* (D) is a structural, anatomical study that can miss a Meckel diverticulum entirely, since the diverticulum\'s narrow neck often does not fill well with contrast -- it demonstrates anatomy, not the functional tissue a technetium scan is built to detect.\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Painless rectal bleeding with a normal abdominal examination in a young child suggests a bleeding Meckel diverticulum, confirmed by a technetium-99m scan that detects its ectopic gastric mucosa -- not by ultrasound, plain film, barium enema, or small bowel follow-through.',
  source: 'Pediatrics endpoint part1.pdf p.1839'
},

{ id: 'pedep-tr1-15',
  bank: 'endpoint',
  module: 'pediatrics',
  chapter: 'genetics',
  stem: 'A 38-year-old G1 woman had an abnormal quad screen at 16 weeks\' gestation with an elevated human chorionic gonadotropin (hCG) level and a low alpha-fetoprotein (AFP). Amniocentesis confirms the diagnosis of trisomy 21. Which of the following defects are found in this patient type?',
  options: [
    'Diaphragmatic hernia',
    'Duodenal atresia',
    'Inguinal hernia',
    'Meckel diverticulum',
    'Wilms tumor'
  ],
  answer: 1,
  explanation: '**The endpoint file prints this explanation:**\n\n> Down syndrome (trisomy 21) is associated with duodenal atresia. It presents with bilious vomiting and the "double bubble" sign on x-ray.\n\n---\n\n`6) Genetically determined disease_.txt` lists the associated anomalies of Down syndrome directly, alongside its craniofacial features: "Congenital heart defects (40%)... Duodenal atresia... Hirschsprung disease" -- duodenal atresia is named explicitly as one of the recognised "other anomalies" of trisomy 21, the same lecture that also gives its cause (an extra copy of chromosome 21) and its confirmatory test (karyotype or FISH), matching this vignette\'s route to diagnosis by amniocentesis after an abnormal quad screen.\n\n**Why the other four are not on the deck\'s Down syndrome list.** *Diaphragmatic hernia* (A) is not named among the lecture\'s Down syndrome anomalies; congenital diaphragmatic hernia occurs largely independently of trisomy 21. *Inguinal hernia* (C) is a common paediatric surgical problem in general, but it is not one of the lecture\'s listed Down syndrome associations. *Meckel diverticulum* (D) likewise does not appear on that list -- it is a separate congenital gut anomaly with its own, unrelated embryology (a remnant of the vitelline duct). *Wilms tumour* (E) is associated with other genetic conditions (such as WAGR syndrome and Beckwith-Wiedemann syndrome), not with trisomy 21.\n\n*The vignette\'s own antenatal screening detail -- a raised hCG together with a low AFP as the quad-screen pattern for Down syndrome -- is not spelled out in the cached lecture, which covers the postnatal diagnosis (karyotype/FISH) rather than the maternal serum screening pattern; not taken from the course material.*\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*',
  objective: 'Duodenal atresia is a recognised associated anomaly of trisomy 21 (Down syndrome), alongside congenital heart defects and Hirschsprung disease -- diaphragmatic hernia, inguinal hernia, Meckel diverticulum and Wilms tumour are not on that list.',
  source: 'Pediatrics endpoint part1.pdf p.1841'
},
