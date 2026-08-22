/* nr-ms — "Multiple sclerosis", Neuropsychiatry (Neurology half).
   Written 2026-08-19 under START-HERE.md §14, §14.1, §14.2, §14.3, §14.3a,
   §14.5, plus content\neuro\theory-plan.md.

   Existing key in app\data\modules.js, module `neuropsych`, group "Neurology".
   ONE question. This header states no totals; the hub measures and prints.

   ===========================================================================
   SOURCE
     content\neuro\lectures\L2) Multiple sclerosis.txt      68 pp, 2,387 w

   ⚠️ ONE QUESTION AGAINST A 68-PAGE DECK, AND THE COVERAGE FLOOR IS NOT THE
   BINDING CONSTRAINT HERE — §14.2's OTHER half is. Rule 1 is "everything
   important the LECTURE states goes in", and with 25 x q = 25 words the
   question term is irrelevant: TERM 1 governs completely. So this chapter is
   written to the deck, not to the bank, and the omission note in `ms-9` records
   what was left out and why.

   ⚠️ 23 of 68 pages carry fewer than 12 extractable words — measured with a
   per-page `pdftotext` sweep. They are the deck's illustration slides: the
   Waxman impulse-conduction diagram, the reflex/clonus/Babinski photographs,
   the dysmetria and dysdiadochokinesia stills, the internuclear
   ophthalmoplegia sequence, the lesion-site brain images and the paramagnetic
   rim / central vein signs. Their CAPTIONS extract, and the captions are what
   carry the teaching — every one is transcribed in the cache and used below.
   Nothing was rendered.

   ⚠️ THE DECK CARRIES ITS OWN Q1 AND Q2 (each printed twice, once blank and
   once again) and a two-part ILA case worked through to its investigations.
   They are the lecturer's emphasis and are recorded in `ms-9`; they are not
   transcribed as questions, because the bank is where questions live.

   ⚠️ CITATION FORM: the cache preserves slide TITLES, not numbers.
   Src: lines cite `L2 sl. <title>`.

   ===========================================================================
   BUDGET (§14.1)
     TERM 1: 2,387 w · TERM 2: 25 x 1 = 25 w · max = 2,387, floor 600 cleared.
     Operative ceiling ~2,400 w / ~10 pp. Forecast at ÷280. PRINT IT.

   COVERAGE FLOOR (§14.2) — the single question is linked.
     ms-7  npqb-nr-91  — the stem is a full MS vignette (young woman, left
           hemiplegia, past transient monocular visual loss, extensor plantar)
           and the TESTED fact is which investigation is most diagnostic. The
           deck answers it in terms: MRI is "the investigation of choice to
           support the diagnosis". The vignette's own elements are in `ms-5`
           (optic neuritis, motor signs) and `ms-4` (dissemination in time).

   ⚠️ THE DECK RANKS THE INVESTIGATIONS AND THE QUESTION NEEDS THE RANKING, NOT
   THE LIST. CSF oligoclonal bands are "helpful in confirming"; VEP is abnormal
   in >90 % of patients with a history of optic neuritis; both are printed as
   supports. MRI alone is called the investigation OF CHOICE. `ms-7` keeps that
   ordering explicit, because all three appear as options.

   ===========================================================================
   NO GAP IS FILLED IN THIS CHAPTER. Every clinical fact below is on a slide.
   The only inference drawn is marked as one, in `ms-7`.

   REGISTER (§14.5) — one row, written into `ms-9`:
     - Internuclear ophthalmoplegia's ANATOMY (the medial longitudinal
       fasciculus) -> `nr-cranial`, which teaches the eye-movement nerves.
       ⚠️ CHECKED AND NOT DELIVERED: `nr-cranial` is already written and does
       NOT carry the MLF — its `cn-4` gives III, IV and VI and their nuclei and
       stops there. The row is therefore filed as OWED-AND-UNDELIVERABLE rather
       than as a promise, and the fact the deck does print — that INO is the
       commonest cause of diplopia in MS — is written HERE in full. Nothing is
       deferred that this chapter's own reader needs.
   Chapter id verified present in app\data\modules.js today.

   RE-MEASURE COMMAND FOR THE HUB:
     node -e "global.window={};var fs=require('fs');
       eval(fs.readFileSync('content/neuro/theory-drafts/nr-ms.draft.js','utf8'));
       Object.keys(THEORY_DRAFT).forEach(function(k){var t=0;
         THEORY_DRAFT[k].sections.forEach(function(s){t+=s.body.trim().split(/\s+/).length;});
         console.log(k, THEORY_DRAFT[k].sections.length+' sections', t+' body words');});"
   =========================================================================== */

