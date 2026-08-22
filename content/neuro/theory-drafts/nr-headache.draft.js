/* nr-headache — "Headache", Neuropsychiatry (Neurology half).
   Written 2026-08-19 under START-HERE.md §14 (slide-density revision notes),
   §14.1 (budget), §14.2 (the two-sided coverage floor), §14.3 (telegraphic
   style), §14.3a (layout and the mdLead() anchor rule) and §14.5 (the deferral
   register), plus content\neuro\theory-plan.md and content\neuro\book-map.md.
   Shape copied from content\neuro\theory-drafts\nr-stroke.draft.js.

   `nr-headache` is an EXISTING key in app\data\modules.js, module `neuropsych`,
   group "Neurology". No modules.js registration is needed. This file touches no
   app\data\* file, no MEMORY.md, no resume file and no git.

   ⚠️ NO NUMBER IN THIS HEADER IS A MEASUREMENT OF THE FINISHED FILE. Per §14.1
   and theory-plan.md §6 the header states reasoning, sources and deferrals and
   states NO totals. The hub measures body words from disk and prints it.

   ===========================================================================
   SOURCE — ONE CACHED FILE, AND IT IS A BOOK CHAPTER, NOT A DECK.

     content\neuro\book\neuro-ch09-headache.txt        3,647 w

   ⚠️ THIS CHAPTER HAS NO LECTURE AT ALL, and that is a verified finding, not an
   assumption. theory-plan.md §3: `"tension type"` returns ZERO across all 25
   cached decks; `headache` appears only as a symptom mention inside Stroke,
   Cervical pain, symptomatology, Cranial nerves and CNS infection. There is no
   headache deck to cite and none is cited here.

   ⚠️ CITATION FORM: the book prints page numbers, so Src: lines cite the
   PRINTED page — `neuropsychiatry.pdf (ASM MINDS) ch.9 printed p.84`. The
   NEUROLOGY-half offset is PDF = printed + 11, verified on this chapter's own
   footers and recorded at the head of the cache. No PDF page number appears in
   any Src: line, so the offset cannot be mis-applied by a later reader.

   ===========================================================================
   BUDGET (§14.1). Both terms computed.

     TERM 1, the source:      3,647 w   (the cache, whitespace split)
     TERM 2, 25 x questions:    550 w   (22 questions)
     max(3647, 550) = 3,647, floor 600 cleared.

     ⚠️ TERM 1 IS INFLATED HERE AND THE INFLATION IS MEASURABLE. Of the ten
     printed pages, FOUR carry a full-width infographic poster, and the cache's
     own reader's note on printed 81 records the verdict for the first of them:
     "The poster adds no fact that the red-flag box does not already carry."
     The same holds for the migraine-treatment poster on 85, the TTH poster on
     86 and the cluster poster on 87 — each restates the prose block above it,
     and the two facts they do NOT share with the prose are DISAGREEMENTS
     (aura 5-80 min, TTH 40 %/45 %), recorded as contradictions rather than as
     content. The posters are transcribed in the cache because a transcription
     records what is on the page; they are not four pages of teaching.

     OPERATIVE CEILING GOVERNS: ~2,400 body words / ~10 printed pages, hard
     shape <=13 pp measured by printing.

     PAGE FORECAST. ⚠️ USE THE MODULE'S OWN RATE. theory-plan.md §4: the first
     three chapters printed at ~335 words per page, and the generic ÷240
     estimator over-predicted them by 4.0 and 5.5 pages. At ÷335 a 2,400-word
     chapter is ~7.2 pp. THE FORECAST IS NOT A CLEARANCE — print it.

   ===========================================================================
   THE COVERAGE FLOOR (§14.2) — all 22 questions are linked, and the fact that
   decides each one is a line or a cell in the section that links it.

     hd-1  npqb-nr-125
     hd-2  npqb-nr-121 · npqb-nr-136
     hd-3  npqb-nr-119 · npqb-nr-122 · npqb-nr-128
     hd-4  npqb-nr-137
     hd-5  npqb-nr-132
     hd-6  npqb-nr-124 · npqb-nr-126 · npqb-nr-130 · npqb-nr-134 · npqb-nr-135
     hd-7  npqb-nr-120 · npqb-nr-127
     hd-8  npqb-nr-133 · npqb-nr-138 · npqb-nr-139 · npqb-nr-140
     hd-9  npqb-nr-123 · npqb-nr-129 · npqb-nr-131

   ===========================================================================
   GAPS FILLED AND TAGGED (CLAUDE.md §4 — a gap is ANSWERED, NOT DECLARED; the
   tag is a short clause on the claim, never a dead-end sentence). Seven fills,
   every one listed, and each was checked against the source by grep before it
   was called a gap:

   1. THE PAIN TAXONOMY (`hd-1`) — `npqb-nr-125` asks how migraine is classified
      and keys `Nociceptive`. ⚠️ VERIFIED ABSENT TWICE: chapter 9 contains no
      nociceptive / neuropathic / psychogenic framework in ten pages, and
      Neurology ch.16 "Pain", read for exactly this question, returns the same
      zero — the words nociceptive, neuropathic (as a class), psychogenic,
      somatic and visceral are searched for and not found there either. The
      framework is supplied and tagged.
   2. TEMPORAL ARTERITIS'S CLINICAL HOOK (`hd-2`) — the book prints elderly,
      throbbing, raised ESR and steroids. `npqb-nr-136`'s stem turns on JAW
      CLAUDICATION and SCALP TENDERNESS, which are printed nowhere in the
      chapter. Supplied with the visual-loss urgency that goes with them.
   3. VISUAL AURA IS THE COMMONEST (`hd-5`) — the book lists visual first and
      elaborates only it, and never says it is the most common. `npqb-nr-132`
      needs the ranking.
   4. THE ACUTE/LONG-TERM SPLIT IN TTH (`hd-8`) — the book gives ONE
      undifferentiated triad: analgesics, antidepressants, muscle relaxants.
      `npqb-nr-133` (acute -> NSAIDs) and `npqb-nr-138` (long-term ->
      antidepressants) both need the triad ranked in time, which the book does
      not do.
   5. KETOROLAC FOR THE CARDIAC PATIENT (`hd-6`) — the book names the triptan
      precaution (ischaemic heart and cerebrovascular disease) and names NSAIDs,
      but never names a parenteral NSAID. `npqb-nr-126` keys IM ketorolac.
   6. THE PSYCHIATRIC HALF OF THE THUNDERCLAP CASE (`hd-3`) — thunderclap is red
      flag #2, so "verify the headache first" is the book's. The
      psychiatric-consultation half of `npqb-nr-122` is not in this chapter.
   7. MIGRAINE'S FAMILY HISTORY (`hd-4`) — `npqb-nr-137` offers "hereditary
      predisposition" as a TRUE statement and `npqb-nr-134`'s stem gives an
      affected father. The chapter prints no family history anywhere.

   ⚠️ ONE DEFECT NOTED, NOT DISPUTED (CLAUDE.md §4). `npqb-nr-134` keys
   ergotamine after aspirin and ibuprofen have failed; the book itself endorses
   paracetamol and aspirin as over-the-counter migraine treatment and calls
   ergots "less commonly used", so it discriminates its own distractor weakly.
   The key is the bank's and stands. The ladder is written out in `hd-6` so the
   reader can see where ergots sit.

   ===========================================================================
   THREE SELF-CONTRADICTIONS, RECORDED AS PRINTED AND NOT RECONCILED. The book
   disagrees with itself three times, always prose-versus-poster or
   prose-versus-table, and every instance is carried into the chapter as BOTH
   figures with the page that prints each:
     TTH prevalence      40 % (printed 85)     vs  45 % (printed 88)
     TTH sex ratio       M:F 2:3 (printed 85)  vs  F:M 2:1 (printed 88)
                         — NOT the same number: 2:3 is F:M 1.5:1
     Migraine aura       5-20 min (printed 82) vs  5-80 min (printed 83)

   ===========================================================================
   REGISTER (§14.5). One row is filed outward, and it is written into the
   chapter's own register SECTION `hd-11`, not merely into this header:
     meningitis in full -> `nr-cns`.
   Chapter id verified present in app\data\modules.js today; not written from
   memory. Checked first that no question filed under `nr-headache` tests
   meningitis — none does.

   Two cross-MODULE pointers are asides in the body, not register rows, because
   the register tracks chapters inside this module: acute glaucoma and error of
   refraction are ophthalmology's, otitis media is ENT's. The book names them
   as secondary causes and teaches none of them.

   ===========================================================================
   RE-MEASURE COMMAND FOR THE HUB (this header states no totals; run this):
     node -e "global.window={};var fs=require('fs');
       eval(fs.readFileSync('content/neuro/theory-drafts/nr-headache.draft.js','utf8'));
       Object.keys(THEORY_DRAFT).forEach(function(k){var t=0;
         THEORY_DRAFT[k].sections.forEach(function(s){t+=s.body.trim().split(/\s+/).length;});
         console.log(k, THEORY_DRAFT[k].sections.length+' sections', t+' body words');});"
   =========================================================================== */

