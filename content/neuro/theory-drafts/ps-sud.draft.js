/* ps-sud — 'Substance use disorder', Neuropsychiatry (Psychiatry).
   Written 2026-08-23 under START-HERE.md §14, §14.1, §14.2, §14.3,
   §14.3a, §14.5, plus content\neuro\theory-plan.md.

   NO SPLIT. One deck-half, written whole.

   ==========================================================================
   SOURCES
     content\neuro\lectures\L15) substance related disorder and psychiatry
       emergency.txt — LINES 1-204 ONLY, the substance half.

   ⚠⚠ L15 IS TWO LECTURES IN ONE DECK, AND THE COUNT HAD TO BE SPLIT
   BEFORE IT COULD BE BUDGETED FROM:
       whole deck                 1,854 w
       lines 1-204  substance     1,121 w   <- this chapter
       lines 205-354 emergency      733 w   -> ps-emerg (NMS 240, catatonia
                                               108, suicide 385)
   Filed out in full in sd-8. NOT ONE WORD OF THE BACK HALF IS USED HERE.

   ⚠⚠ AND THE BACK HALF PAYS A DEBT ps-schizmgmt RECORDED AS UNREADABLE.
   sm-5/sm-10 filed neuroleptic malignant syndrome out to book Psych ch.10,
   image-only, unread. L15 TEACHES NMS IN FULL and L16 teaches it again.
   A gap was declared from the book's own pointer without probing the decks
   — the exact failure the standing rule warns about. Corrected in sm-5,
   sm-10, theory-plan.md §5 and MEMORY.md the same day.

   ⚠ BOOK PSYCHIATRY CH.9 (printed 249-255, 7 pp) IS UNREAD. Image-only;
   a render needs a subagent and none was available this session. RECORDED,
   NOT GUESSED — sd-8 row 3.

   ==========================================================================
   BUDGET (§14.1)
     TERM 1: 1,121 source words (the substance half, measured, not the deck).
     TERM 2: 0 questions — no bank in the corpus prints a substance
       question, so there was no backwards calibration available at all.
     Floor 600. ⚠ A source count under-predicts this style badly (105-202 %
     across the module), so the floor did not govern; the SHAPE did. PRINT IT.

   ==========================================================================
   GAPS FILLED AND TAGGED (CLAUDE.md §4) — every one marked in text:
     sd-6  the three steps map onto three time-scales, and stopping after
           step 2 is the commonest way the sequence fails
     sd-5  which two stage-transitions motivational interviewing targets
   ⚠ EVERYTHING ELSE IS THE DECK'S. The absences in sd-8 — no stimulant or
   hallucinogen pharmacotherapy, no intoxication or withdrawal syndromes,
   no substance attached to any induced disorder — ARE RECORDED, NOT FILLED,
   because each is a whole topic and book ch.9 is the place they belong.

   ==========================================================================
   RE-MEASURE: node vdraft.js content/neuro/theory-drafts/ps-sud.draft.js
   ========================================================================== */
