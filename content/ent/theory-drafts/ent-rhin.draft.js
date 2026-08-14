/* ent-rhin — "The rhinitides", ENT. Written from scratch 2026-08-14 under
   START-HERE.md §14 (slide-density revision notes). No v1 existed.

   BUDGET — §14.1 rule, budget = max(summed lecture words, 25 x linked question
   count), floor 600, cap 3,000. BOTH TERMS STATED:

     TERM 1 — summed words of the lectures this chapter RESTS ON:
       L29) Rhinitis 1                          947 w  (WHOLE deck, lines
       1–463, measured by `wc -w`. Every slide in it is this chapter: the
       rhinosinusitis definition, the six defence mechanisms, the whole
       classification tree, allergic rhinitis end to end — definition,
       allergens, the ARIA classification, the reaction cascade,
       co-morbidities, external and intranasal signs, the three
       investigations, the three management arms, the drug/symptom matrix and
       the adjunctive list — then common cold and influenza, and the whole
       chronic non-specific block: simple chronic, hypertrophic and atrophic
       rhinitis with its CT findings and treatment. Nothing in the deck is
       another chapter’s.)
       L30) Rhinitis 2                          729 w  (WHOLE deck, lines
       1–199. Chronic specific — syphilis, T.B., scleroma in full;
       granulomatous — sarcoidosis, Wegener’s, Stewart’s; non-allergic
       non-infective — NARES, vasomotor, medicamentosa; and the fungal
       classification. The fungal run is titled "Fungal Sinusitis" but is the
       "Infective fungal" branch of L29’s own rhinosinusitis tree and is named
       in this chapter’s scope, so it is counted and covered, not deferred.)
       = 1,676 words
     TERM 2 — 25 x 64 linked questions = 1,600 words

     max(1,676 · 1,600) = 1,676. ⚠️ TERM 1 GOVERNS, by 76 words — the FIRST
     chapter in this module where the lecture sum beats the question term.
     Cap 3,000 not reached; floor 600 not reached.

   DIAGRAM-DECK CHECK, as §14.1 requires it be stated:
       L29  947 w / 327 non-blank lines = 2.90 words per line
       L30  729 w / 189 non-blank lines = 3.86 words per line
       combined                          = 3.25 words per line
   Both are WELL ABOVE the ~2 that marks a labelled-diagram file (L22, the
   deck that forced the second term into existence, runs 1.2). These are
   ordinary prose decks; no correction applies, and the lecture term stands on
   its own merits rather than by default.

   NOT COUNTED, CITED ONLY — each contributes a clause or a picture, and
   claiming its words would make the budget meaningless:
     · L26) nasal masses — its "Reaching a diagnosis" run (lines 55–89) is
       three ENDOSCOPIC PHOTOGRAPHS captioned "Allergic Rhinitis" with no
       prose under them; the picture they show (pale boggy turbinates in a
       bilateral nose) is carried in rhin-5, whose written source is L29’s own
       signs slides. Its 676 w are already claimed by `ent-nasalmass`.
     · L31) nasal symptoms 1 — three items only: bilateral watery discharge =
       allergic rhinitis or early common cold (lines 114–120); topical
       decongestant "not more than 5 days to avoid rhinitis medicamentosa"
       (lines 97–101); "nasal allergy and viral infections are the commonest
       causes of nasal obstruction in adults" (lines 75–81). Its 456 w belong
       to `ent-nasalobs`.
     · L27.1) ACUTE rhinosinusitis — viral-versus-bacterial only. Belongs to
       `ent-sinusitis`.
     · L27.2) Chronic Sinusitis — the AERD/Samter line only. Belongs to
       `ent-sinusitis`.
     · L25.2) smell — anosmia in atrophic rhinitis, one clause. Belongs to
       `ent-epistaxis` ("Epistaxis and smell disorders").
     · L32) nasal symptoms 2 is headache and contributes nothing here.
     · L23) Anatomy of the Nose was read and is not used.

   MEASURED OUTCOME: 2,331 body words over 14 sections, intro 40 — 655 over
   the 1,676 budget, +39.1 %, OUTSIDE §14.1’s 10 % tolerance. Reported as an
   overrun, not hidden.

   ⚠️ CORRECTION OF THIS HEADER. An earlier version of this paragraph claimed
   "1,836 body words … three compression passes … from 2,178". THAT WAS
   WRITTEN BEFORE THE PASS LANDED AND WAS FALSE: the file on disk measured
   2,682. The compression has now actually been applied and the figure above
   is the measured one, taken with §14’s own validator after the edit. A
   header that reports a compression which did not happen is worse than no
   header; recording the mistake here so it is not repeated.

   WHAT THE COMPRESSION REMOVED — 2,682 → 2,331, i.e. 351 words, all genuine
   duplication or verbosity, no protected fact touched:
     · the ARIA conjunction bullet ("OR for intermittent, AND for persistent")
       — the table one line above already carries both conjunctions;
     · the anosmia/ozaena paradox, said three times — now once in rhin-11,
       with rhin-5’s table row and rhin-12’s atrophic-stage line reduced to
       the discriminator alone;
     · rhin-8, the loosest section at 225 w for 3 questions: the risk-based
       vaccination list cut from ~62 words to ~40, keeping every group both
       questions turn on and both negatives (healthy 18–40 adults, healthy
       school-age children); "purulent discharge alone does not mean
       bacterial infection" deleted outright as `ent-sinusitis`’s fact;
     · distractor-rejection prose: scleroma’s "no watery discharge, no itching
       or sneezing, no bilateral masses"; "foam cells in general are not
       specific"; the atopy-vs-Samter "trap" bullet; the "naming the allergen
       is not academic" bullet;
     · the standalone nasal-hyperreactivity bullet in rhin-3, folded into the
       table cell it belonged in;
     · connective and framing phrasing throughout ("a chronic nasal disease
       with", "occurring in", "they only support", "which is why", "in its own
       right"), and verbose tag phrasing ("the name is not in course material"
       → "name not in course material").
     · one correctness fix found while compressing: Stewart’s granuloma had an
       untagged, unsourced "biopsy, after exclusion" in its diagnosis cell.
       L30 says nothing about its diagnosis, so the cell is now a dash rather
       than an untagged claim.

   ⚠️ WHY IT STOPS HERE — §14.1 requires the bill be itemised rather than a
   protected fact deleted. The remaining 2,331 is two dense fact inventories
   plus their tables, and the next 200 words can only come out of protected
   content. Specifically, reaching even 2,100 would cost one of:
     · rhin-11 (285 w) — deleting the 5 CT findings (~45 w, the whole key of
       one question), or the 4 secondary causes (~30 w, the key of two), or
       the Type I/II vascular split (~40 w, the key of one);
     · rhin-12 (272 w) — deleting the bone-vs-cartilage table (~70 w, the key
       of two questions and the discriminator of a third), or the four
       scleroma stages (~35 w, the key of two), or the Mikulicz/Russell/Mott
       trio (~45 w, the key of three);
     · rhin-8 (189 w) — deleting L29’s 10-item complication list or its 9-item
       treatment list, both whole slides (importance test 2);
     · rhin-13 (202 w) / rhin-14 (154 w) — the two comparison tables ARE the
       answers to their own questions, so §14.2’s exception protects them.
   Each of those is a protected fact under §14.2’s two-sided floor. The
   chapter renders at 9 printed pages, inside the acceptable band, and §14.1
   is explicit that pages are a layout property — so the overrun is reported
   and the content kept.

   FLOOR KEPT BOTH WAYS — every fact, list, number, eponym, organism, stage
   and classification L29 and L30 state, plus every one of the 64 linked
   questions’ KEY and DISCRIMINATOR as a line or a table cell. All 64 ids
   linked, none dropped.

   ⚠️ FOUR DEFERRALS COLLECTED (§14.5), all four DELIVERED:
     1. `ent-nasalmass` -> "the ALLERGIC-RHINITIS CLINICAL PICTURE and L26’s
        'Reaching a diagnosis' allergic-rhinitis slide run". DELIVERED across
        rhin-2 (definition, the four symptoms, allergens, ARIA frequency and
        severity), rhin-4 (co-morbidities and the asthma link) and rhin-5
        (the external and intranasal signs, and the five-way look-alike
        table). L26 is credited in rhin-5’s Src line. `ent-nasalmass` keeps
        only its own Samter line and its position-dependent-obstruction
        clause; neither is repeated here beyond what rhin-4 needs.
     2. `ent-nasalmass` -> "RHINOSCLEROMA IN FULL — Klebsiella
        rhinoscleromatis, Egyptian endemicity, the three stages, Mikulicz
        cells and Russell bodies, the expansile granuloma on CT, management".
        DELIVERED in rhin-12, with FOUR stages not three (L30 prints
        catarrhal, hypertrophic, atrophic AND cicatricial), plus the poor-class
        teenage-female epidemiology, the submucosal infiltrate, the
        epithelial-transition site, Mott cells and Hebra nose.
     3. `ent-hoarse` -> "RHINOSCLEROMA OF THE NOSE — its nasal stages and
        nasal management (the laryngeal part stayed in `ent-hoarse`)".
        DELIVERED in rhin-12. `hoar-6` keeps the subglottic site and the
        stridor-with-normal-voice line; the nasal stages, the nasal deformity
        and the two-step management are here. Checked against `hoar-6` so the
        organism and pathology are not re-argued, only stated.
     4. `ent-septum` -> "WEGENER’S GRANULOMATOSIS AS AN ENTITY — ANCA, the
        triad, the systemic disease" (collected mid-task). DELIVERED in
        rhin-13 as a full row: autoimmune collagen disorder, multisystem,
        necrotizing vasculitis, respiratory tract + kidneys + skin, septal
        ulceration with crusting, saddle nose, c-ANCA + ESR + biopsy, steroids
        + azathioprine/methotrexate. `sept-8` keeps only the saddle-nose
        key line and is not repeated. Its recorded defect is carried forward
        as the one-line note in rhin-13.

   FLAGGED FACTS THE REVIEW LISTED AS OWED HERE — found vs supplied, checked
   against L29 and L30 line by line before declaring anything a gap:
     FOUND ON THE SLIDES (and therefore NOT tagged):
       · Samter’s triad — L29 lines 162–167, printed in full as "Allergic
         rhinitis with diffuse sinonasal polyposis + asprin hypersensitivity
         and brnchial asthma -> (Samtter’s Triad)". Only its arachidonic
         SHUNT mechanism is unsourced and tagged.
       · The allergic reaction cascade — L29 lines 128–141 (sensitization ->
         IgE -> arming of mast cells -> mediators -> clinical effects).
     SUPPLIED FROM GENERAL KNOWLEDGE AND TAGGED `(not in course material)`:
       · The EARLY/LATE PHASE SPLIT as a two-phase model with its timings,
         cells and symptom lists — L29 prints the cascade but never divides
         it. Four questions turn on it. rhin-3.
       · The ATOPY TRIAD as a named entity — L29 says "atopic individuals"
         and lists co-morbidities but never names the triad. rhin-4.
       · The BONE-VS-CARTILAGE RULE (syphilis bone, TB cartilage, scleroma
         both) — L30 names the three diseases and nothing more. rhin-12.
       · HEBRA NOSE — the four stages are L30’s, the eponym is not. rhin-12.
       · MOTT CELLS — L30 prints Russell bodies and the plasma-cell
         infiltrate; the intermediate cell is not named. rhin-12.
       · TYPE I / TYPE II atrophic rhinitis and endarteritis obliterans —
         absent from both decks. rhin-11.
       · Samter’s ARACHIDONIC SHUNT (COX-1 blockade to cysteinyl
         leukotrienes). rhin-4.
       · LEPROSY HISTOLOGY (lepra/Virchow cells, acid-fast bacilli) — leprosy
         is on no cached ENT slide at all. rhin-12.
       · ALLERGIC MUCIN — L30 gives allergic fungal sinusitis its
         hypersensitivity types but never the mucin. rhin-14.
     Also supplied and tagged: the influenza risk-based vaccination list, the
     "dropper type" term, empty nose syndrome, cobblestone as a synonym for
     mulberry, adenovirus and RSV as cold viruses, and immunotherapy as the
     only disease-modifying arm.

   OMISSION NOTE — cut on purpose, each a decision on the record:
     1. Distractor-by-distractor rejection. It lives in every question’s own
        `explanation`, one tap away through the qs links (§14.2). Kept only
        where the teaching point IS the discrimination — the classification
        table (rhin-1), the ARIA table (rhin-2), the phase table (rhin-3),
        the five-way look-alike table (rhin-5), the drug matrix (rhin-7), the
        non-allergic table (rhin-9), the bone-vs-cartilage table (rhin-12),
        the granulomatous table (rhin-13) and the fungal table (rhin-14).
     2. Question ids in body text, teaching voice, bank meta-commentary
        beyond the two one-line defect notes §4 requires, per-fact citation
        clauses (one Src line per section), closing summary.
     3. L29’s "Spanish flu epidemic 1918 killed 20 millions" is kept as six
        words only; the rest of the influenza history slide is a
        history-of-the-specialty aside and is dropped (§14.2 drop-list).
     4. L29’s photograph captions ("Grass Pollen", the two atrophic-rhinitis
        case images, the over-resected-turbinate radiograph legend) — images
        with no examinable text.
     5. Drug doses, immunotherapy schedules, antibiotic choices for the
        common cold, and antifungal dosing — the material states none.
     6. The mechanism of the nasopulmonary reflex, and the immunology below
        the level of "IgE, mast cell, eosinophil, T cell" — deeper than the
        material goes.

   CROSS-CHAPTER DEFERRALS (§14.5) — named, so each is a promise not a
   deletion. Each was checked against all 64 of this chapter’s questions:
   NONE tests it.
     · The full aetiological, duration, laterality and position
       classifications of NASAL OBSTRUCTION; choanal atresia and pyriform
       aperture stenosis; nasal valve dysfunction; the NOSE scale and
       SNOT-22; rhinomanometry and acoustic rhinometry; the oral-decongestant
       contraindications (hypertension, prostatic hypertrophy, glaucoma).
       Kept here only: the 5-day topical decongestant rule, and that
       alternating obstruction is mucosal          -> `ent-nasalobs`
     · The four types of NASAL DISCHARGE as a subject — foetid and
       blood-stained discharge and their cause lists. Kept here only:
       bilateral watery = allergic or early cold, unilateral watery = CSF
                                                   -> `ent-nasalobs`
     · ACUTE and CHRONIC RHINOSINUSITIS as diseases — the diagnostic
       criteria, the viral-versus-bacterial timeline, the organism lists,
       medical and surgical management, FESS as an operation. Kept here only:
       sinusitis as a co-morbidity of allergic rhinitis and a complication of
       the common cold, and FESS as one adjunctive line
                                                   -> `ent-sinusitis`
     · NASAL POLYPOSIS as a subject — the multiple/solitary split, the
       aetiological theories, the origin percentages, the medical and
       surgical ladder. Kept here only: polyposis as an allergic
       co-morbidity and as the polyp arm of Samter’s triad
                                                   -> `ent-nasalmass`
     · SMELL DISORDERS as a subject — the conductive/sensorineural split,
       parosmia, phantosmia, testing and prognosis. Kept here only: anosmia
       in atrophic rhinitis and late-phase hyposmia, and that cacosmia is
       what the patient smells                     -> `ent-epistaxis`
     · EPISTAXIS as a subject. Kept here only as a symptom line under
       atrophic rhinitis                           -> `ent-epistaxis`
     · SEPTAL PERFORATION and SADDLE NOSE as lesions in their own right —
       the full cause table, the triad, grafting. Kept here only as the nasal
       endpoint of syphilis, TB, Wegener’s and cocaine
                                                   -> `ent-septum` (already
       written; verified present in `sept-7` and `sept-8` before deferring)
     · SCLEROMA OF THE LARYNX — the subglottic site and stridor with a normal
       voice                                       -> `ent-hoarse` (already
       written; verified present in `hoar-6` before deferring)
     · ADENOIDS — obstructive vs non-obstructive, adenoid facies, the L26
       adenoid slides that sit inside the same "Reaching a diagnosis" run
                                                   -> `ent-tonsils`

   DEFECT NOTES (§4 — a printed key is recorded, never disputed), both kept to
   one line in the body:
     · One key names IPRATROPIUM BROMIDE as the allergic-rhinitis drug that
       may affect the kidneys; its documented caution is urinary retention,
       and cetirizine is the renally cleared drug. Noted in rhin-7.
     · SADDLE NOSE — one printing keys Wegener’s alone over a list that also
       offers syphilis, which the same bank keys elsewhere for the same
       deformity; a second printing offers Wegener’s and neglected septal
       haematoma and keys "Both". Both keys are sound on their own option
       lists. Noted in rhin-13, carried forward from `sept-8`.

   Table pipes carry no padding — mdCells() trims outer delimiters.
   Curly apostrophes throughout: a straight one closes a single-quoted field. */

