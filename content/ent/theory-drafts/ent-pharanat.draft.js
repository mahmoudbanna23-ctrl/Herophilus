/* ent-pharanat — "Anatomy of pharynx and larynx", ENT. Written from scratch
   2026-08-14 under START-HERE.md §14 (slide-density revision notes). No v1
   existed. 44 linked questions.

   ⚠️⚠️ THIS CHAPTER IS OWED THREE REGISTER ROWS FROM THREE CHAPTERS, AND TWO
   OF THEM ARE THE SAME DECK (L1.2) DEFERRED INDEPENDENTLY. §14.5 names it as
   one of the multi-row chapters. All three are discharged and itemised at the
   end of this header, with the L1.2 overlap stated as DELIVERED ONCE rather
   than written twice.

   ────────────────────────────────────────────────────────────────────────
   BUDGET — §14.1 as revised 2026-08-14,
   budget = max( summed lecture words , 25 x linked question count ),
   floor 600, cap 3,000. BOTH TERMS MEASURED FROM DISK BEFORE WRITING.

     TERM 1 — the lecture words this chapter RESTS ON, BY LINE RANGE
     (`sed -n 'a,b p' | wc -w`, the same tokeniser the precedents used):

       L1.2) Anatomy of the pharynx        954 w of the file’s 1,132
         · lines 12–85   (444 w) — slides 2–12: the three regions and their
             four boundary structures, the coronal view, the nasopharyngeal
             relationships and lateral wall (fossa of Rosenmuller, torus,
             ET orifice), the four walls of the oropharynx, its lateral wall
             and pillars, the two isthmuses, the velopharyngeal sphincter and
             Passawnt’s bridge, the six functions, the palatine tonsil and
             its crypts / crypta magna
         · lines 97–183  (510 w) — slides 14–24 and the deck’s own NOT-COVERED
             list: tonsillar blood supply and lymphatics, Waldeyer’s ring,
             the hypopharyngeal subsites, the constrictors and their named
             parts, Killian’s and Laimer’s triangles, the inferior-constrictor
             dehiscence, and both nerve-supply plates
         ⚠️ NOT CLAIMED — lines 87–95 (72 w), slide 13, THE TONSILLAR BED.
             `ent-pharsupp` counted the whole 1,132 w of this file while
             keeping only the bed and crypta magna, so the bed’s words are
             already charged there. The bed IS written here in full, because
             one of this chapter’s own questions keys it — this is §14.1’s
             stated "a fact arrives by deferral while its words stay charged
             elsewhere" case, and it is declared rather than re-billed.
         ⚠️ THE CONVERSE, ALSO STATED: `ent-pharsupp` billed the other 1,060 w
             of this deck and then deferred them here (§14.1(b): deferring and
             counting are opposites). Following the `ent-otalgia`/`ent-otorrhea`
             precedent exactly, the receiving chapter counts what it carries;
             `ent-pharsupp` is not rewritten and its content is not wrong.

       + L1.1) Surgical anatomy of the larynx  1,073 w of the file’s 1,286
         · lines 15–141 — the ENTIRE content body, slides 2–16: the laryngeal
             skeleton and every named cartilage feature, the extrinsic and
             intrinsic membranes and ligaments, the glottis from above, the
             intrinsic muscles, the laryngeal cavity and its compartments,
             the pre-epiglottic space, the piriform sinus, the layered vocal
             fold, both nerve-supply plates, the RLN-injury schematic and the
             blood supply.
         ⚠️ NOT CLAIMED — lines 1–14 (the source/warning header) and lines
             142–150 (75 w, the deck’s own NOT-COVERED list).
         ⚠️ `ent-hoarse` EXPLICITLY DECLINED to count this file, writing that
             "the cartilages, membranes, extrinsic muscles, blood supply and
             nerve-supply plates are `ent-pharanat`’s". Claimed here, in full,
             exactly as that chapter left it. No double billing exists.

       = TERM 1  2,027 words

     TERM 2 — 25 x 44 linked questions = 1,100 words

     max(2,027 · 1,100) = 2,027. **TERM 1 GOVERNS**, by 927 words. Floor 600
     does not bind; cap 3,000 not reached. Operative ceiling ~2,400 body words
     (§14.1, pages ≈ words ÷ 240).

   ────────────────────────────────────────────────────────────────────────
   DIAGRAM-DECK TEST (§14.1) — RUN ON BOTH DECKS, AND IT DOES **NOT** BITE.
   The brief predicted it would. It does not, and the reason matters:

       L1.2 claimed ranges    954 w / 138 non-blank lines = 6.91 w/line
       L1.1 claimed range   1,073 w / 111 non-blank lines = 9.66 w/line
       (L22, the ear deck that forced the second budget term into existence,
        runs 1.2 w/line. The threshold is ~2.)

   ⚠️ BOTH SOURCE PDFs ARE GENUINELY IMAGE-ONLY — `pdftotext` returns 330 and
   306 characters, the title slides alone. But the CACHED FILES ARE VISUAL
   TRANSCRIPTIONS, read as four-up contact sheets on 2026-08-11, and a
   transcriber describing a labelled plate ("Cadaveric sagittal figure,
   labelled: …") writes far more words than the plate prints. So the
   correction runs the OPPOSITE way here from L22: the word count is if
   anything GENEROUS relative to the slides’ own prose, not starved by it.
   That is why TERM 1 beats TERM 2 by nearly two to one on decks that are
   pure diagrams. The number is honest as a measure of the cached file; it is
   not a measure of how many words the lecturer printed. STATED, NOT HIDDEN.

   ────────────────────────────────────────────────────────────────────────
   ⚠️ ENTITY + FRAMEWORK FLOOR, COUNTED BEFORE WRITING (§14.1’s `ent-neck`
   rule — an anatomy chapter is almost all framework slides, so they are
   costed ONE BY ONE rather than lumped, which is how `ent-neck` under-
   predicted by ~600):

     TWENTY ENTITIES at ~90 w (what it is / its parts / its relations / what
     it explains clinically): nasopharynx · oropharynx · hypopharynx ·
     palatine tonsil · Waldeyer’s ring · the constrictors and their gaps ·
     laryngeal cartilages · laryngeal membranes and ligaments · the laryngeal
     cavity and its compartments · the vocal fold’s layers · intrinsic
     muscles · extrinsic muscles · laryngeal nerve supply · laryngeal blood
     supply · laryngeal lymphatics · piriform sinus · pre-epiglottic space ·
     infantile larynx · the velopharyngeal sphincter · the swallowing phases
                                                       20 x 90 = 1,800 w

     FRAMEWORK SLIDES NOT COVERED BY THOSE TWENTY, costed individually — a
     list of names has no fat in it:
       the three-region boundary + vertebral grid            70
       the six functions of the oropharynx                   55
       the tongue’s four-nerve table                         65
       the pharyngeal nerve-territory table                  85
       the tonsil’s five-artery list + parent vessels        55
                                                       = ~330 w

     PREDICTED FLOOR ≈ 2,130 w, realistic 2,200–2,400 given that `ent-neck`’s
     framework half ran ~80 % over its estimate. Against a 2,027 budget that
     is a PREDICTED OVERRUN OF ~5–18 %, SAID HERE IN ADVANCE, and the target
     is to land under the ~2,400 operative ceiling rather than under 2,027.

   ────────────────────────────────────────────────────────────────────────
   ⚠️ MEASURED OUTCOME — taken with §14’s own validator on the file AS IT
   STANDS ON DISK, and re-measured after the final edit (§14.1’s `ent-rhin`
   warning: the header is a claim, the file is the fact):

       body 2,456 words over 17 sections · intro 47 words · 44/44 linked

   Per-section, measured: pha-1 119 · pha-2 97 · pha-3 91 · pha-4 188 ·
   pha-5 182 · pha-6 106 · pha-7 122 · pha-8 136 · pha-9 177 · pha-10 181 ·
   pha-11 249 · pha-12 101 · pha-13 123 · pha-14 183 · pha-15 162 ·
   pha-16 111 · pha-17 128.

   ⚠️ THE FIRST VERSION OF THIS PARAGRAPH WAS FICTION AND IS RECORDED AS SUCH.
   It was written before the file was measured and claimed 2,342 words; the
   file was 3,428. That is exactly the `ent-rhin` failure §14.1 warns about,
   caught here by running the validator rather than trusting the header. The
   numbers above are measured, and were re-measured after the final edit.

   That is 429 over the 2,027 budget (+21.2 %), and 226 over §14.1’s 10 %
   tolerance of 2,230. **It is 56 words OVER the ~2,400 operative ceiling
   (+2.3 %)** — stated, not hidden. Estimated pages 2,456 ÷ 240 = **10.2**,
   i.e. 9–11 printed pages on a ±1-page estimator, and inside the band the two
   nearest precedents landed in and were accepted at: `ent-nasalobs` 2,425 and
   `ent-neck` 2,410.

   The overrun landed just above the range predicted before writing
   (2,130, realistic 2,200–2,400 → delivered 2,456), the same direction and
   size as `ent-neck`’s framework miss. **THREE COMPRESSION PASSES WERE RUN,
   3,428 → 2,767 → 2,573 → 2,456, i.e. −972 words (−28.4 %), with no protected
   fact touched.** The yields were 661, 194 and 117 — the last pass returning
   117 on twenty separate edits is the signal §14.1 names: the fat is gone and
   what remains is facts. What went: connective and framing phrasing
   throughout; six distractor-rejection tails (the four wrong pillar muscles,
   the three false infantile-larynx statements, "40 crypts", "a single
   cartilage", the three wrong definitions of the glottis, the paratonsillar
   vein’s three wrong attributions); one bank-meta line ("the all-of-the-above
   key"); two facts that duplicated another section (the child’s narrowest
   airway point, already a row of pha-17; the mandible-protects clause,
   already in pha-14); one duplicated nerve row shared with pha-15; the
   four-gaps paragraph converted to a table; and ~30 over-long table cells
   rewritten as fragments.

   WHY IT STOPS HERE — §14.1 requires the bill be itemised rather than a
   protected fact deleted. Reaching the 2,400 ceiling costs 56 words, the 10 %
   tolerance 226, the strict budget 429. Nothing of 56 words remains that is
   not a fact: the next cuts available are whole sections.
       pha-16 Blood supply and lymphatics of the larynx  111 w — 1 question,
              and it deletes the ONLY account of laryngeal lymphatics anywhere
              in ENT (no cached deck covers it — see the gap list below)
       pha-17 The infantile larynx                       128 w — 3 questions
       pha-2  Nasopharynx                                 97 w — 1 question,
              and with it the fossa of Rosenmuller
       pha-12 The laryngeal cavity                       101 w — 1 question
                                                        ---      --
                                                         437 w    6 questions
   Deleting any of them breaks the §14.2 floor and, for pha-16, removes an
   answer that exists nowhere else in the corpus. Not done. If the hub wants
   the strict number honoured, that is the bill; if it wants only the 2,400
   ceiling, the honest answer is that the last 56 words are facts and the
   ±1-page estimator cannot distinguish 2,400 from 2,456.

   ────────────────────────────────────────────────────────────────────────
   THE THREE INHERITED REGISTER ROWS — all three collected, each named here.

     ROW 1 — from `ent-pharsupp` (L1.2): "pharyngeal divisions, Waldeyer’s
       ring, the constrictors and the inferior-constrictor dehiscence, blood
       supply, nerve-supply diagrams, the swallowing phases. Only the
       tonsillar bed and crypta magna kept."
       ✅ DELIVERED IN FULL:
         · divisions            -> pha-1 (three regions, four boundary
                                   structures, the C6 landmark)
         · Waldeyer’s ring      -> pha-7 (all five components, Gerlach and
                                   Luschka, Henle and Delphian as the two
                                   standing distractors)
         · constrictors + the dehiscence -> pha-9 (named parts of all three,
                                   the four gaps and their contents,
                                   Killian’s and Laimer’s triangles, Zenker)
         · blood supply         -> pha-6 (the five arteries, their parent
                                   vessels, the paratonsillar vein, the
                                   jugulodigastric node)
         · nerve-supply diagrams -> pha-10 (the plates turned into a
                                   region-by-region table and the tongue’s
                                   four nerves)
         · swallowing phases    -> pha-4 (all three phases, what is voluntary,
                                   what closes, what fails — see the
                                   `ent-swallow` boundary below)
       ⚠️ The tonsillar bed and crypta magna, which that chapter KEPT, are
       written here too in pha-5, because this chapter’s own questions key
       both. `ent-pharsupp`’s phsup-3/phsup-4 were read before writing:
       crypta magna appears there only as the ROUTE of quinsy infection, and
       nothing of that is restated here. Their words stay charged there.

     ROW 2 — from `ent-dysph` (L1.2): "pharyngeal anatomy — only Killian’s
       triangle kept." Registered independently of Row 1, same deck.
       ✅ DELIVERED ONCE, NOT TWICE. Rows 1 and 2 name the same slides; the
       whole deck is written here in pha-1 to pha-10 and the two promises are
       discharged by one account. `ent-dysph`’s dys-11 was read before
       writing: it keeps Killian’s dehiscence only as the SITE of Zenker’s
       pouch, so pha-9 carries the ANATOMY (which two muscles, which fibres,
       why it is muscle-free, Laimer’s triangle beneath it) and points at
       nothing it already says. Zenker as a LESION stays `ent-dysph`’s.

     ROW 3 — from `ent-hoarse` (L1.1): "laryngeal cartilages, membranes and
       ligaments, the extrinsic muscles, blood supply, the nerve-supply
       plates, the piriform sinus, and the pre-epiglottic space as anatomy."
       ✅ DELIVERED IN FULL, AND ⚠️ THE ROW IS UNAMBIGUOUSLY MINE. The brief
       asked this to be checked rather than assumed. **Twenty-two of the 44
       questions filed under this chapter test laryngeal anatomy directly** —
       every one of the eight items in the row is keyed by at least one:
         cartilages          -> 3 questions (only complete ring; the arytenoid
                                and its two processes; the laryngeal box)
         membranes/ligaments -> the thyrohyoid aperture and the cricothyroid
                                ligament carry two nerve questions
         extrinsic muscles / relations -> 1 question (mandible, sternum,
                                sternomastoid as the larynx’s protection)
         blood supply        -> written with the nerve, no question of its own
         nerve-supply plates -> 6 questions, the single largest cluster in the
                                chapter
         piriform sinus      -> 2 questions (what lies medial to it; fish-bone
                                impaction)
         pre-epiglottic space -> written in pha-11 as the space the
                                supraglottic subsite sits in
         plus: the vocal fold’s layers and Reinke’s space (2), the intrinsic
                                muscles (3), the definition of the glottis (1)
       -> pha-11 (skeleton, membranes, ligaments, spaces), pha-12 (the
          cavity and its three compartments), pha-13 (the layered fold),
          pha-14 (intrinsic and extrinsic muscles), pha-15 (nerve supply),
          pha-16 (blood supply and lymphatics).
       ⚠️ `ent-hoarse`’s hoar-2 was read in full before writing. It carries a
       compact eight-line version of the same anatomy as the minimum its
       symptom questions need. Nothing here restates it: hoar-2 keeps the
       lesion-facing reading (which layer gives Reinke’s oedema, where a
       nodule sits, what a granuloma sits on), and this chapter carries the
       structure itself — every cartilage, every membrane, every muscle, the
       compartments, the vessels and the nerves.

   ────────────────────────────────────────────────────────────────────────
   MY OWN DEFERRALS (§14.5) — named, so each is a promise not a deletion.
   Every one was checked against all 44 of this chapter’s questions: NONE
   tests it.

     · THE SWALLOWING ASSESSMENT AND ITS DISORDERS — penetration and
       aspiration and silent aspiration, the bedside screen, the
       non-instrumental tiers, FEES and its white-out, VFSS and its bolus
       protocol, high-resolution impedance manometry, compensatory postures
       and manoeuvres, diet modification, the multidisciplinary team and the
       referral pathways.                                -> `ent-swallow`
       ⚠️ THE BOUNDARY I ACTUALLY DREW, stated so `ent-swallow` knows what it
       is receiving: pha-4 writes the THREE PHASES AS NORMAL PHYSIOLOGY —
       what each phase is, which is voluntary, what closes the nasopharynx
       and the larynx, and which phase the oropharynx is (the parenthesis one
       of my questions turns on). Everything about swallowing going WRONG,
       and every instrument used to look at it, is `ent-swallow`’s. Two of my
       questions need the phases; none needs the assessment.
       ⚠️ `ent-dysph` already registered L7’s whole deck (1,522 of 1,616 w) to
       `ent-swallow`. This is a boundary note on that row, not a second one.

     · ZENKER’S DIVERTICULUM AS A LESION — the pulsion mechanism, the
       clinical picture, the barium swallow at C5–C6, diverticulectomy with
       cricopharyngeal myotomy, the endoscopic stapled repair.
       ✅ VERIFIED ALREADY WRITTEN in `ent-dysph` (six occurrences, incl. the
       barium-swallow investigation of choice) before deferring, not assumed.
       Only the anatomy of the dehiscence is kept here.     -> `ent-dysph`

     · POST-CRICOID CARCINOMA, PLUMMER-VINSON AND THE HYPOPHARYNGEAL
       CANCERS — subsite frequency, the sex split, the aetiology, staging.
       ✅ VERIFIED ALREADY WRITTEN in `ent-dysph` before deferring. Kept here:
       only that the post-cricoid area is a hypopharyngeal SUBSITE and its
       boundaries, which is what my question keys.          -> `ent-dysph`

     · LARYNGEAL CARCINOMA AND THE MUCOSAL LESIONS — glottic/supraglottic/
       subglottic carcinoma and their prognosis, nodules, polyps, Reinke’s
       oedema, granuloma, sulcus vocalis, the premalignant lesions.
       ✅ VERIFIED ALREADY WRITTEN in `ent-hoarse` (hoar-2, hoar-4, hoar-8).
       Kept here: only the lymphatic ANATOMY that explains the prognosis, and
       the layer that Reinke’s oedema fills.                -> `ent-hoarse`

     · VOCAL CORD PARALYSIS AS A SUBJECT — the named cord positions (median,
       paramedian, intermediate, cadaveric), the voice/airway outcome of
       each, the unilateral and bilateral aetiology rankings, RLN-versus-vagus
       localisation, the management ladders.                  -> `ent-vocal`
       ⚠️ Kept here, because two of my questions key them: which muscles the
       RLN supplies and which it does not, what the external branch of the
       SLN supplies, and the deck’s own transected-versus-traumatised
       schematic. ⚠️ `ent-hoarse` and `ent-paedlar` have both already
       registered this row; this is the third chapter to owe it, and
       `ent-vocal` must be written against all three.

     · LARYNGOMALACIA AND THE CONGENITAL LARYNGEAL ANOMALIES — the omega
       epiglottis as a LESION, the short aryepiglottic folds, redundant
       arytenoid mucosa, GERD, the management ladder, laryngeal web, cleft,
       congenital cord palsy.                               -> `ent-paedlar`
       Kept here: only the infantile larynx as normal comparative ANATOMY,
       which three of my questions key. The omega epiglottis appears here as
       a shape, not as a diagnosis.

     · NASOPHARYNGEAL CARCINOMA AS AN ENTITY — EBV, the presentation, the
       neck node, nasopharyngoscopy and biopsy, treatment.
       -> `ent-nasalmass` (⚠️ no `ent-npc` chapter exists in MODULES; this is
       flagged for the hub rather than assumed). Kept here: only that the
       fossa of Rosenmuller is where an occult primary hides, which is what
       my question keys.

     · TONSILLITIS, TONSILLECTOMY AND THE ADENOID AS DISEASES — indications,
       techniques, haemorrhage, adenoid facies.
       ✅ VERIFIED WRITTEN in the merged `ent-tonsils`.      -> `ent-tonsils`

     · THE PERITONSILLAR, PARAPHARYNGEAL AND RETROPHARYNGEAL SPACES and every
       collection in them. ✅ VERIFIED WRITTEN in `ent-pharsupp` (phsup-2,
       phsup-6, phsup-7). ⚠️ Both decks confirm these spaces belong to the
       suppurations lecture — L1.2’s own NOT-COVERED list says so in words.
                                                          -> `ent-pharsupp`

   ────────────────────────────────────────────────────────────────────────
   ⚠️ SEVEN MATERIAL GAPS, ANSWERED AND TAGGED rather than declared (§4a).
   Each was greped across ALL 34 cached ENT lecture files before being called
   a gap — "read the slide before declaring a gap", which has paid nine times
   in this project and paid twice more here (see the two RECOVERIES below):
     · VERTEBRAL LEVELS OF THE PHARYNGEAL REGIONS. `C6` returns only L10
       (Zenker at C5–C6); `C4` returns nothing. Both anatomy decks state the
       boundaries as STRUCTURES and no level anywhere — their own NOT-COVERED
       lists say so. Two questions key C-levels. Supplied and tagged, pha-1.
     · THE CAROTID BIFURCATION’S LEVEL. Drawn on L1.1 slide 16, labelled with
       no level. Supplied and tagged as C3–C4 in pha-1’s defect note.
     · THE FOUR GAPS BETWEEN AND AROUND THE CONSTRICTORS and what passes
       through each. The deck shades only the inferior-constrictor dehiscence.
       Supplied and tagged, pha-9.
     · THE PIRIFORM FOSSA’S WALLS. Labelled on three plates across both decks,
       listed in prose on neither. Supplied and tagged, pha-8.
     · FISH-BONE IMPACTION. `fish bone` returns only L6, on airway foreign
       bodies, not on impaction sites; L1.2’s NOT-COVERED list names it
       explicitly. Supplied and tagged, pha-8.
     · LARYNGEAL LYMPHATIC DRAINAGE BY REGION. `lymphatic` hits L1.1 only
       inside its own NOT-COVERED list. The whole answer is supplied and
       tagged, pha-16. It is also the least deletable section in the chapter,
       because nothing else in ENT covers it.
     · GERLACH AND LUSCHKA. Both return ZERO hits corpus-wide. The tonsils
       they name are on L1.2’s Waldeyer slide; the eponyms are supplied and
       tagged, pha-7.

   ✅ TWO RECOVERIES — points that LOOKED like gaps and are printed:
     · THE INFANTILE LARYNX. Absent from both anatomy decks, and it would
       have been tagged as outside the material. `L12) Pediatric Laryngeal
       Lesions` prints the entire comparison in words (funnel shape, 4.5 mm
       subglottis, epiglottis long and folded, big arytenoids, short cords,
       loose submucosa, premature reflexes) and `L6) Stridor and
       tracheostomy` adds the C3–4 position and Poiseuille’s law. SOURCED,
       not tagged. Both decks are CITED ONLY, NOT COUNTED — they are
       `ent-paedlar`’s and `ent-stridor`’s.
     · REINKE’S SPACE. `Reinke` returns L1.1, L2 and L8. L1.1 draws the
       superficial lamina propria and never prints the eponym, but L2 does,
       so the name is sourced rather than supplied. L2 is `ent-hoarse`’s and
       is cited only, not counted.

   ────────────────────────────────────────────────────────────────────────
   OMISSION NOTE — cut on purpose, each a decision on the record:
     1. Distractor-by-distractor rejection (§14.2). It lives in each
        question’s own `explanation`, one tap away through the qs links. Kept
        only where the teaching point IS the discrimination, and each of
        those is a table: the three regions (pha-1), the constrictors
        (pha-9), the nerve territories (pha-10), the three laryngeal
        compartments (pha-12), the intrinsic muscles by action (pha-14), the
        two laryngeal nerves (pha-15), infant versus adult (pha-17).
     2. Question ids in body text, teaching voice, bank meta-commentary
        beyond the five one-line defect notes §4 requires, per-fact citation
        clauses (one Src line per section), a closing summary section.
     3. THE EMBRYOLOGY. L12 opens with the branchial and fetal phases of
        laryngeal development; no question here touches it and it is
        `ent-paedlar`’s deck. Named, not written.
     4. L1.2 slide 24’s BRAINSTEM PATHWAY DIAGRAM — nucleus ambiguus,
        solitary nucleus, spinal nucleus of V, the superior and inferior
        ganglia, the corticonuclear tract. Only the two facts a question can
        reach are kept (the gag/swallow reflex arc, and IX carrying sensation
        from the ear); the nuclear anatomy is deeper than any question or any
        other ENT chapter goes.
     5. L1.1 slide 2’s block diagram of the whole upper aerodigestive tract,
        which teaches nothing the region table does not.
     6. Muscle origins and insertions bone by bone, and the fine print inside
        the embedded textbook plates, which the cached transcription itself
        records as illegible.
     7. Histology beyond the two epithelia a question keys.
   ────────────────────────────────────────────────────────────────────────
*/

