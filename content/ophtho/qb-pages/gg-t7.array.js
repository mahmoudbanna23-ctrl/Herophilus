/* Grade Gain Ophthalmology — Topic 7, "Sclera"
 * VERBATIM staging record. Source: Semester 8\Opthalmo\Questions\ophthalmology qb.pdf
 *
 * PAGE MAP ACTUALLY USED (offset verified against the printed footer: PDF = book + 7;
 * PDF 51 carries footer "| P a g e 44", PDF 52 carries "| P a g e 45")
 *   book p.44 (PDF 51) — Q289–Q296  (8)  ALL EIGHT QUESTIONS, both columns
 *                                        + topic banner "Sclera / Questions"
 *   book p.45 (PDF 52) — ANSWERS Q289–Q296, ALL EIGHT KEYS ON THIS ONE PAGE
 *   book p.46 (PDF 53) — topic 8 "Cornea" begins at Q297  → boundary confirmed
 *
 * ✅ THE "Page As" FIGURE IS CORRECT THIS TIME. The contents page says answers
 *    start p.45 and every one of the 8 keys is on p.45 — the answer block ends
 *    with Q296 in the right column and the rest of the page is white. This is the
 *    second correct "Page As" running (topic 4 was also correct); the p.14/p.15
 *    and p.19/p.20 overruns of topics 2 and 3 did not recur. Measured, not
 *    assumed: p.46 was rendered and read in full and carries no key of any kind,
 *    only the Cornea banner and Cornea questions from Q297.
 *
 * ✅ NO QUESTION TAIL SHARES THE ANSWER PAGE. Book p.45 opens with the banner
 *    "Sclera / Answers" in the LEFT column; there is no question anywhere on it.
 *    (A faint show-through of p.44's Q293 stem and its options A/B is visible
 *    behind the banner — that is the reverse of the sheet bleeding through the
 *    scan, not printed content. Not transcribed. The defect the brief warned
 *    about on topic 4 recurs here in the same place and the same way.)
 *
 * ⚠️ THE BRIEF WAS WRONG ABOUT THE NUMBERING. It gave the staging shape as
 *    `{ n:165, … }` and the draft id as `opqb-t7-165`, on the reasoning that
 *    "topic 4 ended at Q164". Topics 5 (Eyelid, from Q165) and 6 intervene:
 *    topic 7 actually runs Q289–Q296, and the ids written are `opqb-t7-289`
 *    … `opqb-t7-296`. Verified from the printed numbers on book p.44 and from
 *    p.43 of topic 6 not being needed — Q289 is the first number under the
 *    "Sclera / Questions" banner.
 *
 * COUNT: 8 printed, Q289–Q296 continuous with no gap and no repeat.
 *        The contents page promised 8 and was EXACT — the fifth exact promise
 *        running on this bank (71, 41, 26, 26, 8).
 *
 * EXPLANATION BOXES: 3 printed — Q290, Q291, Q294.
 *        The other 5 print the key letter alone.
 *        (Topic 1 printed 0 in 71, topic 2 printed 8 in 41, topic 3 printed 4
 *         in 26, topic 4 printed 6 in 26. Box presence remains a property of
 *         the PAGE, not of the bank.)
 *
 * BACK-REFERENCES: 1 — Q295 → Q294.
 *        Q295 says "In the previous Q" and its antecedent IS the previous
 *        number this time (unlike topic 4's Q151, whose antecedent was Q149).
 *        Verified by reading Q294 itself: it is the only preceding stem that
 *        describes a patient at all, and Q295 asks for "Best treatment?" which
 *        only makes sense against a diagnosis. The restatement written into the
 *        draft names the CLINICAL PICTURE (61-year-old with severe RA,
 *        excruciating pain, scleral thinning, uveal exposure, violaceous hue)
 *        and deliberately does NOT name the diagnosis, because naming it would
 *        answer Q294.
 *
 * IMAGES: none. No figure, photograph or scan is printed anywhere in topic 7.
 *
 * VERBATIM TYPOS AND ODDITIES KEPT (Q294, Q295 and Q296 re-rendered at 320 dpi
 * and re-read on cropped columns before anything was written down):
 *        Q294  "What is the most probable Diagnosis?"  — capital D, mid-sentence
 *        Q295 D "Immediate Ct brain"                   — lowercase t in "CT"
 *        Q295 B "Systemic          steroids          +" — the bank's justified
 *                                                       spacing; written as a
 *                                                       normal single-spaced
 *                                                       string in the draft
 *        Q296  "Idiopathic"                           — checked at 320 dpi; it
 *                                                       is spelled correctly
 *        Q290 box "(More Common)"                     — capitals as printed
 *        Q291 box "Blanching of the conjunctival is"   — "conjunctival" for
 *                                                       "conjunctiva", as printed
 *        Q294 box "- Necrotizing anterior scleritis is the most severe form:"
 *                                                     — the bank bolds and
 *                                                       underlines through "is"
 *
 * Read 2026-08-24. All three pages rendered at 200 dpi and read visually in
 * full; the right column of book p.44 re-rendered at 320 dpi and re-read on two
 * crops before any key or typo was written down. No source file was modified,
 * renamed, moved or deleted.
 */

