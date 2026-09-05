/* ===========================================================================
   ENDPOINT - Pediatrics endpoint part2.pdf - SECTION 9: "Diabetes & Endocrinology"
   Verbatim staging record. PDF pages 1079-1145; PDF page = printed page, offset zero.
   Merged from endpoint-p2-s09-endocrine.part-A.js + endpoint-p2-s09-endocrine.part-B.js + endpoint-p2-s09-endocrine.part-C.js by merge-parts-ep2.js.
   
   Every question is printed TWICE: an unanswered page, then the ANSWERED page with the key
   highlighted in yellow and (usually) a bordered explanation box. Only answered pages are
   staged. `n` is the true sequential index, `pr` what the page prints, `p` the PDF page,
   `key` a ZERO-BASED INDEX into `opts` (never a letter), matching the app field `answer`,
   `expl` the printed box verbatim or "".
   =========================================================================== */
var PEDEP2_S09_STAGED = [

/* ===========================================================================
   ENDPOINT PART 2 -- Pediatrics endpoint part2.pdf -- SECTION 9 "Diabetes &
   Endocrinology", PART A. Verbatim staging record. Written 2026-09-05.
   Assigned answered pages per prompt: 1082, 1092, 1094, 1097, 1100, 1102,
   1104, 1106 (n:1..n:8). ⚠️ MEASURED FINDING: p.1082 is NOT a question page
   -- see "CRITICAL FINDING" block below. This part therefore stages 7 real
   entries (n:1..n:7), not 8; see that block for the escalation.

   Source is a 1-up exported slide deck: one PDF page = one printed slide
   page, no 2-up split, no duplex show-through (brief SS2). Native embedded
   JPEGs (800x450 ceiling) were pulled from a PRIOR session's extraction
   cache under
   ...\0ffb5f86-a1df-4f33-a8c4-fc32a73946ba\scratchpad\ep2-index\native\
   (not this session's own scratchpad -- the cache predates this task and
   was located and reused rather than re-rendered, per the task prompt's
   correction to brief SS2 "images already extracted, do not re-run the
   extractor"). No 300 dpi crop was needed anywhere in this part -- every
   numeral, unit and highlighted key was legible on the native 800x450
   image. OCR index under content\peds\qb-pages\ocr\ep2\ was NOT opened for
   transcription, per brief SS4.

   ⚠️⚠️ CRITICAL FINDING -- p.1082 IS NOT A QUESTION, THE PAGE-MAP'S "run 1"
   ENTRY IS A FALSE POSITIVE, AND NEITHER NAMED CANDIDATE IS TWINLESS:
   Read directly off the image, p.1082 is an ordinary teaching-notes slide
   headed "Management" (multidisciplinary team, education, insulin therapy
   bullets) -- no stem, no options, no highlighted key, nothing resembling a
   question. It sits inside an unbroken run of teaching-notes slides that
   the boundary check below shows extends from p.1079 (section banner)
   through p.1089 (Acquired Hypothyroidism notes), with p.1090 a plain
   "Questions" title slide and the FIRST real question (Q1, Ellie) printed
   unanswered at p.1091 / answered at p.1092. So p.1082's "answered" tag in
   the index is a defect of exactly the kind the page-map's own preamble
   warns about (a yellow-pixel-heavy notes slide misread as answered) --
   its highlighted yellow section header "Management" is the same shape as
   the un-flagged yellow headers on pp.1080/1081/1083/1084/1088/1089, and it
   is the only one of that whole run the index mistagged.
   Consequence for the twin question the task asked this part to settle:
   ⚠️ NEITHER p.1082 NOR p.1097 is genuinely twinless.
     - p.1097 (Q3, Catherine) has a complete twin: stem+options printed
       plain at p.1095 ("...as recorded in her book are shown on the next
       page..."), with the referenced diary/glucose-log figure (Figure 26.1)
       printed alone at p.1096 because it didn't fit beside the stem. p.1096
       is exactly the section-8 EEG-figure shape (index tags it "notes"
       because a bare figure page carries no stem/options/highlight text,
       but it is really part of Q3's printing, not unrelated notes). So
       p.1097's true "twin" is the pair {1095, 1096}, not a single missing
       page -- it was never twinless.
     - p.1082 cannot be "twinless" either, because it never was a question
       in the first place -- there is nothing for it to have a twin of.
   So the page-map's premise ("27 answered pages but only 26 question
   pages, so exactly one has no clean twin") rests on a count that is
   itself one too high: p.1082 was never a real answered page. The TRUE
   count in this section is 26 real question/answer pairs (confirmed
   directly: Q1..Q3 non-standard at 1091-1098, then the page-map's own
   "run 4" 1100-1144 even-parity run supplies 23 more, Q4..Q26 -- (1144-
   1100)/2+1 = 23, matches exactly), not 27, and no genuinely twinless
   question exists in the range this part examined.
   ⚠️ ESCALATED, NOT DECIDED: this part stages only the 7 real questions it
   found among its 8 assigned pages (n:1..n:7 = pp.1092,1094,1097,1100,
   1102,1104,1106) and does NOT invent an n:8 entry for p.1082. This shifts
   the section's real total to 26 and means whoever starts part B's
   numbering, and whoever reconciles the section-wide 27-count, needs to
   apply this correction -- flagged here rather than silently renumbered
   elsewhere.

   BOUNDARY CHECK 1 (pp.1079-1081 named "opening teaching-notes block" by
   the task prompt; pp.1083-1091 named "gaps" in the prompt, to spot-check
   only): read EVERY page 1079-1091 individually (not spot-checked, because
   the p.1082 anomaly above made the whole run worth reading in full).
   p.1079 = section banner "Diabetes & Endocrinology" (confirms boundary
   check 1's second half: yes, the section banner is here). p.1080
   (epidemiology/pathogenesis notes), p.1081 (clinical features/diagnosis
   notes), p.1082 (management notes -- see finding above), p.1083 (diet /
   glucose monitoring notes), p.1084 (acute complications: hypoglycemia
   notes), p.1085 (DKA diagnostic criteria notes), p.1086 (DKA management
   steps notes), p.1087 (thyroid gland & hormones notes), p.1088 (congenital
   hypothyroidism notes), p.1089 (acquired hypothyroidism notes) are all
   plain bulleted teaching content -- no options, no highlighted key,
   nothing resembling a question, on any of them. p.1090 is a plain red
   "Questions" title slide, no content. So the TRUE teaching-notes-only
   span is pp.1079-1090 (12 pages, one page longer than the prompt's
   pp.1079-1081 + implied-notes pp.1083-1091 framing -- p.1091 is in fact
   the first real question, not a notes page).

   BOUNDARY CHECK 2 (is p.1091/1092 genuinely the section's first question):
   CONFIRMED. p.1091 prints "1. Ellie, a 7-year-old girl..." plain, five
   options A-E, no highlight. p.1092 reprints the same stem/options with
   option E highlighted yellow and a boxed explanation. This is Q1, the
   first and only question in pp.1079-1092.

   BOUNDARY CHECK 3 (pp.1095-1096, named a "gap" in the prompt): p.1095 is
   Q3's unanswered twin (Catherine, plain, no highlight) -- NOT a notes
   page as the prompt's gap framing implied, though it is a genuine
   question-stem page and not itself a false positive; p.1096 is Q3's
   diary/glucose-log figure (Figure 26.1), classified by the index as
   "notes" for the reason given in the finding above. Neither is a
   teaching-notes slide in the pp.1079-1090 sense. Both belong to Q3.

   OVERFLOW BOX: n3/p.1097 (Q3, Catherine) prints its highlighted key with
   no room for an explanation box; the box is printed alone on the very
   next page, p.1098 -- confirmed on the image, small bordered box, reduced
   font, format-matches brief SS3a's "real overflow box" shape (not a
   full-page teaching slide). Recorded as box:1098.

   ALTERNATION: no break anywhere in n1..n7 beyond the Q3/figure structure
   already described. Every other answered page (1092, 1094, 1100, 1102,
   1104, 1106) sits at a normal +1 offset from its plain unanswered twin
   (1091, 1093, 1099, 1101, 1103, 1105 respectively) -- twins for 1101,
   1103, 1105 were NOT individually opened; the page-map's own even-parity
   "run 4" account (1100-1144, unbroken) was trusted after the pattern was
   directly confirmed at 1091/1093/1099, per the task's "spot check" leave
   for this part of the range.

   NUMERALS: no exponent or superscript occurs anywhere in this part's
   stems, options or boxes. Glucose/HbA1c values were all read directly off
   the native image at full legibility, no crop needed: n1 20 mmol/L; n3
   HbA1c 58 mmol/mol (7.5%) to 90 mmol/mol (10.3%), desired <58 mmol/mol.

   FIGURES: one in this part -- n3/p.1097's referenced diary/glucose-log
   chart is printed on p.1096, described fully in n3's fig/figAlt below.
   No other figure anywhere in pp.1079-1100. Stated as measured: every page
   1079-1100 was read in full (not spot-checked) and none but p.1096
   carries an image.

   SHARED OPTION MENU: none in this part -- n1..n4's four option ladders
   (diabetes-type vignette, hypoglycemia management, blood-glucose-log
   vignette, growth-faltering vignette) are all distinct, no repeated
   ladder observed.

   FOLDS: no cross-bank or cross-file resemblance noticed for n1..n7.

   LEADING PRINTED NUMBERS: every stem in this part carries a leading
   printed question number ("1. Ellie...", "2. James...", "3. Catherine...",
   "4. Mohammed...") which was STRIPPED per brief instruction (no live
   entry carries one) and recorded in `pr`. Flagging per the task's
   instruction to report finding one.
   =========================================================================== */

{ n:1, pr:1, p:1092, key:4,
  stem:'Ellie, a 7-year-old girl, is newly diagnosed with diabetes mellitus. She has been drinking lots of fluids and has had to pass urine frequently. She has a markedly raised blood glucose (20 mmol/L) and heavy glycosuria. Which of the following is most likely to be true about her diabetes?',
  opts:['Her diagnosis should be confirmed with an oral glucose tolerance test','She can be managed with oral hypoglycaemic agents and dietary modification','She will have gained weight in the last few weeks','The incidence in the UK is falling','There is autoimmune pancreatic β-cell damage'],
  expl:'Type 1 diabetes is caused by autoimmune destruction of pancreatic β-cells, leading to insulin deficiency. This explains the classic presentation of polyuria, polydipsia, and glycosuria in children like Ellie.',
  note:'Read on native 800x450 image, fully legible, no crop needed. Unanswered twin at p.1091 checked (identical stem/options, no highlight) -- this is the section\'s first real question; see CRITICAL FINDING and BOUNDARY CHECK 2 in the header re: p.1082 not being a question and p.1091/1092 being the true Q1. Highlighted option seen: "E. There is autoimmune pancreatic β-cell damage" (5th option, index 4). Leading printed number "1." stripped from stem per brief, recorded in pr.' },

{ n:2, pr:2, p:1094, key:3,
  stem:'James, aged 11 years, has type 1 diabetes mellitus. While playing football during the mid-morning break at a holiday camp, he suddenly feels faint. His classmates call the supervisor who finds him lying unresponsive in the playground. What should be his immediate management?',
  opts:['Call an ambulance','Check blood glucose','Give a glucose drink','Give buccal glucose gel','Give insulin'],
  expl:'An unresponsive child with type 1 diabetes may be experiencing hypoglycemia. Immediate treatment with buccal glucose gel is safe and effective when the child cannot swallow but is not having seizures or vomiting.',
  note:'Read on native 800x450 image, fully legible, no crop needed. Unanswered twin at p.1093 checked (identical stem/options, no highlight). Highlighted option seen: "D. Give buccal glucose gel" (4th option, index 3). Leading printed number "2." stripped from stem per brief, recorded in pr.' },

{ n:3, pr:3, p:1097, box:1098,
  key:4,
  stem:'Catherine, aged 15 years, has had type 1 diabetes mellitus for 7 years. Her insulin regimen has remained unchanged for the last 7 months. Her HbA1c has increased from 58 mmol/mol (7.5%) to 90 mmol/mol (10.3%) (desired level <58 mmol/mol). The most recent blood glucose levels as recorded in her book are shown. What is the most likely explanation for these findings?',
  opts:['During the summer holidays she took less exercise','She has reduced her insulin dosage to try to lose weight','She is taking more insulin than she needs','She is regularly eating snacks and indulging in high-carbohydrate food','Some of the blood glucose measurements are fictitious'],
  fig:'A printed home glucose-monitoring diary/logbook (captioned "Figure 26.1" at bottom left), a grid table with columns for Insulin injection (Time/Dosage) and Blood (seven timing columns: before breakfast, 2hr after breakfast, before mid-day meal, 2hr after mid-day meal, before evening meal, 2hr after evening meal, before bed, during night) against dated rows from 21/9 to 12/10, plus a printed instruction to consult the doctor/diabetes nurse about test timing and a blank Comments column with two handwritten-style notes "Visiting nan" against 25/9 and 2/10. The blood-glucose entries are scattered single numbers (e.g. 4, 8, 5, 3, 9, 10, 6, 7) placed in only one or two of the seven blood columns per date, with the Insulin injection columns left entirely blank throughout. This is the figure the stem on p.1095/1097 refers to ("shown on the next page" / "shown"); printed alone on p.1096 because it did not fit beside the stem+options.',
  figAlt:'A printed home blood-glucose monitoring diary table, dated rows with scattered numeric readings.',
  expl:'The significant rise in HbA1c despite reportedly normal glucose logs suggests that some readings have been falsified. This is sometimes seen in adolescents struggling with diabetes management or emotional stress.',
  note:'Stem+options read on native 800x450 image at p.1097 (highlighted key) and cross-checked against the unanswered twin at p.1095 (identical wording, twin\'s stem ends "...are shown on the next page" vs answered p.1097\'s "...are shown" -- a genuine, silently-transcribed wording difference between the two printings, each transcribed verbatim as its own page prints; only the answered p.1097 wording is staged here per brief SS3). Figure read at p.1096 (Figure 26.1). Explanation box read at p.1098, printed alone (box overflow) -- SEE HEADER "OVERFLOW BOX". This is the p.1097 twin question examined per the task\'s SECOND JOB: p.1097 is NOT twinless -- its twin is the pair {p.1095 stem/options, p.1096 figure}; see CRITICAL FINDING in header. Highlighted option seen: "E. Some of the blood glucose measurements are fictitious" (5th option, index 4). Leading printed number "3." stripped from stem per brief, recorded in pr. Numerals (HbA1c mmol/mol and %, desired-level threshold) all read directly off the native image, fully legible, no crop needed.' },

{ n:4, pr:4, p:1100, key:3,
  stem:"Mohammed, a 12-year-old boy with type 1 diabetes mellitus, is reviewed in the outpatient clinic. Despite maintaining good control of his diabetes, his height has remained static for 9 months. He says his appetite is normal, but he has lost interest in football, which is his passion, as he says he can't keep up with the other boys anymore. He just stays at home and watches TV but wants to be back playing football and regaining his energy. A full blood count and C-reactive protein are normal, and his HbA1c is satisfactory. What is the most likely diagnosis?",
  opts:['Anorexia nervosa','Depression','Growth hormone deficiency','Hypothyroidism'],
  expl:'Poor growth, fatigue, and lack of interest in physical activities despite good diabetes control suggest hypothyroidism, a common autoimmune comorbidity in children with type 1 diabetes. Normal inflammatory markers make other chronic illnesses less likely.',
  note:'Read on native 800x450 image, fully legible, no crop needed. Unanswered twin at p.1099 checked (identical stem/options, no highlight). This question prints only FOUR options (A-D), not five -- confirmed on both p.1099 and p.1100, not a transcription slip. Highlighted option seen: "D. Hypothyroidism" (4th option, index 3). Leading printed number "4." stripped from stem per brief, recorded in pr.' },

{ n:5, pr:5, p:1102, key:2,
  stem:'Zeinab, aged 15 years, has had 3 months of diarrhea, weight loss, and palpitations. You suspect hyperthyroidism. Which combination of thyroid function test results would confirm the diagnosis?',
  opts:['High TSH and high T4 levels','High TSH and low T4 levels','Low TSH and high T4 levels','Low TSH and low T4 levels','Normal TSH and high T4 levels'],
  expl:"Primary hyperthyroidism is characterized by low TSH due to negative feedback from elevated circulating T4. Zeinab's symptoms and this hormonal profile confirm the diagnosis.",
  note:'Read on native 800x450 image, fully legible, no crop needed. Answered page checked directly; twin at p.1101 not individually opened (spot-check leave per task, pattern already confirmed regular at 1091/1093/1099). Highlighted option seen: "C. Low TSH and high T4 levels" (3rd option, index 2). Leading printed number "5." stripped from stem per brief, recorded in pr.' },

{ n:6, pr:6, p:1104, key:1,
  stem:'George, a 2-week-old male infant, presents to the Emergency Department with vomiting, diarrhea, and poor feeding. Investigations show: Sodium: 112 mmol/L Potassium: 6.8 mmol/L Urea: 7.8 mmol/L Creatinine: 30 mmol/L Blood glucose: 1.7 mmol/L Infection screen: Negative What is the most likely cause?',
  opts:['Acute kidney injury','Congenital adrenal hyperplasia','Congenital adrenal hypoplasia','Cushing syndrome','Gastroenteritis'],
  expl:'Salt-wasting CAH leads to hyponatremia, hyperkalemia, and hypoglycemia due to aldosterone and cortisol deficiency. It often presents in the first few weeks of life with dehydration and poor feeding.',
  note:'Read on native 800x450 image, fully legible, no crop needed. Answered page checked directly; twin at p.1103 not individually opened (spot-check leave per task). Investigations printed as a bulleted list (red circular bullets, not lettered) before the lettered A-E options; transcribed into stem in printed order, verbatim values: Na 112 mmol/L, K 6.8 mmol/L, urea 7.8 mmol/L, creatinine 30 mmol/L, glucose 1.7 mmol/L, infection screen negative. Highlighted option seen: "B. Congenital adrenal hyperplasia" (2nd option, index 1). Leading printed number "6." stripped from stem per brief, recorded in pr.' },

{ n:7, pr:7, p:1106, key:1,
  stem:'A newborn baby has recently been delivered. The midwife requests an urgent paediatric review because she cannot determine if the baby is male or female. The parents are asking what sex their baby is. What should you tell them?',
  opts:['You are unable to tell if the baby is male or female and tell the parents it is likely to be a mixture of both sexes (i.e., ovotesticular disorder of sex development).','You are unable to tell right now, and a detailed assessment, including scans and blood tests, will be needed before a specialist can tell them.','You are unable to tell right now, but you will be able to assign a sex as soon as the baby’s chromosomes are available.','You think it is likely to be a girl, so the baby should be named female on the birth certificate pending results.','You think it is likely to be a boy, so the baby should be named male on the birth certificate pending results.'],
  expl:'Ambiguous genitalia at birth warrants a careful, non-judgmental approach. A full diagnostic workup is essential before assigning sex or offering definitive answers to the parents.',
  note:'Read on native 800x450 image, fully legible, no crop needed. Answered page checked directly; twin at p.1105 not individually opened (spot-check leave per task). Also rendered/read p.1107 as the ONE-PAGE-PAST-RANGE boundary check: it is Q8’s unanswered stem/options ("A baby is born with a disorder of sexual differentiation. Congenital adrenal hyperplasia is suspected...", plain, no highlight) -- confirms the handoff into part B continues the same regular +1/+1 unanswered/answered alternation with no break at the part boundary. Highlighted option seen: "B. You are unable to tell right now, and a detailed assessment..." (2nd option, index 1). Leading printed number "7." stripped from stem per brief, recorded in pr.' },

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
  note:'Read from native p1108.jpeg, fully legible, option D highlighted yellow with underline. No figure. Twin not needed -- text crisp at native resolution.' },

