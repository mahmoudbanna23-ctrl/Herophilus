/* Grade Gain — ENT QB.pdf, NOSE chapter 3: "Rhinitis".
 * Questions book pp.55–60 (PDF 64–69); answers book pp.61–63 (PDF 70–72).
 *
 * ⚠️ 61 PRINTED WHERE THE CONTENTS PAGE PROMISES 60 — Q85 … Q145. Ninth over-run.
 * ✅ THE ANSWER BLOCK DID NOT OVERLAP. Book p.61 is answers only; the questions
 *    stop cleanly at the foot of p.60. First Nose chapter without the overlap.
 * ⚠️ Q145 IS TWO QUESTIONS WITH ONE OPTION LIST AND ONLY ONE ANSWER — it asks
 *    "the most likely diagnosis AND the preferred treatment", prints options for
 *    the diagnosis only, and the key answers only that. **The treatment half is
 *    never answered anywhere.** Same defect as Ear ch.9 Q245, but there the box
 *    supplied the missing half; here nothing does.
 * ⚠️ Q144 prints only THREE options.
 * ⚠️ Q102, Q108, Q145 print their numbers twice ("102.102.A patient with…").
 * ⚠️ THE ANSWER PAGES PRINT TWO FIGURES OF THEIR OWN: a coronal CT under the
 *    answer to Q104, and a drugs-versus-symptoms table under the answer to Q112.
 *    Both are EXPLANATION figures, shown only after answering. The table is
 *    transcribed into the entry as markdown; the CT is described, since the
 *    schema's single `image` renders between stem and options and would give the
 *    answer away.
 * ⚠️ Q145 prints a nasal endoscopy IN THE QUESTION — that one needs cutting.
 * ⚠️ Q108 and Q109 are a near-twin pair: same stem, one replaced distractor
 *    (allergic rhinitis → rhinitis medicamentosa), and each keys the replaced
 *    option. A replaced distractor is a new question, so both are held.
 * ✅ THE SIX-STAGE SWEEP HAS BEEN RUN against all 1,036 existing entries.
 *    **FIVE CROSS-BANK FOLDS CONFIRMED, all verbatim, all into endpoint —
 *    NOT YET APPLIED to questions.ent.js:**
 *      Q86  → `entep-nose-5`  (p.899)   verbatim
 *      Q106 → `entep-nose-16` (p.921)   verbatim ("from nose" / "from the nose")
 *      Q107 → `entep-nose-60` (p.1047)  verbatim
 *      Q123 → `entep-nose-63` (p.1053)  verbatim
 *      Q124 → `entep-nose-64` (p.1055)  verbatim
 *    Each takes `alsoIn:['gradegain']` plus a source note. **56 entries remain
 *    to be written** (61 printed − 5 folded), ids `entqb-nose3-85` … `-145`.
 *    ⚠️ **`entep-nose-60` PRINTS NO BOX BUT GRADE GAIN'S Q107 DOES** — so this
 *    fold converts authored text into sourced text, the third occurrence.
 *    **Its authored marker must come off and the box quoted in.**
 * ✅ Q131's flag is RESOLVED by the sweep: endpoint's `entep-nose-44` asks the
 *    least commonly associated symptom of chronic sinusitis over a different
 *    option set and **also keys cacosmia**. The two banks agree, so the key is
 *    not arguable. Different option sets, so both are held.
 * ⚠️ Q131 keys cacosmia as NOT a symptom of chronic rhinosinusitis — arguable,
 *    and Q102's own box turns on the anosmia/cacosmia distinction. Flagged.
 *
 * Verbatim as printed. Repairs are applied in questions.ent.js, never here.
 */
