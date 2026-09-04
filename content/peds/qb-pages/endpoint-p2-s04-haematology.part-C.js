/* endpoint PART 2, section 4 "Hematological Disorders" (banner p.245), PART C.
   Range assigned: PDF pp.359-405. Chapters: haematology / haem-bleeding (drafting pass assigns).
   Staged per tools/bank-harness/pd-ep2-staging-brief.md. OCR NOT opened during this pass.
   n starts at 1 in this part -- merge-parts-ep2.js validates position, it does not renumber.

   Page-kind map for this range (measured from images, not from the OCR index handed to me):
     p.358 unanswered twin of q45 (out of my range, read only as twin) ·
     359 answered q45 · then clean unanswered/answered alternation through 405, COMPLETE. No
     consecutive answered pages found; no notes/box-overflow pages interleaved anywhere in this
     range (§3a box test applied at p.377 -> p.378 checked, ordinary unboxed question, no
     overflow). Range CLOSED at p.405; p.407 (part D) rendered once and confirmed as an ordinary
     continuation, not staged.

   ⚠️ Two pages flagged by the cross-part sweep as possible reprints, staged normally per
   instruction, unresolved: p.375 (q53, hemophilia) ~= p.442 (part D); p.383 (q57, ITP) ~= p.448
   (part D). See each entry's note for the exact stem opening / option count / key / box state.

   One numeral/text anomaly confirmed by 300dpi crop, not corrected: p.391 (q61) prints
   "Hb (6mg/dl)" and TWO options both reading "Thalassemia" (options d and e) -- both genuine
   printed defects, staged as-is.

   Question-number walk (pr = printed number, page by page):
     n1 pr45 p359 · n2 pr46 p361 · n3 pr47 p363 · n4 pr48 p365 · n5 pr49 p367 · n6 pr50 p369 ·
     n7 pr51 p371 · n8 pr52 p373 · n9 pr53 p375 · n10 pr54 p377 · n11 pr55 p379 · n12 pr56 p381 ·
     n13 pr57 p383 · n14 pr58 p385 · n15 pr59 p387 · n16 pr60 p389 · n17 pr61 p391 · n18 pr62 p393 ·
     n19 pr63 p395 · n20 pr64 p397 · n21 pr65 p399 · n22 pr66 p401 · n23 pr67 p403 · n24 pr68 p405 */

{ n:1, pr:45, p:359, key:4,
  stem:'A 4-year-old girl undergoing chemotherapy for acute lymphoblastic leukaemia presents 8 days after her last treatment with a fever of 39°C. She has a portacath in situ. Her FBC reveals: WCC: 1.0 × 10^9/L Neutrophils: 0.4 × 10^9/L Platelets: 100 × 10^9/L Hb: 10 g/dL What is the most important step in her management?',
  opts:['Packed red cell transfusion','Platelet transfusion','G-CSF administration','Antipyretics','Intravenous antibiotics'],
  expl:'This patient is neutropenic with a fever, which is a medical emergency. Immediate IV antibiotics are essential to prevent sepsis and improve survival.',
  note:'Twin checked (p.358, unanswered, identical stem/options). Option E "Intravenous antibiotics" highlighted yellow and underlined -> key=4. Printed box present, transcribed verbatim.' }

{ n:2, pr:46, p:361, key:1,
  stem:'A 5-month-old baby is brought to the hospital with a swollen left upper arm. Both parents state that he fell while playing. A radiograph shows a spiral fracture of the left humerus. Which feature suggests non-accidental injury?',
  opts:['Immediate presentation to hospital','History does not match the injury','Parents appear distraught','Both parents give consistent accounts','No prior hospital attendances'],
  expl:'A spiral fracture in a non-mobile infant is highly suspicious for non-accidental injury, especially when the injury mechanism is inconsistent with developmental stage.',
  note:'Read clear on native, no twin needed. Option B "History does not match the injury" highlighted yellow and underlined -> key=1. Printed box present, transcribed verbatim.' }

{ n:3, pr:47, p:363, key:1,
  stem:'A 3-year-old male presents to the pediatrician with fever, anorexia, joint pain, petechiae and hepatosplenomegaly. Which of the following diagnostic procedures is MOST likely to yield a definitive diagnosis?',
  opts:['Joint MRI','Bone marrow aspiration','ASOT','Serum iron and TIBC','CSF examination'],
  expl:'Bone marrow aspiration is the most definitive test in a child with fever, joint pain, petechiae, hepatosplenomegaly, and suspected leukemia. It confirms the diagnosis by showing leukemic blasts.',
  note:'Read clear on native, no twin needed. Option b "Bone marrow aspiration" highlighted yellow and underlined -> key=1. Printed box present, transcribed verbatim.' }

