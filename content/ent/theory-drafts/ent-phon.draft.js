/* ent-phon — "Introduction to phoniatrics", ENT. Written from scratch
   2026-08-14 under START-HERE.md §14 (slide-density revision notes). No v1
   existed. 44 linked questions.

   ⚠️⚠️ THIS CHAPTER COLLECTS TWO REGISTER ROWS, AND THEY ARE THE SAME DECK
   DEFERRED TWICE BY TWO CHAPTERS THAT DID NOT KNOW OF EACH OTHER (§14.5
   names `ent-phon` in its multi-row list). Both are discharged here ONCE,
   not twice, and both were CONFIRMED BY READING THE SOURCE DRAFTS rather
   than assumed:

     ROW 1 — from `ent-hoarse` (L8): "the phoniatric evaluation protocol in
     full — GRBAS parameter by parameter, VHI / VHI-10 / V-RQoL, the
     elementary/clinical/instrumental tiers, external laryngeal examination,
     mirror vs rigid vs flexible vs direct, stroboscopy, aerodynamic
     measures, the content of voice therapy, dysarthria/dyslalia/aphasia".
     VERIFIED in `ent-hoarse.draft.js`: its header lists L8 under "NOT
     COUNTED, CITED ONLY — TWO slides only: the three-column classification
     of voice disorders, and the symptomatology definitions", and states
     verbatim that "GRBAS, VHI/VHI-10/V-RQoL, the three-tier evaluation
     protocol, external laryngeal examination and the laryngoscopy
     comparison are `ent-phon`’s and are not written here." Grepping its
     eleven sections confirms it: no GRBAS, no tier, no scope comparison, no
     stroboscopy mechanism.
       DISCHARGED: GRBAS parameter by parameter phon-4 · VHI/VHI-10/V-RQoL
       phon-4 · the three tiers phon-3 · external laryngeal examination
       phon-5 · mirror/rigid/flexible/direct phon-6 · stroboscopy phon-7 ·
       aerodynamic measures phon-8 · dysarthria phon-9 · dyslalia phon-10 ·
       aphasia phon-14.

     ROW 2 — from `ent-dysph` (L8): "the phoniatric protocol — only the
     laryngeal click kept". VERIFIED: `ent-dysph.draft.js` lists L8 under
     "NOT COUNTED, CITED ONLY — one line only, the LARYNGEAL CLICK as an item
     of external laryngeal examination (line 285). Its 2,088 w belong to
     `ent-phon`", and `dys-8` uses the ABSENT click as Moure’s sign in
     post-cricoid carcinoma. That is the LESION; the click as an EXAMINATION
     ITEM is written here (phon-5) with the other four external items.
       HOW THE DUPLICATE WAS MERGED: rows 1 and 2 name one deck and largely
       one body of content. It is written ONCE, in phon-3 → phon-8, and row
       2 adds exactly one thing row 1 did not name — the laryngeal click —
       delivered as one row of phon-5’s external-examination list. Nothing is
       written twice to satisfy two promises. Same treatment `ent-otorrhea`
       gave its three otorrhoea rows and `ent-nasalobs` its three L31 rows.

     ⚠️ ONE PROMISED ITEM IS NOT IN THE DECK, AND SAYING SO IS PART OF
     DISCHARGING THE ROW: "the content of voice therapy". **L8 prints no
     voice-therapy content at all** — grepped across all 34 cached decks, the
     string appears only in L2 and L11. The voice-therapy goals and the
     surgical ladder are L2’s and are already WRITTEN in `ent-hoarse`
     (`hoar-11`: eliminate harmful vocal behaviours / alter the manner of
     production / enhance tissue healing, then MLS, laser, decortication,
     thyroplasty, injection). They are NOT rewritten here. What L8 does print
     about management — speech therapy for dyslalia and dysarthria, family
     counselling and language intervention for aphasia — is written here with
     its own disorder.

   BUDGET — §14.1 as revised 2026-08-14,
   budget = max(summed lecture words, 25 x linked question count),
   floor 600, cap 3,000. BOTH TERMS MEASURED FROM DISK BY LINE RANGE:

     TERM 1 — the lecture words this chapter RESTS ON:

       L8) Introduction to phoniatrics   1,752 w of the file’s 2,088
         · lines 22–32   (33 w)  — the phoniatrician: scope and the SLP
         · lines 33–51   (36 w)  — communication, the three physiological
                                   levels, the classification tree
         · lines 52–65  (108 w)  — language (Bloom and Lahey 1978) and the
                                   four linguistic systems
         · lines 66–71   (18 w)  — the four prerequisites of language
         · lines 72–87   (75 w)  — language disorders (Paul 1995), DLD, the
                                   five broader conditions
         · lines 88–122 (132 w)  — aphasia: centres, definition, types,
                                   aetiology, symptomatology, management
         · lines 123–130 (47 w)  — learning disability
         · lines 131–144 (86 w)  — dyslalia
         · lines 145–183 (208 w) — stuttering, DSM-5, the three behaviour
                                   layers, the epidemiology
         · lines 184–207 (95 w)  — dysarthria: definition, the five speech
                                   parameters, six types, causes, treatment
         · lines 208–212 (38 w)  — nasality
         · lines 244–252 (48 w)  — the six goals of voice evaluation
         · lines 253–256 (20 w)  — the three-tier protocol
         · lines 257–277 (132 w) — elementary procedures 1–3, GRBAS in full
         · lines 278–321 (114 w) — elementary 4–6, external laryngeal
                                   examination, mirror laryngoscopy, the
                                   twelve structures and four items
         · lines 322–424 (372 w) — clinical diagnostic aids: rigid,
                                   flexible, stroboscopy, direct
         · lines 425–478 (190 w) — tier III, acoustic analysis, radiology,
                                   electroglottography, electromyography

         ⚠️ NOT CLAIMED, and the four exclusions reconcile exactly
           (2,088 − 26 − 121 − 184 − 5 = 1,752):
           · lines 1–7 (26 w) — SOURCE line, title and attribution block.
           · lines 8–21 (121 w) — the ten ILOs. Metadata naming content the
             body slides deliver and the body ranges already claim; counting
             both would bill the same material twice. Two of them (red flags,
             referral pathways) name content the deck never delivers and
             which `ent-hoarse` (`hoar-3`) already writes.
           · lines 213–243 (184 w) — the voice-disorder SYMPTOMATOLOGY
             definitions and the functional/MAP/organic classification tree.
             ⚠️ THESE ARE WRITTEN IN `ent-hoarse` (`hoar-1`, `hoar-10`) and
             are not claimed here. `ent-hoarse` DECLINED L8 entirely, so
             these 184 words are charged to NO chapter — stated rather than
             quietly swept into this budget to buy headroom. phon-1 carries a
             four-term vocabulary line and a pointer, nothing more, because
             two questions filed HERE turn on phonasthenia and on spasmodic
             dysphonia being functional. That is §14.1’s declared "a fact
             arrives by deferral while its words stay charged elsewhere"
             case, read from the other side.
           · lines 479–481 (5 w) — the trailing "Clinical Practice Guideline:
             Hoarseness (Dysphonia)" title slide, no content.

       = 1,752 words

     TERM 2 — 25 x 44 linked questions = 1,100 words

     max(1,752 · 1,100) = 1,752. ⚠️ TERM 1 GOVERNS, by 652 words. Floor 600
     does not bind; the 3,000 cap is not approached. Operative ceiling
     ~2,400 body words (§14.1, pages ≈ words ÷ 240).

   DIAGRAM-DECK CHECK, stated as §14.1 requires, over the claimed ranges
   only: 1,752 words across 382 non-blank lines = 4.59 words per line. Far
   above the ~2 that marks a labelled-diagram file (L22, the deck that forced
   the second term into existence, runs 1.2; L4 runs 5.4). L8 is an ordinary
   prose deck, no diagram-deck correction applies, and TERM 1 governs on its
   own merits rather than by default. ⚠️ Worth saying which way this cuts:
   had L8 been image-only, the question term would have governed at 1,100 and
   this chapter would have been budgeted at 63 % of what its lecture states.

   NOT COUNTED, CITED ONLY — each contributes a clause, and every one is
   already charged to a written neighbour:
     · L2) Hoarsness of Voice, 2,066 w — `ent-hoarse`’s. Cited twice: for
       spasmodic dysphonia being classified FUNCTIONAL with adductor,
       abductor and mixed types (line 477), and for the mutational voice
       disorder (line 475).
     · L3) DISEASES OF THE TONSILS & ADENOIDS, lines 278–279 and 347–379 —
       velopharyngeal incompetence after surgery, and nasal tone of voice
       among the effects of adenoidal obstruction. Its 2,289 w are
       `ent-tonsils`’s (merged).
     · L1.1) Surgical anatomy of the larynx, 1,286 w — the layered cord and
       the vocalis as medial thyroarytenoid, for one question. Charged to
       `ent-pharanat`, which writes the anatomy in full (`pha-11`–`pha-16`).
     · L7) Assessment And Management Of Swallowing Disorders, 1,616 w —
       videofluoroscopy as a barium study, appearing here only as a
       distractor. `ent-swallow`’s (unwritten) and `ent-dysph`’s.
     · L11) Vocal cord paralysis, 560 w — `ent-vocal`’s.

   ⚠️ ENTITY / FRAMEWORK FLOOR, COUNTED BEFORE WRITING (§14.1’s `ent-neck`
   rule: cost the framework slides ONE BY ONE, because the entity count alone
   under-predicts). ⚠️ THIS CHAPTER IS ALMOST ENTIRELY FRAMEWORK — like
   `ent-vocal` — so the ~90-words-per-entity unit barely applies. Twenty-seven
   blocks, costed individually:
     the phoniatrician and scope 60 · communication + three levels + the
     classification tree 90 · language definition and the four linguistic
     systems 90 · the four prerequisites 50 · language disorders, DLD and the
     five conditions 70 · the aphasia centres 70 · aphasia definition, types,
     aetiology, symptomatology, management 110 · learning disability and
     dyslexia 70 · dyslalia 90 · stuttering 130 · dysarthria 130 · nasality
     110 · the voice-symptom vocabulary row 60 · phonation physiology and the
     cycle 90 · the six goals 50 · the three tiers and six elementary
     procedures 90 · the patient rating scales 40 · GRBAS parameter by
     parameter 110 · external examination + the twelve structures + the four
     items 110 · the four-scope comparison table 160 · stroboscopy 140 · tier
     III list + acoustic analysis 110 · electroglottography 50 ·
     electromyography and electroneurography 90 · radiology and the
     endoscopy-first rule 50 · echolalia and the language-delay causes 90 ·
     the management and referral lines 50.
     = ~2,360 words of floor against a 1,752-word budget — +34.7 % BEFORE A
     WORD IS WRITTEN, and ~9.8 pages. Inside the ~2,400 / ~10-page ceiling
     but sitting ON it, not comfortably under it. SAID HERE, IN ADVANCE.

   ⚠️⚠️ MEASURED OUTCOME — taken with §14’s own validator on the file AS IT
   STANDS ON DISK, AND RE-TAKEN AFTER THE FINAL EDIT (§14.1’s `ent-rhin` and
   `ent-vocal` warnings: a header is a claim, the file is the fact, and a
   per-section breakdown that reconciles proves only that the numbers came
   from ONE state of the file, never that it was the last).
   ⚠️ AN EARLIER VERSION OF THIS PARAGRAPH READ "2,315" AND WAS FICTION — it
   was drafted alongside the plan, BEFORE the body existed, i.e. exactly the
   `ent-rhin` failure. It is replaced, not annotated. The numbers below come
   from the last validator run after the last keystroke:

       body 2,847 words over 14 sections · intro 39 words · 44/44 linked

     Per-section, same run:
       phon-1 188 · phon-2 171 · phon-3 194 · phon-4 149 · phon-5 172
       phon-6 178 · phon-7 231 · phon-8 225 · phon-9 167 · phon-10 160
       phon-11 236 · phon-12 239 · phon-13 253 · phon-14 284

   ⚠️⚠️ THAT IS 1,095 OVER THE 1,752 BUDGET (+62.5 %), 920 over §14.1’s 10 %
   tolerance of 1,927, AND 447 OVER THE ~2,400-WORD OPERATIVE CEILING.
   REPORTED LOUDLY, NOT HIDDEN, AND THE HUB IS OWED THE RULING. Pages:
   2,847 ÷ 240 = **11.9**, i.e. ~12 rather than the ~10 target; twelve of the
   fourteen sections are table-dense (238–259 w/page), so ±1 page puts the
   realistic range at 11–12. **RENDER IT BEFORE ACCEPTING IT** — and note
   §14.1’s own finding that layout, not words, owns pages: AOM went 14 pp → 9
   on `break-inside` and cell padding alone, with the text untouched. This
   chapter is 14 tables; it is the shape most likely to benefit from that.

   ⚠️ MY OWN PRE-WRITING FLOOR OF ~2,360 UNDER-PREDICTED BY 487 WORDS, and
   the reason is worth recording for the next framework chapter: the four
   large comparison grids came in at 149 + 178 + 194 + 225 = **746 words**
   against the ~500 I costed them at. §14.1 says "a list of names has no fat
   in it"; the sharper version is that a comparison GRID has no fat in it
   either, and it is not one framework slide but the cross-product of two
   axes. Cost a grid at rows x columns, not as a slide.

   ⚠️ WHY IT DOES NOT GO LOWER — §14.1 requires the bill be ITEMISED rather
   than a protected fact deleted. FIVE compression passes were run after the
   first draft, 3,825 → 2,847 (−978 w, −25.6 %), with no protected fact
   touched. Yields: 707 · 151 · 71 · 28 · 21. **The last two returning 28 and
   21 words is §14.1’s signal that the fat is gone.** What went: every framing
   and connective sentence, five distractor-rejection tails that §14.3 bans
   outright, the mechanism-explaining clauses ("which is why…", "that is
   precisely because…"), the phonasthenia six-feature list and the functional
   dysphonias reduced to `ent-hoarse` pointers, and roughly seventy over-long
   table cells rewritten as fragments.
   THE BILL FOR THE NEXT 447 WORDS, TO REACH THE 2,400 CEILING, EXACTLY:
     · phon-5 entire, 172 w — the five external items, the twelve structures
       and the four items noticed. **1 question dies outright** ("which
       structure is NOT examined" — the answer IS the absence of the uvula
       from that list), and inherited ROW 2 goes UNDISCHARGED, because the
       laryngeal click lives nowhere else. A broken register promise.
     · phon-8’s acoustic-analysis row and the four minor tier-III measures,
       ~130 w — "NOT DIAGNOSTIC FOR THE AETIOLOGY" is one question’s whole
       discriminator, and the aerodynamic/VRP/inverse-filtering names are
       tier III items 2–4, which another question enumerates.
     · the remaining ~145 w off phon-7’s stroboscopy findings table and
       phon-12’s hypo/hyper grid — **9 questions between them.**
   That is **13 of 44 questions damaged to buy 447 words.** Reaching the
   1,927 tolerance costs 920 and additionally takes phon-6’s four-scope table
   (178 w, 4 questions, eight L8 slides) and phon-9’s six-type dysarthria
   table (~110 w, 5 questions, every row an L8 bullet) — **22 of 44.**
   STOPPED AT THE FLOOR AND ITEMISED, per §14.1. The hub rules on pages.

   ⚠️ MY OWN DEFERRALS — three, each VERIFIED in the receiving chapter’s file
   before deferring, not assumed. Only the third would need a new register
   row, and it is flagged rather than opened:
     1. L8 lines 213–243 — the voice-disorder symptomatology in full and the
        functional / MAP / organic classification tree, plus the six
        functional dysphonias. -> `ent-hoarse`. ✅ ALREADY WRITTEN — read
        `hoar-1` and `hoar-10` in `ent-hoarse.draft.js` before deferring;
        both are there in full, including phonasthenia’s six features and the
        mutational voice disorder. NOT a new register row.
     2. The CONTENT of voice therapy and the surgical ladder (L2, not L8).
        -> `ent-hoarse`. ✅ ALREADY WRITTEN — `hoar-11`, read before
        deferring. NOT a new register row; and see above for why the
        inherited row could not be discharged out of L8 itself.
     3. ⚠️ FLAGGED, NOT OPENED: L8 lines 88–122 give aphasia’s LEFT-HEMISPHERE
        localisation (Broca, Wernicke, arcuate fasciculus, angular gyrus) and
        its stroke aetiology. Written here at phon-14 because four questions
        are filed here — but if a NEUROLOGY-side chapter is ever opened in
        `MODULES`, the vascular territories belong there. Checked `MODULES`:
        no such ENT chapter exists, so nothing is owed today. Same shape as
        `ent-pharanat`’s NPC flag — a chapter that does not exist cannot be
        checked for by the validator.

   OMISSION NOTE — deliberately left out, all four §14.2 tests applied and
   each miss checked against the 44 questions first:
     · The four linguistic systems (phonology, syntax, semantics, pragmatics)
       are ONE compact line with their one-word senses, not L8’s four full
       definitions (108 w of deck). No question touches any of them; test 2
       keeps them present, test 1 does not justify the paragraph.
     · Attributions kept only where an eponym-style test could turn on the
       name — Hirano 1981, Kotby 1986, Kotby et al. 1995, DSM-5, Bloom and
       Lahey 1978, Paul 1995 retained; Conture et al. 1991 dropped from the
       body and cited in the Src line.
     · The UEP web link (line 32), the eight repeated "II. Clinical
       Diagnostic Aids: Rigid Laryngoscopy" title slides and the three
       embedded URLs — layout, not content.
     · Voice therapy technique, laryngeal surgery, the MAP lesions and the
       functional dysphonias in detail — all `ent-hoarse`’s, deferrals 1–2
       above. Only the pointers survive here.
     · Full laryngeal anatomy — `ent-pharanat`’s. phon-2 keeps only the cord
       layers and the abductor/tensor line, because one question filed here
       tests cord structure.
     · Swallowing assessment (FEES, VFSS, the white-out) — `ent-swallow`’s,
       untouched; videofluoroscopy appears here only as a one-clause
       distractor contrast in phon-7.
     · The four items "to be noticed" at laryngeal examination are kept as a
       single line rather than expanded — no question tests them, but they
       are a whole slide (test 2).

   DEFECT NOTES CARRIED IN THE BODY (§4b — keyed as the bank prints it, the
   discrepancy stated in one line, never disputed):
     · Talbot’s law: one bank offers "2 images each 0.4 seconds" and "5
       images / second" as SEPARATE options — arithmetically the same rate.
       Answered on WORDING, because L8 prints the second clause verbatim, so
       the slide’s exact sentence is quoted in phon-7 for that reason. No key
       comparison could ever have seen this defect.
     · Receptive aphasia: one bank’s options "difficulty in producing
       language" and "normal comprehension with impaired expression" are the
       same answer. The printed key (impaired understanding) is correct;
       noted, not disputed.
     · Spelling: L8 itself prints "asthetosis" for athetosis and
       "Hypokinkinetic" for hypokinetic; one bank prints "Stained" for
       strained and "Breathing" for breathy. Corrected in the notes.

   GAPS ANSWERED AND TAGGED `(not in course material)` — each grepped across
   all 34 cached ENT decks before being declared a gap, per the standing rule:
   dyslexia (0 hits anywhere) · echolalia (0) · palilalia (0) · hot potato
   voice (0) · rhinolalia clausa/aperta (0) · the four named phases of the
   phonatory cycle and the Bernoulli effect (0) · maximum phonation time (0)
   · falsetto as a term (0) · tongue-tie (0) · the theories of stuttering
   (L8 states no cause) · the nerve-to-articulator map · the content of the
   voice range profile, the aerodynamic measures and inverse filtering (L8
   names all three and defines none) · the ENoG percentage principle · the
   cold-mirror nasal-emission test.
*/

