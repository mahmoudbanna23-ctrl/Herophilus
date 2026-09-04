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
  note:'Read native p0727.jpeg, fully legible. Option c "Tetralogy of Fallot" highlighted yellow+bold+underlined -> key=2. Box present, transcribed verbatim. No figure. Twin not needed. Straightforward congenital cardiac (ToF).' }

{ n:50, pr:49, p:729, key:0,
  stem:'A 16-year-old boy with Marfan syndrome is reviewed in the Cardiology Clinic. Which cardiac abnormality is most likely to be found?',
  opts:['Aortic regurgitation','Atrial septal defect (ASD)','Dilated cardiomyopathy','Mitral valve stenosis','Persistent ductus arteriosus'],
  expl:'Marfan syndrome predisposes to aortic root dilation, leading to aortic regurgitation',
  note:'Read native p0729.jpeg, fully legible. Option a "Aortic regurgitation" highlighted yellow+bold+underlined -> key=0. Box present, transcribed verbatim (no closing period as printed). No figure. Twin not needed. PRINTED NUMBER REPEATS "49" (also printed on p.727/n49) -- pr transcribed as printed, not renumbered; n is the section-global sequential index and is unaffected. Straightforward cardiac topic (Marfan aortopathy), not a straddling section.' }

{ n:51, pr:50, p:731, key:0,
  stem:"In Fallot's tetralogy, the following is NOT true:",
  opts:['Cyanosis starts at birth in all cases.','X ray shows boot-shaped heart','There is right ventricular hypertrophy','Hematocrit is increased','A very short murmur is heard during hyper-cyanotic spells'],
  expl:'Not true; cyanosis often appears later when RV outflow obstruction worsens.',
  note:'Read native p0731.jpeg, fully legible. Option a "Cyanosis starts at birth in all cases." highlighted yellow+bold+underlined -> key=0. Box present, transcribed verbatim. No figure. Twin not needed. Printed number 50 (n51, pr diverges -- section prints its own running numbering, not 1:1 with n). Straightforward ToF.' }

{ n:52, pr:51, p:733, key:2,
  stem:'Which of the following statements about rheumatic fever is most factually correct?',
  opts:['PR prolongation on the ECG is one of the major diagnostic criteria','Prophylactic antibiotics should be stopped after 3 months','Rheumatic fever is caused by an infection with group A β-hemolytic Streptococcus species','The most common cardiac manifestation of rheumatic fever is an isolated endocarditis, Occurring in over 50% of cases','The most commonly occurring major criterion for diagnosing rheumatic fever is polyarthritis'],
  expl:'it follows untreated strep throat. PR prolongation is minor, and polyarthritis is the most common major criterion.',
  note:'Read native p0733.jpeg, fully legible. Option c highlighted yellow+bold+underlined (spans two lines) -> key=2. Box present, transcribed verbatim. No figure. Twin not needed. TOPIC IS RHEUMATIC FEVER (acquired cardiac), not congenital -- flagging per brief since section title implies congenital/acquired cardiac broadly but this is specifically rheumatic.' }

{ n:53, pr:52, p:735, key:1,
  stem:'Which of the following statements regarding tetralogy of Fallot is most factually correct?',
  opts:['An atrial septal defect is one of the four major components of tetralogy of Fallot.','Cyanotic spells associated with tetralogy of Fallot usually begin around 4-6 months of age.','Finger clubbing usually develops within the first few months of life.','Most patients with tetralogy of Fallot have a left-to-right shunt across the VSD.','The murmur heard in a patient with tetralogy of Fallot becomes louder during cyanotic spells'],
  expl:'ToF cyanotic spells typically appear in infancy at 4–6 months.',
  note:'Read native p0735.jpeg, fully legible. Option b highlighted yellow+bold+underlined (spans two lines) -> key=1. Box present, transcribed verbatim (en dash as printed). No figure. Twin not needed. "4-6" in option b transcribed as printed hyphen (line-wrap in the slide put the digits on separate lines; reconstructed as one hyphenated token, not treated as a word-break hyphen). Straightforward ToF.' }

{ n:54, pr:53, p:737, key:3,
  stem:'A 2-day-old boy with cyanotic congenital heart disease is found to have a PDA. What is the best treatment for his PDA?',
  opts:['Ibuprofen','Surgical ligation','Angiographic ligation','Prostaglandin E1 (PGE) administration','Nitroprusside'],
  expl:'In cyanotic CHD, PDA should be kept open with PGE1 to maintain systemic or pulmonary circulation.',
  note:'Read native p0737.jpeg, fully legible. Option d highlighted yellow+bold+underlined -> key=3. Box present, transcribed verbatim. No figure. Twin not needed. Straightforward cyanotic CHD/duct-dependent physiology.' }

