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
  note:'4-option page. Key "a. Mitral stenosis" highlighted in yellow, bold+underlined. Boxed explanation present, printed in full below the options. Read from native p0759.jpeg, clear at native resolution, no crop needed.' }

{ n:66, pr:65, p:761, key:0,
  stem:'A 3-month-old female infant is seen during a routine check-up. She is well and thriving, and her peripheral pulses are easily palpable. On examination, a continuous murmur is heard throughout the precordium. What is the most likely diagnosis?',
  opts:['Patent ductus arteriosus (PDA)','Ventricular septal defect (VSD)','Atrial septal defect (ASD)','Coarctation of the aorta'],
  expl:'PDA produces a continuous “machinery” murmur best heard in infancy. Good pulses and thriving suggest a moderate, not severe lesion.',
  note:'4-option page. Key "a. Patent ductus arteriosus (PDA)" highlighted in yellow, bold+underlined. Boxed explanation present. Read from native p0761.jpeg, clear at native resolution, no crop needed. Curly double quotes around machinery reproduced verbatim via unicode escape.' }

{ n:67, pr:66, p:763, key:2,
  stem:'A 3-year-old child presents with fever and runny nose. On examination, a left parasternal harsh pansystolic murmur is heard. What is the next step?',
  opts:['Reassurance and dental hygiene','Surgical correction','Immediate echocardiography','Start antibiotics'],
  expl:'A new pansystolic murmur after infection could mean endocarditis or congenital lesion. Echo is needed to confirm the diagnosis before treatment.',
  note:'4-option page. Key "c. Immediate echocardiography" highlighted in yellow, bold+underlined. Boxed explanation present. Read from native p0763.jpeg, clear at native resolution, no crop needed. Note: could subject leans toward endocarditis/new murmur workup rather than a plain congenital lesion, flagged per brief instruction to say when a page is not straightforwardly congenital/acquired-cardiac; still squarely cardiac.' }

{ n:68, pr:67, p:765, key:0,
  stem:'A 7-week-old infant presents with breathlessness on feeding and failure to thrive. On examination, his femoral pulses are difficult to feel but present. Chest X-ray shows cardiomegaly and increased pulmonary vascular markings. What is the most likely diagnosis?',
  opts:['Coarctation of the aorta','Patent ductus arteriosus (PDA)','Ventricular septal defect (VSD)','Tetralogy of Fallot'],
  expl:'Weak femoral pulses and heart failure signs point to coarctation. Increased pulmonary markings reflect left heart failure due to obstruction.',
  note:'4-option page. Key "a. Coarctation of the aorta" highlighted in yellow, bold+underlined. Boxed explanation present. Read from native p0765.jpeg, clear at native resolution, no crop needed.' }

{ n:69, pr:68, p:767, key:0,
  stem:'A 3-year-old girl has a high fever for three days and developed a red, maculopapular, slightly rough rash spreading from her neck to trunk. She has confluent petechiae in skin folds, a red tongue, and cervical lymphadenopathy. She refuses tonsil examination. What is the most appropriate treatment?',
  opts:['Discharge home with oral phenoxymethylpenicillin','Admit for IV antibiotics','Supportive care only','Start antiviral therapy'],
  expl:'This is scarlet fever (Group A strep with toxin). Outpatient oral penicillin is the correct treatment unless complications are present.',
  note:'⚠️ NOT cardiac -- this page is about scarlet fever (Group A streptococcal infection), not a congenital or acquired cardiac lesion. Flagged for drafting-pass chapter assignment. 4-option page. Key "a. Discharge home with oral phenoxymethylpenicillin" highlighted in yellow, bold+underlined. Boxed explanation present, word "scarlet" and "fever" bold in source. Read from native p0767.jpeg, clear at native resolution, no crop needed.' }

