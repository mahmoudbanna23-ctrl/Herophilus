/* Peds ENDPOINT PART 2 — Section 7 "Kidney & Urinary Tract Disorders", PART C (staging half).
 * Source: Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf (READ-ONLY, never modified).
 * This agent's range: n:29..n:42, PDF pages 876,878,880,882,884,886,888,890,892,894,896,898,900,902
 * (14 answered pages, per the task prompt's index.json measurement: section 7 spans pp.793-929,
 * 55 answered pages = the even numbers 820..928, no interruption/notes block observed yet in this
 * range). n is SECTION-GLOBAL and continues from part B (not verified on disk — part-A/part-B files
 * did not exist at the time this part was started; see header note below).
 *
 * Renders: pdftoppm -png -r 150 (and -r 300 crops on demand) to the session scratchpad, NOT
 * committed anywhere. OCR at content\peds\qb-pages\ocr\ep2\ was NOT opened for transcription -
 * search index only, per the brief.
 *
 * This is a STAGING HALF: bare `{ ... }` object literals separated by one blank line, NO array
 * wrapper, NO commas between entries. `node --check` on this file WILL fail meaninglessly - use
 * tools/bank-harness/check-part-ep.js instead.
 *
 * ⚠️ DISK NOTE: the pre-rendered <SCRATCH>\ep2-index\native\ and \hires\ image caches described in
 * the brief (section 2, "images are already extracted") do NOT exist anywhere on this machine -
 * searched every claude scratch session dir, none contain ep2-index. Rendered fresh via pdftoppm
 * into this session's own scratchpad instead (ep2-stage\). Reported to parent.
 *
 * ⚠️ DISK NOTE 2: part-A and part-B files for this section (endpoint-p2-s07-renal.part-A.js /
 * .part-B.js) do not exist on disk yet either, so the "read the last entry of the preceding part"
 * check in the brief could not be performed. Proceeding with the assigned n:29 start per the task
 * prompt, since it is internally consistent (n:29 = p.876 = 820 + 28*2, matching a straight
 * odd-unanswered/even-answered alternation from n:1=p.820) and p.876 itself prints "29." as its
 * question number, confirming the assignment. Flagged to parent regardless.
 *
 * Header measurements, extended as staging proceeds:
 * - p.876 (n:29): printed "29.", key highlighted = option a "Renal stones". Confirms alternation
 *   n:29 -> p.876 and pr==n at the start of this range.
 * - Straight even=answered/odd=unanswered-twin alternation and pr==n held with NO break across
 *   the whole n:29..n:42 range (p.876..p.902). No overflow boxes (box:<page>), no figures, no
 *   shared-menu pairs found in this range.
 * ⚠️ BOUNDARY FINDING at p.903 (one page past this part's range, rendered per the brief's
 * boundary-proof rule): p.903 is the unanswered twin for the NEXT question, and it prints "42."
 * again -- a DIFFERENT stem ("Harriet, a 12-year-old girl... UTI/perineal contamination"
 * question) reusing the same printed number "42" as THIS part's own n:42/pr:42 ("Fady... HUS"
 * question, p.902). This is a printed duplicate-number collision in the book itself, not a
 * render or transcription artefact (both p.902 and p.903 show "42." clearly at 150dpi). Left
 * for the next part (owns p.904, the answered printing of the Harriet/UTI question) to stage and
 * flag its own pr accordingly -- this part's own numbering (n:29..42, pr:29..42) is unaffected
 * and internally consistent throughout.
 */

{ n:29, pr:29, p:876, key:0,
  stem:'Glomerular causes of hematuria include all of the following except:',
  opts:['Renal stones','IgA nephropathy','Post-streptococcal glomerulonephritis','Alport syndrome'],
  expl:'enal stones cause hematuria but are not a glomerular cause. Glomerular causes include IgA nephropathy, PSGN, and Alport syndrome.',
  note:'Read at 150dpi and confirmed at 300dpi (p-0876.png / hi-0876.png in scratch): the explanation box genuinely prints "enal stones..." with no left padding before the box border -- the initial "R" of "Renal" is missing on the page itself, not a render clip (same at both resolutions, text sits flush against the box edge). Staged verbatim as printed. Twin (unanswered) p.875 checked, identical stem/options. Key highlighted: option a "Renal stones", bold+underlined+yellow.' }

