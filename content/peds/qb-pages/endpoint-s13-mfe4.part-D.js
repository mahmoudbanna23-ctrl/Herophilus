/* ENDPOINT part1 -- Model Final Exam 4 -- staging half D, the LAST half (questions n61..n80).
   Source: "Pediatrics endpoint part1.pdf" (Semester 8/Pedo/Questions/), answered pages
   p:1766,1768,1770,1772,1774,1776,1778,1780,1782,1784,1786,1788,1790,1792,1794,1796,1798,1800,
   1802,1804 -- task-supplied list, measured from content/peds/qb-pages/ocr/ep1/index.json on
   2026-09-05 (kind == "answered" within pp.1644-1804; 80 answered sheets, every gap exactly 2).
   That index counts SHEETS, not printed numbers, so the printed question number was read off
   every page and recorded in each entry's note. p.1806 -- one page past the end -- was rendered
   and read as a standing check for a missed final question; what it turned out to be is recorded
   in the closing block below.
   Every question in this exam prints twice (a blank exam sheet, then an answered sheet carrying
   the yellow-highlighted key and usually a bordered explanation box); staging is from the
   ANSWERED sheets ONLY. The blank printings were neither rendered nor read.
   PDF is 1:1, NOT 2-up -- one large-type question per sheet. The red folio at the foot of each
   sheet prints the PDF page number, so a PDF page number IS the printed page.
   key is a ZERO-BASED INDEX into opts (integer), never a letter. key follows the YELLOW
   HIGHLIGHT; where an explanation box disagrees with the highlight, the key stays on the
   highlight and the disagreement is recorded in the note. Contradictions are recorded, never
   corrected, and a defective ladder is staged as printed -- same length, same order.
   Paediatric surgery topics (gastroschisis, atresias, Hirschsprung, intussusception, hernias,
   Wilms, neuroblastoma, urological anomalies) are IN SCOPE for this book and are staged.
   OCR at content/peds/qb-pages/ocr/ep1/p<NNNN>.txt was NOT opened during this staging pass.
   Nothing here comes from OCR text; every character was read off a rendered page image.
   n is the question's position in the SECTION (61..80 here). pr is the PRINTED exam number.
   Where they disagree, n is kept and the disagreement is recorded in that entry's note.
   File format: bare { ... } fragments separated by one blank line -- no array wrapper and no
   commas between entries. `node --check` always fails on this shape and that failure is
   meaningless; validated with tools/bank-harness/check-part-ep.js instead.

   CLOSED 2026-09-05 -- 20/20 entries staged (n61..n80, pp.1766-1804), each appended immediately
   after its page was read and the file re-validated along the way. Final run: 20 entries,
   n 61..80, pp.1766-1804, OK.
   Measured, not assumed: every one of the 20 pages carried a printed exam number, the numbering
   ran 61..80 with NO skip and NO repeat, and it agreed with n on every page -- pr equals n
   throughout, so no disagreement had to be recorded. The red folio matched the PDF page number
   on all 20 sheets.
   OPTION COUNTS ARE NOT UNIFORM in this half: 16 pages printed four options (A-D) and 4 pages
   printed five (A-E) -- n74 p.1792, n77 p.1798, n78 p.1800, n79 p.1802, all four of them
   consecutive answered sheets at the end of the run. The ladder was counted by its letters on
   every page.
   Two pages print NO explanation box and carry expl:'' -- n63 p.1770 and n70 p.1784. Nothing was
   written to fill either. On n71 p.1786 the box is undersized and its last word is printed just
   below the border on the same sheet; no box overflowed onto a later sheet anywhere in this half.
   Two pages set the box to the RIGHT of the ladder rather than below it (n61 p.1766, beside
   options C and D; n69 p.1782, beside option D) and the ladder was read down the left margin
   past it. No page printed a figure.
   Key distribution: index 0 x8, index 1 x7, index 2 x2, index 3 x3.
   Contradictions RECORDED, never corrected, key never moved -- six of them: n62 box qualifies its
   rule as "without severe breathing affection" against a stem describing severe wheeze; n67 box
   calls option C true while itself describing a DISTENDED ampulla against the option's EMPTY one;
   n69 option A gives spontaneous descent by 2 years against the box's "unlikely after 1 year";
   n71 option C reads "Proximal fistula with distal fistula" and never names an atresia; n74 box
   explains only option A and gives no printed reason for excluding D or E; n79 stem asks for the
   most common complication while the box answers for the most common LONG-TERM one.
   Numerals ESCALATED to 600 dpi crops -- eleven crops across nine pages, every one of them either
   a small-print box figure or an all-numeric ladder:
     p.1770 stem + full ladder, "38 weeks", "3 kg", "LHR of 1.5"   (crop1770-1770.png)
     p.1772 box, "within 48 hours"                                 (crop1772-1772.png)
     p.1774 option D, "50%"                                        (crop1774-1774.png)
     p.1776 box, "About 30%", "trisomy 21"                         (crop1776-1776.png)
     p.1782 box, "6-12 months" and "after 1 year"                  (crop1782box-1782.png)
     p.1782 stem, "18-month-old", "2 years of age"                 (crop1782stem-1782.png)
     p.1784 whole ladder, the >=11 / >=17 / >=2 mm option ladder   (crop1784-1784.png)
     p.1790 option B, "in 5%"                                      (crop1790optB-1790.png)
     p.1790 box, "about 50% of cases, not 5%"                      (crop1790box-1790.png)
     p.1794 stem, "at 10 cm from nostril"                          (crop1794-1794.png)
     p.1798 box, "About 85%"                                       (crop1798-1798.png)
   The recurring unit trap was hunted for specifically and did NOT bite here: p.1782 is the only
   page whose two intervals differ in unit (6-12 months vs 1 year) and both were confirmed on the
   crop; p.1784's three options are all in mm.
   ONE PAGE PAST THE END, p.1806, was rendered and read: it is a BLANK, UNANSWERED exam sheet --
   no yellow highlight and no explanation box anywhere on it -- and it restarts the numbering at
   "1", printing a 5-week-old male infant with progressive post-prandial vomiting and a pylorus
   measured at 18 mm x 6 mm, with five management options A-E. So Model Final Exam 4 ends at
   printed question 80 on p.1804 and a new exam begins on the next sheet. No missed final
   question. NOTE: p.1805 was NOT rendered (it is an odd sheet and outside the answered list), so
   the new exam's printed TITLE was not read and is not confirmed here.
*/

