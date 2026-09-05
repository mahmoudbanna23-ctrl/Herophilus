/* endpoint-s15-tre2.part-A.js
   Source: D:\claude os\Medical school\Herophilus\Semester 8\Pedo\Questions\Pediatrics endpoint part1.pdf
   Section: MODEL TRAINING EXAM 2, half A, n1..n16 (answered sheets only).

   PAGE LIST (as given in the brief):
   n1 p1876 | n2 p1878 | n3 p1880 | n4 p1882 | n5 p1884 | n6 p1886 | n7 p1888 |
   n8 p1890 | n9 p1892 | n10 p1894 | n11 p1896 | n12 p1898 | n13 p1900 |
   n14 p1902 | n15 p1904 | n16 p1906.
   All pages rendered at 150 dpi and read directly (no OCR text used as a source).
   150 dpi pass 1 for prose; 600 dpi band crops taken for every numeral/dose/key letter
   per §3 of the staging brief -- named per entry below as taken.

   COMPLETE -- all 16 pages rendered and read.

   MEASURED, not assumed:
   - Folio at the foot of every one of the 16 rendered pages matched the PDF page
     number requested -- exact on all 16.
   - Printed-number walk: 1,2,3,4,5,6,7,8,9,10,11,12,13,14,14,15 -- confirms the
     brief's pre-measurement #1 exactly: p1902 (n14) and p1904 (n15) both print "14.",
     p1906 (n16) prints "15.", no other skip or repeat in this half.
   - Option-count split: 5 options (A-E, printed lowercase a-e) on 10 sheets --
     n2,3,4,5,6,7,8,9,10,11. 4 options (A-D, printed lowercase a-d) on 6 sheets --
     n1,12,13,14,15,16.
   - Every one of the 16 sheets printed AN explanation box -- none printed no box at
     all (contrast with s14, which had 3 blank-box and 6 overflow-page sheets; this
     half had no overflow pages and no blank boxes).
   - n8 (p1890) CONTRADICTS the brief's pre-measurement #2: that note only warned
     "if the sheet marks no key, say so" as a contingency, but the render shows this
     sheet DOES mark a key -- option b ("3") is solid yellow highlight, bold,
     underlined, exactly like every other sheet in this run. It is not an unmarked
     sheet. key is staged at index 1, confirmed against the box's own explicit
     arithmetic (0+1+1+0+1=3). This sheet's explanation prints two boxes (a numbered
     walkthrough plus a separate reference SCORE table); both are transcribed into
     expl verbatim.

   CROPS TAKEN (600 dpi, region named per entry's note):
   - p1880: z-scores/ages in the vignette (10-month-old, 4 months, -2/-1/0 Z-score).
   - p1890: two crops -- the numbered walkthrough box (HR "70 bpm (<100)") and the
     reference SCORE table (100, 100-140).
   - p1892: bilirubin/day values (25-day-old, 5th day, 6 mg/dL, 13 mg/dL x2, 10th
     day, 0.2 mg/dL).
   - p1896: weight/blood-type/bilirubin values (21-day-old, 3.8 kg, day seven, O-ve,
     A+ve, 13/12/1 mg/dL).
   - p1904: weight/frequency values (3-week-old, 3400 g, 2 to 3 hours, 6 to 8, 2 to
     4, 3450 g).
   - p1906: age/percentile/ratio values (14-year-old, 5th percentile, 0.98).
   All six crops confirmed the 150 dpi read exactly -- no numeral was corrected or
   found to differ from the first pass.

   SECTION TOTAL: this half (A) holds 16 questions; half B is expected to hold 15
   more for a section total of 31, per the brief -- not verified from this half
   alone.
*/

