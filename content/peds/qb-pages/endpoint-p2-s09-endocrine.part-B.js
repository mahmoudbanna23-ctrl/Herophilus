/* ===========================================================================
   ENDPOINT PART 2 -- Pediatrics endpoint part2.pdf -- SECTION 9 "Diabetes &
   Endocrinology", pp.1079-1145, 26 questions. PART B. Verbatim staging
   record. Written 2026-09-05.

   ⚠️ RENUMBERED BY THE PARENT AFTER WRITING, 2026-09-05: this part's entries
   were staged as n:9..n:18 and are now n:8..n:17. The prompt that assigned
   those numbers was built on a section total of 27, which half A disproved by
   reading pp.1079-1091 page by page: p.1082 is an ordinary teaching-notes
   slide headed "Management" with no stem, no options and no highlighted key,
   mistagged `answered` by the OCR index because its yellow section header
   matches the un-flagged yellow headers on pp.1080/1081/1083/1084/1088/1089.
   The section holds 26 questions, and `pr` -- which this part transcribed off
   the page and which was never wrong -- now equals `n` throughout the section.
   Everything below this block is as this half wrote it; only the `n` values on
   the entry lines moved. The header text further down still describes the
   27-count assignment it was given, and is left standing as the record of what
   this half was told.

   Range assigned (explicit list, not p-2 arithmetic -- section has flipped
   parity three times already per the page map): answered pages 1108, 1110,
   1112, 1114, 1116, 1118, 1120, 1122, 1124, 1126 (10 pages), n:9 through
   n:18 (SECTION-GLOBAL, continues after part A -- these exact n values were
   given in the task prompt, not derived from part A's file, because
   endpoint-p2-s09-endocrine.part-A.js does NOT exist on disk at time of
   writing -- checked, not found. Part A's territory was independently
   confirmed by reading p.1106 (see BOUNDARY CHECK 1): it prints "7." with a
   boxed explanation, so part A plausibly runs n:1..8 for pr 1..7; that
   arithmetic is reported, not assumed -- part A's own file was never seen).

   Image source: native embedded JPEGs (800x450 ceiling), pulled from a
   PRIOR session's extraction cache at
   C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\0ffb5f86-a1df-4f33-a8c4-fc32a73946ba\scratchpad\ep2-index\native\pNNNN.jpeg
   (this session's own scratchpad does not hold this cache; per task
   correction, the prior-session cache was located and reused, not
   re-rendered). All ten of my pages plus both boundary pages (1106, 1128)
   and twins used were present in this cache -- no page was missing and no
   fallback render via pdftoppm.exe was needed. OCR index under
   content\peds\qb-pages\ocr\ep2\ was NOT opened for transcription.

   Geometry: one PDF page = one printed slide page (1-up export), no 2-up
   split, no duplex show-through (brief SS2).

   BOUNDARY CHECK 1 (p.1106 is NOT mine -- confirmed on image): p.1106
   prints "7. A newborn baby has recently been delivered... What should you
   tell them?", option B highlighted yellow, boxed explanation about
   ambiguous genitalia. This is part A's last question (pr 7), not part B's.
   Correctly excluded.

   BOUNDARY CHECK 2 (p.1108 is genuinely my first answered page -- confirmed
   on image): prints "8. A baby is born with a disorder of sexual
   differentiation. Congenital adrenal hyperplasia is suspected..." with
   option D highlighted yellow ("Markedly raised plasma
   17α-hydroxyprogesterone") and a boxed explanation about 21-hydroxylase
   deficiency. Printed number follows p.1106's "7" by one -- consistent with
   part A ending at pr 7. Matches the map's assertion that my range starts
   here.

   BOUNDARY CHECK 3 (one page past my range, p.1128, read to prove the far
   boundary): prints "18. A mother with pre-eclampsia delivers a baby at 37
   weeks' gestation... What is he most at risk of?", option d "Hypoglycemia"
   highlighted, boxed explanation about neonatal hypoglycaemia in
   pre-eclamptic/low-birth-weight infants. This is part C's first question
   (printed number 18) -- correctly excluded from part B, confirming p.1126
   (printed number expected 17) is genuinely my last page. See the entry for
   p.1126 below for the direct confirmation of its own printed number.

   Chapter filing is NOT this staging pass's job -- entries below carry no
   chapter field; that is drafting-pass work per
   endpoint-p2-s09-chapter-rulings.md.
   =========================================================================== */

{ n:8, pr:8, p:1108, key:3,
  stem:'A baby is born with a disorder of sexual differentiation. Congenital adrenal hyperplasia is suspected. What blood result would confirm the diagnosis?',
  opts:['Low testosterone','Markedly lowered plasma 17α-hydroxyprogesterone','Markedly raised cortisol level','Markedly raised plasma 17α-hydroxyprogesterone','Raised blood glucose'],
  expl:'21-hydroxylase deficiency, the most common form of CAH, results in a buildup of 17α-hydroxyprogesterone. This is the key diagnostic marker for confirming CAH in a newborn with genital ambiguity.',
  note:'Read from native p1108.jpeg, fully legible, option D highlighted yellow with underline. No figure. Twin not needed -- text crisp at native resolution.' }

