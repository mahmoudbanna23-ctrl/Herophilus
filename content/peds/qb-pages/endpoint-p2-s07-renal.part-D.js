/* endpoint-p2-s07-renal.part-D.js
   Peds ENDPOINT PART 2, section 7 "Kidney & Urinary Tract Disorders", part D.
   Staged from Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf (READ-ONLY, never modified).
   Range owned by this part: answered pages 904, 906, 908 ... 928 (13 pages), n:43 through n:55.
   n is SECTION-GLOBAL and continues from part C. At the start of this pass, part C did NOT
   exist on disk (checked by directory listing: only part-A.js and part-B.js present, part-A
   ends n:14, part-B ends n:28). The task prompt explicitly assigns this part n:43-55, so that
   numbering is used as given; part C's own range (n:29-42, pp.876-902) is not staged or
   verified here. FLAGGED FOR MERGE: confirm part C actually ends at n:42 before merging.
   Images rendered fresh with pdftoppm -jpeg -r150 into this agent's own scratchpad (no shared
   ep2-index cache was found for this session); pages 903-931 rendered (twins + boundary check).
   OCR (content\peds\qb-pages\ocr\ep2\) was NOT opened during this pass -- search index only.

   Question-number walk (printed number "pr", page by page):
     n:43 pr:42 p:904 | n:44 pr:43 p:906 | n:45 pr:44 p:908 | n:46 pr:45 p:910 |
     n:47 pr:46 p:912 | n:48 pr:47 p:914 | n:49 pr:48 p:916 | n:50 pr:49 p:918 |
     n:51 pr:50 p:920 | n:52 pr:51 p:922 | n:53 pr:52 p:924 | n:54 pr:53 p:926 |
     n:55 pr:54 p:928
   Printed number runs exactly one behind n throughout this part (pr = n-1 for
   every one of the 13 entries) -- a steady offset, not drift; recorded per entry, not corrected.

   Boxless page: n:49 (p.916) prints a highlighted key but NO explanation box. Per brief Sec.3,
   opened next page (p.917) before moving on: p.917 is the plain UNANSWERED printing of the
   NEXT question (pr:49), not an overflow box, not a teaching slide, not a duplicate reprint.
   So n:49 is a genuine boxless question and expl was left ''.

   Twin divergence: n:50 (p.918) -- the unanswered twin p.917 prints the stem with a doubled
   word ("Non-glomerular cause cause of hematuria..."), the answered page p.918 prints it once
   ("Non-glomerular cause of hematuria..."). Staged from the answered page (single "cause") per
   brief; the doubled-word twin is recorded as a finding in that entry's note, not corrected.

   No figures anywhere in this part's 13 pages -- measured by looking at every one of the 13
   answered pages (904-928) and both members of each twin pair (903-927 odd) whole; none carries
   an image, diagram or photograph. Zero is a measured zero, not an absence of looking.

   No same-question duplicates and no shared option menus observed across n:43-55 (each of the
   13 stems and option ladders is distinct).

   CLOSING BOUNDARY CHECK (section 7 spans pp.793-929 per prompt; this part's last page is 928):
   rendered and read pp.929, 930, 931.
     - p.929: an Arabic supplication / prayer graphic (two short duas on a grey background,
       decorative, no stem, no options, no question content of any kind). Not a question, not an
       overflow explanation box -- a closing slide, matching the "duplicate reprint" trap shape
       described in the brief for a different section (a non-question page that could be mistaken
       for content). NOT STAGED.
     - p.930: section banner "Neurological disorders" (red bold title on the cream card),
       confirming section 8 opens here.
     - p.931: teaching slide "Headaches" (classification, red-flag bullet list) -- ordinary
       section-8 theory content, not a question.
   CONCLUSION: p.928 (n:55, pr:54) really is section 7's last question. No question sits at
   p.929 or beyond; the section boundary given in the prompt (pp.793-929, section 7 ends before
   the p.930 banner) holds. Nothing outside n:43-55 was staged.
*/

