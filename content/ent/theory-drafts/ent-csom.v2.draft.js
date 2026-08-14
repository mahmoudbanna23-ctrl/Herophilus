/* ent-csom v2 — "CSOM and complications", ENT.
   Rewritten 2026-08-14 under START-HERE.md §14 (slide-density revision notes).
   v1 was 9,873 body words over 28 sections / 31 printed pages — rejected for
   length. This is 15 sections. The input file was not edited.

   BUDGET — computed here, not copied (§14.1). `wc -w` on the cached lectures
   this chapter actually rests on:
     L16) Chronic otitis media           884 w   the backbone
     L17,18) Otorrhea and otalgia        684 w   otorrhoea types, middle-ear otalgia
     L22) Anatomy of  Ear Undergraduate  538 w   drum layers, walls, vertical VII
     -------------------------------------------
     SUM 2,106.  Floor 600, cap 3,000  ->  WORKING BUDGET 2,106.
   ⚠️ Two honest readings, and the conservative one was taken. L4) PHARYNGEAL
   SUPPURATIONS (1,476 w) IS drawn on — csom-15 quotes it and cites it in its
   Src line — so the formula read literally gives 3,582 and therefore the 3,000
   cap. It contributes ONE clause (Bezold’s abscess as a cause of parapharyngeal
   abscess), so claiming 1,476 words of headroom for it would game the formula.
   Budget is stated as 2,106 and the result is reported against BOTH numbers.

   ⚠️⚠️ MEASURED OUTCOME: 3,508 body words — 9,873 -> 3,508 (−6,365, −64 %) and
   28 sections -> 15. THE 2,106 WORKING BUDGET IS MISSED BY 1,402 (+67 %), and
   the 3,000 cap by 508 (+17 %). Reported, not hidden (§14.1). Four compression
   passes were run; 2,422 of the words are prose fragments and 1,086 are table
   cells across 13 tables, because nearly everything examined in this chapter is
   a two-column discrimination and a table is the cheapest form it has.
   ⚠️ THE FLOOR WAS REACHED BEFORE THE BUDGET WAS. What the NEXT 200 WORDS would
   cost, in ascending order of yield lost, every non-protected word having
   already been cut:
     · csom-15 eponym table, 4 distractor rows — 46 w. Griesinger’s sign,
       Tobey-Ayer, Trotter’s triad, Pott’s puffy tumour. All four are printed as
       DISTRACTORS against Gradenigo’s and the lateral sinus in this chapter’s
       questions; a learner who cannot reject them loses the mark.
     · csom-6 hearing-loss table — 66 w. Carries the site->type rule, the
       ossicular-erosion key, the fistula->MIXED discriminator, and the
       "hearing loss is CONDUCTIVE and is not in Gradenigo’s triad" line, itself
       a keyed exception.
     · csom-9 compass, 4 rows — 40 w. Zygomatic, Citelli, cerebellar, inwards.
       The Citelli row is half of the "lateral spread, except c & d" key.
     · csom-4 cholesteatoma FALSE list — 60 w. Six statements, five of which are
       the keyed answer to a question filed in this chapter.
   All four are protected facts (§14.2, floor 2), so the cut was not made.
   Scaling the budget, or accepting 3,508, is the caller’s decision. For scale,
   the two approved v2 chapters measure 3,759 (stridor, 113 qs) and 3,826
   (tonsils, 117 qs); this is 3,508 for 93.
   Page count is not chased: §14.1 measured that word cuts barely move it and
   the print stylesheet owns it.

   FLOOR KEPT BOTH WAYS — every fact, number, list, classification, eponym and
   sign L16 states; what L17,18 and L22 add here; and every one of the 93 linked
   questions’ KEY and DISCRIMINATOR as a line or a table cell. All 93 ids
   preserved and redistributed, none dropped (diffed against the v1 set).

   NO FLOWCHART. v1 carried four. Three were SEQUENCES, not branches (the
   mastoiditis cascade, safe-CSOM treatment, the approach to a discharging ear),
   and a sequence is a numbered line for a fraction of the vertical space; the
   fourth (managing acute mastoiditis) duplicated its own treatment paragraph
   node for node. The mastoiditis cascade survives as one line in csom-10.

   OMISSION NOTE — cut on purpose, each a decision on the record:
     1. Distractor-by-distractor rejection (~5,000 words of v1). It lives in
        every question’s own `explanation`, one tap away through the qs links
        (§14.2). Kept only where the teaching point IS the discrimination —
        safe vs unsafe, sign-to-complication, temporal vs cerebellar abscess,
        mastoid abscess vs furunculosis, the Gradenigo element table.
     2. Question ids in body text, teaching voice, bank meta-commentary, long
        verbatim block quotes, per-fact citation clauses (one Src line now).
     3. v1 csom-25, the closing "name it from one sign" revision page — its
        TABLE is kept and promoted into csom-8 beside the classification, so it
        indexes the complication sections instead of summarising them; its prose
        preamble went, and the sign lists it duplicated were stripped out of the
        sections below it. v1 csom-27, the closing "approach to a discharging
        ear" flow — 100 % duplication, deleted. v1 csom-28, the omission
        register — it is this header now.
     4. Mechanism-of-why passages that are not themselves tested discriminators:
        the pneumatisation account (given once, in csom-10), the watershed
        sloughing of the drum in necrotising OM, why the reservoir sign works
        (one clause kept), the two-way-traffic essay on labyrinthitis, the
        walls-of-a-box passage (kept as the bare relations line), the areal
        reasoning behind myringoplasty.
     5. The claim that extradural abscess is "the commonest intracranial
        complication". v1 asserted it twice and asserted the same of MENINGITIS
        in a third section — an internal contradiction, neither version on any
        slide and neither tested by these 93. Dropped rather than propagated.
     6. This pass only, and no fact went with them: sentences reduced to
        fragments, and each fact’s second and third printing across sections —
        the four discharge adjectives, "annulus intact = safe", what an acellular
        mastoid means, "always surgical", the tegmen route, the
        vomiting-vs-neck-rigidity pair, "CSOM is not painful".

   CROSS-CHAPTER DEFERRALS (§14.5) — named, so each is a promise not a deletion.
   Each was checked against all 93 of this chapter’s questions: none tests it.
     · CSF otorrhoea beyond the one distractor row — temporal bone fracture
       types, conservative management (head elevation, CSF-pressure drugs, water
       precautions), exploration and repair                ->  `ent-otorrhea`
     · Bloody otorrhoea in full, and glomus tumour (pathology, types,
       presentation, investigation, treatment)             ->  `ent-otorrhea`
     · Otitis externa in full — predisposing factors, localised (furunculosis)
       and diffuse bacterial, otomycosis, malignant otitis externa, bullous
       myringitis, Ramsay Hunt, auricular perichondritis, herpes zoster, gout
       ->  `ent-otalgia` / `ent-otorrhea`. Kept here only as the two one-line
       contrasts these questions turn on: the tragus sign, and canal-floor
       granulations.
     · Referred otalgia — the 95/5 split, V, IX, X and C2/C3, and the TMJ,
       parotid and preauricular node causes                ->  `ent-otalgia`
     · Middle ear and drum anatomy in full (L22)           ->  `ent-earanat`;
       the layers, the relations and the vertical VII stay here, they are keyed.
     · Facial nerve disorders proper — grading, topodiagnosis, Bell’s palsy
       ->  `ent-facial`; the otogenic palsy stays here, it is a complication.
     · Retropharyngeal and parapharyngeal abscess as diseases (L4)
       ->  `ent-pharsupp`; only the Bezold route is kept.
   ⚠️ The §14.5 REGISTER TABLE in START-HERE.md is NOT updated by this file —
   the caller forbade touching any other file. Those seven rows are owed.

   Table pipes carry no padding — mdCells() trims outer delimiters.
   Curly apostrophes throughout: a straight one closes a single-quoted field. */