{ n: 61, pr: 61, p: 1766,
  key: 0,
  stem: 'Jonathan, aged 6 years, is brought to the Emergency Department after becoming unwell at a family party. He is unable to say more than a single word and he indicates that he is finding it hard to breathe. He is very anxious. He has a raised itchy rash that is spreading from his face down to his chest. He has never had an episode like this before, although his mother explains that he has asthma and he has been prescribed a salbutamol inhaler previously for wheezy episodes. What is the best management of this child?',
  opts: ['Give oxygen and establish airway', 'Give anti-histamines', 'Watchful waiting', 'Give anti-asthmatic'],
  expl: 'Anaphylaxis with inability to breathe and establishing airway. The initial management is giving oxygen.',
  note: 'Four options printed (A-D). Printed number 61, matches n. Red folio 1766, matches the PDF page. Yellow highlight sits on option A, bold and underlined; the box agrees (initial management is giving oxygen). The explanation box is printed to the RIGHT of options C and D, not below the ladder, so the ladder was read down the left margin past it. The only numerals on the page are the age "6 years" and the question number, both large type and unambiguous at 150 dpi; no numeral needed a 600 dpi crop.' }

{ n: 62, pr: 62, p: 1768,
  key: 0,
  stem: 'An 8-year-old girl is brought to hospital following ingestion of a cereal bar containing peanuts. She is noted to have a widespread urticarial rash and swelling of the face and lips. She is finding it difficult to speak and there is widespread wheeze on auscultation. What is the single most important step in her management?',
  opts: ['Intramuscular epinephrine', 'Oral corticosteroids', 'Oxygen therapy', 'Chlorphenamine (anti-histamine)'],
  expl: 'The single most important step in management of anaphylaxis (without severe breathing affection) is IM epinephrine.',
  note: 'Four options printed (A-D). Printed number 62, matches n. Red folio 1768, matches the PDF page. Yellow highlight sits on option A, bold and underlined; the box agrees. Box printed below the ladder, centred. Only numeral is the age "8-year-old" in large type, read at 150 dpi, no crop needed. Recorded, not corrected: the stem describes widespread wheeze and difficulty speaking, yet the box qualifies its rule as "without severe breathing affection" -- the box and the stem sit oddly together; the key stays on the highlight.' }