var THEORY_DRAFT = {
  "nr-headache": {
    "intro": "No lecture exists for this chapter — the book's ten pages are the whole syllabus. Fourteen of the twenty-two questions are the three primary headaches told apart, so the comparison table in `hd-10` is the instrument, and the drug ladders are where the rest sit.",
    "sections": [
      {
        "id": "hd-1",
        "w": "must",
        "h": "What a headache disorder is, and the primary/secondary split",
        "body": "- **Headache:** pain occurring in **one or more areas of the head**.\n- **Headache DISORDER:** characterised by **RECURRENT headache attacks** — the recurrence is the definition, not the pain.\n\n### Epidemiology\n- **Half the adult population** has had a headache at least once **within the last year**.\n- **Rank:** headache disorders are the **COMMONEST disorders of the nervous system**.\n\n### The split that organises everything\n\n|**Type**|**Defined by**|**Members**|\n|---|---|---|\n|**PRIMARY**|**NO structural and NO metabolic abnormality underlying it**|**tension-type · migraine · cluster** — three, and only three|\n|**SECONDARY**|**structural abnormality** (extracranial **or** intracranial) **or metabolic disorder**|see `hd-2`|\n\n### Where migraine sits in the pain classification\n\n**The gap:** the chapter carries **no pain taxonomy at all** — its only mechanistic statement is the neurovascular theory in `hd-4`. *(The framework below is supplied and tagged; it is not in chapter 9, and Neurology ch.16 \"Pain\" was read for it and returns the same zero.)*\n\n|**Class**|**Arises from**|**Examples**|\n|---|---|---|\n|**NOCICEPTIVE**|**activation of intact pain receptors** in tissue — here the cranial vessels, meninges and pericranial muscles|**MIGRAINE** · tension-type · cluster|\n|**NEUROPATHIC**|**damage to or disease of the nervous system itself**|trigeminal neuralgia · post-herpetic neuralgia|\n|**PSYCHOGENIC**|**psychological factors**, no adequate organic lesion|somatoform pain|\n\n- **⚠️ Why migraine is nociceptive:** the neurovascular mechanism stimulates **normal nociceptors** around vessels and dura. **The nerve is not diseased**, which is what would make it neuropathic *(supplied)*.\n\nSrc: neuropsychiatry.pdf (ASM MINDS) ch.9 printed p.80. The pain taxonomy is supplied and tagged",
        "qs": [
          "npqb-nr-125"
        ]
      },
      {
        "id": "hd-2",
        "w": "must",
        "h": "Secondary headache — a flowchart is the entire teaching",
        "body": "**⚠️ No prose section:** secondary headache is taught **only** inside the printed-80 flowchart. Every cause below gets exactly the bullets printed there and nothing more.\n\n|**Source**|**Causes**|\n|---|---|\n|**INTRACRANIAL**|**temporal arteritis · subarachnoid haemorrhage · metabolic disorders · tumours · meningitis**|\n|**EXTRACRANIAL**|**acute sinusitis** · **eyes/orbit** — error of refraction, **acute glaucoma** · **ears** — otitis media · **teeth**|\n\n*Acute glaucoma and refractive error are ophthalmology's, otitis media is ENT's; the book names them as causes and teaches none of them.*\n\n### Temporal arteritis\n- **What it is:** a **systemic inflammatory VASCULAR syndrome**, predominantly of the **temporal arteries**.\n- **Who:** occurs in the **ELDERLY**.\n- **Pain:** **THROBBING** headache.\n- **The test:** **ELEVATED ESR**.\n- **⚠️ Treatment: STEROIDS** — and they are started on suspicion, before biopsy, because delay costs vision *(the urgency is supplied)*.\n- **⚠️ The bedside hook the book omits:** **JAW CLAUDICATION** — pain in the jaw **on chewing** — and **SCALP TENDERNESS** on palpation, classically over the temporal artery *(not taken from the course material; the chapter prints neither, and both are what an examiner's stem gives you)*.\n\n### Subarachnoid haemorrhage · metabolic disorders\n- **One block for both:** associated with **hypoxia, hypercapnia and anaemia**, possibly through the **cerebral VASODILATION** these produce.\n\n### Tumours · meningitis\n- **Frequency:** **50 % of patients with brain tumours have headache.**\n- **Company it keeps:** features of **RAISED ICP** — **blurred vision** and **PROJECTILE vomiting**.\n- **⚠️ What makes it worse:** **awakening · cough · sneeze · strain** — the Valsalva group, and the reason red flag 7 exists.\n- *Meningitis in full — the syndrome, the CSF and the treatment — is `nr-cns`'s; see `hd-11`.*\n\n- **⚠️ The examinable inference:** a **change in headache PATTERN** — rising pain, rising frequency, new features, falling response to treatment — points at a **SECONDARY cause such as tumour or raised ICP**, never at a primary headache progressing.\n\nSrc: neuropsychiatry.pdf (ASM MINDS) ch.9 printed p.80. Jaw claudication, scalp tenderness and the treat-before-biopsy rule are supplied and tagged",
        "qs": [
          "npqb-nr-121",
          "npqb-nr-136"
        ]
      },
      {
        "id": "hd-3",
        "w": "must",
        "h": "Diagnosis — history decides it, imaging only excludes",
        "body": "- **⚠️ The governing sentence:** **no biological markers and no diagnostic tests exist** to determine headache type, so **HISTORY IS THE SINGLE MOST IMPORTANT ELEMENT** in the evaluation.\n- **What imaging is for:** to **EXCLUDE STRUCTURAL causes** of secondary headache — never to make a primary diagnosis.\n- **CT:** a **simple, rapid screening method to exclude HAEMORRHAGE**.\n- **MRI brain WITH CONTRAST:** considered when **other aetiologies** are suspected.\n\n### The twelve red flags\n\n|**#**|**Red flag**|\n|---|---|\n|1|**Subacute and progressive** headache|\n|2|**Severe headache — \"THUNDERCLAP\"**|\n|3|**New onset in adult life (>40 years)**|\n|4|**Change in headache pattern** — more pain, more often, new features, poor response|\n|5|**Unexplained nausea and vomiting**|\n|6|**Nocturnal headache**, and **awakening** headache|\n|7|**Precipitated or worsened by VALSALVA**|\n|8|**Confusion**|\n|9|**Seizures**|\n|10|**ABNORMAL NEUROLOGICAL EXAMINATION**|\n|11|**Fever, or signs of meningeal irritation**|\n|12|**Diminution of vision** in one or both eyes|\n\n- **⚠️ Flag 10 is the one the bank asks:** an **extensor plantar response** is an abnormal neurological examination, so it is the finding that buys neuroimaging. **Vomiting alone (flag 5 needs \"unexplained\"), severity alone, and coloured illusions do not.**\n- **⚠️ Flags 2 and 4 together:** a known migraineur whose attack is **suddenly different and unrelieved** has changed pattern — **CT first**, to exclude haemorrhage. **Not another dose of the drug that has already failed.**\n- **⚠️ Thunderclap first:** it is a physical emergency whatever else is going on. A frightened, disordered patient describing thunderclap pain gets the **headache verified first** — then, and only then, the psychiatric assessment *(the psychiatric half is not in this chapter; it is the standard rule that an organic cause is excluded before a presentation is called psychiatric)*.\n\nSrc: neuropsychiatry.pdf (ASM MINDS) ch.9 printed p.81 — the red-flag box; the printed-81 poster restates it and adds no fact",
        "qs": [
          "npqb-nr-119",
          "npqb-nr-122",
          "npqb-nr-128"
        ]
      },
      {
        "id": "hd-4",
        "w": "must",
        "h": "Migraine — the definition, who gets it, one accepted theory",
        "body": "- **Definition:** a **PAROXYSMAL PRIMARY** headache disorder — **recurrent, intense, THROBBING**, head **unilaterally or bilaterally**, usually with **nausea, vomiting, photophobia or phonophobia**.\n- **It may be PRECEDED by** visual, sensory and/or motor manifestations.\n\n### Epidemiology\n- **Prevalence:** **1 in 10 people worldwide** — the **second commonest** primary headache.\n- **Sex:** more in **FEMALES**, **F:M 3:1**.\n- **⚠️ Age:** commonly **BEGINS between 15 and 25**, with **increased incidence at 35-45**.\n\n### Pathophysiology\n- **The book's position:** mechanisms **remain incompletely understood**.\n- **⚠️ Mechanism:** the **most accepted theory of migraine is the NEUROVASCULAR theory** — printed centred and in red, and the only mechanism the chapter states.\n\n### The two clinical types\n\n|**Type**|**Also called**|**Rank**|\n|---|---|---|\n|**Migraine WITHOUT aura**|**COMMON** migraine|**the MOST COMMON type**|\n|**Migraine WITH aura**|**CLASSIC** migraine|the other|\n\n- **⚠️ What is FALSE about migraine:** that it is **\"always above 50 years\"**. Onset is **15-25**, peak **35-45** — an over-50 first presentation is red flag 3 and sends you looking for a secondary cause.\n- **Family history:** a **hereditary predisposition** is real and often the stem's giveaway — an affected parent *(not taken from the course material; the chapter prints no family history)*.\n- **Autonomic features** accompany migraine too, which is why they do not by themselves make an attack cluster; the **site, character and duration** do.\n\nSrc: neuropsychiatry.pdf (ASM MINDS) ch.9 printed p.82. Family history is supplied and tagged",
        "qs": [
          "npqb-nr-137"
        ]
      },
      {
        "id": "hd-5",
        "w": "must",
        "h": "Migraine — the four phases of an attack",
        "body": "|**Phase**|**Timing**|**What happens**|\n|---|---|---|\n|**1 PRODROME**|**hours or days BEFORE** the headache|altered mood — **irritability, depression or euphoria** · fatigue · **yawning** · excessive sleepiness · **food craving (chocolate)** · **stiff neck muscles** · increased urination · diarrhoea · constipation|\n|**2 AURA**|**immediately precedes** the headache|**focal neurological phenomena**; appear **gradually over 5-20 minutes**; last **<60 minutes**|\n|**3 PAIN**|**4-72 hours**|see below|\n|**4 POSTDROME**|**days after** the headache ends|**impaired thinking** · tired or **\"hungover\"** · head pain · cognitive difficulty · GI symptoms · mood change · **weakness**|\n\n### The aura\n- **VISUAL:** **flashing lights · scotomas · zig-zag lines · difficulty focusing**.\n- **SOMATOSENSORY:** the only other type the chapter names.\n- **⚠️ Visual aura is the COMMONEST type** — the chapter lists it first and elaborates only it, but never ranks it *(the ranking is supplied and tagged)*. **Olfactory, auditory and gustatory auras are not migraine's**.\n- *Defect: aura duration is **5-20 minutes** in the printed-82 prose and **5-80 minutes** in the printed-83 poster. Both recorded as printed; not reconciled.*\n\n### The pain phase\n- **Site:** initially **UNILATERAL**, **frontotemporal and ocular** — but can be felt **anywhere** around head or neck, and may become bilateral.\n- **Intensity:** **moderate to severe**. **Character: THROBBING.**\n- **⚠️ Worse with movement or physical activity** — many patients **lie quietly in a dark room**.\n- **Associated:** **nausea and/or vomiting in 1/3** · **photophobia and/or phonophobia**.\n\nSrc: neuropsychiatry.pdf (ASM MINDS) ch.9 printed pp.82-83. The commonest-aura ranking is supplied and tagged",
        "qs": [
          "npqb-nr-132"
        ]
      },
      {
        "id": "hd-6",
        "w": "must",
        "h": "Migraine, abortive — the golden rule and the ladder",
        "body": "**⚠️ THE GOLDEN RULE:** pain relievers are **most effective given EARLY in the attack** — **before the pain phase**. Printed centred and in red.\n\n|**Step**|**Agent**|**The point**|\n|---|---|---|\n|**Environment**|**rest or sleep in a DARK ROOM**|eases symptoms faster|\n|**Over the counter**|**aspirin · paracetamol**|the book's own first line for a mild attack|\n|**NSAID**|**ibuprofen**|the next rung|\n|**Anti-sickness**|**METOCLOPRAMIDE**|given **ALONGSIDE** painkillers at symptom onset, and for troublesome nausea|\n|**TRIPTANS — first choice**|**SUMATRIPTAN**|**moderate to severe disability**|\n|**Ergots — less commonly used**|**dihydroergotamine · ergotamine**|when the simple ladder has failed|\n\n### Triptans\n- **⚠️ Mechanism: 5HT (SEROTONIN) RECEPTOR AGONIST** — not a calcium-channel blocker, not a dopamine antagonist, not an opioid.\n- **How it works:** relieves pain by **CONSTRICTING BLOOD VESSELS**.\n- **Route:** **oral or SUBCUTANEOUS**.\n- **⚠️ Precautions: ISCHAEMIC HEART DISEASE and CEREBROVASCULAR DISEASE** — the vasoconstriction is the problem.\n- **⚠️ NEVER with ergots** — both are vasoconstrictors.\n\n### Ergots\n- **DIHYDROERGOTAMINE** is considered **more effective with FEWER side effects than ergotamine**.\n- *The bank keys ergotamine for an attack that aspirin and ibuprofen have failed to touch, while the book itself endorses paracetamol and aspirin as OTC treatment and calls ergots \"less commonly used\" — noted, key as printed.*\n\n### The cardiac patient\n- **⚠️ Both vasoconstrictor families are out:** triptans by their printed precaution, ergots because they are worse in the same way.\n- **What is left:** a **parenteral NSAID — IM KETOROLAC** *(not taken from the course material; the chapter names NSAIDs but no parenteral agent)*.\n\nSrc: neuropsychiatry.pdf (ASM MINDS) ch.9 printed p.84; the printed-85 poster and its medication table restate it. Ketorolac is supplied and tagged",
        "qs": [
          "npqb-nr-124",
          "npqb-nr-126",
          "npqb-nr-130",
          "npqb-nr-134",
          "npqb-nr-135"
        ]
      },
      {
        "id": "hd-7",
        "w": "must",
        "h": "Migraine, preventive — given to cut attack FREQUENCY",
        "body": "**What preventives are for:** drugs given **between attacks** to **decrease the FREQUENCY** of attacks — never to abort one.\n\n### A. Medical treatment\n\n|**Class**|**Agents**|\n|---|---|\n|**Antihypertensives**|**beta blocker — PROPRANOLOL** · **calcium channel blocker — VERAPAMIL**|\n|**Antidepressants**|**tricyclic — AMITRIPTYLINE**|\n|**Anti-epileptics**|**sodium valproate** · **TOPIRAMATE — drug of choice**|\n|**Cyproheptadine**|**used in CHILDREN**|\n|**Monoclonal antibodies**|named, nothing further printed|\n\n- **⚠️ The anti-epileptic asked for: TOPIRAMATE**, the chapter's stated drug of choice. **Lamotrigine and carbamazepine are not migraine preventives**; **verapamil is a preventive but is not an anti-epileptic**.\n- **⚠️ The preventive pair: PROPRANOLOL + AMITRIPTYLINE.** Sumatriptan is abortive, so it cannot appear in a preventive answer.\n\n### B. Lifestyle modification\n- **Regular SLEEP** patterns · **regular MEALS**.\n- **Reduce and limit STRESS**.\n- **Avoid known TRIGGERS** — certain foods.\n\n- **⚠️ No dose anywhere.** The chapter names migraine drugs and prints **no dose, unit, route or frequency for any of them**; the only numeric drug instruction in all ten pages is the cluster oxygen line in `hd-9`.\n\nSrc: neuropsychiatry.pdf (ASM MINDS) ch.9 printed p.84",
        "qs": [
          "npqb-nr-120",
          "npqb-nr-127"
        ]
      },
      {
        "id": "hd-8",
        "w": "must",
        "h": "Tension-type headache — the commonest, and the band",
        "body": "### Epidemiology\n- **⚠️ Rank:** TTH is the **MOST COMMON type of PRIMARY headache** — ahead of migraine, and cluster is the rarest.\n- **Prevalence:** about **40 %** of the general population *(printed 85)* — *the comparison table on printed 88 gives **45 %**. Both recorded as printed; not reconciled.*\n- **Sex:** more common in **females**, **M:F 2:3** *(printed 85)* — *printed 88 gives **F:M = 2:1**, which is not the same number. Both as printed.*\n\n### Aetiology\n**CONTRACTION of NECK and SCALP MUSCLES**, secondary to:\n- **Stress and/or anxiety**\n- **Poor posture**\n- **Depression**\n\n### Clinical picture\n\n|**Feature**|**TTH**|\n|---|---|\n|**Character**|**PRESSING or TIGHTENING — NON-PULSATILE**; \"fullness\", \"tightness/squeezing\", \"pressure\", **\"BAND-LIKE\"**|\n|**Site**|**BILATERAL** — **occipitonuchal or bifrontal**|\n|**Duration**|**30 minutes to 7 days**|\n|**⚠️ Absent**|**NO nausea, NO vomiting, NO photophobia, NO phonophobia** — the discriminator against migraine|\n|**Onset**|acutely under **emotional distress or intense worry**; often **on rising** or shortly after|\n|**Company**|**insomnia and difficulty concentrating** · **muscular tightness or stiffness** in neck, occipital and frontal regions|\n\n### Treatment\n\n**A. Lifestyle modification — and it is printed FIRST:**\n- **Regular exercise**, balanced meals, **adequate sleep**.\n- **Manage stress.**\n- **Avoid caffeinated drinks.**\n\n**B. Medications — a triad:** **ANALGESICS · ANTIDEPRESSANTS · MUSCLE RELAXANTS**.\n\n- **⚠️ No agent is named:** not one drug for TTH anywhere in the chapter — only the three classes, and no dose, unit, route or frequency.\n- **⚠️ The triad ranked in time** *(the book prints it undifferentiated; the split is supplied and tagged)* — **ACUTE attack: an ANALGESIC, in practice an NSAID.** **LONG-TERM / preventive: an ANTIDEPRESSANT**, the tricyclic amitriptyline. **Opioids, corticosteroids and triptans have no place in TTH.**\n- **⚠️ First line:** lifestyle modification, **before any drug** — the book's own ordering.\n\nSrc: neuropsychiatry.pdf (ASM MINDS) ch.9 printed pp.85-86; the printed-86 poster restates it. The acute/long-term ranking is supplied and tagged",
        "qs": [
          "npqb-nr-133",
          "npqb-nr-138",
          "npqb-nr-139",
          "npqb-nr-140"
        ]
      },
      {
        "id": "hd-9",
        "w": "must",
        "h": "Cluster headache — the rarest, and the most violent",
        "body": "### Epidemiology\n- **The LEAST COMMON** of the three primary headaches.\n- **Age:** begins in **middle adult life — the 30s to 40s**.\n- **⚠️ Sex: MALES**, **M:F = 4:1** — the only primary headache commoner in men.\n- **Aetiology: HISTAMINE** — *and this word appears only in the printed-88 table cell; the cluster prose on printed 86-87 gives no pathogenesis at all.*\n\n### The periodicity — the feature that names it\n- **The pattern:** attacks are **SHORT** and occur with a **CLEAR PERIODICITY**.\n- **⚠️ 1-2 cluster periods per year**, each lasting **2 weeks to 3 months**.\n- **Within a period:** **1-5 attacks per day**, each lasting **minutes to 2 hours**.\n\n### The pain\n\n|**Feature**|**Cluster**|\n|---|---|\n|**Character**|**EXCRUCIATING, STABBING, SHARP, LANCINATING** — *as if the eye is being pushed out* — **rather than throbbing**|\n|**Location**|**UNILATERAL, PERIORBITAL and RETRO-ORBITAL**; stays on the **SAME SIDE** through the cluster period|\n|**Onset**|**SUDDEN, peaking in 10-15 minutes**|\n|**Intensity**|**very severe** — **wakes the patient from sleep** and drives them to hospital|\n\n### The cranial parasympathetic symptoms — all IPSILATERAL\n- **Lacrimation** or **conjunctival injection**\n- **Nasal stuffiness or rhinorrhoea**\n- **Eyelid oedema**\n- **⚠️ MIOSIS or PTOSIS**\n- **Forehead and facial perspiration**\n\n- **⚠️ The bedside picture:** the one the bank keeps drawing — a man woken **at the same hour each night** by **boring periorbital pain** with **ptosis and lacrimation**. Nocturnal, unilateral, periorbital, autonomic — cluster, not migraine and not sinusitis.\n\n### Treatment\n\n|**Aim**|**Treatment**|\n|---|---|\n|**ABORTIVE**|**⚠️ INHALATION OF 100 % OXYGEN via FACIAL MASK at 6 L/min** — the only dose, unit and route printed in the whole chapter · **corticosteroids**, for intermittent use during acute flare-ups|\n|**PREVENTIVE**|**⚠️ VERAPAMIL** · **lithium** · **topiramate** · **corticosteroids**|\n\n- *The printed-87 poster's preventive quick-reference drops corticosteroids, which the prose includes. Recorded as printed.*\n- **⚠️ Not cluster preventives:** amitriptyline, sumatriptan, ibuprofen. Amitriptyline prevents migraine and treats TTH; sumatriptan aborts migraine.\n\nSrc: neuropsychiatry.pdf (ASM MINDS) ch.9 printed pp.86-87; histamine from the printed-88 table cell only",
        "qs": [
          "npqb-nr-123",
          "npqb-nr-129",
          "npqb-nr-131"
        ]
      },
      {
        "id": "hd-10",
        "w": "must",
        "h": "The three side by side — the book's comparison table",
        "body": "**⚠️ The discrimination instrument:** this table decides most of the bank's vignettes. Blank cells below are **blank in the book** — recorded as blank, never filled in.\n\n|**Feature**|**MIGRAINE**|**TENSION**|**CLUSTER**|\n|---|---|---|---|\n|**Incidence**|**10 %** — 2nd commonest|**45 %** — commonest primary|**least common** primary|\n|**Gender**|**F:M = 3:1**|**F:M = 2:1**|**M:F = 4:1**|\n|**Age**|**15-25**, rising at **35-45**|—|**middle adult life, 30s-40s**|\n|**Pathogenesis**|**NEUROVASCULAR** theory|**contraction of neck and scalp muscles** — stress, anxiety, poor posture, depression|**HISTAMINE**|\n|**Onset**|—|emotional distress or intense worry; **on rising**|**SUDDEN**, peaks in **10-15 min**|\n|**Course**|**intermittent (paroxysmal)**|—|**clear periodicity** — 1-2 periods/year, each 2 weeks to 3 months|\n|**Duration**|**4-72 hours**|**30 min - 7 days**|**minutes - 2 hours**|\n|**Frequency/day**|**once**|—|**1-5 times**|\n|**Character**|**THROBBING**|**fullness / tightness / SQUEEZING / pressure / BAND-LIKE**|**EXCRUCIATING, STABBING, SHARP**, lancinating — *as if the eye is being pushed out*|\n|**Intensity**|**moderate to severe**|—|**very severe** — **wakes from sleep**|\n|**Site**|initially **UNILATERAL**, frontotemporal and ocular; may be **bilateral**|**BILATERAL**, occipitonuchal or bifrontal|**UNILATERAL**, periorbital and retro-orbital, **same side** through the period|\n|**Association**|**nausea ± vomiting (1/3)** · **photophobia ± phonophobia** · may be preceded by **AURA**|**insomnia** and difficulty concentrating · **muscular tightness / neck stiffness**, occipital and frontal|**cranial PARASYMPATHETIC** — lacrimation, conjunctival injection, rhinorrhoea, eyelid oedema, **miosis or ptosis**, facial sweating|\n|**Increased by**|**movement or physical activity**|—|—|\n|**Relieved by**|**rest** · lying quietly in a **dark room** · **aspirin / ibuprofen / paracetamol**|treatment|treatment|\n\n- **⚠️ The three fastest discriminators:** **nausea and photophobia = migraine** · **band-like and bilateral with none of them = tension** · **unilateral periorbital with autonomic signs = cluster**.\n\nSrc: neuropsychiatry.pdf (ASM MINDS) ch.9 printed pp.88-89 — one table spanning both pages",
        "qs": []
      },
      {
        "id": "hd-11",
        "w": "know",
        "h": "Deferred, and what this chapter does not print",
        "body": "### Register (§14.5) — owed to another chapter\n\n|**Fact**|**Owed to**|**Why it is deferred**|\n|---|---|---|\n|**Meningitis in full** — the syndrome, meningeal irritation signs, CSF findings, treatment|**`nr-cns`**|the flowchart names it as a secondary cause and teaches nothing about it; **no question filed here tests meningitis** — checked before deferring|\n\n### What the chapter does not contain, verified rather than assumed\n- **No pain taxonomy** — supplied in `hd-1`, and Neurology ch.16 \"Pain\" was read for it and returns the same zero.\n- **No dosing:** no dose, unit, route or frequency for any drug except the cluster oxygen line, **100 % at 6 L/min**.\n- **No named agent for tension-type headache** — three classes only.\n- **No secondary-headache prose section** — the printed-80 flowchart is all of it.\n- **No trigeminal neuralgia**, which is why it can only be a distractor.\n\n- *The book's three self-contradictions are recorded where they are used, not a second time here: aura duration in `hd-5`, TTH prevalence and sex ratio in `hd-8`.*\n\nSrc: neuropsychiatry.pdf (ASM MINDS) ch.9 printed pp.80-89, read end to end",
        "qs": []
      }
    ]
  }
};
