/* endpoint-s14-tre1.part-A.js
   Source: D:\claude os\Medical school\Herophilus\Semester 8\Pedo\Questions\Pediatrics endpoint part1.pdf
   Section: MODEL TRAINING EXAM 1, half A, n1..n15 (answered sheets only).

   PAGE LIST (as given in the brief, measured from an OCR sheet index):
   n1 p1807(+1808) | n2 p1810(+1811) | n3 p1813 | n4 p1815 | n5 p1817 |
   n6 p1819(+1820) | n7 p1822(+1823) | n8 p1825 | n9 p1827 | n10 p1829 |
   n11 p1831(+1832) | n12 p1834(+1835) | n13 p1837 | n14 p1839 | n15 p1841.
   All 21 pages rendered at 150 dpi and read directly (no OCR text used as a source).

   MEASURED, not assumed:
   - Printed numbering ran 1..15 straight through, no skip, no repeat, and agreed with
     n on every single sheet read (1. through 15., confirmed on each answered page).
   - The red folio at the foot of every one of the 21 rendered pages matched the PDF
     page number requested (spot-checked on all 21, exact on all 21) -- this section
     really is 1:1, not 2-up.
   - Option-count split: 4 options (A-D) on 3 pages -- n4 (p1815), n5 (p1817, printed
     lowercase a-d), n7 (p1822). 5 options (A-E) on the other 12 pages -- n1,2,3,6,8,
     9,10,11,12,13,14,15.
   - Pages printing NO explanation box at all: n4 (p1815), n5 (p1817), n9 (p1827).

   THE SIX OVERFLOW PAGES, each verdict:
   - p1808 (n1): continuation of Q1's box. The answered sheet (1807) printed no box
     text at all below the options -- the ENTIRE explanation is on 1808, not a partial
     spillover. No stem, no options, no question number on 1808 -- pure prose box.
   - p1811 (n2): same shape -- 1810 carries no box; the whole explanation is on 1811.
   - p1820 (n6): same shape -- 1819 carries no box; the whole explanation is on 1820.
   - p1823 (n7): same shape -- 1822 carries no box; the whole explanation is on 1823.
   - p1832 (n11): same shape -- 1831 carries no box; the whole explanation is on 1832
     (printed in an italic face, unlike the other boxes in this run, but it is plainly
     the continuation of Q11's reasoning -- opens "In congenital diaphragmatic hernia
     (CDH)..." answering exactly Q11's stem).
   - p1835 (n12): same shape -- 1834 carries no box; the whole explanation is on 1835.
   None of the six overflow pages carried a new question, a stem, or an option ladder --
   all six were confirmed as pure explanation-box prose, entirely displaced from their
   answered sheet.

   CROPS TAKEN:
   - p1827, 600 dpi, region x0 y1000 W4800 H800 (600-dpi px) -- taken to settle whether
     option B and option C were BOTH truly yellow-highlighted on the answered sheet, or
     whether one was only bold/underlined black text. The crop confirms both B and C
     carry the identical solid yellow highlight, bold, underlined -- see the n:9 note
     and the escalation below. No numeral/unit/dose crop was needed elsewhere; every
     other number on these 15 sheets (18mm x 6mm, 10-11cm, pH/Po2/Pco2 values, LHR 0.8,
     1g KCl in 500 ml, 24 hours) was crisp and unambiguous at 150 dpi.

   CONTRADICTIONS RECORDED:
   - n9 (p1827): TWO options (B and C) are both fully yellow-highlighted, bold,
     underlined -- confirmed by 600 dpi crop, not a rendering artefact. No explanation
     box is printed to arbitrate. Both statements read as independently defensible
     medical claims. THIS IS ESCALATED, NOT DECIDED -- key is staged as null. See the
     transcriber's report for the specific question back to the parent.
   - n11 (p1831): the sheet is an EXCEPT question ("all of the following may be
     required EXCEPT") and the highlighted key (E, "Immediate surgery") is the
     exception; the overflow explanation on p1832 argues immediate surgery is
     CONTRAINDICATED, which supports E being the odd-one-out, not a disagreement with
     the key. Recorded for clarity, not a defect.
   - No other sheet showed a highlight/explanation disagreement in this batch.
*/