var GG_T7_STAGED = [

{ n:289, p:44, key:'D',
  stem:'Commonest cause of posterior staphyloma is:',
  opts:['Glaucoma','Retinal detachment','Iridocyclitis','High myopia'] },

{ n:290, p:44, key:'A',
  stem:'Nodular episcleritis is characterized by all of the following EXCEPT',
  opts:['It is more common in males with a peak incidence in the 4th decade.',
        'It may be associated with rheumatoid arthritis.',
        'Topical steroids with systemic indomethacin are effective in its treatment.',
        'May be associated with mild stromal corneal infiltration.'],
  box:'1. Nodular: a discrete, elevated area of inflamed episcleral tissue is present. (Less acute onset and more prolonged course) 2. Simple: (More Common) vascular congestion is present in the absence of an obvious nodule. It can be either: - Sectoral (2/3 of cases) OR - Diffuse (1/3 of cases)',
  note:'"EXCEPT" is underlined in the stem. The box is printed under Q290 but answers Q293 as much as it answers Q290 — it is the only place in the topic where the frequencies of the episcleritis subtypes are printed.' },

{ n:291, p:44, key:'A',
  stem:'Phenylephrine 2.5% causes blanching in:',
  opts:['Conjunctivitis','Episcleritis','Scleritis','Uveitis'],
  box:'Differentiation between episcleritis and conjunctivitis can be done by instilling a drop of phenylephrine 2.5 % in the affected eye. Blanching of the conjunctival is seen in conjunctivitis with the disappearance of hyperemia while not in episcleritis',
  note:'The stem prints "2.5%" closed up; the box prints "2.5 %" with a space. Both kept as printed in their own field.' },

{ n:292, p:44, key:'B',
  stem:'Pain is the MOST important indicator differentiating:',
  opts:['Conjunctivitis vs episcleritis','Episcleritis vs scleritis','Scleritis vs keratitis','Pterygium vs pinguecula'] },

{ n:293, p:44, key:'C',
  stem:'Most common form of episcleritis:',
  opts:['Nodular','Simple diffuse','Simple sectoral','Necrotizing'],
  note:'No box of its own; the frequencies that justify the key are printed in Q290’s box (sectoral 2/3, diffuse 1/3, simple more common than nodular). Option D "Necrotizing" is not a form of EPISCLERITIS at all in this bank’s own sources — it is a form of scleritis.' },

{ n:294, p:44, key:'B',
  stem:'A 61-year-old woman with severe RA presents with excruciating eye pain, thinning of sclera, and exposure of uveal tissue. The eye shows a violaceous hue. Vision is reduced. What is the most probable Diagnosis?',
  opts:['Scleromalacia perforans','Necrotizing scleritis','Nodular episcleritis','Simple episcleritis'],
  box:'1. Anterior scleritis: - Inflammation anterior to the insertion of the rectus muscles. - Diffuse, nodular, or necrotizing in appearance. - Necrotizing anterior scleritis is the most severe form: • Characterized by severe pain and extreme scleral tenderness. • With or without necrosis and exposure of the choroid. • Scleromalacia perforans is a rare form of necrotizing anterior scleritis without pain',
  note:'"Diagnosis" is capitalised mid-sentence, as printed. The box’s last bullet is what excludes option A: scleromalacia perforans is PAINLESS and this patient has excruciating pain.' },

{ n:295, p:44, key:'B',
  stem:'In the previous Q, Best treatment?',
  opts:['Oral NSAIDs','Systemic steroids + immunosuppressants','Cold compress only','Immediate Ct brain'],
  note:'⚠️ BACK-REFERENCE. "the previous Q" is Q294 — verified by reading Q294 itself; it is the only preceding stem describing a patient. Option B is printed with the bank’s justified spacing ("Systemic        steroids        +" then "immunosuppressants" on the next line); collapsed to single spaces here. Option D prints "Ct" with a lowercase t.' },

{ n:296, p:44, key:'C',
  stem:'A 27-year-old female presents with mild redness in her right eye. She reports no visual loss and only mild irritation. On exam: sectoral redness, mobile episcleral nodule, no tenderness, normal vision. What is the most common etiology?',
  opts:['RA','Infection','Idiopathic','Trauma'],
  note:'"Idiopathic" re-checked at 320 dpi — spelled correctly, no typo. The stem is internally slightly inconsistent (it describes BOTH "sectoral redness" and a "mobile episcleral nodule", which are the bank’s two different clinical types of episcleritis) but the etiology asked for is the same either way.' }

];