{ n:4, pr:48, p:365, key:4,
  stem:'On a routine CBC-screening, a 1.5-year-old is noted to have a microcytic hypochromic anemia. A follow-up hemoglobin electrophoresis demonstrates increased level of hemoglobin A2. The child is MOST likely to have:',
  opts:['Lead poisoning','Iron deficiency','Chronic systemic illness','Sickle cell trait','Beta thalassemia minor'],
  expl:'Increased HbA2 on electrophoresis is the hallmark of β-thalassemia minor. These children present with microcytic hypochromic anemia that does not improve with iron.',
  note:'Read clear on native, no twin needed. Option e "Beta thalassemia minor" highlighted yellow and underlined -> key=4. Printed box present, transcribed verbatim.' }

{ n:5, pr:49, p:367, key:3,
  stem:'Which of the following is the confirmatory test for diagnosing leukemia in children?',
  opts:['Blast cells present in CBC','Hypercellularity of RBC precursors in bone marrow','Leukocytosis','Bone marrow aspiration with cytology'],
  expl:'The confirmatory test for leukemia is bone marrow aspiration, which shows blast cells. CBC alone is not sufficient for a definite diagnosis.',
  note:'Read clear on native, no twin needed. Only 4 options printed (a-d). Option d "Bone marrow aspiration with cytology" highlighted yellow and underlined -> key=3. Printed box present, transcribed verbatim.' }

{ n:6, pr:50, p:369, key:2,
  stem:'A 14-month-old infant presents with pallor and anorexia. Laboratory results reveal: Hg 7 g/dl, hypochromic microcytic RBCs, normal WBCs morphology, and low serum ferritin. Which of the following statement is CORRECT?',
  opts:['He probably has beta-thalassemia major','Long-term treatment with packed RBCs transfusion will be required','A dietary history is important','Bone marrow examination is indicated','Osmotic fragility test should be done'],
  expl:'Low Hb, microcytic hypochromic anemia, and low ferritin suggest iron deficiency anemia. The most useful step is taking a dietary history to guide management.',
  note:'Read clear on native, no twin needed. Option c "A dietary history is important" highlighted yellow and underlined -> key=2. Printed box present, transcribed verbatim.' }

{ n:7, pr:51, p:371, key:0,
  stem:'What is the most common cause of anemia in school-aged children?',
  opts:['Iron deficiency anemia','Thalassemia','Sickle cell anemia','Megaloblastic anemia'],
  expl:'Iron deficiency anemia is the most common cause of anemia in school-aged children, usually due to poor diet or chronic blood loss.',
  note:'Read clear on native, no twin needed. Only 4 options printed (a-d). Option a "Iron deficiency anemia" highlighted yellow and underlined -> key=0. Printed box present, transcribed verbatim.' }

{ n:8, pr:52, p:373, key:0,
  stem:'All of the following are true about thalassemia EXCEPT?',
  opts:['Decreased serum ferritin','Microcytic hypochromic anemia','Increased HbA2 in beta-thalassemia minor','Genetic inheritance'],
  expl:'Thalassemia shows normal or increased ferritin (not decreased), microcytic hypochromic anemia, and raised HbA2 in β-thalassemia minor.',
  note:'Read clear on native, no twin needed. Only 4 options printed (a-d). Option a "Decreased serum ferritin" highlighted yellow and underlined -> key=0. Printed box present, transcribed verbatim.' }

{ n:9, pr:53, p:375, key:3,
  stem:'A 3-year-old boy fell while playing in the garden. He developed a very painful swelling of his right knee, aspiration of which revealed the presence of blood. The following laboratory parameters have been obtained: INR normal, APTT increased, fibrinogen normal, antithrombin III level normal, bleeding time 3.3 min. What is the most likely cause?',
  opts:['Fibrinogen deficiency','Glucose-6-phosphate dehydrogenase deficiency','Prothrombin deficiency','Hemophilia','Factor VII deficiency'],
  expl:'Normal INR, prolonged APTT, and joint bleeding (hemarthrosis) strongly suggest hemophilia. Platelets and fibrinogen are normal.',
  note:'⚠️ FLAGGED cross-part: swept as possible reprint of p.442 (part D). Read clear on native, no twin needed. Printed number 53. 5 options (a-e). Stem opens "A 3-year-old boy fell while playing in the garden. He developed a very painful swelling of his right knee...". Option d "Hemophilia" highlighted yellow, bold and underlined -> key=3. Printed box present (bordered box to the right of option d), transcribed verbatim, reads: "Normal INR, prolonged APTT, and joint bleeding (hemarthrosis) strongly suggest hemophilia. Platelets and fibrinogen are normal." Not resolved against p.442 per instruction -- staged as-is for post-merge adjudication.' }

