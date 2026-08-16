/* genetics — "Genetics", Paediatrics. Written 2026-08-16 under
   START-HERE.md §14 (slide-density revision notes) + §14.3a (layout), and
   content\peds\theory-plan.md, whose ONE local difference is that PAEDIATRICS
   HAS NO 3,000-WORD CAP: budget = max(lecture words, 25 x questions, 600).
   Shape copied from neonatal.draft.js and malignant.draft.js.

   DECK LABEL USED IN THE Src LINES:
     L6 = 6) Genetically determined disease_.txt — Dr Iman Marzouk, Professor
          of Paediatrics, Faculty of Medicine, Alexandria University.
          A SINGLE deck, and this chapter's only one. 62 PDF pages in two
          halves, each announced by its own title card: CHROMOSOMAL
          ABNORMALITIES (pp.1–40) and SINGLE GENE DISORDER (pp.41–61).
     Born-digital PDF in Semester 8\Pedo\Theoritical\PPT\. Produced by macOS
     Quartz from a .pptx (`pdfinfo` Title: "Genetically determined diseases
     with chromosomal abnormalities.pptx", Creator: Word), but it is NOT on the
     14-file PowerPoint-COM conversion list — it ships as a PDF, so no
     conversion was needed and none was done.

   ⚠️ PAGE NUMBERING. Split page N = PDF page N. `pdftotext`'s trailing form
   feed makes the cached split report 63 pages against `pdfinfo`'s 62, so
   `visual-read-triage.md`'s "p63" DOES NOT EXIST. Its p62 is the "Thank You"
   card. Every Src page number below is a real, verified page.

   ============================================================================
   ⚠️ FINDING 0 — ONE CHAPTER SHIPS. NO SPLIT. Measured, not forecast, and
   stated explicitly as the brief requires.
   ============================================================================
   MEASURED body = **3,104 words = 12.9 printed pages** at the ÷240 estimator,
   against the ~13 pp hard shape. **It passes — but by 0.1 pp, and that thin
   margin is reported rather than dressed up.** At the table-dense upper end of
   the observed spread (259 w/pp) it is 12.0 pp; ÷240 is the conservative read
   and is the one quoted.

   ⚠️ THE SEAM IS RECORDED BECAUSE THE MARGIN IS THIN, not because a split is
   recommended today. The deck's own two title cards are a clean boundary that
   NO section crosses — no section past gen-12 cites a page under 41, and none
   before gen-13 cites a page over 40. If the hub disagrees on the page call,
   or if the owed reconciliation pass adds questions and pushes this over, the
   split costs no rewriting and no reordering:

     · `genetics`          = gen-1 … gen-12 — CHROMOSOMAL DISORDERS (L6 pp.2–40),
                             from the four mechanisms through the birth-defect
                             classification. **1,957 words = 8.2 pp.**
     · `genetics-mendel`   = gen-13 … gen-18 — MENDELIAN INHERITANCE (L6
                             pp.42–61), from reading a pedigree through the
                             unusual mechanisms. **1,147 words = 4.8 pp.**
     Sum 3,104. Both units clear the shape by 4.8 and 8.2 pages.
     The only links across the seam are *italic* cross-references that POINT
     and do not depend — gen-15's thalassaemia note and gen-17's rickets note.

   ============================================================================
   ⚠️ FINDING 1 — THE CACHE IS COMPLETE. Checked, as instructed, before writing.
   ============================================================================
   `pdftotext -layout` of the source PDF against the cached .txt:

     PDF 2,734 words · cache 2,740 words · difference = exactly the 6-word
     `SOURCE:` header line the cache adds.
     Vocabulary diff over words >2 characters: **PDF-only 0 of 765 (0.0 %)**;
     cache-only 6, every one from that header (source, semester, pedo,
     theoritical, ppt, pdf).

   So the cache IS the `pdftotext` output, to the word. This deck is NOT the
   `14) Puberty` case. No supplementary extraction was needed and the cache was
   not touched.

   ⚠️ BUT "the cache is complete" MEANS ONLY "the cache holds all the EXTRACTABLE
   text". It says nothing about the pictures, and this deck is half pictures —
   FINDING 2 is the opposite finding, and the important one.

   ============================================================================
   ⚠️⚠️ FINDING 2 — THE TRIAGE FILE'S "8 %" IS THE MOST MISLEADING NUMBER IN IT,
   AND ITS KNOWN HOLE FIRED HERE EXACTLY AS THE BRIEF WARNED.
   ============================================================================
   `visual-read-triage.md` lists this deck at **62 pages, 5 blank (8 %)** — the
   second-lowest share in all of paediatrics. On that number alone a reader
   would skip the visual read entirely.

   I re-scanned the deck at a **45-word** threshold instead of the triage's
   5-word one. **31 of 62 pages — exactly half the deck — carry under 45
   words.** The triage saw 5 of those 31. The 26 it missed are missed for
   precisely the documented reason: **a full-page figure that carries a caption
   is not "blank"**, and in a genetics deck a karyotype or a pedigree almost
   always carries one. Three the 5-word filter walked straight past:

     · p10 — SIX Down-syndrome facial photographs under a 20-word caption.
     · p44 — the ENTIRE pedigree symbol key, 28 words of labels over the
       drawings that give them their meaning.
     · p57 — the X-linked recessive pedigree, four generations, 11 words.

   **So the deck was rendered END TO END** — 62 pages at 110 dpi into 16 four-up
   contact sheets, plus six re-renders at 300 dpi for the karyotypes and
   pedigrees. The brief's advice to skip the page-by-page decision was right:
   deciding would have cost more than rendering, and the index could not have
   supported the decision anyway.

   ⚠️ A TILING BUG WORTH RECORDING, because it fails silently and photographs
   as a short deck. PowerShell `[int](3/2)` is **2**, not 1 — banker's rounding
   — so a 2×2 contact sheet built with `[int]($j/2)` as the row index pushes
   every FOURTH page off the bottom of the canvas with no error and no warning.
   The first pass produced 16 sheets of 3 pages each and silently dropped p4,
   p8, p12, p16 … Only comparing a sheet against the page numbers caught it.
   `[Math]::Floor` is the fix — and it must then be cast back to `[int]` before
   `.ToString("00")`, because `Floor` returns a Double and a `{0:d2}` format
   on a Double throws "Format specifier was invalid".

   ============================================================================
   ⚠️ FINDING 3 — WHAT THE VISUAL READ ACTUALLY RECOVERED. Not a clean negative:
   five real recoveries and one defect no text pass could have found.
   ============================================================================
   Honest scale first. This deck's prose is unusually self-sufficient, so the
   visual read did NOT rewrite the chapter the way it rewrote `haematology`.
   Most of the 31 low-word pages are clinical photographs whose caption already
   names the sign — p11's simian crease, p23's webbed neck, p34's talipes. Those
   are cited, are not otherwise recoverable in markdown, and are counted as
   recoveries of NOTHING. Recording that is the point of a clean partial.

   The five that DID yield, all written into the body:

     1. **p44, THE PEDIGREE SYMBOL KEY — the single best recovery.** The cache
        holds five bullet LABELS ("Carrier female", "Mating and consanguineous
        mating") with nothing to attach them to. The drawings are the whole
        content: affected = FILLED, unaffected = OPEN, circle = female, square =
        male, **diamond = unknown sex**, **carrier female = an open circle with
        a filled central dot**, mating = a SINGLE horizontal line,
        **consanguineous mating = a DOUBLE horizontal line**, abortion = a small
        filled circle. Written as gen-13's symbol table. **Without the render
        that section could not have been written at all** — a symbol key is a
        picture by definition.
     2. **p57, the X-linked recessive pedigree.** Read at 300 dpi. Generation II
        holds an affected male whose generation-III children are ONE UNAFFECTED
        SON and ONE CARRIER DAUGHTER — p56's rule ("daughters of affected males
        are all obligate carriers") drawn rather than stated, and the absence of
        male-to-male transmission made visible across four generations.
     3. **p50, the lack-of-penetrance pedigree.** A RED ARROW points at an
        unaffected male in generation II sitting between an affected mother (I)
        and an affected daughter (III). That arrow is the whole teaching of
        p49's "skipping a generation" clause and exists only in the picture.
     4. **p47 and p53, the AD and AR pedigrees.** AD: affected individuals in
        ALL FOUR generations, vertical. AR: unaffected parents, two affected
        sibs in ONE sibship, consanguinity double line drawn beneath. The
        generation-by-generation contrast is the examinable fact and neither
        slide states it in words. Both feed gen-13's pattern grid.
     5. **p18, the maternal-age incidence table.** `pdftotext` DID recover the
        figures, but as a bare column of digits; only the render establishes
        which incidence pairs with which age.

   ⚠️ AND ONE DEFECT ONLY THE PICTURE COULD SHOW — DEFECT NOTES item 2. p27's
   karyotype caption is wrong, and it is wrong in the image, not in the text, so
   no amount of `pdftotext` would ever have surfaced it.

   Rendered PNGs live in the session scratchpad only. `Semester 8\` was opened
   read-only; nothing in it was modified, renamed or moved.

   ============================================================================
   DEFECT NOTES — noted, never disputed (CLAUDE.md §4b, MEMORY.md item 0).
   One line each in the body, at the place the reader meets the fact.
   ============================================================================
     1. ⚠️ THE DECK CONTRADICTS ITSELF ON THE TRANSLOCATION SHARE. p15's
        cytogenetics list prints **Translocation (4%)**; p19's own heading four
        pages later prints **Translocation (5%)**. Both are printed and neither
        is corrected here. Recorded in gen-6 as a one-line aside. The 94 % and
        1 % figures for non-disjunction and mosaicism agree across both slides.
     2. ⚠️⚠️ p27's TURNER KARYOTYPE IS CAPTIONED **(46,X0)** AND SHOULD READ
        45,X0. Re-rendered at 300 dpi and read directly, because a one-character
        difference is exactly what a 110 dpi contact sheet gets wrong. It is not
        a rendering artefact — the caption plainly reads 46. The picture itself
        shows a SINGLE X in the sex position and nothing under Y, i.e. a genuine
        45,X, and the deck's OWN p22 and p26 both write 45,X0. So the deck is
        internally consistent everywhere except this one caption. gen-8 teaches
        45,X0, which is what the deck's prose says, and names the caption as
        the outlier.
     3. p29 reads "the **paternal** chromosomes should be examined" where the
        sense plainly requires PARENTAL — the same slide continues "one of the
        parents", and p30's parallel deletion slide writes "parental". Read as a
        typo, written as parental, printed word noted in gen-10.
     4. THREE SLIDES ARE TRUNCATED MID-SENTENCE by text overflowing the slide
        area — p19 ("the risk of recurrence is 10-15% if the …"), p33 ("during
        the development of tissues or …") and p59 ("the proportion of the ova
        that carry …"). Verified at 300 dpi that nothing is hidden below the
        visible text; the words simply are not in the file. Each is completed in
        the body from general knowledge and tagged, and the truncation is named
        so the learner is not left holding half a sentence.

   ============================================================================
   §14.5 CROSS-CHAPTER DEFERRALS — rows owed TO this chapter, and how each is
   discharged. Every one was grep-verified against the deck before being
   answered, not assumed.
   ============================================================================
   SIX rows across five drafts name `genetics` as the receiving chapter.
   ALL SIX ARE DISCHARGED; none is passed on.

     | Owed by | Fact | Discharged |
     | growth-puberty (L13 pp.26, 41) | TURNER SYNDROME IN FULL — lymphoedema of
       hands and feet, neck webbing, receding chin, cardiac and renal lesions,
       prenatal nuchal oedema / cystic hygroma, increased susceptibility to
       infection | ✅ gen-8, and mostly SOURCED rather than supplied — L6
       pp.22–27 carry every clause except the renal lesion and the infection
       susceptibility, which are tagged. |
     | growth-puberty (L13 p.26) | DOWN, NOONAN, PRADER-WILLI, RUSSELL-SILVER as
       syndromes; L13 names them on a photo plate only | ✅ Down in gen-4 to
       gen-7 in full and sourced; Noonan, Prader-Willi and Russell-Silver in
       gen-9, tagged — L6 names Noonan once (p48, as an AD example) and neither
       of the other two anywhere. |
     | growth-puberty (its own omission note) | THE KARYOTYPE OF KLINEFELTER —
       "L14 names both syndromes without either karyotype" | ✅ gen-9, 47,XXY,
       tagged. L6 does not name Klinefelter at all; `klinefelter` corpus-wide
       returns only `14) Puberty`. |
     | endocrine (DM p.2) | TURNER AND DOWN SYNDROME as syndromes, named in the
       secondary-diabetes classification grid | ✅ gen-4 to gen-8. |
     | cardiac (L33 slides 5, 65) | DOWN, EDWARD, PATAU, TURNER, NOONAN in their
       own right — karyotype, dysmorphism, non-cardiac anomalies | ✅ Down and
       Turner sourced (gen-4 to gen-8); Patau named by L6 p40 and developed
       tagged in gen-9; **Edward and Noonan tagged in gen-9** — `edward` returns
       0 hits in L6. The cardiac lesions stay `cardiac`'s and are pointed at,
       not restated. |
     | haematology (L44) | THALASSAEMIA'S INHERITANCE, and nothing more — the row
       states its own limit, that L6 prints "Thalassemia" as one line of an AR
       list and teaches nothing else | ✅ gen-15, as the AR example it is. **The
       row's stated limit is confirmed exactly:** `thalass` returns ONE hit in
       L6, on p54. Honoured to the letter and not stretched. |

   NOT DEFERRED ONWARD: nothing. This is a terminal chapter — it receives and
   does not hand on. Two facts it could have deferred and did not, each for a
   checked reason:
     · VITAMIN D RESISTANT RICKETS (p60, the XLD example). `nutrition` owns
       rickets and has two decks for it. KEPT HERE as the one-line example the
       deck prints, because the examinable fact is the INHERITANCE PATTERN, not
       the disease. One *italic* line points at `nutrition`.
     · DUCHENNE MUSCULAR DYSTROPHY (p58, an XLR example). Written as a DISEASE
       in `neurological`, which states its X-linked recessive inheritance and
       the ~30 % de novo rate from its own deck — verified by reading that
       draft, not assumed. KEPT HERE as the list item, with a pointer.

   ============================================================================
   BUDGET — §14.1, counted from disk with node
   `String(s).split(/\s+/).filter(Boolean).length`, the project convention
   (NOT `wc -w`, which reads 3–6 % low on these files).
   ============================================================================
     The cached deck: **2,740 words** as it sits on disk = exactly
     theory-plan.md's published ceiling, to the word.

     TERM 1, THE HONEST UNION. No line-range split with another chapter is
     needed. Verified by grepping all sixteen written paediatrics drafts: every
     other mention of `6) Genetically determined disease_` is either a DEFERRAL
     TO here or an explicit "cited only, NOT counted" — cardiac's header says so
     in those words for the Turner–coarctation clause, and malignant's
     decks-cited-but-not-counted list names it for Down syndrome. NOBODY ELSE
     HAS SPENT THESE WORDS, and this chapter defers nothing onward, so §14.1(b)
     takes nothing back out.

       2,740 − 6   the cache's own `SOURCE:` header line
             − 17  p1 title/author card
             − 8   p41 section title card ("…WITH A SINGLE GENE DISORDER")
             − 2   p62 "Thank You"
                                                                        ------
     TERM 1 = **2,707.**
     TERM 2 = 25 × 0 linked questions = **0.** ZERO questions are filed with
       chapter:'genetics', so §14.2's second term contributes NOTHING and the
       LECTURE side of the coverage floor governs entirely. `qs: []` on every
       section. A reconciliation pass is owed when the paediatrics banks close.
     max(2,707 · 0 · 600) = **2,707. TERM 1 GOVERNS.**

     ⚠️ THE PUBLISHED CEILING IS 33 WORDS HIGH — trivial, and stated only so the
     two numbers reconcile. Unlike `haematology`, whose ceiling under-stated an
     image-heavy chapter by ~1,300 words, this deck's pictures are mostly
     CLINICAL PHOTOGRAPHS whose captions already extract, so the ceiling is
     close to honest even at 50 % low-word pages. **Blank-page share does not
     predict recoverable words; what the blanks CONTAIN does.** A deck of 31
     photographs recovers little text; a deck of 31 tables would have recovered
     a great deal. That is the generalisable form of FINDING 3.

   ⚠️ ENTITY FLOOR AND OVERRUN, COUNTED BEFORE WRITING (§14.1 rule 3, with
   `haematology`'s correction that a framework slide costs ~85 words in this
   format, and `neonatal`'s that the entity/framework overlap is nearer one
   THIRD than one half).

     TEN DEVELOPED ENTITIES at ~90 w: 1 Down syndrome · 2 Turner syndrome ·
     3 Patau · 4 Edward · 5 Klinefelter · 6 cri du chat (5p−) · 7 Noonan ·
     8 Prader-Willi · 9 Russell-Silver · 10 reciprocal translocation = 900.

     ⚠️ AND THIS DECK IS FRAMEWORK-DOMINATED IN A WAY THE ENTITY COUNT CANNOT
     SEE. It is a MECHANISMS lecture, not a diseases lecture: five of its six
     inheritance patterns are frameworks with no entity attached at all.
     Framework slides costed ONE BY ONE, not lumped — the `ent-neck` lesson:
       p2 scale · p3 four causes · p4 chromosome structure · p5 centromere
       classes · p6 normal complement · p7 abnormality types and rates ·
       p12 DS diagnosis · p14 DS later problems · p15 DS cytogenetics ·
       p16 non-disjunction · p17 prenatal · p19 translocation · p21 mosaicism ·
       p22 TS definition · p25 TS features · p26 TS cytogenetics · p28 balanced ·
       p29 unbalanced · p30 deletions · p32 duplications · pp.33–36
       dysmorphology ×4 · pp.37–40 birth-defect classes ×4 · p42 Mendelian ·
       p43 pedigree and proband · p45 AD definition · p46 AD characters ·
       p49 penetrance · p51 homozygotes · p52 AR characters · p55 sex-linked ·
       p56 XLR rules · p59 isolated case · p60 XLD · p61 Y-linked
       = **37 slides × 85 = 3,145.**

     ⚠️ AND THE GRIDS AT ROWS × COLUMNS, not one slide each (the `ent-phon`
     lesson): p13's DS examination grid (13 findings × 2 columns) · p14's
     later-problems list (12 items each carrying a percentage) · p18's
     maternal-age table (5 × 2) · the DS-mechanism discrimination I build
     (3 mechanisms × 6 axes) · the pattern-recognition grid (5 patterns ×
     5 axes) = **~55 cells beyond the slide costings, ~470 words.**

     Naive sum 900 + 3,145 + 470 = 4,515. Applying `neonatal`'s one-third
     entity/framework overlap — and it is LARGE here, because "Down syndrome"
     the entity IS slides 8–21 — gave a predicted floor of **~2,850–3,000**,
     i.e. **the floor was predicted to sit ABOVE TERM 1 by 150–300 words before
     a single supplied fact.** Written before the sections, as §14.1 requires,
     and deliberately NOT retrofitted now that the outcome is known. What it got
     right and wrong is in the outcome block.

   ============================================================================
   OMISSION NOTE — item by item, what was left out and why. Each a decision on
   the record, not an accident.
   ============================================================================
     1. THE TITLE, AUTHOR AND "Thank You" CARDS (p1, p41, p62). Deducted from
        TERM 1 above rather than counted and cut.
     2. THE CLINICAL PHOTOGRAPHS AS PHOTOGRAPHS — p10 (six DS facies), p11
        (simian crease, hypotonia, neck webbing), p23 and p24 (TS neonate and
        girl), pp.33–36 (cleft palate, talipes equinovarus, amniotic bands,
        ectodermal dysplasia), p37 (anencephaly), p38 (Potter facies), p39
        (VACTERL), p40 (Patau), p48 (achondroplasia). **Every NAMED FEATURE on
        every one of these plates IS kept** — that is what makes them cited
        rather than dropped — but a photograph is not reproducible in markdown
        and no attempt is made to describe one. Named here so the omission is
        visible: a learner who wants the faces must open the deck.
     3. THE KARYOTYPE IMAGES AS IMAGES (p6, p9, p20, p27, p31). Their
        **notations** are all kept and are the examinable content — 46,XY ·
        47,XX+21 · 46,XY t(15,21) · 46,XX t(21,22) · 45,X0 · 46,XX 5p−. Band
        patterns are not transcribable and are not attempted.
     4. THE PEDIGREE CHARTS AS CHARTS (p47, p50, p53, p57). Their READABLE
        PATTERN is kept, in gen-13's grid and in each pattern's own section —
        who is affected, in which generations, with or without male-to-male
        transmission. Individual family members are not enumerated; that is
        chart apparatus, not a fact.
     5. THE MOLECULAR MECHANISM BENEATH WHAT THE DECK STATES. L6 says genes are
        DNA wound on histones and stops; it names FISH and does not explain it;
        it names isochromosome and does not draw it. This chapter stops where
        the deck stops on all three, per §14.2's drop list (mechanism deeper
        than the material goes).
     6. DRUG DOSES. L6 states none — "Growth hormone therapy" for Turner and
        "gonadectomy is indicated" are the whole of its treatment content. No
        dose is invented. GH's 1996 licensing date for Turner is already written
        in `growth-puberty` gp-11 and is not repeated here.
     7. DISTRACTOR-BY-DISTRACTOR REASONING (§14.2). No questions are filed under
        this chapter, so it does not arise. Discriminations ARE kept as tables
        wherever the teaching point IS the discrimination: the three DS
        mechanisms (gen-6), Noonan vs Turner (gen-9), balanced vs unbalanced
        translocation (gen-10), the four dysmorphology mechanisms (gen-11), the
        four birth-defect classes (gen-12), the pedigree symbols and the five
        inheritance patterns (gen-13).

   ⚠️ NOTHING PROTECTED WAS DROPPED TO FIT. Every numbered fact, percentage,
   eponym, karyotype notation and named example the deck prints is in the body.
   Checked back against the deck at the end: 34 of 34 numerical facts, 27 of 27
   named disorders, 6 of 6 karyotype notations.

   ============================================================================
   ✅ TRUE MEASUREMENT — node `String(s.body).split(/\s+/).filter(Boolean).length`
   over `body` ONLY, run against the file ON DISK as the genuinely LAST action,
   after the final edit. WRITING THIS BLOCK IS THE ONLY EDIT SINCE, AND IT
   TOUCHES NOTHING BUT THIS COMMENT.

   ⚠️⚠️ AND THIS BLOCK'S OWN HISTORY IS RECORDED, BECAUSE THE PROJECT'S MOST
   EXPENSIVE RECURRING FAULT NEARLY HAPPENED HERE FOR THE TENTH TIME. The first
   complete draft of this file carried a hand-written outcome block claiming
   **2,771 words over 18 sections with a per-section breakdown** — a forecast
   written in the past tense, exactly the shape §14.1 warns of. Running the
   counter measured **3,792**. The claim was wrong by **1,021 words, 37 %**, and
   NOTHING except running the counter would have caught it: the section count
   was right, the structure was right, the breakdown looked plausible. A
   compression pass then took the file 3,792 → 3,050 → 3,113 (the §14.3a `###`
   headings cost 63 words, as that rule warns they do) → **3,104 final**. The
   numbers below are from the last of those states and from no other.

   ⚠️ THE PREDICTION UNDER BUDGET ABOVE IS LEFT EXACTLY AS IT STOOD and is NOT
   retrofitted. It predicted ~2,850–3,000; the answer is 3,104, so it was low by
   ~100–250. Where it went wrong is worth keeping: 37 framework slides costed at
   85 each assumes framework slides are LISTS. Several of this deck's are bare
   DEFINITIONS and cost far less (p32 duplications ≈ 24 words, p55 sex-linked
   ≈ 21, p61 Y-linked ≈ 36) — but the SUPPLIED content, which the entity model
   does not see at all, more than made the difference back. Both corrections
   hold; they are about different deck shapes.
   ============================================================================

       body 3,104 words over 18 sections · intro 39 words · 0 questions filed
       weights: 8 `must`, 7 `high`, 3 `know` · 16 tables, 84 table rows
       0 flows · 39 `###` sub-headings · 18 of 18 `Src:` lines
       `qs: []` on all 18 · parse: `new Function(src)` clean
       107 lead-bold lines, **0 unanchored** · 0 paragraphs over 45 words

     gen-1   84 · gen-2  133 · gen-3   60 · gen-4  154 · gen-5   94
     gen-6  254 · gen-7  125 · gen-8  251 · gen-9  313 · gen-10 219
     gen-11 123 · gen-12 147 · gen-13 170 · gen-14 220 · gen-15 129
     gen-16 233 · gen-17 132 · gen-18 263

   THE SPLIT UNITS, MEASURED (FINDING 0 — recorded, not recommended):
     · gen-1 … gen-12  = 1,957 words =  8.2 pp
     · gen-13 … gen-18 = 1,147 words =  4.8 pp

   AGAINST THE BANDS:
     · vs TERM 1, the honest union of 2,707: **3,104 = 114.7 %**, 397 over.
       **That IS past §14.1's 10 % trigger, so the page test is owed and was
       run** — 12.9 pp against a ~13 pp shape. It passes, by 0.1 pp.
     · vs theory-plan.md's published ceiling of 2,740: **113.3 %**, 364 over.
     · vs the caller's stated working band of 2,000–2,800: **10.9 % over the top
       of it**, itemised below rather than trimmed to fit.
     · **⚠️ WHERE THE OVERRUN IS, MEASURED RATHER THAN ARGUED.** The sections
       resting wholly on the deck total **2,528 = 93.4 % of TERM 1** — under
       budget, and in line with every other paediatrics chapter. **The tagged,
       supplied content totals 576**: gen-9's supplied syndromes (265 of its 313
       — Patau's development, all of Edward, Klinefelter, cri du chat,
       Prader-Willi, Russell-Silver and the Noonan/Turner cardiac contrast),
       gen-18 entire (263 — the four mechanisms L6's own p3 classification
       promises and never teaches), and the three truncated-sentence completions
       (48, across gen-6, gen-11 and gen-16). **2,528 + 576 = 3,104.** The deck
       side is comfortably under budget; **the supplied side is the whole of the
       overrun, and every word of it is either a §14.5 row owed to this chapter
       or a gap the deck itself opens.**
     · vs the 74 % landing point theory-plan.md gives as its working estimate:
       the DECK-BASED side lands at 93 %, not 74 %. The chapters that landed at
       74 % had decks that repeat themselves; this one is 62 pages of almost no
       redundancy — a mechanisms lecture states each rule once — so there was
       far less air to let out.

   ⚠️ WHAT THE NEXT 300 WORDS OF COMPRESSION WOULD COST, itemised per §14.1
   rather than quietly taken. To reach the 2,800 band top, the only remaining
   candidates are content, not phrasing — three compression passes have already
   removed the framing sentences, the teaching voice and the loose table cells:
     · −263 by deleting gen-18 entirely. Cost: the four mechanisms the deck's
       OWN classification names as half its subject. A learner asked "name the
       four causes of genetically determined disease" could name them from gen-1
       and explain only two.
     · −265 by cutting gen-9's supplied syndromes to a bare name list. Cost:
       FIVE §14.5 rows go undischarged, which §14.5 defines as a deletion.
     · −48 by leaving the three truncated slides truncated. Cost: three
       sentences that stop mid-clause, which §4 explicitly forbids.
   None was taken. The chapter stops at the floor and the bill is stated, which
   is the outcome §14.1 asks for when the two cannot both be met.
*/

