/* Grade Gain Ophthalmology — Topic 4, "Lacrimal System"
 * VERBATIM staging record. Source: Semester 8\Opthalmo\Questions\ophthalmology qb.pdf
 *
 * PAGE MAP ACTUALLY USED (offset verified against the printed footer: PDF = book + 7;
 * PDF 28 carries footer "| P a g e 21", PDF 32 carries "| P a g e 25")
 *   book p.21 (PDF 28) — Q139–Q148  (10)  questions   + topic banner "Lacrimal System / Questions"
 *   book p.22 (PDF 29) — Q149–Q156  ( 8)  questions   (right column ends mid-page; left column
 *                                                      is short — a layout gap, not a lost tail)
 *   book p.23 (PDF 30) — Q157–Q164  ( 8)  questions
 *   book p.24 (PDF 31) — ANSWERS Q139–Q164, ALL TWENTY-SIX ON THIS ONE PAGE
 *   book p.25 (PDF 32) — topic 5 "Eyelid" begins at Q165  → boundary confirmed
 *
 * ✅ THE "Page As" FIGURE IS CORRECT THIS TIME. The contents page says answers start
 *    p.24 and every one of the 26 keys is on p.24 — the answer block ends with Q164 in
 *    the right column and the rest of the page is white. The p.14/p.15 and p.19/p.20
 *    overrun that defaced topics 2 and 3 DID NOT RECUR. Measured, not assumed: p.25 was
 *    rendered and read in full and carries no key of any kind, only Eyelid questions.
 *
 * ✅ NO QUESTION TAIL SHARES THE ANSWER PAGE. Book p.24 opens with the banner
 *    "Lacrimal System / Answers" in the LEFT column; there is no question anywhere on it.
 *    (A faint show-through of p.25's Q170 is visible behind the banner — that is the
 *    reverse of the sheet bleeding through the scan, not printed content. Do not
 *    transcribe it; it is transcribed in topic 5's own staging from its own page.)
 *
 * COUNT: 26 printed, Q139–Q164 continuous with no gap and no repeat.
 *        The contents page promised 26 and was EXACT — the fourth exact promise running
 *        on this bank (71, 41, 26, 26).
 *
 * EXPLANATION BOXES: 6 printed — Q139, Q141, Q144, Q156, Q160, Q162.
 *        The other 20 print the key letter alone.
 *        (Topic 1 printed 0 in 71, topic 2 printed 8 in 41, topic 3 printed 4 in 26.
 *         Box presence remains a property of the PAGE, not of the bank.)
 *
 * BACK-REFERENCES: 4 — Q150→Q149, Q151→Q149, Q153→Q152, Q156→Q155.
 *        ⚠️ Q151 says "In the previous case" but its antecedent is Q149, NOT Q150.
 *        Q150 is itself a back-reference to Q149, so the chain is Q149 ← Q150 ← Q151:
 *        three questions on one 52-year-old woman. Reading "previous" as "Q150" would
 *        have produced a stem about a defective lipid layer, which answers Q150.
 *
 * VERBATIM TYPOS KEPT (all re-read at 320 dpi before being written down):
 *        Q143  "during the lst 4 months of life"     — lowercase L for the digit 1
 *        Q148 B "there is no probably a common canalicular obstruction" — word order as printed
 *        Q157  "Which medication used here to increases tear production?"
 *        Q161 A "the superior formix"                — only option A misprints "fornix";
 *                                                      B, C and D all print "fornix"
 *        Q144 box "Dacrocystitis"                    — as printed
 *        Q156 box "dacroadenitis", "(MR!)"           — as printed; "(MR!)" is the bank's
 *                                                      own mangling of "(MRI)"
 *        Q162 box "more than10 seconds"              — missing space, as printed
 *
 * Read 2026-08-24. All five pages rendered at 200 dpi and read visually in full; the
 * whole answer page and six individual questions re-rendered at 320 dpi and re-read on
 * cropped columns before any key or typo was written down. No source file was modified,
 * renamed, moved or deleted.
 */

