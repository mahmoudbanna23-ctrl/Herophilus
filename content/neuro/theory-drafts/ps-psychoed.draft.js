/* ps-psychoed — "Myths about psychiatry / psychoeducation", Neuropsychiatry
   (Psychiatry half). Written 2026-08-19 under START-HERE.md §14, §14.1, §14.2,
   §14.3, §14.3a, §14.5, plus content\neuro\theory-plan.md.

   Existing key in app\data\modules.js, module `neuropsych`, group "Psychiatry".
   5 questions. This header states no totals; the hub measures and prints.

   ===========================================================================
   SOURCE — ONE CACHED DECK, AND IT IS THE CLEANEST IN THE MODULE.
     content\neuro\lectures\L6) Myths about psychiatry.txt      14 pp, 1,522 w

   ⚠️ NO GAP TO FILL, AND THAT IS ITSELF WORTH RECORDING. Every fact all five
   questions turn on is printed on a slide, with a named source for most of them
   (WHO 2001, Mental Health America, Addictive Behaviors Reports, Prof. Sir
   Graham Thornicroft of King's College London, a U.S. 2014 employment study).
   Nothing in this chapter is supplied and nothing carries an outside-knowledge
   tag. Four chapters in a row have needed fills; this one does not.

   ⚠️ IT IS A 14-PAGE DECK AT 109 WORDS PER PAGE — the second densest in the
   module after L17 — because it is built as myth/fact pairs with no repeated
   divider slides. Compare L4,5, which prints its divider seven times.

   ⚠️ CITATION FORM: the deck numbers its own myths (#1-#11) and titles its
   slides, so Src: lines cite `L6 sl. MYTH #n` — a finer grain than any other
   deck in this module supports.

   ===========================================================================
   BUDGET (§14.1)
     TERM 1: 1,522 w · TERM 2: 25 x 5 = 125 w · max = 1,522, floor 600 cleared.
     Well inside the ~2,400 w operative ceiling. Forecast at ÷280. PRINT IT.

   COVERAGE FLOOR (§14.2) — all 5 linked.
     pe-2  npqb-ps-12      pe-3  npqb-ps-16
     pe-4  npqb-ps-17 · npqb-ps-18       pe-5  npqb-ps-13

   ⚠️ THE ANSWER SHAPE IS UNUSUAL AND THE NOTES HAVE TO CARRY IT. Four of the
   five questions ask which statement is TRUE, against three distractors that
   are the myths themselves. So the chapter must state each myth AND its
   correction in the same place — the myth is not commentary here, it is the
   distractor, and a reader who only has the facts cannot see what is being
   rejected. That is why the myth/fact pairing is preserved rather than
   flattened into a list of facts.

   ===========================================================================
   REGISTER (§14.5) — ONE ROW, and it is small on purpose:
     - the eating disorders themselves (anorexia, bulimia, binge eating —
       criteria, clinical picture, treatment) -> NOT owed to any chapter in this
       module, because none of the 28 covers them. Recorded in `pe-7` as a gap
       in the MODULE, not as a deferral. `npqb-ps-13` is fully answered by what
       is written here; nothing is promised that is not delivered.
   Cross-references OUT of this chapter name `ps-psychosis` (schizophrenia in
   full), `ps-sud` (substance use disorder) and `ps-therapy` (psychotherapy).
   All three ids verified present in app\data\modules.js today. None is a
   deferral — this chapter owes them nothing; it points at them.

   RE-MEASURE COMMAND FOR THE HUB:
     node -e "global.window={};var fs=require('fs');
       eval(fs.readFileSync('content/neuro/theory-drafts/ps-psychoed.draft.js','utf8'));
       Object.keys(THEORY_DRAFT).forEach(function(k){var t=0;
         THEORY_DRAFT[k].sections.forEach(function(s){t+=s.body.trim().split(/\s+/).length;});
         console.log(k, THEORY_DRAFT[k].sections.length+' sections', t+' body words');});"
   =========================================================================== */

