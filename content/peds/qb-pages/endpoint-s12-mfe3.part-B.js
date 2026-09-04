/* ENDPOINT part1 -- Model Final Exam 3 -- staging half B (questions n21..n40).
   Source: "Pediatrics endpoint part1.pdf", answered pages p:1525,1527,1529,1531,1533,1535,1537,
   1539,1541,1543,1545,1547,1549,1551,1553,1555,1557,1559,1561,1563 (task-supplied list, measured
   from content/peds/qb-pages/ocr/ep1/index.json 2026-09-04) -- a clean +2 step throughout. The
   section runs pp.1484-1642 and holds 79 questions; this file is the second 20.
   Every question in this exam prints twice (a blank exam page, then an answered page carrying the
   yellow-highlighted key and usually a bordered explanation box); staging is from the ANSWERED
   pages ONLY, per task override 4. No blank printing was rendered or read for a staged entry.
   TASK 0, the one deliberate exception, stages nothing: half A's n6 (answered page p.1495) prints
   four options with option D hard against the foot of the cream panel, so a clipped fifth option
   could not be excluded from the answered page alone. The BLANK printing p.1494 was rendered at
   150 dpi for this check and prints FOUR options and no more: "A. Escherichia coli (E. coli)",
   "B. Group B streptococcus", "C. Staphylococcus aureus", "D. Streptococcus pneumoniae", with the
   cream panel ending immediately below D and the red folio "1494" printed clear of it. Nothing
   was clipped; half A's n6 is a genuine four-option question and its file was not edited.
   PDF is 1:1, NOT 2-up -- brief pd-staging-brief.md Section 2's 2-up folio arithmetic does NOT
   apply here, per task override 1. A PDF page number IS the page rendered, and the red folio at
   the foot of each sheet was checked against it on every page in this half.
   key is a ZERO-BASED INDEX into opts (integer), never a letter -- per task override 2, this
   differs from the House-bank brief Section 7.
   Per task override 3: paediatric surgery topics (gastroschisis, atresias, Hirschsprung,
   intussusception, hernias, Wilms, neuroblastoma, urological anomalies) are IN SCOPE for this
   book -- the House-bank Section 11a exclusion does not apply here.
   Render recipe is 150 dpi whole pages, per task override 5, not the brief Section 3 two-pass
   300/600 dpi recipe written for 2-up sheets. A targeted 600 dpi crop is escalated to only for a
   genuinely risky numeral (all-numeric option ladder, exponent, dose, threshold carrying < or >);
   every such escalation is named in the note of the entry it belongs to.
   OCR at content/peds/qb-pages/ocr/ep1/p<NNNN>.txt was NOT opened during this staging pass, per
   brief Section 4. Nothing here comes from OCR text.
   n is the question's position in the SECTION. Where the printed exam number (pr) disagrees with
   n, n is kept and the disagreement is recorded in that entry's note.
   A box overflowing onto a later sheet is recorded with a `box` field and described WITHOUT the
   word "straddle"; only a stem/options span across sheets gets straddle:true plus the uppercase
   marker.
   This exam reprints questions from Model Final Exam 2 and from the book's body. A stem that
   looks familiar is flagged in its note and staged normally -- folding is a later decision made
   by a separate adjudication pass, never here. No other half's entries were read to check.
   File format: bare { ... } fragments separated by one blank line -- no array wrapper and no
   commas between entries. `node --check` always fails on this shape and that failure is
   meaningless; validated with tools/bank-harness/check-part-ep.js instead.
   CLOSED 2026-09-05 -- 20/20 entries staged (n21..n40, pp.1525-1563), each appended immediately
   after its page was read and the file re-validated along the way. Final run: 20 entries, n 21..40,
   pp.1525-1563, option counts 4:6 and 5:14, key positions 0:1 1:4 2:5 3:6 4:4, one entry with no
   printed box (n22), no pr/n disagreement, no figures, OK. The printed exam numbering ran 21..40
   with no repeat and no skip and agreed with n on every page, and the red folio matched the PDF
   page on all twenty sheets, so override 1 holds throughout this half. The +2 page step held on
   all twenty pages. No question straddled a page break and no explanation box overflowed onto a
   later sheet, so no straddle field, no uppercase straddle marker and no box field appear in this
   file. Seven numerals were escalated to 600 dpi band crops across six pages (p.1529 two
   incubation ranges, p.1533 four CRT thresholds carrying > signs, p.1541 an all-numeric month
   ladder, p.1551 an all-numeric percentage ladder, p.1553 three vital-sign thresholds, p.1563 a
   temperature and a virus designation); everything else was read off the 150 dpi page image. One
   crop needed re-rendering, the p.1563 temperature, which took three attempts before the figure
   sat clear of the crop edge -- recorded in that entry.
*/

