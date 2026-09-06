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
  note:'Read directly off p.1759 native JPEG, fully legible, no crop or twin needed. Key D (index 3) highlighted yellow with bold/underline. No figure.' }

{ n:2, pr:2, p:1761, key:1,
  stem:'A paediatrician is called to urgently review a 3-day-old baby on the postnatal ward. On arrival, the baby is profoundly cyanotic, and saturations do not improve with high-flow oxygen therapy. Examination reveals a single loud second heart sound but no murmur. Intravenous access is secured, and the blood gas shows severe metabolic acidosis. A chest X-ray shows increased pulmonary vasculature. What is the most likely diagnosis?',
  opts:['Atrial septal defect','Transposition of the great arteries','Patent ductus arteriosus','Tetralogy of Fallot','Ventricular septal defect'],
  expl:'Profound cyanosis unresponsive to oxygen with a single S2 and increased pulmonary blood flow is classic for TGA. Immediate recognition is essential for prostaglandin therapy.',
  note:'Read directly off p.1761 native JPEG, fully legible. Key B (index 1) highlighted yellow bold/underline. No figure.' }

{ n:3, pr:3, p:1763, key:3,
  stem:'A 4-year-old girl has been admitted with an acute febrile illness. A diagnosis of a lower respiratory tract infection has been made, and intravenous antibiotics started. The next morning, an ejection systolic murmur is noted. Heart sounds are normal, no pulmonary edema is present, and she appears well. What is the single most appropriate management plan?',
  opts:['Proceed to urgently arrange a CXR','Discuss with the local paediatric cardiology center for advice','Once medically fit for discharge, arrange an out-patient ECHO','Explain that this is an innocent murmur and inform the GP to re-evaluate after recovery','Change the present antibiotic'],
  expl:'In a clinically well child, an isolated ejection systolic murmur is usually innocent and does not require urgent investigations.',
  note:'Read directly off p.1763 native JPEG, fully legible. Key D (index 3) highlighted yellow bold/underline. No figure.' }

{ n:4, pr:4, p:1765, key:2,
  stem:"A 2-year-old boy presents with acute cough and stridor following 2 days of coryzal symptoms. He is afebrile but has marked intercostal recession, and a 'barking cough' is heard. What is the most likely causative organism?",
  opts:['Adenovirus','Respiratory syncytial virus','Parainfluenza virus','Rhinovirus','Influenza virus'],
  expl:'Croup presents with inspiratory stridor and a barking cough, most commonly caused by parainfluenza virus.',
  note:'Read directly off p.1765 native JPEG, fully legible. Key C (index 2) highlighted yellow bold/underline. No figure.' }

{ n:5, pr:5, p:1767, key:2,
  stem:'A newborn baby is noted to have coarse facies, a large fontanelle, hypotonia, and jaundice. Blood glucose is normal. Which investigation would most likely reveal the diagnosis?',
  opts:['Growth hormone','Karyotype','Thyroid function tests','Blood group','CK'],
  expl:'These features suggest congenital hypothyroidism; a TSH and T4 measurement confirms the diagnosis early for treatment.',
  note:'Read directly off p.1767 native JPEG, fully legible. Key C (index 2) highlighted yellow bold/underline. No figure.' }

{ n:6, pr:6, p:1769, key:3,
  stem:'A 7-day-old male baby presents with poor feeding and vomiting. He is lethargic and moderately dehydrated. Weight dropped from 3200 g to 2750 g. Blood glucose is 2.0 mmol/L, sodium is 124 mmol/L, potassium is 6.8 mmol/L. What test most likely confirms the diagnosis?',
  opts:['Abdominal ultrasound scan','ACTH level','Karyotype','17-Hydroxyprogesterone level','Chloride level'],
  expl:'This is classic salt-wasting congenital adrenal hyperplasia, confirmed by elevated 17-OHP.',
  note:'Read directly off p.1769 native JPEG, fully legible. All numerals (3200 g, 2750 g, 2.0 mmol/L, 124 mmol/L, 6.8 mmol/L) clearly legible, no crop needed, no exponents present. Key D (index 3) highlighted yellow bold/underline. No figure.' }

