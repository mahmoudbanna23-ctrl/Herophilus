/* ps-ptsd — "PTSD and acute stress disorder", Neuropsychiatry (Psychiatry
   half). NEW CHAPTER, added 2026-08-22.
   Written under START-HERE.md §14, §14.1, §14.2, §14.3, §14.3a, §14.5, plus
   content\neuro\theory-plan.md.

   ⚠️⚠️ THIS IS HALF OF A SPLIT, AND THE HALF THAT DID NOT EXIST BEFORE.
   ps-ocd was written whole as "OCD and PTSD", spliced, and PRINTED AT 14 pp —
   one page past the ≤13 hard shape, with 132 words stranded on page 14. Two
   genuine second copies were trimmed first, recovering 82 words of paper; 50
   words still sat on page 14 and nothing left was duplication. Split as:
       ps-ocd   OCD                            — ps-ocd.draft.js, oc-1 .. oc-10
       ps-ptsd  PTSD and acute stress disorder — this file, pt-1 .. pt-4
   The seam is the deck's own PART ONE / PART TWO boundary — contiguous, and it
   needed no reordering.
   ⚠️ UNLIKE nr-lmn/nr-nerve THIS SPLITS A SINGLE DECK. CLAUDE.md §4 joins one
   TOPIC taught over two lectures; it says nothing about two disorders taught
   in one, and ≤13 pp measured by printing is a user ruling. SCHEDULE is
   untouched.

   ⚠️ ZERO QUESTIONS. The pair's only question, npqb-ps-7, is an OCD item and
   stays in ps-ocd's oc-1. Per theory-plan.md §1 a zero means "not yet
   transcribed", NOT "not examined" — the npqb- bank is frozen mid-flight in
   another chat. Do not treat this chapter as low value.
   ⚠️ With no question, §14's TERM 1 governs alone and §14.2 rule 1 —
   everything important the lecture states goes in — is the binding half.

   ===========================================================================
   SOURCES
     content\neuro\lectures\L8) OCD & PTSD.txt   — the PART TWO half
     content\neuro\book\psych-ch03-anxiety.txt   — printed p.199 ONLY

   ⚠️ ONE BLOCK ON p.199 IS DELIBERATELY NOT TAKEN HERE: the differential
   diagnosis. It is printed on the PTSD page but written to cover ALL anxiety
   and related disorders, so it lives in ps-ocd's oc-6 and is not repeated.
   Recorded in pt-4.

   ⚠️ THE FRAMEWORK THIS CHAPTER READS AGAINST is ps-ocd's — the OCD
   neurobiology it is contrasted with (oc-4) and the OCD treatment order it
   differs from (oc-8). Both are pointed at by CHAPTER as well as section,
   because the pointers cross a chapter boundary (the str-12 convention).

   ⚠️ CITATION FORM: the deck cache preserves slide TITLES, not numbers.
   ===========================================================================
   BUDGET (§14.1)
     TERM 1: the deck's PART TWO plus book p.199 · TERM 2: 0 questions.
     Floor 600 cleared. ⚠️ MEASURED RATE FROM THE 14-pp WHOLE PRINT: 306 w/pp.
     PRINT IT — do not clear it on the forecast.
   ===========================================================================
   NO GAP IS FILLED FROM OUTSIDE KNOWLEDGE. Every fact is on a slide or on
   book p.199.
   ===========================================================================
   RE-MEASURE COMMAND FOR THE HUB:
     node -e "global.window={};var fs=require('fs');
       eval(fs.readFileSync('content/neuro/theory-drafts/ps-ptsd.draft.js','utf8'));
       Object.keys(THEORY_DRAFT).forEach(function(k){var t=0;
         THEORY_DRAFT[k].sections.forEach(function(s){t+=s.body.trim().split(/\s+/).length;});
         console.log(k, THEORY_DRAFT[k].sections.length+' sections', t+' body words');});"
   =========================================================================== */