{ n: 21, pr: 21, p: 1525,
  key: 1,
  stem: "In neonatal resuscitation, what is the next step to do if the baby doesn't start to breathe after delivery?",
  opts: ['Perform chest compressions', 'Ventilate the lungs', 'Give epinephrine', 'Tracheal intubation'],
  expl: 'If a newborn isn’t breathing, the first step is to ventilate the lungs. Oxygenation takes priority before chest compressions or medications.',
  note: 'FOUR options printed (A-D); the cream panel continues well below option D with a wide band of empty page between D and the explanation box, so nothing is clipped here. Read off the full page rendered at 150 dpi (pg-1525.png); no numerals in this stem or option ladder at all, so no 600 dpi escalation was needed and nothing came from OCR. Key: the yellow highlight sits on option B, "Ventilate the lungs" (highlighted, bold) -> zero-based index 1; the explanation box agrees. The box is centred low on the page rather than inset beside the options. Printed number "21." matches n21. Red folio "1525" printed in red at the foot confirms the PDF page number IS the printed page (override 1 holds on this page). No boiler line printed. The stem prints a straight apostrophe in "doesn\'t" while the box prints a curly one in "isn’t"; both transcribed as printed.' }

{ n: 22, pr: 22, p: 1527,
  key: 4,
  stem: 'Which organism readily causes disease by transmission from asymptomatic pharyngeal carriers?',
  opts: ['Beta hemolytic Streptococcus', 'Staphylococci', 'Haemophilus influenzae', 'Gram negative cocci', 'Streptococcal pneumoniae'],
  expl: '',
  note: '5 options printed (A-E). Read off pg-1527.png at 150 dpi; no numerals anywhere on the page, so no 600 dpi escalation and nothing from OCR. Key: yellow highlight on option E, "Streptococcal pneumoniae" (highlighted, bold) -> zero-based index 4. NO EXPLANATION BOX IS PRINTED on this page -- expl is the empty string; the cream panel simply runs on empty for about a third of its height below option E, which also confirms nothing was clipped. With no box there is no box-vs-highlight cross-check available on this question, and none is claimed. Printed number "22." matches n22. Red folio "1527". No boiler line printed.' }

{ n: 23, pr: 23, p: 1529,
  key: 4,
  stem: 'Which is a feature of chickenpox infection?',
  opts: ['It has an incubation period of 5–7 days.', 'The rash is confluent, centrifugal, and pustular.', 'It is associated with Koplik spots.', 'There is a generalized lymphadenopathy', 'It can cause visceral dissemination in the immunocompromised host'],
  expl: 'Varicella can cause visceral dissemination in immunocompromised patients. The incubation is 14–16 days, and rash is vesicular, not pustular.',
  note: '5 options printed (A-E). Read off pg-1529.png at 150 dpi. TWO NUMERALS ESCALATED TO 600 dpi band crops, both being incubation-period ranges and therefore clinical numbers: crop c1529a-1529.png (-x 1700 -y 480 -W 1150 -H 180) reads option A as "iod of 5–7 days." -- 5 to 7, en dash, first read confirmed; crop c1529b-1529.png (-x 2350 -y 1990 -W 1150 -H 170) reads the box as "ncubation is 14–16 days," -- 14 to 16, en dash. Neither needed a second render and neither came from OCR. Note the two numbers disagree with each other by design: option A offers 5-7 days as a distractor and the box gives 14-16 days as the true figure, so this is the question working as printed, not a defect. Key: yellow highlight on option E, "It can cause visceral dissemination in the immunocompromised host" (highlighted, bold and underlined, and the highlight runs to the right edge of the cream panel) -> zero-based index 4; the box agrees. Options A, B and C print a full stop; D and E do not -- transcribed as printed. Printed number "23." matches n23. Red folio "1529". No boiler line printed.' }

