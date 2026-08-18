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
  "op-vissym": {
    "intro": "The patient's side of chapter 1: nineteen complaints with their definitions, the six-item template that analyses any one of them, the four numbered differential tables, and the emergencies that go to an ophthalmologist the same day.",
    "sections": [
      {
        "id": "vis-1",
        "w": "must",
        "h": "The twelve visual complaints, defined",
        "body": "**A visual complaint concerns the image** — its quantity or its quality. Each is printed with a definition, and the definitions are what is examined.\n\n|Complaint|The book's definition|\n|---|---|\n|**1. Diminution of vision**|loss or decrease of vision|\n|**2. Night blindness**|*(named, not defined — the rod symptom, `int-4`)*|\n|**3. Colour blindness**|*(named; the figure shows green and red converging on one dull hue)*|\n|**4. Photophobia**|**intolerance to the USUAL levels of illumination**|\n|**5. Glare**|**difficulty of seeing in the PRESENCE of bright light**|\n|**6. Diplopia**|**double vision** — 2 images, or an additional **shadow** of any visualized object|\n|**7. Polyopia**|seeing **MORE THAN TWO** images or shadows of the same object|\n|**8. Photopsia**|**seeing FLASHES OF LIGHT in the ABSENCE of a light source**|\n|**9. Floaters**|seeing **floating black shadows in BRIGHT illumination**|\n|**10. Duskiness**|sensation of **poor illumination of the surroundings** regardless of the **actual** level|\n|**11. Central scotoma**|**dark spots within the visual field** of one or both eyes, affecting **central vision or fixation**|\n\n### 12. The three macular complaints, printed as their own group\n- **Macropsia:** objects sensed **LARGER** than actual size. **Micropsia:** sensed **SMALLER**.\n- **⚠️ Metamorphopsia:** perception of **DISTORTED images of presumably regular objects** — straight lines seen bent or wavy.\n- **⚠️ The group heading is the teaching:** *\"other visual complaints related to MACULAR DISEASES\"*. **A distortion complaint is a macular complaint** until proved otherwise.\n\n### Three discriminations the list is built to test\n- **Photophobia vs glare:** intolerance of **ordinary** light versus difficulty seeing **when a bright light is present**. Photophobia is **corneal, uveal and meningeal**; glare is **optical**.\n- **Diplopia vs polyopia:** **two** images versus **more than two**. Polyopia is almost always **monocular and optical** (`vis-8`).\n- **⚠️ Photopsia: a TRACTION symptom, not a light one.** No light enters; the retina is being pulled, and the brain reads any retinal signal as light — which is why it warns of **PVD, retinal tear and detachment** (`vis-7`).\n\n*Figure-only: the p.4 photographs are the chapter's only visual definition of diplopia, photopsia, floaters, metamorphopsia, macropsia and micropsia, and the central-scotoma pair is captioned **\"Vision with AMD\"** — the only place AMD appears on that page.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.1 p.4; L1,2 lines 211–265",
        "qs": [
          "opqb-t1-3",
          "opqb-t1-6",
          "opqb-t1-15"
        ]
      },
      {
        "id": "vis-2",
        "w": "high",
        "h": "The seven non-visual complaints",
        "body": "**A non-visual complaint:** the eye **as an organ** — how it feels and how it looks, with the image intact.\n\n1. **Red eye**\n2. **Discharge** — **watery · mucoid · mucopurulent · purulent · sanguineous** (blood-tinged)\n3. **Pain** — **burning · throbbing · bursting · neuralgic**\n4. **Itching** 5. **Foreign body sensation** 6. **Swelling** 7. **Disfigurement** (cosmetic)\n\n- **⚠️ The two lists: the whole of one bank question.** Anything about the *image* is visual; anything about *sensation or appearance* is not. **Floaters are visual; foreign body sensation, red eye and itching are not.**\n\n### The discriminations hidden inside items 2 and 3\n- **Discharge type names the cause:** **purulent** → bacterial conjunctivitis · **mucopurulent** → chlamydial · **watery** → viral and allergic · **mucoid** → dry eye and allergy · **sanguineous** → trauma and severe membranous disease *(the attributions are not taken from the course material; ch.1 prints the five words only)*.\n- **Pain quality names the depth:** **burning** surface · **throbbing** inflammatory · **bursting** pressure · **neuralgic** nerve *(same tag)*.\n- **Itching is the ALLERGIC marker** — `rdm-5` grades it **2–3 in allergic conjunctivitis and 0 in all five other red eyes**.\n\n**N.B., printed:** complaints are documented **chronologically**, **with emphasis on the chief complaint**.\n\n*Discharge as a red-eye sign `red-3`, `rdm-5`; ocular pain as a presentation `vis-7`; lid swelling `lid-9`; disfigurement `op-appear`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.1 p.5; L1,2 lines 266–276",
        "qs": []
      },
      {
        "id": "vis-3",
        "w": "must",
        "h": "The complaint template — six items, then what was done about it",
        "body": "**Why it exists:** *\"analysis of the chief complaint is important to help direct the examination and form an appropriate differential diagnosis.\"* It runs on **any** complaint, visual or not.\n\n|Item|The options the book prints|\n|---|---|\n|**Side**|**monocular** or **binocular**|\n|**Mode of onset**|**sudden · acute · accidentally discovered · gradual · insidious**|\n|**Course**|**progressive · stationary · regressive · intermittent · remittent**|\n|**Duration**|—|\n|**Pattern**|**fluctuating during the day**, or **persistent**|\n|**Associated symptoms**|headache · discharge · tearing · double vision · central vision affection · visual field defect|\n\n- **⚠️ \"Accidentally discovered\":** the mode of onset that matters most — it is how a **silently blinding** eye presents (`int-1`) — the patient covers the good eye by chance and finds the other gone.\n- **Sudden vs acute is a real distinction here:** Table (1-1) reads **sudden = seconds to minutes**, **acute = hours to days** (`vis-4`).\n\n### What has been done to the complaint — five items, all recorded\n**Five items:** **seeking medical advice · medications prescribed** and **if possible their doses** · **compliance** · **response** · **interventions performed**, and whether the condition **improved or worsened** after them.\n\n### ⚠️ The trap the book stops to warn about\n- **What happens:** some patients interpret a **field defect on one side — homonymous hemianopia —** as **diminution of vision in the eye on that same side**, so the wrong eye is examined and a **retrochiasmal** lesion is read as monocular.\n- **The instruction, verbatim:** *have patience, and ask questions to clarify the complaint while analysing symptoms.*\n\n### The closing rules\n- **Do not jump to a diagnosis**; **by the end of history you hold a DDx list** that guides the examination.\n- **All other complaints are analysed the same** way — individually, **and in relation to the chief complaint**.\n\n*Homonymous hemianopia and the visual pathway `nrv-7`; the history as a process `int-2`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.1 pp.5–6; L1,2 lines 277–299",
        "qs": []
      },
      {
        "id": "vis-4",
        "w": "must",
        "h": "Table (1-1) — the differential diagnosis of loss of vision",
        "body": "**Two axes:** **tempo** across, **site** down. Printed in landscape, and the chapter's best single revision object.\n\n### SUDDEN — seconds to minutes\n**Central retinal artery occlusion (CRAO)** · **amaurosis fugax** [book prints *\"Amaurosis Eugax\"*, sic] — **transient ischaemic attacks** · **traumatic avulsion of the optic nerve** · **hysterical (functional) or malingering** · **migraine with aura**.\n\n### ACUTE — hours to days\n\n|Anterior segment|Posterior segment|CNS / other|\n|---|---|---|\n|**Keratitis**|**Retinal detachment**|**Occipital lobe infarction or haemorrhage**|\n|**Corneal oedema**|**Vitreous haemorrhage** [sic *\"hacmanhage\"*]|**Cortical blindness**|\n|**Hyphaema**|**Central or branch retinal VEIN occlusion**|**Functional** — non-organic, a **diagnosis of exclusion**|\n|**Uveitis**|**Optic neuritis**|—|\n|**Acute angle-closure glaucoma**|**Temporal arteritis · anterior ischaemic optic neuropathy**|—|\n\n### CHRONIC — weeks to months\n\n|Anterior segment|Posterior segment|CNS / other|\n|---|---|---|\n|**Refractive error**|**Age-related macular degeneration**|**Pituitary adenoma**|\n|**Cataract**|**Diabetic retinopathy**|**Medications**|\n|**Chronic primary open-angle glaucoma**|**Compressive optic neuropathy** — intracranial or orbital mass|**Nutritional deficiency**|\n|**Amblyopia**|**Intraocular tumour · retinitis pigmentosa**|**Papilloedema**|\n\n- **⚠️ The tempo axis is diagnostic on its own.** An **artery** is an on/off switch, so CRAO is seconds; a **detachment or haemorrhage** fills a space, so it is hours; a **cataract or maculopathy** accumulates, so it is months.\n- **⚠️ The CNS column is the forgotten one:** an **occipital infarct** and a **pituitary adenoma** both present as loss of vision with a **completely normal eye**.\n- **Functional loss appears TWICE**, sudden and chronic, and both times as **a diagnosis of exclusion**.\n\n### The module's own version\n- **`L1,2`: the same tempo axis without the site split** — sudden: CRAO, amaurosis fugax, trauma, functional; acute: keratitis, uveitis, acute NAG, RD, vitreous haemorrhage; chronic: refractive error, cataract, AMD, DR, optic neuropathy.\n- **⚠️ What the BOOK adds is the SITE axis** — anterior segment / posterior segment / CNS — which turns a list into an examination plan.\n\n*The finer tempo ladder and the painful-versus-painless axis `acu-1`. Entities: `glc-14`, `cor-3`, `rd-1`, `vsc-1`, `onv-7`, `ins-4`, `dr-1`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.1 p.39, Table (1-1) cell by cell; L1,2 lines 615–630",
        "qs": []
      },
      {
        "id": "vis-5",
        "w": "must",
        "h": "Table (1-2) — the four red eyes told apart",
        "body": "**Four columns, eleven rows:** **conjunctivitis · keratitis** (corneal ulcer or abrasion) **· acute glaucoma · acute iritis**.\n\n|Symptom|Conjunctivitis|Keratitis|Acute glaucoma|Acute iritis|\n|---|---|---|---|---|\n|**Pain**|± **burning**|**++** stinging, sharp, **FB sensation**|**+++**, ± **nausea and vomiting**|**++** dull **aching** [sic *\"acing\"*]|\n|**Discharge**|**watery, mucoid, mucopurulent or purulent**, by cause|**profuse tearing**|**no**|**no**|\n|**Photophobia**|**NO**|**+++**|**+**|**++**|\n|**Vision**|**NORMAL**|decreased|decreased|decreased|\n\n|Sign|Conjunctivitis|Keratitis|Acute glaucoma|Acute iritis|\n|---|---|---|---|---|\n|**Visual acuity**|**not affected**|decreased|**markedly** decreased|decreased|\n|**Pupil**|**normal**|normal|**mid-dilated, NON-REACTIVE, VERTICALLY OVAL**|**MIOTIC**, **sluggish**|\n|**Injection**|**conjunctival**|**ciliary**|**ciliary**|**ciliary**|\n|**Cornea**|**normal**|**ulcer, oedema and/or infiltration**|**cloudy (oedematous)**|**keratic precipitates**|\n|**IOP**|**normal**|normal|**markedly INCREASED**|**decreased, normal OR increased**|\n|**Anterior chamber**|**normal**|normal, or **cells and flare**|**SHALLOW**|**+++ cells and flare**|\n|**Other**|± **preauricular lymphadenopathy**|—|**COLOURED HALOS around light**|± **posterior synechiae**|\n\n### ⚠️ The four one-line signatures\n- **Conjunctivitis:** the **only** column with **normal vision, normal pupil, normal IOP and NO photophobia**, and **conjunctival** rather than ciliary injection.\n- **Keratitis:** **photophobia +++** with a **stained corneal defect**, normal pupil and IOP.\n- **Acute glaucoma:** **markedly raised IOP**, a **mid-dilated vertically oval fixed pupil**, a **shallow chamber**, a **cloudy cornea** and **coloured halos**.\n- **Acute iritis:** a **miotic sluggish pupil**, **keratic precipitates**, **+++ cells and flare**, **posterior synechiae**, and an IOP that **can go either way** — trabeculitis raises it, ciliary shutdown lowers it.\n\n### ⚠️ This is NOT `rdm-5`'s grid, and neither replaces the other\n- **This one** is book **chapter 1**, four columns, and the only one carrying **acute iritis** as a full column.\n- **`rdm-5`** is book **chapter 4** (`L37`), **six** columns splitting conjunctivitis into **bacterial / viral / allergic**, grading each symptom **0–3** with a per-row **\"referral advisable\"** flag.\n- **Both kept:** the chapter-4 grid grades severity, the chapter-1 grid names signs.\n\n*Entities: `cnj-2` conjunctivitis, `cor-3`–`cor-8` keratitis, `glc-14` acute angle-closure, `uv-5` anterior uveitis. Conjunctival vs ciliary injection `rdm-2`, `va-10`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.1 p.40, Table (1-2) cell by cell",
        "qs": []
      },
      {
        "id": "vis-6",
        "w": "high",
        "h": "Other causes of red eye, by anatomical site",
        "body": "**The second table: by WHERE, not by what** — which is how a red eye is actually examined, front to back.\n\n|Site|Causes|\n|---|---|\n|**Lids / orbit / lacrimal**|**hordeolum · blepharitis · entropion / ectropion · foreign body or laceration · dacryocystitis · preseptal or ORBITAL CELLULITIS**|\n|**Conjunctiva / sclera**|**conjunctivitis · subconjunctival haemorrhage** [sic *\"Subenivactival\"*] **· dry eye · pterygium · episcleritis** [sic *\"Eriscleritis\"*] **/ scleritis**|\n|**Anterior chamber**|**anterior uveitis** (iritis / iridocyclitis) **· acute glaucoma · hyphaema · hypopyon**|\n|**Cornea**|**foreign body**, including **contact lenses** **· abrasion · laceration · ulcer**|\n|**Others**|**trauma · post eye surgery · topical drugs**, e.g. **prostaglandin analogues** **· endophthalmitis**|\n\n- **⚠️ Two emergencies in this list:** **orbital cellulitis** and **endophthalmitis**, both of which reappear on Table (1-4) (`vis-9`).\n- **⚠️ The drug row is the unexpected one:** **prostaglandin analogues** — first-line anti-glaucoma drops — **cause conjunctival hyperaemia**, so a red eye in a glaucoma patient may be the treatment, not the disease.\n\n### The module's own version\n- **`L1,2` splits it by severity instead** — *most important*: **conjunctivitis, keratitis, acute iritis, acute NAG**; *other causes*: **subconjunctival haemorrhage, episcleritis, scleritis, corneal FB, corneal abrasion**.\n- **⚠️ The two grids answer different questions:** the deck's triages, the book's searches.\n\n*Red eye as a chapter `red-1`–`red-11`, `rdm-1`–`rdm-10`. Orbital cellulitis `orb-9`; endophthalmitis `cts-6`; pterygium `cnj-13`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.1 p.41; L1,2 lines 631–642",
        "qs": []
      },
      {
        "id": "vis-7",
        "w": "must",
        "h": "The five boxed presentations — pain, painless loss, flashes, floaters, photophobia",
        "body": "### 3. Acute PAINLESS loss of vision — six\n**The six:** **vitreous haemorrhage · central retinal artery occlusion** *(sudden)* **· central retinal vein occlusion** *(acute)* **· retinal detachment · anterior ischaemic optic neuropathy · optic neuritis**.\n- **⚠️ The whole list is BEHIND the iris** — retina, vitreous, optic nerve. The pain-sensitive structures are the cornea, anterior uvea and the pressure-bearing coats, and none is involved. **A quiet white eye that cannot see is a posterior-segment or optic-nerve eye.**\n- **⚠️ The one exception:** **optic neuritis hurts on eye movement** while the eye stays white.\n\n### 4. Ocular pain — eight\n**The eight:** **herpes zoster ophthalmicus · trauma / foreign body · stye / hordeolum internum · keratitis / corneal abrasion / corneal ulcer · acute glaucoma · acute uveitis · scleritis / episcleritis · optic neuritis** — **with ocular movements**.\n- **⚠️ Sorted by depth the list becomes a plan:** **surface** (foreign body, abrasion, stye) → **cornea** (keratitis, ulcer) → **coats** (scleritis) → **anterior chamber and pressure** (uveitis, acute glaucoma) → **nerve** (optic neuritis, the only one where pain is on MOVEMENT).\n\n### 5. Flashes of light (photopsia) — three\n**The three:** **posterior vitreous detachment · retinal tear / detachment · migraine with aura** [sic *\"Migrane\"*].\n- **⚠️ Two of the three: one disease, two moments.** A PVD tugging on the retina flashes; if the tug tears it, the flash was the warning. **New photopsia is examined, not reassured.**\n- **Migraine differs:** its aura is **bilateral, builds over minutes, is followed by headache**; a traction photopsia is **monocular, instantaneous, peripheral** *(the discrimination is not taken from the course material)*.\n\n### 6. Floaters — five\n**The five:** **posterior vitreous detachment · vitreous haemorrhage · retinal tear / detachment · intermediate uveitis · posterior uveitis**.\n- **⚠️ Flashes AND floaters:** the classic **retinal-tear** presentation, and a same-day examination — three of five entries are shared with the flash list.\n- Inflammatory cells in the vitreous float exactly as blood and collagen do, which is why the two uveitis entries are here.\n\n### 7. Photophobia — severe intolerance of light — six\n**The six:** **keratitis / corneal abrasion / corneal ulcer · acute angle-closure glaucoma · iritis · migraine · subarachnoid haemorrhage** [sic *\"haemorrhoge\"*] **· meningitis / encephalitis**.\n- **⚠️ Half this list is NOT an eye disease.** **Photophobia with a WHITE eye and a headache is a neurological emergency until excluded** — the most useful line on the page.\n- *Table (1-2) grades photophobia **+++** keratitis, **++** iritis, only **+** acute glaucoma; `rdm-5`'s chapter-4 grid grades acute glaucoma **1 of 3, the lowest of the three dangerous eyes**. The two agree.*\n\n*CRAO and CRVO `vsc-1`–`vsc-6`; vitreous haemorrhage `rd-9`; AION and optic neuritis `onv-10`, `onv-7`; herpes zoster ophthalmicus `cor-6`, `sys-12`; stye `lid-2`; PVD, tear and detachment `rd-1`–`rd-4`; intermediate and posterior uveitis `uv-3`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.1 pp.41–42, all five green boxes",
        "qs": []
      },
      {
        "id": "vis-8",
        "w": "must",
        "h": "Table (1-3) — monocular versus binocular diplopia",
        "body": "**The most efficient question:** cover one eye. **If the doubling goes it is binocular; if it stays it is monocular** — and the two have nothing in common.\n\n| |**BINOCULAR diplopia**|**MONOCULAR diplopia**|\n|---|---|---|\n|**Definition**|double vision **when BOTH eyes are open**; **DISAPPEARS when either eye is occluded**|double vision **IN ONE EYE**; **REMAINS even after occlusion of the other**|\n|**The fault is in**|**ALIGNMENT** — the two eyes point differently|**OPTICS** — one eye forms two images by itself|\n|**Causes**|**incomitant strabismus:** **III, IV, VI nerve palsy · myasthenia gravis · muscle restriction or entrapment · thyroid ophthalmopathy**. Plus **anisometropia when corrected by glasses**|**lens subluxation · iridodialysis · incipient cataract · astigmatism · mucous strands in the tear film**|\n\n- **⚠️ Binocular diplopia: NEUROLOGICAL or ORBITAL** — nerve, junction, muscle, or the space the muscle sits in. **Monocular diplopia is REFRACTIVE** and never a nerve palsy.\n- **Why anisometropia is binocular:** the fault is the **unequal image sizes** the two spectacle lenses produce — **aniseikonia** — which the brain cannot fuse *(the term is not taken from the course material)*.\n- **⚠️ Iridodialysis: the eye has TWO apertures** — the torn iris root leaves a second pupil, and each forms its own image.\n\n### The six questions to ask about a diplopia\n1. **Binocular or monocular?** 2. **Sudden or gradual onset?** 3. **Constant, or transient?**\n4. **Direction of the displaced images — horizontal, vertical or diagonal?**\n5. **Is there associated PAIN?** 6. **Same degree in all positions of gaze, or does it vary?**\n\n- **⚠️ Question 5 is the emergency screen:** a **painful** third nerve palsy with a **dilated pupil** is a **posterior communicating artery aneurysm** until proved otherwise, and it is on Table (1-4) as **life-threatening** (`vis-9`).\n- **Question 6: concomitant versus incomitant** — the answer that names a paretic muscle (`pup-8`, `sqt-3`).\n- **Question 3 is the myasthenia question:** transient, **variable and fatigable**, worse at the end of the day.\n\n*Cranial nerve palsies `mot-2`–`mot-6`; myasthenia and thyroid eye disease `mot-8`, `orb-6`; lens subluxation `cat-10`; iridodialysis `trm-7`, `va-12`; astigmatism `ast-1`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.1 p.42, Table (1-3) and the six questions verbatim",
        "qs": []
      },
      {
        "id": "vis-9",
        "w": "must",
        "h": "Table (1-4) — the ocular emergencies, sight and life",
        "body": "**The preamble:** they require **URGENT ophthalmology consultation for proper management**. Two columns, and the second is the one usually missed.\n\n### VISION-THREATENING — twelve\n**The twelve:** **chemical burns · central retinal artery occlusion · acute angle-closure glaucoma · acute iritis · endophthalmitis · gonococcal conjunctivitis · lid or globe lacerations · corneal ulcer · retinal detachment · intraocular foreign body · orbital haemorrhage · giant cell arteritis** (temporal arteritis) [sic *\"Temporal arteritist\"*].\n\n- **⚠️ Chemical burns are first for a reason:** the **only ocular emergency treated BEFORE the history** — irrigate immediately and at length, then ask.\n- **⚠️ Gonococcal conjunctivitis is listed:** ordinary conjunctivitis is not — it perforates an **intact** cornea, which almost nothing else does.\n- **Giant cell arteritis: it takes the SECOND eye** — untreated it blinds the fellow eye within days, so it is treated on suspicion.\n\n### ⚠️ LIFE-THREATENING — five, each with what must be excluded\n\n|Presentation|What must be excluded|\n|---|---|\n|**Acute proptosis**|**cavernous sinus thrombosis**, or **carotid–cavernous fistula**|\n|**Oculomotor (III) palsy with INTERNAL ophthalmoplegia** — a **dilated fixed pupil**|**intracranial aneurysm**, or a **compressive lesion**|\n|**Papilloedema**|**raised intracranial pressure**|\n|**Orbital cellulitis**|*(the book names no exclusion — the threat is cavernous sinus spread and intracranial abscess, not taken from the course material)*|\n|**Leukocoria** — a **white reflex**|**RETINOBLASTOMA**|\n\n- **⚠️ The second column is the teaching.** Each of the five is an **eye sign whose cause is not in the eye**; the eye is simply where it becomes visible first.\n- **⚠️ Why the pupil decides a III palsy:** the parasympathetic fibres run on the **surface** of the nerve, so **compression** (aneurysm, tumour) takes the pupil early while **ischaemia** (diabetic, hypertensive) spares it. **A dilated pupil turns a palsy into a scan** *(the mechanism is not taken from the course material; the book gives the rule, not the reason)*.\n- **`L1,2`: the same two columns, WITHOUT the bracketed exclusions** — which are the book's addition and the useful half.\n\n*Chemical burns `trm-1`; CRAO `vsc-1`; acute angle-closure `glc-14`; endophthalmitis `cts-6`; globe laceration and IOFB `trm-9`, `trm-10`; retinal detachment `rd-4`; orbital haemorrhage and cellulitis `orb-13`, `orb-9`; cavernous sinus thrombosis and CCF `orb-9`, `orb-11`; papilloedema `onv-4`; leukocoria and retinoblastoma `wht-1`, `wht-7`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.1 p.44, Table (1-4) verbatim including the bracketed exclusions; L1,2 lines 643–658",
        "qs": []
      },
      {
        "id": "vis-10",
        "w": "know",
        "h": "The fifteen popular misconceptions — and what is actually true",
        "body": "**⚠️ A bare list, corrected NOWHERE:** the book prints the fifteen and answers none. Verified page by page: no answer stands beside any item. The corrections below are **supplied**, and every one is tagged.\n\n|The misconception, as printed|What is true *(not taken from the course material)*|\n|---|---|\n|**Prolonged reading harms the eyes**|it causes **asthenopia** — fatigue, reversible; no structural damage|\n|**A wrong prescription damages the eyes**|it blurs and fatigues; **in an adult it damages nothing**. In a **child** an uncorrected error causes **amblyopia**|\n|**Getting used to glasses is harmful**|clear vision is simply preferred once experienced|\n|**Glasses cure the error, so they can be stopped**|they **correct while worn** and change no axial length|\n|**Sitting close to the television damages a child's eyes**|it is a **SIGN of myopia, not a cause**|\n|**Elderly people exhaust a vision reserve**|**there is no reserve**; use does not consume sight|\n|**Weak eyes should be rested to strengthen them**|rest strengthens nothing; the **correction** does|\n|**Childhood squint outgrows itself**|**⚠️ THE DANGEROUS ONE.** A constant deviation at any age is **referred**; untreated it causes **amblyopia**. Only **pseudoesotropia** from epicanthus resolves|\n|**Annual refraction change in teenagers is a bad sign**|**progression is normal** while the eye is growing|\n|**A cataract grows back**|the lens does not return; **posterior capsular opacification** looks identical and is treated by **YAG capsulotomy**|\n|**A cataract must be \"ripe\" before surgery**|**obsolete** — surgery is indicated by **visual need**; a hypermature lens is **harder** to remove and risks **phacolytic glaucoma**|\n|**Myopes become hypermetropic with age and vice versa**|**presbyopia** is loss of ACCOMMODATION, not a change of error; a myope may read unaided, hence the myth|\n|**Reading a newspaper unaided in old age is a sign of health**|**⚠️ it is often NUCLEAR SCLEROSIS** — the myopic shift of \"second sight\", an early cataract|\n|**A contact lens can be lost behind the eye**|**anatomically impossible** — the **conjunctival fornix** is a closed cul-de-sac|\n|**Headache is always ocular**|most headaches are not; **refractive** headache is dull, frontal, worse with near work|\n\n- **⚠️ Two are dangerous, not merely wrong:** *\"crossing of the eyes will disappear\"* delays amblyopia treatment past the critical period, and *\"reading without glasses is a sign of healthy eyes\"* reads an early cataract as good health.\n- **Why a textbook prints them:** every one is a sentence a patient will say back to you, and the history (`int-2`) is where they surface.\n\n*Presbyopia and second sight `ast-7`, `cat-4`; amblyopia `sqt-9`; posterior capsular opacification `cts-6`; phacolytic glaucoma `cat-9`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.1 p.44, the fifteen items transcribed exactly; every correction is supplied and tagged, because the book prints none",
        "qs": []
      },
      {
        "id": "vis-11",
        "w": "know",
        "h": "What this chapter hands on, and the grid it does not replace",
        "body": "**§14.5 register.** Three rows filed; one row aimed at this chapter closed.\n\n|Deferred|Owed to|State|\n|---|---|---|\n|**Every entity in Tables (1-1) to (1-4)**, as a disease|the organ chapters|✅ **all merged.** This chapter writes the GRIDS and points at each account by id|\n|**Table (1-2) versus `rdm-5`'s Tables 4-1 and 4-2**|`op-red-mgmt`|⚠️ **merged. NEITHER REPLACES THE OTHER** — different book chapters, different columns. Both kept; `vis-5` says why|\n|**Giant cell arteritis as an emergency WORK-UP** — ESR, CRP, temporal artery biopsy, immediate steroid|`op-neuro`|☐ ⚠️ **`temporal arteritis` and `ESR` return ZERO module-wide** (recorded by `op-systemic`'s own row). GCA is **named in two grids here and expanded nowhere**. Nothing was invented|\n\n### ✅ The row aimed at this chapter — delivered\n- **The row:** `op-red` (`L1,2` ll.629–659) → `op-intro`, `op-vissym`, `op-acute` — the module's own **red-eye cause grid** and **ocular emergencies grid**, with the **life-threatening column and the non-red entries left whole**.\n- **Second clause re-verified today:** `Life-threatening` and `Vision-threatening` returned **zero** across `theory.ophtho.js`; the only hits for `Acute proptosis` and `internal ophthalmoplegia` sat inside `red-1`'s closing cross-reference sentence, as names with no account.\n- **✅ Delivered:** the cause grid in `vis-6`, and the emergencies grid **in full, both columns, with the book's bracketed exclusions**, in `vis-9`.\n\n### ⚠️ The budget row, and it was obeyed\n- **`op-va` (`L1,2` lines 438–613, 866 words)** is counted to `op-va` and **was NOT re-counted here**; lines 390–437 were \"cited only\" by `op-va` and are likewise not counted. This chapter counted **lines 1–389 in part, and 614–659**.\n\n### What this chapter deliberately does NOT contain\n- **The examination** — `va-*`, `pup-*`, `ant-*`, `int-8`–`int-11`. **The management** of any entity on the four tables.\n- **⚠️ Field-defect vocabulary:** nothing beyond **bitemporal** and **homonymous hemianopia** — the chapter names no other, anywhere in 43 pages (`int-9`).\n- **⚠️ Corrections to the misconceptions:** the book supplies none, and `vis-10` says so on every row.\n\nSrc: register per START-HERE.md §14.5; the delivered row verified against app\\data\\theory.ophtho.js on 2026-08-18",
        "qs": []
      }
    ]
  }
};
