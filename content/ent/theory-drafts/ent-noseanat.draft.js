/* ent-noseanat — "Anatomy and physiology of the nose and paranasal sinuses",
   ENT. Written from scratch 2026-08-14 under START-HERE.md §14 (slide-density
   revision notes). No v1 existed. 40 linked questions.

   ⚠️⚠️ THIS CHAPTER IS OWED THREE REGISTER ROWS FROM THREE CHAPTERS, AND TWO
   OF THEM ARE THE SAME LINE RANGE OF THE SAME DECK, DEFERRED INDEPENDENTLY.
   All three are discharged and itemised at the end of this header, with the
   L23 overlap stated as DELIVERED ONCE rather than written twice.

   ────────────────────────────────────────────────────────────────────────
   BUDGET — §14.1 as revised 2026-08-14,
   budget = max( summed lecture words , 25 x linked question count ),
   floor 600, cap 3,000. BOTH TERMS MEASURED FROM DISK BEFORE WRITING.

     TERM 1 — the lecture words this chapter RESTS ON, BY LINE RANGE
     (`sed -n 'a,b p' | wc -w`, the same tokeniser every precedent used):

       L23) Anatomy of the Nose        290 w of the file’s 647
         · lines 3–86 — the WHOLE anatomy and physiology half: the ILOs, the
           nose as a midline structure from skull base to hard palate divided
           into two cavities running nares → choana, the roof (cribriform
           plate, frontal bone anteriorly), the floor (palatine process of
           maxilla + horizontal process of palatine), the lateral wall with
           its three turbinates and three meati and the FOUR-LINE DRAINAGE
           MAP, the septum (perpendicular plate + vomer + septal cartilage),
           Kiesselbach’s and Woodruff’s plexuses, the interior of the nose
           (vestibule / olfactory area / respiratory area with their
           linings), and the four functions.
         ⚠️ NOT CLAIMED — lines 1–2 (the SOURCE line) and lines 87–177
           (346 w), the choanal-atresia + CNPAS block, which is
           `ent-nasalobs`’s and is counted there. That chapter’s header
           states the split from its own side in the same words.
         ⚠️ THE PLEXUS SLIDE (lines 43–54) IS COUNTED HERE BUT WRITTEN
           THERE. `ent-epistaxis` explicitly declined to count it —
           "a strictly shorter restatement of L25.1’s own two slides" — and
           wrote Little’s area and Woodruff’s plexus in full in `epi-2`. It
           is inside my claimed range and I am not subdividing a 12-line
           range to shave 40 words; this chapter carries the septal ARTERIAL
           list and points at `ent-epistaxis` for the plexus. Declared, not
           hidden.

       + L24) diseases of the nasal septum   31 w of the file’s 527
         · lines 49–60 — the ARTERIAL SUPPLY slide only: "internal and
           external carotid system", sphenopalatine → posteroinferior
           septum, greater palatine → anteroinferior septum, superior labial
           from the facial, anterior and posterior ethmoidal.
         ⚠️ THIS IS THE §14.1(b) DOUBLE-BILL CASE, AND IT IS DECLARED.
           `ent-septum` counted the WHOLE 527 w of L24 — stating in its own
           header that the arterial slide "is L24’s own stated ILO and is
           counted here" — and then deferred the vascular anatomy onward to
           this chapter. Deferring and counting are opposites, so those 31
           words are billed twice across the two chapters. I follow the
           `ent-otalgia` → `ent-otorrhea` precedent exactly: the RECEIVING
           chapter counts what it carries, the sending chapter is NOT
           rewritten and its content is not wrong. The effect on either
           budget is nil — TERM 2 governed there (1,625) and governs here.

       = TERM 1  321 words

     TERM 2 — 25 x 40 linked questions = 1,000 words

     max(321 · 1,000) = 1,000. ⚠️ TERM 2 GOVERNS, BY 679 WORDS — the widest
     margin of any ENT chapter written so far. Floor 600 does not bind; cap
     3,000 not reached. Operative ceiling ~2,400 body words (§14.1,
     pages ≈ words ÷ 240).

   ────────────────────────────────────────────────────────────────────────
   DIAGRAM-DECK TEST (§14.1) — RUN, AND IT DOES NOT BITE ON THE METRIC:

       L23 lines 3–86   290 w / 64 non-blank lines = 4.53 w/line
       L24 lines 49–60   31 w / 12 non-blank lines = 2.58 w/line
       combined         321 w / 76 non-blank lines = 4.22 w/line
       (L22, the deck that forced the second term into existence, runs 1.2
        w/line. The threshold is ~2.)

   So no diagram-deck correction is claimed — but the second term governs
   anyway, by more than triple, and the REASON is the same one the ear
   chapter met. L23’s anatomy half is a run of LABELLED PLATES whose
   extracted text is the caption and nothing else: its entire teaching on the
   lateral wall is the heading "The Lateral wall (3 turbinates & 3 meati)"
   plus four one-line drainage arrows; its roof/floor slide is five noun
   phrases scattered around a figure; and L24’s arterial slide at 2.58 w/line
   is a labelled plate by any reading. 290 words cannot carry a nose-anatomy
   examination and the bank asks 40 questions off it.

   ────────────────────────────────────────────────────────────────────────
   ⚠️ ENTITY + FRAMEWORK FLOOR, COUNTED BEFORE WRITING (§14.1’s `ent-dysph`
   rule with `ent-neck`’s correction — the framework slides costed ONE BY
   ONE, never lumped, because `ent-neck` under-predicted by 600 by lumping
   them and `ent-pharanat` then landed accurately by itemising). ⚠️ FOR AN
   ANATOMY CHAPTER ALMOST EVERYTHING IS A FRAMEWORK SLIDE — there are only
   seven true entities here and they are the cheap half:

     SEVEN ENTITIES at ~90 w — maxillary sinus · frontal sinus · ethmoid
     sinuses · sphenoid sinus · nasal vestibule · olfactory area ·
     respiratory area.  7 x 90 = 630.

     TWENTY-FOUR FRAMEWORK SLIDES, costed individually, none an entity and
     none compressible because a list of names has no fat in it:
       the nose in outline (nares → choana, two cavities) 30 · the roof and
       its four bones 70 · the floor 30 · the septum’s three parts 70 · the
       external bony and cartilaginous vaults + surface landmarks 100 · the
       choana’s four boundaries 50 · three turbinates and three meati 50 ·
       the drainage map 60 · anterior vs posterior groups 40 · the OMC’s six
       components and two boundaries 90 · the four-sinus development /
       drainage / relations grid 140 · ECA terminals + the IMAX three-part
       division and its branch table 130 · the septal arterial list 50 · the
       venous routes and the dangerous area 80 · the lymphatic map 50 · the
       nerve-supply grid 80 · the olfactory pathway 60 · the three epithelial
       linings 50 · the four functions 60 · air conditioning 60 ·
       mucociliary clearance 70 · the nasal cycle 40 · the sneeze reflex arc
       50 · the six nasal defences 50 = 1,560.

     PREDICTED FLOOR ~2,190 WORDS against a 1,000 budget — +119 % BEFORE A
     WORD IS WRITTEN, and ~9.1 pages, which is UNDER the ~10-page ceiling.
     SAID HERE IN ADVANCE, AS REQUIRED. The plan stated up front: write to
     ~2,200–2,300, hold under the 2,400 ceiling, and take nothing out of a
     protected fact. The formula’s 1,000 is unreachable without deleting the
     sinus grid, the arterial table and the whole of physiology — which
     would leave roughly 18 of the 40 questions unanswerable. Peers for
     calibration, all merged: `ent-pharanat` 2,456 · `ent-nasalobs` 2,425 ·
     `ent-sinusitis` 2,397 · `ent-earanat` 1,843.

   ⚠️ MEASURED OUTCOME, taken with §14’s own validator on the file AS IT
   STANDS ON DISK, AND RE-TAKEN AFTER THE FINAL EDIT (§14.1’s `ent-rhin` and
   `ent-vocal` warnings — a header is a claim, the file is the fact, and an
   internally consistent breakdown proves only that its numbers came from one
   state of the file, never that it was the last state):

       body 2,400 words · intro 41 words · 12 sections · 40/40 linked
       pages ≈ 2,400 ÷ 240 ≈ 10.0

   ⚠️ THE FIRST DRAFT MEASURED 3,214 AND THE PREDICTION WAS WRONG BY +47 %.
   The entity + framework floor above under-predicted for a reason worth
   recording: **this format’s tables cost more WORDS per fact than the
   estimate assumes** once every cell is bolded and qualified — the four-sinus
   grid alone came in at 160 against a predicted 140, and the arterial section
   at 380 against 180. Four compression passes took it 3,214 → 2,752 → 2,645 →
   2,562 → 2,400, and every one of them removed CONNECTIVE TEXT, VERBOSE CELL
   PHRASING or a fact belonging to a neighbour, never a protected fact:
     · the polyp-origin percentage table (`ent-nasalmass`’s, `nmass-5`, and no
       question here tests it) — reduced to one clause with a pointer;
     · Pott’s puffy tumour and the frontal sinus’s intracranial route
       (`ent-sinuscomp`’s by the register) — removed;
     · the anterior/posterior sinus PAIN row (`ent-sinusitis`’s, tagged and
       untested here) — removed;
     · the inferior meatus’s procedural uses, the nose’s share of airway
       resistance, and the maxillary artery’s deep auricular and anterior
       tympanic branches — untested detail, removed;
     · every `Src` line shortened, the two autonomic nerve rows merged, and
       roughly 120 words of connective phrasing across all twelve sections.

   Against the computed budget of 1,000 that is +139.9 %; against the PREDICTED
   floor of 2,190 it is +9.6 %; against the operative ceiling of 2,400 it is
   EXACTLY ON IT, which is where it was deliberately landed. The bill is
   stated rather than hidden: the budget’s first term is 321 words of slide
   captions, and its second term assumes question clustering that a
   24-framework-slide anatomy chapter does not have. **The floor was not
   breached to reach the ceiling** — what the next 200 words of cutting would
   cost is itemised at the end of the omission note.

   ────────────────────────────────────────────────────────────────────────
   ⚠️ DEFERRALS COLLECTED (§14.5) — all three rows owed TO this chapter,
   each verified against the source draft before writing, not assumed:

   ROW 1 — `ent-nasalobs` (L23 lines 1–86): "the nose’s anatomy and
     physiology: the lateral wall, the three turbinates and three meati, the
     septum, the blood supply, the olfactory area, and the respiratory /
     olfactory / phonatory / reflex functions", 297 w. READ AT SOURCE
     (`ent-nasalobs.draft.js` lines 38–52 and 271–274). ✅ DELIVERED —
     lateral wall and meati `nan-4`, septum `nan-3`, blood supply `nan-8`,
     olfactory area and the three linings `nan-7` and `nan-10`, the four
     functions `nan-11`.

   ROW 2 — `ent-sinusitis` (L23 lines 1–86 AGAIN, registered second and
     independently, PLUS "the OSTEOMEATAL COMPLEX as a named anatomical unit
     — agger nasi, ethmoid bulla, uncinate process, hiatus semilunaris,
     infundibulum, lamina papyracea"). READ AT SOURCE
     (`ent-sinusitis.draft.js` lines 77–79 and 215–231).
     ✅ THE DUPLICATE HALF IS MERGED, NOT WRITTEN TWICE: rows 1 and 2 name
     the SAME 86 lines, so the anatomy is delivered ONCE in `nan-3`/`nan-4`/
     `nan-7`/`nan-8`/`nan-10`/`nan-11` and discharges both rows together —
     the same call `ent-nasalobs` made when three chapters deferred L31/L24’s
     obstruction work-up at it.
     ✅ THE NEW HALF — the OMC as a named unit — is `nan-5` in full, with its
     six components, both boundaries, the bulla-vs-agger contrast, the
     posterior ethmoid’s exclusion and the polyp-origin percentages.
     ⚠️ OVERLAP DECLARED: `ent-sinusitis` kept one bullet naming the four
     core components as the SURGICAL rationale (its `sin-2`, "surgery clears
     the osteomeatal complex rather than the sinus"). That is the sinus
     disease’s argument; `nan-5` is the anatomy, and four of this chapter’s
     questions key it directly (the component list, the lateral boundary, the
     hiatus, the largest anterior cell). Both are correct and neither is
     removable.

   ROW 3 — `ent-septum` (L24): "the septum’s ARTERIAL SUPPLY as vascular
     anatomy — the internal-vs-external carotid territories and the
     anastomoses. Kept there only as L24’s four named vessels." READ AT
     SOURCE (`ent-septum.draft.js`, its cross-chapter deferral list).
     ✅ DELIVERED — `nan-8` carries both carotid systems as a territory
     table, the external carotid’s two terminal branches, the maxillary
     artery’s three-part division and its branches by part, and the septal
     list itself. ⚠️ The ANASTOMOSIS the row names — Little’s area — is
     `ent-epistaxis`’s (`epi-2`, twelve linked questions), so `nan-8` names
     it, states that it is an internal-to-external carotid anastomosis, and
     points there rather than reprinting the four-artery table. NONE of this
     chapter’s 40 questions tests Little’s area; all five vascular questions
     here are about the carotid systems and the maxillary artery’s parts.

   ────────────────────────────────────────────────────────────────────────
   ⚠️ THE PROJECT REVIEW’S OMC CLAIM IS HALF WRONG — GREPPED, NOT ASSUMED.
   The end-of-ENT review lists the osteomeatal complex’s components as absent
   from the nose decks. Re-run here over all 34 cached files:

       "ostiomeatal complex"  → L29) Rhinitis 1, line 443     PRINTED
       "uncinate"             → L26 line 303 · L29 line 445   PRINTED
       "bulla"                → L26 lines 304, 306, 307 · L29 line 444
       "hiatus"               → L26 line 304                  PRINTED
       "infundibul"           → L26 line 303                  PRINTED
       "frontal recess"       → L26 line 305                  PRINTED
       "osteomeatal" (that spelling) → 0 hits; the decks spell it OSTIO-
       "agger"                → 0 HITS CORPUS-WIDE
       "lamina papyracea" / "papyracea" → 0 HITS CORPUS-WIDE

   So five of the seven are sourced — as polyp-origin sites in L26 and as a
   CT finding in atrophic rhinitis in L29 — and are written as sourced.
   ONLY AGGER NASI AND LAMINA PAPYRACEA carry the tag. The review was right
   about exactly two of seven.

   ⚠️ THE REVIEW’S OTHER THREE ITEMS FOR THIS CHAPTER, ALSO GREPPED BEFORE
   BEING DECLARED (§4a: read the slide before declaring a gap — eleven such
   supposed gaps have turned out to be printed):
     · NASAL LYMPHATIC DRAINAGE — "lymph"/"lymphatic" return ZERO hits in
       any of L23–L32; the only ENT hits are laryngeal, pharyngeal and
       tonsillar. ⚠️ GENUINELY ABSENT. Tagged in `nan-9`.
     · THE VENOUS ROUTE TO THE CAVERNOUS SINUS — "valveless", "pterygoid
       plexus", "ophthalmic vein" and "dangerous area" all return ZERO
       corpus-wide. "cavernous sinus" appears three times and none is the
       route: L30 line 163 (a complication of acute invasive fungal
       sinusitis), L32 line 136 (Tolosa-Hunt) and L19.2 line 35 (carotico-
       cavernous fistula as a tinnitus cause). ⚠️ THE ROUTE IS GENUINELY
       ABSENT; the COMPLICATION is printed. Both stated in `nan-9`.
     · THE SNEEZE REFLEX ARC — ⚠️ PARTLY PRINTED, so the review is again
       half right. L23 line 75 names "Reflex function" as a function of the
       nose and L29 line 30 lists "Reflexes (cough, sneeze)" as the third of
       six nasal defence mechanisms. Neither prints the AFFERENT/EFFERENT
       pathway. The reflex is written as sourced, the ARC as tagged, in
       `nan-12`.

   FLOOR KEPT BOTH WAYS (§14.2) — every fact, list, lining, number and
   drainage site L23 lines 3–86 and L24 lines 49–60 state, plus every one of
   the 40 linked questions’ KEY and DISCRIMINATOR as a line or a table cell.
   All 40 ids linked, none dropped.

   OMISSION NOTE — cut on purpose, each a decision on the record:
     1. Distractor-by-distractor rejection (§14.2). It lives in every
        question’s own `explanation`, one tap away through the qs links.
        Kept only where the teaching point IS the discrimination: the two
        vaults (`nan-1`), the meatus drainage grid and the anterior/posterior
        groups (`nan-4`), the OMC component table (`nan-5`), the four-sinus
        grid (`nan-6`), the three linings (`nan-7`), the carotid territory
        and IMAX part tables (`nan-8`), the venous and lymphatic maps
        (`nan-9`) and the nerve grid (`nan-10`).
     2. Question ids in body text, teaching voice, bank meta-commentary
        beyond the three one-line defect notes §4 requires, per-fact citation
        clauses (one Src line per section), a closing summary section.
     3. L23’s CHOANAL ATRESIA and CNPAS block (lines 87–177) — obligate
        nasal breathing, the four aetiological theories, CHARGE, the
        management ladder, the three surgical approaches, the <11 mm CT
        criterion. It is `ent-nasalobs`’s, is already merged there, and no
        question filed here tests it. The choana itself is written here as a
        BOUNDARY, because one question keys its four walls.
     4. Little’s area, Kiesselbach’s plexus and Woodruff’s plexus as
        subjects — `ent-epistaxis`’s, already merged, twelve questions linked
        there and none here. Named in `nan-8` as the septal anastomosis and
        pointed at, not reprinted.
     5. Sinus surgery — FESS technique, antral puncture, the Caldwell-Luc.
        `ent-sinusitis`’s. Only the one-line ANATOMICAL rationale is kept
        (clear the channel, the sinus drains itself), because it is what the
        OMC and mucociliary questions are for.
     6. Nasal resistance measurement (rhinomanometry, acoustic rhinometry,
        NOSE, SNOT-22) — `ent-nasalobs`’s, verified written there in
        `nobs-3` before omitting.
     7. Embryology of the nose and sinuses beyond the age at which each
        sinus appears, and the comparative-anatomy asides. No question
        reaches them and no cached deck states them.

   ⚠️ WHAT THE NEXT 200 WORDS OF CUTTING WOULD COST, as §14.1 requires when a
   chapter is held at its ceiling. There is nothing unprotected left. Taking
   another 200 means deleting one of: the four-sinus development/drainage
   grid (~160 w — six questions), the maxillary artery’s three-part branch
   table (~120 w — three questions and the only place the "1st = bone, 2nd =
   muscle, 3rd = mucosa" rule can live), the venous + lymphatic maps (~190 w
   — two questions and the whole dangerous-area vignette), or the
   mucociliary/air-conditioning block (~140 w — three questions). Each is a
   whole question set, not a paragraph. **Held at 2,400 rather than cut.**

   CROSS-CHAPTER DEFERRALS OUT OF THIS CHAPTER (§14.5) — named, so each is a
   promise not a deletion. Each was checked against all 40 questions filed
   here: NONE tests it. ⚠️ Each range deferred is SUBTRACTED from TERM 1
   above rather than counted (§14.1(b)) — in practice nothing new leaves
   this chapter, because it claims only the 86 lines that were handed to it:
     · NOTHING is deferred out of L23 lines 3–86. The whole claimed range is
       written here. Stated explicitly so no future chapter looks for a row
       that does not exist.
     · The four-artery Kiesselbach table and Woodruff’s plexus (L23 lines
       43–54, inside my counted range) are NOT re-deferred — they are
       ALREADY WRITTEN in the merged `ent-epistaxis` (`epi-2`), verified by
       reading that section before omitting, not assumed. No row is opened.

   DEFECT NOTES (§4b — a printed key is recorded, never disputed), each kept
   to one line in the body:
     · The sinus opening "between the superior turbinate and the septum" is
       strictly the SPHENOETHMOIDAL RECESS, hence the sphenoid; the sphenoid
       is not among the options offered and the posterior ethmoid is keyed.
       Noted in `nan-4`, key as printed.
     · One "the posterior group of sinuses" stem takes a single answer when
       the group holds TWO, and keys the sphenoid while offering the
       posterior ethmoid beside it. Noted in `nan-4`, key as printed.
     · One "bony septum, all except" offers BOTH the nasal bone and the
       cribriform plate — two correct exceptions — and keys the cribriform
       plate. Noted in `nan-3`, key as printed.
     · The sneeze-arc key is printed as "Afferent: Trigeminal, Efferent:
       Vagus" WITHOUT the V1 qualifier that alone separates it from the V2
       option beside it. Noted in `nan-12`, key as printed.
*/

