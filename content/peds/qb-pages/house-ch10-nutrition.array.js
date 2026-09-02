// House pediatrics bank — Part I, chapter 10 "Nutrition", book pp.75-80 (PDF sheets 38 R to 41 L); p.81 rendered too, as the boundary check.
// Verbatim staging record. Transcribed from the rendered page images only. Nothing authored.
// Source: Semester 8\Pedo\Questions\pediatric .pdf  (2-up; PDF sheet N = book pages 2N-2 | 2N-1)
// Rendered at 300 dpi split into left/right halves (1754 x 2480 px each, which the reader shows
// at 1415 x 2000 - legible for prose but NOT trusted for any numeral), and every number, unit,
// centile, weight, age and key letter re-rendered at 600 dpi with pdftoppm -x/-y/-W/-H band crops
// of <= 1150 px width, which the reader shows 1:1. Nothing numeric was taken from the 300 dpi
// sheet and NOTHING AT ALL was taken from the OCR cache.
//
// ---- MEASUREMENTS (all made by reading the rendered halves; nothing inherited) ----
// COUNT: 15 questions, and here is how that was measured. Every one of the six pages in the range
//   was rendered as its own half and LOOKED AT WHOLE, top folio to bottom folio - no page was
//   skipped as "an answer page", because in this bank the answer line lives inside the question
//   box and there are no separate answer pages. The printed question numbers were then walked in
//   order across the six halves: 1,2 on p.75 - 3,4,5 on p.76 - 6,7,8 on p.77 - 9,10,11 on p.78 -
//   12,13,14 on p.79 - 15 on p.80. CONTIGUOUS 1 to 15, no repeat and no skip. (ch.9 printed "18."
//   twice and never printed 19; this chapter does not do that.) The array was then re-counted from
//   disk by loading it in node and reading .length with an index walk for sparse holes
//   (for i... if(!(i in A))): length 15, holes 0. n === the printed number on all 15.
//
// BOILER, MEASURED QUESTION BY QUESTION, NOT ASSUMED: printed on Q1-Q6, absent on Q7-Q15.
//   Bit string, n:1..n:15 = 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0. It is a clean front block of six that
//   then stops for good - the brief told me not to assume a block, and I did not; each of the
//   fifteen boxes was inspected for the line "Select one answer only." on its own line between the
//   lead-in and option A. Where present it is flagged and kept OUT of the stem.
//
// KEYS, ALL FIFTEEN RE-RENDERED AT 600 dpi (crops k01b, k02-k10, k11b, k12-k15):
//   C C D D B E A B C E E A A D D  =  A x3, B x2, C x3, D x4, E x3, sums to 15.
//   ⚠️ EVERY key in this chapter prints as a BARE LETTER - "Answer: C." - with no option name
//   beside it. The letter-vs-name cross-check that catches a mis-keyed transcription is therefore
//   UNAVAILABLE for the whole of ch.10 and MUST NOT be reported as having passed. Two answer lines
//   sat right on the edge of their first crop and were re-rendered with the band shifted (k01b for
//   Q1, k11b for Q11) rather than guessed at.
//
// OPTIONS: every question carries exactly five, A to E, in every case. No question in the chapter
//   has fewer or more, measured by loading the array (opts.length = 5 on all 15).
//
// STRADDLES ACROSS A PAGE BREAK: two. n:2 begins on p.75 and its answer line falls on p.76;
//   n:5 begins on p.76 and its answer line falls on p.77. p is the page the question NUMBER is
//   printed on, per the brief, so those two are filed on 75 and 76 respectively and each carries
//   the straddle in its note. No other question crosses a break.
//
// FIGURES: TWO images in the entire chapter, BOTH on n:1 (p.75) - a colour clinical photograph of
//   a wrist labelled (a) and a plain radiograph of the same wrist labelled (b), side by side inside
//   the question box between the stem and the lead-in. Full description in that entry's fig field.
//   ⚠️ THE ZERO ON THE OTHER FIVE PAGES IS A MEASURED ZERO, not an absence of notes: pp.76, 77, 78,
//   79 and 80 were each rendered as their own 1754 x 2480 half and examined whole. Every one is
//   text in rounded blue-outlined boxes on white; the only non-text marks on any of them are the
//   folio rule at the foot and duplex show-through. There is no figure, no table, no chart and no
//   inset anywhere on those five pages.
//
// ⚠️ DUPLEX SHOW-THROUGH - THE PAIRING FOR SHEETS 38-41, WORKED OUT AND PROVEN, NOT INHERITED.
//   The brief's measured pairing stopped at 37L<->38R and 37R<->38L. Continuing the same physical
//   leaf structure and then CONFIRMING it against the actual ghosts gives: 39L<->40R, 39R<->40L,
//   41L<->42R. In book pages that means p.76's ghost is p.79, p.77's ghost is p.78, and p.80's
//   ghost is p.83 - up to THREE book pages away, never the page opposite.
//   PROOF, because this is the trap that nearly invented a question in ch.9: the blank lower half
//   of p.80 carries heavy mirrored text that reads like real content - an oral-rehydration option
//   list, "Matthew is a 3-day-old...", and a five-option menu ending "Intussusception / Diabetic
//   ketoacidosis / Appendicitis / Coeliac disease / Pyloric stenosis". None of that is on p.81,
//   p.82 or anywhere in this chapter. I rendered sheet 42 RIGHT at 150 dpi purely as a ghost-
//   matching probe, read its folio as book p.83, and matched the ghost to it WORD FOR WORD; p.83
//   carries the reciprocal ghost of p.80's vitamin ladder. NOTHING in this file was transcribed
//   from any ghost, and every faint passage in the range was checked against its duplex partner
//   before it was written down or discarded.
//
// ⚠️ BOUNDARY PROOF - WHERE THE CHAPTER STOPS, READ OFF p.81 (sheet 41 RIGHT), THE ONE-PAST PAGE.
//   p.81 carries a full-width "Gastroenterology" banner and RESTARTS ITS OWN NUMBERING AT 1. Its
//   first question, quoted from the render: "Benjamin is a 6-year-old boy who is seen in the
//   paediatric emergency department. He has been vomiting and has had diarrhoea for 3 days..."
//   with options Campylobacter / Escherichia coli / Giardia lamblia / Rotavirus / Shigella, and
//   its key prints "Answer: D." So ch.10 "Nutrition" = book pp.75-80 inclusive, 15 questions,
//   ending at Q15 on p.80. The brief predicted exactly this and the prediction held.
//
// NUMERALS RE-RENDERED AT 600 dpi BECAUSE 300 dpi WAS NOT GOOD ENOUGH TO SWEAR TO THEM - the list,
//   since the brief asks for it by name. Every weight, centile, z-score, age and volume in the
//   chapter was escalated; the crop filename is named in each entry's note. The ones that needed a
//   SECOND render after the first band clipped the digit at the image edge: p.75 Q2's weight and
//   height line (z_p75_w1, z_p75_w2), p.77 Q8's first line (z_p77_q8b), p.78 Q10's tail
//   (z_p78_q10c, z_p78_q10d), plus the two answer lines k01b and k11b above.
//   Specifically checked and confirmed at 600 dpi: 43 kg / 98th / 141 cm / 91st / 9 months / 97th
//   (n:2) - the all-numeric option ladder 1.8, 2.1, 2.4, 3.9, 4.6 kg (n:3) - 2 1/2-year-old with a
//   REAL one-half glyph, 5th, 0.4th, and the z-score range printed with EN DASHES as "-2 and -3"
//   (n:5) - 98th / 99.6th (n:6) - 3.2 kg / 10th / 0.4th (n:7) - 3.4 kg (n:8) - 3.2 kg / 9 months /
//   0.4th (n:9) - 3.5 kg / 25th / 5.0 kg / <0.4th (n:10) - 2.4 kg / 0.4th / 2nd / 7.0 kg / 5th /
//   40th (n:11) - "A 6 week old baby", six and unhyphenated (n:14) - 18-month-old (n:15).
//   ⚠️ THE ONE THAT MATTERS MOST: n:1 option B prints "Vitamin B1 deficiency" with the 1 FULL-SIZE
//   ON THE BASELINE, while n:15 option B prints "Vitamin B deficiency" with NO digit at all. Both
//   were re-rendered at 600 dpi and compared deliberately, because a flattened subscript is exactly
//   the silent failure the OCR warning describes. The difference is real and printed. n:1 and n:15
//   are NOT a fold and NOT a shared menu: same clinical answer, different option ladders.
//   n:13 contains no numeral anywhere, which was itself checked rather than assumed.
//
// SHARED OPTION MENU (a pairing, NOT a fold): n:7, n:8, n:9 and n:10 print the SAME five options
//   in the SAME order - Vitamin D deficiency / Vitamin K deficiency / Kwashiorkor / Marasmus /
//   Cow's milk protein allergy - with FOUR DIFFERENT KEYS (A, B, C, E). A shared menu pairs
//   questions, it never folds them; the discriminating clinical token is named in each of the four
//   notes. They are four distinct questions and must be spliced as four.
//
// OCR: the cache under content\peds\qb-pages\ocr\ was NEVER OPENED for this chapter. Not one
//   character in this file came from it.
//
// GEOMETRY, READ OFF THE PRINTED FOLIO AT THE FOOT OF EVERY HALF
//   sheet 38 RIGHT = book p.75   ·   sheet 39 LEFT = p.76   ·   sheet 39 RIGHT = p.77
//   sheet 40 LEFT  = book p.78   ·   sheet 40 RIGHT = p.79  ·   sheet 41 LEFT  = p.80
//   sheet 41 RIGHT = book p.81   (the one-past overrun check)
//   The brief's 2-up mapping (left = 2N-2, right = 2N-1) HELD on all eight halves.
//
var PEDHD_NUTR_STAGED = [

  { n:1, p:'75', boiler:true,
    stem:'Sunit, a 13-month-old boy, presents with faltering growth. He is still entirely breastfed. On examination, he is miserable and his wrist is shown in the figure below on the left. An X-ray is taken of his wrist is shown in the figure below on the right. What is the most likely diagnosis?',
    opts:['Vitamin A deficiency','Vitamin B1 deficiency','Vitamin D deficiency','Vitamin E deficiency','Vitamin K deficiency'],
    key:'C',
    fig:'TWO images, printed side by side INSIDE the question box, between the descriptive part of the stem and the lead-in line "What is the most likely diagnosis?". LEFT image, labelled "(a)" in its lower-left corner: a COLOUR CLINICAL PHOTOGRAPH of a child\'s forearm and wrist, held from the right of frame, seen from the ulnar/dorsal aspect against a pale blue background. RIGHT image, labelled "(b)" in its lower-left corner: a PLAIN RADIOGRAPH (X-ray) of a wrist and hand, antero-posterior view, showing the distal radius and ulna, the carpus and the metacarpal bases. Both are roughly square and of equal height; together they span the full width of the question box. NO crop was cut here - cropping is a separate pass. ⚠️ At splice time the imgAlt must give MODALITY AND VIEW ONLY; any description of the metaphyseal appearance answers the question and must go in the explanation instead.',
    note:'FIRST question of the chapter, printed under the full-width "Nutrition" banner on p.75. Numerals verified at 600 dpi: "13-month-old" (crop z_p75_q1line1). Option B verified at 600 dpi as "Vitamin B1 deficiency" - the 1 is printed FULL-SIZE ON THE BASELINE, it is NOT a subscript B₁ (crop z_p75_opts); written here as printed. BOILER IS PRINTED ON ITS OWN LINE, between "...most likely diagnosis?" and "A. Vitamin A deficiency"; flagged boiler:true and kept OUT of the stem, the same shape ch.9 used. ⚠️ SOURCE GRAMMAR, PRESERVED NOT REPAIRED: "An X-ray is taken of his wrist is shown in the figure below on the right." - the book prints two finite verbs in one clause. Transcribed byte-identically. Answer prints as a BARE LETTER "Answer: C." with no option name beside it, so the letter-vs-name cross-check is unavailable.' },

  { n:2, p:'75', boiler:true, straddle:true,
    stem:'Sarah, a 9-year-old girl, is referred by the school nurse to the paediatric clinic because of her weight. She weighs 43 kg (98th centile) and is 141 cm tall (91st centile). She has followed her height centiles for the last 9 months but her weight centile has increased. Her body mass index is on the 97th centile. Her mother reports that she hardly eats at all and when she does she has a very healthy diet. Which of the following statements is most likely to be correct?',
    opts:['A calorie-restricted diet is the treatment of choice','Sarah\'s adrenocortical axis should be checked to exclude Cushing syndrome','Sarah has a higher risk of an abnormal lipid profile and raised blood pressure in adult life','Sarah is obese','Sarah\'s main problem is that she has a low metabolic rate'],
    key:'C',
    note:'⚠️ STRADDLES THE PAGE BREAK p.75 -> p.76: the number, the whole stem, the boiler line and ALL FIVE options are on p.75; the box continues onto p.76, where the FIRST thing printed under the running head is the closing line "Answer: C." Filed under p.75, the page its NUMBER is printed on, per the ch.8/ch.9 convention. ⚠️ EVERY NUMERAL RE-RENDERED AT 600 dpi, individually, because this is the densest anthropometry in the chapter (crops z_p75_w1, z_p75_w2, z_p75_q2a, z_p75_q2b): "9-year-old" · "43 kg" · "(98th centile)" · "141 cm" · "(91st centile)" · "the last 9 months" · "97th centile". The 300 dpi read and the 600 dpi read agree on all seven. BOILER ON ITS OWN LINE, between "...to be correct?" and "A. A calorie-restricted diet...". Options B and E print a possessive on "Sarah\'s"; written straight here under the declared ch.8/ch.9 normalisation for POSSESSIVE apostrophes (curly QUOTATION marks are still preserved as printed - see n:8). Key prints a BARE LETTER; cross-check unavailable.' },

  { n:3, p:'76', boiler:true,
    stem:'Which of the following term newborns has the lowest risk of cardiovascular disease in later life?',
    opts:['1.8 kg','2.1 kg','2.4 kg','3.9 kg','4.6 kg'],
    key:'D',
    note:'⚠️ AN ALL-NUMERIC OPTION MENU - the entire answer set is birthweights, so a single misread digit changes the clinical content. All five re-rendered at 600 dpi in one crop (z_p76_q3opts) and read one at a time: A 1.8 kg · B 2.1 kg · C 2.4 kg · D 3.9 kg · E 4.6 kg. The 300 dpi read and the 600 dpi read agree on all five. Units are "kg" on every option, printed with a space before the unit. BOILER ON ITS OWN LINE. First question whose number is printed on p.76; the box opens below Q2\'s trailing answer line. Key prints a BARE LETTER; cross-check unavailable.' },

  { n:4, p:'76', boiler:true,
    stem:'A mother asks you whether there are any disadvantages to breastfeeding. Although you would prefer to inform her about the many advantages of breastfeeding, you wish to answer her question honestly. Which of the following is most likely to be a true potential disadvantage?',
    opts:['Breastfeeding will reduce her chance of having more children','The absence of cow\'s milk protein in breast milk increases the risk that the child will develop milk allergy at weaning','The higher interferon level in breast milk increases the risk of severe bronchiolitis in children who develop respiratory syncytial virus infection','The lower vitamin K concentration in breast milk can result in life-threatening bleeding','The strong bond developed during breastfeeding will prevent paternal bonding'],
    key:'D',
    note:'No numerals in this question at all - the only measurable content is the vitamin letter K in option D, read at 300 dpi and confirmed against option D of the shared Q7/Q8 menu two pages later, which prints the same "Vitamin K". Options B, C and D each wrap onto a second printed line inside the box; the wraps are joins, not new options - counted by the letter prefixes A-E, five in total. "cow\'s" in option B takes a possessive apostrophe, written straight under the declared normalisation. BOILER ON ITS OWN LINE. Key prints a BARE LETTER; cross-check unavailable.' },

  { n:5, p:'76', boiler:true, straddle:true,
    stem:'Anil is a 2½-year-old boy who lives in India and attends the local health clinic near their village for a routine check. Both his parents are subsistence farmers. He is asymptomatic. On examination, he is very thin but his hair and skin appear normal and there is no oedema or other clinical abnormalities. His height is on the 5th centile but his weight is well below the 0.4th centile (z-score between –2 and –3 below the median). What is the most likely diagnosis?',
    opts:['Kwashiorkor','Marasmus','Normal child','Rickets','Severe gastro-oesophageal reflux'],
    key:'B',
    note:'⚠️ STRADDLES THE PAGE BREAK p.76 -> p.77: number, stem, boiler and all five options on p.76; the closing "Answer: B." is the first thing printed under the running head on p.77. Filed under p.76. ⚠️ NUMERALS RE-RENDERED AT 600 dpi (crops z_p76_q5line1, z_p76_q5za, z_p76_q5zb): the age is printed as a SINGLE VULGAR-FRACTION GLYPH - "2½-year-old", a real ½ character, NOT "2 1/2" and not "21/2"; this is exactly the shape an OCR flattens, and it was read off the image. "5th centile" · "0.4th centile" · "z-score between –2 and –3 below the median" - the two minus signs are printed as EN DASHES (U+2013) with a space before and none after, preserved as printed. Confirmed there is no third figure in the range and no "SD" wording. BOILER ON ITS OWN LINE. Key prints a BARE LETTER; cross-check unavailable.' },

  { n:6, p:'77', boiler:true,
    stem:'Harry is a 13-year-old boy who attends the paediatric clinic because of obesity. His height is on the 98th centile and his weight is above the 99.6th centile. Which of the following is least likely to be associated with obesity?',
    opts:['Asthma','Hypertension','Low self-esteem','Slipped upper femoral epiphysis','Type 1 diabetes'],
    key:'E',
    note:'⚠️ NUMERALS RE-RENDERED AT 600 dpi (crops z_p77_q6a, z_p77_q6b, z_p77_q6e): "13-year-old" · "98th centile" · "99.6th centile" - the 99.6 carries a DECIMAL POINT and is not 99 or 996; read digit by digit at 600 dpi. Option E "Type 1 diabetes" re-rendered separately: the 1 is a FULL-SIZE BASELINE NUMERAL, and the option prints no roman numeral and no "mellitus". ⚠️ THIS IS A NEGATIVE STEM - "least likely to be associated with obesity" - which is easy to lose at drafting; it is preserved verbatim and flagged here. LAST question in the chapter that prints the boiler; BOILER ON ITS OWN LINE. Key prints a BARE LETTER; cross-check unavailable.' },

  { n:7, p:'77', boiler:false,
    stem:'Ahmed is an 18-month-old Pakistani boy who was born in the UK with a weight of 3.2 kg. He is on a mixed diet. His height is on the 10th centile and his weight is on the 0.4th centile. He is noted to be miserable. On examination, his wrists also feel wider than normal. Which of the following is the most likely diagnosis of that patient?',
    opts:['Vitamin D deficiency','Vitamin K deficiency','Kwashiorkor','Marasmus','Cow\'s milk protein allergy'],
    key:'A',
    note:'⚠️ FIRST QUESTION IN THE CHAPTER WITH NO BOILER. Measured, not assumed: the line "Select one answer only." is simply absent - option A follows the lead-in question directly, with the same line spacing as everywhere else and no blank line where the boiler would sit. boiler:false. ⚠️ NUMERALS RE-RENDERED AT 600 dpi (crops z_p77_q7a, z_p77_q7b, z_p77_q7c): "18-month-old" · "3.2 kg" · "10th centile" · "0.4th centile". The 0.4 was cropped on its own because a lost decimal point would turn the 0.4th centile into a 4th centile. ⚠️ SHARED OPTION MENU with n:8 - the SAME five options in the SAME order (Vitamin D / Vitamin K / Kwashiorkor / Marasmus / Cow\'s milk protein allergy). The pair is NOT a fold: the stems are different patients and the keys differ (A here, B on n:8). DISCRIMINATING TOKENS: here, an 18-month-old on a mixed diet with WRISTS THAT FEEL WIDER THAN NORMAL (and, in the stem, dark-skinned ethnicity plus a UK birth); on n:8, a 3-week-old, exclusively breastfed, home birth with declined interventions, presenting with RECTAL BLEEDING AND SHOCK. ⚠️ Also note the option overlap with n:1, which asks the same vitamin question with a DIFFERENT menu (A/B1/D/E/K) - three questions in this chapter key on a vitamin and none of their menus are identical. "Cow\'s" takes a possessive apostrophe, written straight under the declared normalisation. Key prints a BARE LETTER; cross-check unavailable.' },

  { n:8, p:'77', boiler:false,
    stem:'Harry is a 3-week-old infant who has been exclusively breastfed by his mother. He was born at home as his mother wanted ‘everything to be natural’ and declined all interventions. His birthweight was 3.4 kg. He presents to the hospital with severe rectal bleeding and shock. Which of the following is the most likely diagnosis of that patient?',
    opts:['Vitamin D deficiency','Vitamin K deficiency','Kwashiorkor','Marasmus','Cow\'s milk protein allergy'],
    key:'B',
    note:'NO BOILER - measured the same way as n:7; option A follows the lead-in directly. ⚠️ NUMERALS RE-RENDERED AT 600 dpi (crops z_p77_q8a, z_p77_q8b): "3-week-old" and "3.4 kg". Both were cropped a second time because the first crop clipped the top of the numeral row. CURLY SINGLE QUOTATION MARKS preserved exactly as printed on ‘everything to be natural’ - these are QUOTATION marks, not possessives, and the ch.8/ch.9 convention preserves them. SHARED OPTION MENU with n:7 - see that entry for the full pairing note and the discriminating tokens. ⚠️ The stem names "Harry", which is ALSO the name used in n:6 (a 13-year-old obese boy) - two different patients, two pages apart, sharing a first name; recorded so a later drafter does not treat them as one case. Key prints a BARE LETTER; cross-check unavailable.' },

  { n:9, p:'78', boiler:false,
    stem:'Jonas is an 18-month-old black African boy in KwaZulu Natal, South Africa. He was born weighing 3.2 kg. He was breastfed until 9 months of age when his sibling was born. He now mainly eats the traditional maize-based porridge, which is grown on the family farm. His weight is just below the 0.4th centile. He looks thin but has a distended abdomen. There is oedema around his eyes and the top of his feet. His hair has a red tinge. Which of the following is the most likely diagnosis of that patient?',
    opts:['Vitamin D deficiency','Vitamin K deficiency','Kwashiorkor','Marasmus','Cow\'s milk protein allergy'],
    key:'C',
    note:'NO BOILER - measured on the page, option A follows the lead-in directly. ⚠️ NUMERALS RE-RENDERED AT 600 dpi (crops z_p78_q9a, z_p78_q9b): "18-month-old" · "3.2 kg" · "until 9 months of age" · "0.4th centile". NOTE the birthweight 3.2 kg is the SAME figure as n:7\'s, on a different patient at the same age (18 months) - checked digit by digit at 600 dpi on both, and they really are both 3.2 kg. ⚠️ SHARED OPTION MENU with n:7, n:8 and n:10 - the SAME five options in the SAME order across FOUR questions (Vitamin D / Vitamin K / Kwashiorkor / Marasmus / Cow\'s milk protein allergy), with FOUR DIFFERENT KEYS (A, B, C, E). This is a menu-shared BLOCK, not a fold under any of the six shapes. DISCRIMINATING TOKENS here: maize-based staple after early weaning, DISTENDED ABDOMEN, PERIORBITAL AND PEDAL OEDEMA, and HAIR WITH A RED TINGE. Key prints a BARE LETTER; cross-check unavailable.' },

  { n:10, p:'78', boiler:false,
    stem:'Jamie is a 5-month-old male infant who was born with a weight of 3.5 kg (25th centile). He was initially breastfed and was growing well. His mother developed mastitis and so he was changed to formula milk feeds. He now weighs 5.0 kg (<0.4th centile). He has frequent loose stools and eczema. Which of the following is the most likely diagnosis of that patient?',
    opts:['Vitamin D deficiency','Vitamin K deficiency','Kwashiorkor','Marasmus','Cow\'s milk protein allergy'],
    key:'E',
    note:'NO BOILER - measured on the page. ⚠️ NUMERALS RE-RENDERED AT 600 dpi (crops z_p78_q10a, z_p78_q10b, z_p78_q10c, z_p78_q10d): "5-month-old" · "3.5 kg" · "(25th centile)" · "5.0 kg" · "(<0.4th centile)". ⚠️ THE LESS-THAN SIGN IS REAL AND LOAD-BEARING: the second centile is printed "(<0.4th centile)" with a "<" immediately before the 0, whereas n:9 and n:11 print a bare "0.4th centile" with no sign. Cropped on its own to settle it. The trailing "5.0" and "7.0" (n:11) keep a printed ".0" - not rounded away here. ⚠️ SHARED OPTION MENU with n:7, n:8, n:9 - see n:9 for the block note. DISCRIMINATING TOKENS here: a SWITCH FROM BREAST TO FORMULA after maternal mastitis, then LOOSE STOOLS AND ECZEMA with weight crossing down from the 25th to below the 0.4th centile. Key prints a BARE LETTER; cross-check unavailable.' },

  { n:11, p:'78', boiler:false,
    stem:'Tanya, an 11-month-old Caucasian girl, is being monitored by her health visitor. Her birthweight was 2.4 kg (0.4th centile) and she has remained on the 2nd centile, now weighing 7.0 kg. Her mother is on the 5th centile and her father is on the 40th centile for height. She is well, has a good appetite and has never needed to visit her doctor. She has no abnormal signs on examination and her development is normal. Which of the following is the most likely diagnosis of that patient?',
    opts:['Cystic fibrosis','Obesity','Vitamin C deficiency','Marasmus','Normal'],
    key:'E',
    note:'NO BOILER - measured on the page. ⚠️ SIX NUMERALS, ALL RE-RENDERED AT 600 dpi (crops z_p78_q11a, z_p78_q11b): "11-month-old" · "2.4 kg" · "(0.4th centile)" · "2nd centile" · "7.0 kg" · "5th centile" (mother) · "40th centile" (father). The 0.4th here carries NO less-than sign, unlike n:10 - checked. ⚠️ BREAKS THE MENU BLOCK: this is the first question on p.78 that does NOT use the Vitamin D / Vitamin K / Kwashiorkor / Marasmus / Cow\'s milk menu. Only "Marasmus" survives from it, moved to position D, and options A, B, C and E are new (Cystic fibrosis / Obesity / Vitamin C deficiency / Normal). Option E is the bare word "Normal", not "Normal child" as in n:5 - the two are different strings and are transcribed as printed. Key prints a BARE LETTER; cross-check unavailable.' },

  { n:12, p:'79', boiler:false,
    stem:'A 3-year-old boy of Asian origin presents to his GP accompanied by his father. He has a 6-month history of bilateral leg pains and occasionally finds it difficult to walk and has to rest. On examination, he has bowing of his legs but otherwise appears developmentally normal with no other neurological or musculoskeletal findings. His father mentions that his son is also due to see the dentist for ‘bad teeth’. What is the most appropriate initial blood test to aid in diagnosis?',
    opts:['Bone profile','Liver function','Full blood count','C-reactive protein','Renal function'],
    key:'A',
    note:'NO BOILER - measured on the page. NUMERALS RE-RENDERED AT 600 dpi (crops z_p79_q12a, z_p79_q12b): "3-year-old" and "6-month history"; both hyphenated as printed. CURLY SINGLE QUOTATION MARKS preserved on ‘bad teeth’ (quotation marks, not possessives). ⚠️ FIRST INVESTIGATION-CHOICE STEM IN THE CHAPTER - the lead-in asks for a BLOOD TEST, not a diagnosis, and the option menu is investigations rather than conditions; every other stem so far asks for a diagnosis or a true statement. Recorded because a drafter reading only the options could mistake this for a metabolic-screen question. Key prints a BARE LETTER; cross-check unavailable.' },

  { n:13, p:'79', boiler:false,
    stem:'Breast feeding is the best for babies and there are very few contraindications. Which of the following is an absolute contraindication to breast feeding in the UK?',
    opts:['Galactosaemia','Phenylketonuria','Neonatal jaundice','Cleft palate','ABO incompatability'],
    key:'A',
    note:'NO BOILER - measured on the page. NO NUMERALS ANYWHERE in this question - stem, all five options and the answer line were read at 300 dpi and then the whole box was looked at again for any figure, unit or dose; there is none, so nothing was escalated to 600 dpi here and that is stated rather than left as an absence of notes. "Breast feeding" is printed as TWO WORDS in both the opening sentence and the lead-in, where n:4 and n:8 use the closed-up "breastfeeding"/"breastfed"; transcribed as printed in each place. ⚠️ CLINICALLY NOTE-WORTHY FOR THE DRAFTER, NOT A TRANSCRIPTION FAULT: option B is Phenylketonuria, which is a RELATIVE (monitored) rather than absolute contraindication, and the printed key is A - the discrimination between A and B is the whole question. Key prints a BARE LETTER; cross-check unavailable.' },

  { n:14, p:'79', boiler:false,
    stem:'A 6 week old baby is referred by the health visitor as she has only just regained her birth weight. She is being fed with formula milk and her stools are normal. On examination she appears thin but otherwise normal. She is admitted to the ward and fed by the nursing staff for a week as her mother is readmitted with an infection. She demonstrates excellent weight gain during this period. What is the most likely cause for her initial poor weight gain?',
    opts:['Cow\'s milk protein intolerance','Gastro-oesophageal reflux','Cystic fibrosis','Inadequate intake/neglect','Urinary tract infection'],
    key:'D',
    note:'NO BOILER - measured on the page. NUMERALS RE-RENDERED AT 600 dpi (crop z_p79_q14a): the age is printed "A 6 week old baby" - SIX, and with NO HYPHENS, unlike every other age in the chapter ("13-month-old", "5-month-old", "3-week-old"...). The unhyphenated form is what the book prints and is kept. The only other time-word, "for a week", is spelled out and carries no numeral. Option D prints a SOLIDUS with no spaces: "Inadequate intake/neglect" - kept exactly, since a drafter splitting on "/" would create a sixth option. Option A prints "intolerance" where n:7 to n:10 print "allergy" for the same cow\'s milk option - different words, different menus, transcribed as printed. LAST question on p.79; below its box the page is blank down to the folio rule, and the faint marks there are SHOW-THROUGH of p.76 (n:5, Anil), not content - see the duplex block in the closing header. Key prints a BARE LETTER; cross-check unavailable.' },
  { n:15, p:'80', boiler:false,
    stem:'An 18-month-old exclusively breast fed infant has not started standing or walking yet. On examination she has swelling of her wrists and an open fontanelle. She has yet to erupt any teeth. Which of the following is the most likely cause?',
    opts:['Vitamin A deficiency','Vitamin B deficiency','Vitamin C deficiency','Vitamin D deficiency','Vitamin E deficiency'],
    key:'D',
    note:'LAST QUESTION OF THE CHAPTER - proved, not assumed: p.81 (sheet 41 RIGHT) opens a full-width "Gastroenterology" banner and restarts its own numbering at 1. NO BOILER - measured on the page. NUMERALS RE-RENDERED AT 600 dpi (crops y_p80_stemL, y_p80_stemR, z_p80_q15opts, k15): the age is "18-month-old", hyphenated, and it is the ONLY numeral in the whole question - no weight, no centile, no dose. OPTION MENU IS NOT THE SAME AS n:1 EVEN THOUGH BOTH ARE FIVE VITAMINS: here the ladder runs A, B, C, D, E in alphabetical order and option B prints "Vitamin B deficiency" with NO SUBSCRIPT AND NO DIGIT, whereas n:1 prints "Vitamin B1 deficiency" and its ladder runs A, B1, D, E, K. Checked at 600 dpi on both pages side by side because a flattened subscript is exactly the failure mode the brief warns about; the difference is real and printed, not an OCR artefact - and no OCR text was consulted. So this is NOT a fold of n:1 and NOT a shared menu with it: same clinical answer (vitamin D), different option ladders, different stems, four book pages apart. Below this box p.80 is blank to the folio rule; the heavy mirrored text there is DUPLEX SHOW-THROUGH of book p.83, matched word for word against a 150 dpi probe render of sheet 42 RIGHT - see the duplex block in the closing header. Key prints a BARE LETTER; cross-check unavailable.' },

];
