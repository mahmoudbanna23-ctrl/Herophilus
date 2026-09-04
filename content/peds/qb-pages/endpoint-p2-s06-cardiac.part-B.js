/* Pediatrics endpoint PART 2, Section 6 "Cardiac disorders" (pp.607-792), PART B.
   Source: Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf -- NEVER modified, never opened
   directly (1993 pp, 272 MB); read from pre-rendered images only:
     native JPEG <SCRATCH>\ep2-index\native\pNNNN.jpeg (800x450, the book's own resolution ceiling)
     hires PNG  <SCRATCH>\ep2-index\hires\pNNNN.png (upscale of the same pixels, no extra detail)
   OCR index content\peds\qb-pages\ocr\ep2\ was NOT opened during this pass -- search index only.

   This half covers n:17-32 of section 6 (n is SECTION-GLOBAL, continues from part A, does not
   restart). Section 6 does NOT alternate uniformly -- three runs, with single interposed `notes`
   pages at p.636 and p.689 each flipping parity. Part B's pages (all confirmed answered, all
   present in the pre-existing render cache, no re-render performed):

     n17 p.662  n18 p.664  n19 p.666  n20 p.668
     n21 p.670  n22 p.672  n23 p.674  n24 p.676
     n25 p.678  n26 p.680  n27 p.682  n28 p.684
     n29 p.686  n30 p.688  n31 p.691  n32 p.693

   p.689 is the interposed notes page; p.690 is the unanswered twin of n:31. Unanswered twins used
   as a free second reading wherever the answered page is not fully clear: p-1 for each page above,
   i.e. 661,663,665,667,669,671,673,675,677,679,681,683,685,687,690,692.

   THIS IS A STAGING HALF, NOT AN ARRAY: bare `{ ... }` object literals separated by one blank
   line, no wrapper, no commas. node --check on this file WILL fail and that failure is meaningless
   -- validate with: node tools/bank-harness/check-part-ep.js <this file>
*/

{ n:17, pr:17, p:662, key:1,
  stem:'Robert, a 3-year-old boy, has had a runny nose and wheeze for 3 days. On examination, his pulse is 100 beats/min. Pulses are normal. There is an ejection systolic murmur heard loudest at the upper right sternal edge, which can also be heard over the carotid arteries but not at the back. In this case, which of the following would be the most likely findings on echocardiography?',
  opts:['Persistent ductus arteriosus','Aortic stenosis','Coarctation of the aorta','Transposition of the great arteries','Mitral regurgitation'],
  expl:'Aortic stenosis typically presents with an ejection systolic murmur at the upper right sternal edge that radiates to the neck, as in this case.',
  note:'p.662 read at native res, fully legible. Highlighted option B "Aortic stenosis", bold+underlined+yellow, key=1. Small side box in reduced font to the right of the options -- printed explanation box, transcribed verbatim. pr=17=n, no divergence. Straightforward acquired/congenital cardiac murmur question, plainly cardiac.' }

{ n:18, pr:18, p:664, key:1,
  stem:'A paediatrician is called to urgently review a 3-day-old baby on the postnatal ward. On arrival, the baby is profoundly cyanotic and saturations do not improve with high-flow oxygen therapy. Examination reveals a single loud second heart sound but no murmur. Intravenous access is secured and the blood gas shows severe metabolic acidosis. A CXR shows increased pulmonary vasculature. What is the most likely diagnosis?',
  opts:['Atrial septal defect','Transposition of the great arteries','Patent ductus arteriosus','Tetralogy of Fallot','Ventricular septal defect'],
  expl:'In TGA, oxygen therapy does not improve cyanosis because the systemic and pulmonary circulations are in parallel rather than in series. A single second heart sound and severe hypoxia are typical.',
  note:'p.664 read at native res, fully legible. Highlighted option B "Transposition of the great arteries", bold+underlined+yellow, key=1. Small side box in reduced font to the right, printed box transcribed verbatim. pr=18=n. Cyanotic congenital heart disease vignette, plainly cardiac.' }

{ n:19, pr:19, p:666, key:3,
  stem:'A 4-year-old girl has been admitted to the ward with an acute febrile illness. A diagnosis of lower respiratory tract infection has been made, and intravenous antibiotics have been commenced. The following morning on the ward round, the medical team notes she has an ejection systolic murmur with normal heart sounds and no radiation. She appears clinically well in herself. What would be the single most appropriate management plan?',
  opts:['Proceed to urgently arrange a CXR','Discuss with the local paediatric cardiology center for advice','Once medically fit for discharge, arrange an outpatient ECHO','Explain that this is an innocent murmur and inform the GP to re-evaluate the child once she has recovered from illness'],
  expl:'In the context of illness, a new murmur may be functional due to increased cardiac output. If the child is otherwise well, it is safe to follow up after recovery.',
  note:'p.666 read at native res, fully legible. Only FOUR options printed (A-D), ladder genuinely stops at D. Highlighted option D "Explain that this is an innocent murmur...", bold+underlined+yellow, key=3. Small side box in reduced font, printed box transcribed verbatim. pr=19=n. Innocent/functional murmur, plainly cardiac.' }

