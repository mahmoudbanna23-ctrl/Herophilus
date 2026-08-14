/* ent-sinuscomp — "Complications of sinusitis", ENT. Written from scratch
   2026-08-14 under START-HERE.md §14 (slide-density revision notes). No v1
   existed. 10 linked questions. THE LAST ENT CHAPTER.

   ══════════════════════════════════════════════════════════════════════════
   ⚠️⚠️ L28 DOES NOT EXIST. VERIFIED HERE, NOT INHERITED.

   Listed both trees myself before writing a word:

     `Semester 8\ENT\Theoritical\PPT\`   34 source PDFs
     `content\ent\lectures\`             34 cached .txt

   Sorted, the numbering runs
       … L27.1) ACUTE rhinosinusitis · L27.2) Chronic Sinusitis · [NOTHING] ·
       L29) Rhinitis 1 · L30) Rhinitis 2 · L31) nasal symptoms 1 · L32) …
   There is no file beginning "L28" in either tree, and the source count and
   the cache count agree at 34, so nothing was simply left un-extracted — the
   slot is empty at source. That slot is exactly where "Complications of
   sinusitis" belongs, since L27.1/L27.2 are the two rhinosinusitis lectures
   immediately before it.

   SO THIS CHAPTER HAS NO LECTURE OF ITS OWN. It is written against its 10
   questions, the fragments the other decks happen to print, the three printed
   Grade Gain boxes, and general medical knowledge — tagged, per the user's
   instruction of 2026-08-04 that a gap is ANSWERED and never declared. Every
   tagged claim is a claim I greped for first; the grep report is below and it
   is longer than usual because this chapter carries more tags than any other.

   ══════════════════════════════════════════════════════════════════════════
   BUDGET — §14.1 as revised 2026-08-14,
     budget = max( summed lecture words , 25 x linked question count ),
     floor 600, cap 3,000. BOTH TERMS MEASURED FROM DISK BEFORE WRITING.

     TERM 1 — the lecture words this chapter RESTS ON:

       L27.1) ACUTE rhinosinusitis, line 285 — the caption
       "Orbital Complication" = **2 WORDS.**

       That is the entire lecture inheritance of this chapter, and it is not
       a guess: `ent-sinusitis`'s own header states it SUBTRACTED those two
       words from its TERM 1 (1,027 − 2 = 1,025) and deferred them here, per
       §14.1(b) "deferring and counting are opposites". Read on disk at
       `ent-sinusitis.draft.js` lines 40–43, not assumed.

       NOT COUNTED, deliberately, each already billed to a neighbour —
       §14.1: "do not count a lecture you cite once… count what the chapter
       RESTS ON, cite the rest":
         · L27.1 lines 286–330, the worked "Improper Dosage of Antibiotics"
           case that ILLUSTRATES that caption (a 10-year-old girl, viral
           URTI, worsening, under-dosed clavulanate, admitted, CT, endoscopic
           drainage). `ent-sinusitis` counted lines 7–336 and writes it in
           `sin-6` as an ANTIBIOTIC DOSING lesson, which is what the deck
           teaches with it. Cited here twice; not counted. Under-counting
           costs nothing (§14.5's closing note); over-counting buys room the
           content has not earned.
         · L27.1 lines 203–207 — "an important diagnostic tool in assessing
           for potential complications of acute sinus disease or in
           anticipation of surgery". `ent-sinusitis`'s `sin-5`. Quoted here
           because it is the only sentence in 34 decks that tells a reader to
           image a complication; not counted.
         · L30) Rhinitis 2 lines 162–164 — "Involvement of the palate, orbit,
           and anterior cranial fossa is common. Meningitis, intracranial
           abscess, and cavernous sinus thrombosis may develop." 227 w of L30
           stay charged to `ent-rhin`; the fungal half is `ent-sinusitis`'s
           `sin-11`. Cited for THREE COMPLICATION NAMES only.
         · L16) Chronic otitis media lines 226–230 / 292–296 — the EAR's
           intracranial complication list. 884 w charged to `ent-csom`, whose
           `csom-8` and `csom-9` carry the tiers and the compass in full.
           Cited for one contrast row.
         · L23) Anatomy of the Nose — the drainage map and sinus relations.
           Split between `ent-noseanat` and `ent-nasalobs`. Cited, not
           counted; `nan-5`/`nan-6`/`nan-9` own the anatomy.

       = TERM 1  **2 WORDS.**

     TERM 2 — 25 x 10 linked questions = **250 words**

     max(2 , 250) = 250 → **THE FLOOR OF 600 BINDS AND IS THE BUDGET.**
     Both terms are far below it, so 600 is the operative number. Cap 3,000
     not in play. Operative ceiling ~2,400 body words (§14.1, pages ≈ ÷240).

     ⚠️ THIS IS THE MOST EXTREME CASE OF §14.1's `ent-dysph` THIRD FAILURE
     MODE IN THE MODULE, AND IT IS SAID UP FRONT AS THE RULE REQUIRES. Both
     terms fail together, and here TERM 1 does not merely run low — it is
     ARITHMETICALLY ZERO for practical purposes. A budget of two lecture words
     cannot describe a chapter of a dozen named entities. The floor of 600 is
     not a measurement of this chapter; it is the formula declining to answer.

   ──────────────────────────────────────────────────────────────────────────
   DIAGRAM-DECK TEST (§14.1) — NOT APPLICABLE AND SAID SO RATHER THAN SKIPPED.
   The test asks whether a low TERM 1 is an artefact of a labelled-diagram
   deck extracting to nothing (words per non-blank line under ~2). There is no
   deck to test. TERM 1 is low because THE LECTURE IS ABSENT, not because it
   is pictorial. Different failure, same consequence: TERM 1 is meaningless
   and the entity floor governs.

   ──────────────────────────────────────────────────────────────────────────
   ⚠️ ENTITY + FRAMEWORK FLOOR, COUNTED BEFORE WRITING (§14.1's `ent-dysph`
   rule, with `ent-neck`'s correction — framework slides costed ONE BY ONE —
   and `ent-phon`'s — a comparison grid costed at ROWS x COLUMNS):

     ENTITIES at ~90 w (what it is / how it presents / what confirms it /
     what treats it):
       1 pre-septal (periorbital) cellulitis 90 · 2 orbital (post-septal)
       cellulitis 90 · 3 subperiosteal abscess 90 · 4 orbital abscess 90 ·
       5 cavernous sinus thrombosis 90 · 6 Pott's puffy tumour 90 ·
       7 frontal-lobe (intracerebral) abscess 90 · 8 meningitis 70 ·
       9 extradural abscess 70 · 10 subdural empyema 70 · 11 mucocele /
       mucopyocele 70 · 12 osteomyelitis of the maxilla 50 ·
       13 descending / systemic spread 40
       = 1,000 words.

     FRAMEWORK ITEMS, costed individually (there are no slides to count, so
     these are the frameworks the QUESTIONS and the register row demand):
       the five-group classification 60 · the five routes of spread 80 ·
       why children (weak ossification, ethmoid pneumatised at birth, no
       frontal sinus) 70 · acute-versus-chronic and the eye-swelling rule 45 ·
       the imaging rule and what CT answers 70 · the medical regimen 55 ·
       the criteria for operating 80 · the monitoring rule 35
       = 495 words.

     COMPARISON GRIDS at rows x columns:
       · pre-septal vs post-septal, 9 axes x 2 columns = 18 cells @ ~8 w
         = 144. **The single most testable thing in the chapter.**
       · Chandler I–V, 5 rows x 3 columns = 15 cells @ ~10 w = 150
       · which sinus leads where, 4 rows x 3 columns = 12 cells @ ~10 w = 120
       · intracranial complications side by side, 6 rows x 3 columns
         = 18 cells @ ~9 w = 162
       · orbital cellulitis vs cavernous sinus thrombosis, 6 axes x 2
         = 12 cells @ ~8 w = 96
       = 672 words.

     PREDICTED FLOOR ~2,167 WORDS against a 600-word budget — **+261 % BEFORE
     A WORD IS WRITTEN, STATED IN ADVANCE AS §14.1 REQUIRES.** In pages that
     is ~9.0 at the dense 240 w/page divisor, inside the ~10-page acceptance
     test and inside the ~2,400-word operative ceiling, but not by much. The
     plan set before writing: aim ~1,800–1,950 by keeping the four minor
     entities (meningitis, extradural, maxillary osteomyelitis, descending) as
     TABLE ROWS rather than as sections, and report the overrun as an itemised
     bill rather than buy the number by deleting an eponym. ⚠️ THAT AIM WAS
     MISSED and the prediction was the better number — see the measured
     outcome below, which came in at 2,389 against a 2,167 prediction and a
     1,900 plan.

     Reaching 600 would mean keeping the pre-septal/post-septal grid and
     nothing else — no Chandler, no Pott's, no cavernous sinus, no
     sinus-versus-ear routing — which leaves at least 7 of the 10 questions
     unanswerable and deletes the register row this chapter exists to collect.

   ──────────────────────────────────────────────────────────────────────────
   ⚠️ MEASURED OUTCOME — §14.1's `ent-rhin` and `ent-vocal` warnings: THE
   HEADER IS A CLAIM, THE FILE IS THE FACT, and a per-section breakdown that
   sums correctly proves only that the numbers came from ONE state of the
   file. This paragraph was written AFTER the last keystroke in the sections
   below, and the validator was then re-run over the file as it stands:

       body **2,389 words** over 8 sections · intro 48 words · 10/10 linked

   Per-section, measured in the same run (offered as arithmetic, not as
   evidence; the evidence is that the run post-dates the final edit):
     sc-1 346 · sc-2 287 · sc-3 306 · sc-4 230 · sc-5 317 · sc-6 288 ·
     sc-7 353 · sc-8 262.  (Sum 2,389 — but per the `ent-vocal` warning, a
     breakdown that reconciles proves only that the numbers came from ONE
     state of the file. What makes this one final is that it was taken after
     the last edit, not that it adds up.)

   Against the 600-word budget: **+1,789 (+298 %)**, and 1,729 over the 10 %
   tolerance of 660. REPORTED, NOT HIDDEN, and it is the largest percentage
   overrun in the module — because the divisor is the bare floor standing in
   for a chapter that has no lecture at all, not because the chapter is long.

   Against the entity+framework prediction of 2,167 the file is **222 words
   over, +10.2 %** — the prediction was the accurate instrument and the
   "aim ~1,900" plan was not. The error sits in sc-1 and sc-7: the five routes
   of spread and the Pott's/mucocele pair both cost more than costed, because
   every claim in them is tagged and a tagged claim has to carry its own
   support. Stated rather than smoothed over.

   Against the acceptance test that actually governs (§14.1 as revised
   2026-08-14 — PAGES, not words): 2,389 ÷ 240 = **9.95 pages**, i.e. **right
   on the ~10-page ceiling and 11 words inside the ~2,400-word operative
   ceiling.** ⚠️ THIS IS TIGHT AND IS FLAGGED AS SUCH: the estimator is
   ±1 page, so the rendered chapter may print at 9 or at 11. **The hub should
   render it and count**, per §14.1's own instruction to measure pages rather
   than infer them, and if it prints over 10 the fix is layout first
   (`break-inside`, cell padding — which took AOM 14 pp → 9 untouched), not a
   further word cut, since the words are already at the entity floor.

   WHY IT STOPS HERE — §14.1 requires the bill be itemised rather than a
   protected fact deleted. Reaching even the 660 tolerance costs 1,729 words,
   72 % of the chapter. The least damaging set that reaches it is SIX of the
   eight sections — sc-8 intracranial (262), sc-7 osseous (353), sc-6
   cavernous sinus (288), sc-5 management (317), sc-4 Chandler (230) = 1,450,
   still 279 short, so sc-2's routing table (287) goes too. That leaves only
   sc-1 and sc-3, and deletes Pott's puffy tumour, the frontal-lobe abscess,
   the cavernous sinus, the Chandler ladder, the whole management of a
   sight-threatening emergency, and the sinus-versus-ear discrimination the
   register row exists to deliver — leaving 8 of the 10 questions unanswerable
   and the register row undischarged. I did not do it.

   Nothing was padded to fill a number and nothing cut to reach one. THREE
   compression passes were run, **2,932 → 2,443 → 2,389**, i.e. 543 words and
   −18.5 %, and no protected fact was touched. What went, in order:
     1. −208 w: the routes-of-spread list turned from five numbered paragraphs
        into one run-on line; the three-question CT framing likewise; the
        pre-septal bedside sequence merged into the sign line; Pott's and the
        mucocele bullets compressed; the cavernous sinus presentation reduced
        to what its own table does NOT already carry.
        ⚠️ ONE ITEM WAS DELETED AS A §14.3 VIOLATION RATHER THAN FOR LENGTH:
        a line in sc-5 rejecting the nasal-swab, ultrasound and blood-count
        distractors. That is distractor reasoning, which §14.3 bans from the
        notes and which already lives in that question's own `explanation`.
     2. −173 w: all eight `Src:` lines cut to the compact one-line form §14.3
        requires. They had grown to 25–50 words each. **No citation was lost**
        — the full grep evidence is in the report above, which is where it
        belongs.
     3. −54 w: table cells and a parenthetical, phrase by phrase.
   The orbital and OMC anatomy was never written here in the first place — it
   is a pointer at `ent-noseanat`, whose `nan-5`/`nan-6`/`nan-9` were read on
   disk in `app\data\theory.ent.js` before declining it, not assumed.

   ══════════════════════════════════════════════════════════════════════════
   ⚠️ THE GREP REPORT — every item, printed vs genuinely absent.

   §14.5's standing instruction: the end-of-ENT review's "rests on outside
   knowledge" list is about half wrong, thirteen supposed gaps have turned out
   to be printed, and A SPELLING CAN HIDE A HIT (`ostio-` vs `osteo-`). All
   greps case-insensitive, on the STEM not the whole word, across ALL 34
   cached decks in `content\ent\lectures\`.

     ✅ FOUND PRINTED — used as SOURCED, NOT tagged:
       · "Orbital Complication" — L27.1 line 285, as a slide caption over a
         case. THE ONLY PLACE THE PHRASE APPEARS IN 34 DECKS. Its case
         (lines 286–330) is a 10-year-old girl with a viral URTI that
         worsened on an under-dosed antibiotic, admitted, CT scanned, and
         taken for ENDOSCOPIC DRAINAGE with a negative culture. That is a
         complicated rhinosinusitis end to end, and it is the deck's only one.
       · "complications of acute sinus disease" — L27.1 lines 203–207, the CT
         indication. Quoted in sc-5.
       · "Meningitis, intracranial abscess, and cavernous sinus thrombosis" —
         L30 line 163, verbatim, as the course of acute invasive fungal
         sinusitis. THREE COMPLICATION NAMES, PRINTED. Cited in sc-6 and sc-8.
       · "Involvement of the palate, orbit, and anterior cranial fossa is
         common" — L30 line 162. Cited in sc-2.
       · The EAR's intracranial list — "Meningitis · Extradural abscess ·
         Subdural abscess · Brain abscess · Lateral sinus thrombosis" —
         L16 lines 226–230 and 292–296, printed twice. Cited in sc-2 for the
         contrast row and in sc-8 for the entity names.
       · "subperiosteal" — L16 line 343, but as MASTOID subperiosteal abscess.
         The WORD is printed; the ORBITAL subperiosteal abscess is not. Both
         states recorded rather than one claimed.
       · "proptosis" — L26 line 265 (sinonasal malignancy) and the mucormycosis
         vignette. The SIGN is printed in the material; its use as the
         pre-septal/post-septal divider is not.
       · "ophthalmoplegia" — L32 line 135, but as Tolosa–Hunt. Named, not as a
         sinusitis complication.
       · "cavernous sinus" — L30 (thrombosis, as above), L32 (Tolosa–Hunt),
         L19.2 (tinnitus). The STRUCTURE and the THROMBOSIS are both in the
         material.
       · "thrombophlebitis" — L4, but pharyngeal (Lemierre-type). The
         MECHANISM word exists in ENT teaching; not applied to the sinuses.
       · "ethmoid", "sphenoid", drainage map, sinus relations — L23 lines
         26–37. `ent-noseanat` owns them; pointed at, not rewritten.

     ⚠️ PRINTED BY THE BANK, NOT BY A LECTURE — cited to Grade Gain / endpoint
     and therefore NOT tagged, but not attributed to the syllabus either:
       · "Orbital complications are more serious. More in children due to weak
         ossification" — GG box, p.67.
       · "Child with eye swelling during respiratory tract infection =
         complicated rhinosinusitis" — GG box, p.67.
       · "sinusitis is the commonest cause of frontal lobe abscess" — GG box,
         p.68, printed twice across two questions.
       · "complications occur in acute and chronic rhinosinusitis. But more on
         top of acute rhinosinusitis" — GG box, p.68.
       · "the ethmoid sinus is separated from the orbit by a thin plate of
         bone called the lamina papyracea… orbital complications of
         rhinosinusitis are more frequent in children than in adults" —
         endpoint box, p.1011. ⚠️ That box ends "Ask ChatGPT" and its own
         entry flags it as unreviewed; the same content is in the p.965 box,
         which is clean, so it is used from there.

     ❌ CONFIRMED GENUINELY ABSENT — 0 hits across all 34 decks — and
     therefore ANSWERED FROM GENERAL KNOWLEDGE AND TAGGED:
       "chandler" · "papyracea" (and "papyrace", "os planum", "paper thin") ·
       "preseptal" / "pre-septal" / "postseptal" / "post-septal" /
       "orbital septum" / "periorbital" · "orbital cellulitis" (as a phrase —
       "cellulitis" alone hits only L4, pharyngeal) · "orbital abscess" ·
       "pott" (only "Pott" inside L4's unrelated text) · "puffy" · "diploic" ·
       "breschet" · "anterior table" / "posterior table" · "frontal lobe" ·
       "frontal sinus" (as a phrase) · "temporal lobe" (only L22, an anatomy
       label) · "cerebellar abscess" · "sagittal sinus" · "empyema" ·
       "mucocele" / "mucocoele" · "emissary" · "valveless" · "chemosis" ·
       "papilloedema" / "papilledema" · "griesinger" · "central retinal" ·
       "RAPD" · "colour vision" · "exophthalm" · "globe" · "eyelid" ·
       "periorbital" · "neck stiffness" · "photophobia" (as a meningeal sign;
       L32 has it for migraine) · "sequestr" · "pericranium" · "weak
       ossification" (the phrase is the BANK's, not a deck's) · "vancomyc" ·
       "metronidazol" · "orbital staging".

     ⚠️ TWO SPELLING TRAPS CHECKED EXPLICITLY, because §14.5 says one hid a
     hit before:
       · `papyracea` / `papyrace` / `papyraceous` — 0 on every variant. The
         term genuinely is not in the material. (`nan-5` already reached the
         same verdict independently and tagged it.)
       · `osteo` / `ostio` — `osteomyelit` hits only L17,18 (temporal bone);
         `ostio` hits L29 as `ostiomeatal`, which is the anatomy, not a
         complication. Neither changes a verdict here.

   ══════════════════════════════════════════════════════════════════════════
   REGISTER ROW DISCHARGED — §14.5.

     `ent-sinusitis` (L27.1 line 285 · general) → "THE COMPLICATIONS IN FULL —
     pre- vs post-septal cellulitis and the orbital staging, the LAMINA
     PAPYRACEA route, POTT'S PUFFY TUMOUR and the diploic veins, and SINUS →
     FRONTAL LOBE / EAR → TEMPORAL LOBE AND CEREBELLUM."
     → ✅ **DELIVERED IN FULL**, item by item:

       pre- vs post-septal cellulitis        → sc-3, the nine-axis grid
       the orbital staging                   → sc-4, Chandler I–V
       the lamina papyracea route            → sc-1 (routes), sc-2 (map)
       Pott's puffy tumour                   → sc-7, in full
       the diploic veins (of Breschet)       → sc-7
       sinus → frontal lobe /
         ear → temporal lobe and cerebellum  → sc-2, its own contrast row,
                                               and sc-8
     Plus the four items `ent-sinusitis`'s header lists inside the same
     deferral but the register row's summary line does not name:
       subperiosteal abscess, orbital abscess, cavernous sinus
       thrombosis                            → sc-4, sc-5, sc-6
       diplopia / proptosis / laterally
         displaced globe → subperiosteal
         abscess (the `examiner-patterns.md`
         entry for this chapter, its only one) → sc-4, as the Chandler III row
       osteomyelitis and mucocele            → sc-7
       the descending complications          → sc-1, classification row 5

     ✅ AND THE ROW WAS ACCURATE. Unlike the three mis-stated rows §14.5
     records, this one named the right deck (L27.1), the right line (285), the
     right word count (2), and promised nothing the material does not support.
     `sed -n '285p' | wc -w` returns 2. Verified rather than assumed.

     ⚠️ I DID NOT ABSORB GRADENIGO. §14.5 carries an OPEN row `ent-otalgia`
     (L16) → `ent-csom` promising "Gradenigo's triad in full", and
     `ent-facialpain` deliberately declined to tick it. Petrositis is an EAR
     complication of otitis media, not a sinus one — L32 line 138 defines it
     as "due to petrositis complicating otitis media" — so no sinus question
     can need it. It is not written here in any form and THAT ROW REMAINS OWED
     TO `ent-csom`, untouched. The only place this chapter goes near it is the
     one contrast row saying ear disease goes to the temporal lobe and
     cerebellum, which is the register row I DO own.

   MY OWN DEFERRALS — none. This chapter is the end of a chain: it collects a
   row and owns a subject no other chapter wants. Three boundaries are STATED
   rather than deferred, each verified on disk in `app\data\theory.ent.js`
   before declining it:
     · **The orbital and OMC anatomy** — the lamina papyracea as the lateral
       boundary of the osteomeatal complex, the sinus development table, and
       the sinus relations — are `ent-noseanat`'s `nan-5` and `nan-6`, written
       and merged. Used here as a ROUTE in one line, never re-taught.
     · **The valveless facial/ophthalmic venous route and the dangerous area
       of the face** are `ent-noseanat`'s `nan-9`, written in full and already
       tagged as absent from the material there. Pointed at in sc-6.
     · **The ear's complication tiers and the compass of spread** are
       `ent-csom`'s `csom-8` and `csom-9`. One contrast row only.

   OMISSIONS, per §14.2 — recorded as decisions, not accidents:
     1. **Antibiotic doses.** No deck states one for a complication and no
        question asks one. Agents are named; no mg/kg is invented.
     2. **Orbital surgical approaches in detail** — the Lynch–Howarth
        external ethmoidectomy incision, transcaruncular and transconjunctival
        routes. Named where a question could reach them; not described.
     3. **Frontal sinus obliteration / cranialisation** for chronic
        osteomyelitis. Beyond any question and beyond the material.
     4. **Silent sinus syndrome, orbital apex syndrome and optic neuritis** as
        separate entities. Zero questions, zero deck hits; not manufactured.
     5. **Paediatric-versus-adult antibiotic choice** and duration schedules.
        Not stated anywhere in the material.
     6. **Rhinosinusitis itself** — diagnosis, viral vs bacterial, the medical
        ladder, FESS, fungal disease. `ent-sinusitis`'s, merged, 47 questions.
        Not touched. The boundary is the sinus wall: what happens INSIDE the
        sinus is theirs, what happens once infection ESCAPES it is mine.

   ══════════════════════════════════════════════════════════════════════════
   DEFECT NOTES CARRIED (2026-08-11 ruling — the printed key stands, the
   discrepancy is one line, never disputed):
     · The GG child-with-eye-swelling question keys the UMBRELLA term
       "complicated rhinosinusitis" over "orbital cellulitis", which is a
       SUBSET of it, in a stem that already describes proptosis. Keyed as
       printed; the umbrella-vs-specific line is in sc-3, and the management
       is identical either way.
     · The endpoint free-text case prints its diagnosis as "Preseptal
       Cellulitis and Proptosis", which is self-contradictory — proptosis is
       by definition post-septal. Recorded in sc-3 beside the grid, as
       printed, never disputed.

   CONSISTENCY WITH THE FOUR `ent-sinusitis` ENTRIES THAT REST ON THIS
   CONTENT — checked entry by entry against `app\data\questions.ent.js`, not
   assumed. `entqb-nose7-226` (the infundibulum and the lamina papyracea as
   the maxillary drainage pathway), `entqb-nose4-158` (CT shows the lamina
   papyracea pre-FESS; MRI earns its place only for intracranial or orbital
   complications), `entqb-nose4-157` (the worked orbital-complication dosing
   case, and surgery reserved for complications or failure) and
   `entqb-nose4-154` (complicated sinusitis = ordinary bacterial sinusitis
   that has escaped its sinus, orbital or intracranial, without necrosing
   tissue). Nothing below contradicts any of them; sc-5 restates the MRI rule
   in the same terms and sc-1 uses the same definition of "complicated".
*/

