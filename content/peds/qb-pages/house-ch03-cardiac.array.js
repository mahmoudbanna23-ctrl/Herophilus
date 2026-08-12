/* House — "Dr. HOUSE in pediatric medicine & surgery MCQs" (Semester 8\Pedo\Questions\pediatric .pdf)
 * Part I, chapter 3: CARDIAC DISORDERS
 *
 * VERBATIM STAGING RECORD. Transcribed 2026-08-12.
 *
 * PAGE MAP ACTUALLY USED — the PDF is a 2-up scan of a book spread:
 *   book page B is on PDF page floor(B/2)+1; left half = 2P-2, right half = 2P-1.
 *   PDF p.13 = book pp. 24|25   chapter banner "Cardiac disorders" + Q1-Q6 (Q6 stem/opts only)
 *   PDF p.14 = book pp. 26|27   Q6 answer line, Q7-Q12
 *   PDF p.15 = book pp. 28|29   Q13-Q18
 *   PDF p.16 = book pp. 30|31   Q19-Q24  (book p.31 ends the chapter; blank below Q24)
 *   PDF p.17 = book pp. 32|33   rendered as the overrun check: opens "Haematological disorders"
 *                               with the numbering restarting at 1. Chapter 3 does NOT overrun.
 *
 * 24 QUESTIONS PRINTED, numbered 1-24. Counted by reading every page.
 * ZERO explanation boxes in this chapter — same as chapters 1 and 2. Every answer is a bare
 * "Answer: X." line inside the question's own box; there are no separate answer pages.
 *
 * "Select one answer only." is inconsistent boilerplate: printed on Q1-Q5, Q11-Q17, Q23 (per the
 * scans) and absent elsewhere. Recorded here in `boiler`, STRIPPED from the drafted stems.
 *
 * FIVE FIGURES, all printed WITH the question in the right-hand third of the box, all already
 * cropped and verified on disk:
 *   Q6  -> app\assets\q\q-pd-hd-25.jpg
 *   Q7  -> app\assets\q\q-pd-hd-26a.jpg
 *   Q8  -> app\assets\q\q-pd-hd-26b.jpg
 *   Q9  -> app\assets\q\q-pd-hd-26c.jpg
 *   Q10 -> app\assets\q\q-pd-hd-27.jpg
 * Each is a phonocardiogram-style trace of one cardiac cycle: bars = heart sounds, zig-zag = murmur.
 * They were considered for markdown transcription instead of cropping (the resume file raised this
 * for Q6) and REJECTED: the content of each figure is the ENVELOPE and TIMING of the murmur relative
 * to S1 and S2, which no table or ASCII rendering reproduces faithfully. The labels alone (A2, P2,
 * EC) do not carry the question. Crops kept.
 *
 * Fields: n = printed number, p = book page(s), boiler = "Select one answer only." present,
 *         stem, opts (A..E in printed order), key (printed letter), fig, note.
 */