var THEORY_DRAFT = {
  "ps-sud": {
    "intro": "Addiction as a brain disease, one dopaminergic pathway that every drug of abuse reaches, six classes of substance, six stages of change, and three steps of treatment of which only the third addresses behaviour. From the front half of one lecture — the back half is `ps-emerg`'s.",
    "sections": [
      {
        "id": "sd-1",
        "w": "must",
        "h": "Addiction is a brain disease — and the deck means that literally",
        "body": "- **Definition:** a **CHRONIC, RELAPSING BRAIN DISEASE** characterized by **COMPULSIVE DRUG SEEKING AND USE, DESPITE HARMFUL CONSEQUENCES**.\n- **⚠️ Why *brain disease* is not a metaphor:** **drugs CHANGE THE BRAIN — its STRUCTURE and how it WORKS.** Those changes **can be LONG LASTING**, and they are what produce the harmful behaviours seen in people who abuse drugs.\n- **And the clinical consequence:** the patient has a **HIGH TENDENCY TO RELAPSE AFTER WITHDRAWAL**. **That single line is why `sd-6`'s detoxification is only step 2 of 3.**\n\n### The prefrontal cortex, and what it stops doing\n- **⚠️ The PFC plays a MAJOR ROLE in addiction**, because it controls the **EXECUTIVE FUNCTIONS** —\n  - **decision making**\n  - **weighing RISK against REWARD**\n  - **RESISTING LIMBIC IMPULSES**\n- **⚠️ The executive functions are IMPAIRED — in addictive patients.** **Read that against `sd-2`:** the **limbic reward system is driving** and **the structure that would restrain it is impaired**. **The deck's two anatomy slides are one argument, not two.**\n\n### Why some people and not others\n- **The deck's framing:** *as with any other health condition, vulnerability to addiction differs for each individual* — **there are certain risk factors that make addiction more likely.**\n\n|**Risk factor**|**Detail**|\n|---|---|\n|**1. GENETICS**|⚠️ **may account for UP TO 60 % of vulnerability to addiction**|\n|**2. Early developmental influences and environmental factors**|—|\n|**3. Effects of STRESSFUL LIFE EVENTS** across a person's life|—|\n|**4. MENTAL DISORDERS**|the deck's examples: **depression** or **anxiety**|\n\n- **⚠️ 60 % is the only percentage — in this half of the deck**, and it is the one to carry: **genetics is the largest single contributor, and it is still not most of the story.**\n\nSrc: L15 sl. Addiction ×2 · Why do some people become addicted to alcohol and drugs, while others don't? · Risk factor to addiction",
        "qs": []
      },
      {
        "id": "sd-2",
        "w": "must",
        "h": "The reward system — one pathway, all the drugs",
        "body": "### The limbic system\n- It is involved in **many of our emotions and motivations**, **particularly those related to SURVIVAL** — the deck's examples are **fear** and **anger**.\n- **It also regulates FEELINGS OF PLEASURE**, such as those associated with **eating** and **sex**.\n- **⚠️ And the load-bearing line: those feelings of pleasure are part of our REWARD SYSTEM, and they are VERY POWERFUL** — and **drugs of abuse ACTIVATE that system**.\n\n### The brain reward system, anatomically\n|**Component**|**As printed**|\n|---|---|\n|**What it is made of**|**mainly DOPAMINERGIC NEURONS**|\n|**Where the cell bodies are**|the **VENTRAL TEGMENTAL AREA (VTA)**|\n|**Where VTA cells project**|**NUCLEUS ACCUMBENS (NAc)** · **hippocampus** · **amygdala** · **prefrontal cortex**|\n|**Its role**|**a KEY ROLE in the INITIATION and MAINTENANCE of drug abuse and addiction**|\n\n- **⚠️⚠️ THE SENTENCE THE LECTURE TURNS ON:** ***all drugs of abuse stimulate, DIRECTLY OR INDIRECTLY, the dopaminergic neurons located in the VTA, and thereby INCREASE THE DOPAMINE TONE.*** **Six drug classes in `sd-4`, one common final pathway.**\n- **⚠️ The PFC is BOTH a target and a brake.** It is one of the four VTA projection sites here, and it is the structure whose executive functions `sd-1` says are impaired. **The reward system projects into the very region that is supposed to override it.**\n- **⚠️ The mesolimbic pathway by another name.** `ps-psychosis`'s `sz-3` gives the same VTA-to-nucleus-accumbens projection as the pathway of **reward, motivation, affect and memory**. **Same anatomy, two lectures, and `ps-pharm`'s antipsychotics act on it too.**\n\nSrc: L15 sl. The Brain's Limbic System · Brain Reward system ×2",
        "qs": []
      },
      {
        "id": "sd-3",
        "w": "must",
        "h": "Behavioural addiction, and the two clinical presentations",
        "body": "### Behavioural addiction\n- **Also called NON-SUBSTANCE addictions:** a set of **behaviours a person becomes DEPENDENT on and CRAVES**.\n- **The deck's nine:** **food · gaming · sex · social media · gambling · internet · risks · shopping · pornography.**\n- **The definition:** a **COMPULSION to engage in a rewarding non-substance-related behaviour** — *sometimes called a **NATURAL REWARD*** — **despite any negative consequences** to the person's **physical, mental, social or financial well-being**.\n- **⚠️ It is the substance definition — with the substance removed.** Compulsion, craving, and *despite harmful consequences* are all carried over from `sd-1`; **only the object changes**, and `sd-2` explains why that works — **the natural rewards were what the system evolved for.**\n\n### Clinical presentations — two headings, and the second has nine limbs\n|**I. SUBSTANCE USE DISORDERS**|**II. SUBSTANCE-INDUCED DISORDERS**|\n|---|---|\n|the deck's example: **substance DEPENDENCE disorder**|**one or more** of: **1. intoxication · 2. withdrawal · 3. delirium · 4. dementia · 5. psychosis · 6. mood disorders · 7. anxiety disorders · 8. sexual disorders · 9. sleep disorders**|\n\n- **⚠️⚠️ THE SECOND COLUMN: A DIFFERENTIAL FOR HALF THIS MODULE.** **Every one of the nine is another chapter's diagnosis** — and each of those chapters excludes *substance-induced* in its own differential: `ps-anxiety`'s `ax-6`, `ps-schizmgmt`'s `sm-4`, `ps-ocd`'s `oc-6`, `nr-delirium`. **This list is the other side of all of them.**\n- **⚠️ A gap: the deck names no substance against any of the nine.** Which drug causes which induced disorder is **not printed** — only that any of them **can be** induced.\n\nSrc: L15 sl. Behavioral Addiction · Clinical presentations",
        "qs": []
      },
      {
        "id": "sd-4",
        "w": "must",
        "h": "The six classes",
        "body": "|**Class**|**Agents, as the deck prints them**|\n|---|---|\n|**1. DEPRESSANTS**|**alcohol** · **benzodiazepines**|\n|**2. STIMULANTS**|**cocaine** · **amphetamines**|\n|**3. HALLUCINOGENS**|**LSD** · **phencyclidine** · **ketamine**|\n|**4. OPIATES**|**heroin** · **morphine** · **pethidine**|\n|**5. CANNABINOIDS**|**cannabis**|\n|**6. OTHERS**|**tramadol** · **nicotine** · **caffeine** · **inhalants** · others, e.g. **anabolic steroids**|\n\n- **⚠️ Class 6 is where the exam questions hide.** **Tramadol, nicotine and caffeine** are the three most-used drugs on the page and the deck files them under *others* — **nicotine and cannabis are the only two classes with a specific pharmacotherapy in `sd-7`, and nicotine is in the leftover bin.**\n- **⚠️ Only classes 1 — 4, 5 and 6 get any treatment at all.** **There is no pharmacotherapy in this deck for stimulants or hallucinogens** — see `sd-7`.\n- **⚠️ Benzodiazepines appear here — as a DRUG OF ABUSE** and in `ps-pharm`'s `ph-9` as a **prescribed anxiolytic with a one-month ceiling**. **The ceiling exists because of this table.**\n\nSrc: L15 sl. Classification, the six-row table as printed",
        "qs": []
      },
      {
        "id": "sd-5",
        "w": "must",
        "h": "The stages of change",
        "body": "**The Transtheoretical Model.** The deck gives six stages and defines each.\n\n|**Stage**|**As defined**|\n|---|---|\n|**1. PRE-CONTEMPLATION**|**no intention to change behaviour in the foreseeable future**. ⚠️ **Many individuals in this stage are UNAWARE OF THEIR PROBLEMS**|\n|**2. CONTEMPLATION**|**aware that a problem exists** and **seriously thinking about overcoming it**, but **have NOT YET MADE A COMMITMENT to take action**|\n|**3. PREPARATION**|**combines INTENTION and BEHAVIOURAL CRITERIA** — intending to take action **in the next month**, and **have unsuccessfully taken action in the past year**|\n|**4. ACTION**|**modify behaviour, experiences or environment** to overcome the problem. **The most overt behavioural changes**, requiring **considerable commitment of time and energy**|\n|**5. MAINTENANCE**|**work to prevent RELAPSE** and **consolidate the gains** of the action stage. ⚠️ For addictive behaviours this extends **from SIX MONTHS to an indeterminate period** past the initial action|\n|**6. RELAPSE**|**the person falls back into old patterns of behaviour**|\n\n- **⚠️ Two transitions: stages 1 and 2 are separated by AWARENESS, and 2 and 3 by COMMITMENT.** Those are the two transitions **motivational interviewing** in `sd-6` is aimed at, and the deck names it as a rehabilitation modality without ever saying what it is for. *(That connection is mine.)*\n- **⚠️ Preparation is defined twice over: a TIME criterion and a HISTORY criterion** — next month, and a failed attempt in the past year. **It is the only stage the deck defines by two tests.**\n- **⚠️ RELAPSE IS A STAGE — not a failure of the model.** It sits inside the cycle, which is consistent with `sd-1`'s *chronic, relapsing* and with the **high tendency to relapse after withdrawal**.\n\nSrc: L15 sl. The Trans theoretical Model (Stages of Change) ×2, all six stages as printed",
        "qs": []
      },
      {
        "id": "sd-6",
        "w": "must",
        "h": "Three steps of treatment",
        "body": "### 1. Treatment of the presenting symptoms and pain\n|**Problem**|**What is given**|\n|---|---|\n|**COMA**|**ABC measures**|\n|**psychosis and agitation**|**antipsychotics**|\n|**depression**|**antidepressants**|\n|**seizures**|**anticonvulsants**|\n|**insomnia**|**sedating drugs**|\n|**pain**|**pain killers**|\n\n- **⚠️ Step 1 is symptomatic and generic** — **not one agent is named**, and every class in it is `ps-pharm`'s.\n\n### 2. Detoxification, or harm reduction\n- **What it does:** **treats the ACUTE PHYSIOLOGICAL EFFECTS of stopping drug use.**\n- **⚠️⚠️ WHAT IT DOES NOT DO:** it **does NOT produce the lasting behavioural changes necessary for recovery** — it **does not deal with the psychological aspect of addiction**. **The deck says this in its own parenthesis, and it is the most examinable sentence in the section.**\n- **Medications are available — for detoxification from:** **opiates · nicotine · benzodiazepines · alcohol · barbiturates and other sedatives.**\n\n### 3. Rehabilitation\n- **What it addresses:** the **PSYCHOLOGICAL, SOCIAL and BEHAVIOURAL problems associated with addiction** — i.e. **exactly what step 2 does not.**\n- **Four examples:** **CBT** · **motivational interviewing** · **the 12-STEPS MODEL** · **family therapy**.\n\n- **⚠️ Three steps, three time-scales:** **hours** (the presenting emergency), **days** (the physiological withdrawal), **months to years** (the behaviour). **Stopping after step 2 is the commonest way the sequence fails**, which is what `sd-1`'s *high tendency to relapse after withdrawal* describes. *(The mapping is mine; the deck prints the three steps and their scope.)*\n- **⚠️ A list is not coverage: none of the four rehabilitation modalities is described** — and `ps-therapy` is where CBT and family therapy are taught.\n\nSrc: L15 sl. Steps of Treatment ×3, all three steps and their sub-lists as printed",
        "qs": []
      },
      {
        "id": "sd-7",
        "w": "must",
        "h": "Pharmacotherapy, substance by substance",
        "body": "|**Substance**|**Drug**|**How it works, and the caveat**|\n|---|---|---|\n|**I. ALCOHOL**|**ACAMPROSATE**|a **GABA AGONIST** with **little abuse potential**; **already in use in Europe** for alcohol dependence|\n| |**DISULFIRAM** *(Antabuse)*|**inhibits ALDEHYDE DEHYDROGENASE (ALDH)**. If alcohol is then ingested, **blood ACETALDEHYDE rises**, producing the **DER — disulfiram-ethanol reaction**, an **AVERSIVE reaction thought to prevent drinking**|\n|**II. OPIATES**|**NALTREXONE** *(long-acting opiate antagonist)*|⚠️ **the patient must be OPIATE-FREE FOR SEVERAL DAYS first**, to prevent **opiate abstinence syndrome**. It **produces an aversion reaction if opiates are received**, and is **most useful for HIGHLY MOTIVATED patients** — poor compliance otherwise|\n| |**METHADONE** *(long-acting opioid AGONIST)*|**occupies mu-opioid receptors** and **blocks the reinforcing euphorigenic effects of other opioids**; **prevents withdrawal**, **blocks the effects of illicit opiate use**, and **decreases craving**|\n| |**BUPRENORPHINE** *(opioid PARTIAL agonist)*|**binds the mu receptor MORE TIGHTLY than morphine or heroin**, blocking them. ⚠️ **A CEILING — about 16 mg/day** — beyond which more drug adds neither positive nor adverse opioid effect. **Safer than methadone** for that reason, and its **lengthy half-life may allow dosing every 3 or even 4 days**|\n|**III. NICOTINE**|**nicotine REPLACEMENT** — patch, gum, lozenge|**relieves craving and withdrawal symptoms**|\n| |**VARENICLINE**|a **nicotine receptor PARTIAL AGONIST**|\n| |**BUPROPION**|a **nicotine receptor ANTAGONIST** with **dopaminergic action**, to help with **craving AND depression**|\n|**IV. CANNABIS**|**DRONABINOL**|a **CB1 AGONIST**, **analogous to an opiate agonist**; **decreases marijuana craving and withdrawal symptoms** — anxiety, trouble sleeping, chills|\n\n- **⚠️⚠️ ONE DOSE IN THE WHOLE DECK: 16 mg/day.** A sweep for `mg` over all 31 slides returns nothing else. **Every other quantity in `ps-sud` is absent**, and `ps-pharm`'s `ph-1` records the same for its own deck.\n- **⚠️ Two strategies, and the deck names both:** **ANTAGONISM** — naltrexone, disulfiram, an aversive or blocking approach that **needs a motivated patient** — and **HARM REDUCTION**, using **methadone or buprenorphine**, whose **long-acting agonist effect prevents the craving driven by short-acting agonists such as heroin**. **The deck routes *less motivated* patients explicitly to the second.**\n- **⚠️ Bupropion, twice: called a nicotine receptor ANTAGONIST here** and is `ps-pharm`'s **NDRI antidepressant** (`ph-2`), where its **dopaminergic action** and its **seizure risk** are recorded. **Same drug, two chapters, and the dopaminergic action is the link.**\n- **⚠️ Two classes get nothing: NO PHARMACOTHERAPY FOR STIMULANTS OR HALLUCINOGENS** — classes 2 and 3 of `sd-4`. **Recorded, not filled**: the deck's four headings are alcohol, opiates, nicotine and cannabis, and it stops there.\n\nSrc: L15 sl. Pharmacotherapy for addiction ×5 — I. Alcohol · II. Opiates ×2 · III. Nicotine · IV. Cannabis, all as printed",
        "qs": []
      },
      {
        "id": "sd-8",
        "w": "know",
        "h": "What this chapter owes, and what it was not given",
        "body": "**§14.5 register.** Every row is a promise; an unrecorded one is a deletion.\n\n|**What**|**Where it goes, or why it is not here**|\n|---|---|\n|**⚠️⚠️ THE WHOLE PSYCHIATRY-EMERGENCY HALF OF `L15` — 733 words, FILED OUT**|`L15` is **two lectures in one deck**. Lines 205-354 teach **NEUROLEPTIC MALIGNANT SYNDROME (240 w)**, **CATATONIA (108 w)** and **SUICIDE (385 w)**. **All three are `ps-emerg`'s**, none is substance-related, and **not one word of them is used here.** The count that mattered: **the deck is 1,854 w, of which this chapter's half is 1,121.**|\n|**⚠️⚠️ AND THAT HALF PAYS A DEBT `ps-schizmgmt` RECORDED AS UNREADABLE**|`sm-5`/`sm-10` filed NMS out to *book Psych ch.10, image-only, unread*. **It did not need to.** `L15` teaches NMS **in full** — tetrad, **mortality 10-20 %**, **incidence 0.02-3 %**, **male:female 2:1**, **age not a risk factor**, mechanism, the associated medications, seven lab findings and a nine-step treatment — and **`L16` teaches it again.** **A gap was declared from the book's own pointer without probing the decks.** Corrected in `sm-5`, `sm-10`, the plan and MEMORY.|\n|**Book Psychiatry ch.9, *Substance-related disorders*, printed 249-255 — SEVEN PAGES, UNREAD**|**Image-only**; a render needs a subagent, and none was available. **Recorded, not guessed.** It is the likeliest home for everything the register below calls absent.|\n|**The four rehabilitation modalities**|**CBT · motivational interviewing · the 12-steps model · family therapy** are **named and not one is described.** → **`ps-therapy`**, where they are taught. `sd-6` says so on the page.|\n|**⚠️ NO PHARMACOTHERAPY FOR STIMULANTS OR HALLUCINOGENS**|A **verified absence in this deck**, not an omission here: `sd-7`'s four headings are alcohol, opiates, nicotine, cannabis. **Classes 2 and 3 of `sd-4` get nothing.** Whether book ch.9 fills it is unknown — see the row above.|\n|**⚠️ THE INTOXICATION AND WITHDRAWAL SYNDROMES ARE ABSENT, SUBSTANCE BY SUBSTANCE**|The deck names **withdrawal 7 times and intoxication once**, always as a category — **never a clinical picture.** **`tolerance`, `delirium tremens`, `naloxone` and `Wernicke` return ZERO across all 25 neuro/psych decks** *(Wernicke appears in `L13` and `L16`, both as a DEMENTIA/delirium differential, never as an alcohol-withdrawal syndrome)*. **This is the largest hole in the chapter and it is the deck's, not mine.**|\n|**Which substance causes which induced disorder**|`sd-3`'s nine substance-induced disorders are printed as a bare list. **No substance is attached to any of them.** Each of the nine is another chapter's diagnosis, and this list is their shared exclusion — **pointed at, never duplicated.**|\n|**Step 1's drug classes**|**Antipsychotics, antidepressants, anticonvulsants, sedatives, analgesics** — `sd-6` prints the indication, **`ps-pharm` prints the agents.** No agent is named in `L15`. **Pointing, not repeating.**|\n|**Benzodiazepines, twice**|A **drug of abuse** in `sd-4` and a **prescribed anxiolytic capped at one month** in `ps-pharm`'s `ph-9`. **The link is stated in `sd-4`; nothing is owed.**|\n|**Bupropion, twice**|**Nicotine receptor antagonist** here, **NDRI antidepressant** in `ph-2`. Stated at `sd-7`; **nothing is owed.**|\n|**Zero questions**|**No bank in the corpus prints a substance-use question.** The chapter is written from the deck for the exam, not backwards from a question set — **the only calibration available was the source itself.**|\n\nSrc: register — `L15` line counts measured 2026-08-23; book map row *Substance use disorder → Psych 9, 249-255*; deck sweeps for the absent terms run over all 25 cached neuro/psych lecture files",
        "qs": []
      }
    ]
  }
};