{ n:9, pr:9, p:1110, key:3,
  stem:'Julie, aged 7 years, has diabetes mellitus. She is admitted to the hospital after vomiting three times. She has a 2-day history of being unwell with mild fever, sore throat, and decreased appetite. Her blood glucose reads ‘high’. Although she wasn’t eating, her parents maintained her usual insulin dose. On examination, her temperature is 37.5°C. She is drowsy and confused. Her pulse is 150 bpm, blood pressure 80/45 mmHg, and capillary refill time is 3 seconds. Examination reveals tonsillitis. Blood glucose is 22 mmol/L. What is the best immediate course of action?',
  opts:['Oral glucose drink','Intravenous infusion of normal saline (0.9%)','Subcutaneous insulin','Fluid resuscitation with normal saline (0.9%)','Intravenous infusion of 5% glucose'],
  expl:'Julie’s signs of shock (tachycardia, hypotension, drowsiness) indicate diabetic ketoacidosis with dehydration. Immediate fluid resuscitation with isotonic saline is the first critical step in management.',
  note:'Read from native p1110.jpeg, fully legible. All numerals confirmed on the image, not OCR: 37.5°C, 150 bpm, 80/45 mmHg, 3 second CRT, 22 mmol/L. Option D highlighted yellow. No figure. Twin not needed.' },