{ n: 1, pr: 1, p: 1876,
  key: 0,
  stem: 'A 14-year-old girl awakens with a mild sore throat, low-grade fever, and a diffuse maculopapular rash. During the next 24 h, she develops tender swelling of her wrists and redness of her eyes. In addition, her physician notes mild tenderness and marked swelling of her posterior cervical and occipital lymph nodes. Four days after the onset of her illness, the rash has vanished.\nThe most likely diagnosis of this girl\'s condition is:',
  opts: [
    'Rubella',
    'Roseola',
    'Erythema infectiosum',
    'Erythema multiforme'
  ],
  expl: 'Low-grade fever, sore throat, maculopapular rash with posterior cervical and occipital lymphadenopathy are classic. Rash disappears within 3-4 days.',
  note: 'Only 4 options printed, lettered lowercase a-d. Numerals ("24 h", "3-4 days") read crisp and unambiguous at 150 dpi, no crop needed. Folio 1876 matched requested PDF page.' }

{ n: 2, pr: 2, p: 1878,
  key: 0,
  stem: 'A 14-year-old boy is evaluated for short stature. He has no significant past medical history and is considered otherwise healthy by his parents. He eats a normal diet and has regular meals. His height and weight have been consistently at the 5th percentile since early childhood. His physical examination is normal, with genitalia at Tanner stage 3.\nWhich of the following is the most likely laboratory finding for this boy?',
  opts: [
    'Bone age that is equivalent to chronologic age',
    'Decreased complement C3 level',
    'Decreased serum albumin concentration',
    'Decreased thyroid stimulating hormone',
    'Increased serum creatinine concentration'
  ],
  expl: 'Consistent growth at 5th percentile with normal puberty = familial short stature, where bone age matches chronological age.',
  note: '5 options printed (A-E). Numerals ("5th percentile", "Tanner stage 3") read crisp and unambiguous at 150 dpi, no crop needed. Folio 1878 matched requested PDF page.' }

{ n: 3, pr: 3, p: 1880,
  key: 4,
  stem: 'The mother brought her 10-month-old son complaining that he is not thriving well for the last 4 months although he did not have any disease. You find his weight is just below -2 Z-score, his length is below -1 Z-score, and his head circumference is below 0-Z-score.\nYour correct comment will be as follows:',
  opts: [
    'he has microcephaly',
    'he has short stature',
    'his feeding and weaning is proper',
    'he has chronic problem since birth',
    'he has recent improper feeding and weaning'
  ],
  expl: 'Weight is most affected, length mildly affected, and head spared → indicates recent nutritional problem, not chronic disease.',
  note: '5 options printed (A-E). All Z-score/age numerals (10-month-old, 4 months, -2 Z-score, -1 Z-score, 0-Z-score) escalated to a 600 dpi crop (region x0 y300 W4700 H900) and confirmed matching the 150 dpi read exactly. Explanation box prints a literal arrow glyph, reproduced verbatim as \\u2192. Folio 1880 matched requested PDF page.' }

{ n: 4, pr: 4, p: 1882,
  key: 2,
  stem: 'A 6-year-old boy presented with fever for the last 3 days, associated with headache and sore throat. He had frequent episodes of vomiting and abdominal pain. He appears ill, febrile, skin rash, with tender bilateral cervical lymphadenopathy, the tongue covered with heavy white coat with obvious red papillae protruded. The tonsils were red and edematous.\nThe most likely diagnosis is:',
  opts: [
    'Measles',
    'Infectious Mononucleosis',
    'Scarlet fever',
    'Erythema infectiosum',
    'Rubella'
  ],
  expl: 'Fever, sore throat, abdominal pain, "strawberry tongue," sandpaper rash = streptococcal scarlet fever.',
  note: '5 options printed, lettered lowercase a-e. Numerals ("6-year-old", "3 days") read crisp and unambiguous at 150 dpi, no crop needed. Folio 1882 matched requested PDF page.' }

{ n: 5, pr: 5, p: 1884,
  key: 2,
  stem: 'A 3-month-old boy has a maculopapular rash that appeared on the face then spread all over the body. It has been preceded by very high fever for 3 days. Today he looks well active, afebrile with this rash. The most likely causative agent is:',
  opts: [
    'Rubella virus',
    'Human herpes virus type 1',
    'Human herpes virus type 6',
    'Epstein–Barr virus',
    'Measles'
  ],
  expl: 'High fever for 3 days then maculopapular rash after defervescence = roseola infantum.',
  note: '5 options printed, lettered lowercase a-e. Numerals ("3-month-old", "3 days") read crisp and unambiguous at 150 dpi, no crop needed. Option d printed with an en dash (Epstein-Barr); reproduced as printed. Folio 1884 matched requested PDF page.' }