var GGN3_STAGED = [

{ n:85, page:55, apage:61, stem:'Allergic rhinitis is characterized by:',
  options:['IgG-mediated hypersensitivity of the nasal mucosa','IgE-mediated hypersensitivity of the nasal mucous membrane','T-cell mediated hypersensitivity of the nasal mucosa','IgA-mediated immune response of the nasal mucosa'],
  answer:1, exp:null },

{ n:86, page:55, apage:61, stem:'A 30 year old female has been suffering from seasonal nasal obstruction for the last few years. A watery nasal discharge and attacks of sneezing accompanied this nasal obstruction. The Probable diagnosis is',
  options:['Atrophic rhinitis','Rhinoscleroma','Allergic rhinitis','CSF rhinorrhea'],
  answer:2, exp:null, flag:'✅ FOLD → `entep-nose-5` (p.899), verbatim. Not yet applied.' },

{ n:87, page:55, apage:61, stem:'Which of the following is true regarding allergic rhinitis?',
  options:['It usually presents with unilateral nasal symptoms.','It is commonly caused by bacterial infections.','It is a bilateral condition, typically triggered by allergens.','It rarely involves itchy eyes or sneezing.'],
  answer:2,
  exp:'A patient coming with clear discharge (which is either viral or allergic) with sneezing and itching, so he is allergic\nBut if it is a unilateral clear discharge, it may be CSF rhinorrhea\nThe patient may suffer from other allergic symptoms like dermatitis or bronchial asthma' },

{ n:88, page:55, apage:61, stem:'Intermittent allergic rhinitis is defined',
  options:['Symptoms present less than 4 days per week and less than 4 weeks per year','Symptoms present less than 4 days per week or less than 4 weeks per year','Symptoms present more than 4 days per week and > 4 weeks per year','Symptoms present more than 4 days per week or > 4 weeks per year'],
  answer:1, exp:null },

{ n:89, page:55, apage:61, stem:'Persistent allergic rhinitis is defined as:',
  options:['Symptoms present less than 4 days per week and less than 4 weeks per year','Symptoms present less than 4 days per week or less than 4 weeks per year','Symptoms present more than 4 days per week and > 4 weeks per year','Symptoms present more than 4 days per week or > 4 weeks per year'],
  answer:2, exp:null },

{ n:90, page:55, apage:61, stem:'All of the following are immediate symptoms of allergic rhinitis except:',
  options:['Sneezing','Itching','Nasal congestion','Anosmia'], answer:3, exp:null },

{ n:91, page:55, apage:61, stem:'All of the following are delayed symptoms of allergic rhinitis except:',
  options:['Nasal congestion','Hyposmia','Nasal hypersensitivity','Sneezing'], answer:3, exp:null },

{ n:92, page:55, apage:61, stem:'What is the primary mechanism behind delayed symptoms in allergic rhinitis?',
  options:['IgE-mediated release of histamine','T-cell activation and eosinophil recruitment','Increased production of nasal mucus','Activation of mast cells only'],
  answer:1, exp:null },

{ n:93, page:55, apage:61, stem:'What is the primary mechanism behind immediate symptoms in allergic rhinitis?',
  options:['T-cell activation and eosinophil recruitment','Mast cell mediators, including histamine and leukotrienes','Increased nasal mucus production','IgG-mediated immune response'],
  answer:1, exp:null },

{ n:94, page:56, apage:61, stem:'Which of the following conditions are included in the "Atopy Triangle"?',
  options:['Asthma, allergic rhinitis, and eczema','Asthma, nasal polyps, and allergic conjunctivitis','Rhinosinusitis, asthma, and allergic conjunctivitis','Eczema, allergic rhinitis, and chronic rhinosinusitis'],
  answer:0, exp:null },

{ n:95, page:56, apage:61, stem:'Pale bluish edematous nasal mucosa is typically seen in which of the following conditions?',
  options:['Acute rhinosinusitis','Allergic rhinitis','Chronic rhinosinusitis','Nasal polyps'],
  answer:1, exp:null },

{ n:96, page:56, apage:61, stem:'Which of the following is the most diagnostic test for allergic rhinitis?',
  options:['Nasal smear for eosinophils','CBC','Specific IgE blood test (RAST)','Total IgE blood test'],
  answer:2,
  exp:'50 % have negative skin prick despite they are allergic, and some appear allergic and they are not. So it\'s of low accuracy. We should perform IgE, but to which substance? So, we should perform specific IgE which is the most diagnostic test' },

{ n:97, page:56, apage:61, stem:'Common cold is caused by all except:',
  options:['Rhinovirus','Influenza virus','Corona virus','Adenovirus'], answer:1, exp:null },

{ n:98, page:56, apage:61, stem:'Recurrent acute rhinosinusitis is defined by which of the following?',
  options:['Symptoms lasting more than one month, with no symptom-free period','Symptoms present for less than 10 days, with multiple episodes per year','Symptoms lasting less than one month, with a symptom-free period of at least 10 days between recurrences','Chronic symptoms lasting >3 months without any improvement'],
  answer:2,
  exp:'Classification\n▪ Acute Rhinosinusitis "less than 3 weeks"\n▪ Chronic Rhinosinusitis "more than 3 months"\n▪ Subacute Rhinosinusitis "between 3 weeks and 3 months"\n▪ Recurrent acute Rhinosinusitis "Recurrent symptoms are less than one month and the patient returns to the baseline then is free from symptoms at least for 10 days then recurrence of symptoms"\n▪ Acute Rhinosinusitis superimposed on CRS "chronic for 3 months then acute on top of it less than 3 weeks"' },

{ n:99, page:56, apage:61, stem:'Which of the following is not a group at higher risk for complications from the common cold?',
  options:['Healthy children aged 6 to 23 months','Healthy adults aged 18 to 40 years','Persons aged 6 months to 64 years with cardiopulmonary, respiratory, renal, metabolic or immunodeficient conditions','Pregnant women'],
  answer:1,
  exp:'Healthy children six to 23 months of age.\nAdults 65 years and older.\nPersons six months to 64 years with cardiopulmonary, respiratory, renal, metabolic, or - Immunodeficient conditions. –\nPregnant women' },

{ n:100, page:56, apage:61, stem:'Which of the following groups is NOT included in the recommended population for annual influenza vaccination?',
  options:['Pregnant women during the influenza season','Residents of nursing homes and long-term care facilities','Children aged 6-18 years without underlying chronic medical conditions','Health-care workers involved in direct patient care'],
  answer:2, exp:null },

{ n:101, page:56, apage:62, stem:'Mulberry-like mucosa in inferior turbinate is present in which of the following conditions?',
  options:['Chronic simple rhinitis','Chronic hypertrophic rhinitis','Chronic atrophic rhinitis','Acute allergic rhinitis'],
  answer:1, exp:null },

{ n:102, page:56, apage:62, stem:'A patient with atrophic rhinitis is most likely to experience which of the following smell disorders?',
  options:['Hyperosmia','Cacosmia','Parosmia','Anosmia'], answer:3,
  exp:'When asking about the symptoms of atrophic rhinitis whether the patient has anosmia or cacosmia >>>> the answer is anosmia (we ask about the patient\'s symptom not what you perceive)',
  flag:'The stem prints its number twice — "102.102.A patient…".' },

{ n:103, page:56, apage:62, stem:'Fetor oris (ozenae) is most commonly associated with which of the following conditions?',
  options:['Diabetes mellitus','Atrophic rhinitis','Pharyngitis','Tonsillitis'], answer:1, exp:null,
  flag:'The stem prints its number twice — "103.103.Fetor oris…".' },

{ n:104, page:57, apage:62, stem:'Which of the following is characteristic of the CT findings in a patient with atrophic rhinitis?',
  options:['Mucosal thickening of the paranasal sinuses and loss of definition of the ostiomeatal complex','Hypoplasia of the frontal sinuses and erosion of the nasal septum','Increased size of the maxillary sinuses and well-defined ostiomeatal complex','Normal turbinate size and absence of bony resorption'],
  answer:0, exp:null,
  flag:'⚠️ The ANSWER page prints a coronal CT beneath this key — an explanation figure, not a question figure.' },

{ n:105, page:57, apage:62, stem:'The most common bacteria found in atrophic rhinitis are typically:',
  options:['Streptococcus pneumoniae and Haemophilus influenzae','Klebsiella ozaenae and coccobacillus','Staphylococcus aureus and Escherichia coli','Mycoplasma pneumoniae and Neisseria meningitides'],
  answer:1, exp:null },

{ n:106, page:57, apage:62, stem:'Following are the features of atrophic rhinitis EXCEPT:',
  options:['Crusting and bleeding from nose','Offensive smell','Anosmia','Narrow nasal chambers'],
  answer:3, exp:null },

{ n:107, page:57, apage:62, stem:'The most effective medical treatment in nasal allergy is',
  options:['Nasal decongestant','Topical nasal steroids','Non steroidal anti-inflammatory drugs','Antihistaminics'],
  answer:1,
  exp:'Antihistamines affect the first cascade of mast cells (early response) –\nWhile corticosteroids affect the late response and the early response as it has anti histaminic and anti-inflammatory effects.\nWe usually use local corticosteroids to avoid side effects.' },

{ n:108, page:57, apage:62, stem:'Secondary atrophic rhinitis caused by all of the following except',
  options:['Allergic rhinitis','Septal deviation','Radiation','Scleroma'], answer:0,
  exp:'(secondary cause )\n1. Excessive surgical destruction of nasal mucosa.\n2. Chronic exposure to irritant, cocaine or toxic agents\n3. Healed stage of granulomatous disease. T.B., Scleroma.\n4. Radiotherapy',
  flag:'⚠️ Near-twin of Q109 — one replaced distractor, and each keys the replaced option.' },

{ n:109, page:57, apage:62, stem:'Secondary atrophic rhinitis caused by all of the following except',
  options:['Rhinitis medicamentosa','Septal deviation','Radiation','Scleroma'], answer:0, exp:null,
  flag:'⚠️ Near-twin of Q108; see that flag.' },

{ n:110, page:57, apage:62, stem:'An elderly male presents with long-term nasal obstruction. There is hypertrophy of the inferior turbinate. The initial treatment is:',
  options:['Oral antibiotics','Topical decongestants','Surgical intervention','Topical steroids'],
  answer:3,
  exp:'Management :\nCorrecting predisposing factors\n- Nasal wash\n- Topical ± systemic steroids\n- Antibiotics ±\nAvoid the irritating factor\n- +/_ surgical trimming\n- +/_ out fracture' },

{ n:111, page:57, apage:62, stem:'All of the following are true about allergic rhinitis except:',
  options:['It is commonly triggered by environmental allergens','First management is by surgical intervention','Antihistamines are commonly used for treatment','Intranasal corticosteroids are often used for managing symptom'],
  answer:1, exp:null },

{ n:112, page:57, apage:62, stem:'Which drug is commonly used to treat all symptoms of allergic rhinitis?',
  options:['Antihistamine','Decongestants','Intranasal corticosteroids','Leukotriene inhibitors'],
  answer:2,
  exp:'[TABLE printed on the answer page — drugs against symptoms, star-rated]\nAntihistamines: Sneezing ******, Itching ****, Rhinorrhea ***\nAnticholinergics (Ipratropium bromide): Rhinorrhea *****\nCorticosteroids: Sneezing *****, Itching ****, Rhinorrhea ***, Congestion ***\nDecongestants: Congestion *****\nMast Cell Stabilisers: Sneezing *****, Itching **, Rhinorrhea *\nAntileukotrines: Sneezing ***, Itching **, Congestion ****',
  flag:'⚠️ The table is an EXPLANATION figure on the answer page; transcribed as markdown, not cropped.' },

{ n:113, page:57, apage:63, stem:'Which of the following about the treatment of allergic rhinitis is true?',
  options:['Antihistamines primarily target the early response by affecting the first cascade of mast cells.','Corticosteroids only affect the late response in allergic rhinitis.','Local corticosteroids are avoided due to their high side effect profile.','Antihistamines are more effective than corticosteroids in controlling inflammation.'],
  answer:0,
  exp:'- Antihistamines affect the first cascade of mast cells (early response)\n- While corticosteroids affect the late response and the early response as it has anti histaminic and anti-inflammatory effects.\n- We usually use local corticosteroids to avoid side effects' },

{ n:114, page:58, apage:63, stem:'Which drug used in allergic rhinitis may affect the kidneys?',
  options:['Antihistamines','Corticosteroids','Ipratropium bromide','Leukotriene receptor antagonists'],
  answer:2, exp:null },

{ n:115, page:58, apage:63, stem:'What vascular change is characteristic of Type I atrophic rhinitis?',
  options:['Endarteritis obliterans','Dilated capillaries','Thickened venules','Arterial aneurysms'],
  answer:0, exp:'Endarteritis obliterans\no In Type I : Endarteritis obliterans\no In Type II: Dilated capillaries.' },

{ n:116, page:58, apage:63, stem:'Shrunken bridge deformity is caused by:',
  options:['Syphilis','TB','Chronic hypertrophic rhinitis','Fungal infection'], answer:0, exp:null },

{ n:117, page:58, apage:63, stem:'Which of the following infections can affect both nasal cartilage and bone?',
  options:['Syphilis','TB','Scleroma','A&C'], answer:3, exp:null },

{ n:118, page:58, apage:63, stem:'Scleroma is caused by which of the following organisms?',
  options:['Klebsiella rhinoscleromatis','Staphylococcus aureus','Mycobacterium tuberculosis','Pseudomonas aeruginosa'],
  answer:0, exp:null },

{ n:119, page:58, apage:63, stem:'Hebra nose is caused by which of the following conditions?',
  options:['Syphilis','Tuberculosis','Scleroma','Chronic rhinosinusitis'], answer:2, exp:null },

{ n:120, page:58, apage:63, stem:'Which of the following cells is pathognomonic of scleroma?',
  options:['Miculicz cells','Russel bodies','Mott cells','Foam cells'], answer:0, exp:null },

{ n:121, page:58, apage:63, stem:'Which of the following is found in the intermediate stage between plasma cells and Russel bodies?',
  options:['Miculicz cells','Mott cells','Foam cells','Russel bodies'], answer:1, exp:null },

{ n:122, page:58, apage:63, stem:'Which of the following is characterized by the presence of Russel bodies?',
  options:['Scleroma','Tuberculosis','Leprosy','Chronic rhinosinusitis'], answer:0, exp:null },

{ n:123, page:58, apage:63, stem:'Rhinitis medicamentosa :',
  options:['Can be treated by topical nasal decongestants','Is usually associated with nasal polyps','Is due to prolonged use of topical nasal decongestants','Is a complication of endoscopic nasal surgery'],
  answer:2, exp:null },

{ n:124, page:58, apage:63, stem:'All of the following is true about Scleroma EXCEPT:',
  options:['Is common in Egypt','Usually affects the transition between two types of epithelium.','May present with granulations in nose','Is caused by a fungal pathogen'],
  answer:3, exp:null },

{ n:125, page:58, apage:63, stem:'Affection of the sympathetic system in vasomotor rhinitis causes:',
  options:['Nasal blockage','Nasal dryness','Rhinorrhea','Sneezing'], answer:0, exp:null },

{ n:126, page:59, apage:63, stem:'What does parasympathetic hyperactivity in vasomotor rhinitis cause?',
  options:['Nasal congestion','Hypersecretion of goblet cells, leading to "Dropper type" rhinitis','Atrophic changes in nasal mucosa','Vasodilation causing epistaxis'],
  answer:1, exp:null },

{ n:127, page:59, apage:63, stem:'What is the most common cause of nasal obstruction?',
  options:['Common cold','Influenza','Atrophic rhinitis','Nasal polyps'], answer:0, exp:null },

{ n:128, page:59, apage:63, stem:'Treatment of allergic rhinitis is:',
  options:['Medical','Surgical','Herbal remedies','Physiotherapy'], answer:0, exp:null },

{ n:129, page:59, apage:63, stem:'Cause of intermittent allergic rhinitis is:',
  options:['Pollen','Dust mites','Animal dander','Mold'], answer:0, exp:null },

{ n:130, page:59, apage:63, stem:'Treatment of allergic rhinitis is:',
  options:['Antihistamines','Intranasal corticosteroids','Avoidance of allergens','All of the above'],
  answer:3, exp:null, flag:'Same stem as Q128, different option list and key. Both held.' },

{ n:131, page:59, apage:63, stem:'Which of the following is NOT a typical symptom of chronic rhinosinusitis?',
  options:['Anosmia','Facial pain','Nasal obstruction','Cacosmia'], answer:3, exp:null,
  flag:'✅ Resolved by the sweep — `entep-nose-44` keys cacosmia for the same fact over a different option set, so both banks agree. Held separately.' },

{ n:132, page:59, apage:63, stem:'Which is a characteristic feature of Samter\'s triad?',
  options:['Nasal eosinophilia with high IgE levels','Bronchial asthma, sinonasal polyps, and aspirin intolerance','Nasal polyps with elevated IgE levels','Perennial rhinitis with normal eosinophil levels'],
  answer:1, exp:null },

{ n:133, page:59, apage:63, stem:'Which of the following is true about idiopathic systemic granulomatous disease with rhinitis?',
  options:['It is characterized by the presence of caseating granulomas in the nasal mucosa.','Topical steroid sprays are not effective for controlling symptoms.','Biopsy from the nasal septum or turbinates is often diagnostic.','It presents with rapid onset of nasal congestion and nasal polyps.'],
  answer:2, exp:'It causes non caseating granuloma' },

{ n:134, page:59, apage:63, stem:'Which is characteristic of Wegener\'s granulomatosis?',
  options:['It primarily affects the GIT','Ulceration of the nasal septum and saddle nose deformity are common presentations.','Biopsy is not helpful in diagnosis.','It can be controlled only with surgical intervention.'],
  answer:1, exp:null },

{ n:135, page:59, apage:63, stem:'Saddle nose deformity occurs in:',
  options:['Wegener\'s granulomatosis','Syphilis','Rheumatoid arthritis','Chronic atrophic rhinitis'],
  answer:0, exp:null },

{ n:136, page:59, apage:63, stem:'Which of the following is the most lethal form of fungal sinusitis?',
  options:['Aspergillosis','Mucormycosis','Candidiasis','Cryptococcosis'], answer:1, exp:null },

{ n:137, page:60, apage:63, stem:'Which of the following fungal sinusitis occurs in immunosuppressed individuals?',
  options:['Acute invasive fungal sinusitis','Chronic invasive fungal sinusitis','fungal ball','All of the above'],
  answer:0, exp:null },

{ n:138, page:60, apage:63, stem:'What is the most common form of fungal sinusitis?',
  options:['Invasive fungal sinusitis','Chronic fungal sinusitis','Allergic fungal sinusitis','Fungal ball (mycetoma)'],
  answer:2, exp:null },

{ n:139, page:60, apage:63, stem:'Which of the following fungal sinusitis is caused by Mucor?',
  options:['Allergic fungal sinusitis','Chronic fungal sinusitis','Acute invasive fungal sinusitis','Fungal ball (mycetoma)'],
  answer:2, exp:null },

{ n:140, page:60, apage:63, stem:'Which type of granuloma is typically found in chronic granulomatous invasive fungal sinusitis?',
  options:['Langerhans granuloma','Non-caseating granuloma','Epitheloid granuloma','Caseating granuloma'],
  answer:1, exp:null },

{ n:141, page:60, apage:63, stem:'Chronic Granulomatous Invasive Fungal Sinusitis is caused by:',
  options:['Aspergillus species','Mucor species','Candida species','Histoplasma species'],
  answer:0, exp:null },

{ n:142, page:60, apage:63, stem:'Which type of fungal sinusitis is treated with steroids?',
  options:['Invasive fungal rhinosinusitis','Allergic fungal rhinosinusitis','Chronic granulomatous invasive fungal sinusitis','Mucormycosis'],
  answer:1, exp:null },

{ n:143, page:60, apage:63, stem:'A 55-year-old diabetic patient with uncontrolled blood sugar presents with a sudden onset of severe facial pain, swelling around the eyes, and a black necrotic eschar on the hard palate. The patient also complains of fever, headache, and nasal discharge. On examination, there are black spots on the inferior turbinate, visible proptosis, and diminished sensation over the affected area. What is the most likely diagnosis?',
  options:['Chronic rhinosinusitis','Mucormycosis sinusitis','Acute bacterial sinusitis','Allergic fungal rhinosinusitis'],
  answer:1,
  exp:'Mucormycosis sinusitis is characterized by rapid progression, especially in immunocompromised patients such as those with uncontrolled diabetes. The presence of black spots on the inferior turbinate, along with facial pain, orbital involvement, and necrosis on the palate, are key indicators of mucormycosis, a fungal infection that requires immediate treatment' },

{ n:144, page:60, apage:63, stem:'What is the first-line treatment of scleroma?',
  options:['Antibiotics','Radiation','Surgery'], answer:0, exp:null,
  flag:'Only three options printed.' },

{ n:145, page:60, apage:63, stem:'A 38-year-old female presents with recurrent nasal crusting and anosmia. Her colleagues complain of a fetid odor. On examination, there are thick crusts in a roomy nasal cavity. What is the most likely diagnosis and the preferred treatment? The most Likely Diagnosis:',
  options:['Allergic Rhinitis','Atrophic Rhinitis','Chronic Rhinosinusitis with Polyps','Wegener\'s Granulomatosis'],
  answer:1, exp:null,
  flag:'⚠️ TWO questions in one stem — the treatment half has NO options and NO answer anywhere in the book. ⚠️ Prints a nasal endoscopy showing crusts; needs cutting. ⚠️ Stem prints its number twice.' }

];
