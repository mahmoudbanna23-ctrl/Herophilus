/* Grade Gain — ENT QB.pdf, NOSE chapter 4: "Rhinosinusitis".
 * Questions book pp.64–66 (PDF 73–75); answers book pp.67–68 (PDF 76–77).
 *
 * ⚠️ 23 PRINTED WHERE THE CONTENTS PAGE PROMISES 22 — Q146 … Q168. Tenth over-run.
 * ⚠️ THE ANSWERS RUN TO **TWO** PAGES, pp.67–68, where the map promised one.
 *    The map is right about WHERE answers begin and wrong about how far they run;
 *    p.68 was rendered only because the tail of Q161's box ran off p.67.
 *    **Render one page past the last answer page every time.**
 * ✅ NO OVERLAP — p.66 ends the questions cleanly, p.67 is answers only.
 *    Second Nose chapter running without it. Five of thirteen chapters overlap.
 * ✅ OPENS AT Q146 AND CH.5 OPENS AT Q169 (book p.69, "Nasal symptoms") — the Nose
 *    section is one continuous run, confirmed a third time. Running header reads
 *    `Chapter 2: Rhinosinusitis` — number = section, title = topic.
 * ⚠️ Q166 and Q167 print only THREE options each.
 * ⚠️ Q155, Q158, Q160 and Q164 print their numbers twice ("164.164.Criteria…").
 * ⚠️ Q152's option c reads "Streptococcus influenza", which is not an organism —
 *    it conflates *Streptococcus pneumoniae* with *Haemophilus influenzae*. The
 *    printed key (Pseudomonas) is unaffected and correct; the OPTION is defective.
 * ⚠️ Q161's explanation box runs across the page break, option by option (a–d).
 *
 * ✅ THE SIX-STAGE SWEEP HAS BEEN RUN against all 1,010 existing MCQs.
 *    **FOUR CROSS-BANK FOLDS CONFIRMED, all into endpoint:**
 *      Q150 → `entep-nose-54`  (p.1027)  verbatim, stage A
 *      Q153 → `entep-nose-24`  (p.937)   same four options reordered, stage B
 *      Q165 → `entep-nose-71`  (p.1071)  verbatim (endpoint prints "in an child")
 *      Q166 → `entep-mfe4-20`  (p.2312)  same vignette, ONE DROPPED distractor
 *    ⚠️ **Q150 CONVERTS AUTHORED TEXT INTO SOURCED TEXT — the FOURTH occurrence.**
 *    `entep-nose-54` prints no box and carries the authored marker; Grade Gain's
 *    Q150 DOES print one. **Marker off, box quoted in.**
 *    ⚠️ **Q166's box is FULLER than endpoint's** — it adds the plateau-then-recovery
 *    course and the double-sickening relapse. Fold the addition into the entry.
 *
 *    **THREE NEAR-MISSES DELIBERATELY HELD, each by a settled rule:**
 *      Q154 vs `entep-mfe4-28` — same vignette, but *atrophic rhinitis* REPLACES
 *        *simple fungal sinusitis*. **A replaced distractor is a new question**, and
 *        it genuinely moves the discrimination from fungal-vs-fungal to
 *        fungal-vs-non-fungal. Both held, cross-referenced.
 *      Q155 vs `entep-nose-4` — same four options (bar the word "Left") and the same
 *        key, but a different vignette: 35 vs 25 years, a 10-day history, pain worse
 *        on bending. **Same options + same key + different stem is not a fold.**
 *      Q158 vs `entep-nose-23`, Q159 vs `entep-nose-17` — same fact and key, wholly
 *        different distractors (endpoint offers surgical alternatives, Grade Gain
 *        medical ones), so each tests something different. Both held.
 *
 *    **Stage E and F false positives worth naming:** Q162 scored 0.63 against
 *    `entqb-ear4-119` on the shared boilerplate *"which of the following statements
 *    is true regarding…"*, and Q146 scored F 0.71 against `entep-nose-45` on sinus
 *    NAMES alone while asking a completely different question (anterior *group*
 *    membership, not drainage site). **The ranking is a shortlist, never a verdict.**
 *
 * ⚠️ THE BANK CONTRADICTS ITSELF ON THE CHARACTER OF SINUSITIS PAIN. **Q164 keys
 *    "throbbing" as NOT a criterion**, while **Q155's own vignette describes the
 *    pain as "a dull, throbbing pain localized over his left cheek."** Both are held
 *    and the tension is recorded in each; the option lists differ, so neither key is
 *    correctable — see the note in `entqb-nose4-164`.
 *
 * ⚠️ FOUR of the 19 written entries land in `ent-sinuscomp`, **the chapter whose
 *    lecture (the missing `L28`) does not exist.** See ledger §14l.
 *
 * Verbatim as printed. Repairs are applied in questions.ent.js, never here.
 */