{ n:70, pr:69, p:769, key:3,
  stem:'Which of the following is known to be a "pre-arrest" condition?',
  opts:['Heart failure','Neurologic failure','Hepatic failure','Shock','Renal failure'],
  expl:'Shock is considered a pre-arrest state because it rapidly progresses to cardiac arrest if untreated.',
  note:'5-option page (a-e). Key "d. Shock" highlighted in yellow, bold+underlined. Boxed explanation present. Read from native p0769.jpeg, clear at native resolution, no crop needed. Subject is general shock/pre-arrest recognition (leads to cardiac arrest) rather than a specific congenital or acquired cardiac lesion -- flagged for drafting-pass chapter judgement. Double quotes around pre-arrest reproduced verbatim as printed (straight quotes in source, not curly).' }

{ n:71, pr:70, p:771, key:3,
  stem:'A ten-year-old boy presented in your office with a history of sore throat for 8 days. Physical examination revealed red throat with minimal exudates, cervical lymphadenopathy and fever. A throat culture was positive for group A beta-hemolytic streptococcus. You immediately began treatment with penicillin. A few weeks later, he again presented to your office, complaining of fatigue and loss of appetite. He also complained of some joint pain. Which of the following will establish a diagnosis of rheumatic fever?',
  opts:['Presence of carditis','Presence of carditis and arthralgia','Presence of polyarthritis, fever and evidence of recent streptococcus infection','Presence of carditis, polyarthritis and evidence of recent streptococcus infection','Prolongation of P-R interval, fever and arthralgia'],
  expl:'Diagnosis of rheumatic fever is based on Jones criteria. Carditis + polyarthritis + strep evidence fulfill the major and minor requirements.',
  note:'5-option page (a-e). Key "d. Presence of carditis, polyarthritis and evidence of recent streptococcus infection" highlighted in yellow, bold+underlined. Boxed explanation present, positioned mid-page overlapping options visually but text fully legible; "Jones criteria" bold in source. Subject is acute rheumatic fever (post-streptococcal), not a congenital lesion -- flagged per brief as a likely rheumatic-fever page in this cardiac section. Read from native p0771.jpeg, clear at native resolution, no crop needed.' }

{ n:72, pr:71, p:773, key:3,
  stem:'A 7-year-old girl presents with chorea and is found to have mitral valve regurgitation. Of the following interventions, chronic disability is MOST likely to be prevented by:',
  opts:['Oral prednisone for 4 weeks','Intramuscular penicillin daily for 10 day','Oral haloperidol for 6 weeks','Intramuscular long acting penicillin / 2 weeks','Oral salicylates for 6 weeks'],
  expl:'Secondary prophylaxis with penicillin prevents further streptococcal infections and recurrent rheumatic fever, reducing long-term disability.',
  note:'5-option page (a-e). Key "d. Intramuscular long acting penicillin / 2 weeks" highlighted in yellow, bold+underlined. Boxed explanation present. Rheumatic fever/chorea + mitral regurgitation, sequel of n71 topic. Read from native p0773.jpeg, clear at native resolution, no crop needed.' }

{ n:73, pr:72, p:775, key:4,
  stem:'A 2-month-old infant presents with poor feeding, sweating during feeding, and poor weight gain. Vital signs reveal a respiratory rate of 67/min, pulse of 165/min, and normal values of blood pressure in the upper and lower extremities. The cardiac examination reveals a grade 4 pan-systolic murmur heard over left parasternal line. What is the first step investigation you would order?',
  opts:['Plain X ray chest and heart','ECG','Blood culture','Cardiac catheterization','Echocardiography'],
  expl:'Echo is the best first test to confirm congenital heart disease and guide management. X-ray and ECG are supportive but not diagnostic.',
  note:'5-option page (a-e). Key "e. Echocardiography" highlighted in yellow, bold+underlined, positioned below option d (box overlaps layout, options still fully readable in order a-e). Boxed explanation present, positioned beside option d. Read from native p0775.jpeg, clear at native resolution, no crop needed.' }