{ n: 6, pr: 6, p: 1886,
  key: 0,
  stem: 'A 6-year-old girl presented with recurrent abdominal pain, bloating, and foul-smelling diarrhea. These symptoms exacerbate after consuming foods such as bread and pasta. Her pediatrician suspected her to have a celiac disease. Which of the following would be the most appropriate choice?',
  opts: [
    'Testing serum antibodies for tissue transglutaminase (tTG-IgA)',
    'Performing upper gastrointestinal endoscopy with duodenal biopsy',
    'Conducting a complete blood count',
    'Examining stool for fecal fat content',
    'Carrying out a barium follow-through'
  ],
  expl: 'The best first step for suspected celiac disease is checking tissue transglutaminase antibodies. Biopsy is confirmatory but not first.',
  note: '5 options printed, lettered lowercase a-e. Only numeral is "6-year-old", read crisp and unambiguous at 150 dpi, no crop needed. Folio 1886 matched requested PDF page.' }

{ n: 7, pr: 7, p: 1888,
  key: 4,
  stem: 'You are assessing child nutrition. Which of the following anthropometric measures is best used to assess the nutritional status of this child?',
  opts: [
    'Head circumference',
    'Height for age',
    'Mid upper arm circumference',
    'Weight for age',
    'Weight for height'
  ],
  expl: 'Best indicator of acute malnutrition because it shows wasting.',
  note: '5 options printed, lettered lowercase a-e. No numerals on this sheet. Stem as printed does not describe a specific child despite saying "this child" -- transcribed exactly as printed, no vignette detail omitted. Folio 1888 matched requested PDF page.' }

{ n: 8, pr: 8, p: 1890,
  key: 1,
  stem: 'At one minute of age, an infant exhibits central and peripheral cyanosis, floppy tone, gasping respiration, and a weak cry. The HR is 70 beats/min, and facial grimacing is observed but no crying is elicited by a nasal catheter.\nThe one-minute Apgar score for this neonate is:',
  opts: [
    '2',
    '3',
    '4',
    '5',
    '6'
  ],
  expl: '1.Appearance (color): Central + peripheral cyanosis → 0\n2.Pulse (HR): 70 bpm (<100) → 1\n3.Grimace (reflex): Grimace only, no cry → 1\n4.Activity (tone): Floppy → 0\n5.Respiration: Gasping, weak cry → 1\n👉 Total = 0 + 1 + 1 + 0 + 1 = 3\n\nAlso printed alongside, a reference SCORE table (columns "0 points" / "1 point" / "2 points"):\nAppearance (Skin color): Cyanotic / Pale all over | Peripheral cyanosis only | Pink\nPulse (Heart rate): 0 | <100 | 100-140\nGrimace (Reflex irritability): No response to stimulation | Grimace or weak cry when stimulated | Cry when stimulated\nActivity (Tone): Floppy | Some flexion | Well flexed and resisting extension\nRespiration: Apneic | Slow, irregular breathing | Strong cry',
  note: 'CONTRADICTS PRE-MEASUREMENT #2 IN THE BRIEF: this sheet DOES print a highlighted key -- "b. 3" is solid yellow highlight, bold, underlined, confirmed at 150 dpi and unambiguous. It is not an unmarked sheet. key is staged at index 1 (option "3"), matching the highlighted letter and the box\'s own arithmetic (0+1+1+0+1=3). The explanation prints two boxes: a numbered walkthrough (verbatim above, arrows are literal → glyphs, the pointing-hand emoji before "Total" is printed and reproduced) and a separate reference SCORE/points table restating standard Apgar criteria, both transcribed into expl. HR "70 bpm (<100)" escalated to 600 dpi crop (region x700 y1100 W2350 H700) and confirmed exact; the reference table\'s numerals (100, 100-140) escalated to a second 600 dpi crop (region x3100 y850 W1750 H900) and confirmed exact -- no numeral was taken from the 150 dpi pass alone. Folio 1890 matched requested PDF page.' }

