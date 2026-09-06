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
  note:'Read directly off p.1800 native JPEG, fully legible, no crop or twin needed. Key C (index 2) highlighted yellow with bold/underline box. No figure.' }

{ n:22, pr:22, p:1802, key:4,
  stem:'Bronchiolitis is one of the most common respiratory conditions affecting infants. Which of the following is not a clinical feature of bronchiolitis?',
  opts:['Tachypnoea','Apnoea','Wheeze','Fine crackles','Paroxysmal cough'],
  expl:'Bronchiolitis typically presents with tachypnea, wheeze, fine crackles, and sometimes apnoea; paroxysmal cough is not classic.',
  note:'Read directly off p.1802 native JPEG, fully legible, no crop or twin needed. Key E (index 4) highlighted yellow with bold/underline. No figure.' }

{ n:23, pr:23, p:1804, key:1,
  stem:'A 24-month-old girl with trisomy 21 attends for her developmental review. Her mother is concerned about her hearing and explains that she has had two recent right ear infections within the last 5 months. An audiogram is carried out, which confirms a conductive hearing loss of the right ear. What is the most likely explanation for this finding?',
  opts:['Congenital infection','Otitis media with effusion','Acquired meningitis','Antibiotic toxicity','Foreign body'],
  expl:'Children with trisomy 21 commonly develop recurrent middle ear effusions causing conductive hearing loss.',
  note:'Read directly off p.1804 native JPEG, fully legible, no crop or twin needed. Key B (index 1) highlighted yellow with bold/underline. No figure.' }

{ n:24, pr:24, p:1806, key:0,
  stem:'A 10-year-old boy is admitted with left lower lobe pneumonia. On day 3 of admission, he develops gradually increased work of breathing and a fever of 40°C. On assessment, he has a respiratory rate of 40 per minute, and auscultation reveals a clear right lung field but reduced breath sounds throughout his left lung. The percussion note is stony dull, and chest expansion is reduced on his left side. What is the most likely diagnosis?',
  opts:['Empyema','Lobar collapse','Lung abscess','Pneumothorax','Cor pulmonale'],
  expl:'Fever, unilateral stony dull percussion, and absent breath sounds after pneumonia indicate pleural effusion/empyema.',
  note:'Read directly off p.1806 native JPEG, fully legible, no crop or twin needed. Key A (index 0) highlighted yellow with bold/underline. No figure.' }

{ n:25, pr:25, p:1808, key:2,
  stem:'Developmental milestones vary between children; however, there are normal ranges for each domain. Which of the following is not a developmental concern?',
  opts:['Not visually fixing at 5 weeks','Not sitting unsupported at 7 months','Not using single words at 16 months','Not walking at 17 months','Not copying a line at 24 months'],
  expl:'Not using single words at 15 months. Single words, e.g. mama and dada, should be heard by about 12monthsofage.',
  note:'Read directly off p.1808 native JPEG and confirmed with a 300 dpi crop. Key C (index 2) highlighted yellow with bold/underline. NUMBER FLAG: option C prints "16 months" but the box says "15 months" -- a printed discrepancy between stem/option and box, both confirmed legible at 300 dpi, key stays as printed (option C, the boxed/highlighted answer). No figure.' }

{ n:26, pr:26, p:1810, key:2,
  stem:'An 11-month-old Caucasian boy attends his GP as his mother has been struggling to wean him. He will drink cow’s milk at regular intervals and eats some baby rice but refuses most other solids. On examination, he appears very pale but otherwise well. There is no hepatosplenomegaly. A full blood count (FBC) is arranged in view of the pallor, which shows: Hb = 7.8 g/dL, mean corpuscular volume (MCV) = 69 fL. What is the most likely cause of his anemia?',
  opts:['Sickle cell anemia','Thalassaemia','Iron deficiency anemia','Vitamin B12 deficiency','Folate deficiency'],
  expl:'Excess cow’s milk, low solid intake, and microcytic anemia indicate iron deficiency.',
  note:'Read directly off p.1810 native JPEG, fully legible, no crop or twin needed. Hb=7.8 g/dL and MCV=69 fL read directly, both clear. Key C (index 2) highlighted yellow with bold/underline. No figure.' }