var THEORY_ENT_NOSEANAT = {
  'ent-noseanat': {

    intro: 'Pure list recall, almost always as an “except”: which sinus into which meatus, which bone in the septum, which structure in the complex, which artery from which carotid. The drainage map, the roof and the osteomeatal complex carry half the chapter.',

    sections: [

{
  id: 'nan-1', w: 'must',
  h: 'The nose in outline, and the two vaults of the external nose',
  body: [
    '**A MIDLINE STRUCTURE FROM THE SKULL BASE TO THE HARD PALATE**, **divided by the septum into two nearly symmetrical cavities**, **running from the ANTERIOR NARES to the CHOANA (nasopharynx)**.',
    '',
    '||**BONY VAULT** — upper third|**CARTILAGINOUS VAULT** — lower two thirds|',
    '|---|---|---|',
    '|Made of|**NASAL BONES · frontal process of the MAXILLA · nasal part of the FRONTAL bone** — three bones, no more|**UPPER LATERAL · LOWER LATERAL (ALAR) · SEPTAL (quadrilateral) cartilages**|',
    '|The “except”|ethmoid, palatine, vomer and lacrimal are **INTERNAL** — roof, floor, septum|the **VOMER is bone and septal**, never external skeleton|',
    '',
    '- **SEPTAL (quadrilateral) cartilage, 3–4 mm thick**: partitions the two cavities **and supports the TIP and DORSUM** — lose it and the dorsum drops (**saddle nose**).',
    '- **NASION = the ROOT OF THE NOSE, the FRONTONASAL SUTURE — junction of the frontal and nasal bones.** Separates the bony vault above from the cartilaginous below. Not the tip, not the septum. Other landmarks: **rhinion** (the dorsum’s bony–cartilaginous junction), tip, columella, ala.',
    '',
    'Src: L23 lines 12–19; septal cartilage L24 lines 26–31. **The vault lists and all surface landmarks not in course material**'
  ].join('\n'),
  qs: ['entqb-nose1-10','entqb-nose1-13','entqb-nose1-32']
},

{
  id: 'nan-2', w: 'must',
  h: 'Roof, floor and choana',
  body: [
    '|Wall|Formed by|',
    '|---|---|',
    '|**ROOF**|front to back: **NASAL BONE → FRONTAL BONE → CRIBRIFORM PLATE OF THE ETHMOID → body of the SPHENOID**|',
    '|**FLOOR**|**PALATINE PROCESS OF THE MAXILLA** (front) **+ HORIZONTAL PLATE OF THE PALATINE BONE** (back)|',
    '|**MEDIAL** / **LATERAL**|the **SEPTUM** / **3 turbinates and 3 meati** — below|',
    '',
    '- **⚠️ THE PERPENDICULAR PLATE OF THE ETHMOID IS SEPTAL; THE CRIBRIFORM PLATE IS THE ROOF** — a **horizontal** plate to the roof, a **vertical** plate to the septum. The most reprinted “except” here, asked from both ends.',
    '- **The CRIBRIFORM PLATE is also the FLOOR OF THE ANTERIOR CRANIAL FOSSA**, the thinnest part of the skull base: **ethmoid damage → CSF RHINORRHOEA**, nasal sepsis → **FRONTAL LOBE**, most at risk in sinus surgery.',
    '- **CHOANA** — the posterior nasal aperture, the nose’s posterior limit: **VOMER medially · MEDIAL PTERYGOID PLATE laterally · SPHENOID above · horizontal plate of the PALATINE bone below.** Where **choanal atresia** forms (the lesion in `ent-nasalobs`).',
    '',
    'Src: L23 lines 12–25. **The nasal-bone and sphenoid roof contributions, the choanal boundaries and the CSF consequences not in course material**'
  ].join('\n'),
  qs: ['entqb-nose1-1','entqb-nose1-2','entqb-nose1-3','entqb-nose1-14']
},

{
  id: 'nan-3', w: 'must',
  h: 'The septum — the medial wall',
  body: [
    '**THE SEPTUM HAS THREE PARTS.**',
    '',
    '|Part|Structure|',
    '|---|---|',
    '|**MEMBRANOUS**|the mobile strip between the columella and the caudal cartilage|',
    '|**CARTILAGINOUS**|**QUADRILATERAL (SEPTAL) CARTILAGE**, 3–4 mm thick|',
    '|**BONY**|**PERPENDICULAR PLATE OF THE ETHMOID** (above, in front) **+ VOMER** (below, behind)|',
    '',
    '- **Continuities.** The perpendicular plate is **continuous above with the CRIBRIFORM PLATE and CRISTA GALLI** — continuous with, not part of. The vomer articulates **inferiorly with the nasal crest of maxillae and palatine bones**, **anteriorly with the perpendicular plate and septal cartilage**; its **posterior border is the free edge** at the choana.',
    '- **NOT SEPTAL, both offered as distractors: the CRIBRIFORM PLATE (roof) and the NASAL BONE (external skeleton).**',
    '- Defect: one “bony septum, all except” offers **both** the nasal bone and the cribriform plate — two correct exceptions — and keys only the cribriform plate; noted, key as printed.',
    '',
    'Src: L23 lines 38–42; L24 lines 22–48. Arterial supply below; Little’s area and Woodruff’s plexus in `ent-epistaxis`; deviated septum, haematoma and perforation in `ent-septum`'
  ].join('\n'),
  qs: ['entep-nose-22','entqb-nose1-11']
},

{
  id: 'nan-4', w: 'must',
  h: 'The lateral wall — three turbinates, three meati, and the drainage map',
  body: [
    '**3 TURBINATES, 3 MEATI.** Each meatus is the space **under and lateral to** its own turbinate.',
    '',
    '|Opening|What drains into it|',
    '|---|---|',
    '|**INFERIOR meatus**|**NASOLACRIMAL DUCT — AND NOTHING ELSE. NO sinus drains here.** Also the **LARGEST** meatus *(size not in course material)*|',
    '|**MIDDLE meatus**|**FRONTAL · MAXILLARY · ANTERIOR ETHMOID** (plus the **MIDDLE ETHMOID** cells where a printing lists them apart) — the **osteomeatal complex**|',
    '|**SUPERIOR meatus**|**POSTERIOR ETHMOID**|',
    '|**SPHENOETHMOIDAL RECESS**|**SPHENOID.** It lies **above the superior turbinate, between it and the septum** — a recess, not a fourth meatus|',
    '',
    '||**ANTERIOR GROUP**|**POSTERIOR GROUP**|',
    '|---|---|---|',
    '|Sinuses|**MAXILLARY · FRONTAL · ANTERIOR ETHMOID**|**POSTERIOR ETHMOID · SPHENOID**|',
    '|Drains to|**MIDDLE MEATUS**, all three|post. ethmoid → **SUPERIOR MEATUS**; sphenoid → **SPHENOETHMOIDAL RECESS**|',
    '|Endoscopy|**pus in the MIDDLE MEATUS**|**pus in the SPHENOETHMOIDAL RECESS**|',
    '',
    '- **THE SPHENOID ANSWERS “which does NOT open into the middle meatus”; THE POSTERIOR ETHMOID ANSWERS IT WHEN THE SPHENOID IS NOT OFFERED.** Read the option list before choosing the exception.',
    '- Defect: a stem asking which sinus opens **“between superior turbinate and septum”** means the sphenoethmoidal recess, so the sphenoid; the sphenoid is not offered and **posterior ethmoid** is keyed — key as printed.',
    '- Defect: a stem asking for **“the posterior group”** as one answer when it holds **two**, offering posterior ethmoid beside sphenoid and keying the sphenoid — key as printed.',
    '',
    'Src: L23 lines 26–37; endoscopic pus sites L27.1 lines 176–183'
  ].join('\n'),
  qs: ['entep-nose-21','entep-nose-45','entep-nose-95','entqb-nose1-4','entqb-nose1-6','entqb-nose1-7','entqb-nose1-9','entqb-nose1-15','entqb-nose1-17','entqb-nose1-19','entqb-nose4-146']
},

{
  id: 'nan-5', w: 'must',
  h: 'The osteomeatal complex',
  body: [
    '**THE OSTEOMEATAL (OSTIOMEATAL) COMPLEX IS THE SHARED FINAL DRAINAGE CHANNEL OF THE FRONTAL, ANTERIOR ETHMOID AND MAXILLARY SINUSES** — a region in and around the **middle meatus**, not a cavity.',
    '',
    '|Component|What it is|',
    '|---|---|',
    '|**UNCINATE PROCESS**|sickle-shaped bony leaflet, the **medial wall of the infundibulum**|',
    '|**ETHMOID BULLA**|**the LARGEST ANTERIOR ETHMOID CELL**, bulging into the middle meatus above the uncinate|',
    '|**HIATUS SEMILUNARIS**|the **crescentic GROOVE between uncinate and bulla** — the doorway into the infundibulum|',
    '|**ETHMOIDAL INFUNDIBULUM**|the trough beyond the hiatus, receiving the **maxillary ostium** and anterior ethmoid cells|',
    '|**MIDDLE MEATUS**|the space itself|',
    '|**FRONTAL RECESS**|the frontal sinus’s outflow, at the front of the complex|',
    '',
    '- **BOUNDARIES: MEDIALLY the MIDDLE TURBINATE · LATERALLY the LAMINA PAPYRACEA**, the paper-thin medial orbital wall crossed by both ethmoid infection and sinus instruments — the route to **orbital cellulitis**.',
    '- **AGGER NASI = the MOST ANTERIOR anterior-ethmoid cell**, in the frontal recess. **Most anterior = agger; LARGEST = bulla.**',
    '- **⚠️ THE POSTERIOR ETHMOID IS NOT PART OF THE COMPLEX** — it drains to the superior meatus, outside the channel. The standing “except”.',
    '- **Obstruction is in the CHANNEL, not the sinus** — clear the complex and the sinus drains itself: the anatomical argument for functional endoscopic surgery (`ent-sinusitis`). **Polyps arise inside it**, origin table in `ent-nasalmass`.',
    '',
    'Src: the term L29 line 443; uncinate, bulla, hiatus, infundibulum, frontal recess L26 lines 303–309, L29 lines 443–445. **AGGER NASI and LAMINA PAPYRACEA appear in no cached deck — both not in course material**'
  ].join('\n'),
  qs: ['entqb-nose1-5','entqb-nose1-16','entqb-nose1-18','entqb-nose1-33']
},

{
  id: 'nan-6', w: 'must',
  h: 'The four paranasal sinuses, one by one',
  body: [
    '|Sinus|Development|Drains into|Relations|Clinical|',
    '|---|---|---|---|---|',
    '|**MAXILLARY** (antrum of Highmore)|**PRESENT AT BIRTH**; enlarges after the second dentition|**MIDDLE MEATUS**, by an **ostium HIGH ON ITS MEDIAL WALL**|roof = **floor of the ORBIT**; floor = alveolus, **roots of premolars and molars**|**the LARGEST sinus.** Ostium above floor, so **clearance is AGAINST GRAVITY, cilia-dependent**; odontogenic sinusitis|',
    '|**ETHMOID**|**PRESENT AT BIRTH** — the sinus of infancy|**ANTERIOR (+ middle) → MIDDLE MEATUS · POSTERIOR → SUPERIOR MEATUS**|lateral wall = **lamina papyracea**|**commonest source of orbital cellulitis in a child**|',
    '|**FRONTAL**|**ABSENT AT BIRTH**; visible ~**5–6 y**, adult size in adolescence|**MIDDLE MEATUS**, via the **frontal recess**|posterior wall = anterior cranial fossa; floor = orbital roof|**frontal sinusitis is impossible in an infant**|',
    '|**SPHENOID**|rudimentary at birth; pneumatises from ~**3 y**|**SPHENOETHMOIDAL RECESS**|**optic nerve, internal carotid, cavernous sinus laterally; pituitary above**|deep vertex / retro-orbital headache|',
    '',
    '- **ALL FOUR SHARE THE RESPIRATORY LINING — PSEUDOSTRATIFIED COLUMNAR CILIATED, WITH GOBLET CELLS**, continuous with the nose through the ostia. Not squamous, not non-ciliated, and the goblet cells secrete **continuously, not only during infection**.',
    '- **Only the MAXILLARY and ETHMOID are present at birth** — neonatal sinusitis is ethmoiditis.',
    '',
    'Src: drainage L23 lines 26–37; epithelium L23 lines 63–64; cilia L27.1 lines 69–120. **Development ages, relations and clinical notes not in course material**'
  ].join('\n'),
  qs: ['entqb-nose4-147','entqb-nose1-7','entqb-nose4-146','entqb-nose1-17']
},

{
  id: 'nan-7', w: 'must',
  h: 'The interior of the nose — three areas, three linings',
  body: [
    '|Area|Where|Lining|',
    '|---|---|---|',
    '|**VESTIBULE**|**the MOST ANTERIOR part**, inside the nostril|**STRATIFIED SQUAMOUS — it is SKIN**, with **hair (vibrissae) and sebaceous glands**|',
    '|**OLFACTORY area**|**the UPPER part, related to the SUPERIOR TURBINATE and CRIBRIFORM PLATE** (and facing upper septum)|**COLUMNAR NON-CILIATED cells**|',
    '|**RESPIRATORY area**|**the REST of the cavity**|**PSEUDOSTRATIFIED COLUMNAR CILIATED, WITH GOBLET CELLS**|',
    '',
    '- **⚠️ THE VESTIBULE IS THE ONLY SKIN-LINED, HAIR-BEARING PART OF THE NOSE — SO THE ONLY PART THAT CAN DEVELOP FURUNCULOSIS.** No hair follicle on the septal mucosa, floor or middle meatus, so no boil there.',
    '- **A vestibular furuncle sits in the DANGEROUS AREA OF THE FACE** (below). **Antibiotics and warm compresses; NEVER squeeze or incise.** The vignette: a **diabetic with a small tender swelling in the nasal vestibule and nothing else** — a furuncle, not a mass.',
    '- The **limen nasi**, caudal edge of the upper lateral cartilage, is the skin-to-mucosa junction and the narrowest point of the airway.',
    '',
    'Src: L23 lines 55–64. **Vibrissae, glands, the limen nasi and the furuncle management not in course material**'
  ].join('\n'),
  qs: ['entqb-nose1-20','entqb-nose1-12','entep-nose-93','entep-nose-case-7']
},

{
  id: 'nan-8', w: 'must',
  h: 'Arterial supply',
  body: [
    '**BOTH CAROTID SYSTEMS SUPPLY THE NOSE — INTERNAL *AND* EXTERNAL**, which is why external carotid ligation alone may fail to stop a nosebleed.',
    '',
    '|System|Route|Branches reaching the nose|',
    '|---|---|---|',
    '|**INTERNAL carotid**|→ **OPHTHALMIC**|**ANTERIOR and POSTERIOR ETHMOIDAL** — roof, upper septum and lateral wall|',
    '|**EXTERNAL carotid**|→ **MAXILLARY**|**SPHENOPALATINE** (“the artery of epistaxis”), **DESCENDING / GREATER PALATINE**, posterior lateral nasal|',
    '|**EXTERNAL carotid**|→ **FACIAL**|**SUPERIOR LABIAL**, lateral nasal, angular — the external nose|',
    '',
    '**THE EXTERNAL CAROTID ENDS INSIDE THE PAROTID AS TWO TERMINALS: SUPERFICIAL TEMPORAL and MAXILLARY (internal maxillary, IMAX).** The **ophthalmic is INTERNAL carotid**, never a terminal of the external.',
    '',
    '**THE MAXILLARY ARTERY IS DIVIDED INTO THREE PARTS BY THE LATERAL PTERYGOID MUSCLE**, reaching the nose only in the third, which enters the **pterygopalatine fossa** through the **pterygomaxillary fissure**.',
    '',
    '|Part|Name|Branches|',
    '|---|---|---|',
    '|**1st**|mandibular — **BONE**|middle meningeal, inferior alveolar|',
    '|**2nd**|pterygoid — **MUSCLE**|**DEEP TEMPORAL**, masseteric, pterygoid, buccal|',
    '|**3rd**|**pterygopalatine — MUCOSA**|**SPHENOPALATINE · DESCENDING (greater) PALATINE · INFRAORBITAL · POSTERIOR SUPERIOR ALVEOLAR · vidian (pterygoid canal) · palatovaginal (pharyngeal) · posterior lateral nasal**|',
    '',
    '- **The rule: 1st = bone, 2nd = muscle, 3rd = mucosa.** So **DEEP TEMPORAL is SECOND-part**, the standing “except” in any third-part list; and the **ANTERIOR superior alveolar branches off the INFRAORBITAL**, so only the **POSTERIOR** arises in the fossa.',
    '- **SEPTAL SUPPLY: SPHENOPALATINE → posteroinferior · GREATER PALATINE → anteroinferior · SUPERIOR LABIAL · ANTERIOR and POSTERIOR ETHMOIDAL** — both carotid systems, anastomosing on the anterior inferior septum as **LITTLE’S AREA**, in full with Woodruff’s plexus in `ent-epistaxis`.',
    '',
    'Src: septal list and “internal and external carotid system” L24 lines 49–60; IMAX third part, pterygopalatine fossa, facial and ophthalmic runs L25.1 lines 55–100. **The ECA terminals, the three-part division and the 1st/2nd-part lists not in course material**'
  ].join('\n'),
  qs: ['entqb-nose1-22','entqb-nose1-44','entqb-nose2-47','entqb-nose2-48','entqb-nose2-50']
},

{
  id: 'nan-9', w: 'must',
  h: 'Venous drainage, the dangerous area, and lymphatics',
  body: [
    '**VEINS FOLLOW THE ARTERIES, AND ALL THREE UPPER ROUTES REACH THE CRANIAL CAVITY.**',
    '',
    '|Direction|Route|Ends in|',
    '|---|---|---|',
    '|**ANTERIORLY**|**FACIAL → ANGULAR → OPHTHALMIC veins**|**CAVERNOUS SINUS**|',
    '|**POSTERIORLY**|sphenopalatine vein → **PTERYGOID PLEXUS** → emissary veins of the foramen ovale|**CAVERNOUS SINUS**|',
    '|**SUPERIORLY**|ethmoidal veins → **OPHTHALMIC veins**|**CAVERNOUS SINUS**|',
    '',
    '- **⚠️ THESE COMMUNICATIONS ARE VALVELESS, SO BLOOD CAN FLOW BACKWARDS INTO THE SKULL.** The **DANGEROUS AREA OF THE FACE** — **nasal vestibule, external nose, upper lip** — drains this way, so sepsis there can cause **CAVERNOUS SINUS THROMBOSIS**.',
    '- **The one infection in the standard option list lying in that area is FURUNCULOSIS OF THE NASAL VESTIBULE** — acute otitis media, chronic otitis media and an infected preauricular sinus are all outside it. Squeezing is the classic precipitant.',
    '',
    '|Lymph from|Drains to|',
    '|---|---|',
    '|**VESTIBULE / anterior part**|**SUBMANDIBULAR nodes**|',
    '|**REST of the cavity** and the sinuses|**RETROPHARYNGEAL → UPPER DEEP CERVICAL nodes**|',
    '',
    '- Retropharyngeal nodes are **impalpable**, so posterior nasal and nasopharyngeal malignancy spreads silently.',
    '',
    'Src: **⚠️ NONE OF THIS SECTION IS IN THE COURSE MATERIAL** — over all 34 decks, “valveless”, “pterygoid plexus”, “ophthalmic vein”, “dangerous area” and “lymph” return no nasal hit'
  ].join('\n'),
  qs: ['entqb-nose1-25','entqb-nose1-27','entep-nose-93','entep-nose-case-7']
},

{
  id: 'nan-10', w: 'must',
  h: 'Nerve supply and the olfactory pathway',
  body: [
    '|Function|Nerve|Territory|',
    '|---|---|---|',
    '|**SMELL**|**OLFACTORY (CN I)**|**the OLFACTORY AREA only** — superior turbinate, cribriform plate, facing upper septum|',
    '|**Sensation, anterosuperior**|**TRIGEMINAL V1** — **anterior ethmoidal**, infratrochlear|anterior septum and lateral wall, external nose, tip|',
    '|**Sensation, posteroinferior**|**TRIGEMINAL V2** — **nasopalatine**, posterior superior nasal, greater palatine, infraorbital|most of the septum and lateral wall, the ala|',
    '|**AUTONOMIC**|**PARASYMPATHETIC** greater petrosal → **VIDIAN** → **PTERYGOPALATINE GANGLION**; **SYMPATHETIC** deep petrosal → vidian|secretion and vasodilatation / vasoconstriction|',
    '',
    '- **⚠️ V3 (MANDIBULAR) DOES NOT SUPPLY THE NOSE.** Nor does the facial nerve or the vagus. The keyed pair is always **olfactory + trigeminal V1 and V2**.',
    '- **OLFACTORY PATHWAY.** Olfactory area **5 cm²**, holding **sensory cells, BOWMAN’S GLANDS and PIGMENT CELLS**. Bipolar **olfactory neurons** → filaments **through the CRIBRIFORM PLATE** → **OLFACTORY BULB** → **LATERAL OLFACTORY TRACT** → **PRIMARY OLFACTORY CORTEX (pyriform area)**, with connections to **thalamus and hypothalamus**. **Shearing those filaments at the cribriform plate is why head injury causes anosmia**; smell disorders in `ent-epistaxis`.',
    '',
    'Src: olfactory area L23 lines 55–60; the pathway, the 5 cm² and the cell populations L25.2 lines 11–30 (`ent-epistaxis`’s deck). **The trigeminal branch lists and the autonomic supply not in course material**'
  ].join('\n'),
  qs: ['entqb-nose1-26']
},

{
  id: 'nan-11', w: 'must',
  h: 'Physiology — functions, air conditioning, mucociliary clearance',
  body: [
    '|Function|Content|',
    '|---|---|',
    '|**RESPIRATORY**|**airway** + **PURIFICATION OF AIR** — **the MAIN function**|',
    '|**OLFACTORY**|in the olfactory area|',
    '|**PHONATORY**|**resonance of voice**|',
    '|**OTHER**|**lacrimal fluid drainage** · **reflex function**|',
    '',
    '- **Main function respiratory, purification delivered by MUCOCILIARY CLEARANCE** — keyed over warming, smell and resonance, all of which the nose also does.',
    '- **AIR CONDITIONING.** Air is **warmed to ~37 °C**, **humidified to ~85 % RH**, and **filtered in three tiers** — **vibrissae** >10 µm, **mucus blanket** 0.5–10 µm, smaller to the alveoli.',
    '- **MUCOCILIARY CLEARANCE.** A **two-layer blanket** — watery **periciliary (sol) layer** the cilia beat in, sticky **gel layer** trapping particles. Cilia beat **10–20 a second**, driving mucus **backwards to the nasopharynx**, where it is **swallowed subconsciously — the bank puts the interval at every 4 SECONDS**, about a litre a day.',
    '- **⚠️ IN THE SINUSES THE BEAT IS ALWAYS TOWARDS THE NATURAL OSTIUM, WHATEVER THE POSITION OF THE HEAD** — and past any accessory opening. Mucus does not obey gravity.',
    '- **CILIARY IMPAIRMENT is a listed predisposing factor for acute bacterial rhinosinusitis**, its causes **viral infection, smoking, allergy and PRIMARY CILIARY DYSKINESIA**; cystic fibrosis thickens the gel layer.',
    '- **NASAL CYCLE** — the sides alternate in congestion every **2–7 hours**; alternating block is normal, fixed is not.',
    '',
    'Src: L23 lines 65–75; cilia L27.1 lines 69–120; L29 line 28. **The air-conditioning and clearance figures, the 4-second interval, cystic fibrosis and the nasal cycle not in course material**'
  ].join('\n'),
  qs: ['entqb-nose1-28','entqb-nose4-148','entqb-nose4-147']
},

{
  id: 'nan-12', w: 'high',
  h: 'Nasal defences and the sneeze reflex',
  body: [
    '**THE SIX DEFENCE MECHANISMS OF THE NOSE AND SINUSES, as the rhinosinusitis lecture lists them:**',
    '',
    '- **1. MUCOCILIARY SYSTEM · 2. EPITHELIAL INTEGRITY · 3. REFLEXES (cough, SNEEZE) · 4. LYSOZYMES, OPSONINS, COMPLEMENT · 5. IMMUNOGLOBULINS (secretory IgA, IgE) · 6. MACROPHAGES and LYMPHOCYTES.**',
    '',
    '|Sneeze reflex|Nerve|',
    '|---|---|',
    '|**AFFERENT**|**TRIGEMINAL — V1**, by the **ANTERIOR ETHMOIDAL nerve**|',
    '|Centre|sneeze centre, **medulla / lateral brainstem**|',
    '|**EFFERENT**|**VAGUS**, with phrenic and intercostals driving the blast and the facial nerve closing the eyes|',
    '',
    '- **Keyed pair: AFFERENT V1 / EFFERENT VAGUS** — not olfactory, not facial, not trigeminal-to-trigeminal.',
    '- Defect: the printed key reads *“Afferent: Trigeminal, Efferent: Vagus”* **without the V1 qualifier**, the only thing separating it from the V2 option beside it; the option list resolves it, the key does not. Key as printed.',
    '',
    'Src: the six defences L29 lines 26–35; “reflex function” L23 line 75. **The ARC ITSELF — afferent, centre, efferent — is in no cached deck and is not in course material**'
  ].join('\n'),
  qs: ['entqb-nose1-29']
}

    ]
  }
};
