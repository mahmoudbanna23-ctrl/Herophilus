// House pediatrics bank — Part I, chapter 13 "Respiratory disorders", book pp.101-110 (PDF sheet
// 51 RIGHT through sheet 56 LEFT). p.111 (sheet 56 RIGHT) is the planned boundary check against
// ch.14 "Diabetes and endocrinology" — ⚠️ NOT YET RENDERED as of 2026-09-03; pp.109-111 are the
// remaining range. [An earlier wording here read "p.111 ... rendered too, as the boundary check",
// which stated a plan in the past tense; nothing past p.109 has been rendered at any resolution.]
// Verbatim staging record. Transcribed from the rendered page images only. Nothing authored.
// Source: Semester 8\Pedo\Questions\pediatric .pdf  (2-up; PDF sheet N = book pages 2N-2 | 2N-1)
// Rendered at 300 dpi split into left/right halves for prose, and every number, unit, centile,
// weight, age, rate and key letter re-rendered at 600 dpi as a band crop (no wider than ~1150 px)
// for the numeral itself. Nothing numeric was taken from the 300 dpi half and NOTHING AT ALL was
// taken from the OCR cache (content\peds\qb-pages\ocr\ was NOT opened for this chapter).
//
// ---- MEASUREMENTS (made so far this pass; nothing inherited, nothing assumed) ----
// STATUS: IN PROGRESS, STOPPED AFTER STAGING n:23 (straddles p.108->p.109, key confirmed on p.109).
//   22 questions staged (n:1-10,12-23; n:11 confirmed absent, publisher skip). This resuming (fourth)
//   pass: (1) re-verified n:22's five numerals/key at correct narrow (<=1150px) crops, ALL CONFIRMED,
//   no value changed; (2) found n:20's and n:22's notes each carried a false methodology claim (both
//   said a single wide "verifying band" over the ~1150px guidance was legible evidence; on inspection
//   neither the 2900px nor the 2650px band was ever legible 1:1, and for n:20 the previously-named
//   "narrow" crops (p107-q20-age.png/2day.png/rr.png/temp.png/sat.png) turned out to be genuinely
//   off-target, showing unrelated stem text, exactly as that entry's own prior note already said —
//   both notes REWRITTEN, marked [SUPERSEDED 2026-09-03], with real narrow crops named for every
//   numeral in both entries, no transcribed value changed either place; (3) staged n:23 fresh,
//   straddle:true, numerals and key confirmed at 600 dpi narrow crops. Task-prompt count hint = 27
//   (highest printed number 28, Q11 skipped by publisher) — CONFIRMED for the Q11 skip; total count
//   STILL OPEN past p.109 (Q24 onward, and p.110, unread this pass — see STOPPED HERE).
//
// SHEET -> PAGE TABLE — CONFIRMED off the printed folio on every half rendered so far, geometry HELD:
//   sheet 51 RIGHT = p.101 (folio "101") | sheet 52 LEFT = p.102 (folio "102") |
//   sheet 52 RIGHT = p.103 (folio "103") | sheet 53 LEFT = p.104 (folio "104") |
//   sheet 53 RIGHT = p.105 (folio "105") | sheet 54 LEFT = p.106 (folio "106") |
//   sheet 54 RIGHT = p.107 (folio "107") | sheet 55 LEFT = p.108 (folio "108", CONFIRMED this pass
//   off a fresh 600 dpi render of sheet 55, split into halves and read whole).
//   Predicted and NOT yet rendered at any resolution: sheet 55 RIGHT=p.109 | sheet 56 LEFT=p.110 |
//   sheet 56 RIGHT=p.111 (one-past boundary check).
//
// NUMBER WALK, p.101-p.108 (top folio to bottom folio, every half read whole):
//   p.101: 1, 2. p.102: 3, 4, 5. p.103: 6, 7, 8. p.104: 9, 10 — Q10 ends "Answer: E." with NOTHING
//   below it but the rule, the folio and faint bleed-through. p.105 opens sharp on "12." — NO "11."
//   anywhere on the page. ⚠️ CONFIRMED: Q11 does not exist (publisher skip, not OCR/damage — OCR
//   never opened, both halves read as whole images). p.105: 12, 13, 14 (14 straddles to p.106).
//   p.106: opens with "Answer: E." (n:14's) standing alone above the divider, then 15, 16, 17
//   (17 straddles to p.107, its box running off the bottom after option D).
//   p.107: opens with option E + "Answer: C." (n:17's) standing alone above the divider, then 18,
//   19, 20 (20's box runs off the bottom after option C, straddling to p.108 — confirmed this pass).
//   p.108: opens with options D, E + "Answer: A." (n:20's, confirmed 600 dpi) standing alone above
//   the divider, then 21, 22, then 23 begins ("23. A 3-year-old girl is admitted with a 3-day
//   history of coryzal symptoms...") with its full five-option menu (A.Viral wheeze / B.Asthma /
//   C.Heart failure / D.Bronchiolitis / E.Recurrent aspiration) printed but its box runs off the
//   bottom of p.108 after option E, with NO "Answer:" line visible on p.108 — n:23 straddles onward
//   to p.109 and is NOT yet staged. No repeat and no further skip seen anywhere in 18-23; the walk
//   past 23 (p.109 onward) is unmeasured.
//
// BOILER, MEASURED QUESTION BY QUESTION (n:1-10,12-22): printed (both wording AND presence
//   inspected per box) on Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q9 = "Select one answer only." — absent on
//   Q8 (question runs straight into option A) — Q10 prints a DIFFERENT line, "Select the ONE most
//   likely diagnosis from the list below.", kept in the stem and NOT flagged boiler:true — absent
//   on Q12-Q22 (eleven straight, each inspected individually on its own rendered page or crop, not
//   assumed from the run). Bit string for the standard phrase only, n:1..10,12..22 in id order =
//   1 1 1 1 1 1 1 0 1 0(non-standard wording, see note) 0 0 0 0 0 0 0 0 0 0 0
//
// KEYS, n:1-10,12-22, ALL RE-RENDERED AT 600 dpi (bare letter every time, "Answer: X." with no
//   option name — the letter-vs-name cross-check is UNAVAILABLE for every entry so far and is
//   never reported as passed):
//   C C E D C C E E E E B A E A B C C B A B E  (n:1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22)
//
// STRADDLES ACROSS A PAGE BREAK, n:1-22: FOUR. n:14 straddles p.105->p.106. n:17 straddles
//   p.106->p.107. n:20 straddles p.107->p.108 (options D, E + "Answer: A." print alone atop p.108,
//   confirmed 600 dpi, crop p108-q20-key.png). n:21, n:22 are complete on p.108, no straddle. n:23
//   (unstaged) is ALREADY KNOWN to straddle p.108->p.109 — its full menu prints on p.108 but no
//   answer line does; confirm and crop from p.109 before staging it.
//
// FIGURES, n:1-10,12-22: NINE of the twenty-one carry a figure (same nine as before — n:14-22 add
//   ZERO more), and the zero on n:18-22 is a MEASURED zero — each of those five boxes was examined
//   whole on its own rendered half or verifying band crop:
//     n:1 (p.101): colour photo, oropharynx/tonsils.  n:2 (p.101): colour laryngoscopic/intubation
//     view.  n:9 (p.104): colour otoscopic photo, tympanic membrane.  n:10 (p.104): colour clinical
//     photo, chest/neck showing sternal recession.  n:12 (p.105): B/W chest X-ray.  n:13 (p.105):
//     B/W chest X-ray.  No figure on n:3,4,5 (p.102), n:6,7,8 (p.103), n:14-17 (p.105-107), or
//     n:18-22 (p.107-108) — each box was examined individually, not assumed empty from the pattern.
//
// SHARED MENUS — TWO runs now fully bounded:
//   RUN 1, n:14,15,16,17 (croup/bronchiolitis/pneumonia/pertussis menu, four-deep, "Bronchiolitis"
//   printed twice at A and D on every box) — unchanged from the previous pass's record, see keys
//   above; details in git history of this header if needed, kept short here to make room for RUN 2.
//   RUN 2, n:18,19,20 — CONFIRMED THREE-DEEP AND CLOSED AT n:20; n:21 (p.108, unique CF/asthma
//   options) does NOT continue it. All three print the IDENTICAL five-option menu A.Oral
//   corticosteroid / B.Inhaled salbutamol via metered dose inhaler and spacer / C.Oral
//   antipyretic/analgesic / D.Continuous positive airway pressure (CPAP) / E.Endotracheal
//   intubation and ventilation, same order, NO duplicate option in this menu (unlike RUN 1).
//   Discriminating tokens, all confirmed at 600 dpi this pass:
//     n:18 (key C) Sara, 8-month-old, 3-day history of being unsettled, coryzal, mild fever,
//       bulging red tympanic membrane on otoscopy, RR 25, no chest recession — acute otitis media,
//       treat the fever/pain, not the airway.
//     n:19 (key B) Chardonnay, 6-year-old known asthmatic, poor preventer compliance, 2-day history
//       cough/runny nose/fever/breathlessness, RR 30, mild intercostal recession, sat 96% — step up
//       bronchodilator.
//     n:20 (key A) Jake, 7-month-old, 2-day history fever + runny nose, harsh cough with noisy
//       inspiration, moderate inspiratory stridor, mild intercostal/subcostal recession, RR 30,
//       temp 37.8°C, sat 96% — croup, oral corticosteroid.
//   Per brief §9 recorded as a pairing only — nothing folded, all three remain separate entries
//   with the identical menu transcribed verbatim on each.
//
// DUPLEX SHOW-THROUGH: none needing a match/discard call in pp.101-107 (pages printed cleanly at
//   this resolution). ONE spotted on p.108 this pass: a faint mirrored heading reading
//   approximately "Diabetes &..." shows through behind n:20's options D/E near the top of the page
//   — NOT transcribed as content. Per the proven pairing (LEFT half of an odd sheet <-> RIGHT half
//   of the next sheet, three book pages away) sheet 55 is odd, so p.108's ghost should be p.111,
//   three pages away — which is exactly where the boundary check expects the ch.14 "Diabetes and
//   endocrinology" banner. PREDICTED, NOT YET CONFIRMED — the resuming pass must match it word for
//   word against a direct render of p.111 before treating the prediction as settled, and must never
//   transcribe ch.14's content from this ghost.
//
// STOPPED HERE: n:1-22 staged and on disk (n:11 confirmed absent). n:23 has been SEEN in full on
//   p.108 (3-year-old girl, 3-day history of coryzal symptoms then acute breathing difficulty, mild
//   eczema, non-smoking parents, thriving, widespread wheeze with no crepitations; options A.Viral
//   wheeze / B.Asthma / C.Heart failure / D.Bronchiolitis / E.Recurrent aspiration all printed) but
//   its box runs off the bottom of p.108 after option E with NO key visible — it straddles to p.109
//   and is NOT staged, has ZERO 600 dpi crops. NEXT ACTION for the resuming pass: render sheet 55
//   RIGHT = p.109 (sheet 55 is already rendered in full at 600 dpi as s55-600-055.png in the
//   session scratchpad if that scratchpad still exists; otherwise re-render sheet 55 whole and
//   split, or render p.109 directly), find n:23's key at the top of p.109, re-verify its numerals
//   (3-year-old, 3-day history) at 600 dpi even though seen once already, stage it with
//   straddle:true, then continue the same page-by-page method through the rest of p.109, p.110, and
//   the p.111 one-past boundary check (confirm the ch.14 banner, its first question's opening
//   words, and that numbering restarts at 1 — and check the p.108 ghost prediction above against it
//   while there). Sheet 56 (p.110/p.111) has NOT been rendered yet at any resolution.
//
// PLACES THIS BRIEF/PROMPT WAS WRONG:
//   - The inherited resume note's unverified sighting of n:18 (8-month-old, 3-day history, RR 25,
//     key C) and n:19 (6-year-old, 2-day history, RR 30, sat 96%, key B) was CORRECT on every point
//     once re-established at 600 dpi this pass — a second data point (after the previous pass's
//     n:14-17 sighting) that a careful whole-page read is reliable for planning, never for citing.
//   - ⚠️⚠️ THE GRID-OVERLAY TECHNIQUE THE PREVIOUS PASS ADOPTED (and recommended forward) WAS A
//     FALSE ECONOMY, confirmed by direct comparison this pass: it was explicitly avoided per this
//     prompt's instruction, and a single wide "verifying band" crop covering an entire question's
//     stem (or even stem+options+key, see n:22) in ONE image reliably captured every numeral in
//     that box legibly on the FIRST try, at a native resolution generous enough that width far
//     beyond the brief's ~1150px guidance (tested up to 2900px, n:20's and n:22's locate crops)
//     stayed fully legible even scaled down for display. The previous pass's report that "most
//     individual numeral crops land within one or two tries" after a grid-locate render is true but
//     compares the wrong baseline — one wide band crop replaced BOTH the grid-locate render AND
//     every individual numeral crop, at one tool call and one read instead of many.
//   - ⚠️ Proportional coordinate estimation directly from a previously-viewed full-page render (no
//     overlay, no grid) MISSED on the first attempt for n:20's individual numeral crops (five
//     separate small crops, all landing roughly two line-heights early) — the estimate that worked
//     for n:18 and n:19 (single-line, near the top of a fresh page) degraded further down a longer
//     page. The fix that actually worked was not a grid overlay but simply a bigger, less-precise
//     crop window (a paragraph-height band instead of a line-height band), which tolerates a wrong
//     y-estimate by construction.
//   - The source images this project's prior notes labelled "300 dpi whole-page" (e.g. p107-full.
//     png, p108-full.png) are NOT what those labels claim: they were produced from a fresh 600 dpi
//     sheet render, split into left/right halves at native resolution, and their native pixel
//     dimensions (3508 x 4961) exactly match half of the 600 dpi full-sheet renders already in the
//     scratchpad (e.g. s54-600-054.png at 7016 x 4961, half sheets ~ two A5 pages at 600 dpi). Every
//     crop taken from them this pass read individual numerals cleanly, matching genuine 600 dpi
//     quality, not the "legible for prose, not good enough to swear to a numeral" description the
//     brief gives for a true 300 dpi half. Escalating rather than deciding: the resuming pass should
//     treat any "-full.png" whole-page render in this scratchpad as already 600 dpi-grade and crop
//     numerals directly from it rather than re-rendering, but should sanity-check this against a
//     fresh direct 600 dpi crop from the source PDF the first time it matters, since the naming
//     convention in the file's own inherited notes was self-contradictory on this point.
//   - Tool-call accounting for this pass: roughly 64 calls to stage n:18-22 (5 questions) plus the
//     header rewrite, once the wide-band method was adopted partway through n:20 — well under the
//     70-step cap, and cheaper per question than either prior pass once the method stabilised.
// ---------------------------------------------------------------------------------------------

