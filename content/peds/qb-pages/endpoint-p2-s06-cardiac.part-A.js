/* endpoint PART 2, section 6 "Cardiac disorders" (banner p.607), PART A.
   Range assigned: n:1-16, sixteen answered pages given explicitly in the task prompt
   (this section does NOT alternate uniformly -- three runs, with interposed notes pages
   at p.636 and p.689 flipping parity each time). Pages, in order:
   n1 p629 / n2 p631 / n3 p633 / n4 p635 / n5 p638 / n6 p640 / n7 p642 / n8 p644 /
   n9 p646 / n10 p648 / n11 p650 / n12 p652 / n13 p654 / n14 p656 / n15 p658 / n16 p660.
   Each page's unanswered twin is at p-1, EXCEPT n5 (twin p637, since p636 is the
   interposed notes page -- p635->638 is the jump). Staged per
   tools/bank-harness/pd-ep2-staging-brief.md. OCR NOT opened during this pass.
   Section-global numbering: n starts at 1 for this section (confirmed by task prompt).

   Bank material starts at p.628 per task prompt (pp.607-627 are teaching-note slides;
   pp.613,617,618,619 read by eye and confirmed notes, not questions, despite OCR
   `answered` tag -- yellow-heavy notes slides). Not independently re-verified in this
   pass since the brief states they were already read this session.

   Question-number walk (pr = printed number, page by page), filled in as staged:
     n1 pr1 p629

   Alternation, box and subject-matter findings recorded per entry as staged; running
   note continued below. */

{ n:1, pr:1, p:629, key:0,
  stem:'Alan, a 4-month-old boy, sees his general practitioner for an ear infection. On listening to his chest, a heart murmur is heard. Which one of the following features most suggests that it requires further investigation?',
  opts:['A thrill','Disappearance of murmur when lying flat','Murmur maximal at the left sternal edge','Sinus arrhythmia','Systolic murmur'],
  expl:'A thrill indicates a palpable vibration caused by turbulent blood flow, typically associated with significant structural heart disease. Its presence warrants further investigation to rule out a pathological murmur.',
  note:'No twin read yet (p.628 not opened this pass -- entry is fully legible from p.629 alone). No figure. Option A "A thrill" highlighted yellow and bold/underlined -> key=0. Printed box present, transcribed verbatim.' }

{ n:2, pr:2, p:631, key:0,
  stem:'Which of the following is the most common congenital heart disease?',
  opts:['Ventricular septal defect (VSD)','Atrial septal defect (ASD)','Patent ductus arteriosus (PDA)','Tetralogy of Fallot'],
  expl:'Ventricular septal defect (VSD) is the most common congenital heart defect. It may present with a murmur or signs of heart failure in infancy depending on its size.',
  note:'FOUR options only, as printed -- recorded, not corrected. No figure. Option a "Ventricular septal defect (VSD)" highlighted yellow and bold/underlined -> key=0. Printed box present, transcribed verbatim. Twin not needed, page fully legible.' }

{ n:3, pr:3, p:633, key:3,
  stem:'Sunil, a 3-month-old infant, presents with breathlessness and sweating while feeding. He has had several chest infections. You suspect heart failure. Which of the following is most likely to be correct regarding his heart failure?',
  opts:['Hepatomegaly is not a common feature at this age','It is caused by Eisenmenger syndrome','It is due to left heart obstruction','It is due to a left-to-right shunt','It is due to an increase in right-to-left shunt'],
  expl:'In infancy, heart failure is often due to large left-to-right shunts such as VSD or PDA. This leads to pulmonary overcirculation, breathlessness, sweating, and recurrent infections.',
  note:'No figure. Option D "It is due to a left-to-right shunt" highlighted yellow and bold/underlined -> key=3. Printed box present, transcribed verbatim. Twin not needed, page fully legible.' }