{ n: 24, pr: 24, p: 1531,
  key: 4,
  stem: 'How would you manage a choking child with mild airway obstruction?',
  opts: ['Start early CPR', 'Give 5 abdominal thrusts', 'Do 5 back blows', 'Give 5 chest thrusts', 'Encourage cough'],
  expl: 'If a child is choking but can still cough, encourage coughing. No back blows or abdominal thrusts are needed yet.',
  note: '5 options printed (A-E). Read off pg-1531.png at 150 dpi. The only numerals are the single digit "5" repeated in options B, C and D (5 abdominal thrusts / 5 back blows / 5 chest thrusts); each is a large-serif single digit sitting between two words and was individually legible at 150 dpi, so no 600 dpi crop was taken and nothing came from OCR. Key: yellow highlight on option E, "Encourage cough" (highlighted, bold and underlined) -> zero-based index 4; the explanation box agrees. Box sits low and centre-left, well clear of the option ladder, fully contained on p.1531. Printed number "24." matches n24. Red folio "1531". No boiler line printed.' }

{ n: 25, pr: 25, p: 1533,
  key: 2,
  stem: 'Which of the following is true about "capillary refill time"?',
  opts: ['Apply blanching pressure for 2 seconds', 'Prolonged capillary refill if > 3 seconds', 'It is affected by body exposure to a cold environment', 'It is reproducible only in children over the age of 2 years'],
  expl: 'CRT is prolonged (>3 sec) in poor perfusion and can be affected by cold environments. It is measured by blanching pressure for 5 seconds.',
  note: 'FOUR options printed (A-D); the cream panel runs on for roughly half its height below option D and the explanation box sits in that empty space, so nothing is clipped at the foot. Read off pg-1533.png at 150 dpi. FOUR NUMERALS ESCALATED TO 600 dpi band crops because two of them carry a greater-than sign and all four are thresholds: crop c1533a-1533.png (-x 1750 -y 500 -W 1150 -H 360) reads "e for 2 seconds" on the option A line and "l if > 3 seconds" on the option B line -- the sign is a plain > and there is a space on each side of it as printed; crop c1533b-1533.png (-x 700 -y 1750 -W 1150 -H 340) reads the box as "CRT is prolonged (>3 sec) in", "by cold environments. It is m", "5 seconds." -- inside the box the > is set tight against the 3 with no space, unlike the option. Neither crop needed a second render and no numeral came from OCR. A NUMERIC DIVERGENCE WITHIN THE PAGE, FLAGGED: option A says blanching pressure "for 2 seconds" while the box says it is measured "by blanching pressure for 5 seconds" -- 2 against 5 for the same manoeuvre. Option A is a distractor and not the key, so this is not a key-versus-box contradiction, but the two seconds figures do disagree and the page is transcribed exactly as it prints both. Key: yellow highlight on option C, "It is affected by body exposure to a cold environment" (highlighted, bold and underlined) -> zero-based index 2; the box agrees, naming cold environments. Printed number "25." matches n25. Red folio "1533". No boiler line printed.' }