{ n:55, pr:54, p:739, key:3,
  stem:'A baby who is born at term is noted to be cyanosed at six hours of age. There is no history of antenatal problems and the baby was born by vaginal delivery with no complications. Which one of the following diagnoses might the baby have?',
  opts:['Aortic stenosis','Atrial septal defect','Patent ductus arteriosus','Transposition of the great arteries','Ventricular septal defect (VSD)'],
  expl:'TGA presents with severe cyanosis within hours after birth.',
  note:'Read native p0739.jpeg, fully legible. Option d "Transposition of the great arteries" highlighted yellow+bold+underlined -> key=3. Box present, transcribed verbatim. No figure. Twin not needed. Straightforward cyanotic CHD (TGA).' }

{ n:56, pr:55, p:741, key:0,
  stem:'The following statement is WRONG regarding VSD:',
  opts:['The commonest cause of systolic murmur on left parasternal','The most common congenital heart disease','The shunt is left to right but it is potentially cyanotic','The commonest site of shunt is the membranous part of the septum','Not all cases need surgical closure'],
  expl:'',
  note:'Read native p0741.jpeg, fully legible. Option a highlighted yellow+bold+underlined -> key=0. NO printed box on this page (expl empty, as printed). Per brief 3a checked the very next page (p.742) since no box was printed: p.742 is the unanswered twin of the NEXT question (pr56), confirming normal alternation resumes and p.741 is not an overflow-box situation. No figure. Twin p.740 not opened (text fully legible at native res).' }

{ n:57, pr:56, p:743, key:2,
  stem:'An 8-month-old girl is brought to the emergency room because of appearing ill. She is pale and dyspneic with a respiratory rate of 80 breaths per min. Heart rate is 195 beats per min, heart sounds are weak, and a gallop is heard. Chest auscultation reveals fine crepitations. There is cardiomegaly by chest X-ray. She had low grade fever and rhinorrhea 2 days before. The diagnosis suggested by these findings is:',
  opts:['Acute glomerulonephritis','Bronchopneumonia','Viral Myocarditis','Pericarditis','Wide VSD'],
  expl:'Viral prodrome followed by cardiomegaly, tachycardia, gallop rhythm, and heart failure suggests viral myocarditis.',
  note:'Read native p0743.jpeg, fully legible. Option c "Viral Myocarditis" highlighted yellow+bold+underlined -> key=2. Box present (side box, not below stem), transcribed verbatim. No figure. Twin p.742 already read (matches stem/options exactly). TOPIC IS VIRAL MYOCARDITIS (acquired cardiac), not congenital -- flagging per brief.' }

{ n:58, pr:57, p:745, key:0,
  stem:'A 2-day-old baby presents with breathlessness and poor feeding. On examination, she has a soft murmur, a single second heart sound, a 4-cm hepatomegaly, and oxygen saturation of 65%. What is the most likely diagnosis?',
  opts:['Transposition of the great arteries (TGA)','Tetralogy of Fallot','Ventricular septal defect (VSD)','Patent ductus arteriosus (PDA)'],
  expl:'Severe cyanosis, single S2, and hepatomegaly in a neonate is typical of TGA.',
  note:'Read native p0745.jpeg, fully legible. Option a "Transposition of the great arteries (TGA)" highlighted yellow+bold+underlined -> key=0. Box present, transcribed verbatim. No figure. Twin not needed. ⚠️ DEFECT: page prints only FOUR options (a-d), no option e -- recorded, opts array has 4 entries as printed, not padded.' }

{ n:59, pr:58, p:747, key:3,
  stem:'Nada, a 5-month-old female infant has a fever and runny nose for 2 days. On examination, her temperature is 38.3°C and she has a runny nose. Her tongue is pink. Her breathing is normal. Pulse is 130 beats/min. Her heart sounds are normal, but she has a soft systolic murmur at the left sternal edge. Pulses are normal. Select the most likely findings on echocardiography',
  opts:['Atrial septal defect','Coarctation of the aorta','Mitral regurgitation','Normal','Ventricular septal defect'],
  expl:'The murmur is an innocent murmur associated with fever; echo would be normal.',
  note:'Read native p0747.jpeg, fully legible. Option d "Normal" highlighted yellow+bold+underlined -> key=3. Box present (side box), transcribed verbatim. No figure. Twin not needed. Innocent/functional murmur vignette, straightforward.' }