var THEORY_DRAFT = {
  "nr-ms": {
    "intro": "One question against sixty-eight slides, so this chapter is written to the lecture rather than to the bank. The spine the lecturer keeps returning to is two words — dissemination in SPACE and dissemination in TIME — and every investigation below exists to demonstrate one or the other.",
    "sections": [
      {
        "id": "ms-1",
        "w": "must",
        "h": "Demyelinating disease, and where MS sits in it",
        "body": "**A demyelinating disease:** any disease of the nervous system in which the **MYELIN SHEATH of neurons is DAMAGED**.\n\n|**Class**|**Mechanism**|**Example**|\n|---|---|---|\n|**MYELINOCLASTIC**|**normal, healthy myelin is DESTROYED** by a toxic, chemical or **autoimmune** substance|**MULTIPLE SCLEROSIS**|\n|**LEUKODYSTROPHIC (dysmyelinating)**|an **INBORN ERROR OF METABOLISM** affecting **myelinogenesis**, so myelin is **abnormal, arrested or delayed**|the leukodystrophies|\n\n### Definition\n- **MS is:** the **MOST COMMON chronic INFLAMMATORY, DEMYELINATING and NEURODEGENERATIVE disease of the CENTRAL nervous system in YOUNG ADULTS**. All four adjectives are the deck's.\n- **The early course:** in most patients the initial stages are **REVERSIBLE episodes of neurological dysfunction lasting several DAYS OR WEEKS** — that is, **clinically isolated syndrome** and **relapsing-remitting MS**.\n\n### ⚠️ The key principle for diagnosis, and it governs the whole chapter\n- **DISSEMINATION IN SPACE (DIS):** damage in **MORE THAN ONE PLACE** in the nervous system.\n- **DISSEMINATION IN TIME (DIT):** damage that has occurred **MORE THAN ONCE**.\n- **Both must be shown**, and every investigation in `ms-7` exists to demonstrate one or the other.\n\nSrc: L2 sl. Demyelinating Diseases · Multiple Sclerosis Definition",
        "qs": []
      },
      {
        "id": "ms-2",
        "w": "must",
        "h": "Pathogenesis — the barrier, the cells, the plaque",
        "body": "### The cascade the deck prints\n**Dysregulation of the BLOOD-BRAIN BARRIER** → increased **trans-endothelial migration of ACTIVATED LEUKOCYTES** — **macrophages, T cells and B cells** — into the CNS → further **inflammation and DEMYELINATION** → **OLIGODENDROCYTE LOSS** → **REACTIVE GLIOSIS** → **NEURO-AXONAL DEGENERATION**.\n\n- **Where the name comes from:** the attack causes inflammation that eventually leads to **SCLEROSIS**, which is the medical term for **SCARRING**.\n\n### ⚠️ The pathological hallmark\n- **MS PLAQUES:** the accumulation of **demyelinating lesions** in the **WHITE MATTER of brain and spinal cord**.\n- **⚠️ Location:** typically around **POST-CAPILLARY VENULES** — which is why the **central vein sign** appears on MRI.\n\n### Why the deficit happens — the conduction diagram\n- **Normal myelin:** **high resistance, low capacitance** directs the majority of the **action current to the NEXT NODE OF RANVIER**.\n- **Demyelinated:** the action current is **SHORT-CIRCUITED** through the damaged sheath or the **denuded axon**, so **further propagation of the action potential is BLOCKED**.\n\nSrc: L2 sl. The Pathogenesis And Pathophysiology (×2), including the Waxman conduction figure caption",
        "qs": []
      },
      {
        "id": "ms-3",
        "w": "must",
        "h": "Risk factors — genetic, environmental, demographic",
        "body": "**The deck's own caveat:** the pathogenesis **remains incompletely understood**. MS is a **heterogeneous, multifactorial, IMMUNE-MEDIATED (T and B cell) disease**.\n\n|**Class**|**Factors**|\n|---|---|\n|**1 GENETIC**|**HLA genes on CHROMOSOME 6**, including the **HLA-DRB1\\*15:01** polymorphism — **3-4× risk**|\n|**2 ENVIRONMENTAL** *(the modifiable ones)*|**SMOKING** · **LOW VITAMIN D** · **EPSTEIN-BARR VIRUS (infectious mononucleosis)** · **OBESITY** · **GUT MICROBIOME**|\n\n### Who gets it\n- **Age:** symptoms usually begin in **YOUNG ADULTHOOD**, **peak onset at 24**, range **20-40**.\n- **Race:** a predilection for **WHITES**, especially those of **NORTHERN EUROPEAN heritage**.\n- **Sex:** **WOMEN more than men, ~3:1**.\n\n### ⚠️ Pregnancy — the one number pair the deck gives\n- **Pregnancy:** does **NOT alter the RISK** of developing MS, but does **influence disease ACTIVITY**.\n- **The relapse rate:** falls from **~0.56 to 0.12 by the THIRD TRIMESTER** — and this is **offset by a rise to 1.2 in the FIRST 3 POSTPARTUM MONTHS**.\n\nSrc: L2 sl. Risk Factors (×3)",
        "qs": []
      },
      {
        "id": "ms-4",
        "w": "must",
        "h": "The four subtypes, and what counts as a relapse",
        "body": "|**Subtype**|**Share**|**Character**|\n|---|---|---|\n|**1 RELAPSING-REMITTING (RR)**|**87 %**|**unpredictable ACUTE ATTACKS followed by periods of REMISSION**|\n|**2 SECONDARY PROGRESSIVE (SP)**|**~65 % of RRMS patients go on to develop it**|the **SECOND PHASE** of the disease|\n|**3 PRIMARY PROGRESSIVE (PP)**|**10-15 %**|progressive from onset|\n|**4 PROGRESSIVE RELAPSING (PR)**|—|the deck names it and gives no figure|\n\n### ⚠️ The anatomy of a relapse — every clause is examinable\n- **Onset:** **ACUTE or SUB-ACUTE**.\n- **Worsens** over **days or weeks**, with a duration of **AT LEAST 24 HOURS**.\n- **Peak severity within 2-3 WEEKS.**\n- **Remits to a VARIABLE degree** — from **minimal resolution to complete recovery** — **normally 2-4 WEEKS after the maximum deficit**.\n- **⚠️ And in the ABSENCE OF FEVER OR INFECTION.** That clause is what separates a true relapse from a pseudo-relapse.\n\nSrc: L2 sl. Subtypes of MS · Relapsing Remitting",
        "qs": []
      },
      {
        "id": "ms-5",
        "w": "must",
        "h": "Clinical picture — optic, sensory, motor",
        "body": "**The governing rule:** the presentation is **HETEROGENEOUS and MULTIFOCAL**, and **depends on the LOCATION of the demyelinating lesions** within the CNS.\n\n### Optic neuritis (ON)\n- **As the INITIAL symptom:** **14-23 %** of patients.\n- **Over a lifetime:** **more than 50 %** have a clinical episode of ON.\n- **The commonest manifestation:** **VISUAL LOSS IN ONE EYE evolving over a FEW DAYS**.\n- **⚠️ The pain:** **PERIOCULAR, especially ON EYE MOVEMENT** — usually accompanies and **may PRECEDE** the visual symptoms.\n\n### Sensory symptoms\n- **⚠️ The commonest PRESENTING manifestation — 21-55 %.**\n- **What they are:** **numbness** (loss of sensation) · **paraesthesiae** (tingling) · **dysaesthesiae** (burning) · **hyperaesthesiae**.\n- **On examination:** impaired **VIBRATION and JOINT POSITION** sense, reduced **pain and light touch**.\n- **⚠️ UHTHOFF PHENOMENON:** symptoms **temporarily WORSEN with increased BODY TEMPERATURE** and **resolve when the body cools** or after a period of rest.\n\n### Motor manifestations\n- **Common**, and characterised by **PYRAMIDAL SIGNS**: **BABINSKI sign** · **more pronounced reflexes** · **CLONUS** — plus **paresis** and **SPASTICITY**.\n\nSrc: L2 sl. Clinical picture · optic neuritis (ON) · Sensory symptoms · Motor manifestations, with the reflex, clonus and Babinski photograph captions",
        "qs": []
      },
      {
        "id": "ms-6",
        "w": "must",
        "h": "Cerebellum, brainstem, bladder — and the paroxysmal symptoms",
        "body": "### Cerebellar pathways\n- **Frequently involved during the COURSE**, but a **predominantly cerebellar syndrome is UNCOMMON AT ONSET**.\n- **Manifestations:** **DYSMETRIA** · **DYSDIADOCHOKINESIA** · **ACTION TREMOR WITH TERMINAL ACCENTUATION** · **dysrhythmia** · **loss of balance**.\n\n### Brainstem\n- **INTENSE VERTIGO.**\n- **The TRIGEMINAL nerve is frequently involved.**\n- **DYSPHAGIA**, often from impairment of **cranial nerves IX, X and XII**.\n- **⚠️ INTERNUCLEAR OPHTHALMOPLEGIA — the COMMONEST CAUSE OF DIPLOPIA in MS patients.** *(Its anatomy, the medial longitudinal fasciculus, is not in this deck and not in `nr-cranial` either — see `ms-9`.)*\n\n### Visceral complaints\n- **Bladder and bowel:** **urgency, frequency, URGE INCONTINENCE** · **constipation** · **sexual dysfunction**.\n\n### Fatigue and cognition\n- **FATIGUE: over 75 %** of MS patients experience it during the disease course.\n- **COGNITIVE DISORDERS: 40-70 %** of patients.\n\n### ⚠️ Paroxysmal symptoms — characteristic of MS\n- **Duration:** **BRIEF — seconds to 2 MINUTES**, recurring frequently, **occasionally dozens of times per day**.\n- **TONIC SPASMS.**\n- **TRIGEMINAL NEURALGIA** *(the syndrome in full is `cn-7`)*.\n- **⚠️ LHERMITTE'S SIGN:** transient sensory symptoms **precipitated by NECK FLEXION**, described as an **ELECTRICAL or TINGLING sensation travelling DOWN THE SPINE** or into the extremities.\n\nSrc: L2 sl. Cerebellar pathways · Brainstem · Internuclear ophthalmoplegia · Visceral complaints · Fatigue and cognitive function · Paroxysmal symptoms",
        "qs": []
      },
      {
        "id": "ms-7",
        "w": "must",
        "h": "Diagnosis — McDonald, and the investigations in rank order",
        "body": "### The differential — multifocal disease\n1. **VASCULITIS**, e.g. systemic lupus erythematosus\n2. **BEHÇET'S DISEASE** — oral and genital ulcer with uveitis\n3. **ACUTE DISSEMINATED ENCEPHALOMYELITIS**\n4. **LYMPHOMA**\n5. **NEUROMYELITIS OPTICA**\n6. **MOG ANTIBODY DISEASE**\n\n### The McDonald criteria\n- **2017 revision:** demonstration of **white matter lesions disseminated in TIME** — **at least two attacks separated by at least 1 MONTH** — **and in SPACE**, **in the absence of another identifiable explanation**.\n- **2024 revision, for RRMS:** the same two axes, **dissemination in time and space**.\n- **⚠️ MS REMAINS A CLINICAL DIAGNOSIS** — MRI, evoked potentials and CSF **help clarify LESS CERTAIN cases**. The deck says so in terms.\n\n### ⚠️ The three investigations, in the deck's own ranking\n\n|**Rank**|**Test**|**What the deck calls it**|\n|---|---|---|\n|**1**|**MRI brain (T2) and SPINAL CORD**|**THE INVESTIGATION OF CHOICE to support the diagnosis**, by detecting MS plaques|\n|**2**|**CSF — OLIGOCLONAL BANDS**|**\"helpful in CONFIRMING the diagnosis\"**|\n|**3**|**EVOKED POTENTIALS**|provide **evidence of MULTIFOCALITY**|\n\n- **⚠️ The ranking is the answer, not the list.** In a young woman with a new hemiplegia and a past episode of transient monocular visual loss, all three are reasonable and **MRI is the MOST diagnostic**. CT and EEG are not MS investigations at all.\n\n**What MRI shows**\n- **Plaques in the WHITE MATTER** of brain and cord — typically **PERIVENTRICULAR**, **JUXTACORTICAL** and **INFRATENTORIAL** in the brain, and in the **SPINAL CORD**.\n- **⚠️ Gadolinium enhancement:** denotes **RECENT disease activity** — which is how one scan can show dissemination in **time**.\n- **Common sites, as listed:** **periventricular · juxtacortical · optic nerve · spinal cord · cerebellum.** Also named: **paramagnetic rim lesions** and the **CENTRAL VEIN SIGN**.\n\n**What CSF shows**\n- **OLIGOCLONAL BANDS (OCB)** — a subtype of globulin detectable in MS CSF.\n- **KAPPA FREE LIGHT CHAIN INDEX** · **myelin components and ANTIMYELIN ANTIBODIES**.\n- **INCREASED IgG INDEX**, from **increased INTRATHECAL production of IgG**.\n- **A LYMPHOCYTIC PLEOCYTOSIS** during acute exacerbations, in about **ONE THIRD** of patients.\n\n**What evoked potentials show**\n- **VEP:** abnormal in **MORE THAN 90 %** of people with a **history of optic neuritis**.\n- **SSEPs:** may detect **SUBCLINICAL sites of demyelination** — hence evidence of **multifocality**.\n- **BAEPs:** **occasionally informative**.\n\nSrc: L2 sl. Differential Diagnosis (Multifocal) · Evaluation · MRI · Common Sites Of Lesions · CSF · Evoked potentials",
        "qs": [
          "npqb-nr-91"
        ]
      },
      {
        "id": "ms-8",
        "w": "must",
        "h": "Treatment — three aims, and no cure",
        "body": "**⚠️ No cure:** there is **no available PREVENTION and no CURE** for MS. Treatment focuses on three areas:\n1. **Treating ACUTE EXACERBATIONS (relapses) and hastening their recovery**\n2. **ALTERING THE NATURAL COURSE**\n3. **SYMPTOMATIC RELIEF** — enhancing physical abilities, preventing or treating complications\n\n### 1. Acute exacerbation\n- **CORTICOSTEROIDS** are the most commonly used treatment — *the deck notes there have been few studies addressing their efficacy*.\n- **⚠️ INTRAVENOUS METHYLPREDNISOLONE** became the preferred treatment.\n\n### 2. Disease-modifying therapy (DMT)\n**The goal:** **reduce the FREQUENCY and SEVERITY of relapses** · **PREVENT the chronic progressive phase** · **SLOW the progression of disability**.\n\n|**Group**|**Agents, with what the deck prints**|\n|---|---|\n|**β-INTERFERONS**|**Interferon-β 1b (Betaseron)** — **subcutaneous, EVERY OTHER DAY** · **Interferon-β 1a (Avonex)** — **ONCE-WEEKLY INTRAMUSCULAR**. Indicated in **non-symptomatic MS, RRMS and SPMS**|\n|**Others**|**combined AZATHIOPRINE and interferon-β 1b** · **methotrexate** · **intravenous immunoglobulin** · **rituximab**|\n|**Recent drugs**|**natalizumab (Tysabri)** · **teriflunomide (Aubagio) 14 mg once daily** · **fingolimod (Gilenya) 0.5 mg cap once daily** · **cladribine (Mavenclad) 10 mg** · **⚠️ ocrelizumab (Ocrevus), infusion every 6 months — FOR THE PRIMARY PROGRESSIVE TYPE**|\n\n### 3. Symptomatic treatment\n\n|**Symptom**|**Drug**|\n|---|---|\n|**SPASTICITY**|**BACLOFEN**|\n|**FATIGUE**|**AMANTADINE 100 mg TWICE A DAY**|\n|**PAROXYSMAL SYMPTOMS**|**CARBAMAZEPINE**|\n\nSrc: L2 sl. Treatment · Acute Exacerbations · Alteration of the Natural Course DMT · Disease Modifying Therapy · Recent drugs · Symptomatic Treatment of Existing Disabilities",
        "qs": []
      },
      {
        "id": "ms-9",
        "w": "know",
        "h": "The lecturer's own cases, and what is not here",
        "body": "### The two questions printed on the slides\n- **Which age group is MS most likely to strike?** — against children under 12, teens and adults 65+. *(`ms-3`: 20-40, peak 24.)*\n- **The commonest cranial nerve in MS?** — against vagus, facial and olfactory. *(`ms-5`: the OPTIC nerve, and the deck prints this question twice.)*\n\n### The ILA case, worked through as the lecturer works it\n- **The history:** a **24-year-old right-handed student**, studying late, develops **numbness of the left foot and whole left leg** lasting **1 week**, then resolving. She recalls **similar symptoms 6 months earlier**, and that **2 years ago her left eye blurred and vision went**, returning to normal **in 1 week**. She had seen nobody about any of it.\n- **The examination:** **brisk reflexes and SUSTAINED CLONUS at the RIGHT ankle**, **Babinski present on the RIGHT**.\n- **⚠️ The framework the lecturer applies:** is it **psychic or ORGANIC**; then **where is the lesion** — **central or peripheral**, **sensory** (superficial, deep, cortical) and its **site**, **motor** (LMN and site, or **pyramidal UMN**, or **extrapyramidal**), **cerebellum**, **other cranial nerves**.\n- **The diagnosis**, against seizure, TIA, Parkinson's disease and anaplastic astrocytoma: **MULTIPLE SCLEROSIS**.\n- **The next step — the investigations, as printed:** **MRI brain with contrast** · **CSF analysis** · **VEP**.\n- **⚠️ The case IS the definition:** three episodes over two years in three different places is **dissemination in TIME and in SPACE**, which is `ms-1`'s key principle arriving as a history.\n\n### ⚠️ Register (§14.5) — one row, and it is owed to nobody\n\n|**Fact**|**Intended receiver**|**Status**|\n|---|---|---|\n|**The ANATOMY of internuclear ophthalmoplegia** — the medial longitudinal fasciculus|**`nr-cranial`**|**⚠️ CHECKED AND UNDELIVERABLE.** `nr-cranial` is already written and does **not** carry the MLF; its `cn-4` gives III, IV and VI with their nuclei and stops. So the deferral is recorded as owed-and-undelivered rather than as a promise, and the fact this deck DOES print — **INO is the commonest cause of diplopia in MS** — is written in full in `ms-6`. **This chapter's reader is not left waiting for anything.**|\n\n### What this deck does not contain\n- **No MLF anatomy**, as above.\n- **No dose for any interferon** — the route and interval are printed and the dose is not; the four recent drugs DO carry doses.\n- **No EDSS**, no relapse-rate targets, and **no discussion of when to start or stop a DMT**.\n- **The picture slides:** **23 of 68 pages carry fewer than 12 extractable words** — illustration, and their captions extract and are used above.\n\nSrc: L2 sl. Q1 · Q2 · ILA 1 · What is the lesion? · Next step; the page audit is a per-page `pdftotext` sweep of all 68 pages",
        "qs": []
      }
    ]
  }
};