var PEDHD_CARD_STAGED = [

{ n:1, p:'24', boiler:true,
  stem:'Alan, a 4-month-old boy, sees his general practitioner for an ear infection. On listening to his chest a heart murmur is heard. Which one of the following features most suggests that it requires further investigation?',
  opts:['A thrill','Disappearance of murmur on lying flat','Murmur maximal at the left sternal edge','Sinus arrhythmia','Systolic murmur'],
  key:'A' },

{ n:2, p:'24', boiler:true,
  stem:'Which of the following is the most common type of congenital heart disease in the UK?',
  opts:['Atrial septal defect','Persistent arterial duct','Pulmonary stenosis','Tetralogy of Fallot','Ventricular septal defect'],
  key:'E' },

{ n:3, p:'24', boiler:true,
  stem:'Sunil, a 3-month-old infant, presents with breathlessness and sweating on feeding. He has had several chest infections. You suspect heart failure. Which of the following is most likely to be correct regarding his heart failure?',
  opts:['Hepatomegaly is not a common feature at this age','It is caused by Eisenmenger syndrome','It is due to left heart obstruction','It is due to a left-to-right shunt','It is due to an increase in right-to-left shunt'],
  key:'D' },

{ n:4, p:'25', boiler:true,
  stem:'Tariq, who is 6 weeks old, is admitted directly from the cardiology clinic with heart failure. He has a large ventricular septal defect. The cardiologist has recommended treatment with furosemide and spironolactone. His mother wants to know why he has only now started to have problems. Which of the following statements provides the best explanation?',
  opts:['At birth and for the first few weeks the ductus arteriosus remained patent and this balanced the flow across the septal defect','Pulmonary vascular resistance is increasing and blood is now flowing from right to left','The left ventricle is now failing due to its progressive dilatation','The pulmonary vascular resistance falls after birth and now flow from left to right across the septal defect is much greater','Volume overload results in decreased return to the left ventricle and a reduction in cardiac output related to a reduced end-diastolic filling pressure'],
  key:'D' },

{ n:5, p:'25', boiler:true,
  stem:'John, who is 6 years old, presents to the Emergency Department feeling sick and dizzy. He was brought to hospital by a paramedic crew who were called after he became unwell at school. His heart rate was noted to be very quick, at 260 beats/min and supraventricular tachycardia is diagnosed. He says he can feel his heart beating quickly and looks pale. He is crying, saying he wants his mother. Which of the following should be undertaken by the attending team?',
  opts:['Adenosine via a large bore intravenous line','Bilateral carotid sinus massage','Direct current cardioversion','Reassure that it will resolve spontaneously','Vagal stimulation manoeuvre'],
  key:'E',
  note:'DEFECT (a): 36)Myocardial diseases.pptx slide 11 states "for hemodynamically stable patients, IV adenosine is the first line" and does not mention vagal manoeuvres at all. The bank keys the vagal manoeuvre. Keyed as printed; discrepancy noted in the explanation. DEFECT (b): option B, BILATERAL carotid sinus massage, is a manoeuvre that is contraindicated in practice — a false distractor inside a correctly keyed question, invisible to any key comparison.' },

{ n:6, p:'25 (answer on 26)', boiler:false,
  stem:'Given the findings shown in the opposite figure, which of the following is the most likely congenital heart disease that is associated with the shown clinical findings?',
  opts:['Aortic stenosis','Atrial septal defect','Coarctation of the aorta','Mitral stenosis','Persistent ductus arteriosus'],
  key:'E',
  fig:'q-pd-hd-25',
  note:'The question box straddles the spread: stem, figure and options on book p.25, the "Answer: E." line alone at the top of book p.26. Figure: S1 bar, then a murmur of near-uniform amplitude that runs through the whole of systole, CONTINUES ACROSS A2 and P2 (labelled, normally split) and decrescendos through diastole to the next S1 — i.e. a continuous murmur.' },

{ n:7, p:'26', boiler:false,
  stem:'Given the findings shown in the opposite figure, which of the following is the most likely congenital heart disease that is associated with the shown clinical findings?',
  opts:['Pulmonary stenosis','Atrial septal defect','Coarctation of the aorta','Mitral stenosis','Persistent ductus arteriosus'],
  key:'A',
  fig:'q-pd-hd-26a',
  note:'Figure: S1, then a thin early spike labelled EC, then a crescendo-decrescendo systolic murmur reaching A2; P2 is drawn as a SHORT bar, later and much smaller than A2.' },

{ n:8, p:'26', boiler:false,
  stem:'Given the findings shown in the opposite figure, which of the following is the most likely congenital heart disease that is associated with the shown clinical findings?',
  opts:['Aortic stenosis','Atrial septal defect','Coarctation of the aorta','Mitral stenosis','Persistent ductus arteriosus'],
  key:'B',
  fig:'q-pd-hd-26b',
  note:'Figure: S1, a short crescendo-decrescendo systolic murmur that finishes well before the second sound, then A2 and P2 drawn as two bars of EQUAL height separated by a WIDE gap. No ejection click.' },

{ n:9, p:'26', boiler:false,
  stem:'Given the findings shown in the opposite figure, which of the following is the most likely congenital heart disease that is associated with the shown clinical findings?',
  opts:['Pulmonary stenosis','Atrial septal defect','Ventricular septal defect','Mitral stenosis','Persistent ductus arteriosus'],
  key:'C',
  fig:'q-pd-hd-26c',
  note:'Figure: S1, then a murmur of uniform amplitude occupying the WHOLE of systole and running right up to A2/P2, which sit close together. Nothing in diastole.' },

{ n:10, p:'27', boiler:false,
  stem:'Given the findings shown in the opposite figure, which of the following is the most likely congenital heart disease that is associated with the shown clinical findings?',
  opts:['Pulmonary stenosis','Aortic stenosis','Ventricular septal defect','Mitral stenosis','Persistent ductus arteriosus'],
  key:'B',
  fig:'q-pd-hd-27',
  note:'Figure: S1, a thin early spike labelled EC, a crescendo-decrescendo systolic murmur, then A2 drawn SHORTER than P2. It is the mirror image of Q7: same click, opposite component of S2 diminished.' },

{ n:11, p:'27', boiler:true,
  stem:'Jack is 24 hours old and his mother notices when he is about to breastfeed that he is blue around the mouth. On examination, his tongue looks blue and there is peripheral cyanosis. His 1respiratory rate is 65 breaths/min. On auscultation of the chest there is no murmur. Pulses in all four limbs can be palpated and are equal in volume. He is watching you and moving his arms and legs vigorously whilst you examine him. In this case, which of the following would be the most likely findings on echocardiography?',
  opts:['Persistent ductus arteriosus','Aortic stenosis','Coarctation of the aorta','Transposition of the great arteries','Mitral regurgitation'],
  key:'D',
  note:'TYPO: prints "His 1respiratory rate is 65 breaths/min" — a stray digit 1 fused to the word. Repaired silently in the drafted stem.' },

{ n:12, p:'27', boiler:true,
  stem:'Sarah was born at term by spontaneous vaginal delivery and went home at 8 hours of age following a normal neonatal discharge examination. At 48 hours of age her mother found her looking pale and was unable to wake her. She was rushed to the Emergency Department. Her breathing was noted to be very shallow, her skin was cool and mottled and she was unresponsive to pain. She is resuscitated, and given intravenous fluids and broadspectrum antibiotics. On examination, the only palpable pulse is the right brachial pulse. In this case, which of the following would be the most likely findings on echocardiography?',
  opts:['Persistent ductus arteriosus','Aortic stenosis','Coarctation of the aorta','Transposition of the great arteries','Mitral regurgitation'],
  key:'C',
  note:'Prints "broadspectrum" as one word. Repaired silently.' },

{ n:13, p:'28', boiler:true,
  stem:'Jane, a previously fit and well 18-month-old girl, presents with frequent respiratory tract infections and wheeze. On examination there is a fixed and widely split second heart sound, an ejection systolic murmur best heard at the upper left sternal edge. In this case, which of the following would be the most likely findings on echocardiography?',
  opts:['Aortic stenosis','Persistent ductus arteriosus','Atrial septal defect','Coarctation of the aorta','Mitral regurgitation'],
  key:'C' },

{ n:14, p:'28', boiler:true,
  stem:'Anoushka, a 1-year-old girl, presents to the Emergency Department with a respiratory tract infection. She is pink and well-perfused. There is a thrill and pansystolic murmur at the lower left sternal edge. In this case, which of the following would be the most likely findings on echocardiography?',
  opts:['Atrial septal defect','Ventricular septal defect','Coarctation of the aorta','Mitral stenosis','Mitral regurgitation'],
  key:'B' },

{ n:15, p:'28', boiler:true,
  stem:'Debbie, a 3-month-old female infant is being reviewed in the paediatric outpatient clinic. She was referred as on her 6-week check the general practitioner heard a continuous murmur throughout the praecordium. She is well and thriving. All peripheral pulses are present and easily palpable. Oxygen saturation is 96% post-ductal. In this case, which of the following would be the most likely findings on echocardiography?',
  opts:['Atrial septal defect','Ventricular septal defect','Persistent ductus arteriosus','Mitral stenosis','Mitral regurgitation'],
  key:'C' },

{ n:16, p:'29', boiler:true,
  stem:'Nada, a 5 month old female infant has a fever and runny nose for 2 days. On examination she has a fever of 38.3°C and a runny nose. Her tongue is pink. Her breathing is normal. Pulse is 160 beats/min. Her heart sounds are normal but she has a soft systolic murmur at the left sternal edge. Pulses are normal. In this case, which of the following would be the most likely findings on echocardiography?',
  opts:['Atrial septal defect','Ventricular septal defect','Coarctation of the aorta','Persistent ductus arteriosus','Normal'],
  key:'E' },

{ n:17, p:'29', boiler:true,
  stem:'Robert, a 3-year-old boy, has had a runny nose and wheeze for 3 days. On examination his pulse is 100 beats/min. Pulses are normal. There is an ejection systolic murmur heard loudest at the upper right sternal edge, which can also be heard over the carotid arteries but not at the back. In this case, which of the following would be the most likely findings on echocardiography?',
  opts:['Persistent ductus arteriosus','Aortic stenosis','Coarctation of the aorta','Transposition of the great arteries','Mitral regurgitation'],
  key:'B' },

{ n:18, p:'29', boiler:false,
  stem:'A paediatrician is called to urgently review a 3-day-old baby on the postnatal ward. On arrival, the baby is profoundly cyanotic and saturations do not improve with high flow oxygen therapy. Examination reveals a single loud second heart sound but no murmur. Intravenous access is secured and the blood gas shows severe metabolic acidosis. A CXR performed shows increased pulmonary vasculature. What is the most likely diagnosis?',
  opts:['Atrial septal defect','Transposition of the great arteries','Patent ductus arteriosus','Tetralogy of Fallot','Ventricular septal defect'],
  key:'B' },

{ n:19, p:'30', boiler:false,
  stem:'A 4-year-old girl has been admitted to the ward with an acute febrile illness. A diagnosis of a lower respiratory chest infection has been made and intravenous antibiotics have been commenced. The following morning on the ward round, the medical team note she has an ejection systolic murmur with normal heart sounds and no radiation. She appears clinically well in herself. What would be the single most appropriate management plan?',
  opts:['Proceed to urgently arrange a CXR','Discuss with the local paediatric cardiology centre for advice','Once medically fit for discharge, arrange an outpatient ECHO','Explain that this is an innocent murmur and inform the GP to re-evaluate the child once she has recovered from illness','Change the present antibiotic regime'],
  key:'D' },

{ n:20, p:'30', boiler:false,
  stem:'A mother on the postnatal ward has urgently requested a medical review on her 3-day-old baby who appears blue. On arrival, the baby is deeply cyanosed with cool peripheries and saturations do not improve despite maximum oxygen therapy. Femoral pulses are palpable and a single, loud second heart sound can be heard but no murmur. The baby is brought to the neonatal unit for further care. What is the next most important intervention?',
  opts:['Intravenous furosemide','Intravenous antibiotics','Intravenous fluid bolus of normal saline','Intravenous fluid bolus of dextrose','Intravenous infusion of prostaglandin E1'],
  key:'E',
  note:'NOT a reprint of Q18 despite a near-identical vignette. Q18 asks the DIAGNOSIS over a list of diagnoses; Q20 asks the NEXT INTERVENTION over a list of interventions. Different question, different option set. Hold both.' },

{ n:21, p:'30', boiler:false,
  stem:'A 3-year-old girl with complex congenital heart disease is admitted with fever. On examination, her temperature is 39.5C and there is a loud ejection systolic murmur. Her CRP is 250 mg/L and a transthoracic echocardiogram confirms vegetations. What is the most likely causative pathogen?',
  opts:['Streptococcus pneumoniae','Streptococcus pyogenes','Streptococcus viridans','Group A haemolytic streptococcus','Group B haemolytic streptococcus'],
  key:'C',
  note:'DEFECT: THE SAME ANSWER OFFERED TWICE. Option B "Streptococcus pyogenes" and option D "Group A haemolytic streptococcus" are one organism under two names. Neither is the key, so it does not change the answer, but it makes the menu four organisms wide, not five. Same defect shape as pedhd-inf-11 in chapter 1. Prints the temperature as "39.5C" with no degree symbol.' },

{ n:22, p:'31', boiler:false,
  stem:'A 36-hour-old baby is due to have his newborn check prior to discharge. The paediatrician notes that the antenatal serology is incomplete because the mother declined testing. The baby is symmetrically growth restricted, red reflexes are bilaterally absent and a heart murmur is noted. Femoral pulses can be palpated, the baby is pink and otherwise well. What is an echocardiogram most likely to show?',
  opts:['Ventricular septal defect','Coarctation of aorta','Atrial septal defect','Tetralogy of Fallot','Patent ductus arteriosus'],
  key:'E' },

{ n:23, p:'31', boiler:false,
  stem:'It can be possible to assess whether a murmur is significant by its character and associated features. Which of the following is not a feature of an innocent heart murmur?',
  opts:['No radiation','Varies with posture','Systolic','Third heart sound','No symptoms'],
  key:'D',
  note:'Prints "is not a feature" in ordinary type — the negative is NOT emphasised. Rendered as bold "not" in the drafted stem so the learner cannot miss it, which is a formatting repair, not a content change.' },

{ n:24, p:'31', boiler:false,
  stem:'A 3-day-old male infant is noted to have a cardiac murmur. Four limb blood pressures are normal but oxygen saturation is 78% and does not improve with oxygen therapy. Which of the following congenital heart defects is the most likely diagnosis?',
  opts:['Patent ductus arteriosus','Tetralogy of Fallot','Ventricular septal defect','Atrial septal defect','Coarctation of the aorta'],
  key:'B',
  note:'DEFECT (soft): 35)Cyanotic CHDs.pdf teaches that TOF shows "appearance of cyanosis after neonatal period" and is "the most common cardiac malformation responsible for cyanosis after 1 year of age", which sits awkwardly against a 3-day-old. The key is nonetheless the only defensible option offered — it is the only cyanotic lesion on the menu, and TGA (the classic day-3 cyanotic) is not offered. Keyed as printed; noted in the explanation.' }

];
