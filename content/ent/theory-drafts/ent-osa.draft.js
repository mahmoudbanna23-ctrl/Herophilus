/* ent-osa — "Snoring and obstructive sleep apnoea", ENT. Written from
   scratch 2026-08-14 under START-HERE.md §14 (slide-density revision notes).
   No v1 existed. 10 linked questions — the smallest set in the module.

   ⚠️ A DEDICATED LECTURE EXISTS AND IT IS THE WHOLE CHAPTER.
   `content\ent\lectures\` was LISTED, not remembered (§"list the directory
   before citing a filename", which has been wrong three times in this
   project). It holds 34 cached files and one of them is
   **`L9) Snoring & OSA.txt`** — Prof. Alaa Gaafar, 1,131 words over 312
   lines, a full prose deck running definitions → incidence →
   pathophysiology → risk factors → aetiology → presentation →
   complications → assessment → polysomnography → management → surgery →
   key points. This is NOT the `ent-sinuscomp` case: there is no missing
   `L28` here, and nothing in this chapter is written blind.

   ⚠️ §14.5 REGISTER — CHECKED, AND IT OWES THIS CHAPTER NOTHING.
   Greped `START-HERE.md` for `ent-osa`: **zero rows.** (Two `osa` substring
   hits exist at lines 927 and 937 and both are inside the word "mucosal";
   neither is a chapter id.) Every row of the register was also read by eye
   for an unnamed OSA promise — none. **`ent-osa` is therefore the first
   chapter in the module with NO inheritance**, exactly as the brief
   suspected, and it is stated here as a verified result rather than an
   assumption.

   ──────────────────────────────────────────────────────────────────────────
   BUDGET — §14.1 as revised 2026-08-14,
       budget = max( summed lecture words , 25 x linked question count ),
       floor 600, cap 3,000. BOTH TERMS MEASURED FROM DISK BEFORE WRITING,
       BY LINE RANGE (`sed -n 'a,b p' | wc -w`).

     TERM 1 — the lecture words this chapter RESTS ON.

       L9) Snoring & OSA — file total 1,131 w / 312 lines.

         CLAIMED — lines 26–295 = **938 w over 190 non-blank lines.**
           The whole body of the deck: the two definitions and the
           obstructive/central split · the incidence figures · the
           pathophysiology · the four risk factors with their mechanisms ·
           the four-level aetiology · the presentation slide · the four
           complication groups · clinical assessment (symptoms, general
           examination with its two numeric thresholds, the three-level ENT
           examination) · flexible nasopharyngolaryngoscopy and DISE · the
           radiology heading · both polysomnography slides with the six
           channels, the four reported indices and the severity grid · the
           five management slides (lifestyle, medications, appliances, CPAP
           with its four limitations) · and all seven surgical slides.

         NOT CLAIMED — lines 1–2 (6 w), the cached SOURCE line.
         NOT CLAIMED — lines 3–9 (18 w), the title block. No examinable fact.
         NOT CLAIMED — lines 10–25 (66 w), the eight-item ILO block. ⚠️ It is
           a CONTENTS LISTING for the body already claimed, so counting it
           bills the same content twice inside one file. Declined on the
           `ent-swallow` precedent, which declined L7’s ILO index for exactly
           this reason.
         NOT CLAIMED — lines 296–312 (103 w), the "Key points" slide. ⚠️ Same
           argument in its other form: it is a six-bullet SUMMARY of the body
           above it, and claiming it would bill the deck twice. Declined —
           **but two facts appear there and NOWHERE else in the deck, and
           both are written anyway at nil cost to the budget**: (1) untreated
           OSA raises the risk of **DM**, which the complications slide does
           not list; (2) surgery is tailored to the site of obstruction
           **"documented by DISE"**, which is the only place the deck links
           DISE to the operative decision. §14.1’s direction is explicit —
           the budget may understate a chapter, never overstate it.

       ⚠️ AN HONEST DEFLATION OF THE 938, DECLARED RATHER THAN QUIETLY USED.
         The claimed range contains **18 lines of repeated running slide
         titles** — "Assessment of patients with snoring /OSA" x8 and
         "Management of snoring /OSA" x10 — plus the photo slide **"Famous
         snorers in history"** (4 w, zero content) and the bare heading
         **"3. Radiological assessment of the upper airway"** over a figure
         with no prose at all. That is **~112 words of repetition and caption
         carrying no fact**, so the deck’s real prose content is **~826 w**.
         Stated because it moves the budget DOWN, not up. Neither 938 nor 826
         changes which term governs, and the plan below was costed against
         the smaller figure.

       NOT COUNTED, CITED ONLY (§14.1: "do not count a lecture you cite
       once… count what the chapter RESTS ON, cite the rest"):
         · L3) DISEASES OF THE TONSILS & ADENOIDS, 2,290 w — the paediatric
           consequence slides (chronic CO₂ retention → lassitude, dullness,
           nightmares, nocturnal enuresis · dry lips, tongue and pharynx ·
           dental caries · retarded general growth · "SNORING +/- Sleep
           apnea" · obstructive sleep-disordered breathing as the commonest
           indication for adenoidectomy). **The whole of L3 is counted in
           `ent-tonsils`, which is merged**, and re-counting it here would be
           the exact §14.1(b) double-bill. Four of my ten questions rest on
           these ~40 words and they are written in `osa-6` on the SLEEP axis;
           the adenoid as a disease, adenoid facies, adenoid grading and the
           adenoidectomy technique/complication grids stay `ent-tonsils`’s
           (`tons-2`, `tons-9`, `tons-13`, `tons-14`, all read on disk before
           writing, not assumed).
         · L6) Stridor and tracheostomy, 1,476 w — one clause only, "Weight
           loss, chest deformity (Pectus excavatum)" as a surgical indication
           in chronic paediatric airway obstruction. Cited in the defect note
           in `osa-6`. `ent-stridor`’s deck.
         · L12) Pediatric Laryngeal Lesions — one clause, "Chest deformity"
           among the laryngomalacia surgical indications. Same defect note.
           `ent-paedlar`’s deck.

     TERM 2 — 25 x 10 linked questions = **250 words.**

     max(938 , 250) = **938. TERM 1 GOVERNS, by 688 words.**
     ⚠️ THE QUESTION TERM IS MEANINGLESS HERE, exactly as the brief
     predicted: 10 questions cannot price a full prose lecture. **The 600
     floor does NOT bind** — it would have, had L9 not existed. Cap 3,000
     not reached.

   DIAGRAM-DECK TEST (§14.1 — words per non-blank line; under ~2 means the
   word count is an artefact of a labelled-diagram deck and TERM 2 should be
   used instead). Measured on the same denominator for all three:
       L9, claimed range 26–295   938 w / 190 lines = **4.94 w per line**
       L22 (the deck the second term was invented for)  538 / 227 = 2.37
       L4  (dense prose reference)                    1,476 / 245 = 6.02
   **NOT a diagram deck.** TERM 1 is a real measurement of this subject’s
   size and is used as the target. One qualification in the other direction,
   already priced above: 112 of the 938 are repeated running titles.

   ⚠️ FRAMEWORK / ENTITY FLOOR, COUNTED BEFORE WRITING (§14.1 — say the
   overrun up front; cost FRAMEWORK slides one by one because an entity count
   alone under-predicts; cost a COMPARISON GRID at rows x columns).
   **This chapter has essentially ONE disease entity and fifteen frameworks**
   — which is the `ent-swallow` / `ent-neck` shape, not the `ent-dysph` one.

      1  the two definitions + obstructive vs central (2 x 2 grid)        70
      2  incidence figures + the primary-snorer/SRBD spectrum             70
      3  pathophysiology — partial vs complete, the two causes            60
      4  risk factors — 4 rows x 2 cols, each with its stated mechanism   90
      5  aetiology by level — 4 levels, ~14 named causes                 110
      6  THE ADULT vs CHILD GRID — 6 rows x 3 cols = 18 cells            140
      7  presentation — 6 items incl. the 60/85 dB figures                70
      8  complications — 4 groups, ~11 items, + DM + the weight rule     110
      9  the paediatric consequence set + the thirst discriminator
         + the chest-deformity defect                                    150
     10  clinical assessment — symptoms, general exam with 2 numeric
         thresholds, 3-level ENT examination                             120
     11  Epworth (supplied — 0 hits corpus-wide)                          50
     12  endoscopy — flexible NPL vs DISE, 2 x 3                          70
     13  polysomnography — 6 channels, 4 indices, 3-row severity grid,
         AHI and hypopnoea definitions (supplied), effort channel        170
     14  management ladder — lifestyle 6, medications, appliances        100
     15  CPAP — indication, mechanism, 4 limitations                      80
     16  surgery — indications + the 7-row LEVEL→OPERATION table         160
     17  palatal procedures — RF, UPPP, LAUP, expansion PPP              130
     18  tongue base + hypoglossal stimulator + tracheostomy             110
      = **~1,760 words of floor against a 938-word budget — 88 % over,
        BEFORE a word of prose.** Said here, in advance, as required.

   Against the acceptance test that actually governs (§14.1 as revised —
   PAGES, divided by 240, the densest observed, so the estimate never
   under-predicts): 1,760 ÷ 240 = **~7.3 pages**, well inside the ~10-page
   ceiling and well inside the ~2,400-word OPERATIVE CEILING. The plan was
   therefore to write to the floor, not to the 938, and not to pad toward
   2,400 — a short chapter is a correct outcome here.

   ⚠️ MEASURED OUTCOME — taken with §14’s own validator on the file AS IT
   STANDS ON DISK, AND RE-TAKEN AFTER THE LAST EDIT (§14.1’s `ent-rhin` and
   `ent-vocal` warnings: the header is a claim, the file is the fact, and a
   per-section breakdown that reconciles proves only that the numbers came
   from ONE state of the file, never the LAST state):

       body 2,107 words over 10 sections · intro 40 words · 10/10 linked

   Per-section, measured in the SAME run as that total, AFTER the last edit:
     osa-1 178 · osa-2 169 · osa-3 150 · osa-4 166 · osa-5 165 · osa-6 308 ·
     osa-7 189 · osa-8 319 · osa-9 183 · osa-10 280.

   ⚠️ THE FIRST DRAFT MEASURED **2,406** AND ONE COMPRESSION PASS TOOK IT TO
   2,107 — 299 words out, all of it framing sentences, teaching voice, and
   bullets that restated a table already above them (§14.3’s banned list).
   **No fact left in that pass**; the section count, the tables and the links
   are unchanged. This paragraph was rewritten from the validator run made
   AFTER that pass, not before it, and the total was re-taken once more after
   this very edit (§14.1’s `ent-rhin` and `ent-vocal` warnings).

   Against the budget: 2,107 − 938 = **1,169 over, +124.6 %**, and 1,075 over
   §14.1’s 10 % tolerance of 1,032. REPORTED, NOT HIDDEN. It is also **347
   over this header’s own pre-writing floor of 1,760 (+19.7 %)** — the gap is
   the three comparison grids, which were costed at one line each and are in
   fact 2x3, 6x3 and 4x3 cells, the same under-prediction `ent-phon` made.
   Against the page test: 2,107 ÷ 240 = **~8.8 estimated pages** — inside the
   ~10-page ceiling and 293 words under the ~2,400 operative ceiling.
   ⚠️ Reaching the strict 938 would cost, itemised: the whole surgical half
   (`osa-10`, the level→operation table and the four palatal procedures L9
   spends SEVEN slides on), the paediatric consequence set that four of the
   ten questions key, and the polysomnography severity grid. That is §14.1’s
   forbidden trade — the budget is a ceiling on words, never a licence to
   delete a protected fact.

   ──────────────────────────────────────────────────────────────────────────
   MY OWN DEFERRALS (§14.5) — named, so each is a promise not a deletion.
   Each was checked against all 10 of this chapter’s questions: none tests it.

     · **NOTHING IS DEFERRED ONWARD FROM L9.** The deck is this chapter end to
       end; there is no half of it that belongs to another chapter, which is
       why no words come out of TERM 1 under §14.1(b). Two boundaries are
       RESPECTED rather than deferred, because the receiving chapters are
       already merged and already carry the material — verified on disk in
       `app\data\theory.ent.js`, not assumed:
         – **the adenoid as a disease** — adenoid facies, the two obstructions,
           grading, diagnosis, and the adenoidectomy indication / technique /
           complication grids — is written in `ent-tonsils` `tons-2`, `tons-9`,
           `tons-13`, `tons-14`. L9 prints only the bare words
           "Adenoidectomy." and "Tonsillectomy. Laser Tonsillotomy.", which
           are kept HERE solely as rows of the level→operation map.
         – **nasal obstruction as a symptom and its work-up** is
           `ent-nasalobs`’s (`nobs-1`–`nobs-3`, `nobs-7`). L9’s nasal causes
           (DNS, inferior turbinate hypertrophy, polyp) are kept here as the
           FIRST LEVEL of OSA obstruction, which is what two questions key.
         – the paediatric airway as a subject is `ent-paedlar`’s. Not touched.

   ──────────────────────────────────────────────────────────────────────────
   COVERAGE FLOOR KEPT BOTH WAYS (§14.2).
     Side 1 — every fact, number, list and named procedure stated by L9 lines
     26–295 is in the notes. Nothing from the claimed range was dropped; the
     two unique facts from the declined Key-points slide are written too.
     Side 2 — all 10 questions’ KEY and DISCRIMINATOR appear as a line or a
     cell:
       · polysomnography investigates sleep apnoea (x2 questions) → `osa-8`
       · commonest cause in CHILDREN = adenoid ± tonsils (x2) → `osa-3`,
         `osa-4`
       · commonest cause in ADULTS = marked obesity → `osa-2`, `osa-4`
       · child with OSA has all EXCEPT thirst → `osa-6` (the discriminator is
         the ROUTE: hypoxia/CO₂ vs drying, written as a two-row split)
       · enuresis + night terrors + daytime somnolence = all of the above →
         `osa-6`
       · decreased scholastic achievement = sleep apnoea → `osa-6`
       · skeletal change in the child = pigeon chest → `osa-6`
       · the obese hypertensive snorer with witnessed apnoeas = OSA →
         `osa-1`, `osa-5`, `osa-8`
     ⚠️ All 10 ids linked, none dropped, none padded. No section here links
     zero questions.

   ──────────────────────────────────────────────────────────────────────────
   ⚠️ GREPPED BEFORE ANY GAP WAS DECLARED — all 34 cached ENT decks, stem not
   word (§14.5’s `ostiomeatal` lesson, where a spelling hid a hit):

     PRINTED, and used as sourced —
       · `hypopn` → L9 only, and only inside "Apnea-Hypopnea index (AHI)".
         The INDEX is sourced; the DEFINITION of a hypopnoea is not printed
         anywhere and is supplied and tagged in `osa-8`.
       · `desaturation`, `arousal`, `BMI`, `neck circumference`,
         `sleep endoscopy`, `polysomn`, `CPAP` → L9, all verbatim.
       · `tonsillotomy` → L3 and L9.
       · `enuresis`, `adenoid facies` → L3, verbatim.
       · `chest deform` → **L6 and L12 — printed, but as "Pectus
         EXCAVATUM"** (L6) and as a bare "Chest deformity" (L12). See the
         defect note in `osa-6`.
       · ⚠️ **`uvulopalato` returns ZERO and `uvelopalato` returns L9** — the
         deck spells it **"Uvelopalatopharyngoplasty"**. A live instance of
         the standing rule: grep the stem, not the word. The chapter prints
         both spellings so a search from either direction finds it.
     GENUINELY ABSENT — 0 hits corpus-wide, supplied and tagged:
       · `epworth`, `sleepiness scale` — the Epworth scale is named in the
         brief as this chapter’s to own and appears in no deck. `osa-7`.
       · `cephalometr` — L9 prints "3. Radiological assessment of the upper
         airway" as a bare heading over a figure and says nothing else about
         it. What that assessment IS is supplied in `osa-8`.
       · `mallampati`, `friedman`, `STOP-BANG`, `berlin` — no deck, and no
         question tests them. See the omission note.
       · `pigeon`, `carinatum` — see the defect note.

   ⚠️ `examiner-patterns.md` HAS AN `ent-osa` SECTION (lines 317–320) and it
   names one fact NO transcribed question in this chapter tests:
   **"OSA causes all EXCEPT → weight loss" (p.3069).** Written as a line in
   `osa-5` under §14.2 test 2 — the examiner’s own weighting — and tagged,
   since no slide states it.

   ──────────────────────────────────────────────────────────────────────────
   DEFECT NOTES — recorded per the 2026-08-11 ruling (note beside, never
   dispute; `answer` stays as the bank printed it):
     · `entqb-thr4-165` keys **pigeon chest** as the skeletal change of
       paediatric OSA. **No cached deck prints "pigeon chest" or "pectus
       carinatum" at all** (0 hits, all 34 files). The two decks that name a
       chest deformity in chronic paediatric airway obstruction — L6 and L12
       — name **pectus EXCAVATUM** (L6) or leave it unqualified (L12), i.e.
       the opposite deformity. Noted in `osa-6` in one line, keyed as
       printed.

   OMISSION NOTE — cut on purpose, each a decision on the record:
     · **"Famous snorers in history"** (L9 line 38) — a photograph slide with
       four words and no examinable content.
     · **The eighteen repeated running slide titles** — navigation, not fact.
     · **Mallampati, Friedman staging, STOP-BANG and the Berlin
       questionnaire** — absent from all 34 decks and tested by none of the
       ten questions. Under the answer-the-gap rule a gap is filled when a
       question needs it; none does, and adding four screening instruments to
       a chapter whose deck names none would be padding.
     · **The AHI thresholds for the paediatric population** (which differ from
       the adult grid) — L9 states one grid and no question distinguishes
       them. Not invented.
     · **Drug and device detail beyond what L9 names** — no doses, no CPAP
       pressures, no device brands. The material states none.
*/

