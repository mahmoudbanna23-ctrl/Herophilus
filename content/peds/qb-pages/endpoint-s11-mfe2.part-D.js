/* ENDPOINT part1 -- Model Final Exam 2 -- staging half D (questions n61..n79, the LAST half of
   this exam -- n79/p.1481 is the final question; Model Final Exam 3 opens p.1484, out of range).
   Source: "Pediatrics endpoint part1.pdf" (Semester 8\Pedo\Questions\, read-only, never modified).
   Answered pages (task-supplied list, measured from content/peds/qb-pages/ocr/ep1/index.json
   2026-09-04): 1444,1446,1448,1450,1452,1454,1456,1458,1460,1462,1464,1466,1468,1470,1473,1475,
   1477,1479,1481 -- a +2 step throughout EXCEPT one break: a notes page at p.1471 shifts the
   answered pages from even to odd after n74 (p.1470) -- n75 is p.1473, and the rest run odd.
   Every question in this exam prints twice (blank exam page, then answered page carrying the
   yellow-highlighted key and usually a bordered explanation box); staging is from the answered
   pages ONLY. Continues directly from endpoint-s11-mfe2.part-C.js (n41..n60, pp.1404-1442); do
   not edit that sibling file.
   PDF is 1:1, NOT 2-up -- brief pd-staging-brief.md Section 2's 2-up folio arithmetic does NOT
   apply here, per task override 1.
   key is a ZERO-BASED INDEX into opts (integer), never a letter -- per task override 2, this
   differs from the House-bank brief Section 7.
   Per task override 3: Paediatric surgery topics are IN SCOPE for this book -- the House-bank
   Section 11a exclusion does not apply here.
   OCR at content/peds/qb-pages/ocr/ep1/p<NNNN>.txt NOT opened during this staging pass, per brief
   Section 4 / task instructions.
   Every numeral, unit, dose, exponent and every answer-key highlight position is read off a
   600 dpi band crop, never off a 300 dpi full render, per task instructions.
   Per task override 5: a box overflowing onto the next sheet while stem/options/key sit on one
   sheet is recorded via a `box` field and described in the note WITHOUT the word "straddle" --
   only a stem/options span across sheets gets straddle:true + the uppercase marker.

   PROGRESS HEADER -- update after every entry: next page to render is noted here so a dead agent
   can be resumed without re-reading this whole block.
   COMPLETE -- n61-n79 staged, pp.1444-1481, this is the LAST question of Model Final Exam 2 (n79
   /pr80/p.1481). What the header called a "notes page at p.1471" turned out on direct inspection
   to be n74's own explanation box overflowing onto the next sheet (box:1471), NOT a separate notes
   page and not a new question; p.1472 is the ordinary blank exam-copy of n75/p.1473, correctly
   excluded from the answered-page list. The parity shift held exactly as predicted: n75 (p.1473)
   onward runs odd through n79 (p.1481). Model Final Exam 3 opens p.1484 and was NOT rendered --
   out of this task's range, per explicit task instruction not to stage past p.1481.
   FINDING: p.1448 (3rd answered page, expected to walk to n63) prints "64." not "63" -- the
   book's own printed numbering skips 63 entirely, jumping 62 -> 64. Staged as n:63 (sequential
   index within this task's range) / pr:64 (verbatim printed number), per the entry shape's
   n-vs-pr distinction. No page anywhere in the answered-page list prints "63." Confirmed by a
   600 dpi crop of the full question box (crop-1448-full-1448.png), not assumed. */

{ n:61, pr:61, p:1444, key:2,
  stem:'The appropriate repair of duodenal obstruction due to annular pancreas is:',
  opts:['Division of the pancreatic ring','Resection of the pancreatic ring','Duodenoduodenostomy','Subtotal pancreatectomy'],
  expl:'Annular pancreas causes duodenal obstruction due to a pancreatic ring encircling the duodenum. Resection or division risks pancreatic damage, so bypass with duodenoduodenostomy is the safest and most effective option.',
  note: 'Paediatric surgery topic (annular pancreas) -- in scope per task override 3. Only 4 options printed (A-D). No numerals in this stem/options/explanation. Whole question box (stem, options A-D) confirmed on a 600 dpi band crop (crop-1444-full-1444.png W4961 H1400 at x0 y0, 600dpi); explanation box (below, not separately re-cropped, all-text no digits) already fully legible on the 300 dpi full render (pg300-1444-1444.png). Key highlighted: yellow box on "C. Duodenoduodenostomy". Printed number "61." and footer "1444" both match n61 -- walk restarts cleanly from part-C\'s n60. No boiler line present.' }