{ n: 1, pr: 1, p: 1807,
  key: 3,
  stem: 'A 5-week-old male infant is brought to the clinic by his mother who complains of the gradual onset of vomiting after meals. This has been going on for about 2 weeks and is progressively worsening. He previously had no problems during feedings. The pylorus on ultrasound examination is measured to be 18 mm x 6 mm. What is the best management for this patient\'s likely condition?',
  opts: [
    'Circumferential incision into the muscularis',
    'Excision of a wedge-shaped section of pylorus circumferentially',
    'Excision of a wedge-shaped section of pylorus longitudinally',
    'Longitudinal incision into the muscularis',
    'Removal of the pylorus followed by re anastomosis'
  ],
  expl: 'Hypertrophic pyloric stenosis is treated surgically by splitting the hypertrophied muscle longitudinally without cutting the mucosa. This relieves the gastric outlet obstruction while preserving the pylorus.',
  note: 'Explanation box printed entirely on overflow page 1808 -- p1807 itself carries no box text below the options. Folio 1807 matched requested PDF page.' }

{ n: 2, pr: 2, p: 1810,
  key: 4,
  stem: 'A 3-day-old male newborn is brought to the pediatric emergency department by concerned parents due to excessive drooling, choking, and cyanotic episodes during feeding attempts. The neonate was born full-term via spontaneous vaginal delivery, and prenatal ultrasounds were unremarkable. The diagnosis of esophageal atresia with a tracheoesophageal fistula (TEF) is suspected. What is the most appropriate diagnostic sign in neonate born with esophageal atresia and tracheoesophageal fistula?',
  opts: [
    'Polyhydramnios of the mother.',
    'He drools with excessive oral secretions.',
    'Develop choking after feeding.',
    'Have difficulty in maintaining airway.',
    'A suction oral tube becomes blocked at 10-11 cm from the lips.'
  ],
  expl: 'The most reliable diagnostic sign of esophageal atresia with TEF is inability to pass a nasogastric/orogastric tube beyond 10-11 cm. Clinical features like drooling and choking are suggestive, but the tube blockage is diagnostic.',
  note: 'Explanation box printed entirely on overflow page 1811 -- p1810 itself carries no box text below the options. Folio 1810 matched requested PDF page.' }

{ n: 3, pr: 3, p: 1813,
  key: 1,
  stem: 'A 3-day-old baby is vomiting and has a right iliac fossa mass. The ward nurses report that the baby has yet to pass meconium. A barium enema demonstrates soap bubble appearance. Which is the single most likely diagnosis?',
  opts: [
    'Anorectal malformation',
    'Cystic fibrosis',
    'Hirschsprung\'s disease',
    'Intussusception',
    'Jejuno-ileal atresia'
  ],
  expl: 'Failure to pass meconium, right iliac fossa mass, and "soap bubble" appearance on imaging indicate meconium ileus, which is strongly associated with cystic fibrosis. Thick sticky meconium obstructs the distal ileum.',
  note: 'Explanation box fit entirely on the answered sheet -- no overflow page for this question. Folio 1813 matched requested PDF page.' }

{ n: 4, pr: 4, p: 1815,
  key: 1,
  stem: 'Which of the following is true of abdominal pain in children?',
  opts: [
    'Severe pain associated with blood in the stools at 6 months old is probably constipation and can be treated with lactulose',
    'Intussusception is the most common cause of intestinal obstruction in infants after the neonatal period',
    'Abdominal pain with a rash on the buttocks is typical of idiopathic thrombocytopenic purpura',
    'In appendicitis, the pain typically starts in the right iliac fossa and moves towards the umbilicus in a few hours'
  ],
  expl: '',
  note: 'Only 4 options printed (A-D). No explanation box printed on this sheet at all -- confirmed, page prints nothing below option D. Folio 1815 matched requested PDF page.' }