{ n:10, pr:54, p:377, key:3,
  stem:'A 16y old young man with sickle-cell anemia is admitted with recent breathlessness. He is febrile and has a clear chest with saturations of 98% on air. From his out-patient notes his usual Hb is 9 mg/dl. Labs showed WCC 8.6x10^9/L, Hb 4.7 mg/dl, PLT 573x10^9/L. Bilirubin is elevated. Which investigation is the most useful to perform next?',
  opts:['Serum haptoglobin','Urinary hemosiderin','Parvovirus serology','Reticulocyte count','Chest X-ray'],
  expl:'',
  note:'Read clear on native, no twin needed (twin would be p.376, out of range/not needed -- page reads unambiguously). Option d "Reticulocyte count" highlighted yellow and underlined -> key=3. No box printed on this page. §3a box test applied: opened p.378 (next page) -- it is q55 unanswered (plain, no highlight, no box), so the box did not overflow there; this is simply an unboxed question. expl left empty. Units read off image as printed: "8.6x10^9/L", "4.7 mg/dl", "573x10^9/L" (page prints "x10^9" as caret-style superscript already legible on native, no crop needed).' }

{ n:11, pr:55, p:379, key:2,
  stem:'Which of the following is the diagnostic test for hereditary spherocytosis?',
  opts:['Bone marrow examination','Coombs test','Osmotic fragility test','Hemoglobin electrophoresis'],
  expl:'Hereditary spherocytosis is confirmed by osmotic fragility testing. It shows increased red cell lysis in hypotonic solutions.',
  note:'Twin checked (p.378, unanswered, identical stem/options). Only 4 options printed (a-d). Option c "Osmotic fragility test" highlighted yellow and underlined -> key=2. Printed box present, transcribed verbatim.' }

{ n:12, pr:56, p:381, key:0,
  stem:'All of the following are true about Henoch–Schönlein purpura (HSP) EXCEPT?',
  opts:['Rash on flexor surfaces','Arthritis','Gastrointestinal bleeding','Acute abdomen'],
  expl:'Henoch–Schönlein purpura (HSP) rash typically occurs on extensor surfaces and buttocks, not flexors. It also presents with arthritis, abdominal pain, and GI bleeding.',
  note:'Read clear on native, no twin needed. Only 4 options printed (a-d). Option a "Rash on flexor surfaces" highlighted yellow and underlined -> key=0. Printed box present, transcribed verbatim.' }

{ n:13, pr:57, p:383, key:0,
  stem:'A 5-year-old girl developed petechiae and bruises on her extremities while she was recovering from a cold. She is brought to medical attention after she has had hematemesis and nose bleeding. Physical examination shows a toddler with widespread petechiae and ecchymosis who otherwise looks healthy. What is the best treatment of this patient?',
  opts:['Intravenous gamma globulins','Rituximab','Intravenous antibiotics','Platelet transfusion','Plasma transfusion'],
  expl:'This child has immune thrombocytopenic purpura (ITP) after a viral infection. IVIG is the best treatment in symptomatic bleeding.',
  note:'⚠️ FLAGGED cross-part: swept as possible reprint of p.448 (part D). Read clear on native, no twin needed. Printed number 57. 5 options (a-e). Stem opens "A 5-year-old girl developed petechiae and bruises on her extremities while she was recovering from a cold...". Option a "Intravenous gamma globulins" highlighted yellow and underlined -> key=0. Printed box present (bordered box overlapping options c/d area), transcribed verbatim, reads: "This child has immune thrombocytopenic purpura (ITP) after a viral infection. IVIG is the best treatment in symptomatic bleeding." Not resolved against p.448 per instruction -- staged as-is for post-merge adjudication.' }

{ n:14, pr:58, p:385, key:0,
  stem:'A 5-year-old boy presents with a low-grade fever during the last two weeks. On examination, large lymph nodes are palpable on both sides of the neck, under the axilla and in inguinal regions and there is hepatosplenomegaly. He is pale and has some purpuric spots are over the back. What is the most likely diagnosis?',
  opts:['Acute lymphocytic leukemia','Military tuberculosis','Idiopathic thrombocytopenic purpura','Henoch Schonlein purpura','Aplastic anemia'],
  expl:'Generalized lymphadenopathy, hepatosplenomegaly, pallor, and purpura in a child strongly suggest acute lymphoblastic leukemia (ALL).',
  note:'Read clear on native, no twin needed. Option a "Acute lymphocytic leukemia" highlighted yellow and underlined -> key=0. Printed box present, transcribed verbatim.' }

