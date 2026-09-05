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
  note: 'Answered sheet, box present on same page.' }

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
  note: 'Answered sheet, box present on same page.' }

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
  note: 'Answered sheet, box present on same page.' }

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
  note: 'Answered sheet, box present on same page. Options printed in lowercase (cosmetic, transcribed as printed).' }

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
  note: 'Answered sheet, box present on same page.' }

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
  note: 'The answered sheet (p.1853) printed NO explanation box at all - the whole explanation is on the overflow page p.1854, which prints pure prose with no stem, no options and no question number. Staged as one continuous text per the brief.' }

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
  note: 'The answered sheet (p.1856) printed NO explanation box at all - the whole explanation is on the overflow page p.1857, which prints pure bulleted prose with no stem, no options and no question number. Staged as one continuous text per the brief.' }

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
  note: 'Answered sheet, box present on same page.' }

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
  note: 'Answered sheet, box present on same page. Temperature 36.8°C read clearly at 150 dpi, no crop needed.' }

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
  note: 'Answered sheet, box present on same page.' }

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
  note: 'Answered sheet, box present on same page. ">48 hours" read clearly at 150 dpi, no crop needed.' }

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
  note: 'Answered sheet, box present on same page.' }

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
  note: 'Answered sheet, box present on same page.' }

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
  note: 'Answered sheet, box present on same page.' }

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
