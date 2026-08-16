/* accidents — "Accidents and poisoning", Paediatrics. Written 2026-08-16 under
   START-HERE.md §14 (slide-density revision notes) + §14.3a (layout), and
   content\peds\theory-plan.md, whose ONE local difference is that PAEDIATRICS
   HAS NO 3,000-WORD CAP: budget = max(lecture words, 25 x questions, 600).
   Shape copied from liver.draft.js and allergy.draft.js.

   SOURCE LABELS USED IN THE Src LINES:
     L5 = 5) Poisoning in children_.pptx — "Poisoning in children", Hadir M.
          Hassouna, Ass. Prof of Pediatrics, Head of Pediatric Intensive Care
          Unit, Alexandria University. 29 slides. Cached at
          content\peds\lectures\5) Poisoning in children_.txt.
     B1 = pediatrics p1.pdf — "PEDIATRICS Part 1, 5th Year, BY HEALIX TEAM",
          Semester 8\Pedo\Theoritical\Books\. 250 PDF pages, IMAGE-ONLY.
          Chapter 4 "Accidents and Poisoning" = BOOK pp.84–86.

   ⚠️ PAGE NUMBERING, both sources, verified not assumed:
     L5 — slide N = PDF page N of the COM-converted PDF. `pdftotext` leaves a
          trailing form feed so a naive split reports 30 against a real 29.
     B1 — ⚠️ PDF page = BOOK page + 4. Established by rendering: cover PDF 1,
          blank 2, table of contents 3, mind-map 4, and book p.1 ("Growth and
          puberty") at PDF 5. Book p.84 was then rendered at PDF 88 and its
          printed folio reads 84. Every B1 citation below is a BOOK page.

   ============================================================================
   ⚠️⚠️ FINDING 0 — THE PUBLISHED CEILING OF 875 IS NOT A CEILING, IT IS
   ROUGHLY HALF THE CHAPTER. Two independent reasons, both measured.
   ============================================================================
   theory-plan.md sets this chapter at 875 = the whole of L5's cached text.
   That figure is honest about what extracts and wrong about what the chapter
   contains:

   1. **L5 IS A POISONING DECK. THE CHAPTER IS "ACCIDENTS AND POISONING."**
      The word `accident` appears in L5 only as a classification label and in
      the summary. Choking, suffocation, strangulation and drowning — the whole
      first half of the syllabus chapter's own title — are **not in the deck at
      all**. They are in the book, B1 p.84–85, and they are written here.
   2. **THE DECK'S SINGLE MOST IMPORTANT SLIDE EXTRACTS TO ZERO WORDS.**
      See FINDING 2.

   ⚠️ NO PADDED CONTENTS PAGE HERE — CHECKED, because `liver`'s ceiling turned
   out to be 35 % one Objectives slide printed eleven times. L5 has **no
   objectives slide, no ILO index and no repeated slide**. Its 29 slides carry
   28 distinct titles; only `Iron` (pp.15–16) and `Organophosphorus`
   (pp.17–18) repeat a title, and those are genuine two-part slides (clinical
   picture, then management), not reprints. **The honest extractable figure is
   the published one: 875 words by node `split(/\s+/)`, 856 by a fresh
   `pdftotext -layout` of the converted PDF.** Nothing was inflated and nothing
   needs subtracting. The ceiling is simply blind to the book and to the
   pictures.

   ⚠️ HOW THE BUDGET WAS THEREFORE SET. Per the brief, 875 is treated as a
   FLOOR and the band is 1,200–2,200. Predicted by the §14.1 planning sum:
   **17 entities x ~90 = 1,530**, plus **four framework slides costed one by
   one** (the management algorithm, the choking algorithm, ABCDE, the
   epidemiology plate ~ 340), plus **the antidote grid at rows x columns**
   (11 rows x 3 columns = 33 cells ~ 200). Predicted 1,900–2,100.
   ⚠️ THE MEASURED OUTCOME IS AT THE FOOT OF THIS HEADER AND WAS TAKEN LAST.

   ============================================================================
   ⚠️ FINDING 1 — THE L5 CACHE IS COMPLETE AND IS NOT CLIPPED. Two checks,
   because the usual one has a known blind spot.
   ============================================================================
   L5 is a `.pptx`, so theory-plan.md requires its XML-derived cache to be
   checked against a PDF render — the `14) Puberty` case, where the cache was
   33 % short. Converted with a FRESH PowerPoint COM instance (per the plan's
   cascade warning) to <scratch>\pois\poisoning.pdf, then:

   1. **Cache vs fresh `pdftotext -layout`:** cache **875** words, fresh
      extraction **856**. **PDF-only vocabulary = 1 token of 361 = 0.3 %**, and
      the one token is `lsymptoms`, a hyphenation artefact. The 19-word
      difference is the cache's own two-line `SOURCE:`/`SLIDES:` header plus
      slide-boundary markers. **CLEAN NEGATIVE — the cache is the whole text
      and it was not touched.** This is the `36)Myocardial` direction, not the
      `14) Puberty` direction.
   2. **The MediaBox blind spot, checked separately** (theory-plan.md's new
      section — pdftotext honours the MediaBox, so text overflowing a slide's
      bottom is dropped mid-sentence and BOTH sides of the diff lose it
      identically). Every page's last line was tested for a trailing article,
      preposition or conjunction. **CLEAN NEGATIVE — zero hits across all 29
      pages.** No MediaBox rewrite was attempted and none is owed.

   ⚠️ NEITHER CHECK WOULD HAVE FOUND FINDING 2, WHICH IS THE POINT.

   ============================================================================
   ⚠️⚠️ FINDING 2 — THE WHOLE DECK WAS RENDERED END TO END, AND THE SINGLE
   BIGGEST TEACHING OBJECT IN IT IS A 0-WORD PAGE.
   ============================================================================
   theory-plan.md scores `accidents` at **13 % blank slides**, the third
   LOWEST in the module, which under the old triage rule would have bought no
   render at all. The brief overrode that — small deck, render it end to end,
   stop filtering — and it was right. **All 29 pages at 110 dpi as EIGHT
   FOUR-UP CONTACT SHEETS, then p8 re-rendered at 300 dpi and p10 at 400 dpi
   before any number was transcribed.**

   ⚠️ WHAT THE RENDER RECOVERED — three items, and the first is the chapter:

     1. **p8 — THE ENTIRE MANAGEMENT ALGORITHM. 0 words in the cache.**
        Five stages, each with its own content box: identify the agent /
        determine toxicity / is reduction of absorption possible / are
        investigations indicated / clinical management. It carries
        **ACTIVATED CHARCOAL with its 1-hour window and the three agents it
        does NOT bind**, and **"Gastric lavage and induced vomiting no longer
        recommended"** — the exact facts the brief named as the floor, and
        **not one of them appears anywhere in the 875-word cache.** Proof:
        `charcoal`, `lavage`, `antidote` and `nomogram` all return **0 hits
        across all 64 cached paediatrics decks.** It is the book's Figure
        7.11, reproduced on B1 p.86. Written into acc-5 and acc-6.
     2. **p10 — THE PARACETAMOL TREATMENT NOMOGRAM.** A graph, so 0 words of
        it extract. Read at 400 dpi: plasma-paracetamol concentration
        **0–120 mg/L** on the left axis against **0–0.8 mmol/L** on the right,
        time **0–24 h**, and a labelled **"Treatment line" starting at
        100 mg/L at 4 hours** and falling to about 5 mg/L at 24 h. The
        4-hour origin is itself examinable and is invisible in text. acc-9.
     3. **p3 — THE AGENTS PLATE. 0 words.** Loose tablets, blister packs,
        **button batteries** and a stack of **rare-earth magnets**. The
        magnets are named nowhere in the deck's text and are a real ingestion
        hazard; they are noted in acc-13 and tagged, because the slide shows
        them without teaching them.

   ⚠️ A CLEAN NEGATIVE IS ALSO RECORDED. pp.29 and 30 are blank/end matter and
   p7 and p9 are bare section dividers — nothing was recovered from them, and
   the red rotated banner obscuring text on p26 is a layout artefact only: the
   sentence it covers ("Treatment is complex, particularly as lead is deposited
   in bone and therefore has a long half-life") is present in the cache in
   full and was verified there before being used.

   ============================================================================
   ⚠️ FINDING 3 — WHAT THE BOOK ADDS, AND WHY IT WAS OPENED AT ALL
   ============================================================================
   MEMORY.md's standing rule is that the book is the first place to look before
   filling a gap from general knowledge, driven by the contents page. Both
   paediatrics books are image-only (`pdftotext` returns 250 and 264 characters
   = one form feed per page). Their contents pages were rendered — **six pages
   of two books, the cheapest possible probe** — and B1's lists **"Accidents
   and poisoning ... 84"**, which is this chapter's own title, word for word.
   Book pp.84–86 were then rendered at 150 dpi, plus p.87 to fix the boundary.

   **BOUNDARY VERIFIED: the chapter is exactly pp.84–86.** p.87 opens
   "Pediatrics Emergencies" with its own eight-topic cover — a different
   chapter, which is the module's `emergencies`.

   What B1 contributes that L5 does not contain at all:
     - the **epidemiology and the Figure 7.1 mortality plate** (England and
       Wales 2018, total deaths 973, with the eight causes by percentage);
     - **choking, suffocation, strangulation and drowning** in full;
     - **Figures 7.7 and 7.8**, the choking algorithm and the thrust
       techniques;
     - the **trauma "C" note** — abdominal, pelvic and long-bone assessment.
   What it duplicates: **Figure 7.11 is the same algorithm as L5 p8.** It is
   written ONCE, in acc-5/acc-6, and cited to both.

   ============================================================================
   ⚠️ CROSS-CHAPTER BOUNDARIES — §14.5. NO ROW IN THE REGISTER IS ADDRESSED TO
   THIS CHAPTER, and the register was read end to end to confirm it.
   ============================================================================
   Two boundaries were checked against the MERGED chapters in
   app\data\theory.peds.js, not against an assumption:

     - **`emergencies` IS NOT YET WRITTEN** (it is absent from T_PEDS). The
       choking / basic-life-support material therefore has **no other home
       today**, and the book puts it in THIS chapter, so it is written here in
       full. ⚠️ REGISTER, owed the other way: when `emergencies` is written
       from `3) Pediatric resuscitation`, it should CROSS-REFERENCE acc-3
       rather than repeat the FBAO algorithm.
     - **`gi-abdopain` does NOT carry poisoning or caustic ingestion.** Its
       only `caustic` mention is one history line in `24)Abdominal pain`.
       Nothing is deferred to it.
   Greped across all 47 merged paediatrics chapters: `drowning`, `choking`
   (as an entity), `strangulation`, `suffocation` and `Heimlich` return **0**.
   Nothing here is duplicated anywhere in the module.

   ============================================================================
   ⚠️ GAPS ANSWERED AND TAGGED — the CLAUDE.md §4 contract, never declared
   ============================================================================
   Greped across ALL 64 cached decks before tagging anything, and greped the
   rendered book pages too — "read the slide before declaring a gap":

     - `kerosene`, `corrosive`, `caustic` (as a poison), `naloxone`, `opioid`
       (as a poison), `digoxin` (as a poison), `ipecac`, `petroleum` — **0
       hits corpus-wide.** ⚠️ `hydrocarbon` returns 2 hits and BOTH are the
       pneumonia decks listing it as a cause of ASPIRATION pneumonia, not as a
       poisoning — that near-miss is exactly the "a spelling can hide a hit"
       trap run in reverse, and it was read before being called a gap.
     - So **kerosene/hydrocarbons, corrosives and opioids are genuinely
       absent** and are written from general medical knowledge in acc-15,
       tagged on the claim. They are not optional: kerosene is the commonest
       childhood ingestion in Egypt, and the deck's own charcoal box names
       hydrocarbons without ever saying what to do about them.
     - **The deck says nothing about whether to induce emesis in hydrocarbon
       ingestion.** What it DOES say, on p8, is that induced vomiting is no
       longer recommended for ANY poisoning — which settles the question
       without naming kerosene. Both halves are written and the split between
       sourced and supplied is marked in acc-15.

   ⚠️ NO CONTRADICTION BETWEEN SLIDES WAS FOUND. The two-part Iron and
   Organophosphorus slides agree with each other, and L5 p8 agrees with B1
   p.86 word for word. Nothing had to be recorded as a disagreement.

   ============================================================================
   ⚠️ SPLIT DECISION — NO SPLIT. Stated explicitly, after measuring.
   ============================================================================
   See the MEASURED OUTCOME block below: the chapter prints at well under the
   ~13 pp hard shape, so it ships as one unit. Had a split ever been wanted the
   seam is obvious and clean — acc-1…acc-4 are Accidents (the book) and
   acc-5…acc-16 are Poisoning (the deck) — but at this size splitting would
   produce two chapters of three and seven pages for no benefit.

   qs: [] throughout — no paediatrics questions are filed under `accidents`.

   ============================================================================
   ⚠️⚠️ MEASURED OUTCOME — taken by running <scratch>\vth-acc.js over THIS FILE
   ON DISK as the genuinely LAST action, after the final edit. Not forecast,
   not carried over from the planning sum above, and not reconciled from a
   per-section breakdown.
   ============================================================================
     sections            16
     BODY WORDS          1,894
     intro               41 words (cap 50)
     printed pages       7.9 at the ÷240 estimator — against the ~13 pp shape
     against ceiling     1,894 / 875 published = 216 %, and see FINDING 0:
                         the published ceiling counts one of the chapter's two
                         sources and none of its pictures
     against the band    1,894 sits inside the brief's 1,200–2,200
     against prediction  predicted 1,900–2,100; measured 1,894, 0.3 % under
     weights             must 12, high 3, know 1
     tables              4 (incl. the 11-row antidote grid)
     flowcharts          2 (the poisoned child; the choking child)
     ### sub-headings    31
     Src lines           16 — exactly one per section
     qs all empty        yes
     paragraphs > 45 w   0
     unanchored leads    0
     tagged supplied     9 lines, 189 words = 10.0 % of body
   ============================================================================ */