{ n:9, pr:9, p:1110, key:3,
  stem:'Julie, aged 7 years, has diabetes mellitus. She is admitted to the hospital after vomiting three times. She has a 2-day history of being unwell with mild fever, sore throat, and decreased appetite. Her blood glucose reads ‘high’. Although she wasn’t eating, her parents maintained her usual insulin dose. On examination, her temperature is 37.5°C. She is drowsy and confused. Her pulse is 150 bpm, blood pressure 80/45 mmHg, and capillary refill time is 3 seconds. Examination reveals tonsillitis. Blood glucose is 22 mmol/L. What is the best immediate course of action?',
  opts:['Oral glucose drink','Intravenous infusion of normal saline (0.9%)','Subcutaneous insulin','Fluid resuscitation with normal saline (0.9%)','Intravenous infusion of 5% glucose'],
  expl:'Julie’s signs of shock (tachycardia, hypotension, drowsiness) indicate diabetic ketoacidosis with dehydration. Immediate fluid resuscitation with isotonic saline is the first critical step in management.',
  note:'Read from native p1110.jpeg, fully legible. All numerals confirmed on the image, not OCR: 37.5°C, 150 bpm, 80/45 mmHg, 3 second CRT, 22 mmol/L. Option D highlighted yellow. No figure. Twin not needed.' }

{ n:10, pr:10, p:1112, key:2,
  stem:'Jon is 12 years old. His brother has diabetes. He has started drinking a lot of fluids and passing a lot of urine. He checked his blood glucose on his brother’s glucometer, and it was 19 mmol/L. In the Emergency Department, he appears well with no signs of dehydration. Blood glucose is 21 mmol/L. Venous blood shows normal pH, 2 mmol/L ketones, and HbA1c is awaited. What is the best immediate management?d',
  opts:['Oral glucose drink','Intravenous infusion of normal saline (0.9%)','Subcutaneous insulin','Fluid resuscitation with normal saline (0.9%)','Intravenous infusion of 5% glucose'],
  expl:'Jon likely has new-onset type 1 diabetes without ketoacidosis, as evidenced by normal pH and only mild ketonemia. He is stable and well-appearing, so subcutaneous insulin can be safely started to manage his hyperglycemia.',
  note:'Read from native p1112.jpeg, fully legible. Numerals confirmed on image: 19 mmol/L, 21 mmol/L, 2 mmol/L ketones. Option C highlighted yellow. Stem prints a stray trailing "d" after the question mark ("management?d") -- reproduced verbatim as printed, not repaired. No figure. Twin not needed.' }

{ n:11, pr:11, p:1114, key:0,
  stem:'Harriet, a 5-year-old girl with type 1 diabetes mellitus (diagnosed 2 months ago), is on a basal-bolus insulin regimen. While playing in the garden, she suddenly becomes aggressive and pale. Her blood glucose is 3 mmol/L. What is the best immediate management?',
  opts:['Oral glucose drink','Intravenous infusion of normal saline (0.9%)','Subcutaneous insulin','Fluid resuscitation with normal saline (0.9%)','Intravenous infusion of 5% glucose'],
  expl:'A blood glucose level of 3 mmol/L indicates mild hypoglycemia, and the child is still conscious and able to swallow. The quickest and safest treatment in this scenario is an oral glucose drink.',
  note:'Read from native p1114.jpeg, fully legible. Numeral confirmed on image: 3 mmol/L. Option A highlighted yellow. No figure. Twin not needed.' }

{ n:12, pr:12, p:1116, key:1,
  stem:'Sophie, a 9-year-old girl with type 1 diabetes mellitus, develops fever with vomiting and diarrhea. After 2 days, her mother brings her to the pediatric unit. She is talking but clinically dehydrated. Vitals are stable. Blood glucose is 16 mmol/L. What is the best immediate management?',
  opts:['Oral glucose drink','Intravenous infusion of normal saline (0.9%)','Subcutaneous insulin','Fluid resuscitation with normal saline (0.9%)','Intravenous infusion of 5% glucose'],
  expl:'Sophie is dehydrated from vomiting and diarrhea and has elevated blood glucose, indicating a risk of diabetic ketoacidosis. IV normal saline is the best initial step to correct dehydration and support perfusion.',
  note:'Read from native p1116.jpeg, fully legible. Numeral confirmed on image: 16 mmol/L. Option B highlighted yellow. No figure. Twin not needed.' }

