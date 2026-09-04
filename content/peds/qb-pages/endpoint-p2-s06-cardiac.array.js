/* ===========================================================================
   ENDPOINT - Pediatrics endpoint part2.pdf - SECTION 6: "Cardiac disorders"
   Verbatim staging record. PDF pages 607-792; PDF page = printed page, offset zero.
   Merged from endpoint-p2-s06-cardiac.part-A.js + endpoint-p2-s06-cardiac.part-B.js + endpoint-p2-s06-cardiac.part-C.js + endpoint-p2-s06-cardiac.part-D.js + endpoint-p2-s06-cardiac.part-E.js by merge-parts-ep2.js.
   
   Every question is printed TWICE: an unanswered page, then the ANSWERED page with the key
   highlighted in yellow and (usually) a bordered explanation box. Only answered pages are
   staged. `n` is the true sequential index, `pr` what the page prints, `p` the PDF page,
   `key` a ZERO-BASED INDEX into `opts` (never a letter), matching the app field `answer`,
   `expl` the printed box verbatim or "".
   =========================================================================== */
var PEDEP2_S06_STAGED = [

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
  note:'No twin read yet (p.628 not opened this pass -- entry is fully legible from p.629 alone). No figure. Option A "A thrill" highlighted yellow and bold/underlined -> key=0. Printed box present, transcribed verbatim.' },

{ n:2, pr:2, p:631, key:0,
  stem:'Which of the following is the most common congenital heart disease?',
  opts:['Ventricular septal defect (VSD)','Atrial septal defect (ASD)','Patent ductus arteriosus (PDA)','Tetralogy of Fallot'],
  expl:'Ventricular septal defect (VSD) is the most common congenital heart defect. It may present with a murmur or signs of heart failure in infancy depending on its size.',
  note:'FOUR options only, as printed -- recorded, not corrected. No figure. Option a "Ventricular septal defect (VSD)" highlighted yellow and bold/underlined -> key=0. Printed box present, transcribed verbatim. Twin not needed, page fully legible.' },

{ n:3, pr:3, p:633, key:3,
  stem:'Sunil, a 3-month-old infant, presents with breathlessness and sweating while feeding. He has had several chest infections. You suspect heart failure. Which of the following is most likely to be correct regarding his heart failure?',
  opts:['Hepatomegaly is not a common feature at this age','It is caused by Eisenmenger syndrome','It is due to left heart obstruction','It is due to a left-to-right shunt','It is due to an increase in right-to-left shunt'],
  expl:'In infancy, heart failure is often due to large left-to-right shunts such as VSD or PDA. This leads to pulmonary overcirculation, breathlessness, sweating, and recurrent infections.',
  note:'No figure. Option D "It is due to a left-to-right shunt" highlighted yellow and bold/underlined -> key=3. Printed box present, transcribed verbatim. Twin not needed, page fully legible.' },

{ n:4, pr:4, p:635, key:3, box:636,
  stem:'Tariq, who is 6 weeks old, is admitted directly from the cardiology clinic with heart failure. He has a large ventricular septal defect. The cardiologist has recommended treatment with furosemide and spironolactone. His mother wants to know why he has only now started to have problems. Which of the following statements provides the best explanation?',
  opts:['At birth and for the first few weeks, the ductus arteriosus remained patent, and this balanced the flow across the septal defect.','Pulmonary vascular resistance is increasing, and blood is now flowing from right to left.','The left ventricle is now failing due to its progressive dilatation.','The pulmonary vascular resistance falls after birth, and now flow from left to right across the septal defect is much greater.','Volume overload results in decreased return to the left ventricle and a reduction in cardiac output related to a reduced end-diastolic filling pressure.'],
  expl:'After birth, the fall in pulmonary vascular resistance increases left-to-right shunting through a VSD, leading to pulmonary overcirculation and symptoms of heart failure around 6–8 weeks of age.and a reduction in cardiac output related to a reduced end-diastolic filling pressure.',
  note:'IMPORTANT FINDING, escalate-worthy: p.635 prints NO box of its own -- per brief 3a the very next page was opened, and p.636 (which the task prompt calls "the interposed notes page") is in fact a genuine overflow explanation box for THIS question, same blue-border/green-fill small-box format as every other box in this section, and its text visibly continues/synthesises the rationale for option D and references option E’s wording verbatim ("a reduction in cardiac output related to a reduced end-diastolic filling pressure"). Staged as box:636, expl transcribed verbatim from p.636 including the page’s own run-on "...of age.and a reduction..." (no space after the full stop, reproduced as printed). This does not change my n-numbering: p.636 still consumes no n value either way (notes page or box-only page), so n:5 still opens at p.638 as instructed. No figure on p.635. Option D highlighted yellow bold/underlined -> key=3.' },

{ n:5, pr:5, p:638, key:4,
  stem:'John, who is 6 years old, presents to the Emergency Department feeling sick and dizzy. He was brought to the hospital by a paramedic crew who were called after he became unwell at school. His heart rate was noted to be very fast, at 260 beats/min, and supraventricular tachycardia is diagnosed. He says he can feel his heart beating quickly and looks pale. He is crying, saying he wants his mother. Which of the following should be undertaken by the attending team?',
  opts:['Adenosine via a large-bore intravenous line','Bilateral carotid sinus massage','Direct current cardioversion','Reassure that it will resolve spontaneously','Vagal stimulation manoeuvre'],
  expl:'In a stable child with supraventricular tachycardia (SVT), vagal maneuvers like blowing through a straw or ice to the face are first-line treatment to terminate the arrhythmia before using adenosine.',
  note:'No figure. Option E "Vagal stimulation manoeuvre" highlighted yellow bold/underlined -> key=4. Printed box present, transcribed verbatim. Note: this is a different page-list shape than n:1-4 -- p.636/637 sit between p.635 and p.638, per task prompt p.637 is the unanswered twin for this entry; twin not opened, p.638 fully legible on its own.' },

{ n:6, pr:6, p:640, key:4,
  stem:'Given the findings shown in the opposite figure, which of the following is the most likely congenital heart disease associated with the shown clinical findings?',
  opts:['Aortic stenosis','Atrial septal defect','Coarctation of the aorta','Mitral stenosis','Persistent ductus arteriosus'],
  fig:'Schematic phonocardiogram/pressure-tracing diagram on the right: a zigzag (sawtooth) waveform running continuously across the cardiac cycle with no silent gap, four vertical pink/magenta bars marking heart sounds, the two central bars labelled A2 and P2 (A2 and P2 each with subscript 2). The continuous zigzag spanning both systole and diastole (through S2) depicts a continuous "machinery" murmur. One panel, no other labels.',
  figAlt:'A schematic phonocardiogram tracing showing the timing of heart sounds and a murmur across the cardiac cycle.',
  expl:'There is flow during systole and diastole suggesting that there is a pressure gradient in both. This makes one think of a shunt between arteries – in this case the aorta to the pulmonary artery across the persistent ductus arteriosus.',
  note:'Figure present, described above. Option E "Persistent ductus arteriosus" highlighted yellow bold/underlined -> key=4. Printed box present, transcribed verbatim (en dash reproduced as printed).' },

{ n:7, pr:7, p:642, key:0,
  stem:'Given the findings shown in the opposite figure, which of the following is the most likely congenital heart disease associated with the shown clinical findings?',
  opts:['Pulmonary stenosis','Atrial septal defect','Coarctation of the aorta','Mitral stenosis','Persistent ductus arteriosus'],
  fig:'Schematic phonocardiogram/pressure-tracing diagram on the right, same style as p.640: a zigzag waveform with vertical pink/magenta bars marking heart sounds. An early bar labelled EC (ejection click) sits shortly after the first sound, then a dense zigzag (systolic ejection murmur) runs up to the two central bars labelled A2 and P2 (each with subscript 2), with P2 drawn as a notably smaller/lower bar than A2. One panel, no other labels.',
  figAlt:'A schematic phonocardiogram tracing showing the timing of heart sounds, an ejection click, and a murmur across the cardiac cycle.',
  expl:'An ejection click tells you this is a valvular problem. The quiet P2 suggests the pulmonary valve is the source. A difficult set of signs to detect clinically.',
  note:'Figure present, described above. Option A "Pulmonary stenosis" highlighted yellow bold/underlined -> key=0. Printed box present, transcribed verbatim (leading space before "An ejection click" reproduced as printed).' },

{ n:8, pr:8, p:644, key:1,
  stem:'Given the findings shown in the opposite figure, which of the following is the most likely congenital heart disease associated with the shown clinical findings?',
  opts:['Aortic stenosis','Atrial septal defect','Coarctation of the aorta','Mitral stenosis','Persistent ductus arteriosus'],
  fig:'Schematic phonocardiogram/pressure-tracing diagram, same style as pp.640/642: a short diagonal line at the far left (before the first heart-sound bar), a zigzag ejection murmur, then two vertical bars close together labelled A2 and P2 (each with subscript 2), followed by a fourth isolated bar further right. One panel, no other labels.',
  figAlt:'A schematic phonocardiogram tracing showing the timing of heart sounds and a murmur across the cardiac cycle.',
  expl:'The variation in timing of closure of aortic and pulmonary valves is lost when there is an atrial septal defect. The fixed and widely split second heart sound (often difficult to hear) is due to the right ventricular stroke volume being equal in both inspiration and expiration.',
  note:'Figure present, described above. Option B "Atrial septal defect" highlighted yellow bold/underlined -> key=1. Printed box present, transcribed verbatim.' },

{ n:9, pr:9, p:646, key:2,
  stem:'Given the findings shown in the opposite figure, which of the following is the most likely congenital heart disease associated with the shown clinical findings?',
  opts:['Pulmonary stenosis','Atrial septal defect','Ventricular septal defect','Mitral stenosis','Persistent ductus arteriosus'],
  fig:'Schematic phonocardiogram/pressure-tracing diagram, same style as preceding pages: a dense, tall zigzag (pansystolic murmur) filling the whole space between the first heart-sound bar and the paired A2/P2 bars (each with subscript 2), with a diagonal line drawn through the zigzag near the A2/P2 bars. No ejection click marked, no gap/silent interval before S2. One panel, no other labels.',
  figAlt:'A schematic phonocardiogram tracing showing the timing of heart sounds and a murmur across the cardiac cycle.',
  expl:'The lack of an opening click and the presence of a pansystolic murmur are highly suggestive of ventricular septal defect. In general, all pansystolic murmurs are appreciated most easily below the level of the nipples.',
  note:'Figure present, described above. Option C "Ventricular septal defect" highlighted yellow bold/underlined -> key=2. Printed box present, transcribed verbatim.' },

