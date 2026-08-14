/* ent-vertigo — "Vertigo and dizziness", ENT. Written from scratch 2026-08-14
   under START-HERE.md §14 (slide-density revision notes). No v1 existed.

   BUDGET — §14.1 REVISED rule, budget = max(summed lecture words,
   25 x linked question count), floor 600, cap 3,000. BOTH TERMS STATED:

     TERM 1 — summed words of the lectures this chapter RESTS ON, measured by
     LINE RANGE, not by claiming a whole file:
       L20) vertigo                            723 w — THE WHOLE FILE
         The deck is this chapter and nothing else: ILOs, inner-ear anatomy,
         balance physiology, the terminology list, central vs peripheral
         nystagmus, the central cause list, the whole peripheral
         classification by hearing loss (BPPV, vestibular neuritis,
         Ménière’s, viral labyrinthitis, vestibular schwannoma struck out,
         ototoxicity, third-window abnormalities, CSOM with fistula,
         otosclerosis, trauma), the Ménière’s tetrad and its four-step
         treatment ladder, the fistula test, and the diagnosis and treatment
         summary slides. `ent-audio` cited it and explicitly did NOT count
         it, recording that "its 723 w belong to `ent-vertigo`".
       + L13,14) AudioVestibulae Evaluation    432 w of the file’s 1,671
         · lines 422–556 = 353 w — the ENTIRE DIZZINESS HALF: what dizziness
           is, the epidemiology, the diagnostic challenges, ">90 % benign /
           <5 % serious", "the commonest cause of dizziness is LACK OF
           SLEEP", "history reveals a provisional diagnosis in 80 % of
           cases", the four investigation categories, the TYPE I–IV
           classification and the descriptor list.
         · lines 63–83 = 79 w — the definition of balance and STATIC vs
           DYNAMIC balance.
         BOTH RANGES WERE EXPLICITLY LEFT UNCLAIMED BY `ent-audio`, which
           took lines 113–421, 557–571 and 572–599 (1,009 w) and named these
           two ranges in its own deferral list. Lines 1–112 minus my 63–83
           (230 w — agenda, Helen Keller, the CPU analogy, the "6th sense"
           slides) are claimed by nobody: no examinable fact.
       = 1,155 words

     TERM 2 — 25 x 56 linked questions = 1,400 words

     max(1,155 · 1,400) = 1,400. TERM 2 GOVERNS, by 245 words.
     Floor 600 and cap 3,000 neither bind.

   DIAGRAM-DECK CHECK, as §14.1 requires it be stated, run on both counted
   files. L20 measures 723 w over 228 non-blank lines = 3.2 words per line
   and L13,14’s two counted ranges 432 w over 109 non-blank lines = 4.0 —
   both above the ~2 that marks a labelled-diagram deck (`ent-earanat`’s L22
   runs 1.2). So neither TERM 1 figure is an extraction artefact, and the
   second term is not being invoked to paper over one.

   ⚠️ THE OVERRUN WAS PREDICTED AT PLANNING TIME, NOT DISCOVERED — §14.1’s
   THIRD failure mode applies, the `ent-dysph` one. L20 is a SURVEY deck: it
   carries thirteen named entities in 723 words of one-line bullets
   ("❑ Ototoxicity" is two words on the slide and is an entity), so TERM 1
   measures the deck’s brevity, not the subject’s size. And TERM 2 assumes
   questions CLUSTER: these 56 do cluster on BPPV (13) and Ménière’s (13),
   but the remaining 30 spread over eleven more entities at one to eight
   each, and an entity asked once still costs a full account.
     ENTITY COUNT: BPPV · Ménière’s · vestibular neuritis · labyrinthitis ·
     vestibular schwannoma · superior canal dehiscence / third window ·
     labyrinthine fistula in CSOM · ototoxicity · otosclerosis and trauma as
     the mixed group · migraine-associated vertigo · cerebellar lesions ·
     VBI and lateral medullary syndrome · multiple sclerosis and vertiginous
     epilepsy = THIRTEEN. At §14.1’s measured ~90 words of floor per entity
     (what it is, how it presents, what confirms it, what treats it) that is
     ~1,170 words BEFORE the terminology framework, the Type I–IV split, the
     epidemiology, the nystagmus grid, the hearing-loss classification, the
     four-look-alike discrimination table, the assessment run and the
     treatment ladder are written at all. PREDICTED FLOOR, stated before a
     word was written: ~1,750–1,900.

   ⚠️ MEASURED OUTCOME, RE-COUNTED FROM THE FILE ON DISK WITH THE BRIEF’S OWN
   VALIDATOR — NOT a claim carried over from an intention, per §14.1’s
   `ent-rhin` warning: 1,902 BODY WORDS over 12 sections, 56 links, intro 42.
   That is 502 over the 1,400 budget (+35.9 %) and 362 over §14.1’s 10 %
   tolerance of 1,540. It lands TWO WORDS above the top of the predicted
   1,750–1,900 band — the prediction held — and well under the ~2,700
   operative ceiling. At the measured ~270 words/page it should print near
   SEVEN pages, the same as `ent-audio` and `ent-earanat`. REPORTED, NOT
   HIDDEN.

   THREE COMPRESSION PASSES WERE RUN AND THE RETURNS DIED. The first draft
   measured 2,356 (+68 %); pass one took out 368 words, pass two 53, pass
   three 31, and a final layout fix 2 — 454 words, −19.3 %, WITHOUT losing a
   fact. What went:
   connective and framing sentences; four distractor-rejection tails
   (including Ménière’s "not perilymph, not CSF, not a fistula, not nerve
   degeneration", whose key fact is already the section’s first line); the
   duration rule restated in three entity sections where the vert-6 table
   carries it; six repetitions of the "(not in course material)" tag inside
   one table, replaced by a single blanket line above it; two merged central
   vascular rows; and long table cells rewritten as fragments. Pass three
   yielding only 31 words is the signal that the fat is gone. The last 2 came
   from giving two tables a real corner-cell label instead of a blank one —
   a blank corner has its own renderer history and is not worth risking.

   WHAT REACHING THE NUMBER WOULD ACTUALLY COST, itemised.
     To 1,540 (−362 w), the least damaging set:
       vert-10 Vestibular schwannoma — the whole section  121 w — 1 q LOST
       vert-2  the epidemiology table and the >90 %-benign
               and lack-of-sleep slides, cut to the 80 % line
                                                          ~90 w — 1 q at risk
       vert-1  balance physiology and static vs dynamic    ~50 w — 0 qs
       vert-11 the ototoxicity and mixed-group bullets     ~45 w — 0 qs
       vert-4  the MS, vertiginous-epilepsy and vascular
               rows of the central cause list              ~35 w — 0 qs
       vert-3  the Frenzel line; vert-7 the Semont /
               Brandt–Daroff / roll-manoeuvre row          ~30 w — 0 qs
                                                          ----
                                                          371 w
     Five of those six are WHOLE L20 or L13,14 SLIDES, so this breaches the
     coverage floor’s FIRST side as well as its second — and three of them
     are exactly the deferrals this chapter exists to discharge: deleting the
     epidemiology and balance slides would silently void `ent-audio`’s
     deferrals 2 and 3 while leaving a header that still claims them.
     To the strict 1,400 (−502 w), add vert-3’s nystagmus grid (98 w, 3 more
     questions) and vert-5’s master grid bullet — the two tables the
     central-vs-peripheral and the "except" question shapes turn on.
     I did not do either. Per §14.1 the acceptance test is PAGES: render and
     count before ordering compression. If the hub wants the strict number
     honoured, that is the bill.

   ✅ THE FOUR OWED DEFERRALS (§14.5), ALL DISCHARGED — this chapter is the
   receiving end of FOUR register rows from TWO chapters, two of them the
   same deck registered independently:
     1. `ent-earanat` (L20) — "L20’s whole clinical half — balance
        physiology, causes and assessment of vertigo, BPPV, Ménière’s,
        vestibular neuritis, the positional tests."
        → DELIVERED. Balance physiology vert-1 · central causes vert-4 ·
        peripheral causes vert-5 · assessment vert-12 · BPPV vert-7 ·
        Ménière’s vert-8 · vestibular neuritis vert-9 · the positional tests
        as findings in vert-7 and vert-12.
     2. `ent-audio` (L13,14 lines 422–556) — the entire dizziness half.
        → DELIVERED IN FULL, fact by fact, in vert-1 and vert-2: dizziness
        as a non-specific patient term for symptoms with different
        underlying pathophysiologic processes, impairment of spatial
        perception and stability, 2nd commonest complaint in medical
        practice, ~30 % overall incidence, mean age ~45, +10 % per 5 years,
        90 % by age 75 with dizziness then the commonest complaint, 36 % of
        women vs 22 % of men, the seven diagnostic challenges, >90 % benign
        and <5 % serious, LACK OF SLEEP as the commonest cause of dizziness,
        80 % of diagnoses from history with examination confirming rather
        than diagnosing, the four investigation categories, the TYPE I–IV
        classification, "don’t use the word DIZZY" with its five history
        questions, and the nine-item descriptor list.
     3. `ent-audio` (L13,14 lines 63–83) — static vs dynamic balance.
        → DELIVERED in vert-1, with the definition of balance itself.
     4. `ent-audio` (L20, everything but the fistula test and the
        investigation categories) — the SECOND, independent deferral of the
        same deck.
        → DELIVERED. Every L20 slide is in this chapter; and the two items
        `ent-audio` DID keep are carried here only as one-line findings
        (fistula test in vert-11, investigation categories in vert-12), not
        re-taught.

   ⚠️ `ent-audio` OWNS THE VESTIBULAR TESTS AS PROCEDURES — its aud-10 was
   read before writing, as the brief requires, and holds the provocative-test
   and laboratory-test grids: RCT, Dix–Hallpike, bedside tilt,
   hyperventilation, the fistula test, caloric with COWS and the 30/44 °C
   temperatures, ENG/VNG, vHIT, VEMP, posturography, and the receptor-to-test
   pairing. Its sibling earan-11 holds crista/angular and macula/linear.
   NONE OF THAT IS REWRITTEN HERE. What this chapter carries is what a result
   MEANS for a disease — Dix–Hallpike positive = posterior-canal BPPV, Epley
   is its treatment, caloric normal in BPPV and reduced in neuritis, ENG
   "weak vestibular nerve" = unilateral vestibular weakness, fistula sign
   positive = third window, ABR delayed wave V = retrocochlear — each as a
   line or a cell.

   FLOOR KEPT BOTH WAYS — every fact, number, list, eponym and classification
   the counted ranges state, plus every one of the 56 linked questions’ KEY
   and DISCRIMINATOR as a line or a table cell. All 56 ids linked, none
   dropped, none filed twice.

   ⚠️ WHAT NO CACHED SLIDE COVERS AND IS SUPPLIED HERE, each tagged in the
   body: the three sensory inputs to balance (L20’s "Balance Physiology" is a
   picture with no prose) · canalolithiasis and the otoconia mechanism · the
   RANKING of the semicircular canals in BPPV and the canal-specific
   manoeuvres (Epley, Semont, Brandt–Daroff, the roll test) · the
   Dix–Hallpike nystagmus signature · the ranking of migraine as the
   commonest central cause (L20 lists it, never ranks it) · betahistine ·
   Frenzel glasses · the retrocochlear speech-discrimination and ABR criteria
   · Tullio phenomenon, Hennebert’s sign, autophony, the supranormal bone
   conduction, the preserved stapedial reflex and the CT in SSCD · the
   identification of the LATERAL canal as the one eroded by cholesteatoma
   (checked across all 34 cached ENT files, on none of them) · the ototoxic
   drug classes · COWS.

   DEFECT NOTES carried in the body, keyed as printed per the 2026-08-11
   ruling: Grade Gain prints one BPPV stem as vertigo lasting "minutes" where
   L20 says seconds (vert-7). Recorded, not disputed.

   OMISSION NOTE — cut on purpose, each a decision on the record:
     1. Distractor-by-distractor rejection. It lives in every question’s own
        `explanation`, one tap away through the qs links (§14.2). Kept only
        where the teaching point IS the discrimination — the nystagmus grid
        (vert-3), the hearing-loss classification (vert-5) and the
        four-look-alike table (vert-6).
     2. Question ids in body text, teaching voice, bank meta-commentary,
        per-fact citation clauses (one Src line per section), closing summary.
     3. L20’s four ANATOMY slides — bony vs membranous labyrinth, perilymph
        and endolymph, SCC / ampulla / cupula / crista ampullaris,
        vestibule / utricle / saccule / maculae, angular vs linear
        acceleration. Written in full by `ent-earanat` (earan-10, earan-11);
        only the endolymph compartment is restated, in vert-8, because
        hydrops needs it. No question filed here tests the anatomy.
     4. L13,14 lines 1–62 and 84–112 — the Helen Keller quotation, the
        hearing-versus-balance slides, the CPU/cable/scanner analogy, the
        "6th sense" slides. Rhetoric, no extractable fact, no question.
     5. Mechanism deeper than the material goes: hair-cell transduction of
        cupular deflection, the neurophysiology of vestibular compensation,
        the pathogenesis of hydrops.
     6. Drug doses and courses — this deck states none anywhere.

   CROSS-CHAPTER DEFERRALS I AM MAKING (§14.5) — named, so each is a promise
   not a deletion. Each was checked against all 56 of this chapter’s
   questions: NONE tests it.
     · L20’s four INNER-EAR ANATOMY slides — bony/membranous labyrinth,
       perilymph/endolymph, SCC + ampulla + cupula + crista ampullaris,
       vestibule + utricle + saccule + maculae, angular vs linear
       acceleration. VERIFIED PRESENT before deferring, not assumed:
       `ent-earanat.draft.js` was read, and its earan-10 carries the two
       labyrinths and the two fluids while earan-11 carries the full
       receptor table                                    ->  `ent-earanat`
       (already merged — nothing owed at reconciliation)
     · The vestibular test BATTERY as procedures — RCT, bedside tilt,
       hyperventilation, ENG/VNG, vHIT, VEMP, posturography, and the
       technique of Dix–Hallpike, Epley and the caloric. VERIFIED PRESENT in
       `ent-audio`’s aud-10 before deferring; only the result-to-disease
       meaning is kept here                              ->  `ent-audio`
       (already merged — nothing owed at reconciliation)
     · CSOM, CHOLESTEATOMA and mastoid disease as subjects — the erosion
       that produces the labyrinthine fistula, unsafe disease,
       mastoidectomy. Only the fistula itself, its canal and its fistula
       sign are kept                                     ->  `ent-csom`
     · OTOSCLEROSIS as an entity — stapes fixation, the audiogram, Carhart’s
       notch, stapedotomy. Only its appearance as a mixed-hearing-loss cause
       of vertigo and its contrast with a third window (absent vs preserved
       stapedial reflex) are kept                        ->  `ent-hearing`
     · OTOTOXICITY as a cause of hearing loss, and the bilateral
       high-frequency SNHL audiogram. Only the vertigo / oscillopsia line is
       kept                                              ->  `ent-hearing`
     · ACOUSTIC NEUROMA / vestibular schwannoma as a CPA tumour — the full
       account, the CPA syndrome, neurofibromatosis type 2, management.
       Only the vestibular presentation and the two retrocochlear test
       findings the bank asks are kept                   ->  `ent-hearing`

   Table pipes carry no padding — mdCells() trims outer delimiters.
   Curly apostrophes throughout: a straight one closes a single-quoted field. */

