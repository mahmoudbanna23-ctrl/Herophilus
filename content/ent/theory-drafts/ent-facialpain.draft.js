/* ent-facialpain — "Facial pain, rhinogenic headache", ENT. Written from
   scratch 2026-08-14 under START-HERE.md §14 (slide-density revision notes).
   No v1 existed. 13 linked questions.

   ⚠️⚠️ THIS CHAPTER IS OWED ONE REGISTER ROW AND IT IS NEARLY A WHOLE
   LECTURE. §14.5, row `ent-nasalobs` (L32 lines 6–139): "HEADACHE IN FULL —
   547 words, the whole facial-pain half of the deck." COLLECTED IN FULL and
   itemised at the end of this header. `ent-nasalobs` claimed only lines
   140–172 (the three true/false revision slides, 100 w) and its own header
   states the split from its side in the same line numbers — verified on disk
   before writing, not assumed. The two claims are disjoint and together with
   the 14-word title block they account for the whole 661-word file.

   ────────────────────────────────────────────────────────────────────────
   BUDGET — §14.1 as revised 2026-08-14,
   budget = max( summed lecture words , 25 x linked question count ),
   floor 600, cap 3,000. BOTH TERMS MEASURED FROM DISK BEFORE WRITING
   (`sed -n 'a,b p' | wc -w`, the tokeniser every precedent used).

     TERM 1 — the lecture words this chapter RESTS ON, BY LINE RANGE:

       L32) nasal symptoms 2        547 w of the file’s 661
         · lines 6–139 — the ENTIRE headache half: the four controversy
           bullets (rhinogenic headache is controversial · the commonest
           headache in ENT patients is PRIMARY · "contact headache" and the
           local-anaesthetic test · acute sinusitis causes FACIAL PAIN not
           headache, including vacuum headache), the primary classification
           (3), the secondary classification (8), the migraine clinical
           slide, migraine predisposing and trigger factors, the two-column
           acute-treatment table, the triptan list with doses, migraine
           prophylaxis, the two tension-headache slides, the two cluster
           slides, trigeminal neuralgia, and "Other Neuralgias".
         ⚠️ NOT CLAIMED — lines 1–5 (14 w, the SOURCE and title block) and
           lines 140–172 (100 w, the three TRUE/FALSE revision slides on
           obstruction and discharge), which are `ent-nasalobs`’s and are
           counted there. One of its nine propositions is this chapter’s
           subject — "Primary headache is the more frequent type of headache
           in ENT practice" — but it is a restatement of line 10, which IS
           inside my range, so nothing is double-billed and nothing is lost.

       NOT COUNTED, declined deliberately (§14.1: "do not count a lecture you
       cite once… count what the chapter RESTS ON, cite the rest"). Every one
       of these is claimed in full by a neighbouring chapter, so counting any
       of them would both inflate this budget and double-bill that chapter:
         · L27.1) ACUTE rhinosinusitis 1,049 w + L27.2) Chronic Sinusitis
           519 w — `ent-sinusitis` counts 1,025 + 491 of them. Cited here for
           two clauses only: the "Anatomical Location of Pain & Tenderness"
           slide (which is a PICTURE — see the grep report below) and CRSsNP
           favouring facial pain and headache.
         · L17,18) Otorrhea and otalgia 684 w — `ent-otalgia`’s backbone.
           Cited for one line: TMJ, parotid and pre-auricular nodes as
           neighbouring structures, and the four-nerve referred-otalgia
           table, which is WRITTEN THERE and is only pointed at here.
         · L16) Chronic otitis media 884 w — `ent-otalgia` and `ent-csom`.
           Cited for Gradenigo’s VI palsy only; L32 prints Gradenigo itself
           inside my range, so the entity is sourced from my own deck.
         · L31) nasal symptoms 1 456 w — split entirely between
           `ent-nasalobs` (241 w) and `ent-nasalmass` (193 w). Not cited.
         · L15) Facial nerve disorders 1,557 w — `ent-facial`’s. Herpes
           zoster is cited for one clause; the palsy is not this chapter’s
           subject at all (see the boundary note below).

       = TERM 1  **547 words**

     TERM 2 — 25 x 13 linked questions = **325 words**

     max(547 , 325) = 547 → **THE FLOOR OF 600 BINDS AND IS THE BUDGET.**
     TERM 1 governs between the two terms, by 222 words, but both are below
     the floor, so 600 is the operative number. Cap 3,000 nowhere near.
     Operative ceiling ~2,400 body words (§14.1, pages ≈ words ÷ 240).

     ⚠️ THIS IS §14.1’s `ent-dysph` THIRD FAILURE MODE, ANNOUNCED UP FRONT:
     BOTH TERMS ARE LOW TOGETHER, so they are not independent checks. TERM 2
     is low because the bank asks this chapter only 13 questions. TERM 1 is
     low because the deck is a LIST DECK — fourteen slides that are drug
     names, dose figures, classification bullets and clinical criteria, where
     "a list of names has no fat in it" (§14.1’s `ent-neck` correction). The
     brief said so in advance — 13 questions sitting on ~550 words of
     deferred lecture, the `ent-swallow` / `ent-vocal` / `ent-otorrhea`
     shape — and instructed the floor be built on entities and frameworks,
     never on 13 x 25.

   ────────────────────────────────────────────────────────────────────────
   DIAGRAM-DECK TEST (§14.1 — words per non-blank line, under ~2 = a labelled
   diagram deck whose extracted text understates it). RUN, AND IT DOES NOT
   BITE:

       L32 lines 6–139    547 w / 120 non-blank lines = **4.56 w/line**
       (L22, the deck that forced TERM 2 into existence, runs 1.2;
        L4) PHARYNGEAL SUPPURATIONS, an ordinary prose deck, runs 5.4.)

   So NO diagram-deck correction is claimed and TERM 1 is a real measurement
   of a real prose deck. ⚠️ AND THE NOTE THE TEST REQUIRES IN THE OTHER
   DIRECTION: no part of this range is a visual transcription of image-only
   slides, which would measure HIGH rather than low. The whole range extracts
   as ordinary bulleted text.
   ⚠️ One honest qualification, because 4.56 flatters the deck slightly: the
   acute-treatment slide (lines 54–78) extracts as a two-column TABLE, which
   puts several cells on one line and lifts the average, and lines 72–78 are
   a footnote, a journal citation and a slide number — ~20 of the 547 words
   are not teaching content. Neither is large enough to move the verdict.

   ────────────────────────────────────────────────────────────────────────
   ⚠️ ENTITY + FRAMEWORK FLOOR, COUNTED BEFORE WRITING (§14.1’s `ent-dysph`
   rule, with `ent-neck`’s correction — framework slides costed ONE BY ONE,
   never lumped — and `ent-phon`’s correction — a comparison grid costed at
   ROWS x COLUMNS, because every cell is a fact somebody has to write):

     ENTITIES at ~90 w (what it is / how it presents / what confirms it /
     what treats it) — this chapter is a differential, so the entities are
     the bulk of it:
       1 migraine 90 · 2 tension-type headache 90 · 3 cluster headache 90 ·
       4 trigeminal neuralgia 90 · 5 rhinogenic / vacuum headache 90 ·
       6 contact-point headache 70 · 7 TMJ dysfunction 50 ·
       8 herpetic / post-herpetic neuralgia 40 · 9 glossopharyngeal
       neuralgia 30 · 10 Tolosa–Hunt 40 · 11 Gradenigo 40 ·
       12 temporal arteritis 50 · 13 atypical facial pain 40
       = 710 words.

     FRAMEWORK SLIDES, costed individually:
       the four controversy bullets 110 · primary classification (3 items)
       25 · secondary classification (8 items) 60 · migraine predisposing +
       trigger factors 60 · the acute-treatment two-column table 60 · the
       triptan list with four doses 55 · migraine prophylaxis (duration,
       taper, two agent lines) 50 · tension treatment 25 · cluster treatment
       40 · the four-sinus pain-site map (6 rows x 2 cols) 90 · the criteria
       of sinus pain 45 · red flags for a non-ENT cause 60 · the cavernous
       sinus contents 60
       = 740 words.

     THE CENTRAL DISCRIMINATION GRID, costed at rows x columns as `ent-phon`
     requires: five column entities (sinus · migraine · tension · cluster ·
     trigeminal neuralgia) across seven axes (site, character, duration,
     laterality, aggravation, associated features, who gets it) = 35 cells,
     ~7 w a cell = 245 words. **This is the single most testable thing in
     the chapter** — the brief names it as such, and six of the thirteen
     questions are decided by one of its cells.

     PREDICTED FLOOR ~1,695 WORDS against a 600-word budget — +183 % BEFORE
     A WORD IS WRITTEN. SAID HERE IN ADVANCE, AS REQUIRED. In pages that is
     ~7.1, comfortably under the ~10-page acceptance test and 705 words under
     the ~2,400 operative ceiling. The plan stated up front: write to
     ~1,450–1,600, hold well under the ceiling, take nothing out of a
     protected fact, and report the overrun as an itemised bill rather than
     buy the number by deleting an eponym. **Reaching 600 would mean keeping
     the grid and nothing else** — no drug, no dose, no neuralgia, no sinus
     map — which leaves at least 8 of the 13 questions unanswerable and
     deletes the register row this chapter exists to collect.

   ────────────────────────────────────────────────────────────────────────
   ⚠️ MEASURED OUTCOME — §14.1’s `ent-rhin` and `ent-vocal` warnings: THE
   HEADER IS A CLAIM, THE FILE IS THE FACT, and a per-section breakdown that
   sums correctly proves only that the numbers came from ONE state of the
   file, never that it was the LAST state. So this paragraph was written
   after the last keystroke in the sections below, and the validator was then
   re-run over the file as it stands on disk:

       body **1,854 words** over 11 sections · intro 41 words · 13/13 linked

   Per-section, measured in the same run (they sum to 1,854, which — per the
   `ent-vocal` warning — is offered as arithmetic, not as evidence; the
   evidence is that the run post-dates the final edit):
     fp-1 125 · fp-2 250 · fp-3 126 · fp-4 132 · fp-5 146 · fp-6 146 ·
     fp-7 110 · fp-8 200 · fp-9 148 · fp-10 218 · fp-11 253.

   ⚠️ AND THE FIRST VERSION OF THIS PARAGRAPH WAS WRONG, WHICH IS RECORDED
   RATHER THAN OVERWRITTEN: it was drafted mid-write claiming 1,606 words and
   a per-section breakdown that summed to it. The validator returned 1,902.
   The claim predated the file by three sections — the exact `ent-vocal`
   failure — and the number here is the re-measurement, not the plan.

   Against the 600-word budget that is +1,254 (+209 %), and 1,194 over
   §14.1’s 10 % tolerance of 660. REPORTED, NOT HIDDEN. The entity+framework
   prediction above was 1,695 and the file is 1,854 — over it by 159, i.e.
   the prediction was accurate to +9.4 %, the error sitting in the two
   tagged general-knowledge sections (fp-10 and fp-11) which came in ~35 %
   above their costing because a tagged claim has to carry its own support.

   Against the acceptance test that actually governs (§14.1 as revised
   2026-08-14 — PAGES, not words): 1,854 ÷ 240 = **7.7 pages**, mid-range for
   an ENT chapter, 2.3 pages inside the ~10-page ceiling and 546 words inside
   the ~2,400-word operative ceiling. The +209 % is arithmetic about a small
   divisor: the budget is the bare 600-word FLOOR standing in for a chapter
   that is thirteen entities, thirteen framework slides and a 35-cell grid.
   **Nothing was cut to reach a number and nothing was padded to fill one.**

   ⚠️ One compression pass was run, 1,902 → 1,854, i.e. 48 words, −2.5 %, no
   protected fact touched. That is a small yield and it is the honest one:
   the chapter was written telegraphically from the start, so the fat was
   never there to remove. What went: four connective and framing openers
   (§14.3 bans them — "This is the chapter", "The lecture opens by…", the
   two slide-name leads) and two mechanism sentences rewritten as fragments.
   The referred-otalgia four-nerve table was never written here in the first
   place — it is a one-line pointer in fp-11, because the full table is in
   the MERGED `ent-otalgia`, checked in `app\data\theory.ent.js` before
   declining it rather than assumed.

   WHY IT STOPS HERE — §14.1 requires the bill be itemised rather than a
   protected fact deleted. Reaching even the 660 tolerance costs 1,194 words,
   64 % of the chapter. The least damaging set that reaches it is five whole
   sections — fp-5 migraine treatment (146), fp-9 trigeminal neuralgia (148),
   fp-10 the other neuralgias and the cavernous sinus (218), fp-11 the
   non-sinus causes (253) and fp-2 the sinus pain map (250) = 1,015, still
   179 short, so fp-8’s grid would have to go too. That deletes every drug
   and dose L32 prints, three eponymous syndromes, the cavernous sinus
   question’s entire answer, the sphenoid pain question’s entire answer, and
   the discrimination the brief names as the most testable thing in the
   chapter — leaving at least 11 of the 13 questions unanswerable and the
   register row this chapter exists to collect undelivered. I did not do it.
   The bill is stated; the hub rules on pages, and the pages are 7.7.

   ────────────────────────────────────────────────────────────────────────
   ⚠️ BOUNDARY WITH `ent-facial`, STATED BECAUSE THE TWO IDS LOOK ALIKE.
   `ent-facial` is "Facial nerve paralysis" and is ALREADY MERGED; its twelve
   sections were read before writing (fac-1 … fac-12: nuclei, course,
   topodiagnosis, Seddon/Sunderland, Bell’s palsy, Ramsay Hunt, traumatic
   palsy, palsy complicating ear disease, complications, treatment). NOTHING
   in it is repeated here. The split is motor versus sensory: a WEAK face is
   `ent-facial`’s, a PAINFUL face is this chapter’s. Herpes zoster appears in
   both and is deliberately different material — there as Ramsay Hunt with a
   palsy and a prognosis, here as post-herpetic NEURALGIA, which is what L32
   lists.

   ⚠️ DECLARED OVERLAP WITH `ent-sinusitis` (drafted, not yet merged), read
   before writing. Its `sin-2` carries the sinus drainage-plus-pain grid with
   the same sphenoid → vertex/occiput row and the same
   *(map not in course material)* tag. It is written here too, compressed to
   the pain axis alone, because §14.2 requires every linked question’s tested
   fact to be findable in ITS OWN chapter’s notes and the sphenoid-pain
   question is filed here. This is the `nan-5` / `sin-2` precedent exactly:
   both correct, neither removable. Sinusitis as a DISEASE — the diagnostic
   criteria, viral vs bacterial, antibiotics, FESS, the complications — is
   entirely `ent-sinusitis`’s and is not touched.

   ────────────────────────────────────────────────────────────────────────
   ⚠️ WHAT I GREPPED BEFORE TAGGING ANYTHING — §14.5’s standing instruction
   that the review list is about half wrong, and that a spelling can hide a
   hit (`ostio-` vs `osteo-`). All greps case-insensitive across ALL 34
   cached decks in `content\ent\lectures\`.

     FOUND PRINTED, so used as SOURCED and NOT tagged:
       · "contact headache", "vacuum headache", "forehead", "Tolosa",
         "Gradenigo", "glossopharyngeal neuralgia", "post-herpetic",
         "pizotifen", "triptan", "band" — all in L32, inside my range.
       · "TMJ" — L32 (secondary classification) AND L17,18 (neighbouring
         structures / local causes of otalgia). The NAME is sourced; the
         clinical description is not (see below).
       · "cavernous sinus" — L32 (via Tolosa–Hunt) and L30) Rhinitis 2 (via
         cavernous sinus thrombosis). The STRUCTURE is named in the material.
       · "abducent" — L16, as Gradenigo’s VI palsy.
       · "facial pain" — L27.2 (CRSsNP favours it) and L32.
       · "trigeminal" — seven decks.
       · "More common in females" — L32 lines 95 and 127, for TENSION and
         for TRIGEMINAL NEURALGIA respectively. Both sourced.

     CONFIRMED GENUINELY ABSENT — 0 hits corpus-wide — and therefore ANSWERED
     FROM GENERAL KNOWLEDGE AND TAGGED `(not in course material)` per the
     2026-08-04 rule:
       · "temporal arter" and "giant cell" — **0 hits in all 34 decks.**
         Temporal arteritis is nowhere in the ENT material. Written anyway,
         compactly, on importance test 3: it is the sight-threatening
         emergency in a facial-pain differential.
       · "atypical facial" — **0 hits** ("atypical" alone hits only L7, on
         swallowing). Written and tagged.
       · "trochlear", "oculomotor" — **0 hits**; "abducent" only as above.
         So the CONTENTS of the cavernous sinus are not listed anywhere,
         exactly as that question’s own `source` field already records.
         Written and tagged.
       · "carbamazepine" — **0 hits.** No drug treatment for trigeminal
         neuralgia is printed anywhere in the material. Written and tagged.
       · "cheek", "occipital", "vertex", "retro-orbital", "bending",
         "stooping" — the SINUS-BY-SINUS PAIN MAP is not printed. L27.1
         line 159 carries the slide TITLE "Anatomical Location of Pain &
         Tenderness" and the slide itself is a PICTURE that extracts to
         nothing; "cheek" appears only in L15 and L3 (facial nerve and
         tonsils), "occipital" only in L5 (neck triangles), "forehead" only
         in L32’s tension slide. Written and tagged — the same tag
         `ent-sinusitis` independently arrived at.
       · "Sluder" / sphenopalatine neuralgia — **0 hits.** NOT written: no
         question tests it and no deck names it. Recorded as an omission
         rather than a gap.
       · Cluster headache’s MALE predominance — L32 prints "Middle-aged
         patients" and nothing about sex; "cluster" returns L32 only. The
         male predominance is the discriminator one question’s distractor
         turns on, so it is written and TAGGED.
       · Tension-type as commonest headache WORLDWIDE — L32 prints "most
         common type of primary headaches" (line 94), not the worldwide
         scope. The bank’s key says worldwide. Sourced as far as the deck
         goes and the extra scope tagged.

   ────────────────────────────────────────────────────────────────────────
   REGISTER ROW DISCHARGED — §14.5, and the promise checked item by item
   against the deck rather than against the row’s wording, per the
   `ent-rhin` / rhinoscleroma precedent ("a register row is a promise, not a
   specification — the deck outranks it"):

     `ent-nasalobs` (L32 lines 6–139) → "Headache in full — 547 words, the
     whole facial-pain half of the deck" → ✅ **DELIVERED IN FULL.**
       primary vs secondary classification        → fp-1
       the four controversy bullets               → fp-1, fp-3
       rhinogenic / vacuum headache               → fp-2
       contact headache + the LA test             → fp-3
       migraine, clinical                         → fp-4
       migraine triggers, acute Rx, triptans,
         prophylaxis                              → fp-5
       tension-type + its treatment               → fp-6
       cluster + its treatment                    → fp-7
       trigeminal neuralgia                       → fp-9
       other neuralgias (herpetic/post-herpetic,
         glossopharyngeal, Tolosa–Hunt,
         Gradenigo)                               → fp-10
     ⚠️ AND THE ROW PROMISED EVERYTHING THE DECK ACTUALLY HOLDS — verified by
     reading all 134 lines, slide by slide, against the delivery list above.
     Unlike `ent-hoarse`’s "content of voice therapy" row, nothing here was
     promised that the deck does not contain, and nothing in the deck was
     left uncollected. The 547-word figure in the register is correct to the
     word: `sed -n '6,139p' | wc -w` returns exactly 547.

   MY OWN DEFERRALS — none of substance, and this is deliberate. This
   chapter sits at the END of a deferral chain rather than the start: it
   collects a whole lecture and owns a subject no other chapter wants. Two
   boundaries are stated rather than deferred, because the receiving chapter
   is ALREADY WRITTEN and I verified the content is there before declining
   it (never assumed — `app\data\theory.ent.js` was read):
     · **The four-nerve referred-otalgia table** (V / IX / X / C2–3 and
       their territories) — verified present in the MERGED `ent-otalgia`, in
       full, as a table. Kept here as a single pointer line in fp-11. No
       register row opened; the fact is delivered, not owed.
     · **Gradenigo in full** — mastoiditis, petrositis, the triad, the
       management — is already an OPEN register row from `ent-otalgia` to
       `ent-csom` (§14.5, unticked). I write Gradenigo here only as L32
       prints it, one row of the neuralgia table, because L32 names it inside
       my claimed range and one question’s differential needs it. **That row
       stays owed to `ent-csom` and is NOT discharged by me** — stating this
       so the register is not silently ticked by a chapter that wrote a
       one-liner.

   OMISSIONS, per §14.2 — recorded as decisions, not accidents:
     1. **Migraine drug doses beyond the four triptans.** L32 prints doses
        only for the triptans (sumatriptan 50–100 mg, zolmitriptan 2.5 mg,
        rizatriptan 10 mg, almotriptan 12.5 mg) and those ARE written. The
        prophylactic agents are printed as bare names and are written as bare
        names; no dose is invented.
     2. **The American Headache Society citation** (L32 lines 72–78 — the
        NSAID footnote, "Headache 2019;59:1−18", and the slide number). A
        bibliographic reference, not content.
     3. **Sluder’s / sphenopalatine neuralgia** — 0 hits corpus-wide, no
        question. Named nowhere; not manufactured.
     4. **Sinusitis as a disease** — criteria, organisms, antibiotics,
        surgery, complications. `ent-sinusitis`’s, in full, and none of the
        13 questions here tests any of it.
     5. **Facial nerve palsy** — `ent-facial`’s, merged. See the boundary
        note above.
     6. **Migraine pathophysiology** beyond trigeminal triggering. The deck
        goes no further and §14.2 forbids mechanism deeper than the material.

   DEFECT NOTES CARRIED (2026-08-11 ruling — the printed key stands, the
   discrepancy is one line inside the notes, never disputed):
     · The GG box on the migraine "except" question states bilateral migraine
       is COMMONER than unilateral; L32 line 47 puts bilateral at 40 %, i.e.
       the minority. Written in fp-4 as the slide’s figure with the box
       recorded beside it.
     · GG keys THROBBING as *not* a criterion of sinus pain, while its own
       sibling question (filed under `ent-sinusitis`) describes sinus pain as
       throbbing. Both printed as they stand; the discriminating line is in
       fp-2.
     · The endpoint "not matching acute sinusitis" question offers "diffuse
       periorbital headache" as matching and "diffuse, band-like pressure" as
       not; the resolution is the BAND, not the diffuseness. Written into the
       grid row for character in fp-8.
*/