var THEORY_ENT_SINUSCOMP = {
'ent-sinuscomp': {

  intro: 'The one ENT chapter with no lecture. Every question is a route: which sinus, which barrier, which space. Learn the pre-septal / post-septal line, the Chandler ladder, and that a sinus abscess goes to the FRONTAL lobe while an ear abscess goes to the temporal lobe and cerebellum.',

  sections: [

    { id:'sc-1', w:'must', h:'What “complicated” means, the five groups, and the five routes out',
      body:'**COMPLICATED RHINOSINUSITIS = ORDINARY SINUS INFECTION THAT HAS ESCAPED THE SINUS** — into the orbit, the bone, the cranium or the blood. The mucosa is no longer the problem.\n\n|Group|Members|\n|---|---|\n|**ORBITAL**|**the commonest group by far** — pre-septal cellulitis, orbital cellulitis, subperiosteal abscess, orbital abscess|\n|**INTRACRANIAL**|meningitis, extradural abscess, subdural empyema, **frontal-lobe abscess**, cavernous and superior sagittal sinus thrombosis|\n|**OSSEOUS**|**Pott’s puffy tumour** (frontal osteomyelitis), osteomyelitis of the maxilla in infants|\n|**LOCAL**|**mucocele / mucopyocele**, chronic osteitis, oro-antral fistula|\n|**DESCENDING / SYSTEMIC**|pharyngitis, otitis media, bronchitis, exacerbation of asthma, septicaemia|\n\n**⚠️ TWO COUNTER-INTUITIVE RULES, BOTH IN THE BANK’S OWN BOXES:**\n- **COMPLICATIONS ARISE MORE OFTEN ON TOP OF *ACUTE* THAN CHRONIC RHINOSINUSITIS** — both do it, but the classic patient is a previously healthy person one week into a cold.\n- **A CHILD WHOSE EYE SWELLS DURING OR JUST AFTER A RESPIRATORY INFECTION HAS COMPLICATED RHINOSINUSITIS UNTIL PROVED OTHERWISE.**\n\n**FIVE ROUTES OUT** *(not in course material)*: **direct bone erosion / osteitis** · **a congenital DEHISCENCE or suture line** — the lamina papyracea is not merely thin but often frankly deficient · **RETROGRADE THROMBOPHLEBITIS ALONG VALVELESS VEINS** (ethmoid-to-orbit, and the diploic veins of the frontal bone) · along neurovascular foramina · trauma or previous surgery.\n- **⚠️ The venous route crosses INTACT bone** — an unbroken wall on CT does not exclude spread.\n\n**WHY CHILDREN** — the bank’s box says **“more in children due to weak ossification”**. Behind it: the lamina papyracea is incompletely ossified and dehiscent · the **ethmoid is pneumatised from birth**, so an infant can have ethmoiditis · the **frontal sinus is absent until ~5–6 years**, so a young child gets orbital complications and cannot get a Pott’s puffy tumour *(the last two not in course material)*.\n\n**PREDISPOSING** *(not in course material)*: young age · diabetes or immunosuppression · **an inadequately dosed or wrongly chosen antibiotic** — the deck’s own worked case · delay · dental origin · virulent organism.\n\nSrc: L27.1 line 285 + its case lines 286–330; GG pp.67–68 boxes. **⚠️ NO L28 — no lecture on this chapter exists; the rest is general knowledge, tagged.**',
      qs:['entqb-nose4-160','entqb-nose4-162','entep-nose-case-13'] },

    { id:'sc-2', w:'must', h:'⚑ Which sinus leads where — and the sinus/ear contrast the examiner is really testing',
      body:'|Sinus|Where its infection goes|Why|\n|---|---|---|\n|**ETHMOID**|**THE ORBIT** — pre-septal → orbital cellulitis → **subperiosteal abscess**|separated from the orbit only by the **LAMINA PAPYRACEA**, the paper-thin medial orbital wall, thinner and more often dehiscent in a child. **Pneumatised at birth**|\n|**FRONTAL**|**ANTERIOR table → POTT’S PUFFY TUMOUR** · **POSTERIOR table → EXTRADURAL / SUBDURAL / FRONTAL-LOBE ABSCESS**|the posterior table is the **thinner** of the two and is the floor of the anterior cranial fossa; **valveless diploic veins** cross both ways|\n|**SPHENOID**|**CAVERNOUS SINUS THROMBOSIS**, cranial nerve palsies, meningitis|the cavernous sinus, internal carotid and optic nerve lie against its lateral wall|\n|**MAXILLARY**|**least often complicated** — odontogenic disease, oro-antral fistula; **osteomyelitis of the maxilla** in infants|thick walls, and it drains into the middle meatus rather than towards anything vital|\n\n**⚠️⚠️ THE SINGLE HIGHEST-VALUE DISCRIMINATION IN THE CHAPTER — AN INTRACRANIAL ABSCESS IS NAMED BY ITS ROUTE:**\n\n|Source|Abscess site|\n|---|---|\n|**PARANASAL SINUS** (frontal, then ethmoid/sphenoid)|**FRONTAL LOBE**|\n|**MIDDLE EAR AND MASTOID** (CSOM)|**TEMPORAL LOBE and CEREBELLUM**|\n\n- **“Temporal lobe” is never a random distractor** — it is the correct answer to the *otological* version of the same question. *(The lobe attribution itself is not in course material; L16 prints the ear’s complication list — meningitis, extradural, subdural and brain abscess, lateral sinus thrombosis — but not the lobe.)*\n- **SINUSITIS IS THE COMMONEST CAUSE OF A FRONTAL-LOBE ABSCESS** — the bank states it twice, in two separate boxes.\n- **The commonest complication of acute ethmoid sinusitis in a child is ORBITAL CELLULITIS**, because the orbit is the *nearest* space; everything else requires the infection to travel further.\n\nSrc: GG p.68 box; endpoint p.965 box; L16 lines 226–230, 292–296; L30 line 162; anatomy in `ent-noseanat`. **The sinus map and the lobe attribution: not in course material.**',
      qs:['entep-nose-11','entep-nose-34','entep-nose-104','entqb-nose4-162','entqb-nose4-163'] },

    { id:'sc-3', w:'must', h:'⚑ PRE-SEPTAL versus POST-SEPTAL — the line that decides everything',
      body:'**THE ORBITAL SEPTUM IS A FIBROUS SHEET RUNNING FROM THE PERIOSTEUM OF THE ORBITAL RIM INTO THE TARSAL PLATES.** It is the only barrier between an infected eyelid and an infected orbit, and which side of it the pus is on decides the diagnosis, the urgency and the treatment. *(the whole comparison is not in course material)*\n\n||**PRE-SEPTAL (periorbital)**|**POST-SEPTAL (orbital)**|\n|---|---|---|\n|**Where**|in front of the septum — **eyelid soft tissue only**|behind it — **inside the orbit**|\n|**Lid swelling, redness, warmth**|**✅ often marked**|✅|\n|**Chemosis**|✗|**✅**|\n|**PROPTOSIS**|**✗ — never**|**✅**|\n|**Eye movement**|**full and painless**|**RESTRICTED and PAINFUL; DIPLOPIA**|\n|**Vision, colour vision, RAPD**|**normal**|**MAY BE REDUCED — sight-threatening**|\n|**Systemic upset**|mild, low fever|**high fever, toxic, unwell**|\n|**Imaging**|not always needed|**URGENT CONTRAST CT — mandatory**|\n|**Treatment**|**oral (or IV) antibiotics, review in 24 h**|**ADMIT · IV antibiotics · urgent CT · DRAIN a collection**|\n\n**⚠️ THREE SIGNS CROSS THE LINE, ANY ONE IS ENOUGH: PROPTOSIS · PAINFUL OR RESTRICTED EYE MOVEMENT · REDUCED VISION.** An eye that will not move is a surgical problem. **The bedside sequence in a swollen eye is fixed** — proptosis, then movements, then acuity and colour vision; lid swelling alone tells you nothing.\n- **Pre-septal disease has other causes** — insect bite, trauma, dacryocystitis, skin sepsis — so the sinus history and sinus tenderness are what make it rhinogenic.\n\n*Defect note: the bank keys the umbrella term “complicated rhinosinusitis” over “orbital cellulitis” in a stem that already describes proptosis. Both are true; the specific answer is orbital cellulitis and the management is identical. Keyed as printed.*\n*Defect note: one printed free-text diagnosis reads “Preseptal Cellulitis and Proptosis”, which cannot both be true — proptosis is by definition post-septal. Transcribed as printed.*\n\nSrc: endpoint p.965 box; GG p.67 box. **The whole comparison is not in course material — 0 hits in all 34 decks for preseptal, post-septal, orbital septum, periorbital, chemosis, orbital cellulitis.**',
      qs:['entep-nose-34','entqb-nose4-160','entep-nose-case-13','entep-nose-104'] },

    { id:'sc-4', w:'must', h:'The Chandler staging of orbital complications, I to V',
      body:'*(not in course material — standard staging; the bank’s questions map onto it exactly)*\n\n|Stage|What it is|What you see|\n|---|---|---|\n|**I — PRE-SEPTAL (inflammatory oedema)**|oedema of the lid, **no orbital contents involved**|lid swelling and erythema; **no proptosis, full painless movement, normal vision**|\n|**II — ORBITAL CELLULITIS**|**diffuse inflammation of orbital fat, no discrete pus**|**proptosis, chemosis**, some restriction of movement; vision usually preserved|\n|**III — SUBPERIOSTEAL ABSCESS**|pus **between the lamina papyracea and the periorbita**, stripping periosteum off the medial wall|**PROPTOSIS with the GLOBE DISPLACED LATERALLY (out) AND DOWNWARD**, **DIPLOPIA**, restricted medial gaze, tender medial orbit|\n|**IV — ORBITAL ABSCESS**|pus **within the orbital fat itself**|**severe proptosis, COMPLETE OPHTHALMOPLEGIA, chemosis, VISUAL LOSS**|\n|**V — CAVERNOUS SINUS THROMBOSIS**|thrombus in the sinus; the end point|**BILATERAL** signs, multiple cranial nerve palsies, prostration — see the next section but one|\n\n**⚠️ THE EXAMINER’S SIGNATURE FOR STAGE III IS THREE WORDS: DIPLOPIA, PROPTOSIS, LATERALLY DISPLACED GLOBE.** The globe moves *away* from a MEDIAL abscess, so **the direction of displacement names the source sinus.**\n- **I and II are medical; III, IV and V are a collection or a thrombus. AN ABSCESS IS DRAINED**, antibiotics alone being for stage I and early II.\n- **Progression takes hours, not days**, especially in a child — the ladder is a monitoring schedule, not a list.\n\nSrc: **not in course material** (0 hits for “Chandler”). Stage III is this chapter’s only `examiner-patterns.md` entry.',
      qs:['entep-nose-104','entqb-nose4-162','entep-nose-99'] },

    { id:'sc-5', w:'must', h:'Managing the threatened orbit — image it, drain it, and watch the vision',
      body:'**⚠️ CT OF THE NOSE AND PARANASAL SINUSES, WITH CONTRAST, IS THE INVESTIGATION OF CHOICE, AND IT IS URGENT.** The one sentence in 34 decks that says so: *“an important diagnostic tool in assessing for potential **complications** of acute sinus disease.”*\n\n**CT answers the only three questions that matter, in one study** *(framing not in course material)*: **is there a COLLECTION or only cellulitis** — theatre tonight versus antibiotics · **WHICH SINUS**, and the state of the lamina papyracea · **has it reached the CRANIUM.**\n- **MRI is better for intracranial extension, the cavernous sinus and soft tissue**, with MR venography for a suspected sinus thrombosis. Not the first test for an orbit.\n\n**MEDICAL** *(no deck states a regimen for a complication)*: **admit** · **IV broad-spectrum antibiotics crossing the blood–brain barrier** — third-generation cephalosporin + metronidazole, vancomycin where MRSA is a risk · nasal decongestant and topical steroid to open the sinus. **Organisms: *S. pneumoniae*, *H. influenzae*, *M. catarrhalis* acutely; *S. aureus* and anaerobes once there is a collection; polymicrobial in chronic and odontogenic disease.**\n\n**OPERATE WHEN** *(criteria not in course material)*: **abscess on CT** · **acuity falling, or ≤6/60** · **a relative afferent pupillary defect** · **complete ophthalmoplegia** · **no improvement after 24–48 h of IV antibiotics** · a **large or lateral** collection · an **older child or adult**. Small **medial** subperiosteal collections under about 9 years with normal vision may settle medically under hourly review.\n\n**⚠️ IT IS TWO OPERATIONS: DRAIN THE COLLECTION AND DRAIN THE SOURCE SINUS IN THE SAME SITTING** — endoscopic medial decompression, or an external approach for a superior or lateral abscess. The deck’s own case ends in **endoscopic drainage**.\n\n**⚠️ VISION AND COLOUR VISION ARE RE-CHECKED, NOT CHECKED ONCE.** The eye is lost to optic nerve compression and central retinal artery occlusion, in hours.\n\nSrc: L27.1 lines 203–207 (quoted) and 286–330. **Regimens, thresholds and surgical criteria: not in course material.**',
      qs:['entep-nose-99','entqb-nose4-162','entep-nose-case-13'] },

    { id:'sc-6', w:'must', h:'Cavernous sinus thrombosis — and how it differs from orbital cellulitis',
      body:'**SEPTIC THROMBOSIS OF THE CAVERNOUS SINUS, THE END POINT OF THE ORBITAL LADDER AND THE MOST DANGEROUS COMPLICATION IN THIS CHAPTER**, and one of the three `L30` names outright.\n\n**Sources:** **sphenoid and posterior ethmoid** sinusitis · untreated orbital cellulitis or abscess · the **dangerous area of the face**, by retrograde flow through the **valveless ophthalmic veins** — that route is written in full in `ent-noseanat`.\n\n**Adds to an orbital picture** *(not in course material)*: severe headache · **ptosis** · **V1/V2 numbness** · **papilloedema**.\n\n||**Orbital cellulitis / abscess**|**CAVERNOUS SINUS THROMBOSIS**|\n|---|---|---|\n|**Side**|**strictly unilateral**|**BILATERAL within days**, through the intercavernous sinuses. **Near-diagnostic**|\n|**Retinal veins**|normal|**ENGORGED AND CONGESTED; papilloedema** — venous outflow is blocked, not merely inflamed|\n|**Cranial nerves**|movement limited by swelling and pain|**TRUE PALSIES of III, IV, VI, V1/V2. VI FAILS FIRST** — it lies free inside the sinus, the others in its lateral wall|\n|**Systemic**|febrile, unwell|**swinging fever, rigors, prostration, altered consciousness**|\n|**Meningism**|absent|often present|\n|**Course**|localised|**rapid; seeds meningitis and brain abscess**|\n\n**⚠️ ENGORGED RETINAL VEINS MAKE THE DIAGNOSIS.** Orbital cellulitis gives proptosis, chemosis and poor vision too; only a blocked sinus stops the whole orbit draining.\n- **An isolated VI palsy is the earliest cranial nerve sign of cavernous sinus disease** — the anatomy behind Gradenigo’s diplopia, which is an EAR complication and belongs with chronic otitis media.\n\n**MANAGEMENT — emergency** *(not in course material)*: admit · **contrast CT and MRI with MR VENOGRAPHY** · blood cultures · **high-dose IV antibiotics crossing the blood–brain barrier, 3–4 weeks** · **drain the source sinuses** · anticoagulation, debated · steroids for cranial nerve or pituitary involvement. **Mortality is significant even treated; survivors may keep a visual or nerve deficit.**\n\nSrc: L30 line 163 (verbatim); venous route in `nan-9`. **Picture, comparison and management: not in course material.**',
      qs:['entep-nose-case-18','entep-nose-104'] },

    { id:'sc-7', w:'must', h:'The bone — Pott’s puffy tumour, maxillary osteomyelitis, mucocele',
      body:'**POTT’S PUFFY TUMOUR = OSTEOMYELITIS OF THE FRONTAL BONE WITH AN OVERLYING SUBPERIOSTEAL ABSCESS.**\n\n- **Not a tumour** — “tumour” in its old sense of a swelling; Percivall Pott, 1760.\n- **The sign:** a **soft, boggy, fluctuant, tender swelling of the FOREHEAD** with fever and frontal headache. **Only the FRONTAL sinus is roofed by the forehead — the name tells you the sinus.**\n- **Mechanism:** erosion of the **ANTERIOR table**, or thrombophlebitis through the **valveless DIPLOIC VEINS OF BRESCHET**.\n- **⚠️ THOSE VEINS RUN BOTH WAYS AND THE POSTERIOR TABLE IS THINNER**, so **up to half also have an extradural, subdural or intracerebral abscess.**\n- **⚠️ IMAGE THE BRAIN FIRST, NOT THE SINUS** — contrast CT or MRI even when neurologically intact. The swelling is a **surface sign of intracranial risk**.\n- **Who: adolescent and young adult males** — frontal sinus newly pneumatised, diploic system at its peak.\n- **Treatment: IV antibiotics ~6 weeks** · **drain the abscess and the frontal sinus** · **debride sequestrum** · neurosurgery for any intracranial collection.\n\n**⚠️ POTT’S versus FRONTAL-LOBE ABSCESS — NEIGHBOURS, NOT ALTERNATIVES.** Same disease, different wall: **ANTERIOR table → forehead swelling · POSTERIOR table → intracranial abscess. They frequently coexist.** A **boggy fluctuant forehead mass** is Pott’s; **personality change** is the lobe.\n\n**OSTEOMYELITIS OF THE MAXILLA** *(not in course material)* — of **infants**, from maxillary sinusitis or dental sepsis: cheek and alveolar swelling, discharging sinuses, sequestra, lost tooth germs. Rare since antibiotics.\n\n**MUCOCELE / MUCOPYOCELE** *(not in course material)* — a **chronically obstructed ostium**; retained mucus expands the sinus and **erodes bone by pressure**. **Commonest FRONTAL, then ethmoid.**\n- **PAINLESS, SLOWLY PROGRESSIVE PROPTOSIS, GLOBE PUSHED DOWN AND OUT**, diplopia, smooth swelling at the superomedial orbital rim. **Months, no fever, no redness** — that is what separates it from an acute orbital complication.\n- **CT: a smooth, expansile, thin-walled opacified sinus.** Infected = **mucopyocele**, behaving acutely. Treated by **MARSUPIALISATION — endoscopic wide drainage into the nose**, not by stripping the lining.\n\nSrc: GG pp.66, 68 (question and distractor only). **None of this section is in course material — 0 hits for Pott, puffy, diploic, mucocele, sequestrum.**',
      qs:['entqb-nose4-163','entqb-nose4-161'] },

    { id:'sc-8', w:'must', h:'Inside the skull — five complications, and the sign that betrays each',
      body:'|Complication|How it presents|The point|\n|---|---|---|\n|**MENINGITIS**|**headache, fever, NECK STIFFNESS, photophobia, vomiting**|**the commonest intracranial complication**; usually from **ethmoid or sphenoid** disease. Image before lumbar puncture if there is any suspicion of raised pressure|\n|**EXTRADURAL (epidural) ABSCESS**|**often silent** — dull headache, low fever|between bone and dura; **frontal sinus** the usual source. Usually found by the scan, not by the patient|\n|**SUBDURAL EMPYEMA**|**FULMINANT — headache, high fever, SEIZURES, hemiparesis, rapidly falling consciousness**|pus spreads freely in an unrestricted space: **the fastest deterioration of the six.** Immediate neurosurgery|\n|**FRONTAL-LOBE (intracerebral) ABSCESS**|**headache, fever, and PERSONALITY CHANGE**; later raised pressure — vomiting, papilloedema, falling GCS; seizures|**sinusitis is its commonest cause**|\n|**CAVERNOUS SINUS THROMBOSIS**|see the previous section|the orbital route|\n|**SUPERIOR SAGITTAL SINUS THROMBOSIS**|headache, seizures, **bilateral leg weakness**|rare; from frontal disease|\n\n**⚠️ PERSONALITY CHANGE IS THE FRONTAL-LOBE SIGN AND IT IS EASY TO MISS.** **The frontal lobe is relatively SILENT** — often no weakness, no aphasia, no fit. **Irritability, disinhibition, apathy, poor concentration** may be the whole neurology, and **the family reports it, not the patient.** *(localising value not in course material)*\n\n**INVESTIGATION: contrast CT or MRI of the BRAIN** — diffusion-weighted MRI separates abscess from tumour. **Image the sinuses in the same study.**\n\n**TREATMENT — three parts, all of them** *(not in course material)*: **IV antibiotics crossing the blood–brain barrier**, weeks not days · **neurosurgical drainage of any collection** · **surgery to the SOURCE SINUS.** Draining the head and leaving the sinus is why these recur.\n\nSrc: L30 line 163; L16 lines 226–230, 292–296 (same names, for the EAR); GG p.68 box. **Presentations, localisation and management: not in course material.**',
      qs:['entep-nose-11','entqb-nose4-161','entqb-nose4-162'] }

  ]
}
};