{ n:4, pr:4, p:635, key:3, box:636,
  stem:'Tariq, who is 6 weeks old, is admitted directly from the cardiology clinic with heart failure. He has a large ventricular septal defect. The cardiologist has recommended treatment with furosemide and spironolactone. His mother wants to know why he has only now started to have problems. Which of the following statements provides the best explanation?',
  opts:['At birth and for the first few weeks, the ductus arteriosus remained patent, and this balanced the flow across the septal defect.','Pulmonary vascular resistance is increasing, and blood is now flowing from right to left.','The left ventricle is now failing due to its progressive dilatation.','The pulmonary vascular resistance falls after birth, and now flow from left to right across the septal defect is much greater.','Volume overload results in decreased return to the left ventricle and a reduction in cardiac output related to a reduced end-diastolic filling pressure.'],
  expl:'After birth, the fall in pulmonary vascular resistance increases left-to-right shunting through a VSD, leading to pulmonary overcirculation and symptoms of heart failure around 6–8 weeks of age.and a reduction in cardiac output related to a reduced end-diastolic filling pressure.',
  note:'IMPORTANT FINDING, escalate-worthy: p.635 prints NO box of its own -- per brief 3a the very next page was opened, and p.636 (which the task prompt calls "the interposed notes page") is in fact a genuine overflow explanation box for THIS question, same blue-border/green-fill small-box format as every other box in this section, and its text visibly continues/synthesises the rationale for option D and references option E’s wording verbatim ("a reduction in cardiac output related to a reduced end-diastolic filling pressure"). Staged as box:636, expl transcribed verbatim from p.636 including the page’s own run-on "...of age.and a reduction..." (no space after the full stop, reproduced as printed). This does not change my n-numbering: p.636 still consumes no n value either way (notes page or box-only page), so n:5 still opens at p.638 as instructed. No figure on p.635. Option D highlighted yellow bold/underlined -> key=3.' }

{ n:5, pr:5, p:638, key:4,
  stem:'John, who is 6 years old, presents to the Emergency Department feeling sick and dizzy. He was brought to the hospital by a paramedic crew who were called after he became unwell at school. His heart rate was noted to be very fast, at 260 beats/min, and supraventricular tachycardia is diagnosed. He says he can feel his heart beating quickly and looks pale. He is crying, saying he wants his mother. Which of the following should be undertaken by the attending team?',
  opts:['Adenosine via a large-bore intravenous line','Bilateral carotid sinus massage','Direct current cardioversion','Reassure that it will resolve spontaneously','Vagal stimulation manoeuvre'],
  expl:'In a stable child with supraventricular tachycardia (SVT), vagal maneuvers like blowing through a straw or ice to the face are first-line treatment to terminate the arrhythmia before using adenosine.',
  note:'No figure. Option E "Vagal stimulation manoeuvre" highlighted yellow bold/underlined -> key=4. Printed box present, transcribed verbatim. Note: this is a different page-list shape than n:1-4 -- p.636/637 sit between p.635 and p.638, per task prompt p.637 is the unanswered twin for this entry; twin not opened, p.638 fully legible on its own.' }

{ n:6, pr:6, p:640, key:4,
  stem:'Given the findings shown in the opposite figure, which of the following is the most likely congenital heart disease associated with the shown clinical findings?',
  opts:['Aortic stenosis','Atrial septal defect','Coarctation of the aorta','Mitral stenosis','Persistent ductus arteriosus'],
  fig:'Schematic phonocardiogram/pressure-tracing diagram on the right: a zigzag (sawtooth) waveform running continuously across the cardiac cycle with no silent gap, four vertical pink/magenta bars marking heart sounds, the two central bars labelled A2 and P2 (A2 and P2 each with subscript 2). The continuous zigzag spanning both systole and diastole (through S2) depicts a continuous "machinery" murmur. One panel, no other labels.',
  figAlt:'A schematic phonocardiogram tracing showing the timing of heart sounds and a murmur across the cardiac cycle.',
  expl:'There is flow during systole and diastole suggesting that there is a pressure gradient in both. This makes one think of a shunt between arteries – in this case the aorta to the pulmonary artery across the persistent ductus arteriosus.',
  note:'Figure present, described above. Option E "Persistent ductus arteriosus" highlighted yellow bold/underlined -> key=4. Printed box present, transcribed verbatim (en dash reproduced as printed).' }

{ n:7, pr:7, p:642, key:0,
  stem:'Given the findings shown in the opposite figure, which of the following is the most likely congenital heart disease associated with the shown clinical findings?',
  opts:['Pulmonary stenosis','Atrial septal defect','Coarctation of the aorta','Mitral stenosis','Persistent ductus arteriosus'],
  fig:'Schematic phonocardiogram/pressure-tracing diagram on the right, same style as p.640: a zigzag waveform with vertical pink/magenta bars marking heart sounds. An early bar labelled EC (ejection click) sits shortly after the first sound, then a dense zigzag (systolic ejection murmur) runs up to the two central bars labelled A2 and P2 (each with subscript 2), with P2 drawn as a notably smaller/lower bar than A2. One panel, no other labels.',
  figAlt:'A schematic phonocardiogram tracing showing the timing of heart sounds, an ejection click, and a murmur across the cardiac cycle.',
  expl:'An ejection click tells you this is a valvular problem. The quiet P2 suggests the pulmonary valve is the source. A difficult set of signs to detect clinically.',
  note:'Figure present, described above. Option A "Pulmonary stenosis" highlighted yellow bold/underlined -> key=0. Printed box present, transcribed verbatim (leading space before "An ejection click" reproduced as printed).' }