{ n:30, pr:30, p:878, key:3,
  stem:'Iman is a 2-year-old girl. She presents to the Emergency Department with a 2-day history of fever and vomiting, limping, and "smelly" urine. She has no significant medical history and is not on any medication. On examination she has a temperature of 39°C and has a heart rate of 126 beats/min. She has generalized tenderness over her abdomen. What is the best way to collect a urine sample from her?',
  opts:['Bag sample','Catheter sample','Pad/cotton wool balls in nappy','Clean catch','Suprapubic aspirate'],
  expl:'This involves waiting with a sterile bowl to catch the urine. It is the least invasive and has less risk of contamination. The child is well enough to wait before starting treatment and you want to be sure that you are actually treating a urinary tract infection. The smell of urine is an unreliable sign of genuine infection.',
  note:'Twin p.877 checked, identical stem/options. Key highlighted: option d "Clean catch", bold+underlined+yellow. Temperature/heart rate figures read clearly at 150dpi, no crop needed.' }

{ n:31, pr:31, p:880, key:2,
  stem:'11-month-old presenting to Emergency department with rapidly rising fever and vomiting and ill. Urine analysis shows leukocyte esterase positive, 25 WBCs/HPF, moderate bacteria. What is the best NEXT step?',
  opts:['Administer IV broad spectrum antibiotics','Perform CT abdomen and pelvis','Obtain culture then consider starting antibiotics','Obtain renal ultrasound'],
  expl:'The 11-month-old is acutely ill with fever, vomiting, and positive urine findings → start IV antibiotics immediately after sending culture to prevent sepsis.',
  note:'Twin p.879 checked, identical stem/options. Key highlighted: option c "Obtain culture then consider starting antibiotics", bold+underlined+yellow. Explanation box prints a right-arrow glyph (→), kept verbatim in expl rather than substituted with ASCII.' }

{ n:32, pr:32, p:882, key:0,
  stem:'Regarding post-streptococcal glomerulonephritis (PSGN), all are true except:',
  opts:['Increased C3','Hematuria is common','Occurs after a streptococcal throat infection','Usually self-limiting'],
  expl:'In PSGN, C3 is low due to complement consumption. The condition is usually self-limiting, and hematuria is common',
  note:'Twin p.881 checked, identical stem/options. Key highlighted: option a "Increased C3", bold+underlined+yellow. Explanation box prints no closing period after "hematuria is common" -- transcribed verbatim.' }

{ n:33, pr:33, p:884, key:0,
  stem:'The most common causative organism of urinary tract infection (UTI) is:',
  opts:['E. coli','Staphylococcus aureus','Klebsiella','Enterococcus'],
  expl:'E. coli causes about 80–90% of pediatric UTIs. Other organisms like Klebsiella and Enterococcus are less common.',
  note:'Twin p.883 checked, identical stem/options. Key highlighted: option a "E. coli", bold+underlined+yellow. "80-90%" printed with an en dash, kept verbatim.' }

{ n:34, pr:34, p:886, key:2,
  stem:'A 5-year-old boy presents with marked periorbital edema and pitting edema of the lower limbs for 1 week. Two days before admission, edema extended to the abdominal wall and scrotum. History and clinical examination were otherwise unremarkable. What is the most important complication of this condition?',
  opts:['Hypertensive encephalopathy','Heart failure','Spontaneous bacterial peritonitis','Malnutrition'],
  expl:'Nephrotic syndrome patients are at high risk of infections due to urinary loss of immunoglobulins, especially SBP.',
  note:'Twin p.885 checked, identical stem/options. Key highlighted: option c "Spontaneous bacterial peritonitis", bold+underlined+yellow.' }

{ n:35, pr:35, p:888, key:0,
  stem:'George is a 7-year-old boy who presents to his family doctor with cloudy urine. He has no other symptoms, and his examination is normal. You obtain the following result from the microscopy and culture: white blood cells 50-100/mm3; red blood cells, many seen; organisms, none seen; red cell casts seen; culture, negative at 48 hours. What is the most likely diagnosis?',
  opts:['Glomerulonephritis','Urinary tract infection','Nephrotic syndrome','Kidney stones'],
  expl:'Red cell casts and hematuria with sterile culture indicate glomerular disease rather than infection.',
  note:'Twin p.887 checked, identical stem/options. Key highlighted: option a "Glomerulonephritis", bold+underlined+yellow. "mm3" checked at 300dpi on both p.887 and p.888 (hi-0887.png) -- printed completely flat, no superscript glyph and no caret; transcribed as printed, per the brief\'s rule that a flat exponent/unit is never "restored". "50-100" also uses a plain hyphen, not an en dash, on this page (contrast n:33\'s en dash) -- kept as printed.' }

{ n:36, pr:36, p:890, key:3,
  stem:'Which of the following is not a common pathogen in UTI?',
  opts:['E.coli','Klebsiella','S.Faecalis','Staph aureus'],
  expl:'UTI is usually caused by E. coli, Klebsiella, or Enterococcus; Staph aureus is rare.',
  note:'Twin p.889 checked, identical stem/options. Key highlighted: option d "Staph aureus", bold+underlined+yellow. Options print "E.coli" and "S.Faecalis" with no space after the period (contrast expl box, which prints "E. coli" with a space) -- both kept exactly as printed.' }