{ n:74, pr:73, p:777, key:3,
  stem:'Recognized complications of tetralogy of Fallot EXCEPT',
  opts:['Cerebral thrombosis','Heart failure','Cerebral abscess','Hypoglycemia'],
  expl:'TOF is associated with cerebral abscess, thrombosis, and heart failure, but hypoglycemia is unrelated.',
  note:'4-option page (a-d). Key "d. Hypoglycemia" highlighted in yellow, bold+underlined. Boxed explanation present. Straightforward congenital cardiac (tetralogy of Fallot) complications question. Read from native p0777.jpeg, clear at native resolution, no crop needed.' }

{ n:75, pr:74, p:779, key:3,
  stem:'A 1-day-old term infant is seen postnatally. She is pink in room air, HR 140 bpm, RR 60 bpm. Examination reveals absent femoral pulses and a palpable liver edge 4 cm below the costal margin. Chest X-ray shows a normal cardiac silhouette with clear lung fields. Initial blood tests reveal pH 6.9, pCO₂ 16 mmHg, and elevated lactate. What is the next most appropriate management?',
  opts:['Diuretics','High flow oxygen via a non- rebreathable mask','Intubation and ventilation','Prostaglandin infusion','Transfer to a cardiac center'],
  expl:'Prostaglandin keeps the ductus arteriosus open in duct-dependent lesions like coarctation or critical aortic stenosis, stabilizing circulation.',
  note:'5-option page (a-e). Key "d. Prostaglandin infusion" highlighted in yellow, bold+underlined. Boxed explanation present. Numbers checked at native resolution: HR 140 bpm, RR 60 bpm, liver edge 4 cm, pH 6.9, pCO₂ 16 mmHg -- all clear, no exponents involved, no crop needed. pCO2 subscript-2 is a genuine typeset subscript on the page, reproduced as printed.' }

{ n:76, pr:75, p:781, key:2,
  stem:'The following can increase the risk congenital heart disease in children EXCEPT:',
  opts:['Down syndrome','Maternal diabetes','Hypothyroidism','Congenital rubella','Turner’s syndrome'],
  expl:'CHD is linked with Down syndrome, Turner’s, maternal diabetes, and rubella. Hypothyroidism does not increase CHD risk.',
  note:'5-option page (a-e). Key "c. Hypothyroidism" highlighted in yellow, bold+underlined. Boxed explanation present. Straightforward congenital cardiac risk-factor question. Curly apostrophe in "Turner’s" reproduced verbatim via unicode escape. Read from native p0781.jpeg, clear at native resolution, no crop needed.' }

{ n:77, pr:76, p:783, key:1,
  stem:'A 13-year-old girl is referred for evaluation of short stature. She is pre-pubertal. On auscultation, she has an ejection systolic murmur heard at the second and third left intercostal spaces, radiating to the back, but she is asymptomatic. What is the most likely diagnosis?',
  opts:['Atrioventricular septal defect (AVSD)','Pulmonary valve stenosis','Mitral valve stenosis','Aortic valve stenosis'],
  expl:'Pulmonary stenosis causes an ejection systolic murmur at the upper left sternal border radiating to the back.',
  note:'4-option page (a-d). Key "b. Pulmonary valve stenosis" highlighted in yellow, bold+underlined. Boxed explanation present. Vignette pairs short stature/pre-pubertal (suggestive of Turner syndrome) with a valvular murmur -- flagged for the drafter, though the answer itself is a straight congenital cardiac lesion. Read from native p0783.jpeg, clear at native resolution, no crop needed.' }

