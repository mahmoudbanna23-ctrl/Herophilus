/* Grade Gain — ENT QB.pdf, NOSE chapter 5: "Nasal symptoms".
 * Questions book pp.69–71 (PDF 78–80); answers book pp.71–72 (PDF 80–81).
 *
 * ⚠️ 22 PRINTED WHERE THE CONTENTS PAGE PROMISES 21 — Q169 … Q190. Eleventh over-run.
 * ⚠️⚠️ BOTH PAGE DEFECTS AT ONCE, ON THE SAME SHEET.
 *    (a) **THE OVERLAP IS BACK** — book p.71 carries **Q187–Q190 in the LEFT column
 *        and the "Nasal symptoms — Answers" heading in the RIGHT.** The map calls
 *        p.71 the answer page; four questions are on it.
 *    (b) **THE ANSWERS RAN PAST IT** — they finish on **p.72**, where the map
 *        promised p.71. Second chapter running. The rule written in §14m
 *        (render one page past the last answer page) paid for itself immediately.
 * ✅ Ch.6 "Nasal fractures" opens at **Q191** on book p.73, so the chapter is exactly
 *    Q169–Q190 and the Nose section is one continuous run for the fifth time.
 * ⚠️ Q179 READS "What is the most feared complication of **this condition**?" — a
 *    LINKED-SET reference to Q178 (CSF rhinorrhoea). **The deck is SHUFFLED, so the
 *    stem must be repaired in questions.ent.js to name the condition.**
 * ⚠️ Q190 is a FILL-IN-THE-BLANK stem: "________ is the most common cause of nasal
 *    obstruction."
 * ⚠️ Q185's printed box is TRUNCATED MID-SENTENCE — it ends "- In Common cold →
 *    mucosa is wet an". The missing word is almost certainly "and red", which is what
 *    the question's own option d asserts; recorded as printed and completed in the
 *    entry with the completion marked.
 * ⚠️ Q198 (next chapter) is a TRUE/FALSE with only two options — noted here because
 *    it is visible on p.73 and is a shape this bank has not used before.
 *
 * ✅ THE SIX-STAGE SWEEP HAS BEEN RUN against all 1,029 existing MCQs.
 *    **⚠️ STAGES A AND B RETURNED NOTHING AT ALL — no verbatim reprint in the chapter.**
 *    **EXACTLY ONE FOLD, and stages A and B both missed it:**
 *      Q177 → `entep-nose-72` (p.1073) — identical stem and key; **stage B failed only
 *      because Grade Gain abbreviates option d to "over the bridge of nose & between
 *      eyes" against endpoint's "over the bridge of the nose and between the eyes".**
 *      **Stage E and stage F both scored it 1.00.** Neither bank prints a box, so the
 *      held entry's authored marker stays.
 *
 *    **SIX NEAR-MISSES HELD, and every one is a REPLACED distractor:**
 *      Q186 vs `entep-nose-37`  — adult foetid discharge; *acute viral rhinitis* and
 *        *nasal polyps* replace *cancer* and *allergic rhinitis*. Two replaced.
 *      Q183 vs `entep-nose-71`  — the child version; wholly different option set. This
 *        fact is now printed **seven** times across the two banks, each with its own
 *        menu (`entep-nose-18`, `-71`, `-100`, `-107`, `-111`, `-114`). All kept.
 *      Q178 vs `entep-nose-73`  — CSF rhinorrhoea on straining; two replaced options.
 *        Same family as `entep-nose-19`, `-28`, `-59`, `-103`, `entep-mfe5-8`.
 *      Q179 vs `entep-nose-43`  — most feared complication of a CSF leak; endpoint's
 *        stem is post-acoustic-neuroma surgery and its options are otological.
 *      Q173 vs `entep-mfe4-15`  — pulsatile headache → migraine; *cluster headache* and
 *        *sinusitis* replace *chronic sinusitis* and *septal deviation*.
 *      **Q190 vs `entqb-nose3-127` — WITHIN THIS BANK.** Both key *common cold* for the
 *        commonest cause of nasal obstruction, but two of four options are replaced, so
 *        it is a new question rather than a reprint. **A within-bank match takes no
 *        `alsoIn` either way**; the point is that it is held twice, not once.
 *
 *    **Stage E/F false positives worth naming:** Q169 scored E 0.63 against
 *    `entqb-ear4-119` and Q181/Q187 scored E 0.50 against `entqb-ear3-84` — all three
 *    on the stock openings *"which of the following statements is true regarding…"* and
 *    *"all of the following are causes of … except"*. **Discount the boilerplate clause
 *    by eye before reading a stage-E score.**
 *
 * ⚠️ Q189 IS THE SUBSET SHAPE AGAIN, AND REVERSED. It asks the commonest **laterality**
 *    of nasal obstruction and keys **alternating** over a list that also offers
 *    **bilateral** — while `L31) nasal symptoms 1.pdf` states that *"alternating nasal
 *    obstruction is actually a variety of BILATERAL nasal obstruction."* So the key is
 *    a **member** of another option. Ch.4's Q160 had the same shape and keyed the
 *    **umbrella**; this one keys the **specific**. Recorded, not corrected.
 *
 * Verbatim as printed. Repairs are applied in questions.ent.js, never here.
 */
