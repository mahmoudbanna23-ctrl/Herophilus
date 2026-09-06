/* ===========================================================================
   ENDPOINT - Pediatrics endpoint part2.pdf - MODEL FINAL EXAM 4
   Verbatim staging record. PDF pages 1757-1921; PDF page = printed page, offset zero.
   Merged from endpoint-p2-s15-mfe4.part-A.js + endpoint-p2-s15-mfe4.part-B.js + endpoint-p2-s15-mfe4.part-C.js + endpoint-p2-s15-mfe4.part-D.js by merge-parts-ep2.js.
   
   Every question is printed TWICE: an unanswered page, then the ANSWERED page with the key
   highlighted in yellow and (usually) a bordered explanation box. Only answered pages are
   staged. `n` is the true sequential index, `pr` what the page prints, `p` the PDF page,
   `key` a ZERO-BASED INDEX into `opts` (never a letter), matching the app field `answer`,
   `expl` the printed box verbatim or "".
   =========================================================================== */
var PEDEP2_S15_STAGED = [

/* peds endpoint part 2, section 15 "Model Final Exam 4", pp.1757-1921, QUARTER A (n1-n20).
   Source: Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf. Never modified/rendered here --
   page images read from the pre-extracted cache:
   C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\
   0ffb5f86-a1df-4f33-a8c4-fc32a73946ba\scratchpad\ep2-index\native\pNNNN.jpeg (800x450 ceiling).
   OCR index (content\peds\qb-pages\ocr\ep2\) NOT opened -- this is a staging pass, OCR is a
   search index only, never a source.

   Section 15 does NOT obey a page formula; explicit page list from the task prompt used verbatim,
   never computed:
     n1=1759  n2=1761  n3=1763  n4=1765  n5=1767  n6=1769  n7=1771  n8=1773  n9=1775  n10=1777
     n11=1779 n12=1781 n13=1783 n14=1785 n15=1787 n16=1789 n17=1792 n18=1794 n19=1796 n20=1798
   n16 overflow box printed alone on p.1790 (n16's own page is p.1789) -- entry n16 carries
   box:1790, confirmed by eye per task prompt AND independently re-read here.

   key is a 0-based index into opts (A=0, B=1, C=2, D=3, E=4...). p is the ANSWERED page (the one
   staged from). Walk of printed numbers (pr) recorded entry by entry below as staged.

   Question-number walk (pr vs n), page by page -- filled in as staged:
     n1  pr=1  p=1759
*/

{ n:1, pr:1, p:1759, key:3,
  stem:'A 9-year-old boy is "blue-lighted" into the emergency department by ambulance with an acute history of reduced consciousness. His mother described him complaining of headache and fever earlier in the day. On examination, he is pyrexial with a GCS of 14/15 and is cardiovascularly stable. A few petechiae are noted on his legs. What is the single most effective immediate management for this child?',
  opts:['Arrange an urgent CT brain scan','Give a 20 mL/kg normal saline fluid bolus','Give a 3 mL/kg 10% dextrose fluid bolus','Gain intravenous access, take blood cultures, and administer broad-spectrum antibiotics','Administer vitamin K'],
  expl:'This child likely has meningococcal sepsis/meningitis. Immediate antibiotics are lifesaving; investigations like CT or fluids should not delay treatment.',
  note:'Read directly off p.1759 native JPEG, fully legible, no crop or twin needed. Key D (index 3) highlighted yellow with bold/underline. No figure.' },

{ n:2, pr:2, p:1761, key:1,
  stem:'A paediatrician is called to urgently review a 3-day-old baby on the postnatal ward. On arrival, the baby is profoundly cyanotic, and saturations do not improve with high-flow oxygen therapy. Examination reveals a single loud second heart sound but no murmur. Intravenous access is secured, and the blood gas shows severe metabolic acidosis. A chest X-ray shows increased pulmonary vasculature. What is the most likely diagnosis?',
  opts:['Atrial septal defect','Transposition of the great arteries','Patent ductus arteriosus','Tetralogy of Fallot','Ventricular septal defect'],
  expl:'Profound cyanosis unresponsive to oxygen with a single S2 and increased pulmonary blood flow is classic for TGA. Immediate recognition is essential for prostaglandin therapy.',
  note:'Read directly off p.1761 native JPEG, fully legible. Key B (index 1) highlighted yellow bold/underline. No figure.' },

{ n:3, pr:3, p:1763, key:3,
  stem:'A 4-year-old girl has been admitted with an acute febrile illness. A diagnosis of a lower respiratory tract infection has been made, and intravenous antibiotics started. The next morning, an ejection systolic murmur is noted. Heart sounds are normal, no pulmonary edema is present, and she appears well. What is the single most appropriate management plan?',
  opts:['Proceed to urgently arrange a CXR','Discuss with the local paediatric cardiology center for advice','Once medically fit for discharge, arrange an out-patient ECHO','Explain that this is an innocent murmur and inform the GP to re-evaluate after recovery','Change the present antibiotic'],
  expl:'In a clinically well child, an isolated ejection systolic murmur is usually innocent and does not require urgent investigations.',
  note:'Read directly off p.1763 native JPEG, fully legible. Key D (index 3) highlighted yellow bold/underline. No figure.' },

{ n:4, pr:4, p:1765, key:2,
  stem:"A 2-year-old boy presents with acute cough and stridor following 2 days of coryzal symptoms. He is afebrile but has marked intercostal recession, and a 'barking cough' is heard. What is the most likely causative organism?",
  opts:['Adenovirus','Respiratory syncytial virus','Parainfluenza virus','Rhinovirus','Influenza virus'],
  expl:'Croup presents with inspiratory stridor and a barking cough, most commonly caused by parainfluenza virus.',
  note:'Read directly off p.1765 native JPEG, fully legible. Key C (index 2) highlighted yellow bold/underline. No figure.' },

{ n:5, pr:5, p:1767, key:2,
  stem:'A newborn baby is noted to have coarse facies, a large fontanelle, hypotonia, and jaundice. Blood glucose is normal. Which investigation would most likely reveal the diagnosis?',
  opts:['Growth hormone','Karyotype','Thyroid function tests','Blood group','CK'],
  expl:'These features suggest congenital hypothyroidism; a TSH and T4 measurement confirms the diagnosis early for treatment.',
  note:'Read directly off p.1767 native JPEG, fully legible. Key C (index 2) highlighted yellow bold/underline. No figure.' },

{ n:6, pr:6, p:1769, key:3,
  stem:'A 7-day-old male baby presents with poor feeding and vomiting. He is lethargic and moderately dehydrated. Weight dropped from 3200 g to 2750 g. Blood glucose is 2.0 mmol/L, sodium is 124 mmol/L, potassium is 6.8 mmol/L. What test most likely confirms the diagnosis?',
  opts:['Abdominal ultrasound scan','ACTH level','Karyotype','17-Hydroxyprogesterone level','Chloride level'],
  expl:'This is classic salt-wasting congenital adrenal hyperplasia, confirmed by elevated 17-OHP.',
  note:'Read directly off p.1769 native JPEG, fully legible. All numerals (3200 g, 2750 g, 2.0 mmol/L, 124 mmol/L, 6.8 mmol/L) clearly legible, no crop needed, no exponents present. Key D (index 3) highlighted yellow bold/underline. No figure.' },

{ n:7, pr:7, p:1771, key:0,
  stem:'A paediatrician reviews a 2-day-old baby with a heart murmur. The baby is hypotonic, has single palmar creases, and epicanthic folds. What is the most likely heart lesion?',
  opts:['Atrioventricular septal defect','Atrial septal defect','Aortic stenosis','Coarctation of the aorta','Patent ductus arteriosus'],
  expl:'AVSD is common in Down syndrome (features: hypotonia, epicanthic folds, single palmar crease) and causes a murmur in neonates.',
  note:'Read directly off p.1771 native JPEG, fully legible. Key A (index 0) highlighted yellow bold/underline. No figure.' },

{ n:8, pr:8, p:1773, key:4,
  stem:'A 3-day-old baby is deeply cyanotic with cool peripheries and unresponsive saturations despite maximum oxygen. Femoral pulses are palpable, and a single loud second heart sound is heard. What is the next most important intervention?',
  opts:['Intravenous furosemide','Intravenous antibiotics','Intravenous fluid bolus of normal saline','Intravenous fluid bolus of dextrose','Intravenous infusion of prostaglandin E1'],
  expl:'This suggests a duct-dependent lesion; prostaglandin keeps the ductus arteriosus open to maintain systemic blood flow.',
  note:'Read directly off p.1773 native JPEG, fully legible. Key E (index 4) highlighted yellow bold/underline. No figure.' },

{ n:9, pr:9, p:1775, key:1,
  stem:"At a routine consultation, a 12-month-old boy is cruising around furniture and saying 'mama' and 'papa'. He only uses his left hand. What is the most likely finding?",
  opts:['Gross motor delay','Fine motor delay','Speech and language delay','Play and social delay','Global delay'],
  expl:'Using one hand preferentially may indicate delayed development of fine motor skills rather than gross motor or speech delays.',
  note:'Read directly off p.1775 native JPEG, fully legible. Key B (index 1) highlighted yellow bold/underline. No figure.' },

{ n:10, pr:10, p:1777, key:3,
  stem:'A 3-year-old boy is referred due to developmental concerns. He walks up/down stairs and jumps with both feet. He has poor eye contact, limited speech, and repetitive behaviors (e.g., opening and closing drawers). What is the most likely delay?',
  opts:['Gross motor delay','Fine motor delay','Speech and language delay','Play and social delay','Global delay'],
  expl:'Normal gross motor skills with impaired social interaction and repetitive behaviors suggest social/communication developmental delay, commonly seen in autism spectrum disorder.',
  note:'Read directly off p.1777 native JPEG, fully legible. Key D (index 3) highlighted yellow bold/underline. No figure.' },

{ n:11, pr:11, p:1779, key:1,
  stem:'A 14-year-old boy is admitted with diabetic ketoacidosis. After 12 hours of IV insulin and 0.9% saline, blood glucose is 22 mmol/L. He has good urine output. Which serum value is most likely decreased?',
  opts:['Serum sodium','Serum potassium','Serum lactate','Serum chloride','Serum calcium'],
  expl:'Hyperglycemia causes osmotic water shift, diluting serum sodium; insulin therapy can worsen hyponatremia temporarily.',
  note:"Read directly off p.1779 native JPEG, fully legible. Numerals (0.9% saline, 22 mmol/L, 12 hours) all clear, no crop needed. Key B 'Serum potassium' (index 1) highlighted yellow bold/underline. Flagging: the printed explanation box discusses sodium dilution, not potassium -- the box's own reasoning does not match the highlighted key. Stage the key as printed per brief §10; not disputed here. No figure." },

{ n:12, pr:12, p:1781, key:2,
  stem:"A 5-week-old boy presents with projectile vomiting for 48 hours. He is hungry after vomiting and hasn't opened bowels in 3 days. A mass is felt in the left upper quadrant. Blood gas: pH 7.50, pCO2 5.5 kPa, HCO3 30 mmol/L. What does this blood gas indicate?",
  opts:['Normal findings','Metabolic acidosis','Metabolic alkalosis','Respiratory acidosis','Respiratory alkalosis'],
  expl:'Vomiting causes loss of gastric acid, leading to raised pH and bicarbonate (metabolic alkalosis).',
  note:'Read directly off p.1781 native JPEG, fully legible. Numerals (pH 7.50, pCO2 5.5 kPa, HCO3 30 mmol/L, 48 hours, 3 days) all clear, no crop needed, no exponents on the page. Key C (index 2) highlighted yellow bold/underline. No figure.' },

{ n:13, pr:13, p:1783, key:2,
  stem:'A 3-year-old girl with complex congenital heart disease is admitted with fever. On examination, her temperature is 39.5°C, and there is a loud ejection systolic murmur. Her CRP is 250 mg/L, and a transthoracic echocardiogram confirms vegetations. What is the most likely causative pathogen?',
  opts:['Streptococcus pneumoniae','Streptococcus pyogenes','Streptococcus viridans','Group A haemolytic streptococcus','Group B haemolytic streptococcus'],
  expl:'Viridans streptococci are the most common cause of infective endocarditis in children with underlying heart defects.',
  note:'Read directly off p.1783 native JPEG, fully legible. Numerals (39.5°C, CRP 250 mg/L) clear, no crop needed. Key C (index 2) highlighted yellow bold/underline. No figure.' },

{ n:14, pr:14, p:1785, key:4,
  stem:'A 36-hour-old baby is due to have his newborn check prior to discharge. The paediatrician notes that the antenatal serology is incomplete because the mother declined testing. The baby is symmetrically growth-restricted, red reflexes are bilaterally absent, and a heart murmur is noted. Femoral pulses can be palpated, and the baby is pink and otherwise well. What is an echocardiogram most likely to show?',
  opts:['Ventricular septal defect','Coarctation of aorta','Atrial septal defect','Tetralogy of Fallot','Patent ductus arteriosus'],
  expl:'',
  note:'Read directly off p.1785 native JPEG, fully legible. Key E (index 4) highlighted yellow bold/underline. No explanation box printed on p.1785. Per brief §3a, checked next page p.1786 for a possible overflow box: p.1786 is the UNANSWERED twin of Q15 (no highlight, matches n15 stem at p.1787) -- not a box, confirming n14 genuinely prints no explanation. No figure.' },

{ n:15, pr:15, p:1787, key:2,
  stem:'A 3-month-old female infant presents with a 2-day history of coryzal symptoms and increased work of breathing. Her mother reports she had two wet nappies over the last 24 hours and is taking half of her bottle feeds. Her heart rate is 150 beats per minute, and she has a respiratory rate of 60 per minute with saturations of 96% in air. On examination, she is alert, well perfused, and with slight recession. Clinical findings are consistent with bronchiolitis. What is the most appropriate management?',
  opts:['Admit and give supplemental oxygen','Admit and start CPAP','Admit and give nasogastric feeds','Admit for regular nebulizers','Admit for intravenous antibiotics'],
  expl:'Supportive care includes maintaining hydration; oxygen is not required as saturations are adequate.',
  note:'Read directly off p.1787 native JPEG, fully legible. Numerals (2-day, 24 hours, HR 150 bpm, RR 60/min, sats 96%) all clear, no crop needed. Key C (index 2) highlighted yellow bold/underline. No figure. This is the answered twin of the boxless p.1786 seen while checking n14.' },

{ n:16, pr:16, p:1789, box:1790, key:4,
  stem:'A 4-year-old girl is under outpatient review for asthma. Her regular treatment consists of a preventative steroid inhaler 200 micrograms BD and a reliever inhaler when required (about fortnightly). However, over the last 3 months, she has had to use her reliever inhaler every other day. Her nocturnal coughing has increased, resulting in disturbed sleep. What is the appropriate next step in care for this child?',
  opts:['Continue on the same dose of steroid inhaler','Increase the steroid inhaler dose to 400 micrograms BD','Start a course of oral steroids','Start oral theophylline','Add a long-acting beta agonist'],
  expl:"The child's asthma is not well controlled, shown by frequent reliever use and night-time symptoms. Guidelines recommend stepping up therapy by adding a LABA to the current low-dose inhaled steroid to improve control. Increasing the steroid dose or using oral/theophylline therapy is less preferred at this stage.",
  note:"Read p.1789 native JPEG for stem/options -- fully legible, numerals (200 micrograms BD, 400 micrograms BD, 3 months) clear, no crop needed. Key E (index 4) highlighted yellow bold/underline. p.1789 prints NO box; per task prompt and confirmed here, the explanation box overflows to p.1790, printed alone (no stem/options on that page), transcribed verbatim above. A portion of the box text is printed in red on the page (emphasis only); reproduced here as plain text -- colour is not part of this transcription convention. No figure." },

{ n:17, pr:17, p:1792, key:0,
  stem:'A 3-year-old girl is admitted with a 3-day history of coryzal symptoms followed by an acute history of breathing difficulty. She is previously fit and well apart from mild eczema, and the parents are non-smokers. She is thriving, and upon examination, she has widespread wheeze with no crepitations. What is the most likely diagnosis?',
  opts:['Viral wheeze','Asthma','Heart failure','Bronchiolitis','Recurrent aspiration'],
  expl:'Sudden onset wheeze after viral infection in previously well child suggests viral-induced wheeze.',
  note:'Read directly off p.1792 native JPEG, fully legible; printed number 17 confirms the page-list jump from p.1789 (n16) skipping the box-only p.1790 and unanswered p.1791. Key A (index 0) highlighted yellow bold/underline. No figure.' },

{ n:18, pr:18, p:1794, key:3,
  stem:"A 3-year-old boy with known asthma has been brought in by ambulance to the local emergency department with an acute severe exacerbation. He has already received salbutamol and ipratropium nebulizers together with an intravenous steroid. Upon reassessment, he appears exhausted with varying responsiveness. Fifteen litres of oxygen are needed to maintain his saturations, and auscultation of his chest reveals minimal breath sounds. What is the next most important step in this child's care?",
  opts:['Reassess 30 minutes later','Give intravenous antibiotics','Request a CXR','Give intravenous salbutamol','Admit to ward'],
  expl:'This child is in life-threatening asthma; urgent IV bronchodilator therapy is required.',
  note:"Read directly off p.1794 native JPEG, fully legible. 'Fifteen litres' spelled out on the page, transcribed as printed; '30 minutes' in option A clear. Key D (index 3) highlighted yellow bold/underline. No figure." },

{ n:19, pr:19, p:1796, key:3,
  stem:'A 24-month-old girl is admitted to the department by her mother with fever. At triage, her temperature is 38.7°C, other vital signs are all within normal limits, and she is given antipyretics pending medical review. She is reviewed by the doctor 90 minutes later, and her temperature is now 37.7°C. Clinical examination reveals a well-hydrated and clinically well child with good social interaction. There are no localizing features and no apparent source for her fever. What is the most appropriate next step in her care?',
  opts:['Request a CXR','Take blood for inflammatory markers','Take a blood culture','Request a urine dipstick','Discharge the child home'],
  expl:'In toddlers with fever without a clear source, a urinary tract infection is a common hidden cause. A urine dipstick provides a quick, non-invasive screen to detect possible UTI.',
  note:'Read directly off p.1796 native JPEG, fully legible. Numerals (24-month-old, 38.7°C, 90 minutes, 37.7°C) all clear, no crop needed. Key D (index 3) highlighted yellow bold/underline. No figure.' },

{ n:20, pr:20, p:1798, key:0,
  stem:'A 4-year-old girl is admitted with fever, difficulty breathing, and cough. A diagnosis of left lower lobe pneumonia is made, and intravenous antibiotics are initiated. What is the most likely pathogen?',
  opts:['Streptococcus pneumoniae','Haemophilus influenzae','Mycoplasma pneumoniae','Chlamydia trachomatis','E. coli'],
  expl:'S. pneumoniae is the most common cause of community-acquired bacterial pneumonia in young children.',
  note:'Read directly off p.1798 native JPEG, fully legible. Key A (index 0) highlighted yellow bold/underline. Option E is the abbreviated genus "E. coli", a genuine option (matches check-part-ep.js\'s documented single-prefix exception), not a list-letter slip. No figure.' },

/* peds endpoint part 2, section 15 "Model Final Exam 4", pp.1757-1921, QUARTER B (n21-n40).
   Source: Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf. Never modified/rendered here --
   page images read from the pre-extracted cache:
   C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\
   0ffb5f86-a1df-4f33-a8c4-fc32a73946ba\scratchpad\ep2-index\native\pNNNN.jpeg (800x450 ceiling).
   OCR index (content\peds\qb-pages\ocr\ep2\) NOT opened -- this is a staging pass, OCR is a
   search index only, never a source.

   Section 15 does NOT obey a page formula; explicit page list from the task prompt used verbatim,
   never computed:
     n21=1800  n22=1802  n23=1804  n24=1806  n25=1808
     n26=1810  n27=1812  n28=1814  n29=1816  n30=1818
     n31=1820  n32=1823  n33=1825  n34=1827  n35=1830
     n36=1832  n37=1834  n38=1836  n39=1838  n40=1840
   n31 overflow box printed alone on p.1821 (n31's own page is p.1820) -- box:1821.
   n34 overflow box printed alone on p.1828 (n34's own page is p.1827) -- box:1828.
   Task prompt pre-confirmed p.1821 is ITP vs haemophilia vs HUS content, and p.1828 prints ALL
   prognostic factors with "<50 x10^9/L" -- exponent to be read off the page image directly, never
   from the prompt's paraphrase, never from OCR.

   `n` here is QUARTER-B's own local range n21-n40 as assigned by the task prompt (this quarter's
   explicit ownership, not re-derived from part-A's on-disk state, which task prompt overrides).
   key is a 0-based index into opts (A=0, B=1, C=2, D=3, E=4...). p is the ANSWERED page (the one
   staged from).

   Question-number walk (pr vs n), page by page -- filled in as staged:
     n21 pr=21 p=1800
     n22 pr=22 p=1802
     n23 pr=23 p=1804
     n24 pr=24 p=1806
     n25 pr=25 p=1808
     n26 pr=26 p=1810
     n27 pr=27 p=1812
     n28 pr=28 p=1814
     n29 pr=29 p=1816
     n30 pr=30 p=1818
     n31 pr=31 p=1820 box=1821
     n32 pr=32 p=1823
     n33 pr=33 p=1825
     n34 pr=34 p=1827 box=1828
     n35 pr=35 p=1830
     n36 pr=37 p=1832   *** DIVERGENCE: printed number jumps 35->37, skipping 36. n stays
                          sequential at 36 per this brief's rule; pr recorded as printed. ***
     n37 pr=38 p=1834   (pr stays 1 ahead of n from here, consistent with the skip above)
     n38 pr=39 p=1836
     n39 pr=40 p=1838
     n40 pr=41 p=1840   -- LAST ENTRY OF QUARTER B
*/

{ n:21, pr:21, p:1800, key:2,
  stem:'A 6-month-old female infant with RSV-positive bronchiolitis is requiring 1 liter of nasal prong humidified oxygen and nasogastric feeding. Over the last 8 hours, her work of breathing has increased and she is showing signs of recession. Her oxygen requirement has also increased to 2 liters, and she appears tired. A blood gas is performed, which shows a pH of 7.30 and pCO2 of 7.8 kPa. What is the most appropriate next step in management?',
  opts:['Salbutamol nebulizer','Intravenous antibiotics','CPAP','Intubate and ventilate','Steroids'],
  expl:'This infant may be entering the peak stage of her bronchiolitis where typically things can get worse before they get better. In view of her respiratory status and metabolic acidosis, CPAP is the next most effective step.',
  note:'Read directly off p.1800 native JPEG, fully legible, no crop or twin needed. Key C (index 2) highlighted yellow with bold/underline box. No figure.' },

{ n:22, pr:22, p:1802, key:4,
  stem:'Bronchiolitis is one of the most common respiratory conditions affecting infants. Which of the following is not a clinical feature of bronchiolitis?',
  opts:['Tachypnoea','Apnoea','Wheeze','Fine crackles','Paroxysmal cough'],
  expl:'Bronchiolitis typically presents with tachypnea, wheeze, fine crackles, and sometimes apnoea; paroxysmal cough is not classic.',
  note:'Read directly off p.1802 native JPEG, fully legible, no crop or twin needed. Key E (index 4) highlighted yellow with bold/underline. No figure.' },

{ n:23, pr:23, p:1804, key:1,
  stem:'A 24-month-old girl with trisomy 21 attends for her developmental review. Her mother is concerned about her hearing and explains that she has had two recent right ear infections within the last 5 months. An audiogram is carried out, which confirms a conductive hearing loss of the right ear. What is the most likely explanation for this finding?',
  opts:['Congenital infection','Otitis media with effusion','Acquired meningitis','Antibiotic toxicity','Foreign body'],
  expl:'Children with trisomy 21 commonly develop recurrent middle ear effusions causing conductive hearing loss.',
  note:'Read directly off p.1804 native JPEG, fully legible, no crop or twin needed. Key B (index 1) highlighted yellow with bold/underline. No figure.' },

{ n:24, pr:24, p:1806, key:0,
  stem:'A 10-year-old boy is admitted with left lower lobe pneumonia. On day 3 of admission, he develops gradually increased work of breathing and a fever of 40°C. On assessment, he has a respiratory rate of 40 per minute, and auscultation reveals a clear right lung field but reduced breath sounds throughout his left lung. The percussion note is stony dull, and chest expansion is reduced on his left side. What is the most likely diagnosis?',
  opts:['Empyema','Lobar collapse','Lung abscess','Pneumothorax','Cor pulmonale'],
  expl:'Fever, unilateral stony dull percussion, and absent breath sounds after pneumonia indicate pleural effusion/empyema.',
  note:'Read directly off p.1806 native JPEG, fully legible, no crop or twin needed. Key A (index 0) highlighted yellow with bold/underline. No figure.' },

{ n:25, pr:25, p:1808, key:2,
  stem:'Developmental milestones vary between children; however, there are normal ranges for each domain. Which of the following is not a developmental concern?',
  opts:['Not visually fixing at 5 weeks','Not sitting unsupported at 7 months','Not using single words at 16 months','Not walking at 17 months','Not copying a line at 24 months'],
  expl:'Not using single words at 15 months. Single words, e.g. mama and dada, should be heard by about 12monthsofage.',
  note:'Read directly off p.1808 native JPEG and confirmed with a 300 dpi crop. Key C (index 2) highlighted yellow with bold/underline. NUMBER FLAG: option C prints "16 months" but the box says "15 months" -- a printed discrepancy between stem/option and box, both confirmed legible at 300 dpi, key stays as printed (option C, the boxed/highlighted answer). No figure.' },

{ n:26, pr:26, p:1810, key:2,
  stem:'An 11-month-old Caucasian boy attends his GP as his mother has been struggling to wean him. He will drink cow’s milk at regular intervals and eats some baby rice but refuses most other solids. On examination, he appears very pale but otherwise well. There is no hepatosplenomegaly. A full blood count (FBC) is arranged in view of the pallor, which shows: Hb = 7.8 g/dL, mean corpuscular volume (MCV) = 69 fL. What is the most likely cause of his anemia?',
  opts:['Sickle cell anemia','Thalassaemia','Iron deficiency anemia','Vitamin B12 deficiency','Folate deficiency'],
  expl:'Excess cow’s milk, low solid intake, and microcytic anemia indicate iron deficiency.',
  note:'Read directly off p.1810 native JPEG, fully legible, no crop or twin needed. Hb=7.8 g/dL and MCV=69 fL read directly, both clear. Key C (index 2) highlighted yellow with bold/underline. No figure.' },

{ n:27, pr:27, p:1812, key:4,
  stem:'A 4-year-old boy presents with pain in his abdomen and joints for the past 24 hours. He is afebrile. On examination, he has diffuse abdominal tenderness, but there are no masses, no lymphadenopathy, and no hepatosplenomegaly. A widespread purpuric rash is present over the legs and buttocks. A urine dip shows 2+ blood. Routine bloods are normal. What is the most likely diagnosis?',
  opts:['Idiopathic thrombocytopenic purpura','Meningococcal sepsis','Acute lymphoblastic leukaemia (ALL)','Vitamin C deficiency (scurvy)','Henoch–Schönlein purpura'],
  expl:'Classic HSP: purpura, abdominal pain, arthralgia, and renal involvement',
  note:'Read directly off p.1812 native JPEG, fully legible, no crop or twin needed. Key E (index 4) highlighted yellow with bold/underline. No figure.' },

{ n:28, pr:28, p:1814, key:2,
  stem:'A 3-year-old girl presents with severe pain in her hands and abdomen. On examination, the patient has yellow sclera, generalized abdominal tenderness, and hepatosplenomegaly. Blood tests were taken, including a CBC showing: Hb = 6.1 g/dL, MCV = 78 fL, white cell count (WCC) = 6.0 x 10^9/L, platelets = 300 x 10^9/L. What is the most likely cause of her anemia?',
  opts:['Thalassaemia','Iron deficiency anemia','Sickle cell disease','Anaemia of chronic disease','Glucose-6-phosphate dehydrogenase deficiency'],
  expl:'Vaso-occlusive crises with hemolytic anemia and splenomegaly are typical in sickle cell disease.',
  note:'Read at native, both 10^9 exponents confirmed as genuine typeset superscripts via a 300 dpi crop (p-1814.jpg). Hb=6.1 g/dL, MCV=78 fL, WCC=6.0x10^9/L, platelets=300x10^9/L all read directly. Key C (index 2) highlighted yellow with bold/underline. No figure.' },

{ n:29, pr:29, p:1816, key:3,
  stem:'A 9-year-old girl with known sickle cell disease presents with a 4-day history of fever, coryza, and myalgia. Over the past 24 hours, she has developed a lacy rash, particularly over her hands and feet, and has become more lethargic. Her mother reports her looking more pale. An FBC reveals: Hb = 5.9 g/dL, WBC = 1.0 x 10^9/L, platelets = 50 x 10^9/L. What is the most likely cause for her blood results?',
  opts:['Splenic sequestration crisis','Painful crisis','Chest crisis','Parvovirus B19 infection','Pneumococcal sepsis'],
  expl:'Parvovirus B19 causes aplastic crisis in sickle cell patients, leading to severe anemia and low reticulocytes.',
  note:'Both 10^9 exponents confirmed as genuine typeset superscripts via a 300 dpi crop (p-1816.jpg). Hb=5.9 g/dL, WBC=1.0x10^9/L, platelets=50x10^9/L all read directly. Key D (index 3) highlighted yellow with bold/underline. No figure.' },

{ n:30, pr:30, p:1818, key:2,
  stem:'An 8-month-old girl with Greek-Cypriot parents is brought to her GP as her parents are worried she is not growing well and is very pale. On examination, there is pallor and mildly icteric sclera. She has a distended abdomen with hepatosplenomegaly and mild frontal bossing. She was born on the 25th centile and her weight has fallen below the 2nd centile. Blood tests show microcytic hypochromic anemia. What is the likely diagnosis?',
  opts:['Sickle cell disease','Hereditary spherocytosis','Thalassaemia major','Glucose-6-phosphate dehydrogenase deficiency (G6PD)','Iron deficiency anemia'],
  expl:'Mediterranean ancestry, growth failure, pallor, hepatosplenomegaly, and microcytic anemia suggest beta-thalassemia major.',
  note:'Read directly off p.1818 native JPEG, fully legible, no crop or twin needed. 25th and 2nd centile figures read directly. Key C (index 2) highlighted yellow with bold/underline. No figure.' },

{ n:31, pr:31, p:1820, box:1821,
  key:2,
  stem:'A 5-year-old boy attends accident and emergency with a nosebleed that his mother has been unable to stop for the past 45 minutes. He saw his GP for a viral upper respiratory tract infection 1 week ago but is otherwise well. His nosebleeds are stopped with pressure, but on examination he is noted to have multiple petechiae on his chest, legs, and abdomen. Blood tests reveal: Hb 10.4 g/dL, WCC 13 × 10^9/L, platelet count 15 × 10^9/L, clotting screen normal. The most likely diagnosis is which of the following?',
  opts:['Henoch–Schönlein purpura','Haemophilia B (Christmas disease)','Immune (idiopathic) thrombocytopenic purpura (ITP)','Meningococcal septicaemia','Hemolytic uraemic syndrome (HUS)'],
  expl:'The child has sudden onset bruising and petechiae with a very low platelet count, normal clotting, and recent viral infection, which is classic for ITP. Other causes like hemophilia or HUS would present differently with coagulation abnormalities or renal involvement.',
  note:'Explanation box overflowed onto p.1821 alone (matches task prompt orientation: ITP contrasted against haemophilia and HUS); box page confirmed by eye, no question/options/highlight on it. Both 10^9 exponents on p.1820 confirmed genuine typeset superscripts via 300 dpi crop (p-1820.jpg). "platelet count 15 × 10^9/L" is printed in red text on the page (colour emphasis, transcribed as plain text here per schema -- no field for colour). Key C (index 2) highlighted yellow with bold/underline. No figure.' },

{ n:32, pr:32, p:1823, key:0,
  stem:'A 7-year-old Ghanaian boy presented to accident and emergency room 3 days ago on his return from holiday in West Africa with high fever and rigors. A diagnosis of malaria was made and he was started on primaquine. His mother is concerned that he has begun to look increasingly jaundiced. On examination, there is deep jaundice, and he is looking pale and breathless. An FBC and film are taken, which show: Hb 5.5 g/dL, WCC 15 × 10^9/L, platelet count 200 × 10^9/L. Blood film: red cell fragments and bite cells with Heinz bodies on staining. The most likely underlying diagnosis is which of the following?',
  opts:['Glucose-6-phosphate dehydrogenase deficiency (G6PD)','Pyruvate kinase deficiency','Sickle cell disease','Beta-thalassaemia'],
  expl:'The boy developed hemolytic anemia after exposure to primaquine, a known trigger in G6PD deficiency. Blood film shows bite cells and Heinz bodies, which are typical findings in oxidative hemolysis.',
  note:'Confirmed only 4 options (A-D), no option E printed, via the hires render -- native crop cut off at D but the full slide shows nothing further. Both 10^9 exponents confirmed genuine typeset superscripts. Key A (index 0) highlighted yellow with bold/underline. No figure.' },

{ n:33, pr:33, p:1825, key:4,
  stem:'A 4-year-old girl is undergoing chemotherapy for acute lymphoblastic leukaemia. She presents 8 days after her last treatment with a fever of 39°C. She has a portacath in situ. Her FBC shows a WBC of 1.0 × 10^9/L, neutrophils 0.4 × 10^9/L, platelets 100 × 10^9/L, and Hb 10 g/dL. What is the most important step in her management?',
  opts:['Packed red blood cell transfusion','Platelet transfusion','Administration of G-CSF','Antipyretics','Intravenous antibiotics'],
  expl:'This neutropenic child with fever is at high risk for sepsis. Immediate IV antibiotics are critical; transfusions or G-CSF are supportive but not first-line in febrile neutropenia.',
  note:'All three 10^9 exponents (WBC, neutrophils, platelets) confirmed genuine typeset superscripts via 300 dpi crop (p-1825.jpg). Key E (index 4) highlighted yellow with bold/underline. No figure.' },

{ n:34, pr:34, p:1827, box:1828,
  key:3,
  stem:'ALL is the commonest form of childhood leukaemia and carries a 5-year survival rate of over 80%. However, prognosis depends on a number of factors. Which of the following is a good prognostic factor in acute lymphoblastic leukaemia?',
  opts:['White cell count (WCC) >50 × 10^9/L at diagnosis','Age >10 at diagnosis','Age <1 year at diagnosis','Non-B cell or non-T cell leukaemia','Presence of translocations, e.g., Philadelphia chromosome'],
  expl:'In childhood acute lymphoblastic leukemia (ALL), good prognostic factors include: age between 1–10 years, normal or slightly elevated WCC (<50 ×10^9/L), and favorable immunophenotype (common B-cell ALL). Poor prognostic factors include age <1 or >10, high WCC, T-cell or certain B-cell subtypes, and presence of adverse genetic translocations like the Philadelphia chromosome.',
  note:'Explanation box overflowed onto p.1828 alone (matches task prompt orientation: ALL prognostic factors, good vs poor); box page confirmed by eye, no question/options/highlight on it. Option A 10^9 exponent on p.1827 confirmed genuine typeset superscript via 300 dpi crop (p-1827.jpg). The box exponent "<50 ×10^9/L" (task prompt flagged this specifically) also confirmed as genuine typeset superscript via 300 dpi crop (p-1828.jpg) -- read directly off the image, not from OCR or the prompt paraphrase. Key D (index 3) highlighted yellow with bold/underline. No figure.' },

{ n:35, pr:35, p:1830, key:2,
  stem:'Brain tumors are the most common solid tumor of childhood, and presentation may be insidious, leading to late diagnosis. Which of the following statements regarding brain tumors in childhood is true?',
  opts:['They are usually supratentorial','Signs of raised intracranial pressure are rare','Astrocytomas carry poor prognosis','Medulloblastomas are the most common type','Metastasis is common'],
  expl:'Most childhood brain tumours are infratentorial, and diagnosis is often delayed due to insidious onset and signs of raised intracranial pressure. Astrocytomas are the most common type and generally have a poor prognosis, while metastasis is rare in CNS tumours.',
  note:'Read directly off p.1830 native JPEG, fully legible, no crop or twin needed. Key C (index 2) highlighted yellow with bold/underline. No figure.' },

{ n:36, pr:37, p:1832, key:0,
  stem:'An 11-year-old girl presents to the emergency department with a 4-day history of cough and fever. A working diagnosis of right middle lobe pneumonia is made, and she is commenced on intravenous antibiotics and admitted to the ward. Her blood tests reveal a plasma sodium of 127 mmol/L with normal renal function. Further investigations reveal a low plasma osmolality and a raised urinary sodium level. What is the most likely diagnosis?',
  opts:['Syndrome of inappropriate secretion of ADH','Cushing syndrome','Diabetes insipidus','Secondary adrenal insufficiency','Adrenal hyperplasia'],
  expl:'Hyponatremia with low plasma osmolality and high urinary sodium during pneumonia suggests SIADH, caused by inappropriate ADH secretion. Other endocrine disorders would have additional systemic signs.',
  note:'⚠️ PRINTED NUMBER DIVERGES: this page prints "37." though it is n36 in section order (previous page, n35, printed "35" -- so the printed sequence jumps 35 to 37, skipping 36 entirely). Recorded as pr:37; n stays sequential per brief rule. Plasma sodium 127 mmol/L read directly off p.1832 native JPEG, fully legible, no crop or twin needed. Key A (index 0) highlighted yellow with bold/underline. No figure.' },

{ n:37, pr:38, p:1834, key:0,
  stem:'A 9-year-old girl presents with haematuria.She is usually fit and well but was treated for tonsillitis last week by her GP. On examination, there is peripheral edema and hypertension, but no abdominal mass. The urine dipstick is positive for blood and protein.\nWhat is the likely diagnosis?',
  opts:['Post-streptococcal glomerulonephritis','Hemolytic uraemic syndrome','Systemic lupus erythematosus (SLE)','Henoch-Schoenlein purpura','Minimal change nephropathy'],
  expl:'Recent tonsillitis, hematuria, hypertension, and edema point to post-streptococcal glomerulonephritis. HUS would have thrombocytopenia and renal impairment; nephrotic syndrome would show heavy proteinuria without hematuria.',
  note:'pr continues 1 ahead of n (38 vs n37), consistent with the 35->37 skip on the previous page -- the printed numbering has not resynced. Read directly off p.1834 native JPEG, fully legible, no crop or twin needed. Key A (index 0) highlighted yellow with bold/underline. No figure.' },

{ n:38, pr:39, p:1836, key:3,
  stem:'A 7-year-old girl presents with edema of the face and legs, and abdominal pain.Urine dipstick shows 4+ protein. A diagnosis of nephrotic syndrome is made, and she is started on prednisolone.\nWhat would be the likely finding on biopsy and light microscopy?',
  opts:['Focal-segmental glomerulosclerosis','Mesangiocapillary glomerulonephritis','Crescentic glomerulonephritis','Minimal change disease','Membranous glomerulonephritis'],
  expl:'Most children with steroid-sensitive nephrotic syndrome show normal glomeruli under light microscopy, which is minimal change disease. Other patterns usually correlate with steroid resistance.',
  note:'pr still 1 ahead of n (39 vs n38), same unresynced offset. Read directly off p.1836 native JPEG, fully legible, no crop or twin needed. Key D (index 3) highlighted yellow with bold/underline. No figure.' },

{ n:39, pr:40, p:1838, key:2,
  stem:'An 11-year-old girl presents following 6 days of fever, abdominal pain, and bloody diarrhea.She has become increasingly irritable and lethargic. Blood tests reveal: Hb 7.5 g/dL, WBC 15 × 10^9/L, platelets 40 × 10^9/L, urea 9.0 mmol/L, creatinine 200 µmol/L, and a blood film shows red blood cell fragments.\nThe most likely diagnosis is:',
  opts:['Ulcerative colitis','Glucose-6-phosphate dehydrogenase deficiency','Hemolytic uraemic syndrome','Dehydration','Viral gastroenteritis'],
  expl:'Bloody diarrhea followed by anemia, thrombocytopenia, and renal impairment with fragmented RBCs indicates typical HUS, usually post-infectious with E. coli O157:H7.',
  note:'pr still 1 ahead of n (40 vs n39), same unresynced offset persists to the end of my quarter. Both 10^9 exponents confirmed genuine typeset superscripts via 300 dpi crop (p-1838.jpg). Urea 9.0 mmol/L, creatinine 200 µmol/L read directly, both clear. Key C (index 2) highlighted yellow with bold/underline. No figure.' },

{ n:40, pr:41, p:1840, key:3,
  stem:'A 3-month-old baby girl presents with a fever of 38.6°C, crying, and vomiting.A dipstick demonstrates white cells and protein in her urine.\nWhich of the following organisms is most likely to be responsible for her urinary tract infection?',
  opts:['Enterococcus spp.','Pseudomonas','Proteus','Escherichia coli','Klebsiella'],
  expl:'E. coli is the most common cause of UTIs in infants, especially girls. Other organisms are less frequent in this age group.',
  note:'LAST ENTRY OF QUARTER B. pr still 1 ahead of n (41 vs n40), same unresynced offset holds through to my last page. Read directly off p.1840 native JPEG, fully legible, no crop or twin needed. Key D (index 3) highlighted yellow with bold/underline. No figure.' },

/* peds endpoint part 2, section 15 "Model Final Exam 4", pp.1757-1921, QUARTER C (n41-n60).
   Source: Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf. Never modified/rendered here --
   page images read from the pre-extracted cache:
   C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\
   0ffb5f86-a1df-4f33-a8c4-fc32a73946ba\scratchpad\ep2-index\native\pNNNN.jpeg (800x450 ceiling).
   OCR index (content\peds\qb-pages\ocr\ep2\) NOT opened -- this is a staging pass, OCR is a
   search index only, never a source.

   Section 15 does NOT obey a page formula; explicit page list from the task prompt used verbatim,
   never computed:
     n41=1842  n42=1844  n43=1846  n44=1848  n45=1850
     n46=1852  n47=1854  n48=1856  n49=1858  n50=1860
     n51=1862  n52=1864  n53=1867  n54=1869  n55=1871
     n56=1873  n57=1875  n58=1877  n59=1879  n60=1881
   n52 overflow box printed alone on p.1865 (n52's own page is p.1864) -- box:1865. Task prompt
   pre-confirmed p.1865 is early-onset neonatal sepsis, prolonged rupture of membranes over 24h,
   GBS commonest cause, bold+underlined on pale yellow strip -- EMPHASIS STYLING, NOT an answer-key
   highlight; no question number, no option list on that page.

   `n` here is QUARTER-C's own local range n41-n60 as assigned by the task prompt (page-map.md
   confirms this range matches; this quarter's explicit ownership).
   key is a 0-based index into opts (A=0, B=1, C=2, D=3, E=4...). p is the ANSWERED page (the one
   staged from).

   Question-number walk (pr vs n), page by page -- pr = n+1 held constant across the whole quarter,
   no divergence anywhere in n41-n60:
     n41 pr=42 p=1842   n42 pr=43 p=1844   n43 pr=44 p=1846   n44 pr=45 p=1848
     n45 pr=46 p=1850   n46 pr=47 p=1852   n47 pr=48 p=1854   n48 pr=49 p=1856
     n49 pr=50 p=1858   n50 pr=51 p=1860   n51 pr=52 p=1862   n52 pr=53 p=1864 (box:1865)
     n53 pr=54 p=1867   n54 pr=55 p=1869   n55 pr=56 p=1871   n56 pr=57 p=1873
     n57 pr=58 p=1875   n58 pr=59 p=1877   n59 pr=60 p=1879   n60 pr=61 p=1881

   n52 is a 4-option question (A-D only, no E) -- confirmed on both native and hires, not a render
   cutoff. All other 19 entries carry 5 options. No figures anywhere in this quarter (every answered
   page was read whole; zero measured, not assumed). Boundary check: p.1883, one page past this
   quarter's last page, prints pr=62 -- clean handoff into quarter D, no gap, no overlap.
*/

{ n:41, pr:42, p:1842, key:4,
  stem:'A baby has bilaterally undescended testes. Genitalia appear to be male. Which is the most important initial investigation?',
  opts:['Karyotype with FISH for sex-determining region of the Y chromosome','Abdominal ultrasound scan','Abdominal CT scan','17-Hydroxyprogesterone levels','Urea and electrolytes (U&Es)'],
  expl:'In a newborn with bilateral undescended testes, the most urgent concern is salt-wasting congenital adrenal hyperplasia (CAH), which can cause life-threatening electrolyte imbalances. Therefore, urea and electrolytes (U&Es) should be checked immediately. Further tests like karyotype, ultrasound, and 17-hydroxyprogesterone are done after stabilization to confirm the diagnosis and assess anatomy.',
  note:'Read directly off p.1842 native JPEG, fully legible, no crop or twin needed. Key E (index 4, "Urea and electrolytes (U&Es)") highlighted yellow, bold+underline. No figure. pr=42 vs n=41 -- one ahead, watching whether this offset holds.' },

{ n:42, pr:43, p:1844, key:2,
  stem:'An 8-year-old boy is referred by the educational psychologist with a suspected diagnosis of ADHD (attention deficit hyperactivity disorder).\nHe has been struggling at school and finds it hard to concentrate on an activity. Teachers have been finding it hard to manage his behavior as he is restless and constantly running around the classroom.\nWhich of the following would suggest a diagnosis other than ADHD?',
  opts:['Easily distracted by other children','Difficulty waiting for his turn','Symptoms only present at school','Constantly talking, often interrupting others','Fidgeting with his hands or objects while sitting still'],
  expl:'ADHD symptoms are usually present in multiple settings. If issues appear only at school, another cause like situational stress is more likely.',
  note:'Read directly off p.1844 native JPEG, fully legible, no crop or twin needed. Key C (index 2, "Symptoms only present at school") highlighted yellow, bold+underline. Box sits beside options D/E but text fully readable, no overlap. No figure. pr=43 vs n=42 -- offset holds.' },

{ n:43, pr:44, p:1846, key:2,
  stem:'A 4-year-old boy is referred to his GP by his teacher at nursery.\nShe has noticed that he has delayed speech and only has a handful of words. He struggles with imaginative play and usually plays alone. He becomes upset if there is a change to the daily routine. During the surgery, he does not make eye contact. There are no dysmorphic features.\nWhat is the most likely diagnosis?',
  opts:['Selective mutism','Normal development','Autism','Speech delay','Fragile X'],
  expl:'Delayed speech, lack of eye contact, repetitive behaviors, and resistance to routine are classic features of autism.',
  note:'Read directly off p.1846 native JPEG, fully legible, no crop or twin needed. Key C (index 2, "Autism") highlighted yellow, bold. Box sits beside options C/D but text fully readable. No figure. pr=44 vs n=43 -- offset holds.' },

{ n:44, pr:45, p:1848, key:4,
  stem:'A 6-year-old boy is brought to the GP with bedwetting.\nHis mother is concerned that he has never been dry at night and wants to know if this is normal.\nWhich of the following statements regarding nocturnal enuresis is correct?',
  opts:['It is commonly due to urinary tract infection','Children are commonly dry at night by age 4','Primary nocturnal enuresis is commonly related to stressful events','Cutting down fluid in the evening is ineffective','Bell-alarms may be helpful in children who sleep very deeply'],
  expl:'Nocturnal enuresis often improves with behavioral interventions; bell alarms can condition children who sleep deeply to wake with a full bladder.',
  note:'Read directly off p.1848 native JPEG, fully legible, no crop or twin needed. Key E (index 4, "Bell-alarms may be helpful in children who sleep very deeply") highlighted yellow, bold+underline. No figure. pr=45 vs n=44 -- offset holds.' },

{ n:45, pr:46, p:1850, key:4,
  stem:'A 9-year-old girl is brought to her GP with a 2-month history of headaches.\nWhich of the following features of her headaches is not a red-flag symptom?',
  opts:['Associated with vomiting','Morning headache','Worse on lying down','Presence of focal neurology','Symmetrical, band-like in nature'],
  expl:'Red-flag headache features include vomiting, morning headaches, worsening when lying down, or focal neuro signs. A band-like headache is typically tension-type and not a red flag.',
  note:'Read directly off p.1850 native JPEG, fully legible, no crop or twin needed. Key E (index 4, "Symmetrical, band-like in nature") highlighted yellow, bold+underline. No figure. pr=46 vs n=45 -- offset holds.' },

{ n:46, pr:47, p:1852, key:0,
  stem:'A 14-month-old is seen in clinic as his mother is concerned that he may be having seizures.The episodes occur when he is angry or upset. He has color change followed by collapse and occasional jerking movements.\nThe most likely diagnosis is:',
  opts:['Breath-holding spells',"Tet' spells",'Myoclonic epilepsy','Non-epileptic seizure','Vasovagal syncope'],
  expl:'Episodes triggered by anger or frustration with color change and brief loss of consciousness are classic breath-holding spells, which are benign and self-limiting.',
  note:'Read directly off p.1852 native JPEG, fully legible, no crop or twin needed. Key A (index 0, "Breath-holding spells") highlighted yellow, bold+underline. No figure. pr=47 vs n=46 -- offset holds. Stem missing space before "The episodes" transcribed verbatim.' },

{ n:47, pr:48, p:1854, key:1,
  stem:'A 6-year-old boy is falling behind at school.His mother is concerned he is inattentive. She describes him daydreaming frequently, during which time it is difficult to attract his attention. Routine blood tests are normal. An EEG demonstrates spikes at 3 Hz.\nThe likely diagnosis is:',
  opts:['ADHD-inattentive form','Absence seizures','Juvenile myoclonic epilepsy','Daydreaming','Non-epileptic seizures'],
  expl:'Frequent daydreaming with 3 Hz spike-and-wave EEG is characteristic of absence seizures, not ADHD.',
  note:'Read directly off p.1854 native JPEG, fully legible, no crop or twin needed. Key B (index 1, "Absence seizures") highlighted yellow, bold+underline. Number "3 Hz" clearly legible in stem and box, no crop needed. No figure. pr=48 vs n=47 -- offset holds. Stem missing space before "His mother" transcribed verbatim.' },

{ n:48, pr:49, p:1856, key:3,
  stem:'A 5-month-old boy is brought in by his mother. She is concerned that he is frequently irritable. She is worried he may be in pain as he tenses and bends his head up, flailing his arms for a few seconds at a time. An EEG is performed, which shows large-amplitude slow waves with spikes and sharp waves. The most likely diagnosis is which of the following?',
  opts:['Absence seizures','Benign rolandic epilepsy','Gastro-oesophageal reflux','West syndrome (infantile spasms)','Breath-holding attacks'],
  expl:'Infantile spasms show sudden flexion/extension of limbs, irritability, and EEG with hypsarrhythmia (high-amplitude slow waves with spikes).',
  note:'Read directly off p.1856 native JPEG, fully legible, no crop or twin needed. Key D (index 3, "West syndrome (infantile spasms)") highlighted yellow, bold+underline. No figure. pr=49 vs n=48 -- offset holds.' },

{ n:49, pr:50, p:1858, key:0,
  stem:'A 12-year-old girl with known epilepsy is brought in by ambulance. She has been intubated for 15 minutes. Her parents administered buccal midazolam 5 minutes later as part of her rescue regimen. On arrival, tonic-clonic movements are ongoing. The ambulance crew has inserted a cannula and is giving high-flow oxygen via facemask. What is the next step in management?',
  opts:['Intravenous lorazepam','Rectal diazepam','Rapid sequence induction','Loading dose of phenytoin','Intravenous phenobarbital'],
  expl:'Ongoing status epilepticus after rescue midazolam requires IV benzodiazepines as the next step; rectal diazepam is for prehospital use.',
  note:'Read directly off p.1858 native JPEG, fully legible, no crop or twin needed. Key A (index 0, "Intravenous lorazepam") highlighted yellow, bold+underline. Stem prints "intubated for 15 minutes" (likely meant seizing/fitting, not intubated) -- transcribed verbatim, not corrected. Numbers "15 minutes"/"5 minutes" clearly legible. No figure. pr=50 vs n=49 -- offset holds.' },

{ n:50, pr:51, p:1860, key:1,
  stem:'An 8-year-old girl presents with a second generalized tonic-clonic seizure. It required lorazepam to terminate the seizure, and a decision is made to start anti-epileptic treatment. Which of the following is first-line therapy?',
  opts:['Phenobarbital','Sodium valproate','Vigabatrin','Ethosuximide','Phenytoin'],
  expl:'For generalized tonic-clonic seizures in children, sodium valproate is considered first-line therapy.',
  note:'Read directly off p.1860 native JPEG, fully legible, no crop or twin needed. Key B (index 1, "Sodium valproate") highlighted yellow, bold+underline. No figure. pr=51 vs n=50 -- offset holds.' },

{ n:51, pr:52, p:1862, key:1,
  stem:'At a routine health visitor consultation, a 12-month-old boy is noticed to be cruising around the furniture, responding to his mama, and says "mama" and "papa." He is holding something in his left hand, and his father informs the health visitor that he only uses his left hand.\nWhat is the most likely finding here?',
  opts:['Normal developmental milestones','Fine motor delay','Speech and language delay','Play and social delay','Global delay'],
  expl:'This 12-month-old boy shows normal gross motor, speech, and social development but displays consistent left-hand preference, which is atypical for his age and may suggest subtle right-hand weakness or fine motor delay. While no other delays are evident, early hand dominance warrants monitoring to rule out underlying issues like hemiparesis.',
  note:'Read directly off p.1862 native JPEG, fully legible, no crop or twin needed. Key B (index 1, "Fine motor delay") highlighted yellow, bold+underline. No figure. pr=52 vs n=51 -- offset holds.' },

{ n:52, pr:53, p:1864, box:1865, key:1,
  stem:'A full-term girl was born weighing 4 kg by normal vaginal delivery, and the membranes had ruptured 24 hours previously. At 6 hours of age, she was noted to be breathing fast and have a low temperature. She has not breastfed since birth and has had one vomit. On examination, she is lethargic and her core temperature is 35.5°C. She has a respiratory rate of 90 breaths/min, a central capillary refill time of 4 seconds, pulse 180/min, and oxygen saturation 89% in air. Her chest X-ray shows consolidation at the right base.\nWhat is the most likely causative organism for her infection?',
  opts:['Escherichia coli (E. coli)','Group B streptococcus','Staphylococcus aureus','Streptococcus pneumoniae'],
  expl:'This full-term baby shows signs of early-onset neonatal sepsis: respiratory distress, lethargy, hypothermia, poor feeding, and chest X-ray consolidation. The major risk factor here is prolonged rupture of membranes (>24 hours). Group B streptococcus is the most common cause of early-onset neonatal sepsis and pneumonia, transmitted from the mother during birth.',
  note:'Answered page p.1864 read on native JPEG and confirmed on hires -- only FOUR options (A-D) are printed, no E; confirmed by full-page hires render, not a rendering cutoff. Key B (index 1, "Group B streptococcus") highlighted yellow, bold+underline. Box overflowed onto its own page p.1865 (task prompt pre-confirmed content); expl transcribed verbatim from p.1865 native JPEG, which sets "early-onset neonatal sepsis" and "prolonged rupture of membranes (>24 hours)" in bold red italic and "Group B streptococcus" in red italic -- reproduced as plain text, styling not encoded. p.1865 carries no question number and no option list -- emphasis styling inside prose, not an answer-key highlight, per task prompt warning. Numbers 4 kg / 24 hours / 6 hours / 35.5°C / 90 breaths/min / 4 seconds / 180/min / 89% all read directly off p.1864 native JPEG, clearly legible, no crop needed. No figure. pr=53 vs n=52 -- offset holds.' },

{ n:53, pr:54, p:1867, key:3,
  stem:'A 10-month-old boy presented to the emergency room with convulsions. He had a history of mild diarrhea for 3 days and was afebrile. He had no past history of convulsions. Examination revealed a large head with a wide anterior fontanelle, prominent costochondral junctions, and broad wrists. His eyes and skin pinch were normal, and rectal temperature was 37.8°C.\nWhat investigation is most likely to reveal the cause of his convulsions?',
  opts:['CT brain','EEG','Coagulation profile','Serum calcium','Skull X-ray'],
  expl:'Clinical signs of rickets (wide wrists, costochondral junction prominence) suggest hypocalcemia; serum calcium is the key investigation.',
  note:'Read directly off p.1867 native JPEG, fully legible, no crop or twin needed. Key D (index 3, "Serum calcium") highlighted yellow, bold+underline. Numbers "3 days" / "37.8°C" clearly legible. No figure. pr=54 vs n=53 -- offset holds (step 1864->1867 through box page 1865 as expected).' },

{ n:54, pr:55, p:1869, key:2,
  stem:'A 5-week-old baby boy is brought into the emergency department with a 48-hour history of projectile vomiting. The infant is hungry after vomiting and has not opened his bowels in 3 days. Clinical examination reveals a mass in the right upper quadrant region. A blood gas is performed.\nWhat finding in this blood gas is expected to be present?',
  opts:['Normal findings','Metabolic acidosis','Metabolic alkalosis','Respiratory acidosis','Respiratory alkalosis'],
  expl:'Projectile, non-bilious vomiting in pyloric stenosis leads to loss of gastric acid, causing hypochloremic metabolic alkalosis.',
  note:'Read directly off p.1869 native JPEG, fully legible, no crop or twin needed. Key C (index 2, "Metabolic alkalosis") highlighted yellow, bold+underline. Numbers "48-hour" / "3 days" clearly legible. No figure. pr=55 vs n=54 -- offset holds.' },

{ n:55, pr:56, p:1871, key:3,
  stem:"A 3-year-old girl is 'blue-lighted' into the local emergency department with reduced consciousness. Her mother informs the paramedic that her daughter has been unwell for the last 8 days with vomiting and profuse diarrhea. On arrival, she is apyrexial, has a heart rate of 170 beats per minute and respiratory rate of 20 per minute. Her systolic blood pressure is 75 mm Hg and she has a capillary refill time of 5 seconds. She is barely responsive to pain. Resuscitation begins and a blood gas reveals a metabolic acidosis.What is the most likely clinical syndrome?",
  opts:['Anaphylactic shock','Septicemic shock','Cardiogenic shock','Hypovolemic shock','Neurogenic shock'],
  expl:'Severe dehydration from prolonged vomiting and diarrhea leads to hypovolemic shock, evidenced by hypotension, poor perfusion, and metabolic acidosis.',
  note:'Read directly off p.1871 native JPEG, fully legible, no crop or twin needed. Key D (index 3, "Hypovolemic shock") highlighted yellow, bold+underline. Numbers "8 days" / "170 beats per minute" / "20 per minute" / "75 mm Hg" / "5 seconds" all clearly legible. No figure. pr=56 vs n=55 -- offset holds.' },

{ n:56, pr:57, p:1873, key:4,
  stem:'A 2-year-old previously healthy boy is found to be cyanosed while playing with his toys. When brought to the emergency department, his HR was 164/min, RR was 70/min, SaO2 was 80% on room air, and he was gasping for air.\nWhat is the most likely diagnosis?',
  opts:['Acute bronchiolitis','Congenital heart disease','Viral croup','Bronchopneumonia','Foreign body aspiration'],
  expl:'Acute cyanosis, gasping, and localized airway obstruction in a previously healthy child strongly suggest foreign body aspiration.',
  note:'Read directly off p.1873 native JPEG, fully legible, no crop or twin needed. Key E (index 4, "Foreign body aspiration") highlighted yellow, bold+underline. "SaO2" printed with the 2 as a plain (non-subscript) digit -- transcribed as printed, ASCII "SaO2". Numbers "164/min" / "70/min" / "80%" clearly legible. No figure. pr=57 vs n=56 -- offset holds.' },

{ n:57, pr:58, p:1875, key:2,
  stem:'A 2-year-old boy is brought into the emergency department by ambulance at night with an acute history of cough and stridor following a 2-day history of coryzal symptoms. On examination, he is afebrile but has marked intercostal recession with stridor and a barking cough is heard.\nWhat is the most likely common causative organism?',
  opts:['Adenovirus','Respiratory syncytial virus','Parainfluenza virus','Rhinovirus','Influenza virus'],
  expl:'Barking cough, stridor, and coryza in a young child are classic for croup, most commonly caused by parainfluenza virus.',
  note:'Read directly off p.1875 native JPEG, fully legible, no crop or twin needed. Key C (index 2, "Parainfluenza virus") highlighted yellow, bold+underline. No figure. pr=58 vs n=57 -- offset holds.' },

{ n:58, pr:59, p:1877, key:4,
  stem:'A 15-year-old boy presents to hospital with malaise, fever, and mild jaundice over the last week. On examination, there is intense inflammation of the tonsils with discharge, splenomegaly, and cervical lymphadenopathy.\nWhat is the most likely cause of his illness?',
  opts:['Acute lymphoblastic leukemia','Beta hemolytic Streptococcus','Hepatitis A infection','Non-Hodgkin lymphoma','Epstein-Barr infection (EBV)'],
  expl:'Sore throat, fever, splenomegaly, and lymphadenopathy in a teenager suggest infectious mononucleosis due to EBV.',
  note:'Read directly off p.1877 native JPEG, fully legible, no crop or twin needed. Key E (index 4, "Epstein-Barr infection (EBV)") highlighted yellow, bold+underline. No figure. pr=59 vs n=58 -- offset holds.' },

{ n:59, pr:60, p:1879, key:3,
  stem:"A 6-year-old boy with known asthma has been brought in by ambulance to the local emergency department with an acute severe exacerbation. He has already received salbutamol and ipratropium nebulizers together with intravenous steroids. Upon reassessment, he appears exhausted with varying responsiveness. High-flow oxygen is needed to maintain his saturations, and auscultation of his chest reveals minimal breath sounds.\nWhat is the next most important step in this child's care?",
  opts:['Reassess 30 minutes later','Give intravenous antibiotics','Give high dose inhaled steroids','Give intravenous salbutamol','Give inhaled long-acting beta agonist'],
  expl:'A child with severe asthma, exhaustion, minimal breath sounds, and high oxygen requirement needs IV salbutamol as the next life-saving step.',
  note:'Read directly off p.1879 native JPEG, fully legible, no crop or twin needed. Key D (index 3, "Give intravenous salbutamol") highlighted yellow, bold+underline. No figure. pr=60 vs n=59 -- offset holds.' },

{ n:60, pr:61, p:1881, key:0,
  stem:'A 2-year-old girl is admitted with a 3-day history of coryzal symptoms followed by an acute history of breathing difficulty. She was previously well and is otherwise fit. The parents are non-smokers and have no history of atopic disorders. She is thriving, and on examination, she has widespread wheeze with no crepitations.\nWhat is the most likely diagnosis?',
  opts:['Viral episodic wheeze','Asthma','Heart failure','Bronchiolitis','Recurrent aspiration'],
  expl:'A young child with wheezing following viral infection and no chronic atopy is most likely experiencing viral-induced episodic wheeze.',
  note:'Read directly off p.1881 native JPEG, fully legible, no crop or twin needed. Key A (index 0, "Viral episodic wheeze") highlighted yellow, bold+underline. No figure. pr=61 vs n=60 -- offset holds. LAST ENTRY OF QUARTER C. Boundary proof: p.1883 (one page past this quarter, outside my range) prints pr=62, "An 18-month-old girl presents to her family doctor with coryza..." with key E (Common cold) highlighted -- confirms clean continuation into quarter D territory, no gap or overlap.' },

/* Peds endpoint part 2, section 15 "Model Final Exam 4", QUARTER D (n61-n80 of 80), pp.1757-1921 range,
   my pages 1883-1921 (answered pages only, step 2 throughout per the explicit page list in the task
   prompt -- p = 1883 + 2*(n-61)).
   Source: Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf
   Cache used: C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\0ffb5f86-a1df-4f33-a8c4-fc32a73946ba\scratchpad\ep2-index\native\pNNNN.jpeg (800x450 ceiling)
   OCR index NOT opened -- native JPEGs only, per brief S4.
   n is SECTION-GLOBAL per the task prompt's explicit n=page table (not re-derived from a preceding
   part's last entry, since parts run in parallel and part-C did not yet exist on disk when this
   quarter started -- confirmed by directory listing: only part-A and part-B were present).
   Printed question numbers (pr) walked page by page as staged; ⚠️ pr DIVERGES from n starting at the
   very first entry -- n61 prints pr=62. Divergence noted per entry and summarised in the report.
   Written one entry at a time, checked with check-part-ep.js after every append.
*/

{ n:61, pr:62, p:1883, key:4,
  stem:'An 18-month-old girl presents to her family doctor with coryza, cough, and a mild fever for 3 days. She feeds poorly and is unsettled at night. Her respiratory rate is 28/min. Chest examination reveals no recessions and bilateral equal air entry.What is the most likely diagnosis?',
  opts:['Bronchiolitis','Frontal sinusitis','Pneumonia','Tonsillitis','Common cold'],
  expl:'Mild coryzal symptoms, normal RR, and no chest recession indicate a simple viral upper respiratory infection.',
  note:'Read on native p1883, fully legible, no crop needed. Key highlighted yellow+bold+underline on option E "Common cold" (index 4). pr=62 printed, diverges from n=61 -- first entry of this quarter and the divergence starts here.' },

{ n:62, pr:63, p:1885, key:2,
  stem:'A healthy infant can sit without support, roll over, and crawl but cannot stand alone.What is her most likely developmental age?',
  opts:['4 months','6 months','9 months','13 months','16 months'],
  expl:'Sitting unsupported, rolling, and crawling without standing alone corresponds to a developmental age of around 9 months.',
  note:'Read on native p1885, fully legible. Key highlighted yellow+bold+underline on option C "9 months" (index 2). pr=63, n=62, +1 offset continues.' },

{ n:63, pr:64, p:1887, key:3,
  stem:'What is the optimal emergency management of a child presenting to the ER with severe croup?',
  opts:['Suction of the pharynx','IV epinephrine','Oral ampicillin','Nebulized epinephrine','Immediate intubation'],
  expl:'Severe croup with stridor at rest is treated urgently with nebulized epinephrine; intubation is reserved for impending airway obstruction.',
  note:'Read on native p1887, fully legible. Key highlighted yellow+bold+underline on option D "Nebulized epinephrine" (index 3). pr=64, n=63, +1 offset continues.' },

{ n:64, pr:65, p:1889, key:3,
  stem:'If the age of 18 months is the "red flag age" for walking unsupported, what is the percentage of normal children who achieve that skill by age 18 months?',
  opts:['27%','57%','77%','97.5%'],
  expl:'By 18 months, 97.5% of children can walk unsupported, making it a “red-flag age” for delayed walking.',
  note:'Read on native p1889, percentage numerals fully legible at native resolution (27/57/77/97.5), no crop needed given brief S4 numerals-off-image caution. Key highlighted yellow+bold+underline on option D "97.5%" (index 3). pr=65, n=64, +1 offset continues.' },

{ n:65, pr:65, p:1891, key:2,
  stem:'A 3-month-old baby is admitted with a diagnosis of bronchiolitis. Her condition has further worsened, and she has developed audible grunting sounds.What is the best pathophysiologic explanation for grunting in this baby?',
  opts:['Oxygen consumption is decreased with grunting, which helps resolve hypoxemia','During grunting, lung volume increases as more air moves through the conducting airways','Grunting increases end-expiratory pressure and promotes gas exchange','During grunting, the diameter of the bronchi and bronchioles is increased'],
  expl:'Grunting increases end-expiratory pressure, helping keep alveoli open and improve gas exchange in infants with respiratory distress.',
  note:'Read on native p1891, fully legible. Key highlighted yellow+bold+underline on option C "Grunting increases end-expiratory pressure and promotes gas exchange" (index 2). ⚠️ pr=65 printed here again -- same printed number as n=64 (p.1889), so the printed numbering repeats "65" twice. n stays sequential at 65 regardless per brief S5.' },

{ n:66, pr:66, p:1893, key:3,
  stem:'Which clinical feature strongly supports the diagnosis of asthma?',
  opts:['Daytime cough','Spasmodic cough','Persistent moist cough','The presence of symptoms between coughs'],
  expl:'Persistent symptoms, including between episodes of cough, strongly support asthma rather than transient coughs from viral infections.',
  note:'Read on native p1893, fully legible. Key highlighted yellow+bold+underline on option D "The presence of symptoms between coughs" (index 3). pr=66=n=66, numbering resynced with n after the repeated 65.' },

{ n:67, pr:67, p:1895, key:3,
  stem:'You are assessing the developmental milestones of a male child. He can copy a circle, but not a square.What is his expected age?',
  opts:['12 months','18 months','2 years','3 years','4 years'],
  expl:'Children typically copy a circle around 3 years, and a square a few months later.',
  note:'Read on native p1895, fully legible. Key highlighted yellow+bold+underline on option D "3 years" (index 3). pr=67=n=67.' },

{ n:68, pr:68, p:1897, key:4,
  stem:'Which organism readily causes disease by transmission from asymptomatic pharyngeal carriers?',
  opts:['Beta hemolytic Streptococcus','Staphylococci','Hemophilus influenzae','Gram-negative cocci','Streptococcal pneumoniae'],
  expl:'Unfortunately,  this question came in your  paper 1 Exam by wrong . It\'s related to paper 2',
  note:'Read on native p1897, fully legible. Key highlighted yellow+bold+underline on option E "Streptococcal pneumoniae" (index 4). pr=68=n=68. Box text transcribed verbatim including its own spacing/punctuation, per the standing silent-typo rule.' },

{ n:69, pr:69, p:1899, key:2,
  stem:'Which is a common cause of chronic wet (productive) cough in children?',
  opts:['Bronchial asthma','Habit cough','Persistent bacterial bronchitis','Tracheomalacia','Bacterial tracheitis'],
  expl:'Chronic wet cough that persists beyond acute infection often indicates persistent bacterial bronchitis in children.',
  note:'Read on native p1899, fully legible. Key highlighted yellow+bold+underline on option C "Persistent bacterial bronchitis" (index 2). pr=69=n=69.' },

{ n:70, pr:70, p:1901, key:3,
  stem:'Which clinical intervention is of evidence-based benefit in the treatment of acute bronchiolitis?',
  opts:['Nebulized hypertonic saline','Antibiotics','Corticosteroids','C-PAP','Bronchodilators'],
  expl:'',
  note:'Read on native p1901, fully legible. Key highlighted yellow+bold+underline on option D "C-PAP" (index 3). pr=70=n=70. No explanation box printed -- per brief S3 box-detection test, opened next page p.1902 before moving on: it is the ordinary unanswered twin of n71 (pr71, no highlight, no box), confirming this is a genuine boxless question, not an overflow.' },

{ n:71, pr:71, p:1903, key:3,
  stem:'What is the most sensitive clinical sign of pneumonia?',
  opts:['Inspiratory crepitations','Grunting','Working alae nasi','Fast breathing','Decreased breath sounds'],
  expl:'Tachypnea is the most sensitive clinical sign of pneumonia in children, even before crepitations or other signs appear.',
  note:'Read on native p1903, fully legible; already previewed via twin p1902 while checking n70 box-detection. Key highlighted yellow+bold+underline on option D "Fast breathing" (index 3). pr=71=n=71.' },

{ n:72, pr:72, p:1905, key:3,
  stem:'How does the "Automated otoacoustic emissions" hearing screening test used in Egypt function?',
  opts:['It tests for auditory neuropathy','It is a screening for the brain function','It is not affected by ambient noise','It establishes normal cochlear function'],
  expl:'Automated otoacoustic emissions test measures cochlear (outer hair cell) function to screen hearing in newborns.',
  note:'Read on native p1905, fully legible. Key highlighted yellow+bold+underline on option D "It establishes normal cochlear function" (index 3). pr=72=n=72.' },

{ n:73, pr:73, p:1907, key:3,
  stem:'What is the most common serious respiratory tract infection in infants?',
  opts:['Pneumonia','Croup','Pertussis','Bronchiolitis','Bronchitis'],
  expl:'This is the most common serious respiratory infection in infants, usually caused by RSV.',
  note:'Read on native p1907, fully legible. Key highlighted yellow+bold+underline on option D "Bronchiolitis" (index 3). pr=73=n=73.' },

{ n:74, pr:74, p:1909, key:3,
  stem:'Which is a clear indication for tonsillectomy in children?',
  opts:['Recurrent febrile viral respiratory tract infections with febrile convulsions','Exudative tonsillitis with positive monospot test','Two attacks of follicular tonsillitis in a two-month time','Seven episodes of exudative tonsillitis in the preceding year','A high ASOT after an episode of tonsillitis'],
  expl:'Recurrent, severe bacterial tonsillitis meeting this frequency is a clear surgical indication for tonsillectomy.',
  note:'Read on native p1909, fully legible, numerals ("Two", "two-month", "Seven") clear at native resolution, no crop needed. Key highlighted yellow+bold+underline on option D "Seven episodes of exudative tonsillitis in the preceding year" (index 3). pr=74=n=74.' },

{ n:75, pr:75, p:1911, key:3,
  stem:'You are assessing the developmental milestones of a male child. He can copy a circle, but not a square. What is his expected age?',
  opts:['12 months','18 months','2 years','3 years','4 years'],
  expl:'Copying a circle but not a square corresponds to around 3 years of age.',
  note:'Read on native p1911, fully legible. Key highlighted yellow+bold+underline on option D "3 years" (index 3). pr=75=n=75. ⚠️ FOLD OBSERVATION, recorded only, not decided: this stem/options/key are the same question as n67 (p.1895) -- identical stem content (only a line-wrap difference), identical 5 options, same key D "3 years"; n67s box wording differs slightly ("Children typically copy a circle around 3 years, and a square a few months later.") from this box ("Copying a circle but not a square corresponds to around 3 years of age."). Two separate entries staged per brief S7 -- nothing folded.' },

{ n:76, pr:76, p:1913, key:1,
  stem:'Sharon is an 11-year-old girl who has had occasional headaches for the last 3 months. Today was her first day at secondary school. During maths class she developed her usual throbbing left-sided headache, associated with nausea. Over the next hour, she lost her temporal vision in her right eye and found she only had minimal movement in her right arm. The left side of her mouth was drooping. Her parents were called, who rushed her to hospital. She is now feeling much better, has normal vision and can move her arm, although she has some residual weakness of her mouth. She has no significant medical history except some episodes of abdominal pain as a younger child. Her mother tells you that she also suffers from headaches. What is the most likely diagnosis?',
  opts:['Idiopathic intracranial hypertension','Migraine','Raised intracranial pressure due to a space-occupying lesion','Subarachnoid haemorrhage','Tension headache'],
  expl:'The child has a typical unilateral throbbing headache with nausea, visual aura, and family history, consistent with migraine.',
  note:'Read on native p1913, fully legible. Key highlighted yellow+bold+underline on option B "Migraine" (index 1). pr=76=n=76. Explanation box printed beside option A rather than below the stem, transcribed as printed regardless of layout position.' },

{ n:77, pr:77, p:1915, key:2,
  stem:'Clarissa, a cheerful 20-month-old white British girl, is referred to the child development clinic by her health visitor because she is not yet walking. She was born at term with no complications. She learnt to sit without support at 10 months, and is able to crawl, although she drags her right leg behind her. Her mother says that she has always been left-handed. Examination of the right arm and leg reveals reduced power but increased tone and reflexes. Which of these investigations would you choose to initially undertake to confirm the diagnosis of developmental delay in the child described in this clinical scenario?',
  opts:['Cranial ultrasound scan','EEG','CT or MRI scan of the brain','Congenital infection screen','Thyroid function tests'],
  expl:'Focal neurological signs, delayed walking, hemiparesis, and abnormal tone suggest a structural brain problem; imaging is the initial investigation.',
  note:'Read on native p1915, fully legible. Key highlighted yellow+bold+underline on option C "CT or MRI scan of the brain" (index 2). pr=77=n=77.' },

{ n:78, pr:78, p:1917, key:2,
  stem:'What is the pattern of inheritance that occurs in the heterozygous state despite the presence of an intact copy of the relevant gene, and is characterized by equal affection of males and females?',
  opts:['X-linked recessive','X-linked dominant','Autosomal dominant','Autosomal recessive'],
  expl:'Diseases expressed in heterozygotes equally in males and females follow an autosomal dominant pattern.',
  note:'Read on native p1917, fully legible. Only 4 options printed (A-D), none omitted -- confirmed by re-reading the page. Key highlighted yellow+bold+underline on option C "Autosomal dominant" (index 2). pr=78=n=78.' },

{ n:79, pr:79, p:1919, key:2,
  stem:'Which of the following drug classes is among the preventer therapy for bronchial asthma?',
  opts:['Short-acting β2-agonists','Long-acting β2-agonists','Inhaled steroids','IV steroids'],
  expl:'Preventer therapy for asthma includes inhaled corticosteroids, which reduce airway inflammation; β2-agonists are for relief, not prevention.',
  note:'Read on native p1919, fully legible, β symbol clear. Only 4 options printed. Key highlighted yellow+bold+underline on option C "Inhaled steroids" (index 2). pr=79=n=79.' },

{ n:80, pr:80, p:1921, key:3,
  stem:'What is the median age for a child to achieve mature pincer grip?',
  opts:['5 months','7 months','9 months','10 months','12 months'],
  expl:'',
  note:'Read on native p1921, fully legible, numerals (5/7/9/10/12) clear. Key highlighted yellow+bold+underline on option D "10 months" (index 3). pr=80=n=80 -- this is the section-global 80th and LAST question. No explanation box printed -- per brief S3 box-detection test, opened next page p.1922: it is a red-text section-divider slide reading "Recently modified Questions" (see report), confirming section 15 ends here with no overflow box and section 16 begins at p.1922. Boundary proof complete.' }

];