{ n: 26, pr: 26, p: 1535,
  key: 1,
  stem: 'How does human milk oligosaccharides work?',
  opts: ['Kill microorganisms', 'Function as prebiotics', 'Help protein absorption', 'Help lactose digestion', 'Prevent infant colic'],
  expl: 'They act as prebiotics, promoting growth of beneficial gut bacteria and protecting against pathogens.',
  note: '5 options printed (A-E). Read off pg-1535.png at 150 dpi; no numerals anywhere on the page, so no 600 dpi escalation and nothing from OCR. Key: yellow highlight on option B, "Function as prebiotics" (highlighted, bold and underlined) -> zero-based index 1; the explanation box agrees. Box sits low-centre with clear empty panel below it, fully contained on p.1535. Printed number "26." matches n26. Red folio "1535". No boiler line printed.' }

{ n: 27, pr: 27, p: 1537,
  key: 0,
  stem: 'A 5-year-old girl is receiving induction chemotherapy for acute lymphoblastic leukemia. Which of the following vaccines is contraindicated to be given to her 4-month-old sibling?',
  opts: ['Oral Polio Vaccine', 'Hemophilus influenzae Vaccine', 'Hepatitis B Vaccine', 'Pneumococcal Vaccine', 'Diphtheria, Pertussis, Tetanus (DPT) Vaccine'],
  expl: 'Live oral polio vaccine is contraindicated in siblings of immunocompromised children due to risk of transmission.',
  note: '5 options printed (A-E). Read off pg-1537.png at 150 dpi. The two ages, "5-year-old" and "4-month-old", are single large-serif digits inside hyphenated compounds and were individually legible at 150 dpi, so no 600 dpi crop was taken; no numeral came from OCR. Key: yellow highlight on option A, "Oral Polio Vaccine" (highlighted, bold and underlined) -> zero-based index 0; the explanation box agrees, naming live oral polio vaccine. Box sits below the ladder, right of centre, fully contained on p.1537. Printed number "27." matches n27. Red folio "1537". No boiler line printed.' }

{ n: 28, pr: 28, p: 1539,
  key: 1,
  stem: 'A term infant born by elective C-section had developed acute respiratory distress few hours later. What is the most likely diagnosis?',
  opts: ['Respiratory distress syndrome', 'Transient tachypnea of the newborn', 'Pneumothorax', 'Meconium aspiration syndrome'],
  expl: 'Transient tachypnea of the newborn occurs due to delayed clearance of fetal lung fluid, especially after elective C-section.',
  note: 'FOUR options printed (A-D); the cream panel continues for about half its height below option D and carries the explanation box in that space, so nothing is clipped at the foot. Read off pg-1539.png at 150 dpi; the page prints no numerals at all (the stem says "few hours later" without a figure), so no 600 dpi escalation and nothing from OCR. Key: yellow highlight on option B, "Transient tachypnea of the newborn" (highlighted, bold and underlined) -> zero-based index 1; the explanation box agrees. Printed number "28." matches n28. Red folio "1539". No boiler line printed.' }

{ n: 29, pr: 29, p: 1541,
  key: 2,
  stem: 'A healthy infant can sit without support, roll over and crawl but cannot stand alone. What is her most likely developmental age?',
  opts: ['4 months', '6 months', '9 months', '13 months', '16 months'],
  expl: 'Sitting, rolling, and crawling without standing corresponds to around 9 months of age.',
  note: '5 options printed (A-E). Read off pg-1541.png at 150 dpi. AN ALL-NUMERIC OPTION LADDER, so it was escalated to 600 dpi in full per the override: crop c1541a-1541.png (-x 180 -y 690 -W 1000 -H 1070) shows the whole ladder 1:1 and reads "A. 4 months", "B. 6 months", "C. 9 months" (on the yellow highlight, bold and underlined), "D. 13 months", "E. 16 months" -- the two two-digit values are unambiguously 13 and 16, and 9 is a 9 not a 4 or a 6. Crop c1541b-1541.png (-x 1200 -y 2100 -W 1150 -H 230) reads the box line as "around 9 months of age." Neither crop needed a second render and no numeral came from OCR. Key: the highlight sits on option C, "9 months" -> zero-based index 2; the box agrees at 9 months. Box sits below the ladder, right of centre, fully contained on p.1541. Printed number "29." matches n29. Red folio "1541". No boiler line printed.' }

