/* Peds endpoint PART 2, SECTION 11 "Malignant diseases" -- STAGING HALF A, n:1-12.
   Source: Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf (NEVER modified).
   Cache used: C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\0ffb5f86-a1df-4f33-a8c4-fc32a73946ba\scratchpad\ep2-index\
   native\pNNNN.jpeg (800x450) read first; hires\pNNNN.png used when native not legible enough.
   No 300dpi re-render performed unless noted per-entry (ceiling is 800x450 either way).
   OCR index at content\peds\qb-pages\ocr\ep2\ was NOT opened during this staging pass.
   Section believed 23 questions on pp.1224-1268, clean even-page run, no parity flip (per prompt/rulings file, OCR-only confirmation -- being re-verified visually here).
   Half A answered pages, in order: 1224,1226,1228,1230,1232,1234,1236,1238,1240,1242,1244,1246 -> n:1..12.
   Half B takes n:13-23, pp.1248-1268 -- not touched here.
   Question-number walk (pr = printed number seen on page; filled in as each page is read):
     n:1  p:1224  pr:1
     n:2  p:1226  pr:2
     n:3  p:1228  pr:3
     n:4  p:1230  pr:4
     n:5  p:1232  pr:5
     n:6  p:1234  pr:6
     n:7  p:1236  pr:7
     n:8  p:1238  pr:8
     n:9  p:1240  pr:9
     n:10 p:1242  pr:10
     n:11 p:1244  pr:11
     n:12 p:1246  pr:12
   Half A ends here (n:1-12). Boundary check: p1248 peeked (read-only, not staged, belongs to Half B) --
   confirms pr:13, clean answered page, same format, no parity flip, no gap. Continuity into Half B is clean.
   All 12 answered pages in this half printed a genuine question with a visible highlighted key and a
   box on the same page -- none was a teaching-notes false positive, none needed a next-page box check
   (every page here already carried its own box). Section total (23) not re-confirmed beyond this half;
   Half B covers n:13-23.
*/

{ n:1, pr:1, p:1224, key:2,
  stem:'Concerning the epidemiology of childhood cancer, which of the following types is most common in the UK?',
  opts:['Bone tumour','Brain tumour','Leukaemia','Neuroblastoma','Wilms tumour (nephroblastoma)'],
  expl:'Leukaemia is the most common childhood cancer, followed by brain tumours and lymphomas. Bone and renal tumours are less frequent.',
  note:'native p1224.jpeg fully legible, no crop needed. Highlighted option: "C. Leukaemia" (bold, yellow highlight, underlined) -> key index 2. Box printed on same page. No figure.' }

{ n:2, pr:2, p:1226, key:3,
  stem:'Polly is a 2-year-old girl receiving chemotherapy for acute lymphoblastic leukaemia. She is known to be neutropenic and has developed a fever over 38.5°C. What is the most appropriate course of action?',
  opts:['Be admitted to hospital for observation','Be started immediately on oral antibiotics','Have her blood count and inflammatory markers (e.g. CRP) measured','Have blood cultures taken and be started on intravenous antibiotics','See her general practitioner for further assessment'],
  expl:'Fever in a neutropenic child is a medical emergency because of the high risk of sepsis. Immediate IV antibiotics and blood cultures are essential.',
  note:'native p1226.jpeg fully legible, no crop needed. Highlighted option: "D. Have blood cultures taken and be started on intravenous antibiotics" (bold, yellow, underlined) -> key index 3. Temperature 38.5°C read directly off image. Box printed on same page. No figure.' }

{ n:3, pr:3, p:1228, key:4,
  stem:'Mohammed is a 3-year-old boy with weight loss, lethargy, and abdominal pain. On examination, he has an extensive abdominal mass. Which of the following investigations would be most useful in making the diagnosis?',
  opts:['Plasma ammonia','Plasma LDH (lactate dehydrogenase)','Serum α-fetoprotein','Serum β-hCG','Urinary catecholamines'],
  expl:'Neuroblastoma produces catecholamines, so raised urinary catecholamine levels confirm the diagnosis. Other markers are used for different tumours.',
  note:'native p1228.jpeg fully legible, no crop needed. Highlighted option: "E. Urinary catecholamines" (bold, yellow, underlined) -> key index 4. Box printed on same page. No figure.' }

