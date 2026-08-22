/* ps-ocd — "Obsessive-compulsive disorder", Neuropsychiatry (Psychiatry half).
   Written 2026-08-22 under START-HERE.md §14, §14.1, §14.2, §14.3, §14.3a,
   §14.5, plus content\neuro\theory-plan.md.

   ⚠️⚠️ THIS IS HALF OF A SPLIT. The chapter was written whole as "OCD and
   PTSD" against the deck and the book, spliced, and PRINTED AT 14 pp — one
   page past the ≤13 hard shape, with 132 words stranded on page 14.
   TWO GENUINE SECOND COPIES WERE TRIMMED FIRST and it was not enough: a
   consolidated "which source has what" table and a restatement of PTSD
   prevalence came out, recovering 82 words of paper. 50 words still sat on
   page 14 and NOTHING LEFT WAS DUPLICATION, so the chapter was split:
       ps-ocd   OCD                            — this file, oc-1 .. oc-10
       ps-ptsd  PTSD and acute stress disorder — ps-ptsd.draft.js, pt-1 .. pt-4
   The seam is the deck's own PART ONE / PART TWO boundary — contiguous, and
   it needed no reordering.
   ⚠️ UNLIKE nr-lmn/nr-nerve THIS SPLITS A SINGLE DECK. CLAUDE.md §4 joins one
   TOPIC taught over two lectures; it says nothing about two disorders taught
   in one, and ≤13 pp measured by printing is a user ruling. Both chapters were
   RETITLED in modules.js; SCHEDULE is untouched, per §4 and the nr-hemi and
   nr-lmn precedents. The single question stays here, in oc-1.

   ===========================================================================
   SOURCES
     content\neuro\lectures\L8) OCD & PTSD.txt              2,322 w (JS count)
     content\neuro\book\psych-ch03-anxiety.txt              printed pp. 197-198
       plus THREE lines only from the shared spine on printed pp. 200-201,
       each named in oc-10's register.

   ⚠️ THE DECK IS TEXT-COMPLETE — 33 pages, only three under 20 words, all with
   fonts, no zero-text page anywhere. Audited with pdftotext, pdffonts and
   pdfimages, 2026-08-22. Nothing rendered; nothing hidden. It is the only
   fully text-complete deck met in this module so far.

   ⚠️⚠️ THE BOOK IS A SHARED SOURCE AND ps-anxiety IS NOT WRITTEN YET — the
   plan's "inverse problem: ONE source for TWO chapters". oc-10 declares in
   full what is left to the sibling and what three lines were taken.

   ⚠️ THE BOOK PRINTS ONE DIAGNOSTIC FACT THE DECK DOES NOT: OCD symptoms must
   last SIX MONTHS OR MORE. The deck gives >1 hr/day and no duration at all.

   ⚠️ CITATION FORM: the deck cache preserves slide TITLES, not numbers, so
   Src: lines cite `L8 sl. <title>`; the book is cited by printed page.
   ===========================================================================
   BUDGET (§14.1)
     ⚠️ MEASURED PAGE RATE FROM THE 14-pp WHOLE PRINT: 4,289 w / 14 = 306 w/pp,
     against nr-lmn's 296 the same day. ÷280 remains the planning divisor.
   ===========================================================================
   COVERAGE FLOOR (§14.2) — the single question is linked in oc-1.
     npqb-ps-7 — "Which is a characteristic of OCD?", against (A) intrusive
     thoughts the patient recognises as irrational, (B) compulsions that reduce
     anxiety, (C) both, (D) neither. Keyed BOTH, and both halves are printed by
     BOTH sources.
     ⚠️ ONE NUANCE, and it does NOT dispute the key: insight is a DSM-5
     SPECIFIER — good/fair, poor, or absent/delusional — so recognising the
     thought as irrational is TYPICAL, not universal. Written into oc-1 as a
     caution; the specifier list is in oc-5.
   ===========================================================================
   NO GAP IS FILLED FROM OUTSIDE KNOWLEDGE. Every fact is on a slide or a book
   page. Where the sources differ in what they carry, both are attributed.
   ===========================================================================
   RE-MEASURE COMMAND FOR THE HUB:
     node -e "global.window={};var fs=require('fs');
       eval(fs.readFileSync('content/neuro/theory-drafts/ps-ocd.draft.js','utf8'));
       Object.keys(THEORY_DRAFT).forEach(function(k){var t=0;
         THEORY_DRAFT[k].sections.forEach(function(s){t+=s.body.trim().split(/\s+/).length;});
         console.log(k, THEORY_DRAFT[k].sections.length+' sections', t+' body words');});"
   =========================================================================== */