{ n:10, pr:10, p:1112, key:2,
  stem:'Jon is 12 years old. His brother has diabetes. He has started drinking a lot of fluids and passing a lot of urine. He checked his blood glucose on his brother’s glucometer, and it was 19 mmol/L. In the Emergency Department, he appears well with no signs of dehydration. Blood glucose is 21 mmol/L. Venous blood shows normal pH, 2 mmol/L ketones, and HbA1c is awaited. What is the best immediate management?d',
  opts:['Oral glucose drink','Intravenous infusion of normal saline (0.9%)','Subcutaneous insulin','Fluid resuscitation with normal saline (0.9%)','Intravenous infusion of 5% glucose'],
  expl:'Jon likely has new-onset type 1 diabetes without ketoacidosis, as evidenced by normal pH and only mild ketonemia. He is stable and well-appearing, so subcutaneous insulin can be safely started to manage his hyperglycemia.',
  note:'Read from native p1112.jpeg, fully legible. Numerals confirmed on image: 19 mmol/L, 21 mmol/L, 2 mmol/L ketones. Option C highlighted yellow. Stem prints a stray trailing "d" after the question mark ("management?d") -- reproduced verbatim as printed, not repaired. No figure. Twin not needed.' },

{ n:11, pr:11, p:1114, key:0,
  stem:'Harriet, a 5-year-old girl with type 1 diabetes mellitus (diagnosed 2 months ago), is on a basal-bolus insulin regimen. While playing in the garden, she suddenly becomes aggressive and pale. Her blood glucose is 3 mmol/L. What is the best immediate management?',
  opts:['Oral glucose drink','Intravenous infusion of normal saline (0.9%)','Subcutaneous insulin','Fluid resuscitation with normal saline (0.9%)','Intravenous infusion of 5% glucose'],
  expl:'A blood glucose level of 3 mmol/L indicates mild hypoglycemia, and the child is still conscious and able to swallow. The quickest and safest treatment in this scenario is an oral glucose drink.',
  note:'Read from native p1114.jpeg, fully legible. Numeral confirmed on image: 3 mmol/L. Option A highlighted yellow. No figure. Twin not needed.' },

