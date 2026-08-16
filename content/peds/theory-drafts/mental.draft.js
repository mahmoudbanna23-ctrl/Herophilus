/* mental — "Mental Health", Paediatrics. Written 2026-08-16 under
   START-HERE.md §14 (slide-density revision notes) + §14.3a (layout) + §14.5
   (the deferral register), and content\peds\theory-plan.md.
   Shape copied from genetics.draft.js and dev-problems.draft.js.

   DECK LABEL USED IN THE Src LINES:
     L14 = L14) Child Psychiatry.pdf — Dr Ahmed Salama, Consultant Child and
           Adolescent Psychiatry, Lecturer of Neuropsychiatry at Alexandria
           University (MD, ACT, ABMMP, BCIA).
           ⚠️⚠️ THIS DECK IS BORROWED FROM THE NEUROPSYCHIATRY MODULE. It sits
           in Semester 8\Neuro\Theoritical\PPT\, not in Pedo\. Paediatrics has
           NO deck of its own for this chapter — greped and confirmed in
           theory-plan.md finding 2. Every Src line below says
           "(Neuropsychiatry deck)" so the borrowing is visible on the page,
           per the brief.
           Born-digital PDF, PowerPoint for Microsoft 365, 960x540 pts.
           Cache: content\neuro\lectures\L14) Child Psychiatry.txt, 1,257 node
           words.

   ⚠️ PAGE NUMBERING. `pdfinfo` reports 29 pages. `pdftotext`'s trailing form
   feed makes the cached split report 30, so "p30" DOES NOT EXIST and p29 is
   the "Thank you" card. Every Src page below is a real, verified page.

   ============================================================================
   ⚠️⚠️ FINDING 0 — THE SCOPE BOUNDARY. AUTISM AND ADHD ARE NOT WRITTEN HERE.
   ============================================================================
   They are already written, in full, as `dev-nd` ("Autism and ADHD") — the
   second half of the dev-problems split (dp-9 … dp-17: prevalence, aetiology,
   the DSM-5 counting rule, the early signs, comorbidities, the three
   presentations with both nine-item symptom tables, the NICE 2018 algorithms
   and the drug ladder). Verified by grep against dev-problems.draft.js, not
   assumed.

   L14 spends 11 of its 29 pages on them — p12–13 (ASD criteria) and p20–28
   (ADHD criteria and management, including the QEEG/neurofeedback slides).
   That is roughly 550 of the deck's 1,257 words. Those pages are READ and
   DEFERRED, not written. ment-1 carries the one-line pointer the brief asks
   for and nothing more.

   ⚠️ NOTHING IS OWED TO THE §14.5 REGISTER BY THIS DEFERRAL. A register row
   exists to stop a fact being lost between a sending and a receiving chapter.
   Here the receiving chapter is ALREADY MERGED AND ALREADY HOLDS THE FACTS —
   `dev-nd` carries methylphenidate, lisdexamfetamine, atomoxetine, guanfacine,
   the neurofeedback effect size (0.29), the ASD criteria and the tic
   comorbidity. Checked term by term. Two things in L14 that `dev-nd` does NOT
   carry are recorded below as findings rather than as rows, because they are
   Neuropsychiatry's own chapter (`ps-child`) to place, not paediatrics':
     · the DSM-5 mechanism sentences for atomoxetine (selective NET inhibitor;
       inhibiting NET raises DA and NE in prefrontal cortex, which is deficient
       in DAT; no rise in nucleus accumbens, which has less NET, hence no
       abuse potential) and the guanfacine-vs-clonidine alpha-2 selectivity
       (guanfacine selective for a2A; clonidine nonselective a2A/a2B/a2C);
     · the QEEG brain map (p28) as the neurofeedback instrument.
   Paediatrics does not need drug pharmacodynamics to recognise and refer, so
   neither is claimed here.

   ============================================================================
   ⚠️ FINDING 1 — THE CACHE IS COMPLETE, AND THE VISUAL READ WAS STILL RUN.
   ============================================================================
   `pdftotext -layout` of the source PDF reproduces the cached .txt. The deck
   averages 43 words per page, which is the image-dependent band, so all 29
   pages were rendered at 110 dpi and read as 4-up contact sheets (8 reads),
   exactly as theory-plan.md requires of every paediatrics chapter.

   ⚠️ THE VISUAL READ RECOVERED ONE FACT AND IT IS REPORTED AS ONE FACT, not
   dressed up: p7's uncaptioned pie chart ("Percent of Cases") gives MILD
   almost the entire circle, with moderate, severe and profound as thin
   slivers. No percentages are printed on it. That is written into ment-2.

   Everything else the pictures hold is decoration or embedded video: stock
   photographs (pp.1, 2, 8, 15, 18, 26), black video rectangles that render as
   nothing (pp.10, 11, 13, 19), a hexagonal SmartArt whose six labels all
   extract (p5), the DSM-5 book cover (p4), a Ritalin/Concerta/Strattera
   product shot with a methylphenidate mechanism cartoon (pp.25–26), a
   biofeedback loop diagram (p27) and the QEEG screenshots (p28) — the last
   four all inside the deferred ADHD run.

   ⚠️ TWO CLEAN NEGATIVES, recorded so nobody renders them again: p16 and p20
   are bare section title cards ("The Neurodevelopmental Motor Disorders",
   "Attention Deficit & Hyperactivity Disorder"), and p29 is the "Thank you"
   card. Nothing textual in any of them.

   ============================================================================
   ⚠️ FINDING 2 — THE OVERLAP WITH `dev-problems` IS DELIBERATE AND IS A
   CROSS-REFERENCE, NOT A COPY.
   ============================================================================
   theory-plan.md: "Do not raid `dev-problems`' content for it; cross-reference
   instead." Intellectual disability is the only genuine collision.
     · `dev-problems` dp-3 holds the ALEXANDRIA three-limb definition (IQ <=70
       + limitation in >=2 of 10 adaptive skills + onset before 18), the ten
       named adaptive skills, and the four grades — all from the `normal-dev`
       deck L1.
     · ment-2 holds the DSM-5 framing, which is a DIFFERENT text: three
       criteria A/B/C, the conceptual/social/practical domains, and the
       "confirmed by BOTH clinical assessment AND standardized testing" clause
       that L1 does not carry. It is cited to L14 p6, my own deck.
   The four IQ bands appear in both because both decks print them. ment-2
   states them once, compactly, and points at dp-3 for the rest rather than
   reproducing the ten skills or the investigation panel.

   ============================================================================
   ⚠️ FINDING 3 — ment-7 IS ALMOST ENTIRELY TAGGED, AND THE PLAN ASKED FOR IT.
   ============================================================================
   theory-plan.md: "Peds `mental` is written from the paediatrician's side —
   recognising it in a general clinic, what to do about it, when to refer — and
   `ps-child` from the psychiatrist's. Write the peds one that way; do not
   simply mirror the deck." L14 is a psychiatrist's deck and carries no
   referral pathway, no medical mimics and no emotional disorders at all, so
   that section is general medical knowledge, tagged line by line per
   CLAUDE.md §4. Its Src line says so plainly.

   The adolescent depression / self-harm lines are kept on importance test 3
   (CLAUDE.md §4 — "it is an emergency... missing it harms a patient"), not to
   fill space. They are four bullets, not a section of their own.

   ============================================================================
   ⚠️ WHAT THE DECK COVERS AND THIS CHAPTER DELIBERATELY LEAVES OUT
   ============================================================================
   1. **ASD and ADHD in their entirety** — FINDING 0. Written in `dev-nd`.
   2. **The atomoxetine and alpha-2 agonist pharmacodynamics** (L14 p26) and
      **the QEEG brain map** (p28) — FINDING 0. ADHD management, and
      `dev-nd` already names the drugs.
   3. **Nothing else.** Every other slide in the deck is carried.

   ============================================================================
   ⚠️ BUDGET — stated as method, with the measurement at the FOOT of this file
   ============================================================================
   No paediatrics question carries chapter:'mental' — verified against
   app\data\questions.peds.js, whose 81 questions sit in cardiac, infection and
   renal only. So TERM 2 (25 x questions) is ZERO and TERM 1 governs.

   Ceiling as the hub set it = the deck's 1,257 words, floor 600.

   ⚠️ THE HONEST LINE-RANGE FIGURE IS LOWER AND IS SAID OUT LOUD. §14.1(b) —
   "deferring and counting are opposites" — means the ~550 words of pp.12–13
   and pp.20–28 that go to `dev-nd` are NOT mine to spend. A strict TERM 1 over
   the pages this chapter actually rests on (pp.2–11, 14–19) is ~700 words,
   which is above the 600 floor but below what the entity count needs: ten
   distinct entities at §14.1's ~90 words each is ~900 before a single
   framework slide, and this deck has four framework slides (brain
   development, the eight-category list, the six causes, the DSM-5 ID
   criteria). So the chapter is written to the hub's 1,257 ceiling rather than
   to the strict 700, and lands near it. Both numbers are reported rather
   than the convenient one.

   ⚠️ THE §14.1 PLANNING SUM, computed BEFORE writing and left here as it stood:
     · 10 entities x ~90 = 900. The ten: intellectual disability · language
       disorder · speech sound disorder · social pragmatic communication
       disorder · stuttering · specific learning disorder · developmental
       coordination disorder · stereotypic movement disorder · tic disorders ·
       Tourette's disorder.
     · 4 framework slides x ~85 = 340. Brain development and pruning · the
       eight DSM-5 categories · the six causes · the DSM-5 ID criteria block.
     · ment-7, which the deck does not fund at all, ~200.
     Predicted 1,440. So the honest expectation was ALWAYS above the 1,257
     ceiling, and it was said before writing rather than discovered after.

   ⚠️ MEASURED OUTCOME — SEE THE FOOT OF THIS FILE. The numbers are NOT written
   here, deliberately. The draft header has been wrong thirteen times in this
   project, and every one of those failures was a number written before the
   last edit. This header states method only.
*/