{ n:20, pr:20, p:668, key:4,
  stem:'A mother on the postnatal ward has urgently requested a medical review for her 3-day-old baby who appears blue. On arrival, the baby is deeply cyanotic with cool peripheries and saturations not improving despite maximum oxygen therapy. Femoral pulses are palpable and a single, loud second heart sound can be heard, but no murmur. The baby is brought to the neonatal unit for further care. What is the next most important intervention?',
  opts:['Intravenous furosemide','Intravenous antibiotics','Intravenous fluid bolus of normal saline','Intravenous fluid bolus of dextrose','Intravenous infusion of prostaglandin E1'],
  expl:'In duct-dependent congenital heart disease, prostaglandin E1 keeps the ductus arteriosus open to maintain systemic or pulmonary blood flow. This is critical in a cyanotic neonate.',
  note:'p.668 read at native res, fully legible. Highlighted option E "Intravenous infusion of prostaglandin E1", bold+underlined+yellow, key=4. Small side box in reduced font, printed box transcribed verbatim. pr=20=n. Duct-dependent cyanotic CHD, plainly cardiac.' }

{ n:21, pr:21, p:670, key:2,
  stem:'A 3-year-old girl with complex congenital heart disease is admitted with fever. On examination, her temperature is 39.5°C and there is a loud ejection systolic murmur. Her CRP is 250 mg/L and a transthoracic echocardiogram confirms vegetations. What is the most likely causative pathogen?',
  opts:['Streptococcus pneumoniae','Streptococcus pyogenes','Streptococcus viridans','Group A haemolytic streptococcus','Group B haemolytic streptococcus'],
  expl:'Streptococcus viridans is the most common cause of infective endocarditis, especially in children with underlying congenital heart disease and a new murmur.',
  note:'p.670 read at native res, fully legible. Highlighted option C "Streptococcus viridans", bold+underlined+yellow, key=2. Small side box in reduced font, printed box transcribed verbatim. pr=21=n. NOT a plain congenital/acquired cardiac question -- this is infective endocarditis (causative organism) in a child with underlying CHD, filed here under cardiac by the book.' }

{ n:22, pr:22, p:672, key:4,
  stem:'A 36-hour-old baby is due to have his newborn check prior to discharge. The paediatrician notes that the antenatal serology is incomplete because the mother declined testing. The baby is symmetrically growth restricted, red reflexes are bilaterally absent, and a heart murmur is noted. Femoral pulses can be palpated, the baby is pink and otherwise well. What is an echocardiogram most likely to show?',
  opts:['Ventricular septal defect','Coarctation of the aorta','Atrial septal defect','Tetralogy of Fallot','Patent ductus arteriosus'],
  expl:'This baby has symmetrical IUGR, absent red reflexes (cataracts), and a heart murmur, with incomplete maternal serology—highly suspicious for congenital rubella. Rubella classically causes patent ductus arteriosus (PDA), which fits the findings of a murmur with good pulses and perfusion.',
  note:'p.672 read at native res, fully legible. Highlighted option E "Patent ductus arteriosus", bold+underlined+yellow, key=4. Side box in reduced font, printed box transcribed verbatim. pr=22=n. NOT a plain cardiac question -- congenital rubella syndrome (TORCH) vignette asking for the resulting cardiac lesion (PDA); filed here under cardiac by the book because the answer is the cardiac finding.' }

{ n:23, pr:23, p:674, key:3,
  stem:'It can be possible to assess whether a murmur is significant by its character and associated features. Which of the following is not a feature of an innocent heart murmur?',
  opts:['No radiation','Varies with posture','Systolic','Third heart sound','No symptoms'],
  expl:'A third heart sound suggests ventricular dysfunction and is not a feature of an innocent murmur. Innocent murmurs are typically systolic, soft, and positional.',
  note:'p.674 read at native res, fully legible. Highlighted option D "Third heart sound", bold+underlined+yellow, key=3. Side box in reduced font, printed box transcribed verbatim. pr=23=n. Innocent murmur features, plainly cardiac.' }