{ n:12, pr:12, p:1116, key:1,
  stem:'Sophie, a 9-year-old girl with type 1 diabetes mellitus, develops fever with vomiting and diarrhea. After 2 days, her mother brings her to the pediatric unit. She is talking but clinically dehydrated. Vitals are stable. Blood glucose is 16 mmol/L. What is the best immediate management?',
  opts:['Oral glucose drink','Intravenous infusion of normal saline (0.9%)','Subcutaneous insulin','Fluid resuscitation with normal saline (0.9%)','Intravenous infusion of 5% glucose'],
  expl:'Sophie is dehydrated from vomiting and diarrhea and has elevated blood glucose, indicating a risk of diabetic ketoacidosis. IV normal saline is the best initial step to correct dehydration and support perfusion.',
  note:'Read from native p1116.jpeg, fully legible. Numeral confirmed on image: 16 mmol/L. Option B highlighted yellow. No figure. Twin not needed.' },

{ n:13, pr:13, p:1118, key:2,
  stem:'A newborn is noted to have coarse facies, a large fontanelle, hypotonia, and jaundice. Blood sugar levels are normal. Which investigation is most likely to reveal the diagnosis?',
  opts:['Growth hormone','Karyotype','Thyroid function tests','Blood group','Creatine kinase (CK)'],
  expl:'Coarse facies, hypotonia, prolonged jaundice, and large fontanelle are classical signs of congenital hypothyroidism. A thyroid function test will confirm the diagnosis by showing low T4 and high TSH levels.',
  note:'Read from native p1118.jpeg, fully legible, no numerals or doses on this page. Option C highlighted yellow. No figure. Twin not needed.' },