{ n:27, pr:27, p:1812, key:4,
  stem:'A 4-year-old boy presents with pain in his abdomen and joints for the past 24 hours. He is afebrile. On examination, he has diffuse abdominal tenderness, but there are no masses, no lymphadenopathy, and no hepatosplenomegaly. A widespread purpuric rash is present over the legs and buttocks. A urine dip shows 2+ blood. Routine bloods are normal. What is the most likely diagnosis?',
  opts:['Idiopathic thrombocytopenic purpura','Meningococcal sepsis','Acute lymphoblastic leukaemia (ALL)','Vitamin C deficiency (scurvy)','Henoch–Schönlein purpura'],
  expl:'Classic HSP: purpura, abdominal pain, arthralgia, and renal involvement',
  note:'Read directly off p.1812 native JPEG, fully legible, no crop or twin needed. Key E (index 4) highlighted yellow with bold/underline. No figure.' }

{ n:28, pr:28, p:1814, key:2,
  stem:'A 3-year-old girl presents with severe pain in her hands and abdomen. On examination, the patient has yellow sclera, generalized abdominal tenderness, and hepatosplenomegaly. Blood tests were taken, including a CBC showing: Hb = 6.1 g/dL, MCV = 78 fL, white cell count (WCC) = 6.0 x 10^9/L, platelets = 300 x 10^9/L. What is the most likely cause of her anemia?',
  opts:['Thalassaemia','Iron deficiency anemia','Sickle cell disease','Anaemia of chronic disease','Glucose-6-phosphate dehydrogenase deficiency'],
  expl:'Vaso-occlusive crises with hemolytic anemia and splenomegaly are typical in sickle cell disease.',
  note:'Read at native, both 10^9 exponents confirmed as genuine typeset superscripts via a 300 dpi crop (p-1814.jpg). Hb=6.1 g/dL, MCV=78 fL, WCC=6.0x10^9/L, platelets=300x10^9/L all read directly. Key C (index 2) highlighted yellow with bold/underline. No figure.' }

{ n:29, pr:29, p:1816, key:3,
  stem:'A 9-year-old girl with known sickle cell disease presents with a 4-day history of fever, coryza, and myalgia. Over the past 24 hours, she has developed a lacy rash, particularly over her hands and feet, and has become more lethargic. Her mother reports her looking more pale. An FBC reveals: Hb = 5.9 g/dL, WBC = 1.0 x 10^9/L, platelets = 50 x 10^9/L. What is the most likely cause for her blood results?',
  opts:['Splenic sequestration crisis','Painful crisis','Chest crisis','Parvovirus B19 infection','Pneumococcal sepsis'],
  expl:'Parvovirus B19 causes aplastic crisis in sickle cell patients, leading to severe anemia and low reticulocytes.',
  note:'Both 10^9 exponents confirmed as genuine typeset superscripts via a 300 dpi crop (p-1816.jpg). Hb=5.9 g/dL, WBC=1.0x10^9/L, platelets=50x10^9/L all read directly. Key D (index 3) highlighted yellow with bold/underline. No figure.' }

{ n:30, pr:30, p:1818, key:2,
  stem:'An 8-month-old girl with Greek-Cypriot parents is brought to her GP as her parents are worried she is not growing well and is very pale. On examination, there is pallor and mildly icteric sclera. She has a distended abdomen with hepatosplenomegaly and mild frontal bossing. She was born on the 25th centile and her weight has fallen below the 2nd centile. Blood tests show microcytic hypochromic anemia. What is the likely diagnosis?',
  opts:['Sickle cell disease','Hereditary spherocytosis','Thalassaemia major','Glucose-6-phosphate dehydrogenase deficiency (G6PD)','Iron deficiency anemia'],
  expl:'Mediterranean ancestry, growth failure, pallor, hepatosplenomegaly, and microcytic anemia suggest beta-thalassemia major.',
  note:'Read directly off p.1818 native JPEG, fully legible, no crop or twin needed. 25th and 2nd centile figures read directly. Key C (index 2) highlighted yellow with bold/underline. No figure.' }