{ n:62, pr:62, p:1446, key:0,
  stem:'The commonest type of choledochal cyst in Todani classification is:',
  opts:['Type I: fusiform','Type II: saccular','Type III: choledochocele','Type IV: mixed intra/extrahepatic','Type V: intrahepatic ectasia (Caroli disease)'],
  expl:'Type I (fusiform dilation of the common bile duct) is the most common choledochal cyst. It accounts for 80–90% of cases.',
  note: 'Paediatric surgery topic (choledochal cyst) -- in scope per task override 3. 5 options printed (A-E). No numerals in stem/options; percentage "80–90%" (en dash reproduced verbatim as printed) in the explanation box confirmed on a 600 dpi band crop (crop-1446-expl3-1446.png W4962 H600 at x0 y1850, 600dpi). Whole stem+options block already fully legible on the 300 dpi full render (pg300-1446-1446.png). Key highlighted: yellow box on "A. Type I: fusiform". Printed number "62." and footer "1446" both match n62. No boiler line present.' }

{ n:63, pr:64, p:1448, key:0,
  stem:'A full-term boy was presented with imperforate anus shortly after birth. After a few hours of resuscitation, he was noted to pass meconium per urethra. What is the next step?',
  opts:['Colostomy','Perineal anoplasty','Posterior sagittal anorectoplasty','Urethral dilatation','Watchful expectancy'],
  expl:'Meconium passing via urethra indicates a high anorectal malformation with fistula. Initial management is colostomy, followed later by definitive repair.',
  note: 'Paediatric surgery topic (anorectal malformation) -- in scope per task override 3. 5 options printed (A-E). No numerals in stem/options/explanation. Whole question box (stem, options A-E) confirmed on a 600 dpi band crop (crop-1448-full-1448.png W4962 H1900 at x0 y0, 600dpi); explanation box (below, not separately re-cropped, all-text no digits) already fully legible on the 300 dpi full render (pg300-1448-1448.png). Key highlighted: yellow box on "A. Colostomy". PRINTED NUMBER MISMATCH: this page prints "64." not "63" -- the walk from n62 (p.1446, printed "62.") jumps straight to "64.", skipping 63 in the book\'s own numbering. Confirmed twice: on the 300 dpi full render and again on the 600 dpi crop. Staged as n:63 (this task\'s sequential index) / pr:64 (verbatim printed number). Escalated in the closing report. No boiler line present.' }

{ n:64, pr:65, p:1450, key:3,
  stem:'During a screening examination of a 3200 g boy, an absence of anal opening was noted. How can you reliably determine whether this imperforate anus case is high or low?',
  opts:['Administration of water-soluble contrast by nasogastric tube with delayed images','Ultrasound of the perineum','Magnetic resonance imaging scan of the pelvis','Wait 24 hours and observe the perineum for meconium','Plain abdominal films with a radiopaque marker on the perineum immediately after birth'],
  expl:'After 24 hours, a plain abdominal X-ray with perineal marker helps define the level of gas. This determines if the malformation is high or low.',
  note: 'Paediatric surgery topic (imperforate anus, high vs low) -- in scope per task override 3. 5 options printed (A-E). Numerals "3200 g" (stem) and "24 hours" (option D and explanation box, x2) confirmed on a 600 dpi band crop (crop-1450-full-1450.png W4962 H2600 at x0 y0, 600dpi) covering the whole question box. Key highlighted: yellow box on "D. Wait 24 hours and observe the perineum for meconium". Printed number "65." and footer "1450" -- continues the walk from p.1448\'s "64." with a normal +1 step (only n63/pr64 skipped 63; no further skip here). No boiler line present.' }