{ n:15, pr:59, p:387, key:3,
  stem:'A 7-year-old boy presents with pallor. He was born at full-term weighing 2.89 kg. He is fully immunized, on no medications. Hb 9.2g/dl, MCV 69 (low). He has been treated with oral iron for three months, but there was no improvement in the CBC. A blood film shows Heinz bodies, target cells, aniso-poikilocytosis and reticulocytes. Supravital staining shows inclusions of precipitated hemoglobin. What is the most likely diagnosis?',
  opts:['Marrow failure','Iron deficiency','Blood loss in stools','Hemoglobinopathies','Malignancy'],
  expl:'Failure to respond to iron, microcytosis, target cells, and Heinz bodies suggest thalassemia or another hemoglobinopathy.',
  note:'Read clear on native, no twin needed. Option d "Hemoglobinopathies" highlighted yellow and underlined -> key=3. Printed box present, transcribed verbatim. Weight "2.89 kg", "Hb 9.2g/dl", "MCV 69" and stem wording read directly off image, plainly legible at native resolution, no crop needed.' }

{ n:16, pr:60, p:389, key:1,
  stem:'A female child presenting with epistaxis and bleeding gums for 2 days. Clinical examination revealed scattered petechiae and ecchymosis over the upper and lower limbs. No pallor. No organomegaly. CBC showed platelet count 50,000/ml, Hb 11 gm/dl. The most probable diagnosis is:',
  opts:['Henoch-Schonlein purpura','Immune thrombocytopenic purpura','Hemophilia A','Acute leukemia','Von Willebrand disease'],
  expl:'Normal Hb, low platelets, and no organomegaly with mucocutaneous bleeding fit ITP.',
  note:'Read clear on native, no twin needed. Option b "Immune thrombocytopenic purpura" highlighted yellow and underlined -> key=1. Printed box present, transcribed verbatim. "50,000/ml" and "Hb 11 gm/dl" read directly off image, plainly legible, no crop needed.' }

{ n:17, pr:61, p:391, key:2,
  stem:'Tia is a 4-year-old girl. She is referred to the pediatric ward by her general practitioner as her mother noted that she had a yellow tinge to her eyes since developing an upper respiratory tract infection. She is well in herself and has no history of weight loss. There is no family history of any blood disorders. On examination she was pale and her spleen was enlarged 3 cm below the costal margin. You perform a full blood count, which reveals: Hb (6mg/dl) WBC (white blood cell count): 8000/ml Platelet count: 255,000/ml Blood film: small red cells MCV (mean cell volume): 60 fl (but normal: 75–87 fl) What is the most likely diagnosis?',
  opts:['Acute lymphoblastic leukemia','Glucose-6-phosphate dehydrogenase (G6PD) deficiency','Hereditary spherocytosis','Thalassemia','Thalassemia'],
  expl:'In hereditary spherocytosis the anaemia is usually mild (Hb 90–110 g/L), but the haemoglobin level may transiently fall during infections. Mild to moderate splenomegaly is common.',
  note:'⚠️ NUMERAL ESCALATION: confirmed at 300dpi crop (ep2-stage/p-0391.jpg) -- page prints "Hb (6mg/dl)" verbatim (unusual unit/value, box explanation instead cites "Hb 90-110 g/L", a unit mismatch on the page itself, not a misread on my part; staged as printed, not corrected). ⚠️ Options d and e are BOTH printed "Thalassemia" verbatim -- confirmed at 300dpi, not a transcription error; a genuine printed duplicate, staged as-is per "defective key/content recorded, never corrected." Option c "Hereditary spherocytosis" highlighted yellow and underlined -> key=2. Printed box present, transcribed verbatim. Bullet-point vitals in stem (originally red dot markers) flattened to plain text in order printed.' }

{ n:18, pr:62, p:393, key:1,
  stem:'In non-circumcised 2-year-old male patient with post-traumatic right knee swelling and past history of recurrent bluish patches over limbs and trunk. THE FIRST possibility to be considered is:',
  opts:['Sickle cell disease','Hemophilia A','Idiopathic thrombocytopenic purpura (ITP)','Henoch-Schonlein purpura','Hypersplenism'],
  expl:'Recurrent bleeding into joints and soft tissues after minor trauma, especially in a boy, suggests hemophilia A.',
  note:'Read clear on native, no twin needed. Option b "Hemophilia A" highlighted yellow and underlined -> key=1. Printed box present, transcribed verbatim.' }