var THEORY_DRAFT = {
  "ps-psychoed": {
    "intro": "Eleven myths, numbered by the lecturer, each paired with its correction. Four of the five questions ask which statement is TRUE and use the myths as the distractors — so the myth is examinable material here, not commentary, and every pair below keeps both halves.",
    "sections": [
      {
        "id": "pe-1",
        "w": "know",
        "h": "The case the whole lecture is built on",
        "body": "**The presentation:** a **23-year-old woman** attends the day after a **near-miss road accident**, with **neck stiffness and wrist pain**. Whiplash is diagnosed and physiotherapy arranged.\n\n**What examination finds:** **multiple new and old TRANSVERSE SCARS on the forearms**, hidden under a long-sleeved jumper. She has been **self-harming regularly for EIGHT YEARS to relieve stress**.\n\n### The two sentences the lecture then takes apart\n- **The patient:** *\"I don't want to become an addict or disturb my brain chemicals if prescribed medication.\"*\n- **Her mother:** *\"You are a weak person — you'll be fine if you just forget about those symptoms.\"*\n\n- **⚠️ The point of the case:** she avoided the doctor **for eight years**, and the reason was **stigma and fear of medication**, not access. The myths are the barrier, and the barrier is what the lecture treats.\n\nSrc: L6 sl. Clinical Case Scenario · Setting the Stage",
        "qs": []
      },
      {
        "id": "pe-2",
        "w": "must",
        "h": "Myths 1-3 — how common, how dangerous, and can they work",
        "body": "### MYTH #1 — \"mental health problems are uncommon\"\n\n|**Figure**|**Value**|\n|---|---|\n|**Lifetime risk**|**1 in 4 people** (WHO, 2001)|\n|**Currently affected**|**450 million** people|\n|**Depression**|**264+ million** globally|\n|**GAD**|**~3 in every 100** U.S. adults|\n\n- **Since COVID-19:** adults experiencing depression in the United States have **TRIPLED**.\n- **WHO's position:** mental disorders are **among the leading causes of ill-health and disability worldwide**.\n\n### MYTH #2 — \"panic attacks can be fatal\"\n\n|**During an attack**|**The truth**|\n|---|---|\n|**racing heartbeat** · **shortness of breath** · **overwhelming fear** · **chest tightness / dizziness** · **feeling of impending doom**|**⚠️ panic attacks CANNOT directly cause death** · symptoms are **distressing but not dangerous** · the real risk is **ACCIDENTS during an episode** · **finding a safe space reduces that risk** · they **resolve, typically in 10-20 minutes**|\n\n- **⚠️ The clinical tip:** the deck's own — separate **panic disorder from a cardiac event** — panic **peaks quickly and resolves fully**. Then **educate the patient**, because **catastrophic misinterpretation perpetuates the cycle**.\n\n### MYTH #3 — \"people with mental illness cannot work\"\n\n|**Group**|**Employment rate** *(U.S. 2014 study)*|\n|---|---|\n|**No mental illness**|**75.9 %**|\n|**Mild condition**|**68.8 %**|\n|**Moderate condition**|**62.7 %**|\n|**⚠️ SEVERE condition**|**54.5 %** — still a **majority**|\n\n- **The fact:** the majority of people with mental illness are **as productive as those without**; **only the most severe cases may affect work**.\n- **⚠️ All three are misconceptions:** which is why a question offering \"uncommon\", \"panic attacks can be fatal\" and \"cannot work\" together takes **all of the above**.\n\nSrc: L6 sl. MYTH #1 · MYTH #2 · MYTH #3",
        "qs": [
          "npqb-ps-12"
        ]
      },
      {
        "id": "pe-3",
        "w": "must",
        "h": "Myths 4-6 — weakness, therapy, and whether it is permanent",
        "body": "### MYTH #4 — \"mental health problems are a sign of weakness\"\n- **The myth in the case:** the mother's *\"you are a weak person\"* — a misattribution that **interferes with help-seeking, increases shame, and may worsen outcomes**.\n- **The facts:** **mental illness IS illness, not poor character** · **no more weakness than a broken leg** · you can no more **\"snap out of\" depression** than out of **diabetes**.\n- **⚠️ The deck's own inversion:** if anything the opposite is true — **fighting a mental health condition takes a great deal of STRENGTH**.\n\n### MYTH #5 — \"only people without friends need therapists\"\n- **Therapists:** trained to address issues **CONSTRUCTIVELY**.\n- Therapy is **CONFIDENTIAL and OBJECTIVE**.\n- **Both therapy and friendship have value — in DIFFERENT ROLES.** *(Psychotherapy in full is `ps-therapy`'s.)*\n\n### MYTH #6 — \"mental illness is permanent\"\n- **The course:** many experience **EPISODES with periods of NORMALITY**.\n- **Medications and therapy can RESTORE BALANCE.**\n- **⚠️ What recovery means**, quoting **Mental Health America**: *\"Recovering from mental illness includes not only getting better but achieving a full and satisfying life. Many people affirm that their journey to recovery has not been a straight, steady road. Rather, there are ups and downs, new discoveries, and setbacks.\"*\n\n- **⚠️ Read that quotation:** it holds three separate answers. Recovery is **relief from symptoms AND a return to a satisfying life** — so it is **NOT** a return to exactly how the patient felt before symptoms began, it is **NOT** impossible in severe mental illness, and it is explicitly **NOT a straight, steady road**.\n\nSrc: L6 sl. MYTH #4 · MYTHS #5 & #6 (Therapy & Recovery)",
        "qs": [
          "npqb-ps-16"
        ]
      },
      {
        "id": "pe-4",
        "w": "must",
        "h": "Myths 7-8 — addiction, and what schizophrenia is not",
        "body": "### MYTH #7 — \"addiction is a lack of willpower\"\n\n|**The myth**|**The fact**|\n|---|---|\n|addiction is a **moral failure** and a **lack of self-control**|**SUBSTANCE USE DISORDER IS A CHRONIC DISEASE** · **willpower is NOT the deciding factor in recovery** · **⚠️ recovery depends on STRATEGIES TO PRESERVE WILLPOWER by CONTROLLING THE ENVIRONMENT** *(Addictive Behaviors Reports)*|\n\n- **⚠️ The distinction the question turns on:** willpower is **not absent** and **not the deciding factor** — it is a **resource to be PRESERVED**, and the strategies that preserve it are what recovery rests on. *(Substance use disorder in full is `ps-sud`'s.)*\n\n### MYTH #8 — \"schizophrenia is a split personality\"\n\n|**The myth**|**The fact**|\n|---|---|\n|two or more personalities **alternating in the same person**|**⚠️ SCHIZOPHRENIA = DISTORTIONS in THINKING, PERCEPTION, EMOTIONS, LANGUAGE and BEHAVIOUR** (WHO) · **INCLUDES HALLUCINATIONS AND DELUSIONS** · **split personality is DISSOCIATIVE IDENTITY DISORDER — a completely different condition**|\n\n- **⚠️ Etymology:** the deck prints it as the correction — **Eugen Bleuler coined \"schizophrenia\" in 1908** to capture the **FRAGMENTATION and DISINTEGRATION of mind and behaviour** — **not a split between two personalities**.\n- **Nor is it:** male-only, or a lifestyle choice. *(Schizophrenia in full is `ps-psychosis`'s.)*\n\nSrc: L6 sl. MYTHS #7 & #8 (Addiction & Schizophrenia)",
        "qs": [
          "npqb-ps-17",
          "npqb-ps-18"
        ]
      },
      {
        "id": "pe-5",
        "w": "must",
        "h": "Myths 9-10 — who gets eating disorders, and whether they chose it",
        "body": "### MYTH #9 — \"only young, white, wealthy women are affected\"\n\n|**Group**|**Share**|\n|---|---|\n|**MALES**|**10-25 % of ANOREXIA and BULIMIA cases**|\n|**MALES**|**25 % of BINGE EATING DISORDER**|\n\n- **Also rising:** in **LOWER INCOME groups** and in **those aged 45+**.\n- **A 10-year study:** the prevalence is **SHIFTING SIGNIFICANTLY**.\n- **⚠️ The examinable statement:** eating disorders **can affect ANYONE, regardless of gender or age**.\n\n### MYTH #10 — \"eating disorders are a lifestyle choice\"\n- **The myth:** a choice made by **vain individuals seeking attention**.\n- **⚠️ The fact:** they are **SERIOUS MENTAL HEALTH CONDITIONS, which CAN BE FATAL in extreme cases**.\n- **Aetiology:** **complex BIOLOGICAL, PSYCHOLOGICAL and SOCIAL factors**.\n- **Why the myth is dangerous:** it **delays help-seeking and treatment** — the deck says harmful myths about eating disorders **actively discourage patients from seeking help**.\n\nSrc: L6 sl. MYTHS #9 & #10 (Eating Disorders)",
        "qs": [
          "npqb-ps-13"
        ]
      },
      {
        "id": "pe-6",
        "w": "high",
        "h": "Myth 11 — violence, and the only group at real risk",
        "body": "- **The myth:** people with mental illness are **dangerous, unpredictable and violent**.\n- **⚠️ The fact:** they are **MORE OFTEN THE VICTIMS of violence than the perpetrators**.\n\n### The risk, stratified — and only one tier is high\n\n|**Group**|**Risk of violence**|\n|---|---|\n|**Depression / anxiety**|**NO increased risk** against the general population|\n|**Schizophrenia / bipolar**|**MODERATELY raised — but still the MINORITY**|\n|**⚠️ TRIPLE MORBIDITY** — severe mental disorder **+** substance use disorder **+** antisocial personality disorder|**SIGNIFICANTLY HIGHER**|\n\n- **The source, quoted by the deck** — **Prof. Sir Graham Thornicroft, King's College London**: *\"People with mental illness are much more often the victims of violence rather than the perpetrators. While some types of severe mental illness are linked to moderately raised rates of violence, the highest risk occurs in individuals with triple morbidity.\"*\n- **⚠️ Why it is taught:** stigma linking mental illness to violence is **harmful, inaccurate, and PREVENTS PATIENTS FROM SEEKING TREATMENT**.\n\nSrc: L6 sl. MYTH #11",
        "qs": []
      },
      {
        "id": "pe-7",
        "w": "high",
        "h": "Why the myths matter — the six harms, and the takeaways",
        "body": "**Six clinical implications of stigma,** numbered on the deck's own slide:\n\n|**#**|**Harm**|**How it works**|\n|---|---|---|\n|**01**|**DELAYS HELP-SEEKING**|the case patient avoided the doctor **for 8 years**. **Earlier intervention = better prognosis**|\n|**02**|**WORSENS OUTCOMES**|myths perpetuate **shame, self-blame and social isolation** — all of which **worsen prognosis and increase CHRONICITY**|\n|**03**|**UNDERMINES TREATMENT**|fears such as *\"I don't want to become an addict\"* or *\"medication disturbs brain chemicals\"* **reduce ADHERENCE** to evidence-based treatment|\n|**04**|**SOCIAL EXCLUSION**|myths about violence and weakness cause **discrimination in employment, housing and relationships**|\n|**05**|**FAMILY SABOTAGE**|**well-meaning family** discourage treatment using stigmatising beliefs — **as the patient's mother did**|\n|**06**|**YOUR ROLE**|a duty to **correct misconceptions, provide PSYCHOEDUCATION, and reduce stigma in EVERY consultation**|\n\n### The five key takeaways, as printed\n1. **Mental illness is COMMON, TREATABLE, and NOT a sign of weakness.**\n2. **Recovery is possible** — many people lead full, satisfying lives.\n3. **STIGMA is one of the greatest barriers to care.**\n4. **Psychiatry is EVIDENCE-BASED MEDICINE — not opinion.**\n5. **As doctors, your words and attitudes matter profoundly.**\n\n### ⚠️ A gap in the MODULE, not a deferral\n- **The eating disorders themselves** — anorexia nervosa, bulimia and binge eating disorder, their criteria, clinical picture and treatment — are **not covered by any of the module's 28 chapters**. This deck gives their epidemiology and their seriousness and nothing else, which is all `npqb-ps-13` asks. **Nothing is promised to another chapter here**, because there is no chapter to promise it to.\n- *Named and taught elsewhere in this module: schizophrenia in `ps-psychosis`, substance use disorder in `ps-sud`, psychotherapy in `ps-therapy`.*\n\nSrc: L6 sl. Clinical Implications · Key Takeaways",
        "qs": []
      }
    ]
  }
};