{ n:14, pr:14, p:1120, key:3,
  stem:'A 7-day-old male baby presents with 1-day history of poor feeding and vomiting. Born at term, postnatal period was normal. On arrival, he is lethargic and moderately dehydrated. Weight dropped from 3200 g to 2750 g. Blood glucose is 2.0 mmol/L. Sodium is 124 mmol/L; potassium 6.8 mmol/L. After resuscitation, what test will most likely confirm the diagnosis?',
  opts:['Abdominal ultrasound scan','ACTH level','Karyotype','17-Hydroxyprogesterone level','Chloride level'],
  expl:'This infant shows signs of salt-wasting (hyponatremia, hyperkalemia, weight loss) suggestive of congenital adrenal hyperplasia (CAH), especially 21-hydroxylase deficiency. Elevated 17-hydroxyprogesterone confirms this diagnosis.',
  note:'Read from native p1120.jpeg, then re-confirmed at a 300 dpi crop (scratchpad p1120-300-1120.jpg) because this page carries five clinically load-bearing numerals in one stem. All confirmed at 300 dpi: 3200 g, 2750 g, 2.0 mmol/L glucose, 124 mmol/L sodium, 6.8 mmol/L potassium -- none is an exponent, all read the same at both resolutions. Option D highlighted yellow. No figure. Twin not needed.' },

{ n:15, pr:15, p:1122, key:1,
  stem:'A 14-year-old boy with diabetic ketoacidosis is receiving IV insulin (0.1 units/kg/h) and 0.9% saline. After 12 hours, his blood sugar is 22 mmol/L, and urine output is good. Which serum value is most likely to be decreased?',
  opts:['Serum sodium','Serum potassium','Serum lactate','Serum chloride','Serum calcium'],
  expl:'In DKA, insulin administration shifts potassium into cells, leading to a drop in serum potassium even if initial levels were high. Therefore, ongoing monitoring and potassium replacement are essential.',
  note:'Read from native p1122.jpeg, fully legible. Numerals confirmed on image: 14-year-old, 0.1 units/kg/h insulin, 0.9% saline, 12 hours, 22 mmol/L. Option B highlighted yellow. No figure. Twin not needed.' },

{ n:16, pr:16, p:1124, key:4,
  stem:'On routine newborn exam, a baby is noted to have bilaterally undescended testes. Genitalia appears male. What is the most important initial investigation?',
  opts:['Karyotype with FISH for SRY','Abdominal ultrasound scan','Abdominal CT scan','17-Hydroxyprogesterone levels','Urea and electrolytes (U&Es)'],
  expl:'In a newborn with bilateral undescended testes, the most urgent concern is salt-wasting congenital adrenal hyperplasia (CAH), which can cause life-threatening electrolyte imbalances. Therefore, urea and electrolytes (U&Es) should be checked immediately. Further tests like karyotype, ultrasound, and 17-hydroxyprogesterone are done after stabilization to confirm the diagnosis and assess anatomy.',
  note:'Read from native p1124.jpeg, fully legible, no numerals. Option E highlighted yellow. Explanation box prints several phrases in bold; content transcribed as plain text (no markdown carried into expl). No figure. Twin not needed.' },

