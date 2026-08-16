/* malignant — "Malignant Disease", Paediatrics. Written 2026-08-16 under
   START-HERE.md §14 (slide-density revision notes) + §14.3a (layout), and
   content\peds\theory-plan.md, whose ONE local difference is that PAEDIATRICS
   HAS NO 3,000-WORD CAP: budget = max(lecture words, 25 x questions, 600).
   Shape copied from neonatal.draft.js and haematology.draft.js.

   DECK LABELS USED IN THE Src LINES:
     L48 = 48)Leukemias.txt — Associate Prof. Maha Youssef, Haematology
           Oncology Unit, Paediatric Department, Alexandria University.
           66 PDF pages. ⚠️ ITS TITLE SLIDE READS "CAR T- CELLS", NOT
           "Leukemias" — the file is named for its subject and the deck is
           named for its last third. Two topics end to end: acute leukaemia
           (pp.3–44) and the new era of cancer therapy / CAR-T (pp.46–64).
     L49 = 49)Rhabdomyoma and Brain Tumors Overview.txt — Dr Maha Youssef.
           17 PDF pages. A slide-generator overview deck, not a lecture in the
           same sense: every page is a heading plus two or three sentences of
           general prose. See FINDING 2.
   Both are born-digital PDFs in Semester 8\Pedo\Theoritical\PPT\, scanned
   through CamScanner (its watermark is on every page). Neither is a .pptx
   conversion — checked against the 14-file .pptx list, neither is on it.

   ⚠️ PAGE NUMBERING. Split page N = PDF page N for both. `pdftotext`'s
   trailing form feed makes the cached split report ONE PAGE MORE than each
   deck has — 67 against 66, and 18 against 17 — so
   `visual-read-triage.md`'s "L48 p67" and "L49 p18" DO NOT EXIST. Confirmed
   against `pdfinfo`, which reports 66 and 17.

   ============================================================================
   ⚠️⚠️ FINDING 0 — SPLIT PROPOSAL. MEASURED, NOT FORECAST. See the outcome
   block at the foot of this header for the numbers this rests on.
   ============================================================================
   Written as ONE file, sections in deck order — all of L48 first, then all of
   L49 — so a CONTIGUOUS split needs no rewriting and no reordering.

   MEASURED (see the outcome block), the whole chapter is 3,677 body words =
   15.3 pp at ÷240, comfortably PAST the ~13 pp hard shape. THE SPLIT IS
   REQUIRED, not marginal. The two-way seam:

     · `malignant`       = mal-1 … mal-15 — LEUKAEMIA (L48), from the
                           definition through CAR-T. 2,574 words = 10.7 pp.
     · `malignant-solid` = mal-16 … mal-22 — RHABDOMYOMA, TUBEROUS SCLEROSIS
                           AND BRAIN TUMOURS (L49). 1,103 words = 4.6 pp.

   ⚠️ THE SEAM IS ALSO A DECK BOUNDARY AND A SUBJECT BOUNDARY. No section past
   mal-15 cites L48 and none before mal-16 cites L49. The only links across are
   *italic* cross-references that POINT and do not depend — mal-3 → mal-18 for
   tuberous sclerosis, mal-7 → mal-19 for raised intracranial pressure.

   ⚠️ A THREE-WAY SPLIT IS ALSO VIABLE AND IS OFFERED WITH ITS MEASUREMENTS,
   because the numbers permit it where an earlier estimate said they would not:
     · mal-1 … mal-11 (what leukaemia is, how it presents, how it is
       diagnosed) = 1,720 words = 7.2 pp
     · mal-12 … mal-15 (treatment, the emergencies, CAR-T) = 854 = 3.6 pp
     · mal-16 … mal-22 = 1,103 = 4.6 pp
   RECOMMENDED AGAINST, for one content reason rather than an arithmetic one:
   mal-11 is Down-syndrome AML and is entirely a TREATMENT paragraph — less
   intensive chemotherapy, no maintenance, no cranial radiation, no transplant.
   Cutting between mal-11 and mal-12 puts the one treatment L48 actually prints
   in the diagnostic chapter and the supplied treatment in the other. Two units
   at 10.7 and 4.6 pp both clear the shape with margin, so the second cut buys
   nothing. Recorded so the option is visible rather than silently foreclosed.

   ⚠️ ONE CHAPTER IS NOT AN OPTION HERE, and the earlier chapters make the case:
   15.3 pp is over the shape by more than `respiratory`'s asthma unit was, and
   that one is a single disease where this is two unrelated ones. But if the hub
   does decline the split, nothing needs editing — the file is already one
   chapter and the seam is only a comment.

   ⚠️ THE SPLIT IS VACUOUS FOR QUESTION REASSIGNMENT. ZERO questions are filed
   with chapter:'malignant' today — verified by grepping app\data\questions.peds.js,
   which returns 0 — so `qs: []` on all 22 sections, §14.5's "verify no question
   tests it" is trivially satisfied, and the theory-plan's "reassign questions
   from the theory links" step has nothing to move. Said explicitly rather than
   reported as a clean mapping of an empty set.

   ============================================================================
   ⚠️⚠️ FINDING 1 — THE VISUAL READ RECOVERED NOTHING, AND THAT IS THE FINDING.
   THIS IS THE FIRST PAEDIATRICS CHAPTER WHERE THE BLANK PAGES ARE GENUINELY
   BLANK. It was run in full anyway, and the negative is evidenced.
   ============================================================================
   Work in C:\Users\Alfa388\AppData\Local\Temp\hbth1\malig\.

   BOTH DECKS WERE RENDERED IN FULL — all 66 pages of L48 and all 17 of L49, at
   110 dpi, as 22 FOUR-UP CONTACT SHEETS, and every sheet was read. Full render
   rather than triage because 66 + 17 pages is only 22 reads, and because the
   brief's own warning — the blank list misses a full-page figure carrying a
   caption — is unanswerable by any filter over the extracted text.

   WHAT THE BLANK PAGES ACTUALLY ARE. L48 has 17 zero-word pages (p2, p8, p20,
   p21, p45, p47, p52, p53, p55, p57, p58, p60, p62, p63, p65, p66) plus two
   near-blank titled ones (p18 "ACUTE LYMPHOBLASTIC LEUKEMIA (ALL)", 4 words;
   p41 "FLT 3 mutations", 3 words). Rendered and looked at:
     · p2 is DECORATIVE COVER ART — a stock "LEUKAMIA / Medical images and
       icons" graphic of stick figures with a stretcher. No teaching content.
     · p8, p20, p21, p45, p47, p52, p53, p55, p57, p58, p60, p62, p63, p65 and
       p66 are EMPTY WHITE SLIDES carrying nothing but the deck's red blood-cell
       border and the CamScanner watermark. Fifteen of them. They are the
       artefact of scanning a deck whose builds left blank frames, not lost
       figures.
     · p18 is a SECTION DIVIDER — the ALL banner and a clip-art figure.
     · ⚠️ p41 IS A TITLE WITH AN EMPTY BODY. "FLT 3 mutations" is printed as a
       heading and the slide beneath it is blank. This is the one page where a
       render was genuinely required to establish a negative: the title promises
       a molecular topic and the deck delivers none of it. Recorded in mal-10
       as a named gap, not silently dropped.
   L49 has ONE near-blank page, p18, which does not exist (the form feed). Every
   one of its 17 real pages extracts its full text; three of them (p7, p8, p12)
   render the text inside SmartArt shapes that `pdftotext` interleaves badly,
   and the render was what let those three be read in the right order.

   THE CAPTION TRAP THE BRIEF WARNS OF WAS TESTED FOR AND DOES NOT FIRE HERE.
   Every L48 page under 45 words was rendered: pp.1, 4, 5, 6, 7, 9, 12, 13, 14,
   15, 16, 17, 19, 22, 26, 30, 34, 37, 38, 40, 43, 48, 50, 59, 64. Not one is a
   figure with a caption; every one is a genuinely short slide whose text
   extracts complete. The only true images in the whole of L48 are p27's
   meninges sketch (decorative, beside the CNS-involvement text), p32's
   pelvis-and-femur radiograph (the metaphyseal changes the same slide lists in
   words) and pp.34–35's specimen-tube clip art.

   ⚠️ SO THE PLAN'S 24 % BLANK SHARE FOR THIS CHAPTER IS TRUE AND MEANS NOTHING.
   Blank-page share predicted content loss in `haematology`, `cardiac`,
   `gastroenterology` and `neonatal` and predicts none here, because L48's
   blanks are empty slides rather than un-extractable ones. **The share is a
   reason to look, never evidence of what will be found** — and the only way to
   tell the two apart is to render. Reported so the next agent does not read a
   high blank share as a promise any more than a low one as clearance.

   ============================================================================
   FINDING 2 — ⚠️ L49 IS AN OVERVIEW DECK, NOT A LECTURE, AND ITS THINNESS IS
   THE CENTRAL CONSTRAINT ON THE SOLID-TUMOUR HALF OF THIS CHAPTER.
   ============================================================================
   17 slides, 1,269 cached words, of which 159 are its own contents index and
   32 its title. Its content pages carry two to five headings with one sentence
   each, in the register of a generated summary: "BRAIN TUMORS CAN BE BENIGN OR
   MALIGNANT", "PROGNOSIS VARIES GREATLY DEPENDING ON TUMOR TYPE, GRADE, AND
   TREATMENT EFFECTIVENESS". Three of its pages (p14 case studies, p16 closing,
   p17 key takeaways) restate earlier pages and add nothing.

   WHAT IT NAMES AND DOES NOT DEVELOP: gliomas, meningiomas, medulloblastoma,
   ependymoma, glioblastoma, tuberous sclerosis. Six named entities, no
   epidemiology, no grading, no age distribution, no posterior-fossa anatomy,
   no hydrocephalus, no eponymous sign, no number of any kind anywhere in the
   deck except "under 5 years of age".

   ⚠️ AND THE TITLE IS A TRAP. The deck teaches RHABDOMYOMA — the rare BENIGN
   striated-muscle tumour of the heart — and never mentions RHABDOMYOSARCOMA,
   which is a different disease and the commonest soft-tissue sarcoma of
   childhood. `rhabdomyo` returns hits in exactly two cached decks: this one,
   and `39)Hematuria`, where "rhabdomyosarcoma" is one cell of a haematuria
   cause tree (`renal`'s). The caller's brief names rhabdomyosarcoma as
   probably being in deck 49; it is not. One tagged discriminating line is
   written in mal-17 so a reader cannot leave with the two conflated, and the
   correction is reported here rather than made quietly.

   ============================================================================
   FINDING 3 — THE CACHE IS COMPLETE, MEASURED, NOT ASSUMED (§14 / theory-plan).
   ============================================================================
   Both sources were re-extracted with `pdftotext -layout` and vocabulary-diffed
   against the cache:
     L48 PDF-only vocabulary 0 of 789 tokens (0.0 %)
     L49 PDF-only 1 of 385 (0.3 %) — "tuberousfollow", a layout artefact where
         the -layout pass merges two SmartArt boxes on p12. Not a word.
   Cache-only tokens are the injected SOURCE header in both cases (source,
   semester, pedo, theoritical, ppt, pdf). Node word counts: cache 2,169 /
   1,269; layout re-extraction 2,131 / 1,260 — the difference is form-feed
   handling, not content.
   THE `14) Puberty` FAILURE MODE DOES NOT REACH HERE, and neither does the
   different failure mode of FINDING 1 in the other chapters: the cache is
   complete as text AND the pictures hold nothing.

   ============================================================================
   FINDING 4 — TWO INTERNAL DEFECTS IN L48, RECORDED AND NOT "CORRECTED",
   per CLAUDE.md §4.
   ============================================================================
   1. ⚠️ THE PERCENTAGES DO NOT ADD UP. p4 states acute leukaemias are 97 % of
      childhood leukaemias and p6 that chronic are 3 %. p5 then lists ALL 75 %,
      AML 20 %, AUL <0.5 % — which sums to 95.5 %, leaving AMLL (printed with
      no figure) to carry the remaining ~1.5 % if the percentages are of ALL
      childhood leukaemias, or the whole set to be short if they are of the
      acute ones only. The deck never says which denominator it means. Written
      as printed in mal-1, with the ambiguity noted in one line.
   2. ⚠️ THE DECK IS TITLED "CAR T- CELLS" AND IS 70 % ACUTE LEUKAEMIA. Its
      first 44 pages never mention CAR-T and its last 19 never return to ALL
      except to say CAR therapy was developed for it. Not a content error, but
      it is why a reader searching the file list for a leukaemia lecture can
      miss it, and it is worth one line in a hub note.

   ============================================================================
   FINDING 5 — ⚠️ THE DECKS TEACH NO TREATMENT OF LEUKAEMIA AT ALL. This is the
   largest single gap in the chapter and it is answered, not declared.
   ============================================================================
   L48 gives 66 pages on what leukaemia is, who gets it, how it presents and how
   it is diagnosed, and then stops. Its ONLY therapeutic content is the
   Down-syndrome AML paragraph (p43) and the CAR-T section. Greped across all 64
   cached paediatrics decks before this was called a gap:
     `induction` → 13) Short stature, 14) Puberty, 26)allergy_ — all endocrine
        or immunological senses of the word, none oncological.
     `vincristine` `asparaginase` `methotrexate` `minimal residual`
        `risk strat` `tumor lysis` `tumour lysis` `rasburicase` `allopurinol`
        `febrile neutropen` `neutropenic` → ZERO hits corpus-wide.
     `intrathecal` → L48 only, in the Down-AML paragraph.
     `remission` → L48, plus asthma, haematuria and haemorrhagic-disorders
        decks in unrelated senses.
   So the treatment of the commonest cancer of childhood is nowhere in the
   paediatrics corpus. Per CLAUDE.md §4 — a gap is ANSWERED, not declared — the
   phases, the CNS-directed component, the duration, the risk stratification and
   the outcome figures are supplied in mal-12 and the oncological emergencies in
   mal-13, all tagged. Neither section announces the gap and stops.

   ⚠️ SEVEN GAPS FILLED AND TAGGED, each greped corpus-wide first:
     · TREATMENT AND RISK STRATIFICATION OF ALL — above. mal-12.
     · TUMOUR LYSIS SYNDROME, FEBRILE NEUTROPENIA, HYPERLEUKOCYTOSIS. The deck
       prints leukostasis (p28) and the mediastinal mass with SVC syndrome
       (p26), so those two clauses are SOURCED and are marked as such inside a
       section that is otherwise supplied. mal-13.
     · TUBEROUS SCLEROSIS BEYOND THE ASSOCIATION. L49 names it six times and
       gives "skin lesions, seizures, and developmental delays" once. `ash leaf`
       returns one hit corpus-wide, in `10) new Seizures…` (a photograph, read
       and reported by `neonatal`); `shagreen`, `angiofibroma`, `TSC1`, `TSC2`
       and `subependymal` return ZERO. The diagnostic features are supplied.
       mal-18.
     · MEDULLOBLASTOMA BEYOND THE NAME. L49 names it twice (p8 "pediatric brain
       tumors… medulloblastomas and ependymomas", p14 a case-study caption);
       `55) Motor_Disorders` names it once, inside its ataxia cause list. No
       deck states its site, its age or its behaviour. Supplied. mal-20.
     · PAEDIATRIC BRAIN TUMOURS AS A GROUP — that they are the commonest SOLID
       tumour of childhood and predominantly infratentorial. L49 says only that
       brain tumours "vary widely". Supplied. mal-19.
     · RHABDOMYOMA VERSUS RHABDOMYOSARCOMA — FINDING 2. One line. mal-17.
     · WILMS TUMOUR AND NEUROBLASTOMA — see the hub note below. mal-22.

   ⚠️⚠️ ONE SECTION IS A HUB DECISION AND IS FLAGGED RATHER THAN ASSUMED:
   mal-22, THE ABDOMINAL-MASS DIFFERENTIAL (Wilms tumour vs neuroblastoma),
   146 words measured, entirely tagged.
   THE CASE FOR IT. `renal`'s agent found that `wilms` and `nephroblastoma`
   return hits in exactly one cached deck — its own, `39)Hematuria`, as a single
   cell of a cause tree — and recorded in its header that it was deliberately
   NOT deferring the tumour here, because deferring a fact to a chapter whose
   decks cannot deliver it would make the register a record of fiction. It asked
   the hub to place it. `neuroblastoma` and `retinoblastoma` return ZERO hits
   corpus-wide. This chapter is titled "Malignant Disease" and would otherwise
   contain no childhood solid tumour except a benign one.
   THE CASE AGAINST IT. It rests on no deck at all, and no register row promises
   it to me.
   WHAT I DID. Written as ONE self-contained section at the end, so it can be
   deleted with a single cut and nothing else moves. It is NOT counted as
   discharging `renal`'s row, because `renal` opened no row. Reported, not
   assumed.

   ⚠️ TWO DEFERRAL ROWS RECEIVED, both from the paediatrics drafts rather than
   from §14.5's register (which is ENT-only — greped, no row anywhere in
   START-HERE.md is addressed to `malignant`):
     · `haematology` → ACUTE LEUKAEMIA, MYELODYSPLASIA AND MARROW INFILTRATION
       AS DISEASES. Its row states that L44 and L47 name them as causes of
       marrow failure and thrombocytopenia and that L44's Fanconi and
       Shwachman–Diamond slides name the MDS/AML termination, all of which it
       KEPT. ✅ DELIVERED: acute leukaemia end to end, mal-1 … mal-15.
       ⚠️ DELIVERED SHORT ON ONE ITEM, and the shortfall is named rather than
       filled: MYELODYSPLASTIC SYNDROME AS A DISEASE IS NOT IN L48. `myelodysp`
       and `MDS` return hits in `44)BM FAILURE` only — i.e. in the DEFERRING
       chapter, where haem-24 and haem-25 already print the AML/MDS termination.
       L48 prints neither term. The row is therefore deliverable in its
       leukaemia and marrow-infiltration halves and not in its MDS half, and
       nothing is manufactured to close it. MARROW INFILTRATION is delivered as
       the mechanism, in mal-5 and mal-9.
       ⚠️ The row's verification clause is EXACT and worth recording as such:
       it says L48 "carries pancytopenia, hypocellular marrow and the
       predisposition list", and p23 prints precisely "Pancytopenia or single
       cytopenia / Hypocellular bone marrow / No hepatosplenomegaly" while p13
       prints the eight-condition predisposition list. Checked against the deck,
       not against the row.
     · `neurological` → POSTERIOR FOSSA TUMOURS AND MEDULLOBLASTOMA, AND
       TUBEROUS SCLEROSIS AS A NEUROCUTANEOUS ENTITY. ✅ DELIVERED: mal-18
       (tuberous sclerosis), mal-19 and mal-20 (brain tumours, medulloblastoma).
       ⚠️ THE ROW OVER-STATES ITS RECEIVING DECK, reported with evidence per
       §14.5. It says L49 "carries medulloblastoma and tuberous sclerosis",
       which is true of the NAMES and of nothing else: L49 prints
       "medulloblastoma" twice with no site, age, grade or behaviour, and
       "tuberous sclerosis" six times always as the association of cardiac
       rhabdomyoma. POSTERIOR FOSSA appears NOWHERE in L49 — the phrase's only
       corpus hit is in `55) Motor_Disorders`, the deferring chapter's own deck.
       So the row is delivered by supplying the content and tagging it, and the
       mis-statement is on the record rather than hidden inside a tick.

   ⚠️ CROSS-REFERENCED, NOT RESTATED — the four places this chapter touches
   `haematology` and `haem-bleeding`, which are already merged:
     · MARROW FAILURE, APLASTIC ANAEMIA AND PANCYTOPENIA. L48 p23's 1–2 % of
       ALL presenting as apparent aplastic anaemia IS this chapter's fact and is
       written in mal-5. The DISEASES it is mistaken for are not: haem-21
       (definitions), haem-22 (aplastic anaemia), haem-23 (red cell aplasia),
       haem-26 (the four mechanisms of pancytopenia, whose "BM infiltration →
       malignancy" row is the leukaemia one). One *italic* line points there.
     · FANCONI ANAEMIA, SHWACHMAN–DIAMOND AND DIAMOND–BLACKFAN. All three are
       items of L48 p13's predisposition list and all three are written as
       DISEASES in haem-24, haem-25 and haem-23. mal-3 keeps them as list items
       with the chromosomal risk figures L48 alone prints, and points across.
     · THROMBOCYTOPENIA AS A SUBJECT. mal-5 and mal-9 carry the leukaemic
       numbers (92 % below normal, serious haemorrhage under 20,000/mm³); the
       causes tree and the megakaryocyte axis are haem-32.
     · DOWN SYNDROME AS A SYNDROME. `genetics` owns it; mal-3 and mal-11 keep
       only the leukaemia risk (1 in 95 under 10 years) and the M7/GATA1
       account, which are L48's own.

   ============================================================================
   BUDGET — §14.1, counted from disk with node
   `String(s).split(/\s+/).filter(Boolean).length`, the project convention
   (NOT `wc -w`, which reads 3–6 % low on these files).
   ============================================================================
     Per file as cached, SOURCE header line included:
       L48 2,169 · L49 1,269 · naive sum 3,438
       = exactly theory-plan.md's published ceiling, to the word.

     TERM 1, THE HONEST UNION. No line-range split with another chapter is
     needed: no other paediatrics draft draws on either deck, verified by
     grepping all fifteen written drafts — every other mention of L48 or L49 is
     a DEFERRAL TO here or a decision NOT to defer, never a claim on the words.
       L48 2,169 − 3 SOURCE header − 16 title/author card (p1)
             − 65 the "Discovery of Leukemia" history slide (p3), dropped per
               §14.2's drop list as a history-of-the-specialty aside
             − 20 the Pizzo/Poplack bibliographic attribution under the
               presenting-features table (p25)                        = 2,065
       L49 1,269 − 7 SOURCE − 32 title card (p1)
             − 159 the p2 "OVERVIEW" contents index, an ILO list for the body
               below it; counting it bills the same content twice inside one
               file, per §14.1
             − 28 the p16 "join us in understanding" closing slide     = 1,043
                                                                        -----
     TERM 1 = 3,108.
     TERM 2 = 25 × 0 linked questions = 0. ZERO questions are filed with
       chapter:'malignant', so §14.2's second term contributes NOTHING and the
       LECTURE side of the coverage floor governs entirely. `qs: []` on every
       section. A reconciliation pass is owed when the paediatrics banks close.
     max(3,108 · 0 · 600) = 3,108. TERM 1 GOVERNS.

     ⚠️ THE PUBLISHED CEILING IS 330 WORDS HIGH FOR THIS CHAPTER, WHICH IS THE
     OPPOSITE OF THE PATTERN. `haematology`, `perinatal` and `neonatal` all came
     in OVER their published ceilings because the ceiling counts only what
     extracts and their decks were pictures. Here the visual read recovered
     nothing (FINDING 1) and the deductions above are all real, so the honest
     union is BELOW the published figure rather than above it. Both directions
     exist; neither is the default.

     Decks CITED BUT NOT COUNTED, per §14.1: `44)BM FAILURE` and
     `47)Hemorrhagic disorders` (pointed at from mal-3, mal-5 and mal-9, written
     and counted in `haematology`); `39)Hematuria` (the one Wilms cell,
     `renal`'s); `55) Motor_Disorders` (medulloblastoma as one item of an ataxia
     list, `neurological`'s); `6) Genetically determined disease_` (Down
     syndrome, `genetics`'s).

   ⚠️ ENTITY FLOOR AND OVERRUN, COUNTED BEFORE WRITING (§14.1 rule 3, with the
   `haematology` correction that a framework slide costs ~85 words in this
   format, and `neonatal`'s correction that the entity/framework overlap is
   nearer one THIRD than one half).
   THIRTEEN DEVELOPED ENTITIES at ~90 w: 1 acute leukaemia as a category ·
   2 ALL · 3 AML · 4 Ph1-positive CML · 5 JMML · 6 Down-syndrome AML ·
   7 CAR-T therapy · 8 cardiac rhabdomyoma · 9 extracardiac rhabdomyoma ·
   10 fetal rhabdomyoma · 11 tuberous sclerosis · 12 brain tumours as a
   category · 13 medulloblastoma = ~1,170.
   FRAMEWORK SLIDES NOT INSIDE AN ENTITY, costed one by one at ~85: the
   definition · the type breakdown · the chronic types · the acute-vs-chronic
   grid · incidence · the aetiology list · genetic considerations · the
   chromosomal risk table · the predisposition list · the somatic-alteration
   line · FAB-vs-WHO · FAB detail · WHO detail · general systemic effects · the
   marrow-invasion triad · the aplastic-presentation caveat · the
   presenting-features frequency table · lymphoid infiltration · CNS
   involvement · testicular and ovarian · renal · GI · bone and joint ·
   skin/cardiac/lung · the blood count · the blood smear · the bone marrow ·
   the bases of classification · the lymphoblast/myeloblast grid · the
   immunophenotype tree · the new-era slide · checkpoint inhibitors · the CAR-T
   approvals · making CAR-T · the drawbacks · the rhabdomyoma overview · the
   variants · the clinical features · the diagnostic techniques · the brain
   tumour overview grid · the types · the symptoms · the brain tumour
   diagnostics · the two treatment slides · the comparative grid · the prognosis
   slide = 46 × 85 = ~3,910, of which roughly a third sits INSIDE the entity
   blocks above and is not additive → ~2,600 additive. ⚠️ BUT L49's fifteen
   framework slides are worth nearer 35 words apiece than 85, because each is a
   heading plus one generic sentence (FINDING 2) — subtracting 15 × 50 = 750
   gives ~1,850.
   COMPARISON GRIDS AT ROWS × COLUMNS: acute vs chronic (8×2) · chromosomal risk
   (3×3) · presenting features (13×2) · lymphoblast vs myeloblast (10×2) ·
   FAB vs WHO (5×2) · rhabdomyoma vs brain tumour (5×2) · tumour lysis (4×2) ·
   Wilms vs neuroblastoma (7×2) = ~130 cells at ~4 words = ~520, all of it
   inside the sections costed above.
   TAGGED SUPPLEMENTS, costed separately because they rest on no deck: ALL
   treatment ~200 · oncological emergencies ~180 · tuberous sclerosis features
   ~70 · medulloblastoma ~70 · paediatric brain tumours as a group ~40 ·
   rhabdomyosarcoma one-liner ~25 · the abdominal-mass differential ~180
   = ~765.
   PREDICTION MADE BEFORE WRITING: 3,300–3,700 body words over ~22 sections,
   ~14–15 printed pages, requiring the two-way split of FINDING 0.
   The prediction is stated here in advance and compared with the measurement in
   the outcome block, never fitted to it.

   ⚠️ SIX OMISSIONS, each a decision on the record:
     1. THE DISCOVERY-OF-LEUKAEMIA SLIDE (L48 p3, 65 words) — Craigie and
        Bennett 1845, "leukocythemia", Virchow, "Weisses Blut". A
        history-of-the-specialty aside, §14.2's drop list, and no fact in it
        changes an answer. Deducted from TERM 1 rather than counted and cut.
     2. TITLE, AUTHOR, CONTENTS-INDEX AND CLOSING SLIDES of both decks, and
        L49's p14 "case studies" and p17 "key takeaways", which restate pages
        3–15 verbatim in shorter form.
     3. THE PIZZO/POPLACK CITATION STRING under the presenting-features table.
        The table is kept in full; the volume-and-publisher string is not, per
        the `neonatal` precedent on bibliographic strings.
     4. L49's PROGNOSIS SLIDE BEYOND ITS TWO OPERATIVE CLAUSES. "Effective
        treatment is crucial for improving prognosis" and "research is
        continuously evolving" are not facts. The two that are — rhabdomyoma
        does well after surgery with low recurrence; brain tumour prognosis
        turns on type, grade and treatment — are kept in mal-17 and mal-20.
     5. L49's p7 SEVEN-BOX SmartArt ("Definition / Types / Effects / Symptoms /
        Diagnosis / Treatment / Importance of Early Detection") as a structure.
        Every one of its seven boxes is restated on its own later slide, and
        those are written. Keeping the box grid as well would duplicate the
        whole of mal-19 and mal-20 in miniature.
     6. THE INTERNAL MECHANICS OF CAR-T BEYOND THE DECK'S OWN ACCOUNT — the
        costimulatory-domain generations, the manufacturing timeline, the
        lymphodepletion regimen. The deck goes as far as "signalling and
        costimulatory domains" and this chapter stops where it stops.

   ============================================================================
   ✅ TRUE MEASUREMENT — node `String(s.body).split(/\s+/).filter(Boolean).length`
   over `body` ONLY, run against the file ON DISK as the genuinely LAST action,
   after the final edit. WRITING THIS BLOCK IS THE ONLY EDIT SINCE, AND IT
   TOUCHES NOTHING BUT THIS COMMENT.

   ⚠️ NO OUTCOME BLOCK WAS PRE-WRITTEN. Until this counter ran the placeholder
   here read "NOT YET MEASURED", and the prediction under BUDGET was written
   before the sections and is left exactly as it stood.
   ============================================================================

       body 3,677 words over 22 sections · intro 45 words · 0 questions filed
       weights: 16 `must`, 6 `high`, 0 `know` · 9 tables, 73 table rows
       0 flows · 49 `###` sub-headings · 22 of 22 `Src:` lines
       `qs: []` on all 22 · parse: `new Function(src)` clean
       0 unanchored lead-bold lines of 149

     mal-1  132 · mal-2  173 · mal-3  128 · mal-4   98 · mal-5  176
     mal-6  106 · mal-7  179 · mal-8  250 · mal-9  204 · mal-10 123
     mal-11 151 · mal-12 291 · mal-13 260 · mal-14 105 · mal-15 198
     mal-16 140 · mal-17 175 · mal-18 178 · mal-19 178 · mal-20 220
     mal-21  66 · mal-22 146

   THE TWO SPLIT UNITS, MEASURED (FINDING 0):
     · `malignant`       mal-1 … mal-15 = 2,574 words = 10.7 pp at ÷240
     · `malignant-solid` mal-16 … mal-22 = 1,103 words =  4.6 pp
     Sum 3,677 = 15.3 pp UNSPLIT, 2.3 pp past the ~13 pp hard shape. Both split
     units clear it — by 2.3 and 8.4 pages.

   AGAINST THE BANDS:
     · vs TERM 1, the honest union of 3,108: **3,677 = 118.3 %**, 569 words
       over. **That IS past §14.1's 10 % trigger, so the page test is owed and
       was run** — 15.3 pp unsplit fails the shape, 10.7 and 4.6 pp split pass
       it. The overrun is resolved by the split, not by compression, which is
       the theory-plan's own instruction for this case.
     · vs theory-plan.md's published ceiling of 3,438: **107.0 %**, 239 over.
     · vs the caller's stated working band of 2,500–3,500: **5.1 % over the
       top of it**, and itemised below rather than trimmed to fit.
     · **⚠️ WHERE THE OVERRUN IS, MEASURED RATHER THAN ARGUED.** The sections
       resting wholly on the decks total **2,694 = 86.7 % of TERM 1** — well
       under budget, in line with every other paediatrics chapter. The
       **tagged, supplied content totals 983**: mal-12 (291), mal-13 (260 —
       counted whole as supplied although its SVC, leukostasis and chloroma
       clauses are sourced to L48, so this figure is conservative), mal-22
       (146), mal-18's diagnostic features (91), mal-20's medulloblastoma (89),
       mal-17's rhabdomyosarcoma contrast (64) and mal-19's two omitted facts
       (42). **2,694 + 983 = 3,677.** The deck side is under budget and the
       supplied side is the whole of the overrun.
     · vs the 74 % landing point the theory-plan gives as its working estimate:
       74 % of 3,438 is ~2,544, and the deck-based 2,694 lands at 78 % — close
       to it. **The chapters that landed at 74 % had decks that taught their own
       subject. This one has a 66-page leukaemia lecture that never treats
       leukaemia** (FINDING 5), so the estimate holds for the half of this
       chapter it was derived from and cannot cover the half that had to be
       supplied.
     · vs my own pre-writing prediction of 3,300–3,700 over ~22 sections and
       ~14–15 pp: **3,677 over 22 sections at 15.3 pp — inside the predicted
       band, at its top, and the section count exact.** The page estimate was
       0.3 pp low. The one correction the prediction contains is worth carrying
       forward: **a generated overview deck's slides cost ~35 words apiece in
       this format, not the ~85 of a real lecture slide**, because a slide
       reading "BRAIN TUMORS CAN BE BENIGN OR MALIGNANT" becomes a table cell.
       Costing L49's fifteen at 85 would have predicted ~4,400.

   ⚠️ WHAT A FURTHER 400 WORDS WOULD HAVE COST, itemised per §14.1 rather than
   quietly cut. A redundancy pass was run before the final measurement and took
   108 words with no fact removed: four over-long meta preambles (mal-12,
   mal-18, mal-19, mal-22), one sentence in mal-2 that restated its own heading,
   and one line in mal-20 that described what L49 does not say instead of
   citing it, which moved to the `Src:` line. Past that, the next 400 words are
   content: the FAB L1/L2/L3 and M0–M7 subtypes named individually (~90, and the
   deck prints only the counts "three" and "eight", so it would be entirely
   supplied), the cytogenetic risk groups of ALL beyond the four already in
   mal-12's table (~110, supplied), and **Hodgkin and non-Hodgkin lymphoma as
   entities (~200, supplied — and NO cached deck names either: `hodgkin` returns
   ZERO corpus-wide and `lymphoma` appears only as a CAR-T indication in L48 and
   as an ataxia-telangiectasia risk in `55) Motor_Disorders`)**. All three were
   declined as too far from the decks, and **the lymphoma absence is reported to
   the hub as a corpus gap** rather than filled here on my own authority — it is
   a larger decision than mal-22 and belongs with whoever rules on that one.
   STOPPED AT THE FLOOR, per §14.1.

   ⚠️ THREE SECTIONS ARE OVERSIZED AND EACH IS DELIBERATE.
     · mal-12 at 291, the treatment of ALL — the chapter's largest supplied
       block. Splitting it would put the risk stratification in one section and
       the therapy it decides in another. If the hub wants it halved the clean
       cut is after the risk-group table, the phases becoming `mal-12b`;
       nothing depends across that line.
     · mal-13 at 260, the oncological emergencies — four emergencies, of which
       tumour lysis carries its own four-row biochemistry table. It is the one
       section in the chapter that changes what a house officer does at 3 a.m.
     · mal-8 at 250, extramedullary invasion — eight organ systems from one run
       of five slides. It is long because the deck is, and every figure in it
       (10–23 %, 13 months, 10–33 %, 25 %, under 5 %) is examinable.
*/