{ n:31, pr:31, p:1820, box:1821,
  key:2,
  stem:'A 5-year-old boy attends accident and emergency with a nosebleed that his mother has been unable to stop for the past 45 minutes. He saw his GP for a viral upper respiratory tract infection 1 week ago but is otherwise well. His nosebleeds are stopped with pressure, but on examination he is noted to have multiple petechiae on his chest, legs, and abdomen. Blood tests reveal: Hb 10.4 g/dL, WCC 13 × 10^9/L, platelet count 15 × 10^9/L, clotting screen normal. The most likely diagnosis is which of the following?',
  opts:['Henoch–Schönlein purpura','Haemophilia B (Christmas disease)','Immune (idiopathic) thrombocytopenic purpura (ITP)','Meningococcal septicaemia','Hemolytic uraemic syndrome (HUS)'],
  expl:'The child has sudden onset bruising and petechiae with a very low platelet count, normal clotting, and recent viral infection, which is classic for ITP. Other causes like hemophilia or HUS would present differently with coagulation abnormalities or renal involvement.',
  note:'Explanation box overflowed onto p.1821 alone (matches task prompt orientation: ITP contrasted against haemophilia and HUS); box page confirmed by eye, no question/options/highlight on it. Both 10^9 exponents on p.1820 confirmed genuine typeset superscripts via 300 dpi crop (p-1820.jpg). "platelet count 15 × 10^9/L" is printed in red text on the page (colour emphasis, transcribed as plain text here per schema -- no field for colour). Key C (index 2) highlighted yellow with bold/underline. No figure.' }

{ n:32, pr:32, p:1823, key:0,
  stem:'A 7-year-old Ghanaian boy presented to accident and emergency room 3 days ago on his return from holiday in West Africa with high fever and rigors. A diagnosis of malaria was made and he was started on primaquine. His mother is concerned that he has begun to look increasingly jaundiced. On examination, there is deep jaundice, and he is looking pale and breathless. An FBC and film are taken, which show: Hb 5.5 g/dL, WCC 15 × 10^9/L, platelet count 200 × 10^9/L. Blood film: red cell fragments and bite cells with Heinz bodies on staining. The most likely underlying diagnosis is which of the following?',
  opts:['Glucose-6-phosphate dehydrogenase deficiency (G6PD)','Pyruvate kinase deficiency','Sickle cell disease','Beta-thalassaemia'],
  expl:'The boy developed hemolytic anemia after exposure to primaquine, a known trigger in G6PD deficiency. Blood film shows bite cells and Heinz bodies, which are typical findings in oxidative hemolysis.',
  note:'Confirmed only 4 options (A-D), no option E printed, via the hires render -- native crop cut off at D but the full slide shows nothing further. Both 10^9 exponents confirmed genuine typeset superscripts. Key A (index 0) highlighted yellow with bold/underline. No figure.' }

{ n:33, pr:33, p:1825, key:4,
  stem:'A 4-year-old girl is undergoing chemotherapy for acute lymphoblastic leukaemia. She presents 8 days after her last treatment with a fever of 39°C. She has a portacath in situ. Her FBC shows a WBC of 1.0 × 10^9/L, neutrophils 0.4 × 10^9/L, platelets 100 × 10^9/L, and Hb 10 g/dL. What is the most important step in her management?',
  opts:['Packed red blood cell transfusion','Platelet transfusion','Administration of G-CSF','Antipyretics','Intravenous antibiotics'],
  expl:'This neutropenic child with fever is at high risk for sepsis. Immediate IV antibiotics are critical; transfusions or G-CSF are supportive but not first-line in febrile neutropenia.',
  note:'All three 10^9 exponents (WBC, neutrophils, platelets) confirmed genuine typeset superscripts via 300 dpi crop (p-1825.jpg). Key E (index 4) highlighted yellow with bold/underline. No figure.' }