var THEORY_DRAFT = {

  'mental': {

    intro: 'A list chapter. Almost every slide is a named disorder with a DSM-5 definition attached, so expect definitions recited cold, the four IQ bands, the three Tourette criteria and the six learning-disorder symptoms. Autism and ADHD are examined from `dev-nd`.',

    sections: [

{
  id: 'ment-1', w: 'must',
  h: 'How the brain is built, and the eight shelves DSM-5 puts the disorders on',
  body: [
    '### The substrate — the growth is in the wiring, not the cells',
    '- **~100 billion neurons at birth:** **nearly the full population the brain will ever have** — the cellular foundation is already in place.',
    '- **The real transformation:** growth lies **not in cell count but in the explosive expansion of synaptic connections** enabling learning, emotion and self-regulation.',
    '- **1,000 trillion synapses by age 3:** formed by rapid branching — **more than the brain will ever need**.',
    '- **The pruning paradox — "use it or lose it":** efficient circuits strengthen, **unused connections are discarded**; **especially at ages 2–3 and in adolescence**.',
    '- **⚠️ The neurodevelopmental link:** when **overproduction and pruning fail to balance**, **abnormal connectivity** emerges — linked to autism, ADHD and other disorders of social, cognitive and communication function.',
    '',
    '### The eight DSM-5 neurodevelopmental disorders',
    '- **Intellectual disorders** · **communication disorders** · **autism spectrum disorder** · **attention-deficit/hyperactivity disorder** · **specific learning disorders** · **motor disorders** · **tic disorders** · **other neurodevelopmental disorders**.',
    '',
    '*Autism spectrum disorder and ADHD — criteria, comorbidity, screening and both treatments — are written in full in `dev-nd` and are not repeated here.*',
    '',
    '### Causes of neurodevelopmental disorders — six',
    '- **Genetic** · **infectious diseases** · **immune disorders** · **nutritional factors** · **physical trauma** · **social deprivation**.',
    '',
    'Src: L14 (Neuropsychiatry deck) pp.2–5'
  ].join('\n'),
  qs: []
},

{
  id: 'ment-2', w: 'must',
  h: 'Intellectual disability — the DSM-5 three criteria and the four IQ bands',
  body: [
    '**The definition:** **BOTH intellectual and adaptive deficits**, across the **conceptual, social and practical** domains.',
    '',
    '### All three criteria must be met',
    '',
    '|Criterion|What it requires|',
    '|---|---|',
    '|**A — Intellect**|Deficits in reasoning, problem solving, planning, abstract thinking, judgment, academic learning and learning from experience. **Confirmed by BOTH clinical assessment AND individualized, standardized intelligence testing**|',
    '|**B — Adaptive function**|**Failure to meet developmental and sociocultural standards** for personal independence and social responsibility. Without ongoing support the deficits limit **≥ 1 activity of daily life** — communication, social participation, independent living — **across multiple environments**|',
    '|**C — Onset**|**During the developmental period**|',
    '',
    '### The four levels, by IQ',
    '',
    '|Level|IQ|',
    '|---|---|',
    '|**Mild**|**50 to 70**|',
    '|**Moderate**|**35 to 49**|',
    '|**Severe**|**20 to 34**|',
    '|**Profound**|**< 20**|',
    '',
    '- **⚠️ Mild dominates:** it is the **overwhelming majority of cases** — the deck’s percent-of-cases pie gives mild almost the whole circle, the other three thin slivers. **No percentages are printed on it.**',
    '',
    '*The Alexandria three-limb definition (IQ ≤ 70 + limitation in ≥ 2 of 10 adaptive skills + onset before 18) and the investigation panel for global delay are in `dev-problems`.*',
    '',
    'Src: L14 (Neuropsychiatry deck) pp.6–7 (the pie on p7 read visually — it carries no numbers)'
  ].join('\n'),
  qs: []
},

{
  id: 'ment-3', w: 'must',
  h: 'The communication disorders — speech is not language',
  body: [
    '### The two words the lecture separates',
    '- **Speech:** the **expressive production of sounds** — an individual’s **articulation, fluency, voice and resonance quality**.',
    '- **Language:** the **form, function and use of a conventional system of symbols** — spoken words, sign language, written words, pictures — **in a rule-governed manner** for communication.',
    '',
    '### The four DSM-5 communication disorders',
    '',
    '|Disorder|The defect|',
    '|---|---|',
    '|**Language disorder**|The **symbol system** — acquiring and using language across modalities|',
    '|**Speech sound disorder**|The **production of speech sounds**, intelligibility below age level|',
    '|**Social (pragmatic) communication disorder**|**Persistent difficulties in the SOCIAL USE of verbal and nonverbal communication**|',
    '|**Childhood-onset fluency disorder (stuttering)**|**Disturbances in the normal fluency and time patterning of speech**, inappropriate for the individual’s age and language skills, and **persisting over time**|',
    '',
    '*L14 p9 lists all four by name and defines only the lower two, so the top two rows are not taken from the course material.*',
    '',
    '### ⚠️ Social pragmatic disorder versus autism — the discriminator',
    '- **Both share the social-communication deficit.** Social pragmatic disorder has it **WITHOUT the restricted, repetitive behaviours and interests** — the second DSM-5 criterion, and what makes it autism (not taken from the course material).',
    '',
    'Src: L14 (Neuropsychiatry deck) pp.8–11'
  ].join('\n'),
  qs: []
},

{
  id: 'ment-4', w: 'must',
  h: 'Specific learning disorder — one of six symptoms, six months, despite help',
  body: [
    '- **Boys more than girls:** in 2013, **9 % of boys and 6 % of girls aged 6 to 17**.',
    '',
    '### The DSM-5 rule, in three clauses',
    '- **What:** difficulties **learning and using academic skills**.',
    '- **How much:** **at least ONE** of the six symptoms below.',
    '- **How long:** **persisting for at least 6 months** — **despite the provision of interventions that target those difficulties**.',
    '- **⚠️ "Despite intervention" is the gate.** A child who has never been taught or helped is not yet a learning disorder (not taken from the course material).',
    '',
    '### The six symptoms',
    '- **1 Reading accuracy:** inaccurate, or **slow and effortful, word reading**.',
    '- **2 Reading comprehension:** difficulty **understanding the meaning of what is read**.',
    '- **3 Spelling.**',
    '- **4 Written expression.**',
    '- **5 Number sense:** difficulty mastering **number sense, number facts or calculation**.',
    '- **6 Mathematical reasoning.**',
    '',
    '### The three types',
    '- **With impairment in reading** · **with impairment in written expression** · **with impairment in mathematics**.',
    '- **Their common names:** **dyslexia**, **dysgraphia** and **dyscalculia** respectively (not taken from the course material).',
    '',
    'Src: L14 (Neuropsychiatry deck) pp.14–15'
  ].join('\n'),
  qs: []
},

{
  id: 'ment-5', w: 'high',
  h: 'The two neurodevelopmental motor disorders',
  body: [
    '|Disorder|Definition|',
    '|---|---|',
    '|**Developmental coordination disorder**|**Acquisition and execution of coordinated motor skills substantially below that expected** for the individual’s **chronological age AND opportunity for skill learning and use**|',
    '|**Stereotypic movement disorder**|**Repetitive, seemingly driven and apparently purposeless motor behaviour** — hand shaking or waving, body rocking, head banging, self-biting, hitting own body|',
    '',
    '- **⚠️ DCD has two halves:** stems drop the second. Skills below age is not enough — the child must also have **had the opportunity to learn them**.',
    '- **DCD in clinic:** the clumsy child — drops things, poor handwriting, late with buttons, laces and cycling (not taken from the course material).',
    '- **⚠️ Stereotypy is the one that injures:** head banging, self-biting and hitting own body are **self-injurious**, so protection and specialist referral come first (not taken from the course material).',
    '',
    'Src: L14 (Neuropsychiatry deck) pp.16–18'
  ].join('\n'),
  qs: []
},

{
  id: 'ment-6', w: 'must',
  h: 'Tic disorders and Tourette’s',
  body: [
    '- **A tic:** a **sudden, rapid, recurrent, nonrhythmic motor movement or vocalization**.',
    '',
    '### Tourette’s disorder — three criteria',
    '',
    '|#|Criterion|',
    '|---|---|',
    '|**I**|**BOTH multiple motor AND one or more vocal tics** have been present at some time during the illness — **although NOT NECESSARILY CONCURRENTLY**|',
    '|**II**|Tics **may wax and wane** in frequency but have **persisted for MORE THAN 1 YEAR** since first tic onset|',
    '|**III**|**Onset before age 18 years**|',
    '',
    '- **⚠️ The trap:** "not necessarily concurrently" — motor and vocal tics never appearing **together** does not exclude Tourette’s; each only has to have occurred at some point.',
    '',
    '### The rest of the tic family — the deck names Tourette’s only',
    '',
    '|Disorder|Which tics|Duration|',
    '|---|---|---|',
    '|**Tourette’s disorder**|**Motor AND vocal**|**> 1 year**|',
    '|**Persistent (chronic) motor OR vocal tic disorder**|**One kind only, never both**|**> 1 year**|',
    '|**Provisional tic disorder**|Motor and/or vocal|**< 1 year**|',
    '',
    '*The lower two rows are not taken from the course material — L14 p19 defines a tic then goes straight to Tourette’s. Duration and which tics occur separate the three.*',
    '',
    '- **Course and company:** tics begin at **4–6 years**, peak around **10–12**, mostly **attenuate through adolescence**; **ADHD and OCD** commonly accompany them (not taken from the course material).',
    '- **Premonitory urge and suppressibility:** an uncomfortable urge relieved by the tic, plus **brief voluntary suppression** — what separates tics from chorea and myoclonus (not taken from the course material).',
    '',
    '*Tics as a comorbidity of ADHD are listed in `dev-nd`.*',
    '',
    'Src: L14 (Neuropsychiatry deck) p.19'
  ].join('\n'),
  qs: []
},

{
  id: 'ment-7', w: 'high',
  h: 'The paediatrician’s side — recognise, exclude, refer',
  body: [
    '### Recognition, not diagnosis',
    '- **The task:** spot the pattern, **exclude the medical mimics**, refer for formal DSM-5 assessment.',
    '- **⚠️ Exclude before labelling:** **hearing loss** before language disorder · **vision** before clumsiness · **seizures** before regression · **hypothyroidism and anaemia** before "poor concentration".',
    '',
    '### Refer to child and adolescent psychiatry when',
    '- **Function is failing** — school, home or peers, not the symptom count alone.',
    '- **The child self-injures**, or behaves unsafely towards self or others.',
    '- **⚠️ An acquired skill is lost.** **Regression is never normal** at any age; refer urgently.',
    '',
    '### The emotional disorders the deck does not reach',
    '- **Anxiety and depression:** the commonest adolescent psychiatric presentations.',
    '- **⚠️ Depression looks different in a child** — **irritability, school refusal and somatic complaints** (headache, abdominal pain) rather than stated sadness, which is why a paediatric clinic misses it.',
    '- **⚠️ Self-harm and suicidal ideation: ask directly.** Asking does not create the risk. **Any adolescent presenting after self-harm needs psychiatric assessment before discharge.**',
    '',
    '*This whole section is general medical knowledge, not taken from the course material.*',
    '',
    'Src: none in L14 — the deck carries no referral pathway, mimics or emotional disorders; written per the paediatrician’s-side brief in `theory-plan.md`'
  ].join('\n'),
  qs: []
}

    ]
  }
};

