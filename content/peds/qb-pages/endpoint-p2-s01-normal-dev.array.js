/* ===========================================================================
   ENDPOINT - Pediatrics endpoint part2.pdf - SECTION 1: "Normal Development"
   Verbatim staging record. PDF pages 5-75; PDF page = printed page, offset zero.
   Merged from endpoint-p2-s01-normal-dev.part-A.js + endpoint-p2-s01-normal-dev.part-B.js by merge-parts-ep2.js.
   
   Every question is printed TWICE: an unanswered page, then the ANSWERED page with the key
   highlighted in yellow and (usually) a bordered explanation box. Only answered pages are
   staged. `n` is the true sequential index, `pr` what the page prints, `p` the PDF page,
   `key` a ZERO-BASED INDEX into `opts` (never a letter), matching the app field `answer`,
   `expl` the printed box verbatim or "".
   =========================================================================== */
var PEDEP2_S01_STAGED = [

/* ENDPOINT PART 2 -- SECTION 1 "Normal Development" -- staging half A (n1..n14, pp.19-46).
   OCR index NOT opened during this pass, per brief S4.
   Range per task prompt: answered pages 19, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46.
   Unanswered twin read for every entry (p-1 for the strict-alternation pages, p18 for p19,
   p21 for p22) as a free second reading; differences noted per-entry.
   Printed question number (pr) walk so far: n1=pr1 (p19).
*/

{ n: 1, pr: 1, p: 19,
  key: 4,
  stem: "Steven has just had his first birthday party. During his party, he commando crawled with great speed, although he cannot walk. He managed to pick off all the Smarties (round chocolate sweets) from his birthday cake. He can say two words with meaning. After his birthday party, he impressed his guests by waving goodbye. Which area of Steven's development is delayed?",
  opts: ['Fine motor and vision', 'Gross motor', 'Social, emotional, and behavioral development', 'Speech and hearing', 'None – his development is within normal limits'],
  expl: '',
  note: 'Highlighted option E, "None – his development is within normal limits" (index 4), underlined+bold yellow highlight. No explanation box printed on p19. Twin p18 identical text, unanswered.' },

{ n: 2, pr: 2, p: 22,
  key: 4,
  stem: 'Sophie is a well-born 8-week-old baby who was born at term. She has come for a routine developmental check. Which of the following would you NOT expect her to be able to do?',
  opts: ['Auditory brainstem response audiometry', 'Fix and follow a toy', 'Quiet to a loud noise', 'Raise her head when lying prone', 'Reach out and grasp an object'],
  expl: 'At 8 weeks, babies can fix and follow, respond to noise, and lift their head briefly when prone. Reaching and grasping is expected later, around 3–4 months.',
  note: 'Highlighted option E, "Reach out and grasp an object" (index 4), underlined+bold yellow highlight. Boxed explanation printed below options. Twin p21 identical text, unanswered.' },

{ n: 3, pr: 3, p: 24,
  key: 2,
  stem: 'Joanna is an active toddler. She is just being potty trained and has had several days where she has remained dry. She enjoys pulling her clothes off to use the potty but cannot dress herself again. She enjoys playing by pretending to make her mother a cup of tea but does not play well with her older siblings, as she has not yet learned how to take turns. She is very bossy and demands things by saying "give me" or "me drink". She can build a tower of six blocks and enjoys running and climbing on furniture. What developmental age is Joanna?',
  opts: ['12 months', '18 months', '24 months', '2.5 years', '3 years'],
  expl: 'Pretend play, potty training, and building a six-block tower are typical for a 2-year-old. Difficulty taking turns is normal at this age.',
  note: 'Index-flagged options-differ resolved as nothing: both p24 and twin p23 print all 5 options A-E; the explanation box on p24 sits over option D visually but D text is intact. Highlighted option C, "24 months" (index 2), underlined+bold yellow highlight.' },

{ n: 4, pr: 4, p: 26,
  key: 3,
  stem: 'Rosette can build a three-cube tower and can point to her nose. At what age would one expect that child to achieve the milestones described in this scenario (median age)?',
  opts: ['6 weeks', '6 months', '8 months', '18 months', '12 months'],
  expl: 'Pointing to body parts and building a 3-block tower are milestones commonly reached at 18 months.',
  note: 'Index-flagged options-differ resolved as nothing: both p26 and twin p25 print all 5 options A-E; explanation box sits beside option E, not over it. Highlighted option D, "18 months" (index 3), underlined+bold yellow highlight.' },

{ n: 5, pr: 5, p: 28,
  key: 4,
  stem: 'Peace has just taken her first steps! At what age would one expect that child to achieve the milestones described in this scenario (median age)?',
  opts: ['6 weeks', '6 months', '8 months', '18 months', '12 months'],
  expl: 'Most children take their first independent steps around 12 months, though the range can vary slightly.',
  note: 'SHARED MENU with n4 (identical ladder "6 weeks/6 months/8 months/18 months/12 months" in the same order) -- recorded as a pairing, not folded. Discriminating token here: "just taken her first steps" -> 12 months (index 4, key E); n4\'s token was "three-cube tower and point to nose" -> 18 months. Highlighted option E, "12 months", underlined+bold yellow highlight. Twin p27 identical text, unanswered.' },

{ n: 6, pr: 6, p: 30,
  key: 4,
  stem: 'Anthony has a friend at nursery, and they enjoy playing with toy cars together. At what age would one expect that child to achieve the milestones described in this scenario (median age)?',
  opts: ['6 months', '12 months', '18 months', '24 months', '36 months'],
  expl: 'Playing interactively with peers (parallel or cooperative play) typically emerges by 3 years of age.',
  note: 'New age-ladder menu (6/12/18/24/36 months), distinct from n4/n5\'s ladder. Discriminating token: "friend at nursery... enjoy playing with toy cars together" (cooperative play with peers) -> 36 months (index 4, key E), underlined+bold yellow highlight. Twin p29 identical text, unanswered.' },

{ n: 7, pr: 7, p: 32,
  key: 1,
  stem: 'Herbert can transfer objects from one hand to the other while sitting without support and with a straight back. At what age would one expect that child to achieve the milestones described in this scenario (median age)?',
  opts: ['6 months', '8 months', '12 months', '18 months', '24 months'],
  expl: "Children transfer objects around 7 months of age. A rounded back requires control of T1 to T12, but a straight back requires T12 and L1 so develops later. A child will often 'sit' at 6 months but sit and be stable and with a straight back at 8 months",
  note: 'Highlighted option B, "8 months" (index 1), underlined+bold yellow highlight. Boxed explanation printed. Spinal levels "T1 to T12" and "T12 and L1" and age "7 months" read clearly at native 800x450, no crop needed. Twin p31 identical text, unanswered.' },

{ n: 8, pr: 8, p: 34,
  key: 3,
  stem: 'Grace enjoys drawing. She has just learned to copy drawing a square and can build steps using blocks after being shown. At what age would one expect that child to achieve the milestones described in this scenario (median age)?',
  opts: ['1 year', '2 years', '3 years', '4 years', '5 years'],
  expl: 'Copying a square and building steps are fine motor skills expected around 4 years of age.',
  note: 'Highlighted option D, "4 years" (index 3), underlined+bold yellow highlight. Boxed explanation printed. Twin p33 identical text, unanswered.' },

{ n: 9, pr: 9, p: 36,
  key: 2,
  stem: 'Rita’s father is thrilled that she has just said her first word—says "dada" to her father only. At what age would one expect that child to achieve the milestones described in this scenario (median age)?',
  opts: ['6 months', '8 months', '10 months', '12 months', '24 months'],
  expl: 'Many children will make double-syllable sounds which are not specific to an object or person. In this case, the word ‘dada’ is specific for her father and so indicates 10 months of age',
  note: 'Highlighted option C, "10 months" (index 2), underlined+bold yellow highlight. Boxed explanation printed. Stem uses an em dash and straight double quotes around "dada"; explanation box uses curly single quotes around ‘dada’ -- both reproduced exactly as printed. Twin p35 identical text, unanswered.' },

{ n: 10, pr: 10, p: 38,
  key: 3,
  stem: "Rinah can follow her mother's two-step commands, such as \"Go to the cupboard and fetch your red shoes\". At what age would one expect that child to achieve the milestones described in this scenario (median age)?",
  opts: ['6 months', '12 months', '2 years', '3 years', '4 years'],
  expl: 'Following two-step commands typically develops by 3 years of age, showing increased language comprehension.',
  note: 'Index-flagged options-differ resolved as nothing: both p38 and twin p37 print all 5 options A-E; explanation box sits beside options C/D but does not obscure either. Highlighted option D, "3 years" (index 3), underlined+bold yellow highlight.' },

{ n: 11, pr: 11, p: 40,
  key: 0,
  stem: "Blessing's mother is so pleased; her baby has just learned to smile when she smiles at her! At what age would one expect that child to achieve the milestones described in this scenario (median age)?",
  opts: ['6 weeks', '12 weeks', '6 months', '12 months', '18 months'],
  expl: 'Social smiling in response to a caregiver’s smile usually appears around 6 weeks of age.',
  note: 'Highlighted option A, "6 weeks" (index 0), underlined+bold yellow highlight. Boxed explanation printed. Stem uses a straight apostrophe in "Blessing\'s"; explanation box uses a curly apostrophe in "caregiver’s" -- both reproduced exactly as printed. Twin p39 identical text, unanswered.' },

{ n: 12, pr: 12, p: 42,
  key: 4,
  stem: 'Ivan can tie his shoelaces all by himself. At what age would one expect that child to achieve the milestones described in this scenario (median age)?',
  opts: ['1 year', '2 years', '3 years', '4 years', '5 years'],
  expl: 'Tying shoelaces requires advanced fine motor coordination and typically develops around 5 years old.',
  note: 'SHARED MENU with n8 (identical ladder "1 year/2 years/3 years/4 years/5 years") -- recorded as a pairing, not folded. Discriminating token here: "tie his shoelaces all by himself" -> 5 years (index 4, key E); n8\'s token was "copy drawing a square and build steps using blocks" -> 4 years. Highlighted option E, underlined+bold yellow highlight. Twin p41 identical text, unanswered.' },

{ n: 13, pr: 13, p: 44,
  key: 1,
  stem: 'Lizzie has just started crawling. At what age would one expect that child to achieve the milestones described in this scenario (median age)?',
  opts: ['6 months', '8 months', '10 months', '12 months', '24 months'],
  expl: '',
  note: 'SHARED MENU with n9 (identical ladder "6 months/8 months/10 months/12 months/24 months") -- recorded as a pairing, not folded. Discriminating token here: "just started crawling" -> 8 months (index 1, key B); n9\'s token was "says her first word \'dada\' specific to her father" -> 10 months. Highlighted option B, underlined+bold yellow highlight. No explanation box printed on p44 -- checked the whole page. Twin p43 identical text, unanswered.' },

{ n: 14, pr: 14, p: 46,
  key: 3,
  stem: 'At which of these ages is the following action (first measles/mumps/rubella (MMR) immunization) usually first taken in the child health surveillance and promotion program in the United Kingdom?',
  opts: ['3 months', '4 months', '8 months', '12 months', '18 months'],
  expl: 'In the UK, the first dose of MMR vaccine is given at 12 months as part of routine immunization.',
  note: 'Index-flagged options-differ resolved as nothing: both p46 and twin p45 print all 5 options A-E; the explanation box sits below the option block and does not obscure any option. Highlighted option D, "12 months" (index 3), underlined+bold yellow highlight. STOP -- last entry in this half per task prompt (range ends at p46).' },

/* Peds ENDPOINT PART 2 — Section 1 "Normal Development", PART B (second half of the section).
   Source: Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf (never modified/moved).
   Range owned by this half: answered pages 48,50,52,54,56,58,60,62,64,66,68,70,72,74 (n:15..28).
   Half A owns pp.19-46 (n:1..14, assumed — not verified by this agent, per brief).
   Images used: <SCRATCH>\ep2-index\native\pNNNN.jpeg (800x450, the true ceiling) as primary
   read; unanswered twin (answered page - 1) read as a free second pass on every entry unless
   noted otherwise. 300 dpi crops named per-entry in <SCRATCH>\ep2-stage\ when the native was
   not certain on a numeral/unit/dose/exponent.
   OCR NOT OPENED — content\peds\qb-pages\ocr\ep2\ was not consulted, per brief §4.
   This is a HALF: bare {...} entries separated by one blank line, no array wrapper, no commas.
   Validate with: node tools/bank-harness/check-part-ep.js <this file>

   Page-by-page walk (printed number pr == n throughout this half, PDF page p, key as printed letter):
   p.48 pr15 key B  Guthrie test timing (UK screening programme)
   p.50 pr16 key A  SIDS-prevention-advice timing
   p.52 pr17 key A  hearing-screen (OAE/ABR) timing
   p.54 pr18 key b  joining two words in speech (4 options — legitimate, not a defect)
   p.56 pr19 key B  12-mo boy, left-hand preference -> fine motor delay (vignette)
   p.58 pr20 key D  3-yo boy, poor eye contact/repetitive play -> play & social delay (vignette)
   p.60 pr21 key c  six meaningful words age (4 options; this is the "thin p.59" page — confirmed
                    a genuinely short/simple slide, not a defect)
   p.62 pr22 key a  sits w/ minimal support + rolls, no grasp -> age estimate (4 options)
   p.64 pr23 key c  age range covered by "development" (4 options)
   p.66 pr24 key d  8-mo-old, most concerning finding = left-hand preference (4 options)
   p.68 pr25 key d  20-mo girl, hemiparetic pattern -> CT/MRI brain (4 options, vignette)
   p.70 pr26 key d  6-week-old, NOT typical = grasping objects (4 options)
   p.72 pr27 key c  upper age limit for good head control = 4 months (4 options)
   p.74 pr28 key c  latest age for independent walking = 18 months (4 options)
   No printed number repeated or skipped in this half; pr==n throughout (n:15..28, 14 entries).
   No figures anywhere in this half — every answered page was read whole, text-only slide.
   No overflow explanation box on its own page found in this half (alternation held throughout;
   checked every unanswered/answered pair p.47-75).
   Two 5-option flags (pp.49/50, pp.51/52) and the 4-option page (p.53/54) were all checked against
   BOTH resolutions/twins and read as printed — no discrepancy reproduced; the app-side flag
   appears to have been an OCR artifact of the index build, not a real print difference.
   BOUNDARY PROOF: p.75 (rendered, read) is a closing devotional slide, Arabic dua text only
   ("Allahumma anfa'ni bima 'allamtani..." — "O Allah, benefit me with what You taught me..."),
   not a question. p.76 (rendered, read) opens with the red banner "Developmental problems" —
   section 2's title. This confirms section 1 ends at p.75 and section 2 begins at p.76. */

{ n:15, pr:15, p:48, key:1,
  stem:'At which of these ages is the following action (biochemical screening test [Guthrie test]) usually first taken in the child health surveillance and promotion program in the United Kingdom?',
  opts:['Newborn','5–6 days','12 days','8 weeks','3 months'],
  expl:'The Guthrie test (heel prick) for metabolic screening is done at 5–6 days old.',
  note:'p.48 answered, twin p.47 identical stem/opts, no figure. Highlighted option B "5–6 days" (index 1). Full page read whole, nothing cropped needed — text large and clear at native 800x450.' },

{ n:16, pr:16, p:50, key:0,
  stem:'At which of these ages is the following action (advice on reducing the risk of sudden infant death syndrome by "back to sleep", avoiding overheating, and avoiding parental smoking) usually first taken in the child health surveillance and promotion program in the United Kingdom?',
  opts:['Newborn','5–6 days','12 days','8 weeks','3 months'],
  expl:'Advice on SIDS prevention is provided immediately after birth, starting from the newborn period.',
  note:'p.50 answered, twin p.49 identical stem/opts (both print all 5 options, both fully legible — the index flag "options-differ pp.49/50" did not reproduce, likely an OCR artifact). Highlighted option A "Newborn" (index 0). No figure.' },

{ n:17, pr:17, p:52, key:0,
  stem:'At which of these ages is the following action (hearing test using otoacoustic emission or auditory brainstem response audiometry) usually first taken in the child health surveillance and promotion program in the United Kingdom?',
  opts:['Newborn','5–6 days','12 days','8 weeks','3 months'],
  expl:'Hearing screening using otoacoustic emissions or ABR is performed in the newborn period, often before hospital discharge.',
  note:'p.52 answered, twin p.51 identical stem/opts, both print all 5 options (flag "options-differ pp.51/52" did not reproduce here either). Highlighted option A "Newborn" (index 0). No figure.' },

{ n:18, pr:18, p:54, key:1,
  stem:'At what age should a child be able to join two words together in speech?',
  opts:['18 months','2 years','2.5 years','3 years'],
  expl:'By age 2, most children can combine two words to form simple phrases like "want milk." This is a key milestone in early language development.',
  note:'p.54 answered, twin p.53 identical, both genuinely print only 4 options (lettered a-d) — this is the legitimate 4-option case the brief flagged. Highlighted option b "2 years" (index 1). No figure.' },

{ n:19, pr:19, p:56, key:1,
  stem:'At a routine health visitor consultation, a 12-month-old boy is noticed to be cruising around furniture, responding to his name and saying "mama" and "papa". He is holding a crayon in his left hand, and his father informs the health visitor that he only uses his left hand at home. What is the most likely finding here?',
  opts:['Gross motor delay','Fine motor delay','Speech and language delay','Play and social delay','Global delay'],
  expl:'This 12-month-old boy shows normal gross motor, speech, and social development but displays consistent left-hand preference, which is atypical for his age and may suggest subtle right-hand weakness or fine motor delay. While no other delays are evident, early hand dominance warrants monitoring to rule out underlying issues like hemiparesis.',
  note:'p.56 answered, twin p.55 identical stem/opts, no figure. Highlighted option B "Fine motor delay" (index 1).' },

{ n:20, pr:20, p:58, key:3,
  stem:'A 3-year-old boy is referred to a community paediatrician with concerns regarding development. At assessment, he is able to walk up and down stairs holding the railing and jumps with both feet. The doctor observes poor eye contact and limited speech. The child is also repeatedly opening and closing the drawers at the desk. What is the most likely finding here?',
  opts:['Gross motor delay','Fine motor delay','Speech and language delay','Play and social delay','Global delay'],
  expl:'Poor eye contact, repetitive behaviors, and limited speech are red flags for autism spectrum disorder. These signs point to a delay in social interaction and play development rather than motor delays.',
  note:'p.58 answered, twin p.57 identical stem/opts, no figure. Highlighted option D "Play and social delay" (index 3).' },

{ n:21, pr:21, p:60, key:2,
  stem:'By what age should a child be able to say six words with meaning?',
  opts:['12 months','15 months','18 months','24 months'],
  expl:'At 18 months, a child should be able to use at least six meaningful words. Delayed speech development may require assessment for hearing or language issues.',
  note:'p.60 answered, twin p.59 identical, both genuinely short/4-option — this is the "thin p.59" page the brief flagged, confirmed as a legitimately short slide, not a defect. Highlighted option c "18 months" (index 2). No figure.' },

{ n:22, pr:22, p:62, key:0,
  stem:'What is the estimated age of a baby who can sit with minimal support and roll over, but does not grasp objects?',
  opts:['4 months','6 months','8 months','10 months'],
  expl:'At around 4 months, babies can usually roll over and may start sitting with minimal support. However, grasping objects is not typically well developed at this age.',
  note:'p.62 answered, twin p.61 identical, both 4-option, no figure. Highlighted option a "4 months" (index 0).' },

{ n:23, pr:23, p:64, key:2,
  stem:'Development in children refers to changes occurring over which age range?',
  opts:['Birth to 1 year','Birth to 3 years','Birth to 5 years','Birth to 10 years'],
  expl:'Development spans multiple domains (motor, language, social, etc.) and occurs rapidly from birth to around 5 years. This is the most critical period for observing developmental milestones.',
  note:'p.64 answered, twin p.63 identical, both 4-option, no figure. Highlighted option c "Birth to 5 years" (index 2).' },

{ n:24, pr:24, p:66, key:3,
  stem:'Which of the following developmental findings in an 8-month-old is most concerning?',
  opts:['Does not wave bye-bye','Inability to crawl','Inability to use sounds discriminately for parents','Left-hand preference'],
  expl:'Hand preference before 18 months may indicate underlying neurological issues, such as hemiparesis. Most babies at this age use both hands interchangeably.',
  note:'p.66 answered, twin p.65 identical, both 4-option, no figure. Highlighted option d "Left-hand preference" (index 3). This overlaps thematically with n:19 (left-hand preference at 12 months = fine motor delay) — recorded, not folded.' },

{ n:25, pr:25, p:68, key:3,
  stem:'A 20-month-old girl is not yet walking and drags her right leg when crawling. She has increased tone and reflexes in the right limbs. What is the most appropriate investigation?',
  opts:['Chromosome karyotype','Congenital infection screen','Creatine kinase','CT or MRI scan of the brain'],
  expl:'Asymmetric motor function with hypertonia suggests a central cause like cerebral palsy. Neuroimaging (CT or MRI) is necessary to assess brain structure and diagnose possible perinatal injury.',
  note:'p.68 answered, twin p.67 identical, both 4-option, no figure. Highlighted option d "CT or MRI scan of the brain" (index 3).' },

{ n:26, pr:26, p:70, key:3,
  stem:'Which of the following is not typically seen in a 6-week-old baby?',
  opts:['Smiling','Fixing and following with eyes','Vocalizing','Grasping objects'],
  expl:'At 6 weeks, babies begin smiling, vocalizing, and visually tracking. Grasping objects intentionally develops later, typically around 3–4 months.',
  note:'p.70 answered, twin p.69 identical, both 4-option, no figure. Highlighted option d "Grasping objects" (index 3).' },

{ n:27, pr:27, p:72, key:2,
  stem:'What is the upper age limit for achieving good head control in infants?',
  opts:['2 months','3 months','4 months','6 months'],
  expl:'Most babies develop good head control by 4 months of age. Persistent head lag beyond this point may indicate motor delay.',
  note:'p.72 answered, twin p.71 identical, both 4-option, no figure. Highlighted option c "4 months" (index 2).' },

{ n:28, pr:28, p:74, key:2,
  stem:'What is the latest age by which a child is expected to walk independently?',
  opts:['12 months','15 months','18 months','24 months'],
  expl:'Independent walking usually begins between 12–15 months. Failure to walk by 18 months warrants further developmental evaluation.',
  note:'p.74 answered, twin p.73 identical, both 4-option, no figure. Highlighted option c "18 months" (index 2). This is the last entry in this half (n:28).' }

];