{ n:7, pr:7, p:1771, key:0,
  stem:'A paediatrician reviews a 2-day-old baby with a heart murmur. The baby is hypotonic, has single palmar creases, and epicanthic folds. What is the most likely heart lesion?',
  opts:['Atrioventricular septal defect','Atrial septal defect','Aortic stenosis','Coarctation of the aorta','Patent ductus arteriosus'],
  expl:'AVSD is common in Down syndrome (features: hypotonia, epicanthic folds, single palmar crease) and causes a murmur in neonates.',
  note:'Read directly off p.1771 native JPEG, fully legible. Key A (index 0) highlighted yellow bold/underline. No figure.' }

{ n:8, pr:8, p:1773, key:4,
  stem:'A 3-day-old baby is deeply cyanotic with cool peripheries and unresponsive saturations despite maximum oxygen. Femoral pulses are palpable, and a single loud second heart sound is heard. What is the next most important intervention?',
  opts:['Intravenous furosemide','Intravenous antibiotics','Intravenous fluid bolus of normal saline','Intravenous fluid bolus of dextrose','Intravenous infusion of prostaglandin E1'],
  expl:'This suggests a duct-dependent lesion; prostaglandin keeps the ductus arteriosus open to maintain systemic blood flow.',
  note:'Read directly off p.1773 native JPEG, fully legible. Key E (index 4) highlighted yellow bold/underline. No figure.' }

{ n:9, pr:9, p:1775, key:1,
  stem:"At a routine consultation, a 12-month-old boy is cruising around furniture and saying 'mama' and 'papa'. He only uses his left hand. What is the most likely finding?",
  opts:['Gross motor delay','Fine motor delay','Speech and language delay','Play and social delay','Global delay'],
  expl:'Using one hand preferentially may indicate delayed development of fine motor skills rather than gross motor or speech delays.',
  note:'Read directly off p.1775 native JPEG, fully legible. Key B (index 1) highlighted yellow bold/underline. No figure.' }

{ n:10, pr:10, p:1777, key:3,
  stem:'A 3-year-old boy is referred due to developmental concerns. He walks up/down stairs and jumps with both feet. He has poor eye contact, limited speech, and repetitive behaviors (e.g., opening and closing drawers). What is the most likely delay?',
  opts:['Gross motor delay','Fine motor delay','Speech and language delay','Play and social delay','Global delay'],
  expl:'Normal gross motor skills with impaired social interaction and repetitive behaviors suggest social/communication developmental delay, commonly seen in autism spectrum disorder.',
  note:'Read directly off p.1777 native JPEG, fully legible. Key D (index 3) highlighted yellow bold/underline. No figure.' }

{ n:11, pr:11, p:1779, key:1,
  stem:'A 14-year-old boy is admitted with diabetic ketoacidosis. After 12 hours of IV insulin and 0.9% saline, blood glucose is 22 mmol/L. He has good urine output. Which serum value is most likely decreased?',
  opts:['Serum sodium','Serum potassium','Serum lactate','Serum chloride','Serum calcium'],
  expl:'Hyperglycemia causes osmotic water shift, diluting serum sodium; insulin therapy can worsen hyponatremia temporarily.',
  note:"Read directly off p.1779 native JPEG, fully legible. Numerals (0.9% saline, 22 mmol/L, 12 hours) all clear, no crop needed. Key B 'Serum potassium' (index 1) highlighted yellow bold/underline. Flagging: the printed explanation box discusses sodium dilution, not potassium -- the box's own reasoning does not match the highlighted key. Stage the key as printed per brief §10; not disputed here. No figure." }

{ n:12, pr:12, p:1781, key:2,
  stem:"A 5-week-old boy presents with projectile vomiting for 48 hours. He is hungry after vomiting and hasn't opened bowels in 3 days. A mass is felt in the left upper quadrant. Blood gas: pH 7.50, pCO2 5.5 kPa, HCO3 30 mmol/L. What does this blood gas indicate?",
  opts:['Normal findings','Metabolic acidosis','Metabolic alkalosis','Respiratory acidosis','Respiratory alkalosis'],
  expl:'Vomiting causes loss of gastric acid, leading to raised pH and bicarbonate (metabolic alkalosis).',
  note:'Read directly off p.1781 native JPEG, fully legible. Numerals (pH 7.50, pCO2 5.5 kPa, HCO3 30 mmol/L, 48 hours, 3 days) all clear, no crop needed, no exponents on the page. Key C (index 2) highlighted yellow bold/underline. No figure.' }