{ n: 63, pr: 63, p: 1770,
  key: 0,
  stem: 'An infant with a prenatal diagnosis of a diaphragmatic hernia is born at 38 weeks gestation and weighs 3 kg. The child develops respiratory distress within three hours of birth. Which of the following is a poor prognostic indicator for survival?',
  opts: ['Presence of stomach in the chest', 'Left-sided diaphragmatic hernia', 'Lung-to-head ratio (LHR) of 1.5', 'Normal vaginal delivery as the mode of birth'],
  expl: '',
  note: 'Four options printed (A-D). Printed number 63, matches n. Red folio 1770, matches the PDF page. Yellow highlight sits on option A, bold and underlined. NO EXPLANATION BOX IS PRINTED on this sheet -- the area below the ladder is blank -- so expl is empty; nothing was written to fill it. Paediatric surgery, in scope. ESCALATED to a 600 dpi band crop (crop1770-1770.png) covering the stem and the whole ladder, because option C carries a decimal ratio and the stem carries a gestation and a weight: confirmed "38 weeks gestation", "3 kg", "three hours" spelt out, and "Lung-to-head ratio (LHR) of 1.5" -- the 1.5 is a decimal point, not a comma, and the units read correctly at both resolutions.' }

{ n: 64, pr: 64, p: 1772,
  key: 3,
  stem: 'Which of the following is NOT true regarding congenital diaphragmatic hernia (CDH)?',
  opts: ['May be diagnosed antenatally', 'Is usually left-sided', 'May be associated with pulmonary hypoplasia', 'Repair is required within the next 48 hours'],
  expl: 'Surgery is delayed until the infant is hemodynamically stable, rather than performed immediately within 48 hours.',
  note: 'Four options printed (A-D). Printed number 64, matches n. Red folio 1772, matches the PDF page. Yellow highlight sits on option D, bold and underlined; the box agrees. Box printed below the ladder. In the box, "delayed until the infant is hemodynamically stable" is set bold; the bold is not reproduced in expl. Paediatric surgery, in scope. ESCALATED to a 600 dpi crop of the box band (crop1772-1772.png) because the box repeats the option D interval in small print: confirmed "within 48 hours" in the box and "within the next 48 hours" in option D -- same number, same unit.' }

{ n: 65, pr: 65, p: 1774,
  key: 1,
  stem: 'Which of the following is TRUE regarding undescended testes (cryptorchidism)?',
  opts: ['Always approached using an inguinal approach', 'Ectopic testes may be found in the perineum', 'Usually requires a two-stage procedure', 'Are bilateral in 50% of cases'],
  expl: 'Some undescended testes are ectopic and located outside the normal path, like in the perineum or femoral region.',
  note: 'Four options printed (A-D). Printed number 65, matches n. Red folio 1774, matches the PDF page. Yellow highlight sits on option B, bold and underlined; the box agrees (ectopic testes outside the normal path, perineum). Box printed below the ladder. In the box, "ectopic" is set bold; the bold is not reproduced in expl. Paediatric surgery, in scope. ESCALATED to a 600 dpi crop of option D (crop1774-1774.png) because it carries a bare percentage: confirmed "50%", two digits, not 5.0% and not 60%.' }