{ n:4, pr:4, p:1230, key:0,
  stem:'Josh is a 2-year-old boy with weight loss, lethargy, and splenomegaly. You suspect leukaemia and perform a full blood count. What are the most likely haematological findings?',
  opts:['Low haemoglobin and low platelets','High haemoglobin and low platelets','Normal haemoglobin and normal platelets','High haemoglobin and raised platelets','Low haemoglobin and raised platelets'],
  expl:'In leukaemia, bone marrow is infiltrated by blasts, reducing red cell and platelet production. This causes anaemia and thrombocytopenia.',
  note:'native p1230.jpeg fully legible, no crop needed. Highlighted option: "A. Low haemoglobin and low platelets" (bold, yellow, underlined) -> key index 0. Box printed on same page. No figure.' }

{ n:5, pr:5, p:1232, key:3,
  stem:'Amy, a 2-year-old girl, has developmental regression and unsteadiness on her feet. CT imaging reveals a posterior fossa mass. What is the most likely underlying cause?',
  opts:['Cerebral abscess','Cortical astrocytoma','Craniopharyngioma','Medulloblastoma','Viral encephalitis'],
  expl:'Medulloblastoma is the most common malignant brain tumour in children, usually located in the posterior fossa. It causes unsteadiness and regression.',
  note:'native p1232.jpeg fully legible, no crop needed. Highlighted option: "D. Medulloblastoma" (bold, yellow, underlined) -> key index 3. Box printed on same page. No figure (CT mentioned in stem but not shown as an image on this slide).' }

{ n:6, pr:6, p:1234, key:1,
  stem:'Mark, a 3-year-old boy on chemotherapy, is well but has been exposed to a sibling with a rash. What advice should be given to his parents?',
  opts:['See the GP to check he is all right','He needs urgent treatment to prevent becoming unwell','Monitor him and attend the ward if he develops a fever','Monitor him and attend the ward if he develops the rash','Reassure – this is a common illness in children'],
  expl:'His sister has varicella zoster (chicken pox) infection, and this can be life-threatening in immunocompromised patients. He needs treatment with varicella zoster immunoglobulin unless he is immune. The incubation period for varicella is 14–21 days, so one cannot be reassured by the fact that he is currently well.',
  note:'native p1234.jpeg fully legible, no crop needed. Highlighted option: "B. He needs urgent treatment to prevent becoming unwell" (bold, yellow, underlined) -> key index 1. Box printed on same page. No figure. Per chapter-rulings context this Q is ruled to the infection chapter rather than oncology; transcribed here as printed, no change made by staging.' }

{ n:7, pr:7, p:1236, key:2,
  stem:'Essa, a 2-year-old boy, presents with a white reflex in one eye (leukocoria). What is the likely cause?',
  opts:['Congenital cataract','Glaucoma','Retinoblastoma','Allergic conjunctivitis','VI nerve palsy'],
  expl:'A white reflex in a child’s eye is a classic sign of retinoblastoma. Early diagnosis is vital to preserve vision and life.',
  note:'native p1236.jpeg fully legible, no crop needed. Highlighted option: "C. Retinoblastoma" (bold, yellow, underlined) -> key index 2. Box printed on same page. No figure. Per chapter-rulings context, retinoblastoma is not taught elsewhere in the course material -- flagged there, not a staging decision.' }

{ n:8, pr:8, p:1238, key:3,
  stem:'Britney, aged 5 years, presents with progressive headaches and a normal red reflex. What is the most likely diagnosis?',
  opts:['Craniopharyngioma','Concomitant squint','Optic glioma','Posterior fossa tumour','Retinoblastoma'],
  expl:'Brain tumours, especially in the posterior fossa, cause raised intracranial pressure leading to headaches and vomiting. Normal red reflex excludes eye disease.',
  note:'native p1238.jpeg fully legible, no crop needed. Highlighted option: "D. Posterior fossa tumour" (bold, yellow, underlined) -> key index 3. Box printed on same page. No figure.' }