{ n:43, pr:42, p:904, key:3,
  stem:'Harriet, a 12-year-old girl, presents to the Emergency Department. She has abdominal pain and pain on micturition. A mid-stream urine sample is obtained and is positive for leucocytes but negative for nitrites. She was started on oral antibiotics and discharged. 48 hours later you receive the following result from the microscopy and culture: white blood cells >200/mm3; red blood cells, many seen; organisms, none seen; red cell casts, none seen; culture, >100000 coliforms. What is your diagnosis?',
  opts:['Normal result','Perineal contamination','Renal stone (calculi)','Urinary tract infection'],
  expl:"This girl had a 'false negative' on her dipstick test. The clinical story is very important for diagnosing urinary tract infection in this age group. The culture 48 hours later confirms the presence of coliforms.",
  note:'p.904 answered, highlighted key D boxed. Twin p.903 checked, stem/opts byte-identical. No figure. Printed "42." does not match n:43 (expected drift, printed numbering runs its own count -- recorded, not corrected).' }

{ n:44, pr:43, p:906, key:3,
  stem:'Red urine is NOT a feature in:',
  opts:['Nephritis','Henoch Schönlein purpura','Favism','Congestive heart failure','Administration of rifampicin'],
  expl:'Red urine occurs in nephritis, HSP, favism, or drugs (rifampicin), but not in CHF.',
  note:'p.906 answered, highlighted key D boxed, 5 options. Twin p.905 checked, stem/opts byte-identical. No figure. Printed "43." matches n:44.' }

{ n:45, pr:44, p:908, key:0,
  stem:'Which of the following is commonly associated with secondary enuresis?',
  opts:['Emotional upset','Ectopic ureter','Posterior urethral valves','Neurogenic bladder'],
  expl:'Secondary enuresis (child was previously dry) is usually due to psychological stress, unlike primary enuresis which may have anatomical causes.',
  note:'p.908 answered, highlighted key A boxed. Twin p.907 checked, stem/opts byte-identical. No figure. Printed "44." matches n:45. Per chapter-rulings.md ruling 7, enuresis is renal-cakut for the later drafting pass.' }

{ n:46, pr:45, p:910, key:3,
  stem:'Steroid sensitive nephrotic all true except:',
  opts:['Age 1-10 years','Normal blood pressure','Normal renal function','No microscopic hematuria'],
  expl:'Steroid-sensitive nephrotic syndrome can have microscopic hematuria, so this is not always true.',
  note:'p.910 answered, highlighted key D boxed. Twin p.909 checked, stem/opts byte-identical. No figure. Printed "45." matches n:46.' }

{ n:47, pr:46, p:912, key:1,
  stem:'Which of the following is true about most nephrotic syndromes?',
  opts:['Hematuria','Rarely cause chronic renal failure','Low C3 level','Always present with hypertension'],
  expl:'Most childhood nephrotic syndromes, especially minimal change, resolve without progressing to CKD.',
  note:'p.912 answered, highlighted key B boxed. Twin p.911 checked, stem/opts byte-identical. No figure. Printed "46." matches n:47.' }

{ n:48, pr:47, p:914, key:3,
  stem:'A 1-year-old girl has recently been diagnosed and treated for urinary tract infection. Investigation shows that she has a vesicoureteral reflux. Which of the following is the IDEAL antibiotic prophylaxis in this child?',
  opts:['Monthly IM penicillin','Daily oral cephalexin','Daily oral erythromycin','Daily oral co-trimoxazole','Weekly IV gentamicin'],
  expl:'For vesicoureteral reflux in children, low-dose daily oral antibiotics (co-trimoxazole or nitrofurantoin) are used for prophylaxis.',
  note:'p.914 answered, highlighted key D boxed, 5 options. Twin p.913 checked, stem/opts byte-identical. No figure. Printed "47." matches n:48.' }

{ n:49, pr:48, p:916, key:3,
  stem:'Which of the following is not a common pathogen in UTI?',
  opts:['E coli','Klebsiella','Faecalis','Staph aureus'],
  expl:'',
  note:'p.916 answered (key D highlighted), prints NO explanation box. Per brief Sec.3, opened next page (p.917) before moving on: p.917 is the UNANSWERED printing of the next question (pr:49, no highlight) -- not an overflow box, not a teaching slide, not a duplicate. So p.916 is a genuine boxless question, expl left empty. Twin p.915 checked, stem/opts byte-identical. No figure. Printed "48." matches n:49.' }

