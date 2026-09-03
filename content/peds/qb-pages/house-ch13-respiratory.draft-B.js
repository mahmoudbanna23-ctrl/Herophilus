/* House — "Dr. HOUSE in pediatric medicine & surgery MCQs" (Semester 8\Pedo\Questions\pediatric .pdf)
 * Part I, chapter 13: RESPIRATORY DISORDERS — printed questions n:14 to n:28.
 *
 * DRAFT B. n:1 to n:13 are drafted separately in house-ch13-respiratory.draft-A.js — not touched
 * here, not opened, not read. n:11 does not exist (confirmed publisher skip, staging header).
 *
 * Stems, options and keys are taken verbatim from the validated staging record
 * content\peds\qb-pages\house-ch13-respiratory.array.js, variable PEDHD_RESP_STAGED. `stem` and
 * `options` are byte-identical to the staged entry. The book's own wording is preserved exactly and
 * never commented on. The one exception is numbers, units, doses and exponents, which are reproduced
 * exactly as the staging record's 600 dpi re-render confirmed them.
 *
 * FIFTEEN ENTRIES, n:14-28. BOILER: staging records boiler:false for every one of n:12-28 — no
 *   standard "Select one answer only." line anywhere in this half; none is added below.
 *
 * KEYS, READ FROM EACH STAGED ENTRY'S OWN `key:` FIELD (not from the chapter header's summary
 *   string, which the header itself records as having been corrected once already):
 *   n:14 E->4, n:15 A->0, n:16 B->1, n:17 C->2, n:18 C->2, n:19 B->1, n:20 A->0, n:21 B->1, n:22 E->4,
 *   n:23 A->0, n:24 A->0, n:25 B->1, n:26 D->3, n:27 E->4, n:28 A->0. Every key prints as a bare
 *   letter ("Answer: X.") with no option name — the letter-vs-name cross-check is UNAVAILABLE for
 *   the whole chapter and is stated as such in every entry below rather than left silent.
 *
 * NO FIGURES IN THIS HALF: the staging record's `fig` field is absent on all of n:14-28 (the
 *   chapter's six figures are all in n:1,2,9,10,12,13, half A) — no `image` or `imgAlt` field
 *   appears anywhere below.
 *
 * FOUR STRADDLES IN THIS HALF, each read end-to-end across the page break before writing: n:14
 *   (p.105->p.106, "Answer: E." alone atop p.106), n:17 (p.106->p.107, option E + "Answer: C." alone
 *   atop p.107), n:20 (p.107->p.108, options D/E + "Answer: A." alone atop p.108), n:23 (p.108->
 *   p.109, "Answer: A." alone atop p.109, no answer line visible on p.108 itself).
 *
 * TWO SHARED OPTION MENUS IN THIS HALF, both pairings, nothing folded:
 *   RUN 1 = n:14,15,16,17 — identical five-option menu (Bronchiolitis / Pneumonia / Pertussis
 *     (whooping cough) / Bronchiolitis / Laryngotracheobronchitis (croup)) on all four boxes.
 *     ⚠️ The menu prints "Bronchiolitis" TWICE, at option A and option D, on every one of the four
 *     boxes — a confirmed printed duplicate (staging note, re-read directly off the page image, not
 *     a numeral so not band-cropped, but read as prose on the whole page). Transcribed exactly as
 *     printed both times below; the answer index is never moved to compensate, and the duplication is
 *     recorded as fact in `pedhd-resp-14`'s explanation, not disputed. The full comparative table
 *     is written once, in the lowest-numbered member, `pedhd-resp-14`; `pedhd-resp-15`,
 *     `pedhd-resp-16` and `pedhd-resp-17` each name that id and give only their own discriminating
 *     clinical token.
 *   RUN 2 = n:18,19,20 — identical five-option menu (Oral corticosteroid / Inhaled salbutamol via
 *     MDI+spacer / Oral antipyretic/analgesic / CPAP / Endotracheal intubation and ventilation) on
 *     all three boxes, closed at n:20 per the staging record (n:21 does not continue it). The full
 *     comparative table is written once, in `pedhd-resp-18`; `pedhd-resp-19` and `pedhd-resp-20`
 *     each name that id and give only their own discriminating clinical token.
 *
 * Chapter assignment, one question at a time, per `modules.js` (confirmed off disk: pediatrics
 *   carries `resp-pneumonia`, `respiratory`, `resp-bronch`, plus `infection` and `infection-bact`
 *   used where they are the closer fit, matching draft-A's established assignment logic):
 *   n:14 -> resp-bronch   croup, per `infection` inf-15's own cross-reference ("No cached deck
 *                         teaches croup as a disease — it belongs to resp-bronch"), same logic
 *                         draft-A applied to n:10.
 *   n:15 -> resp-bronch   bronchiolitis picture (preterm infant, hyperinflation, crackles+wheezes) —
 *                         this chapter's own definition and course (resp-20, resp-21) directly.
 *   n:16 -> resp-pneumonia  focal crackles, no wheeze, low saturation — this chapter's own general
 *                         and local pneumonia signs (resp-4, resp-5).
 *   n:17 -> resp-pneumonia  pertussis by analogy with draft-A's n:3 (only chapter naming the
 *                         organism, resp-3's age-pathogen table); the paroxysmal-cough-plus-
 *                         vomiting clinical picture itself is a gap, tagged below.
 *   n:18 -> infection     otitis media (bulging red drum) treated with an antipyretic — same
 *                         assignment logic as draft-A's n:9, this chapter's own fever-focus map
 *                         instruction to examine the tympanic membranes (inf-2).
 *   n:19 -> respiratory   known asthmatic stepping up a bronchodilator during an exacerbation —
 *                         this chapter's own severity grading and treatment protocol (resp-19).
 *   n:20 -> resp-bronch   croup again, moderate severity treated with oral corticosteroid — same
 *                         primary as n:14 per inf-15's cross-reference; secondary infection
 *                         (inf-15's epiglottitis-versus-croup table, the differential this
 *                         vignette's oral-corticosteroid step assumes has already been excluded).
 *   n:21 -> resp-pneumonia  asthma unresponsive to step-up therapy plus delayed meconium passage
 *                         and clubbing raising cystic fibrosis — this chapter's own eight causes of
 *                         recurrent/persistent pneumonia (resp-8) name cystic fibrosis by name,
 *                         matching draft-A's n:4 assignment logic exactly.
 *   n:22 -> respiratory   inhaled-steroid asthma maintenance, stepping up therapy — this chapter's
 *                         own severity/management material (resp-16, resp-18, resp-19).
 *   n:23 -> respiratory   acute wheeze in a well, non-atopic-risk infant with no crepitations — this
 *                         chapter's own three-pattern wheeze table naming viral episodic wheeze
 *                         (resp-12).
 *   n:24 -> resp-pneumonia  most likely pathogen in lobar pneumonia — this chapter's own age-
 *                         pathogen table and aetiology figures (resp-3).
 *   n:25 -> infection     conductive hearing loss from recurrent ear infections in trisomy 21 — same
 *                         assignment logic as n:18/draft-A's n:9 (inf-2's tympanic-membrane
 *                         instruction); secondary `genetics` gen-4 for the trisomy 21 context.
 *   n:26 -> respiratory   life-threatening asthma escalation — this chapter's own severity grading
 *                         and treatment protocol (resp-19), the same section grounding n:6 and n:19.
 *   n:27 -> resp-bronch   bronchiolitis clinical features, direct negative-recognition question —
 *                         this chapter's own definition (resp-20).
 *   n:28 -> resp-pneumonia  cystic fibrosis (diarrhoea since birth, faltering growth, recurrent
 *                         pneumonia) — this chapter's own resp-8 again, matching n:21 and draft-A's
 *                         n:4; secondary `gi-diarrhoea` gast-12 for the chronic-diarrhoea causes list.
 *
 * Grounding is T_PEDS['resp-pneumonia'] (resp-1..resp-8), T_PEDS['respiratory'] (resp-9..resp-19),
 *   T_PEDS['resp-bronch'] (resp-20..resp-22), T_PEDS['infection'] (inf-2, inf-14, inf-15) and, for
 *   secondary citation only, T_PEDS['genetics'] (gen-4) and T_PEDS['gi-diarrhoea'] (gast-12) — all
 *   measured off disk before writing via a `vm`-loaded T_PEDS, not assumed.
 *
 * OUTSIDE-KNOWLEDGE TAGS in this half, each grepped against the whole of T_PEDS before being called
 *   a gap:
 *   n:14-17  the specific clinical description of pertussis (paroxysmal coughing bouts ending in
 *            post-tussive vomiting) used to discriminate n:17: `resp-pneumonia` resp-3 names
 *            B. pertussis only inside an age-pathogen table, never its clinical picture — same gap
 *            draft-A already tagged for n:3. Tagged outside knowledge in n:14 (table) and n:17.
 *   n:17     confirmed as above.
 *   n:21     "meconium ileus" / "delayed passage of meconium at birth" / "sweat test": ALL return
 *            zero hits across the whole of T_PEDS (grepped case-insensitively, whole corpus, this
 *            pass). The neonatal-bowel-obstruction significance of delayed meconium passage and its
 *            link to cystic fibrosis is tagged outside knowledge; cystic fibrosis itself as a cause
 *            of recurrent pneumonia IS grounded, in resp-8.
 *   n:25     the specific link between trisomy 21 and otitis media with effusion / conductive
 *            hearing loss: zero hits for that link anywhere in T_PEDS. `genetics` gen-4's own
 *            craniofacial exam list for Down syndrome names "small ears" but not otitis media or
 *            hearing loss; `infection` inf-2 grounds only the general instruction to examine the
 *            tympanic membranes in a febrile/unwell child, not the trisomy-21-specific association.
 *            Tagged outside knowledge in the entry.
 *   n:28     "sweat test" already confirmed zero hits (see n:21). The diagnostic significance of
 *            pale, offensive stool and faltering growth from birth pointing to cystic fibrosis via
 *            pancreatic insufficiency/malabsorption is tagged outside knowledge; the chronic-
 *            diarrhoea/cystic-fibrosis link itself IS grounded, in `gi-diarrhoea` gast-12.
 *   n:15,16,18,19,20,22,23,24,26,27  none new — grounded directly in the resp-bronch, resp-pneumonia,
 *            respiratory or infection sections named in the chapter-assignment list above.
 *
 * DIVERGENCES RECORDED, KEYS NOT MOVED: none identified in this half between the printed key and the
 *   course material; every key checked converges with the grounding theory on independent clinical
 *   reasoning.
 *
 * Every key prints as a bare letter; the letter-vs-name cross-check was NOT performed anywhere in
 *   this file, and that unavailability is stated in each entry rather than left silent.
 */


