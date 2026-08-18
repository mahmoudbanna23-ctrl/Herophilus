/* op-onc + op-appear — "Oncology" and "Problems of Appearance", Ophthalmology.
   Written 2026-08-18 under START-HERE.md §14 (slide-density revision notes),
   §14.1 (budget and page prediction), §14.2 (the two-sided coverage floor),
   §14.3 (telegraphic style), §14.3a (layout and the mdLead() anchor rule) and
   §14.5 (the deferral register), plus content\ophtho\theory-plan.md — the two
   USER RULINGS of 2026-08-18, "What writing the first twelve chapters taught",
   the "Book chapters read" log, the skip-in-final ruling, and the section
   "✅ Book ch.3 (Orbit) and ch.17 (Malignancies) — READ 2026-08-18".
   Shape copied from op-lid.draft.js / op-lac.draft.js.

   ⚠️ BOTH CHAPTERS ALREADY EXIST IN modules.js (line 97 `op-onc` "Oncology";
   line 98 `op-appear` "Problems of Appearance"). Neither is new; no modules.js
   registration is needed. This file touches no app\data\* file, no MEMORY.md,
   no resume file and no git.

     `op-onc`     0 linked questions — verified: `grep -c "op-onc" questions.ophtho.js` = 0
     `op-appear`  0 linked questions — verified the same way. Every `qs` is [].

   ⚠️ NO NUMBER IN THIS HEADER IS A MEASUREMENT OF THE FINISHED FILE. Per the
   eleven header faults recorded in §14.1 and theory-plan.md, this header states
   reasoning, sources and deferrals and states NO totals. Every figure below is
   derived from a SOURCE, never from the draft. The hub measures body words from
   disk — canonical W(s.body) over every section, Src: lines INCLUDED — and
   prints the chapters.

   ===========================================================================
   SOURCES — ALL CACHED. NOTHING WAS RENDERED. NO PDF WAS OPENED.

     content\ophtho\book\ch17-malignancies.txt     printed 214–217,  4 pp, 1.5 %
     content\ophtho\book\ch19-systemic-tumours.txt printed 236–253, 10 %  (§(11)
                                                   malignancy sections only)
     content\ophtho\book\ch16-paediatric.txt       printed 204–213, 10 pp, 4.5 %
                                                   (retinoblastoma + leukocoria)
     content\ophtho\book\ch03-orbit.txt            printed  56–61,  6 pp, 3 %
     content\ophtho\book\ch05-eyelids.txt          printed  70–81, 12 pp, 6.5 %
                                                   (appearance items only —
                                                    written in full in `op-lid`)
     content\ophtho\book\ch15-squint.txt           printed 196–203, 8 pp, 3 %
                                                   (pseudostrabismus + the
                                                    self-image sentence)

   ⚠️ CITATIONS ARE THE **PRINTED** PAGE. PDF page = printed + 2, and no PDF
   page number appears in any chapter body. Book Src: lines read
   `ophthalmology.pdf (HEALIX) ch.<N> p.<printed>`.

   ⚠️ THE MODULE'S OWN MERGED THEORY WAS READ BEFORE WRITING, NOT ASSUMED.
   Sections read in app\data\theory.ophtho.js: `wht-7`, `wht-8`, `orb-2`–`orb-8`,
   `orb-14`, `orb-15`, `orb-16`, `orb-17`, `lid-5`, `lid-6`, `lid-7`, `lid-9`,
   `lid-10`, `lid-11`, `lac-10`, `trm-7`, `trm-9`, `va-9`, `red-11`, `rdm-9`,
   `cat-11`, `cnj-14`, `sys-10`, `uv-1`, `uv-9`, `rd-2`, `rd-8`, `sqt-1`,
   `sqt-10`, `vsc-15`. Every cross-reference below was verified against the
   merged file, never against a register row.

   ===========================================================================
   BUDGET (§14.1). Both terms collapse, and for a reason that must be stated
   rather than hidden: NEITHER CHAPTER OWNS A QUESTION.

     TERM 1, source words — but see the ruling below on why it is not the basis:
       `op-onc`     ch.17 1,937 (whole cache, incl. its absence lists) + ch.19
                    2,079 (partial cache, malignancy only) + ch.16's
                    retinoblastoma and leukocoria blocks (~260 of 5,001)
       `op-appear`  ch.3 p.57–59 globe-displacement block (~700 of 2,401) +
                    ch.5 and ch.15 appearance items, **cited only, not counted**
                    — every word of both is already charged to `op-lid` and
                    `op-squint`, and §14.5 forbids billing a deck twice
     TERM 2, 25 × linked questions:
       `op-onc`     25 × 0 = 0
       `op-appear`  25 × 0 = 0
     budget = max(TERM 1, TERM 2), floor 600, cap 3,000 — both chapters clear
     the floor on TERM 1 alone and neither approaches the cap.

   ⚠️ THE HUB SET THE TARGETS (~2,200 `op-onc`, ~2,000 `op-appear`) AND THEY
   WERE WRITTEN TO, NOT TO THE ÷240 ESTIMATOR. The brief records that the
   estimator over-predicted by 5.1 and 4.6 pages on the two preceding
   book-sourced chapters. Nothing was compressed to satisfy a forecast; the hub
   prints and measures.

   ⚠️ `op-appear` IS A §14.1 SURVEY CHAPTER OF THE `ent-sinuscomp` SHAPE — its
   scope is what the rest of the module leaves. The module was greped before a
   word was written (terms: Hertel, pseudoproptosis, pseudo-exophthalmos,
   cosmesis/cosmetic, decompression, blepharoplasty, prosthesis, exenteration,
   carotid, epicanthus, xanthelasma, symblepharon, hypertelorism). Findings are
   in "WHAT THE GREP FOUND" below.

   ===========================================================================
   ⚠️⚠️ THE FOUR §14.5 ROWS POINTING AT `op-onc` — VERDICT ON EACH, VERIFIED
   AGAINST THE CACHES AND AGAINST THE MERGED FILE, NOT AGAINST THE ROW.

   ROW A — `op-lid` (book ch.5, printed 70–81) → THE LID MALIGNANCIES AS DISEASE.
     ✅ **PAID IN FULL by ch.17.** BCC (site, rolled/beaded edge, telangiectasia,
        local invasion, excision + reconstruction), SCC (upper lid / lateral
        canthus, keratosis, everted edges, three modes of spread, the
        immunosuppression clause), sebaceous carcinoma (7th–8th decades, upper
        lid, Zeiss/meibomian origin, three masquerades, highly invasive), and the
        N.B. box. Written in `onc-1`, `onc-2`, `onc-3`. `lid-11`'s statement of
        what the module carried before today is now superseded by those three
        sections and should be re-read at the reconciliation pass.

   ROW B — `op-systemic` (L23 ll.301–322) → METASTASES, LYMPHOMA, LEUKAEMIA.
     ✅ **PAID IN FULL by ch.19 §(11), printed 253** — and the section carries
        **no tutorial marker**, so it is fully examinable. Written in `onc-7`.
     ⚠️ **DECLARED OVERLAP, not a duplicate.** Merged `sys-10` already carries
        the 5 % and 3 % figures, the masquerade, the leukaemic haemorrhages and
        a two-row treatment-toxicity grid, all from `L23`. The two sources are
        NOT identical — `L23` adds CAR/MAR, autonomic pupils, retinal artery
        occlusion and corneal decompensation; ch.19 adds the choroid as the
        commonest site, breast/lung/neuroblastoma as the primaries, the >75 %
        autopsy figure, the thrombocytopenia attribution, cytosine arabinoside,
        vincristine and GVHD symblepharon by name. Both are kept, each cited to
        its own source, and `onc-7`/`onc-9` say in the body where `sys-10` sits.

   ROW C — `op-cat` + `op-white` → RETINOBLASTOMA AND THE LEUKOCORIA
     DIFFERENTIAL AS A TUMOUR.
     ⚠️ **HALF-PAID, exactly as the plan predicted.** Ch.17's heading is a bare
        pointer to ch.16; **ch.16's retinoblastoma section is 92 words**, and it
        is the only retinoblastoma text in all 274 pages. Verified absent from
        both chapters: all genetics, all staging, all histopathology, all
        prognosis, age, incidence, trilateral RB, second primaries and
        optic-nerve/CSF spread. Work-up is one line.
     ✅ **ANSWERED, NOT DECLARED**, per `CLAUDE.md` §4's standing user ruling
        that supersedes the workspace grounding rule for this project. `onc-5`
        writes what the book prints; `onc-6` supplies genetics, histopathology,
        work-up and staging with the `(not taken from the course material)` tag
        on each claim, in the `lid-11`/`lac-10` shape.
     ✅ **`wht-7` IS NOT RE-DERIVED.** It holds the four treatment modalities and
        the "malignant tumour of the photoreceptors" definition from `L33,34` —
        the module's only source for both — and `onc-5` points at it.
     ⚠️ **THE LEUKOCORIA HALF IS RECORDED, NOT REWRITTEN.** Ch.16 printed 206
        prints a SEVEN-ITEM RANKED differential; `wht-8` carries five of the
        seven from `L33,34` with fuller definitions. **`PHPV` returns ZERO across
        the whole module** — verified today. A new row is opened to `op-white`
        (below) rather than rewriting `wht-8` from here.

   ROW D — `op-orbit-mass` (L10 sl.42–46) → ORBITAL TUMOURS AS ONCOLOGY.
     ❌ **UNDELIVERABLE, and confirmed by reading both candidate chapters.**
        Ch.17 has no orbital-tumour section; its only orbit-facing lines are
        SCC's perineural spread and Kaposi by cross-reference. Ch.3's "orbital
        tumours" is aetiology item 3 of exophthalmos — **three bullets** (gradual
        onset, usually unilateral but bilateral in lymphoma, ± neurofibromatosis)
        with **no named tumour, no imaging appearance and no management**, and
        ch.3 prints no orbital anatomy at all. **`orb-16` remains the module's
        only account and is not rewritten.** Recorded as undeliverable in
        `onc-10` and in the register below.

   REVERSE NOTICE (book ch.19 §(11)) — THE OCULAR TOXICITY OF CANCER TREATMENT.
     ✅ **WRITTEN, in `onc-9`.** A third of §(11) is radiation retinopathy,
        cytosine-arabinoside keratitis, vincristine optic neuropathy and
        bone-marrow-transplant GVHD with symblepharon. No row asked for it.

   ===========================================================================
   ⚠️ TWO CLAIMS OF A FILED ROW THAT HAVE NO ROW — reported, not worked around.

   Merged `uv-1` closes *"Iris melanoma is `op-onc`'s — row filed"* and merged
   `uv-9` closes *"Masquerade malignancies as tumours are `op-onc`'s — row
   filed"*. **Neither row exists in START-HERE.md §14.5** — the ophthalmology
   block lists no `op-uvea` donor row at all (checked donor by donor). The same
   is true of the two rows `op-lid.draft.js` and `op-lac.draft.js` opened on
   merge day: `op-lid` → `op-appear` (cosmetic oculoplastic procedures) and
   `op-lac` → `op-onc` (lacrimal gland and sac tumours) are in the drafts and
   not in the register file.

   **This is a REGISTER-KEEPING gap, not a content gap, and both `op-uvea`
   claims are satisfied anyway:** the four masquerade malignancies
   (retinoblastoma, choroidal melanoma, leukaemia, lymphoma) are all written
   here, and iris melanoma is reported UNDELIVERABLE with the evidence — ch.17
   prints "Malignant melanoma" as a bare bullet under "other less common
   malignancies" and ch.10's own absent list confirms **no uveal tumours, no
   choroidal naevus**. Nothing was invented to close it.

   ===========================================================================
   ⚠️ WHAT THE GREP FOUND — the `op-appear` scope map, measured not assumed.
   Counts are occurrences across app\data\theory.ophtho.js, taken today.

     Kaposi 0 · PHPV 0 · radiation retinopathy 0 · vincristine 0 · cytosine 0
       → all four are genuine module-wide holes, and three are written here.
     Hertel 1 (`orb-3`) · pseudoproptosis/pseudoenophthalmos 2 (`orb-4`)
     cosmesis/cosmetic 7 · decompression 3 (all `orb-7`) · exenteration 6
     symblepharon 10 · carotid 22 · melanoma 8 · metasta- 5 · lymphoma 6
     leukaem/leukem 7 · masquerade 7
       → the appearance ENTITIES are all written; what is missing module-wide is
         the appearance LENS across them and the cosmetic MANAGEMENT.

   `op-appear` therefore writes: ch.3 p.57's appearance-differential (the three
   pseudo-exophthalmoses, the exophthalmos/proptosis terminology split, Hertel
   and the 12–22 mm range, enophthalmos and its three causes, the early-proptosis
   /late-enophthalmos trap, pulsating exophthalmos), the complaint-to-chapter
   map, and the cosmesis section. It POINTS at `orb-3`–`orb-8`, `orb-11`,
   `orb-14`, `orb-16`, `orb-17`, `lid-5`–`lid-10`, `trm-7`, `trm-9`, `sqt-1`,
   `sqt-8`, `sqt-10`–`sqt-12` and does not re-derive any of them.

   ===========================================================================
   ⚠️ TUTORIAL MARKERS, CARRIED THROUGH AT FULL WEIGHT (theory-plan.md's ruling
   of 2026-08-18: the marker is DATA about what the book says, never permission
   to omit, and never a compression rule).

   ch.17 — ONE marker: printed 217, a blue-outlined rounded box whose first line
     is the centred blue word "Tutorial", holding the **ultrasonography of
     choroidal melanoma** (dome shaped · high initial spike then low internal
     reflectivity · collar-stud/mushroom). Written in full in `onc-4` with the
     tag recorded. **It is the chapter's only imaging content.**
   ch.19 — THREE markers, **none on the malignancy page**. §(11) printed 253
     carries no marker at all: fully examinable. Recorded in `onc-7`.
   ch.16 — SEVEN markers; **none on the retinoblastoma section (printed 208) and
     none on the leukocoria differential (printed 206)**. Both are core.
   ch.3  — FIVE markers in three forms; two fall inside `op-appear`'s material:
     the "History of trauma (or surgery .. Tutorial)" parenthetical under
     retrobulbar haemorrhage, and the boxed "Idiopathic orbital inflammatory
     disease (another cause from tutorial)". Both recorded in `app-3`.
   ch.15 — the self-image sentence is NOT marked; the surgical-correction box
     beside it IS. Both recorded in `app-8`.

   ⚠️ STAR GLYPHS: ch.3 printed 58 prints `"Blow-out" fracture : ☆☆☆` — the
   book's only importance rating found anywhere in the module. Recorded in
   `app-5`. Ch.17, ch.19 and ch.16 print none.

   ===========================================================================
   ⚠️ THE SOURCES' OWN DEFECTS — RECORDED IN PLACE, NEVER SILENTLY CORRECTED.

   ch.17
     · printed 217, verified at 300 dpi by the reading agent: the comparison
       table's last cell ends mid-phrase — "only the tumor depending on its".
       The completing word has overflowed the cell. The prose above supplies
       "size". Held as printed, completion noted            → `onc-5`
     · "glands of Zeiss" (p.216) against ch.5's "Gland of Zeis" (p.71 figure)
                                                            → `onc-3`
     · The objectives flowchart promises "Metastases" and teaches nothing;
       "Retinoblastoma" is not promised yet gets a banner. Two dead pointers
                                                            → `onc-1`, `onc-10`
     · "tumour" in the prose, "tumor" in the table, same page → `onc-5`
   ch.19
     · "eye;or its adnexa" [sic], "posierior" for posterior, "steroid-dependent,"
       with no space, "leukaemia" and "leukemic" on the same page  → `onc-7`
   ch.16
     · "Hereditable" for heritable; "Coat's" for Coats'; "telangiectasis" for
       telangiectasia                                       → `onc-5`, `onc-10`
   ch.3
     · "orbital , inflammation ,etc" — the book's own comma placement → `app-3`
     · "Surgically drainage" [sic]; "H. Influenzae" / "S. Aureus" capitalised
       (both fall in `orb-8`/`orb-9`'s material, not re-written here)
     · The blow-out table has no header row and no corner cell    → `app-5`
   ch.15
     · "pseudostabismus" [sic], missing an r (printed 202)        → `app-8`

   ===========================================================================
   DEFERRALS OPENED BY THESE TWO CHAPTERS (§14.5 — an unrecorded promise is a
   deletion). Neither chapter owns a question, so the "no filed question tests
   it" check is trivially satisfied for both.

   | Deferred from | Fact | Owed to |
   |---|---|---|
   | `op-onc` (**book ch.16, printed 206**) | **THE SEVEN-ITEM RANKED LEUKOCORIA DIFFERENTIAL** — cataract (most common) · retinoblastoma (most serious) · retinopathy of prematurity · **persistent hyperplastic primary vitreous / persistent foetal vasculature (PHPV/PFV)** · toxocariasis · retinal detachment · Coat's disease. ⚠️ `wht-8` carries five of the seven from `L33,34` with FULLER definitions and does not carry the RANKING or the term **PHPV**, which returns **ZERO module-wide**. `onc-10` records the list and the delta; **`wht-8` is NOT rewritten from here** | `op-white` ☐ |
   | `op-onc` (**book ch.17, printed 216**) | **IRIS MELANOMA AS A TUMOUR** — `uv-1` names it as a cause of heterochromia and points at `op-onc`. ⚠️ **UNDELIVERABLE:** ch.17 prints "Malignant melanoma" as one bare bullet under "other less common malignancies" and teaches nothing; ch.10's own verified-absent list confirms **no uveal tumours and no choroidal naevus**. Recorded in `onc-10`; **nothing supplied** | — ⚠️ **notice — undeliverable, do not re-chase** |
   | `op-onc` (**book ch.17 + ch.3**) | **ORBITAL TUMOURS AS ONCOLOGY** (ROW D above) — tumour biology and staging of lacrimal gland tumours, optic nerve glioma, optic nerve sheath meningioma and rhabdomyosarcoma. ⚠️ **UNDELIVERABLE from the book's orbit and oncology chapters**, both now read. `orb-16` remains the module's only account. The same verdict closes `op-lac`'s ch.4 p.68 row on lacrimal gland and sac tumours | — ⚠️ **notice — undeliverable from the book** |
   | `op-appear` (**book ch.3, printed 56–61 — the ABSENCE**) | **COSMETIC AND OCULOPLASTIC MANAGEMENT AS TECHNIQUE** — no incision, flap, graft, suture material or timing is printed for any cosmetic operation anywhere in the ophthalmology sources read by this project. `app-9` collects every operation the module DOES source (`orb-7`, `orb-17`, `lid-6`, `lid-9`, `lid-10`, `trm-9`, `sqt-8`) and supplies four items tagged. The only unread candidate is the retired **`L27,28`, 70 pp** | — ⚠️ **notice — no receiver; recorded so nothing is assumed covered** |

   ⚠️ NOTHING ELSE IS DEFERRED OUT OF EITHER CHAPTER. Every entity they touch is
   already written somewhere in the merged module and is cross-referenced, never
   promised.

   ===========================================================================
   ⚠️⚠️ WHAT CONTRADICTS THE BRIEF — reported, not quietly worked around.
   (The brief itself asked for this, having been wrong six times in seven on an
   earlier chapter.)

   (1) **"`op-appear`'s ONE OPEN REGISTER ROW" IS TWO ROWS, AND THE FIRST IS
       ALREADY CLOSED BY ITS DONOR.** The brief names the `op-trauma` (L25
       sl.41–42) marginal-lid-laceration row as still open. **Merged `trm-9`
       already writes the marginal repair AS A PROCEDURE, in full** — "an initial
       margin suture, partial-thickness lamellar sutures in the tarsus, then the
       margin sutures tied under the skin sutures". Quoted from the merged file,
       not from the row. This is the NINTH fault shape again — the donor
       under-stating its own coverage — and `op-lac`'s agent reached the same
       verdict on 2026-08-18 for the same row. `app-9` cross-references it and
       adds only the appearance consequence (notch, lash-line malalignment),
       tagged. **The second row the brief does not mention is `op-lid` →
       `op-appear`: epicanthus correction and xanthelasma removal as cosmetic
       oculoplastic procedures**, opened in `op-lid.draft.js` and never
       transcribed into START-HERE.md. It is delivered in `app-9` at the level
       the sources allow.

   (2) **"`op-orbit` CARRIES … HERTEL ACROSS `orb-3`–`orb-8`" IS TRUE BUT THIN,
       AND THE TWO SOURCES GIVE DIFFERENT NUMBERS.** `Hertel` returns exactly
       ONE hit module-wide, in `orb-3`, and `orb-3` gives the deck's **>20 mm**
       cut-off and the **2–3 mm asymmetry** rule but **no normal range and no
       measurement landmark**. Ch.3 gives the landmark (cornea tip to the plane
       of the lateral orbital margin) and the range **12–22 mm**. These are not
       contradictory — a range and a cut-off — and `app-4` prints both with a
       visible note rather than choosing.

   (3) **"`orb-4` HAS THE HORNER APPARENT-ENOPHTHALMOS RULE" IS TRUE, AND
       `orb-4` ALSO ALREADY HOLDS A FULLER PSEUDO- LIST THAN THE BOOK'S.**
       Ch.3's pseudo-exophthalmos is three items; `orb-4`'s pseudoproptosis
       column is five and its pseudoenophthalmos column three. `app-2` prints
       the book's three as the book's and then names `orb-4`'s additions rather
       than silently merging the two lists.

   (4) **"CH.17 … PLUS THE N.B. BOX" UNDERSTATES ONE THING AND THE BRIEF'S
       BCC SUMMARY OMITS ANOTHER.** The N.B. box is two rules, not one — the
       recurrent-chalazion biopsy AND the chronic-unilateral-blepharitis-or-
       conjunctivitis evaluation — and both name **sebaceous carcinoma
       specifically**, not "malignancy" generically. Also, ch.17 prints a
       two-bullet **"characteristics of eyelid malignancies"** block (ulceration
       and bleeding · destruction of normal lid anatomy, e.g. loss of lashes)
       that no row and no brief mentions; it is the chapter's only general rule
       and is written in `onc-1`.

   (5) **"`rd-2`, `rd-8` AND `uv-9` ALREADY MENTION CHOROIDAL MELANOMA — READ
       THEM AND DO NOT DUPLICATE" IS CORRECT, AND THEY MENTION IT THREE
       DIFFERENT WAYS.** `rd-2` as a cause of exudative detachment, `rd-8` as
       the exudative detachment that must not be steroid-treated, `uv-9` as a
       masquerade. **None of the three describes the tumour**, so `onc-4` is not
       a duplicate of anything; it cross-references all three.

   (6) **THE BRIEF'S RETINOBLASTOMA ABSENCE LIST IS ACCURATE IN EVERY PARTICULAR
       — CHECKED TERM BY TERM AGAINST BOTH CACHES.** RB1, 13q, two-hit,
       Reese–Ellsworth, International Classification, TNM, COMS,
       Flexner–Wintersteiner, Homer Wright, fleurettes, spindle/epithelioid,
       prognosis, incidence, age, trilateral RB, second primaries, optic-nerve
       and CSF spread: **all absent, all verified.** The one nuance is that
       ch.16 does print "Screening of siblings/offspring essential", which is
       genetics-adjacent and is kept as the book's own line in `onc-5` rather
       than folded into the supplied genetics of `onc-6`.

   (7) **"CH.17 PAYS THE LID MALIGNANCIES IN FULL" IS TRUE FOR DISEASE AND FALSE
       FOR SURGERY.** The chapter prints "complete excision with a safety
       margin" and "reconstruction of the resultant defect" and **no margin
       width, no Mohs, no frozen section and no reconstruction technique**. Said
       in `onc-2` and again in `onc-10` rather than filled with invented numbers.

   ===========================================================================
   RE-MEASURE COMMAND (§14.1 — the header is a claim, the file is the fact):

     node -e "eval(require('fs').readFileSync('content/ophtho/theory-drafts/op-onc.draft.js','utf8'));
       Object.keys(THEORY_DRAFT).forEach(function(k){var t=0;
         THEORY_DRAFT[k].sections.forEach(function(s){t+=s.body.trim().split(/\s+/).length;});
         console.log(k, THEORY_DRAFT[k].sections.length+' sections', t+' body words');});"
   =========================================================================== */