{ n:34, pr:34, p:1827, box:1828,
  key:3,
  stem:'ALL is the commonest form of childhood leukaemia and carries a 5-year survival rate of over 80%. However, prognosis depends on a number of factors. Which of the following is a good prognostic factor in acute lymphoblastic leukaemia?',
  opts:['White cell count (WCC) >50 × 10^9/L at diagnosis','Age >10 at diagnosis','Age <1 year at diagnosis','Non-B cell or non-T cell leukaemia','Presence of translocations, e.g., Philadelphia chromosome'],
  expl:'In childhood acute lymphoblastic leukemia (ALL), good prognostic factors include: age between 1–10 years, normal or slightly elevated WCC (<50 ×10^9/L), and favorable immunophenotype (common B-cell ALL). Poor prognostic factors include age <1 or >10, high WCC, T-cell or certain B-cell subtypes, and presence of adverse genetic translocations like the Philadelphia chromosome.',
  note:'Explanation box overflowed onto p.1828 alone (matches task prompt orientation: ALL prognostic factors, good vs poor); box page confirmed by eye, no question/options/highlight on it. Option A 10^9 exponent on p.1827 confirmed genuine typeset superscript via 300 dpi crop (p-1827.jpg). The box exponent "<50 ×10^9/L" (task prompt flagged this specifically) also confirmed as genuine typeset superscript via 300 dpi crop (p-1828.jpg) -- read directly off the image, not from OCR or the prompt paraphrase. Key D (index 3) highlighted yellow with bold/underline. No figure.' }

{ n:35, pr:35, p:1830, key:2,
  stem:'Brain tumors are the most common solid tumor of childhood, and presentation may be insidious, leading to late diagnosis. Which of the following statements regarding brain tumors in childhood is true?',
  opts:['They are usually supratentorial','Signs of raised intracranial pressure are rare','Astrocytomas carry poor prognosis','Medulloblastomas are the most common type','Metastasis is common'],
  expl:'Most childhood brain tumours are infratentorial, and diagnosis is often delayed due to insidious onset and signs of raised intracranial pressure. Astrocytomas are the most common type and generally have a poor prognosis, while metastasis is rare in CNS tumours.',
  note:'Read directly off p.1830 native JPEG, fully legible, no crop or twin needed. Key C (index 2) highlighted yellow with bold/underline. No figure.' }

{ n:36, pr:37, p:1832, key:0,
  stem:'An 11-year-old girl presents to the emergency department with a 4-day history of cough and fever. A working diagnosis of right middle lobe pneumonia is made, and she is commenced on intravenous antibiotics and admitted to the ward. Her blood tests reveal a plasma sodium of 127 mmol/L with normal renal function. Further investigations reveal a low plasma osmolality and a raised urinary sodium level. What is the most likely diagnosis?',
  opts:['Syndrome of inappropriate secretion of ADH','Cushing syndrome','Diabetes insipidus','Secondary adrenal insufficiency','Adrenal hyperplasia'],
  expl:'Hyponatremia with low plasma osmolality and high urinary sodium during pneumonia suggests SIADH, caused by inappropriate ADH secretion. Other endocrine disorders would have additional systemic signs.',
  note:'⚠️ PRINTED NUMBER DIVERGES: this page prints "37." though it is n36 in section order (previous page, n35, printed "35" -- so the printed sequence jumps 35 to 37, skipping 36 entirely). Recorded as pr:37; n stays sequential per brief rule. Plasma sodium 127 mmol/L read directly off p.1832 native JPEG, fully legible, no crop or twin needed. Key A (index 0) highlighted yellow with bold/underline. No figure.' }

