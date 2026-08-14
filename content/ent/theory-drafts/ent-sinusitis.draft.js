/* ent-sinusitis — "Rhinosinusitis", ENT. Written from scratch 2026-08-14
   under START-HERE.md §14 (slide-density revision notes). No v1 existed.

   ⚠️ THIS CHAPTER COLLECTS ONE REGISTER ROW, from `ent-rhin` (merged):
   "L27.1/L27.2 — acute and chronic rhinosinusitis in full; only the
   viral-versus-bacterial line and the AERD/Samter clause kept". CONFIRMED
   BY READING `ent-rhin.draft.js` RATHER THAN ASSUMING: its header lists both
   decks under "NOT COUNTED, CITED ONLY", and grep of the merged
   `app\data\theory.ent.js` shows it carries neither deck's content beyond
   those two clauses. Both decks are therefore SUBSTANTIALLY MINE and are
   counted here in full. Discharged in sin-1 · sin-3 · sin-4 · sin-5 · sin-6
   · sin-8 · sin-9 · sin-10 — the entire acute deck and the entire chronic
   deck, definition to FESS.
     ⚠️ MERGE NOTE — the two clauses `ent-rhin` KEPT are not rewritten here.
     `rhin-8` holds "purulent discharge alone does not mean bacterial
     infection" — deleted from `ent-rhin` at its own compression pass as
     "`ent-sinusitis`'s fact", so it is written HERE for the first time
     (sin-4). AERD is written in `ent-rhin` as one row of Samter's triad;
     here it is one row of the CRS phenotype table, which is the only place
     L27.2 prints it, and carries the CT-severity and recurrence facts
     `ent-rhin` does not.

   BUDGET — §14.1 as revised 2026-08-14,
   budget = max(summed lecture words, 25 x linked question count),
   floor 600, cap 3,000. BOTH TERMS MEASURED FROM DISK BY LINE RANGE:

     TERM 1 — the lecture words this chapter RESTS ON:

       L27.1) ACUTE rhinosinusitis   1,025 w of the file's 1,049
         · lines 7–336 = 1,027 w — the WHOLE teaching deck: the definition
           and the contiguous-mucosa rationale, the four burden slides, the
           pathophysiology slide, the nine predisposing factors with their
           four annotated mechanisms, the major/minor diagnostic rule, the
           pain-and-tenderness and endoscopic-tour slides, the culture
           indications, the CT indications, the viral-versus-bacterial
           criteria, the four resistance mechanisms, judicious prescribing,
           intranasal steroids, the surgery slides, and both worked
           antibiotic cases.
         ⚠️ NOT CLAIMED: lines 1–6 (22 w) are the SOURCE line and the
           lecturer's attribution block. And line 285, the two-word caption
           "Orbital Complication", is DEFERRED to `ent-sinuscomp` and
           subtracted — §14.1(b), deferring and counting are opposites.
           1,027 − 2 = 1,025.

       + L27.2) Chronic Sinusitis      491 w of the file's 519
         · lines 8–129 = 491 w — the WHOLE teaching deck: definition and the
           12-week threshold, the aetiology and trigger list, biofilms and
           smoking, the CRSwNP/CRSsNP phenotype split, AERD and secondary
           causes, the symptom-plus-objective diagnostic criteria, the
           MRI-discouraged rule and the investigation list, the medical
           ladder, and FESS with its threshold, indications and goals.
         ⚠️ NOT CLAIMED: lines 1–7 (28 w), title and attribution.

       = 1,516 words

     TERM 2 — 25 x 47 linked questions = 1,175 words

     max(1,516 · 1,175) = 1,516. ⚠️ TERM 1 GOVERNS, by 341 words. Floor 600
     does not bind; cap 3,000 not reached. Operative ceiling ~2,400 body
     words (§14.1, pages ≈ words ÷ 240).

   DIAGRAM-DECK CHECK, stated as §14.1 requires, per claimed range:
       L27.1 lines 7–336 (237 non-blank lines) 1,027 w = 4.33 w/line
       L27.2 lines 8–129 (103 non-blank lines)   491 w = 4.77 w/line
       combined          (340 non-blank lines) 1,518 w = 4.46 w/line
   BOTH ARE WELL ABOVE the ~2 that marks a labelled-diagram file (L22, the
   deck that forced the second term into existence, runs 1.2). These are
   ordinary prose decks; no diagram-deck correction applies, and the lecture
   term governs on its own merits rather than by default.

   NOT COUNTED, CITED ONLY — each contributes a clause, a list or a map, and
   every one of them is already charged to a written neighbour. Claiming
   their words would bill the same slides twice:
     · L30) Rhinitis 2, lines 138–199 (227 w) — the fungal classification.
       Its 729 w are `ent-rhin`'s, which counted the WHOLE deck and states
       so. See the fungal note below for why sin-11 exists anyway.
     · L23) Anatomy of the Nose, lines 26–38 (45 w) — the drainage map.
       Lines 1–86 are `ent-noseanat`'s, a row `ent-nasalobs` already
       registered; deferred again below rather than counted.
     · L26) nasal masses, line 303 — "80% uncinate- MT – Infundibulum". Its
       676 w are `ent-nasalmass`'s.
     · L29) Rhinitis 1 — the common-cold slides and line 443's "ostiomeatal
       complex". Its 947 w are `ent-rhin`'s.
     · L31) nasal symptoms 1, lines 122–128 — the foetid-discharge cause
       list. Its 456 w are `ent-nasalmass`'s and the list is delivered in
       the merged `ent-nasalobs` (nobs-8); only the odontogenic line is
       taken here.
     · L32) nasal symptoms 2, lines 154 and 160 — two true/false
       propositions. Lines 140–172 are counted by `ent-nasalobs`.

   ⚠️ ENTITY FLOOR, COUNTED BEFORE WRITING (§14.1's `ent-dysph` and
   `ent-neck` rules — say the overrun UP FRONT, and cost the framework
   slides one by one because the entity count alone under-predicts).
     FIFTEEN entities at ~90 w each — what it is / how it presents / what
     confirms it / what treats it: 1 viral ARS · 2 acute BACTERIAL
     rhinosinusitis · 3 recurrent acute · 4 subacute · 5 CRSsNP · 6 CRSwNP
     · 7 AERD · 8 ODONTOGENIC sinusitis · 9 oro-antral fistula · 10 acute
     invasive fungal (mucormycosis) · 11 chronic invasive fungal · 12
     chronic granulomatous invasive fungal · 13 allergic fungal · 14 fungus
     ball · 15 the per-sinus acute presentations as four distinguishable
     pictures.  15 x 90 = 1,350.
     ELEVEN FRAMEWORK SLIDES, costed individually, none of which is an
     entity and none of which has fat in it because a list of names cannot
     be compressed: the two competing time ladders 70 · the nine
     predisposing factors with four annotated mechanisms 90 · the
     major/minor diagnostic rule 60 · the drainage map + the pain map 90 ·
     the four viral-to-bacterial criteria 60 · the four resistance
     mechanisms + judicious prescribing + the dosing case 110 · the culture
     and CT indication lists 70 · the CRS symptom-plus-objective criteria
     80 · the CRS investigation list 70 · the CRS medical ladder 80 · the
     FESS threshold, indications and goals 80 = 860.
     PREDICTED FLOOR ~2,210 words against a 1,516 budget — +46 % BEFORE A
     WORD IS WRITTEN, and ~9.2 pages, inside the ~2,400 / ~10-page ceiling.
     SAID HERE, IN ADVANCE, EXACTLY AS REQUIRED.

   ⚠️ MEASURED OUTCOME, taken with §14's own validator on the file AS IT
   STANDS ON DISK (§14.1's `ent-rhin` warning — the header is a claim, the
   file is the fact; this paragraph was written AFTER the measurement and
   re-measured after the final edit):

       body 2,397 words over 11 sections · intro 42 words · 47/47 linked

   That is 881 over the 1,516 budget (+58.1 %) and 729 over §14.1's 10 %
   tolerance of 1,668. REPORTED, NOT HIDDEN — and it lands 187 words above
   the 2,210 predicted before writing, which is the entity-plus-framework
   sum doing its job rather than a surprise. Per-section, measured:
     sin-1 203 · sin-2 236 · sin-3 126 · sin-4 182 · sin-5 118 · sin-6 263
     sin-7 370 · sin-8 275 · sin-9 103 · sin-10 208 · sin-11 313

   Against the acceptance test that actually governs (§14.1 as revised
   2026-08-14, PAGES not words): 2,397 ÷ 240 = 10.0 pages, and 3 words UNDER
   the ~2,400-word operative ceiling. ⚠️ THIS IS AT THE CEILING, NOT
   COMFORTABLY INSIDE IT — the estimator is ±1 page, so it may print at 9 or
   at 11, and the hub should render it rather than trust the divisor. Nine
   of the eleven sections are table-dense, which prints at 238–259 words per
   page, so 10 is the honest reading.
     The +58.1 % against the formula is arithmetic about a deck that is
   dense in named lists: L27.1 spends four slides on burden figures and five
   on two worked antibiotic cases, which read as 1,025 words of lecture but
   are three examinable numbers and one dosing rule, while the 47 questions
   cluster on two topics the counted decks barely print at all —
   ODONTOGENIC sinusitis (14 questions, absent from all 34 cached ENT decks
   except one line of L31) and FUNGAL sinusitis (12 questions, whose deck is
   charged to `ent-rhin`). Those two sections alone are 683 words, 28 % of
   the chapter, against roughly one line of counted lecture between them.

   ⚠️ FOUR COMPRESSION PASSES WERE RUN, 2,520 → 2,397, i.e. 123 words,
   −4.9 %, with no protected fact touched. Yields 89, 15, 12 and 7 — the
   last two passes returning 12 and 7 words is the signal §14.1 names: the
   fat is gone and what remains is facts. What went: the duration-selects-
   treatment bullet (the time table's own Note column already carries it),
   the 0.5–2 % figure removed from sin-1's burden line because sin-4 needs
   it and prints it there, the two worked antibiotic cases reduced to the
   rule each teaches, the CRS aetiology bullet de-prosed, and ~15 long table
   cells and bullets rewritten as fragments. The burden slides were already
   cut to three figures in the first draft, per the omission note below.

   WHY IT STOPS HERE — §14.1 requires the bill be itemised rather than a
   protected fact deleted. Reaching even the 1,668 tolerance costs 729
   words, 30 % of the chapter. The least damaging set that reaches it is:
     sin-11  fungal rhinosinusitis, entire   313 w — 12 qs unanswerable,
         and it is the only place in this chapter's notes the learner can
         reach those keys, since `rhin-14` links no questions at all
     sin-7   odontogenic + oro-antral, cut in half ~185 w — of 14 questions,
         the tooth anatomy, the treatment pairing and the whole fistula go
     sin-2   the drainage and pain maps, entire  236 w — 5 qs unanswerable
     = 734 w, 31 of 47 questions unanswerable, and the chapter loses both
   of the two topics its bank actually tests. No alternative is cheaper:
   the remaining eight sections total 1,663 w and carry the whole of both
   counted decks, definition to FESS. I did not do it. The bill is stated;
   the words are 3 under the ceiling and the pages are 10.0.

   ⚠️ WHY sin-11 EXISTS WHEN `rhin-14` ALREADY HOLDS THE FUNGAL TABLE. Read
   before writing, not assumed: `ent-rhin` counted L30 whole, wrote the five
   forms as `rhin-14`, and gave it `qs: []` — it links NO questions, because
   all twelve fungal questions are filed under THIS chapter. Leaving them to
   a table in another chapter with no link to them fails §14.2's floor
   outright ("read the chapter's questions with only the notes beside you").
   sin-11 is therefore written here as the primary treatment for the tested
   facts, on the axis the questions turn on — host, organism, lethality,
   treatment — and its 227 words of L30 stay charged to `ent-rhin`. This is
   §14.1's stated "a fact can arrive while its words stay charged elsewhere"
   case. Four things sin-11 carries that `rhin-14` does not, each the key of
   a question: Mucor named as the organism of the acute invasive form, the
   ketoacidosis/iron mechanism, steroids as the treatment of ALLERGIC fungal
   sinusitis and contraindicated in the invasive ones, and the mucormycosis
   vignette (palatal eschar, proptosis, facial numbness).

   ⚠️ COMPLICATIONS — WHAT WAS KEPT AND WHAT WAS DEFERRED. `ent-sinuscomp`
   ("Complications of sinusitis", 10 questions) is a real chapter whose
   lecture DOES NOT EXIST — the decks run L27.2 → [GAP] → L29, verified in
   the cached tree. It is NOT absorbed here.
     KEPT, because one of my 47 tests it:
       · "CT is not essential for uncomplicated ARS; it IS important for
         assessing potential complications or in anticipation of surgery"
         — L27.1's own line, and the whole basis of the keyed next step in
         one question. sin-5. No complication is named or listed.
       · The orbital and intracranial EXTENSION of ACUTE INVASIVE FUNGAL
         sinusitis — palate, orbit, anterior cranial fossa, meningitis,
         intracranial abscess, cavernous sinus thrombosis; proptosis and
         facial numbness in the vignette. Four questions turn on it, and it
         is the diagnosis rather than a complication of bacterial sinusitis.
         sin-11.
     DEFERRED to `ent-sinuscomp`, registered below, and NONE of my 47 tests
     any of it — checked question by question:
       · L27.1 line 285, the "Orbital Complication" caption (2 w, subtracted
         from TERM 1 above).
       · Pre-septal versus post-septal orbital cellulitis and the orbital
         staging (subperiosteal abscess, orbital abscess, cavernous sinus
         thrombosis) — the presentation `examiner-patterns.md` files under
         `ent-sinuscomp` (diplopia, proptosis, laterally displaced globe).
       · The lamina papyracea as the route from the ethmoid to the orbit.
       · Pott's puffy tumour and the diploic veins.
       · The ear-versus-sinus routes of intracranial abscess — SINUS to the
         FRONTAL lobe, EAR to the temporal lobe and cerebellum.
       · Osteomyelitis, mucocele and the descending complications.

   MY OTHER DEFERRALS (§14.5) — named, so each is a promise not a deletion.
   Every one was checked against all 47 of this chapter's questions:
     · L23) Anatomy of the Nose lines 1–86 — the lateral wall, the three
       turbinates and three meati AS ANATOMY, the septum, the blood supply,
       the olfactory area and the nasal functions. Only the four-line
       drainage map is used here, cited not counted, because two questions
       key a sinus from where its pus is found.        -> `ent-noseanat`
       ⚠️ 2nd chapter to register this row; `ent-nasalobs` registered it
       first and it is still unwritten.
     · The OSTEOMEATAL COMPLEX as a named anatomical unit — agger nasi,
       ethmoid bulla, uncinate process, hiatus semilunaris, infundibulum,
       lamina papyracea. Kept HERE: only that the maxillary sinus drains
       through the ethmoidal infundibulum into the middle meatus, which is
       the key of one question.                        -> `ent-noseanat`
     · L30) Rhinitis 2 lines 1–137 — the chronic specific and granulomatous
       rhinitides. ✅ VERIFIED WRITTEN in the merged `ent-rhin` (`rhin-11`
       to `rhin-13`) before deferring, not assumed.          -> `ent-rhin`
     · Nasal polyposis and the antrochoanal polyp as lesions. ✅ VERIFIED
       WRITTEN in the merged `ent-nasalmass` (`nmass-5`). Kept here only as
       the CRSwNP phenotype and as one FESS indication.  -> `ent-nasalmass`
     · The four discharge characters as a subject, and the nasal-obstruction
       work-up. ✅ VERIFIED WRITTEN in the merged `ent-nasalobs` (`nobs-8`,
       `nobs-3`). Kept here only the odontogenic line of the foetid list.
                                                        -> `ent-nasalobs`
     · Allergic rhinitis, the common cold and influenza as entities. ✅
       VERIFIED WRITTEN in the merged `ent-rhin`. Kept here only as the
       viral URTI that precedes ABRS.                         -> `ent-rhin`

   ⚠️ NINE MATERIAL GAPS, ANSWERED AND TAGGED rather than declared (§4a).
   Each was greped across ALL 34 cached ENT lecture files before being
   called a gap — "read the slide before declaring a gap", which has now
   paid nine times in this project:
     · THE TEETH RELATED TO THE MAXILLARY SINUS. `premolar` returns ZERO
       hits corpus-wide; `molar` returns only L4's pharyngeal-space lines.
       Five questions turn on it. Supplied and tagged in sin-7.
     · ORO-ANTRAL FISTULA. `oro-antral`, `oroantral` and `Caldwell` all
       return ZERO. Two questions. Supplied and tagged in sin-7.
     · THE ABRS ORGANISMS. `pneumoniae` and `Moraxella` return ZERO;
       `Haemophilus` returns only the epiglottitis decks. One question keys
       the exception. Supplied and tagged in sin-6.
     · THE TIME THRESHOLDS. `subacute` returns ZERO; `12 weeks` returns only
       L27.2's CRS definition and its pre-surgical medical trial. The acute
       and subacute boundaries are supplied and tagged in sin-1.
     · RECURRENT ACUTE RHINOSINUSITIS. L27.1 names it once, as a culture
       indication, and never defines it. Definition supplied and tagged.
     · THE PER-SINUS PAIN MAP. L27.1's slide "Anatomical Location of Pain &
       Tenderness" is a LABELLED PICTURE with no extractable text, and
       `frontal sinus` returns zero prose corpus-wide. Four questions and
       two cases turn on it. Supplied and tagged in sin-2, including the
       frontal periodicity.
     · MUCOR. `mucor` returns ZERO corpus-wide — L30 attributes the acute
       invasive form to Aspergillus in neutropenics and names no organism
       for the diabetic. Four questions key Mucor. Supplied and tagged in
       sin-11, alongside the ketoacidosis/iron mechanism.
     · STEROIDS IN FUNGAL SINUSITIS. L30 gives no treatment for the allergic
       or granulomatous forms. One question keys steroids for the allergic
       form. Supplied and tagged in sin-11.
     · MAJOR AND MINOR SYMPTOMS. L27.1 prints the counting RULE ("two or
       more major, one major and two minor, more than three minor") and
       never prints the two lists. Supplied and tagged in sin-4.

   OMISSION NOTE — cut on purpose, each a decision on the record:
     1. Distractor-by-distractor rejection. It lives in each question's own
        `explanation`, one tap away through the qs links (§14.2). Kept only
        where the teaching point IS the discrimination — viral vs bacterial
        (sin-4), CRSwNP vs CRSsNP (sin-8), the five fungal forms (sin-11),
        the drainage and pain maps (sin-2) and the time ladder (sin-1). Each
        of those is a table.
     2. Question ids in body text, teaching voice, bank meta-commentary
        beyond the three one-line defect notes §4 requires, per-fact
        citation clauses (one Src line per section), closing summary.
     3. Most of L27.1's four BURDEN slides. Kept: 80 % of URTIs associated
        with rhinosinusitis, ~1 billion viral cases a year, and 0.5–2 %
        becoming bacterial — the three an "all EXCEPT" stem could use, and
        the third is load-bearing. Dropped: 2–3 colds per adult and 3–8 per
        child per year, 13.4 % of adults diagnosed in 12 months, the 1.9-fold
        female excess, the 45–74 age band, "fifth most frequent reason for
        antibiotic prescription", and the socioeconomic-burden slide. No
        question touches any of them and none changes management.
     4. The two worked antibiotic cases reduced to the rule each teaches —
        under-dosing mimics resistance, and a non-responding "infection"
        may not be bacterial. The individual millilitres, the ceftriaxone
        day count and the pharyngitis patient's drug names are dropped.
     5. Drug doses, antibiotic durations and antifungal regimens the
        material does not state. Amoxicillin-clavulanate for 10 days is
        given because a question keys it, and it is tagged.
     6. L27.1's slide headings with no content under them ("Endoscopic
        Tour", "Step 1/2/3", "Do we need surgery?" printed four times) carry
        no extractable fact beyond the two endoscopic findings already
        taken.

   DEFECT NOTES (§4b — noted, never disputed), each one line in the body:
     · The bank prints TWO different time ladders. Its own box gives acute
       under 3 weeks / subacute 3 weeks–3 months; another of its questions
       keys subacute at 4–12 weeks. Both recorded in sin-1, keyed as
       printed, neither corrected.
     · One option is printed as "Streptococcus influenza", which is not an
       organism. Recorded in sin-6, keyed as printed.
     · The bank keys a DIFFERENT tooth in each of its three printings on the
       same anatomy — the second premolar and first molar, the upper first
       molar, and the upper second molar for the fistula. Recorded in sin-7,
       each keyed as printed.

   Table pipes carry no padding — mdCells() trims outer delimiters.
   Curly apostrophes throughout: a straight one closes a single-quoted field. */

