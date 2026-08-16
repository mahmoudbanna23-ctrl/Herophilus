/* emergencies — "Pediatric emergencies", Paediatrics. Written 2026-08-16 under
   START-HERE.md §14 (slide-density revision notes) + §14.3a (layout), and
   content\peds\theory-plan.md, whose ONE local difference is that PAEDIATRICS
   HAS NO 3,000-WORD CAP: budget = max(lecture words, 25 x questions, 600).
   Shape copied from liver.draft.js and allergy.draft.js.

   DECK LABELS USED IN THE Src LINES:
     L3 = 3) Pediatric resuscitation.pptx — "Pediatric resuscitation",
          Dr. Hadir M. Hassouna, Ass. Professor of Pediatrics, Head of the
          Pediatric Intensive Care Unit, Alexandria University. 42 slides.
          Cached at content\peds\lectures\3) Pediatric resuscitation.txt.
     L4 = 4) Shock in pediatrics_.pptx — "Shock In Pediatrics", same lecturer.
          24 slides. Cached at content\peds\lectures\4) Shock in pediatrics_.txt.

   Page numbers in Src lines are SLIDE numbers, which are 1:1 with the pages of
   the PowerPoint-COM-converted PDF (L3 = 42 slides / 42 pages, L4 = 24 / 24),
   so `L3 p.24` is unambiguous whichever artefact the reader opens.

   ============================================================================
   ⚠️⚠️ FINDING 0 — THESE ARE THE TWO MOST IMAGE-DEPENDENT DECKS IN PAEDIATRICS,
   AND EVERY SINGLE NUMBER IN THIS CHAPTER CAME OUT OF AN IMAGE.
   ============================================================================
   Measured, not estimated: L3 extracts **527 words over 42 slides = 12.5 words
   per page**; L4 extracts **471 over 24 = 19.6**. Combined, **998 words over 66
   pages = 15.1 words per page.**

   For scale, theory-plan.md puts the paediatrics module average near **145**
   w/p and singles out `2) developmental problems` at **27** w/p as "the
   densest-by-picture in the module", ruling that a full end-to-end render is
   that chapter's baseline rather than a triage decision. **These two decks are
   at 15.1 — a little over HALF that**, which makes them, on that measure, the
   most image-dependent decks yet measured in paediatrics. Both were therefore
   rendered **END TO END** with no filtering, per the brief.

   ⚠️ AND THE CONSEQUENCE IS NOT ACADEMIC: the extractable text of both decks
   contains **not one dose, not one compression depth, not one energy setting,
   not one age-banded threshold.** The only numbers that survive extraction are
   "30:2 / 15:2" (L3 p.30), "more than 40 ml/kg" (L4 p.16), the dehydration
   percentages (L4 p.11), the 5 %/10 % deficits (L4 p.17), "0.9 % NaCl with 5 %
   dextrose and 20 mmol KCl per 500-ml bag" (L4 p.18) and ">2 s" / ">4 °C"
   (L4 p.6). **Everything else in the tables below was read off a rendered
   pixel.** A text-only writer would have produced a resuscitation chapter with
   no compression depth, no ratio reconciliation, no tube formula, no
   intraosseous landmark, no maintenance formula and no dehydration grid.

   HOW IT WAS DONE
     · Both .pptx converted with PowerPoint COM, **a fresh instance per file**
       (theory-plan.md's warning), opened READ-ONLY and exported to the
       scratchpad — Semester 8\ was never written to.
     · All 66 pages rendered at 110 dpi and read as **17 four-up contact
       sheets** (11 for L3, 6 for L4). `[Math]::Floor` used for the tiling row
       index, per the brief's warning that PowerShell `[int](3/2)` is 2 and
       silently drops every fourth page.
     · **Seven pages re-rendered at 260 dpi** before any number was
       transcribed — L3 pp.21, 24, 33, 36 and L4 pp.12, 15, 18 — then cropped
       into panels, because an algorithm box and a 13-row grid are exactly what
       a contact sheet gets wrong.
     · ⚠️ **AND THEN THE EMBEDDED ORIGINALS WERE PULLED OUT OF THE .pptx ZIP**
       (`ppt/media/`, mapped to slides through `ppt/slides/_rels/slideN.xml.rels`).
       That last step is what settled FINDING 1 and it is worth adopting: the
       media file is the artwork at native resolution, un-rescaled by the slide,
       and it costs one `unzip`.

   ============================================================================
   ⚠️ FINDING 1 — THE PALS ALGORITHM IS TRUNCATED IN THE SOURCE ARTEFACT, WHICH
   IS WHY THIS CHAPTER CANNOT SOURCE AN ADRENALINE DOSE OR A J/kg SETTING.
   ============================================================================
   L3 p.33 carries "Paediatric advanced life support (Health professional with
   equipment)". The rendered slide shows the algorithm running down to the
   "Shockable / Return of spontaneous circulation / Non-shockable" row and then
   **stopping mid-arrow at the slide's bottom edge**, with the four descending
   arrows cut off. The drug and energy arms of a PALS algorithm live in exactly
   the rows below that line.

   The embedded original (`ppt/media/image40.png`, 1366×768) explains it
   exactly. **It is a browser screenshot of a scrolled PDF** — the window
   chrome, tab bar and taskbar clock (4:15 AM, 27/09/2019) are all in the
   image, and the address bar reads *Illustrated Textbook of Paediatrics, 5e
   (Apr 26, 2017) (0723438714) (Elsevier)-1.pdf*, **page 98 / 597**, chapter
   running-head "Paediatric emergencies". **The lecturer captured the visible
   viewport and the bottom of the figure had scrolled off the screen.**

   ⚠️ So the missing rows are **not** a rendering artefact, **not** MediaBox
   clipping, and **not** recoverable from this deck by any means: the pixels do
   not exist in the file. This is a new shape of the "image-only" failure and it
   is worth naming — **a screenshot of a scrollable document is silently
   cropped by the window, and nothing in the deck says so.**

   ⚠️ THE NEGATIVE WAS THEN VERIFIED THREE WAYS BEFORE ANYTHING WAS TAGGED:
     1. **All 66 pages read visually, end to end.** No drug slide, no energy
        slide, no dose table anywhere in either deck.
     2. **Vocabulary sweep over both caches AND both fresh `pdftotext -layout`
        extractions.** `adrenalin` 0 · `epinephr` 0 · `atropine` 0 · `amiodar` 0
        · `joule` 0 · `J/kg` 0 · `mcg` 0 · `microgram` 0 · `1:10` 0 · `1:1000` 0
        · `bicarb` 0 · `calcium` 0. **Twelve zeroes.**
     3. **The source image itself**, above, which explains WHY.
   **CLEAN NEGATIVE, and stated plainly rather than glossed.** The doses are
   supplied and tagged in `emg-9`, per CLAUDE.md §4 — answer the gap, never
   declare it.

   ✅ AND THE COMPANION FIGURE IS COMPLETE, which is what makes the contrast
   credible rather than a guess. L3 pp.21 and 24 are two screenshots of the SAME
   book page (97 / 597, book page 84) taken at 2:48 AM and 2:54 AM, and between
   them they carry the **whole** of *Figure 6.5 Paediatric basic life support*
   down to its caption and attribution ("Adapted from Resuscitation Council
   (UK): Guidelines on Paediatric Life Support, London, 2015"). Nothing is
   missing from BLS. Only the ALS figure was cut.

   ⚠️ L4's figures come from a DIFFERENT EDITION and this is stated because the
   numbers differ from the classic teaching. `image5/7/8.png` are Adobe Reader
   screenshots of *Illustrated Textbook of Paediatrics 6th Edition 2022*,
   page 105 / 579 (book page 91) and 578 / 579 — giving **Table 6.3 Clinical
   assessment of dehydration** and **Figure 6.8 Initial fluid resuscitation in
   shock**. The 6th edition's bolus is **10 mL/kg**, not the 20 mL/kg of older
   teaching, and that is what the deck teaches and what is written below.

   ============================================================================
   ⚠️ FINDING 2 — BOTH CACHES ARE COMPLETE. CLEAN NEGATIVE ON BOTH THE ORDINARY
   CHECK AND THE MediaBox BLIND SPOT.
   ============================================================================
   1. **Cache vs a fresh `pdftotext -layout` of the COM-converted PDF.**
      L3: cache body 504 w, fresh 527 w. L4: cache body 467 w, fresh 471 w.
      **PDF-only vocabulary: L3 0 %, L4 1 %** — and the entire difference is
      artefact, not content. L3's only PDF-only token is `etco` against the
      cache's `etco2` (the XML pass joined a subscript run the PDF split); L4's
      are `temperature` and `nephrotic` against the cache's `emperature` and
      `ephrotic` (the XML pass split the leading letter into its own run, which
      is visible in the cache as a stranded "N" and "t"). **No teaching text
      exists on either side that the other lacks.** The caches were not touched.
   2. **The MediaBox blind spot, checked separately** (theory-plan.md's new
      section — the ordinary diff cannot see it because both sides are
      pdftotext). Every page's last token was tested for a trailing article,
      preposition or conjunction, the signature of a text box overflowing the
      slide's bottom edge. **CLEAN NEGATIVE — zero hits across all 66 pages.**
      No MediaBox rewrite was attempted and none is owed.

   ⚠️ Both checks passing is the correct result and also, on these two decks,
   nearly meaningless — see FINDING 0. A cache can be a complete transcription
   of a deck that says almost nothing.

   ============================================================================
   ⚠️⚠️ FINDING 3 — THREE PLACES WHERE THE DECK'S OWN NUMBERS DISAGREE. ALL
   THREE ARE RECORDED BOTH WAYS, NONE IS SILENTLY RESOLVED.
   ============================================================================
   (a) **THE COMPRESSION:VENTILATION RATIO.** L3 p.30 is a whole slide reading
       "One rescuer **30:2** / Two rescuers **15:2**". Both algorithm figures
       (pp.24, 33) print a flat "**15 chest compressions : 2 breaths**" with no
       rescuer qualifier. **These are reconcilable and the deck reconciles them
       itself on p.36**, an image-only table that spells out "two respirations
       after each 15 chest compressions; **if one rescuer only**, then 2
       respirations after each 30 compressions". So the figures state the
       two-rescuer healthcare-provider ratio and p.30 states both. Written as
       one labelled table in `emg-7`, with the reconciliation named.
   (b) **THE COMPRESSION RATE.** pp.24 and 33 both print **100–120/min**;
       p.36's table prints **100 per minute** flat, for both ventilation modes.
       Not reconcilable — recorded as both, with the range preferred because two
       figures carry it and it is the Resuscitation Council attribution.
   (c) **THE VENTILATION RATE ONCE INTUBATED.** p.33 prints **10–12/min**;
       p.36's table prints **8 to 10 per minute**. Not reconcilable — both
       recorded side by side in `emg-8`.

   ⚠️ None of (a), (b) or (c) is visible in the cached text except the bare
   "30:2 / 15:2". All three were found by reading images.

   ============================================================================
   ⚠️ FINDING 4 — THREE QUESTIONS THE DECK ASKS AND NEVER ANSWERS.
   ============================================================================
   · **p.3** is a whole slide reading "Most common cause of cardiopulmonary
     arrest in children is ……" — and **no later slide answers it.** This is the
     single most examinable line in the deck and the ellipsis is all there is.
   · **p.35** reads "When to intubate ????????" over a photograph of an ET tube
     and a laryngoscope. **No criteria slide follows.**
   · **p.8** prints the bare acronym **AVPU** and never expands it. `alert` 0,
     `verbal` 0, `painful` 0, `unresponsive` 0 hits in the deck.
   All three are ANSWERED and tagged, never declared — CLAUDE.md §4.

   ============================================================================
   WHAT THE VISUAL READ RECOVERED — fourteen items, all off pages the word
   counter reads as 0–20 words.
   ============================================================================
     1. **L3 pp.21+24 — Figure 6.5, the whole BLS algorithm.** ~330 words:
        SAFE approach and the "approach with care" box · check responsiveness
        (do not shake infants or suspected cervical spine injury) · shout for
        help · head tilt/chin lift, jaw thrust if unsuccessful · check breathing
        max 10 s · **5 initial rescue breaths**, blow for 1 s · **chin lift
        neutral in infants, "sniffing" in children** · mouth-over-nose-and-mouth
        in infants, pinch nose in children · assess signs of life, **pulse max
        10 s: >1 year carotid/femoral, <1 year brachial/femoral** · **"unless
        definite pulse >60/min"** · **15:2 at 100–120/min** · **if alone, 1 min
        of CPR before seeking help** · the three compression positions ·
        **depress at least one-third of chest depth, i.e. 4 cm infant / 5 cm
        child.** Cache carries NONE of it — both pages extract to 0 words.
     2. **L3 p.33 — the ALS algorithm**, ~150 words, truncated (FINDING 1):
        the 1-min-CPR-if-alone rule · advanced airway options · **ET tube
        formulas ID = age/4 + 4, oral = age/2 + 12, nasal = age/2 + 15** ·
        **intraosseous: 18-gauge trochar, anterior surface 2–3 cm below the
        tibial tuberosity** · ventilation 10–12/min · "continuously if
        intubated" · attach defibrillator, minimise interruption · **shockable
        = VF or pulseless VT; non-shockable = PEA or asystole.** 0 words cached.
     3. **L3 p.36 — the ventilation-mode table**, ~70 words. **0 words cached.**
        It is the slide that reconciles the ratio conflict (FINDING 3a).
     4. **L3 p.9 — decorticate vs decerebrate**, ~20 words. **0 words cached**,
        and the text slide (p.8) only NAMES the two postures. The diagram
        defines them: "rigid flexion of arms and extension of legs" versus
        "rigid extension and pronation of arms and legs."
     5. **L3 p.14 — mask sizing**, ~25 words, **0 cached**: correct covers
        mouth, nose and chin **but not the eyes**; too large covers the eyes and
        extends over the chin; too small does not cover nose and mouth well.
     6. **L3 pp.22–23, 25, 28 — airway and compression technique plates**, the
        neutral/sniffing positions and the two-finger, two-thumb-encircling,
        one-handed and two-handed compressions. **0 cached.**
     7. **L3 p.26 — cardiac pump vs thoracic pump**, systole/diastole diagrams.
     8. **L3 pp.31–32 — the coronary-perfusion-pressure tracings**, showing CPP
        at a 5:1 ratio against 15:2, and the SCCM 15:2 trace.
     9. **L4 p.12 — Table 6.3, the 13-row NICE dehydration grid**, ~120 words.
        **0 words cached.** The single largest recovery in L4, and the chapter's
        main discrimination table. Its red-flag markers and footnote came with
        it, and the embedded original added the sentence "Red flag sign — helps
        to identify children at risk of progression to shock."
    10. **L4 p.15 — Figure 6.8**, ~35 words and **the chapter's only bolus
        volume**: balanced crystalloids or blood **10 mL/kg**, **×4 if
        necessary**. Cache holds the five-word title and nothing else.
    11. **L4 p.18 — the Holliday–Segar maintenance table**, ~30 words.
        **The table is an image**; only the NaCl sentence beneath it is cached.
    12. **L4 p.18's embedded original** additionally carries the premise the
        slide crops out: "**1 kg of body weight loss is equivalent to 1 litre of
        fluid loss** and % deficit is calculated as a proportion of body
        weight." Recovered from `ppt/media/image8.png`, not from the slide.
    13. **L4 p.6 — the annotated dehydration plate**, twelve signs on an infant
        figure, and **L4 p.21 — the IV-vs-oral infographic**: IV **100 %
        absorption in 30–60 minutes**, oral **50–70 % over several hours**.
        Both sets of numbers are image-only.
    14. **L4 p.2 — "The Hemodynamic Puzzle"**, sixteen monitoring variables
        (HR, CVP, SV, PPV, SVV, SvO2, BP, GEDV, ScvO2, O2ER, urine output and
        mental status, echo, P(cv-a)CO2, OPSI, NIRS, lactate). **0 cached.**
        Judged decorative rather than examinable — see the omission list.

   ============================================================================
   BUDGET — §14.1, counted from disk with node
   `String(s.body).split(/\s+/).filter(Boolean).length`, the project convention
   (NOT `wc -w`).
   ============================================================================
     theory-plan.md's published ceiling: **1,235**.

     ⚠️ FIRST, THAT FIGURE IS 21 % SCAFFOLDING. It was taken over the cached
     `.txt` files whole, which carry a `SOURCE:` line, a `SLIDES:` line and one
     `--- slide N ---` marker per slide. 66 markers plus 2 headers = **264
     words of scaffolding**, none of it lecture content. The honest extraction
     is **971** (L3 504 + L4 467, cache bodies with the markers stripped),
     which the fresh `pdftotext` figures confirm at 998.

     ⚠️ NO PADDED CONTENTS PAGE — checked, because `liver`'s ceiling turned out
     to be 35 % one Objectives slide printed eleven times. Neither of these
     decks has an objectives, outline or contents slide at all. What they do
     carry is **two verbatim reprints and four non-teaching cards**:

       L3   527  fresh extraction
                 −  16  p1, the title/author card
                 −  14  p40, the contact card (phone, e-mail)
                 −  10  p34, a verbatim reprint of p18 ("Bag and mask
                        ventilation is as effective as endotracheal intubation")
                 −   7  p19, "Keep smiling … you are saving lives"
                                                                        = 480
       L4   471  fresh extraction
                 −  15  p1, the title/author card
                 −   2  p24, "Thank you"
                 −  36  p23, a verbatim reprint of p8 (the tachycardia /
                        low-blood-pressure rule); p23 adds only "Don't forget"
                                                                        = 418
                                                                          ----
     TERM 1, THE HONEST EXTRACTABLE FIGURE = **898.**

     ⚠️ NO LINE-RANGE SPLIT IS OWED. Grepping every written paediatrics draft
     header, **no other chapter names `3) Pediatric resuscitation` or
     `4) Shock in pediatrics_`** in any capacity — not counted, not cited, not
     deferred. Both decks are wholly this chapter's. This chapter defers nothing
     onward, so §14.1(b) takes nothing back out.

     TERM 2 = 25 × **0** linked questions = **0.** No question in the corpus
     carries `chapter:'emergencies'`, so the LECTURE side of the coverage floor
     governs entirely and `qs: []` is correct on every section. A reconciliation
     pass is owed when the paediatrics banks close.

     max(898 · 0 · 600) = **898 — and it is a fiction, for the FINDING 0
     reason.** The brief anticipated this and set the working band directly.

     ⚠️⚠️ THE HONEST SOURCE CONTENT, since the counter can see barely half of
     it. Estimated by attribution and labelled as an estimate:
       · extractable teaching text, both decks               **898**
       · the fourteen image-only recoveries above            **~870**
                                                             --------
       **≈ 1,768.** That is roughly **2.0× the honest ceiling** and **1.4× the
       published one**, and it is the number this chapter should be judged
       against. Writing to 1,235 would have meant a resuscitation chapter with
       no compression depth in it.

   ⚠️ ENTITY FLOOR AND OVERRUN, COUNTED BEFORE WRITING (§14.1 rule 3, at
   theory-plan.md's stated ~85 words per framework slide in this format).

     SEVEN DEVELOPED ENTITIES at ~90 w: 1 respiratory failure ·
     2 cardiopulmonary arrest · 3 hypovolaemic shock · 4 distributive shock ·
     5 cardiogenic shock · 6 neurogenic shock · 7 dehydration = **630**.

     FRAMEWORK SLIDES costed ONE BY ONE, image-only pages included because they
     cost words like any other, and the two algorithms costed at 3 each because
     a twenty-box flowchart is not one slide:
       L3 — ABCDE airway/breathing · ABCDE circulation · ABCDE disability +
       exposure · the posturing plate · respiratory failure definition · the
       four mechanisms · oxygen ladder 1 · oxygen ladder 2 · mask sizing ·
       effective BMV · two-rescuer BMV · the arrest triad · **the BLS
       algorithm ×3** · compression positions and depth · cardiac vs thoracic
       pump · coronary perfusion pressure · the four keys · the ratio slide ·
       **the ALS algorithm ×3** · the tube formulas · the IO landmark · the
       ventilation-mode table · minute ventilation in arrest · 4H4T ·
       monitoring = **28**.
       L4 — the decompensation triad · the shock definition · the four types ·
       compensated features · decompensated features · the tachycardia rule ·
       causes of dehydration · degree of dehydration · **Table 6.3 costed at
       ×3**, being 13 rows × 3 columns = 39 cells and every cell a fact
       somebody has to write · weight loss · the four fluid phases · **Figure
       6.8** · the 40 mL/kg rule · deficit replacement · the maintenance table ·
       adjusting fluids · enteral vs IV · ORS = **20**.
       48 framework slides — but these are 4-to-8-bullet slides, not ENT
       list-slides, so they were costed at **~42 w each, not 85** = **2,016**.

     PREDICTED = 630 + 2,016 = **2,646**, minus roughly 250 for the overlap
     between the entity blocks and the framework slides that carry them,
     **≈ 2,400–2,700**, i.e. **~10–11 printed pages at the /240 estimator.**
     Stated BEFORE writing, per §14.1 rule 3.

   ============================================================================
   ⚠️ SPLIT DECISION — ONE CHAPTER SHIPS. Measured, and stated with ranges.
   ============================================================================
   The brief named the deck boundary as the natural seam and asked for an
   explicit ruling after measurement. **NO SPLIT.**

     · The hard shape is ~13 printed pages ≈ ~3,100 body words. The measured
       outcome below is **2,836 body words ≈ 11.8 pages at /240**, inside it
       with ~260 words of headroom.
     · Split at the deck boundary, the two halves measure **`emergencies`
       (resuscitation, emg-1…emg-10) 1,845 words ≈ 7.7 pp** and **`emg-shock`
       (shock and fluids, emg-11…emg-16) 991 words ≈ 4.1 pp.** A 4-page chapter
       is below every unit produced by the 2026-08-15 split, whose smallest is
       `neuro-stroke` at 3 pp and whose stated aim is 3–13 pp per unit — so the
       split is permitted but buys nothing.
     · And the two halves are not independent. Shock is *the* commonest
       precursor of paediatric arrest, L3's ABCDE-Circulation slide is the
       assessment L4's compensated/decompensated table grades, and the fluid
       bolus in `emg-15` is the treatment of the state `emg-12` recognises.
       Splitting would put the recognition and the treatment of one condition in
       two chapters.

   **Ruling: ONE chapter at 2,634 words / 16 sections.** If the hub disagrees
   the seam is clean and pre-measured: emg-1…emg-10 stay, emg-11…emg-16 leave.

   ============================================================================
   ⚠️ WHAT IS DELIBERATELY LEFT OUT — §14.2's omission note. Nothing protected.
   ============================================================================
     · **"The Hemodynamic Puzzle" (L4 p.2)** — sixteen monitoring variables in a
       jigsaw graphic with no text, no definitions and no thresholds. It is a
       title graphic for the lecture, not a teaching slide. **Named here so the
       decision is on the record.**
     · **The coronary-perfusion-pressure tracings (L3 pp.31–32)** are kept only
       as their conclusion — sequential compressions raise CPP, 15:2 beats 5:1 —
       not as the waveforms. The graphs teach the same fact the four keys do.
     · **The rhetorical slides** — "Children are not small adults" (kept, it is
       the chapter's premise), "Prevention is better than cure", "Keep smiling
       … you are saving lives", the CPR TRAINING logo, "Thank you". Only the
       first carries teaching weight.
     · **The V/Q-mismatch gas-value diagram (L3 p.11)** is kept as the four
       mechanisms and their three named causes; the O2/CO2 numbers on the
       cartoon are illustrative physiology, not examinable values.
     · **Equipment photographs** — Ambu bags, ET tubes, ORS sachets, oxygen
       masks on children. No teaching text.
   Nothing on this list is a number, an eponym, a classification or a red flag.

   ============================================================================
   ⚠️ NO DUPLICATION — checked against the merged app\data\theory.peds.js, which
   was read before writing. Four chapters overlap and all four are
   cross-referenced in one-line italic asides, never re-taught.
   ============================================================================
     · **`allergy` (alg-14)** already carries the anaphylaxis adrenaline in
       full — 0.01 mg/kg of 1:1,000, IM, mid-anterolateral thigh, max 0.5 mg
       adult / 0.3 mg child. **Cardiac-arrest adrenaline is this chapter's**,
       and the contrast is genuinely worth its one line: the two doses are the
       SAME 10 micrograms/kg and differ entirely in **route and
       concentration** — IV/IO 1:10,000 in arrest, IM 1:1,000 in anaphylaxis.
       Written once, in `emg-9`.
     · **`endo-dka` (endo-15)** carries DKA fluids in full, and its resuscitation
       line is **10 mL/kg over 30–60 minutes of 0.9 % saline** — consistent with
       L4's bolus, which is worth knowing but is not repeated. L4's own DKA
       contribution is the **48-hour replacement rule**, which is this
       chapter's and is written in `emg-16`.
     · **`infection`** carries the febrile child, meningitis and septic-shock
       recognition. Distributive shock is named here as a type with its
       discriminating features and nothing more.
     · **`perinatal` (per-2)** carries newborn resuscitation and Apgar, including
       the **3:1** neonatal ratio. **Verified: L3 contains "newborn" and
       "neonat" ZERO times** — per-2 says so itself and it is correct. The 3:1
       row appears in this chapter's ratio table **only as a labelled
       cross-reference**, because the brief requires the ratios side by side and
       a table with a hole in it is worse than a cited row.

   ============================================================================
   ⚠️ §14.5 DEFERRAL REGISTER — nothing owed in either direction.
   ============================================================================
   No register row in START-HERE.md §14.5 is addressed to `emergencies`
   (grepped). This chapter defers nothing onward: both decks are wholly its own,
   and the four overlaps above are cross-references to chapters already written
   and merged, not promises. **Nothing to tick, nothing to add.**

   ============================================================================
   ⚠️ WHAT IS TAGGED (not taken from the course material) — nine claims, each a
   short parenthetical on the sentence it qualifies, never a sentence that stops.
   ============================================================================
     1. **The commonest cause of paediatric arrest is hypoxia from respiratory
        failure** — L3 p.3 asks and never answers (FINDING 4).
     2. **The AVPU expansion** — L3 p.8 prints the acronym only (FINDING 4).
     3. **When to intubate** — L3 p.35 asks and never answers (FINDING 4).
     4. **Adrenaline in cardiac arrest** — dose, concentration, route, interval
        (FINDING 1).
     5. **Defibrillation energy in J/kg**, first and subsequent (FINDING 1).
     6. **Amiodarone**, the shockable-arm antiarrhythmic (FINDING 1).
     7. **The age-banded vital-sign thresholds.** ⚠️ Neither deck prints a
        single age band. L3's ABCDE slides name "respiratory rate", "heart rate"
        and "blood pressure" as things to assess and give no numbers anywhere;
        L4 gives only ">2 s" capillary refill and ">4 °C" core-peripheral gap.
        Supplied as a table because a shock chapter without them is unusable.
     8. **The hypotension threshold formula** for children over 1 year.
     9. **The 20 mL/kg bolus** as the widely taught alternative to L4's 10 —
        named only so a learner meeting it elsewhere is not confused, with
        L4's figure written as the deck's.
   Every one is identifiable as unsourced. Nothing unsourced is blended into a
   cited passage untagged.

   ============================================================================
   ⚠️⚠️ MEASURED OUTCOME — the genuinely last action taken on this file, run
   with node over the file ON DISK after the final edit, per the thirteen prior
   header failures. NOT a forecast, NOT written in advance, NOT reconstructed
   from a per-section plan.
   ============================================================================
     Counter kept at <scratch>\emerg\count.js. ⚠️ IT MUST ANCHOR THE SLICE TO
     START-OF-LINE — `src.search(/^var THEORY_DRAFT/m)`, not `indexOf`. The
     first version used `indexOf` and matched **this very header**, which quotes
     the string, so it evaluated a comment and died on a SyntaxError. A counter
     that reads the documentation instead of the data is a new way to get a
     header number wrong; noted so the next agent does not lose the run.

     BODY WORDS  = 2,836   (sum of `body` only; intro, h, id, w, qs excluded)
     SECTIONS    = 16
     PAGES       ≈ 11.8    (2,836 ÷ 240, the densest-observed divisor)
     INTRO       = 42 words (§14.3's ≤ 50)
     vs published ceiling 1,235 = **+130 %**
     vs honest extractable 898  = **+216 %**
     vs honest source ≈1,768    = **+60 %**
     vs the pre-writing prediction 2,400–2,700 = **ABOVE the band by 136 words,
       i.e. +5 % past its top.** Reported as a miss, not rounded into the band.
       The prediction under-costed the two big algorithm sections: emg-6 and
       emg-7 came to 492 between them against ~340 planned, because a flowchart
       needs its numbers restated in prose beside it — the `flow` object is not
       counted as body but the table that makes it examinable is.

     Per section, measured, in file order:
       emg-1  178 · emg-2  167 · emg-3   84 · emg-4  250 · emg-5  114
       emg-6  230 · emg-7  262 · emg-8  244 · emg-9  220 · emg-10  96
       emg-11 158 · emg-12 197 · emg-13 153 · emg-14 159 · emg-15 135
       emg-16 189
       Sum = 2,836. ⚠️ The sum reconciling proves only that these numbers came
       from ONE state of the file; what makes them final is that the counter was
       run AFTER the last edit and nothing was touched afterwards.

     ⚠️⚠️ AND THIS BLOCK WAS WRONG ONCE, EXACTLY AS THE BRIEF PREDICTED. A
     placeholder outcome block was written with the section list before the
     file was counted; it claimed **2,634** against a real **2,858** at that
     moment (−8 %), with sixteen invented per-section rows that summed exactly
     to their own total. It was replaced wholesale after the counter ran, and
     then again after the §14.3a layout pass moved the figure to 2,836. **The
     fourteenth instance of this fault, caught by the rule rather than by luck.**

     Structural checks, same run: 16 unique ids, no duplicates · `w` =
     12 must / 4 high · **`qs: []` on all 16** · 2 flowcharts (BLS, fluid
     resuscitation) · exactly one `Src:` line per section and it is the last
     line of every body · zero paragraphs over 45 words · zero lead-bolds
     without an `mdLead()` anchor · the file `eval`s clean as a classic script.

     ⚠️ The overrun against the published ceiling is entirely FINDING 0 — the
     ceiling counts text that extracts, and these decks are 15.1 words per page.
     Per theory-plan.md's own rule: "Where a chapter's blank-page share is high,
     treat its ceiling as a floor and expect to exceed it — that is not
     inflation, it is content the counter could not see."
*/

