/* op-lid + op-lac — "Lid" and "Lacrimal System", Ophthalmology.
   Written 2026-08-18 under START-HERE.md §14 (slide-density revision notes),
   §14.1 (budget and page prediction), §14.2 (the two-sided coverage floor),
   §14.3 (telegraphic style), §14.3a (layout and the mdLead() anchor rule) and
   §14.5 (the deferral register), plus content\ophtho\theory-plan.md ("What
   writing the first twelve chapters taught", the two USER RULINGS of
   2026-08-18, the "Book chapters read" log and the skip-in-final ruling).
   Shape copied from op-conj.draft.js and op-uvea.draft.js.

   ⚠️ THIS FILE HOLDS TWO CHAPTERS, BOTH WITH EXISTING KEYS in modules.js
   (line 33 `op-lid` "Lid"; line 44 `op-lac` "Lacrimal System"). Neither is new;
   no modules.js registration is needed. This file touches no app\data\* file,
   no MEMORY.md, no resume file and no git.

     `op-lid`  3 linked questions — `opqb-t1-17`, `opqb-t3-115`, `opqb-t3-120`
     `op-lac`  1 linked question  — `opqb-t1-22`

   ⚠️ NO NUMBER IN THIS HEADER IS A MEASUREMENT OF THE FINISHED FILE. Per the
   eleven header faults recorded in §14.1 and theory-plan.md, this header states
   reasoning, sources and deferrals and states NO totals. Every figure below is
   derived from a SOURCE, never from the draft. The hub measures body words from
   disk — canonical W(s.body) over every section, Src: lines INCLUDED — and
   prints the chapters.

   ===========================================================================
   SOURCES

   Primary, both read 2026-08-18 and cached:
     content\ophtho\book\ch05-eyelids.txt          printed 70–81, 12 pp, 6.5 %
     content\ophtho\book\ch04-lacrimal-system.txt  printed 62–69,  8 pp, 3 %

   ⚠️⚠️ AND `L5) Eyelid disease` IS USED, WHICH THE BRIEF SAID THE BOOK HAD
   SUPERSEDED. See "WHAT CONTRADICTS THE BRIEF" (1) below — the register row's
   blocker annotation reads "the book supersedes `L5`", and that is true of lid
   DISEASE and false of six specific items the deck alone prints.
   `content\ophtho\lectures\L5) Eyelid disease.txt` — 47 slides, 365 w. Counted.

   ⚠️ `L9) lacrimal system..txt` IS NOT A CACHE. Verified on disk today: 38
   words, being the string `CamScanner` × 33 plus the header. NOT counted. The
   2026-08-16 calibration read of all 33 pages was never transcribed and its
   rendered images are gone; its dozen highlights survive only in
   content\ophtho\theory-plan.md §"Calibration read". Every use of them in
   `op-lac` says so in the body, not just here.

   ⚠️ CITATIONS ARE THE **PRINTED** PAGE. PDF page = printed + 2, and no PDF
   page appears anywhere in a chapter body. Book Src: lines read
   `ophthalmology.pdf (HEALIX) ch.<N> p.<printed>`.

   ⚠️ NO RENDER WAS COMMISSIONED BY THIS AGENT AND NONE WAS AUTHORISED. Both
   book caches were written by the reading agent from 150 dpi page renders, with
   300 dpi re-crops on ch.5's ptosis-surgery panel and trichiasis diagrams and on
   ch.4's in-photo dye-disappearance label. Where this file says the book prints
   nothing, that is the cache's own verified NOT-COVERED list, not an inference
   from silence.

   ===========================================================================
   BUDGET (§14.1). Both terms computed; TERM 2 collapses, as in every
   ophthalmology chapter.

     TERM 1, source words:
       `op-lid`  ch.5 5,646 w of teaching + `L5` 365 w (counted — its own deck,
                 unspent; `va-9` cites it and expressly does not teach from it)
       `op-lac`  ch.4 3,389 w of teaching
                 + `L9` **NOT counted** — there is nothing to count (38 w of
                   `CamScanner`). The theory-plan highlights are cited, not
                   billed; §14.5's rule is that a budget may understate a
                   chapter, never overstate it.
     TERM 2, 25 × linked questions:
       `op-lid`  25 × 3 = 75   — far under the floor
       `op-lac`  25 × 1 = 25   — far under the floor

     budget = max(TERM 1, TERM 2), floor 600, cap 3,000:
       `op-lid`  3,000 (TERM 1 capped)
       `op-lac`  3,000 (TERM 1 capped)

   ⚠️ THE OPERATIVE CEILING GOVERNS, NOT THE BUDGET — ~2,400 body words /
   ~10 printed pages, hard shape 13. At 1:1 the sources would print at 23.5 pp
   (`op-lid`) and 14.1 pp (`op-lac`). `op-lid` is therefore the largest
   compression the module has attempted.

   ⚠️ THE CALIBRATION USED IS THIS MODULE'S OWN MEASURED ONE, not ÷240.
   Book-sourced chapters here print at ~300 words per page — `op-conj` 3,579 w
   → 12 pp, `op-squint` 3,448 → 11, `op-neuro-optic` 3,362 → 11, `op-uvea`
   2,992 → 10. Both chapters were written to land inside the 13-page shape on
   that ratio, `op-lac` nearer 10.

   ⚠️⚠️ THE BILL FOR `op-lid`, STATED RATHER THAN PAID BY DELETING SOMETHING.
   It is a §14.1 SURVEY chapter and both terms are low for the same reason —
   many entities, thinly asked (three questions over the whole of lid disease).
   Counted at planning time: **fifteen distinct entities** (hordeolum externum,
   hordeolum internum, chalazion, anterior seborrhoeic blepharitis, anterior
   staphylococcal blepharitis, posterior blepharitis/MGD, ptosis, lid
   retraction, entropion, ectropion, trichiasis, epicanthus, lid swelling,
   xanthelasma, lagophthalmos) at §14.1's measured ~90-word entity floor
   = ~1,350 w before a single grid — and the chapter's spine is FIVE grids
   costed at rows × columns per §14.1: the hordeolum comparison (4 × 2),
   seborrhoeic vs staphylococcal (5 × 2), the two four-type malposition
   classifications written as one table (4 × 2), the ptosis aetiology list with
   its levator-function column (7 × 2), the operation-selection grid (5 × 2),
   plus the lid-swelling 2 × 2. Anatomy costs a framework section of its own.

   WHAT THE NEXT 300 WORDS OF CUTTING WOULD COST, NAMED, so the hub has a menu
   rather than an argument:
     `op-lid`  · `lid-11` entire — but it is the only place the reader is told
                 that the chapter's own objectives promise malignancies it never
                 teaches, and the only home for the deck's herpes zoster
                 ophthalmicus and ecchymosis slides · or `lid-1`'s figure-only
                 label list back to a stub (`orbicularis` returns ZERO
                 module-wide, so nothing else carries it) · or `lid-9`'s
                 xanthelasma investigations, which are four lines the bank
                 has not yet asked · **NOT `lid-6`**, which is the chapter's
                 single most valuable figure-only item.
     `op-lac`  · `lac-3`'s non-Sjögren cause list back to its headings · or
                 `lac-10` entire, at the cost of canaliculitis, which `red-11`
                 names and nothing in the module explains · **NOT `lac-6`**,
                 which is the diagnostic core of epiphora.

   WHERE `op-lid` WAS COMPRESSED — nothing dropped, three things not repeated:
     (a) THE MANAGEMENT NUMBERS ARE CROSS-REFERENCED, NOT SUPPLIED. ch.5 prints
         no dose, duration or follow-up interval in twelve pages, and merged
         `rdm-8`/`rdm-9` already carry them from `L37`, sourced — warm
         compresses 4× daily for 3–5 min, dilute baby shampoo 2 drops in 2 oz,
         bacitracin/erythromycin to the margin at night for a week, doxycycline
         100 mg bd tapered over 2 months, artificial tears 4–8× a day, and the
         "no resolution in 3–4 weeks → refer for incision and curettage" rule.
         `CLAUDE.md` §4 says prefer the other source to outside knowledge where
         it prints the fact. That is the whole answer to the brief's warning
         about quantitative gap-fills, and it cost no tag.
     (b) The eight `va-9` inspection labels are written as DISEASE and the
         labels are not restated.
     (c) `orb-8`'s preseptal/orbital cellulitis grid, `cor-3`/`cor-17`'s
         exposure and neurotrophic keratopathy, `pup-2`/`nrv-4`'s Horner and
         `mot-7`/`mot-9`'s third-nerve palsy and myasthenia are pointed at, not
         re-derived.

   ===========================================================================
   ⚠️⚠️ THE LID-TUMOUR HOLE — HOW IT WAS HANDLED.

   ch.5's opening objectives flowchart lists **Malignancies** under "Others",
   and its printed 72 lists **"3. neoplasms"** as one of three categories of lid
   disease. Printed 70–81 contain NO basal cell carcinoma, NO squamous cell
   carcinoma, NO sebaceous gland carcinoma, NO melanoma, NO Mohs surgery and NO
   lid-reconstruction technique. The single oncological clause in twelve pages
   is "biopsied to exclude an underlying malignancy (meibomian gland carcinoma)"
   inside the chalazion entry (printed 73). The cache verified every one of
   those absences term by term.

   WHAT WAS DONE — and nothing was invented:
     · The lid DISEASE half of the register row is delivered in full.
     · The TUMOUR half is recorded as an OPEN DEFERRAL to `op-onc`, sourced to
       the book's own ch.17 "Malignancies of the Eye and its Adnexa", printed
       214–217, four pages, UNREAD. The register already carries two other rows
       against `op-onc` from ch.17, so this joins them rather than opening a
       new front.
     · `lid-11` tells the reader, in the chapter, where lid tumours ARE written
       today: `va-9` (BCC as the commonest lid malignancy, an inspection
       label), `red-11` (BCC, SCC and molluscum contagiosum as lid lesions,
       referred NON-urgently), `rdm-9` (the persistent-or-recurring lid mass
       biopsy rule naming all three carcinomas), `rdm-8` (chronic UNILATERAL
       blepharitis referred to exclude sebaceous or squamous carcinoma) and
       `orb-16` (lacrimal gland pleomorphic adenoma and carcinoma as orbital
       masses). So the module carries the NAMES and the REFERRAL RULES and no
       disease account, and the chapter says exactly that.
     · NO tumour section was written. Xanthelasma is written as the benign
       lesion the book teaches, not as a stand-in for the missing group.

   ===========================================================================
   ⚠️⚠️ THE `L9` PAYLOADS — HOW THEY WERE HANDLED.

   The brief's instruction was followed exactly, and the verification behind it
   was re-run rather than assumed:
     · THE BOOK'S FOUR DRAINAGE TESTS ARE THE PRIMARY ACCOUNT — regurge,
       fluorescein dye disappearance, lacrimal probing, lacrimal irrigation,
       with the full result→diagnosis map, the hard/soft stop and the three
       simultaneous meanings of a positive regurge (`lac-6`).
     · JONES I AND JONES II are written as **the lecture's own version**, with
       both mappings, and the body says in terms that `Jones` appears nowhere in
       ch.4, that `L9` was read on 2026-08-16 and NEVER TRANSCRIBED, and that
       the mappings are cited via content\ophtho\theory-plan.md. `Jones`
       returns ZERO across `theory.ophtho.js` — verified today, not assumed.
     · THE TEAR-FILM THICKNESSES (lipid 0.1 µm, aqueous 8 µm, mucin 0.2 µm) are
       given in `lac-1` under the same statement, because the book prints the
       three layers with sources and functions and NO measurement of any kind.
     · THE GLAND EPONYMS ARE CROSS-REFERENCED, NOT REPEATED. `cnj-1`, written
       today, already carries Krause, Wolfring, Manz and Henle; `rdm-9` already
       carries Zeis and Moll; `lid-1` carries Wolfring, Zeis and Moll as the
       ch.5 figure labels they are. `lac-1` points at all three and adds only
       that **Krause is printed nowhere in ch.4 or ch.5** — Wolfring survives as
       a single figure label in the ch.5 eyelid cross-section.
     · L9's contrast DACRYOCYSTOGRAPHY (p.20 of the deck) is named in `lac-6`
       under the same citation, because ch.4's NOT-COVERED list confirms the
       book prints no lacrimal imaging at all.

   ===========================================================================
   ⚠️ THE TUTORIAL MARKERS, CARRIED THROUGH — ALL OF THEM, AT FULL WEIGHT.

   The contents page (PDF p.3) states: "In this book, anything we put (Tutorial)
   or (T) beside / before it , study in round & skip in final". Today's ruling is
   that tutorial-marked material is written IN FULL and at FULL WEIGHT with the
   tag recorded beside it, because the question bank asks it repeatedly. The
   marker was NOT used as a compression rule anywhere in either chapter. Spelled
   out at first appearance in each chapter, shortened thereafter.

   ch.4 — four physical forms, six occurrences:
     1. p.64 framed side-box, "+ Meibomian gland dysfunction … → Tutorial" → `lac-3`
     2. p.64 inline, the two screen-syndrome NAMES only                    → `lac-3`
     3. p.65 arrow-fed framed box, the whole TBUT test                     → `lac-4`
     4. p.66 inline, "punctal stenosis, NLD obstruction → Tutorial"        → `lac-5`
     5. p.66 ⚠️ THE WHOLE FOUR-TEST BLOCK, headed "(from tutorial. not in
             the book)" — the diagnostic core of epiphora                  → `lac-6`
     6. p.67 inline, abscess "incision & drainage (Tutorial)"              → `lac-8`
     7. p.69 arrow-fed box "pseudo ptosis in tutorial", and the framed
             "+ from tutorial" box (hot fomentation, analgesics)           → `lac-9`

   ch.5 — inline form only, plus one framed box; six occurrences:
     1. p.78 "+ chronic conjunctivitis (T)" — trichiasis complications     → `lid-8`
     2. p.78 "Repeated epilation … (Temporary → Tutorial)"                 → `lid-8`
     3. p.78 "surgery. (mm graft in gray line → Tutorial)" — ⚠️ the ONLY
             description of what the trichiasis operation is               → `lid-8`
     4. p.80 "CO2 laser therapy → Tutorial" — xanthelasma                  → `lid-9`
     5. p.81 "5. Functional (GA, unconsciousness) → Tutorial" — ⚠️ A WHOLE
             NUMBERED AETIOLOGY of lagophthalmos                           → `lid-10`
     6. p.81 the framed box "Treatment from Tutorial" — the chapter's only
             temporary/permanent split, and the only source of LATERAL
             TARSORRHAPHY and MEDIAL CANTHOPLASTY                          → `lid-10`

   ⚠️ Markers 3, 5 and 6 are why the ruling exists: reading past them deletes a
   numbered list item and two named operations, not a footnote.
   ⚠️ No "(++ Additional)" tag appears in either chapter.

   ===========================================================================
   ⚠️ THE BOOK'S OWN DEFECTS — RECORDED IN PLACE, NEVER SILENTLY CORRECTED.

   ch.4
     · ⚠️ THREE ANSWERS ON WHERE THE NASOLACRIMAL DUCT DRAINS — p.63 "behind
       the inferior turbinate", p.66 "under the inferior turbinate", p.67 DCR
       connecting the sac to the "middle meatus". All three held and cited in a
       visible table in `lac-2`, with a tagged clause on which one a viva wants
       and why the middle meatus is the surgeon's opening rather than the duct's
       end. The brief asked for a visible note; it is a table, not an aside.
     · "lacrimal sad" [sic] for "lacrimal sac" (p.67)                     → `lac-7`
     · Fig (4-1) does not exist; Fig (4-2)/(4-3)/(4-4) do. NO FIGURE NUMBER IS
       USED AS AN INDEX anywhere in either chapter.
     · The hard-stop/soft-stop diagram is cut from another book and carries its
       own foreign caption "Fig 2.12" — not this book's numbering  → `lac-6`

   ch.5
     · "gland of Zeiss" (p.72 table) vs "Gland of Zeis" (p.71 figure)     → `lid-1`
     · "Hordeolum Extrenum" [sic] in the comparison heading (p.72)        → `lid-2`
     · "causnig" and "conreal" [sic] (p.78)                              → `lid-8`
     · "medial Canti" and "cantal tendon" [sic] (p.79)                   → `lid-9`
     · "TAPSUS" for Tarsus and "Sotore" for Suture, hand-lettered (p.78) → `lid-8`
     · The p.81 sedation parenthesis is never closed                     → `lid-10`
     · ⚠️ Fig (5-1) does not exist, and Fig (5-12) prints TWO PAGES AFTER
       Fig (5-13) — 5-13 on printed 79, 5-12 on printed 81.
     · The "Others" group is printed in a DIFFERENT ORDER from the flowchart
       that promises it.
     · "second most common infection of the eyelid" is printed without the
       book ever saying what is FIRST                                    → `lid-2`
     · "Thyroid eye disease (Myxoedema)" as printed in the lid-swelling
       cause table                                                       → `lid-9`

   ===========================================================================
   FIGURE-ONLY TEACHING PROMOTED TO PRIMARY CONTENT (every item, both chapters):

   ch.5 · ⚠️ THE PTOSIS OPERATION-SELECTION RULE — levator resection where
          levator function is GOOD, frontalis sling where it is POOR — printed
          ONLY in the two figure headers; the prose says merely "Surgical
          (levator resection, frontalis sling, etc)". With it: that the resection
          amount is determined by levator function and severity, that the sling
          attaches TARSUS TO FRONTALIS MUSCLE, and the two clinical captions
          pairing aponeurotic→good and congenital→poor            → `lid-6`
        · ⚠️ THE TRICHIASIS OPERATION — exists only as two hand-drawn panels
          over the bare word "surgery": groove cut along the GREY LINE anterior
          to the tarsus, a GRAFT interposed, sutured, the lash line rotated
          forward                                                   → `lid-8`
        · The p.71 labelled lid cross-section — MÜLLER MUSCLE, levator
          aponeurosis as a separate structure, orbital septum, orbicularis in
          three portions, preaponeurotic fat, peripheral and marginal arterial
          arcades, Asian vs non-Asian crease, and the glands of ZEIS, MOLL and
          WOLFRING. None stated in words anywhere on printed 70–81 → `lid-1`
        · The p.72 greyed flowchart — the ONLY place the acute/chronic axis is
          drawn against the localized/diffuse one                    → `lid-2`
        · The chalazion's position AWAY from the margin, WITHIN the tarsus, in
          all three photographs                                      → `lid-3`
        · SOFT GREASY scales vs HARD DRY COLLARETTES — the contrast exists only
          by comparing two photograph sets; neither page states it   → `lid-4`
        · MARGINAL KERATITIS — appears in the whole chapter only as a photograph
          caption; the prose complication list never names it        → `lid-4`
        · Plugged/capped meibomian orifices and the telangiectatic posterior
          margin                                                     → `lid-4`
        · The epicanthus photograph's CENTRAL CORNEAL LIGHT REFLEXES, the
          finding that proves the squint is false                    → `lid-9`
        · The hand-drawn Bell's-phenomenon sketch, and the one photograph in
          the chapter showing it happening in a patient              → `lid-10`

   ch.4 · The p.63 apparatus figure — the gland's ORBITAL and PALPEBRAL PARTS
          separated by the LEVATOR PALPEBRAE SUPERIORIS, the VALVE OF HASNER
          (the only valve named in the chapter), the endpoint "Inferior meatus
          of nose", and multiple lacrimal ducts entering the sac      → `lac-2`
        · The tear-film wedge figure — the layer ORDER outward from the cornea
          (mucin → aqueous → lipid), the reverse of the prose's numbering, and
          the aqueous band as much the thickest                       → `lac-1`
        · ⚠️ THE FLUORESCEIN DYE DISAPPEARANCE TEST HAS NO BODY TEXT AT ALL —
          its 5-minute reading and its interpretation exist only as a red
          annotation baked into the photograph                        → `lac-6`
        · Acute vs chronic dacryocystitis: the SKIN is the visual difference —
          erythematous and tense against normal skin colour over a smooth
          mucocele. Shown in Fig (4-2)/(4-3), never stated in words   → `lac-8`
        · The lateral-third-heavy swelling that PRODUCES the S-shaped lid in
          dacryoadenitis                                             → `lac-9`

   ===========================================================================
   GAPS FILLED AND TAGGED (`Herophilus\CLAUDE.md` §4 — a gap is ANSWERED, NOT
   DECLARED; the tag is a short clause on the claim, never a dead-end sentence).
   House style copied from `vsc-9`/`vsc-12`.

   1. **THE STRUCTURAL CAUSES OF LAGOPHTHALMOS — `lid-10`.** The book's five
      aetiologies are paralytic, cicatricial, physiologic, medication and
      functional. `L5` sl.15/16 head the topic **Paralytic** and **Structural**
      and lists nothing under either. `opqb-t3-115` offers THYROTOXIC
      EXOPHTHALMOS and SYMBLEPHARON as true causes. Thyroid eye disease is
      SOURCED, from ch.4 p.64 (evaporative dry eye "with lid retraction,
      proptosis … and/or lagophthalmos") and from `red-11`; proptosis of any
      cause, buphthalmos, high myopia and symblepharon are supplied and tagged.
   2. **WHY THE FIFTH NERVE IS THE EXCEPTION — `lid-10`.** The question turns on
      it and neither source states it. Supplied and tagged: the trigeminal is
      sensory to the cornea and motor only to mastication, so closure is normal;
      its cornea fails by NEUROTROPHIC keratopathy instead, which `cor-3`/`cor-6`
      already carry and which is cross-referenced rather than re-taught.
   3. **THE LEVATOR-FUNCTION MILLIMETRES — `lid-6`, AND THEY ARE SOURCED, NOT A
      FILL.** ch.5 grades levator function only "good" or "poor" and its
      NOT-COVERED list confirms no millimetre banding. `L5` sl.8 prints
      "Indicated for any ptosis provided levator function is at least 5 mm" and
      sl.9 "Severe ptosis with poor levator function ( 4 mm or less )". See the
      contradiction section — this is the deck earning its place.
   4. **SCHIRMER — `lac-4`.** ch.4's NOT-COVERED list names it explicitly:
      the chapter teaches TBUT as the dry-eye test and never mentions Schirmer.
      Supplied at the size a reader needs — filter strip in the lower fornix for
      5 minutes, <10 mm abnormal, <5 mm definite — and tagged. `cor-21` already
      lists Schirmer and TBUT together as pre-refractive-surgery tests and is
      cross-referenced.
   5. **CANALICULITIS — `lac-10`.** ABSENT from ch.4; the word never appears.
      `red-11` names it as a lacrimal cause of a red eye and stops. Supplied
      whole — pouting erythematous punctum, Actinomyces israelii, expressible
      concretions, canaliculotomy with curettage — and tagged.
   6. **CANALICULAR LACERATION REPAIR — `lac-10`.** ABSENT from ch.4; silastic
      intubation appears there only as rung 3 of the congenital NLD ladder.
      Supplied and tagged: any laceration medial to the punctum is assumed
      canalicular, repaired primarily within 24–48 h over a silicone stent left
      weeks to months.
   7. **THE LACRIMAL GLAND'S BONY SITE — `lac-2`.** ch.4 delegates anatomy to
      ch.1 in prose ("Please refer to the anatomy section in chapter one") and
      chapter 1 is unread. The chapter's own printed facts point the same way —
      "outer one-third of the upper lid", "superolateral part of the orbit", the
      opener figure — so the lacrimal fossa of the frontal bone is supplied and
      tagged. `op-lac`'s single question turns on exactly this.
   8. **THE THREE DCR VARIANTS — `lac-7`.** ch.4 names DCR four times and never
      subclassifies it; endoscopic vs external, mitomycin C and the Lester Jones
      tube are on its NOT-COVERED list. One tagged line each.
   9. **HERPES ZOSTER OPHTHALMICUS, HERPES SIMPLEX AND ECCHYMOSIS — `lid-11`.**
      All three are `L5` slide titles (sl.35, sl.36) with no body text, and all
      three are on ch.5's verified-absent list. One tagged line each, with the
      corneal and uveitic halves pointed at `cor-6`, `sys-12` and `scl-2` rather
      than re-taught.
  10. Small tagged clauses in place: which drainage answer a viva wants
      (`lac-2`), why dry eye causes watering (`lac-5`), the sac-tumour and
      lacrimal-pump absences named rather than filled (`lac-10`), and the
      bilateral-periorbital-ecchymosis base-of-skull rule (`lid-11`).

   ===========================================================================
   ⚠️ REGISTER ROWS (§14.5) — ALL SIX VERIFIED AGAINST THEIR NAMED SOURCE AND
   AGAINST THE MERGED `app\data\theory.ophtho.js`, SECOND CLAUSES INCLUDED.
   `op-lid` is owed two, `op-lac` four, exactly as the census says. THREE OF THE
   SIX ARE DEFECTIVE and the evidence is given rather than the defect worked
   around.

   ─── `op-lid`, two rows ───

   ROW 1 — `op-red` (L37) → `op-lid`: "Lid disease in full, plus lid tumours."
     Blocker annotation: "the book supersedes `L5`".
     ✅ LID DISEASE DELIVERED IN FULL from ch.5 — `lid-1`…`lid-10`.
     ❌ **THE TUMOUR HALF IS NOT DELIVERABLE FROM ch.5** and is re-deferred to
        `op-onc` with the evidence. See the lid-tumour section above.
     ⚠️ **THE BLOCKER ANNOTATION IS HALF WRONG — TRUE OF LID DISEASE, FALSE OF
        `L5` AS A WHOLE.** Six items are printed by the deck and by neither the
        book nor any merged chapter: the 5 mm / 4 mm levator-function bands
        (sl.8, sl.9) · **Marcus Gunn jaw-winking syndrome** as a frontalis-sling
        indication (sl.9) · the **Ice Pack** and **Tensilon** tests (sl.13) ·
        the **Paralytic / Structural** lagophthalmos split (sl.15–16) ·
        **Herpes zoster ophthalmicus and herpes simplex** as lid disease (sl.36)
        · **Ecchymosis, "black eye"** (sl.35). Every one is on ch.5's own
        verified-absent list. `frontalis` returns ZERO across
        `theory.ophtho.js`; `Marcus Gunn` returns two hits and **both are the
        PUPIL** (`pup-4`, `acu-2`), not the jaw-winking syndrome.
     ⚠️ **AND THE ROW IS PARTLY CIRCULAR — the tenth instance of the shape.**
        The deferring chapter had already written much of what it deferred:
        merged `rdm-9` carries stye and chalazion with the external/internal
        split, the biopsy rule and four treatment intervals; `rdm-8` carries
        blepharitis with its anterior/posterior split and four drug regimens;
        `red-11` carries the lid-malposition and lid-function referral rules.
        **Resolved as a declared overlap, not a rewrite:** ch.5's own accounts
        are written here because they are fuller and different in kind (a
        definition/incidence/picture/treatment grid against a primary-care
        management list), and every NUMBER stays where it is already sourced —
        `lid-2`, `lid-3` and `lid-4` point at `rdm-8`/`rdm-9` for the doses and
        intervals instead of tagging fills.

   ROW 2 — `op-va` (L3,4 sl.5–6) → `op-lid`: "The eight eyelid labels as
     ENTITIES — stye, chalazion, entropion, ectropion, ptosis, lagophthalmos,
     BCC, xanthelasma. L3,4 prints labels on photographs and no definitions;
     `L5) Eyelid disease` owns the teaching incl. levator-function grades.
     Carried in `op-va` as an inspection checklist only. No `op-va` question
     tests any of them — verified across all sixteen."
     ✅ **ROW VERIFIED EXACT ON EVERY CLAUSE, AND IT IS THE ROW THAT SAVED THE
        CHAPTER.** Merged `va-9` carries exactly those eight as one-line
        inspection labels under the heading "Eyelid — you may find", with no
        aetiology, no classification, no treatment, and its own closing aside
        already says "Lid disease is `op-lid`'s (`L5`)". Its glosses are
        themselves tagged as not-in-course-material.
     ✅ **SECOND CLAUSE TRUE AND LOAD-BEARING:** "`L5` owns the teaching incl.
        levator-function grades" is the only place in the register that predicts
        the millimetre bands, and the deck does print them. This row is why the
        deck was opened at all.
     ✅ SEVEN OF THE EIGHT DELIVERED AS DISEASE — `lid-2` (stye), `lid-3`
        (chalazion), `lid-7` (entropion, ectropion), `lid-5`/`lid-6` (ptosis),
        `lid-10` (lagophthalmos), `lid-9` (xanthelasma).
     ❌ **BCC — the eighth — IS NOT DELIVERABLE.** ch.5 never names it. Rolled
        into the `op-onc` deferral and stated in `lid-11`.

   ─── `op-lac`, four rows ───

   ROW 3 — `op-orbit-mass` (L10 sl.31) → `op-lac`: "~~Acute dacryoadenitis in
     full~~, plus the lacrimal gland as a structure." NARROWED 2026-08-17 on the
     grounds that the donor under-stated its own coverage.
     ✅ **THE NARROWING IS CONFIRMED EXACT.** Merged `orb-15` carries a full
        Acute DACRYOADENITIS block — idiopathic or viral (mumps, Epstein–Barr,
        cytomegalovirus), rapid onset of discomfort over the gland, S-shaped
        ptosis with lateral lid swelling over the palpebral lobe, orbital-lobe
        enlargement with downward-and-inward dystopia. `va-9` adds the
        upper-outer localisation. Re-read today; the 2026-08-17 correction
        stands.
     ✅ "THE GLAND AS A STRUCTURE" DELIVERED — and it is figure-only: ch.4's
        p.63 apparatus figure is the only place the orbital and palpebral parts
        and their separation by the levator palpebrae superioris appear
        (`lac-2`).
     ⚠️ **ONE THING THE NARROWING DID NOT ANTICIPATE: ch.4 ADDS A GREAT DEAL
        `orb-15` HAS NOT GOT** — the full aetiology (EBV first, five more
        viruses, bacterial, fungal, parasitic, autoimmune, NSOI, sarcoid,
        neoplastic), the four acute symptoms including diplopia in up or lateral
        gaze, five more signs, CHRONIC dacryoadenitis as the commoner form, and
        the whole investigation and treatment block. `lac-9` writes those and
        points at `orb-15` for the deck's version rather than repeating the
        S-shaped ptosis mechanism. So the row is right and its narrowing is
        right; what it under-predicted is the SIZE of the residue.

   ROW 4 — `op-red` (L37) → `op-lac`: "Dacryocystitis, canaliculitis, and the
     tear film itself." Blocked on `L9`'s owed read.
     ⚠️ **THE BLOCKER IS SUPERSEDED FOR TWO OF THE THREE, NOT ALL THREE.**
     ✅ DACRYOCYSTITIS — delivered in full from ch.4 pp.67–68, acute and
        chronic (`lac-8`).
     ✅ THE TEAR FILM — delivered from ch.4 p.63 (`lac-1`), three layers with
        sources and functions.
     ❌ **CANALICULITIS IS ABSENT FROM ch.4** — the cache searched all eight
        pages and every figure label; the word never appears, and neither do
        Actinomyces, concretions or canaliculotomy. Supplied and tagged in
        `lac-10`, cross-referenced to `red-11`. The row is reported one-third
        undeliverable rather than ticked.
     ✅ SECOND CLAUSE SOUND, NOT CIRCULAR — merged `red-11` carries
        dacryocystitis only in its red-eye role (an obvious raised erythematous
        mass, massage extruding pus, urgent referral) and canaliculitis as a
        bare name; `red-10` carries the tear FILM as a principle and KCS, and
        its own aside already says "The tear film's own three layers are
        `op-lac`'s". Checked, not assumed.

   ROW 5 — `op-va` (L3,4 sl.7) → `op-lac`: "Dacryoadenitis, dacryocystitis and
     the regurgitation test as entities — labels only on this deck. `L9)
     lacrimal system.` is the owning deck; its calibration read holds Jones I/II,
     the tear-film thicknesses and the gland eponyms, none of which are here. No
     `op-va` question tests them." Plus the ⚠️⚠️ annotation that the source it
     points at does not exist as a cache.
     ✅ FIRST CLAUSE VERIFIED EXACT. `va-9`'s "Lacrimal — you may find" block is
        three labels: dacryoadenitis (upper-outer swelling), dacryocystitis
        (swelling below the medial canthus), "+ve Regurge" (pressure over the
        sac returns fluid through the punctum, proving NLD obstruction).
     ✅ **THE ANNOTATION IS VERIFIED TRUE ON DISK TODAY** — `L9) lacrimal
        system..txt` is 38 words, the string `CamScanner` × 33. `Jones` returns
        ZERO across `theory.ophtho.js`.
     ✅ ALL THREE ENTITIES DELIVERED — `lac-9`, `lac-8`, and the regurge test as
        one of the book's four drainage tests in `lac-6`, where its three
        simultaneous meanings are printed.
     ⚠️ **ONE CORRECTION TO THE ROW: THE EPONYMS ARE NO LONGER `op-lac`'s TO
        WRITE.** The row was true when written. `cnj-1`, merged today, already
        carries Krause, Wolfring, Manz and Henle; `rdm-9` already carries Zeis
        and Moll. This is the eighth fault shape — a row gone stale because a
        third chapter delivered its payload — and `lac-1` cross-references
        rather than repeating. What genuinely remained, and is written, is the
        THICKNESSES and JONES I/II.

   ROW 6 — `op-trauma` (L25 sl.41–42) → `op-appear` + `op-lac`: "Marginal eyelid
     laceration repair and canalicular laceration repair with intubation, as
     PROCEDURES. `op-trauma` keeps only the three levels of lid laceration,
     which is the triage `L25` teaches."
     ⚠️⚠️ **THE SECOND CLAUSE IS FALSE — THE NINTH FAULT SHAPE AGAIN, A DONOR
        UNDER-STATING ITS OWN COVERAGE.** Merged `trm-9` does NOT keep only the
        three levels: it writes the MARGINAL REPAIR AS A PROCEDURE, in full —
        "an initial margin suture, partial-thickness lamellar sutures in the
        tarsus, then the margin sutures tied under the skin sutures". Quoted
        from the merged file, not from the row. So `op-appear`'s half of this
        row is **already delivered by the donor** and should be closed, not
        carried.
     ❌ **`op-lac`'s HALF IS UNDELIVERABLE FROM ch.4** — canalicular laceration
        and its repair are on the chapter's verified-absent list; silastic
        intubation appears once, for congenital NLD obstruction only. Supplied
        and tagged in `lac-10`, with `trm-9`'s own line ("Involving the LACRIMAL
        CANALICULI — the medial laceration that must be recognised before it is
        closed") cross-referenced as the triage it is.
     ⚠️ The row's blocker — "both receiving decks (`L27,28`, `L9`) are on the
        owed-visual-read list" — is now moot for `op-lac`: the book replaces
        `L9` for everything except the L9-only payloads named above, and it does
        not print this one either.

   ===========================================================================
   DEFERRALS OPENED BY THESE TWO CHAPTERS (§14.5 — an unrecorded promise is a
   deletion). Each was checked against the questions filed here before being
   deferred; none of the four questions turns on any of them.

   | Deferred from | Fact | Owed to |
   |---|---|---|
   | `op-lid` (ch.5 pp.70, 72, 73 — the ABSENCE) | **EYELID MALIGNANCIES AS DISEASES** — basal cell carcinoma, squamous cell carcinoma, sebaceous gland carcinoma, melanoma, Mohs surgery and lid reconstruction. ch.5 promises them in its objectives flowchart and its "3. neoplasms" category and teaches none of them; its only oncological clause is the chalazion biopsy rule. `lid-3` keeps that clause and `lid-11` names where the module's existing tumour NAMES and REFERRAL RULES live (`va-9`, `red-11`, `rdm-8`, `rdm-9`, `orb-16`). **Source: the book's own ch.17, printed 214–217, four pages, UNREAD** — the same chapter two existing rows already point at | `op-onc` ☐ |
   | `op-lid` (ch.5 pp.79–80 · `L5` sl.4, 34) | **EPICANTHUS CORRECTION AND XANTHELASMA REMOVAL AS COSMETIC OCULOPLASTIC PROCEDURES** — `lid-9` keeps the book's indications ("treatment for cosmetic reasons is surgical"; surgical excision, CO2 laser) and no technique, because the book prints none | `op-appear` ☐ |
   | `op-lid` (`L5` sl.36) | **HERPES ZOSTER OPHTHALMICUS AND OCULAR HERPES SIMPLEX BEYOND THE LID** — `lid-11` supplies one tagged line each on the lid eruption and Hutchinson's sign. ⚠️ **Verified already written before deferring**: the corneal disease is `cor-6`, the systemic/zoster associations `sys-12`, the scleral `scl-2`. This is a NOTICE, not a debt | `op-cornea` ✅ · `op-systemic` ✅ · `op-sclera` ✅ |
   | `op-lac` (ch.4 p.63, the book's own prose delegation) | **LACRIMAL ANATOMY IN DETAIL** — ch.4 prints "(Please refer to the anatomy section in chapter one for more details)" and delegates. `lac-2` keeps the two-part functional division, the excretory chain and the four figure-only items, and supplies the gland's bony site tagged. Book ch.1 (printed 2–44) is being read now | `op-intro` ☐ |
   | `op-lac` (ch.4 p.68, "neoplastic" named with no entity) | **LACRIMAL GLAND AND LACRIMAL SAC TUMOURS AS TUMOURS** — ch.4 names "neoplastic" once as an aetiology of dacryoadenitis and lists nothing; sac tumours are on its absent list. ⚠️ **Partly written already**: `orb-16` carries pleomorphic lacrimal gland adenoma and lacrimal gland carcinoma (adenoid cystic 50 %) as ORBITAL MASSES, and `lac-9` points there. What is owed is the tumour biology and the sac tumours | `op-onc` ☐ (already an open row from `orb-16`) |
   | `op-lac` (ch.4 p.66, the book's own prose delegation) | **FLUORESCEIN AS A DRUG** — ch.4 prints "(Refer to drugs chapter)" for dye evaluation. Book ch.20 "Drugs and the Eye" has no lecture deck and the user has ruled out adding a chapter for it, so this is recorded as a **pointer, not a debt**: the fluorescein METHOD is already written in merged `va-11` | — ⚠️ notice |

   ===========================================================================
   ⚠️⚠️ WHAT CONTRADICTS THE BRIEF — reported, not quietly worked around.

   (1) **THE BIGGEST ONE: "THE BOOK SUPERSEDES `L5`" IS FALSE FOR SIX ITEMS,
       AND ONE OF THEM IS THE CHAPTER'S ONLY QUANTITATIVE SURGICAL RULE.**
       The brief's own framing is that the row's blocker annotation "now says the
       book supersedes `L5` — true for lid *disease*, false for lid *tumours*".
       It is also false for lid SURGERY and for two lid ENTITIES.
       `content\ophtho\lectures\L5) Eyelid disease.txt` is on disk with 365
       words over 47 slides and it is NOT a bare title list: slides 8, 9 and 13
       carry real bodies. It alone prints **"levator function is at least 5 mm"**
       and **"poor levator function ( 4 mm or less )"**, **Marcus Gunn
       jaw-winking syndrome**, and the **Ice Pack** and **Tensilon** tests; it
       alone splits lagophthalmos **Paralytic / Structural**; and slides 35–36
       name **ecchymosis** and **herpes zoster ophthalmicus / herpes simplex** as
       lid disease. ch.5's verified-absent list confirms every one of those is
       missing from the book. The deck is used, counted, and cited.
   (2) **THE BRIEF SAYS "`op-va/va-9` … with one-line definitions and no disease
       content".** Accurate — but `va-9` closes by tagging its own glosses as
       not-in-course-material, which means the eight labels arrive here with no
       sourced definition at all. Noted because it raises, not lowers, what this
       chapter owes.
   (3) **THE `op-trauma` → `op-appear` + `op-lac` ROW'S SECOND CLAUSE IS FALSE.**
       `trm-9` already writes the marginal eyelid laceration repair as a
       procedure. `op-appear`'s half is delivered by the donor. See ROW 6.
   (4) **"A REGISTER ROW SENDS 'lid disease in full, plus lid tumours' TO
       `op-lid`" IS TRUE, AND THE ROW IS ALSO PARTLY CIRCULAR.** `rdm-8` and
       `rdm-9` already carry blepharitis, stye and chalazion in full with the
       doses ch.5 never prints. Handled as a declared overlap; the doses are not
       rewritten. See ROW 1.
   (5) **"CH.5 PRINTS FIVE NUMBERS AND NO DOSE ANYWHERE" IS TRUE, AND THE
       CONCLUSION "ANYTHING QUANTITATIVE IN `op-lid` IS A TAGGED FILL" IS NOT.**
       Three of the quantitative things a reader needs are already SOURCED
       elsewhere in the module and are cross-referenced instead: the treatment
       intervals and drug regimens in `rdm-8`/`rdm-9` from `L37`, and the
       levator-function millimetres in `L5`. Only the lagophthalmos structural
       causes and the fifth-nerve exception are genuine fills.
   (6) **"`op-lac` IS OWED FOUR ROWS THAT NAME THINGS THE BOOK DOES NOT PRINT"
       IS TRUE, BUT ONE OF THE FOUR PAYLOADS HAS SINCE BEEN DELIVERED BY A THIRD
       CHAPTER.** The gland eponyms are in merged `cnj-1` and `rdm-9`. See ROW 5.
   (7) **THE ch.4 DRAINAGE CONTRADICTION IS THREE-WAY, AND THE BRIEF'S THIRD
       LIMB IS THE ODD ONE OUT FOR A REASON WORTH PRINTING.** p.63 and p.66 both
       put the duct at the inferior turbinate and the p.63 figure labels
       "Inferior meatus of nose", so it is 3-against-1 on the anatomy; p.67's
       "middle meatus" describes where a SURGEON makes a new opening in a DCR,
       not where the duct ends. All three are held, cited and tabulated in
       `lac-2`; the reconciliation is tagged as outside the material.
   (8) **THE PAGE FORECAST.** `op-lid` at 1:1 is 23.5 pp and this is the module's
       largest compression; written to this module's measured ~300 w/pp it is
       expected to land in the 11–12 pp band — inside the 13-page hard shape,
       above the ~10 pp operative ceiling. That is §14.1's "state the bill and
       let the hub rule on pages" band, and the cut menu is in the BUDGET block.
       Nothing was deleted to reach a number.

   ===========================================================================
   RE-MEASURE COMMAND FOR THE HUB (the header states no totals; run this):
     node -e "global.window={};var fs=require('fs');
       eval(fs.readFileSync('content/ophtho/theory-drafts/op-lid.draft.js','utf8'));
       Object.keys(THEORY_DRAFT).forEach(function(k){var t=0;
         THEORY_DRAFT[k].sections.forEach(function(s){t+=s.body.trim().split(/\s+/).length;});
         console.log(k, THEORY_DRAFT[k].sections.length+' sections', t+' body words');});"
   =========================================================================== */