{ n:10, pr:10, p:648, key:1,
  stem:'Given the findings shown in the opposite figure, which of the following is the most likely congenital heart disease associated with the shown clinical findings?',
  opts:['Pulmonary stenosis','Aortic stenosis','Ventricular septal defect','Mitral stenosis','Persistent ductus arteriosus'],
  fig:'Schematic phonocardiogram/pressure-tracing diagram, same style as preceding pages: an early bar labelled EC (ejection click), then a zigzag ejection murmur, then two vertical bars close together labelled A2 and P2 (each with subscript 2), with A2 drawn as a notably smaller/lower bar than P2. One panel, no other labels.',
  figAlt:'A schematic phonocardiogram tracing showing the timing of heart sounds, an ejection click, and a murmur across the cardiac cycle.',
  expl:'An ejection click tells one this is a valvular problem. The quiet A2 suggests that the aortic valve is the source. A difficult set of signs to detect clinically. In clinical practice radiation to the neck (or a suprasternal thrill) is a useful sign of left outflow tract obstruction.',
  note:'Figure present, described above. NOTE: option order on this page differs from n:6-9 -- here it is Pulmonary stenosis / Aortic stenosis / VSD / Mitral stenosis / PDA (Aortic stenosis in slot B, not the usual slot A), so this is NOT the identical shared menu as n6-9, transcribed as printed. Option B "Aortic stenosis" highlighted yellow bold/underlined -> key=1. Printed box present, transcribed verbatim.' },

{ n:11, pr:11, p:650, key:3,
  stem:'Jack is 24 hours old, and his mother notices when he is about to breastfeed that he is blue around the mouth. On examination, his tongue looks blue, and there is peripheral cyanosis. His respiratory rate is 65 breaths/min. On auscultation of the chest, there is no murmur. Pulses in all four limbs can be palpated and are equal in volume. He is watching you and moving his arms and legs vigorously while you examine him. In this case, which of the following would be the most likely findings on echocardiography?',
  opts:['Persistent ductus arteriosus','Aortic stenosis','Coarctation of the aorta','Transposition of the great arteries','Mitral regurgitation'],
  expl:'TGA typically presents with central cyanosis in the first 24–48 hours of life, with equal peripheral pulses and no murmur. It is a duct-dependent lesion that requires urgent intervention.',
  note:'No figure. Option D "Transposition of the great arteries" highlighted yellow bold/underlined -> key=3. Printed box present, transcribed verbatim (en dash reproduced as printed).' },

{ n:12, pr:12, p:652, key:2,
  stem:'Sarah was born at term by spontaneous vaginal delivery and went home at 8 hours of age following a normal neonatal discharge examination. At 48 hours of age, her mother found her looking pale and was unable to wake her. She was rushed to the Emergency Department. Her breathing was noted to be very shallow, her skin was cool and mottled, and she was unresponsive to pain. She was resuscitated and given intravenous fluids and broad-spectrum antibiotics. On examination, the only palpable pulse is the right brachial pulse. In this case, which of the following would be the most likely findings on echocardiography?',
  opts:['Persistent ductus arteriosus','Aortic stenosis','Coarctation of the aorta','Transposition of the great arteries'],
  expl:'Coarctation may present with shock in neonates once the ductus arteriosus closes. A key clue is absent femoral pulses with preserved upper limb pulses.',
  note:'FOUR options only, as printed -- twin checked (p.651, unanswered, identical stem/options, also only 4 options, so this is the book’s own printing and not a page defect on the answered copy). No figure. Option C "Coarctation of the aorta" highlighted yellow bold/underlined -> key=2. Printed box present, transcribed verbatim.' },

{ n:13, pr:13, p:654, key:2,
  stem:'Jane, a previously fit and well 18-month-old girl, presents with frequent respiratory tract infections and wheeze. On examination, there is a fixed and widely split second heart sound, and an ejection systolic murmur best heard at the upper left sternal edge. In this case, which of the following would be the most likely findings on echocardiography?',
  opts:['Aortic stenosis','Persistent ductus arteriosus','Atrial septal defect','Coarctation of the aorta','Mitral regurgitation'],
  expl:'ASD often presents with a fixed split second heart sound and an ejection systolic murmur due to increased flow across the pulmonary valve, especially in older infants and toddlers.',
  note:'No figure. Option C "Atrial septal defect" highlighted yellow bold/underlined -> key=2. Printed box present, transcribed verbatim.' },

{ n:14, pr:14, p:656, key:1,
  stem:'Anoushka, a 1-year-old girl, presents to the Emergency Department with a respiratory tract infection. She is pink and well-perfused. There is a thrill and a pansystolic murmur at the lower left sternal edge. In this case, which of the following would be the most likely findings on echocardiography?',
  opts:['Atrial septal defect','Ventricular septal defect','Coarctation of the aorta','Mitral stenosis','Mitral regurgitation'],
  expl:'A pansystolic murmur with a thrill at the lower left sternal edge is typical of a VSD. The child may be otherwise well if the defect is small.',
  note:'No figure. Option B "Ventricular septal defect" highlighted yellow bold/underlined -> key=1. Printed box present, transcribed verbatim.' },

{ n:15, pr:15, p:658, key:2,
  stem:'Debbie, a 3-month-old female infant, is being reviewed in the paediatric outpatient clinic. She was referred by a general practitioner for her 6-week check-up. A continuous murmur was heard throughout the praecordium. She is well and thriving. All peripheral pulses are present and easily palpable. Oxygen saturation is 96% post-ductal. In this case, which of the following would be the most likely findings on echocardiography?',
  opts:['Atrial septal defect','Ventricular septal defect','Persistent ductus arteriosus','Mitral stenosis','Mitral regurgitation'],
  expl:'A continuous murmur heard throughout the precordium in a well infant suggests PDA. Normal pulses and saturations support this diagnosis.',
  note:'No figure. Option C "Persistent ductus arteriosus" highlighted yellow bold/underlined -> key=2. Printed box present, transcribed verbatim. Note: stem spells "praecordium", box spells "precordium" -- both reproduced exactly as printed on their respective texts.' },

{ n:16, pr:16, p:660, key:4,
  stem:'Nada, a 5-month-old female infant, has had a fever and runny nose for 2 days. On examination, she has a temperature of 38.3°C and a runny nose. Her tongue is pink. Her breathing is normal. Pulse is 160 beats/min. Her heart sounds are normal, but she has a soft systolic murmur at the left sternal edge. Pulses are normal. In this case, which of the following would be the most likely findings on echocardiography?',
  opts:['Atrial septal defect','Ventricular septal defect','Coarctation of the aorta','Persistent ductus arteriosus','Normal'],
  expl:'A soft systolic murmur in a well baby with fever and no other abnormal signs is likely an innocent or functional murmur, especially during febrile illness.',
  note:'No figure. Option E "Normal" highlighted yellow bold/underlined -> key=4. Printed box present, transcribed verbatim.' },

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
  note:'p.662 read at native res, fully legible. Highlighted option B "Aortic stenosis", bold+underlined+yellow, key=1. Small side box in reduced font to the right of the options -- printed explanation box, transcribed verbatim. pr=17=n, no divergence. Straightforward acquired/congenital cardiac murmur question, plainly cardiac.' },

{ n:18, pr:18, p:664, key:1,
  stem:'A paediatrician is called to urgently review a 3-day-old baby on the postnatal ward. On arrival, the baby is profoundly cyanotic and saturations do not improve with high-flow oxygen therapy. Examination reveals a single loud second heart sound but no murmur. Intravenous access is secured and the blood gas shows severe metabolic acidosis. A CXR shows increased pulmonary vasculature. What is the most likely diagnosis?',
  opts:['Atrial septal defect','Transposition of the great arteries','Patent ductus arteriosus','Tetralogy of Fallot','Ventricular septal defect'],
  expl:'In TGA, oxygen therapy does not improve cyanosis because the systemic and pulmonary circulations are in parallel rather than in series. A single second heart sound and severe hypoxia are typical.',
  note:'p.664 read at native res, fully legible. Highlighted option B "Transposition of the great arteries", bold+underlined+yellow, key=1. Small side box in reduced font to the right, printed box transcribed verbatim. pr=18=n. Cyanotic congenital heart disease vignette, plainly cardiac.' },

{ n:19, pr:19, p:666, key:3,
  stem:'A 4-year-old girl has been admitted to the ward with an acute febrile illness. A diagnosis of lower respiratory tract infection has been made, and intravenous antibiotics have been commenced. The following morning on the ward round, the medical team notes she has an ejection systolic murmur with normal heart sounds and no radiation. She appears clinically well in herself. What would be the single most appropriate management plan?',
  opts:['Proceed to urgently arrange a CXR','Discuss with the local paediatric cardiology center for advice','Once medically fit for discharge, arrange an outpatient ECHO','Explain that this is an innocent murmur and inform the GP to re-evaluate the child once she has recovered from illness'],
  expl:'In the context of illness, a new murmur may be functional due to increased cardiac output. If the child is otherwise well, it is safe to follow up after recovery.',
  note:'p.666 read at native res, fully legible. Only FOUR options printed (A-D), ladder genuinely stops at D. Highlighted option D "Explain that this is an innocent murmur...", bold+underlined+yellow, key=3. Small side box in reduced font, printed box transcribed verbatim. pr=19=n. Innocent/functional murmur, plainly cardiac.' },

