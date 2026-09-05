/* ===========================================================================
   ENDPOINT - Pediatrics endpoint part1.pdf - MODEL TRAINING EXAM 1
   Verbatim staging record. PDF pages 1805-1873; PDF page = printed page, offset zero.
   Merged from endpoint-s14-tre1.part-A.js + endpoint-s14-tre1.part-B.js by merge-parts-ep.js.
   
   Every question is printed TWICE: an unanswered page, then the ANSWERED page with the key
   highlighted in yellow and (usually) a bordered explanation box. Only answered pages are
   staged. `n` is the true sequential index, `pr` what the page prints, `p` the PDF page,
   `key` a ZERO-BASED INDEX into `opts` (never a letter), matching the app field `answer`,
   `expl` the printed box verbatim or "".
   =========================================================================== */
var PEDEP_S14_STAGED = [

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
  note: 'Explanation box printed entirely on overflow page 1808 -- p1807 itself carries no box text below the options. Folio 1807 matched requested PDF page.' },

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
  note: 'Explanation box printed entirely on overflow page 1811 -- p1810 itself carries no box text below the options. Folio 1810 matched requested PDF page.' },

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
  note: 'Explanation box fit entirely on the answered sheet -- no overflow page for this question. Folio 1813 matched requested PDF page.' },

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
  note: 'Only 4 options printed (A-D). No explanation box printed on this sheet at all -- confirmed, page prints nothing below option D. Folio 1815 matched requested PDF page.' },

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
  note: 'Only 4 options printed, lettered lowercase a-d on the sheet itself. No explanation box printed on this sheet at all -- confirmed, page prints nothing below option d. Folio 1817 matched requested PDF page.' },

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
  note: 'Explanation box printed entirely on overflow page 1820 -- p1819 itself carries no box text below the options. Blood gas values (pH 7.24, Po2 60, Pco2 52) read crisp and unambiguous at 150 dpi. Folio 1819 matched requested PDF page.' },

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
  note: 'Only 4 options printed (A-D). Explanation box printed entirely on overflow page 1823 -- p1822 itself carries no box text below the options. Folio 1822 matched requested PDF page.' },

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
  note: 'Explanation box fit entirely on the answered sheet -- no overflow page for this question. Folio 1825 matched requested PDF page.' },

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
  note: 'THE SHEET PRINTS TWO KEYS. Options B and C both carry the identical solid yellow highlight, bold and underlined, confirmed by a 600 dpi crop of the band and so not a render artefact, and p.1827 prints no explanation box at all to arbitrate between them. Both statements are defensible: omphalocele is conventionally attributed to failed migration and fusion of the lateral body folds, and in gastroschisis the defect lies to the right of a normally inserted cord so the umbilicus is to its left. The stem asks for THE true statement, singular, so the defect is in the question rather than in either highlight. Resolved on this book\'s own evidence and not on outside knowledge: the same book keys \'The defect is usually to the left of the midline\' as FALSE for gastroschisis at p.1306, which is the C statement stated the other way round, and it offers no comparable printing for the B statement. key is therefore staged at index 2. Neither highlight was overruled and the double marking is recorded here rather than corrected. Folio 1827 matched requested PDF page.' },

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
  note: 'Explanation box fit entirely on the answered sheet -- no overflow page for this question. Folio 1829 matched requested PDF page.' },

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
  note: 'EXCEPT-style question; key E is the exception, and the overflow explanation (entirely on p1832, printed in an italic face unlike this run\'s other boxes) supports E being the odd-one-out rather than disagreeing with it. Explanation box printed entirely on overflow page 1832 -- p1831 itself carries no box text below the options. Folio 1831 matched requested PDF page.' },

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
  note: 'Explanation box printed entirely on overflow page 1835 -- p1834 itself carries no box text below the options. Dose "1g KCl in 500 ml" read crisp and unambiguous at 150 dpi. Folio 1834 matched requested PDF page.' },

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
  note: 'Explanation box fit entirely on the answered sheet -- no overflow page for this question. Folio 1837 matched requested PDF page.' },

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
  note: 'Explanation box fit entirely on the answered sheet -- no overflow page for this question. Folio 1839 matched requested PDF page.' },

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
  note: 'Explanation box fit entirely on the answered sheet -- no overflow page for this question. Folio 1841 matched requested PDF page.' },