var THEORY_ENT_SINUSITIS = {
  'ent-sinusitis': {

    intro: 'Two thirds of the questions are one disease: unilateral cheek pain and foetid discharge after dental work. The rest sort on time — under four weeks, over twelve — and on the host: a black turbinate in a diabetic is not sinusitis.',

    sections: [

{
  id: 'sin-1', w: 'must',
  h: 'Definitions and the time ladder',
  body: [
    '- **Acute rhinosinusitis = an inflammatory condition involving the NOSE AND THE PARANASAL SINUSES.** The nasal mucosa is **contiguous** with the sinus mucosa, so **sinus inflammation is almost always accompanied by inflammation of the nasal cavity** — hence *rhino*sinusitis.',
    '- **Chronic rhinosinusitis (CRS) = chronic inflammatory disease of SINUS MUCOSA lasting MORE THAN 12 WEEKS.** One sinus or several. **One of the most prevalent chronic diseases globally.**',
    '',
    '|Form|Duration|Note|',
    '|---|---|---|',
    '|**Acute**|**< 4 weeks** *(boundary not in course material)*|an **infection**|',
    '|**Subacute**|**4–12 weeks** *(not in course material)*|resolving or grumbling|',
    '|**CHRONIC**|**> 12 WEEKS**|an **inflammatory disease**, not simply an infection|',
    '|**RECURRENT ACUTE**|discrete attacks **each < 1 month**, separated by a **symptom-free period of ≥ 10 days** with return to baseline *(not in course material)*|**not** continuous symptoms — that is chronic|',
    '',
    '- **Recurrent acute is one of the four indications for bacterial culture.**',
    '- **Burden:** up to **80 % of URTIs are associated with rhinosinusitis**; ~**1 billion** viral cases a year in the USA.',
    '- **Defect note:** the bank prints two ladders — its own box gives acute < 3 weeks and subacute 3 weeks–3 months, another question keys subacute at 4–12 weeks. Both recorded, each keyed as printed.',
    '',
    'Src: L27.1 lines 7–18, 19–55, 184–194, 208–215; L27.2 lines 8–20'
  ].join('\n'),
  qs: ['entqb-nose3-98','entqb-nose4-149']
},

{
  id: 'sin-2', w: 'must',
  h: 'Where each sinus drains, and where each one hurts',
  body: [
    '|Sinus|Drains into|Pain and tenderness *(map not in course material)*|',
    '|---|---|---|',
    '|**Maxillary**|**MIDDLE MEATUS**, through the **ethmoidal infundibulum**|**cheek**, referred to the **upper jaw and upper teeth**; **tenderness over the anterior antral wall, below the inferior orbital margin** — the only sinus you can palpate directly|',
    '|**Frontal**|**MIDDLE MEATUS**|**above the eye**, **tenderness over the eyebrow**; **PERIODIC — starts in the morning, peaks by mid-day, eases by evening**|',
    '|**Anterior ethmoid**|**MIDDLE MEATUS**|between and behind the eyes, **medial canthus**|',
    '|**Posterior ethmoid**|**SUPERIOR MEATUS**|deep retro-orbital ache|',
    '|**Sphenoid**|**SPHENOETHMOIDAL RECESS**|vertex, occiput, deep retro-orbital|',
    '|*(nasolacrimal duct)*|*inferior meatus* — **no sinus drains here**|—|',
    '',
    '- **PUS LOCATES THE SINUS.** Middle meatus = frontal, anterior ethmoid or maxillary. **Superior meatus, between superior turbinate and septum = POSTERIOR ETHMOID.** Sphenoethmoidal recess = **sphenoid**. The last two are the lecture’s named endoscopic findings.',
    '- **Mucosal swelling in the INFUNDIBULUM — not in the antrum — is what obstructs the maxillary sinus**, so surgery clears the **osteomeatal complex** rather than the sinus. The complex is the confluence of **uncinate process, ethmoid bulla, hiatus semilunaris and infundibulum**; polyps arise at uncinate–middle turbinate–infundibulum in **80 %** and at the anterior face of the bulla / hiatus in **66 %**.',
    '- **Same cold, two pictures:** eyebrow tenderness with morning-peaking pain = **frontal**; cheek and periorbital tenderness with pus in the middle meatus = **maxillary**. A septum deviated to that side is why it recurs.',
    '',
    'Src: L23 lines 26–38; L27.1 lines 159–183; L26 line 303; L29 line 443'
  ].join('\n'),
  qs: ['entqb-nose1-45','entqb-nose7-226','entep-nose-85','entep-nose-case-14','entep-nose-case-15']
},

{
  id: 'sin-3', w: 'high',
  h: 'Acute rhinosinusitis — what starts it and what predisposes to it',
  body: [
    '- **THE COMMONEST AETIOLOGY IS RHINOGENIC** — a viral **upper respiratory tract infection** obstructs the ostium, secretions stagnate, bacteria overgrow. **Dental is second**; environmental and traumatic causes are minor.',
    '',
    '**NINE PREDISPOSING FACTORS, with the mechanisms the lecture annotates:**',
    '',
    '|Factor|Mechanism given|',
    '|---|---|',
    '|**Environmental exposure**|**air pollution, irritants used in preparing pharmaceutical products, photocopying, forest-fire smoke** — all raise the prevalence of ARS symptoms|',
    '|**Allergy**|**ICAM-1**, the inflammatory adhesion molecule, is **elevated in allergic rhinitis** → increased susceptibility to respiratory infection|',
    '|**Smoking**|**active and passive** smoking **alters the normal nasopharyngeal flora** → colonisation by more potential pathogens than in non-smokers|',
    '|**Ciliary impairment**|**viral infection · smoking · allergy · PRIMARY CILIARY DYSKINESIA**|',
    '|**Anatomical variations**|narrow the osteomeatal complex|',
    '|**Laryngopharyngeal reflux**|—|',
    '|**Anxiety and depression**|—|',
    '|**Drug resistance**|—|',
    '|**Concomitant chronic disease**|—|',
    '',
    'Src: L27.1 lines 56–137, 244–252'
  ].join('\n'),
  qs: ['entqb-nose4-151','entqb-nose7-226']
},

{
  id: 'sin-4', w: 'must',
  h: 'Diagnosing ABRS — the counting rule, and viral versus bacterial',
  body: [
    '**THE DIAGNOSTIC RULE — acute rhinosinusitis is strongly suspected with:** **two or more MAJOR** signs or symptoms · **or one major and two minor** · **or more than three minor**.',
    '- **MAJOR** *(list not in course material)*: facial pain/pressure, facial congestion/fullness, nasal obstruction, purulent nasal or postnasal discharge, hyposmia/anosmia, fever (acute only). **MINOR**: headache, halitosis, fatigue, dental pain, cough, ear pain/pressure/fullness.',
    '',
    '**VIRAL OR BACTERIAL — four factors suggest ACUTE BACTERIAL rhinosinusitis:**',
    '',
    '|Factor|Why it matters|',
    '|---|---|',
    '|**Worsening of symptoms AFTER 5 DAYS**|a cold improves from day 3–5|',
    '|**Persistence of symptoms for MORE THAN 10 DAYS**|the single commonest criterion met|',
    '|**Symptoms OUT OF PROPORTION** to a typical viral URTI|high fever, severe unilateral pain|',
    '|**"DOUBLE-SICKENING" — worsening after initial improvement**|**the most specific sign of the switch**|',
    '',
    '- **⚠️ PURULENT DISCHARGE ALONE IS NOT BACTERIAL.** Thick yellow-green discharge is a normal stage of an ordinary cold and is **not** a reason to prescribe. Neither is headache.',
    '- **Only 0.5–2 % of viral rhinosinusitis becomes bacterial** — the arithmetic behind not prescribing. **Viral resolves without antibiotics; bacterial may require antimicrobial therapy.**',
    '',
    'Src: L27.1 lines 138–158, 208–226, 238–243'
  ].join('\n'),
  qs: ['entep-mfe4-20','entqb-nose4-156','entqb-nose4-167']
},

{
  id: 'sin-5', w: 'high',
  h: 'When to culture and when to scan an acute sinus',
  body: [
    '|Test|Indicated|',
    '|---|---|',
    '|**Bacterial culture**|**ONLY in four settings: recurrent acute rhinosinusitis · acute exacerbation of chronic rhinosinusitis · immunosuppression · failure to respond to appropriate initial antibiotic therapy.**|',
    '|**CT**|**NOT essential to diagnose uncomplicated acute rhinosinusitis.** It **IS** important for **assessing potential complications** of acute sinus disease, or **in anticipation of surgery** on the sinuses.|',
    '',
    '- **⚠️ THE NEXT STEP IN UNILATERAL OR ODONTOGENIC DISEASE IS CT, BEFORE ANY TREATMENT.** Unilateral maxillary disease is not the uncomplicated bilateral cold the "no CT" rule was written for — it needs the extent, the tooth and the ostium shown first. **Antral lavage and FESS are both surgery**, so imaging precedes them; **topical steroids treat mucosa, not a tooth.**',
    '',
    'Src: L27.1 lines 184–207'
  ].join('\n'),
  qs: ['entep-enr-14']
},

{
  id: 'sin-6', w: 'must',
  h: 'Treating acute bacterial rhinosinusitis — organism, dose, steroid',
  body: [
    '- **ORGANISMS** *(not in course material)*: ***Streptococcus pneumoniae*** · ***Haemophilus influenzae*** · ***Moraxella catarrhalis***. **NOT *Pseudomonas aeruginosa*** — that is nosocomial, cystic fibrosis and the immunocompromised, and in ENT it means **malignant otitis externa**.',
    '- **ANTIBIOTIC: amoxicillin or amoxicillin-clavulanate for 10 days, at an ADEQUATE dose** *(agent and duration not in course material; the lecture works the dose)*. Choose by **local rates of resistance within the country**.',
    '- **⚠️ UNDER-DOSING MIMICS RESISTANCE.** The worked case: 40 mg/kg/day of amoxicillin-clavulanate ES gave **84 mg of clavulanate where 180 mg was needed** — the **400/57 formulation** was required. Failure, a second inadequate drug, then **endoscopic drainage with a STERILE culture.**',
    '- **⚠️ CYCLING ANTIBIOTICS IS NOT A STRATEGY** — "little logic exists" in TMP/SMX, then cefaclor, then azithromycin. And **a non-responding "infection" may not be bacterial**: the second case, a 10-day sore throat given two antibiotic courses, was **viral** and responded to **aciclovir**.',
    '- **FOUR MECHANISMS OF RESISTANCE:** **beta-lactamase** and other destroying enzymes · **membrane changes making the outer membrane impermeable** · **alterations in the organism’s RNA affecting binding-site affinity** · **efficient membrane EFFLUX transporters.**',
    '- **INTRANASAL CORTICOSTEROIDS are recommended in ARS** — **monotherapy in moderate** disease, **with oral antibiotics in severe** disease. They are an adjunct, never the whole treatment of a bacterial sinusitis.',
    '- **SURGERY IN ACUTE DISEASE IS THE EXCEPTION** — the lecture shows only **acute sphenoiditis** and a **complicated** sinus. **FESS is NOT a treatment for uncomplicated acute rhinosinusitis.**',
    '- **Defect note:** one option is printed as "Streptococcus influenza", which is not an organism. Keyed as printed.',
    '',
    'Src: L27.1 lines 227–336'
  ].join('\n'),
  qs: ['entqb-nose4-152','entqb-nose4-157']
},

{
  id: 'sin-7', w: 'must',
  h: 'Odontogenic (dental) sinusitis and oro-antral fistula',
  body: [
    '**THE ANATOMY** *(not in course material)* — the roots of the **UPPER SECOND PREMOLAR and FIRST MOLAR** lie against the **floor of the maxillary sinus**, separated by paper-thin bone or mucosa alone. Lower teeth are in the mandible and have no relation to it.',
    '- **Defect note:** the bank keys a different tooth in each of its three printings — *the second premolar and first molar* for the plural question, *the upper first molar* for the single tooth, and *the upper second molar* as the commonest cause of oro-antral fistula. Each keyed as printed; the first molar appears in two of the three.',
    '',
    '|Feature|Odontogenic maxillary sinusitis|',
    '|---|---|',
    '|**Trigger**|**root canal · extraction · a carious upper premolar or molar** — always the **SAME SIDE** as the tooth|',
    '|**Pain**|**UNILATERAL cheek pain and tenderness**, worse on **bending forward**; may be felt as upper-jaw pain|',
    '|**Discharge**|**UNILATERAL and FOETID**, purulent — **NEVER watery** (printed as a true/false statement to be corrected)|',
    '|**Why foetid**|the organisms are **ORAL ANAEROBES** *(not in course material)*|',
    '|**Other**|obstruction, headache; **congested middle meatus with discharge coming out of it**|',
    '|**Duration**|**< 4 weeks = acute**; **≥ 12 weeks = chronic** odontogenic maxillary sinusitis|',
    '|**Imaging**|**CT**; **antral opacity on plain X-ray** in the classic case|',
    '|**Treatment**|**BOTH ENDS: broad-spectrum, anaerobe-covering antibiotics PLUS dental consultation.** Antibiotics alone relapse; extraction is the dentist’s call; **FESS only for failure or established chronic disease** *(pairing not in course material)*|',
    '',
    '- **⚠️ UNILATERAL + FOETID DECIDES IT BY AGE:** **ADULT → odontogenic sinusitis** (commonest) · **CHILD → foreign body** · **older, blood-stained → sinonasal neoplasm.** An acute viral cold is never foetid and never unilateral. **Dental infection is also a named trigger of CRS** — "infection of an adjacent organ (e.g. teeth)".',
    '',
    '**ORO-ANTRAL FISTULA** *(whole entity not in course material)*',
    '- **Commonest cause: extraction of an UPPER MOLAR whose roots projected into the antrum** — not acute sinusitis, trauma or the radical antrum operation.',
    '- **Fluid REGURGITATES from the mouth into the nose on that side**, with offensive discharge, facial pain and a **DIMPLE IN THE GUM** at the socket, congested and covered with discharge. Chronic unilateral maxillary sinusitis follows.',
    '- **Treat the sinusitis, then CLOSE THE FISTULA WITH A FLAP.**',
    '',
    'Src: L27.2 lines 21–36; L31 lines 122–128; L32 line 154'
  ].join('\n'),
  qs: ['entep-nose-4','entep-nose-24','entep-nose-37','entep-nose-54','entep-nose-62','entep-nose-66','entep-nose-76','entep-nose-102','entep-mfe4-29','entqb-nose4-155','entqb-nose4-168','entqb-nose5-186','entep-nose-case-3','entep-nose-case-6']
},

{
  id: 'sin-8', w: 'must',
  h: 'Chronic rhinosinusitis — the two phenotypes and the diagnostic criteria',
  body: [
    '- **Aetiology UNCLEAR** — host response versus external factors. **Proposed triggers: allergens (e.g. aspirin) · bacteria, especially *Staph. aureus* ENDOTOXINS · viruses · infection of an adjacent organ (e.g. TEETH) · trauma · anatomical variations.**',
    '- **BIOFILMS and SMOKING → worse outcomes and resistance to treatment; smoking also increases the RISK of CRS.**',
    '',
    '|Phenotype|Symptoms it favours|Outcome|',
    '|---|---|---|',
    '|**CRSsNP** — without nasal polyps|**more FACIAL PAIN and HEADACHE**|**BETTER treatment outcomes, LOWER recurrence**|',
    '|**CRSwNP** — with nasal polyps|**more LOSS OF SMELL**|worse; oral steroids and biologics belong here|',
    '|**Nasal obstruction**|**common in BOTH** — it does not separate them|—|',
    '|**AERD (aspirin-exacerbated respiratory disease, Samter’s triad)**|as CRSwNP|**often very extensive, significantly WORSE CT findings than non-AERD polyp patients; difficult to treat, HIGHER recurrence**|',
    '',
    '- **Consider SECONDARY causes** — vasculitis, immunodeficiency — in patients **unresponsive to treatment or with systemic symptoms.**',
    '',
    '**THE DIAGNOSTIC CRITERIA — 12 weeks or longer of TWO OR MORE of:**',
    '- **Mucopurulent drainage** (anterior, posterior, or both) · **nasal obstruction (congestion)** · **facial pain / pressure / fullness** · **decreased sense of smell.**',
    '',
    '**AND inflammation documented by ONE OR MORE of:**',
    '- **Purulent (NOT clear) mucus or oedema in the middle meatus or anterior ethmoid region** · **polyps in the nasal cavity or middle meatus** · **radiographic imaging showing inflammation of the paranasal sinuses.**',
    '',
    '- **⚠️ CACOSMIA IS NOT ON THE LIST** and is the **least common** of the classic four complaints — the common three are **obstruction, postnasal discharge and headache**. A foul smell points instead to a **fungus ball, dental source, foreign body or tumour.**',
    '- **Symptoms alone are not enough — the definition REQUIRES objective evidence**, which is why CT is mandatory.',
    '',
    'Src: L27.2 lines 21–77'
  ].join('\n'),
  qs: ['entep-nose-44','entqb-nose3-131']
},

{
  id: 'sin-9', w: 'must',
  h: 'Investigating chronic rhinosinusitis',
  body: [
    '|Investigation|Role|',
    '|---|---|',
    '|**CT WITHOUT CONTRAST**|**the imaging of choice.** Shows bone and the osteomeatal complex, supplies the objective inflammation the definition demands, and **excludes aggressive infection or neoplastic disease mimicking CRS or ARS**|',
    '|**MRI**|**DISCOURAGED** — increased **cost** and **overdiagnosis** compared with CT without contrast. Reserved for soft tissue and intracranial extension|',
    '|**Nasal endoscopy**|complements CT — sees polyps, oedema and pus in the middle meatus; **cannot replace it**|',
    '|**Allergy testing**|**skin prick testing or RAST**|',
    '|**Nasal biopsy**|**exclude neoplasia; look for granulomas / vasculitis**|',
    '|**CBC · serum eosinophilia**|eosinophilic phenotype|',
    '|**ANCA**|**Wegener’s granulomatosis**|',
    '|**ACE**|**sarcoidosis**|',
    '',
    '- **Plain X-ray and ultrasound have no role** in chronic disease.',
    '',
    'Src: L27.2 lines 81–97'
  ].join('\n'),
  qs: ['entep-nose-23','entqb-nose4-158']
},

{
  id: 'sin-10', w: 'must',
  h: 'Treating chronic rhinosinusitis — the medical ladder, then FESS',
  body: [
    '**MEDICAL — the mainstay:**',
    '- **SALINE NASAL IRRIGATION** — improves **mucociliary clearance** and **removes antigens and biofilm.**',
    '- **TOPICAL INTRANASAL CORTICOSTEROIDS (INCS)** — effective anti-inflammatory agents.',
    '- **No response to INCS → a SHORT COURSE OF ORAL CORTICOSTEROIDS, only in CRSwNP.**',
    '- **CHRONIC ANTIBIOTICS, especially MACROLIDES → CRSsNP.**',
    '- **Others: mucolytics · decongestants · BIOLOGICAL THERAPY in CRSwNP.**',
    '',
    '**SURGICAL — FUNCTIONAL ENDOSCOPIC SINUS SURGERY (FESS):**',
    '- **Only after FAILED medical therapy — at least 12 WEEKS of nasal saline, INCS and often systemic steroids.**',
    '- **Also indicated for patients needing more than 2–3 courses of oral steroids per year.**',
    '- **Three goals: REMOVE OBSTRUCTION · REDUCE INFLAMMATION · IMPROVE DELIVERY OF TOPICAL MEDICATION** — so topical steroids continue **after** surgery, not instead of it.',
    '',
    '|FESS is indicated in|FESS is NOT for|',
    '|---|---|',
    '|**medically refractory CRS** · **extensive sinonasal polyposis** · **antrochoanal polyp** · **allergic fungal sinusitis** · **inverted papilloma**|**ATROPHIC RHINITIS** — a nose already too roomy; treat by douching and crust removal, never by widening it further. **Uncomplicated ACUTE rhinosinusitis**|',
    '',
    '- **The superseded approaches** *(not in course material)*: **Caldwell-Luc**, **external frontoethmoidectomy** and **repeated sinus irrigation** — historical, and irrigation alone does not hold. FESS **enlarges the NATURAL ostium** rather than creating a dependent one.',
    '',
    'Src: L27.2 lines 98–129'
  ].join('\n'),
  qs: ['entep-nose-17','entqb-nose4-159','entep-nose-96']
},

{
  id: 'sin-11', w: 'must',
  h: 'Fungal rhinosinusitis — five forms, sorted by the host',
  body: [
    '**INVASIVE (3) and NON-INVASIVE (2). The axis is IMMUNOCOMPETENCE: only the ACUTE invasive form needs a compromised host.**',
    '',
    '|Form|Host|Organism|Key facts and treatment|',
    '|---|---|---|---|',
    '|**ACUTE INVASIVE**|**poorly controlled DIABETICS** · **immunocompromised with severe NEUTROPENIA** (chemotherapy, BMT, transplant, AIDS)|**MUCOR in the ketoacidotic diabetic** *(organism not in course material)*; ***Aspergillus* accounts for 80 %** in the neutropenic group|**MOST LETHAL form — mortality 50–80 %.** Early signs **necrosis of nasal tissue and BLACKISH mucosa**. Spreads to **palate, orbit, anterior cranial fossa**; **meningitis, intracranial abscess, cavernous sinus thrombosis**. **Treat: correct the immune suppression · AGGRESSIVE SURGICAL DEBRIDEMENT · systemic antifungal, mainly AMPHOTERICIN B**|',
    '|**CHRONIC INVASIVE**|usually **immunocompetent**|Aspergillus|history of **chronic rhinosinusitis**; indolent|',
    '|**CHRONIC GRANULOMATOUS INVASIVE**|**IMMUNOCOMPETENT**|***Aspergillus flavus***|primary paranasal granuloma, indolent, mass-like; **NON-CASEATING granulomas** (caseating = TB)|',
    '|**ALLERGIC FUNGAL**|**IMMUNOCOMPETENT**, often asthmatic|inhaled fungi|**MOST COMMON form of fungal sinusitis.** A **hypersensitivity** reaction → chronic **NON-infectious** inflammation — **type I (IgE) AND type III**. Polyps, eosinophil-rich **allergic mucin** *(term not in course material)*. **Treated with STEROIDS plus FESS** *(not in course material)*|',
    '|**FUNGUS BALL (mycetoma)**|**IMMUNOCOMPETENT**, older, **female > male**|Aspergillus|asymptomatic or minimal — chronic pressure or discharge, **CACOSMIA**; **SURGICALLY treated**|',
    '',
    '- **⚠️ STEROIDS ARE THE TREATMENT OF THE ALLERGIC FORM AND ARE CONTRAINDICATED IN THE INVASIVE ONES**, where they deepen the immune defect *(contraindication not in course material)*.',
    '- **⚠️ MUCORMYCOSIS IS A SURGICAL EMERGENCY.** The vignette: **uncontrolled diabetic or renal-failure patient** · **black necrotic eschar on hard palate or turbinate** · **blood-stained or blackish discharge** · **proptosis, diminished vision, diminished facial sensation** · fever and headache. The necrosis is **painless INFARCTION** — the fungus is **angioinvasive**. **Biopsy the turbinate the same day.**',
    '- **Why the ketoacidotic diabetic** *(mechanism not in course material)*: acidosis frees **iron from transferrin**, which Mucor needs to grow.',
    '- **BLACK NECROTIC MUCOSA IN AN IMMUNOCOMPROMISED PATIENT IS INVASIVE FUNGAL SINUSITIS UNTIL PROVEN OTHERWISE** — the non-invasive forms do not kill tissue.',
    '',
    'Src: L30 lines 138–199 (deck counted by `ent-rhin`); L27.2 lines 61–64'
  ].join('\n'),
  qs: ['entep-nose-94','entep-mfe4-28','entqb-nose3-136','entqb-nose3-137','entqb-nose3-138','entqb-nose3-139','entqb-nose3-140','entqb-nose3-141','entqb-nose3-142','entqb-nose3-143','entqb-nose4-154','entep-nose-case-9']
}

    ]
  }
};