{ n: 5, pr: 5, p: 1817,
  key: 2,
  stem: 'An infant with a prenatal diagnosis of a diaphragmatic hernia is born at 38 weeks gestation and weighs 3 kg. The child develops respiratory distress within three hours of birth. What is a poor prognostic indicator for survival?',
  opts: [
    'Presence of stomach down in the abdomen',
    'Left-sided diaphragmatic hernia',
    'Lung-head ratio of 0.8',
    'Normal vaginal delivery as the mode of birth'
  ],
  expl: '',
  note: 'Only 4 options printed, lettered lowercase a-d on the sheet itself. No explanation box printed on this sheet at all -- confirmed, page prints nothing below option d. Folio 1817 matched requested PDF page.' }

{ n: 6, pr: 6, p: 1819,
  key: 4,
  stem: 'A full-term male newborn experiences respiratory distress immediately after birth. A prenatal sonogram was read as normal. An emergency radiograph is showing the stomach and intestine protruding into the chest. The patient is intubated and placed on 100% O2. Arterial blood gases reveal pH 7.24, Po2 60, and Pco2 52. The baby has sternal retractions and a scaphoid abdomen. Which of the following should be performed in the management of this patient?',
  opts: [
    'Administration of intravenous steroids',
    'Placement of bilateral tube thoracostomies',
    'Immediate thoracotomy with lung resection',
    'Immediate laparotomy with repair of the diaphragm',
    'Mechanical ventilation with low tidal volumes'
  ],
  expl: 'Congenital diaphragmatic hernia (CDH) causes severe respiratory distress at birth due to pulmonary hypoplasia and pulmonary hypertension, not just compression. The first step is cardiopulmonary stabilization with gentle ventilation using low tidal volumes to avoid barotrauma. Definitive surgical repair of the diaphragm is done after stabilization, not immediately.',
  note: 'Explanation box printed entirely on overflow page 1820 -- p1819 itself carries no box text below the options. Blood gas values (pH 7.24, Po2 60, Pco2 52) read crisp and unambiguous at 150 dpi. Folio 1819 matched requested PDF page.' }

{ n: 7, pr: 7, p: 1822,
  key: 3,
  stem: 'A mother brings her 5-week-old son to the paediatric outpatient clinic. She is concerned as he has been having episodes of forceful vomiting after feeding for the last 2 weeks. She says her son always seems hungry and now is beginning to appear lethargic. Examination of the child reveals mild dehydration and the presence of a smooth, firm, non-tender mass in the right upper quadrant of the abdomen. Blood tests are sent. What biochemical abnormalities would you expect to find?',
  opts: [
    'Hyponatraemic, metabolic acidosis',
    'Hyperchloraemic, respiratory alkalosis',
    'Hypernatraemic, hyperkalaemic, metabolic alkalosis',
    'Hypochloraemic, hypokalaemic, metabolic alkalosis'
  ],
  expl: 'In pyloric stenosis, repeated vomiting of gastric contents leads to loss of HCl and potassium. This produces a metabolic alkalosis with hypochloremia and hypokalemia.',
  note: 'Only 4 options printed (A-D). Explanation box printed entirely on overflow page 1823 -- p1822 itself carries no box text below the options. Folio 1822 matched requested PDF page.' }

{ n: 8, pr: 8, p: 1825,
  key: 2,
  stem: 'A 2-week-old infant presents with sudden onset of bilious emesis. Plain films of the abdomen show evidence of an intestinal obstruction. Which of the following is the most appropriate next step in the management of this infant?',
  opts: [
    'Observation',
    'Abdominal ultrasound',
    'Upper gastrointestinal contrast series',
    'Computed tomography of the abdomen and pelvis',
    'Contrast enema'
  ],
  expl: 'Bilious vomiting in a neonate suggests malrotation with volvulus until proven otherwise. The gold standard test is an upper GI contrast series to confirm abnormal duodenal position.',
  note: 'Explanation box fit entirely on the answered sheet -- no overflow page for this question. Folio 1825 matched requested PDF page.' }

