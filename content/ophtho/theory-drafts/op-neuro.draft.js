/* op-neuro + op-neuro-motil + op-neuro-optic — "Neuro-ophthalmology",
   Ophthalmology. Written 2026-08-18 under START-HERE.md §14 (slide-density
   revision notes), §14.1 (budget), §14.2 (coverage floor), §14.3
   (telegraphic style), §14.3a (layout), §14.5 (deferral register), plus
   content\ophtho\theory-plan.md and content\ophtho\book-map.md. Shape
   copied from content\ophtho\theory-drafts\op-ret.draft.js, the module's
   last three-way split.

   ⚠️⚠️ THIS FILE HOLDS THREE CHAPTERS. Two keys are NEW and must be
   registered in app\data\modules.js by the hub — this file does not touch
   that shared file, app\data\*, MEMORY.md, any resume file, or git.

     `op-neuro`        suggested title "Pupil, the visual pathway and field
                       defects" — THE EXISTING KEY, kept for book Parts I+IV
     `op-neuro-motil`  suggested title "Ocular motility disorders" — Part II
     `op-neuro-optic`  suggested title "The optic nerve" — Part III

   Naming follows the module's own style (`op-cornea`/`op-cornea-surg`,
   `op-ret-dr`/`op-ret-vasc`/`op-ret`), where the base key survives with one
   half. ⚠️ THE BASE KEY IS ON PARTS I+IV DELIBERATELY AND IT COSTS ZERO
   REFILES: the chapter's ONE question, `opqb-t1-32` (homonymous right
   hemianopia), is a Part IV question and is linked from `nrv-7`. No
   question in the module straddles either seam — verified below.

   ============================================================================
   THE SOURCE. NO RENDER WAS DONE AND NONE WAS AUTHORISED.

   content\ophtho\book\ch14-neuro-ophthalmology.txt — the book's chapter 14,
   read page by page on 2026-08-18 by another agent, 6,847 words of teaching.

   CITATION FORMAT, NEW ON 2026-08-18 AND USED THROUGHOUT: the PRINTED page,
   which is what the reader sees on the paper —
       ophthalmology.pdf (HEALIX) ch.14 p.188
   The cache gives both numbers and PDF = printed + 2. ⚠️ NO PDF PAGE NUMBER
   APPEARS ANYWHERE IN A CHAPTER BODY IN THIS FILE.

   Chapter weight: the book's own "Relative weight in %" column gives
   neuro-ophthalmology 10 % — joint-highest of the twenty chapters, with
   ch.19. That is the reason this material is written from the book: `L21`
   and `L22` are 45 pages carrying 264 cached words between them.

   ============================================================================
   ⚠️⚠️ THE BOOK'S OWN STUDY-PRIORITY MARKER, AND HOW IT IS CARRIED HERE.

   The contents page states: "In this book, anything we put (Tutorial) or (T)
   beside / before it , study in round & skip in final". In THIS chapter the
   marker appears in FIVE physical forms — whole boxes, dashed side-boxes,
   and inline clauses inside otherwise-examinable sentences.

   RULE APPLIED: THE SIGNAL IS CARRIED AT THE GRANULARITY IT WAS FOUND.
     · A WHOLE BOX gets one italic aside at the head of the section saying
       the whole block is Tutorial — `mot-1`, `mot-4`, `mot-9`, `onv-2`,
       `onv-9`, and the detail box inside `onv-11`.
     · AN INLINE CLAUSE gets the tag ON THAT CLAUSE ONLY, inside the bullet
       — `mot-5` (inferior oblique overaction), `mot-6` (the "Middle Rectus"
       gloss), `onv-4` (venous congestion), `onv-7` (para-infectious; SLE /
       PAN; the whole infectious bullet), `onv-10` (embolic/thrombotic;
       splinter haemorrhages), `onv-13` (three separate clauses).
     · A DASHED SIDE-BOX inside a core section gets a bracketed italic line
       inside that section — `onv-4` (pupils normal ± VI palsy; and the
       three-stage visual timeline).
   ⚠️ NO SECTION IS LABELLED TUTORIAL AS A WHOLE UNLESS THE BOOK LABELLED
   THE WHOLE BLOCK. Marking a section Tutorial when one clause was would
   destroy the signal, which is the failure this rule exists to prevent.

   TWO CONSEQUENCES WORTH THE HUB'S NOTE:
     1. THE CHAPTER'S ONLY DOSED DRUG REGIMEN IS INSIDE A TUTORIAL BOX —
        IV methylprednisolone 1 g × 3 d, oral prednisolone 1 mg/kg × 11 d,
        taper over 3 d (printed 191). The core text prescribes NOTHING for
        optic neuritis. Written in `onv-9` with the marker on the box.
     2. BOTH DISCRIMINATORS OF PRIMARY vs SECONDARY OPTIC ATROPHY are inline
        Tutorial clauses — "occurs without previous swelling (T)" and "it is
        preceded by swelling (Tutorial)". They are the only facts the
        classification turns on, so `onv-13` writes them in full AND says
        they are marked. Both, not one.

   ============================================================================
   BUDGET — §14.1: budget = max(summed lecture words, 25 × linked questions),
   floor 600, cap 3,000 PER CHAPTER. Counted by line range, `wc -w`, per
   §14.1(a). ⚠️ ALL THREE CHAPTERS FALL TO THE FLOOR, WHICH IS THE MODULE'S
   KNOWN FAILURE MODE (theory-plan.md: "the budget formula does not work in
   this module") AND IS NOW EXTREME.

   TERM 1 — the lectures, measured from disk:
     `L21) Optic Nerve.txt`             = 50 w total  (20 PDF pages)
     `L22) Pupil and Visual pathway.txt` = 214 w total (25 PDF pages)
     `L30) Squint II.txt`               = 178 w total — ⚠️ NOT COUNTED, see
                                          below. It is `op-squint`'s deck.

     `op-neuro`       — L22 lines 5–end, less the SOURCE header (6 w) and the
                        title block (10 w) = ~198 w COUNTED. `op-pupil` cited
                        L22 twice and explicitly did NOT count it ("cited
                        only, not counted" in `pup-2` and `pup-4`), so these
                        words are unspent and are charged here.
     `op-neuro-motil` — TERM 1 = 0. `L21` and `L22` contain nothing on
                        motility; their own titles say so. See the L30 ruling.
     `op-neuro-optic` — L21 less the SOURCE header (6 w) and the title/author
                        block (8 w) = ~36 w COUNTED.

   ⚠️ WHY `L30) Squint II` IS CITED AND NOT COUNTED, AND IT IS THE FILE'S
   BIGGEST BOUNDARY DECISION. `L30` is titled "EOM Dysfunction (Paralytic
   Squint)" and it teaches 3rd / 4th / 6th nerve paralysis, the pupil-involved
   vs pupil-spared split, myasthenia gravis (ptosis, EOM weakness, Tensilon
   test, ice pack test, investigations incl. enlarged thymus) and nystagmus
   (end gaze, congenital, drug induced, acquired). That is book Part II's
   subject matter, taught by the lecture series inside `op-squint`'s deck.
   Per §14.1(b) — DEFERRING AND COUNTING ARE OPPOSITES — L30's 178 words stay
   charged to `op-squint`, which is unwritten. `op-neuro-motil` cites it,
   uses what it adds beyond the book, and registers the reciprocal rows below.

   TERM 2 — 25 × linked questions. ⚠️ VERIFIED FROM DISK:
   `chapter: 'op-neuro'` returns EXACTLY ONE line in app\data\questions.ophtho.js
   — `opqb-t1-32`. TERM 2 = `op-neuro` 25 · `op-neuro-motil` 0 ·
   `op-neuro-optic` 0. It governs nowhere.

   BUDGETS: all three = max(TERM 1, TERM 2) is below 600, so all three sit on
   the **600-word FLOOR**. A 600-word chapter cannot carry 6,847 words of
   10 %-weight teaching, and no chapter below is written to 600. The overrun
   is forecast entity by entity, framework slides costed one by one and grids
   costed at rows × columns, per §14.1's `ent-dysph`, `ent-neck` and
   `ent-phon` rules:

     `op-neuro` — PUPIL, PATHWAY AND FIELD DEFECTS (book pp.179–181 + 195,
     1,697 source words)
       The light-reflex arc (figure-only, 4 steps) + the two muscles and
         their supply — framework: ~175
       Abnormal pupillary size — the book's 2-column table (6 + 7 items)
         PLUS L22's two cause lists, which are longer than the book's: ~230
       Dorsal midbrain syndrome — 3 Ls + Collier + 5 causes + L22's 2 adds: ~165
       Horner — 5 signs + 8 causes split by the book's red flag + 3
         investigations + the three-order pathway (figure-only): ~250
       Argyll-Robertson — 4 facts + the ARP mnemonic + 2 investigations +
         L22's 3 extra causes + the spelling defect: ~185
       Field terminology — a 5-row definition table + 3 rules: ~200
       Lesion → defect: a 7-row × 2-column map, costed at rows × columns,
         plus the three generating rules and what L22 adds: ~300
       What else a pathway lesion shows + the false localizing sign: ~130
       = ~1,635 (≈6.8 pp at ÷240)

     `op-neuro-motil` — OCULAR MOTILITY DISORDERS (book pp.182–186, 2,085
     source words)
       Cranial nerve palsy presentation + treatment (whole Tutorial block)
         + the L30 cross-reference: ~210
       Third nerve palsy — 4 features + the CN III supply table: ~185
       The pupil rule — the algorithm + the vasa nervorum mechanism
         (both figure-only) + 5 aetiologies + investigations: ~250
       Complete vs pupil-sparing — a 5-axis × 2-column Tutorial table
         + the six-panel photograph set: ~190
       Fourth nerve palsy — 4 features + SO4's box + 4 aetiologies: ~230
       Sixth nerve palsy — 5 features + a 5-row aetiology grid carrying
         four numbers + 2 investigation lines: ~230
       The three palsies compared — 8 axes × 3 columns = 24 cells: ~250
       Myasthenia, core text — definition + 5 clinical points: ~180
       Myasthenia, the Tutorial box in full — demographics, fatigability,
         ptosis (4 facts + the ice test), diplopia, 6 other manifestations,
         3 investigations, treatment, + L30's thymus: ~330
       Nystagmus — definition + 3 directions + a 3-column benign table +
         acquired + 5 causes + 2 investigations + 2 discriminators: ~240
       = ~2,295 (≈9.6 pp)

     `op-neuro-optic` — THE OPTIC NERVE (book pp.187–194, 3,065 source words)
       The nerve and the disc — 8 causes + the anatomy + the opener figure: ~180
       Signs of optic nerve dysfunction (Tutorial box) + the 4-row
         field-defect-to-disease table (figure-only) + L21's fifth sign: ~200
       Optic disc swelling — 5 ophthalmoscopic signs + L21's three causes: ~150
       Papilloedema — 6 established signs + 2 dashed-box signs + the 4-point
         N.B + the 3-stage timeline + 5 aetiologies + 2 investigations: ~320
       Pseudotumor cerebri — a 4-row table incl. 3 treatments and the
         fenestration figure: ~200
       Papillitis + the papilloedema-vs-papillitis table, 7 axes × 2
         columns = 14 cells, the chapter's highest-yield object: ~260
       Optic neuritis — definition, 3-form classification, epidemiology,
         2 symptoms + 5 signs of retrobulbar neuritis, 6 aetiology groups: ~290
       Chronic retrobulbar neuritis — 3 aetiologies + the pattern: ~150
       Demyelinating optic neuritis (whole Tutorial box) — 4 demographics,
         5 symptoms, 5 signs, MRI, and the 3-part drug regimen: ~250
       NAION — mechanism, 6 risk factors, 5 clinical features, treatment,
         the ESR rule, prognosis, and the age contradiction: ~270
       Arteritic AION / GCA — 7 symptoms + 4 sign groups + 4 management
         items + the histopathology figure: ~280
       NAION vs arteritic — 7 axes × 2 columns = 14 cells + the blank-cell
         contradiction + the age contradiction: ~270
       Optic atrophy — a 4-type × 3-column grid + the fundus in each type
         (SUPPLIED — the book teaches it only in photographs): ~280
       = ~2,900 (≈12.1 pp)

     COMBINED FORECAST ≈ 6,830 body words ≈ 28.5 printed pages as ONE
     chapter — nearly three times the ~10-page operative ceiling. SPLIT
     THREE WAYS, on the book's own Roman-numbered parts.

     ⚠️ `op-neuro-optic` IS THE ONE AT RISK, at ~12.1 forecast pages. It is
     written as ONE chapter per the brief. This module's ÷240 estimator has
     OVER-predicted every single time (by 5, 2, 2, 1.5, 2.3 and 2.1 pages),
     so ~12.1 forecast is plausibly ~10 printed. The hub prints and rules.
     ⚠️ THE FALLBACK SEAM IS PRE-CHOSEN AND THE DRAFT IS BUILT FOR IT — see
     the seam note below. No question moves either way; the chapter has none.

   ============================================================================
   ⚠️⚠️ THE p.190/191 SEAM — AND WHY THIS DRAFT LEAVES **TWO** CLEAN SEAMS,
   NOT ONE. THIS IS A CORRECTION TO THE BRIEF.

   The brief names the fallback seam as "printed 187–190 (disc swelling,
   papilloedema, pseudotumor cerebri, papillitis) = 1,529 w against 191–194
   (optic neuritis, chronic retrobulbar neuritis, NAION, arteritic AION,
   optic atrophy) = 1,536 w".

   ⚠️ THE PAGE NUMBERS AND THE TOPIC LIST DISAGREE. Optic neuritis and
   chronic retrobulbar neuritis are printed on **p.190**, not on 191 — the
   cache's own page banner reads "PAGE 190 (PDF 192) — (2) Optic Neuritis ·
   (3) Chronic Retrobulbar Neuritis". So the brief's first group is defined
   by pages 187–190 while its topic list assigns p.190's two topics to the
   second group. One of the two is wrong and the draft cannot know which.

   RESOLUTION: BOTH CANDIDATE SEAMS ARE CLEAN IN THIS DRAFT.
     SEAM A — after `onv-6`, i.e. after the papilloedema-vs-papillitis table.
              That is the end of printed 189, and it matches the brief's
              TOPIC list (disc swelling · papilloedema · pseudotumor cerebri
              · papillitis | everything else).
     SEAM B — after `onv-8`, i.e. after chronic retrobulbar neuritis. That is
              the end of printed 190, and it matches the brief's PAGE range.
   NO SECTION STRADDLES EITHER BOUNDARY. `onv-6` ends on p.189 and `onv-7`
   opens on p.190; `onv-8` ends on p.190 and `onv-9` opens on p.191. The hub
   can cut at A or at B without touching a body. Seam B is the more even of
   the two and is the one the brief's word counts describe.

   ============================================================================
   ⚠️ MODULE CHECK — greped across `app\data\theory.ophtho.js` AND all 27
   cached ophthalmology decks before anything was called new or called a gap.
   FOUR OF THE BRIEF'S "VERIFIED ZERO" TERMS ARE NOT ZERO IN THE LECTURE
   CACHES. The brief's zeros are true of the written theory only.

     ⚠️⚠️ 1. MYASTHENIA IS IN THE MODULE, AND IT IS IN A DECK. The brief
     lists `myasthenia` as "returning ZERO across the whole module".
     `L30) Squint II` lines 52–70 print **Myasthenia Gravis · Ptosis ·
     TensilonTest · Ice Pack Test · EOM weakness ("Any pattern") ·
     Investigations: Chest CT, X ray: enlarged Thymus / Acetyl Choline
     Receptor Antibodies / EMG**. `L5) Eyelid disease` line 71 also lists
     "Myogenic (Myasthenia)" as a ptosis cause. ZERO is true of
     `theory.ophtho.js`, not of the module. Consequence: `mot-9` credits L30
     for the **thymus imaging**, which the BOOK omits entirely, and names
     Tensilon as the trade name of the book's edrophonium.

     ⚠️⚠️ 2. THE LESION → FIELD-DEFECT MAPPING IS **NOT** FIGURE-ONLY IN THE
     MODULE. The brief says quadrantanopia, the temporal-vs-parietal split
     and macular sparing "exist solely inside these two figures" and that
     `quadrantanopia` and `hemianopia` return zero. That is true OF THE BOOK
     and of `theory.ophtho.js`. It is FALSE of `L22`, which prints the whole
     series slide by slide — Optic Nerve · Optic Chiasma (**Bitemporal**,
     and separately **Binasal**) · Optic Tract (contralateral homonymous,
     **incongruous**) · Lateral Geniculate Body (incongruous) · Optic
     Radiation (**"Pie in the sky" / "Pie in the floor"**, contralateral
     homonymous **quadrantanopia**) · Occipital Cortex (**congruous with
     macular sparing**). `opqb-t1-32`'s own explanation already reproduces
     that table. So `nrv-7` is written from BOTH sources and each row says
     which one it came from — and **`L22` prints BINASAL hemianopia, which
     the book does not.**

     ✅ 3. CONFIRMED ZERO, as the brief says: `pseudotumor` (0 module-wide),
     `Collier` (0), `oscillopsia` (0), `lamina cribrosa` (0), `fenestration`
     (0), `ethambutol` (0), `thymus` (0), `Tensilon`/`edrophonium` (0 in
     theory), `ice test`/`ice pack` (0 in theory), `senile miosis` (0),
     `morphine` (0), `organophosph` (0), `pinpoint`/`pin-point` (0),
     `traumatic mydriasis` (0). ✅ `Adie` genuinely returns zero — the one
     apparent hit in `theory.ophtho.js` is the letters inside "gra-die-nt".

     ✅ 4. NOT A GAP — DORSAL MIDBRAIN AND ARGYLL-ROBERTSON ARE ALREADY
     NAMED. Merged `pup-4` carries both as a one-line aside from `L22`, with
     causes the book omits (DM, alcoholism, encephalitis; pineal tumour;
     convergence-retraction nystagmus). `nrv-3` and `nrv-5` write the full
     accounts and credit L22 for what it adds.

     ✅ 5. NOT A GAP — THE HORNER SIGN LIST. Merged `pup-2` carries miosis,
     dilation lag, ptosis, apparent enophthalmos, anhidrosis, heterochromia,
     and the anisocoria-in-the-dark rule, cited to L22 and NOT counted.
     `nrv-4` writes the DISEASE — aetiology, the red-flagged four, the
     investigations and the three-order pathway — and points at `pup-2` for
     the bedside rule rather than restating it.

     ✅ 6. NOT A GAP — THE LIGHT REFLEX ARC AND THE SWINGING FLASHLIGHT TEST.
     `pup-3` writes the arc and `pup-4` the test in full. `nrv-1` writes only
     what the BOOK's figure adds (both pretectal nuclei as the decussation
     point; the constrictor/dilator legend) and cross-references the rest.
     ⚠️ THE SWINGING FLASHLIGHT TEST IS NOT RE-TAUGHT ANYWHERE IN THIS FILE.

     ✅ 7. NOT A GAP — THE SIX EOMs AND THEIR NERVES. `pup-7` carries the
     grid and `pup-8` the cardinal positions. `mot-2` names only which
     muscles CN III supplies; `mot-5`/`mot-6` name SO4's and LR6's actions
     because the book prints them in their own boxes on those pages. THE
     MUSCLE ACTIONS ARE NOT RE-DERIVED.

   ============================================================================
   THE REAL GAPS — settled by proving a negative across the theory file AND
   all 27 decks, then ANSWERED AND TAGGED IN PLACE, never declared
   (`CLAUDE.md` §4). Each tag sits on its own claim.
     1. THE FUNDUS APPEARANCE OF THE FOUR OPTIC ATROPHIES. The book teaches
        it ONLY in photographs — its prose says nothing beyond "the optic
        nerve appears pale in all types". Supplied and tagged in `onv-13`,
        four descriptions, one per type. The ONE sourced element is the
        book's own annotation on the glaucomatous photograph ("note the loss
        of the neuro-retinal rim allowing the blood vessels to disappear"),
        which is written unmarked and matches merged `glc-7`.
     2. WHY PAPILLOEDEMA IS IMAGED BEFORE IT IS TAPPED. The book orders both
        and states no order. One clause, supplied and tagged, `onv-4`.
     3. WHY NAION IS NOTICED ON WAKING. The book prints "first noticed upon
        waking" and "nocturnal hypotension" on the same page and never joins
        them. One clause, supplied and tagged, `onv-10`.
     4. THE HEAD-TILT LOGIC IN IV PALSY, AND THE BILATERALITY OF TRAUMATIC
        IV PALSY. The book gives the tilt and the fact; not the reason.
        Supplied and tagged, `mot-5`.
     5. "THE PATIENT SEES NOTHING AND THE DOCTOR SEES NOTHING" — the
        retrobulbar aphorism. Not in the book. Supplied and tagged, `onv-7`.
     6. RED DESATURATION AS A BEDSIDE COLOUR TEST. The book lists colour
        vision as a sign and gives no method. One clause, tagged, `onv-2`.
     7. THAT CHRONIC RETROBULBAR NEURITIS IS THE ONE REVERSIBLE OPTIC
        NEUROPATHY HERE. The book prescribes nothing for it. Tagged, `onv-8`.
     ⚠️ NOT SUPPLIED, DELIBERATELY: no ONTT, no Frisén grading, no modified
     Dandy criteria, no opening-pressure figure, no ACR criteria, no biopsy
     specimen length, no IL-6 inhibitors, no Adie pupil, no INO, no Parks
     three-step, no pharmacological pupil testing. All are on the cache's
     NOT-COVERED list, none is tested by any question in the module, and
     `acu-8` already carries the biopsy-length claim as tagged outside
     knowledge. Adding them would put unexamined material in front of the
     reader eleven days before an exam.

   ============================================================================
   ⚠️ THE BOOK'S OWN DEFECTS — RECORDED, NEVER SILENTLY CORRECTED
   (`Herophilus\CLAUDE.md` §4). Where a defect could mislead an answer it is
   written into the body; the purely orthographic ones are inventoried here.

   IN THE BODY, because each could change an answer:
     (a) ⚠️ A REAL INTERNAL CONTRADICTION — THE BLANK CELL. p.193's
         comparison table leaves NAION's **Investigations cell PRINTED
         BLANK**, while p.192 orders **ESR and CRP in every suspected NAION
         over 50** to exclude giant cell arteritis. Both are written in
         `onv-12`, the blank recorded as blank, with the ruling that p.192
         governs in practice — a blank cell is not an instruction to omit a
         test.
     (b) ⚠️ NAION'S AGE, TWICE, DIFFERENTLY. p.191 says NAION "typically
         affects patients over 40 years of age"; p.193's table says "majority
         > 50 years old". Both recorded, in `onv-10` and `onv-12`. The **> 50**
         figure is the one the ESR/CRP rule is attached to.
     (c) "overaction of the Middle Rectus" (p.184), for the esotropia of a
         sixth nerve palsy. Transcribed `[sic]` in `mot-6` with the reading
         (MEDIAL rectus) beside it, because a reader meeting "Middle Rectus"
         in an answer must recognise it.
     (d) "Aryll Robertson" in the objectives flowchart (p.178) against
         "Argyll-Robertson" in the body (p.181). Recorded in `nrv-5` —
         a term that will not grep is worth one line.
     (e) "temporary measurer" (p.182) for monocular occlusion. `[sic]` in
         `mot-1` with the reading.

   ⚠️ ONE "DEFECT" IN THE CACHE'S OWN LIST IS NOT A DEFECT — CORRECTED HERE.
   The cache's structural note 5 flags the box "function of SO4: Abduction /
   internal rotation / depression" (p.183) as a printed number "that looks
   like a typo". IT IS CORRECT ANATOMY. The superior oblique's three actions
   ARE intorsion (internal rotation), depression and abduction; it depresses
   best in ADDUCTION, which is a different statement and is the one merged
   `pup-7` carries. `mot-5` transcribes the box as printed AND says it is
   right, so nobody "corrects" the book into an error.

   INVENTORY OF THE ORTHOGRAPHIC ONES, not written into any body (§14.3 bans
   clutter, and none of them can change an answer): "Edinger-Wetsphal" (p.179
   figure label 3; label 4 spells it correctly) · "superiosis" for superioris
   (p.182) · "constrictor pupilae" (p.182 figure) · "dystunction" (p.186) ·
   "neurtis" (p.189) · "burred" for blurred (p.188) · "quadrantopia" for
   quadrantanopia (p.195 figure, both rows) · "Glaucomatus" (p.194 plate,
   twice) · "may isolated" for "may be isolated" (p.191).

   ============================================================================
   ⚠️ §14.5 DEFERRAL REGISTER — rows OWED TO these chapters (delivered), and
   rows these chapters CREATE. Every row's SECOND clause was verified against
   the merged chapter, per theory-plan.md.

   DELIVERED — rows this file discharges:

   R1. §14.5 line 1050 — `op-systemic` (L23 l.191) → `op-neuro`, `op-acute`:
       "AION and the ocular motor palsies — written here only as the
       vascular/syphilitic associations."
       ✅ DELIVERED, THE MOTOR-PALSY HALF, IN `op-neuro-motil` (`mot-1`…
       `mot-7`). The AION half was already delivered to `op-acute`
       (`acu-7`/`acu-8`).
       ✅ SECOND CLAUSE VERIFIED TRUE: merged `sys-5` lists "Ocular motor
       nerve palsies" as one of four ocular associations of hypertension and
       nothing more, and explicitly says "AION and the motor palsies to
       `op-neuro`"; merged `vsc-11` repeats the pointer. Neither writes a
       palsy.
       ⚠️ RECEIVER CHANGED BY THE SPLIT: the row names `op-neuro`; the
       payload lands in `op-neuro-motil`. The hub should update the row's
       receiver when it ticks it.

   R2. `op-acute`/`acu-9` (L21) → `op-neuro`: "OPTIC ATROPHY — the common end
       point; `L21` splits it primary · secondary · consecutive ·
       glaucomatous, and that account is `op-neuro`'s."
       ✅ DELIVERED IN `onv-13`, all four types, with the book's aetiologies,
       both Tutorial-marked discriminators and the supplied fundus
       descriptions. ✅ SECOND CLAUSE VERIFIED: `acu-9` really does name the
       four and write none of them.
       ⚠️ RECEIVER: lands in `op-neuro-optic`, not the base key.

   R3. `op-acute`/`acu-7` (L31,32 p22, L19.2, L23 l.191) → the sourced AION.
       ✅ SUPERSEDED HERE. `acu-7`'s nine-axis arteritic/non-arteritic table
       is explicitly tagged "the whole table is supplied … not in course
       material". THE BOOK NOW SOURCES IT, and `onv-10`/`onv-11`/`onv-12`
       write the sourced version. ⚠️ FOUR POINTS WHERE THE SUPPLIED TABLE AND
       THE BOOK DISAGREE, ALL REPORTED, NONE SILENTLY CHANGED — `acu-7` is a
       merged chapter this file may not touch:
         · arteritic age: `acu-7` "over 70"; the book "above 60 years" (p.192)
           and "majority > 60" (p.193).
         · non-arteritic age: `acu-7` "50–65"; the book "over 40" (p.191) and
           "majority > 50" (p.193).
         · NAION fellow eye: `acu-7` "~15 % over 5 years"; the book says only
           "other eye is not commonly affected". The 15 % figure is unsourced.
         · arteritic fellow eye: `acu-7` "up to a third in days–weeks"; the
           book "other eye usually affected within few days" and "can become
           involved within days" — no fraction.
       ⚠️ ALSO: `acu-7`'s "disc at risk", nocturnal hypotension as a risk
       factor, PDE5 inhibitors and segmental hyperaemic swelling are NOT in
       the book. Nocturnal hypotension IS (p.191, "many occur during periods
       of nocturnal hypotension") and is written sourced in `onv-10`; the
       other three remain unsourced wherever they stand.
       ☐ RECONCILIATION WORK FOR THE HUB: point `acu-7` at `onv-10`/`onv-12`
       and replace its tags with citations, or leave it and accept the
       divergence knowingly. This file does not edit it.

   R4. `op-acute`/`acu-8` (L31,32 p20/p24, L1,2 l.658) → the sourced GCA.
       ✅ PARTLY SUPERSEDED IN `onv-11`. `acu-8` opens "Everything else below
       is supplied (not in course material)"; the book now sources the
       symptom set (headache, jaw claudication, scalp tenderness, proximal
       myalgia, amaurosis fugax, constitutional symptoms), the temporal
       artery signs, the chalky-white swollen disc, ESR/CRP, temporal artery
       biopsy, high-dose systemic steroid, and the fellow eye within days.
       ⚠️ DIVERGENCES REPORTED: the book prints **ESR > 60 mm/hr**, `acu-8`
       "ESR often above 50"; the book gives **no** biopsy specimen length,
       `acu-8` "at least 2 cm because of SKIP LESIONS"; the book gives no
       steroid dose, no thrombocytosis, no "normal ESR does not exclude it",
       no polymyalgia rheumatica by name (it prints "proximal myalgia").
       ⚠️ AND THE BOOK EXPLICITLY DELEGATES GCA PROPER TO ITS OWN CHAPTER 19,
       "Ocular Manifestations of Systemic Conditions and Diseases" — see N3.

   R5. `op-acute`/`acu-9`'s three-way swollen-disc table (papilloedema |
       papillitis | AION), written from outside knowledge and tagged.
       ✅ THE PAPILLOEDEMA AND PAPILLITIS COLUMNS ARE NOW SOURCED — the
       book's own seven-axis table, `onv-6`, which is NOT Tutorial-marked and
       is the highest-yield object in the chapter. `acu-9`'s AION column is
       sourced by `onv-12`. ⚠️ ONE DIVERGENCE: `acu-9` gives papillitis pain
       "ON EYE MOVEMENT" as a table row; the book puts periocular pain on
       eye movement under RETROBULBAR neuritis (p.190) and does not put pain
       in the papilloedema/papillitis table at all. Both are defensible;
       reported, not reconciled.

   R6. `op-acute`/`acu-6`'s optic neuritis steroid regimen — "IV
       methylprednisolone 1 g daily × 3 days, then an oral taper", tagged
       supplied, with the ONTT rationale.
       ✅ NOW SOURCED AND FULLER in `onv-9`: **1 g IV daily for 3 days, then
       ORAL PREDNISOLONE 1 mg/kg daily for 11 DAYS, then TAPERED OVER 3
       DAYS.** ⚠️ The book gives no ONTT and no "oral prednisone alone is
       avoided", so `acu-6`'s second rule stays unsourced. ⚠️ AND THE
       REGIMEN IS INSIDE A TUTORIAL BOX — the marker travels with it.

   NEW ROWS — created by this file, owed onward:

   N1. `op-neuro-motil` (book p.182 Tutorial box; `L30` lines 8–49) →
       `op-squint`: **the paralytic-squint material `L30` teaches and the
       book does not** — a SECONDARY angle greater than the primary, CROSSED
       against UNCROSSED diplopia, the three abnormal head postures as a
       system (face turn / chin elevation-depression / head tilt), FALSE
       ORIENTATION with vertigo, nausea and uncertain gait, and the surgery
       (**after 6 months**; **resection–recession** for incomplete paralysis,
       **MUSCLE TRANSPOSITION** for complete). `mot-1` writes only the book's
       five presenting features and its three treatment measures, and names
       L30's additions in one aside without teaching them.
       ⚠️ L30's 178 words stay charged to `op-squint`'s TERM 1 — this
       chapter counted none of them.
       ⚠️ AND THE REVERSE DIRECTION IS SETTLED IN ADVANCE: when `op-squint`
       is written it must NOT re-derive the three palsies, myasthenia or
       nystagmus. It points at `mot-2`…`mot-10`. VERIFIED SAFE: none of
       `op-squint`'s six questions (`opqb-t1-43`, `-44`, `-45`, `-53`, `-54`,
       `opqb-t2-94`) is a paralytic-squint question — all six are
       comitant-squint and corneal-light-reflex questions.

   N2. `op-neuro-motil` (book p.185) → `op-lid` (MERGED — reconciliation):
       **the full myasthenia gravis account is `mot-8`/`mot-9`.**
       `opqb-t3-120` is filed to `op-lid` and its key names myasthenia gravis
       as a cause of ptosis; `myasthen` returns ZERO in `theory.ophtho.js`,
       so nothing in the merged module answers it. `L5) Eyelid disease`
       line 71 lists "Myogenic (Myasthenia)" and no more. ☐ NOTICE, not a
       debt: `op-lid` needs a one-line cross-reference to `mot-9`.

   N3. `op-neuro-optic` (book p.192, explicit delegation) → `op-systemic`
       (MERGED — reconciliation): **giant cell arteritis in full, from the
       book's own chapter 19.** The chapter's exact words are "(Please refer
       to the chapter on Ocular Manifestations of Systemic Conditions and
       Diseases)". `temporal arteritis` returns two hits in
       `theory.ophtho.js` and both are `op-acute`'s (`acu-3`, `acu-8`);
       `op-systemic` carries none. ⚠️ UNDELIVERABLE FROM HERE — the book's
       chapter 19 has not been read. ☐ owed: read ch.19 (printed 236–253,
       also 10 % weight) and reconcile `sys-*` with `onv-11` and `acu-8`.

   N4. `op-neuro` (book p.179, p.181, explicit delegation ×2) → `op-pupil`
       (MERGED): **the book delegates abnormal pupillary size and the
       Argyll-Robertson investigation to its own chapter 1.**
       ✅ ALREADY DISCHARGED, NOT A DEBT: the app's examination chapter is
       `op-pupil`, and `pup-1`…`pup-4` carry size, shape, anisocoria, the
       light reactions and the swinging flashlight test. `nrv-1`, `nrv-2` and
       `nrv-5` cross-reference them and re-teach none of them. Recorded so
       the delegation is not mistaken for a hole later.

   N5. `op-neuro-optic` (book p.187 intro, p.194) → `op-onc` (UNWRITTEN):
       ⚠️ NOT A DEFERRAL — A NEGATIVE, recorded so `op-onc` does not go
       looking for it here. **Compressive optic neuropathy as an entity,
       optic nerve glioma and optic nerve sheath meningioma are ABSENT from
       book chapter 14.** The chapter names "compression by intracranial or
       orbital tumours" only as a cause of primary optic atrophy. Merged
       `orb-16` already carries the glioma (children, median 6.5 y, NF1,
       fusiform enlargement) and the sheath meningioma (NF2, visual loss
       before proptosis, the opticociliary shunt triad). `onv-1` points at
       `orb-16` in one line.

   N6. `op-neuro` (book p.195) → `op-va` / `op-vissym` (`op-va` MERGED):
       ⚠️ NOT A DEFERRAL — recorded to stop a duplicate. **Visual-field
       TESTING methods are absent from book chapter 14** (implicitly ch.1's).
       Merged `va-7` already carries confrontation, Amsler and perimetry with
       the acuity thresholds. `nrv-6` and `nrv-7` teach the DEFECTS and the
       LOCALISATION only, and name no test.

   ============================================================================
   ⚠️ NO NUMBERS ARE WRITTEN INTO THIS HEADER (§14.1: nine draft headers have
   been wrong, one by 265 words while claiming to be measured). Every figure
   above is a FORECAST derived from the SOURCE, computed before the bodies
   were written, and is labelled as such. NO TOTAL, NO MEASURED WORD COUNT
   AND NO PAGE COUNT FOR THIS DRAFT APPEARS ANYWHERE ABOVE.

   THE HUB MEASURES. Reproduce with the canonical definition — W(s.body) over
   every section, `Src:` lines INCLUDED (theory-plan.md, 2026-08-17):

     node -e "const fs=require('fs'),vm=require('vm');const c={console};
     vm.createContext(c);vm.runInContext(fs.readFileSync(
     'content/ophtho/theory-drafts/op-neuro.draft.js','utf8'),c);
     const D=vm.runInContext('THEORY_DRAFT',c);
     for(const k of Object.keys(D)){let t=0;for(const s of D[k].sections){
     const w=s.body.split(/\s+/).filter(Boolean).length;t+=w;
     console.log(k,s.id,w);}console.log(k,'TOTAL',t);}"

   ⚠️ That command uses node's split; `wc -w` will differ slightly on the
   `·` and `⚠️` glyphs, exactly as recorded in the `op-ret` header. Use one
   definition and say which.
   ============================================================================ */