var THEORY_ENT_PHON = {

  'ent-phon': {

    intro: 'Half the set is one protocol — which tier a test belongs to, what each scope can and cannot see, and why vibration needs a flashing light. The rest sorts a complaint onto its level: voice, speech or language.',

    sections: [

{
  id: 'phon-1', w: 'must',
  h: 'Phoniatrics, the three levels of communication, and the map of disorders',
  body: [
    '**The phoniatrician** = a MEDICAL DOCTOR, holistic management of **swallowing · voice · communication · paediatric hearing**. Works with **speech–language pathologists (SLPs)** on behavioural treatment.',
    '**Communication = interchange of ideas, feelings, thoughts and emotions.**',
    '**THREE PHYSIOLOGICAL LEVELS: LANGUAGE (receptive + expressive) · SPEECH · VOICE.** Every disorder sits on exactly one.',
    '',
    '|**LANGUAGE disorders**|**SPEECH disorders**|**VOICE disorders**|',
    '|---|---|---|',
    '|**DLD** · **APHASIA**|**dyslalia · stuttering · nasality · dysarthria**|functional · MAP · organic|',
    '',
    '- **Language** = a **code** expressing ideas through a conventional system of **ARBITRARY signals** *(Bloom and Lahey, 1978)*. Four systems: **phonology** (sounds) · **syntax** (word order) · **semantics** (meaning) · **pragmatics** (social use).',
    '- **Speech** = articulation of voice into words. **Voice/phonation** = produced by the larynx.',
    '- **Voice vocabulary: DYSPHONIA** = audible change of the habitual voice · **APHONIA** = cannot phonate · **DYSODIA** = SINGING voice fails, speaking intact · **PHONASTHENIA** = voice **FATIGUE**, *felt in the neck and throat rather than heard* (six features in `ent-hoarse`).',
    '- Voice disorders classify **FUNCTIONAL / MAP / ORGANIC** — table in `ent-hoarse`. **Spasmodic dysphonia and the mutational voice disorder are FUNCTIONAL.**',
    '',
    'Src: L8 lines 22–65, 213–243; L2 (classification, cited)'
  ].join('\n'),
  qs: ['entqb-thr9-444','entqb-thr9-481']
},

{
  id: 'phon-2', w: 'must',
  h: 'Phonation — the physiology every voice question rests on',
  body: [
    '**Phonation = ADDUCTION of the true cords + vibration by EXPIRED AIR.** ⚠️ **ABDUCTED** cords pass air silently — that is breathing. **Vibration frequency 80–1000 Hz.**',
    '',
    '|**Prerequisite**|**Subsystem**|**Fails as**|',
    '|---|---|---|',
    '|optimal **pulmonary support**|POWER|asthenic, weak|',
    '|optimal **cord coaptation**|SOURCE|**breathy** (too little) / **strained** (too much)|',
    '|normal **mucosal movement**|VIBRATOR|**rough**|',
    '|patent tract above the larynx|RESONANCE|hyper-/hyponasality|',
    '',
    '- ⚠️ **HIGH-FREQUENCY VIBRATION IS NOT A PREREQUISITE** — normal speech sits near the bottom of 80–1000 Hz.',
    '- **Cord layers outward in: squamous epithelium → SUPERFICIAL lamina propria (Reinke’s space, loose areolar) → intermediate + deep lamina propria (dense CT = vocal ligament) → VOCALIS = medial THYROarytenoid.** ⚠️ No "thyrocricoid" muscle exists. *(Layer lesions in `ent-hoarse`; anatomy in `ent-pharanat`.)*',
    '- **Only ABDUCTOR: posterior cricoarytenoid. TENSOR: cricothyroid — pitch only.** Epiglottis: no vocal role. **Ventricular (false) folds CAN phonate — that is ventricular dysphonia.**',
    '- **Phonatory cycle: OPENING → OPEN → CLOSING → CLOSED** — two movements, two states, so "open" follows "opening"; Bernoulli effect closes them *(not in course material)*.',
    '',
    'Src: L8 lines 208–212, 348–353; L1.1 (cord layers, cited)'
  ].join('\n'),
  qs: ['entqb-thr9-445','entqb-thr9-446','entqb-thr9-447','entqb-thr9-456']
},

{
  id: 'phon-3', w: 'must',
  h: 'Voice evaluation — six goals, and the THREE-TIER protocol',
  body: [
    '**Goals *(Kotby 1986)*: 1 etiological categorization · 2 degree of the pathology · 3 its nature · 4 CHOICE OF TYPE AND SEQUENCE OF INTERVENTION · 5 monitor the effect · 6 prognostic anticipation.**',
    '**Protocol *(Kotby et al. 1995)*: I elementary → II clinical aids → III additional instrumental.**',
    '',
    '|**Tier**|**Contains**|',
    '|---|---|',
    '|**I ELEMENTARY**|**1 patient interview · 2 patient rating scales · 3 auditory perceptual analysis · 4 general examination · 5 ENT examination · 6 laryngeal examination** (external + preliminary visual assessment)|',
    '|**II CLINICAL AIDS**|**A augmentation and documentation — RIGID laryngoscopy, FLEXIBLE nasopharyngolaryngoscopy**, under **continuous light** or **videostroboscopy** · **B voice recording**|',
    '|**III ADDITIONAL INSTRUMENTAL**|**1 acoustic analysis · 2 voice range profile · 3 aerodynamic measures · 4 inverse filtering · 5 glottography (EGG) · 6 neurophysiological (EMG, ENoG) · 7 radiology (plain X-ray, CT, MRI)**|',
    '',
    '- ⚠️ **LARYNGEAL EMG IS TIER III, NOT ELEMENTARY.**',
    '- ⚠️ **LARYNGEAL ENDOSCOPY IS FIRST-LINE, BEFORE CT OR MRI** — tier I item 6 against tier III item 7. Most dysphonia is a surface lesion or an immobile cord, invisible on cross-sectional imaging; **a normal CT in a hoarse patient is falsely reassuring.**',
    '',
    'Src: L8 lines 244–256, 425–462'
  ].join('\n'),
  qs: ['entqb-thr11-570','entqb-thr11-578']
},

{
  id: 'phon-4', w: 'must',
  h: 'GRBAS and the patient rating scales — who is doing the rating',
  body: [
    '**Two SEPARATE tier-I items, and the distinction is what is tested.**',
    '',
    '|**Item 2 — PATIENT rating scales**|**Item 3 — AUDITORY PERCEPTUAL ANALYSIS**|',
    '|---|---|',
    '|**Voice Handicap Index (VHI) · VHI-10 · Voice-Related Quality of Life (V-RQoL)**|**GRBAS (Hirano 1981) · Modified GRBAS (Kotby 1986)**|',
    '|how much the voice **DISABLES the patient**|what the **CLINICIAN HEARS**|',
    '',
    '⚠️ **VHI does NOT assist auditory perceptual analysis** — it is the item above it.',
    '**GRBAS — five parameters, each 0–3 on a 4-point severity scale:**',
    '',
    '|**Letter**|**L8’s definition**|**Accuses**|',
    '|---|---|---|',
    '|**G Grade**|overall degree of hoarseness / abnormality|the whole|',
    '|**R Roughness**|**irregular, raspy vibration**|the VIBRATOR — a lesion ON the cord|',
    '|**B Breathiness**|**air leakage through the glottis**|CLOSURE → a **mobility** problem|',
    '|**A Asthenia**|**weakness, lack of power, low intensity**|POWER|',
    '|**S Strain**|**hyperfunctional, tight, high-pitched effort**|HYPERFUNCTION|',
    '',
    '- **STRAINED voice → SPASMODIC DYSPHONIA** (L2: functional; adductor, abductor, mixed). Nodules → **roughness**; paralysis → **breathiness + asthenia**.',
    '',
    'Src: L8 lines 257–277; L2 line 477 (cited)'
  ].join('\n'),
  qs: ['entqb-thr11-567','entqb-thr11-571']
},

{
  id: 'phon-5', w: 'high',
  h: 'Laryngeal examination — external, and the twelve structures',
  body: [
    '**Tier I item 6, two halves: A external laryngeal examination · B preliminary visual assessment of laryngeal pathology.**',
    '**A — EXTERNAL, five items: laryngeal skeleton · LARYNGEAL CLICK · laryngeal position · cervical veins · neck scars.**',
    '- **Laryngeal click** = crepitus of the larynx on the cervical vertebrae, moved side to side. **Its ABSENCE is Moure’s sign of post-cricoid carcinoma** *(lesion in `ent-dysph`)*. **Laryngeal POSITION** — the high-held larynx of the mutational voice disorder is read here.',
    '',
    '**B — TWELVE structures: 1 vallecula · 2 epiglottis · 3 vocal fold · 4 pyriform fossae · 5 arytenoids · 6 interarytenoids · 7 anterior commissure · 8 subglottis · 9 ventricular folds · 10 ventricles · 11 aryepiglottic folds · 12 post-cricoid region.**',
    '⚠️ **The UVULA is NOT on the list** — soft palate, OROPHARYNX, not larynx.',
    '**Four items to be NOTICED: mucous membrane · fold CONFIGURATION · fold MOVEMENTS (gross, and phonatory closure) · ventricular folds.**',
    '- **Pyriform fossa apex and post-cricoid region are the BLIND SPOTS.**',
    '',
    'Src: L8 lines 278–321'
  ].join('\n'),
  qs: ['entqb-thr11-574']
},

{
  id: 'phon-6', w: 'must',
  h: 'The four ways to look at the larynx',
  body: [
    '**INDIRECT: mirror · rigid · flexible nasolaryngoscopy. DIRECT: direct laryngoscopy.**',
    '',
    '|**Technique**|**Advantages**|**Disadvantages**|',
    '|---|---|---|',
    '|**MIRROR**|**fast, straightforward**; adequate views, **minimal equipment or expense**|**GAG REFLEX**|',
    '|**RIGID**|**EXCELLENT IMAGE QUALITY** · **STROBOSCOPIC capability** · **recordable** for serial comparison, consultation, patient education|**gag reflex** · **limited dynamic evaluation** · ⚠️ **SWALLOWING CANNOT BE ASSESSED** · may be unavailable outside specialised practice · ⚠️ **NOT under 6 years**|',
    '|**FLEXIBLE**|**easily performed** · **well tolerated** · ⚠️ **USED UNDER 6 YEARS** · distal-chip cameras; side channels allow **biopsy, laryngeal injection under LA, outpatient laser ablation** (papillomatosis)|⚠️ **EPISTAXIS + mild discomfort on insertion** · severe **septal deviation** challenges exposure|',
    '|**DIRECT**|larynx **under DIRECT vision**; therapeutic; reaches the post-cricoid and subglottic blind spots|**GENERAL ANAESTHESIA**|',
    '',
    '- **The under-6 rule is asked in BOTH directions:** rigid out, flexible in.',
    '- **Rigid cannot assess swallowing — the telescope OCCUPIES THE MOUTH.** FEES therefore goes through the nose.',
    '- **Severe gag reflex → DIRECT laryngoscopy under GA.** Flexible avoids gag but is done awake.',
    '- ⚠️ **"Poor image quality" is NOT a drawback of rigid** — it is its first listed advantage.',
    '',
    'Src: L8 lines 290–424'
  ].join('\n'),
  qs: ['entqb-thr11-568','entqb-thr11-572','entqb-thr11-573','entqb-thr11-581']
},

{
  id: 'phon-7', w: 'must',
  h: 'Videostroboscopy — the only way to SEE vibration',
  body: [
    '**Three sentences, asked as a chain: 1 the folds vibrate between 80 and 1000 Hertz during phonation · 2 Talbot’s law — "the retina can only register 1 image per 0.2 seconds or 5 images per second" · 3 so the free edge appears as a BLUR under a simple white light source.** Ordinary laryngoscopy cannot see vibration at all.',
    '- **MECHANISM: an OPTICAL ILLUSION created by pulsating flashes of light at multiple points of SEVERAL SUCCESSIVE vibratory cycles, enabling visual SLOWING of the rapid, periodic motion.**',
    '- ⚠️ **Stroboscopy is a LIGHT SOURCE, not a scope** — the aids split **A continuous light / B videostroboscopy**; the rigid scope carries it.',
    '- **The test for SYMMETRY of vibration, mucosal wave and glottic closure.** Other signals: **EMG** = muscle potentials · **EGG** = 3 MHz current · **videofluoroscopy** = barium X-rays, imaging swallowing.',
    '',
    '|**Significant finding**|**Means**|',
    '|---|---|',
    '|**fixation of part or the whole mucosa**|the cover is tethered|',
    '|**glottal wave ALTERATION**|"useful information in **vocal fold paralysis**"|',
    '|**ABSENCE of glottal waves over NODULES**|their **FIBROUS nature** → surgery, not therapy|',
    '',
    '- **LIMITATIONS: severe dysphonia and APERIODIC vibrations** (the illusion needs periodicity) · **quasi-objective analysis.**',
    '- Defect: one bank offers "2 images each 0.4 seconds" and "5 images / second" as separate options — **the same rate**. Answered on wording; clause 2 is L8’s verbatim sentence. Keyed as printed.',
    '',
    'Src: L8 lines 340–372; L7 (videofluoroscopy, cited)'
  ].join('\n'),
  qs: ['entqb-thr9-457','entep-mfe4-2','entqb-thr11-579','entqb-thr11-580','entqb-thr11-586']
},

{
  id: 'phon-8', w: 'must',
  h: 'Tier III — what each instrument actually records',
  body: [
    '|**Measure**|**Records**|',
    '|---|---|',
    '|**Acoustic analysis**|vocal tract physiology indirectly, from the acoustic components of voice and cord vibration. **Adv: non-invasive, easy, compares pre-/post-treatment. Disadv: NOT DIAGNOSTIC FOR THE AETIOLOGY · no standardization · hard to correlate between studies.** Pitch parameters: **fundamental frequency, optimal pitch, pitch range, perturbation, pitch breaks**|',
    '|**Voice range profile**|frequency against intensity *(named only; not in course material)*|',
    '|**Aerodynamic measures**|airflow — **maximum phonation time, mean flow rate, subglottic pressure** *(named only; not in course material)*|',
    '|**Inverse filtering**|strips the tract’s resonances to recover the glottal source waveform *(not in course material)*|',
    '|**ELECTROGLOTTOGRAPHY**|**two electrodes either side of the THYROID CARTILAGE at cord level; a HIGH-FREQUENCY 3 MHz CURRENT between them; change in CONDUCTANCE = change in CONTACT AREA between the folds during vibration.** Mechanics, not electrical activity|',
    '|**ELECTROMYOGRAPHY**|**"Study electrical potentials generated in a SKELETAL MUSCLE"**|',
    '|**Electroneurography**|nerve stimulated, evoked response read as a **% of the healthy side** *(not in course material)*|',
    '|**Radiology**|**plain X-ray · CT · MRI** — item 7, after endoscopy|',
    '',
    '**EMG differentiates: 1 neuromuscular from MECHANICAL lesions** — paralysed cord against **fixed cricoarytenoid joint**, deciding medialisation against joint surgery · **2 neurogenic from MYOGENIC** · ⚠️ **3 RLN from SLN affection**, the only test that does so (SLN → cricothyroid alone, so its palsy can leave a MOVING cord). Also **degree and extent of vocal fold paralysis** and **monitoring the prognosis**.',
    '',
    'Src: L8 lines 425–478'
  ].join('\n'),
  qs: ['entqb-thr11-569','entqb-thr11-582','entqb-thr11-583']
},

{
  id: 'phon-9', w: 'must',
  h: 'Dysarthria — six types, and the articulator each nerve moves',
  body: [
    '**Dysarthria = a MOTOR SPEECH disorder from impaired NEUROMUSCULAR CONTROL over the speech mechanisms, due to damage of the CENTRAL or PERIPHERAL nervous system.** Language intact; the machinery is not. **Five parameters of speech: RESPIRATION · PHONATION · RESONANCE · ARTICULATION · PROSODY.**',
    '',
    '|**Type**|**Lesion**|**Sounds like**|',
    '|---|---|---|',
    '|**FLACCID**|**LMNL**|weak, breathy, nasal|',
    '|**SPASTIC**|**BILATERAL UMNL** (pyramidal)|**SLURRED**, imprecise consonants|',
    '|**HYPOkinetic**|**PARKINSON DISEASE** (extra-pyramidal)|⚠️ **MONOTONOUS, quiet, EXPRESSIONLESS**|',
    '|**HYPERkinetic**|**chorea, ATHETOSIS, dystonia**|irregular breakdowns|',
    '|**ATAXIC**|**CEREBELLAR**|**STACCATO**, scanning|',
    '|**MIXED**|more than one system|—|',
    '',
    '- ⚠️ **ATHETOSIS IS HYPERKINETIC** — L8 prints it beside chorea and dystonia (spelt "asthetosis"). **Hypokinetic = Parkinson**, routinely misread as depression.',
    '- **CAUSES: cerebrovascular STROKE (first) · infectious · traumatic brain insult · anoxic · metabolic · neoplasm and degenerative.** **New slurred speech in an adult is a stroke call.**',
    '- **TREATMENT: SPEECH THERAPY**, plus medical and prosthetic.',
    '',
    '|**Nerve**|**Articulator**|**Sounds**|',
    '|---|---|---|',
    '|**V**|jaw|jaw opening|',
    '|**VII**|**lips**|**B, P, M, F, V**|',
    '|**X**|larynx + soft palate|voicing, nasality|',
    '|**XII**|**tongue**|**T, D, K, G**|',
    '|⚠️ **XI**|**sternocleidomastoid + trapezius**|**NONE — no speech role**|',
    '',
    '*(The nerve-to-articulator map is not in course material.)*',
    '',
    'Src: L8 lines 184–207'
  ].join('\n'),
  qs: ['entqb-thr9-468','entqb-thr9-469','entqb-thr9-470','entqb-thr9-487','entqb-thr9-500']
},

{
  id: 'phon-10', w: 'high',
  h: 'Dyslalia — the same wrong sound with the nervous system intact',
  body: [
    '**Dyslalia = inability to correctly produce the proper speech phonetics of a language, based on disorders of the ARTICULATION ORGAN ANATOMY, with the ABSENCE of any neurological disorders and the ABSENCE of any hearing disorders.** ⚠️ **Those two absences are the definition and the discriminator** — they separate it from dysarthria (neurological) and from the deaf child’s speech.',
    '**AETIOLOGY, multifactorial, in L8’s order:** ⚠️ **1 persistence of mistakes while articulating = RESIDUAL dyslalia, the COMMONEST** — normal articulators, a learning-stage error hardened into habit · 2 incorrect imitation of articulating patterns · 3 vision abnormalities · 4 environmental factors.',
    '**Named patterns: SIGMATISM = /s/, /z/ · ROTATISM = /r/ · lack of distinction between /t/, /d/ and /k/, /g/** — all tongue stops differing only in FRONT against BACK contact, which is why K, T, G, D confuse as a set.',
    '- Down syndrome, missing teeth, macroglossia: real, far rarer. **Test hearing first. TREATMENT: SPEECH THERAPY.**',
    '',
    'Src: L8 lines 131–144'
  ].join('\n'),
  qs: ['entqb-thr9-471','entqb-thr9-472']
},

{
  id: 'phon-11', w: 'high',
  h: 'Stuttering — three layers of behaviour',
  body: [
    '**DSM-5: disturbances in the NORMAL FLUENCY and TIME PATTERNING of speech, INAPPROPRIATE for the individual’s age and language skills, and PERSISTING over time; onset in the early developmental period.** Sounds correct — fluency fails.',
    '',
    '|**Layer**|**What it is**|',
    '|---|---|',
    '|**1 CORE**|**REPETITION** — a sound, syllable or single-syllable word repeated several times · **PROLONGATION** — sound or airflow continues, articulator movement stopped · **BLOCK** — inappropriate stoppage of air or voice, often of the articulators too|',
    '|**2 SECONDARY** — the speaker’s REACTIONS to his own repetitions, prolongations, blocks|**facial grimaces · eye blinks · forced effort**|',
    '|**3 AVOIDANCE**|word substitution, speech fillers, starting tricks. **Covert stuttering** = avoidance so skilled the stutter is hidden, with sweating and tachycardia *(not in course material)*|',
    '',
    '⚠️ **"Characteristic of OVERT stuttering" = the CORE behaviours.** Substitution, fillers, starting tricks are layer 3.',
    '- **DSM-5: the disturbance "CAUSES anxiety about speaking or limitations in effective communication, social participation, and academic or occupational performance."** ⚠️ **Anxiety is a CONSEQUENCE.**',
    '- **Onset usually 2–5 years · prevalence about 5 % in children · SPONTANEOUS RECOVERY IS THE FATE IN MOST CHILDREN.** ⚠️ "80 % need psychological therapy" inverts that statistic and names the wrong therapy: **speech therapy treats the stutter, psychological therapy the anxiety.**',
    '- **L8 states no cause. Most accepted = GENETIC** *(not in course material)*: ~50 % have an affected relative, far higher monozygotic concordance, male:female ~4:1.',
    '',
    'Src: L8 lines 145–183 (Conture et al. 1991)'
  ].join('\n'),
  qs: ['entep-throat-54','entqb-thr9-473','entqb-thr9-474']
},

{
  id: 'phon-12', w: 'must',
  h: 'Nasality — the resonance disorders',
  body: [
    '**Speech sounds are MOSTLY ORAL. Only /m/ and /n/ have to resonate in the NASAL CAVITY. Disturbance of nasality results if nasal resonance is REDUCED (hyponasality) or EXCESSIVE (hypernasality).**',
    '',
    '|**HYPOnasality = rhinolalia CLAUSA**|**HYPERnasality = rhinolalia APERTA**|',
    '|---|---|',
    '|the nasal **ROOM is BLOCKED**|the **VELOPHARYNGEAL VALVE FAILS**|',
    '|⚠️ needs **BILATERAL** nasal obstruction|any incompetent palate|',
    '|**commonest cause: ADENOID** — in the nasopharynx itself, for YEARS, in the speech-learning age; a cold does it for days|**commonest cause: CLEFT PALATE**; also post-adenoidectomy incompetence, submucous cleft, palatal paresis|',
    '|**loses the NASAL sounds** — /m/→/b/, /n/→/d/|**loses the PRESSURE consonants (K, P, D)**; ⚠️ **NASAL EMISSION** — audible air escaping down the nose on oral sounds — is its specific sign|',
    '|"decreased nasal tone"|nasal tone **plus fluid regurgitating down the nose**|',
    '',
    '*(clausa / aperta not in course material; L8 prints only hypo- and hypernasality.)*',
    '- ⚠️ **CLEFT PALATE CAUSES HYPERNASALITY, NOT HYPONASALITY.**',
    '- ⚠️ **HOT POTATO VOICE IS A THIRD THING** — a **supraglottic or oropharyngeal MASS** muffling the voice, not a resonance disorder; an **airway red flag** *(not in course material)*.',
    '- **Adenoidectomy can CONVERT clausa into aperta** — L3’s velopharyngeal incompetence: regurgitation of fluid from the nose and nasal tone, **usually temporary from palatal paresis, possibly PERMANENT from palatal shortening due to fibrosis.** Highest risk with an occult submucous cleft.',
    '- Test: **cold mirror under the nose**, sentence with no nasal sounds *(not in course material)*.',
    '',
    'Src: L8 lines 208–212; L3 lines 278–279, 347–379 (cited)'
  ].join('\n'),
  qs: ['entqb-thr9-475','entqb-thr9-476','entqb-thr9-477','entqb-thr9-497']
},

{
  id: 'phon-13', w: 'must',
  h: 'Language development and its disorders',
  body: [
    '**Four PREREQUISITES of normal language development: 1 INTACT SENSATIONS · 2 intact psyche · 3 intact brain functions · 4 STIMULATING ENVIRONMENT.** ⚠️ **The causes of delay are these four failing, one each** — which is how the question is built.',
    '',
    '|**Prerequisite that failed**|**Cause of delayed language**|',
    '|---|---|',
    '|**1 sensations**|⚠️ **SENSORINEURAL HEARING LOSS — the COMMONEST.** Language is an ARBITRARY code that can only be RECEIVED; a high-frequency loss strips the consonants|',
    '|**2 psyche**|autism spectrum disorder|',
    '|**3 brain functions**|minimal brain damage, cerebral palsy, intellectual disability|',
    '|**4 environment**|**environmental / cultural DEPRIVATION** — chronic illness, prolonged isolation. **Most reversible; diagnosis of exclusion**|',
    '',
    '- ⚠️ **EVERY CHILD WITH DELAYED LANGUAGE GETS A HEARING TEST FIRST.** A deaf child mislabelled autistic is the disaster this prevents.',
    '- ⚠️ **TONGUE-TIE DOES NOT CAUSE DELAYED LANGUAGE DEVELOPMENT** — articulation at most; asked as the "all EXCEPT" *(not in course material)*.',
    '- **Language disorder *(Paul 1995)*: significant deficit in learning to talk, understand or use any aspect of language, relative to environment and norm-referenced expectations for the developmental level.** Either **DEVELOPMENTAL LANGUAGE DISORDER (DLD)** — born with it — or part of a broader condition: **HEARING LOSS · ADHD · AUTISM SPECTRUM DISORDER · CEREBRAL PALSY · INTELLECTUAL DISABILITIES.**',
    '- **ECHOLALIA = repetition of what has just been heard** — a **LANGUAGE** disorder, classically autism, also transcortical aphasia; normal in toddlers, **a red flag past 3 years**. Distinguish **PALILALIA** (repeating one’s OWN words) *(neither in course material)*.',
    '- **MANAGEMENT: family counselling and language intervention programs.**',
    '',
    'Src: L8 lines 66–87, 120–122'
  ].join('\n'),
  qs: ['entqb-thr9-483','entqb-thr9-490']
},

{
  id: 'phon-14', w: 'must',
  h: 'Aphasia, learning disability and dyslexia',
  body: [
    '**Language centres MAINLY IN THE LEFT HEMISPHERE: BROCA’S AREA (production / speech planning) and WERNICKE’S AREA (comprehension), connected by the ARCUATE FASCICULUS, the ANGULAR GYRUS linking sensory input to language. Damage causes APHASIA.**',
    '**Aphasia = a LANGUAGE disorder affecting understanding of spoken language · verbal expression, incl. word retrieval (ANOMIA) and sentence production · READING · WRITING.**',
    '',
    '|**Type**|**Lesion**|**Picture**|',
    '|---|---|---|',
    '|**EXPRESSIVE**|**BROCA’S**|**non-fluent, effortful, telegraphic; comprehension PRESERVED; INSIGHT preserved**; right hemiparesis usual|',
    '|**RECEPTIVE**|**WERNICKE’S**|⚠️ **impaired COMPREHENSION**; **FLUENT but empty**; ⚠️ **NO INSIGHT** → mistaken for confusion|',
    '|**MIXED**|both|both deficits|',
    '',
    '- ⚠️ **ANOMIA IS THE CORE SYMPTOM** — the one deficit common to every type. **APHONIA is a VOICE problem, not a language one.**',
    '- **SYMPTOMATOLOGY: poor auditory comprehension · word-finding difficulty · preservation and stereotyping · READING AND WRITING AFFECTION.** ⚠️ **The last item separates aphasia from dysarthria — hand the patient a pen.**',
    '- **AETIOLOGY in L8’s order: CEREBROVASCULAR STROKE (first) · traumatic brain insult · infectious processes · neoplasm · iatrogenic.** **New-onset aphasia is a time-critical stroke call. MANAGEMENT: family counselling and language intervention programs.**',
    '- Defect: one bank offers "difficulty in producing language" and "normal comprehension with impaired expression" — **the same answer twice**. Printed key (impaired understanding) correct; noted as printed.',
    '',
    '**LEARNING DISABILITY = a NEUROLOGICAL-BASED PROCESSING DISORDER interfering with basic skills (READING, WRITING, MATHS) and higher functions (organization, time management, memory); affects how information is RECEIVED, STORED, RETRIEVED AND USED; impairment DESPITE AVERAGE OR ABOVE-AVERAGE INTELLIGENCE.**',
    '- ⚠️ **That definition excludes brain damage, hearing impairment and visual impairment by construction.** **DYSLEXIA is its reading form; commonest cause GENETIC** *(L8 never names dyslexia — not in course material)*: 40–50 % risk with an affected parent, high twin heritability. **Phonological, not visual.**',
    '',
    'Src: L8 lines 88–130'
  ].join('\n'),
  qs: ['entep-throat-55','entqb-thr9-479','entqb-thr9-480','entqb-thr9-484','entqb-thr9-478']
}

    ]
  }
};