{ n:20, pr:20, p:668, key:4,
  stem:'A mother on the postnatal ward has urgently requested a medical review for her 3-day-old baby who appears blue. On arrival, the baby is deeply cyanotic with cool peripheries and saturations not improving despite maximum oxygen therapy. Femoral pulses are palpable and a single, loud second heart sound can be heard, but no murmur. The baby is brought to the neonatal unit for further care. What is the next most important intervention?',
  opts:['Intravenous furosemide','Intravenous antibiotics','Intravenous fluid bolus of normal saline','Intravenous fluid bolus of dextrose','Intravenous infusion of prostaglandin E1'],
  expl:'In duct-dependent congenital heart disease, prostaglandin E1 keeps the ductus arteriosus open to maintain systemic or pulmonary blood flow. This is critical in a cyanotic neonate.',
  note:'p.668 read at native res, fully legible. Highlighted option E "Intravenous infusion of prostaglandin E1", bold+underlined+yellow, key=4. Small side box in reduced font, printed box transcribed verbatim. pr=20=n. Duct-dependent cyanotic CHD, plainly cardiac.' },

{ n:21, pr:21, p:670, key:2,
  stem:'A 3-year-old girl with complex congenital heart disease is admitted with fever. On examination, her temperature is 39.5°C and there is a loud ejection systolic murmur. Her CRP is 250 mg/L and a transthoracic echocardiogram confirms vegetations. What is the most likely causative pathogen?',
  opts:['Streptococcus pneumoniae','Streptococcus pyogenes','Streptococcus viridans','Group A haemolytic streptococcus','Group B haemolytic streptococcus'],
  expl:'Streptococcus viridans is the most common cause of infective endocarditis, especially in children with underlying congenital heart disease and a new murmur.',
  note:'p.670 read at native res, fully legible. Highlighted option C "Streptococcus viridans", bold+underlined+yellow, key=2. Small side box in reduced font, printed box transcribed verbatim. pr=21=n. NOT a plain congenital/acquired cardiac question -- this is infective endocarditis (causative organism) in a child with underlying CHD, filed here under cardiac by the book.' },

{ n:22, pr:22, p:672, key:4,
  stem:'A 36-hour-old baby is due to have his newborn check prior to discharge. The paediatrician notes that the antenatal serology is incomplete because the mother declined testing. The baby is symmetrically growth restricted, red reflexes are bilaterally absent, and a heart murmur is noted. Femoral pulses can be palpated, the baby is pink and otherwise well. What is an echocardiogram most likely to show?',
  opts:['Ventricular septal defect','Coarctation of the aorta','Atrial septal defect','Tetralogy of Fallot','Patent ductus arteriosus'],
  expl:'This baby has symmetrical IUGR, absent red reflexes (cataracts), and a heart murmur, with incomplete maternal serology—highly suspicious for congenital rubella. Rubella classically causes patent ductus arteriosus (PDA), which fits the findings of a murmur with good pulses and perfusion.',
  note:'p.672 read at native res, fully legible. Highlighted option E "Patent ductus arteriosus", bold+underlined+yellow, key=4. Side box in reduced font, printed box transcribed verbatim. pr=22=n. NOT a plain cardiac question -- congenital rubella syndrome (TORCH) vignette asking for the resulting cardiac lesion (PDA); filed here under cardiac by the book because the answer is the cardiac finding.' },

{ n:23, pr:23, p:674, key:3,
  stem:'It can be possible to assess whether a murmur is significant by its character and associated features. Which of the following is not a feature of an innocent heart murmur?',
  opts:['No radiation','Varies with posture','Systolic','Third heart sound','No symptoms'],
  expl:'A third heart sound suggests ventricular dysfunction and is not a feature of an innocent murmur. Innocent murmurs are typically systolic, soft, and positional.',
  note:'p.674 read at native res, fully legible. Highlighted option D "Third heart sound", bold+underlined+yellow, key=3. Side box in reduced font, printed box transcribed verbatim. pr=23=n. Innocent murmur features, plainly cardiac.' },

{ n:24, pr:24, p:676, key:1,
  stem:'A 3-day-old male infant is noted to have a cardiac murmur. Four-limb blood pressures are normal, but oxygen saturation is 78% and does not improve with oxygen therapy. Which of the following congenital heart defects is the most likely diagnosis?',
  opts:['Patent ductus arteriosus','Tetralogy of Fallot','Ventricular septal defect','Atrial septal defect','Coarctation of the aorta'],
  expl:'Impaired oxygenation suggests right-to-left shunt, which is caused by tetralogy of Fallot or TGA. Tetralogy of Fallot comprises pulmonary stenosis, overriding aorta, ventricular septal defect and right ventricular hypertrophy.',
  note:'p.676 read at native res, fully legible. Highlighted option B "Tetralogy of Fallot", bold+underlined+yellow, key=1. Side box in reduced font, printed box transcribed verbatim (a small leading space before "Impaired" in the box print, not reproduced as it is a formatting artefact of the box padding, not content). pr=24=n. Cyanotic CHD, plainly cardiac.' },

{ n:25, pr:25, p:678, key:0,
  stem:'A paediatrician is asked to review a heart murmur in a 2-day-old baby born by vaginal delivery following an uneventful pregnancy to a primiparous mother aged 38. The perinatal period was normal, and the baby has been feeding well. On examination, the baby is hypotonic and has single palmar creases and epicanthic folds. What is the most likely heart lesion?',
  opts:['Atrioventricular septal defect','Atrial septal defect','Aortic stenosis','Coarctation of the aorta','Patent ductus arteriosus'],
  expl:'The baby shows features suggestive of Down syndrome (hypotonia, single palmar crease, epicanthic folds). The most common congenital heart defect associated with Down syndrome is an atrioventricular septal defect (AVSD).',
  note:'p.678 read at native res, fully legible. Highlighted option A "Atrioventricular septal defect", bold+underlined+yellow, key=0. Side box in reduced font, printed box transcribed verbatim. pr=25=n. NOT a plain cardiac question -- Down syndrome features vignette asking for the associated cardiac lesion (AVSD); filed here under cardiac by the book.' },

{ n:26, pr:26, p:680, key:2,
  stem:'An 8-month-old girl is brought to the emergency room because she appears ill. She is pale and dyspneic with a respiratory rate of 80 breaths/min. Heart rate is 195 bpm, heart sounds are weak, and a gallop is heard. Chest auscultation reveals fine crepitations. There is cardiomegaly on chest X-ray. She had low-grade fever and rhinorrhea 2 days before. What is the most probable diagnosis?',
  opts:['Acute glomerulonephritis','Bronchopneumonia','Viral myocarditis','Pericarditis','Wide VSD'],
  expl:'This child presents with signs of acute heart failure: tachypnea, tachycardia, weak heart sounds, gallop rhythm, and cardiomegaly. The recent viral prodrome (fever and rhinorrhea) and fine lung crepitations suggest pulmonary congestion due to impaired myocardial function, which is characteristic of viral myocarditis.',
  note:'p.680 read at native res, fully legible. Highlighted option C "Viral myocarditis", bold+underlined+yellow, key=2. Side box in reduced font, printed box transcribed verbatim. pr=26=n. Acquired cardiac (viral myocarditis presenting as heart failure), plainly cardiac.' },

{ n:27, pr:27, p:682, key:0,
  stem:'A 9 months-old infant presented with sweating, tachypnea, severe tachycardia, refusal of feeding over the past couple of hours. Pulses are thread (HR 250 /min). No murmur is heard. What is the most probable diagnosis?',
  opts:['Supraventricular tachycardia','Rheumatic carditis','VSD','Coarctation of aorta','ASD'],
  expl:'The infant has very fast HR (250/min), sweating, tachypnea, poor feeding, and no murmur, which strongly suggests SVT rather than structural heart disease.',
  note:'p.682 read at native res, fully legible. Options lowercase-lettered a-e. Highlighted option a "Supraventricular tachycardia", bold+underlined+yellow, key=0. Explanation box printed below the options, transcribed verbatim. pr=27=n. Stem prints "Pulses are thread" (verbatim as printed, presumably intending "thready" -- transcribed silently, not corrected). SVT, plainly cardiac.' },

{ n:28, pr:28, p:684, key:2,
  stem:'Serious complications of Fallot tetralogy include:',
  opts:['Eisenmenger syndrome','Recurrent pneumonia','Cerebrovascular accidents','Pulmonary hypertension'],
  expl:'Children with Fallot’s tetralogy are at risk of brain abscesses and strokes due to polycythemia and right-to-left shunting. Pulmonary hypertension and Eisenmenger are less common.',
  note:'p.684 read at native res, fully legible. Only FOUR options printed (a-d), ladder genuinely stops at d. Highlighted option c "Cerebrovascular accidents", bold+underlined+yellow, key=2. Explanation box printed below the options, transcribed verbatim. pr=28=n. Complications of Tetralogy of Fallot, plainly cardiac.' },

{ n:29, pr:29, p:686, key:0,
  stem:'Nada, a 5-month-old female infant, has a fever and runny nose for 2 days. On examination, her temperature is 38.3°C, her tongue is pink, and no chest retractions are noted. Her pulse is 160 beats/min, heart sounds are normal, but a soft systolic murmur is heard at the left sternal edge. Pulses are normal. Which of the following is the most likely explanation for the murmur?',
  opts:['Normal "innocent murmur"','Ventricular septal defect','Patent ductus arteriosus','Aortic stenosis'],
  expl:'The baby is otherwise healthy with only a soft systolic murmur during fever, which is typical of an innocent murmur that becomes more audible during illness.',
  note:'p.686 read at native res, fully legible. Only FOUR options printed (a-d), ladder genuinely stops at d. Highlighted option a "Normal innocent murmur", bold+underlined+yellow, key=0. Explanation box printed below the options, transcribed verbatim. pr=29=n. Innocent murmur, plainly cardiac.' },

{ n:30, pr:30, p:688, key:3, box:689,
  stem:'Which of the following statements about ventricular septal defect (VSDs) is most factually correct?',
  opts:['VSDs are most commonly located in the muscular part of the ventricular septum','VSDs will cause an audible flow murmur across the defect, usually audible from birth','Infective endocarditis is a complication seen in approx. 10% of all children with VSDs','VSDs are associated with higher oxygen content in the blood of the right ventricle than the right atrium','VSDs are usually associated with right ventricular volume overload'],
  expl:'The left-to-right shunt increases oxygen saturation in the RV compared to the RA, making this the most accurate statement.',
  note:'p.688 read at native res, fully legible; prints stem and options only, NO explanation box on p.688 itself. Per brief 3a, opened the very next page (689) before moving on -- p.689 IS the overflow box: a single small bordered box in reduced font, alone on an otherwise blank slide, and its text ("left-to-right shunt increases oxygen saturation in the RV compared to the RA") matches p.688 option d exactly. So p.689 is staged as box:689 on this entry and gets no entry of its own -- this is the section-profile "interposed notes page at p.689" identified in endpoint-p2-section-map.md, and reading it settles it as an overflow box rather than an unrelated notes slide. Highlighted option d "VSDs are associated with higher oxygen content...", bold+underlined+yellow, key=3. pr=30=n. VSD facts, plainly cardiac. This is also the last page of profiled Run 2 (even parity, 638-688); Run 3 resumes at p.691 (odd).' },

