/* op-intro + op-vissym + op-ant — "Introduction, History", "Visual Symptoms"
   and "Anterior Segment", Ophthalmology.

   Written 2026-08-18 under START-HERE.md §14 (slide-density revision notes),
   §14.1 (budget and page prediction), §14.2 (the two-sided coverage floor),
   §14.3 (telegraphic style), §14.3a (layout and the mdLead() anchor rule) and
   §14.5 (the deferral register), plus content\ophtho\theory-plan.md ("What
   writing the first twelve chapters taught", the two USER RULINGS of
   2026-08-18, the "Book chapters read" log and the skip-in-final ruling).
   Shape copied from op-lid.draft.js.

   ⚠️ THIS FILE HOLDS THREE CHAPTERS, ALL WITH EXISTING KEYS in modules.js
   (line 32 `op-intro` "Introduction, History"; line 32 `op-ant` "Anterior
   Segment"; line 100 `op-vissym` "Visual Symptoms"). None is new; no
   modules.js registration is needed. This file touches no app\data\* file, no
   MEMORY.md, no resume file and no git.

     `op-intro`   13 linked questions
     `op-vissym`   3 linked questions
     `op-ant`      0 linked questions — scope is what the module leaves

   ⚠️ NO NUMBER IN THIS HEADER IS A MEASUREMENT OF THE FINISHED FILE. Per the
   eleven header faults recorded in §14.1 and theory-plan.md, this header states
   reasoning, sources and deferrals and states NO totals. The hub measures body
   words from disk — canonical W(s.body) over every section, Src: lines
   INCLUDED — and prints the chapters.

   ===========================================================================
   SOURCES

   Primary, ONE file, read 2026-08-18 and cached:
     content\ophtho\book\ch01-examination.txt   printed 2–44, 43 pp, weight 3 %
     = "OPHTHALMOLOGY WITH TUTORIALS", HEALIX TEAM, chapter 1, Examination of
     the Eye. 20,920 words. Image-only original; the cache is a page-by-page
     150 dpi visual transcription with 300–400 dpi re-crops on three regions.

   Secondary, cross-check only:
     content\ophtho\lectures\L1,2) Ocular Anatomy, Symptomatology & Basic Eye
     Examination.txt — 1,911 w. Lines 1–389 and 614–659 are `op-intro`'s and
     `op-vissym`'s and are USED and counted. ⚠️ Lines 438–613 (866 w) are
     COUNTED TO `op-va` by the §14.5 register and are NOT re-counted here;
     lines 390–437 were "cited only" by `op-va` and are likewise not counted.

   ⚠️ CITATIONS ARE THE **PRINTED** PAGE. PDF page = printed + 2, and no PDF
   page appears anywhere in a chapter body. Book Src: lines read
   `ophthalmology.pdf (HEALIX) ch.1 p.<printed>`.

   ⚠️ NO RENDER WAS COMMISSIONED BY THIS AGENT AND NONE WAS AUTHORISED.
   Where this file says the book prints nothing, that is the cache's own
   verified NOT-COVERED list (31 items, checked page by page), never an
   inference from silence.

   ===========================================================================
   THE CENTRAL CONSTRAINT, AND HOW IT WAS RESOLVED

   Chapter 1 is 20,920 words. Written one-to-one at this module's measured
   ~300 words per printed page it would be ~66 printed pages against a ~30-page
   budget for three chapters. The resolution is NOT compression and NOT
   scope-cutting: the book's part 4 (Ocular Examination, printed 18–38, 9,876
   words) is ALREADY WRITTEN, as `op-va` (14 sections) and `op-pupil` (10
   sections), from `L3,4` and `L1,2`.

   So these three chapters write what the BOOK ADDS and point at the rest with
   a backticked id. Every such pointer below was verified against the merged
   section, not against the plan.

   ===========================================================================
   BUDGET (§14.1). Both terms computed.

     TERM 1, source words actually rested on:
       `op-intro`   ch.1 pp.3, 6 (history) ~1,050 · pp.7–17 (anatomy + age
                    changes) 4,496 · p.18 (the master sequence) ~520 ·
                    pp.21–23, 31–37 (the additions over op-va/op-pupil,
                    NET of what those two already carry) ~1,900 · p.43
                    (referral) 416 · L1,2 ll.1–389 in part ~400
                    →  ~8,780
       `op-vissym`  ch.1 pp.4–6 (the symptom vocabulary and the complaint
                    template) ~1,300 · pp.39–42 (Tables 1-1 to 1-3 and the six
                    boxed presentations) 1,220 · p.44 (Table 1-4 and the
                    misconceptions) 2,074 · L1,2 ll.614–659 ~250
                    →  ~4,844
       `op-ant`     ch.1 pp.9–10 (the eight structures) ~900 · p.19 (slit lamp)
                    ~110 · p.23 (inspection + eversion) ~330 · pp.24–25 (AC
                    depth) ~400 · p.38 (fluorescein) ~230
                    →  ~1,970

     TERM 2, 25 × linked questions:
       `op-intro` 13 × 25 = 325 · `op-vissym` 3 × 25 = 75 · `op-ant` 0.
       All three collapse — as TERM 2 has in every ophthalmology chapter.

     Budget = max(TERM 1, TERM 2), capped by §14.1 at 3,000 and by the
     operative ceiling at ~2,400. ⚠️ TERM 1 exceeds the cap for all three, so
     the cap governs and the HUB'S BRIEFED TARGETS are written instead:
       `op-intro` ~3,200 · `op-vissym` ~3,200 · `op-ant` ~2,400.
     The hub's instruction is explicit — "The ÷240 estimator OVER-predicts
     badly on book-sourced chapters here … Do not compress to satisfy it. Write
     the targets above; I print and measure." The two book-sourced chapters of
     2026-08-18 over-predicted by 5.1 and 4.6 pages, so ÷240 forecasts of ~13.3
     / ~13.3 / ~10.0 pages are stated here ONLY as the tool's output and are
     not treated as measurements.

   ===========================================================================
   WHAT CONTRADICTS THE BRIEF — checked, not assumed

   (1) ✅ "op-intro owns 13 questions" — TRUE, ids exactly as briefed, verified
       by loading app\data\questions.ophtho.js. op-vissym 3, op-ant 0. All 16
       stems, options and keys were read; every one is answerable from the text
       below and is filed in a `qs` array.

   (2) ⚠️ "op-intro owns … ANATOMY AND PHYSIOLOGY … pages 7–18" AND "op-ant
       owns … pages 9–10" — THESE OVERLAP. Printed 9–10 is the eight
       anterior-segment structures, inside op-intro's own range. Resolved by
       content, not by page: `op-intro` takes the three COATS and the three
       CHAMBERS (p.8), the posterior segment (pp.11–12) and the adnexa
       (pp.13–16); `op-ant` takes the eight structures themselves (pp.9–10).
       ⚠️ ONE FACT IS DELIBERATELY IN BOTH: that the iris separates the two
       chambers. `opqb-t1-5` keys it and is filed under `op-intro`, so `int-3`
       must carry it; `ant-3` carries it as the iris's own property and points
       back. Declared, not hidden.

   (3) ⚠️ "op-vissym … the complaint template" vs "op-intro … history taking" —
       the template (side / onset / course / duration / pattern / associated
       symptoms) is printed on p.5 inside the history section. Given to
       `vis-3` per the brief's explicit assignment; `int-2` writes the history
       as a PROCESS and points at `vis-3` rather than repeating it.

   (4) ⚠️ "Facts already verified as genuinely NEW … the master ten-step
       examination sequence (p.18)" — TRUE, but `va-1` already prints a SIX-step
       order from `L3,4` sl.2–4 that CONTRADICTS it: the deck runs inspection
       first and puts VA outside the numbered run; the book runs VA first and
       inspection third. Both are recorded in `int-8`; neither is corrected.

   (5) ⚠️ "Schiötz's own numbers" NEW — TRUE (5.5 g, 0–20, 7.5/10 g, the
       conversion table, the four screening advantages: `5.5` returns two hits
       in theory.ophtho.js and both are `pup-6`'s instrument list, not the
       weight). But the BOOK ALSO CONTRADICTS `pup-5` ON THE MEAN IOP: book
       p.31 prints **mean 15 mm Hg**, `pup-5` prints **mean 16 mmHg** from
       `L3,4`. Recorded in `int-10`, not corrected.

   (6) ⚠️ A SECOND SUCH DIVERGENCE, NOT IN THE BRIEF: `pup-10` gives the C/D
       ratio as "normal roughly 0.3–0.5, above 0.6 suspicious" and tags it
       *(not taken from the course material)*. The book p.36 SOURCES a
       different set — average **0.2–0.4**, refer above **0.5**, refer on an
       inter-eye difference above **0.2**. `int-11` writes the sourced numbers
       and says so. `0.2-0.4` and `0.2–0.4` both return ZERO across
       theory.ophtho.js, so this is new as well as divergent.

   (7) ⚠️ A THIRD: `va-6` writes WHO blindness as "best-corrected VA ≤ 3/60"
       and tags it as SUPPLIED — "the 3/60 figure supplied and tagged — zero
       hits across all 27 cached decks". The book p.21 PRINTS it: "The WHO
       defines blindness as a best corrected visual acuity of 3/60 in the
       better-seeing eye." So a tagged claim is now sourced. Recorded in
       `int-9` and filed as a register row for the reconciliation pass.

   (8) ✅ "ch.1 does NOT print Hirschberg / Schirmer / Krause / Jones I,II /
       tear-film layers" — TRUE, all five confirmed in the cache's own hunted-
       items list. Nothing is put in the book's mouth; `int-6` records the
       absence at the lacrimal system where a reader would look for it.

   (9) ✅ "Indirect ophthalmoscopy is explicitly excluded" — TRUE, p.33
       verbatim, and it is recorded in `int-11` as a stated exclusion.

  (10) ✅ "The slit lamp gets THREE BULLETS in 43 pages, with no illumination
       techniques at all" — TRUE. `ant-4` supplies the six techniques and tags
       every one of them.

  (11) ✅ Both self-contradictions HELD, not fixed: tropicamide 1 % (p.33) vs
       0.5 % (p.34) in `int-11`; six cardinal positions (pp.15, 28) vs nine
       (p.16 caption) in `int-6`.

  (12) ⚠️ THE §14.5 CENSUS SAYS `op-ant` HAS "1 row, already closed" — that is
       the `op-white` REVERSE NOTICE telling `op-ant` to cross-reference
       `wht-4` for the three congenital corneal anomalies. Verified: `wht-4`
       carries Peters anomaly, sclerocornea and anterior segment dysgenesis in
       full. `ant-8` points at it and does not re-derive it, which is what the
       notice asks.

  (13) ⚠️ THE `op-red` ROW AIMED AT THIS FILE IS DELIVERABLE AND WAS DELIVERED.
       Row: `op-red` (L1,2 ll.629–659) → `op-intro`, `op-vissym`, `op-acute`,
       "the module's own red eye cause grid and its ocular emergencies grid,
       and no merged chapter had written either … the life-threatening column
       and the non-red entries are left whole". SECOND CLAUSE RE-VERIFIED
       TODAY: `Life-threatening` and `Vision-threatening` return ZERO across
       theory.ophtho.js in that capitalisation; `Acute proptosis` returns one
       hit and `internal ophthalmoplegia` one, both inside `red-1`'s closing
       cross-reference sentence, not as an account. ✅ Written in `vis-9`,
       against the BOOK's Table (1-4), which prints the same two columns with
       the bracketed exclusions the deck omits.

  (14) ⚠️ ONE BRIEF CLAIM COULD NOT BE CONFIRMED AS STATED. The brief lists
       "**paediatric acuity by age**" among the facts "verified … absent
       module-wide". The AGE LADDER is indeed absent — newborn / infants-to-2 /
       2–3 picture card / above 3. But `CSM` returns FOUR hits, all in `va-6`,
       which already writes Central–Steady–Maintained in full and tags it as
       supplied. So `int-9` writes the age ladder and the optokinetic drum as
       new, SOURCES CSM (it is printed on p.21) and points at `va-6` rather
       than writing it twice.

   ===========================================================================
   TUTORIAL MARKERS — every one met is recorded (theory-plan.md ruling)

   The book's contents page: "anything we put (Tutorial) or (T) beside /
   before it, study in round & skip in final". Per the 2026-08-18 ruling this
   is DATA, never a compression licence — tutorial material is written in full
   and at full weight, with the tag shown.

   The cache lists five physical marker forms in this chapter. Every occurrence
   is carried into a body:
     p.3   whole dashed box — general look / personal history      → `int-2`
     p.6   item 7 alone — retinitis pigmentosa / congenital cataract → `int-2`
     p.14  third bullet — meibomian glands & goblet cells          → `int-6`
     p.16  whole table — ductions vs versions                      → `int-6`
     p.18  item 6 — fluorescein strips                             → `int-8`
     p.19  whole dashed box — the VA equipment list                → `int-9`
     p.20  third bullet — pinhole worsening = macular lesion       → `int-9`
     p.22  whole box — the advancing-finger confrontation variant  → `int-9`
     p.24  whole box "From Tutorial" — shallow / deep AC causes    → `ant-6`
     p.25  inline — the festooned pupil clause                     → `ant-3`
     p.26  whole figure block — pupil colour                       → `ant-3`
     p.32  figure caption "tutorial photo" — applanation parts     → `int-10`
     p.34  ⚠️ THE WHOLE PAGE                                       → `int-11`

   ===========================================================================
   §14.5 DEFERRAL REGISTER — rows FILED by this file

   Each is written into the owning chapter's final register section
   (`int-13`, `vis-11`, `ant-9`), in the shape `lid-11` / `lac-10` use.

   FROM `op-intro`:
     1. The EOM action grid and the cardinal-position map, as EXAMINATION
        → `op-pupil` ✅ ALREADY WRITTEN (`pup-7`, `pup-8`). Notice only.
     2. Lid anatomy as LID DISEASE — the five layers, grey vs white line,
        the fissure measurements, Whitnall, Müller → `op-lid` ⚠️ MERGED;
        reconciliation work. Verified today: `Whitnall` returns ZERO
        module-wide, `palpebral fissure` three hits, none carrying the
        10 mm / 30 mm figures.
     3. The lacrimal secretory and excretory parts as ANATOMY → `op-lac`
        ⚠️ MERGED; `lac-*` was written from book ch.4, which prints the
        same anatomy. Notice, not a debt.
     4. The C/D ratio, disc variations and retinal circulation as GLAUCOMA
        and FUNDUS numbers → `op-glauc`, `op-pupil` ⚠️ both MERGED;
        reconciliation work, and it carries the 0.2–0.4 divergence at (6).
     5. WHO blindness 3/60 is SOURCED, not supplied → `op-va` ⚠️ MERGED;
        `va-6`'s tag should be dropped at reconciliation. See (7).

   FROM `op-vissym`:
     6. Every entity in Tables (1-1) to (1-4) as a DISEASE → the organ
        chapters. All merged; `vis-4`/`vis-5`/`vis-9` write the GRIDS only
        and point at each account by id.
     7. The book's Table (1-2) red-eye grid vs `rdm-5`'s Tables 4-1/4-2
        → `op-red-mgmt` ⚠️ MERGED. ⚠️ THESE ARE DIFFERENT TABLES from
        different book chapters and neither replaces the other — ch.1's is
        4 columns × 11 rows with acute iritis; ch.4's is 6 columns and
        splits conjunctivitis three ways. Both are kept; `vis-5` says so.
     8. Giant cell arteritis as an EMERGENCY WORK-UP → `op-neuro`
        ⚠️ MERGED, and the §14.5 row from `op-systemic` already records
        that `temporal arteritis` and `ESR` return ZERO module-wide. This
        file names GCA in two grids and supplies nothing beyond them.

   FROM `op-ant`:
     9. The eight structures as DISEASES → `op-conj`, `op-cornea`,
        `op-sclera`, `op-uvea`, `op-cat`, `op-glauc`. All merged; `ant-8`
        is the map and re-derives nothing.
    10. Slit-lamp ILLUMINATION TECHNIQUES — a genuine hole in the book,
        supplied and tagged in `ant-4`. Owed to nobody; recorded so that no
        later chapter believes the book teaches them.

   ===========================================================================
   WHAT WAS LEFT OUT — the honest list, for the hub's fourth-chapter decision

   Nothing was silently dropped. Six items are named in the bodies as present
   in the source and NOT expanded here, each with the merged chapter that
   already holds it:
     · the full six-step distance-VA technique (p.20)        → `va-3`
     · the low-vision ladder 6/60 → NPL (p.20)               → `va-5`
     · confrontation, light projection, Amsler (pp.22–23)    → `va-7`
     · the anisocoria table and the light reflexes (pp.25–28)→ `pup-2`, `pup-3`
     · the swinging-flashlight test and RAPD (pp.27–28)      → `pup-4`
     · the cover tests and corneal light reflex (pp.28–30)   → `pup-8`, `sqt-*`
   Four items are written HERE at reduced length because the merged chapter
   holds the fuller account, and say so in the body: the red-reflex abnormal
   forms (`pup-9`), the EOM action grid (`pup-7`), the pupil-colour grid
   (`va-13`), and the digital-tonometry technique (`pup-5`).
   ⚠️ ONE ITEM IS GENUINELY THIN AND THE HUB SHOULD SEE IT: the fifteen
   "popular misconceptions" (p.44) are printed as a bare list with NO
   corrections. `vis-10` writes them with the correction supplied and tagged,
   which is the §14 rule for a gap — but it is 15 corrections in one section
   and it is the single most compressible thing in this file if pages come
   back long.

   ===========================================================================
   ⚠️⚠️ `op-intro` OVERRUNS ITS BRIEFED TARGET, AND THE SEAM IS PRE-CUT

   The hub's target was ~3,200 body words. `op-intro` does not reach it without
   deleting protected facts, so per §14.1 the floor is held and the bill is
   stated instead of the number being met. THE HUB MEASURES; no total is
   claimed here. The reason is structural, not sloppiness: `op-intro` rests on
   ~8,780 words of book across FOUR unrelated subjects — history · the whole of
   ocular anatomy · age changes · the examination additions and the referral
   thresholds — and carries 13 of the module's 138 questions, more than any
   other ophthalmology chapter except `op-refract` and `op-orbit`.

   ⚠️ IF IT PRINTS OVER THE 13-PAGE HARD SHAPE, SPLIT IT — the seam is already
   cut, and NO QUESTION STRADDLES IT:

     `op-intro`  "Introduction, History"  — the CLINICAL half
                 `int-1` `int-2` `int-8` `int-9` `int-10` `int-11` `int-12`
                 `int-13`.   Questions: `opqb-t1-1`, `opqb-t1-8`,
                 `opqb-t1-56`, `opqb-t1-57`  (4 of 13)

     NEW         "Ocular Anatomy and Age Changes"  — the ANATOMY half
                 `int-3` `int-4` `int-5` `int-6` `int-7`.
                 Questions: `opqb-t1-4`, `-t1-5`, `-t1-7`, `-t1-9`, `-t1-11`,
                 `-t1-12`, `-t1-13`, `-t1-14`, `-t1-20`  (9 of 13)

   Why THAT seam and not the two nearest alternatives. (a) Cutting after
   `int-2` instead would put the p.18 master sequence with the anatomy, and the
   sequence is what pp.19–41 follow — it belongs beside the examination
   additions that expand it. (b) Cutting after `int-8` would leave the referral
   thresholds stranded from the acuity numbers they are expressed in
   (<6/6, <6/12, 2 Snellen lines). The chosen seam is the book's own part
   boundary: parts 2–3 (anatomy, printed 7–17) against parts 1 and 4–6.
   ⚠️ A split needs a `modules.js` key and the hub's decision, so NOTHING was
   registered and the file ships as three chapters. `SCHEDULE` is keyed by
   date+title, so the split cannot break it (`CLAUDE.md` §4).
*/