/* endpoint-s14-tre1.part-B.js
   Source: Semester 8\Pedo\Questions\Pediatrics endpoint part1.pdf
   Scope: MODEL TRAINING EXAM 1, half B, questions n16..n30.
   Page list given by the brief (measured from an OCR sheet index, not printed numbering):
   16:1843 17:1845 18:1847 19:1849 20:1851 21:1853(+1854) 22:1856(+1857)
   23:1859 24:1861 25:1863 26:1865 27:1867 28:1869 29:1871 30:1873.
   Boundary check: p.1875 also rendered.

   MEASURED, not assumed:
   - Printed numbering ran 16..30 with NO skip and NO repeat. Every page's printed number
     agreed with n on every one of the 15 pages (read the "NN." at the top of each sheet).
   - Red folio matched the PDF page number on every rendered page, including both overflow
     pages (1854, 1857) and the boundary page (1875).
   - Option-count split: all 15 sheets printed FIVE options (A-E). Zero sheets printed four.
   - Pages that printed NO explanation box on the answered sheet itself: p.1853 (n21) and
     p.1856 (n22) - both are the two designed overflow cases named in the brief.
   - Overflow pages, what they actually were:
     - p.1854 (n21 overflow): pure explanation prose only - no stem, no options, no printed
       question number. Confirms the brief's expected shape.
     - p.1857 (n22 overflow): pure explanation prose (bulleted, contrasting Wilms/constipation/
       lymphoma/hepatoblastoma) only - no stem, no options, no printed question number. Same
       shape as p.1854.
   - p.1875: this is the FIRST page of the NEXT exam - a blank (unanswered) question sheet,
     printed number "1.", lowercase a-d option ladder (Rubella/Roseola/Erythema infectiosum/
     Erythema multiforme - only 4 lettered options shown, and no yellow highlight, no
     explanation box). Confirms p.1873 (n30) is the last question of MODEL TRAINING EXAM 1
     and the boundary is where the brief expected it.
   - 600 dpi crops taken: NONE. Every numeral, unit, dose and age on all 15 sheets (ages,
     "48 hours", "36.8°C", "8-cm", "5 years", "4-year-old", etc.) was unambiguous at 150 dpi.
   - Contradictions recorded: NONE. Every key matched its explanation box (or, for n21/n22,
     its overflow-page explanation) with no internal disagreement.
   - No sheet highlighted more than one option on any of the 15 pages.
   - No figures on any of these 15 pages.
*/

{ n: 16, pr: 16, p: 1843,
  key: 2,
  stem: 'A 2-day-old female newborn presents with excessive drooling, cyanosis during feeding attempts, and the inability to pass an orogastric tube beyond a certain point. The diagnosis of pure esophageal atresia (Type A) is suspected. Which of the following is NOT true in type A (pure EA)?',
  opts: [
    'There is no TEF',
    'Usually the gap between the proximal and distal esophagus is long',
    'Plain abdominal x-ray shows normal gas distribution in abdomen',
    'The initial treatment is gastrostomy',
    'Gastric pull up or colonic interposition is the treatment of choice'
  ],
  expl: 'In pure esophageal atresia (type A), there is no TEF, so no gas enters the stomach. Thus, the abdomen shows absence of gas, not normal distribution.',
  note: 'Answered sheet, box present on same page.' },