{ n:8, pr:8, p:644, key:1,
  stem:'Given the findings shown in the opposite figure, which of the following is the most likely congenital heart disease associated with the shown clinical findings?',
  opts:['Aortic stenosis','Atrial septal defect','Coarctation of the aorta','Mitral stenosis','Persistent ductus arteriosus'],
  fig:'Schematic phonocardiogram/pressure-tracing diagram, same style as pp.640/642: a short diagonal line at the far left (before the first heart-sound bar), a zigzag ejection murmur, then two vertical bars close together labelled A2 and P2 (each with subscript 2), followed by a fourth isolated bar further right. One panel, no other labels.',
  figAlt:'A schematic phonocardiogram tracing showing the timing of heart sounds and a murmur across the cardiac cycle.',
  expl:'The variation in timing of closure of aortic and pulmonary valves is lost when there is an atrial septal defect. The fixed and widely split second heart sound (often difficult to hear) is due to the right ventricular stroke volume being equal in both inspiration and expiration.',
  note:'Figure present, described above. Option B "Atrial septal defect" highlighted yellow bold/underlined -> key=1. Printed box present, transcribed verbatim.' }

{ n:9, pr:9, p:646, key:2,
  stem:'Given the findings shown in the opposite figure, which of the following is the most likely congenital heart disease associated with the shown clinical findings?',
  opts:['Pulmonary stenosis','Atrial septal defect','Ventricular septal defect','Mitral stenosis','Persistent ductus arteriosus'],
  fig:'Schematic phonocardiogram/pressure-tracing diagram, same style as preceding pages: a dense, tall zigzag (pansystolic murmur) filling the whole space between the first heart-sound bar and the paired A2/P2 bars (each with subscript 2), with a diagonal line drawn through the zigzag near the A2/P2 bars. No ejection click marked, no gap/silent interval before S2. One panel, no other labels.',
  figAlt:'A schematic phonocardiogram tracing showing the timing of heart sounds and a murmur across the cardiac cycle.',
  expl:'The lack of an opening click and the presence of a pansystolic murmur are highly suggestive of ventricular septal defect. In general, all pansystolic murmurs are appreciated most easily below the level of the nipples.',
  note:'Figure present, described above. Option C "Ventricular septal defect" highlighted yellow bold/underlined -> key=2. Printed box present, transcribed verbatim.' }

{ n:10, pr:10, p:648, key:1,
  stem:'Given the findings shown in the opposite figure, which of the following is the most likely congenital heart disease associated with the shown clinical findings?',
  opts:['Pulmonary stenosis','Aortic stenosis','Ventricular septal defect','Mitral stenosis','Persistent ductus arteriosus'],
  fig:'Schematic phonocardiogram/pressure-tracing diagram, same style as preceding pages: an early bar labelled EC (ejection click), then a zigzag ejection murmur, then two vertical bars close together labelled A2 and P2 (each with subscript 2), with A2 drawn as a notably smaller/lower bar than P2. One panel, no other labels.',
  figAlt:'A schematic phonocardiogram tracing showing the timing of heart sounds, an ejection click, and a murmur across the cardiac cycle.',
  expl:'An ejection click tells one this is a valvular problem. The quiet A2 suggests that the aortic valve is the source. A difficult set of signs to detect clinically. In clinical practice radiation to the neck (or a suprasternal thrill) is a useful sign of left outflow tract obstruction.',
  note:'Figure present, described above. NOTE: option order on this page differs from n:6-9 -- here it is Pulmonary stenosis / Aortic stenosis / VSD / Mitral stenosis / PDA (Aortic stenosis in slot B, not the usual slot A), so this is NOT the identical shared menu as n6-9, transcribed as printed. Option B "Aortic stenosis" highlighted yellow bold/underlined -> key=1. Printed box present, transcribed verbatim.' }

{ n:11, pr:11, p:650, key:3,
  stem:'Jack is 24 hours old, and his mother notices when he is about to breastfeed that he is blue around the mouth. On examination, his tongue looks blue, and there is peripheral cyanosis. His respiratory rate is 65 breaths/min. On auscultation of the chest, there is no murmur. Pulses in all four limbs can be palpated and are equal in volume. He is watching you and moving his arms and legs vigorously while you examine him. In this case, which of the following would be the most likely findings on echocardiography?',
  opts:['Persistent ductus arteriosus','Aortic stenosis','Coarctation of the aorta','Transposition of the great arteries','Mitral regurgitation'],
  expl:'TGA typically presents with central cyanosis in the first 24–48 hours of life, with equal peripheral pulses and no murmur. It is a duct-dependent lesion that requires urgent intervention.',
  note:'No figure. Option D "Transposition of the great arteries" highlighted yellow bold/underlined -> key=3. Printed box present, transcribed verbatim (en dash reproduced as printed).' }