{ n:65, pr:66, p:1452, key:0,
  stem:'Which of the following is not a feature of hypospadias?',
  opts:['Dorsal chordee','Hooded foreskin','Ventrally placed meatus','Proximal meatus'],
  expl:'Hypospadias involves ventrally placed meatus, hooded foreskin, and sometimes proximal meatus. Chordee, if present, is ventral, not dorsal',
  note: 'Paediatric surgery topic (hypospadias) -- in scope per task override 3. Only 4 options printed (A-D). No numerals anywhere in this stem/options/explanation. Whole question box confirmed on a 600 dpi band crop (crop-1452-full-1452.png W4962 H1400 at x0 y0, 600dpi); explanation box (below, not separately re-cropped, all-text no digits) already fully legible on the 300 dpi full render (pg300-1452-1452.png). Explanation box ends with no closing period after "not dorsal" -- reproduced verbatim as printed. Key highlighted: yellow box on "A. Dorsal chordee". Printed number "66." and footer "1452" -- continues the walk from p.1450\'s "65." with a normal +1 step. No boiler line present.' }

{ n:66, pr:67, p:1454, key:1,
  stem:'In retrosternal diaphragmatic hernia of Morgagni, the defect is situated:',
  opts:['Posteriorly in the diaphragm at the area of the embryonic pleuroperitoneal canal.','Anteriorly through the opening for the superior epigastric artery','Through the esophageal hiatus at the gastroesophageal junction.','In the central tendon'],
  expl:'Morgagni hernia is a retrosternal diaphragmatic defect located anteriorly, usually through the foramina of Morgagni.',
  note: 'Paediatric surgery topic (Morgagni hernia) -- in scope per task override 3. Only 4 options printed (A-D). No numerals anywhere in this stem/options/explanation. Whole question box confirmed on a 600 dpi band crop (crop-1454-full-1454.png W4962 H1700 at x0 y0, 600dpi); explanation box (below, not separately re-cropped, all-text no digits) already fully legible on the 300 dpi full render (pg300-1454-1454.png). Inconsistent trailing periods across options A-D (A and C end with a period, B and D do not) reproduced verbatim as printed. Key highlighted: yellow box on "B. Anteriorly through the opening for the superior epigastric artery". Printed number "67." and footer "1454" -- continues the walk from p.1452\'s "66." with a normal +1 step. No boiler line present.' }

{ n:67, pr:68, p:1456, key:1,
  stem:'In babies born with umbilical hernia:',
  opts:['The majority need surgical correction','Spontaneous closure is the rule rather than the exception','A mesh is usually needed in surgical repair','None of the above'],
  expl:'Most infantile umbilical hernias close spontaneously by 2–3 years of age. Surgery is rarely required.',
  note: 'Paediatric surgery topic (umbilical hernia) -- in scope per task override 3. Only 4 options printed (A-D). No numerals in stem/options; age range "2–3 years of age" (en dash, reproduced verbatim as printed) in the explanation box confirmed on a 600 dpi band crop (crop-1456-expl2-1456.png W4962 H500 at x0 y1550, 600dpi). Whole stem+options block already fully legible on the 300 dpi full render (pg300-1456-1456.png). Key highlighted: yellow box on "B. Spontaneous closure is the rule rather than the exception". Printed number "68." and footer "1456" -- continues the walk from p.1454\'s "67." with a normal +1 step. No boiler line present.' }

{ n:68, pr:69, p:1458, key:3,
  stem:'"Corkscrew sign" on upper GI study indicates the presence of:',
  opts:['Intussusception','Infantile hypertrophic pyloric stenosis','Meconium ileus','Midgut volvulus'],
  expl:'On upper GI contrast study, a "corkscrew appearance" indicates twisted bowel loops due to malrotation with volvulus.',
  note: 'Paediatric surgery topic (malrotation/midgut volvulus) -- in scope per task override 3. Only 4 options printed (A-D). No numerals anywhere in this stem/options/explanation. Whole question box confirmed on a 600 dpi band crop (crop-1458-full-1458.png W4962 H1400 at x0 y0, 600dpi); explanation box (below, not separately re-cropped, all-text no digits) already fully legible on the 300 dpi full render (pg300-1458-1458.png). Curly double quotes around "Corkscrew sign" (stem) and "corkscrew appearance" (explanation box) reproduced verbatim as printed. Key highlighted: yellow box on "D. Midgut volvulus". Printed number "69." and footer "1458" -- continues the walk from p.1456\'s "68." with a normal +1 step. No boiler line present.' }

