/* nr-cranial — "Cranial nerves", Neuropsychiatry (Neurology half).
   Written 2026-08-19 under START-HERE.md §14, §14.1 (budget), §14.2 (coverage
   floor), §14.3 (telegraphic), §14.3a (layout / mdLead anchors), §14.5
   (register), plus content\neuro\theory-plan.md.

   `nr-cranial` is an EXISTING key in app\data\modules.js, module `neuropsych`,
   group "Neurology". THE MODULE'S LARGEST SINGLE QUESTION BLOCK — 34.
   This header states no totals; the hub measures from disk and prints.

   ===========================================================================
   SOURCE — ONE CACHED DECK.

     content\neuro\lectures\L8) Cranial nerves.txt      92 pp, 3,700 w (JS split)

   ⚠️ THE DECK IS A QUARTER PICTURE PAGES, AND THAT WAS MEASURED, NOT ASSUMED.
   A per-page `pdftotext` sweep of all 92 pages returns ZERO extractable words on
   23 of them (3, 4, 16, 22, 23, 24, 28, 29, 30, 35, 53, 54, 65-69, 79, 82, 88,
   92; 34 and 87 carry 4 and 2 words). `pdffonts` lists NO font on those pages
   and `pdfimages -list` shows THREE images on each: two 93x600 bars, which are
   the template's decorative rails and appear on every page in the deck, plus one
   content image of varying size (753x500, 865x650, up to 1500x1125 on p.92).
   So they are genuine picture slides — not filler, and not text drawn as vector
   outlines, which would list fonts.

   ⚠️ THEY WERE NOT RENDERED, AND HERE IS THE EVIDENCE THAT THEY DID NOT NEED TO
   BE: every fact the 34 questions turn on was grepped for in the cache first,
   and 33 of 34 keys are in the extracted text. The pictures are illustration —
   anatomy diagrams and clinical photographs — not the payload. A later reader
   who wants them has the page list above. If a question is ever filed here that
   the text cannot answer, THAT is the trigger to render, and it is a subagent's
   job (workspace CLAUDE.md §5), never the hub's.

   ⚠️ THE DECK REPEATS ITSELF. "Examine pupil" is printed THREE times, and
   "Accommodation reflex", the VI-palsy "Management" slide and the optic "Test"
   slide TWICE each. The repeats are byte-identical. Term 1 of the budget is
   inflated by roughly 400 words of them, and they are written once here.

   ⚠️ THE DECK CARRIES FIVE OF THE LECTURER'S OWN MCQs, on slides, with options —
   the 64-year-old with left-sided electric facial pain; the most dangerous
   complication of Bell's palsy; the corneal reflex in a left UMN facial palsy;
   which muscle the oculomotor nerve does NOT supply; and which nerve is hit by
   papilledema with obstructive hydrocephalus. They are the lecturer's own
   emphasis, so `cn-12` records what they single out. They are NOT transcribed as
   questions — the bank is where questions live.

   ⚠️ CITATION FORM: the cache preserves slide TITLES, not slide numbers, so
   Src: lines cite `L8 sl. <title>`. That is the finest grain the cache supports.

   ===========================================================================
   BUDGET (§14.1).
     TERM 1, the source:      3,700 w  (~400 of it duplicated slides)
     TERM 2, 25 x questions:    850 w  (34 questions)
     max = 3,700, floor cleared. OPERATIVE CEILING GOVERNS: ~2,400 w / ~10 pp,
     hard shape <=13 pp measured by printing.

     PAGE FORECAST — ⚠️ USE ÷280, NOT ÷335. theory-plan.md §4 now carries two
     rates for this module: ~335 w/pp prose-leaning, ~280 w/pp table-heavy, the
     second measured on nr-headache. This chapter is table-heavy by construction
     (twelve nerves, a UMN/LMN discrimination, a Bell's complication table).
     THE FORECAST IS NOT A CLEARANCE — print it. If it prints over 13 pp the
     seam is driven from the `qs` links: the natural one is nerve-by-nerve
     examination (cn-1..cn-6, cn-8, cn-11) against the three disease blocks
     (cn-7 trigeminal neuralgia, cn-9/cn-10 the facial palsies), which splits the
     34 questions roughly 12/22.

   ===========================================================================
   COVERAGE FLOOR (§14.2) — all 34 linked.
     cn-2  nr-11
     cn-3  nr-12
     cn-4  nr-30
     cn-5  nr-31 · nr-75 · nr-76 · nr-77 · nr-78 · nr-79
     cn-6  nr-6 · nr-15
     cn-7  nr-63 · nr-65 · nr-66 · nr-67 · nr-70 · nr-71 · nr-72 · nr-73 · nr-74 · nr-88
     cn-9  nr-62 · nr-64 · nr-87
     cn-10 nr-68 · nr-69 · nr-80 · nr-81 · nr-82 · nr-83 · nr-84 · nr-85 · nr-86
     cn-11 nr-16
   (all ids carry the `npqb-` prefix in the arrays below)

   ===========================================================================
   ⚠️⚠️ A GAP DECLARED IN ANOTHER CHAPTER IS NOT A GAP — THIS DECK HAD IT.
   `nr-stroke`'s `str-4` carries the whole UMN-vs-LMN facial table marked "(Not
   taken from the course material, except the term UMN facial palsy)", and files
   a register row deferring the framework to `nr-lmn`. L8 prints the facial half
   IN FULL and better than the supplied version: both UMN and LMN blocks, the
   emotional-expression sign in both directions, the hemiparesis rule both ways
   with the term "crossed hemiplegia", and a five-level localisation of the LMN
   lesion. `str-4` was written before this deck was read, so the tag was honest
   when written and is now over-cautious. IT IS WRITTEN HERE AS SOURCED, because
   this is the facial nerve's own chapter and four questions filed here turn on
   it; `cn-9` says where the stroke reader's copy is. This is the recorded rule
   "read the slide before declaring a gap" firing for the fourteenth time.

   GAPS FILLED AND TAGGED (CLAUDE.md §4) — four, each grepped before being
   called a gap:
   1. ANOSMIA, RANKED (`cn-2`) — the deck LISTS mucous blockage, head trauma,
      genetics, Parkinson's and COVID-19 and ranks none. `npqb-nr-11` asks for
      the commonest and keys COVID-19.
   2. THE III AND IV NUCLEI ARE IN THE MIDBRAIN (`cn-4`) — the deck gives what
      each nerve supplies and never says where any nucleus sits. `npqb-nr-30`
      turns on midbrain + trochlear. (The VI-in-the-pons half IS the deck's.)
   3. THE DIRECTION AND DISTANCE OF VI DIPLOPIA (`cn-5`) — the deck names
      diplopia and never characterises it. `npqb-nr-76` and `npqb-nr-77` need
      horizontal, worse at distance, worse looking to the affected side.
   4. DIABETES AS THE SECOND COMMONEST LMN FACIAL PALSY (`cn-10`) — the deck
      lists diabetes mellitus in Bell's differential and ranks nothing.
      `npqb-nr-68` asks for second after Bell's.

   TWO DIVERGENCES NOTED, NEITHER DISPUTED (CLAUDE.md §4):
   - `npqb-nr-67` keys a TN attack duration of "one minute"; the deck says
     "several seconds". Of the options offered — one minute, 10 minutes, 3 hours,
     24 hours — one minute is the only one compatible with the deck, so the key
     is the best option OFFERED. Recorded, key as printed.
   - `npqb-nr-82` keys electromyography as "most useful for the DIAGNOSIS" of
     Bell's palsy; the deck lists electrophysiology under diagnostic workup but
     says it is "to assess PROGNOSIS and recovery". Both printed in `cn-10`.

   ===========================================================================
   REGISTER (§14.5). Two rows, both written into `cn-12`:
     - the UMN/LMN framework in general (limbs, tone, reflexes, plantars) ->
       `nr-lmn`. Only the FACIAL application is written here, because four
       questions filed here need it.
     - Weber and Rinne in full, and the conductive/sensorineural discrimination
       -> ENT's `ent-hearing`, which already carries it. Cross-MODULE, so it is
       recorded as an aside rather than as a row this module can tick.
   Chapter ids verified present in app\data\modules.js today.

   RE-MEASURE COMMAND FOR THE HUB:
     node -e "global.window={};var fs=require('fs');
       eval(fs.readFileSync('content/neuro/theory-drafts/nr-cranial.draft.js','utf8'));
       Object.keys(THEORY_DRAFT).forEach(function(k){var t=0;
         THEORY_DRAFT[k].sections.forEach(function(s){t+=s.body.trim().split(/\s+/).length;});
         console.log(k, THEORY_DRAFT[k].sections.length+' sections', t+' body words');});"
   =========================================================================== */

