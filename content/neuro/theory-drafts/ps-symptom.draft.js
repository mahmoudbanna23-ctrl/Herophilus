/* ps-symptom — "Psychiatric symptomatology", Neuropsychiatry (Psychiatry half).
   Written 2026-08-19 under START-HERE.md §14, §14.1, §14.2, §14.3, §14.3a,
   §14.5, plus content\neuro\theory-plan.md.

   Existing key in app\data\modules.js, module `neuropsych`, group "Psychiatry".
   11 questions. This header states no totals; the hub measures and prints.

   ===========================================================================
   SOURCE
     content\neuro\lectures\L4,5) Psychiatric symptomatology.txt   63 pp, 2,441 w

   ⚠️⚠️ THE DECK IS TWO LECTURES, AND THE SECOND ONE IS NOT THIS CHAPTER'S.
   From the slide headed "Anxiety and related disorders" to the end, the deck
   teaches ANXIETY — prevalence, the clinical features with the three measures
   of "excessive", the DSM list (GAD, panic, social anxiety, specific phobia,
   agoraphobia, OCD, PTSD/ASD), the differential, the assessment with
   "NO DIAGNOSTIC TEST", and a full treatment block (hospitalisation usually
   unnecessary, ECT not effective, CBT, SSRIs first with SNRIs/TCAs and
   benzodiazepines "short duration, not preferred", 2-6 weeks to effect, one
   year then gradual withdrawal, not addictive). NONE of that is symptomatology
   and NO question filed here touches it. It is DEFERRED TO `ps-anxiety` and
   filed as a register row in `sy-10`.
   ⚠️ This matters beyond one chapter: theory-plan.md assigns L4,5 to
   `ps-symptom` alone and records `ps-anxiety`'s source as book Psych ch.3.
   `ps-anxiety` HAS A DECK TOO, and nobody knew.

   ⚠️ THE DECK IS THE MOST BULLETED IN THE MODULE — 2,441 words by the JS split
   against 1,707 tokens containing a letter or digit, a 30 % markup. The
   structural slide "Psychiatric symptomatology / • Mood & Affect ... • Suicidal
   & homicidal trials" is printed SEVEN times as a section divider, and the
   TOP-MAGII grid SIX times. Those repeats are written once here.

   ⚠️ THE DECK CARRIES FIVE MATCHING EXERCISES (I-V) and two Arabic case
   vignettes with English translations. The exercises are the lecturer's own
   emphasis and every term they use is defined in the body; they are not
   transcribed as questions. The vignettes are recorded in `sy-9`, because the
   second one IS the organicity teaching.

   ⚠️ CITATION FORM: the cache preserves slide TITLES, not numbers.
   Src: lines cite `L4,5 sl. <title>`.

   ===========================================================================
   BUDGET (§14.1)
     TERM 1: 2,441 w (of which the anxiety half is deferred and ~400 w are the
             repeated divider and grid slides)
     TERM 2: 25 x 11 = 275 w
     max = 2,441. Operative ceiling ~2,400 w / ~10 pp governs anyway.
     FORECAST at ÷280 (theory-plan.md §4, the conservative divisor). PRINT IT.

   ===========================================================================
   COVERAGE FLOOR (§14.2) — all 11 linked.
     sy-3   ps-1 · ps-15
     sy-4   ps-2 · ps-3
     sy-6   ps-4 · ps-6 · ps-8
     sy-7   ps-5 · ps-10
     sy-9   ps-9 · ps-11
   (ids carry the `npqb-` prefix in the arrays below)

   ===========================================================================
   WHERE THE MISSING TERMS WERE FOUND — the module first, outside knowledge
   last (CLAUDE.md §4: prefer the other source to outside knowledge). Each was
   grepped across all 25 caches before anything was supplied:
     mood-congruent / mood congruity  -> L9,10) Mood disorders          CITED
     thought broadcasting / insertion -> L11,12) Schizophrenia          CITED
     flight of ideas                  -> L9,10) Mood disorders          CITED
     pseudobulbar syndrome            -> L8) Cranial nerves             CITED, `cn-6`
     grief / bereavement              -> L9,10) Mood disorders, L19     CITED
   ⚠️ ONLY THREE TERMS RETURN ZERO ACROSS THE WHOLE MODULE and are therefore
   supplied and tagged: POVERTY OF SPEECH (`sy-6`), HYPNAGOGIC and HYPNOPOMPIC
   hallucinations (`sy-7`). All three are distractors or half-options in
   `npqb-ps-8` and `npqb-ps-10`, so the reader needs them named to reject them.

   ===========================================================================
   REGISTER (§14.5) — written into `sy-10`:
     - THE ENTIRE ANXIETY HALF OF L4,5 -> `ps-anxiety`.
     - The mood-congruent delusion in full, and flight of ideas -> `ps-mood`.
     - Thought insertion, withdrawal, broadcasting and delusions of reference in
       full -> `ps-psychosis`.
   All three chapter ids verified present in app\data\modules.js today. Checked
   first that the questions filed HERE are satisfied by what is written here —
   they are: `npqb-ps-4` and `npqb-ps-6` are answered by the definitions in
   `sy-6`, and only the diseases' fuller treatment is deferred.

   RE-MEASURE COMMAND FOR THE HUB:
     node -e "global.window={};var fs=require('fs');
       eval(fs.readFileSync('content/neuro/theory-drafts/ps-symptom.draft.js','utf8'));
       Object.keys(THEORY_DRAFT).forEach(function(k){var t=0;
         THEORY_DRAFT[k].sections.forEach(function(s){t+=s.body.trim().split(/\s+/).length;});
         console.log(k, THEORY_DRAFT[k].sections.length+' sections', t+' body words');});"
   =========================================================================== */