/* ============================================================================
   MEASURED OUTCOME — run from disk as the genuinely LAST action, after every
   content edit above was complete. Counter: node, split(/\s+/), over each
   section's joined `body` string, exactly as vth.js and peds-audit.js count.
   Script kept at <scratch>\ment\check.js and check2.js.
   ============================================================================

   | Section  | Words | w    |
   |----------|------:|------|
   | ment-1   |   217 | must |
   | ment-2   |   194 | must |
   | ment-3   |   195 | must |
   | ment-4   |   183 | must |
   | ment-5   |   137 | high |
   | ment-6   |   240 | must |
   | ment-7   |   200 | high |
   | TOTAL    | 1,366 |      |

   The seven rows sum to 1,366 and the counter's own total reads 1,366. Both
   figures come from the same run over the file as it now stands.

   · **7 sections · 1,366 body words · 5.69 printed pages at the /240
     estimator.** intro = 40 words (limit 50). 7 distinct ids, all `ment-`
     prefixed, no collision. Every section body ends with a `Src:` line.
     All `qs` empty, correctly — no paediatrics question carries this chapter.
   · **Layout: 0 problems.** No paragraph over 45 words; every lead bold
     carries a `:` or `—` inside 44 characters, so `mdLead()` finds an anchor
     on all of them (four were rewritten after the checker flagged them).
   · **vs the 1,257 ceiling: +8.7 %** — inside §14.1's 10 % tolerance, so no
     page-count adjudication is needed. vs the strict line-range TERM 1 of
     ~700 it is +95 %, and that gap is the entity floor, stated in the header
     before writing rather than discovered after.
   · **vs my own pre-writing planning sum of 1,440: came in 74 words UNDER.**
     The prediction is left in the header exactly as it stood.
   · **5.69 pp against the ~13 pp hard shape and the brief's "roughly 5
     pages".** NO SPLIT. This is the smallest paediatrics chapter written so
     far and it should stay one object.
   · **Nothing protected was cut to reach this number.** The compression that
     took it from an initial 1,507 was word-level only — a 45-word Src line
     reduced to 15, two duplicated general-knowledge tags folded into one
     blanket line in ment-7, and the pruning-window bullet merged into the
     pruning bullet. No fact, number, eponym or criterion left the file.
     ============================================================================
*/
