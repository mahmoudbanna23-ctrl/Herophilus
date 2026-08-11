/* Grade Gain — ENT QB.pdf — NOSE section, chapter 7: "Sino-nasal masses"
   Questions book pp.76-79 (PDF 85-88); answers book p.80 (PDF 89).
   Verbatim staging. Read 2026-08-11.

   ── COUNT ────────────────────────────────────────────────────────────────
   32 printed, Q204 … Q235, against 31 promised. Thirteenth chapter running
   whose count is wrong upward. Largest Nose topic after ch.3.

   ── PAGE SHAPE: CLEAN AGAIN ──────────────────────────────────────────────
   All 32 keys on book p.80; no question tail on the answer page and no
   run-over. Book p.81 opens "Nasal septal diseases" at Q236 under its own
   Questions banner — confirmed by rendering one page past, as always.
   Overlap now six of sixteen chapters; run-over two of four.

   ── ⚠️ ONLY ONE PRINTED EXPLANATION BOX IN THIRTY-TWO ────────────────────
   Q217 alone. That is ~3 %, against this bank's running ~32 %. **Box
   presence is a property of the PAGE, not the section** — the same finding
   endpoint's Throat run produced over 103 answered pages.

   ── ⚠️ FIVE FIGURES, FOUR OF THEM LOAD-BEARING, ALL PRINTED WITH THE
   ──    QUESTION (so all are croppable, unlike an answer-page figure)
   * Q210  book p.76 — clinical photograph of the nasal vestibule. The four
     options are haematoma / abscess / perforation / synechiae and **nothing
     in the stem separates them**: "A man had a trauma in the nose. There is
     no fever." → `q-gg-76.jpg`, imgEssential.
   * Q216  book p.77 — two-panel endoscopy (labelled A and B) of a smooth
     mass from the middle meatus. Stem names the site, so the picture is
     supporting rather than decisive → `q-gg-77.jpg`.
   * Q234  book p.79 — TWO stacked endoscopic photographs, and the stem is
     only "A patient complains of unilateral nasal obstruction. By
     examination:" followed by "The treatment is". **The diagnosis is in the
     picture and nowhere else** → `q-gg-79a.jpg`, imgEssential.
   * Q235  book p.79 — THREE panels: endoscopy, axial CT, and an angiogram
     showing a vascular blush. The stem gives enough (20-year-old male,
     severe recurrent unilateral epistaxis, obstruction, facial deformity)
     → `q-gg-79b.jpg`, supporting.

   ── DEFECTS ──────────────────────────────────────────────────────────────
   * **Q206 KEY QUESTIONABLE — RAISE IT.** "What is the most common
     congenital nasal mass?" keys **meningoencephalocele** over a list that
     offers **dermoid cyst**. Standard teaching makes the **nasal dermoid**
     the commonest congenital midline nasal mass by a wide margin. `L26)
     nasal masses.pdf` classifies these lesions but **ranks nothing**. Check
     the corpus before writing the dispute down.
   * **Q226 HAS ONLY THREE OPTIONS** (a, b, c). First three-option question
     in this bank; ch.6 gave the first two-option one.
   * **Q220 and Q231 print their own number twice** — "220. 220.in the
     previous case…" and "231. 231.The most common site…". Fifth and sixth
     occurrences. Strip.
   * **Q227 HAS NO INTERROGATIVE.** The stem is a vignette that stops at
     "…denies any associated facial pain or fever" with no question sentence.
     Repair by adding the question the options answer.
   * **Q235's STEM ASKS TWICE** — "What is the most probable diagnosis and
     the best next step in management? What is the most Probable Diagnosis:"
     The options answer only the diagnosis. Strip the management clause.

   ── LINKED SETS — THREE OF THEM, ALL NEEDING REPAIR ──────────────────────
   The deck is SHUFFLED, so every back-reference must be made self-contained.
   * Q207 (2-month-old midline swelling) → **Q208** "In the previous case…"
   * Q219 (16-year-old recurrent right epistaxis) → **Q220** "in the previous
     case, Despite treatment…" → **Q221** "In the same case, what is the next
     step" — a THREE-deep chain, the longest in the bank so far.
   * Q228 (15-year-old, epistaxis + obstruction, lesion not visible on
     anterior rhinoscopy) → **Q229** "…of the previous case?"

   ── CHAPTER ASSIGNMENT ───────────────────────────────────────────────────
   Mostly `ent-nasalmass`. Q210 is a septal haematoma → `ent-septum`;
   Q219/Q220/Q221 are an epistaxis chain that becomes a mass question →
   see per-entry notes; Q226 is a sinusitis predisposition → `ent-sinusitis`;
   Q225 adenoid hypertrophy → `ent-tonsils` or `ent-nasalobs`, decided per
   entry after the sweep.
*/