var THEORY_ENT_FACIALPAIN = {
'ent-facialpain': {

  intro: 'Almost every question is a discrimination: a patient sent to ENT with “sinus headache” who has migraine, tension headache or trigeminal neuralgia instead. Learn the grid, the site of each sinus’s pain, and the four controversy bullets the lecture opens with.',

  sections: [

    { id:'fp-1', w:'must', h:'The four things the lecture says before naming a single headache',
      body:'**RHINOGENIC HEADACHE IS CONTROVERSIAL.**\n\n1. **The most common type of headache in ENT patients is PRIMARY headache** — tension type, migraine, cluster. Not sinus.\n2. Those primary headaches **may be TRIGGERED by nasal irritation — stimulation of the TRIGEMINAL NERVE.** Trigger, not cause. Allergic and non-allergic rhinitis both do it.\n3. **“Contact headache” is also controversial** (fp-3).\n4. **Acute sinusitis causes FACIAL PAIN rather than headache** — including **vacuum headache** (fp-2).\n\n|Primary headaches (3)|Secondary headaches (8)|\n|---|---|\n|**Migraine**|**Rhinogenic / sinogenic**|\n|**Tension type**|**TMJ related**|\n|**Cluster headache / cephalgia**|**Trigeminal neuralgia**|\n||**Cranial / cervical vascular disorder**|\n||**Substance withdrawal**|\n||**Infection**|\n||**Homeostasis related (“metabolic”)**|\n||**Anxiety / somatisation**|\n\n- **“Sinus headache” is a SECONDARY headache** — so it can never be the answer to “commonest PRIMARY headache”.\n\nSrc: L32 lines 6–34',
      qs:['entqb-nose5-169','entqb-nose5-170','entqb-nose5-171','entqb-nose5-174'] },

    { id:'fp-2', w:'must', h:'Sinus pain — where each sinus hurts, what it feels like, and vacuum headache',
      body:'**PAIN IS REFERRED OVER THE SINUS.** *(map not in course material — the sinusitis deck carries it as a picture titled “Anatomical Location of Pain & Tenderness” with no text)*\n\n|Sinus|Where the pain is felt|\n|---|---|\n|**Maxillary**|**CHEEK**, referred to upper jaw and upper teeth; tenderness below the inferior orbital margin|\n|**Frontal**|**FOREHEAD / above the eye**, tenderness over the eyebrow|\n|**Anterior ethmoid**|**between and behind the eyes** — over the bridge of the nose, medial canthus|\n|**Posterior ethmoid**|deep retro-orbital ache|\n|**Sphenoid**|**OCCIPUT and VERTEX, deep retro-orbital** — the one sinus with **NO facial tenderness**|\n\n**CRITERIA OF SINUSITIS PAIN** *(characteristics not in course material)*: **DULL, ACHING** · **increases with straining, stooping and bending forward** · **LOCALISED over the sinus** · worse in the morning.\n- **THROBBING is NOT a criterion** — throbbing is vascular (migraine) or dental. *Defect note: the bank keys throbbing out here while describing sinus pain as throbbing in a sibling question; both stand as printed.*\n\n**VACUUM HEADACHE** — the one headache acute sinusitis genuinely causes, and it is printed by name: **morning pain over the FOREHEAD due to obstruction of the FRONTAL RECESS during sleep.** Trapped air absorbed overnight → negative pressure; **pain peaks on waking, eases through the day** as the sinus ventilates.\n- **A frontal headache offered against cluster, tension and “temporal” is VACUUM headache.**\n- Supporting features that make a headache sinugenic: **nasal obstruction, mucopurulent discharge, relief by systemic decongestants, no nausea or vomiting.**\n\nSrc: L32 lines 17–19; L27.1 line 159 (title slide only); L27.2 line 46',
      qs:['entep-nose-72','entep-nose-84','entep-mfe4-19','entqb-nose4-164','entqb-nose5-172'] },

    { id:'fp-3', w:'high', h:'Contact-point headache, and why the trigeminal nerve is the whole story',
      body:'**THE TRIGEMINAL NERVE CARRIES ALL NASAL SENSATION** and is the route of **every** headache of nasal origin. The olfactory nerve carries smell and **no pain**; the vagus and glossopharyngeal do not supply the nose.\n\n**CONTACT HEADACHE — the assumption, stated by the lecture as an assumption:**\n- Pressure on **trigeminal nerve endings at a CONTACT POINT** — where a **deviated septum or a spur** touches the lateral nasal wall — **triggers facial pain or headache**.\n- **THE TEST IS ALSO THE TREATMENT TRIAL: apply a LOCAL ANAESTHETIC WITH DECONGESTANT to the contact point.** If the headache is relieved, the contact point is implicated.\n- **The term is controversial** — do not operate on a septum for headache without that test being positive.\n\nSrc: L32 lines 10–16',
      qs:['entqb-nose5-170','entqb-nose5-171'] },

    { id:'fp-4', w:'must', h:'Migraine — the clinical picture',
      body:'|Feature|Migraine|\n|---|---|\n|**Duration**|**hours → 3 days**|\n|**Site**|**severe, usually UNILATERAL** — **but BILATERAL in 40 % of cases**|\n|**Character**|**THROBBING / PULSATING**, moderate to severe|\n|**Aggravation**|**by EXERCISE and MOVEMENT** — the cleanest separator from tension headache|\n|**Associated**|**NAUSEA / VOMITING · PHOTOPHOBIA · PHONOPHOBIA**|\n|**Without aura**|**2/3 of cases**|\n|**With aura**|**1/3** — **spreading scotoma · unilateral paraesthesia · dysphasia**|\n|**Family history**|common *(not in course material)*|\n\n- **“STRICTLY localised to one side” is FALSE** — usually unilateral, bilateral in 40 %. *Defect note: the bank’s printed box states bilateral is commoner than unilateral; the slide’s figure is 40 %, i.e. the minority. Keyed as printed, the slide figure is the one to quote.*\n- **Nausea and vomiting are the fastest way to separate migraine from sinus headache** — a sinus headache has neither.\n\nSrc: L32 lines 35–47',
      qs:['entep-mfe4-15','entqb-nose5-170','entqb-nose5-173','entqb-nose5-176'] },

    { id:'fp-5', w:'high', h:'Migraine — triggers, acute treatment, prophylaxis',
      body:'**PREDISPOSING FACTORS:** stress · fatigue · depression · anxiety · **menstruation** · menopause · head/neck trauma.\n**TRIGGER FACTORS:** **dietary (20 %)** · relaxation · travel · **missing meals or sleep** · bright lights · noise · strenuous exercise · menstruation.\n\n|Attack severity|Treatment|\n|---|---|\n|**Mild to moderate**|**NSAIDs incl. ibuprofen** · non-opioid analgesics · **acetaminophen** · **caffeinated combinations** (aspirin + acetaminophen + caffeine)|\n|**Moderate or severe** — and mild-to-moderate responding poorly to the above|**MIGRAINE-SPECIFIC AGENTS: triptans, dihydroergotamine**|\n\n**TRIPTANS, with the doses the slide prints:** **sumatriptan 50–100 mg** · **zolmitriptan 2.5 mg**, repeat after 2 h, **not in children** · **rizatriptan 10 mg** (equivalent to sumatriptan 100 mg) · **almotriptan 12.5 mg — HIGH EFFICACY, COST EFFECTIVE.**\n\n**PROPHYLAXIS:** use for **4–6 months**, then **taper off over 2–3 weeks**. Agents: **beta-blockers · TCAD (pizotifen) · gabapentin**; others **topiramate · sodium valproate · clonidine**; plus **non-drug therapies**.\n\nSrc: L32 lines 48–88',
      qs:['entqb-nose5-173'] },

    { id:'fp-6', w:'must', h:'Tension-type headache — the commonest of all',
      body:'|Feature|Tension-type|\n|---|---|\n|**Frequency**|**THE MOST COMMON TYPE OF PRIMARY HEADACHE** — and the commonest headache worldwide *(the worldwide scope is not in course material; the slide says commonest primary)*|\n|**Chronic form**|**more than 15 days per month, often DAILY**|\n|**Trigger**|often **stress / lifestyle** related|\n|**Sex**|**more common in FEMALES**|\n|**Family history**|**common**|\n|**Character**|**TIGHTENING or BAND-LIKE sensation** around **forehead and temples**, may spread to the **occiput**|\n|**Laterality**|**usually BILATERAL**|\n|**Associated**|**none** — no nausea, no photophobia, no autonomic signs|\n\n**TREATMENT:** **painkillers — paracetamol and ibuprofen** · **neck massage**. It **often does not affect the ability to carry out a day-to-day routine** — the low disability is itself a discriminator from migraine.\n\n- **A BAND AROUND THE HEAD IS TENSION HEADACHE AND NOTHING ELSE.** That single word decides the “which is not matching acute sinusitis” question — sinus pain can be diffuse and periorbital, but it is never a band.\n\nSrc: L32 lines 89–103',
      qs:['entep-mfe4-19','entqb-nose5-169','entqb-nose5-174'] },

    { id:'fp-7', w:'must', h:'Cluster headache',
      body:'|Feature|Cluster headache / cephalgia|\n|---|---|\n|**Who**|**MIDDLE-AGED patients**; **male predominance** *(the sex is not in course material)*|\n|**Pattern**|**SYMPTOM-FREE PERIODS** between clusters — the defining rhythm|\n|**Severity and site**|**SEVERE or VERY SEVERE, UNILATERAL — ORBITAL, SUPRAORBITAL and/or TEMPORAL**|\n|**Duration**|**up to 3 hours if untreated**|\n|**Ipsilateral autonomic features**|**LACRIMATION · CONJUNCTIVAL INJECTION · NASAL CONGESTION · facial sweating · PTOSIS · MIOSIS**|\n\n**TREATMENT — and the negative is examinable:**\n- **Simple painkillers (paracetamol, ibuprofen, aspirin) DO NOT HELP.**\n- **OXYGEN** · **triptans** · **local anaesthetics**.\n\n- **Why cluster reaches ENT:** unilateral nasal congestion + a watering eye read as sinus disease until the strictly unilateral, ≤3-hour orbital pattern is taken.\n\nSrc: L32 lines 104–121',
      qs:['entqb-nose5-169','entqb-nose5-174'] },

    { id:'fp-8', w:'must', h:'⚑ THE GRID — telling the five apart',
      body:'|Axis|Sinus (rhinogenic)|Migraine|Tension-type|Cluster|Trigeminal neuralgia|\n|---|---|---|---|---|---|\n|**Site**|**over the affected sinus** — cheek / forehead / between the eyes / occiput|**hemicranial**, temple|**forehead + temples**, spreads to occiput|**orbital, supraorbital, temporal**|**one or more DIVISIONS of V — usually MAXILLARY or MANDIBULAR**|\n|**Character**|**DULL, ACHING, pressure**|**THROBBING / PULSATING**|**TIGHT, BAND-LIKE**|**boring, excruciating**|**ELECTRIC-SHOCK, stabbing, PAROXYSMAL**|\n|**Duration**|**days, with the infection**|**hours → 3 days**|**often daily, >15 days/month**|**up to 3 hours**|**up to 2 MINUTES per attack**|\n|**Laterality**|**side of the diseased sinus**|**usually unilateral, bilateral in 40 %**|**BILATERAL**|**STRICTLY unilateral**|**unilateral**|\n|**Aggravated by**|**bending forward, straining, stooping**; worst on **waking**|**movement and exercise**|stress; **little disability**|nothing consistent|**touch, chewing, washing, cold air** *(triggers not in course material)*|\n|**Associated**|**nasal obstruction, mucopurulent discharge; relieved by decongestants; NO nausea**|**nausea/vomiting, photophobia, phonophobia, aura in 1/3**|**none**|**ipsilateral lacrimation, conjunctival injection, nasal congestion, ptosis, miosis**|**none between attacks; refractory period after one**|\n|**Who**|any age, with an URTI|any; strong family history|**female**, family history|**middle-aged**, male|**female, >50 years**|\n\n- **The three fastest single discriminators:** **nausea or photophobia → migraine** · **a band → tension** · **a watering red eye with a blocked nostril for under 3 hours → cluster.**\n- **If the pain is worse on bending forward, worst in the morning, and there is NO nausea, it is the sinus.**\n\nSrc: L32 lines 6–139; the grid is assembled from those slides',
      qs:['entep-nose-84','entep-mfe4-15','entep-mfe4-19','entqb-nose5-169','entqb-nose5-173','entqb-nose5-176'] },

    { id:'fp-9', w:'must', h:'Trigeminal neuralgia',
      body:'|Feature|Trigeminal neuralgia|\n|---|---|\n|**Attacks**|**PAROXYSMAL attacks of sudden pain lasting UP TO 2 MINUTES**|\n|**Territory**|**one or more divisions of the trigeminal nerve — usually MAXILLARY (V2) or MANDIBULAR (V3)**|\n|**Sex**|**more common in FEMALES**|\n|**Age of onset**|**over 50 years**|\n|**Cause, classical type**|**NEUROVASCULAR COMPRESSION of the trigeminal nerve in or around the ROOT ENTRY ZONE** — the commonest cause|\n|**Type 2**|**may be of more CENTRAL origin**|\n\n- **The duration is the discriminator.** Seconds to two minutes, in a nerve division, is neuralgia; hours is a primary headache; days is a sinus.\n- **Treatment** *(not in course material — no drug is named in any of the 34 decks)*: **carbamazepine** first line; then oxcarbazepine, baclofen, lamotrigine; **microvascular decompression** for the neurovascular compression the lecture names.\n- **Red flag:** trigeminal neuralgia **under 40**, or **with sensory loss**, is not classical — image for a posterior fossa lesion or demyelination.\n\nSrc: L32 lines 122–131',
      qs:['entep-nose-84','entqb-nose5-171'] },

    { id:'fp-10', w:'high', h:'The other neuralgias, and the cavernous sinus',
      body:'|Entity|What it is|\n|---|---|\n|**Herpetic / post-herpetic neuralgia**|burning pain persisting in the dermatome after a **herpes zoster** eruption. In the ear this is **Ramsay Hunt** territory — the palsy itself is `ent-facial`’s|\n|**Glossopharyngeal neuralgia**|paroxysmal stabbing pain in the **tonsil, tongue base, pharynx and EAR, triggered by SWALLOWING** — the IX-nerve mirror of trigeminal neuralgia|\n|**Tolosa–Hunt syndrome**|**PAINFUL OPHTHALMOPLEGIA** caused by **non-specific inflammation of the CAVERNOUS SINUS or SUPERIOR ORBITAL FISSURE**|\n|**Gradenigo syndrome**|**TRIGEMINAL NEURALGIA + VI NERVE PALSY due to PETROSITIS complicating otitis media** — pain, diplopia and a discharging ear together. The full account of petrositis belongs with chronic otitis media|\n\n**CONTENTS OF THE CAVERNOUS SINUS** *(the nerve list is not in course material — no deck prints it; L32 reaches the sinus only through Tolosa–Hunt)*:\n\n|In the LATERAL WALL|INSIDE the sinus|\n|---|---|\n|**III oculomotor · IV trochlear · V1 ophthalmic · V2 maxillary**|**VI abducens** and the **INTERNAL CAROTID ARTERY**|\n\n- **IX, X and XI are NOT in the cavernous sinus** — they leave the skull through the **jugular foramen**.\n- **VI is the vulnerable one.** Lying free inside the sinus beside the carotid, it fails first: **an isolated VI palsy is the earliest sign of cavernous sinus disease** — and is exactly the sign Gradenigo names.\n\nSrc: L32 lines 132–139; L16 (Gradenigo’s VI palsy); L30 (cavernous sinus thrombosis)',
      qs:['entqb-nose5-175'] },

    { id:'fp-11', w:'high', h:'The non-sinus causes ENT must not miss',
      body:'**Nose normal, face still painful → work the secondary list.**\n\n|Cause|The give-away|\n|---|---|\n|**TMJ dysfunction**|**pain on CHEWING**, clicking, tenderness over the joint in front of the tragus; **often referred to the EAR with a completely normal drum** *(the clinical detail is not in course material — L32 names “TMJ related” only)*|\n|**Dental disease**|**upper premolar or molar** caries or abscess; pain worse on percussing the tooth. Also the route to odontogenic maxillary sinusitis|\n|**Temporal arteritis (giant cell arteritis)**|*(not in course material — 0 hits in all 34 decks)* **over 50, unilateral temporal headache, a thickened tender pulseless temporal artery, jaw claudication, raised ESR.** **Sight-threatening — start steroids before the biopsy**|\n|**Atypical facial pain**|*(not in course material)* constant, deep, poorly localised, crosses anatomical boundaries, normal examination and normal imaging; associated with anxiety and depression. **A diagnosis of exclusion** — never operate for it|\n|**Referred pain**|the nerve that supplies the painful area also supplies somewhere else. **The four-nerve referred-otalgia table is written in the otalgia chapter** and is the model for the whole idea|\n|**Others L32 lists**|cranial / cervical **vascular** disorder · **substance withdrawal** (analgesic overuse) · **infection** · **homeostasis-related “metabolic”** · **anxiety / somatisation**|\n\n**RED FLAGS — refer out, do not operate on the septum** *(not in course material)*: **new headache over 50 · sudden “worst ever” onset · progressive and worsening · fever, neck stiffness or rash · focal neurology or papilloedema · sensory loss with the pain · visual loss.**\n\nSrc: L32 lines 26–34; L17,18 (TMJ as a neighbouring structure); L27.2 (odontogenic route)',
      qs:['entqb-nose5-171'] }

  ]
}
};
