/* endpoint PART 2, section 4 "Hematological Disorders" (banner p.245), PART A.
   Range assigned: PDF pp.255-308. Chapters: haematology / haem-bleeding (drafting pass assigns).
   Staged per tools/bank-harness/pd-ep2-staging-brief.md. OCR NOT opened during this pass.

   Page-kind map for this range (measured from images, not from the OCR index handed to me):
     245-254 notes (out of my range, not read) · 255 CONTENT SLIDE (see below) ·
     256 CONTENT SLIDE · 257 CONTENT SLIDE · 258-266 notes (out of range, not read) ·
     267 unanswered q1 · 268 answered q1 · then clean unanswered/answered alternation through 308.

   ALTERNATION-BREAK FINDING, pp.255-257: three consecutive pages the OCR index calls "answered"
   with no unanswered twin between them. Read all three whole. They are NOT questions -- they are
   lettered content/summary slides (same signature as section 3's four lettered summary slides):
     p.255 "4. Hemoglobinopathies / A. Beta-Thalassemia" -- Cause/Types/Clinical Features/
       Complications/Diagnosis/Management bullet slide, header line highlighted yellow.
     p.256 "B. Alpha-Thalassemia" -- Cause/Types bullet slide, header line highlighted yellow.
     p.257 "C. Sickle Cell Disease (SCD)" -- Cause/Inheritance/Types/Pathogenesis/Exacerbating
       Factors bullet slide plus a highlighted "Clinical Features:" sub-header; no options, no
       question stem, no highlighted answer choice anywhere on any of the three pages.
   Not staged as questions. The detector reads a highlighted heading as an "answered" signature;
   there is no printed question or key on any of these three pages.

   Question-number walk (pr = printed number, page by page):
     n1 pr1 p268 */

{ n:1, pr:1, p:268, key:2,
  stem:'Microcytes are seen in blood films of which of the following conditions?',
  opts:['Aplastic anemia','Liver disease','Anemia of chronic disease','Down syndrome','Hypothyroidism'],
  expl:'Microcytes (small red blood cells) are commonly seen in iron deficiency and anemia of chronic disease due to impaired iron utilization. Other listed conditions typically show normocytic or macrocytic anemia.',
  note:'Twin checked (p.267, unanswered, identical stem/options). Option C "Anemia of chronic disease" is highlighted yellow and underlined -> key=2. Printed box present, transcribed verbatim.' }

{ n:2, pr:2, p:270, key:3,
  stem:'Basophil stippling is seen in blood films of which of the following conditions?',
  opts:['Hereditary spherocytosis','Aplastic anemia','Liver disease','Thalassemia','Xerocytosis'],
  expl:'Basophilic stippling refers to aggregated ribosomes in red cells and is characteristic of thalassemia, lead poisoning, and some anemias. It is not typically seen in hereditary spherocytosis or aplastic anemia.',
  note:'Twin checked (p.269, unanswered, identical stem/options). Option D "Thalassemia" is highlighted yellow and underlined -> key=3. Printed box present, transcribed verbatim.' }

{ n:3, pr:3, p:272, key:0,
  stem:'A 4-month-old infant presents with progressive pallor,microcephaly, snub nose, high-arched palate, hypertelorism, low-set ears, and triphalangeal thumb. Peripheral blood smear shows macrocytic RBCs with low reticulocyte count. Which of the following is the MOST likely diagnosis ?',
  opts:['Diamond-Blackfan anemia','Fanconi anemia','Shwachman-Diamond syndrome','Pearson marrow-pancreas syndrome','Aase syndrome'],
  expl:'Diamond-Blackfan anemia presents in infancy with macrocytic anemia, low reticulocytes, and congenital anomalies like craniofacial defects and thumb abnormalities.',
  note:'Twin checked (p.271, unanswered, identical stem/options; comma after "pallor" with no space is printed on both, reproduced verbatim). Option A "Diamond-Blackfan anemia" is highlighted yellow and underlined -> key=0. Printed box present, transcribed verbatim.' }

{ n:4, pr:4, p:274, key:1,
  stem:'Which of the following is the mainstay therapy of Diamond-Blackfan anemia?',
  opts:['Chronic red cell transfusions','Corticosteroids','Hematopoietic stem cell transplantation','Hydroxyurea','splenectomy'],
  expl:'Corticosteroids are first-line treatment for Diamond-Blackfan anemia, improving red cell production. Some patients may also require chronic transfusions or stem cell transplant.',
  note:'Twin checked (p.273, unanswered, identical stem/options; option E printed lowercase "splenectomy" on both, reproduced verbatim). Option B "Corticosteroids" is highlighted yellow and underlined -> key=1. Printed box present, transcribed verbatim.' }

{ n:5, pr:5, p:276, key:3,
  stem:'Which of the following RBC indices is MOST helpful in the diagnosis of hereditary spherocytosis?',
  opts:['RBC count','MCV','MCH','MCHC','RDW'],
  expl:'In hereditary spherocytosis, MCHC (mean corpuscular hemoglobin concentration) is elevated due to reduced membrane surface area and cell dehydration.',
  note:'Twin checked (p.275, unanswered, identical stem/options). Option D "MCHC" is highlighted yellow and underlined -> key=3. Printed box present, transcribed verbatim.' }

{ n:6, pr:6, p:278, key:1,
  stem:'What is the MOST common inherited pancytopenia syndrome?',
  opts:['Dyskeratosis congenita','Fanconi anemia','Shwachman-Diamond syndrome','Diamond-Blackfan anemia','Congenital amegakaryocytic thrombocytopenia'],
  expl:'Fanconi anemia is the most common inherited cause of pancytopenia, often presenting with physical anomalies and progressive bone marrow failure.',
  note:'Twin checked (p.279, unanswered, identical stem/options; double period after "bruising" printed on both, reproduced verbatim). Option D "Fanconi anemia" is highlighted yellow and underlined -> key=3. Printed box present, transcribed verbatim. FLAGGED NUMERAL/UNIT: stem prints "5.0×109/L" and "80×109/L" with NO superscript on the exponent -- checked at native 800x450 AND at a 300 dpi crop of p.280 (ep2-stage\\p-0280.jpg), both show the same flat "109", not a stylised 10^9. This is the source slide itself printing it flat (verified on the rendered page pixels, not via OCR), most likely intended as x10^9/L (standard WBC/platelet units) but the slide carries no superscript formatting to confirm that intent. Staged exactly as printed.' }
