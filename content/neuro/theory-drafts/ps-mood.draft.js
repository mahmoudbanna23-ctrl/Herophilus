/* ps-mood — "Mood disorders", Neuropsychiatry (Psychiatry half).
   Written 2026-08-19 under START-HERE.md §14, §14.1, §14.2, §14.3, §14.3a,
   §14.5, plus content\neuro\theory-plan.md.

   Existing key in app\data\modules.js, module `neuropsych`, group "Psychiatry".
   ONE question. This header states no totals; the hub measures and prints.

   ===========================================================================
   SOURCE
     content\neuro\lectures\L9,10) Mood disorders.txt      25 pp, 1,371 w

   ⚠️ ONE QUESTION, SO TERM 1 GOVERNS AND THE CHAPTER IS WRITTEN TO THE DECK.
   §14.2 rule 1 — everything important the lecture states goes in — is the
   binding half here, exactly as in `nr-ms`.

   ⚠️ THIS DECK IS A CRITERIA DECK. It prints the DSM criteria for the manic,
   hypomanic, depressive and mixed episodes as numbered lists, with durations,
   thresholds and the "4 if irritable mood" qualifier. Criteria are facts, not
   prose, so they are carried verbatim in structure — a paraphrase of a
   diagnostic threshold is a different threshold.

   ⚠️ THE DECK IS ALSO A CREDITOR AND A DEBTOR AT ONCE. `ps-symptom` already
   cites this deck for mood congruity and flight of ideas, both of which it
   printed and L4,5 did not; that citation is honoured here by writing both in
   full. See the register note in `mo-9`.

   ⚠️ THE DECK CARRIES SIX OF ITS OWN MCQs in two blocks, one of them a worked
   three-part vignette. Recorded in `mo-9` as the lecturer's emphasis; not
   transcribed as questions.

   ⚠️ CITATION FORM: the cache preserves slide TITLES, not numbers.
   Src: lines cite `L9,10 sl. <title>`.

   ===========================================================================
   BUDGET (§14.1)
     TERM 1: 1,371 w · TERM 2: 25 x 1 = 25 w · max = 1,371, floor 600 cleared.
     Well inside the ~2,400 w ceiling. Forecast at ÷280. PRINT IT.

   COVERAGE FLOOR (§14.2) — the single question is linked.
     mo-4  npqb-ps-14 — "a common symptom of mania", keyed DECREASED NEED FOR
           SLEEP, which is criterion 2 of the manic episode. ⚠️ ALL THREE
           DISTRACTORS ARE ALSO IN THIS DECK, on the depressive side —
           hypersomnia and hyperphagia are depressive-episode criteria and
           atypical-features specifiers, loss of appetite is a depressive
           criterion, and anhedonia is criterion 2 of the depressive episode.
           So the question is decided by knowing WHICH LIST each belongs to,
           and `mo-4` and `mo-5` print the two lists side by side for that
           reason.

   ===========================================================================
   NO GAP IS FILLED. Every fact below is on a slide.

   ⚠️ ONE THING THE DECK PRINTS THAT ITS OWN MCQ CONTRADICTS-BY-OMISSION: the
   epidemiology table gives bipolar disorder as Females = Males, and the deck's
   own MCQ asks for "the female to male gender difference in Bipolar Disorders"
   with 1/1 among the options. They agree. Recorded because a reader meeting the
   MCQ first might expect a 2:1 ratio, which is the DEPRESSIVE figure.

   REGISTER (§14.5) — no row is filed OUT of this chapter. Two are RECEIVED and
   both are now delivered:
     - mood congruity in full, owed by `ps-symptom` -> delivered in `mo-6`
     - flight of ideas, owed by `ps-symptom` -> delivered in `mo-4`
   Both were checked against `ps-symptom`'s `sy-10` register before writing.

   RE-MEASURE COMMAND FOR THE HUB:
     node -e "global.window={};var fs=require('fs');
       eval(fs.readFileSync('content/neuro/theory-drafts/ps-mood.draft.js','utf8'));
       Object.keys(THEORY_DRAFT).forEach(function(k){var t=0;
         THEORY_DRAFT[k].sections.forEach(function(s){t+=s.body.trim().split(/\s+/).length;});
         console.log(k, THEORY_DRAFT[k].sections.length+' sections', t+' body words');});"
   =========================================================================== */