{ n:24, pr:24, p:676, key:1,
  stem:'A 3-day-old male infant is noted to have a cardiac murmur. Four-limb blood pressures are normal, but oxygen saturation is 78% and does not improve with oxygen therapy. Which of the following congenital heart defects is the most likely diagnosis?',
  opts:['Patent ductus arteriosus','Tetralogy of Fallot','Ventricular septal defect','Atrial septal defect','Coarctation of the aorta'],
  expl:'Impaired oxygenation suggests right-to-left shunt, which is caused by tetralogy of Fallot or TGA. Tetralogy of Fallot comprises pulmonary stenosis, overriding aorta, ventricular septal defect and right ventricular hypertrophy.',
  note:'p.676 read at native res, fully legible. Highlighted option B "Tetralogy of Fallot", bold+underlined+yellow, key=1. Side box in reduced font, printed box transcribed verbatim (a small leading space before "Impaired" in the box print, not reproduced as it is a formatting artefact of the box padding, not content). pr=24=n. Cyanotic CHD, plainly cardiac.' }

{ n:25, pr:25, p:678, key:0,
  stem:'A paediatrician is asked to review a heart murmur in a 2-day-old baby born by vaginal delivery following an uneventful pregnancy to a primiparous mother aged 38. The perinatal period was normal, and the baby has been feeding well. On examination, the baby is hypotonic and has single palmar creases and epicanthic folds. What is the most likely heart lesion?',
  opts:['Atrioventricular septal defect','Atrial septal defect','Aortic stenosis','Coarctation of the aorta','Patent ductus arteriosus'],
  expl:'The baby shows features suggestive of Down syndrome (hypotonia, single palmar crease, epicanthic folds). The most common congenital heart defect associated with Down syndrome is an atrioventricular septal defect (AVSD).',
  note:'p.678 read at native res, fully legible. Highlighted option A "Atrioventricular septal defect", bold+underlined+yellow, key=0. Side box in reduced font, printed box transcribed verbatim. pr=25=n. NOT a plain cardiac question -- Down syndrome features vignette asking for the associated cardiac lesion (AVSD); filed here under cardiac by the book.' }

{ n:26, pr:26, p:680, key:2,
  stem:'An 8-month-old girl is brought to the emergency room because she appears ill. She is pale and dyspneic with a respiratory rate of 80 breaths/min. Heart rate is 195 bpm, heart sounds are weak, and a gallop is heard. Chest auscultation reveals fine crepitations. There is cardiomegaly on chest X-ray. She had low-grade fever and rhinorrhea 2 days before. What is the most probable diagnosis?',
  opts:['Acute glomerulonephritis','Bronchopneumonia','Viral myocarditis','Pericarditis','Wide VSD'],
  expl:'This child presents with signs of acute heart failure: tachypnea, tachycardia, weak heart sounds, gallop rhythm, and cardiomegaly. The recent viral prodrome (fever and rhinorrhea) and fine lung crepitations suggest pulmonary congestion due to impaired myocardial function, which is characteristic of viral myocarditis.',
  note:'p.680 read at native res, fully legible. Highlighted option C "Viral myocarditis", bold+underlined+yellow, key=2. Side box in reduced font, printed box transcribed verbatim. pr=26=n. Acquired cardiac (viral myocarditis presenting as heart failure), plainly cardiac.' }

{ n:27, pr:27, p:682, key:0,
  stem:'A 9 months-old infant presented with sweating, tachypnea, severe tachycardia, refusal of feeding over the past couple of hours. Pulses are thread (HR 250 /min). No murmur is heard. What is the most probable diagnosis?',
  opts:['Supraventricular tachycardia','Rheumatic carditis','VSD','Coarctation of aorta','ASD'],
  expl:'The infant has very fast HR (250/min), sweating, tachypnea, poor feeding, and no murmur, which strongly suggests SVT rather than structural heart disease.',
  note:'p.682 read at native res, fully legible. Options lowercase-lettered a-e. Highlighted option a "Supraventricular tachycardia", bold+underlined+yellow, key=0. Explanation box printed below the options, transcribed verbatim. pr=27=n. Stem prints "Pulses are thread" (verbatim as printed, presumably intending "thready" -- transcribed silently, not corrected). SVT, plainly cardiac.' }

{ n:28, pr:28, p:684, key:2,
  stem:'Serious complications of Fallot tetralogy include:',
  opts:['Eisenmenger syndrome','Recurrent pneumonia','Cerebrovascular accidents','Pulmonary hypertension'],
  expl:'Children with Fallot’s tetralogy are at risk of brain abscesses and strokes due to polycythemia and right-to-left shunting. Pulmonary hypertension and Eisenmenger are less common.',
  note:'p.684 read at native res, fully legible. Only FOUR options printed (a-d), ladder genuinely stops at d. Highlighted option c "Cerebrovascular accidents", bold+underlined+yellow, key=2. Explanation box printed below the options, transcribed verbatim. pr=28=n. Complications of Tetralogy of Fallot, plainly cardiac.' }