{ n:19, pr:63, p:395, key:1,
  stem:'Vitamin k affects all the following factors except:',
  opts:['Factor 2','Factor 5','Factor 7','Factor 9'],
  expl:'Vitamin K is required for factors II, VII, IX, and X, but not factor V.',
  note:'Read clear on native, no twin needed. Only 4 options printed (a-d). Option b "Factor 5" highlighted yellow and underlined -> key=1. Printed box present, transcribed verbatim.' }

{ n:20, pr:64, p:397, key:2,
  stem:'Which is not a cause of acute abdomen?',
  opts:['Henoch–Schönlein purpura (HSP)','UTI','Thalassemia','Sickle cell disease'],
  expl:'Thalassemia causes chronic anemia but not acute abdomen. HSP, UTI, and sickle cell disease can all present with acute abdominal pain.',
  note:'Read clear on native, no twin needed. Only 4 options printed (a-d). Option c "Thalassemia" highlighted yellow and underlined -> key=2. Printed box present, transcribed verbatim.' }

{ n:21, pr:65, p:399, key:2,
  stem:'Which of the following is the most common cause of aplastic crisis in a patient with sickle cell disease?',
  opts:['Dehydration','Respiratory syncytial virus infection','Human parvovirus B19 infection','Repeated blood transfusion','Hemophilus influenzae septicemia'],
  expl:'Parvovirus B19 infection suppresses bone marrow, causing aplastic crisis in sickle cell patients.',
  note:'Read clear on native, no twin needed. Option c "Human parvovirus B19 infection" highlighted yellow and underlined -> key=2. Printed box present, transcribed verbatim.' }

{ n:22, pr:66, p:401, key:2,
  stem:'A 16y old boy is visiting relatives in West Africa after schooling in England. As part of his preparation to travel he has to be vaccinated against cholera & hepatitis A, and he has to take antimalarials such as primaquine. 2d after starting he notices that his urine is dark and he experiences back pain. He is also jaundiced. Which of these enzyme abnormalities is most likely to be responsible for his symptoms?',
  opts:['Pyruvate kinase deficiency','Triose phosphate isomerase deficiency','Glucose-6-phosphate dehydrogenase deficiency','Phosphoenolpyruvate deficiency','Hexokinase deficiency'],
  expl:'Antimalarials (like primaquine) trigger hemolysis in G6PD deficiency, leading to jaundice and dark urine.',
  note:'Read clear on native, no twin needed. Option c "Glucose-6-phosphate dehydrogenase deficiency" highlighted yellow and underlined -> key=2. Printed box present, transcribed verbatim.' }

{ n:23, pr:67, p:403, key:2,
  stem:'Which of the following is the most likely cause of acute onset of purpura and ecchymosis in a child?',
  opts:['Henoch–Schönlein purpura (HSP)','Acute leukemia','Immune thrombocytopenic purpura (ITP)','Hemophilia'],
  expl:'Sudden onset purpura and ecchymosis in a child after a viral illness is most likely ITP',
  note:'Read clear on native, no twin needed. Only 4 options printed (a-d). Option c "Immune thrombocytopenic purpura (ITP)" highlighted yellow and underlined -> key=2. Printed box present, transcribed verbatim (no closing period printed at end of box text -- reproduced as printed).' }

{ n:24, pr:68, p:405, key:3,
  stem:'A 7-year-old boy has abdominal pain and a rash that started several days ago. On examination, you notice a palpable purpuric rash over his calves and buttocks, with swelling of both ankles. Abdominal examination is unremarkable. What is the most likely laboratory finding?',
  opts:['Decreased platelet count','Hypochromic microcytic anemia','Low C3 complement level','Normal clotting parameters','Prolonged prothrombin time'],
  expl:'HSP is a small-vessel vasculitis, so clotting studies are normal. It presents with palpable purpura, arthritis, and abdominal pain.',
  note:'Read clear on native, no twin needed. Option d "Normal clotting parameters" highlighted yellow and underlined -> key=3. Printed box present, transcribed verbatim. LAST ENTRY of my assigned range (p.359-405). Boundary proof: rendered p.407 (one page past range, belongs to part D) -- it is q69 "Ahmed is a 4-week-old infant who presents with persistent bleeding from a circumcision wound...", an ordinary answered page continuing the same clean 1-for-1 alternation, no section banner or heading change; not staged, part D territory only confirmed by render.' }