{ n:50, pr:49, p:918, key:1,
  stem:'Non-glomerular cause of hematuria includes all of the following EXCEPT:',
  opts:['Infection','Henoch-Schönlein purpura (HSP)','Stones','Sickle cell disease'],
  expl:'1. Non-glomerular causes\n•Infections: Bacterial, viral, tuberculosis, schistosomiasis\n•Trauma: To the genitalia, urinary tract, or kidneys\n•Structural/other causes: Stones, tumors, sickle cell disease\n•Systemic causes: Bleeding disorders, renal vein thrombosis, hypercalciuria\n2. Glomerular causes\n•Postinfectious glomerulonephritis\n•Henoch–Schönlein purpura (HSP) and other vasculitides\n•IgA nephropathy\n•Genetic disorders of the basement membrane: Alport syndrome, thin basement membrane disease',
  note:'p.918 answered, highlighted key B boxed, box is a two-part bulleted list (non-glomerular vs glomerular causes), transcribed verbatim with line breaks. TWINS DIFFER: p.917 (unanswered) prints the stem with a doubled word, "Non-glomerular cause cause of hematuria..."; p.918 (answered, staged here) prints it once, "Non-glomerular cause of hematuria...". Staged from the answered page per brief (single "cause"), doubled-word twin recorded here as the finding. Opts byte-identical on both pages. No figure. Printed "49." matches n:50.' }

{ n:51, pr:50, p:920, key:2,
  stem:'An 11-month-old presents with rapidly rising fever, vomiting, and appears ill. Urinalysis shows leukocyte esterase positive, 25 WBCs/HPF, and moderate bacteria. What is the next best step?',
  opts:['Administer IV broad-spectrum antibiotics','Perform CT abdomen and pelvis','Obtain culture then consider starting antibiotics','Obtain renal ultrasound'],
  expl:'The 11-month-old is acutely ill with fever, vomiting, and positive urine findings → start IV antibiotics immediately after sending culture to prevent sepsis.',
  note:'p.920 answered, highlighted key C boxed. Twin p.919 checked, stem/opts byte-identical. Box contains a printed arrow glyph "→", transcribed as printed. No figure. Printed "50." matches n:51.' }

{ n:52, pr:51, p:922, key:0,
  stem:'Sudden onset of edema starting in eyelids, then lower limbs, then ascites is most likely due to:',
  opts:['Renal disease','Hepatic disease','Allergy','Cardiac disease'],
  expl:'Nephrotic syndrome typically begins with periorbital edema that progresses to generalized edema and ascites.',
  note:'p.922 answered, highlighted key A boxed. Twin p.921 checked, stem/opts byte-identical. No figure. Printed "51." matches n:52.' }

{ n:53, pr:52, p:924, key:0,
  stem:'A 3-year-old child develops puffy eyes and lower limb and scrotal edema following an upper respiratory tract infection. What is the most probable diagnosis?',
  opts:['Steroid-sensitive nephrotic syndrome','Acute post-streptococcal glomerulonephritis','Congenital nephrotic syndrome','Cardiac failure'],
  expl:'A 3-year-old with puffy eyes and edema after infection fits classic presentation of minimal change nephrotic syndrome.',
  note:'p.924 answered, highlighted key A boxed. Twin p.923 checked, stem/opts byte-identical. No figure. Printed "52." matches n:53.' }

{ n:54, pr:53, p:926, key:0,
  stem:'What is a major complication of minimal change nephrotic syndrome?',
  opts:['Thrombosis','Hypertensive encephalopathy','Chronic renal failure','Hematuria'],
  expl:'Nephrotic syndrome causes hypercoagulability due to urinary loss of antithrombin III, leading to thrombosis risk.',
  note:'p.926 answered, highlighted key A boxed. Twin p.925 checked, stem/opts byte-identical. No figure. Printed "53." matches n:54.' }

{ n:55, pr:54, p:928, key:0,
  stem:'A 4-month-old girl presents with a urinary tract infection and a positive dipstick test. What is the next step?',
  opts:['Clean catch for urine culture','Suprapubic aspiration','Start antibiotics immediately without culture','Renal ultrasound'],
  expl:'In infants with a positive dipstick suggesting UTI, a urine culture must be obtained to confirm the diagnosis and guide antibiotics. A clean catch specimen is the preferred method in a 4-month-old, while suprapubic aspiration is reserved for cases where clean catch is not possible. Renal ultrasound is done later after diagnosis, not as the first step',
  note:'p.928 answered, highlighted key A boxed. Twin p.927 checked, stem/opts byte-identical. No figure. Printed "54." matches n:55. This is the last entry owned by part D (n:43-55, pp.904-928). Box text transcribed verbatim including the missing terminal period after "first step".' }
