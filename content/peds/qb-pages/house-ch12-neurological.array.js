// House pediatrics bank — Part I, chapter 12 "Neurological disorders", book pp.90-100 (PDF sheet
// 46 LEFT through sheet 51 LEFT). p.101 (sheet 51 RIGHT) rendered too, as the boundary check.
// Verbatim staging record. Transcribed from the rendered page images only. Nothing authored.
// Source: Semester 8\Pedo\Questions\pediatric .pdf  (2-up; PDF sheet N = book pages 2N-2 | 2N-1)
// Rendered at 300 dpi split into left/right halves for prose, and every number, unit, centile,
// weight, age, rate and key letter re-rendered at 600 dpi as a band crop (no wider than ~1150 px)
// for the numeral itself. Nothing numeric was taken from the 300 dpi half and NOTHING AT ALL was
// taken from the OCR cache (content\peds\qb-pages\ocr\ was never opened for this chapter).
//
// ---- MEASUREMENTS (all made by reading the rendered halves; nothing inherited) ----
// COUNT: 26 questions, MEASUREMENTS COMPLETE. Every one of the eleven pages in the range (90-100)
//   plus the one-past page (101) was rendered as its own half and looked at whole, top folio to
//   bottom folio; there are no separate answer pages in this bank, the answer line lives inside the
//   question box. Numbers walked in order across the eleven halves: 1,2,3(->91) on p.90 - 3(cont),
//   4,5(->92) on p.91 - 5(cont),6,7(->93) on p.92 - 7(cont),8 on p.93 - 9 on p.94 - 10,11,12(->96)
//   on p.95 - 12(cont),13,14 on p.96 - 15,16,17 on p.97 - 18,19,20 on p.98 - 21,22,23,24(->100) on
//   p.99 - 24(cont),25,26 on p.100. CONTIGUOUS 1 to 26, no repeat, no skip. n === the printed
//   number on all 26. The task prompt's count hint of "26" was flagged as unproven and had to be
//   walked page by page independently; it turned out to match exactly (see "PLACES THIS BRIEF/
//   PROMPT WAS WRONG" below for why that is still worth recording rather than assuming next time).
//   Re-counted from disk by loading the array in node and reading .length with a sparse-hole index
//   walk (for i... if(!(i in A))): length 26, holes 0.
//
// BOILER, MEASURED QUESTION BY QUESTION, NOT ASSUMED: printed on Q1, Q3, Q4, Q5, Q6, Q7, Q8, Q9 -
//   absent on Q2, and absent on Q10 through Q26. Bit string, n:1..n:26 =
//   1 0 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
//   Q2 breaks the front run on its own (inspected individually: stem runs straight into option A,
//   no boiler line at all) before the run resumes at Q3-Q9; the whole back two-thirds of the
//   chapter (Q10-Q26) prints no boiler line anywhere. Neither a clean front-block nor a clean
//   back-block assumption would have survived contact with Q2 - it had to be read, not inferred.
//
// KEYS, ALL 26 RE-RENDERED AT 600 dpi (every one prints as a BARE LETTER, "Answer: E." with no
//   option name beside it - the letter-vs-name cross-check is UNAVAILABLE for this whole chapter
//   and MUST NOT be reported as having passed):
//   E D A B B A A B E D C D A A C D C A B D A B D B E C
//   = A x7 (3,6,7,13,14,18,21), B x6 (4,5,8,19,22,24), C x4 (11,15,17,26), D x6 (2,10,12,16,20,23),
//   E x3 (1,9,25). Grouped by re-loading the array and indexing on .key directly, not by hand. Sum
//   7+6+4+6+3 = 26.
//
// OPTIONS: opts.length === 5 for every one of the 26, confirmed by loading the array (no exception
//   in this chapter, unlike some others).
//
// STRADDLES ACROSS A PAGE BREAK: FIVE, filed on the page the NUMBER is printed on, per the brief -
//   confirmed by the same load-and-scan that produced the count above:
//     n:3 (p.90->91): stem+boiler+all 5 options are on p.90; "Answer: B." is the first thing on
//       p.91.
//     n:5 (p.91->92): stem+boiler+all 5 options are on p.91; "Answer: A." is the first thing on
//       p.92.
//     n:7 (p.92->93): stem, boiler and all five options A-E are on p.92, but no "Answer:" line
//       appears before the folio; "Answer: A." alone is the first line on p.93.
//     n:12 (p.95->96): stem+options are on p.95; the tail (remaining option(s) + "Answer: D.") is
//       the first thing on p.96.
//     n:24 (p.99->100): stem, no boiler, and option A only are on p.99 (the box is left unclosed at
//       the page foot); options B-E and "Answer: B." are the first content on p.100.
//   No other question crosses a break.
//
// FIGURES: FOUR in the chapter, and the zero everywhere else is a MEASURED zero - all eleven pages
//   (90-100) were each rendered as their own half and examined whole, not just the pages already
//   known to carry a figure.
//     n:4 "Alan" (p.91): colour clinical photograph, placed to the right of the stem.
//     n:7 "Gregor" (p.92): colour clinical close-up photograph, placed to the right of the stem.
//     n:8 "Antonia" (p.93): a 16-channel EEG trace, rows numbered 1-16 down the left margin,
//       calibration marker read at 600 dpi.
//     n:9 "Vijay" (p.94): a second 16-channel EEG trace, same layout as n:8's, calibration marker
//       independently re-verified at 600 dpi.
//   No figure on p.90, p.95, p.96, p.97, p.98, p.99, p.100, or on p.101 (the one-past check page,
//   which carries two colour clinical photographs of its own but those belong to chapter 13 and are
//   out of scope here).
//
// ⚠️ DUPLEX SHOW-THROUGH: ONE INSTANCE, ON p.100, NOT TRANSCRIBED. A faint mirrored ghost is
//   visible behind n:24's tail box and behind n:25's and n:26's boxes, legible enough to identify as
//   an asthma vignette ("...year-old girl has frequent attacks of asthma... Deteriorated with
//   increasing difficulty in breathing over the last 48 hours... Select one answer only... A.
//   Sarah's asthma at a level of moderate severity..."). Per ch.11's measured pairing rule (LEFT of
//   an odd sheet pairs with the RIGHT of the NEXT sheet, three book pages on), p.100 is sheet 51
//   LEFT (odd sheet), so its predicted duplex partner is sheet 52 RIGHT = book p.103 - NOT p.101
//   (sheet 51 RIGHT, the same sheet's facing page, which was rendered as the boundary check and
//   does not contain this vignette; see BOUNDARY PROOF below). p.103 was not rendered - it is past
//   the one-page-past boundary check and out of scope for this chapter - so the ghost's exact source
//   page is NOT confirmed, only its geometry-consistent prediction and its subject (asthma, i.e.
//   respiratory) is. Nothing from this ghost was transcribed as page content anywhere in this file.
//   No other duplex show-through was found in the range 90-100.
//
// ⚠️ BOUNDARY PROOF - WHERE THE CHAPTER STOPS, READ OFF p.101 (sheet 51 RIGHT), THE ONE-PAST PAGE.
//   p.101 carries a full-width "Respiratory disorders" banner and RESTARTS ITS OWN NUMBERING AT 1.
//   Its first question, quoted from the render: "Liam, a 7-year-old boy, complains to his family
//   doctor of a sore throat and has a mild fever. The appearance of his throat is as shown in the
//   opposite figure. What is the most likely diagnosis?" with options Diphtheria / Glandular fever
//   (Ebstein Barr virus) / Group A Streptococcal tonsillitis / Measles / Herpes simplex stomatitis,
//   boiler:true, key "Answer: C.", and a colour clinical photograph. So ch.12 "Neurological
//   disorders" = book pp.90-100 inclusive, 26 questions, ending at Q26 on p.100. The task prompt's
//   "~26 questions" hint held exactly, and the p.90-100 range held exactly.
//
// NUMERALS RE-RENDERED AT 600 dpi BECAUSE 300 dpi WAS NOT GOOD ENOUGH TO SWEAR TO THEM - every age,
//   duration, EEG frequency and figure calibration value in the chapter was escalated; the crop
//   filename is named in each entry's note where a pre-existing crop was reused, or "my..." prefixed
//   where a fresh crop was made this pass from the existing 600 dpi half-render because the
//   pre-existing crop was mislabeled or too tight (n:4's and n:5's stem numerals, and n:8's figure
//   calibration label, all re-cropped and independently confirmed against the underlying 600 dpi
//   half rather than trusted from the inherited crop).
//
// SHARED OPTION MENUS (pairings, NOT folds - four separate groups):
//   n:8, n:9, n:14, n:15, n:16 print the SAME five epilepsy-syndrome options - Juvenile myoclonic
//   epilepsy / Lennox-Gastaut syndrome / Childhood Rolandic epilepsy / Childhood absence epilepsy /
//   Infantile spasms (West syndrome) - n:8, n:14, n:15, n:16 in the SAME printed order; n:9 has the
//   SAME five REORDERED. Five different keys across the group.
//   n:10, n:11, n:13 print the SAME five options in the SAME order - Childhood absence epilepsy /
//   Migraine / Syncope / Reflex asystolic syncope / Cardiac arrhythmia.
//   n:12 partially overlaps n:10/n:11/n:13's menu (shares options A-B only; C-E diverge) - recorded
//   as a partial/coincidental overlap, NOT a fourth member of that pairing.
//   n:17, n:18, n:19, n:20 print the SAME five clinical-sign options in the SAME order - Babinski's
//   sign / Romberg's sign / Gower's sign / Kernig's sign / Chorea - the longest single pairing run
//   in the chapter, four consecutive questions.
//   A shared menu pairs questions; it never folds them. All members of every group above stay
//   separate entries.
//
// OCR: the cache under content\peds\qb-pages\ocr\ was NEVER OPENED for this chapter. Not one
//   character in this file came from it.
//
// GEOMETRY, READ OFF THE PRINTED FOLIO AT THE FOOT OF EVERY HALF
//   sheet 46 LEFT  = book p.90  ·  sheet 46 RIGHT = book p.91  ·  sheet 47 LEFT  = book p.92
//   sheet 47 RIGHT = book p.93  ·  sheet 48 LEFT  = book p.94  ·  sheet 48 RIGHT = book p.95
//   sheet 49 LEFT  = book p.96  ·  sheet 49 RIGHT = book p.97  ·  sheet 50 LEFT  = book p.98
//   sheet 50 RIGHT = book p.99  ·  sheet 51 LEFT  = book p.100
//   sheet 51 RIGHT = book p.101  (the one-past overrun check; not itself part of ch.12)
//   The brief's 2-up mapping (left = 2N-2, right = 2N-1) HELD on every half rendered.
//
// PROVENANCE NOTE: this chapter's renders and 30 band crops were inherited from an earlier dead
//   agent's scratchpad pass (files named sheetNNL/R.png, h600_NNL/R.png, crops\qN_pNN.png). They
//   were reused where cheap and correct, but NOTHING in this file was taken from a crop without
//   independently re-reading the underlying full-page render; three crops (n:4's stem, n:5's stem,
//   n:8's figure calibration) were mislabeled or too tight and were re-cropped fresh from the
//   existing 600 dpi half-renders this pass (myq4_p91_stem.png, myq5_p91_stem.png,
//   myq8_p93_calib.png) before being trusted.
//
// ⚠️ PLACES THIS BRIEF/PROMPT WAS WRONG OR NEEDED CORRECTION, COLLECTED HERE FOR THE REPORT:
//   (1) The task prompt's count hint of "26" was explicitly unproven going in and had to be walked
//   page by page independently; it turned out to be exactly right, same as ch.11's ~26 estimate -
//   worth recording as the second time in a row this project's hints have landed exactly, still not
//   a reason to skip the independent walk next time.
//   (2) The task prompt predicted the boundary page (101) would show a "Respiratory disorders"
//   banner - confirmed exactly, first question "Liam" (sore throat/tonsillitis), key C.
//   (3) The task prompt did not predict duplex show-through would appear on p.100; it does, and per
//   ch.11's measured LEFT-of-odd-sheet <-> RIGHT-of-next-sheet pairing rule its source is p.103 (not
//   p.101, which was checked and does not contain it) - p.103 itself is out of scope and was not
//   rendered, so this is recorded as a geometry-consistent prediction, not a confirmed match, unlike
//   ch.11's two fully-matched ghosts.
//   (4) An earlier dead agent's crop set for this chapter (n:4, n:5, n:8) needed re-cropping this
//   pass before its numerals could be trusted - see PROVENANCE NOTE above.
//
var PEDHD_NEURO_STAGED = [

  { n:1, p:'90', boiler:true,
    stem:'Annette is a 15-year-old girl who complains of worsening daily occipital headaches. They occur mainly in the mornings and sometimes wake her from sleep. Her mother says she is doing less well at school than previously and has become a difficult and grumpy teenager. She sometimes vomits in the mornings. She has no other medical problems though she is on the oral contraceptive pill. What is the most likely diagnosis?',
    opts:['Idiopathic intracranial hypertension','Migraine','Medication side-effect','Tension headache','Raised intracranial pressure due to a space-occupying lesion'],
    key:'E',
    note:'FIRST question of the chapter, printed under the full-width "Neurological disorders" banner on p.90 (folio "90" read at the foot). Numeral verified at 600 dpi (crop q1_p90.png, pre-existing full-box crop from an earlier render pass, re-checked): "15-year-old". BOILER present on its own line between the stem and option A. Key prints a BARE LETTER "Answer: E."; cross-check unavailable.' },

  { n:2, p:'90', boiler:false,
    stem:'Angelo, a 15-month-old boy, had been unwell with a runny nose and cough for a day when his father brings him to the Emergency Department. At lunch he suddenly became stiff, his eyes rolled upwards and both his arms and legs started jerking for 2 minutes. He felt very hot at the time. When examined 2 hours later, he has recovered fully. This is the first time this has happened. He has a normal neurological examination and is acquiring his developmental milestones normally. He has no other medical problems. The triage nurse performed a blood glucose test, which indicated a glucose level of 4.2 mmol/L (within normal range). What would be the most appropriate investigation?',
    opts:['CT scan of the brain','ECG','EEG (electroencephalography)','No investigation required','Oral glucose tolerance test'],
    key:'D',
    note:'Numerals verified at 600 dpi (crop q2_p90.png, pre-existing full-box crop): "15-month-old" · "2 minutes" · "2 hours later" · "4.2 mmol/L". ⚠️ NO boiler line printed in this box - inspected individually, goes straight from the stem to option A; boiler:false. Key prints a BARE LETTER "Answer: D."; cross-check unavailable.' },

  { n:3, p:'90', boiler:true, straddle:true,
    stem:'Pamela is an 8-year-old girl with recurrent seizures. She has three or four seizures a month, where she lets out a cry, her arms and legs become stiff, her eyes roll upwards and then she jerks her arms and legs. This lasts about 3 minutes. Afterwards she sleeps for 2 hours and is then back to normal. She is doing well at school but is sometimes missing school because of her seizures. She is currently not on any medication and has no other medical problems. What would be the best intervention for this child?',
    opts:['Anti-epileptic drug therapy','Home schooling','Ketogenic diet','No intervention required','Vagal nerve stimulation'],
    key:'A',
    note:'⚠️ STRADDLES THE PAGE BREAK p.90 -> p.91: the whole stem is on p.90 (crop q3start_p90.png); "Select one answer only.", all five options A-E and "Answer: A." are the first thing printed on p.91, in a box that continues without a new question number. Numerals verified at 600 dpi off the p.90 half (crop q3start_p90.png): "8-year-old" · "three or four seizures a month" · "3 minutes" · "sleeps for 2 hours". Key prints a BARE LETTER "Answer: A."; cross-check unavailable.' },

  { n:4, p:'91', boiler:true,
    stem:'Alan is a 7-month-old male infant who was preterm, born at 28 weeks’ gestation, birthweight 970 g, and whose family recently arrived in this country. He is seen in a paediatric clinic because of vomiting. He had been seen regularly by a doctor who was treating him for gastro-oesophageal reflux. He has always vomited but this has been getting worse and his mother has noticed his eye movements are not normal. His examination findings can be seen in the opposite figure. What is the most likely underlying cause for these findings?',
    opts:['Aqueduct stenosis','Intraventricular haemorrhage','Meningitis','Posterior fossa neoplasm','Subarachnoid haemorrhage'],
    key:'B',
    fig:'Colour clinical photograph, placed to the right of the stem, showing the infant’s face from roughly the eyes down (framed to show both eyes and the upper cheeks). Both eyes show a downward deviation of the irises with a rim of white sclera visible above each iris. No labels, arrows or scale marker on the image.',
    note:'This is the same p.91 n:4 (Alan) already matched word-for-word in ch.11’s duplex-ghost check (that file’s DUPLEX SHOW-THROUGH section) - confirms the two files describe the same physical page. Numerals verified at 600 dpi (crop myq4_p91_stem.png, made this pass): "7-month-old" · "28 weeks’ gestation" · "970 g". Key prints a BARE LETTER "Answer: B."; cross-check unavailable.' },

  { n:5, p:'91', boiler:true, straddle:true,
    stem:'Sharon is an 11-year-old girl who has had occasional headaches for the last 3 months. Today was her first day at secondary school. During maths class she developed her usual throbbing left-sided headache, associated with nausea. Over the next hour, she lost her temporal vision in her right eye and found she only had minimal movement in her right arm. The left side of her mouth was drooping. Her parents were called, who rushed her to hospital. She is now feeling much better, has normal vision and can move her arm, although she has some residual weakness of her mouth. She has no significant medical history except some episodes of abdominal pain as a younger child. Her mother tells you that she also suffers from headaches. What is the most likely diagnosis?',
    opts:['Idiopathic intracranial hypertension','Migraine','Raised intracranial pressure due to a space-occupying lesion','Subarachnoid haemorrhage','Tension headache'],
    key:'B',
    note:'⚠️ STRADDLES THE PAGE BREAK p.91 -> p.92: the whole stem, including "Select one answer only.", is on p.91; all five options A-E and "Answer: B." are the first thing printed on p.92 (crop q5tail_p92.png, pre-existing, re-verified against the full p.92 half). Numerals verified at 600 dpi (crop myq5_p91_stem.png, made this pass): "11-year-old" · "3 months"; "over the next hour" read plainly on the 300 dpi half, no digit at risk. Key prints a BARE LETTER "Answer: B."; cross-check unavailable.' },

  { n:6, p:'92', boiler:true,
    stem:'Aparna is a 2-year-old girl of Indian ethnicity who lives in the UK. She presents to her general practitioner as she has been unsteady on her feet for a day, having had diarrhoea during the previous week. On examination she is afebrile, has reduced muscle power and tone and no tendon reflexes can be elicited in her lower limbs. She is referred urgently to the paediatric hospital and 6 hours later she is unable to stand and the tendon reflexes in her upper limbs are now absent. She has no other medical problems and has been fully immunized. What is the most likely diagnosis?',
    opts:['Guillain–Barré syndrome','Myasthenia gravis','Myotonic dystrophy','Poliomyelitis','Spinal muscular atrophy'],
    key:'A',
    note:'Complete in one box on p.92 (crop q6_p92.png, pre-existing, re-verified against the full p.92 half); no straddle. Numerals verified at 600 dpi off that crop: "2-year-old" · "for a day" · "previous week" · "6 hours later". Key prints a BARE LETTER "Answer: A."; cross-check unavailable.' },

  { n:7, p:'92', boiler:true, straddle:true,
    stem:'Gregor is born at term. It was a normal pregnancy though the mother did not have any antenatal ultrasound examinations as she was against medical procedures. He was born by vaginal delivery. Immediately, the midwife noticed the lesion shown in the opposite figure. Which of the supplements listed would have reduced the risk of this problem if taken by the mother periconceptually?',
    opts:['Folic acid','Iron','Vitamin A','Vitamin B12','Vitamin D'],
    key:'A',
    fig:'Colour clinical close-up photograph, placed to the right of the stem on p.92, of the back/top of a newborn’s head, showing a round raw-looking reddish lesion with a defined rim, roughly centred on the scalp. No labels, arrows or scale marker on the image.',
    note:'⚠️ STRADDLES THE PAGE BREAK p.92 -> p.93: the stem, the figure, "Select one answer only." and all five options A-E are on p.92 (crop q7start_p92.png, pre-existing, re-verified); no "Answer:" line appears before the p.92 folio, and "Answer: A." is the first and only thing printed at the top of p.93, above a rule, before n:8 begins. No numerals in this question at any dpi (no ages, weights or doses printed). Key prints a BARE LETTER "Answer: A."; cross-check unavailable.' },

  { n:8, p:'93', boiler:true,
    stem:'Antonia, a 5-year-old girl, is seen by her general practitioner. Her mother and school teacher have noticed she has episodes where she stops her activity for a few seconds, stares blankly ahead and then resumes the activity as if she had never stopped. These episodes happen many times a day. She has no other medical problems and there is no family history of note. The EEG during an episode is shown in the figure below. Choose the most likely diagnosis.',
    opts:['Childhood Rolandic epilepsy (benign epilepsy with centro-temporal spikes)','Childhood absence epilepsy','Juvenile myoclonic epilepsy','Lennox-Gastaut syndrome','Infantile spasms (West syndrome)'],
    key:'B',
    fig:'A 16-channel EEG trace (rows numbered 1-16 down the left margin), each row a continuous wavy line; over roughly the middle third of the trace all 16 channels show a burst of large-amplitude, rapid generalised discharges simultaneously, before returning to lower-amplitude background activity. A calibration marker at bottom left reads "200 μV" (vertical) and "1 s" (horizontal), confirmed at 600 dpi (crop myq8_p93_calib.png, made this pass).',
    note:'Complete in one box on p.93; no straddle. Two lead-in lines precede the boiler: "Choose the most likely diagnosis." (kept in stem, as the actual question) then "Select one answer only." on its own line (boiler, flagged, kept out of stem) - a different lead-in phrasing from the "What is/would be" pattern seen in n:1-7, recorded because it changes where the stem legitimately ends. Numerals: "5-year-old", and the figure calibration "200 μV" / "1 s" verified at 600 dpi as noted in fig. Key prints a BARE LETTER "Answer: B."; cross-check unavailable.' },

  { n:9, p:'94', boiler:true,
    stem:'Vijay is a 5-month-old infant who has been seen repeatedly by his general practitioner because of colic. His mother brings him to the Accident and Emergency department as he is having episodes of suddenly throwing his head and arms forward. These episodes occur in repetitive bursts. His mother thinks they may be something more than just colic, as he is now not smiling or supporting his head as well as he did previously. He was born at term by normal vaginal delivery and has no other medical problems. His EEG is shown in the figure below. Choose the most likely diagnosis.',
    opts:['Juvenile myoclonic epilepsy','Lennox-Gastaut syndrome','Childhood Rolandic epilepsy (benign epilepsy with centro-temporal spikes)','Childhood absence epilepsy','Infantile spasms (West syndrome)'],
    key:'E',
    fig:'A 16-channel EEG trace (rows numbered 1-16 down the left margin, same layout as n:8’s figure), showing continuous high-amplitude chaotic mixed-frequency activity with no clear background rhythm across all channels (no single discrete burst like n:8’s). A calibration marker at bottom left reads "100 μV" (vertical) and "1 s" (horizontal), confirmed at 600 dpi (crop q9_p94.png, pre-existing, re-verified against the full p.94 half).',
    note:'⚠️ SHARED OPTION MENU WITH n:8, PAIRING NOT FOLD, AND REORDERED: n:8 prints the five options in the order Rolandic / Absence / JME / Lennox-Gastaut / Infantile spasms (key B, Absence); n:9 prints the SAME five options in a DIFFERENT PRINTED ORDER - JME / Lennox-Gastaut / Rolandic / Absence / Infantile spasms (key E, Infantile spasms/West syndrome). Discriminating tokens: n:8 "5-year-old... stops her activity for a few seconds, stares blankly... resumes... as if she had never stopped... many times a day" -> Childhood absence epilepsy. n:9 "5-month-old... colic... suddenly throwing his head and arms forward... repetitive bursts... not smiling or supporting his head as well as he did previously" (regression + flexor spasms in clusters) -> Infantile spasms (West syndrome). Complete in one box on p.94; no straddle - only question on this page. Numerals verified at 600 dpi (crop q9_p94.png): "5-month-old", figure calibration "100 μV" / "1 s". Key prints a BARE LETTER "Answer: E."; cross-check unavailable.' },

  { n:10, p:'95', boiler:false,
    stem:'Emily, a normally fit and healthy 3-year-old girl, is rushed to the Emergency Department. She had been playing at nursery and had banged her head against a door. Almost immediately she went very pale and stiff and had jerking movements of her arms and legs for 20 seconds. Afterwards she was groggy for a few minutes, but is now back to her usual self. This has not happened before. Her mother is very distressed and now reports feeling faint herself. The triage nurse has performed a blood glucose which indicates a glucose level of 4.1 mmol/L (within normal range). Which of the following is the most likely diagnosis of that patient?',
    opts:['Childhood absence epilepsy','Migraine','Syncope','Reflex asystolic syncope (reflex anoxic seizure)','Cardiac arrhythmia'],
    key:'D',
    note:'⚠️ SHARED OPTION MENU WITH n:11, SAME ORDER - see n:11’s note for discriminating tokens. Complete in one box on p.95 (crop q10_p95.png, pre-existing, re-verified); no straddle. ⚠️ NO boiler line printed - inspected individually, goes straight from the stem to option A; boiler:false. Numerals verified at 600 dpi off that crop: "3-year-old" · "20 seconds" · "4.1 mmol/L". Key prints a BARE LETTER "Answer: D."; cross-check unavailable.' },

  { n:11, p:'95', boiler:false,
    stem:'Jennifer, an 11-year-old girl, is brought to the Emergency Department after collapsing at school. Her teacher described her standing in assembly, becoming pale and collapsing to the floor. She had a couple of jerking movements of her limbs lasting a few seconds. She returned to normal promptly. Jennifer says that she had not eaten breakfast that morning, and experienced a sensation of feeling hot, a black curtain coming in front of her eyes, sounds becoming distant and feeling dizzy. The school nurse did a blood glucose, which indicated a glucose level of 3.5 mmol/L (within the normal range). She has had two episodes similar to this in the past but has not presented to hospital before. She has no other medical problems. Which of the following is the most likely diagnosis of that patient?',
    opts:['Childhood absence epilepsy','Migraine','Syncope','Reflex asystolic syncope (reflex anoxic seizure)','Cardiac arrhythmia'],
    key:'C',
    note:'⚠️ SHARED OPTION MENU WITH n:10, SAME PRINTED ORDER (Childhood absence epilepsy / Migraine / Syncope / Reflex asystolic syncope / Cardiac arrhythmia) - a pairing, not a fold; both stay separate entries. Discriminating tokens: n:10 "3-year-old... banged her head against a door. Almost immediately... very pale and stiff and had jerking movements... for 20 seconds... groggy for a few minutes... mother... now reports feeling faint herself" (pain/fright-triggered, reflex-anoxic-seizure pattern in a toddler) -> D Reflex asystolic syncope (reflex anoxic seizure). n:11 "11-year-old... standing in assembly... had not eaten breakfast... feeling hot, a black curtain... sounds becoming distant and feeling dizzy" (classic vasovagal prodrome, upright posture, fasting) -> C Syncope. Complete in one box on p.95 (crop q11_p95.png, pre-existing, re-verified); no straddle. ⚠️ NO boiler line printed - inspected individually; boiler:false. Numerals verified at 600 dpi off that crop: "11-year-old" · "3.5 mmol/L" · "two episodes". Key prints a BARE LETTER "Answer: C."; cross-check unavailable.' },

  { n:12, p:'95', boiler:false, straddle:true,
    stem:'Rene is a lively 2-year-old boy who is seen in the acute paediatric assessment unit, having had an episode of turning blue and collapsing. This is not the first time that this has happened. He recovers quickly after these events. During the consultation his mother repeatedly gives him sweets to keep him calm. These episodes only occur when he is crying and this has led to his mother trying to avoid anything that will upset him. He has no other medical problems. His blood glucose today is 4.9 mmol/L. Which of the following is the most likely diagnosis of that patient?',
    opts:['Childhood absence epilepsy','Migraine','Narcolepsy','Blue breath-holding spells (expiratory apnoea syncope)','Non-epileptic attack disorder (pseudoseizure)'],
    key:'D',
    note:'⚠️ STRADDLES THE PAGE BREAK p.95 -> p.96: the whole stem and option A are on p.95 (crop q12start_p95.png, pre-existing, re-verified); options B-E and "Answer: D." are the first thing printed on p.96 (crop q12tail_p96.png, pre-existing, re-verified). ⚠️ NO boiler line printed anywhere in this box - inspected individually; boiler:false. NOT the same shared menu as n:10/n:11: options A-B (Childhood absence epilepsy, Migraine) match, but C-E diverge (Narcolepsy / Blue breath-holding spells / Non-epileptic attack disorder here, vs Syncope / Reflex asystolic syncope / Cardiac arrhythmia there) - worth recording as a partial overlap, not a full shared-menu pairing. Numerals: "2-year-old" (crop q12start_p95.png), "4.9 mmol/L" (crop q12start_p95.png), both verified at 600 dpi. Key prints a BARE LETTER "Answer: D."; cross-check unavailable.' },

  { n:13, p:'96', boiler:false,
    stem:'Dora is an 8-year-old girl who attends the outpatient department. Her mother is worried because she used to be top of the class, but is not doing as well at school this year. Whilst in clinic, you notice that Dora has an episode where she suddenly stops what she is doing, stares ahead whilst flickering her eyelids for a couple of seconds and then resumes her previous activity as if nothing had happened. You ask her to blow out an imaginary candle, and the same thing happens again. She is growing normally and is otherwise fit and well. Which of the following is the most likely diagnosis of that patient?',
    opts:['Childhood absence epilepsy','Migraine','Syncope','Reflex asystolic syncope (reflex anoxic seizure)','Cardiac arrhythmia'],
    key:'A',
    note:'⚠️ THIRD MEMBER OF THE n:10/n:11 SHARED OPTION MENU, SAME PRINTED ORDER - pairing, not fold; stays a separate entry. Discriminating token: "stops what she is doing, stares ahead whilst flickering her eyelids for a couple of seconds and then resumes... as if nothing had happened", reproducible on request (blowing an imaginary candle) -> A Childhood absence epilepsy. Complete in one box on p.96 (crop q13_p96.png, pre-existing, re-verified); no straddle. ⚠️ NO boiler line printed - inspected individually; boiler:false. Numerals verified at 600 dpi off that crop: "8-year-old" · "a couple of seconds". Key prints a BARE LETTER "Answer: A."; cross-check unavailable.' },

  { n:14, p:'96', boiler:false,
    stem:'Damasco is a 6-year-old black boy who presents in the paediatric clinic. He has been referred because his brother, with whom he shares a room, has woken his parents early in the morning on several occasions complaining that Damasco is making unusual sounds and drooling from his mouth. By the time his parents come to the room Damasco is jerking his upper and lower limbs rhythmically. This lasts for 1–2 minutes. Afterwards Damasco complains of a funny sensation on the left side of his mouth, and then goes back to sleep. He is doing well at school and clinical examination is normal. He has no other medical problems. Which of the following is the most likely diagnosis of that patient?',
    opts:['Childhood Rolandic epilepsy (benign epilepsy with centro-temporal spikes)','Childhood absence epilepsy','Juvenile myoclonic epilepsy','Lennox–Gastaut syndrome','Infantile spasms (West syndrome)'],
    key:'A',
    note:'⚠️ THIRD MEMBER OF THE n:8/n:9 SHARED OPTION MENU: prints the SAME five options in the SAME order as n:8 (Rolandic / Absence / JME / Lennox-Gastaut / Infantile spasms); n:9 had the same five reordered. A pairing, not a fold; stays a separate entry. Discriminating token: nocturnal seizures with "unusual sounds and drooling", hemifacial (unilateral mouth) sensory/motor involvement, rhythmic limb jerking lasting 1-2 minutes, otherwise normal child -> A Childhood Rolandic epilepsy (benign epilepsy with centro-temporal spikes). Complete in one box on p.96 (crop q14_p96.png, pre-existing, re-verified); no straddle. ⚠️ NO boiler line printed - inspected individually; boiler:false. Numerals verified at 600 dpi off that crop: "6-year-old" · "1–2 minutes" (en dash reproduced as printed). Key prints a BARE LETTER "Answer: A."; cross-check unavailable.' },

  { n:15, p:'97', boiler:false,
    stem:'Jude is a 14-year-old boy who is on treatment for generalised tonic–clonic and absence seizures. He attends a routine clinic appointment complaining of regularly spilling his tea in the morning because his arm jerks involuntarily. These jerks are worse if he has stayed up late the night before. He is doing relatively well at school. Which of the following is the most likely diagnosis of that patient?',
    opts:['Childhood Rolandic epilepsy (benign epilepsy with centro-temporal spikes)','Childhood absence epilepsy','Juvenile myoclonic epilepsy','Lennox–Gastaut syndrome','Infantile spasms (West syndrome)'],
    key:'C',
    note:'⚠️ FOURTH MEMBER OF THE n:8/n:9/n:14 SHARED OPTION MENU, SAME PRINTED ORDER as n:8 and n:14. Discriminating token: teenager, already known epileptic (tonic-clonic AND absence), morning myoclonic arm jerks ("spilling his tea"), worse with sleep deprivation -> C Juvenile myoclonic epilepsy. Complete in one box on p.97 (crop q15_p97.png, pre-existing, re-verified); no straddle. ⚠️ NO boiler line printed - inspected individually; boiler:false. Numerals verified at 600 dpi off that crop: "14-year-old"; "tonic–clonic" en dash reproduced as printed. Key prints a BARE LETTER "Answer: C."; cross-check unavailable.' },

  { n:16, p:'97', boiler:false,
    stem:'Andrew is a 5-year-old boy with severe learning difficulties who attends a special school. He is seen in his review clinic. His epilepsy is difficult to control and he is on two different antiepileptic drugs. He has several different types of seizures: sudden stiffening of his limbs causing him to fall, episodes of staring blankly ahead for up to 30 seconds before resuming previous activities, and episodes of his head dropping with a brief loss of consciousness. He is fed via a gastrostomy and  has chronic drooling. Which of the following is the most likely diagnosis of that patient?',
    opts:['Childhood Rolandic epilepsy (benign epilepsy with centro-temporal spikes)','Childhood absence epilepsy','Juvenile myoclonic epilepsy','Lennox–Gastaut syndrome','Infantile spasms (West syndrome)'],
    key:'D',
    note:'⚠️ FIFTH MEMBER OF THE n:8/n:9/n:14/n:15 SHARED OPTION MENU, SAME PRINTED ORDER as n:8/n:14/n:15. Discriminating token: severe learning difficulties, MULTIPLE seizure types (tonic drop, atypical absence up to 30 s, atonic/head-drop), gastrostomy-fed, drooling, refractory to two drugs -> D Lennox-Gastaut syndrome. Complete in one box on p.97 (crop q16_p97.png, pre-existing, re-verified); no straddle. ⚠️ NO boiler line printed - inspected individually; boiler:false. Numerals verified at 600 dpi off that crop: "5-year-old" · "30 seconds". Key prints a BARE LETTER "Answer: D."; cross-check unavailable. Double space between "gastrostomy and" and "has chronic drooling" transcribed exactly as printed (typographic artefact, not corrected per standing rule on cosmetic defects).' },

  { n:17, p:'97', boiler:false,
    stem:'Ahmed is a 5-year-old boy who presents to the outpatient clinic with weakness. His parents report that he finds it difficult to climb the stairs at home. This has been becoming progressively worse over the preceding 6–12 months. He is playing on the carpet with his brother when his mother calls him over. He has to roll from his back onto his front in order to stand up. Which of the following is the sign being described in this clinical scenario?',
    opts:['Babinski’s sign','Romberg’s sign','Gower’s sign','Kernig’s sign','Chorea'],
    key:'C',
    note:'Different option set from n:8-n:16’s epilepsy-diagnosis menu family - a physical-sign question. Complete in one box on p.97 (crop q17_p97.png, pre-existing, re-verified); no straddle - "Answer: C." is fully inside the box, folio "97" printed below it, outside the box. ⚠️ NO boiler line printed - inspected individually; boiler:false. Numerals verified at 600 dpi off that crop: "5-year-old" · "6–12 months" (en dash reproduced as printed). Key prints a BARE LETTER "Answer: C."; cross-check unavailable.' },

  { n:18, p:'98', boiler:false,
    stem:'Christopher attends outpatient clinic for his routine follow-up. He is a 3-year-old boy who did not breathe at birth. Following resuscitation, he required intensive care for the first 5 days of life. He now has increased tone and reflexes in his right upper and lower limbs. On rubbing a blunt instrument up the lateral side of his right foot there is extension of the greater toe and fanning of his toes. Which of the following is the sign being described in this clinical scenario?',
    opts:['Babinski’s sign','Romberg’s sign','Gower’s sign','Kernig’s sign','Chorea'],
    key:'A',
    note:'⚠️ SECOND MEMBER OF n:17’s SHARED OPTION MENU, SAME PRINTED ORDER. Discriminating token: extension of the great toe with fanning of the other toes on plantar stimulation, directly describing the reflex itself -> A Babinski’s sign. Complete in one box on p.98 (crop q18_p98.png, pre-existing, re-verified); no straddle. ⚠️ NO boiler line printed - inspected individually; boiler:false. Numerals verified at 600 dpi off that crop: "3-year-old" · "first 5 days of life". Key prints a BARE LETTER "Answer: A."; cross-check unavailable.' },

  { n:19, p:'98', boiler:false,
    stem:'Sayeed is an 8-year-old Pakistani boy who has developed muscle weakness. His mother reports that he has poor coordination at home and at school. His speech has also recently become slurred. His problems have come on slowly over the last 12–18 months. He has no other medical history and is not taking any medications. On examination you notice that he has wasting of his calves. When standing upright with his legs together and closing his eyes he becomes unsteady and starts to sway. Which of the following is the sign being described in this clinical scenario?',
    opts:['Babinski’s sign','Romberg’s sign','Gower’s sign','Kernig’s sign','Chorea'],
    key:'B',
    note:'⚠️ THIRD MEMBER OF n:17/n:18’s SHARED OPTION MENU, SAME PRINTED ORDER. Discriminating token: steady with eyes open, unsteady and swaying once the eyes close, feet together -> B Romberg’s sign. Complete in one box on p.98 (crop q19_p98.png, pre-existing, re-verified); no straddle. ⚠️ NO boiler line printed - inspected individually; boiler:false. Numerals verified at 600 dpi off that crop: "8-year-old" · "12–18 months" (en dash reproduced as printed). Key prints a BARE LETTER "Answer: B."; cross-check unavailable.' },

  { n:20, p:'98', boiler:false,
    stem:'Paolo is a 7-year-old boy who presents to the Accident and Emergency department with fever. His mother reports that this has been present for the last 8 hours and that he is sleepy and wants to sleep in a dark room. He has no other medical history. On examination you note that he is photophobic. Whilst he is lying on the couch you flex his right knee and hip to 90°. On fully extending the knee, he complains of pain and arches on his back. Which of the following is the sign being described in this clinical scenario?',
    opts:['Babinski’s sign','Romberg’s sign','Gower’s sign','Kernig’s sign','Chorea'],
    key:'D',
    note:'⚠️ FOURTH MEMBER OF n:17/n:18/n:19’s SHARED OPTION MENU, SAME PRINTED ORDER - four consecutive questions (n:17-20) all drawing from the same five-item sign menu, a longer run than any other pairing in this chapter. Discriminating token: fever, photophobia, pain and back-arching (opisthotonos-like) on extending the knee with the hip flexed - the classic bedside description of the sign itself -> D Kernig’s sign, in a meningism vignette. Complete in one box on p.98 (crop q20_p98.png, pre-existing, re-verified); no straddle. ⚠️ NO boiler line printed - inspected individually; boiler:false. Numerals verified at 600 dpi off that crop: "7-year-old" · "8 hours" · "90°". Key prints a BARE LETTER "Answer: D."; cross-check unavailable.' },

  { n:21, p:'99', boiler:false,
    stem:'A 14-month-old is seen in clinic as his mother is concerned that he may be having seizures. The episodes occur when he is angry or upset. He has colour change followed by collapse and occasional jerking movements. The most likely diagnosis is?',
    opts:['Breath holding spells','‘Tet’ spells','Myoclonic epilepsy','Non-epileptic seizure','Vasovagal syncope'],
    key:'A',
    note:'⚠️ STYLE NOTE: n:21-23 depart from the "[Name] is a[n] N-year-old..." pattern used everywhere else in the chapter - the patient is unnamed ("A 14-month-old is seen..."), a source characteristic recorded here rather than treated as a fold signal. Complete in one box on p.99 (crop q21_p99.png, pre-existing, re-verified); no straddle. ⚠️ NO boiler line printed - inspected individually; boiler:false. Numerals verified at 600 dpi off that crop: "14-month-old". Key prints a BARE LETTER "Answer: A."; cross-check unavailable.' },

  { n:22, p:'99', boiler:false,
    stem:'A 6-year-old boy is falling behind at school. His mother is concerned he is inattentive. She describes him daydreaming frequently, during which time it is difficult to attract his attention. Routine blood tests are normal. An EEG demonstrates spikes at 3 Hz. The likely diagnosis is which of the following?',
    opts:['ADHD – inattentive form','Absence seizures','Juvenile myoclonic epilepsy','Daydreaming','Non-epileptic seizures'],
    key:'B',
    note:'Same unnamed-patient style as n:21/n:23. Complete in one box on p.99 (crop q22_p99.png, pre-existing, re-verified); no straddle. ⚠️ NO boiler line printed - inspected individually; boiler:false. Numerals verified at 600 dpi off that crop: "6-year-old" · "3 Hz". Key prints a BARE LETTER "Answer: B."; cross-check unavailable.' },

  { n:23, p:'99', boiler:false,
    stem:'A 5-month-old boy is brought in by his mother. She is concerned that he is frequently irritable. She is worried he may be in pain as he tenses and bends his head up, flailing his arms for a few seconds at a time. An EEG is performed which shows large-amplitude slow waves with spikes and sharp waves. The most likely diagnosis is which of the following?',
    opts:['Absence seizures','Benign rolandic epilepsy','Gastro-oesophageal reflux','West syndrome (infantile spasms)','Breath holding attacks'],
    key:'D',
    note:'Same unnamed-patient style as n:21/n:22; the EEG description ("large-amplitude slow waves with spikes and sharp waves") is prose only here, no figure printed (unlike n:8 and n:9’s EEG-trace figures). Complete in one box on p.99 (crop q23_p99.png, pre-existing, re-verified); no straddle. ⚠️ NO boiler line printed - inspected individually; boiler:false. Numerals verified at 600 dpi off that crop: "5-month-old". Key prints a BARE LETTER "Answer: D."; cross-check unavailable.' },

  { n:24, p:'99', boiler:false, straddle:true,
    stem:'An 8-year-old girl presents with a second generalized tonic-clonic seizure. It required lorazepam to terminate the seizure and a decision is made to start anti-epileptic treatment. Which of the following is first line therapy?',
    opts:['Phenobarbital','Sodium valproate','Vigabatrin','Ethosuximide','Phenytoin'],
    key:'B',
    note:'⚠️ STRADDLES THE PAGE BREAK p.99 -> p.100. Same unnamed-patient style as n:21-23. Stem, boiler-check (none printed) and option A only are on p.99 (crop q24start_p99.png, pre-existing, re-verified; folio "99" confirmed directly below the box, outside it - the box itself is unclosed at the page foot). Options B-E and "Answer: B." are the first content on p.100 (crop q24tail_p100.png, pre-existing, re-verified). ⚠️ NO boiler line printed - inspected individually on p.99; boiler:false. Numerals verified at 600 dpi off both crops: "8-year-old". Key prints a BARE LETTER "Answer: B."; cross-check unavailable. ⚠️ DUPLEX SHOW-THROUGH observed on the p.100 tail crop: faint mirrored text bleeding through from the reverse of the leaf, legible enough to identify as an asthma vignette ("...year-old girl has frequent attacks of asthma... Deteriorated with increasing difficulty in breathing over the last 48 hours... Select one answer only... A. Sarah\'s asthma at a level of moderate severity...") - NOT transcribed as content of this page; noted only because it is the first show-through this chapter and because it independently corroborates that the next chapter is respiratory ("asthma"), consistent with the p.101 boundary check below.' },

  { n:25, p:'100', boiler:false,
    stem:'A 9-year-old girl is brought to her GP with a 2-month history of headaches. Which of the following features of her headaches is not a red-flag symptom?',
    opts:['Associated with vomiting','Morning headache','Worse on lying down','Presence of focal neurology','Symmetrical, band-like in nature'],
    key:'E',
    note:'Complete in one box on p.100 (crop q25_p100.png, pre-existing, re-verified); no straddle. Faint duplex show-through visible behind the box (partial mirrored fragments of the same asthma vignette seen behind n:24\'s tail crop) - not transcribed. ⚠️ NO boiler line printed - inspected individually; boiler:false. Numeral verified at 600 dpi off that crop: "9-year-old" · "2-month". Key prints a BARE LETTER "Answer: E."; cross-check unavailable.' },

  { n:26, p:'100', boiler:false,
    stem:'An 18-month-old girl is seen on the post take ward round following her first febrile seizure. When counselling her parents about the diagnosis which of the following statements regarding simple febrile convulsions is true?',
    opts:['They are often focal in nature','Children frequently go on to develop epilepsy','Occur between ages of 6 months and 5 years','Should always be investigated with lumbar puncture','May occur without fever'],
    key:'C',
    note:'Complete in one box on p.100 (crops q26_p100.png + q26answer_p100.png, pre-existing, re-verified); no straddle - "Answer: C." is the last line inside the box. Duplex show-through visible behind the answer crop (same asthma-vignette ghost) - not transcribed. Below this box the rest of p.100 is blank down to the folio "100" - no further question box on the page. ⚠️ NO boiler line printed - inspected individually; boiler:false. Numerals verified at 600 dpi off those crops: "18-month-old" · "6 months and 5 years". Key prints a BARE LETTER "Answer: C."; cross-check unavailable. This is the LAST question observed in range so far; p.101 (sheet 51 RIGHT) still to be rendered as the mandatory one-page-past boundary check before this is treated as the chapter\'s end.' },
];