{ n:17, pr:17, p:1126, key:1,
  stem:'Salma, a 2-week-old infant, presents with persistent vomiting. There is no history of diarrhea or fever. She has become lethargic and refuses to feed. On examination, she has virilized external genitalia, tachycardia (heart rate of 160 beats/min), and a capillary refill time of 3 seconds. A blood sample is sent for testing. What is the expected result?',
  opts:['High blood glucose','Low blood sodium and high potassium','High serum cortisol','High blood sodium','High blood aldosterone'],
  expl:'This presentation is typical of salt-wasting CAH due to 21-hydroxylase deficiency. Electrolyte disturbances include hyponatremia and hyperkalemia, along with signs of dehydration and virilization in females.',
  note:'Read from native p1126.jpeg, fully legible. Numerals confirmed on image: 2-week-old, heart rate 160 beats/min, CRT 3 seconds. Option B highlighted yellow. No figure. Twin not needed. This is my LAST assigned page -- printed number 17 confirmed here, one less than p.1128s printed 18 (part Cs first page, read as the one-past boundary check) -- boundary consistent.' },

/* ===========================================================================
   ENDPOINT PART 2 -- Pediatrics endpoint part2.pdf -- SECTION 9 "Diabetes &
   Endocrinology", PART C. Verbatim staging record. Written 2026-09-05.

   ⚠️ RENUMBERED BY THE PARENT AFTER WRITING, 2026-09-05: this part's entries
   were staged as n:19..n:27 and are now n:18..n:26. The prompt that assigned
   those numbers was built on a section total of 27, which half A disproved by
   reading pp.1079-1091 page by page: p.1082 is an ordinary teaching-notes
   slide headed "Management" with no stem, no options and no highlighted key,
   mistagged `answered` by the OCR index because its yellow section header
   matches the un-flagged yellow headers on pp.1080/1081/1083/1084/1088/1089.
   That also retires this part's own arithmetic cross-check below, which took
   p.1082 as a question and so opened run 4 one number too high. The section
   holds 26 questions, and `pr` -- which this part transcribed off the page and
   which was never wrong -- now equals `n` throughout the section. Only the `n`
   values on the entry lines moved; the header text below is left standing as
   the record of what this half was told.

   Range assigned: answered pages 1128, 1130, 1132, 1134, 1136, 1138, 1140,
   1142, 1144 (9 pages), n=19..27 (section-global, section has 27 total).
   Addressed from the EXPLICIT page list in the task prompt, never derived by
   +2 arithmetic, per the prompt's own warning (parity already flipped three
   times earlier in section 9, even though this part's own run happens to be
   the section's long even-parity run 1100-1144).

   Source is a 1-up exported slide deck: one PDF page = one printed slide
   page, no 2-up split, no duplex show-through (brief SS2). Native embedded
   JPEGs (800x450 ceiling) were pulled from a PRIOR session's extraction
   cache at:
     C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-
     Herophilus\0ffb5f86-a1df-4f33-a8c4-fc32a73946ba\scratchpad\ep2-index\
     native\pNNNN.jpeg
   -- NOT this session's own scratchpad; the task prompt's SS2 correction
   pointed at this path, and it was verified to hold all 1,993 pages before
   use. The hires\pNNNN.png upscale render was NOT needed for any page in
   this part -- every numeral, unit and highlighted key was legible on the
   native 800x450 JPEG; this is stated as measured, not assumed (§5 of the
   brief). OCR index under content\peds\qb-pages\ocr\ep2\ was NOT opened for
   transcription or for anything else.

   ⚠️ NO part-A or part-B file for "endpoint-p2-s09-endocrine" existed on
   disk in content\peds\qb-pages\ at the time this file was started (only
   the unrelated ENT-side "endpoint-s09-infection.part-*" files, a different
   section under a similar name, and house-ch14-endocrine files, a different
   bank -- neither opened, per brief §9 "never open a parallel chat's file").
   So the "read the last entry of the preceding part off disk" instruction
   in the brief's §5 could not be followed literally. The n:19-27 assignment
   was instead cross-checked arithmetically against the page-map
   (endpoint-p2-s09-s11-page-map.md): section 9's run 4 is pp.1100-1144, 23
   questions, one answered page every 2 pages; runs 1-3 (pp.1082, 1092+1094,
   1097) account for n:1-4, so run 4 opens at n:5 on p.1100 and (1128-1100)/2
   = 14 steps in gives n = 5+14 = 19 on p.1128, running to n=5+22=27 on
   p.1144 -- which matches this part's assigned n:19-27 exactly. This is
   reported as a cross-check, not a substitute for the disk read the brief
   asks for; if a part-A/part-B file appears before this section merges, its
   own last n must still be reconciled against 18 before merge.

   ⚠️ EVERY STEM IN THIS PART CARRIES A LEADING PRINTED QUESTION NUMBER
   ("17.", "18." etc.) -- per brief instruction, the leading number is
   STRIPPED from every `stem` below and none is carried in a live entry.
   Reported once here rather than per entry, since it is uniform across the
   whole part (all 9 pages checked).

   BOUNDARY CHECK -- is p.1128 genuinely this part's first answered page,
   and NOT p.1126 (part B's last)?
   Read p.1126: prints "17. Salma, a 2-week-old infant... What is the
   expected result?" with option "b. Low blood sodium and high potassium"
   highlighted yellow and a boxed explanation on salt-wasting CAH -- this IS
   an answered page, printed number 17. It is p.1126, OUTSIDE this part's
   range (part B's territory per the task prompt: "Part B ends at p.1126.
   Do not stage p.1126."). NOT staged here.
   Read p.1127: prints "18. A mother with pre-eclampsia delivers a baby at
   37 weeks' gestation..." plain, four options a-d, NO highlight -- the
   unanswered twin of Q18.
   Read p.1128: prints the SAME Q18 stem and four options, with "d.
   Hypoglycemia" highlighted yellow and a boxed explanation.
   CONFIRMED: p.1128 is Q18, the first NEW question after part B's Q17 on
   p.1126, and it is genuinely answered (visible yellow highlight + box).
   p.1128 is correctly this part's first page. n=19, pr=18.

   Question-number walk (page by page, printed number `pr` on each answered
   page): p.1128=18, p.1130=19, p.1132=20, p.1134=21, p.1136=22, p.1138=23,
   p.1140=24, p.1142=25, p.1144=26. (Populated as each page is read; see
   inline confirmation below if any pr breaks the run of consecutive
   integers -- none did, this section's printed numbers ran 18..26 across
   n=19..27, i.e. `pr` trails `n` by exactly 1 throughout this part, unlike
   part-1 section 1 which the brief warns can repeat numbers -- no repeat
   was found in this part.)
   =========================================================================== */

