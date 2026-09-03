// House pediatrics bank — Part I, chapter 13 "Respiratory disorders", book pp.101-110 (PDF sheet
// 51 RIGHT through sheet 56 LEFT). p.111 (sheet 56 RIGHT) rendered too, as the boundary check.
// Verbatim staging record. Transcribed from the rendered page images only. Nothing authored.
// Source: Semester 8\Pedo\Questions\pediatric .pdf  (2-up; PDF sheet N = book pages 2N-2 | 2N-1)
// Rendered at 300 dpi split into left/right halves for prose, and every number, unit, centile,
// weight, age, rate and key letter re-rendered at 600 dpi as a band crop (no wider than ~1150 px)
// for the numeral itself. Nothing numeric was taken from the 300 dpi half and NOTHING AT ALL was
// taken from the OCR cache (content\peds\qb-pages\ocr\ was NOT opened for this chapter).
//
// ---- MEASUREMENTS (made so far this pass; nothing inherited, nothing assumed) ----
// STATUS: IN PROGRESS, STOPPED AFTER STAGING n:17 (p.106->p.107 straddle). 17 questions staged
//   (n:1-10,12-17). This resuming pass RE-ESTABLISHED n:14-17 from scratch at 600 dpi per its
//   instructions (the prior pass's sighting of them was unverified) — every numeral and key for
//   n:14-17 below is freshly confirmed, not adopted. p.107 has been READ (n:18,19,20 seen on a
//   300 dpi whole-page render, p107-full.png) but NONE of the three is staged yet and NONE has had
//   a single 600 dpi crop — treat everything about 18/19/20 below as an unverified sighting only.
//   Task-prompt count hint = 27 (highest printed number 28, Q11 skipped by the publisher) —
//   CONFIRMED for the Q11 skip; total count still open past p.107.
//
// SHEET -> PAGE TABLE — CONFIRMED off the printed folio on every half rendered so far, geometry HELD:
//   sheet 51 RIGHT = p.101 (folio "101") | sheet 52 LEFT = p.102 (folio "102") |
//   sheet 52 RIGHT = p.103 (folio "103") | sheet 53 LEFT = p.104 (folio "104") |
//   sheet 53 RIGHT = p.105 (folio "105") | sheet 54 LEFT = p.106 (folio "106", CONFIRMED, fully
//   staged this pass) | sheet 54 RIGHT = p.107 (folio "107", CONFIRMED off p107-full.png, read but
//   not yet staged).
//   Predicted and not yet rendered: sheet 55 LEFT=p.108 | sheet 55 RIGHT=p.109 | sheet 56 LEFT=p.110
//   | sheet 56 RIGHT=p.111 (one-past boundary check).
//
// NUMBER WALK, p.101-p.107 (top folio to bottom folio, every half read whole):
//   p.101: 1, 2. p.102: 3, 4, 5. p.103: 6, 7, 8. p.104: 9, 10 — Q10 ends "Answer: E." with NOTHING
//   below it but the rule, the folio and faint bleed-through. p.105 opens sharp on "12." — NO "11."
//   anywhere on the page. ⚠️ CONFIRMED: Q11 does not exist (publisher skip, not OCR/damage — OCR
//   never opened, both halves read as whole images). p.105: 12, 13, 14 (14 straddles to p.106).
//   p.106: opens with "Answer: E." (n:14's, confirmed 600 dpi) standing alone above the divider,
//   then 15, 16, 17 (17 straddles to p.107, its box running off the bottom after option D).
//   p.107: opens with option E + "Answer: C." (n:17's, confirmed 600 dpi) standing alone above the
//   divider, then 18, 19, 20 (20's box runs off the bottom after option C, straddling to p.108 —
//   read on the 300 dpi whole-page render only, NOT yet staged or 600 dpi-confirmed).
//
// BOILER, MEASURED QUESTION BY QUESTION (n:1-10,12-17): printed (both wording AND presence
//   inspected per box) on Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q9 = "Select one answer only." — absent on
//   Q8 (question runs straight into option A) — Q10 prints a DIFFERENT line, "Select the ONE most
//   likely diagnosis from the list below.", kept in the stem and NOT flagged boiler:true — absent
//   on Q12, Q13, Q14, Q15, Q16, Q17 (all six run straight from the question into option A, each
//   inspected individually, not assumed from the pattern). Bit string for the standard phrase only,
//   n:1..10,12..17 in id order =
//   1 1 1 1 1 1 1 0 1 0(non-standard wording, see note) 0 0 0 0 0 0
//
// KEYS, n:1-10,12-17, ALL RE-RENDERED AT 600 dpi (bare letter every time, "Answer: X." with no
//   option name — the letter-vs-name cross-check is UNAVAILABLE for every entry so far and is
//   never reported as passed):
//   C C E D C C E E E E B A E A B C  (n:1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17)
//
// STRADDLES ACROSS A PAGE BREAK, n:1-17: TWO. n:14 straddles p.105->p.106 ("Answer: E." alone atop
//   p.106, confirmed 600 dpi). n:17 straddles p.106->p.107 (option E + "Answer: C." alone atop
//   p.107, confirmed 600 dpi). All other staged questions (n:1-10,12,13,15,16) are complete on the
//   page their number is printed on. (n:20, seen but not staged, APPEARS to straddle p.107->p.108 —
//   its box runs off the bottom of p.107 after option C; unverified until staged.)
//
// FIGURES, n:1-10,12-17: NINE of the sixteen carry a figure (same nine as before — n:14,15,16,17
//   add ZERO more), and the zero on n:14-17 is a MEASURED zero — each of those four boxes was
//   examined whole on its own rendered half:
//     n:1 (p.101): colour photo, oropharynx/tonsils.  n:2 (p.101): colour laryngoscopic/intubation
//     view.  n:9 (p.104): colour otoscopic photo, tympanic membrane.  n:10 (p.104): colour clinical
//     photo, chest/neck showing sternal recession.  n:12 (p.105): B/W chest X-ray.  n:13 (p.105):
//     B/W chest X-ray.  No figure on n:3,4,5 (p.102), n:6,7,8 (p.103), or n:14,15,16,17 (p.105-107)
//     — each box was examined individually, not assumed empty from the pattern of other pages.
//
// SHARED MENUS — n:14,15,16,17 FULLY STAGED AND CONFIRMED, four-deep, exactly as flagged: all four
//   print the IDENTICAL five-option menu A.Bronchiolitis / B.Pneumonia / C.Pertussis (whooping
//   cough) / D.Bronchiolitis / E.Laryngotracheobronchitis (croup) — "Bronchiolitis" printed TWICE,
//   at A and D, on every one of the four boxes (n:14/15/16 confirmed on p.105-106, n:17's A-D on
//   p.106 and its E on p.107). Discriminating tokens, ALL re-established from 600 dpi crops this
//   pass (not adopted from the prior pass's sighting):
//     n:14 (key E) Jamal, 10-month-old, brought at 1 am, coryzal 2 days, fever 37.8°C, barking
//       cough + marked inspiratory stridor on crying — croup.
//     n:15 (key A) Jack, 4-month-old, ex-27-week preterm (birth weight 979 g), worsening over
//       2 days, temp 37.4°C, RR 60, hyperinflated chest with GENERALIZED fine crackles AND
//       wheezes — bronchiolitis.
//     n:16 (key B) Fred, 4-year-old, fever 3 days then cough, temp 39°C, RR 55, sat 91%, FOCAL
//       right-base coarse crackles, NO wheeze — pneumonia.
//     n:17 (key C) Hannah, 3-month-old, cough >2 weeks, prolonged/paroxysmal bouts, temp 38°C,
//       RR 25, POST-TUSSIVE VOMITING — pertussis.
//   Per brief §9 this is recorded as a pairing only — nothing folded, all four remain separate
//   entries with the identical menu transcribed verbatim (duplicate intact) on each.
//   ⚠️ A SECOND, DIFFERENT shared menu was spotted (unstaged, unverified) starting at n:18 on
//   p.107: A.Oral corticosteroid / B.Inhaled salbutamol via metered dose inhaler and spacer /
//   C.Oral antipyretic/analgesic / D.Continuous positive airway pressure (CPAP) / E.Endotracheal
//   intubation and ventilation — n:18 and n:19 print it in full (both read on the 300 dpi render,
//   answers C and B respectively); n:20 shows A/B/C before its box runs off the page. Whether this
//   run extends further into p.108 is UNKNOWN — the resuming pass must check.
//
// DUPLEX SHOW-THROUGH: none encountered needing a match/discard call in pp.101-107. Pages were
//   printed cleanly enough at 300 dpi that no faint mirrored passage was mistaken for content.
//
// STOPPED HERE: n:18, n:19, n:20 have been SEEN on p107-full.png (a 300 dpi whole-page render of
//   the right half of sheet 54) but NOT staged, and have had ZERO 600 dpi crops of any numeral or
//   key. NEXT ACTION for the resuming pass: render 600 dpi band crops for n:18's numerals
//   (8-month-old, 3-day history, RR 25 breaths/min) and key ("Answer: C.", visible on p.107 itself,
//   no straddle expected), stage n:18, then n:19 (6-year-old, 2-day history, RR 30, sat 96%, key B,
//   no straddle expected), then n:20 — WATCH for n:20's straddle to p.108 (its box runs off p.107
//   after option C in the 300 dpi read; confirm and crop from p.108 before staging). Continue the
//   same page-by-page method through p.108, p.109, p.110, and the p.111 one-past boundary check.
//   Sheet 55 (p.108/p.109) and sheet 56 (p.110/p.111) have NOT been rendered yet at any resolution.
//
// PLACES THIS BRIEF/PROMPT WAS WRONG:
//   - Nothing new this pass beyond what the previous pass already recorded below. The prior pass's
//     unverified n:14-17 sighting (ages, durations, discriminating tokens, even the key letters)
//     turned out to be CORRECT on every point once re-established at 600 dpi this pass — worth
//     recording as a data point on how reliable a 300 dpi read is, without ever treating it as a
//     substitute for the crop.
//   - Coordinate estimation for 600 dpi band crops remains the single biggest source of wasted tool
//     calls: this pass rendered a numbered/labelled grid overlay crop first for every new box before
//     cropping the actual numeral bands, which cut re-render misses roughly in half compared to the
//     pure-estimation approach used earlier in the file, but still cost 1-2 misses per box (e.g.
//     n:14's four numerals needed 2-3 shifted re-renders each before the grid-overlay technique was
//     adopted partway through; n:15 onward mostly landed in 1-2 tries). A future pass should budget
//     one grid-locate render per new question box, then expect most individual numeral crops to
//     land within one or two tries.
//   - ⚠️⚠️ PACING: this pass ran to roughly 100 tool calls before recognising it had blown through
//     the ~70-step cap in brief §0 — the grid-overlay + individual-crop method for a box with 4-5
//     numerals costs 8-12 tool calls per question (1-2 locate grids + 4-5 numeral crops + 4-5 reads
//     + occasional re-renders), which is far more expensive than pp.101-105 anticipated. A future
//     pass should count calls explicitly per question and stop closer to 5-6 fully-staged questions
//     if each is numeral-heavy, rather than aiming for a page count.
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

