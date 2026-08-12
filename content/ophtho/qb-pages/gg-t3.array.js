/* Grade Gain Ophthalmology — Topic 3, "Orbit"
 * VERBATIM staging record. Source: Semester 8\Opthalmo\Questions\ophthalmology qb.pdf
 *
 * PAGE MAP ACTUALLY USED (offset verified against the printed footer: PDF = book + 7)
 *   book p.16 (PDF 23) — Q113–Q122  (10)   questions
 *   book p.17 (PDF 24) — Q123–Q128  ( 6)   questions
 *   book p.18 (PDF 25) — Q129–Q137  ( 9)   questions
 *   book p.19 (PDF 26) — Q138       ( 1)   question  (LEFT column)
 *                       + ANSWERS Q113–Q127            (RIGHT column)
 *   book p.20 (PDF 27) — ANSWERS Q128–Q138
 *   book p.21 (PDF 28) — topic 4 "Lacrimal System" begins at Q139  → boundary confirmed
 *
 * ⚠️ A QUESTION TAIL SHARES THE FIRST ANSWER PAGE. Q138 is printed in the left
 *    column of book p.19 while the answer block starts in the right column of the
 *    SAME page. Stopping at "questions end p.18" would have lost it.
 * ⚠️ THE ANSWERS RUN ONE PAGE PAST THE STATED ANSWER PAGE. The contents page says
 *    "Page As 19"; eleven of the twenty-six keys (Q128–Q138) are on book p.20.
 *
 * COUNT: 26 printed. The contents page promised 26 and was EXACT this time
 *        (topic 2's was also exact; ENT's Grade Gain contents was wrong 17 times in 21).
 *
 * EXPLANATION BOXES: 4 printed — Q116, Q127, Q128, Q133. The other 22 print none.
 *        (Topic 1 printed 0 boxes, topic 2 printed 8. Box presence is a property of
 *         the PAGE, not the topic.)
 *
 * Read 2026-08-12. Every page rendered at -r 130 and read visually; keys re-read at
 * -r 220 on a cropped answer column before being written down.
 */