{ n:18, pr:18, p:1128, key:3,
  stem:'A mother with pre-eclampsia delivers a baby at 37 weeks\' gestation. The baby weighs 2.2 kg and is admitted to the Special Care Baby Unit due to his small size. He appears well and has had a breastfeed. What is he most at risk of?',
  opts:['Anemia','Congenital cardiac abnormality','Group B streptococcus infection','Hypoglycemia'],
  expl:'Infants of mothers with pre-eclampsia and low birth weight are at risk of neonatal hypoglycemia due to poor glycogen stores and immature glucose regulatory mechanisms, even if they appear well initially.',
  note:'Only 4 options printed (a-d), not the usual 5 -- confirmed by direct count on p.1128, not a transcription slip. Highlighted key seen as yellow-boxed bold-underlined text on option "d. Hypoglycemia" (the 4th, 0-based index 3). Twin at p.1127 read and matches stem/options word-for-word. Leading printed number "18." stripped from stem per brief instruction. Weight "2.2 kg" and gestation "37 weeks\'" read directly off the native JPEG, both fully legible, no crop needed.' },

{ n:19, pr:19, p:1130, key:1,
  stem:'Screening for congenital hypothyroidism in Egypt is:',
  opts:['Done by screening for T4 level','Done by screening for TSH level','Not routinely done in Egypt','Done only if symptoms develop'],
  expl:'In Egypt, neonatal screening for congenital hypothyroidism is typically done by measuring TSH levels. Early detection allows for prompt treatment and prevention of neurodevelopmental delay.',
  note:'Again 4 options (a-d). Highlighted key: "b. Done by screening for TSH level" (2nd, 0-based index 1), yellow-boxed bold-underlined. Fully legible on native JPEG, twin not needed (no ambiguous text, no numerals besides the option/hormone labels T4/TSH which are unambiguous letters). Leading printed number "19." stripped from stem.' },

{ n:20, pr:20, p:1132, key:4,
  stem:'Which of the following is not a manifestation of untreated congenital hypothyroidism?',
  opts:['Puffy eyes','Constipation','Hoarse voice','Delayed motor and mental milestones','Overweight due to voracious appetite'],
  expl:'Untreated congenital hypothyroidism typically causes poor feeding and lethargy rather than a voracious appetite. Puffy eyes, constipation, hoarse voice, and developmental delays are classic features.',
  note:'5 options this time (a-e), back to the usual count. Highlighted key: "e. Overweight due to voracious appetite" (5th, 0-based index 4). Fully legible on native JPEG, no crop needed, twin not consulted (no ambiguous text).' },

{ n:21, pr:21, p:1134, key:1,
  stem:'An 8-month-old boy presents with developmental delay and constipation. In the neonatal period, he had delayed passage of meconium and prolonged jaundice. On examination, he is short. Which of the following investigation results supports the most likely diagnosis?',
  opts:['Elevated TSH and elevated T4','Elevated TSH and low T4','Normal serum calcium and low serum phosphorus','Reduced bilirubin glucuronyl transferase','Normal TSH and elevated T4'],
  expl:'This clinical picture suggests congenital hypothyroidism, which presents with constipation, prolonged jaundice, poor growth, and developmental delay. A raised TSH and low T4 confirm primary hypothyroidism due to thyroid gland dysfunction.',
  note:'5 options (a-e). Highlighted key: "b. Elevated TSH and low T4" (2nd, 0-based index 1). Fully legible on native JPEG, no crop needed, twin not consulted.' },

{ n:22, pr:22, p:1136, key:0,
  stem:'Type 1 diabetes mellitus is not associated with:',
  opts:['Obesity','Weight loss','Enuresis','Polydipsia'],
  expl:'Type 1 diabetes is typically associated with weight loss, polydipsia, polyuria, and sometimes enuresis due to osmotic diuresis. Unlike type 2 diabetes, it is not associated with obesity.',
  note:'4 options (a-d). Highlighted key: "a. Obesity" (1st, 0-based index 0). Fully legible on native JPEG, no crop needed, twin not consulted.' },

{ n:23, pr:23, p:1138, key:3,
  stem:'James, aged 11 years, has type 1 diabetes mellitus. While playing football during a mid-morning break at camp, he suddenly feels faint. A supervisor finds him unresponsive. What is the immediate management?',
  opts:['Call an ambulance','Check blood glucose','Give a glucose drink','Give buccal glucose gel','Give insulin'],
  expl:'In a child with type 1 diabetes who is unresponsive and likely hypoglycemic, buccal glucose gel provides a rapid, safe source of glucose without needing IV access. It\'s preferred in unresponsive but not seizing or vomiting children.',
  note:'5 options (a-e). Highlighted key: "d. Give buccal glucose gel" (4th, 0-based index 3). Fully legible on native JPEG, no crop needed, twin not consulted. Contraction "It\'s" transcribed verbatim as printed.' },

