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
  note: "Read on p.955 (answered) and cross-read on p.954 (unanswered twin, identical stem/options, no highlight -- confirmed). Key highlighted: yellow box on \"C. Occur between the ages of 6 months and 5 years\". Numbered '1.' printed as part of the stem; the lead-in word 'An' is the actual first word on the page (prompt's own quoted stem in the task text reads 'An 18-month-old girl' -- matches exactly). No figure. Legible at native resolution, no crop needed." }

{ n: 2, pr: 2, p: 957,
  key: 3,
  stem: "Angelo, a 15-month-old boy, had been unwell with a runny nose and cough for a day when his father brought him to the Emergency Department. At lunch, he suddenly became stiff, his eyes rolled upwards, and both his arms and legs started jerking for 2 minutes. He felt very hot at the time. When examined 2 hours later, he had fully recovered. This is the first time this has happened. He has a normal neurological examination and is acquiring his developmental milestones normally. He has no other medical problems. The triage nurse performed a blood glucose test, which indicated a glucose level of 4.2 mmol/L (within normal range). What would be the most appropriate investigation?",
  opts: ['CT scan of the brain', 'ECG', 'EEG (electroencephalography)', 'No investigation required', 'Oral glucose tolerance test'],
  expl: 'This is a classic simple febrile seizure : generalized, short duration, and full recovery in a neurologically normal child. No investigations are needed for a first simple febrile seizure in a well child with no concerning features.',
  note: "Read on p.957 (answered) and cross-read on p.956 (unanswered twin, identical stem/options, no highlight -- confirmed). Key highlighted: yellow box on \"D. No investigation required\". Glucose value 4.2 mmol/L read directly off native image, legible, no crop needed. No figure." }

{ n: 3, pr: 3, p: 959,
  key: 0,
  stem: "Pamela is an 8-year-old girl with recurrent seizures. She has three or four seizures a month, where she lets out a cry, her arms and legs become stiff, her eyes roll upwards, and then she jerks her arms and legs. This lasts about 3 minutes. Afterwards, she sleeps for 2 hours and is then back to normal. She is doing well at school but is sometimes missing school because of her seizures. She is currently not on any medication and has no other medical problems. What would be the best intervention for this child?",
  opts: ['Anti-epileptic drug therapy', 'Home schooling', 'Ketogenic diet', 'No intervention required', 'Vagal nerve stimulation'],
  expl: "Pamela has generalized tonic-clonic seizures occurring multiple times per month, affecting her quality of life. Anti-epileptic medication is indicated to reduce seizure frequency and improve her daily functioning.",
  note: "Read on p.959 (answered) and cross-read on p.958 (unanswered twin, identical stem/options, no highlight -- confirmed). Key highlighted: yellow box on \"A. Anti-epileptic drug therapy\". No figure. Legible at native resolution, no crop needed." }

{ n: 4, pr: 4, p: 961,
  box: 962,
  key: 1,
  stem: "Alan is a 7-month-old male infant who was preterm, born at 28 weeks' gestation, birthweight 970 g, and whose family recently arrived in this country. He is seen in a paediatric clinic because of vomiting. He had been seen regularly by a doctor who was treating him for gastro-oesophageal reflux. He has always vomited, but this has been getting worse, and his mother has noticed his eye movements are not normal. His examination findings can be seen in the opposite figure. What is the most likely underlying cause for these findings?",
  opts: ['Aqueduct stenosis', 'Intraventricular haemorrhage', 'Meningitis', 'Posterior fossa neoplasm', 'Subarachnoid haemorrhage'],
  fig: "Colour clinical close-up photograph of an infant's face, positioned to the right of the option list. Shows the eyes deviated downward with a band of white sclera visible above each iris (the 'setting-sun' eye sign); no other abnormality visible on the face in the crop.",
  figAlt: "Colour close-up clinical photograph of an infant's face and eyes.",
  expl: "Preterm infants are at risk of intraventricular hemorrhage, which may present later with vomiting and abnormal eye movements due to post-hemorrhagic hydrocephalus. His worsening symptoms and neurological signs are typical for this complication.",
  note: "Read on p.961 (answered) and cross-read on p.960 (unanswered twin, identical stem/options/figure, no highlight -- confirmed). Key highlighted: yellow box on \"B. Intraventricular haemorrhage\". p.961 itself prints NO explanation box (per brief SS3a, opened the very next page before moving on): p.962 -- which the page-map lists as a plain 'notes' page causing this run's parity flip -- is in fact a small bordered overflow explanation box for THIS question (format matches the brief's 'real overflow box' shape: small side box, reduced font, not a full-page teaching slide), so box:962 is recorded and its text placed in expl. FINDING: p.962 is not unrelated teaching content; it belongs to n4/p.961." }