var GGN7_STAGED = [

{ n:204, stem:'The commonest malignant neoplasm of the nose and paranasal sinuses is:',
  options:['Basal cell carcinoma','Squamous cell carcinoma','Adenocarcinoma','Malignant melanoma'],
  key:'B. Squamous cell carcinoma', box:null },

{ n:205, stem:'A 3-year-old child presenting with a unilateral solitary nasal polyp that does not bleed. What is the first thing to do?',
  options:['Biopsy','Investigations for a meningocele','Polypectomy','Wait and see policy'],
  key:'B. Investigations for a Meningocele', box:null },

{ n:206, stem:'What is the most common congenital nasal mass?',
  options:['Dermoid cyst','Glioma','Meningoencephalocele','Nasolacrimal duct cyst'],
  key:'C. meningoencephalocele', box:null },

{ n:207, stem:'A 2-month-old infant is brought to the clinic by his parents due to a midline nasal swelling present since birth. The swelling increases in size when the baby cries and appears soft and compressible. There is no redness or tenderness over the mass. Neurological examination is normal. What is the most likely diagnosis?',
  options:['Nasal dermoid','Meningocele','Hemangioma','Nasal glioma'],
  key:'B. Meningocele', box:null },

{ n:208, stem:'In the previous case, All of the following are appropriate investigations to confirm the diagnosis except ?',
  options:['MRI','CT','Biopsy','None of the above'],
  key:'C. Biopsy', box:null, linked:207 },

{ n:209, stem:'A 44Y patient with unilateral watery rhinorrhea increases with bending forward what should you do?',
  options:['Take biopsy','Exclude meningocele','Reassure','None of the above'],
  key:'B. exclude meningiocele', box:null },

{ n:210, stem:'A man had a trauma in the nose. There is no fever. What is the diagnosis?',
  options:['Septal hematoma','Septal abscess','Septal perforation','Septal synechae'],
  key:'A. Septal hematoma', box:null, fig:'q-gg-76', figEssential:true },

{ n:211, stem:'Antrochoanal polyp arises from:',
  options:['Maxillary sinus','Frontal sinus','Sphenoid sinus','Ethmoid sinus'],
  key:'A. Maxillary sinus', box:null },

{ n:212, stem:'A 10-year-old boy presents with unilateral nasal obstruction and mouth breathing. Examination reveals a smooth, unilateral nasal mass. What is the most likely diagnosis?',
  options:['Nasopharyngeal carcinoma','Allergic nasal polyps','Antrochoanal polyp','Inverted papilloma'],
  key:'C. Antrochoanal polyp', box:null },

{ n:213, stem:'All of the following are classic symptoms of antrochoanal polyp EXCEPT:',
  options:['Unilateral nasal obstruction','Rhinorrhea','Foreign body sensation in throat','Epistaxis'],
  key:'D. Epistaxis', box:null },

{ n:214, stem:'Which of the following is true about antrochoanal polyp (ACP)?',
  options:['It is a bilateral nasal polyp','It originates from the maxillary sinus','It is more common in females','It always presents with epistaxis'],
  key:'B. It originates from the maxillary sinus', box:null },

{ n:215, stem:'What is the male-to-female ratio of antrochoanal polyp?',
  options:['1:1','2:1','3:1','4:1'],
  key:'B. 2:1', box:null },

{ n:216, stem:"A 30 years old male comes with nasal obstruction on endoscopy it reveals a swelling from the middle meatus and it appears from the nasopharynx. What's the diagnosis?",
  options:['Antrochoanal polyp','Inverted papilloma','Nasopharyngeal carcinoma','Juvenile nasopharyngeal angiofibroma'],
  key:'A. Antrochoanal polyp', box:null, fig:'q-gg-77' },

{ n:217, stem:'What is the most common site for nasal polyps?',
  options:['Maxillary sinus','Frontal sinus','Ethmoidal air cells','Sphenoid sinus'],
  key:'C. Ethmoidal air cells',
  box:'Nasal polyps most commonly originate from the ethmoidal air cells. Ethmoidal polyps are typically bilateral and associated with chronic rhinosinusitis or allergic conditions, while antrochoanal polyps arise from the maxillary sinus and are usually unilateral' },

{ n:218, stem:'Antrochoanal polyp treatment of choice:',
  options:['Corticosteroids','Hormonal therapy','FESS','Radiation therapy'],
  key:'C. FESS', box:null },

{ n:219, stem:"A 16-year-old male presents to the emergency department with a complaint of recurrent epistaxis from the right nostril. The bleeding has been ongoing for about 20 minutes, with no prior significant medical history. He is otherwise healthy and is not on any medications. He denies any trauma to the nose but reports frequent nosebleeds in the past. What is the first step in the management of this patient's epistaxis?",
  options:['Position the head backwards','Apply nasal packing','Perform cauterization','Prescribe systemic antibiotic'],
  key:'B. Apply nasal packing', box:null },

{ n:220, stem:"in the previous case, Despite treatment, the patient continues to experience recurrent epistaxis after several hours, and the bleeding doesn't subside. The bleeding is unilateral, and the patient's medical history reveals a few episodes of significant nosebleeds in the past year. Imaging (CT/MRI) suggests an abnormal vascular mass. What should you suspect in this case?",
  options:['Foreign body in the nose','Juvenile Angiofibroma (JAF)','Chronic rhinosinusitis','Allergic rhinitis'],
  key:'B. Juvenile Angiofibroma (JAF)', box:null, linked:219 },

{ n:221, stem:'In the same case, what is the next step in the management of this patient?',
  options:['Perform surgical excision of the mass','Proceed with embolization of the sphenopalatine artery','Administer systemic antibiotics','Prescribe a nasal steroid spray'],
  key:'B. Proceed with embolization of the sphenopalatine artery', box:null, linked:219 },

{ n:222, stem:'all of the following are true about juvenile angiofibroma except:',
  options:['Radiological investigation shows that the origin is from lateral wall of maxillary sinus','In males, in adolescents','Unilateral','Presents with recurrent epistaxis'],
  key:'A. Radiological investigation shows that the origin is from lateral wall of maxillary sinus', box:null },

{ n:223, stem:'Biopsy is contraindicated in',
  options:['Meningocele','Juvenile angiofibroma','Inverted papilloma','A & B'],
  key:'D. A & B', box:null },

{ n:224, stem:'A 50-year-old male presents with nasal mass with an irregular surface. What is the most likely diagnosis?',
  options:['Angiofibroma','Inverted papilloma','Antrochoanal polyp (ACP)','Nasal polyp'],
  key:'B. Inverted papilloma', box:null },

{ n:225, stem:'A 5-year-old child presents with bilateral nasal obstruction. What is the most likely cause?',
  options:['Allergic rhinitis','Adenoid hypertrophy','Nasal polyps','Foreign body in the nose'],
  key:'B. Adenoid hypertrophy', box:null },

{ n:226, stem:'Predisposing factor for maxillary sinusitis:',
  options:['1ry ciliary dyskinesia','Mucosal ethmoidal proliferation in infundibulum','Hypertrophied turbinate'],
  key:'B. Mucosal ethmoidal proliferation in infundibulum', box:null },

{ n:227, stem:'A 12-year-old child presents with a history of unilateral, constant nasal obstruction that has not responded to over-the-counter nasal decongestants or saline nasal drops. The child denies any associated facial pain or fever',
  options:['allergic rhinitis','ACP','chronic rhinosinusitis','atrophic sinusitis'],
  key:'B. ACP', box:null },

{ n:228, stem:'A 15-year-old male presents with repeated severe epistaxis and unilateral nasal obstruction. The lesion is not visible on anterior rhinoscopy. What is the most likely diagnosis?',
  options:['Juvenile Nasopharyngeal Angiofibroma (JNA)','Inverted papilloma','Antrochoanal polyp (ACP)','Foreign body'],
  key:'A. Juvenile Nasopharyngeal Angiofibroma (JNA)', box:null },

{ n:229, stem:'What is the most appropriate investigation to confirm the diagnosis of the previous case?',
  options:['Biopsy','Plain X-ray of the sinuses','CT scan with contrast','No investigation needed'],
  key:'C. CT scan with contrast', box:null, linked:228 },

{ n:230, stem:'A 35-year-old patient presents with unilateral nasal obstruction and has a nasal mass observed on endoscopy. What is the next step in the management?',
  options:['Prescribe nasal decongestants','Reassure','Order a CT scan of the sinuses','Start topical corticosteroids'],
  key:'C. Order a CT scan of the sinuses', box:null },

{ n:231, stem:'The most common site of nasopharyngeal carcinoma is …..',
  options:['Fossa of rosenmuller','Pyriform fossa','Postcricoid fossa','Tonsillar fossa'],
  key:'A. fossa of rosenmuller', box:null },

{ n:232, stem:'As regards Nasopharyngeal angiofibroma All of the following are true except:',
  options:['The main presentation is recurrent mild epistaxis','Originates from sphenopalatine foramen','More common in females','It is a disease of teenagers'],
  key:'C. More common in females', box:null },

{ n:233, stem:'Angiofibroma is characterized by all of the following except:',
  options:['Originates from the sphenopalatine fossa','Can be treated conservatively','Commonly occurs in adolescent males','Highly vascular tumor'],
  key:'B. Can be treated conservatively', box:null },

{ n:234, stem:'A patient complains of unilateral nasal obstruction. By examination: [TWO ENDOSCOPIC PHOTOGRAPHS] The treatment is',
  options:['Local steroids','Radiotherapy','Endoscopic removal','Antibiotics'],
  key:'C. Endoscopic removal', box:null, fig:'q-gg-79a', figEssential:true },

{ n:235, stem:'A 20-year-old male presents with severe recurrent unilateral epistaxis, unilateral nasal obstruction, and facial deformity. What is the most probable diagnosis and the best next step in management? What is the most Probable Diagnosis: [ENDOSCOPY + AXIAL CT + ANGIOGRAM]',
  options:['Nasopharyngeal carcinoma','Deviated nasal septum with spur','Juvenile Nasopharyngeal Angiofibroma (JNA)','Inverted papilloma'],
  key:'C. Juvenile Nasopharyngeal Angiofibroma (JNA)', box:null, fig:'q-gg-79b' }

];

/* Boxes printed: Q217 only — 1 of 32, ~3 %. */