var THEORY_ENT_CSOM = {
  'ent-csom': {

    intro: 'Two diseases and their spread. **Safe = mucositis, central perforation, bone intact. Unsafe = osteitis, cholesteatoma, attic or marginal perforation.** Then one flat rule — **CSOM is not a painful condition** — and one drill: name the complication from a single new sign.',

    sections: [

{
  id: 'csom-1', w: 'must',
  h: 'Definition, and the safe/unsafe spine',
  body: [
    '**CSOM = inflammatory change of the MUCOPERIOSTEAL LINING OF THE MIDDLE EAR CLEFT · INSIDIOUS onset · PROTRACTED course · IRREVERSIBLE TISSUE PATHOLOGY.** Cleft = tube + tympanic cavity + aditus + antrum + air cells, so mastoid disease is the same illness.',
    '**“Safe” = ANNULUS INTACT** — skin cannot enter, so no cholesteatoma, so no bone erosion. Not “needs no treatment”.',
    '',
    '||**SAFE — tubo-tympanic (MUCOSITIS)**|**UNSAFE — attico-antral (OSTEITIS)**|',
    '|---|---|---|',
    '|Pathology|**living mucosa** inflamed|**OSTEITIS**, bone eroded by **cholesteatoma**|',
    '|Discharge|**mucopurulent**|**purulent**|',
    '|Amount|**profuse**|**scanty**|',
    '|Pattern|**intermittent**, flares with a cold or water|**continuous**|',
    '|Smell|**odourless**|**FOETID**|',
    '|Deafness|mild–moderate **conductive**|moderate–severe, **conductive OR MIXED**|',
    '|Pain|**none**|**none either**, until a complication|',
    '|Perforation|**CENTRAL, pars tensa**|**ATTIC or MARGINAL**|',
    '|Granulations|**absent**|**common**, red, fleshy, posterosuperior|',
    '|Cholesteatoma|**absent**|**present**, attic or posterosuperior|',
    '|Mastoid X-ray|**cellular**|**acellular + FILLING DEFECT**|',
    '|C&S|none stated|**GRAM-NEGATIVE organisms**|',
    '|Complications|rare — *safe*|this type produces them — *unsafe*|',
    '|Treatment|medical, cautery, myringoplasty|**ALWAYS SURGICAL**|',
    '',
    '- **Safe treatment, the lecture’s order: antibiotherapy per C&S · chemical cautery of the perforation margins · MYRINGOPLASTY · TYMPANOPLASTY = myringoplasty + ossiculoplasty.** Aural toilet, water precautions.',
    '- Untreated safe disease = **repeated attacks of mucopurulent discharge** + conductive loss. **Not** total deafness, facial palsy, intracranial spread, septicaemia.',
    '- Defect: one printing keys **“profuse odourless otorrhoea”** as the tubotympanic exception — the lecture’s own description of it. True exception, keyed correctly elsewhere in the same bank: **high incidence of complications**. Keyed as printed.',
    '- *“Caused by Gram-negative bacteria”* is false of tubo-tympanic disease only because the slide prints them on the unsafe side; they grow from safe ears in practice *(not in course material)*.',
    '',
    'Src: L16; L17,18'
  ].join('\n'),
  qs: ['entep-ear-199','entep-ear-232','entqb-ear4-110','entep-case-12','entep-case-15','entep-ear-59','entep-mfe6-1','entep-ear-248','entqb-ear4-111','entep-ear-205','entep-ear-214']
},

{
  id: 'csom-2', w: 'must',
  h: 'Reading the discharge',
  body: [
    '**NO MUCOUS GLANDS IN THE EXTERNAL CANAL — MUCUS ALWAYS COMES FROM THE MIDDLE EAR.** One fact carries the topic.',
    '',
    '|Otorrhoea|Causes|',
    '|---|---|',
    '|**Watery, clear**|**CSF** — trauma, post acoustic-tumour removal. Confirm: **halo sign · β2-transferrin · β trace protein**|',
    '|**Mucoid / mucopurulent**|**Safe CSOM · AOM AFTER perforation** — mucus proves living middle-ear mucosa|',
    '|**Pure purulent**|**Unsafe CSOM with cholesteatoma · acute NECROTISING otitis media · otitis externa** — mucosa destroyed, or a keratin sac and dead bone, or canal disease|',
    '|**Bloody**|Trauma — skull-base fracture, minor canal trauma. Tumour — **glomus**, carcinoma of the EAC|',
    '|**None**|Effusion, tubal dysfunction — drum **intact**|',
    '',
    '- **Four adjectives are a whole diagnosis.** *Profuse, mucopurulent, odourless, intermittent* = safe. *Scanty, purulent, foetid, continuous* = cholesteatoma.',
    '- **FETOR = OSTEITIS**, anaerobes on dead bone — the most useful single finding. **A “central” perforation with a foul discharge is a contradiction: look again at the attic and posterosuperior quadrant.**',
    '- Pattern follows route: safe disease comes through the **tube**, so it flares with a cold or water; a cholesteatoma never stops growing.',
    '',
    'Src: L17,18; L16'
  ].join('\n'),
  qs: ['entep-ear-72','entep-ear-45','entep-ear-157','entep-enr-10','entqb-ear4-107','entqb-ear4-109','entqb-ear4-118','entqb-ear6-168','entqb-ear6-169']
},

{
  id: 'csom-3', w: 'must',
  h: 'The perforation, and why the annulus decides everything',
  body: [
    '**“Central” means a rim of drum survives ALL ROUND — the fibrous ANNULUS is intact.** Not a statement about the middle of the drum: a central perforation can be **large, kidney-shaped, 45 dB gap** and still safe.',
    '**Pars tensa = skin + FIBROUS + mucosa · pars flaccida = skin + mucosa, NO fibrous layer** — so the attic **retracts** under negative pressure instead of tearing.',
    '',
    '|Perforation|Where|Means|',
    '|---|---|---|',
    '|**CENTRAL**|pars tensa, rim all round — **annulus intact**|**SAFE**. Skin cannot migrate in|',
    '|**MARGINAL**|**destroys part of the annulus**, usually posterosuperior|**UNSAFE** — the classic cholesteatoma site|',
    '|**ATTIC**|pars flaccida, above the lateral process|**UNSAFE** — hallmark of **primary acquired** cholesteatoma|',
    '|**Total / subtotal**|whole pars tensa gone|follows **acute necrotising OM**, not ordinary chronic disease|',
    '|Round, oval, **kidney-shaped**, smooth edge|pars tensa|**INFECTIVE** — melted out|',
    '|**Triangular, slit-like**, ragged edge|anywhere|**TRAUMATIC** — torn|',
    '',
    '- **Annulus intact = safe. Annulus breached, or the flaccid attic retracted, = squamous epithelium enters = unsafe.**',
    '',
    'Src: L16; L22'
  ].join('\n'),
  qs: ['entep-ear-6','entep-ear-71','entep-ear-92','entep-ear-200','entqb-ear4-91','entqb-ear4-100']
},

{
  id: 'csom-4', w: 'must',
  h: 'Cholesteatoma — definition and classification',
  body: [
    '**A DESTRUCTIVE and EXPANDING KERATINIZING STRATIFIED SQUAMOUS EPITHELIUM (containing CHOLESTEROL CRYSTALS and PROTEOLYTIC ENZYMES) in the middle ear and/or mastoid process.** Pathology: **skin in the middle ear.** Picture: **a sac with a narrow neck, lined by skin** — it cannot clear the keratin it sheds, so it enlarges and the enzymes dissolve the bone in its way.',
    '- **TRUE: keratinising stratified squamous epithelium · cholesterol crystals + proteolytic enzymes · may be complicated by an EXTRADURAL ABSCESS · it defines the UNSAFE attico-antral type.**',
    '- **FALSE: a benign tumour** (normal skin in an abnormal place, no neoplasm) **· malignant or metastasising** (danger purely local) **· may be left untreated · treated medically · congenital = inherited** (= **ectodermal cell rests present at birth**) **· primary acquired sits in the hypotympanum** (it is an **attic** retraction).',
    '- **Painless and silent** — the ear needing surgery most troubles the patient least. Pain means a complication.',
    '',
    '|How skin reaches the middle ear|Mechanism|Presents as|',
    '|---|---|---|',
    '|**CONGENITAL**|**ectodermal cell rests**|**white pearl behind an INTACT drum**, child, no infection history, no perforation|',
    '|**ACQUIRED — PRIMARY**|**attic retraction cholesteatoma**, pars flaccida sucked into the attic|**crusted or retracted attic**, pars tensa often normal, no prior perforation — easily missed|',
    '|**ACQUIRED — secondary, MIGRATIONAL theory**|canal epithelium **migrates in** through a perforation|frank **marginal** perforation|',
    '|**ACQUIRED — secondary, METAPLASTIC theory**|middle-ear mucosa undergoes **squamous metaplasia**|chronic inflammation, no route needed|',
    '|*(distractor)* **implantation**|epithelium implanted at myringotomy or surgery|iatrogenic *(not in course material)*|',
    '',
    '- The classification explains the **otoscopy**, and changes **nothing** about treatment.',
    '',
    'Src: L16'
  ].join('\n'),
  qs: ['entep-ear-138','entqb-ear4-119','entep-mfe5-44','entep-ear-35','entep-mfe4-4','entqb-ear4-114']
},

{
  id: 'csom-5', w: 'must',
  h: 'Unsafe (attico-antral) CSOM — otoscopy, imaging, treatment',
  body: [
    '**Otorrhoea purulent, foetid, scanty, continuous · deafness moderate to severe, CONDUCTIVE OR MIXED · “ChSOM is not a painful condition.”**',
    '**Otoscopy, three findings in the same place: perforation ATTIC or MARGINAL · granulations COMMON, red and fleshy, usually POSTEROSUPERIOR · cholesteatoma ATTIC or POSTEROSUPERIOR.** An aural polyp in a discharging ear is cholesteatoma until disproved.',
    '**X-ray carries TWO findings saying different things — which is why the key is “b & c”: ACELLULAR (sclerotic) mastoid AND a FILLING DEFECT** (cholesteatoma shadow). Acellular = pneumatisation arrested in early childhood = **DURATION**; filling defect = bone eaten = **DESTRUCTION**. **C&S: GRAM-NEGATIVE organisms** — the bank’s cram sheet adds *Pseudomonas, Proteus, Klebsiella* *(species not on the slide)*.',
    '**DIAGNOSTIC = an irregular, NON-ANATOMICAL cavity containing BONE SEQUESTRA** — nothing else leaves one. The air-bone gap, the culture and the smell all occur in other disease.',
    '**Treatment ALWAYS SURGICAL. TYMPANO-MASTOIDECTOMY = TYMPANOPLASTY + MASTOIDECTOMY.** Antibiotics dry the ear and hide the fetor while the sac grows; **myringoplasty grafts a lid over the disease and seals it in**. HRCT in modern practice — extent, ossicles, tegmen, sinus plate, fallopian canal *(not in course material)*.',
    '',
    'Src: L16'
  ].join('\n'),
  qs: ['entep-ear-16','entep-ear-144','entep-ear-184','entqb-ear4-112','entqb-ear6-170','entqb-ear4-92']
},

{
  id: 'csom-6', w: 'high',
  h: 'Hearing loss, and pain as a red flag',
  body: [
    '**Rule: canal or middle ear → CONDUCTIVE. Cochlea, labyrinth or VIII → SENSORINEURAL.**',
    '',
    '|Mechanism|Loss|',
    '|---|---|',
    '|Perforation, or restricted drum movement (retraction, tympanosclerosis, adhesions)|**conductive**|',
    '|**EROSION OF THE OSSICLES**, long process of the incus first|**CONDUCTIVE**, gap often ≥ 40 dB *(incus detail not in course material)*|',
    '|**Erosion of the LATERAL semicircular canal** — labyrinthine fistula|**SNHL added to the conductive loss = MIXED**|',
    '|Suppurative labyrinthitis|**SNHL** + severe vertigo|',
    '|The otitis media under **petrositis**|**conductive** — and hearing loss is **not in Gradenigo’s triad**|',
    '',
    '- **Purely conductive = still in the middle ear. MIXED, or VERTIGO, = the labyrinth is breached** — never reassuring in a cholesteatoma ear.',
    '- **CSOM IS NOT A PAINFUL CONDITION.** Pain = a superimposed **acute otitis media**, or a **complication**. *“Severe ear pain is present in all patients”* is false of unsafe CSOM; **cholesteatoma itself is painless.**',
    '- Other middle-ear otalgia: **ASOM before the drum perforates · complicated CSOM, e.g. acute mastoiditis · tympanic plexus neuralgia**, abolished by intratympanic xylocaine.',
    '',
    'Src: L16; L17,18'
  ].join('\n'),
  qs: ['entqb-ear4-108','entqb-ear4-106']
},

{
  id: 'csom-7', w: 'must',
  h: 'Surgery — the ranked aims and the six operations',
  body: [
    '**SAFE first · DRY second · HEARING last.** Rebuilding a chain into a cavity that still holds cholesteatoma buries the disease under a graft. *(The ranking is on no slide — not in course material, though the bank tests it repeatedly.)*',
    '**Bilateral disease: operate the DANGEROUS ear, not the deafer one.** Attic perforation + offensive discharge + 20 dB gap outranks a large central perforation + 45 dB — a big hole is not a dangerous one. Not both at one sitting.',
    '',
    '|Operation|What is done|Hearing|',
    '|---|---|---|',
    '|**Myringoplasty**|perforation repaired alone, usually **tragal perichondrium**|improved|',
    '|**Tympanoplasty**|myringoplasty **+ ossiculoplasty**|improved|',
    '|**Cortical (simple) mastoidectomy**|**air cells only**; middle ear and drum **untouched**|unchanged — the operation for a **mastoid abscess**|',
    '|**Bondy’s operation**|sac **exteriorised**, drum **completely intact**|preserved — most conservative open procedure|',
    '|**Modified radical mastoidectomy**|attic and antrum exteriorised; **drum remnant and ossicles preserved**|preserved|',
    '|**Radical mastoidectomy**|whole middle ear exteriorised; drum remnant, malleus, incus removed; **EUSTACHIAN TUBE OBLITERATED**|**sacrificed**|',
    '|**Tympano-mastoidectomy**|**tympanoplasty + mastoidectomy** — for unsafe CSOM|secondary to clearance|',
    '',
    '- **Obliteration of the Eustachian tube belongs to the RADICAL operation and nothing else on the list** — the open cavity must be sealed from nasopharyngeal reflux. *(The individual operations are described on no cached slide — not in course material.)*',
    '',
    'Src: L16'
  ].join('\n'),
  qs: ['entep-ear-43','entep-ear-123','entep-ear-136','entep-ear-187','entep-ear-243']
},

{
  id: 'csom-8', w: 'must',
  h: 'Complications — the three tiers, and naming one from a single sign',
  body: [
    '**Definition: extension of the inflammatory process BEYOND THE CONFINES OF THE MIDDLE EAR CLEFT. Mostly in unsafe CSOM WITH CHOLESTEATOMA.**',
    '**Predisposing factors, exactly three: VIRULENT ORGANISMS · LOW RESISTANCE OF THE PATIENT · A PREFORMED PATHWAY.**',
    '**Pathways, once the normal defence barriers are overcome: THE COMMONEST WAY IS BONE EROSION BY A CHOLESTEATOMA.** Preformed pathways: **congenital dehiscences · fracture lines · the ROUND WINDOW MEMBRANE · dehiscences due to previous surgery.**',
    '**Relations: SUPERIOR tegmen tympani → temporal lobe · POSTERIOR aditus, sigmoid sinus on its plate, cerebellum · INFERIOR jugular bulb · ANTERIOR carotid artery · MEDIAL inner ear and facial nerve** — bone is the only separation, and cholesteatoma dissolves bone.',
    '',
    '|Tier|Members|Barrier crossed|',
    '|---|---|---|',
    '|**CRANIAL (intratemporal)**|**acute mastoiditis and mastoid abscess — THE MOST COMMON complication of all** · **petrositis** · **labyrinthitis** · **facial paralysis**|still **inside bone**|',
    '|**INTRACRANIAL**|**extradural abscess** · **meningitis** · **subdural abscess** · **brain abscess** · **lateral (sigmoid) sinus thrombosis**|**dura breached**|',
    '|**EXTRACRANIAL**|**external otitis** · **retropharyngeal** and **parapharyngeal abscess** · **cervical lymphadenitis**|**soft tissues of the neck**|',
    '',
    '- **LABYRINTHITIS IS CRANIAL, NOT INTRACRANIAL** — the keyed exception in the *“all are intracranial except”* stem.',
    '- **Sigmoid sinus thrombosis is not extracranial** — it is inside the cranial cavity. One stem uses “extra-cranial” loosely to mean *outside the cranial cavity*; under either scheme the sinus is the odd one out.',
    '',
    '|New sign in a discharging ear|Complication|',
    '|---|---|',
    '|Mastoid tenderness + **reservoir sign** + sagging canal wall|**Acute mastoiditis** — commonest of all (cranial)|',
    '|Fluctuant swelling, pinna **out and down**, sulcus gone|**Mastoid (subperiosteal) abscess** — operate|',
    '|Tender **upper-neck** swelling under sternomastoid|**Bezold’s abscess** → parapharyngeal (extracranial)|',
    '|**DIPLOPIA** + retro-orbital pain|**Petrositis, Gradenigo’s** (cranial, medial)|',
    '|**VERTIGO + SNHL**|**Labyrinthitis** (cranial); on tragal pressure = **fistula**|',
    '|**Facial weakness**, forehead involved|**Facial paralysis** (cranial, anterior)|',
    '|**NECK RIGIDITY**, no focal signs|**Meningitis** (intracranial)|',
    '|**VOMITING, drowsiness** → hemiparesis + hemianopia|**Temporal lobe abscess** (intracranial, superior)|',
    '|**Ataxia**, nystagmus, past-pointing|**Cerebellar abscess** (intracranial, posterior)|',
    '|**RIGORS**, swinging fever|**Lateral sinus thrombophlebitis** (intracranial, posterior)|',
    '|**PULSATING** discharge, marginal perforation|dura exposed / **extradural abscess**|',
    '|**PAIN** after years of painless discharge|superimposed **AOM**, or **any** of the above|',
    '',
    'Src: L16; L22'
  ].join('\n'),
  qs: ['entep-ear-124','entep-ear-228','entqb-ear3-65']
},

{
  id: 'csom-9', w: 'must',
  h: 'The compass — direction of spread names the complication',
  body: [
    '**The direction is the direction PUS LEAVES THE MASTOID, not the position of the structure on the drum.** The antrum lies **behind** the canal, so **ANTERIOR** spread arrives at the **posterosuperior** bony canal wall — which reads backwards until the reference point is fixed.',
    '',
    '|Direction out of the mastoid|Structure reached|Result|',
    '|---|---|---|',
    '|**SUPERIOR**|**tegmen tympani** → middle cranial fossa|extradural abscess, then **TEMPORAL LOBE ABSCESS**|',
    '|**LATERAL**, outer cortex|subperiosteal plane|**POST-AURICULAR ABSCESS — commonest form**|',
    '|**LATERAL, forwards**|root of the zygoma|**zygomatic abscess**|',
    '|**INFERIOR**, through the tip|sheath of **sternomastoid**|**BEZOLD’S ABSCESS**|',
    '|**INFERIOR**, medial wall of the tip|**posterior belly of digastric**|**CITELLI’S ABSCESS**|',
    '|**ANTERIOR**|posterosuperior bony canal wall; **fallopian canal**|**SAGGING**; **FACIAL PALSY**|',
    '|**POSTERIOR**|**sinus plate** → sigmoid sinus|**lateral sinus thrombophlebitis**|',
    '|**POSTERIOR**, posterior fossa|cerebellum|**cerebellar abscess**|',
    '|**MEDIAL**|**petrous apex**|**PETROSITIS** → Gradenigo’s|',
    '|**INWARDS**|lateral semicircular canal; round window|**labyrinthitis / fistula**|',
    '',
    '- **Bezold’s and Citelli’s are INFERIOR, not lateral** — which is why the lateral-spread key is *“c & d”*. **Read a Grade Gain option list to the end.**',
    '- **Commonest cause of a temporal lobe abscess = DIRECT SPREAD from a middle ear infection.** Haematogenous abscesses are multiple, at the grey–white junction; a **frontal** sinus gives a **frontal** lobe abscess.',
    '- *(The directional scheme, Citelli’s abscess and the zygomatic abscess appear on no cached slide — not in course material.)*',
    '',
    'Src: L16'
  ].join('\n'),
  qs: ['entqb-ear1-15','entqb-ear1-27','entqb-ear3-60','entqb-ear3-63','entqb-ear3-64']
},

{
  id: 'csom-10', w: 'must',
  h: 'Acute mastoiditis — pathology and clinical picture',
  body: [
    '**Definition: acute infection of the MASTOID ANTRUM AND AIR CELLS. The commonest complication of otitis media.**',
    '**“Usually occurs in WELL PNEUMATIZED MASTOIDS and is MORE COMMON IN CHILDREN” — so “more common in adults” is the classic false statement.** Early repeated disease **arrests** pneumatisation, leaving the chronic adult ear sclerotic; add the child’s shorter, wider, more horizontal tube.',
    '**Sequence: acute suppurative OM + IMPEDED DRAINAGE → pus UNDER PRESSURE in the air cells → PRESSURE NECROSIS of the cell walls, which COALESCE (COALESCENT MASTOIDITIS) → the outer table is eroded → POST-AURICULAR MASTOID ABSCESS, the commonest form, auricle pushed OUTWARDS AND DOWNWARDS → rupture → MASTOID FISTULA draining mucopus.**',
    '**Symptoms: fever · INCREASING earache · profuse mucopurulent discharge.**',
    '**Signs, in the stage of acute mastoiditis: profuse mucopurulent discharge which may exhibit a POSITIVE RESERVOIR SIGN — rapid re-accumulation of discharge after cleaning the ear · TENDERNESS AND REDNESS OVER THE MASTOID · SAGGING (oedema) of the POSTERO-SUPERIOR WALL OF THE BONY CANAL, due to periosteitis.** Also described as **pulsatile** *(not in course material)*.',
    '- The reservoir sign measures the **space upstream**. Its mirror image — **scanty foetid discharge that does not re-accumulate** — is cholesteatoma.',
    '- **NOT acute mastoiditis: granulations on the FLOOR OF THE EXTERNAL MEATUS** — malignant (necrotising) otitis externa, canal disease, outside the cleft.',
    '',
    'Src: L16; L22'
  ].join('\n'),
  qs: ['entep-ear-81','entep-ear-222','entqb-ear3-66','entqb-ear4-117','entqb-ear4-121']
},

{
  id: 'csom-11', w: 'must',
  h: 'Mastoid abscess versus furunculosis, and treatment',
  body: [
    '**The lecture names the differential itself: FURUNCULOSIS OF THE EXTERNAL EAR WITH POST-AURICULAR LYMPHADENITIS.**',
    '',
    '||**Mastoiditis / mastoid abscess**|**Furunculosis + post-auricular node**|',
    '|---|---|---|',
    '|Discharge|**mucopurulent, profuse**, **reservoir sign**|scanty, purulent, **never mucoid** — no mucous glands in the canal|',
    '|Pinna|pushed **OUTWARDS AND DOWNWARDS**|not displaced — a discrete mobile lump|',
    '|Sulcus|**preserved** early; **obliterated** once the subperiosteal abscess forms|preserved|',
    '|Tragus|**free**|**TENDER — the tragus sign**|',
    '|Chewing|no change|**worse** — the anterior canal wall abuts the TMJ|',
    '|Canal|**sagging** of the posterosuperior **bony** wall, deep|furuncle in the **cartilaginous** outer meatus|',
    '|Treatment|antibiotics; **cortical mastoidectomy** if an abscess has formed|systemic antistaphylococcal antibiotic + analgesia; **do not incise** — perichondritis|',
    '',
    '- Defect: Grade Gain writes the pinna is pushed **“forwards and downwards”** where the lecture writes **“outwards and downwards”**. Keyed as printed.',
    '- **Read the stem for the STAGE.** The bank prints *“postauricular redness and oedema with a PRESERVED sulcus → acute mastoiditis”*; the sulcus is **obliterated** only once the subperiosteal abscess forms. Both true, different stages.',
    '**Treatment: ACUTE MASTOIDITIS → MEDICAL, ANTIBIOTICS. MASTOID ABSCESS → SURGICAL, CORTICAL MASTOIDECTOMY** — every air cell exenterated, **middle ear and drum left alone**. The trigger for surgery is the **abscess**.',
    '- **Myringotomy if the drum is still intact** — the pus needs a way out before antibiotics can work. **The majority resolve on antibiotics; “the majority require surgery” is FALSE**, while *“may require surgery in severe cases”* is true.',
    '- **Three indications for surgery:** failure — pain, fever or otorrhoea after **2–4 weeks** of adequate medical management · a **mastoid or neck abscess** · **any cranial or intracranial complication**.',
    '- **Child with old ear trouble, fever, warm tender mastoid → URGENT ENT REFERRAL** — not drops, not routine referral.',
    '',
    'Src: L16'
  ].join('\n'),
  qs: ['entqb-ear4-93','entqb-ear4-120','entep-case-19','entep-ear-112','entqb-ear3-67']
},

{
  id: 'csom-12', w: 'must',
  h: 'Petrositis and Gradenigo’s triad',
  body: [
    '**Definition: spread of infection to the PETROUS APEX AIR CELLS**, by **MEDIAL** spread.',
    '**Pathology: ONLY IN PNEUMATIZED PETROUS BONE · SIMILAR PATHOLOGY TO ACUTE MASTOIDITIS · MUCH LESS COMMON · MORE SERIOUS, because of a GREATER TENDENCY TOWARD INTRACRANIAL EXTENSION.**',
    '**Gradenigo’s syndrome / triad: OTORRHOEA · RETROBULBAR PAIN, from irritation of the TRIGEMINAL GANGLION · DIPLOPIA, from IPSILATERAL VI (ABDUCENT) PALSY.** Shorthand: **one ear symptom, two eye symptoms.**',
    '',
    '|Element|Structure at the apex|Nerve|What you see|',
    '|---|---|---|---|',
    '|**Otorrhoea**|the otitis media underneath|—|the **oldest** symptom, not a new one; **purulent**, not serous|',
    '|**Retrobulbar pain**|trigeminal (Gasserian) ganglion, **Meckel’s cave**|**V**|deep **referred** pain behind the eye, **ophthalmic (V1)** territory|',
    '|**Diplopia**|abducent nerve, **Dorello’s canal**|**VI**|**LATERAL RECTUS** palsy — no abduction; unopposed medial rectus turns the eye in: **CONVERGENT PARALYTIC SQUINT**, unilateral, worst on gaze toward the lesion|',
    '|*(NOT in the triad)* hearing loss|the otitis media underneath|—|if present it is **CONDUCTIVE** — a keyed false statement|',
    '|*(NOT in the triad)* facial palsy or spasm, facial oedema, **divergent** or **bilateral** squint|fallopian canal is a different, **anterior** route|VII|distractors|',
    '',
    '- **Affected muscle = LATERAL RECTUS; the medial rectus is the trap** — it makes the deviation and is working normally. **LR6, SO4, all the rest 3** *(not in course material)*.',
    '- Pain is trigeminal, **not** facial — VII is motor: **palsy, not pain**.',
    '- Defect: Grade Gain prints the mnemonic as **“1 ear + 2 nose”**; the two non-otological elements are **orbital**. Transcribed as printed and flagged.',
    '- *(Meckel’s cave and Dorello’s canal are named on no cached slide — not in course material.)*',
    '',
    'Src: L16'
  ].join('\n'),
  qs: ['entep-ear-27','entep-ear-37','entep-ear-201','entep-mfe1-1','entep-mfe4-1','entqb-ear3-62','entqb-ear4-99','entqb-ear4-104','entep-ear-79','entep-ear-133','entep-ear-139','entep-ear-192','entep-ear-202','entqb-ear4-101','entqb-ear4-102','entqb-ear4-103','entqb-ear4-105','entep-case-18']
},

{
  id: 'csom-13', w: 'high',
  h: 'Labyrinthitis and facial paralysis',
  body: [
    '**Labyrinthitis — the lecture gives two features: SEVERE VERTIGO and SNHL**, plus nystagmus and acute vomiting. **CRANIAL, not intracranial.** The **one complication that turns a conductive loss MIXED**.',
    '- **Routes in: cholesteatoma erodes the LATERAL SEMICIRCULAR CANAL** — commonest, closest to the attic, giving a **labyrinthine fistula** (**fistula sign**: vertigo and nystagmus on tragal pressure) **· the ROUND WINDOW MEMBRANE in acute suppurative OM**, a named preformed pathway **· meningogenic, inwards along the internal auditory meatus and cochlear aqueduct** *(not in course material)*.',
    '- **Otitis media with EFFUSION cannot cause SUPPURATIVE labyrinthitis — non-suppurative, no pus.** The keyed exception. **Serous (toxic)** labyrinthitis is reversible; **suppurative** ends in a **dead labyrinth** *(not in course material)*.',
    '**Facial paralysis** — cranial, **ANTERIOR** spread, alongside sagging of the canal wall. The **vertical (mastoid) part of VII runs in a bony canal in the POSTERIOR WALL** of the middle ear to the stylomastoid foramen, and **can be injured during bone drilling**. **LOWER motor neurone: forehead involved, eye will not close** — protect the cornea.',
    '- *(Mechanisms not in course material:)* **acute** OM — a **congenital dehiscence** of the fallopian canal lets oedema compress the nerve; usually **incomplete**, treated by **urgent myringotomy** plus antibiotics. **Chronic** disease — cholesteatoma has **eroded** the canal; surgical removal with decompression, recovery far less certain.',
    '- **A facial palsy in a discharging ear is never watched** — one of the three absolute indications for surgery.',
    '',
    'Src: L16; L22'
  ].join('\n'),
  qs: ['entep-ear-156','entep-case-16']
},

{
  id: 'csom-14', w: 'must',
  h: 'The intracranial group',
  body: [
    '**MENINGITIS: headache, fever, photophobia, NECK RIGIDITY, positive KERNIG and BRUDZINSKI — and NO FOCAL DEFICIT.** That absence is the whole discrimination from a brain abscess.',
    '**EXTRADURAL ABSCESS:** pus between eroded bone — **tegmen tympani** above, posterior fossa plate behind — and the **dura**; frequently **silent**, found at operation with granulations on exposed dura. **A PULSATING discharge through a marginal perforation is the LIGHTHOUSE SIGN** — the word *pulsating* forces the answer past “cholesteatoma” to **cholesteatoma with an intracranial complication** *(not in course material)*.',
    '**SUBDURAL ABSCESS (empyema):** dura to arachnoid; **rapid deterioration, seizures, hemiplegia** *(not in course material)*.',
    '**BRAIN ABSCESS — focal signs mean a focal lesion. Stages: encephalitic → QUIET LATENT PERIOD → raised intracranial pressure (headache, VOMITING, DROWSINESS, bradycardia, papilloedema) → focal deficit. Drowsiness precedes paralysis — image then** *(staging not in course material)*.',
    '',
    '||**Temporal lobe abscess**|**Cerebellar abscess**|',
    '|---|---|---|',
    '|Route|**SUPERIOR**, through the **tegmen tympani**|**POSTERIOR**, into the posterior fossa|',
    '|Focal signs|**contralateral hemiparesis · contralateral homonymous HEMIANOPIA**; nominal aphasia if dominant|**IPSILATERAL** ataxia, past-pointing, intention tremor, **nystagmus** toward the lesion, hypotonia|',
    '|Clue in a stem|weakness of arm and leg one side, difficulty on stairs, hemianopia|falls toward the lesion, incoordination|',
    '|Ear disease|**unsafe CSOM with cholesteatoma**|**unsafe CSOM with cholesteatoma**|',
    '',
    '**LATERAL (SIGMOID) SINUS THROMBOPHLEBITIS — RIGORS MEAN BACTERAEMIA.** Infected thrombus sheds **septic emboli in showers** → **picket-fence (swinging, remittent) pyrexia with rigors**; may propagate down the **internal jugular vein** as a tender cord. **POSTERIOR** spread through the **sinus plate**. **Intracranial.** Only a bone-destroying disease reaches it — **cholesteatoma**. Treatment: IV antibiotics, anticoagulation where indicated, **sinus exploration with mastoidectomy**.',
    '- **The pair printed as near-identical vignettes: VOMITING (raised pressure → brain abscess) versus NECK RIGIDITY (meningeal irritation → meningitis).** And **continuous fever + local mastoid signs** (mastoiditis) versus **intermittent fever with rigors** (lateral sinus).',
    '- All four: **high-dose IV antibiotics PLUS surgical eradication of the ear disease.**',
    '',
    'Src: L16'
  ].join('\n'),
  qs: ['entep-ear-56','entep-ear-178','entep-case-23','entep-ear-93','entqb-ear4-116','entep-case-17','entep-ear-25','entep-ear-151','entqb-ear4-115','entep-case-21']
},

{
  id: 'csom-15', w: 'high',
  h: 'Extracranial spread, and the eponyms collected',
  body: [
    '**The extracranial list: EXTERNAL OTITIS · RETROPHARYNGEAL · PARAPHARYNGEAL ABSCESSES · CERVICAL LYMPHADENITIS.** External otitis runs the usual reasoning backwards — the *middle* ear disease macerates canal skin and causes the *outer* ear disease.',
    '**Bezold’s links an ear to a neck lump:** *L4* lists *“middle ear infections with bony destruction of the mastoid tip (Bezold’s abscess)”* among the causes of a **parapharyngeal abscess**. Pus escapes **inferiorly** through the tip along the **sternomastoid** sheath → tender neck swelling, fever, odynophagia. **Once the pus is in the neck the mastoid tenderness may be gone** — a deep neck abscess with a history of ear discharge is otological until the ear is examined.',
    '',
    '|Name|What it is|Belongs to|',
    '|---|---|---|',
    '|**Gradenigo’s triad**|otorrhoea + retro-orbital pain + diplopia|**petrositis** *(the only eponym printed in the lecture)*|',
    '|**Reservoir sign**|discharge re-accumulates as fast as the canal is mopped|**acute mastoiditis** *(defined verbatim in the lecture)*|',
    '|**Griesinger’s sign**|oedema and tenderness over the mastoid emissary vein|**lateral sinus thrombosis**|',
    '|**Tobey-Ayer test**|CSF pressure rises on compressing the **normal** jugular only|**lateral sinus thrombosis**|',
    '|**Bezold’s abscess**|mastoid tip → **sternomastoid** sheath|extracranial; presents as a **parapharyngeal abscess**|',
    '|**Citelli’s abscess**|medial wall of the tip → **posterior belly of digastric**|extracranial|',
    '|**Lighthouse / pulsating sign**|discharge pulsating with the arterial pulse|dura exposed — **extradural abscess**|',
    '|**Fistula sign**|vertigo and nystagmus on pressing the tragus|**labyrinthine fistula** in cholesteatoma|',
    '|**Tragus sign**|sharp pain on pressing the tragus|**furunculosis / otitis externa — NOT mastoiditis**|',
    '|**Trotter’s triad**|conductive deafness + immobile soft palate + V3 neuralgia|**nasopharyngeal carcinoma** — a distractor here|',
    '|**Pott’s puffy tumour**|subperiosteal abscess over the frontal bone|**frontal sinusitis** — a distractor here|',
    '|**Meckel’s cave / Dorello’s canal**|trigeminal ganglion; abducent nerve, at the petrous apex|the anatomy behind **Gradenigo’s**|',
    '',
    '- **Only Gradenigo’s and the reservoir sign are printed in the cached lectures, and Bezold’s in L4. Everything else in this table is not in course material.**',
    '',
    'Src: L16; L4'
  ].join('\n'),
  qs: ['entep-ear-124']
}

    ]
  }
};