var PEDHD_RESP_DRAFT_B = [

{
  id:'pedhd-resp-14', bank:'house', module:'pediatrics', chapter:'resp-bronch',
  stem:'Jamal, a 10-month-old Asian boy, is brought at 1 am to the Emergency Department because he has woken up with noisy breathing. He has had coryzal symptoms for 2 days and now has a barking cough. On examination he has a fever of 37.8°C. He is alert and watches you but clings to his mother. On crying, he has marked inspiratory stridor. Which of the following is the most likely diagnosis of that patient?',
  options:['Bronchiolitis','Pneumonia','Pertussis (whooping cough)','Bronchiolitis','Laryngotracheobronchitis (croup)'],
  answer:4,
  explanation:'**This entry sets out the comparative table `pedhd-resp-15`, `pedhd-resp-16` and `pedhd-resp-17` all point back to — the four boxes print the identical five-option list in the identical order, so the reasoning against every option is written once here.**\n\n⚠️ **A printed defect, transcribed exactly as it stands:** the menu lists "Bronchiolitis" TWICE, at option A and option D, on all four boxes in this run. This is reproduced verbatim both times below; the key is never moved to compensate, and the duplication is recorded here as a fact about the printed book, not disputed.\n\n| Diagnosis on this menu | Onset / prodrome | Signature sign | Fever | Key on this run |\n|---|---|---|---|---|\n| Laryngotracheobronchitis (croup) | Gradual, over 1-2 days after coryza | Barking cough, INSPIRATORY stridor, worse crying/at night | Absent or low-grade | `pedhd-resp-14` |\n| Bronchiolitis (options A and D — see the note above) | Coryza then lower-airway signs, infant under 12 months | Tachypnoea, retractions, BILATERAL crackles +/- wheeze | Low-grade or absent | `pedhd-resp-15` |\n| Pneumonia | Days of fever and cough | Focal crackles, decreased air entry, low SpO2 | Often high | `pedhd-resp-16` |\n| Pertussis (whooping cough) | Over 2 weeks of cough | Paroxysmal coughing bouts, POST-TUSSIVE VOMITING | Absent or mild | `pedhd-resp-17` |\n\nJamal\'s own picture sits squarely in the croup row: a 10-month-old with 2 days of coryza before a barking cough begins, a low-grade 37.8°C fever, and — the discriminator that clinches it — inspiratory stridor that becomes marked specifically **on crying**, a classic croup finding reflecting dynamic upper-airway narrowing that worsens with agitation. The deck\'s own epiglottitis-versus-croup table, already used for `pedhd-resp-10`, describes exactly this course: onset "over 1-2 days after coryza," fever "absent or low grade," cough "barking," no drooling (`infection` inf-15) — and its cross-reference note assigns croup as a disease to `resp-bronch` rather than `infection`, which is why this entry and `pedhd-resp-20` are filed there.\n\n**Why the other four are each wrong for a stated reason:**\n\n| Option | Why it does not fit |\n|---|---|\n| Bronchiolitis (A and D) | Jamal is within the age range, but he has none of the lower-airway signs bronchiolitis requires — no tachypnoea, retractions or crackles are described, and his signature finding is stridor on crying, not the bilateral crackles/wheeze of small-airway obstruction (`resp-bronch` resp-20) |\n| Pneumonia | No focal crackles or decreased air entry are described, and his fever is low-grade rather than the higher fever the deck\'s pneumonia predictors emphasise (`resp-pneumonia` resp-4) |\n| Pertussis (whooping cough) | No cough of over 2 weeks\' duration, no paroxysmal bouts and no vomiting — Jamal\'s cough started only 2 days ago *(the paroxysmal-cough-plus-vomiting picture itself is not taken from the course material; resp-3 names the organism only inside an age-pathogen table)* |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Diagnose croup from a barking cough with inspiratory stridor that worsens on crying after a coryzal prodrome, and set out the four-way comparative table (croup/bronchiolitis/pneumonia/pertussis) the rest of this shared menu points back to, including the printed duplicate "Bronchiolitis" option.',
  source:'pediatric .pdf p.105-106 (Part I, ch.13 Q14, stem and options on p.105, key straddles to p.106)'
},

{
  id:'pedhd-resp-15', bank:'house', module:'pediatrics', chapter:'resp-bronch',
  stem:'Jack, a 4-month-old infant, has rapid, laboured breathing that has been getting worse over the last 2 days. His mother is concerned as she is struggling to get him to feed. He was born at 27 weeks\' gestation, birth weight 979 g and was discharged home at 3 months of age. On examination he has a temperature of 37.4°C and a respiratory rate of 60 breaths/min. He is coughing. His chest is hyperinflated with marked intercostal recession. On auscultation there are generalized fine crackles and wheezes. Which of the following is the most likely diagnosis of that patient?',
  options:['Bronchiolitis','Pneumonia','Pertussis (whooping cough)','Bronchiolitis','Laryngotracheobronchitis (croup)'],
  answer:0,
  explanation:'**This is the same four-way menu as `pedhd-resp-14`, with the same printed duplicate "Bronchiolitis" at options A and D — the comparative table and the reasoning against pneumonia, pertussis and croup are set out there; only Jack\'s own discriminating token is given here.**\n\n⚠️ **This is the one box in the run where the printed duplication bites.** The book\'s key is **A**, and option A reads "Bronchiolitis" — but so does option D, word for word. Anyone choosing D has named the same disease the key names and will still be scored wrong, because the letter is positional. That is a defect of the printed book, recorded here and not corrected: the key stays exactly where the source puts it. Read the run\'s other three boxes to see the contrast — there the duplicate option is simply a wasted slot, since none of their keys lands on it.\n\nJack is an ex-27-week preterm infant, birth weight 979 g, worsening over 2 days with a respiratory rate of 60/min, a hyperinflated chest with marked intercostal recession, and **generalized** fine crackles AND wheezes — matching the deck\'s own bronchiolitis definition, "nasal discharge, cough, tachypnoea, retractions and BILATERAL CRACKLES" (European) or a disorder "characterised by WHEEZING" (AAP), both under 12 months (`resp-bronch` resp-20), and his ex-prematurity places him directly on the deck\'s own eleven-item high-risk list for severe bronchiolitis ("Prematurity: born under 35 weeks\' gestation") (resp-21). This is the generalized, bilateral small-airway picture RUN 1\'s pneumonia and croup rows do not have, and Jack has none of pertussis\'s paroxysmal-cough-with-vomiting history either.\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Diagnose bronchiolitis in an ex-preterm infant from generalized bilateral crackles and wheeze with hyperinflation and recession, reading the deck\'s own high-risk list for the prematurity link, against the pneumonia/pertussis/croup options on the shared `pedhd-resp-14` menu.',
  source:'pediatric .pdf p.106 (Part I, ch.13 Q15)'
},

{
  id:'pedhd-resp-16', bank:'house', module:'pediatrics', chapter:'resp-pneumonia',
  stem:'Fred is a normally well 4-year-old boy. He has had a runny nose and fever for 3 days. He has now developed a cough and difficulty breathing. On examination his temperature is 39°C. He watches you but sits quietly on his mother\'s lap. He has a respiratory rate of 55 breaths/min. His breaths are rapid but shallow with some mild substernal recession. There is no wheeze on auscultation but some coarse crackles at the right base. His oxygen saturation is 91% in air. Which of the following is the most likely diagnosis of that patient?',
  options:['Bronchiolitis','Pneumonia','Pertussis (whooping cough)','Bronchiolitis','Laryngotracheobronchitis (croup)'],
  answer:1,
  explanation:'**This is the same four-way menu as `pedhd-resp-14`, with the same printed duplicate "Bronchiolitis" at options A and D — the comparative table and the reasoning against bronchiolitis, pertussis and croup are set out there; only Fred\'s own discriminating token is given here.**\n\nFred is 4 years old, above the under-12-months/under-24-months age band either bronchiolitis definition requires, and his findings are focal rather than generalized: coarse crackles at the **right base only**, explicitly **no wheeze**, a 39°C fever and an oxygen saturation of 91%. That combination matches the deck\'s own strongest pneumonia predictors — "fever and cyanosis, PLUS more than one sign of respiratory distress," with tachypnoea (his RR 55 is well above the deck\'s over-5-years threshold of >30/min) and recession named as "the two most important signs for diagnosis" (`resp-pneumonia` resp-4), and its local congestion-stage sign of "decreased air entry... fine crackling rales" localised to one base rather than generalized (resp-5). This is focal consolidation, not bronchiolitis\'s generalized bilateral picture, croup\'s stridor, or pertussis\'s paroxysmal cough history.\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Diagnose pneumonia from a focal right-basal crackle, absent wheeze, high fever and low saturation in a 4-year-old, using the deck\'s own strongest pneumonia predictors against the bronchiolitis/pertussis/croup options on the shared `pedhd-resp-14` menu.',
  source:'pediatric .pdf p.106 (Part I, ch.13 Q16)'
},

{
  id:'pedhd-resp-17', bank:'house', module:'pediatrics', chapter:'resp-pneumonia',
  stem:'Hannah is a 3-month-old infant who has had a cough for over 2 weeks. She has now developed prolonged bouts of coughing. She has started to vomit at the end of the bout of coughing. Her temperature is 38°C. Her respiratory rate is 25 breaths/min. On auscultation of her chest there are some scattered crackles. Which of the following is the most likely diagnosis of that patient?',
  options:['Bronchiolitis','Pneumonia','Pertussis (whooping cough)','Bronchiolitis','Laryngotracheobronchitis (croup)'],
  answer:2,
  explanation:'**This is the same four-way menu as `pedhd-resp-14`, with the same printed duplicate "Bronchiolitis" at options A and D — the comparative table and the reasoning against bronchiolitis, pneumonia and croup are set out there; only Hannah\'s own discriminating token is given here.**\n\nHannah\'s cough has run for **over 2 weeks**, well past the acute timelines bronchiolitis, pneumonia or croup present with, and she now has **prolonged, paroxysmal coughing bouts followed by vomiting** — the classic pertussis picture. *(Not taken from the course material: the deck names B. pertussis only inside its age-pathogen table for pneumonia, in the "2 weeks – 3 months" band that Hannah, at 3 months, sits at the edge of — resp-3 — but does not describe the paroxysmal-cough-with-post-tussive-vomiting clinical picture itself, which is supplied here from general medical knowledge, the same gap already tagged for `pedhd-resp-3`\'s pertussis-testing question.)* Her mild fever, mild tachypnoea and scattered (rather than focal or generalized bilateral) crackles are consistent with pertussis\'s catarrhal/paroxysmal course rather than the focal consolidation of pneumonia, the generalized bilateral findings of bronchiolitis, or the barking cough and stridor of croup.\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Diagnose pertussis from a cough of over 2 weeks with paroxysmal bouts and post-tussive vomiting, against the bronchiolitis/pneumonia/croup options on the shared `pedhd-resp-14` menu, tagging the clinical-picture gap the age-pathogen table alone does not cover.',
  source:'pediatric .pdf p.106-107 (Part I, ch.13 Q17, stem and options A-D on p.106, option E and key straddle to p.107)'
},

{
  id:'pedhd-resp-18', bank:'house', module:'pediatrics', chapter:'infection',
  stem:'Sara, an 8-month-old Asian girl, presents with a 3-day history of being unsettled. She has been coryzal and has had a mild fever. On examining the right ear canal you note a bulging red tympanic membrane. Her respiratory rate is 25 breaths/min and she does not have any chest recession. Which of the following is the most appropriate next step in the management of that patient?',
  options:['Oral corticosteroid','Inhaled salbutamol via metered dose inhaler and spacer','Oral antipyretic/analgesic','Continuous positive airway pressure (CPAP)','Endotracheal intubation and ventilation'],
  answer:2,
  explanation:'**This entry sets out the comparative table `pedhd-resp-19` and `pedhd-resp-20` point back to — the three boxes print the identical five-option management menu in the identical order, so the reasoning against every option is written once here.**\n\n| Management step on this menu | Indicated for | Key on this run |\n|---|---|---|\n| Oral antipyretic/analgesic | Fever/discomfort with no respiratory compromise | `pedhd-resp-18` |\n| Inhaled salbutamol via MDI and spacer | Mild-moderate bronchospasm in a known or probable asthmatic | `pedhd-resp-19` |\n| Oral corticosteroid | Moderate croup/airway obstruction not needing ventilatory support | `pedhd-resp-20` |\n| CPAP | Severe respiratory distress, FiO2 requirement over 0.5 | not reached on this run |\n| Endotracheal intubation and ventilation | Impending respiratory failure/exhaustion | not reached on this run |\n\nSara has a bulging red tympanic membrane — acute otitis media, the diagnosis this chapter\'s own fever-focus map instructs examining the tympanic membranes to find in a febrile, coryzal child (`infection` inf-2), the same finding grounding `pedhd-resp-9`. Her respiratory rate (25/min) and absence of chest recession are both normal, so there is no respiratory compromise here to treat — the only active problem is her mild fever and the discomfort of otitis media, which the deck\'s own escalating menu addresses at its lowest rung: an oral antipyretic/analgesic. There is no bronchospasm to justify salbutamol, no airway obstruction to justify a corticosteroid, and no severe distress or impending failure to justify CPAP or intubation.\n\n**Why the other four are each wrong for a stated reason:**\n\n| Option | Why it does not fit |\n|---|---|\n| Oral corticosteroid | Reserved on this menu for airway obstruction (as in `pedhd-resp-20`\'s croup) — Sara has no stridor or upper-airway obstruction described |\n| Inhaled salbutamol via MDI and spacer | Treats bronchospasm/wheeze (as in `pedhd-resp-19`\'s asthma exacerbation) — Sara has no wheeze or known asthma history |\n| Continuous positive airway pressure (CPAP) | Reserved for severe respiratory distress with a high oxygen requirement — Sara has a normal respiratory rate and no recession |\n| Endotracheal intubation and ventilation | Reserved for impending respiratory failure — nothing in Sara\'s vignette approaches that |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Treat acute otitis media with an oral antipyretic/analgesic in an infant with no respiratory compromise, and set out the five-step escalating management table `pedhd-resp-19` and `pedhd-resp-20` point back to.',
  source:'pediatric .pdf p.107 (Part I, ch.13 Q18)'
},

{
  id:'pedhd-resp-19', bank:'house', module:'pediatrics', chapter:'respiratory',
  stem:'Chardonnay is a 6-year-old Caucasian girl who has asthma. Her mother smokes cigarettes and there is poor compliance with her preventative steroid therapy. She presents with a 2-day history of cough, runny nose, mild fever and \'breathlessness\'. Her mother cannot remember her previous peak-flow result. On examination she has a respiratory rate of 30 breaths/min, mild intercostal recession and oxygen saturation of 96% in air. Which of the following is the most appropriate next step in the management of that patient?',
  options:['Oral corticosteroid','Inhaled salbutamol via metered dose inhaler and spacer','Oral antipyretic/analgesic','Continuous positive airway pressure (CPAP)','Endotracheal intubation and ventilation'],
  answer:1,
  explanation:'**This is the same five-step management menu as `pedhd-resp-18`, in the same order — the comparative table is set out there; only Chardonnay\'s own discriminating token is given here.**\n\nChardonnay is a known asthmatic with poor preventer compliance, presenting with breathlessness, mild tachypnoea (RR 30) and mild intercostal recession, but a saturation of 96% — not the hypoxaemia of a severe attack. The deck\'s own moderate-attack row calls for exactly this step first: it lists inhaled bronchodilator via spacer as first-line for an attack not meeting the severe criteria (unable to talk, marked accessory muscle use, SpO2 under 92%) that instead trigger oral steroid, oxygen or escalation (`respiratory` resp-19, the same section grounding `pedhd-resp-6` and `pedhd-resp-26`). Her mild findings and preserved saturation place her at the bronchodilator step of the menu, not yet at oral corticosteroid, CPAP or intubation.\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Step up a known asthmatic\'s treatment to inhaled salbutamol via MDI and spacer for mild-moderate breathlessness with a preserved oxygen saturation, using the severity grading in resp-19 against the escalating menu shared with `pedhd-resp-18`.',
  source:'pediatric .pdf p.107 (Part I, ch.13 Q19)'
},

{
  id:'pedhd-resp-20', bank:'house', module:'pediatrics', chapter:'resp-bronch',
  stem:'Jake, a 7-month-old infant, presents with a 2-day history of fever and runny nose. During the night he has developed a harsh cough in association with noisy inspiration. On examination, you note he has moderate stridor mainly on inspiration and mild intercostal and subcostal recession. His respiratory rate is 30 breaths/min. He has a temperature of 37.8°C. His capillary refill time is normal. His oxygen saturation is 96% in air. Which of the following is the most appropriate next step in the management of that patient?',
  options:['Oral corticosteroid','Inhaled salbutamol via metered dose inhaler and spacer','Oral antipyretic/analgesic','Continuous positive airway pressure (CPAP)','Endotracheal intubation and ventilation'],
  answer:0,
  explanation:'**This is the same five-step management menu as `pedhd-resp-18`, in the same order — the comparative table is set out there; only Jake\'s own discriminating token is given here.**\n\nJake\'s harsh cough, noisy inspiration and moderate inspiratory stridor after a 2-day coryzal prodrome with low-grade fever (37.8°C) is the same croup picture grounding `pedhd-resp-14`, filed to `resp-bronch` per that entry\'s cross-reference (`infection` inf-15). His mild recession, normal capillary refill and preserved saturation (96%) place him at moderate — not severe — croup: airway narrowing significant enough to need treatment, but not the severe distress or impending failure the deck\'s own menu reserves CPAP and intubation for. An oral corticosteroid is the standard step for airway inflammation at this severity. *(Not taken from the course material: the specific agent and dosing for croup are not named in T_PEDS — resp-bronch grounds bronchiolitis, and inf-15 grounds the epiglottitis-versus-croup differential only, not croup\'s own treatment — this entry supplies the principle, oral corticosteroid as the first-line step for moderate croup, from general medical knowledge.)* This is not otitis media (no ear finding is described, unlike `pedhd-resp-18`) and not a wheezing exacerbation (unlike `pedhd-resp-19`).\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Treat moderate croup with an oral corticosteroid, distinguishing it by degree of distress from the severe end of the menu (CPAP/intubation) and from the otitis-media and asthma steps shared with `pedhd-resp-18` and `pedhd-resp-19`, tagging the treatment-specific gap in the course material.',
  source:'pediatric .pdf p.107-108 (Part I, ch.13 Q20, stem and options A-C on p.107, options D-E and key straddle to p.108)'
},

{
  id:'pedhd-resp-21', bank:'house', module:'pediatrics', chapter:'resp-pneumonia',
  stem:'A 5-year-old boy is under out-patient review for asthma. His CXR shows hyper-expansion but his symptoms remain unresponsive despite step-wise increase in asthma therapy. Further questioning reveals delayed passage of meconium at birth and finger clubbing is evident on examination. What is the most appropriate next step in the management of this child?',
  options:['Arrange a CT chest scan','Organize a sweat test','Test lung function using spirometry','Take a per-nasal swab','Send sputum cultures'],
  answer:1,
  explanation:'**This boy\'s asthma is not really asthma unresponsive to treatment — his history and examination are both pointing at the diagnosis behind the label, and the next step is to test for it.**\n\nAn asthma diagnosis unresponsive to escalating step-wise therapy is itself a red flag; the deck\'s own list of causes of recurrent or persistent pneumonia names **cystic fibrosis** directly, alongside seven other causes, as a mimic of a diffuse airway disease that fails to respond as expected (`resp-pneumonia` resp-8, the same section grounding `pedhd-resp-4`\'s CF/foreign-body differential and `pedhd-resp-28`\'s CF diagnosis). This boy adds two further, classic CF clues neither of those entries carries: **delayed passage of meconium at birth** and **finger clubbing**. *(Not taken from the course material: "meconium ileus," "delayed passage of meconium at birth" and "sweat test" all return zero hits anywhere in T_PEDS — the neonatal bowel-obstruction significance of delayed meconium and the sweat test itself are supplied from general medical knowledge. Delayed passage of meconium beyond 48 hours in a newborn raises meconium ileus, a bowel obstruction from abnormally thick, viscid meconium — the single most CF-specific of all its neonatal presentations, since CF accounts for a large majority of meconium ileus cases. Finger clubbing reflects chronic hypoxaemia/suppurative lung disease, another CF hallmark the deck names as a red flag against simple asthma in resp-14.)* The sweat test — measuring chloride concentration in sweat, elevated because the defective CFTR channel fails to reabsorb chloride in the sweat duct — is the standard confirmatory investigation for cystic fibrosis and is the appropriate next step here.\n\n**Why the other four are each wrong for a stated reason:**\n\n| Option | Why it does not fit |\n|---|---|\n| Arrange a CT chest scan | Might eventually show bronchiectasis in established CF, but it does not establish the underlying diagnosis and is not the standard first confirmatory test |\n| Test lung function using spirometry | Useful for monitoring severity in an already-diagnosed airway disease, but it cannot distinguish asthma from CF and does not address the specific clues (meconium history, clubbing) raised here |\n| Take a per-nasal swab | The test for pertussis (`pedhd-resp-3`), not relevant to a chronic, treatment-unresponsive picture with clubbing |\n| Send sputum cultures | May eventually identify organisms colonising CF airways later in the disease course, but it does not establish the diagnosis itself |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Recognise cystic fibrosis behind an unresponsive "asthma" label from delayed meconium passage and finger clubbing, and select the sweat test as the confirmatory next step, using the deck\'s own recurrent-pneumonia cause list to place cystic fibrosis on the differential.',
  source:'pediatric .pdf p.108 (Part I, ch.13 Q21)'
},

{
  id:'pedhd-resp-22', bank:'house', module:'pediatrics', chapter:'respiratory',
  stem:'A 4-year-old girl is under out-patient review for asthma. Her regular treatment consists of a preventative steroid inhaler 200 micrograms BD and a reliever inhaler when required (about fortnightly). However, over the last 3 months she has had to use her reliever inhaler every other day. Her nocturnal coughing has increased resulting in disturbed sleep. What is the appropriate next step in care for this child?',
  options:['Continue on the same dose of steroid inhaler','Increase the steroid inhaler dose to 400 micrograms BD','Start a course of oral steroids','Start oral theophylline','Add a long-acting beta agonist'],
  answer:4,
  explanation:'**This girl\'s reliever use has escalated far past the level her current preventer dose is controlling — the deck\'s own stepwise ladder for long-term asthma management is what decides what happens next.**\n\nShe moved from a fortnightly reliever to using it every other day over 3 months, with worsening nocturnal cough disturbing her sleep — a clear pattern of loss of control on her current preventative steroid inhaler dose. The deck\'s own long-term management material describes a **stepwise ladder**, adding therapy in sequence when control is not achieved on the current step, with add-on therapy — rather than simply raising the same inhaled steroid dose again — being the next rung once a low-to-moderate steroid dose alone is insufficient (`respiratory` resp-18, the same section grounding this chapter\'s stepwise-therapy logic used in `pedhd-resp-21`). Adding a long-acting beta agonist (LABA) to her existing inhaled steroid is the standard next step on that ladder in a child whose reliever need and symptoms have escalated on an already-prescribed preventer, rather than an oral-steroid course or a bare dose increase.\n\n**Why the other four are each wrong for a stated reason:**\n\n| Option | Why it does not fit |\n|---|---|\n| Continue on the same dose of steroid inhaler | Her escalating reliever use and worsening nocturnal cough are direct evidence the current dose is no longer controlling her asthma — continuing unchanged ignores that deterioration |\n| Increase the steroid inhaler dose to 400 micrograms BD | A reasonable-sounding step, but the stepwise ladder\'s next rung after an inadequately controlled low-to-moderate steroid dose is an add-on agent rather than simply doubling the same inhaled steroid alone |\n| Start a course of oral steroids | Reserved for an acute exacerbation needing systemic treatment (the step used in `pedhd-resp-19`/`pedhd-resp-26`\'s acute-attack management), not for stepping up chronic, stable maintenance control |\n| Start oral theophylline | A recognised but later add-on option once inhaled options have been tried, not the first step chosen ahead of a LABA on the ladder |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Step up chronic asthma maintenance by adding a long-acting beta agonist when reliever use and nocturnal symptoms escalate on an existing inhaled steroid, using the deck\'s own stepwise long-term management ladder.',
  source:'pediatric .pdf p.108 (Part I, ch.13 Q22)'
},

{
  id:'pedhd-resp-23', bank:'house', module:'pediatrics', chapter:'respiratory',
  stem:'A 3-year-old girl is admitted with a 3-day history of coryzal symptoms followed by an acute history of breathing difficulty. She is previously fit and well apart from mild eczema and the parents are non-smokers. She is thriving and on examination she has widespread wheeze with no crepitations. What is the most likely diagnosis?',
  options:['Viral wheeze','Asthma','Heart failure','Bronchiolitis','Recurrent aspiration'],
  answer:0,
  explanation:'**This girl\'s picture sits inside the deck\'s own definition of viral episodic wheeze, and every feature that would push her toward asthma instead is explicitly absent.**\n\nShe has a coryzal prodrome (3 days) followed by acute widespread wheeze, previously fit and well, thriving, with mild eczema noted but no other atopic or environmental risk (non-smoking parents). The deck\'s own three-pattern wheeze table describes viral episodic wheeze exactly this way: wheeze occurring only WITH viral colds, with NO interval symptoms between episodes, and states the whole table "turns on one question — are there symptoms BETWEEN the colds? No interval symptoms means no preventer" (`respiratory` resp-12, the same table grounding `pedhd-resp-7`\'s asthma-versus-viral-wheeze discriminator). Nothing in this single-episode vignette describes symptoms outside this cold, and she is only 3 years old — below the age at which the deck\'s formal asthma diagnostic criteria and confirmatory tools like a peak-flow diary become reliably usable (resp-15). Widespread wheeze with **no crepitations** also argues against a focal or crackling process.\n\n**Why the other four are each wrong for a stated reason:**\n\n| Option | Why it does not fit |\n|---|---|\n| Asthma | Would need either recurrent episodes or interval symptoms between colds (resp-12, resp-15) — this is a single cold-triggered episode with no such history given |\n| Heart failure | Would be expected to show additional signs such as hepatomegaly, gallop rhythm or poor perfusion, none of which is described, and a preceding coryzal illness with wheeze is not the typical trigger pattern for cardiac failure |\n| Bronchiolitis | The deck\'s own definitions centre on crackles (European) or wheeze with lower-airway retractions typically under 12 months (American) with **bilateral crackles** usually present (`resp-bronch` resp-20) — this girl explicitly has **no crepitations**, and at 3 years she is above the age band both definitions specify |\n| Recurrent aspiration | Would need a history of feeding difficulty, vomiting or neurological/anatomical risk factors, none of which is given; a single coryza-triggered wheeze episode in a thriving, previously well child does not fit that pattern |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Diagnose viral episodic wheeze from a single cold-triggered episode of widespread wheeze with no crepitations and no interval symptoms in a thriving 3-year-old, using the deck\'s own three-pattern wheeze table to exclude asthma, bronchiolitis, heart failure and recurrent aspiration.',
  source:'pediatric .pdf p.108-109 (Part I, ch.13 Q23, stem and options on p.108, key straddles to p.109)'
},

{
  id:'pedhd-resp-24', bank:'house', module:'pediatrics', chapter:'resp-pneumonia',
  stem:'A 4-year-old girl is admitted with fever, difficulty breathing and cough. A diagnosis of left lower lobe pneumonia is made and intravenous antibiotics are commenced. What is the most likely pathogen?',
  options:['Streptococcus pneumoniae','Haemophilus influenzae','Mycoplasma pneumoniae','Chlamydia trachomatis','E. coli'],
  answer:0,
  explanation:'**A 4-year-old with a lobar pneumonia sits precisely inside the age band the deck\'s own age-pathogen table assigns to a single dominant organism.**\n\nThe deck\'s "age is the pathogen" table lists, for the 3 months to 5 years band, *Haemophilus influenzae* and *Streptococcus pneumoniae* as the named bacterial causes, but states directly: **"In general: Strep. pneumoniae is the commonest bacterial cause of CAP after the neonatal period"** (`resp-pneumonia` resp-3). The deck\'s own CAP aetiology figures reinforce the same point numerically, with *Streptococcus pneumoniae* the largest single slice of the pie at 34% (resp-3). A 4-year-old with a lobar (left lower lobe) pneumonia — the classic radiological pattern of pneumococcal disease — falls squarely into both the age band and the general rule the deck states outright.\n\n**Why the other four are each wrong for a stated reason:**\n\n| Option | Why it does not fit |\n|---|---|\n| Haemophilus influenzae | Named in the same age band, but the deck\'s own general statement explicitly ranks Strep. pneumoniae as the commoner cause after the neonatal period (resp-3) |\n| Mycoplasma pneumoniae | The deck\'s age table assigns "atypical" organisms including Mycoplasma to the older, over-5-years band, not this 4-year-old\'s band (resp-3) |\n| Chlamydia trachomatis | The deck\'s age table assigns this organism to the birth-to-4-weeks neonatal band, from perinatal transmission — far younger than this 4-year-old (resp-3) |\n| E. coli | The deck\'s age table assigns this organism to the birth-to-4-weeks neonatal band as well, not to a previously well 4-year-old (resp-3) |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Identify Streptococcus pneumoniae as the commonest bacterial cause of community-acquired pneumonia in a 4-year-old, using the deck\'s own age-pathogen table and its explicit ranking of pneumococcus above the other age-appropriate organisms.',
  source:'pediatric .pdf p.109 (Part I, ch.13 Q24)'
},

{
  id:'pedhd-resp-25', bank:'house', module:'pediatrics', chapter:'infection',
  stem:'A 24-month-old girl with trisomy 21 attends for her developmental review. Her mother is concerned about her hearing and explains that she has had two recent right ear infections within the last 5 months. An audiogram is carried out which confirms a conductive hearing loss of the right ear. What is the most likely explanation for this finding?',
  options:['Congenital infection','Otitis media with effusion','Acquired meningitis','Antibiotic toxicity','Foreign body'],
  answer:1,
  explanation:'**This girl\'s history of recurrent ear infections leading into a confirmed conductive hearing loss is the deck\'s own instruction to examine the tympanic membranes, followed through to its usual outcome.**\n\nThe deck\'s own fever-focus map instructs directly: **"Otitis media — Always examine the tympanic membranes in a febrile child"** (`infection` inf-2, the same instruction grounding `pedhd-resp-9`\'s and `pedhd-resp-18`\'s otitis media diagnoses), reflecting how common ear infection is in this age group. This girl has had two right-sided ear infections within 5 months — recurrent acute otitis media — and now has a confirmed **conductive** hearing loss on the same side. *(Not taken from the course material: the specific mechanism — that repeated middle-ear infection commonly leaves behind persistent middle-ear effusion, "glue ear," which mechanically dampens sound conduction through the ossicular chain and produces a conductive rather than sensorineural loss — is supplied from general medical knowledge; T_PEDS does not link trisomy 21 to otitis media or hearing loss directly. `genetics` gen-4\'s own craniofacial examination list for Down syndrome names "small ears" among its features but does not extend that to otitis media or hearing loss, and children with trisomy 21 are additionally known to be at higher risk of middle-ear disease from relatively narrow Eustachian tubes and hypotonia, a further detail not carried in T_PEDS.)* Conductive hearing loss following recurrent otitis media is a recognised, common outcome, matching the audiogram result exactly.\n\n**Why the other four are each wrong for a stated reason:**\n\n| Option | Why it does not fit |\n|---|---|\n| Congenital infection | Would be present from birth rather than developing after two recent, separately timed ear infections at 24 months |\n| Acquired meningitis | Can cause SENSORINEURAL hearing loss from cochlear damage, not the conductive loss described here, and no history of meningitis is given |\n| Antibiotic toxicity | Aminoglycoside ototoxicity classically causes sensorineural, not conductive, hearing loss, and would need a specific exposure history not given here |\n| Foreign body | Would be an incidental canal finding, not an explanation for a confirmed conductive loss following two documented infections |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Diagnose otitis media with effusion as the cause of conductive hearing loss following recurrent acute ear infections, using the deck\'s own instruction to examine the tympanic membranes, and tag the trisomy-21-specific link as outside the course material.',
  source:'pediatric .pdf p.109 (Part I, ch.13 Q25)'
},

{
  id:'pedhd-resp-26', bank:'house', module:'pediatrics', chapter:'respiratory',
  stem:'A 6-year-old boy with known asthma has been brought in by ambulance to the local emergency department with an acute severe exacerbation. He has already received salbutamol and ipratropium nebulizers together with intravenous steroid. Upon reassessment, he appears exhausted with varying responsiveness. Fifteen litres of oxygen are needed to maintain his saturations and auscultation of his chest reveals minimal breath sounds. What is the next most important step in this child\'s care?',
  options:['Reassess 30 minutes later','Give intravenous antibiotics','Request a CXR','Give intravenous salbutamol','Admit to ward'],
  answer:3,
  explanation:'**This boy has already had every step short of escalation and is now showing the deck\'s own warning signs of a failing attack — the next step follows directly from recognising that failure, not from repeating what has already been tried.**\n\nHe has already received nebulized salbutamol and ipratropium plus IV steroid — the standard severe-attack treatment ladder — yet on reassessment he is exhausted with varying responsiveness, needs a very high oxygen flow to maintain saturation, and has minimal breath sounds on auscultation. The deck states plainly that **"A silent chest is not improvement. Wheeze needs airflow to exist"** (`respiratory` resp-13) — minimal breath sounds here signal near-complete airway obstruction with too little airflow to generate a wheeze, not resolution. His varying responsiveness and exhaustion match the deck\'s own life-threatening/near-fatal category, where the treatment protocol escalates to **IV magnesium** and, where nebulized bronchodilator delivery is failing, **IV salbutamol** as the next drug-level step, alongside urgent senior/PICU involvement, once first-line nebulized and IV steroid therapy has already been given without turning the picture around (resp-19, the same section grounding `pedhd-resp-6` and `pedhd-resp-19`). Escalating to IV salbutamol is the step that follows directly from having already exhausted the nebulized route.\n\n**Why the other four are each wrong for a stated reason:**\n\n| Option | Why it does not fit |\n|---|---|\n| Reassess 30 minutes later | The deteriorating signs already present — exhaustion, varying responsiveness, minimal breath sounds, a very high oxygen requirement — are themselves the deck\'s own life-threatening markers; waiting to reassess delays escalation a child already showing them cannot safely wait for |\n| Give intravenous antibiotics | Nothing in the vignette suggests a bacterial infection driving this exacerbation; the picture described is airway obstruction from asthma, not pneumonia |\n| Request a CXR | The deck reserves chest X-ray for a child not responding, to exclude pneumothorax or infection (resp-19) — reasonable eventually, but it does not treat the immediate, escalating obstruction this boy is showing right now |\n| Admit to ward | This boy\'s exhaustion, varying responsiveness and minimal breath sounds are markers for escalation to a higher level of care and more aggressive treatment, not a step down to routine ward admission |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Escalate to intravenous salbutamol in a child with life-threatening asthma showing exhaustion, varying responsiveness and a silent chest despite nebulized and IV steroid treatment already given, using the deck\'s own severity grading and treatment protocol.',
  source:'pediatric .pdf p.109 (Part I, ch.13 Q26)'
},

{
  id:'pedhd-resp-27', bank:'house', module:'pediatrics', chapter:'resp-bronch',
  stem:'Bronchiolitis is one of the most common respiratory conditions affecting infants. Which of the following is not a clinical feature of bronchiolitis?',
  options:['Tachypnoea','Apnoea','Wheeze','Fine crackles','Paroxysmal cough'],
  answer:4,
  explanation:'**This is a direct recognition question against the deck\'s own bronchiolitis definition — four of the five options are named features, and the fifth belongs to a different disease entirely.**\n\nThe deck\'s own definitions name tachypnoea, retractions and bilateral crackles (European) or wheezing (AAP) as bronchiolitis\'s core clinical features (`resp-bronch` resp-20), with fine crackles and wheeze both explicitly present on auscultation in the worked bronchiolitis vignette grounding `pedhd-resp-15` (generalized fine crackles AND wheezes). Apnoea is also a named, recognised presentation — the deck\'s own admission criteria for bronchiolitis list apnoea by name as an indication for hospital admission in its own right (resp-22). That leaves **paroxysmal cough** as the one option that is not part of the bronchiolitis picture: this is the signature feature of **pertussis** instead — prolonged, paroxysmal coughing bouts followed by vomiting — already established as the discriminator between bronchiolitis and pertussis on the shared menu grounding `pedhd-resp-14` through `pedhd-resp-17`.\n\n**Why the other four ARE features (and so are not the answer):**\n\n| Option | Where it is named as a bronchiolitis feature |\n|---|---|\n| Tachypnoea | Named directly in both definitions (resp-20) |\n| Apnoea | Named directly as an admission indication for bronchiolitis (resp-22) |\n| Wheeze | Named directly in the AAP definition and present in `pedhd-resp-15`\'s worked example (resp-20) |\n| Fine crackles | Named directly ("bilateral crackles") in the European definition and present in `pedhd-resp-15`\'s worked example (resp-20) |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Recognise paroxysmal cough — the signature feature of pertussis, not bronchiolitis — as the odd one out against tachypnoea, apnoea, wheeze and fine crackles, all directly named as bronchiolitis features in the deck\'s own definitions and admission criteria.',
  source:'pediatric .pdf p.110 (Part I, ch.13 Q27)'
},

{
  id:'pedhd-resp-28', bank:'house', module:'pediatrics', chapter:'resp-pneumonia',
  stem:'A 3-year-old girl of Irish parents presents with a history of diarrhoea since birth. The stool is pale and offensive smelling. She was born on the 25th centile but is now on the 0.4th centile for weight and height. She has been admitted on four occasions with pneumonia and has a chronic cough. Which investigation is most likely to yield her diagnosis?',
  options:['Sweat test','Coeliac antibodies','Stool reducing substances','Stool for microscopy and culture','Endoscopy and colonoscopy'],
  answer:0,
  explanation:'**This girl\'s combination — diarrhoea since birth, pale offensive stool, faltering growth and recurrent pneumonia with a chronic cough — is the same disease grounding `pedhd-resp-21`, approached from the gut side rather than the chest side.**\n\nThe deck\'s own recurrent/persistent pneumonia list names cystic fibrosis directly, alongside seven other causes (`resp-pneumonia` resp-8, already grounding `pedhd-resp-4` and `pedhd-resp-21`), and its chronic-diarrhoea material separately names cystic fibrosis among the non-infectious congenital causes of chronic diarrhoea: **"congenital causes such as cystic fibrosis"** (`gi-diarrhoea` gast-12). This girl sits at the intersection of both lists: four admissions with pneumonia and a chronic cough on the respiratory side, and diarrhoea since birth with pale, offensive stool and severe faltering growth (25th centile falling to 0.4th) on the gut side. *(Not taken from the course material: the mechanism linking these — pancreatic exocrine insufficiency in CF causing fat malabsorption, which produces pale, greasy, offensive-smelling stool ("steatorrhoea") and faltering growth despite adequate intake — is supplied from general medical knowledge; "sweat test" itself returns zero hits anywhere in T_PEDS, the same gap already tagged for `pedhd-resp-21`.)* The sweat test — the standard confirmatory investigation for cystic fibrosis, measuring elevated sweat chloride from defective CFTR function — is the investigation most likely to yield this diagnosis, tying together both the respiratory and gastrointestinal halves of her presentation.\n\n**Why the other four are each wrong for a stated reason:**\n\n| Option | Why it does not fit |\n|---|---|\n| Coeliac antibodies | Coeliac disease is a recognised non-infectious cause of chronic diarrhoea (gast-12) but would not explain her four admissions with pneumonia and chronic cough — coeliac disease is a gut-limited process |\n| Stool reducing substances | Tests for carbohydrate malabsorption (e.g. lactose intolerance), which does not account for pale, fat-laden stool or the respiratory admissions |\n| Stool for microscopy and culture | Diarrhoea since birth with this growth and respiratory pattern points away from an infectious cause toward a chronic congenital process, which a stool culture will not identify |\n| Endoscopy and colonoscopy | An invasive investigation that could support a gut-limited diagnosis such as inflammatory bowel disease, but it does not explain or test for the respiratory component of her presentation and is not the first, most yielding test here |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Diagnose cystic fibrosis from the combined respiratory (recurrent pneumonia, chronic cough) and gastrointestinal (diarrhoea since birth, pale offensive stool, faltering growth) picture, selecting the sweat test as the yielding investigation, using the deck\'s own recurrent-pneumonia and chronic-diarrhoea cause lists to place cystic fibrosis on both differentials.',
  source:'pediatric .pdf p.110 (Part I, ch.13 Q28)'
}

];