{ n: 66, pr: 66, p: 1776,
  key: 1,
  stem: 'An infant with duodenal atresia is also likely to have:',
  opts: ['Biliary atresia', "Down's syndrome", 'Imperforate anus', 'Pyloric stenosis'],
  expl: 'About 30% of duodenal atresia cases are associated with trisomy 21 (Down syndrome).',
  note: "Four options printed (A-D). Printed number 66, matches n. Red folio 1776, matches the PDF page. Yellow highlight sits on option B, bold and underlined; the box agrees. Box printed below the ladder. In the box, \"30% of duodenal atresia cases\" is set bold; the bold is not reproduced in expl. Option B prints an apostrophe in Down's syndrome, so that option string is double-quoted. Paediatric surgery, in scope. ESCALATED to a 600 dpi crop of the box band (crop1776-1776.png) because it carries a percentage and a chromosome number in small print: confirmed \"About 30%\" and \"trisomy 21\" -- 30 not 80, 21 not 24." }

{ n: 67, pr: 67, p: 1778,
  key: 0,
  stem: "All of the following statements concerning Hirschsprung's disease in children are true, EXCEPT:",
  opts: ['An absence of ganglion cells in a dilated segment of the colon is the underlying problem', 'Constipation is a classic symptom and almost always begins in the early days of life', 'Rectal examination of affected patients usually reveals an empty rectal ampulla', 'It is more common in males'],
  expl: "In Hirschsprung's disease, the aganglionic segment is narrow and contracted, not dilated. The proximal segment becomes dilated due to obstruction. Other statements are true: constipation begins early, the rectal ampulla may be distended with failure of relaxation, and the disease is more common in males.",
  note: "Four options printed (A-D); options A, B and C each run onto a second line, so the ladder was counted by its letters, not by its lines. Printed number 67, matches n. Red folio 1778, matches the PDF page. Yellow highlight sits on option A and covers both of its lines, bold and underlined; the box agrees. Box printed below the ladder, four lines, and it sits tight against the foot of the page. In the box, \"aganglionic segment is narrow and contracted\" and \"proximal segment becomes dilated\" are set bold; the bold is not reproduced in expl. Stem and options carry no numerals, so nothing was escalated on this page. Paediatric surgery, in scope. RECORDED, not corrected: the box calls the other statements true, yet option C says rectal examination reveals an EMPTY rectal ampulla while the box says the ampulla may be DISTENDED with failure of relaxation -- the box contradicts the option it is calling true. The key stays on the highlight." }

{ n: 68, pr: 68, p: 1780,
  key: 0,
  stem: 'Which of the following is NOT a typical cause of neonatal intestinal obstruction?',
  opts: ['Intussusception', 'Meconium ileus', "Hirschsprung's disease", 'Incarcerated hernia'],
  expl: "Intussusception is rare in neonates; common causes include meconium ileus, Hirschsprung's disease, and incarcerated hernia.",
  note: "Four options printed (A-D). Printed number 68, matches n. Red folio 1780, matches the PDF page. Yellow highlight sits on option A, bold and underlined; the box agrees. Box printed below the ladder. In the box, \"rare in neonates\" is set bold; the bold is not reproduced in expl. No numerals anywhere on the page beyond the question number, so nothing was escalated. Paediatric surgery, in scope." }

{ n: 69, pr: 69, p: 1782,
  key: 1,
  stem: "Worried parents bring in their full-term 18-month-old infant for evaluation of a unilateral undescended testis (UDT). On examination, normal male genitalia with scrotal asymmetry are noted. Despite maneuvers to detect a retractile testicle, the right testis is not palpable. What should be the next step in this patient's management?",
  opts: ['The patient should be reexamined prior to 2 years of age because most patients undergo spontaneous descent of the testicle by 2 years of age.', 'Laparoscopy for presence and localization of the testicle.', 'Hormonal therapy with human chorionic gonadotropin (hCG).', 'Imaging studies.'],
  expl: 'Non-palpable testes after 6–12 months require laparoscopy to locate or remove, because spontaneous descent is unlikely after 1 year. Hormonal therapy is less effective.',
  note: "Four options printed (A-D); option A runs to two lines. Every option is printed with a closing full stop and that punctuation is transcribed as printed. Printed number 69, matches n. Red folio 1782, matches the PDF page. Yellow highlight sits on option B, bold and underlined; the box agrees. The explanation box is printed to the RIGHT of option D, not below the ladder, so the ladder was read down the left margin past it. ESCALATED to a 600 dpi crop of the box band (crop1782box-1782.png) because the box carries two intervals in small print and this exam's recurring trap is a unit: confirmed \"after 6–12 months\" (en dash, months not weeks) and \"after 1 year\" (year not month). The stem's \"18-month-old\" and option A's two instances of \"2 years of age\" are large type and were read at 150 dpi and re-read on a 600 dpi stem crop (crop1782stem-1782.png), which confirmed \"18\" and \"2 years\" but was cropped short of the right margin. RECORDED, not corrected: option A claims most patients undergo spontaneous descent by 2 years of age, while the box states spontaneous descent is unlikely after 1 year -- the two disagree on the age. The key stays on the highlight." }