{ n: 30, pr: 30, p: 1543,
  key: 2,
  stem: 'What is the main drive for growth during the childhood phase?',
  opts: ['Nutrition', 'Genetics', 'Growth hormone', 'Thyroid hormones', 'Testosterone and estrogen'],
  expl: 'Growth hormone is the primary driver of linear growth during childhood, rather than sex hormones or nutrition alone.',
  note: '5 options printed (A-E). Read off pg-1543.png at 150 dpi; no numerals anywhere on the page, so no 600 dpi escalation and nothing from OCR. Key: yellow highlight on option C, "Growth hormone" (highlighted, bold and underlined) -> zero-based index 2; the explanation box agrees. Box sits below the ladder, left of centre, with empty cream panel beneath it, fully contained on p.1543. Printed number "30." matches n30. Red folio "1543". No boiler line printed.' }

{ n: 31, pr: 31, p: 1545,
  key: 3,
  stem: 'What is the optimal emergency management of a child presenting to the ER with severe croup?',
  opts: ['Suction of the pharynx', 'IV epinephrine', 'Oral ampicillin', 'Nebulized Epinephrine', 'Immediate intubation'],
  expl: 'Nebulized epinephrine reduces airway swelling rapidly and is first-line emergency treatment for severe croup.',
  note: '5 options printed (A-E). Read off pg-1545.png at 150 dpi; no numerals, doses or units printed anywhere on the page -- the epinephrine options name a route only and carry no dose -- so no 600 dpi escalation and nothing from OCR. Key: yellow highlight on option D, "Nebulized Epinephrine" (highlighted, bold and underlined) -> zero-based index 3; the explanation box agrees. Note the discrimination between options B and D is route alone, IV against nebulized, so the key rests on the route word and was read directly off the highlight. Box below the ladder, centred, fully contained on p.1545. Printed number "31." matches n31. Red folio "1545". No boiler line printed.' }

{ n: 32, pr: 32, p: 1547,
  key: 2,
  stem: 'Increased risk for intussusception was observed as a rare complication following immunization with which vaccine?',
  opts: ['Inactivated polio vaccine', 'Oral polio vaccine', 'Rotavirus vaccine', 'Hepatitis A vaccine', 'Hepatitis B vaccine'],
  expl: 'Rotavirus vaccine has a very rare risk of causing intussusception in infants.',
  note: '5 options printed (A-E). Read off pg-1547.png at 150 dpi; no numerals on the page, so no 600 dpi escalation and nothing from OCR. Key: yellow highlight on option C, "Rotavirus vaccine" (highlighted, bold and underlined) -> zero-based index 2; the explanation box agrees. Box below the ladder, centred, fully contained on p.1547. Printed number "32." matches n32. Red folio "1547". No boiler line printed. Options D and E differ by the single letter A against B, so the ladder was read letter by letter to place the key; the highlight is unambiguously on C, two lines above them.' }

{ n: 33, pr: 33, p: 1549,
  key: 3,
  stem: 'A preterm infant, intubated at birth, develops worsening of existing respiratory distress and shifting of mediastinum to one side. What is the most likely diagnosis?',
  opts: ['Congenital heart disease', 'Apnea of prematurity', 'Herpes simplex infection', 'Pneumothorax'],
  expl: 'Mediastinal shift in a ventilated preterm infant indicates pneumothorax.',
  note: 'FOUR options printed (A-D); the highlighted option D is followed by roughly a third of a panel of empty cream and then the explanation box, so nothing is clipped at the foot. Read off pg-1549.png at 150 dpi; no numerals on the page, so no 600 dpi escalation and nothing from OCR. Key: yellow highlight on option D, "Pneumothorax" (highlighted, bold and underlined) -> zero-based index 3; the explanation box agrees. Box below the ladder, centred, fully contained on p.1549. Printed number "33." matches n33. Red folio "1549". No boiler line printed. RECORDED, NOT FOLDED: "Pneumothorax" is also option C of n28 on p.1539 two questions earlier, but the two stems and keys are different questions and only share a distractor.' }