{ n: 5, pr: 5, p: 964,
  key: 1,
  stem: "Sharon is an 11-year-old girl who has had occasional headaches for the last 3 months. Today was her first day at secondary school. During math class, she developed her usual throbbing left-sided headache, associated with nausea. Over the next hour, she lost her temporal vision in her right eye and found she only had minimal movement in her right arm. The left side of her mouth was drooping. Her parents were called, who rushed her to the hospital. She is now feeling much better, has normal vision, and can move her arm, although she has some residual weakness of her mouth. She has no significant medical history except some episodes of abdominal pain as a younger child. Her mother tells you that she also suffers from headaches. What is the most likely diagnosis?",
  opts: ['Idiopathic intracranial hypertension', 'Migraine', 'Raised intracranial pressure due to a space-occupying lesion', 'Subarachnoid haemorrhage'],
  expl: "Sharon's episode involves a unilateral throbbing headache, visual disturbance, nausea, and temporary neurological deficits, followed by recovery. These features are consistent with a hemiplegic migraine, especially with a family history.",
  note: "Read on p.964 (answered) and cross-read on p.963 (unanswered twin, identical stem/options, no highlight -- confirmed). Only FOUR options (A-D) printed, no E -- confirmed on both printings. Key highlighted: yellow box on \"B. Migraine\". No figure." }

{ n: 6, pr: 6, p: 966,
  key: 0,
  stem: "Aparna is a 2-year-old girl of Indian ethnicity who lives in the UK. She presents to her general practitioner as she has been unsteady on her feet for a day, having had diarrhoea during the previous week. On examination, she is febrile, has reduced muscle power and tone, and no tendon reflexes can be elicited in her lower limbs. She is referred urgently to the paediatric hospital, and 6 hours later, she is unable to stand, and the tendon reflexes in her upper limbs are now absent. She has no other medical problems and has been fully immunized. What is the most likely diagnosis?",
  opts: ['Guillain-Barré syndrome', 'Myasthenia gravis', 'Myotonic dystrophy', 'Poliomyelitis', 'Spinal muscular atrophy'],
  expl: "The child developed rapidly progressive weakness and areflexia following a recent gastrointestinal illness, which is typical for Guillain-Barré syndrome. This is an acute inflammatory demyelinating polyneuropathy requiring urgent assessment.",
  note: "Read on p.966 (answered) and cross-read on p.965 (unanswered twin, identical stem/options, no highlight -- confirmed). Key highlighted: yellow box on \"A. Guillain-Barré syndrome\". No figure." }

{ n: 7, pr: 7, p: 968,
  key: 0,
  stem: "Gregor was born at term. It was a normal pregnancy, though the mother did not have any antenatal ultrasound examinations as she was against medical procedures. He was born by vaginal delivery. Immediately, the midwife noticed the lesion shown in the opposite figure. Which of the supplements listed would have reduced the risk of this problem if taken by the mother periconceptually?",
  opts: ['Folic acid', 'Iron', 'Vitamin A', 'Vitamin B12', 'Vitamin D'],
  fig: "Colour clinical photograph, right of the option list, of a newborn's lower back/sacral region showing a raised, rounded, reddish sac-like skin lesion with a darker central/dependent area, consistent with a myelomeningocele-type midline back lesion; a small caption line is printed beneath the photo but is cut off at the bottom edge of the slide and not legible.",
  figAlt: "Colour clinical photograph of a newborn's lower back showing a midline raised skin lesion.",
  expl: "Neural tube defects such as spina bifida are associated with maternal folic acid deficiency. Periconceptional folic acid supplementation significantly reduces the risk.",
  note: "Read on p.968 (answered) and cross-read on p.967 (unanswered twin, identical stem/options/figure, no highlight -- confirmed). Key highlighted: yellow box on \"A. Folic acid\". A caption line beneath the photo is cropped off the bottom of the slide on both printings; not transcribed as it is illegible, not withheld." }