var GGN4_STAGED = [

{ n:146, page:64, apage:67, stem:'Which of the following sinuses are part of the anterior group?',
  options:['Maxillary, frontal, anterior ethmoidal','Frontal, sphenoidal, posterior ethmoidal','Anterior ethmoidal, sphenoidal, maxillary','Posterior ethmoidal, sphenoidal'],
  answer:0,
  exp:'- Anterior group: Maxillary, Frontal, Anterior ethmoidal sinuses\n- Posterior group: Posterior ethmoidal - Sphenoidal sinuses' },

{ n:147, page:64, apage:67, stem:'Which of the following correctly describes the sinuses epithelium?',
  options:['Stratified squamous epithelium with goblet cells','Ciliated epithelium containing goblet cells','Columnar epithelium with no goblet cells','Non-ciliated epithelium that secretes mucus only during infection'],
  answer:1, exp:null },

{ n:148, page:64, apage:67, stem:'How often do humans subconsciously swallow mucus secreted by the respiratory epithelium?',
  options:['Every 10 seconds','Every 4 seconds','Every 30 seconds','Every 60 seconds'],
  answer:1, exp:null },

{ n:149, page:64, apage:67, stem:'What is the duration of inflammation in subacute rhinosinusitis?',
  options:['Less than 4 weeks','Between 4 and 12 weeks','More than 12 weeks','Exactly 4 weeks'],
  answer:1, exp:null },

{ n:150, page:64, apage:67, stem:'The nasal discharge in sinusitis of dental origin may be:',
  options:['Bilateral and watery','Unilateral and watery','Unilateral and foetid','Bilateral and mucopurulent'],
  answer:2,
  exp:'Unilateral offensive fetid discharge in adult = sinusitis of dental origin till proved otherwise ▪ If the same complain from a child = foreign body' },

{ n:151, page:64, apage:67, stem:'The most common etiology for acute sinusitis:',
  options:['Rhinogenic infection','Dental','Environmental','trauma'], answer:0, exp:null },

{ n:152, page:64, apage:67, stem:'Acute rhinosinusitis is caused by all of the following except:',
  options:['Pseudomonas aeruginosa','Haemophilus influenza','Streptococcus influenza','Moraxella catarrhalis'],
  answer:0, exp:null,
  flag:'⚠️ Option c "Streptococcus influenza" is not an organism — it conflates S. pneumoniae with H. influenzae. The key is unaffected.' },

{ n:153, page:64, apage:67, stem:'Which teeth are most intimately related to the maxillary sinus?',
  options:['The canine and first premolars','The second premolar and first molar','The wisdom teeth','The incisor and canine teeth'],
  answer:1, exp:null,
  flag:'Sweep candidate → `entep-nose-24` (p.937), which keys the same pair.' },

{ n:154, page:64, apage:67, stem:'10 year old male with renal failure, nasal blockage, recurrent blood stained nasal discharge and necrotic black tissue covering the middle turbinate, what is the most possible diagnosis?',
  options:['allergic fungal sinusitis','atrophic rhinitis','complicated sinusitis','invasive fungal sinusitis'],
  answer:3, exp:null },

{ n:155, page:64, apage:67, stem:'35-year-old male presents with a 10-day history of facial pain, nasal congestion, purulent nasal discharge. He describes a dull, throbbing pain localized over his left cheek, which worsens when bending forward. He also mentions a recent dental procedure involving the left second premolar. Examination reveals tenderness over the left maxillary region and mild erythema. What is the diagnosis?',
  options:['Antrochoanal polyp','Acute maxillary sinusitis','common cold','Acute bacterial pansinusitis'],
  answer:1, exp:null, flag:'The key prints its number twice — "155.155.Correct answer:".' },

{ n:156, page:65, apage:67, stem:'A 28-year-old female presents with a 12-day history of nasal congestion, clear nasal discharge, and mild fatigue. Initially, the symptoms improved after one week but then worsened significantly. She now reports facial pain and pressure over her forehead and cheeks, thick yellow-green nasal discharge, and a low-grade fever. She denies any significant medical history but mentions that her symptoms started as a common cold. Examination reveals tenderness over the maxillary and frontal sinuses and inflamed nasal mucosa. What is the diagnosis?',
  options:['Chronic rhinosinusitis','Acute bacterial rhinosinusitis','Allergic rhinitis','Viral upper respiratory infection'],
  answer:1,
  exp:'Patient with common cold usually has symptoms increasing in 3 or 4 days to a plateau then recovery occurs. If symptoms persist more than 10 days = acute bacterial rhinosinusitis\nOr if patient starts to recover and all of a sudden gets severe symptoms maybe after 2 or 3 or 5 days → These features points to development of acute bacterial rhinosinusitis' },

{ n:157, page:65, apage:67, stem:'Which of the following is the most appropriate treatment for acute bacterial rhinosinusitis?',
  options:['Oral antibiotics (e.g., amoxicillin or amoxicillin-clavulanate) for 10 days','Intranasal corticosteroids alone','Decongestants without antibiotics','Symptomatic treatment with antihistamines only'],
  answer:0, exp:null },

{ n:158, page:65, apage:67, stem:'Which of the following is the most appropriate investigation for chronic sinusitis?',
  options:['Nasal endoscopy','Chest X-ray','CT scan of the sinuses','MRI of the brain'],
  answer:2,
  exp:'Investigations is important in chronic rhinosinusitis (mandatory for diagnosis)',
  flag:'The key prints its number twice — "158.158.Correct answer:".' },

{ n:159, page:65, apage:67, stem:'Which of the following is the best method used to treat chronic sinusitis after failure of medical treatment?',
  options:['Oral antibiotics','Nasal decongestants','Functional endoscopic sinus surgery (FESS)','Antihistamines'],
  answer:2, exp:null },

{ n:160, page:65, apage:67, stem:'A 7-year-old child presents to the clinic with swelling around the left eye that developed two days after experiencing a respiratory tract infection (cold). The swelling is progressively worsening, and the child also complains of pain and tenderness over the affected area. The child has a history of nasal congestion, thick nasal discharge, and a low-grade fever that started approximately one week ago. There is no history of trauma or insect bites. On examination, you notice periorbital swelling, erythema, and mild proptosis of the left eye. The child has tenderness over the maxillary sinus. The child has a history of frequent upper respiratory infections. What is the most likely diagnosis?',
  options:['Acute viral conjunctivitis','Orbital cellulitis','Complicated rhinosinusitis','Allergic reaction'],
  answer:2,
  exp:'- Orbital complications are more serious. More in children due to weak ossification\n- Child with eye swelling during respiratory tract infection = complicated rhinosinusitis',
  flag:'The key prints its number twice — "160.160.Correct answer:".' },

{ n:161, page:65, apage:67, stem:'A 32-year-old male presents with a 2-week history of severe frontal headache, fever, and nasal congestion. He reports worsening symptoms despite taking over-the-counter medications. Recently, his family has noticed a change in his behavior, including irritability and difficulty concentrating. On examination, he has tenderness over the frontal sinus and mild swelling of the forehead. What is the most likely diagnosis?',
  options:['Acute viral rhinosinusitis','Chronic rhinosinusitis','Frontal lobe abscess secondary to complicated sinusitis',"Pott's puffy tumor"],
  answer:2,
  exp:'Sinusitis is the most common cause of frontal lobe abscesses, as infection can spread from the frontal sinus to the brain.\n\na. Acute viral rhinosinusitis: Viral sinusitis typically resolves within 7-10 days without major complications. The symptoms of irritability, behavioral changes, and persistent issues beyond the usual timeframe indicate progression beyond viral rhinosinusitis.\n\nb. Chronic rhinosinusitis: Chronic sinusitis involves symptoms lasting 12 weeks or more and usually does not cause acute changes in personality or systemic signs like fever. This option does not fit the acute progression described.\n\nc. Frontal lobe abscess secondary to complicated sinusitis (Correct Answer): The patient\'s frontal headache, personality changes, and progression of sinusitis despite treatment strongly suggest a frontal lobe abscess, a complication of untreated or inadequately treated frontal sinusitis. The frontal lobe abscess results from the proximity of the frontal sinus to the brain, leading to direct extension or hematogenous spread of the infection.\n\nd. Pott\'s puffy tumor: While this condition is a complication of frontal sinusitis and involves swelling of the forehead (due to subperiosteal abscess), there is no mention of the classic "boggy swelling" or fluctuant mass in the forehead that distinguishes this condition. The symptoms described (behavioral changes and irritability) better align with a frontal lobe abscess.',
  flag:'⚠️ The box runs ACROSS THE PAGE BREAK — it begins on p.67 and options b–d finish on p.68.' },

{ n:162, page:66, apage:68, stem:'Which one of the following statements is true regarding complications in rhinosinusitis?',
  options:['Usually managed medically.','An orbital subperiosteal abscess may occur especially in young children.','Brain abscess in complicated cases occur in the temporal lobe of the brain.','Only occur in long standing neglected cases'],
  answer:1,
  exp:'C. is not correct as sinusitis is the commonest cause of frontal lobe abscess.\nD. is not correct as complications occurs in acute and chronic rhinosinusitis. But more on top of acute rhinosinusitis' },

{ n:163, page:66, apage:68, stem:"Pott's puffy tumor is a complication of:",
  options:['Chronic maxillary sinusitis','Acute ethmoidal sinusitis','Frontal sinusitis','Sphenoidal sinusitis'],
  answer:2, exp:null },

{ n:164, page:66, apage:68, stem:'Criteria of sinusitis pain are characterized by …… except',
  options:['Throbbing','Dull aching','Increase with straining','Localized over the sinus'],
  answer:0, exp:null,
  flag:'The stem prints its number twice — "164.164.Criteria of sinusitis pain…".' },

{ n:165, page:66, apage:68, stem:'Unilateral fetid (offensive) nasal discharge in a child may be caused by:',
  options:['Deviated septum.','Antrochoanal polyp.','Adenoids.','F.B in the nose'],
  answer:3, exp:null },

{ n:166, page:66, apage:68, stem:'25 year old female had common cold 10 days ago then she developed fever, nasal blockage, mucopurulent rhinorrhea and tenderness over cheek what is the diagnosis?',
  options:['Acute viral rhinosinusitis','acute bacterial rhinosinusitis','Fungal rhinosinusitis'],
  answer:1,
  exp:'Patient with common cold usually has symptoms increasing in 3 or 4 days to a plateau then recovery occurs. If symptoms persist more than 10 days = acute bacterial rhinosinusitis',
  flag:'Only three options printed.' },

{ n:167, page:66, apage:68, stem:'Most important sign signifying that common cold is converted to acute bacterial rhinosinusitis',
  options:['Headache','Double sickening','Mucopurulent discharge'],
  answer:1, exp:null, flag:'Only three options printed.' },

{ n:168, page:66, apage:68, stem:'A 35-year-old patient presents with unilateral nasal discharge with a fetid odor, tenderness over the maxillary sinus, and a history of a recent dental procedure. What is the best treatment approach?',
  options:['Broad-spectrum antibiotics with dental consultation','Tooth extraction','Endoscopic sinus surgery','Intranasal corticosteroids'],
  answer:0, exp:null }

];
