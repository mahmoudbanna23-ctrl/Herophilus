/* ent-otalgia — "Otalgia", ENT. Written from scratch 2026-08-14 under
   START-HERE.md §14 (slide-density revision notes). No v1 existed.

   BUDGET, computed before writing by `wc -w` on the lecture files actually used
   (§14.1 formula, and its note to sum the chapter's REAL lecture set):
       L17,18) Otorrhea and otalgia   684 w   (this chapter's own backbone)
     + L22) Anatomy of  Ear Undergraduate  538 w  (outer 1/3 cartilage + hair
       follicles = furunculosis; inner 2/3 bony and hairless; the ear's sensory
       supply and the four referred-otalgia nerves — keyed by ~12 questions)
     + L16) Chronic otitis media     884 w   (contributes exactly three keyed
       discriminators: "CSOM is not a painful condition", the mastoid pinna
       displacement, and petrositis/Gradenigo facial pain)
     = 2,106 body words, cap 3,000, floor 600.
   L15) Facial nerve disorders is cited for one Ramsay Hunt line only and is NOT
   counted — its 1,557 words belong to `ent-facial`'s budget.

   MEASURED OUTCOME: 1,752 body words over 12 sections — 354 UNDER budget. The
   remaining allowance was not spent: the two-sided coverage floor is met at
   this length, and padding to the ceiling would only add restatement.

   FLOOR KEPT BOTH WAYS — every fact, list, sign, organism, drug and number the
   OTALGIA half of L17,18 states, plus what L22 and L16 add here, and every one
   of the 75 linked questions' KEY and DISCRIMINATOR as a line or a table cell.
   All 75 ids linked, none dropped.

   OMISSION NOTE — cut on purpose, each a decision on the record:
     1. Distractor-by-distractor rejection. It lives in every question's own
        `explanation`, one tap away through the qs links (§14.2). Kept only
        where the teaching point IS the discrimination (haematoma vs
        perichondritis, tragal sign vs deep pain, localized vs diffuse otitis
        externa, exostosis vs osteoma, the painful/painless split) — as tables.
     2. Question ids in body text, teaching voice, bank meta-commentary,
        per-fact citation clauses (one Src line per section), closing summary.
     3. Mechanism-of-why that is not itself a tested discriminator: the
        branchial-arch derivation of the auricle's supply, the pathophysiology
        of diabetic microangiopathy beyond the one keyed phrase, the immunology
        of the immunocompromised host.
     4. Epidemiology and drug doses the material does not state.

   CROSS-CHAPTER DEFERRALS (§14.5) — named, so each is a promise not a deletion.
   Each was checked against all 75 of this chapter's questions: NONE tests it.
     A. THE WHOLE OTORRHOEA HALF OF L17,18 — this deck is two lectures in one
        file, and only its second half is otalgia:
          · The four discharge types (watery / mucoid / purulent / bloody) and
            the cause list for each                          ->  `ent-otorrhea`
          · CSF otorrhoea — temporal bone fracture types, HALO SIGN, beta-2
            transferrin, beta trace protein; conservative management (head
            elevation, drugs to lower CSF pressure, strict water precautions),
            exploration and repair if it fails; post-skull-base surgery
                                                              ->  `ent-otorrhea`
          · "No mucous glands in the EAC — mucus always comes from the middle
            ear"; mucopurulent = tubotympanic CSOM + AOM after perforation;
            purulent = external otitis + atticoantral CSOM  ->  `ent-otorrhea`
          · The safe-vs-unsafe CSOM discharge table (mucopurulent/profuse/
            intermittent/odourless vs purulent/scanty/continuous/fetid)
                                                    ->  `ent-csom` / `ent-otorrhea`
          · Bloody otorrhoea — skull base fracture, minor EAC trauma, carcinoma
            of the EAC; and GLOMUS TUMOURS (pathology, main types, clinical
            presentation, investigations, treatment)         ->  `ent-otorrhea`
     B. FROM THE BORROWED DECKS:
          · Acute mastoiditis in full, coalescent mastoiditis, mastoid fistula,
            cortical mastoidectomy, the intracranial complication lists, safe
            and unsafe CSOM, cholesteatoma (L16)                 ->  `ent-csom`
          · Gradenigo's triad in full (L16)                      ->  `ent-csom`
          · EAC and auricle anatomy in full — the two cartilage-deficient areas
            and the end-aural incision, the fissures of Santorini, "up and
            back" in the adult; the Eustachian tube, middle ear walls and
            contents, the inner ear (L22)                     ->  `ent-earanat`
          · Ramsay Hunt in full — the 30 % full-recovery figure, aciclovir,
            steroid regimen, prognosis against Bell's palsy (L15)
                                                                 ->  `ent-facial`
          · ASOM staging, treatment and the perforation sequence (L21.1)
                                                                    ->  `ent-aom`
     C. RECEIVED HERE from `ent-aom`'s own deferral register, as promised there:
        otitis externa, otomycosis, malignant otitis externa, furunculosis,
        hard impacted wax and bullous myringitis — all written in full below.

   Table pipes carry no padding — mdCells() trims outer delimiters.
   Curly apostrophes throughout: a straight one closes a single-quoted field. */

