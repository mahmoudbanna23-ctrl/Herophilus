/* ===========================================================================
   ENDPOINT - Pediatrics endpoint part2.pdf - RECENTLY MODIFIED QUESTIONS
   Verbatim staging record. PDF pages 1922-1940; PDF page = printed page, offset zero.
   Merged from endpoint-p2-s16-recent-mod.part-A.js + endpoint-p2-s16-recent-mod.part-B.js by merge-parts-ep2.js.
   
   Every question is printed TWICE: an unanswered page, then the ANSWERED page with the key
   highlighted in yellow and (usually) a bordered explanation box. Only answered pages are
   staged. `n` is the true sequential index, `pr` what the page prints, `p` the PDF page,
   `key` a ZERO-BASED INDEX into `opts` (never a letter), matching the app field `answer`,
   `expl` the printed box verbatim or "".
   =========================================================================== */
var PEDEP2_S16_STAGED = [

/* peds endpoint part 2, section 16 "Recently modified Questions", pp.1923-1940 (18 questions total,
   this book's LAST section pair before section 17), PART A (n1-n9).
   Source: Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf. Never modified/rendered here --
   page images read from the pre-extracted cache:
   C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\
   0ffb5f86-a1df-4f33-a8c4-fc32a73946ba\scratchpad\ep2-index\native\pNNNN.jpeg (800x450 ceiling).
   hires\pNNNN.png opened only where native left something ambiguous (named per entry below).
   OCR index (content\peds\qb-pages\ocr\ep2\) NOT opened -- this is a staging pass, OCR is a
   search index only, never a source.

   ⚠️ THIS SECTION PRINTS EACH QUESTION ONCE, not twice like sections 1-15. p is the question's only
   page, step is 1, no twin to check, no +2 arithmetic. Page formula per endpoint-p2-s16-s17-page-map.md:
   p = 1922 + n, i.e. n1=1923 n2=1924 n3=1925 n4=1926 n5=1927 n6=1928 n7=1929 n8=1930 n9=1931.

   pr (printed number) is a back-reference to the question's home section elsewhere in the book, NOT
   a position here -- n is the only sequential index. key is a 0-based index into opts (A=0, B=1,
   C=2, D=3, E=4...). p is the page staged from (there is only one page).

   Question-number walk (pr vs n), page by page -- filled in as staged:
     n1 pr=14 p=1923
     n2 pr=15 p=1924
     n3 pr=36 p=1925
     n4 pr=49 p=1926
     n5 pr=50 p=1927
     n6 pr=62 p=1928
     n7 pr=42 p=1929
     n8 pr=35 p=1930
     n9 pr=59 p=1931

   Part A ends at n9/p.1931 per the task's explicit range (pp.1923-1931 inclusive). This is a
   mid-section split, not the section's end -- no boundary page was rendered past p.1931; part B
   continues at n10 from p.1932.
*/

{ n:1, pr:14, p:1923, key:1,
  fig:'fig:1923',
  stem:'A Pakistani couple are referred for genetic counselling. They have lost two children who both died in the first 2 years of life. They have one healthy daughter who is 3 years old. The faulty gene has been identified, and other members of their family have been tested (see opposite figure). What is the most likely pattern of inheritance?',
  opts:['Autosomal dominant','Autosomal recessive','Imprinting from uniparental disomy','Trinucleotide repeat expansion mutation','X-linked recessive'],
  figAlt:'A multi-generation family pedigree diagram, circles and squares linked by marriage and descent lines.',
  expl:'When both parents are carriers and multiple children are affected, an autosomal recessive pattern is likely.',
  note:'Read directly off p.1923 native JPEG, fully legible, no crop needed. Key B (index 1) highlighted yellow bold/underline. A pedigree figure IS printed on this page, top right (three generations, circles/squares, no shading pattern legible at this size) -- so the stem\'s "see opposite figure" refers to this same page, confirmed by eye per the page-map\'s question. fig set to fig:1923 per brief convention for a same-page figure.' },

{ n:2, pr:15, p:1924, key:2,
  stem:'The same couple (as in the previous question) would like more children. What is the risk of them having another affected baby?',
  opts:['Around 1 in 200','1 in 2','1 in 4','2 in 3','3 in 4'],
  expl:'Each child has a 25% chance of inheriting both faulty alleles from carrier parents.',
  note:'Read directly off p.1924 native JPEG, fully legible, no crop needed. Key C (index 2) highlighted yellow bold/underline. No figure. This question is a direct continuation of n1\'s couple/pedigree stem (pr14/pr15 are consecutive in their home section too).' },

{ n:3, pr:36, p:1925, key:2,
  fig:'fig:1925',
  stem:'Which of the following presentation suggest the diagnosis of Rheumatic Fever?',
  opts:['Arthralgia with fever','Carditis with arthralgia and fever','Carditis with arthritis and fever','Chronic recurrent tonsillitis with high ESPE','Arthralgia with prolonged PR interval','Recurrent tonsillitis and recurrent joint pains.'],
  figAlt:'A side reference infographic titled "Rheumatic Fever: Criteria" (branded "knowmedge"), listing a two-column Major/Minor criteria table under a mnemonic heading, with a diagnosis flowchart box below it; not referenced by the question stem.',
  expl:'The combination of carditis and arthritis (both major criteria) with fever (a minor criterion) is strongly suggestive of acute rheumatic fever.',
  note:'Read on native then hires PNG (dense small table text, confirmed via hires) p.1925. 6 options printed (a-f), transcribed verbatim including option d\'s "high ESPE" as printed -- not a number/unit/dose/exponent so left unflagged and unedited per the no-comment-on-typos rule. Key c (index 2) highlighted yellow bold/underline. A reference infographic (Jones criteria mnemonic + diagnosis flowchart) is printed at top right; it is a general teaching graphic, not something the stem points to ("see figure" is absent here) -- figAlt kept deliberately generic (does not list which items are major vs minor) so it cannot give away the key.' },

{ n:4, pr:49, p:1926, key:1,
  stem:'Non-glomerular cause of hematuria includes all of the following EXCEPT:',
  opts:['Infection','Henoch-Schönlein purpura (HSP)','Stones','Sickle cell disease'],
  expl:'1. Non-glomerular causes\n•Infections: Bacterial, viral, tuberculosis, schistosomiasis\n•Trauma: To the genitalia, urinary tract, or kidneys\n•Structural/other causes: Stones, tumors, sickle cell disease\n•Systemic causes: Bleeding disorders, renal vein thrombosis, hypercalciuria\n2. Glomerular causes\n•Postinfectious glomerulonephritis\n•Henoch–Schönlein purpura (HSP) and other vasculitides\n•IgA nephropathy\n•Genetic disorders of the basement membrane: Alport syndrome, thin basement membrane disease',
  note:'Read directly off p.1926 native JPEG, fully legible, no crop needed. Key B (index 1) highlighted yellow bold/underline. No figure. Box is a two-part numbered/bulleted list, transcribed verbatim with \\n at each line break, bullet char •; option b uses a hyphen ("Henoch-Schönlein") while the box uses an en dash ("Henoch–Schönlein") -- both reproduced exactly as printed, not normalised to match.' },

{ n:5, pr:50, p:1927, key:2,
  stem:'An 11-month-old presents with rapidly rising fever, vomiting, and appears ill. Urinalysis shows leukocyte esterase positive, 25 WBCs/HPF, and moderate bacteria. What is the next best step?',
  opts:['Administer IV broad-spectrum antibiotics','Perform CT abdomen and pelvis','Obtain culture then consider starting antibiotics','Obtain renal ultrasound'],
  expl:'The 11-month-old is acutely ill with fever, vomiting, and positive urine findings → start IV antibiotics immediately after sending culture to prevent sepsis.',
  note:'Read directly off p.1927 native JPEG, fully legible, no crop needed. Key C (index 2) highlighted yellow bold/underline. No figure. Box contains a printed arrow character "→", reproduced verbatim.' },

{ n:6, pr:62, p:1928, key:4,
  stem:'A 2-year-old girl is brought from home with progressive cyanosis. On examination, she is deeply cyanosed (oxygen saturation 78% in room air) and has mild subcostal retractions. She is alert and not in acute distress. What is the most likely diagnosis?',
  opts:['Diaphragmatic hernia','Large ventricular septal defect (VSD)','Persistent fetal circulation','Transposition of the great arteries (TGA)','Tricuspid atresia'],
  expl:'Progressive cyanosis in a stable, alert 2-year-old without respiratory distress suggests a cyanotic congenital heart disease with decreased pulmonary blood flow. This presentation is characteristic of tricuspid atresia, where poor mixing of blood causes gradual worsening of cyanosis. Other options like diaphragmatic hernia or TGA cause severe neonatal distress, not stable late cyanosis.',
  note:'Read directly off p.1928 native JPEG, fully legible, no crop needed. Key E (index 4) highlighted yellow bold/underline. No figure. The opening words "A 2-year-old" are printed in RED text (rest of stem black) -- likely marking the edited portion for this "recently modified" reprint; recorded here, not interpreted or acted on.' },

{ n:7, pr:42, p:1929, key:4,
  stem:'A baby has bilaterally undescended testes. Genitalia appear to be male. Which is the most important initial investigation?',
  opts:['Karyotype with FISH for sex-determining region of the Y chromosome','Abdominal ultrasound scan','Abdominal CT scan','17-Hydroxyprogesterone levels','Urea and electrolytes (U&Es)'],
  expl:'In a newborn with bilateral undescended testes, the most urgent concern is salt-wasting congenital adrenal hyperplasia (CAH), which can cause life-threatening electrolyte imbalances. Therefore, urea and electrolytes (U&Es) should be checked immediately. Further tests like karyotype, ultrasound, and 17-hydroxyprogesterone are done after stabilization to confirm the diagnosis and assess anatomy.',
  note:'Read directly off p.1929 native JPEG, fully legible, no crop needed. Key E (index 4) highlighted yellow bold/underline. No figure.' },

{ n:8, pr:35, p:1930, key:2,
  stem:'Brain tumors are the most common solid tumor of childhood, and presentation may be insidious, leading to late diagnosis. Which of the following statements regarding brain tumors in childhood is true?',
  opts:['They are usually supratentorial','Signs of raised intracranial pressure are rare','Astrocytomas carry poor prognosis','Medulloblastomas are the most common type','Metastasis is common'],
  expl:'Most childhood brain tumours are infratentorial, and diagnosis is often delayed due to insidious onset and signs of raised intracranial pressure. Astrocytomas are the most common type and generally have a poor prognosis, while metastasis is rare in CNS tumours.',
  note:'Read directly off p.1930 native JPEG, fully legible, no crop needed. Key C (index 2) highlighted yellow bold/underline. No figure. Not disputing, but recording: the box states astrocytomas are also "the most common type", which is what option D (not highlighted) claims -- key stays C per the printed highlight, box text left exactly as printed.' },

{ n:9, pr:59, p:1931, key:3,
  stem:'A 7-year-old boy has abdominal pain and a rash that started several days ago. On examination, you notice a palpable purpuric rash over his calves and buttocks, with swelling of both ankles. Abdominal examination is unremarkable. What is the most likely laboratory finding?',
  opts:['Decreased platelet count','Hypochromic microcytic anemia','Low C3 complement level','Normal clotting parameters','Prolonged prothrombin time'],
  expl:'Henoch-Schönlein purpura presents with palpable purpura and normal coagulation. Platelets, PT, and aPTT are usually normal.',
  note:'Read directly off p.1931 native JPEG, fully legible, no crop needed. Key D (index 3) highlighted yellow bold/underline. No figure. This is part A\'s last entry (n9/p.1931), the task\'s explicit stopping page.' },

/* peds endpoint part 2, section 16 "Recently modified Questions", pp.1922-1940, PART B (n10-n18).
   Source: Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf. Never modified/rendered here --
   page images read from the pre-extracted cache:
   C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\
   0ffb5f86-a1df-4f33-a8c4-fc32a73946ba\scratchpad\ep2-index\native\pNNNN.jpeg (800x450 ceiling).
   OCR index (content\peds\qb-pages\ocr\ep2\) NOT opened -- this is a staging pass, OCR is a
   search index only, never a source.

   ⚠️ SECTION 16 IS UNLIKE EVERY OTHER SECTION: each question prints ONCE (no unanswered twin,
   no +2 step, no overflow-box detection test carried over). p = 1922 + n. This PART B covers
   n10-n18, task-prompt-assigned pages p1932-p1940 verbatim (n starts at 10 per task prompt, not
   re-derived from part-A's on-disk state -- part-A owns n1-n9, pp.1923-1931, and is not read here).

   pr here is a BACK-REFERENCE to the question's number in its home section elsewhere in the book,
   not a position in this section -- task prompt's expected hint recorded, verified against the page:
     n10=1932(hint 71)  n11=1933(hint 3)  n12=1934(hint 41)  n13=1935(hint 16)  n14=1936(hint 36)
     n15=1937(hint 70)  n16=1938(hint 25)  n17=1939(hint 55)  n18=1940(hint 21)

   key is a 0-based index into opts (A=0, B=1, C=2, D=3, E=4...). p is the question's only page.

   Question-number walk (pr vs hint), page by page -- filled in as staged:
     n10 p=1932 pr=71 (matches hint)
     n11 p=1933 pr=3 (matches hint)
     n12 p=1934 pr=41 (matches hint)
     n13 p=1935 pr=16 (matches hint) -- no box printed; checked p1936 opens cleanly with its own
                          question 36, no overflow prose from n13 landed there
     n14 p=1936 pr=36 (matches hint, this is the second of the two pages printing "36" -- the map
                          says 36 appears twice, p.1925(part-A) and p.1936(here))
     n15 p=1937 pr=70 (matches hint) -- no box printed
     n16 p=1938 pr=25 (matches hint) -- this is a REPRINT of s15-mfe4 part-B n25/p.1808 (same stem,
                          same options, same "16 months" vs box's "15 months" numeral discrepancy).
                          Recorded per brief section 7, no fold made -- cross-file, another chat's file.
     n17 p=1939 pr=55 (matches hint) -- no box printed
     n18 p=1940 pr=21 (matches hint) -- this is a REPRINT of s15-mfe4 part-B n21/p.1800, stem and
                          options and expl verbatim identical as far as this staging pass can tell.
                          Recorded per brief section 7, no fold made -- cross-file, another chat's file.
                          LAST ENTRY OF PART B.
*/

{ n:10, pr:71, p:1932, key:1,
  stem:'Which of the following statements is true about Down syndrome?',
  opts:['Most babies with Down syndrome are born to older mothers','Males are frequently infertile','The incidence is 1 in 1400','Epicanthic folds are pathognomonic','The majority have severe intellectual impairment'],
  expl:'Most males with Down syndrome are infertile due to abnormal spermatogenesis, while some females may remain fertile',
  note:'Read directly off p.1932 native JPEG, fully legible, no crop needed. Page opens cleanly with its own question number (71) -- no overflow prose from p.1931 above it. Key B (index 1) highlighted yellow, bold and underlined. pr=71 matches task-prompt hint. No figure.' },

{ n:11, pr:3, p:1933, key:3,
  stem:'A 4-year-old girl has been admitted with an acute febrile illness. A diagnosis of a lower respiratory tract infection has been made, and intravenous antibiotics started. The next morning, an ejection systolic murmur is noted. Heart sounds are normal, no pulmonary edema is present, and she appears well. What is the single most appropriate management plan?',
  opts:['Proceed to urgently arrange a CXR','Discuss with the local paediatric cardiology center for advice','Once medically fit for discharge, arrange an out-patient ECHO','Explain that this is an innocent murmur and inform the GP to re-evaluate after recovery','Change the present antibiotic'],
  expl:'In a clinically well child, an isolated ejection systolic murmur is usually innocent and does not require urgent investigations.',
  note:'Read directly off p.1933 native JPEG, fully legible, no crop needed. Key D (index 3) highlighted yellow, bold and underlined. pr=3 matches task-prompt hint. No figure.' },

{ n:12, pr:41, p:1934, key:2,
  stem:'What age does autism spectrum disorder usually become evident?',
  opts:['0-12 months','12-24 months','2-4 years','4-8 years','Above 8 years'],
  expl:'Autism spectrum disorder usually presents at this age because this is when language and social skills rapidly develop',
  note:'Read directly off p.1934 native JPEG, fully legible, no crop needed. Key c (index 2) highlighted yellow, bold and underlined. Options printed lowercase a-e on this page (transcribed as printed, capitalization in opts array follows the source text not the label). pr=41 matches task-prompt hint. No figure.' },

{ n:13, pr:16, p:1935, key:1,
  stem:'Which one of the following symptoms of liver disease is not present in all cases of acute hepatitis?',
  opts:['Jaundice','Splenomegaly','Anorexia','Fatigue'],
  expl:'',
  note:'Read directly off p.1935 native JPEG, fully legible, no crop needed. Only 4 options printed (no fifth). Key b (index 1) highlighted yellow, bold and underlined. No explanation box printed on this page. Checked p.1936 (next page): opens cleanly with its own question (36), no overflow prose belonging to this question. pr=16 matches task-prompt hint. No figure.' },

{ n:14, pr:36, p:1936, key:3,
  stem:'A 5-year-old child admitted with an acute exacerbation of asthma is ready for discharge from the pediatric ward. He has never required admission to HDU. He has been using his salbutamol inhaler on most days over the past 3 months and frequently wakes with nocturnal cough. His current regular medication consists of beclometasone 100 micrograms twice daily and salbutamol as required. His inhaler technique is good, and there are no concerns about compliance. What, if any, changes would you make to his current medication?',
  opts:['Continue current treatment','Add long-acting beta-2 agonist (e.g., salmeterol)','Add leukotriene receptor antagonist (Montelukast)','Increase steroid inhaler to 400 micrograms per day','Increase steroid inhaler to 200 micrograms per day'],
  expl:'Step-up therapy with a moderate increase in inhaled steroids is appropriate before considering additional agents.',
  note:'Read directly off p.1936 native JPEG, fully legible, no crop needed. Page opens with its own question number (36), no overflow prose from n13/p.1935 above it. Key d (index 3) highlighted yellow, bold and underlined. Doses transcribed exactly as printed (100 micrograms twice daily; 400 and 200 micrograms per day in options). pr=36 matches task-prompt hint -- this is the second of the two pages in this section printing "36" (the other, p.1925, is in part-A). No figure.' },

{ n:15, pr:70, p:1937, key:3,
  stem:'Which clinical intervention is of evidence-based benefit in the treatment of acute bronchiolitis?',
  opts:['Nebulized hypertonic saline','Antibiotics','Corticosteroids','C-PAP','Bronchodilators'],
  expl:'',
  note:'Read directly off p.1937 native JPEG, fully legible, no crop needed. Key D (index 3) highlighted yellow, bold and underlined. No explanation box printed on this page. pr=70 matches task-prompt hint. No figure.' },

{ n:16, pr:25, p:1938, key:2,
  stem:'Developmental milestones vary between children; however, there are normal ranges for each domain. Which of the following is not a developmental concern?',
  opts:['Not visually fixing at 5 weeks','Not sitting unsupported at 7 months','Not using single words at 16 months','Not walking at 17 months','Not copying a line at 24 months'],
  expl:'Not using single words at 15 months. Single words, e.g. mama and dada, should be heard by about 12months of age.',
  note:'Read directly off p.1938 native JPEG, fully legible, no crop needed. Key C (index 2) highlighted yellow, bold and underlined. NUMBER FLAG: option C prints "16 months" but the box says "15 months" -- the same printed discrepancy already staged at s15-mfe4 part-B n25/p.1808; key stays as printed (option C). ⚠️ This page is an apparent REPRINT of that earlier question -- stem, options and the discrepancy all match verbatim as far as this staging pass can tell. Recorded per brief section 7 (shared/duplicate content is recorded, never folded during staging; nothing edited in the other file). pr=25 matches task-prompt hint. No figure.' },

{ n:17, pr:55, p:1939, key:0,
  stem:'The following statement is WRONG regarding VSD:',
  opts:['The commonest cause of systolic murmur on left parasternal','The most common congenital heart disease','The shunt is left to right but it is potentially cyanotic','The commonest site of shunt is the membranous part of the septum','Not all cases need surgical closure'],
  expl:'',
  note:'Read directly off p.1939 native JPEG, fully legible, no crop needed. Key a (index 0) highlighted yellow, bold and underlined. No explanation box printed on this page. pr=55 matches task-prompt hint. No figure.' },

{ n:18, pr:21, p:1940, key:2,
  stem:'A 6-month-old female infant with RSV-positive bronchiolitis is requiring 1 liter of nasal prong humidified oxygen and nasogastric feeding. Over the last 8 hours, her work of breathing has increased and she is showing signs of recession. Her oxygen requirement has also increased to 2 liters, and she appears tired. A blood gas is performed, which shows a pH of 7.30 and pCO2 of 7.8 kPa. What is the most appropriate next step in management?',
  opts:['Salbutamol nebulizer','Intravenous antibiotics','CPAP','Intubate and ventilate','Steroids'],
  expl:'This infant may be entering the peak stage of her bronchiolitis where typically things can get worse before they get better. In view of her respiratory status and metabolic acidosis, CPAP is the next most effective step.',
  note:'Read directly off p.1940 native JPEG, fully legible, no crop needed. Key C (index 2) highlighted yellow, bold and underlined. ⚠️ This page is an apparent REPRINT of s15-mfe4 part-B n21/p.1800 -- stem, options and box read verbatim identical as far as this staging pass can tell (minor label difference "CPAP" here vs "CPAP" there, none). Recorded per brief section 7 (shared/duplicate content is recorded, never folded during staging; nothing edited in the other file). pr=21 matches task-prompt hint. No figure.' }

];
