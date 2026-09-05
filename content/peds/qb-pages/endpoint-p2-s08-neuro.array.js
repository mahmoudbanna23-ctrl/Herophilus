/* ===========================================================================
   ENDPOINT - Pediatrics endpoint part2.pdf - SECTION 8: "Neurological disorders"
   Verbatim staging record. PDF pages 930-1078; PDF page = printed page, offset zero.
   Merged from endpoint-p2-s08-neuro.part-A.js + endpoint-p2-s08-neuro.part-B.js + endpoint-p2-s08-neuro.part-C.js + endpoint-p2-s08-neuro.part-D.js by merge-parts-ep2.js.
   
   Every question is printed TWICE: an unanswered page, then the ANSWERED page with the key
   highlighted in yellow and (usually) a bordered explanation box. Only answered pages are
   staged. `n` is the true sequential index, `pr` what the page prints, `p` the PDF page,
   `key` a ZERO-BASED INDEX into `opts` (never a letter), matching the app field `answer`,
   `expl` the printed box verbatim or "".
   =========================================================================== */
var PEDEP2_S08_STAGED = [

/* ===========================================================================
   ENDPOINT PART 2 -- Pediatrics endpoint part2.pdf -- SECTION 8 "Neurological
   disorders", PART A. Verbatim staging record. Written 2026-09-05. Range
   assigned: answered pages 955, 957, 959, 961, 964, 966, 968, 971, 974, 976,
   978, 980, 982, 984, 986 (15 pages), n=1..15. Source is a 1-up exported
   slide deck: one PDF page = one printed slide page, no 2-up split, no
   duplex show-through (brief SS2). Native embedded JPEGs (800x450 ceiling)
   were pulled from a PRIOR session's extraction cache under
   ...\0ffb5f86-a1df-4f33-a8c4-fc32a73946ba\scratchpad\ep2-index\native\ (not
   this session's own scratchpad -- the cache predates this task and was
   located and reused rather than re-rendered, per brief SS2 "images already
   extracted, do not re-run the extractor"). OCR index under
   content\peds\qb-pages\ocr\ep2\ was NOT opened for transcription.

   ⚠️ PARITY IS NOT CONSTANT in this run and pages were addressed from the
   page-map's explicit list, never by +2 arithmetic (brief/prompt SS confirmed
   on the image: 955/957/959/961 highlighted-odd, 964/966/968 highlighted-
   even, 971 highlighted-odd, 974/976/978/980/982/984/986 highlighted-even).

   BOUNDARY CHECK 1 (pp.930-954, "opening teaching-notes block holding no
   question at all" per prompt): spot-checked p.930 (section title slide,
   "Neurological disorders"), p.935 (seizure classification teaching slide),
   p.940 (AED side-effects teaching slide), p.945 (central motor disorders
   teaching slide), p.950 (floppy infant teaching slide), p.954. ⚠️ FINDING,
   CONTRADICTS THE PROMPT: p.954 is NOT a teaching-notes page. It prints Q1's
   full stem and five options (A-E) with NO yellow highlight -- it is the
   unanswered twin of Q1, whose answered printing is p.955. So the true
   teaching-notes-only span is pp.930-953 (24 pages, matches the page-map's
   own "opening block pp.930-953" language in its SS3a-analogue note about
   the 21 false positives, i.e. the index's own supporting numbers agree with
   954 not being notes even though the boundary sentence in this prompt said
   930-954). Nothing else resembling a question was found in the five
   spot-checked notes pages (930/935/940/945/950); all five are plain bullet-
   point teaching content, no options, no highlight.

   BOUNDARY CHECK 2 (is p.955 genuinely the section's first question):
   CONFIRMED. p.955 prints "1. An 18-month-old girl..." with option C
   highlighted yellow and a boxed explanation; its unanswered twin is p.954
   (see above), not p.930-953. Q1 is the first and only question printed in
   pp.930-955.

   THE TWO NAMED TWIN GAPS (p.971 <- p.970, and p.974 <- p.973): ⚠️ NEITHER IS
   "a genuinely absent twin" and NEITHER IS "a question page the index
   mislabelled" -- both are a THIRD thing, not offered as an option in the
   prompt. p.970 and p.973 are each a genuine EEG-tracing FIGURE belonging to
   the question immediately before them (Q8/p.969 says "the figure below";
   Q9/p.972 says "His EEG is shown in the figure below"), printed on their
   own page because the image did not fit alongside the stem/options. The
   index's "notes" tag on both is a miscall: its detector evidently keys on
   stem/options/highlight text and a bare EEG image with only calibration
   bars produces none of that, so it fell into the same bucket as the
   pp.930-953 teaching slides even though it is really a question figure.
   Full detail in the notes on entries n8 (p.970) and n9 (p.973) below.

   OVERFLOW BOX FOUND: n4/p.961 prints no explanation box on its own page;
   p.962 -- the page-map's first "flip" notes page -- is a genuine small
   bordered overflow box for n4, format-matched per brief SS3a (small side
   box, reduced font, not a full-page teaching slide). Recorded as box:962.
   So of the FOUR "flip" notes pages named in the page-map (962, 970, 973,
   1037), THREE of the first three checked here (962, 970, 973) turned out to
   carry real question content (one overflow box, two figures) rather than
   being unrelated teaching notes -- only 1037 (outside this part's range)
   was not examined.

   ALTERNATION BREAKS: none of the strict question/answered alternation was
   broken anywhere in n=1..15 -- every answered page in this range sits
   correctly relative to its immediate unanswered twin at p-1, EXCEPT n8 and
   n9 whose twin printing spans two pages (stem+options, then figure) as
   described above; the answered page itself (971, 974) still sits at a
   normal +1 offset from the stem+options page (969, 972).

   SHARED OPTION MENU: n10/p.976 and n11/p.978 print an identical four-option
   ladder (Childhood absence epilepsy / Migraine / Syncope / Reflex asystolic
   syncope); recorded as a pairing in n11's note, not folded, with the
   discriminating clinical token named for each.

   NUMERALS: no exponent or superscript occurs anywhere in this part's stems,
   options or boxes. Three blood-glucose values were read directly off the
   native image at full legibility with no crop needed: n2 (4.2 mmol/L),
   n10 (4.1 mmol/L), n11 (3.5 mmol/L), n12 (4.9 mmol/L).

   FIGURES: three in this part -- n4/p.961 (colour clinical photo, infant's
   face, "setting-sun" eye sign), n7/p.968 (colour clinical photo, newborn's
   back, midline sac-like lesion), and n8/n9's two EEG tracings living on
   p.970 and p.973 respectively (attached to the answered entries at p.971
   and p.974). No figure in the other eleven entries -- each of those eleven
   answered pages was read whole and confirmed to hold plain text options
   only, no image.

   BOUNDARY PROOF, one page past this part's range: p.987 opens Q16 ("Andrew
   is a 5-year-old boy with severe learning difficulties...", unanswered,
   four options A-D shown, continuing straight into the section -- no
   section banner, no divider). This is part B's first question; part A's
   range ends cleanly at n=15/p.986 with nothing left unstaged before it.

   No cross-bank match was attempted or checked for this part (House/
   endpoint-part-1 comparison was out of scope for this staging pass; not
   claimed here). No OSCE content encountered in this range.

   COMPLETE: n=1..15, pp.955-986, all 15 answered pages staged, both named
   boundary checks done, both named twin gaps resolved by reading the image,
   one overflow box found and recorded, one shared-menu pairing recorded,
   boundary proven one page past the range.
   =========================================================================== */

{ n: 1, pr: 1, p: 955,
  key: 2,
  stem: "An 18-month-old girl is seen on the post-take ward round following her first febrile seizure. When counseling her parents about the diagnosis, which of the following statements regarding simple febrile convulsions is true?",
  opts: ['They are often focal in nature', 'Children frequently go on to develop epilepsy', 'Occur between the ages of 6 months and 5 years', 'Should always be investigated with lumbar puncture', 'May occur without fever'],
  expl: 'Simple febrile seizures are generalized, brief, and typically occur in children aged 6 months to 5 years during febrile illnesses. They have a good prognosis and rarely lead to epilepsy.',
  note: "Read on p.955 (answered) and cross-read on p.954 (unanswered twin, identical stem/options, no highlight -- confirmed). Key highlighted: yellow box on \"C. Occur between the ages of 6 months and 5 years\". Numbered '1.' printed as part of the stem; the lead-in word 'An' is the actual first word on the page (prompt's own quoted stem in the task text reads 'An 18-month-old girl' -- matches exactly). No figure. Legible at native resolution, no crop needed." },

{ n: 2, pr: 2, p: 957,
  key: 3,
  stem: "Angelo, a 15-month-old boy, had been unwell with a runny nose and cough for a day when his father brought him to the Emergency Department. At lunch, he suddenly became stiff, his eyes rolled upwards, and both his arms and legs started jerking for 2 minutes. He felt very hot at the time. When examined 2 hours later, he had fully recovered. This is the first time this has happened. He has a normal neurological examination and is acquiring his developmental milestones normally. He has no other medical problems. The triage nurse performed a blood glucose test, which indicated a glucose level of 4.2 mmol/L (within normal range). What would be the most appropriate investigation?",
  opts: ['CT scan of the brain', 'ECG', 'EEG (electroencephalography)', 'No investigation required', 'Oral glucose tolerance test'],
  expl: 'This is a classic simple febrile seizure : generalized, short duration, and full recovery in a neurologically normal child. No investigations are needed for a first simple febrile seizure in a well child with no concerning features.',
  note: "Read on p.957 (answered) and cross-read on p.956 (unanswered twin, identical stem/options, no highlight -- confirmed). Key highlighted: yellow box on \"D. No investigation required\". Glucose value 4.2 mmol/L read directly off native image, legible, no crop needed. No figure." },

{ n: 3, pr: 3, p: 959,
  key: 0,
  stem: "Pamela is an 8-year-old girl with recurrent seizures. She has three or four seizures a month, where she lets out a cry, her arms and legs become stiff, her eyes roll upwards, and then she jerks her arms and legs. This lasts about 3 minutes. Afterwards, she sleeps for 2 hours and is then back to normal. She is doing well at school but is sometimes missing school because of her seizures. She is currently not on any medication and has no other medical problems. What would be the best intervention for this child?",
  opts: ['Anti-epileptic drug therapy', 'Home schooling', 'Ketogenic diet', 'No intervention required', 'Vagal nerve stimulation'],
  expl: "Pamela has generalized tonic-clonic seizures occurring multiple times per month, affecting her quality of life. Anti-epileptic medication is indicated to reduce seizure frequency and improve her daily functioning.",
  note: "Read on p.959 (answered) and cross-read on p.958 (unanswered twin, identical stem/options, no highlight -- confirmed). Key highlighted: yellow box on \"A. Anti-epileptic drug therapy\". No figure. Legible at native resolution, no crop needed." },

{ n: 4, pr: 4, p: 961,
  box: 962,
  key: 1,
  stem: "Alan is a 7-month-old male infant who was preterm, born at 28 weeks' gestation, birthweight 970 g, and whose family recently arrived in this country. He is seen in a paediatric clinic because of vomiting. He had been seen regularly by a doctor who was treating him for gastro-oesophageal reflux. He has always vomited, but this has been getting worse, and his mother has noticed his eye movements are not normal. His examination findings can be seen in the opposite figure. What is the most likely underlying cause for these findings?",
  opts: ['Aqueduct stenosis', 'Intraventricular haemorrhage', 'Meningitis', 'Posterior fossa neoplasm', 'Subarachnoid haemorrhage'],
  fig: "Colour clinical close-up photograph of an infant's face, positioned to the right of the option list. Shows the eyes deviated downward with a band of white sclera visible above each iris (the 'setting-sun' eye sign); no other abnormality visible on the face in the crop.",
  figAlt: "Colour close-up clinical photograph of an infant's face and eyes.",
  expl: "Preterm infants are at risk of intraventricular hemorrhage, which may present later with vomiting and abnormal eye movements due to post-hemorrhagic hydrocephalus. His worsening symptoms and neurological signs are typical for this complication.",
  note: "Read on p.961 (answered) and cross-read on p.960 (unanswered twin, identical stem/options/figure, no highlight -- confirmed). Key highlighted: yellow box on \"B. Intraventricular haemorrhage\". p.961 itself prints NO explanation box (per brief SS3a, opened the very next page before moving on): p.962 -- which the page-map lists as a plain 'notes' page causing this run's parity flip -- is in fact a small bordered overflow explanation box for THIS question (format matches the brief's 'real overflow box' shape: small side box, reduced font, not a full-page teaching slide), so box:962 is recorded and its text placed in expl. FINDING: p.962 is not unrelated teaching content; it belongs to n4/p.961." },

{ n: 5, pr: 5, p: 964,
  key: 1,
  stem: "Sharon is an 11-year-old girl who has had occasional headaches for the last 3 months. Today was her first day at secondary school. During math class, she developed her usual throbbing left-sided headache, associated with nausea. Over the next hour, she lost her temporal vision in her right eye and found she only had minimal movement in her right arm. The left side of her mouth was drooping. Her parents were called, who rushed her to the hospital. She is now feeling much better, has normal vision, and can move her arm, although she has some residual weakness of her mouth. She has no significant medical history except some episodes of abdominal pain as a younger child. Her mother tells you that she also suffers from headaches. What is the most likely diagnosis?",
  opts: ['Idiopathic intracranial hypertension', 'Migraine', 'Raised intracranial pressure due to a space-occupying lesion', 'Subarachnoid haemorrhage'],
  expl: "Sharon's episode involves a unilateral throbbing headache, visual disturbance, nausea, and temporary neurological deficits, followed by recovery. These features are consistent with a hemiplegic migraine, especially with a family history.",
  note: "Read on p.964 (answered) and cross-read on p.963 (unanswered twin, identical stem/options, no highlight -- confirmed). Only FOUR options (A-D) printed, no E -- confirmed on both printings. Key highlighted: yellow box on \"B. Migraine\". No figure." },

{ n: 6, pr: 6, p: 966,
  key: 0,
  stem: "Aparna is a 2-year-old girl of Indian ethnicity who lives in the UK. She presents to her general practitioner as she has been unsteady on her feet for a day, having had diarrhoea during the previous week. On examination, she is febrile, has reduced muscle power and tone, and no tendon reflexes can be elicited in her lower limbs. She is referred urgently to the paediatric hospital, and 6 hours later, she is unable to stand, and the tendon reflexes in her upper limbs are now absent. She has no other medical problems and has been fully immunized. What is the most likely diagnosis?",
  opts: ['Guillain-Barré syndrome', 'Myasthenia gravis', 'Myotonic dystrophy', 'Poliomyelitis', 'Spinal muscular atrophy'],
  expl: "The child developed rapidly progressive weakness and areflexia following a recent gastrointestinal illness, which is typical for Guillain-Barré syndrome. This is an acute inflammatory demyelinating polyneuropathy requiring urgent assessment.",
  note: "Read on p.966 (answered) and cross-read on p.965 (unanswered twin, identical stem/options, no highlight -- confirmed). Key highlighted: yellow box on \"A. Guillain-Barré syndrome\". No figure." },

{ n: 7, pr: 7, p: 968,
  key: 0,
  stem: "Gregor was born at term. It was a normal pregnancy, though the mother did not have any antenatal ultrasound examinations as she was against medical procedures. He was born by vaginal delivery. Immediately, the midwife noticed the lesion shown in the opposite figure. Which of the supplements listed would have reduced the risk of this problem if taken by the mother periconceptually?",
  opts: ['Folic acid', 'Iron', 'Vitamin A', 'Vitamin B12', 'Vitamin D'],
  fig: "Colour clinical photograph, right of the option list, of a newborn's lower back/sacral region showing a raised, rounded, reddish sac-like skin lesion with a darker central/dependent area, consistent with a myelomeningocele-type midline back lesion; a small caption line is printed beneath the photo but is cut off at the bottom edge of the slide and not legible.",
  figAlt: "Colour clinical photograph of a newborn's lower back showing a midline raised skin lesion.",
  expl: "Neural tube defects such as spina bifida are associated with maternal folic acid deficiency. Periconceptional folic acid supplementation significantly reduces the risk.",
  note: "Read on p.968 (answered) and cross-read on p.967 (unanswered twin, identical stem/options/figure, no highlight -- confirmed). Key highlighted: yellow box on \"A. Folic acid\". A caption line beneath the photo is cropped off the bottom of the slide on both printings; not transcribed as it is illegible, not withheld." },

{ n: 8, pr: 8, p: 971,
  key: 1,
  stem: "Antonia, a 5-year-old girl, is seen by her general practitioner. Her mother and school teacher have noticed she has episodes where she stops her activity for a few seconds, stares blankly ahead, and then resumes the activity as if she had never stopped. These episodes happen many times a day. She has no other medical problems, and there is no family history of seizures. The EEG during an episode is shown in the figure below. Choose the most likely diagnosis.",
  opts: ['Childhood Rolandic epilepsy (benign epilepsy with centrotemporal spikes)', 'Childhood absence epilepsy', 'Juvenile myoclonic epilepsy', 'Lennox-Gastaut syndrome', 'Infantile spasms (West syndrome)'],
  fig: "The stem says 'the figure below' but no figure is printed on the answered page (p.971) itself. The figure is a 16-channel EEG tracing (numbered leads 1-16 top to bottom) on p.970, showing a run of high-amplitude, generalized, hypersynchronous rhythmic spike-and-wave-like discharges across all channels lasting several seconds then resolving into lower-amplitude background; calibration marks printed lower-left read '200 uV' (vertical bar) and '1 s' (horizontal bar). p.970 is the FIGURE page belonging to this question, not a page from a different question.",
  figAlt: "A 16-channel EEG tracing with amplitude and time calibration bars.",
  expl: "Frequent brief staring episodes with immediate return to activity are characteristic of absence seizures. The diagnosis is confirmed by EEG showing classic 3 Hz spike-and-wave discharges.",
  note: "⚠️ TWIN GAP NAMED IN THE PROMPT, RESOLVED BY READING THE IMAGE: p.970 is NOT a genuinely absent twin and NOT unrelated teaching content -- the index's 'notes' tag on p.970 is a MISCLASSIFICATION of a genuine question figure. The unanswered printing of this question is split across TWO pages: p.969 carries the stem+options plain (no highlight, confirmed cross-read, and its stem explicitly says 'the figure below'), and p.970 -- immediately after it -- carries only the EEG image itself with calibration bars, no stem, no options, no highlight (which is exactly why an index built on text/highlight detection would tag it 'notes'). The ANSWERED page, p.971, reprints the stem+options+key+box but does NOT reprint the EEG figure inline -- the figure exists only on p.969/p.970's printing. Key highlighted on p.971: yellow box on \"B. Childhood absence epilepsy\". Explanation box (bordered, to the right of the options on p.971) transcribed verbatim into expl. Diagnosis withheld from figAlt per brief SS6; fig names the EEG pattern in words only (no interpretive label such as '3Hz spike-wave' is asserted as diagnostic in figAlt, though the printed box itself names it in expl)." },

{ n: 9, pr: 9, p: 974,
  key: 4,
  stem: "Vijay is a 5-month-old infant who has been seen repeatedly by his general practitioner because of colic. His mother brings him to the Accident and Emergency Department as he is having episodes of suddenly throwing his head and arms forward. These episodes occur in repetitive bursts. His mother thinks they may be something more than just colic, as he is now not smiling or supporting his head as well as he did previously. He was born at term by normal vaginal delivery and has no other medical problems. His EEG is shown in the figure below. Choose the most likely diagnosis.",
  opts: ['Juvenile myoclonic epilepsy', 'Lennox-Gastaut syndrome', 'Childhood Rolandic epilepsy (benign epilepsy with centrotemporal spikes)', 'Childhood absence epilepsy', 'Infantile spasms (West syndrome)'],
  fig: "The stem says 'His EEG is shown in the figure below' but no figure is printed on the answered page (p.974) itself. The figure is a 16-channel EEG tracing (numbered leads 1-16 top to bottom) on p.973, showing a continuous, disorganized, chaotic high-amplitude mixture of slow waves and multifocal spikes across all channels with no normal background rhythm visible; calibration marks lower-left read '100 uV' (vertical bar) and '1 s' (horizontal bar). p.973 is the FIGURE page belonging to this question, not unrelated notes.",
  figAlt: "A 16-channel EEG tracing with amplitude and time calibration bars.",
  expl: "Clusters of sudden flexor spasms in an infant with developmental regression strongly suggest infantile spasms. The EEG typically shows a chaotic, high-voltage pattern called hypsarrhythmia.",
  note: "⚠️ SECOND NAMED TWIN GAP, SAME SHAPE AS n8/p.970: p.973 is NOT a genuinely absent twin and NOT unrelated teaching content -- it is the EEG figure for THIS question, mislabelled 'notes' by the index for the same reason as p.970 (an image-only page with calibration bars, no stem/options/highlight for a text detector to key on). The unanswered printing is split across p.972 (stem+options plain, no highlight, explicitly says 'the figure below') and p.973 (the EEG image, no stem/options/highlight). The answered page p.974 reprints stem+options+key+box but not the figure. Key highlighted on p.974: yellow box on \"E. Infantile spasms (West syndrome)\". Box (bordered, to the right of the options) transcribed verbatim into expl. Diagnosis-naming term 'hypsarrhythmia' appears only in the printed expl box, kept out of figAlt per brief SS6." },

{ n: 10, pr: 10, p: 976,
  key: 3,
  stem: "Emily, a normally fit and healthy 3-year-old girl, is rushed to the Emergency Department. She had been playing at the nursery and had banged her head against a door. Almost immediately, she went very pale and stiff and had jerking movements of her arms and legs for 20 seconds. Afterwards, she was groggy for a few minutes but is now back to her usual self. This has not happened before. Her mother is very distressed and now reports feeling sick herself. The triage nurse has performed a blood glucose test, which indicates a glucose level of 4.1 mmol/L (within normal range). Which of the following is the most likely diagnosis?",
  opts: ['Childhood absence epilepsy', 'Migraine', 'Syncope', 'Reflex asystolic syncope (reflex anoxic seizure)'],
  expl: "This brief episode of pallor, stiffness, and jerking after a minor head injury is typical of reflex anoxic seizure—a non-epileptic event caused by vagal overactivity and transient cardiac asystole. Recovery is usually quick, and no long-term management is needed",
  note: "Read on p.976 (answered) and cross-read on p.975 (unanswered twin, identical stem/options, no highlight -- confirmed). Only FOUR options (A-D) printed, no E -- confirmed on both printings. Key highlighted: yellow box on \"D. Reflex asystolic syncope (reflex anoxic seizure)\". Glucose value 4.1 mmol/L read directly off native image, legible, no crop needed. No figure. Printed box text ends with no closing full stop ('needed' with no period) -- transcribed exactly as printed." },

{ n: 11, pr: 11, p: 978,
  key: 2,
  stem: "Jennifer, an 11-year-old girl, is brought to the Emergency Department after collapsing at school. Her teacher described her standing in assembly, becoming pale, and collapsing to the floor. She had a couple of jerking movements of her limbs lasting a few seconds. She returned to normal promptly. Jennifer says that she had not eaten breakfast that morning and experienced a sensation of feeling hot, a black curtain coming in front of her eyes, sounds becoming distant, and feeling dizzy. The school nurse did a blood glucose test, which indicated a glucose level of 3.5 mmol/L (within the normal range). She has had two episodes similar to this in the past but has not presented to the hospital before. She has no other medical problems. Which of the following is the most likely diagnosis?",
  opts: ['Childhood absence epilepsy', 'Migraine', 'Syncope', 'Reflex asystolic syncope (reflex anoxic seizure)'],
  expl: "Jennifer's prodrome of dizziness, visual and auditory changes, and collapse in a standing position without postictal confusion is characteristic of vasovagal syncope. The few limb jerks are consistent with brief convulsive movements that can occur during syncope.",
  note: "Read on p.978 (answered) and cross-read on p.977 (unanswered twin, identical stem/options, no highlight -- confirmed). Only FOUR options (A-D), no E -- confirmed on both printings. Key highlighted: yellow box on \"C. Syncope\". Glucose value 3.5 mmol/L read directly off native image, legible, no crop needed. No figure. SHARED OPTION MENU (brief SS7): n10/p.976 and n11/p.978 print the identical four-option ladder in the same order (Childhood absence epilepsy / Migraine / Syncope / Reflex asystolic syncope) -- recorded as a pairing, not folded. Discriminating tokens: n10 = provoked by head-bang, no prodrome, key D (reflex anoxic seizure); n11 = standing/postural trigger with a visual+auditory prodrome ('black curtain', sounds distant, dizzy) and no head injury, key C (syncope)." },

{ n: 12, pr: 12, p: 980,
  key: 3,
  stem: "Rene is a lively 2-year-old boy who is seen in the acute paediatric assessment unit, having had an episode of turning blue and collapsing. This is not the first time this has happened. He recovers quickly after these events. During the consultation, his mother repeatedly gives him sweets to keep him calm. These episodes only occur when he is crying, and this has led to his mother trying to avoid anything that will upset him. He has no other medical problems. His blood glucose today is 4.9 mmol/L. Which of the following is the most likely diagnosis?",
  opts: ['Childhood absence epilepsy', 'Migraine', 'Narcolepsy', 'Blue breath-holding spells (expiratory apnoea syncope)'],
  expl: "Episodes occurring during crying, with cyanosis and collapse, suggest blue breath-holding spells a common benign condition in toddlers. These are not epileptic seizures and resolve spontaneously with age.",
  note: "Read on p.980 (answered) and cross-read on p.979 (unanswered twin, identical stem/options, no highlight -- confirmed). Only FOUR options (A-D), no E -- confirmed on both printings. Key highlighted: yellow box on \"D. Blue breath-holding spells (expiratory apnoea syncope)\". Glucose value 4.9 mmol/L read directly off native image, legible, no crop needed. No figure. Printed box text has no comma/joining word before 'a common benign condition' ('spells a common benign condition') -- transcribed exactly as printed." },

{ n: 13, pr: 13, p: 982,
  key: 0,
  stem: "Dora is an 8-year-old girl who attends the outpatient department. Her mother is worried because she used to be top of the class, but is not doing well at school this year. Whilst in the clinic, you notice that Dora has an episode where she suddenly stops what she is doing, stares ahead while flickering her eyelids for a couple of seconds, and then resumes her previous activity as if nothing had happened. You ask her to blow out an imaginary candle, and the same thing happens again. She is growing normally and is otherwise fit and well. Which of the following is the most likely diagnosis?",
  opts: ['Childhood absence epilepsy', 'Migraine', 'Syncope', 'Reflex asystolic syncope (reflex anoxic seizure)', 'Cardiac arrhythmia'],
  expl: "Dora's sudden staring episodes with eyelid fluttering and immediate recovery, especially when provoked by hyperventilation, are classic for absence seizures. EEG would show a 3 Hz spike-and-wave pattern.",
  note: "Read on p.982 (answered) and cross-read on p.981 (unanswered twin, identical stem/options, no highlight -- confirmed). Key highlighted: yellow box on \"A. Childhood absence epilepsy\". No figure." },

{ n: 14, pr: 14, p: 984,
  key: 0,
  stem: "Damasco is a 6-year-old Black boy who presents in the paediatric clinic. He has been referred because his brother, with whom he shares a room, has woken his parents early in the morning on several occasions complaining that Damasco is making unusual sounds and drooling from his mouth. By the time his parents come to the room, Damasco is jerking his upper and lower limbs rhythmically. This lasts for 1–2 minutes. Afterwards, Damasco complains of a funny sensation on the left side of his mouth, and then goes back to sleep. He is doing well at school, and the clinical examination is normal. He has no other medical problems. What is the most likely diagnosis?",
  opts: ['Childhood Rolandic epilepsy (benign epilepsy with centrotemporal spikes)', 'Childhood absence epilepsy', 'Juvenile myoclonic epilepsy', 'Lennox-Gastaut syndrome'],
  expl: "This epilepsy often occurs in sleep, with symptoms like facial twitching, drooling, and retained awareness. It is self-limiting and commonly presents in school-aged children with normal development.",
  note: "Read on p.984 (answered) and cross-read on p.983 (unanswered twin, identical stem/options, no highlight -- confirmed). Only FOUR options (A-D), no E -- confirmed on both printings. Key highlighted: yellow box on \"A. Childhood Rolandic epilepsy (benign epilepsy with centrotemporal spikes)\". No figure. En dash printed in '1–2 minutes' reproduced as printed." },

{ n: 15, pr: 15, p: 986,
  key: 2,
  stem: "Jude is a 14-year-old boy who is on treatment for generalized tonic-clonic and absence seizures. He attends a routine clinic appointment complaining of regularly spilling his tea in the morning because his arm jerks involuntarily. These jerks are worse if he has stayed up late the night before. He is doing relatively well at school. What is the most likely diagnosis?",
  opts: ['Childhood Rolandic epilepsy (benign epilepsy with centrotemporal spikes)', 'Childhood absence epilepsy', 'Juvenile myoclonic epilepsy', 'Lennox-Gastaut syndrome', 'Infantile spasms (West syndrome)'],
  expl: "Morning myoclonic jerks (spilling tea), generalized seizures, and worsening with sleep deprivation are hallmark features of juvenile myoclonic epilepsy. It typically starts in adolescence and may require lifelong treatment",
  note: "Read on p.986 (answered) and cross-read on p.985 (unanswered twin, identical stem/options, no highlight -- confirmed). Key highlighted: yellow box on \"C. Juvenile myoclonic epilepsy\". No figure. Printed box text ends with no closing full stop ('treatment' with no period) -- transcribed exactly as printed. THIS IS THE LAST ENTRY OF PART A (n=1..15, pp.955-986)." },

/* Peds ENDPOINT PART 2 -- section 8 "Neurological disorders" -- STAGING part B, n:16-30.
   Source: Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf (READ-ONLY, never modified).
   Pages staged (answered only), per task prompt / page-map.md run 4 (974-1036, even parity):
   988, 990, 992, 994, 996, 998, 1000, 1002, 1004, 1006, 1008, 1010, 1012, 1014, 1016.
   Rendered locally with pdftoppm -jpeg -r 150 to session scratchpad ep2-s08-B\ (the shared
   <SCRATCH>\ep2-index cache named in the brief did not exist in this session -- rendered fresh).
   OCR NOT opened for this pass (per brief section 4) -- page structure taken from task prompt
   and endpoint-p2-s08-page-map.md only.
   This is a STAGING HALF: bare {...} object literals separated by one blank line, NO commas,
   NO array wrapper -- merge-parts-ep2.js restores both. node --check on this file will fail
   meaninglessly; validate with node tools/bank-harness/check-part-ep.js <this file>.

   Header extended as entries are appended. Question-number walk (pr) recorded per entry below.

   FINAL, 15/15 staged, n:16-30, all validated clean with check-part-ep.js.
   Question-number walk: pr 16,17,18,19,20,21,22,23,24,25,26,27,28,29,30 -- pr === n throughout,
   NO drift anywhere in this run (every printed number equals its n).
   Options a/A style: pages 988-1006 print options as A/B/C/D(/E) uppercase; pages 1008-1016
   print them lowercase a/b/c/d(/e) -- transcribed exactly as printed on each page, not normalised.
   Option counts: 12 entries with 5 options, 3 entries with only 4 (n19, n20's twin has 5 but n19
   itself has 4; n28 has 4). No entry had fewer than 4 or more than 5.
   No figures anywhere in this run -- every one of the 15 answered pages was read whole and none
   printed an image; this is a measured zero, not an assumed one.
   No overflow explanation box on its own page in this run -- every answered page's box (or absence
   of one) sits on the same page as its question; all 15 pages DID print a box (none blank).
   No alternation break in this run -- strict answered/unanswered/answered/unanswered pairing held
   for all 15 pages, twin always at p-1, matching the page-map's "run 4, even parity, twin at p-1"
   prediction exactly.
   Shared option menu observed: n17 (p.990), n18 (p.992) and n20 (p.996) all print the same
   5-option ladder (Babinski's/Romberg's/Gower's/Kernig's sign, Chorea) -- recorded as a pairing
   in each entry's note, NOT folded. n19 (p.994) prints only 4 of those 5 (no Chorea).
   Numbers/units checked: "3 Hz" (n22, p.1000), "1+" (n26, p.1008), "24 hours"/"15 minutes" (n27,
   p.1010) -- all read plainly off the 150 dpi render, no superscript/exponent ambiguity anywhere
   in this run; none needed a 300 dpi crop.
   No page in this run disagreed with the page-map's prediction (run 4, pp.974-1036, even-page
   answered parity, clean twin at p-1) -- the two flagged uncertain twins (971/974) are outside
   this part's range (they belong to part A).
   Boundary proof: p.1017 rendered and read -- prints pr:31 ("A child presents with headache,
   decreased school performance, unsteady gait, and weakness in the upper limb...", plain/
   unanswered, options a-d only) -- confirms the part B/C boundary falls cleanly after p.1016,
   matching the page map's part C start at p.1018.
*/

{ n:16, pr:16, p:988, key:3,
  stem:'Andrew is a 5-year-old boy with severe learning difficulties who attends a special school. He is seen in his review clinic. His epilepsy is difficult to control and he is on two different antiepileptic medications. He has several different types of seizures: sudden stiffening of his limbs causing him to fall, episodes of staring blankly ahead for up to 30 seconds before resuming previous activities, and episodes of his head dropping with a brief loss of consciousness. He is fed via gastrostomy and has chronic drooling. What is the most likely diagnosis?',
  opts:['Childhood Rolandic epilepsy (benign epilepsy with centrotemporal spikes)','Childhood absence epilepsy','Juvenile myoclonic epilepsy','Lennox-Gastaut syndrome'],
  expl:'Multiple seizure types, developmental delay, and drug resistance suggest Lennox-Gastaut syndrome. It typically begins in early childhood and includes atonic, tonic, and absence seizures.',
  note:'p.988 answered (D highlighted yellow, underlined, bold). Twin at p.987 confirmed identical stem and options plain, no highlight, no box -- consistent with the answered/unanswered pair. Key seen highlighted: option D, "Lennox-Gastaut syndrome".' },

{ n:17, pr:17, p:990, key:2,
  stem:'Ahmed is a 5-year-old boy who presents to the outpatient clinic with weakness. His parents report that he finds it difficult to climb the stairs at home. This has been becoming progressively worse over the preceding 6–12 months. He is playing on the carpet with his brother when his mother calls him over. He has to roll from his back onto his front in order to stand up. What is the sign being described in this clinical scenario?',
  opts:["Babinski's sign","Romberg's sign","Gower's sign","Kernig's sign",'Chorea'],
  expl:'Gower’s sign indicates proximal muscle weakness, as seen when a child must use their hands to push off from the floor. It’s characteristic of muscular dystrophies such as Duchenne’s.',
  note:'p.990 answered (C highlighted yellow, underlined, bold). Twin at p.989 confirmed identical stem and options plain, no highlight, no box. Key seen highlighted: option C, "Gower\'s sign".' },

{ n:18, pr:18, p:992, key:0,
  stem:'Christopher attends an outpatient clinic for his routine follow-up. He is a 3-year-old boy who did not breathe at birth. Following resuscitation, he required intensive care for the first 5 days of life. He now has increased tone and reflexes in his right upper and lower limbs. On rubbing a blunt instrument up the lateral side of his right foot, there is extension of the great toe and fanning of the other toes. Which of the following is the sign being described in this clinical scenario?',
  opts:["Babinski's sign","Romberg's sign","Gower's sign","Kernig's sign",'Chorea'],
  expl:'Extension of the great toe and fanning of the other toes on plantar stimulation is a positive Babinski sign, indicating an upper motor neuron lesion. It’s abnormal beyond infancy.',
  note:'p.992 answered (A highlighted yellow, underlined, bold). Twin at p.991 confirmed identical stem and options plain, no highlight, no box. Key seen highlighted: option A, "Babinski\'s sign". Same 5-option menu as pr17/n17 (p.990) -- SHARED MENU, recorded per brief section 7, not folded; discriminating token here is the plantar/Babinski-response stem vs the Gower/proximal-weakness stem at n17.' },

{ n:19, pr:19, p:994, key:1,
  stem:'Sayeed is an 8-year-old Pakistani boy who has developed muscle weakness. His mother reports that he has poor coordination at home and school. His speech has also recently become slurred. His symptoms have gradually progressed over the last 12–18 months. He has no other medical history and is not on any medications. On examination, you notice wasting of his calves. When standing upright with his legs together and closing his eyes, he becomes unsteady and starts to sway. Which of the following is the sign being described in this clinical scenario?',
  opts:["Babinski's sign","Romberg's sign","Gower's sign","Kernig's sign"],
  expl:'Romberg’s sign is positive when a patient becomes unsteady with eyes closed, indicating a proprioceptive or sensory ataxia. This can occur in conditions affecting the dorsal columns or peripheral nerves.',
  note:'p.994 answered (B highlighted yellow, underlined, bold). Twin at p.993 confirmed identical stem and options plain, no highlight, no box. Only 4 options printed here (A-D), no E -- differs from the 5-option menu at n17/n18. Key seen highlighted: option B, "Romberg\'s sign".' },

{ n:20, pr:20, p:996, key:3,
  stem:'Paolo is a 7-year-old boy who presents to the Accident and Emergency Department with fever. His mother reports that he has had fever for the last 8 hours and that he is sleepy and prefers to stay in a dark room. He has no prior medical history. On examination, you note that he is photophobic. While lying on the couch, you flex his right knee and hip to 90°. Upon fully extending the knee, he complains of pain and arches his back. Which of the following is the sign being described in this clinical scenario?',
  opts:["Babinski's sign","Romberg's sign","Gower's sign","Kernig's sign",'Chorea'],
  expl:'Pain and resistance when extending the knee from a flexed hip position suggests meningeal irritation. This is a classic sign of meningitis.',
  note:'p.996 answered (D highlighted yellow, underlined, bold). Twin at p.995 confirmed identical stem and options plain, no highlight, no box. Key seen highlighted: option D, "Kernig\'s sign". Same 5-option sign-menu family as n17/n18 (Babinski/Romberg/Gower/Kernig/Chorea) -- SHARED MENU across n17,18,20 (n19 prints only 4 of the 5); discriminating token here is the Kernig manoeuvre / meningismus stem.' },

{ n:21, pr:21, p:998, key:0,
  stem:'A 14-month-old boy is seen in the clinic because his mother is concerned that he may be having seizures. The episodes occur when he is angry or upset. They are characterized by a color change, followed by collapse and occasional jerking movements. The most likely diagnosis is?',
  opts:['Breath-holding spells','Tet spells','Myoclonic epilepsy','Non-epileptic seizure','Vasovagal syncope'],
  expl:'Triggered by anger or frustration, these episodes involve breath-holding, color change, and brief loss of consciousness. They are benign and self-limiting.',
  note:'p.998 answered (A highlighted yellow, underlined, bold). Twin at p.997 confirmed identical stem and options plain, no highlight, no box. Key seen highlighted: option A, "Breath-holding spells".' },

{ n:22, pr:22, p:1000, key:1,
  stem:'A 6-year-old boy is falling behind at school. His mother is concerned that he is inattentive. She describes him as frequently daydreaming, during which it is difficult to attract his attention. Routine blood tests are normal. An EEG demonstrates 3 Hz spike-and-wave discharges. The most likely diagnosis is which of the following?',
  opts:['ADHD, inattentive type','Absence seizures','Juvenile myoclonic epilepsy','Daydreaming','Non-epileptic seizures'],
  expl:'Brief, frequent staring spells and EEG showing 3 Hz spike-and-wave discharges confirm absence seizures. These are often misinterpreted as inattention or daydreaming.',
  note:'p.1000 answered (B highlighted yellow, underlined, bold). Twin at p.999 confirmed identical stem and options plain, no highlight, no box. "3 Hz" read plainly on the image, no exponent/superscript involved. Key seen highlighted: option B, "Absence seizures".' },

{ n:23, pr:23, p:1002, key:3,
  stem:'A 5-month-old boy is brought in by his mother due to frequent irritability. She is concerned that he may be in pain, as he frequently tenses and bends his head upward while flailing his arms for a few seconds at a time. An EEG shows large-amplitude slow waves with spikes and sharp waves. The most likely diagnosis is which of the following?',
  opts:['Absence seizures','Benign rolandic epilepsy','Gastro-oesophageal reflux','West syndrome (infantile spasms)','Breath-holding attacks'],
  expl:'Sudden flexor spasms with developmental regression in infancy and a characteristic EEG (hypsarrhythmia) indicate West syndrome. It requires urgent treatment to prevent long-term neurological damage.',
  note:'p.1002 answered (D highlighted yellow, underlined, bold). Twin at p.1001 confirmed identical stem and options plain, no highlight, no box. Key seen highlighted: option D, "West syndrome (infantile spasms)".' },

{ n:24, pr:24, p:1004, key:1,
  stem:'An 8-year-old girl presents with a second generalized tonic-clonic seizure. It required lorazepam to terminate, and a decision was made to start anti-epileptic treatment. Which of the following is first-line therapy?',
  opts:['Phenobarbital','Sodium valproate','Vigabatrin','Ethosuximide','Phenytoin'],
  expl:'Sodium valproate is first-line for generalized tonic-clonic seizures in children. It’s effective for multiple seizure types but may have teratogenic risks in females of childbearing age.',
  note:'p.1004 answered (B highlighted yellow, underlined, bold). Twin at p.1003 confirmed identical stem and options plain, no highlight, no box. Key seen highlighted: option B, "Sodium valproate".' },

{ n:25, pr:25, p:1006, key:4,
  stem:'A 9-year-old girl is brought to her GP with a 2-month history of headaches. Which of the following features of her headaches is not a red-flag symptom?',
  opts:['Associated with vomiting','Morning headache','Worse on lying down','Presence of focal neurology','Symmetrical, band-like in nature'],
  expl:'Symmetrical, tension-type headaches are not a red-flag symptom. Red flags include vomiting, early morning headaches, postural worsening, and focal neurological signs, which may suggest raised intracranial pressure.',
  note:'p.1006 answered (E highlighted yellow, underlined, bold). Twin at p.1005 confirmed identical stem and options plain, no highlight, no box. Key seen highlighted: option E, "Symmetrical, band-like in nature".' },

{ n:26, pr:26, p:1008, key:0,
  stem:'A girl experienced diarrhea 3 days before manifestation "progressive weakness and inability to walk. Examination reveals marked peripheral symmetrical muscles weakness without atrophy. Deep tendon reflexes were absent in the ankles and 1+ in the knees. The MOST likely diagnosis is:',
  opts:['Guillain-Barré syndrome','Transverse myelitis','Myasthenia gravis','Muscular dystrophy','Poliomyelitis'],
  expl:'Guillain-Barré often follows an infection like diarrhea. It causes symmetrical ascending weakness with reduced or absent reflexes, but no muscle atrophy.',
  note:'p.1008 answered (a highlighted yellow, underlined, bold). Twin at p.1007 confirmed identical stem and options plain, no highlight, no box. Key seen highlighted: option a, "Guillain-Barré syndrome". Options are printed lowercase a-e on this page (unlike A-E on preceding pages) -- transcribed as printed, not normalised. Stem carries an unbalanced opening double-quote before "progressive -- reproduced verbatim as printed.' },

{ n:27, pr:27, p:1010, key:0,
  stem:'The following is NOT characteristic of typical (simple) febrile convulsion:',
  opts:['May recur in 24 hours','Last less than 15 minutes','Always generalized','No post-ictal manifestations','Not preceded by previous non-febrile seizures'],
  expl:'Simple febrile seizures are generalized, last <15 minutes, and occur once per febrile illness. Recurrence within 24 hours or being focal suggests a complex febrile seizure, not simple.',
  note:'p.1010 answered (a highlighted yellow, underlined, bold). Twin at p.1009 confirmed identical stem and options plain, no highlight, no box. Key seen highlighted: option a, "May recur in 24 hours". Lowercase a-e options, same as n26. Explanation box bolds "complex febrile seizure" -- bold not reproducible in this plain-text field, noted here.' },

{ n:28, pr:28, p:1012, key:0,
  stem:'Which of the following is true about antiepileptic drugs (AEDs)?',
  opts:['All AEDs have side effects','Using multiple drugs is the preferred first-line approach','All cases of epilepsy should automatically receive AEDs','AEDs have no long-term adverse effects'],
  expl:'All antiepileptic drugs carry potential side effects. Not every seizure needs lifelong AEDs, and monotherapy is usually preferred over multiple drugs initially.',
  note:'p.1012 answered (a highlighted yellow, underlined, bold). Twin at p.1011 confirmed identical stem and options plain, no highlight, no box. Only 4 options printed (a-d), no e. Key seen highlighted: option a, "All AEDs have side effects".' },

{ n:29, pr:29, p:1014, key:0,
  stem:'In a 3-year-old boy with delay in gross motor development (still unable to walk), the most important initial investigation is:',
  opts:['Creatine kinase','MRI brain','Blood for chromosomes','Urine for amino and organic acids','Assessment by an educational speech and language therapist'],
  expl:'High CK indicates muscular dystrophy like Duchenne’s, which is a key cause of delayed walking. This is the first test before moving to imaging or genetics.',
  note:'p.1014 answered (a highlighted yellow, underlined, bold). Twin at p.1013 confirmed identical stem and options plain, no highlight, no box. Key seen highlighted: option a, "Creatine kinase".' },

{ n:30, pr:30, p:1016, key:1,
  stem:'A 13-year-old boy presents to A&E one morning after an episode of unconsciousness, a convincing history of which was obtained from his mother. She had witnessed his eyes rolling upwards, a fall to the floor, jerking of all four limbs and his lips going blue. He had been incontinent. He had been assessed in a general medical clinic 3 years earlier complaining of sudden brief bilateral \'jerks\' occurring largely in the morning after waking. Neurological examination is normal. What is the most likely diagnosis?',
  opts:['Complex partial epilepsy','Juvenile myoclonic epilepsy','Hypoxic myoclonus',"Wilson's disease",'Pseudo-seizures'],
  expl:'Juvenile myoclonic epilepsy typically presents with morning myoclonic jerks and generalized seizures in adolescence. It often needs lifelong AED treatment.',
  note:'p.1016 answered (b highlighted yellow, underlined, bold). Twin at p.1015 confirmed identical stem and options plain, no highlight, no box. Key seen highlighted: option b, "Juvenile myoclonic epilepsy". BOUNDARY CHECK: rendered one page past range, p.1017, which prints pr:31 ("A child presents with headache, decreased school performance, unsteady gait, and weakness in the upper limb...") plain/unanswered with only 4 options (a-d) -- this is the first page of part C\'s range per the page map (part C starts p.1018), confirming the part B/C boundary sits cleanly after p.1016.' },

/* Peds endpoint part 2, section 8 "Neurological disorders", part C.
   n:31-45, pr as printed, p:PDF page of the ANSWERED page.
   Staged from native 800x450 JPEGs cached at
   C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\0ffb5f86-a1df-4f33-a8c4-fc32a73946ba\scratchpad\ep2-index\native\
   (shared cache found under a different session id in the same project's
   temp tree; not re-rendered). OCR NOT consulted for transcription, per brief
   section 4. This is a bare sequence of comma-free object literals; validate
   with node tools/bank-harness/check-part-ep.js, never node --check.
   Pages: 1018,1020,1022,1024,1026,1028,1030,1032,1034,1036,1039,1041,1043,1045,1047
   (per-brief parity flip at 1036->1039, notes page 1037 in between). */

{ n:31, pr:31, p:1018, key:0,
  stem:'A child presents with headache, decreased school performance, unsteady gait, and weakness in the upper limb. What is the most likely diagnosis?',
  opts:['Brain tumor','Epilepsy','Migraine','Peripheral neuropathy'],
  expl:'A brain tumor can cause progressive headaches, motor weakness, and balance problems. Epilepsy or migraine wouldn\u2019t explain this progressive neurological decline.',
  note:'Twin at p1017 (unanswered) matches exactly. Key "a. Brain tumor" highlighted yellow, bold, underlined.' },

{ n:32, pr:32, p:1020, key:0,
  stem:'Which of the following is true about antiepileptic drug treatment?',
  opts:['Not all cases need treatment','All patients must start multidrug therapy','All seizures require immediate lifelong AEDs','AEDs have no side effects'],
  expl:'Not every seizure requires antiepileptic drug (AED) therapy. for example, a single provoked seizure (like with fever or hypoglycemia) often does not. When AEDs are needed, treatment usually starts with monotherapy, and all AEDs carry potential side effects. Lifelong treatment is not always necessary unless the epilepsy type (e.g., juvenile myoclonic epilepsy) requires it.',
  note:'Twin at p1019 matches exactly. Key "a. Not all cases need treatment" highlighted yellow, bold, underlined. In the printed box, the word "monotherapy" is in red text; captured as plain text, colour not reproducible in this schema. Lowercase "for example" after full stop is printed as-is.' },

{ n:33, pr:33, p:1022, key:0,
  stem:'Dalia, an 18-month-old girl, is reviewed in the pediatric clinic. She is unsteady on her feet but has normal vision and gaze. She walks with a limp and tends to fall to her left side. Her limb tone and reflexes show the following: ● Right arm: Tone: normal Reflexes: normal ● Left arm: Tone: increased Reflexes: brisk ● Right leg: Tone: normal Reflexes: normal ● Left leg: Tone: increased Reflexes: brisk Which is the site of her neurological lesion?',
  opts:['Upper motor neuron lesion','Lower motor neuron lesion','Cerebellar lesion','Basal ganglia lesion','Neuromuscular junction'],
  expl:'Increased tone and brisk reflexes point to an upper motor neuron problem. Lower motor neuron lesions cause flaccid weakness and fasciculations instead.',
  note:'Twin at p1021 matches exactly, 5 options both pages. Key "a. Upper motor neuron lesion" highlighted yellow, bold, underlined. The four bullet markers before each limb-tone line are round pink dots, transcribed as ●; not a figure, just a stem bullet glyph.' },

{ n:34, pr:34, p:1024, key:0,
  stem:'Which of the following is not true about cerebral palsy?',
  opts:['Meningitis/encephalitis is the most common cause.','Preterm infants are more vulnerable','Spastic form is the most common.','Clinical manifestations can evolve over time.','Often accompanied by disturbances of cognition.'],
  expl:'Cerebral palsy is usually caused by antenatal or perinatal brain injury (e.g., prematurity, hypoxic-ischemic insult), not meningitis/encephalitis. Spastic type is most common, and associated problems like cognitive issues may occur.',
  note:'Twin at p1023 matches exactly, 5 options both pages. Key "a. Meningitis/encephalitis is the most common cause." highlighted yellow, bold, underlined. Note the inconsistent terminal punctuation across options (some end with a period, b has none) is printed as-is on both pages.' },

{ n:35, pr:35, p:1026, key:0,
  stem:'About typical febrile seizures, all are true EXCEPT:',
  opts:['Focal or generalized','Occur in children 6 months–5 years','Last less than 15 minutes','No neurological deficit afterward'],
  expl:'Typical febrile seizures are generalized, short (<15 min), occur in children 6 months–5 years, and have no neurological deficit afterward. Focal features suggest atypical febrile seizures.',
  note:'Twin at p1025 matches exactly. Key "a. Focal or generalized" highlighted yellow, bold, underlined. "atypical" printed in italics inside the box; captured as plain text.' },

{ n:36, pr:36, p:1028, key:0,
  stem:'Which of the following is NOT true about cerebral palsy (CP)?',
  opts:['Progressive disorder','Non-progressive brain injury','Motor impairment is the main feature','Usually appears in early childhood'],
  expl:'CP results from a non-progressive brain injury, meaning the brain insult does not worsen over time. However, clinical manifestations may change as the child grows',
  note:'Twin at p1027 matches exactly. Key "a. Progressive disorder" highlighted yellow, bold, underlined. Box text has no terminal punctuation after "grows", printed as-is. "non-progressive" italicised in box, captured as plain text.' },

{ n:37, pr:37, p:1030, key:3,
  stem:'A 16-year-old woman was noted by her boyfriend to have multiple episodes of collapse. It occurred six times in a 1-week period. Each time the patient would collapse abruptly with her eyes closed. After 2-5 min, patient would wake up and would feel weak. There was no confusion after the attack and the patient was well between attacks. What is the diagnosis?',
  opts:['Atonic seizure','Vasodepressive syncope','Vasovagal syncope','Pseudo-seizures','Complex partial seizure'],
  expl:'The episodes involve eye closure, recovery without confusion, and normal periods between attacks, which point to psychogenic non-epileptic seizures. True epileptic seizures usually cause post-ictal confusion.',
  note:'Twin at p1029 matches exactly, 5 options both pages. Key "d. Pseudo-seizures" highlighted yellow, bold, underlined (index 3, zero-based). Box is positioned beside options c/d rather than below the stem, but reads as one continuous printed box; captured whole.' },

{ n:38, pr:38, p:1032, key:1,
  stem:'A 15-year-old girl presents with a generalised tonic-clonic seizure. There is a history of dropping objects during breakfast-time and when she is tired. Her EEG shows bilateral spike and polyspike and wave discharges. Which of the following is the correct course of action?',
  opts:['Recommend antiepileptic drug treatment and wean if seizure-free after 2 years','Recommend antiepileptic drug treatment for life','Request a CT brain scan','Request an MRI brain scan','Start carbamazepine'],
  expl:'This is juvenile myoclonic epilepsy (JME), characterized by morning myoclonic jerks and tonic-clonic seizures. JME requires lifelong treatment, as relapses are common if drugs are stopped.',
  note:'Twin at p1031 matches exactly, 5 options both pages. Key "b. Recommend antiepileptic drug treatment for life" highlighted yellow, bold, underlined (index 1, zero-based). "juvenile myoclonic epilepsy" italicised in box, captured as plain text.' },

{ n:39, pr:39, p:1034, key:0,
  stem:'A toddler cries, holds his breath, and turns blue, with a brief period of loss of consciousness. What is the most likely diagnosis?',
  opts:['Blue breath-holding spells','Seizure disorder','Cardiac arrhythmia','Syncope due to dehydration'],
  expl:'These are benign episodes triggered by crying, leading to breath-holding, cyanosis, and brief unconsciousness. They are not epileptic seizures.',
  note:'Twin at p1033 matches exactly. Key "a. Blue breath-holding spells" highlighted yellow, bold, underlined.' },

{ n:40, pr:40, p:1036, key:3, box:1037,
  stem:'Clara, a cheerful 20-month-old girl, is referred to the child development clinic by her health visitor because she is not yet walking. She was born at term with no complications. She learnt to sit without support at 10 months, and is able to crawl, although she drags her right leg behind her. Her mother says that she has always been left-handed. Examination of the right arm and leg reveals reduced power but increased tone and reflexes. Which of the following investigations would you choose to confirm the diagnosis of developmental delay?',
  opts:['Chromosome karyotype','Congenital infection screen','Creatine kinase','CT or MRI scan of the brain','Thyroid function tests'],
  expl:'Clara has motor delay with early hand preference, right-sided weakness, increased tone and reflexes → classic for hemiplegic cerebral palsy from a perinatal brain insult (e.g., stroke). 👉 The investigation that confirms the diagnosis and shows the underlying lesion is brain imaging (MRI',
  note:'p1036 (answered, key highlighted) prints NO box; twin at p1035 matches p1036 stem/options exactly. Per brief SS3a, opened next page 1037, confirmed at 300dpi crop p1037hi-1037.jpg: a genuine overflow explanation box (small side box, reduced font, bordered) for this question, matching the "box printed alone on next page" shape, NOT a preceding teaching slide and NOT the map\'s plain "notes" classification -- the page-map only records the classifier tag (kind:notes), which the brief warns is exactly how an overflow box is mis-tagged. The box text is ITSELF truncated mid-word at "brain imaging (MRI" with no closing text below it on the page (confirmed at 300dpi -- large blank space follows, not a render artefact); transcribed verbatim including the truncation, no text invented to complete it. Key "d. CT or MRI scan of the brain" highlighted yellow, bold, underlined (index 3, zero-based) -- consistent with the box\'s "brain imaging (MRI" being the answer key.' },

{ n:41, pr:41, p:1039, key:2,
  stem:'What age does autism spectrum disorder usually become evident?',
  opts:['0–12 months','12–24 months','2–4 years','4–8 years','Above 8 years'],
  expl:'Autism spectrum disorder usually presents at this age because this is when language and social skills rapidly develop',
  note:'SEAM CHECK per prompt: confirmed p1038 is the clean unanswered twin of p1039, stem/options match exactly. p1037 (between 1036 and 1039) is the overflow box for n:40, not a plain separator -- see n:40 note. Key "c. 2-4 years" highlighted yellow, bold, underlined (index 2, zero-based). Box has no terminal punctuation after "develop", printed as-is.' },

{ n:42, pr:42, p:1041, key:3,
  stem:'The parents of a 6-year-old girl report that she frequently stares blankly at her teachers for a few seconds and her academic performance has declined. What is the most helpful investigation to reach the diagnosis?',
  opts:['Brain MRI','Brain CT','Fundus examination','EEG study','EMG study'],
  expl:'Brief episodes of blank staring in a child suggest absence seizures. EEG is the most helpful diagnostic tool to confirm generalized 3 Hz spike-and-wave discharges characteristic of this condition.',
  note:'Twin at p1040 matches exactly, 5 options both pages. Key "d. EEG study" highlighted yellow, bold, underlined (index 3, zero-based).' },

{ n:43, pr:43, p:1043, key:4,
  stem:'A 12-year-old girl is referred for a 6-month history of headaches. These started off as a unilateral throbbing pain associated with nausea but have since become a continuous and generalised ache. The symptoms initially improved with painkillers but this is no longer the case, despite taking regular paracetamol and ibuprofen. She is now missing school and her parents are concerned. Examination reveals a slim, anxious-looking girl who is otherwise healthy. What is the most appropriate course of action?',
  opts:['Perform a lumbar puncture to measure CSF pressure','Refer to the Psychology Department for counselling','Request an MRI brain scan','Speak to the school about the possibility of bullying','Stop her taking the painkillers'],
  expl:'This is medication overuse headache. Stopping regular analgesics is the first step in management.',
  note:'Twin at p1042 matches exactly, 5 options both pages. Key "e. Stop her taking the painkillers" highlighted yellow, bold, underlined (index 4, zero-based). "medication overuse headache" italicised in box, captured as plain text.' },

{ n:44, pr:44, p:1045, key:1,
  stem:'A 13-year-old girl with epilepsy attends the outpatient clinic for review. Her seizure frequency has increased and the type of seizures she is experiencing has varied. You suspect psychogenic non-epileptic seizures (PNES). Which of the following would be more typical of a PNES?',
  opts:['Events are shorter than her usual seizures','Her eyes are closed tightly during events','Prolactin is raised on blood taken after a seizure','There is a rapid response to anticonvulsants','There is urinary or faecal incontinence'],
  expl:'In true epileptic seizures, eyes are usually open. Tight eye closure suggests psychogenic seizures.',
  note:'Twin at p1044 matches exactly, 5 options both pages. Key "b. Her eyes are closed tightly during events" highlighted yellow, bold, underlined (index 1, zero-based).' },

{ n:45, pr:45, p:1047, key:0,
  stem:'Which of the following is not typical for a febrile seizure?',
  opts:['Recurrence or may be focal and generalized','Occurs in children 6 months to 5 years','Usually lasts less than 15 minutes','No underlying CNS infection or metabolic cause'],
  expl:'Simple febrile seizures are generalized, single, short, and occur without CNS infection. Recurrence or focality indicates complex febrile seizures.',
  note:'Twin at p1046 matches exactly. Key "a. Recurrence or may be focal and generalized" highlighted yellow, bold, underlined. "complex" italicised in box, captured as plain text. BOUNDARY CHECK: rendered one page past range, p1048, which prints Q46 "Brain death occurs after how many minutes of complete cerebral ischemia?" (unanswered, 4 options a-d 4-8/8-10/12-15/15-20 min) -- this is n:46, the first entry of part D, confirming my range ends correctly at n:45/p1047.' },

/* Peds endpoint part 2, section 8 "Neurological disorders", part D.
   n:46 - n:60 (section-global, continues part C which ends at n:45 per the page map).
   Pages addressed from content\peds\qb-pages\endpoint-p2-s08-page-map.md part D row:
   1049, 1051, 1053, 1055, 1057, 1059, 1061, 1063, 1065, 1067, 1069, 1071, 1073, 1075, 1077
   (all odd, final odd run of the section per the map's parity table). Twin is p-1 for all
   15 per the map (only 971/974 in part A lack a clean twin).
   OCR NOT opened. Source images read from the pre-built extraction cache
   (native JPEG + hires PNG under a sibling session's scratchpad ep2-index\, per brief SS2 --
   "the images are already extracted, do not re-run the extractor") after copying the needed
   pages into this session's own scratchpad.
   Boundary carried by this part: p.1077 is the section's last question (map), p.1078 its last
   page; both p.1078 and p.1079 rendered and read per prompt instruction before staging closed.

   CLOSED 2026-09-05. 15 entries, n:46-n:60, pp.1049-1077, all clean at check-part-ep.js.
   Printed number tracked n exactly at every page (pr==n throughout, 46..60) -- no drift found
   in this part. No figures on any of the 15 pages -- measured by looking at every page whole,
   none carried an image. No overflow box (all 15 answered pages print their own box on the
   same page; none needed a twin lookaround). No alternation break within this part's range
   (every page checked was the answered page, boxed, at p-1 from its twin, per the map).
   Boundary: p.1078 is a full-page Arabic supplication on a mauve background (no stem, no
   options, no box) -- matches the brief's SS3a "duplicate reprint / preceding slide" catalogue
   shape "a duplicate reprint... a full-page Arabic supplication closing the section" (p.244,
   section 3); NOT staged. p.1079 opens section 9 with the red banner "Diabetes & Endocrinology"
   on a cream card -- confirms the section-8/section-9 boundary exactly where the prompt and the
   page map both said it would be. Nothing in the map or the prompt was contradicted by the disk
   in this part. */

{ n:46, pr:46, p:1049, key:0,
  stem:'Brain death occurs after how many minutes of complete cerebral ischemia?',
  opts:['4–8 min','8–10 min','12–15 min','15–20 min'],
  expl:'The brain cannot survive without blood supply beyond 4–8 minutes, leading to irreversible brain death.',
  note:'Twin p.1048 identical plain printing, confirms stem/opts. Highlighted option a (4-8 min), boxed explanation below options. pr==n at this first page of the part.' },

{ n:47, pr:47, p:1051, key:0,
  stem:'Ahmed is a 5-year-old boy who presents to the outpatient clinic with weakness. His parents report that he finds it difficult to climb the stairs at home. This has been becoming progressively worse over the preceding 6–12 months. He is playing on the carpet with his brother when his mother calls him over, he has to roll from his back onto his front in order to stand up. Choose the sign that is being described.',
  opts:["Gowers sign","Kernig's sign","Brudzinski's sign","Babinski's sign","Dyskinesia"],
  expl:'Gowers sign: Characteristic maneuver where a child with proximal muscle weakness (commonly Duchenne muscular dystrophy) uses his hands to “climb up” his own body from the floor in order to stand.',
  note:'Highlighted option a (Gowers sign), boxed explanation beside options (not below). Legible directly on native image, twin not needed.' },

{ n:48, pr:48, p:1053, key:1,
  stem:'Amany is a 6-year-old girl who presents to the outpatient department with a history of recurrent headaches and deteriorating school performance. Her parents are very worried about her as they observed that she has a problem in walking. On further questioning she had been well with no preceding coryzal illness. On examination, she is very unsteady on feet and her power is reduced in her lower limbs. She has no obvious visual problems and seems able to follow objects at the clinic. What is the most likely underlying cause?',
  opts:['cerebral abscess','Brain tumor',"Guillain-Barre syndrome",'Septic meningitis','Viral encephalitis'],
  expl:'Chronic progressive symptoms with raised ICP and motor impairment strongly suggest a brain tumor',
  note:'Highlighted option b (Brain tumor), boxed explanation beside options. Legible directly on native image.' },

{ n:49, pr:49, p:1055, key:0,
  stem:'Dora is an 8-year-old girl who used to excel at school but is now underperforming. In clinic, she has brief episodes where she suddenly stops, stares ahead, flickers her eyelids for a few seconds, and then resumes her activity. Asking her to perform an action like blowing out an imaginary candle triggers the same episode. She is otherwise healthy. What is the most likely diagnosis?',
  opts:['Absence seizures','Focal seizures','Myoclonic seizures','Tonic-clonic seizures'],
  expl:'Absence seizures are brief staring episodes, sometimes with eyelid flutter, often provoked by hyperventilation',
  note:'Highlighted option a (Absence seizures), boxed explanation below options. Legible directly on native image.' },

{ n:50, pr:50, p:1057, key:0,
  stem:'Which of the following is a treatment modality in cerebral palsy?',
  opts:['Botulinum toxin','Resection of the affected brain area','Anticonvulsants only','Chemotherapy'],
  expl:'Botulinum toxin is used to reduce spasticity in CP. Other treatments include physiotherapy and supportive care, not brain resection or chemotherapy.',
  note:'Highlighted option a (Botulinum toxin), boxed explanation below options. Legible directly on native image.' },

{ n:51, pr:51, p:1059, key:3,
  stem:'A 3-year-old boy presents to his pediatrician because he is not able to stand steadily on his feet for one day. He had had diarrhea during the previous week. On examination she is afebrile, has reduced muscle power and tone and no tendon reflexes can be elicited in her lower limbs. He is referred urgently to the pediatric hospital and 6 hours later he is unable to stand and the tendon reflexes in his upper limbs are now absent. He has no other medical problems and has been fully immunized. What is the most likely diagnosis?',
  opts:['Disorder of neuromuscular transmission','Muscle disorder','Poliomyelitis','Guillain-Barre syndrome','Disorder of anterior horn cell'],
  expl:'GBS often follows infection, causing ascending symmetrical weakness with loss of reflexes.',
  note:'Highlighted option d (Guillain-Barre syndrome), boxed explanation beside options (between c and d). Legible directly on native image. Stem verbatim retains the printed he/she pronoun mix.' },

{ n:52, pr:52, p:1061, key:0,
  stem:'Douglas, a 7-year-old boy, presents with headaches over the last 3–5 weeks that have increased in intensity and wake him from sleep. He also has morning vomiting, double vision, and declining school performance. What is the most likely diagnosis?',
  opts:['Brain tumor','Migraine','Tension headache','Sinusitis'],
  expl:'Progressive headaches with vomiting and cranial nerve involvement suggest raised ICP from a brain tumor.',
  note:'Highlighted option a (Brain tumor), boxed explanation below options. Legible directly on native image.' },

{ n:53, pr:53, p:1063, key:2,
  stem:'Which of the following statements about headache is true?',
  opts:['Migraine is most commonly unilateral','Migraine is most commonly with aura','Tension headache is symmetrical and gradual','Cluster headache is most common in children'],
  expl:'Tension headaches are usually bilateral, pressure-like, and gradual, unlike migraine which is unilateral and throbbing.',
  note:'Highlighted option c (Tension headache is symmetrical and gradual), boxed explanation below options. Legible directly on native image. Primary-headache question -- section rulings note this topic is not taught in this module.' },

{ n:54, pr:54, p:1065, key:0,
  stem:"A 5-year-old boy presents to the out-patient's clinic with a progressive muscle weakness over 3 years, and his calf muscles feel firm. His calf circumference is unusually large given his age and history of weakness. A biopsy of his gastrocnemius would most likely show which of the following?",
  opts:['Fibrofatty replacement of muscle fibers','Hypertrophy of fast-twitch white muscle fibers','Increased proportion of slow-twitch red muscle fibres','Perivascular and interstitial inflammation of muscle fibers with groups of muscle fibre degeneration and regeneration','Preferential atrophy of type II fibers, particularly the fast-twitch glycolytic fibres (type 1B)'],
  expl:'This is Duchenne muscular dystrophy, where muscle fibers are replaced by fat and connective tissue, causing calf enlargement.',
  note:'Highlighted option a (Fibrofatty replacement of muscle fibers), boxed explanation below options. Legible directly on native image. Options keep the printed fibers/fibre/fibres spelling variation verbatim.' },

{ n:55, pr:55, p:1067, key:2,
  stem:"A 9-year-old boy has a one-year history of progressive weakness, finding it more difficult to stand from a sitting position at home, and climb stairs at school. He had chickenpox when he was four years of age, and received all his childhood vaccinations as normal. Apparently, his maternal grandfather suffered from a similar condition, but died in a narrowboat accident at the age of 32. On examination, he is of normal height. Cranial nerves and higher mental function are normal. He has normal tone and reflexes in his limbs with weakness predominant in his arms and legs. There is no evident muscle wasting, and in fact the calf muscles seem particularly well formed. Cranial nerve and sensory examinations are entirely normal. Which one of these is the most likely diagnosis?",
  opts:['Limb-girdle muscular dystrophy',"Duchenne's muscular dystrophy","Becker's muscular dystrophy",'Facioscapulohumeral dystrophy','Myasthenia gravis'],
  expl:"Becker's is a milder, later-onset form of dystrophinopathy, with slower progression compared to Duchenne.",
  note:'Highlighted option c (Becker\'s muscular dystrophy), boxed explanation beside options. Legible directly on native image.' },

{ n:56, pr:56, p:1069, key:1,
  stem:'The following is RIGHT regarding Guillain-Barre Syndrome:',
  opts:['CSF is diagnostic in early cases','Dysphagia, aspiration, and respiratory failure may occur','Mild cases at presentation could be home treated','Residual neurologic damage commonly occurs in children','Bilateral asymmetrical ascending paralysis is characteristic'],
  expl:'Severe GBS can cause bulbar weakness and respiratory muscle involvement, requiring ICU support.',
  note:'Highlighted option b (Dysphagia, aspiration, and respiratory failure may occur), boxed explanation below options. Legible directly on native image.' },

{ n:57, pr:57, p:1071, key:2,
  stem:'A 4-year-old boy is brought to you in the clinic for an abnormality in walking. You formulate a list of differentials, but would like to run some further tests to aid diagnosis. Which of the following options correctly matches the disease listed to its most accurate diagnostic finding?',
  opts:['Becker muscular dystrophy: absent dystrophin protein in muscle biopsy','Dermatomyositis: polyphasic short motor potentials with spontaneous fibrillations in EMG','Duchenne muscular dystrophy: high CK levels','Guillain-Barre syndrome: decrease in propagation of electrical impulses in nerve conduction studies','Septic arthritis effusion detected in joint ultrasound'],
  expl:'DMD shows very high serum creatine kinase due to ongoing muscle breakdown.',
  note:'Highlighted option c (Duchenne muscular dystrophy: high CK levels), boxed explanation below options. Legible directly on native image.' },

{ n:58, pr:58, p:1073, key:1,
  stem:'A 6-year-old boy is admitted with first episode of seizures. He had sore throat 2 weeks ago. Mother noticed altered color of his urine since 2 days. On examination, he is afebrile and has puffiness around the eyes. His ASO titer is raised. What is the MOST likely cause of seizures in this child?',
  opts:['Hypovolemia','Hypertension','Low serum calcium','Thrombosis','Low serum albumin'],
  expl:'Acute post-streptococcal glomerulonephritis causes hypertension, which can lead to hypertensive encephalopathy and seizures.',
  note:'Highlighted option b (Hypertension), boxed explanation below options. Legible directly on native image. Nephrology-driven seizure question, not primary neurology.' },

{ n:59, pr:59, p:1075, key:0,
  stem:'A girl experienced diarrhea 3 days before, manifestation "progressive weakness and inability to walk. Examination reveals marked peripheral symmetrical muscles weakness without atrophy. Deep tendon reflexes were absent in the ankles and 1+ in the knees. The MOST likely diagnosis is:',
  opts:['Guillain-Barré syndrome','Transverse myelitis','Myasthenia gravis','Muscular dystrophy','Poliomyelitis'],
  expl:'Symmetrical weakness after infection with absent reflexes is classic for GBS.',
  note:'Highlighted option a (Guillain-Barré syndrome), boxed explanation below options. Legible directly on native image. Stem verbatim keeps the printed unmatched opening quote before "progressive" and this page\'s accented "Barré" spelling (unlike pp.1059/1069/1071 which print "Barre").' },

{ n:60, pr:60, p:1077, key:0,
  stem:'A baby presents with convulsions. On examination, he has a large head and a wide anterior fontanelle. What is the most appropriate initial management?',
  opts:['IV calcium gluconate','Oral acetazolamide','Observation only','Immediate lumbar puncture'],
  expl:'A seizing infant should first be managed for reversible metabolic causes. Hypocalcemia is a common and treatable cause of neonatal convulsions. Giving IV calcium gluconate is the safest initial step. Lumbar puncture is contraindicated because signs (large head, wide fontanelle) suggest raised intracranial pressure.',
  note:'Highlighted option a (IV calcium gluconate), boxed explanation below options; the phrase "Giving IV calcium gluconate" is printed bold/red inside the box, transcribed as plain text here (formatting not carried). Legible directly on native image. Last question of the section per the page map -- section-8 closing entry.' }

];
