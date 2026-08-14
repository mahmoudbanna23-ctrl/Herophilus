/* ent-paedlar — "Paediatric laryngeal lesions", ENT. Written from scratch
   2026-08-14 under START-HERE.md §14 (slide-density revision notes). No v1
   existed.

   BUDGET — §14.1 REVISED rule, budget = max(summed lecture words, 25 x linked
   question count), floor 600, cap 3,000. BOTH TERMS STATED:

     TERM 1 — summed words of the lectures this chapter RESTS ON:
       L12) Pediatric Laryngeal Lesions           882 w  (whole deck, backbone)
     + L6) Stridor  and tracheostomy               927 w  (the PAEDIATRIC part
       only, measured by line range, not the whole 2,289 w file: the common-
       causes-by-age and infantile-larynx slides 113 w, the congenital lesion
       run from Laryngomalacia through Congenital Extralaryngeal Diseases
       658 w, croup/epiglottitis/JORRP/developmental 134 w, and the benign
       neoplasm list 22 w. The stridor grading, work-up, trauma and the whole
       tracheostomy half belong to `ent-stridor`’s budget and are not claimed.)
       = 1,809 words
     TERM 2 — 25 x 67 linked questions = 1,675 words

     max(1,809 · 1,675) = 1,809. TERM 1 GOVERNS, by 134 words.

   Neither deck is a diagram deck by §14.1’s test — words per non-blank line is
   3.9 for L12 and 4.0 for L6, both well over the ~2 that marks a labelled-
   diagram file, so the lecture term is honest and the question term does not
   need to rescue it.

   NOT COUNTED, CITED ONLY: L2) Hoarsness of Voice (RRP block — HPV 6/11,
   commonest benign laryngeal tumour, involution at puberty, avoid
   tracheostomy, drug list: 8 lines out of 2,066 w) · L11) Vocal cord paralysis
   (one clause, RLN supplies every intrinsic muscle except cricothyroid) ·
   L1.1) Surgical anatomy of the larynx (one label, external branch of the SLN
   to cricothyroid). Claiming their 3,912 words would make the budget
   meaningless.

   MEASURED OUTCOME: 1,960 body words over 9 sections — 151 over the 1,809
   budget, 8.3 %, inside §14.1’s 10 % tolerance. Two compression passes took it
   from 2,329; nothing protected was cut, only duplication, bank meta-commentary
   and distractor-rejection prose.

   FLOOR KEPT BOTH WAYS — every fact, number, classification, list and sign the
   two counted decks state about paediatric laryngeal lesions, plus every one of
   the 67 linked questions’ KEY and DISCRIMINATOR as a line or a table cell. All
   67 ids linked, none dropped.

   OMISSION NOTE — cut on purpose, each a decision on the record:
     1. Distractor-by-distractor rejection. It lives in each question’s own
        `explanation`, one tap away through the qs links (§14.2). Kept only
        where the teaching point IS the discrimination — the congenital lesions
        against each other, and the four childhood laryngeal infections — and
        both are carried as tables.
     2. Question ids in body text, teaching voice, bank meta-commentary,
        per-fact citation clauses (one Src line per section), closing summary.
     3. Mechanism-of-why that is not itself a tested discriminator: the
        Bernoulli account of supraglottic collapse, the reflux-to-flaccidity
        loop beyond the association figure, capsular microbiology of Hib, the
        pharmacology of racemic adrenaline rebound.
     4. Drug doses and epidemiology the material does not state.

   CROSS-CHAPTER DEFERRALS (§14.5) — named, so each is a promise not a
   deletion. Each was checked against all 67 questions filed here:
     A. L12’s ENTIRE FOREIGN-BODY HALF — the incidence block (commonest cause of
        death in the home under 6, 1-3 years 75%, M:F 2:1, mortality 20% before
        endoscopy and under 2% after), the six reasons children aspirate, the
        sites of impaction (right bronchus 57%, left 33%, trachea 6%, larynx
        4%), the acute and late clinical phases, the expiratory film, the CT and
        bronchoscopy slides and rigid-bronchoscopy extraction
                                                     ->  `ent-stridor` ✅ ALREADY
        WRITTEN — verified present in full at strid-6 and strid-7 before
        deferring. ONE question filed here tests it (a choking-then-wheeze
        case), so the two lines it turns on are kept below in paed-9 and
        nothing else.
     B. L6’s stridor grading, the upper-airway-obstruction signs, the
        laboratory/endoscopy/radiology work-up lists, the conservative and
        airway-establishment ladders, the PO2/PCO2/pH thresholds, laryngeal
        trauma and the whole tracheostomy half ->  `ent-stridor` ✅ WRITTEN
        (strid-2, strid-5, strid-9 to strid-14). No question here tests any of
        it; the phase-to-site rule is the single exception and is kept, in
        paed-2, because four questions here turn on it.
     C. L6’s CAUSES OF LARYNGEAL PARALYSIS slide — central versus peripheral
        (traumatic, neuritis, neuropathy, neoplastic, idiopathic) and the
        surgical list (neck or laryngeal trauma, thyroid surgery, R.N.D,
        tracheostomy, scalene LN biopsy)  ->  `ent-vocal` ☐ STILL OWED. Checked:
        no question filed here tests it. The CONGENITAL cord-palsy facts that
        are tested are written in full in paed-5.
     D. L2’s full RRP treatment list, the adult-onset form and the rest of the
        hoarseness deck  ->  `ent-hoarse` ☐. The JORRP facts tested here are
        written in full in paed-8.

   RECEIVED HERE from `ent-stridor`’s own register, as promised there — both
   rows delivered, both in paed-8:
     · JORRP / RRP — HPV aetiology, the recurrence tendency, airway compromise,
       the residual-viral-genome mechanism, and that no consistently effective
       treatment exists.  ✅
     · Benign laryngeal tumours — multiple juvenile papillomatosis, CHONDROMA,
       haemangioma (with the malignant early/late stridor contrast).  ✅

   Table pipes carry no padding — mdCells() trims outer delimiters.
   Curly apostrophes throughout: a straight one closes a single-quoted field. */

