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
  note:'Read directly off p.1932 native JPEG, fully legible, no crop needed. Page opens cleanly with its own question number (71) -- no overflow prose from p.1931 above it. Key B (index 1) highlighted yellow, bold and underlined. pr=71 matches task-prompt hint. No figure.' }

{ n:11, pr:3, p:1933, key:3,
  stem:'A 4-year-old girl has been admitted with an acute febrile illness. A diagnosis of a lower respiratory tract infection has been made, and intravenous antibiotics started. The next morning, an ejection systolic murmur is noted. Heart sounds are normal, no pulmonary edema is present, and she appears well. What is the single most appropriate management plan?',
  opts:['Proceed to urgently arrange a CXR','Discuss with the local paediatric cardiology center for advice','Once medically fit for discharge, arrange an out-patient ECHO','Explain that this is an innocent murmur and inform the GP to re-evaluate after recovery','Change the present antibiotic'],
  expl:'In a clinically well child, an isolated ejection systolic murmur is usually innocent and does not require urgent investigations.',
  note:'Read directly off p.1933 native JPEG, fully legible, no crop needed. Key D (index 3) highlighted yellow, bold and underlined. pr=3 matches task-prompt hint. No figure.' }

{ n:12, pr:41, p:1934, key:2,
  stem:'What age does autism spectrum disorder usually become evident?',
  opts:['0-12 months','12-24 months','2-4 years','4-8 years','Above 8 years'],
  expl:'Autism spectrum disorder usually presents at this age because this is when language and social skills rapidly develop',
  note:'Read directly off p.1934 native JPEG, fully legible, no crop needed. Key c (index 2) highlighted yellow, bold and underlined. Options printed lowercase a-e on this page (transcribed as printed, capitalization in opts array follows the source text not the label). pr=41 matches task-prompt hint. No figure.' }

{ n:13, pr:16, p:1935, key:1,
  stem:'Which one of the following symptoms of liver disease is not present in all cases of acute hepatitis?',
  opts:['Jaundice','Splenomegaly','Anorexia','Fatigue'],
  expl:'',
  note:'Read directly off p.1935 native JPEG, fully legible, no crop needed. Only 4 options printed (no fifth). Key b (index 1) highlighted yellow, bold and underlined. No explanation box printed on this page. Checked p.1936 (next page): opens cleanly with its own question (36), no overflow prose belonging to this question. pr=16 matches task-prompt hint. No figure.' }

{ n:14, pr:36, p:1936, key:3,
  stem:'A 5-year-old child admitted with an acute exacerbation of asthma is ready for discharge from the pediatric ward. He has never required admission to HDU. He has been using his salbutamol inhaler on most days over the past 3 months and frequently wakes with nocturnal cough. His current regular medication consists of beclometasone 100 micrograms twice daily and salbutamol as required. His inhaler technique is good, and there are no concerns about compliance. What, if any, changes would you make to his current medication?',
  opts:['Continue current treatment','Add long-acting beta-2 agonist (e.g., salmeterol)','Add leukotriene receptor antagonist (Montelukast)','Increase steroid inhaler to 400 micrograms per day','Increase steroid inhaler to 200 micrograms per day'],
  expl:'Step-up therapy with a moderate increase in inhaled steroids is appropriate before considering additional agents.',
  note:'Read directly off p.1936 native JPEG, fully legible, no crop needed. Page opens with its own question number (36), no overflow prose from n13/p.1935 above it. Key d (index 3) highlighted yellow, bold and underlined. Doses transcribed exactly as printed (100 micrograms twice daily; 400 and 200 micrograms per day in options). pr=36 matches task-prompt hint -- this is the second of the two pages in this section printing "36" (the other, p.1925, is in part-A). No figure.' }

{ n:15, pr:70, p:1937, key:3,
  stem:'Which clinical intervention is of evidence-based benefit in the treatment of acute bronchiolitis?',
  opts:['Nebulized hypertonic saline','Antibiotics','Corticosteroids','C-PAP','Bronchodilators'],
  expl:'',
  note:'Read directly off p.1937 native JPEG, fully legible, no crop needed. Key D (index 3) highlighted yellow, bold and underlined. No explanation box printed on this page. pr=70 matches task-prompt hint. No figure.' }

{ n:16, pr:25, p:1938, key:2,
  stem:'Developmental milestones vary between children; however, there are normal ranges for each domain. Which of the following is not a developmental concern?',
  opts:['Not visually fixing at 5 weeks','Not sitting unsupported at 7 months','Not using single words at 16 months','Not walking at 17 months','Not copying a line at 24 months'],
  expl:'Not using single words at 15 months. Single words, e.g. mama and dada, should be heard by about 12months of age.',
  note:'Read directly off p.1938 native JPEG, fully legible, no crop needed. Key C (index 2) highlighted yellow, bold and underlined. NUMBER FLAG: option C prints "16 months" but the box says "15 months" -- the same printed discrepancy already staged at s15-mfe4 part-B n25/p.1808; key stays as printed (option C). ⚠️ This page is an apparent REPRINT of that earlier question -- stem, options and the discrepancy all match verbatim as far as this staging pass can tell. Recorded per brief section 7 (shared/duplicate content is recorded, never folded during staging; nothing edited in the other file). pr=25 matches task-prompt hint. No figure.' }

{ n:17, pr:55, p:1939, key:0,
  stem:'The following statement is WRONG regarding VSD:',
  opts:['The commonest cause of systolic murmur on left parasternal','The most common congenital heart disease','The shunt is left to right but it is potentially cyanotic','The commonest site of shunt is the membranous part of the septum','Not all cases need surgical closure'],
  expl:'',
  note:'Read directly off p.1939 native JPEG, fully legible, no crop needed. Key a (index 0) highlighted yellow, bold and underlined. No explanation box printed on this page. pr=55 matches task-prompt hint. No figure.' }

{ n:18, pr:21, p:1940, key:2,
  stem:'A 6-month-old female infant with RSV-positive bronchiolitis is requiring 1 liter of nasal prong humidified oxygen and nasogastric feeding. Over the last 8 hours, her work of breathing has increased and she is showing signs of recession. Her oxygen requirement has also increased to 2 liters, and she appears tired. A blood gas is performed, which shows a pH of 7.30 and pCO2 of 7.8 kPa. What is the most appropriate next step in management?',
  opts:['Salbutamol nebulizer','Intravenous antibiotics','CPAP','Intubate and ventilate','Steroids'],
  expl:'This infant may be entering the peak stage of her bronchiolitis where typically things can get worse before they get better. In view of her respiratory status and metabolic acidosis, CPAP is the next most effective step.',
  note:'Read directly off p.1940 native JPEG, fully legible, no crop needed. Key C (index 2) highlighted yellow, bold and underlined. ⚠️ This page is an apparent REPRINT of s15-mfe4 part-B n21/p.1800 -- stem, options and box read verbatim identical as far as this staging pass can tell (minor label difference "CPAP" here vs "CPAP" there, none). Recorded per brief section 7 (shared/duplicate content is recorded, never folded during staging; nothing edited in the other file). pr=21 matches task-prompt hint. No figure.' }