{ n:31, pr:31, p:691, key:4,
  stem:'Which of the following statements about patent ductus arteriosus is most factually correct?',
  opts:['The incidence of persistent ductus arteriosus is increased in males compared with females','Cardiac catheter color placement is the treatment of choice for symptomatic infants with persistent ductus arteriosus post birth','PDA can be treated with prostaglandins','PDA always closes spontaneously in term infants','The incidence of PDA is increased in preterm infants and those with perinatal hypoxia and/or distress'],
  expl:'PDA is especially common in preterm babies and those with perinatal asphyxia. In term infants, it usually closes spontaneously.',
  note:'p.691 read at native res, fully legible. Highlighted option e "The incidence of PDA is increased in preterm infants...", bold+underlined+yellow, key=4. Explanation box printed below the options, transcribed verbatim. pr=31=n. Option b prints "Cardiac catheter color placement" verbatim as printed (almost certainly a scanning/typesetting slip for "coil placement", not corrected, per the numbers/units exception this is not one so left silent). p.690 is the unanswered twin (per section profile) -- opened, stem and options match p.691 word for word, no box (as expected for an unanswered page). This is the first page of profiled Run 3 (odd parity, 690-791), immediately after the interposed p.689 overflow box. PDA facts, plainly cardiac.' },

{ n:32, pr:32, p:693, key:4,
  stem:'A 2-month-old infant presents with poor feeding, sweating during feeding, and poor weight gain. Vital signs reveal a respiratory rate of 67/min, pulse of 165/min, and normal values of blood pressure in the upper and lower extremities. The cardiac examination reveals a graded pansystolic murmur heard over left parasternal line. What is the first step investigation you would order?',
  opts:['Plain X ray chest and heart','ECG','Blood culture','Cardiac catheterization','Echocardiography'],
  expl:'First-line and most definitive investigation for congenital heart disease with murmur is echocardiography, as it directly visualizes cardiac structure and flow.',
  note:'p.693 read at native res; highlight on option e looked faint/uncertain at native resolution so escalated to a 300 dpi crop (saved <SCRATCH>\\\\ep2-stage\\\\p-0693.jpg) which confirmed a clear yellow highlight, bold and underlined, on "e. Echocardiography" -- key=4. Explanation box printed to the right of the options, transcribed verbatim. pr=32=n. VSD/heart-failure vignette asking for first-line investigation, plainly cardiac. This is the last page of my assigned range (n:17-32); one page past (694) rendered next to check for any structural break before handing back.' },

/* Peds ENDPOINT part 2, section 6 "Cardiac disorders" (pp.607-792), part C.
   Bare sequence of object literals, no array wrapper, no commas between entries -- per brief.
   n:33-48, section-global, sixteen answered pages given explicitly in the task prompt:
   n33 p.695, n34 p.697, n35 p.699, n36 p.701, n37 p.703, n38 p.705, n39 p.707, n40 p.709,
   n41 p.711, n42 p.713, n43 p.715, n44 p.717, n45 p.719, n46 p.721, n47 p.723, n48 p.725.
   Twin pages (unanswered) are p-1 for each -- 694,696,...,724.
   OCR index at content\peds\qb-pages\ocr\ep2\ was NOT opened during this pass (transcription only).
   Renders read: native JPEG <SCRATCH>\ep2-index\native\pNNNN.jpeg (800x450 ceiling); 300dpi crop
   only where noted in an entry's note.
*/

{ n:33, pr:33, p:695, key:2,
  stem:'During regular checkup of an 8y old patient you heard soft ejection systolic murmur of grade 2 with a fixed and widely split second heart sound at upper left sternal border that does not change during respiration, the patient is otherwise active and healthy. The most likely heart lesion is:',
  opts:['VSD','pulmonary stenosis','ASD','fallot tetralogy','aortic stenosis'],
  expl:'A fixed wide split of S2 with a soft ejection systolic murmur is the classic finding for atrial septal defect.',
  note:'Read native p0695.jpeg, clear. Highlighted option c. ASD (index 2), bold+yellow. Box present, straightforward congenital cardiac (ASD). No figure. Twin not needed, text fully legible at native resolution.' },

{ n:34, pr:34, p:697, key:0,
  stem:'Which of the following statements about innocent (physiologic) heart murmurs is NOT true?',
  opts:['They are harsh murmurs','They are usually soft','They vary with position or respiration','They occur in an otherwise healthy child'],
  expl:'Innocent murmurs are soft, vary with posture/respiration, and occur in healthy children, not harsh in quality.',
  note:'Read native p0697.jpeg, clear. Only FOUR options printed (a-d), not five -- recorded as printed, not corrected. Highlighted option a. "They are harsh murmurs" (index 0). Box present. No figure.' },

{ n:35, pr:35, p:699, key:0,
  stem:'A 3-year-old boy has had a runny nose and wheeze for 3 days. On examination his pulse is 100 beats/min. There is an ejection systolic murmur heard loudest at the upper left sternal edge, which can also be heard over the carotid arteries but not at the back. Select most findings on echocardiography:',
  opts:['Aortic stenosis','Atrial septal defect','Coarctation of the aorta','Pulmonary stenosis','Ventricular septal defect (VSD)'],
  expl:'The murmur radiating to the carotids is characteristic of aortic stenosis',
  note:'Read native p0699.jpeg, clear. Part of the stem ("be heard over the carotid arteries") is printed in red text on the page -- transcribed as plain text, colour not represented. Highlighted option a. Aortic stenosis (index 0). Box present. No figure.' },

{ n:36, pr:36, p:701, key:2,
  stem:'Which of the following presentation suggest the diagnosis of Rheumatic Fever?',
  opts:['Arthralgia with fever','Carditis with arthralgia and fever','Carditis with arthritis and fever','Chronic recurrent tonsillitis with high ESPE','Arthralgia with prolonged PR interval','Recurrent tonsillitis and recurrent joint pains.'],
  fig:'Right side of slide: a "Rheumatic Fever: Criteria" reference chart branded "knowmedge", mnemonic "JONES CAFE PAL". Two columns: Major Criteria (J-Joint involvement, O-O looks like a heart = myocarditis, N-Nodules subcutaneous, E-Erythema marginatum, S-Sydenham chorea) and Minor Criteria (C-CRP increased, A-Arthralgia, F-Fever, E-Elevated ESR, P-Prolonged PR interval, A-Anamnesis of rheumatism, L-Leukocytosis). Below, a diagnosis flow box: "Throat cultures growing GABHS OR Elevated anti-streptolysin O titers" plus "2 Major criteria" OR "1 Major criterion AND 2 Minor criteria".',
  figAlt:'a reference chart of the Jones criteria for rheumatic fever diagnosis (major and minor criteria columns, mnemonic JONES CAFE PAL, with a diagnostic-logic box below)',
  expl:'The combination of carditis and arthritis (both major criteria) with fever (a minor criterion) is strongly suggestive of acute rheumatic fever.',
  note:'Read native p0701.jpeg, clear. SIX options printed (a-f), not five -- recorded as printed. Highlighted option c. Carditis with arthritis and fever (index 2). Box present. Topic is RHEUMATIC FEVER (acquired cardiac), not congenital heart disease -- flagged per brief for the drafting pass. Figure is a criteria/mnemonic infographic, not a patient image.' },

{ n:37, pr:37, p:703, key:2,
  stem:'The following condition is not associated with a systolic murmur:',
  opts:['Anemia','Hyperthyroidism with hyperdynamic circulation','Mitral stenosis','Aortic stenosis','Fever.'],
  expl:'Mitral stenosis produces a diastolic murmur, not systolic, unlike the other listed conditions.',
  note:'Read native p0703.jpeg, clear. Highlighted option c. Mitral stenosis (index 2). Box present. No figure.' },

{ n:38, pr:38, p:705, key:0,
  stem:'A 14-year-old boy with a small ventricular septal defect presents to the emergency department with a 2-week history of lethargy and night sweats. On examination, he is pale, has a temperature of 39°C, and looks unwell. Auscultation reveals a loud systolic murmur audible throughout his precordium. There is a palpable splenic tip, and urinalysis shows microscopic hematuria. What is the next step?',
  opts:['Perform at least 3 sets of blood cultures','Immediate surgical repair of VSD','Start empiric antibiotics without cultures','Order an ECG'],
  expl:'This child has infective endocarditis; blood cultures are essential before starting antibiotics to guide therapy.',
  note:'Read native p0705.jpeg, clear. Only FOUR options printed (a-d), not five -- recorded as printed. Highlighted option a. Perform at least 3 sets of blood cultures (index 0). Box present. Topic is INFECTIVE ENDOCARDITIS complicating a known VSD, not plain congenital defect diagnosis -- flagged per brief. No figure.' },

{ n:39, pr:39, p:707, key:0,
  stem:'Atrial septal defect (ASD) typically causes which of the following?',
  opts:['Wide splitting of S2','Fixed S1','Diastolic murmur at apex','Harsh systolic murmur at lower left sternal border'],
  expl:'ASD typically causes fixed wide splitting of the second heart sound due to delayed RV emptying.',
  note:'Read native p0707.jpeg, clear. Only FOUR options printed (a-d), not five -- recorded as printed. Highlighted option a. Wide splitting of S2 (index 0). Box present. No figure.' },

{ n:40, pr:40, p:709, key:0,
  stem:'What is the most common causative agent of infective endocarditis?',
  opts:['Streptococcus viridans','Staphylococcus aureus','Enterococcus','Pseudomonas aeruginosa'],
  expl:'It is the most common cause of subacute infective endocarditis, especially on abnormal valves.',
  note:'Confirmed at 300dpi crop p-0709.jpg (native was already clear). Only FOUR options printed (a-d), not five -- recorded as printed. Highlighted option a. Streptococcus viridans (index 0). Box present. Topic is INFECTIVE ENDOCARDITIS microbiology, not congenital/acquired structural cardiac disease -- flagged per brief. No figure.' },

