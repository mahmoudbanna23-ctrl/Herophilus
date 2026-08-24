/* Grade Gain Ophthalmology — Topic 6, "Conjunctiva"
 * VERBATIM staging record. Source: Semester 8\Opthalmo\Questions\ophthalmology qb.pdf
 *
 * PAGE MAP ACTUALLY USED (offset verified against the printed footer: PDF = book + 7;
 * PDF 40 carries footer "| P a g e 33", PDF 50 carries "| P a g e 43")
 *   book p.33 (PDF 40) — Q224–Q231  ( 8)  questions + topic banner "Conjunctiva / Questions"
 *   book p.34 (PDF 41) — Q232–Q241  (10)  questions
 *   book p.35 (PDF 42) — Q242–Q250  ( 9)  questions
 *   book p.36 (PDF 43) — Q251–Q255  ( 5)  questions — Q254 and Q255 carry PHOTOGRAPHS;
 *                                        the lower third of the page is white
 *   book p.37 (PDF 44) — Q256–Q260  ( 5)  questions — Q256, Q257 and Q258 carry PHOTOGRAPHS;
 *                                        the lower third of the page is white
 *   book p.38 (PDF 45) — Q261–Q269  ( 9)  questions
 *   book p.39 (PDF 46) — Q270–Q277  ( 8)  questions
 *   book p.40 (PDF 47) — Q278–Q285  ( 8)  questions
 *   book p.41 (PDF 48) — Q286–Q288  ( 3)  QUESTIONS in the LEFT column (Q288 carries a
 *                                        PHOTOGRAPH)  +  ANSWERS Q224–Q232 in the RIGHT
 *                                        column under the banner "Conjunctiva / Answers"
 *   book p.42 (PDF 49) — ANSWERS Q233–Q277  (left column Q233–Q263, right column Q264–Q277)
 *   book p.43 (PDF 50) — ANSWERS Q278–Q288, ending with "288. Correct Answer: A"; the lower
 *                                        half of the page is white
 *   book p.44 (PDF 51) — topic 7 "Sclera" begins at Q289  → boundary confirmed, and it
 *                                        matches the page map already recorded in gg-t7.array.js
 *
 * ⚠️ THE BRIEF'S RENDER RANGE WAS ONE PAGE SHORT. It supplied book pp.33–42 (p-040…p-049)
 *    "and p-049 is rendered for exactly this reason". Book p.42 does NOT end the topic:
 *    its answer block stops dead at "277. Correct Answer: C" with the rest of the right
 *    column white, and ELEVEN keys (Q278–Q288) plus FOUR of the topic's nine explanation
 *    boxes are on book p.43. That page was rendered here
 *    (…\scratchpad\oph\bank\gg-t6b\p-050.png) and read in full. Without it the topic
 *    could not have been closed.
 *
 * ⚠️ WHICH WAY THE "Page As" FIGURE WENT: it is CORRECT AS A START and WRONG AS A SPAN.
 *    The contents page says the answers start on book p.41 and the first key, "224.
 *    Correct Answer: D", is indeed in the right column of book p.41. But the answers then
 *    run across THREE pages — 41, 42 and 43 — because this is the second-largest topic in
 *    the bank and because four of the boxes are long. So: no repeat of the topic-2/topic-3
 *    defect where the stated page was simply the wrong page; the new failure mode is that
 *    the figure says nothing about where the answers END, and here they end two pages later.
 *    Measured, not assumed: p.44 was rendered and read in full and carries no Conjunctiva
 *    key of any kind, only the Sclera banner and Sclera questions from Q289.
 *
 * ⚠️⚠️ A QUESTION TAIL DOES SHARE THE FIRST ANSWER PAGE — the defect the brief warned about,
 *    and it is bigger here than on topic 3. Book p.41's LEFT column carries Q286, Q287 and
 *    Q288 in full (Q288 with its photograph and four options) while the RIGHT column of the
 *    same page opens the answer block. Reading only the right column of p.41 would have lost
 *    three questions, one of them a back-reference pair and one an image question, and would
 *    have produced a count of 62 against a promise of 65.
 *
 * SHOW-THROUGH: present and NOT transcribed. Behind the "Conjunctiva / Answers" banner in
 *    the right column of book p.41 a faint mirrored block of text is visible — it is the
 *    reverse of the sheet (book p.42 does not face it; this is p.40's Q278 stem bleeding
 *    through) and it is not printed content. Same defect, same place, as topics 4 and 7.
 *
 * COUNT: 65 printed, Q224–Q288 continuous with no gap and no repeat of a NUMBER.
 *        The contents page promised 65 and was EXACT — the FIFTH exact promise running on
 *        this bank (71, 41, 26, 26, 65). Counted three ways and all three agree: per-page
 *        tally 8+10+9+5+5+9+8+8+3 = 65; last minus first plus one = 288−224+1 = 65; and the
 *        answer block itself prints 65 numbered keys across pp.41–43.
 *
 * EXPLANATION BOXES: 9 printed — Q230, Q231, Q259, Q264, Q268, Q278, Q284, Q286, Q287.
 *        The other 56 print the key letter alone.
 *        (Topic 1 printed 0 in 71, topic 2 printed 8 in 41, topic 3 printed 4 in 26,
 *         topic 4 printed 6 in 26, topic 7 printed 4 in 8. Box presence remains a property
 *         of the PAGE, not of the bank — and note that here 4 of the 9 are on ONE page,
 *         book p.43, which is the least crowded answer page in the topic.)
 *
 * IMAGE QUESTIONS: 6 — Q254, Q255, Q256, Q257, Q258, Q288. Every photograph was cropped out
 *        at 2× and LOOKED AT (crops in …\scratchpad\oph\bank\gg-t6crop\). Findings:
 *        • ⚠️ Q254 AND Q257 ARE THE SAME PHOTOGRAPH, reprinted two pages apart — an elderly
 *          patient's two eyes from the front, the left eye with crusted discharge on the
 *          lashes and at the medial canthus. Verified by looking at both crops side by side.
 *          The two questions are consistent with each other (Q254 keys "glued eye upon
 *          wakening", Q257 keys "Bacterial"), so this is a deliberate re-use, not a fault.
 *        • ⚠️ Q255 AND Q258 ARE VISUALLY THE SAME KIND OF PICTURE — chalky white deposits
 *          scattered over a red conjunctival surface — yet the bank keys Q255 to TRACHOMA
 *          and Q258 to ANTIHISTAMINE, i.e. to allergy. Recorded, not corrected. See the
 *          notes on those two entries.
 *        • Q256 is an everted lid whose tarsal surface is covered by a dense whitish sheet.
 *        • Q288 is a slit-lamp view of the SUPERIOR limbus with a row of dark shallow
 *          notches along the upper corneal margin.
 *        The bank prints no figure numbers and no captions on any of the six.
 *
 * ⚠️ BACK-REFERENCE: 1 — Q287 → Q286. "In the previous Q" and the antecedent really is the
 *        question immediately above it in the same column (Q286, the sandy-sensation
 *        vignette). Verified by reading Q286 itself rather than assuming; the topic-4 trap
 *        where Q151's antecedent was Q149 and not Q150 does NOT recur here.
 *
 * ⚠️⚠️ ONE QUESTION IS PRINTED TWICE, WORD FOR WORD: Q234 and Q269 — the 18-year-old contact
 *        lens wearer with 6/6 and a negative fluorescein test. Same stem, same four options
 *        in the same order, same key (B). The only difference is that Q269 ends option D
 *        with a full stop and Q234 does not. Both are staged and both are drafted, because
 *        both are printed; the hub decides whether to fold.
 *        A NEAR-duplicate pair as well: Q229 and Q277 on viral epidemic keratoconjunctivitis,
 *        same four options in the same order and the same key (C), differing only in the
 *        stem's "there is usually:" vs "there is:" and in two option spellings
 *        ("muco-purulent"/"muco purulent", "Mucoid ropy"/"Mucous ropy").
 *
 * ⚠️⚠️ ONE EPONYM IS PRINTED FOUR WAYS INSIDE THIS ONE TOPIC:
 *        Q231 stem      "Trant's spots"
 *        Q231 box       "Tranta spots"          (the book's own spelling, p.88)
 *        Q261 option B  "Taranta's spots"
 *        Q288 option B  "Trantas dots"
 *        And "Herbert" is printed three ways: "Herbert's rosettes" (Q230), "Herbert's pits"
 *        (Q233, Q246, Q261), "Herbet pits" (Q288 option A). All kept as printed.
 *
 * VERBATIM TYPOS AND ODDITIES KEPT (all re-read on the page image before being written down):
 *        Q231  "Trant's spots"                       — see the eponym note above
 *        Q235 A "Moraxella Axenfeld bacilli"         — as printed (usual form: Morax-Axenfeld)
 *        Q238 D "Hemophilus Aegyptus"                — as printed
 *        Q239 B "Tubercula – protein"                — as printed, with the dash
 *        Q250 A "Koch Week's bacilli"                — as printed
 *        Q251 D "Topical antivirals are supportaive."
 *        Q251  the stem's colon is underlined; so is Q252's
 *        Q252 D "pathogenomic"
 *        Q253  stem "EXCPT"                          — not underlined, unlike every other EXCEPT
 *        Q254 C "Glued eye at the ened of the day"
 *        Q256 B "Staphylococcus aures"
 *        Q256 A "Chlamydia trachomatous"
 *        Q261 B "Taranta's spots"
 *        Q263  stem "vermal conjunctivitis"          — for "vernal"
 *        Q271 A "Phlycterular conjunctivitis"
 *        Q272 B "Inclusion blennorrhea"              — and Q275 D prints "Inclusion blenorrhoea"
 *        Q273  "On august 1999"                      — lower-case month
 *        Q275 A "Goncocci."
 *        Q276  stem opens lower-case: "the treatment of herpes simplex conjunctivitis…"
 *        Q279 D "Ptrygium."
 *        Q281  "corrected with-1.00 cylinder"        — missing space before the sphere sign
 *        Q286  "sub epithelial"                      — split, as printed
 *        Q287 E "Mast ceil stabilizer."              — for "cell"
 *        Q288 A "Herbet pits in trachoma"
 *        Q230 box "Arlt' s line"                     — space between the apostrophe and the s,
 *                                                      and the box breaks the line mid-phrase
 *        Q284 box the bold run starts mid-word: "may be treate|d with lubricating drops"
 *        Q287 box the numbered list is misprinted — item 3 reads "Topical mast cell
 *              stabilizers 4. Topical antihistamines." so the list runs 1,2,3(+4),4,5,6 and
 *              has seven items under six numbers. Kept exactly as printed.
 *
 * OPTION COUNTS: 64 questions print four options (A–D). Q287 prints FIVE (A–E).
 *
 * Read 2026-08-24. Eleven pages (book 33–43) rendered at 200 dpi and read visually in full,
 * both columns of every page; the six photographs re-cropped at 2× and looked at
 * individually. No source file was modified, renamed, moved or deleted.
 */