{ n: 34, pr: 34, p: 1551,
  key: 3,
  stem: 'If the age of 18 months is the "red-flag age" of walking unsupported, what is the percentage of normal children who achieve that skill by age of 18 months?',
  opts: ['27%', '57%', '77%', '97.5%'],
  expl: 'About 97.5% of normal children can walk unsupported by 18 months; delayed walking beyond this is a red flag.',
  note: 'FOUR options printed (A-D); below the highlighted option D the panel runs on empty and then carries the explanation box, so nothing is clipped at the foot. Read off pg-1551.png at 150 dpi. AN ALL-NUMERIC PERCENTAGE LADDER, escalated to 600 dpi in full per the override: crop c1551a-1551.png (-x 180 -y 870 -W 850 -H 840) shows the ladder 1:1 and reads "A. 27%", "B. 57%", "C. 77%", "D. 97.5%" on the yellow highlight -- the three distractors are two-digit whole percentages and only the key carries a decimal, ".5", which is present and unambiguous at 600 dpi. Crop c1551b-1551.png (-x 1080 -y 1950 -W 1150 -H 220) reads the box as "About 97.5% of normal childr" / "months; delayed walking bey", confirming the same 97.5 figure inside the box. Neither crop needed a second render and no numeral came from OCR. The "18 months" in the stem is printed twice and was read off the page image at 150 dpi, large serif and unambiguous. Key: highlight on option D, "97.5%" (highlighted, bold and underlined) -> zero-based index 3; the box agrees. Printed number "34." matches n34. Red folio "1551". No boiler line printed.' }

{ n: 35, pr: 35, p: 1553,
  key: 4,
  stem: 'Which of the following is a diagnostic sign of uncompensated shock?',
  opts: ['Capillary refilling time equals 2 seconds', 'Heart rate greater than 120 beats/min', 'Cold extremities', 'Respiratory rate greater than 40 breaths/min', 'Low blood pressure'],
  expl: 'Low blood pressure is a late and definitive sign of uncompensated (decompensated) shock, showing that the body’s compensatory mechanisms have failed and organs are under-perfused. Other signs like rapid heart rate, fast breathing, or cold extremities indicate early or compensated shock, but only hypotension confirms the uncompensated stage.',
  note: '5 options printed (A-E). Read off pg-1553.png at 150 dpi. THREE OPTION THRESHOLDS ESCALATED TO 600 dpi because all three are vital-sign cut-offs: crop c1553a-1553.png (-x 1600 -y 500 -W 1150 -H 400) reads option A as "e equals 2 seconds" and option B as "n 120 beats/min"; crop c1553b-1553.png (-x 1900 -y 1200 -W 1150 -H 190) reads option D as "n 40 breaths/min". So the printed figures are 2 seconds, 120 beats/min and 40 breaths/min. Note the book spells the comparison out in words here -- "greater than" -- and prints no > glyph on this page, unlike n25 on p.1533. Neither crop needed a second render and no numeral came from OCR. Key: yellow highlight on option E, "Low blood pressure" (highlighted, bold and underlined) -> zero-based index 4; the explanation box agrees and goes further, naming cold extremities and rapid rates as compensated-shock signs, which is why those distractors are wrong. This is the longest box in the half so far, five lines, and it is fully contained on p.1553. Printed number "35." matches n35. Red folio "1553". No boiler line printed. RECORDED, NOT FOLDED: capillary refill time and its 2-second figure also appear in n25 on p.1533, but that question asks what is true of CRT and this one asks for a sign of uncompensated shock; different stems, different keys, only a shared clinical parameter.' }