{ n:41, pr:41, p:711, key:0,
  stem:'Which of the following is NOT true about innocent (physiologic) heart murmurs?',
  opts:['May be diastolic','Usually soft','Occur in an otherwise healthy child','Vary with position or respiration'],
  expl:'Innocent murmurs are always systolic, soft, vary with position, and occur in otherwise healthy children.',
  note:'Read native p0711.jpeg, clear. Only FOUR options printed (a-d), not five -- recorded as printed. Highlighted option a. May be diastolic (index 0). Box present. Same topic as n34/p697 (innocent murmurs, also a NOT-true stem) but different option set (this one has "May be diastolic" and "Vary with position or respiration" instead of "harsh murmurs") -- recorded as a similar but non-identical question, not folded; flagging for the drafting/adjudication pass to compare against n34. No figure.' },

{ n:42, pr:42, p:713, key:3,
  stem:'A 17y old youth is brought to the GP by his mother. He was previously seen 2w earlier suffering from acute pharyngitis. His teeth are in generally poor condition, but otherwise, there is no previous medical history. On examination, he is febrile, with a temperature of 38.2°C and has polyarthritis affecting his knees, ankles, wrists and elbows. He also appears to have SC nodules over his elbows and MR on cardiovascular examination. What diagnosis fits best with this clinical picture?',
  opts:['Bacterial endocarditis','Juvenile rheumatoid arthritis','Scarlet fever','Rheumatic fever','Congenital valvular heart disease'],
  expl:'Recent pharyngitis, migratory polyarthritis, subcutaneous nodules, and murmur are classic features of rheumatic fever',
  note:'Read native p0713.jpeg, clear. Highlighted option d. Rheumatic fever (index 3). Box present. Topic is RHEUMATIC FEVER (acquired cardiac), not congenital heart disease -- flagged per brief. No figure.' },

{ n:43, pr:43, p:715, key:3,
  stem:'All of the following are included in the Jones Major criteria EXCEPT:',
  opts:['Carditis','Migratory arthritis','Chorea','Maculopapular rash','Subcutaneous nodules'],
  expl:'Jones major criteria include carditis, migratory arthritis, chorea, erythema marginatum, and subcutaneous nodules',
  note:'Read native p0715.jpeg, clear. Highlighted option d. Maculopapular rash (index 3). Box present. Topic is RHEUMATIC FEVER (Jones criteria, acquired cardiac), not congenital heart disease -- flagged per brief; also directly adjacent in subject to n36/p701 (same Jones criteria mnemonic figure) though a different question shape (EXCEPT format vs presentation format) -- not folded, flagging for adjudication. No figure.' },

{ n:44, pr:44, p:717, key:3,
  stem:'A 4-week-old baby presents to the GP with poor feeding for 2 days. He is pale with poor peripheral perfusion on arrival. Which of the following is single most useful thing to do in order to diagnose coarctation of the aorta?',
  opts:['Auscultate the heart','Measure four limb blood pressures','Measure upper and lower limb saturations','Palpate the femoral pulses','Perform a chest X-ray'],
  expl:'Weak or absent femoral pulses compared to radial pulses is the most useful finding for diagnosing coarctation.',
  note:'Read native p0717.jpeg, clear. Highlighted option d. Palpate the femoral pulses (index 3). Box present. No figure.' },

{ n:45, pr:45, p:719, key:3,
  stem:'What does a prominent left precordium in a 16-year-old boy with an ejection murmur in the second left intercostal space indicate?',
  opts:['ASD with aortic regurgitation','ASD with aortic stenosis','ASD with mitral regurgitation','ASD with pulmonary hypertension','Uncomplicated ASD'],
  expl:'Prominent precordium with ejection murmur in the 2nd left ICS suggests ASD complicated by pulmonary hypertension.',
  note:'Read native p0719.jpeg, clear. Highlighted option d. ASD with pulmonary hypertension (index 3). Box present. No figure.' },

{ n:46, pr:46, p:721, key:1,
  stem:'A male infant is noted to assume a squatting position frequently during playtime at the daycare center. The mother also notices occasional episodes of perioral cyanosis during some squatting periods, on the day of admission, the child becomes restless, with hyperpnea and deeply cyanosis. The most likely diagnosis is:',
  opts:['Cardiomyopathy','Tetralogy of Fallot','Cystic fibrosis','Ventricular septal defect','Aspiration pneumonia'],
  expl:'Squatting relieves cyanotic spells in ToF by increasing systemic vascular resistance and reducing right-to-left shunt.',
  note:'Read native p0721.jpeg, clear. Highlighted option b. Tetralogy of Fallot (index 1). Box present. No figure.' },

{ n:47, pr:47, p:723, key:0,
  stem:'A 4-year-old boy with known history of small VSD which was not candidate interventional or surgical treatment. Presented to the ER with high fever in the past 2 days, tachycardia, very ill with tender sternum. Which statement is WRONG about this child’s case?',
  opts:['Chest X Ray is the most important confirmatory modality.','CBC & blood culture are very important to confirm diagnosis.','Infective endocarditis is the most probable diagnosis.','Echocardiography may confirm the clinical findings.','Acute phase reactants are usually elevated.'],
  expl:'Wrong, because blood cultures and echocardiography are more important for diagnosing infective endocarditis.',
  note:'Read native p0723.jpeg, clear. Highlighted option a. Chest X Ray is the most important confirmatory modality. (index 0). Box present. Topic is INFECTIVE ENDOCARDITIS complicating a known VSD, same general theme as n38/p705 -- flagged per brief, not folded (different clinical vignette and different question focus, WRONG-statement format vs next-step format).' },

{ n:48, pr:48, p:725, key:4,
  stem:'A neonate is noted to be cyanosed a few days following delivery. Which cardiac abnormality would be the most likely cause?',
  opts:['Ebstein anomaly','Eisenmenger ventricular septal defect (VSD)','Hypoplastic left ventricle','Tetralogy of Fallot with mild pulmonary stenosis','Transposition of the great vessels'],
  expl:'Cyanosis in the first few days of life is most classically caused by TGA, a duct-dependent lesion.',
  note:'Read native p0725.jpeg, clear. Highlighted option e. Transposition of the great vessels (index 4). Box present, no overflow -- box fits on this page. No figure. This is the last page of my assigned range (n48).' },

/* Peds ENDPOINT part 2, section 6 "Cardiac disorders" (pp.607-792), PART D.
   Bare sequence of object literals, no array wrapper, no commas between entries -- per brief.
   n:49-64, section-global, sixteen answered pages given explicitly in the task prompt:
   n49 p.727, n50 p.729, n51 p.731, n52 p.733, n53 p.735, n54 p.737, n55 p.739, n56 p.741,
   n57 p.743, n58 p.745, n59 p.747, n60 p.749, n61 p.751, n62 p.753, n63 p.755, n64 p.757.
   Twin pages (unanswered) are p-1 for each -- 726,728,...,756 -- per task prompt, verified
   programmatically for the whole section. Section does NOT alternate uniformly overall (two
   notes-page parity flips at p.636 and p.689 earlier in the section), but this half's own
   pages run a clean odd sequence -- not extrapolated, taken from the explicit list only.
   OCR index at content\peds\qb-pages\ocr\ep2\ was NOT opened during this pass (transcription only).
   Renders read: native JPEG <SCRATCH>\ep2-index\native\pNNNN.jpeg (800x450 ceiling); 300dpi crop
   only where noted in an entry's note.

   Question-number walk (pr = printed number, page by page):
     n49 pr49 p727 / n50 pr49 p729 (repeat of 49) / n51 pr50 p731 / n52 pr51 p733 /
     n53 pr52 p735 / n54 pr53 p737 / n55 pr54 p739 / n56 pr55 p741 / n57 pr56 p743 /
     n58 pr57 p745 / n59 pr58 p747 / n60 pr59 p749 / n61 pr60 p751 / n62 pr61 p753 /
     n63 pr62 p755 / n64 pr63 p757.
   pr diverges from n throughout this half because the book's own printed numbering repeats
   "49" once (p.727 and p.729 both print 49) and then runs one behind n for the rest of the
   half -- this is the book's own numbering, not a staging error; n is the section-global
   index of record.

   Boundary proof: p.758 rendered and read -- prints "64. A 10-year-old girl is noted to have
   a rumbling diastolic murmur..." UNANSWERED (four options a-d, no highlight, no box). This is
   the twin of the next question after this half (n65, part E's first page), confirming this
   half ends cleanly at n64/p.757 with no gap and no overlap.

   Findings, this half:
   - n56 (p.741): NO printed explanation box (expl:''). Checked next page (p.742) per brief
     3a -- it is the unanswered twin of the FOLLOWING question, confirming ordinary alternation
     resumes and p.741 is not an overflow-box situation.
   - n58 (p.745), n60 (p.749), n61 (p.751), n62 (p.753): each prints only FOUR options (a-d),
     no option e -- a recurring format defect in this half, recorded as printed each time, not
     padded to five.
   - n52 (p.733) is RHEUMATIC FEVER and n57 (p.743) is VIRAL MYOCARDITIS -- both acquired
     cardiac, not congenital; flagged per brief since the section title implies congenital
     lesions by default. All other pages in this half are straightforwardly congenital cardiac
     (ToF, TGA, VSD, PDA, ASD, coarctation, Marfan aortopathy) or innocent-murmur (n59).
   - No figures anywhere in this half -- every one of the sixteen answered pages was read whole
     and is text-only (stem, options, box); zero is measured, not assumed.
   - No shared option menus / pairings noticed in this half (each stem is distinct).
   - No box-on-its-own-page (box:<page>) occurrences in this half.
   - No straddling questions (no straddle:true needed).
   - No numeral/exponent/dose required a 300dpi crop -- all sixteen pages fully legible at
     native 800x450 resolution.
*/