{ n:9, pr:9, p:1240, key:3,
  stem:'Natalia, a 4-year-old girl, has recurrent tonsillitis, pallor, bruising, and hepatosplenomegaly. What is the most likely diagnosis?',
  opts:['Neuroblastoma','Brain tumour','Wilms tumour','Acute lymphoblastic leukaemia','Hodgkin disease'],
  expl:'These features suggest bone marrow failure with organ infiltration, typical of ALL. Recurrent infections are due to neutropenia.',
  note:'native p1240.jpeg fully legible, no crop needed. Highlighted option: "D. Acute lymphoblastic leukaemia" (bold, yellow, underlined) -> key index 3. Box printed on same page. No figure.' }

{ n:10, pr:10, p:1242, key:2,
  stem:'Angel, a 2-year-old boy, has a left-sided abdominal mass that does not cross the midline. What is the most likely diagnosis?',
  opts:['Neuroblastoma','Brain tumour','Wilms tumour','Acute lymphoblastic leukaemia','Hodgkin disease'],
  expl:'Wilms tumour (nephroblastoma) is a renal tumour that stays confined to one side and does not usually cross the midline. Neuroblastomas often cross the midline.',
  note:'native p1242.jpeg fully legible, no crop needed. Highlighted option: "C. Wilms tumour" (bold, yellow, underlined) -> key index 2. Box printed on same page. No figure. SHARED OPTION MENU with n:9 (p.1240) -- identical 5-option list in the same order (Neuroblastoma / Brain tumour / Wilms tumour / Acute lymphoblastic leukaemia / Hodgkin disease). Discriminating clinical token: n:9 = recurrent tonsillitis, pallor, bruising, hepatosplenomegaly -> ALL (key D); n:10 = left-sided abdominal mass not crossing midline -> Wilms tumour (key C). Recorded, not folded.' }

{ n:11, pr:11, p:1244, key:0,
  stem:'Kay, a 3-year-old girl, presents with weight loss, pallor, and a large central abdominal mass. What is the most likely diagnosis?',
  opts:['Neuroblastoma','Brain tumour','Wilms tumour','Acute lymphoblastic leukaemia','Hodgkin disease'],
  expl:'Neuroblastoma usually arises from the adrenal or sympathetic chain and presents as a large irregular central abdominal mass. It is associated with systemic features like weight loss.',
  note:'native p1244.jpeg fully legible, no crop needed. Highlighted option: "A. Neuroblastoma" (bold, yellow, underlined) -> key index 0. Box printed on same page. No figure. THIRD question sharing the same 5-option menu with n:9 (p.1240) and n:10 (p.1242), identical order each time. Discriminating clinical token here: large CENTRAL abdominal mass with weight loss/pallor -> Neuroblastoma (key A), distinguishing it from n:10\'s left-sided mass not crossing midline (Wilms) and n:9\'s recurrent tonsillitis/bruising/hepatosplenomegaly (ALL). Recorded, not folded.' }

{ n:12, pr:12, p:1246, key:1,
  stem:'Douglas, a 7-year-old boy, presents with progressive headaches, morning vomiting, and double vision. What is the most likely diagnosis?',
  opts:['Neuroblastoma','Brain tumour','Wilms tumour','Acute lymphoblastic leukaemia','Hodgkin disease'],
  expl:'Classic signs of raised intracranial pressure in a child suggest a brain tumour. Morning vomiting and diplopia are key features.',
  note:'native p1246.jpeg fully legible, no crop needed. Highlighted option: "B. Brain tumour" (bold, yellow, underlined) -> key index 1. Box printed on same page. No figure. FOURTH question sharing the same 5-option menu with n:9, n:10, n:11 (identical order each time). Discriminating clinical token: progressive headaches, morning vomiting, double vision (raised ICP triad) -> Brain tumour (key B). Recorded, not folded. This is the last entry of Half A (n:1-12).' }

