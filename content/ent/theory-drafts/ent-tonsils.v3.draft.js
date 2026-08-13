/* ent-tonsils v3 — "Tonsils and adenoids", ENT.
   Rewritten 2026-08-14 under START-HERE.md §14 (slide-density revision notes),
   matching the approved ent-stridor.v2 format.
   The shipping version was 23 sections / 10,384 body words / 30 printed pages
   and was rejected for length. This is 14 sections inside a 2,400 body-word cap.
   Lectures: L3 1,791 w (this chapter's own) · L4 1,476 · L9 1,131.

   FLOOR KEPT BOTH WAYS — every fact, number, list, classification, eponym and
   sign L3 states, plus what L4/L9/L1.2/L15/L17,18 add here, and every linked
   question's KEY and DISCRIMINATOR as a line or a table cell.
   All 117 question ids preserved, redistributed across the merged sections.

   OMISSION NOTE — each cut is a decision on the record:
     1. Distractor-by-distractor rejection. It already lives in every question's
        own `explanation`, one tap away through the qs links (§14.2). Kept only
        where the teaching point is telling two look-alikes apart, and then as a
        table or a paired line.
     2. Question ids in body text, teaching voice, bank meta-commentary, long
        block quotes, per-fact citation clauses (one Src line per section now),
        prose restating a table, and the closing "sieve" section.
     3. Mechanism-of-why passages that are not themselves a tested discriminator
        — the adenoid biofilm/reservoir account, EBV B-cell vs Downey-T-cell
        immunology, paediatric shock compensation physiology, the AP-vs-lateral
        radiographic argument, Grisel's venous-plexus route, why coblation beats
        cautery, the reasoning behind the under-3 rule and the cleft exception
        beyond one clause each. Every FACT they supported is kept.
     4. Comparative reasoning against untested imaging options (angiography,
        examination under GA) dropped; CT/MRI/ultrasound kept to one clause.
     5. Repetition between the membrane master table (tons-5) and the specific
        infections (tons-6): clincher, fever and treatment live in the table
        ONCE; tons-6 carries only what the table cannot hold.
     6. Free-standing definitions the questions never test — Centor scoring
        arithmetic, Brodsky's percentage rationale, the Paul-Bunnell antigen
        chemistry — reduced to the tested number or name only.

   CROSS-CHAPTER DEFERRALS — named, per §14.5. Nothing L3 states is deferred;
   these are L4 slides that none of this chapter's 117 questions tests:
     · Intratonsillar abscess, parapharyngeal abscess, acute and chronic
       retropharyngeal abscess, Ludwig's angina, deep-neck-space anatomy,
       Hilton's manoeuvre and the quinsy incision points  ->  `ent-pharsupp`.
     The quinsy facts these questions DO test are kept, in tons-4 and tons-5.

   Table pipes carry no padding — mdCells() trims outer delimiters. */