var THEORY_ENT_PAEDLAR = {
  'ent-paedlar': {

    intro: 'Two questions settle most of this chapter: does the cry change, and when did the noise start. After that it is croup against epiglottitis, and the numbers the bank asks straight out — 60 %, 10 %, 4 mm, 2:1, 1:3, 1:4.',

    sections: [

{
  id: 'paed-1', w: 'must',
  h: 'Development, and why the infant larynx is different',
  body: [
    '**4th arch → SUPRAglottis** (superior laryngeal nerve). **6th arch → GLOTTIS and SUBglottis** (recurrent laryngeal nerve, itself 6th arch). **The cricothyroid is the only intrinsic muscle NOT supplied by the RLN** — it takes the **external branch of the SUPERIOR laryngeal nerve**.',
    '**Embryonic phase 0–8 weeks = organogenesis. Fetal phase 9 weeks – 7 months = organ maturation.** The lumen is briefly obliterated by epithelium and must **recanalise**; arrest gives a **web, subglottic stenosis or atresia**.',
    '',
    '|Infantile larynx|Consequence|',
    '|---|---|',
    '|**Small** relative to body surface area|—|',
    '|**HIGHER — C3–4**|—|',
    '|**FUNNEL shaped, subglottis 4.5 mm** at term|**narrowest point = CRICOID**, the only complete ring, so oedema goes inward. **Adult: GLOTTIS narrowest, larynx cylindrical**|',
    '|**Epiglottis LONG, tubular, folded on itself (omega)**|collapses inward|',
    '|**SHORT aryepiglottic fold**|tethers the epiglottis back|',
    '|**Big arytenoids, SHORT vocal cords**|—|',
    '|**Softer cartilage**|collapse — laryngomalacia|',
    '|**LOOSE submucosa**, loosely attached to mucosa|**oedema forms freely** — the answer to “why so liable to severe oedema”|',
    '|**Premature neuromuscular control**|**cord spasm**|',
    '|**Premature cough reflex**|**FB aspiration**|',
    '',
    '- **Poiseuille’s law** — resistance rises with the **4th power** of the radius: 1 mm of oedema in a 4.5 mm airway is catastrophic, in an adult nothing.',
    '- Defect: one printing keys *“adult epiglottis is curved and folded”* — the omega epiglottis is the **infant’s**. Key as printed.',
    '- Defect: recanalisation keyed at the **7th month** off the fetal-phase line; standard embryology says ~10 weeks *(not in course material)*. Key as printed.',
    '',
    'Src: L12; L6; cricothyroid supply L1.1, L11'
  ].join('\n'),
  qs: ['entqb-thr5-248','entqb-thr5-249','entqb-thr5-250','entqb-thr5-251','entqb-thr5-255','entqb-thr8-378','entqb-thr8-379']
},

{
  id: 'paed-2', w: 'must',
  h: 'The congenital anomalies — rank, cry, onset, phase',
  body: [
    '**Order of incidence: LARYNGOMALACIA (60 %) > congenital VC paralysis (10 %) > congenital subglottic stenosis > laryngeal web > posterior laryngeal cleft.** **Commonest is not most serious — subglottic stenosis is third and the most serious.**',
    '',
    '|Presentation|Lesions|',
    '|---|---|',
    '|**STRIDOR**, persistent or recurrent|laryngomalacia · congenital subglottic stenosis · **bilateral ABDUCTOR** cord paralysis · **thick** laryngeal web|',
    '|**ABNORMAL / WEAK CRY**|**laryngeal web** · vocal cord paralysis|',
    '|**ASPIRATION / CHOKING**|**bilateral ADDUCTOR** cord paralysis · **severe** laryngomalacia · **posterior laryngeal cleft**|',
    '',
    '- **THE CRY LOCALISES THE LESION.** Abnormal or weak cry = lesion **on the cords** — web or palsy. Normal cry = cords spared, so **supraglottic** (laryngomalacia) or **subglottic** (stenosis, haemangioma). **Stridor + weak cry = WEB · stridor + normal cry = SUBGLOTTIC STENOSIS.**',
    '- **ONSET DATES IT.** *Immediately after birth* — **subglottic stenosis, congenital VC paralysis**. *First week* — **laryngomalacia**. *First 6 months* — **subglottic haemangioma**.',
    '- **PHASE SITES IT. Inspiratory = supraglottic or glottic · biphasic = subglottic or tracheal (fixed) · expiratory = bronchial.**',
    '- **Rankings follow the adjective:** congenital and neonatal → **laryngomalacia** · **extralaryngeal** congenital → **VASCULAR RING** · infectious → **croup**.',
    '- Defect: two printings key **acute non-specific laryngitis** as commonest cause of stridor “in infants” and “in children”, off the first line of the children column, while the same lecture’s laryngomalacia slide calls that the most frequent cause in children. Read **acute** against **chronic**; keys as printed.',
    '- **Congenital EXTRAlaryngeal: cystic hygroma · congenital goitre · thymic remnants and cysts · mediastinal swellings, e.g. teratoma · tracheal stenosis · tracheomalacia · VASCULAR RING**; dermoid cyst among the external anomalies. A ring encircles trachea **and** oesophagus.',
    '',
    'Src: L12; L6'
  ].join('\n'),
  qs: ['entqb-thr5-252','entqb-thr5-253','entqb-thr5-254','entqb-thr5-271','entqb-thr8-393','entqb-thr8-395','entqb-thr8-400','entqb-thr8-404','entqb-thr8-435','entep-throat-29','entep-throat-101','entep-mfe5-13']
},

{
  id: 'paed-3', w: 'must',
  h: 'Laryngomalacia — the disease',
  body: [
    '**Laryngo = larynx, malacia = abnormal flaccidity: COLLAPSE OF THE SUPRAGLOTTIC COMPONENTS DURING INSPIRATION — epiglottis, aryepiglottic folds, arytenoids.**',
    '',
    '|Figure|Value|',
    '|---|---|',
    '|**Commonest congenital laryngeal anomaly**|**60 %**|',
    '|**Commonest cause of chronic stridor in infants**|—|',
    '|**Boys : girls**|**2 : 1**; commoner in **prematures**|',
    '|**GERD association**|**80–90 %** (one printing says 75–80 %)|',
    '|**Synchronous airway anomalies**|**15–20 %**|',
    '|**Spontaneous resolution**|**18–24 months in 80–90 %**; improved by age 2 in **90 %**|',
    '',
    '**High-pitched INSPIRATORY stridor** from the **first days to weeks** — not at birth — harsh, crowing, intermittent, **worsening over 6–9 months** before it settles.',
    '**WORSE: supine · feeding · agitation and crying · neck flexion. BETTER: prone · neck extension · held upright · mandible elevated.**',
    '**Cry and voice NORMAL · feeding NORMAL (interrupted only in severe cases) · general condition NORMAL · no aspiration.**',
    '- **Positional variation is the discriminator** — a fixed lesion does not change with posture.',
    '- **Olney types** *(classification not in course material)*: **1 tight aryepiglottic folds · 2 redundant arytenoid mucosa · 3 POSTERIOR DISPLACEMENT OF THE EPIGLOTTIS** — the three structures the lecture lists as collapsing, and the three supraglottoplasty addresses.',
    '',
    'Src: L12; L6'
  ].join('\n'),
  qs: ['entep-throat-97','entep-enr-16','entqb-thr5-257','entqb-thr5-282','entqb-thr8-392','entep-throat-case-16']
},

{
  id: 'paed-4', w: 'must',
  h: 'Laryngomalacia — confirming it, and when to operate',
  body: [
    '**Diagnosis = clinical picture + ENDOSCOPY. NO diagnostic radiological feature** — imaging cannot confirm it. **Flexible endoscopy under local**, or **rigid direct endoscopy under GA only during INDUCTION and RECOVERY** — a fully anaesthetised child does not collapse the supraglottis.',
    '**Endoscopy: OMEGA-shaped (infantile) epiglottis · SHORT aryepiglottic fold · REDUNDANT MUCOSA over tall, thin, flaccid arytenoids · epiglottis collapsing on inspiration · signs of GERD.** *“Long aryepiglottic fold”* is the standing keyed falsehood.',
    '**Conservative, and the answer in a thriving baby: 1) ASSURANCE OF THE PARENTS · 2) ANTI-REFLUX — feeding type, position, proton pump inhibitor, prokinetic · 3) FOLLOW-UP, monitoring GROWTH and respiratory distress.**',
    '**Surgery, indicated by any one of: severe stridor with CYANOTIC ATTACKS · weight loss, FAILURE TO THRIVE · chest deformity (PECTUS EXCAVATUM) · pulmonary hypertension / cor pulmonale · hypoxia, hypercarbia.**',
    '**SUPRAGLOTTOPLASTY (laser): aryepiglottic fold lysis · trimming or partial amputation of the epiglottis · vaporisation or removal of redundant supra-arytenoid mucosa and the lateral epiglottic borders.** **Tracheostomy is the second option** — it bypasses rather than treats.',
    '- Defect: one “except” calls a **glottic web** untypical of *congenital laryngeal stenosis* while listing three laryngomalacia findings; the stem means laryngomalacia, and read literally a web **is** a congenital stenosis. Key as printed.',
    '',
    'Src: L12; L6'
  ].join('\n'),
  qs: ['entqb-thr5-258','entqb-thr5-259','entqb-thr5-260','entqb-thr5-261','entqb-thr5-262','entqb-thr9-451']
},

{
  id: 'paed-5', w: 'must',
  h: 'The other four congenital lesions',
  body: [
    '|Lesion|Numbers and causes|Presentation|Treatment|',
    '|---|---|---|---|',
    '|**CONGENITAL VC PARALYSIS**|**10 % of congenital laryngeal lesions. Bilateral : unilateral = 1 : 4.** **Unilateral (Lt > Rt)** — cardiovascular anomalies (**VSD, Fallot’s tetralogy, PDA**); surgery for **T-E fistula**, congenital heart disease, cervical oesophagostomy. **Bilateral** — **central** (**meningomyelocele, Arnold-Chiari, bulbar palsy**), **birth trauma** (prolonged 2nd stage, **forceps**), hereditary very rare|**Unilateral: WEAK BREATHY CRY**, aspiration of pharyngeal secretions, choking and cyanotic attacks on feeding (rare). **Bilateral: severe inspiratory stridor IMMEDIATELY after birth**, better asleep, worse on activity|**Unilateral — NONE, resolves spontaneously.** **Bilateral — tracheotomy and follow-up**, then arytenoidectomy or cordotomy|',
    '|**CONGENITAL SUBGLOTTIC STENOSIS**|**< 4 mm at term, < 3 mm preterm; normal 4.5 mm.** **3rd commonest, THE MOST SERIOUS.** Cartilaginous or soft-tissue. Failure of complete recanalisation|**Severe: stridor and cyanosis IMMEDIATELY after birth. Mild–moderate: PERSISTENT CROUP (stridor > 3 weeks) · difficult intubation under GA · DIFFICULT DECANNULATION.** **BIPHASIC** — fixed narrowing at a complete ring. Cry normal|Conservative + follow-up if mild · **tracheotomy and follow-up, many outgrow it** · endoscopic|',
    '|**LARYNGEAL WEB**|Fibrous band from **INCOMPLETE RECANALISATION**. Thin membranous / fibrous / cartilaginous. **GLOTTIC commonest** · interarytenoid (posterior glottic) · subglottic, with SG stenosis in **1 : 3** · supraglottic very rare|**ABNORMAL CRY OR VOICE**; **feeding normal**; distress and stridor **only with a thick large web** or the associated stenosis. Clinical, endoscopy, lateral X-ray and CT|**Bronchoscopic dilatation · MLS + KEEL insertion · laser incision + keel · laryngofissure + keel**|',
    '|**SUBGLOTTIC HAEMANGIOMA**|**Vascular malformation from mesodermal rests**, subglottic. **50 % have haemangiomas elsewhere in the head and neck. FEMALE : MALE = 2 : 1** — reverse of laryngomalacia|**Inspiratory stridor at ~6 MONTHS** as it proliferates, worse on crying and feeding. **Endoscopy and imaging — NEVER BIOPSY**|**PROPRANOLOL first-line** *(not in course material — the slide predates it)*. Slide list: **tracheotomy, follow-up for spontaneous regression at 2–4 years** · corticosteroid, systemic or intralesional · laser · interferon · cryosurgery · external irradiation · excision|',
    '',
    '- Defect: one vignette keys **subglottic stenosis** off a *“normal cry”*, which does not separate it from laryngomalacia — both spare the cords — while its own wording (worse on feeding or crying) is the lecture’s laryngomalacia line. Key as printed.',
    '',
    'Src: L6; L12'
  ].join('\n'),
  qs: ['entqb-thr5-256','entqb-thr5-289','entqb-thr5-297','entqb-thr9-452','entqb-thr9-458']
},

{
  id: 'paed-6', w: 'must',
  h: 'The acute laryngeal infections of childhood',
  body: [
    '**ACUTE NON-SPECIFIC LARYNGITIS is the umbrella and it holds three: acute VIRAL LARYNGITIS · acute EPIGLOTTITIS (= supraglottitis) · acute LARYNGOTRACHEOBRONCHITIS (= CROUP).** A fourth, membranous LTB, is asked here and is on no slide.',
    '',
    '||**VIRAL LARYNGITIS**|**CROUP** (LTB)|**EPIGLOTTITIS**|**MEMBRANOUS LTB** *(not in course material)*|',
    '|---|---|---|---|---|',
    '|Level|glottic|**SUBglottic**|**SUPRAglottic**|tracheal|',
    '|Organism|**rhinovirus, RSV, parainfluenza, adenovirus**|**PARAINFLUENZA** (RSV next)|***H. INFLUENZAE type b, 90 %***, other 10 %|***Staph. aureus***, strep, Moraxella, Haemophilus|',
    '|Age|any|**6 months – 3 years**|**2–6 y (L12) · 3–7 y (L6)**|any child|',
    '|Onset|days|**GRADUAL, days**|**RAPIDLY PROGRESSIVE, overnight**|after a viral illness|',
    '|Fever|low grade|low grade|**> 38.5 °C**|**high**|',
    '|Cough|dry|**BARKING**|**ABSENT**|harsh|',
    '|Voice|**hoarse, dysphonia**|**HOARSE**|**MUFFLED**|—|',
    '|Swallow|normal|normal|**SEVERE ODYNOPHAGIA, DROOLING**|—|',
    '|Posture|normal|normal|**sitting upright, neck extended, irritable, open mouth**|**TOXIC**|',
    '|Stridor|**only under 1 year**|**BIPHASIC**|**INSPIRATORY**|**biphasic**|',
    '|Film / scope|—|**STEEPLE sign** — ballooned hypopharynx, narrowed subglottis|**THUMBPRINT (“cucumber”) sign**, lateral neck film|**fibrinous membrane**, thick purulent secretions|',
    '',
    '- **Croup: commonest infectious cause of airway obstruction in children**, and commonest cause of laryngitis in children. **Runny nose then a barking cough** opens it.',
    '- **LARYNGOSCOPY IS CONTRAINDICATED IN EPIGLOTTITIS. The HIB vaccine cut incidence by > 90 %**, but it *can occur at any age*.',
    '- **Sign and phase follow the level:** supraglottic → inspiratory → thumbprint, **lateral** film; subglottic → biphasic → steeple, **AP** film.',
    '- Defect: one vignette states *“no cough or fever”* then prints 39.1 °C — transcribed as printed.',
    '',
    'Src: L12; L6'
  ].join('\n'),
  qs: ['entep-throat-3','entep-throat-102','entep-mfe1-2','entep-enr-7','entqb-thr5-263','entqb-thr5-264','entqb-thr5-266','entqb-thr5-267','entqb-thr5-268','entqb-thr5-270','entqb-thr5-273','entqb-thr5-274','entqb-thr5-275','entqb-thr5-276','entqb-thr5-278','entqb-thr5-284','entqb-thr5-287','entqb-thr8-436','entep-throat-case-21']
},

{
  id: 'paed-7', w: 'must',
  h: 'Treating the four',
  body: [
    '|Disease|Treatment|',
    '|---|---|',
    '|**Acute viral laryngitis**|**CONSERVATIVE — NO ANTIBIOTIC.** Antipyretics · humidification · decongestants · **voice rest**|',
    '|**Croup**|Good hydration · analgesics, antipyretics · **NEBULISED RACEMIC EPINEPHRINE** · **steroids, systemic AND nebulised** · antibiotics · **severe obstruction, rare: intubation or tracheostomy**|',
    '|**Acute epiglottitis**|**EMERGENCY — SECURE THE AIRWAY FIRST: intubation, tracheostomy if that fails.** Then **steroids in MASSIVE dose** · **CEFTRIAXONE immediately** · analgesics, antipyretics, fluids, observation. **Constant hospital supervision mandatory; never managed at home.** Do not examine the throat|',
    '|**Membranous LTB** *(not in course material)*|**PULMONARY TOILET — bronchoscopic clearance of pus and pseudomembrane — plus IV anti-staphylococcal antibiotics**, usually with intubation and intensive care|',
    '',
    '- Defect: one “except” asserts **ampicillin-sulbactam is “most used”** where the slide names **ceftriaxone** and never mentions it, so that stem arguably carries two false options. Key as printed.',
    '',
    'Src: L12; L6'
  ].join('\n'),
  qs: ['entqb-thr5-265','entqb-thr5-269','entqb-thr5-277','entqb-thr5-279','entqb-thr5-280','entqb-thr5-290','entqb-thr5-295']
},

{
  id: 'paed-8', w: 'must',
  h: 'JORRP, and the benign laryngeal tumours',
  body: [
    '**Benign laryngeal tumours, the whole slide: MULTIPLE JUVENILE PAPILLOMATOSIS · CHONDROMA · HAEMANGIOMA.** Malignant ones are sited by **when** stridor appears: **glottic and supraglottic → LATE · subglottic → EARLY**.',
    '',
    '**JORRP — juvenile-onset recurrent respiratory papillomatosis.**',
    '- **Aetiology: HPV**, recognised as the agent for over two decades; **types 6 and 11**.',
    '- **Commonest BENIGN tumour of the larynx**; infants and children.',
    '- *“A frustrating disease”* on the two counts the slide names: **RECURRENCE TENDENCY** and **AIRWAY COMPROMISE**.',
    '- **Residual viral genome persists in tissue treated by standard surgical therapy → CHRONICITY and RECURRENCE.**',
    '- **Despite multiple therapeutic protocols, NO CONSISTENTLY EFFECTIVE TREATMENT of RRP is available.**',
    '- **Multiple · recurrent · seeds onto traumatised epithelium — implantation, the isomorphic phenomenon. So AVOID TRACHEOSTOMY.**',
    '- **NOT precancerous** — the standing “all except”. **Spontaneous involution at puberty.**',
    '- Picture: **months of hoarseness**, then **stridor**, **afebrile**, **warty growths on both cords** narrowing the respiratory chink.',
    '- **Treatment: endoscopic debulking — laser, microdebrider — with mitomycin, valacyclovir, indol-3-carbinol, isotretinoin.** **Intralesional CIDOFOVIR is the commonest medical adjunct** *(not in course material)*.',
    '',
    'Src: L6 (JORRP slides, benign tumour list); L2 (HPV 6/11, involution, avoid tracheostomy, drug list)'
  ].join('\n'),
  qs: ['entep-throat-68','entep-throat-137','entep-mfe4-10']
},

{
  id: 'paed-9', w: 'know',
  h: 'Three more the bank asks',
  body: [
    '- **Developmental lesions — the slide names them and stops: SACCULAR CYST and LARYNGOCELE.** Cyst = **fluid-filled, no communication** with the lumen; laryngocele = **air-filled dilatation of the saccule that does communicate** *(distinction not in course material)*. **Neither is a recanalisation failure** — that gives subglottic stenosis, web or atresia; **laryngomalacia is flaccidity of normally formed structures**.',
    '- **Cri du chat — 5p deletion** *(whole entity not in course material)*: **microcephaly and intellectual disability**, **HIGH-pitched cat-like cry** from a small larynx with a **diamond-shaped posterior glottic chink** — **structurally abnormal**, and **glottic**, so no biphasic stridor.',
    '- **Inhaled foreign body**, the line one case here turns on: **choking attack while eating → quiet interval → persistent cough, dyspnoea or unilateral wheeze** in a toddler. **Rigid bronchoscopy under GA**; a normal film excludes nothing. Incidence, impaction sites and the expiratory film sit in `ent-stridor`.',
    '',
    'Src: L6 (developmental slide); L12 (foreign body); cri du chat unsourced'
  ].join('\n'),
  qs: ['entqb-thr9-453','entep-throat-case-19']
}

    ]
  }
};