var THEORY_DRAFT = {
  "ps-symptom": {
    "intro": "The vocabulary chapter, and the lecturer's reason for it is on a slide: things without a name are not present in your mind. Eleven questions, and three of them are the deck's real spine — ORGANICITY, the list of findings that say the problem is neurological.",
    "sections": [
      {
        "id": "sy-1",
        "w": "know",
        "h": "The two questions asked before any diagnosis",
        "body": "**On hearing a complaint:** two questions come first.\n1. **Is it a SYMPTOM or not?**\n2. **Which SYSTEM does it belong to?**\n\n### Deciding whether it is a symptom — quality against quantity\n- **Qualitative:** the phenomenon is **abnormal in kind**. It is a symptom on its face.\n- **Quantitative:** the phenomenon is normal in kind and **abnormal in AMOUNT**, so three tests decide it:\n  - **the person's USUAL TRAIT** — is this a change from their baseline?\n  - **DURATION**\n  - **QUALITY OF LIFE (QOL)**\n\n- **Why psychiatry at all:** the deck's four reasons — **prevalent** · **bad impact, physical and economic** · **can be TREATED** · **UNDERDETECTED**.\n\nSrc: L4,5 sl. Why Psychiatry? · Why symptomatology? · What comes first on our minds",
        "qs": []
      },
      {
        "id": "sy-2",
        "w": "know",
        "h": "The eight domains, and the three that follow one pattern",
        "body": "**Eight domains:** the complaint is placed in one of them.\n- **Mood and affect** · **Intellectual functions (I.F.)** · **Behaviour** · **Activity change** · **Relational change**\n- **Sleep** · **Appetite** · **Sexual** · **Somatic** · **Suicidal and homicidal trials**\n\n### Sleep, appetite and sex — every one splits the same way\n\n|**Domain**|**Quantitative INCREASE**|**Quantitative DECREASE**|**Qualitative**|\n|---|---|---|---|\n|**Sleep**|**hypersomnia**|**INSOMNIA — early or late** · **decreased NEED for sleep**|—|\n|**Appetite**|**hyperphagia**|**ANOREXIA** — loss of appetite|**PICA**|\n|**Sexual**|**hypersexuality**|**loss of libido** · **impotence** · **anorgasmia**|**dyspareunia**|\n\n- **⚠️ Insomnia is not one symptom:** **EARLY insomnia** is trouble falling asleep; **LATE insomnia** is waking hours earlier than usual and being unable to return — the deck's own example, and it is the depressive pattern.\n- **⚠️ Decreased NEED for sleep is not insomnia.** The insomniac is distressed by the loss; the patient sleeping two hours and **full of energy** is not — that is mania.\n\nSrc: L4,5 sl. Psychiatric symptomatology (the domain divider, printed seven times) · Sleep c/o · Appetite c/o · Sexual c/o · Match I",
        "qs": []
      },
      {
        "id": "sy-3",
        "w": "must",
        "h": "Mood and affect — long against short, and the four qualitative faults",
        "body": "|**Term**|**Is**|**Timescale**|\n|---|---|---|\n|**MOOD**|the emotional **EXPERIENCE**|**LONG term**|\n|**AFFECT**|the emotional **EXPRESSION**|**SHORT term**|\n\n### Quantitative\n\n|**Direction**|**Terms**|\n|---|---|\n|**INCREASE**|**sadness → DEPRESSED MOOD** · **fear → ANXIETY, PANIC, PHOBIA** · **happiness → ELATION** · **easily provoked → IRRITABILITY**|\n|**DECREASE**|**ANHEDONIA** — loss of pleasure sensations · **BLUNTED AFFECT or APATHY** — loss of all emotional experience and expression · **indifference** · **restricted affect**|\n\n### Qualitative — four, and one of them flags organicity\n\n|**Term**|**Means**|\n|---|---|\n|**AMBIVALENCE**|**TWO CONTRADICTORY emotions toward the same thing AT THE SAME TIME**|\n|**INAPPROPRIATE AFFECT (mood incongruity)**|**the mood is NOT COMPATIBLE with the situation**|\n|**⚠️ EMOTIONAL INCONTINENCE**|a **sudden expression of crying or laughing EXCEEDING the actual emotional experience** — **the deck marks it ORGANICITY**|\n|**LA BELLE INDIFFERENCE**|bland unconcern in the face of a serious deficit|\n\n- **⚠️ Emotional incontinence:** the answer to two different questions — the one that describes the expression outrunning the experience, and the one that asks what characterises **PSEUDOBULBAR SYNDROME**. Pseudobulbar palsy is a bilateral upper motor neurone lesion of the lower cranial nerves; the deck names it in the **jaw jerk** slide of the cranial nerve lecture, not here *(see `cn-6`)*. **Perseveration, disorientation and visual hallucinations are also organicity flags — but they are not the emotional one.**\n\nSrc: L4,5 sl. Mood & affect (definition) · Mood & affect quantitative/qualitative · Match II; pseudobulbar from L8 sl. Test jaw jerk",
        "qs": [
          "npqb-ps-1",
          "npqb-ps-15"
        ]
      },
      {
        "id": "sy-4",
        "w": "must",
        "h": "Behaviour and activity — and catatonia in full",
        "body": "### Quantitative — activity and relational change\n\n|**INCREASE**|**DECREASE**|\n|---|---|\n|**restlessness** — cannot stand still · **hyperactivity** · **aggression** · **excitement** · **AGITATION** — non-goal-directed violent behaviour · **overfamiliarity**|**hypoactivity** · **retarded behaviour** · **AVOLITION** · **social isolation / withdrawal**|\n\n### Qualitative — abnormal behaviour\n- **⚠️ Who reports it:** usually an INFORMANT, observed by the examiner, not the patient — e.g. **bizarreness or oddness**, and **catatonia**.\n- **⚠️ Two exceptions:** the patient DOES complain of these.\n  - **COMPULSIVITY** — **inability to STOP CONTINUING** a behaviour.\n  - **IMPULSIVITY** — **inability to PREVENT STARTING** a behaviour.\n\n### Catatonia — the deck's own list\n\n|**Sign**|**Means**|\n|---|---|\n|**CATATONIC RIGIDITY**|including **CATALEPSY** and **POSTURING**|\n|**CATATONIC STUPOR**|**appears conscious with NO adequate response** to external or internal stimuli|\n|**MUTISM**|—|\n|**⚠️ WAXY FLEXIBILITY**|the limb holds whatever position it is placed in|\n|**NEGATIVISM**|—|\n|**STEREOTYPY**|a repeated purposeless movement|\n|**MANNERISM** · **GRIMACING**|—|\n|**⚠️ ECHOLALIA**|**repeating the EXAMINER'S WORDS**|\n|**ECHOPRAXIA**|**copying the examiner's ACTIONS**|\n|**CATATONIC EXCITEMENT**|—|\n\n- **⚠️ THE DECK'S OWN DIFFERENTIAL: PERSEVERATION**, and it marks it **ORGANICITY** — **repetition of the SAME RESPONSE despite a CHANGE of stimulus**. It is printed against the catatonia list precisely because it looks like a catatonic repetition and is not one.\n- **Waxy flexibility is catatonia's**; perseveration is organic, **emotional lability** is a mood sign and **circumstantiality** is a thought-form sign.\n- **Echolalia:** words. **Echopraxia:** acts. **Stereotypy:** a movement with no model to copy.\n\nSrc: L4,5 sl. Behaviour, activity & relational changes (quantitative and qualitative) · Catatonia · Match III",
        "qs": [
          "npqb-ps-2",
          "npqb-ps-3"
        ]
      },
      {
        "id": "sy-5",
        "w": "know",
        "h": "Intellectual functions — the TOP-MAGII grid",
        "body": "**The deck's mnemonic:** printed six times as its spine. The examination walks it in order.\n\n|**T O P**|**M A G I I**|\n|---|---|\n|**T — THOUGHT (talk)**|**M — MEMORY**|\n|**O — ORIENTATION**|**A — ATTENTION and concentration**|\n|**P — PERCEPTION**|**G — GENERAL KNOWLEDGE**|\n|—|**I — INTELLIGENCE**|\n|—|**I — INSIGHT and JUDGMENT**|\n\nSrc: L4,5 sl. Intellectual functions (the TOP-MAGII grid, printed six times)",
        "qs": []
      },
      {
        "id": "sy-6",
        "w": "must",
        "h": "T — thought: type, content and form",
        "body": "|**Axis**|**What is tested**|\n|---|---|\n|**TYPE**|**PROVERB interpretation** — **ABSTRACT** against **CONCRETE** thinking|\n|**CONTENT**|**DELUSIONS** · **OBSESSIONS**|\n|**FORM (talk)**|**STREAM** — rate, volume, tone · **APPROPRIATENESS**|\n\n- **CONCRETE THINKING:** **inability to know the meaning of a PROVERB**.\n- **⚠️ DELUSION:** a **FALSE FIXED BELIEF**, **cannot be reasoned away**, and **NOT explained by the patient's cultural or religious background**. All three clauses are the deck's, and the third is what separates a delusion from a belief.\n- **CIRCUMSTANTIALITY:** **mentioning a great many unnecessary details** — the point is reached eventually.\n- **NEOLOGISM:** an invented word.\n\n### Qualitative changes in thought PROCESS\n- **CIRCUMSTANTIALITY** — above; **the process is derailed, not the content**.\n- **FLIGHT OF IDEAS** — rapid jumping between ideas with loose connections; **the mood-disorder lecture is where it is taught** *(`L9,10`)*.\n- **POVERTY OF SPEECH** — markedly reduced amount of spontaneous speech *(the term returns zero across all 25 decks in this module; supplied and tagged)*.\n- **⚠️ All three are process, not content** — which is why a question offering the three of them together takes **all of the above**. **Delusions and obsessions are CONTENT.**\n\n### Delusions the bank names\n\n|**Delusion**|**The patient believes**|\n|---|---|\n|**THOUGHT BROADCASTING**|**their thoughts are being BROADCAST to others**|\n|**THOUGHT INSERTION**|thoughts are being **PUT INTO** their mind|\n|**THOUGHT WITHDRAWAL**|thoughts are being **TAKEN OUT**|\n|**Delusions of REFERENCE**|ordinary events carry a **personal message** for them|\n\n*The four are taught in the schizophrenia lecture (`L11,12`) and belong in full to `ps-psychosis`; they are defined here because the bank asks them under symptomatology.*\n\n### Mood-congruent against mood-incongruent\n- **⚠️ MOOD-CONGRUENT:** the delusion's **theme MATCHES the mood** — **delusions of GUILT in a DEPRESSED patient**, **delusions of GRANDIOSITY in a MANIC patient**. **BOTH are congruent**, which is why a question offering both takes both.\n- **Mood-INcongruent:** **persecution in a depressed patient** — the theme does not follow the mood.\n- *Mood congruity is taught in `L9,10) Mood disorders`; it is defined here for the same reason.*\n\nSrc: L4,5 sl. Thought (Type, Content, Form) · Match IV; congruity from L9,10) Mood disorders; the thought-control delusions from L11,12) Schizophrenia. Poverty of speech is supplied and tagged",
        "qs": [
          "npqb-ps-4",
          "npqb-ps-6",
          "npqb-ps-8"
        ]
      },
      {
        "id": "sy-7",
        "w": "must",
        "h": "P — perception: illusion against hallucination",
        "body": "**Perception:** giving a MEANING to received stimuli. The whole discrimination is whether there was a stimulus.\n\n|**Feature**|**ILLUSION**|**HALLUCINATION**|\n|---|---|---|\n|**Stimulus**|**an EXISTING stimulus, falsely perceived**|**NO stimulus at all**|\n|**Normal?**|**⚠️ a NORMAL phenomenon**|abnormal, **except** the normal ones below|\n|**Modality**|—|**AUDITORY · VISUAL · OLFACTORY · TACTILE · GUSTATORY** — five|\n|**⚠️ Organicity flag**|**VISUAL and VIVID** illusions|**VISUAL** hallucinations|\n\n- **⚠️ FIVE MODALITIES:** and PERSEVERATION IS NOT ONE. Perseveration is a behavioural sign — see `sy-4`.\n- **Auditory hallucinations have subtypes:** **COMMENTING** and **COMMANDING** among them.\n- **⚠️ Visual hallucination:** points AWAY from a primary psychiatric disorder and toward an organic cause — the deck marks it **Organicity** explicitly. The same is true of a vivid visual **illusion**.\n\n### Normal hallucinations — the deck names the category and the bank tests it\n- **⚠️ In GRIEF:** seeing a recently deceased loved one is NORMAL — the best-recognised normal hallucination, and grief is taught in `L9,10` and `L19`.\n- **HYPNAGOGIC** — on **falling asleep**; **HYPNOPOMPIC** — on **waking**. Both are normal, but **neither is specific to grief** *(both terms return zero across all 25 decks in this module; supplied and tagged so they can be told apart from the grief phenomenon)*.\n\nSrc: L4,5 sl. Perception · Illusions and Hallucinations. Hypnagogic and hypnopompic are supplied and tagged",
        "qs": [
          "npqb-ps-5",
          "npqb-ps-10"
        ]
      },
      {
        "id": "sy-8",
        "w": "high",
        "h": "O, M, A, G, I, I — the rest of the examination",
        "body": "### O — Orientation\n- **Knowing TIME, PLACE and PERSON.**\n- **⚠️ DISORIENTATION → ORGANICITY**, and the deck says so on the slide.\n\n### M — Memory\n\n|**Type**|**Span**|**Fails in**|\n|---|---|---|\n|**IMMEDIATE RECALL**|**5-9 items** — digits, words or sentences|**delirium** · **severe depression** · **severe anxiety** · **psychosis**|\n|**RECENT**|**a few minutes to a few days**|**recent amnesia — THE MAIN MANIFESTATION IN DEMENTIA** → **⚠️ organicity**|\n|**REMOTE**|old events|—|\n\n### A — Attention and concentration\n- **Is:** **selective perception of certain stimuli**.\n- **Tests:** **name the days of the week BACKWARDS** · **name 5 objects starting with a given letter** · **SERIAL SUBTRACTION OF 7** · **spell a word forward and backward**.\n- **DISTRACTIBILITY** — inability to sustain: **mania**, **depression**, **ADHD**.\n- **⚠️ Disturbed conscious level:** inattention with it is DELIRIUM → **ORGANICITY**. The conscious level is what separates it from distractibility.\n\n### G — General knowledge\n- **What is supposed to be known** — e.g. **name 3 fruits that appear in summer**.\n- **⚠️ Lost in LATE-STAGE DEMENTIA → organicity.**\n\n### I — Intelligence\n- **Think, analyse and solve problems** — tested with an **arithmetic problem**.\n- **⚠️ Organicity:** INTELLECTUAL DISABILITY (mental subnormality).\n\n### I — Insight and judgment\n\n|**Function**|**Question asked**|**Intact / Good**|**Absent / Poor**|\n|---|---|---|---|\n|**INSIGHT**|**\"are you ill or not?\"** — can they identify that they have a psychiatric disorder|**ANXIETY**|**PSYCHOSIS** *(PARTIAL in somatic symptom disorder)*|\n|**JUDGMENT**|**\"what would you do in this situation?\"** — behaving wisely|**ANXIETY**|**PSYCHOSIS**|\n\nSrc: L4,5 sl. Orientation · Memory · Attention & concentration · General knowledge · Intelligence · Insight & Judgment · Match V",
        "qs": []
      },
      {
        "id": "sy-9",
        "w": "must",
        "h": "⚠️ ORGANICITY — the thread the whole deck is strung on",
        "body": "**What it means:** findings that raise suspicion the presentation is **NEUROLOGICAL or otherwise medical**, not a primary psychiatric disorder. The word appears on nine separate slides, always as a warning attached to a sign.\n\n### The signs, gathered from where the deck scatters them\n\n|**Domain**|**Organicity flag**|\n|---|---|\n|**Mood/affect**|**EMOTIONAL INCONTINENCE** · **emotional lability**|\n|**Behaviour**|**PERSEVERATION**|\n|**Orientation**|**⚠️ DISORIENTATION to time, place and person**|\n|**Memory**|**RECENT AMNESIA**|\n|**Attention**|**INATTENTION WITH A DISTURBED CONSCIOUS LEVEL** (delirium)|\n|**Perception**|**VISUAL hallucinations** · **vivid VISUAL illusions**|\n|**General knowledge / intelligence**|**loss in late dementia** · **intellectual disability**|\n\n- **⚠️ Disoriented to time, place AND person:** a NEUROLOGICAL condition until proved otherwise — not a mood disorder, not a personality disorder, and not a primary psychiatric disorder. Disorientation is the single most quoted flag in the deck.\n- **⚠️ All three are organicity signs:** emotional lability, perseveration and disorientation — so a question offering the three together takes **all of the above**.\n\n### The organicity HISTORY\n- **Demographic:** **age**, **job**.\n- **Complaint:** **somatic** · **disturbed concentration** · **inattention** · **recent amnesia** · **disorientation** · **NON-AUDITORY hallucinations** · **illusions**.\n- **History of present complaint:** **FIRST attack** · **precipitating factor** · **SUNDOWNING**.\n- **Past history and habits:** medical or surgical · **smoking** · **drug abuse** · eating.\n- **Family history.**\n\n### The organicity EXAMINATION\n- **General appearance** · **emotional incontinence** · **perseveration** · **disorientation** · **recent amnesia** · **inattention with disturbed conscious level** · **physical, neurological and VITAL SIGNS**.\n\n### The three-plus-one the lecturer keeps returning to\n**The 3+1:** the most important pieces of information.\n1. **PSYCHIATRIC EMERGENCY**\n2. **RESPECT THE SOMATIC COMPLAINT**\n3. **Manifestations raising suspicion of ORGANICITY**\n4. **+ P = P** — *Pain = Power*: **\"I am competent enough to deal with painful situations\"**; **training and correction of the pathway**.\n\n- **The deck's second vignette is the teaching:** a man with a persecutory delusion about an implanted device improves on treatment, then returns a year later, still compliant, **screaming and pushing unseen things in front of him** — **visual** hallucinations, in a treated psychotic patient. That is the organicity question being asked at the bedside.\n- **The 4 Ps behind any presentation:** **physiological · pathological · pharmacological · psychological.**\n\nSrc: L4,5 sl. The most important pieces of information (3+1) · Organicity (history) · Organicity (examination) · P=P · the two Arabic case vignettes with their printed English translations",
        "qs": [
          "npqb-ps-9",
          "npqb-ps-11"
        ]
      },
      {
        "id": "sy-10",
        "w": "know",
        "h": "Deferred, and what this deck does not define",
        "body": "### ⚠️⚠️ Register (§14.5) — and the first row is a whole lecture\n\n|**Deferred**|**Owed to**|**Note**|\n|---|---|---|\n|**THE ENTIRE ANXIETY HALF OF THIS DECK** — prevalence and impact, the clinical features with the three measures of \"excessive\" (change, prolonged duration, QOL), intact insight and no psychotic features, the DSM list (**GAD, panic, social anxiety, specific phobia, agoraphobia, OCD, PTSD/ASD**), the differential, the assessment with **\"NO DIAGNOSTIC TEST\"**, and the treatment block — **hospitalisation usually unnecessary**, **ECT not effective**, **CBT**, **SSRIs**, SNRIs/TCAs, **benzodiazepines \"short duration, not preferred\"**, **2-6 weeks to effect**, **one year then gradual withdrawal**, **not addictive**|**`ps-anxiety`**|⚠️ **theory-plan.md records `ps-anxiety`'s source as book Psych ch.3 and assigns this deck to `ps-symptom` alone. IT HAS A DECK TOO.** No question filed here touches any of it|\n|**Mood congruity in full**, and **flight of ideas**|**`ps-mood`**|both defined here because the bank asks them under symptomatology; `L9,10` is where they are taught|\n|**Thought insertion, withdrawal, broadcasting and delusions of reference in full**|**`ps-psychosis`**|same reason; `L11,12` teaches them|\n\n### What returns ZERO across all 25 caches, and was therefore supplied\n- **POVERTY OF SPEECH** (`sy-6`) · **HYPNAGOGIC** and **HYPNOPOMPIC** hallucinations (`sy-7`). Three terms, all of them options the reader has to be able to reject.\n\n### What the deck does not do\n- **It defines and does not diagnose.** No disorder is described here except through its symptoms; the deck's own structure is domain → quantitative/qualitative → term.\n- **No DSM criteria** for anything in the symptomatology half.\n- **The five matching exercises (I-V)** are the lecturer's emphasis. Every term they use is defined above.\n\nSrc: L4,5, read end to end; the cross-module greps were run over all 25 caches in content\\neuro\\lectures\\",
        "qs": []
      }
    ]
  }
};