{ n: 17, pr: 17, p: 1845,
  key: 2,
  stem: 'A 3-day-old boy is having increasing abdominal distension and vomiting. He is also noted not to have passed meconium since birth. Hirschsprung disease is suspected. Which of the following investigations would be most helpful in confirming the cause of obstruction?',
  opts: [
    'Abdominal X-ray',
    'Barium enema',
    'Rectal biopsy',
    'Rectal examination',
    'Ultrasound scan'
  ],
  expl: 'The gold standard for Hirschsprung disease is rectal biopsy, which shows absence of ganglion cells. Imaging may help, but biopsy is confirmatory.',
  note: 'Answered sheet, box present on same page.' },

{ n: 18, pr: 18, p: 1847,
  key: 0,
  stem: 'A 3-month-old female infant is brought to the pediatric clinic due to persistent jaundice, pale stools, and an abdominal mass. Physical examination reveals hepatomegaly. Laboratory tests show elevated liver enzymes and direct bilirubin. What is the most accurate imaging study in the diagnosis and classification of choledochal cyst?',
  opts: [
    'MRCP',
    'Intraoperative cholangiography',
    'Ultrasonography',
    'Doppler study',
    'ERCP'
  ],
  expl: 'Magnetic resonance cholangiopancreatography (MRCP) is the most accurate non-invasive imaging for choledochal cyst diagnosis and classification. Ultrasound can suggest it, but MRCP gives full anatomic detail.',
  note: 'Answered sheet, box present on same page.' },

{ n: 19, pr: 19, p: 1849,
  key: 0,
  stem: 'Meckel\'s diverticulum most commonly presents as:',
  opts: [
    'gastrointestinal bleeding',
    'intestinal obstruction',
    'diverticulitis',
    'intermittent abdominal pain',
    'acute peritonitis'
  ],
  expl: 'Meckel\'s diverticulum most commonly presents with painless lower GI bleeding due to ectopic gastric mucosa secreting acid. Obstruction and pain are less common.',
  note: 'Answered sheet, box present on same page. Options printed in lowercase (cosmetic, transcribed as printed).' },

{ n: 20, pr: 20, p: 1851,
  key: 0,
  stem: 'A 6-month-old boy is brought to the pediatrician by his parents. During the examination, the pediatrician notes a small, reducible bulge in the right inguinal region that becomes more apparent when the baby cries. The infant is in good health overall. The pediatrician confirms the diagnosis of an inguinal hernia. Inguinal hernia in pediatric age group is usually treated by:',
  opts: [
    'Herniotomy',
    'Hernioplasty',
    'Herniorrhaphy',
    'Medical treatment',
    'Reassurance and Follow up only'
  ],
  expl: 'In children, inguinal hernia is treated by herniotomy (removal of the sac only), not mesh repair. Hernioplasty is for adults.',
  note: 'Answered sheet, box present on same page.' },

{ n: 21, pr: 21, p: 1853,
  key: 0,
  stem: 'A child\'s parents brought her to the emergency department due to her recurrent and severe abdominal pain, which had started a day ago. They noted that she had been inconsolable and had vomited several times. Additionally, they had observed bloody stools in her diaper. Abdominal Ultrasound revealed the classic "target sign" or "doughnut sign" appearance, which is typical of intussusception. Contraindications to attempted reduction of an intussusception via air/barium enema in a child include which of the following?',
  opts: [
    'Pneumoperitoneum',
    'Initial evaluation after 48 hours of symptoms',
    'Recurrence after hydrostatic reduction',
    'Age older than 5 years',
    'Recurrent symptoms in the immediate postoperative period'
  ],
  expl: 'Air/barium enema reduction is contraindicated if there is intestinal perforation (pneumoperitoneum). Other factors like recurrence or delayed presentation are not absolute contraindications.',
  note: 'The answered sheet (p.1853) printed NO explanation box at all - the whole explanation is on the overflow page p.1854, which prints pure prose with no stem, no options and no question number. Staged as one continuous text per the brief.' },