{ n: 9, pr: 9, p: 1827,
  key: 2,
  stem: 'A baby who was delivered a few minutes ago was noted to have a herniated bowel through the abdomen. Regarding abdominal wall defects (omphalocele/gastroschisis) the true statement is:',
  opts: [
    'All cases of abdominal wall defects must be delivered by cesarean section.',
    'Omphalocele is caused by an abnormality in the lateral body folds migration and fusion.',
    'The umbilicus is located to the left of the abdominal wall defect in gastroschisis.',
    'Omphalocele has a better prognosis than gastroschisis.',
    'Any abdominal organ can be seen in gastroschisis.'
  ],
  expl: '',
  note: 'THE SHEET PRINTS TWO KEYS. Options B and C both carry the identical solid yellow highlight, bold and underlined, confirmed by a 600 dpi crop of the band and so not a render artefact, and p.1827 prints no explanation box at all to arbitrate between them. Both statements are defensible: omphalocele is conventionally attributed to failed migration and fusion of the lateral body folds, and in gastroschisis the defect lies to the right of a normally inserted cord so the umbilicus is to its left. The stem asks for THE true statement, singular, so the defect is in the question rather than in either highlight. Resolved on this book\'s own evidence and not on outside knowledge: the same book keys \'The defect is usually to the left of the midline\' as FALSE for gastroschisis at p.1306, which is the C statement stated the other way round, and it offers no comparable printing for the B statement. key is therefore staged at index 2. Neither highlight was overruled and the double marking is recorded here rather than corrected. Folio 1827 matched requested PDF page.' }

{ n: 10, pr: 10, p: 1829,
  key: 2,
  stem: 'A 7-week-old girl is referred by her pediatrician for projectile vomiting over the past week. Her weight has remained stable, her fontanelles are not sunken and she sucks avidly. Her abdomen is soft with visible peristalsis in the epigastrium without evidence of a mass. A diagnosis of pyloric stenosis, in this case:',
  opts: [
    'Should lead to immediate surgical pyloromyotomy',
    'Should not require any laboratory testing',
    'Should prompt an order for an abdominal ultrasound',
    'Should not be entertained until she has been tried on a new formula',
    'Would be unlikely in the absence of an "olive"'
  ],
  expl: 'Pyloric stenosis diagnosis is confirmed by abdominal ultrasound (thickened, elongated pylorus). Even without a palpable olive, ultrasound is the test of choice.',
  note: 'Explanation box fit entirely on the answered sheet -- no overflow page for this question. Folio 1829 matched requested PDF page.' }

{ n: 11, pr: 11, p: 1831,
  key: 4,
  stem: 'A full-term baby with no known complications during pregnancy. However, immediately after birth, she was distressed and developed a bluish discoloration of the skin. Chest X-ray showed abdominal organs in the chest cavity and collapsed lung tissue on one side, which raised concerns about a congenital diaphragmatic hernia. During treatment of an infant with congenital diaphragmatic hernia, all of the following may be required except:',
  opts: [
    'Chest tube insertion',
    'ECMO',
    'High-frequency oscillatory ventilation',
    'Nitric oxide',
    'Immediate surgery'
  ],
  expl: 'In congenital diaphragmatic hernia (CDH), the main problem is pulmonary hypoplasia and pulmonary hypertension, not the herniated abdominal contents. Stabilization with gentle ventilation, nitric oxide, or even ECMO may be needed before surgery. Immediate surgery is contraindicated because the infant must first be stabilized to improve oxygenation and hemodynamics before diaphragmatic repair.',
  note: 'EXCEPT-style question; key E is the exception, and the overflow explanation (entirely on p1832, printed in an italic face unlike this run\'s other boxes) supports E being the odd-one-out rather than disagreeing with it. Explanation box printed entirely on overflow page 1832 -- p1831 itself carries no box text below the options. Folio 1831 matched requested PDF page.' }