var THEORY_DRAFT = {
  "op-ant": {
    "intro": "The chapter with no lecture of its own. It takes the book's eight anterior-segment structures, the three examination steps that belong to the front of the eye, and the slit lamp the book barely mentions — and maps everything else to the chapter that owns it.",
    "sections": [
      {
        "id": "ant-1",
        "w": "must",
        "h": "What the anterior segment is, and the eight structures in order",
        "body": "**The clinical division**, and the split is at the vitreous:\n- **Anterior segment:** **all structures lying ANTERIOR TO THE VITREOUS HUMOUR, including the ocular surface.**\n- **Posterior segment:** the **five** structures behind the lens — vitreous, choroid, retina, optic disc, optic nerve (`int-4`).\n\n### ⚠️ The eight, in the book's order, anterior to posterior\n**The eight:** **1. Conjunctiva · 2. Cornea · 3. Sclera · 4. Anterior chamber · 5. Iris · 6. Pupil · 7. Lens · 8. Ciliary body.**\n\n- **⚠️ The order is the examination.** A penlight run from front to back meets them in exactly this sequence, which is why step 3 of the master sequence lists *\"eyelids, conjunctiva, cornea, sclera and iris\"* in the same direction (`int-8`).\n- **⚠️ Two of the eight are not tissues.** The **anterior chamber** is a space and the **pupil** is a hole; each is on the list because each is *examined* as an entity and has its own findings.\n- **The sclera is mostly posterior** — only its anterior portion is visible, and that is the portion this segment means.\n\n*The anterior chamber as a space — boundaries, aqueous, trabecular meshwork and canal of Schlemm — is `int-3`; assessing its depth is `ant-6` and `va-14`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.1 p.9, the clinical two-column table and the numbered list",
        "qs": []
      },
      {
        "id": "ant-2",
        "w": "must",
        "h": "Conjunctiva, cornea and sclera — the outer three",
        "body": "### 1. Conjunctiva\n- **A thin, vascular, clear MUCOUS MEMBRANE.**\n- **Where it runs:** **covers the white opaque part of the eyeball** — the sclera — as **BULBAR conjunctiva**, and **lines the back surface of the eyelids** as **PALPEBRAL conjunctiva**.\n- **What it does:** **protects, and lubricates the lids' movement over the eyeball**.\n- **⚠️ It is counted as ocular adnexa too**, explicitly on p.12, so it appears on both lists (`int-5`).\n\n### 2. Cornea\n- **The TRANSPARENT part of the OUTER coat** — the anterior **1/6 or 15 %** of it (`int-3`).\n- **Its function:** to **REFRACT light entering the eye onto the lens**, which then focuses it onto the retina.\n- **⚠️ Optical power: about TWO-THIRDS of the eye's total.**\n- **⚠️ It is AVASCULAR** — the price of transparency — and **extremely sensitive to pain**.\n- **What feeds it:** **aqueous humour** from behind, and the **tear film and limbal vessels** in front *(the second half is not taken from the course material; ch.1 names aqueous only)*.\n\n### 3. Sclera\n- **What it is:** the tough, fibrous, **WHITE OPAQUE part of the outer coat** — the posterior **5/6 or 85 %**.\n- **Three functions, all printed:** **protection** of the intraocular contents · **protects the retina from OVEREXPOSURE to light** — the opacity is functional, not incidental · **serves as the ATTACHMENT for the extraocular muscles**.\n- **Figure-only:** the same three as **\"tough and fibrous · protects structures · anchoring point\"**.\n- **Limbus:** the **junction between cornea and sclera** — where transparency ends, with the drainage angle behind it.\n\n*Conjunctival disease `cnj-1`–`cnj-15`, `va-10`; corneal disease `cor-1`–`cor-17`; scleritis and episcleritis `scl-1`–`scl-6`, `red-7`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.1 pp.8–10",
        "qs": []
      },
      {
        "id": "ant-3",
        "w": "must",
        "h": "Iris, pupil, lens and ciliary body — the inner four",
        "body": "### 5. Iris\n- **The COLOURED portion** of the eye, **behind the cornea** (separated by the AC) and **in front of the lens**.\n- **⚠️ It SEPARATES the two chambers** — anterior from posterior (`int-3`).\n- **Its two muscles:** **sphincter pupillae** and **dilator pupillae**, whose contraction **regulates the amount of light entering the eye** by controlling pupil size.\n- **Figure-only:** the plate is the only place the **RADIAL dilator** and **CIRCULAR sphincter** arrangement is shown.\n- *(Tutorial — the **festooned pupil** clause on p.25: an irregular scalloped pupil from **posterior synechiae in uveitis**. `pup-1` writes it.)*\n\n### 6. Pupil\n- **Why it is examined:** its **reactions to both light and near stimuli** help diagnose **many ocular AND central nervous system diseases**.\n- **⚠️ Its colour, and why it changes:** **jet black in the newly born**, acquiring a **greyish tinge with age** because **new lens fibres are added throughout life**, causing **light scattering** — the book names this **SENILE SCLEROSIS**.\n- **⚠️ And it reverses:** **in the ABSENCE of the lens** — removed, or posteriorly dislocated — **the pupil regains its jet-black colour**.\n- *(Tutorial — the p.26 **pupil colour** figure block is tagged whole: **black** (newly born, aphakia) · **greyish in old age**, splitting **nuclear sclerosis (BRIGHT red reflex)** from **immature senile cataract (DIM red reflex)** · **leukocoria** (mature cataract). `va-13` writes the grid, `pup-9` the red-reflex column.)*\n\n### 7. Lens\n- **An elastic, transparent, BICONVEX** structure **directly behind the iris**, suspended by **fine fibres — the ZONULES —** connecting it to the **ciliary body**.\n- **What it does:** **focuses light onto the retina for both near and far**, by **changing its shape** with ciliary muscle contraction and relaxation.\n- **⚠️ Figure-only, and counter-intuitive:** the **ciliary muscle CONTRACTS like a sphincter**, which **SLACKENS the suspensory ligaments** and lets the **elastic lens BULGE** for near; **relaxation pulls the ligaments TIGHT and the lens THIN** for distance. **The prose states this nowhere.**\n\n### 8. Ciliary body\n- **The MIDDLE part of the uveal tract**, connecting **iris anteriorly to choroid posteriorly**.\n- **Two functions, and only two:** **secretion of the aqueous humour** (`int-3`), and **accommodation**, transmitted to the lens through the zonules.\n- **Ciliary sulcus:** the periphery of the posterior chamber, and the **alternative IOL fixation site** (`int-3`).\n\n*Cataract and lens subluxation `cat-1`–`cat-10`, `va-13`; uveitis `uv-1`–`uv-6`; accommodation and presbyopia as optics `ref-2`, `ast-7`; aphakia `cts-7`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.1 p.10, plus the p.25 and p.26 Tutorial blocks",
        "qs": []
      },
      {
        "id": "ant-4",
        "w": "must",
        "h": "The slit lamp — three bullets in the book, and the gap they leave",
        "body": "**⚠️ The slit lamp:** this chapter owns it, and **the book barely mentions it**. Verified page by page: **three bullets in an N.B. on p.19**, and **no illumination technique anywhere in 43 pages**. Slit-lamp photographs are printed on pp.25, 32 and 40 with **no technique text at all**.\n\n### What the book does print\n- **What it is:** a **FIXED standard ophthalmology office instrument** giving an **ILLUMINATED and MAGNIFIED view** of the **anterior segment**.\n- **With the aid of some lenses**, the **posterior segment** can also be examined with it.\n- **Portable types exist** but are **not common** — used mainly for **bedridden patients** and **children under general anaesthesia**.\n\n### ⚠️ The illumination techniques — supplied, because the book has none\n*Every row is **not taken from the course material**; the module's own decks print none of it either.*\n\n|Technique|What it is|What it shows|\n|---|---|---|\n|**Diffuse**|wide beam, low magnification, ground-glass filter|the **general survey** — lids, conjunctiva, corneal surface|\n|**Direct focal**|narrow beam focused on the tissue|**depth** of a corneal lesion; AC depth and cells|\n|**Optical section**|the narrowest beam, angled|**where in the cornea** an opacity sits, layer by layer|\n|**Retro-illumination**|light bounced back off **iris or fundus**|**transparent** defects — epithelial oedema, keratic precipitates, **lens opacities**, iris holes|\n|**Sclerotic scatter**|beam on the **limbus**, viewed off-beam|**subtle corneal haze** glowing as light is totally internally reflected|\n|**Specular reflection**|angle of incidence equals angle of view|the **ENDOTHELIAL mosaic** — cell count, guttata|\n|**Cobalt blue with fluorescein**|blue filter over a stained eye|**epithelial defects** (`ant-7`), the **Seidel test**, applanation mires|\n\n- **⚠️ Two findings ARE printed here:** the **anterior chamber optical section** graded **shallow / normal / deep** (p.25), and **cells and flare** photographed in the beam (p.40). **Both are figure-only; the prose describes neither.**\n- **Van Herick** peripheral AC grading, done at the slit lamp, is **absent** — the book assesses AC depth by **penlight shadow only** (`ant-6`).\n\n*Applanation tonometry at the slit lamp `int-10`, `pup-6`; keratic precipitates and cells and flare as uveitis signs `uv-5`; gonioscopy `glc-4`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.1 p.19, the whole N.B., plus the pp.25, 32 and 40 photographs. Every illumination technique is supplied and tagged — the chapter's own NOT-COVERED list confirms all six absent",
        "qs": []
      },
      {
        "id": "ant-5",
        "w": "high",
        "h": "Inspection, and everting the upper eyelid",
        "body": "### Step 3 of the master sequence\n- **With adequate ROOM LIGHT:** inspect the **eyelids, surrounding tissues and palpebral fissure**.\n- **Palpation** of the **orbital rim and eyelids** may be indicated by the history — **trauma, mass lesion**.\n- **The two manoeuvres that expose the fornices:** have the patient **look UP while you retract the LOWER lid**, and **look DOWN while you raise the UPPER lid**. The **penlight also aids inspection of the cornea and iris**.\n\n### Eversion of the upper eyelid — the book's own six steps\n- **Why:** to **search for conjunctival foreign bodies** or other conjunctival signs. **Topical anaesthetic facilitates it, but it can be done without.**\n\n1. **Ask the patient to look DOWN.**\n2. **Grasp the eyelashes** between **thumb and index finger**.\n3. **Press gently DOWNWARD with a cotton-tipped applicator** over the **superior border of the tarsal plate**.\n4. **Pull the lid margin UPWARD by the lashes** as you press.\n5. **Inspect the exposed conjunctival surface with the penlight.**\n6. **Remove any foreign body** with a **cotton-tipped applicator soaked in topical anaesthetic**.\n\n- **To reverse it:** **release the lid margin** and ask the patient to **look UP**, or **simply blink**.\n- **⚠️ Step 1: the one people skip, and the one that works.** Looking down slackens the levator and rotates the tarsus forward; against an upward gaze the lid will not turn.\n- **⚠️ When it is indicated:** the master sequence names eversion **only when an ocular surface foreign body is suspected** (`int-8`) — an additional test, not a routine one.\n- **Double eversion** with a **Desmarres retractor**, to see the superior fornix, is **absent from this chapter** *(not taken from the course material)*.\n\n*`va-10` writes the same technique from `L3,4` and adds what is then SEEN — papillae, follicles, giant papillae, pterygium, trachomatous scarring, and the injection patterns. Subtarsal foreign body `trm-7`; trachoma grading `cnj-11`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.1 p.23 and the p.24 technique figures",
        "qs": []
      },
      {
        "id": "ant-6",
        "w": "must",
        "h": "Anterior chamber depth — the shadow test, and what shallow means",
        "body": "### The sign\n- **Normally the iris has a FLAT contour.** When the chamber is shallow the iris becomes **CONVEX**, bowed forwards — so the **nasal iris is seen in shadow when a light is directed from the TEMPORAL side**.\n- **⚠️ It grades itself:** *as the shallowness increases, so does the shaded area of the nasal iris.*\n\n### Technique — three steps\n1. **Shine a light from the TEMPORAL side of the head**, across the front of the eye, **PARALLEL to the plane of the iris**.\n2. **Look at the NASAL aspect of the iris.** ⚠️ **If TWO-THIRDS OR MORE is in shadow**, the chamber is **probably shallow** and the **angle narrow**.\n3. **Repeat for the other eye.**\n\n### What it means\n- **A shallow chamber:** may indicate **NARROW-ANGLE (angle-closure) GLAUCOMA**, or a narrow angle that **could close with pupillary dilation**, **inducing an attack**.\n- **⚠️ The instruction, verbatim:** a patient suspected of a narrow angle **should NOT be dilated** and **should be referred**. It is one of the three contraindications to dilating (`int-11`) and one of the referral triggers (`int-12`).\n\n### Causes — the Tutorial box, in full\n*(Tutorial — the whole framed box is headed \"From Tutorial\"; written at full weight per the module ruling.)*\n\n|**Shallow AC**|**Deep AC**|\n|---|---|\n|**Hypermetropia**|**High myopia**|\n|**Angle-closure glaucoma**|**Aphakia**|\n|**Intumescent cataract**|**Buphthalmos**|\n|**Perforated corneal ulcer**|—|\n|**Leakage from a surgical wound**|—|\n\n- **⚠️ The pattern:** a **SHORT eye or a SWOLLEN lens** crowds the chamber; a **LONG eye or NO lens** empties it. The last two shallow entries are different — **perforation and wound leak DRAIN the aqueous**, so the chamber collapses rather than being crowded.\n\n### Figure-only, twice\n- **The p.24 four-panel figure** shows what *\"nasal iris in shadow\"* looks like — two en-face photographs labelled **Deep** and **Shallow** over two cross-sections of the flat and the forward-bowed iris.\n- **⚠️ The only SLIT-LAMP grading here:** the p.25 photographs — three optical sections captioned **Shallow · Normal · Deep**. That is how depth is graded in practice, and **the prose describes only the penlight test** (`ant-4`).\n\n*`va-14` writes the same test, the same box and the AC contents — hyphaema, hypopyon, cells and flare — from `L3,4` slides 24–27; `glc-12` carries the two-thirds rule as a glaucoma sign. Gonioscopy, the definitive assessment, is `glc-4` and is absent from this chapter.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.1 pp.24–25, including the \"From Tutorial\" box",
        "qs": []
      },
      {
        "id": "ant-7",
        "w": "high",
        "h": "Fluorescein staining of the cornea",
        "body": "**Step 9a:** of the master sequence, and the one anterior-segment stain the book teaches.\n\n### What it is, and how it reads\n- **The dye:** **fluorescein**, a **YELLOW dye** giving a **GREEN colour when illuminated with the COBALT BLUE FILTER** of the ophthalmoscope or slit lamp.\n- **What it is for:** **diagnosing defects of the corneal EPITHELIUM**.\n- **⚠️ How it reads:** areas of **BRIGHT GREEN staining denote ABSENT OR DISEASED EPITHELIUM**. Intact epithelium does not stain.\n\n### Application\n- **A sterile FILTER-PAPER STRIP**, **moistened with sterile water, saline or topical anaesthetic**, then **touched to the PALPEBRAL conjunctiva** — not the cornea. **A few blinks** spread it over the cornea.\n\n### ⚠️ Two precautions, both printed\n1. **Use STRIPS, not stock solutions.** Fluorescein **stock solutions are susceptible to contamination with PSEUDOMONAS** — and *Pseudomonas* destroys a cornea faster than anything else, so the diagnostic drop can cause the disease it was looking for.\n2. **Remove SOFT contact lenses before application**, to avoid **discolouration of the lenses**.\n\n- **Absent from the chapter:** the **Seidel test** — fluorescein detecting **aqueous leaking from a perforation**, which dilutes the dye to a bright green stream *(not taken from the course material; the module writes it in `cor-2` and `trm-11`)*. Also absent: **Rose Bengal**, **lissamine green**, and **tear break-up time** *(same tag)*.\n\n*`va-11` writes the same method from `L3,4` with the corneal signs it reveals; `cor-2` writes the dye's behaviour within the cornea chapter; applanation tonometry uses the same dye for its mires (`int-10`).*\n\nSrc: ophthalmology.pdf (HEALIX) ch.1 p.38, the whole fluorescein entry and both numbered precautions",
        "qs": []
      },
      {
        "id": "ant-8",
        "w": "must",
        "h": "The rest of the anterior segment — where each part is written",
        "body": "**⚠️ No deck, no question:** this chapter has neither of its own. Its scope is what the rest of the module leaves — the `ent-sinuscomp` shape. This section is the map, and re-derives nothing.\n\n|Structure|Its disease lives in|\n|---|---|\n|**Conjunctiva**|`cnj-1`–`cnj-15` — conjunctivitis by type, trachoma, pterygium, membranes; inspection labels `va-10`|\n|**Cornea**|`cor-1`–`cor-11`, `cor-12`–`cor-24` — keratitis, ulcers, dystrophies, keratoconus, grafts|\n|**Sclera**|`scl-1`–`scl-6`; episcleritis vs scleritis also `red-7`, `va-12`|\n|**Anterior chamber**|depth `ant-6`, `va-14`, `glc-12`; contents — hyphaema `trm-8`, hypopyon `cor-3`, cells and flare `uv-6`|\n|**Iris**|`uv-1`–`uv-6`; iridodialysis `trm-7`; rubeosis `vsc-5`, `glc-15`; inspection labels `va-12`|\n|**Pupil**|`pup-1`–`pup-4` — anisocoria, light reactions, swinging flashlight test, RAPD|\n|**Lens**|`cat-1`–`cat-10`, `cts-1`–`cts-8` — classifications, maturity, surgery, IOLs|\n|**Ciliary body**|aqueous secretion `int-3`, `glc-3`; cyclitis `uv-3`; cyclodestruction `glc-9`|\n\n### ⚠️ Three congenital corneal anomalies — pointed at, not re-derived\n- **`wht-4` carries them in full:** **Peters anomaly**, **sclerocornea** and the broader **anterior segment dysgenesis** group, with **corneal keloid**, **corneal dermoid** and **intrauterine-infection scarring**.\n- **Why a pointer and not a section:** the §14.5 **reverse notice** from `op-white` records that each returns **`L33,34` and nothing else** across 27 decks, and instructs `op-ant` to **cross-reference `wht-4`**. Repeating it would be duplication.\n\n### ⚠️ What the module genuinely does NOT have — supplied and tagged\n*Each is absent module-wide and absent from ch.1. Every claim is **not taken from the course material**.*\n- **Gonioscopy and angle grading:** the angle is seen with a **mirrored contact lens**; **Shaffer** grades it 0–4 by the angle in degrees, **Van Herick** estimates it at the slit lamp from the ratio of **peripheral AC depth to corneal thickness**. *(`glc-4` writes gonioscopy; the grading systems are absent.)*\n- **Grading of cells and flare:** the **SUN** scale grades cells **0 to 4+** by the number in a **1 × 1 mm beam**, and flare **0 to 4+** by aqueous turbidity. **The book uses \"+++\" with no defined scale** (`vis-5`).\n- **Corneal sensation testing:** a **wisp of cotton wool** to the cornea **before any anaesthetic** — reduced in **herpetic and neurotrophic** disease.\n- **Documentation:** **OD / OS / OU** for right, left and both eyes. **The chapter records acuity as ratios and CF/HM/PL/NPL and stops there.**\n\n### Not this chapter's, though a reader might look here\n- **Refraction and corneal metrology:** `ref-*`, `cor-21`–`cor-24`. The chapter's only refractive tool is the **pinhole** (`va-4`).\n- **Anterior segment imaging** — OCT, ultrasound biomicroscopy: absent from the chapter entirely.\n- **Corneal anatomy layer by layer:** `cor-1`. Ch.1 gives the cornea four lines.\n\nSrc: map verified against app\\data\\theory.ophtho.js on 2026-08-18; the absences against ophthalmology.pdf (HEALIX) ch.1's own NOT-COVERED list. Every supplied item is tagged",
        "qs": []
      },
      {
        "id": "ant-9",
        "w": "know",
        "h": "What this chapter hands on, and the one hole it could not fill",
        "body": "**§14.5 register.** Two rows filed; the one row aimed at this chapter is closed.\n\n|Deferred|Owed to|State|\n|---|---|---|\n|**The eight structures as DISEASES**|`op-conj`, `op-cornea`, `op-sclera`, `op-uvea`, `op-cat`, `op-glauc`|✅ **all merged.** `ant-8` is the map; nothing re-derived|\n|**Slit-lamp ILLUMINATION TECHNIQUES**|— **nobody**|⚠️ **A GENUINE HOLE IN THE SOURCE, not a deferral.** The book gives the instrument **three bullets in 43 pages** and **no technique at all**; the decks print none either. **Supplied and tagged in `ant-4`.** Recorded so no later chapter believes the book teaches them|\n\n### ✅ The row aimed at this chapter — closed\n- **The row:** `op-white` **reverse notice** → *\"`op-ant` (which has NO deck of its own) cross-references `wht-4`\"*, for the three congenital corneal anomalies.\n- **Verified before writing:** `wht-4` carries Peters anomaly, sclerocornea, anterior segment dysgenesis, corneal keloid and corneal dermoid, each with its own gloss.\n- **✅ Done in `ant-8`** as a pointer — the notice exists to **PREVENT a second account**, not to request one.\n\n### ⚠️ Two things the hub should know about this chapter\n- **It has no questions.** All 138 ophthalmology questions are filed elsewhere, so §14.2's second-side floor does not apply; the content floor is the book's own pp.9–10, 19, 23–24 and 38.\n- **One deliberate duplication:** the **eversion technique** (`ant-5`) and the **AC shadow test** (`ant-6`) are written here **from the BOOK** and in `va-10` / `va-14` **from `L3,4`**. The two sources agree step for step — one method, two citations. **Where a fact is in only one, the section says which.**\n\n### What this chapter deliberately does NOT contain\n- **Anatomy:** the three coats, three chambers and the aqueous pathway — `int-3`. **The posterior segment** — `int-4`.\n- **The pupil's reactions** — `pup-1`–`pup-4`. This chapter has the pupil as a **structure**, not as a reflex.\n- **⚠️ Six absent from the source:** **gonioscopy, Van Herick, Seidel, corneal sensation, SUN grading and double eversion**. Each is **supplied and tagged** in `ant-4`, `ant-5`, `ant-7` or `ant-8`, never presented as the book's.\n\nSrc: register per START-HERE.md §14.5; the `op-white` reverse notice verified against `wht-4` on 2026-08-18",
        "qs": []
      }
    ]
  }
};