var THEORY_DRAFT = {
  "ps-mood": {
    "intro": "A criteria deck: four episodes, each with a duration, a threshold and a numbered list. The disorders in `mo-7` are then defined entirely by which episodes a patient has had, so the episodes come first and the diagnoses fall out of them.",
    "sections": [
      {
        "id": "mo-1",
        "w": "must",
        "h": "Mood, affect, and what a mood disorder is",
        "body": "|**Term**|**Is**|\n|---|---|\n|**MOOD**|the **INTERNAL emotional EXPERIENCE**|\n|**AFFECT**|the **EXPRESSION** of emotion|\n\n### Definition\n- **Mood disorders:** psychiatric disorders involving a **disturbed MOOD PARAMETER** which has **ELATION at one end and DEPRESSION at the other**.\n- **⚠️ The three characteristics:** an **EPISODIC nature** · a **REMITTING and RELAPSING course** · and **sometimes PSYCHOTIC features**.\n\n*The mood-and-affect distinction is also `sy-3`'s, where it opens the symptomatology examination.*\n\nSrc: L9,10 sl. MOOD & AFFECT · Definition",
        "qs": []
      },
      {
        "id": "mo-2",
        "w": "must",
        "h": "The two families, and who gets which",
        "body": "|**A — DEPRESSIVE DISORDERS**|**B — BIPOLAR DISORDERS**|\n|---|---|\n|**Major depressive disorder** · **Adjustment disorder, depressive type** · **Persistent depressive disorder**|**Bipolar I** · **Bipolar II**|\n\n### ⚠️ Epidemiology — the table the bank could ask from\n\n|**Feature**|**BIPOLAR DISORDER**|**DEPRESSIVE DISORDER**|\n|---|---|---|\n|**Age**|**LATE TEENS and EARLY ADULTHOOD**|**PEAK AGE 40**|\n|**Gender**|**FEMALES = MALES** *(1:1)*|**FEMALE : MALE = 2:1**|\n|**Prevalence**|**1-2.8 %**|**5-17 %**|\n\n- **⚠️ Two different ratios:** and the deck asks about it. Bipolar disorder is **equal between the sexes**; the **2:1 female excess is DEPRESSIVE disorder's**.\n- **Global burden (WHO 2001, by DALYs):** **UNIPOLAR DEPRESSION was the LEADING cause of disability worldwide in the 15-44 age group**; **BIPOLAR disorder was the FIFTH most disabling disorder**.\n\nSrc: L9,10 sl. Types · EPIDEMIOLOGY",
        "qs": []
      },
      {
        "id": "mo-3",
        "w": "know",
        "h": "Aetiology — the biopsychosocial model",
        "body": "**The model:** **BIOPSYCHOSOCIAL**, and the deck's own MCQ answers itself **GENE-ENVIRONMENTAL** rather than any single factor.\n\n|**Class**|**Factors**|\n|---|---|\n|**BIOLOGICAL**|**NEUROSTRUCTURAL** · **NEUROCHEMICAL** · **NEUROENDOCRINE** · **GENES and FAMILY studies**|\n|**PSYCHOLOGICAL**|**exposure to STRESSORS and TRAUMA** · **ADVERSE CHILDHOOD EXPERIENCES (ACEs)**|\n\nSrc: L9,10 sl. ETIOLOGICAL BACGROUND [sic] · BIOLOGICAL FACTORS · PSYCHOLOGICAL FACTORS",
        "qs": []
      },
      {
        "id": "mo-4",
        "w": "must",
        "h": "The manic episode, and the hypomanic",
        "body": "### Criterion A — the mood\n- **The mood:** **ABNORMAL and PERSISTENT — ELATED, EXPANSIVE or IRRITABLE**, accompanied by **INCREASED GOAL-DIRECTED BEHAVIOUR or ENERGY**.\n- **⚠️ DURATION: ONE WEEK or more** for **MANIA**; **FOUR DAYS or more** for **HYPOMANIA**.\n\n### Criterion B — the symptom list, identical for both\n**THREE OR MORE must be present — ⚠️ FOUR if the mood is IRRITABLE:**\n1. **Inflated self-esteem or GRANDIOSITY**\n2. **⚠️ DECREASED NEED FOR SLEEP**\n3. **RACING THOUGHTS**\n4. **Hyper-talkativeness, or PRESSURE OF TALK**\n5. **FLIGHT OF IDEAS**\n6. **DISTRACTIBILITY**\n7. **Increased GOAL-DIRECTED behaviour** — **buying sprees, sexual indiscretions, foolish business investments** — **or NON-goal-directed behaviour**, such as **excitement**\n\n### ⚠️ Mania against hypomania — three differences, and the symptoms are not one of them\nThe deck states it plainly: **the same symptoms, differing only in**\n- **DURATION** — one week against four days\n- **Severity:** and the **NEED FOR HOSPITALISATION**\n- **ABSENCE OF PSYCHOTIC SYMPTOMS** in hypomania\n\n- **⚠️ Sleep is the trap the bank sets.** Mania's criterion is a **DECREASED NEED for sleep** — the patient is **not distressed by sleeping less**. **HYPERSOMNIA is a DEPRESSIVE criterion**, and so are **loss of appetite** and **ANHEDONIA** — see `mo-5`. *(The need-versus-insomnia distinction is also drawn in `sy-2`.)*\n- **FLIGHT OF IDEAS is a manic criterion**, and it is the thought-process change `ps-symptom` cites this deck for.\n\nSrc: L9,10 sl. Clinical Pictures I- Episodes Manic Episode · Hypomanic Episode · Difference",
        "qs": [
          "npqb-ps-14"
        ]
      },
      {
        "id": "mo-5",
        "w": "must",
        "h": "The depressive episode",
        "body": "### The threshold\n- **FIVE symptoms** over **TWO WEEKS or more**, and **at least ONE must be (1) DEPRESSED MOOD or (2) LOSS OF INTEREST OR PLEASURE**.\n\n### The nine criteria\n1. **DEPRESSED MOOD** — **⚠️ in children and adolescents this may be IRRITABLE mood**\n2. **Diminished or lost INTEREST in daily activities, or PLEASURE** *(anhedonia)*\n3. **PSYCHOMOTOR RETARDATION or AGITATION**\n4. **INSOMNIA or HYPERSOMNIA**\n5. **LOSS OF APPETITE or HYPERPHAGIA**, with **associated WEIGHT CHANGE of 5 % or more in ONE MONTH**\n6. **FATIGUE or loss of energy**\n7. **Feelings of WORTHLESSNESS or GUILT**\n8. **Decreased CONCENTRATION, forgetfulness or INDECISIVENESS**\n9. **IDEAS OF DEATH, SUICIDAL IDEATION, PLANS, ATTEMPTS**\n\n- **⚠️ Note criteria 4 and 5 run BOTH WAYS.** Depression takes **either** insomnia **or** hypersomnia, **either** anorexia **or** hyperphagia — which is why sleeping and eating too much are depressive findings and not manic ones.\n\nSrc: L9,10 sl. Depressive Episode",
        "qs": []
      },
      {
        "id": "mo-6",
        "w": "must",
        "h": "The mixed episode, and the five specifiers",
        "body": "### Mixed\n- **⚠️ What changed:** DSM-IV-TR had a **MIXED EPISODE** of one week or more; **DSM-5 REMOVED it** and added a **MIXED SPECIFIER** for the manic, hypomanic and depressive episodes.\n- **What it denotes:** one period with **ALTERNATING DISTINCT mood symptoms between ELATION and DEPRESSION**.\n- **Either direction qualifies:** **full MANIC symptoms plus 3 or more depressive features** (dysphoria, depressed mood, decreased interest or pleasure, retardation) — **or full DEPRESSIVE criteria plus 3 or more manic/hypomanic symptoms** (elevated mood, grandiosity, hyper-talkativeness).\n\n### The specifiers\n\n|**Specifier**|**Occurs in**|**Features**|\n|---|---|---|\n|**PSYCHOTIC**|depressive **and** manic episodes|**DELUSIONS and HALLUCINATIONS**|\n|**MELANCHOLIC**|depressive|**DIURNAL VARIATION of mood** or its **NON-REACTIVITY** · **GUILT** · **MIDDLE and LATE INSOMNIA / EARLY MORNING AWAKENING**|\n|**ANXIOUS DISTRESS**|depressive|anxiety symptoms during the episode|\n|**ATYPICAL**|depressive|**MOOD REACTIVITY** · **HYPERSOMNIA** · **HYPERPHAGIA**|\n|**CATATONIC**|**ALL** episodes|**EXCITEMENT** · **STUPOR** · **NEGATIVISM**|\n\n### ⚠️ Mood congruity — the deck that defines it\n- **MOOD-CONGRUENT delusions:** **GUILT or DESERVED PUNISHMENT in a DEPRESSIVE episode**; **GRANDEUR in a MANIC episode**.\n- **MOOD-INCONGRUENT delusions:** **delusions of CONTROL or INFLUENCE**.\n- *This is the definition `ps-symptom` cites, and `sy-6` carries the short form for the reader who meets it there first.*\n\nSrc: L9,10 sl. Mixed Episode · Specifiers (×2)",
        "qs": []
      },
      {
        "id": "mo-7",
        "w": "must",
        "h": "The disorders — each one defined by its episodes",
        "body": "### Bipolar\n\n|**Disorder**|**Requires**|**May also have**|\n|---|---|---|\n|**BIPOLAR I**|**AT LEAST ONE MANIC episode**|depressive and/or hypomanic episodes|\n|**BIPOLAR II**|**ONLY a HYPOMANIC episode**|depressive episodes — **⚠️ but NEVER a manic episode**|\n\n- **Also named:** **bipolar disorder due to another MEDICAL CONDITION** · **SUBSTANCE-INDUCED** bipolar disorder.\n\n### Depressive\n\n|**Disorder**|**Definition**|\n|---|---|\n|**MAJOR DEPRESSIVE DISORDER**|**ONLY depressive episodes**. If they **RECUR** it is called **RECURRENT MAJOR DISORDER**|\n|**PERSISTENT DEPRESSIVE DISORDER (DYSTHYMIA)**|depressive symptoms lasting **TWO YEARS or more** — **⚠️ ONE year in children and adolescents**|\n|**ADJUSTMENT DISORDER, depressive type**|**⚠️ a STRESS-RELATED disorder**, listed here to be told apart from the others: **reactionary to stress**, depressive symptoms, **FULL INSIGHT** and **NO psychotic features**|\n\n- **Also named:** **GRIEF** · depressive disorder **due to another medical condition** · **substance-induced** depressive disorder.\n- **⚠️ The whole taxonomy is episode arithmetic.** One manic episode makes bipolar I however many depressions there have been; a hypomanic episode with no mania makes bipolar II; depressions alone make MDD.\n\nSrc: L9,10 sl. II-Bipolar Disorders · II-Depressive Disorders",
        "qs": []
      },
      {
        "id": "mo-8",
        "w": "must",
        "h": "Management — admit, treat, and which psychotherapy",
        "body": "### I — Hospitalisation\n**Indications:** **DIAGNOSIS** *(i.e. to establish it)* · **LACK OF SOCIAL SUPPORT** · **REFUSAL of food or medication, or NON-COMPLIANCE** · **SUICIDE, HOMICIDE or SELF-HARM**.\n\n### II — Biological therapy\n**A. ECT:** electroconvulsive therapy. **Indications —**\n- **SUICIDE · VIOLENCE**\n- **PSYCHOMOTOR RETARDATION or AGITATION**\n- **PSYCHOTIC or CATATONIC features**\n- **MULTIPLE DRUGS · PREGNANCY (first trimester)**\n- **RESISTANT DEPRESSION**\n\n**B. Pharmacotherapy**\n\n|**Setting**|**Treatment**|\n|---|---|\n|**BIPOLAR, acute**|**initiate a MOOD STABILISER** + symptomatic treatment|\n|**manic / hypomanic**|**MAJOR TRANQUILLISERS**|\n|**bipolar DEPRESSION**|**1** titrate the mood stabiliser **UP** · **2** **ECT** · **3** an **atypical antipsychotic with antidepressant effect, e.g. QUETIAPINE** · **4** ⚠️ an antidepressant **with the LEAST MANIC SWITCH — a noradrenergic-dopaminergic reuptake inhibitor, BUPROPION**|\n|**BIPOLAR, maintenance**|**mood stabiliser**, or a **combination**: mood stabiliser + antipsychotic, **two** mood stabilisers, or two mood stabilisers + antipsychotic|\n|**MDD, first episode**|**ANTIDEPRESSANTS for 6-12 MONTHS**|\n|**MDD, recurrent**|**antidepressants + MOOD STABILISERS**|\n\n### III — Psychotherapy, matched to the disorder\n\n|**Therapy**|**For**|\n|---|---|\n|**SUPPORTIVE psychotherapy**|**ADJUSTMENT DISORDER, depressive type**|\n|**COGNITIVE-BEHAVIOURAL THERAPY**|**MAJOR DEPRESSIVE DISORDER**|\n|**COMPLIANCE ENHANCEMENT therapy**|**BIPOLAR DISORDERS**|\n\nSrc: L9,10 sl. Management (×4)",
        "qs": []
      },
      {
        "id": "mo-9",
        "w": "know",
        "h": "The lecturer's own questions, and what is not here",
        "body": "### Block 1 — three single questions\n- **Item of the mental state examination:** a patient asked about internal feelings describes **SADNESS** — which item? Against affect, talk, thought, perception. *(`mo-1`: **MOOD**, because it is the internal experience.)*\n- **The BIPOLAR female-to-male ratio?** Against 4/1, 2/1, 1/1, 1/2, ¼. *(`mo-2`: **1/1**. ⚠️ **2/1 is DEPRESSIVE disorder's ratio** and is the trap.)*\n- **The biopsychosocial aetiological model is…?** Against biological, psychological, genetic, environmental. *(`mo-3`: **GENE-ENVIRONMENTAL** — the model is the interaction, not a component.)*\n\n### Block 2 — one vignette, three questions\n**A 23-year-old man** brought by his mother, **excited and aggressive**, saying he is well and needs no doctor; he is **on his way to the best invention in the world**, is **very happy**, and is going to **make his family rich and famous**.\n- **The AFFECT observed?** Against irritable, depressed, happy, elation, expansive.\n- **The type of DELUSION?** Against persecution, **grandeur**, influence, wealth, reference. *(`mo-6`: grandeur is the **mood-congruent** delusion of a manic episode.)*\n- **The most probable diagnosis?** Against **bipolar I**, bipolar II, recurrent manic disorder, recurrent hypomanic disorder, persistent mood disorder. *(`mo-7`: one manic episode is enough for **bipolar I**.)*\n\n### ⚠️ Register (§14.5) — two rows RECEIVED, both delivered\n\n|**Owed by**|**Fact**|**Delivered**|\n|---|---|---|\n|**`ps-symptom`**|**mood congruity in full**|✅ **`mo-6`** — both congruent examples and the incongruent one|\n|**`ps-symptom`**|**FLIGHT OF IDEAS**|✅ **`mo-4`** — criterion 5 of the manic episode|\n\n**No row is filed OUT of this chapter.**\n\n### What this deck does not contain\n- **No DRUG NAMES for the mood stabilisers** — the class is named on every management slide and not one agent is. *(Lithium's monitoring range is `ps-pharm`'s, from the book.)*\n- **No dose, unit or frequency for anything** except **MDD antidepressants for 6-12 months**.\n- **No cyclothymia**, and **no seasonal pattern specifier**.\n- **GRIEF:** named as a depressive disorder and **not described** — the normal grief hallucination is in `sy-7`.\n\nSrc: L9,10 sl. MCQs (×2 blocks)",
        "qs": []
      }
    ]
  }
};