{ n:78, pr:77, p:785, key:0,
  stem:'An 8y old boy is referred with pain in his legs when walking. MSK & neuro exam is unremarkable. BP in his RT arm is 160/90mmHg. His femoral pulses are present but slightly difficult to feel. On auscultation, you find an ejection click at the base, accompanied by an ejection systolic murmur heard loudest at the right upper sternal edge, but audible also at the mid-left sternal edge and back. His ECG shows left ventricular hypertrophy, but his chest X-ray is normal. What is the most likely diagnosis?',
  opts:['Coarctation of the aorta','Patent ductus arteriosus (PDA)','Aortic stenosis','Cardiomyopathy associated with Duchenne’s muscular dystrophy (DMD)','Pulmonary stenosis'],
  expl:'This child has upper limb hypertension, weak femoral pulses, leg claudication, and an ejection systolic murmur radiating to the back, all of which are classic for coarctation of the aorta. The ECG shows LVH from pressure overload, and the chest X-ray may still appear normal in early disease.',
  note:'5-option page (a-e). Key "a. Coarctation of the aorta" highlighted in yellow, bold+underlined. Boxed explanation present, several phrases bold/red-highlighted in source (upper limb hypertension, weak femoral pulses, leg claudication, an ejection systolic murmur radiating to the back, LVH) -- transcribed as plain text, formatting not represented. BP verbatim "160/90mmHg" (no space before unit, as printed). Curly apostrophe in "Duchenne’s" reproduced verbatim. Read from native p0785.jpeg, clear at native resolution, no crop needed.' }

{ n:79, pr:78, p:787, key:0,
  stem:'A 4-year-old girl is referred after her GP detects a heart murmur. On examination, she has webbed neck, low posterior hairline, a shield-shaped chest, and cubitus valgus. What is the most likely cause of the murmur?',
  opts:['Coarctation of the aorta','Mitral regurgitation','Patent ductus arteriosus','Pulmonary stenosis'],
  expl:'The girl shows classic features of Turner syndrome (webbed neck, low hairline, shield chest, cubitus valgus). The most common congenital heart defect in Turner syndrome is coarctation of the aorta, which explains the murmur.',
  note:'4-option page (a-d). Key "a. Coarctation of the aorta" highlighted in yellow, bold+underlined. Boxed explanation present, "Turner syndrome" and "coarctation of the aorta" bold in source -- transcribed as plain text. Companion page to n77/n78 on Turner-associated cardiac lesions. Read from native p0787.jpeg, clear at native resolution, no crop needed.' }

{ n:80, pr:79, p:789, key:0,
  stem:'A 4-year-old boy is referred after a murmur was detected during a routine check for a respiratory infection. He is asymptomatic and thriving. On examination, he is pink with normal pulses, normal S1, normally split S2, and an ejection click at the left upper sternal edge. There is a grade 2/6 ejection systolic murmur loudest at the left upper sternal edge, radiating to the back. Diagnosis?',
  opts:['Pulmonary stenosis','Aortic stenosis','Ventricular septal defect','Coarctation of the aorta'],
  expl:'Pulmonary stenosis produces a systolic murmur with ejection click at the upper left sternal edge radiating to the back.',
  note:'4-option page (a-d). Key "a. Pulmonary stenosis" highlighted in yellow, bold+underlined. Boxed explanation present. Straightforward congenital cardiac (pulmonary stenosis) vignette. Read from native p0789.jpeg, clear at native resolution, no crop needed.' }

{ n:81, pr:80, p:791, key:0,
  stem:'An asymptomatic 3-year-old boy presents with a thrill above the sternal notch. He has a harsh ejection systolic murmur, grade 3/6, loudest at the right upper sternal edge, radiating to the carotids. Chest X-ray and ECG are normal. Diagnosis?',
  opts:['Aortic stenosis','Pulmonary stenosis','Coarctation of the aorta','Mitral regurgitation'],
  expl:'Aortic stenosis causes a systolic murmur at the upper sternal edge with radiation to the carotids and a palpable thrill.',
  note:'⚠️ pr DIVERGES FROM n: this is the last page of the section (n=81, task-prompt-confirmed final entry) but the page prints "80.", not "81." -- recorded as measured, not corrected. 4-option page (a-d). Key "a. Aortic stenosis" highlighted in yellow, bold+underlined. Boxed explanation present. Straightforward congenital cardiac (aortic stenosis) vignette. Read from native p0791.jpeg, clear at native resolution, no crop needed.' }