{ n:13, pr:13, p:1118, key:2,
  stem:'A newborn is noted to have coarse facies, a large fontanelle, hypotonia, and jaundice. Blood sugar levels are normal. Which investigation is most likely to reveal the diagnosis?',
  opts:['Growth hormone','Karyotype','Thyroid function tests','Blood group','Creatine kinase (CK)'],
  expl:'Coarse facies, hypotonia, prolonged jaundice, and large fontanelle are classical signs of congenital hypothyroidism. A thyroid function test will confirm the diagnosis by showing low T4 and high TSH levels.',
  note:'Read from native p1118.jpeg, fully legible, no numerals or doses on this page. Option C highlighted yellow. No figure. Twin not needed.' }

{ n:14, pr:14, p:1120, key:3,
  stem:'A 7-day-old male baby presents with 1-day history of poor feeding and vomiting. Born at term, postnatal period was normal. On arrival, he is lethargic and moderately dehydrated. Weight dropped from 3200 g to 2750 g. Blood glucose is 2.0 mmol/L. Sodium is 124 mmol/L; potassium 6.8 mmol/L. After resuscitation, what test will most likely confirm the diagnosis?',
  opts:['Abdominal ultrasound scan','ACTH level','Karyotype','17-Hydroxyprogesterone level','Chloride level'],
  expl:'This infant shows signs of salt-wasting (hyponatremia, hyperkalemia, weight loss) suggestive of congenital adrenal hyperplasia (CAH), especially 21-hydroxylase deficiency. Elevated 17-hydroxyprogesterone confirms this diagnosis.',
  note:'Read from native p1120.jpeg, then re-confirmed at a 300 dpi crop (scratchpad p1120-300-1120.jpg) because this page carries five clinically load-bearing numerals in one stem. All confirmed at 300 dpi: 3200 g, 2750 g, 2.0 mmol/L glucose, 124 mmol/L sodium, 6.8 mmol/L potassium -- none is an exponent, all read the same at both resolutions. Option D highlighted yellow. No figure. Twin not needed.' }

{ n:15, pr:15, p:1122, key:1,
  stem:'A 14-year-old boy with diabetic ketoacidosis is receiving IV insulin (0.1 units/kg/h) and 0.9% saline. After 12 hours, his blood sugar is 22 mmol/L, and urine output is good. Which serum value is most likely to be decreased?',
  opts:['Serum sodium','Serum potassium','Serum lactate','Serum chloride','Serum calcium'],
  expl:'In DKA, insulin administration shifts potassium into cells, leading to a drop in serum potassium even if initial levels were high. Therefore, ongoing monitoring and potassium replacement are essential.',
  note:'Read from native p1122.jpeg, fully legible. Numerals confirmed on image: 14-year-old, 0.1 units/kg/h insulin, 0.9% saline, 12 hours, 22 mmol/L. Option B highlighted yellow. No figure. Twin not needed.' }

{ n:16, pr:16, p:1124, key:4,
  stem:'On routine newborn exam, a baby is noted to have bilaterally undescended testes. Genitalia appears male. What is the most important initial investigation?',
  opts:['Karyotype with FISH for SRY','Abdominal ultrasound scan','Abdominal CT scan','17-Hydroxyprogesterone levels','Urea and electrolytes (U&Es)'],
  expl:'In a newborn with bilateral undescended testes, the most urgent concern is salt-wasting congenital adrenal hyperplasia (CAH), which can cause life-threatening electrolyte imbalances. Therefore, urea and electrolytes (U&Es) should be checked immediately. Further tests like karyotype, ultrasound, and 17-hydroxyprogesterone are done after stabilization to confirm the diagnosis and assess anatomy.',
  note:'Read from native p1124.jpeg, fully legible, no numerals. Option E highlighted yellow. Explanation box prints several phrases in bold; content transcribed as plain text (no markdown carried into expl). No figure. Twin not needed.' }

{ n:17, pr:17, p:1126, key:1,
  stem:'Salma, a 2-week-old infant, presents with persistent vomiting. There is no history of diarrhea or fever. She has become lethargic and refuses to feed. On examination, she has virilized external genitalia, tachycardia (heart rate of 160 beats/min), and a capillary refill time of 3 seconds. A blood sample is sent for testing. What is the expected result?',
  opts:['High blood glucose','Low blood sodium and high potassium','High serum cortisol','High blood sodium','High blood aldosterone'],
  expl:'This presentation is typical of salt-wasting CAH due to 21-hydroxylase deficiency. Electrolyte disturbances include hyponatremia and hyperkalemia, along with signs of dehydration and virilization in females.',
  note:'Read from native p1126.jpeg, fully legible. Numerals confirmed on image: 2-week-old, heart rate 160 beats/min, CRT 3 seconds. Option B highlighted yellow. No figure. Twin not needed. This is my LAST assigned page -- printed number 17 confirmed here, one less than p.1128s printed 18 (part Cs first page, read as the one-past boundary check) -- boundary consistent.' }
