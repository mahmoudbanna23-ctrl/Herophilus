/* Grade Gain — ENT QB.pdf — THROAT section, topic 1: "Anatomy & physiology of throat"
   Questions book pp.87-90 (PDF 96-99); answers book p.91 (PDF 100).
   Verbatim staging. Read 2026-08-11. ⚠️ READ AND STAGED — NOT YET WRITTEN.

   ── COUNT: 40 printed, Q1 … Q40, against 40 promised — EXACT ─────────────
   Fourth exact count in nineteen chapters (29/29, 46/46, 7/7, 40/40). Ten per
   page over four pages, two columns. **Fifth clean sheet running**: all 40
   keys on one page, no question tail on it, no run-over — book p.92 (PDF 101)
   opens topic 2, "Pharyngeal and neck suppurations", at **Q41**.

   ── ✅ SECTION AND NUMBERING CONFIRMED ────────────────────────────────────
   Book p.87 carries a full-page **"CHAPTER 3: THROAT"** banner and numbering
   **restarts at 1**; the running header then reads **"Chapter 3: <topic>"**
   throughout, and Q40 → Q41 runs straight on across the topic boundary.
   Same structure as Ear and Nose. **Ids take a `thr` section token:
   `entqb-thr1-1` … `entqb-thr1-40`.**

   ── ⚠️ ONE PRINTED BOX IN FORTY (2.5 %) — Q25 ONLY ───────────────────────
   *"SLN supplies cricothyroid muscle which is the only tensor of the cord and
   responsible of high-pitched sound."* Against a running ~30 % for this bank.
   **Box presence is a property of the PAGE** — the entire answer sheet is a
   bare key list. Expect ~39 authored explanations.

   ── ⚠️ Q12 PRINTS FIVE OPTIONS ───────────────────────────────────────────
   Only non-four-option question here, and the key is **E**. Option counts of
   2, 3, 4 and now 5 all coexist in the app.

   ── ⚠️ SUSPECTED DEFECT — Q2 MAY HAVE TWO CORRECT ANSWERS ────────────────
   *"All of the following occurs at the lower border of C6 except"* keys **d,
   "Beginning of pharynx"** — correct, since the pharynx begins at the skull
   base and *ends* at C6. **But option b, "Bifurcation of carotid artery",
   is also not at C6** — standard teaching puts the common carotid bifurcation
   at the upper border of the thyroid cartilage, **C3–C4**. At C6 one finds the
   cricoid, the end of the larynx, the start of the trachea and oesophagus, and
   the carotid tubercle of Chassaignac — not the bifurcation.
   **⚠️ CHECK AGAINST `L1.2) Anatomy of the pharynx.pdf` BEFORE WRITING** — the
   lecture may itself teach C6, in which case the key stands unremarked.
   Under the user's ruling of 2026-08-11: key it as printed, note beside.

   ── ⚠️ SOURCE DEFECT — Q19 OFFERS A MUSCLE THAT DOES NOT EXIST ───────────
   Option a is *"anterior cricoarytenoid muscle"*. There is no such muscle;
   the pair are the **posterior** (abductor, the key) and **lateral** (adductor)
   cricoarytenoids. Transcribe as printed and say so.

   ── ⚠️ Q28 WORTH A NOTE — commonest site of fish-bone impaction ──────────
   Keys **c, pyriform fossa**, over *tonsillar pillars* and *lingual tonsils*.
   Both are classically taught sites (tonsil/base of tongue for small sharp
   bones, pyriform fossa for larger). Check the lecture; note beside if absent.

   ── ⚠️ Q21 IS AMBIGUOUS AS WORDED ────────────────────────────────────────
   *"What is the result if vocal cords are in paramedian position?"* keys
   **stridor**, which is true only if the paramedian position is **bilateral**.
   Unilateral paramedian (the usual unilateral RLN palsy) gives hoarseness, and
   *hoarseness of voice* is offered as option d. The bank is internally
   consistent — Q34 keys bilateral abductor palsy for stridor — so the intended
   reading is bilateral. Supply the qualifier and say it was supplied.

   ── ⚠️ THE VOCAL-CORD-POSITION SET IS FOUR QUESTIONS OVER ONE OPTION LIST ─
   Q34, Q35, Q36 share an identical four-option list (bilateral adductor /
   bilateral abductor / unilateral abductor / unilateral adductor) and key
   three different answers; Q21, Q22, Q25 and Q39 test the same axis from other
   directions. **⚠️ Stages B, C and F will pair Q34/Q35/Q36 with each other at
   or near 1.00 — the identical-menu trap from Nose ch.8. Only the stem
   decides; none of these is a fold.**

   ── LECTURES: BOTH ARE IMAGE-ONLY, VERIFIED 2026-08-11 ───────────────────
   `L1.1) Surgical anatomy of the larynx.pdf` (16 pages) and
   `L1.2) Anatomy of the pharynx.pdf` (24 pages) return **only their title
   slide** to `pdftotext` — 306 and 330 characters, the author's name and title
   and nothing else. **That is WHY they were never cached**; it is not an
   oversight. They are the only two ENT lecture PDFs in that state.
   **They must be read visually — 40 slides, rendered at 110 dpi to
   `<scratchpad>\lec-l1\`** (`pharynx-01..24`, `larynx-01..16`). **Do this
   BEFORE writing, and cache the result to `content\ent\lectures\`** — they are
   the backbone of this topic and of much of the Throat section.

   ── NO FIGURES ON ANY OF THE FIVE PAGES ──────────────────────────────────

   ── SWEEP NOT YET RUN. Endpoint's Throat run is large, so expect folds. ──
   Likely candidates: Waldeyer's ring (Q12); the only complete ring (Q17);
   posterior cricoarytenoid as sole abductor (Q19); cadaveric position (Q22,
   Q39); Reinke's space (Q26); Killian's dehiscence and Zenker's (Q31);
   fossa of Rosenmuller and nasopharyngeal carcinoma (Q40 — see
   `entqb-nose7-*` and the `ent-nasopharynx` gap in §11); secretory otitis
   media as commonest paediatric CHL (Q5 — heavy overlap with the Ear run).
*/