{ n: 22, pr: 22, p: 1856,
  key: 2,
  stem: 'A 4-year-old girl is referred to your office by the pediatrician for the finding of an abdominal mass on her 4-year-old well child visit. She had been consistently in the seventy-fifth percentile for height and weight and although she is still in the seventy-fifth percentile for height she is only in the fortieth percentile for weight. She has been eating normally and having normal daily BMs. On examination you palpate an 8-cm right mid abdominal mass. It is firm, nontender, and poorly mobile. The most likely diagnosis is:',
  opts: [
    'Constipation with a distended cecum',
    'Wilms\' tumor',
    'Neuroblastoma',
    'Lymphoma',
    'Hepatoblastoma'
  ],
  expl: 'A firm, poorly mobile, nontender abdominal mass in a 4-year-old is most likely neuroblastoma, the most common extracranial solid tumor of childhood. It typically arises from the adrenal gland or sympathetic chain and can cross the midline. Wilms\' tumor usually presents as a smooth, unilateral renal mass that does not cross the midline. Constipation is unlikely since bowel movements are normal. Lymphoma is more common in older children. Hepatoblastoma is rare and usually associated with elevated AFP.',
  note: 'The answered sheet (p.1856) printed NO explanation box at all - the whole explanation is on the overflow page p.1857, which prints pure bulleted prose with no stem, no options and no question number. Staged as one continuous text per the brief.' },

{ n: 23, pr: 23, p: 1859,
  key: 2,
  stem: 'A 1-day-old male newborn is admitted to the pediatric unit due to abdominal distension and failure to pass meconium since birth. The infant was born at term via cesarean section, and the pregnancy was unremarkable. The parents report that the baby has been feeding poorly and seems irritable. Ground glass or soap bubble appearance in right lower quadrant showed in abdominal X-ray. The most likely diagnosis is:',
  opts: [
    'Hirschsprung\'s disease',
    'Imperforate anus',
    'Meconium ileus',
    'Intestinal atresia',
    'Malrotation'
  ],
  expl: 'Failure to pass meconium, abdominal distension, and "ground glass/soap bubble" appearance in the right lower abdomen are classic for meconium ileus. Strongly associated with cystic fibrosis.',
  note: 'Answered sheet, box present on same page.' },

{ n: 24, pr: 24, p: 1861,
  key: 0,
  stem: 'A 6-month-old boy is brought into the emergency department by his parents. He appears to have been having paroxysms of intense pain since that morning, described by his parents as episodes of crying and drawing of his legs up to the abdomen. This evening he has passed some mucus-like blood from the back passage. His temperature is 36.8°C. Which of the following would be the best treatment option in the first instance?',
  opts: [
    'Barium enema',
    'Continued observation',
    'Intravenous antibiotics',
    'Laparotomy',
    'Scrotal exploration'
  ],
  expl: 'First-line treatment for intussusception in a stable child is hydrostatic or pneumatic reduction via barium/air enema. Surgery is reserved if enema fails or contraindicated.',
  note: 'Answered sheet, box present on same page. Temperature 36.8°C read clearly at 150 dpi, no crop needed.' },

{ n: 25, pr: 25, p: 1863,
  key: 4,
  stem: 'Which is not a long-term complication of a 1-year-old baby boy having undergone corrective hepatoportoenterostomy (Kasai procedure) for biliary atresia?',
  opts: [
    'Recurrent episodes of cholangitis',
    'Hepatic cirrhosis and portal hypertension',
    'Upper GI bleeding episodes from esophageal varices',
    'Need for hepatic transplantation after initial Kasai procedure has failed',
    'Anastomotic leakage of portoenterostomy'
  ],
  expl: 'Kasai procedure complications include recurrent cholangitis, cirrhosis, portal hypertension, and need for transplant. Anastomotic leakage is not a long-term complication, but rather an early surgical complication.',
  note: 'Answered sheet, box present on same page.' },