var THEORY_DRAFT = {
  "ps-ptsd": {
    "intro": "The second disorder DSM-5 moved out of the anxiety chapter in 2013, and the second half of one lecture. Read it against `ps-ocd`: both turn on intrusive mental content, and they are told apart by what it is about — a feared outcome there, a real event here.",
    "sections": [
      {
        "id": "pt-1",
        "w": "must",
        "h": "PTSD — what it is, who gets it, and after what",
        "body": "- **The definition:** a psychiatric disorder occurring **AFTER EXPERIENCING OR WITNESSING A TRAUMATIC EVENT** — **disaster, accident, combat, rape**, or **threat of death, sexual violence or serious injury**.\n\n### The four symptom groups, named once\n\n|**Group**|**Is**|\n|---|---|\n|**RE-EXPERIENCING**|**FLASHBACKS, NIGHTMARES, INTRUSIVE MEMORIES** — **the trauma RELIVED AS IF PRESENT**|\n|**AVOIDANCE**|avoiding trauma-related **thoughts, feelings, places, activities or people**|\n|**NEGATIVE COGNITIONS**|**DISTORTED BELIEFS**, persistent **negative emotions**, **DETACHMENT**|\n|**HYPERAROUSAL**|**HYPERVIGILANCE**, **EXAGGERATED STARTLE**, **SLEEP DISTURBANCE**, **IRRITABILITY**|\n\n- **⚠️ Where it sits:** **DSM-5 (2013) moved PTSD from the ANXIETY DISORDERS to TRAUMA- and STRESSOR-RELATED DISORDERS**; **ICD-11 also includes COMPLEX PTSD (CPTSD)**.\n\n### Epidemiology\n\n|**Population**|**Figure**|\n|---|---|\n|**General population, lifetime**|**7-8 %**|\n|**⚠️ Women against men**|**TWICE as high in women**|\n|**Combat veterans**|**~30 % affected**|\n|**⚠️ Rape survivors**|**MORE THAN 50 % develop PTSD**|\n|**12-month prevalence**|**3.5 % USA** · **0.5-1.0 % Europe**|\n|**Comorbid MDD**|**50 %**|\n|**Comorbid substance use disorder**|**35-52 %**|\n\n- **⚠️ The deck's best sentence:** **~70 % OF ADULTS EXPERIENCE TRAUMA, AND ONLY 20 % DEVELOP PTSD.** Trauma is common; PTSD is a minority outcome of it.\n- **Onset:** **MEDIAN ONSET WITHIN 3 MONTHS**.\n- **Higher rates** in **conflict zones**, **refugee populations**, and **children and adolescents — 15-43 % post-trauma**.\n\n### Criterion A, and the six trauma categories\n- **⚠️ DSM-5 CRITERION A:** exposure to **ACTUAL OR THREATENED DEATH, SERIOUS INJURY, or SEXUAL VIOLENCE**, by **DIRECT EXPERIENCE** · **WITNESSING** · **LEARNING OF TRAUMA TO A CLOSE PERSON** · or **REPEATED EXPOSURE TO AVERSIVE DETAILS**, e.g. **first responders**.\n- **The six named categories:** **COMBAT and MILITARY** (war zones, peacekeeping) · **SEXUAL VIOLENCE** (rape, assault, childhood sexual abuse) · **ACCIDENTS** (motor vehicle, workplace, aviation) · **NATURAL DISASTERS** (earthquake, flood, hurricane, wildfire) · **INTERPERSONAL VIOLENCE** (domestic abuse, assault, robbery, kidnapping) · **MEDICAL TRAUMA** (life-threatening illness, **ICU admission**, difficult childbirth).\n- **The book says the same in fewer words:** exposure to a **severe stressor** — **combat violence, sexual assault, physical assault, near-death experience, or the witnessed death of a loved one** — **directly** or **indirectly**, by **hearing of the exposure of a close relative**.\n\nSrc: L8 sl. Definition of PTSD · Epidemiology of PTSD · Causes & Traumatic Triggers of PTSD; neuropsychiatry.pdf (ASM MINDS) Psychiatry ch.3 printed p.199",
        "qs": []
      },
      {
        "id": "pt-2",
        "w": "must",
        "h": "Diagnosing PTSD — the criteria, the clusters, and ASD",
        "body": "**PTSD — DSM-5 309.81 / ICD-10 F43.10. ⚠️ The cluster counts are the examinable part:**\n\n|**Criterion**|**Requires**|**Content**|\n|---|---|---|\n|**A — TRAUMA EXPOSURE**|—|direct, witnessed, learned, or repeated exposure|\n|**B — INTRUSION**|**≥ 1**|flashbacks, nightmares, intrusive memories, **reactivity to trauma cues**|\n|**C — AVOIDANCE**|**≥ 1**|avoidance of trauma-related **thoughts/feelings** or **external reminders**|\n|**D — NEGATIVE COGNITIONS**|**≥ 2**|negative beliefs, **blame**, persistent negative emotions, detachment, **anhedonia**|\n|**E — AROUSAL**|**≥ 2**|hypervigilance, startle, sleep disturbance, irritability, **concentration difficulties**|\n|**F and G**|—|**DURATION MORE THAN ONE MONTH**; **clinically significant distress or functional impairment**|\n\n- **⚠️ Two specifiers:** **WITH DISSOCIATIVE SYMPTOMS** — depersonalisation or derealisation — and **WITH DELAYED EXPRESSION**, meaning **onset 6 MONTHS OR MORE AFTER the trauma**.\n- **⚠️ B1-C1-D2-E2 is the pattern to memorise**, and the book's version of it is **four symptom domains for more than one month** with no counts, so **the counts come from the deck**.\n\n### The clusters at the bedside\n\n|**Cluster**|**What the patient reports or shows**|\n|---|---|\n|**RE-EXPERIENCING (B)**|**intrusive memories and nightmares** · **FLASHBACKS — dissociative re-experiencing** · **PHYSIOLOGICAL REACTIVITY** (tachycardia, sweating)|\n|**AVOIDANCE (C)**|avoidance of thoughts, feelings, reminders · **SOCIAL WITHDRAWAL and ISOLATION** · **EMOTIONAL NUMBING** (alcohol, work)|\n|**NEGATIVE COGNITIONS (D)**|**TRAUMA AMNESIA — dissociative** · beliefs such as **\"I am bad\"**, **\"the world is dangerous\"** · **GUILT, SHAME, ANHEDONIA, DETACHMENT**|\n|**HYPERAROUSAL (E)**|**hypervigilance**, **exaggerated startle** · **insomnia, irritability, AGGRESSION** · **poor concentration**, **RECKLESS BEHAVIOUR**|\n\n### ⚠️ Acute stress disorder against PTSD — the whole comparison\n\n|**Feature**|**ACUTE STRESS DISORDER**|**PTSD**|\n|---|---|---|\n|**Duration**|**3 DAYS to 1 MONTH** post-trauma|**MORE THAN 1 MONTH** post-trauma|\n|**Code**|**308.3 / F43.0**|**309.81 / F43.10**|\n|**⚠️ Dissociation**|**a REQUIRED criterion — ≥ 9 of 14 symptoms**|**an OPTIONAL SPECIFIER only**|\n|**Clusters**|**ANY 9 or more from the five clusters**|**B ≥1, C ≥1, D ≥2, E ≥2**|\n|**⚠️ Predictive value**|**~50 % CONVERT TO PTSD**|an established diagnosis|\n|**Treatment**|**PSYCHOLOGICAL FIRST AID**, **TF-CBT**|**TF-CBT**, **EMDR**, **SSRIs**|\n\n- **The book's boundary, in its own words:** starting **immediately after trauma and persisting at least 3 days up to a month** = **ASD**; starting or persisting **after one month** = **PTSD**.\n- **⚠️ The book's mnemonic, TRAUMA:** **T**raumatic event · **R**e-experiencing · **A**voidance · **U**nable to function · **M**onth, duration over one month · **A**rousal. **Six letters, and they map onto criteria A to G.**\n\nSrc: L8 sl. DSM-5 Diagnostic Criteria for PTSD (309.81 / F43.10) · Symptom Clusters — Clinical Features · Acute Stress Disorder vs PTSD; neuropsychiatry.pdf (ASM MINDS) Psychiatry ch.3 printed p.199 — the D section and both note boxes",
        "qs": []
      },
      {
        "id": "pt-3",
        "w": "must",
        "h": "Treating PTSD — first aid, therapy, drugs, and the case",
        "body": "### Neurobiology, in four transmitters and three regions\n\n|**Transmitter**|**Change**|**Effect**|\n|---|---|---|\n|**NORADRENALINE**|**↑**|**drives HYPERAROUSAL**|\n|**SEROTONIN**|**↓**|**impairs MOOD and FEAR REGULATION**|\n|**GABA**|**ALTERED**|**inhibition deficit**|\n|**CRH**|**↑**|**stress-axis activation**|\n\n- **The three regions:** **AMYGDALA ↑** · **HIPPOCAMPAL VOLUME ↓** · **PREFRONTAL CORTEX ↓**.\n- **⚠️ Contrast it with OCD** (`ps-ocd`, section `oc-4`): OCD is a **CSTC circuit** disorder with **serotonin down and dopamine and glutamate up**; PTSD is a **fear-circuit** disorder with **noradrenaline up**. **Serotonin is low in both**, which is why **SSRIs treat both** — and why the rest of the treatment differs.\n\n### Management, in four tiers\n\n|**Tier**|**Content**|\n|---|---|\n|**PSYCHOLOGICAL FIRST AID**|**SAFETY, CALMING, CONNECTEDNESS, SELF-EFFICACY**. ⚠️ **AVOID FORMAL DEBRIEFING — it is HARMFUL**|\n|**TRAUMA-FOCUSED PSYCHOTHERAPY**|**TF-CBT (12-20 sessions)** · **EMDR (8-12 sessions)** · **CPT** · **PROLONGED EXPOSURE**|\n|**PHARMACOTHERAPY**|**SSRIs — SERTRALINE and PAROXETINE are the FDA-approved pair** · **SNRI — VENLAFAXINE** · **⚠️ PRAZOSIN for NIGHTMARES**|\n|**ADJUNCTIVE**|**MINDFULNESS**, **GROUP THERAPY**, **INPATIENT care** for complex or suicidal cases|\n\n- **The guideline:** **NICE 2018** — **TF-CBT or EMDR first-line**; **SSRIs when psychological therapy is DECLINED or UNAVAILABLE**.\n- **⚠️ Two prescribing rules from the summary:** **treat for AT LEAST 12 MONTHS**, and **AVOID BENZODIAZEPINES — they IMPAIR EXTINCTION LEARNING**.\n- **⚠️ First-line differs from OCD:** in PTSD the **psychological therapy leads and the drug is the fallback**; in OCD the first-line is the **combination** — `ps-ocd`, section `oc-8`.\n\n### The two therapies compared\n\n|**TF-CBT**|**EMDR**|\n|---|---|\n|**12-20 sessions**: psychoeducation, **stabilisation**, **trauma processing**, cognitive restructuring|**8 PHASES across 8-12 sessions**; **BILATERAL STIMULATION while recalling the trauma**|\n|**Variants:** **PROLONGED EXPOSURE** (in-vivo + imaginal), **CPT** targeting **\"stuck points\"**|**Mechanism: WORKING MEMORY OVERLOAD reduces the VIVIDNESS of the trauma memory**|\n|**60-80 % response rate**|**WHO and NICE recommended**; especially effective for **SINGLE-EVENT trauma**|\n||**⚠️ NO DETAILED VERBAL NARRATIVE REQUIRED** — an advantage for some patients|\n\n### ⚠️ The lecturer's worked case — Nour, 34, female nurse\n- **The history:** **8 months** after a traumatic ICU shift in which she **witnessed multiple COVID-19 deaths**. **Nightmares, intrusive memories, hypervigilance in hospitals, avoidance of medical news, emotional distance from family, extended sick leave.**\n- **MSE:** **flat affect, hypervigilance**. **PHQ-9 = 14. PCL-5 = 48. No suicidal ideation.**\n- **The diagnosis:** **PTSD** — criteria **A (witnessed deaths), B, C, D, E, F (over one month) and G (impairment) all met**.\n- **⚠️ The scale:** **PCL-5 = 48**, against a **threshold of >31 for probable PTSD**. **Monitor at 4 and 8 weeks** of treatment. *(The **CAPS-5** is the gold standard clinician interview; **PCL-5** is the screen.)*\n- **The plan:** **TF-CBT, 12-16 sessions**. **If declined: SERTRALINE 50 → 200 mg.** **Occupational health referral.**\n- **⚠️ Complex PTSD (ICD-11) — consider it if:** **prolonged or repeated trauma**, **affect dysregulation**, **negative self-concept**, **disturbed relationships**. **Modified therapy is required.**\n\nSrc: L8 sl. Neurobiology of PTSD · Management of PTSD: Overview · Trauma-Focused CBT & EMDR · Clinical Case Study: PTSD · Summary & Key Takeaways",
        "qs": []
      },
      {
        "id": "pt-4",
        "w": "know",
        "h": "What this chapter took, what is left to `ps-anxiety`, and what is not here",
        "body": "### ⚠️ The split, recorded\n- **Printed at 14 pp:** written whole as *OCD and PTSD*, spliced and printed — **one page past the ≤13 hard shape**, with **132 words stranded on page 14**.\n- **Trimmed first, and it was not enough:** two genuine second copies came out — a consolidated *which-source-has-what* table and a restatement of PTSD prevalence — recovering **82 words of paper**. **50 words still sat on page 14**, and **nothing left was duplication.**\n- **The seam:** the deck labels its own halves **`PART ONE`** and **`PART TWO`**, so the split is contiguous and needed no reordering. **`ps-ocd` is OCD; `ps-ptsd` is PTSD and acute stress disorder.**\n- **⚠️ One lecture, two chapters:** unlike `nr-lmn`/`nr-nerve` this splits a **single deck**. It is allowed because **§4 joins one TOPIC taught over two lectures** — it says nothing about two disorders taught in one — and because **≤13 pp measured by printing is a user ruling**. **`SCHEDULE` is untouched.**\n\n### ⚠️ Two sources, and what only one of them has\n- **Only the DECK has:** the **DSM-5 CLUSTER COUNTS — B ≥1, C ≥1, D ≥2, E ≥2** (`pt-2`). The book gives only **four symptom domains**, with no counts. The deck also carries **the entire epidemiology, the neurobiology, both specifiers, the ASD comparison and all of management**.\n- **Only the BOOK has:** the **TRAUMA mnemonic** (`pt-2`).\n- **⚠️ They contradict each other nowhere.** Both give the **one-month boundary** between acute stress disorder and PTSD, and both require **exposure, direct or indirect**.\n\n### ⚠️ Register (§14.5)\n- **The book chapter is SHARED:** with **`ps-ocd`** and **`ps-anxiety`**.\n- **Taken here:** **printed 199 ONLY** — the **D. Posttraumatic stress disorder** section and **both note boxes**, carrying the ASD/PTSD boundary and the TRAUMA mnemonic.\n- **⚠️ Left alone:** printed **197-198** are **`ps-ocd`'s**, and printed **193-196 and 200-201** are the **SHARED SPINE belonging to `ps-anxiety`** — **this chapter lifts nothing from them**.\n\n- **⚠️ One block on p.199 is NOT taken here:** the **differential diagnosis**, printed on this PTSD page but written to cover **all** anxiety and related disorders. It is written in **`ps-ocd`'s `oc-6`** and is **not repeated**.\n- **⚠️ `ps-anxiety` HAS A DECK TOO** — as well as the book: the back half of `L4,5`, recorded in `ps-symptom`'s `sy-10`. **The plan does not know that.**\n- **No row is filed IN** to this chapter, and none was owed to it.\n\n### Deck quality\n- **The page audit:** **33 pages, only THREE under 20 extractable words**, all three with fonts, and **no zero-text page anywhere**. **Nothing was rendered and nothing is hidden.** The full record is in **`ps-ocd`'s `oc-10`**.\n\n### What these sources do not contain, on the PTSD side\n- **⚠️ CAPS-5:** **named THREE TIMES and never described** — in the learning objectives, which promise *apply Y-BOCS, PCL-5, CAPS-5*, and in the summary, which calls it the **gold standard**. **No item count, no threshold, no administration.** Only the **PCL-5 threshold, >31**, is printed, and only inside the case.\n- **⚠️ No PTSD prognosis section at all**, where OCD has a full one — no remission rates, and no good or poor prognostic factors.\n- **No epidemiology for acute stress disorder** beyond the **50 % conversion** figure.\n- **⚠️ ICD-11:** the deck is **titled DSM-5 AND ICD-11 ALIGNED and gives NO ICD-11 criteria** — even **complex PTSD** is four features and a *modified therapy is required*, with no diagnostic criteria.\n- **No dose for any PTSD drug** except the case's **sertraline 50 → 200 mg**. **Prazosin, venlafaxine and paroxetine are named without one.**\n\nSrc: L8 and printed p.199 of neuropsychiatry.pdf (ASM MINDS) Psychiatry ch.3, both read end to end; the page audit is a `pdftotext` / `pdffonts` / `pdfimages` sweep of all 33 deck pages, 2026-08-22. The shared-spine split follows the page table at the foot of `content\\neuro\\book\\psych-ch03-anxiety.txt`",
        "qs": []
      }
    ]
  }
};
