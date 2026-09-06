/* ===========================================================================
   ENDPOINT - Pediatrics endpoint part2.pdf - RECENTLY ADDED QUESTIONS
   Verbatim staging record. PDF pages 1941-1949; PDF page = printed page, offset zero.
   Merged from endpoint-p2-s17-recent-add.part-A.js by merge-parts-ep2.js.
   
   Every question is printed TWICE: an unanswered page, then the ANSWERED page with the key
   highlighted in yellow and (usually) a bordered explanation box. Only answered pages are
   staged. `n` is the true sequential index, `pr` what the page prints, `p` the PDF page,
   `key` a ZERO-BASED INDEX into `opts` (never a letter), matching the app field `answer`,
   `expl` the printed box verbatim or "".
   =========================================================================== */
var PEDEP2_S17_STAGED = [

/* peds endpoint part 2, section 17 "Recently Added Questions", pp.1941-1949 (n1-n8), the LAST
   section of the book. Source: Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf. Never
   modified/rendered here -- page images read from the pre-extracted cache:
   C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\
   0ffb5f86-a1df-4f33-a8c4-fc32a73946ba\scratchpad\ep2-index\native\pNNNN.jpeg (800x450 ceiling).
   OCR index (content\peds\qb-pages\ocr\ep2\) NOT opened -- this is a staging pass, OCR is a
   search index only, never a source.

   UNLIKE sections 1-15, this section prints each question ONCE -- no unanswered twin, step 1,
   p = 1941 + n. No overflow-box page ever seen adjacent (checked by reading pages in strict
   order, each next page opened before the previous entry was closed out). Section 16
   (pp.1922-1940, "Recently modified Questions") is a separate section staged by other agents in
   parallel -- not touched here.

   These pages print NO question number anywhere on them (only the PDF page number, bottom-right,
   in red) -- pr is '' for every entry, confirming the page-map's prediction. If any page had
   printed a number this would be flagged prominently; none did.

   key is a 0-based index into opts (A=0, B=1, C=2, D=3, E=4...). p is the question's only page.

   Page-by-page walk:
     n1=1942  n2=1943  n3=1944  n4=1945  n5=1946  n6=1947  n7=1948  n8=1949
*/

{ n:1, pr:'', p:1942, key:3,
  stem:'Ritha, aged 2 months, is admitted to hospital with a 2-day history of mild coryza and tachypnoea without significant intercostal recession. She has been feeding poorly for the last 3 weeks. Which clinical feature most supports her having congenital heart disease rather than respiratory disease?',
  opts:['Sibling with congenital heart disease','Poor feeding','Generalized wheeze on auscultation','Hepatomegaly','Ejection systolic murmur, grade II/VI, at the left sternal edge'],
  expl:'',
  note:'Read directly off p.1942 native JPEG, fully legible, no crop needed. Key D "Hepatomegaly" (index 3) highlighted yellow, bold, underlined, italic. No explanation box printed. No figure. Between the stem and the options the page prints a separate instruction line "Select one answer only." -- kept out of stem per task instructions, recorded here: it sits on its own line directly after the stem and before option A. No question number printed anywhere on the page (only the PDF page number 1942, bottom-right, red).' },

{ n:2, pr:'', p:1943, key:1,
  stem:"A previously well 3-year-old boy choked on some peanuts. His mother took him to the emergency department where a chest X-ray was done, which was normal. She returned as he developed a severe cough and wheeze over the next 5 days.\nAs peanuts are radiolucent, an inspiratory (normal view) and expiratory film need to be requested, as a foreign body typically acts as a 'ball-valve', causing under expansion during inspiration but overexpansion during expiration.\nAn expiratory chest X-ray revealed a hyperlucent right lung and mediastinal shift.\nWhich of the following is the next step in management of this child?",
  opts:['Laryngoscopy','Bronchoscopy','Valsalva maneuver','CT scan'],
  expl:'',
  note:'Read directly off p.1943 native JPEG, confirmed on hires -- ONLY FOUR options printed (A-D), no fifth, checked at both resolutions to be sure nothing was cut off; the page box ends cleanly after D. Key B "Bronchoscopy" (index 1) highlighted yellow, bold, underlined, italic. No explanation box printed. No figure. No "Select one answer only" line on this page (unlike n1). No question number printed.' },

{ n:3, pr:'', p:1944, key:0,
  stem:"A child doesn't sit still in class and cannot wait for his turn. Which of the following questions would help in making the diagnosis?",
  opts:['Ask if he completes tasks','Ask about delayed milestones','Ask about appetite changes','Ask about recent infections'],
  expl:'',
  note:'Read directly off p.1944 native JPEG, fully legible, no crop needed. Options printed with lowercase letter prefixes (a./b./c./d.), stripped for opts per convention -- kept verbatim otherwise. Key a "Ask if he completes tasks" (index 0) highlighted yellow, bold, underlined, italic. No explanation box printed. No figure. No question number printed. No "Select one answer only" instruction line on this page.' },

{ n:4, pr:'', p:1945, key:2,
  stem:'A child had acute otitis media one week ago and was treated with antibiotics, antipyretics, and analgesics for 10 days. Now he presents with soreness in and behind the ear, along with fever. What is the most likely diagnosis?',
  opts:['Acute otitis media','Chronic otitis media','Mastoiditis','Sinusitis'],
  expl:'',
  note:'Read directly off p.1945 native JPEG, fully legible, no crop needed. Stem is printed with a leading space before "A child" on the page, transcribed verbatim. Options printed with lowercase letter prefixes (a./b./c./d.), stripped for opts per convention. Key c "Mastoiditis" (index 2) highlighted yellow, bold, underlined, italic. No explanation box printed. No figure. No question number printed. No "Select one answer only" line on this page.' },

{ n:5, pr:'', p:1946, key:1,
  stem:"Rob, a 9-month-old boy, presents with fever and difficulty breathing for the last 3 days. His breathing is now interfering with his feeding. He has not had any previous illnesses and his growth is normal. Examination findings:\n• Subcostal and intercostal recession Hyperinflated chest\n• Respiratory rate: 70 breaths/min\n• Scattered wheezes throughout both lung fields, more prominent in the lower zones • Fine end-expiratory crackles in the lower zones\n• Heart rate: 120 beats/min • Heart sounds normal, no murmurs\nWhat is the most likely diagnosis?",
  opts:['Acute exacerbation of asthma','Bronchiolitis','Chronic asthma','Cystic fibrosis'],
  expl:'',
  note:'Read directly off p.1946 native JPEG, fully legible, no crop needed. Findings printed as a bulleted list with small red bullet icons; two findings run together on one bullet with no separator ("Subcostal and intercostal recession Hyperinflated chest") and two other pairs of bullets share one printed line -- all transcribed exactly as printed, verbatim, no punctuation added. "Rob" and "Examination findings:" printed bold; "What is the most likely diagnosis?" printed bold red -- styling only, not encoded. Key B "Bronchiolitis" (index 1) highlighted yellow, bold, underlined, italic. No explanation box printed. No figure. No question number printed. No "Select one answer only" line on this page.' },

{ n:6, pr:'', p:1947, key:3,
  stem:'Hatem, a 3-year-old boy, presents with fever and difficulty breathing, getting worse for the last 3 days.\nExamination findings:\n•Respiratory rate: 40 breaths/min\n•Heart rate: 120 beats/min\n•Heart sounds normal, no murmurs\n•Dullness to percussion and bronchial breathing over the right lower zone\n•Inspiratory crepitations over the right lower zone\nWhat is the most likely diagnosis?',
  opts:['Pleural effusion (left sided)','Pleural effusion (right sided)','Pneumonia (left sided)','Pneumonia (right sided)'],
  expl:'',
  note:'Read directly off p.1947 native JPEG, fully legible, no crop needed. "Hatem" and "Examination findings:" printed bold (findings header in red); "Dullness to percussion..." and "Inspiratory crepitations..." bullets and "What is the most likely diagnosis?" printed bold -- styling only, not encoded. Key D "Pneumonia (right sided)" (index 3) highlighted yellow, bold, underlined, italic. No explanation box printed. No figure. No question number printed. No "Select one answer only" line on this page.' },

{ n:7, pr:'', p:1948, key:0,
  stem:'Darren, a 3-year-old boy, was eating peanuts 2 days ago when his younger brother pushed him over. He coughed up the peanuts and seemed fine, but today he has been coughing and becomes breathless as soon as he runs about. He is afebrile. Examination findings:\n•Respiratory rate: 36 breaths/min\n•Apex beat displaced to the right\n•Reduced air entry over the left lower and middle zones\n•Percussion normal throughout\nWhat is the most likely diagnosis?',
  opts:['Inhaled foreign body (left side)','Inhaled foreign body (right side)','Pleural effusion (left sided)','Pleural effusion (right sided)'],
  expl:'',
  note:'Read directly off p.1948 native JPEG, fully legible, no crop needed. "Darren" bold; "Examination findings:" bold red; "Reduced air entry..." and "Percussion normal..." bullets and "What is the most likely diagnosis?" printed bold -- styling only, not encoded. Key A "Inhaled foreign body (left side)" (index 0) highlighted yellow, bold, underlined, italic. No explanation box printed. No figure. No question number printed. No "Select one answer only" line on this page.' },

{ n:8, pr:'', p:1949, key:1,
  stem:'Tony, a 4-year-old boy, is admitted with pneumonia. His chest X-ray shows consolidation at the right base. Despite antibiotic therapy, he remains febrile and unwell.\nExamination findings:\n•Respiratory rate: 50 breaths/min\n•Stony dull to percussion at the right lower zone\n•Reduced breath sounds at the right lower zone\n•Scattered inspiratory crepitations above the level of dullness\nWhat is the most likely diagnosis?',
  opts:['Pleural effusion (left sided)','Pleural effusion (right sided)','Pneumonia (left sided)','Pneumonia (right sided)'],
  expl:'',
  note:'Read directly off p.1949 native JPEG, fully legible, no crop needed. This is the LAST page of section 17 and of the book\'s question content. "Tony" bold; "Examination findings:" bold red; the four findings bullets and "What is the most likely diagnosis?" printed bold -- styling only, not encoded. Key B "Pleural effusion (right sided)" (index 1) highlighted yellow, bold, underlined, italic. No explanation box printed. No figure. No question number printed. No "Select one answer only" line on this page.' }

];