{ n:13, pr:13, p:1783, key:2,
  stem:'A 3-year-old girl with complex congenital heart disease is admitted with fever. On examination, her temperature is 39.5°C, and there is a loud ejection systolic murmur. Her CRP is 250 mg/L, and a transthoracic echocardiogram confirms vegetations. What is the most likely causative pathogen?',
  opts:['Streptococcus pneumoniae','Streptococcus pyogenes','Streptococcus viridans','Group A haemolytic streptococcus','Group B haemolytic streptococcus'],
  expl:'Viridans streptococci are the most common cause of infective endocarditis in children with underlying heart defects.',
  note:'Read directly off p.1783 native JPEG, fully legible. Numerals (39.5°C, CRP 250 mg/L) clear, no crop needed. Key C (index 2) highlighted yellow bold/underline. No figure.' }

{ n:14, pr:14, p:1785, key:4,
  stem:'A 36-hour-old baby is due to have his newborn check prior to discharge. The paediatrician notes that the antenatal serology is incomplete because the mother declined testing. The baby is symmetrically growth-restricted, red reflexes are bilaterally absent, and a heart murmur is noted. Femoral pulses can be palpated, and the baby is pink and otherwise well. What is an echocardiogram most likely to show?',
  opts:['Ventricular septal defect','Coarctation of aorta','Atrial septal defect','Tetralogy of Fallot','Patent ductus arteriosus'],
  expl:'',
  note:'Read directly off p.1785 native JPEG, fully legible. Key E (index 4) highlighted yellow bold/underline. No explanation box printed on p.1785. Per brief §3a, checked next page p.1786 for a possible overflow box: p.1786 is the UNANSWERED twin of Q15 (no highlight, matches n15 stem at p.1787) -- not a box, confirming n14 genuinely prints no explanation. No figure.' }

{ n:15, pr:15, p:1787, key:2,
  stem:'A 3-month-old female infant presents with a 2-day history of coryzal symptoms and increased work of breathing. Her mother reports she had two wet nappies over the last 24 hours and is taking half of her bottle feeds. Her heart rate is 150 beats per minute, and she has a respiratory rate of 60 per minute with saturations of 96% in air. On examination, she is alert, well perfused, and with slight recession. Clinical findings are consistent with bronchiolitis. What is the most appropriate management?',
  opts:['Admit and give supplemental oxygen','Admit and start CPAP','Admit and give nasogastric feeds','Admit for regular nebulizers','Admit for intravenous antibiotics'],
  expl:'Supportive care includes maintaining hydration; oxygen is not required as saturations are adequate.',
  note:'Read directly off p.1787 native JPEG, fully legible. Numerals (2-day, 24 hours, HR 150 bpm, RR 60/min, sats 96%) all clear, no crop needed. Key C (index 2) highlighted yellow bold/underline. No figure. This is the answered twin of the boxless p.1786 seen while checking n14.' }

{ n:16, pr:16, p:1789, box:1790, key:4,
  stem:'A 4-year-old girl is under outpatient review for asthma. Her regular treatment consists of a preventative steroid inhaler 200 micrograms BD and a reliever inhaler when required (about fortnightly). However, over the last 3 months, she has had to use her reliever inhaler every other day. Her nocturnal coughing has increased, resulting in disturbed sleep. What is the appropriate next step in care for this child?',
  opts:['Continue on the same dose of steroid inhaler','Increase the steroid inhaler dose to 400 micrograms BD','Start a course of oral steroids','Start oral theophylline','Add a long-acting beta agonist'],
  expl:"The child's asthma is not well controlled, shown by frequent reliever use and night-time symptoms. Guidelines recommend stepping up therapy by adding a LABA to the current low-dose inhaled steroid to improve control. Increasing the steroid dose or using oral/theophylline therapy is less preferred at this stage.",
  note:"Read p.1789 native JPEG for stem/options -- fully legible, numerals (200 micrograms BD, 400 micrograms BD, 3 months) clear, no crop needed. Key E (index 4) highlighted yellow bold/underline. p.1789 prints NO box; per task prompt and confirmed here, the explanation box overflows to p.1790, printed alone (no stem/options on that page), transcribed verbatim above. A portion of the box text is printed in red on the page (emphasis only); reproduced here as plain text -- colour is not part of this transcription convention. No figure." }