{ n: 8, pr: 8, p: 971,
  key: 1,
  stem: "Antonia, a 5-year-old girl, is seen by her general practitioner. Her mother and school teacher have noticed she has episodes where she stops her activity for a few seconds, stares blankly ahead, and then resumes the activity as if she had never stopped. These episodes happen many times a day. She has no other medical problems, and there is no family history of seizures. The EEG during an episode is shown in the figure below. Choose the most likely diagnosis.",
  opts: ['Childhood Rolandic epilepsy (benign epilepsy with centrotemporal spikes)', 'Childhood absence epilepsy', 'Juvenile myoclonic epilepsy', 'Lennox-Gastaut syndrome', 'Infantile spasms (West syndrome)'],
  fig: "The stem says 'the figure below' but no figure is printed on the answered page (p.971) itself. The figure is a 16-channel EEG tracing (numbered leads 1-16 top to bottom) on p.970, showing a run of high-amplitude, generalized, hypersynchronous rhythmic spike-and-wave-like discharges across all channels lasting several seconds then resolving into lower-amplitude background; calibration marks printed lower-left read '200 uV' (vertical bar) and '1 s' (horizontal bar). p.970 is the FIGURE page belonging to this question, not a page from a different question.",
  figAlt: "A 16-channel EEG tracing with amplitude and time calibration bars.",
  expl: "Frequent brief staring episodes with immediate return to activity are characteristic of absence seizures. The diagnosis is confirmed by EEG showing classic 3 Hz spike-and-wave discharges.",
  note: "⚠️ TWIN GAP NAMED IN THE PROMPT, RESOLVED BY READING THE IMAGE: p.970 is NOT a genuinely absent twin and NOT unrelated teaching content -- the index's 'notes' tag on p.970 is a MISCLASSIFICATION of a genuine question figure. The unanswered printing of this question is split across TWO pages: p.969 carries the stem+options plain (no highlight, confirmed cross-read, and its stem explicitly says 'the figure below'), and p.970 -- immediately after it -- carries only the EEG image itself with calibration bars, no stem, no options, no highlight (which is exactly why an index built on text/highlight detection would tag it 'notes'). The ANSWERED page, p.971, reprints the stem+options+key+box but does NOT reprint the EEG figure inline -- the figure exists only on p.969/p.970's printing. Key highlighted on p.971: yellow box on \"B. Childhood absence epilepsy\". Explanation box (bordered, to the right of the options on p.971) transcribed verbatim into expl. Diagnosis withheld from figAlt per brief SS6; fig names the EEG pattern in words only (no interpretive label such as '3Hz spike-wave' is asserted as diagnostic in figAlt, though the printed box itself names it in expl)." }

{ n: 9, pr: 9, p: 974,
  key: 4,
  stem: "Vijay is a 5-month-old infant who has been seen repeatedly by his general practitioner because of colic. His mother brings him to the Accident and Emergency Department as he is having episodes of suddenly throwing his head and arms forward. These episodes occur in repetitive bursts. His mother thinks they may be something more than just colic, as he is now not smiling or supporting his head as well as he did previously. He was born at term by normal vaginal delivery and has no other medical problems. His EEG is shown in the figure below. Choose the most likely diagnosis.",
  opts: ['Juvenile myoclonic epilepsy', 'Lennox-Gastaut syndrome', 'Childhood Rolandic epilepsy (benign epilepsy with centrotemporal spikes)', 'Childhood absence epilepsy', 'Infantile spasms (West syndrome)'],
  fig: "The stem says 'His EEG is shown in the figure below' but no figure is printed on the answered page (p.974) itself. The figure is a 16-channel EEG tracing (numbered leads 1-16 top to bottom) on p.973, showing a continuous, disorganized, chaotic high-amplitude mixture of slow waves and multifocal spikes across all channels with no normal background rhythm visible; calibration marks lower-left read '100 uV' (vertical bar) and '1 s' (horizontal bar). p.973 is the FIGURE page belonging to this question, not unrelated notes.",
  figAlt: "A 16-channel EEG tracing with amplitude and time calibration bars.",
  expl: "Clusters of sudden flexor spasms in an infant with developmental regression strongly suggest infantile spasms. The EEG typically shows a chaotic, high-voltage pattern called hypsarrhythmia.",
  note: "⚠️ SECOND NAMED TWIN GAP, SAME SHAPE AS n8/p.970: p.973 is NOT a genuinely absent twin and NOT unrelated teaching content -- it is the EEG figure for THIS question, mislabelled 'notes' by the index for the same reason as p.970 (an image-only page with calibration bars, no stem/options/highlight for a text detector to key on). The unanswered printing is split across p.972 (stem+options plain, no highlight, explicitly says 'the figure below') and p.973 (the EEG image, no stem/options/highlight). The answered page p.974 reprints stem+options+key+box but not the figure. Key highlighted on p.974: yellow box on \"E. Infantile spasms (West syndrome)\". Box (bordered, to the right of the options) transcribed verbatim into expl. Diagnosis-naming term 'hypsarrhythmia' appears only in the printed expl box, kept out of figAlt per brief SS6." }