var GGT1_STAGED = [

{ n:1, stem:'Which of the following is NOT true about pharynx?',
  options:['Nasopharynx extends from the skull base to the hard palate','Hypopharynx lies Infront of C4-C6','Oropharynx lies Infront of C1','Hypopharynx extends from hyoid bone to cricoid cartilage'],
  key:'C. Oropharynx lies Infront of C1', box:null },

{ n:2, stem:'All of the following occurs at the lower border of the C6 except:',
  options:['Cricoid cartilage','Bifurcation of carotid artery','End of larynx','Beginning of pharynx'],
  key:'D. Beginning of pharynx', box:null,
  defect:'SUSPECTED TWO CORRECT ANSWERS — the common carotid bifurcation is at C3-C4, not C6, so option b is also not a C6 event. Check L1.2 before writing.' },

{ n:3, stem:'Oral cavity opens into oropharynx via which of the following?',
  options:['Choana','Faucial isthmus','Aditus','Pyriform fossa'],
  key:'B. Faucial isthmus', box:null },

{ n:4, stem:'All of the following are true about nasopharynx except:',
  options:['Subepithelial lymphoid tissue lies posterior to it','Acute obstruction of eustachian tube leads to middle ear effusion','Fossa of Rosenmuller is site of nasopharyngeal occult carcinoma','Choana lies anterior to nasopharynx'],
  key:'B. Acute obstruction of eustachian tube leads to middle ear effusion', box:null },

{ n:5, stem:'Which of the following is the most common cause of conductive hearing loss of children?',
  options:['Congenital choanal stenosis','Meningitis','Loud noise exposure','Secretory otitis media'],
  key:'D. Secretory otitis media', box:null },

{ n:6, stem:'Which of the following lies in the anterior wall of oropharynx?',
  options:['Uvula','Vallecula','Tonsillar fossa','Anterior pillars'],
  key:'B. Vallecula', box:null },

{ n:7, stem:'Which of the following muscles make the posterior pillars of oropharynx?',
  options:['Palato-glosseus muscle','Palatopharyngeal muscle','Thyropharyngeal muscle','Cricoarytenoid muscle'],
  key:'B. Palatopharyngeal muscle', box:null },

{ n:8, stem:"Which of the following is responsible for passawnt's bridge of velopharyngeal sphincter?",
  options:['Soft palate movement','Lateral pharyngeal wall movement','Posterior pharyngeal wall movement','Uvula movement'],
  key:'C. Posterior pharyngeal wall movement', box:null },

{ n:9, stem:'All of the following are functions of oropharynx except:',
  options:['Common pathway of food and air','Vomiting','3rd phase of swallowing','Articulation of vowels'],
  key:'C. 3rd phase of swallowing', box:null },

{ n:10, stem:'Which of the following is NOT a component of tonsillar bed?',
  options:['Middle constrictor muscle','Glossopharyngeal nerve','Tonsillar artery','Buccopharyngeal fascia'],
  key:'A. Middle constrictor muscle', box:null },

{ n:11, stem:'Which of the following is the main blood supply to the tonsils?',
  options:['Descending palatine artery','Dorsalis lingual artery','Ascending palatine artery','Tonsillar artery'],
  key:'D. Tonsillar artery', box:null },

{ n:12, stem:"All of the following are components of waldeyer's ring except:",
  options:['Adenoid','Tubal tonsil','Palatine tonsil','Lingual tonsils',"Henle's lymphoid tissue"],
  key:"E. Henle's lymphoid tissue", box:null,
  note:'⚠️ FIVE OPTIONS — the only non-four-option question in this topic.' },

{ n:13, stem:'Which of the following lies medial to pyriform fossa?',
  options:['Thyroid cartilage','Cricoid membrane','Cricoid cartilage','Thyroid gland'],
  key:'C. Cricoid cartilage', box:null },

{ n:14, stem:'Which of the following muscles is attached to hyoid bone?',
  options:['Superior constrictor muscle','Middle constrictor muscle','Thyropharyngeal muscle','Inferior constrictor muscle'],
  key:'B. Middle constrictor muscle', box:null },

{ n:15, stem:'Which of the following is NOT true about nerve supply of pharynx?',
  options:['Paranasal sinuses are supplied by trigeminal nerve','Hypopharynx is supplied by 10th cranial nerve','Vallecula is supplied by recurrent laryngeal nerve','Palatine tonsils are supplied by 9th cranial nerve'],
  key:'C. Vallecula is supplied by recurrent laryngeal nerve', box:null },

{ n:16, stem:'Which of the following extends from the arytenoid cartilage above to the lower border of cricoid cartilage below?',
  options:['Pyriform fossa','Post cricoid area','Larynx','Thyroid cartilage'],
  key:'B. Post cricoid area', box:null },

{ n:17, stem:'Which of the following is the ONLY complete ring in the respiratory system?',
  options:['thyroid cartilage','cricoid cartilage','corniculate cartilage','cuneiform cartilage'],
  key:'B. cricoid cartilage', box:null },

{ n:18, stem:'which of the following is not true about Arytenoid cartilage?',
  options:['It is a single cartilage','It has vocal process directed anteriorly','It has muscular process directed laterally','Its base articulates with cricoid'],
  key:'A. It is a single cartilage', box:null },

{ n:19, stem:'Which of the following muscles is the only abductor of the cord?',
  options:['anterior cricoarytenoid muscle','Cricothyroid muscle','Thyropharyngeal muscle','Posterior cricoarytenoid muscle'],
  key:'D. Posterior cricoarytenoid muscle', box:null,
  defect:'SOURCE DEFECT — option a names an "anterior cricoarytenoid muscle", which does not exist. The pair are posterior (abductor) and lateral (adductor).' },

{ n:20, stem:'Which of the following is NOT true about nerve supply of larynx?',
  options:['Superior laryngeal nerve supplies cricothyroid muscle','Recurrent laryngeal nerve is sensory above vocal cord','Left RLN is liable for injury in chest surgeries','Bilateral complete RLN injuries leads to aphonia'],
  key:'B. Recurrent laryngeal nerve is sensory above vocal cord', box:null },

{ n:21, stem:'What is the result if vocal cords are in paramedian position?',
  options:['Stridor','Aphonia','Dyspnea','Hoarseness of voice'],
  key:'A. Stridor', box:null,
  defect:'AMBIGUOUS AS WORDED — stridor follows only if the paramedian position is BILATERAL; unilateral paramedian gives hoarseness, which is offered as option d. Consistent with the bank\'s own Q34. Supply the qualifier.' },

{ n:22, stem:'When vocal cords are in cadaveric position?',
  options:['Unilateral RLN is cut','Bilateral RLN is cut','Bilateral SLN is cut','RLN and SLN are cut'],
  key:'D. RLN and SLN are cut', box:null },

{ n:23, stem:'What is the histological type of vocal cord epithelium?',
  options:['stratified squamous epithelium','stratified columnar epithelium','simple squamous epithelium','simple columnar epithelium'],
  key:'A. stratified squamous epithelium', box:null },

{ n:24, stem:'which of the following is the vocalis muscle?',
  options:['Cricothyroid muscle','Thyroarytenoid muscle','Cricoarytenoid muscle','Cricopharyngeus muscle'],
  key:'B. Thyroarytenoid muscle', box:null },

{ n:25, stem:'What is the result of SLN injury?',
  options:['stridor','Aphonia','Dyspnea','loss of high-pitched voice'],
  key:'D. loss of high-pitched voice',
  box:'SLN supplies cricothyroid muscle which is the only tensor of the cord and responsible of high-pitched sound.' },

{ n:26, stem:"Reineck's space refers to which of the following?",
  options:['Quadrangular membrane','True vocal cords','False vocal cords','subepithelial layer of the vocal cord'],
  key:'D. subepithelial layer of the vocal cord', box:null,
  note:"The bank spells it \"Reineck's\"; the eponym is Reinke's." },

{ n:27, stem:'Gerlach tonsil refers to which of the following?',
  options:['Adenoid','Tubal tonsil','Palatine tonsil','Lingual tonsils'],
  key:'B. Tubal tonsil', box:null },

{ n:28, stem:'What is the commonest site for impaction of fish bone?',
  options:['Tonsillar pillars','Lingual tonsils','Pyriform fossa','Vocal cord'],
  key:'C. Pyriform fossa', box:null },

{ n:29, stem:'Which nerve is responsible for carrying sensory information from the mucosa of the larynx above the vocal cords?',
  options:['Hypoglossal nerve','Internal branch of the superior laryngeal nerve','External branch of the superior laryngeal nerve','Glossopharyngeal nerve'],
  key:'B. Internal branch of the superior laryngeal nerve', box:null },

{ n:30, stem:'A 10-year-old child presents with fever and painful swelling on the upper part of the neck following streptococcal acute tonsillitis. What is the most likely cause of neck swelling?',
  options:['Upper deep cervical lymphadenopathy','Submandibular lymphadenopathy','Parotid gland enlargement','Thyroid nodule'],
  key:'A. Upper deep cervical lymphadenopathy', box:null },

{ n:31, stem:"Which of the following statements about Killian's dehiscence is correct?",
  options:['It is a weak area due to the absence of muscular tissue.','Its site is between the thyropharyngeal and cricopharyngeal muscles.',"It is common site for Zenker's diverticulum.",'All of the above.'],
  key:'D. All of the above.', box:null },

{ n:32, stem:'Which of the following best defines the glottis?',
  options:['The space between the true vocal cords','The region above the true vocal cords','The area between the false vocal cords','The junction between the larynx and pharynx'],
  key:'A. The space between the true vocal cords', box:null },

{ n:33, stem:'Which of the following statements about the lymphatic drainage of the larynx is true?',
  options:['The supraglottic region drains into the upper deep cervical lymph nodes.','The glottic region has minimal or no significant lymphatic drainage.','The subglottic region primarily drains into the lower deep cervical lymph nodes.','All of the above.'],
  key:'D. All of the above.', box:null },

{ n:34, stem:'Which of the following causes Stridor with normal voice?',
  options:['Bilateral Adductor VC paralysis','Bilateral Abductor VC paralysis','unilateral Abductor VC paralysis','unilateral Adductor VC paralysis'],
  key:'B. Bilateral Abductor VC paralysis', box:null },

{ n:35, stem:'which of the following causes HOV & Aspiration?',
  options:['Bilateral Adductor VC paralysis','Bilateral Abductor VC paralysis','unilateral Abductor VC paralysis','unilateral Adductor VC paralysis'],
  key:'A. Bilateral Adductor VC paralysis', box:null },

{ n:36, stem:'Which of the following causes breathy weak voice?',
  options:['Bilateral Adductor VC paralysis','Bilateral Abductor VC paralysis','unilateral Abductor VC paralysis','unilateral Adductor VC paralysis'],
  key:'D. unilateral Adductor VC paralysis', box:null },

{ n:37, stem:'which of the following muscles is NOT affected by RLN injury?',
  options:['Cricoarytenoid muscle','Thyroarytenoid muscle','Interarytenoid muscle','Cricothyroid muscle'],
  key:'D. Cricothyroid muscle', box:null },

{ n:38, stem:'Pain in the pyriform fossa is referred through which of the following nerves?',
  options:['Trigeminal nerve','Glossopharyngeal nerve','Vagus nerve','Hypoglossal nerve'],
  key:'C. Vagus nerve', box:null },

{ n:39, stem:'A 48-year-old female patient presented with hoarseness of voice and mild aspiration. By examination, there was left vocal cord paralysis. The patient gave history of left mastectomy for breast cancer 7 years ago. CT showed osteolytic bony lesion at the left skull base. What is the exact position of the vocal cord?',
  options:['Midline','Extreme Abduction','Cadaveric','Para median'],
  key:'C. Cadaveric', box:null },

{ n:40, stem:'Fossa of Rosenmuller is a commonest site for which of the following tumors?',
  options:['Angiofibroma','Lipoma','Adenoid','Nasopharyngeal carcinoma'],
  key:'D. Nasopharyngeal carcinoma', box:null }

];

/* Box printed: Q25 only — 1 of 40, 2.5 %.
   Keys in order: C D B B D B B C C A | D E C B C B B A D B |
                  A D A B D D B C B A | D A D B A D D C C D  */