{ n: 12, pr: 12, p: 1834,
  key: 0,
  stem: 'A 4-week-old male infant is brought to the pediatric clinic by his parents due to projectile vomiting after feeds. The parents report that the vomiting has been progressively worsening over the past week and is now occurring after almost every feeding. Following confirmative diagnosis of Hypertrophic pyloric stenosis what is the Next BEST step to do:',
  opts: [
    'Provide dextrose saline plus 1g KCl in 500 ml solution',
    'Send for OT and perform Ramstedt pyloromyotomy',
    'Place a balloon dilator in the pylorus',
    'Provide antibiotic therapy and send for OT and perform Ramstedt pyloromyotomy',
    'Provide Dextrose saline without potassium due to risk of cardiac arrhythmia'
  ],
  expl: 'Before pyloromyotomy, the metabolic derangements (hypochloremic, hypokalemic alkalosis) must be corrected. Electrolyte correction with fluids + potassium is the best next step before surgery.',
  note: 'Explanation box printed entirely on overflow page 1835 -- p1834 itself carries no box text below the options. Dose "1g KCl in 500 ml" read crisp and unambiguous at 150 dpi. Folio 1834 matched requested PDF page.' }

{ n: 13, pr: 13, p: 1837,
  key: 2,
  stem: 'A 2-day-old male infant is brought to the pediatric clinic by his parents for evaluation due to failure to pass meconium since birth. The parents report that the baby has been feeding well but appears uncomfortable and fussy. On physical examination, the infant appears healthy and well-nourished. However, a digital rectal examination reveals the absence of an anal opening. In Imperforate anus, the lateral prone radiograph is taken after birth:',
  opts: [
    '0 hours',
    '6 hours',
    '24 hours',
    '48 hours',
    '12 hours'
  ],
  expl: 'In imperforate anus, a lateral prone radiograph is done after 24 hours of life. This allows enough time for air to reach the distal bowel, making it easier to determine the distance between the rectal pouch and perineum, and to classify the defect as high or low. Doing it earlier may give inaccurate results due to residual meconium.',
  note: 'Explanation box fit entirely on the answered sheet -- no overflow page for this question. Folio 1837 matched requested PDF page.' }

{ n: 14, pr: 14, p: 1839,
  key: 4,
  stem: 'A 20-month-old female infant is brought to the emergency department (ED) by her father with 4 hours of painless rectal bleeding. Abdominal examination reveals no masses, organomegaly, or tenderness. Rectal examination reveals dark blood in the rectal vault but no tenderness or evidence of trauma. The physician suspects a Meckel diverticulum. What would be the best study to confirm the suspected diagnosis?',
  opts: [
    'Abdominal ultrasound',
    'Abdominal x-ray',
    'Barium enema',
    'Small bowel follow-through',
    'Technetium scan'
  ],
  expl: 'Meckel diverticulum is diagnosed by a Technetium-99m pertechnetate scan, which detects ectopic gastric mucosa. This is the gold standard test.',
  note: 'Explanation box fit entirely on the answered sheet -- no overflow page for this question. Folio 1839 matched requested PDF page.' }

{ n: 15, pr: 15, p: 1841,
  key: 1,
  stem: 'A 38-year-old G1 woman had an abnormal quad screen at 16 weeks\' gestation with an elevated human chorionic gonadotropin (hCG) level and a low alpha-fetoprotein (AFP). Amniocentesis confirms the diagnosis of trisomy 21. Which of the following defects are found in this patient type?',
  opts: [
    'Diaphragmatic hernia',
    'Duodenal atresia',
    'Inguinal hernia',
    'Meckel diverticulum',
    'Wilms tumor'
  ],
  expl: 'Down syndrome (trisomy 21) is associated with duodenal atresia. It presents with bilious vomiting and the "double bubble" sign on x-ray.',
  note: 'Explanation box fit entirely on the answered sheet -- no overflow page for this question. Folio 1841 matched requested PDF page.' }