var GG_T4_STAGED = [

{ n:139, p:21, key:'B',
  stem:'In DCR, the opening is made at:',
  opts:['Superior meatus','Middle Meatus','Inferior meatus','Sphenopalatine fossa'],
  box:'(DCR): surgically connecting the lacrimal sac and the middle meatus of the nasal cavity with placement of either temporary or permanent tubes.',
  note:'Capitalisation of the options is the bank’s own — "Middle Meatus" capitalised, "Superior meatus" and "Inferior meatus" not.' },

{ n:140, p:21, key:'A',
  stem:'Schirmer’s test is used for diagnosing:',
  opts:['Dry eye','Infective keratitis','Watering eyes','Horner’s syndrome'] },

{ n:141, p:21, key:'D',
  stem:'3 months old infant with watering lacrimal sac on pressing causes regurgitation of mucous material. What is the appropriate treatment?',
  opts:['Dacryocystorhinostomy','Probing','Probing with syringing','Massage with antibiotics up to the age of 6 months'],
  box:'Birth → 6 months’ treatment: lacrimal sac massage +Topical antibiotics if discharge is present if failed probing if failed repeat it once if failed intubation of lacrimal passages if failed DCR',
  note:'The stem is printed without punctuation between "watering" and "lacrimal sac on pressing" — it reads as one run-on clause and is transcribed that way. The box’s ladder is printed with no punctuation between rungs either.' },

{ n:142, p:21, key:'D',
  stem:'The lacrimal secretory system consists of the following parts EXCEPT:',
  opts:['The lacrimal gland.','The accessory lacrimal gland.','The goblet cells','The lacrimal sac'],
  note:'EXCEPT is printed underlined. Trailing full stops are inconsistent in the source: A and B carry one, C and D do not.' },

{ n:143, p:21, key:'A',
  stem:'The first line of treatment in a case of congenital nasolacrimal duct obstruction during the lst 4 months of life is:',
  opts:['Massage and antibiotic eye drops','Probing and syringing.','Dacryocystectomy.','Dacryocystorhinostomy'],
  note:'"lst" is printed with a lowercase L, not the digit 1 — verified at 320 dpi.' },

{ n:144, p:21, key:'C',
  stem:'The most common causative organism in chronic dacryocystitis is',
  opts:['Pneumococci.','Diphtheria bacilli.','Staphylococci.','None of the above'],
  box:'The most common organisms of Dacrocystitis are staphylococci or streptococci.',
  note:'The stem is printed with no terminal colon. The box spells it "Dacrocystitis".' },

{ n:145, p:21, key:'C',
  stem:'Nasolacrimal duct obstruction commonly presents with:',
  opts:['Dry eye','Blepharitis','Epiphora','None of the above'] },

{ n:146, p:21, key:'C',
  stem:'Nasolacrimal duct opens in:',
  opts:['Upper nasal meatus','Middle nasal meatus','inferior nasal meatus','Nasopharynx'],
  note:'Option C is printed with a lowercase "inferior" while A, B and D are capitalised.' },

{ n:147, p:21, key:'C',
  stem:'Defective lacrimal drainage can result in any of these conditions EXCEPT',
  opts:['Chronic dacryocystitis','Stenosis of Lacrimal puncti','Trichiasis','mucocele of lacrimal sac'],
  note:'EXCEPT is printed underlined and the stem carries no terminal colon. Option D is printed with a lowercase "mucocele". ⚠️ Option B is a CAUSE of defective drainage rather than a result, so it is arguably a second correct answer to an EXCEPT stem — recorded, not corrected.' },

{ n:148, p:21, key:'D',
  stem:'A 70-year-old woman complains of chronic tearing and discharge. Irrigation of the lower canaliculus produces a mucopurulent regurgitation from the upper canaliculus after distending the lacrimal sac. Which of the following statements is true?',
  opts:['Jones one testing will reveal dye in the nose',
        'there is no probably a common canalicular obstruction',
        'This condition is usually cured permanently by antibiotics',
        'DCR is the treatment of choice'],
  note:'Option B’s word order is printed exactly as transcribed — "there is no probably a common canalicular obstruction". The intended sense is "there is probably no common canalicular obstruction", which by the printed irrigation result is TRUE; the malformed printing is the only thing that stops B being a second correct answer to a "which is true" stem. Recorded, not corrected.' },

{ n:149, p:22, key:'B',
  stem:'A 52-year-old woman complains of burning, gritty sensation, redness, and blurry vision toward the end of the day. Symptoms worsen with computer use. TBUT = 5 seconds. Schirmer = 14 mm. What is the MOST likely type of dry eye?',
  opts:['Aqueous deficiency','Evaporative','Neurotrophic','Reflex tearing dysfunction'],
  note:'MOST is printed in capitals. This stem is the antecedent of BOTH Q150 and Q151.' },

{ n:150, p:22, key:'C',
  stem:'In the previous case, which tear film layer is most likely defective?',
  opts:['Mucin layer','Aqueous layer','Lipid layer','All layers equally'],
  note:'BACK-REFERENCE → Q149 (the 52-year-old woman, TBUT 5 s, Schirmer 14 mm).' },

{ n:151, p:22, key:'B',
  stem:'In the previous case, Best first-line management?',
  opts:['Topical steroids','Artificial tears','Punctal occlusion','Oral doxycycline'],
  note:'⚠️ BACK-REFERENCE → Q149, NOT Q150. Q150 is itself a back-reference to Q149 and asks which LAYER is defective; "the previous case" is the patient, and the patient is Q149’s. The comma before "Best" and the capital B are printed.' },

{ n:152, p:22, key:'C',
  stem:'A 67-year-old man presents with chronic watering. Fluorescein disappears normally in one eye but persists >5 min in the other. What does this indicate?',
  opts:['Normal drainage','Punctal stenosis','Nasolacrimal duct obstruction','Overproduction of tears'],
  note:'This stem is the antecedent of Q153.' },

{ n:153, p:22, key:'A',
  stem:'In the previous case, Pressure over the sac produces no discharge, but watery reflux from the punctum. What is the most likely diagnosis?',
  opts:['Functional epiphora','Complete NLDO','Canalicular obstruction','Conjunctivitis causing reflex tearing'],
  note:'BACK-REFERENCE → Q152 (the 67-year-old man). The comma before "Pressure" and the capital P are printed. ⚠️ The two keys are in tension: Q152 keys the same patient as nasolacrimal duct obstruction and Q153 keys him as functional epiphora, and option B here restates Q152’s own key. Recorded, not corrected; both keys transcribed as printed.' },

{ n:154, p:22, key:'C',
  stem:'A 42-year-old woman presents with painful, red swelling below the medial canthus, very tender, with fever. Best immediate management?',
  opts:['Probing','DCR','Systemic antibiotics + warm compress','Topical lubricants'] },

{ n:155, p:22, key:'B',
  stem:'A 19-year-old male presents with 2-day history of severe pain in the superolateral orbit, S-shaped ptosis, redness, and fever. What is the Most common infectious cause?',
  opts:['Staphylococcus aureus','EBV','Herpes zoster','CMV'],
  note:'"Most" is printed with a capital M mid-sentence. This stem is the antecedent of Q156.' },

{ n:156, p:22, key:'B',
  stem:'In the previous case, what is the Best initial imaging?',
  opts:['Orbital X-ray','CT orbit','Sinus ultrasound','Skull X-ray'],
  box:'Investigations of dacroadenitis: 1. (CT) scan or (MR!) of the orbits with contrast. Evaluates lacrimal gland enlargement Rules out orbital cellulitis, abscess, or sinus involvement +anatomical details for potential surgical planning 2. X-ray Chest if sarcoidosis is suspected.',
  note:'BACK-REFERENCE → Q155 (the 19-year-old male with S-shaped ptosis). The box prints "dacroadenitis" and "(MR!)" — both as printed; "(MR!)" is the bank’s mangling of "(MRI)". "Best" carries a capital B mid-sentence.' },

{ n:157, p:23, key:'A',
  stem:'A 60-year-old man with long-standing rheumatoid arthritis complains of severe dryness, mucous strands, and punctate epithelial erosions on staining. Which medication used here to increases tear production?',
  opts:['Cyclosporine A 0.05%','Artificial tears','Steroid drops','Punctal plug'],
  note:'"Which medication used here to increases tear production?" is printed exactly so — verified at 320 dpi.' },

{ n:158, p:23, key:'B',
  stem:'Which of the following causes evaporative dry eye?',
  opts:['Vitamin A deficiency','Facial nerve palsy','Goblet cell destruction','Low Schirmer test'] },

{ n:159, p:23, key:'C',
  stem:'Which gland produces the tear film oily layer?',
  opts:['Lacrimal gland','Goblet cells','Meibomian glands','Glands of Krause'] },

{ n:160, p:23, key:'B',
  stem:'One of the following is not an indication for dacryo-cysto-rhinostomy:',
  opts:['Lacrimal fistula.','Acute dacryocystitis.','Chronic dacryocystitis.','Mucocele of the lacrimal sac.'],
  box:'In Acute dacryocystitis Surgery during the acute phase is contraindicated because: Increased risk of intraoperative bleeding +Infection can spread to orbit or face +poor healing',
  note:'"dacryo-cysto-rhinostomy" is hyphenated in the stem. "not" is NOT emphasised in the source.' },

{ n:161, p:23, key:'A',
  stem:'Several ducts pass from the orbital portion of the lacrimal gland and open into:',
  opts:['The lateral aspect of the superior formix.',
        'The medial aspect of the superior fornix.',
        'The medial aspect of the inferior fornix.',
        'The lateral aspect of the inferior fornix.'],
  note:'⚠️ Option A alone misprints "fornix" as "formix"; B, C and D all print "fornix" correctly. Verified at 320 dpi. The misprint sits on the keyed option.' },

{ n:162, p:23, key:'D',
  stem:'Tear film break-up time measures:',
  opts:['Tear film production.','Tear film distribution.','Tear film volume.','Tear film stability.'],
  box:'tear film breakup time (TBUT) normally more than10 seconds (if less, it is an indication of an unstable tear film)',
  note:'The box prints "more than10" with no space.' },

{ n:163, p:23, key:'B',
  stem:'Mother noticed in her 3-month-old infant continuous epiphora and frequent muco-purulent discharge. Your advice for primary treatment should be:',
  opts:['Syringing.','Antibiotics and massage.','Dacryo-cyst-ectomy.','Dacryo-cysto-rhinostomy.'],
  note:'The hyphenation of options C and D is the bank’s own.' },

{ n:164, p:23, key:'C',
  stem:'A 14-month-old child presented with recurrent redness and discharge in the left eye since birth. Regurge test was positive. Treatment should be in the form of:',
  opts:['Long term use of antibiotics.','Massage to the lacrimal passages.','Probing of the lacrimal passages.','Dacryo-cysto-rhinostomy'] }

];