{ n:69, pr:70, p:1460, key:1,
  stem:'A diagnosis of Hirschsprung disease is made on a newborn baby. What is the definitive diagnostic test for Hirschsprung disease?',
  opts:['Barium enema','Rectal biopsy','Diagnostic laparoscopy','Anorectal manometry'],
  expl:'The gold standard is biopsy showing absence of ganglion cells in the submucosa. Barium enema or manometry are supportive, not definitive.',
  note: 'Paediatric surgery topic (Hirschsprung disease) -- in scope per task override 3. Only 4 options printed (A-D). No numerals anywhere in this stem/options/explanation. Whole question box confirmed on a 600 dpi band crop (crop-1460-full-1460.png W4962 H1600 at x0 y0, 600dpi); explanation box (below, not separately re-cropped, all-text no digits) already fully legible on the 300 dpi full render (pg300-1460-1460.png). Key highlighted: yellow box on "B. Rectal biopsy". Printed number "70." and footer "1460" -- continues the walk from p.1458\'s "69." with a normal +1 step. No boiler line present.' }

{ n:70, pr:71, p:1462, key:3,
  stem:'A 7-month-old child presents with fever of 39°C for 3 days, mildly injected pharynx, and mild diarrhea. On the fourth day of the illness, the fever ceases and a maculopapular rash appears. What is the most likely diagnosis?',
  opts:['Measles','Rubella','Drug reaction to antipyretics','Roseola infantum','Enteroviral infection'],
  expl:'Caused by HHV-6, it features high fever for 3–4 days, then a maculopapular rash appears as fever resolves.',
  note: '5 options printed (A-E). Numerals "7-month-old", "39°C" and "3 days" (stem) confirmed on a 600 dpi band crop (crop-1462-stem-1462.png W4962 H1000 at x0 y0, 600dpi); "HHV-6" and "3–4 days" (en dash, explanation box) confirmed on a second 600 dpi crop (crop-1462-expl3-1462.png W4962 H450 at x0 y2100, 600dpi -- two earlier attempts at y1550 and y2450 missed the box, retried until it was fully captured). Key highlighted: yellow box on "D. Roseola infantum" (confirmed on crop-1462-expl-1462.png W4962 H500 at x0 y1550). Printed number "71." and footer "1462" -- continues the walk from p.1460\'s "70." with a normal +1 step. No boiler line present.' }

{ n:71, pr:72, p:1464, key:0,
  stem:'A 9-year-old girl presented with fever that increased gradually to 40°C over 4 days. Then a maculopapular rash appeared on the forehead and spread to the trunk and extremities over 3 days. When the rash had appeared on the feet, the temperature dropped abruptly. What is the most probable diagnosis?',
  opts:['Measles','Rubella','Varicella','Scarlet fever','Roseola infantum'],
  expl:'Measles presents with fever followed by a maculopapular rash starting at the forehead, spreading downward. Rash coincides with fever peak.',
  note: '5 options printed (A-E). Numerals "9-year-old", "40°C", "4 days" and "3 days" (stem) confirmed on a 600 dpi band crop (crop-1464-stem-1464.png W4962 H1300 at x0 y0, 600dpi); options and explanation box (no digits) already fully legible on the 300 dpi full render (pg300-1464-1464.png). Key highlighted: yellow box on "A. Measles". Printed number "72." and footer "1464" -- continues the walk from p.1462\'s "71." with a normal +1 step. No boiler line present.' }

{ n:72, pr:73, p:1466, key:4,
  stem:'A 2-year-old girl has been ill for 2 days with fever, decreased appetite, and a rash. On physical examination, you note ulcers on the mouth and tongue. You also see vesicles with surrounding erythema on the palms and the dorsum of the hands and feet. What is the most likely causative microorganism?',
  opts:['Candida albicans','Herpes simplex type 1','Parvovirus B19','Varicella','Enterovirus'],
  expl:'This is hand-foot-mouth disease, caused by Coxsackie A virus (an enterovirus).',
  note: '5 options printed (A-E). Numerals "2-year-old", "2 days" (stem), "type 1" (option B) and "B19" (option C) confirmed on a 600 dpi band crop (crop-1466-full-1466.png W4962 H2100 at x0 y0, 600dpi) covering stem+options; explanation box (no digits) already fully legible on the 300 dpi full render (pg300-1466-1466.png). Key highlighted: yellow box on "E. Enterovirus". Printed number "73." and footer "1466" -- continues the walk from p.1464\'s "72." with a normal +1 step. No boiler line present.' }