{ n:37, pr:37, p:892, key:4,
  stem:'Acute glomerulonephritis is characterized by the following EXCEPT:',
  opts:['Urine volume: < 400 ml/m2/day','Hypertension','Hematuria and RBCs casts','+serum urea and creatinine','Urinary protein > 1 g/m2/24 h'],
  expl:'Acute GN usually has mild to moderate proteinuria, not nephrotic-range (>1 g/m²/24h). Other features (oliguria, HTN, hematuria, raised urea/creatinine) are typical.',
  note:'Twin p.891 checked, identical stem/options, five options (a-e), a genuine 5-option question, not a reader artefact. Key highlighted: option e "Urinary protein > 1 g/m2/24 h", bold+underlined+yellow. ⚠️ Checked both pages at 300dpi (hi-0892.png): the stem/options print "m2" completely flat on this page, but the explanation box on the SAME page prints a real superscript "m²" -- a within-page mismatch, not a render artefact. Transcribed each field exactly as its own printing shows: opts keep "m2" flat, expl keeps the printed "m²". Per the brief\'s rule, neither is "restored" to match the other.' }

{ n:38, pr:38, p:894, key:2,
  stem:'The classical clinical presentation of minimal change nephrotic syndrome DOES NOT include:',
  opts:['A child aged between 2-6 years','Normal blood pressure','Abnormal kidney function tests','Serum cholesterol and triglycerides','Response to corticosteroid therapy'],
  expl:'Minimal change nephrotic syndrome usually has normal renal function, normal BP, and responds well to steroids.',
  note:'Twin p.893 checked, identical stem/options, five options (a-e). Key highlighted: option c "Abnormal kidney function tests", bold+underlined+yellow.' }

{ n:39, pr:39, p:896, key:1,
  stem:'Which of the following statements is true about most nephrotic syndromes?',
  opts:['Hematuria is a common feature','They rarely cause chronic renal failure','Low C3 level is typically seen','Always present with hypertension'],
  expl:'Most nephrotic syndromes in children, especially minimal change disease, resolve without causing chronic kidney disease.',
  note:'Twin p.895 checked, identical stem/options. Key highlighted: option b "They rarely cause chronic renal failure", bold+underlined+yellow.' }

{ n:40, pr:40, p:898, key:0,
  stem:'A 17-year-old girl had mild fever, increased frequency of urination, and abdominal pain a few days ago. She is now afebrile and asymptomatic. What is the most likely diagnosis?',
  opts:['Cystitis','Pyelonephritis','Glomerulonephritis','Nephrolithiasis'],
  expl:'The girl had fever and urinary symptoms that resolved, leaving her asymptomatic → consistent with a self-limited lower UTI.',
  note:'Twin p.897 checked, identical stem/options. Key highlighted: option a "Cystitis", bold+underlined+yellow. Explanation box prints a right-arrow glyph (→), kept verbatim as in n:31.' }

{ n:41, pr:41, p:900, key:0,
  stem:'The most common complication of minimal change nephrotic syndrome is',
  opts:['Repeated infections','Acute renal failure','Bleeding tendency','Cerebral strokes','Hypertension'],
  expl:'Children with minimal change nephrotic syndrome are prone to infections due to urinary immunoglobulin loss.',
  note:'Twin p.899 checked, identical stem/options, five options (a-e). Key highlighted: option a "Repeated infections", bold+underlined+yellow.' }

{ n:42, pr:42, p:902, key:1,
  stem:'Fady, a 5-year-old boy. He has had 3 days of diarrhea. The loose stool had some blood in it. He appears to be very pale and has not passed urine for 12 hours. He has no other medical problems and is not normally on any medication. On examination you note that he has pale conjunctivae. His blood pressure is 120/70 mmHg. You decide to take tests and get the following results: some blood hemoglobin: 7.5 g/dl; white blood cells: 14,200/ml; platelet count: 50000/ml; creatinine: 1.5 mg/dl (normal: < 0.8 mg/dl) PT & PTT are normal. What is the most likely diagnosis?',
  opts:['Acute lymphoblastic leukemia','Hemolytic-uremic syndrome','Henoch-Schonlein purpura','Immune thrombocytopenic purpura','Post streptococcal glomerulonephritis'],
  expl:'Child with bloody diarrhea, anemia, thrombocytopenia, and acute renal failure has the classic triad of HUS.',
  note:'Twin p.901 checked, identical stem/options, five options (a-e). Key highlighted: option b "Hemolytic-uremic syndrome", bold+underlined+yellow. Numerals (7.5 g/dl, 14,200/ml, 50000/ml, 1.5 mg/dl, <0.8 mg/dl, 120/70 mmHg) all read clearly at 150dpi on both pages, no crop needed. Last entry in this agent\'s assigned range (n:29..n:42).' }