var THEORY_DRAFT = {
  "op-lac": {
    "intro": "Eight pages, five topics: tear film, dry eye, epiphora, dacryocystitis, dacryoadenitis. The diagnostic core — four drainage tests with a result-to-diagnosis map — is headed \"from tutorial, not in the book\" and is written here in full.",
    "sections": [
      {
        "id": "lac-1",
        "w": "must",
        "h": "The tear film — three layers, and the numbers the book leaves out",
        "body": "|Layer|Secreted by|Function|\n|---|---|---|\n|**1. OUTER OILY (lipid)**|the **MEIBOMIAN glands**|**prevent or decrease TEAR EVAPORATION**|\n|**2. MIDDLE AQUEOUS (watery)**|the **MAIN LACRIMAL GLAND** and the **ACCESSORY lacrimal glands in the conjunctiva**|the **MAIN BULK** of the tear film|\n|**3. INNER MUCOUS**|the **conjunctival GOBLET CELLS**|**adherence and STABILITY** of the film on the surface, **especially the cornea**|\n\n### Two kinds of aqueous secretion\n- **BASIC:** **constant**, keeping the ocular surface lubricated all the time.\n- **REFLEX:** triggered by **ocular irritation or emotion**. **⚠️ Hence the paradox:** a **dry** eye drives reflex secretion and the patient complains of **watering** (`lac-5`).\n\n### Figure-only — the spatial arrangement\n- **Outward from the cornea:** the order is **MUCIN → AQUEOUS → LIPID** — the **reverse of the prose’s numbering**, which starts at the oily layer.\n- **The aqueous band —** drawn as much the thickest; the prose says only *\"main bulk\"*. *The figure labels it \"Mucin Layer\", the prose \"mucous layer\".*\n\n### ⚠️ The thicknesses are the lecture's, and the lecture was never transcribed\n- **Thicknesses:** lipid 0.1 µm · aqueous (water) 8 µm · mucin 0.2 µm.\n- **⚠️ The book prints NO thickness** — no micrometre value, no percentage, no relative statement anywhere in ch.4.\n- **⚠️ Provenance, unusual enough to state:** these come from `L9) lacrimal system.` p.3, read end to end on 2026-08-16. **That deck's cached text is 33 repetitions of \"CamScanner\"** — the read was never written up, and the figures survive only as highlights in `content\\ophtho\\theory-plan.md`, which is how they are cited.\n\n*The gland eponyms are already written and are not repeated: **Krause, Wolfring, Manz, Henle** in `cnj-1`; **Zeis and Moll** in `rdm-9`; Wolfring again as a ch.5 figure label in `lid-1`. ⚠️ **Krause is printed nowhere in ch.4 or ch.5** — it is the lecture's eponym. Meibomian gland dysfunction, the commonest failed lipid layer: `lid-4`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.4 p.63; the thicknesses from L9 p.3 via content\\ophtho\\theory-plan.md",
        "qs": []
      },
      {
        "id": "lac-2",
        "w": "must",
        "h": "Secretory and excretory — the diagonal, and three answers on where the tears end up",
        "body": "### 1. Secretory\n- **Made of:** the **MAIN LACRIMAL GLAND**, the **ACCESSORY lacrimal glands**, the **conjunctival GOBLET CELLS** and the **MEIBOMIAN glands**.\n- **⚠️ Where the main gland is:** the book never states its bony site, delegating anatomy to its chapter 1. It is **SUPEROTEMPORAL, in the LACRIMAL FOSSA of the FRONTAL BONE** at the upper outer angle of the orbit *(not taken from the course material)*.\n- **⚠️ Everything ch.4 prints agrees:** dacryoadenitis \"appears in the **outer one-third of the upper lid**\", its pain is **superolateral**, and the opener figure draws the gland **above and lateral to the upper lid**.\n- **THE DIAGONAL:** made at the upper **OUTER** corner, drained at the lower **INNER** corner. Discharge therefore collects **medially**, and an everted **lower** punctum spills tears.\n\n### 2. Excretory — the chain, in the book's own order\n- **Upper and lower LACRIMAL PUNCTA** → **superior and inferior CANALICULI** — *a **COMMON CANALICULUS is not uncommon*** → the **LACRIMAL SAC** → the **NASOLACRIMAL DUCT** → the nasal cavity.\n\n### Figure-only — four things the prose never says\n- **Two parts:** an **ORBITAL PART** and a **PALPEBRAL PART**, separated by the **LEVATOR PALPEBRAE SUPERIORIS**.\n- **VALVE OF HASNER:** the **lacrimal fold** at the lower end of the duct — **the only valve named in the chapter**.\n- **The endpoint:** labelled **\"INFERIOR MEATUS OF NOSE\"**, and **multiple LACRIMAL DUCTS** enter the conjunctival sac.\n\n### ⚠️ Defect — the book gives three different answers, and a viva may ask\n\n|Page|What it says|\n|---|---|\n|**p.63**|tears flow through the NLD into the nasal cavity, **BEHIND the inferior turbinate**|\n|**p.66**|obstruction anywhere to \"the orifice of the nasolacrimal duct **UNDER the inferior turbinate**\"|\n|**p.67**|**DCR** connects the lacrimal sad [sic] and the **MIDDLE MEATUS** of the nasal cavity|\n\n- **All three are printed —** and the book reconciles none of them.\n- **⚠️ How to hold it:** the duct opens into the **INFERIOR MEATUS** — what the p.63 figure labels and what two of the three statements say. **The middle meatus is where a surgeon makes a NEW opening in a DCR; the duct does not end there** *(the reconciliation is not taken from the course material; the three statements are the book's own)*.\n- *Absent from ch.4: the **VALVE OF ROSENMÜLLER**, and any account of the **lacrimal pump** — \"pump failure\" is named as a cause of epiphora and never described.*\n\n*Orbital bones and the lacrimal crest: `orb-1`. Lacrimal gland swelling as a lid swelling: `lid-9`. Full lacrimal anatomy is deferred to `op-intro`, which owns the book's chapter 1.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.4 p.63 (prose and apparatus figure), p.66, p.67. The bony site and the reconciliation are supplied and tagged",
        "qs": [
          "opqb-t1-22"
        ]
      },
      {
        "id": "lac-3",
        "w": "must",
        "h": "Dry eye disease — the definition, and the two mechanisms it splits into",
        "body": "- **Dry eye disease (DED):** the state of the ocular surface **in response to a BREAKDOWN of its naturally coating TEAR FILM**.\n- **How common:** one of the commonest problems in the population and a **major reason for ophthalmology visits**; **mildly irritating to debilitating**.\n- **Prevalence: 8–40 %** — wide, because it varies with **population, geography, urbanisation** and **the criteria used to define DED**.\n- **Age:** common and **usually mild above 40**, even in otherwise healthy people.\n\n### 1. Aqueous tear deficiency\n- **SJÖGREN SYNDROME:** keratoconjunctivitis sicca (KCS) — **AUTOIMMUNE**, with **dry mucous membranes throughout the body**.\n- **Primary, or SECONDARY** to rheumatological disease — **rheumatoid arthritis, systemic lupus erythematosus**. **SARCOIDOSIS:** **lacrimal gland INFILTRATION** also reduces tear production.\n- **Non-Sjögren causes:** **allergies** (ocular and nasal) · **decreased hormones with ageing** · **pregnancy** · **thyroid eye conditions** (evaporative element too) · **chemical exposure or injury** · **eye surgery** · **diabetes** · **VITAMIN A DEFICIENCY** (rare in developed countries except in disease such as Crohn's).\n- **Medications:** **psychiatric medicines · OTC cold medicines · antihistamines · beta-blockers · pain relievers · sleeping pills · diuretics · hormone replacement · oral contraceptives**.\n- **REDUCED CORNEAL SENSATION, three routes:** **contact lenses** · **trigeminal nerve dysfunction** · **after LASIK or PRK** — **typically transient, but can become chronic**.\n\n### 2. Evaporative dry eye disease\n- **Thyroid eye disease** — with **lid retraction, proptosis, infrequent blinking and/or LAGOPHTHALMOS**. **Eyelid inflammation (BLEPHARITIS).**\n- **⚠️ INFREQUENT BLINKING at screens** — **nowadays the most frequent contributor to DED** → *(computer vision syndrome / digital eye syndrome — Tutorial, the book's mark for \"study in round & skip in final\"; it covers only the two names)*.\n- **Environmental:** **dusty, windy, hot or dry**. **Neurological:** **stroke · Bell's palsy · Parkinsonism**.\n- **EXPOSURE KERATITIS**, e.g. lagophthalmos. **MASK-ASSOCIATED DRY EYE (MADE)** — more prevalent since COVID-19.\n- *(Framed side-box: **+ MEIBOMIAN GLAND DYSFUNCTION, posterior blepharitis — Tutorial**. Written in full in `lid-4`.)*\n\n### 3. Mixed aetiologies — **common.**\n\n*Sjögren, SLE, rheumatoid arthritis and the sarcoid infiltration as systemic disease, with the rheumatoid corneal-melt risk: `sys-9`. KCS in its red-eye role: `red-10`. Lagophthalmos: `lid-10`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.4 p.64",
        "qs": []
      },
      {
        "id": "lac-4",
        "w": "must",
        "h": "Dry eye — the test the book teaches, the test it never mentions, and the treatment",
        "body": "### Symptoms\n- **Surface:** **foreign-body sensation or GRITTINESS** · **burning, stinging and ITCHING** · **redness**.\n- **⚠️ TEARING** — the eye becomes dry enough that **REFLEX tearing is stimulated**.\n- **Discharge:** **mucous discharge accumulates on the lids during SLEEP**.\n- **Vision:** **blurry or FLUCTUATING**, worse **reading, at the computer, watching television, driving or gaming**.\n- **Also:** **light sensitivity · heaviness of the eyelids · eye fatigue**.\n\n### Signs\n- **Decreased TEAR FILM BREAKUP TIME (TBUT):** **normally MORE THAN 10 SECONDS**; **less indicates an UNSTABLE tear film**.\n- **Fluorescein staining:** **PUNCTATE EPITHELIAL EROSIONS — superficial punctate keratopathy (SPK)** — in severe cases.\n- **Complications:** **corneal EROSIONS and/or SCARRING**.\n\n### The TBUT test, step by step\n*(The whole box is fed by an arrow labelled **Tutorial** — round material, skippable in the final. Written in full: it is the only dry-eye test the chapter describes.)*\n1. **FLUORESCEIN** (yellow).\n2. **COBALT BLUE LIGHT** — yellow + blue = **green**.\n3. **Time from a COMPLETE BLINK to the appearance of the FIRST DRY SPOT** (a black spot).\n4. **NORMAL ≥ 10 seconds.**\n\n- **⚠️ SCHIRMER IS NEVER MENTIONED HERE —** the book teaches TBUT as *the* dry-eye test. **Schirmer I** measures total (basic + reflex) secretion — a **5 mm filter-paper strip in the lower fornix for 5 minutes**; **under 10 mm of wetting is abnormal and under 5 mm definite** *(not taken from the course material)*.\n- **⚠️ The two answer different questions:** **TBUT tests film STABILITY** (a lipid or mucin problem), **Schirmer tests aqueous VOLUME**.\n\n### Treatment\n- **1. Medical:** **artificial tears** — preservative-free in severe cases; **long-term use of PRESERVED drops should be avoided**.\n- **Longer-acting agents:** **gel and ointment at bedtime**.\n- **CYCLOSPORINE A 0.05 % drops** — **increase tear production**.\n- **Topical steroids for SHORT durations** — for the inflammatory component of the disease.\n- **2. Interventional:** **PUNCTAL PLUGS**, to prevent tear drainage · **overnight lid taping or TARSORRHAPHY** in severe lagophthalmos.\n- **3. Treat the cause** — e.g. blepharitis.\n- **⚠️ Cyclosporine A 0.05 %:** the ONLY drug strength printed anywhere in the chapter. *\"Short durations\"*, *\"at bedtime\"* and *\"long term … avoided\"* are as specific as it gets, and **no follow-up interval is stated for any condition in ch.4**.\n\n*Schirmer and TBUT together as pre-refractive-surgery tests: `cor-21`. Blepharitis and MGD: `lid-4`. Tarsorrhaphy and gold weight for exposure: `lid-10`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.4 p.65; Schirmer is supplied and tagged",
        "qs": []
      },
      {
        "id": "lac-5",
        "w": "must",
        "h": "Epiphora — too much made, or too little drained",
        "body": "- **Epiphora:** **excessive watering of the eye with OVERFLOW OF TEARS AT THE LID MARGIN**, as a result of **INSUFFICIENT TEAR DRAINAGE**.\n\n### 1. Overproduction of tears — secondary to anterior segment disease\n- **Emotions and/or pain.**\n- **⚠️ DRY EYE — by REFLEX LACRIMATION.** The paradox to hold: **a dry eye is a cause of a watering eye**.\n- **Ocular surface INFLAMMATION:** **conjunctivitis · keratitis · corneal foreign body**.\n- **Ocular surface IRRITATION:** **entropion · trichiasis**.\n\n### 2. Decreased drainage — a compromised drainage system\n- **Malposition of the LACRIMAL PUNCTA**, e.g. **ECTROPION** — the punctum leaves the tear lake.\n- **OBSTRUCTION at any point** from the puncta to the **orifice of the nasolacrimal duct under the inferior turbinate** — *(punctal stenosis, NLD obstruction — Tutorial; the marker covers only the two examples, the obstruction bullet itself being core text)*.\n- **LACRIMAL PUMP FAILURE —** functional obstruction, from **lower lid LAXITY with ageing**, or **weakness of the ORBICULARIS**, e.g. **facial palsy**.\n- **⚠️ Note the third mechanism:** the passage can be **anatomically patent and still not pump**. That is why a normal irrigation does not end the assessment.\n\n### Diagnosis at the slit lamp\n- **Check for PUNCTAL OCCLUSION or STENOSIS.**\n- **Anterior segment:** check for inflammation or irritation.\n- **Malposition:** check the puncta, the lashes and the lids.\n- **Then: FLUORESCEIN DYE EVALUATION of the patency of the drainage system** — for which the book refers the reader to its drugs chapter.\n\n*Ectropion, entropion and trichiasis as diseases: `lid-7`, `lid-8`. Dry eye: `lac-3`, `lac-4`. The fluorescein method itself is written in `va-11`. The four drainage tests: `lac-6`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.4 p.66",
        "qs": []
      },
      {
        "id": "lac-6",
        "w": "must",
        "h": "The four drainage tests — what each result means, and the two the lecture teaches instead",
        "body": "**⚠️ Headed \"not in the book\":** the block’s own title is *\"Tests for lacrimal drainage system: (from tutorial. not in the book)\"* — the book’s mark for round material, skippable in its own final.\n\n**It is written here at full weight:** in full — it is the chapter’s only systematic account of drainage testing, and its only result-to-diagnosis map.\n\n|Test|How|Result → diagnosis|\n|---|---|---|\n|**1. REGURGE TEST**|**pressure over the lacrimal sac**|**A POSITIVE REGURGE MEANS THREE THINGS AT ONCE:** the **UPPER lacrimal system is PATENT** · there is **NLD OBSTRUCTION** · and **CHRONIC DACRYOCYSTITIS**|\n|**2. FLUORESCEIN DYE DISAPPEARANCE**|instil dye, look again later|**after 5 MINUTES, dye PERSISTING in the conjunctival sac indicates lacrimal drainage OBSTRUCTION** on that side|\n|**3. LACRIMAL PROBING**|pass a probe along the canaliculus|**HARD STOP** — the probe reaches bone: **NO canalicular obstruction**. **SOFT STOP** — **CANALICULAR OBSTRUCTION**|\n|**4. LACRIMAL IRRIGATION (sac wash-out)**|syringe saline through a punctum|**reflux through the SAME punctum = CANALICULAR obstruction**. **Reflux through the OTHER punctum = NASOLACRIMAL canal obstruction**|\n\n- **⚠️ Test 2 has NO body text at all.** The 5-minute reading and the interpretation exist only as a **red annotation baked into the photograph** — figure-only teaching, and the most easily lost line in the chapter.\n- **⚠️ Read tests 3 and 4 together:** the probe tells you **whether** the block is canalicular; the syringe tells you **which side of the sac** it is on.\n- *Defect note: the hard-stop/soft-stop diagram is cut from another book and carries its own foreign caption \"Fig 2.12\" — not this book's numbering, and not usable as an index.*\n\n### ⚠️ The lecture teaches a different pair — Jones I and Jones II\n- **⚠️ Provenance, stated because it is unusual:** **`Jones` appears nowhere in ch.4**. `L9) lacrimal system.` was **read end to end on 2026-08-16 and never transcribed** — its cached text is 33 repetitions of \"CamScanner\" — so the two mappings below are cited through the highlights recorded in `content\\ophtho\\theory-plan.md`, not from a cache.\n- **JONES I (primary dye test):** dye **recovered in the nose = a PATENT system**. **No recovery = LOWER DUCT OBSTRUCTION or ATONY OF THE SAC**, or **UPPER CANALICULAR STENOSIS**.\n- **JONES II (secondary dye test):** the same discrimination again, sorting **lacrimal duct obstruction · atony of the sac · COMMON canalicular obstruction · canalicular stenosis**.\n- **⚠️ How the two systems line up:** **probing and irrigation answer mechanically the question Jones I and II answer with dye.** Learn the book's four; the deck's two are the **eponyms** an examiner is likeliest to name.\n\n- **⚠️ Imaging is absent from ch.4** — no dacryocystography, dacryoscintigraphy or nasal endoscopy. **Contrast DACRYOCYSTOGRAPHY** — a contrast series outlining sac and duct to show the **level** of a block — is on `L9` p.20, by the same record, and is the test to name if imaging of the passage is asked for.\n\n*The regurge test as an inspection finding: `va-9`. Chronic dacryocystitis, where a positive regurge belongs: `lac-8`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.4 p.66 (the tutorial block, written in full); Jones I/II and dacryocystography from L9 pp.18–20 via content\\ophtho\\theory-plan.md",
        "qs": []
      },
      {
        "id": "lac-7",
        "w": "must",
        "h": "Treating epiphora — and the four-rung congenital ladder, in order",
        "body": "1. **Treat the causes** of ocular surface irritation and lid malposition.\n2. **Congenital nasolacrimal duct obstruction in infants** — the book marks this **\"(very Important)\"** and the **order is the answer**.\n3. **DACRYOCYSTORHINOSTOMY (DCR)** in its own right — see below.\n\n### The ladder — four rungs, and each is defined by an age or a failure\n\n|Rung|What|When|\n|---|---|---|\n|**a**|**DIGITAL MASSAGE of the lacrimal sac** with **topical antibiotics**|**BEFORE the age of ONE YEAR** — **85 % RESOLVE WITHIN THE FIRST YEAR**|\n|**b**|**NASOLACRIMAL DUCT PROBING**|**AFTER the age of ONE YEAR**; **repeatable ONLY ONCE** if the first attempt was not curative|\n|**c**|**SILASTIC INTUBATION** of the lacrimal passages|**if the SECOND probing fails**|\n|**d**|**DACRYOCYSTORHINOSTOMY**|**if INTUBATION fails**|\n\n- **⚠️ N.B. from the book: PROBING IS NOT CURATIVE IN ADULTS.** The ladder is a paediatric one.\n- **⚠️ The most exam-shaped numbers:** 85 % and the two age rules — and the escalation is strictly ordered.\n\n### DCR\n- **What it is:** **surgically connecting the lacrimal sad [sic] and the MIDDLE MEATUS of the nasal cavity**, with **temporary or permanent tubes**.\n- **⚠️ DCR, named four times:** and never subclassified. Briefly: **EXTERNAL DCR** through a skin incision beside the nose; **ENDOSCOPIC (endonasal) DCR** through the nose, with **no skin scar** and comparable success; **mitomycin C** used to reduce closure of the new opening; a **LESTER JONES TUBE** is a glass bypass for when the **CANALICULI themselves** are blocked and a DCR alone cannot help *(none of this paragraph is taken from the course material — all four are on the chapter’s verified-absent list)*.\n\n*The \"middle meatus\" against the p.63 and p.66 \"inferior turbinate\": the defect table in `lac-2`. Silastic intubation for a canalicular LACERATION — a different indication the book never prints: `lac-10`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.4 p.67; the DCR variants are supplied and tagged",
        "qs": []
      },
      {
        "id": "lac-8",
        "w": "must",
        "h": "Dacryocystitis — acute against chronic, taught by contrast",
        "body": "- **Dacryocystitis:** **ACUTE or CHRONIC INFECTION of the LACRIMAL SAC**.\n- **⚠️ Usually SECONDARY:** to **OBSTRUCTION of the NASOLACRIMAL DUCT** — which is why it belongs with epiphora and not with the lids.\n- **Organisms:** **STAPHYLOCOCCI or STREPTOCOCCI**.\n\n||**ACUTE**|**CHRONIC**|\n|---|---|---|\n|**Symptoms**|**PAIN, redness and swelling over the lacrimal sac, BELOW THE MEDIAL CANTHAL AREA** · **epiphora** · **fever may be present**|**chronic epiphora** · **chronic or RECURRENT UNILATERAL CONJUNCTIVITIS** · **PAINLESS sac swelling (MUCOCELE)** at the inner canthus|\n|**Signs**|**VERY TENDER and TENSE swelling** with **overlying skin ERYTHEMA** · can progress to **ABSCESS FORMATION** · **PRESEPTAL CELLULITIS may be present**|without a mucocele, **pressure on the sac REFLUXES MUCOPURULENT DISCHARGE through the punctum — a POSITIVE REGURGE TEST** · fluorescein dye evaluation of patency as in epiphora|\n|**Treatment**|**warm compresses and NASAL DECONGESTANTS** · **systemic and topical antibiotics** · **once the infection resolves, consider DCR** · **for an abscess, INCISION AND DRAINAGE** *(Tutorial — skip in final; the only tutorial-flagged item in an otherwise core treatment list, and the chapter's only surgical drainage instruction)*|**DCR**|\n\n- **⚠️ The discriminators, in one line:** **acute is PAINFUL, tense and febrile; chronic is PAINLESS, with a mucocele and a recurrent one-sided conjunctivitis.**\n- **⚠️ Figure-only: the SKIN is the visual difference.** Acute — red, tense, erythematous, spreading below the medial canthal tendon onto the cheek. Chronic — a **smooth, non-inflamed rounded fullness with NORMAL SKIN COLOUR**. Never stated in words.\n- **⚠️ No antibiotic, no dose —** *\"systemic and topical antibiotics\"* is as specific as the book gets.\n\n*Dacryocystitis as a red eye, with massage extruding pus and its URGENT referral: `red-11`. As a cause of preseptal cellulitis and in the orbital cellulitis differential: `orb-8`. Its swelling below the medial canthus as an inspection label: `va-9`. The regurge test in full: `lac-6`. Why the NLD obstructs in infants, and the ladder: `lac-7`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.4 pp.67–68",
        "qs": []
      },
      {
        "id": "lac-9",
        "w": "must",
        "h": "Dacryoadenitis — the gland, and what makes it more than an inflamed lid",
        "body": "- **Dacryoadenitis:** **ACUTE or CHRONIC inflammation of the LACRIMAL GLAND**, appearing in the **OUTER ONE-THIRD OF THE UPPER LID**.\n- **⚠️ The book's own warning:** it **may be a sign of a more serious pathology underlying the inflammation** — which is why it is investigated rather than simply treated.\n\n### Aetiology\n- **INFECTIONS — most commonly VIRAL, EPSTEIN–BARR VIRUS.**\n- **Less common viruses:** **adenovirus · varicella zoster · herpes simplex · rhinovirus · cytomegalovirus · mumps**.\n- **Less commonly BACTERIAL —** and rarely **FUNGAL** or **PARASITIC**.\n- **AUTOIMMUNE:** **THYROID EYE DISEASE**, **Sjögren's syndrome**.\n- **Other:** **non-specific orbital inflammation (NSOI)** · **SARCOIDOSIS** · **NEOPLASTIC**.\n\n### A. Acute dacryoadenitis\n- **Pain:** in the **SUPEROLATERAL orbit**, **AGGRAVATED BY EYE MOVEMENTS**.\n- **Drooping of the upper lid**, with **difficulty opening the affected eye**.\n- **Red eye**, and **DIPLOPIA especially in UP GAZE or LATERAL GAZE**.\n- **Signs:** **tenderness, oedema, erythema and INDURATION over the OUTER THIRD** of the upper lid.\n- **⚠️ PTOSIS, S-SHAPED —** the deformity of the upper lid *(an arrow leads from this sign to a box reading \"pseudo ptosis in tutorial\")*.\n- **Also:** **conjunctival injection · PROPTOSIS · fever and malaise**.\n\n### B. Chronic dacryoadenitis\n- **⚠️ MORE COMMON than the acute form**, and may present as **PAINLESS ENLARGEMENT of the gland**.\n\n### Investigations\n- **CT or MRI of the orbits WITH CONTRAST.**\n- **CHEST X-RAY if SARCOIDOSIS is suspected.**\n- **No specific laboratory tests** — done only to diagnose an underlying cause such as autoimmune disease.\n- **BIOPSY for tissue diagnosis** in **atypical infections or refractory disease**.\n\n### Treatment\n- **Viral:** **symptomatic treatment**.\n- **Bacterial:** **systemic BROAD-SPECTRUM ANTIBIOTICS**.\n- **Idiopathic:** **ORAL CORTICOSTEROIDS** may be considered.\n- **Chronic:** **treat the underlying disorder.**\n- *(Framed box, **+ from tutorial**: **hot fomentation**, and **analgesics and antipyretics**.)*\n\n*⚠️ The deck and the book diverge on the organisms and both are held: `orb-15` (from `L10`) calls it idiopathic or viral — **mumps, Epstein–Barr, cytomegalovirus** — where the book puts **EBV first** and mumps last of six. `orb-15` also carries the mechanism of the S-shaped lid (swelling over the palpebral lobe) and the orbital-lobe dystopia, and is not repeated here. The neoplastic causes the book names and never lists — **pleomorphic adenoma and lacrimal gland carcinoma** — are in `orb-16`, and the tumour biology is owed to `op-onc`. Sarcoid and Sjögren as systemic disease: `sys-9`. The upper-outer localisation as an inspection label: `va-9`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.4 pp.68–69",
        "qs": []
      },
      {
        "id": "lac-10",
        "w": "should",
        "h": "The two lacrimal problems ch.4 never prints — and the absences worth knowing about",
        "body": "### ⚠️ Canaliculitis — absent from the chapter\n- **The word never appears** on printed 62–69, and neither do **Actinomyces**, **canalicular concretions** or **canaliculotomy**. `red-11` names canaliculitis as a lacrimal cause of a red eye and stops there.\n- **What it is:** **chronic inflammation of a canaliculus** — a **chronic, UNILATERAL red eye** with **discharge** and a **POUTING, ERYTHEMATOUS PUNCTUM**, often mistaken for a resistant conjunctivitis *(not taken from the course material)*.\n- **Classically:** **ACTINOMYCES ISRAELII**, a filamentous anaerobe *(not taken from the course material)*.\n- **The sign that settles it:** **pressure over the canaliculus expresses CONCRETIONS** — soft yellow sulphur-granule material — through the punctum *(not taken from the course material)*.\n- **Treatment:** **CANALICULOTOMY with CURETTAGE of the concretions**, plus a topical antibiotic; medical treatment alone usually fails *(not taken from the course material)*.\n- **⚠️ How it differs from dacryocystitis:** the swelling and tenderness are **at the PUNCTUM and along the canaliculus**, not **below the medial canthus over the sac** (`lac-8`).\n\n### ⚠️ Canalicular laceration and its repair — also absent\n- **Silastic intubation appears once in ch.4**, as **rung 3 of the CONGENITAL NLD ladder** (`lac-7`), and **never for trauma**.\n- **The triage is already written:** `trm-9` keeps the three levels of lid laceration and names the medial one — **\"involving the LACRIMAL CANALICULI — the laceration that must be recognised before it is closed\"** — and it writes the **MARGINAL** repair in full.\n- **The rule:** **any lid laceration MEDIAL TO THE PUNCTUM is assumed to involve a canaliculus** until proved otherwise *(not taken from the course material)*.\n- **The repair:** **primary, within 24–48 hours**, **over a SILICONE STENT** — monocanalicular, or a bicanalicular loop — **left in place for weeks to months** to keep the lumen open, with the **pericanalicular tissue repaired around it** *(not taken from the course material)*.\n- **⚠️ Why it cannot wait:** a canaliculus closed without a stent scars shut, and the patient is left with **lifelong epiphora** needing a **Lester Jones tube** (`lac-7`) *(not taken from the course material)*.\n\n### Named here so nothing is assumed covered\n- **Absent from ch.4 and from the module:** the **VALVE OF ROSENMÜLLER** (only Hasner is named) · **dacryocystography, dacryoscintigraphy and nasal endoscopy** · the **lacrimal pump MECHANISM** itself · **dacryocystocele of the newborn** · **punctal agenesis or atresia** · **LACRIMAL SAC TUMOURS** · **crocodile tears** and the **secretomotor pathway** · **tear volume, turnover, osmolarity and pH** · and **every antibiotic name, dose, duration and follow-up interval**.\n\nSrc: ophthalmology.pdf (HEALIX) ch.4's verified-absent list, printed 62–69; both accounts are supplied and tagged",
        "qs": []
      }
    ]
  }
};