var THEORY_DRAFT = {
  "op-neuro": {
    "intro": "The book’s Part I and Part IV share one axis — the afferent pathway. A pupil that will not react and a field that has gone missing are the same lesion read two ways. The examination technique itself is `op-pupil`.",
    "sections": [
      {
        "id": "nrv-1",
        "w": "must",
        "h": "The light reflex arc, and the two muscles that move the pupil",
        "body": "**The arc is FIGURE-ONLY here:** the book’s prose gives no anatomical description of the light-reflex pathway at all. Its numbered diagram gives four steps.\n\n### The four steps\n- **1 — Light on ONE eye:** action potentials leave that retina alone.\n- **2 — BOTH pretectal nuclei** are reached, right and left.\n- **3 — BOTH Edinger–Westphal nuclei** are stimulated from there.\n- **4 — Both oculomotor nerves** fire, via the **ciliary ganglia**, and **both pupils constrict**.\n\n- **⚠️ The decussation is at step 2**, which is why one eye’s light always drives two pupils — the whole basis of the consensual reaction and of the swinging flashlight test.\n\n### The two muscles\n\n|Muscle|Supply|Its job|\n|---|---|---|\n|**Constrictor (sphincter) pupillae**|**PARASYMPATHETIC**|constricts in **bright light**|\n|**Dilator pupillae**|**SYMPATHETIC**|dilates in **dim light**|\n\n- **Direct reaction:** the lit pupil constricts. **Consensual reaction:** the fellow pupil constricts equally.\n\n*Technique — dimming the room, fixating a distant object, direct against consensual, and the swinging flashlight test for an RAPD — is `pup-3` and `pup-4`, in full. The book delegates pupil examination to its own chapter 1 and teaches none of it here.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 p.179; pup-3, pup-4 (cited only)",
        "qs": []
      },
      {
        "id": "nrv-2",
        "w": "must",
        "h": "Abnormal pupillary size — the two cause lists",
        "body": "**Two questions only:** what leaves a pupil dilated and fixed, and what makes one small.\n\n### A dilated fixed pupil — what it MEANS\n- **Loss of the PARASYMPATHETIC supply**, or **injury to the SPHINCTER PUPILLAE muscle** itself.\n\n### A dilated fixed pupil — what CAUSES it\n\n|Cause|Note|\n|---|---|\n|**Trauma** to the iris sphincter or the orbital parasympathetic nerves|**traumatic mydriasis**|\n|**Pharmacologic dilatation**|drops|\n|**Ciliary ganglion** disease or damage|—|\n|**Oculomotor (III) paralysis**|`mot-2`|\n|**Brain stem affection**|**dorsal midbrain syndrome**, `nrv-3`|\n|**Anaesthesia, stages II and IV**|—|\n|**DEATH**|bilateral|\n\n### A small pupil\n- **PIN-POINT pupil —** three causes: **morphine use · organophosphorus poisoning · pontine haemorrhage**.\n- **Miotics —** the drug class.\n- **Acute iritis**, or **old iritis with POSTERIOR SYNECHIAE**.\n- **SENILE MIOSIS —** decreased sympathetic stimulation with age.\n- **Horner syndrome** (`nrv-4`) · **Argyll-Robertson pupil** (`nrv-5`).\n- **Anaesthesia, stage III.**\n\n- **⚠️ The anaesthesia trap:** stages **II and IV DILATE**, stage **III CONSTRICTS**. The book prints the roman numerals in red on both sides of its table for exactly that reason.\n\n### What `L22` adds and the book does not\n- **To miosis:** extremes of age · **near reaction** · **sleep** · pesticides · acute iridocyclitis · trauma.\n- **To mydriasis:** adolescents · **excitement** · **sympathetic IRRITATION** · acute congestive glaucoma · **optic atrophy and optic neuritis** · **total retinal detachment**.\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 p.179; L22 (Autonomic Nerve Supply — Miosis, Mydriasis)",
        "qs": []
      },
      {
        "id": "nrv-3",
        "w": "must",
        "h": "Dorsal midbrain syndrome — the 3 Ls",
        "body": "**The lesion:** damage to or compression of the **upper brainstem (midbrain)**. Everything it produces is **BILATERAL**.\n\n### The 3 Ls — the book’s own mnemonic\n- **LIGHT–NEAR DISSOCIATION —** light reflex **absent**, near reflex **present**.\n- **LOSS OF UPGAZE.**\n- **LID RETRACTION —** **COLLIER SIGN**, sclera visible above both limbi.\n\n### Causes\n- **Hydrocephalus** · **compressive lesions of the midbrain** · **multiple sclerosis** · **stroke** · **midbrain haemorrhage**.\n- **`L22` adds** a sixth cause — **pineal body tumours** — and a fourth sign, **convergence-retraction nystagmus**.\n\n- **⚠️ MRI IS MANDATORY** in any patient showing manifestations of dorsal midbrain syndrome. The book states it as a rule, not an option.\n- **Why the light reflex goes first:** the **pretectal nuclei** sit in the dorsal midbrain, so the afferent limb is interrupted while the cortically driven near reflex is not *(the localisation is assembled from the book’s own light-reflex figure; it states no mechanism)*.\n\n*Light–near dissociation as a bedside phenomenon is `pup-4`; merged `pup-4` already names this syndrome and its `L22` features in one aside.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 p.180; L22 (Dorsal Mid Brain Syndrome)",
        "qs": []
      },
      {
        "id": "nrv-4",
        "w": "must",
        "h": "Horner syndrome — the disease, and why the MRI runs to the mid-thorax",
        "body": "**Definition:** dysfunction of the **SYMPATHETIC supply** to the eye and face.\n\n### The signs\n- **MIOSIS —** with **anisocoria MORE IN THE DARK**.\n- **PTOSIS and ANHIDROSIS** of the **ipsilateral face and neck**.\n- **ENOPHTHALMOS.**\n- **HETEROCHROMIA of the iris —** in **congenital** cases; whole iris colour difference, or **SECTORAL**.\n\n### Aetiology — the book prints four of these in red as LIFE-THREATENING\n\n|LIFE-THREATENING|The rest|\n|---|---|\n|**Apical lung tumour (PANCOAST)**|Neck, thoracic or **spinal trauma / surgery**|\n|**Thoracic AORTIC ANEURYSM**|**CERVICAL RIB**|\n|**CAROTID ARTERY DISSECTION**|**Demyelinating diseases**|\n|**Cavernous carotid aneurysm**|**Brain stem infarction**|\n\n### Investigations\n- **MRI —** from the **BASE OF THE BRAIN to the MID-THORACIC REGION**.\n- **CAROTID ANGIOGRAPHY —** in **acute and/or PAINFUL** cases.\n- **Many patients investigate normal:** that is **IDIOPATHIC Horner syndrome**, not a failed work-up.\n\n- **⚠️ Why the MRI runs that far —** the pathway is **THREE NEURONS long**, and only the book’s figure says so. **First order:** hypothalamus to the cervical cord.\n- **Second order:** cord to the **superior cervical ganglion**, past the **pleura, ascending aorta and subclavian artery** — which is why an apical lung tumour is on the list.\n- **Third order:** ganglion to the eye along the **INTERNAL CAROTID**, through the carotid canal and superior orbital fissure.\n- **⚠️ The branch tells the sign:** the nerve to the **dilator** fails as **miosis**, the nerve to **Muller (superior tarsal) muscle** as **ptosis**, the nerve to the **sweat gland** as **anhidrosis**.\n\n*The bedside rule — anisocoria worse in DIM light means the SMALL pupil is the abnormal one — is `pup-2`, with dilation lag. ⚠️ No pharmacological pupil test appears anywhere in this chapter; the book investigates Horner by imaging alone.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 pp.180–181; pup-2 (cited only)",
        "qs": []
      },
      {
        "id": "nrv-5",
        "w": "must",
        "h": "Argyll-Robertson pupils — accommodation present, light absent",
        "body": "**The disease behind it:** **TERTIARY SYPHILIS with MIDBRAIN AFFECTION** — the book highlights that line.\n\n### The picture\n- **BILATERAL**, and **may be asymmetric**.\n- **SMALL, IRREGULAR pupils.**\n- **LIGHT–NEAR DISSOCIATION.**\n\n### The mnemonic the book prints\n- **ARP — Accommodation Reflex PRESENT.**\n- **PRA — Pupillary Reflex ABSENT.**\n\n### Investigations\n- **Serologic testing for SYPHILIS.**\n- **MRI of the BRAINSTEM.**\n\n- **⚠️ `L22` adds three causes** the book omits — **diabetes mellitus · alcoholism · encephalitis** — and localises the lesion to the **PRETECTAL AREA**.\n- **⚠️ Against dorsal midbrain syndrome:** both give light–near dissociation. Argyll-Robertson pupils are **small and IRREGULAR**; dorsal midbrain adds **loss of upgaze and lid retraction** and is not described as small.\n- **⚠️ Spelling defect:** the chapter’s objectives flowchart prints **“Aryll Robertson” [sic]**; the body text on the next page prints **Argyll-Robertson**. A search on the correct spelling misses the objectives.\n\n*The book sends its own investigation line to “the pupillary examination section in chapter 1”. In this app that is `op-pupil`, written as `pup-1` to `pup-4`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 p.181; L22 (Argyll Robertson Pupil)",
        "qs": []
      },
      {
        "id": "nrv-6",
        "w": "must",
        "h": "The vocabulary of field loss — five terms, defined",
        "body": "**Why the terms come first:** the book defines five before it maps a single lesion, because every later answer is one of these words.\n\n|Term|The book’s definition|\n|---|---|\n|**SCOTOMA**|an area of **reduced or lost retinal sensitivity** surrounded by areas of **NORMAL** sensitivity|\n|**HEMIANOPIA**|loss of **HALF** the visual field — usually the **right or left half in BOTH eyes**|\n|**ALTITUDINAL hemianopia**|loss of the **SUPERIOR or INFERIOR half** of the visual field|\n|**HOMONYMOUS hemianopia**|loss of **either the right or the left half** of the field **in both eyes**|\n|**BITEMPORAL (heteronymous) hemianopia**|loss of the **TEMPORAL half** of the field **in both eyes**|\n\n- **⚠️ Homonymous against heteronymous —** *homonymous* means **the same side of SPACE in both eyes**; *heteronymous* means **opposite sides**. That one word decides whether the lesion is behind the chiasm or at it.\n- **⚠️ Altitudinal is the odd one out:** it splits the field **HORIZONTALLY**, not vertically — which is why it belongs to the **optic nerve HEAD** and not to the pathway (`onv-10`).\n- **QUADRANTANOPIA —** loss of one **QUARTER** of the field. The book uses the word only inside its two figures, and misprints it **“quadrantopia” [sic]** in both.\n- **The boundary tells the level:** a **VERTICAL** one is chiasmal or retrochiasmal, a **HORIZONTAL** one is nerve or retina *(the rule is not stated in the book)*.\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 p.195",
        "qs": []
      },
      {
        "id": "nrv-7",
        "w": "must",
        "h": "Lesion site to field defect — the whole map",
        "body": "**The map, and in the BOOK it is figure-only:** the prose names three defects; the numbered pathway figure names six and adds macular sparing. **`L22` prints the same series slide by slide**, so each row below says where it comes from.\n\n|Lesion site|Field defect|\n|---|---|\n|**Optic NERVE**|**MONOCULAR** loss — that eye only, with an **afferent pupillary defect** (book)|\n|**Optic CHIASM**|**BITEMPORAL hemianopia** — the crossing nasal fibres (book). **`L22` adds BINASAL hemianopia** as a second chiasmal pattern|\n|**Optic TRACT**|contralateral **homonymous hemianopia**, **INCONGRUOUS** (`L22`)|\n|**LATERAL GENICULATE BODY**|contralateral homonymous hemianopia, **incongruous** (`L22`)|\n|**Optic RADIATION — lower fibres, TEMPORAL lobe**|contralateral **SUPERIOR** homonymous quadrantanopia — **“pie in the sky”** (`L22`)|\n|**Optic RADIATION — upper fibres, PARIETAL lobe**|contralateral **INFERIOR** homonymous quadrantanopia — **“pie in the floor”** (`L22`)|\n|**OCCIPITAL CORTEX**|contralateral homonymous hemianopia, **CONGRUOUS, with MACULAR SPARING** (book figure and `L22`)|\n\n### Three rules that generate every row\n- **In FRONT of the chiasm —** one eye. **AT the chiasm —** both temporal fields. **BEHIND it —** the same side of space in both eyes.\n- **The side is CONTRALATERAL:** a **right** homonymous hemianopia means a **LEFT**-sided lesion. The book’s own legend says images of the right half of the field form on the left half of each retina and travel to the left hemisphere.\n- **⚠️ Congruity RISES as you go back:** tract and geniculate give **incongruous** defects, the occipital cortex a **congruous** one.\n\n### What the book’s prose adds\n- **Optic nerve lesions:** **central scotoma OR altitudinal hemianopia**, with an **afferent pupillary defect**.\n- **Chiasmal lesions:** bitemporal hemianopia from **PITUITARY ADENOMA, CRANIOPHARYNGIOMA or PARASELLAR MENINGIOMA**.\n- **Behind the chiasm:** **STROKE is the commonest cause** of homonymous hemianopia, followed by **trauma** and **mass lesions**.\n- **⚠️ Macular sparing:** LABELLED in the figure and **never explained** — the book gives no reason for it anywhere.\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 p.195, both figures; L22 (The Visual Pathway, slide by slide)",
        "qs": [
          "opqb-t1-32"
        ]
      },
      {
        "id": "nrv-8",
        "w": "must",
        "h": "What else a pathway lesion shows, and the false localizing sign",
        "body": "**A field defect is rarely the only finding:** the book closes the chapter with what the rest of the examination adds.\n\n- **PAPILLOEDEMA on fundus examination —** from **raised intracranial pressure** and the **mass effect** of the lesion (`onv-4`).\n- **Nerve palsies —** extraocular muscle paralysis, if the **3rd, 4th and/or 6th cranial nerves OR THEIR NUCLEI** are involved (`mot-2` to `mot-7`).\n\n- **⚠️ THE FALSE LOCALIZING SIGN —** the book boxes and highlights it: **sixth nerve affection can occur from raised intracranial pressure alone**. So a VI palsy does **NOT** localise the lesion to the sixth nerve.\n- **⚠️ What that changes:** bilateral disc swelling plus a VI palsy is **one pressure problem**, not two lesions — and it is the same pairing the book prints under pseudotumor cerebri (`onv-5`).\n\n*Field TESTING — confrontation, Amsler and perimetry, with the acuity threshold each needs — is `va-7`. This chapter teaches the defects and the localisation only.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 p.195",
        "qs": []
      }
    ]
  },

  "op-neuro-motil": {
    "intro": "The book’s Part II, and the course’s `L30`. Three nerves, one neuromuscular junction, one involuntary oscillation. Which muscle is weak, which way the head turns — and, for the third nerve, whether the pupil is in.",
    "sections": [
      {
        "id": "mot-1",
        "w": "must",
        "h": "How any cranial nerve palsy presents, and how it is treated",
        "body": "*⚠️ The book prints this whole block as “Intro from Tutorial” — its own marker for **study in round, skip in final**. Everything in this section carries that mark. Sections after it are core text unless a clause is tagged.*\n\n### Clinical presentation of a cranial nerve palsy\n- **MANIFEST STRABISMUS.**\n- **LIMITATION OF MOVEMENT —** in the **direction of action of the paralysed or paretic muscle**.\n- **VARIABILITY of the angle of deviation.**\n- **BINOCULAR DIPLOPIA —** increasing **in the field of action of the affected muscle**.\n- **ABNORMAL HEAD POSTURE.**\n\n### Treatment\n- **Directed to eliminate the CAUSE** — first, and before anything else.\n- **MONOCULAR OCCLUSION —** a **“temporary measurer” [sic]**, i.e. a temporary measure.\n- **PRISM —** prescribed **in glasses**.\n- **EYE ALIGNMENT SURGERY —** for patients with **LONG-STANDING, STABLE** ocular misalignment.\n\n- **⚠️ Why surgery waits for stability:** a deviation that is still changing will not match an operation aimed at today’s angle *(the book gives the condition, not the reason)*.\n\n*`L30) Squint II` teaches the same presentation as paralytic squint and adds what the book omits — a **secondary angle greater than the primary**, **crossed against uncrossed diplopia**, the three head postures as a system, **false orientation** with vertigo, nausea and uncertain gait, and the surgery itself (**after 6 months**; **resection–recession** for incomplete paralysis, **muscle transposition** for complete). That deck is `op-squint`’s; it is cited here and not counted.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 p.182 (whole block Tutorial); L30 (cited only, not counted)",
        "qs": []
      },
      {
        "id": "mot-2",
        "w": "must",
        "h": "Third nerve palsy — the picture, and what the nerve supplies",
        "body": "**The four features:** the first of them hides the second.\n\n- **PTOSIS —** and it **MASKS THE DIPLOPIA**: a covered eye cannot double.\n- **MYDRIASIS —** in **COMPRESSIVE** lesions, e.g. **aneurysm or tumour**.\n- **Loss of ELEVATION and ADDUCTION.**\n- **The eye is turned OUTWARD and DOWNWARD** — “down and out”.\n\n### What CN III supplies\n\n|Structure|What losing it produces|\n|---|---|\n|**Levator palpebrae superioris**|**PTOSIS** *(printed “superiosis” [sic])*|\n|**Sphincter pupillae**|**loss of pupil constriction**|\n|**Medial, superior and inferior recti, and inferior oblique**|the motility loss|\n\n- **⚠️ Why the eye sits down and out:** the only two muscles CN III does **NOT** supply are left unopposed — **lateral rectus (VI)** pulls it out, **superior oblique (IV)** pulls it down.\n- **The two ophthalmoplegias:** **EXTERNAL** = the extraocular muscles are out. **INTERNAL** = the pupil is out.\n- **BOTH TOGETHER = TOTAL OPHTHALMOPLEGIA**, which is the book’s label for the aneurysmal palsy (`mot-3`).\n\n*The full muscle–nerve–action grid and the six cardinal positions are `pup-7` and `pup-8`; they are not re-derived here.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 p.182",
        "qs": []
      },
      {
        "id": "mot-3",
        "w": "must",
        "h": "The pupil rule — the algorithm, the aetiology, and the anatomy behind it",
        "body": "**The most exam-shaped fact in the chapter**, and the book prints the rule itself only inside a figure.\n\n### The algorithm\n- **Isolated CN III palsy, PUPIL INVOLVED —** **TRAUMA · ANEURYSM · TUMOUR**.\n- **Isolated CN III palsy, PUPIL SPARED —** **VASCULOPATHY**.\n\n### Why — the blood supply of the nerve, and this is figure-only too\n- **PUPILLARY FIBRES LIE DORSAL AND PERIPHERAL** in the nerve.\n- **PIAL SURFACE VESSELS** supply the surface **including the pupillary fibres** — damaged by **COMPRESSIVE** lesions.\n- **VASA NERVORUM** supply part of the nerve but **NOT the pupillary fibres** — damaged by **MEDICAL** lesions.\n- **⚠️ So:** something **pressing from outside** takes the pupil first; something **infarcting from inside** spares it.\n\n### Aetiology, as the book lists it\n\n|Cause|What it produces|\n|---|---|\n|**Intracranial ANEURYSM**, especially of the **POSTERIOR COMMUNICATING artery**|**TOTAL ophthalmoplegia** — external and internal — and **usually PAINFUL**|\n|**MICROVASCULAR INFARCTION** in the nerve, as in **diabetes and hypertension**|**EXTERNAL ophthalmoplegia only**; the **pupil is usually SPARED**|\n|**Trauma**|—|\n|**Cerebral herniation**|—|\n|**Brain tumour**|—|\n\n### Investigations\n- **MRI and CEREBROVASCULAR IMAGING —** to exclude compression by a **posterior communicating artery aneurysm**.\n\n- **⚠️ The clinical bottom line:** a third nerve palsy **with a dilated pupil** is an aneurysm until imaged. Merged `acu-3` files exactly that combination as **LIFE-threatening**.\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 pp.182–183",
        "qs": []
      },
      {
        "id": "mot-4",
        "w": "must",
        "h": "Complete against pupil-sparing third nerve palsy",
        "body": "*⚠️ The book prints this whole table as “Collection From Tutorial” — **study in round, skip in final**. It is reproduced in full because it is the only place the two forms are set side by side.*\n\n|Axis|COMPLETE — pupil affected|PUPIL-SPARING|\n|---|---|---|\n|**Lid**|**Ptosis (LPS)**|**Ptosis** — **masks the diplopia**|\n|**Motility**|limited **except ABDUCTION** (lateral rectus) and **SLIGHT DEPRESSION** (superior oblique)|limited **except abduction and slight depression**|\n|**Pupil**|**DILATED and NON-REACTIVE**, and **ACCOMMODATION IS LOST**|**NORMAL reaction**|\n|**Anisocoria**|**more in LIGHT**|not present|\n|**Mechanism**|the parasympathetic fibres are out|**sparing of the parasympathetic fibres** to the intrinsic muscles, **OR affection of the UPPER DIVISION** of the nerve|\n\n- **⚠️ Anisocoria more in LIGHT:** the parasympathetic signature — the **LARGE** pupil is the abnormal one, because it cannot constrict (the rule is `pup-2`).\n- **⚠️ Accommodation goes with the pupil**, not with the eye movements: both are ciliary-ganglion traffic.\n- **The book’s own photograph set** shows a left third nerve palsy as **ptosis · exotropia · limited adduction · NORMAL abduction · limited elevation · NORMAL depression**. **The two normal panels are the two spared muscles**, LR and SO.\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 p.183 (whole table Tutorial)",
        "qs": []
      },
      {
        "id": "mot-5",
        "w": "must",
        "h": "Fourth nerve palsy — the head does the compensating",
        "body": "**The vertical palsy.** One muscle, and a head posture that is a diagnostic sign in itself.\n\n### Features\n- **HYPERTROPIA —** in the primary position, and **increasing IN ADDUCTION** *(the book’s reason, “due to inferior oblique overaction”, is marked Tutorial)*.\n- **WEAK DEPRESSION** of the affected eye, **especially in ADDUCTION**.\n- **VERTICAL DIPLOPIA**, increasing **in DOWNGAZE**.\n- **Abnormal head position —** **CHIN DEPRESSION**, plus **face turn and head tilt to the OPPOSITE (normal) side** to minimise diplopia.\n\n### The muscle, in the book’s own box\n- **Function of SO4:** **abduction · internal rotation · depression**.\n- **⚠️ That box is CORRECT, not a misprint.** The superior oblique really does **intort (internal rotation), depress and abduct**. It depresses **best in ADDUCTION** — a different statement, and the one merged `pup-7` carries.\n\n### Aetiology\n- **MICROVASCULAR INFARCTION** in the nerve — **diabetes, hypertension**.\n- **TRAUMA —** and it can produce a **BILATERAL** fourth nerve palsy.\n- **COMPRESSIVE lesions**, e.g. intracranial tumour.\n- **CONGENITAL —** rare.\n\n- **⚠️ The head tilt is the sign to memorise: tilt AWAY from the palsy.** Tilting toward the weak side demands intorsion from the eye, which is exactly what the superior oblique can no longer do *(the reason is not in the book)*.\n- **⚠️ Why trauma is the bilateral cause:** the two trochlear nerves decussate and leave the brainstem dorsally together, so one blow can take both *(anatomy not in the book)*.\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 p.183",
        "qs": []
      },
      {
        "id": "mot-6",
        "w": "must",
        "h": "Sixth nerve palsy — and the head turns TOWARD the lesion",
        "body": "**The horizontal palsy**, and the book gives it more numbers than any other page in the chapter.\n\n### Features\n- **ESOTROPIA** in the primary position *(the book attributes it to “overaction of the **Middle Rectus** [sic]” — read as the **MEDIAL rectus** — and marks that clause Tutorial)*.\n- **LOSS OF ABDUCTION** of the affected eye.\n- **HORIZONTAL DIPLOPIA**, increasing **in IPSILATERAL gaze**.\n- **Abnormal head position —** **face turn to the SAME side as the lesion**.\n- **Function of LR6:** **abduction**, and nothing else.\n\n### Aetiology, with the book’s figures\n\n|Cause|The figure printed with it|\n|---|---|\n|**COMPRESSIVE lesion**, e.g. intracranial tumour|**20 % of cases**, especially **adults YOUNGER THAN 45**|\n|**MICROVASCULAR INFARCTION** — diabetes, hypertension|**the commonest cause ABOVE 55**; spontaneous recovery usually in **3–4 MONTHS**|\n|**RAISED INTRACRANIAL PRESSURE** — **pseudotumor cerebri** or hydrocephalus|can produce a **BILATERAL** VI palsy|\n|**TRAUMA**|**the commonest cause IN CHILDREN**|\n|**Other causes in children**|**inflammation of the PETROUS temporal bone** in severe otitis media · **post-viral** infection|\n\n### Investigations\n- **MRI or CT of the brain —** especially in **children and young adults**.\n- **Systemic assessment: blood sugar · GLYCOSYLATED HAEMOGLOBIN · full lipid profile · blood pressure.**\n\n- **⚠️ The two head postures, told apart:** **IV turns and tilts the head AWAY** from the lesion; **VI turns it TOWARD** it. In both, the head moves so that **the eyes do not have to enter the paralysed muscle’s field**.\n- **⚠️ A VI palsy does not localise itself** — raised intracranial pressure alone produces one (`nrv-8`).\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 p.184",
        "qs": []
      },
      {
        "id": "mot-7",
        "w": "must",
        "h": "The three palsies side by side",
        "body": "**One grid:** assembled from three separate pages — the book teaches the palsies in sequence and never compares them.\n\n|Axis|THIRD (III)|FOURTH (IV)|SIXTH (VI)|\n|---|---|---|---|\n|**Muscles lost**|MR, SR, IR, IO **plus LPS and sphincter**|**superior oblique**|**lateral rectus**|\n|**Primary deviation**|**down and out**|**HYPERTROPIA**|**ESOTROPIA**|\n|**Limitation**|**elevation and ADDUCTION**|**depression in ADDUCTION**|**ABDUCTION**|\n|**Diplopia**|often **masked by ptosis**|**vertical**, worse **in downgaze**|**horizontal**, worse **in ipsilateral gaze**|\n|**Head posture**|not described|**chin down**, turn and tilt to the **OPPOSITE** side|**face turn to the SAME side**|\n|**Pupil**|**the whole question** — `mot-3`|normal|normal|\n|**Bilateral form**|not described|**TRAUMA**|**RAISED ICP**|\n|**Shared cause**|**microvascular** — diabetes, hypertension|**microvascular**|**microvascular**|\n\n- **⚠️ Microvascular infarction —** it causes all three, **spares the pupil**, **recovers spontaneously**, and needs **blood sugar and blood pressure** rather than a scan.\n- **⚠️ A palsy that is NOT isolated** — with a pupil, with pain, or with another nerve — is **compressive until imaged**.\n- **⚠️ And one entity mimics all three:** myasthenia gravis, which is why the pupil line in `mot-8` matters.\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 pp.182–184, assembled from the three accounts",
        "qs": []
      },
      {
        "id": "mot-8",
        "w": "must",
        "h": "Myasthenia gravis — the core text, and the one sentence in capitals",
        "body": "**Definition:** a **chronic AUTOIMMUNE** condition that interferes with **neuromuscular transmission in SKELETAL MUSCLES** — the book highlights the last two words.\n\n- **Epidemiology:** it can affect **any age and any gender**.\n\n### Clinical picture — the book’s five points\n- **PTOSIS AND DOUBLE VISION —** the presenting signs in **HALF of patients**.\n- **It may simulate ANY other palsy —** third, fourth or sixth, paresis or paralysis.\n- **⚠️ THE PUPIL IS NEVER AFFECTED IN MG** — printed in capitals and highlighted.\n- **Weakness of other skeletal muscles**, giving **FATIGUE WITH SUSTAINED EFFORT**.\n- **Suspect it** in any patient with **unexplained ptosis or ocular movement problems**.\n\n- **⚠️ Why the pupil line matters:** it is the whole differential — the pupil is **SMOOTH** muscle, and myasthenia a disease of the **SKELETAL** junction.\n- **A palsy that mimics CN III —** but leaves the pupil alone **may be myasthenia**; one with a **dilated pupil cannot be**.\n- **⚠️ It mimics all three nerves:** so a motility pattern fitting no single nerve raises it (`mot-7`).\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 p.185",
        "qs": []
      },
      {
        "id": "mot-9",
        "w": "must",
        "h": "Myasthenia in detail — the Tutorial box, and what the lecture adds",
        "body": "*⚠️ The book labels this whole box **“From tutorial (not in the book)”** — study in round, skip in final. **The ENTIRE investigation and treatment of myasthenia sits inside it**, so the core text prescribes nothing.*\n\n- **The demographic:** more common in **WOMEN UNDER 40** and **MEN OVER 60**.\n- **The most important feature is FATIGABILITY:** weakness **worsens as the muscle is used** and **improves with rest**, so it comes and goes.\n- **The course:** symptoms **progress over time**, usually reaching their worst **within a few years** of onset.\n- **Skeletal only —** **not cardiac, not involuntary muscle**.\n\n### Ptosis, as the box describes it\n- **The pattern:** **INSIDIOUS, BILATERAL and frequently ASYMMETRICAL**.\n- **WORSE AT THE END OF THE DAY**, least **on awakening**.\n- **Worse on PROLONGED UPGAZE**, from fatigue.\n- **POSITIVE ICE TEST:** an ice pack on the lid for **2 MINUTES** improves the ptosis, because **cold improves neuromuscular transmission**. **Negative in non-myasthenic ptosis.**\n\n### Diplopia and motility\n- **Horizontal or vertical**, and it can mimic **any PUPIL-SPARING motility deficit**.\n- **BIZARRE defects of ocular motility** occur — consider myasthenia in **any pattern that fits no recognised one**.\n\n### The rest of the body\n- **MYOPATHIC FACIES —** **lack of facial expression** plus ptosis.\n- **DYSPHAGIA · DYSARTHRIA · difficulty chewing.**\n- **⚠️ DIFFICULTY BREATHING —** rare, but **serious**.\n- **Weakness —** of the **ARMS and the PROXIMAL LEG muscles**.\n\n### Investigation and treatment\n- **Three tests:** **EDROPHONIUM · ACETYLCHOLINE RECEPTOR ANTIBODY levels · EMG**.\n- **There is NO CURE:** treatment relieves signs and symptoms — **anticholinesterase drugs, steroids, immunosuppressives**.\n- **⚠️ `L30` adds one investigation —** the book omits it entirely: **CHEST CT or X-RAY for an ENLARGED THYMUS**.\n- **`L30` also names —** the **Tensilon test** (the trade name of edrophonium) and the **ice pack test**, and calls the motility loss **“any pattern”**.\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 p.185 (whole box Tutorial); L30 (Myasthenia Gravis — cited only, not counted)",
        "qs": []
      },
      {
        "id": "mot-10",
        "w": "must",
        "h": "Nystagmus — the three benign forms, and the one word that separates them from disease",
        "body": "**Definition:** **involuntary, RHYTHMIC, TO-AND-FRO OSCILLATIONS** of one or both eyes. **⚠️ No Tutorial marker appears anywhere on this page — the whole of nystagmus is core text.**\n\n- **Direction:** **HORIZONTAL · VERTICAL · ROTARY (torsional)**, or a combination.\n\n### The three benign forms — none indicates CNS dysfunction\n\n|Form|What defines it|\n|---|---|\n|**END-GAZE**|occurs when the patient is **attempting to hold the eyes in EXTREMES of lateral gaze**|\n|**DRUG-INDUCED**|**ANTIEPILEPTICS, BARBITURATES and other SEDATIVES**; here nystagmus may be present **in ALL positions of gaze**|\n|**CONGENITAL**|**PENDULAR or JERK**; found **at birth or in the FIRST 6 MONTHS**; **SUBNORMAL VISION**, and **NO complaint of oscillopsia**|\n\n### Acquired nystagmus\n- **It typically causes:** **OSCILLOPSIA and/or VERTIGO**, and may indicate **VESTIBULAR, CEREBELLAR or BRAINSTEM** dysfunction.\n- **Causes:** **vestibular disease · trauma · MULTIPLE SCLEROSIS · brain tumours · degeneration of the central nervous system**.\n\n### Investigations\n- **FULL NEUROLOGIC EVALUATION INCLUDING MRI — for ALL patients with ACQUIRED nystagmus.**\n- **Pathologic forms:** usually seen **in the PRIMARY POSITION of gaze**.\n\n- **⚠️ The discriminator is OSCILLOPSIA:** congenital nystagmus does **not** cause it; acquired nystagmus does. **A patient whose world appears to shake has acquired disease and needs the MRI.**\n- **⚠️ Position is the second discriminator:** end-gaze nystagmus lives only at the extremes, while drug-induced and pathologic forms appear **in primary gaze**.\n- **⚠️ Poor vision, no complaint:** congenital nystagmus gives both — the visual system never knew a still world, so nothing looks wrong to the patient.\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 p.186; L30 (Nystagmus — End Gaze, Congenital, Drug induced, Acquired; cited only, not counted)",
        "qs": []
      }
    ]
  },

  "op-neuro-optic": {
    "intro": "The book’s Part III, and its largest. Five numbered topics: the swollen disc, optic neuritis, chronic retrobulbar neuritis, ischaemic optic neuropathy, and optic atrophy. Two comparison tables carry most of the marks.",
    "sections": [
      {
        "id": "onv-1",
        "w": "must",
        "h": "The optic nerve and its disc — what the chapter rests on",
        "body": "**The nerve, in one line:** the **AXONS OF THE RETINAL GANGLION CELLS**, converging and passing through the **LAMINA CRIBROSA of the sclera**.\n\n- **The optic disc:** the **START of the optic nerve** — which is why fundus examination can reveal neurological disease, **sometimes even before neuroimaging**.\n- **Onset:** optic nerve disease can be **slow and insidious OR acute**.\n- **Optic nerve ATROPHY —** due to **CHRONIC optic nerve damage** (`onv-13`).\n\n### The causes, as the book groups them\n- **Eight groups:** **CONGENITAL · INFLAMMATORY · AUTOIMMUNE (demyelinating) · NEOPLASTIC · VASCULAR · NUTRITIONAL · TOXIC · IDIOPATHIC**.\n\n- **⚠️ What the chapter’s opening figure adds:** the **central retinal ARTERY and VEIN run INSIDE the nerve**, with **PIAL VESSELS** on its surface. It is the only place the book draws the intraneural course — and it is the anatomy behind both the pupil rule (`mot-3`) and ischaemic optic neuropathy (`onv-10`).\n\n*⚠️ Compressive optic neuropathy as an entity, optic nerve glioma and optic nerve sheath meningioma are ABSENT from this chapter; it names “compression by intracranial or orbital tumours” only as a cause of primary optic atrophy. All three are written in `orb-16` as orbital masses.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 pp.178, 187",
        "qs": []
      },
      {
        "id": "onv-2",
        "w": "must",
        "h": "Signs of optic nerve dysfunction, and the field defect each disease gives",
        "body": "*⚠️ The book prints this as **“Intro From Tutorial”** — study in round, skip in final. It is written in full anyway, because it is the checklist every later section is scored against.*\n\n### The four signs\n- **Reduced VISUAL ACUITY.**\n- **RELATIVE AFFERENT PUPILLARY DEFECT.**\n- **Impairment of COLOUR VISION.**\n- **VISUAL FIELD DEFECTS.**\n\n### The field defects, each tied to its disease\n\n|Field defect|The disease named beside it|\n|---|---|\n|**CENTRAL scotoma**|optic neuritis / papillitis|\n|**ALTITUDINAL** defect|**AION**|\n|**CENTROCAECAL** scotoma|**TOBACCO–ALCOHOL AMBLYOPIA**|\n|**ARCUATE** scotoma|**nerve fibre bundle defect in GLAUCOMA**|\n\n- **`L21` adds a FIFTH sign** the book omits: **CONTRAST SENSITIVITY**.\n- **⚠️ Colour and contrast fail EARLY**, often before the acuity chart moves — so comparing **red desaturation** between the two eyes beats a Snellen line here *(the method is not in the book)*.\n- **⚠️ The table is the chapter’s map:** four defects, four diseases. **The SHAPE of the field names the lesion.**\n\n*The swinging flashlight test itself — how an RAPD is elicited and read — is `pup-4`. The book draws it here and describes it in prose nowhere.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 p.187 (whole box Tutorial); L21 (cited only)",
        "qs": []
      },
      {
        "id": "onv-3",
        "w": "must",
        "h": "Optic disc swelling — the ophthalmoscopic definition",
        "body": "**Five signs:** the same whatever the cause.\n\n- **INDISTINCT DISC MARGINS.**\n- **ELEVATION of the optic disc.**\n- **VASCULAR TORTUOSITY.**\n- **ABSENCE OF A CENTRAL CUP —** the cup is **obliterated**.\n- **CAPILLARY HYPERAEMIA AND HAEMORRHAGES** on or around the disc.\n\n- **⚠️ The last one is the only ACTIVITY sign:** the book says hyperaemia and haemorrhage are **signs of ACTIVE disc oedema**. Their absence does not exclude swelling; their presence says it is live.\n- **⚠️ The obliterated cup:** the structural check — a disc with a normal, visible cup is unlikely to be genuinely swollen.\n- **`L21` groups THREE causes —** **PAPILLOEDEMA · PAPILLITIS · AION** — and teaches **glaucoma** beside them as the fourth disc.\n\n*⚠️ Optic disc drusen and pseudopapilloedema — the commonest thing mistaken for a swollen disc — are absent from this chapter and from the module. Not supplied: no question tests them.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 p.187; L21 (Optic Disc Edema)",
        "qs": []
      },
      {
        "id": "onv-4",
        "w": "must",
        "h": "Papilloedema — the established picture, the early one, and the timeline",
        "body": "**Definition:** swelling of the optic disc **SECONDARY TO INCREASED INTRACRANIAL PRESSURE**. **Typically BILATERAL.**\n\n### Fully established papilloedema — the book’s six\n- **HYPERAEMIA of the disc.**\n- **TORTUOSITY of the veins and capillaries** *(its gloss “venous congestion” is Tutorial-marked)*.\n- **BLURRING AND ELEVATION of the disc margins.**\n- **OBSCURATION of the retinal vessels** near the nerve head.\n- **HAEMORRHAGE on and surrounding** the nerve head.\n- **Field: ENLARGEMENT OF THE BLIND SPOT.**\n\n*⚠️ Two further signs sit in a dashed box the book marks “(Tutorial)”: **pupils normal in size and reflexes**, and **± SIXTH NERVE PALSY**.*\n\n### Early papilloedema — the book’s N.B, and this part is core text\n- **It may not be obvious:** only **mild elevation of the margins**, **mild hyperaemia**, and **loss of previously present SPONTANEOUS VENOUS PULSATION**.\n- **Vision is NOT affected early**, but **transient visual obscuration** or transient blurring may occur.\n- **Systemic symptoms:** **headache, nausea and PROJECTILE vomiting**, and/or **double vision**.\n- **⚠️ CHRONIC papilloedema:** **PERMANENT optic nerve damage and BLINDNESS** if untreated.\n\n*⚠️ The visual timeline, in its own dashed Tutorial box: **early — no visual symptoms · later — transient visual loss for a few seconds · latest — significant visual loss (optic atrophy)**.*\n\n### Aetiology\n- **Five causes:** **BRAIN TUMOURS and space-occupying lesions · cerebral TRAUMA or HAEMORRHAGE · MENINGITIS or ENCEPHALITIS · DURAL SINUS THROMBOSIS · IDIOPATHIC INTRACRANIAL HYPERTENSION** (`onv-5`).\n\n### Investigations\n- **IMMEDIATE MRI or CT** in any patient with suspected papilloedema.\n- **LUMBAR PUNCTURE —** to evaluate the **CSF and ITS PRESSURE**.\n\n- **⚠️ Order matters, and the book states none:** image first, tap second. A lumbar puncture into an unimaged mass is what that sequence prevents *(not in the book)*.\n- **⚠️ Normal vision does not reassure.** `L1,2` files papilloedema as **LIFE-threatening** (`acu-3`) because the eye is a signpost for the brain.\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 p.188; L1,2 (cited only)",
        "qs": []
      },
      {
        "id": "onv-5",
        "w": "must",
        "h": "Pseudotumor cerebri — raised pressure with nothing to find",
        "body": "**Definition:** **increased fluid pressure around the brain IN THE ABSENCE** of a brain tumour, thrombosis, or other CSF abnormality.\n\n- **Most common:** **WOMEN AGED 20–40** with a history of **RECENT WEIGHT GAIN**.\n\n### Symptoms\n- **The classic three:** **HEADACHE · TRANSIENT BLURRING of vision · PULSATILE TINNITUS**.\n- **And with them:** **HORIZONTAL DOUBLE VISION · neck stiffness · vision loss · pain with eye movement**.\n\n### Signs\n- **On the disc:** **PAPILLOEDEMA, with or without a SIXTH NERVE PALSY**.\n\n### Treatment — the book’s three, in its order\n- **Decrease the intracranial pressure:** **CARBONIC ANHYDRASE INHIBITORS**, or **CSF SHUNTING** — **lumboperitoneal or ventriculoperitoneal**.\n- **WEIGHT LOSS.**\n- **OPTIC NERVE SHEATH FENESTRATION —** surgical incision of the sheath around the nerve to relieve pressure on it. It **may reduce the papilloedema and the risk of BLINDNESS, the most feared complication**.\n\n- **⚠️ Where the horizontal diplopia comes from:** the VI palsy of raised pressure — the **false localizing sign** of `nrv-8`, not a second lesion.\n- **⚠️ The name is the diagnosis by EXCLUSION:** it is what remains after imaging finds no tumour and no thrombosis, which is why `onv-4`’s MRI and lumbar puncture come first.\n- **⚠️ Treated to save the EYE:** fenestration does nothing for the headache; it protects the nerve.\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 p.189",
        "qs": []
      },
      {
        "id": "onv-6",
        "w": "must",
        "h": "Papillitis, and papilloedema against papillitis",
        "body": "**Definition:** **inflammatory OEDEMA of the disc** — optic neuritis at the disc itself. **Its aetiology is the same as optic neuritis** (`onv-7`).\n\n### What papillitis has that papilloedema has not\n- **ACUTE onset, usually UNILATERAL.**\n- **DECREASED VISUAL ACUITY.**\n- **IMPAIRED COLOUR VISION.**\n- **Visual field defect —** usually **CENTRAL**.\n- **RELATIVE AFFERENT PUPILLARY DEFECT.**\n- **Disc oedema is MILDER than in papilloedema.**\n\n### The comparison table — the chapter’s highest-yield object, and NOT Tutorial-marked\n\n|Axis|PAPILLOEDEMA|PAPILLITIS|\n|---|---|---|\n|**Laterality**|**BILATERAL**|**UNILATERAL**|\n|**Symptoms**|acuity **usually NORMAL**; **transient attacks of blurred vision**; **plus raised-ICP symptoms — headache and vomiting**|**MARKED VISUAL DETERIORATION**|\n|**Pupils**|**NORMAL**|**RAPD**|\n|**Colour vision**|**NORMAL**|**DEFECTIVE**|\n|**Disc swelling and elevation**|**MORE**|**LESS**|\n|**Disc hyperaemia**|**LESS**|**MORE**|\n|**Field**|**ENLARGED BLIND SPOT**|**CENTRAL SCOTOMA**|\n\n- **⚠️ The two fundus rows INVERT:** papilloedema **swells more and reddens less**; papillitis **reddens more and swells less**. That pair is the commonest table row to get backwards.\n- **⚠️ The most useful single row is VISION:** a swollen disc with **normal acuity** is a pressure problem until imaging says otherwise.\n- **⚠️ The pupil row is often misread:** papilloedema gives no RAPD **because it is symmetrical**, not because the nerves are healthy.\n\n*Merged `acu-9` carries a three-way version of this comparison including AION, written from outside knowledge and tagged. **This table is the book’s own** and supersedes the two columns they share; the AION column is sourced in `onv-12`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 p.189",
        "qs": []
      },
      {
        "id": "onv-7",
        "w": "must",
        "h": "Optic neuritis — the classification, retrobulbar neuritis, and the 50 % rule",
        "body": "**Definition:** **INFLAMMATION AND DEMYELINATION of the optic nerve.**\n\n- **Epidemiology: most common in WOMEN AGED 15–45.**\n- **⚠️ ALL optic neuritis:** must be **evaluated by an ophthalmologist** — the book boxes that sentence on its own.\n\n### Classification — three forms\n- **PAPILLITIS —** the disc is swollen (`onv-6`).\n- **RETROBULBAR NEURITIS —** the **optic disc is NORMAL**.\n- **NEURORETINITIS** *(the only one of the three the book marks Tutorial)*.\n\n### Retrobulbar neuritis — symptoms\n- **ACUTE or SUBACUTE VISION LOSS.**\n- **PERIOCULAR PAIN —** aggravated by **EYE MOVEMENT**, from **traction of the extraocular muscles on the INFLAMED MENINGES** covering the nerve.\n\n### Retrobulbar neuritis — signs\n- **The optic disc may appear COMPLETELY NORMAL.**\n- **AFFERENT PUPILLARY DEFECT.**\n- **And also:** **decreased visual acuity · impaired colour vision · visual field defects**.\n\n### Aetiology\n- **MULTIPLE SCLEROSIS — the commonest cause**, demyelinating. **50 % of patients presenting with ISOLATED optic neuritis ultimately develop MS**, which is **characterised by remissions and relapses**. **All patients should have an MRI WITH AND WITHOUT CONTRAST.**\n- **IDIOPATHIC.**\n- **POST-VIRAL INFECTIONS** *(the gloss “para-infectious: following viral infection and immunization” is Tutorial)*.\n- **SYSTEMIC CONDITIONS —** **syphilis, sarcoidosis, collagen vascular disease, HIV** *(plus **SLE and polyarteritis nodosa**, Tutorial)*.\n- **INFECTIOUS —** sinus-related, syphilis, Lyme, cryptococcal meningitis, herpes zoster *(the whole bullet is Tutorial-marked)*.\n\n- **⚠️ The classic line:** in retrobulbar neuritis **the patient sees nothing and the doctor sees nothing** — a normal disc with a definite RAPD *(the aphorism is not in the book)*.\n- **⚠️ The 50 % figure is WHY the MRI is ordered** — not to diagnose the eye, but to stage the brain.\n\n*Syphilitic papillitis and its intravenous regimen are `sys-11`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 p.190",
        "qs": []
      },
      {
        "id": "onv-8",
        "w": "must",
        "h": "Chronic retrobulbar neuritis — the bilateral, nutritional one",
        "body": "**Also called:** **NUTRITIONAL or TOXIC OPTIC NEUROPATHY**, and it is **USUALLY BILATERAL** — which is what separates it from every other optic neuritis in this chapter.\n\n### Aetiology\n- **VITAMIN B12 DEFICIENCY —** with **poor diet**, **peripheral neuropathy**, **decreased colour vision**, and a field defect **involving central vision AND the blind spot**, i.e. **CENTROCAECAL**.\n- **TOBACCO–ALCOHOL AMBLYOPIA.**\n- **DRUGS —** e.g. **ETHAMBUTOL, CHLORAMPHENICOL**.\n\n- **⚠️ The pattern that names it: BILATERAL, PAINLESS, GRADUAL, CENTROCAECAL, with COLOUR LOSS.** That is the opposite of the acute, unilateral, painful optic neuritis above.\n- **The centrocaecal field defect** is the one the chapter’s own field-defect table pairs with tobacco–alcohol amblyopia (`onv-2`).\n- **⚠️ The one REVERSIBLE cause here:** stop the drug, or replace the vitamin. *The book prescribes nothing for it (treatment not in the book)*.\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 p.190",
        "qs": []
      },
      {
        "id": "onv-9",
        "w": "must",
        "h": "Demyelinating optic neuritis in detail, and the chapter’s only drug regimen",
        "body": "*⚠️⚠️ The book labels this whole box **“Demyelinating optic neuritis .. in more details (From Tutorial .. not in the book)”** — study in round, skip in final. **The chapter’s ONLY dosed drug regimen is inside it**, which means the core text prescribes nothing at all for optic neuritis.*\n\n- **Mainly MS, but “may isolated” [sic]** — may be isolated.\n- **Common in FEMALES.** **Age 20–40, mean around 30.**\n- **It presents as RETROBULBAR neuritis.**\n\n### Symptoms\n- **SUBACUTE MONOCULAR visual impairment.**\n- **The field and the colour:** **visual field defect · abnormal colour vision**.\n- **The pain:** **PAIN WITH EYE MOVEMENT · FRONTAL HEADACHE AND TENDERNESS**.\n\n### Signs\n- **The triad:** **decreased visual acuity · impaired colour vision · RAPD**.\n- **OPTIC DISC IS NORMAL —** retrobulbar.\n- **Field:** usually **CENTRAL SCOTOMA**, but may be **CENTROCAECAL, ALTITUDINAL or ARCUATE**.\n\n### Investigation and treatment\n- **MRI —** looking for **PLAQUES OF DEMYELINATION**.\n- **IV METHYLPREDNISOLONE 1 g DAILY FOR 3 DAYS.**\n- **Then:** **ORAL PREDNISOLONE 1 mg/kg DAILY FOR 11 DAYS**.\n- **Then TAPERED OVER 3 DAYS.**\n\n- **⚠️ Hold the regimen as 3 + 11 + 3:** intravenous first, oral second, taper third. **The intravenous phase comes first and is not a formality** *(the book gives no rationale)*.\n- **⚠️ The field list is WIDER than the rule:** central scotoma is typical, but this box explicitly allows **altitudinal and arcuate** patterns — so a non-central field does not exclude optic neuritis.\n\n*Merged `acu-6` supplies the same regimen from outside knowledge and tags it. **This box is the sourced version**, and it carries the two durations the tagged one lacks.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 p.191 (whole box Tutorial)",
        "qs": []
      },
      {
        "id": "onv-10",
        "w": "must",
        "h": "Non-arteritic ischaemic optic neuropathy — the eye that wakes up blind",
        "body": "**The lesion:** **TRANSIENT HYPOPERFUSION of the POSTERIOR CILIARY ARTERIES** supplying the **OPTIC NERVE HEAD** *(the book’s gloss “usually vascular: embolic or thrombotic” is Tutorial-marked)*.\n\n- **It is the COMMONEST form** of ischaemic optic neuropathy.\n\n### Who gets it\n- **Any age, but typically patients OVER 40** with **atherosclerotic risk factors**.\n- **The risk factors, as listed:** **HYPERTENSION · DIABETES · HYPERLIPIDAEMIA · SMOKING · SLEEP APNOEA · OBESITY**.\n- **Timing:** many occur during periods of **NOCTURNAL HYPOTENSION**.\n\n### Clinical picture\n- **UNILATERAL vision loss —** **FIRST NOTICED UPON WAKING**.\n- **ALTITUDINAL FIELD LOSS —** the **upper OR the lower half** of that eye’s field.\n- **And also:** **decreased visual acuity · AFFERENT PUPILLARY DEFECT**.\n- **MILD DISC OEDEMA AND PALLOR** *(± splinter haemorrhages — Tutorial)*.\n- **⚠️ Nothing else:** **NO other clinical manifestations and NO neurologic symptoms in NAION**. That absence is the point.\n\n### Treatment and prognosis\n- **There are NO PROVEN TREATMENTS.**\n- **Treat the atherosclerotic risk factors**, and **AVOID EXCESSIVE LOWERING OF BLOOD PRESSURE**.\n- **⚠️ Over 50, always:** **EVERY suspected NAION gets an ESR AND a CRP** — to exclude **giant cell (temporal) arteritis**.\n- **Prognosis: LITTLE OR NO visual recovery is expected.**\n\n- **⚠️ Why it is noticed on waking:** perfusion pressure at the nerve head is lowest during sleep, which is also why the blood pressure must not be over-treated at night *(the link is not made in the book; the two facts are printed on the same page)*. Merged `sys-5` carries the same warning from the hypertension side.\n- **⚠️ BOOK DEFECT, age:** this page says **“over 40”**; the comparison table on the next page says **“majority > 50”**. Both are recorded as printed, and **the > 50 figure is the one the ESR rule is attached to** (`onv-12`).\n\n*`sys-5` and `vsc-11` name AION only as an ocular association of hypertension. Merged `acu-7`’s arteritic-versus-non-arteritic table was written from outside knowledge and tagged; this section and `onv-12` are the sourced replacement.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 pp.191–192",
        "qs": []
      },
      {
        "id": "onv-11",
        "w": "must",
        "h": "Arteritic AION and giant cell arteritis — the fellow eye is the emergency",
        "body": "**The core text is two sentences:** arteritic AION is **LESS COMMON than NAION** and is **CAUSED BY GIANT CELL ARTERITIS** — and the book then **delegates GCA itself to its own chapter on Ocular Manifestations of Systemic Conditions and Diseases**.\n\n*⚠️ Everything below sits in a box labelled **“…in more details (From Tutorial)”** — study in round, skip in final. It is written in full because it is the only account of GCA anywhere in this chapter.*\n\n### Symptoms — elderly patients, **above 60 years**\n- **ACUTE, PROFOUND, UNILATERAL VISUAL LOSS**, with **PAIN in the ipsilateral TEMPORAL region**.\n- **AMAUROSIS FUGAX MAY PRECEDE** infarction of the optic nerve head.\n- **Four more:** **SCALP TENDERNESS · HEADACHE · JAW CLAUDICATION · PROXIMAL MYALGIA**.\n- **Non-specific symptoms are common:** **weight loss, fever, night sweats, malaise, depression**.\n\n### Signs\n- **PALE (“CHALKY WHITE”) AND SWOLLEN DISC.**\n- **AFFERENT PUPILLARY DEFECT.**\n- **Superficial temporal arteritis:** the artery is **THICKENED, TENDER, INFLAMED**, **NON-PULSATILE**, and **NODULAR — it cannot be flattened against the skull**.\n- **⚠️ The other eye:** it **CAN BECOME INVOLVED WITHIN DAYS**.\n\n### Management — the book prints the heading as URGENT\n- **ESR IS VERY HIGH — a level > 60 mm/hr.**\n- **CRP HIGHLY ELEVATED.**\n- **TEMPORAL ARTERY BIOPSY —** to **confirm the diagnosis**.\n- **Treatment: HIGH DOSE OF SYSTEMIC STEROID.** **No dose is printed anywhere.**\n\n- **⚠️ What the treatment is FOR:** the affected eye rarely recovers. **Steroid protects the FELLOW eye**, which is otherwise lost within days.\n- **⚠️ The histopathology is figure-only:** **GIANT CELLS and LYMPHOCYTES** destroying the **INTERNAL ELASTIC LAMINA**, with the lumen reduced to a remnant. The prose never describes the pathology.\n\n*⚠️ Merged `acu-8` writes giant cell arteritis from outside knowledge and tags it. **Where the two differ, the book is the sourced figure:** the book prints **ESR > 60 mm/hr** against `acu-8`’s “often above 50”, and gives **no biopsy specimen length**, no steroid dose and no ACR criteria. The book’s own full account is in its **chapter 19**, which has not been read.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 pp.192–193 (the detail box is Tutorial)",
        "qs": []
      },
      {
        "id": "onv-12",
        "w": "must",
        "h": "Non-arteritic against arteritic — the table, and the book’s own contradiction",
        "body": "**The second comparison table:** this one is core text too.\n\n|Axis|NON-ARTERITIC|ARTERITIC|\n|---|---|---|\n|**Age**|**majority > 50 years**|**majority > 60 years**|\n|**Local symptoms**|**ACUTE UNIOCULAR PAINLESS visual loss**; **other eye NOT commonly affected**|**SUDDEN SEVERE unilateral loss PLUS PERIOCULAR PAIN**; **other eye usually affected within a few days**|\n|**Systemic symptoms**|**NO**|**severe headache · superficial temporal arteritis · scalp tenderness · jaw claudication · proximal myalgia**|\n|**Visual acuity**|**MODERATE to SEVERE** reduction|**SEVERELY reduced — HM or PL**|\n|**Fundus**|**SWOLLEN AND PALE optic disc**|**swollen and pale disc, CHALKY WHITE**|\n|**Investigations**|**[the book prints this cell BLANK]**|**increased ESR and CRP · TEMPORAL ARTERY BIOPSY**|\n|**Treatment**|**NO definitive treatment**|**SYSTEMIC STEROIDS**|\n\n### The three rows that actually decide it\n- **SYSTEMIC SYMPTOMS —** present in arteritic, absent in non-arteritic. **Ask about jaw claudication.**\n- **PAIN —** non-arteritic is **painless**; arteritic hurts.\n- **THE FELLOW EYE —** at risk **within days** in arteritic, which is what makes it an emergency.\n\n- **⚠️⚠️ BOOK DEFECT —** a real internal contradiction: the **Investigations cell for non-arteritic is printed BLANK**, yet the previous page orders **an ESR and a CRP in every suspected NAION over 50** to exclude giant cell arteritis.\n- **⚠️ Recorded as printed:** but **follow the previous page in practice** — a blank cell is not an instruction to omit a test.\n- **⚠️ BOOK DEFECT, AGE:** the previous page says NAION “typically affects patients **over 40**”; this table says **“majority > 50”**. Both are recorded, unreconciled by the book.\n- **HM and PL** are hand movements and perception of light — the two lowest rungs of the acuity ladder (`va-5`).\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 p.193, with the contradiction against p.192",
        "qs": []
      },
      {
        "id": "onv-13",
        "w": "must",
        "h": "Optic atrophy — the four types, and the fundus of each",
        "body": "**Definition:** **degeneration of the optic nerve AT ANY PART, from the RETINA to the LATERAL GENICULATE BODY.**\n\n- **The nerve appears PALE in ALL types**, from **decreased vascularity**.\n- **⚠️ THERE IS NO TREATMENT for optic atrophy.**\n- **Four clinical types**, classified by **aetiology AND by the fundus**.\n\n|Type|Cause|The discriminator|\n|---|---|---|\n|**1 — PRIMARY**|damage to the optic nerve **OUTSIDE the eyeball** — **CONGENITAL · DEMYELINATING (MS, recurrent attacks) · SYPHILIS · COMPRESSION by intracranial or orbital tumours**|**occurs WITHOUT previous swelling** of the nerve head *(Tutorial)*|\n|**2 — SECONDARY**|**LONG-STANDING PAPILLOEDEMA or PAPILLITIS**|**PRECEDED BY swelling** of the nerve head *(Tutorial)*|\n|**3 — CONSECUTIVE**|**RETINAL disease** — e.g. **retinitis pigmentosa, degenerative myopia** *(the two examples are Tutorial)*|**retinal examination shows the primary cause**|\n|**4 — GLAUCOMATOUS**|**END-STAGE CHRONIC GLAUCOMA** — advanced glaucomatous cupping|the **cupped** disc (`glc-7`)|\n\n- **⚠️⚠️ THE ONLY DISCRIMINATOR:** *was the disc swollen first?* — and it is **Tutorial-marked on BOTH sides of the table**.\n- **⚠️ It is written here in full** because it is the single fact the whole classification turns on.\n- **⚠️ Consecutive atrophy:** diagnosed by looking **AWAY from the disc** — the retina names the cause.\n\n### The fundus in each type — the book teaches this ONLY in photographs\n- **⚠️ The book describes none of it:** nothing beyond “pale”. The four descriptions below are supplied *(not in course material)*; the glaucomatous annotation is the book’s own.\n- **PRIMARY:** a **chalky-white disc with SHARP, well-defined margins**, and a visible lamina cribrosa *(not in course material)*.\n- **SECONDARY:** a **dirty grey-white disc with BLURRED, indistinct margins**, from the gliosis left by the old swelling *(not in course material)*.\n- **CONSECUTIVE:** a **waxy pale disc with sharp margins and ATTENUATED ARTERIOLES**, beside the retinal disease that caused it *(not in course material)*.\n- **GLAUCOMATOUS:** **deep cupping** — and the book’s plate annotates it, **“note the loss of the neuro-retinal rim allowing the blood vessels to disappear”**, which is `glc-7`’s total cupping with nasal shift of the vessels.\n- **⚠️ Margins are the shortcut:** **sharp margins = primary or consecutive; blurred margins = secondary.** The disc remembers whether it was ever swollen *(rule not in course material)*.\n\n*`orb-2` lists optic atrophy — with choroidal folds and opticociliary shunt vessels — among the fundus signs of orbital disease, and `orb-16` gives the shunt-vessel triad of optic nerve sheath meningioma. Merged `acu-9` names this four-way split and defers the account here.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.14 p.194; L21 (Optic Atrophy — Primary, Secondary, Consecutive, Glaucomatous)",
        "qs": []
      }
    ]
  }
};