var THEORY_ENT_PHARANAT = {
  'ent-pharanat': {

    intro: 'Boundaries, lists and one nerve line. The examiner asks which structure marks a border, which muscle or artery is not on the list, and — six times over — what the vocal cords divide: sensation above from below, and the one muscle the recurrent nerve never reaches.',

    sections: [

{
  id: 'pha-1', w: 'must',
  h: 'The three regions — boundaries, levels, and what ends at C6',
  body: [
    '**Pharynx = fibromuscular tube, SKULL BASE → LOWER BORDER OF THE CRICOID**, where the oesophagus begins.',
    '',
    '|Region|From|To|Level|Lining|',
    '|---|---|---|---|---|',
    '|**NASOPHARYNX**|**skull base**|**hard palate**|**C1**|**ciliated columnar**|',
    '|**OROPHARYNX**|**hard palate**|**HYOID BONE**|**C2–C3**|**squamous**|',
    '|**HYPOPHARYNX (laryngopharynx)**|**hyoid**|**LOWER BORDER OF CRICOID**|**C4–C6**|**squamous**|',
    '',
    '- **Boundaries given as STRUCTURES: posterior choana · hard palate · hyoid bone · lower border of cricoid.** Neither anatomy deck states a vertebral level *(all C-levels not in course material)*.',
    '- **AT THE LOWER BORDER OF C6: cricoid · end of larynx · end of pharynx · beginning of oesophagus.** The pharynx BEGINS at the skull base.',
    '- **Defect note:** the same key also offers the carotid bifurcation — **C3–C4** *(not in course material)*, equally not a C6 event. Keyed as printed.',
    '',
    'Src: L1.2 slides 2–3 (lines 12–28)'
  ].join('\n'),
  qs: ['entqb-thr1-1','entqb-thr1-2']
},

{
  id: 'pha-2', w: 'must',
  h: 'Nasopharynx',
  body: [
    '**Roof and posterior wall carry the NASOPHARYNGEAL TONSIL (ADENOID)** as subepithelial lymphoid tissue **POSTERIORLY**. **Anterior wall = CHOANAE. Floor = soft palate.**',
    '',
    '|Lateral wall|Point|',
    '|---|---|',
    '|**Eustachian tube orifice**|**1.5 cm behind the posterior end of the INFERIOR TURBINATE**|',
    '|**Tubal elevation (TORUS TUBARIUS)**|cartilaginous lip above and behind it|',
    '|**FOSSA OF ROSENMULLER**|recess **behind and above the torus — where OCCULT NASOPHARYNGEAL CARCINOMA hides**|',
    '|**Salpingopharyngeal, salpingopalatine folds**|run down and forward from the torus|',
    '',
    '- **CHRONIC — not acute — Eustachian obstruction causes middle-ear effusion**; acute blockage gives retraction, fullness, otalgia. **Unilateral adult effusion → nasopharyngoscopy.**',
    '',
    'Src: L1.2 slides 5–6 (lines 32–42)'
  ].join('\n'),
  qs: ['entqb-thr1-4']
},

{
  id: 'pha-3', w: 'must',
  h: 'Oropharynx — four walls, two isthmuses, two pillars',
  body: [
    '|Wall|The deck’s own list|',
    '|---|---|',
    '|**SUPERIOR**|**soft palate and UVULA**|',
    '|**LATERAL**|**anterior and posterior PILLARS + tonsillar fossae + PALATINE TONSILS**|',
    '|**ANTERIOR**|**TONGUE BASE (and lingual tonsils) + VALLECULAE**|',
    '|**POSTERIOR**|**soft palate → tip of the epiglottis**|',
    '',
    '- **OROPHARYNGEAL (FAUCIAL) ISTHMUS — the oral cavity opens into the oropharynx through it.** Soft palate above, anterior pillars laterally, tongue base below *(boundaries not in course material)*.',
    '- **VELOPHARYNGEAL ISTHMUS** — oropharynx to **nasopharynx**.',
    '- **ANTERIOR PILLAR = PALATOGLOSSUS. POSTERIOR PILLAR = PALATOPHARYNGEUS.** The tonsil sits in the fossa between them.',
    '',
    'Src: L1.2 slides 7–9 (lines 44–59)'
  ].join('\n'),
  qs: ['entqb-thr1-3','entqb-thr1-6','entqb-thr1-7']
},

{
  id: 'pha-4', w: 'must',
  h: 'Velopharyngeal closure, the six functions, the phases of swallowing',
  body: [
    '**“Closure of the sphincter-like mechanism between the oropharynx and nasopharynx is ESSENTIAL FOR NORMAL DEGLUTITION AND SPEECH.”** Three combined movements:',
    '',
    '|Component|Movement|',
    '|---|---|',
    '|**Soft palate**|**POSTERO-SUPERIOR**|',
    '|**Lateral pharyngeal walls**|**MEDIAL**|',
    '|**Posterior pharyngeal wall**|**slight ANTERIOR = PASSAWNT’S BRIDGE**|',
    '',
    '- **Passawnt’s bridge = the POSTERIOR wall’s contribution**; deck and bank spell it thus, the eponym is **Passavant’s**. **The uvula perfects the closure.** Failure → nasal regurgitation, **rhinolalia aperta** *(not in course material)*.',
    '',
    '**SIX FUNCTIONS OF THE OROPHARYNX**: **common pathway for food and air · respiratory function · reflex actions (sneezing, coughing, vomiting) · speech resonance (articulation of vowels) · DEGLUTITION, the 2nd “PHARYNGEAL” PHASE of swallowing · drainage of mucus from the nasopharynx.**',
    '',
    '|Phase|Voluntary?|What happens|',
    '|---|---|---|',
    '|**1 ORAL**|**VOLUNTARY**|chewing, bolus formation, tongue propels it back|',
    '|**2 PHARYNGEAL — the OROPHARYNX’S PHASE**|**INVOLUNTARY**|**velopharyngeal sphincter shuts the nasopharynx · larynx elevates and closes (epiglottis, then false and true cords) · RESPIRATION STOPS · cricopharyngeus relaxes**|',
    '|**3 OESOPHAGEAL**|**INVOLUNTARY**|peristalsis to the stomach|',
    '',
    '- **THE OROPHARYNX IS THE 2ND PHASE, NOT THE 3RD.** **Aspiration is failure of the PHARYNGEAL phase** *(phase detail not in course material)*.',
    '',
    'Src: L1.2 slides 10–11 (lines 61–78); phases named in L7 and L10, cited only'
  ].join('\n'),
  qs: ['entqb-thr1-8','entqb-thr1-9']
},

{
  id: 'pha-5', w: 'must',
  h: 'The palatine tonsil — crypts, capsule, bed',
  body: [
    '**A pair of lymphoid masses either side of the oropharynx. Normal tonsils are FLUSH WITH THE EDGES OF THE FAUCES.**',
    '- **Medial surface: 8–30 DEPRESSIONS (CRYPTS). The largest, the CRYPTA MAGNA, separates the upper pole from the tonsillar body.**',
    '- **Crypts multiply the surface for direct antigen sampling** — the tonsil has **no afferent lymphatics** *(mechanism not in course material)*; the same pouches trap debris → **tonsilloliths**.',
    '- **Lateral (deep) surface: a FIBROUS CAPSULE** separating tonsil from bed. **The lower pole may reach the base of tongue and become continuous with the LINGUAL TONSIL.**',
    '',
    '|THE BED — four structures|NOT in the bed|',
    '|---|---|',
    '|**SUPERIOR CONSTRICTOR**|**MIDDLE constrictor** — attached to the hyoid, below the fossa|',
    '|**GLOSSOPHARYNGEAL nerve**|the **PILLARS** — palatoglossus in front, palatopharyngeus behind|',
    '|**FACIAL artery** (tonsillar branch)|—|',
    '|**BUCCOPHARYNGEAL fascia**|—|',
    '',
    '- **The INTERNAL CAROTID lies ~2.5 cm BEHIND AND LATERAL to the tonsil** *(figure not in course material)* — hence the danger of deep dissection. Injury to IX in the bed → **loss of taste over the posterior third, referred otalgia**.',
    '',
    'Src: L1.2 slides 12–13 (lines 80–95; the bed is `ent-pharsupp`’s counted range)'
  ].join('\n'),
  qs: ['entqb-thr1-10','entqb-thr4-171','entqb-thr4-227']
},

{
  id: 'pha-6', w: 'must',
  h: 'Tonsil — arteries, paratonsillar vein, lymphatics',
  body: [
    '**FIVE ARTERIES, ALL FROM THE EXTERNAL CAROTID. NO THYROID ARTERY CONTRIBUTES.**',
    '',
    '|Artery|Parent|',
    '|---|---|',
    '|**TONSILLAR branch of the FACIAL — THE MAIN SUPPLY**|facial|',
    '|**Ascending palatine**|facial|',
    '|**Dorsalis linguae**|lingual|',
    '|**Descending palatine**|maxillary|',
    '|**Ascending pharyngeal**|external carotid, direct|',
    '',
    '- **The main vessel enters at the LOWER POLE** — usual source of tonsillectomy haemorrhage *(pole and parent vessels not in course material)*.',
    '- **PARATONSILLAR VEIN** — drains the **UPPER pole** to the pharyngeal plexus and the **INTERNAL jugular**: the route of **septic IJV thrombophlebitis, LEMIERRE’S, Fusobacterium necrophorum** *(not in course material)*, and of upper-pole bleeding.',
    '- **LYMPH: UPPER DEEP CERVICAL, especially the JUGULODIGASTRIC node** — printed *“Jugulo-diagastric”*.',
    '',
    'Src: L1.2 slide 14 (lines 97–104)'
  ].join('\n'),
  qs: ['entep-throat-21','entqb-thr1-11','entqb-thr4-190','entqb-thr4-170']
},

{
  id: 'pha-7', w: 'must',
  h: 'Waldeyer’s ring — five components',
  body: [
    '**“A ring of LYMPHOID TISSUE GUARDING THE ENTRANCE TO THE DIGESTIVE AND RESPIRATORY TRACTS”** — early recognition of pathogens, initiation of the immune response.',
    '',
    '|#|Component|Eponym / site|',
    '|---|---|---|',
    '|1|**NASOPHARYNGEAL TONSIL (ADENOID)**|**LUSCHKA’S** — nasopharyngeal roof|',
    '|2|**TUBAL TONSILS**|**GERLACH’S** — around the Eustachian orifice|',
    '|3|**PALATINE TONSILS**|tonsillar fossae|',
    '|4|**LINGUAL TONSILS**|base of tongue|',
    '|5|**LATERAL PHARYNGEAL BANDS**|posterolateral wall|',
    '',
    '- *(Gerlach and Luschka not in course material — zero hits across all 34 decks.)*',
    '- **BOTH STANDING DISTRACTORS ARE LYMPH NODES, NOT RING TISSUE. HENLE’S lymphoid tissue = retropharyngeal NODES, BEHIND the pharynx, atrophying by about age five** — why retropharyngeal abscess is a disease of small children. **DELPHIAN (prelaryngeal) node** — pretracheal, on the cricothyroid membrane.',
    '',
    'Src: L1.2 slide 15 (lines 106–115); Henle’s nodes from L4, cited only'
  ].join('\n'),
  qs: ['entep-throat-66','entqb-thr1-27']
},

{
  id: 'pha-8', w: 'must',
  h: 'Hypopharynx — three subsites, and the piriform fossa',
  body: [
    '**Hyoid above → lower border of cricoid below.**',
    '',
    '|Subsite|Extent|Point|',
    '|---|---|---|',
    '|**PIRIFORM (pyriform) FOSSAE**|paired gutters lateral to the larynx, pharyngoepiglottic fold → apex at cricoid level|**commonest hypopharyngeal cancer subsite**|',
    '|**POST-CRICOID AREA**|**ARYTENOID CARTILAGES above → LOWER BORDER OF CRICOID below**|**Plummer-Vinson web**, post-cricoid carcinoma|',
    '|**POSTERIOR PHARYNGEAL WALL**|vallecula → pharyngo-oesophageal junction|—|',
    '',
    '- **PIRIFORM FOSSA WALLS** *(in prose on neither deck — supplied, not in course material)*: **MEDIALLY the ARYEPIGLOTTIC FOLD, ARYTENOID and CRICOID CARTILAGE — the larynx itself; LATERALLY the THYROID CARTILAGE and THYROHYOID MEMBRANE.**',
    '- **COMMONEST SITE OF FISH-BONE IMPACTION = THE PIRIFORM FOSSA** *(not in course material — the deck’s own not-covered list names fish-bone impaction)*. **The tonsil and pillars are the first place to LOOK**; a normal-looking throat does not exclude one.',
    '',
    'Src: L1.2 slides 17–18 (lines 119–128); L1.1 slide 12; subsite frequency from L10, cited only'
  ].join('\n'),
  qs: ['entqb-thr1-13','entqb-thr1-16','entqb-thr1-28']
},

{
  id: 'pha-9', w: 'must',
  h: 'The constrictors, their four gaps, Killian’s dehiscence',
  body: [
    '**Three, overlapping upwards, all inserting into the MIDLINE PHARYNGEAL RAPHE** *(raphe not in course material)*.',
    '',
    '|Constrictor|Named parts|Attaches to|',
    '|---|---|---|',
    '|**SUPERIOR**|**pterygopharyngeal · buccopharyngeal · mylopharyngeal · glossopharyngeal**|pterygoid, mandible, tongue — **forms the TONSILLAR BED**|',
    '|**MIDDLE**|**chondropharyngeal · ceratopharyngeal**|**THE HYOID, lesser and greater cornua — the one constrictor attached to the hyoid**|',
    '|**INFERIOR**|**thyropharyngeal · cricopharyngeal**|thyroid and cricoid; **cricopharyngeus = upper oesophageal sphincter**|',
    '',
    '**FOUR GAPS** *(contents supplied — the deck shades only the fourth)*:',
    '',
    '|Gap|Transmits|',
    '|---|---|',
    '|**Above superior**|Eustachian tube, levator veli palatini|',
    '|**Superior / middle**|**stylopharyngeus, IX**|',
    '|**Middle / inferior**|**INTERNAL branch of the SLN, superior laryngeal artery** — through the thyrohyoid membrane|',
    '|**Below inferior**|**RECURRENT LARYNGEAL NERVE, inferior laryngeal artery**|',
    '',
    '- **KILLIAN’S DEHISCENCE — the muscle-free triangle in the POSTERIOR MIDLINE between the THYROPHARYNGEAL and CRICOPHARYNGEAL parts**, shaded and labelled *“dehiscence”*. **Weak because muscular tissue is absent; the site of ZENKER’S DIVERTICULUM**, a pulsion pouch from failed cricopharyngeal relaxation. **LAIMER’S TRIANGLE** lies **below** cricopharyngeus.',
    '- **Defect note:** one option list offers *thyropharyngeal* and *inferior constrictor* separately — thyropharyngeus is part of the inferior constrictor. Keyed as printed.',
    '',
    'Src: L1.2 slides 19–22 (lines 130–158)'
  ].join('\n'),
  qs: ['entqb-thr1-14','entqb-thr1-31']
},

{
  id: 'pha-10', w: 'must',
  h: 'Nerve supply of the pharynx, and the tongue’s four nerves',
  body: [
    '**Sensory from IX, motor from X, through the PHARYNGEAL PLEXUS** *(composition not in course material)*.',
    '',
    '|Region|Sensory nerve|',
    '|---|---|',
    '|**Nasopharynx**|**TRIGEMINAL V2**|',
    '|**Paranasal sinuses**|**TRIGEMINAL**|',
    '|**Oropharynx, soft palate, PALATINE TONSIL, posterior third of tongue**|**GLOSSOPHARYNGEAL (IX)**|',
    '|**VALLECULA, epiglottis, hypopharynx, larynx ABOVE the cords**|**VAGUS — INTERNAL BRANCH OF THE SUPERIOR LARYNGEAL NERVE**|',
    '',
    '- **THE VALLECULA IS NOT RECURRENT-LARYNGEAL TERRITORY** — the deck labels it *“Vagus (X) — via internal branch of superior laryngeal nerve”*. **The cords are the dividing line**; below them, RLN.',
    '- **MOTOR: all pharyngeal muscles by the plexus EXCEPT stylopharyngeus (IX) and tensor veli palatini (V3)** *(not in course material)*.',
    '- **GAG AND SWALLOWING REFLEX: afferent IX, efferent X.** IX also carries **sensation from the ear (tympanic nerve)** — why the tonsil refers pain to the ear.',
    '',
    '||**Anterior 2/3 of tongue**|**Posterior 1/3**|',
    '|---|---|---|',
    '|**General sensation**|**LINGUAL — TRIGEMINAL V3**|**GLOSSOPHARYNGEAL (IX)**|',
    '|**Taste**|**CHORDA TYMPANI — FACIAL (VII)**|**GLOSSOPHARYNGEAL (IX)**|',
    '',
    '- **In front the two modalities SPLIT between two nerves; behind, IX carries both** *(table not in course material)*. **Loss of taste in front localises a facial palsy ABOVE the chorda tympani.**',
    '',
    'Src: L1.2 slides 23–24 (lines 160–175)'
  ].join('\n'),
  qs: ['entqb-thr1-15','entqb-nose1-30','entqb-nose1-31']
},

{
  id: 'pha-11', w: 'must',
  h: 'The laryngeal skeleton, its membranes and its spaces',
  body: [
    '**THE LARYNGEAL BOX: HYOID (suspension) + THYROID + CRICOID + EPIGLOTTIS + paired ARYTENOID, CORNICULATE, CUNEIFORM. The MANDIBLE is no part of it.** **Unpaired: thyroid, cricoid, epiglottis** *(grouping not in course material)*.',
    '',
    '|Cartilage|Features|',
    '|---|---|',
    '|**THYROID**|notch · **laryngeal prominence** · superior and inferior cornua · superior and inferior tubercles · **oblique line**|',
    '|**CRICOID**|**LAMINA behind, ARCH in front — a signet ring, THE ONLY COMPLETE RING IN THE AIRWAY**; facets for the arytenoid and for the thyroid’s inferior horn|',
    '|**ARYTENOID**|**PAIRED, pyramidal. VOCAL PROCESS ANTERIORLY (vocal ligament) · MUSCULAR PROCESS LATERALLY (posterior and lateral cricoarytenoid) · BASE on the cricoid**, a synovial joint|',
    '|**EPIGLOTTIS**|leaf-shaped elastic cartilage; **suprahyoid and infrahyoid parts**; epiglottic tubercle; thyroepiglottic ligament|',
    '',
    '- **The complete ring is drawn, never stated in words** *(phrase not in course material)* — it is what **cricoid pressure** acts on.',
    '',
    '|Group|Membranes and ligaments|',
    '|---|---|',
    '|**EXTRINSIC**|**THYROHYOID MEMBRANE — pierced by the INTERNAL BRANCH OF THE SLN and the superior laryngeal artery** · median + lateral thyrohyoid ligaments · **cartilago triticea** · hyo-epiglottic · cricotracheal|',
    '|**INTRINSIC**|**QUADRANGULAR MEMBRANE → free lower edge = VESTIBULAR LIGAMENT (false cord)** · **CRICOTHYROID LIGAMENT / conus elasticus → free upper edge = VOCAL LIGAMENT (true cord)** · **MEDIAN CRICOTHYROID LIGAMENT = the cricothyroidotomy site** *(not in course material)*|',
    '',
    '- **PRE-EPIGLOTTIC SPACE** — fat-filled; **hyo-epiglottic ligament above, thyroid cartilage and thyrohyoid membrane in front, infrahyoid epiglottis behind**. Continuous with the paraglottic space; no barrier, so **infrahyoid epiglottic tumour enters it early** *(spread not in course material)*.',
    '',
    'Src: L1.1 slides 2–8, 11 (lines 18–92)'
  ].join('\n'),
  qs: ['entqb-thr1-17','entqb-thr1-18','entqb-thr7-333']
},

{
  id: 'pha-12', w: 'must',
  h: 'The laryngeal cavity — three compartments',
  body: [
    '|Compartment|Extent|Contents|',
    '|---|---|---|',
    '|**SUPRAGLOTTIS**|inlet → **floor of the ventricle**|epiglottis · aryepiglottic folds · cuneiform and corniculate tubercles · **VESTIBULE** · **VESTIBULAR (FALSE) FOLDS** with the **RIMA VESTIBULI**|',
    '|**GLOTTIS**|**THE SPACE BETWEEN THE TRUE VOCAL CORDS — the folds plus the RIMA GLOTTIDIS**|anterior and posterior commissures; vocal processes|',
    '|**SUBGLOTTIS**|below the cords → **lower border of cricoid** = **infraglottic space**|continuous with the trachea|',
    '',
    '- **LARYNGEAL VENTRICLE** — the recess **between true and false folds**; its anterior upward extension is the **SACCULE**, origin of a **laryngocele** *(not in course material)*. **The false cords can hide the true cords at laryngoscopy.**',
    '',
    'Src: L1.1 slides 10–11 (lines 77–92)'
  ].join('\n'),
  qs: ['entqb-thr1-32']
},

{
  id: 'pha-13', w: 'must',
  h: 'The vocal fold — its layers, and Reinke’s space',
  body: [
    '**THE VOCAL CORD IS COVERED BY STRATIFIED SQUAMOUS EPITHELIUM — the exception in a tract lined by CILIATED COLUMNAR**, labelled above and below the fold. Squamous because the cord takes friction.',
    '',
    '|Layer|What it is|',
    '|---|---|',
    '|**EPITHELIUM**|stratified squamous, non-keratinizing|',
    '|**SUPERFICIAL lamina propria**|**= SUBEPITHELIAL LAYER = REINKE’S SPACE.** Loose, gelatinous, **avascular, almost no lymphatics**|',
    '|**INTERMEDIATE + DEEP lamina propria**|the **VOCAL LIGAMENT** *(not in course material)*|',
    '|**MUSCULARIS**|**VOCALIS**, medial part of thyroarytenoid|',
    '',
    '- Loose → the **MUCOSAL WAVE**; flooded → **Reinke’s oedema**; nearly avascular → it **delays glottic cancer spread**.',
    '- **The deck draws it and never prints the eponym**; the name is from the hoarseness lecture. The bank spells it *“Reineck’s”* — as printed.',
    '',
    'Src: L1.1 slide 13 (lines 100–108); the eponym from L2, cited only'
  ].join('\n'),
  qs: ['entqb-thr1-23','entqb-thr1-26']
},

{
  id: 'pha-14', w: 'must',
  h: 'Muscles — one abductor, the rest adduct or tense',
  body: [
    '|Intrinsic muscle|Action|',
    '|---|---|',
    '|**POSTERIOR CRICOARYTENOID**|**THE ONLY ABDUCTOR — the only muscle that opens the airway**|',
    '|**LATERAL CRICOARYTENOID**|adductor|',
    '|**TRANSVERSE and OBLIQUE ARYTENOID (interarytenoid)**|adductors — close the posterior glottis|',
    '|**THYROARYTENOID**|adducts, shortens, relaxes|',
    '|**VOCALIS**|**the MEDIAL PART OF THYROARYTENOID**, beside the vocal ligament — fine tension|',
    '|**CRICOTHYROID**|**the TENSOR, sets pitch.** The one intrinsic muscle **NOT** supplied by the recurrent laryngeal nerve|',
    '|**ARYEPIGLOTTIC, THYROEPIGLOTTIC**|sphincter of the inlet|',
    '',
    '- **Defect note:** one option list offers an *“anterior cricoarytenoid muscle”*. **No such muscle exists** — the pair are posterior and lateral. Keyed as printed.',
    '- **Bilateral loss of the posterior cricoarytenoids leaves the cords adducted and the airway shut** — abductor palsy is the emergency.',
    '- **EXTRINSIC muscles move the larynx; elevation in swallowing is the point** *(lists not in course material)*. **ELEVATORS: mylohyoid · digastric · stylohyoid · geniohyoid · thyrohyoid · stylopharyngeus · palatopharyngeus. DEPRESSORS (infrahyoid straps): sternohyoid · sternothyroid · omohyoid.**',
    '- **The larynx is shielded by the MANDIBLE above, STERNUM below, STERNOMASTOIDS laterally, cervical spine behind** — blunt laryngeal injury implies major force.',
    '',
    'Src: L1.1 slide 9 (lines 66–75); L1.2 slide 19 for the extrinsic group'
  ].join('\n'),
  qs: ['entqb-thr1-19','entqb-thr1-24','entep-mfe4-23','entqb-thr7-334']
},

{
  id: 'pha-15', w: 'must',
  h: 'Nerve supply of the larynx — the cords divide everything',
  body: [
    '**ALL FROM THE VAGUS (X). The HYPOGLOSSAL supplies the tongue and no part of the larynx.**',
    '',
    '|Nerve|Motor|Sensory|',
    '|---|---|---|',
    '|**SLN — INTERNAL branch**, piercing the thyrohyoid membrane|**none**|**ABOVE the cords** — supraglottis, epiglottis, vallecula. **Afferent limb of the COUGH REFLEX**|',
    '|**SLN — EXTERNAL branch**|**CRICOTHYROID ONLY**|none|',
    '|**RECURRENT LARYNGEAL NERVE**|**EVERY OTHER INTRINSIC MUSCLE** — thyroarytenoid, posterior and lateral cricoarytenoid, interarytenoid, thyroepiglottic|**BELOW the cords**|',
    '',
    '- **ANASTOMOSIS OF GALEN** — labelled, between the internal SLN and the RLN.',
    '- **LEFT RLN hooks under the AORTIC ARCH, right under the SUBCLAVIAN** — the left is longer and the one at risk in chest surgery *(not in course material)*. The **external SLN** is at risk on the superior thyroid pedicle: flat voice, no high notes.',
    '- **Deck schematic: TRANSECTION → cords apart; TRAUMA WITHOUT TRANSECTION → cords driven together.** **Bilateral complete → cadaveric cords, APHONIA and aspiration; bilateral incomplete → paramedian cords and STRIDOR** *(the named positions appear on no slide; supplied)*.',
    '',
    'Src: L1.1 slides 6, 14–15 (lines 48–54, 110–128)'
  ].join('\n'),
  qs: ['entep-throat-9','entep-throat-25','entep-mfe4-24','entqb-thr1-20','entqb-thr1-29','entqb-thr7-334']
},

{
  id: 'pha-16', w: 'high',
  h: 'Blood supply and lymphatic drainage of the larynx',
  body: [
    '|Vessel|Origin|Runs with|',
    '|---|---|---|',
    '|**SUPERIOR LARYNGEAL ARTERY**|**superior thyroid** (external carotid)|**internal branch of the SLN, through the thyrohyoid membrane**|',
    '|**INFERIOR LARYNGEAL ARTERY**|**inferior thyroid** (thyrocervical trunk)|**recurrent laryngeal nerve**|',
    '',
    '- **Veins follow: superior → superior thyroid → INTERNAL JUGULAR; inferior → inferior thyroid → brachiocephalic** *(not in course material)*.',
    '',
    '**LYMPHATICS — no cached deck covers this; the whole table is supplied** *(not in course material)*:',
    '',
    '|Region|Drains to|Consequence|',
    '|---|---|---|',
    '|**SUPRAGLOTTIS**|**UPPER DEEP CERVICAL — rich and BILATERAL**|nodes early, often both sides; **worst prognosis**|',
    '|**GLOTTIS**|**essentially NONE** — the cords are the watershed|**hoarseness early, nodes late; BEST prognosis**|',
    '|**SUBGLOTTIS**|**LOWER DEEP CERVICAL, pre- and paratracheal, DELPHIAN (prelaryngeal) node**|silent until late; mediastinal spread|',
    '',
    'Src: L1.1 slide 16 (lines 130–140); lymphatics supplied'
  ].join('\n'),
  qs: ['entqb-thr1-33']
},

{
  id: 'pha-17', w: 'high',
  h: 'The infantile larynx',
  body: [
    '|Feature|INFANT|ADULT|',
    '|---|---|---|',
    '|**Size**|**small, absolutely AND relative to body surface area**|larger|',
    '|**Position**|**HIGH — C3–4**|**C6–7** *(adult level not in course material)*|',
    '|**Shape**|**FUNNEL / CONICAL → narrow SUBGLOTTIS**|cylindrical|',
    '|**Narrowest point**|**SUBGLOTTIS at the cricoid — 4.5 mm at birth**|the glottis|',
    '|**Epiglottis**|**LONG, TUBULAR, FOLDED ON ITSELF — OMEGA-shaped**|flat, broad|',
    '|**Arytenoids / cords**|**BIG arytenoids, SHORT cords**|proportionate|',
    '|**Cartilage**|**SOFTER**|firm|',
    '|**Mucosa**|**LOOSELY attached to submucosa → oedema forms fast**|firmly attached|',
    '|**Reflexes**|**premature neuromuscular control → cord SPASM; premature cough reflex → FOREIGN-BODY ASPIRATION**|mature|',
    '',
    '- **POISEUILLE’S LAW:** narrow subglottis + loose submucosa → **1 mm of oedema takes a large fraction of the lumen**.',
    '- **Defect note:** one key prints the cricoid diameter as **3.5–4.5 mm**; the paediatric lecture prints **4.5 mm**. Keyed as printed.',
    '',
    'Src: L12 and L6, cited only — both anatomy decks omit the infant larynx entirely'
  ].join('\n'),
  qs: ['entep-ear-51','entep-throat-19','entep-mfe4-11']
}

    ]
  }
};