{ n:24, pr:24, p:1140, key:1,
  stem:'What is the most ideal insulin regimen for an 8-year-old child recently diagnosed with type 1 diabetes mellitus, who has 3 regular meals a day?',
  opts:['Short-acting insulin 3 times daily','Basal-bolus regimen','Intermediate-acting insulin every 12 hours','Premixed insulin every 12 hours'],
  expl:'The basal-bolus regimen best mimics physiological insulin release, providing long-acting insulin for baseline needs and rapid-acting insulin for meals. It offers flexibility and optimal glycemic control, especially in school-aged children.',
  note:'4 options (a-d). Highlighted key: "b. Basal-bolus regimen" (2nd, 0-based index 1). Numerals present ("8-year-old", "3 regular meals", "3 times daily", "every 12 hours") all read directly off the native JPEG, all fully legible, no crop needed, no exponents/units/doses in mg or mmol involved here. Twin not consulted.' },

{ n:25, pr:25, p:1142, key:2,
  stem:'A 3-year-old boy presents to the emergency department with dehydration and rapid breathing following a short history of abdominal pain and vomiting. His blood glucose level is 850 mg/dL, and urine ketones are positive (++). What is the most appropriate initial treatment?',
  opts:['Start IV insulin infusion','SC rapid-acting insulin','IV bolus of normal saline','Sodium bicarbonate (NaHCO3)','Oxygen therapy'],
  expl:'This child has diabetic ketoacidosis (DKA) with severe hyperglycemia and ketonuria. Initial management involves fluid resuscitation with isotonic saline to correct dehydration and improve perfusion before starting insulin therapy.',
  note:'5 options (a-e). Highlighted key: "c. IV bolus of normal saline" (3rd, 0-based index 2). ⚠️ Blood glucose "850 mg/dL" and the ketone notation "(++)" RE-CONFIRMED at 300 dpi crop (ep2-stage\\p-1142.jpg) per brief 4a/4b caution on this being an endocrine section with glucose values -- native JPEG already read 850 mg/dL clearly, 300 dpi render agrees exactly, no discrepancy. The chemical formula "NaHCO3" transcribed with a printed SUBSCRIPT 3 (true subscript glyph on the page, confirmed at both resolutions) -- written here as plain "3" (no subscript markup available in this plain-text field), value/identity unaffected since it is a formula subscript, not an exponent; flagged per instruction to flag every numeral/unit/formula figure checked.' },

{ n:26, pr:26, p:1144, key:4,
  stem:'Jawad is a 5-month-old term baby who presents with jaundice. His mother is blood group AB and rhesus positive. His stool and urine are normal in color. He is breastfed but not feeding well. Examination reveals dry skin and an umbilical hernia. What is the most likely diagnosis?',
  opts:['Biliary atresia','Congenital infection','Galactosemia','Rhesus hemolytic disease of the newborn','Hypothyroidism'],
  expl:'Prolonged jaundice, feeding difficulties, dry skin, constipation, and umbilical hernia are classic signs of congenital hypothyroidism. Normal stool and urine color make biliary atresia less likely.',
  note:'5 options (a-e). Highlighted key: "e. Hypothyroidism" (5th, 0-based index 4). Fully legible on native JPEG, no crop needed, twin not consulted. This is the SECTION\'S LAST question (n=27 of 27, pr=26) -- confirmed against the page-map count of 27 answered pages.' }

/* ===========================================================================
   END-BOUNDARY CHECK (this part's second job, per task prompt).
   Read p.1145: prints a full-page Arabic Qur'anic supplication ("Allahumma
   Malik al-Mulk...", the "O Allah, Owner of Sovereignty..." verse), in
   multi-colour text, no stem, no options, no highlight, no box. This IS the
   section's closing supplication -- matching the book's established
   convention (a section runs to its own closing supplication, one page
   past its last answered page). NOT a question, NOT staged.
   Read p.1146: prints only the title banner "Liver disorders" in large red
   bold text, centered, no other content -- the opening title slide of
   Section 10.
   VERDICT: the convention HOLDS at this boundary. p.1144 (n=27, pr=26) is
   genuinely this section's last answered page; p.1145 is the closing
   supplication; p.1146 opens Section 10 "Liver disorders" exactly as the
   page-map predicted. No re-numbering, no shifted range, no surprise --
   reported per brief 4a-pre as the disk agreeing with the prompt.

   FINAL COUNTS. 9 entries, n=19..27 (contiguous, no gaps, no repeats),
   pp.1128,1130,1132,1134,1136,1138,1140,1142,1144 (contiguous even-page
   run, no page skipped or repeated). Printed numbers pr=18..26, also
   contiguous with no repeat anywhere in this part -- unlike part 1 section
   1's double-numbered pages, this run had no duplicate printed number.
   Options: 4-option questions x4 (n19,20,23,24), 5-option questions x5
   (n21,22,25,26,27) -- both counts genuine, confirmed by direct count on
   each page image, not a transcription artefact. Figures: ZERO in this
   part -- measured by looking at all 9 answered-page images whole and at 2
   of the twins; no page in this part carried any image, diagram or chart,
   only text stems/options/boxes. Boxes: all 9 pages printed their
   explanation box directly on the answered page itself -- no `box:<page>`
   overflow case in this part, no alternation break, no lone `notes` page
   encountered inside this part's own range (the brief's 3a overflow-box
   test was applied by opening p.1145/1146 anyway, per the second job
   above, and neither is an overflow box for any question in this part).
   No shared option menu / pairing found across n19-27 -- all 9 stems are
   clinically distinct with no repeated option ladder. No fold candidate
   with any other bank noticed (this part never opened House or endpoint
   part 1 content). No OSCE content encountered.
   =========================================================================== */

];