var THEORY_DRAFT = {

  'malignant': {

    intro: 'Two decks, unevenly matched: a full leukaemia lecture and a seventeen-slide overview of rhabdomyoma and brain tumours. Expect ALL end to end — who gets it, where it hides outside the marrow, what the marrow shows — then benign against malignant on the solid side.',

    sections: [

{
  id: 'mal-1', w: 'must',
  h: 'What leukaemia is, the types, and acute against chronic',
  body: [
    '**Definition:** a **clonal expansion and arrest at a specific stage** of normal **myeloid or lymphoid haematopoiesis**.',
    '',
    '### The types, by share of all childhood leukaemias',
    '- **Acute leukaemias — 97 %.** **ALL 75 %** · **AML 20 %**, also called **acute non-lymphocytic leukaemia (ANLL)** · **acute undifferentiated leukaemia (AUL) under 0.5 %** · **acute mixed-lineage leukaemia (AMLL)**, no figure given.',
    '- **Chronic myeloid leukaemias — 3 %.** **Philadelphia chromosome positive (Ph1-positive) CML** · **juvenile myelomonocytic leukaemia (JMML)**.',
    '',
    '*The named percentages sum to 95.5 % and the deck never states whether they are shares of all childhood leukaemias or of the acute ones alone. Written as printed.*',
    '',
    '### Acute against chronic',
    '',
    '|Characteristic|Acute leukaemia|Chronic leukaemia|',
    '|---|---|---|',
    '|**Onset**|**Abrupt**|**Subtle**|',
    '|**Morbidity**|**Months**|**Years**|',
    '|**Age**|**All**|**Adult**|',
    '|**WBCs**|**Variable**|**Elevated**|',
    '|**Predominant cells**|**Blasts and other immature white cells**|**Mature**|',
    '|**Anaemia, thrombocytopenia**|**Present**|**Variable**|',
    '|**Neutropenia**|**Present**|**Variable**|',
    '|**Organomegaly**|**Mild**|**MARKED**|',
    '',
    'Src: L48 pp.4–7'
  ].join('\n'),
  qs: []
},

{
  id: 'mal-2', w: 'must',
  h: 'Incidence and aetiology',
  body: [
    '### The numbers',
    '- **ALL incidence:** **3–4 cases per 100,000 white children**; **2,500–3,000 children diagnosed in the USA per year**.',
    '- **AML incidence:** **500 new cases in the USA per year**.',
    '- **Peak age:** **between 2 and 5 years**.',
    '- **Share of childhood cancer:** **25–30 % of all childhood cancers**, and **ALL is the commonest cancer in paediatrics**.',
    '',
    '### Aetiology — the deck states it is UNKNOWN, and lists four contributors',
    '- **Ionising radiation.**',
    '- **Chemicals:** **benzene**, specifically in **AML**.',
    '- **Drugs:** **alkylating agents**, alone or **combined with radiotherapy**, increase the risk of **AML**.',
    '- **Genetic considerations:** below, and the syndromes in mal-3.',
    '',
    '### The two familial figures',
    '- **Identical twins:** if one twin develops leukaemia **during the first 5 years of life**, the second twin’s risk is **20 %**.',
    '- **Siblings:** incidence in the sibling of a leukaemic child is **four times** that of the general population.',
    '- **⚠️ But most cases are not inherited:** **most leukaemia arises from SOMATIC genetic alterations**, not from an inherited predisposition.',
    '',
    'Src: L48 pp.9–11, 14, 59'
  ].join('\n'),
  qs: []
},

{
  id: 'mal-3', w: 'must',
  h: 'The predisposing syndromes, and the three with a stated risk',
  body: [
    '### Chromosomal abnormalities with a quantified risk',
    '',
    '|Group|Risk|Time interval|',
    '|---|---|---|',
    '|**Trisomy 21 (Down syndrome)**|**1 in 95**|**Under 10 years of age**|',
    '|**Bloom syndrome**|**1 in 8**|**Under 30 years of age**|',
    '|**Fanconi anaemia**|**1 in 12**|**Under 16 years of age**|',
    '',
    '*Bloom syndrome carries the highest stated risk of the three and Down syndrome the earliest window.*',
    '',
    '### The genetically determined conditions with increased incidence',
    '- **Congenital agammaglobulinaemia** · **Poland syndrome** · **Shwachman–Diamond syndrome** · **ataxia telangiectasia**.',
    '- **Neurofibromatosis** · **Diamond–Blackfan anaemia** · **Kostmann disease** · **Bloom syndrome**.',
    '',
    '*Fanconi anaemia, Shwachman–Diamond and Diamond–Blackfan are written as DISEASES in `haematology` — haem-24, haem-25 and haem-23, all three naming the MDS/AML termination from the other end. Down syndrome as a syndrome is `genetics`. Tuberous sclerosis, the other tumour-predisposing neurocutaneous disorder, is mal-18.*',
    '',
    'Src: L48 pp.12–13'
  ].join('\n'),
  qs: []
},

{
  id: 'mal-4', w: 'high',
  h: 'The two classification systems, and what a classification rests on',
  body: [
    '',
    '|  |French–American–British (FAB)|World Health Organization (WHO)|',
    '|---|---|---|',
    '|**In use**|**1970s–2001**|**Published 2001, revised 2008**|',
    '|**Built on**|**Morphology and cytochemical stains**|**Immunophenotype · cytogenetics and molecular tests · clinical syndromes**|',
    '|**Categories**|**3 lymphoblastic · 8 myeloid**|Incorporates **all** types of information|',
    '|**Cytogenetics included**|**NO** — nor phenotype or molecular tests|**Yes**|',
    '|**⚠️ Prognostic value**|**LIMITED prognostic significance**|**DEFINITE prognostic AND treatment significance**|',
    '',
    '### The four bases any acute leukaemia is classified on',
    '- **Morphological characteristics** · **cytochemical features** · **immunological characteristics** · **cytogenetic and molecular characteristics (WHO)**.',
    '- **All four are necessary:** **light microscopy, cytochemistry, immunophenotyping and cytogenetics** are required to characterise the leukaemic subtype.',
    '',
    'Src: L48 pp.15–17, 37'
  ].join('\n'),
  qs: []
},

{
  id: 'mal-5', w: 'must',
  h: 'ALL — the general effects, and what marrow invasion does',
  body: [
    '### General systemic effects',
    '- **Fever — 60 %** · **lassitude — 50 %** · **pallor — 40 %**.',
    '',
    '### Haematologic effects arising from bone marrow invasion',
    '- **Anaemia:** causes **pallor, fatigability, tachycardia and dyspnoea**.',
    '- **Neutropenia:** causes **fever, ulceration of the buccal mucosa and infection**.',
    '- **Thrombocytopenia:** causes **petechiae, purpura, easy bruisability, bleeding from mucous membranes**, and sometimes **internal bleeding such as intracranial haemorrhage**.',
    '',
    '### ⚠️ The presentation that is mistaken for marrow failure',
    '**The trap — 1–2 % present with PANCYTOPENIA:** wrongly diagnosed as **aplastic anaemia or bone marrow failure**, accounting for **5 % of acquired aplastic anaemia**, and only later declaring acute leukaemia.',
    '',
    '**Its four features:**',
    '- **Pancytopenia or a single cytopenia.**',
    '- **Hypocellular bone marrow.**',
    '- **NO hepatosplenomegaly** — the discriminator, since leukaemia usually enlarges both.',
    '- **Timing:** leukaemia declared **1–9 months after the onset of symptoms**.',
    '',
    '*Marrow failure, aplastic anaemia and the four mechanisms of pancytopenia are `haematology` — haem-21, haem-22 and haem-26, whose "BM infiltration → malignancy" row is this disease seen from the other side.*',
    '',
    'Src: L48 pp.19, 22–23'
  ].join('\n'),
  qs: []
},

{
  id: 'mal-6', w: 'must',
  h: 'How often each feature is actually present at diagnosis',
  body: [
    'The deck prints one frequency table for ALL. **Hepatosplenomegaly and splenomegaly outrank every symptom**, and **over half of children present with a normal or low white count** — which is why a normal WBC never excludes leukaemia.',
    '',
    '|Presenting feature|Percentage of patients|',
    '|---|---|',
    '|**Fever**|**61 %**|',
    '|**Bleeding**|**48 %**|',
    '|**Bone pain**|**23 %**|',
    '|**Lymphadenopathy**|**50 %**|',
    '|**Splenomegaly**|**63 %**|',
    '|**Hepatosplenomegaly**|**68 %**|',
    '|**Leukocytes under 10,000/mm³**|**53 %**|',
    '|**Leukocytes 10,000–49,000**|**30 %**|',
    '|**Leukocytes over 50,000**|**17 %**|',
    '|**Haemoglobin under 7.0 g/dL**|**43 %**|',
    '|**Haemoglobin 7.0–11.0**|**45 %**|',
    '|**Haemoglobin over 11.0**|**12 %**|',
    '|**Platelets under 20,000/mm³**|**28 %**|',
    '|**Platelets 20,000–99,000**|**47 %**|',
    '|**Platelets over 100,000**|**25 %**|',
    '|**Lymphoblast morphology L1 / L2 / L3**|**84 % / 15 % / 1 %**|',
    '',
    'Src: L48 pp.24–25'
  ].join('\n'),
  qs: []
},

{
  id: 'mal-7', w: 'must',
  h: 'Lymphoid infiltration, and CNS involvement',
  body: [
    '### Clinical manifestations of lymphoid system infiltration',
    '- **Lymphadenopathy:** may present as **bulky mediastinal lymphadenopathy causing SUPERIOR VENA CAVA SYNDROME** — **commoner in T-cell leukaemia in adolescents**.',
    '- **Splenomegaly** · **hepatomegaly.**',
    '',
    '### CNS involvement — under 5 % at initial diagnosis',
    '- **Raised intracranial pressure:** **headache · morning vomiting · papilloedema · BILATERAL sixth-nerve palsy**.',
    '- **Parenchymal involvement:** focal neurological signs — **hemiparesis, cranial nerve palsies, convulsions**, and cerebellar signs of **ataxia, dysmetria, hypotonia, hyperreflexia**.',
    '- **Hypothalamic syndrome:** **polyphagia with excessive weight gain, hirsutism and behavioural disturbance**.',
    '- **Diabetes insipidus:** from **posterior pituitary involvement**.',
    '',
    '### Chloromas and CNS haemorrhage',
    '- **Chloroma (myeloid sarcoma):** **multiple, malignant, localised GREEN masses of abnormal cells, usually myeloblasts**. **Very infrequent in ALL.**',
    '- **Spinal cord chloroma presents with:** **back pain, leg pain, numbness, weakness, Brown–Séquard syndrome, and bladder and bowel sphincter problems**.',
    '- **⚠️ CNS haemorrhage:** commoner in **AML than in ALL**. Two mechanisms — **leukostasis in cerebral vessels → leukothrombi, infarcts and haemorrhage**, and **thrombocytopenia with coagulopathy**.',
    '',
    '*Raised intracranial pressure from a mass rather than from leukaemic infiltration is mal-19.*',
    '',
    'Src: L48 pp.26–28'
  ].join('\n'),
  qs: []
},

{
  id: 'mal-8', w: 'must',
  h: 'Extramedullary invasion — the other seven organ systems',
  body: [
    '### Testicular involvement',
    '- **Presentation:** **PAINLESS enlargement of the testis**.',
    '- **Frequency:** **10–23 % of boys during the course of the disease**, at a **median of 13 months from diagnosis**.',
    '- **Occult disease:** found in **10–33 % of boys** undergoing **bilateral wedge biopsies**.',
    '- **Five risk factors:** **T-cell ALL** · **leukocytosis over 20,000/mm³ at diagnosis** · **a mediastinal mass** · **moderate to severe hepatosplenomegaly and lymphadenopathy** · **thrombocytopenia under 30,000/mm³**.',
    '',
    '### Ovarian and renal',
    '- **Ovarian involvement:** **occurs very rarely**.',
    '- **Renal involvement:** occasionally presents with **haematuria, hypertension and renal failure**; assessed by **ultrasonography**; **commoner in T-cell ALL or mature B-cell ALL**.',
    '',
    '### Gastrointestinal',
    '- **Commonest manifestation:** **bleeding**.',
    '- **⚠️ Infiltrates are clinically SILENT** until terminal stages, when **necrotising enteropathy** may occur — **commonest site the caecum, giving TYPHLITIS**.',
    '',
    '### Bone and joint',
    '- **Bone pain is an initial symptom in 25 %.** Three mechanisms: **direct leukaemic infiltration of the periosteum**, **bone infarction**, or **expansion of the marrow cavity by leukaemic cells**.',
    '- **Four radiological changes:** **osteolytic lesions of medullary cavity and cortex** · **transverse metaphyseal radiolucent bands** · **transverse metaphyseal lines of increased density (growth arrest lines)** · **subperiosteal new bone formation**.',
    '',
    '### Skin, cardiac and lung',
    '- **Skin:** occasional, and only in **neonatal leukaemia or AML**.',
    '- **Cardiac:** **one-half to two-thirds have cardiac involvement at autopsy**, yet **symptomatic heart disease occurs in under 5 %**; the findings are **leukaemic infiltrates and haemorrhage of the myocardium or pericardium**.',
    '- **Lung:** **uncommon** — **leukaemic infiltrates or haemorrhage**.',
    '',
    'Src: L48 pp.29–33'
  ].join('\n'),
  qs: []
},

{
  id: 'mal-9', w: 'must',
  h: 'Diagnosis — the blood, the film and the marrow',
  body: [
    '### Blood count',
    '- **Haemoglobin:** **moderate to marked reduction**, **normocytic and normochromic**.',
    '- **⚠️ Hb reads the tempo, not the severity:** a **LOW haemoglobin means a LONGER duration** of leukaemia, a **HIGHER one a MORE RAPIDLY PROLIFERATING** leukaemia.',
    '- **White cell count:** **low, normal or increased** — any of the three.',
    '',
    '### Blood smear',
    '- **Blasts are present**, but **very few to none** in a leukopenic patient.',
    '- **Above a WBC of 10,000/mm³:** blasts are **usually abundant**.',
    '- **Eosinophilia is UNCOMMON in childhood ALL**; **20 % of AML patients have increased basophils**.',
    '- **Thrombocytopenia:** **92 % have platelets below normal**, and **serious GI or intracranial haemorrhage occurs below 20,000/mm³**.',
    '',
    '### Bone marrow — the diagnostic test',
    '- **Replacement:** the marrow is **usually replaced by 80–100 % blasts**.',
    '- **Megakaryocytes:** **usually absent**.',
    '- **⚠️ The suspicion threshold:** **leukaemia must be suspected when the marrow contains MORE THAN 5 % blasts**.',
    '- **The hallmark is the BLAST CELL:** a relatively **undifferentiated cell** with **diffusely distributed nuclear chromatin**, **one or more nucleoli** and **basophilic cytoplasm**.',
    '- **Three special marrow studies** for detailed cell classification: **histochemistry · immunophenotyping · cytogenetics**.',
    '',
    '*Thrombocytopenia as a subject — the destruction-versus-production axis and the megakaryocyte rule — is haem-32.*',
    '',
    'Src: L48 pp.34–36'
  ].join('\n'),
  qs: []
},

{
  id: 'mal-10', w: 'must',
  h: 'Telling a lymphoblast from a myeloblast, and the immunophenotype tree',
  body: [
    '### The morphological grid',
    '',
    '|Characteristic|Lymphoblast|Myeloblast|',
    '|---|---|---|',
    '|**Size**|**10–20 µm**|**14–20 µm**|',
    '|**Nuclear shape**|Round or oval|Round or oval|',
    '|**Chromatin**|**SMOOTH, homogeneous**|**SPONGY, loose**|',
    '|**Nucleoli**|**0–2 and indistinct**|**2–5 and distinct, "punched-out"**|',
    '|**Nuclear membrane**|**Smooth, round**|**IRREGULAR**|',
    '|**Nuclear–cytoplasmic ratio**|**HIGH**|**LOW**|',
    '|**Cytoplasm colour**|**Blue**|**Blue-grey**|',
    '|**Cytoplasm amount**|**THIN RIM**|**More abundant**|',
    '|**Granules**|**ABSENT**|**PRESENT**|',
    '|**Auer rods**|**ABSENT**|**PRESENT**|',
    '',
    '*The two that settle it at a glance: **Auer rods and granules are myeloid**, and the lymphoblast is the cell with almost no cytoplasm.*',
    '',
    '### Immunophenotype distribution of ALL',
    '- **Two lineages:** **B-cell** and **T-cell**.',
    '- **The B-cell arm divides:** **pre-B cell** and **mature B-cell**.',
    '',
    '*⚠️ **FLT3 mutations** are printed as a slide TITLE on L48 p41 with an empty body — the deck names the mutation and teaches nothing about it. Named here so the gap is visible rather than absent.*',
    '',
    'Src: L48 pp.38–41'
  ].join('\n'),
  qs: []
},

{
  id: 'mal-11', w: 'must',
  h: 'Down syndrome and AML — a leukaemia that is treated LESS hard',
  body: [
    '**The paradox:** Down syndrome children with AML have an **increased frequency of M7 leukaemia** and yet a **markedly SUPERIOR outcome** compared with non-Down-syndrome AML.',
    '',
    '### How they present',
    '- **A LOWER initial WBC.**',
    '- **NO central nervous system involvement.**',
    '- **FEWER cytogenetic abnormalities.**',
    '',
    '### How they are treated',
    '- **Less-intensive chemotherapy:** **high-dose cytarabine**, **reduced anthracycline**, **reduced intrathecal therapy**.',
    '- **⚠️ Four things are NOT required:** **maintenance therapy**, **cranial radiation**, and **stem cell transplantation** — the deck lists these as unnecessary in this group.',
    '',
    '### Outcome, and why',
    '- **Remission rate about 90 %**, **event-free survival approximately 70–80 %**.',
    '- **The mechanism:** **increased sensitivity of Down syndrome blasts to cytarabine**, because of the **GATA1 mutation** — an **erythroid transcription factor essential for erythroid and megakaryocytic development**.',
    '',
    '*The leukaemia RISK in Down syndrome — 1 in 95 under 10 years — is mal-3. Down syndrome as a syndrome is `genetics`.*',
    '',
    'Src: L48 pp.42–44'
  ].join('\n'),
  qs: []
},

{
  id: 'mal-12', w: 'must',
  h: 'Treatment of ALL, and the risk groups that decide it',
  body: [
    '*⚠️ Supplied from general knowledge and tagged throughout — no cached deck states any of it. L48 stops at diagnosis; its only therapy is the Down-AML paragraph in mal-11.*',
    '',
    '### Risk stratification *(not taken from the course material)*',
    '',
    '|Feature|Favourable|Adverse|',
    '|---|---|---|',
    '|**Age**|**1–10 years**|**Under 1 year, or 10 years and over**|',
    '|**Initial WBC**|**Under 50,000/mm³**|**50,000/mm³ and over**|',
    '|**Lineage**|**B-precursor**|**T-cell, mature B-cell**|',
    '|**Cytogenetics**|**Hyperdiploidy over 50 chromosomes · ETV6–RUNX1, t(12;21)**|**Hypodiploidy · BCR–ABL1, t(9;22) · KMT2A rearrangement in infants**|',
    '|**Extramedullary disease**|**Absent**|**CNS or testicular disease at diagnosis**|',
    '|**Early response**|**Rapid clearance of blasts**|**Persistent MINIMAL RESIDUAL DISEASE at the end of induction**|',
    '',
    '**⚠️ End-of-induction MRD:** the **single strongest predictor**, outranking every presenting feature above it *(not taken from the course material)*.',
    '',
    '### The four phases *(not taken from the course material)*',
    '- **Remission induction — 4 to 6 weeks:** **vincristine + a corticosteroid + asparaginase**, with an **anthracycline** added in higher-risk disease. Aim: **morphological remission, under 5 % marrow blasts**.',
    '- **Consolidation and intensification:** eradicates residual disease; includes **delayed intensification**, a repeat of the induction drugs.',
    '- **CNS-directed therapy — given to EVERY patient:** **intrathecal methotrexate**, alone or with cytarabine and hydrocortisone. **Cranial irradiation is now reserved for overt CNS disease**, because of its late endocrine and cognitive cost.',
    '- **Maintenance — 2 to 3 years in total:** **daily oral 6-mercaptopurine + weekly methotrexate**, with vincristine and steroid pulses.',
    '',
    '### Supportive care and outcome *(not taken from the course material)*',
    '- **Standing measures:** transfusion support, **co-trimoxazole prophylaxis against Pneumocystis**, and prompt treatment of febrile neutropenia.',
    '- **Outcome:** **over 85–90 % five-year survival in standard-risk childhood ALL**; **AML is far worse**, nearer 65–70 %.',
    '- **The three relapse sites:** **bone marrow · CNS · testis**.',
    '',
    'Src: no deck; supplied and tagged in full per CLAUDE.md §4 — see the header, FINDING 5'
  ].join('\n'),
  qs: []
},

{
  id: 'mal-13', w: 'must',
  h: 'The oncological emergencies',
  body: [
    '*Two of these are named by L48 and are marked as sourced; the rest is supplied and tagged.*',
    '',
    '### Tumour lysis syndrome *(not taken from the course material)*',
    'Massive blast breakdown, **spontaneous or within hours of starting chemotherapy**. Highest risk: **high white count, T-cell ALL and mature B-cell disease**.',
    '',
    '|Disturbance|Direction|Consequence|',
    '|---|---|---|',
    '|**Potassium**|**HIGH**|**Arrhythmia, cardiac arrest**|',
    '|**Phosphate**|**HIGH**|Binds calcium|',
    '|**Calcium**|**LOW**|**Tetany, seizures**|',
    '|**Uric acid**|**HIGH**|**Urate nephropathy, acute kidney injury**|',
    '',
    '- **Prevention and treatment:** **hyperhydration without potassium**, **allopurinol** (xanthine oxidase inhibitor) or **rasburicase** (urate oxidase) for high-risk disease, **frequent electrolyte monitoring**, and **dialysis** if the kidney fails.',
    '',
    '### Febrile neutropenia *(not taken from the course material)*',
    '- **Definition:** **fever with an absolute neutrophil count under 500/mm³**, or under 1,000 and falling.',
    '- **⚠️ The rule:** **cultures, then broad-spectrum intravenous antibiotics WITHIN ONE HOUR**. Do not wait for the count, and do not wait for a focus — there may be none, because there are no neutrophils to make pus.',
    '',
    '### Mediastinal mass and hyperleukocytosis',
    '- **Superior vena cava syndrome:** from **bulky mediastinal lymphadenopathy**, **commoner in T-cell disease in adolescents** — L48 p26. **Anaesthesia and lying the child flat are dangerous** *(that caution not taken from the course material)*.',
    '- **Leukostasis:** L48 p28 names it as the mechanism of CNS haemorrhage — **leukothrombi, infarcts and haemorrhage in cerebral vessels**. It occurs above roughly **100,000/mm³**; **hydrate, avoid red cell transfusion**, which raises viscosity further *(both supplied)*.',
    '- **Spinal cord compression:** from a **chloroma** — back pain, weakness, Brown–Séquard syndrome, sphincter disturbance (L48 p28).',
    '',
    'Src: L48 pp.26, 28 for SVC syndrome, leukostasis and chloroma; the remainder supplied and tagged'
  ].join('\n'),
  qs: []
},

{
  id: 'mal-14', w: 'must',
  h: 'The new era of cancer treatment — five pillars',
  body: [
    '- **The old foundations:** for decades cancer treatment was **chemotherapy and radiotherapy**, and these **remain the critical mainstay**.',
    '- **2000 — targeted therapy:** **imatinib** and **Herceptin** kill cancer cells by **homing on specific molecular changes** seen in those cells.',
    '- **The past decade — immunotherapy:** treatment that **strengthens the patient’s own immune system to attack tumours**, now called the **FIFTH PILLAR of cancer treatment**.',
    '- **Its first class:** the **immune checkpoint inhibitors**, which have **shrunk and even eradicated tumours** in some patients.',
    '',
    '### CAR-T approvals',
    '- **FDA approvals since 2017:** **six CAR-T cell products**, for **blood cancers**, **lymphoma** and **multiple myeloma**.',
    '',
    'Src: L48 pp.46, 48–50'
  ].join('\n'),
  qs: []
},

{
  id: 'mal-15', w: 'must',
  h: 'CAR-T cells — a living drug, and what it costs',
  body: [
    '**The principle — a LIVING drug:** **T cells orchestrate the immune response and directly kill infected cells**, and are the backbone of the therapy.',
    '',
    '### How it is made',
    '- **Customised for each individual:** **T cells are collected from the patient**, **re-engineered in the laboratory** to express **CHIMERIC ANTIGEN RECEPTORS** on their surface.',
    '- **What a CAR recognises:** it **binds specific proteins or antigens on the surface of cancer cells**. **These receptors are synthetic molecules — they do not exist naturally.**',
    '- **The structure:** each CAR **bridges the cell membrane**. The **extracellular part** is composed of **fragments and domains that bind tumour antigen**; the **internal part carries signalling and co-stimulatory domains** that transmit the signal once the receptor engages.',
    '- **The last step:** the re-engineered cells are **expanded to millions** and **re-infused**, where they **multiply, recognise and kill** any cell carrying the target antigen.',
    '',
    '### Where it started, and its two drawbacks',
    '- **Development focused on ALL**, the commonest cancer in paediatrics; the **first FDA-approved CAR-T cell, in 2017, was for RELAPSED ALL**.',
    '- **Cytokine release syndrome (CRS).**',
    '- **Neurotoxicity (ICANS):** **confusion, seizure-like activity and impaired speech** from **immune-effector-cell-associated neurotoxicity**.',
    '',
    'Src: L48 pp.51, 54, 56, 59, 61, 64'
  ].join('\n'),
  qs: []
},

{
  id: 'mal-16', w: 'high',
  h: 'Rhabdomyoma — what it is, and its three variants',
  body: [
    '**Rhabdomyoma:** a **rare, BENIGN tumour made up of STRIATED MUSCLE CELLS**.',
    '',
    '### Where and in whom',
    '- **Primary location:** the **HEART** — cardiac rhabdomyoma.',
    '- **Other sites:** **skeletal muscle**.',
    '- **Age:** **most commonly diagnosed in children, particularly under 5 years of age**.',
    '- **⚠️ The association to know:** **TUBEROUS SCLEROSIS**.',
    '',
    '### The three variants',
    '- **Cardiac rhabdomyoma:** the **most prevalent type**, **linked to tuberous sclerosis** and **often found in children**.',
    '- **Extracardiac rhabdomyoma:** develops in the **head, neck and genitourinary tract**.',
    '- **Fetal rhabdomyoma:** **rare**, **detected in fetuses or newborns**, raising concerns for early medical intervention.',
    '',
    '### Clinical features',
    '- **Cardiac:** **arrhythmias and heart failure due to OBSTRUCTION** caused by the tumour.',
    '- **Extracardiac:** varies by location — **swelling or pain** in the affected area.',
    '- **From the associated tuberous sclerosis:** **skin lesions, seizures and developmental delay**.',
    '',
    'Src: L49 pp.3–5'
  ].join('\n'),
  qs: []
},

{
  id: 'mal-17', w: 'high',
  h: 'Rhabdomyoma — diagnosis, treatment and the name it is confused with',
  body: [
    '### Diagnosis — three techniques',
    '- **Imaging:** **ECHOCARDIOGRAPHY for cardiac rhabdomyoma**; **MRI or CT preferred for extracardiac tumours**.',
    '- **Biopsy:** **histological examination confirms the diagnosis**.',
    '- **Genetic testing:** identifies **mutations associated with TUBEROUS SCLEROSIS COMPLEX**, which may co-occur.',
    '',
    '### Treatment — three positions',
    '- **Observation:** **small, asymptomatic tumours may not need immediate treatment**.',
    '- **Surgery:** **indicated for symptomatic or larger tumours, particularly cardiac ones**.',
    '- **Follow-up care:** **regular monitoring for recurrence is crucial, especially with tuberous sclerosis**.',
    '- **Prognosis:** **surgical intervention generally gives favourable outcomes with low recurrence rates**.',
    '',
    '### ⚠️ Rhabdomyoma is NOT rhabdomyosarcoma *(this distinction not taken from the course material)*',
    '**Rhabdomyoma** is the **benign** striated-muscle tumour above. **Rhabdomyosarcoma** is a **malignant** tumour of the same lineage and the **commonest soft-tissue sarcoma of childhood** — head and neck, genitourinary tract and limbs — treated with **chemotherapy plus surgery or radiotherapy**. The names differ by three letters and the diseases by everything.',
    '',
    'Src: L49 pp.6, 12, 15; the rhabdomyosarcoma contrast supplied and tagged — no cached deck names it except one cell of `39)Hematuria`'
  ].join('\n'),
  qs: []
},

{
  id: 'mal-18', w: 'high',
  h: 'Tuberous sclerosis complex',
  body: [
    '*Deferred here by `neurological`. L49 prints the association and three consequences; the diagnostic features are supplied.*',
    '',
    '### What the deck gives',
    '- **The link:** rhabdomyomas are **linked with genetic conditions such as tuberous sclerosis**, and **cardiac rhabdomyoma is the type linked to it**.',
    '- **Its three named consequences:** **skin lesions, seizures and developmental delays**.',
    '- **Testing:** **genetic testing for TUBEROUS SCLEROSIS COMPLEX** is part of the rhabdomyoma work-up.',
    '',
    '### What it is *(not taken from the course material)*',
    '- **Nature:** an **autosomal dominant neurocutaneous disorder**, from mutation in **TSC1 (hamartin)** or **TSC2 (tuberin)**; about two-thirds are **new mutations**.',
    '- **Skin:** **ash-leaf hypopigmented macules** (seen under Wood’s light) · **shagreen patch** · **facial angiofibromas** · **periungual fibromas**.',
    '- **Brain:** **cortical tubers** · **subependymal nodules** · **subependymal giant cell astrocytoma**, which can obstruct CSF flow.',
    '- **Elsewhere:** **cardiac rhabdomyoma** · **renal angiomyolipoma** · **retinal hamartoma**.',
    '- **⚠️ The infant presentation:** **infantile spasms plus hypopigmented macules** is tuberous sclerosis until proved otherwise.',
    '',
    'Src: L49 pp.3–6; the diagnostic features supplied and tagged — `shagreen`, `TSC1`, `TSC2` and `subependymal` return zero hits corpus-wide'
  ].join('\n'),
  qs: []
},

{
  id: 'mal-19', w: 'must',
  h: 'Brain tumours — types, and how they announce themselves',
  body: [
    '**Definition:** **abnormal growths of cells in the brain or nearby tissues**. They may be **benign (non-cancerous) or malignant (cancerous)**, and that distinction **affects the treatment options**.',
    '',
    '### The three groups',
    '- **Primary brain tumours:** **originate in the brain itself** — commonly **gliomas** and **meningiomas**.',
    '- **Metastatic brain tumours:** **cancer cells that have spread to the brain from elsewhere**, indicating **advanced disease**.',
    '- **Paediatric brain tumours:** commonly **MEDULLOBLASTOMA and EPENDYMOMA**, and they **require specialised treatment**.',
    '- **Impact varies widely** with **tumour type, size and location**.',
    '',
    '### Common symptoms',
    '- **Headache:** **frequent, and worse in the morning or with a change of position**.',
    '- **Seizures:** **new-onset seizures** are a significant warning sign.',
    '- **Neurological deficits:** problems with **vision, speech or motor function** from **pressure on the brain**.',
    '- **Cognitive change:** altered **memory, personality or confusion**.',
    '',
    '*⚠️ Two facts the deck omits — brain tumours are the commonest SOLID tumour of childhood, and in children most are INFRATENTORIAL, so the picture is cerebellar signs with obstructive hydrocephalus rather than a focal deficit (not taken from the course material).*',
    '',
    'Src: L49 pp.7–9'
  ].join('\n'),
  qs: []
},

{
  id: 'mal-20', w: 'must',
  h: 'Brain tumours — diagnosis, treatment, and medulloblastoma',
  body: [
    '### Diagnosis — three methods',
    '- **Imaging:** **MRI and CT are essential** for accurately **locating and diagnosing** the tumour.',
    '- **Biopsy:** extracts tissue to assess **tumour TYPE and GRADE**, which guides treatment.',
    '- **Neurological evaluation:** assesses **cognitive and motor function** to understand the tumour’s impact.',
    '',
    '### Treatment — four modalities',
    '- **Surgery:** the **first line** for tumours that **can be accessed safely**.',
    '- **Radiotherapy:** used **post-operatively, or for inoperable tumours**, to eliminate remaining cancer cells.',
    '- **Chemotherapy:** particularly effective for **malignant or metastasised tumours**.',
    '- **Targeted therapy:** uses the **genetic makeup of the tumour** to tailor the intervention.',
    '- **Prognosis:** **varies greatly with tumour type, grade and treatment effectiveness**; **early detection significantly improves outcomes**.',
    '',
    '### Medulloblastoma *(the detail not taken from the course material)*',
    '- **Site:** the **POSTERIOR FOSSA — the cerebellar vermis**. It is the **commonest MALIGNANT brain tumour of childhood**.',
    '- **Presentation:** **truncal ataxia and unsteady gait**, with **morning headache and vomiting** from **obstructive hydrocephalus** at the fourth ventricle.',
    '- **⚠️ It seeds:** **DROP METASTASES down the CSF pathway**, so the **whole neuraxis must be imaged** and the CSF examined before treatment.',
    '- **Treatment:** **surgical resection + craniospinal radiotherapy + chemotherapy**; radiotherapy is **avoided or deferred under 3 years of age**.',
    '',
    'Src: L49 pp.8, 10, 13–15; medulloblastoma supplied and tagged — `posterior fossa` returns no hit in L49',
  ].join('\n'),
  qs: []
},

{
  id: 'mal-21', w: 'high',
  h: 'Rhabdomyoma against brain tumours — the deck’s own comparison',
  body: [
    '',
    '|  |Rhabdomyoma|Brain tumours|',
    '|---|---|---|',
    '|**Nature**|**BENIGN**|**Benign OR malignant**|',
    '|**Common locations**|**Heart and skeletal muscle**|**Within brain tissue**|',
    '|**Patient age**|**Primarily children**|**Both children and adults**|',
    '|**Associated conditions**|**Tuberous sclerosis**|**Various systemic cancers**|',
    '|**Treatment approach**|**Surgical removal is primary**|**Surgery, radiation and chemotherapy**|',
    '',
    '*The one row that carries a decision is NATURE: a rhabdomyoma is watched if it is small and quiet, and a brain tumour is graded before anything else is decided.*',
    '',
    'Src: L49 p.11'
  ].join('\n'),
  qs: []
},

{
  id: 'mal-22', w: 'high',
  h: 'The abdominal mass in a child — Wilms tumour against neuroblastoma',
  body: [
    '*⚠️ Supplied in full and tagged — no cached deck teaches either tumour. Written because this is the only home for a childhood solid tumour, and flagged in the header as deletable.*',
    '',
    '|  |Wilms tumour (nephroblastoma)|Neuroblastoma|',
    '|---|---|---|',
    '|**Origin**|**Metanephric blastema — the kidney**|**Neural crest — adrenal medulla or sympathetic chain**|',
    '|**Peak age**|**3–4 years**|**Under 2 years — the commonest tumour of infancy**|',
    '|**⚠️ The mass**|**Smooth, does NOT cross the midline**|**Irregular, hard, CROSSES the midline**|',
    '|**The child**|**Usually WELL**; haematuria, hypertension|**UNWELL** — bone pain, weight loss, limp|',
    '|**Signature signs**|—|**Periorbital bruising and proptosis** from orbital secondaries|',
    '|**Marker**|**None**|**Urinary catecholamines — VMA and HVA**|',
    '|**Associations**|**WAGR · Beckwith–Wiedemann · hemihypertrophy**|**MYCN amplification · opsoclonus–myoclonus**|',
    '',
    '- **Wilms:** **bilateral in 5–10 %**; treated with **nephrectomy plus chemotherapy**, and **prognosis is good**.',
    '- **Neuroblastoma:** **stage 4S in infants can regress spontaneously**, which no other childhood malignancy does.',
    '',
    'Src: no deck; supplied and tagged in full per CLAUDE.md §4'
  ].join('\n'),
  qs: []
}

    ]
  }
};