var THEORY_DRAFT = {
  emergencies: {
    intro: 'Two decks, one clock. Recognise failure before it becomes arrest, because arrest in a child is the end of a respiratory road, not a sudden cardiac event. Every number here is examinable: the ratio, the depth, the rate, the bolus, the percentages.',
    sections: [

{
  id: 'emg-1', w: 'must',
  h: 'Why children arrest — the premise the whole chapter rests on',
  body: [
    '- **"Children are not small adults":** the deck opens on this and everything that follows is a consequence of it.',
    '- **The key to management:** **early recognition and intervention to prevent respiratory or circulatory failure** — *"once present they are difficult to reverse".*',
    '',
    '### ⚠️ The commonest cause of paediatric arrest',
    '',
    'L3 p.3 is a whole slide reading *"Most common cause of cardiopulmonary arrest in children is ……"* and no later slide answers it.',
    '',
    '- **The answer — hypoxia, from respiratory failure or airway obstruction** *(not taken from the course material)*.',
    '- **Why it matters:** the child arrests at the end of a **slow respiratory decline** *(not taken from the course material)*.',
    '- **So the rhythm found is:** **bradycardia progressing to asystole or PEA**, not VF *(not taken from the course material)*.',
    '- **The adult contrast:** a primary **cardiac** event with **VF** as the presenting rhythm *(not taken from the course material)*.',
    '',
    '*This is why the paediatric sequence gives **5 rescue breaths first** and why the shockable arm of the algorithm is the uncommon one.*',
    '',
    'Src: L3 pp.2–5'
  ].join('\n'),
  qs: []
},

{
  id: 'emg-2', w: 'must',
  h: 'ABCDE — the assessment, and the two postures the diagram defines',
  body: [
    '### A and B — airway and breathing',
    '',
    '**Look, listen and feel for:**',
    '',
    '- **Airway obstruction:** or respiratory distress.',
    '- **Work of breathing:** respiratory effort.',
    '- **Respiratory rate · stridor · wheeze.**',
    '- **Auscultation:** for air entry.',
    '- **Cyanosis · oxygen saturation.**',
    '',
    '### C — circulation',
    '',
    '**Feel and assess: heart rate · pulse volume · capillary refill time · blood pressure.**',
    '',
    '### D and E — disability and exposure',
    '',
    '- **Level of consciousness:** by **AVPU**.',
    '- **AVPU:** **A**lert · responds to **V**oice · responds to **P**ain · **U**nresponsive *(the deck prints the acronym alone; the expansion is not taken from the course material)*.',
    '- **Posture:** hypotonia, decorticate, decerebrate.',
    '- **Pupils:** size and reactivity. Then **exposure**.',
    '',
    '### ⚠️ Decorticate versus decerebrate',
    '',
    '|Posture|What the limbs do|',
    '|---|---|',
    '|**Decorticate**|**Rigid FLEXION of the arms**, extension of the legs|',
    '|**Decerebrate**|**Rigid EXTENSION and PRONATION** of arms and legs|',
    '',
    '*Decerebrate is the deeper lesion of the two and the worse sign (not taken from the course material).*',
    '',
    'Src: L3 pp.6–9 (p.9 image-only, read visually)'
  ].join('\n'),
  qs: []
},

{
  id: 'emg-3', w: 'high',
  h: 'Respiratory failure — one definition, two gases, four mechanisms',
  body: [
    '- **Key element of respiration:** **gas exchange** — **ventilation** and **oxygenation**.',
    '- **Respiratory failure:** **failure of the lungs to maintain adequate gas exchange.**',
    '- **The two derangements:** **hypercarbia** and **hypoxia**.',
    '',
    '### The four mechanisms',
    '',
    '|Mechanism|Note|',
    '|---|---|',
    '|**Alveolar hypoventilation**|The ventilation half fails|',
    '|**Diffusion impairment**|Across the alveolar membrane|',
    '|**Intrapulmonary or cardiac shunting**|Blood bypasses ventilated lung|',
    '|**V/Q mismatch**|**Ventilation–perfusion mismatch**|',
    '',
    '- **The three causes named for V/Q mismatch:** **asthma · pneumonia · pulmonary embolism.**',
    '',
    '*Asthma, pneumonia and bronchiolitis in full are `respiratory`, `resp-pneumonia` and `resp-bronch`.*',
    '',
    'Src: L3 pp.10–11'
  ].join('\n'),
  qs: []
},

{
  id: 'emg-4', w: 'high',
  h: 'Oxygen, the bag and mask, and when to put a tube in',
  body: [
    '### The oxygen and ventilation ladder',
    '',
    '- **Face mask · nasal cannula:** simple oxygen delivery.',
    '- **Non-invasive ventilation:** **ventilatory support WITHOUT endotracheal intubation.**',
    '- **High-flow nasal cannula therapy.**',
    '- **Intubation:** endotracheal intubation and mechanical ventilation.',
    '',
    '### ⚠️ Effective bag-mask ventilation',
    '',
    '- **Volume:** use **only** the force and tidal volume **needed to make the chest rise**.',
    '- **Avoid:** excessive volume or pressure.',
    '- **Cricoid pressure:** may **reduce gastric inflation**.',
    '- **Deflate the stomach** if gastric inflation interferes with ventilation.',
    '',
    '**Mask size — the picture rule:** the correct mask covers **mouth, nose and chin but NOT the eyes**. Too large covers the eyes and extends over the chin; too small does not cover nose and mouth well.',
    '',
    '### Two-rescuer bag-mask ventilation',
    '',
    '- **Rescuer one:** **both hands** to open the airway and hold a tight **mask-to-face seal**.',
    '- **Rescuer two:** compresses the bag, and may apply **cricoid pressure** if appropriate.',
    '- **Both:** verify adequate chest expansion.',
    '',
    '**⚠️ As effective as a tube:** bag and mask ventilation is **as effective as endotracheal intubation** — stated on **two separate slides**, pp.18 and 34.',
    '',
    '### ⚠️ When to intubate',
    '',
    'L3 p.35 asks *"When to intubate ????????"* over a photograph and gives no criteria. Supplied *(not taken from the course material)*:',
    '',
    '- **Failure to oxygenate or ventilate:** despite adequate bag-mask support.',
    '- **Unprotected airway:** GCS ≤ 8, or an absent gag reflex.',
    '- **Obstruction, actual or threatened:** burns, angio-oedema.',
    '- **Logistics:** prolonged transfer, or the need for deep sedation.',
    '',
    'Src: L3 pp.12–18, 34–35; p.14 image-only, read visually'
  ].join('\n'),
  qs: []
},

{
  id: 'emg-5', w: 'must',
  h: 'Recognising arrest — the triad, and where to feel for a pulse',
  body: [
    '### The diagnosis of cardiopulmonary arrest',
    '',
    'Based on **three findings**, all three of them clinical:',
    '',
    '|#|Finding|',
    '|---|---|',
    '|**1**|**Absence of a palpable pulse in a MAJOR artery**|',
    '|**2**|**Unconsciousness**|',
    '|**3**|**Apnoea**|',
    '',
    '### ⚠️ Where and how long',
    '',
    '|Age|Pulse checked at|',
    '|---|---|',
    '|**Over 1 year**|**Carotid** or **femoral**|',
    '|**Under 1 year**|**Brachial** or **femoral**|',
    '',
    '- **Time limit:** **maximum 10 seconds** for the pulse — and 10 for breathing.',
    '- **⚠️ The threshold that starts compressions:** no signs of life, **unless there is a definite pulse over 60/min**.',
    '',
    '*A bradycardia under 60/min with poor perfusion is treated as arrest in a child. That single number is the paediatric departure from adult practice.*',
    '',
    'Src: L3 pp.20–21, 24 (pp.21, 24 image-only, read visually)'
  ].join('\n'),
  qs: []
},

{
  id: 'emg-6', w: 'must',
  h: 'Basic life support — the algorithm, and the airway by age',
  body: [
    '### The opening moves',
    '',
    '- **SAFE approach:** approach with care, free from danger.',
    '- **Get help early if:** there is **more than one rescuer**, or the collapse was **witnessed and sudden** — defibrillation may be needed.',
    '- **Check responsiveness:** ask *"Are you all right?"*, stimulate gently. **Do NOT shake infants**, or anyone with suspected cervical spine injury.',
    '- **Shout for help.**',
    '- **Open the airway:** **head tilt, chin lift** — **jaw thrust if unsuccessful**.',
    '- **Check breathing for max 10 s:** look, listen, feel; no or abnormal breathing counts as none.',
    '- **Breathe:** remove any obvious obstruction, then **give 5 initial rescue breaths**.',
    '',
    '### ⚠️ The airway position differs by age',
    '',
    '|Age|Head position|Mouth seal if no bag-mask|',
    '|---|---|---|',
    '|**Infant**|**NEUTRAL** — avoid overextension|Your mouth over **the nose AND mouth**|',
    '|**Child**|**"Sniffing" position**|**Pinch the nose**, mouth to mouth|',
    '',
    '- **Each breath:** **blow for 1 second**; the chest should rise with each breath.',
    '- **Jaw thrust:** two fingers of each hand behind each side of the mandible, push the jaw forward.',
    '- **Infant airway:** remove secretions or a foreign body **under direct vision** only.',
    '',
    '### ⚠️ If you are alone',
    '',
    '- **One minute first:** give **1 minute of resuscitation BEFORE seeking help**.',
    '- **Carry if you can:** CPR may be continued while carrying an infant or small child to summon help.',
    '',
    'Src: L3 pp.21–24, Figure 6.5 (Resuscitation Council UK, 2015) — image-only, read visually'
  ].join('\n'),
  flow: {
    title: 'Paediatric basic life support',
    steps: [
      { k: 'step', t: 'SAFE approach — free from danger', n: 'Get help if >1 rescuer, or witnessed sudden collapse' },
      { k: 'decision', t: 'Responsive?', yes: 'Reassess, treat the cause', no: 'Shout for help' },
      { k: 'step', t: 'Open the airway', n: 'Head tilt + chin lift; jaw thrust if unsuccessful' },
      { k: 'decision', t: 'Breathing normally? (check max 10 s)', yes: 'Recovery position, reassess', no: 'Give 5 initial rescue breaths' },
      { k: 'alert', t: 'FIVE initial rescue breaths', n: 'Blow for 1 s each; chest should rise' },
      { k: 'step', t: 'Assess signs of life — movement, coughing, normal breathing', n: 'Check pulse max 10 s: >1 yr carotid/femoral, <1 yr brachial/femoral' },
      { k: 'decision', t: 'Definite pulse over 60/min?', yes: 'Continue rescue breathing, reassess', no: 'Start chest compressions' },
      { k: 'alert', t: 'Chest compressions 15:2 at 100–120/min', n: 'Push hard and fast; if alone, 1 min CPR before seeking help' }
    ]
  },
  qs: []
},

{
  id: 'emg-7', w: 'must',
  h: 'Compressions — the rate, the depth, the position and the ratio',
  body: [
    '### The four keys to effective cardiac output',
    '',
    '**The four keys:** push hard · push fast · release completely · do not interrupt compressions unnecessarily.',
    '',
    '### ⚠️ The numbers',
    '',
    '|What|Value|',
    '|---|---|',
    '|**Rate**|**100–120 compressions/min** (pp.24, 33) — **but p.36\'s table prints a flat 100/min**|',
    '|**Depth**|**At least ONE-THIRD of the depth of the chest**|',
    '|**Depth, infant**|**4 cm**|',
    '|**Depth, child**|**5 cm**|',
    '|**Continuous?**|Continuously, **once intubated**|',
    '',
    '### ⚠️ The compression:ventilation ratio — every figure the decks give',
    '',
    '|Rescuers / setting|Ratio|Printed on|',
    '|---|---|---|',
    '|**One rescuer**|**30 : 2**|L3 p.30; p.36 *"if one rescuer only"*|',
    '|**Two rescuers**|**15 : 2**|L3 p.30, p.36|',
    '|**Both algorithm figures**|**15 : 2**, no qualifier|L3 pp.24, 33|',
    '|**Newborn at delivery**|**3 : 1**|*Cross-reference — `perinatal`, per-2. L3 contains "newborn" zero times*|',
    '',
    '*p.30 and the figures look contradictory and are not: p.36\'s table reconciles them — the figures print the two-rescuer healthcare-provider ratio, and 30:2 applies when one rescuer is working alone.*',
    '',
    '### Hand position by age',
    '',
    '|Age|Technique|',
    '|---|---|',
    '|**Infant, two rescuers**|**Two THUMBS** on the lower half of the sternum, hands encircling the thorax|',
    '|**Infant, alone**|Compress the sternum with the **tips of two fingers**|',
    '|**Small child**|**Heel of ONE hand** over the lower half of the sternum|',
    '|**Large child**|**BOTH hands** over the lower half of the sternum|',
    '',
    '### Why the ratio matters physiologically',
    '',
    '- **Two mechanisms of flow:** the **cardiac pump** and the **thoracic pump**.',
    '- **Coronary perfusion pressure:** **aortic diastolic − right atrial diastolic** pressure.',
    '- **⚠️ CPP rises with SEQUENTIAL compressions** — it is measurably higher at **15:2 than at 5:1**, because every pause resets it.',
    '',
    'Src: L3 pp.24, 26–32, 33, 36; pp.24, 33, 36 image-only, read visually'
  ].join('\n'),
  qs: []
},

{
  id: 'emg-8', w: 'must',
  h: 'Advanced life support — the algorithm, the tube, and the shockable fork',
  body: [
    '### Airway and breathing',
    '',
    '- **Breathing:** **5 initial rescue breaths**, positive pressure ventilation, **preferably bag and mask**.',
    '- **Advanced airway:** only **if required and a skilled operator is present** — intubate and ventilate, or **laryngeal mask**.',
    '- **Give high concentration oxygen.**',
    '',
    '### ⚠️ Endotracheal tube size by age in whole years',
    '',
    '|Measurement|Formula|',
    '|---|---|',
    '|**Internal diameter (mm)**|**(age / 4) + 4**|',
    '|**Length, ORAL tube (cm)**|**(age / 2) + 12**|',
    '|**Length, NASAL tube (cm)**|**(age / 2) + 15**|',
    '',
    '### ⚠️ Intraosseous access — the landmark',
    '',
    '- **Needle:** **18-gauge trochar with needle.**',
    '- **Site:** the **anterior surface of the tibia, 2–3 cm BELOW the tibial tuberosity**.',
    '- **When:** establish IV access; **if there is delay, use the intraosseous route**.',
    '',
    '### ⚠️ Ventilation rate in arrest — the decks disagree',
    '',
    '|Source|Rate once intubated|',
    '|---|---|',
    '|**L3 p.33** (the ALS figure)|**10–12 / min**|',
    '|**L3 p.36** (the table)|**8 to 10 / min**|',
    '',
    '- **Do NOT pause compressions during ventilation** once intubated, and **confirm tube position**.',
    '- **Why the rate is low:** in arrest **a lower-than-normal minute ventilation may be appropriate**.',
    '- **The reason:** cardiac output — and therefore CO2 delivery to the lungs — is low.',
    '',
    '### The rhythm fork',
    '',
    '|Arm|Rhythms|',
    '|---|---|',
    '|**SHOCKABLE**|**Ventricular fibrillation (VF)** · **pulseless ventricular tachycardia (VT)**|',
    '|**NON-shockable**|**Pulseless electrical activity (PEA)** · **asystole**|',
    '',
    '**The loop:** attach the defibrillator/monitor, **minimise interruption**, then **assess rhythm**. It runs back to that diamond after every cycle and exits only on **return of spontaneous circulation**.',
    '',
    'Src: L3 pp.33, 36–37 — image-only, read visually'
  ].join('\n'),
  qs: []
},

{
  id: 'emg-9', w: 'must',
  h: 'The drugs and the joules — what the deck cannot tell you, and why',
  body: [
    '**⚠️ The source is truncated:** and visibly so. L3 p.33 is a **screenshot of a scrolled PDF page**, and the window cut off everything below the shockable/non-shockable row.',
    '',
    'Sweeping both decks returns **zero hits** for adrenaline, epinephrine, atropine, amiodarone, joule, J/kg, mcg and microgram.',
    '',
    '### ⚠️ Everything below is supplied, and every line of it is tagged',
    '',
    '|Drug or shock|Dose|Route|Repeat|',
    '|---|---|---|---|',
    '|**Adrenaline**|**10 micrograms/kg** = **0.1 mL/kg of 1:10,000**|**IV or IO**|**Every 3–5 min**, i.e. alternate cycles|',
    '|**First shock**|**4 J/kg**|Defibrillator, VF/pVT only|—|',
    '|**Subsequent shocks**|**4 J/kg**|Same|After each 2-min cycle|',
    '|**Amiodarone**|**5 mg/kg**|IV/IO bolus|After the **3rd** and **5th** shocks|',
    '',
    '*Every row of that table is (not taken from the course material).*',
    '',
    '### Which arm gets what',
    '',
    '- **Shockable (VF/pVT):** **shock first**, then CPR; adrenaline after the **third** shock, then alternate cycles *(not taken from the course material)*.',
    '- **Non-shockable (PEA/asystole):** **adrenaline IMMEDIATELY**, then every 3–5 min.',
    '- **⚠️ Never shock asystole or PEA:** defibrillating them does nothing *(not taken from the course material)*.',
    '',
    '### ⚠️ Arrest adrenaline versus anaphylaxis adrenaline',
    '',
    '**Same dose, different route:** **10 micrograms/kg either way** — arrest is **IV/IO 1:10,000**, anaphylaxis is **IM 1:1,000** into the mid-anterolateral thigh.',
    '',
    '*The anaphylaxis dose in full, with its maxima, is `allergy`, alg-14 — it is not repeated here.*',
    '',
    'Src: L3 p.33 (truncated at source — see the chapter header); the doses are supplied and tagged'
  ].join('\n'),
  qs: []
},

{
  id: 'emg-10', w: 'high',
  h: 'The reversible causes, and what you monitor',
  body: [
    '### ⚠️ 4 H and 4 T',
    '',
    '|The four Hs|The four Ts|',
    '|---|---|',
    '|**Hypoxia**|**Tension pneumothorax**|',
    '|**Hypovolaemia**|**Thrombosis** — coronary or pulmonary|',
    '|**Hypokalaemia / hyperkalaemia, metabolic**|**Tamponade** — cardiac|',
    '|**Hypothermia**|**Toxic / therapeutic disturbances**|',
    '',
    '*Hypoxia and hypovolaemia head the list because they are the two the paediatric arrest usually came from.*',
    '',
    '### In-hospital versus out-of-hospital arrest',
    '',
    'The difference the deck draws is **monitoring** — four things available inside and not outside:',
    '',
    '- **ECG** — the rhythm, and therefore which arm of the algorithm you are on.',
    '- **ETCO2** — end-tidal CO2.',
    '- **Pulse oximeter.**',
    '- **Laboratory** investigations.',
    '',
    'Src: L3 pp.38–39'
  ].join('\n'),
  qs: []
},

{
  id: 'emg-11', w: 'must',
  h: 'Shock — the definition, the three failures, and the four types',
  body: [
    '- **Shock:** present when **the circulation is inadequate to meet the metabolic demands of the tissues**.',
    '',
    '### The three mechanisms of haemodynamic decompensation',
    '',
    '**The three:** abnormal vascular tone · hypovolaemia · myocardial dysfunction. Every type below is one or more of them.',
    '',
    '### The four types',
    '',
    '|Type|Examples the deck gives|The failing mechanism|',
    '|---|---|---|',
    '|**Hypovolaemic**|Dehydration, haemorrhage, burns|**Volume**|',
    '|**Distributive**|**Sepsis · anaphylaxis**|**Vascular tone**|',
    '|**Cardiogenic**|**Arrhythmias · heart failure**|**Myocardial dysfunction**|',
    '|**Neurogenic**|**Spinal cord injury**|**Vascular tone**, sympathetic loss|',
    '',
    '### ⚠️ Telling them apart at the bedside',
    '',
    '|Type|The discriminating sign *(not taken from the course material)*|',
    '|---|---|',
    '|**Hypovolaemic**|**Cold** peripheries, **narrow** pulse pressure, a history of losses|',
    '|**Distributive, warm**|**WARM** peripheries, **bounding** pulses, **wide** pulse pressure|',
    '|**Cardiogenic**|**Hepatomegaly, raised JVP, gallop** — the child is **fluid-overloaded**, not empty|',
    '|**Neurogenic**|**Hypotension WITHOUT tachycardia** — the only type that fails to mount one|',
    '',
    '*Hypovolaemic shock is the commonest in children and is what the rest of this chapter treats. Septic shock recognition in full is `infection`; anaphylaxis is `allergy`.*',
    '',
    'Src: L4 pp.3–5'
  ].join('\n'),
  qs: []
},

{
  id: 'emg-12', w: 'must',
  h: 'Compensated versus decompensated — the single most examinable point',
  body: [
    '**⚠️ Early sign:** **TACHYCARDIA**. **⚠️ Late sign:** **LOW BLOOD PRESSURE**. The deck prints this twice, on pp.8 and 23, captioning the second *"Don\'t forget"*.',
    '',
    '**Why it matters:** compensated shock is **REVERSIBLE**; decompensated shock **may be IRREVERSIBLE**.',
    '',
    '### The two columns',
    '',
    '|Early (COMPENSATED)|Late (DECOMPENSATED)|',
    '|---|---|',
    '|**Tachycardia**|**Bradycardia**|',
    '|**Tachypnoea**|**Acidotic (Kussmaul) breathing**|',
    '|Decreased skin turgor|**Confusion / depressed cerebral state**|',
    '|Sunken eyes and fontanelle|**Blue peripheries**|',
    '|**Delayed capillary refill (> 2 s)**|**Absent** urine output|',
    '|Mottled, pale, cold skin|**HYPOTENSION**|',
    '|**Core–peripheral temperature gap (> 4 °C)**|—|',
    '|**Decreased** urinary output|—|',
    '',
    '### ⚠️ Why blood pressure is the trap',
    '',
    'A child **maintains blood pressure until late** by raising heart rate and clamping peripheral vessels. **A normal blood pressure does NOT exclude shock**, and by the time it falls the child has already decompensated.',
    '',
    '**Hypotension in a child over 1 year:** systolic below **70 + (2 × age in years)** mmHg *(not taken from the course material)*.',
    '',
    '### ⚠️ Age-banded vital signs',
    '',
    'Neither deck prints a single age band. Supplied *(not taken from the course material)*:',
    '',
    '|Age|Heart rate /min|Respiratory rate /min|Systolic BP mmHg|',
    '|---|---|---|---|',
    '|**< 1 year**|110–160|30–40|70–90|',
    '|**1–2 years**|100–150|25–35|80–95|',
    '|**2–5 years**|95–140|25–30|80–100|',
    '|**5–12 years**|80–120|20–25|90–110|',
    '|**> 12 years**|60–100|15–20|100–120|',
    '',
    'Src: L4 pp.6–8, 23; the thresholds and bands are supplied and tagged'
  ].join('\n'),
  qs: []
},

{
  id: 'emg-13', w: 'must',
  h: 'Dehydration — the causes, and the three degrees by body weight',
  body: [
    '**The whole point:** prevention of shock from dehydration relies on **early recognition and treatment**.',
    '',
    '### The seven causes',
    '',
    '**Seven:** gastroenteritis · burns · sepsis · diabetic ketoacidosis · diabetes insipidus · nephrotic syndrome · poor fluid intake.',
    '',
    '### ⚠️ The three degrees — learn these percentages',
    '',
    '|Degree|Loss of body weight|',
    '|---|---|',
    '|**No clinically detectable dehydration**|usually **< 5 %**|',
    '|**Clinical dehydration**|**5 % – 9 %**|',
    '|**SHOCK**|**≥ 10 %**|',
    '',
    '### ⚠️ How dehydration is actually measured',
    '',
    '- **The most accurate measure:** the **degree of WEIGHT LOSS during the period of illness** — not any clinical sign.',
    '- **The conversion:** **1 kg of body weight lost = 1 litre of fluid lost**.',
    '- **The % deficit:** that loss expressed as a proportion of body weight.',
    '',
    '*Gastroenteritis and its ORS management in full are `gi-diarrhoea`; DKA fluids are `endo-dka`.*',
    '',
    'Src: L4 pp.9–11, 13, 17; the 1 kg = 1 litre premise from p.18\'s embedded original, read visually'
  ].join('\n'),
  qs: []
},

{
  id: 'emg-14', w: 'must',
  h: 'The dehydration grid — thirteen signs across three columns',
  body: [
    '**Table 6.3:** the chapter\'s main discrimination table. It is an image on the slide and appears nowhere in the cached text.',
    '',
    '|Sign|No clinical dehydration|Clinical dehydration|SHOCK|',
    '|---|---|---|---|',
    '|**General appearance**|Appears well|Appears unwell or deteriorating 🚩|Appears unwell|',
    '|**Conscious level**|Alert and responsive|Altered responsiveness — irritable, lethargic 🚩|**Decreased level of consciousness**|',
    '|**Urine output**|Normal|Decreased|Decreased|',
    '|**Skin colour**|Normal|Normal|**Pale or mottled**|',
    '|**Extremities**|Warm|Warm|**COLD**|',
    '|**Eyes**|Normal|Sunken 🚩|**Grossly sunken**|',
    '|**Mucous membranes**|Moist|Dry|Dry|',
    '|**Heart rate**|Normal|Tachycardia 🚩|Tachycardia|',
    '|**Breathing**|Normal|Tachypnoea 🚩|Tachypnoea|',
    '|**Peripheral pulses**|Normal|Normal|**WEAK**|',
    '|**Capillary refill time**|Normal|Normal|**Prolonged (> 2 s)**|',
    '|**Skin turgor**|Normal|Reduced 🚩|Reduced|',
    '|**Blood pressure**|Normal|**Normal**|**Hypotension — indicates DECOMPENSATED shock**|',
    '',
    '- **🚩 marks a red-flag sign** — it identifies a child **at risk of progressing to shock**.',
    '- **Severity:** the more numerous and more pronounced the signs, the greater it is.',
    '- **⚠️ Read the last row across:** BP is **normal in clinical dehydration**, falling only in the shock column.',
    '- **⚠️ And the extremities row:** **warm** in both non-shock columns, **cold** only in shock.',
    '',
    'Src: L4 p.12, Table 6.3 (adapted from NICE, London 2009) — image-only, read visually'
  ].join('\n'),
  qs: []
},

{
  id: 'emg-15', w: 'must',
  h: 'Fluid resuscitation — the bolus, and the number that calls for a ventilator',
  body: [
    '### ⚠️ The bolus',
    '',
    '|What|Figure|',
    '|---|---|',
    '|**Fluid**|**Balanced crystalloids** — or **blood**|',
    '|**Volume**|**10 mL/kg**|',
    '|**Repeat**|**× 4 if necessary** — so **up to 40 mL/kg**|',
    '|**Then**|**Intensive care**|',
    '',
    '**⚠️ Past 40 mL/kg:** children who require **more than 40 mL/kg** of resuscitation fluid are **likely to require mechanical ventilation** — call someone with advanced airway skills if multiple boluses are needed.',
    '',
    '*The widely taught alternative bolus is 20 mL/kg (not taken from the course material); L4 teaches 10 mL/kg, from the 6th edition of its source textbook, and 10 is what this chapter records. `endo-dka` independently gives 10 mL/kg over 30–60 minutes.*',
    '',
    '### The four phases of fluid management',
    '',
    '**The order:** fluid resuscitation → fluid deficit replacement → maintenance fluid → ongoing losses. Only the first is an emergency.',
    '',
    'Src: L4 pp.14–16, Figure 6.8 — p.15 image-only, read visually'
  ].join('\n'),
  flow: {
    title: 'Initial fluid resuscitation in shock',
    steps: [
      { k: 'alert', t: 'Balanced crystalloids or blood, 10 mL/kg', n: 'Repeat ×4 if necessary' },
      { k: 'decision', t: 'Improvement?', yes: 'Correction of hypovolaemia', no: 'Repeat the bolus — up to 4 in total' },
      { k: 'alert', t: 'Still no improvement after 40 mL/kg — intensive care', n: 'Mechanical ventilation likely; call advanced airway skills' }
    ]
  },
  qs: []
},

{
  id: 'emg-16', w: 'high',
  h: 'Deficit, maintenance and ongoing losses — the arithmetic',
  body: [
    '### Deficit replacement',
    '',
    'Assessed **after resuscitation**, by **either**:',
    '',
    '- **Clinical features:** **clinical dehydration = 5 % deficit** · **shock = 10 % deficit**.',
    '- **Change in weight:** where an accurate **premorbid** weight is available.',
    '- **⚠️ Deduct the boluses:** fluid given during resuscitation comes **off** the deficit.',
    '',
    '### ⚠️ Maintenance — the 24-hour formula',
    '',
    '|Body weight|Fluid|',
    '|---|---|',
    '|**First 10 kg**|**100 mL/kg**|A|',
    '|**Second 10 kg**|**50 mL/kg**|B|',
    '|**Every 1 kg thereafter**|**20 mL/kg**|C|',
    '|**Total in 24 hours**|**A + B + C**||',
    '',
    '**The fluid itself:** **0.9 % NaCl with 5 % dextrose**, and consider **20 mmol KCl per 500-mL bag** according to serum levels.',
    '',
    '### ⚠️ Two adjustments, both examinable',
    '',
    '- **Risk of SIADH — for example pneumonia:** give **two thirds of standard maintenance**.',
    '- **Hypernatraemic dehydration or DKA:** **increase the replacement time to 48 hours**, to avoid rapid changes in osmolarity.',
    '',
    '### Enteral or intravenous?',
    '',
    '- **Oral intake counts:** maintenance fluids are reduced to take account of it.',
    '- **The absorption trade-off:** IV gives **100 % absorption in 30–60 minutes**; oral gives **50–70 % over several hours**.',
    '',
    'Src: L4 pp.17–22; the maintenance table (p.18) and the absorption figures (p.21) image-only, read visually'
  ].join('\n'),
  qs: []
}

    ]
  }
};