var THEORY_ENT_VERTIGO = {
  'ent-vertigo': {

    intro: 'Two shapes carry this chapter: how long did the attack last and was hearing involved, and is this peripheral or central. Learn the duration grid and the hearing-loss classification as grids — almost every vignette is decided by one cell of them.',

    sections: [

{
  id: 'vert-1', w: 'must',
  h: 'Balance, dizziness and the words',
  body: [
    '**BALANCE = control of a body position whilst performing a given task with MINIMAL POSTURAL SWAY.**',
    '',
    '- **STATIC** — control whilst **remaining stationary**: one leg, a headstand. **DYNAMIC** — control **whilst moving**: hopping, jumping, cycling, snowboarding.',
    '- Three inputs — **VESTIBULAR, VISION, PROPRIOCEPTION** — integrated centrally *(not in course material; the slide is a diagram)*.',
    '',
    '**DIZZINESS = a NON-SPECIFIC term used by PATIENTS for a group of symptoms with different underlying pathophysiologic processes** — impairment of **spatial perception and stability**.',
    '',
    '|Term|Means|',
    '|---|---|',
    '|**VERTIGO**|**an ILLUSION of movement — the patient spinning, or the world spinning around the patient. SUBJECTIVE, and VESTIBULAR**|',
    '|**Disequilibrium**|**loss of balance WITHOUT the illusion of spinning**|',
    '|**Pre-syncope**|faintness, light-headedness, anorexia|',
    '|**Syncope**|**momentary LOSS OF CONSCIOUSNESS**|',
    '|**Ataxia / gait disturbance**|incoordinated movement and walking|',
    '',
    '- **Both "subjective" and "objective" vertigo are SUBJECTIVE.** Vertigo is **not** true loss of balance, and **not** confined to inner-ear disease — central lesions cause it too.',
    '',
    '|Simple symptomatic approach|Is|',
    '|---|---|',
    '|**TYPE I**|**VERTIGO**|',
    '|**TYPE II**|**SYNCOPE / PRE-SYNCOPE**|',
    '|**TYPE III**|**DISEQUILIBRIUM**|',
    '|**TYPE IV**|**NON-SPECIFIC DIZZINESS**|',
    '',
    '- **"Describe what happened and DON’T use the word DIZZY"** — it has no consistent meaning, yet every patient uses it. Ask: **when did it start · how long does it last · how often · what were you doing · what makes it better or worse.**',
    '- The description matches one of: **vertigo · motion intolerance · unsteadiness · drop attack · pre-syncope · balance-related fall · syncope · oscillopsia · vague.**',
    '',
    'Src: L20; L13,14'
  ].join('\n'),
  qs: ['entep-ear-46','entep-ear-210','entqb-ear9-236']
},

{
  id: 'vert-2', w: 'high',
  h: 'How common, how dangerous, and what makes the diagnosis',
  body: [
    '|Epidemiology|Figure|',
    '|---|---|',
    '|Rank as a complaint|**2nd commonest in medical practice**|',
    '|Overall incidence|**~30 %**|',
    '|Average age|**~45 years**|',
    '|Ageing|**+10 % per 5 years of age**|',
    '|By age 75|**90 % have dizziness**, and it is then **the commonest complaint**|',
    '|Sex|**36 % of women vs 22 % of men**|',
    '',
    '- **>90 % OF CAUSES ARE BENIGN; <5 % a serious underlying disorder.**',
    '- **THE COMMONEST CAUSE OF DIZZINESS IS LACK OF SLEEP.** Commonest **peripheral** vertigo **BPPV**; commonest **central**, **migraine-associated vertigo**.',
    '- **HISTORY GIVES A PROVISIONAL DIAGNOSIS IN 80 % OF CASES** — the first step. **Examination CONFIRMS rather than diagnoses.** Workup: **audiological · vestibular · laboratory · radiological.**',
    '- Why it is hard: **vague symptoms · numerous causes · multi-system/sensory deficit · referral difficulty · no simple diagnostic approach · life-threatening red flags · dependence on technology.**',
    '',
    'Src: L13,14'
  ].join('\n'),
  qs: ['entqb-ear9-259']
},

{
  id: 'vert-3', w: 'must',
  h: 'Nystagmus — central vs peripheral, and which way it beats',
  body: [
    '|Feature|**CENTRAL**|**PERIPHERAL**|',
    '|---|---|---|',
    '|**Suppressed by VISUAL FIXATION**|**NO**|**YES**|',
    '|**Direction**|**may be VERTICAL**|horizontal / horizonto-rotatory, **never vertical**|',
    '|**Direction-changing with gaze**|**YES**|**no — unidirectional**|',
    '|**FATIGUE**|**NO fatigue**|**FATIGUES**|',
    '|Provoked|spontaneous|**spontaneous OR INDUCED** — Hallpike, caloric|',
    '',
    '- **VERTICAL, DIRECTION-CHANGING, or not suppressed by fixation = CENTRAL until proved otherwise.**',
    '- **THE SLOW PHASE IS THE VESTIBULAR ONE and drifts TOWARDS THE DISEASED labyrinth; the FAST corrective phase beats TOWARDS THE HEALTHY EAR — and the fast phase NAMES the nystagmus.** Cold caloric irrigation mimics a dead labyrinth and reproduces the pattern.',
    '- **Frenzel glasses abolish fixation** and unmask a suppressed peripheral nystagmus *(not in course material)*.',
    '',
    'Src: L20'
  ].join('\n'),
  qs: ['entqb-ear9-237','entqb-ear9-238','entqb-ear9-239']
},

{
  id: 'vert-4', w: 'must',
  h: 'Central vertigo — causes and red flags',
  body: [
    '|Central cause|Note|',
    '|---|---|',
    '|**MIGRAINE-ASSOCIATED VERTIGO**|**the COMMONEST central cause** *(L20 lists it but never ranks it — not in course material)*. Mimics Ménière’s; **hearing discriminates** — migraine spares it|',
    '|**Cerebellar lesions**|vertigo **with incoordination, ataxia, a directional tendency to fall**|',
    '|**VASCULAR — vertebrobasilar insufficiency (VBI) · lateral medullary syndrome (PICA)**|brainstem ischaemia and stroke|',
    '|**Multiple sclerosis**|demyelination|',
    '|**Vertiginous epilepsy**|vertigo as the seizure|',
    '',
    '**RED FLAGS — treat as central and IMAGE FIRST:** severe **CONTINUOUS** vertigo with **NORMAL hearing** · **headache** · vascular risk factors (diabetes, hypertension) · **incoordination, ataxia or falling to one side** · vertical or direction-changing nystagmus · any neurological sign.',
    '',
    '- **MRI of the brain and cerebellum / posterior fossa comes BEFORE any vestibular test** — no vestibular test excludes a stroke. Where cerebellar incoordination dominates, **contrast CT** is the bank’s keyed first study.',
    '- **Never lumbar puncture before imaging** when a posterior fossa mass is possible.',
    '',
    'Src: L20; imaging category L13,14'
  ].join('\n'),
  qs: ['entqb-ear9-240','entep-ear-155','entep-enr-13']
},

{
  id: 'vert-5', w: 'must',
  h: 'Peripheral vertigo classified by the HEARING LOSS — the master grid',
  body: [
    '|Hearing|Cause|',
    '|---|---|',
    '|**NO HEARING LOSS**|**1. BPPV · 2. VESTIBULAR NEURITIS** — only these two|',
    '|**LOW-FREQUENCY SNHL**|**MÉNIÈRE’S DISEASE (ONLY)**|',
    '|**UNILATERAL HIGH-FREQUENCY SNHL**|**VIRAL LABYRINTHITIS**. *(Vestibular schwannoma is struck through on the slide — retrocochlear, not labyrinthine)*|',
    '|**BILATERAL HIGH-FREQUENCY SNHL**|**OTOTOXICITY**|',
    '|**CONDUCTIVE (CHL)**|**THIRD-WINDOW ABNORMALITIES**|',
    '|**MIXED**|**CSOM WITH FISTULA · OTOSCLEROSIS · TRAUMA**|',
    '',
    '- **The "vertigo WITH hearing loss, except" shape resolves in one step — the exception is BPPV or vestibular neuritis.** Reversed, the exception is a **third window**: an inner-ear lesion giving a **conductive** loss.',
    '',
    'Src: L20'
  ].join('\n'),
  qs: ['entqb-ear9-255','entqb-ear9-256']
},

{
  id: 'vert-6', w: 'must',
  h: 'The four look-alikes — duration decides',
  body: [
    '|Feature|**BPPV**|**MÉNIÈRE’S**|**VESTIBULAR NEURITIS**|**LABYRINTHITIS**|',
    '|---|---|---|---|---|',
    '|**DURATION**|**SECONDS**|**minutes to HOURS**|**DAYS, continuous**|**DAYS, continuous**|',
    '|**TRIGGER**|**CHANGE OF HEAD POSITION** — turning in bed, lying back, looking up|**spontaneous**, episodic|**spontaneous, after a URTI**|**after a URTI or OTITIS MEDIA**|',
    '|**HEARING LOSS**|**NONE**|**fluctuating LOW-frequency SNHL**|**NONE**|**HIGH-frequency SNHL**|',
    '|**TINNITUS / FULLNESS**|**no**|**YES — both**|**no**|may occur|',
    '|**Nausea, vomiting**|mild|yes|**SEVERE**|severe|',
    '|**Fatigability**|**FATIGABLE**|no|no|no|',
    '|**Test that decides**|**DIX–HALLPIKE positive**|**PTA: LOW-frequency SNHL**|**ENG/VNG: unilateral vestibular weakness**|**PTA: HIGH-frequency SNHL**|',
    '|**Treatment**|**EPLEY repositioning**|low-salt diet + diuretic|symptomatic, then rehabilitation|treat the cause|',
    '',
    '- **SECONDS → BPPV · HOURS + hearing loss → MÉNIÈRE’S · DAYS without hearing loss → NEURITIS · DAYS with hearing loss → LABYRINTHITIS.**',
    '- **CONSCIOUSNESS IS NEVER LOST in any of the four** — a blackout is Type II dizziness. **Vertigo lasting days is never Ménière’s**; **neuritis is the nerve alone, labyrinthitis the whole labyrinth.**',
    '',
    'Src: L20'
  ].join('\n'),
  qs: ['entep-ear-99','entep-ear-65','entqb-ear9-248','entqb-ear9-242','entep-mfe5-2']
},

{
  id: 'vert-7', w: 'must',
  h: 'Benign paroxysmal positional vertigo',
  body: [
    '**THE COMMONEST PERIPHERAL VERTIGO, and the commonest peripheral EPISODIC vertigo.**',
    '',
    '**TRIAD: a) vertigo for SECONDS · b) in CERTAIN HEAD POSITIONS · c) FATIGABLE.**',
    '',
    '- **CANALOLITHIASIS — otoconia dislodged from the UTRICULAR MACULA fall into a canal and deflect the cupula with gravity** *(not in course material)*.',
    '- **The POSTERIOR canal is much the commonest, being the most DEPENDENT**; lateral next, anterior rare *(ranking not in course material)*.',
    '- **No hearing loss, no tinnitus, no neurological signs. Otoscopy, PTA and CALORIC all NORMAL; fistula sign negative** — a normal caloric separates it from vestibular neuritis.',
    '',
    '|Step|What|',
    '|---|---|',
    '|**DIAGNOSIS**|**DIX–HALLPIKE (Hallpike) POSITIONING TEST**, for **posterior-canal** BPPV|',
    '|Positive test|**latency of seconds → torsional up-beating nystagmus with vertigo → FATIGUES on repetition → REVERSES on sitting** *(signature not in course material)*|',
    '|**TREATMENT, 1st line**|**REPOSITIONING / POSITIONAL EXERCISE — not drugs, not surgery. The EPLEY manoeuvre** (posterior canal)|',
    '|Alternatives|**Semont** manoeuvre · **Brandt–Daroff** home exercises · the **roll (barbecue)** manoeuvre for the lateral canal *(not in course material)*|',
    '|Not helpful|**vestibular sedatives and antihistamines MASK the attack and DELAY central compensation**|',
    '|Intractable|singular neurectomy, canal occlusion *(not in course material)*|',
    '',
    '- **DIX–HALLPIKE DIAGNOSES, EPLEY TREATS** — the same vignette is asked both ways.',
    '- **Defect note:** Grade Gain prints one BPPV stem as vertigo lasting **"minutes"** where L20 says **seconds** — keyed as printed.',
    '',
    'Src: L20; positioning test L13,14'
  ].join('\n'),
  qs: ['entep-ear-20','entep-ear-40','entep-ear-85','entep-ear-106','entep-ear-111','entep-ear-120','entep-ear-194','entqb-ear9-241','entqb-ear9-243','entqb-ear9-244','entqb-ear9-249','entqb-ear9-258','entep-case-33']
},

{
  id: 'vert-8', w: 'must',
  h: 'Ménière’s disease',
  body: [
    '**IDIOPATHIC ENDOLYMPHATIC HYDROPS — distension of the ENDOLYMPH compartment, i.e. RAISED ENDOLYMPHATIC PRESSURE.** Prosper Menière, 1799–1862.',
    '',
    '|Tetrad|Detail|',
    '|---|---|',
    '|**Episodic VERTIGO**|**minutes to HOURS**, recurrent, with nausea and vomiting|',
    '|**FLUCTUATING SNHL**|**LOW-FREQUENCY, unilateral, progressive — the ONLY peripheral cause of a low-frequency loss**|',
    '|**TINNITUS**|in the affected ear|',
    '|**AURAL FULLNESS**|pressure in the ear|',
    '',
    '- **CONSCIOUSNESS IS NEVER LOST**, and there is **no reservoir sign** — canal refilling with pus after mopping belongs to a suppurating middle ear. **The drum is INTACT.**',
    '- **Rinne positive both sides, WEBER TO THE BETTER (opposite) EAR** — so a Weber to the left names a **right** Ménière’s.',
    '',
    '|Treatment ladder|Step|',
    '|---|---|',
    '|**1**|**LOW-SALT DIET + DIURETICS** — first line, aimed at the hydrops|',
    '|**2**|**INTRATYMPANIC CORTICOSTEROID**|',
    '|**3**|**INTRATYMPANIC GENTAMICIN** — chemical ablation of the vestibular end organ|',
    '|**4a**|**Surgery, SERVICEABLE hearing → SELECTIVE VESTIBULAR NEURECTOMY** (abolishes vertigo, keeps hearing)|',
    '|**4b**|**Surgery, NO serviceable hearing → LABYRINTHECTOMY** (destroys hearing, so only a profoundly deaf ear)|',
    '',
    '- **Betahistine between attacks**, to improve inner-ear blood flow *(not in course material)*.',
    '- **ANTIVIRALS HAVE NO ROLE — hydrops, not infection.** Prolonged bed rest delays compensation; surgery is the last step, never the first.',
    '',
    'Src: L20'
  ].join('\n'),
  qs: ['entep-ear-18','entep-ear-42','entep-ear-44','entep-ear-61','entep-ear-175','entep-ear-195','entep-ear-227','entep-ear-239','entqb-ear9-245','entqb-ear9-246','entqb-ear9-260','entqb-ear9-261','entep-case-22']
},

{
  id: 'vert-9', w: 'must',
  h: 'Vestibular neuritis and labyrinthitis',
  body: [
    '**VESTIBULAR NEURITIS — FOLLOWING URTI · SEVERE VERTIGO · FOR DAYS.**',
    '',
    '- **Functional failure / inflammation of the VESTIBULAR DIVISION ALONE. THE COCHLEAR DIVISION IS SPARED, so HEARING IS NORMAL** and there is no tinnitus.',
    '- Severe **nausea and vomiting**, prostrate. **Otoscopy normal, neurological examination normal, consciousness intact.**',
    '- **Nystagmus spontaneous, horizontal, FAST PHASE TO THE HEALTHY EAR**, suppressed by fixation. **ENG/VNG shows UNILATERAL VESTIBULAR WEAKNESS** — the bank prints this as a "weak vestibular nerve"; the caloric on that side is reduced.',
    '- **Symptomatic antiemetics and anti-vertiginous drugs SHORT TERM, then VESTIBULAR REHABILITATION.** Continuing sedatives delays compensation.',
    '- **Neither exertion nor head position triggers it** — attacks appearing during activity after a cold are still neuritis.',
    '',
    '**LABYRINTHITIS = inflammation of the INNER EAR itself — so vertigo AND hearing loss together.**',
    '',
    '|Labyrinthitis|Detail|',
    '|---|---|',
    '|**Viral labyrinthitis**|L20’s entry: peripheral vertigo with **UNILATERAL HIGH-FREQUENCY SNHL**, lasting days|',
    '|**Suppurative labyrinthitis**|**follows acute or chronic suppurative otitis media** — vertigo, nystagmus and SNHL in an infected ear; may spread to the meninges *(the route is not in course material)*|',
    '|**Discriminator**|**HEARING. Neuritis spares it; labyrinthitis does not.**|',
    '',
    'Src: L20'
  ].join('\n'),
  qs: ['entep-ear-19','entep-ear-34','entep-ear-105','entep-ear-198','entep-ear-206','entep-ear-209','entqb-ear9-247','entep-case-34']
},

{
  id: 'vert-10', w: 'high',
  h: 'Vestibular schwannoma',
  body: [
    '**Struck through on L20’s peripheral list because it is RETROCOCHLEAR, not labyrinthine** — a vestibular nerve sheath tumour at the cerebellopontine angle.',
    '',
    '- **UNILATERAL, PROGRESSIVE HIGH-FREQUENCY SNHL with tinnitus, and UNSTEADINESS rather than acute rotational vertigo** — slow growth allows central compensation. **The loss never fluctuates**, which separates it from Ménière’s.',
    '- **SPEECH DISCRIMINATION POOR OUT OF PROPORTION TO THE PURE-TONE AUDIOGRAM** — the retrocochlear signature *(criterion not in course material)*.',
    '- **ABR: DELAYED WAVE V and PROLONGED INTERWAVE LATENCY** *(latency criteria not in course material)*. Normal wave V, normal intervals and normal discrimination argue against it.',
    '- **IMAGING OF THE PETROUS BONE AND POSTERIOR FOSSA** — MRI with gadolinium is the gold standard.',
    '',
    'Src: L20; speech discrimination and ABR L13,14'
  ].join('\n'),
  qs: ['entqb-ear9-251']
},

{
  id: 'vert-11', w: 'high',
  h: 'Third-window lesions, labyrinthine fistula, and the mixed group',
  body: [
    '**A THIRD WINDOW is an extra opening into the inner ear beside the oval and round windows — L20 files it under CONDUCTIVE hearing loss. Every row of the table below except the hearing loss itself is *(not in course material)*.**',
    '',
    '|**Superior semicircular canal dehiscence**|Feature|',
    '|---|---|',
    '|**Hearing loss**|**CONDUCTIVE, with a NORMAL middle ear and drum**|',
    '|Mechanism|air-conducted sound **leaks out**; bone-conduction thresholds become supranormal|',
    '|**vs OTOSCLEROSIS**|**STAPEDIAL REFLEX PRESERVED in a dehiscence, ABSENT in otosclerosis**|',
    '|**TULLIO PHENOMENON**|**SOUND-induced vertigo — classic cause is SSCD**|',
    '|**Hennebert’s sign**|**PRESSURE-induced vertigo** through the same hole|',
    '|Also|autophony; high-resolution temporal bone CT confirms|',
    '',
    '- **FISTULA TEST — Siegle’s speculum or TRAGAL COMPRESSION. Vertigo and nystagmus on pressure = POSITIVE = a third window or a labyrinthine fistula.** Negative in BPPV, Ménière’s and neuritis.',
    '- **CSOM WITH FISTULA — cholesteatoma erodes into a canal, giving a MIXED loss and a positive fistula sign. THE LATERAL (HORIZONTAL) CANAL IS THE ONE ERODED**, its prominence bulging into the attic and aditus *(the canal is named on no cached ENT slide)*. Threatens hearing and meninges.',
    '- **OTOTOXICITY — BILATERAL high-frequency SNHL with unsteadiness and oscillopsia rather than rotational vertigo** (aminoglycosides, cisplatin, loop diuretics — *drug classes not in course material*).',
    '- **OTOSCLEROSIS and TEMPORAL BONE TRAUMA** complete the mixed-loss group.',
    '',
    'Src: L20'
  ].join('\n'),
  qs: ['entqb-ear9-252','entqb-ear9-253','entqb-ear9-254']
},

{
  id: 'vert-12', w: 'must',
  h: 'Assessment and general treatment',
  body: [
    '|Stage|Content|',
    '|---|---|',
    '|**1. HISTORY — the first step, settles 80 %**|**a) DURATION · b) PRECIPITATING FACTORS · c) ASSOCIATED MANIFESTATIONS**|',
    '|**2. Clinical examination** — confirms, rarely diagnoses|**a) general medical · b) NEUROLOGICAL · c) EYE examination FOR NYSTAGMUS · d) EAR examination**|',
    '|**3. Audiological**|PTA — it assigns the case to a row of the hearing-loss grid|',
    '|**4. Vestibular**|**they CONFIRM, they do not diagnose**|',
    '|**5. Imaging**|**petrous bone and posterior fossa**|',
    '|**6. Laboratory**|—|',
    '',
    '- **Not MRI, not EEG, not PTA first — HISTORY FIRST.**',
    '- What a vestibular result means here: **caloric NORMAL in BPPV and REDUCED on the affected side in neuritis; COWS — Cold Opposite, Warm Same — names the FAST phase; a positive fistula sign means a third window.**',
    '',
    '|General treatment|Step|',
    '|---|---|',
    '|**1**|**COUNSELLING AND ASSURANCE** — over 90 % of causes are benign|',
    '|**2**|**SYMPTOMATIC — ANTI-EMETICS and ANTI-VERTIGINOUS drugs**|',
    '|**3**|**TREATMENT OF THE CAUSE**|',
    '|**4**|**VESTIBULAR REHABILITATION EXERCISES**|',
    '',
    'Src: L20; caloric and COWS L13,14'
  ].join('\n'),
  qs: ['entqb-ear9-257']
}

    ]
  }
};