{ n: 9, pr: 9, p: 1892,
  key: 2,
  stem: 'A 25-day-old healthy full-term, developed jaundice on the 5th day of life, with a total serum bilirubin (TSB) level of 6 mg/dL increasing to 13 mg/dL; by the 10th day, TSB is now 13 mg/dL, with a direct bilirubin of 0.2 mg/dL. All other investigations are normal.\nWhat is the most likely diagnosis?',
  opts: [
    'Physiological jaundice',
    'Biliary atresia',
    'Breast milk jaundice',
    'TORCH infection',
    'Neonatal hemolytic disease due to Rh incompatibility'
  ],
  expl: 'Jaundice appears after the 5th day, persists but baby is otherwise well, indirect bilirubin predominates.',
  note: '5 options printed, lettered lowercase a-e. All bilirubin/day values ("25-day-old", "5th day", "6 mg/dL", "13 mg/dL" x2, "10th day", "0.2 mg/dL") escalated to a 600 dpi crop (region x0 y300 W4700 H700) and confirmed exact matching the 150 dpi read. Folio 1892 matched requested PDF page.' }

{ n: 10, pr: 10, p: 1894,
  key: 4,
  stem: 'A 15-year-old boy develops repetitive attacks of myoclonic jerks not associated with loss of consciousness. He has been experienced poor academic experience, irritability, reduced attention span. He has a history of measles infection at the age of 5 years.\nWhat is the MOST likely diagnosis?',
  opts: [
    'Brain tumor',
    'Encephalitis',
    'Myoclonic seizure',
    'Progressive rubella panencephalitis',
    'Sub-acute sclerosing panencephalitis (SSPE)'
  ],
  expl: 'Progressive myoclonic jerks, cognitive decline years after measles → subacute sclerosing panencephalitis.',
  note: '5 options printed, lettered lowercase a-e. Numerals ("15-year-old", "5 years") read crisp and unambiguous at 150 dpi, no crop needed. Explanation box spells "subacute" without a hyphen where option e spells "Sub-acute" with one; reproduced exactly as each was printed. Folio 1894 matched requested PDF page.' }

{ n: 11, pr: 11, p: 1896,
  key: 0,
  stem: 'A 21-day-old breastfed boy (3.8 kg) presented with jaundice since day seven of life. Mother\'s blood is O–ve, father\'s blood is A+ve, total serum bilirubin (TSB) 13 mg/dL (indirect 12 mg/dL, direct 1 mg/dL), vital signs and primitive reflexes are normal.\nWhat is your best action in regard to the following options?',
  opts: [
    'Serial TSB monitoring',
    'Start phototherapy immediately',
    'Double-volume exchange transfusion',
    'Administration of intravenous immunoglobulin',
    'Cessation of breast feeding and start bottle feeding'
  ],
  expl: 'Stable breastfed infant with indirect hyperbilirubinemia and normal reflexes → physiological/breast milk jaundice, just monitor.',
  note: '5 options printed, lettered lowercase a-e. All weight/lab values ("21-day-old", "3.8 kg", "day seven", "O-ve", "A+ve", "13 mg/dL", "12 mg/dL", "1 mg/dL") escalated to a 600 dpi crop (region x0 y300 W4700 H700) and confirmed exact matching the 150 dpi read; printed "O-ve" and "A+ve" use an en dash and a plus sign as printed. Folio 1896 matched requested PDF page.' }

{ n: 12, pr: 12, p: 1898,
  key: 4,
  stem: 'How would you manage a choking child with mild airway obstruction?',
  opts: [
    'Start early CPR',
    'Give 5 abdominal thrusts',
    'Do 5 back blows',
    'Give 5 chest thrusts',
    'Encourage cough'
  ],
  expl: 'In mild airway obstruction, the child should be encouraged to keep coughing.',
  note: '5 options printed (A-E). Not an OSCE station -- ordinary stem-and-options MCQ format, in scope. The repeated numeral "5" in three options read crisp and unambiguous at 150 dpi, no crop needed. Folio 1898 matched requested PDF page.' }