{ n: 10, pr: 10, p: 976,
  key: 3,
  stem: "Emily, a normally fit and healthy 3-year-old girl, is rushed to the Emergency Department. She had been playing at the nursery and had banged her head against a door. Almost immediately, she went very pale and stiff and had jerking movements of her arms and legs for 20 seconds. Afterwards, she was groggy for a few minutes but is now back to her usual self. This has not happened before. Her mother is very distressed and now reports feeling sick herself. The triage nurse has performed a blood glucose test, which indicates a glucose level of 4.1 mmol/L (within normal range). Which of the following is the most likely diagnosis?",
  opts: ['Childhood absence epilepsy', 'Migraine', 'Syncope', 'Reflex asystolic syncope (reflex anoxic seizure)'],
  expl: "This brief episode of pallor, stiffness, and jerking after a minor head injury is typical of reflex anoxic seizure—a non-epileptic event caused by vagal overactivity and transient cardiac asystole. Recovery is usually quick, and no long-term management is needed",
  note: "Read on p.976 (answered) and cross-read on p.975 (unanswered twin, identical stem/options, no highlight -- confirmed). Only FOUR options (A-D) printed, no E -- confirmed on both printings. Key highlighted: yellow box on \"D. Reflex asystolic syncope (reflex anoxic seizure)\". Glucose value 4.1 mmol/L read directly off native image, legible, no crop needed. No figure. Printed box text ends with no closing full stop ('needed' with no period) -- transcribed exactly as printed." }

{ n: 11, pr: 11, p: 978,
  key: 2,
  stem: "Jennifer, an 11-year-old girl, is brought to the Emergency Department after collapsing at school. Her teacher described her standing in assembly, becoming pale, and collapsing to the floor. She had a couple of jerking movements of her limbs lasting a few seconds. She returned to normal promptly. Jennifer says that she had not eaten breakfast that morning and experienced a sensation of feeling hot, a black curtain coming in front of her eyes, sounds becoming distant, and feeling dizzy. The school nurse did a blood glucose test, which indicated a glucose level of 3.5 mmol/L (within the normal range). She has had two episodes similar to this in the past but has not presented to the hospital before. She has no other medical problems. Which of the following is the most likely diagnosis?",
  opts: ['Childhood absence epilepsy', 'Migraine', 'Syncope', 'Reflex asystolic syncope (reflex anoxic seizure)'],
  expl: "Jennifer's prodrome of dizziness, visual and auditory changes, and collapse in a standing position without postictal confusion is characteristic of vasovagal syncope. The few limb jerks are consistent with brief convulsive movements that can occur during syncope.",
  note: "Read on p.978 (answered) and cross-read on p.977 (unanswered twin, identical stem/options, no highlight -- confirmed). Only FOUR options (A-D), no E -- confirmed on both printings. Key highlighted: yellow box on \"C. Syncope\". Glucose value 3.5 mmol/L read directly off native image, legible, no crop needed. No figure. SHARED OPTION MENU (brief SS7): n10/p.976 and n11/p.978 print the identical four-option ladder in the same order (Childhood absence epilepsy / Migraine / Syncope / Reflex asystolic syncope) -- recorded as a pairing, not folded. Discriminating tokens: n10 = provoked by head-bang, no prodrome, key D (reflex anoxic seizure); n11 = standing/postural trigger with a visual+auditory prodrome ('black curtain', sounds distant, dizzy) and no head injury, key C (syncope)." }

{ n: 12, pr: 12, p: 980,
  key: 3,
  stem: "Rene is a lively 2-year-old boy who is seen in the acute paediatric assessment unit, having had an episode of turning blue and collapsing. This is not the first time this has happened. He recovers quickly after these events. During the consultation, his mother repeatedly gives him sweets to keep him calm. These episodes only occur when he is crying, and this has led to his mother trying to avoid anything that will upset him. He has no other medical problems. His blood glucose today is 4.9 mmol/L. Which of the following is the most likely diagnosis?",
  opts: ['Childhood absence epilepsy', 'Migraine', 'Narcolepsy', 'Blue breath-holding spells (expiratory apnoea syncope)'],
  expl: "Episodes occurring during crying, with cyanosis and collapse, suggest blue breath-holding spells a common benign condition in toddlers. These are not epileptic seizures and resolve spontaneously with age.",
  note: "Read on p.980 (answered) and cross-read on p.979 (unanswered twin, identical stem/options, no highlight -- confirmed). Only FOUR options (A-D), no E -- confirmed on both printings. Key highlighted: yellow box on \"D. Blue breath-holding spells (expiratory apnoea syncope)\". Glucose value 4.9 mmol/L read directly off native image, legible, no crop needed. No figure. Printed box text has no comma/joining word before 'a common benign condition' ('spells a common benign condition') -- transcribed exactly as printed." }