{ n: 36, pr: 36, p: 1555,
  key: 3,
  stem: 'A Multi-system inflammatory response is a rare complication in children following which infection?',
  opts: ['Influenza', 'Cytomegalovirus infection', 'Epstein-Barr infection', 'COVID-19', 'Meningitis'],
  expl: 'COVID-19 can trigger a rare pediatric multi-system inflammatory syndrome post-infection.',
  note: '5 options printed (A-E). Read off pg-1555.png at 150 dpi. The only digits on the page are the "19" of COVID-19, printed in the highlighted option and again in the box; both are large enough to read at 150 dpi and both read 19, and nothing came from OCR. Key: yellow highlight on option D, "COVID-19" (highlighted, bold and underlined) -> zero-based index 3; the explanation box agrees. Box below the ladder, centred, fully contained on p.1555. Printed number "36." matches n36. Red folio "1555". No boiler line printed.' }

{ n: 37, pr: 37, p: 1557,
  key: 2,
  stem: 'A 3-month-old baby is admitted with a diagnosis of bronchiolitis. Her condition has further worsened, and she developed audible grunting sounds. What is the best pathophysiologic explanation for grunting in this baby?',
  opts: ['Oxygen consumption is decreased with grunting which helps resolve hypoxemia', 'During grunting lung volume increases as more air moves through the conducting airways', 'Grunting increases end expiratory pressure and promotes gas exchange', 'During grunting the diameter of the bronchi and bronchioles is increased'],
  expl: 'Grunting increases end-expiratory pressure, helping keep alveoli open and improving gas exchange.',
  note: 'FOUR options printed (A-D), each a full sentence and two of them wrapping to a second line; the explanation box follows option D and the cream panel closes immediately under the box, so this is the tightest page in the half. The question is nonetheless complete as printed: the box, which always comes last, is present and fully visible, so no option was clipped below it. Read off pg-1557.png at 150 dpi. The only numeral is the age "3-month-old", a single large-serif digit read directly off the page image; no 600 dpi crop was needed and nothing came from OCR. Key: yellow highlight on option C, "Grunting increases end expiratory pressure and promotes gas exchange" (highlighted, bold and underlined, the highlight running the full width of the cream panel) -> zero-based index 2; the box agrees. The option prints "end expiratory" unhyphenated and the box prints "end-expiratory" with a hyphen; each is transcribed as printed in its own field. Printed number "37." matches n37. Red folio "1557", printed lower on the sheet than on the other pages of this half because the content panel runs deeper. No boiler line printed.' }

{ n: 38, pr: 38, p: 1559,
  key: 3,
  stem: '"Acyclovir" is an effective treatment of which virus infection?',
  opts: ['Human Herpes virus type 6', 'Measles virus', 'Rubella', 'Herpes simplex virus infection', 'Coxsackie virus'],
  expl: 'Acyclovir is effective against herpes simplex virus, not measles, rubella, or other viral infections listed.',
  note: '5 options printed (A-E). Read off pg-1559.png at 150 dpi. The only numeral is the "6" of "Human Herpes virus type 6" in option A, a single large-serif digit at the end of the line read directly off the page image; the stem carries no dose for acyclovir, so there was no dose to escalate. Nothing came from OCR. Key: yellow highlight on option D, "Herpes simplex virus infection" (highlighted, bold and underlined) -> zero-based index 3; the explanation box agrees, naming herpes simplex virus. Options A and D both name a herpes virus, so the ladder was read in full before placing the key; the highlight is on D, not A. Box below the ladder, left of centre, fully contained on p.1559. Printed number "38." matches n38. Red folio "1559". No boiler line printed.' }