var GGN5_STAGED = [

{ n:169, page:69, apage:71, stem:'Which of the following statements is true regarding primary headaches?',
  options:['Primary headaches are more common in males than females','Cluster headaches are more common in females than in males','Tension-type headache is the most common type of headache worldwide','Primary headaches are always related to sinusitis'],
  answer:2, exp:null },

{ n:170, page:69, apage:71, stem:'Which of the following is true about headaches and rhinitis?',
  options:['Nasal irritation can trigger tension-type headaches','Both allergic rhinitis and non-allergic rhinitis can irritate the trigeminal nerve, potentially triggering migraines','Migraine headaches are exclusively caused by allergic rhinitis','Rhinitis has no effect on headache conditions'],
  answer:1, exp:null },

{ n:171, page:69, apage:71, stem:'Which of the following is the most likely cause of headache due to nasal causes?',
  options:['Irritation of the olfactory nerve','Irritation of the vagus nerve','Irritation of the trigeminal nerve','Irritation of the glossopharyngeal nerve'],
  answer:2, exp:null },

{ n:172, page:69, apage:71, stem:'Frontal headache is:',
  options:['Cluster headache','Vacuum headache','Tension headache','Temporal headache'],
  answer:1,
  exp:'Acute sinusitis causes facial pain rather than headache.\nThis includes "vacuum headache" (morning pain over the forehead due to obstruction of the frontal recess during sleep)\nMechanism: In patients with sinusitis, the frontal sinus, which opens in frontal recess, which is like a tube, when they sleep at night this tube closes and the patient suffers from vacuum headache in the morning due to negative pressure in the frontal sinus. This causes people to correlate headache especially in the morning with sinusitis and after that we knew that it is facial pain not headache.' },

{ n:173, page:69, apage:71, stem:'A male has pulsatile headache which increases on moving, his father had the same condition, and he also experiences photophobia. What is the most likely diagnosis?',
  options:['Migraine','Tension headache','Cluster headache','Sinusitis'], answer:0, exp:null },

{ n:174, page:69, apage:71, stem:'The commonest cause of 1ry headache is:',
  options:['Tension headache','Migraine','Cluster headache','Sinus headache'], answer:0, exp:null },

{ n:175, page:69, apage:71, stem:'All these nerves go through cavernous sinus except',
  options:['Trochlear nerve','Abducent nerve','Oculomotor nerve','Glossopharyngeal N'],
  answer:3, exp:null },

{ n:176, page:69, apage:72, stem:'About migraine all are true except',
  options:['It is strictly localized to one side','It is associated with photophobia','Associated with intolerance to noise','It is associated with nausea'],
  answer:0,
  exp:'Migraine is not always unilateral, if classic migraine with aura it will be unilateral, but it may come with dizziness or bilateral which is more common than unilateral.' },

{ n:177, page:69, apage:72, stem:'Headache due to sphenoid sinusitis is typically at:',
  options:['Cheek','Forehead','Occipital region','over the bridge of nose & between eyes'],
  answer:2, exp:null },

{ n:178, page:69, apage:72, stem:'A 30-year-old male presents with headache and clear, watery nasal discharge from his right nostril. He reports that the discharge worsens when he bends over or strains. What is the most likely diagnosis?',
  options:['Allergic rhinitis','Acute sinusitis','CSF rhinorrhea','Nasal foreign body'],
  answer:2, exp:null },

{ n:179, page:70, apage:72, stem:'What is the most feared complication of this condition?',
  options:['Meningitis','Subdural hematoma','Septal perforation','Sinus thrombosis'],
  answer:0, exp:null,
  flag:'⚠️ LINKED SET — "this condition" is Q178\'s CSF rhinorrhoea. The deck is shuffled, so the stem MUST be repaired to name it.' },

{ n:180, page:70, apage:72, stem:'Which of the following tests is the most specific for diagnosing cerebrospinal fluid (CSF) rhinorrhea?',
  options:['CT scan with contrast','Beta-2 transferrin test','MRI with gadolinium','Nasal endoscopy'],
  answer:1,
  exp:'Beta trace protein and beta 2 transferrin' },

{ n:181, page:70, apage:72, stem:'All of the following are causes of fetid nasal discharge except:',
  options:['Foreign body','Odontogenic sinusitis','Acute viral rhinitis','Fungal infection'],
  answer:2, exp:null },

{ n:182, page:70, apage:72, stem:'The most common structural cause of nasal obstruction in children is:',
  options:['Adenoidal hypertrophy','Nasal polyps','Choanal atresia','Foreign body'],
  answer:0, exp:null },

{ n:183, page:70, apage:72, stem:'Unilateral discharge in a child with fetid odor is most likely caused by:',
  options:['Foreign body until proved otherwise','Odontogenic sinusitis','Acute bacterial rhinosinusitis','Chronic rhinosinusitis'],
  answer:0, exp:null },

{ n:184, page:70, apage:72, stem:'A 32-year-old male presents with a 2-week history of clear, watery discharge from his left nostril. He reports that the discharge started after a head injury from a fall. Over the past few days, he has developed a severe headache, fever, and nausea. He also reports photophobia and stiff neck. The patient denies any history of recent sinus infections or allergic rhinitis. On examination, there is a positive Brudzinski\'s sign, and the patient appears to be photophobic. CT of the head shows evidence of a skull base fracture. Further analysis of the nasal discharge reveals the presence of beta-2 transferrin. What is the most likely diagnosis?',
  options:['Acute viral rhinosinusitis','Cerebrospinal fluid (CSF) rhinorrhea with secondary bacterial meningitis','Chronic rhinosinusitis','Nasal polyposis with secondary infection'],
  answer:1, exp:null },

{ n:185, page:70, apage:72, stem:'Allergic rhinitis symptoms may be confused with early common cold, but they can be differentiated by the following:',
  options:['In allergic rhinitis, mucosa is red & wet','In common cold, mucosa is pale & blue','In allergic rhinitis, mucosa is pale & blue','In common cold, mucosa is dry & red'],
  answer:2,
  exp:'Allergic rhinitis symptoms may be confusing with early common cold but later, we differentiate by the following:\n- In Allergic rhinitis → mucosa is pale and blue\n- In Common cold → mucosa is wet an[TRUNCATED — the printed box ends mid-word]',
  flag:'⚠️ The printed box is TRUNCATED mid-sentence: "- In Common cold → mucosa is wet an". Recorded as printed.' },

{ n:186, page:70, apage:72, stem:'Unilateral discharge in an adult with fetid odor is most likely caused by:',
  options:['Foreign body','Odontogenic sinusitis','Acute viral rhinitis','Nasal polyps'],
  answer:1, exp:null,
  flag:'Sweep candidate → `entep-nose-37` (p.971), which keys dental sinusitis for an adult.' },

{ n:187, page:71, apage:72, stem:'All of the following are mucosal causes of nasal obstruction EXCEPT:',
  options:['Allergic rhinitis','Hypertrophic rhinitis','Adenoid hypertrophy','Atrophic rhinitis'],
  answer:2, exp:null,
  flag:'⚠️ On the page whose right column begins the answers.' },

{ n:188, page:71, apage:72, stem:'Alternating/Fluctuating nasal obstruction is most commonly associated with which of the following conditions?',
  options:['Deviated nasal septum','Allergic rhinitis','Antrochoanal polyp','Adenoid hypertrophy'],
  answer:1,
  exp:'Alternating and fluctuating obstruction is due to mucosal cause',
  flag:'⚠️ On the page whose right column begins the answers.' },

{ n:189, page:71, apage:72, stem:'The most common type of nasal obstruction regarding laterality is:',
  options:['Bilateral nasal obstruction','Unilateral nasal obstruction','Alternating nasal obstruction','Intermittent nasal obstruction'],
  answer:2, exp:null,
  flag:'⚠️ On the page whose right column begins the answers.' },

{ n:190, page:71, apage:72, stem:'________ is the most common cause of nasal obstruction.',
  options:['Nasal polyps','Allergic rhinitis','Adenoid hypertrophy','Common cold'],
  answer:3, exp:null,
  flag:'⚠️ Fill-in-the-blank stem. ⚠️ On the page whose right column begins the answers. Sweep candidate → `entqb-nose4-127`, same fact over a different option set.' }

];