{ n:49, pr:49, p:727, key:2,
  stem:'A 15-year-old patient undergoes echocardiography, which shows a right-sided aortic arch. Which cardiac condition is most likely?',
  opts:['Coarctation of the aorta','Ebstein anomaly','Tetralogy of Fallot','Hypoplastic left ventricle','Noonan syndrome'],
  expl:'Right-sided aortic arch is strongly associated with ToF.',
  note:'Read native p0727.jpeg, fully legible. Option c "Tetralogy of Fallot" highlighted yellow+bold+underlined -> key=2. Box present, transcribed verbatim. No figure. Twin not needed. Straightforward congenital cardiac (ToF).' },

{ n:50, pr:49, p:729, key:0,
  stem:'A 16-year-old boy with Marfan syndrome is reviewed in the Cardiology Clinic. Which cardiac abnormality is most likely to be found?',
  opts:['Aortic regurgitation','Atrial septal defect (ASD)','Dilated cardiomyopathy','Mitral valve stenosis','Persistent ductus arteriosus'],
  expl:'Marfan syndrome predisposes to aortic root dilation, leading to aortic regurgitation',
  note:'Read native p0729.jpeg, fully legible. Option a "Aortic regurgitation" highlighted yellow+bold+underlined -> key=0. Box present, transcribed verbatim (no closing period as printed). No figure. Twin not needed. PRINTED NUMBER REPEATS "49" (also printed on p.727/n49) -- pr transcribed as printed, not renumbered; n is the section-global sequential index and is unaffected. Straightforward cardiac topic (Marfan aortopathy), not a straddling section.' },

{ n:51, pr:50, p:731, key:0,
  stem:"In Fallot's tetralogy, the following is NOT true:",
  opts:['Cyanosis starts at birth in all cases.','X ray shows boot-shaped heart','There is right ventricular hypertrophy','Hematocrit is increased','A very short murmur is heard during hyper-cyanotic spells'],
  expl:'Not true; cyanosis often appears later when RV outflow obstruction worsens.',
  note:'Read native p0731.jpeg, fully legible. Option a "Cyanosis starts at birth in all cases." highlighted yellow+bold+underlined -> key=0. Box present, transcribed verbatim. No figure. Twin not needed. Printed number 50 (n51, pr diverges -- section prints its own running numbering, not 1:1 with n). Straightforward ToF.' },

{ n:52, pr:51, p:733, key:2,
  stem:'Which of the following statements about rheumatic fever is most factually correct?',
  opts:['PR prolongation on the ECG is one of the major diagnostic criteria','Prophylactic antibiotics should be stopped after 3 months','Rheumatic fever is caused by an infection with group A β-hemolytic Streptococcus species','The most common cardiac manifestation of rheumatic fever is an isolated endocarditis, Occurring in over 50% of cases','The most commonly occurring major criterion for diagnosing rheumatic fever is polyarthritis'],
  expl:'it follows untreated strep throat. PR prolongation is minor, and polyarthritis is the most common major criterion.',
  note:'Read native p0733.jpeg, fully legible. Option c highlighted yellow+bold+underlined (spans two lines) -> key=2. Box present, transcribed verbatim. No figure. Twin not needed. TOPIC IS RHEUMATIC FEVER (acquired cardiac), not congenital -- flagging per brief since section title implies congenital/acquired cardiac broadly but this is specifically rheumatic.' },

{ n:53, pr:52, p:735, key:1,
  stem:'Which of the following statements regarding tetralogy of Fallot is most factually correct?',
  opts:['An atrial septal defect is one of the four major components of tetralogy of Fallot.','Cyanotic spells associated with tetralogy of Fallot usually begin around 4-6 months of age.','Finger clubbing usually develops within the first few months of life.','Most patients with tetralogy of Fallot have a left-to-right shunt across the VSD.','The murmur heard in a patient with tetralogy of Fallot becomes louder during cyanotic spells'],
  expl:'ToF cyanotic spells typically appear in infancy at 4–6 months.',
  note:'Read native p0735.jpeg, fully legible. Option b highlighted yellow+bold+underlined (spans two lines) -> key=1. Box present, transcribed verbatim (en dash as printed). No figure. Twin not needed. "4-6" in option b transcribed as printed hyphen (line-wrap in the slide put the digits on separate lines; reconstructed as one hyphenated token, not treated as a word-break hyphen). Straightforward ToF.' },

{ n:54, pr:53, p:737, key:3,
  stem:'A 2-day-old boy with cyanotic congenital heart disease is found to have a PDA. What is the best treatment for his PDA?',
  opts:['Ibuprofen','Surgical ligation','Angiographic ligation','Prostaglandin E1 (PGE) administration','Nitroprusside'],
  expl:'In cyanotic CHD, PDA should be kept open with PGE1 to maintain systemic or pulmonary circulation.',
  note:'Read native p0737.jpeg, fully legible. Option d highlighted yellow+bold+underlined -> key=3. Box present, transcribed verbatim. No figure. Twin not needed. Straightforward cyanotic CHD/duct-dependent physiology.' },

{ n:55, pr:54, p:739, key:3,
  stem:'A baby who is born at term is noted to be cyanosed at six hours of age. There is no history of antenatal problems and the baby was born by vaginal delivery with no complications. Which one of the following diagnoses might the baby have?',
  opts:['Aortic stenosis','Atrial septal defect','Patent ductus arteriosus','Transposition of the great arteries','Ventricular septal defect (VSD)'],
  expl:'TGA presents with severe cyanosis within hours after birth.',
  note:'Read native p0739.jpeg, fully legible. Option d "Transposition of the great arteries" highlighted yellow+bold+underlined -> key=3. Box present, transcribed verbatim. No figure. Twin not needed. Straightforward cyanotic CHD (TGA).' },

{ n:56, pr:55, p:741, key:0,
  stem:'The following statement is WRONG regarding VSD:',
  opts:['The commonest cause of systolic murmur on left parasternal','The most common congenital heart disease','The shunt is left to right but it is potentially cyanotic','The commonest site of shunt is the membranous part of the septum','Not all cases need surgical closure'],
  expl:'',
  note:'Read native p0741.jpeg, fully legible. Option a highlighted yellow+bold+underlined -> key=0. NO printed box on this page (expl empty, as printed). Per brief 3a checked the very next page (p.742) since no box was printed: p.742 is the unanswered twin of the NEXT question (pr56), confirming normal alternation resumes and p.741 is not an overflow-box situation. No figure. Twin p.740 not opened (text fully legible at native res).' },

{ n:57, pr:56, p:743, key:2,
  stem:'An 8-month-old girl is brought to the emergency room because of appearing ill. She is pale and dyspneic with a respiratory rate of 80 breaths per min. Heart rate is 195 beats per min, heart sounds are weak, and a gallop is heard. Chest auscultation reveals fine crepitations. There is cardiomegaly by chest X-ray. She had low grade fever and rhinorrhea 2 days before. The diagnosis suggested by these findings is:',
  opts:['Acute glomerulonephritis','Bronchopneumonia','Viral Myocarditis','Pericarditis','Wide VSD'],
  expl:'Viral prodrome followed by cardiomegaly, tachycardia, gallop rhythm, and heart failure suggests viral myocarditis.',
  note:'Read native p0743.jpeg, fully legible. Option c "Viral Myocarditis" highlighted yellow+bold+underlined -> key=2. Box present (side box, not below stem), transcribed verbatim. No figure. Twin p.742 already read (matches stem/options exactly). TOPIC IS VIRAL MYOCARDITIS (acquired cardiac), not congenital -- flagging per brief.' },

{ n:58, pr:57, p:745, key:0,
  stem:'A 2-day-old baby presents with breathlessness and poor feeding. On examination, she has a soft murmur, a single second heart sound, a 4-cm hepatomegaly, and oxygen saturation of 65%. What is the most likely diagnosis?',
  opts:['Transposition of the great arteries (TGA)','Tetralogy of Fallot','Ventricular septal defect (VSD)','Patent ductus arteriosus (PDA)'],
  expl:'Severe cyanosis, single S2, and hepatomegaly in a neonate is typical of TGA.',
  note:'Read native p0745.jpeg, fully legible. Option a "Transposition of the great arteries (TGA)" highlighted yellow+bold+underlined -> key=0. Box present, transcribed verbatim. No figure. Twin not needed. ⚠️ DEFECT: page prints only FOUR options (a-d), no option e -- recorded, opts array has 4 entries as printed, not padded.' },

{ n:59, pr:58, p:747, key:3,
  stem:'Nada, a 5-month-old female infant has a fever and runny nose for 2 days. On examination, her temperature is 38.3°C and she has a runny nose. Her tongue is pink. Her breathing is normal. Pulse is 130 beats/min. Her heart sounds are normal, but she has a soft systolic murmur at the left sternal edge. Pulses are normal. Select the most likely findings on echocardiography',
  opts:['Atrial septal defect','Coarctation of the aorta','Mitral regurgitation','Normal','Ventricular septal defect'],
  expl:'The murmur is an innocent murmur associated with fever; echo would be normal.',
  note:'Read native p0747.jpeg, fully legible. Option d "Normal" highlighted yellow+bold+underlined -> key=3. Box present (side box), transcribed verbatim. No figure. Twin not needed. Innocent/functional murmur vignette, straightforward.' },

{ n:60, pr:59, p:749, key:0,
  stem:'Which of the following conditions is most commonly associated with a continuous machinery murmur?',
  opts:['Moderate to large patent ductus arteriosus (PDA)','Small PDA','Ventricular septal defect (VSD)','Atrial septal defect (ASD)'],
  expl:'PDA causes the classic continuous "machinery" murmur.',
  note:'Read native p0749.jpeg, fully legible. Option a highlighted yellow+bold+underlined -> key=0. Box present, transcribed verbatim (curly quotes as printed). No figure. Twin not needed. ⚠️ DEFECT: page prints only FOUR options (a-d), no option e -- recorded as printed, matches the same defect shape seen at p.745 (n58).' },

{ n:61, pr:60, p:751, key:1,
  stem:'A 1-year-old infant presents with recurrent respiratory infections and a harsh pansystolic murmur. Which of the following is the most likely diagnosis?',
  opts:['Atrial septal defect (ASD)','Ventricular septal defect (VSD)','Coarctation of the aorta','Patent ductus arteriosus (PDA)'],
  expl:'Recurrent respiratory infections with a harsh pansystolic murmur are classic for VSD.',
  note:'Read native p0751.jpeg, fully legible. Option b highlighted yellow+bold+underlined -> key=1. Box present, transcribed verbatim. No figure. Twin not needed. ⚠️ DEFECT: page prints only FOUR options (a-d), no option e -- third occurrence of this shape in this half (also n58 p.745, n60 p.749).' },