{ n:12, pr:12, p:652, key:2,
  stem:'Sarah was born at term by spontaneous vaginal delivery and went home at 8 hours of age following a normal neonatal discharge examination. At 48 hours of age, her mother found her looking pale and was unable to wake her. She was rushed to the Emergency Department. Her breathing was noted to be very shallow, her skin was cool and mottled, and she was unresponsive to pain. She was resuscitated and given intravenous fluids and broad-spectrum antibiotics. On examination, the only palpable pulse is the right brachial pulse. In this case, which of the following would be the most likely findings on echocardiography?',
  opts:['Persistent ductus arteriosus','Aortic stenosis','Coarctation of the aorta','Transposition of the great arteries'],
  expl:'Coarctation may present with shock in neonates once the ductus arteriosus closes. A key clue is absent femoral pulses with preserved upper limb pulses.',
  note:'FOUR options only, as printed -- twin checked (p.651, unanswered, identical stem/options, also only 4 options, so this is the book’s own printing and not a page defect on the answered copy). No figure. Option C "Coarctation of the aorta" highlighted yellow bold/underlined -> key=2. Printed box present, transcribed verbatim.' }

{ n:13, pr:13, p:654, key:2,
  stem:'Jane, a previously fit and well 18-month-old girl, presents with frequent respiratory tract infections and wheeze. On examination, there is a fixed and widely split second heart sound, and an ejection systolic murmur best heard at the upper left sternal edge. In this case, which of the following would be the most likely findings on echocardiography?',
  opts:['Aortic stenosis','Persistent ductus arteriosus','Atrial septal defect','Coarctation of the aorta','Mitral regurgitation'],
  expl:'ASD often presents with a fixed split second heart sound and an ejection systolic murmur due to increased flow across the pulmonary valve, especially in older infants and toddlers.',
  note:'No figure. Option C "Atrial septal defect" highlighted yellow bold/underlined -> key=2. Printed box present, transcribed verbatim.' }

{ n:14, pr:14, p:656, key:1,
  stem:'Anoushka, a 1-year-old girl, presents to the Emergency Department with a respiratory tract infection. She is pink and well-perfused. There is a thrill and a pansystolic murmur at the lower left sternal edge. In this case, which of the following would be the most likely findings on echocardiography?',
  opts:['Atrial septal defect','Ventricular septal defect','Coarctation of the aorta','Mitral stenosis','Mitral regurgitation'],
  expl:'A pansystolic murmur with a thrill at the lower left sternal edge is typical of a VSD. The child may be otherwise well if the defect is small.',
  note:'No figure. Option B "Ventricular septal defect" highlighted yellow bold/underlined -> key=1. Printed box present, transcribed verbatim.' }

{ n:15, pr:15, p:658, key:2,
  stem:'Debbie, a 3-month-old female infant, is being reviewed in the paediatric outpatient clinic. She was referred by a general practitioner for her 6-week check-up. A continuous murmur was heard throughout the praecordium. She is well and thriving. All peripheral pulses are present and easily palpable. Oxygen saturation is 96% post-ductal. In this case, which of the following would be the most likely findings on echocardiography?',
  opts:['Atrial septal defect','Ventricular septal defect','Persistent ductus arteriosus','Mitral stenosis','Mitral regurgitation'],
  expl:'A continuous murmur heard throughout the precordium in a well infant suggests PDA. Normal pulses and saturations support this diagnosis.',
  note:'No figure. Option C "Persistent ductus arteriosus" highlighted yellow bold/underlined -> key=2. Printed box present, transcribed verbatim. Note: stem spells "praecordium", box spells "precordium" -- both reproduced exactly as printed on their respective texts.' }

{ n:16, pr:16, p:660, key:4,
  stem:'Nada, a 5-month-old female infant, has had a fever and runny nose for 2 days. On examination, she has a temperature of 38.3°C and a runny nose. Her tongue is pink. Her breathing is normal. Pulse is 160 beats/min. Her heart sounds are normal, but she has a soft systolic murmur at the left sternal edge. Pulses are normal. In this case, which of the following would be the most likely findings on echocardiography?',
  opts:['Atrial septal defect','Ventricular septal defect','Coarctation of the aorta','Persistent ductus arteriosus','Normal'],
  expl:'A soft systolic murmur in a well baby with fever and no other abnormal signs is likely an innocent or functional murmur, especially during febrile illness.',
  note:'No figure. Option E "Normal" highlighted yellow bold/underlined -> key=4. Printed box present, transcribed verbatim.' }