{ n: 13, pr: 13, p: 982,
  key: 0,
  stem: "Dora is an 8-year-old girl who attends the outpatient department. Her mother is worried because she used to be top of the class, but is not doing well at school this year. Whilst in the clinic, you notice that Dora has an episode where she suddenly stops what she is doing, stares ahead while flickering her eyelids for a couple of seconds, and then resumes her previous activity as if nothing had happened. You ask her to blow out an imaginary candle, and the same thing happens again. She is growing normally and is otherwise fit and well. Which of the following is the most likely diagnosis?",
  opts: ['Childhood absence epilepsy', 'Migraine', 'Syncope', 'Reflex asystolic syncope (reflex anoxic seizure)', 'Cardiac arrhythmia'],
  expl: "Dora's sudden staring episodes with eyelid fluttering and immediate recovery, especially when provoked by hyperventilation, are classic for absence seizures. EEG would show a 3 Hz spike-and-wave pattern.",
  note: "Read on p.982 (answered) and cross-read on p.981 (unanswered twin, identical stem/options, no highlight -- confirmed). Key highlighted: yellow box on \"A. Childhood absence epilepsy\". No figure." }

{ n: 14, pr: 14, p: 984,
  key: 0,
  stem: "Damasco is a 6-year-old Black boy who presents in the paediatric clinic. He has been referred because his brother, with whom he shares a room, has woken his parents early in the morning on several occasions complaining that Damasco is making unusual sounds and drooling from his mouth. By the time his parents come to the room, Damasco is jerking his upper and lower limbs rhythmically. This lasts for 1–2 minutes. Afterwards, Damasco complains of a funny sensation on the left side of his mouth, and then goes back to sleep. He is doing well at school, and the clinical examination is normal. He has no other medical problems. What is the most likely diagnosis?",
  opts: ['Childhood Rolandic epilepsy (benign epilepsy with centrotemporal spikes)', 'Childhood absence epilepsy', 'Juvenile myoclonic epilepsy', 'Lennox-Gastaut syndrome'],
  expl: "This epilepsy often occurs in sleep, with symptoms like facial twitching, drooling, and retained awareness. It is self-limiting and commonly presents in school-aged children with normal development.",
  note: "Read on p.984 (answered) and cross-read on p.983 (unanswered twin, identical stem/options, no highlight -- confirmed). Only FOUR options (A-D), no E -- confirmed on both printings. Key highlighted: yellow box on \"A. Childhood Rolandic epilepsy (benign epilepsy with centrotemporal spikes)\". No figure. En dash printed in '1–2 minutes' reproduced as printed." }

{ n: 15, pr: 15, p: 986,
  key: 2,
  stem: "Jude is a 14-year-old boy who is on treatment for generalized tonic-clonic and absence seizures. He attends a routine clinic appointment complaining of regularly spilling his tea in the morning because his arm jerks involuntarily. These jerks are worse if he has stayed up late the night before. He is doing relatively well at school. What is the most likely diagnosis?",
  opts: ['Childhood Rolandic epilepsy (benign epilepsy with centrotemporal spikes)', 'Childhood absence epilepsy', 'Juvenile myoclonic epilepsy', 'Lennox-Gastaut syndrome', 'Infantile spasms (West syndrome)'],
  expl: "Morning myoclonic jerks (spilling tea), generalized seizures, and worsening with sleep deprivation are hallmark features of juvenile myoclonic epilepsy. It typically starts in adolescence and may require lifelong treatment",
  note: "Read on p.986 (answered) and cross-read on p.985 (unanswered twin, identical stem/options, no highlight -- confirmed). Key highlighted: yellow box on \"C. Juvenile myoclonic epilepsy\". No figure. Printed box text ends with no closing full stop ('treatment' with no period) -- transcribed exactly as printed. THIS IS THE LAST ENTRY OF PART A (n=1..15, pp.955-986)." }