{ n: 39, pr: 39, p: 1561,
  key: 1,
  stem: 'You perform a routine newborn examination on a baby who is 72 hours old. Which one of the following features requires further immediate assessment?',
  opts: ['Acrocyanosis (cyanosis of the hands and feet)', 'A heart murmur', 'White vaginal discharge', 'Breast enlargement', 'Subconjunctival hemorrhages'],
  expl: '(acrocyanosis, breast enlargement, vaginal discharge, subconjunctival hemorrhage) are benign. A murmur needs urgent evaluation.',
  note: '5 options printed (A-E). Read off pg-1561.png at 150 dpi. The only numeral is "72 hours old" in the stem, two large-serif digits read directly off the page image; no 600 dpi crop needed and nothing from OCR. Key: yellow highlight on option B, "A heart murmur" (highlighted, bold and underlined) -> zero-based index 1; the box agrees, listing the other four options as benign and the murmur as needing urgent evaluation. THE BOX TEXT IS ITSELF INCOMPLETE AS PRINTED and this is recorded rather than repaired: it opens with an open parenthesis and a bare list, "(acrocyanosis, breast enlargement, vaginal discharge, subconjunctival hemorrhage) are benign.", with no lead-in clause before the parenthesis -- something like "Normal newborn findings" is missing from the printing. This is not a render artefact: the whole page was rendered as one image at 150 dpi, the box border is complete on all four sides, and the first line begins flush with the box\'s left inset, so nothing was cut off by the crop. Transcribed exactly as the page prints it. Box below the ladder, left of centre, fully contained on p.1561. Printed number "39." matches n39. Red folio "1561". No boiler line printed.' }

{ n: 40, pr: 40, p: 1563,
  key: 3,
  stem: 'A 6-year-old girl missed a few days of school as she had a fever and was generally lethargic. Now she has a temperature of 38.3°C and has a marked erythematous rash on her cheeks. Which organism is most likely to be the causative agent?',
  opts: ['Chickenpox virus (varicella-zoster virus)', 'Herpes simplex virus', 'Measles virus', 'Parvovirus infection (fifth disease)', 'Roseola infantum (sixth disease)'],
  expl: '“Slapped cheek” appearance is classic for erythema infectiosum (Parvovirus B19).',
  note: '5 options printed (A-E). Read off pg-1563.png at 150 dpi. TWO NUMERALS ESCALATED TO 600 dpi, a temperature and a virus designation. The temperature crop TOOK THREE RENDERS: c1563a-1563.png (-x 1700 -y 470 -W 1150 -H 180) landed left of the figure and showed only "ne has a temperature"; c1563a2-1563.png (-x 2050) still clipped it at "a temperature of 38"; c1563a3-1563.png (-x 2750 -y 470 -W 1100 -H 190) finally shows it whole and reads "re of 38.3°C and has" -- so the printed value is 38.3 degrees C, with the decimal point and the degree glyph both present, and the digit after the point is a 3. No digit was ever guessed from a clipped crop. Crop c1563b-1563.png (-x 550 -y 2380 -W 1150 -H 160) reads the box\'s last line as "B19)." -- capital B, one-nine -- confirming Parvovirus B19 and not B10 or B18. Nothing came from OCR. The stem prints as two paragraphs, the vignette and then "Which organism is most likely to be the causative agent?" on its own line after a blank line; they are joined into one stem string here. Key: yellow highlight on option D, "Parvovirus infection (fifth disease)" (highlighted, bold and underlined) -> zero-based index 3; the box agrees, naming erythema infectiosum and Parvovirus B19. Options D and E pair "fifth disease" against "sixth disease", so the ladder was read to the end before the key was placed. In the box the phrases "Slapped cheek" and "erythema infectiosum (Parvovirus B19)" are printed in bold with curly quotation marks around the first; the bold is not reproducible in the expl string and the curly quotes are kept as printed. Box below the ladder, tight against the foot of the cream panel but complete, all four borders visible. Printed number "40." matches n40 and is the last question of this half. Red folio "1563". No boiler line printed.' }
