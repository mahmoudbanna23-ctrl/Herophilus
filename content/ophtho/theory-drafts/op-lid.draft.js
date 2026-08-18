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
  "op-lid": {
    "intro": "Twelve book pages, five numbers, no drug dose. The spine is two comparisons — externum against internum, and the four malposition classifications — plus two operations printed only in figure headers. The chapter promises malignancies in its own objectives and never teaches them.",
    "sections": [
      {
        "id": "lid-1",
        "w": "must",
        "h": "Anatomy — five layers, two lines, two leaflets, and a figure that teaches nine things the prose never says",
        "body": "**The eyelids:** outer structures that **protect the globe** and **help lubricate the ocular surface**.\n\n- **Palpebral fissure:** the space between the lids when the eye is open; the lids join at the **medial and lateral canthi**.\n- **Lashes:** on the **ROUNDED ANTERIOR border** — **out and UP** in the upper lid, **out and DOWN** in the lower.\n- **Posterior lid margin:** **RIGHT-ANGLED**, in **close coaptation with the globe**.\n\n### The five layers, anterior to posterior\n1. **Skin.**  2. **Subcutaneous tissue.**\n3. **Muscular layer:** **ORBICULARIS OCULI** — blinking and forcible closure — supplied by the **FACIAL (VII) nerve**.\n4. **Tarsal plate:** the **rigid fibrous SKELETON** of the lid, containing the **MEIBOMIAN glands**.\n5. **Palpebral conjunctiva.**\n\n### The two named lid-margin lines\n- **WHITE LINE:** the **virtual line joining the MEIBOMIAN ORIFICES** on the margin.\n- **GREY LINE:** **AVASCULAR**, and the **SURGICAL splitting plane** of the lid.\n- **Anterior leaflet:** skin + subcutaneous tissue + **orbicularis**. **Posterior leaflet:** **tarsal plate** + palpebral conjunctiva.\n\n### Figure-only — the labelled cross-section, the chapter's largest hidden block\n- **MÜLLER MUSCLE:** drawn under the levator, above conjunctiva, onto the upper tarsus — the muscle sympathetic ptosis affects, and this is its only picture.\n- **LEVATOR APONEUROSIS:** labelled **separately from levator palpebrae**; aponeurotic ptosis turns on its disinsertion.\n- **ORBICULARIS in three portions:** **ORBITAL · PRESEPTAL · PRETARSAL** — prose says only \"fibers of the orbicularis oculi\".\n- **Also only here:** **orbital septum · preaponeurotic orbital fat · peripheral and marginal arterial arcades · Asian vs non-Asian crease**.\n- **The three glands:** **ZEIS** (with the lash), **MOLL**, **WOLFRING** — an accessory lacrimal gland.\n- **⚠️ Wolfring:** the only accessory lacrimal eponym printed in ch.4 or ch.5, and it is a figure label. **Krause is printed nowhere.**\n\n*Goblet cells and the other gland eponyms: `cnj-1`. Orbital septum as the cellulitis boundary: `orb-8`. Defect: \"Gland of Zeis\" in the p.71 figure, \"gland of Zeiss\" in the p.72 table.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.5 pp.70–71; L5 sl.3",
        "qs": []
      },
      {
        "id": "lid-2",
        "w": "must",
        "h": "Hordeolum externum against internum — the chapter's first comparison",
        "body": "**Lid disease, three categories:** **1. infections (inflammations) · 2. malposition · 3. neoplasms.** *⚠️ Category 3 is announced here and never taught — see `lid-11`.*\n\n- **Examination needs no instrument:** good office illumination usually suffices; **magnification helps but is not necessary**.\n\n### Figure-only — the two axes the prose never crosses\n- **LOCALIZED and ACUTE:** **hordeolum externum**, **hordeolum internum**.\n- **LOCALIZED and CHRONIC:** **chalazion** (meibomian).\n- **DIFFUSE:** **blepharitis** — anterior (**seborrheic**, **ulcerative/staphylococcal**) and posterior (**meibomian gland dysfunction**).\n\n### The comparison, as the book prints it\n\n||**HORDEOLUM EXTERNUM (stye)**|**HORDEOLUM INTERNUM**|\n|---|---|---|\n|**Definition**|**ACUTE SUPPURATIVE** inflammation of the **LASH FOLLICLE or the associated GLAND OF ZEISS** [sic]|**ACUTE** inflammation of the **MEIBOMIAN glands**|\n|**Organism**|**Staphylococcus aureus**|**Staphylococcus aureus**|\n|**Incidence**|common in **CHILDREN and YOUNG ADULTS**|the **SECOND most common infection of the eyelid**|\n|**Picture**|painful, red, tender swelling **POINTING ANTERIORLY THROUGH THE SKIN** on the margin, **usually with a LASH AT ITS APEX**|painful, red, tender swelling **SEPARATED FROM THE MARGIN by normal non-inflamed tissue**|\n|**Pain**|**dull, throbbing**|**dull, throbbing**|\n|**Treatment**|topical antibiotic **ointment** (oral antibiotics **rarely** needed); pus evacuated by **EPILATION of the affected lash** or **incision of the overlying skin**|**warm compresses with gentle massage**; antibiotic **drops or ointment only if it points at the palpebral conjunctiva**; **oral antibiotics and analgesics**|\n|**⚠️ The rule**|**IT MUST BE NEVER SQUEEZED** — the chapter's only all-capital instruction|**NEVER incise during active inflammation UNLESS it forms an ABSCESS**|\n\n- **Prevent recurrence:** treat any associated local disease, **e.g. blepharitis**.\n- *Defect note: the heading prints \"Hordeolum Extrenum\" [sic]; \"second most common\" is printed without the book ever saying what is FIRST.*\n\n*The primary-care management with its intervals and doses is written in `rdm-9`, sourced — ch.5 prints none. The external/internal split by structure (Zeis or Moll against meibomian) is there too.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.5 p.72; L5 sl.17, 20",
        "qs": []
      },
      {
        "id": "lid-3",
        "w": "must",
        "h": "Chalazion — and the one oncological clause in twelve pages",
        "body": "- **Chalazion (meibomian cyst):** a **STERILE, CHRONIC, GRANULOMATOUS** inflammatory lesion of the **MEIBOMIAN glands**, caused by **RETAINED SEBACEOUS SECRETIONS**.\n- **⚠️ Sterile is the word that matters** — it is not an infection, which is why antibiotics are not the treatment.\n- **Incidence:** the **MOST COMMON BENIGN NON-NEOPLASTIC LESION of the eyelids**.\n- **Company it keeps:** commonly associated with **POSTERIOR or SEBORRHEIC BLEPHARITIS**.\n- **Symptom:** a **gradually enlarging, PAINLESS, rounded nodule**.\n- **Signs:** a **FIRM NODULE WITHIN THE TARSAL PLATE**; an associated **conjunctival granuloma** may be present.\n- **Figure-only:** all three photographs show the nodule sitting **AWAY FROM THE LID MARGIN, within the tarsus** — the feature that separates it from a stye, stated in prose only as \"within the tarsal plate\".\n\n### Treatment\n- **First:** **warm compresses with gentle massage several times daily** — especially in **early** lesions.\n- **Surgical, 1:** **INTRALESIONAL STEROID injection.**\n- **Surgical, 2:** **INCISION AND CURETTAGE THROUGH THE CONJUNCTIVAL SIDE.**\n- **⚠️ The biopsy rule:** a **RECURRENT chalazion, especially in the ELDERLY**, should be **BIOPSIED to exclude an underlying malignancy — MEIBOMIAN GLAND CARCINOMA**.\n\n*⚠️ That clause is the only mention of an eyelid malignancy anywhere on printed 70–81, and it is an exclusion rule, not a disease entry — see `lid-11`. The operative detail stops at \"through the conjunctival side\": no incision orientation, no clamp, no anaesthetic. The referral interval — no resolution in 3–4 weeks — and the compress schedule are in `rdm-9`, sourced.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.5 p.73; L5 sl.18, 19",
        "qs": []
      },
      {
        "id": "lid-4",
        "w": "must",
        "h": "Blepharitis — anterior in two forms, posterior as gland failure",
        "body": "**Blepharitis:** inflammation of the **LID MARGIN** involving the **LASHES and their associated glands**. Two clinical types.\n\n### 1. Anterior blepharitis — around the bases of the lashes\n\n||**SEBORRHEIC**|**STAPHYLOCOCCAL (ULCERATIVE)**|\n|---|---|---|\n|**Association**|generalised **SEBORRHEIC DERMATITIS**|**S. aureus** and **S. epidermidis**|\n|**Margin**|**HYPERAEMIC**, **NO ULCERATION**|may **ULCERATE**, with **SCARRING and NOTCHING**|\n|**Scales**|**SOFT, GREASY** scales on the lashes|**HARD, DRY COLLARETTES** around the lash bases|\n|**Lashes**|—|**fall out**, with **madarosis, trichiasis and poliosis**|\n|**Also**|—|**DRY EYE is a common finding**|\n|**Treatment**|**lid hygiene** + treat the **scalp seborrhoea**|**lid hygiene** · topical **FUSIDIC ACID and AZITHROMYCIN** · systemic **TETRACYCLINES, DOXYCYCLINE, AZITHROMYCIN** · manage complications|\n\n- **Lid hygiene, both forms:** **warm compresses and lid scrubs with DILUTED BABY SHAMPOO**.\n- **⚠️ Figure-only:** the discriminator is visible only by comparing the two photograph sets — **soft greasy scales against hard dry collarettes**. Neither page states it in words.\n\n### The three lash words, defined here\n- **MADAROSIS:** **PERMANENT LOSS of the lashes**. **POLIOSIS:** **PREMATURE WHITENING of the lashes**.\n- **TRICHIASIS:** named here, **defined in `lid-8`**.\n\n### Complications of the staphylococcal form\n- **The three lash changes** — madarosis, trichiasis, poliosis. **RECURRENT STYES.**\n- **CHRONIC CONJUNCTIVITIS and PHLYCTENS.**\n- **⚠️ Figure-only: MARGINAL KERATITIS** — a peripheral corneal infiltrate near the limbus, printed as a photograph caption and **named nowhere in the prose list**.\n\n### 2. Posterior blepharitis — meibomian gland dysfunction (MGD)\n- **What it is:** **alteration and INSPISSATION of meibomian secretions** → surface irritation, **increased tear EVAPORATION**, an **UNSTABLE TEAR FILM**.\n- **⚠️ Course:** **more chronic and persistent than anterior blepharitis.**\n- **Symptoms:** **dry eye manifestations** · **RECURRENT CHALAZIA**.\n- **Signs:** **hyperaemia and TELANGIECTASIA of the POSTERIOR margin** · **FOAMY DISCHARGE** on the margin · **turbid excessive** or **inspissated** secretions with **PLUGGED ORIFICES**.\n- **Treatment:** lid hygiene · **oral TETRACYCLINES or DOXYCYCLINE** · **tear substitutes** · **topical steroids** for surface inflammation · newer — **topical cyclosporine, pulsed light, device heating and expression** · manage complications.\n\n*⚠️ No dose, strength or duration is printed for any drug in these sections. The regimens are in `rdm-8`, sourced from `L37` — shampoo dilution, ointment course, doxycycline dose and taper — with contact dermatitis as the masquerader and the chronic-unilateral referral rule. Dry eye itself, and MGD as an evaporative cause: `lac-3`, `lac-4`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.5 pp.73–75; L5 sl.22, 23, 24, 25, 26",
        "qs": []
      },
      {
        "id": "lid-5",
        "w": "must",
        "h": "Ptosis — the 2 mm rule, the four pseudoptoses, and seven causes",
        "body": "- **Ptosis:** drooping of the upper lid below its normal position, **covering MORE THAN 2 mm of the SUPERIOR LIMBUS in the primary position**.\n- **⚠️ The only number in the chapter:** its sole quantitative diagnostic criterion — no margin-reflex distance, no fissure height, no levator grading in millimetres appears anywhere in the book.\n\n### Pseudoptosis — apparent drooping, four causes\n- **Lack of lid support by the globe:** as in **ENOPHTHALMOS**.\n- **Redundant lid skin:** **DERMATOCHALASIS**.\n- **HYPOTROPIA** — the eye itself is down, so the lid follows.\n- **CONTRALATERAL LID RETRACTION** — the other side is the abnormal one.\n\n### Aetiology — seven clinical types, marked \"important\" in the original\n\n|Type|What it is|Levator function|\n|---|---|---|\n|**1. CONGENITAL**|frequently **sporadic**, may be **hereditary**; **lack of development of the levator** → a **SMOOTH LID with LOSS OF THE TARSAL FOLD**|**POOR**|\n|**2. PARALYTIC**|**THIRD (oculomotor) NERVE PALSY**|—|\n|**3. MYOGENIC**|disease of the levator muscle — **muscular dystrophy**, **MYASTHENIA GRAVIS**; **asymmetric, bilateral, WORSE AT THE END OF THE DAY**|—|\n|**4. SYMPATHETIC**|**HORNER SYNDROME**, affecting **MÜLLER'S MUSCLE**|—|\n|**5. APONEUROTIC (senile)**|**DISINSERTION or DEHISCENCE of the LEVATOR APONEUROSIS**; with **advancing age, trauma or ocular surgery**|**GOOD**|\n|**6. MECHANICAL**|**increased lid weight** — a **lid mass**, **lid oedema**, **palpebral vernal catarrh**|—|\n|**7. TRAUMATIC**|printed as a bare heading|—|\n\n- **⚠️ The levator-function column:** the whole point — printed for only two types, and it **decides the operation** (see `lid-6`).\n- **⚠️ Trauma reaches ptosis three ways:** immediate **oedema and haematoma** (mechanical, resolving), **levator or aponeurosis damage**, and post-surgical **aponeurotic dehiscence** *(not taken from the course material — the book prints \"7. Traumatic\" and nothing under it)*.\n\n*Horner syndrome in full: `pup-2`, `nrv-4`. Third-nerve palsy and myasthenia: `mot-7`, `mot-8`, `mot-9`. Palpebral vernal catarrh: `cnj-6`. Marcus Gunn jaw-winking, blepharophimosis and synkinetic ptosis are absent from the book; the jaw-winking syndrome is the deck's, in `lid-6`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.5 pp.75–76; L5 sl.6, 10, 11, 12, 13, 14",
        "qs": [
          "opqb-t3-120"
        ]
      },
      {
        "id": "lid-6",
        "w": "must",
        "h": "Choosing the ptosis operation — the rule the book prints only in a figure header",
        "body": "**⚠️ The prose gives one line:** *\"Surgical (levator resection, frontalis sling, etc)\"*. **The rule that chooses between them is printed only in the figure headers** — and the deck alone puts numbers on it.\n\n||**LEVATOR RESECTION**|**FRONTALIS SLING (brow suspension)**|\n|---|---|---|\n|**Levator function**|**GOOD**|**POOR**|\n|**The deck's number**|**at least 5 mm**|**4 mm or less**|\n|**What it does**|**SHORTENING of the LEVATOR COMPLEX**, re-attached to the tarsus|**ATTACHES the TARSUS to the FRONTALIS MUSCLE with a sling**|\n|**How much**|**determined by LEVATOR FUNCTION and SEVERITY of the ptosis**|—|\n|**Other indication**|—|**MARCUS GUNN JAW-WINKING SYNDROME**|\n\n- **⚠️ The captions repeat it:** *\"Aponeurotic ptosis / Good levator function\"* and *\"Congenital ptosis / Poor levator function\"* — pairing each aetiology with its function, again only in the figures.\n- **⚠️ Where the millimetres come from:** the **book grades levator function only \"good\" or \"poor\"**; **`L5` sl.8 and sl.9 print the 5 mm and 4 mm bands**. The deck is the source, not a fill.\n\n### The rest of the treatment\n- **Medical treatment of MYASTHENIA GRAVIS** where that is the cause.\n- **Treat the cause** — e.g. mechanical ptosis.\n- **The deck's two bedside myasthenia tests:** the **ICE PACK TEST** and the **TENSILON TEST**.\n\n*⚠️ The book prints no phenylephrine test, no Fasanella–Servat, no Müller muscle conjunctival resection, and no levator-function measurement technique. The ice-pack and Tensilon tests are written in full in `mot-9`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.5 p.76 (figure headers and captions); L5 sl.8, 9, 13",
        "qs": [
          "opqb-t3-120"
        ]
      },
      {
        "id": "lid-7",
        "w": "must",
        "h": "Retraction, entropion and ectropion — two four-type classifications side by side",
        "body": "### Upper eyelid retraction — the whole section is four lines\n- **The normal:** the **sclera ABOVE the limbus should NOT be visible** with the upper lid at rest.\n- **Retraction makes it visible** — **\"SCLERAL SHOW\"**.\n- **Consequence:** the eye may become **DRY from CORNEAL EXPOSURE**.\n- **⚠️ Commonest cause: THYROID EYE DISEASE.**\n- *⚠️ No classification, no treatment and no eponymous sign — Dalrymple, von Graefe and Kocher are absent, and so is lid-lengthening surgery. The three lid signs of thyroid eye disease are in `orb-6`; the systemic picture in `sys-7`.*\n\n### Entropion and ectropion — the mechanism\n- **ENTROPION:** the **margin is rotated INWARDS**, so the **lashes rub conjunctiva and cornea** → **reflex lacrimation, foreign-body sensation, red eye**.\n- **⚠️ What it ends in:** **corneal ABRASIONS → secondary SCARRING**; if **infectious keratitis** supervenes, **vision is lost**.\n- **ECTROPION:** the **margin is rotated OUTWARD**, exposing the **palpebral conjunctiva**, which becomes **dry and irritated**.\n- **⚠️ Two more consequences:** **incomplete closure** dries the cornea, and **the lids cannot push tears toward the drain → EPIPHORA**.\n- **Both mainly affect the LOWER lid.**\n\n### The two classifications\n\n|#|**ENTROPION**|**ECTROPION**|\n|---|---|---|\n|**1**|**CONGENITAL**|**MECHANICAL**|\n|**2**|**SPASTIC** — **orbicularis muscle spasm**|**SENILE (INVOLUTIONAL)** — **HORIZONTAL LAXITY of the lower lid**|\n|**3**|**INVOLUTIONAL (SENILE)** — laxity of the **LOWER LID RETRACTORS** and the **LATERAL CANTHAL LIGAMENT**|**PARALYTIC** — **SEVENTH (facial) NERVE PALSY**|\n|**4**|**CICATRICIAL** — **SHORTENING of the CONJUNCTIVAL surface**: trauma · chronic inflammation (**Stevens–Johnson**) · infection (**TRACHOMA**)|**CICATRICIAL** — **extensive BURNS** · skin contraction in **ECZEMA** · **post-operative scars** · **lacerated lid wounds**|\n\n- **⚠️ The most repeated discriminator:** **CICATRICIAL is the ONLY type that can involve BOTH UPPER and LOWER lids** — printed for entropion and again for ectropion. **Every other type takes the lower lid only.**\n- **Treatment, both:** **surgical**, with **topical lubricants** to control surface irritation and inflammation.\n- **⚠️ Neither section names an operation.** No Wies procedure, no Quickert sutures, no lateral tarsal strip, no everting sutures, no skin graft appears in the book. *Contrast ptosis, trichiasis and lagophthalmos, which all name theirs.*\n\n*Trachoma and its cicatricial sequelae: `cnj-11`. Stevens–Johnson and the chemical/thermal burns behind cicatricial disease: `trm-2`, `trm-5`. Epiphora as a symptom, and why an everted punctum causes it: `lac-5`. Facial nerve palsy: `lid-10`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.5 pp.76–78; L5 sl.5, 28, 29, 30, 31, 32",
        "qs": [
          "opqb-t1-17"
        ]
      },
      {
        "id": "lid-8",
        "w": "must",
        "h": "Trichiasis — a normal margin, misdirected lashes, and an operation that is only drawn",
        "body": "- **Trichiasis:** the **LID MARGIN IS IN ITS NORMAL ANATOMIC CONDITION**, but the **LASHES are MISDIRECTED toward the eye**, causnig [sic] irritation.\n- **⚠️ The whole discrimination from entropion:** there the **margin itself is rotated**. Stated here and nowhere else in the chapter.\n- **Associated with:** **entropion**, or **chronic inflammatory lid margin disease (BLEPHARITIS)**.\n- **Symptoms:** **chronic red eye · foreign-body sensation · excessive tearing (reflex lacrimation)**.\n- **Complications:** **conreal [sic] abrasions**, **ulceration** → **scarring or VISION LOSS**, **+ chronic conjunctivitis** *(Tutorial — the book's mark for \"study in round & skip in final\"; here it covers only the conjunctivitis, the rest of the sentence being core text)*.\n\n### Treatment — four steps, two of them tutorial-marked\n1. **REPEATED EPILATION** of the offending lashes *(Temporary — Tutorial; the marker covers the temporariness, and the whole item reads as tagged)*.\n2. **ELECTROLYSIS** of the lash follicles.\n3. **CRYOTHERAPY.**\n4. **SURGERY** — *(mucous-membrane graft in the grey line — Tutorial)*.\n- **⚠️ Skip that fourth marker:** and the item reduces to the bare word *\"surgery.\"* It is the only description of what the operation is, which is why it is written here at full weight.\n\n### Figure-only — what the operation actually does\n- **Panel 1:** a **GROOVE is cut along the GREY LINE**, **anterior to the TARSUS** (hand-lettered \"TAPSUS\" [sic]), splitting the margin; the **lashes swing forward**.\n- **Panel 2:** a **GRAFT is set into the groove** and **sutured** (\"Sotore\" [sic]), so the **lash line is rotated AWAY from the globe**.\n- **⚠️ The body text carries none of it —** it exists as two hand-drawn panels over the word *\"surgery\"*.\n- **The grey line is why it works:** it is the avascular surgical plane between the two leaflets (`lid-1`).\n\n*Trichiasis as a complication of staphylococcal blepharitis: `lid-4`. As a cause of ocular-surface irritation and reflex epiphora: `lac-5`. Trachomatous trichiasis in the WHO grading: `cnj-11`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.5 p.78, including the two hand-drawn surgical panels; L5 sl.27",
        "qs": []
      },
      {
        "id": "lid-9",
        "w": "should",
        "h": "Epicanthus, lid swelling and xanthelasma",
        "body": "### Epicanthus\n- **What it is:** **BILATERAL VERTICAL SKIN FOLDS** from the upper or lower lids toward the **medial Canti** [sic], **HIDING THE MEDIAL CANTAL [sic] TENDON** — hence the name.\n- **⚠️ Why it matters:** the folds give the **FALSE APPEARANCE OF A CONVERGENT SQUINT — PSEUDOESOTROPIA**.\n- **Variants:** **upper lids (epicanthus)**, **lower lids (EPICANTHUS INVERSUS)**, or both. **Treatment surgical, for cosmesis.**\n- **Figure-only:** the **CORNEAL LIGHT REFLEXES STAY CENTRAL** in the photograph — the finding that proves the squint false, never written.\n\n### Lid swelling — the chapter's only work-up of a symptom\n\n|Group|Causes|\n|---|---|\n|**1. ALLERGIC**|**insect bites** · part of **ANGIONEUROTIC OEDEMA** · **skin eczema** with scaling and erythema of the lid skin|\n|**2. DEPENDENT OEDEMA ON AWAKENING**|**congestive heart failure** · **renal dysfunction** · **hepatic failure**|\n|**3. ORBITAL VENOUS CONGESTION**|**orbital mass** · **intracranial mass compressing orbital venous return** · **CAVERNOUS SINUS THROMBOSIS**|\n|**4. INFLAMMATION**|**cellulitis of the lid skin** or other lid inflammations (stye, hordeolum internum) · inflammation or infection of the **LACRIMAL SAC or GLAND** · **trauma** · **thyroid eye disease (Myxoedema)** [as printed]|\n\n- **⚠️ Group 2 is the systemic one:** a lid swollen **on waking and better through the day** points at heart, kidney or liver, not at the eye.\n\n### Xanthelasma\n- **What it is:** a **BENIGN** condition — **cutaneous lesions in the PERIOCULAR region**; **diagnosis is CLINICAL**.\n- **Appearance:** **soft YELLOWISH-WHITE plaques FILLED WITH CHOLESTEROL** on the **MEDIAL aspect** of the lid skin, at the canthus.\n- **Distribution:** **multiple and SYMMETRIC**, **commoner on the UPPER lid** — visible in the figures before it is written. **Age: 4th to 5th decades.**\n- **⚠️ The lipid link and its caveat:** usually **hyperlipidaemia, high total cholesterol, high triglycerides, low HDL** — but **MANY ARE NORMOLIPIDEMIC on presentation**.\n- **Risk factors:** **diabetes mellitus · hypothyroidism · cardiovascular disease · obesity · heavy smoking**.\n- **Investigations:** **total lipid profile · HbA1c · liver function tests · thyroid function tests**.\n- **Treatment:** **low-fat diet and STATINS — effect QUESTIONABLE** · **surgical EXCISION** · **CO2 LASER** *(Tutorial — skip in final)*.\n\n*Epicanthus as pseudostrabismus, with hypertelorism as its mirror: `sqt-10`. Cavernous sinus thrombosis and orbital masses: `orb-9`, `orb-16`. Lacrimal sac and gland swelling: `lac-8`, `lac-9`. The cosmetic operations are deferred to `op-appear` — the book prints indications only.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.5 pp.79–80; L5 sl.4, 33, 34",
        "qs": []
      },
      {
        "id": "lid-10",
        "w": "must",
        "h": "Lagophthalmos — five aetiologies, one percentage, and the nerve that is the exception",
        "body": "- **Lagophthalmos:** **inability to close the lids completely**, the **palpebral fissure remaining partially open during a blink and during sleep**.\n- **The consequence:** the **ocular surface is damaged by EXPOSURE**.\n\n### Aetiology — five, and the fifth is inside a marker\n1. **FACIAL NERVE DYSFUNCTION (paralytic):** weakened lid closure. Damaged by **TRAUMA** (skull base or mandible fracture; surgery — **post-ptosis or blepharoplasty**) · **CEREBROVASCULAR ACCIDENT** · **BELL'S PALSY** · **CEREBELLOPONTINE ANGLE TUMOURS**.\n2. **CICATRICIAL:** **excessive scar tissue**, or **excessive eyelid removal during surgery**.\n3. **PHYSIOLOGIC (NOCTURNAL):** incomplete closure in sleep is **relatively common in the general population**.\n4. **MEDICATION EFFECT:** **SEDATIVES and NEUROMUSCULAR BLOCKERS** — see below.\n5. **FUNCTIONAL (GA, unconsciousness)** *(Tutorial — skip in final)*. **⚠️ The marker wraps a whole numbered aetiology; read past it and the list loses its fifth item.**\n\n- **Bell's palsy, defined here:** one-sided facial muscle weakness; **idiopathic in most cases**, or **reactivation of herpes simplex or zoster**. Other infectious causes: **Lyme disease, varicella, mumps, poliomyelitis, Guillain–Barré, leprosy, diphtheria, botulism**.\n- **BELL'S PHENOMENON:** on closure the **globe rotates UPWARD AND INWARDS**, **protecting the cornea** in nocturnal lagophthalmos. *Figure-only: its direction is drawn in the chapter's only hand-lettered sketch, and one photograph shows it happening.*\n\n### The ICU picture — the chapter's only percentage\n- **⚠️ Incidence in sedated ICU patients: 21–75 %** — the only percentage on printed 70–81, and the reason ICU eyes get **EXPOSURE KERATOPATHY**. *(The book's opening parenthesis here is never closed.)*\n- **Mechanism, two ways:** sedatives and blockers **interfere with the BLINK REFLEX** that spreads the film, and **negatively affect BELL'S PHENOMENON**.\n- **Additive:** **positive-pressure ventilation · high-flow oxygen · fluid imbalance · increased vascular permeability** → **conjunctival oedema** → lagophthalmos.\n\n### ⚠️ The deck classifies it differently, and the bank follows the deck\n- **`L5` heads it in two classes — PARALYTIC and STRUCTURAL** — and lists nothing under either. **Paralytic** is the book's aetiology 1.\n- **STRUCTURAL:** anything making the lids **too short, or the globe too big for them** — **PROPTOSIS**, above all **THYROID EYE DISEASE** *(sourced: ch.4 p.64 lists evaporative dry eye \"with lid retraction, proptosis … and/or lagophthalmos\")* · **SYMBLEPHARON** and cicatricial lid shortening · **buphthalmos** · **high axial myopia** *(the last three not taken from the course material)*.\n- **⚠️ The fifth nerve is the exception:** the **TRIGEMINAL is SENSORY to the cornea, MOTOR only to mastication**, so **closure is NORMAL in a fifth-nerve palsy** — its cornea fails instead by **NEUROTROPHIC keratopathy** *(not taken from the course material)*.\n\n### Treatment — the aim is to protect the cornea\n- **Prophylactic extensive lubrication** with artificial tears — **preservative-free** where treatment will be long.\n- **Long-acting gel and ointment at bedtime**, and **treat any corneal exposure or ulceration**.\n- **Overnight TAPING of the lids** to close the eye.\n- **TARSORRHAPHY:** **suturing upper and lower lids** to **narrow the fissure** and reduce exposure.\n- **GOLD WEIGHT IMPLANTATION** in the upper lid.\n- *(Tutorial box, the chapter's only temporary/permanent split — **A. Temporary:** artificial tears; ointment and adhesive-plaster taping at bedtime. **B. Permanent: LATERAL TARSORRHAPHY and MEDIAL CANTHOPLASTY**. **C.** Treat the cause. Those two operations appear nowhere else.)*\n\n*Exposure keratopathy: `cor-3`, `cor-17`, `orb-9`. Neurotrophic keratitis: `cor-6`. Lagophthalmos as an evaporative dry-eye cause: `lac-3`. Symblepharon: `cnj-15`, `trm-2`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.5 pp.80–81; L5 sl.15, 16; ch.4 p.64 (the thyroid link), cited only. The structural causes and the fifth-nerve exception are supplied and tagged",
        "qs": [
          "opqb-t3-115"
        ]
      },
      {
        "id": "lid-11",
        "w": "should",
        "h": "The lesions this chapter promises and never teaches — and where they are written",
        "body": "**⚠️ Promised and never taught:** the chapter’s own objectives flowchart lists **MALIGNANCIES**, and printed 72 lists **\"3. neoplasms\"** as one of three categories of lid disease.\n\n- **What printed 70–81 actually contain:** no basal cell carcinoma, no squamous cell carcinoma, no sebaceous gland carcinoma, no melanoma, no Mohs surgery and no lid reconstruction.\n- **The only oncology in twelve pages —** the **chalazion biopsy rule** in `lid-3`.\n\n### What the module carries today — names and referral rules, no disease account\n- **`va-9`:** **BCC** as the **commonest lid malignancy**, an inspection label.\n- **`red-11`:** **BCC · SCC · molluscum contagiosum** as lid **lesions**, referred **NON-urgently** — the opposite of a lid malposition, which is urgent.\n- **`rdm-9`:** a **persistent or recurring lid mass is BIOPSIED** — it may be **sebaceous gland, squamous cell or basal cell carcinoma**.\n- **`rdm-8`:** **chronic UNILATERAL blepharitis is referred** to exclude a **sebaceous or squamous carcinoma**.\n- **`orb-16`:** **lacrimal gland pleomorphic adenoma and carcinoma** as orbital masses.\n- **⚠️ The disease accounts are OPEN**, deferred to `op-onc` from the book's own **chapter 17, Malignancies of the Eye and its Adnexa (printed 214–217)**, unread. **Nothing was invented to fill that gap.**\n\n### Three lid entities the lecture names and the book does not\n- **HERPES ZOSTER OPHTHALMICUS:** **vesicles on an erythematous base in the V1 dermatome**, respecting the midline; **HUTCHINSON'S SIGN** — vesicles on the **nose tip**, the nasociliary branch — predicts ocular involvement *(not taken from the course material; `L5` sl.36 is a bare title)*.\n- **HERPES SIMPLEX:** clustered **vesicles at the lid margin**, recurrent, often with follicular conjunctivitis *(not taken from the course material)*.\n- **ECCHYMOSIS — \"black eye\":** **lid haematoma after blunt trauma**, a **mechanical ptosis** while it lasts. **⚠️ BILATERAL periorbital ecchymosis after head injury raises a BASE-OF-SKULL FRACTURE** *(both not taken from the course material; `L5` sl.35 is a bare title)*.\n\n### Also absent, named so nothing is assumed covered\n- **Benign lumps:** **papilloma · cyst of Moll or Zeis (hidrocystoma) · molluscum contagiosum · naevus · capillary and cavernous haemangioma · keratoacanthoma · cutaneous horn**.\n- **And:** **blepharospasm, hemifacial spasm, botulinum toxin** · **blepharophimosis, telecanthus, ankyloblepharon, lid coloboma, distichiasis** · **lid trauma and laceration repair as a section**.\n\n*The corneal and systemic halves of zoster and simplex are already written: `cor-6`, `sys-12`, `scl-2`, `orb-18`. The lid laceration levels and the marginal repair: `trm-9`. Haemangiomas as orbital tumours: `orb-16`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.5 pp.70, 72, 73 and its verified-absent list; L5 sl.35, 36. The three supplied entities are tagged",
        "qs": []
      }
    ]
  }
};