{ n: 70, pr: 70, p: 1784,
  key: 1,
  stem: 'One of the important sonographic signs of infantile hypertrophic pyloric stenosis is:',
  opts: ['Pyloric thickness ≥11 mm', 'Pyloric duct length ≥17 mm', 'Pyloric muscle thickness ≥2 mm', 'None of the above'],
  expl: '',
  note: 'Four options printed (A-D). Printed number 70, matches n. Red folio 1784, matches the PDF page. Yellow highlight sits on option B, bold and underlined. NO EXPLANATION BOX IS PRINTED on this sheet -- the whole lower half of the page is blank -- so expl is empty and nothing was written to fill it. Paediatric surgery, in scope. This is an ALL-NUMERIC OPTION LADDER and was ESCALATED to a 600 dpi crop of the whole ladder (crop1784-1784.png). Read off that crop: A is "greater-than-or-equal-to 11 mm" (two separate 1s, not 4 and not 1.1), B is "greater-than-or-equal-to 17 mm", C is "greater-than-or-equal-to 2 mm". All three carry the same relational sign, printed as a greater-than over a single underline, and all three are in mm -- no unit differs between options here. Transcribed with the U+2265 character.' }

{ n: 71, pr: 71, p: 1786,
  key: 1,
  stem: 'A healthy newborn starts spitting after the first feed. NG tube cannot be passed. X-ray shows a dilated stomach. What is the likely diagnosis?',
  opts: ['Hypertrophic pyloric stenosis', 'Esophageal atresia with distal fistula', 'Proximal fistula with distal fistula', 'Meconium ileus'],
  expl: 'Failure to pass an NG tube and proximal gastric dilation indicate esophageal atresia, not pyloric stenosis or meconium ileus.',
  note: 'Four options printed (A-D). Printed number 71, matches n. Red folio 1786, matches the PDF page. Yellow highlight sits on option B, bold and underlined; the box agrees. In the box, "esophageal atresia" is set bold; the bold is not reproduced in expl. LAYOUT: the box is undersized for its text and its last word, "ileus.", is printed OUTSIDE and just below the bottom border, on the same sheet -- nothing carries to a later sheet, so no box field is set; the word is included in expl because it is part of the same sentence. No numerals on the page beyond the question number, so nothing was escalated. Paediatric surgery, in scope. RECORDED, not corrected: option C reads "Proximal fistula with distal fistula", which describes a fistula twice and never names an atresia; it is staged exactly as printed.' }

{ n: 72, pr: 72, p: 1788,
  key: 2,
  stem: 'Major determinant of poor survival after TEF repair:',
  opts: ['Esophageal leak', 'Pneumonia', 'Presence of other anomalies', 'Site of fistula'],
  expl: 'Associated anomalies, especially cardiac, are the biggest factor affecting survival, more than leaks or fistula location.',
  note: 'Four options printed (A-D). Printed number 72, matches n. Red folio 1788, matches the PDF page. Yellow highlight sits on option C, bold and underlined; the box agrees. Box printed below the ladder. In the box, "biggest factor affecting survival" is set bold; the bold is not reproduced in expl. No numerals on the page beyond the question number, so nothing was escalated. Paediatric surgery, in scope.' }