var GG_T6_STAGED = [

{ n:224, p:33, key:'D',
  stem:'A recurrent bilateral conjunctivitis occurring with the onset of hot weather in young boys with symptoms of burning, itching, and lacrimation with large flat topped cobble stone papillae raised areas in the palpebral conjunctiva is:',
  opts:['Trachoma','Phlyctenular conjunctivitis','Mucopurulent conjunctivitis','Vernal keratoconjunctivitis'],
  note:'Opens the topic directly under the "Conjunctiva / Questions" banner. "cobble stone" printed as two words here; Q272 prints it the same way, Q280 prints "cobble stone" and Q286 "Cobble stone".' },

{ n:225, p:33, key:'A',
  stem:'A 12-year-old boy receiving long term treatment for spring catarrh, developed defective vision in both eyes. The likely cause is:',
  opts:['Posterior subcapsular cataract','Retinopathy of prematurity','Optic neuritis','Vitreous hemorrhage'],
  note:'The drug is never named in the stem — "long term treatment for spring catarrh" is the whole clue. No box.' },

{ n:226, p:33, key:'C',
  stem:'A young child suffering from fever and sore throat began to complain of lacrimation. On examination, follicles were found in the lower palpebral conjunctiva with tender preauricular lymph nodes. The most probable diagnosis is:',
  opts:['Trachoma','Staphylococcal conjunctivitis','Adenoviral conjunctivitis','Phlyctenular conjunctivitis'],
  note:'Pharyngoconjunctival fever without the phrase being used. No box.' },

{ n:227, p:33, key:'C',
  stem:'Patching of the eye is contraindicated in:',
  opts:['Corneal abrasion','Bacterial corneal ulcer','Mucopurulent conjunctivitis','After glaucoma surgery'],
  note:'Pairs with Q238 option B (eye bandages) and Q247 (tarsorrhaphy) — the same principle asked three ways in one topic.' },

{ n:228, p:33, key:'C',
  stem:'A ten-year-old boy complains of itching. On examination, there are mucoid nodules with smooth rounded surface on the limbus, and mucous white ropy mucopurulent conjunctival discharge. He most probably suffers from:',
  opts:['Trachoma','Mucopurulent conjunctivitis','Bulbar spring catarrh','Purulent conjunctivitis'],
  note:'The stem prints both "mucous white ropy" and "mucopurulent" of the same discharge — internally inconsistent, kept as printed.' },

{ n:229, p:33, key:'C',
  stem:'In viral epidemic kerato-conjunctivitis characteristically there is usually:',
  opts:['Copious purulent discharge','Copious muco-purulent discharge','Excessive watery lacrimation','Mucoid ropy white discharge'],
  note:'⚠️ NEAR-DUPLICATE of Q277 — same four options in the same order, same key. "kerato-conjunctivitis" is hyphenated here only because the line breaks; Q277 prints it closed up.' },

{ n:230, p:33, key:'C',
  stem:"Corneal Herbert's rosettes are found in:",
  opts:['Mucopurulent conjunctivitis','Phlyctenular keratoconjunctivitis','Active trachoma','Spring catarrh'],
  box:"Cicatricial trachoma:\nIt is prevalent in middle age.\n1. Linear or stellate conjunctival scars in mild cases, or broad confluent scars (Arlt' s line) in\nsevere disease. Scarring is most prominent on the upper tarsal plate.\n2. Superior limbal follicles may resolve to leave a row of shallow depressions (Herbert pits).\n3. Post- trachomatous concretions (PTCs) cause chronic irritation and foreign body sensation.\n4. Trichiasis, corneal vascularization and cicatricial entropion\n5. Severe corneal opacification.",
  note:'⚠️ THE BOX ANSWERS A DIFFERENT QUESTION FROM THE ONE ASKED. The stem asks about ROSETTES, which are the ACTIVE limbal follicles, and the key is "Active trachoma"; the box is a five-item description of CICATRICIAL trachoma and mentions rosettes nowhere — its item 2 is about the PITS the rosettes leave behind. Sentence 2 is underlined in the original. The box is transcribed verbatim including "Arlt\' s line" with its stray space and the mid-phrase line break after "in".' },

{ n:231, p:33, key:'B',
  stem:"Trant's spots are noticed in cases of:",
  opts:['Active trachoma','Bulbar spring catarrh','Corneal phlycten','Vitamin A deficiency'],
  box:"Signs of VKC:\n1. Conjunctival signs: Diffuse conjunctival injection and Tarsal giant papillae\n2. Limbal signs:\n- Limbal papillae with whitish dots (Tranta spots) that eosinophils consist of degenerated\n- Limbal disease can result in a limbal stem cell deficiency which can lead to corneal neovascularization",
  note:'⚠️ The box\'s own sentence is scrambled: it prints "(Tranta spots) that eosinophils consist of degenerated", where the book (p.88) prints "that consist of degenerated eosinophils". Kept exactly as the bank prints it. "- Limbal papillae with whitish dots (Tranta spots)" is underlined and bold. The eponym is spelt "Trant\'s" in the stem and "Tranta" in the box, four lines apart.' },

{ n:232, p:34, key:'B',
  stem:'A painful, tender, non-itchy localized redness of the conjunctiva can be due to:',
  opts:['Bulbar spring catarrh.','Episcleritis.','Vascular pterygium.','Phlyctenular conjunctivitis'],
  note:'Only option D is printed without a full stop. The keyed answer is a SCLERAL diagnosis inside the conjunctiva topic.' },

{ n:233, p:34, key:'D',
  stem:'In trachoma the patient is infectious when there is:',
  opts:["Arlt's line","Herbert's pits",'Post-trachomatous concretions.','Follicles and papillae in the palpebral conjunctiva.'],
  note:'A and B print without full stops, C and D with them. Three of the four options are cicatricial signs; only D is active.' },

{ n:234, p:34, key:'B',
  stem:'A female patient 18 years old, who is contact lens wearer since two years, is complaining of redness, lacrimation and foreign body sensation of both eyes. On examination, visual acuity was 6/6 with negative fluorescein test. The expected diagnosis can be:',
  opts:['Acute anterior uveitis.','Giant papillary conjunctivitis.','Bacterial corneal ulcer.','Acute congestive glaucoma'],
  note:'⚠️ EXACT DUPLICATE of Q269, four pages later — same stem, same options in the same order, same key. The ONLY typographic difference in the whole item is that Q269 ends option D with a full stop and this printing does not.' },

{ n:235, p:34, key:'A',
  stem:'Organisms causing angular conjunctivitis are:',
  opts:['Moraxella Axenfeld bacilli','Pneumococci','Gonococci','Adenovirus'],
  note:'"Moraxella Axenfeld bacilli" as printed. Angular conjunctivitis is TITLED on L6 slide 24 but its organism is never named there, and book ch.6 records angular conjunctivitis as absent — so the option list is the only place in the module the organism appears.' },

{ n:236, p:34, key:'B',
  stem:'In vernal catarrh, the characteristic cells are:',
  opts:['Macrophage','Eosinophils','Neutrophils','Epithelioid cells'],
  note:'Answered directly by Q231\'s own box two pages earlier ("degenerated eosinophils"), and by book p.88. No box of its own.' },

{ n:237, p:34, key:'A',
  stem:'True membrane formation occurs in the following conditions:',
  opts:['Diphtheritic conjunctivitis.','Allergic conjunctivitis.','Staphylococcal blepharitis','Phlyctenular conjunctivitis.'],
  note:'Option C is the only one printed without a full stop. The stem says "conditions" plural but only one is keyed.' },

{ n:238, p:34, key:'B',
  stem:'In treatment of mucopurulent conjunctivitis, all are true EXCEPT:',
  opts:['Frequent washing with boric acid 4%.','Eye bandages are used to avoid photophobia.','Local antibiotic eye drops are used.','Sulphonamide is effective for Hemophilus Aegyptus.'],
  note:'"EXCEPT" is underlined. "Hemophilus Aegyptus" as printed. A small ink smudge sits over the "n" of "bandages" in option B on the scan; the word is legible and is "bandages".' },

{ n:239, p:34, key:'C',
  stem:'The antigen in Phlyctenular conjunctivitis could be all EXCEPT:',
  opts:['Intestinal parasites','Tubercula – protein','Staphylococcal blepharitis.','Pollens'],
  note:'⚠️ THE KEY IS AGAINST THE BOOK. "EXCEPT" is underlined, so the keyed option C is being called NOT an antigen — but book ch.5 (eyelids) lists "Chronic conjunctivitis, and phlyctens" among the complications of staphylococcal blepharitis, which makes C a genuine cause. Option D, pollens, is the type-I allergen that has no part in phlyctenulosis. Keyed as printed at C; the discrepancy is recorded in the draft entry and the key is not disputed. Options A, C and D print with inconsistent full stops (only C has one).' },

{ n:240, p:34, key:'C',
  stem:'Purulent conjunctivitis has the following characters EXCEPT:',
  opts:['Discharge of pus','Acute suppurative inflammation of conjunctiva','No tendency for corneal involvement','Fever and malaise'],
  note:'"EXCEPT" is underlined.' },

{ n:241, p:34, key:'B',
  stem:'Papillae of spring catarrh have the following characteristics EXCEPT:',
  opts:['Large papillae','Always involving the fornix','Flat-topped','Ropy discharge'],
  note:'"EXCEPT" is underlined. Option D is not a characteristic OF the papillae at all — it is a feature of the disease — but it is true of spring catarrh, so it is not the exception. The keyed point (papillae stop at the tarsal plate and spare the fornix) is asked again from the other side at Q263.' },

{ n:242, p:35, key:'D',
  stem:'Complications of trachoma include:',
  opts:['Corneal descemetocele','Subconjunctival hemorrhage','Enlarged preauricular lymph nodes','Cicatricial ectropion'],
  note:'⚠️ THE KEYED OPTION MISNAMES THE COMPLICATION. Trachoma scars the tarsal plate and turns the lid IN — cicatricial ENTROPION, which is exactly what this bank\'s own Q230 box prints ("Trichiasis, corneal vascularization and cicatricial entropion") and what book p.93 prints. The option here reads ECTROPION. Keyed as printed at D; the discrepancy is recorded in the draft entry and the key is not disputed. Note that Q246 offers "Cicatricial entropion." correctly spelt, four questions later.' },

{ n:243, p:35, key:'C',
  stem:'Staphylococcal infections in ophthalmology do NOT include:',
  opts:['Blepharitis','Corneal ulcer','Giant papillary conjunctivitis','Endophthalmitis'],
  note:'"NOT" is underlined.' },

{ n:244, p:35, key:'C',
  stem:'A clear zone between the lesion and the limbus is NOT present in:',
  opts:['Arcus senilis',"Catarrhal corneal ulcer",'Trachomatous pannus',"Fleischer's ring"],
  note:'"NOT" is underlined. The only question in the topic that turns on the LUCID INTERVAL; none of the four lesions is described anywhere in L6.' },

{ n:245, p:35, key:'B',
  stem:'Causes of localized conjunctival redness include:',
  opts:['Acute viral conjunctivitis','Phlyctenular keratoconjunctivitis','Mucopurulent conjunctivitis','Hay fever'],
  note:'Pairs with Q232 — localized redness asked twice, keyed to two different diagnoses (episcleritis there, phlycten here), and the discriminator between them is the pain/tenderness in Q232.' },

{ n:246, p:35, key:'C',
  stem:'Signs of activity of trachoma include:',
  opts:["Herbert's pits of the upper limbus.",'Scarring of the palpebral conjunctiva.','Follicles in the upper palpebral conjunctiva.','Cicatricial entropion.'],
  note:'The mirror image of Q233. All four options print with full stops here.' },

{ n:247, p:35, key:'B',
  stem:'A tarsorrhaphy is contraindicated in:',
  opts:['Neuroparalytic keratitis.','Mucopurulent conjunctivitis.','Paralytic ectropion.','Malignant exophthalmos'],
  note:'Option D alone prints without a full stop. Tarsorrhaphy is named in book ch.4 and ch.5 and in the cornea deck, never in L6.' },

{ n:248, p:35, key:'D',
  stem:'A subconjunctival hemorrhage:',
  opts:['May cause blood to pass into the cornea.','It is usually associated with reduced vision.','It is always associated with some form of eye discomfort.','Usually disappears in a couple of weeks.'],
  note:'Options B, C and D open with "It is"/"Usually" as free-standing sentences under a stem that is only a noun phrase — the bank\'s own construction, kept.' },

{ n:249, p:35, key:'D',
  stem:'A 30-year-old male presented with a triangular encroachment of the conjunctiva on the cornea with small opacities on the cornea anterior to the apex of the lesion, he observed it one year ago & stated that it is progressively enlarging, no previous surgery done:',
  opts:['Visual deterioration may be due to induced myopia.','Diplopia with limitation of eye movement may occur.','It is better not to operate.','Can be treated by excision with conjunctival auto graft.'],
  note:'"&" for "and", twice in the topic (also Q250, Q284). "auto graft" printed as two words. Contrast with Q281, where a pterygium NOT threatening the axis is keyed to glasses and follow-up.' },

{ n:250, p:35, key:'D',
  stem:'A 5-year-old male child presented with an acute onset of redness; mucopurulent discharge, & conjunctival hyperemia associated with mild lid edema:',
  opts:["Koch Week's bacilli is the causative organism of such cases in winter.",'Associated central corneal ulcers should be excluded.','Culture & sensitivity testing are done routinely.','Petechial hemorrhages are more common in the pneumococcal type.'],
  note:'"Koch Week\'s" as printed. The semicolon after "redness" and the "&" are the bank\'s own punctuation.' },

{ n:251, p:36, key:'C',
  stem:'Concerning adenoviral conjunctivitis:',
  opts:['It is highly contagious.','It is characterized by follicles occurring in the palpebral conjunctiva.','Subconjunctival hemorrhage is a common finding.','Topical antivirals are supportaive.'],
  note:'⚠️ MORE THAN ONE OPTION IS TRUE AS THE BOOK PRINTS IT. The stem\'s colon is UNDERLINED and there is no "EXCEPT", so a single true statement is wanted; but book p.90 prints "It is highly contagious" verbatim (option A) and lists conjunctival follicles among the signs (option B). The key is C. Recorded, not disputed; discussed in the draft entry. "supportaive" as printed.' },

{ n:252, p:36, key:'A',
  stem:'Concerning trachoma:',
  opts:['Its incidence declined due to use of clean household water.','It is caused by chlamydia species D, B, F.','T1 is characterized by the presence of small raised upper tarsal conjunctival follicles.','Conjunctival scarring is pathogenomic of trachoma.'],
  note:'The stem\'s colon is underlined, as in Q251. "pathogenomic" as printed. Option C\'s "T1" is not a WHO grade — the WHO code for that finding is TF (book p.93).' },

{ n:253, p:36, key:'B',
  stem:'All of the following are true regarding Vernal keratoconjunctivitis EXCPT:',
  opts:['It is probably due to exposure to UV rays & dust.','Hot compresses are beneficial.','Topical steroids may be needed for short intervals.','The bulbar type is characterized by gelatinous masses which start medially & laterally.'],
  note:'⚠️ "EXCPT" as printed, and — alone among the topic\'s twelve EXCEPT stems — it is NOT underlined and NOT bold. Two "&" again.' },

{ n:254, p:36, key:'B',
  stem:'Which of the following helps in the confirmation of diagnosis of a patient with mucopurulent discharge as in the photo?',
  opts:['Bilaterality','Glued eye upon wakening','Glued eye at the ened of the day','All of the above'],
  image:true,
  note:'⚠️ IMAGE QUESTION — a colour clinical photograph of an elderly patient\'s two eyes from the front, the patient\'s left eye showing crusted yellow-white discharge on the lower lashes and at the medial canthus, the right eye mildly injected. NO caption, NO figure number. ⚠️ THE SAME PHOTOGRAPH IS REPRINTED AS Q257 on the next page. "ened" as printed; "wakening" as printed. A crop must be cut for this entry.' },

{ n:255, p:36, key:'B',
  stem:'The sign in the opposite photo is caused by:',
  opts:['Allergy','Trachoma','Virus','All of the above'],
  image:true,
  note:'⚠️ IMAGE QUESTION — a close colour photograph of a red, velvety conjunctival surface (a lid drawn away from the globe, the dark palpebral fissure along the lower edge) carrying scattered clusters of discrete chalky yellow-white raised deposits. NO caption, NO figure number, NO arrow. ⚠️ The picture is of the same visual family as Q258\'s, which the bank keys to allergy; this one it keys to trachoma. "the opposite photo" is a page-layout back-reference to the picture printed immediately below the stem. A crop must be cut.' },

{ n:256, p:37, key:'A',
  stem:'The organism responsible for the following sign is:',
  opts:['Chlamydia trachomatous','Staphylococcus aures','Streptococcus','Moraxella'],
  image:true,
  note:'⚠️ IMAGE QUESTION — a close colour photograph of an eyelid with its lashes along the lower edge and the palpebral aperture as a dark slit, the exposed conjunctival surface covered by a dense, confluent, whitish-grey sheet against surrounding red tissue. NO caption, NO figure number. "trachomatous" and "aures" as printed. A crop must be cut.' },

{ n:257, p:37, key:'B',
  stem:'The following picture is caused by:',
  opts:['Virus','Bacterial','Allergy','None of the above'],
  image:true,
  note:'⚠️ IMAGE QUESTION, and ⚠️ THE PHOTOGRAPH IS THE ONE ALREADY PRINTED AT Q254 — verified by looking at both crops: identical elderly face, identical crusting on the left lower lashes and medial canthus, identical framing. The option list is grammatically mixed (three nouns and one adjective, "Bacterial"), as printed. A crop must be cut; it may be the same crop as Q254\'s.' },

{ n:258, p:37, key:'C',
  stem:'What is the treatment for the following condition?',
  opts:['Antibiotic','Antiviral','Antihistamine','All of the above'],
  image:true,
  note:'⚠️ IMAGE QUESTION — a close colour photograph of an everted lid, its dark margin running diagonally across the frame, the tarsal/limbal surface red and velvety and studded with discrete chalky white dots that become confluent towards the upper right. NO caption, NO figure number. ⚠️ Visually this is the same kind of picture as Q255\'s, and the bank keys the two to different diseases — allergy here, trachoma there. A crop must be cut. The stem is the only one in the topic ending in a question mark other than Q254 and Q288.' },

{ n:259, p:37, key:'B',
  stem:'A 50-year-old female with rheumatoid arthritis complained of red eye, tearing, and burning sensation for the past several years. She also complained that her vision is not as clear as before and improved with blinking. The most probable diagnosis is:',
  opts:['Allergic conjunctivitis.','Dry eye.','Trachoma.','Chronic dacryocystitis.'],
  box:"Rheumatoid arthritis → commonly associated with secondary Sjögren's syndrome → dry eye.\nChronic red eye, burning, foreign body sensation → hallmark of keratoconjunctivitis sicca.\nBlurred vision improves with blinking → classic sign of tear film instability (dry eye).",
  note:'The box uses three arrows and underlines "Sjögren\'s syndrome", "keratoconjunctivitis sicca" and "instability (dry eye)"; "Blurred vision improves with blinking" is bold. Transcribed verbatim. ⚠️ Book p.91 attributes "Blurred vision that improves with blinking" to ACUTE BACTERIAL conjunctivitis (a discharge on the ocular surface), marked as tutorial; the box attributes it to tear-film instability. Both readings are recorded in the draft entry.' },

{ n:260, p:37, key:'D',
  stem:'The most commonly serious complication of muco-purulent conjunctivitis is:',
  opts:['Madarosis.','Conjunctival scarring.','Dry eye.','Corneal ulcer.'],
  note:'"most commonly serious" as printed — the adverb where an adjective belongs.' },

{ n:261, p:38, key:'B',
  stem:'All of the following may be seen with trachoma except:',
  opts:['Follicular conjunctivitis.',"Taranta's spots.","Herbert's pits.",'Conjunctival scarring.'],
  note:'⚠️ "except" is lower-case and NOT underlined here, unlike Q238/Q239/Q240/Q241/Q243/Q244. "Taranta\'s spots" — the third of the topic\'s four spellings of the same eponym.' },

{ n:262, p:38, key:'A',
  stem:'Lacrimation in neonates necessitates proper ophthalmic examination to check for the following except:',
  opts:['Microphthalmia.','Birth corneal trauma.','Ophthalmia neonatorum.','Nasolacrimal duct obstruction.'],
  note:'"except" lower-case and unmarked. Note what is NOT on the list: congenital glaucoma, whose classic triad opens with epiphora (book ch.16, printed 212).' },

{ n:263, p:38, key:'C',
  stem:'The following sign is not found in vermal conjunctivitis:',
  opts:['Bulbar masses on both sides of the limbus.','Ropy discharge in the fornix','Papillae in the lower fornix.','Ciliary injection.'],
  note:'⚠️ "vermal" for "vernal", as printed. ⚠️ TWO OPTIONS ARE DEFENSIBLE: the keyed C (papillae are bound to the tarsal plate and spare the fornix — the same point Q241 keys) and D (ciliary injection is a deep circumcorneal flush signalling corneal or uveal disease, and L6 slide 11 contrasts it explicitly with the conjunctival injection of slides 9–10). Keyed as printed at C. Option B alone prints without a full stop.' },

{ n:264, p:38, key:'B',
  stem:'Pterygium can be a cause of the following except:',
  opts:['Irregular astigmatism.','Keratoconus.','Dry eye',"Corneal vascularization."],
  box:"Pterygium is A fibrovascular growth of conjunctiva onto the cornea, usually nasal.\nAssociated with UV exposure, dust, and chronic irritation.",
  note:'The box\'s "is A fibrovascular" carries a stray capital A, as printed; "with UV exposure, dust, and chronic irritation." is bold and underlined. Option C alone prints without a full stop. The box answers Q267 as much as it answers this question.' },

{ n:265, p:38, key:'B',
  stem:'In ophthalmia neonatorum the most common dangerous causative organism is:',
  opts:['E. coli','Gonococci.','Xerosis bacilli.','Herpes simplex virus.'],
  note:'Option A alone prints without a full stop. "Xerosis bacilli" returns ZERO hits across all 36 cached ophthalmology decks and all 12 cached book chapters — it exists in this module only as this distractor.' },

{ n:266, p:38, key:'A',
  stem:'Vernal conjunctivitis is not treated with:',
  opts:['Antibiotics.','Corticosteroids.','Nonsteroidal anti-inflammatory.','Mast cell stabilizers.'],
  note:'"not" is neither bold nor underlined. Answered in full by Q287\'s box on book p.43.' },

{ n:267, p:38, key:'C',
  stem:'Pterygium is caused by the following factor:',
  opts:['Exposure to infra-red rays.','Exposure to ionic radiation.','Exposure to ultraviolet rays.','Exposure to an allergen.'],
  note:'"ionic radiation" as printed (for "ionizing"). Answered by Q264\'s box.' },

{ n:268, p:38, key:'A',
  stem:'Conjunctival follicles are present in the following except:',
  opts:['Spring catarrh.','Active trachoma.','Viral conjunctivitis.','Chlamydia conjunctivitis'],
  box:"Causes of Conjunctival follicles:\n1. Viral conjunctivitis\n2. Chlamydia conjunctivitis\n3. Hypersensitivity to topical medications (e.g., Brimonidine)\nCauses of Conjunctival papillae:\n1. Allergic conjunctivitis especially in vernal catarrh\n2. Prolonged contact lens wear\n3. Foreign body (as in artificial eye users)",
  note:'The box is a near-verbatim reprint of book p.86 — the follicle causes minus the tutorial-marked "Folliculosis in children", and the giant-papilla causes complete. "Viral conjunctivitis" is bold and underlined. Option D alone prints without a full stop. This is the topic\'s most reusable box: it also settles Q234/Q269, Q243, Q272 and Q275.' },

{ n:269, p:38, key:'B',
  stem:'A female patient 18-year-old, who is contact lens wearer since two years, is complaining of redness, lacrimation and foreign body sensation of both eyes. On examination, visual acuity was 6/6 with negative fluorescein test. The expected diagnosis can be:',
  opts:['Acute anterior uveitis.','Giant papillary conjunctivitis.','Bacterial corneal ulcer.','Acute congestive glaucoma.'],
  note:'⚠️ EXACT DUPLICATE of Q234. The stem differs by one hyphenation ("18-year-old" here, "18 years old" at Q234) and option D gains a full stop; the options, their order and the key are identical. Both printings are staged and drafted; the hub decides whether to fold.' },

{ n:270, p:39, key:'C',
  stem:'A child 5-year-old was presented with bilateral red eyes. His mother mentioned that his lids were stuck together on waking up in the morning. On examination, vision was 6/6, the lashes were glued together. The most reliable diagnosis is:',
  opts:['Spring catarrh.','Active trachoma.','Muco-purulent conjunctivitis.','Viral conjunctivitis.'],
  note:'The same discriminator the bank keys at Q254 (glued eye on wakening). "A child 5-year-old" word order as printed.' },

{ n:271, p:39, key:'C',
  stem:'A school teacher has noticed that one of her students was frequently rubbing his eyes. On examination, there was conjunctival injection and gelatinous masses on the limbus. This boy most probably suffers from:',
  opts:['Phlycterular conjunctivitis.','Mucopurulent conjunctivitis.','Bulbar spring catarrh.','Purulent conjunctivitis.'],
  note:'"Phlycterular" as printed. Same diagnosis as Q228, reached from the limbal masses alone.' },

{ n:272, p:39, key:'C',
  stem:'Cobble stone papillae are pathognomonic of:',
  opts:['Trachoma.','Inclusion blennorrhea.','Palpebral spring catarrh.','Adenoviral conjunctivitis.'],
  note:'"Inclusion blennorrhea" here; Q275 prints the same entity "Inclusion blenorrhoea". "pathognomonic" is spelt correctly here and "pathogenomic" at Q252.' },

{ n:273, p:39, key:'B',
  stem:'On august 1999, many of Egyptian citizens have complained of bilateral red watery eyes. On examination, a marked follicular reaction was present mainly on the lower palpebral conjunctiva, accompanied by preauricular lymphadenopathy. The possible diagnosis was:',
  opts:['Active trachoma.','Epidemic keratoconjunctivitis.','Mucopurulent conjunctivitis.','Purulent conjunctivitis.'],
  note:'Lower-case "august" as printed. The only question in the topic anchored to a real dated outbreak.' },

{ n:274, p:39, key:'C',
  stem:'An important complication of trachoma is dry eye due to:',
  opts:['Fibrosis of the palpebral conjunctiva affecting the Meibomian glands.','Healing of the pannus affects the Goblet cells.','Fibrosis of the upper fornix affects the accessory lacrimal glands.','Atrophy of the main lacrimal gland.'],
  note:'The four options are grammatically inconsistent (A and C mix "affecting"/"affects"), as printed. Book ch.6 records dry eye from trachomatous ductule destruction among the things it does NOT cover.' },

{ n:275, p:39, key:'A',
  stem:'A boy 11-year-old developed acute follicular conjunctivitis. The causative organism may be one of the following except:',
  opts:['Goncocci.','Adenovirus.','Herpes simplex.','Inclusion blenorrhoea.'],
  note:'"Goncocci" as printed. ⚠️ Option D names a DISEASE, not an organism, under a stem that asks for an organism — the bank\'s own category slip, kept. Answered by Q268\'s box.' },

{ n:276, p:39, key:'B',
  stem:'the treatment of herpes simplex conjunctivitis we may get benefit from:',
  opts:['Hot fomentations.','Cold compresses.','Lead acetate fomentations.','Boric acid lotion.'],
  note:'⚠️ The stem opens with a lower-case "the" and is missing its preposition ("In the treatment of…"). Kept exactly as printed.' },

{ n:277, p:39, key:'C',
  stem:'In viral epidemic keratoconjunctivitis characteristically there is:',
  opts:['Copious purulent discharge.','Copious muco purulent discharge.','Excessive watery lacrimation.','Mucous ropy white discharge.'],
  note:'⚠️ NEAR-DUPLICATE of Q229 — same four options in the same order, same key. Differences: Q229 adds "usually" to the stem and prints "muco-purulent" and "Mucoid ropy"; this printing prints "muco purulent" and "Mucous ropy", and puts a full stop on every option.' },

{ n:278, p:40, key:'B',
  stem:'After an attack of influenza, a patient came complaining of stitching pain in one eye with watering. Few days later he developed photophobia. To reach the correct diagnosis, choose one of the following:',
  opts:['Conjunctival smear for culture.','Fluorescein staining of the cornea.','Measuring the ocular tension.','Syringing of the lacrimal system.'],
  box:"Post-viral keratitis is suggested:\nPain, photophobia, watering\nUsually epithelial involvement\nFluorescein staining is the key investigation to detect corneal epithelial defects (e.g., dendritic lesions in herpes simplex keratitis, or superficial punctate keratitis post-viral).",
  note:'The box bolds and underlines "Fluorescein staining" and "detect corneal epithelial defects (e.g., dendritic"; the underline stops mid-phrase at "lesions". Transcribed verbatim. First key on book p.43.' },

{ n:279, p:40, key:'D',
  stem:'Kerato conjunctivitis include the following except:',
  opts:['Spring catarrh.','Trachoma.','Phlycten.','Ptrygium.'],
  note:'"Kerato conjunctivitis" split as two words in the stem; "Ptrygium" in option D. Both as printed.' },

{ n:280, p:40, key:'B',
  stem:'A 10-year-old boy complains of recurrent attacks of lacrimation, photophobia, extreme itching, and ropy white discharge. On eversion of his eye lids the palpebral conjunctiva may show:',
  opts:['Pink vascular tapering papillae.','Violet cobble stone papillae.','True membrane bleeds on removal.','Generalized follicular reaction.'],
  note:'The only place in the topic where the papillae of spring catarrh are given a COLOUR ("violet"), and it appears in no cached source — neither L6 nor book ch.6 assigns any colour to them.' },

{ n:281, p:40, key:'D',
  stem:'A 24-year-old soldier complains of triangular membrane encroaching from his nasal conjunctiva onto the cornea just beyond the limbus. His visual acuity is 6/12 that can be corrected with-1.00 cylinder to 6/6. The best management is:',
  opts:['Surgical excision.','Surgical excision and irradiation.','Regular follow up.','Glasses and follow up.'],
  note:'"with-1.00" printed closed up. ⚠️ Options C and D are both "follow up"; the discriminator is the word "Glasses", which the correctable astigmatism in the stem demands. Contrast Q249, where the lesion is progressive and encroaching and excision with an autograft is keyed.' },

{ n:282, p:40, key:'A',
  stem:'A 16-year-old female complained of a pigmented nodule situated near the limbus that has been there since childhood. Recently it increased in size. What would you advise the patient to?',
  opts:['Regular follow up.','Immediate complete excision.','Colored contact lens.','Corticosteroids therapy.'],
  note:'"What would you advise the patient to?" as printed — the sentence is left hanging. ⚠️ Conjunctival pigmented lesions are taught NOWHERE in this module: "naevus"/"nevus"/"melanosis"/"melanoma" return zero across all 36 cached decks and all 12 cached book chapters, book ch.6 records conjunctival tumours as "ABSENT ENTIRELY", and book ch.17 (Malignancies) prints no conjunctival naevus either. Answered from outside knowledge and tagged as such in the draft.' },

{ n:283, p:40, key:'C',
  stem:'A patient who received severe head trauma presented with large triangular sub conjunctival hemorrhage coming from the fornix. The next investigation is',
  opts:['Bleeding time.','Clotting time.','X ray skull','Fluorescein angiography'],
  note:'The stem ends with no colon and no full stop. "sub conjunctival" split, as printed. Options C and D print without full stops.' },

{ n:284, p:40, key:'D',
  stem:'A male patient complained of bilateral small yellow triangular masses on either side of the cornea. Your decision for management should be:',
  opts:['Immediate surgical excision.','Surgical excision followed by B irradiation.','Surgical excision and repair by conjunctival graft.','Artificial tears.'],
  box:"Pingueculum management:\n - Irritative symptoms may be treated with lubricating drops\n- Surgical excision for cosmesis only",
  note:'The box is a verbatim reprint of book p.94, including the book\'s spelling "Pingueculum" (which is also the lecturer\'s spelling on L6 slide 58). ⚠️ The bold-and-underlined run starts MID-WORD — the page prints "may be treate" in roman and "d with lubricating drops" in bold underline. The first bullet is indented one space further than the second. Transcribed as printed. "B irradiation" in option B means beta irradiation.' },

{ n:285, p:40, key:'D',
  stem:'Blood vessels in a trachomatous pannus lie:',
  opts:["Beneath the Descemet's membrane.",'In the substantia propria.',"Between Bowman's membrane & substantia propria.","Between Bowman's membrane & Epithelium."],
  note:'Two "&" for "and". "substantia propria" is the old name for the corneal stroma; it appears in no cached ophthalmology source — the cornea deck names the five layers as epithelium, Bowman\'s, stroma, Descemet\'s, endothelium.' },

{ n:286, p:41, key:'B',
  stem:'A patient complained of sandy sensation. On examination there were areas of epithelial edema, sub epithelial infiltration with inflammatory cells, surrounded by small blood vessels in a rosette shape in the upper edge of the cornea. What would you expect to find on everting his upper eye lids on the palpebral conjunctiva?',
  opts:['Small expressible follicles.','Cobble stone papillae.','Pseudo membrane.','Diffuse edema with petechial hemorrhage.'],
  box:"Diagnosis is Vernal keratoconjunctivitis",
  note:'⚠️ IN THE LEFT COLUMN OF THE FIRST ANSWER PAGE. ⚠️ THE BOX CONTRADICTS Q230. This stem describes subepithelial infiltrates "in a rosette shape in the upper edge of the cornea", and Q230 keys "Corneal Herbert\'s rosettes" to ACTIVE TRACHOMA — yet this question\'s own box states flatly "Diagnosis is Vernal keratoconjunctivitis" and the key is the VKC option. The whole box is bold and underlined from "is Vernal" onward. Recorded, not corrected; the tension is set out in the draft entry. Note also that option A, "small expressible follicles", would be the trachoma answer.' },

{ n:287, p:41, key:'C',
  stem:'In the previous Q, Management must not include:',
  opts:['Dark sun glasses.','Cold fomentation.','Systemic corticosteroids.','Topical steroids for a short period.','Mast ceil stabilizer.'],
  box:"Tx of VKC\n1. To avoid eye rubbing as much as possible (results in mast cell degranulation and leads to a vicious circle of more itching and eye rubbing)\n2. Dark glasses and cold compresses.\n3. Topical mast cell stabilizers 4. Topical antihistamines.\n4. Topical vasoconstrictor and anti-histaminic drops (during the attack only)\n5. Topical steroid to control acute attacks but avoid long-term use.\n6. Topical cyclosporine or topical tacrolimus may be considered for severe cases and as steroid sparing agents.\nSystemic corticosteroids usually not indicated, reserved for severe refractory VKC or associated systemic disease",
  note:'⚠️ THE ONLY FIVE-OPTION QUESTION IN THE TOPIC (A–E). ⚠️ BACK-REFERENCE: "the previous Q" is Q286, verified by reading Q286 itself — it is the question immediately above this one in the same column, and it is the only preceding stem describing a patient. ⚠️ THE BOX\'S NUMBERING IS MISPRINTED: item 3 reads "Topical mast cell stabilizers 4. Topical antihistamines.", so seven items run under six numbers and the number 4 appears twice. Kept exactly as printed. The final unnumbered sentence is bold and underlined. The box is otherwise a near-verbatim reprint of book p.89 with the systemic-steroid sentence added. "Mast ceil stabilizer" in option E, as printed.' },

{ n:288, p:41, key:'A',
  stem:'What is the name of the sign shown and what is the disease?',
  opts:['Herbet pits in trachoma','Trantas dots in trachoma','PTCS in trachoma','Stellate ulcer in trachoma'],
  image:true,
  note:'⚠️ IMAGE QUESTION, and the last question of the topic — in the LEFT column of the first answer page. The photograph is a washed-out slit-lamp view of the SUPERIOR limbus: a pale hazy upper cornea above, the dark iris/pupil filling the lower half, and along the boundary between them a row of small dark rounded notches indenting the limbal edge, with a few fine conjunctival vessels above. NO caption, NO figure number, NO arrow. "Herbet" in option A and "Trantas" in option B — two more spellings of the topic\'s two eponyms. "PTCS" is capitalised here; the Q230 box prints "PTCs". Every option ends "in trachoma", so the question is really "name the sign". A crop must be cut.' }

];

if (typeof module !== 'undefined') { module.exports = GG_T6_STAGED; }