{ n:62, pr:61, p:753, key:0,
  stem:'One week old present with shock. What is most congenital heart disease that can cause?',
  opts:['Coarctation of aorta','VSD','Fallot','ASD'],
  expl:"Coarctation often presents when the ductus arteriosus closes, leading to shock and poor perfusion. VSD, ASD, and Fallot usually don't present this early with shock.",
  note:"Read native p0753.jpeg, fully legible. Option a highlighted yellow+bold+underlined -> key=0. Box present, transcribed verbatim (stem's grammar as printed, not corrected). No figure. Twin not needed. FOURTH occurrence of the four-option defect in this half (also n58, n60, n61)." },

{ n:63, pr:62, p:755, key:4,
  stem:'A 2-year-old girl is brought from home with progressive cyanosis. On examination, she is deeply cyanosed (oxygen saturation 78% in room air) and has mild subcostal retractions. She is alert and not in acute distress. What is the most likely diagnosis?',
  opts:['Diaphragmatic hernia','Large ventricular septal defect (VSD)','Persistent fetal circulation','Transposition of the great arteries (TGA)','Tricuspid atresia'],
  expl:'Progressive cyanosis in a stable, alert 2-year-old without respiratory distress suggests a cyanotic congenital heart disease with decreased pulmonary blood flow. This presentation is characteristic of tricuspid atresia, where poor mixing of blood causes gradual worsening of cyanosis. Other options like diaphragmatic hernia or TGA cause severe neonatal distress, not stable late cyanosis.',
  note:'Read native p0755.jpeg, fully legible. Option e "Tricuspid atresia" highlighted yellow+bold+underlined -> key=4. Box present (side box), transcribed verbatim. No figure. Twin not needed. "A 2-year-old" is printed in red text at the stem opening -- a colour/emphasis cue on the page, transcribed as plain text (colour not representable in stem field, noted here).' },

{ n:64, pr:63, p:757, key:3,
  stem:'A 3-month-old girl presents with breathlessness and excessive sweating during feeding. She weighs 4.3 kg. On examination, her oxygen saturation is 96% in room air, and she has a precordial thrill with a loud pansystolic murmur at the lower left sternal border. Chest X-ray shows cardiomegaly and plethoric lung fields. What is the most likely diagnosis?',
  opts:['Ostium secundum atrial septal defect (ASD)','Coarctation of the aorta','Patent ductus arteriosus (PDA)','Ventricular septal defect (VSD)','Tetralogy of Fallot'],
  expl:'Large VSDs cause left-to-right shunting → heart failure signs (sweating, breathlessness, FTT) and pansystolic murmur with cardiomegaly on X-ray.',
  note:'Read native p0757.jpeg, fully legible. Option d "Ventricular septal defect (VSD)" highlighted yellow+bold+underlined -> key=3. Box present (side box), transcribed verbatim, including the printed arrow glyph between shunting and heart failure signs. No figure. Twin not needed. Last page of this half (n64/64).' },

/* Peds endpoint PART 2, section 6 "Cardiac disorders" (pp.607-792), PART E of the section.
   Staging pass only -- verbatim transcription, no drafting, no chapter assignment.
   Source: Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf -- NEVER modified.
   Renders used: <SCRATCH>\ep2-index\native\pNNNN.jpeg (800x450 ceiling), hires PNG as needed.
   OCR index NOT opened during this pass (per brief SS4).
   This half is a bare sequence of { ... } object literals, no array wrapper, no commas --
   merge-parts-ep2.js restores both. node --check on this file WILL fail; that failure is
   meaningless here. Validate with: node tools/bank-harness/check-part-ep.js <this file>

   Section-global n range for this part: n:65 .. n:81 (17 entries), pages per the task prompt:
   n65 p759, n66 p761, n67 p763, n68 p765, n69 p767, n70 p769, n71 p771, n72 p773, n73 p775,
   n74 p777, n75 p779, n76 p781, n77 p783, n78 p785, n79 p787, n80 p789, n81 p791.
   Twin = p-1 for every entry (unanswered printing), verified odd/even parity holds cleanly
   across this whole half per the task prompt (both section-wide parity flips at p636 and p689
   are behind this range).

   Question-number walk (pr = printed number, read off the page every time, never computed):
   n65 p759 pr=64 -- (recorded below, walk continues as each page is read)
*/

{ n:65, pr:64, p:759, key:0,
  stem:'A 10-year-old girl is noted to have a rumbling diastolic murmur at the apex, which becomes more pronounced during exercise. What is the most likely diagnosis?',
  opts:['Mitral stenosis','Aortic stenosis','Ventricular septal defect (VSD)','Tricuspid regurgitation'],
  expl:'A diastolic rumbling murmur at the apex is classic for mitral stenosis. It becomes more pronounced with exercise due to increased flow across the narrowed valve.',
  note:'4-option page. Key "a. Mitral stenosis" highlighted in yellow, bold+underlined. Boxed explanation present, printed in full below the options. Read from native p0759.jpeg, clear at native resolution, no crop needed.' },

{ n:66, pr:65, p:761, key:0,
  stem:'A 3-month-old female infant is seen during a routine check-up. She is well and thriving, and her peripheral pulses are easily palpable. On examination, a continuous murmur is heard throughout the precordium. What is the most likely diagnosis?',
  opts:['Patent ductus arteriosus (PDA)','Ventricular septal defect (VSD)','Atrial septal defect (ASD)','Coarctation of the aorta'],
  expl:'PDA produces a continuous “machinery” murmur best heard in infancy. Good pulses and thriving suggest a moderate, not severe lesion.',
  note:'4-option page. Key "a. Patent ductus arteriosus (PDA)" highlighted in yellow, bold+underlined. Boxed explanation present. Read from native p0761.jpeg, clear at native resolution, no crop needed. Curly double quotes around machinery reproduced verbatim via unicode escape.' },

{ n:67, pr:66, p:763, key:2,
  stem:'A 3-year-old child presents with fever and runny nose. On examination, a left parasternal harsh pansystolic murmur is heard. What is the next step?',
  opts:['Reassurance and dental hygiene','Surgical correction','Immediate echocardiography','Start antibiotics'],
  expl:'A new pansystolic murmur after infection could mean endocarditis or congenital lesion. Echo is needed to confirm the diagnosis before treatment.',
  note:'4-option page. Key "c. Immediate echocardiography" highlighted in yellow, bold+underlined. Boxed explanation present. Read from native p0763.jpeg, clear at native resolution, no crop needed. Note: could subject leans toward endocarditis/new murmur workup rather than a plain congenital lesion, flagged per brief instruction to say when a page is not straightforwardly congenital/acquired-cardiac; still squarely cardiac.' },

{ n:68, pr:67, p:765, key:0,
  stem:'A 7-week-old infant presents with breathlessness on feeding and failure to thrive. On examination, his femoral pulses are difficult to feel but present. Chest X-ray shows cardiomegaly and increased pulmonary vascular markings. What is the most likely diagnosis?',
  opts:['Coarctation of the aorta','Patent ductus arteriosus (PDA)','Ventricular septal defect (VSD)','Tetralogy of Fallot'],
  expl:'Weak femoral pulses and heart failure signs point to coarctation. Increased pulmonary markings reflect left heart failure due to obstruction.',
  note:'4-option page. Key "a. Coarctation of the aorta" highlighted in yellow, bold+underlined. Boxed explanation present. Read from native p0765.jpeg, clear at native resolution, no crop needed.' },

{ n:69, pr:68, p:767, key:0,
  stem:'A 3-year-old girl has a high fever for three days and developed a red, maculopapular, slightly rough rash spreading from her neck to trunk. She has confluent petechiae in skin folds, a red tongue, and cervical lymphadenopathy. She refuses tonsil examination. What is the most appropriate treatment?',
  opts:['Discharge home with oral phenoxymethylpenicillin','Admit for IV antibiotics','Supportive care only','Start antiviral therapy'],
  expl:'This is scarlet fever (Group A strep with toxin). Outpatient oral penicillin is the correct treatment unless complications are present.',
  note:'⚠️ NOT cardiac -- this page is about scarlet fever (Group A streptococcal infection), not a congenital or acquired cardiac lesion. Flagged for drafting-pass chapter assignment. 4-option page. Key "a. Discharge home with oral phenoxymethylpenicillin" highlighted in yellow, bold+underlined. Boxed explanation present, word "scarlet" and "fever" bold in source. Read from native p0767.jpeg, clear at native resolution, no crop needed.' },

{ n:70, pr:69, p:769, key:3,
  stem:'Which of the following is known to be a "pre-arrest" condition?',
  opts:['Heart failure','Neurologic failure','Hepatic failure','Shock','Renal failure'],
  expl:'Shock is considered a pre-arrest state because it rapidly progresses to cardiac arrest if untreated.',
  note:'5-option page (a-e). Key "d. Shock" highlighted in yellow, bold+underlined. Boxed explanation present. Read from native p0769.jpeg, clear at native resolution, no crop needed. Subject is general shock/pre-arrest recognition (leads to cardiac arrest) rather than a specific congenital or acquired cardiac lesion -- flagged for drafting-pass chapter judgement. Double quotes around pre-arrest reproduced verbatim as printed (straight quotes in source, not curly).' },

{ n:71, pr:70, p:771, key:3,
  stem:'A ten-year-old boy presented in your office with a history of sore throat for 8 days. Physical examination revealed red throat with minimal exudates, cervical lymphadenopathy and fever. A throat culture was positive for group A beta-hemolytic streptococcus. You immediately began treatment with penicillin. A few weeks later, he again presented to your office, complaining of fatigue and loss of appetite. He also complained of some joint pain. Which of the following will establish a diagnosis of rheumatic fever?',
  opts:['Presence of carditis','Presence of carditis and arthralgia','Presence of polyarthritis, fever and evidence of recent streptococcus infection','Presence of carditis, polyarthritis and evidence of recent streptococcus infection','Prolongation of P-R interval, fever and arthralgia'],
  expl:'Diagnosis of rheumatic fever is based on Jones criteria. Carditis + polyarthritis + strep evidence fulfill the major and minor requirements.',
  note:'5-option page (a-e). Key "d. Presence of carditis, polyarthritis and evidence of recent streptococcus infection" highlighted in yellow, bold+underlined. Boxed explanation present, positioned mid-page overlapping options visually but text fully legible; "Jones criteria" bold in source. Subject is acute rheumatic fever (post-streptococcal), not a congenital lesion -- flagged per brief as a likely rheumatic-fever page in this cardiac section. Read from native p0771.jpeg, clear at native resolution, no crop needed.' },