var GG_T3_STAGED = [

{ n:113, p:16, key:'A',
  stem:'Most common cause of adult unilateral proptosis:',
  opts:['Thyroid orbitopathy','Metastasis','Lymphoma','Meningioma'] },

{ n:114, p:16, key:'B',
  stem:'Evisceration is:',
  opts:['Excision of the entire eyeball',
        'Excision of all the inner contents of the eyeball including the uveal tissue',
        'Photocoagulation of the retina',
        'Removal of orbit contents'] },

{ n:115, p:16, key:'B',
  stem:'Lagophthalmos can occur in all of the following EXCEPT:',
  opts:['7th cranial nerve paralysis','5th cranial nerve paralysis','Thyrotoxic exophthalmos','Symblepharon'],
  note:'Options A and B are printed with superscript "th" — "7th", "5th".' },

{ n:116, p:16, key:'A',
  stem:'The most important symptom of differentiating orbital cellulitis from pan ophthalmitis is:',
  opts:['Vision','Pain','Redness','Swelling'],
  box:'Orbital cellulitis → vision is usually preserved unless optic nerve is compressed (Diminished ± Diplopia). Panophthalmitis → severe infection of all ocular coats → marked drop in vision, often to no light perception.' },

{ n:117, p:16, key:'A',
  stem:'The commonest cause of unilateral exophthalmos is:',
  opts:['Thyroid eye disease','Lacrimal gland tumor','Orbital cellulitis','Cavernous sinus thrombosis'],
  note:'Same fact as Q113 but the whole distractor set is REPLACED. Within-bank near-twin — see the sweep note in the manifest.' },

{ n:118, p:16, key:'A',
  stem:'Proptosis is present in the following condition EXCEPT:',
  opts:["Horner's syndrome",'Orbital cellulitis','Thyroid ophthalmopathy','Cavernous sinus thrombosis'] },

{ n:119, p:16, key:'C',
  stem:'Proptosis is NOT a clinical presentation in:',
  opts:['Pan ophthalmitis','Orbital cellulitis','Endophthalmitis',"Graves' disease"] },

{ n:120, p:16, key:'D',
  stem:'Ptosis can occur in the following clinical situations:',
  opts:['Following blunt trauma to the eyelid','In myasthenia gravis','As a congenital condition','All of the above'],
  note:'Option B is printed with a capital I misread as lowercase L in the scan ("ln myasthenia gravis"); it is "In".' },

{ n:121, p:16, key:'C',
  stem:'The following are signs of retrobulbar hemorrhage EXCEPT:',
  opts:['proptosis','Chemosis','Miosis','Restriction of extraocular movements'] },

{ n:122, p:16, key:'A',
  stem:'Causes of pulsating exophthalmos include:',
  opts:['Carotid cavernous fistula.',"Grave's disease.",'Cavernous sinus thrombosis.','Orbital cellulitis'] },

{ n:123, p:17, key:'B',
  stem:'All of the following are signs of carotid-cavernous fistula EXCEPT:',
  opts:['Dilated tortuous retinal veins as well as skin veins at the inner canthus.',
        'Crepitations felt on lid palpation.',
        'Exophthalmos.',
        'Machinery murmurs over the eye.'] },

{ n:124, p:17, key:'A',
  stem:'A 10-year-old male child attended the ophthalmic clinic with his father who complained that his child right eye was looking staring, he was feverish & that he had a history of recurrent sinusitis & no past history of trauma. On examination, the lids of the right eye were swollen, the conjunctiva was chemotic & there was mild proptosis laterally & downwards with some limitation of ocular movement. The most probable diagnosis is:',
  opts:['Orbital cellulitis.','Tenonitis.','Orbital periostitis.','Endophthalmitis.'] },

{ n:125, p:17, key:'B',
  stem:'The first line of treatment of the previous case is:',
  opts:['Steroids.','Intravenous antibiotics.','Incision & drainage.','Evisceration.'],
  ref:'BACK-REFERENCE to Q124. Must be repaired at drafting — the deck is shuffled.' },

{ n:126, p:17, key:'B',
  stem:'A 6-year-old male child presented with a sudden onset upper lid edema, chemosis, pain & proptosis directed laterally & downwards:',
  opts:['cavernous sinus thrombosis is most likely the diagnosis.',
        'Blindness may occur due to central retinal artery occlusion.',
        'Surgical drainage must be employed.',
        'IV antibiotics have a limited role in treating this condition.'],
  note:'The stem has NO question sentence — it ends at the vignette and the options are four statements. The lead-in "which of the following statements is correct?" must be supplied.' },

{ n:127, p:17, key:'B',
  stem:'Enucleation is:',
  opts:['Removal of the eye contents, even the uvea',
        'Excision of the entire eyeball',
        'Removal of all orbital contents',
        'the optic nerve is cut and the whole globe is removed as a whole'],
  box:'Enucleation refers to the complete removal of the eyeball (globe) from the orbit, leaving the surrounding tissues, such as the muscles, optic nerve, and orbital fat, intact. This is typically done when the eye is severely damaged, diseased, or in the case of malignancy, and the eye cannot be preserved.',
  note:'⚠️ OPTIONS B AND D BOTH DESCRIBE ENUCLEATION — B is the name, D is the description. Defect shape "the same answer offered twice". Key is B.' },

{ n:128, p:17, key:'D',
  stem:'On the 3rd post-operative day of uneventful cataract surgery, the patient experienced severe headaches. On examination, the BCVA was HM, there was ciliary injection, corneal edema, +3cells in the AC. The IOP was 27 mmHg & the RR was absent. The ocular motility was also limited. The most probable diagnosis:',
  opts:['Usual post-operative uveitis','Pupillary block glaucoma','Endophthalmitis','Pan ophthalmitis'],
  box:'Atypical presentation of post-operative pan ophthalmitis. It is not endophthalmitis because the extra ocular muscles are involved (motility is affected), so probably it was a case of endophthalmitis that spread outside the globe (pan ophthalmitis= endophthalmitis + motility limitation)',
  note:'"RR" = red reflex. "3rd" is printed with superscript rd.' },

{ n:129, p:18, key:'C',
  stem:'All of the following are true about orbital cellulitis EXCEPT:',
  opts:['Sinusitis is the most common cause in children',
        'Hospitalize the patient + IV antibiotics',
        'If antibiotics fail after 10 -15 days, surgery is performed',
        'Blindness may occur secondary to CRAO and optic neuritis'] },

{ n:130, p:18, key:'B',
  stem:'A 22-year-old male was hit in the eye by a tennis ball. He has diplopia in upward gaze, Diplopia in upgaze is most likely due to entrapment of:',
  opts:['Superior oblique','Inferior rectus','Medial rectus','Lateral rectus'],
  note:'The stem states the same fact twice ("diplopia in upward gaze" then "Diplopia in upgaze"). Printed as-is.' },

{ n:131, p:18, key:'B',
  stem:'A 10-year-old febrile child with painful eye movements, proptosis, marked chemosis, and decreased vision following sinusitis. Serious possible complication?',
  opts:['Retinal detachment','Cavernous sinus thrombosis','Optic disc drusen','Conjunctivitis'] },

{ n:132, p:18, key:'C',
  stem:'A 30-year-old patient after eyelid trauma presents with severe pain, proptosis, tight eyelids, decreased vision, and elevated IOP. Which sign is expected?',
  opts:['Miosis','Chemosis','Ophthalmoplegia','Hypopyon'],
  note:'⚠️ TWO CORRECT OPTIONS. This is retrobulbar haemorrhage, and the bank’s OWN Q121 lists chemosis among its signs. Key is C; recorded per the ruling, not disputed.' },

{ n:133, p:18, key:'B',
  stem:'Earliest orbital sign in blow-out fracture is often:',
  opts:['Enophthalmos','Periorbital emphysema','Ptosis','Retinal detachment'],
  box:'In an orbital blow-out fracture, the fracture usually involves the orbital floor or medial wall, which communicates with the paranasal sinuses. Air escapes into the orbit → periorbital emphysema, often appearing immediately after trauma, especially when the patient blows the nose.' },

{ n:134, p:18, key:'A',
  stem:'In preseptal cellulitis, which of the following is absent?',
  opts:['Proptosis','Fever','Eyelid edema','Leukocytosis'] },

{ n:135, p:18, key:'B',
  stem:'Most common cause of exophthalmos in children:',
  opts:['Lymphoma','Orbital cellulitis','Cavernous sinus thrombosis','Retinoblastoma'] },

{ n:136, p:18, key:'B',
  stem:'In children, orbital cellulitis is commonly a consequence of:',
  opts:['Metastatic infection.','Ethmoidal sinusitis.','Underlying malignancy.','Lid cellulitis.'] },

{ n:137, p:18, key:'C',
  stem:'The most affected individual extraocular muscle in thyroid ophthalmopathy is:',
  opts:['The superior rectus.','The medial rectus.','The inferior rectus.','The lateral rectus.'] },

{ n:138, p:19, key:'A',
  stem:'A female patient aged 30 years complaining of loss of weight in spite of good appetite. Her right eye was proptotic, with conjunctival chemosis and congestion. The diagnosis is:',
  opts:['Thyroid eye disease','Acute orbital cellulitis.','Cavernous sinus thrombosis.','Lacrimal gland tumor.'] }

];