var THEORY_ENT_TONSILS = {
  'ent-tonsils': {

    intro: 'Timing, lists and look-alikes. Post-tonsillectomy bleeding is asked by the clock, the “all except” stem demands every option, one table answers the whole membrane differential, and one clause decides each vignette. The numbers are examined verbatim.',

    sections: [

{
  id: 'tons-1', w: 'must',
  h: 'Waldeyer’s ring and the palatine tonsil',
  body: [
    '**Waldeyer’s ring** — **discontinuous ring of lymphoid tissue**, naso- and oropharynx; **primary immune defence against inhaled or ingested pathogens**.',
    '',
    '- **Five: adenoid** (single, midline, nasopharyngeal roof and posterior wall) · **tubal tonsils of Gerlach** · **palatine** · **lingual** · **lateral pharyngeal bands**.',
    '- **Not members: Henle’s nodes** — retropharyngeal, source of the acute retropharyngeal abscess, *“atrophy about the fifth year”* (true; only membership false). **Delphian** = pretracheal.',
    '- **Non-encapsulated MALT, NO AFFERENT LYMPHATICS.** Secretes **IgG, IgM, IgA, IgE**, **not IgD** *(not in course material)*. Most active **4–10 yrs**. Hypertrophy is a response; no immunodeficiency after removal.',
    '',
    '**Palatine tonsil** — **almond-shaped compact dense lymphoid tissue**, **flush with the fauces** when normal; **8–30 crypts**, largest the **crypta magna** (quinsy’s route); debris → **tonsilloliths**; **fibrous capsule** laterally.',
    '',
    '- **Bed: superior constrictor** (never middle) · **glossopharyngeal nerve** · **facial artery** · buccopharyngeal fascia. **Internal carotid ~2.5 cm behind and lateral**, sometimes tortuous — deep cautery or dissection **laterally** reaches it.',
    '- **Arteries: tonsillar branch of the FACIAL = main** · ascending palatine · dorsalis linguae · descending palatine · ascending pharyngeal — **all external carotid**. **Paratonsillar vein** = upper-pole ooze.',
    '- **Lymph: upper deep cervical, esp. JUGULODIGASTRIC** (level II). **Tender = acute · firm non-tender bilateral child = chronic · painless firm adult node = malignancy** *(last not in course material)*.',
    '',
    '**Referred otalgia** — local 95 %, referred 5 %:',
    '',
    '|Nerve|From|Ear branch|',
    '|---|---|---|',
    '|**V**|Teeth, TMJ, oral cavity, anterior tongue|Auriculotemporal|',
    '|**IX**|**Tonsil, fossa, soft palate, posterior tongue, nasopharynx**|**Jacobson’s**|',
    '|**X**|Vallecula, epiglottis, larynx, hypopharynx, oesophagus (**internal br. superior laryngeal**)|Arnold’s|',
    '|**C2, C3**|Neck, cervical spine|Great auricular, lesser occipital|',
    '',
    '- Tonsillar otalgia is **IX** — it lies in the bed — never vagal. **Earache after tonsillectomy is expected, not a complication:** worst **days 5–7**, **drum normal**; untreated → **dehydration**.',
    '',
    'Src: L3; L1.2; L4; L17,18'
  ].join('\n'),
  qs: ['entqb-thr4-247','entqb-thr4-168','entqb-thr4-150','entqb-thr4-224','entqb-thr4-196','entqb-thr4-172','entep-throat-109','entqb-thr4-201','entqb-thr1-30','entqb-thr4-225']
},

{
  id: 'tons-2', w: 'must',
  h: 'The adenoid, and how it differs from the tonsil',
  body: [
    '**Enlarged adenoids** = **hypertrophied nasopharyngeal lymphoid tissue** · **very common 2–6 yrs** · from **infections or allergies** · **can shrink naturally after 6–8 years** · **smooth soft cushion, many longitudinal ridges**, single pink pyramid.',
    '',
    '- **Curve:** submucosal **at birth** → **peak 2–6** → shrinks **after 6–8** → involutes at puberty → **adult adenoidal tissue is a red flag** (nasopharyngeal carcinoma, lymphoma, HIV) *(not in course material)*. “Submucosal at 4 years” is false.',
    '',
    '||**Adenoid**|**Palatine tonsil**|',
    '|---|---|---|',
    '|Number|**Single, midline** pyramid|**Paired**, lateral|',
    '|Capsule|**NONE**|**Definite fibrous capsule**|',
    '|Surface|**Longitudinal ridges**|**8–30 crypts** + crypta magna|',
    '|Epithelium|**Pseudostratified columnar ciliated**|Stratified squamous|',
    '|Afferents|**None**|**None**|',
    '|Drainage|**Upper deep cervical** + retropharyngeal|**Upper deep cervical**, esp. jugulodigastric|',
    '',
    '- **No capsule explains three things:** adenoidectomy is a **curettage, not a dissection** · **regrowth** in the very young · **residual tissue = commonest cause of primary bleeding**.',
    '- Keyed false: “distinct capsule” · “afferent lymphatics” · “vertical crypts”. Defect: GG keys involution at **11 years**; no slide states an age — key as printed.',
    '',
    'Src: L3'
  ].join('\n'),
  qs: ['entqb-thr4-149','entqb-thr4-150','entqb-thr4-151','entqb-thr4-166','entqb-thr4-173']
},

{
  id: 'tons-3', w: 'must',
  h: 'Pharyngitis — classification and the four clinical types',
  body: [
    '**Viral (L3):** rhinovirus · adenovirus · **Coxsackie** · parainfluenza · coronavirus · **EBV** · **HIV** · CMV. **Bacterial: “most important is Group A beta-haemolytic streptococci (GABHS)”** = *Strep. pyogenes*, **“most common cause in children (1/3 of cases) & about 10 % in adults”**.',
    '',
    '- **Read the stem:** commonest **CAUSE** = **viral**; commonest **ORGANISM / pathogen** = **Streptococcus haemolyticus**. Both keys right. **Rheumatic fever is a consequence, never a cause.**',
    '',
    '||**Acute**|**Chronic**|',
    '|---|---|---|',
    '|**Non-specific**|Ordinary viral or bacterial pharyngitis and tonsillitis|Chronic pharyngitis (catarrhal, hypertrophic/granular, atrophic); chronic adenoiditis|',
    '|**Specific**|**Diphtheria · scarlet fever · Vincent’s · herpangina · mononucleosis · candidiasis**|**Syphilis · tuberculosis** (also scleroma, leprosy)|',
    '',
    '- **“Chronic specific bacterial” → syphilis:** punched-out gumma, **“wash-leather”** slough, may perforate. **Pharyngeal TB:** shallow, undermined, exquisitely painful ulcers with lung disease. Both mimic malignancy — **biopsy a non-healing ulcer**. A **second branchial cleft fistula** is no pharyngitis. *(Bullet not in course material.)*',
    '- **Type decided by** host immunity · organism and toxins · tissue response, so appearance does not name the organism: **“throat swab generally not helpful!”** Defect: printed “all except”, keyed “all of the above”. *(List not in course material.)*',
    '',
    '|Type|Appearance|Organism|',
    '|---|---|---|',
    '|**Catarrhal (superficial)**|Surface epithelium only, mucus exudate, **tonsil NOT enlarged**|Usually **viral**|',
    '|**Follicular**|**Discrete yellow-white pus plugs at the crypt mouths**|**Bacterial (GABHS)**|',
    '|**Membranous**|Crypt exudate **coalesces into a sheet**|Bacterial, or specific|',
    '|**Parenchymatous**|**Whole substance uniformly enlarged and congested, no exudate**|Either|',
    '',
    '- **Enlargement discriminates:** *“tonsils will increase in size”* is false of the superficial types; enlarged substance **defines parenchymatous** *(morphology not in course material)*.',
    '- **Follicular = bacterial**; *“viral can present with follicular tonsillitis”* keyed **false** (viral = catarrhal, membranous or **vesicular**). Keyed true: non-infective can be catarrhal or parenchymatous · non-specific bacterial can be membranous · monilial is fungal. Defect: one list offers **catarrhal** and **superficial** separately though synonymous.',
    '',
    'Src: L3'
  ].join('\n'),
  qs: ['entep-throat-60','entep-throat-73','entqb-thr4-174','entqb-thr4-176','entqb-thr4-177','entqb-thr4-179','entqb-thr4-208','entqb-thr4-178','entqb-thr4-175','entqb-thr4-180','entqb-thr3-97','entep-throat-case-4']
},

{
  id: 'tons-4', w: 'must',
  h: 'Acute tonsillitis — picture, treatment, complications',
  body: [
    '**L3:** common; **children, peak 5–7 yrs**, and young adults; viral or bacterial. **Acute sore throat, fever, malaise ± referred otalgia · severe odynophagia may lead to dehydration · tender BILATERAL cervical lymphadenopathy · tonsils red and inflamed ± generalised pharyngitis · recurrence can lead to chronic tonsillitis.**',
    '',
    '- **Vignette:** 5–15 yrs · abrupt **38.5–39 °C** · **white pus on enlarged red tonsils** · **tender jugulodigastric nodes** · **no cough, no rash, no hoarseness** → **streptococcal tonsillitis**; “no cough” is the **Centor / McIsaac** clause *(score not in course material)*. Earache with a **normal drum** = referred IX pain.',
    '',
    '**Treatment (L3): 1** rest and plenty of fluids · **2** symptomatic for viral · **3** bacterial needs antibiotics — **penicillin V or ampicillin/clavulanic acid** · **4 tonsillectomy for recurrent acute (chronic) tonsillitis**.',
    '',
    '- **Penicillin first: GABHS never resistant; aim is eradication, preventing rheumatic fever and glomerulonephritis.** Symptomatic care alone is wrong; **tonsillectomy is #4, never #1**.',
    '- **Failure → amoxicillin-clavulanate, not a bigger dose** (beta-lactamase crypt commensals — **indirect pathogenicity**); check compliance, diagnosis, complication; allergy → macrolide *(not in course material)*.',
    '- **Ampicillin contraindicated in mononucleosis** → penicillin V in adolescents. **Never operate during an acute attack.** Course **10 days**; GG keys **2 weeks** for scarlet fever — as printed, no slide gives a duration.',
    '',
    '**Complications (L3): quinsy · rheumatic fever · acute glomerulonephritis.**',
    '',
    '- **Rheumatic fever** — **children 5–15 yrs**, **2–3 weeks** after a strept sore throat, **overreaction of the immune system to GABHS**; **fever, polyarthritis, jerky movements (chorea)**, carditis; **permanent heart damage (rheumatic heart disease)**.',
    '- **Acute glomerulonephritis** — **haematuria, proteinuria, oliguria, high BP, generalised oedema**; **children recover in weeks, 30 % of adults progress to chronic kidney disease**.',
    '- **Quinsy** (taught in `ent-pharsupp`): pus **between tonsillar capsule and lateral pharyngeal wall** via the **crypta magna**; **adult males, usually unilateral**, **streptococcus haemolyticus**. **Trismus · soft palate swollen above and lateral, tonsil pushed DOWN AND MEDIALLY, uvula to the OPPOSITE side · cannot swallow his own saliva · torticollis to the affected side · pale yellowish point = drainable.** **Tonsillectomy one month after the acute subsides.**',
    '',
    'Src: L3; L4'
  ].join('\n'),
  qs: ['entep-throat-111','entqb-thr4-203','entqb-thr4-222','entqb-thr4-230','entqb-thr3-97','entep-throat-case-4','entqb-thr1-30','entqb-thr4-240','entqb-thr4-241','entqb-thr4-200','entqb-thr4-244','entqb-thr4-176','entep-throat-60']
},

{
  id: 'tons-5', w: 'must',
  h: 'Membrane over the tonsil — the master differential',
  body: [
    '**True membrane** = fused with necrotic epithelium — **adherent, bleeds when peeled, re-forms. Only diphtheria.** **False (pseudo)membrane** wipes off. *(Histology not in course material; “thick gray true membrane” is L3.)*',
    '',
    '|Cause|Membrane|Clincher|Treatment|',
    '|---|---|---|---|',
    '|**Diphtheria**|**TRUE — thick, grey, adherent, BLEEDS, spreads beyond the tonsil**|**BULL NECK**, toxaemia, **LOW fever**|Isolation + **antitoxin early** + antibiotics|',
    '|**Mononucleosis**|False, grey, wipes off|**Fatigue · GENERALISED nodes · hepatosplenomegaly · atypical lymphocytes · palatal petechiae**; high fever|Supportive. **NO ampicillin**|',
    '|**Vincent’s angina**|False — grey slough over a **punched-out ragged ULCER**, bleeding base|**UNILATERAL, tonsil + gums · foul metallic breath · bleeding gums · barely ill**; little fever|**Penicillin + metronidazole**|',
    '|**Candidiasis**|False — **easily scraped off**|Denture · antibiotics · immunocompromised · **no fever, no pus**|Antifungal|',
    '|**Agranulocytosis / leukaemia**|Grey necrotic slough over ulcers|Ill, bleeding, pallor — the **blood film** decides|Treat the blood disease|',
    '|**Acute follicular tonsillitis**|Confluent pus plugs|Discrete crypt plugs, **tender LOCAL nodes**, no cough, **HIGH fever**|Penicillin|',
    '|**Post-tonsillectomy slough**|White slough on the beds, **5–15 days**|**Normal secondary-intention healing**|Reassure|',
    '',
    '- **“All cause a membrane EXCEPT” — three printings, three odd-ones-out, each right against its own list: peritonsillar abscess** (displaces the tonsil, surface normal) · **herpetic pharyngitis** (vesicles, never a sheet) · **scarlet fever** (rash and strawberry tongue).',
    '- GG prints **“trench fever”** meaning **Vincent’s angina**; the historical name is **trench mouth**.',
    '',
    'Src: L3; L4'
  ].join('\n'),
  qs: ['entep-throat-75','entep-throat-134','entqb-thr4-181','entqb-thr4-221','entqb-thr4-228','entqb-thr4-222']
},

{
  id: 'tons-6', w: 'must',
  h: 'Diphtheria, mononucleosis, Vincent’s, scarlet fever',
  body: [
    '*Clincher, fever and treatment are in the table above; only what it cannot hold is here.*',
    '',
    '**DIPHTHERIA (L3): *Corynebacterium diphtheriae*, gram-positive bacillus** · **respiratory droplets** · prevented by **DPT vaccination** · exotoxin → sore throat, **breathing difficulties** · **can cause skin sores and rash**.',
    '- **The membrane BLEEDS on removal** — the defining property; colour, spread and adenopathy are not. **Never dislodge it.** **Laryngeal: hoarseness + DRY brassy cough** (“wet cough” keyed false); toxin also → **myocarditis, peripheral neuropathy with palatal palsy**. **Contacts get active immunisation** (keyed true). **Isolate → airway → antitoxin EARLY → antibiotics.** Defect: an option calls the membrane **“well-defined”**. *(Cough quality, toxin effects not in course material.)*',
    '',
    '**MONONUCLEOSIS (L3): Epstein-Barr virus**, spread by saliva — the **“Kissing disease”** · **common contagious illness** · **teenagers and young adults** · **rash + swollen spleen or liver** less common · **paracetamol; avoid contact sports to avoid spleen rupture**.',
    '- **Paul-Bunnell / Monospot** = **non-specific IgM heterophile antibody**, often negative **in week 1 and under 4 years**. **Ampicillin → florid rash in the great majority; NOT penicillin allergy.** No contact sports **3–4 weeks**; **steroids only for airway obstruction**. Defects: a treatment stem whose four options all contain an antibiotic (key = the only pair avoiding ampicillin); a **one-day unilateral membrane** still keyed mononucleosis, on the petechiae. *(Serology, rash, steroids, interval, petechiae not in course material.)*',
    '',
    '**VINCENT’S ANGINA** — **fusospirochaetal symbiosis: fusiform bacilli (*Fusobacterium*, anaerobes) + *Borrelia vincentii***, both mouth commensals; **poor oral hygiene, smoking**, malnutrition, immunosuppression, stress. Historical name **trench mouth**; smear shows both. *(Absent from all 34 ENT files — not in course material.)*',
    '- **Ulcer edge:** ragged, punched-out, grey slough = **Vincent’s** · clean **“wash-leather”** = **syphilitic gumma** · raised, everted, indurated = **malignancy, biopsy** · shallow, undermined, very painful = **TB**. **“Punched-in and defined ulcers” is keyed false.**',
    '- **Penicillin** (*Borrelia*, streptococci) **+ metronidazole** (the **anaerobes**); oral hygiene, chlorhexidine, debridement. Defect: the box claims metronidazole covers **“anaerobic and aerobic”** — anaerobes only.',
    '',
    '**SCARLET FEVER** — streptococcal tonsillitis **plus a rash**; no immunity to the strain’s **erythrogenic exotoxin**; **throat culture positive for group A streptococci**. *(Not in course material beyond GABHS and its sequelae.)*',
    '- **Abrupt fever, headache, sore throat, dysphagia, vomiting** · **ENANTHEM: WHITE strawberry tongue** (coated, red papillae), desquamating **day 4–5** to the **RED** one · **EXANTHEM: fine punctate SANDPAPER erythema**, neck and upper trunk, **sparing palms and soles**, **circumoral pallor**, **Pastia’s lines**; fades **3–4 days**, then **desquamation ~a week later**.',
    '- **The EXANTHEM resolves in 3–4 days, not the enanthem** (keyed false). **Deciding clause: peeling 7 days after the rash — nothing else here desquamates.** **Full penicillin course**, not symptomatic care; amoxicillin-clavulanate second line; non-infectious after **~24 h**.',
    '',
    'Src: L3'
  ].join('\n'),
  qs: ['entqb-thr4-182','entqb-thr4-221','entqb-thr4-181','entep-throat-134','entqb-thr4-222','entqb-thr4-204','entqb-thr4-205','entqb-thr4-206','entqb-thr4-207','entqb-thr4-200','entqb-thr4-228','entep-throat-case-5','entep-throat-76','entqb-thr4-183','entqb-thr4-184','entqb-thr4-242','entqb-thr4-178','entqb-thr4-185','entqb-thr4-243','entqb-thr4-244']
},

{
  id: 'tons-7', w: 'high',
  h: 'The viral group, and fungal pharyngitis',
  body: [
    '**Viruses make VESICLES. Site and season name the virus.** Both give fever, sore throat and pain.',
    '',
    '||**Herpangina**|**Herpes simplex**|',
    '|---|---|---|',
    '|Virus|**Coxsackievirus** (enterovirus)|**HSV** — gingivostomatitis|',
    '|Site|**POSTERIOR — soft palate, tonsils, back of throat**; sores, blisters or ulcers|**ANTERIOR — gums, lips, tongue, inner cheeks**|',
    '|Season|**Summer**|**None**|',
    '|Treatment|**Symptomatic**|**Aciclovir**|',
    '',
    '- Posterior site is the whole herpangina discriminator; **dehydration is the only real risk**; **check hands and feet** for **hand, foot and mouth disease** *(not in course material)*. **Herpetic pharyngitis is the “membrane except” answer.**',
    '- **HERPES ZOSTER (L3): reactivation of varicella-zoster** · **IX and X RARE, trigeminal commoner** · **UNILATERAL sore throat, painful vesicles along the affected nerve** · **early antiviral (famciclovir)** — within ~72 h — to avoid **post-herpetic neuralgia**. **Zoster never crosses the midline** (keyed false): one sensory ganglion. **Ramsay Hunt** = geniculate zoster — facial palsy, vesicles in concha and canal, severe otalgia.',
    '',
    '**CANDIDIASIS (L3): most commonly *Candida albicans*** · commoner in **denture wearers, antibiotic treatment, immunocompromised after chemoradiotherapy** · **white patches easily scraped off** · **topical and systemic antifungal treatment**. **Commonest oral fungal infection.**',
    '',
    '- **Scrapes off** (red, sometimes bleeding base) **= candidiasis**; **adherent** = **leukoplakia** (potentially malignant — **biopsy**), the **diphtheritic membrane** (bleeds, re-forms) or **lichen planus** (lacy striae) *(contrasts not in course material)*.',
    '- **Candida is an opportunist** — all three lecture settings are failures of defence, and so is **HIV**, which L3 lists among the viral causes; **unexplained adult thrush raises HIV, diabetes or occult malignancy** *(not in course material)*.',
    '- **Free-text case:** 4-year-old · dysphagia · **no fever** · **antibiotics for 10 days** · **white-coated tongue** · no pus → **moniliasis**. Nystatin or miconazole topically, fluconazole if extensive, **and remove the cause** *(drugs not in course material)*.',
    '',
    'Src: L3; L15'
  ].join('\n'),
  qs: ['entqb-thr4-187','entqb-thr4-245','entqb-thr4-246','entqb-thr4-189','entep-throat-75','entqb-thr4-178','entqb-thr4-188','entqb-thr4-202','entep-throat-case-1','entqb-thr4-177']
},

{
  id: 'tons-8', w: 'must',
  h: 'Chronic tonsillitis and chronic pharyngitis',
  body: [
    '**Chronic tonsillitis = RECURRENT ATTACKS OF ACUTE TONSILLITIS.** L3 defines it by recurrence and never describes an appearance. **Counted, not looked at** — not a continuously sore throat, not a single quinsy.',
    '',
    '- **Signs: cheesy material oozing from the crypts on pressure over the anterior pillar** (most specific) · **anterior pillar congestion** · **firm, enlarged, NON-TENDER jugulodigastric nodes** · **irregular size, shape and crypts** · hypertrophy **or** a small fibrotic “septic” tonsil — **size alone means little**. **The submandibular salivary gland is not a sign.** *(Sign list not in course material.)*',
    '- **Bilateral, firm, non-tender jugulodigastric nodes in a child = chronic tonsillitis**; diphtheria, quinsy and Vincent’s give **tender** nodes.',
    '- **Cross-bank divergence, one word.** Endpoint keys **pillar congestion** as not a sign; GG, whose list reads **enlarged REGULAR crypts**, keys that. **Regular** crypts are normal variation, **irregular** crypts oozing cheese are chronicity. **Answer each bank its own way.**',
    '- **Chronic pharyngitis, four types** *(classification not in course material)*: **catarrhal** — congested boggy mucosa, excess mucus · **hypertrophic (granular)** — **granular posterior wall, hypertrophied follicles as red granules**, ± hypertrophied lateral bands · **atrophic** — **dry, thin, glazed, shiny**, crusting · **follicular**. **“Granular pharyngeal wall” → chronic hypertrophic.**',
    '- **Causes (L3):** chronic **mouth breathing** with **dry lips, tongue and pharynx**, and **chronic nasal discharge with post-nasal drip**; plus smoking, dust, reflux *(not in course material)*. **Treat the cause** — a granular pharynx in a mouth-breathing child argues for the **adenoid**.',
    '',
    'Src: L3'
  ].join('\n'),
  qs: ['entep-throat-77','entqb-thr4-224','entqb-thr4-223','entqb-thr4-225','entep-mfe4-26','entqb-thr3-98','entqb-thr4-191','entqb-thr4-208']
},

{
  id: 'tons-9', w: 'must',
  h: 'Hypertrophy, kissing tonsils, the unilateral tonsil',
  body: [
    '**Hypertrophy is a size finding, independent of inflammation.** L3 prints a slide headed **“KISSING TONSILS”**.',
    '',
    '- **Kissing tonsils = touching in the midline = grade 4. Brodsky: 0** in the fossa · **1** <25 % · **2** 25–50 % · **3** 50–75 % · **4** >75 % *(grading not in course material; “grade 4 = kissing tonsils” is the bank’s own, keyed true)*. **The grade never decides the operation — the symptoms do.**',
    '- **Vignette:** dysphagia, sleep apnoea, tonsils touching the midline, **no fever** → **chronic hypertrophic tonsillitis**. L9: **adenoid (most common cause in children), tonsillar hypertrophy, bulky tongue base** obstruct the pharynx; answered by **tonsillectomy** or **laser tonsillotomy**.',
    '- **Unilateral tonsillar enlargement is cancer until biopsy says otherwise** — L3’s sixth indication, **suspicion of tonsillar malignancy: unilateral enlarged tonsil, lymphoma or epidermoid carcinoma. The tonsillectomy is the biopsy.** Malignant: **squamous (epidermoid) carcinoma** (commonest; smoking, alcohol, HPV), **lymphoma**, lymphoepithelioma, adenocarcinoma. **BENIGN: schwannoma** *(all but the L3 pair not in course material)*.',
    '- **Tonsilloliths** — calcified crypt debris; **tonsilloliths with unpleasant halitosis** is an indication in its own right.',
    '',
    'Src: L3; L9'
  ].join('\n'),
  qs: ['entqb-thr4-172','entqb-thr4-168','entqb-thr4-197','entqb-thr3-98']
},

{
  id: 'tons-10', w: 'must',
  h: 'Indications for tonsillectomy',
  body: [
    '**L3, complete — the numbers are examined verbatim.**',
    '',
    '1. **Recurrent acute tonsillitis (chronic tonsillitis)** — **7+ documented episodes in one year**, **or 5+ for 2 years**, **or 3+ for 3 years**.',
    '2. **Peritonsillar abscess (quinsy).**',
    '3. **Tonsillitis causing febrile seizures.**',
    '4. **Bilateral tonsillar hypertrophy** causing **airway obstruction, difficulty in deglutition and/or interference with speech**.',
    '5. **Tonsilloliths with unpleasant halitosis.**',
    '6. **Suspicion of tonsillar malignancy** — **unilateral enlarged tonsil**, lymphoma or epidermoid carcinoma.',
    '',
    '- **Duration matters as much as the count:** *6 a year for two years* qualifies; **five in a single year does not** (7 is the one-year threshold).',
    '- **“Documented” = recorded by a clinician** *(not in course material)*. **Every indication is a consequence, never tonsil size**; **loss of appetite is not one** — keyed the odd one out.',
    '',
    'Src: L3'
  ].join('\n'),
  flow: {
    title: 'Should this tonsil come out?',
    steps: [
      { k:'decision', t:'Unilaterally enlarged tonsil, or suspicion of malignancy?', yes:'Tonsillectomy as a biopsy — lymphoma or epidermoid carcinoma until proved otherwise', no:'Continue' },
      { k:'decision', t:'Obstruction — sleep apnoea, difficult swallowing, speech interference?', yes:'Tonsillectomy, with adenoidectomy if indicated', no:'Continue' },
      { k:'decision', t:'Quinsy, or a febrile seizure with tonsillitis?', yes:'Tonsillectomy — quinsy one month after the acute episode settles', no:'Continue' },
      { k:'step', t:'Count DOCUMENTED episodes of acute tonsillitis', n:'7 in one year · OR 5+/year for 2 years · OR 3+/year for 3 years' },
      { k:'decision', t:'Does the count reach any one threshold?', yes:'Tonsillectomy for chronic (recurrent acute) tonsillitis', no:'Continue' },
      { k:'decision', t:'Tonsilloliths with disabling halitosis?', yes:'Tonsillectomy', no:'No indication — treat medically and keep a documented record' },
      { k:'alert', t:'Never operate during an acute attack', n:'Defer 3–6 weeks: friable hyperaemic tissue, spreading sepsis, a harder airway' },
      { k:'alert', t:'Check for a bleeding disorder first', n:'Haemophilia is the absolute contraindication. The mandatory investigation is a CBC' }
    ]
  },
  qs: ['entqb-thr4-193','entqb-thr4-161','entqb-thr4-160','entqb-thr4-172','entqb-thr4-223','entqb-thr4-197','entep-throat-case-4','entqb-thr3-98']
},

{
  id: 'tons-11', w: 'must',
  h: 'Tonsillectomy — contraindications, work-up, techniques',
  body: [
    '- **ABSOLUTE: a bleeding disorder — haemophilia is the key both banks give**, also leukaemia and thrombocytopenia; the beds heal **by secondary intention** over ~2 weeks, so there is no wound to close. **ABSOLUTE: overt or submucous cleft palate** — tonsils and pillars aid velopharyngeal closure.',
    '- **RELATIVE: acute tonsillitis or any acute infection — defer 3–6 weeks** (except a deliberate “hot” tonsillectomy for quinsy) · **uncontrolled systemic disease**, but **well-controlled diabetes is NOT one** · **poliomyelitis epidemic or immediate post-vaccination** · **age under 3, overridden by OSA**. **Chronic tonsillitis, quinsy, septic atrophic tonsils and hypertrophy with sleep apnoea are INDICATIONS**; “below 5 years” is no bar. *(List not in course material beyond L3 on bleeding: blood disease e.g. haemophilia, leukaemia.)*',
    '- **Mandatory pre-operative investigation: CBC** — haemoglobin and platelets; ESR, CRP, ASOT say nothing about safety. Add a coagulation screen and a **personal and family bleeding history**; **no aspirin for 10 days**; congenital heart disease needs intensive monitoring; **examine the palate for a bifid uvula or notched hard palate**.',
    '',
    '**Techniques (L3): 1 cold dissection / ligation** — scissors, scalpel or snare, no heat — **minimises tissue damage but MORE intraoperative bleeding** · **2 electrocautery (diathermy)** — cuts and seals vessels — **less bleeding but MORE postoperative pain** · **3 coblation** — bipolar radiofrequency plasma, **40–70 °C** — less damage, faster recovery · **4 microdebrider** — powered rotatory shaver, for **partial tonsillectomy (tonsillotomy)** for **airway obstruction in children** — faster recovery, less pain · **5 LASER and harmonic scalpel**.',
    '',
    '- **Coblation 40–70 °C · cautery 400 °C. Cold → less thermal damage, more bleeding on the table; hot → less bleeding, more pain afterwards.**',
    '- **EXTRACAPSULAR (total)** — entire tonsil and capsule, **exposing the superior constrictor**; for recurrent **infection**. **INTRACAPSULAR (partial)** — majority removed, **capsule left to protect the muscle**, less pain; for **obstruction**; **residual tissue can regrow** *(not in course material)*. **Least pain and haemorrhage = the partial procedure, whatever the instrument** — the raw muscle bed is never exposed.',
    '',
    'Src: L3'
  ].join('\n'),
  qs: ['entep-throat-124','entqb-thr4-192','entqb-thr4-226','entep-throat-59','entqb-thr4-162','entqb-thr4-164','entqb-thr4-194','entqb-thr4-163','entqb-thr4-172']
},

{
  id: 'tons-12', w: 'must',
  h: 'Post-operative haemorrhage, and the other nine complications',
  body: [
    '**L3: haemorrhage in less than 5 % of cases. Primary — during time of surgery. Reactionary — within the first 24 hours (high BP, slipped ligature, dislodged clot). Secondary — due to 2ry infection, usually 5–10 days post-op.**',
    '',
    '||**PRIMARY**|**REACTIONARY**|**SECONDARY**|',
    '|---|---|---|---|',
    '|When|**During the operation**|**Within 24 h** (classically 6–12 h)|**5–10 days**|',
    '|Tonsil|Surgical trauma; bleeding disorder|**High BP · SLIPPED LIGATURE · dislodged clot**|**Infection of the granulating bed; the slough separates**|',
    '|Adenoid|**REMNANT ADENOID TISSUE**; blood disease; **wrong diagnosis — angiofibroma**; prominent atlas|**DISLODGED CLOT** — nothing is ligated in an adenoidectomy|Infection|',
    '|Do|Control on the table|**Theatre** if brisk: remove clot, secure the bleeder|**ADMIT · OBSERVE · IV ANTIBIOTICS · IV FLUIDS**; surgery only if heavy or persistent|',
    '',
    '- **A rising pulse is the first sign of a child swallowing blood; falling BP is late** — **look in the mouth**. Monitoring pulse and BP is the **primary concern of postoperative care**; also repeated swallowing, pallor, restlessness; nurse lateral, head down. **Admit every secondary bleed, however small** — a few drops can herald a major one, and a near-normal Hb means no transfusion, not discharge. *(Reasoning not in course material.)*',
    '- **“Delayed haemorrhage” is not a category.** **The white slough at one week is normal healing** — L3: **secondary intention with a white slough**, shown at **5, 10 and 15 days**; **fever, worsening pain and halitosis mean infection**.',
    '- **L3’s complications 2–10: 2 dehydration** — poor fluid intake **caused by PAIN** · **3 dental injury** — intubation or mouth gag · **4 lingual nerve palsy** — prolonged mouth gag tongue-blade pressure, usually temporary · **5 internal carotid artery injury** — catastrophic, deep tonsillar bed cautery, suturing or dissection · **6 uvular oedema** — bilateral obstruction of uvular veins, may obstruct respiration · **7 velopharyngeal incompetence** — nasal regurgitation and nasal tone, temporary from palatal paresis, **permanent from palatal shortening by fibrosis** · **8 oropharyngeal stenosis** — excessive cautery injury, very difficult to treat · **9 chest complications “including pneumonia”** — aspiration during or immediately after surgery · **10 anaesthesia complications and haemorrhage account for the majority of deaths**.',
    '- **Pain classically worsens around days 5–7. Negative-pressure pulmonary oedema** follows relief of long-standing obstruction after adenotonsillectomy for severe OSA *(both not in course material)*.',
    '',
    'Src: L3'
  ].join('\n'),
  flow: {
    title: 'Bleeding after tonsillectomy or adenoidectomy',
    steps: [
      { k:'decision', t:'Is the bleeding DURING the operation?', yes:'Primary — control on the table. After adenoidectomy think residual adenoid tissue', no:'Continue' },
      { k:'decision', t:'Is it WITHIN 24 HOURS?', yes:'Reactionary — high BP, slipped ligature (tonsil) or dislodged clot (adenoid)', no:'5–10 days means SECONDARY' },
      { k:'alert', t:'Rising pulse with no visible bleeding = a swallowed bleed', n:'Look in the mouth. Falling BP is a late sign in a child' },
      { k:'step', t:'Reactionary — resuscitate, examine the fossa, remove clot', n:'Theatre if brisk or continuing' },
      { k:'step', t:'Secondary — admit, observe, IV antibiotics, IV fluids', n:'An infection problem before a surgical one' },
      { k:'decision', t:'Heavy, or continuing despite treatment?', yes:'Theatre — examine under GA, secure the bleeding point', no:'Continue antibiotics; group and save, transfuse only for a genuinely low Hb' },
      { k:'alert', t:'Admit every secondary bleed, however small', n:'A few drops can herald a major bleed, and swallowed blood hides the loss' }
    ]
  },
  qs: ['entep-throat-18','entep-throat-87','entep-throat-117','entep-throat-132','entep-throat-133','entep-nose-51','entep-mfe4-25','entep-mfe5-37','entep-mfe5-38','entep-mfe5-39','entqb-thr4-195','entqb-thr4-198','entqb-thr4-199','entqb-thr4-229','entqb-thr4-231','entqb-thr4-173','entqb-thr4-215','entep-throat-case-18','entqb-thr4-196','entqb-thr4-192','entep-throat-109','entqb-thr4-233']
},

{
  id: 'tons-13', w: 'must',
  h: 'Adenoid hypertrophy — the two obstructions, and diagnosis',
  body: [
    '**1. CHRONIC NASAL OBSTRUCTION (L3)** → **mouth breathing** — **snoring ± sleep apnoea, dry bleeding gums, dry lips, tongue and pharynx, DENTAL CARIES** · **chronic nasal discharge and post-nasal drip** — **chronic irritant cough**, even **laryngismus stridulus** · **chronic CO₂ retention** — **lassitude, dullness, nightmares, NOCTURNAL ENURESIS** · **nasal tone of voice** · **retarded general growth** · **ADENOID FACIES: open mouth · thick lips · hitched-up upper lip · protruding upper incisors · receding chin · INACTIVE ala nasi · absent nasolabial folds · high arched palate**.',
    '',
    '**2. EUSTACHIAN TUBE OBSTRUCTION (L3): frequent ear infections (AOM) · intermittent earaches · conductive hearing loss · chronic middle ear effusion (OME).** One midline mass blocks **both** tubes, ~1.5 cm behind the posterior end of the inferior turbinate.',
    '',
    '- **The keyed complication of chronic adenoiditis is recurrent otitis media. Recurrent BILATERAL AOM failing adequate medical treatment → adenoid hypertrophy**, and the answer is surgical. **Do not cauterise the torus tubarius** — scarring gives a **permanent middle-ear effusion**. **Recurrent ear disease plus mouth breathing needs a hearing test** *(not in course material)*.',
    '- **Traps:** the ala nasi is **INACTIVE**, and **dental caries genuinely belongs** · **only enuresis comes through the hypercapnia route**; snoring, apnoea and malocclusion are mechanical · **adenoid facies = longstanding bilateral nasal obstruction from ANY cause** · **the skeletal changes do not reverse**, so operate early · among orthodontic complications **Hutchinson’s notched incisors are the odd one out** — congenital syphilis, with interstitial keratitis and deafness (**Hutchinson’s triad**) *(last two not in course material)*.',
    '- **Laryngismus stridulus** — named, undefined on the slide: **paroxysmal reflex adductor spasm of the larynx**, nocturnal; **post-nasal drip, hypercapnia and cold dry mouth-breathed air** each trigger it, so a stem offering all three keys **all of the above** *(definition not in course material)*.',
    '- **Infant vignette:** 10-month-old · mouth breathing · sleep apnoea · **difficult suckling** → **adenoid hypertrophy** (infants are obligate nasal breathers). Not **bilateral choanal atresia** (at birth, cyclical cyanosis relieved by crying), **antrochoanal polyp** (older child, unilateral) or **angiofibroma** (adolescent male, epistaxis). Also the **commonest cause of mouth breathing in a 5-year-old** *(not in course material)*.',
    '- **Diagnosis (L3, in its order): 1 clinical picture · 2 endoscopic (flexible or rigid) examination · 3 plain X-ray nasopharynx, LATERAL view.** So best **imaging** → **plain lateral X-ray**; optimum **modality** with **flexible nasopharyngoscopy** offered → the **endoscope**, ranked above plain film. **Lateral, not AP** — only it silhouettes the pad against the air column. **CT** for bone or malignancy · **MRI** for a nasopharyngeal mass · **ultrasound cannot cross air** *(comparisons not in course material)*.',
    '- **Grading:** no slide grades the adenoid. GG keys **contact with the soft palate = grade 3**, grade 4 = complete choanal obstruction — give that; **Parikh calls the same finding grade 4**. **The grade never decides the operation.** *(Both systems not in course material.)*',
    '',
    'Src: L3; L1.2; L9'
  ].join('\n'),
  qs: ['entqb-thr4-156','entqb-thr4-157','entqb-thr4-158','entqb-thr4-211','entqb-thr4-217','entqb-thr4-219','entqb-thr4-155','entqb-thr4-220','entep-mfe1-3','entqb-thr4-191','entqb-thr4-167','entqb-thr4-160','entep-nose-56','entep-nose-75','entep-throat-110','entep-enr-11','entqb-thr4-232','entqb-thr4-159']
},

{
  id: 'tons-14', w: 'must',
  h: 'Adenoidectomy — indications, techniques, complications',
  body: [
    '**Indications (L3): 1 obstructive sleep-disordered breathing (MOST COMMON) · 2 recurrent/chronic otitis media (5+ times a year, or 3+ per year over two years) · 3 otitis media with effusion (adenoidectomy + ear tube insertion) · 4 chronic adenoiditis/sinusitis (over 3 months, not responding to antibiotics) · 5 orofacial/dental changes from persistent mouth breathing.** L9 agrees: **adenoid is the commonest cause of pharyngeal obstruction in children.**',
    '',
    '- Persistent adenoiditis, recurrent URTIs and recurrent otitis media are all indications, so **“all of the above”** is the key when offered together. **Allergic rhinitis is not** (medical), **nor loss of appetite, nor adenoid size.**',
    '- **The ladder — one stem, one clause changed, three answers. 2-year-old** with dental abnormalities, recurrent earaches, recurrent rhinosinusitis, mucus behind the soft palate → **conservative until age 3** · the same child **plus night snoring and daytime sleepiness** → **adenoidectomy now** · a **4-year-old** with the same picture and a **soft palate cleft into two halves** → **partial (superior) adenoidectomy only**. Tonsillectomy answers none of them.',
    '- **Wait under 3** for regrowth, natural involution and anaesthetic risk *(the cut-off is the bank’s own, not in course material)*; **OSA overrides** because harm accrues nightly — hypoxia, **failure to thrive**, irreversible orofacial change, cor pulmonale.',
    '',
    '**Techniques (L3): 1 conventional curettage** — sharp spoon-shaped curette, **fast but BLIND or mirror-guided, may leave residual tissue** · **2 suction diathermy** — vaporises tissue, **reduces intraoperative bleeding** · **3 coblation** — **40–70 °C against cautery 400 °C** · **4 microdebrider-assisted** — powered rotating blade, thin-layer resection **under direct visualisation** · **5 endoscopic-guided removal** — camera endoscope, **transorally or transnasally, during any of the above**.',
    '',
    '- **Curettage is blind** — residual tissue → primary bleeding, persistent symptoms, recurrence; the alternatives add **vision** or **haemostasis**. Defect: a stem asking which technique uses a microdebrider omits “microdebrider-assisted” — **endoscopic-guided** is the best option offered.',
    '- **Anaesthesia is GENERAL, always.** **No aspirin for 10 days**; congenital heart disease needs high-dependency care; a **submucous cleft requires a partial adenoidectomy**. **Keyed NOT true: “we start with tonsillectomy then adenoidectomy”** — the **adenoid comes out first**, then the nasopharynx is packed *(not in course material)*. **Discharge:** a day case; GG keys **3 hours** — as printed; most units observe 4–6 h and admit for OSA, bleeding tendency, comorbidity or age under 3 *(not in course material)*.',
    '',
    '**Complications (L3): 1 HAEMORRHAGE (most common)** — as tonsillectomy, from **incomplete removal of adenoid tissue · blood disease e.g. haemophilia, leukaemia · wrong diagnosis e.g. nasopharyngeal angiofibroma · injury to cervical vertebrae from a prominent atlas** · **2 infection, local or descending** · **3 dental injury** from intubation or mouth gag · **4 Eustachian tube injury** · **5 recurrence** in very young children or incomplete removal — **adenoids have no capsule** · **6 velopharyngeal insufficiency, especially with an unnoticed submucous cleft palate**.',
    '',
    '- **The nasal septum cannot be injured** — the operation is transoral; nor is nasal stenosis a complication.',
    '- **Angiofibroma:** curetting one causes torrential haemorrhage; **the patient at risk is an adolescent male with nasal obstruction AND epistaxis**. **The primary goal of pre-operative evaluation is bleeding risk**, so **haemophilia**, not a slipped ligature, is the keyed cause of primary bleeding.',
    '- **VPI (L1.2):** the **velopharyngeal sphincter** closes by **postero-superior movement of the soft palate, medial movement of the lateral pharyngeal walls and slight anterior movement of the posterior wall (Passawnt’s bridge)**, the **uvula perfecting the closure**; **the adenoid pad is part of the surface the palate closes against**, so removing it in a short or cleft palate gives **hypernasality (rhinolalia aperta) and nasal regurgitation**. **“Unnoticed” is the warning:** look for a **bifid uvula**, a **blue midline translucent zone**, a **notch in the posterior hard palate** *(signs not in course material)*. **Answer: partial (superior) adenoidectomy.**',
    '- **Grisel’s syndrome** — **non-traumatic atlanto-axial subluxation after a URTI or adenoidectomy**, in **children**, days to a fortnight later; **painful torticollis** (“cock-robin”), easily dismissed as a stiff neck; **CT of the craniocervical junction**; rest, analgesia, collar, antibiotics, then traction or fusion; **unrecognised it can compress the spinal cord**. *(Not in course material; L3 gives only “injury to cervical vertebrae: dt. prominent atlas”.)*',
    '',
    'Src: L3; L1.2; L9'
  ].join('\n'),
  flow: {
    title: 'An obstructing adenoid — operate, wait, or do a partial?',
    steps: [
      { k:'decision', t:'Cleft palate, submucous cleft, bifid uvula or notched hard palate?', yes:'Partial (superior) adenoidectomy only — leave the inferior pad, or velopharyngeal insufficiency follows', no:'Continue' },
      { k:'decision', t:'Obstructive sleep apnoea — witnessed apnoeas, snoring with daytime sleepiness, failure to thrive?', yes:'Adenoidectomy now, whatever the age — OSA overrides the under-3 rule', no:'Continue' },
      { k:'decision', t:'Is the child under 3 years old?', yes:'Conservative — treat predisposing factors and review. Regrowth, natural involution and anaesthetic risk all argue for waiting', no:'Continue' },
      { k:'decision', t:'Recurrent/chronic otitis media (5+/yr, or 3+/yr for 2 yrs), or OME?', yes:'Adenoidectomy — add grommets if there is an effusion', no:'Continue' },
      { k:'decision', t:'Chronic adenoiditis or sinusitis over 3 months not responding to antibiotics, or established orofacial change?', yes:'Adenoidectomy', no:'No indication — adenoid size alone is never one' },
      { k:'alert', t:'Allergic rhinitis is a medical problem', n:'Not an indication for adenoidectomy, however blocked the nose is' }
    ]
  },
  qs: ['entep-throat-35','entqb-thr4-160','entqb-thr4-161','entqb-thr4-234','entqb-thr4-235','entqb-thr4-236','entqb-thr4-155','entqb-thr4-219','entqb-thr4-163','entqb-thr4-233','entqb-thr4-162','entqb-thr4-237','entqb-thr4-164','entqb-thr4-173','entqb-thr4-166','entqb-thr4-167','entqb-thr4-213','entqb-thr4-215','entqb-thr4-216','entqb-thr4-238','entep-nose-51','entep-mfe4-25','entqb-thr4-231']
}

    ]
  }
};