var THEORY_ENT_RHIN = {
  'ent-rhin': {

    intro: 'One mucosa, many inflammations, and the examiner asks which. Pale and boggy is allergic, red and wet is a cold, mulberry is hypertrophic, roomy and crusted is atrophic. Then the named organisms — Klebsiella twice over — and the granulomas.',

    sections: [

{
  id: 'rhin-1', w: 'must',
  h: 'The rhinosinusitis tree, and the nose’s six defences',
  body: [
    '**Nose and sinus lining are continuous → inflammation involves both → RHINOSINUSITIS.**',
    '',
    '**Defence mechanisms (6):** **mucociliary system** · epithelial integrity · **reflexes — cough, sneeze** · lysozymes, opsonins and complement · **immunoglobulins — secretory IgA and IgE** · macrophages and lymphocytes.',
    '',
    '|Branch|Members|',
    '|---|---|',
    '|**Allergic**|seasonal · perennial · occupational · food- and drug-induced|',
    '|**Infective viral — ACUTE**|**common cold · influenza**|',
    '|**Infective bacterial — CHRONIC NON-SPECIFIC**|**chronic simple · hypertrophic · atrophic** rhinitis|',
    '|**Infective bacterial — CHRONIC SPECIFIC**|**syphilis · T.B. · scleroma**|',
    '|**Granulomatous**|**sarcoidosis · Wegener’s · Stewart’s (midline lethal) granuloma**|',
    '|**Infective fungal**|invasive (3) · non-invasive (2)|',
    '|**Non-allergic, non-infective**|**NARES · vasomotor rhinitis · rhinitis medicamentosa**|',
    '',
    '- **"Specific" = a NAMED ORGANISM with characteristic histology.** Granulomatous disease is a separate branch.',
    '',
    'Src: L29; L30'
  ].join('\n'),
  qs: []
},

{
  id: 'rhin-2', w: 'must',
  h: 'Allergic rhinitis — definition, allergens, ARIA classification',
  body: [
    '**IgE-mediated hypersensitivity of the nasal mucous membrane**, in **atopic individuals exposed to common aero-allergens**: **sneezing · itching · watery rhinorrhoea · sensation of nasal obstruction**. **May also involve the sinus lining. Genetically inherited — autosomal recessive OR autosomal dominant.**',
    '',
    '**Allergens:** seasonal · perennial · occupational · food- and drug-induced · **pollution**. **Pollen → seasonal/intermittent; house dust mite, animal dander, mould → perennial/persistent.**',
    '',
    '|Axis|Intermittent|Persistent|',
    '|---|---|---|',
    '|Frequency|**< 4 days/week OR < 4 consecutive weeks per year**|**> 4 days/week AND > 4 consecutive weeks per year**|',
    '',
    '**Severity graded separately:** **mild** = normal sleep, no impairment of daily activities, no troublesome symptoms untreated. **Moderate-to-severe** = abnormal sleep, impaired daily activity, abnormal work.',
    '',
    '- **Bilateral, allergen-triggered, itchy eyes and sneezing. Alternating obstruction is mucosal, never structural. A UNILATERAL watery discharge is CSF rhinorrhoea until proved otherwise.**',
    '',
    'Src: L29; L31 (bilateral watery discharge)'
  ].join('\n'),
  qs: ['entep-nose-5','entep-nose-10','entqb-nose3-85','entqb-nose3-87','entqb-nose3-88','entqb-nose3-89','entqb-nose3-129','entep-nose-case-16']
},

{
  id: 'rhin-3', w: 'must',
  h: 'The allergic reaction — early and late phase',
  body: [
    '**Cascade: sensitization → IgE production → arming of mast cells → release of mediators → clinical effects.** **First exposure only sensitises — no symptoms.**',
    '',
    '|Phase|Timing|Cells and mediators|Symptoms|',
    '|---|---|---|---|',
    '|**Early / immediate**|**minutes**|allergen cross-links IgE on armed **MAST CELLS** → **histamine and leukotrienes**|**sneezing · itching · watery rhinorrhoea** (+ some congestion)|',
    '|**Late / delayed**|**4–8 hours**|**T-cell activation and EOSINOPHIL recruitment**|**nasal congestion · hyposmia/anosmia · nasal hyperreactivity** (also to cold air and smoke)|',
    '',
    '- **Sneezing and itching early only. Smell loss and hyperreactivity late only. Congestion in both.** The two-phase division *(not in course material — L29 prints the cascade, never the split)*.',
    '- Late-phase eosinophils are why **steroids beat antihistamines for congestion**.',
    '',
    'Src: L29'
  ].join('\n'),
  qs: ['entqb-nose3-90','entqb-nose3-91','entqb-nose3-92','entqb-nose3-93']
},

{
  id: 'rhin-4', w: 'must',
  h: 'Atopy, co-morbidities and Samter’s triad',
  body: [
    '**Atopy triad / triangle** *(name not in course material)*: **bronchial asthma + allergic rhinitis + ECZEMA.**',
    '',
    '**Co-morbidities: nasal polyposis · sinusitis · otitis media.**',
    '',
    '**Allergic rhinitis and bronchial asthma frequently coexist** — aspiration of secretions · dryness of the LRT · increased vagal stimulation · bacterial toxins · inflammatory cytokines. **So treating the rhinitis may also improve the asthma.**',
    '',
    '**Samter’s triad:** *"Allergic rhinitis with diffuse sinonasal polyposis + aspirin hypersensitivity and bronchial asthma."* **Not IgE-mediated:** COX-1 blockade **shunts arachidonic acid to cysteinyl leukotrienes** *(shunt not in course material)*. **All non-selective NSAIDs contraindicated**; polyps recur after surgery.',
    '',
    'Src: L29; L27.2 (AERD)'
  ].join('\n'),
  qs: ['entqb-nose3-94','entqb-nose3-132']
},

{
  id: 'rhin-5', w: 'must',
  h: 'Signs, and telling the look-alikes apart',
  body: [
    '**External signs: allergic salute · mouth breathing · allergic shiners · pale bluish oedematous nasal turbinates.**',
    '',
    '**Intranasal signs: polyps · septal deflection · prominent nasal turbinates.**',
    '',
    '|Condition|Mucosa|Discharge|Discriminator|',
    '|---|---|---|---|',
    '|**Allergic rhinitis**|**PALE, BLUISH, oedematous (boggy)**|watery, **bilateral**|itching, sneezing bouts, **no fever**, recurrent/seasonal|',
    '|**Common cold**|**RED, WET, congested**|watery → mucopurulent|**fever, malaise, sore throat**; resolves **5–10 days**|',
    '|**Chronic simple rhinitis**|**RED** = active infection, **PURPLE** = venous stasis, elsewhere **pale and oedematous**|postnasal, **mucous strands**|transient anosmia, headache|',
    '|**Chronic hypertrophic**|**thick, nodular, MULBERRY-like** at the posterior end of the inferior turbinate|—|permanent hypertrophy|',
    '|**Atrophic rhinitis**|**atrophic, ulcerated, bleeding**|**green, yellow or black crusts**|**ROOMY** nose, **fetor**, anosmia|',
    '',
    '- **Bluish + swollen = allergic; congested + swollen = infective; atrophic = atrophic rhinitis.** "Bluish and atrophic" is not a real appearance.',
    '',
    'Src: L29; L26 (the allergic-rhinitis endoscopic run)'
  ].join('\n'),
  qs: ['entqb-nose3-95','entep-mfe4-22','entqb-nose5-185']
},

{
  id: 'rhin-6', w: 'must',
  h: 'Investigations',
  body: [
    '**Skin allergy test** — allergen extract into the skin by **scratching or pricking with a sharp device, or intradermal injection**.',
    '',
    '**Blood: total IgE · specific IgE (RAST).** ⚠️ **~50 % of allergic rhinitis patients have a NORMAL total IgE; 20 % of unaffected people have an ELEVATED one.** **Specific IgE is the most diagnostic test — it names the allergen**, which avoidance and immunotherapy both need.',
    '',
    '**Eosinophils — blood sample and nasal smear: only SUPPORT the diagnosis, neither sensitive nor specific.** Also raised in **non-allergic eosinophilic rhinitis (NARES)** and **parasitic infection**.',
    '',
    'Src: L29'
  ].join('\n'),
  qs: ['entqb-nose3-96']
},

{
  id: 'rhin-7', w: 'must',
  h: 'Management of allergic rhinitis',
  body: [
    '**Three arms: allergen avoidance · pharmacotherapy · immunotherapy.** **Medical, never surgical first** — surgery treats a complication or fixed obstruction, not the allergy. **Immunotherapy alone modifies the sensitisation** *(not in course material)*.',
    '',
    '|Drug|Sneezing|Itching|Rhinorrhoea|Congestion|',
    '|---|---|---|---|---|',
    '|**Antihistamines**|5|4|3|—|',
    '|**Anticholinergic — ipratropium bromide**|—|—|**5**|—|',
    '|**Corticosteroids**|**5**|**5**|**3**|**3**|',
    '|**Decongestants**|—|—|—|**5**|',
    '|**Mast cell stabilisers**|5|3|1|—|',
    '|**Antileukotrienes**|3|2|—|4|',
    '',
    '*(L29 grades each cell 1–5 stars; a dash is no effect.)*',
    '',
    '- **Intranasal corticosteroid — the single most effective drug, the ONLY class covering all four symptoms, and the only one acting on BOTH phases.** **Antihistamines: histamine, early phase only, fast onset.** **Ipratropium: rhinorrhoea alone. Decongestants: congestion alone.**',
    '- **Mainstay initial treatment: topical nasal steroid + antihistamine.** Given topically to avoid systemic steroid effects — local steroids are **not** avoided for side effects.',
    '- **Adjunctive management (7):** antibiotics · mucolytic · anti-leukotrienes · **irrigations — saline douches** · **GERD control** · **FESS** · **myringotomy ± grommet tube insertion**.',
    '',
    '⚠️ One key names **ipratropium bromide** as the rhinitis drug that may affect the kidneys; its documented caution is **urinary retention** (and glaucoma), and cetirizine is the renally cleared one. Answer as printed.',
    '',
    'Src: L29'
  ].join('\n'),
  qs: ['entep-nose-60','entep-mfe4-18','entqb-nose3-111','entqb-nose3-112','entqb-nose3-113','entqb-nose3-114','entqb-nose3-128','entqb-nose3-130']
},

{
  id: 'rhin-8', w: 'high',
  h: 'Acute infective viral — common cold and influenza',
  body: [
    '**Common cold — the commonest viral infection in humans. Rhinovirus and coronavirus** (also adenovirus, RSV *(not in course material)*). **Viral invasion → mediators from infected cells: IL-8, kinins, prostaglandins.**',
    '',
    '**Clinical picture:** fever, headache, malaise · **dryness of the nose** · sore throat · sneezing · nasal obstruction · **watery, then mucopurulent rhinorrhoea** · **resolution within 5–10 days**.',
    '',
    '**Complications (10):** sinusitis · pharyngitis · **adenoiditis** · tonsillitis · **otitis media** · laryngotracheitis · bronchitis · pneumonia · **nephritis** · **rheumatic fever**.',
    '',
    '**Treatment:** bed rest · vitamins · fluids · analgesic · antipyretic · antihistaminic · anticholinergic · decongestant · antibiotics.',
    '',
    '**Influenza** — one of the commonest infectious diseases; **influenza virus types A, B and C**; occurs **in epidemics** (Spanish flu 1918, 20 million dead). **A distinct disease, NOT a cause of the common cold.**',
    '',
    '- **Risk-based list — both for cold/flu complications and for annual influenza vaccination** *(not in course material)*: **6–23 months · ≥ 65 · pregnancy · nursing-home residents · health-care workers · anyone 6 months–64 years with cardiopulmonary, renal, metabolic or immunodeficient disease.** **NOT healthy adults 18–40; NOT healthy school-age children.**',
    '',
    'Src: L29; L27.1 (viral vs bacterial)'
  ].join('\n'),
  qs: ['entqb-nose3-97','entqb-nose3-99','entqb-nose3-100']
},

{
  id: 'rhin-9', w: 'must',
  h: 'Non-allergic, non-infective — vasomotor, NARES, medicamentosa',
  body: [
    '|Entity|Mechanism|Discriminator|Treatment|',
    '|---|---|---|---|',
    '|**Vasomotor rhinitis**|**changes in vascular tone**, with **activation of the parasympathetic nerves** supplying the nasal mucosa|**commonest non-allergic rhinitis, especially in older patients**; mimics allergic rhinitis; **allergy tests negative, no nasal eosinophilia**|**intranasal steroids** · **anticholinergic spray (ipratropium bromide) decreases the rhinorrhoea** · oral/local decongestants|',
    '|**NARES**|**allergic-like rhinitis with EOSINOPHILIA in nasal secretions**|**allergy testing typically negative** — eosinophils without allergy|**as vasomotor rhinitis**|',
    '|**Rhinitis medicamentosa**|**prolonged excessive use of nasal DECONGESTANTS → rebound congestion (rebound phenomenon)**|**topical/LOCAL decongestant** — not systemic, not steroid, not antihistamine|**stop the spray**; **saline washes and topical steroids** reverse the changes|',
    '',
    '- **Vasomotor triggers:** **humidity and temperature change** · environmental pollution · **active and passive smoking** · occupational irritants · **emotional factors** · **endocrine — menstruation, pregnancy** · **drugs: ACE inhibitors, β-blockers, oral contraceptives.**',
    '- **Autonomic split: sympathetic = vasoconstriction and an open nose**, so lost tone engorges the turbinate sinusoids → **nasal blockage** (hence every decongestant is an alpha-agonist); **parasympathetic overactivity = glandular hypersecretion → watery "dropper type" rhinitis** *(term not in course material)*.',
    '- **Topical decongestant ≤ 5 days.** Medicamentosa is **reversible thickening, never atrophy.**',
    '',
    'Src: L30; L31 (the 5-day rule)'
  ].join('\n'),
  qs: ['entep-nose-7','entep-nose-63','entep-mfe4-30','entqb-nose3-125','entqb-nose3-126']
},

{
  id: 'rhin-10', w: 'must',
  h: 'Chronic non-specific — simple, hypertrophic, and the turbinate',
  body: [
    '**Simple chronic rhinitis.** **Nasal obstruction (chronic hyperaemia, nasopulmonary reflex)** · **postnasal discharge** · headache · **transient anosmia**. **Management: correct the predisposing factors · nasal wash · topical ± systemic steroids · antibiotics ±.**',
    '',
    '**Chronic hypertrophic rhinitis** — **the advanced stage of non-specific chronic rhinitis, with PERMANENT whole-mucosa hypertrophy**. **Thick, nodular mucosa especially at the posterior end of the inferior turbinate — "mulberry like"** (cobblestone *(term not in course material)*). **Polyps may form. ± rhinitis medicamentosa.**',
    '',
    '- **Mulberry / cobblestone change ends chronic rhinitis of ANY cause** — allergic, infective, vasomotor. **Atrophic rhinitis is the exception.**',
    '',
    '**Turbinate hypertrophy — the ladder. Topical nasal steroid is both the initial AND the long-term treatment**, at any age. **Topical decongestants give short-term relief only** (≤ 5 days). **Systemic steroids and systemic antihistamines are not the answer. Surgery last, after failed medical treatment.**',
    '',
    '- **Gold standard operation: PARTIAL turbinectomy** *(not total, not laser)*. *"You must leave head of inferior turbinate and part of it to protect from secondary atrophic rhinitis (empty nose syndrome)."* **Over-resection → secondary atrophic rhinitis** *(the syndrome name is not in course material)*.',
    '',
    'Src: L29; GG p.85 (partial turbinectomy box)'
  ].join('\n'),
  qs: ['entqb-nose3-101','entqb-nose3-110','entep-mfe4-17','entqb-nose9-260','entqb-nose9-262','entqb-nose9-263']
},

{
  id: 'rhin-11', w: 'must',
  h: 'Atrophic rhinitis',
  body: [
    '**Definition:** progressive atrophy of the nasal mucosa **AND the underlying BONE of the turbinates**, with **scanty viscid secretions that rapidly dry into crusts emitting a characteristic foul odour (OZAENA)**, and **abnormal patency of the nasal passages**.',
    '',
    '**Primary — exact cause unknown:** **chronic bacterial infection — *Klebsiella* (ozaenae), pertussis, diphtheria** · **nutritional — vitamin A, iron deficiency** · **endocrine — oestrogen deficiency** · **autoimmune**.',
    '',
    '**Secondary (4):** **excessive surgical destruction of nasal mucosa** · **irritants, cocaine or toxic agents** · **healed granulomatous disease — T.B., scleroma** · **radiotherapy**.',
    '',
    '- **NOT causes: allergic rhinitis, rhinitis medicamentosa** — both thicken mucosa. **Cocaine IS** — true ischaemic necrosis.',
    '',
    '|Symptoms|Signs|',
    '|---|---|',
    '|nasal obstruction · headache · **epistaxis** · **bad odour from the nose** · **choking**|**fetor oris** · **green, yellow or black crusts** · **ulcerated bleeding mucosa** · **atrophy of the inferior and middle turbinates**|',
    '',
    '- **Paradox: a ROOMY nose that feels blocked** — *"narrow nasal chambers"* is the wrong option.',
    '- **The patient is ANOSMIC; others smell the ozaena.** Anosmia, **not cacosmia** (= smelling it yourself).',
    '',
    '**CT (5):** mucosal thickening of the paranasal sinuses · **loss of definition of the ostiomeatal complex from resorption of the ethmoid bulla and uncinate process** · **hypoplasia of the maxillary sinuses** · **enlarged nasal cavities with erosion and bowing of the lateral nasal wall** · bony resorption and mucosal atrophy of the inferior and middle turbinates.',
    '',
    '**Treatment: irrigations · humidification · experimental surgery narrowing the cavity with submucosal implants.** Mechanical, not antibiotic.',
    '',
    '- **Type I vs Type II** *(not in course material)*: **Type I = endarteritis obliterans** — poor blood supply, poor surgical candidate; **Type II = dilated capillaries**. Endarteritis obliterans is also the lesion of **tertiary syphilis and radiation injury**.',
    '',
    'Src: L29; L25.2 (anosmia)'
  ].join('\n'),
  qs: ['entep-nose-16','entqb-nose3-102','entqb-nose3-103','entqb-nose3-104','entqb-nose3-105','entqb-nose3-108','entqb-nose3-109','entqb-nose3-115','entqb-nose3-145','entep-nose-case-8']
},

{
  id: 'rhin-12', w: 'must',
  h: 'Chronic specific infections — scleroma, syphilis, T.B., leprosy',
  body: [
    '**SCLEROMA (rhinoscleroma)** — chronic specific infection of the respiratory tract, **especially the nose**. ***Klebsiella rhinoscleromatis*, GRAM NEGATIVE** — bacterial, never fungal. **Mode of infection unknown. Endemic in Egypt. Teenagers, especially females, of the poor classes. Granulomatous tissue infiltrates the SUBMUCOSA with plasma cells, lymphocytes and fibroblasts**, settling at **the transition between two types of epithelium**.',
    '',
    '**Four stages: catarrhal** → **hypertrophic**, overgrowth of dense fibrous tissue → **atrophic**, reabsorption and breakdown of tissue → **cicatricial**, scar of new connective tissue over the healing sore.',
    '',
    '- **The ATROPHIC stage is a roomy nose with considerable crusts** — turbinates shrunken, not swollen.',
    '',
    '**Pathology (2 cells): Mikulicz cells — large FOAM cells containing the causative bacilli within their vacuoles; PATHOGNOMONIC.** **Russell bodies — degenerated plasma cells with an eosinophil-staining cytoplasm.** **Mott cell = the intermediate between plasma cell and Russell body** *(not in course material)*.',
    '',
    '**CT PNS → expansile granuloma.** Late external deformity is the broadened, fibrotic **"Hebra nose"** *(not in course material)* — the opposite of the syphilitic saddle.',
    '',
    '**Diagnosis: BIOPSY, culture and sensitivity. Treatment: 1 — a LONG course of antibiotics (aminoglycosides, tetracycline) ± systemic steroids. 2 — surgical excision of the nasal granuloma.** **Antibiotics FIRST** — the bacilli live inside Mikulicz cells.',
    '',
    '|Infection|Tissue destroyed|Nasal result|Histology|',
    '|---|---|---|---|',
    '|**Syphilis**|**BONE** — vomer, bony septum|**saddle / shrunken bridge deformity**|endarteritis obliterans, gummata|',
    '|**Tuberculosis**|**CARTILAGE** — anterior septum|**anterior cartilaginous perforation**|**CASEATING** granuloma, Langhans giant cells|',
    '|**Scleroma**|**BOTH cartilage and bone**|expansile granuloma, cicatricial stenosis, Hebra nose|**Mikulicz cells, Russell bodies**|',
    '|**Leprosy**|cartilage, then bone|septal perforation, saddle nose|**lepra (Virchow) cells packed with acid-fast bacilli**|',
    '',
    '- **The bone-vs-cartilage rule, the histology column and leprosy are all *(not in course material)*** — L30 details scleroma alone.',
    '',
    'Src: L30'
  ].join('\n'),
  qs: ['entep-nose-64','entep-nose-98','entep-nose-115','entqb-nose3-116','entqb-nose3-117','entqb-nose3-118','entqb-nose3-119','entqb-nose3-120','entqb-nose3-121','entqb-nose3-122','entqb-nose3-144']
},

{
  id: 'rhin-13', w: 'must',
  h: 'Granulomatous rhinosinusitis — sarcoidosis, Wegener’s, Stewart’s',
  body: [
    '|Disease|Nature|Nose|Diagnosis|Treatment|',
    '|---|---|---|---|---|',
    '|**Sarcoidosis**|**idiopathic systemic granulomatous disease**, frequent head-and-neck manifestations; **NON-caseating**|mucosa **swollen, granular, dry, erythematous, STRAWBERRY-like**; **crusting and stenosis**; ± neck and hilar adenopathy, eye and bone problems|**serum ACE elevated**; **biopsy from the nasal septum or turbinates is often diagnostic**|**steroids · immunosuppressives — azathioprine, methotrexate**; topical steroid sprays do control symptoms|',
    '|**Wegener’s granuloma**|**autoimmune collagen disorder, MULTISYSTEM**; **necrotizing VASCULITIS**; **respiratory tract, kidneys and skin** most often involved|**ulceration of the septum with crusting, and SADDLE NOSE** — the common nasal presentations; perforation|**raised serum c-ANCA · ESR · BIOPSY**|**steroids · immunosuppressives — azathioprine, methotrexate.** Medical, not surgical|',
    '|**Midline lethal granuloma (Stewart’s)**|**rare, locally destructive**|progressive midfacial destruction|—|**radiotherapy and chemotherapy may halt the process; most cases progress rapidly to death**|',
    '',
    '- **Caseating = TB. Non-caseating = sarcoidosis.** Sarcoid is **slow**, crusting and stenosis — not rapid onset with polyps.',
    '- **Saddle nose:** **Wegener’s** (cartilage collapse after septal ulceration) · **syphilis** (bone) · relapsing polychondritis · cocaine · leprosy · **neglected septal haematoma** · trauma. **Not rheumatoid arthritis, not atrophic rhinitis.** ⚠️ One printing keys **Wegener’s** alone over a list also offering syphilis, which this bank keys elsewhere for the same deformity; another offers Wegener’s and the neglected haematoma and keys **"Both"**. Read the option list.',
    '',
    'Src: L30'
  ].join('\n'),
  qs: ['entqb-nose3-133','entqb-nose3-134','entqb-nose3-135']
},

{
  id: 'rhin-14', w: 'know',
  h: 'Fungal rhinosinusitis',
  body: [
    '**Invasive (3) and non-invasive (2).**',
    '',
    '|Form|Host|Key facts|',
    '|---|---|---|',
    '|**Acute invasive**|**poorly controlled diabetics**; **immunocompromised with severe neutropenia** — chemotherapy, BMT, transplant, AIDS, where **Aspergillus accounts for 80 %**|**most lethal form — mortality 50–80 %. Early signs: necrosis of nasal tissue and BLACKISH mucosa.** Palate, orbit, anterior cranial fossa; **meningitis, intracranial abscess, cavernous sinus thrombosis. Treat: correct the immune suppression · aggressive surgical debridement · systemic antifungal, mainly amphotericin B**|',
    '|**Chronic invasive**|usually **immunocompetent**|history of chronic rhinosinusitis|',
    '|**Chronic granulomatous invasive**|**immunocompetent**|primary paranasal granuloma, indolent; ***Aspergillus flavus***; **NON-caseating granulomas**|',
    '|**Allergic fungal sinusitis**|**immunocompetent**|**MOST COMMON form of fungal sinusitis**; hypersensitivity to inhaled fungi → chronic non-infectious inflammation — **type I (IgE) AND type III**; **eosinophil-rich "allergic mucin"** *(not in course material)*|',
    '|**Fungus ball (mycetoma)**|**immunocompetent**, older, **female > male**|asymptomatic or minimal, chronic pressure or discharge; **CACOSMIA**; **surgically treated**|',
    '',
    '- **Immunocompetence is the axis: only the acute invasive form needs a compromised host. Blackish mucosa in a diabetic is an emergency.**',
    '',
    'Src: L30'
  ].join('\n'),
  qs: []
}

    ]
  }
};