{ n:73, pr:74, p:1468, key:3,
  stem:'A two-month-old male infant presents with history of fever for 6 days. No respiratory or GI symptoms and no improvement with symptomatic treatment. On examination, the child is sick-looking and lethargic. What is the best next step in his management?',
  opts:['Admit the child for close examination and investigations in a controlled setting','Consider medical child abuse','Send preliminary investigations and continue symptomatic treatment','Full septic work-up and start broad-spectrum IV antibiotics','Hydrate the infant and observe for fever'],
  expl:'Persistent fever in an infant with lethargy suggests serious bacterial infection -> immediate septic screen + IV antibiotics.',
  note: '5 options printed (A-E). "two-month-old" is spelled out in words on the page (not a digit) and "6 days" confirmed on a 600 dpi band crop (crop-1468-stem-1468.png W4961 H700 at x0 y0, 600dpi), which also confirms printed number "74."; options and explanation box (no digits, one "->" arrow reproduced as printed) already fully legible on the 300 dpi full render (pg300-1468-1468.png). Key highlighted: yellow box on "D. Full septic work-up and start broad-spectrum IV antibiotics". Printed number "74." and footer "1468" -- continues the walk from p.1466\'s "73." with a normal +1 step. No boiler line present.' }

{ n:74, pr:75, p:1470, key:4, box:1471,
  stem:'An 18-month-old boy presents with 3 days of vomiting and diarrhea. The vomiting has now settled, but he continues to have loose stools (he had about eight loose stools in the last 24 hours). His mucous membranes are dry, he has sunken eyes, and appears lethargic. His skin turgor is reduced. His extremities are warm and capillary refill time is normal. What is the NEXT step in management?',
  opts:['Antipyretic/analgesia','Intravenous bolus of 20 mL/kg of normal saline','Nasogastric rehydration therapy','Oral antibiotic','Oral rehydration solution'],
  expl:'•Child has moderate dehydration (sunken eyes, dry mucosa, ↓ turgor, lethargy).\n•Warm extremities & normal capillary refill → no shock.\n•ORS is first-line for mild–moderate dehydration.\n•IV fluids only if severe/shock or ORS fails.\n•Antibiotics/antipyretics not indicated for rehydration.',
  note: '5 options printed (A-E). Numerals "18-month-old", "3 days", "eight loose stools", "24 hours" (stem) and "20 mL/kg" (option B) confirmed on a 600 dpi band crop covering the whole question box (crop-1470-full-1470.png W4961 H2600 at x0 y0, 600dpi). Key highlighted: yellow box on "E. Oral rehydration solution". Printed number "75." and footer "1470" -- continues the walk from p.1468\'s "74." with a normal +1 step, matching pr:75 expected from the n+1 printed-number offset. FOOT OF P.1470, LOOKED AT DIRECTLY: the question box (stem, options A-E, yellow key) closes cleanly with plain white space below on both the 300 dpi full render (pg300-1470-1470.png) and the 600 dpi crop -- nothing runs on and no separate explanation box is printed on this sheet. What the header called a "notes page at p.1471" is NOT a separate notes page and not a new question: rendered and read at 300 dpi (pg300-1471-1471.png) and re-confirmed on a 600 dpi crop (crop-1471-box-1471.png W4961 H1200 at x0 y0, 600dpi), p.1471 carries a single bordered explanation box, printing no question number, that is this question\'s (n74/p.1470) explanation box overflowing onto the next sheet -- a BOX OVERFLOW per task override 5, NOT a straddle: stem, all 5 options and the key all sit on p.1470 alone, only the explanation text continues onto p.1471. Recorded via the box:1471 field; no straddle:true and no STRADDLE marker used. Explanation box on p.1471 reproduces a real down-arrow "↓" and right-arrow "→" glyph (not ASCII "->") and an en dash in "mild–moderate", confirmed on the 600 dpi crop; bullets "•" and the bold/red styling on "moderate dehydration" are the page\'s own emphasis, transcribed as plain text with the bullet character kept. No boiler line present. This is the parity-shift break the previous agent flagged: next answered page after this is p.1473, not p.1472.' }