var THEORY_ENT_OTALGIA = {
  'ent-otalgia': {

    intro: 'Ninety-five per cent of ear pain is the ear; five per cent is a normal ear and a lesion elsewhere on V, IX, X or C2–C3. Examined three ways: the tragal sign, the diabetic whose drops fail, and which nerve refers what.',

    sections: [

{
  id: 'otal-1', w: 'must',
  h: 'The 95:5 split, and the sensory supply of the ear',
  body: [
    '**Otalgia = pain in the ear. LOCAL 95 %** — a lesion **in the ear or a nearby structure**. **REFERRED 5 %** — a lesion in a **remote area having the same nerve supply**.',
    '**Normal auricle, canal and drum with real pain = REFERRED**, until mouth, teeth, TMJ, tonsil, larynx, hypopharynx and cervical spine have been examined.',
    '',
    '|Part|Sensory supply|',
    '|---|---|',
    '|Auricle|branchial system — **great auricular + lesser occipital (C2–C3)**, **auriculotemporal (V)**, **auricular branch of vagus (X)**|',
    '|**External canal**|**V** and **X**|',
    '|**Tympanic membrane**|**V · IX · X**|',
    '|**Middle ear**|**IX** (Jacobson’s)|',
    '',
    '- **Four nerves reach the ear, so four territories can refer to it.** The vagal canal branch (**Arnold’s nerve**) is why **ear syringing or canal examination provokes cough** *(reflex not in course material)*.',
    '',
    'Src: L17,18; L22'
  ].join('\n'),
  qs: ['entep-ear-7','entep-ear-28','entep-ear-116','entqb-ear6-157']
},

{
  id: 'otal-2', w: 'must',
  h: 'Referred otalgia — four nerves, four territories',
  body: [
    '|Nerve|Territory|Causes|',
    '|---|---|---|',
    '|**V trigeminal**|**oral cavity, teeth, nose, NASOPHARYNX, sinuses, TMJ**|**dental caries**, **floor-of-mouth ulcer**, oral or nasopharyngeal cancer, sinusitis, **TMJ disease**|',
    '|**IX glossopharyngeal**|**tonsil and oropharynx**, tongue base|**tonsillitis**, **quinsy**, **POST-TONSILLECTOMY**, tongue-base carcinoma|',
    '|**X vagus**|**larynx and hypopharynx**|**SUPRAGLOTTIC CARCINOMA**, **PYRIFORM FOSSA tumour**, laryngeal ulcer|',
    '|**C2–C3**|neck and **cervical spine**|**cervical spine trauma**, spondylosis, **disc prolapse**, neck nodes|',
    '',
    '- **Referred otalgia is the EARLY / initial symptom of supraglottic carcinoma** — the most repeated single line in the model exams. **Unilateral otalgia + a normal ear in an older or smoking adult → scope the larynx and hypopharynx.**',
    '- **NOT referred: any lesion of the ear itself** — acute serous otitis media, ASOM, mastoiditis are all **local**.',
    '- **The brain is never a source** — it has no somatic sensation. Neck, pharynx, nose and eye all are.',
    '- **Acoustic neuroma** hurts through the **FACIAL** nerve, not VIII, which carries no pain fibres: **Hitzelberger’s sign** — altered sensation or numbness over the **concha and postero-superior canal wall** *(eponym and anatomy not in course material)*.',
    '',
    'Src: L17,18; L22'
  ].join('\n'),
  qs: ['enthd-ear-3','entep-ear-31','entep-ear-53','entep-throat-24','entep-mfe5-42','entqb-ear1-21','entqb-ear1-22','entqb-ear1-23','entqb-ear6-158','entqb-ear6-161','entqb-ear6-162','entqb-ear6-163','entqb-ear6-177','entqb-ear6-178','entep-case-32','entep-ear-116']
},

{
  id: 'otal-3', w: 'must',
  h: 'Local causes — the map, and the painless list',
  body: [
    '**EAR — external (pinna · EAC) and MIDDLE EAR. NEIGHBOURING STRUCTURES — TMJ · parotid gland · pre-auricular lymph nodes.**',
    '**Auricle: perichondritis · herpes zoster · gout. EAC: acute localized otitis externa (furunculosis) · acute diffuse otitis externa · otomycosis · herpes zoster · malignant external otitis · trauma · rarely HARD IMPACTED WAX and TUMOURS. Middle ear: ASOM before perforation · complicated CSOM · tympanic plexus neuralgia.**',
    '',
    '||**PAINFUL**|**PAINLESS**|',
    '|---|---|---|',
    '|Auricle|perichondritis, haematoma auris, herpes zoster, gout|—|',
    '|Canal|**furunculosis**, diffuse and **malignant** otitis externa, hard impacted wax|**OTOMYCOSIS** — pain means secondary bacterial infection · exostosis, osteoma, soft wax|',
    '|Drum|**bullous myringitis**|—|',
    '|Middle ear|**ASOM before perforation**, **complicated** CSOM, acute mastoiditis|**uncomplicated CSOM** — “is not a painful condition” · **effusion / glue ear**|',
    '|Inner ear|—|**LABYRINTHITIS** — no pain fibres in the inner ear|',
    '|Nearby|TMJ disease, parotitis, pre-auricular lymphadenitis|—|',
    '',
    '- **Labyrinthitis is the standing “except” answer** in any painful-condition list; it gives vertigo and hearing loss.',
    '- **Pain in a known CSOM is never the CSOM** — it means acute exacerbation, a complication, or malignancy.',
    '',
    'Src: L17,18; L16'
  ].join('\n'),
  qs: ['entep-ear-54','entep-ear-76','entep-ear-96','entqb-ear6-157','entqb-ear6-164','enthd-ear-36','entep-ear-7','entep-ear-28']
},

{
  id: 'otal-4', w: 'high',
  h: 'The auricle — haematoma and perichondritis',
  body: [
    '**Perichondritis** — infection of the perichondrium following **trauma to CARTILAGE: a high (cartilaginous) piercing, laceration, surgery, burns, or incising a canal furuncle.** **The LOBULE is spared — it holds no cartilage**, which is why a lobule piercing is safe and an upper-auricle one is not. ***Pseudomonas* is the usual organism** *(organism not in course material)*.',
    '',
    '||**HAEMATOMA AURIS**|**PERICHONDRITIS**|',
    '|---|---|---|',
    '|After|**blunt lateral blow** — boxer, wrestler|piercing, laceration, burn, **an undrained haematoma**|',
    '|Feel|**cystic, fluctuant, PAINFUL but NOT tender**, not hot|**red, hot, diffusely swollen, exquisitely TENDER**|',
    '|Lesion|**subperichondrial blood strips the cartilage from its blood supply**|infection of the perichondrium itself|',
    '|Treatment|**EVACUATE early** + pressure dressing|**antibiotics WITH surgical incision and drainage**|',
    '|Untreated|→ **perichondritis** → cauliflower ear|→ **ABSCESS** → **CAULIFLOWER EAR**|',
    '',
    '- **Cartilage is avascular: it dies under any collection left sitting on it.** Both complications on the slide are **abscess** and **cauliflower ear**.',
    '- Defect: one printed box answers **haematoma** treatment under a **perichondritis** stem — key (antibiotics with surgical incision) kept as printed.',
    '- **Herpes zoster and gout** are the other two auricular causes.',
    '',
    'Src: L17,18'
  ].join('\n'),
  qs: ['entep-ear-14','entep-ear-170','entep-ear-223','entqb-ear2-30','entqb-ear2-31','entqb-ear2-32','entqb-ear2-46','enthd-ear-40','entep-case-1']
},

{
  id: 'otal-5', w: 'high',
  h: 'External otitis — the classification and its predisposing factors',
  body: [
    '**INFECTIOUS · REACTIVE.** Infectious splits three ways: **BACTERIAL** — localized (**furunculosis**), **diffuse**, **malignant** · **FUNGAL** — otomycosis · **VIRAL** — bullous myringitis, herpes zoster.',
    '**Predisposing factors, one list for all of them: HOT WEATHER · HUMIDITY · SWEATING · MANIPULATION · IMMUNE DEFICIENCY · ALLERGY · EAR DISCHARGE.**',
    '- **Hyperhidrosis and diabetes both belong to that list**, and **treating the predisposing factor is part of the cure** — it is step 3 of diffuse otitis externa’s own treatment.',
    '',
    'Src: L17,18'
  ].join('\n'),
  qs: ['enthd-ear-41','entqb-ear2-37','entep-ear-107']
},

{
  id: 'otal-6', w: 'must',
  h: 'Furunculosis — localized external otitis',
  body: [
    '**A *Staphylococcus aureus* infection of a HAIR FOLLICLE.** So it is confined to the **OUTER ONE THIRD of the canal — cartilaginous, hair-bearing.** The **inner two thirds are BONY and carry no hair follicles** and can never harbour one.',
    '**Symptom: ear pain. Signs: TENDERNESS ON THE TRAGUS AND ON PULLING THE AURICLE · LOCALIZED SWELLING in the canal ± discharge.** The **drum is normal and intact**. **Pain increases on MASTICATION** — the cartilaginous canal moves with the TMJ.',
    '**Treatment: SYSTEMIC ANTIBIOTICS + ANALGESIA.**',
    '',
    '|Sign at the bedside|Diagnosis|',
    '|---|---|',
    '|**Tragal tenderness, pain on pulling the auricle, localized canal swelling**|**FURUNCLE** — outer third|',
    '|Same tenderness but **diffuse** canal redness and debris, itch first|**diffuse otitis externa**|',
    '|**Deep** pain, fever, **bulging drum**, **tragus free**|**ASOM** before perforation|',
    '|**Painless** discharge through a perforation|**CSOM**|',
    '|**Pinna pushed OUT and DOWN**, post-auricular swelling **filling the sulcus**|**MASTOID ABSCESS** — not a node|',
    '|Tragal sign positive **plus** a discrete mobile post-auricular node|**furuncle with reactive lymphadenitis**|',
    '',
    '- **It is NOT self-limiting**, and **it must not be incised** — the blade seeds avascular cartilage and causes **perichondritis**. **Recurrent attacks → screen for diabetes** *(both not in course material)*.',
    '- Defect: the bank writes the mastoid pinna as “pushed forwards and downwards” where L16 writes “outwards and downwards” — the same displacement from a different angle.',
    '',
    'Src: L17,18; L22; L16'
  ].join('\n'),
  qs: ['enthd-ear-18','enthd-ear-21','enthd-ear-38','enthd-ear-44','entep-ear-39','entep-ear-143','entep-ear-152','entep-ear-167','entep-ear-168','entep-ear-171','entep-ear-217','entep-ear-240','entep-enr-2','entep-enr-35','entep-enr-36','entqb-ear2-33','entqb-ear2-38','entqb-ear2-42','entqb-ear4-96','entqb-ear6-164','entep-case-4']
},

{
  id: 'otal-7', w: 'high',
  h: 'Diffuse external otitis',
  body: [
    '**Itch first, then pain and fullness; the canal is exquisitely tender to examine.** **Signs: DIFFUSE HYPERAEMIA of the whole canal · DISCHARGE and DEBRIS** — often serous, with **no single localized swelling**.',
    '**Treatment: 1) AURAL TOILETTE · 2) TOPICAL ANTIBIOTIC WITH STEROID DROPS · 3) TREAT THE PREDISPOSING FACTOR.**',
    '- **Localized = one furuncle → SYSTEMIC antibiotics. Diffuse = the whole canal → TOPICAL drops.** That is the treatment difference the two names carry.',
    '- **Itch preceding pain** points to a fungal or scratched start with bacterial superinfection — treat both.',
    '',
    'Src: L17,18'
  ].join('\n'),
  qs: ['entep-ear-107','enthd-ear-31','enthd-ear-41']
},

{
  id: 'otal-8', w: 'must',
  h: 'Malignant otitis externa — necrotizing external otitis, skull base osteomyelitis',
  body: [
    '**Not a neoplasm — “malignant” names the behaviour; there are no mitotic figures.** **Serious and potentially fatal**, with **intracranial spread and cranial nerve palsies**.',
    '**Host: IMMUNOCOMPROMISED — uncontrolled DIABETES, classically ELDERLY · renal failure · HIV · haematologic or immune deficiency disease.** **Organism: *PSEUDOMONAS AERUGINOSA*.** **Microangiopathy → osteomyelitis of the skull base.**',
    '**Symptoms: PAIN — chronic, WORSE AT NIGHT, may become disabling, far beyond diffuse otitis externa · ear discharge · hearing loss · symptoms of cranial nerve palsies.** **Signs: GRANULATION TISSUE in the canal floor · discharge · CRANIAL NERVES.** The **drum is typically intact**.',
    '**Suspect it whenever an external otitis fails to improve on topical drops** — the standing vignette is a diabetic ~10 days into drops with no change.',
    '',
    '|Structure reached|Deficit|',
    '|---|---|',
    '|**Stylomastoid foramen**|**LMN FACIAL PALSY** — the marker that disease has left the canal|',
    '|**Petrous apex**|**FACIAL PAIN** — trigeminal|',
    '|**Jugular foramen**|IX, X, XI — dysphagia, hoarseness, shoulder weakness|',
    '',
    '**Investigations: CT · MRI · ISOTOPE SCANNING (Tc99, Ga67) · bacteriological testing · BIOPSY**, which also excludes carcinoma.',
    '**Treatment: 1) CONTROL THE CAUSATIVE FACTOR · 2) hospitalisation may be needed initially · 3) SYSTEMIC ANTI-PSEUDOMONAL ANTIBIOTICS FOR 3–6 MONTHS, usually an IV COMBINATION · 4) DEBRIDEMENT of canal granulations (plus biopsy) · 5) HYPERBARIC OXYGEN.** *(Quinolones are the bank’s named agent; the slide says only “against pseudomonas”.)*',
    '- **Most feared complication = INTRACRANIAL SPREAD.** A short oral course, watchful waiting and myringotomy are all wrong answers.',
    '- Defect: one bank keys **V, VI and VII** as the nerves affected; no lecture names any — the slide states only “cranial nerves”, and **VII is classically first**. Keyed as printed.',
    '- Two printed stems name no disease at all (“infection spreading to which structure…”); both sit in the malignant-otitis-externa block and are read that way.',
    '',
    'Src: L17,18; L16'
  ].join('\n'),
  qs: ['entep-ear-13','entep-ear-69','entep-ear-131','entep-ear-220','entep-ear-246','entqb-ear2-39','entqb-ear2-40','entqb-ear2-41','entqb-ear2-49','enthd-ear-32','enthd-ear-33','enthd-ear-34','enthd-ear-37','enthd-ear-39','enthd-ear-42','entep-case-3']
},

{
  id: 'otal-9', w: 'high',
  h: 'Otomycosis',
  body: [
    '**PAINLESS.** **Itching** and blockage are the symptoms — **“otomycosis is painless; associated pain = associated bacterial infection”**, and scratching is what invites it.',
    '**Signs: FUNGAL HYPHAE OR DEBRIS, “WET NEWSPAPER-LIKE”.** *Aspergillus* and *Candida* *(organisms not in course material)*.',
    '**Treatment: 1) CLEAR THE FUNGAL DEBRIS — instrumentation, suction, ear wash, then DRY THOROUGHLY · 2) TOPICAL ANTIFUNGALS — CLOTRIMAZOLE drops, ear pack with CASTELLANI PAINT, BORIC ACID 4 %.**',
    '- **Itching for weeks, then a vigorous scratch, then a tender tragus = both diagnoses at once** — otomycosis with a superimposed bacterial otitis externa; treat both.',
    '',
    'Src: L17,18'
  ].join('\n'),
  qs: ['enthd-ear-31','enthd-ear-36','entqb-ear2-42']
},

{
  id: 'otal-10', w: 'know',
  h: 'The viral pair — bullous myringitis and Ramsay Hunt',
  body: [
    '**Bullous myringitis is the VIRAL member of the external otitis group** — the slide files it under Viral, and prints its headings with nothing under them. **Haemorrhagic blebs on the drum and deep canal, severe pain out of proportion to the signs, hearing near normal; analgesia, self-limiting, blebs may be de-roofed** *(all detail not in course material)*.',
    '**Herpes zoster oticus = RAMSAY HUNT SYNDROME: painful herpetic VESICLES of the auricle and EAC + FACIAL PARALYSIS + auditory and vestibular dysfunction.** Full treatment and prognosis sit in `ent-facial`.',
    '',
    'Src: L17,18; L15'
  ].join('\n'),
  qs: ['entqb-ear2-37']
},

{
  id: 'otal-11', w: 'know',
  h: 'The rest of the canal — wax, exostosis, osteoma, trauma',
  body: [
    '**Rare local canal causes: HARD IMPACTED WAX · TUMOURS · TRAUMA.** Soft wax is painless.',
    '',
    '||**EXOSTOSIS**|**OSTEOMA**|',
    '|---|---|---|',
    '|Number|**MULTIPLE**|**SINGLE**|',
    '|Side|**may be BILATERAL**|unilateral|',
    '|Base|**broad, sessile**|pedunculated|',
    '|Site|deep bony canal|bony–cartilaginous junction|',
    '|Cause|**COLD WATER** swimming or diving|none known|',
    '|Symptoms|**USUALLY ASYMPTOMATIC**|usually asymptomatic|',
    '',
    '- Symptoms appear only when the lesion **occludes the canal or traps wax and water** — and any obstruction of canal or middle ear gives a **CONDUCTIVE loss**, never sensorineural: the cochlea is untouched.',
    '',
    'Src: **whole section not in course material** — neither exostosis nor osteoma appears in any of the 34 cached ENT lecture files; answered from general medical knowledge, and a candidate for the ENT book read.'
  ].join('\n'),
  qs: ['entqb-ear2-47','entqb-ear2-48','entep-ear-7']
},

{
  id: 'otal-12', w: 'high',
  h: 'Middle ear and neighbouring structures',
  body: [
    '**Middle ear, three causes: 1) ASOM BEFORE tympanic membrane perforation** — severe throbbing pain, relieved by perforating **· 2) COMPLICATED CSOM, e.g. ACUTE MASTOIDITIS** — uncomplicated CSOM does not hurt **· 3) TYMPANIC PLEXUS NEURALGIA — pain is ABOLISHED AFTER INTRATYMPANIC INJECTION OF XYLOCAINE**, which is both the test and the treatment.',
    '**Neighbouring structures: TMJ · PAROTID GLAND · PRE-AURICULAR LYMPH NODES.**',
    '- **TMJ disease causes otalgia BOTH WAYS — LOCALLY**, because the joint abuts the anterior canal wall and is listed among the neighbouring structures, **AND BY REFERRAL** through the **auriculotemporal branch of V** *(the branch is not named in course material)*.',
    '- **TMJ arthritis: severe otalgia not preceded by a URTI, a completely normal ear, pain on MASTICATION and jaw movement, a TENDER joint and a CLICK on opening the mouth.**',
    '',
    'Src: L17,18; L16'
  ].join('\n'),
  qs: ['entqb-ear6-157','entqb-ear6-178','entep-case-32','entep-ear-28','entqb-ear4-96']
}

    ]
  }
};