{ n:17, pr:17, p:1792, key:0,
  stem:'A 3-year-old girl is admitted with a 3-day history of coryzal symptoms followed by an acute history of breathing difficulty. She is previously fit and well apart from mild eczema, and the parents are non-smokers. She is thriving, and upon examination, she has widespread wheeze with no crepitations. What is the most likely diagnosis?',
  opts:['Viral wheeze','Asthma','Heart failure','Bronchiolitis','Recurrent aspiration'],
  expl:'Sudden onset wheeze after viral infection in previously well child suggests viral-induced wheeze.',
  note:'Read directly off p.1792 native JPEG, fully legible; printed number 17 confirms the page-list jump from p.1789 (n16) skipping the box-only p.1790 and unanswered p.1791. Key A (index 0) highlighted yellow bold/underline. No figure.' }

{ n:18, pr:18, p:1794, key:3,
  stem:"A 3-year-old boy with known asthma has been brought in by ambulance to the local emergency department with an acute severe exacerbation. He has already received salbutamol and ipratropium nebulizers together with an intravenous steroid. Upon reassessment, he appears exhausted with varying responsiveness. Fifteen litres of oxygen are needed to maintain his saturations, and auscultation of his chest reveals minimal breath sounds. What is the next most important step in this child's care?",
  opts:['Reassess 30 minutes later','Give intravenous antibiotics','Request a CXR','Give intravenous salbutamol','Admit to ward'],
  expl:'This child is in life-threatening asthma; urgent IV bronchodilator therapy is required.',
  note:"Read directly off p.1794 native JPEG, fully legible. 'Fifteen litres' spelled out on the page, transcribed as printed; '30 minutes' in option A clear. Key D (index 3) highlighted yellow bold/underline. No figure." }

{ n:19, pr:19, p:1796, key:3,
  stem:'A 24-month-old girl is admitted to the department by her mother with fever. At triage, her temperature is 38.7°C, other vital signs are all within normal limits, and she is given antipyretics pending medical review. She is reviewed by the doctor 90 minutes later, and her temperature is now 37.7°C. Clinical examination reveals a well-hydrated and clinically well child with good social interaction. There are no localizing features and no apparent source for her fever. What is the most appropriate next step in her care?',
  opts:['Request a CXR','Take blood for inflammatory markers','Take a blood culture','Request a urine dipstick','Discharge the child home'],
  expl:'In toddlers with fever without a clear source, a urinary tract infection is a common hidden cause. A urine dipstick provides a quick, non-invasive screen to detect possible UTI.',
  note:'Read directly off p.1796 native JPEG, fully legible. Numerals (24-month-old, 38.7°C, 90 minutes, 37.7°C) all clear, no crop needed. Key D (index 3) highlighted yellow bold/underline. No figure.' }

{ n:20, pr:20, p:1798, key:0,
  stem:'A 4-year-old girl is admitted with fever, difficulty breathing, and cough. A diagnosis of left lower lobe pneumonia is made, and intravenous antibiotics are initiated. What is the most likely pathogen?',
  opts:['Streptococcus pneumoniae','Haemophilus influenzae','Mycoplasma pneumoniae','Chlamydia trachomatis','E. coli'],
  expl:'S. pneumoniae is the most common cause of community-acquired bacterial pneumonia in young children.',
  note:'Read directly off p.1798 native JPEG, fully legible. Key A (index 0) highlighted yellow bold/underline. Option E is the abbreviated genus "E. coli", a genuine option (matches check-part-ep.js\'s documented single-prefix exception), not a list-letter slip. No figure.' }
