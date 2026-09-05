/* ===========================================================================
   ENDPOINT - Pediatrics endpoint part2.pdf - MODEL FINAL EXAM 3
   Verbatim staging record. PDF pages 1595-1756; PDF page = printed page, offset zero.
   Merged from endpoint-p2-s14-mfe3.part-A.js + endpoint-p2-s14-mfe3.part-B.js + endpoint-p2-s14-mfe3.part-C.js + endpoint-p2-s14-mfe3.part-D.js by merge-parts-ep2.js.
   
   Every question is printed TWICE: an unanswered page, then the ANSWERED page with the key
   highlighted in yellow and (usually) a bordered explanation box. Only answered pages are
   staged. `n` is the true sequential index, `pr` what the page prints, `p` the PDF page,
   `key` a ZERO-BASED INDEX into `opts` (never a letter), matching the app field `answer`,
   `expl` the printed box verbatim or "".
   =========================================================================== */
var PEDEP2_S14_STAGED = [

/* Peds endpoint PART 2, section 14 "Model Final Exam 3", quarter A.
   n1..n20 (SECTION-GLOBAL, this section's part A so n starts at 1), answered pages
   1597,1599,...,1635 (p = 1595 + 2n). Confirmed p.1595 banner reads "Model Final Exam 3" (image).
   OCR NOT consulted for transcription (search index only, per brief §4).
   Twin (unanswered) page read wherever the answered page's text was not certain on first read.
   Header extended after every entry; see note fields for per-entry verification method.

   Page-by-page walk (printed number pr vs section-global n) -- filled in as staged:
   n1  p1597 pr1   n2  p1599 pr2   n3  p1601 pr3   n4  p1603 pr4   n5  p1605 pr5
   n6  p1607 pr6   n7  p1609 pr7   n8  p1611 pr8   n9  p1613 pr9   n10 p1615 pr10
   n11 p1617 pr11  n12 p1619 pr12  n13 p1621 pr13  n14 p1623 pr14  n15 p1625 pr15
   n16 p1627 pr16  n17 p1629 pr17  n18 p1631 pr18  n19 p1633 pr19  n20 p1635 pr20

   Boundary proof: p.1637 (one past the range, p = 1595+2*21) is ALREADY ANSWERED, printing Q21
   "A 6-year-old boy with a history of large VSD presents with central cyanosis and oxygen
   saturation of 81%...", key B "Shunt reversal" highlighted, box present -- this is n21, opening
   entry of the next quarter, following the same p=1595+2n formula as every entry in this quarter.
   No gap, no overlap, no repeated printed number crossing the boundary.

   All 20 answered pages carried a printed explanation box; no boxless pages, no overflow boxes,
   no alternation breaks and no figures in this quarter -- each stated as measured, every page
   opened whole. No shared-menu pairings and no cross-bank matches noticed in this quarter (not
   an exhaustive cross-bank search, just nothing flagged in the course of reading).
*/

{ n:1, pr:1, p:1597, key:2,
  stem:'A 12-year-old boy presents to the clinic with complaints of fatigue and reduced concentration at school. His complete blood count shows a mean corpuscular volume (MCV) of 69 fL. There is no evidence of hepatosplenomegaly on physical examination.\n\nWhich of the following is the most likely cause of his anemia?',
  opts:['Sickle cell anemia','Thalassemia','Iron deficiency anemia','Vitamin B12 deficiency','Folate deficiency'],
  expl:'MCV of 69 fL indicates microcytic anemia, and fatigue with poor concentration is typical of iron deficiency. Thalassemia usually has a family history, and B12/folate deficiencies cause macrocytic anemia.',
  note:'Read on hires p1597, fully legible, no twin needed. Highlighted option is C "Iron deficiency anemia" = index 2. Numeral "69 fL" checked, reads clearly.' },

{ n:2, pr:2, p:1599, key:4,
  stem:'An 8-year-old boy is evaluated for shortness of breath and easy fatigability. On examination, his heart rate is 90/min, respiratory rate is 28/min, and oxygen saturation is 95% at rest on room air. S2 is normal. There is a harsh, pan-systolic grade III/VI murmur best heard at the lower left sternal edge.\n\nWhat is the most likely diagnosis?',
  opts:['Atrial septal defect','Mitral regurgitation','Pulmonary stenosis','Tricuspid stenosis','Ventricular septal defect'],
  expl:'A pan-systolic murmur at the lower left sternal edge is characteristic of VSD. Atrial septal defect usually produces a systolic ejection murmur at the upper left sternal border.',
  note:'Read on hires p1599, fully legible, no twin needed. Highlighted option is E "Ventricular septal defect" = index 4. Numerals "90/min", "28/min", "95%", "III/VI" checked, all read clearly.' },

{ n:3, pr:3, p:1601, key:2,
  stem:'A 4-year-old child presents with periorbital edema and abdominal distension. Urine protein:creatinine ratio is 300 mg/mmol. Physical examination reveals moderate ascites, scrotal, sacral, and lower limb edema.\n\nWhich of the following findings suggests a good response to steroid therapy?',
  opts:['Family history of renal disease','Hypertension','Normal serum complements','High serum creatinine','Gross hematuria'],
  expl:'Minimal change disease responds well to steroids and typically shows normal complement levels. Hypertension, hematuria, or impaired renal function suggest other glomerular diseases.',
  note:'Read on hires p1601, fully legible, no twin needed. Highlighted option is C "Normal serum complements" = index 2. Numeral "300 mg/mmol" checked, reads clearly.' },

{ n:4, pr:4, p:1603, key:0,
  stem:'A 7-day-old baby is admitted to the neonatal unit with respiratory distress and jaundice. A full septic screen is performed, which yields E. coli positive blood cultures. Ophthalmological assessment confirms the presence of cataracts.\n\nWhat is the most likely diagnosis?',
  opts:['Galactosemia','Neonatal hepatitis','Biliary atresia','Hypothyroidism','Breast milk jaundice'],
  expl:'Galactosemia presents with E. coli sepsis, jaundice, and cataracts due to accumulation of galactose-1-phosphate. Other options do not explain the combination of cataracts and sepsis.',
  note:'Read on hires p1603, fully legible, no twin needed. Highlighted option is A "Galactosemia" = index 0.' },

{ n:5, pr:5, p:1605, key:3,
  stem:'A 12-year-old girl experienced signs 3 days before manifesting progressive weakness and inability to walk. Examination reveals marked symmetrical muscle weakness without atrophy. Deep tendon reflexes are absent at the ankles and 1+ at the knees.What is the most likely diagnosis?',
  opts:['Disorder of neuromuscular transmission','Muscle disorder','Poliomyelitis','Guillain-Barré syndrome','Disorder of anterior horn cell'],
  expl:'Rapidly progressive symmetric weakness with hyporeflexia/areflexia is classic for GBS. Muscle disorders and poliomyelitis usually have different patterns of weakness and reflex changes.',
  note:'Read on hires p1605, fully legible, no twin needed. Highlighted option is D "Guillain-Barré syndrome" = index 3. Stem prints "the knees.What" with no space, transcribed verbatim.' },

{ n:6, pr:6, p:1607, key:2,
  stem:'A 6-year-old boy with a known diagnosis of ventricular septal defect has a 2-week history of fever of unknown source, fatigue, weight loss, myalgia, and headaches. On repeated examinations during this time, he is found to have developed a new heart murmur, petechiae, and mild splenomegaly.\n\nWhich of the following investigations are essential to establish a diagnosis?',
  opts:['Echocardiography & ECG','Complete blood count & CRP','Blood culture & Echocardiography','ASOT & CRP','Chest X-ray & ECG'],
  expl:'These are hallmark features of infective endocarditis, which is confirmed by blood cultures and echocardiography.',
  note:'Read on hires p1607, fully legible, no twin needed. Highlighted option is C "Blood culture & Echocardiography" = index 2.' },

{ n:7, pr:7, p:1609, key:0,
  stem:'A 1-month-old infant is taken to his general practitioner by his mother because of vomiting and not taking his feeds as usual during the last 24 hours. He is irritable and has a temperature of 39°C. His heart rate is 170 beats/min and respiratory rate 45 breaths/min. The remainder of his examination is unremarkable. Urine examination shows innumerable pus cells and is positive for nitrites and protein on dipstick.What is the most appropriate next course of action?',
  opts:['Intravenous antibiotics','Intravenous fluids','Oral antibiotics','Oral paracetamol','Oral rehydration solution'],
  expl:'Febrile infants <2 months require IV antibiotics due to risk of sepsis. Oral therapy is insufficient at this age.',
  note:'Read on hires p1609, fully legible, no twin needed. Highlighted option is A "Intravenous antibiotics" = index 0. Numerals "39°C", "170 beats/min", "45 breaths/min" checked, all read clearly. Stem prints "dipstick.What" with no space, transcribed verbatim.' },

{ n:8, pr:8, p:1611, key:2,
  stem:'An 8-year-old girl presents with severe pain in her hands and abdomen. On examination, there is mucosal pallor, yellow sclerae, and hepatosplenomegaly. Blood tests show: Hb 6.1 g/dL, MCV 78 fL (normal), WCC 6,000/ml, platelets 300,000/ml.\n\nWhat is the most likely cause of her anemia?',
  opts:['Thalassemia','Iron deficiency anemia','Sickle cell disease','Anemia of chronic disease','Glucose-6-phosphate dehydrogenase deficiency'],
  expl:'Normal MCV with hemolytic features (jaundice, pain crises, splenomegaly) points to sickle cell disease. Thalassemia typically presents with microcytosis.',
  note:'Read on hires p1611, fully legible, no twin needed. Highlighted option is C "Sickle cell disease" = index 2. Numerals "6.1 g/dL", "78 fL", "6,000/ml", "300,000/ml" checked, all read clearly, no exponents on this page.' },

{ n:9, pr:9, p:1613, key:3,
  stem:'A 4-year-old girl has been admitted to the ward with an acute febrile illness. A diagnosis of a lower respiratory chest infection has been made and intravenous antibiotics have been commenced. The following morning on the ward round, the medical team note she has an ejection systolic murmur with normal heart sounds and no radiation. She appears clinically well in herself.What would be the single most appropriate management plan?',
  opts:['Proceed to urgently arrange a CXR','Discuss with the local pediatric cardiology center for advice','Once medically fit for discharge, arrange an outpatient ECHO','Explain that this is an innocent murmur and inform the GP to re-evaluate the child once she has recovered from illness','Change the present antibiotic regimen'],
  expl:'In a clinically well child, an isolated ejection systolic murmur is usually innocent and does not require urgent investigations.',
  note:'Read on hires p1613, fully legible, no twin needed. Highlighted option is D "Explain that this is an innocent murmur and inform the GP to re-evaluate the child once she has recovered from illness" = index 3. Stem prints "herself.What" with no space, transcribed verbatim.' },

{ n:10, pr:10, p:1615, key:2,
  stem:'A 5-year-old boy attends accident and emergency with a nosebleed that his mother has been unable to stop for the past 45 minutes. He saw his GP for a viral upper respiratory tract infection 1 week ago but is otherwise well. His nosebleed is stopped with pressure but on examination he is noted to have multiple petechiae on his chest and abdomen. Blood tests reveal: Hb 14 g/dL, WCC 13,000/ml, platelet count 15,000/ml, clotting screen normal. What is the most likely diagnosis?',
  opts:['Henoch-Schönlein purpura','Hemophilia B (Christmas disease)','Immune (idiopathic) thrombocytopenic purpura (ITP)','Meningococcal septicemia','Hemolytic uremic syndrome (HUS)'],
  expl:'ITP presents with isolated thrombocytopenia and normal coagulation, often following a viral infection.',
  note:'Read on hires p1615, fully legible, no twin needed. Highlighted option is C "Immune (idiopathic) thrombocytopenic purpura (ITP)" = index 2. Numerals "45 minutes", "14 g/dL", "13,000/ml", "15,000/ml" checked, all read clearly.' },

{ n:11, pr:11, p:1617, key:3,
  stem:'A 5-year-old boy has failed to attain his developmental milestones since shortly after birth. Currently, he cannot roll or talk, but he can smile. His mother complains it is difficult to dress him as both his arms and legs are stiff. On examination, his upper and lower limbs are stiff and hyperreflexic. He has a primitive grasp reflex in both hands.\n\nWhich type of movement disorder fits with this type of cerebral palsy?',
  opts:['Dyskinetic','Ataxic','Spastic hemiplegia','Spastic quadriplegia'],
  expl:'Global hypertonia affecting all four limbs with developmental delay is typical of spastic quadriplegic cerebral palsy.',
  note:'Read on hires p1617, fully legible, no twin needed. Only 4 options printed. Highlighted option is D "Spastic quadriplegia" = index 3.' },

{ n:12, pr:12, p:1619, key:3,
  stem:'A 7-year-old boy presents with edema of the face and legs, and abdominal pain. There is no hypertension. Urine dipstick shows +4 protein. He is started on prednisolone.\n\nWhat would be the likely finding on biopsy and light microscopy?',
  opts:['Focal-segmental glomerulosclerosis','Mesangiocapillary glomerulonephritis','Crescentic glomerulonephritis','Minimal change disease','Membranous glomerulonephritis'],
  expl:'Most children with steroid-sensitive nephrotic syndrome have minimal change disease, which shows normal glomeruli on light microscopy.',
  note:'Read on hires p1619, fully legible, no twin needed. Highlighted option is D "Minimal change disease" = index 3.' },

{ n:13, pr:13, p:1621, key:1,
  stem:'A pediatrician is called to urgently review a baby on the postnatal ward. On arrival, the baby is profoundly cyanosed and saturation does not improve with high-flow oxygen therapy. Examination reveals a single heart sound and no murmur. Intravenous access is secured, and the blood gas shows severe metabolic acidosis. A CXR shows increased pulmonary vasculature.\n\nWhat is the most likely diagnosis?',
  opts:['Atrial septal defect','Transposition of the great arteries','Patent ductus arteriosus','Tetralogy of Fallot','Ventricular septal defect'],
  expl:'Profound cyanosis unresponsive to oxygen with CXR showing increased pulmonary blood flow is typical of TGA.',
  note:'Read on hires p1621, fully legible, no twin needed. Highlighted option is B "Transposition of the great arteries" = index 1.' },

{ n:14, pr:14, p:1623, key:2,
  stem:'A couple brought their second male child to the immunologist as he suffers from a primary immune disorder that causes high serum IgE and repeated Staphylococcal infections. Parents are non-consanguineous and the older brother is not affected. On investigating both parents, the father was found to have the same immune defect.\n\nWhat is the most probable mode of inheritance of the child\'s illness?',
  opts:['Autosomal recessive','X-linked recessive','Autosomal dominant','X-linked dominant'],
  expl:'Non-consanguineous inheritance from affected father suggests autosomal dominant hyper IgE syndrome.',
  note:'Read on hires p1623, fully legible, no twin needed. Only 4 options printed. Highlighted option is C "Autosomal dominant" = index 2.' },

{ n:15, pr:15, p:1625, key:0,
  stem:'A 5-year-old boy presents with a low-grade fever lasting two weeks. On examination, large lymph nodes are palpable on both sides of the neck, under the axillae, and in the inguinal regions. He also has hepatosplenomegaly, appears pale, and has purpuric spots over his back.\n\nWhat is the most likely diagnosis?',
  opts:['Acute lymphocytic leukemia','Miliary tuberculosis','Idiopathic thrombocytopenic purpura','Henoch-Schönlein purpura','Aplastic anemia'],
  expl:'Multiple system involvement with pancytopenia features points toward ALL.',
  note:'Read on hires p1625, fully legible, no twin needed. Highlighted option is A "Acute lymphocytic leukemia" = index 0.' },

{ n:16, pr:16, p:1627, key:3,
  stem:'A 12-year-old boy presents with episodes of vomiting that is blood-stained. On examination, he is jaundiced, malnourished, and has splenomegaly.\n\nWhat is the most likely diagnosis?',
  opts:['Bacterial infection','Biliary atresia','Hepatitis A','Hepatitis B','Galactosemia'],
  expl:'Chronic liver disease features in a school-aged child with jaundice and splenomegaly suggest hepatitis B.',
  note:'Read on hires p1627, fully legible, no twin needed. Highlighted option is D "Hepatitis B" = index 3.' },

{ n:17, pr:17, p:1629, key:1,
  stem:'A 7-day-old newborn is brought to the emergency department with a 1-day history of poor feeding, vomiting, and abnormal genitalia. He is lethargic and moderately dehydrated. His weight has dropped from 3200 g to 2750 g. Blood glucose is 40 mg/dL, sodium is 124 mEq/L, and potassium is 6 mEq/L.\n\nWhat is the most likely diagnosis?',
  opts:['Acute kidney injury','Congenital adrenal hyperplasia','Congenital adrenal hypoplasia','Cushing syndrome','Gastroenteritis'],
  expl:'Salt-wasting, hypoglycemia, hyperkalemia, and ambiguous genitalia are classic signs of CAH.',
  note:'Read on hires p1629, fully legible, no twin needed. Highlighted option is B "Congenital adrenal hyperplasia" = index 1. Numerals "3200 g", "2750 g", "40 mg/dL", "124 mEq/L", "6 mEq/L" checked, all read clearly.' },

{ n:18, pr:18, p:1631, key:2,
  stem:'A 5-year-old girl is found to have a murmur during a routine school check-up. She is otherwise healthy. On auscultation, S1 is normal and S2 shows wide and fixed splitting. A grade V/VI ejection systolic murmur is best heard at the left upper sternal edge.\n\nWhat is the most likely diagnosis?',
  opts:['Aortic stenosis','Aorto-pulmonary window','Atrial septal defect','Pulmonary stenosis','Ventricular septal defect'],
  expl:'Wide, fixed splitting of S2 is pathognomonic for ASD; murmur is due to increased flow across pulmonary valve.',
  note:'Read on hires p1631, fully legible, no twin needed. Highlighted option is C "Atrial septal defect" = index 2. Numeral "V/VI" checked, reads clearly.' },

{ n:19, pr:19, p:1633, key:4,
  stem:'A 6-year-old boy presents with abdominal pain and joint pain for 24 hours. He is febrile and has diffuse abdominal tenderness. No organomegaly or lymphadenopathy is found. A purpuric rash is noted over the legs and buttocks. Urinalysis shows 2+ blood.\n\nWhat is the most likely diagnosis?',
  opts:['Idiopathic thrombocytopenic purpura','Meningococcal sepsis','Acute lymphoblastic leukemia','Vitamin C deficiency','Henoch-Schönlein purpura'],
  expl:'HSP presents with purpura, abdominal pain, joint pain, and renal involvement with hematuria.',
  note:'Read on hires p1633, fully legible, no twin needed. Highlighted option is E "Henoch-Schönlein purpura" = index 4.' },

{ n:20, pr:20, p:1635, key:0,
  stem:'A 14-month-old boy has episodes occurring when he is angry or upset. He changes color, collapses, and sometimes has jerking movements.\n\nWhat is the most likely diagnosis?',
  opts:['Breath-holding spells','Myoclonic epilepsy','Non-epileptic seizure','Vasovagal syncope'],
  expl:'Breath-holding spells are common in toddlers, triggered by anger/frustration, and are non-epileptic.',
  note:'Read on hires p1635, fully legible, no twin needed. Only 4 options printed. Highlighted option is A "Breath-holding spells" = index 0. Last entry of quarter A.' },

/* Peds endpoint PART 2, section 14 "Model Final Exam 3", quarter B.
   n21..n40 (SECTION-GLOBAL), answered pages 1637,1639,...,1675 (p = 1595 + 2n).
   At the start of this pass, part-A on disk held only n1-n2 (still in progress by another
   agent/session) -- noted as a measurement, not acted on: n21 is anchored to p.1637 by the
   section-wide formula p = 1595 + 2n, independent of part-A's completion state.
   OCR NOT consulted for transcription (search index only, per brief section 4).
   Twin (unanswered) page read wherever the answered page's text was not certain on first read.
   Header extended after every entry; see note fields for per-entry verification method.

   Page-by-page walk (printed number pr vs section-global n) -- filled in as staged:
   n21 p1637 pr21   n22 p1639 pr22   n23 p1641 pr23   n24 p1643 pr24   n25 p1645 pr25
   n26 p1647 pr26   n27 p1649 pr27   n28 p1651 pr28   n29 p1653 pr29   n30 p1655 pr30
   n31 p1657 pr31   n32 p1659 pr32   n33 p1661 pr33   n34 p1663 pr34   n35 p1665 pr35
   n36 p1667 pr36   n37 p1669 pr37   n38 p1671 pr38   n39 p1673 pr39   n40 p1675 pr40

   pr equals n at every entry in this quarter, no duplicated or skipped printed numbers found.

   Boundary proof: p.1677 (one past this quarter's range) is ANSWERED (highlighted key B,
   box present) and prints Q41 -- "Which clinical problem may present with secondary (onset)
   enuresis?" This is quarter C's first entry (n41, p = 1595 + 2*41 = 1677), not a section
   banner: section 14 runs 80 questions across four quarters of 20, so the page one past
   quarter B is quarter C's opening page, not the section's close. No gap, no overlap, no
   repeated printed number crossing the boundary (pr40 at p.1675, pr41 at p.1677).

   All 20 answered pages in this quarter carried a printed explanation box; no boxless pages,
   no overflow boxes, no alternation breaks (every page in range read whole) and no figures in
   this quarter -- each stated as measured. Options: 17 questions printed 5 options (A-E), 3
   printed only 4 (A-D: n25 p1645, n28 p1651, n31 p1657) -- read as printed, not padded.
   OCR NOT consulted at any point (search index only, per brief section 4).
*/

{ n:21, pr:21, p:1637, key:1,
  stem:'A 6-year-old boy with a history of large VSD presents with central cyanosis and oxygen saturation of 81%. His parents previously refused surgical repair. His height and weight are below the 5th percentile.\n\nWhat is the pathophysiologic mechanism of his cyanosis?',
  opts:['Reduced cardiac output','Shunt reversal','Heart block','Tachyarrhythmia','Methemoglobinemia'],
  expl:'Long-standing large VSD can cause Eisenmenger syndrome, where left-to-right shunt reverses, leading to cyanosis.',
  note:'Read on hires p1637, fully legible, no twin needed. Highlighted option is B "Shunt reversal" = index 1. Numeral "81%" checked, reads clearly.' },

{ n:22, pr:22, p:1639, key:2,
  stem:'An 11-month-old girl presents with poor growth, pallor, mild jaundice, hepatosplenomegaly, and frontal bossing. Her weight has dropped below the 2nd percentile. Labs show microcytic hypochromic anemia.\n\nWhat is the most likely diagnosis?',
  opts:['Sickle cell disease','Hereditary spherocytosis','Thalassemia major','G6PD deficiency','Iron deficiency anemia'],
  expl:'Thalassemia major causes ineffective erythropoiesis, microcytosis, extramedullary hematopoiesis, and growth failure.',
  note:'Read on hires p1639, fully legible, no twin needed. Highlighted option is C "Thalassemia major" = index 2.' },

{ n:23, pr:23, p:1641, key:2,
  stem:'An 8-year-old boy is referred with suspected ADHD. He is hyperactive and struggles to concentrate in school.\n\nWhich of the following features suggests a diagnosis other than ADHD?',
  opts:['Easily distracted by other children','Difficulty waiting for his turn','Symptoms only present at school','Constantly talking and interrupting others','Fidgeting with his hands while sitting'],
  expl:'ADHD symptoms must be present in multiple settings; school-only symptoms suggest alternative diagnosis.',
  note:'Read on hires p1641, fully legible, no twin needed. Highlighted option is C "Symptoms only present at school" = index 2.' },

{ n:24, pr:24, p:1643, key:2,
  stem:'A 2-month-old baby has coarse facies, a large fontanelle, hypotonia, and jaundice. Blood sugar is normal.\n\nWhich investigation is most likely to reveal the diagnosis?',
  opts:['Growth hormone','Karyotype','Thyroid function tests','Blood group','Creatine kinase (CK) level'],
  expl:'Congenital hypothyroidism is suggested by these features; thyroid function tests confirm the diagnosis.',
  note:'Read on hires p1643, fully legible, no twin needed. Highlighted option is C "Thyroid function tests" = index 2.' },

{ n:25, pr:25, p:1645, key:2,
  stem:'A 6-month-old male infant has a cardiac murmur and oxygen saturation of 78% unresponsive to oxygen therapy. Chest X-ray shows a boot-shaped heart.\n\nWhat is the other possible clinical presentation for this case?',
  opts:['Recurrent chest infection','Heart failure','Cyanotic spells','Choking while feeding'],
  expl:'Boot-shaped heart is characteristic of tetralogy of Fallot, which also presents with cyanotic spells (tet spells).',
  note:'Read on hires p1645, fully legible, no twin needed. Only 4 options printed (A-D). Highlighted option is C "Cyanotic spells" = index 2. Numeral "78%" checked, reads clearly.' },

{ n:26, pr:26, p:1647, key:1,
  stem:'A 14-month-old boy presents with knee swelling and large bruises. CBC shows normal platelets, prolonged APTT, and normal PT.\n\nWhat is the most likely diagnosis?',
  opts:['Vitamin K deficiency','Hemophilia','Von Willebrand disease','Idiopathic thrombocytopenic purpura','Non-accidental injury'],
  expl:'Prolonged APTT with normal PT and platelets indicates intrinsic pathway defect, classic for hemophilia A or B.',
  note:'Read on hires p1647, fully legible, no twin needed. Highlighted option is B "Hemophilia" = index 1.' },

{ n:27, pr:27, p:1649, key:4,
  stem:'A 12-year-old boy with a family history of diabetes presents with polyuria and polydipsia. Blood glucose is 370 mg/dL, but he appears well.\n\nWhat is the best immediate management?',
  opts:['Diet therapy alone','IV normal saline','IV sodium bicarbonate','Oral glucose','Subcutaneous insulin'],
  expl:'Hyperglycemia with symptoms in a child with diabetes family history requires insulin initiation; diet alone is insufficient.',
  note:'Read on hires p1649, fully legible, no twin needed. Highlighted option is E "Subcutaneous insulin" = index 4. Numeral "370 mg/dL" checked, reads clearly.' },

{ n:28, pr:28, p:1651, key:3,
  stem:'A 20-month-old child with a febrile illness has a 5-minute generalized tonic-clonic seizure. The systemic exam is normal.\n\nWhich of the following is a risk factor for future epilepsy?',
  opts:['Generalized tonic-clonic seizures','Seizure lasting up to 10 minutes','Age of onset less than two years','History of epilepsy in the father'],
  expl:'Family history of epilepsy increases risk of future epilepsy; brief, simple febrile seizures <10 minutes generally do not.',
  note:'Read on hires p1651, fully legible, no twin needed. Only 4 options printed (A-D). Highlighted option is D "History of epilepsy in the father" = index 3. Numerals "5-minute", "20-month-old", "10 minutes" checked, read clearly.' },

{ n:29, pr:29, p:1653, key:2,
  stem:'An 11-year-old girl presents with abdominal pain, diarrhea, and lethargy. Labs show anemia, thrombocytopenia, high urea and creatinine, and fragmented RBCs.\n\nWhat is the most likely diagnosis?',
  opts:['DIC','G6PD deficiency','Hemolytic uremic syndrome','Dehydration','ITP'],
  expl:'HUS is characterized by hemolytic anemia, thrombocytopenia, and acute kidney injury, often after diarrheal illness.',
  note:'Read on hires p1653, fully legible, no twin needed. Highlighted option is C "Hemolytic uremic syndrome" = index 2.' },

{ n:30, pr:30, p:1655, key:1,
  stem:'A 4-week-old formula-fed girl presents with jaundice, dark urine, pale stools, and failure to regain birth weight. Labs show elevated conjugated bilirubin.\n\nWhat is the most likely diagnosis?',
  opts:['Physiological jaundice','Biliary atresia','Spherocytosis','G6PD deficiency','Urinary tract infection'],
  expl:'Biliary atresia presents with cholestatic jaundice, pale stools, dark urine, and failure to thrive in neonates.',
  note:'Read on hires p1655, fully legible, no twin needed. Highlighted option is B "Biliary atresia" = index 1.' },

{ n:31, pr:31, p:1657, key:2,
  stem:'A 4-year-old boy has delayed speech, prefers playing alone, gets upset with changes, and avoids eye contact.\n\nWhat is the most likely diagnosis?',
  opts:['Deaf mutism','Normal development','Autism','Speech delay'],
  expl:'The child shows delayed speech, social avoidance, repetitive behaviors, and distress with changes, which are classic features of autism. Deafness or simple speech delay would not explain all social and behavioral signs.',
  note:'Read on hires p1657, fully legible, no twin needed. Only 4 options printed (A-D). Highlighted option is C "Autism" = index 2.' },

{ n:32, pr:32, p:1659, key:1,
  stem:'A term infant delivered at home is brought on day 4 with oozing from the umbilical stump. The mother is unsure if the newborn received vitamin K.\n\nWhich of the following blood results is most likely to be abnormal?',
  opts:['Platelets','Prothrombin time','APTT','Hemoglobin','Antiplatelet antibodies'],
  expl:'Vitamin K is needed for clotting factors II, VII, IX, and X. Deficiency prolongs prothrombin time (PT) while platelets and APTT may remain normal.',
  note:'Read on hires p1659, fully legible, no twin needed. Highlighted option is B "Prothrombin time" = index 1.' },

{ n:33, pr:33, p:1661, key:0,
  stem:'A pediatrician is asked to review a heart murmur in a 3-month-old baby born by vaginal delivery following an uneventful perinatal period to a primiparous mother. The baby has been feeding well. On examination, he is hypotonic and has single palmar creases and epicanthic folds.\n\nWhat is the most likely heart lesion?',
  opts:['Atrioventricular septal defect','Atrial septal defect','Aortic stenosis','Coarctation of the aorta','Patent ductus arteriosus'],
  expl:'The baby shows features of Down syndrome (hypotonia, single palmar crease, epicanthic folds). AV septal defect is the most common heart lesion in Down syndrome.',
  note:'Read on hires p1661, fully legible, no twin needed. Highlighted option is A "Atrioventricular septal defect" = index 0.' },

{ n:34, pr:34, p:1663, key:3,
  stem:'A 5-year-old girl with type 1 diabetes mellitus diagnosed two months ago is running around the garden when her mother notices she suddenly becomes aggressive toward her brother and appears pale. Her blood glucose is 50 mg/dL.\n\nWhat is the best action to take immediately?',
  opts:['Intramuscular (IM) glucagon','Intravenous infusion of 5% glucose','Intravenous infusion of normal saline (0.9% sodium chloride)','Oral glucose drink','Subcutaneous insulin'],
  expl:'The child is conscious and hypoglycemic. Immediate oral glucose is safe and effective; IV or IM routes are needed only if the child cannot take orally.',
  note:'Read on hires p1663, fully legible, no twin needed. Highlighted option is D "Oral glucose drink" = index 3. Numeral "50 mg/dL" checked, reads clearly.' },

{ n:35, pr:35, p:1665, key:2,
  stem:'A 7-year-old girl presents to the emergency department with recurrent episodes of jerky movements of all four limbs, associated with eye deviation to the right for about 2 minutes. After each episode, she is unaware of the event.\n\nWhat type of seizure does this girl have?',
  opts:['Myoclonic seizure','Absence seizure','Tonic-clonic seizure','Simple febrile seizure','Complex febrile seizure'],
  expl:'The girl has jerky movements of all four limbs, lasts about 2 minutes, and she is unaware afterward, which is typical of a generalized tonic-clonic seizure. Myoclonic and absence seizures are shorter and do not cause postictal unawareness. Febrile seizures are linked to fever, which is not mentioned here.',
  note:'Read on hires p1665, fully legible, no twin needed. Highlighted option is C "Tonic-clonic seizure" = index 2.' },

{ n:36, pr:36, p:1667, key:3,
  stem:'A 15-month-old baby boy is brought to the clinic with features of spastic diplegia. While counseling the parents on the diagnosis of cerebral palsy:\n\nWhich of the following statements is correct?',
  opts:['The insult usually occurs during delivery','Cerebral palsy is a disorder of motor and sensory function due to a static brain injury','Reflexes are reduced or absent','Botulinum toxin may be useful to treat spasticity','MRI scan is diagnostic'],
  expl:'Cerebral palsy is a static motor disorder caused by early brain injury. Spasticity can be treated symptomatically with botulinum toxin; reflexes are usually increased, not decreased.',
  note:'Read on hires p1667, fully legible, no twin needed. Highlighted option is D "Botulinum toxin may be useful to treat spasticity" = index 3.' },

{ n:37, pr:37, p:1669, key:2,
  stem:'What is the most likely causative pathogen in infective endocarditis?',
  opts:['Streptococcus pneumoniae','Streptococcus pyogenes','Streptococcus viridans','Group A hemolytic streptococcus','Group B hemolytic streptococcus'],
  expl:'Viridans group streptococci are the most common pathogens causing subacute infective endocarditis in children, especially with underlying heart lesions.',
  note:'Read on hires p1669, fully legible, no twin needed. Highlighted option is C "Streptococcus viridans" = index 2. FLAGGED: this same fact pattern (most common cause of infective endocarditis = Streptococcus viridans) also appears at section 13 n13 (p.1458, part-A, different options list including Staphylococcus aureus/Listeria) -- different option sets, recorded here, no fold decided (cross-section, not a shared menu).' },

{ n:38, pr:38, p:1671, key:2,
  stem:'When counseling her parents, which of the following statements regarding simple febrile convulsions is true?',
  opts:['They are often focal in nature','Children frequently go on to develop epilepsy','Occur between ages of 6 months and 5 years','Should always be investigated with lumbar puncture','May occur without fever'],
  expl:'Simple febrile seizures are generalized, brief, and age-specific. They rarely lead to epilepsy and usually do not require extensive investigation.',
  note:'Read on hires p1671. Twin at p.1670 (unanswered) matches verbatim, including the dangling "her parents" reference with no antecedent patient established on this page -- a printed defect, transcribed as-is on both pages, not a transcription error. Highlighted option is C "Occur between ages of 6 months and 5 years" = index 2.' },

{ n:39, pr:39, p:1673, key:2,
  stem:'What is the most probable type of abnormality found on karyotyping in cases of Down syndrome?',
  opts:['Mitotic nondisjunction','Translocation','Meiotic nondisjunction','Mosaicism','Robertsonian translocation'],
  expl:'Most cases of Down syndrome are caused by meiotic nondisjunction during gametogenesis, leading to trisomy 21.',
  note:'Read on hires p1673, fully legible, no twin needed. Highlighted option is C "Meiotic nondisjunction" = index 2. Numeral "21" (trisomy 21) checked, reads clearly.' },

{ n:40, pr:40, p:1675, key:1,
  stem:'Hemoglobin production differs through fetal life and extra-uterine life, and the molecule itself changes with age.\n\nWhich of the following statements regarding hemoglobin is correct?',
  opts:['At birth HbA is predominant','Hemoglobin concentration falls after birth until around 7 weeks','Hematopoiesis mainly occurs in the liver and spleen at term','The lifespan of a normal red blood cell is 10 days','Fetal hemoglobin has lower affinity for oxygen'],
  expl:'Newborns have high HbF; after birth, hemoglobin drops physiologically until the bone marrow fully compensates, usually around 6-8 weeks.',
  note:'Read on hires p1675, fully legible, no twin needed. Highlighted option is B "Hemoglobin concentration falls after birth until around 7 weeks" = index 1. Numerals "7 weeks" (option) and "6-8 weeks" (box) checked, both read clearly as printed -- not a contradiction, both consistent, no flag needed. Last entry of quarter B.' },

/* Peds endpoint PART 2, section 14 "Model Final Exam 3", quarter C.
   n41..n60 (SECTION-GLOBAL), answered pages 1677,1679,...,1715 (p = 1595 + 2n).
   OCR NOT consulted for transcription (search index only, per brief section 4).
   Twin (unanswered) page read wherever the answered page's text was not certain on first read.
   Header extended after every entry; see note fields for per-entry verification method.

   Page-by-page walk (printed number pr vs section-global n) -- filled in as staged:
   n41 p1677 pr41   n42 p1679 pr42   n43 p1681 pr43   n44 p1683 pr44   n45 p1685 pr45
   n46 p1687 pr46   n47 p1689 pr47   n48 p1691 pr48   n49 p1693 pr49   n50 p1695 pr50
   n51 p1697 pr51   n52 p1699 pr52   n53 p1701 pr53   n54 p1703 pr54   n55 p1705 pr55
   n56 p1707 pr56   n57 p1709 pr57   n58 p1711 pr58   n59 p1713 pr59   n60 p1715 pr60

   Boundary proof: p.1716 (one past the range) prints Q61 unanswered (no yellow highlight), stem
   "What is the underlying pathophysiology in Henoch-Schonlein Purpura (HSP)?" -- the opening
   question of the next quarter. No gap, no overlap, no repeated printed number crossing the
   boundary.

   All 20 answered pages in this quarter carried a printed explanation box; no boxless pages, no
   overflow boxes, no alternation breaks (index tag `answered` confirmed by an actual yellow
   highlight on every one of the 20 pages opened), and no figures anywhere in this quarter -- each
   stated as measured, every page opened whole. No page prints defective structure disagreeing
   with the promised parity/step; every answered page fell exactly at p=1595+2n as predicted.
*/

{ n:41, pr:41, p:1677, key:1,
  stem:'Which clinical problem may present with secondary (onset) enuresis?',
  opts:['Acute kidney injury','Emotional upset','Ectopic ureter','Orthostatic proteinuria','Glomerulonephritis'],
  expl:'Secondary enuresis is usually triggered by stress, illness, or psychological factors. Structural or renal problems often cause primary enuresis.',
  note:'Read on hires p1677, fully legible; twin at p1676 (unanswered) matches verbatim. Highlighted option is B "Emotional upset" = index 1.' },

{ n:42, pr:42, p:1679, key:4,
  stem:'What would be the initial step in the management of diabetic ketoacidosis (DKA)?',
  opts:['Start IV insulin infusion','SC rapid-acting insulin','IV NaHCO3','Oxygen therapy','IV bolus of normal saline'],
  expl:'The first step in DKA management is fluid resuscitation to treat dehydration and stabilize circulation. Insulin and bicarbonate come after initial fluid therapy.',
  note:'Read on hires p1679, fully legible, no twin needed. "NaHCO3" printed with subscript 3, transcribed as NaHCO3. Highlighted option is E "IV bolus of normal saline" = index 4.' },

{ n:43, pr:43, p:1681, key:3,
  stem:'What is the underlying pathophysiologic mechanism of anemia in patients with G6PD enzyme deficiency?',
  opts:['Bone marrow aplasia','Consumption coagulopathy','Food poisoning','Intravascular hemolysis','Extravascular hemolysis'],
  expl:'G6PD deficiency makes red blood cells vulnerable to oxidative stress, leading to hemolysis within blood vessels.',
  note:'Read on hires p1681, fully legible, no twin needed. Highlighted option is D "Intravascular hemolysis" = index 3. RECORDED, no fold decided: same stem, same 5 options, same key as section 13 quarter A n9 (p.1450, endpoint-p2-s13-mfe2.part-A.js) -- a cross-section repeat.' },

{ n:44, pr:44, p:1683, key:1,
  stem:'What should be first undertaken by the attending physician on seeing a child with supraventricular tachycardia who is sick and drowsy in the ER?',
  opts:['Adenosine via a large bore intravenous line','Direct current cardioversion','Reassure that it will resolve spontaneously','Vagal stimulation maneuver','Plain chest X-ray'],
  expl:'A child with supraventricular tachycardia who is unstable and drowsy requires immediate cardioversion. Vagal maneuvers or adenosine are for stable patients.',
  note:'Read on hires p1683, fully legible, no twin needed. Highlighted option is B "Direct current cardioversion" = index 1.' },

{ n:45, pr:45, p:1685, key:4,
  stem:'Developmental milestones vary between children; however, there are normal ranges for each domain.\n\nWhich of the following denotes developmental delay?',
  opts:['Not following moving objects by turning head at 4 weeks','Not sitting without support at 5 months','Not walking at 12 months',"Can't crawl on hands and knees at 6 months",'Poor head control at 6 months'],
  expl:'By 6 months, a baby should have good head control. Poor head control at this age suggests a delay in motor development.',
  note:'Read on hires p1685, fully legible, no twin needed. Highlighted option is E "Poor head control at 6 months" = index 4. RECORDED, no fold decided: same stem and same 5 options as section 13 quarter A n1 (p.1434, endpoint-p2-s13-mfe2.part-A.js), same key, but a DIFFERENT printed explanation box wording -- both boxes kept verbatim in their own entries.' },

{ n:46, pr:46, p:1687, key:3,
  stem:'What is the pathophysiologic defect in sickle cell anemia?',
  opts:['Enzyme deficiency GPO','Absent red cell precursors','Red cell membrane abnormality','Amino acid replacement','mRNA abnormality'],
  expl:'Sickle cell anemia results from a single amino acid substitution in hemoglobin β-chain, causing hemoglobin S formation and sickling.',
  note:'Read on hires p1687, fully legible, no twin needed. Highlighted option is D "Amino acid replacement" = index 3. Option A printed "GPO" verbatim (not flagged per the no-comment rule; not a number/unit/dose).' },

{ n:47, pr:47, p:1689, key:4,
  stem:'What does acanthosis nigricans (dark skin in the armpits or the neck) signify?',
  opts:['The presence of type 1 diabetes','The presence of type 2 diabetes','Obesity','Polycystic ovary','Insulin resistance'],
  expl:'Acanthosis nigricans indicates hyperinsulinemia and insulin resistance, often linked to type 2 diabetes and obesity.',
  note:'Read on hires p1689, fully legible, no twin needed. Highlighted option is E "Insulin resistance" = index 4.' },

{ n:48, pr:48, p:1691, key:3,
  stem:'Which clinical condition may be associated with bleeding in a child with normal bleeding time, normal APTT, and prolonged prothrombin time?',
  opts:['Vitamin D overdose','Iron deficiency anemia','Anemia due to folic acid deficiency','Malabsorption','Congenital heart disease'],
  expl:'Vitamin K deficiency due to fat malabsorption leads to prolonged PT, while APTT and platelets remain normal.',
  note:'Read on hires p1691, fully legible, no twin needed. Highlighted option is D "Malabsorption" = index 3.' },

{ n:49, pr:49, p:1693, key:1,
  stem:'Which laboratory finding is characteristic of bone marrow failure?',
  opts:['Reticulocytosis','Low reticulocyte count','High indirect bilirubin','Positive Coombs test','Hypochromic microcytic anemia'],
  expl:'Bone marrow failure results in low production of red cells, so the reticulocyte count is low despite anemia.',
  note:'Read on hires p1693, fully legible, no twin needed. Highlighted option is B "Low reticulocyte count" = index 1.' },

{ n:50, pr:50, p:1695, key:1,
  stem:'Which laboratory test is most specific to measure kidney function?',
  opts:['Blood urea','Serum creatinine','Kidney ultrasonography','Blood sodium','Blood potassium'],
  expl:'Serum creatinine is the most specific marker of kidney function; urea can be affected by hydration and diet.',
  note:'Read on hires p1695, fully legible, no twin needed. Highlighted option is B "Serum creatinine" = index 1.' },

{ n:51, pr:51, p:1697, key:0,
  stem:'In which neurological disorder does "muscle fasciculations" occur?',
  opts:['Spinal muscular atrophy','Peripheral neuropathies','Myopathies','Neuromuscular junction disorders','Cerebral palsy'],
  expl:'Muscle fasciculations occur due to denervation, commonly seen in motor neuron disorders like spinal muscular atrophy.',
  note:'Read on hires p1697, fully legible, no twin needed. Highlighted option is A "Spinal muscular atrophy" = index 0. RECORDED, no fold decided: near-duplicate of section 13 quarter A n3 (p.1438) -- same 5 options in the same order and same key, stem reworded ("disorder"/"fasciculations" singular-plural differences and option wording "atrophy" vs "atrophy" both, "junction" vs "junction disorders"), and a DIFFERENT printed explanation box.' },

{ n:52, pr:52, p:1699, key:3,
  stem:'Which is an essential aspect in the management of acute lymphoblastic leukemia (ALL) in children?',
  opts:['Iron therapy','Folic acid supplementation','Anticoagulants','Intrathecal chemotherapy','Bone marrow radiation relapse'],
  expl:'ALL treatment in children requires intrathecal chemotherapy to prevent or treat CNS involvement.',
  note:'Read on hires p1699, fully legible, no twin needed. Highlighted option is D "Intrathecal chemotherapy" = index 3.' },

{ n:53, pr:53, p:1701, key:4,
  stem:'Cerebral diplegia is a common consequence of which cerebral damage?',
  opts:['Perinatal hypoxic-ischemic encephalopathy','Genetic brain disorders','Structural brain anomalies','Kernicterus','Periventricular area damage in preterm babies'],
  expl:'Spastic diplegia is commonly caused by injury to the periventricular white matter in premature infants.',
  note:'Read on hires p1701, fully legible, no twin needed. Highlighted option is E "Periventricular area damage in preterm babies" = index 4.' },

{ n:54, pr:54, p:1703, key:2,
  stem:'Which clinical condition is associated with a diastolic cardiac murmur?',
  opts:['Anemia','Hyperthyroidism with hyperdynamic circulation','Mitral stenosis','Aortic stenosis','Fever'],
  expl:'Diastolic murmurs are caused by obstructive lesions like mitral stenosis; systolic murmurs are from obstruction or regurgitation.',
  note:'Read on hires p1703, fully legible, no twin needed. Highlighted option is C "Mitral stenosis" = index 2.' },

{ n:55, pr:55, p:1705, key:1,
  stem:'Which of the following viruses commonly causes aplastic crisis in a patient with sickle cell disease?',
  opts:['Roseola','Parvovirus B19','Coxsackie A16','Echovirus 11','Cytomegalovirus'],
  expl:'Parvovirus B19 infects erythroid precursors, causing temporary aplastic crisis in patients with chronic hemolysis like sickle cell disease.',
  note:'Read on hires p1705, fully legible, no twin needed. Highlighted option is B "Parvovirus B19" = index 1.' },

{ n:56, pr:56, p:1707, key:0,
  stem:'What is the most common complication of minimal change nephrotic syndrome?',
  opts:['Susceptibility to infections','Acute kidney injury','Bleeding tendency','Electrolyte disturbances','Hypertension'],
  expl:'Minimal change nephrotic syndrome causes proteinuria, leading to loss of immunoglobulins and increased infection risk.',
  note:'Read on hires p1707, fully legible, no twin needed. Highlighted option is A "Susceptibility to infections" = index 0.' },

{ n:57, pr:57, p:1709, key:2,
  stem:'Which clinical problem is a serious complication of Fallot tetralogy?',
  opts:['Eisenmenger syndrome','Recurrent pneumonia','Cerebrovascular accidents','Pulmonary hypertension','Heart failure'],
  expl:'In Tetralogy of Fallot, chronic low oxygen levels cause polycythemia, which increases blood viscosity and the risk of clots. These clots can travel to the brain, causing cerebrovascular accidents (strokes).',
  note:'Read on hires p1709, fully legible, no twin needed. Highlighted option is C "Cerebrovascular accidents" = index 2.' },

{ n:58, pr:58, p:1711, key:4,
  stem:'What is the preferred method to collect a urine sample for culture in female infants?',
  opts:['Bag sample','Catheter sample','Pad/cotton wool balls in nappy','Suprapubic aspirate','Clean catch'],
  expl:'Clean catch is the preferred method for urine culture in female infants because it is non-invasive and reduces contamination compared to bag or pad collection. It involves collecting midstream urine after cleaning the perineal area, sometimes using stimulation to prompt voiding. More invasive methods like catheterization or suprapubic aspiration are reserved for difficult cases or critically ill infants.',
  note:'Read on hires p1711, fully legible, no twin needed. Highlighted option is E "Clean catch" = index 4.' },

{ n:59, pr:59, p:1713, key:3,
  stem:'A 7-year-old boy has abdominal pain and a rash that started several days ago. On examination, you notice a palpable purpuric rash over his calves and buttocks, with swelling of both ankles. Abdominal examination is unremarkable. What is the most likely laboratory finding?',
  opts:['Decreased platelet count','Hypochromic microcytic anemia','Low C3 complement level','Normal clotting parameters','Prolonged prothrombin time'],
  expl:'Henoch-Schönlein purpura presents with palpable purpura and normal coagulation. Platelets, PT, and aPTT are usually normal.',
  note:'Read on hires p1713, fully legible, no twin needed. Options printed lower-case (a-e), transcribed as text only. Explanation box printed beside options C/D rather than below, same page. Highlighted option is d "Normal clotting parameters" = index 3.' },

{ n:60, pr:60, p:1715, key:3,
  stem:'On receiving the result of a urine analysis of a child, which finding will support the diagnosis of glomerulonephritis?',
  opts:['Leukocyte esterase','White blood cells','Normal protein/creatinine ratio','Casts','Bacteria'],
  expl:'Casts in urine indicate glomerular origin, supporting a diagnosis of glomerulonephritis.',
  note:'Read on hires p1715, fully legible, no twin needed. Highlighted option is D "Casts" = index 3. Last entry of quarter C.' },

/* Peds endpoint PART 2, section 14 "Model Final Exam 3", quarter D.
   n61..n80 (SECTION-GLOBAL; parts B and C are not yet on disk at the time of this pass -- this
   quarter's n range and page map were given directly in the task prompt, not derived from a
   preceding part file on disk. Flagged as a finding, see report.), answered pages
   1717,1719,...,1755 (p = 1595 + 2n).
   OCR NOT consulted for transcription (search index only, per brief §4).
   Twin (unanswered) page read wherever the answered page's text was not certain on first read.
   Header extended after every entry; see note fields for per-entry verification method.

   Page-by-page walk (printed number pr vs section-global n) -- filled in as staged:
   n61 p1717 pr61  n62 p1719 pr62  n63 p1721 pr63  n64 p1723 pr64  n65 p1725 pr65
   n66 p1727 pr66  n67 p1729 pr67  n68 p1731 pr68  n69 p1733 pr69  n70 p1735 pr70
   n71 p1737 pr71  n72 p1739 pr72  n73 p1741 pr73  n74 p1743 pr74  n75 p1745 pr75
   n76 p1747 pr76  n77 p1749 pr77  n78 p1751 pr78  n79 p1753 pr79  n80 p1755 pr80

   Boundary proof: p.1756 (one past the range) is a lone full-page Arabic supplication/poem (four
   couplets), no printed question number, no options, no yellow highlight -- the same shape as
   section 3's p.244 closing page per the brief's §3a discussion. Confirms the section, and this
   quarter, end at p.1755/n80.

   All 20 answered pages in this quarter carried a printed explanation box; no boxless pages, no
   overflow boxes, no alternation breaks and no figures in this quarter -- each stated as measured,
   every page opened whole. pr equals n at every entry (61..80), no duplicated or skipped printed
   numbers found. Two pages (p.1723, p.1741) print only 4 options (A-D, no E) -- staged as printed.
*/

{ n:61, pr:61, p:1717, key:3,
  stem:'What is the underlying pathophysiology in Henoch-Schönlein Purpura (HSP)?',
  opts:['Autoreactive T lymphocytes','Anti-basement membrane antibodies','IgM-mediated nephropathy','Vasculitis','Complement abnormality'],
  expl:'Henoch-Schönlein Purpura is an IgA-mediated small vessel vasculitis causing purpura, abdominal pain, and renal involvement.',
  note:'Read on hires p1717, fully legible, no twin needed. Highlighted option is D "Vasculitis" = index 3.' },

{ n:62, pr:62, p:1719, key:2,
  stem:'Where is the site of the brain lesion in dyskinetic type cerebral palsy?',
  opts:['Pyramidal tract','Cerebellum','Basal ganglia and extrapyramidal tract','Brain stem','Dorsal ganglia'],
  expl:'Dyskinetic CP results from injury to basal ganglia, causing abnormal involuntary movements.',
  note:'Read on hires p1719, fully legible, no twin needed. Highlighted option is C "Basal ganglia and extrapyramidal tract" = index 2.' },

{ n:63, pr:63, p:1721, key:2,
  stem:'What will be the next step in a child presenting with anemia and microcytosis?',
  opts:['Reticulocyte count','Hb electrophoresis','Serum ferritin test','Sickling test','Serum folic acid'],
  expl:'Microcytic anemia is most commonly due to iron deficiency; serum ferritin is the most specific test to confirm low iron stores.',
  note:'Read on hires p1721, fully legible, no twin needed. Highlighted option is C "Serum ferritin test" = index 2.' },

{ n:64, pr:64, p:1723, key:2,
  stem:'Bilateral hydroureters and hydronephrosis may result from which type of urinary tract obstruction?',
  opts:['Pelviureteric junction obstruction','Left vesicoureteric junction obstruction','Posterior urethral valve','Bilateral renal pelvis stones'],
  expl:'Bilateral hydronephrosis and hydroureters in a male infant often indicate a lower urinary tract obstruction, most commonly posterior urethral valves.',
  note:'Read on hires p1723, fully legible, no twin needed. Highlighted option is C "Posterior urethral valve" = index 2. Only 4 options printed (A-D), no E -- staged as printed.' },

{ n:65, pr:65, p:1725, key:0,
  stem:'What is the most common cause of cerebral palsy?',
  opts:['Prenatal','Perinatal brain injury','Neonatal infections','Accidents','Meningitis/encephalitis'],
  expl:'Most cases of cerebral palsy result from prenatal brain insults, such as malformations or intrauterine injury, rather than perinatal events.',
  note:'Read on hires p1725, fully legible, no twin needed. Highlighted option is A "Prenatal" = index 0.' },

{ n:66, pr:66, p:1727, key:2,
  stem:'A one-week-old infant is in shock because of a congenital heart disease. Which of the following is the most likely cause?',
  opts:['ASD','VSD','Coarctation','Fallot Tetralogy','PDA'],
  expl:'Critical coarctation of the aorta often causes shock in newborns when the ductus arteriosus closes, reducing blood flow to the body.',
  note:'Read on hires p1727, fully legible, no twin needed. Highlighted option is C "Coarctation" = index 2.' },

{ n:67, pr:67, p:1729, key:1,
  stem:'Which nutritional problem do children with chronic liver disease suffer from?',
  opts:['Defective absorption of medium-chain fatty acids','Defective absorption of long-chain fatty acids','Increased absorption of cholesterol','Improper digestion of proteins','Defective absorption of folic acid and vitamin B'],
  expl:'Chronic liver disease affects bile production and fat absorption, leading to deficiency of fat-soluble vitamins and long-chain fatty acids.',
  note:'Read on hires p1729, fully legible, no twin needed. Highlighted option is B "Defective absorption of long-chain fatty acids" = index 1.' },

{ n:68, pr:68, p:1731, key:3,
  stem:'What is the emergency (acute) investigation in a case of Guillain-Barré syndrome?',
  opts:['MRI of the spinal cord/brain','Acute phase reactant measurement','CPK blood level','EMG (electromyogram)','Nerve biopsy'],
  expl:'In acute Guillain-Barré syndrome, EMG can detect demyelination or conduction block, aiding in early diagnosis.',
  note:'Read on hires p1731, fully legible, no twin needed. Highlighted option is D "EMG (electromyogram)" = index 3.' },

{ n:69, pr:69, p:1733, key:3,
  stem:'What is the best therapeutic strategy for a 4-year-old girl diagnosed with ITP, with a platelet count of 30,000/dL and no active bleeding or mucous membrane purpura?',
  opts:['Oral steroids','IVIG','Anti-D','Observation and follow-up','Splenectomy'],
  expl:'ITP with platelet count >20,000 and no bleeding can be managed conservatively; treatment is reserved for active bleeding or very low counts.',
  note:'Read on hires p1733, fully legible, no twin needed. Highlighted option is D "Observation and follow-up" = index 3. Numeral "30,000/dL" checked, reads clearly as printed -- unit "/dL" for a platelet count is unusual (conventionally /uL or /mm3) but transcribed exactly as the page prints it, not corrected.' },

{ n:70, pr:70, p:1735, key:2,
  stem:'Which of the following is the most ideal insulin regimen for an 8-year-old child recently diagnosed with type 1 diabetes mellitus, who has regular meals a day?',
  opts:['Once daily long-acting insulin','Short-acting insulin 3 times daily','Basal-bolus','Intermediate-acting insulin every 12 hours','Premixed insulin every 12 hours'],
  expl:'For type 1 diabetes with regular meals, a basal-bolus regimen mimics normal physiology, providing long-acting insulin plus rapid-acting doses with meals.',
  note:'Read on hires p1735, fully legible, no twin needed. Highlighted option is C "Basal-bolus" = index 2.' },

{ n:71, pr:71, p:1737, key:1,
  stem:'Which of the following statements is true about Down syndrome?',
  opts:['Most babies with Down syndrome are born to older mothers','Males are frequently infertile','The incidence is 1 in 1400','Epicanthic folds are pathognomonic','The majority have severe intellectual impairment'],
  expl:'Most males with Down syndrome are infertile due to abnormal spermatogenesis, while some females may remain fertile',
  note:'Read on hires p1737, fully legible, no twin needed. Highlighted option is B "Males are frequently infertile" = index 1. Numeral "1 in 1400" checked, reads clearly. Explanation box prints no closing period -- reproduced as printed.' },

{ n:72, pr:72, p:1739, key:1,
  stem:'Which laboratory finding supports the diagnosis of disseminated intravascular coagulation (DIC)?',
  opts:['Thrombocytosis','Elevated D-dimer','Elevated antithrombin, protein C, and protein S','Normal PT','Normal APTT'],
  expl:'DIC leads to widespread clotting and fibrinolysis, resulting in elevated D-dimer levels along with thrombocytopenia and prolonged PT/APTT.',
  note:'Read on hires p1739, fully legible, no twin needed. Highlighted option is B "Elevated D-dimer" = index 1.' },

{ n:73, pr:73, p:1741, key:2,
  stem:'What would be the initial management of a newborn with an antenatal diagnosis of a urinary tract anomaly?',
  opts:['Collect urine for culture immediately after birth','Cord blood sample for serum electrolytes','Start prophylactic antibiotics','Give an appointment after one month for ultrasonographic assessment'],
  expl:'Newborns with antenatally detected urinary tract anomalies may need prophylactic antibiotics to prevent infection until further evaluation.',
  note:'Read on hires p1741, fully legible, no twin needed. Highlighted option is C "Start prophylactic antibiotics" = index 2. Only 4 options printed (A-D), no E -- staged as printed.' },

{ n:74, pr:74, p:1743, key:3,
  stem:'Anti-Streptolysin O titer (ASOT) is a specific diagnostic test for which of the following?',
  opts:['Rheumatic fever','Rheumatic heart disease','Acute glomerulonephritis','Recent group A streptococcal infection'],
  expl:'ASOT measures antibodies against streptolysin O, indicating recent infection with group A streptococcus.',
  note:'Read on hires p1743, fully legible, no twin needed. Highlighted option is D "Recent group A streptococcal infection" = index 3. Only 4 options printed (A-D), no E -- staged as printed.' },

{ n:75, pr:75, p:1745, key:0,
  stem:'Which of the following principles is true regarding the use of antiepileptic drugs (AEDs) in children?',
  opts:['Monotherapy to prevent seizures is the goal','Initial combined drug therapy to prevent seizures is preferred','AEDs are continued indefinitely','AED therapy may be tapered and stopped after 6 months free of seizures','AEDs are contraindicated in infants'],
  expl:'In children, single-drug therapy is preferred to minimize side effects and simplify management.',
  note:'Read on hires p1745, fully legible, no twin needed. Highlighted option is A "Monotherapy to prevent seizures is the goal" = index 0. Numeral "6 months" checked, reads clearly.' },

{ n:76, pr:76, p:1747, key:3,
  stem:'Which clinical finding should not be associated with rheumatic fever?',
  opts:['Carditis','Migratory polyarthritis','Chorea','Maculopapular rash','Subcutaneous nodules'],
  expl:'Rheumatic fever does not cause a maculopapular rash; it presents with migratory arthritis, carditis, chorea, erythema marginatum, and subcutaneous nodules.',
  note:'Read on hires p1747, fully legible, no twin needed. Highlighted option is D "Maculopapular rash" = index 3.' },

{ n:77, pr:77, p:1749, key:3,
  stem:'What is the preferred (most common) method of treatment for hydrocephalus?',
  opts:['Oral diuretics to relieve raised intracranial pressure','Oral carbonic anhydrase inhibitors','Skull bone reconstructive surgery','Ventriculo-peritoneal shunt','Ventriculo-cardiac (right atrium) shunt'],
  expl:'Hydrocephalus is treated by diverting CSF to the peritoneal cavity, most commonly with a ventriculo-peritoneal shunt.',
  note:'Read on hires p1749, fully legible, no twin needed. Highlighted option is D "Ventriculo-peritoneal shunt" = index 3.' },

{ n:78, pr:78, p:1751, key:3,
  stem:'What is the etiology of type 1 DM?',
  opts:['Obesity','Viral destruction of pancreatic beta cells','Gestational diabetes','Autoimmune process affecting the beta cells of the pancreas','Drug-induced'],
  expl:'Type 1 diabetes results from autoimmune destruction of insulin-producing beta cells.',
  note:'Read on hires p1751, fully legible, no twin needed. Highlighted option is D "Autoimmune process affecting the beta cells of the pancreas" = index 3.' },

{ n:79, pr:79, p:1753, key:0,
  stem:'What does the term "seizure" mean?',
  opts:['A paroxysmal abnormality of motor, sensory or autonomic function due to transient brain dysfunction','An abnormal electric activity of the brain','A transient brain dysfunction with more components','A brain disorder that predisposes to epilepsy','An acute brain injury'],
  expl:'A seizure is a sudden, temporary disturbance in brain function causing abnormal movements, sensations, or behavior.',
  note:'Read on hires p1753, fully legible, no twin needed. Highlighted option is A "A paroxysmal abnormality of motor, sensory or autonomic function due to transient brain dysfunction" = index 0.' },

{ n:80, pr:80, p:1755, key:4,
  stem:'What is the diagnostic clue for anemia due to acute blood loss?',
  opts:['Normal retic count and high bilirubin','High retic count and high bilirubin','High retic count and marked red cell hypochromia','Marked red cell hypochromia and microcytosis','High retic count and normal bilirubin'],
  expl:'In acute blood loss, the bone marrow responds by producing more reticulocytes to replace lost red blood cells, so the reticulocyte count is high. Bilirubin remains normal because red cells are lost externally rather than being destroyed (no hemolysis). Chronic iron-deficiency anemia or hemolytic anemia would show hypochromia/microcytosis or elevated bilirubin, which are not features of acute blood loss.',
  note:'Read on hires p1755, fully legible, no twin needed. Highlighted option is E "High retic count and normal bilirubin" = index 4. This is the last answered page of the quarter and the section.' }

];
