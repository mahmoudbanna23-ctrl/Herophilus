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
  "op-appear": {
    "intro": "Appearance is not an organ, so the module scatters it. This chapter is the lens across the rest: what makes an eye look wrong, how the wrongness is measured, and which chapter owns each entity. Book chapter 3 is the core.",
    "sections": [
      {
        "id": "app-1",
        "w": "must",
        "h": "What this chapter owns — appearance as a complaint, and where each entity is written",
        "body": "**⚠️ This chapter has no source of its own.** Its deck **`L27,28) Problems of appearance`, 70 pages**, was retired on 2026-08-18 as a compilation of earlier chapters, and **no book chapter is called appearance**. Its scope is therefore **what the rest of the module leaves**.\n\n### The complaint, and the chapter that owns the disease\n\n|What the patient says|Where it is written|\n|---|---|\n|**“My eye bulges”**|`app-3`, `app-4`; disease in `orb-3`, `orb-6`, `orb-16`|\n|**“My eye has sunk”**|`app-5`; `orb-4`, `orb-14`, `trm-7`|\n|**“My eye pulsates”**|`app-6`; `orb-5`, `orb-11`|\n|**“My lid droops”**|`app-7`; `lid-5`, `lid-6`|\n|**“I have a staring look”**|`app-7`; `orb-6` (the three lid signs), `lid-7`|\n|**“My lid turns in / out”**|`app-7`; `lid-7`|\n|**“My eye turns”**|`app-8`; `sqt-1`–`sqt-12`|\n|**“My lids will not close”**|`app-7`; `lid-10`|\n|**“There is a yellow patch”**|`app-7`; `lid-9`|\n|**“There is a lump on my lid”**|`lid-3`, `onc-2`, `onc-3`|\n|**“My eye had to be removed”**|`app-9`; `orb-17`|\n\n### What is written HERE, and nowhere else in the module\n- **The appearance-DIFFERENTIAL of ch.3 p.57** — the pseudo-exophthalmoses, the terminology split, the measurement, enophthalmos and its trap.\n- **The COSMETIC management**, which **the chapter that owns appearance does not print at all** (`app-9`).\n\nSrc: ophthalmology.pdf (HEALIX) ch.3 p.57; content\\ophtho\\theory-plan.md, the user ruling of 2026-08-18 retiring `L27,28`",
        "qs": []
      },
      {
        "id": "app-2",
        "w": "must",
        "h": "Pseudo-exophthalmos — the book's first instruction is to rule it out",
        "body": "**⚠️ Printed as a note, not a footnote:** *“Pseudo-exophthalmos: (must be ruled out)”* — it comes **before** any aetiology in the chapter.\n\n### The book's three, each photographed\n- **LID RETRACTION:** the fissure widens and **sclera shows above the limbus** — the globe has not moved. *The book's own photograph is captioned “ipsilateral Lid retraction”.*\n- **CONTRALATERAL PTOSIS:** the **OTHER** lid is the abnormal one, and the normal eye looks prominent beside it.\n- **The LARGE GLOBE of HIGH MYOPIA:** a **long eye in a normal orbit**. *The book photographs the same woman with and without her thick spectacles.*\n\n### The module's fuller lists, from `L10` — not merged with the book's, held beside it\n- **Pseudoproptosis (`orb-4`):** lid retraction · high myopia · **BUPHTHALMOS** · **FACIAL ASYMMETRY** · contralateral **enophthalmos**.\n- **Pseudoenophthalmos (`orb-4`):** **ptosis** · **PHTHISIS BULBI** (a small globe) · contralateral proptosis.\n- **⚠️ Horner never proptoses** — the narrowed palpebral aperture gives **APPARENT ENOPHTHALMOS** (`orb-4`, `nrv-4`).\n\n- **⚠️ The one rule behind all of them:** **measure BOTH eyes before believing either.** Appearance is comparative, and every pseudo is a **normal globe in an abnormal setting** — a lid, a neighbour, or a refractive error.\n- **⚠️ The corollary that decides a case:** **lid retraction is the one sign no orbital MASS produces.** A mass pushes; it does not retract. **Proptosis WITH lid retraction is thyroid until proved otherwise** (`orb-4`, `orb-6`).\n\nSrc: ophthalmology.pdf (HEALIX) ch.3 p.57; L10 sl.5, 9 via `orb-4`, cited only",
        "qs": []
      },
      {
        "id": "app-3",
        "w": "must",
        "h": "Exophthalmos or proptosis — one appearance, two words, and the book splits them",
        "body": "- **Both mean:** **ANTERIOR displacement — forward protrusion — of the globe.**\n- **⚠️ The split is by AETIOLOGY:** not by degree, and not by laterality.\n  - **EXOPHTHALMOS — an ENDOCRINE cause**, i.e. **thyroid eye disease**.\n  - **PROPTOSIS — every OTHER cause** — orbital mass, orbital inflammation, and the rest.\n- **⚠️ Why this matters in a viva:** the two words are used **interchangeably almost everywhere else**, including elsewhere in this module. **Give the book's split and say it is the book's.**\n- **The mechanism behind either (`orb-3`):** the globe is **PUSHED forward** by a space-occupying lesion, or the **bony orbit is SHALLOW** — premature suture closure, e.g. **Crouzon syndrome**.\n\n### The causes as ch.3 ranks them, read as appearances\n\n|Cause|The appearance clue|\n|---|---|\n|**Graves' disease**|**COMMONEST IN ADULTS**; **unilateral OR bilateral**; the chapter defers the disease to ch.19|\n|**Orbital cellulitis**|**COMMONEST IN CHILDREN**; unilateral, red, painful|\n|**Orbital tumours**|**GRADUAL onset**, usually **unilateral** — **BILATERAL in LYMPHOMA**; ± **neurofibromatosis**|\n|**Orbital / retrobulbar haemorrhage**|**ACUTE onset**, after trauma *(or surgery — Tutorial-marked)*; an **emergency** — raised IOP risking **CRAO**|\n|**Cavernous sinus thrombosis**|**BILATERAL** orbital signs; a **complication of orbital cellulitis**|\n|**Carotid–cavernous fistula**|**PULSATING** exophthalmos (`app-6`)|\n\n- **A seventh, in a Tutorial box:** **IDIOPATHIC ORBITAL INFLAMMATORY DISEASE** — written as orbital pseudotumour in `orb-15`.\n- **⚠️ Laterality proves nothing** (`orb-3`): unilateral does **not** argue against thyroid disease.\n- *Defect note: the book prints “orbital , inflammation ,etc” — its own comma placement.*\n\n*Thyroid eye disease in full: `orb-6`, `orb-7`, `sys-7`. Orbital and preseptal cellulitis: `orb-8`, `orb-9`. Retrobulbar haemorrhage: `orb-13`. Cavernous sinus thrombosis: `orb-10`. Orbital tumours: `orb-16`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.3 pp.57–58; L10 via `orb-3`, cited only",
        "qs": []
      },
      {
        "id": "app-4",
        "w": "must",
        "h": "Measuring the appearance — Hertel, the landmark, and two different numbers",
        "body": "- **Instruments:** a **RULER**, or the **HERTEL EXOPHTHALMOMETER**.\n- **What is measured:** the distance between the **TIP OF THE CORNEA** and the **PLANE OF THE LATERAL ORBITAL MARGIN**.\n- **⚠️ NORMAL RANGE: 12 mm to 22 mm.**\n- **The deck's numbers (`orb-3`):** **over 20 mm is proptosis**, and a **difference of 2–3 mm or more between the eyes is suspicious regardless of the absolute value**.\n- *⚠️ Note, not a contradiction to fix: the book gives a normal RANGE and the deck a CUT-OFF, so 22 and 20 answer different questions. Both are printed and both are kept. The **asymmetry** rule is the deck's alone.*\n- **Without an instrument:** **inspection from ABOVE**, over the brow, and the **submental “worm's-eye” view** — both compare the two globes (`va-9`).\n\n### Direction — the second thing an appearance tells you\n- **AXIAL, straight forward:** an **INTRACONAL** lesion, or **thyroid eye disease**.\n- **ECCENTRIC (dystopic):** an **EXTRACONAL** mass — **the globe moves AWAY from it**, so the direction of displacement **names the quadrant of the lesion**.\n\n### The investigations ch.3 orders for a displaced globe\n- **For exophthalmos, three:** **1. CT / MRI of the head and/or orbits · 2. ULTRASOUND of the orbits · 3. THYROID FUNCTION TESTS.**\n- **For enophthalmos, one:** **CT / MRI of the orbits.**\n- **⚠️ Why a blood test is on the list:** the commonest cause in adults is **endocrine**, so thyroid function sits alongside imaging in a chapter about how an eye looks.\n\n*What CT and MRI are each better at, and the rest of the orbital work-up: `orb-2`. Fine-needle biopsy for suspected neoplasia: `orb-2`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.3 pp.57–58; L10 sl.6–8, 26 via `orb-3`, cited only",
        "qs": []
      },
      {
        "id": "app-5",
        "w": "must",
        "h": "Enophthalmos — three causes, and the fracture that produces both appearances",
        "body": "- **Enophthalmos:** **POSTERIOR — backward — displacement of the globe.**\n\n### The book's three causes\n1. **ORBITAL FAT ATROPHY** — **post-traumatic**, or **in old age**.\n2. **CICATRISING TUMOUR METASTASIS** — a metastasis that **scars and contracts** the orbit instead of filling it. *Classically a scirrhous breast carcinoma (not taken from the course material); the book names no primary.*\n3. **“BLOW-OUT” FRACTURE ☆☆☆** — *the book's only importance rating found anywhere in this module: three star glyphs printed after the heading.*\n\n### ⚠️ The trap this chapter exists to state\n- **⚠️ The trap:** a blow-out gives **EARLY PROPTOSIS** and **LATE ENOPHTHALMOS**.\n- **Why:** early **OEDEMA, EMPHYSEMA and HAEMATOMA** push the globe forward; when they resolve, the **volume lost into the maxillary sinus** finally shows.\n- **So the same fracture answers both questions**, and which answer is right depends on **when the patient is seen**.\n- **⚠️ `orb-4` ranks it differently:** it gives **floor fracture with orbital fat prolapse** as the **commonest** cause of enophthalmos, and adds **radiotherapy** and **sclerosing lesions**. Ch.3 lists fat atrophy first and ranks nothing. Both printed, neither corrected.\n\n### The fracture itself — pointed at, not repeated\n- **Written in full in `orb-14` and `trm-7`:** mechanism, the earliest sign, the entrapped muscle, infraorbital anaesthesia, the tear-drop sign, the CT, and the surgical indications.\n- **⚠️ What ch.3 adds to those two:** infection spreads **from the nasal sinuses into the orbit with nose blowing**, the thin floor and **lamina papyracea** being all that separate them; and the fracture may accompany **globe laceration, corneal abrasion, lens dislocation, retinal tear or traumatic optic neuropathy**.\n- *Defect note: the ch.3 blow-out table is printed with **no header row and no corner cell** — the left column carries the labels.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.3 pp.58–59; `orb-14`, `trm-7` (L25), cited only",
        "qs": []
      },
      {
        "id": "app-6",
        "w": "should",
        "h": "Pulsation and posture — the appearances that are not static",
        "body": "- **PULSATING EXOPHTHALMOS — the book's whole entry is a parenthesis:** aetiology item 6 reads *“Carotid-Cavernous fistula: (Pulsating exophthalmos)”* and nothing else.\n- **The module's differential (`orb-5`):** two items — an **ARTERIOVENOUS COMMUNICATION**, or a **DEFECT IN THE ORBITAL ROOF** — **those two only**.\n- **⚠️ What does NOT pulsate:** **Graves' disease, cavernous sinus thrombosis and orbital cellulitis** all proptose and **none of them pulsates** — no arterial connection, and an intact roof.\n- **BRUIT:** heard with the **BELL of the stethoscope**, and **abolished by gently compressing the ipsilateral carotid in the neck**.\n- **INDUCED or WORSENED proptosis:** brought on by **dependent head position, VALSALVA, or jugular compression** — all raise venous pressure. It means **orbital VARICES**, or, in an infant, a **capillary haemangioma**.\n- **⚠️ The rule:** an appearance that **changes with posture is VENOUS**; a **fixed** proptosis is a mass.\n- **⚠️ Reversible proptosis:** a positive finding, not an absence of disease — it is how a **low-flow venous malformation** announces itself.\n\n*The carotid–cavernous fistula in full — direct and indirect, and the classic triad: `orb-11`. Orbital varices as a tumour of the orbit: `orb-16`. The dynamic signs as a set: `orb-5`.*\n\nSrc: ophthalmology.pdf (HEALIX) ch.3 p.58; L10 sl.10–12, 19 via `orb-5`, cited only",
        "qs": []
      },
      {
        "id": "app-7",
        "w": "must",
        "h": "The lid as appearance — droop, stare, malposition, fold and plaque",
        "body": "*The diseases are written in `op-lid` from book ch.5. Read here only as appearances, and not repeated.*\n\n### Ptosis, and the four things that only look like it\n- **Ptosis:** the upper lid covers **MORE THAN 2 mm of the SUPERIOR LIMBUS** in the primary position — **the chapter's only number** (`lid-5`).\n- **Four PSEUDOptoses:** **ENOPHTHALMOS** (no lid support) · **DERMATOCHALASIS** (redundant skin) · **HYPOTROPIA** (the eye is down, the lid follows) · **CONTRALATERAL LID RETRACTION**.\n- **⚠️ Two of the four belong to the OTHER eye:** hypotropia and contralateral retraction. **Cover the fellow eye before believing a ptosis.**\n- **⚠️ The operation follows the levator:** not the look — **GOOD function → LEVATOR RESECTION**, **POOR → FRONTALIS SLING** (`lid-6`).\n\n### Lid retraction — the stare\n- **The normal:** **no sclera visible ABOVE the limbus** with the lid at rest. Retraction makes it visible — **“SCLERAL SHOW”**.\n- **Commonest cause: THYROID EYE DISEASE**, and its three named signs — **DALRYMPLE · KOCHER · VON GRAEFE** — are in `orb-6`.\n- **The consequence:** the eye becomes **DRY from CORNEAL EXPOSURE** (`lid-7`, `cor-17`).\n\n### Malposition, fold and plaque\n- **Entropion and ectropion:** the appearance **is** the diagnosis; the two four-type classifications, and the rule that **only the CICATRICIAL type takes the upper lid**, are in `lid-7`.\n- **EPICANTHUS:** bilateral vertical skin folds hiding the medial canthal tendon → a **FALSE CONVERGENT SQUINT, PSEUDOESOTROPIA**; **the corneal reflexes stay CENTRAL** (`lid-9`).\n- **XANTHELASMA:** soft **yellowish-white cholesterol plaques**, **MEDIAL**, **symmetric**, commoner on the **UPPER lid**, **4th–5th decades** — and **many patients are NORMOLIPIDAEMIC** (`lid-9`).\n- **LAGOPHTHALMOS:** the lids **fail to close** (`lid-10`) — an appearance sign whose consequence is corneal, not cosmetic.\n\nSrc: ophthalmology.pdf (HEALIX) ch.5 pp.75–81, written in full in `op-lid`; cited here as appearance",
        "qs": []
      },
      {
        "id": "app-8",
        "w": "must",
        "h": "The squint as appearance — pseudostrabismus, and disfigurement as an indication",
        "body": "### Pseudostrabismus — the eyes that only look deviated\n- **Pseudostrabismus:** the eyes **FALSELY APPEAR deviated** while the **visual axes are properly ALIGNED**.\n- **The causes and their pairing:** **EPICANTHUS → PSEUDO-ESOTROPIA · HYPERTELORISM → PSEUDO-EXOTROPIA**; also a **WIDE NASAL BRIDGE**.\n- **⚠️ Figure-only:** the p.197 prose lists both causes and **never says which pseudo-deviation each produces** — the pairing is printed only in the p.202 panel (`sqt-10`).\n- **⚠️ The test that settles it:** the **CORNEAL LIGHT REFLEX stays CENTRAL and SYMMETRICAL** in pseudostrabismus, and is **DISPLACED** in a true deviation (`sqt-11`).\n- **What an untreated real squint costs:** **AMBLYOPIA before the age of 8–10 years**; **DIPLOPIA and CONFUSION** in older age groups (`sqt-1`).\n- *Defect note: printed 202 spells it “pseudostabismus” [sic], missing an r — grep both.*\n\n### ⚠️ Appearance as a surgical INDICATION — the book says it once\n- **Ch.15 printed 201, verbatim:** *“the impact of disfiguring strabismus on a patient's self-image is a valid indication for surgery”* — and it says so **even when binocular vision may not be achievable**.\n- **⚠️ Why that sentence matters here:** it is **the only place in the book where appearance ALONE justifies an operation**. It is the argument this whole chapter rests on, and it is **not** tutorial-marked — though the surgical-indication box printed immediately beside it **is**.\n- **The rest of squint treatment:** **GLASSES** first, **PATCHING** for amblyopia *(Tutorial-marked)*, **surgery** for constant deviation not corrected by glasses *(Tutorial-marked)* — all in `sqt-8`.\n- **⚠️ Surgery is named and never described:** **no muscle, no millimetres of recession or resection, and no named procedure** appears anywhere in ch.15.\n\nSrc: ophthalmology.pdf (HEALIX) ch.15 pp.197, 201–202; written in full in `op-squint`",
        "qs": []
      },
      {
        "id": "app-9",
        "w": "must",
        "h": "Cosmesis — the operations, and the gap in the chapter that owns appearance",
        "body": "**⚠️ The gap, stated plainly:** the chapter that owns appearance prints **no management of it**. Ch.3 has **no decompression, no oculoplastic or orbital surgery** and **no cosmetic management of proptosis** in six pages.\n\n### Sourced elsewhere in the module — use these, do not re-derive them\n\n|Appearance problem|Operation|Sourced in|\n|---|---|---|\n|**Proptosis, thyroid**|**ORBITAL WALL DECOMPRESSION** — for **compressive optic neuropathy** or **residual proptosis**. **⚠️ Strabismus and lid surgery come LATER**, after the disease burns out|`orb-7` (L10)|\n|**Ptosis**|**LEVATOR RESECTION** (good levator function) · **FRONTALIS SLING** (poor, and for **Marcus Gunn jaw-winking**)|`lid-6`|\n|**Lagophthalmos**|**LATERAL TARSORRHAPHY · MEDIAL CANTHOPLASTY · GOLD WEIGHT implantation**; overnight taping first|`lid-10`|\n|**Xanthelasma**|**surgical EXCISION · CO2 LASER** *(Tutorial-marked)*; **statins — effect questionable**|`lid-9`|\n|**Epicanthus**|**surgical, for cosmesis** — the book prints the **indication and no technique**|`lid-9`|\n|**Entropion / ectropion**|**surgical**, with lubricants meanwhile — **neither section names an operation**|`lid-7`|\n|**Squint**|**surgical correction**; **disfigurement is a valid indication** (`app-8`)|`sqt-8`|\n|**The lost eye**|**EVISCERATION · ENUCLEATION · EXENTERATION** — three different amounts removed|`orb-17`|\n\n### Supplied, because no source this project has read prints them\n- **The ocular PROSTHESIS:** an orbital **IMPLANT** restores the lost **volume**, and a **painted SHELL** worn over it restores the **appearance**; fitted weeks after the socket heals *(not taken from the course material)*.\n- **BLEPHAROPLASTY** for **DERMATOCHALASIS** — the redundant upper-lid skin that is one of the four pseudoptoses. **⚠️ Ch.5 names blepharoplasty exactly once, and only as a CAUSE of facial nerve damage** *(not taken from the course material)*.\n- **Lid RECONSTRUCTION after tumour excision:** ch.17 requires it — *“excision with a safety margin followed by reconstruction of the resultant defect”* — and **describes no technique**. The **anterior and posterior lamellae** (`lid-1`) are rebuilt separately, one of them with a graft *(the principle is not taken from the course material)*.\n- **The MARGINAL lid laceration repair:** already a procedure in `trm-9` — margin suture first, **partial-thickness lamellar sutures in the tarsus**, then the **margin sutures tied UNDER the skin sutures**.\n- **⚠️ Why the order matters:** a margin closed out of alignment leaves a **NOTCH** and a **misdirected lash line** — a cosmetic defect and a **trichiasis** at once *(not taken from the course material)*.\n- **BOTULINUM TOXIN** for **blepharospasm** and **hemifacial spasm** — on ch.5's verified-absent list and returning **zero across the module** *(not taken from the course material)*.\n\nSrc: ophthalmology.pdf (HEALIX) ch.3's verified-absent list, printed 56–61; ch.17 p.215 (reconstruction, named only); `orb-7`, `orb-17`, `lid-6`, `lid-7`, `lid-9`, `lid-10`, `trm-9`, `sqt-8` as cited. The prosthesis, blepharoplasty, reconstruction principle and botulinum toxin are supplied and tagged",
        "qs": []
      },
      {
        "id": "app-10",
        "w": "should",
        "h": "What this chapter was owed, what it delivers, and what nothing can deliver",
        "body": "**⚠️ Two rows named this chapter:** one is closed by its own donor, and one is delivered here.\n\n|Row|Verdict|\n|---|---|\n|`op-trauma` (L25 sl.41–42) — **MARGINAL eyelid laceration repair as a PROCEDURE**|✅ **CLOSED — the donor already wrote it.** The row's second clause says `op-trauma` “keeps only the three levels of lid laceration”. **It does not:** merged `trm-9` writes the **full three-stage marginal repair**. `app-9` cross-references it and adds only the cosmetic consequence, tagged. **Nothing is owed.**|\n|`op-lid` (ch.5 pp.79–80) — **EPICANTHUS CORRECTION and XANTHELASMA REMOVAL as cosmetic oculoplastic procedures**|✅ **DELIVERED in `app-9`**, at the level the sources allow: the book prints the **indications** — *“treatment for cosmetic reasons is surgical”*, surgical excision, CO2 laser — and **no technique at all**. **No technique was invented.**|\n\n### What this chapter cannot deliver, named so nothing is assumed covered\n- **⚠️ Orbital DECOMPRESSION:** `orb-7`'s single line is everything the module has — **no approach, no wall, no threshold for operating, no complication** is printed in ch.3 or anywhere else read.\n- **⚠️ Every cosmetic technique:** **no incision, no flap, no graft, no suture material and no timing** appears in any ophthalmology source this project has read, for any of the operations in `app-9`.\n- **Also absent module-wide:** **blepharospasm and botulinum toxin** · **blepharophimosis, telecanthus, ankyloblepharon, lid coloboma, distichiasis** · **facial asymmetry and craniofacial syndromes beyond the name Crouzon** · **socket contracture and the anophthalmic socket beyond the three operations**.\n- **⚠️ The retired deck:** **`L27,28) Problems of appearance`, 70 pages**, was ruled a compilation on 2026-08-18 and **was not read**. It is the **only unread candidate** if a question ever turns on a technique.\n\n### Opened here\n- **⚠️ Nothing is deferred out of this chapter.** Every entity it touches is already written elsewhere in the module and is **cross-referenced, never promised**.\n\nSrc: progress\\briefs\\START-HERE.md §14.5; content\\ophtho\\theory-plan.md (the two user rulings of 2026-08-18); the verified-absent lists of ophthalmology.pdf (HEALIX) ch.3 and ch.5; `trm-9` read from app\\data\\theory.ophtho.js",
        "qs": []
      }
    ]
  }
};
