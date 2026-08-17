/* op-va — "VA, Field, Lid, Lac, Orbit", Ophthalmology.
   Written 2026-08-17 under START-HERE.md §14 (slide-density revision notes),
   §14.1 (budget), §14.2 (two-sided coverage floor), §14.3 (telegraphic),
   §14.3a (layout) and §14.5 (deferral register), plus
   content\ophtho\theory-plan.md and CLAUDE.md §4/§5.
   Shape copied from content\ophtho\theory-drafts\op-pupil.draft.js — same
   deck, same house style, written 2026-08-16.

   ==========================================================================
   ⚠️⚠️ THE SCOPE WAS WIDENED, DELIBERATELY, AND HERE IS THE MEASUREMENT
   ==========================================================================
   The brief named `L3,4) Clinical- Ocular examination` as the SOLE source and
   lines 1–171 as my range. I read that range first, then read my sixteen
   questions, and the two do not meet:

     **NONE of the sixteen questions filed to `op-va` is answerable from
     L3,4 lines 1–171. Not one.**

   All sixteen test visual acuity, the pinhole, the low-vision ladder, visual
   FIELD testing, colour vision, or paediatric acuity. L3,4 lines 1–171 are
   eyelid, lacrimal, orbit, conjunctiva, cornea, sclera, iris, lens and
   anterior chamber — nine structures inspected, and the deck's own
   transcriber wrote the reason on line 418:

     "Visual acuity testing, the Snellen chart, the pinhole, CF/HM/PL/NPL,
      legal blindness, visual FIELD testing, confrontation, the Amsler grid,
      colour-vision testing and the Ishihara plates … are in
      `L1,2) Ocular Anatomy, Symptomatology & Basic Eye Examination` instead —
      this deck begins AFTER visual acuity and deliberately does not repeat
      it."

   §14.2's floor is not optional: **every linked question's key and its
   discriminator must be findable in the notes.** Written from L3,4 alone this
   chapter would have scored 0/16 on that test. The chapter is also NAMED
   "VA, Field, Lid, Lac, Orbit" — VA and Field come first in its own title.

   DECISION: **`L1,2` lines 438–613 — the Visual Acuity and Visual Field
   Testing block — are counted into this chapter and written here.** That is
   the §14.1(a) line-range standard, not a claim on the whole 659-line file.
   `L1,2` is a shared deck (theory-plan.md gives it to `op-intro` and
   `op-vissym`); a deferral row below tells both which lines are now spent.

   ==========================================================================
   THE DECKS, AND THE LINE RANGES THAT ARE MINE
   ==========================================================================
   DECK A: content\ophtho\lectures\L3,4) Clinical- Ocular examination.txt
     — Dr. Amr Elhady, 59 slides. Cited below as **L3,4**.
     ⚠️ BANKED VISUAL READ, NOT A TEXT EXTRACTION. `pdftotext` returns 59
     characters from the source PDF (one form feed per slide). An earlier chat
     rendered all 59 slides as fifteen 4-up contact sheets at 60 dpi and
     transcribed them. **Nothing was re-rendered for this chapter.**
     · lines   1–171 (slides  1–27) = **MINE**.
     · lines 172–403 (slides 28–59) = **`op-pupil`'s**, written and merged
       2026-08-16. Not written here, not counted here.
     · lines 404–428 = the transcriber's "NOT COVERED ANYWHERE IN THIS DECK"
       block. Meta, not lecture; counted to neither chapter. Used below to
       decide which gaps are real before anything was tagged.

   DECK B: content\ophtho\lectures\L1,2) Ocular Anatomy, Symptomatology &
           Basic Eye Examination.txt. Cited below as **L1,2**.
     · lines 438–613 = **MINE and COUNTED** — Visual Acuity (definition, the
       fraction, the three charts, the conversion table, the eight-step
       method, recording), the Pinhole Test, the low-vision ladder, and
       Visual Field Testing (confrontation, Amsler, perimetry, light
       projection).
     · lines 390–437 = **CITED ONLY, NOT COUNTED** — the "Minimal
       Requirements", "Additional examination items" and "Tools required"
       frame. It restates L3,4 slides 2–4, whose words are already inside my
       963. Counting it would bill the same frame twice.
     · lines 1–389 and 614–659 = **`op-intro`'s / `op-vissym`'s** — anatomy,
       symptomatology, the loss-of-vision / red-eye / emergencies tables.
       Not written here, not counted here.

   ==========================================================================
   THE BUDGET
   ==========================================================================
   TERM 1a — `sed -n '1,171p' 'L3,4….txt' | wc -w`  = **963**
   TERM 1b — `sed -n '438,613p' 'L1,2….txt' | wc -w` = **866**
   TERM 1  — 963 + 866                               = **1,829**
   TERM 2  — 25 × 16 linked questions                = **400**  (never governs,
             exactly as theory-plan.md predicted for all 26 ophtho chapters)
   BUDGET  = max(1,829, 400), floor 600              = **1,829 words**
   OPERATIVE CEILING (§14.1) = **~2,400 body words / ~10 printed pages**.

   ⚠️ NOT A DIAGRAM DECK BY THE §14.1 TEST, despite L3,4 being image-only.
   Words per line is **5.6** over my L3,4 range and **4.9** over my L1,2
   range — both far above the <2 threshold that forces the question term.
   Same artefact `op-pupil` named: TERM 1 here is measuring a human
   transcriber's careful reading, not a text layer. It is usable for exactly
   that reason, and is NOT usable on the fourteen ophthalmology decks still
   owed a visual read.

   PREDICTED OVERRUN, stated up front per §14.1 rather than discovered after.
   Costed by entity, then framework slides one by one, then grids at
   rows × columns — the `ent-neck` and `ent-phon` lessons:

     FRAMEWORK SLIDES, costed individually
      · examination sequence + tools (L3,4 sl.2–4)              ~ 110 w
      · VA definition + the fraction + three charts             ~ 110 w
      · the VA conversion table, 10 rows × 3 cols = 30 cells    ~  70 w
      · the eight-step VA method + the recording example        ~ 155 w
      · pinhole method + the improve/worsen grid, 2 × 3         ~ 130 w
      · the low-vision ladder, four rungs                       ~ 130 w
      · field-test selection grid, 4 rows × 2 cols              ~  70 w
      · confrontation, five steps + the N.B.                    ~ 150 w
      · light projection, GLP/BLP                               ~  45 w
      · upper-lid eversion, six steps across two slides         ~ 120 w
      · fluorescein staining, five bullets                      ~ 110 w
      · AC depth penlight test, two steps                       ~  75 w
      · the shallow/deep AC table, 5+3 rows × 2 cols            ~  60 w
     ENTITY LABEL LISTS (~90 w of floor each is the §14.1 number, but these
     are LABEL slides with no definitions printed, so they run lighter)
      · eyelid 8 · lacrimal 3 · orbit 1                         ~ 170 w
      · conjunctiva 6 signs + 3 rednesses                       ~ 130 w
      · cornea 5 signs                                          ~  80 w
      · sclera 2 · iris 3                                       ~ 100 w
      · lens: pupil colour 3 + cataract stages 4 + opacities +
        subluxation                                             ~ 200 w
      · AC contents 3                                           ~  50 w
     SIX TAGGED GAP-FILLS, ~50 w each                           ~ 300 w
     14 `###`/section heads and `Src:` lines                    ~  90 w
                                                        TOTAL  ~2,455 w

   So the overrun was forecast BEFORE writing: **~2,455 predicted against a
   1,829 budget (+34 %)**, and predicted to land essentially ON the ~2,400
   operative ceiling rather than under the formula. The formula's number is
   unreachable here for the reason §14.1 names as the survey-chapter failure
   mode, compounded: **this chapter is fourteen structures inspected plus a
   whole second deck's examination sequence**, and a label list has no fat in
   it. Reaching 1,829 would cost the conversion table, the confrontation
   method and the cataract stages — one of them a register row owed to me.

   ⚠️⚠️ MEASURED OUTCOME — REWRITTEN BY THE HUB 2026-08-17. THE ELEVENTH
   HEADER FAULT, AND THE SAME OLD SHAPE.

   This block originally read "**14 sections · 2,331 body words · intro 40
   words · 9.7 printed pages**", under a paragraph asserting the count was
   taken from disk AFTER the final body edit. **It was not.** The agent hit
   the session limit while writing `va-6`, and `va-6` — 273 words, the
   chapter's largest section — went in AFTER the measurement. It landed
   complete: sub-headings, five linked questions, its tags and its `Src:`
   line. The file was whole; only the number predated it.

   That is the fifth-occurrence shape exactly — an honest measurement of an
   earlier state, presented as final — and the tell was the arithmetic: the
   gap between the claimed 2,331 and the real total is the size of the one
   section the agent was still writing when it died.

   MEASURED BY THE HUB FROM DISK, after the anchor pass below:

     **14 sections · 2,596 body words · intro 44 words · 10.8 pages** at the
     ÷240 estimator · **16 of 16 questions linked** · 0 paragraphs over 55
     words · 0 unanchored bold leads · every section carries one `Src:` line.

   That is **+42 % over the 1,829 budget** and **~196 words OVER the ~2,400
   operative ceiling**. §14.1 rules that band on PAGES MEASURED, never on the
   estimate — so this chapter is printed and counted before it is accepted,
   and the printed number is recorded at the splice. The bill is itemised
   above and nothing was cut to reach a figure.

   ⚠️ HUB ANCHOR PASS, 2026-08-17. The agent died before its §14.3a layout
   pass. Five bold leads carried no `:`/`—` inside 44 characters and so got no
   `mdLead()` anchor: two chained label lists in `va-11`, one in `va-13`, and
   two sentence-leads in `va-13`. All five fixed by MOVING THE BOLD BOUNDARY
   or inserting an early colon — the body word count moved by ONE word across
   the whole file, which is the evidence that no fact was touched.

   ==========================================================================
   §14.5 — THE TWO REGISTER ROWS OWED **TO** THIS CHAPTER
   ==========================================================================
   Both were checked against the deck's own lines before being ticked, because
   a register row is a claim by the deferring chapter, not a fact.

   ROW 1 — from `op-pupil`, L3,4 slide 20. "Lens: Pupil colour IN FULL — the
   cataract stages and the bright-vs-dim red reflex of nuclear sclerosis
   versus immature senile cataract."
     ✅ **DELIVERED** → section `va-13`.
     ⚠️ **PARTLY MIS-STATED — the SLIDE ATTRIBUTION is wrong for half of it.**
     Verified against L3,4 lines 123–129 and 131–133:
       · The bright-vs-dim red reflex IS on slide 20, verbatim:
         "Grayish in old age — Nuclear sclerosis (bright RR) / IMSC (Dim RR)".
         ✅ row correct.
       · **"The cataract stages" are NOT on slide 20.** Slide 20 names only
         two lens states (IMSC, mature). The four-stage list —
         **IMSC | MSC | Hypermature shrunken type | Morgagnian** — is on
         **slide 21**, a different slide.
     No delivery consequence: slide 21 is also inside lines 1–171, so both are
     written here. But the row as written would have let a reader believe
     slide 20 carried the stages, and it does not. Corrected on the record.
     ✅ Cross-checked against the merged `pup-9` in app\data\theory.ophtho.js:
     it carries the black/grey/white triad only and does NOT carry the
     bright-vs-dim distinction. The row's core claim is exact.

   ROW 2 — from `op-glauc`, L3,4 slides 24–26. The **>2/3 nasal iris shadow**
   plus the **shallow/deep anterior-chamber causes table**.
     ✅ **DELIVERED** → section `va-14`. **ROW VERIFIED EXACT on every count:**
       · Slide 24 (lines 132–140) prints it verbatim: "If two-thirds or more
         of the nasal iris is in shadow, the chamber is probably shallow and
         the angle narrow." ✅
       · Slide 26 (lines 149–160) is the ⚠️ TABLE — shallow: hypermetropia,
         angle closure glaucoma, intumescent cataract, perforated corneal
         ulcer, leakage from surgical wound; deep: high myopia, aphakia,
         buphthalmos. ✅
       · Both slides fall at lines 132–160, inside 1–171 — **mine, not
         `op-pupil`'s.** ✅
       · `opqb-t1-33` is filed to `op-glauc` and its stem does turn on
         ">2/3 nasal iris shadow". ✅
       · The merged `glc-12` carries the content with
         "Src: L3,4 sl.24–26 (`op-va`'s deck — cited only, not counted)", so
         the words really were unspent. ✅
     ⚠️ ONE CONSEQUENCE, STATED RATHER THAN HIDDEN: slides 24–26 are now
     written in TWO chapters. That is the §14.1 declared case — `op-glauc`
     needed it for its own question, I need it because it is my range and my
     TERM 1. Neither is wrong; the duplication is deliberate.

   ==========================================================================
   §14.5 — ROWS THIS CHAPTER OPENS
   ==========================================================================
   | Deferred from | Fact | Owed to | Written? |
   |---|---|---|---|
   | `op-va` (**L1,2** lines 438–613) | **The whole VA + visual-field examination block is now COUNTED HERE** — definition, the fraction, E/Landolt-C/Snellen charts, the 10-row conversion table, the eight-step method, pinhole, CF/HM/PL/NPL, confrontation, Amsler, perimetry, light projection. **`op-intro` and `op-vissym` must NOT re-count these 866 words** (deferring and counting are opposites, §14.1(b)). They may cross-reference this chapter freely | `op-intro`, `op-vissym` | ☐ |
   | `op-va` (L3,4 sl.5–6) | **The eight eyelid labels as ENTITIES** — stye, chalazion, entropion, ectropion, ptosis, lagophthalmos, BCC, xanthelasma. L3,4 prints labels on photographs and no definitions; `L5) Eyelid disease` (47 slides, `.pptx`) holds the real teaching and prints stye/hordeolum, chalazion, entropion, ectropion, lagophthalmos, xanthelasma, ptosis with its levator-function grades. Listed here as an inspection checklist only. **No `op-va` question tests any of them** — verified across all sixteen | `op-lid` | ☐ |
   | `op-va` (L3,4 sl.7) | **Dacryoadenitis, dacryocystitis and the regurgitation test as entities** — labels only on this deck. `L9) lacrimal system.` is the owning deck and its calibration read (theory-plan.md) found Jones I and Jones II result-to-diagnosis tables, the tear-film layer thicknesses and the accessory-gland eponyms, none of which are here. **No `op-va` question tests them** | `op-lac` | ☐ |
   | `op-va` (L3,4 sl.11–13) | **Papillae vs follicles vs giant papillae, trachomatous scarring T4, PTCs, pterygium**, and the **conjunctival vs ciliary injection discrimination** — labels only here. `L6) Conjunctiva` (66 slides, `.pptx`) and `L37) Red Eye` carry the discrimination. **No `op-va` question tests it** | `op-conj`, `op-red` | ☐ |
   | `op-va` (L3,4 sl.14–15) | **Corneal foreign body, erosion, opacity/scarring, infective keratitis, dendritic ulcer as entities** — labels only here; the fluorescein METHOD (sl.16) is written in full because it is examination technique. `L15,16) Cornea` is text-sufficient and owns the diseases | `op-cornea` | ☐ |
   | `op-va` (L3,4 sl.17–18) | **Episcleritis vs scleritis**, and **iridodialysis / posterior synechiae / rubeosis iridis** — labels only here. `L13,14) Uvea & Sclera` extracts ZERO characters over 41 pages and has no cache at all (theory-plan.md), so these receiving chapters are blocked on a visual read | `op-sclera`, `op-uvea` | ☐ |
   | `op-va` (L3,4 sl.21–23) | **The four cataract stages and lens subluxation as DISEASES** — named here with one-line glosses because register row 1 demands slide 21, but the staging detail (shadow test, VA at each stage, the red-reflex column) is `L17`/`L18`'s and is cited only, not counted | `op-cat` | ☐ |
   | `op-va` (L3,4 sl.27) | **Hyphaema, hypopyon, and cells & flare as DISEASES** — listed here as anterior-chamber contents, which is what the slide is. The uveitis grading behind "cells & flare" is not on this deck | `op-uvea`, `op-trauma` | ☐ |

   ==========================================================================
   SIX FACTS SUPPLIED FROM GENERAL KNOWLEDGE AND TAGGED (CLAUDE.md §4)
   ==========================================================================
   Every one was greped across ALL 27 cached ophthalmology lecture files
   before being tagged — the "read the slide before declaring a gap" rule,
   which has paid thirteen times — and checked against the transcriber's own
   NOT-COVERED block.

   1. **CSM fixation testing** (va-6) — `grep -ri "CSM"` over
      content\ophtho\lectures\ returns **zero hits in all 27 files**. Genuine
      gap. Supplied: Central, Steady, Maintained, and the objection-to-
      occlusion sign that reads it.
   2. **Preferential looking** (va-6) — `grep -ri "referential"` returns
      **zero hits in all 27 files**. Genuine gap. Supplied.
   3. **Legal blindness / the 3/60 figure** (va-6) — `grep -rn "3/60"` returns
      **zero hits in all 27 files**; "blindness" hits only Night Blindness,
      Colour blindness (L1,2) and cataract-epidemiology lines in L17/L18.
      Genuine gap, and the transcriber's block lists it explicitly. Supplied,
      with a note that the bank writes "≤ 3/60" where WHO writes "< 3/60".
   4. **The referral threshold below 6/6** (va-6) — not stated as a referral
      rule in any cached file. The nearest sourced anchor is L1,2's own
      pinhole trigger, "If 6/6 is not achieved…", which is written as the
      sourced half; the referral consequence is supplied and tagged.
   5. **Ishihara plates** (va-8) — `grep -ri "shihara"` hits **one line in all
      27 files, and it is the transcriber's NOT-COVERED block itself** (L3,4
      line 418), not a slide. L1,2 names "Colour vision testing" among the
      complementary tests and stops. The test's name and method are supplied.
   6. **"Stenopic aperture" as a synonym for the pinhole** (va-4), and **the
      mechanism by which a pinhole makes MACULAR disease worse** — neither
      phrase appears in any cached file (`grep -ri "tenopic"` = zero). L1,2
      prints only "If VA worsens, another ocular pathology is causing the
      visual impairment". Both supplied and tagged.

   ==========================================================================
   OMISSIONS — deliberate, and on the record
   ==========================================================================
   · **Slide 1** is a title card. No content.
   · **The nine structures' PATHOLOGY** is deferred, not dropped — eight
     register rows above, each naming its receiving chapter. L3,4 slides 5–8,
     11–15, 17–18, 21–23 and 27 are **photograph plates with labels and no
     printed definitions**; the labels are all carried here as inspection
     checklists, which is what the deck itself teaches. Writing them as
     entities would duplicate six other chapters and cost ~1,400 words.
   · **Proptosis (slide 8)** is two photographs with no text. It is
     cross-referenced to `op-orbit`, which is already merged and carries the
     two mechanisms, the five "commonest" facts, the direction rule and the
     >20 mm / 2–3 mm numbers from its own banked deck L10.
   · **The IOP and pupil halves of L1,2's "five vital signs" slide** are named
     in va-1 as part of the framework and then handed on — pupils, EOM and
     fundus to the merged `op-pupil`, IOP to the merged `op-glauc`.
   · **L1,2 lines 614–659** (loss of vision, red eye, ocular emergencies)
     are `op-vissym`'s and `op-intro`'s. Not written, not counted.
   · **`examiner-patterns.md` does not exist for ophthalmology and was not
     manufactured** — theory-plan.md forbids building one from 138 questions.
     Weighting below rests on the two decks' own structure.
   ========================================================================== */

