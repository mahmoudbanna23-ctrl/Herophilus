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
   ...
   RESUMED 2026-09-04 from n:8/p:422 (predecessor's last complete entry). Continued n:9..22,
   pp.424-450, all 13 remaining answered pages in the assigned range. Predecessor's p.419/420
   duplicate-reprint handling (staged once from p.419 as n:7) NOT revisited, per instructions.
   422 a (n8) / 424 a (n9) / 426 a (n10) / 428 a (n11, box overflow-of-scale exponent crop) /
   430 a (n12) / 432 a (n13) / 434 a (n14) / 436 a (n15) / 438 a (n16) / 440 a (n17) /
   442 a (n18, ⚠️ FLAGGED possible reprint of p.375 in part C -- staged normally, see note) /
   444 a (n19, 300dpi crop for dense numeral block) / 446 a (n20) /
   448 a (n21, ⚠️ FLAGGED possible reprint of p.383 in part C -- staged normally, see note) /
   450 a (n22, LAST ANSWERED PAGE OF SECTION 4) /
   451 = section-closing furniture, a full-page Arabic supplication ("Astaghfirullah..."),
         no stem, no options, no box, no connection to p.450's question -- same shape as
         section 3's closing page (p.244). Opened per §3a box-test / boundary-proof requirement
         before dismissing it. NOT a question, NOT an overflow box. Section 4 range CLOSED at n:22/p:450.

   PART D RANGE IS NOW CLOSED: pp.407-450, 22 entries (n:1-22; p.419+420 folded to one entry
   at n:7 per predecessor's finding), section 4 boundary confirmed at p.451.
*/

{ n:69, pr:69, p:407, key:2,
  stem:'Ahmed is a 4-week-old infant who presents with persistent bleeding from a circumcision wound. Laboratory results show normal platelet count, prolonged prothrombin time (PT), and normal activated partial thromboplastin time (aPTT). What is the most appropriate management?',
  opts:['No action needed','Recombinant factor VIII','Vitamin K','Platelet transfusion'],
  expl:'Prolonged PT with normal platelets and aPTT in a newborn suggests vitamin K deficiency bleeding. Vitamin K injection corrects it.',
  note:'Read native p0407.jpeg whole, clear. Option c "Vitamin K" highlighted yellow + bold + underlined, key=2. Twin at p0406 not yet cross-checked (will check on close-out pass if time permits) -- text on 407 fully legible at native res, no crop needed.' }

{ n:70, pr:70, p:409, key:1,
  stem:'George is a 3-month-old boy who presents with a swollen leg after immunization. Lab results show normal hemoglobin, WBC, and platelets, normal PT, but prolonged aPTT. He has two brothers with a bleeding disorder. What is the most appropriate management?',
  opts:['No action','Recombinant factor VIII','Vitamin K','Platelet transfusion'],
  expl:'Prolonged aPTT with family history of bleeding indicates hemophilia A. Treatment is with factor VIII replacement.',
  note:'Read native p0409.jpeg whole, clear, no crop needed. Option b "Recombinant factor VIII" highlighted yellow + bold + underlined, key=1.' }

{ n:71, pr:71, p:411, key:1,
  stem:'Hyperbilirubinemia in G6PD deficiency is mainly due to?',
  opts:['Reduced conjugation','Hemolysis','Both','Neither'],
  expl:'In G6PD deficiency, hyperbilirubinemia is due to hemolysis of red cells after oxidative stress.',
  note:'Read native p0411.jpeg whole, clear, no crop needed. Option b "Hemolysis" highlighted yellow + bold + underlined, key=1.' }

{ n:72, pr:72, p:413, key:0,
  stem:'All of the following are true medical causes of abdominal pain in children, EXCEPT?',
  opts:['Thalassemia','Sickle cell anemia','Henoch–Schönlein purpura','Porphyria'],
  expl:'Thalassemia causes chronic anemia but not abdominal pain. Sickle cell anemia, HSP, and porphyria are well-known causes of abdominal pain in children.',
  note:'Read native p0413.jpeg whole, clear, no crop needed. Option a "Thalassemia" highlighted yellow + bold + underlined, key=0 (this is an EXCEPT stem so the highlighted option is the non-cause).' }

{ n:73, pr:73, p:415, key:3,
  stem:'An 18-month-old boy whose main diet is cow milk presents with pallor. Stool is negative for blood. Which lab test will most probably reveal the diagnosis?',
  opts:['Chest Xray','Examination of stool for ova and parasites','Blood reticulocyte count','Serum ferritin','Bone marrow aspirate'],
  expl:'Cow’s milk diet predisposes to iron deficiency anemia. Serum ferritin is the best test for confirming low iron stores.',
  note:'Read native p0415.jpeg whole, clear, no crop needed. 5 options a-e. Option d "Serum ferritin" highlighted yellow + bold + underlined, key=3.' }

{ n:74, pr:74, p:417, key:4,
  stem:'Prolongation of Partial thromboplastin time (PTT) with normal Prothrombin time (PT) may be due to:',
  opts:['Hemorrhagic disease of the newborn','DIC','Chronic TP','Henoch-Schonlein purpura','Hemophilia A'],
  expl:'Hemophilia A affects factor VIII, which prolongs APTT but leaves PT normal. Other conditions usually alter both PT and PTT.',
  note:'Read native p0417.jpeg whole, clear, no crop needed. 5 options a-e. Option e "Hemophilia A" highlighted yellow + bold + underlined, key=4. Option c printed exactly "Chronic TP" (no expansion) -- transcribed verbatim as printed, not expanded to ITP.' }

{ n:75, pr:75, p:419, key:1,
  stem:'Splenectomy has NO beneficial therapeutic effect in:',
  opts:['Hereditary spherocytosis','Leukemia','Refractory chronic idiopathic thrombocytopenic purpura','B-thalassemia major'],
  expl:'Splenectomy helps in hereditary spherocytosis, ITP, and sometimes thalassemia, but not in leukemia where the problem is bone marrow, not spleen.',
  note:'⚠️ ALTERNATION BREAK, PART OF PROMPT-FLAGGED PAIR: p0419 and p0420 are BACK-TO-BACK answered pages, both printing the identical stem, identical 4 options a-d, and the identical option b "Leukemia" highlighted yellow+bold+underlined (key=1) -- pixel-for-pixel the same slide content. The ONLY difference is p0420 has NO explanation box at all (blank space where the box sits on p0419); p0420 is not a box-only page (it still carries the full stem+options), so this does NOT match the box:<page> overflow shape described in the brief. This reads as an exact duplicate reprint of the same slide, one with its box and one without -- not a second question, not an overflow box. Staged ONCE here from p0419 (fuller printing, carries the box). p0420 is deliberately NOT given its own entry. Flagging this pairing/reading in the report per instructions rather than deciding it further.' }

{ n:76, pr:76, p:422, key:2,
  stem:'What is the average lifespan of an erythrocyte once it has entered the bloodstream?',
  opts:['1 day','10 days','120 days','200 days','360 days'],
  expl:'Normal red blood cells survive around 120 days before being cleared by the spleen.',
  note:'Read native p0422.jpeg whole, clear, no crop needed -- numeral "120 days" legible plainly at native res. 5 options a-e. Option c "120 days" highlighted yellow + bold + underlined, key=2. Alternation resumed to normal q/a pattern here (p421 is the unanswered twin, not staged).' }

{ n:77, pr:77, p:424, key:1,
  stem:'In case of anemia of chronic disease, which is the most appropriate?',
  opts:['Iron supplements are contraindicated','The anemia is usually normocytic','The hemoglobin is usually <8 g/dL','The serum iron is usually increased','The total iron binding capacity is raised'],
  expl:'In chronic disease, anemia is typically mild and normocytic with low serum iron and low TIBC, but iron supplements don’t help.',
  note:'Read native p0424.jpeg whole, clear, no crop needed. 5 options a-e. Option b "The anemia is usually normocytic" highlighted yellow + bold + underlined, key=1. Box present, printed verbatim.' }

{ n:78, pr:78, p:426, key:0,
  stem:'You are asked to review a 2d old full term baby boy who started bleeding excessively following circumcision. You request a full CBC & clotting. The CBC is normal & the APTT is prolonged at 95 seconds. PT is normal. What is the most likely diagnosis?',
  opts:['Hemophilia','ITP','Severe von Willebrand\'s disease','Vitamin K deficiency'],
  expl:'Hemophilia (A or B) presents with prolonged APTT and normal PT, often first detected after procedures like circumcision.',
  note:'Read native p0426.jpeg whole, clear, no crop needed. 4 options a-d. Option a "Hemophilia" highlighted yellow + bold + underlined, key=0. Numeral "95 seconds" legible plainly at native res.' }

{ n:79, pr:79, p:428, key:2,
  stem:'A 4y old who has been on Rx for epilepsy with Carbamazepine without incident for some considerable time was admitted with a hx of multiple bruising. She had a seizure the previous day, had knocked her head during the attack, and now has a large bruise over the forehead in addition to several over her arms, legs & back. She had recently recovered from a flu like illness & has had a course of Cephalexin. She was on the \'at risk\' register at neglect & a violent father. Clinically, she appeared well & not anemic, with small shotty lymph nodes, otherwise active. Multiple bruises & fine petechiae noted over the trunk and limbs. Hb 11.3 g/dl, WBC 8.0 x 10^9/L, normal WCC, PLT 10x10^9/L. Increased platelet-associated IgG. Bone marrow showed increase in megakaryocytes. The most likely cause of her bruising is?',
  opts:['Glandular fever','Acute lymphoblastic leukemia (ALL)','Idiopathic thrombocytopenic purpura','Carbamazepine-induced bone marrow suppression','Physical abuse'],
  expl:'ITP presents with isolated thrombocytopenia, increased marrow megakaryocytes, and recent viral illness.',
  note:'Read native p0428.jpeg, exponent notation on WBC/PLT counts escalated to 300 dpi crop (ep2-stage/p-0428.jpg) to confirm -- page prints the literal caret "10^9/L" (not a rendered/flattened superscript, not a true superscript either), confirmed at 300 dpi and transcribed exactly as printed for both WBC and PLT counts, per brief note that a flat exponent can be the books own printing. 5 options a-e. Option c "Idiopathic thrombocytopenic purpura" highlighted yellow + bold + underlined, key=2. Stem also prints "normal WCC" immediately after the WBC count -- transcribed verbatim as printed, not corrected.' }

{ n:80, pr:80, p:430, key:3,
  stem:'Which one of the following is a feature of hereditary spherocytosis?',
  opts:['Conjugated hyperbilirubinemia','Hemolytic crises following fava bean ingestion','Short stature','Splenomegaly','X-linked inheritance'],
  expl:'Hereditary spherocytosis typically causes hemolysis, jaundice, gallstones, and splenomegaly.',
  note:'Read native p0430.jpeg whole, clear, no crop needed. 5 options a-e. Option d "Splenomegaly" highlighted yellow + bold + underlined, key=3.' }

{ n:81, pr:81, p:432, key:2,
  stem:'The diagnostic test of hereditary spherocytosis is',
  opts:['Bone marrow examination','Hemoglobin electrophoresis','Osmotic fragility','Coombs test','RBC enzyme Assay'],
  expl:'RBCs in hereditary spherocytosis lyse easily in hypotonic saline, which is the diagnostic hallmark.',
  note:'Read native p0432.jpeg whole, clear, no crop needed. 5 options a-e. Option c "Osmotic fragility" highlighted yellow + bold + underlined, key=2.' }

{ n:82, pr:82, p:434, key:3,
  stem:'A 3-year-old child looks pale. The diagnosis of iron deficiency anemia was made. The found hematologic findings should be (N: MCV 70-100):',
  opts:['Hemoglobin (10); MCV (70); reticulocyte (10%)','Hemoglobin (15); MCV (78); reticulocyte (2%)','Hemoglobin (8), MCV (45), reticulocyte (9%)','Hemoglobin (7.5), MCV (65), reticulocyte (1.0%)','Hemoglobin (7), MCV (80), reticulocyte (16%)'],
  expl:'IDA shows low Hb, low MCV (microcytic anemia), and low reticulocyte count due to lack of iron for RBC production.',
  note:'Read native p0434.jpeg whole, all numerals plainly legible at native res, no crop needed. 5 options a-e. Option d "Hemoglobin (7.5), MCV (65), reticulocyte (1.0%)" highlighted yellow + bold + underlined, key=3.' }

{ n:83, pr:83, p:436, key:1,
  stem:'Which of the following is TRUE about thalassemia?',
  opts:['Increased serum ferritin','Presence of target cells in blood film','Macrocytosis is a typical finding','It is not inherited'],
  expl:'Thalassemia shows hypochromia, microcytosis, and target cells. It is inherited and usually associated with normal or increased ferritin.',
  note:'Read native p0436.jpeg whole, clear, no crop needed. 4 options a-d. Option b "Presence of target cells in blood film" highlighted yellow + bold + underlined, key=1.' }

{ n:84, pr:84, p:438, key:3,
  stem:'A 4-year-old girl diagnosed as ITP, her platelet count is 30,000/dl with no active bleeding or mucous membrane purpura. The next step in her management is:',
  opts:['Steroid','IVIG','Anti-D','Observation and follow up','Splenectomy'],
  expl:'In ITP without bleeding, observation is recommended since most cases resolve spontaneously.',
  note:'Read native p0438.jpeg whole, clear, no crop needed. Unit printed plainly "30,000/dl" (dl, not the more usual /uL) -- transcribed exactly as printed, not corrected. 5 options a-e. Option d "Observation and follow up" highlighted yellow + bold + underlined, key=3.' }

{ n:85, pr:85, p:440, key:2,
  stem:'A 7-year-old boy presents acutely with petechiae on his legs, severe abdominal pain, bloody feces, hematuria and painful joint swelling. The hematology laboratory results are normal. Which one of the following is the most likely diagnosis?',
  opts:['Acute lymphocytic leukemia','Aplast syndrome','Henoch-Schönlein purpura','Juvenile rheumatoid arthritis','Typhus abdominalis'],
  expl:'HSP is a small-vessel vasculitis presenting with purpuric rash, abdominal pain, hematuria, and joint swelling.',
  note:'Read native p0440.jpeg whole, clear, no crop needed. 5 options a-e. Option c "Henoch-Schönlein purpura" highlighted yellow + bold + underlined, key=2. Option b printed exactly "Aplast syndrome" -- transcribed verbatim as printed.' }

{ n:86, pr:86, p:442, key:3,
  stem:'A 12-year-old boy fell while playing in the garden. He developed a very painful swelling of his right knee, aspiration of which revealed the presence of blood. The following laboratory parameters have been obtained: INR is normal, APTT is increased, fibrinogen is normal, antithrombin III level is normal. Bleeding time is 3.3 min (3-8 min). Which one of the following is the most likely cause?',
  opts:['Fibrinogen deficiency','Glucose-6-phosphate dehydrogenase deficiency','Prothrombin deficiency','Hemophilia','Factor VII deficiency'],
  expl:'Hemophilia presents with bleeding into joints (hemarthrosis), prolonged APTT, and normal PT.',
  note:'⚠️ FLAGGED AS POSSIBLE REPRINT OF p.375 (part C range, not opened, per instructions). For adjudication: printed number 86; stem opens exactly "A 12-year-old boy fell while playing in the garden. He developed a very painful swelling of his right knee, aspiration of which revealed the presence of blood."; 5 options a-e (Fibrinogen deficiency / G6PD deficiency / Prothrombin deficiency / Hemophilia / Factor VII deficiency); option d "Hemophilia" highlighted yellow + bold + underlined, key=3; a bordered explanation box IS present, text: "Hemophilia presents with bleeding into joints (hemarthrosis), prolonged APTT, and normal PT." Read native p0442.jpeg whole, clear, no crop needed.' }

{ n:87, pr:87, p:444, key:2,
  stem:'A 2y old boy is admitted to hospital for an elective repair of an inguinal hernia. he has no other medical problems. His preoperative assessment reveals the following results: Hb: 8.6 g/dl, MCV: 58 fl (normal: 75-87 fl), MCHC: 22 g/dl (normal: 32-35 g/dl), WBC 11,200 /dl, platelets: 262.000/dl, HB electrophoresis: hemoglobin A (HbA) 98%; hemoglobin A2 (HbA2) 2%. What is the most likely diagnosis?',
  opts:['Thalassemia trait','Glucose-6-phosphate dehydrogenase deficiency','Iron-deficiency anemia','Normal variation for age','Sickle cell trait'],
  expl:'Microcytic hypochromic anemia with normal Hb electrophoresis indicates iron deficiency, not thalassemia trait.',
  note:'Escalated to 300 dpi crop (ep2-stage/p-0444.jpg) to confirm the dense numeral block; all values confirmed identical to native res: Hb 8.6 g/dl, MCV 58 fl, MCHC 22 g/dl, WBC 11,200 /dl, platelets 262.000/dl (dot as printed, transcribed verbatim), HbA 98%, HbA2 2%. 5 options a-e. Option c "Iron-deficiency anemia" highlighted yellow + bold + underlined, key=2. Stem also prints lowercase "he has no other medical problems" mid-sentence -- transcribed verbatim.' }

{ n:88, pr:88, p:446, key:3,
  stem:'Which of the following is NOT a cause of hydrops fetalis?',
  opts:['Rh incompatibility','ABO incompatibility','Alpha thalassemia major','Beta thalassemia major'],
  expl:'Alpha thalassemia major causes hydrops, but beta thalassemia major presents after birth, not in utero.',
  note:'Read native p0446.jpeg whole, clear, no crop needed. 4 options a-d. Option d "Beta thalassemia major" highlighted yellow + bold + underlined, key=3 (EXCEPT-style stem, highlighted option is the non-cause).' }

{ n:89, pr:89, p:448, key:0,
  stem:'A 3-year-old girl developed petechiae and bruises on her extremities while she is recovering from a cold. She is brought to medical attention after she has had hematemesis and nose bleeding. Physical examination shows a toddler with widespread petechiae and bruising who otherwise looks healthy. What is the best treatment of this patient?',
  opts:['Intravenous gammaglobulins','Rituximab','Intravenous antibiotics','Platelet transfusion','Plasma transfusion'],
  expl:'In ITP with significant bleeding, IVIG is given to quickly raise platelets.',
  note:'⚠️ FLAGGED AS POSSIBLE REPRINT OF p.383 (part C range, not opened, per instructions). For adjudication: printed number 89; stem opens exactly "A 3-year-old girl developed petechiae and bruises on her extremities while she is recovering from a cold."; 5 options a-e (Intravenous gammaglobulins / Rituximab / Intravenous antibiotics / Platelet transfusion / Plasma transfusion); option a "Intravenous gammaglobulins" highlighted yellow + bold + underlined, key=0; a bordered explanation box IS present, text: "In ITP with significant bleeding, IVIG is given to quickly raise platelets." Read native p0448.jpeg whole, clear, no crop needed.' }

{ n:90, pr:90, p:450, key:3,
  stem:'A 3-year-old child looks pale and is diagnosed with iron deficiency anemia (IDA). Which of the following hematological findings would be expected? (Normal MCV: 75–100 fL)',
  opts:['Hemoglobin 10 g/dL, MCV 70 fL, Reticulocyte count 10%','Hemoglobin 15 g/dL, MCV 78 fL, Reticulocyte count 2%','Hemoglobin 8 g/dL, MCV 45 fL, Reticulocyte count 9%','Hemoglobin 7.5 g/dL, MCV 65 fL, Reticulocyte count 1%'],
  expl:'Iron deficiency anemia is microcytic, hypochromic, and has a low reticulocyte response due to impaired iron supply.',
  note:'Read native p0450.jpeg whole, all numerals plainly legible, no crop needed. Only 4 options a-d (no option e on this page). Option d "Hemoglobin 7.5 g/dL, MCV 65 fL, Reticulocyte count 1%" highlighted yellow + bold + underlined, key=3. NOTE: this question is a close near-duplicate of n:14 (p.434, pr:82) -- same clinical framing (3-year-old, IDA, matching Hb/MCV/reticulocyte values a-d), but stem wording differs (this one explicitly names the diagnosis and drops the option-e distractor "Hemoglobin 7, MCV 80, reticulocyte 16%"), and normal MCV range printed here is 75-100 fL vs 70-100 on p.434. Recorded per brief S7 as an observation only -- not folded, not decided here.' }