var THEORY_ENT_OSA = {
  'ent-osa': {

    intro: 'One spectrum, two populations. In the adult it is obesity and the answer is CPAP; in the child it is the adenoid and the answer is surgery. Everything else is polysomnography, and the level of obstruction that picks the operation.',

    sections: [

{
  id: 'osa-1', w: 'must',
  h: 'Definitions, and the spectrum from primary snoring to severe OSA',
  body: [
    '**SNORING** — harsh, noisy sound produced by **vibration of the soft tissue of the throat and upper airway**, due to **PARTIAL** airflow obstruction **during sleep**.',
    '',
    '**SLEEP APNOEA** — **cessation of airflow through the nose and mouth during sleep for more than 10 seconds.**',
    '',
    '|Type|Mechanism|Respiratory effort|',
    '|---|---|---|',
    '|**OBSTRUCTIVE**|secondary to **obstruction of the upper airway**|**present and continues** — the chest still tries|',
    '|**CENTRAL**|secondary to **cessation of thoracic and abdominal respiratory effort**|**absent** — the drive itself stops|',
    '',
    '- **A SPECTRUM: primary snoring** (snoring without OSA — occasional or habitual) at one end, **severe OSA** at the other. **Sleep-related breathing disorders** = snoring **and** OSA.',
    '- **All patients with OSA are snorers, but not all snorers have OSA.** What separates simple snoring from OSA in a vignette is a **witnessed apnoea or an arousal**, not the noise.',
    '- **Incidence: 30 y = 30 % · 40 y = 40 % · 50 y = 60 %** — it rises with age. **Male : female = 2 : 1.** Commoner in the **obese with a short neck**.',
    '',
    'Src: L9 lines 26–50 and 296–299'
  ].join('\n'),
  qs: ['entep-throat-case-17']
},

{
  id: 'osa-2', w: 'must',
  h: 'Pathophysiology and the four risk factors',
  body: [
    '**Partial obstruction** of the upper airway → **negative pressure and turbulent airflow during inspiration** → **vibration of the palate and uvula = SNORING**.',
    '',
    '**Complete obstruction** of the upper airway → **OSA** → **frequent arousal**.',
    '',
    'Partial obstruction arises from either a **space-occupying lesion** or **hypotonia of the palatal and pharyngeal muscles** — mass or tone.',
    '',
    '|Risk factor|Stated mechanism|',
    '|---|---|',
    '|**OBESITY**|**deposition of fat narrows the upper airway lumen** — and it is the **commonest cause of OSA in the adult**|',
    '|**SMOKING**|**congestion of the upper airway mucosa** leading to partial obstruction|',
    '|**ALCOHOL, and drugs — hypnotics, sedatives**|**hypotonia of the palatal and pharyngeal muscles** leading to their collapse|',
    '|**SLEEPING POSITION**|**sleeping on the back makes the tongue fall backward** and obstruct the upper airway|',
    '',
    '- All four reappear as rungs of lifestyle modification — each risk factor is a treatment in reverse.',
    '- **Second obesity mechanism** *(not in course material)*: a large abdomen lowers end-expiratory lung volume, losing the caudal traction that splints the pharynx — narrower **and** less supported.',
    '',
    'Src: L9 lines 51–80'
  ].join('\n'),
  qs: ['entep-throat-121']
},

{
  id: 'osa-3', w: 'must',
  h: 'Aetiology by LEVEL — the list the operation is chosen from',
  body: [
    '|#|Level|Causes|',
    '|---|---|---|',
    '|**1**|**NASAL obstruction**|**deviated septum · hypertrophy of the inferior turbinate · nasal polyp**|',
    '|**2**|**PHARYNGEAL obstruction**|**ADENOID — the most common cause IN CHILDREN** · tonsillar hypertrophy · bulky base of tongue · hypertrophy of the lingual tonsils · receding mandible · macroglossia|',
    '|**3**|**Excessive length of the UVULA and SOFT PALATE**|developmental · secondary to mouth breathing|',
    '|**4**|**HYPOTONIA of the palatal and pharyngeal muscles**|ageing · drug-induced · neurological disease|',
    '',
    '- **The level chooses the operation** — nothing else in the chapter does.',
    '- **Level 1 is rarely the answer alone in an adult.** Allergic rhinitis and polyps block the nose but do not collapse the pharynx; **marked obesity** beats them, and beats an **elongated uvula** too, because obesity acts at every level at once.',
    '- The nose as a symptom and its work-up are written under nasal obstruction; the adenoid as a disease under the tonsils and adenoids.',
    '',
    'Src: L9 lines 81–94'
  ].join('\n'),
  qs: ['entep-throat-88','entqb-thr4-209']
},

{
  id: 'osa-4', w: 'must',
  h: 'ADULT vs CHILD — the contrast the examiner keeps asking',
  body: [
    '**Read the age before the option list — the two populations invert almost every answer.**',
    '',
    '|Axis|**ADULT**|**CHILD**|',
    '|---|---|---|',
    '|**Commonest cause**|**MARKED OBESITY**|**ADENOID hypertrophy ± tonsillar hypertrophy**|',
    '|Level|diffuse — fat and tone at every level|**level 2, pharyngeal** — a fixed lymphoid mass|',
    '|Habitus|**obese, short neck, BMI >30**|often **normal or underweight — retarded general growth, failure to thrive**|',
    '|Extra features|morning headache · daytime sleepiness · GERD · hypertension|**nocturnal enuresis · nightmares/night terrors · falling school performance · mouth breathing**|',
    '|**First-line treatment**|**lifestyle first, then CPAP for moderate and severe disease**|**ADENOTONSILLECTOMY — usually curative**|',
    '|Role of surgery|for snoring and mild OSA, or when **CPAP fails or is not tolerated**|**first line**|',
    '',
    '- **Adult OSA is a medical disease operated on only after failure; paediatric OSA is a surgical disease.**',
    '- **The standing paediatric distractors are all nasal (level 1)** — bilateral choanal atresia (neonate), angiofibroma (adolescent male with epistaxis), allergic polypi. None causes habitual childhood OSA.',
    '',
    'Src: L9 lines 66–94, 169–241; paediatric column from L3 (written in full under the tonsils and adenoids)'
  ].join('\n'),
  qs: ['entep-throat-88','entep-throat-121','entqb-thr4-209']
},

{
  id: 'osa-5', w: 'must',
  h: 'Presentation, and what untreated OSA costs',
  body: [
    '**Presentation**',
    '',
    '- **Loud snoring — average 60 dB, can reach 85 dB.**',
    '- **Mouth breathing** → **dry mouth, dental caries, chronic sore throat.**',
    '- **Witnessed attacks of sleep apnoea, and frequent arousal.**',
    '- **Morning headache.**',
    '- **Daytime sleepiness.**',
    '- **Frequent attacks of GERD.**',
    '',
    '**Complications of untreated OSA**',
    '',
    '|System|Complications|',
    '|---|---|',
    '|**Cardiovascular**|**hypertension · IHD · arrhythmia**|',
    '|**Cerebrovascular**|**decreased cerebral blood flow → a high incidence of cerebrovascular events**|',
    '|**Psychological**|**poor memory and loss of concentration · irritability and mood changes · depression**|',
    '|**Social**|interferes with **performance at work or school** · **disruption of family life** · **diminished libido**|',
    '|**Metabolic**|**DM** — named only in the deck’s key-points slide, but named|',
    '',
    '- **OSA causes weight GAIN, not weight loss** — fragmented sleep raises appetite and lowers activity, so obesity is both cause and consequence *(direction not in course material; asked as an EXCEPT)*. **Weight loss in a snorer points elsewhere.**',
    '- The complete vignette: **obese, hypertensive, snoring, witnessed apnoeas** — cause, disease and consequence in one stem.',
    '',
    'Src: L9 lines 95–122, 300'
  ].join('\n'),
  qs: ['entep-throat-case-17']
},

{
  id: 'osa-6', w: 'must',
  h: 'The child with OSA — two routes, and only one of them is hypoxia',
  body: [
    '**Chronic upper-airway obstruction in a child injures by TWO separate routes, and the examiner tests which route a symptom came down.**',
    '',
    '|Route|Consequences|',
    '|---|---|',
    '|**A. NOCTURNAL HYPOXIA and chronic CO₂ RETENTION** (the OSA route)|**lassitude · dullness · NIGHTMARES / night terrors · NOCTURNAL ENURESIS** · **daytime somnolence** · **decreased scholastic achievement** · **retarded general growth**|',
    '|**B. MOUTH BREATHING — DRYING, not hypoxia**|**dry lips, tongue and pharynx · dry bleeding gums · DENTAL CARIES · THIRST · chronic sore throat**|',
    '',
    '- **THIRST IS ROUTE B — the classic EXCEPT.** Enuresis, nightmares and poor school performance are hypoxia and CO₂ retention; thirst and a dry mouth are air moving over an unwetted pharynx all night.',
    '- **Enuresis + night terrors + daytime somnolence = all of the above** — all three are sleep fragmentation, so no odd one out.',
    '- **Decreased scholastic achievement here is SLEEP APNOEA, and it is REVERSIBLE** — not mental retardation, aphasia or obesity. **Check the hearing too**: the same adenoid gives OME and conductive loss.',
    '- **Growth failure is an indication to operate.** Fragmented sleep suppresses nocturnal growth-hormone release *(mechanism not in course material; the material states the outcome, "retarded general growth")*.',
    '- **Skeletal change — the chest.** Years of forced inspiration against a blocked airway generate large negative intrathoracic pressures that deform the compliant paediatric chest wall. **The bank keys PIGEON CHEST**; the spinal options are pure distractors. ⚠️ Noted, not disputed: **no cached lecture prints "pigeon chest" or "pectus carinatum"**, and the two decks naming a chest deformity in chronic paediatric obstruction call it **pectus EXCAVATUM** or leave it unqualified. Key as printed.',
    '- Adenoid facies, the two obstructions, grading and the adenoidectomy grids are under the tonsils and adenoids.',
    '',
    'Src: L9 lines 100–122; the consequence list verbatim from L3 (counted and written under the tonsils and adenoids); chest-deformity comparison from L6 and L12'
  ].join('\n'),
  qs: ['entqb-thr4-165','entqb-thr4-210','entqb-thr4-214','entqb-thr4-218']
},

{
  id: 'osa-7', w: 'high',
  h: 'Clinical assessment — the two numbers, and the three levels',
  body: [
    '**1. Symptoms** — snoring, attacks of sleep apnoea, frequent arousal.',
    '',
    '**2. General examination**',
    '',
    '- **Obesity, and BMI — kg/m², abnormal above 30.**',
    '- **NECK CIRCUMFERENCE — greater than 17 inches in a male, greater than 16 inches in a female.** Learn the pair; a single figure quoted without a sex is incomplete.',
    '- **Receding mandible · macroglossia** — the two skeletal/soft-tissue features that crowd the pharynx in a patient who is not obese.',
    '',
    '**3. ENT examination, level by level**',
    '',
    '|Level|What to look for|',
    '|---|---|',
    '|**Nasal**|**deviated septum · polyp · hypertrophy of the inferior turbinates**|',
    '|**Oropharyngeal**|**bulky soft palate · long uvula · big tonsils**|',
    '|**Indirect laryngoscopy**|**bulky base of tongue · long folded epiglottis**|',
    '',
    '- **EPWORTH SLEEPINESS SCALE** *(not in course material — absent from all 34 lecture files)*: self-completed, chance of dozing in **eight everyday situations** (reading, television, sitting inactive in public, car passenger, lying down in the afternoon, sitting talking, after lunch, stopped in traffic), **0–3 each, out of 24**; **above 10 = excessive daytime sleepiness**. It quantifies the SYMPTOM only — **never diagnoses OSA and never grades it**, which is the discrimination against polysomnography.',
    '',
    'Src: L9 lines 123–133'
  ].join('\n'),
  qs: ['entep-throat-121']
},

{
  id: 'osa-8', w: 'must',
  h: 'Endoscopy, imaging, and POLYSOMNOGRAPHY — the diagnostic standard',
  body: [
    '**Endoscopic assessment**',
    '',
    '|Test|What it is|What it gives|',
    '|---|---|---|',
    '|**Flexible nasopharyngolaryngoscopy**|awake endoscopy|assessment of the upper airway **from the nose down to the larynx**|',
    '|**DISE — Drug Induced Sleep Endoscopy**|examination of the upper airway **under general anaesthesia WITHOUT muscle relaxant**|**the LEVEL of airway collapse / obstruction** — and it is DISE that **documents the site to which surgery is tailored**|',
    '',
    '- **The "without muscle relaxant" clause is the whole test** — a relaxant would paralyse the very tone whose loss is being reproduced, so the collapse seen would be the drug’s.',
    '',
    '**Radiological assessment of the upper airway** — named as a step, printed as a bare figure. *(Supplied, not in course material:)* **lateral cephalometry** — posterior airway space, hyoid position, mandibular retrusion — and **CT** where skeletal surgery is planned.',
    '',
    '**POLYSOMNOGRAPHY — the overnight sleep study, and the answer whenever a stem asks what investigates sleep apnoea.**',
    '',
    '|Channel|Records|',
    '|---|---|',
    '|**EEG**|brain activity — sleep staging|',
    '|**Airflow**|nose and mouth — defines the apnoea|',
    '|**Oxygen saturation**|desaturation|',
    '|**ECG**|heart rhythm|',
    '|**EOG**|eye movement|',
    '|**EMG**|muscle activity|',
    '',
    '**What it reports:** **sleep efficiency · presence of desaturation · the APNOEA–HYPOPNOEA INDEX (AHI) · arousal index · the severity of the sleep apnoea.**',
    '',
    '|Severity|**Events per hour**|',
    '|---|---|',
    '|**Mild**|**5 – 15**|',
    '|**Moderate**|**16 – 30**|',
    '|**Severe**|**more than 30**|',
    '',
    '- **AHI = apnoeas plus hypopnoeas per hour of sleep.** A **hypopnoea** is a **reduction**, not a cessation, of airflow, at least 10 seconds, with desaturation or an arousal *(the index is named in the course material; the definition of a hypopnoea is printed nowhere in it — greped across all 34 decks)*.',
    '- **The severity grid is where CPAP is decided** — moderate and severe, i.e. AHI above 15.',
    '- **Obstructive is separated from central by RESPIRATORY EFFORT** — effort persists against a closed airway, and ceases altogether in central apnoea. *(The thoracoabdominal effort belts recording it are not named in the course material; the distinction they measure is.)*',
    '',
    'Src: L9 lines 138–168, 310–312'
  ].join('\n'),
  qs: ['entep-throat-84','entep-throat-122','entep-throat-case-17']
},

{
  id: 'osa-9', w: 'must',
  h: 'Management — lifestyle first, CPAP for moderate and severe',
  body: [
    '**1. Lifestyle modification — helpful, and applied FIRST for every patient with snoring or OSA.**',
    '',
    '- **Weight reduction.**',
    '- **Stop smoking / alcohol consumption.**',
    '- **Avoid sleeping in the supine position.**',
    '- **Elevate the head of the bed.**',
    '- **Avoid sleeping pills and sedatives.**',
    '- **Avoid a high-fat diet before sleep.**',
    '',
    '**2. Medications** — **intranasal corticosteroids / antihistamines**; **non-steroidal nasal or oral sprays**. They treat the nasal level only.',
    '',
    '**3. Appliances** — **nasal dilators**; **mandibular repositioning devices**.',
    '',
    '**4. CPAP — Continuous Positive Airway Pressure. THE TREATMENT OF CHOICE FOR MODERATE AND SEVERE OSA.** It **transmits air into the upper airway at positive pressure**, splinting it open.',
    '',
    '|Limitation|Detail|',
    '|---|---|',
    '|**Compliance**|**only 60 % of cases** — the single biggest problem, and the reason the surgical indication exists|',
    '|**Aerophagia**|swallowed air|',
    '|**Rhinitis**|with a nasal mask|',
    '|**Significant upper airway obstruction**|**difficult to use** — a blocked nose or a large mass defeats the pressure|',
    '',
    '- **The ladder is not skipped.** Lifestyle for everyone including the severe; CPAP added for moderate and severe; surgery only for snoring and mild disease, or where CPAP has failed.',
    '',
    'Src: L9 lines 169–207, 302–306'
  ].join('\n'),
  qs: ['entep-throat-121','entqb-thr4-209']
},

{
  id: 'osa-10', w: 'high',
  h: 'Surgery — indications, and the operation the LEVEL chooses',
  body: [
    '**Indications**',
    '',
    '- **Snoring and MILD OSA.**',
    '- **Moderate and severe OSA NOT COMPLIANT with CPAP.**',
    '',
    '**Surgery is according to the SITE of obstruction, documented by DISE.** The four sites named: **nose / nasopharynx · oropharynx and soft palate · base of tongue · mandibular advancement**.',
    '',
    '|Level|Operation|',
    '|---|---|',
    '|**Nose**|**Septoplasty** for a deviated nasal septum · **FESS** for nasal polyps|',
    '|**Nasopharynx**|**Adenoidectomy**|',
    '|**Tonsils**|**Tonsillectomy** · **laser tonsillotomy**|',
    '|**Soft palate / oropharynx**|radiofrequency coagulation · UPPP · LAUP · expansion palatopharyngoplasty — below|',
    '|**Base of tongue**|tongue base reduction · hypoglossal nerve stimulator — below|',
    '|**Skeleton**|**mandibular advancement surgery**|',
    '|**Failure of everything**|**tracheostomy**|',
    '',
    '**Palatal surgery, in the deck’s own order**',
    '',
    '|Procedure|What is done|Verdict as stated|',
    '|---|---|---|',
    '|**A. Radiofrequency coagulation**|coagulation of the **palatal muscles** using radiofrequency|**SNORING ONLY** — not an OSA operation|',
    '|**B. UPPP — uvulopalatopharyngoplasty** (the deck spells it *Uvelopalatopharyngoplasty*)|**excision of the uvula, part of the soft palate, the tonsils and the anterior commissure**|**LOW SUCCESS RATE — not done now**|',
    '|**C. LAUP — laser-assisted uvulopalatoplasty**|done under **LOCAL anaesthesia**|**limited success in treating OSA**|',
    '|**D. Expansion palatopharyngoplasty**|**tonsillectomy** · dissection of the **palatopharyngeus** muscle · **cutting in its lower third** · **suturing to the hamulus superiorly and laterally**|the current palatal operation — it widens the lateral wall rather than removing palate|',
    '',
    '**Tongue base surgery**',
    '',
    '- **Tongue base reduction** — **endoscopic or open**, using **laser or coblator**.',
    '- **Hypoglossal nerve stimulator** — **implantable electrical device**; **stimulates the hypoglossal nerve so the tongue moves FORWARD during sleep**, preventing obstruction.',
    '',
    '**Tracheostomy** — **severe OSA with failure of ALL other modalities.** A **small tube bypasses the upper airway obstruction**; **capped by day, de-capped during sleep**. The one operation that cannot fail, because it leaves the obstruction behind rather than treating it.',
    '',
    'Src: L9 lines 208–295, 307–312'
  ].join('\n'),
  qs: ['entqb-thr4-209','entep-throat-88']
}

    ]
  }
};