var THEORY_DRAFT = {
  "ps-ocd": {
    "intro": "Obsessions the patient knows are his own and cannot stop, and the rituals he performs to quiet them. DSM-5 took OCD out of the anxiety chapter in 2013 and gave it a family of its own. Its lecture partner, PTSD, is `ps-ptsd`.",
    "sections": [
      {
        "id": "oc-1",
        "w": "must",
        "h": "What OCD is — the two halves, and the threshold",
        "body": "|**Half**|**Definition**|\n|---|---|\n|**OBSESSIONS**|**RECURRENT, INTRUSIVE THOUGHTS, URGES or IMAGES** causing **MARKED ANXIETY**. **⚠️ RECOGNISED AS PRODUCTS OF ONE'S OWN MIND**, and the individual **ATTEMPTS TO SUPPRESS OR NEUTRALISE them**|\n|**COMPULSIONS**|**REPETITIVE BEHAVIOURS or MENTAL ACTS** performed **IN RESPONSE TO OBSESSIONS** or to **RIGID RULES**, **AIMED AT REDUCING DISTRESS** — and **NOT REALISTICALLY CONNECTED to what they prevent**|\n\n- **⚠️ The clinical threshold:** symptoms must be **TIME-CONSUMING — MORE THAN ONE HOUR A DAY** — **OR** cause **clinically significant DISTRESS or FUNCTIONAL IMPAIRMENT**.\n- **The book says the same in its own words:** obsessions are **recurrent, persistent and usually UNWANTED**; **the patient KNOWS THEY ARE A PRODUCT OF HIS OR HER MIND**; their presence **causes marked distress**; the patient **tries to ignore or stop them, but it is not easy**. Compulsions are **repetitive behaviours (handwashing) or mental acts (counting)** performed **as a trial to STOP the obsessions**.\n\n### ⚠️ The two facts a question can be built on\n- **Insight:** the thought is **the patient's own** and is **recognised as unreasonable** — obsessions are **EGO-DYSTONIC**. That is what separates them from a delusion (`oc-6`).\n- **Function:** the compulsion **REDUCES the anxiety** the obsession created. **Both statements are true at once**, which is why an item offering them separately takes **both**.\n- **⚠️ Insight is a SPECIFIER:** not a guarantee. DSM-5 grades it **good or fair · poor · absent, i.e. delusional** (`oc-5`). So *recognises the thought as irrational* is **typical, not universal** — a patient with absent insight still has OCD.\n- **⚠️ The relief is temporary — and that is the trap.** The deck's own clinical pearl: **compulsions provide only TEMPORARY relief — they PERPETUATE the OCD cycle by REINFORCING AVOIDANCE.** The loop is **obsession → anxiety → compulsion → relief → obsession**.\n\n### Where these disorders sit\n- **⚠️ DSM-5 RECLASSIFICATION, 2013:** **OCD and PTSD were SEPARATED FROM THE ANXIETY DISORDERS** because their **neurobiological, phenomenological and treatment profiles are distinct**.\n- **The three headings the book uses:** **anxiety disorders** · **obsessive-compulsive and related disorders** · **trauma- and stressor-related disorders**.\n\nSrc: L8 sl. Definition of OCD · Common Obsessions & Compulsions (the clinical pearl) · Introduction: Anxiety & Trauma-Related Disorders; neuropsychiatry.pdf (ASM MINDS) Psychiatry ch.3 printed pp. 194, 197-198",
        "qs": [
          "npqb-ps-7"
        ]
      },
      {
        "id": "oc-2",
        "w": "must",
        "h": "DSM-5 criteria for OCD, and the duration only the book prints",
        "body": "**OCD — DSM-5 300.3 / ICD-10 F42. Four criteria:**\n\n|**#**|**Criterion**|\n|---|---|\n|**1**|**OBSESSIONS AND COMPULSIONS** — recurrent intrusive thoughts **with attempts to suppress**; repetitive acts **driven by the obsession** and **aimed at distress reduction**|\n|**2**|**TIME-CONSUMING OR IMPAIRING** — **more than 1 HOUR A DAY**, **OR** clinically significant **distress or impairment** in social, occupational or other areas|\n|**3**|**NOT DUE TO A SUBSTANCE OR MEDICAL CONDITION** — not attributable to the physiological effects of a substance or another medical condition|\n|**4**|**NOT BETTER EXPLAINED** by **GAD**, **body dysmorphic disorder**, **trichotillomania**, **excoriation disorder**, **stereotypies** or **eating disorders**|\n\n### ⚠️ The two sources give different numbers, and both are printed\n\n|**Fact**|**The deck (DSM-5)**|**The book**|\n|---|---|---|\n|**Daily time**|**more than 1 hour per day**|**more than one hour per day** — the same|\n|**⚠️ DURATION of the illness**|**not stated anywhere**|**SIX MONTHS OR MORE**|\n\n- **⚠️ Learn the six months from the book.** It states it twice — in the prose and again on its **OCD: THE CYCLE & IMPACT** poster, which prints **`> 1 Hour/Day · 6+ Months`** side by side. **The deck never gives a duration for OCD at all**, so a question asking for one is answerable only from the book.\n- **The book's fourth and fifth requirements** match criteria 2 and 4: the disorder **causes significant distress and impairment in activities and relations**, and **differential diagnoses have to be excluded**.\n\nSrc: L8 sl. DSM-5 Diagnostic Criteria for OCD (300.3 / F42); neuropsychiatry.pdf (ASM MINDS) Psychiatry ch.3 printed pp. 197-198",
        "qs": []
      },
      {
        "id": "oc-3",
        "w": "must",
        "h": "Who gets OCD — the numbers worth carrying",
        "body": "|**Measure**|**Figure**|\n|---|---|\n|**Lifetime prevalence, worldwide**|**2-3 %**|\n|**WHO disability ranking**|**10th leading cause**|\n|**Average age of onset**|**~17 years**|\n|**⚠️ Early onset**|**50 % of cases begin BEFORE AGE 20**|\n|**Onset in MALES**|**age 6-15** — earlier|\n|**Onset in FEMALES**|**age 20-29**|\n|**Peak pattern**|**BIMODAL** — childhood and early adulthood|\n|**First-degree relatives**|**3-5× increased risk**|\n\n### ⚠️ Comorbidity is the rule, not the exception\n- **Comorbidity:** **90 % have AT LEAST ONE other psychiatric disorder.**\n- **MAJOR DEPRESSION: 67 % comorbidity rate.**\n- **⚠️ MEAN DELAY TO DIAGNOSIS: ELEVEN YEARS, globally.** A patient of 28 with a three-year history is presenting early by that standard.\n\n- **The wider frame:** the deck opens on **anxiety disorders as a group — ~18 % lifetime prevalence worldwide**. *(PTSD's figures are in `ps-ptsd`.)*\n\nSrc: L8 sl. Epidemiology of OCD · Introduction: Anxiety & Trauma-Related Disorders",
        "qs": []
      },
      {
        "id": "oc-4",
        "w": "must",
        "h": "Why it happens — four causal groups, and one circuit",
        "body": "|**Group**|**What the deck names**|\n|---|---|\n|**GENETIC**|**HERITABILITY 40-65 %** from twin studies · **COMT, SLC1A1, SERT variants** · **higher MONOZYGOTIC than DIZYGOTIC concordance**|\n|**NEUROBIOLOGICAL**|**CSTC CIRCUIT DYSFUNCTION** · **SEROTONERGIC dysregulation** · **glutamatergic and dopaminergic involvement** · **ORBITOFRONTAL CORTEX and CAUDATE HYPERACTIVATION**|\n|**PSYCHOLOGICAL**|**INFLATED RESPONSIBILITY** · **OVERESTIMATION OF THREAT** · **PERFECTIONISM** · **INTOLERANCE OF UNCERTAINTY** · **behavioural conditioning**|\n|**ENVIRONMENTAL**|**CHILDHOOD TRAUMA** · **STREPTOCOCCAL INFECTION (PANDAS/PANS)** · **stressful life events** · **perinatal factors**|\n\n- **The deck's own summary of the four:** **OCD is MULTIFACTORIAL — the BIOPSYCHOSOCIAL model applies in all clinical evaluations.**\n- **⚠️ CSTC is the circuit to name:** **cortico-striato-thalamo-cortical**. The lesion is **hyperactivation**, not loss — **OFC and caudate**.\n\n### The four neurotransmitters, and which way each moves\n\n|**Transmitter**|**Change**|**Significance**|\n|---|---|---|\n|**SEROTONIN (5-HT)**|**↓ ACTIVITY**|**the key target of the SSRIs**|\n|**DOPAMINE**|**↑ in the STRIATUM**|**reward and HABIT REINFORCEMENT**|\n|**GLUTAMATE**|**↑ in the OFC**|**excitatory drive in the CSTC loop**|\n|**GABA**|**↓ INHIBITION**|**loss of inhibitory control**|\n\n- **⚠️ The table IS the treatment rationale:** serotonin down explains why **SSRIs at high dose** are first-line; **dopamine up in the striatum** explains why **antipsychotic augmentation** works in refractory cases; **glutamate up** explains **memantine and D-cycloserine** as augmenting agents (`oc-8`).\n\nSrc: L8 sl. Etiology & Risk Factors of OCD · Neurobiology & Pathophysiology of OCD",
        "qs": []
      },
      {
        "id": "oc-5",
        "w": "must",
        "h": "What patients actually do — themes, subtypes and specifiers",
        "body": "### The four theme pairs — each obsession with the compulsion it drives\n\n|**Obsession**|**Is**|**Compulsion**|**Is**|\n|---|---|---|---|\n|**CONTAMINATION**|fear of **GERMS, DIRT, BODILY FLUIDS**|**CLEANING / WASHING**|**excessive hand-washing**, **avoiding surfaces**|\n|**HARM**|fear of **hurting SELF or OTHERS**; **violent images**|**CHECKING**|repeatedly checking **LOCKS, GAS, APPLIANCES**|\n|**SYMMETRY / ORDER**|the need for things to be **'JUST RIGHT'**|**COUNTING / REPEATING**|counting to specific numbers, **re-reading**|\n|**FORBIDDEN THOUGHTS**|**SEXUAL, RELIGIOUS (SCRUPULOSITY), TABOO**|**MENTAL RITUALS**|**praying**, **mental reviewing**, **seeking reassurance**|\n\n### Subtypes, with the deck's percentages\n\n|**Subtype**|**%**|**Note**|\n|---|---|---|\n|**CONTAMINATION**|**~40 %**|**the COMMONEST**. Fear of germs, chemicals, bodily fluids; excessive cleaning|\n|**CHECKING**|**~30 %**|driven by **HARM AVOIDANCE** — doors, stoves, driving routes|\n|**SYMMETRY / ORDERING**|**~25 %**|**'just right' experiences**. ⚠️ **Linked to TICS and EARLY ONSET**|\n|**PURE-O**|**~20 %**|**distressing intrusive thoughts WITHOUT OVERT RITUALS** — ⚠️ the **mental rituals are COVERT COMPULSIONS**, so this is not OCD without compulsions|\n|**HOARDING**|**~15 %**|⚠️ **NOW CLASSIFIED SEPARATELY in DSM-5.** Difficulty discarding because of a **perceived need**|\n|**PANDAS / PANS**|—|**paediatric autoimmune neuropsychiatric disorder associated with STREPTOCOCCUS** — **ACUTE-ONSET OCD in children**|\n\n### ⚠️ The four DSM-5 specifiers\n- **With GOOD or FAIR insight** · **with POOR insight** · **with ABSENT INSIGHT / DELUSIONAL BELIEFS** · **TIC-RELATED**.\n- **Why insight is graded and not assumed:** see the caution in `oc-1`. **Absent insight does not make it schizophrenia** — `oc-6` gives the discriminator.\n\nSrc: L8 sl. Common Obsessions & Compulsions · OCD Subtypes & Specifiers",
        "qs": []
      },
      {
        "id": "oc-6",
        "w": "must",
        "h": "Telling OCD from seven look-alikes",
        "body": "|**Disorder**|**Looks like OCD because**|**⚠️ The discriminator**|\n|---|---|---|\n|**GAD**|repetitive worry, anxiety|the worries are **REALISTIC** and **EGO-SYNTONIC**, and **there are NO RITUALS**|\n|**BODY DYSMORPHIC DISORDER**|intrusive thoughts, repetitive behaviours|the focus is a **PERCEIVED PHYSICAL DEFECT**, and **insight is poor**|\n|**EATING DISORDERS**|ritualised behaviours|the content is **LIMITED TO FOOD, WEIGHT and SHAPE**|\n|**SCHIZOPHRENIA**|intrusive, bizarre thoughts|the thoughts are **EGO-SYNTONIC**, there is **LACK OF INSIGHT**, and there are **POSITIVE SYMPTOMS**|\n|**PTSD**|intrusive content, avoidance|the re-experiencing is **TRAUMA-SPECIFIC**, and there are **NO COMPULSIONS**|\n|**TIC DISORDERS (TOURETTE)**|repetitive movements|**tics are INVOLUNTARY** and **NOT aimed at neutralising anxiety**|\n|**DEPRESSION (rumination)**|repetitive negative thinking|**no neutralising compulsions**, and the themes are **MOOD-CONGRUENT**|\n\n- **⚠️ One word does the work — EGO-DYSTONIC.** An obsession is **experienced as alien and unwanted** even though the patient knows it is his own; a worry, a ruminative thought and a delusion are all **ego-SYNTONIC** — they feel like the patient's own position. Two rows above turn on that word alone.\n- **⚠️ A compulsion is PURPOSEFUL.** It is performed **to neutralise**, which is exactly what a **tic is not**. That single test separates OCD from Tourette at the bedside.\n\n### The book's differential — wider, and it applies to all these disorders\n**In every case, EXCLUDE:** in all types of anxiety and related disorders —\n- **OTHER TYPES OF ANXIETY DISORDER.**\n- **OTHER MENTAL DISORDERS** — the book's example: a patient who **fears insects because he believes they are *advanced tools*** has **PSYCHOSIS, not phobia**.\n- **SUBSTANCE- or MEDICATION-INDUCED** anxiety and related disorders — e.g. **cannabis**.\n- **Another MEDICAL CONDITION:** anxiety and related disorders due to one — e.g. **HYPERTHYROIDISM**, **MYOCARDIAL INFARCTION**.\n\n- **⚠️ The book's list:** it is **criterion 3 and 4 of `oc-2` in clinical form** — and its two medical examples are the ones to have ready, because **thyrotoxicosis presenting as anxiety is a real trap**.\n\nSrc: L8 sl. Differential Diagnosis of OCD; neuropsychiatry.pdf (ASM MINDS) Psychiatry ch.3 printed p.199 — Differential diagnosis. The ego-dystonic and purposefulness readings restate the deck's own columns",
        "qs": []
      },
      {
        "id": "oc-7",
        "w": "must",
        "h": "Assessing OCD — the history, and the Y-BOCS",
        "body": "### The clinical assessment\n\n|**Step**|**What it looks for**|\n|---|---|\n|**CHIEF COMPLAINT**|the primary **obsessions and compulsions IN THE PATIENT'S OWN WORDS**|\n|**HISTORY OF PRESENT ILLNESS**|**ONSET, DURATION, TRIGGERS, FLUCTUATION, FUNCTIONAL IMPACT**|\n|**MENTAL STATE EXAMINATION**|**ritualised behaviours** · **thought content — EGO-DYSTONIC vs EGO-SYNTONIC** · **INSIGHT (good / poor / absent)** · **mood and affect**|\n|**⚠️ PHYSICAL EXAMINATION**|**SKIN CHANGES FROM WASHING**, and a **TIC ASSESSMENT**|\n|**COLLATERAL HISTORY**|**FAMILY ACCOMMODATION** and **REASSURANCE-GIVING**|\n\n- **⚠️ Two are easy to forget:** and both are examinable. OCD has a **physical sign** — the **chapped, dermatitic hands** of the washer — and it has a **family sign**, **accommodation**: relatives who perform or permit the rituals, which **maintains the disorder**.\n- *The MSE structure this sits inside is `ps-symptom`'s; only the OCD-specific findings are written here.*\n\n### ⚠️ Y-BOCS — the gold standard\n\n|**Feature**|**Detail**|\n|---|---|\n|**What it is**|the **YALE-BROWN OBSESSIVE COMPULSIVE SCALE** — **CLINICIAN-ADMINISTERED**|\n|**Items**|**10 — FIVE for obsessions and FIVE for compulsions**|\n|**Scoring**|each item **0-4**; **TOTAL RANGE 0-40**|\n|**⚠️ Threshold**|**Y-BOCS ≥ 16 = MODERATE**, and is the **primary treatment indication**|\n\n- **The five dimensions, scored twice** — once for obsessions and once for compulsions: **TIME OCCUPIED** · **INTERFERENCE** · **DISTRESS** · **RESISTANCE** · **CONTROL**. **5 dimensions × 2 = the 10 items.**\n- **Other scales named:** **OCI-R** (self-report) · **DOCS** · **CY-BOCS** (paediatric) · **PADUA Inventory**.\n\nSrc: L8 sl. Assessment & Psychiatric Evaluation of OCD",
        "qs": []
      },
      {
        "id": "oc-8",
        "w": "must",
        "h": "Treating OCD — four steps, five drugs, and ERP",
        "body": "### The stepped-care ladder\n\n|**Step**|**Content**|\n|---|---|\n|**1 — PSYCHOEDUCATION and SELF-HELP**|OCD information, **online CBT tools**, support groups (e.g. OCD-UK)|\n|**2 — CBT-ERP + SSRI**|the **FIRST-LINE COMBINATION**: **HIGH-DOSE SSRI for 8-12 WEEKS**|\n|**3 — SPECIALIST CBT + AUGMENTATION**|**INTENSIVE ERP**, **ANTIPSYCHOTIC AUGMENTATION**, risk management|\n|**4 — SPECIALIST or INPATIENT CARE**|**IV CLOMIPRAMINE** · **DEEP BRAIN STIMULATION** · **rTMS** · multidisciplinary team|\n\n- **The guideline:** **NICE 2005, updated 2021** — first-line is **CBT-ERP ± SSRI**, on a **stepped-care approach based on severity and response**.\n\n### The drugs, with target doses\n\n|**Drug**|**Class**|**Target dose**|\n|---|---|---|\n|**FLUOXETINE**|**SSRI, 1st line**|**40-80 mg/day**|\n|**FLUVOXAMINE**|**SSRI, 1st line**|**100-300 mg/day**|\n|**SERTRALINE**|**SSRI, 1st line**|**100-200 mg/day**|\n|**PAROXETINE**|**SSRI, 1st line**|**40-60 mg/day**|\n|**⚠️ CLOMIPRAMINE**|**TCA, 2nd line**|**100-250 mg/day**|\n\n- **Augmentation:** for the SSRI-refractory patient — **RISPERIDONE** · **ARIPIPRAZOLE** · **MEMANTINE** · **⚠️ D-CYCLOSERINE, which ENHANCES ERP LEARNING** rather than treating symptoms directly.\n- **⚠️ Clomipramine in one line:** **the highest-efficacy TCA in OCD, but MORE SIDE EFFECTS** — which is why it sits second despite the efficacy. The book independently names **clomipramine as the TCA *for OCD***.\n- **⚠️ The doses are HIGH — by depression standards.** Sertraline for OCD is **100-200 mg**, not 50; the deck's own case titrates **50 → 200 mg**.\n\n### ERP — the five stages of the psychological treatment\n1. **PSYCHOEDUCATION** — explain the **OCD cycle** and the rationale\n2. **FEAR HIERARCHY** — rank triggers using **SUDS 0-100**\n3. **EXPOSURE** — **GRADUATED, IN VIVO and IMAGINAL**\n4. **⚠️ RESPONSE PREVENTION** — **RESIST THE RITUALS, TO ALLOW HABITUATION**\n5. **COGNITIVE RESTRUCTURING** — identify and challenge distortions\n\n- **The evidence:** **ERP achieves 50-70 % SYMPTOM REDUCTION**, and meta-analyses confirm **superiority over supportive therapy and waitlist**.\n- **⚠️ Step 4 is the active ingredient.** Exposure without response prevention lets the compulsion abort the habituation, which is the mechanism `oc-1` describes as perpetuating the cycle.\n- **What the book adds on timing:** clinical improvement in anxiety and related disorders starts in **2-8 weeks**, and it prints **⚠️ 4-12 WEEKS FOR OCD** specifically. The **least duration of treatment is 12 MONTHS while free of symptoms**, and **stopping before that increases relapse**.\n\nSrc: L8 sl. Management of OCD · CBT & Exposure Response Prevention (ERP) · Clinical Case Study: OCD; neuropsychiatry.pdf (ASM MINDS) Psychiatry ch.3 printed pp. 198, 200-201",
        "qs": []
      },
      {
        "id": "oc-9",
        "w": "must",
        "h": "How OCD ends, and the deck's own worked case",
        "body": "### Course and prognosis\n- **The course:** **CHRONIC and FLUCTUATING in most patients**.\n- **⚠️ The outcome thirds:** **~20 % FULL REMISSION** · **~40 % PARTIAL** · **~40 % PERSISTENT symptoms**.\n\n|**GOOD prognostic factors**|**POOR prognostic factors**|\n|---|---|\n|**GOOD INSIGHT** · **MILD SEVERITY** · **SOCIAL SUPPORT** · **ERP ADHERENCE**|**HOARDING subtype** · **POOR INSIGHT** · **comorbid OCPD** · **EARLY ONSET**|\n\n### Complications\n- **MAJOR DEPRESSION — 67 % comorbidity.**\n- **SOCIAL ISOLATION** and **OCCUPATIONAL DYSFUNCTION**.\n- **SUBSTANCE MISUSE**, as self-medication.\n- **⚠️ SUICIDE RISK:** **TEN TIMES that of the general population.**\n- **Dermatological:** **CONTACT DERMATITIS FROM WASHING**.\n- **Paediatric:** **SCHOOL REFUSAL** and **FAMILY ACCOMMODATION**.\n\n### ⚠️ The lecturer's worked case — Ahmed, 28, male engineer\n- **The history:** a **3-YEAR history of CONTAMINATION FEAR** — doorknobs, taps, shared surfaces. **Spends 4-5 HOURS A DAY WASHING HANDS UNTIL 'RAW'.** **Cannot shake hands or use public transport.** **Recently stopped attending work.** **PHQ-9 = 16.** **Insight intact.**\n- **The diagnosis given:** **OCD (F42.2), CONTAMINATION SUBTYPE, WITH GOOD INSIGHT.**\n- **The scale:** **Y-BOCS** — assess **time, interference, distress, resistance and control**, for **both** obsessions and compulsions.\n- **The plan:** **STEP 2 — ERP** on a graduated hierarchy (touching surfaces, delaying washing) **+ SERTRALINE 50 → 200 mg**, with **psychoeducation** and **PHQ-9 monitoring**.\n- **⚠️ The timeline:** **ERP response at 6-12 WEEKS**; **full SSRI effect at 8-12 WEEKS at a therapeutic dose**.\n\n- **⚠️ Read the case as the criteria in action:** 4-5 hours a day clears the **>1 hr** threshold four times over, the work absence supplies **functional impairment**, and *insight intact* is the **specifier**, not a diagnostic requirement (`oc-1`).\n\nSrc: L8 sl. Prognosis & Complications of OCD · Clinical Case Study: OCD · Case Discussion: Ahmed · OCD — Summary",
        "qs": []
      },
      {
        "id": "oc-10",
        "w": "know",
        "h": "Which source carries what, what is left to `ps-anxiety`, and what is not here",
        "body": "### ⚠️ The split, recorded\n- **Printed at 14 pp:** written whole as *OCD and PTSD*, spliced and printed — **one page past the ≤13 hard shape**, with **132 words stranded on page 14**.\n- **Trimmed first, and it was not enough:** two genuine second copies came out — a consolidated *which-source-has-what* table and a restatement of PTSD prevalence — recovering **82 words of paper**. **50 words still sat on page 14**, and **nothing left was duplication.**\n- **The seam:** the deck labels its own halves **`PART ONE`** and **`PART TWO`**, so the split is contiguous and needed no reordering. **`ps-ocd` is OCD; `ps-ptsd` is PTSD and acute stress disorder.**\n- **⚠️ One lecture, two chapters:** unlike `nr-lmn`/`nr-nerve` this splits a **single deck**. It is allowed because **§4 joins one TOPIC taught over two lectures** — it says nothing about two disorders taught in one — and because **≤13 pp measured by printing is a user ruling**. **`SCHEDULE` is untouched.**\n\n### ⚠️ Two sources, and what only one of them has\n- **Only the BOOK has:** the **6-MONTH DURATION** (`oc-2`), the **4-12 WEEKS to clinical improvement in OCD** against 2-8 weeks generally (`oc-8`), and the **substance-induced and another-medical-condition** limbs of the differential (`oc-6`).\n- **Only the DECK has:** **every drug dose in this chapter** — the book prints **no dose, no unit and no route for any drug** — together with the subtypes, the Y-BOCS and the whole stepped-care ladder.\n- **⚠️ They contradict each other nowhere.** Where both print a fact — the **>1 hr/day** threshold, **clomipramine for OCD** — they agree.\n\n### ⚠️ Register (§14.5) — what is filed OUT, to `ps-anxiety`\n- **The book chapter is SHARED:** and **`ps-anxiety` is not yet written** — the plan's *inverse problem, one source for two chapters*.\n- **Taken:** printed **197-198** (OCD) here; printed **199** by **`ps-ptsd`**.\n- **⚠️ Left alone:** printed **193-196 and 200-201 are the SHARED SPINE and belong to `ps-anxiety`**. This chapter lifted **three lines** from them, named below so the sibling knows what is already counted.\n\n|**Left to `ps-anxiety`**|**Where**|\n|---|---|\n|**The anxiety taxonomy in full** — GAD, panic, social anxiety, specific phobia, agoraphobia — and everything under heading I|printed 193-196|\n|**Prognosis, hospitalisation, and the whole PSYCHOTHERAPY block** — relaxation, systematic desensitization, thought stopping, and exposure and response prevention **as a general method**|printed 200|\n|**The full drug list with side effects** — the six SSRIs, the *antidepressant is a misnomer* note, venlafaxine, trazodone, **benzodiazepines NOT more than 1 month**, **propranolol one hour before the situation, contraindicated in asthma**|printed 201|\n\n|**Taken here from the shared spine**|**Used in**|\n|---|---|\n|**2-8 weeks to improvement, and 4-12 WEEKS FOR OCD**|`oc-8`|\n|**Least treatment duration 12 MONTHS**, and relapse on stopping earlier|`oc-8`|\n|**CLOMIPRAMINE named as the TCA for OCD**|`oc-8`|\n\n- **⚠️ `ps-anxiety` HAS A DECK TOO** — as well as the book: the back half of `L4,5`, recorded in `ps-symptom`'s `sy-10`. **The plan does not know that.** Read `sy-10` before briefing it.\n- **Not repeated here:** **`sy-6`** files **OBSESSIONS under thought CONTENT**, beside delusions, and **`sy-4`** defines **COMPULSIVITY**. Both stand; this chapter is the disorder, not the symptom.\n- **No row is filed IN** to this chapter, and none was owed to it.\n\n### Deck quality — measured, not assumed\n- **The page audit:** **33 pages, and only THREE carry under 20 extractable words** — **p4** and **p20** are the **PART ONE / PART TWO dividers** and **p33** is the thank-you slide. **All three have FONTS**, and **no page in the deck has zero text**.\n- **⚠️ Nothing rendered, nothing hidden.** Verified page by page with `pdftotext`, `pdffonts` and `pdfimages`, 2026-08-22. **This is the only fully text-complete deck met in the module so far**, and it carries its own reference list.\n\n### What these sources do not contain, on the OCD side\n- **⚠️ ICD-11:** the deck is **titled DSM-5 AND ICD-11 ALIGNED and gives NO ICD-11 criteria** — the classification appears twice only, for complex PTSD and in the reference list.\n- **Named and not described:** **HOARDING DISORDER** (one line saying DSM-5 separated it), **body dysmorphic disorder**, **trichotillomania**, **excoriation disorder** and **stereotypies** — all appear only as exclusions in `oc-2`.\n- **No paediatric management.** **PANDAS/PANS** is defined and **no treatment for it is given**; **CY-BOCS** is named without content.\n- **No detail on DBS or rTMS** — both appear only as step-4 labels in `oc-8`.\n\nSrc: L8 and printed pp. 197-198 + 200-201 of neuropsychiatry.pdf (ASM MINDS) Psychiatry ch.3, both read end to end; the page audit is a `pdftotext` / `pdffonts` / `pdfimages` sweep of all 33 deck pages, 2026-08-22. The shared-spine split follows the page table at the foot of `content\\neuro\\book\\psych-ch03-anxiety.txt`",
        "qs": []
      }
    ]
  }
};