{ n:37, pr:38, p:1834, key:0,
  stem:'A 9-year-old girl presents with haematuria.She is usually fit and well but was treated for tonsillitis last week by her GP. On examination, there is peripheral edema and hypertension, but no abdominal mass. The urine dipstick is positive for blood and protein.\nWhat is the likely diagnosis?',
  opts:['Post-streptococcal glomerulonephritis','Hemolytic uraemic syndrome','Systemic lupus erythematosus (SLE)','Henoch-Schoenlein purpura','Minimal change nephropathy'],
  expl:'Recent tonsillitis, hematuria, hypertension, and edema point to post-streptococcal glomerulonephritis. HUS would have thrombocytopenia and renal impairment; nephrotic syndrome would show heavy proteinuria without hematuria.',
  note:'pr continues 1 ahead of n (38 vs n37), consistent with the 35->37 skip on the previous page -- the printed numbering has not resynced. Read directly off p.1834 native JPEG, fully legible, no crop or twin needed. Key A (index 0) highlighted yellow with bold/underline. No figure.' }

{ n:38, pr:39, p:1836, key:3,
  stem:'A 7-year-old girl presents with edema of the face and legs, and abdominal pain.Urine dipstick shows 4+ protein. A diagnosis of nephrotic syndrome is made, and she is started on prednisolone.\nWhat would be the likely finding on biopsy and light microscopy?',
  opts:['Focal-segmental glomerulosclerosis','Mesangiocapillary glomerulonephritis','Crescentic glomerulonephritis','Minimal change disease','Membranous glomerulonephritis'],
  expl:'Most children with steroid-sensitive nephrotic syndrome show normal glomeruli under light microscopy, which is minimal change disease. Other patterns usually correlate with steroid resistance.',
  note:'pr still 1 ahead of n (39 vs n38), same unresynced offset. Read directly off p.1836 native JPEG, fully legible, no crop or twin needed. Key D (index 3) highlighted yellow with bold/underline. No figure.' }

{ n:39, pr:40, p:1838, key:2,
  stem:'An 11-year-old girl presents following 6 days of fever, abdominal pain, and bloody diarrhea.She has become increasingly irritable and lethargic. Blood tests reveal: Hb 7.5 g/dL, WBC 15 × 10^9/L, platelets 40 × 10^9/L, urea 9.0 mmol/L, creatinine 200 µmol/L, and a blood film shows red blood cell fragments.\nThe most likely diagnosis is:',
  opts:['Ulcerative colitis','Glucose-6-phosphate dehydrogenase deficiency','Hemolytic uraemic syndrome','Dehydration','Viral gastroenteritis'],
  expl:'Bloody diarrhea followed by anemia, thrombocytopenia, and renal impairment with fragmented RBCs indicates typical HUS, usually post-infectious with E. coli O157:H7.',
  note:'pr still 1 ahead of n (40 vs n39), same unresynced offset persists to the end of my quarter. Both 10^9 exponents confirmed genuine typeset superscripts via 300 dpi crop (p-1838.jpg). Urea 9.0 mmol/L, creatinine 200 µmol/L read directly, both clear. Key C (index 2) highlighted yellow with bold/underline. No figure.' }

{ n:40, pr:41, p:1840, key:3,
  stem:'A 3-month-old baby girl presents with a fever of 38.6°C, crying, and vomiting.A dipstick demonstrates white cells and protein in her urine.\nWhich of the following organisms is most likely to be responsible for her urinary tract infection?',
  opts:['Enterococcus spp.','Pseudomonas','Proteus','Escherichia coli','Klebsiella'],
  expl:'E. coli is the most common cause of UTIs in infants, especially girls. Other organisms are less frequent in this age group.',
  note:'LAST ENTRY OF QUARTER B. pr still 1 ahead of n (41 vs n40), same unresynced offset holds through to my last page. Read directly off p.1840 native JPEG, fully legible, no crop or twin needed. Key D (index 3) highlighted yellow with bold/underline. No figure.' }