{ n: 73, pr: 73, p: 1790,
  key: 1,
  stem: 'True about Esophageal Atresia (EA) EXCEPT:',
  opts: ["Primary repair isn't always possible", 'Associated with anomalies in 5%', 'Semi-sitting position is a good nursing position', 'Failure of passage of NG tube'],
  expl: 'Esophageal atresia is associated with other anomalies in about 50% of cases, not 5%. Primary repair may not always be possible, NG tube fails to pass, and semi-sitting position is recommended for feeding.',
  note: "Four options printed (A-D). Printed number 73, matches n. Red folio 1790, matches the PDF page. Yellow highlight sits on option B, bold and underlined; the box agrees (it names 5% as the wrong figure). Box printed below the ladder, three lines. In the box, \"other anomalies in about 50% of cases\" is set bold; the bold is not reproduced in expl. Option A prints a curly right-single-quote in isn't; transcribed with a plain apostrophe, so that option string is double-quoted. ESCALATED to two 600 dpi crops because the whole question turns on telling two percentages apart: crop1790optB-1790.png confirms option B reads \"in 5%\" (one digit), and crop1790box-1790.png confirms the box reads \"about 50% of cases, not 5%\" -- 50 with two digits in the first position and 5 with one in the second. Paediatric surgery, in scope." }

{ n: 74, pr: 74, p: 1792,
  key: 0,
  stem: 'All of the following are part of VACTERL syndrome except:',
  opts: ['Vaginal hypoplasia', 'Imperforate anus', 'Tracheo-esophageal fistula', 'Polycystic kidney', 'Polydactyly'],
  expl: 'VACTERL includes Vertebral, Anal, Cardiac, Tracheo-esophageal, Renal, and Limb anomalies. Vaginal hypoplasia is not part of the classic association.',
  note: 'FIVE options printed (A-E) -- the first five-option ladder in this half; the ladder was counted by its letters and E. Polydactyly is the last. Printed number 74, matches n. Red folio 1792, matches the PDF page. Yellow highlight sits on option A, bold and underlined; the box agrees. Box printed below the ladder, two lines, no bold anywhere in it. No numerals on the page beyond the question number, so nothing was escalated. Paediatric surgery, in scope. RECORDED, not corrected: the box explains only why option A is outside VACTERL and says nothing about options D or E, so the page gives no printed reason for excluding them from the EXCEPT stem.' }

{ n: 75, pr: 75, p: 1794,
  key: 0,
  stem: 'Best investigation for arrest of catheter at 10 cm from nostril in a newborn:',
  opts: ['Plain X-ray', 'Barium swallow', 'Lipidol swallow', 'Gastrografin meal'],
  expl: 'If a catheter cannot pass beyond a certain point, a plain X-ray can show the level of obstruction or coiling and help diagnose esophageal atresia. Contrast studies are generally not first-line in this situation.',
  note: 'Four options printed (A-D). Printed number 75, matches n. Red folio 1794, matches the PDF page. Yellow highlight sits on option A, bold and underlined; the box agrees. Box printed below the ladder, three lines. In the box, "plain X-ray" is set bold; the bold is not reproduced in expl. ESCALATED to a 600 dpi crop of the stem band (crop1794-1794.png) because the stem carries a distance with a unit: confirmed "at 10 cm from nostril" -- 10 with a one and a zero, and cm, not mm. Paediatric surgery, in scope. Option C spells the contrast agent "Lipidol"; transcribed as printed.' }

{ n: 76, pr: 76, p: 1796,
  key: 2,
  stem: 'Ideal position for newborn with esophageal atresia:',
  opts: ['Supine', 'Prone', 'Semi-sitting', 'Trendelenburg'],
  expl: 'Newborns with EA are placed semi-sitting to prevent aspiration of saliva or gastric contents. Supine or prone can increase risk of aspiration, and Trendelenburg is not appropriate.',
  note: 'Four options printed (A-D). Printed number 76, matches n. Red folio 1796, matches the PDF page. Yellow highlight sits on option C, bold and underlined; the box agrees. Box printed below the ladder, three lines. In the box, "semi-sitting" is set bold; the bold is not reproduced in expl. No numerals on the page beyond the question number, so nothing was escalated. Paediatric surgery, in scope.' }