var THEORY_DRAFT = {
  accidents: {
    intro: 'Two halves under one title. Accidents — choking, suffocation, strangulation, drowning — are the book’s, and are algorithms. Poisoning is the lecture’s, and is a five-step approach plus a table of agents. Every number in that table is examinable.',
    sections: [

{
  id: 'acc-1', w: 'must',
  h: 'How big the problem is, and the three kinds of poisoning',
  body: [
    '### The scale',
    '',
    '- **Accidental injury:** the **most common reason** for children and young people to **seek emergency healthcare**.',
    '- **External causes:** injuries and poisoning, so called because they depend **entirely on an extrinsic environmental factor** — a motor vehicle, a swimming pool.',
    '- **Worldwide:** external causes are the **leading cause of death in 1- to 15-year-olds**.',
    '- **In the UK:** they have declined enough to be **second, after malignant disease**.',
    '- **⚠️ But in 15- to 19-year-olds** external factors remain the **most common cause of death**.',
    '',
    '### Figure 7.1 — deaths aged 1 to 15, England and Wales 2018',
    '',
    '**Total deaths 973.** Malignant disease **25 %** · **external causes (injuries and poisoning) 15 %** · congenital anomalies **10 %** · neurological **10 %** · respiratory **10 %** · cardiac **7 %** · infectious **6 %** · other **17 %**.',
    '',
    '### The three kinds of poisoning',
    '',
    '- **Accidental:** the toddler pattern — exploratory, small quantities, usually one agent.',
    '- **Iatrogenic:** caused by treatment given.',
    '- **Intentional:** deliberate self-harm, and the adolescent pattern.',
    '',
    '- **⚠️ The age split is the whole of it:** poisoning in **young children is usually accidental**, in contrast to the **deliberate self-harm of young people and adults**.',
    '',
    'Src: B1 p.84 (Fig 7.1); L5 p.2'
  ].join('\n'),
  qs: []
},

{
  id: 'acc-2', w: 'must',
  h: 'Why severe accidental poisoning has fallen — and why adolescent poisoning has not',
  body: [
    '### The fall in young children',
    '',
    '**There has been a marked reduction in the incidence of severe poisoning from accidental ingestion by young children.** Two reasons are printed:',
    '',
    '- **Child-resistant containers:** for many **medicines and household products**, plus **blister packs** for medicines.',
    '- **Smaller packs:** a **reduction in the number of tablets available per pack** in **analgesics bought over the counter**.',
    '',
    '### The adolescent pattern is different in three ways',
    '',
    '- **The agents:** adolescents attempting self-harm ingest **medications commonly found in their environment** — **most often paracetamol and ibuprofen**.',
    '- **The quantity:** they are likely to have ingested **much larger quantities of tablets** than young children.',
    '- **The consequence:** they are therefore **more likely to suffer significant toxicological effects**.',
    '- **Recreational drugs:** vary **greatly in their potency and effects**, so the history predicts the toxicity poorly.',
    '',
    '### ⚠️ Who can go home',
    '',
    '**Young children exposed to agents of LOW TOXICITY who are ASYMPTOMATIC can usually be discharged with advice to return if symptoms develop.** Both conditions must hold — a low-toxicity agent in a symptomatic child is not covered by this rule.',
    '',
    'Src: L5 pp.4–6'
  ].join('\n'),
  qs: []
},

{
  id: 'acc-3', w: 'must',
  h: 'Choking, suffocation and strangulation',
  body: [
    '### Choking',
    '',
    '- **Why toddlers:** they have a **natural tendency to put objects in their mouths**, and their **airway diameter is small** and hence **more readily occluded**.',
    '- **The commonest cause:** **food** is the most common cause of **non-fatal choking**, **followed by toys**.',
    '',
    '### Suffocation',
    '',
    '- **The mechanism:** accidental suffocation from **playing with plastic bags or packaging**.',
    '',
    '### Strangulation',
    '',
    '- **In young children:** accidental — **clothes or bedding caught on furniture**.',
    '- **⚠️ In adolescents:** it is also a **method of attempting suicide**, so a strangulation injury in this age group is a mental-health presentation until proved otherwise.',
    '- **Prevention:** **product safety initiatives and public education campaigns**.',
    '',
    '- **⚠️ What survivors show:** **dysphonia (hoarseness)** · **difficulty swallowing** · **facial petechiae** · **neck oedema**.',
    '- **The late risk:** **hypoxic brain damage**, depending on the **duration of the asphyxia**.',
    '',
    'Src: B1 p.84'
  ].join('\n'),
  qs: []
},

{
  id: 'acc-4', w: 'must',
  h: 'The choking child — the algorithm and the two techniques',
  body: [
    '### The severity split decides everything',
    '',
    '- **Severe obstruction:** an **INEFFECTIVE cough**. The child cannot clear it and needs thrusts or CPR.',
    '- **Mild obstruction:** an **EFFECTIVE cough**. **Encourage the child to cough** and **do not intervene** — keep checking for deterioration until the obstruction clears or the cough becomes effective.',
    '',
    '### ⚠️ The technique differs by age, and the reason is anatomical',
    '',
    '|Age|Manoeuvre|',
    '|---|---|',
    '|**Older child, conscious**|**5 abdominal thrusts** — the **Heimlich manoeuvre**|',
    '|**Infant, conscious**|**5 back blows**, then **5 chest thrusts**|',
    '|**Either, unconscious**|**Start CPR**|',
    '',
    '- **Abdominal thrusts, how:** place a **fist against the child’s upper abdomen in the midline**, grasp it with the other hand, and **pull backwards and upwards** to expel air from the lungs.',
    '- **⚠️ Why infants get back blows and chest thrusts instead:** abdominal thrusts are **avoided in infants because of the risk of injury to the liver and spleen**.',
    '',
    'Src: B1 p.85 (Figs 7.7, 7.8 — both image-only, read at 150 dpi)'
  ].join('\n'),
  flow: {
    title: 'Management of the choking child (FBAO)',
    steps: [
      { k: 'step', t: 'Assess severity of the airway obstruction', n: 'Cough effective or ineffective?' },
      { k: 'decision', t: 'Is the cough EFFECTIVE?', yes: 'Mild obstruction', no: 'Severe obstruction' },
      { k: 'step', t: 'MILD: encourage to cough', n: 'Continue to check for deterioration until obstruction cleared or cough becomes effective' },
      { k: 'decision', t: 'SEVERE — is the child conscious?', yes: 'Give thrusts', no: 'Start CPR' },
      { k: 'step', t: 'CONSCIOUS child: 5 abdominal thrusts', n: 'Heimlich — fist in the midline of the upper abdomen, pull backwards and upwards' },
      { k: 'step', t: 'CONSCIOUS infant: 5 back blows, then 5 chest thrusts', n: 'No abdominal thrusts — risk of liver and spleen injury' },
      { k: 'alert', t: 'UNCONSCIOUS: start CPR', n: 'Do not wait for the obstruction to clear' }
    ]
  },
  qs: []
},

{
  id: 'acc-5', w: 'must',
  h: 'Drowning',
  body: [
    '- **The definition:** **respiratory impairment produced by SUBMERSION or IMMERSION in liquid**.',
    '',
    '### Where it happens, by age',
    '',
    '- **Babies and toddlers:** **domestic situations** — **baths, paddling pools, garden ponds**.',
    '- **Older children:** **away from home** — **canals, lakes and the sea**.',
    '',
    '### What happens, and what changes the outcome',
    '',
    '- **⚠️ Once submerged:** **asphyxiation occurs WITH OR WITHOUT aspiration of water.** Dry drowning kills the same way.',
    '- **The avoidable share:** **up to 30 % of fatalities can be avoided by skilled on-scene resuscitation.**',
    '',
    '### ⚠️ The cold-water rule — the one that changes what you do',
    '',
    '**If the water is cold, the resulting HYPOTHERMIA can have a PROTECTIVE EFFECT.** So **even in the presence of fixed dilated pupils, resuscitation should continue until the child is warmed up to a normal body temperature**, because **recovery may still be possible**.',
    '',
    '*In other words the usual signs of irreversible brain death cannot be trusted in a cold child — nobody is dead until they are warm and dead.*',
    '',
    'Src: B1 p.85'
  ].join('\n'),
  qs: []
},

{
  id: 'acc-6', w: 'must',
  h: 'The poisoned child — the five-step approach',
  body: [
    '### 1. Identify the agent',
    '',
    '- **Ask:** **question the parents, the child, or the young person**.',
    '- **When the history is unclear:** **clinical symptoms and signs may help** identify the agent.',
    '',
    '### 2. Determine the toxicity of the agent — four things to consider',
    '',
    '- **Intrinsic toxicity:** of the agent itself — **use the poisons information service**.',
    '- **Reported dose ingested.**',
    '- **Presence of symptoms.**',
    '- **Time since ingestion.**',
    '',
    '### 3. Is reduction of absorption possible or indicated?',
    '',
    '*The whole of this step is acc-7.*',
    '',
    '### 4. Are investigations indicated?',
    '',
    '*Also acc-7.*',
    '',
    '### 5. Clinical management — mainly determined by the toxicity of the agent',
    '',
    '- **Specific management** including the **antidote, as directed by the poisons information service**.',
    '- **⚠️ Assessment of the circumstances of the ingestion**, which is **important to prevent future recurrence**.',
    '- **⚠️ Assessment by a child and adolescent psychiatrist or mental health services** in cases of **deliberate self-harm**.',
    '',
    'Src: L5 p.8 (0-word slide, recovered by render at 300 dpi) = B1 p.86 (Fig 7.11) — one figure, two sources, written once'
  ].join('\n'),
  flow: {
    title: 'Outline of management of the poisoned child',
    steps: [
      { k: 'step', t: 'Identify the agent', n: 'Question parents, child or young person; signs may help where the history is unclear' },
      { k: 'step', t: 'Determine toxicity of the agent', n: 'Intrinsic toxicity (poisons information service) · dose ingested · symptoms present · time since ingestion' },
      { k: 'decision', t: 'Is reduction of absorption possible / indicated?', yes: 'Activated charcoal if within 1 h', no: 'Move to investigations' },
      { k: 'alert', t: 'Gastric lavage and induced vomiting are NO LONGER RECOMMENDED', n: 'Charcoal is ineffective for iron, hydrocarbons and pesticides' },
      { k: 'step', t: 'Are investigations indicated?', n: 'Bloods by mechanism · ECG if cardiovascular toxicity · levels only for paracetamol, iron, salicylates, alcohol' },
      { k: 'step', t: 'Clinical management, determined by the toxicity of the agent', n: 'Antidote as directed · assess the circumstances to prevent recurrence' },
      { k: 'alert', t: 'Deliberate self-harm: refer to child and adolescent psychiatry', n: 'The ingestion is a symptom; the mental-health assessment is the treatment' }
    ]
  },
  qs: []
},

{
  id: 'acc-7', w: 'must',
  h: 'Reducing absorption, and the investigations that are actually useful',
  body: [
    '### ⚠️ Activated charcoal — three facts, all examinable',
    '',
    '- **Why it works:** its **high surface area leads to adsorption of many drugs**.',
    '- **The time window:** it **can be effective in reducing absorption of the toxic agent if administered WITHIN 1 HOUR of ingestion**.',
    '- **⚠️ What it does NOT bind:** it is **ineffective for IRON, HYDROCARBONS and PESTICIDES**.',
    '',
    '### ⚠️ What is no longer done',
    '',
    '**GASTRIC LAVAGE AND INDUCED VOMITING ARE NO LONGER RECOMMENDED.** The deck states this flatly, with no time window and no exception, so there is nothing to memorise about lavage contraindications — the procedure itself is off the algorithm.',
    '',
    '*This is the single most likely thing on the slide to be asked as a negative-stem question.*',
    '',
    '### Investigations',
    '',
    '- **General blood tests:** e.g. **full blood count, renal and liver function** — **dependent on the mechanism and likelihood of toxicity**.',
    '- **ECG:** for **drugs with cardiovascular toxicity**.',
    '- **⚠️ Specific blood concentrations are only helpful for FOUR agents:** **paracetamol, iron, salicylates and alcohol**.',
    '- **⚠️ Urine toxicology screen:** **not helpful in the acute situation**, but **may help to confirm the diagnosis**.',
    '',
    'Src: L5 p.8 (render) = B1 p.86 (Fig 7.11)'
  ].join('\n'),
  qs: []
},

{
  id: 'acc-8', w: 'high',
  h: 'ABCDE in the poisoned child',
  body: [
    '### A and B — airway and breathing: look, listen and feel for',
    '',
    '**Airway obstruction or respiratory distress · work of breathing (respiratory effort) · respiratory rate · stridor, wheeze · auscultation for air entry · cyanosis · oxygen saturation.**',
    '',
    '### C — circulation: feel and assess',
    '',
    '**Heart rate · pulse volume · capillary refill time · blood pressure.**',
    '',
    '- **⚠️ In TRAUMA, "C" also means:** **abdominal examination**, **assessment for pelvic bony injury**, and **identification of any suspected long bone fractures** — plus **intracranial injuries in infants**.',
    '- **Why:** **large volumes of blood can be lost into these body cavities**, so a normal external survey does not exclude haemorrhagic shock.',
    '',
    '### D — disability: observe and note',
    '',
    '- **Level of consciousness:** by **AVPU**.',
    '- **Posture:** **hypotonia**, **decorticate**, **decerebrate**.',
    '- **Pupil size and reactivity.**',
    '',
    '### E — exposure',
    '',
    '*Named on the slide without elaboration; in a poisoning it is what finds the patch, the tablets in the pocket and the rash.*',
    '',
    'Src: L5 pp.20–22; B1 p.84 (the trauma "C" note)'
  ].join('\n'),
  qs: []
},

{
  id: 'acc-9', w: 'must',
  h: 'The antidote and specific-treatment table',
  body: [
    '**This is the table the exam is built from. Every figure in it is printed on L5 except the four rows marked with a dagger, which are supplied.**',
    '',
    '|Poison|The number or marker|Specific treatment|',
    '|---|---|---|',
    '|**Paracetamol**|**Plasma paracetamol concentration**; treatment line **100 mg/L at 4 h**|**IV acetylcysteine** if the concentration is high or liver function abnormal|',
    '|**Iron**|**Serious toxicity if >75 mg/kg elemental iron** ingested; **serum iron at 4 h** is the best measure of severity|**IV deferoxamine** in moderate-to-severe toxicity|',
    '|**Organophosphates**|No level given|**Atropine, often in large doses** + **pralidoxime** to reactivate acetylcholinesterase|',
    '|**Salicylates**|**Plasma salicylate 2–4 h** after ingestion|**Alkalinization of the urine**; **haemodialysis** also removes salicylate|',
    '|**Tricyclic antidepressants**|No level given|**Sodium bicarbonate** for the arrhythmias; **support breathing**|',
    '|**Carbon monoxide**|No level given|**High-flow oxygen**; **hyperbaric oxygen role unclear**|',
    '|**Alcohol**|**Blood alcohol level** may predict severity|**Monitor and correct blood glucose**; **support ventilation**|',
    '|**Button battery**|Position on **CXR and AXR**|**Endoscopic removal** if oesophageal, failing to pass, or symptomatic|',
    '|**Lead**|No level given on the deck|**Prevent further exposure** first; **chelation** for acute symptoms|',
    '|**Opioids** †|Respiratory rate, pinpoint pupils|**Naloxone**, titrated and repeated — its half-life is shorter than most opioids|',
    '|**Kerosene / hydrocarbons** †|Chest signs, CXR|**Supportive only.** No antidote, no charcoal, **no induced emesis**|',
    '',
    '**† Not taken from the course material** — see acc-15 for why these two are written in anyway.',
    '',
    '*The three agents with NO antidote at all — CO, alcohol, TCA — are treated by supporting the physiology instead. That is a distinction worth holding: an antidote question is often really asking which poisons have none.*',
    '',
    'Src: L5 pp.10–19, 26 — the whole "Some poisons and their treatment" run, gathered into one grid'
  ].join('\n'),
  qs: []
},

{
  id: 'acc-10', w: 'must',
  h: 'Paracetamol — the commonest, and the one with a graph',
  body: [
    '### The two-phase clinical picture',
    '',
    '- **Early:** **abdominal pain, vomiting**.',
    '- **⚠️ Later, 12 h to 24 h:** **liver failure**.',
    '- **Why the gap matters:** the child who looks well at four hours is not reassuring, because the hepatic phase has not started yet.',
    '',
    '### Management',
    '',
    '- **Risk assessment:** by **measuring the plasma paracetamol concentration**.',
    '- **Treatment:** **intravenous acetylcysteine** if the **concentration is high OR liver function is abnormal**.',
    '',
    '### ⚠️ The treatment nomogram — read off the graph, which extracts as nothing',
    '',
    '- **The axes:** **plasma paracetamol concentration 0–120 mg/L** on the left, the same in **mmol/L 0–0.8** on the right, against **time 0–24 hours**.',
    '- **⚠️ The treatment line STARTS AT 100 mg/L AT 4 HOURS** and falls away, reaching roughly **5 mg/L at 24 h**.',
    '- **⚠️ What the 4-hour origin means:** a level taken **before 4 hours cannot be plotted** and does not exclude toxicity. Absorption is incomplete, so an early level reads falsely reassuring.',
    '- **Above the line:** treat. **Below it:** the risk is low at that time point.',
    '',
    'Src: L5 p.10 (the graph is image-only, read at 400 dpi)'
  ].join('\n'),
  qs: []
},

{
  id: 'acc-11', w: 'must',
  h: 'Iron — the poisoning with a deceptive middle',
  body: [
    '### ⚠️ Three phases, and the middle one is the trap',
    '',
    '- **Initial:** **vomiting, diarrhoea, haematemesis, melaena, acute gastric ulceration** — a corrosive gastritis.',
    '- **⚠️ Then a LATENT PERIOD OF IMPROVEMENT.** The child appears to recover. This is where a discharge decision is wrongly made.',
    '- **6–12 h later:** **drowsiness, coma, shock, liver failure with hypoglycaemia, and convulsions**.',
    '- **Long term:** **gut strictures**.',
    '',
    '### The numbers',
    '',
    '- **Threshold:** **serious toxicity if more than 75 mg/kg of ELEMENTAL iron** has been ingested — elemental, not tablet weight.',
    '- **The test:** the **serum iron level 4 hours after ingestion is the best laboratory measure of severity**.',
    '',
    '### Treatment',
    '',
    '- **The chelator:** **intravenous deferoxamine chelates iron** and **should be administered in cases of moderate-to-severe toxicity**.',
    '- **⚠️ Charcoal is useless here** — iron is one of the three agents it does not bind.',
    '',
    'Src: L5 pp.15–16; charcoal exclusion L5 p.8'
  ].join('\n'),
  qs: []
},

{
  id: 'acc-12', w: 'must',
  h: 'Organophosphates — the cholinergic crisis',
  body: [
    '### Cholinergic effects',
    '',
    '**Salivation · lacrimation · urination · diarrhoea and vomiting · muscle weakness, cramps and paralysis · bradycardia · hypotension.**',
    '',
    '*That list is the classic secretory picture: everything wet, a slow heart, and weak muscles.*',
    '',
    '### Central nervous system effects',
    '',
    '**Seizures and coma.**',
    '',
    '### Treatment — three limbs, in order',
    '',
    '- **Supportive care** first.',
    '- **Atropine, often in LARGE DOSES:** as an **anticholinergic agent**, opposing the muscarinic effects.',
    '- **Pralidoxime:** **to REACTIVATE acetylcholinesterase** — the two drugs do different jobs and are not alternatives.',
    '',
    '- **⚠️ Charcoal is ineffective for pesticides**, the third of its three exclusions.',
    '',
    '### The chronic side, from the same class',
    '',
    '**Chronic exposure to organophosphate and carbamate pesticides has adverse effects on neurodevelopment and behaviour.** There is also **evidence associating some pesticides with an increased incidence of leukaemia and brain tumours**.',
    '',
    'Src: L5 pp.17–18, 27; charcoal exclusion L5 p.8'
  ].join('\n'),
  qs: []
},

{
  id: 'acc-13', w: 'must',
  h: 'Salicylates, tricyclics, carbon monoxide and alcohol',
  body: [
    '### Salicylates',
    '',
    '- **Early:** **vomiting, tinnitus**.',
    '- **⚠️ Later:** **respiratory alkalosis FOLLOWED BY metabolic acidosis** — the order is the examinable part.',
    '- **The level:** **plasma salicylate 2–4 h after ingestion** helps estimate toxicity.',
    '- **Treatment:** **alkalinization of the urine increases excretion**; **haemodialysis also effectively removes salicylate**.',
    '',
    '### Tricyclic antidepressants',
    '',
    '- **Early:** **tachycardia, drowsiness, dry mouth** — the anticholinergic triad.',
    '- **Later:** **arrhythmias, seizures**.',
    '- **Treatment:** **sodium bicarbonate** for the arrhythmias; **support breathing**.',
    '',
    '### Carbon monoxide',
    '',
    '- **Early:** **headache, nausea**.',
    '- **Later:** **confusion, drowsiness leading to coma**.',
    '- **Treatment:** **high-flow oxygen to hasten dissociation of carbon monoxide**. **The role of hyperbaric oxygen therapy is unclear.**',
    '',
    '### Alcohol — accidental, or experimenting by older children',
    '',
    '- **The triad:** **hypoglycaemia · coma · respiratory failure**.',
    '- **Treatment:** **monitor blood glucose and correct if necessary**; **support ventilation if required**; **blood alcohol levels may help predict severity**.',
    '',
    'Src: L5 pp.12–14, 19'
  ].join('\n'),
  qs: []
},

{
  id: 'acc-14', w: 'must',
  h: 'Button batteries — and the plate that also shows magnets',
  body: [
    '### Why a battery is not just a foreign body',
    '',
    '- **Presentation:** **abdominal pain**.',
    '- **⚠️ The complications:** **gut perforation and stricture formation**.',
    '',
    '### Management',
    '',
    '- **Imaging:** **X-ray of the chest AND abdomen** — to **confirm ingestion and identify the position**.',
    '- **⚠️ Endoscopic removal is recommended if:** it is **in the oesophagus**, **the object fails to pass**, **or symptoms are present** — e.g. **abdominal pain or melaena**.',
    '',
    '*Oesophageal lodgement is the emergency: the battery burns through the wall in hours, which is why position, not size, decides.*',
    '',
    '### ⚠️ The agents plate also shows rare-earth magnets',
    '',
    'L5 p.3 is a wordless photograph of the agents children swallow: loose tablets, blister packs, button batteries and **a stack of small rare-earth magnets**. The magnets are shown and never discussed.',
    '',
    '**Two or more magnets swallowed separately attract each other across bowel loops, trapping the wall between them and causing pressure necrosis, fistula and perforation** *(not taken from the course material)*. One magnet is usually harmless; two is a surgical emergency.',
    '',
    'Src: L5 p.11; the agents plate L5 p.3 (0-word slide, recovered by render)'
  ].join('\n'),
  qs: []
},

{
  id: 'acc-15', w: 'must',
  h: 'Chronic environmental poisoning — lead',
  body: [
    '### Why children are more vulnerable than adults — three reasons',
    '',
    '- **Behaviour:** **hand-to-mouth activities during play and meals**.',
    '- **Size:** their **small body size makes them more susceptible to doses that would not harm an adult**.',
    '- **⚠️ The brain:** their **developing brains are at greater risk of permanent damage** from the **neurotoxic effects of exposure**.',
    '',
    '### Symptoms of chronic lead exposure',
    '',
    '- **Behavioural changes.**',
    '- **Hyperactivity or decreased activity** — it runs in both directions.',
    '- **⚠️ Developmental delay, or LOSS of developmental milestones** — regression, not just delay.',
    '- **Chronic lead nephropathy.**',
    '',
    '### More significant exposure',
    '',
    '**Abdominal pain, vomiting, constipation · headache and ataxia · lethargy, seizures and coma.**',
    '',
    '### ⚠️ Treatment — the order is the answer',
    '',
    '- **First and most important:** **prevent further exposure to lead.**',
    '- **Chelation therapy:** **can be effective in reversing acute symptoms such as encephalopathy**.',
    '- **⚠️ Why it is not curative:** **treatment is complex, particularly as lead is deposited in BONE and therefore has a LONG HALF-LIFE**, so the body reloads the blood from its own skeleton.',
    '',
    'Src: L5 pp.23–26'
  ].join('\n'),
  qs: []
},

{
  id: 'acc-16', w: 'high',
  h: 'Three agents the deck names without teaching, and one it never names',
  body: [
    '**Everything in this section is tagged. It is written because the deck creates the questions and does not answer them, not to add material for its own sake.**',
    '',
    '### ⚠️ Kerosene and other hydrocarbons — the commonest ingestion locally',
    '',
    '- **Why it is here:** L5 p.8 names **hydrocarbons** among the three agents charcoal does not bind, and then says nothing further. Greped across all 64 cached decks, **`kerosene`, `petroleum` and `corrosive` return zero hits**; the only two `hydrocarbon` hits are the pneumonia decks listing it as a cause of **aspiration pneumonia**.',
    '- **The danger is the LUNG, not the gut:** low viscosity and low surface tension mean a tiny aspirated volume spreads over a huge alveolar surface and causes **chemical pneumonitis** *(not taken from the course material)*.',
    '- **⚠️ DO NOT induce emesis and DO NOT lavage** — both risk aspirating it *(not taken from the course material)*. **The deck already forbids both for every poisoning**, which settles it from the sourced side too.',
    '- **Management:** **supportive, with oxygen and a chest film**; charcoal is useless *(not taken from the course material, except the charcoal exclusion, which is L5 p.8)*.',
    '',
    '### Corrosives — acids and alkalis',
    '',
    '- **⚠️ Neutralise nothing, dilute little, and never induce vomiting** — a second passage burns the oesophagus again *(not taken from the course material)*.',
    '- **The risk:** **oesophageal stricture**, which is why **endoscopy** grades the injury *(not taken from the course material)*.',
    '',
    '### Opioids',
    '',
    '- **The triad:** **pinpoint pupils, respiratory depression and coma** *(not taken from the course material)*.',
    '- **The antidote:** **naloxone**, titrated and repeated, because **its half-life is shorter than that of most opioids** and the child can re-sedate *(not taken from the course material)*.',
    '',
    'Src: kerosene charcoal exclusion L5 p.8; everything else supplied and tagged in place'
  ].join('\n'),
  qs: []
},

{
  id: 'acc-17', w: 'know',
  h: 'The summary the lecture ends on, and the social question',
  body: [
    '### The five closing statements',
    '',
    '- **Who:** accidental poisoning is **common in toddlers and young children**.',
    '- **The other group:** **older children may ingest potentially harmful substances as a form of self-harm, or as part of risk-taking behaviour**.',
    '- **⚠️ Reassurance:** **most substances do not cause serious harm.**',
    '- **The method:** when an ingestion has occurred, **identify the agent and assess its toxicity to plan management** — which is steps 1 and 2 of acc-6.',
    '- **⚠️ The last one is the one that gets forgotten:** **assess the social circumstances behind why it happened.**',
    '',
    '### Why the social question is clinical, not administrative',
    '',
    'The algorithm makes the same point twice from the other end: **assessment of the circumstances of ingestion is important to prevent future recurrence**, and **deliberate self-harm requires assessment by a child and adolescent psychiatrist or mental health services**.',
    '',
    '*A toddler who reaches a bottle once will reach it again; an adolescent who takes an overdose has a mental-health diagnosis that the ingestion is only the presenting sign of. Neither is treated by the antidote. See `mental` for the referral side.*',
    '',
    'Src: L5 p.28; L5 p.8 (render) = B1 p.86'
  ].join('\n'),
  qs: []
}

    ]
  }
};