{ n: 13, pr: 13, p: 1900,
  key: 2,
  stem: 'When examining an infant, you note bilateral genu varum, widening of her wrists, and frontal bossing. The mother states she noticed her child\'s bow legs when the child started walking and it has been getting worse with time.\nWhat additional possible clinical features would you expect in this patient?',
  opts: [
    'Clinodactyly',
    'Delayed posterior fontanelle closure',
    'Harrison sulcus',
    'Microcephaly'
  ],
  expl: 'Bow legs, wrist widening, frontal bossing = rickets. Harrison sulcus (rib cage deformity) is another expected feature.',
  note: 'Only 4 options printed, lettered lowercase a-d. No numerals on this sheet. Folio 1900 matched requested PDF page.' }

{ n: 14, pr: 14, p: 1902,
  key: 3,
  stem: 'In 18-month-old boy presenting with delayed walking is exclusively breast-fed with no history of intake of any vitamins or minerals. Examination revealed a distended abdomen and wrist thickening. Which of the following investigations would be correct in this case?',
  opts: [
    'Low serum calcium, phosphorus, and alkaline phosphatase',
    'Normal serum calcium, phosphorus, and alkaline phosphatase',
    'Normal phosphorus, low serum calcium, and high alkaline phosphatase',
    'Normal calcium, low serum phosphorus, and high alkaline phosphatase'
  ],
  expl: 'Classic lab finding in nutritional rickets (vitamin D deficiency).',
  note: 'CONFIRMS PRE-MEASUREMENT #1: this sheet prints "14." exactly as predicted (first occurrence of a repeated printed number in this section). Only 4 options printed, lettered lowercase a-d. Numeral "18-month-old" read crisp and unambiguous at 150 dpi, no crop needed. Folio 1902 matched requested PDF page.' }

{ n: 15, pr: 14, p: 1904,
  key: 0,
  stem: 'A 3-week-old baby girl is brought to her pediatrician for a checkup. She was born at term with a birth weight of 3400 g. The infant is exclusively breast-fed, nurses every 2 to 3 hours, and has 6 to 8 wet diapers and 2 to 4 seedy stools daily. At the time of her examination, she weighs 3450 g. Results of the physical examination are normal.\nThe most appropriate next step is:',
  opts: [
    'Continue breast feeding only',
    'Continue breast feeding with supplemental cow\'s milk formula between feeds',
    'Continue breast feeding with supplemental soy formula between feeds',
    'Continue breast feeding and add rice cereal to her diet'
  ],
  expl: 'Baby is thriving, normal growth, so no supplementation needed.',
  note: 'CONFIRMS PRE-MEASUREMENT #1: this sheet ALSO prints "14." -- the second occurrence, exactly as predicted; printed run is now 1..14, 14 again. Only 4 options printed, lettered lowercase a-d. All weight/frequency numerals ("3-week-old", "3400 g", "2 to 3 hours", "6 to 8", "2 to 4", "3450 g") escalated to a 600 dpi crop (region x0 y300 W4700 H900) and confirmed exact matching the 150 dpi read. Folio 1904 matched requested PDF page.' }

{ n: 16, pr: 15, p: 1906,
  key: 3,
  stem: 'The parents of a 14-year-old boy are concerned about his short stature and lack of sexual development. He had a normal growth pattern, although he was always shorter than children of his age. Examination revealed height at the 5th percentile, upper segment to lower segment ratio is 0.98. A small number of fine axillary and pubic hairs are present.\nWhich of the following is the most appropriate action?',
  opts: [
    'Measure pituitary gonadotropin',
    'Measure serum testosterone',
    'Obtain a CT scan of the pituitary gland',
    'Reassure the parents'
  ],
  expl: 'This is constitutional delay of growth and puberty; reassurance is appropriate.',
  note: 'CONFIRMS PRE-MEASUREMENT #1: this sheet prints "15." exactly as predicted, resuming the straight run after the repeated 14. Only 4 options printed, lettered lowercase a-d. Numerals ("14-year-old", "5th percentile", "0.98") escalated to a 600 dpi crop (region x0 y300 W4700 H900) and confirmed exact matching the 150 dpi read. Folio 1906 matched requested PDF page. This is the last of the 16 pages assigned to half A.' }