var THEORY_DRAFT = {
  "nr-cranial": {
    "intro": "Thirty-four questions, the module's largest block, and they are not spread over twelve nerves: nine are trigeminal neuralgia, nine are Bell's palsy, six are the abducens, three are the facial UMN/LMN rule. The examination survey carries the rest.",
    "sections": [
      {
        "id": "cn-1",
        "w": "know",
        "h": "The twelve, and where they leave the brain",
        "body": "- **Definition:** nerves emerging **directly from the BRAIN**, as against spinal nerves, which emerge from **segments of the spinal cord**.\n- **Number:** **12 pairs** in humans.\n- **⚠️ Origin:** the only structural rule the deck states — **only I and II emerge from the CEREBRUM**; the **remaining TEN emerge from the BRAINSTEM**.\n\nSrc: L8 sl. Cranial nerves (opening)",
        "qs": []
      },
      {
        "id": "cn-2",
        "w": "must",
        "h": "I — olfactory, and the causes of anosmia",
        "body": "- **What it does:** the sense of **SMELL**; the **SHORTEST** of the twelve.\n- **Where it starts:** specialised **olfactory receptor neurons** in the **olfactory mucosa of the UPPER nasal cavity**.\n\n### Testing it\n- **Method:** **block ONE nostril**, place a **pungent NON-IRRITANT odour** — damp coffee essence, orange seeds — under the open nostril; **repeat on the other side**.\n- **⚠️ Why non-irritant:** an intense substance such as **ammonia** activates **trigeminal NOCICEPTORS** in the nasal cavity, and the patient reports a sensation that is not smell. **It confounds the test.**\n\n### Causes of anosmia\n\n|**Cause**|**Mechanism the deck gives**|\n|---|---|\n|**Mucous blockage of the nose**|odours never reach the receptors|\n|**Head trauma**|**SHEARING of the olfactory nerve fibres**|\n|**Genetic**|congenital anosmia|\n|**Parkinson's disease**|**an EARLY feature** of the disease|\n|**COVID-19**|**transient** anosmia, a common feature|\n\n- **⚠️ Which is commonest:** the deck **lists these five and ranks none**. **COVID-19** is the commonest cause now, by prevalence of the infection *(the ranking is not taken from the course material; the list is)*.\n\nSrc: L8 sl. Olfactory nerve · Causes of anosmia. The ranking is supplied and tagged",
        "qs": [
          "npqb-nr-11"
        ]
      },
      {
        "id": "cn-3",
        "w": "must",
        "h": "II — optic, and the pupil",
        "body": "- **What it carries:** visual information **from the retina to the brain**.\n- **⚠️ It is CNS, not a peripheral nerve:** derived from **an outpouching of the DIENCEPHALON** in development.\n\n### The four-part examination\n\n|**Step**|**How**|\n|---|---|\n|**Visual acuity**|**patient WEARING GLASSES**, **each eye separately**, eye chart or card, **with the other eye covered**|\n|**⚠️ Visual FIELDS**|**by CONFRONTATION** — **cover one eye**, check the fields **in all directions**, and keep **the examiner's head LEVEL with the patient's**|\n|**Poor acuity**|fall back to a **flash light**|\n|**Fundoscopy**|the back of the eye, for **swelling of the optic disc (PAPILLOEDEMA)**, which indicates **raised intracranial pressure**|\n\n- **⚠️ Confrontation:** not a Snellen chart and not fundoscopy — those are the acuity and the disc. It is also **not** the examiner waving fingers while the patient stares at a target with both eyes open.\n\n### The pupil\n- **Size:** varies between people and with light — **smaller in bright light**, larger in the dark; **smaller in infancy, larger in adolescence**.\n- **Shape:** should be **ROUND**; abnormal shapes are congenital or pathological — **posterior synechiae with uveitis**.\n- **Symmetry:** note any **ANISOCORIA**.\n\n### The three reflexes\n- **Direct:** shine the torch into a pupil — **that pupil constricts**.\n- **Consensual:** shine into the same pupil — **the OPPOSITE pupil constricts**.\n- **Accommodation:** patient fixes on a **distant object**, then on your finger **20-30 cm** away → **constriction AND convergence, bilaterally**.\n\nSrc: L8 sl. Optic nerve (II) · Test · Examine pupil · Pupillary reflexes · Accommodation reflex — the pupil and accommodation slides are printed three and two times in the deck; written once here",
        "qs": [
          "npqb-nr-12"
        ]
      },
      {
        "id": "cn-4",
        "w": "must",
        "h": "III, IV and VI — one examination, three nerves",
        "body": "|**Nerve**|**Supplies**|**Nucleus**|\n|---|---|---|\n|**III OCULOMOTOR**|**most of eye movement** · **constriction of the pupil** · **keeps the eyelid OPEN**; and **thickening of the lens**|**MIDBRAIN**|\n|**IV TROCHLEAR**|**a SINGLE muscle — SUPERIOR OBLIQUE**|**MIDBRAIN**|\n|**VI ABDUCENS**|**a SINGLE muscle — LATERAL RECTUS**|**PONS**|\n\n*(The nuclei are supplied and tagged: the deck says what each nerve supplies and never says where any nucleus sits. The VI-in-the-pons half is the deck's own, from the facial-palsy localisation in `cn-9`.)*\n\n- **⚠️ Why the pairing matters:** **III and IV share the MIDBRAIN**, so a midbrain lesion takes them **together**. **VI shares the PONS with the FACIAL nucleus**, so a pontine lesion gives **VI palsy plus an LMN facial weakness** — see `cn-9`.\n- **⚠️ Not III:** the **LATERAL RECTUS is VI's** and the **superior oblique is IV's**. Everything else — superior, inferior and medial rectus, inferior oblique, levator palpebrae — is III's.\n\n### Testing all three at once\n- **The H:** patient **holds the head still** and follows a finger or penlight **tracing a large \"H\"** with the eyes alone.\n- **What it reads:** the **extraocular muscles**, the **levator palpebrae superioris**, and **III, IV and VI** together.\n- **The pupil half of III:** bring a finger **towards the face** — the patient goes cross-eyed and **the pupils constrict**.\n\nSrc: L8 sl. Oculomotor nerve (III) · Trochlear nerve (IV) · Abducens nerve (VI). The nuclei are supplied and tagged",
        "qs": [
          "npqb-nr-30"
        ]
      },
      {
        "id": "cn-5",
        "w": "must",
        "h": "VI — the abducens palsy, and the pressure that causes it",
        "body": "- **⚠️ THE FACT THE BANK KEEPS ASKING:** the abducens **emerges near the BOTTOM of the brain**, so it is **often the FIRST nerve compressed when intracranial pressure rises** — ahead of the optic, trochlear and oculomotor nerves.\n\n### Causes of VI palsy in adults\n\n|**Frequency**|**Causes**|\n|---|---|\n|**MORE COMMON**|**VASCULOPATHIC — diabetes, hypertension, atherosclerosis** · **trauma** · **idiopathic**|\n|**LESS COMMON**|**raised intracranial pressure** · giant cell arteritis · **cavernous sinus mass** (meningioma, brainstem glioblastoma, aneurysm, metastasis) · multiple sclerosis · sarcoidosis/vasculitis · post-myelography · **lumbar puncture** · stroke, usually not isolated · Chiari malformation · **hydrocephalus** · intracranial hypertension · **tuberculous meningitis**|\n\n- **⚠️ Commonest ISOLATED cause in an adult: vasculopathic — hypertension and diabetes.** Tumour, trauma and MS are all on the list and none of them heads it.\n- **⚠️ But:** a vasculopathic patient can still have the other cause. A diabetic hypertensive with a VI palsy **AND headache, nausea and vomiting** has **raised ICP from a mass** — the systemic risk factors do not explain the pressure symptoms, and the deck puts raised ICP, hydrocephalus and cavernous sinus mass squarely on the list.\n\n### What the patient sees\n- **⚠️ HORIZONTAL diplopia, worse at DISTANCE** — the lateral rectus fails, so the eye cannot abduct and the images separate side by side *(not taken from the course material; the deck names diplopia and never characterises it)*.\n- **⚠️ Worse LOOKING TOWARD THE AFFECTED SIDE** — that is the direction the paralysed muscle is being asked to work *(supplied)*.\n- **Sign:** the eye **will not pass the midline laterally**, giving **ESOTROPIA**.\n- **Vertical diplopia is IV's**, not VI's; VI does not touch the pupil or acuity.\n\n### Management\n- **First aim:** **identify and treat the CAUSE** where possible, and **relieve the symptoms**.\n- **⚠️ In children:** they **rarely appreciate diplopia**, so the aim is to **maintain binocular vision and promote proper visual development** — **alternate patching**, **prism therapy**, **strabismus surgery**.\n\nSrc: L8 sl. Abducens nerve (VI) · Causes of VI nerve palsy · Management (printed twice in the deck; written once). The diplopia character is supplied and tagged",
        "qs": [
          "npqb-nr-31",
          "npqb-nr-75",
          "npqb-nr-76",
          "npqb-nr-77",
          "npqb-nr-78",
          "npqb-nr-79"
        ]
      },
      {
        "id": "cn-6",
        "w": "must",
        "h": "V — trigeminal, and the two reflexes it shares",
        "body": "- **Sensory:** **sensation of the FACE**.\n- **Motor, in the MANDIBULAR division:** **muscles of MASTICATION** — masseter, temporalis, medial and lateral pterygoid — plus **tensor tympani**, **tensor veli palatini**, **mylohyoid** and the **anterior belly of digastric**.\n- **Motor nucleus:** in the **PONS**, near the main trigeminal nucleus.\n\n### Testing it\n- **Facial sensation:** a **sterile sharp** item on **forehead, cheek and jaw** — one point per division — then **repeat with a DULL object** and ask the patient to report sharp or dull. If abnormal, add **temperature** (heated or water-cooled tuning fork) and **light touch** (cotton).\n- **Motor:** patient **opens the mouth** (pterygoids) and **clenches the teeth**; **palpate temporalis and masseter** as they clench.\n\n### ⚠️ The corneal reflex — two nerves, one reflex\n- **Method:** patient **looks up and away**; touch **cotton wool** to the **other side**; **look for a blink in BOTH eyes** and ask whether it was felt; repeat on the other side.\n- **⚠️ Two nerves: AFFERENT = V sensory, EFFERENT = VII MOTOR.** The blink is the facial nerve's, not the trigeminal's, and not the abducens' or the vestibulocochlear's.\n\n### ⚠️ The jaw jerk\n\n|**Step**|**Detail**|\n|---|---|\n|**How**|examiner's **finger on the TIP of the jaw**; grip the patellar hammer **halfway up the shaft** and **tap the finger LIGHTLY**|\n|**NORMAL**|**usually NOTHING happens**, or just a **slight closure**|\n|**EXAGGERATED**|**UPPER MOTOR NEURONE lesion — especially PSEUDOBULBAR PALSY**|\n\n- **The trap:** an exaggerated jaw jerk is not bradykinesia and not Bell's palsy, and \"pyramidal tract lesion\" is only half the answer — the deck names **pseudobulbar palsy** specifically.\n\nSrc: L8 sl. Trigeminal nerve (V) · Sensory branches · Corneal reflex · Test jaw jerk",
        "qs": [
          "npqb-nr-6",
          "npqb-nr-15"
        ]
      },
      {
        "id": "cn-7",
        "w": "must",
        "h": "Trigeminal neuralgia — nine questions live here",
        "body": "- **What it is:** one of the **commonest causes of FACIAL PAIN**, and one of the most frequent neuralgias **in the elderly**.\n- **Onset:** usually **between 50 and 60**. **WOMEN more than men.**\n\n### Aetiology — the IHS split\n\n|**Class**|**What it covers**|\n|---|---|\n|**CLASSIC**|**idiopathic** cases **and those from VASCULAR COMPRESSION** — an **aberrant loop of an artery or vein**|\n|**SECONDARY (symptomatic)**|a **structural lesion OTHER than vascular compression** — **multiple sclerosis**, **post-herpetic**, **tumour**|\n\n- **⚠️ Commonest cause in the elderly: VASCULAR COMPRESSION.** MS, post-herpetic neuralgia and tumour are the secondary group.\n\n### Clinical features\n\n|**Feature**|**Trigeminal neuralgia**|\n|---|---|\n|**Pattern**|**PAROXYSMAL, STEREOTYPED attacks**|\n|**Character**|intense, **sharp, SUPERFICIAL or STABBING** — described as **ELECTRIC or SHOCK-LIKE**|\n|**Duration**|**SEVERAL SECONDS**, repetitively; longstanding cases may have a **continuous dull ache between paroxysms**|\n|**Side**|**typically UNILATERAL**|\n|**Division**|**most often V2 and/or V3** — maxillary and mandibular|\n|**⚠️ TRIGGER**|**TRIGGER ZONES** in the affected nerve's distribution — **LIGHT TOUCH** of the zone, **chewing, talking, brushing the teeth, cold air, smiling, grimacing**|\n|**Course**|**waxes and wanes** in severity and frequency|\n\n- *The bank keys an attack duration of **one minute**; the deck says **several seconds**. Of the options offered — one minute, 10 minutes, 3 hours, 24 hours — one minute is the only one compatible. Noted, key as printed.*\n- **⚠️ Superficial and electric:** not deep and steady. A **deep-seated, STEADY** facial pain is not TN; a **raised ESR** is temporal arteritis; and **response to gabapentin** is a treatment effect, not a diagnostic criterion — gabapentin is on the list below.\n\n### Diagnosis\n- **⚠️ It is CLINICAL** — the diagnosis rests on the **characteristic clinical features**, i.e. the **HISTORY**. Not the examination, which is typically normal; not neuroimaging; not laboratory tests; not EEG.\n- **What imaging is for:** **MRI and MRA** may identify **vascular compression** and **other structural brain lesions** — that is, they separate classic from secondary.\n\n### Treatment\n\n|**Line**|**Agents**|\n|---|---|\n|**Pharmacologic — the initial treatment of classic TN**|**antiepileptics, started at a SMALL DOSE and increased gradually until the pain is controlled**: **CARBAMAZEPINE** · oxcarbazepine · gabapentin · pregabalin|\n|**Antidepressants**|tricyclic — **amitriptyline** · SNRI — **duloxetine**|\n|**Secondary TN**|**treat the CAUSE** — multiple sclerosis, tumour|\n|**SURGERY**|**reserved for patients REFRACTORY to medical therapy**|\n\n- **⚠️ The escalation the vignettes walk:** carbamazepine works, then stops working → **MRI to look for vascular compression** → and only then **surgery**. Raising the dose or swapping antiepileptic comes second to finding out **why** it stopped working; operating before the MRI skips the step that decides what to operate on.\n\nSrc: L8 sl. TRIGEMINAL NEURALGIA · EPIDEMIOLOGY · ETIOLOGY · Clinical features · DIAGNOSIS · TREATMENT",
        "qs": [
          "npqb-nr-63",
          "npqb-nr-65",
          "npqb-nr-66",
          "npqb-nr-67",
          "npqb-nr-70",
          "npqb-nr-71",
          "npqb-nr-72",
          "npqb-nr-73",
          "npqb-nr-74",
          "npqb-nr-88"
        ]
      },
      {
        "id": "cn-8",
        "w": "high",
        "h": "VII — facial: what it carries, and how it is tested",
        "body": "- **Where it emerges:** from the brainstem **between the PONS and the MEDULLA**.\n- **What it does:** the **muscles of FACIAL EXPRESSION** · **TASTE from the ANTERIOR TWO-THIRDS** of the tongue and oral cavity · **preganglionic PARASYMPATHETIC** fibres to head and neck ganglia.\n\n### The three branches worth knowing\n\n|**Branch**|**Carries**|\n|---|---|\n|**Greater petrosal**|parasympathetic to the **LACRIMAL gland**, sphenoid, frontal, maxillary and ethmoid sinuses and nasal cavity; **taste to the palate** via the Vidian nerve|\n|**Nerve to STAPEDIUS**|motor to **stapedius**, in the middle ear|\n|**CHORDA TYMPANI**|parasympathetic to the **SUBMANDIBULAR and SUBLINGUAL glands**; **TASTE, anterior 2/3 of the tongue**|\n\n### Testing it\n- **Inspect** for facial droop or asymmetry.\n- **Wrinkle the forehead:** look for **loss of wrinkling**, and **push down on each side** to feel strength. **⚠️ In a UMN lesion the forehead is PRESERVED — bilateral innervation.**\n- **Shut the eyes tightly**, compare sides. **Grin** — compare the **nasolabial grooves**. Also **frown, show the teeth, puff out the cheeks**.\n- **Corneal reflex** — the facial nerve is the **efferent**; see `cn-6`.\n\nSrc: L8 sl. Facial nerve (VII) · Branches · Inspect facial droop or asymmetry",
        "qs": []
      },
      {
        "id": "cn-9",
        "w": "must",
        "h": "UMN against LMN facial palsy, and where the LMN lesion is",
        "body": "|**Feature**|**UMN facial (UMNF)**|**LMN facial (LMNF)**|\n|---|---|---|\n|**Lesion**|**corticobulbar pathway, DOWN TO ABOVE THE LEVEL OF THE PONS**|**from the NUCLEUS IN THE PONS to the facial muscles**|\n|**⚠️ Face affected**|**LOWER FACE ONLY — the upper face is SPARED**|**UPPER AND LOWER face**|\n|**Mouth**|**deviates TOWARD the HEALTHY side**|deviates toward the healthy side|\n|**⚠️ Emotion**|**emotional expression IMPROVES the deviation**|**emotion INCREASES the deviation**|\n|**⚠️ With a hemiparesis**|on the **SAME side as the facial weakness**|on the **OPPOSITE side — CROSSED HEMIPLEGIA**|\n\n- **⚠️ The single discriminator:** **does the lesion take the forehead?** Upper face spared = UMN, because the upper face has **bilateral** cortical supply. It is not about speech, and \"affects the upper face bilaterally\" is not a lesion pattern.\n- **⚠️ Read the two hemiparesis rows together** — they are the same anatomy from two sides. In UMNF the lesion is above the pons, so face and limbs are both contralateral to it and therefore **on the same side as each other**. In LMNF the facial nucleus is at pontine level while the corticospinal tract has **not yet decussated**, so the face is ipsilateral to the lesion and the limbs contralateral: **the two are on opposite sides**.\n\n### Where the UMN lesion is\n- **Cortical:** **Jacksonian motor fits over the face** · **± aphasia**.\n- **Subcortical:** **NO seizures, NO aphasia** · **monoparesis**.\n- **Capsular:** **complete hemiplegia on the same side**.\n\n### Where the LMN lesion is — five levels, and each has its own company\n\n|**Level**|**Example**|**What comes with it**|\n|---|---|---|\n|**1 PONTINE**|vascular|**UMN hemiplegia CONTRALATERAL to the face — crossed hemiplegia** · other cranial nerves, **especially the 6th**|\n|**2 CEREBELLOPONTINE ANGLE**|tumour|**7th + 8th → PERCEPTIVE DEAFNESS**|\n|**3 IN THE FACIAL CANAL**|cholesteatoma, acoustic neuroma, otitis media|**loss of LACRIMATION (dry eye)** · **lost taste, anterior 2/3** *if the lesion is before the chorda joins* · **HYPERACUSIS** — intolerance of loud sound|\n|**4 AT THE STYLOMASTOID**|**Bell's palsy**, mastoiditis|**facial LMN ONLY** · **retro-auricular pain**|\n|**5 OUTSIDE THE STYLOMASTOID**|parotid tumour or surgery, trauma|**PARTIAL** LMN affection — **eyes only, or mouth only**|\n\n- **⚠️ The list reads as a ladder:** the further from the brainstem, the fewer companions, until level 5 does not even take the whole half-face.\n- *The stroke chapter carries the same UMN/LMN discrimination in `str-4`, written there for a reader arriving from a hemiplegia. It is written here as well because this is the facial nerve's chapter and four questions filed here turn on it; `str-4` marks the table as supplied, which was honest before this deck was read — it is the deck's, and `cn-12` records the correction.*\n\nSrc: L8 sl. UMNF · LMNF · UMN facial palsy · LMN facial",
        "qs": [
          "npqb-nr-62",
          "npqb-nr-64",
          "npqb-nr-87"
        ]
      },
      {
        "id": "cn-10",
        "w": "must",
        "h": "Bell's palsy — nine questions, and the eye decides them",
        "body": "- **What it is:** **ACUTE ONSET, UNILATERAL** LMN facial palsy, at the **stylomastoid** level.\n- **⚠️ Aetiology: HERPES SIMPLEX VIRUS-1.** Not VZV, not EBV, not HIV.\n- **Recurrence is uncommon.**\n\n### The presenting numbers\n\n|**Finding**|**Proportion**|\n|---|---|\n|**preceding VIRAL ILLNESS**|**~60 %**|\n|**numbness or pain in front of or behind the ear**|**~50 %**|\n|**impaired taste**|**25 %**|\n|**loss or marked decrease of ipsilateral TEARING**|**10 %**|\n\n### Signs\n- **Impaired VOLUNTARY movement** of the facial **and PLATYSMA** muscles.\n- **Face pulled to the OPPOSITE side on smiling**; **saliva and food collect on the paralysed side**.\n- **⚠️ BELL'S PHENOMENON:** on trying to close the eye, **the eyeball turns UPWARD AND INWARD**.\n- **What must be absent:** any evidence of **CNS**, **ear** or **posterior fossa** disease — that is what makes it Bell's rather than another level from `cn-9`.\n\n### History to take\n- **Recent head injury** · **recent viral infection** · **pain behind the ear** · **recent immunisation, e.g. influenza**.\n- **Change in auditory acuity** · **vertigo** · **change in taste**.\n- **Past and present malignancy** · **HIV**.\n\n### Differential\n- **Other causes of LMN facial palsy** (`cn-9`) · **infections of the middle ear or mastoid, cholesteatoma** · **DIABETES MELLITUS**.\n- **⚠️ Second commonest:** diabetes, after Bell's palsy itself *(the ranking is not taken from the course material; the deck lists diabetes and ranks nothing)*. A parotid stab wound, otitis media and a cerebellopontine angle tumour all cause one and none is second.\n\n### Workup\n- **Electrophysiology:** **nerve conduction, ELECTROMYOGRAM, blink reflex** — the deck says **to assess PROGNOSIS and recovery**. *The bank keys electromyography as most useful for the DIAGNOSIS; both are recorded, key as printed. Against the options offered it is the only test that reads the facial nerve at all — MRI, lumbar puncture and blood culture all look elsewhere.*\n- **Imaging:** **CT and MRI**, to detect a lesion causing an LMN facial palsy.\n- **Laboratory:** **CBC** · **fasting and postprandial blood sugar** · **ESR**.\n\n### ⚠️ Management — eye care is the PRIMARY concern\n\n|**Measure**|**Detail**|\n|---|---|\n|**EYE CARE — the primary concern**|**lubricating drops by day**, an **ointment-like petrolatum at night**|\n|**PREDNISONE**|**only within the first 5 DAYS** · **1 mg/kg/day, up to 60 mg** · **for 7 days, then gradual withdrawal**|\n|**ACYCLOVIR**|**may be of value in the EARLY stages**|\n|**Physiotherapy**|**very important**, to keep the facial muscles working|\n\n- **⚠️ The vignette answer:** steroids **AND** an antiviral, started early — not immunoglobulin, not plasmapheresis, not an antibiotic.\n\n### Prognosis and complications\n- **Recovery:** **full in most patients**, usually over **4 to 6 months**.\n- **⚠️ EARLY complications are the EYE:** conjunctivitis, keratitis and **EXPOSURE CORNEAL ULCER — the most dangerous complication**. It is why eye care leads the treatment.\n- **⚠️ LATE, and commonest: CONTRACTURE** — may need plastic surgical correction if severe.\n- **CROCODILE (gustatory) TEARING:** **aberrant regeneration** of secretory fibres to the **lacrimal** gland, so the patient **tears while eating**.\n- **Facial myokymia or hemifacial spasm.**\n\nSrc: L8 sl. Bell's palsy · Etiology · Differential diagnosis · Diagnostic workup · Prognosis and complications · Management. The diabetes ranking is supplied and tagged",
        "qs": [
          "npqb-nr-68",
          "npqb-nr-69",
          "npqb-nr-80",
          "npqb-nr-81",
          "npqb-nr-82",
          "npqb-nr-83",
          "npqb-nr-84",
          "npqb-nr-85",
          "npqb-nr-86"
        ]
      },
      {
        "id": "cn-11",
        "w": "must",
        "h": "VIII to XII — the rest of the screen",
        "body": "### VIII vestibulocochlear\n- **Two nerves in one:** **cochlear — HEARING**; **vestibular — BALANCE**.\n- **Gross screen:** hands at arm's length by each ear; **rub the fingers of one hand noisily**, the other **silently**; ask which side; **repeat louder**.\n- **WEBER — lateralisation:** **512 or 1024 Hz** fork (**256 if deaf**) on the **top of the head or forehead**; *\"where do you hear it?\"* — **normal reply is MIDLINE**.\n- **RINNE — air against bone:** fork **on the mastoid** until the sound stops, then **move it to the ear**. **Normal: AIR conduction better than BONE.**\n- *The conductive-versus-sensorineural interpretation of the pair is ENT's `ent-hearing`, which carries it in full.*\n\n### IX glossopharyngeal\n- **Exits** the sides of the **UPPER MEDULLA**, just rostral to the vagus.\n- **Test:** **general sensation AND TASTE on the POSTERIOR THIRD** of the tongue.\n- **⚠️ Gag reflex — SENSORY IX, MOTOR X.** Stimulate the back of the throat on each side; it is normal to gag each time. **It tests both nerves, not one.**\n\n### X vagus\n- **Course:** leaves the medulla between the **olivary nucleus** and the **inferior cerebellar peduncle**, through the **jugular foramen**, into the **carotid sheath** between the internal carotid artery and the internal jugular vein, then to neck, chest and abdomen.\n- **⚠️ Range:** parasympathetic motor to **all the organs EXCEPT the suprarenal glands**, from the neck down to **the second segment of the transverse colon**.\n- **Test:** **voice — hoarse or nasal** · **swallow and cough** (**BOVINE COUGH = recurrent laryngeal**) · palate for **uvular displacement** — **a unilateral lesion draws the uvula to the NORMAL side** · *\"Ah\"* for **symmetrical soft palate movement** · the gag reflex.\n\n### XI spinal accessory\n- **Supplies** the **STERNOCLEIDOMASTOID** and the **TRAPEZIUS**.\n- **Test:** from behind, look for **trapezius atrophy or asymmetry**; **shrug against resistance** (trapezius); **turn the head against resistance** and **palpate the SCM on the OPPOSITE side**.\n\n### XII hypoglossal\n- **Supplies** all the tongue muscles **except palatoglossus**, which is the vagus's.\n- **Test:** ask the patient to **poke the tongue out**; test strength by having them **push the inside of the cheek** against your finger.\n- **⚠️ THE DIRECTION RULE: a unilateral lesion makes the tongue DEVIATE TOWARD THE AFFECTED SIDE** — the apex points to the impaired side.\n- **Also look for** **fasciculation and wasting** — signs of **lower motor neurone disease** — and for **tremor or chorea**.\n- **⚠️ Read the deviation with the company:** slurred articulation and **ATROPHY** with the tongue deviating to the right is a **RIGHT hypoglossal LMN lesion**, not a left one and not a cortical articulation problem.\n\nSrc: L8 sl. Vestibulocochlear nerve (VIII) · Test · Glossopharyngeal nerve IX · Vagus nerve X · Spinal accessory nerve XI · Hypoglossal nerve XII · Tongue examination",
        "qs": [
          "npqb-nr-16"
        ]
      },
      {
        "id": "cn-12",
        "w": "know",
        "h": "What the lecturer put on his own slides, and what is deferred",
        "body": "### The five questions printed in the deck itself\nThe lecturer put five MCQs on his own slides. They are his emphasis, so they are recorded — the answers live in the bank, not here.\n- A **64-year-old** with **left-sided electric facial pain, seconds long, 10-30 attacks a day** — the diagnosis, against atypical migraine, temporal arteritis and **glossopharyngeal neuralgia**.\n- The **most dangerous complication of Bell's palsy**, against delayed recovery, faulty reinnervation and residual weakness.\n- The **corneal reflex in a LEFT UMN facial palsy**, touching the **right** cornea — which eyes blink.\n- **The OCULOMOTOR nerve —** which muscle it does **NOT** supply.\n- Which nerve is hit by **papilloedema, headache and obstructive hydrocephalus**.\n\n*Four of the five map onto `cn-5`, `cn-6`, `cn-7` and `cn-10`. **Glossopharyngeal neuralgia is named only as a distractor** and is taught nowhere in the deck.*\n\n### Register (§14.5) — owed elsewhere\n\n|**Fact**|**Owed to**|**Why**|\n|---|---|---|\n|**The UMN/LMN framework in general** — limbs, tone, reflexes, plantars, wasting|**`nr-lmn`**|only the **FACIAL** application is written here, in `cn-9`, because four questions filed here turn on it. The framework itself belongs to the chapter that teaches it|\n|**Weber and Rinne interpreted** — conductive against sensorineural|**ENT `ent-hearing`**|cross-MODULE, so it is an aside rather than a row this module can tick; **ENT already carries it**|\n\n### ⚠️ A correction owed to `nr-stroke`\n**What `str-4` says:** it prints the UMN/LMN facial table marked *\"not taken from the course material\"* and defers the framework to `nr-lmn`.\n\n- **What L8 actually prints:** the facial half **in full**, and better — both blocks.\n- **Also there:** the emotional-expression sign **in both directions**.\n- **Also there:** the hemiparesis rule both ways, with the term **crossed hemiplegia**.\n- **Also there:** the **five-level** localisation of the LMN lesion.\n\n**⚠️ The tag was honest when written** — L8 had not been read — and is now over-cautious. **The rule it re-proves: read the slide before declaring a gap.**\n\n### What this deck does not contain\n- **23 of its 92 pages carry no text at all** — genuine picture slides, two template rails plus one content image each, verified with `pdffonts` and `pdfimages`. **Every fact the 34 questions turn on was found in the extracted text first**, so they were not rendered.\n- **No nucleus locations** except the facial nucleus and the trigeminal motor nucleus, both in the pons.\n- **No ranking anywhere** — anosmia's causes, Bell's differential and the VI palsy causes are all lists, and three questions ask which is commonest.\n- **No glossopharyngeal neuralgia**, and **no III or IV palsy** as clinical entities — only what the nerves supply.\n\nSrc: L8, read end to end; the page audit is a `pdftotext`/`pdffonts`/`pdfimages` sweep of all 92 pages",
        "qs": []
      }
    ]
  }
};