var THEORY_DRAFT = {
  'op-va': {
    intro: 'The first four of the five vital signs, plus the inspection run. Acuity is a fraction and a ladder; the pinhole splits optical blur from disease; the field test is chosen by the acuity; then nine structures are looked at in a fixed order.',
    sections: [

{
  id: 'va-1', w: 'know',
  h: 'The examination — the order it is done in, and the tools',
  body: [
    '### The six steps, in the deck’s own order',
    '1. **Inspection:** eyelids, lacrimal, orbit, conjunctiva, cornea, sclera, iris, lens.',
    '2. **Anterior chamber:** depth and contents.',
    '3. **Pupillary reactions.**',
    '4. **Intraocular pressure (IOP) evaluation.**',
    '5. **Extraocular muscle actions.**',
    '6. **Fundus examination.**',
    '',
    '**The five vital signs of the eye:** visual acuity · visual field · pupils · extraocular movements · fundus — **± IOP** as the sixth.',
    '',
    '### The five tools',
    '- **Penlight** · **mydriatic eyedrops** · **topical anaesthetic drops** · **direct ophthalmoscope** · **fluorescein strips**.',
    '- **Named on the slide photographs:** tropicamide, **BENOX 0.4 %** (benoxinate), **FUL-GLO** fluorescein strips.',
    '',
    '### The slit lamp',
    '- **Used by:** the ophthalmologist, for the **anterior segment**.',
    '- **Also used for:** the **red reflex** and **fundus examination (biomicroscopy)**.',
    '',
    '*Steps 3–6 are written in `op-pupil`; the IOP number and its meaning in `op-glauc`.*',
    '',
    'Src: L3,4 sl.2–4; L1,2 lines 390–437 (cited only, not counted)'
  ].join('\n'),
  qs: []
},

{
  id: 'va-2', w: 'must',
  h: 'Visual acuity — the definition, the fraction, and the charts',
  body: [
    '**Visual acuity:** a measurement of the **smallest object a person can identify at a given distance**, compared with normal.',
    '',
    '**Recorded as a ratio** comparing the patient with a normal person.',
    '',
    '### The fraction, and what each number is',
    '',
    '- **The formula:** VA = **testing distance (6 m) ÷ the smallest line read**.',
    '- **Upper number:** the distance **the chart is from the patient** — always **6 m**.',
    '- **Lower number:** the distance **a normal eye reads that line from**.',
    '- **So 6/12 means:** sees at **6 m** what a normal eye sees at **12 m**.',
    '- **6 m (20 ft):** taken as **optical infinity** — accommodation at rest.',
    '',
    '### The three charts',
    '- **Snellen chart:** letters. Needs literacy.',
    '- **E-chart:** which way the strokes of the **E** point.',
    '- **Landolt C-chart:** where the **C’s opening** lies.',
    '',
    '### The conversion table',
    '',
    '|Metres|Feet|Decimal|',
    '|---|---|---|',
    '|**6/6**|20/20|**1.0**|',
    '|6/7.5|20/25|0.8|',
    '|6/9|20/30|0.67|',
    '|**6/12**|20/40|**0.5**|',
    '|**6/18**|20/60|0.33|',
    '|6/24|20/80|0.25|',
    '|6/30|20/100|0.2|',
    '|6/36|20/120|0.16|',
    '|**6/60**|20/200|**0.1**|',
    '|6/120|20/400|0.05|',
    '',
    'Src: L1,2 lines 438–470'
  ].join('\n'),
  qs: ['opqb-t1-38']
},

{
  id: 'va-3', w: 'high',
  h: 'Testing acuity at six metres — the method, and how it is recorded',
  body: [
    '### The eight steps',
    '1. **Ensure good illumination** of the room and the chart.',
    '2. **Position the patient at 6 metres** from the chart, sitting or standing.',
    '3. **Test one eye at a time** — **first without, then with spectacles** if available.',
    '4. **Occlude the other eye** with a plain occluder, card or palm — **never pressing on the eye**.',
    '5. **Ask for the direction** of the E strokes or the C opening, or for the Snellen letters.',
    '6. **Start at the top of the chart** (the **6/60 optotype**) and work downwards.',
    '7. **Record the smallest line read as a fraction** — e.g. 6/18.',
    '8. **Repeat for the other eye.**',
    '',
    '### Recording',
    '- **Report each eye separately, right eye first**, and state **with or without correction**.',
    '- **The deck’s own example:** without correction Rt 6/18, Lt 6/24; with correction Rt 6/6, Lt 6/12.',
    '',
    '*Pressing on the occluded eye distorts its cornea and invalidates the next reading (not in course material).*',
    '',
    'Src: L1,2 lines 471–508'
  ].join('\n'),
  qs: []
},

{
  id: 'va-4', w: 'must',
  h: 'The pinhole test — the one step that splits optical blur from disease',
  body: [
    '**The trigger, verbatim:** "**If 6/6 is not achieved, repeat VA testing using a pinhole occluder** (with or without spectacles)."',
    '',
    '**The principle, verbatim:** "**The use of the pinhole reduces the need to focus light entering the eye.**"',
    '',
    '### Reading the result',
    '',
    '|Pinhole result|The cause is|What follows|',
    '|---|---|---|',
    '|**VA IMPROVES**|**refractive error**|correctable with **spectacles or a new prescription**|',
    '|**VA WORSENS or does not improve**|**another ocular pathology**|the media, retina or optic nerve — dilate and examine|',
    '',
    '- **⚠️ The trap:** failing with the patient’s **own** glasses does **not** exclude refractive error — an out-of-date prescription is itself one.',
    '',
    '### Why worsening points at the MACULA',
    '- **The optics:** a pinhole **cuts retinal illumination** and restricts the image to the **central fovea alone** *(not in course material)*.',
    '- **The result:** a diseased fovea gets dimmer light and no optical help, so **macular oedema and AMD read worse** *(not in course material)*.',
    '- **Improve instead:** early cataract, myopic and hyperopic astigmatism, keratoconus.',
    '',
    '*The pinhole is also called a **stenopic aperture** — the same instrument, and the term the bank uses (not in course material).*',
    '',
    'Src: L1,2 lines 509–517'
  ].join('\n'),
  qs: ['opqb-t1-25', 'opqb-t1-26', 'opqb-t2-84', 'opqb-t2-92']
},

{
  id: 'va-5', w: 'must',
  h: 'When the top letter cannot be read — the low-vision ladder',
  body: [
    '**The question the deck asks:** "What if the patient cannot read the largest (top) letter at 6 metres?" Taken strictly in order.',
    '',
    '### The ladder',
    '1. **Walk the patient in —** one metre at a time, until the top letter is seen. **Record as 5/60, 4/60, 3/60**; the numerator is the new distance.',
    '2. **Nothing at 1 metre — count fingers.** Extend **two or more fingers** at varying distances **under 1 metre**.',
    '3. **Record the distance** at which counting is accurate — e.g. **CF 50 cm**.',
    '4. **Cannot count fingers — wave your hand.** If seen, record **hand movements (HM)**.',
    '5. **Cannot detect hand motion — shine a torch.** Seen = **perception of light (PL)**; not seen = **no perception of light (NoPL / NPL)**.',
    '',
    '### The ladder as one line',
    '**6/60 → 5/60 → 4/60 → CF → HM → PL → NPL.** Each rung is only tried after the one above has failed, and **NPL is the floor** — an eye with no light perception at all.',
    '',
    'Src: L1,2 lines 518–543'
  ].join('\n'),
  qs: ['opqb-t1-27', 'opqb-t1-28']
},

{
  id: 'va-6', w: 'must',
  h: 'The pre-verbal child, referral, and the blindness figure',
  body: [
    '**The problem:** every method above needs a patient who can name a letter or point a direction. **Under about three years none of them work** *(not in course material)*.',
    '',
    '### Testing a child who cannot read',
    '- **E-chart / Landolt C:** the deck’s literacy-free charts — but a direction must still be indicated.',
    '- **CSM:** the **fixation** test, and the bedside standard in infants *(not in course material)*.',
    '- **Preferential looking:** paired blank and striped cards; the finest stripe the infant looks at gives an acuity *(not in course material)*.',
    '',
    '### CSM, and objection to occlusion',
    '- **C — Central:** the corneal light reflex sits **centrally**.',
    '- **S — Steady:** fixation held, **no wandering or nystagmus**.',
    '- **M — Maintained:** fixation **held when the other eye is uncovered**.',
    '',
    '- **⚠️ The rule:** a child objects to having the **GOOD** eye covered — it forces vision through the bad one *(not in course material)*.',
    '- **Reading it:** resisting occlusion of the **RIGHT** eye means the right eye is better, so the **LEFT** is amblyopic.',
    '',
    '### The two thresholds',
    '- **Referral:** the deck’s trigger is that **6/6 was not achieved**. Below 6/6 uncorrected by pinhole, or with symptoms, is referred *(the rule is not in course material)*.',
    '- **Blindness (WHO):** **best-corrected VA ≤ 3/60** in the better eye *(not in course material)*.',
    '- **⚠️ A wording difference:** WHO writes the category **< 3/60**; the bank prints **≤ 3/60** and keys it — noted, key as printed.',
    '',
    'Src: L1,2 lines 459, 509–512 (the 6/6 trigger); CSM, preferential looking, the referral rule and the 3/60 figure supplied and tagged — zero hits across all 27 cached decks'
  ].join('\n'),
  qs: ['opqb-t1-29', 'opqb-t1-30', 'opqb-t2-78', 'opqb-t1-63', 'opqb-t1-39']
},

{
  id: 'va-7', w: 'must',
  h: 'Visual field testing — the acuity chooses the test',
  body: [
    '### Which test, and when',
    '',
    '|Test|Requirement / scope|',
    '|---|---|',
    '|**Confrontation**|**VA = 1/60 or better**|',
    '|**Light projection**|**VA less than 1/60**|',
    '|**Amsler grid**|the **central 10°** of the field|',
    '|**Perimetry**|**manual** or **automated**|',
    '',
    '- **Confrontation first:** no equipment, and it gives **gross detection of significant field defects**.',
    '',
    '### Confrontation — the method',
    '1. **Sit ONE metre in front of the patient**, both your eyes level with theirs.',
    '2. **The patient covers the left eye** with the left palm.',
    '3. **You close your right eye** — preferably with your palm.',
    '4. **The patient fixates your left eye**, then **counts your fingers** held midway, in each of **the 4 quadrants**.',
    '5. **Repeat for the patient’s left eye**, then **record the result**.',
    '',
    '**The principle:** the **examiner’s left eye** field is the reference for the **patient’s right eye**, and vice versa.',
    '',
    '### The N.B. on the slide',
    '- **Alternative:** advance a finger **from the periphery** — superior, temporal, inferior, nasal — until **first seen**.',
    '- **⚠️ Limitation:** gives the field’s **outlines** but **not which quadrants are affected**.',
    '',
    '### Light projection',
    '- **For an eye below 1/60.** Penlight, other eye occluded.',
    '- **From each quadrant:** superior, inferior, temporal, nasal — the patient names the direction.',
    '- **Recorded as:** **good light projection (GLP)** or **bad light projection (BLP)**.',
    '',
    'Src: L1,2 lines 544–613'
  ].join('\n'),
  qs: ['opqb-t1-31', 'opqb-t1-40', 'opqb-t1-41']
},

{
  id: 'va-8', w: 'know',
  h: 'Colour vision — the complementary test',
  body: [
    '- **On the slide:** one of the three **complementary tests** — with upper-eyelid eversion and fluorescein staining. Named, and no more.',
    '',
    '### The test itself',
    '- **Ishihara pseudo-isochromatic plates:** the standard screen for **red–green** defects *(not in course material)*.',
    '- **How they work:** dots differ from the background **in hue but not brightness**, so only a normal trichromat reads the numeral *(not in course material)*.',
    '- **Not tested by them:** blue–yellow (tritan) defects, and acuity *(not in course material)*.',
    '',
    '*L1,2 lists **colour blindness** among the presenting symptoms; the symptom is `op-vissym`’s.*',
    '',
    'Src: L1,2 lines 424–428 (cited only, not counted); Ishihara supplied and tagged — the only "Ishihara" string in all 27 cached decks is L3,4’s own NOT-COVERED note'
  ].join('\n'),
  qs: ['opqb-t1-52']
},

{
  id: 'va-9', w: 'know',
  h: 'Eyelid, lacrimal and orbit — the inspection checklist',
  body: [
    '**These slides are labelled photographs.** The deck teaches *what to look for and name*; the diseases themselves belong to the chapters cited below.',
    '',
    '### Eyelid — "you may find"',
    '- **Stye** — acute lash-follicle abscess at the lid margin.',
    '- **Chalazion** — chronic painless meibomian granuloma in the tarsus.',
    '- **Entropion** — lid margin turned **in**; the lashes rub the cornea.',
    '- **Ectropion** — lid margin turned **out**; the punctum leaves the tear lake.',
    '- **Ptosis** — drooping upper lid.',
    '- **Lagophthalmos** — the lids **fail to close**, so the cornea dries.',
    '- **BCC** — basal cell carcinoma, the commonest lid malignancy.',
    '- **Xanthelasma** — yellow lipid plaques, typically medial.',
    '',
    '### Lacrimal — "you may find"',
    '- **Dacryoadenitis** — inflamed lacrimal **gland**; swelling is **upper outer** lid.',
    '- **Dacryocystitis** — inflamed lacrimal **sac**; swelling is **below the medial canthus**.',
    '- **+ve Regurge** — pressure over the sac returns fluid through the punctum, proving **nasolacrimal duct obstruction**.',
    '',
    '### Orbit',
    '- **Proptosis:** the only orbital sign this deck shows — a lateral view and a **"worm’s-eye" (submental) view** to compare globe projection between the two sides.',
    '',
    '*Lid disease is `op-lid`’s (`L5`), the lacrimal system `op-lac`’s (`L9`), and proptosis in full — mechanisms, causes by age, direction, the >20 mm and 2–3 mm numbers — is already written in `op-orbit`.*',
    '',
    '*Every gloss above beyond the printed label is not in course material.*',
    '',
    'Src: L3,4 sl.5–8'
  ].join('\n'),
  qs: []
},

{
  id: 'va-10', w: 'high',
  h: 'Conjunctiva — everting the upper lid, and what is then seen',
  body: [
    '### Why evert',
    '- **To search for a conjunctival foreign body**, or other conjunctival signs.',
    '',
    '### The technique',
    '1. **Ask the patient to look DOWN** and keep looking down.',
    '2. **Grasp the upper lashes** between thumb and index finger.',
    '3. **Press gently downward with a cotton-tipped applicator** over the **superior border of the tarsal plate**.',
    '4. **Pull the lid margin upward by the lashes** as you press — the lid flips over the applicator.',
    '5. **Inspect the exposed conjunctival surface with the penlight** for a foreign body or other abnormality.',
    '6. **A foreign body can be removed** with a cotton-tipped applicator **soaked in topical anaesthetic**.',
    '',
    '- **To reverse it:** **release the lid margin** and ask the patient to **look up**, or simply **blink**.',
    '',
    '### What you may find',
    '- **Papillae · follicles · giant papillae** — the three surface reaction patterns.',
    '- **Pterygium · scarring T4** (trachomatous scarring grade) **· PTCs** (pale trachomatous / conjunctival concretions).',
    '',
    '### Redness — three appearances, three meanings',
    '- **Conjunctival injection:** superficial vessels, **maximal in the fornices**, mobile over the sclera.',
    '- **Ciliary injection:** deep vessels, **maximal around the limbus** — a **circumcorneal flush**, and the sign of keratitis, iritis or acute glaucoma.',
    '- **Subconjunctival haemorrhage:** a flat sheet of blood with **no vessels visible within it**.',
    '',
    '*The injection distinctions beyond the three printed labels are not in course material; the full discrimination is `op-red`’s and `op-conj`’s.*',
    '',
    'Src: L3,4 sl.9–13'
  ].join('\n'),
  qs: []
},

{
  id: 'va-11', w: 'high',
  h: 'Cornea — the signs, and staining with fluorescein',
  body: [
    '### What you may find',
    '- **Foreign body** · corneal erosion · erosion stained with fluorescein.',
    '- **Opacity (scarring)** · infective keratitis · dendritic ulcer — the dendritic ulcer being herpes simplex.',
    '',
    '### Fluorescein staining — the method, in full',
    '- **What it is:** a **yellow dye** that gives a **green colour** when illuminated with the **cobalt blue filter** of the ophthalmoscope or slit lamp.',
    '- **What it is for:** **diagnosing defects of the corneal EPITHELIUM**.',
    '- **How it is applied:** a **sterile filter-paper strip**, **moistened with topical anaesthetic**, then **touched to the palpebral conjunctiva**.',
    '- **How it spreads:** **a few blinks** carry it over the cornea.',
    '- **How it reads:** **areas of bright-green staining denote absent or diseased epithelium**.',
    '',
    '*Corneal disease itself is `op-cornea`’s (`L15,16`), which is text-sufficient.*',
    '',
    'Src: L3,4 sl.14–16'
  ].join('\n'),
  qs: []
},

{
  id: 'va-12', w: 'know',
  h: 'Sclera and iris — what the deck shows',
  body: [
    '### Sclera — "you may find"',
    '- **Episcleritis** — superficial, sectoral, **usually painless**, self-limiting.',
    '- **Scleritis** — deep, **boring pain**, a violaceous hue, and sight-threatening.',
    '',
    '### Iris — "you may find"',
    '- **Iridodialysis** — the iris root **torn from the ciliary body**, leaving a **D-shaped peripheral gap**. Blunt trauma.',
    '- **Posterior synechiae** — the iris **adherent to the anterior lens capsule**; the pupil dilates irregularly. Uveitis.',
    '- **Rubeosis iridis** — **new vessels on the iris surface**, from retinal ischaemia.',
    '',
    '*Episcleritis vs scleritis in full, and the uveal disease behind synechiae, are `op-sclera`’s and `op-uvea`’s (`L13,14`). The festooned pupil of synechiae is in `op-pupil`; rubeosis and its retinal cause are in `op-glauc` and `op-ret`.*',
    '',
    '*Every gloss above beyond the printed label is not in course material.*',
    '',
    'Src: L3,4 sl.17–18'
  ].join('\n'),
  qs: []
},

{
  id: 'va-13', w: 'must',
  h: 'Lens — how it is examined, and what the pupil colour means',
  body: [
    '### How the lens is examined',
    '- **Focal illumination** · slit lamp · direct ophthalmoscope.',
    '',
    '### ⚠️ Pupil colour — the slide, in full',
    '',
    '|Pupil colour|What it is|Red reflex|',
    '|---|---|---|',
    '|**Black**|**newly born**, and **aphakia** — clear media, no lens|bright and full|',
    '|**Greyish, in old age**|**Nuclear sclerosis**|**BRIGHT RR**|',
    '|**Greyish, in old age**|**IMSC** (immature senile cataract)|**DIM RR**|',
    '|**Leukocoria (white)**|**Mature cataract**|absent|',
    '',
    '- **⚠️ The discriminator:** the reflex, not the colour. Both look grey through the pupil; **nuclear sclerosis keeps a bright red reflex** because the opacity is dense but small and central, while **an immature senile cataract dims it** because the cortex is diffusely cloudy.',
    '',
    '*`L18` describes the nuclear reflex as "altered / central dark nucleus" rather than "bright" — noted; L3,4 is this chapter’s deck and prints **bright RR**.*',
    '',
    '### The four cataract appearances',
    '- **IMSC** — immature senile cataract; **incomplete opacification of the cortex**.',
    '- **MSC** — mature senile cataract; **totally opaque white lens**.',
    '- **Hypermature, shrunken type** — **shrinkage of the capsule, liquefaction of the cortex**, wrinkled capsule.',
    '- **Morgagnian** — **liquefied cortex with the nucleus sinking** within the capsule.',
    '',
    '### Two more lens signs',
    '- **Opacities:** appear as DARK SHADOWS against the red reflex — silhouetted, so a small opacity is seen long before it whitens the pupil.',
    '- **The lens may be SUBLUXATED** — a displaced lens edge is seen crossing the pupil.',
    '',
    'Src: L3,4 sl.19–23; L17 lines 139–147, L18 lines 168–197 (`op-cat`’s decks — cited only, not counted)'
  ].join('\n'),
  qs: []
},

{
  id: 'va-14', w: 'must',
  h: 'The anterior chamber — depth, and contents',
  body: [
    '### ⚠️ Assessing depth — the penlight (eclipse) test',
    '1. **Shine a light from the TEMPORAL side of the head**, across the front of the eye, **parallel to the plane of the iris**.',
    '2. **Look at the NASAL aspect of the iris.**',
    '',
    '- **⚠️ The rule, verbatim —** if **two-thirds or more of the nasal iris is in shadow**, the chamber is **probably shallow** and the **angle narrow**.',
    '- **Why it works:** a forward-bowed iris casts its own shadow nasally; a deep chamber lets the beam wash across evenly *(not in course material)*.',
    '- **Graded on the slit lamp as:** **shallow · normal · deep.**',
    '',
    '### Causes — the table',
    '',
    '|Shallow AC|Deep AC|',
    '|---|---|',
    '|**Hypermetropia**|**High myopia**|',
    '|**Angle closure glaucoma**|**Aphakia**|',
    '|**Intumescent cataract**|**Buphthalmos**|',
    '|**Perforated corneal ulcer**|—|',
    '|**Leakage from a surgical wound**|—|',
    '',
    '- **The pattern:** a **short eye or a swollen lens** crowds the chamber; a **long eye or no lens** empties it. The two trauma entries — perforation and wound leak — drain aqueous, so the chamber collapses.',
    '',
    '### Contents',
    '- **Blood — hyphaema.**',
    '- **Pus — hypopyon.**',
    '- **Cells & flare — uveitis.**',
    '',
    '*The clinical consequence — never dilate an occludable angle, and what to do instead — is written in `op-glauc`.*',
    '',
    'Src: L3,4 sl.24–27'
  ].join('\n'),
  qs: []
}

    ]
  }
};