var THEORY_DRAFT = {
  "op-onc": {
    "intro": "Four book pages and one page of chapter 19. The lid carcinomas and choroidal melanoma are taught in full; retinoblastoma gets 92 words in all 274 pages, so its genetics, staging and work-up are supplied and tagged.",
    "sections": [
      {
        "id": "onc-1",
        "w": "must",
        "h": "Where ocular malignancy comes from — and the four “most common” answers",
        "body": "**Primary ocular malignancy is uncommon:** the eye is an **uncommon site for PRIMARY malignancies**, and the **most common intraocular malignancies are SECONDARIES** from other sites.\n\n### The four “most common” answers, and they are asked as a set\n\n|Question|Answer|\n|---|---|\n|Most common **intraocular** malignancies overall|**SECONDARIES (metastases)** — `onc-7`|\n|Most common **primary intraocular** malignancy in **CHILDREN**|**RETINOBLASTOMA** — `onc-5`|\n|Most common **primary intraocular** malignancy in **ADULTS**|**CHOROIDAL MELANOMA** — `onc-4`|\n|Most common **EYELID** malignancy|**BASAL CELL CARCINOMA** — `onc-2`|\n\n### Eyelid malignancies — the two features they share\n- **Ulceration and bleeding.**\n- **Destruction of the normal lid anatomy** — the book's own example is **loss of lashes**.\n- **The three taught:** basal cell carcinoma · squamous cell carcinoma · sebaceous cell carcinoma.\n- **Two more named and not taught:** **KAPOSI SARCOMA** (`onc-8`) and **malignant melanoma**.\n\n- **⚠️ Two of five headings are dead pointers:** the chapter's *Metastases* section is a banner and one italic line sending the reader to chapter 19, and its *Retinoblastoma* section is a banner sending the reader to chapter 16. **A heading in this book is not evidence that the chapter teaches the topic.**\n- *Defect note: the objectives flowchart promises Metastases and delivers nothing, and does not promise Retinoblastoma, which gets a heading anyway.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.17 pp.214–216",
        "qs": []
      },
      {
        "id": "onc-2",
        "w": "must",
        "h": "Basal cell against squamous cell carcinoma — site, edge, and how each spreads",
        "body": "||**BASAL CELL CARCINOMA (BCC)**|**SQUAMOUS CELL CARCINOMA (SCC)**|\n|---|---|---|\n|**Rank**|**THE MOST COMMON eyelid malignancy**|less common, and the more dangerous|\n|**Classical site**|the **NASAL part of the LOWER LID, close to the MEDIAL CANTHUS**|the **UPPER LID** and the **LATERAL CANTHUS**|\n|**Surface**|—|**overproduction of KERATIN (keratosis)**, giving a **FLAKY** appearance|\n|**Ulcer edge**|**BEADED (ROLLED) edges**|**EVERTED edges**|\n|**Vessels**|**DILATED TORTUOUS VESSELS on the ulcer margin — TELANGIECTASIA**|—|\n|**Spread**|**LOCAL INVASION of adjacent tissues only; it RARELY METASTASISES** — locally malignant|**three modes** — see below|\n|**Treatment**|**complete excision with a SAFETY MARGIN**, then **RECONSTRUCTION of the resultant defect**|**complete excision with a safety margin**; **metastatic lesions may need radiotherapy, chemotherapy or immunotherapy**|\n\n### SCC — the three modes of spread, and they are the reason it is feared\n1. **LOCAL, via PERINEURAL INFILTRATION** into the **ORBIT** or even the **CRANIAL CAVITY**.\n2. **LYMPHATIC**, to the **locally draining lymph nodes**.\n3. **HAEMATOGENOUS**, to distant organs.\n\n- **⚠️ The immunosuppression rule:** **LEUKAEMIA** patients, and patients who have had **organ transplants** and are on **systemic immunosuppressants**, are liable to a **MORE AGGRESSIVE SCC**.\n- **⚠️ Two words separate the pair:** **rolled and beaded = BCC** · **everted and keratotic = SCC**. Then the site — **nasal-lower against upper-lateral**.\n- **⚠️ Surgery is named, never described:** no margin width, no **Mohs** micrographic surgery, no frozen section and no reconstruction technique is printed anywhere in the chapter.\n\n*The names and the referral rules the module carried before this chapter: `va-9` (BCC as the commonest lid malignancy), `red-11` (BCC, SCC and molluscum referred NON-urgently), `rdm-9`, `lid-11`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.17 pp.215–216",
        "qs": []
      },
      {
        "id": "onc-3",
        "w": "must",
        "h": "Sebaceous carcinoma — the one that arrives disguised as an inflammation",
        "body": "- **Sebaceous carcinoma:** arises from the **SEBUM-SECRETING GLANDS of the eyelid** — the **sebaceous glands** and the **GLANDS OF ZEISS at the roots of the lashes**.\n- **Who: the ELDERLY, 7th and 8th decades.**\n- **Where: MORE COMMON IN THE UPPER LID** — the opposite end from BCC.\n- **Behaviour: HIGHLY INVASIVE, and it METASTASISES EASILY.**\n\n### ⚠️ The three masquerades — it presents as a benign inflammation\n- **CHRONIC BLEPHARITIS.**\n- **RECURRENT CHALAZION.**\n- **CHRONIC CONJUNCTIVITIS.**\n\n### The N.B. box — two rules, printed in a shaded panel\n- **Rule 1:** any **OLD patient with a RECURRENT CHALAZION** must have a **BIOPSY** to rule out sebaceous carcinoma.\n- **Rule 2:** old patients with **CHRONIC UNILATERAL BLEPHARITIS or CONJUNCTIVITIS** must be **properly evaluated** for sebaceous carcinoma.\n- **⚠️ Both name the disease specifically** — the rules are not a generic “exclude malignancy”.\n\n### The site triad, in one line\n- **BCC — lower lid, medial canthus** · **SCC — upper lid, lateral canthus** · **SEBACEOUS — upper lid, elderly.**\n\n- **⚠️ The red flag:** blepharitis, chalazion and conjunctivitis are the three commonest benign lid complaints, and this carcinoma imitates all three. **UNILATERAL and PERSISTENT is what breaks the disguise.**\n- *Defect note: ch.17 p.216 prints “glands of Zeiss”; the ch.5 figure prints “Gland of Zeis”. Both held.*\n\n*The chalazion biopsy rule as `op-lid` writes it: `lid-3`. The persistent-lid-mass biopsy rule naming all three carcinomas: `rdm-9`. The chronic-unilateral-blepharitis referral: `rdm-8`. Blepharitis, chalazion and conjunctivitis as diseases: `lid-3`, `lid-4`, `op-conj`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.17 p.216",
        "qs": []
      },
      {
        "id": "onc-4",
        "w": "must",
        "h": "Choroidal melanoma — the adult's tumour, and the ultrasound that names it",
        "body": "- **Rank:** the **MOST COMMON PRIMARY INTRAOCULAR MALIGNANCY IN ADULTS**.\n- **Share of the uvea:** **MORE THAN 80 % of uveal tract tumours**.\n- **Who:** more prevalent in **FAIR-SKINNED individuals**.\n- **Symptoms:** it can be **SYMPTOMLESS and found by chance**, or cause visual symptoms **if it lies BENEATH THE MACULA**.\n- **Ophthalmoscopy:** a **SOLITARY, ELEVATED, SUBRETINAL, GREY-BROWN, DOME-SHAPED mass**, mostly **WITHIN 3 mm OF THE OPTIC DISC**.\n\n### Other signs — four, and each is a complication of a mass under the retina\n- **EXUDATIVE RETINAL DETACHMENT** · **RUBEOSIS IRIDIS** · **SECONDARY GLAUCOMA** · **CATARACT**.\n\n### Spread and treatment\n- **Distant metastasis:** COMMON, especially to the **LIVER**.\n- **Before treatment:** **evaluation of the presence or absence of spread is MANDATORY**.\n- **Treatment, two modalities:** **RADIOTHERAPY** · **surgical excision — ENUCLEATION of the whole eyeball, or excision of the TUMOUR ALONE depending on its size**.\n- **⚠️ Why enucleation and never evisceration:** the globe must leave **intact**; eviscerating a tumour spreads it (`orb-17`).\n\n### Ultrasonography — the chapter's only Tutorial box\n*The book tags this box “Tutorial” — study in round, skip in final. **The tag is recorded; the content is kept in full**, because it is the chapter's only imaging content.*\n- **DOME shaped.**\n- **HIGH initial spike**, then **LOW internal reflectivity**.\n- **COLLAR-STUD or MUSHROOM shaped appearance.**\n- **⚠️ Why the mushroom:** the tumour breaks through **Bruch's membrane** and mushrooms into the subretinal space, waisted at the break *(not taken from the course material)*.\n\n*Exudative detachment as a mechanism: `rd-2`. The exudative detachment that must NOT be steroid-treated: `rd-8`. Melanoma as a uveitis masquerade: `uv-9`. Rubeosis and neovascular glaucoma: `vsc-5`, `glc-15`. Enucleation against evisceration and exenteration: `orb-17`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.17 p.217",
        "qs": []
      },
      {
        "id": "onc-5",
        "w": "must",
        "h": "Retinoblastoma as the book prints it — ninety-two words, and what they say",
        "body": "**⚠️ The whole book prints 92 words on it:** the upper third of ch.16 printed 208. Ch.17's *Retinoblastoma* heading is a bare cross-reference to it, and **that is the only retinoblastoma text in all 274 pages.**\n\n- **Rank:** the **MOST COMMON PRIMARY INTRAOCULAR MALIGNANCY IN CHILDREN**.\n\n### Types — the book splits them by LATERALITY, and by nothing else\n- **Hereditable [sic]:** **usually BILATERAL and MULTIFOCAL**.\n- **Non-hereditable (sporadic):** **usually UNILATERAL and UNIFOCAL**.\n- **⚠️ Not printed:** no inheritance pattern, no gene, no penetrance — see `onc-6`.\n\n### Spread, presentation, imaging, treatment\n- **Spread:** **DIRECT, intraocularly and extraocularly**, or **HAEMATOGENOUS**.\n- **Presents with:** **LEUKOCORIA** or **STRABISMUS**.\n- **Imaging, the whole work-up as printed:** **U/S or CT scan may demonstrate a CALCIFIED MASS — present in MOST CASES**.\n- **Treatment:** **RADIOTHERAPY · CHEMOTHERAPY combined with LASER · CRYOPEXY · and/or ENUCLEATION**.\n- **Screening:** **of SIBLINGS and OFFSPRING — essential.** *The book's only genetics-adjacent line, and it prints no protocol.*\n\n### The book's own comparison, printed beside choroidal melanoma\n- **Three axes only:** commonest in **children** against **adults** · **spread** · **treatment**. Nothing else is contrasted.\n- *Defect note: the table's last cell ends mid-phrase — “only the tumor depending on its” — the completing word has overflowed the cell and is not printed. The prose above supplies **size**. The same page prints “tumour” and “tumor”.*\n\n*⚠️ Not repeated here: `wht-7` holds the **four treatment modalities** and the definition **“malignant tumour of the photoreceptors”** from `L33,34` — the module's only source for both. `cat-11` holds the urgency rule (retinoblastoma until proved otherwise, urgent B-scan plus MRI). `sqt-10` puts **retinoblastoma in the fundus check of every squint**. The red reflex: `pup-9`. Leukocoria: `wht-7`, `wht-8`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.16 p.208; ch.17 pp.215–217",
        "qs": []
      },
      {
        "id": "onc-6",
        "w": "must",
        "h": "Retinoblastoma — genetics, histology, work-up and staging, supplied",
        "body": "**⚠️ NOT FROM THE COURSE MATERIAL:** every claim below, on one section-level tag instead of a tag per line, in the `orb-17` shape. **The single sourced exception is marked in place.**\n\n*Both chapters that could hold this have been read and print none of it. Verified absent: RB1, chromosome 13q, the two-hit model, Reese–Ellsworth, the International Classification, TNM, COMS, Flexner–Wintersteiner, Homer Wright, fleurettes, spindle/epithelioid typing, prognosis, incidence, age at presentation, trilateral disease, second primaries and optic-nerve or CSF spread.*\n\n### Genetics — what the book's “bilateral vs unilateral” split actually means\n- **The gene: RB1**, a **TUMOUR-SUPPRESSOR** gene on the **long arm of chromosome 13, band 13q14**.\n- **Knudson's TWO-HIT hypothesis:** **BOTH copies must be inactivated** before a tumour forms.\n- **Hereditary (germline), ~40 %:** the **first hit is inherited in EVERY cell**, so the second is easy — hence **BILATERAL, MULTIFOCAL and EARLIER**. **Autosomal dominant, ~90 % penetrance.**\n- **Sporadic, ~60 %:** **both hits fall in ONE retinal cell** — hence **UNILATERAL, UNIFOCAL and LATER**.\n- **⚠️ What the germline child also carries:** **TRILATERAL retinoblastoma** — a **pineal or suprasellar** primitive neuroectodermal tumour — and a lifelong risk of **SECOND PRIMARY malignancies, OSTEOSARCOMA above all**, raised further by radiotherapy.\n\n### Age, incidence, histology\n- **Incidence ~1 in 15,000–20,000 live births**; almost all present **under 3 years**, bilateral cases earlier (~12 months) than unilateral (~24 months).\n- **Histopathology:** **FLEXNER–WINTERSTEINER rosettes** (a true lumen) · **HOMER WRIGHT rosettes** (no lumen) · **FLEURETTES**, evidence of photoreceptor differentiation.\n\n### Work-up — the book's one line, expanded\n- **EXAMINATION UNDER ANAESTHESIA:** both eyes, with **scleral indentation**, mapped and photographed.\n- **B-scan ultrasound:** an intraocular mass with **high-reflectivity CALCIFICATION** — *this one is the book's own “calcified mass”, and is sourced.*\n- **MRI of orbits and brain:** the modality of choice — it assesses **OPTIC NERVE INVASION** and **trilateral disease**. **CT is avoided in germline disease**, the radiation adding second-tumour risk.\n- **Genetic testing:** of the child, the siblings and the parents — what turns the book's one screening bullet into a protocol.\n- **Lumbar puncture and bone marrow** only where **extraocular spread** is suspected.\n\n### Staging\n- **International Classification:** **groups A–E**, for **intraocular** disease, by **tumour size, location and seeding**; it predicts **GLOBE SALVAGE**.\n- **Reese–Ellsworth:** the older scheme, built to predict the outcome of **external beam radiotherapy**.\n- **TNM** is used for **extraocular** disease.\n- **⚠️ The route that decides survival:** along the **OPTIC NERVE to the CNS**, and through the **CHOROID** into the circulation — which is why the cut end of the nerve is examined.\n- **Survival exceeds 95 %** where the disease is intraocular and treated; **extraocular spread reverses that**.\n\nSrc: the whole section is supplied and tagged, against the verified-absent lists of ophthalmology.pdf (HEALIX) ch.16 p.208 and ch.17 pp.214–217",
        "qs": []
      },
      {
        "id": "onc-7",
        "w": "must",
        "h": "Metastases, lymphoma and leukaemia — the eye as a secondary site",
        "body": "**The framing the book gives:** malignancies arising **primarily** from the eye or its adnexa are **RARE**; the eye is **more affected by METASTASES** from cancers of other organs, **or by the different forms of CANCER THERAPY** (`onc-9`).\n\n*⚠️ Chapter 19's section (11) carries **NO tutorial marker** — it is fully examinable.*\n\n### Ocular metastases from other primaries\n- **Frequency:** **5 % of cancer patients at autopsy** have ocular or orbital metastases (a United States figure).\n- **Site: MOST COMMONLY THE CHOROID**; occasionally the **OPTIC NERVE** or the **EXTRAOCULAR MUSCLES**.\n- **Primaries: BREAST and LUNG in ADULTS · NEUROBLASTOMA in CHILDREN.**\n- **⚠️ Not printed:** no presentation, no fundus appearance, no laterality and no management for ocular metastasis anywhere in the book. A choroidal metastasis is typically an **amelanotic, creamy-yellow, PLATEAU-shaped** lesion at the posterior pole with overlying subretinal fluid — **flat where a melanoma domes** *(not taken from the course material)*.\n\n### Systemic lymphoma\n- **Frequency: the eye is affected in 3 % of patients.**\n- **Orbital infiltration:** causes **PROPTOSIS** or **limitation of extraocular movement** — and it is the one orbital tumour that is **BILATERAL** (`orb-3`, ch.3).\n- **Conjunctival infiltration** is **not uncommon**.\n- **⚠️ MASQUERADE SYNDROME:** **CNS LYMPHOMA IN THE ELDERLY** presenting as a **CHRONIC, STEROID-DEPENDENT POSTERIOR UVEITIS or PANUVEITIS**.\n\n### Childhood leukaemia\n- **More than 75 %** of leukaemia patients have **ocular adnexal metastases at autopsy**.\n- **How it presents:** **INTRARETINAL or SUBCONJUNCTIVAL HAEMORRHAGES**.\n- **⚠️ Read the attribution:** the book blames **THROMBOCYTOPENIA or ANAEMIA** — the **blood picture**, **not direct infiltration**.\n\n- **⚠️ No management:** none is printed for any of the three, nor for Kaposi sarcoma.\n- *Defect note: the page prints “eye;or its adnexa”, “posierior” for posterior, “steroid-dependent,” with no space, and “leukaemia” and “leukemic” together.*\n\n*⚠️ Declared overlap, not a duplicate: merged `sys-10` carries the same 5 % and 3 % figures, the masquerade and the leukaemic haemorrhages from `L23`, plus **CAR and MAR paraneoplastic retinopathy** and **autonomic pupil dysfunction**, which chapter 19 does not print. The two accounts differ and both are kept. Masquerade uveitis: `uv-9`. Leukaemic and anaemic retinopathy as blood disease: `vsc-15`. Subconjunctival haemorrhage: `cnj-14`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.19 p.253",
        "qs": []
      },
      {
        "id": "onc-8",
        "w": "should",
        "h": "Kaposi sarcoma of the eyelids — and the haemorrhage it imitates",
        "body": "- **Where the book puts it:** under **AIDS**, ch.19 printed 252 — and ch.17 lists it under **“other less common malignancies”** by cross-reference only.\n- **What it is: MULTIPLE VASCULAR SKIN MALIGNANCIES** of the eyelids.\n- **Extent:** it **may involve the CONJUNCTIVA — palpebral or bulbar**.\n- **⚠️ The trap: it CAN BE MISDIAGNOSED AS A SUBCONJUNCTIVAL HAEMORRHAGE** — both are a flat red patch on an otherwise white, painless eye.\n- **How to separate them:** a subconjunctival haemorrhage **resolves spontaneously in 2–3 weeks** (`cnj-14`); a Kaposi lesion **persists and thickens**, and the patient has an immunodeficiency *(not taken from the course material)*.\n- **⚠️ Not printed:** no treatment for Kaposi sarcoma appears anywhere in the book, and no figure accompanies it.\n\n*The rest of the AIDS eye — AIDS retinopathy, CMV retinitis, herpes zoster ophthalmicus and HSV keratitis — is `sys-11`'s. Subconjunctival haemorrhage in full, including the one exception (a large one after trauma raises globe rupture): `cnj-14`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.19 p.252; ch.17 p.216",
        "qs": []
      },
      {
        "id": "onc-9",
        "w": "must",
        "h": "The ocular cost of cancer treatment — radiation, chemotherapy, transplant",
        "body": "**⚠️ The section's own inversion:** a third of chapter 19's malignancy section is about the **TREATMENT**, not the tumour. **No register row asked for it and nothing else in the book covers it.**\n\n### Radiation of tumours near the eye — four effects\n1. **CATARACT formation.**\n2. **RADIATION RETINOPATHY** — the book's own comparison: **“similar to DR in appearance”**.\n3. **OPTIC NEUROPATHY.**\n4. **DRY EYE.**\n\n### Chemotherapy — two agents, two lesions\n- **Cytosine arabinoside:** **SUPERFICIAL KERATITIS**.\n- **Vincristine injections:** **OPTIC NEUROPATHY**.\n\n### Bone marrow transplantation in leukaemic patients\n- **What happens:** the **new marrow recognises body tissues as FOREIGN** — **GRAFT-VERSUS-HOST DISEASE**.\n- **The eye's share: CONJUNCTIVAL MUCOSAL DAMAGE and SYMBLEPHARON** — **partial or complete ADHESION of the PALPEBRAL to the BULBAR conjunctiva**.\n- **⚠️ Why it matters:** symblepharon **obliterates the fornix**, restricts eye movement, and compounds the severe dry eye that GVHD already causes.\n\n- **⚠️ The one to carry:** radiation retinopathy **looks like diabetic retinopathy** on the fundus, so **the history makes the diagnosis**, not the picture.\n\n*⚠️ `sys-10` carries the same three modalities from `L23` and adds **retinal artery occlusion, corneal decompensation and dryness** under chemotherapy, and **delayed retinal vasculopathy** under radiation — neither list contains the other, and both are kept. Symblepharon from chemical burns and from Stevens–Johnson: `trm-2`, `cnj-15`. Dry eye: `lac-3`, `lac-4`. Cataract by cause: `cat-3`, `cat-10`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.19 p.253",
        "qs": []
      },
      {
        "id": "onc-10",
        "w": "should",
        "h": "What the book's oncology never prints — and where the module's other tumours live",
        "body": "**⚠️ Four rows pointed here:** the book pays two in full, half-pays one, and cannot pay the fourth.\n\n|Row, and its donor|Verdict|\n|---|---|\n|**Lid malignancies** — `op-lid`|✅ **paid in full** by ch.17 → `onc-1`, `onc-2`, `onc-3`|\n|**Metastases, lymphoma, leukaemia** — `op-systemic`|✅ **paid in full** by ch.19 §(11) → `onc-7`|\n|**Retinoblastoma + leukocoria** — `op-cat`, `op-white`|⚠️ **half-paid** — the book's 92 words are `onc-5`; genetics, histology, work-up and staging are **supplied and tagged** in `onc-6`|\n|**Orbital tumours as oncology** — `op-orbit-mass`|❌ **UNDELIVERABLE.** Ch.17 has **no orbital-tumour section**; ch.3's is **three bullets** with no named tumour, no imaging and no management. **`orb-16` remains the module's only account** and is not rewritten|\n\n### Open, and named so nothing is assumed covered\n- **⚠️ The RANKED leukocoria differential:** ch.16 printed 206 ranks it — **cataract (most common) · retinoblastoma (most serious) · retinopathy of prematurity · PHPV/PFV · toxocariasis · retinal detachment · Coat's disease** [sic].\n- **⚠️ The delta:** `wht-8` carries **five of the seven** with fuller definitions, and carries **neither the ranking nor the term PHPV**, which returns **zero across this module**. Recorded as a row owed to `op-white`; **`wht-8` is not rewritten from here.**\n- **⚠️ IRIS MELANOMA — undeliverable:** `uv-1` names it as a cause of heterochromia and points here, but ch.17 prints **“malignant melanoma” as one bare bullet** and ch.10's own absent list confirms **no uveal tumours and no choroidal naevus**. **Nothing is supplied.**\n- **⚠️ Lacrimal gland and sac tumours:** `orb-16` carries **pleomorphic adenoma** and **lacrimal gland carcinoma (adenoid cystic 50 %)** as orbital masses; the tumour biology is undeliverable from ch.17 for the same reason.\n\n### Absent from the book's oncology entirely\n- **Surgical:** **MOHS micrographic surgery** · margin widths · frozen section · **lid reconstruction technique** · plaque brachytherapy · proton beam · transpupillary thermotherapy · every dose, cycle and follow-up interval.\n- **Pathological:** BCC subtypes (nodular, morphoeic) · pagetoid spread · **conjunctival melanoma and primary acquired melanosis** · **ocular surface squamous neoplasia** · choroidal naevus and how it is watched · **COMS** trial data.\n\n*Where the module's tumour NAMES and REFERRAL RULES live, unchanged: `va-9`, `red-11`, `rdm-8`, `rdm-9`, `lid-11`, `orb-16`, `orb-17`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.17 pp.214–217 and ch.19 p.253, with their verified-absent lists; ch.16 p.206; ch.3 p.58",
        "qs": []
      }
    ]
  }
};
