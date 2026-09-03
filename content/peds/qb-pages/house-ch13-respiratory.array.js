// House pediatrics bank — Part I, chapter 13 "Respiratory disorders", book pp.101-110 (PDF sheet
// 51 RIGHT through sheet 56 LEFT). ✅ CLOSED 2026-09-03: 27 questions (n:1-10, n:12-28; n:11 a
// confirmed publisher skip), boundary CONFIRMED against ch.14 "Diabetes & endocrinology" opening
// on p.111 (sheet 56 RIGHT) with numbering restarting at 1.
// Verbatim staging record. Transcribed from the rendered page images only. Nothing authored.
// Source: Semester 8\Pedo\Questions\pediatric .pdf  (2-up; PDF sheet N = book pages 2N-2 | 2N-1)
// Rendered at 300 dpi split into left/right halves for prose, and every number, unit, centile,
// weight, age, rate and key letter re-rendered at 600 dpi as a band crop (no wider than ~1150 px)
// for the numeral itself. Nothing numeric was taken from the 300 dpi half and NOTHING AT ALL was
// taken from the OCR cache (content\peds\qb-pages\ocr\ was NOT opened for this chapter, this pass
// included).
//
// ---- MEASUREMENTS (final, this pass staged n:24-28 and closed the chapter) ----
// STATUS: ✅ CLOSED. 27 questions staged, n:1-10,12-28 (n:11 confirmed absent, publisher skip).
//   This (fifth) pass rendered p.109 fresh at 600 dpi (already on disk as p109-full.png from an
//   earlier pass), staged n:24,25,26; rendered PDF sheet 56 fresh (NOT previously rendered at any
//   resolution), split it into p110-full.png/p111-full.png at native 600 dpi, staged n:27,28 from
//   p.110, and used p.111 as the one-past boundary check. p.110 closes with a large blank margin
//   below n:28's box down to the folio, confirming n:28 is the chapter's last question — matching
//   the task-prompt's count hint of 27 exactly (10 + 17 = 27, n:11 skipped).
//
// SHEET -> PAGE TABLE — CONFIRMED off the printed folio on every half rendered, geometry HELD for
//   the whole chapter, no exception found:
//   sheet 51 RIGHT = p.101 (folio "101") | sheet 52 LEFT = p.102 (folio "102") |
//   sheet 52 RIGHT = p.103 (folio "103") | sheet 53 LEFT = p.104 (folio "104") |
//   sheet 53 RIGHT = p.105 (folio "105") | sheet 54 LEFT = p.106 (folio "106") |
//   sheet 54 RIGHT = p.107 (folio "107") | sheet 55 LEFT = p.108 (folio "108") |
//   sheet 55 RIGHT = p.109 (folio "109", CONFIRMED this pass) | sheet 56 LEFT = p.110 (folio "110",
//   CONFIRMED this pass off a fresh 600 dpi render of sheet 56, split into halves and read whole) |
//   sheet 56 RIGHT = p.111 (folio "111", CONFIRMED this pass — the one-past boundary check, opens
//   ch.14 "Diabetes & endocrinology").
//
// NUMBER WALK, p.101-p.111 (top folio to bottom folio, every half read whole), COMPLETE:
//   p.101: 1, 2. p.102: 3, 4, 5. p.103: 6, 7, 8. p.104: 9, 10 — Q10 ends "Answer: E." with NOTHING
//   below it but the rule, the folio and faint bleed-through. p.105 opens sharp on "12." — NO "11."
//   anywhere on the page. ⚠️ CONFIRMED: Q11 does not exist (publisher skip, not OCR/damage — OCR
//   never opened, both halves read as whole images). p.105: 12, 13, 14 (14 straddles to p.106).
//   p.106: opens with "Answer: E." (n:14's) standing alone above the divider, then 15, 16, 17
//   (17 straddles to p.107, its box running off the bottom after option D).
//   p.107: opens with option E + "Answer: C." (n:17's) standing alone above the divider, then 18,
//   19, 20 (20's box runs off the bottom after option C, straddling to p.108).
//   p.108: opens with options D, E + "Answer: A." (n:20's, confirmed 600 dpi) standing alone above
//   the divider, then 21, 22, then 23 (its full five-option menu prints but the box runs off the
//   bottom after option E, with NO "Answer:" line visible on p.108 — straddles onward).
//   p.109: opens with "Answer: A." (n:23's) standing alone above the divider, then 24, 25, 26 —
//   all three complete on this page, box for 26 closes with the folio directly beneath, nothing
//   else on the page. p.110: opens fresh (no straddled answer line at the top — n:26 was complete
//   on p.109) with 27, then 28 — both complete on this page; 28's box closes with a large blank
//   margin down to the folio "110", confirming it is the LAST box on the page and the chapter's
//   last question. p.111: opens with the bold banner "Diabetes & endocrinology" then "1. Ellie, a
//   7-year-old girl, is newly diagnosed with diabetes mellitus..." — ch.14, numbering restarts at
//   1. No repeat and no further skip anywhere in 18-28.
//
// BOILER, MEASURED QUESTION BY QUESTION, ALL 27 STAGED ENTRIES: printed (both wording AND presence
//   inspected per box) on Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q9 = "Select one answer only." — absent on
//   Q8 (question runs straight into option A) — Q10 prints a DIFFERENT line, "Select the ONE most
//   likely diagnosis from the list below.", kept in the stem and NOT flagged boiler:true — absent
//   on Q12-Q28 (seventeen straight, each inspected individually). Bit string for the standard
//   phrase only, n:1..10,12..28 in id order =
//   1 1 1 1 1 1 1 0 1 0(non-standard wording, see note) 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
//
// KEYS, n:1-10,12-28, ALL RE-RENDERED AT 600 dpi (bare letter every time, "Answer: X." with no
//   option name — the letter-vs-name cross-check is UNAVAILABLE for every entry and is never
//   reported as passed). Note: n:26 prints "Answer: D" with no trailing period, the only key on
//   the whole chapter to omit it (cosmetic, transcribed silently, key field unaffected):
//   C C E D C C E E E E B A E A B C C B A B E A A B D E A  (n:1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28)
//   ⚠️ CORRECTED 2026-09-03 by the hub against the loaded array: the string written here on close-out
//   ran 26 letters against 27 ids — n:24's "A" was dropped, silently shifting every key after it by
//   one position (n:25 read as B when it is B only by coincidence of the shift, n:26 as D, n:28 as A).
//   The DATA was correct throughout; only this summary line was wrong. Disk, re-read entry by entry:
//   CCEDCCEEEEBAEABCCBABEAABDEA (27). A header is a claim, not a measurement — count it from the array.
//
// STRADDLES ACROSS A PAGE BREAK, whole chapter: FIVE, final count. n:14 p.105->p.106. n:17
//   p.106->p.107. n:20 p.107->p.108. n:23 p.108->p.109 (its full five-option menu prints on p.108
//   but no answer line does; "Answer: A." confirmed alone atop p.109). n:21, n:22, n:24, n:25, n:26,
//   n:27, n:28 are all complete on their own page, no straddle.
//
// FIGURES, whole chapter: SIX of the twenty-seven carry a figure — n:23-28 add ZERO more (a
//   ⚠️ CORRECTED 2026-09-03 by the hub: this line said "NINE" while the enumeration directly beneath
//   it named six, and the loaded array carries `fig` on exactly six — n:1,2,9,10,12,13. The list and
//   the array agreed with each other; only the headline number was wrong. Six is the measured count.
//   MEASURED zero, each of the six boxes examined whole on its own rendered page, none printed):
//     n:1 (p.101): colour photo, oropharynx/tonsils.  n:2 (p.101): colour laryngoscopic/intubation
//     view.  n:9 (p.104): colour otoscopic photo, tympanic membrane.  n:10 (p.104): colour clinical
//     photo, chest/neck showing sternal recession.  n:12 (p.105): B/W chest X-ray.  n:13 (p.105):
//     B/W chest X-ray.  No figure on n:3,4,5 (p.102), n:6,7,8 (p.103), n:14-28 (p.105-110) —
//     each box was examined individually, not assumed empty from the pattern.
//
// SHARED MENUS — THREE runs, all closed. ⚠️ CORRECTED 2026-09-03: this line said TWO and listed
//   only the two below. A THIRD run, n:12 + n:13, was missed — the two print an identical five-option
//   menu in identical order (Pneumonia / Inhaled foreign body / Laryngotracheobronchitis (croup) /
//   Bronchopulmonary dysplasia (BPD) / Chronic asthma). Found by the drafting pass and confirmed
//   independently by val-pd.js, which derives the runs from this array rather than from this header;
//   the two agreed, and both disagreed with what was written here. The staging entries themselves
//   were correct — only this summary missed the pair. RUN 0 is recorded as a PAIRING, nothing folded:
//   the comparative table is anchored in pedhd-resp-12, and n:13 names that anchor plus its own
//   discriminating token. The reason it was missed is instructive: n:12 and n:13 sit on the same
//   page, and the sweep for shared menus was looking across page breaks, where RUN 1 and RUN 2 both
//   live. A menu shared by two boxes on ONE page is the easiest kind to walk past.
//   RUN 0, n:12,13 (pneumonia/foreign body/croup/BPD/asthma menu, two-deep, both on p.105).
//   The two runs found on the first pass, unchanged and still correct (n:23-28 confirmed clear —
//   each of those six boxes prints a unique five-option menu, checked against every neighbour):
//   RUN 1, n:14,15,16,17 (croup/bronchiolitis/pneumonia/pertussis menu, four-deep, "Bronchiolitis"
//   printed twice at A and D on every box).
//   RUN 2, n:18,19,20 (oral corticosteroid/salbutamol/antipyretic/CPAP/intubation menu, three-deep,
//   closed at n:20; n:21 does not continue it). Discriminating tokens for both runs are recorded in
//   each member entry's own note. Per brief §9 recorded as pairings only — nothing folded.
//
// DUPLEX SHOW-THROUGH: ✅ THE n:20 GHOST PREDICTION IS CONFIRMED. n:20's note recorded a faint
//   mirrored heading reading approximately "Diabetes &..." showing through p.108 behind options
//   D/E, predicted per the proven pairing (LEFT half of odd sheet 55 <-> RIGHT half of sheet 56,
//   three book pages away = p.111) to be ch.14's banner ghosting forward from p.111. The direct
//   600 dpi render of p.111 (p111-full.png, and crop p111-banner.png) shows the actual printed
//   banner reads "Diabetes & endocrinology", set in large bold text at the top of the page —
//   matching the predicted "Diabetes &..." fragment word for word as far as the ghost was legible.
//   CONFIRMED, not refuted; the duplex pairing model held on this final test too. Two further,
//   unrequested ghosts were also seen and left untranscribed, consistent with the model: p.109
//   (sheet 55 RIGHT) carries a faint ghost matching the one-page-away pairing to p.110 (sheet 55
//   RIGHT <-> sheet 56 LEFT), and p.110 carries a strong mirrored ghost of p.109's content, same
//   pairing. Neither was investigated further — out of scope for this pass's ghost check.
//
// STOPPED HERE: chapter CLOSED, nothing left to stage in this file. Next action for any future
//   pass touching this file is outside chapter 13 — ch.14 "Diabetes & endocrinology" begins fresh
//   at p.111 with its own numbering from 1, a different chapter, a different array.
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
{ n:24, p:'109', boiler:false,
  stem:'A 4-year-old girl is admitted with fever, difficulty breathing and cough. A diagnosis of left lower lobe pneumonia is made and intravenous antibiotics are commenced. What is the most likely pathogen?',
  opts:['Streptococcus pneumoniae','Haemophilus influenzae','Mycoplasma pneumoniae','Chlamydia trachomatis','E. coli'],
  key:'A',
  note:'Complete on p.109, no straddle — n:23\'s "Answer: A." prints alone at the top of this page above the divider, then this box opens fresh and closes complete before the next divider. No boiler line — stem runs straight from "...most likely pathogen?" into option A, inspected directly on the full-page render (p109-full.png, 3508x4961, confirmed genuine 600 dpi). Only numeral is the age, re-rendered and confirmed at 600 dpi (crop p109-q24-age.png, 400px). Key "Answer: A." confirmed at 600 dpi (crop p109-q24-key.png, 400px), bare letter, no option name — letter-vs-name cross-check unavailable. No figure — box examined whole, none printed. No shared menu — options unique to this box. A faint duplex show-through is visible in the upper-right of this box; not transcribed and not investigated here — the ghost this pass was asked to check is n:20\'s, against a direct render of p.111.' },
{ n:25, p:'109', boiler:false,
  stem:'A 24-month-old girl with trisomy 21 attends for her developmental review. Her mother is concerned about her hearing and explains that she has had two recent right ear infections within the last 5 months. An audiogram is carried out which confirms a conductive hearing loss of the right ear. What is the most likely explanation for this finding?',
  opts:['Congenital infection','Otitis media with effusion','Acquired meningitis','Antibiotic toxicity','Foreign body'],
  key:'B',
  note:'Complete on p.109, no straddle. No boiler line — stem runs straight from "...for this finding?" into option A, inspected directly on the full-page render. Numerals re-rendered and confirmed at 600 dpi: "24-month-old" (crop p109-q25-age.png, 500px), "trisomy 21" (crop p109-q25-trisomy.png, 550px), "5 months" (crop p109-q25-5mo.png, 550px); "two recent right ear infections" is a spelled-out word, not a numeral glyph, so it was not band-cropped. Key "Answer: B." confirmed at 600 dpi (crop p109-q25-key.png, 400px), bare letter, no option name — letter-vs-name cross-check unavailable. No figure — box examined whole, none printed. No shared menu — options unique to this box. Discriminating token: trisomy 21, recurrent right ear infections, confirmed conductive hearing loss — otitis media with effusion (glue ear), matching key B.' },
{ n:26, p:'109', boiler:false,
  stem:'A 6-year-old boy with known asthma has been brought in by ambulance to the local emergency department with an acute severe exacerbation. He has already received salbutamol and ipratropium nebulizers together with intravenous steroid. Upon reassessment, he appears exhausted with varying responsiveness. Fifteen litres of oxygen are needed to maintain his saturations and auscultation of his chest reveals minimal breath sounds. What is the next most important step in this child\'s care?',
  opts:['Reassess 30 minutes later','Give intravenous antibiotics','Request a CXR','Give intravenous salbutamol','Admit to ward'],
  key:'D',
  note:'Complete on p.109, no straddle — closes the page, folio "109" prints directly below this box with nothing else beneath it. No boiler line — stem runs straight from "...in this child\'s care?" into option A, inspected directly on the full-page render. Only numeral glyph in the stem is the age, re-rendered and confirmed at 600 dpi (crop p109-q26-age.png, 400px); "Fifteen litres" is a spelled-out word, not a numeral glyph, so it was not band-cropped. Key printed as "Answer: D" with no trailing period (unlike every other key on this page, which prints "Answer: <X>."), confirmed at 600 dpi (crop p109-q26-key.png, 400px), bare letter, no option name — letter-vs-name cross-check unavailable. No figure — box examined whole, none printed. No shared menu — options unique to this box. Discriminating token: exhausted, varying responsiveness, minimal breath sounds despite maximal nebulized/IV therapy — life-threatening asthma requiring escalation to IV salbutamol, matching key D.' },
{ n:27, p:'110', boiler:false,
  stem:'Bronchiolitis is one of the most common respiratory conditions affecting infants. Which of the following is not a clinical feature of bronchiolitis?',
  opts:['Tachypnoea','Apnoea','Wheeze','Fine crackles','Paroxysmal cough'],
  key:'E',
  note:'Complete on p.110, no straddle. No boiler line — stem runs straight from "...feature of bronchiolitis?" into option A, inspected directly on the full-page render (p110-full.png, 3508x4961, split from PDF sheet 56 LEFT at 600 dpi, folio "110" confirmed at the foot of the page). No numeral in this box — stem and all five options are clinical-feature words only, examined directly, none is a numeral glyph. Key "Answer: E." confirmed at 600 dpi (crop p110-q27-key2.png, 450px; first attempt p110-q27-key.png undershot and cut off the letter, re-rendered wider), bare letter, no option name — letter-vs-name cross-check unavailable. No figure — box examined whole, none printed. No shared menu — options unique to this box. Strong duplex show-through visible over the lower two-thirds of this page (mirrored text, matching the reverse of p.109 per the one-page-away RIGHT-of-odd-sheet<->LEFT-of-next-sheet pairing) — not transcribed, not investigated; the ghost this pass was asked to check is n:20\'s, against p.111.' },
{ n:28, p:'110', boiler:false,
  stem:'A 3-year-old girl of Irish parents presents with a history of diarrhoea since birth. The stool is pale and offensive smelling. She was born on the 25th centile but is now on the 0.4th centile for weight and height. She has been admitted on four occasions with pneumonia and has a chronic cough. Which investigation is most likely to yield her diagnosis?',
  opts:['Sweat test','Coeliac antibodies','Stool reducing substances','Stool for microscopy and culture','Endoscopy and colonoscopy'],
  key:'A',
  note:'Complete on p.110, no straddle — closes with a large blank margin down to the folio "110" at the foot of the page, confirming this is the LAST box on the page and nothing else follows it here. No boiler line — stem runs straight from "...yield her diagnosis?" into option A, inspected directly on the full-page render. Numerals re-rendered and confirmed at 600 dpi, two needing a shifted re-render: "3-year-old" (crop p110-q28-age.png, 450px, landed first try), "25th centile" (crop p110-q28-25th2.png, 600px — first attempt p110-q28-25th.png undershot, showed unrelated text "...e was born on the", re-rendered shifted right), "0.4th centile" (crop p110-q28-04th2.png, 750px — first attempt p110-q28-04th.png overshot past the box\'s right edge into blank margin, re-rendered shifted left); "four occasions" is a spelled-out word, not a numeral glyph, so it was not band-cropped. Key "Answer: A." confirmed at 600 dpi (crop p110-q28-key2.png, 450px; first attempt p110-q28-key.png undershot and cut off the letter, re-rendered wider), bare letter, no option name — letter-vs-name cross-check unavailable. No figure — box examined whole, none printed. No shared menu — options unique to this box. Discriminating token: diarrhoea since birth, faltering growth (25th -> 0.4th centile) with pale offensive stool and recurrent chest infections/chronic cough — classic cystic fibrosis picture, matching key A (sweat test). This is the LAST question on p.110; the page is otherwise blank below this box save duplex show-through, matching the expected chapter total of 27 (n:1-10, n:12-28, n:11 a confirmed publisher skip) — see chapter header for the full count reconciliation, to be finalised once p.111 confirms the ch.14 boundary.' },
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