{ n:60, pr:59, p:749, key:0,
  stem:'Which of the following conditions is most commonly associated with a continuous machinery murmur?',
  opts:['Moderate to large patent ductus arteriosus (PDA)','Small PDA','Ventricular septal defect (VSD)','Atrial septal defect (ASD)'],
  expl:'PDA causes the classic continuous "machinery" murmur.',
  note:'Read native p0749.jpeg, fully legible. Option a highlighted yellow+bold+underlined -> key=0. Box present, transcribed verbatim (curly quotes as printed). No figure. Twin not needed. ⚠️ DEFECT: page prints only FOUR options (a-d), no option e -- recorded as printed, matches the same defect shape seen at p.745 (n58).' }

{ n:61, pr:60, p:751, key:1,
  stem:'A 1-year-old infant presents with recurrent respiratory infections and a harsh pansystolic murmur. Which of the following is the most likely diagnosis?',
  opts:['Atrial septal defect (ASD)','Ventricular septal defect (VSD)','Coarctation of the aorta','Patent ductus arteriosus (PDA)'],
  expl:'Recurrent respiratory infections with a harsh pansystolic murmur are classic for VSD.',
  note:'Read native p0751.jpeg, fully legible. Option b highlighted yellow+bold+underlined -> key=1. Box present, transcribed verbatim. No figure. Twin not needed. ⚠️ DEFECT: page prints only FOUR options (a-d), no option e -- third occurrence of this shape in this half (also n58 p.745, n60 p.749).' }

{ n:62, pr:61, p:753, key:0,
  stem:'One week old present with shock. What is most congenital heart disease that can cause?',
  opts:['Coarctation of aorta','VSD','Fallot','ASD'],
  expl:"Coarctation often presents when the ductus arteriosus closes, leading to shock and poor perfusion. VSD, ASD, and Fallot usually don't present this early with shock.",
  note:"Read native p0753.jpeg, fully legible. Option a highlighted yellow+bold+underlined -> key=0. Box present, transcribed verbatim (stem's grammar as printed, not corrected). No figure. Twin not needed. FOURTH occurrence of the four-option defect in this half (also n58, n60, n61)." }

{ n:63, pr:62, p:755, key:4,
  stem:'A 2-year-old girl is brought from home with progressive cyanosis. On examination, she is deeply cyanosed (oxygen saturation 78% in room air) and has mild subcostal retractions. She is alert and not in acute distress. What is the most likely diagnosis?',
  opts:['Diaphragmatic hernia','Large ventricular septal defect (VSD)','Persistent fetal circulation','Transposition of the great arteries (TGA)','Tricuspid atresia'],
  expl:'Progressive cyanosis in a stable, alert 2-year-old without respiratory distress suggests a cyanotic congenital heart disease with decreased pulmonary blood flow. This presentation is characteristic of tricuspid atresia, where poor mixing of blood causes gradual worsening of cyanosis. Other options like diaphragmatic hernia or TGA cause severe neonatal distress, not stable late cyanosis.',
  note:'Read native p0755.jpeg, fully legible. Option e "Tricuspid atresia" highlighted yellow+bold+underlined -> key=4. Box present (side box), transcribed verbatim. No figure. Twin not needed. "A 2-year-old" is printed in red text at the stem opening -- a colour/emphasis cue on the page, transcribed as plain text (colour not representable in stem field, noted here).' }

{ n:64, pr:63, p:757, key:3,
  stem:'A 3-month-old girl presents with breathlessness and excessive sweating during feeding. She weighs 4.3 kg. On examination, her oxygen saturation is 96% in room air, and she has a precordial thrill with a loud pansystolic murmur at the lower left sternal border. Chest X-ray shows cardiomegaly and plethoric lung fields. What is the most likely diagnosis?',
  opts:['Ostium secundum atrial septal defect (ASD)','Coarctation of the aorta','Patent ductus arteriosus (PDA)','Ventricular septal defect (VSD)','Tetralogy of Fallot'],
  expl:'Large VSDs cause left-to-right shunting → heart failure signs (sweating, breathlessness, FTT) and pansystolic murmur with cardiomegaly on X-ray.',
  note:'Read native p0757.jpeg, fully legible. Option d "Ventricular septal defect (VSD)" highlighted yellow+bold+underlined -> key=3. Box present (side box), transcribed verbatim, including the printed arrow glyph between shunting and heart failure signs. No figure. Twin not needed. Last page of this half (n64/64).' }