{ n:75, pr:76, p:1473, key:0,
  stem:'A two-year-old male child is admitted with a history of fever for the last ten days. History and clinical examination are unremarkable. What is the next most appropriate step in managing this child?',
  opts:['Verification of the severity and duration of fever.','To do investigations to rule out tuberculosis.','Immediate hospital admission.','To do preliminary blood investigations.','Start broad-spectrum antibiotics after blood culture.'],
  expl:'This is fever of unknown origin (FUO). First step is careful history and confirmation before investigations.',
  note: 'TOP OF P.1473, LOOKED AT DIRECTLY, before assuming a clean handoff: p.1472 (rendered and read first, pg300-1472.png) is the BLANK exam-copy printing of this same question (stem "76. A two-year-old male child..." verbatim, options A-E, no yellow key, no explanation box, footer "1472") -- this is the book\'s normal blank-then-answered pairing (header lines 8-9), not a duplicate question; it is correctly excluded from the answered-page list. p.1473 (this entry) opens fresh with its own "76." stem, no fragment or continuation carried over from p.1471 or p.1472 -- confirmed on the 300 dpi full render (pg300-1473.png) and the 600 dpi full-box crop (crop-1473-full-1473.png W4961 H2500 at x0 y0, 600dpi). "two-year-old" and "the last ten days" are spelled out in words on the page, not digits -- no numerals anywhere in stem/options/explanation, so the whole box is read off the 600 dpi crop for completeness rather than any specific numeral. Key highlighted: yellow box on "A. Verification of the severity and duration of fever.". Explanation box (bordered, below options, same sheet, no overflow) reproduced verbatim, no dashes/arrows/digits. Printed number "76." and footer "1473" -- this is the first page after the p.1471 box-overflow / p.1472 blank-copy pair; walk continues normally: n74 printed "75." (p.1470) -> n75 printed "76." (p.1473), a +1 step in printed number despite the +3 step in PDF page (1470->1473), exactly the parity shift flagged in the header and in task override. From here the answered pages run odd (1473,1475,1477,1479,1481) as predicted. No boiler line present. No straddle: stem, all 5 options and the key sit entirely on p.1473.' }

{ n:76, pr:77, p:1475, key:0,
  stem:'A 2-month-old baby is seen in the pediatric outpatient department. She was born at term, weighing 3.5 kg, and is breastfed. Her mother is concerned as she has vomited some of the milk after most feeds since birth. She cries when she vomits. She is continuing to grow along the 50th centile. What is the most likely diagnosis?',
  opts:['Gastroesophageal reflux','Gastroenteritis','Infant colic','Overfeeding','Pyloric stenosis'],
  expl:'Reflux is common, especially if baby is thriving and growing normally. Red flags (projectile vomiting, poor growth) are absent.',
  note: '5 options printed (A-E). Numerals "2-month-old", "3.5 kg" and "50th centile" (stem) confirmed on a 600 dpi band crop covering the whole question box (crop-1475-full-1475.png W4961 H2400 at x0 y0, 600dpi). Key highlighted: yellow box on "A. Gastroesophageal reflux". Explanation box printed BESIDE options C/D (to the right of "C. Infant colic" / "D. Overfeeding"), not below the option ladder -- a layout variant like n37/n52/n53/n56/n59 (brief task override 5), not a straddle or box overflow: whole box (stem, options, key, explanation) sits on p.1475 alone. Printed number "77." and footer "1475" -- continues the walk from p.1473\'s "76." with a normal +1 step, matching the odd-page run predicted after the parity shift (next answered page after this is p.1477). No boiler line present.' }