{ n: 26, pr: 26, p: 1865,
  key: 2,
  stem: 'A 3-day-old male newborn is brought to the pediatric clinic by concerned parents because his big brother has Hirschsprung disease. The infant was born full-term via a normal vaginal delivery. In Hirschsprung\'s disease the most common clinical presentation is:',
  opts: [
    'Flat abdomen',
    'Non bilious vomiting',
    'Delay passage of meconium',
    'Bleeding per rectum',
    'Frequent bowel motion'
  ],
  expl: 'The most common presentation of Hirschsprung disease is delayed passage of meconium (>48 hours after birth). Vomiting and distension often follow.',
  note: 'Answered sheet, box present on same page. ">48 hours" read clearly at 150 dpi, no crop needed.' },

{ n: 27, pr: 27, p: 1867,
  key: 1,
  stem: 'A newborn presents with signs and symptoms of distal intestinal obstruction. Abdominal x-rays reveal dilated loops of small bowel, absence of air-fluid levels, and a mass of meconium within the right side of the abdomen mixed with gas to give a ground-glass appearance. Which of the following should be performed as the initial management of the patient?',
  opts: [
    'Administration of oral polyethylene glycol',
    'Performance of a contrast enema',
    'Surgical disimpaction',
    'Diverting ileostomy',
    'Resection of the dilated terminal ileum'
  ],
  expl: 'Initial management of meconium ileus is a contrast enema, which is both diagnostic and therapeutic. Surgery is only for complicated or failed cases.',
  note: 'Answered sheet, box present on same page.' },

{ n: 28, pr: 28, p: 1869,
  key: 1,
  stem: 'A newborn baby boy is found to have a visible intestine emerging from his abdomen. There is no covering to the contents. Which of the following is the most likely diagnosis?',
  opts: [
    'Epigastric hernia',
    'Gastroschisis',
    'Exomphalos',
    'Paraumbilical hernia',
    'Umbilical hernia'
  ],
  expl: 'An abdominal wall defect with exposed bowel and no covering sac is gastroschisis. Omphalocele is midline and covered by peritoneum and amnion.',
  note: 'Answered sheet, box present on same page.' },

{ n: 29, pr: 29, p: 1871,
  key: 4,
  stem: 'A previously healthy 2-month-old breastfed white male infant is brought to the clinic by his mother who is concerned that her baby\'s skin is turning yellow. On physical examination, the child indeed appears jaundiced although his skin tone was normal 1 month ago, hepatomegaly was also noted. Blood work reveals a conjugated hyperbilirubinemia. Which of the following would be the best next step in the care of this patient?',
  opts: [
    'Abdominal x-ray',
    'Blood smear',
    'Discontinue breastfeeding and start formula feeding',
    'Encourage more frequent and longer feedings',
    'Ultrasonography of the abdomen'
  ],
  expl: 'Conjugated hyperbilirubinemia and hepatomegaly suggest biliary atresia or obstruction. Ultrasound is the best first test to evaluate the biliary tree.',
  note: 'Answered sheet, box present on same page.' },

{ n: 30, pr: 30, p: 1873,
  key: 2,
  stem: 'A newborn infant born with polyhydramnios presents with excessive salivation along with coughing and choking with the first oral feeding. An x-ray of the abdomen shows gas in stomach and a nasogastric tube coiled in the esophagus. Which of the following is the most likely diagnosis?',
  opts: [
    'Esophageal atresia',
    'Tracheoesophageal fistula',
    'Esophageal atresia and tracheoesophageal fistula (TEF)',
    'Omphalocele',
    'Gastroschisis'
  ],
  expl: 'A coiled NG tube with gas in stomach indicates EA with distal TEF (most common type). If there were pure EA, there would be no gas in stomach.',
  note: 'Answered sheet, box present on same page. Last question of this exam - p.1875 confirmed as the next exam\'s Q1 (blank sheet, lowercase a-d ladder, no highlight, no box).' }

];