{ n:72, pr:71, p:773, key:3,
  stem:'A 7-year-old girl presents with chorea and is found to have mitral valve regurgitation. Of the following interventions, chronic disability is MOST likely to be prevented by:',
  opts:['Oral prednisone for 4 weeks','Intramuscular penicillin daily for 10 day','Oral haloperidol for 6 weeks','Intramuscular long acting penicillin / 2 weeks','Oral salicylates for 6 weeks'],
  expl:'Secondary prophylaxis with penicillin prevents further streptococcal infections and recurrent rheumatic fever, reducing long-term disability.',
  note:'5-option page (a-e). Key "d. Intramuscular long acting penicillin / 2 weeks" highlighted in yellow, bold+underlined. Boxed explanation present. Rheumatic fever/chorea + mitral regurgitation, sequel of n71 topic. Read from native p0773.jpeg, clear at native resolution, no crop needed.' },

{ n:73, pr:72, p:775, key:4,
  stem:'A 2-month-old infant presents with poor feeding, sweating during feeding, and poor weight gain. Vital signs reveal a respiratory rate of 67/min, pulse of 165/min, and normal values of blood pressure in the upper and lower extremities. The cardiac examination reveals a grade 4 pan-systolic murmur heard over left parasternal line. What is the first step investigation you would order?',
  opts:['Plain X ray chest and heart','ECG','Blood culture','Cardiac catheterization','Echocardiography'],
  expl:'Echo is the best first test to confirm congenital heart disease and guide management. X-ray and ECG are supportive but not diagnostic.',
  note:'5-option page (a-e). Key "e. Echocardiography" highlighted in yellow, bold+underlined, positioned below option d (box overlaps layout, options still fully readable in order a-e). Boxed explanation present, positioned beside option d. Read from native p0775.jpeg, clear at native resolution, no crop needed.' },

{ n:74, pr:73, p:777, key:3,
  stem:'Recognized complications of tetralogy of Fallot EXCEPT',
  opts:['Cerebral thrombosis','Heart failure','Cerebral abscess','Hypoglycemia'],
  expl:'TOF is associated with cerebral abscess, thrombosis, and heart failure, but hypoglycemia is unrelated.',
  note:'4-option page (a-d). Key "d. Hypoglycemia" highlighted in yellow, bold+underlined. Boxed explanation present. Straightforward congenital cardiac (tetralogy of Fallot) complications question. Read from native p0777.jpeg, clear at native resolution, no crop needed.' },

{ n:75, pr:74, p:779, key:3,
  stem:'A 1-day-old term infant is seen postnatally. She is pink in room air, HR 140 bpm, RR 60 bpm. Examination reveals absent femoral pulses and a palpable liver edge 4 cm below the costal margin. Chest X-ray shows a normal cardiac silhouette with clear lung fields. Initial blood tests reveal pH 6.9, pCO₂ 16 mmHg, and elevated lactate. What is the next most appropriate management?',
  opts:['Diuretics','High flow oxygen via a non- rebreathable mask','Intubation and ventilation','Prostaglandin infusion','Transfer to a cardiac center'],
  expl:'Prostaglandin keeps the ductus arteriosus open in duct-dependent lesions like coarctation or critical aortic stenosis, stabilizing circulation.',
  note:'5-option page (a-e). Key "d. Prostaglandin infusion" highlighted in yellow, bold+underlined. Boxed explanation present. Numbers checked at native resolution: HR 140 bpm, RR 60 bpm, liver edge 4 cm, pH 6.9, pCO₂ 16 mmHg -- all clear, no exponents involved, no crop needed. pCO2 subscript-2 is a genuine typeset subscript on the page, reproduced as printed.' },

{ n:76, pr:75, p:781, key:2,
  stem:'The following can increase the risk congenital heart disease in children EXCEPT:',
  opts:['Down syndrome','Maternal diabetes','Hypothyroidism','Congenital rubella','Turner’s syndrome'],
  expl:'CHD is linked with Down syndrome, Turner’s, maternal diabetes, and rubella. Hypothyroidism does not increase CHD risk.',
  note:'5-option page (a-e). Key "c. Hypothyroidism" highlighted in yellow, bold+underlined. Boxed explanation present. Straightforward congenital cardiac risk-factor question. Curly apostrophe in "Turner’s" reproduced verbatim via unicode escape. Read from native p0781.jpeg, clear at native resolution, no crop needed.' },

{ n:77, pr:76, p:783, key:1,
  stem:'A 13-year-old girl is referred for evaluation of short stature. She is pre-pubertal. On auscultation, she has an ejection systolic murmur heard at the second and third left intercostal spaces, radiating to the back, but she is asymptomatic. What is the most likely diagnosis?',
  opts:['Atrioventricular septal defect (AVSD)','Pulmonary valve stenosis','Mitral valve stenosis','Aortic valve stenosis'],
  expl:'Pulmonary stenosis causes an ejection systolic murmur at the upper left sternal border radiating to the back.',
  note:'4-option page (a-d). Key "b. Pulmonary valve stenosis" highlighted in yellow, bold+underlined. Boxed explanation present. Vignette pairs short stature/pre-pubertal (suggestive of Turner syndrome) with a valvular murmur -- flagged for the drafter, though the answer itself is a straight congenital cardiac lesion. Read from native p0783.jpeg, clear at native resolution, no crop needed.' },

{ n:78, pr:77, p:785, key:0,
  stem:'An 8y old boy is referred with pain in his legs when walking. MSK & neuro exam is unremarkable. BP in his RT arm is 160/90mmHg. His femoral pulses are present but slightly difficult to feel. On auscultation, you find an ejection click at the base, accompanied by an ejection systolic murmur heard loudest at the right upper sternal edge, but audible also at the mid-left sternal edge and back. His ECG shows left ventricular hypertrophy, but his chest X-ray is normal. What is the most likely diagnosis?',
  opts:['Coarctation of the aorta','Patent ductus arteriosus (PDA)','Aortic stenosis','Cardiomyopathy associated with Duchenne’s muscular dystrophy (DMD)','Pulmonary stenosis'],
  expl:'This child has upper limb hypertension, weak femoral pulses, leg claudication, and an ejection systolic murmur radiating to the back, all of which are classic for coarctation of the aorta. The ECG shows LVH from pressure overload, and the chest X-ray may still appear normal in early disease.',
  note:'5-option page (a-e). Key "a. Coarctation of the aorta" highlighted in yellow, bold+underlined. Boxed explanation present, several phrases bold/red-highlighted in source (upper limb hypertension, weak femoral pulses, leg claudication, an ejection systolic murmur radiating to the back, LVH) -- transcribed as plain text, formatting not represented. BP verbatim "160/90mmHg" (no space before unit, as printed). Curly apostrophe in "Duchenne’s" reproduced verbatim. Read from native p0785.jpeg, clear at native resolution, no crop needed.' },

{ n:79, pr:78, p:787, key:0,
  stem:'A 4-year-old girl is referred after her GP detects a heart murmur. On examination, she has webbed neck, low posterior hairline, a shield-shaped chest, and cubitus valgus. What is the most likely cause of the murmur?',
  opts:['Coarctation of the aorta','Mitral regurgitation','Patent ductus arteriosus','Pulmonary stenosis'],
  expl:'The girl shows classic features of Turner syndrome (webbed neck, low hairline, shield chest, cubitus valgus). The most common congenital heart defect in Turner syndrome is coarctation of the aorta, which explains the murmur.',
  note:'4-option page (a-d). Key "a. Coarctation of the aorta" highlighted in yellow, bold+underlined. Boxed explanation present, "Turner syndrome" and "coarctation of the aorta" bold in source -- transcribed as plain text. Companion page to n77/n78 on Turner-associated cardiac lesions. Read from native p0787.jpeg, clear at native resolution, no crop needed.' },

{ n:80, pr:79, p:789, key:0,
  stem:'A 4-year-old boy is referred after a murmur was detected during a routine check for a respiratory infection. He is asymptomatic and thriving. On examination, he is pink with normal pulses, normal S1, normally split S2, and an ejection click at the left upper sternal edge. There is a grade 2/6 ejection systolic murmur loudest at the left upper sternal edge, radiating to the back. Diagnosis?',
  opts:['Pulmonary stenosis','Aortic stenosis','Ventricular septal defect','Coarctation of the aorta'],
  expl:'Pulmonary stenosis produces a systolic murmur with ejection click at the upper left sternal edge radiating to the back.',
  note:'4-option page (a-d). Key "a. Pulmonary stenosis" highlighted in yellow, bold+underlined. Boxed explanation present. Straightforward congenital cardiac (pulmonary stenosis) vignette. Read from native p0789.jpeg, clear at native resolution, no crop needed.' },

{ n:81, pr:80, p:791, key:0,
  stem:'An asymptomatic 3-year-old boy presents with a thrill above the sternal notch. He has a harsh ejection systolic murmur, grade 3/6, loudest at the right upper sternal edge, radiating to the carotids. Chest X-ray and ECG are normal. Diagnosis?',
  opts:['Aortic stenosis','Pulmonary stenosis','Coarctation of the aorta','Mitral regurgitation'],
  expl:'Aortic stenosis causes a systolic murmur at the upper sternal edge with radiation to the carotids and a palpable thrill.',
  note:'⚠️ pr DIVERGES FROM n: this is the last page of the section (n=81, task-prompt-confirmed final entry) but the page prints "80.", not "81." -- recorded as measured, not corrected. 4-option page (a-d). Key "a. Aortic stenosis" highlighted in yellow, bold+underlined. Boxed explanation present. Straightforward congenital cardiac (aortic stenosis) vignette. Read from native p0791.jpeg, clear at native resolution, no crop needed.' }

];
