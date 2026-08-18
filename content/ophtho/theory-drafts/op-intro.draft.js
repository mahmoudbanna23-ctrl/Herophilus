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
  "op-intro": {
    "intro": "Chapter 1's non-examination half: why a silent eye disease is hunted, the history that hunts it, the anatomy the rest of the module assumes, what ageing does, the ten-step examination order, and the acuity thresholds that trigger a referral.",
    "sections": [
      {
        "id": "int-1",
        "w": "must",
        "h": "Why an eye examination is done at all — the silent diseases",
        "body": "**The premise:** a standardized eye examination gives **either treatment or a perfectly timed referral**.\n\n- **The problem:** many serious ocular and systemic diseases are **asymptomatic** — the book's phrase is *\"causing harm in silence\"*, and it calls them **silent assassins**.\n\n### Irreversible blinding diseases — treatable IF found early\n- **The five:** **glaucoma · diabetic retinopathy · macular degeneration · retinal detachment · amblyopia** (in youngsters).\n- **⚠️ The shared property:** each destroys vision **before the patient notices**. That is the argument for examining an eye that feels normal.\n\n### Vision- and/or life-threatening disorders that may involve the eye\n\n|Group|Members|\n|---|---|\n|**Metabolic / vascular**|**diabetes mellitus** · **hypertension**|\n|**Inflammatory**|**temporal arteritis** · **multiple sclerosis**|\n|**Embolic**|emboli from the **left side of the circulation** — heart and coronaries|\n|**Cerebrovascular**|**CVA**, haemorrhagic or ischaemic · **cerebral aneurysms**|\n|**Neoplastic**|**brain tumours** e.g. **meningioma** · **intraocular malignancies** e.g. **melanoma**, **retinoblastoma**|\n\n*Entities: `dr-1`, `vsc-1`, `ins-7`, `rd-1`, `glc-1`, `sqt-9`, `wht-7`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.1 p.3, both boxed lists",
        "qs": [
          "opqb-t1-1"
        ]
      },
      {
        "id": "int-2",
        "w": "high",
        "h": "The history — the process, and the four lists it runs through",
        "body": "**The first step:** proper **history taking**, not the torch.\n\n### Basic data\n- **Name:** communication. **Age · gender · residence:** clues to **risk factors**.\n- **Occupation:** sets **visual needs**, and carries its own disease — **welders: foreign body and photophobia**.\n\n### The complaint\n- **⚠️ In the patient's own words —** the book says **in Arabic**, and **do not try to translate it**.\n- **Two classes:** **visual** and **non-visual** (`vis-1`, `vis-2`), **documented chronologically**, **with emphasis on the chief complaint**.\n\n### Systemic illnesses that can affect the eye\n**The five:** **diabetes mellitus · hypertension · thyroid disease · autoimmune disease · malignancy.** Both sources print the same five.\n\n### Past ocular history — medical and surgical\n- **Similar conditions** or **previous surgery**, in the same eye **or the other eye**.\n- **Spectacles:** using them, **or having been told to need them**.\n- **Significant eye trauma** · **contact lens use** · **long-term medications**, especially **anti-glaucoma** drops *(`L1,2` adds **hydroxychloroquine**)* · **allergy or toxic reaction** to topical drugs, e.g. **neomycin**.\n- **The boxed N.B.:** many patients, **especially females, refuse spectacles** for community or cultural reasons, and **parents forbid prescribed glasses** believing they **weaken vision**. An unworn correction reads at the chart exactly like disease.\n\n### Family history — the book's seven\n**The seven:** **glaucoma · ocular tumours (e.g. retinoblastoma) · retinal detachment · anisometropia · strabismus · macular degeneration · retinitis pigmentosa / congenital cataract** *(Tutorial — item 7 alone is tagged; items 1–6 are core)*.\n- **⚠️ `L1,2`: retinitis pigmentosa is UNMARKED** — the deck treats as core what the book tutorial-tags. Both recorded.\n- **Why retinoblastoma, of the seven:** the one ocular tumour with a defined germline basis — ~40 % heritable, **RB1**, autosomal dominant, high penetrance *(genetics not taken from the course material)*.\n\n### The general look, before a word is spoken\n*(Tutorial — the whole dashed box is tagged.)* **Helped by another person:** poor vision · **looking at the glasses:** myopia or hypermetropia · **abnormal head posture:** paralytic squint · **chin elevation with a wrinkled forehead:** ptosis · **one-eyed person:** overestimation and special handling.\n\n### The closing rules\n- **Do not jump to a diagnosis** — diminution of vision has many causes, and **two conditions coexist** (cataract *and* diabetic retinopathy).\n- **⚠️ The endpoint:** by the end of history you hold a **differential list** that **guides the examination**.\n- **Treatment begins by taking proper history.** Many ocular diseases have **no definitive cure**, so management rests on **assurance through rapport** — **warm, therapeutic, conducive to good care**.\n\n*The item-by-item analysis of a complaint is `vis-3`; retinoblastoma `wht-7`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.1 pp.3, 5–6; L1,2 lines 172–210, 300–352",
        "qs": [
          "opqb-t1-8"
        ]
      },
      {
        "id": "int-3",
        "w": "must",
        "h": "The globe — three coats, three chambers, and where aqueous goes",
        "body": "### The wall — three layers\n\n|Layer|Contents and numbers|\n|---|---|\n|**Outer protective**|**cornea = anterior 1/6 or 15 %** · **sclera = posterior 5/6 or 85 %** · the junction is the **limbus**|\n|**Middle vascular** (**uveal tract**)|**iris · ciliary body · choroid**; carries the **main blood supply** to most internal ocular structures|\n|**Inner neural** (**retina**)|receives light stimuli, conveys them to the **occipital lobe** via the optic nerve and visual pathways|\n\n- **Figure-only:** the same three named **FIBROUS / VASCULAR / NEURAL**, with the sclera's three jobs — **tough and fibrous · protects structures · anchoring point**.\n\n### The three chambers\n\n|Chamber|Lies between|\n|---|---|\n|**Anterior chamber**|back of the **cornea** in front, **iris** behind|\n|**Posterior chamber**|back of the **iris** in front, **crystalline lens** behind|\n|**Vitreous cavity**|behind the lens|\n\n- **⚠️ The iris is the partition:** behind the cornea, in front of the lens, it **separates the anterior from the posterior chamber**. The two are continuous **through the pupil**.\n- **⚠️ Both aqueous chambers: IN FRONT of the lens.** Neither is behind it — that space is the vitreous cavity.\n\n### Aqueous — made, feeds, drained\n- **Secreted by** the **ciliary body processes** into the **posterior chamber**; reaches the AC **through the pupil**.\n- **⚠️ What aqueous nourishes: the CORNEA and the LENS** — the interior **AVASCULAR** structures. Both must stay avascular to stay transparent, so aqueous is their only supply.\n- **⚠️ Drained by** the structures in the **angle** — the **trabecular meshwork and canal of Schlemm** — into the venous circulation via the **episcleral venous plexus**. **Damage there raises the IOP.**\n- **From the deck:** **trabecular (conventional) 90 %, uveoscleral (unconventional) 10 %**. *The **uveoscleral route** and the mechanism of **angle closure by the iris** are figure-only in the book.*\n\n### Two more facts from the tables\n- **Ciliary sulcus:** the **periphery of the posterior chamber**, between the back of the iris and the ciliary processes — an **alternative fixation site for posterior-chamber IOLs**.\n- **Vitreous:** a **gel-like avascular** structure, **two-thirds of the eye's volume**, **98 % water** plus collagen, mucopolysaccharides and hyaluronic acid; **preserves the shape of the globe**.\n\n*The eight anterior-segment structures: `ant-1`–`ant-3`. The angle in glaucoma: `glc-3`. Sulcus IOLs: `cts-5`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.1 pp.8–10; L1,2 lines 61–75",
        "qs": [
          "opqb-t1-4",
          "opqb-t1-5",
          "opqb-t1-7",
          "opqb-t1-9"
        ]
      },
      {
        "id": "int-4",
        "w": "must",
        "h": "The posterior segment — retina, macula, fovea, disc",
        "body": "**Five structures lie posterior to the lens:** **vitreous humour · choroid · retina · optic disc · optic nerve**.\n\n- **Choroid:** the **vascular pigmented layer between sclera and retina**; supplies the **OUTER layers of the retina**.\n- **Retina:** **light-sensitive neural tissue** lining the vitreous cavity posteriorly; **transparent except for its surface vessels** — the central retinal artery and vein and their branches.\n\n### The two photoreceptors\n\n|Feature|**Rods**|**Cones** *(the book heads it \"Cons\" [sic])*|\n|---|---|---|\n|**Number**|about **125 million**|**6–7 million**|\n|**Distribution**|**all over the retina**|**concentrated mainly in the MACULA**|\n|**Work in**|**dim light**|**bright light**|\n|**Responsible for**|scotopic vision|**sharp vision, day vision, COLOUR vision**|\n|**Their disease**|**NIGHT BLINDNESS**|loss of detail and colour|\n\n- **⚠️ The reasoning the bank turns on:** rods are **spread throughout**, so rod failure is a **whole-field, dim-light** problem, not a central one. Cones cluster centrally, so cone failure is central.\n- **Figure-only:** the histological plate labels **\"Cones only\"** at the fovea against **\"Rods & cones\"** elsewhere. **The prose never says the fovea is cone-exclusive.**\n\n### Macula and fovea\n- **Macula:** the retinal area at the **posterior pole**, giving **detailed, fine, high-resolution CENTRAL vision** — the book's examples are **reading and car driving**.\n- **Fovea:** a **small oval depression in the centre of the macula**, with **the greatest concentration of cones**. The part of an image falling on it is **the part most accurately registered by the brain**.\n- **⚠️ A FOVEAL story:** reading plus face recognition with an intact peripheral field — the two tasks needing the highest resolution the eye produces, and one place that produces it.\n\n### Optic disc and the blind spot\n- **What it is:** the part of the optic nerve **visible within the eye**, made of **axons whose cell bodies lie in the ganglion cell layer**.\n- **⚠️ It has NO photoreceptors —** so its area in the visual field is the **\"blind spot\"**.\n- **Optic cup:** the disc's central depression, a **port for entry and exit of the central retinal vessels**.\n- **Optic nerve:** the disc's continuation behind the globe, transmitting the image to the brain.\n\n**N.B.:** the **retina, macula, choroid and optic disc** together are the **retinal fundus**, or simply the **fundus**.\n\n*Reading the fundus through an ophthalmoscope: `int-10`; the technique `pup-10`. Retinitis pigmentosa `ins-8`; AMD `ins-7`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.1 pp.11–12 and the p.11 histological plate; L1,2 lines 78–86",
        "qs": [
          "opqb-t1-11",
          "opqb-t1-12",
          "opqb-t1-13",
          "opqb-t1-14",
          "opqb-t1-20"
        ]
      },
      {
        "id": "int-5",
        "w": "high",
        "h": "The ocular adnexa — orbit and eyelids",
        "body": "**Adnexa:** structures that **support and protect the functions of an organ** — here the **orbit + eyelids + lacrimal system + extraocular muscles**, and **the conjunctiva can be considered part of them**.\n\n### Orbit\n- **The bony cavity or socket in the skull** holding the eye and its appendages; gives **protection** and **smooth rotation of the globe**.\n- **⚠️ Two volumes:** the adult orbit is about **30 ml**, of which the **eye occupies about 6.5 ml**.\n\n### Eyelids — surface anatomy\n- Upper and lower lids meet at the **medial and lateral canthi**; the open gap is the **palpebral fissure**.\n- **Lashes** sit on the **rounded anterior border** of the margin — **outwards and superiorly** above, **outwards and inferiorly** below. The **posterior margin is right-angled**, in **close coaptation with the globe**.\n\n### The five layers, anterior to posterior\n1. **Skin.** 2. **Subcutaneous tissue.**\n3. **Muscular layer:** **orbicularis oculi** — **blinking and forcible closure** — supplied by the **facial (VII) nerve**.\n4. **Tarsal plate:** the **rigid fibrous skeleton**, containing the **meibomian glands**, which empty through **orifices on the lid margin**; the virtual line joining those orifices is the **\"white line\"**.\n5. **Palpebral conjunctiva.**\n\n### ⚠️ Two lines on one margin, and they are different lines\n- **White line:** joins the **meibomian orifices**. **Grey line:** **avascular**, marking the **surgical split into two leaflets** — **anterior** = skin + subcutaneous + orbicularis; **posterior** = tarsal plate + palpebral conjunctiva.\n- **⚠️ The p.13 figure labels the GREY line** where the prose names only the white one; **p.14's N.B. resolves it** — two structures, not a contradiction.\n\n### Figure-only — numbers and eponyms the prose never gives\n- **Fissure:** **vertical 10 mm · horizontal 30 mm**, plus a **1–2 mm** mark at the upper lid margin, all inside one framed figure (confirmed at 300 dpi).\n- **Named only in figures:** **Whitnall's ligament · Müller's muscle · arcus marginalis ·** the **marginal and peripheral arterial arcades ·** the **levator aponeurosis skin crease** and its **insertion into the anterior tarsus**.\n\n*Lid disease `lid-1`–`lid-10`; the orbit as a compartment and proptosis `orb-1`–`orb-4`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.1 pp.12–14 and its two framed figures",
        "qs": []
      },
      {
        "id": "int-6",
        "w": "high",
        "h": "The adnexa continued — lacrimal system and the seven muscles",
        "body": "### Lacrimal system\n\n|Part|Members|\n|---|---|\n|**Secretory**|**main lacrimal gland**, in the **lacrimal fossa**, **anteriorly in the upper temporal orbit**, plus its **excretory ducts** · **accessory lacrimal glands** in the conjunctiva · **meibomian glands and goblet cells** *(Tutorial)*|\n|**Excretory**|**puncta** → **canaliculi** → **lacrimal sac**, in the **lacrimal sac fossa**, **anteroinferior nasal** orbit → **nasolacrimal duct**, draining **under the inferior turbinate**|\n\n- **⚠️ NOT printed, checked page by page:** **Krause** and **Wolfring** by name · **tear-film layers or thicknesses** · the **Schirmer test** · **Jones I / Jones II**. **Book ch.4 prints none of them either** — attribute none of the five to this book.\n\n### The extraocular muscles — SEVEN\n- **Four recti** (superior, inferior, medial, lateral) and **two obliques** (superior, inferior) **control ocular movements**.\n- **⚠️ The seventh: levator palpebrae superioris** — it elevates the **lid**, not the globe.\n- **Nerve supply:** **oculomotor (III)** to all seven **except lateral rectus (VI)** and **superior oblique (IV)**. The book's mnemonic, printed in red: **\" LR6 - SO4 - rest 3 \"**.\n- **Elevators and depressors:** **superior rectus and inferior oblique ELEVATE**; **inferior rectus and superior oblique DEPRESS**.\n\n*The muscle–nerve–action grid and the six cardinal positions are in `pup-7` and `pup-8`; the book's table agrees cell for cell — recti act mainly in **abduction**, obliques mainly in **adduction**.*\n\n### What the book adds\n- **Figure-only, and the useful half:** the **directional map** — which muscle to test in which gaze position — exists only in the p.16 figure; the p.15 table gives the abstract action alone.\n- **Annulus of Zinn:** the common tendinous origin, **named only in a figure caption**.\n- **Vergences:** simultaneous **binocular movement in OPPOSITE directions** — convergence, divergence. *`pup-8` tags this supplied; the book sources it.*\n- **⚠️ Six cardinal positions or nine — the book prints both:** **six** in the p.15 prose and again on p.28; **nine** in the p.16 figure caption, over a 3 × 3 grid of photographs. **Neither is reconciled.** `pup-8` writes six; both recorded, cited to their pages.\n\n### Ductions versus versions — what each test is FOR\n*(Tutorial — the whole table carries a dashed tab.)*\n\n|**Ductions**|**Versions**|\n|---|---|\n|Test each eye **separately** (uniocular)|Test **binocular** movement|\n|Test each muscle **in its primary field of action**|Detect **conjugate gaze palsy**|\n|Detect **limitation** in one muscle's direction|Detect **overaction or underaction**|\n\n*Lacrimal disease `lac-1`–`lac-9`; squint testing `sqt-10`–`sqt-12`; cranial nerve palsies `mot-2`–`mot-6`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.1 pp.14–16 and the chapter's verified-absent list",
        "qs": []
      },
      {
        "id": "int-7",
        "w": "must",
        "h": "Age-related changes in the eye and its adnexa",
        "body": "**Why it has a page of its own:** *\"involutional conditions are responsible for MOST of the clinic visits.\"* Three categories.\n\n### 1. Extraocular\n- **Levator aponeurosis:** partially **detaches from the superior tarsal plate**, so the lid moves **down toward the visual axis** and **restricts the superior field** — **involutional, senile or aponeurotic ptosis**.\n- **Lower lid suspensory ligaments** lose firmness, rotating the margin **in (entropion)** or **out (ectropion)**.\n- **Epiphora:** that disorganised lid–globe relationship breaks the **lacrimal pump** — the lid movement that propels tears toward the puncta.\n- **Dry eye:** the conjunctiva **loses accessory lacrimal glands and goblet cells**.\n\n### 2. Intraocular\n- **The lens grows throughout life** and in old age **crowds the anterior chamber angle** → **angle-closure glaucoma**, *especially in the **hyperope** whose chamber was already shallow*.\n- **Nuclear sclerosis:** **yellowing and opacification of the lens nucleus**.\n- **Open-angle glaucoma:** **trabecular filtration slows**, so IOP rises progressively.\n- **Vitreous syneresis:** the vitreous **degenerates and condenses**, separates from retina and disc as a **posterior vitreous detachment (PVD)**, and predisposes to **retinal traction, retinal tears** and **retinal detachment**.\n- **Corneal oedema:** **endothelial cell density falls** — those cells maintain clarity — so some develop **chronic corneal oedema**.\n- **The pupil becomes smaller and less reactive.**\n\n### 3. Vascular and neurologic\n- **Arteriosclerosis predisposes to** **third, fourth and sixth nerve palsies** · **retinal artery and vein occlusions** · **anterior ischaemic optic neuropathy**.\n- **Dark adaptation:** ageing **delays visual pigment regeneration** → **difficulty with night vision**.\n- **Retinal vascular change, fewer neural cells** in retina and visual cortex → **decreased acuity, contrast sensitivity and/or fields**.\n\n- **⚠️ Old age in one column:** ptosis · entropion/ectropion · epiphora · dry eye · angle-closure · cataract · open-angle glaucoma · PVD and detachment · corneal oedema · a small fixed pupil · nerve palsies · vascular occlusions · AION · poor night vision.\n\n*Presbyopia is NOT on this page and is `ast-7`'s. Senile cataract `cat-3`; PVD and detachment `rd-2`; AION `onv-10`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.1 p.17",
        "qs": []
      },
      {
        "id": "int-8",
        "w": "must",
        "h": "The ten-step examination sequence, and the tools",
        "body": "**The chapter's spine.** Printed 18 gives the order; pp.19–41 are those steps in that order.\n\n### Minimal requirements — in any general physical examination\n- **The four:** **visual acuity · pupillary reactions · extraocular muscle actions · fundus examination.**\n- **⚠️ The fundus caveat:** through a **dilated** pupil — **or preferably an UNDILATED one** where follow-up requires testing the pupillary reactions.\n\n### Additional tests, by history and initial findings\n- **Visual fields** · **inspection** of lids, conjunctiva, cornea, sclera, iris and lens · **upper eyelid eversion**, when an **ocular surface foreign body** is suspected · **anterior chamber** depth and contents · **IOP** · **fluorescein staining**.\n\n### ⚠️ The order, after an accurate and comprehensive history\n1. **Visual acuity.** 2. **Visual field.**\n3. **Inspection** of lids, conjunctiva, cornea, sclera and iris, **with or without upper-lid eversion**.\n4. **Anterior chamber** — depth and contents. 5. **Pupillary reactions.**\n6. **Extraocular muscle actions.** 7. **Intraocular pressure** (tension).\n8. **Lens clarity**, via the direct ophthalmoscope. 9. **Fundus examination.**\n10. **Additional tests** — lid eversion, fluorescein staining, colour vision testing.\n\n- **⚠️ THE DECK ORDERS IT DIFFERENTLY:** `va-1` prints a **six-step** run from `L3,4` — inspection first, then AC, pupils, IOP, EOM, fundus — with **acuity and field outside the numbered list**. The book puts **acuity first and inspection third**. **Both recorded; neither corrected.**\n\n### Tools required\n**Six tools:** **penlight · mydriatic eyedrops · topical anaesthetic drops · direct ophthalmoscope · near vision card · fluorescein strips** *(Tutorial — item 6 alone is tagged)*.\n- **⚠️ Figure-only drug names:** the tools photograph is the only place the chapter names **Tropicamide**, **Benox 0.4 %** and **Flu-Glo** — legible on the bottles, absent from the prose. **0.4 % is the only anaesthetic concentration in the chapter.**\n\n*Steps 1–2 `va-2`–`va-7`; step 3 `va-9`–`va-13`; step 4 `va-14`, `ant-6`; steps 5–9 `pup-1`–`pup-10`. What the book adds to each: `int-9`, `int-10`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.1 p.18, all three lists plus the tools photograph",
        "qs": []
      },
      {
        "id": "int-9",
        "w": "must",
        "h": "What the book adds on acuity, fields and pressure",
        "body": "*The fraction, the charts, the six-metre method, the pinhole, the low-vision ladder, confrontation, light projection and Amsler are `va-2`–`va-7`. Only the additions follow.*\n\n### Near vision, and the uncooperative patient\n- **⚠️ The card is held at 30–40 cm**, reading glasses **worn**, one eye occluded by the examiner; **a newspaper substitutes**. Indicated by a **near complaint**, or when distance testing is impossible — the **bed-ridden** patient, in whom it may be the **only feasible route to an acuity**.\n- **Non-cooperative, four steps:** estimation is **difficult** · a **change in facial expression** to light or sudden movement **indicates vision** · a **brisk pupillary response** suggests some vision, **⚠️ except in CORTICAL BLINDNESS** · **refer** in almost all cases.\n\n### ⚠️ Acuity by age — the ladder the module was missing\n\n|Age|Method|\n|---|---|\n|**Newborn**|**VA CANNOT be measured.** Assess by **corneal light reflex · red reflex · pupillary testing · fundus** if possible|\n|**Infants to 2 y**|**Cover each eye in turn** — **preferably an adhesive patch**; the infant **should maintain central fixation with each eye**. **⚠️ If amblyopic the child resists covering the GOOD eye.** Motility by **passing an interesting object** — a ring of keys. Normal = **CSM**|\n|**Infants**|**The rotating OPTOKINETIC DRUM** — vertical black and white stripes — **induces optokinetic nystagmus**: the child follows a stripe slowly, then flicks back for a new one|\n|**2–3 y**|**A picture card** — one figure highlighted on the chart, the child **points to the match**|\n|**Above 3 y**|**Tumbling E** or **Landolt C**, pointing to show the direction of the arms or opening. **An adhesive patch is the best occlusion**|\n\n- **CSM is SOURCED here:** **C**entral, **S**teady, **M**aintained. *`va-6` writes it and tags it supplied — the tag can be dropped.*\n- **Recheck annually** once acuity is normal in each eye. **VEP and ERG** help in **uncooperative, malingering** patients and children who cannot be examined.\n- **⚠️ WHO blindness is SOURCED too:** *\"best corrected visual acuity of **3/60** in the better-seeing eye\"*, p.21 — `va-6` supplied and tagged it.\n- **WHO leading causes of vision impairment:** **uncorrected refractive errors · cataract · AMD · glaucoma · diabetic retinopathy · corneal opacity · trachoma.**\n\n### The field — two figures and nothing else\n- **⚠️ Normal extents, figure-only:** **50° superiorly · 90° temporally · 60° nasally · 70° inferiorly**, annotated inside one photograph (confirmed at 400 dpi). **In no prose in the chapter.**\n- **⚠️ The defect vocabulary is figure-only:** **bitemporal hemianopia** (both temporal halves lost) and **homonymous hemianopia** (the **same** side lost in both eyes), defined by picture. **CF** is the notation for fingers seen in a quadrant.\n- **⚠️ Nothing else is named** — no quadrantanopia, scotoma types, arcuate or altitudinal defect, tunnel vision, anywhere in 43 pages.\n- *(Tutorial — the p.19 **VA equipment list**, the p.20 **pinhole-worsening = macular lesion** bullet, and the p.22 **advancing-finger** confrontation variant are all tagged; `va-4` and `va-7` write the last two.)*\n\n*Field defects as neurology `nrv-6`, `nrv-7`; perimetry in glaucoma `glc-8`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.1 pp.19–23, including the p.22 in-photo annotation and the p.23 recording figure",
        "qs": []
      },
      {
        "id": "int-10",
        "w": "must",
        "h": "Intraocular pressure — four tonometers, not two",
        "body": "*Digital estimation and the applanation-versus-indentation comparison are `pup-5` and `pup-6`; only what the book adds follows.*\n\n### The physiology, and the divergence\n- **IOP:** determined largely by the **OUTFLOW of aqueous** — greater resistance, higher pressure.\n- **⚠️ Mean 15 mm Hg**; **normal average 10–21 mm Hg**. **⚠️ `pup-5` prints mean 16 mmHg** from `L3,4`. Both recorded, **neither corrected**.\n- **Where it sits:** part of **glaucoma screening** with **ophthalmoscopic assessment of the cup**; open-angle diagnosis needs tests primary care lacks, but **IOP is decisive when ACUTE ANGLE-CLOSURE is considered**.\n\n### 1. Digital\n- **Detects** a **markedly high or low** pressure and **compares the two eyes**; **mild elevations cannot be accurately tested**.\n- **⚠️ The N.B. that matters:** *if you detect nothing abnormal the pressure may still be dangerously high.* **Refer anyway** if history or symptoms suggest glaucoma, or the patient is **on steroids** or has had **recent eye surgery**.\n\n### 2. Indentation (Schiötz)\n- **The instrument:** a **hollow barrel with a concave footplate** and holder; a **free-floating rod-like plunger** carrying a **5.5 gm weight**.\n- **How it reads:** held vertically, the plunger **sinks under gravity and indents the cornea**; a **lever arm magnifies** that movement to swing a needle across a **scale numbered 0–20**.\n- **⚠️ The scale runs backwards:** a **firmer eye — higher IOP — indents LESS and reads LOWER**.\n- **It does not measure pressure directly:** a **conversion table supplied with the instrument** turns readings into mmHg. **Extra weights 7.5 g and 10 g** confirm a measurement.\n- **Why it survives:** **inexpensive and simple · durable, little maintenance · no electronics or batteries · storable for years** — hence **screening, remote and mobile clinics**. **Figure-only part name:** the **test block**.\n\n### 3. Goldmann applanation\n- **The gold standard**, slit-lamp-mounted or handheld; **normal 10–21 mmHg**.\n- **Figure-only endpoint:** the **two green fluorescein semicircles (mires) just meeting** — **never described in prose**.\n- *(Tutorial — the labelled slit-lamp tonometer figure is captioned \"tutorial photo\", so **bi-prism · mobile feeder arm · control weight and housing · adjustment knob** are tagged; `pup-6` writes them.)*\n\n### 4. Handheld electronic\n- Increasingly in **hospital emergency departments**; battery-operated, so usable **with the patient in ANY position** where others need seated or supine.\n- **Rapid**, and **correlates highly with Goldmann**; **expensive**, and **requires daily calibration**. **Technique:** topical anaesthetic, **separate the eyelids**, apply the calibrated tip gently.\n\n### ⚠️ Four safety rules, and the last is absolute\n- **Hold the lids apart with the free hand:** anaesthetic has **little effect on the lid margins**, so a tonometer touching a lid makes the patient **squeeze**.\n- **Do not press on the globe** while holding the lids — **falsely HIGH** reading.\n- **Remove contact lenses** before measuring.\n- **⚠️ Absolute:** NEVER attempt tonometry in a suspected **RUPTURED GLOBE**.\n\n*IOP interpretation, diurnal variation, corneal thickness, target pressure `glc-5`; acute angle-closure `glc-14`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.1 pp.31–33",
        "qs": []
      },
      {
        "id": "int-11",
        "w": "must",
        "h": "Dilatation, and reading the normal fundus",
        "body": "*The eight-step ophthalmoscopy technique, the red reflex and its abnormal colours are `pup-10` and `pup-9`.*\n\n### Pupillary dilatation\n- **Agents:** **tropicamide 1 %** and **phenylephrine hydrochloride 2.5 %**. **⚠️ The book contradicts itself: p.34's Tutorial table prints tropicamide 0.5 %.** Both printed; **neither reconciled**.\n- **Contraindications, all three:** a **shallow chamber and narrow angle** — dilating may **precipitate angle-closure glaucoma** · a patient under **neurologic observation** with pupillary signs monitored, e.g. **head injury**, until the neurosurgeon says it is safe · **blurred vision and light sensitivity for several hours**, so warn about **reading and driving**.\n- **⚠️ Indirect ophthalmoscopy is EXCLUDED:** *\"beyond the scope of this text for undergraduates\"* (p.33). **No direct-versus-indirect comparison exists** — a stated exclusion, not an oversight.\n\n### ⚠️ Printed 34 is a whole Tutorial page\n*Its opening line, centred and alone, is \"This whole page is from Tutorial\". Written in full and at full weight, per the module ruling.*\n\n|**Parasympathetic** [sic]|**Sympathetic** [sic]|\n|---|---|\n|**Acetylcholine** → **muscarinic (M3) receptors**|**Noradrenaline** → **α-adrenoceptors**|\n|**Sphincter pupillae: MIOSIS**|**Dilator pupillae: MYDRIASIS**|\n|**Ciliary muscle: ACCOMMODATION**|**Müller muscle: upper lid ELEVATION**|\n|**Conjunctival vessels: vasodilatation (redness)**|**Conjunctival vessels: vasoconstriction (blanching)**|\n\n|**Tropicamide 0.5 %**|**Phenylephrine 2.5 %**|\n|---|---|\n|**Parasympathetic ANTAGONIST**|**SYMPATHOMIMETIC**|\n|**Mydriasis · CYCLOPLEGIA** — blurring of near vision|**Mydriasis · lid elevation · vasoconstriction**|\n\n- **⚠️ Phenylephrine: mydriasis WITHOUT cycloplegia**, so near vision survives — which is why the two are combined when a wide pupil is wanted and separated when it is not.\n\n### The normal optic disc, by numbers\n- **Slightly OVAL in the vertical meridian**, **pink** from extremely small surface capillaries, with a **SHARP margin**; the central whitish depression is the **physiologic cup**.\n- **⚠️ C/D ratio — average 0.2–0.4. Refer above 0.5**, **or** on an inter-eye difference **greater than 0.2** (the book's example: **0.2 against 0.5**).\n- **⚠️ `pup-10`: 0.3–0.5, \"above 0.6 suspicious\", tagged as supplied.** The book's are **sourced**; both recorded, a reconciliation row filed.\n- **Disc diameters:** lesions are measured in them — **1 disc diameter ≈ 1.5 mm**.\n- **Three normal variations:** **cup size varies** · a **hypopigmented crescent** where **RPE and choroid stop short of the margin**, especially in **myopic eyes on the TEMPORAL side** (the opposite being a **heavily pigmented margin**) · **myelinated nerve fibres**, normally absent at disc and retina, giving a **dense white superficial opacification with FEATHERY EDGES**.\n\n### Retinal circulation, background and macula\n- The **central retinal artery branches at or on the disc** to supply the **four quadrants** of the inner retina.\n- **⚠️ Spontaneous venous pulsation** — collapse during systole — in **80 % of NORMAL eyes**. **⚠️ Vein-to-artery ratio 3 : 2.** **Arteries are lighter**, with a **more prominent light reflex**.\n- **How to look:** follow **arteries out from the disc and veins back to it** in each quadrant, attending to **arteriovenous crossing patterns**, which **may uncover hypertension**.\n- **Background:** a **uniform red-orange**, primarily **RPE pigmentation**; choroidal pigment contributes, so **heavily pigmented eyes have a darker fundus**.\n- **Where the fovea sits:** **directly temporal and slightly INFERIOR to the optic disc**.\n- **⚠️ Why the macula looks darker:** the **RPE cells of the fovea are TALLER and MORE HEAVILY PIGMENTED**, so they absorb light the rest of the fundus reflects back. In some eyes it also looks slightly **yellow**, from **xanthophyll**.\n- **⚠️ The foveal reflex:** the **central depression of the fovea acts as a CONCAVE MIRROR**. It is **a shape, not a pigment** — exactly the discrimination the bank tests against xanthophyll.\n\n*Disc swelling, pallor, the glaucomatous cup `onv-4`, `glc-7`; hypertensive A/V changes `vsc-11`; macular disease `ins-7`, `dr-6`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.1 pp.33–37, including the whole-page Tutorial on p.34",
        "qs": [
          "opqb-t1-56",
          "opqb-t1-57"
        ]
      },
      {
        "id": "int-12",
        "w": "must",
        "h": "When to refer an apparently normal patient",
        "body": "**Thresholds for a patient with NO complaint** — the counterpart of `int-1`'s silent diseases.\n\n### Screening intervals\n\n|Group|Interval|\n|---|---|\n|**Ages 40–65**|**every 2–4 years**, after a **baseline examination at age 40** if not already done|\n|**Over 65**|**every 1 or 2 years**|\n|**Children**|**first few months of life**, then **6 months, 3 years and 5 years**, by the primary care physician; **any abnormality goes to an ophthalmologist**|\n\n### ⚠️ Decreased visual acuity — three thresholds\n*Each applies **unless** the patient has been seen by an ophthalmologist **and** the condition confirmed stable.*\n\n|Finding|Refer?|\n|---|---|\n|**VA less than 6/6** in one or both eyes, **WITH a visual complaint**|**yes**|\n|**VA less than 6/12 in BOTH eyes**|**yes — even with no complaint**|\n|**Difference of 2 Snellen lines or more** between the eyes|**yes — even if one or both eyes is better than 20/40**|\n\n- **Why 6/12 ignores the absence of complaint:** many such patients have only **uncorrected refractive error**, but **undetected, painless, progressive loss occurs in many eye disorders**.\n- **⚠️ Why asymmetry alone refers:** visual function is **nearly identical between the eyes**, so asymmetry **may be a sign of occult disease** — and **patients may be unaware of even severe loss in one eye** when the other sees normally.\n\n### Presbyopia\n- **The picture:** **reduced NEAR vision with NO change in distance acuity.** Middle-aged or elderly patients complaining of it need **referral for correcting lenses**.\n\n### Two findings that refer by themselves\n- **Abnormal fundus appearance** — it can indicate **significant ocular OR systemic disease**.\n- **Shallow AC depth or elevated IOP** — at risk of **angle closure**, referred for evaluation, and **⚠️ NOT dilated meanwhile** (`int-11`, `ant-6`).\n\n*Presbyopia as a refractive error `ast-7`; the red-eye referral rules, a different list, `rdm-10`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.1 p.43",
        "qs": []
      },
      {
        "id": "int-13",
        "w": "know",
        "h": "What this chapter hands on, and where it disagrees with the module",
        "body": "**§14.5 register — an unrecorded promise is a deletion.** Five rows filed.\n\n|Deferred|Owed to|State|\n|---|---|---|\n|**EOM action grid and cardinal positions**, as examination|`op-pupil`|✅ **already written** — `pup-7`, `pup-8`. Notice only|\n|**Lid anatomy** — five layers, grey vs white line, the 10 mm / 30 mm fissure, Whitnall, Müller, arcus marginalis|`op-lid`|⚠️ **merged; reconciliation work.** `Whitnall` returns **zero** module-wide and no section carries the fissure measurements|\n|**Lacrimal secretory and excretory parts**|`op-lac`|✅ **notice, not a debt** — `lac-*` was written from book ch.4, which prints the same anatomy|\n|**C/D ratio, disc variations, retinal circulation**|`op-glauc`, `op-pupil`|⚠️ **merged; reconciliation work**, carrying the 0.2–0.4 divergence below|\n|**WHO blindness 3/60 is SOURCED, not supplied**|`op-va`|⚠️ **merged.** `va-6`'s *(not in course material)* tag should be dropped — p.21 prints the figure|\n\n### ⚠️ Three module-versus-book divergences, all held, none fixed\n- **The examination ORDER:** book **ten steps, acuity first**; `va-1` **six steps, inspection first** (`int-8`).\n- **Mean IOP:** book **15 mm Hg**; `pup-5` **16 mmHg** from `L3,4` (`int-10`).\n- **C/D ratio:** book **0.2–0.4, refer above 0.5 or on a 0.2 difference**; `pup-10` **0.3–0.5, above 0.6 suspicious**, tagged supplied. **The book's are sourced** (`int-11`).\n\n### ⚠️ Two book self-contradictions, recorded in place\n- **Tropicamide 1 %** (p.33 prose) vs **0.5 %** (p.34 Tutorial table).\n- **Six cardinal positions** (pp.15, 28) vs **nine** (p.16 figure caption).\n\n### What this chapter deliberately does NOT contain\n- **The examination steps themselves** — `va-2`–`va-7`, `va-14`, `pup-1`–`pup-10`; only what the book adds.\n- **The eight anterior-segment structures** `ant-1`–`ant-3`; **the symptom vocabulary and the differential grids** `vis-1`–`vis-10`.\n- **⚠️ Five items the chapter prints nowhere:** **Hirschberg** (the test is on p.29, the eponym is absent) · **Schirmer** · **Krause** · **Jones I / II** · **tear-film layers or thicknesses**. **Book ch.4 prints none either.** Nothing was invented.\n\nSrc: register per START-HERE.md §14.5; every divergence verified against app\\data\\theory.ophtho.js on 2026-08-18",
        "qs": []
      }
    ]
  }
};