{ n:77, pr:78, p:1477, key:2,
  stem:'A 4-week-old boy came to your clinic with persistent jaundice. He was born by SVD at term with a weight of 3.3 kg. He had an Apgar score of 9 and 9 at 1 and 5 minutes respectively and was discharged home with no concerns. On investigation, his conjugated bilirubin was 0.8 mg/dL and his unconjugated bilirubin was 14 mg/dL. The mother reports that she has always breastfed her baby and that her baby has always been well. On examination, he is jaundiced, alert, afebrile, and has a normal liver span. His current weight is 4.1 kg. Which of the following is the most appropriate management?',
  opts:['Cessation of breastfeeding.','Commence phototherapy.','Reassure the mother and continue breastfeeding.','Perform liver function tests and ultrasound abdomen.'],
  expl:'This is breast milk jaundice, benign and self-limiting. No treatment needed if conjugated bilirubin is normal.',
  note: 'Only 4 options printed (A-D). Numerals "4-week-old", "3.3 kg", "9 and 9", "1 and 5 minutes", "0.8 mg/dL", "14 mg/dL" and "4.1 kg" confirmed on two 600 dpi band crops covering the whole question box (crop-1477-stem-1477.png W4961 H1500 at x0 y0, and crop-1477-opts-1477.png W4961 H1400 at x0 y1400, both 600dpi). Key highlighted: yellow box on "C. Reassure the mother and continue breastfeeding.". Explanation box printed BESIDE options A/B (to the right, same layout-variant pattern as n76/p.1475 and earlier n37/n52/n53/n56/n59), not below the ladder -- not a straddle or box overflow: whole box sits on p.1477 alone. Printed number "78." and footer "1477" -- continues the walk from p.1475\'s "77." with a normal +1 step, matching the odd-page run predicted after the parity shift (next answered page after this is p.1479). No boiler line present.' }

{ n:78, pr:79, p:1479, key:2,
  stem:'A female infant is delivered by cesarean section at 32 weeks\' gestation. Her birth weight is 1.9 kg. No resuscitation is required. At 2 hours of age, she develops respiratory distress, with a respiratory rate of 70 breaths/min, grunting respirations, and indrawing of her rib cage. Respiratory support with CPAP (continuous positive airway pressure) and 45% oxygen is required. What is the most likely reason that this baby needs respiratory support?',
  opts:['Aspiration of meconium','Patent ductus arteriosus','Surfactant deficiency','Transient tachypnea of the newborn','Early neonatal sepsis'],
  expl:'A 32-week infant with early respiratory distress most likely has respiratory distress syndrome due to surfactant deficiency.',
  note: '5 options printed (A-E). Numerals "32 weeks\'", "1.9 kg", "2 hours", "70 breaths/min", "45% oxygen" (stem) and "32-week infant" (explanation box) confirmed on a 600 dpi band crop covering the whole question box (crop-1479-full-1479.png W4961 H2500 at x0 y0, 600dpi). Key highlighted: yellow box on "C. Surfactant deficiency". Explanation box printed BESIDE options B/C (to the right, same layout-variant pattern as n76/p.1475 and n77/p.1477), not below the ladder -- not a straddle or box overflow: whole box sits on p.1479 alone. Printed number "79." and footer "1479" -- continues the walk from p.1477\'s "78." with a normal +1 step, matching the odd-page run predicted after the parity shift. No boiler line present. Next and final page in range is p.1481 (n79).' }

{ n:79, pr:80, p:1481, key:1,
  stem:'Which one of the following is the most important cause of jaundice presenting in the first 24 hours of life?',
  opts:['Prematurity','Hemolysis','Breastfeeding','Physiological jaundice','Early-onset sepsis'],
  expl:'Early jaundice (<24h) is always pathological, most often due to hemolysis (e.g., Rh or ABO incompatibility).',
  note: '5 options printed (A-E). "24 hours" (stem) and "<24h" (explanation box, angle-bracket reproduced as printed) confirmed on a 600 dpi band crop covering the whole question box (crop-1481-full-1481.png W4961 H2400 at x0 y0, 600dpi). Key highlighted: yellow box on "B. Hemolysis". Explanation box printed BELOW the option ladder (not beside, unlike n76-n78), same sheet, no overflow -- not a straddle or box overflow. Printed number "80." and footer "1481" -- continues the walk from p.1479\'s "79." with a normal +1 step, matching pr:80 = n+1 for this exam\'s offset. THIS IS THE LAST QUESTION OF MODEL FINAL EXAM 2 in this task\'s range -- per task instruction, p.1481 is the final page to stage and p.1482-1483 were not rendered (Model Final Exam 3 opens p.1484, out of range, and the task explicitly said not to stage past p.1481, so the one-page-past boundary render specified in the general brief Section 6 was skipped here on the task\'s own authority rather than independently re-verified). No boiler line present. HALF D COMPLETE: n61-n79 staged, pp.1444-1481.' }