var THEORY_DRAFT = {
  genetics: {
    intro: 'A mechanisms chapter, not a diseases one. Three things are taken from it: the Down and Turner phenotypes with their numbers, the three cytogenetic mechanisms and the recurrence risk each carries, and reading an inheritance pattern off a pedigree.',
    sections: [

{
  id: 'gen-1', w: 'know',
  h: 'How common, and the four mechanisms that produce a genetic disease',
  body: [
    '- **Significant congenital malformation:** **2 %** of live-born babies.',
    '- **Genetic disorder:** about **5 %** of live-born babies.',
    '',
    '### The four causes of genetically determined disease',
    '',
    '|#|Mechanism|Covers|',
    '|---|---|---|',
    '|**1**|**Chromosomal abnormality**|**numerical** or **structural**|',
    '|**2**|**Single gene disorder**|**Mendelian** — autosomal and sex-linked, each recessive or dominant|',
    '|**3**|**Unusual genetic mechanisms**|**Fragile X · mitochondrial · imprinting · uniparental disomy**|',
    '|**4**|**Genetic–environmental interaction**|**multifactorial**; epigenetic influence on gene expression early in life|',
    '',
    '*Mechanisms 3 and 4 are named here and never taught by the deck — supplied in gen-18.*',
    '',
    'Src: L6 pp.2–3'
  ].join('\n'),
  qs: []
},

{
  id: 'gen-2', w: 'know',
  h: 'Chromosome structure, and the normal karyotype',
  body: [
    '- **Genes:** DNA wound on a **core of histone proteins**, packaged into **supercoils** to form chromosomes.',
    '- **When visible:** by **stains selectively taken up by DNA during cell division**, chromosomes **maximally contracted**.',
    '- **Each chromosome:** **two chromatids**; each has a **long (q)** and a **short (p) arm**.',
    '- **Centromere:** joins the arms, consists of DNA, **moves the chromosome during cell division**.',
    '',
    '### Classified by centromere position',
    '',
    '|Type|Position|',
    '|---|---|',
    '|**Metacentric**|**central**|',
    '|**Sub-metacentric**|**intermediate**|',
    '|**Acrocentric**|**terminal, with a satellite** of **repeated rRNA genes**|',
    '',
    '### The normal complement',
    '- **46 chromosomes:** **22 pairs of autosomes** + **one pair of sex chromosomes** — **XX** female, **XY** male.',
    '- **One of each pair from each parent;** members of a pair are **homologues**.',
    '- **Ploidy:** **somatic diploid 46** · **gametes haploid 23**.',
    '- **Notation:** a normal male is **46,XY**.',
    '',
    'Src: L6 pp.4–6'
  ].join('\n'),
  qs: []
},

{
  id: 'gen-3', w: 'high',
  h: 'Chromosomal abnormality — two classes, three frequencies',
  body: [
    '### The two classes',
    '- **Numerical:** **trisomy** · **monosomy**.',
    '- **Structural:** **translocation** · **deletion** · **duplication**.',
    '',
    '### The three frequencies',
    '',
    '|Where|Frequency|',
    '|---|---|',
    '|**Spermatozoa**|**~10 %**|',
    '|**Mature oocytes**|**~25 %**|',
    '|**Live-born**|**~1 in 150**|',
    '',
    '- **In gametes:** a **common cause of spontaneous miscarriage** — why the live-born figure is so much lower.',
    '- **In live-borns:** **multiple congenital anomalies and cognitive difficulties**.',
    '',
    'Src: L6 p.7'
  ].join('\n'),
  qs: []
},

{
  id: 'gen-4', w: 'must',
  h: 'Down syndrome — the numbers, the diagnosis, the examination',
  body: [
    '**Down syndrome (trisomy 21):** **most common autosomal trisomy**, **most common genetic cause of severe learning difficulties**. **~1 in 650 live births**, **rising with maternal age**. Karyotype **47,XX +21**.',
    '',
    '### Diagnosis',
    '- **Suspected at birth —** **facial appearance** + **hypotonia**; **developmental delay** noticed later.',
    '- **Confirmed by —** **chromosomal analysis: karyotype or FISH**.',
    '- **Why confirm:** enables **genetic counselling** after **identifying the genetic type** and **calculating recurrence risk** — the three types differ sharply (gen-6).',
    '',
    '### The examination',
    '',
    '|Craniofacial|Other anomalies|',
    '|---|---|',
    '|**Round face, flat nasal bridge**|**Short neck**|',
    '|**Upslanting palpebral fissures**|**Single palmar (simian) crease**|',
    '|**Epicanthic folds**|**Incurved short finger**|',
    '|**Brushfield spots**|**Wide gap between 1st and 2nd toes**|',
    '|**Small mouth, protruding tongue**|**Hypotonia**|',
    '|**Small ears**|**Congenital heart defects — 40 %**|',
    '|**Flat occiput**|**Duodenal atresia · Hirschsprung disease**|',
    '',
    '- **Also on the photograph plates:** **prominent forehead** · **flat face** · **short nose** · **neck webbing**.',
    '',
    '*The cardiac lesion is an atrioventricular canal defect — `cardiac`.*',
    '',
    'Src: L6 pp.8–13 (pp.9–11 read visually)'
  ].join('\n'),
  qs: []
},

{
  id: 'gen-5', w: 'must',
  h: 'Down syndrome — the later problems',
  body: [
    '### With a stated figure',
    '',
    '|Problem|Frequency|',
    '|---|---|',
    '|**Conductive hearing defects**|**75 %**|',
    '|**Obstructive sleep apnoea**|**50–75 %**|',
    '|**Squint and myopia**|**50 %**|',
    '|**Hypothyroidism**|**15 %**|',
    '|**Cataract**|**15 %**|',
    '|**Leukaemia and solid tumours**|**< 1 %**|',
    '',
    '### The rest',
    '- **Development —** **delayed motor milestones**; **learning difficulties of variable severity**.',
    '- **Growth —** **short stature**.',
    '- **Immunity —** **increased susceptibility to infection**.',
    '- **Skeletal —** **acquired hip dislocation** · **atlantoaxial instability**.',
    '- **Gut —** **coeliac disease**.',
    '- **Neurological —** **epilepsy** · **early-onset Alzheimer disease**.',
    '',
    '*The quantified 1-in-95 leukaemia risk and the M7/GATA1 account are `malignant` mal-3 and mal-11.*',
    '',
    'Src: L6 p.14'
  ].join('\n'),
  qs: []
},

{
  id: 'gen-6', w: 'must',
  h: 'Down syndrome cytogenetics — three mechanisms, three different risks',
  body: [
    'Phenotype much the same; **recurrence risk and the need to karyotype the parents are not**.',
    '',
    '### The three mechanisms side by side',
    '',
    '|  |Non-disjunction|Translocation|Mosaicism|',
    '|---|---|---|---|',
    '|**Share**|**94 %**|**4 %**|**1 %**|',
    '|**When**|**Error at meiosis**|At or before conception|**Mitotic non-disjunction AFTER a normal zygote forms**|',
    '|**Mechanism**|**Chromosome 21 pair fails to separate** — one gamete gets **two 21s**, the other **none**; fertilising the two-21 gamete gives **trisomy 21**|Extra **21 joined onto another chromosome** — **usually 14**, may be **15, 22, 13, 21** — a **Robertsonian translocation**|Some cells normal, some trisomy 21; or **later mitotic non-disjunction in a trisomy 21 conception, losing the extra copy** in one cell line|',
    '|**Karyotype the parents?**|**NO**|**YES**|not stated|',
    '|**Recurrence**|**1 in 200** under 35 y; **age-related risk** at 35 y+|**Parents normal in 75 % → < 1 %**; one a **balanced carrier in 25 % → 10–15 %**|not stated|',
    '|**Phenotype**|full|full|**sometimes milder**|',
    '',
    '### The maternal-age paradox',
    '- **The maternal-age paradox:** incidence **rises with maternal age**, yet **most affected babies are born to YOUNGER mothers**.',
    '- **Why:** the proportion of all pregnancies occurring in older mothers is small.',
    '',
    '*Deck defect: p15 prints translocation at 4 %, p19’s heading at 5 %. Both as printed; 94 % and 1 % agree across both.*',
    '',
    '*The translocation slide is cut off at "10-15% if the …". It ends: if the MOTHER is the carrier, the risk being lower for a carrier father; a 21;21 carrier has a 100 % recurrence risk (not taken from the course material).*',
    '',
    'Src: L6 pp.15–16, 19–21; karyotypes 46,XY t(15,21) and 46,XX t(21,22) from p20, read visually'
  ].join('\n'),
  qs: []
},

{
  id: 'gen-7', w: 'high',
  h: 'Down syndrome — prenatal diagnosis and the maternal-age table',
  body: [
    '### Non-invasive, 10–14 weeks',
    '- **Maternal blood —** **biochemical markers**.',
    '- **Ultrasound —** **nuchal translucency**, thickened soft tissue at the **back of the neck**.',
    '- **Cell-free fetal DNA —** the recent addition, from **maternal blood**.',
    '',
    '### If screening shows increased risk',
    '- **Confirm:** offer **amniocentesis or chorionic villous sampling** to **check the fetal karyotype**.',
    '- **Screening gives a risk;** only a karyotype gives the diagnosis.',
    '',
    '|Maternal age|Incidence|',
    '|---|---|',
    '|**20 years**|**1 : 1530**|',
    '|**30 years**|**1 : 500**|',
    '|**35 years**|**1 : 350**|',
    '|**40 years**|**1 : 110**|',
    '|**45 years**|**1 : 37**|',
    '',
    '- **The shape:** ~**threefold from 20 to 30**, then ~**tenfold from 30 to 45**.',
    '- **35 years is the pivot —** and the age at which gen-6’s recurrence rule changes.',
    '',
    'Src: L6 pp.17–18 (p.18 table read visually)'
  ].join('\n'),
  qs: []
},

{
  id: 'gen-8', w: 'must',
  h: 'Turner syndrome',
  body: [
    '**Turner syndrome (TS):** a **chromosomal monosomy syndrome** — a **short female with sexual infantilism and certain physical abnormalities**.',
    '',
    '- **>95 % of 45,X0 fetuses abort spontaneously;** live-birth incidence **1 : 2500 females**.',
    '- **Detected prenatally —** on ultrasound by **fetal oedema of the neck, hands or feet**, or a **cystic hygroma**.',
    '',
    '### Clinical features',
    '- **Neonate —** **lymphoedema of the hands and feet**, which **may persist**; **short webbed neck**.',
    '- **Nails —** **spoon-shaped**.',
    '- **Growth —** **short stature**, treated with **growth hormone**.',
    '- **Neck and face —** **webbing**; **receding chin** in the older girl.',
    '- **Limbs —** **wide carrying angle**.',
    '- **Chest —** **widely spaced nipples**.',
    '- **Heart —** **coarctation of the aorta**.',
    '',
    '### Cytogenetics — half of it is not 45,X0',
    '',
    '|Group|Share|Karyotype|',
    '|---|---|---|',
    '|**Full monosomy**|**~50 %**|**45,X0**|',
    '|**Structural or mosaic**|**the other half**|one normal X plus an X with **short-arm deletion**, or an **isochromosome of two long arms and no short arm**, or any structural abnormality; or **mosaicism such as 46XX/45X0**|',
    '',
    '- **⚠️ Y chromosome sequence —** raises the risk of **gonadoblastoma**, so **gonadectomy is indicated**. The one management decision the karyotype changes.',
    '',
    '*Deck defect: p27’s karyotype is captioned **(46,X0)** and should read 45,X0 — the image shows a single X and no Y, and pp.22 and 26 both write 45,X0.*',
    '',
    '*Renal anomaly (classically horseshoe kidney) and increased susceptibility to infection are the two deferred Turner features this deck omits (not taken from the course material). Mosaic Turner as a short-stature cause is `growth-puberty` gp-13.*',
    '',
    'Src: L6 pp.22–27 (pp.23–24, 27 read visually)'
  ].join('\n'),
  qs: []
},

{
  id: 'gen-9', w: 'high',
  h: 'The other named syndromes — what the deck names but never teaches',
  body: [
    '### The other autosomal trisomies',
    '',
    '|  |Patau|Edward|',
    '|---|---|---|',
    '|**Karyotype**|**Trisomy 13**|**Trisomy 18**|',
    '|**Incidence**|**~1 in 10,000**|**~1 in 6,000–8,000**|',
    '|**Hallmarks**|**Holoprosencephaly · midline facial cleft · microphthalmia · postaxial polydactyly · scalp cutis aplasia**|**Clenched hands with overlapping fingers · rocker-bottom feet · small chin · prominent occiput · low-set ears**|',
    '|**Outcome**|**most die in the first year**|**most die in the first year**|',
    '',
    '*L6 p40 names Patau only as its worked example of a syndrome; the grid’s features, both incidences and all of Edward are supplied (not taken from the course material). Cardiac lesions are `cardiac`.*',
    '',
    '### Klinefelter syndrome — 47,XXY',
    '- **Incidence:** the **commonest sex-chromosome aneuploidy in males**, ~**1 in 600**.',
    '- **Presents after puberty —** **tall with long limbs**, **small firm testes**, **gynaecomastia**, **azoospermia and infertility**.',
    '- **Endocrine —** **hypergonadotrophic hypogonadism**; **testosterone replacement**.',
    '',
    '*L6 never names Klinefelter; `14) Puberty` names it without a karyotype — supplied (not taken from the course material).*',
    '',
    '### Cri du chat — the name for L6’s 5p− karyotype',
    '- **Cri du chat:** the deck prints **46,XX 5p−** and never names the syndrome it causes.',
    '- **Features —** **high-pitched cat-like cry in infancy** · **microcephaly** · **round face with hypertelorism** · **severe intellectual disability** *(not taken from the course material)*.',
    '',
    '### Three syndromes deferred here, none of them in this deck',
    '- **Noonan syndrome:** **autosomal dominant** (L6 p48). **Short stature · webbed neck · pectus deformity**, **both sexes**, **normal karyotype**.',
    '- **Noonan vs Turner —** **Noonan: pulmonary stenosis, either sex, normal karyotype**; **Turner: coarctation, female only, 45,X0** *(the cardiac contrast not taken from the course material)*.',
    '- **Prader–Willi:** **neonatal hypotonia and poor feeding**, then **hyperphagia and obesity**, **short stature, hypogonadism, learning difficulty**. An **imprinting** disorder — gen-18 *(not taken from the course material)*.',
    '- **Russell–Silver:** **severe intrauterine growth restriction**, **relative macrocephaly**, **triangular face**, **body asymmetry** *(not taken from the course material)*.',
    '',
    'Src: L6 pp.31, 40, 48; the remainder supplied and tagged in place'
  ].join('\n'),
  qs: []
},

{
  id: 'gen-10', w: 'high',
  h: 'Structural abnormalities — translocation, deletion, duplication',
  body: [
    '**Reciprocal translocation:** **exchange of genetic material between two different chromosomes**. Balanced or unbalanced, and the distinction decides everything.',
    '',
    '|  |Balanced|Unbalanced|',
    '|---|---|---|',
    '|**Material**|**no loss or gain**|**an incorrect amount**|',
    '|**Frequency**|**1 in 500 of the general population**|not stated|',
    '|**Phenotype**|usually normal; may **lose a few genes or disrupt a single gene** → **mainly cognitive difficulties**|**impairs physical AND cognitive development** → **dysmorphic features, congenital malformation, developmental delay, learning difficulties**|',
    '',
    '- **⚠️ In a newborn —** on finding an unbalanced translocation, **examine the parents’ chromosomes**.',
    '- **The question:** **de novo**, or a **balanced translocation in one parent** carrying a **recurrence risk in future pregnancies**? **Prenatal diagnosis is important** in the latter.',
    '',
    '*The slide prints "paternal chromosomes" where the sense requires PARENTAL — its own next clause says "one of the parents", and the deletion slide writes "parental".*',
    '',
    '### Deletions',
    '- **Loss of part of a chromosome —** **terminal** or **interstitial**.',
    '- **Consequence —** usually **physical abnormalities and cognitive impairment**.',
    '- **Worked example —** **partial deletion of the short arm of chromosome 5**, **46,XX 5p−**.',
    '- **⚠️ Karyotype the parents —** same question: **de novo**, or **a parent carrying a balanced rearrangement**?',
    '',
    '### Duplications',
    '- **Gain of genetic material —** **congenital malformations and intellectual impairment**, but **often better tolerated than deletion**. Losing gene dose is worse than gaining it.',
    '',
    'Src: L6 pp.28–32 (p.31 karyotype read visually)'
  ].join('\n'),
  qs: []
},

{
  id: 'gen-11', w: 'high',
  h: 'Dysmorphology — the four pathogenic mechanisms',
  body: [
    '**Dysmorphology:** the **study of abnormal form** — assessment of **birth defects and unusual physical features originating during embryogenesis**.',
    '',
    '### The four pathogenic mechanisms',
    '',
    '|Mechanism|Definition|Deck’s example|',
    '|---|---|---|',
    '|**1 Malformation**|**primary structural defect** during **development of tissues or organs**|**Cleft palate**|',
    '|**2 Deformation**|**abnormal intrauterine mechanical force** distorting a **normally formed** structure|**Talipes equinovarus**|',
    '|**3 Disruption**|**destruction of a fetal part that initially formed normally**|**Amniotic bands causing limb reduction defects**|',
    '|**4 Dysplasia**|**abnormal cellular organisation or function of a specific tissue type**|**Ectodermal dysplasia**|',
    '',
    '- **The separating axis:** **never formed properly** (malformation) · **formed then squashed** (deformation) · **formed then destroyed** (disruption) · **formed of the wrong cells** (dysplasia).',
    '',
    '*The malformation slide is cut off at "tissues or …"; the word is organs (not taken from the course material).*',
    '',
    'Src: L6 pp.33–36'
  ].join('\n'),
  qs: []
},

{
  id: 'gen-12', w: 'high',
  h: 'Clinical classification of birth defects — four terms, used precisely',
  body: [
    '### The four terms',
    '',
    '|Term|Definition|Example|',
    '|---|---|---|',
    '|**1 Single system defect**|a **single congenital malformation**; **often multifactorial**, **fairly low recurrence risk**|**Spina bifida · anencephaly**|',
    '|**2 Sequence**|multiple abnormalities following **ONE initiating defect**|**Potter sequence** — renal agenesis → **severe oligohydramnios** → **fetal compression and pulmonary hypoplasia**|',
    '|**3 Association**|malformations together **more often than chance but in DIFFERENT combinations**, **not explicable as a sequence or syndrome**|**VACTERL**|',
    '|**4 Syndrome**|multiple anomalies **repeatedly in a CONSISTENT pattern**, **known or presumed common causal mechanism**|**Patau syndrome (trisomy 13)**|',
    '',
    '### Telling them apart',
    '- **Sequence vs syndrome:** a **sequence is one cause and a chain of consequences**; a **syndrome is one cause and a fixed set of anomalies**. **Association is the term of last resort** — they cluster and nobody knows why.',
    '- **A syndrome:** usually carries **moderate to severe cognitive impairment**; due to **chromosomal defects · a single gene defect · teratogen exposure · unknown**.',
    '',
    'Src: L6 pp.37–40'
  ].join('\n'),
  qs: []
},

{
  id: 'gen-13', w: 'must',
  h: 'Reading a pedigree — the symbols, and each pattern drawn out',
  body: [
    '- **Mendelian inheritance:** transmission caused by variation in a **SINGLE gene** in a **characteristic pattern**. **Over 6,000 described** — individually rare, collectively numerous.',
    '- **Family studies rely on** **observing transmission between generations** or **studying frequency among relatives**.',
    '- **Proband —** the person through whom the family came to attention; the **index case**.',
    '',
    '### The symbols',
    '',
    '|Symbol|Meaning|',
    '|---|---|',
    '|**Circle · square · diamond**|**female · male · unknown sex**|',
    '|**Filled · open**|**affected · unaffected**|',
    '|**Open circle, filled central dot**|**carrier female**|',
    '|**Single horizontal line**|**mating**|',
    '|**DOUBLE horizontal line**|**consanguineous mating**|',
    '|**Small filled circle**|**abortion**|',
    '',
    '### Each pattern on a chart',
    '',
    '|Pattern|Affected|Generations|Male-to-male?|Giveaway|',
    '|---|---|---|---|---|',
    '|**AD**|**both sexes**|**every generation**, vertical|**YES**|an affected parent in each affected line|',
    '|**AR**|**both sexes**|**one sibship**, horizontal|yes|**unaffected parents** · **consanguinity**|',
    '|**XLR**|**males only**|**skips via carrier females**|**NEVER**|**carrier mothers**; affected males in the female line|',
    '|**XLD**|**both, EXCESS of females**|every generation|**NEVER**|affected father → **ALL daughters, NO sons**|',
    '|**Y-linked**|**males only**|every generation|**always**|father → **every son, no daughter**|',
    '',
    '*Male-to-male transmission is the most useful line here: present in AD and Y-linked, impossible in both X-linked patterns.*',
    '',
    'Src: L6 pp.42–44 (p.44 symbol key read visually)'
  ].join('\n'),
  qs: []
},

{
  id: 'gen-14', w: 'must',
  h: 'Autosomal dominant — characters, penetrance, the homozygote',
  body: [
    '**Autosomal dominant (AD):** the **most common type of Mendelian inheritance**. **Alteration in only ONE copy of a gene pair**, so it **appears in the heterozygote despite an intact copy**. The mutation **comes from a previous generation or arises new**.',
    '',
    '### Characters, with complete penetrance',
    '- **Male-to-male transmission is present.**',
    '- **Both males and females affected.**',
    '- **Recurrence —** **½ (50 %) in both sexes**.',
    '- **Unaffected individual —** his children **show no signs of the condition**.',
    '- **Origin —** **inherited from a parent, or a new mutation**.',
    '- **On the pedigree —** affected individuals in **all four generations**.',
    '',
    '### Reduced penetrance — the exception to the fourth rule',
    '- **What it looks like:** someone **completely unaffected has BOTH a parent AND a child with the same AD disorder** — **skipping a generation**. That person must carry the gene.',
    '- **Quoted as a percent:** **80 % means 80 % of heterozygotes express the condition in some way**.',
    '- *The deck’s pedigree marks the skipped, unaffected carrier with a red arrow.*',
    '',
    '### The homozygote, when two heterozygotes have children',
    '',
    '|Outcome|Example|',
    '|---|---|',
    '|**More severely affected**|**Achondroplasia**|',
    '|**Earlier age of onset**|**Familial hypercholesterolaemia**|',
    '|**No more severely affected**|**Huntington disease**|',
    '',
    '- **Examples of AD disease:** **achondroplasia · adult polycystic kidney disease · myotonic dystrophy · Noonan’s syndrome · familial hypercholesterolaemia**.',
    '',
    'Src: L6 pp.45–51 (pp.47, 50 pedigrees read visually)'
  ].join('\n'),
  qs: []
},

{
  id: 'gen-15', w: 'must',
  h: 'Autosomal recessive',
  body: [
    '### Characters',
    '- **Parents normal, sibs affected —** horizontal on the pedigree, not vertical.',
    '- **Consanguinity:** commoner than in the general population — drawn as a **double line**.',
    '- **When only ONE parent is heterozygote:** either a **new mutation on the gamete from the other parent**, or **uniparental disomy** — the child **inherits two copies of the heterozygote mutant allele** from the one carrier parent.',
    '',
    '### Examples of AR disorders',
    '- **Six named:** **cystic fibrosis · Hurler’s syndrome (MPS I) · phenylketonuria · galactosaemia · thalassaemia · Gaucher disease**.',
    '',
    '*Thalassaemia appears only as this list item; its inheritance is all the course material teaches of it. No cached deck teaches it as a disease — a corpus gap, not a deferral failure.*',
    '',
    'Src: L6 pp.52–54 (p.53 pedigree read visually)'
  ].join('\n'),
  qs: []
},

{
  id: 'gen-16', w: 'must',
  h: 'X-linked recessive, and the isolated case',
  body: [
    '**Sex-linked inheritance:** genes **on either sex chromosome** — **X-linked** or **Y-linked**.',
    '',
    '### The rules of transmission',
    '- **Why carriers transmit:** in **severe** X-linked conditions **affected males often do not survive to have children**, so transmission is **usually only by healthy female carriers**.',
    '- **A carrier mother —** **½ of daughters carriers**, **½ of sons affected**.',
    '- **An affected father —** **Y to all sons, who are unaffected**; **X to all daughters, who are ALL carriers**. Hence **no male-to-male transmission, ever**.',
    '- **Obligate carrier female —** **one affected son AND one affected male relative in the female line**, **or two affected sons**. **All daughters of affected males** qualify.',
    '',
    '### The isolated case — a woman with only ONE affected son',
    '',
    '|Possibility|Risk in future sons|',
    '|---|---|',
    '|**She is a carrier**|**½**|',
    '|**New mutation** in the gamete that conceived him, at meiosis|**negligible**|',
    '|**Gonadal mosaicism** — mutation in **early mitotic division of her own embryo**|**variable**, by the **proportion of her ova carrying it**|',
    '',
    '*That slide is cut off at "the proportion of the ova that carry …"; it ends "the mutation" (not taken from the course material).*',
    '',
    '- **Examples:** **haemophilia A and B · colour blindness · G6PD deficiency · ocular albinism · Hunter’s disease (MPS II) · Duchenne muscular dystrophy**.',
    '',
    '*Haemophilia A is a disease in `haematology`, Duchenne in `neurological`; both stay here as the inheritance examples the deck prints.*',
    '',
    'Src: L6 pp.55–59 (p.57 pedigree read visually)'
  ].join('\n'),
  qs: []
},

{
  id: 'gen-17', w: 'high',
  h: 'X-linked dominant and Y-linked',
  body: [
    '### X-linked dominant',
    '- **Uncommon, and defined by the female:** **manifest in the HETEROZYGOUS female** as well as the male carrying it on his single X.',
    '- **Affected male —** transmits to **ALL his daughters and NONE of his sons**.',
    '- **So: an excess of affected females**, and **direct male-to-male transmission cannot occur**.',
    '- **Example —** **vitamin D resistant rickets**.',
    '',
    '### Y-linked',
    '- **Only males affected.**',
    '- **Affected male —** transmits to **ALL his sons and NONE of his daughters** — the mirror of X-linked dominant.',
    '- **Examples —** **hairy ears** · **webbed toes**.',
    '- **Why the list is short:** Y-linked genes for **sexual differentiation and spermatogenesis** cause **infertility** when mutated, so they are **rarely transmitted**.',
    '',
    '*Rickets as a disease is `nutrition`; the examinable fact here is the pattern.*',
    '',
    'Src: L6 pp.60–61'
  ].join('\n'),
  qs: []
},

{
  id: 'gen-18', w: 'know',
  h: 'The unusual mechanisms the deck names and never returns to',
  body: [
    'L6’s p3 classification (gen-1) lists these as two of its four mechanisms and never returns to them. **Supplied (not taken from the course material)** except where marked.',
    '',
    '### Fragile X syndrome',
    '- **The essence:** the **commonest INHERITED cause of intellectual disability** — a **CGG trinucleotide repeat expansion in FMR1** on the X.',
    '- **Phenotype —** **long face · large ears · macroorchidism after puberty**, with **autistic features**.',
    '- **Why "unusual" —** the repeat **expands between generations (anticipation)**, and a **normal transmitting male** passes a premutation to daughters whose sons are affected.',
    '',
    '### Mitochondrial inheritance',
    '- **Maternal only:** an **affected mother transmits to ALL her children**, an **affected father to NONE**. No other pedigree looks like this.',
    '- **Heteroplasmy —** mutant load varies between tissues, so **severity varies widely within one family**.',
    '- **Hits high-energy tissues —** **brain and muscle**; **MELAS**, **Leber hereditary optic neuropathy**.',
    '',
    '### Imprinting and uniparental disomy',
    '- **Imprinting —** expression depends on the **parent of origin**. **Prader–Willi = loss of the PATERNAL 15q11-13**; **Angelman = loss of the MATERNAL** copy of the same region — one deletion, two diseases.',
    '- **Uniparental disomy —** **both copies of a chromosome from ONE parent**. Sourced: L6 names it as the explanation for an AR disorder with only one carrier parent (gen-15).',
    '',
    '### Multifactorial',
    '- **Multifactorial:** **gene–environment interaction** plus **epigenetic influence** on gene expression early in life.',
    '- **Low recurrence risk —** sourced, and the deck’s own example is **spina bifida** (gen-12).',
    '',
    'Src: gap opened by L6 p.3 and closed from general medical knowledge; uniparental disomy and multifactorial sourced to L6 pp.3, 37, 52'
  ].join('\n'),
  qs: []
}

    ]
  }
};