{ n:29, pr:29, p:686, key:0,
  stem:'Nada, a 5-month-old female infant, has a fever and runny nose for 2 days. On examination, her temperature is 38.3°C, her tongue is pink, and no chest retractions are noted. Her pulse is 160 beats/min, heart sounds are normal, but a soft systolic murmur is heard at the left sternal edge. Pulses are normal. Which of the following is the most likely explanation for the murmur?',
  opts:['Normal "innocent murmur"','Ventricular septal defect','Patent ductus arteriosus','Aortic stenosis'],
  expl:'The baby is otherwise healthy with only a soft systolic murmur during fever, which is typical of an innocent murmur that becomes more audible during illness.',
  note:'p.686 read at native res, fully legible. Only FOUR options printed (a-d), ladder genuinely stops at d. Highlighted option a "Normal innocent murmur", bold+underlined+yellow, key=0. Explanation box printed below the options, transcribed verbatim. pr=29=n. Innocent murmur, plainly cardiac.' }

{ n:30, pr:30, p:688, key:3, box:689,
  stem:'Which of the following statements about ventricular septal defect (VSDs) is most factually correct?',
  opts:['VSDs are most commonly located in the muscular part of the ventricular septum','VSDs will cause an audible flow murmur across the defect, usually audible from birth','Infective endocarditis is a complication seen in approx. 10% of all children with VSDs','VSDs are associated with higher oxygen content in the blood of the right ventricle than the right atrium','VSDs are usually associated with right ventricular volume overload'],
  expl:'The left-to-right shunt increases oxygen saturation in the RV compared to the RA, making this the most accurate statement.',
  note:'p.688 read at native res, fully legible; prints stem and options only, NO explanation box on p.688 itself. Per brief 3a, opened the very next page (689) before moving on -- p.689 IS the overflow box: a single small bordered box in reduced font, alone on an otherwise blank slide, and its text ("left-to-right shunt increases oxygen saturation in the RV compared to the RA") matches p.688 option d exactly. So p.689 is staged as box:689 on this entry and gets no entry of its own -- this is the section-profile "interposed notes page at p.689" identified in endpoint-p2-section-map.md, and reading it settles it as an overflow box rather than an unrelated notes slide. Highlighted option d "VSDs are associated with higher oxygen content...", bold+underlined+yellow, key=3. pr=30=n. VSD facts, plainly cardiac. This is also the last page of profiled Run 2 (even parity, 638-688); Run 3 resumes at p.691 (odd).' }

{ n:31, pr:31, p:691, key:4,
  stem:'Which of the following statements about patent ductus arteriosus is most factually correct?',
  opts:['The incidence of persistent ductus arteriosus is increased in males compared with females','Cardiac catheter color placement is the treatment of choice for symptomatic infants with persistent ductus arteriosus post birth','PDA can be treated with prostaglandins','PDA always closes spontaneously in term infants','The incidence of PDA is increased in preterm infants and those with perinatal hypoxia and/or distress'],
  expl:'PDA is especially common in preterm babies and those with perinatal asphyxia. In term infants, it usually closes spontaneously.',
  note:'p.691 read at native res, fully legible. Highlighted option e "The incidence of PDA is increased in preterm infants...", bold+underlined+yellow, key=4. Explanation box printed below the options, transcribed verbatim. pr=31=n. Option b prints "Cardiac catheter color placement" verbatim as printed (almost certainly a scanning/typesetting slip for "coil placement", not corrected, per the numbers/units exception this is not one so left silent). p.690 is the unanswered twin (per section profile) -- opened, stem and options match p.691 word for word, no box (as expected for an unanswered page). This is the first page of profiled Run 3 (odd parity, 690-791), immediately after the interposed p.689 overflow box. PDA facts, plainly cardiac.' }

{ n:32, pr:32, p:693, key:4,
  stem:'A 2-month-old infant presents with poor feeding, sweating during feeding, and poor weight gain. Vital signs reveal a respiratory rate of 67/min, pulse of 165/min, and normal values of blood pressure in the upper and lower extremities. The cardiac examination reveals a graded pansystolic murmur heard over left parasternal line. What is the first step investigation you would order?',
  opts:['Plain X ray chest and heart','ECG','Blood culture','Cardiac catheterization','Echocardiography'],
  expl:'First-line and most definitive investigation for congenital heart disease with murmur is echocardiography, as it directly visualizes cardiac structure and flow.',
  note:'p.693 read at native res; highlight on option e looked faint/uncertain at native resolution so escalated to a 300 dpi crop (saved <SCRATCH>\\\\ep2-stage\\\\p-0693.jpg) which confirmed a clear yellow highlight, bold and underlined, on "e. Echocardiography" -- key=4. Explanation box printed to the right of the options, transcribed verbatim. pr=32=n. VSD/heart-failure vignette asking for first-line investigation, plainly cardiac. This is the last page of my assigned range (n:17-32); one page past (694) rendered next to check for any structural break before handing back.' }