{ n: 77, pr: 77, p: 1798,
  key: 1,
  stem: 'Most common type of congenital esophageal anomaly:',
  opts: ['Atresia with fistula into upper pouch', 'Atresia with fistula into lower pouch', 'Fistula into both pouches', 'Simple atresia without fistula', 'Fistula without atresia'],
  expl: 'About 85% of EA cases have a distal tracheoesophageal fistula, making it the most common type. Other forms like isolated EA or H-type are less frequent.',
  note: 'FIVE options printed (A-E) -- second five-option ladder in this half. Printed number 77, matches n. Red folio 1798, matches the PDF page. Yellow highlight sits on option B, bold and underlined; the box agrees, since a distal tracheoesophageal fistula is the fistula into the lower pouch. Box printed below the ladder, three lines, no bold anywhere in it. ESCALATED to a 600 dpi crop of the box band (crop1798-1798.png) because the box carries a percentage in small print: confirmed "About 85%" -- 85, not 35 and not 8.5. Paediatric surgery, in scope.' }

{ n: 78, pr: 78, p: 1800,
  key: 0,
  stem: 'Diagnosis in a neonate with excessive salivation, respiratory distress, and coiling NG tube:',
  opts: ['Proximal esophageal atresia without fistula', 'Proximal EA with distal TEF', 'H-type TEF', 'EA with both proximal and distal TEF', 'Congenital esophageal stricture'],
  expl: 'Coiling of the NG tube in the upper pouch plus drooling and respiratory distress strongly suggests proximal EA without distal connection.',
  note: 'FIVE options printed (A-E) -- third five-option ladder in this half. Printed number 78, matches n. Red folio 1800, matches the PDF page. Yellow highlight sits on option A, bold and underlined; the box agrees. Box printed below the ladder, two lines. In the box, "proximal EA without distal connection" is set bold; the bold is not reproduced in expl. No numerals on the page beyond the question number, so nothing was escalated. Paediatric surgery, in scope.' }

{ n: 79, pr: 79, p: 1802,
  key: 3,
  stem: 'Most common complication after repair of EA with distal TEF:',
  opts: ['Anastomotic leak', 'Esophageal stricture', 'Recurrent TEF', 'Gastroesophageal reflux', 'Tracheomalacia'],
  expl: 'The most common long-term complication after repair of EA with distal TEF is GER, which can cause dysphagia and respiratory problems. Anastomotic strictures are common early, but GER predominates over time.',
  note: 'FIVE options printed (A-E) -- fourth five-option ladder in this half. Printed number 79, matches n. Red folio 1802, matches the PDF page. Yellow highlight sits on option D, bold and underlined; the box agrees. Box printed below the ladder, four lines. In the box, "GER" is set bold on its first appearance only; the bold is not reproduced in expl. No numerals on the page beyond the question number, so nothing was escalated. Paediatric surgery, in scope. RECORDED, not corrected: the stem asks for the most common complication without qualification, while the box answers for the most common LONG-TERM complication and concedes that anastomotic strictures are common early -- so the box narrows the stem to make the key work. The key stays on the highlight.' }

{ n: 80, pr: 80, p: 1804,
  key: 3,
  stem: 'Which statements are true regarding EA?',
  opts: ['Most diagnosed after first week', 'Excessive salivation', 'Feeding causes choking', 'B and C are true'],
  expl: 'Excessive salivation and choking with feeds are classic signs of EA. Diagnosis is often made in the first days of life, not usually after a week.',
  note: 'Four options printed (A-D); option D is a combining option that names options B and C by their printed letters, so the letters are preserved inside the option text even though key is a zero-based index. Printed number 80, matches n. Red folio 1804, matches the PDF page. Yellow highlight sits on option D, bold and underlined; the box agrees. Box printed below the ladder, two lines. In the box, "first days of life" is set bold; the bold is not reproduced in expl. The only interval on the page is "first week" in option A and "after a week" in the box; both are large enough to read at 150 dpi and they agree, so no crop was needed. Paediatric surgery, in scope. This is the last answered sheet of Model Final Exam 4.' }
