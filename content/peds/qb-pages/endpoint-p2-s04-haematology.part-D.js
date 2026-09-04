/* endpoint-p2-s04-haematology.part-D.js
   Peds ENDPOINT PART 2, section 4 "Hematological Disorders" (PDF pp.245-451), PART D of 4.
   Source: Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf -- NEVER modified.
   Images: <SCRATCH>\ep2-index\native\pNNNN.jpeg (800x450, primary) and
           <SCRATCH>\ep2-index\hires\pNNNN.png (upscale, no extra information -- brief confirmed).
   OCR NOT used to transcribe anything -- content\peds\qb-pages\ocr\ep2\ was not opened.

   Range assigned: PDF pp.407-450 (23 answered pages per the index):
   407, 409, 411, 413, 415, 417, 419, 420, 422, 424, 426, 428, 430, 432, 434, 436, 438, 440,
   442, 444, 446, 448, 450.

   This is a BARE sequence of { ... } object literals separated by one blank line. No array
   wrapper, no commas between entries -- merge-parts-ep2.js restores both. node --check on this
   file WILL fail and that failure is meaningless; validate with
   node tools/bank-harness/check-part-ep.js content/peds/qb-pages/endpoint-p2-s04-haematology.part-D.js

   n starts at 1 in this part (not offset -- merge validates position, does not renumber).

   PAGE-KIND WALK (recorded as read, page by page):
   406 q (twin of 407) -- to be filled in as I go
*/

{ n:1, pr:69, p:407, key:2,
  stem:'Ahmed is a 4-week-old infant who presents with persistent bleeding from a circumcision wound. Laboratory results show normal platelet count, prolonged prothrombin time (PT), and normal activated partial thromboplastin time (aPTT). What is the most appropriate management?',
  opts:['No action needed','Recombinant factor VIII','Vitamin K','Platelet transfusion'],
  expl:'Prolonged PT with normal platelets and aPTT in a newborn suggests vitamin K deficiency bleeding. Vitamin K injection corrects it.',
  note:'Read native p0407.jpeg whole, clear. Option c "Vitamin K" highlighted yellow + bold + underlined, key=2. Twin at p0406 not yet cross-checked (will check on close-out pass if time permits) -- text on 407 fully legible at native res, no crop needed.' }

{ n:2, pr:70, p:409, key:1,
  stem:'George is a 3-month-old boy who presents with a swollen leg after immunization. Lab results show normal hemoglobin, WBC, and platelets, normal PT, but prolonged aPTT. He has two brothers with a bleeding disorder. What is the most appropriate management?',
  opts:['No action','Recombinant factor VIII','Vitamin K','Platelet transfusion'],
  expl:'Prolonged aPTT with family history of bleeding indicates hemophilia A. Treatment is with factor VIII replacement.',
  note:'Read native p0409.jpeg whole, clear, no crop needed. Option b "Recombinant factor VIII" highlighted yellow + bold + underlined, key=1.' }

{ n:3, pr:71, p:411, key:1,
  stem:'Hyperbilirubinemia in G6PD deficiency is mainly due to?',
  opts:['Reduced conjugation','Hemolysis','Both','Neither'],
  expl:'In G6PD deficiency, hyperbilirubinemia is due to hemolysis of red cells after oxidative stress.',
  note:'Read native p0411.jpeg whole, clear, no crop needed. Option b "Hemolysis" highlighted yellow + bold + underlined, key=1.' }

{ n:4, pr:72, p:413, key:0,
  stem:'All of the following are true medical causes of abdominal pain in children, EXCEPT?',
  opts:['Thalassemia','Sickle cell anemia','Henoch–Schönlein purpura','Porphyria'],
  expl:'Thalassemia causes chronic anemia but not abdominal pain. Sickle cell anemia, HSP, and porphyria are well-known causes of abdominal pain in children.',
  note:'Read native p0413.jpeg whole, clear, no crop needed. Option a "Thalassemia" highlighted yellow + bold + underlined, key=0 (this is an EXCEPT stem so the highlighted option is the non-cause).' }

{ n:5, pr:73, p:415, key:3,
  stem:'An 18-month-old boy whose main diet is cow milk presents with pallor. Stool is negative for blood. Which lab test will most probably reveal the diagnosis?',
  opts:['Chest Xray','Examination of stool for ova and parasites','Blood reticulocyte count','Serum ferritin','Bone marrow aspirate'],
  expl:'Cow’s milk diet predisposes to iron deficiency anemia. Serum ferritin is the best test for confirming low iron stores.',
  note:'Read native p0415.jpeg whole, clear, no crop needed. 5 options a-e. Option d "Serum ferritin" highlighted yellow + bold + underlined, key=3.' }

{ n:6, pr:74, p:417, key:4,
  stem:'Prolongation of Partial thromboplastin time (PTT) with normal Prothrombin time (PT) may be due to:',
  opts:['Hemorrhagic disease of the newborn','DIC','Chronic TP','Henoch-Schonlein purpura','Hemophilia A'],
  expl:'Hemophilia A affects factor VIII, which prolongs APTT but leaves PT normal. Other conditions usually alter both PT and PTT.',
  note:'Read native p0417.jpeg whole, clear, no crop needed. 5 options a-e. Option e "Hemophilia A" highlighted yellow + bold + underlined, key=4. Option c printed exactly "Chronic TP" (no expansion) -- transcribed verbatim as printed, not expanded to ITP.' }

{ n:7, pr:75, p:419, key:1,
  stem:'Splenectomy has NO beneficial therapeutic effect in:',
  opts:['Hereditary spherocytosis','Leukemia','Refractory chronic idiopathic thrombocytopenic purpura','B-thalassemia major'],
  expl:'Splenectomy helps in hereditary spherocytosis, ITP, and sometimes thalassemia, but not in leukemia where the problem is bone marrow, not spleen.',
  note:'⚠️ ALTERNATION BREAK, PART OF PROMPT-FLAGGED PAIR: p0419 and p0420 are BACK-TO-BACK answered pages, both printing the identical stem, identical 4 options a-d, and the identical option b "Leukemia" highlighted yellow+bold+underlined (key=1) -- pixel-for-pixel the same slide content. The ONLY difference is p0420 has NO explanation box at all (blank space where the box sits on p0419); p0420 is not a box-only page (it still carries the full stem+options), so this does NOT match the box:<page> overflow shape described in the brief. This reads as an exact duplicate reprint of the same slide, one with its box and one without -- not a second question, not an overflow box. Staged ONCE here from p0419 (fuller printing, carries the box). p0420 is deliberately NOT given its own entry. Flagging this pairing/reading in the report per instructions rather than deciding it further.' }

{ n:8, pr:76, p:422, key:2,
  stem:'What is the average lifespan of an erythrocyte once it has entered the bloodstream?',
  opts:['1 day','10 days','120 days','200 days','360 days'],
  expl:'Normal red blood cells survive around 120 days before being cleared by the spleen.',
  note:'Read native p0422.jpeg whole, clear, no crop needed -- numeral "120 days" legible plainly at native res. 5 options a-e. Option c "120 days" highlighted yellow + bold + underlined, key=2. Alternation resumed to normal q/a pattern here (p421 is the unanswered twin, not staged).' }