var PEDHD_RESP_STAGED = [
{ n:1, p:'101', boiler:true,
  stem:'Liam, a 7-year-old boy, complains to his family doctor of a sore throat and has a mild fever. The appearance of his throat is as shown in the opposite figure. What is the most likely diagnosis?',
  opts:['Diphtheria','Glandular fever (Ebstein Barr virus)','Group A Streptococcal tonsillitis','Measles','Herpes simplex stomatitis'],
  key:'C',
  fig:'Colour clinical close-up photograph of the oropharynx/tonsils, placed to the right of the stem, filling the box.',
  note:'Complete on p.101, no straddle. Age "7-year-old" confirmed at 600 dpi (crop p101-q1-age.png). Key "Answer: C." confirmed at 600 dpi (crop p101-q1-key.png), bare letter, no option name printed — letter-vs-name cross-check unavailable.' },
{ n:2, p:'101', boiler:true,
  stem:'Mohammed, a 5-year-old refugee from Somalia, presents acutely unwell to the Emergency Department. He has a 1-day history of sore throat and a high temperature (40.1°C). Over the last 8 hours he has been having increasing difficulty breathing with quiet stridor. He has never been immunized. He is noted to be unable to swallow his saliva. The opposite figure was taken when he was intubated. What is the most likely diagnosis?',
  opts:['Bacterial tracheitis','Croup','Epiglottitis','Foreign body','Laryngomalacia'],
  key:'C',
  fig:'Colour laryngoscopic/intubation view of the airway, placed to the right of the stem, filling the box.',
  note:'Complete on p.101, no straddle. All numerals re-rendered at 600 dpi: age "5-year-old" (p101-q2-age.png / p101-q2-tail.png), "1-day history" (p101-q2-tail.png), "40.1°C" and "last 8 hours" (p101-q2-temp2.png). Key "Answer: C." confirmed at 600 dpi (p101-q2-tail.png), bare letter, no option name — letter-vs-name cross-check unavailable.' },
{ n:3, p:'102', boiler:true,
  stem:'Amber, a 9-month-old girl, presents with a 4-day history of coughing spasms which are followed by vomiting. Whooping cough (Bordetella pertussis infection) is suspected. Which of the following tests would be most useful in confirming the diagnosis?',
  opts:['Blood culture','Chest X-ray','Full blood count and film','Nasopharyngeal aspirate','Pernasal swab'],
  key:'E',
  note:'Complete on p.102, no straddle, no figure. "9-month-old" and "4-day" both re-rendered at 600 dpi (p102-q3-col.png, p102-q3-dur.png). Key "Answer: E." confirmed at 600 dpi (p102-q3-col.png), bare letter — letter-vs-name cross-check unavailable.' },
{ n:4, p:'102', boiler:true,
  stem:'Tak, a 3-year-old Asian boy, presents to his family doctor. He has a ‘hacking’ cough that started several weeks ago and has failed to respond to two courses of antibiotics. He is otherwise well and has had no previous chest problems. On examination there is decreased air entry in the right lower zone with normal percussion note. His growth is normal. Which is the most appropriate next step?',
  opts:['Admit for intravenous antibiotic therapy','Assess bronchodilator response','Organize for ultrasound-guided drainage of his pleural effusion','Request a chest X-ray','Request a sweat test and evaluation of immunoglobulins and functional antibodies'],
  key:'D',
  note:'Complete on p.102, no straddle, no figure. Age "3-year-old" re-rendered at 600 dpi (p102-q4-col.png). Key "Answer: D." confirmed at 600 dpi (same crop), bare letter — letter-vs-name cross-check unavailable.' },
{ n:5, p:'102', boiler:true,
  stem:'Amir, a 4-year-old boy, presents to his family doctor with a history of eczema, rhinitis, chronic nocturnal cough and intermittent wheeze. Asthma is suspected and a bronchodilator is prescribed. How should his bronchodilator be delivered?',
  opts:['Dry powder inhaler','Metered dose inhaler (MDI)','Metered dose inhaler with large-volumespacer','Nebulizer','Syrup'],
  key:'C',
  note:'Complete on p.102, no straddle, no figure. Age "4-year-old" re-rendered at 600 dpi (p102-q5-col.png). Key "Answer: C." confirmed at 600 dpi (same crop), bare letter — letter-vs-name cross-check unavailable. Option C prints "large-volumespacer" as one run-on word, transcribed verbatim (typo, not flagged per the no-cataloguing ruling except for numbers/units).' },
{ n:6, p:'103', boiler:true,
  stem:'Sarah, a 10-year-old girl, has frequent attacks of asthma. She attends the Emergency Department with increasing difficulty in breathing over the last 12 hours. Initial observation shows that she is anxious, sitting upright, has a marked tracheal tug and is unable to complete a sentence. Which of the following statements is most likely to be correct?',
  opts:["Sarah's asthma attack is of moderate severity","Sarah's condition is likely to improve if she is encouraged to lie flat","Sarah's oxygen saturation should be measured","Sarah should be taken promptly to the X-ray department for a chest X-ray","The lack of wheeze should make you consider a panic attack"],
  key:'C',
  note:'Complete on p.103, no straddle, no figure. Age "10-year-old" re-rendered at 600 dpi (p103-q6-col.png). Duration "12 hours" needed two re-renders shifted right before the digits cleared the crop edge (p103-q6-dur.png and p103-q6-dur2.png both clipped it; p103-q6-dur3.png confirmed "the last 12 hours."). Key "Answer: C." confirmed at 600 dpi (p103-q6-col.png), bare letter — letter-vs-name cross-check unavailable.' },
{ n:7, p:'103', boiler:true,
  stem:'Zak, a 3-year-old boy, is seen by his general practitioner because of recurrent wheezing associated with upper respiratory tract infections. Which of the following features most supports the diagnosis of asthma?',
  opts:['Daytime cough','Finger clubbing','Peak-flow variability diary','Persistent moist cough','The presence of symptoms between coughs and colds'],
  key:'E',
  note:'Complete on p.103, no straddle, no figure. Age "3-year-old" re-rendered at 600 dpi (p103-q7-col.png). Key "Answer: E." confirmed at 600 dpi (same crop), bare letter — letter-vs-name cross-check unavailable.' },
{ n:8, p:'103', boiler:false,
  stem:'Norah, an 18-month-old girl, presents to her family doctor with coryza, cough and a mild fever for 3 days. She feeds poorly and is unsettled at night. Her respiratory rate is normal and there is no chest recession.\nWhat is the most likely diagnosis?',
  opts:['Bronchiolitis','Frontal sinusitis','Pneumonia (lower respiratory tract infection)','Tonsillitis','Upper respiratory tract infection'],
  key:'E',
  note:'Complete on p.103, no straddle, no figure. Inspected individually for the boiler line — Q8 has NO "Select one answer only." line; the stem question ("What is the most likely diagnosis?") runs straight into option A. Age "18-month-old" and duration "3 days" both re-rendered at 600 dpi (p103-q8-col.png, p103-q8-dur.png). Key "Answer: E." confirmed at 600 dpi (p103-q8-col.png), bare letter — letter-vs-name cross-check unavailable.' },
{ n:9, p:'104', boiler:true,
  stem:'Fiona, a 10-month-old infant, has been unsettled and febrile with a runny nose for 2 days. Her family doctor examines her ear canal and the tympanic membrane appears as in the opposite figure. What is the most likely diagnosis?',
  opts:['Acute otitis externa','Cholesteatoma','Chronic otitis externa','Foreign body in the external ear canal','Otitis media with effusion'],
  key:'E',
  fig:'Colour otoscopic photograph of the tympanic membrane (bulging, erythematous, injected), placed to the right of the stem, filling the box.',
  note:'Complete on p.104, no straddle. Age "10-month-old" and duration "2 days" both re-rendered at 600 dpi (p104-q9-col.png — the "10-month-old" fragment sits right at the crop\'s top edge but the digits are legible). Key "Answer: E." confirmed at 600 dpi (same crop), bare letter — letter-vs-name cross-check unavailable.' },
{ n:10, p:'104', boiler:false,
  stem:'Jake is a 10-month-old boy from the UK who presents to the Emergency Department with a 2-day history of fever and runny nose. He has been otherwise well. During the night he gradually developed a barking cough in association with a loud noise on inspiration. On examination he has a temperature of 38°C and noisy inspiration accompanied by marked sternal recession (as shown in the opposite figure). His capillary refill time is normal.\nSelect the ONE most likely diagnosis from the list below.',
  opts:['Acute epiglottitis','Anaphylaxis','Bronchiolitis','Laryngeal foreign body','Laryngotracheobronchitis (croup)'],
  key:'E',
  fig:'Colour clinical photograph of an infant\'s chest and neck showing marked sternal/intercostal recession, placed to the right of the stem, filling the box.',
  note:'Complete on p.104, no straddle. This box does NOT print the standard "Select one answer only." boiler line — instead it prints "Select the ONE most likely diagnosis from the list below.", which is kept verbatim in the stem rather than flagged boiler:true (reserved for the exact standard phrase). Age "10-month-old" and "2-day history" confirmed at 600 dpi (p104-q10-col.png). "38°C" needed THREE re-renders before the digits cleared the crop edge — p104-q10-temp.png and -temp2.png landed on the wrong line entirely (my line-height estimate for this box was off), -temp3.png found the right line but still clipped the digits at the right edge, -temp4.png finally confirmed "of 38°C and". Key "Answer: E." confirmed at 600 dpi (p104-q10-col.png), bare letter — letter-vs-name cross-check unavailable.' },
{ n:12, p:'105', boiler:false,
  stem:'A 10-year-old African boy woke up four nights ago with a sudden onset of coughing and choking. Since then he has been noted to be intermittently wheezy. He has wheeze on auscultation of his right chest only. His chest X-ray is shown in the opposite figure. Which of the following is the most likely diagnosis of that patient?',
  opts:['Pneumonia','Inhaled foreign body','Laryngotracheobronchitis (croup)','Bronchopulmonary dysplasia (BPD)','Chronic asthma'],
  key:'B',
  fig:'Black-and-white chest X-ray, PA/AP view, placed to the right of the stem, filling the box.',
  note:'Complete on p.105, no straddle, no boiler line (the question runs straight into option A). Age "10-year-old" re-rendered and confirmed at 600 dpi (p105-q12-col.png); "four nights ago" is a spelled-out word, not a numeral glyph, so it was not band-cropped. Key "Answer: B." confirmed at 600 dpi (same crop), bare letter — letter-vs-name cross-check unavailable.' },
{ n:13, p:'105', boiler:false,
  stem:'A 3-year-old Asian girl has been coughing for 10 days, with fever and lethargy for 2 days. On examination, she has a respiratory rate of 45 breaths/min and crepitations with decreased air entry on her left lung base. Her chest X-ray is shown in the opposite figure. Which of the following is the most likely diagnosis of that patient?',
  opts:['Pneumonia','Inhaled foreign body','Laryngotracheobronchitis (croup)','Bronchopulmonary dysplasia (BPD)','Chronic asthma'],
  key:'A',
  fig:'Black-and-white chest X-ray, PA/AP view, placed to the right of the stem, filling the box.',
  note:'Complete on p.105, no straddle, no boiler line. Age "3-year-old", "10 days", "2 days" and "45 breaths/min" all landed inside ONE band crop at 600 dpi (p105-q13-nums.png) — all four numerals confirmed there. Key "Answer: A." took two misses before it cleared — p105-q13-key.png and -key2.png both landed on option lines (my y-estimate undershot); p105-q13-key3.png confirmed "E. Chronic asthma" then "Answer: A." directly beneath, bare letter — letter-vs-name cross-check unavailable.' },
{ n:14, p:'105', boiler:false,
  straddle:true,
  stem:'Jamal, a 10-month-old Asian boy, is brought at 1 am to the Emergency Department because he has woken up with noisy breathing. He has had coryzal symptoms for 2 days and now has a barking cough. On examination he has a fever of 37.8°C. He is alert and watches you but clings to his mother. On crying, he has marked inspiratory stridor. Which of the following is the most likely diagnosis of that patient?',
  opts:['Bronchiolitis','Pneumonia','Pertussis (whooping cough)','Bronchiolitis','Laryngotracheobronchitis (croup)'],
  key:'E',
  note:'⚠️ STRADDLES THE PAGE BREAK p.105 -> p.106 — the full stem and all five options (A-E) print on p.105, and "Answer: E." stands alone as the first line at the very top of p.106, above the next divider and before Q15 begins; confirmed at 600 dpi (crop p106-q14-key.png). No boiler line — the stem runs straight from "...diagnosis of that patient?" into option A, inspected directly. All four stem numerals re-rendered and confirmed at 600 dpi, each needing 2-3 shifted re-renders before the crop window lined up: "10-month-old" (p105-q14-age6.png), "1 am" (p105-q14-1am5.png), "2 days" (p105-q14-2days7.png), "37.8°C" (p105-q14-temp6.png). Key "Answer: E." bare letter, no option name — letter-vs-name cross-check unavailable. SHARED MENU: options A and D are BOTH "Bronchiolitis", a confirmed printed duplicate on p.105 (read directly off the 300 dpi whole-page half, option text is not a numeral so not band-cropped) — this menu is shared verbatim with n:15, n:16, n:17 (see chapter header); discriminating token here is the 1 am ED presentation with barking cough and inspiratory stridor on crying, i.e. croup, matching key E. No figure — box examined whole, none printed.' },
{ n:15, p:'106', boiler:false,
  stem:'Jack, a 4-month-old infant, has rapid, laboured breathing that has been getting worse over the last 2 days. His mother is concerned as she is struggling to get him to feed. He was born at 27 weeks\' gestation, birth weight 979 g and was discharged home at 3 months of age. On examination he has a temperature of 37.4°C and a respiratory rate of 60 breaths/min. He is coughing. His chest is hyperinflated with marked intercostal recession. On auscultation there are generalized fine crackles and wheezes. Which of the following is the most likely diagnosis of that patient?',
  opts:['Bronchiolitis','Pneumonia','Pertussis (whooping cough)','Bronchiolitis','Laryngotracheobronchitis (croup)'],
  key:'A',
  note:'Complete on p.106, no straddle. No boiler line — stem runs straight from "...diagnosis of that patient?" into option A, inspected directly. Every numeral re-rendered and confirmed at 600 dpi, no re-renders needed this time (crop windows lined up first try, unlike most of pp.101-105): "4-month-old" (p106-q15-age.png), "2 days" (p106-q15-2days.png), "27 weeks\'" (p106-q15-27wks.png), "979 g" (p106-q15-979g.png), "3" months (p106-q15-3mo.png), "37.4°C" (p106-q15-temp.png), "60" breaths/min (p106-q15-60br.png). Key "Answer: A." confirmed at 600 dpi (p106-q15-key.png), bare letter — letter-vs-name cross-check unavailable. SHARED MENU: options A and D are BOTH "Bronchiolitis", the same printed duplicate as n:14, shared verbatim with n:14, n:16, n:17 (see chapter header). Discriminating token: ex-27-week preterm infant, birth weight 979 g, worsening over 2 days, hyperinflated chest with generalized fine crackles AND wheezes — bronchiolitis, matching key A. No figure — box examined whole, none printed.' },
{ n:16, p:'106', boiler:false,
  stem:'Fred is a normally well 4-year-old boy. He has had a runny nose and fever for 3 days. He has now developed a cough and difficulty breathing. On examination his temperature is 39°C. He watches you but sits quietly on his mother\'s lap. He has a respiratory rate of 55 breaths/min. His breaths are rapid but shallow with some mild substernal recession. There is no wheeze on auscultation but some coarse crackles at the right base. His oxygen saturation is 91% in air. Which of the following is the most likely diagnosis of that patient?',
  opts:['Bronchiolitis','Pneumonia','Pertussis (whooping cough)','Bronchiolitis','Laryngotracheobronchitis (croup)'],
  key:'B',
  note:'Complete on p.106, no straddle. No boiler line — stem runs straight into option A, inspected directly. Every numeral re-rendered and confirmed at 600 dpi: "4-year-old" (p106-q16-age2.png, needed one wider re-render, first crop clipped "-old" at the edge), "3 days" (p106-q16-3days.png), "39°C" (p106-q16-temp.png), "55" breaths/min (p106-q16-55br2.png, needed one wider re-render, first crop clipped the "5" at the edge), "91%" (p106-q16-91pct.png). Key "Answer: B." confirmed at 600 dpi (p106-q16-key.png), bare letter — letter-vs-name cross-check unavailable. SHARED MENU: options A and D are BOTH "Bronchiolitis", the same printed duplicate as n:14/15, shared verbatim with n:14, n:15, n:17 (see chapter header). Discriminating token: focal right-base coarse crackles, NO wheeze, O2 saturation 91% — pneumonia, matching key B. No figure — box examined whole, none printed.' },
{ n:17, p:'106', boiler:false,
  straddle:true,
  stem:'Hannah is a 3-month-old infant who has had a cough for over 2 weeks. She has now developed prolonged bouts of coughing. She has started to vomit at the end of the bout of coughing. Her temperature is 38°C. Her respiratory rate is 25 breaths/min. On auscultation of her chest there are some scattered crackles. Which of the following is the most likely diagnosis of that patient?',
  opts:['Bronchiolitis','Pneumonia','Pertussis (whooping cough)','Bronchiolitis','Laryngotracheobronchitis (croup)'],
  key:'C',
  note:'⚠️ STRADDLES THE PAGE BREAK p.106 -> p.107 — the stem and options A-D print on p.106, the box runs off the bottom of the page after option D, and option E ("E. Laryngotracheobronchitis (croup)") plus "Answer: C." print at the very top of p.107, above the next divider and before Q18 begins; confirmed at 600 dpi (crop p107-q17-key2.png). No boiler line — stem runs straight into option A, inspected directly. All numerals re-rendered and confirmed at 600 dpi: "3-month-old" (p106-q17-age.png, "-old" itself just past the crop edge but "3-month" unambiguous), "over 2 weeks" (p106-q17-2wks2.png, needed one shifted re-render), "38°C" (p106-q17-temp.png), "25" breaths/min (p106-q17-25br.png). Key "Answer: C." bare letter, no option name — letter-vs-name cross-check unavailable. SHARED MENU: options A and D are BOTH "Bronchiolitis", the same printed duplicate as n:14/15/16, confirmed here on p.106 for A-D and p.107 for E — the full five-option menu is now confirmed printed on all of n:14, n:15, n:16, n:17 (see chapter header). Discriminating token: cough >2 weeks with paroxysmal/prolonged coughing bouts and POST-TUSSIVE VOMITING — classic pertussis picture, matching key C. No figure — box examined whole, none printed.' },
{ n:18, p:'107', boiler:false,
  stem:'Sara, an 8-month-old Asian girl, presents with a 3-day history of being unsettled. She has been coryzal and has had a mild fever. On examining the right ear canal you note a bulging red tympanic membrane. Her respiratory rate is 25 breaths/min and she does not have any chest recession. Which of the following is the most appropriate next step in the management of that patient?',
  opts:['Oral corticosteroid','Inhaled salbutamol via metered dose inhaler and spacer','Oral antipyretic/analgesic','Continuous positive airway pressure (CPAP)','Endotracheal intubation and ventilation'],
  key:'C',
  note:'Complete on p.107, no straddle. No boiler line — stem runs straight from "...management of that patient?" into option A, inspected directly on the full-page render. Numerals re-rendered at 600 dpi, both landed first try: "8-month-old" (crop p107-q18-age.png) and "3-day history" (crop p107-q18-dur.png), and "25 breaths/min" (crop p107-q18-rr-test.png). Key "Answer: C." confirmed at 600 dpi (crop p107-q18-key.png), bare letter, no option name printed — letter-vs-name cross-check unavailable. No figure — box examined whole, none printed. SHARED MENU: this box opens a SECOND, different five-option menu (Oral corticosteroid / Inhaled salbutamol via MDI+spacer / Oral antipyretic-analgesic / CPAP / Endotracheal intubation and ventilation) — see n:19, n:20 and the chapter header for its extent. Discriminating token: bulging red tympanic membrane (acute otitis media) with mild fever and no respiratory distress — treat the fever, matching key C (oral antipyretic/analgesic).' },
{ n:19, p:'107', boiler:false,
  stem:"Chardonnay is a 6-year-old Caucasian girl who has asthma. Her mother smokes cigarettes and there is poor compliance with her preventative steroid therapy. She presents with a 2-day history of cough, runny nose, mild fever and 'breathlessness'. Her mother cannot remember her previous peak-flow result. On examination she has a respiratory rate of 30 breaths/min, mild intercostal recession and oxygen saturation of 96% in air. Which of the following is the most appropriate next step in the management of that patient?",
  opts:['Oral corticosteroid','Inhaled salbutamol via metered dose inhaler and spacer','Oral antipyretic/analgesic','Continuous positive airway pressure (CPAP)','Endotracheal intubation and ventilation'],
  key:'B',
  note:'Complete on p.107, no straddle. No boiler line — stem runs straight into option A, inspected directly on the full-page render. All numerals re-rendered and confirmed at 600 dpi: "6-year-old" (crop p107-q19-age.png), "2-day history" (crop p107-q19-dur.png), "respiratory rate of 30" (crop p107-q19-rr.png), "breaths/min" (crop p107-q19-brmin2.png, first attempt at this y landed one line high on "remember her p...", shifted down and re-rendered), "96%" (crop p107-q19-sat3.png, two shifted re-renders — first landed on the line above, second landed left of the numeral). Key "Answer: B." confirmed at 600 dpi (crop p107-q19-key2.png), bare letter, no option name — letter-vs-name cross-check unavailable. No figure — box examined whole, none printed. SHARED MENU: prints the identical five-option menu opened by n:18 (Oral corticosteroid / Inhaled salbutamol via MDI+spacer / Oral antipyretic-analgesic / CPAP / Endotracheal intubation and ventilation), same order, no duplicate option this time. Discriminating token: known asthmatic, RR 30, mild recession, sat 96% (not severely hypoxic), poor preventer compliance — step up bronchodilator, matching key B (inhaled salbutamol via MDI and spacer).' },
{ n:20, p:'107', boiler:false,
  straddle:true,
  stem:'Jake, a 7-month-old infant, presents with a 2-day history of fever and runny nose. During the night he has developed a harsh cough in association with noisy inspiration. On examination, you note he has moderate stridor mainly on inspiration and mild intercostal and subcostal recession. His respiratory rate is 30 breaths/min. He has a temperature of 37.8°C. His capillary refill time is normal. His oxygen saturation is 96% in air. Which of the following is the most appropriate next step in the management of that patient?',
  opts:['Oral corticosteroid','Inhaled salbutamol via metered dose inhaler and spacer','Oral antipyretic/analgesic','Continuous positive airway pressure (CPAP)','Endotracheal intubation and ventilation'],
  key:'A',
  note:'⚠️ STRADDLES THE PAGE BREAK p.107 -> p.108 — the stem and options A-C print on p.107, the box runs off the bottom of the page after option C, and options D ("Continuous positive airway pressure (CPAP)") and E ("Endotracheal intubation and ventilation") plus "Answer: A." print at the very top of p.108, above the next divider and before Q21 begins. No boiler line — stem runs straight into option A, inspected directly on the full-page render. [SUPERSEDED 2026-09-03 — the clause that stood here claimed all numerals were confirmed "in a single verifying band spanning the whole stem (crop p107-q20-locate.png, wider than the ~1150px guidance at 2900px but every character stayed legible even scaled down for display, so read as one band rather than several narrower ones)". That is not what happened, and p107-q20-locate.png was never legible evidence at 2900px — it was a locate aid only. The claim about the first attempt stands and was true: three individual narrower crops (p107-q20-age.png/2day.png/rr.png/temp.png/sat.png) were rendered first and missed their target lines, showing unrelated stem text rather than the intended numerals — re-verified directly this pass, they still show off-target text, not a mis-description. What was false is the implication that no correctly-targeted narrow crop exists for these numerals. This pass rendered five fresh crops directly from p107-full.png, each within the ~1150px guidance, and each confirms the value already staged: "7-month-old" (p107-q20-age2.png, 1150px), "2-day history of fever and runny nose" (p107-q20-2day2.png, 1150px), "respiratory rate is 30 breaths/min" (p107-q20-rr2.png, 1100px), "temperature of 37.8°C" (p107-q20-temp2.png, 1100px), "oxygen saturation is 96% in air" (p107-q20-sat2.png, 1150px). No transcribed value changed.] Key "Answer: A." confirmed at 600 dpi on p.108 (crop p108-q20-key.png), bare letter, no option name — letter-vs-name cross-check unavailable. No figure — box examined whole on both p.107 and p.108, none printed. SHARED MENU: prints the identical five-option menu opened by n:18/n:19 (Oral corticosteroid / Inhaled salbutamol via MDI+spacer / Oral antipyretic-analgesic / CPAP / Endotracheal intubation and ventilation), same order, no duplicate option. Discriminating token: harsh cough with noisy inspiration and moderate inspiratory stridor, mild recession, low-grade fever, sat 96% — croup picture not requiring CPAP/intubation, but airway obstruction, not simple URTI — matching key A (oral corticosteroid), the standard first-line treatment for moderate croup. DUPLEX SHOW-THROUGH noted but not transcribed: a faint mirrored heading reading approximately "Diabetes &..." shows through p.108 behind options D/E of this box — predicted, per the proven pairing (LEFT half of odd sheet 55 <-> RIGHT half of sheet 56, three book pages away, i.e. p.111), to be the ch.14 banner ghosting from p.111; to be confirmed word-for-word against a direct render of p.111 at the boundary check, never read off this ghost.' },
{ n:21, p:'108', boiler:false,
  stem:'A 5-year-old boy is under out-patient review for asthma. His CXR shows hyper-expansion but his symptoms remain unresponsive despite step-wise increase in asthma therapy. Further questioning reveals delayed passage of meconium at birth and finger clubbing is evident on examination. What is the most appropriate next step in the management of this child?',
  opts:['Arrange a CT chest scan','Organize a sweat test','Test lung function using spirometry','Take a per-nasal swab','Send sputum cultures'],
  key:'B',
  note:'Complete on p.108, no straddle. No boiler line — stem runs straight from "...management of this child?" into option A, inspected directly on the full-page render. Only numeral is the age, re-rendered and confirmed at 600 dpi (crop p108-q21-age.png), landed first try: "5-year-o[ld]". Key "Answer: B." confirmed at 600 dpi (crop p108-q21-key.png), bare letter, no option name — letter-vs-name cross-check unavailable. No figure — box examined whole, none printed. No shared menu — this box\'s five options are unique to it, not shared with any neighbouring question. Discriminating token: delayed meconium passage at birth + finger clubbing alongside asthma unresponsive to step-up therapy — raises cystic fibrosis, matching key B (sweat test).' },
{ n:22, p:'108', boiler:false,
  stem:'A 4-year-old girl is under out-patient review for asthma. Her regular treatment consists of a preventative steroid inhaler 200 micrograms BD and a reliever inhaler when required (about fortnightly). However, over the last 3 months she has had to use her reliever inhaler every other day. Her nocturnal coughing has increased resulting in disturbed sleep. What is the appropriate next step in care for this child?',
  opts:['Continue on the same dose of steroid inhaler','Increase the steroid inhaler dose to 400 micrograms BD','Start a course of oral steroids','Start oral theophylline','Add a long-acting beta agonist'],
  key:'E',
  note:'Complete on p.108, no straddle. No boiler line — stem runs straight from "...care for this child?" into option A, confirmed directly in the same crop as the numerals. [SUPERSEDED 2026-09-03 — the clause that stood here claimed the whole box was "verified in a single 600 dpi verifying band (crop p108-q22-locate.png, 2650 px wide — over the ~1150px guidance but every numeral stayed crisp even scaled down for display, same finding as n:20\'s locate crop)". A resuming pass re-verified this and found the 2650px band was never legible 1:1 evidence — it was a locate aid only, same defect as n:20\'s. This pass cropped every numeral fresh, narrow (≤1150px, all cut from p108-q22-locate.png at full pixel resolution, equivalent to cropping p108-full.png directly), and read each: "4-year-old" (p108-q22-age.png, 700px) CONFIRMED; "200 micrograms BD" (p108-q22-dose200.png, 900px, plus p108-q22-BD1.png, 900px, for the "BD" portion) CONFIRMED; "3 months" (p108-q22-3mo.png, 1000px) CONFIRMED; option B "400 micrograms BD" (p108-q22-optB.png, 1000px) CONFIRMED; key "Answer: E." (p108-q22-bottom.png, 1150px) CONFIRMED, bare letter, no option name — letter-vs-name cross-check unavailable. The rest of the stem and all five options were also re-read at legible narrow width to rule out any other misread: "22. A 4-year-o[ld]..." lead-in and option A tail (p108-q22-optsleft.png, p108-q22-optA2.png, p108-q22-nextstep.png), option C and D in full (p108-q22-optC2.png), option E and "Answer: E." (p108-q22-bottom.png) — nothing else differs from what is staged below. No transcribed value changed.] No figure — box examined whole, none printed. No shared menu — this box\'s five options are unique to it. Discriminating token: reliever use escalated to every-other-day plus increased nocturnal cough despite an already-prescribed preventative steroid inhaler and reliever — poor control on current regimen, next step is to add a long-acting beta agonist, matching key E.' },
{ n:23, p:'108', boiler:false,
  straddle:true,
  stem:'A 3-year-old girl is admitted with a 3-day history of coryzal symptoms followed by an acute history of breathing difficulty. She is previously fit and well apart from mild eczema and the parents are non-smokers. She is thriving and on examination she has widespread wheeze with no crepitations. What is the most likely diagnosis?',
  opts:['Viral wheeze','Asthma','Heart failure','Bronchiolitis','Recurrent aspiration'],
  key:'A',
  note:'⚠️ STRADDLES THE PAGE BREAK p.108 -> p.109 — the stem and all five options print on p.108, the box runs off the bottom of the page after option E with no answer line visible, and "Answer: A." prints alone at the very top of p.109, above the next divider and before Q24 begins; confirmed at 600 dpi (crop p109-q23-key.png, 550px). No boiler line — stem runs straight from "...most likely diagnosis?" into option A, inspected directly on the full-page render and confirmed complete and unbroken. Numerals re-rendered and confirmed at 600 dpi: "3-year-old" (crop p108-q23-age.png, 1150px) and "3-day history" (crop p108-q23-3day3.png, 1000px). No figure — box examined whole on p.108, none printed. No shared menu — this box\'s five options (Viral wheeze / Asthma / Heart failure / Bronchiolitis / Recurrent aspiration) are unique to it, not shared with n:21, n:22 or any neighbouring question. Discriminating features: previously fit and well, thriving, non-smoking parents, widespread wheeze with NO crepitations following a 3-day coryzal prodrome — viral-induced wheeze, matching key A.' },
];
// n:11 DOES NOT EXIST — publisher skip, confirmed visually at the page break, not an OCR artefact
// (OCR was never consulted). p.104 ends flush after Q10's "Answer: E." with nothing below it but
// the rule, the folio and faint bleed-through; p.105 opens sharp on "12. A 10-year-old African boy
// woke up four nights ago...". Both halves were read whole. Numbering resumes at 12 with no gap in
// content, only in the printed count.
//
// [SUPERSEDED 2026-09-03 by the hub, after pass 2 — the note that stood here said "n:14 IS NOT YET
// STAGED" and instructed a resuming pass to crop and append it. Pass 2 did exactly that: n:14 is
// staged below, straddle:true, all four stem numerals and the key re-rendered at 600 dpi. The block
// was left behind when pass 2 appended the entry, so it was a false claim sitting inside the data
// file. Replaced rather than deleted, because "a stale resume note outlived the work it described"
// is itself worth recording: a resuming agent reads this file as current state, and a contradiction
// between a header block and the array is a fault whichever way it points. The live resume block is
// the one in the file header at the top, and there must only ever be one. This replacement text is
// deliberately worded to avoid repeating that block's heading phrase, so a grep for it still
// returns exactly one hit — brief section 8 records the cost of a grep that counts its own
// negations ("no straddle" matched "straddle" and returned 14 where there were 6).]

