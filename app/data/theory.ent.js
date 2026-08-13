/* ENT theory, keyed by chapter id.
   Written in Phase 4 from lecture slides + questions + book. See CLAUDE.md. */
var T_ENT = {
  "ent-csom": {
    "intro": "This chapter is examined by **discrimination, not by recall** — and almost every question is one of five shapes.\n\n- **Safe or unsafe?** The single most repeated discrimination in the whole ENT paper. You are given a discharge (smell, amount, pattern), a perforation (central, marginal, attic) or a photograph, and asked to name the type, the perforation, the X-ray, the organism or the treatment. Get the *four adjectives of the discharge* and the *annulus* and roughly a third of this chapter answers itself.\n- **\"All of the following EXCEPT.\"** One line in seven across the bank is a negative stem, and this chapter is full of them: all true about unsafe CSOM except, about tubotympanic CSOM except, about acute mastoiditis except, about Gradenigo except. **You must know why every wrong option is wrong**, not just which one is right.\n- **Name the complication from one clinical sign.** Rigors -> lateral sinus. Neck rigidity -> meningitis. Vomiting and drowsiness -> raised pressure, brain abscess. Diplopia -> petrous apex. Vertigo -> labyrinth. The bank prints near-identical vignettes that differ by **one word**, deliberately (endpoint Cases 17 and 23 differ only in *vomiting* versus *neck rigidity*).\n- **Gradenigo, asked from every angle.** Eighteen of the questions here are about petrositis: which complication gives the triad, which nerve gives the diplopia, which muscle, which nerve gives the pain, what the triad is, where the infection spread, what causes the discharge. It is the most over-tested topic in the chapter and the examiner’s cram sheet lists it three times.\n- **Priority and sequence.** Which aim of surgery comes first; which ear is operated first; is treatment medical or surgical. The answer is always the same ranking: **safe, then dry, then hearing**.\n\n**Two traps the bank sets repeatedly.** First, a Grade Gain option list that ends in *\"all of the above\"* or *\"b & c\"* — reading only as far as option b loses the mark. Second, an audiogram or a \"most serious\" option planted to pull you away from the danger: the deafer ear is not the one you operate first, and cholesteatoma is not the cause of pain.\n\n**One flat statement to carry into the exam:** *chronic suppurative otitis media is not a painful condition.* Pain in a chronically discharging ear is a complication until proved otherwise.",
    "sections": [
      {
        "id": "csom-1",
        "w": "must",
        "h": "What CSOM is, and the two types you must separate",
        "body": "**Definition, verbatim from the lecture** (*L16) Chronic otitis media.pdf*):\n\n> Chronic suppurative otitis media is inflammatory change of the **mucoperiosteal lining of the middle ear cleft**, of **insidious onset and protracted course**, characterised by the development of **irreversible tissue pathology**.\n\nThree phrases in that sentence are examinable in their own right. **Middle ear cleft** means the whole air-containing space — Eustachian tube, tympanic cavity, aditus, antrum and mastoid air cells — not just the space behind the drum; that is why mastoid disease is part of the same illness rather than a separate one. **Insidious and protracted** is what separates it from acute otitis media, which is a short, painful, febrile episode. **Irreversible tissue pathology** is why it does not simply resolve: a perforation that will not close, a cholesteatoma that keeps growing, ossicles that have been eaten away.\n\n**The lecture then splits it in two, and this division is the spine of the entire chapter:**\n\n- **Safe type — tubo-tympanic.** The disease is a **mucositis**: inflammation of living middle ear mucosa, reached through the Eustachian tube. No bone is destroyed.\n- **Unsafe type — attico-antral.** The disease is an **osteitis**: bone is being dissolved, by a **cholesteatoma**. This is the type that produces the complications.\n\n**\"Safe\" is a technical word, not a reassurance.** It means the annulus of the drum is intact, so squamous epithelium cannot enter the middle ear, so cholesteatoma cannot form, so bone is not eroded, so the complications that follow bone erosion cannot happen by that route. It does **not** mean the ear needs no treatment: untreated safe disease still gives a permanently discharging ear and a conductive hearing loss.\n\n**Learn the table below as a pair of columns, not as fourteen separate facts.** Every line on the left follows from *mucositis* and every line on the right follows from *osteitis*, which is exactly how *L17,18) Otorrhea and otalgia.pdf* labels its own two columns. Roughly a third of this chapter’s questions are answered by reading one cell out of it.",
        "table": {
          "head": [
            "",
            "SAFE — tubo-tympanic (mucositis)",
            "UNSAFE — attico-antral (osteitis)"
          ],
          "rows": [
            [
              "Pathology",
              "Inflammation of **living mucosa** of the middle ear cleft",
              "**Osteitis** — bone eroded by **cholesteatoma**"
            ],
            [
              "Otorrhoea — character",
              "**Mucopurulent**",
              "**Purulent** (pure pus)"
            ],
            [
              "Otorrhoea — amount",
              "**Profuse**",
              "**Scanty**"
            ],
            [
              "Otorrhoea — pattern",
              "**Intermittent** — flares with a cold or after water",
              "**Continuous**"
            ],
            [
              "Otorrhoea — smell",
              "**Odourless**",
              "**Foetid**"
            ],
            [
              "Deafness",
              "Mild to moderate, **conductive**",
              "Moderate to severe, **conductive OR mixed**"
            ],
            [
              "Pain",
              "None — *CSOM is not a painful condition*",
              "None either, until a complication appears"
            ],
            [
              "Perforation",
              "**Central, in the pars tensa**",
              "**Attic or marginal**"
            ],
            [
              "Granulations",
              "**Absent**",
              "**Common** — red, fleshy, usually posterosuperior"
            ],
            [
              "Cholesteatoma",
              "**Absent**",
              "**Present** — attic or posterosuperior"
            ],
            [
              "Mastoid X-ray",
              "**Cellular** mastoid",
              "**Acellular** mastoid **with a filling defect** (cholesteatoma shadow)"
            ],
            [
              "Culture and sensitivity",
              "The lecture states none",
              "**Gram-negative** organisms"
            ],
            [
              "Complications",
              "Rare — hence *safe*",
              "This is the type that produces them — hence *unsafe*"
            ],
            [
              "Treatment",
              "Medical; cautery of margins; **myringoplasty**; tympanoplasty",
              "**ALWAYS SURGICAL** — tympano-mastoidectomy"
            ]
          ]
        },
        "qs": [
          "entep-ear-199",
          "entep-ear-232",
          "entqb-ear4-110",
          "entep-case-12",
          "entep-case-15"
        ]
      },
      {
        "id": "csom-2",
        "w": "must",
        "h": "Reading the discharge — the four adjectives, and why mucus matters",
        "body": "**The single most useful sentence in this chapter comes from *L17,18) Otorrhea and otalgia.pdf*:**\n\n> There are **no mucous glands in the external auditory canal**. Mucus always comes from the middle ear.\n\nFrom that one anatomical fact, everything follows:\n\n- A discharge containing **mucus** proves two things at once — the **site** is the middle ear, and the **mucosa is alive and secreting**. So a mucoid or mucopurulent discharge means either **safe tubo-tympanic CSOM** or **acute otitis media after the drum has perforated**. It can never be otitis externa.\n- A discharge that is **pure pus** has no mucosal contribution. Either the mucosa has been **destroyed** (acute necrotising otitis media, where the promontory is laid bare), or the source is not mucosa at all but a **keratin sac and dead bone** (cholesteatoma), or the disease is in the **canal** (otitis externa).\n\n**Now add the other three adjectives, and each one is a switch:**\n\n- **Smell.** Fetor comes from **osteitis** — anaerobes growing on dead bone. It is the single most useful finding in a discharging ear, because it means bone is being destroyed and therefore that the ear is unsafe. *An odourless discharge is the most reassuring negative in otology.*\n- **Amount.** A whole middle ear cleft of secreting mucosa makes a lot of discharge, so safe disease is **profuse**. A small pocket of keratin and granulation makes very little, so unsafe disease is **scanty**.\n- **Pattern.** Safe disease is reached through the **Eustachian tube**, so it flares with every upper respiratory infection or after water enters, and dries up in between — **intermittent**. Unsafe disease is generated by a cholesteatoma that never stops growing, so it is **continuous**.\n\n**The examiner uses those four adjectives as a complete question.** *\"Profuse, mucopurulent, odourless, intermittent\"* is a full diagnosis of safe tubo-tympanic disease before you have looked at the ear; *\"scanty, purulent, foetid, continuous\"* is a full diagnosis of cholesteatoma. Several questions in this chapter give nothing else.\n\n**The wider classification of otorrhoea** in the same lecture is worth having whole, because the bank builds option lists out of it — *watery, mucoid, purulent, bloody, and combinations*. A **clear watery** discharge in a head-injured patient is **CSF**, confirmed by the **halo sign**, **beta-2 transferrin** or **beta trace protein**; **bloody** otorrhoea is **trauma or tumour** (skull base fracture, minor canal trauma, glomus tumour, carcinoma of the canal). Those two are covered properly in the Otorrhoea chapter, but they appear here as distractors.",
        "table": {
          "head": [
            "Type of discharge",
            "Causes",
            "The point"
          ],
          "rows": [
            [
              "**Watery / clear**",
              "CSF otorrhoea — skull base fracture; after acoustic tumour removal",
              "Confirm with the **halo sign**, **beta-2 transferrin**, **beta trace protein**"
            ],
            [
              "**Mucoid / mucopurulent**",
              "Safe (tubo-tympanic) CSOM; acute otitis media **after** perforation",
              "Mucus proves a **middle ear** source with **living mucosa** — the canal has no mucous glands"
            ],
            [
              "**Pure purulent**",
              "Unsafe (attico-antral) CSOM with cholesteatoma; acute **necrotising** otitis media; otitis externa",
              "No mucus = mucosa destroyed, or the source is a keratin sac and dead bone, or the disease is in the canal"
            ],
            [
              "**Bloody**",
              "Trauma — skull base fracture, minor canal trauma. Tumour — **glomus**, carcinoma of the EAC",
              "Blood from an ear is trauma or tumour until proved otherwise"
            ],
            [
              "**No discharge at all**",
              "Otitis media with effusion; Eustachian tube dysfunction",
              "The drum is **intact** — fluid never reaches the canal. The easiest distractor to eliminate"
            ]
          ]
        },
        "qs": [
          "entep-ear-72",
          "entep-ear-45",
          "entep-ear-157",
          "entep-enr-10",
          "entqb-ear4-107",
          "entqb-ear4-109",
          "entqb-ear4-118",
          "entqb-ear6-168",
          "entqb-ear6-169"
        ]
      },
      {
        "id": "csom-3",
        "w": "must",
        "h": "The perforation — central, marginal, attic, and why the annulus decides everything",
        "body": "**\"Central\" is a statement about the ANNULUS, not about the middle of the drum.** This is the highest-yield single idea in the chapter, and it is where most marks are lost.\n\n- A perforation is **central** when a rim of tympanic membrane survives **all the way round** it, so the fibrous **annulus is intact**. A central perforation can be very large — the bank prints one described as a *\"large kidney-shaped perforation\"* with a 45 dB gap — and still be central, and still be safe.\n- A perforation is **marginal** when the defect **reaches and destroys part of the annulus**. Its usual site is **posterosuperior**.\n- An **attic** perforation is one in the **pars flaccida**, the slack triangle above the lateral process of the malleus.\n\n**Why the annulus is the whole story.** *L22) Anatomy of  Ear Undergraduate.pdf* gives the layers: the **pars tensa** is *skin + fibrous + mucous membrane*, and the **pars flaccida** is *skin + mucous membrane* only — it lacks the middle fibrous layer, which is why it is flaccid. Where the annular rim is intact, canal skin has no route inwards and the disease stays mucosal. Where the annulus is breached, or where the flaccid attic retracts, **squamous epithelium migrates into the middle ear** and becomes a cholesteatoma. **Annulus intact = safe. Annulus breached = unsafe.** That is the whole safe/unsafe distinction in one sentence.\n\n**The shape of the hole tells you the mechanism** — a smaller point but the bank asks it. An **infective** perforation is *melted* out by inflammation and is **round, oval or kidney-shaped with a smooth edge**. A **traumatic** perforation is *torn* and is **triangular or slit-like with ragged edges**. A **total or subtotal** perforation, the whole pars tensa gone, is not ordinary chronic disease at all — it follows **acute necrotising otitis media**, in which streptococcal toxins thrombose the drum’s vessels and the central watershed sloughs.\n\n**When the two signs disagree, believe the smell and look again.** A \"central\" perforation with a foul discharge is a contradiction; if the ear stinks, there is a breach of the annulus somewhere — look in the **attic** and the **posterosuperior quadrant**, because that is where the cholesteatoma will be.",
        "table": {
          "head": [
            "Perforation",
            "Where",
            "What it means"
          ],
          "rows": [
            [
              "**Central**",
              "Pars tensa, rim of drum all round — **annulus intact**",
              "**Safe**, tubo-tympanic. Skin cannot migrate in"
            ],
            [
              "**Marginal**",
              "Reaches and destroys part of the annulus, usually **posterosuperior**",
              "**Unsafe**. The classic site for cholesteatoma"
            ],
            [
              "**Attic**",
              "Pars flaccida, above the lateral process of the malleus",
              "**Unsafe**. Hallmark of **primary acquired** cholesteatoma"
            ],
            [
              "**Total / subtotal**",
              "The whole pars tensa gone",
              "Not ordinary chronic disease — follows **acute necrotising otitis media**"
            ],
            [
              "Round, oval or **kidney-shaped**, smooth edge",
              "Pars tensa",
              "**Infective** perforation — melted out by inflammation"
            ],
            [
              "**Triangular or slit-like**, ragged edge",
              "Anywhere",
              "**Traumatic** perforation — torn"
            ]
          ]
        },
        "qs": [
          "entep-ear-6",
          "entep-ear-71",
          "entep-ear-92",
          "entep-ear-200",
          "entqb-ear4-91",
          "entqb-ear4-100"
        ]
      },
      {
        "id": "csom-4",
        "w": "must",
        "h": "Safe (tubo-tympanic) CSOM in full",
        "body": "**Symptoms** — *L16) Chronic otitis media.pdf*, quoted:\n\n> **Otorrhoea:** muco-purulent, odourless, profuse and intermittent.\n> **Deafness:** mild to moderate; **conductive** hearing loss.\n\n**Otoscopy:** a **central perforation in the pars tensa**; **cholesteatoma and granulations absent**.\n\n**Investigations:** the mastoid X-ray shows a **cellular mastoid**. That finding is worth understanding rather than memorising. Mastoid pneumatisation develops through childhood and is **arrested by early, repeated middle ear inflammation** — so a well-pneumatised (cellular) mastoid is evidence that the ear was healthy while the mastoid was forming. An acellular, sclerotic mastoid means long-standing disease from early life, and is the unsafe pattern.\n\n**A note on organisms.** The lecture prints *Gram-negative organisms* only on the **unsafe** side of the page. That is what makes *\"caused by Gram-negative bacteria\"* the false statement about tubo-tympanic disease. In real life *Pseudomonas* and other Gram-negatives are cultured from safe discharging ears too, especially after water exposure — the **examinable** association is with unsafe disease, because that is where the material puts it and because anaerobes and Gram-negatives in a keratin sac are what produce the fetor *(this qualification is not taken from the course material)*.\n\n**Hearing.** A negative Rinne (bone conduction better than air) with **Weber lateralising to the affected ear** localises a conductive loss to that side — which is how the bank asks you to name which ear, before you think about the disease at all.\n\n**Natural history if untreated.** Repeated attacks of mucopurulent discharge, and a conductive loss proportional to the size of the perforation and any ossicular erosion. **Not** progressive total deafness, **not** facial palsy, **not** intracranial spread, **not** septicaemia — all of those belong to the unsafe type. This is exactly the question the bank asks about a five-year history with a central kidney-shaped perforation.\n\n**One printed key in this chapter is defective and you should know it.** Model Final Exam 6 asks *\"all may be seen in the tubotympanic type EXCEPT\"* and keys **\"profuse odourless otorrhoea\"** — which is the lecture’s own description of that type. The true exception in that option list is **\"high incidence of complications\"**, and the same bank keys it correctly elsewhere. **Answer \"high incidence of complications\" if you meet a full option set;** the entry records the printed key as the bank prints it, per the project’s standing rule.",
        "flow": {
          "title": "Treatment of safe (tubo-tympanic) CSOM",
          "steps": [
            {
              "k": "step",
              "t": "Aural toilet and strict water precautions",
              "n": "Keep the ear dry. The discharge flares after water entry or a cold"
            },
            {
              "k": "step",
              "t": "Medical treatment: antibiotherapy according to culture and sensitivity",
              "n": "The lecture names C&S explicitly. Topical drops with systemic cover for an acute flare"
            },
            {
              "k": "step",
              "t": "Treat the source in the nose and nasopharynx",
              "n": "Safe disease is reached through the Eustachian tube, so every cold reseeds the middle ear (not taken from the course material)"
            },
            {
              "k": "step",
              "t": "Chemical cautery of the perforation margins",
              "n": "For a small dry perforation, to encourage the edges to heal"
            },
            {
              "k": "decision",
              "t": "Ear dry — are the ossicles intact?",
              "yes": "Myringoplasty: graft the perforation, usually with tragal perichondrium",
              "no": "Tympanoplasty: myringoplasty PLUS ossiculoplasty, done if the ossicles are damaged"
            },
            {
              "k": "alert",
              "t": "Safe does NOT mean no treatment needed",
              "n": "Untreated, safe disease still gives a permanently discharging ear and a conductive hearing loss. What it does not do is erode bone"
            }
          ]
        },
        "qs": [
          "entep-ear-59",
          "entep-ear-205",
          "entep-ear-214",
          "entep-ear-248",
          "entqb-ear4-111",
          "entep-mfe6-1"
        ]
      },
      {
        "id": "csom-5",
        "w": "must",
        "h": "Cholesteatoma — what it is, and the four things it is not",
        "body": "**The definition, verbatim, and worth learning word for word** (*L16) Chronic otitis media.pdf*):\n\n> Cholesteatoma is a **destructive and expanding keratinizing stratified squamous epithelium** (containing **cholesterol crystals** and **proteolytic enzymes**), in the **middle ear and/or mastoid process**.\n\nThe lecture summarises the pathology in four words — **\"skin in the middle ear\"** — and illustrates it as **a sac with a narrow neck, lined by skin**. That picture explains the whole disease. Skin sheds keratin; a sac with a narrow neck cannot clear what it sheds; the trapped keratin accumulates, the sac enlarges, and the **proteolytic enzymes** dissolve whatever bone lies in the way.\n\n**Four errors the bank plants, each instructive:**\n\n- **\"It is a benign tumour of the middle ear.\"** It is **not a neoplasm at all** — there is no clonal proliferation of abnormal cells. It behaves like a tumour (it expands, destroys and recurs if incompletely removed) but it is **normal skin in an abnormal place**. The name is doubly misleading: it is not a *-oma*, and cholesterol crystals are an incidental content rather than its defining feature.\n- **\"It may metastasise\"** / **\"it is malignant.\"** It cannot. Its danger is entirely **local**, and entirely mechanical-enzymatic.\n- **\"It can be left untreated\"** or **\"it is treated medically.\"** No drug removes misplaced keratinising epithelium, and nothing arrests it. Antibiotics may dry the discharge temporarily and thereby **disguise** the problem, which is worse than doing nothing. The lecture’s treatment line for this type is three words: **always surgical**.\n- **\"Congenital cholesteatoma is an autosomal inherited trait.\"** *Congenital* here means **present from birth**, not **inherited**. There is no Mendelian pattern.\n\n**What makes it dangerous is that it is silent.** Cholesteatoma is painless. It erodes bone slowly and without symptoms, so the ear that most urgently needs surgery is often the one that troubles the patient least — until it has destroyed the ossicles, the labyrinth, the facial canal, the tegmen or the sinus plate.\n\n**And it defines the unsafe type.** *\"Cholesteatoma is most commonly associated with…\"* is answered **unsafe (attico-antral) CSOM** every time. Marginal or attic perforation, bone erosion, and the risk of intracranial complications are the same fact described from four directions.",
        "table": {
          "head": [
            "Statement about cholesteatoma",
            "True?",
            "Why"
          ],
          "rows": [
            [
              "It consists of **keratinising stratified squamous epithelium**",
              "**True**",
              "The lecture’s own definition — skin in the middle ear"
            ],
            [
              "It contains **cholesterol crystals and proteolytic enzymes**",
              "**True**",
              "The enzymes are what dissolve bone"
            ],
            [
              "It may be complicated by an **extradural abscess**",
              "**True**",
              "It erodes the **tegmen tympani**; pus collects between bone and dura"
            ],
            [
              "It is a **benign tumour** of the middle ear",
              "**False**",
              "Not a neoplasm at all — normal skin in an abnormal place"
            ],
            [
              "It is **malignant** / may **metastasise**",
              "**False**",
              "Its danger is purely local"
            ],
            [
              "It may be **left untreated**",
              "**False**",
              "Erosion is what produces facial palsy, fistula, meningitis, brain abscess"
            ],
            [
              "It is **treated medically**",
              "**False**",
              "Treatment is **always surgical**. Antibiotics only mask it"
            ],
            [
              "**Congenital** cholesteatoma is an **inherited** trait",
              "**False**",
              "Congenital = **ectodermal cell rests**, present at birth, not inherited"
            ],
            [
              "**Primary acquired** cholesteatoma sits in the **hypotympanum**",
              "**False**",
              "It sits in the **attic (epitympanum)** — it is an attic retraction"
            ]
          ]
        },
        "qs": [
          "entep-ear-138",
          "entqb-ear4-119",
          "entep-mfe5-44"
        ]
      },
      {
        "id": "csom-6",
        "w": "must",
        "h": "How can the skin reach the middle ear? — the classification of cholesteatoma",
        "body": "**The lecture poses this as a question and answers it in four lines**, and the bank turns those four lines straight into a four-option list. Learn the categories with their mechanisms attached, because every distractor in this group is a *real* category under the *wrong* name.\n\n**Congenital** — *ectodermal cell rests in the middle ear.* Squamous epithelium left behind during embryological development. It presents as a **white pearl behind an intact drum** in a child with **no history of ear infection and no perforation**. That combination — white mass, intact drum, otherwise healthy ear — is the exam’s signature for it, and it is why the differential from a middle ear effusion (amber or dull, not pearly white) and from a glomus tumour (red, pulsatile, behind the drum) matters.\n\n**Acquired, primary** — *attic retraction cholesteatoma.* **\"Primary\" means no perforation came first.** The pars flaccida lacks the fibrous middle layer, so under chronic **negative middle ear pressure** it does not tear — it **retracts**, forming a pocket in the attic. A pocket with a narrow neck cannot shed its own keratin; the keratin accumulates; the pocket becomes a sac. This is the commonest cholesteatoma and the one most often missed, because the otoscopy is a **crusted or retracted attic with a normal-looking pars tensa** rather than a frank hole.\n\n**Acquired, secondary — migrational theory.** Canal epithelium **migrates inwards** through an existing **marginal** perforation. The epithelial route already existed; the disease simply used it.\n\n**Acquired, secondary — metaplastic theory.** Middle ear **mucosa undergoes squamous metaplasia** under chronic inflammation. No migration is needed; the lining changes in situ.\n\n**Two more mechanisms appear as distractors** and are worth naming: **implantation** of squamous epithelium after myringotomy or previous surgery (an iatrogenic secondary form), and cholesteatoma developing *in* a **traumatic** perforation *(both not taken from the course material)*.\n\n**What the classification does and does not change.** It explains the **otoscopy** — attic crust versus frank marginal perforation versus white pearl behind an intact drum — and it explains why primary disease is easy to miss. It changes **nothing** about treatment: all of them are destructive and expanding keratinising epithelium, and all of them are removed surgically.",
        "table": {
          "head": [
            "Category",
            "Mechanism (the lecture’s own words)",
            "How it presents"
          ],
          "rows": [
            [
              "**Congenital**",
              "**Ectodermal cell rests** in the middle ear",
              "A **white pearl behind an INTACT drum** in a child with no history of ear infection. Not inherited"
            ],
            [
              "**Acquired — PRIMARY**",
              "**Attic retraction cholesteatoma**",
              "A **crusted or retracted attic**; pars tensa often normal. No pre-existing perforation. Easily missed"
            ],
            [
              "**Acquired — secondary, migrational theory**",
              "Canal epithelium **migrates in through a perforation**",
              "A frank **marginal** perforation with skin creeping through it"
            ],
            [
              "**Acquired — secondary, metaplastic theory**",
              "Middle ear mucosa undergoes **squamous metaplasia**",
              "Chronic inflammation with squamous change; no migration route needed"
            ],
            [
              "*(distractor)* **Implantation**",
              "Epithelium implanted at **myringotomy** or previous surgery",
              "Iatrogenic; a secondary acquired form *(not taken from the course material)*"
            ]
          ]
        },
        "qs": [
          "entep-ear-35",
          "entep-mfe4-4",
          "entqb-ear4-114"
        ]
      },
      {
        "id": "csom-7",
        "w": "must",
        "h": "Unsafe (attico-antral) CSOM in full",
        "body": "**Symptoms** — *L16) Chronic otitis media.pdf*, quoted:\n\n> **Otorrhoea:** purulent, **foetid**, scanty and continuous.\n> **Deafness:** moderate to severe; **conductive or mixed**.\n\nAnd on the same slide, flat and unqualified: **\"ChSOM is not a painful condition.\"**\n\n**Otoscopy** — three findings, all in the same place:\n\n- **Perforation:** **attic, or marginal**.\n- **Granulations:** **common, red and fleshy, usually posterosuperior**. A granulation polyp emerging from the ear (an *aural polyp*) is this, and an aural polyp in a chronically discharging ear should be treated as cholesteatoma until proved otherwise.\n- **Cholesteatoma:** **attic or posterosuperior** — whitish, greasy keratin debris.\n\n**Investigations.** The X-ray line is the one most often asked, and it carries **two** findings that say **different** things — which is why the bank keys *\"b & c\"* and not either alone.\n\n**What is \"diagnostic\".** Read that word carefully when it appears in a stem. An **irregular, non-anatomical cavity containing bone sequestra** on imaging is diagnostic, because cholesteatoma expands by dissolving whatever bone is in its way, so the cavity it leaves **follows no normal anatomical boundary** and contains dead fragments of stranded bone. Nothing else does that. By contrast a **35 dB air-bone gap** occurs in glue ear, otosclerosis, a perforation or ossicular disease; ***Pseudomonas* and *Bacteroides*** colonise any chronically discharging ear; and an **offensive discharge** is the classic *pointer* to unsafe disease but is a symptom, not proof.\n\n**Treatment: always surgical.** The lecture gives the operation as an equation — **tympano-mastoidectomy = tympanoplasty + mastoidectomy**. Nothing less works, and each of the alternatives the bank offers actively harms: antibiotics dry the ear and hide the fetor while the sac grows; **myringoplasty grafts a lid over the disease and seals it inside**; tympanoplasty reconstructs hearing into an ear that still contains cholesteatoma.",
        "table": {
          "head": [
            "Investigation",
            "Safe (tubo-tympanic)",
            "Unsafe (attico-antral)"
          ],
          "rows": [
            [
              "**Plain mastoid X-ray**",
              "**Cellular** mastoid",
              "**Acellular (sclerotic)** mastoid **AND a filling defect** — the cholesteatoma shadow"
            ],
            [
              "What the acellular mastoid means",
              "Pneumatisation completed — the ear was healthy while the mastoid formed",
              "Pneumatisation **arrested in early childhood** by repeated inflammation. A marker of **DURATION**"
            ],
            [
              "What the filling defect means",
              "—",
              "A **rounded cavity with a sclerotic margin** where bone has been eaten. A marker of **DESTRUCTION** — the disease itself, made visible"
            ],
            [
              "**Culture and sensitivity**",
              "The lecture states none",
              "**Gram-negative organisms.** The bank’s own cram sheet names **Pseudomonas, Proteus, Klebsiella**"
            ],
            [
              "**HRCT of the temporal bone**",
              "Not required",
              "Modern practice: extent of disease, ossicles, tegmen, sinus plate, fallopian canal *(not taken from the course material)*"
            ],
            [
              "**Audiogram**",
              "Mild-moderate conductive",
              "Moderate-severe conductive; **mixed** once the labyrinth is breached"
            ],
            [
              "**\"Diagnostic\" imaging finding**",
              "—",
              "**Irregular, NON-ANATOMICAL cavity with bone sequestra**. Not the air-bone gap, not the culture, not the smell"
            ]
          ]
        },
        "qs": [
          "entep-ear-16",
          "entep-ear-144",
          "entep-ear-184",
          "entqb-ear4-112",
          "entqb-ear6-170"
        ]
      },
      {
        "id": "csom-8",
        "w": "high",
        "h": "Hearing loss in CSOM — the site decides the type",
        "body": "**One rule resolves every question in this group: external canal or middle ear -> CONDUCTIVE; cochlea, labyrinth or VIII nerve -> SENSORINEURAL.** The bank builds a whole question by attaching the *wrong* type of loss to three real mechanisms.\n\n**Why safe and unsafe differ in degree.** The lecture grades safe disease as *\"mild to moderate; conductive\"* and unsafe disease as *\"moderate to severe; **conductive or mixed**\"*. The extra severity comes from **ossicular erosion**: cholesteatoma’s proteolytic enzymes dissolve bone, and the **long process of the incus** is the thinnest and most poorly perfused ossicle, so it goes first. Losing ossicular continuity gives a **large air-bone gap**, often 40 dB or more *(the incus detail and the figure are not taken from the course material)*.\n\n**Where the word \"mixed\" comes from.** The **lateral semicircular canal** is the part of the labyrinth lying closest to the attic, and it is the classic site of a **labyrinthine fistula**. Erode it and the inner ear is opened: a **sensorineural** component is added to the existing conductive loss, and the patient gets **vertigo**, often provoked by pressing on the tragus — a positive **fistula sign** *(the fistula sign is not taken from the course material)*.\n\n**The practical reading, and it is a genuine clinical rule:** a purely conductive loss in unsafe CSOM means the disease is still in the middle ear. **The moment the loss becomes mixed, or the patient reports vertigo, the labyrinth has been breached** — and vertigo in a cholesteatoma ear is an alarm, never a symptom to reassure.\n\n**One more discrimination the bank asks in the Gradenigo group:** the hearing loss accompanying petrositis is **conductive**, from the otitis media underneath it. Students expect a sensorineural loss from something so deep, and *\"associated with conductive hearing loss\"* is keyed as the **false** statement about Gradenigo’s precisely for that reason — hearing loss is **not part of the triad at all**.",
        "table": {
          "head": [
            "Mechanism",
            "Site",
            "Type of loss"
          ],
          "rows": [
            [
              "Perforation of the tympanic membrane",
              "Tympanic membrane",
              "**Conductive**"
            ],
            [
              "Restricted movement of the drum (retraction, tympanosclerosis, adhesions)",
              "Tympanic membrane",
              "**Conductive**"
            ],
            [
              "**Erosion of the ossicles** — long process of the incus first",
              "Middle ear",
              "**Conductive**, often a 40 dB or larger air-bone gap"
            ],
            [
              "**Erosion of the lateral semicircular canal** (labyrinthine fistula)",
              "**Inner ear**",
              "**SENSORINEURAL**, added to the existing conductive loss = a **MIXED** loss"
            ],
            [
              "Suppurative labyrinthitis",
              "Inner ear",
              "**Sensorineural**, with severe vertigo"
            ],
            [
              "The otitis media underlying **petrositis**",
              "Middle ear",
              "**Conductive** — and hearing loss is **not** part of Gradenigo’s triad"
            ]
          ]
        },
        "qs": [
          "entqb-ear4-108"
        ]
      },
      {
        "id": "csom-9",
        "w": "high",
        "h": "Pain in CSOM is a red flag, not a symptom",
        "body": "**The lecture states it flatly: \"ChSOM is not a painful condition.\"** Chronic disease has a perforation, so nothing is under pressure, and pain has no mechanism.\n\n**Therefore pain in a chronically discharging ear means one of two things**, and the bank prints both:\n\n- **An acute exacerbation** — a fresh **acute otitis media superimposed on the chronic disease**. Pus builds up faster than the perforation can drain it, and the ear hurts again.\n- **A complication** — mastoiditis, petrositis, an extradural or brain abscess, lateral sinus thrombophlebitis. Here the pain is the **first warning that the disease has left the middle ear cleft**.\n\n**Why cholesteatoma is the tempting wrong answer.** It is the most *serious* item in the option list and it is the definition of unsafe disease — but **it is painless**. A keratin sac erodes bone slowly and silently. Cholesteatoma causes pain only once it has produced a complication, at which point the answer is *the complication*, not the cholesteatoma.\n\n**Nor is \"severe ear pain present in all patients\" ever true of unsafe CSOM** — that is the keyed false statement in one of the endpoint questions here.\n\n**The other causes of otalgia in a middle ear context**, from *L17,18) Otorrhea and otalgia.pdf*, are worth having beside this: **acute suppurative otitis media before the drum perforates** (pressure), **complicated CSOM, e.g. acute mastoiditis**, and **tympanic plexus neuralgia** — in which the pain is abolished by intratympanic injection of xylocaine. Impacted wax and sinus infection, both offered as distractors, are not causes of pain *in CSOM*: wax muffles and obstructs, and sinus disease refers pain to the face and forehead, not into the middle ear cleft.\n\n**The instruction to carry into clinic:** *a chronically discharging ear that starts to hurt has changed. Re-examine it for a complication rather than issuing another course of drops.*",
        "qs": [
          "entqb-ear4-106"
        ]
      },
      {
        "id": "csom-10",
        "w": "must",
        "h": "Surgery — the ranked aims, and the six operations",
        "body": "**The aims of chronic ear surgery are RANKED, and the ranking is the answer to at least four questions in this chapter: SAFE first, DRY second, HEARING last.**\n\n- **Safe** means removing the disease that can kill — cholesteatoma eroding towards the labyrinth, the facial nerve, the sigmoid sinus and the meninges. A patient can live with a discharging ear or a hearing aid; they cannot live with a brain abscess.\n- **Dry** means an ear that no longer discharges.\n- **Hearing** comes last for a practical reason as well as a moral one: **rebuilding an ossicular chain into a cavity that still contains cholesteatoma simply buries the disease under a graft.** A surgeon will sacrifice hearing to clear disease — taking down the chain to reach the attic — and will never leave disease behind to preserve hearing.\n\n*(The lecture states that treatment of unsafe disease is \"always surgical\" and gives the tympano-mastoidectomy equation, but it does not print the aims as a ranked list; the ranking itself is not taken from the course material, although the bank tests it repeatedly.)*\n\n**Applying the ranking: which ear do you operate first?** Given a right ear with an **attic perforation and offensive discharge** but only a 20 dB gap, and a left ear with a **large kidney-shaped (central) perforation** and a 45 dB gap, the instinct is to treat the deafer ear. **That is exactly backwards.** Read the two ears for **danger**, not for hearing: the right ear has cholesteatoma and is at risk of facial palsy, fistula, meningitis and abscess; the left has safe disease that is deafer only because the hole is bigger, and a large hole is not a dangerous one. **Operate the right ear first.** Both ears are not operated at the same sitting in chronic ear surgery, and \"no surgery\" ignores active cholesteatoma.\n\n**The one operative detail the bank asks by name:** **obliteration of the Eustachian tube** is part of a **radical mastoidectomy**, and of nothing else in the list. The whole middle ear is exteriorised and the tube is closed off so that nasopharyngeal secretions cannot reflux into the open cavity; the price is total loss of hearing in that ear *(the individual operations are not described on any cached slide, which states only \"always surgical\" and the tympano-mastoidectomy equation — this section is not taken from the course material except where quoted)*.",
        "table": {
          "head": [
            "Operation",
            "What is done",
            "Drum and ossicles",
            "Hearing"
          ],
          "rows": [
            [
              "**Myringoplasty**",
              "Repair of the perforation alone, usually with **tragal perichondrium**",
              "Drum repaired",
              "Improved"
            ],
            [
              "**Tympanoplasty**",
              "Myringoplasty **+ ossiculoplasty**",
              "Drum repaired, chain reconstructed",
              "Improved"
            ],
            [
              "**Cortical (simple / complete) mastoidectomy**",
              "Exenteration of the **mastoid air cells only**",
              "**Untouched**",
              "Unchanged — this is the operation for an acute mastoid abscess"
            ],
            [
              "**Bondy’s operation**",
              "The cholesteatoma sac is **exteriorised**",
              "**Completely intact**",
              "Preserved — the most conservative open procedure"
            ],
            [
              "**Modified radical mastoidectomy**",
              "Attic and antrum exteriorised into the canal",
              "**Drum remnant and ossicles preserved**",
              "Preserved"
            ],
            [
              "**Radical mastoidectomy**",
              "Whole middle ear exteriorised; drum remnant, malleus and incus removed; **EUSTACHIAN TUBE OBLITERATED**",
              "Removed",
              "**Sacrificed** — for extensive or unresectable disease"
            ],
            [
              "**Tympano-mastoidectomy**",
              "The lecture’s own equation: **tympanoplasty + mastoidectomy** — the operation for unsafe CSOM",
              "Reconstructed after clearance",
              "Secondary to clearance"
            ]
          ]
        },
        "qs": [
          "entep-ear-43",
          "entep-ear-123",
          "entep-ear-136",
          "entep-ear-187",
          "entep-ear-243",
          "entqb-ear4-92"
        ]
      },
      {
        "id": "csom-11",
        "w": "must",
        "h": "Complications — definition, predisposing factors, and the pathways in",
        "body": "**Definition** (*L16) Chronic otitis media.pdf*):\n\n> Extension of the inflammatory process **beyond the confines of the middle ear cleft**.\n> **Mostly in the course of chronic suppurative otitis media of the unsafe type with cholesteatoma.**\n\nThat second line is the reason the two types have the names they do, and it is the premise behind roughly half the questions in this chapter.\n\n**Predisposing factors — three, and the lecture lists exactly three:**\n\n- **Virulent organisms.**\n- **Low resistance of the patient** — diabetes, immunosuppression, malnutrition, extremes of age.\n- **A preformed pathway.**\n\n**Pathways of infection.** Complications occur *\"when the normal defence barriers of the middle ear are overcome\"*, and the lecture separates two mechanisms:\n\n- **The commonest way is BONE EROSION BY A CHOLESTEATOMA.** If you remember one sentence about how complications happen, this is it.\n- **Preformed pathways** — four of them, named: **congenital dehiscences** (of the fallopian canal, the tegmen or the sinus plate), **fracture lines**, the **round window membrane**, and **dehiscences due to previous surgery**.\n\n**Why the anatomy makes this inevitable.** *L22) Anatomy of  Ear Undergraduate.pdf* gives the walls of a box whose every side abuts something that must not be infected: the **superior wall is the tegmen tympani**, a paper-thin plate with the **middle cranial fossa and temporal lobe** above it; the **posterior wall** carries the **aditus ad antrum** into the mastoid and the **vertical (mastoid) part of the facial nerve** in its bony canal; the **inferior wall** is a thin bony plate over the **internal jugular vein**; the **medial wall** separates the middle ear from the **labyrinth**; and immediately behind the mastoid air cells lies the **sigmoid sinus** on its sinus plate. *L16* draws the same relations: **superior — temporal lobe; posterior — cerebellum and sigmoid sinus; inferior — jugular bulb; anterior — carotid artery; medial — inner ear and facial nerve.**\n\n**So the middle ear is a small air-filled space surrounded on every side by dura, brain, great vessels, the facial nerve and the labyrinth, separated from all of them only by bone** — and cholesteatoma is a disease whose entire mechanism is dissolving bone. That is the whole of this topic in one sentence.",
        "qs": []
      },
      {
        "id": "csom-12",
        "w": "must",
        "h": "The three-tier classification of complications",
        "body": "**The lecture sorts every complication into three tiers, and a striking number of questions are simply a test of that sorting.** The grouping is not arbitrary — **it names the anatomical barrier the infection has crossed.**\n\n- **Cranial (intratemporal)** — the infection is **still inside bone**, within the temporal bone, outside the cranial cavity.\n- **Intracranial** — the **dura has been breached**; the infection is inside the cranial cavity.\n- **Extracranial** — the infection has **escaped into the soft tissues of the neck**.\n\n**Two facts from this list that the bank asks directly:**\n\n- **Acute mastoiditis and mastoid abscess are the MOST COMMON complication of otitis media** — and they are **cranial**, not intracranial.\n- **Labyrinthitis is CRANIAL**, not intracranial. The labyrinth sits in the petrous bone alongside the middle ear; infection reaching it has not crossed the dura. This is the keyed exception in the classic *\"all of the following are intracranial complications except\"* question.\n\n**A caution about the word \"extra-cranial\", because one endpoint question uses it loosely.** That question asks which is **not** an extra-cranial complication and keys **sigmoid sinus thrombosis** — correctly, because the sinus is inside the cranial cavity — while offering facial palsy, mastoid abscess, labyrinthitis and hearing loss as the alternatives. Under the lecture’s **three-way** scheme those four are *cranial*, not *extracranial*; the question is using \"extra-cranial\" in the looser sense of **\"outside the cranial cavity\"**. Under either reading, sigmoid sinus thrombosis is the odd one out. **Read the option list to see which scheme a stem is using.**\n\n**The lecture prints \"extradural abscess\" first on the intracranial list**, and it is worth knowing that it is also the **commonest** of the intracranial complications and is often **silent**, discovered at surgery when the tegmen or posterior fossa plate is found eroded and granulations sit on exposed dura *(the commonness and silence are not taken from the course material)*.",
        "table": {
          "head": [
            "Tier",
            "Members",
            "Barrier crossed"
          ],
          "rows": [
            [
              "**CRANIAL (intratemporal)**",
              "**Acute mastoiditis and mastoid abscess — the MOST COMMON complication of all**; **petrositis**; **labyrinthitis**; **facial paralysis**",
              "Still **inside bone** — within the temporal bone"
            ],
            [
              "**INTRACRANIAL**",
              "**Extradural abscess**; **meningitis**; **subdural abscess**; **brain abscess**; **lateral (sigmoid) sinus thrombosis**",
              "**Dura breached** — inside the cranial cavity"
            ],
            [
              "**EXTRACRANIAL**",
              "**External otitis**; **retropharyngeal abscess**; **parapharyngeal abscess**; **cervical lymphadenitis** (and Bezold’s / Citelli’s abscess by the same route)",
              "Escaped into the **soft tissues of the neck**"
            ]
          ]
        },
        "qs": [
          "entep-ear-124",
          "entep-ear-228",
          "entqb-ear3-65"
        ]
      },
      {
        "id": "csom-13",
        "w": "must",
        "h": "The compass — the direction of spread decides the complication",
        "body": "**Grade Gain builds a whole run of questions on one idea: name the DIRECTION in which pus leaves the mastoid, and the complication follows automatically.** Five separate questions in this chapter are one arm of the compass each, so learning the table below answers all of them and several endpoint questions besides.\n\n**One point of confusion to fix before reading it.** The direction named is **the direction the pus travels out of the mastoid**, not the position of the structure on the drum. The mastoid antrum lies **behind** the ear canal, so pus moving **forwards (anteriorly)** out of it arrives at the **back and top** of the bony canal — the **posterosuperior** wall. That is why *\"the posterosuperior bony canal is affected by the ANTERIOR spread of mastoiditis\"* reads backwards until you fix the reference point.\n\n**The three arms with the highest yield:**\n\n- **Superior, through the tegmen tympani** -> extradural abscess, then a **temporal lobe abscess**. *\"The most common cause of a temporal lobe abscess\"* is **direct spread from a middle ear infection**, for the purely anatomical reason that nothing else sits that close. Haematogenous abscesses are multiple and sit at the grey-white junction; trauma needs a penetrating injury; a **frontal** sinus infection spreads to the **frontal** lobe.\n- **Anterior** -> the posterosuperior bony canal wall (**sagging**) and the **fallopian canal** (**facial palsy**). Sagging appears **before** any post-auricular swelling, which makes it an early sign worth hunting for on otoscopy.\n- **Medial** -> the **petrous apex** -> **petrositis** and Gradenigo’s triad.\n\n**And the trap the bank sets twice in this group:** the *lateral* spread question keys **\"c & d\"**, because **Bezold’s and Citelli’s abscesses are INFERIOR**, through the mastoid tip, while post-auricular and zygomatic abscesses are lateral. **When a Grade Gain option list ends in a combination, read to the end of it.**\n\n*(The compass taxonomy itself, Citelli’s abscess and the zygomatic abscess appear on no cached ENT slide. The lecture gives acute mastoiditis, the post-auricular abscess, sagging, petrositis and Gradenigo’s triad, but not the directional scheme — that framing is not taken from the course material, although the bank tests it heavily.)*",
        "table": {
          "head": [
            "Direction out of the mastoid",
            "Structure reached",
            "Result"
          ],
          "rows": [
            [
              "**SUPERIOR**",
              "**Tegmen tympani** -> middle cranial fossa",
              "Extradural abscess, then **TEMPORAL LOBE ABSCESS**"
            ],
            [
              "**LATERAL** (through the outer cortex)",
              "Subperiosteal plane",
              "**Post-auricular abscess** — the commonest form; auricle pushed **outwards and downwards**"
            ],
            [
              "**LATERAL, forwards**",
              "Root of the zygoma",
              "**Zygomatic abscess**"
            ],
            [
              "**INFERIOR**, through the tip",
              "Sheath of **sternomastoid**",
              "**Bezold’s abscess** — a tender swelling in the upper neck"
            ],
            [
              "**INFERIOR**, through the medial wall of the tip",
              "**Posterior belly of digastric**",
              "**Citelli’s abscess**"
            ],
            [
              "**ANTERIOR**",
              "Posterosuperior bony canal wall; **fallopian canal**",
              "**SAGGING** of the canal wall; **FACIAL PALSY**"
            ],
            [
              "**POSTERIOR**",
              "**Sinus plate** -> sigmoid sinus",
              "**Lateral (sigmoid) sinus thrombophlebitis**"
            ],
            [
              "**POSTERIOR**, into the posterior fossa",
              "Cerebellum",
              "**Cerebellar abscess**"
            ],
            [
              "**MEDIAL**",
              "**Petrous apex**",
              "**PETROSITIS** -> Gradenigo’s triad"
            ],
            [
              "**INWARDS**",
              "Lateral semicircular canal; round window",
              "**Labyrinthitis / labyrinthine fistula**"
            ]
          ]
        },
        "qs": [
          "entqb-ear1-15",
          "entqb-ear1-27",
          "entqb-ear3-60",
          "entqb-ear3-63",
          "entqb-ear3-64"
        ]
      },
      {
        "id": "csom-14",
        "w": "must",
        "h": "Acute mastoiditis — pathology and clinical picture",
        "body": "**Definition:** acute infection of the **mastoid antrum and air cells**. It is the **commonest complication of otitis media**.\n\n**Two facts about who gets it, and the bank asks them as an EXCEPT question every time.** The lecture puts them in one sentence: *\"Acute mastoiditis usually occurs in **well pneumatized mastoids** and is **more common in children**.\"*\n\n**Pneumatisation is the whole explanation for the age distribution.** The mastoid fills with air cells during childhood, so a child’s mastoid offers the largest volume of mucosa-lined cells for infection to occupy. Repeated middle ear disease in early life **arrests** pneumatisation, so the adults most likely to have chronic ear disease are precisely the ones with **sclerotic, acellular** mastoids and little for an acute mastoiditis to fill. Add the child’s **shorter, wider, more horizontal Eustachian tube** (*L22*) and a far higher rate of acute otitis media, and the pattern follows. **\"More common in adults\" is therefore the classic false statement.**\n\n**Symptoms:** **fever**, **increasing earache**, **profuse mucopurulent discharge**.\n\n**Signs, in the stage of acute mastoiditis** — quoted:\n\n- **Profuse mucopurulent discharge which may exhibit a positive RESERVOIR SIGN**, *i.e. rapid re-accumulation of discharge after cleaning of the ear.*\n- **Tenderness and redness over the mastoid.**\n- **Sagging (oedema) of the postero-superior wall of the bony external ear canal, due to periosteitis.**\n\n**The reservoir sign is worth understanding, not memorising.** Behind a small perforation lies a **large reservoir of pus under pressure** — the whole coalesced air cell system. Mop the canal dry and it refills within moments, because the volume behind the hole is far greater than the volume of the canal. **The sign measures the size of the space upstream**, which is exactly why it separates acute mastoiditis from a resolving acute otitis media (whose discharge tails off) and from otitis externa (where there is no space behind anything). Its mirror image is diagnostic too: a **scanty, foetid discharge that does not re-accumulate** is attico-antral disease with cholesteatoma.\n\n**The discharge is also described as PULSATILE**, throbbing with the arterial pulse — pus under pressure escaping through a small opening *(the term and the mechanism are not stated on the cached slide and are not taken from the course material)*.\n\n**What acute mastoiditis is NOT.** **Granulations on the floor of the external auditory meatus** belong to **malignant (necrotising) otitis externa** — granulation tissue at the bony-cartilaginous junction in an elderly, poorly controlled diabetic — and they sit in the **canal**, not in the middle ear cleft. That is the keyed exception in one of the endpoint questions here.",
        "flow": {
          "title": "How acute mastoiditis evolves",
          "steps": [
            {
              "k": "step",
              "t": "Acute suppurative otitis media",
              "n": "Usually a child with a well-pneumatised mastoid; often untreated or inadequately treated"
            },
            {
              "k": "step",
              "t": "Impeded drainage",
              "n": "Pus cannot escape through the drum or the Eustachian tube"
            },
            {
              "k": "step",
              "t": "Pus accumulates under pressure inside the mastoid air cells"
            },
            {
              "k": "step",
              "t": "Pressure necrosis of the cell walls; the cells coalesce = COALESCENT MASTOIDITIS",
              "n": "Fever, increasing earache, profuse mucopurulent discharge with a positive reservoir sign, tenderness and redness over the mastoid, sagging of the posterosuperior bony canal wall"
            },
            {
              "k": "alert",
              "t": "The outer table of the mastoid is eroded: POST-AURICULAR SUBPERIOSTEAL ABSCESS (the commonest form)",
              "n": "Fluctuant post-auricular swelling; the auricle is pushed OUTWARDS AND DOWNWARDS; the postauricular sulcus is now obliterated. This is the point at which surgery is required"
            },
            {
              "k": "step",
              "t": "The abscess ruptures through the skin: MASTOID FISTULA",
              "n": "Draining mucopus"
            }
          ]
        },
        "qs": [
          "entep-ear-81",
          "entep-ear-222",
          "entqb-ear3-66",
          "entqb-ear4-117",
          "entqb-ear4-121"
        ]
      },
      {
        "id": "csom-15",
        "w": "must",
        "h": "Mastoid abscess versus furunculosis with a post-auricular node",
        "body": "**The lecture names this pair itself: \"The main differential diagnosis is from FURUNCULOSIS OF THE EXTERNAL EAR WITH POST-AURICULAR LYMPHADENITIS.\"** Both give a tender swelling behind the ear in a patient with a sore, discharging ear, and getting it wrong sends a child either to an unnecessary operation or home with an untreated intracranial risk.\n\n**Each criterion separates them by a different route:**\n\n- **Displacement of the pinna.** Pushing the whole auricle **outwards and downwards** requires pus **under the periosteum over the mastoid**, lifting the ear off the skull. A lymph node, however tender, is a discrete mobile lump that does not displace anything. *(Grade Gain writes \"forwards and downwards\" where the lecture writes \"outwards and downwards\" — the same displacement described from a different angle.)*\n- **Mucus.** Mucus can only come from **secreting middle ear and mastoid mucosa**. Mastoiditis gives **profuse mucopurulent** discharge with a **positive reservoir sign**. A furuncle is a **staphylococcal abscess of a hair follicle in the cartilaginous outer third of the canal** — and the canal has **no mucous glands**, so its discharge is scanty, purulent and **never mucoid**.\n- **The tragus sign.** Pressing the tragus moves the **cartilaginous** outer canal. That hurts sharply when a furuncle sits in it, and does nothing in mastoiditis, where the disease is deep to the drum.\n\n**The postauricular sulcus, and a genuine subtlety the examiner’s cram sheet exposes.** The bank prints *\"postauricular redness and oedema with a **preserved** sulcus -> acute mastoiditis\"*, whereas the sign usually taught is the **obliterated** sulcus. **Both are true, at different stages, and the lecture separates them:** in *\"the stage of acute mastoiditis\"* there is tenderness and redness over the mastoid — the sulcus is still there. The sulcus is **obliterated when the SUBPERIOSTEAL ABSCESS forms**, at which point the pinna is also pushed out and down. **Read the stem for which stage it describes.**\n\n**Two extra discriminators the option lists do not carry:** the furuncle **hurts on chewing**, because the anterior canal wall abuts the temporomandibular joint; and mastoiditis shows **sagging of the posterosuperior BONY canal wall**, whereas furunculosis shows a visible swelling in the **outer, cartilaginous** meatus.\n\n**And the treatments diverge completely:** a mastoid abscess needs a **cortical mastoidectomy**; a canal furuncle needs systemic antistaphylococcal antibiotics and analgesia, and specifically **should not be incised**, because of the risk of **perichondritis**.",
        "table": {
          "head": [
            "",
            "Acute mastoiditis / mastoid abscess",
            "Furunculosis + post-auricular lymphadenitis"
          ],
          "rows": [
            [
              "Discharge",
              "**Mucopurulent, profuse**, positive **reservoir sign**",
              "Scanty, purulent, **never mucoid**"
            ],
            [
              "Pinna",
              "Pushed **outwards and downwards**",
              "Not displaced"
            ],
            [
              "Postauricular sulcus",
              "**Preserved** in the early stage; **obliterated** once the subperiosteal abscess forms",
              "Preserved — the node is a discrete mobile lump"
            ],
            [
              "Tragus",
              "**Free** — pressing it does not hurt",
              "**Tender — the TRAGUS SIGN**"
            ],
            [
              "Pain on chewing",
              "No change",
              "**Worse** — the anterior canal wall abuts the TMJ"
            ],
            [
              "Canal",
              "**Sagging** of the posterosuperior **bony** wall, deep",
              "Furuncle visible in the **cartilaginous (outer)** meatus"
            ],
            [
              "Drum",
              "Perforated and discharging",
              "Normal, if it can be seen past the furuncle"
            ],
            [
              "Treatment",
              "Antibiotics; **cortical mastoidectomy** if an abscess has formed",
              "Systemic antistaphylococcal antibiotic + analgesia; **avoid incision** — perichondritis"
            ]
          ]
        },
        "qs": [
          "entqb-ear4-93",
          "entqb-ear4-120",
          "entep-case-19"
        ]
      },
      {
        "id": "csom-16",
        "w": "must",
        "h": "Treatment of acute mastoiditis — medical first, surgery for the abscess",
        "body": "**The lecture gives the rule in two lines:**\n\n> **Acute mastoiditis -> Medical treatment: antibiotics.**\n> **Mastoid abscess -> Surgical: cortical mastoidectomy.**\n\n**So the trigger for surgery is the ABSCESS, not the mastoiditis.** Grade Gain prints the same rule as a box, and it is the source of a classic EXCEPT question: *\"the majority resolve by antibiotics\"* is **true**, and *\"the majority require surgery\"* is **false**. When an option list offers a statement and its exact opposite, the answer is one of the two.\n\n**Why medical treatment wins in most cases.** Acute mastoiditis is infection of the *mucosa lining air cells*, not yet an abscess. If the pus can drain — spontaneously through a perforation, or through a **myringotomy** if the drum is still intact — and the organism is covered by an adequate systemic antibiotic, the air cells re-aerate and the disease resolves without a chisel. **Myringotomy in an intact drum is not optional here; it is the drainage the antibiotics need in order to work.**\n\n**The three indications for surgery**, from the bank’s own printed box:\n\n- **Failure** — pain, fever or otorrhoea persisting after **2 to 4 weeks** of adequate medical management.\n- **A mastoid or neck abscess** — pus has left the air cells and is under the periosteum or in the neck.\n- **Any cranial or intracranial complication** — facial palsy, labyrinthitis, petrositis, meningitis, sinus thrombosis, brain abscess.\n\n**The operation is a complete simple (cortical) mastoidectomy** — every air cell exenterated, the **middle ear and drum left alone**. That is precisely what distinguishes it from the radical and modified radical operations of unsafe chronic disease, which take down the posterior canal wall.\n\n**Where the exam turns this into a management question.** A child with long-standing ear trouble who now has **fever and a warm, tender mastoid** needs **urgent referral to ENT**, not eardrops, not reassurance, not routine referral. Eardrops cannot reach the mastoid; oral antibiotics alone will not drain coalesced pus; and routine referral wastes exactly the interval in which the complication develops. **Note the difference in wording that the bank exploits:** *\"may require surgery in severe cases\"* is **true**, while *\"the majority require surgery\"* is **false**.",
        "flow": {
          "title": "Managing acute mastoiditis",
          "steps": [
            {
              "k": "step",
              "t": "Acute mastoiditis diagnosed",
              "n": "Fever, increasing earache, profuse mucopurulent discharge with a positive reservoir sign, mastoid tenderness and redness, sagging canal wall"
            },
            {
              "k": "decision",
              "t": "Is the tympanic membrane still intact?",
              "yes": "MYRINGOTOMY — the pus must have a way out before antibiotics can work",
              "no": "The existing perforation is already draining"
            },
            {
              "k": "step",
              "t": "Systemic antibiotics: the majority resolve completely",
              "n": "Acute mastoiditis is treated MEDICALLY. Most cases never need an operation"
            },
            {
              "k": "decision",
              "t": "Mastoid or neck abscess? Any cranial or intracranial complication? Or pain, fever or otorrhoea persisting after 2-4 weeks of adequate treatment?",
              "yes": "COMPLETE SIMPLE (CORTICAL) MASTOIDECTOMY — every air cell exenterated, middle ear and drum left alone",
              "no": "Continue medical treatment to resolution"
            },
            {
              "k": "alert",
              "t": "Facial palsy, vertigo, meningism, drowsiness or a swinging fever converts this into an emergency",
              "n": "Image and operate. Do not wait out the 2-4 weeks"
            }
          ]
        },
        "qs": [
          "entep-ear-112",
          "entqb-ear3-67"
        ]
      },
      {
        "id": "csom-17",
        "w": "must",
        "h": "Petrositis — the lesion at the petrous apex",
        "body": "**Definition:** *\"Spread of infection to the **petrous apex air cells**.\"*\n\n**Pathology, quoted, and every clause is examinable:**\n\n> It occurs **only in pneumatized petrous bone** and has a **similar pathology to acute mastoiditis**. However, it is **much less common** than acute mastoiditis and, on the other hand, **more serious**, because it has a **greater tendency toward intracranial extension**.\n\n**Read that as four separate facts.** *Only in pneumatised petrous bone* explains why petrositis is uncommon even though otitis media is not — only some people have air cells that far medially. *Similar pathology to acute mastoiditis* means it is the same process — pus under pressure in air cells, coalescing — happening in a different, deeper set of cells. *Less common but more serious* is the comparison the bank asks directly. And *greater tendency toward intracranial extension* is the reason it matters at all.\n\n**How it is reached: MEDIAL spread**, from the mastoid or middle ear inwards along the pneumatised tract to the apex. That is the arm of the compass this complication occupies.\n\n**What is at the apex, and why the syndrome exists.** Two structures rest on that one small piece of bone:\n\n- the **trigeminal (Gasserian) ganglion**, in a dural pouch called **Meckel’s cave**;\n- the **abducent (VI) nerve**, running through **Dorello’s canal** beneath the petroclinoid ligament.\n\n*(Meckel’s cave and Dorello’s canal are named in neither cached slide; the lecture states only that the retrobulbar pain is \"due to irritation of the trigeminal ganglion\" and the diplopia is \"due to ipsilateral VI nerve (abducent) palsy\". The named anatomy is not taken from the course material.)*\n\n**So the triad is pure topography.** An abscess at the apex announces itself as an ear that discharges, an eye that aches behind, and an eye that cannot abduct — because those are the only three things in reach. **Nowhere else in the temporal bone produces that combination**, which is what makes the triad diagnostic of the *site*.\n\n**The distractors the bank uses, and why each fails.** **Mastoiditis** is the *origin* of the spread, not its destination, and gives local signs behind the ear. **Sigmoid sinus thrombophlebitis** is *posterior* spread and gives a swinging fever, not eye signs. A **temporal lobe abscess** gives headache, drowsiness, hemiparesis and hemianopia, not an isolated sixth nerve palsy. The **orbit** cannot be reached from the ear at all — orbital cellulitis is a complication of **sinusitis**. The **vestibular labyrinth** gives severe vertigo and sensorineural hearing loss. And **meningitis**, though it is the commonest intracranial complication, gives headache, fever, neck stiffness and photophobia — not isolated diplopia.\n\n**Finally, the otorrhoea in Gradenigo’s is not a new event.** It is the underlying otitis media, the **oldest** symptom the patient has; the two eye symptoms are what turn a discharging ear into a named diagnosis. That ordering is the clinically useful part: *a chronically discharging ear that begins to ache behind the eye has extended medially.*",
        "qs": [
          "entep-ear-27",
          "entep-ear-37",
          "entep-ear-201",
          "entep-mfe1-1",
          "entep-mfe4-1",
          "entqb-ear3-62",
          "entqb-ear4-99",
          "entqb-ear4-104"
        ]
      },
      {
        "id": "csom-18",
        "w": "must",
        "h": "Gradenigo’s triad, element by element — the most over-tested topic in the chapter",
        "body": "**The triad, verbatim from *L16) Chronic otitis media.pdf*:**\n\n> **Gradenigo’s syndrome / triad:**\n> **Otorrhoea.**\n> **Retrobulbar pain** — i.e. pain behind the eye, due to **irritation of the trigeminal ganglion**.\n> **Diplopia**, due to **ipsilateral VI nerve (abducent) palsy**.\n\n**Eighteen questions in this chapter are about this triad**, and they come at it from seven different angles: *which complication produces it, which nerve causes the diplopia, which muscle is affected, which nerve causes the pain, what the three elements are, where the infection spread to, and what causes the discharge.* Learn the table below in both directions and all eighteen fall out of it.\n\n**The diplopia, in detail, because the bank asks it four separate ways.** The abducent nerve supplies **one** muscle — the **lateral rectus**, the only abductor of the eye. Paralyse it and the eye cannot turn outwards, so the **unopposed medial rectus pulls it inwards**: a **CONVERGENT (esotropic) PARALYTIC squint**, with horizontal diplopia **worst on looking towards the affected side**. It is **unilateral**, because the infection is on one side. Older question stems describe it exactly as *\"convergent paralytic squint\"*.\n\n**Which makes the medial rectus the classic trap:** it is the muscle that produces the visible deviation, but it is working normally. The muscle **affected** is the **lateral rectus**.\n\n**The rule that settles every \"which nerve, which muscle\" question — LR6, SO4, all the rest 3:** the **lateral rectus** is **VI**, the **superior oblique** is **IV**, everything else is **III**. So: **oculomotor (III)** palsy gives **ptosis, a dilated pupil and a \"down and out\" eye** — none of which belongs to Gradenigo’s. **Trochlear (IV)** palsy gives **vertical or torsional** diplopia, worst on looking down, with a head tilt. **Raised intracranial pressure** can stretch the sixth nerve and give a **false localising** palsy, which is why it is a tempting option — but it is a late event, usually bilateral, and comes with headache, vomiting and papilloedema; in Gradenigo’s the palsy is **ipsilateral and direct**. *(The muscle mapping and the palsy patterns are standard neuro-anatomy and are not taken from the course material.)*\n\n**The pain, and why it is felt behind the eye.** The trigeminal ganglion sits on the petrous apex; the pain is **referred trigeminal pain**, felt in the **ophthalmic (V1)** territory. It is **not** the facial nerve — the facial nerve is overwhelmingly motor and produces **palsy, not pain**.\n\n**Two things that are NOT in the triad, and both are keyed as exceptions:**\n\n- **Hearing loss.** It is not part of the definition at all. Whatever deafness the patient has belongs to the otitis media underneath, and it is **conductive** — which is why *\"associated with conductive hearing loss\"* is keyed as the **false** statement in one endpoint question, and why students who expect a sensorineural loss get it wrong.\n- **Facial oedema**, **hemifacial spasm**, and a **divergent** or **bilateral** squint. Each appears in a distractor option and each is wrong for a specific reason: hemifacial spasm is an irritative facial nerve phenomenon; a divergent squint is the opposite of an abducent palsy; the lesion is unilateral. The discharge must also be **purulent**, not serous — this is suppurative middle ear disease.\n\n**A shorthand that works: ONE ear symptom and TWO EYE symptoms.** *(Grade Gain prints the mnemonic as \"1 ear + 2 nose\", which does not survive inspection — the two non-otological elements are orbital, not nasal. Transcribed as printed and flagged; the correction is not part of the source.)*\n\n**Do not confuse it with the other named triads.** **Trotter’s triad** — conductive deafness, ipsilateral immobility of the soft palate and trigeminal neuralgia of the mandibular division — is **nasopharyngeal carcinoma**. **Griesinger’s sign** is lateral sinus thrombosis. **Pott’s puffy tumour** is frontal sinusitis. All three are offered as distractors.",
        "table": {
          "head": [
            "Element of the triad",
            "Structure at the petrous apex",
            "Nerve",
            "What you see"
          ],
          "rows": [
            [
              "**Otorrhoea**",
              "The middle ear underneath",
              "—",
              "The discharging ear the patient has had all along — the **oldest** symptom, not a new one. Purulent, not serous"
            ],
            [
              "**Retrobulbar / retro-orbital pain**",
              "**Meckel’s cave**, holding the trigeminal (Gasserian) ganglion",
              "**V — trigeminal**",
              "Deep pain **behind the eye** and in the face, in the **ophthalmic (V1)** territory. Referred, not local"
            ],
            [
              "**Diplopia**",
              "**Dorello’s canal**, beneath the petroclinoid ligament",
              "**VI — abducent**",
              "**Lateral rectus** palsy: the eye will not abduct; the unopposed **medial rectus** turns it in — a **CONVERGENT PARALYTIC squint**, unilateral, diplopia worst on gaze towards the lesion"
            ],
            [
              "*(NOT in the triad)* Hearing loss",
              "The otitis media underneath",
              "—",
              "If present it is **CONDUCTIVE**, and it belongs to the underlying disease, not to Gradenigo’s"
            ],
            [
              "*(NOT in the triad)* Facial palsy or spasm",
              "Fallopian canal — a different, **anterior** route",
              "VII",
              "Facial nerve involvement is its own complication, not part of this syndrome"
            ]
          ]
        },
        "qs": [
          "entep-ear-79",
          "entep-ear-133",
          "entep-ear-139",
          "entep-ear-192",
          "entep-ear-202",
          "entqb-ear4-101",
          "entqb-ear4-102",
          "entqb-ear4-103",
          "entqb-ear4-105",
          "entep-case-18"
        ]
      },
      {
        "id": "csom-19",
        "w": "high",
        "h": "Labyrinthitis",
        "body": "**Clinical picture, and the lecture gives exactly two features:**\n\n> **Severe vertigo. Sensorineural hearing loss.**\n\nTo those two, add **nystagmus** and, in the acute phase, **nausea and vomiting**. It is a **cranial (intratemporal)** complication — the labyrinth is inside the petrous bone, not inside the skull cavity — which is the point tested by the *\"all of the following are intracranial complications except\"* question.\n\n**Why it matters more than its position in the list suggests.** It is the **one complication that converts a conductive hearing loss into a sensorineural one**, and it can be the road by which infection reaches the meninges. **Vertigo appearing in a long-standing foul-smelling discharging ear is never benign** — it means the inner ear has been breached.\n\n**The word that decides the classic EXCEPT question is \"SUPPURATIVE\".** Suppurative labyrinthitis requires **pus**. **Otitis media with effusion is non-suppurative by definition** — the fluid behind an intact drum contains no pus — so it cannot cause it. That is the keyed exception.\n\n**The three routes that CAN**, and the third is the one worth remembering because it runs the other way:\n\n- **Cholesteatoma erodes the lateral semicircular canal.** This is the commonest route and the classic site: the lateral canal is the part of the labyrinth closest to the attic. The result is a **labyrinthine fistula**, which opens the inner ear directly.\n- **Acute suppurative otitis media**, through the **round window membrane** or the oval window, especially in a fulminant attack. Note that the round window is one of the lecture’s own named **preformed pathways**.\n- **Meningitis, working inwards.** Infection descends from the subarachnoid space along the **internal auditory meatus and the cochlear aqueduct**. This is the route that makes post-meningitic deafness in children so common and so severe *(the meningogenic route is not taken from the course material)*.\n\n**That two-way traffic is the point to keep:** the labyrinth can be infected from the middle ear outwards, or from the meninges inwards.\n\n**Two clinical additions.** A **positive fistula sign** — vertigo and nystagmus provoked by pressing on the tragus or by pneumatic otoscopy — indicates a labyrinthine fistula and is a strong argument for surgery. And a **serous (toxic) labyrinthitis**, in which toxins rather than organisms cross into the inner ear, is reversible, whereas true **suppurative** labyrinthitis ends in a **dead labyrinth**: total sensorineural deafness and permanent loss of vestibular function on that side *(both not taken from the course material)*.",
        "table": {
          "head": [
            "Route into the labyrinth",
            "Mechanism",
            "Typical setting"
          ],
          "rows": [
            [
              "**Cholesteatoma erodes the LATERAL semicircular canal**",
              "A **labyrinthine fistula** opens the inner ear directly",
              "Unsafe CSOM. Vertigo, often provoked by pressing the tragus — a positive **fistula sign**"
            ],
            [
              "**Round window / oval window membrane**",
              "Toxins, then organisms, cross from the middle ear",
              "**Acute suppurative otitis media**, fulminant. The round window is a named **preformed pathway**"
            ],
            [
              "**Meningogenic — from the meninges INWARDS**",
              "Descends along the **internal auditory meatus** and **cochlear aqueduct**",
              "Meningitis. The reason post-meningitic deafness in children is so severe *(not taken from the course material)*"
            ],
            [
              "**Otitis media with EFFUSION**",
              "**Cannot** cause suppurative labyrinthitis",
              "OME is **non-suppurative** — there is no pus. This is the keyed exception"
            ]
          ]
        },
        "qs": [
          "entep-ear-156",
          "entep-case-16"
        ]
      },
      {
        "id": "csom-20",
        "w": "high",
        "h": "Facial paralysis as a complication of otitis media",
        "body": "**The lecture lists facial paralysis among the CRANIAL complications of otitis media**, and the anatomy behind it is given in *L22) Anatomy of  Ear Undergraduate.pdf*: the **vertical (third, mastoid) part of the facial nerve runs in a bony canal in the POSTERIOR WALL of the middle ear**, leaving through the **stylomastoid foramen**. The lecture also notes that the nerve *\"runs in the walls of the middle ear\"* and *\"could be injured during bone drilling\"* — surgery is a cause as well as a treatment.\n\n**Two quite different mechanisms, and they demand different management** *(the mechanisms and the management below are not taken from the course material, which lists facial paralysis without describing it)*:\n\n- **In ACUTE otitis media**, the nerve is usually exposed by a **congenital dehiscence of the fallopian canal** — one of the lecture’s own named preformed pathways. Inflammatory oedema compresses the exposed nerve. The palsy is usually **incomplete** and recovers, and the treatment is **urgent myringotomy** to decompress the middle ear, plus systemic antibiotics. **Myringotomy comes first** — ahead of intravenous antibiotics alone, lumbar puncture or steroids.\n- **In CHRONIC disease (unsafe CSOM)**, the **cholesteatoma has eroded the fallopian canal**. This is destruction, not oedema. Treatment is **surgical removal of the disease with decompression of the nerve**, and recovery is far less certain.\n\n**It is a LOWER motor neurone palsy**, so the **forehead is involved** and the eye cannot close on that side — which distinguishes it from an upper motor neurone (stroke) palsy that spares the forehead. The exposed cornea needs protecting.\n\n**Where it sits in the compass:** facial palsy is **ANTERIOR** spread from the mastoid, in the same direction as the sagging of the posterosuperior bony canal wall. A patient with mastoiditis who develops facial weakness has had pus travel forwards to the fallopian canal.\n\n**And it is one of the three absolute indications for surgery in acute mastoiditis**, alongside an abscess and failure of medical treatment. **A facial palsy in a discharging ear is never watched.**",
        "qs": []
      },
      {
        "id": "csom-21",
        "w": "must",
        "h": "Otogenic meningitis, and the extradural and subdural abscess",
        "body": "**Meningitis is the intracranial complication students are asked to recognise most often, and it is recognised by ONE sign group: meningeal irritation.**\n\n- **Headache, fever, photophobia, neck rigidity**, and a positive **Kernig** and **Brudzinski** sign.\n- **No focal neurological deficit.** That absence is the whole discrimination against a brain abscess.\n\n**The bank teaches this by printing two vignettes that are nearly word for word identical.** One 40-year-old man with foul ear discharge and attic granulations develops *\"severe headache and fever followed by VOMITING\"*; another develops *\"severe headache and fever associated with NECK RIGIDITY\"*. **The first is raised intracranial pressure — a brain abscess. The second is meningitis.** Nothing else in the two stems differs. **The examiner is testing one discrimination: raised pressure versus meningeal irritation.**\n\n**Extradural abscess.** Pus collecting between the eroded bone — the **tegmen tympani** above, or the **posterior fossa plate** behind — and the **dura**. It is the **commonest** of the intracranial complications and it is frequently **silent**, found at operation when granulations are seen sitting on exposed dura *(the commonness and the silence are not taken from the course material; the lecture lists extradural abscess first among the intracranial complications without describing it)*.\n\n**But it has one classic clinical clue, and the bank asks it as a vignette:** a **PULSATING discharge**. A discharge that pulses in time with the arterial pulse is the **lighthouse sign**, and it means the discharge is being transmitted from a space sharing the intracranial pulse — the dura has been exposed, or an extradural abscess has formed. **In a 35-year-old with offensive otorrhoea and a marginal perforation, \"cholesteatoma\" is close but wrong; the word *pulsating* forces the answer to \"cholesteatoma WITH an intracranial complication.\"** That patient needs imaging and surgery, not ear drops *(the pulsating / lighthouse sign is not taken from the course material)*.\n\n**Subdural abscess (empyema)** lies between dura and arachnoid. It is rarer, spreads rapidly over the convexity, and typically presents with **rapid deterioration, seizures and hemiplegia** rather than a slowly evolving picture *(not taken from the course material — the lecture names it in the list only)*.\n\n**Management principle for all three, and for meningitis:** high-dose intravenous antibiotics **plus** surgical eradication of the ear disease. **Treating the meningitis without removing the source leaves the source.**",
        "qs": [
          "entep-ear-56",
          "entep-ear-178",
          "entep-case-23"
        ]
      },
      {
        "id": "csom-22",
        "w": "must",
        "h": "Otogenic brain abscess — temporal lobe versus cerebellum",
        "body": "**Focal neurological signs in a patient with a discharging ear mean a FOCAL lesion, and that means a brain abscess.** This is the discrimination the bank tests with its longest vignette in the chapter.\n\n**Read that vignette once, because it is the whole topic:** an adult with **three years of continuous, purulent, offensive** discharge — unsafe disease — develops **headache, fever and vomiting**, then **severe headache and drowsiness**, then **difficulty going up and down stairs**, and finally **hemianopia and weakness of the left arm and leg**. Otoscopy shows an **attic perforation**. The answer to *\"which perforation\"* is **attic**; the answer to *\"which complication\"* is **temporal lobe abscess**.\n\n**The localising signs decide it.** Contralateral **hemianopia** (optic radiation) and contralateral **arm and leg weakness** (internal capsule / motor pathway), on top of raised intracranial pressure, place the lesion in **one cerebral hemisphere** — and the temporal lobe sits directly above the middle ear, separated only by the thin **tegmen tympani**. A **cerebellar abscess** would give **ataxia, nystagmus and incoordination** instead. **Meningitis** gives neck stiffness without focal limb signs. **Mastoiditis** is extracranial to the cranial cavity and cannot produce hemianopia. **Lateral sinus thrombosis** gives a swinging fever, which is systemic rather than focal.\n\n**The evolution matters as much as the signs**, and it is what makes a brain abscess dangerous to manage:\n\n- an initial **encephalitic** stage with headache and fever;\n- a **quiet latent period** that is falsely reassuring;\n- **raised intracranial pressure** — headache, vomiting, drowsiness, **bradycardia**, papilloedema;\n- and only then the **focal deficit**.\n\n**So drowsiness precedes paralysis.** *A patient with chronic otorrhoea who becomes drowsy has an intracranial complication until imaged* — you do not wait for the hemiparesis *(the staging is not taken from the course material; the lecture lists brain abscess among the intracranial complications without describing its course)*.\n\n**And note which ear disease does this: the UNSAFE, attico-antral type.** A cholesteatoma erodes the tegmen; safe tubo-tympanic disease does not. That is the entire reason for the two names.\n\n**\"Most common cause of a temporal lobe abscess\" = direct spread from a middle ear infection**, usually through an extradural abscess first. Haematogenous abscesses are multiple and sit at the grey-white junction from lung or cardiac sources; trauma needs a penetrating injury; a frontal sinus infection gives a **frontal** lobe abscess.",
        "table": {
          "head": [
            "",
            "Temporal lobe abscess",
            "Cerebellar abscess"
          ],
          "rows": [
            [
              "Route",
              "**SUPERIOR**, through the **tegmen tympani**",
              "**POSTERIOR**, through the mastoid into the posterior fossa"
            ],
            [
              "Focal signs",
              "**Contralateral hemiparesis**; **contralateral homonymous hemianopia**; nominal aphasia if the dominant lobe",
              "**Ipsilateral** ataxia, past-pointing, intention tremor, **nystagmus** towards the lesion, hypotonia"
            ],
            [
              "Classic clue in a stem",
              "Weakness of the arm and leg on one side; difficulty on stairs; hemianopia",
              "Falls towards the side of the lesion; incoordination; unsteadiness"
            ],
            [
              "Shared with the other",
              "Headache, fever, vomiting, **drowsiness**, bradycardia — raised intracranial pressure",
              "The same raised-pressure picture"
            ],
            [
              "Which ear disease",
              "**Unsafe (attico-antral) CSOM with cholesteatoma**",
              "**Unsafe (attico-antral) CSOM with cholesteatoma**"
            ]
          ]
        },
        "qs": [
          "entep-ear-93",
          "entqb-ear4-116",
          "entep-case-17"
        ]
      },
      {
        "id": "csom-23",
        "w": "must",
        "h": "Lateral (sigmoid) sinus thrombophlebitis",
        "body": "**RIGORS MEAN BACTERAEMIA, and in an ear patient bacteraemia means infected thrombus in a venous sinus.** If a stem gives you *\"intermittent fever with rigors\"*, *\"swinging pyrexia\"* or *\"remittent, spiking fever\"* in someone with a discharging ear, the answer is this and nothing else.\n\n**The anatomy is simple and decides the direction of spread.** The **sigmoid sinus lies immediately BEHIND the mastoid air cells**, separated from them by a thin shell of bone — the **sinus plate**. Erode that plate and the infection is in the venous sinus. So the spread is **POSTERIOR**, and *\"sinus thrombophlebitis is caused by the ______ spread of mastoiditis\"* is answered **posterior** by pure anatomy.\n\n**What happens next.** Infected thrombus forms in the sigmoid sinus and **sheds septic emboli into the circulation in showers**. Each shower produces a spike of fever with a **rigor**, and the temperature then falls again — the classical **picket-fence (swinging, remittent) pyrexia**. The thrombus can propagate into the **internal jugular vein**, giving a tender cord in the neck.\n\n**Why it can only be cholesteatoma among the usual option list.** Cholesteatoma is the only disease offered that **destroys bone**. **Otitis media with effusion** and **adhesive otitis media** are **non-suppurative** — fluid and retraction, with no pus to spread and no bone destruction. **External otitis** is confined to the canal, on the wrong side of the drum entirely.\n\n**It is an INTRACRANIAL complication**, grouped by the lecture with meningitis, brain abscess and extradural abscess. That grouping is exactly what makes *\"which of these is not an extra-cranial complication\"* answerable.\n\n**How the fever patterns separate the complications** — this is the discrimination the bank actually wants:\n\n- **Lateral sinus thrombosis** — **swinging fever WITH RIGORS**. Systemic.\n- **Acute mastoiditis** — a **continuous** low-to-moderate fever with **local** signs (mastoid tenderness and redness, sagging canal wall, profuse discharge with a positive reservoir sign). No rigors.\n- **Labyrinthitis** — vertigo, nystagmus, sensorineural loss. A labyrinthine event, not a systemic one.\n- **Cholesteatoma itself** — the underlying **disease**, not a complication, and painless and afebrile until it produces one.\n\n**Management is not conservative:** intravenous antibiotics, anticoagulation where indicated, and **surgical exploration of the sinus with a mastoidectomy** to remove the source. **A swinging fever in a discharging ear is an emergency.**",
        "table": {
          "head": [
            "Finding",
            "Why it happens"
          ],
          "rows": [
            [
              "**Picket-fence (swinging, remittent) pyrexia WITH RIGORS**",
              "Septic emboli showered off an infected thrombus. **Rigors mean bacteraemia**"
            ],
            [
              "**Griesinger’s sign** — oedema and tenderness over the mastoid emissary vein",
              "Thrombus has propagated into the emissary vein *(not taken from the course material)*"
            ],
            [
              "**Tobey-Ayer test**",
              "Compressing the **normal** jugular vein raises the CSF pressure; compressing the **affected** side does not *(not taken from the course material)*"
            ],
            [
              "Tender cord along the internal jugular vein in the neck",
              "Thrombus propagating down the IJV *(not taken from the course material)*"
            ],
            [
              "Headache and papilloedema without focal signs",
              "**Otitic hydrocephalus**, if the dominant sinus is occluded *(not taken from the course material)*"
            ],
            [
              "**Direction of spread: POSTERIOR**",
              "Through the **sinus plate**, the thin bone between the mastoid air cells and the sigmoid sinus"
            ]
          ]
        },
        "qs": [
          "entep-ear-25",
          "entep-ear-151",
          "entqb-ear4-115",
          "entep-case-21"
        ]
      },
      {
        "id": "csom-24",
        "w": "high",
        "h": "Extracranial complications, and the ear disease that presents as a neck lump",
        "body": "**The lecture’s extracranial list, quoted:** **external otitis; retropharyngeal abscess; parapharyngeal abscess; cervical lymphadenitis.**\n\n- **External otitis.** The simplest of them. A chronically discharging ear macerates the canal skin, and a secondary diffuse otitis externa follows. It is worth naming because it is the reverse of the usual reasoning: here the *middle* ear disease has caused the *outer* ear disease.\n- **Cervical lymphadenitis.** Enlarged, tender upper deep cervical and post-auricular nodes draining the infected ear.\n- **Retropharyngeal and parapharyngeal abscess.** These are the two the lecture names and the ones with real consequences.\n\n**Bezold’s abscess is the link, and it is why an ear disease can present as a throat problem.** *L4) PHARYNGEAL SUPPURATIONS.pdf* lists *\"middle ear infections with bony destruction of the mastoid tip (Bezold’s abscess)\"* among the causes of a **parapharyngeal abscess**. Pus escapes **inferiorly** through the mastoid tip, tracks along the **sternomastoid** sheath into the deep neck, and the patient presents with a **tender neck swelling, fever and odynophagia**.\n\n**The clinical warning that follows from that:** once the pus is in the neck, **the mastoid tenderness that would have made the diagnosis may be gone.** A deep neck abscess with a history of ear discharge is an otological problem until the ear has been examined.\n\n**Citelli’s abscess** is the same inferior escape through the **medial** wall of the mastoid tip, tracking along the **posterior belly of digastric** into the posterior triangle. Bezold and Citelli differ only in which wall of the tip the pus breaks through, and therefore in which muscle plane it follows *(both abscesses are named in the bank but on no cached slide — not taken from the course material)*.\n\n**Note the classification point the bank exploits:** these neck abscesses are **extracranial**, not cranial and not intracranial, because the infection has escaped into the **soft tissues of the neck**. That is what makes **Bezold’s abscess** a keyed wrong answer in the *\"which is an intracranial complication\"* question.",
        "qs": []
      },
      {
        "id": "csom-25",
        "w": "must",
        "h": "Revision table — naming the complication from one clinical sign",
        "body": "**This is the single most useful page in the chapter for the exam**, because the bank’s commonest question shape is a discharging ear plus **one** new finding, and a demand for the name of the complication.\n\n**Work through it in the order the disease travels.** Signs that are **local and behind the ear** mean the infection is still in bone (cranial). Signs that are **systemic with rigors** mean it is in a venous sinus. Signs that are **diffuse and meningeal** mean it has crossed the dura. Signs that are **focal and neurological** mean it is in brain. Signs in the **eye** mean the petrous apex. Signs in the **neck** mean it has escaped downwards.\n\n**Two pairs are deliberately printed as near-identical vignettes and are worth memorising as pairs:**\n\n- **Vomiting** (raised intracranial pressure -> brain abscess) versus **neck rigidity** (meningeal irritation -> meningitis), everything else the same.\n- **Continuous fever with local mastoid signs** (mastoiditis) versus **intermittent fever with rigors** (lateral sinus thrombosis).\n\n**And one sign trumps all of the above:** **pain**. Chronic suppurative otitis media does not hurt, so pain in a chronically discharging ear means either a superimposed acute otitis media or one of the complications below.",
        "table": {
          "head": [
            "New finding in a patient with a discharging ear",
            "Complication"
          ],
          "rows": [
            [
              "Fever, **increasing** earache, mastoid tenderness and redness, profuse discharge with a positive **reservoir sign**, sagging canal wall",
              "**Acute mastoiditis** (cranial — and the commonest of all)"
            ],
            [
              "Fluctuant post-auricular swelling, auricle pushed **out and down**, sulcus obliterated",
              "**Mastoid (subperiosteal) abscess** — operate"
            ],
            [
              "Tender swelling in the **upper neck** under sternomastoid; odynophagia",
              "**Bezold’s abscess** -> parapharyngeal abscess (extracranial)"
            ],
            [
              "**Retro-orbital pain + diplopia** with a convergent squint",
              "**Petrositis — Gradenigo’s triad** (cranial, medial spread)"
            ],
            [
              "**Severe vertigo + sensorineural hearing loss**, nystagmus",
              "**Labyrinthitis** (cranial). Vertigo on tragal pressure = **fistula**"
            ],
            [
              "Sudden **facial weakness** on the same side, forehead involved",
              "**Facial paralysis** — erosion of the fallopian canal (cranial, anterior spread)"
            ],
            [
              "**Headache, fever, neck rigidity**, positive Kernig and Brudzinski, **no focal signs**",
              "**Meningitis** (intracranial)"
            ],
            [
              "Headache, fever, **vomiting, drowsiness**, bradycardia — later **hemiparesis and hemianopia**",
              "**Temporal lobe abscess** (intracranial, superior spread)"
            ],
            [
              "Ataxia, nystagmus, past-pointing, incoordination",
              "**Cerebellar abscess** (intracranial, posterior spread)"
            ],
            [
              "**Intermittent / swinging fever WITH RIGORS**",
              "**Lateral (sigmoid) sinus thrombophlebitis** (intracranial, posterior spread)"
            ],
            [
              "**PULSATING** discharge through a marginal perforation",
              "Dura exposed / **extradural abscess** — the lighthouse sign"
            ],
            [
              "**Pain**, in an ear that has discharged painlessly for years",
              "A superimposed **acute otitis media**, or **any** complication above. CSOM is not painful"
            ]
          ]
        },
        "qs": []
      },
      {
        "id": "csom-26",
        "w": "high",
        "h": "The named signs and eponyms, collected",
        "body": "**Eponyms are what multiple-choice papers are built from**, and this chapter carries more of them than any other in the ear syllabus. Several appear only as *distractors* — which means you must know what they actually belong to in order to reject them.\n\n**Only two of these are printed in the cached lectures:** **Gradenigo’s syndrome/triad** and the **reservoir sign**. **Everything else in the table is not taken from the course material**, though the bank asks several of them directly and Bezold’s abscess is named in the pharyngeal suppurations lecture as a cause of parapharyngeal abscess.\n\n**The two that are most often confused with Gradenigo’s, because both are triads and both are ENT:** **Trotter’s triad** is **nasopharyngeal carcinoma** — a malignancy, not an infection — and **Pott’s puffy tumour** is **frontal sinusitis**, not ear disease at all.",
        "table": {
          "head": [
            "Name",
            "What it is",
            "What it belongs to"
          ],
          "rows": [
            [
              "**Gradenigo’s triad**",
              "Otorrhoea + retro-orbital pain + diplopia",
              "**Petrositis** *(the only eponym printed in the lecture)*"
            ],
            [
              "**Reservoir sign**",
              "Discharge re-accumulates as fast as the canal is mopped dry",
              "**Acute mastoiditis** *(defined verbatim in the lecture)*"
            ],
            [
              "**Griesinger’s sign**",
              "Oedema and tenderness over the mastoid emissary vein",
              "**Lateral sinus thrombosis**"
            ],
            [
              "**Tobey-Ayer test**",
              "CSF pressure rises on compressing the **normal** jugular vein only",
              "**Lateral sinus thrombosis**"
            ],
            [
              "**Bezold’s abscess**",
              "Pus through the mastoid tip along **sternomastoid**",
              "Extracranial spread; can present as a **parapharyngeal abscess**"
            ],
            [
              "**Citelli’s abscess**",
              "Pus through the medial wall of the tip along the **posterior belly of digastric**",
              "Extracranial spread"
            ],
            [
              "**Lighthouse / pulsating sign**",
              "Discharge pulsating in time with the arterial pulse",
              "Dura exposed — an **intracranial** complication (extradural abscess)"
            ],
            [
              "**Fistula sign**",
              "Vertigo and nystagmus on pressing the tragus",
              "**Labyrinthine fistula** in cholesteatoma"
            ],
            [
              "**Tragus sign**",
              "Sharp pain on pressing the tragus",
              "**Furunculosis / otitis externa** — NOT mastoiditis"
            ],
            [
              "**Trotter’s triad**",
              "Conductive deafness + immobile soft palate + trigeminal neuralgia (V3)",
              "**Nasopharyngeal carcinoma** — a distractor here"
            ],
            [
              "**Pott’s puffy tumour**",
              "Subperiosteal abscess over the frontal bone",
              "**Frontal sinusitis** — a distractor here"
            ],
            [
              "**Meckel’s cave / Dorello’s canal**",
              "The trigeminal ganglion, and the abducent nerve, at the petrous apex",
              "The anatomy behind **Gradenigo’s**"
            ]
          ]
        },
        "qs": []
      },
      {
        "id": "csom-27",
        "w": "high",
        "h": "Putting it together — approaching a discharging ear",
        "body": "**Everything in this chapter reduces to one clinical sequence.** Run it in order and you will not miss the ear that needs an operation.\n\n**The two questions that decide everything are: does it smell, and is the annulus intact?** The first is answered at the bedside without instruments; the second needs the canal cleaned and the **whole** drum inspected — **especially the attic**, which is where primary acquired cholesteatoma hides behind a crust while the pars tensa looks normal.\n\n**Then look for the complication.** Chronic suppurative otitis media is painless and afebrile. **Pain, fever, vertigo, facial weakness, headache, vomiting, drowsiness, rigors or double vision are all abnormal in this disease**, and each of them names a specific complication (see the revision table two sections above).",
        "flow": {
          "title": "Approach to the chronically discharging ear",
          "steps": [
            {
              "k": "step",
              "t": "History: how long, continuous or intermittent, profuse or scanty, and does it SMELL?",
              "n": "Four adjectives are close to a diagnosis on their own"
            },
            {
              "k": "decision",
              "t": "Is the discharge FOETID, scanty, purulent and continuous?",
              "yes": "Osteitis: suspect UNSAFE attico-antral disease with cholesteatoma",
              "no": "Profuse, mucopurulent, odourless and intermittent suggests SAFE tubo-tympanic disease"
            },
            {
              "k": "step",
              "t": "Clean the canal and examine the WHOLE drum, especially the attic",
              "n": "A central perforation with an intact rim of drum all round = safe. An attic or marginal defect, crusting, keratin debris or red fleshy granulations = unsafe"
            },
            {
              "k": "alert",
              "t": "Any PAIN, vertigo, facial weakness, headache, fever, vomiting, drowsiness or rigors?",
              "n": "CSOM is NOT a painful condition. Any of these means a complication until proved otherwise: image and refer urgently"
            },
            {
              "k": "step",
              "t": "Tuning forks and pure tone audiogram",
              "n": "A conductive loss is expected. A sensorineural or MIXED loss means the labyrinth has been breached"
            },
            {
              "k": "step",
              "t": "Imaging: plain mastoid X-ray in the syllabus; HRCT of the temporal bone in practice",
              "n": "Cellular mastoid = safe. Acellular mastoid PLUS a filling defect = cholesteatoma. A non-anatomical irregular cavity with bone sequestra is diagnostic"
            },
            {
              "k": "decision",
              "t": "Is there a cholesteatoma?",
              "yes": "ALWAYS SURGICAL: tympano-mastoidectomy. Make the ear SAFE first, DRY second, HEARING last",
              "no": "Medical treatment, aural toilet, water precautions, treat the nose; then myringoplasty, or tympanoplasty if the ossicles are eroded"
            },
            {
              "k": "alert",
              "t": "Bilateral disease: operate the DANGEROUS ear first, not the deafer one",
              "n": "An attic perforation with offensive discharge and a 20 dB gap outranks a large central perforation with a 45 dB gap"
            }
          ]
        },
        "qs": []
      },
      {
        "id": "csom-28",
        "w": "know",
        "h": "What these notes deliberately leave out",
        "body": "**Recorded so that a gap is a decision rather than an accident**, as the project’s rules require.\n\n- **Drug names, doses and durations.** The lecture says *\"antibiotherapy according to culture and sensitivity\"* and nothing more. No antibiotic, dose or course length is stated anywhere in the cached ENT material for CSOM, and none has been invented here. The one duration the material does give — **2 to 4 weeks** of adequate medical treatment before declaring failure in acute mastoiditis — is kept, because Grade Gain prints it.\n- **Operative technique.** Surgical steps, approaches, canal-wall-up versus canal-wall-down reconstruction, graft materials beyond tragal perichondrium, and second-look surgery are all omitted. The bank asks *which* operation and *why*, never *how*.\n- **Epidemiology.** Incidence and prevalence figures for CSOM and cholesteatoma have no bearing on any answer and are not stated in the material.\n- **Molecular mechanism.** Which proteolytic enzymes, which cytokines, and the biology of keratinocyte migration all go deeper than the material goes. The lecture says *\"proteolytic enzymes\"* and that is the level at which it is examined.\n- **Microbiology in detail.** The lecture gives only *\"Gram-negative organisms\"* for unsafe disease; the bank’s cram sheet adds *Pseudomonas, Proteus, Klebsiella*, and both are recorded above. Anaerobic speciation, sensitivity patterns and biofilm are not covered.\n- **Tuberculous and other specific chronic otitis media.** Multiple perforations, painless profuse discharge and pale granulations in tuberculous otitis media are a real entity but appear nowhere in the cached lectures and in none of the 93 questions.\n- **Adhesive otitis media, tympanosclerosis and retraction pocket staging** are named here only where a question uses them as distractors; they are the business of the AOM and effusion chapter.\n- **Otitic hydrocephalus** and **cavernous sinus thrombosis** are mentioned in a single line each; neither is on any slide nor in any question in this chapter.\n\n**Which pass this was written in.** These notes were written in the **theory-first sprint of August 2026**, while three of the four ENT question banks were still being transcribed. **All 93 questions that existed in this chapter on 2026-08-13 are linked in the sections above.** When the House bank and the remainder of Grade Gain close, this chapter must be re-checked against its new questions and patched — that reconciliation pass is mandatory and is recorded in the project brief.",
        "qs": []
      }
    ]
  },
  "ent-tonsils": {
    "intro": "This is the **largest chapter in the ENT bank — 117 transcribed questions** — and the examiner asks it in a very narrow set of shapes. Learn the shapes and the chapter collapses to a manageable size.\n\n**1. Timing questions.** More questions turn on *when* something happened than on anything else. Post-tonsillectomy bleeding alone is asked **eighteen separate ways** across the two banks — *during surgery / 2 hours / 12 hours / 20 hours / 24 hours / 5 days / 6 days / 7 days / 10 days / 4 weeks* — and every one of them is answered by the same three-line table (primary · reactionary · secondary). The examiner-pattern file records *\"post-tonsillectomy bleeding — 2 hours vs 1 week\"* on four of twenty-five revision pages. **Memorise the three windows and their three causes and you have collected roughly one question in six of this chapter.**\n\n**2. \"All of the following EXCEPT.\"** One line in seven of the whole ENT paper is a negative stem, and in this chapter the proportion is higher still — adenoid facies *except*, indications of adenoidectomy *except*, true about diphtheria *except*, may be injured during adenoidectomy *except*, sure signs of chronic tonsillitis *except*. **You cannot answer these by knowing the right answer; you have to know all four options.** That is why every list below is given complete, and why the wrong options are explained as carefully as the keys.\n\n**3. The membrane differential.** *A white/grey coating on the tonsil* is the single richest vein in the chapter — diphtheria, infectious mononucleosis, Vincent’s angina, candida, agranulocytosis/leukaemia, follicular tonsillitis, and the trap option (peritonsillar abscess, which **displaces** the tonsil instead of coating it). Both banks print this list, forwards and inverted. **One table answers all of them.**\n\n**4. One-line vignettes decided by a single finding.** The banks print look-alike vignettes in rows — same age, same sore throat, same fever — where *one* clause decides the answer: *pus* → bacterial tonsillitis; *membrane + palatal petechiae + hepatosplenomegaly* → mononucleosis; *vesicles on the soft palate* → herpangina; *strawberry tongue + desquamation* → scarlet fever; *unilateral punched-out ulcer + foul breath* → Vincent’s; *trismus + uvula pushed across* → quinsy. **Read the vignette for the discriminating clause, not for the general picture.**\n\n**5. The three-vignette ladder.** Grade Gain prints identical adenoid vignettes with one clause changed and expects three different answers: 2-year-old → wait; 2-year-old **plus snoring and daytime sleepiness** → operate now; 4-year-old **plus a cleft palate** → partial adenoidectomy only. **The age rule, the OSA override and the cleft exception are the whole teaching point.**\n\n**6. Numbers.** 7 / 5 / 3 attacks. 5–7 years. 2–6 years. 8–30 crypts. 5–10 days. 24 hours. 40–70 °C. 2–3 weeks. 5–15 years. **The bank tests numbers directly and it does not paraphrase them.**\n\n**7. One nerve, asked repeatedly.** Referred otalgia in tonsillitis and after tonsillectomy is **glossopharyngeal**, and it is asked three times because the glossopharyngeal nerve *lies in the tonsillar bed*. The vagus is the distractor every time.",
    "sections": [
      {
        "id": "tons-a1",
        "w": "must",
        "h": "Waldeyer’s ring — the five components",
        "body": "**`L3`:** a **discontinuous ring of lymphoid tissue** round the naso- and oropharynx; **primary immune defence against inhaled or ingested pathogens**. `L1.2`: **early recognition of pathogens and initiation of an immune response**.\n\n**THE FIVE COMPONENTS** (asked as \"all EXCEPT\"): **nasopharyngeal tonsil = the ADENOID** (single, midline, roof/posterior wall of nasopharynx) · **tubal tonsils, Gerlach’s** (at the Eustachian tube orifices) · **palatine tonsils** (paired, oropharynx) · **lingual tonsil** (base of tongue) · **lateral pharyngeal bands** (behind the posterior pillars).\n\n**⚠️ NOT MEMBERS. Henle’s lymph nodes** = the **retropharyngeal** nodes, ordinary lymph nodes; `L4` makes them **the source of the acute retropharyngeal abscess** and says they *\"tend to atrophy about the fifth year of age\"* — **that statement is keyed TRUE**, only their membership of the ring is false. **Delphian node** — pretracheal, above the thyroid isthmus.\n\n**PROPERTIES OF ALL WALDEYER TISSUE:**\n- **Discontinuous** — aggregations at the two portals of entry, not a closed circle.\n- **Non-encapsulated MALT with NO AFFERENT LYMPHATICS** — antigen crosses the epithelium directly, efferents only. That is what separates it from a lymph node.\n- Secretes **IgG, IgM, IgA (esp. secretory), IgE**; **⚠️ NOT IgD** — a membrane-bound receptor on naive B cells, not a secreted antibody *(not taken from the course material)*.\n- Most active **4–10 yrs**, when tonsillitis and adenoid hypertrophy peak. **Hypertrophy is a response, not a disease**; the ring compensates after tonsillectomy, so no important immunodeficiency follows.",
        "qs": [
          "entqb-thr4-247",
          "entqb-thr4-168",
          "entqb-thr4-150"
        ]
      },
      {
        "id": "tons-a2",
        "w": "must",
        "h": "The palatine tonsil — bed, blood, lymph, nerve, referred otalgia",
        "body": "**`L1.2`:** paired oropharyngeal lymphoid masses; **almond-shaped compact bodies of dense lymphoid tissue** (keyed TRUE). **Normal tonsils are flush with the edges of the fauces** — the baseline for \"hypertrophy\". **8–30 crypts** on the medial surface; the largest, the **crypta magna**, separates upper pole from body and is **the door quinsy comes through** (`L4`). Crypts also trap debris → **tonsilloliths**, and hold follicular pus plugs. **Fibrous capsule** on the lateral surface; the lower pole may become continuous with the **lingual tonsil**.\n\n**THE BED — four layers:** **superior constrictor** (⚠️ **superior, never middle**; exposed by extracapsular tonsillectomy) · **glossopharyngeal nerve** · **facial artery** · **buccopharyngeal fascia**.\n\n**⚠️ THE INTERNAL CAROTID LIES ~2.5 cm BEHIND AND LATERAL** (Grade Gain’s figure), separated only by those layers, and **sometimes tortuous, closer still, visibly pulsating in the lateral fossa**. **Deep cautery, suturing or dissection outside the capsule in the LATERAL fossa reaches it** — catastrophic haemorrhage.\n\n**ARTERIES (`L1.2`’s order):** **1 tonsillar branch of the FACIAL artery — the MAIN supply** · 2 ascending palatine (facial) · 3 dorsalis linguae (lingual) · 4 descending palatine (maxillary) · 5 ascending pharyngeal. **All external-carotid** — bleeding is brisk and arterial. **Paratonsillar vein** = upper-pole ooze.\n\n**LYMPH: upper deep cervical, especially the JUGULODIGASTRIC** (printed \"diagastric\") = the **tonsillar node**, **level II**, below and behind the mandibular angle where posterior digastric crosses the internal jugular vein. **A painful upper-neck swelling after streptococcal tonsillitis is upper deep cervical lymphadenopathy** — not submandibular, parotid or thyroid. **TENDER = ACUTE** (tonsillitis, quinsy, Vincent’s, diphtheria — so gross it is a **\"bull neck\"**) · **FIRM, NON-TENDER, bilateral, child = CHRONIC tonsillitis** · **the same painless firm node in an ADULT = malignancy until proved otherwise** *(not taken from the course material)*.\n\n**NERVE: GLOSSOPHARYNGEAL (IX)**, lying **in the tonsillar bed**. **⚠️ Not the vagus** — the distractor every time.\n\n**REFERRED OTALGIA** (`L17,18) Otorrhea and otalgia.pdf`, `L19.2) Tinnitus.pdf`): **local 95 %, referred 5 %** — *\"lesion in a remote area having the same N.S.\"*\n\n| Nerve | Refers from | Ear branch |\n|---|---|---|\n| **Trigeminal (V)** | Teeth, TMJ, oral cavity, anterior tongue | Auriculotemporal |\n| **Glossopharyngeal (IX)** | **Tonsil, fossa, soft palate, posterior tongue, nasopharynx** | **Jacobson’s tympanic** |\n| **Vagus (X)** | Vallecula, epiglottis, larynx, hypopharynx, oesophagus | Arnold’s auricular |\n| **C2, C3** | Neck, cervical spine | Great auricular, lesser occipital |\n\n`L1.2` routes the vagal territory via the **internal branch of the superior laryngeal nerve**, **not** the recurrent laryngeal.\n\n**⚠️ EARACHE AFTER TONSILLECTOMY IS EXPECTED, NOT A COMPLICATION** — IX pain from the raw bed, **worst days 5–7** as the slough separates, **drum normal**. Treat it: a child who will not swallow becomes **dehydrated**, which `L3` lists as a complication.",
        "qs": [
          "entqb-thr4-168",
          "entqb-thr4-224",
          "entqb-thr4-196",
          "entqb-thr4-172",
          "entep-throat-109",
          "entqb-thr4-201",
          "entqb-thr1-30",
          "entqb-thr4-225"
        ]
      },
      {
        "id": "tons-a4",
        "w": "must",
        "h": "The adenoid — growth curve, and how it differs from the palatine tonsil",
        "body": "**`L3`:** **hypertrophied nasopharyngeal lymphoid tissue** · **very common at 2–6 yrs** · from **infections or allergies** · **can shrink naturally after 6–8 years** · a **smooth soft cushion with many longitudinal ridges**; a **pink single pyramidal mass** (keyed TRUE).\n\n**GROWTH CURVE:** **birth — submucosal** · **2–6 yrs — peak size, maximal symptoms** · **after 6–8 yrs — shrinks** · **~11 yrs (puberty) — involutes** · **adult — adenoidal tissue is a RED FLAG** (nasopharyngeal carcinoma, lymphoma, HIV-associated hyperplasia) *(red flag not taken from the course material)*.\n\n> **⚠️ RECORDED, NOT DISPUTED:** Grade Gain keys involution at **11 years** — give that. **No cached slide states an involution age**; `L3` gives only the 6–8 year shrinkage, and the two are consistent. **\"At 4 years it is a submucosal organ\" is FALSE** — submucosal at birth, peak size at 4.\n\n| | **Adenoid** | **Palatine tonsil** |\n|---|---|---|\n| Number | **Single, midline** pyramid | **Paired**, lateral |\n| **Capsule** | **⚠️ NONE** | **Definite fibrous capsule** |\n| Surface | **Longitudinal ridges/clefts** | **8–30 crypts** + crypta magna |\n| Epithelium | **Pseudostratified columnar ciliated** | Stratified squamous |\n| Afferent lymphatics | **NONE** | **NONE** |\n| Drainage | **Upper deep cervical** + retropharyngeal | **Upper deep cervical**, esp. jugulodigastric |\n\n**⚠️ \"IT HAS A DISTINCT CAPSULE\" IS THE FALSE STATEMENT**, and no capsule explains three things: **adenoidectomy is a CURETTAGE, not a dissection** (no plane) · **regrowth** in the very young, because \"complete removal\" has no anatomical endpoint · **residual tissue is the commonest cause of PRIMARY bleeding** (a vascular tag with nothing to clot against).\n\n**Other keyed falsehoods:** *afferent lymphatic vessels* — FALSE (efferents only) · *vertical crypts* — FALSE (crypts belong to the palatine tonsil). *Drains into upper deep cervical nodes* — **TRUE**.",
        "qs": [
          "entqb-thr4-149",
          "entqb-thr4-150",
          "entqb-thr4-151",
          "entqb-thr4-166",
          "entqb-thr4-173"
        ]
      },
      {
        "id": "tons-b1",
        "w": "must",
        "h": "Pharyngitis — the two classifications, and the four clinical types",
        "body": "**BY ORGANISM (`L3`, complete).** **Viral:** rhinovirus · adenovirus · **Coxsackievirus** · parainfluenza · coronavirus · **EBV** · **HIV** · CMV. **Bacterial:** *\"most important is **Group A beta-haemolytic streptococci (GABHS)**\"* = **Streptococcus pyogenes**, *\"most common cause in **children (1/3 of cases)** & about **10 % in adults**.\"*\n\n> **⚠️ THE CONTRADICTION THE BANK EXPLOITS — READ THE STEM WORD FOR WORD.** Most common **CAUSE** of acute tonsillopharyngitis → **VIRAL**. Commonest causative **ORGANISM** / most recognised **pathogen** → **Streptococcus haemolyticus (S. pyogenes)**. **Both keys are correct; the stems differ.** Pneumococcus, *H. influenzae*, *Moraxella*, *Staph aureus* and diphtheria bacilli are real pharyngeal organisms but none is commonest; **rheumatic fever is a consequence of streptococcal tonsillitis, never a cause.**\n\n**BY SPECIFICITY:**\n\n| | **Acute** | **Chronic** |\n|---|---|---|\n| **Non-specific** | Ordinary viral / bacterial pharyngitis and tonsillitis | Chronic pharyngitis (catarrhal, hypertrophic/granular, atrophic); chronic adenoiditis |\n| **Specific** | **Diphtheria · Scarlet fever · Vincent’s angina · Herpangina · Infectious mononucleosis · Candidiasis** | **Syphilis · Tuberculosis** *(also scleroma, leprosy)* |\n\n**⚠️ \"Chronic SPECIFIC bacterial infection\" → SYPHILIS.** Diphtheria and scarlet fever are specific but **acute**; adenoiditis is chronic but **non-specific**. Both chronic specifics **mimic malignancy** — a chronic pharyngeal ulcer that will not heal needs a **biopsy**. Syphilis: punched-out gumma, **\"wash-leather\"** slough on the soft palate, may perforate. Pharyngeal TB: shallow, **undermined, exquisitely painful** ulcers, usually with lung disease. *(Neither is on any cached slide — not taken from the course material.)* **⚠️ A SECOND BRANCHIAL CLEFT FISTULA IS NOT A PHARYNGITIS AT ALL** — a congenital tract from the tonsillar fossa to the anterior border of sternomastoid; it is the odd one out against Vincent’s, scarlet fever and herpangina *(not taken from the course material)*.\n\n**WHAT DECIDES THE CLINICAL TYPE — three factors:** the **host’s immune mechanism** · the **invading organism and its toxins** · the **tissue response**. The same organism gives different pictures in different patients, so **the appearance does not name the organism** — hence `L3`: *\"**Throat swab generally not helpful!**\"* **⚠️ DEFECT: printed as an \"all EXCEPT\" stem and keyed \"all of the above\", although all three genuinely do determine the type.** Keyed as printed *(three-factor list not taken from the course material)*.\n\n**THE FOUR CLINICAL TYPES** — `L3` names them on a picture slide without describing them *(morphology and depth not taken from the course material)*:\n\n| Type | Appearance | Depth | Organism |\n|---|---|---|---|\n| **Catarrhal (superficial)** | Congestion of the **surface epithelium only**, mucus exudate, **tonsil NOT enlarged** | Surface | Usually **viral** |\n| **Follicular** | **Discrete yellow-white pus plugs at the crypt mouths** — the \"spotted\" tonsil | Crypts | **Bacterial (GABHS)** |\n| **Membranous** | Crypt exudate **coalesces into a sheet** | Surface, confluent | Bacterial, or specific (diphtheria, EBV, Vincent’s) |\n| **Parenchymatous** | **Whole substance inflamed — uniformly enlarged and congested, no surface exudate** | Whole organ | Either |\n\n- **⚠️ THE DISCRIMINATOR: DOES THE TONSIL ENLARGE?** In **superficial (catarrhal/membranous)** disease only surface epithelium is inflamed, so **the tonsil does NOT increase in size** — congestion, fever, dysphagia and thick mucus exudate are all present, enlargement is not. *\"Tonsils will increase in size\" is the FALSE statement.* **Enlargement of the substance defines the PARENCHYMATOUS type.**\n- **⚠️ FOLLICULAR = BACTERIAL.** *\"Non-specific infective **viral** pharyngitis can present with follicular tonsillitis\"* is keyed **FALSE** — pus in crypts means bacteria; viral disease gives catarrhal, membranous or **vesicular** pictures. **TRUE in the same list:** non-infective pharyngitis can be catarrhal or parenchymatous · non-specific bacterial pharyngitis can be membranous · monilial infection is fungal.\n- **⚠️ A SECOND DEFECT:** one option list offers *\"catarrhal\"* and *\"superficial\"* as separate answers when they are synonyms. Recorded as printed — **answer as the bank keys.**",
        "qs": [
          "entep-throat-60",
          "entep-throat-73",
          "entqb-thr4-174",
          "entqb-thr4-176",
          "entqb-thr4-177",
          "entqb-thr4-179",
          "entqb-thr4-208",
          "entqb-thr4-178",
          "entqb-thr4-175",
          "entqb-thr4-180",
          "entqb-thr3-97",
          "entep-throat-case-4"
        ]
      },
      {
        "id": "tons-b3",
        "w": "must",
        "h": "Acute tonsillitis — clinical picture and treatment",
        "body": "**`L3`:** common; **children, peak 5–7 yrs**, and young adults; **viral or bacterial — \"throat swab generally not helpful!\"** **Manifestations, verbatim:** **sore throat, fever, malaise ± referred otalgia** · **severe odynophagia may lead to dehydration** · **tender BILATERAL cervical lymphadenopathy** · **tonsils red and inflamed** ± generalised pharyngitis · **recurrence can lead to chronic tonsillitis**.\n\n> **THE VIGNETTE:** child or teenager **5–15 yrs** · abrupt fever **38.5–39 °C** · severe odynophagia · **tonsils enlarged, erythematous, WHITE PUS** · **TENDER jugulodigastric nodes** · **NO cough, NO rash, NO hoarseness** → **ACUTE BACTERIAL (STREPTOCOCCAL) TONSILLITIS.**\n\n**⚠️ \"NO COUGH\" IS DELIBERATE** — cough and coryza point away from streptococcus. This is the **Centor / McIsaac** pattern: fever >38 °C, tonsillar exudate, tender anterior cervical nodes, **absence of cough**, age 3–14 *(Centor/McIsaac not taken from the course material; the features are)*.\n\n**Why not the others:** *viral pharyngitis* — no pus, cough usual · *mononucleosis* — needs fatigue, **generalised** nodes, hepatosplenomegaly, atypical lymphocytes · *diphtheria* — spreading **membrane**, bull neck, **LOW**-grade fever · *scarlet fever* — needs the **rash and strawberry tongue** · *acute epiglottitis* — drooling, muffled voice, stridor, normal tonsils · *acute otitis media* — the drum is abnormal, the throat is not. **Referred otalgia is glossopharyngeal**, so a child brought in for **earache with a normal drum** may have tonsillitis; **dehydration is what admits the child**, so treat the pain and the child drinks.\n\n**TREATMENT, `L3` complete:** **1** rest and plenty of fluids · **2** symptomatic treatment for viral tonsillitis · **3** bacterial tonsillitis needs antibiotics — **penicillin V or ampicillin/clavulanic acid** · **4 tonsillectomy for recurrent acute (chronic) tonsillitis**.\n\n- **⚠️ FIRST LINE IS PENICILLIN**: GABHS has **never developed penicillin resistance**, and the purpose is **eradication to prevent rheumatic fever and glomerulonephritis**, not shortening a self-limiting sore throat — **so observation/symptomatic treatment is wrong for a proven bacterial tonsillitis, and tonsillectomy is treatment #4, never #1** *(absence of resistance not taken from the course material)*.\n- **⚠️ SECOND LINE WHEN PENICILLIN FAILS: AMOXICILLIN-CLAVULANATE, NOT A BIGGER DOSE** — **indirect pathogenicity**: beta-lactamase-producing crypt commensals (staphylococci, *Haemophilus*, anaerobes) destroy penicillin around the streptococcus without being pathogens, so **raising the dose cannot help — the drug is being destroyed, not out-competed** *(indirect pathogenicity not taken from the course material; clavulanate is on the slide)*.\n- **Before calling it failure check compliance, the diagnosis** (mononucleosis responds to no antibiotic and rashes on an aminopenicillin) **and a complication** (a quinsy needs drainage). **If truly penicillin-allergic:** a macrolide. *(Not taken from the course material.)*\n- **⚠️⚠️ AMPICILLIN / AMOXICILLIN IS CONTRAINDICATED IN INFECTIOUS MONONUCLEOSIS** — hence **penicillin V is preferred to amoxicillin in adolescents**; erythromycin, metronidazole and cephalosporins carry no such risk.\n- **Duration: 10 days of penicillin V.** ⚠️ **Grade Gain keys \"penicillin for 2 weeks\" for scarlet fever** — give that; **no cached slide states any course length**, so the discrepancy is recorded, not corrected *(both durations outside the course material)*. **⚠️ Never operate during an acute attack.**",
        "qs": [
          "entep-throat-111",
          "entqb-thr4-203",
          "entqb-thr4-222",
          "entqb-thr4-230",
          "entqb-thr3-97",
          "entep-throat-case-4",
          "entqb-thr1-30",
          "entqb-thr4-240",
          "entqb-thr4-241",
          "entqb-thr4-200",
          "entqb-thr4-244",
          "entqb-thr4-176"
        ]
      },
      {
        "id": "tons-b5",
        "w": "must",
        "h": "Complications of acute tonsillitis",
        "body": "**1. PERITONSILLAR ABSCESS (QUINSY)** — `L4) PHARYNGEAL SUPPURATIONS.pdf`: pus **between the tonsillar capsule and the lateral pharyngeal wall**, reached **via the crypta magna**; **most frequently adult males**, **usually unilateral**, organism **usually streptococcus haemolyticus**. **Four signs:** **TRISMUS** · **soft palate swollen above and lateral to the tonsil, tonsil pushed DOWN AND MEDIALLY, uvula pushed to the OPPOSITE side** · **cannot swallow even his own saliva** · **torticollis towards the affected side**. A **pale yellowish point** = matured, drainable. **It is itself an indication for tonsillectomy** (`L3`), done **one month after the acute manifestations subside** (`L4`).\n\n> **⚠️ CHAPTER BOUNDARY:** quinsy, parapharyngeal and retropharyngeal abscess and Ludwig’s angina are taught in **`ent-pharsupp`**. What belongs here: it complicates acute tonsillitis, it is an indication for tonsillectomy, and **it DISPLACES the tonsil rather than coating it** — its role in the membrane differential.\n\n**2. RHEUMATIC FEVER · 3. ACUTE GLOMERULONEPHRITIS**, both verbatim from `L3`:\n\n| | **Rheumatic fever** | **Acute glomerulonephritis** |\n|---|---|---|\n| Age | **children 5–15 years** | Children mostly |\n| Latency | **2–3 weeks** after a strept sore throat | ~1–2 weeks after throat or skin infection |\n| Mechanism | **Overreaction of the immune system to GABHS** | Immune-complex deposition |\n| Picture | **Fever, polyarthritis, jerky movements (chorea)**, carditis | **Haematuria, proteinuria, oliguria, high BP, generalised oedema** |\n| Outcome | **Permanent heart damage (rheumatic heart disease)** | **Children recover in weeks; 30 % of ADULTS → chronic kidney disease** |\n| Prevented by | **Eradicating the streptococcus with penicillin** | Same |\n\nThese two are the whole justification for antibiotics in a self-limiting sore throat, and the reason a documented streptococcal tonsillitis gets a **full course**.",
        "qs": [
          "entqb-thr4-176",
          "entqb-thr4-240",
          "entqb-thr4-244",
          "entep-throat-60"
        ]
      },
      {
        "id": "tons-c1",
        "w": "must",
        "h": "⭐ Membrane over the tonsil — the master differential table",
        "body": "> **A TRUE MEMBRANE is fused with the necrotic epithelium beneath — ADHERENT, BLEEDS when peeled, RE-FORMS. Only DIPHTHERIA makes one.** A **FALSE (pseudo)membrane** sits on the surface and **WIPES OFF CLEANLY**: candida, mononucleosis, follicular exudate. *(Histological basis not taken from the course material; \"thick gray **true** membrane\" is verbatim from `L3`.)*\n\n| Cause | Membrane | Where | Clincher | Fever | Treatment |\n|---|---|---|---|---|---|\n| **Diphtheria** | **TRUE — thick, grey, adherent, BLEEDS on removal, extends BEYOND the tonsil** | Bilateral, spreading | **BULL NECK** + marked toxaemia | **LOW** | **Isolation + ANTITOXIN EARLY + antibiotics** |\n| **Infectious mononucleosis** | **False — grey exudate, wipes off** | Bilateral (may look unilateral) | **Fatigue · GENERALISED nodes · hepatosplenomegaly · atypical lymphocytes · palatal petechiae** | High | **Supportive. ⚠️ NO AMPICILLIN** |\n| **Vincent’s angina** | **False — grey slough over a PUNCHED-OUT RAGGED ULCER**, wipes off to a bleeding base | **UNILATERAL**, tonsil + gums | **Foul metallic breath · bleeding gums · poor oral hygiene · patient barely ill** | Low/none | **Penicillin + metronidazole** |\n| **Candidiasis** | **False — white patches \"easily scraped off\"** | Tongue, palate, tonsils | **Denture · ANTIBIOTICS · immunocompromised · NO fever, NO pus** | None | **Antifungal** |\n| **Agranulocytosis / leukaemia** | Greyish necrotic slough over ulcers | Often bilateral | **Systemically ill, bleeding, pallor — the BLOOD FILM diagnoses it** | Variable | Treat the blood disease |\n| **Acute follicular tonsillitis** | Confluent pus plugs that can look membranous | Bilateral | Discrete plugs at crypt mouths, **tender LOCAL nodes**, no cough | **HIGH** | Penicillin |\n| **Post-tonsillectomy slough** | White slough on the beds at 5–15 days | Tonsillar fossae | **NORMAL healing by secondary intention** | None | Reassure |\n\n**⚠️ \"ALL OF THESE CAUSE A MEMBRANE EXCEPT\" — THREE PRINTINGS, THREE ODD-ONES-OUT, EACH CORRECT AGAINST ITS OWN LIST; read the options on the paper.** **(1) PERITONSILLAR ABSCESS** — it **DISPLACES** the tonsil instead of coating it: pus lies *beside* it, its surface is normal, the palate bulges, the uvula shifts, there is trismus. **(2) HERPETIC PHARYNGITIS** — **vesicles breaking into shallow ulcers**, never a sheet. **(3) SCARLET FEVER** — **rash and strawberry tongue**, not a membrane.\n\n**⚠️ NOMENCLATURE:** Grade Gain prints **\"trench fever\"** meaning **Vincent’s angina** (the historical name is **trench MOUTH**; trench *fever* is a louse-borne *Bartonella* illness, nothing to do with the throat). **On the paper it means Vincent’s angina.**",
        "qs": [
          "entep-throat-75",
          "entep-throat-134",
          "entqb-thr4-181",
          "entqb-thr4-221",
          "entqb-thr4-228",
          "entqb-thr4-222"
        ]
      },
      {
        "id": "tons-c2",
        "w": "must",
        "h": "Diphtheria",
        "body": "**`L3`, the whole slide:** **Corynebacterium diphtheriae** · **respiratory droplet** spread · **prevention by vaccination (DPT)** · **thick grey TRUE membrane** · **extreme bilateral cervical LN swelling (BULL NECK)** · the **exotoxin** causes **low-grade fever**, sore throat, **breathing difficulties** · can cause **skin sores and rash** · treatment **isolation and hospital care + antitoxin (start early) + antibiotics**.\n\n- **ORGANISM: a GRAM-POSITIVE BACILLUS** (club-shaped, Chinese-letter arrangement) — keyed **TRUE**.\n- **⚠️ THE MOST IMPORTANT CHARACTERISTIC OF THE MEMBRANE IS THAT IT BLEEDS WHEN REMOVED.** Grey-white colour, extension beyond the tonsil and lymphadenopathy are real but **not specific** — mononucleosis is greyish, Vincent’s extends onto the gums, every tonsillitis has nodes. **Only a TRUE membrane fused to necrotic epithelium bleeds on peeling and re-forms.**\n- **⚠️ RECORDED DEFECT:** one option calls the membrane **\"well-defined\"** where the standard description is **spreading and ILL-defined**. Keyed as printed; noted, not corrected.\n- **THE TOXIN IS THE DISEASE:** marked toxaemia with a **LOW-GRADE fever** — a patient sicker than the temperature suggests. **High fever + pus = ordinary bacterial tonsillitis; low fever + spreading membrane + toxic patient = diphtheria.** Systemically the exotoxin gives **myocarditis** and **peripheral neuropathy**, classically palatal palsy with nasal regurgitation *(not taken from the course material)*.\n- **⚠️ THE COUGH:** *\"causes HOV and **wet** cough\"* is keyed **FALSE** — laryngeal diphtheria gives hoarseness with a **DRY, brassy, croupy cough** and progressive obstruction from membrane in the larynx, the historic reason for emergency tracheostomy *(dry/brassy quality not taken from the course material)*.\n- **⚠️ Do NOT dislodge the membrane at the bedside** — it can be aspirated whole and obstruct the airway.\n- **CONTACTS: \"should receive ACTIVE immunization\" is keyed TRUE** — DPT, as the slide states *(contacts also get antibiotic prophylaxis and surveillance — not taken from the course material)*.\n\n**⚠️ TREATMENT ORDER IS EXAMINABLE: ISOLATE → SECURE THE AIRWAY → ANTITOXIN EARLY → THEN ANTIBIOTICS.** Antitoxin neutralises only *circulating* toxin, so delay means toxin already bound and irreversible; antibiotics stop further production and clear carriage but do nothing to toxin already released.",
        "qs": [
          "entqb-thr4-182",
          "entqb-thr4-221",
          "entqb-thr4-181",
          "entep-throat-134",
          "entqb-thr4-222"
        ]
      },
      {
        "id": "tons-c3",
        "w": "must",
        "h": "Infectious mononucleosis (glandular fever)",
        "body": "**`L3`:** **Epstein-Barr virus** · a **common contagious illness** · **extreme fatigue, sore throat, largely swollen neck lymph nodes**, less commonly **rash + swollen spleen or liver** · **primarily teenagers and young adults** · spread via saliva, the **\"Kissing disease\"** · **supportive treatment — paracetamol, and avoid contact sports to avoid spleen rupture**.\n\n**THE VIGNETTE, clause by clause against bacterial tonsillitis:** **teenager/young adult** (bacterial peaks 5–7) · **extreme fatigue, ill 5+ days** (bacterial is abrupt and short) · **grey membranous exudate on markedly enlarged tonsils** (a membrane, not discrete plugs) · **⚠️ GENERALISED lymphadenopathy + hepatosplenomegaly — THE KEY DISCRIMINATOR**, since bacterial gives **LOCAL tender jugulodigastric** nodes only · **lymphocytosis with ATYPICAL lymphocytes**, which clinches it.\n\n- **⚠️ PALATAL PETECHIAE** are a classic sign and the deciding clause in one vignette *(not taken from the course material)*.\n- The atypical lymphocytes are **not** the infected cells — EBV infects **B lymphocytes**; the large atypical (Downey) cells are **reactive cytotoxic T cells** *(not taken from the course material)*.\n- **DIAGNOSIS: the PAUL-BUNNELL test** (modern **Monospot**) — a **non-specific IgM heterophile antibody**, *not* an anti-EBV antibody, **often falsely negative in week 1 and under ~4 years**, where VCA IgM serology is needed. **A throat swab is not the answer** (`L3`: *\"throat swab generally not helpful!\"*); sputum culture and ulcer swab have no role *(not taken from the course material)*.\n- **⚠️⚠️ AMPICILLIN / AMOXICILLIN IS CONTRAINDICATED** — a **florid itchy maculopapular rash in the great majority**. **This is NOT penicillin allergy** but an immune-complex phenomenon of the acute illness, so **do not label the patient penicillin-allergic for life** *(not taken from the course material)*.\n- **⚠️ SPLENIC RUPTURE** is the reason for the sports restriction — avoid contact sports **at least 3–4 weeks** *(interval not taken from the course material)*. **CORTICOSTEROIDS** have one indication: **airway obstruction from massive tonsillar swelling**; not routine *(not taken from the course material)*.\n\n> **⚠️ TWO DEFECTS, KEYED AS PRINTED.** (1) One treatment question offers **four options all containing an antibiotic**, none of which treats EBV, and levofloxacin has no role — **no option is correct in principle; the key is the least wrong**, *levofloxacin + corticosteroids*, the only pair avoiding **ampicillin**. (2) One vignette gives a **one-day history with a unilateral membrane** and keys mononucleosis, both atypical — **the palatal petechiae are what the examiner intends you to read.**",
        "qs": [
          "entqb-thr4-204",
          "entqb-thr4-205",
          "entqb-thr4-206",
          "entqb-thr4-207",
          "entqb-thr4-200",
          "entqb-thr4-228",
          "entep-throat-case-5",
          "entqb-thr4-181"
        ]
      },
      {
        "id": "tons-c4",
        "w": "must",
        "h": "Vincent’s angina",
        "body": "> **⚠️ APPEARS IN NO CACHED ENT LECTURE — all 34 files searched. Everything below is answered from general medical knowledge and tagged, because the bank asks it FOUR times.** *(Not taken from the course material.)*\n\n**Acute ulcerative infection of tonsil, gums and oropharynx from a fusospirochaetal SYMBIOSIS** — harmless separately, destructive together: **fusiform bacilli** (*Fusobacterium*, **anaerobes**) + **Borrelia vincentii** (a spirochaete). **Both are normal mouth commensals**, pathogenic only when resistance falls — hence the predisposing factors: **poor oral hygiene**, **smoking**, malnutrition, immunosuppression, stress, debilitating illness. (Historical name **trench MOUTH**.)\n\n**THE FIVE CLAUSES:** **UNILATERAL severe sore throat** (bacterial tonsillitis is bilateral) · **PUNCHED-OUT, RAGGED ULCERS** on tonsil and **interdental gingivae** under **greyish slough that wipes off to a bleeding base** · **painful, bleeding gums** · **FOUL breath with a METALLIC taste**, often noticed first · **the patient is remarkably WELL for the state of the throat**, little fever — **that mismatch is the diagnosis.**\n\n**⚠️ THE ULCER EDGE IS AN EXAM POINT IN ITSELF** *(not taken from the course material)*: **punched-out and RAGGED** with grey slough = **Vincent’s** · punched-out but **clean, well-defined, \"wash-leather\" base** = **syphilitic gumma** · **raised, everted, indurated** = **malignancy, biopsy** · shallow, undermined, exquisitely painful = **tuberculosis**. **⚠️ So *\"punched-IN and DEFINED ulcers\"* is the keyed FALSE statement**; *borrelia vincentii*, *poor oral hygiene and smoking* and *foul metallic taste* are all true. **Diagnosis** is clinical, supported by a smear showing fusiform bacilli and spirochaetes.\n\n**⚠️ TREATMENT — BOTH DRUGS, AND THE BANK ASKS WHY: PENICILLIN + METRONIDAZOLE.** Penicillin covers *Borrelia* and the streptococcal flora; **metronidazole covers the ANAEROBIC fusiform bacilli**, which penicillin alone does not reliably clear — **so neither drug alone suffices, and antiviral therapy treats nothing here**. Add **oral hygiene, chlorhexidine, debridement, analgesia**, and **look for the predisposing cause**.\n\n> **⚠️ THE BANK’S OWN BOX SAYS METRONIDAZOLE COVERS \"anaerobic AND aerobic organisms\". IT DOES NOT — ANAEROBES ONLY.** Recorded as printed and corrected here per the standing ruling.\n\n**Distractors to *\"caused by fusiform bacilli?\"*:** scarlet fever = GABHS + rash · herpangina = Coxsackie A vesicles · glandular fever = EBV.",
        "qs": [
          "entep-throat-76",
          "entqb-thr4-183",
          "entqb-thr4-184",
          "entqb-thr4-242",
          "entqb-thr4-181",
          "entqb-thr4-178"
        ]
      },
      {
        "id": "tons-c5",
        "w": "high",
        "h": "Scarlet fever",
        "body": "> **⚠️ Scarlet fever appears in no cached ENT slide — only its cause (GABHS) and its sequelae are on `L3`. The rest is from general medical knowledge and tagged.**\n\n**Streptococcal tonsillitis PLUS a rash** — the same GABHS infection in a patient with no immunity to the strain’s **erythrogenic (pyrogenic) exotoxin**. No separate organism: **throat culture is positive for group A streptococci** (keyed TRUE).\n\n1. **ABRUPT onset — fever, headache, sore throat, dysphagia, vomiting** (keyed TRUE).\n2. **Tonsillitis** — inflamed tonsils ± exudate, tender cervical nodes.\n3. **ENANTHEM (mouth): tongue coated white with red papillae showing through = \"WHITE STRAWBERRY TONGUE\"; the coat desquamates by day 4–5 to the \"RED STRAWBERRY TONGUE.\"** The most examined feature.\n4. **EXANTHEM (skin): fine punctate erythema, SANDPAPER texture**, from neck and upper trunk, **sparing palms and soles**, with **circumoral pallor** and **Pastia’s lines** in the creases.\n5. **The RASH fades in 3–4 days, then ~a WEEK later DESQUAMATION** of fingertips and toes.\n\n**⚠️ THE TRAP — EXANTHEM vs ENANTHEM.** *\"**Enanthem** resolves in 3-4 days\"* is keyed **FALSE**: the **EXANTHEM (skin rash)** fades in 3–4 days then desquamates; the **ENANTHEM (strawberry tongue)** evolves white → red and **outlasts it**.\n\n**⚠️ THE DECIDING CLAUSE: \"peeling of skin that started 7 days after the skin rash.\"** **Nothing else in this chapter desquamates** — not mononucleosis, not diphtheria, and *acute non-infective tonsillitis* gives neither rash nor strawberry tongue.\n\n**TREATMENT — a FULL course of penicillin, not symptomatic care**, because eradication **prevents rheumatic fever (5–15 yrs, 2–3 weeks later) and acute glomerulonephritis**. ⚠️ **Grade Gain keys \"penicillin for 2 weeks\"** where the standard is **10 days of penicillin V** — keyed as printed, discrepancy noted. **Amoxicillin-clavulanate is second line**, and **\"conservative management as it is self-limited\" is wrong** for the reason above. Non-infectious after **~24 hours** of antibiotics. **Not in the membrane differential:** a rash and strawberry tongue, not a tonsillar membrane.",
        "qs": [
          "entqb-thr4-185",
          "entqb-thr4-243",
          "entqb-thr4-244",
          "entqb-thr4-181",
          "entqb-thr4-178"
        ]
      },
      {
        "id": "tons-c6",
        "w": "high",
        "h": "The viral group, and fungal pharyngitis",
        "body": "**THE UNIFYING RULE: VIRUSES MAKE VESICLES. Site and season name the virus.**\n\n| | **Herpangina** (`L3`) | **Herpes simplex** (`L3`) |\n|---|---|---|\n| Virus | **Coxsackievirus (Coxsackie A**, an enterovirus) | **HSV** |\n| Picture | **Fever, sore throat, pain**; **sores, blisters or ulcers** | **Fever, sore throat, pain**; **gingivostomatitis** |\n| **Site** | **POSTERIOR — soft palate, uvula, tonsils, back of throat** | **ANTERIOR — gums, lips, tongue, inner cheeks** |\n| **Season** | **Summer** | **No seasonal preference** |\n| Treatment | **Symptomatic** | **Aciclovir** |\n\n- **⚠️ The POSTERIOR location is the whole herpangina discriminator.** Being an enterovirus explains **summer timing** and **faecal-oral spread**; **dehydration from painful swallowing is the only real risk**. **Check hands and feet** — the same family causes **hand, foot and mouth disease** (herpangina *plus* a peripheral rash), the near-miss distractor when no peripheral rash is described *(not taken from the course material)*.\n- **⚠️ HERPETIC PHARYNGITIS is the \"membrane differential, all EXCEPT\" answer** in one endpoint printing — **vesicles and shallow ulcers, never a sheet**.\n\n**HERPES ZOSTER** (`L3`): **reactivation of varicella-zoster virus** · in **glossopharyngeal (IX) and vagus (X)** it is **RARE**, **trigeminal (V) commoner** · **UNILATERAL sore throat, painful vesicles along the affected nerve** · **early antiviral (famciclovir)** to avoid **post-herpetic neuralgia**. **⚠️ ZOSTER NEVER CROSSES THE MIDLINE — the keyed FALSE statement**, because the virus lies dormant in **ONE sensory ganglion** *(mechanism not taken from the course material)*. **The other three options are TRUE:** reactivation of dormant varicella · association with **Ramsay Hunt syndrome** · lesions along the **trigeminal** nerve. **Ramsay Hunt** = zoster of the **geniculate ganglion**: facial palsy + vesicles in concha/canal + severe otalgia, often with hearing loss and vertigo (consistent with `L15) Facial nerve disorders.pdf`). **⚠️ \"EARLY\" is operative** — antivirals within ~72 h reduce post-herpetic neuralgia; later they do little.\n\n**FUNGAL PHARYNGITIS — CANDIDIASIS (MONILIASIS)**, `L3` complete: **most commonly Candida albicans** · commoner in **denture wearers, antibiotic treatment, immunocompromised after chemoradiotherapy** · **white patches easily scraped off** · **topical and systemic antifungal treatment**. **⚠️ It is the commonest oral fungal infection** — aspergillosis, histoplasmosis and cryptococcosis are rare and confined to the deeply immunocompromised.\n\n| White lesion in the mouth | Scrapes off? | What it is |\n|---|---|---|\n| **Candidiasis** | **YES — leaving a red, sometimes bleeding base** | Fungal infection |\n| **Leukoplakia** | **NO — adherent** | **Potentially malignant — biopsy** |\n| **Diphtheritic membrane** | **NO — adherent, bleeds, re-forms** | True membrane |\n| Lichen planus | No | Lacy white striae |\n\n*(Leukoplakia and lichen planus contrasts not taken from the course material.)*\n\n- **⚠️ CANDIDA IS AN OPPORTUNIST — the exam point.** A harmless commensal causing disease only when defences fail, which is exactly the lecture’s three settings: **denture** (warm moist unwashed surface) · **antibiotics** (competing flora wiped out) · **immunocompromise after chemoradiotherapy** — and by the same logic **HIV**, which `L3` lists among the viral causes of pharyngitis. **⚠️ Unexplained thrush in an adult who is neither a denture wearer nor on antibiotics raises HIV, DIABETES or occult malignancy**; it is a classic **oral marker of HIV** alongside oral hairy leukoplakia and Kaposi’s sarcoma — which is why *oral candidiasis*, not herpangina, scarlet fever or diphtheria, is the HIV-opportunistic answer *(not taken from the course material)*.\n- **⚠️ THE FREE-TEXT CASE:** *4-year-old · dysphagia · **NO fever** · **antibiotics for 10 days** · **white-coated tongue** · **no pus*** → **moniliasis**. **Every clause is a negative excluding bacterial tonsillitis**, and the antibiotic history is the cause. **Treatment:** topical (nystatin, miconazole) **and** systemic (fluconazole) if extensive or immunocompromised, **plus removing the cause** *(drug names not taken from the course material)*.",
        "qs": [
          "entqb-thr4-187",
          "entqb-thr4-245",
          "entqb-thr4-246",
          "entqb-thr4-189",
          "entep-throat-75",
          "entqb-thr4-178",
          "entqb-thr4-188",
          "entqb-thr4-202",
          "entep-throat-case-1",
          "entqb-thr4-177"
        ]
      },
      {
        "id": "tons-d1",
        "w": "must",
        "h": "⚠️ Chronic tonsillitis and chronic pharyngitis",
        "body": "**THE DEFINITION ANSWERS MOST OF THESE QUESTIONS.** `L3` never describes an appearance; it defines chronic tonsillitis by **recurrence**, twice — *\"recurrence can lead to chronic tonsillitis\"* and *\"recurrent acute tonsillitis (chronic tonsillitis)\"* with the three episode thresholds.\n\n> **CHRONIC TONSILLITIS = RECURRENT ATTACKS OF ACUTE TONSILLITIS.** **Not** a continuously sore throat, **not** a single quinsy, **not** recurrent rheumatic fever. Diagnosed by **counting documented episodes**, not by looking at the tonsil.\n\n**SIGNS OF CHRONICITY:** **cheesy material oozing from the crypts on pressure over the anterior pillar** — retained debris, the most specific single sign · **congestion of the ANTERIOR PILLAR** · **FIRM, ENLARGED, NON-TENDER jugulodigastric nodes** (tender means acute) · **irregularity in size and shape, irregular enlarged crypts** from scarring · hypertrophy **or** a small fibrotic \"septic\" tonsil — **size alone means little, both extremes occur**. **⚠️ THE SUBMANDIBULAR SALIVARY GLAND IS NOT A SIGN** — the tonsil drains to the jugulodigastric / upper deep cervical nodes, and endpoint keys it the odd one out.\n\n> **⚠️⚠️ A GENUINE CROSS-BANK DIVERGENCE — READ THE OPTION LIST. The same four options, keyed differently, and the whole difference is ONE WORD.**\n> - **Endpoint:** enlarged tonsillar crypts · non-tender jugulodigastric nodes · cheesy material · **congestion of the anterior pillar** → keys **anterior pillar congestion** as NOT a sign.\n> - **Grade Gain:** cheesy material · anterior pillar congestion · firm non-tender nodes · **enlarged REGULAR tonsillar crypts** → keys **enlarged REGULAR crypts**.\n>\n> **\"Regular\" decides it:** enlarged but **regular** crypts are normal variation, enlarged **IRREGULAR** crypts oozing cheesy material are chronicity. With the qualifier the crypt option is the odd one out and pillar congestion is a real sign (standard teaching); without it, endpoint’s list holds two candidates and keys the other. **⚠️ Endpoint reprinted its key three times, including in its own \"Recently Edited Questions\" errata — a settled position, not a slip. Answer each bank its own way.** *(No cached slide lists the signs — the sign list is not taken from the course material; the definition by recurrence is.)*\n\n**⚠️ THE NODE RULE, ASKED DIRECTLY: bilateral, firm, NON-TENDER jugulodigastric nodes in an eight-year-old = chronic tonsillitis.** Diphtheria, quinsy and Vincent’s all give **TENDER** nodes.\n\n**CHRONIC PHARYNGITIS — FOUR TYPES** *(no cached slide describes it; classification not taken from the course material — the CAUSES are on `L3`, in the adenoid picture)*: **chronic catarrhal** — diffusely congested boggy mucosa, excess mucus · **⚠️ chronic HYPERTROPHIC (granular)** — a **GRANULAR posterior pharyngeal wall, hypertrophied lymphoid follicles standing out as red granules**, often with hypertrophied lateral pharyngeal bands · **chronic atrophic** — **dry, thin, glazed, shiny** mucosa with crusting, often with atrophic rhinitis · **chronic follicular** — overlaps with hypertrophic.\n\n**⚠️ \"GRANULAR PHARYNGEAL WALL\" → CHRONIC HYPERTROPHIC** — hypertrophied follicles responding to chronic irritation; the opposite of the dry glazed atrophic wall, and more than the diffuse congestion of the catarrhal type.\n\n**CAUSES (`L3`):** chronic **MOUTH BREATHING** with **dry lips, tongue and pharynx**, and **chronic nasal discharge with post-nasal drip** — unconditioned cold dry unfiltered air and infected secretions crossing the pharynx all night. Add smoking, occupational dust, reflux *(not taken from the course material)*. **Treat the CAUSE, not the pharynx** — which is why a granular pharynx in a mouth-breathing child is an argument for dealing with the **adenoid**.",
        "qs": [
          "entep-throat-77",
          "entqb-thr4-224",
          "entqb-thr4-223",
          "entqb-thr4-225",
          "entep-mfe4-26",
          "entqb-thr3-98",
          "entqb-thr4-191",
          "entqb-thr4-208"
        ]
      },
      {
        "id": "tons-d3",
        "w": "must",
        "h": "Tonsillar hypertrophy, kissing tonsils, and the unilateral tonsil",
        "body": "**HYPERTROPHY IS A SIZE FINDING, INDEPENDENT OF INFLAMMATION.** `L3` has a picture slide headed **\"KISSING TONSILS\"** and lists as an indication **bilateral tonsillar hypertrophy causing airway obstruction, difficulty in deglutition and/or interference with speech**.\n\n**⚠️ \"KISSING TONSILS\" = TONSILS TOUCHING IN THE MIDLINE FROM HYPERTROPHY = GRADE 4.** Not inflamed tonsils, not deep crypts, not cysts. **BRODSKY GRADING:** **0** within the fossa · **1** <25 % · **2** 25–50 % · **3** 50–75 % · **4 >75 %, meeting in the midline** *(not taken from the course material — no cached slide grades the tonsil; \"grade 4 = kissing tonsils\" is the bank’s own, keyed TRUE)*. **⚠️ THE GRADE NEVER DECIDES THE OPERATION — THE SYMPTOMS DO:** a grade 4 tonsil in a child who sleeps and eats normally is not an indication; a grade 3 tonsil with witnessed apnoeas is.\n\n**THE CHRONIC HYPERTROPHIC PICTURE:** *dysphagia, sleep apnoea, tonsils touching the midline*, **NO fever** → **chronic hypertrophic tonsillitis** — not acute tonsillitis (fever, pus), not quinsy (unilateral, trismus, uvula displaced), not retropharyngeal abscess (infant, fever, stiff neck). `L9) Snoring & OSA.pdf` lists **adenoid (most common cause in children), tonsillar hypertrophy, bulky base of tongue** among causes of pharyngeal obstruction, answered by **tonsillectomy** or **laser tonsillotomy**.\n\n**⚠️⚠️ UNILATERAL TONSILLAR ENLARGEMENT IS CANCER UNTIL BIOPSY SAYS OTHERWISE.** `L3`, sixth indication: **suspicion of tonsillar malignancy — unilateral enlarged tonsil, lymphoma or epidermoid carcinoma**, with a picture slide \"TONSIL LYMPHOMA / TONSIL CARCINOMA\". **The tonsillectomy IS the biopsy.**\n\n| Tonsillar tumour | Nature |\n|---|---|\n| **Squamous cell (epidermoid) carcinoma** | **Malignant** — commonest; smoking, alcohol, HPV |\n| **Lymphoma** | **Malignant** — the other one `L3` names |\n| **Lymphoepithelioma** | **Malignant** — undifferentiated carcinoma with lymphoid stroma |\n| **Adenocarcinoma** | **Malignant** — from minor salivary glands |\n| **⚠️ Schwannoma** | **BENIGN** — smooth submucosal nerve-sheath tumour |\n\n*(Schwannoma and lymphoepithelioma not taken from the course material; the lymphoma / epidermoid carcinoma pairing is verbatim.)*\n\n**TONSILLOLITHS** get their own picture and their own indication — **tonsilloliths with unpleasant halitosis**: calcified crypt debris, harmless but socially disabling, and a legitimate reason to operate.",
        "qs": [
          "entqb-thr4-172",
          "entqb-thr4-168",
          "entqb-thr4-197",
          "entqb-thr3-98"
        ]
      },
      {
        "id": "tons-e1",
        "w": "must",
        "h": "⭐ Indications for tonsillectomy — the six, with the numbers",
        "body": "`L3`, complete. **Learn all six and the numbers exactly — the distractors are near-misses.**\n\n1. **RECURRENT ACUTE TONSILLITIS (chronic tonsillitis)** — **7+ documented episodes in ONE year**, **or 5+ for 2 YEARS**, **or 3+ for 3 YEARS**.\n2. **PERITONSILLAR ABSCESS (quinsy).**\n3. **TONSILLITIS CAUSING FEBRILE SEIZURES.**\n4. **BILATERAL TONSILLAR HYPERTROPHY** causing **airway obstruction, difficulty in deglutition and/or interference with speech**.\n5. **TONSILLOLITHS WITH UNPLEASANT HALITOSIS.**\n6. **SUSPICION OF TONSILLAR MALIGNANCY** — **unilateral enlarged tonsil**, lymphoma or epidermoid carcinoma.\n\n> **⚠️ THE 7/5/3 RULE IS A TRAP BECAUSE THE DURATION MATTERS AS MUCH AS THE COUNT.** Distractors: *4 episodes per year* · *5 episodes per year* with no duration · *2 per year for 3 years*. The key is **6 episodes per year for two years** — 6 ≥ 5 **and** it ran two years. **Five attacks in a single year does NOT qualify** (7 is the one-year threshold). **Test every option against all three thresholds.**\n\n**⚠️ \"DOCUMENTED\" DOES REAL WORK** — episodes **recorded by a clinician** (sore throat, fever, exudate, adenopathy or positive culture), not remembered by a parent *(elaboration not taken from the course material; the word is on the slide)*. **⚠️ EVERY INDICATION IS A CONSEQUENCE, NEVER TONSIL SIZE:** \"the tonsils are big\" is not an indication, and **\"loss of appetite\" is not an indication** — an association, keyed as the odd one out.",
        "flow": {
          "title": "Should this tonsil come out?",
          "steps": [
            {
              "k": "decision",
              "t": "Unilaterally enlarged tonsil, or suspicion of malignancy?",
              "yes": "⚠️ TONSILLECTOMY AS A BIOPSY — lymphoma or epidermoid carcinoma until proved otherwise",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Obstruction — sleep apnoea, difficult swallowing, speech interference?",
              "yes": "TONSILLECTOMY (± adenoidectomy)",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Quinsy, or a febrile seizure with tonsillitis?",
              "yes": "TONSILLECTOMY — quinsy operated one month after the acute episode settles",
              "no": "Continue"
            },
            {
              "k": "step",
              "t": "Count DOCUMENTED episodes of acute tonsillitis",
              "n": "7 in one year · OR 5+/year for 2 years · OR 3+/year for 3 years"
            },
            {
              "k": "decision",
              "t": "Does the count reach any one threshold?",
              "yes": "TONSILLECTOMY for chronic (recurrent acute) tonsillitis",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Tonsilloliths with disabling halitosis?",
              "yes": "TONSILLECTOMY",
              "no": "No indication — treat medically, keep a documented record"
            },
            {
              "k": "alert",
              "t": "⚠️ NEVER OPERATE DURING AN ACUTE ATTACK",
              "n": "Defer 3–6 weeks: friable hyperaemic tissue, spreading sepsis, a harder airway"
            },
            {
              "k": "alert",
              "t": "⚠️ CHECK FOR A BLEEDING DISORDER FIRST",
              "n": "Haemophilia is the ABSOLUTE contraindication. The mandatory investigation is a CBC"
            }
          ]
        },
        "qs": [
          "entqb-thr4-193",
          "entqb-thr4-161",
          "entqb-thr4-160",
          "entqb-thr4-172",
          "entqb-thr4-223",
          "entqb-thr4-197",
          "entep-throat-case-4",
          "entqb-thr3-98"
        ]
      },
      {
        "id": "tons-e2",
        "w": "must",
        "h": "Tonsillectomy — contraindications, work-up and techniques",
        "body": "> **⚠️ NO CACHED SLIDE LISTS THE CONTRAINDICATIONS. The list is from general medical knowledge plus what `L3` says about bleeding, and is tagged.**\n\n**⚠️ THE ABSOLUTE CONTRAINDICATION IS A BLEEDING DISORDER — HAEMOPHILIA IS THE ANSWER BOTH BANKS KEY.** The reason is anatomical: the beds heal **by SECONDARY INTENTION** over ~2 weeks, so **there is no wound to close** — a raw, vascular, uncompressible surface bathed in saliva. `L3` names **blood disease e.g. haemophilia, leukaemia** among causes of haemorrhage, and records that **anaesthesia complications and haemorrhage account for the majority of deaths**.\n\n| | Contraindication | Why |\n|---|---|---|\n| **ABSOLUTE** | **Bleeding disorder — haemophilia, leukaemia, thrombocytopenia, uncorrected coagulopathy** | Secondary-intention healing over ~2 weeks |\n| **ABSOLUTE** | **Overt or submucous CLEFT PALATE** (relative in some units) | Tonsils and posterior pillars help velopharyngeal closure → permanent hypernasality |\n| **RELATIVE / TEMPORARY** | **⚠️ ACUTE TONSILLITIS or any acute infection** | Friable oedematous tissue bleeds more, spreading sepsis, harder airway. **DEFER 3–6 WEEKS** (exception: deliberate \"hot\" tonsillectomy for quinsy) |\n| **RELATIVE** | Uncontrolled systemic disease — poor diabetic control, uncontrolled hypertension, active cardiac/respiratory disease | Anaesthetic and healing risk. **⚠️ WELL-CONTROLLED diabetes is NOT a contraindication** — a distractor |\n| **RELATIVE** | Poliomyelitis epidemic; immediate post-vaccination period | Historical, still printed |\n| **RELATIVE** | Age under about 3 years | Anaesthetic risk, blood volume; **overridden by OSA** |\n\n**⚠️ THE TRAP: CHRONIC TONSILLITIS, QUINSY, SEPTIC ATROPHIC TONSILS AND HYPERTROPHY CAUSING SLEEP APNOEA ARE INDICATIONS, NOT CONTRAINDICATIONS** — all offered as distractors, and **\"below 5 years\" is not a bar either**: young age is often the *reason* to operate.\n\n**⚠️ THE MANDATORY PRE-OPERATIVE INVESTIGATION IS A CBC** — **haemoglobin** and **platelet count**, because the question is *can this patient bleed, and can they afford to?* **ESR and CRP** are inflammatory markers saying nothing about safety; **ASOT** records past streptococcal exposure and changes nothing. Add a **coagulation screen** where the history suggests it, and **take a bleeding history of patient AND family** *(not taken from the course material)*. Also: stop **aspirin and NSAIDs** (*\"no aspirin for 10 days\"* is keyed correct) · **congenital heart disease** needs intensive monitoring · **examine the palate for a bifid uvula or notched hard palate**.\n\n**TECHNIQUES — `L3`, all five with its own trade-offs:**\n\n| # | Technique | Trade-off |\n|---|---|---|\n| **1** | **Cold dissection / ligation** — scissors, scalpel or snare, **no heat** | **Minimises tissue damage but MORE INTRAOPERATIVE BLEEDING** |\n| **2** | **Electrocautery (diathermy)** — high-frequency current cuts and seals vessels | **Reduces intraoperative bleeding but INCREASES POSTOPERATIVE PAIN** |\n| **3** | **Coblation** — **bipolar radiofrequency plasma field**, dissolves tissue at **40–70 °C** | **Less tissue damage, faster recovery** |\n| **4** | **Microdebrider** — **powered rotatory shaver**, for **PARTIAL tonsillectomy (tonsillotomy)** for **airway obstruction in children** | **Faster recovery, less pain** |\n| **5** | **Others** | **LASER** and **harmonic scalpel** |\n\n**⚠️ TWO TEMPERATURES ARE EXAMINABLE: COBLATION 40–70 °C · CAUTERY ~400 °C** (both printed by `L3`; the 400 °C figure is on the adenoidectomy slide) — a ten-fold difference in thermal injury, and the whole argument for coblation. **⚠️ THE CENTRAL TRADE-OFF, ASKED BOTH WAYS: COLD → less thermal damage, MORE bleeding on the table; HOT → less bleeding, MORE pain afterwards. Neither is simply better.**\n\n| | **EXTRACAPSULAR (total)** | **INTRACAPSULAR (partial / tonsillotomy)** |\n|---|---|---|\n| Removed | **Entire tonsil and capsule, exposing the superior constrictor** | **Majority of tonsil, capsule LEFT to protect the muscle** |\n| Pain | More | **Reduced**, and less bleeding |\n| Suits | **Recurrent INFECTION** — nothing left to reinfect | **OBSTRUCTION** — enough bulk removed to open the airway |\n| Drawback | Pain, bleeding from an exposed muscle bed | ⚠️ **Residual tissue can REGROW and still become infected** |\n\n**⚠️ \"Which technique is LEAST associated with postoperative pain and haemorrhage?\" IS ANSWERED BY THE PRINCIPLE, NOT THE INSTRUMENT: a SUBTOTAL / PARTIAL (intracapsular) procedure**, whatever tool performs it, **because the capsule stays over the superior constrictor and the raw muscle bed is never exposed.** Cold dissection with a snare bleeds more, electrocautery hurts more, and the harmonic scalpel is another energy source doing a **total** tonsillectomy *(regrowth caveat not taken from the course material)*.",
        "qs": [
          "entep-throat-124",
          "entqb-thr4-192",
          "entqb-thr4-226",
          "entep-throat-59",
          "entqb-thr4-162",
          "entqb-thr4-164",
          "entqb-thr4-194",
          "entqb-thr4-163",
          "entqb-thr4-172"
        ]
      },
      {
        "id": "tons-e4",
        "w": "must",
        "h": "⭐⭐ Post-tonsillectomy and post-adenoidectomy HAEMORRHAGE",
        "body": "`L3`, verbatim: **haemorrhage in less than 5 % of cases** — **Primary: during time of surgery. Reactionary: within the first 24 hours (high BP, slipped ligature, dislodged clot). Secondary: due to 2ry infection, usually 5–10 days post-op.**\n\n| | **PRIMARY** | **REACTIONARY** | **SECONDARY** |\n|---|---|---|---|\n| **WHEN** | **During the operation** | **Within 24 HOURS** (classically 6–12 h) | **5–10 DAYS** (the bank also prints 6 days, 7 days, \"one week\", 10 days) |\n| **WHY — tonsillectomy** | Surgical trauma to vessels; a bleeding disorder | **High BP returning to baseline · SLIPPED LIGATURE · DISLODGED CLOT** | **INFECTION of the granulating bed → the protective SLOUGH SEPARATES off an unsealed surface** |\n| **WHY — adenoidectomy** | **⚠️ REMNANT ADENOID TISSUE** (no capsule); **blood disease — haemophilia, leukaemia**; **wrong diagnosis, ANGIOFIBROMA**; injury to a prominent atlas | **⚠️ DISLODGED CLOT** — *nothing is ligated in an adenoidectomy, so a slipped ligature cannot be the cause* | Infection, as for tonsillectomy |\n| **MANAGEMENT** | Control on the table — pressure, ligature, cautery | **Return to theatre** if brisk: examine the fossa, remove clot, secure the bleeder | **ADMIT · OBSERVE · IV ANTIBIOTICS · IV FLUIDS.** Surgery only if heavy or persistent |\n\n| Vignette | Answer |\n|---|---|\n| Bleeding **during** the operation | **PRIMARY** (adenoid: **residual tissue**, or a blood disease) |\n| Bleeding **within 2 hours** of tonsillectomy | **Reactionary — SLIPPED LIGATURE** |\n| **Rapid pulse at 20 hours**, no visible bleeding | **⚠️ REACTIONARY — the child is SWALLOWING blood** |\n| Bleeding **12 hours** after adenoidectomy | **REACTIONARY** — and there that means a **dislodged clot** |\n| Bleeding at **6–10 days / \"one week\"** | **SECONDARY — wound INFECTION**; not a slipped ligature, not coagulopathy, not trauma from food |\n| **Fever, worsening pain, foul breath at 7 days**, no bleeding | **SECONDARY INFECTION — the precursor of secondary haemorrhage** |\n\n- **⚠️⚠️ A RISING PULSE IS THE FIRST SIGN OF A CHILD SWALLOWING BLOOD**, and **falling BP is a LATE sign in children** — they compensate until they suddenly do not, so **look in the mouth**. Hence **monitoring pulse and blood pressure for reactionary haemorrhage is the primary concern of postoperative care**, ahead of sleep disturbance, inspecting the beds for infection, or any topical steroid *(compensation physiology not taken from the course material)*. Also watch for **repeated swallowing**, pallor and restlessness, and nurse in the **recovery (lateral, head-down) position**.\n- **⚠️ ADMIT EVERY SECONDARY BLEED, HOWEVER SMALL.** Both banks print the child who spits *\"a few blood drops\"* and then progresses: **a herald bleed can precede a major one**, swallowed blood hides the loss, and **a near-normal Hb (11.5) means no transfusion is needed, not that the child can go home.** Management is **admission, observation, IV antibiotics** — immediate ligation, immediate transfusion, tracheostomy and embolisation are all wrong first answers, and **although antibiotics are essential and the cause is sepsis, surgery is NOT mandatory**; it is for heavy or continuing bleeding *(herald-bleed rule not taken from the course material)*.\n- **⚠️ \"DELAYED HAEMORRHAGE\" IS NOT A CATEGORY** — the three are primary, reactionary, secondary.\n- **⚠️ THE WHITE SLOUGH AT ONE WEEK IS NORMAL HEALING.** `L3`: **healing is by SECONDARY INTENTION with the appearance of a white slough**, illustrated at **5, 10 and 15 days**. **Do not treat the slough — treat the patient:** fever, worsening pain and halitosis mean infection; a clean slough in a comfortable child means healing on schedule.",
        "flow": {
          "title": "Bleeding after tonsillectomy or adenoidectomy",
          "steps": [
            {
              "k": "decision",
              "t": "Is the bleeding DURING the operation?",
              "yes": "PRIMARY — control on the table. After adenoidectomy think RESIDUAL ADENOID TISSUE",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Is it WITHIN 24 HOURS?",
              "yes": "REACTIONARY — high BP, slipped ligature (tonsil) or dislodged clot (adenoid)",
              "no": "5–10 days means SECONDARY"
            },
            {
              "k": "alert",
              "t": "⚠️ RISING PULSE WITH NO VISIBLE BLEEDING = A SWALLOWED BLEED",
              "n": "Look in the mouth. Falling BP is a LATE sign in a child"
            },
            {
              "k": "step",
              "t": "REACTIONARY — resuscitate, examine the fossa, remove clot",
              "n": "Theatre if brisk or continuing"
            },
            {
              "k": "step",
              "t": "SECONDARY — ADMIT, OBSERVE, IV ANTIBIOTICS, IV FLUIDS",
              "n": "An infection problem before a surgical one"
            },
            {
              "k": "decision",
              "t": "Heavy, or continuing despite treatment?",
              "yes": "THEATRE — examine under GA, secure the bleeding point",
              "no": "Continue antibiotics; group and save, transfuse only for a genuinely low Hb"
            },
            {
              "k": "alert",
              "t": "⚠️ ADMIT EVERY SECONDARY BLEED, HOWEVER SMALL",
              "n": "A few drops can herald a major bleed, and swallowed blood hides the loss"
            }
          ]
        },
        "qs": [
          "entep-throat-18",
          "entep-throat-87",
          "entep-throat-117",
          "entep-throat-132",
          "entep-throat-133",
          "entep-nose-51",
          "entep-mfe4-25",
          "entep-mfe5-37",
          "entep-mfe5-38",
          "entep-mfe5-39",
          "entqb-thr4-195",
          "entqb-thr4-198",
          "entqb-thr4-199",
          "entqb-thr4-229",
          "entqb-thr4-231",
          "entqb-thr4-173",
          "entqb-thr4-215",
          "entep-throat-case-18"
        ]
      },
      {
        "id": "tons-e5",
        "w": "must",
        "h": "The other nine complications of tonsillectomy",
        "body": "`L3`, items 2–10. **Some are asked directly and the rest are distractors, so the whole list is needed.**\n\n| # | Complication | `L3` |\n|---|---|---|\n| **2** | **DEHYDRATION** | **poor fluid intake caused by PAIN** — the commonest reason a child returns |\n| **3** | **DENTAL INJURY** | **intubation or mouth gag insertion** — document loose teeth first |\n| **4** | **LINGUAL NERVE PALSY** | **prolonged mouth gag tongue-blade pressure, usually temporary** — numbness and loss of taste, anterior tongue |\n| **5** | **⚠️ INTERNAL CAROTID ARTERY INJURY** | **catastrophic — deep tonsillar bed cautery, suturing or dissection** |\n| **6** | **UVULAR OEDEMA** | **bilateral obstruction of uvular veins — may cause respiratory obstruction** |\n| **7** | **VELOPHARYNGEAL INCOMPETENCE** | **regurgitation of fluid from the nose and nasal tone of voice** — usually temporary from **palatal paresis**, **may be permanent** from **palatal shortening from fibrosis** |\n| **8** | **OROPHARYNGEAL STENOSIS** | **excessive cautery tissue injury, very difficult to treat** — the argument against over-using diathermy |\n| **9** | **CHEST COMPLICATIONS \"including pneumonia\"** | **aspiration during or immediately after surgery** |\n| **10** | **⚠️ ANAESTHESIA COMPLICATIONS AND HAEMORRHAGE ACCOUNT FOR THE MAJORITY OF DEATHS** | Printed on the slide; it justifies the whole work-up and observation protocol |\n\n- **⚠️ THE CAROTID, ASKED AS ITS OWN QUESTION: the risk of deep cauterisation near the LATERAL tonsillar fossa is haemorrhage from the internal carotid** (anatomy in the palatine-tonsil section) — **not** lingual nerve palsy (that is the mouth gag), **not** airway obstruction, **not** pulmonary oedema.\n- **⚠️ PAIN CLASSICALLY WORSENS AROUND DAYS 5–7, NOT IMPROVES**, as the slough separates and referred glossopharyngeal otalgia peaks — warn the patient *(not taken from the course material)*.\n- **⚠️ NEGATIVE-PRESSURE PULMONARY OEDEMA** — pulmonary oedema shortly after relief of long-standing upper airway obstruction, seen after adenotonsillectomy for severe OSA, and the reason a severely obstructed child is monitored rather than discharged the same afternoon *(not taken from the course material — offered as a distractor)*.",
        "qs": [
          "entqb-thr4-196",
          "entqb-thr4-192",
          "entqb-thr4-229",
          "entqb-thr4-199",
          "entep-throat-109",
          "entqb-thr4-233"
        ]
      },
      {
        "id": "tons-f1",
        "w": "must",
        "h": "⭐ Adenoid hypertrophy — the two obstructions, and why it is an ear disease",
        "body": "`L3` builds the whole picture from **TWO obstructions**. Every question sits inside it.\n\n**1. CHRONIC NASAL OBSTRUCTION**\n\n| Consequence | `L3` |\n|---|---|\n| **MOUTH BREATHING** | **snoring ± sleep apnoea · dry bleeding gums · dry lips, tongue and pharynx · DENTAL CARIES** |\n| **CHRONIC NASAL DISCHARGE & POST-NASAL DRIP** | **chronic irritant cough**, and even **laryngismus stridulus** |\n| **⚠️ CHRONIC CO₂ RETENTION (HYPERCAPNIA)** | **lassitude, dullness, nightmares, NOCTURNAL ENURESIS** |\n| **NASAL TONE OF VOICE** | Rhinolalia clausa |\n| **RETARDED GENERAL GROWTH** | — |\n| **⚠️ ADENOID FACIES** (all eight) | **Open mouth · Thick lips · Hitched-up upper lip · Protruding upper incisors · Receding chin · ⚠️ INACTIVE ala nasi · Absent nasolabial folds · High arched palate** |\n\n**2. EUSTACHIAN TUBE OBSTRUCTION** — `L3`: **frequent ear infections (AOM) · intermittent earaches · conductive hearing loss · chronic middle ear effusion (OME)**.\n\n**MECHANISM.** The adenoid sits in the **midline roof and posterior wall of the nasopharynx**, immediately behind and between the **two Eustachian tube orifices** (each ~**1.5 cm behind the posterior end of the inferior turbinate**, `L1.2`), so **a single midline mass obstructs BOTH tubes at once** — **mechanically** and **⚠️ as an INFECTED RESERVOIR** harbouring **biofilm** that oral antibiotics penetrate poorly, **which is why the ear infections recur after every apparently adequate course** *(reservoir and biofilm not taken from the course material)*.\n\n**⚠️ THE KEYED COMPLICATION OF CHRONIC ADENOIDITIS IS RECURRENT OTITIS MEDIA.** Persistent rhinitis, sinusitis and chronic pharyngitis occur too, but the ear is what the lecture builds its indications around — **two of the five are ear indications**: **recurrent/chronic otitis media (5+ per year, or 3+ per year over two years)** and **otitis media with effusion (adenoidectomy + ear tube insertion)**; **⚠️ note the combined operation** — the grommet fixes the ear now, the adenoidectomy stops it recurring.\n\n> **⚠️ THE VIGNETTE: \"recurrent BILATERAL AOM failing to resolve with adequate medical treatment\" → ADENOID HYPERTROPHY.** **BILATERAL** → a **midline** cause · **RECURRENT** → a persistent source · **FAILS MEDICAL TREATMENT** → the reservoir is out of antibiotic reach, so **the answer is surgical**. **Distractors:** *acute mastoiditis* complicates a single AOM and does not cause recurrence · *adhesive otitis media* is an end-stage sequel · *nasal allergy* contributes but is treated medically and does not explain failure of medical treatment.\n\n**⚠️ DO NOT CAUTERISE THE TORUS TUBARIUS** — the cartilaginous lip of the tube orifice (`L1.2`); scarring there gives a **permanent middle-ear effusion**, the very problem being treated, and `L3` lists **Eustachian tube injury** among the complications. **Conductive hearing loss is easy and expensive to miss** — inattention, poor school performance, loud television, at the age speech is acquired: **any child with recurrent ear disease and mouth breathing needs a hearing test** *(not taken from the course material)*.\n\n**⚠️ FIVE TRAPS INSIDE THIS LIST:**\n1. **\"ACTIVE ala nasi\" is the FALSE item in adenoid facies — it is INACTIVE**, because the child breathes through the mouth and the alar muscles waste. **Dental caries IS part of the picture** and is offered as a tempting \"except\".\n2. **HYPERCAPNIA → NOCTURNAL ENURESIS specifically.** Snoring, sleep apnoea and malocclusion are **mechanical** consequences of the obstruction, not of the CO₂ — every distractor is a real feature of adenoid disease, but **only enuresis comes through the hypercapnia route.**\n3. **ADENOID FACIES IS THE FACE OF LONGSTANDING CHRONIC BILATERAL NASAL OBSTRUCTION FROM ANY CAUSE** — allergic rhinitis, polyposis, gross septal deviation. **Not \"adenoid hypertrophy only\", not a craniofacial malformation, nothing to do with obesity.**\n4. **⚠️ THE SKELETAL CHANGES DO NOT REVERSE** — high-arched palate, protruding incisors and receding chin are **growth** changes laid down while the child mouth-breathes, **which is itself an argument to operate early**; `L3` lists **orofacial/dental changes** as an indication *(mechanism not taken from the course material)*.\n5. **ORTHODONTIC COMPLICATIONS — the \"except\".** Caries, overcrowding, protruding incisors, high-arched palate and malocclusion are all adenoidal. **⚠️ HUTCHINSON’S NOTCHED INCISORS ARE NOT** — they belong to **congenital syphilis**, with interstitial keratitis and sensorineural deafness (**Hutchinson’s triad**) *(not taken from the course material)*.\n\n**LARYNGISMUS STRIDULUS** — named on the slide, not defined: a **paroxysmal reflex adductor spasm of the larynx**, typically nocturnal, giving sudden stridor and apnoea that settles spontaneously. **Post-nasal drip irritating the larynx, hypercapnia, and cold dry unconditioned mouth-breathed air can each trigger it**, so a question offering all three plus \"all of the above\" keys **all of the above** *(definition not taken from the course material; the post-nasal-drip mechanism is on the slide)*.\n\n**⚠️ THE INFANT VIGNETTE:** *10-month-old · mouth breathing · sleep apnoea · **difficult suckling*** → **adenoid hypertrophy**, because **infants are obligate nasal breathers** and a blocked nasopharynx shows as feeding failure first. **Distinguish: bilateral choanal atresia** (**at birth**, cyclical cyanosis relieved by crying) · **antrochoanal polyp** (older child, **unilateral**) · **nasopharyngeal angiofibroma** (**adolescent male with epistaxis**). **⚠️ Adenoid hypertrophy is also the commonest cause of mouth breathing in a 5-year-old**, ahead of allergic rhinitis, septal deviation and antrochoanal polyp *(obligate nasal breathing not taken from the course material)*.",
        "qs": [
          "entqb-thr4-156",
          "entqb-thr4-157",
          "entqb-thr4-158",
          "entqb-thr4-211",
          "entqb-thr4-217",
          "entqb-thr4-219",
          "entqb-thr4-155",
          "entqb-thr4-220",
          "entep-mfe1-3",
          "entqb-thr4-191",
          "entqb-thr4-167",
          "entqb-thr4-160"
        ]
      },
      {
        "id": "tons-f3",
        "w": "must",
        "h": "Diagnosis of the adenoid — and the imaging question the banks disagree about",
        "body": "`L3`, in the lecture’s own order: **1. clinical picture · 2. endoscopic (flexible or rigid) examination · 3. plain X-ray nasopharynx, LATERAL VIEW.**\n\n**⚠️⚠️ THAT ORDERING RESOLVES A GROUP OF QUESTIONS THAT LOOK CONTRADICTORY. READ WHETHER THE STEM SAYS \"IMAGING\".**\n\n| Stem asks | Answer | Why |\n|---|---|---|\n| best **IMAGING** modality / best radiological investigation | **⚠️ PLAIN LATERAL X-RAY of the nasopharynx** | Among *imaging* tests the lateral film wins outright |\n| the optimum **MODALITY**, with **flexible nasopharyngoscopy on the list** | **⚠️ FLEXIBLE NASOPHARYNGOSCOPY** | The slide ranks **endoscopy above plain film**, and only endoscopy grades how obstructive the pad is |\n\n**A changed option set legitimately moving the key — not a contradiction, not a mis-key. Check the option list first, every time.**\n\n**WHY LATERAL AND NOT AP:** the adenoid is a **soft-tissue pad on the posterior nasopharyngeal wall**, and only the **lateral** projection silhouettes it against the **air column**, giving contrast and letting the adenoid-to-nasopharynx ratio be judged. **On an AP film it is superimposed on skull base and cervical spine and cannot be seen**; a frontal view of the paranasal sinuses does not show the nasopharynx *(projection reasoning not taken from the course material; \"lateral view\" is verbatim)*.\n\n**Why not the others:** **CT** — radiation to a child’s orbits and thyroid for what one plain film gives; reserved for suspected malignancy, bony or complicated sinus disease. **MRI** — expensive, slow, **needs a still child**, often sedation or GA; reserved for a suspected **nasopharyngeal mass** (angiofibroma, carcinoma, lymphoma). **Ultrasound** — **cannot cross an air-filled cavity**, and the nasopharynx is full of air. **Angiography** — images vessels, not a lymphoid pad. **Examination under GA** — an anaesthetic for what an endoscope answers awake. *(Comparative reasoning not taken from the course material.)*\n\n**GRADING** — ⚠️ **no cached slide grades the adenoid at all** (34 files searched). Grade Gain keys **adenoid in contact with the soft palate = GRADE 3**, grade 4 being complete choanal obstruction — **give that answer**, noting that **the competing Parikh system calls the same finding grade 4**, and that **the grade never decides the operation — the symptoms do** *(both systems lie outside the course material)*.",
        "qs": [
          "entep-nose-56",
          "entep-nose-75",
          "entep-throat-110",
          "entep-enr-11",
          "entqb-thr4-232",
          "entqb-thr4-159",
          "entqb-thr4-219"
        ]
      },
      {
        "id": "tons-f4",
        "w": "must",
        "h": "⭐ Adenoidectomy — indications, and the three-vignette ladder",
        "body": "`L3`, complete: **1. obstructive sleep-disordered breathing (MOST COMMON)** · **2. recurrent/chronic otitis media (5+ times a year, or 3+ per year over two years)** · **3. otitis media with effusion (adenoidectomy + ear tube insertion)** · **4. chronic adenoiditis/sinusitis (over 3 months, not responding to antibiotics)** · **5. orofacial/dental changes from persistent mouth breathing**. `L9) Snoring & OSA.pdf` agrees from the other side — **adenoid (most common cause in children)** heads its causes of pharyngeal obstruction.\n\n**⚠️ Persistent adenoiditis symptoms, recurrent upper respiratory infections and recurrent otitis media are ALL indications — so \"all of the above\" is the key when they are offered together.** **⚠️ ALLERGIC RHINITIS IS NOT** (endpoint keys it the odd one out): a **medical** problem for intranasal steroids and antihistamines. **⚠️ Nor is \"loss of appetite\"** (Grade Gain’s odd one out) — an association. **⚠️ Nor is adenoid SIZE.** Every indication is a **consequence**.\n\n**⚠️⚠️ THE THREE-VIGNETTE LADDER — one stem, one clause changed, three answers:**\n\n| | Vignette | Answer | Rule |\n|---|---|---|---|\n| **1** | **2-year-old** · dental abnormalities · recurrent earaches · recurrent rhinosinusitis · mucus plug behind the soft palate | **⚠️ CONSERVATIVE until age 3** | **The under-3 rule** |\n| **2** | The same **2-year-old**, **PLUS night snoring and daytime sleepiness** | **⚠️ ADENOIDECTOMY NOW** | **OSA OVERRIDES the age rule** |\n| **3** | A **4-year-old**, same picture, **soft palate CLEFT into two halves** | **⚠️ PARTIAL (superior) ADENOIDECTOMY only** | **The cleft-palate exception** |\n\n**Tonsillectomy is never the answer to any of the three** — the pathology described is nasopharyngeal.\n\n- **WHY WAIT UNDER 3:** **regrowth** is likeliest then (still in the 2–6 year growth phase, **no capsule** to define complete removal) · **natural involution** may make surgery unnecessary · **anaesthetic risk** is highest in the smallest children. ⚠️ *The 3-year cut-off is the bank’s own and appears on no cached slide — not taken from the course material.*\n- **WHY OSA OVERRIDES IT:** waiting is only reasonable while nothing irreversible is happening, and **in OSA harm accrues every night** — nocturnal hypoxia, sleep fragmentation, **failure to thrive** (`L3`: *\"retarded general growth\"*), irreversible **orofacial change**, behavioural and learning consequences, and in severe untreated cases **cor pulmonale and pulmonary hypertension**. The bank prints the rule in its own box: adenoidectomy under 3 is done *\"only if the patient had OSA.\"* *(Cor pulmonale not taken from the course material.)*\n- **WHY PARTIAL WITH A CLEFT:** remove only the **superior** part of the pad, relieving choanal and Eustachian obstruction, and **leave the inferior pad for the palate to close against** (mechanism in the complications section).",
        "flow": {
          "title": "An obstructing adenoid — operate, wait, or do a partial?",
          "steps": [
            {
              "k": "decision",
              "t": "Cleft palate, SUBMUCOUS cleft, bifid uvula or notched hard palate?",
              "yes": "⚠️ PARTIAL (SUPERIOR) ADENOIDECTOMY ONLY — leave the inferior pad, or velopharyngeal insufficiency follows",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Obstructive sleep apnoea — witnessed apnoeas, snoring with daytime sleepiness, failure to thrive?",
              "yes": "⚠️ ADENOIDECTOMY NOW, WHATEVER THE AGE — OSA overrides the under-3 rule",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Is the child under 3 years old?",
              "yes": "CONSERVATIVE — treat predisposing factors and review. Regrowth, natural involution and anaesthetic risk all argue for waiting",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Recurrent/chronic otitis media (5+/yr, or 3+/yr for 2 yrs), or OME?",
              "yes": "ADENOIDECTOMY — ADD GROMMETS if there is an effusion",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Chronic adenoiditis/sinusitis over 3 months not responding to antibiotics, or established orofacial change?",
              "yes": "ADENOIDECTOMY",
              "no": "No indication — adenoid SIZE alone is never one"
            },
            {
              "k": "alert",
              "t": "⚠️ ALLERGIC RHINITIS IS A MEDICAL PROBLEM",
              "n": "NOT an indication for adenoidectomy, however blocked the nose is"
            }
          ]
        },
        "qs": [
          "entep-throat-35",
          "entqb-thr4-160",
          "entqb-thr4-161",
          "entqb-thr4-234",
          "entqb-thr4-235",
          "entqb-thr4-236",
          "entqb-thr4-155",
          "entqb-thr4-219"
        ]
      },
      {
        "id": "tons-f5",
        "w": "high",
        "h": "Adenoidectomy — techniques, anaesthesia and pre-operative points",
        "body": "`L3`, all five techniques:\n\n| # | Technique | `L3`’s comment |\n|---|---|---|\n| **1** | **Conventional curettage** — a sharp spoon-shaped curette scrapes tissue from the nasopharynx | **Fast but BLIND (or mirror-guided), which may leave RESIDUAL TISSUE** |\n| **2** | **Suction diathermy** — suction tool with an electrode **vaporises** tissue while controlling bleeding | **Reduces intraoperative bleeding** |\n| **3** | **Coblation** — radiofrequency **cold ablation**, **40–70 °C** against **cautery 400 °C** | **Reduces thermal damage** |\n| **4** | **Microdebrider-assisted** — a **powered rotating blade** for precise thin-layer resection | **Under DIRECT VISUALIZATION** |\n| **5** | **Endoscopic-guided removal** — a camera endoscope, **transorally or transnasally**, during **ANY of the above** | Adds vision to any of the others |\n\n- **⚠️ THE MICRODEBRIDER WORKS UNDER ENDOSCOPIC DIRECT VISION**, so *\"which technique uses a microdebrider for more precise removal?\"* keys **endoscopic-guided** — over blind curettage (no vision), laser and coblation (different energy sources, no microdebrider). **⚠️ Printed defect: \"microdebrider-assisted\" is itself a technique on the slide and is not among that question’s options; the key is the best option offered.**\n- **⚠️ CURETTAGE IS BLIND, WHICH IS THE WHOLE POINT OF THE ALTERNATIVES.** Quick and cheap, but it **leaves residual tissue** → **primary bleeding** (the commonest cause), persistent symptoms, recurrence. Every other technique adds **vision** (endoscope, microdebrider) or **haemostasis** (suction diathermy, coblation).\n- **⚠️ ANAESTHESIA: GENERAL, ALWAYS — never local, regional or spinal.** A **small child** who cannot cooperate; a **shared airway**; **blood draining backwards onto the laryngeal inlet**, so a cuffed tube and pharyngeal pack are needed. `L3` lists **chest complications \"including pneumonia\" from aspiration during or immediately after surgery**, and records that **anaesthesia and haemorrhage together account for most deaths**.\n\n**PRE-OPERATIVE POINTS KEYED CORRECT:** **no aspirin for 10 days before surgery** (NSAIDs likewise) · **congenital heart disease requires intensive/high-dependency care** · **a submucous cleft requires a PARTIAL adenoidectomy**. **⚠️ THE ONE KEYED *NOT* TRUE: \"we start with tonsillectomy then adenoidectomy.\"** In a combined **adenotonsillectomy the ADENOID IS REMOVED FIRST** and the nasopharynx packed while the tonsils are dissected, so the pack tamponades the adenoid bed throughout and blood does not obscure the field *(the order is on no cached slide — not taken from the course material)*.\n\n**⚠️ DISCHARGE:** a **day-case** operation, and **Grade Gain keys discharge at 3 hours** — give that. ⚠️ **No cached slide states a discharge time**; most units observe **4–6 hours** and **admit** children with **OSA, a bleeding tendency, significant comorbidity or age under 3**, because reactionary haemorrhage occurs within 24 hours and the blood is swallowed rather than seen. Keyed as printed, discrepancy noted *(the 4–6 hour practice and admission criteria are not taken from the course material)*.",
        "qs": [
          "entqb-thr4-163",
          "entqb-thr4-233",
          "entqb-thr4-162",
          "entqb-thr4-237",
          "entqb-thr4-164",
          "entqb-thr4-173"
        ]
      },
      {
        "id": "tons-f6",
        "w": "must",
        "h": "⭐ Complications of adenoidectomy — including VPI and Grisel’s syndrome",
        "body": "`L3`, complete:\n\n| # | Complication | Detail |\n|---|---|---|\n| **1** | **⚠️ HAEMORRHAGE (MOST COMMON)** | **as tonsillectomy — primary, reactionary or secondary.** Four causes: **incomplete removal of adenoid tissue** (← commonest cause of **PRIMARY** bleeding) · **blood disease e.g. haemophilia, leukaemia** · **wrong diagnosis e.g. nasopharyngeal ANGIOFIBROMA** · **injury to cervical vertebrae from a prominent atlas** |\n| **2** | **INFECTION** | **local or descending** |\n| **3** | **DENTAL INJURY** | **intubation or mouth gag insertion** |\n| **4** | **⚠️ EUSTACHIAN TUBE INJURY** | Cautery/curettage of the **torus tubarius** → scarring → **permanent middle-ear effusion** |\n| **5** | **⚠️ RECURRENCE** | **in very young children or incomplete removal — adenoids have NO CAPSULE** |\n| **6** | **⚠️⚠️ VELOPHARYNGEAL INSUFFICIENCY** | **especially with an unnoticed SUBMUCOUS CLEFT PALATE** |\n\n**⚠️ WHAT CANNOT BE INJURED: THE NASAL SEPTUM.** Adenoidectomy is **transoral** — teeth (mouth gag), Eustachian tube (lateral cautery), soft palate and even the **atlas** are at risk; the septum is reached only through the nose. **⚠️ Nasal stenosis is not a complication either** — it is offered against *regrowth* in the \"very young children\" stem.\n\n> **⚠️ \"WRONG DIAGNOSIS e.g. NASOPHARYNGEAL ANGIOFIBROMA\" IS THE MOST FRIGHTENING LINE ON THE SLIDE.** Curetting a **juvenile nasopharyngeal angiofibroma** believing it an adenoid causes torrential, potentially fatal haemorrhage. **The patient at risk is an ADOLESCENT MALE with nasal obstruction AND EPISTAXIS** — an adenoid does not bleed spontaneously.\n>\n> **⚠️ THE PRIMARY GOAL OF PRE-OPERATIVE EVALUATION IS BLEEDING RISK** — keyed over nasal obstruction, hearing levels and sleep apnoea severity, because **all three of those are why you are operating; bleeding risk is whether you safely can.** It means coagulation history (personal and family), antiplatelet drugs, and confirming the mass is an adenoid and not an angiofibroma. **Hence \"haemophilia\" — not a slipped ligature, not diabetes, not acute otitis media — is the keyed cause of primary bleeding during adenoidectomy**, since **nothing is ligated in an adenoidectomy**.\n\n**⚠️⚠️ VELOPHARYNGEAL INSUFFICIENCY — the mechanism, from `L1.2`.** The **velopharyngeal sphincter** shuts the nasopharynx off from the oropharynx for speech and swallowing by **postero-superior movement of the soft palate, medial movement of the lateral pharyngeal walls, and slight anterior movement of the posterior pharyngeal wall (Passawnt’s bridge)**, with **the uvula playing an important role in the perfection of this closure**. **THE ADENOID PAD IS PART OF THE SURFACE THE PALATE CLOSES AGAINST:** in a child whose palate is short, cleft or **submucously** cleft, the palate has been reaching the *adenoid* rather than the posterior wall, so **removing the pad opens a gap the palate cannot bridge** → **hypernasal (rhinolalia aperta) speech and nasal regurgitation of fluids**. **That — not Eustachian injury, not TMJ dislocation, not loosening of teeth — is why adenoidectomy is avoided in cleft palate.**\n\n**⚠️ \"UNNOTICED\" IS THE WARNING** — a submucous cleft has intact mucosa and is easy to miss. **LOOK FOR a BIFID UVULA · a BLUE MIDLINE TRANSLUCENT ZONE in the soft palate · a NOTCH in the posterior border of the hard palate. Examine every palate before every adenoidectomy** *(the three signs are not taken from the course material; the submucous-cleft warning is verbatim)*. **The answer is a PARTIAL (SUPERIOR) ADENOIDECTOMY.**\n\n**⚠️ GRISEL’S SYNDROME** — asked directly, and **it appears in no cached ENT slide** (34 searched); `L3` gives only *\"injury to cervical vertebrae: dt. prominent atlas.\"* *(Everything in this block is not taken from the course material.)*\n\n| | |\n|---|---|\n| **Definition** | **NON-TRAUMATIC ATLANTO-AXIAL SUBLUXATION following a URTI or adenoidectomy** — not a haemorrhage, not VPI hypernasality, not cervical lymphadenopathy |\n| **Mechanism** | Inflammation spreads from nasopharynx to upper cervical spine **through the pharyngovertebral venous plexus** → hyperaemia and laxity of the **transverse ligament of the atlas** → C1 subluxes on C2 |\n| **Who / when** | Almost always **children**, days to a fortnight after adenoidectomy or a URTI |\n| **Presentation** | **Painful TORTICOLLIS** — head tilted and rotated (\"cock-robin\"), neck pain, refusal to move the neck. **⚠️ Easily dismissed as a stiff neck** |\n| **Investigation** | **CT of the craniocervical junction** (dynamic where indicated); MRI for cord and ligament |\n| **Treatment** | Early: rest, analgesia, anti-inflammatories, soft collar, antibiotics if infection persists. Established/unstable: **traction and immobilisation**; fusion if irreducible |\n| **⚠️ Why it matters** | **Unrecognised subluxation can compress the SPINAL CORD.** Torticollis after adenoidectomy is imaged, not observed |",
        "qs": [
          "entqb-thr4-162",
          "entqb-thr4-166",
          "entqb-thr4-167",
          "entqb-thr4-173",
          "entqb-thr4-213",
          "entqb-thr4-215",
          "entqb-thr4-216",
          "entqb-thr4-236",
          "entqb-thr4-238",
          "entqb-thr4-164",
          "entep-nose-51",
          "entep-mfe4-25",
          "entqb-thr4-231",
          "entqb-thr4-237"
        ]
      }
    ]
  },
  "ent-aom": {
    "intro": "The third-largest chapter in the ENT bank — **106 transcribed questions** — and almost every one of them is one of seven shapes.\n\n**1. The three-month clock.** More questions here turn on *how long the fluid has been there* than on anything else, and the bank walks the learner up and down the same ladder: 1 week · after a cold · 1 month · 1 month **with language delay** · 3 months · 90 days · 6 months. Learn the ladder in one table and roughly a quarter of the chapter answers itself. **Language delay overrides the clock** — `entep-mfe5-26` and `entep-mfe5-27` are printed back to back as the same child with and without it, same options, opposite answers.\n\n**2. Pain is the divider.** Painful red bulging drum = acute otitis media. Painless dull retracted drum = effusion. The banks print near-identical vignettes that differ only by that one clause, and the examiner-pattern file records *\"child, fever and earache, bulging TM\"* and *\"type B tympanogram ⇄ secretory otitis media\"* as separate repeated lines (pp.3050, 3051, 3060, 3064).\n\n**3. ⚠️ Unilateral effusion in an adult = nasopharyngeal carcinoma.** Nine of these 106 questions are that single rule, asked from every angle — as a bare principle, as a 50/55/60/71-year-old vignette, with a neck node, with a diabetic, with a normal otoscopy, and as a free-text case. **It is the highest-yield rule in the chapter and it is never wrong.**\n\n**4. \"All of the following EXCEPT.\"** Myringotomy is indicated in all except… · causes of AOM except… · complications of effusion except… · before perforation all occur except… · acute necrotic otitis media causes all except… **You cannot answer these from the key alone — you have to know why every option is right.** That is why every list below is given complete.\n\n**5. The tympanogram.** Type B ⇄ effusion is one of the four most-repeated lines in the whole endpoint cram sheet. Type As, Type C and Type Ad are all printed as distractors, and one question keys **As** for a stiff drum where the neighbouring question keys **B** for a wet one.\n\n**6. Numbers, printed verbatim.** 3 weeks · 3 months · 90 days · 48–72 hours · 6–24 months · 2–6 years · 50 % · 5 dB grades. **The bank does not paraphrase a number.**\n\n**7. Ear trauma lives here.** `MODULES` has no trauma chapter, so the traumatic-perforation set — appearance, management, the three-month rule, myringoplasty, barotrauma, syringing injury — is filed in this chapter and examined hard. **Ten questions.**\n\n**Lecture shorthand used below:** `L21.1` = *acute otitis media*, `L21.2` = *Otitis media with effusion*, `L22` = *Anatomy of  Ear Undergraduate*, `L16` = *Chronic otitis media*, `L17,18` = *Otorrhea and otalgia*, `L13,14` = *AudioVestibulae Evaluation*, `L19.1` = *hearing loss*, `L3` = *Diseases of the tonsils & adenoids*, `L9` = *Snoring & OSA*.\n\n**Chronic disease, cholesteatoma, mastoiditis and the intracranial complications belong to `ent-csom`** and are not repeated here; where the two chapters meet, the discriminator is given and the reader is sent there.",
    "sections": [
      {
        "id": "aom-1",
        "w": "must",
        "h": "The middle ear cleft and the Eustachian tube — why this is a child’s disease",
        "body": "**THE MIDDLE EAR CLEFT IS FOUR PARTS, NOT ONE ROOM** (`L21.1`, opening slide): **1) the Eustachian tube · 2) the tympanic cavity · 3) the mastoid antrum · 4) the mastoid air cells.** Every definition in this chapter says *cleft*, and that word is examinable: it is why mastoid disease is part of the same illness, and why `entqb-ear3-50` keys \"middle ear **cleft**\" over \"middle ear\".\n\n**ROUTES OF INFECTION IN, IN THE SLIDE’S OWN ORDER** (`L21.1`):\n\n1. **Through the Eustachian tube — COMMONEST.** Extension from rhinitis, sinusitis, adenoiditis; passage of infected material (milk, vomitus, nasal packing).\n2. **Through a perforated drum** — needs a perforation to exist first, so it is the swimmer with a chronic hole, not the toddler with a cold.\n3. **Haematogenous** — **rare, and only in the immunocompromised**; the slide says so explicitly.\n\n**THE EUSTACHIAN TUBE, FROM `L22`:**\n\n| | Detail |\n|---|---|\n| **Course** | Middle ear → nasopharynx |\n| **Upper 1/3** | near the middle ear, **BONY** |\n| **Lower 2/3** | near the nasopharynx, **CARTILAGINOUS** |\n| **Bony opening** | **PATENT** — closed only if there is pathology |\n| **Cartilaginous opening** | **potentially closed; OPENS ON YAWNING AND SWALLOWING** |\n| **Opened by** | **tensor veli palatini and levator veli palatini** |\n\n> **⚠️ THE CHILD’S TUBE IS SHORTER, WIDER AND MORE HORIZONTAL** (`L22`, verbatim, closing with *\"Infection is commoner in infants\"*). All three push the same way: **shorter** = a shorter journey, **wider** = easier to traverse, **more horizontal** = no gravity drainage. The adult tube slopes down and forwards at roughly 45°. **`entqb-ear1-16` prints all four wrong permutations of those three adjectives** — longer/narrower/vertical, longer/wider/vertical, shorter/narrower/vertical. Get the triad exact.\n\n**WHAT THE TUBE DOES, AND WHAT HAPPENS WHEN IT STOPS** (`L21.2`, verbatim): it *\"ventilates the middle ear and clears fluid from the middle ear to the nasopharynx… so when closed, gases from the middle ear are absorbed → **increase the negative intratympanic pressure** → **middle ear transudation**.\"* **That one sentence is the pathogenesis of every effusion in this chapter** — barotrauma, adenoids, cleft palate, post-viral, tumour.\n\n**⚠️ CLEFT PALATE = A TUBE THAT NEVER OPENS.** `L21.2` gives the mechanism as **1) tensor and levator muscle dysfunction, 2) Eustachian tube stenosis**; the muscles have no functioning insertion, so the tube cannot be actively opened and effusion is near-universal. **⚠️ DEFECT: `entqb-ear1-17`’s printed box says the *\"bony end\"* is opened by the palatal muscles, while the same bank’s Q13 keys the bony end as always patent.** The end the muscles open is the **cartilaginous (pharyngeal)** one. The mechanism the key tests is right; the bank’s own wording is not. Recorded, not corrected.",
        "qs": [
          "entqb-ear1-16",
          "entqb-ear1-17",
          "entqb-ear3-51",
          "entqb-ear3-50",
          "entep-ear-189"
        ]
      },
      {
        "id": "aom-2",
        "w": "must",
        "h": "⭐ The drum — which part PERFORATES, which part RETRACTS, and which quadrant",
        "body": "**Two layers of the drum, and everything in this section follows from them** (`L22`):\n\n| | **PARS TENSA** | **PARS FLACCIDA** (Shrapnell’s) |\n|---|---|---|\n| **Layers** | skin + **FIBROUS** + mucosa (3) | skin + mucosa only — **NO FIBROUS LAYER** (2) |\n| **Position** | below the lateral process of the malleus | small slack triangle **above** it, in the attic |\n| **Under POSITIVE pressure (pus in AOM)** | ⭐ **PERFORATES FIRST** | — |\n| **Under NEGATIVE pressure (tube failure)** | retracts late | ⭐ **RETRACTS FIRST** |\n| **The disease it leads to** | central (SAFE) perforation → tubotympanic CSOM | **attic retraction pocket → CHOLESTEATOMA** (see `ent-csom`) |\n\n> **⚠️ THE BANK ASKS BOTH HALVES WITH THE SAME FOUR OPTIONS — pars tensa / pars flaccida / umbo / handle of malleus.** `enthd-ear-24` asks which part **perforates** (pars tensa); `enthd-ear-4` asks which part **retracts** (pars flaccida). **Both keys are correct and they are not contradictory:** pus pushing outwards bursts the taut membrane under tension; a vacuum sucks in the part with no fibrous skeleton. Grade Gain prints the couplet outright — *\"1st part to be perforated is pars tensa, 1st part to be retracted is pars flaccida\"* (`entqb-ear1-26`). **The umbo and the handle of malleus are points of ATTACHMENT** — reinforced by the ossicle, the best-supported parts of the drum, never a site of spontaneous rupture or retraction.\n\n**THE PERFORATION OF ACUTE OTITIS MEDIA IS: small · central · in the PARS TENSA · mostly ANTERO-INFERIOR** (`entqb-ear3-57`, `entqb-ear4-113`). Read `entqb-ear3-57` carefully — it is a **negative** stem, so those four are the *true* options and **pars flaccida is the answer**.\n\n**THE FOUR QUADRANTS — divided by the handle of the malleus and a line through the umbo:**\n\n| Quadrant | What is there | Meaning |\n|---|---|---|\n| ⭐ **ANTERO-INFERIOR** | thinnest, least supported (furthest from the stiffening manubrium), **most dependent** | **where AOM perforates, and where a myringotomy is cut** |\n| Postero-inferior | round window niche deep to it | second-choice drainage site in some texts |\n| ⚠️ **POSTERO-SUPERIOR** | **incudostapedial joint, stapes, chorda tympani, facial nerve** at the 2nd genu | **THE DANGEROUS QUADRANT — never cut here.** Site of marginal perforations, granulations and cholesteatoma in unsafe disease |\n| Antero-superior | Eustachian tube orifice deep to it | — |\n\n*(The quadrant anatomy, the structures at risk and the antero-inferior siting are not on any cached slide and are **not taken from the course material**; `L16` grounds only the posterosuperior granulations of unsafe disease.)*",
        "qs": [
          "enthd-ear-4",
          "enthd-ear-24",
          "entqb-ear3-57",
          "entqb-ear4-113",
          "entep-ear-237"
        ]
      },
      {
        "id": "aom-3",
        "w": "must",
        "h": "Acute otitis media — definition and organisms",
        "body": "**DEFINITION** (`L21.1`): *\"an infection that involves the middle ear. The tympanic membrane becomes **inflamed and opaque**. Blood vessels to the area **dilate**. Fluid accumulates in the middle ear space. The inflammation **doesn’t extend beyond the mucoperiosteal layer of the middle ear cleft**.\"*\n\n> **⚠️ THAT LAST CLAUSE IS THE LINE BETWEEN AOM AND MASTOIDITIS.** Inflammation confined to mucoperiosteum = acute otitis media. Pus under pressure eroding bone = **acute mastoiditis** (`ent-csom`).\n\n**ACUTE *SUPPURATIVE* OTITIS MEDIA — three words, each tested** (`entqb-ear3-50`):\n\n| Word | What it excludes |\n|---|---|\n| **SUPPURATIVE = BACTERIAL** | `L21.1` heads its bacterial column *\"Acute suppurative otitis media\"* and its viral column separately. **A \"bacterial **or viral**\" option is wrong the moment the stem says suppurative** |\n| **middle ear CLEFT** | not \"middle ear\" — the four parts of §aom-1 |\n| **first 3 WEEKS** | acute <3 weeks · subacute 3 weeks–3 months · chronic >3 months. **\"3 months\" is the CHRONIC threshold, printed as the trap** *(the week/month boundaries are not stated on any cached slide — **not taken from the course material**; the slide gives stages, not durations)* |\n\n**ORGANISMS — `L21.1`’s own two-column table:**\n\n| **BACTERIAL** (acute suppurative OM) | **VIRAL** |\n|---|---|\n| **β-haemolytic streptococcus** | **influenza virus** |\n| ***Streptococcus pneumoniae*** | **adenovirus** |\n| ***Haemophilus influenzae*** | **measles** |\n\nGrade Gain adds ***Moraxella catarrhalis*** and the number: **pneumococci cause ~50 % of episodes of AOM** (`entqb-ear3-52` box). **Ranked order: *S. pneumoniae* > *H. influenzae* > *Moraxella*** — and *S. pneumoniae* is the key to \"commonest organism\" in both banks.\n\n> **⚠️ READ THE OPTION LIST — \"Streptococcus\" AND \"Pneumococci\" BOTH APPEAR.** The pneumococcus *is* a streptococcus. The bank uses **\"Streptococcus\"** for the other streptococci (chiefly group A β-haemolytic) and **\"Pneumococci\"** for *S. pneumoniae*. **The specific name is the answer; the generic one is the distractor** (`entqb-ear3-52`).\n\n**⭐ WHICH ORGANISM BELONGS TO WHICH EAR — the single commonest microbiology error in otology, and `entqb-ear3-84` is built on it:**\n\n| Disease | Organism |\n|---|---|\n| **Ordinary acute otitis media** | *S. pneumoniae* > *H. influenzae* > *Moraxella*; β-haemolytic strep |\n| **Acute NECROTIC otitis media** | **group A β-haemolytic streptococcus** |\n| **Malignant / necrotising EXTERNAL otitis** | ***Pseudomonas aeruginosa*** (`L17,18`) — elderly uncontrolled diabetic |\n| **Diffuse otitis externa (swimmer’s ear)** | *Pseudomonas* and other Gram-negatives |\n| **Furunculosis of the outer canal** | ***Staphylococcus aureus*** |\n| **Otomycosis** | *Aspergillus niger*, *Candida* |\n\n**⚠️ *PSEUDOMONAS* IS NOWHERE ON THE AOM LIST** — that is the key to `entqb-ear3-84`. **Hold it as one rule:** the middle ear is reached **through the nose**, so its organisms are **upper-respiratory**; the canal is reached **from outside**, so its organisms are **skin and water** — staphylococci, pseudomonads, fungi.",
        "qs": [
          "entqb-ear3-50",
          "entqb-ear3-51",
          "entqb-ear3-52",
          "entqb-ear3-84",
          "entep-ear-47"
        ]
      },
      {
        "id": "aom-4",
        "w": "must",
        "h": "Aetiology and predisposing factors — including the two the bank keys",
        "body": "**`L21.1`’s aetiology list, verbatim and complete:**\n\n1. **Pre-existing middle ear effusion with its predisposing factors:** **adenoids · nasopharyngeal carcinoma · post-nasal packing · cleft palate · nasal allergy**\n2. **Faulty technique during lactation**\n3. **Gastro-oesophageal reflux**\n\n**⭐ TWO OF THOSE ARE KEYED ANSWERS, EACH TO A DIFFERENTLY WORDED STEM. Read which one the stem asks for:**\n\n| Stem | Key | Why |\n|---|---|---|\n| **Recurrent AOM in the FIRST YEAR of life** | **BREAST FEEDING IN THE FLAT POSITION** (= the slide’s *\"faulty technique during lactation\"*) | Feed a baby lying flat and **milk tracks straight back up the short horizontal tube** and sits in the middle ear as a culture medium. **Nearly ubiquitous, and the most easily corrected** |\n| **Recurrent BILATERAL AOM in CHILDREN** | **ADENOID HYPERTROPHY** | The adenoid sits in the nasopharynx **between the two tubal orifices**, so it obstructs both at once — hence **bilateral** — and acts as a **reservoir of infected biofilm**, hence **recurrent** |\n\n**Why the distractors in each fail** — `entep-ear-147`: **cleft palate** is a genuine cause the slide lists, but it is **uncommon** and the stem asks the *most probable* cause across all infants; **congenital narrowing of the tube** is rare, and the infant tube’s fault is that it is too *horizontal*, not too narrow; **teething** has no causal link at all — it merely coincides in time with the peak incidence, which is how the folk belief arose. `entep-ear-203`: **acute mastoiditis is a COMPLICATION, not a cause** — confusing the direction is the trap; a **foreign body** lies in the canal, on the wrong side of the drum, and is almost always unilateral; **trauma** perforates a drum, it does not cause recurring bilateral infection.\n\n**⭐ THE ADENOID IS ONE DISEASE WITH TWO FACES** (`L3`, verbatim): enlarged adenoids are *\"very common in children aged **2–6 yrs**\"* and cause **(1) chronic nasal obstruction** → mouth breathing, snoring, dry lips and tongue, dental caries, **nasal tone of voice**, and from chronic CO₂ retention **lassitude and dullness**; and **(2) Eustachian tube obstruction** → *\"frequent ear infections (AOM), intermittent earaches, **conductive hearing loss, chronic middle ear effusion (OME)**\"*.\n\n> **⚠️ HYPERNASAL vs HYPONASAL DECIDES ADENOID vs CLEFT, and the bank uses it as the discriminator twice.** **HYPO**nasal (a blocked nose, \"denasal\") = **adenoid**. **HYPER**nasal **plus nasal regurgitation of food** = **velopharyngeal incompetence = CLEFT PALATE** — including a submucous cleft. `enthd-ear-12` keys cleft palate from *recurrent AOM + nasal regurgitation + hypernasality*, with adenoid hypertrophy as the trap for anyone matching only on \"recurrent AOM in a child\". **Nasopharyngeal carcinoma at 5 years would be extraordinary; carcinoma of the posterior tongue is not a paediatric entity.**",
        "qs": [
          "entep-ear-147",
          "entep-ear-203",
          "enthd-ear-12",
          "entep-ear-233",
          "entep-case-13"
        ]
      },
      {
        "id": "aom-5",
        "w": "must",
        "h": "⭐⭐ The four pathological stages, and the clinical picture before and after perforation",
        "body": "**THE FOUR STAGES, VERBATIM** (`L21.1`): **1) Acute catarrhal stage — E.T. occlusion. 2) A.S.O.M; before perforation. 3) A.S.O.M; after perforation. 4) Resolution or complications.**\n\n> **⚠️ \"STAGE OF SALPINGITIS\" IS NOT ONE OF THEM.** It is printed as a distractor in `entep-ear-235`; the term belongs to tubal inflammation, which is the **catarrhal** stage under another name.\n\n**PATHOLOGY, stage 2** (`L21.1`): hyperaemia and swelling of the mucoperiosteum lining **the whole middle ear cleft**; signs confined to the tympanic cavity; **outpouring of serum from dilated subepithelial capillaries**; *\"the middle ear cleft becomes full of **exudate under tension**\"*.\n\n**⭐ THE MASTER TABLE OF THIS CHAPTER — before versus after perforation:**\n\n| | **BEFORE perforation** | **AFTER perforation** |\n|---|---|---|\n| **PAIN** | ⭐ **SEVERE, throbbing** — *\"exudates or pus under tension\"*. **Worst at this stage** | ⭐ *\"the pain **should disappear**\"* |\n| **FEVER** | present, with constitutional upset | *\"the fever is **lessened**\"* |\n| **HEARING** | *\"**very slightly** affected\"* | *\"hearing loss **increases**\"* |\n| **DISCHARGE** | **NONE** — the drum is intact | present in the canal: **haemorrhagic first, then serosanguineous, then MUCOPURULENT** |\n| **DRUM** | injected with dilated vessels → then **BULGING** with **NIPPLING** | ruptured; **small central perforation in the pars tensa, antero-inferior** |\n| **In an INFANT** | **pulling at the ear, or plain irritability** — the slide says so, and it is why AOM is missed pre-verbally | — |\n\n> **⚠️ PERFORATION IS RELIEF, NOT DETERIORATION.** A child in agony whose pain **stops abruptly as the ear starts to run** has perforated, and that is improvement. `entep-ear-183` and `entep-case-36` are that sequence written out; `entqb-ear3-53` asks it as a negative stem (**\"before perforation, all except… DISCHARGE\"**); `entep-ear-235` asks which stage throbs (**the suppurative stage**, not the perforation stage — that is the trap in its option d).\n\n**THE DEFINITE HISTORY** (`L21.1`, verbatim): *\"earache **following upper respiratory tract infection**.\"* Every vignette in this chapter opens that way — a runny nose, a cold, a cough, forceful nose-blowing against a blocked nose (`entep-case-10`), tonsillitis sharing the same nasopharyngeal focus (`entep-ear-110`).\n\n**⚠️ \"PULSATING (LIGHT-HOUSE) DISCHARGE\"** seen through a fresh perforation = **active middle ear suppuration** (`entep-case-36`). *(The eponym is not on any cached slide — **not taken from the course material**.)*",
        "flow": {
          "title": "The four stages of acute otitis media",
          "steps": [
            {
              "k": "step",
              "t": "1. ACUTE CATARRHAL STAGE — Eustachian tube occlusion",
              "n": "Blocked feeling, mild discomfort, retracted or dull drum. No pus yet"
            },
            {
              "k": "step",
              "t": "2. A.S.O.M BEFORE PERFORATION — the suppurative stage",
              "n": "Exudate under tension. SEVERE throbbing pain + fever. Drum injected → BULGING + nippling. Hearing only slightly affected"
            },
            {
              "k": "decision",
              "t": "Is myringotomy done?",
              "yes": "Controlled radial incision, antero-inferior quadrant — drains cleanly, heals cleanly",
              "no": "⚠️ \"If myringotomy is not done, SPONTANEOUS PERFORATION will occur\" — a ragged tear"
            },
            {
              "k": "step",
              "t": "3. A.S.O.M AFTER PERFORATION",
              "n": "Pain DISAPPEARS, fever lessens, hearing loss INCREASES. Discharge: haemorrhagic → serosanguineous → mucopurulent, profuse, ODOURLESS"
            },
            {
              "k": "decision",
              "t": "4. Does it resolve?",
              "yes": "Drum heals, hearing returns",
              "no": "Fluid persists → OTITIS MEDIA WITH EFFUSION · or COMPLICATIONS"
            },
            {
              "k": "alert",
              "t": "⚠️ PAIN THAT RETURNS, OR NEVER SETTLES, IS A COMPLICATION",
              "n": "Post-auricular redness → acute mastoiditis. Facial weakness, vertigo, headache, rigors → see `ent-csom`"
            }
          ]
        },
        "qs": [
          "entep-ear-235",
          "entqb-ear3-53",
          "entep-ear-183",
          "entep-ear-104",
          "entep-ear-110",
          "entep-case-36",
          "entep-case-8",
          "entep-case-10",
          "entep-case-14"
        ]
      },
      {
        "id": "aom-6",
        "w": "must",
        "h": "Reading the drum and the discharge — the two bedside instruments",
        "body": "**⭐ READ THE DRUM AS A PRESSURE GAUGE. This one table answers a whole family of questions:**\n\n| Drum | Pressure behind it | Means | Pain? |\n|---|---|---|---|\n| **Injected, dilated vessels** | rising | **early AOM** | yes |\n| ⭐ **BULGING, nippling** | **positive — pus under tension** | **AOM before perforation** | ⭐ **SEVERE** |\n| **Perforated, mucopurulent odourless discharge** | released | **AOM after perforation** | **relieved** |\n| ⭐ **RETRACTED, dull, opaque, landmarks lost** | **negative** | **OTITIS MEDIA WITH EFFUSION** | ⭐ **NONE** |\n| **Attic or marginal perforation, scanty fetid discharge** | — | **cholesteatoma / unsafe CSOM** → `ent-csom` | no (pain = complication) |\n| **Chalky white plaques** | — | **tympanosclerosis** (§aom-19) | no |\n| **Blue-black** | — | **haemotympanum**, or a high jugular bulb | — |\n\n> **⚠️ `entqb-ear3-85` REQUIRES BOTH HALVES TO BE RIGHT.** *severe pain + bulging* is the key. *mild pain + bulging* is not a recognised pattern — bulging under tension hurts. *severe pain + retracted* is **self-contradictory**: retraction means negative pressure, which means effusion, and **effusion is painless**.\n\n**⭐ THE DISCHARGE OF AOM IS MUCOPURULENT ***AND*** ODOURLESS** — `entqb-ear3-55` keys \"A & B\" and **both halves are load-bearing:**\n\n- **ODOURLESS excludes cholesteatoma.** Fetor comes from **osteitis** — bone destroyed by keratin and anaerobes. AOM destroys no bone, so it cannot smell. **A foul discharge means attico-antral (unsafe) CSOM until proved otherwise** — the single most useful smell in otology.\n- **MUCOID proves the SOURCE.** `L17,18`, verbatim: *\"There are **no mucous glands in the EAC. Mucus always comes from the ME**.\"* So a mucoid discharge proves both that the middle ear is the source **and that its mucosa is intact and secreting**.\n- **PURE PURULENT (no mucus) = the mucosa has gone** → **acute necrotic otitis media** (§aom-9), or external otitis, which is never mucoid.\n- **PROFUSE, re-accumulating immediately after cleaning = a positive RESERVOIR SIGN** → acute mastoiditis (`L16`, and see `ent-csom`).\n\n**Mucopurulent otorrhoea, complete list** (`L17,18`): **CSOM (tubo-tympanic)** and **acute otitis media after perforation**. **Purulent** otorrhoea: **external otitis** and **CSOM (attico-antral)**.\n\n**⭐ THE HEARING LOSS OF AOM IS CONDUCTIVE** (`entqb-ear3-54`) — the lesion is mechanical and in the middle ear. **Site decides type, always:**\n\n| Site | Loss |\n|---|---|\n| External canal — wax, otitis externa, exostosis, atresia | **conductive** |\n| Drum and middle ear — perforation, effusion, AOM, CSOM, otosclerosis, ossicular disruption, tympanosclerosis | **conductive** |\n| Cochlea, VIII nerve, central — presbyacusis, noise, ototoxicity, Ménière’s, vestibular schwannoma | **sensorineural** |\n| Both at once — unsafe CSOM with labyrinthitis, advanced otosclerosis | **mixed** |\n\n**⚠️ SNHL OR VERTIGO IN AN ACUTE OTITIS MEDIA MEANS IT IS NO LONGER SIMPLE AOM** — toxins across the round window give **serous labyrinthitis**, frank infection **suppurative labyrinthitis**; both are complications and both belong to `ent-csom`. *(The round-window route is **not taken from the course material**.)*",
        "qs": [
          "entqb-ear3-85",
          "entqb-ear3-55",
          "entqb-ear3-54"
        ]
      },
      {
        "id": "aom-7",
        "w": "must",
        "h": "⭐ Treatment of acute otitis media — and the 48-hour rule the bank mis-keys",
        "body": "**MEDICAL TREATMENT, `L21.1` verbatim and complete — four items:**\n\n1. **Antibiotics; UNTIL RESOLUTION**\n2. **Antihistaminics**\n3. **Decongestant**\n4. **Analgesic and antipyretics**\n\n**Treating the ear means treating the nose** — the antihistamine and decongestant exist to open a Eustachian tube held shut by allergy or coryza, which is why option \"antihistamines if the patient has allergies\" in `entqb-ear3-56` is a **genuine** treatment and not a trick.\n\n**⭐ THE 48-HOUR WATCHFUL-WAITING RULE.** In an otherwise healthy child with a **first, uncomplicated** episode and a **congested (not bulging)** drum, the first-line plan is **oral analgesia and antipyresis with review in 48 hours** — antibiotics only if not improving by **48–72 hours**. Keyed by `entep-ear-2`, by Grade Gain’s Q80, and described in `entqb-ear3-79`’s own printed box.\n\n> **⚠️⚠️ DEFECT — GRADE GAIN MIS-KEYS ITSELF AT `entqb-ear3-79`.** The page prints **\"Correct Answer: A\" (immediate antibiotics)** while **the explanation box on the same line describes option B** (symptomatic management with observation, antibiotics only if no improvement in 48–72 hours), and its own Q80 keys observation *without* antibiotics for the identical policy. **Keyed to B here and the printed key recorded**, per `CLAUDE.md` §4.\n\n**⚠️ WHEN WATCHFUL WAITING DOES *NOT* APPLY** — the exclusions hidden inside the phrase *\"first-time, without perforation\"*: **age under 6 months · a severely ill or toxic child · bilateral disease in the very young · an already perforated, discharging ear · recurrent attacks · immunocompromise.** Those get antibiotics at once. *(The age and severity thresholds are on no cached slide — **not taken from the course material**.)*\n\n**Why the alternatives fail in `entep-ear-2`:** **antibiotic ear drops cannot cross an intact drum**, so they treat nothing; **parenteral antibiotics** are for a toxic child, a failed oral course or a suspected complication; **myringotomy** is for pus under tension and there is no bulging drum here.\n\n**⭐ `entep-ear-230` — MANAGEMENT OF AOM, ALL EXCEPT.** The four legitimate measures are **systemic antibiotics · local and systemic pain control · cold fomentation and antipyretics · myringotomy if unresponsive**. **The exception is IMAGING** — the bank prints it as *\"MRI scan petrous bones\"* at p.696 and as *\"CT scan petrous bones\"* at p.734, keying **either modality** as the odd one out. **Acute otitis media is a CLINICAL diagnosis.** Cross-sectional imaging is for a **suspected complication**: failure to settle, post-auricular swelling, facial palsy, vertigo, or signs of intracranial spread.\n\n**⭐ NON-RESOLUTION vs RECURRENCE — `entep-ear-142` turns entirely on the distinction.** The commonest cause of **non-resolution** of an attack is **INADEQUATE ANTIBIOTIC THERAPY** — the wrong drug, too small a dose, or a course stopped the moment the pain settled. The slide is explicit: antibiotics run **\"until resolution\"**, not until the child feels better. **The distractors — repeated URTIs, nasal obstruction, low immunity — are all genuine causes of RECURRENCE, and none of them explains why *this* attack failed to clear once treatment started.**",
        "qs": [
          "entep-ear-2",
          "entqb-ear3-79",
          "entqb-ear3-56",
          "entep-ear-230",
          "entep-ear-142"
        ]
      },
      {
        "id": "aom-8",
        "w": "must",
        "h": "⭐⭐ Myringotomy — indications, the forbidden quadrant, and three EXCEPT questions",
        "body": "**DEFINITION** (`L15`, which is where the cached slide text defines it): **\"deliberate surgical incision of the tympanic membrane.\"** `L21.1` and `L21.2` both give it as the surgical arm, with **ventilation tube (grommet)** and **ventilation tube (T-tube)** pictured beside it.\n\n**⭐ INDICATIONS — assembled from the bank’s own lists (`entqb-ear3-56`, `entqb-ear3-86`) and the slides:**\n\n| Indication | Why |\n|---|---|\n| ⭐ **AOM with IMPENDING (pending) PERFORATION** — a bulging, nippling drum | Pus under tension. **A clean radial incision drains it, relieves pain at once and heals better than a ragged spontaneous tear.** `L21.1`: *\"if myringotomy is not done, spontaneous perforation will occur\"* |\n| **A THICK tympanic membrane in a child** | It will not perforate spontaneously however high the pressure rises |\n| ⭐ **A COMPLICATION — facial palsy or labyrinthitis** | Urgent. `entep-ear-191` keys myringotomy as the **FIRST** measure in a child with earache and facial palsy, ahead of IV antibiotics or steroids |\n| **AOM not responding to medical treatment** | `entep-ear-230` |\n| ⭐ **SECRETORY OTITIS MEDIA (OME) after failed medical treatment** | The operation *of choice* for effusion (`entep-ear-70`) |\n| **ATELECTASIS of the drum** | Collapsed onto the promontory by chronic negative pressure; a tube lifts it off and prevents adhesive OM and ossicular erosion |\n| **A small perforation draining inadequately; a high (attic) perforation** | `entep-ear-166` lists both as indications — enlarging or ventilating restores drainage |\n\n**⚠️ THREE \"EXCEPT\" QUESTIONS, THREE DIFFERENT EXCEPTIONS. Learn each with its own option list:**\n\n| Question | The exception | Why it is the exception |\n|---|---|---|\n| `entep-ear-166` — indicated in all drum appearances **except** | ⭐ **A CONGESTED DRUM** | The **first** stage of AOM — hyperaemia, no fluid under pressure yet. **Cutting it achieves nothing except injuring a drum that would have healed.** Treat medically |\n| `entqb-ear3-56` — **NOT** a treatment for AOM | ⭐ **\"MYRINGOTOMY IN ALL CASES\"** | The words *in all cases* do the work — it is a treatment, just not a routine one |\n| `entqb-ear3-86` — all require myringotomy **except** | ⭐ **OTOSCLEROSIS** | Fixation of the **stapes footplate** at the fissula ante fenestram. The middle ear is **dry and air-filled**, the drum **normal**. It needs **stapedectomy/stapedotomy** or a hearing aid — an incision in a normal drum touches nothing |\n\n*The examiner-pattern sheet prints the same line: \"myringotomy is indicated in all EXCEPT → otosclerosis\" (p.3066).*\n\n> **⚠️⚠️ THE POSTERO-SUPERIOR QUADRANT IS THE ONE PLACE A MYRINGOTOMY MUST NEVER BE MADE** — this is the *wrong statement* in `entep-ear-237`. Immediately medial to it lie the **incudostapedial joint and stapes** (incising there can dislocate the chain or drive the footplate into the vestibule = **a dead ear**), the **chorda tympani**, and the **facial nerve** at the second genu; the **round window niche** sits just below. **The safe incision is ANTERO-INFERIOR** — furthest from anything vital and the most dependent part, so it drains. *(Quadrant, structures at risk and complications are **not taken from the course material**.)*\n\n**Complications of myringotomy / a ventilation tube:** **residual perforation** (the option `entep-ear-237` correctly calls true), **tympanosclerosis**, **otorrhoea through the tube**, and **early extrusion or blockage** of a grommet.\n\n**⚠️ FOUR NEAR-IDENTICAL WORDS — the bank swaps them constantly:**\n\n| Operation | What it does |\n|---|---|\n| **MYRINGOTOMY** | **MAKES** a hole — to drain or to ventilate |\n| **MYRINGOPLASTY** | **CLOSES** a hole — grafts a perforation |\n| **TYMPANOPLASTY** | closes a hole **+ ossiculoplasty** (`L16`: *\"myringoplasty + ossiculoplasty\"*); the cram sheet prints it as *\"TM repair **with or without** ossiculoplasty\"* (pp.3060, 3063) |\n| **STAPEDECTOMY / STAPEDOTOMY** | replaces a **fixed stapes** — the operation for otosclerosis |\n\n**And why `entep-ear-70` keys secretory otitis media over the other three:** **otosclerosis** = stapes fixation → stapes surgery; **Ménière’s** = an **inner ear** disorder; **cholesteatoma** = tympano-mastoid surgery to remove disease — incising the drum achieves nothing in any of them.",
        "qs": [
          "entep-ear-70",
          "entep-ear-87",
          "entep-ear-166",
          "entep-ear-237",
          "entqb-ear3-56",
          "entqb-ear3-86"
        ]
      },
      {
        "id": "aom-9",
        "w": "must",
        "h": "⭐ Acute NECROTIC otitis media — a different disease, not a severe AOM",
        "body": "**⚠️ COVERED BY NO CACHED ENT LECTURE SLIDE.** All 34 ENT files return *\"necrotising\"* only in `L17,18`, and there it means **necrotising EXTERNAL otitis**. **Everything below is from general medical knowledge and the banks’ own boxes — not taken from the course material** — and is on the book-read list in `progress\\ledger.md` §11. **Six questions rest on it.**\n\n| | **Ordinary acute suppurative OM** | ⭐ **ACUTE NECROTIC OM** |\n|---|---|---|\n| **Organism** | *S. pneumoniae*, *H. influenzae*, *Moraxella* | ⭐ **GROUP A β-HAEMOLYTIC STREPTOCOCCUS** |\n| **Setting** | after a cold, any child | ⭐ **a debilitated child DURING or AFTER an exanthem — MEASLES, SCARLET FEVER, influenza** |\n| **Mechanism** | mucosal inflammation | **exotoxins THROMBOSE the drum’s small vessels** — the tissue they supply dies outright |\n| **Discharge** | **mucopurulent, odourless, profuse** | ⭐ **PURE PURULENT, scanty** — *there is no mucosa left to make mucus* |\n| **Perforation** | small, central, antero-inferior | ⭐ **LARGE, KIDNEY-SHAPED**, sometimes taking the annulus |\n| **Middle ear** | congested mucosa | ⭐ **BARE PROMONTORY** — mucosa gone, bone visible |\n| **Healing** | closes spontaneously | ⭐ **does NOT close — needs MYRINGOPLASTY** |\n\n**⭐ WHY THE DRUM DIES WHERE IT DOES.** The drum is fed from three directions, all from the **maxillary artery** — **manubrial** branches down the handle of the malleus, **circumferential** branches round the annulus, **radial** branches joining the two — so **the centre of the pars tensa is the WATERSHED**, where the three territories meet and the supply is thinnest. Grade Gain prints this beside `entqb-ear3-61` with a labelled diagram, and the box reads: *\"1st tissue to die is the **central kidney-shaped area of the pars tensa** as it has poor blood supply. Portions with good blood supply **along the manubrium, near the annulus tympanicus and the pars flaccida resist longer and may escape necrosis**. In severe cases most of the tympanic membrane including its annulus sloughs.\"*\n\n**⚠️ READING THE PHOTOGRAPH — `entqb-ear3-61`’s three options:**\n\n| Option | What the drum looks like |\n|---|---|\n| **Acute otitis media** | red → **bulging** → a **small central** perforation, the rest of the drum intact |\n| **Acute mastoiditis** | the drum may be perforated and discharging, but **the diagnosis is made BEHIND the ear** — mastoid tenderness and redness, sagging posterosuperior canal wall, pinna pushed out and down — **not on the drum** |\n| ⭐ **Acute necrotic OM** | **a large kidney-shaped loss of the central pars tensa**, sometimes taking the annulus, with a **bare promontory** beyond |\n\n**⚠️ `entqb-ear3-81` — \"causes all of the following EXCEPT\".** Pure purulent discharge ✔ · bare promontory ✔ · large kidney-shaped necrosis ✔ · ⭐ **MUCOPURULENT DISCHARGE ✘ — the mucosa that would make the mucus has been destroyed.**\n\n**⚠️ `entqb-ear3-59` KEYS *MYRINGOPLASTY* AS \"THE TREATMENT\", AND THAT NEEDS QUALIFYING.** **Antibiotics are given, urgently** — high-dose systemic cover against group A streptococcus, plus treatment of the exanthem and the child’s general condition — but they are true of *every* AOM, so they cannot distinguish this one. **Myringotomy is pointless: the drum has already necrosed away, there is nothing to incise.** **Myringoplasty is what this disease uniquely requires**, the perforation being large and permanent. **A stem asking the *immediate* treatment = antibiotics; this stem asks \"the treatment\" of the entity, and the bank keys the definitive repair.**\n\n**⚠️ THE NAME-TRAP, ASKED TWICE:** *acute necrotic otitis **MEDIA*** = **group A strep**, a child, after measles. *Necrotising (malignant) otitis **EXTERNA*** = ***Pseudomonas aeruginosa***, an **elderly uncontrolled diabetic**, skull-base osteomyelitis, cranial nerve palsies, IV antipseudomonal cover for **3–6 months** (`L17,18`). **Reading \"media\" versus \"externa\" is the whole question.** *Streptococcus hemolyticus* in acute necrotising otitis media (cram sheet p.3052) is one of only six named facts in the run with **no transcribed question behind it** — it is taught here.",
        "qs": [
          "entep-ear-86",
          "entep-ear-158",
          "entqb-ear3-58",
          "entqb-ear3-59",
          "entqb-ear3-61",
          "entqb-ear3-81"
        ]
      },
      {
        "id": "aom-10",
        "w": "must",
        "h": "Complications of AOM — the commonest one, and where the rest are taught",
        "body": "**Definition** (`L16`): extension of the inflammatory process **beyond the confines of the middle ear cleft**. **Three groups:**\n\n| Group | Members |\n|---|---|\n| **CRANIAL** | ⭐ **acute mastoiditis and mastoid abscess (MOST COMMON)** · petrositis · labyrinthitis · facial paralysis |\n| **INTRACRANIAL** | meningitis · extradural abscess · subdural abscess · brain abscess · lateral sinus thrombophlebitis |\n| **EXTRACRANIAL** | e.g. Bezold abscess in the neck |\n\n> **⭐ MASTOIDITIS IS THE COMMONEST COMPLICATION** (`L16`, in as many words), and the reason is **continuity, not virulence**. The **mastoid antrum is part of the middle ear cleft**, joined to it directly through the **aditus ad antrum** and lined by the same mucosa — the antrum is *\"the largest air cell\"* (`L22`). Infection does not have to erode anything or cross any barrier to reach it. **Every other complication requires infection to BREAK OUT** of the cleft: through bone to the labyrinth or facial canal, through bone and dura to the meninges. **The frequency ordering follows the anatomy exactly.** That is the answer to `entep-ear-50`, whose distractors — petrositis, labyrinthitis, facial paralysis, meningitis — are all downstream of a barrier.\n\n**⭐ `entep-enr-9` — AOM plus POST-AURICULAR REDNESS AND TENDERNESS = ACUTE MASTOIDITIS.** The sign is *on* the mastoid, so the complication is *in* the mastoid. **Why the other three cannot produce it:**\n\n| Option | What it actually gives |\n|---|---|\n| **Petrositis** | spread to the **petrous apex** → **Gradenigo syndrome**: otorrhoea + **retrobulbar pain (V)** + **diplopia from a VI palsy**. Nothing behind the ear |\n| **Labyrinthitis** | an **inner-ear** complication — **severe vertigo and SNHL**. Nothing visible |\n| **Extradural abscess** | **intracranial**, between bone and dura — often silent, or headache and persistent discharge. No localised post-auricular sign |\n\n**⚠️ THE LOOK-ALIKE THE SLIDE NAMES ITSELF: furunculosis of the external ear with post-auricular LYMPHADENITIS.** Separated by **tragal tenderness** (present with a furuncle, absent in mastoiditis), a **discrete mobile tender node** rather than diffuse swelling, **no mucoid discharge** (the canal has no mucous glands), and a **normal middle ear**.\n\n**⚠️ THE SULCUS, AND WHY TWO PRINTED ANSWERS BOTH READ TRUE.** The examiner sheet keys *\"postauricular redness and oedema with a **PRESERVED** sulcus → acute mastoiditis\"* (p.3064), while the sign usually taught is the **obliterated** sulcus. **Both are correct at different stages:** the sulcus is **preserved during the stage of mastoiditis itself** and is **obliterated once a SUBPERIOSTEAL ABSCESS forms** and pushes the auricle **outwards and downwards**.\n\n**Treatment follows the stage: acute mastoiditis → antibiotics; mastoid abscess → cortical mastoidectomy.**\n\n> **Everything above is the boundary only. The full treatment of acute mastoiditis, the compass of spread, Gradenigo’s triad element by element, labyrinthitis, facial palsy, brain abscess and lateral sinus thrombosis are taught in `ent-csom` §§csom-11 to csom-26 and are deliberately not repeated here.**",
        "qs": [
          "entep-ear-50",
          "entep-enr-9"
        ]
      },
      {
        "id": "aom-11",
        "w": "must",
        "h": "⭐⭐ Otitis media with effusion — definition, and the master AOM-vs-OME table",
        "body": "**DEFINITION** (`L21.2`, verbatim): **\"O.M. with effusion is a NON-SUPPURATIVE middle ear fluid.\"** The word *non-suppurative* decides most of the questions in this half of the chapter — **no active infection, therefore no pain and no fever.**\n\n**⭐ THE MASTER DISCRIMINATION OF THE CHAPTER:**\n\n| | **ACUTE OTITIS MEDIA** | **OTITIS MEDIA WITH EFFUSION** (glue ear, SOM, MEE) |\n|---|---|---|\n| **Nature** | **suppurative** — active infection | ⭐ **NON-SUPPURATIVE** — fluid only |\n| **Onset** | **rapid**, with a cold | **insidious**, often unnoticed |\n| **PAIN** | ⭐ **severe, throbbing** | ⭐ **NONE** (an earache means a superimposed AOM) |\n| **FEVER** | present | **absent** |\n| **Drum** | red → **BULGING** → perforates | **intact, DULL, opaque umber-yellow, RETRACTED, landmarks lost** |\n| **Discharge** | after perforation: mucopurulent, odourless | **none — the drum is intact** |\n| **Presenting complaint** | pain (infant: **pulling at the ear, irritability**) | ⭐ **HEARING LOSS ONLY** — heard as inattention, loud TV, delayed speech |\n| **Hearing loss** | slight before perforation, increases after | ⭐ **mild-to-moderate CONDUCTIVE, bilateral** |\n| **Tympanogram** | — | ⭐ **FLAT, TYPE B** |\n| **Treatment** | antibiotics until resolution + symptomatic; myringotomy for tension | **medical first, then myringotomy + ventilation tube** |\n\n**INCIDENCE** (`L21.2`, verbatim): *\"the disease of **infants and young age**\"* · **highest incidence 6–24 MONTHS** · **increases in WINTER and SPRING**.\n\n**AETIOLOGY — three routes the slide names:**\n\n1. **Persistence of fluid in the middle ear AFTER an acute otitis media has resolved** — the commonest, and the reason `entep-ear-234` keys OME for a retracted drum with conductive loss \"after inadequate treatment of ASOM\".\n2. **Eustachian tube malfunction** of any cause (§aom-12).\n3. **Air-pressure trauma** — *\"may occur after an **air flight or a scuba dive**\"* (§aom-12).\n\n**ORGANISMS** (`L21.2`): *\"mostly common isolated pathogens are **group A β-haemolytic streptococci and H. influenzae**\"* — the same upper-respiratory flora, which is why it is \"non-suppurative\" rather than sterile.\n\n**PATHOLOGY, three lines** (`L21.2`):\n\n| | |\n|---|---|\n| **Mucosal changes** | **dilatation of intercellular spaces with disruption of the basement membrane** |\n| **Inflammatory cells** | **PNL + lymphocytes + macrophages** |\n| **Inflammatory mediators** | **histamine, leukotrienes** |\n\n**⭐ THE THREE TYPES OF FLUID** (`L21.2`) — a small table the bank can ask directly:\n\n| Type | Description | Where |\n|---|---|---|\n| **SEROUS** | **sterile, pale yellow, watery and translucent** | thin effusion, partly ventilated ear (**this is the one that shows bubbles**) |\n| **MUCOID** | **cloudy exudate from cell secretion** | **SOM — \"glue\" ear** |\n| **PURULENT** | pus | **ASOM** |\n\n**⚠️ `entqb-ear3-68` — \"MEE typically presents with\": ear pain ✘, fever ✘, ⭐ CONDUCTIVE HEARING LOSS ✔.** Its printed box: *\"MEE is an accumulation of fluid behind an intact tympanic membrane which may be **asymptomatic except for fluid causing hearing deficit**.\"*",
        "qs": [
          "entqb-ear3-68",
          "entep-ear-234",
          "entep-ear-141"
        ]
      },
      {
        "id": "aom-12",
        "w": "must",
        "h": "⭐ Causes of effusion — the slide’s full list, and the four the bank keys",
        "body": "**`L21.2`’s \"RELATED CLINICAL CONDITIONS\" AND \"OTHER FACTORS\", complete:**\n\n| Cause | Mechanism |\n|---|---|\n| ⭐ **ADENOIDS · ADENOIDITIS** | **mechanical obstruction of the Eustachian tube orifice** + a reservoir of infection |\n| ⭐ **CLEFT PALATE** | **1) tensor and levator muscle dysfunction · 2) Eustachian tube stenosis** |\n| **Allergic oedema** | swelling of the tubal orifice; **adenoiditis, sinusitis, rhinitis** listed with it |\n| **Viral infection** | post-viral tubal oedema |\n| **Immunological deficiency** | recurrent infection |\n| **Radiotherapy** | fibrosis around the tube |\n| ⚠️ **IATROGENIC — POST-ADENOIDECTOMY** | scarring near the tubal orifice. **The slide lists the operation as a cause as well as a cure** — a reason for care, never a reason to withhold it |\n| **NASOPHARYNGEAL CARCINOMA** | `L21.1`, listed beside adenoids — **§aom-16** |\n| ⭐ **BAROTRAUMA** | *\"air pressure trauma… after an **air flight or a scuba dive**\"* |\n\n**⭐ THE FOUR VIGNETTE-KEYS, EACH WITH ITS OWN GIVEAWAY CLAUSE:**\n\n| Giveaway in the stem | Cause | Question |\n|---|---|---|\n| **Mouth breathing · snoring · HYPOnasality · inattention · 2–6 years** | ⭐ **ADENOID HYPERTROPHY** — and both diagnoses are wanted: adenoid **AND** secretory OM | `entep-ear-233` (keys *\"both\"*), `entep-case-13`, `entep-throat-case-2` |\n| **Nasal regurgitation of food · HYPERnasality · since birth** | ⭐ **CLEFT PALATE** (incl. submucous) | `enthd-ear-12`, `entep-case-11`, `entqb-ear1-17`, `entep-mfe5-25` |\n| **Pain and fullness ON DESCENT / before landing · blocked nose before flying · retracted drum with bubbles** | ⭐ **OTITIC BAROTRAUMA** | `entep-case-24` |\n| **Adult · UNILATERAL · ± neck node** | ⭐ **NASOPHARYNGEAL CARCINOMA** | §aom-16 |\n\n**⭐ OTITIC BAROTRAUMA, AND ITS PREVENTION.** On **descent** the ambient pressure rises faster than the middle ear can equalise; a tube blocked by coryza cannot open against the gradient, the drum is driven **inwards**, and transudate is drawn in — **retracted drum with bubbles behind it**. **The prevention is REGULAR SWALLOWING** (`entep-ear-189`), and it is not folk advice: `L22` states that the cartilaginous opening is *\"potentially closed\"* and **\"opens on YAWNING and SWALLOWING\"** — tensor and levator palati contract with the swallow and pull the tube open. **Why the distractors fail:** *opening and closing the mouth* moves the mandible without contracting the palatal muscles; *tossing the head* does nothing to tubal patency; *hands over the ears* covers the canal — the **wrong side of the drum**, and if anything it traps air laterally. **Sweets, chewing gum and drinking all work by inducing swallows**; `L21.2` lists **Valsalva and gum chewing** as Eustachian tube ventilation. **Anyone with a URTI should avoid flying** — a blocked tube cannot open however hard they swallow.\n\n**⚠️ CHILD BILATERAL vs ADULT UNILATERAL — the contrast the examiner builds most of this chapter on:**\n\n| | **Child, BILATERAL effusion** | **Adult, UNILATERAL effusion** |\n|---|---|---|\n| Usual cause | **adenoid hypertrophy** — a **midline** mass blocking **both** tubes; or an immature tube | ⭐ **NASOPHARYNGEAL CARCINOMA** until excluded |\n| Next step | treat the adenoid ± tubes | ⭐ **EXAMINE AND BIOPSY THE NASOPHARYNX** |\n| Cases | `entep-throat-case-2` | `entep-throat-case-15`, `entep-case-9` |",
        "qs": [
          "entep-ear-233",
          "entep-case-13",
          "entep-case-11",
          "entep-case-24",
          "entep-ear-189",
          "entep-throat-case-2",
          "entqb-ear3-75"
        ]
      },
      {
        "id": "aom-13",
        "w": "must",
        "h": "⭐ Otoscopy of an effusion — the five findings, and which one is MOST diagnostic",
        "body": "**THE FIVE DRUM FINDINGS, `L21.2` verbatim:**\n\n1. **Opaque UMBER-YELLOW colour**\n2. **ABSENT LANDMARKS — cone of light and umbo**\n3. **RETRACTED tympanic membrane**\n4. ⭐ **FLUID LEVEL, BUBBLING WITH VALSALVA**\n5. **LIMITED MOBILITY**\n\nPlus: **nasal and nasopharyngeal examination \"may reveal adenoid enlargement.\"**\n\n> **⭐ ONLY ONE OF THOSE IS \"MOST DIAGNOSTIC\", AND `entep-ear-177` IS BUILT ON THE DIFFERENCE.** A **hair-line FLUID LEVEL with retro-tympanic AIR BUBBLES** is a **direct view of an air-fluid interface in the middle ear** — nothing else produces it. **The other three options in that question are signs of RETRACTION, and retraction is the company effusion keeps, not proof of it:** negative pressure distorts the **cone of light** into a narrow elongated streak, **foreshortens the handle of the malleus** and throws its **short (transverse) process** into prominence. **All three occur in simple tube dysfunction with NO fluid at all — that is a type C tympanogram, not type B.** A **waxy or opaque** drum is likewise only suggestive. **Where the drum is equivocal, TYMPANOMETRY settles it.**\n\n**⚠️ BUBBLES MEAN THE EAR CONTAINS BOTH AIR AND FLUID** — so the tube is partly working and the effusion is **thin and serous**, not thick glue (`entqb-ear3-69`). And because the drum is **intact**, a photograph showing bubbles excludes *discharge* at a glance, just as the absence of redness and bulging excludes pain and fever. **Hearing loss is the only complaint left.**\n\n**⭐ READING THE PHOTOGRAPH — `entep-enr-29` offers four diagnoses over one otoscopic image, and each is excluded by the picture itself:**\n\n| Option | What the drum would show |\n|---|---|\n| **Acute suppurative OM** | **BULGING**, injected, nippling — and pain and fever. **This drum is RETRACTED** |\n| **Chronic suppurative OM** | a **PERFORATION** — central in safe disease, attic or marginal in unsafe — with discharge. **This membrane is WHOLE** |\n| **Glomus tumour** | a **bright red vascular MASS** behind the drum; first symptom **pulsatile tinnitus**. **There is no mass** |\n| ⭐ **MIDDLE EAR EFFUSION** | **intact, dull, retracted, landmarks absent, fluid showing through** |\n\n**HISTORY, `L21.2` verbatim — four items:** **1) decreased hearing · 2) earaches · 3) recurrent ASOM · 4) associated manifestations of adenoids or cleft palate.**\n\n**⚠️ NOTE THAT \"EARACHES\" IS ON THE SLIDE’S OWN LIST, YET EVERY QUESTION KEYS EFFUSION AS PAINLESS.** Both are true and the resolution is stated in `entqb-ear3-68`: **a child with an effusion who develops pain and fever has a SUPERIMPOSED acute otitis media** — the two conditions run into one another, which is why *recurrent ASOM* is on the effusion slide’s own symptom list. **On an MCQ, \"painless\" is the discriminator; in a vignette, a new pain means a new infection.**",
        "qs": [
          "entep-ear-177",
          "entqb-ear3-69",
          "entep-enr-29",
          "entep-case-9",
          "entep-ear-234"
        ]
      },
      {
        "id": "aom-14",
        "w": "must",
        "h": "⭐⭐ Investigating an effusion — the tympanogram table, and PTA versus tympanometry",
        "body": "**AUDIOLOGY OF OME** (`L21.2`, verbatim): **pure tone audiometry → CONDUCTIVE hearing loss, MILD TO MODERATE degree.** **Tympanometry → FLAT, TYPE B.**\n\n**RADIOLOGY** (`L21.2`): **plain X-ray for adenoids · CT nasopharynx.** *(The cram sheet confirms the first twice: \"best **imaging** modality for adenoids → plain X-ray\", pp.3048, 3054 — where the stem says* imaging *the answer is X-ray; where it does not, the bank keys nasopharyngoscopy.)*\n\n**⭐⭐ THE TYMPANOGRAM TABLE — one of the four most-repeated lines in the endpoint cram sheet (pp.3050, 3051, 3060, 3064). Learn all five curves:**\n\n| Curve | Middle ear pressure | Compliance | Cause |\n|---|---|---|---|\n| **Type A** | normal | normal | **normal ear** |\n| ⭐ **Type As** (*s = shallow / stiff*) | **normal** | ⭐ **REDUCED** | **STIFFNESS — tympanosclerosis, OTOSCLEROSIS** |\n| **Type Ad** | normal | **increased** | **FLACCIDITY — ossicular discontinuity, a very lax drum** |\n| ⭐ **Type B** | — | ⭐ **FLAT, non-compliant** | ⭐ **FLUID — middle ear effusion.** Also a **perforation or a patent grommet**, told apart by a **HIGH canal volume** |\n| **Type C** | ⭐ **NEGATIVE** | good | ⭐ **EUSTACHIAN TUBE DYSFUNCTION** (retraction without fluid) |\n\n*(Table structure from `L13,14`.)*\n\n> **⚠️ B versus As IS THE TRAP, AND THEY COME FROM OPPOSITE MECHANICAL FAULTS.** **Type B is a *fluid* curve** — the ear will not move because it is **full**, and the trace is **flat with no peak at all**. **Type As KEEPS ITS PEAK, at normal pressure**, because the ear is **air-filled and normally ventilated**; the peak is simply **low**, because drum and chain are **stiff**. **Type A is wrong for the tempting reason** — the pressure *is* normal, but normal compliance would mean a normally mobile drum, which the plaques have abolished. `entqb-ear3-90` keys **As** for tympanosclerosis; `entep-ear-4` keys **B** for a child with air bubbles behind the drum. **Same option family, different answers — read the pathology, not the list.**\n\n**⭐ WHAT TYMPANOMETRY ALSO TESTS** (`L21.1`, which prints the whole instrument slide): **1) mobility of the drum and ossicular chain (compliance)** — *reduced* in tympano-ossicular fixation, *absent* in middle ear effusion; **2) the ACOUSTIC (stapedial) REFLEX** — **absent in CHL**, **impaired in SNHL**. The cram sheet adds that tympanometry diagnoses **all of** ET dysfunction, middle-ear effusion and otosclerosis (p.3051).\n\n**⭐ WHY A TYMPANOGRAM BEATS A PURE TONE AUDIOGRAM IN A TODDLER — this is the whole of `entep-ear-114`.** PTA is **SUBJECTIVE** and needs cooperation a 2-year-old cannot reliably give; **tympanometry is OBJECTIVE and takes seconds**. *(The cram sheet gives the same reasoning one step further: hearing evaluation in a child → **evoked brainstem response (ABR)**, the gold standard, pp.3064, 3066.)* **X-ray mastoids, serum bilirubin and nystagmography** are the distractors and none of them looks at the middle ear.\n\n**PURE TONE AUDIOMETRY, from `L21.1`’s own slide** — *\"delivering sounds of variable frequencies and intensities via earphones and a bone vibrator\"*; the **threshold** is *\"the minimum intensity of sound necessary to be audible in at least **50 %** of presentations.\"* **Grades: normal <20 dB · mild 20–40 · moderate 40–60 · severe 60–90 · profound 90–110 dB.** **Speech audiometry** (SDS, SRS): scores are **excellent in cochlear lesions and poor in retrocochlear lesions.**\n\n**⭐ THE TUNING-FORK PATTERN OF A BILATERAL SYMMETRICAL EFFUSION — `entep-ear-101`.** Bone conduction **normal and symmetrical** (the cochlea works) + air conduction **reduced bilaterally** = a **bilateral CONDUCTIVE loss**; **Weber does NOT lateralise because both ears are equally affected.** In a school-age child struggling to hear the teacher, that is **glue ear**. Why the rest fail: a **perforation** would usually be unilateral and visible; **congenital SNHL** would depress bone conduction too; **otosclerosis and presbycusis** are adult diseases.\n\n**⚠️ IN A UNILATERAL CONDUCTIVE LOSS, WEBER LATERALISES *TO THE AFFECTED EAR*** — the blocked ear is shielded from masking room noise and conducts bone-conducted sound better. **In SNHL it goes to the BETTER ear.** This is the point most often got backwards, and `entep-throat-case-15` and `entep-ear-24` both state it in brackets. **Rinne is NEGATIVE on the conductive side** (bone better than air).",
        "qs": [
          "entep-ear-4",
          "entep-ear-114",
          "entep-ear-101",
          "entqb-ear3-90",
          "entqb-ear3-89",
          "entep-ear-24"
        ]
      },
      {
        "id": "aom-15",
        "w": "must",
        "h": "⭐ Glue ear is the commonest cause of childhood deafness — and it presents as behaviour",
        "body": "**⭐ FOUR SEPARATE QUESTIONS ASK THIS ONE FACT WITH FOUR DIFFERENT OPTION LISTS. The answer is always the effusion:**\n\n| Stem | Key | The list it beat |\n|---|---|---|\n| Commonest cause of **bilateral conductive deafness in a child** (`entep-ear-122`) | **OME** | otosclerosis · **acute** OM · congenital cholesteatoma · CSOM |\n| Commonest cause of **conductive hearing loss in a young child** (`entep-ear-148`) | **OME** | ear wax · congenital aural atresia · congenital cholesteatoma |\n| Commonest cause of **bilateral CHL in a child** (`entep-ear-245`) | **secretory OM** | otosclerosis · congenital cholesteatoma · **adhesive OM** |\n| Commonest cause of **diminution of hearing in a 5-year-old** (`entep-ear-250`) | **bilateral MEE** | congenital deaf mutism · tympanosclerosis with ossicular fixation · noise exposure · traumatic rupture |\n\n**⭐ WHY EACH DISTRACTOR LOSES — the bank recycles the same seven, so learn them once:**\n\n| Distractor | Why not |\n|---|---|\n| **Acute otitis media** | **painful, febrile, short-lived** — it deafens during the attack, not persistently |\n| **Otosclerosis** | **an ADULT disease** — typically the 3rd decade, classically worse in pregnancy. Type **As** tympanogram, **normal drum** |\n| **Congenital cholesteatoma** | **rare and almost always UNILATERAL** — a white mass behind an intact drum |\n| **CSOM** | usually **unilateral**, and announces itself with **discharge and a perforation** |\n| **Adhesive otitis media** | the **END STAGE of untreated glue ear** — downstream of the answer, so rarer than it (§aom-19) |\n| **Ear wax** | occludes only when it fills the canal completely, and is **easily seen** |\n| **Congenital aural atresia** | present **from birth**, usually unilateral, **visible on inspection** |\n| **Congenital deaf mutism** | present **from birth** — absent speech development, not *\"diminution\"*, which implies previously normal hearing |\n| **Tympanosclerosis with ossicular fixation** | a **late sequel** of repeated infection — years to develop, so older children and adults |\n| **Noise exposure** | occupational and cumulative **SNHL**; not a 5-year-old’s disease |\n| **Traumatic rupture** | a **single acute event with a clear history**, usually unilateral, and **most close within 3 months** |\n\n**⭐⭐ IT IS PAINLESS, AND THAT IS WHY IT IS MISSED.** `L21.2` lists **\"developmental and behavioural changes\" FIRST** among the complications — ahead of the atrophic drum, ossicular erosion, chronic OM and SNHL — which is the slide’s way of saying this is the complication that matters. **A child with glue ear does not complain of deafness. The child is brought because they:**\n\n- are **inattentive**, or thought naughty at nursery\n- turn the **television up**\n- **struggle in conversation**, missing consonants and word endings\n- have **delayed speech / language development**\n- are **falling behind at school** — `entep-case-14` is a teacher reporting deteriorating academic performance\n- **tug at the ears**, with **recurrent colds** and **no fever and no pain** — `entep-ear-213`\n\n> **⚠️ THE AUTISM TRAP — `entep-ear-213` prints it deliberately.** Inattention and poor conversational engagement look like a developmental disorder, and children with undiagnosed glue ear are sometimes labelled that way. **The recurrent URTIs, the ear tugging and the objectively reduced hearing point to the ear.** *Congenital* hearing loss would have been present from birth, not appearing at four after a run of colds; *bilateral SNHL* is possible but nothing suggests a cochlear cause, and the fluctuating course with URTIs is characteristic of effusion. **A tympanogram settles it in seconds.**\n\n**THE MECHANISM OF THE LANGUAGE DELAY**, because it is what justifies operating early (§aom-17): a bilateral effusion gives a **mild-to-moderate conductive loss in BOTH ears at once**. The child is not deaf — the child hears a **muffled** version of everything and builds an **incomplete phonological map** during the years that map is laid down. *(The phonological account is elaboration, **not taken from the course material**; the slide states only that developmental and behavioural changes occur.)*\n\n**The practical instruction:** **any child referred for poor listening, inattention or delayed speech gets a tympanogram**, and **any child with adenoids gets their hearing tested.**",
        "qs": [
          "entep-ear-122",
          "entep-ear-148",
          "entep-ear-245",
          "entep-ear-250",
          "entep-ear-213",
          "entep-case-14",
          "entep-ear-101"
        ]
      },
      {
        "id": "aom-16",
        "w": "must",
        "h": "⭐⭐ UNILATERAL EFFUSION IN AN ADULT = NASOPHARYNGEAL CARCINOMA — nine questions, one rule",
        "body": "> **⭐⭐ A UNILATERAL MIDDLE EAR EFFUSION IN AN ADULT IS NASOPHARYNGEAL CARCINOMA UNTIL THE NASOPHARYNX HAS BEEN LOOKED AT.** No qualification. **This is the single highest-yield rule in the chapter and it is asked nine ways.**\n\n**THE MECHANISM.** The Eustachian tube opens into the **lateral wall of the nasopharynx at the FOSSA OF ROSENMÜLLER**, which is also the **commonest site of origin of nasopharyngeal carcinoma** (cram sheet p.3065). A tumour there obstructs **that one tube**; the middle ear stops ventilating, **gas is absorbed, negative pressure develops, transudate follows** — exactly the sequence `L21.2` describes. `L21.1` names the cause outright, listing the predisposing factors for middle ear effusion as **\"Adenoids, Nasopharyngeal carcinoma.\"**\n\n**WHY AGE AND LATERALITY TOGETHER ARE THE ALARM.** A child’s effusion is **bilateral** and explained by adenoids or an immature tube. **An adult with a ONE-SIDED effusion has no benign explanation**, and the effusion may be the tumour’s **only sign** — before any node, any epistaxis, any nasal obstruction.\n\n**⭐ THE NINE PRINTINGS, AND WHAT EACH ADDS:**\n\n| Question | The stem | Key |\n|---|---|---|\n| `entqb-ear3-78` | the bare principle | **nasopharyngeal endoscopy** |\n| `entep-ear-49` | 71-year-old, unilateral effusion | **nasopharyngoscopy** |\n| `entep-ear-95` | unilateral secretory OM in an adult — *which disease* | **carcinoma nasopharynx** |\n| `entep-ear-159` | old **diabetic**, unilateral CHL + retracted drum | **nasopharyngoscopy AND BIOPSY** |\n| `entep-ear-24` | 55-year-old, type B, Rinne −ve, Weber to the same side, **+ upper deep cervical nodes** | **nasopharyngeal endoscopy** |\n| `entep-ear-66` | 50-year-old, **left nodes + left ear fullness**, *initial* modality | **nasal endoscopy** |\n| `entep-mfe5-1` | 50-year-old, **node + ear fullness, NORMAL otoscopy** | **nasopharyngoscopy** |\n| `entep-enr-5` | 60-year-old, unilateral effusion **3 months** | **nasal and nasopharyngeal endoscopy** |\n| `entep-throat-case-15` | 55-year-old, opaque retracted drum, Weber to the right | **SOM caused by NPC** — *both* halves wanted |\n\n**⚠️ EVERY WRONG OPTION IS A WAY OF MISSING IT, AND THE BANK RINGS THE CHANGES:**\n\n| Wrong option | Why it is wrong |\n|---|---|\n| **Grommet / myringotomy + tube** | drains the fluid, restores the hearing — **the symptom disappears and the cause is never sought** |\n| **Antibiotics, decongestants, steroids** | treats it as post-viral; the fluid may even clear briefly, which is **worse — falsely reassuring** |\n| **Observe / reassess in 3 months** | the correct instinct **in a child**; in an adult it is a three-month delay in diagnosing a carcinoma |\n| **Hearing aid** | amplifies the sign, ignores the disease |\n| **Audiogram / tympanometry** | **confirms an effusion that is not in doubt.** Its **cause** is what is in doubt |\n| **CT / MRI** | **stage** a tumour once found; **neither yields tissue**, and neither should precede simply looking |\n| **FNAC of the node** | samples the metastasis, not the primary — and endoscopy both **sees and samples** |\n| **CT temporal bone** | images the **wrong end of the tube** |\n| **Control the diabetes** | desirable, and no explanation for one-sided fluid |\n| **Glandular fever · parapharyngeal tumour · retropharyngeal abscess** (`entep-ear-95`) | **none of them obstructs the Eustachian tube orifice** in this way |\n\n**⚠️ ONE PRINTING RUNS THE OTHER WAY, AND YOU MUST READ THE OPTION LIST.** `entep-mfe5-23` gives *\"a patient with unilateral hearing loss… middle ear effusion\"* with **no age**, and keys **watchful waiting for 3 months** — because **nasopharyngoscopy is not offered** and the stem never says *adult*. **The key is the best option on the list, not the best action in life.** **Wherever an age of 50+ and \"unilateral\" appear together, and looking at the nasopharynx is on the list, that is the answer.**\n\n**TWO FINDINGS THAT RAISE IT FROM SUSPICION TO NEAR-CERTAINTY:** an **upper deep cervical node** on the same side, and **epistaxis or blood-stained postnasal discharge**.\n\n**⭐ TROTTER’S TRIAD** — conductive deafness · **ipsilateral palatal immobility** · **trigeminal neuralgia** — is nasopharyngeal carcinoma presenting through the ear. Other presentations: a **neck mass** (often the first sign), **nasal obstruction**, **cranial nerve palsies** with skull-base extension. **Raised marker: EBV titre** (cram sheet p.3046).\n\n**⚠️ NASOPHARYNGEAL CARCINOMA IS COVERED BY NO CACHED LECTURE BEYOND THE ONE LINE ABOVE.** Its epidemiology, staging and treatment appear nowhere in the 34 ENT files. **Everything in this section past the mechanism is answered from general medical knowledge — not taken from the course material** — and it is the highest-value single book-read target in ENT (`progress\\ledger.md` §11 item 3).",
        "qs": [
          "entqb-ear3-78",
          "entep-ear-49",
          "entep-ear-95",
          "entep-ear-159",
          "entep-ear-24",
          "entep-ear-66",
          "entep-mfe5-1",
          "entep-enr-5",
          "entep-throat-case-15",
          "entep-case-9",
          "entep-mfe5-23"
        ]
      },
      {
        "id": "aom-17",
        "w": "must",
        "h": "⭐⭐ Management of an effusion — the three-month ladder, and what overrides it",
        "body": "**`L21.2`’s MANAGEMENT SLIDE, verbatim and complete:**\n\n| | |\n|---|---|\n| **MEDICAL — I** | **Antibiotics · Antihistaminics · Corticosteroids** |\n| **MEDICAL — II** | **Eustachian tube ventilation: as Valsalva, gum chewing** |\n| **SURGICAL — I** | ⭐ **MYRINGOTOMY WITH VENTILATORY TUBES** |\n| **SURGICAL — II** | ⭐ **Surgical treatment of related conditions, as ADENOIDECTOMY** |\n\n**Add decongestants and treatment of any allergy or sinusitis to the medical arm** (`entqb-ear3-75`), and **autoinflation — Valsalva, gum chewing, balloon blowing.**\n\n**⭐⭐ THE LADDER. Ten questions are answered by reading one row:**\n\n| Situation | Answer | Question |\n|---|---|---|\n| **1 week**, bilateral | **conservative / medical** | `entqb-ear3-73` |\n| **after a common cold** | **conservative — decongestants + nasal steroids, watchful waiting** | `entqb-ear3-75` |\n| **1 month**, 4-year-old, **development NORMAL** | ⭐ **wait and see for 2 more months** | `entep-mfe5-26` |\n| ⭐ **1 month + LANGUAGE DELAY** | ⭐ **IMMEDIATE myringotomy + ventilation tubes** | `entep-mfe5-27`, `entqb-ear3-74` |\n| **after treated AOM — pain and fever gone, CHL persists** | **wait and watch 3 months** | `entep-nose-36` |\n| **> 3 months / > 90 days** despite adequate medical treatment | ⭐ **MYRINGOTOMY + GROMMET** | `entep-ear-41`, `entep-ear-212`, `entqb-ear3-72` |\n| **3 months + hearing loss and language delay** | **bilateral myringotomy + grommets** | `entep-ear-8` |\n| **6 months**, bilateral, school-age | **bilateral myringotomy + grommets** | `entep-ear-197`, `entep-mfe5-24` |\n| **recurrent, type B tympanogram** | **myringotomy + ventilation tubes** | `entep-ear-153` |\n| **with ADENOID HYPERTROPHY** | ⭐ **ADENOIDECTOMY *AND* VENTILATION TUBE — one operation** | `entqb-ear3-71` |\n| **with CLEFT PALATE** | ⭐ **T-TUBE** (§aom-18) | `entqb-ear3-70`, `entep-mfe5-25` |\n| **adult, unilateral** | ⭐ **NASOPHARYNGOSCOPY FIRST** (§aom-16) | `entqb-ear3-78` |\n\n> **⭐⭐ LANGUAGE DELAY OVERRIDES THE CLOCK. `entep-mfe5-26` and `entep-mfe5-27` are printed back to back as the SAME 4-year-old, SAME one month of bilateral effusion, SAME four options — and the answer flips from *wait 2 more months* to *immediate tubes* on that one clause.** The reason for watching is that the fluid may clear **before it does harm**; here it **has already done harm**. **A bilateral loss in a young child pulls the decision earlier too.**\n\n**⚠️ WHY EACH WRONG ANSWER IS WRONG AT ITS OWN POINT ON THE LADDER:**\n\n- **\"Continue medical therapy\" past 3 months** — it has been given adequately and has failed. **Repeating a failed treatment costs the child three more months of impaired hearing.**\n- **\"Long-term antibiotics\"** — the effusion is **non-suppurative**; there is no organism to suppress. Resistance and side effects for nothing.\n- **\"Long-term penicillin till the age of 15\"** (`entep-ear-249`) — that is **rheumatic fever prophylaxis**, printed purely to be recognised as belonging elsewhere.\n- **\"Tympanoplasty\"** (`entqb-ear3-72`) — the operation for a **PERFORATED** drum. Here the drum is **intact**; there is nothing to reconstruct. A category error.\n- **\"Hearing aid\"** — amplification for a loss that draining the ear abolishes; in a child it leaves the disease untreated. A fallback where surgery is refused or impossible.\n- **\"Adenoidectomy alone\"** (`entep-ear-197`, `entep-mfe5-24`) — a genuine part of management, **often done in the same sitting**, but it treats the cause without evacuating the fluid already there. **Not the treatment of choice on its own.**\n- **\"Myringotomy alone\"** — see §aom-18: the incision **heals in days**.\n- **\"Surgical drainage of the middle ear\"** (`entqb-ear3-79`) — **not a procedure that exists as such.**\n\n**⚠️ TWO PRINTED DEFECTS IN THIS SECTION, BOTH RECORDED RATHER THAN CORRECTED:**\n\n1. **`entep-ear-249` keys *\"systemic steroids only for 48 HOURS\"* as the INITIAL treatment of OME in children.** The slide names corticosteroids in the medical arm but **specifies no duration** — the 48-hour figure is the bank’s. The discriminator against its twin option is **duration**: weeks of systemic steroids in a child risks growth suppression, adrenal suppression and immunosuppression for a usually self-limiting condition. *(The harm reasoning is **not taken from the course material**.)* **Note also that watchful waiting for ~3 months, which the rest of the chapter keys, is not offered as an option there.**\n2. **`entqb-ear3-75`’s printed box calls allergic hyposensitisation and the Valsalva manoeuvre *\"the most IMPORTANT drugs\"*. They are not drugs at all.** The slide separates the two halves — drugs in (I), **Eustachian tube ventilation** in (II). Hyposensitisation belongs to the allergic patient. **The key itself is unaffected.**",
        "flow": {
          "title": "The effusion ladder — when does this ear need an operation?",
          "steps": [
            {
              "k": "decision",
              "t": "ADULT with a UNILATERAL effusion?",
              "yes": "⚠️ STOP — NASOPHARYNGEAL ENDOSCOPY AND BIOPSY FIRST. Do not treat the ear",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Is there DELAYED LANGUAGE DEVELOPMENT, or a measurable developmental cost?",
              "yes": "⭐ MYRINGOTOMY + VENTILATION TUBES NOW — the clock is overridden",
              "no": "Continue"
            },
            {
              "k": "step",
              "t": "MEDICAL TREATMENT — the slide’s two arms",
              "n": "I) antibiotics, antihistaminics, corticosteroids (± decongestants, treat allergy/sinusitis). II) Eustachian tube ventilation: Valsalva, gum chewing"
            },
            {
              "k": "decision",
              "t": "Has the effusion persisted 3 MONTHS (90 days) despite adequate medical treatment?",
              "yes": "⭐ MYRINGOTOMY + GROMMET",
              "no": "Keep watching — most effusions after a cold clear within weeks"
            },
            {
              "k": "decision",
              "t": "Is there an obstructing ADENOID?",
              "yes": "ADENOIDECTOMY IN THE SAME SITTING — remove the cause, ventilate the ear",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Is the tubal failure PERMANENT — cleft palate, craniofacial anomaly, post-irradiation?",
              "yes": "⭐ LONG-STAY T-TUBE, not a grommet that will extrude",
              "no": "Short-stay grommet"
            },
            {
              "k": "alert",
              "t": "⚠️ DO NOT REPEAT A FAILED MEDICAL COURSE",
              "n": "Three more months of impaired hearing, and language development does not wait"
            }
          ]
        },
        "qs": [
          "entqb-ear3-73",
          "entqb-ear3-75",
          "entqb-ear3-74",
          "entqb-ear3-72",
          "entqb-ear3-71",
          "entep-mfe5-26",
          "entep-mfe5-27",
          "entep-mfe5-24",
          "entep-mfe5-23",
          "entep-nose-36",
          "entep-ear-8",
          "entep-ear-41",
          "entep-ear-153",
          "entep-ear-197",
          "entep-ear-212",
          "entep-ear-249"
        ]
      },
      {
        "id": "aom-18",
        "w": "must",
        "h": "⭐ Grommet or T-tube — and why myringotomy alone is not enough",
        "body": "**⭐ MYRINGOTOMY ALONE EVACUATES THE FLUID AND THEN FAILS.** The incision **heals within days — often 48 to 72 hours.** The Eustachian tube that caused the effusion has not been fixed, so **fluid simply reaccumulates behind a freshly healed drum.** It is a temporary measure, and that is why `entep-ear-41` and `entep-ear-212` both key **myringotomy WITH a grommet** over **myringotomy alone**.\n\n**⭐ THE TWO TUBES — the discrimination `entqb-ear3-70` and `entep-mfe5-25` are built on:**\n\n| | **GROMMET** (short-stay ventilation tube) | ⭐ **T-TUBE** (long-stay / \"permanent\") |\n|---|---|---|\n| **Stays in** | ~**6–12 months**, then **extrudes on its own** | **years** — usually removed deliberately |\n| **Used for** | effusion from a **TEMPORARY** cause — adenoids, a cold, allergy | effusion from a **PERSISTENT** cause |\n| **The persistent causes** | — | ⭐ **CLEFT PALATE** · craniofacial anomaly · post-irradiation · chronic tubal failure · **recurrent extrusion with recurrent effusion** |\n| **Risk** | early extrusion, blockage | **higher risk of a persistent perforation** |\n\n*(The 6–12-month versus multi-year dwell times are **not taken from the course material**; `L21.1` pictures both tubes without giving durations.)*\n\n> **⭐ WHY A CLEFT PALATE GETS A T-TUBE FROM THE OUTSET.** The tensor veli palatini is malinserted, so **the tube will never open** — the failure is **structural and lifelong**. **A grommet extrudes while the tube is still not working**, the effusion returns, and the child needs repeated operations under repeated anaesthetics. `entep-mfe5-25` puts the same child in a vignette — hypernasal speech, nasal regurgitation, **recurrent painless watery ear discharge** — and keys the **T-tube** over the grommet, \"wait and see\" and medical treatment.\n\n**⚠️ WHY THE NON-SURGICAL OPTIONS FAIL IN BOTH QUESTIONS:** **antibiotics** treat infection and an effusion is **non-suppurative**; **hearing aids** amplify a loss that draining the ear abolishes and leave the middle ear disease untreated; **nasal decongestants** are part of the medical trial and **cannot shrink lymphoid hypertrophy**.\n\n**⚠️ MYRINGOPLASTY IS THE OPPOSITE OPERATION AND IS ALWAYS OFFERED AS A DISTRACTOR HERE.** It **closes** a perforation. In an effusion the drum is **intact** and the problem is that the ear **cannot ventilate** — sealing it further is exactly backwards.\n\n**Complications of a ventilation tube:** **otorrhoea through the tube · blockage · early extrusion · residual perforation · TYMPANOSCLEROSIS at the tube site** (§aom-19 — the commonest reason a child carries chalky plaques for life).",
        "qs": [
          "entqb-ear3-70",
          "entep-mfe5-25",
          "entep-ear-212",
          "entep-ear-41"
        ]
      },
      {
        "id": "aom-19",
        "w": "must",
        "h": "⭐ Sequelae of a neglected effusion — and the disputed SNHL key",
        "body": "**`L21.2`’s COMPLICATIONS LIST, verbatim, all five in order:**\n\n1. ⭐ **Developmental and behavioural changes** *(listed first — see §aom-15)*\n2. **Atrophic tympanic membrane**\n3. **Ossicular chain erosion**\n4. **Chronic O.M.**\n5. ⚠️ **SNHL**\n\n**⭐ THE NAMED END-POINTS, and the bank asks each by name:**\n\n| Entity | What it is | Loss |\n|---|---|---|\n| ⭐ **ADHESIVE OTITIS MEDIA** | The **sequel of long-standing OME** (`entep-ear-141`). The drum thins, **loses its fibrous middle layer**, and sustained negative pressure draws it in until it **lies against the promontory and ossicles and ADHERES**. The middle ear space is effectively obliterated | **permanent CONDUCTIVE** — the drum can no longer vibrate |\n| **ATELECTASIS** | The stage before adhesion — the drum **collapsed onto the promontory** by chronic negative pressure but not yet stuck. **An indication for myringotomy + ventilation tube** (`entqb-ear3-86`), which lifts it off | conductive |\n| ⭐ **TYMPANOSCLEROSIS** | **Chalky white plaques on the drum** — hyalinised, often **calcified collagen** in the fibrous layer and middle ear, classically **horseshoe- or crescent-shaped**, sparing the area round the handle of the malleus | usually **none**; **conductive** once it reaches the annulus or the ossicles |\n| **BLUE EAR (idiopathic haemotympanum)** | Long-standing effusion whose fluid becomes **dark and cholesterol-laden**, turning the drum **blue-black** | conductive |\n| **CHRONIC OTITIS MEDIA** | → `ent-csom` | — |\n\n**⚠️ `entep-ear-141` — \"the sequel of OME\" is ADHESIVE OTITIS MEDIA.** The other three options — **CSOM, acute mastoiditis, labyrinthitis** — all belong to **SUPPURATIVE** disease, and the excluding word is in the question: **OME is non-suppurative.** Mastoiditis and labyrinthitis are driven by pus under pressure; CSOM follows a **persistent perforation**, and an effusion sits behind an **intact** drum.\n\n**⭐ TYMPANOSCLEROSIS, ASKED AS A LINKED TRIO (`entqb-ear3-88` → `89` → `90`):**\n\n| | |\n|---|---|\n| **What the chalky white plaques are called** | **TYMPANOSCLEROSIS** |\n| **Where they come from** | repeated AOM · long-standing OME · ⭐ **the sites of PREVIOUS VENTILATION TUBES** — a child with two sets of grommets may carry them for life |\n| **If they reach the ANNULUS** | ⭐ **CONDUCTIVE loss.** The annulus is the fibrocartilaginous ring the drum is *suspended* from; plaque there **tethers the whole membrane at its rim**. `L19.1` lists tympanosclerosis **twice** among conductive causes — under *tympanic membrane* **and** under *ossicular fixation* — so it stiffens by two mechanisms at once |\n| **Tympanometry** | ⭐ **TYPE As** — normal pressure, **reduced compliance**. Not B (that is fluid), not A (that is a mobile drum) |\n| **Other findings** | **Rinne negative** on that side, **Weber to the worse ear**, **stapedial reflex typically absent** in any significant conductive lesion |\n\n**⚠️ Why not SNHL or Mixed in `entqb-ear3-89`:** SNHL requires damage **at or beyond the cochlea** — noise, ageing, ototoxicity, Ménière’s, schwannoma. **Tympanosclerosis is middle ear scarring; it never crosses the oval or round window.** *Mixed* would need an independent sensorineural lesion as well, and nothing supplies one.\n\n**⚠️ Distinguish the three white/blue look-alikes on a photograph by COLOUR:** **chalky white = tympanosclerosis** · **dull amber = effusion** · **blue-black = haemotympanum or a high jugular bulb** · **red and bulging = AOM**. **Otosclerosis leaves the drum NORMAL — that is the point of it as a distractor** (`entqb-ear3-88`).\n\n> **⚠️⚠️ DISPUTED KEY — `entqb-ear3-83`: \"all of the following are complications of MEE EXCEPT\" keys SNHL, and the Alexandria slide contradicts it.** The bank’s reasoning is sound on its own terms: a middle ear disease gives a **conductive** loss, so **blue ear ✔, tympanosclerosis ✔, CHL ✔** and SNHL is the outlier. **But `L21.2` lists SNHL as complication 5 of 5.** The mechanism is real — a long-standing effusion can let inflammatory mediators reach the cochlea **across the round window membrane** *(the round-window route is **not taken from the course material**)*. **In an examination set from the lecture, SNHL is NOT a safe \"except\".** Note also that the slide’s list contains **neither blue ear nor tympanosclerosis nor CHL**, so the question is not drawn from the slide at all. **Know both lists.** Key left as printed, per `CLAUDE.md` §4.",
        "qs": [
          "entep-ear-141",
          "entqb-ear3-83",
          "entqb-ear3-88",
          "entqb-ear3-89",
          "entqb-ear3-90",
          "entqb-ear3-86",
          "entep-ear-245"
        ]
      },
      {
        "id": "aom-20",
        "w": "must",
        "h": "⭐⭐ Traumatic perforation of the drum — ten questions, and the whole thing is one number",
        "body": "**⚠️ THE CACHED SLIDES DO NOT COVER TRAUMATIC PERFORATION OR ITS MANAGEMENT.** `L17,18` addresses trauma only as a cause of **CSF otorrhoea** (skull base fracture — confirmed by the **halo sign, β2-transferrin, β2-trace protein**; managed conservatively with head elevation, pressure-lowering medication and **strict water precautions**) and of **bloody otorrhoea** (skull base fracture, minor EAC trauma, glomus, EAC carcinoma). **Everything below is answered from general medical knowledge — not taken from the course material.** Ten questions rest on it. `MODULES` has no trauma chapter, so it is filed here.\n\n**⭐ A TEAR VERSUS A MELT — this is the whole of `entep-ear-129` and `entep-ear-242`:**\n\n| | ⭐ **TRAUMATIC (a TEAR)** | **INFECTIVE (a MELT)** |\n|---|---|---|\n| **Mechanism** | the drum **splits along its radial fibres** under sudden pressure | **pus under pressure necroses the drum from within outwards** |\n| ⭐ **SHAPE — the ONLY reliable discriminator** | **irregular, SLIT-LIKE or TRIANGULAR** | **round, oval or KIDNEY-SHAPED** |\n| **Edges** | **RAGGED, EVERTED**, often a **blood clot** at the margin | **smooth, ROLLED-IN** |\n| **Discharge** | **dry, or blood only** | **purulent** |\n| **Middle ear** | **normal** — no time for infection | **congested mucosa** |\n| **Site** | **pars tensa** — the part exposed to pressure | central (safe) or **attic/marginal (unsafe)** |\n\n> **⚠️ THE OTHER FOUR OPTIONS IN `entep-ear-129` DO NOT SEPARATE THEM.** **Size** runs from pinhole to subtotal in both. **Number** is one in both, as a rule. **Site** overlaps heavily — a central perforation may be either, and although an **attic or marginal** perforation is essentially always disease, its absence proves nothing. **\"Surface\"** is not a feature the drum is described by. **`entep-ear-242` inverts the same fact:** *purulent discharge*, *attic perforation* and *congested middle ear mucosa* are all features of **infection**, and **irregular edges** is the answer.\n\n**⭐⭐ MANAGEMENT IS ONE NUMBER: THREE MONTHS.**\n\n| Interval | Answer | Question |\n|---|---|---|\n| **Fresh, dry, uninfected** — a slap, a blast, a cotton bud, a blow to the head | ⭐ **NOTHING IN THE EAR + STRICT WATER PRECAUTIONS.** Most close spontaneously | `entep-ear-127`, `entep-ear-196`, `entep-ear-221`, `entep-ear-244`, `entqb-ear3-76` |\n| **Still open after ~3 months** | ⭐ **MYRINGOPLASTY** | `entqb-ear3-77` |\n| **6 months after a slap** | ⭐ **MYRINGOPLASTY** | `entep-enr-18` |\n\n**⚠️ WHY EVERY OTHER OPTION IS HARMFUL, NOT MERELY UNNECESSARY:**\n\n| Wrong answer | The harm |\n|---|---|\n| **Antibiotic ear drops** | instil fluid **through an open drum** into a **sterile** middle ear — **this is how a dry perforation becomes a discharging one**. Several topical **aminoglycosides are potentially OTOTOXIC** once the round window is exposed |\n| **Ear pack soaked with antibiotic** | pushes material towards the middle ear and **traps moisture**. There is nothing to hold in place |\n| ⚠️ **EAR WASH / syringing \"to remove the clots\"** | **the most tempting and the most harmful** — irrigation floods the middle ear. **The clots separate on their own** |\n| **Systemic antibiotics** | treat an infection that has not occurred |\n| **Immediate myringoplasty** | the **right operation at the wrong moment** — it repairs a drum that would have healed itself |\n| **Myringotomy ± tube** | an incision to drain an ear under pressure. **The drum is already open and there is nothing to drain** |\n| **Hearing aid** | the loss is **temporary** and recovers as the drum closes |\n| **Exploration under GA** | reserved for **suspected ossicular disruption or perilymph fistula** — i.e. **severe or sensorineural loss, or VERTIGO** |\n| **Tympanomastoidectomy** (`entep-enr-18`) | the operation for **unsafe attico-antral CSOM with cholesteatoma**. Here there is **no disease, only a hole** |\n| ⚠️ **\"No treatment is necessary; let it heal naturally\"** (`entqb-ear3-76`) | **the best distractor in the chapter.** It differs from the key by one thing — **water precautions** — and **followed literally it is how a self-limiting injury becomes chronic suppurative otitis media.** **Keeping the ear dry IS the treatment**, not advice |\n\n**PRACTICAL INSTRUCTIONS:** **cotton wool smeared with petroleum jelly for washing · no swimming · no diving · no drops · no syringing · review at three months.**\n\n> **⚠️⚠️ THE SAFETY NET, AND IT IS WHY \"WATCHFUL WAITING\" APPLIES TO THE PERFORATION AND NOT TO THE ASSESSMENT.** A blow hard enough to burst a drum can also **disrupt the ossicular chain**, open a **PERILYMPH FISTULA**, or **fracture the temporal bone**. **TEST THE HEARING — do not assume it.** A **mild conductive** loss is expected and recovers; **VERTIGO or a SENSORINEURAL loss means EXPLORATION.**\n\n**WHAT MYRINGOPLASTY IS**, for the 3-month-plus questions: a **graft — usually temporalis fascia or tragal perichondrium** — laid to close the perforation. It restores the drum’s **surface area and lever action**, abolishing the conductive loss, and seals the ear against water permanently. **`L19.1` gives the middle ear’s areal ratio as 55/3 = 17**, the transformer worth ~26 dB — **a hole in the drum throws part of that away**. Where the ossicles are damaged too, the operation becomes a **TYMPANOPLASTY**. **Before operating: the ear must be DRY and infection-free, and the hearing measured** — a loss larger than the perforation explains means the chain needs attention.\n\n**⚠️ IATROGENIC RUPTURE — `entep-case-2`.** Pain with **bleeding during ear syringing** = the jet has torn the drum. **Discharge appearing on the SECOND day is not part of the tear — it is SECONDARY INFECTION** of the now-open middle ear, i.e. acute otitis media. **Trauma first, infection after**, and water forced through a fresh perforation is the mechanism — which is exactly why water precautions are the core of managing any perforation.",
        "flow": {
          "title": "A perforated drum after trauma",
          "steps": [
            {
              "k": "step",
              "t": "CONFIRM IT IS TRAUMATIC",
              "n": "Irregular slit-like defect, RAGGED EVERTED edges, blood clot at the margin, dry, middle ear mucosa normal"
            },
            {
              "k": "decision",
              "t": "Is there VERTIGO, or a SENSORINEURAL / severe hearing loss?",
              "yes": "⚠️ EXPLORATION UNDER GA — suspect ossicular disruption or a PERILYMPH FISTULA",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Is the ear DRY and uninfected?",
              "yes": "Continue",
              "no": "Treat the infection first — a discharging ear will not heal and will not be grafted"
            },
            {
              "k": "step",
              "t": "NOTHING PER EAR + STRICT WATER PRECAUTIONS",
              "n": "Cotton wool with petroleum jelly for washing. No swimming, no diving, NO DROPS, NEVER SYRINGE. Test the hearing"
            },
            {
              "k": "decision",
              "t": "Still open at ~3 MONTHS?",
              "yes": "⭐ MYRINGOPLASTY — temporalis fascia or tragal perichondrium graft",
              "no": "Healed — discharge from follow-up"
            },
            {
              "k": "alert",
              "t": "⚠️ IRRIGATING OR INSTILLING DROPS THROUGH AN OPEN DRUM IS THE HARM",
              "n": "It converts a sterile self-healing tear into a discharging ear, and aminoglycoside drops are ototoxic past an exposed round window"
            }
          ]
        },
        "qs": [
          "entep-ear-127",
          "entep-ear-129",
          "entep-ear-196",
          "entep-ear-221",
          "entep-ear-242",
          "entep-ear-244",
          "entep-enr-18",
          "entqb-ear3-76",
          "entqb-ear3-77",
          "entep-case-2"
        ]
      },
      {
        "id": "aom-21",
        "w": "high",
        "h": "The one-page sieve — every vignette pattern in this chapter",
        "body": "**Read the vignette for the DISCRIMINATING CLAUSE, not for the general picture. One clause decides each of these:**\n\n| The clause that decides it | Answer |\n|---|---|\n| Child, **fever + earache after a cold**, drum **red / congested / no light reflex** | **ACUTE OTITIS MEDIA** before perforation |\n| **Bulging** drum + **severe throbbing** pain | ASOM, **stage of suppuration** — myringotomy if not settling |\n| Pain and fever **vanish as discharge appears** | **ASOM has PERFORATED** — improvement, not deterioration |\n| **Small pars tensa perforation + PULSATING discharge**, no previous attack | **perforated AOM** |\n| Infant, **pulling at the ear, night crying, irritability** 4 days after a cold | **AOM** — the pre-verbal presentation |\n| **Painless**, dull, **retracted** drum, landmarks gone | **OTITIS MEDIA WITH EFFUSION** |\n| **Bubbles / hair-line fluid level** behind an intact drum | **OME** — the most diagnostic sign |\n| Child **inattentive, TV loud, delayed speech, no pain, no fever** | **bilateral OME** — get a tympanogram |\n| Teacher reports **falling school performance** after ear infections | **middle ear disease — test the hearing** |\n| Child **snoring + mouth breathing + HYPOnasal + not hearing** | **ADENOID hypertrophy + secretory OM** (both) |\n| **Nasal regurgitation + HYPERnasal + since birth** | **CLEFT PALATE** → glue ear → **T-TUBE** |\n| Pain and fullness **on aircraft DESCENT**, blocked nose, retracted drum with bubbles | **OTITIC BAROTRAUMA** |\n| ⭐ **ADULT + UNILATERAL effusion** (± neck node, ± diabetic, ± normal otoscopy) | ⭐ **NASOPHARYNGEAL CARCINOMA — scope the nasopharynx** |\n| Debilitated child **after measles / scarlet fever**, **scanty pure purulent** discharge, **large kidney-shaped** perforation, **bare promontory** | **ACUTE NECROTIC OTITIS MEDIA** — group A strep |\n| **Elderly uncontrolled diabetic**, severe night ear pain, granulations | **MALIGNANT OTITIS EXTERNA** — *Pseudomonas* |\n| AOM + **post-auricular redness and tenderness**, pinna pushed out and down | **ACUTE MASTOIDITIS** → `ent-csom` |\n| Post-auricular tenderness **+ tragal tenderness + a discrete node**, normal middle ear | **furunculosis with post-auricular lymphadenitis** |\n| **Ragged perforation + blood clots** after a slap or blow | **TRAUMATIC perforation** — nothing per ear, keep dry, 3 months |\n| **Bleeding during ear syringing**, then discharge on day 2 | **iatrogenic rupture + secondary AOM** |\n| Perforation **still open at 6 months** after trauma | **MYRINGOPLASTY** |\n| **Chalky white plaques** on the drum | **TYMPANOSCLEROSIS** — Type As if it reaches the annulus |\n| **Tragal tenderness, pain on pulling the auricle**, normal drum | **otitis externa / furuncle** — not middle ear at all |\n| **Vesicles** on the drum or canal | **bullous myringitis / herpes zoster** (`L17,18`) — not AOM |\n\n**⭐ AND THE FIVE NUMBERS THE BANK PRINTS WITHOUT PARAPHRASE:** **3 weeks** = the acute/chronic boundary of otitis media · **48–72 hours** = watchful waiting before antibiotics in a first uncomplicated AOM · **3 months / 90 days** = when an effusion becomes surgical, and when a traumatic perforation becomes myringoplasty · **6–24 months** = peak incidence of OME · **50 %** = the pneumococcus’s share of AOM.",
        "qs": [
          "entep-ear-104",
          "entep-ear-110",
          "entep-ear-183",
          "entep-case-8",
          "entep-case-10",
          "entep-case-36",
          "entep-case-24",
          "entep-case-13",
          "entep-case-11",
          "entep-ear-213",
          "entep-enr-9",
          "entqb-ear3-61",
          "entep-case-2",
          "entqb-ear3-88"
        ]
      },
      {
        "id": "aom-22",
        "w": "know",
        "h": "What these notes deliberately leave out, and where they rest on outside knowledge",
        "body": "**Recorded so a gap is a decision rather than an accident, as the project’s rules require.**\n\n**LEFT OUT ON PURPOSE:**\n\n- **Chronic suppurative otitis media, cholesteatoma, the safe/unsafe division, and every complication past the boundary in §aom-10** — all of it is written in **`ent-csom`** and repeating it here would duplicate 28 sections. Only the discriminators are kept.\n- **Otitis externa, otomycosis, malignant otitis externa, furunculosis, wax and foreign bodies** — they appear here only as the distractors this chapter’s questions actually print. They belong to **`ent-otorrhea`** and **`ent-otalgia`**.\n- **Antibiotic names, doses and courses.** `L21.1` says *\"antibiotics; until resolution\"* and nothing more. **No drug, dose or duration is stated anywhere in the cached ENT material for AOM, and none has been invented.** The only durations the material or the banks state — **48–72 hours**, **3 months**, **90 days**, **6 months** — are kept because they are keyed answers.\n- **Operative technique.** How a myringotomy is made, how a grommet is seated, graft harvesting beyond naming temporalis fascia and tragal perichondrium, and the anaesthetic. **The bank asks *which* operation and *why*, never *how*.**\n- **Epidemiology beyond the two figures the slides state** (6–24 months, winter and spring).\n- **Immunology and molecular mechanism.** `L21.2` names *histamine and leukotrienes* and stops; so does this chapter.\n- **The full audiovestibular battery** — masking, SISI, tone decay, OAEs, the details of ABR. They belong to **`ent-audio`**; only the tympanogram table and the PTA grades the effusion questions need are kept.\n- **Grading and staging of adenoid hypertrophy**, which belongs to `ent-tonsils`.\n\n**WHERE THESE NOTES REST ON KNOWLEDGE THE COURSE MATERIAL DOES NOT SUPPLY** — each is tagged in place, and collected here so the reader knows exactly which sentences a lecturer might contradict:\n\n| Point | Section |\n|---|---|\n| **Acute necrotic otitis media in its entirety** — absent from all 34 cached ENT files; the banks’ own boxes and general knowledge carry it | §aom-9 |\n| **Nasopharyngeal carcinoma past the one-line mention** as a cause of effusion — no epidemiology, staging or treatment anywhere in the material. **The highest-value book-read target in ENT** | §aom-16 |\n| **Traumatic perforation and its whole management** — the slides cover ear trauma only as a cause of CSF and bloody otorrhoea | §aom-20 |\n| **The quadrants of the drum**, the structures behind the postero-superior quadrant, and the antero-inferior siting of a myringotomy | §aom-2, §aom-8 |\n| **The acute / subacute / chronic week-and-month boundaries** (3 weeks, 3 months) | §aom-3 |\n| **The 48–72-hour watchful-waiting rule and its exclusions** (age <6 months, toxicity, bilateral in the very young, recurrence, immunocompromise) | §aom-7 |\n| **Grommet versus T-tube dwell times** | §aom-18 |\n| **The round-window route** by which an effusion could reach the cochlea | §aom-19 |\n| **Composition and shape of tympanosclerotic plaques**, and their link to previous ventilation tubes | §aom-19 |\n| **The phonological mechanism** of language delay | §aom-15 |\n| **Steroid harm in children** (growth, adrenal, immune suppression) behind `entep-ear-249`’s 48-hour key | §aom-17 |\n| **Ototoxicity of aminoglycoside drops past an exposed round window** | §aom-20 |\n\n**THREE PRINTED DEFECTS CARRIED FORWARD, ANSWERED AS THE BANK KEYS THEM WITH THE DISCREPANCY NOTED** (`CLAUDE.md` §4, and the user’s ruling of 2026-08-11):\n\n1. **`entqb-ear3-79`** — Grade Gain prints *\"Correct Answer: A\"* while its own explanation box and its own next question describe **B**. **Keyed to B, printed key recorded** (§aom-7).\n2. **`entqb-ear3-83`** — keys **SNHL** as the non-complication of effusion; **`L21.2` lists SNHL as complication 5 of 5**. **Key left as printed, conflict stated** (§aom-19).\n3. **`entqb-ear1-17`** and **`entqb-ear3-75`** — one calls the **bony** end the muscle-opened end (it is the **cartilaginous** end), the other calls **hyposensitisation and Valsalva** *\"the most important drugs\"* (neither is a drug). **Both recorded, neither key affected** (§aom-1, §aom-17).\n\n**⚠️ THIS CHAPTER WAS WRITTEN DURING THE THEORY-FIRST SPRINT, BEFORE ENT’S BANKS CLOSED** (Grade Gain topic 10 and the whole of House `d house ENT mcq.pdf` from PDF p.15 are outstanding). **The reconciliation pass required by `START-HERE.md` §13.3 is owed:** when those banks close, re-check every new `ent-aom` question against these notes and patch. The 106 questions that exist today are all linked in `qs`.",
        "qs": []
      }
    ]
  },
  "ent-stridor": {
    "intro": "The **second-largest chapter in the ENT bank — 113 transcribed questions** — and it is really three chapters bolted together: **the sign** (what stridor is and where it comes from), **the causes** (foreign body, infection, trauma, intubation, tumour), and **the operation** (tracheostomy, its levels, its tubes and its complications). Almost everything is answered from **one lecture**, `L6) Stridor  and tracheostomy.pdf`, and the examiner quotes its slides so literally that four or five of them are worth knowing by heart.\n\n**1. The phase-to-site rule, asked twelve different ways.** *Inspiratory = supraglottic and glottic · biphasic = subglottic and tracheal · expiratory = bronchial.* Three lines on one slide, and they answer the questions about vocal-cord lesions, subglottic tumours, tracheal stenosis, asthma, wheeze, brassy cough and the hot-potato voice. **Learn it as a two-way mapping** — the bank gives the phase and asks for the site, then gives the site and asks for the phase, on adjacent pages.\n\n**2. Timing decides the complication.** `L6` prints **three separate complication lists** — operative, early postoperative, late postoperative — and most of the tracheostomy questions are simply *\"which list is this on?\"*. The same word appears on two lists (bleeding, RLN injury, pneumothorax), so the stem word — *operative*, *early*, *immediate*, *after five days*, *two hours* — is the whole question.\n\n**3. Three levels, three different judgements — and they must not be merged.** High is the most **damaging** (cricoid), mid is the most **difficult** (thyroid isthmus), low is the most **dangerous** (innominate artery, pleural dome). Each is asked separately, and each has an exception where it becomes the level of choice.\n\n**4. Pairs with identical option lists and opposite keys.** Adrenaline versus calcium over one four-option menu. Inner cannula versus outer cannula over one five-day rule. Grade II versus Grade III over one set of three adjectives. **The bank builds these deliberately; learn them as pairs, never singly.**\n\n**5. Numbers, quoted exactly.** PO2 < 60, PCO2 > 50, **pH < 7.2** (a distractor prints 7.3), dead space 70–100 ml cut by 10–50 %, right bronchus 57 % / left 33 % / trachea 6 % / larynx 4 %, subglottis 4.5 mm, mortality 20 % before endoscopy and under 2 % after, rings 1–2 / 3–4 / 5–6, five days, fifteen seconds.\n\n**6. Negative stems everywhere** — *all of the following EXCEPT*, *which is NOT true*. You cannot answer these from the key alone; every option has to be placed.\n\n**7. And an unusual density of printed defects.** Nine keys in this chapter are recorded as printed and annotated rather than corrected: a barking cough keyed *supraglottic* when the material puts it subglottic and no option offers it, a *supra-laryngeal* hot-potato voice contradicting the bank’s own box, a *\"narrowing increases airflow\"* stem that means velocity, a five-option list, two *all of the above* keys, and a mirror-laryngoscopy answer that contradicts the flexible-scope answer four questions earlier. **Each is flagged in the notes at the point it arises. Answer as the bank prints it and know why it is wrong.**",
    "sections": [
      {
        "id": "strid-1",
        "w": "must",
        "h": "⭐ Naming the noise — stridor, stertor, wheeze",
        "body": "> **`L6`, one slide, three definitions.** **STRIDOR** — *\"difficult noisy breathing due to **partial** airway obstruction **at or immediately below the larynx**\"*; types *\"inspiratory – biphasic – expiratory\"*. **STERTOR** — *\"**low pitched snoring or snuffly sound (always inspiratory)** — noisy breathing due to airway obstruction at **nasal &/or pharyngeal** level\"*. **WHEEZING** — *\"**whistling sound, mainly expiratory**, arising from **lower airway obstruction** — asthma, COD, foreign body in trachea\"*.\n\n| | **STERTOR** | **STRIDOR** | **WHEEZE** |\n|---|---|---|---|\n| **Pitch** | **Low** | **High** | Whistling, musical |\n| Quality | Snoring, snuffly | Harsh, crowing, **monophonic** | **Polyphonic** |\n| **Phase** | **ALWAYS inspiratory** | **Varies by level** (see next section) | **Mainly expiratory** |\n| **Level** | **Nose and pharynx — ABOVE the larynx** | **At or just below the larynx** | Bronchi and below |\n| Loudest over | Face and mouth | **The NECK** | **The CHEST, widespread** |\n| Causes | Adenoid or tonsillar hypertrophy, nasal or nasopharyngeal mass, retropharyngeal or parapharyngeal abscess, OSA | The whole of this chapter | Asthma, COD, **inhaled foreign body** |\n| Urgency | Usually chronic | **A laryngeal emergency until proved otherwise** | Physician territory, except the foreign body |\n\n**⚠️ SITE SEPARATES STRIDOR FROM STERTOR, NOT PHASE — both can be purely inspiratory.** Pitch is the clue: stertor is **large, floppy, low-tension soft tissue** flapping in a wide pharynx; stridor is **taut mucosa over cartilage in a narrow rigid segment** *(acoustic reasoning not taken from the course material)*. Stertor is always inspiratory because the pharynx is a **collapsible tube with no cartilage** — inspiration drops the pressure inside and partly collapses it, expiration blows it open. That is also the mechanism of snoring and OSA.\n\n**⚠️ A COMPLETE OBSTRUCTION IS SILENT.** Every one of these noises needs **air moving past a PARTIAL narrowing** — `L6` writes *partial* into the definition of stridor. **No flow, no turbulence, no sound.** So complete obstruction above the larynx gives **suffocation**, not stertor: change the stem word from *complete* to *partial* and stertor becomes the answer.\n\n> **⚠️⚠️ THE SINGLE MOST DANGEROUS CLINICAL INVERSION IN THIS CHAPTER: A PATIENT WHO WAS NOISY AND HAS GONE QUIET HAS EITHER CLEARED OR STOPPED VENTILATING.** Look at the patient, not the monitor. Pink, calm, easy breathing = improved. Pale, exhausted, cyanosed, **bradycardic** = peri-arrest — and `L6` files cyanosis and bradycardia as its two **late signs**. **A fading stridor in a tiring patient is worsening obstruction.** *(Interpretation not taken from the course material; the late signs are `L6`’s.)*\n\n**WHAT STRIDOR IS *NOT* — four errors the bank tests as separate options:**\n\n| Wrong statement | Why it is wrong |\n|---|---|\n| *\"Sound produced due to **nasal** obstruction\"* | That is **stertor** |\n| *\"It **is** respiratory distress\"* | **Wrong category — a SOUND is not a clinical state.** `L6`’s Grade I is *\"mild difficult noisy breathing… **no dyspnea**… PO2 > 95 %\"* — noisy and comfortable. And a near-obstructed patient can be quiet |\n| *\"A disease due to **calcium deficiency**\"* | Stridor is not a disease. Hypocalcaemia is **one cause** of it (laryngeal spasm) — the option inverts sign and cause |\n| *\"Only a **symptom**, not a sign\"* | **It is both** — the patient hears it and the examiner grades it. Anything gradeable at the bedside is a sign |\n\n> **✔ THE KEYED TRUTH, AND THE GOVERNING IDEA OF THE WHOLE TOPIC: *\"IT IS NEVER A DIAGNOSIS NOR A DISEASE.\"*** `L6` gives three whole slides to causes precisely because *stridor* names a noise. Writing it as a diagnosis is the same error as writing *\"fever\"*. **Hearing it starts the assessment: WHICH PHASE (site) · WHICH GRADE (urgency) · WHICH CAUSE (age columns).**\n\n**Four further statements the bank keys TRUE in one *all the above* question:** it is *\"an auditory manifestation of disordered respiratory function due to airflow changes within the **larynx, trachea, or bronchi**\"* — the **broad** usage, which `L6`’s own phase rule supports by running down to the bronchi, against the **narrow** usage that reserves *stridor* for larynx and trachea and calls the bronchial noise a *wheeze*; **both appear in this bank, and the option list tells you which is meant** · it is *\"due to **turbulence** of airflow within a **partially** obstructed respiratory tract\"* — laminar flow is silent · it *\"can be described in terms of its relationship to the **phase** of the respiratory cycle\"* · and *\"it needs investigations in every case\"*.\n\n**⚠️ DEFECT RECORDED, KEY LEFT AS PRINTED.** *\"Investigations in every case\"* is made true by an *all the above* key and overstates practice — `L12` has laryngomalacia diagnosed clinically and resolving spontaneously in *\"18–24 months in 80–90 % of cases\"*. **The defensible reading is that every case must be ASSESSED until a cause is established**, which is `L6`’s own logic. **The structural lesson: where three options are unarguably true and the fourth is merely overstated, *all the above* is the intended key** — contrast the humidification question in strid-23, where *all of the above* is **wrong** because two options are about something else entirely. **Test whether the doubtful option is FALSE or just EMPHATIC.**\n\n**One more distractor worth naming: CRACKLES** are not an airway-obstruction sound at all — discontinuous popping heard on **auscultation of the lungs** as alveoli and small airways open, in pneumonia, pulmonary oedema or fibrosis *(not taken from the course material)*.",
        "qs": [
          "entqb-thr8-382",
          "entqb-thr8-383",
          "entqb-thr8-434",
          "entqb-thr8-438",
          "entqb-thr8-440",
          "entqb-thr8-390",
          "entep-throat-96",
          "entep-throat-90"
        ]
      },
      {
        "id": "strid-2",
        "w": "must",
        "h": "⭐⭐ The phase-to-site rule — the highest-yield slide in ENT",
        "body": "> **`L6`, verbatim, and it answers twelve questions in this chapter:** *\"**Inspiratory** in **supraglottic & glottic** obstruction. **Inspiratory & Expiratory** in **subglottic and tracheal** obstruction. **Expiratory** in **bronchial** obstruction.\"*\n\n| Level | **Stridor** | **Voice** | **Cough** | Examples |\n|---|---|---|---|---|\n| **Supra-laryngeal** (nose, pharynx, tongue base) | Stertor, inspiratory | **Muffled — \"hot potato\"** | — | Quinsy, parapharyngeal abscess, tongue-base mass, adenoids |\n| **Supraglottic** | **Inspiratory** | **Muffled** | Absent | **Epiglottitis**, supraglottic carcinoma, laryngomalacia, supraglottic oedema |\n| **Glottic** | **Inspiratory** | **HOARSE** | Barking | Glottic carcinoma, **bilateral abductor palsy**, laryngeal web, papillomatosis, cord spasm |\n| **Subglottic** | **BIPHASIC** | **NORMAL** | **Barking (croup) / brassy** | **Croup**, subglottic stenosis, subglottic haemangioma, subglottic tumour, scleroma, cricoid injury |\n| **Cervical (extrathoracic) trachea** | **BIPHASIC** | **NORMAL** | **Brassy** | Post-intubation tracheal stenosis, tracheal foreign body, tracheomalacia |\n| **Intrathoracic trachea, bronchi** | **EXPIRATORY** (= a wheeze) | Normal | ± | Asthma, COD, **bronchial foreign body** |\n\n**⚠️ WHY THE PHASE FOLLOWS THE SITE — the dividing line is the THORACIC INLET** *(derivation not taken from the course material; the rule is `L6`’s)*.\n\n| | **Extrathoracic** (supraglottis → cervical trachea) | **Intrathoracic** (distal trachea, bronchi) |\n|---|---|---|\n| **Inspiration** | Pressure inside falls below atmospheric → the airway is **sucked NARROWER** → **noise** | Negative pleural pressure **pulls the airway open** → quiet |\n| **Expiration** | Positive pressure inside **splints it open** → quiet | Positive pleural pressure **squeezes it shut** → **noise** |\n\n**⚠️ AND A FIXED, RIGID NARROWING OBSTRUCTS IN BOTH PHASES.** The subglottis is enclosed by the **cricoid — the only complete cartilaginous ring in the airway** — so a scar or tumour there can be neither pulled open on inspiration nor splinted open on expiration. **That gives an inference worth more than the list itself: BIPHASIC STRIDOR MEANS A FIXED LESION, NOT A FLOPPY ONE — so it means imaging and endoscopy, not observation.** A dynamic lesion varies with phase: laryngomalacia is inspiratory and worse supine, tracheomalacia expiratory.\n\n**⚠️ THE VOICE IS A FREE EXAMINATION OF THE GLOTTIS, AVAILABLE BEFORE ANY INSTRUMENT.**\n\n| Voice | Level | Mechanism |\n|---|---|---|\n| **Muffled / hot potato** | **ABOVE the cords** | Cords vibrate normally; the sound is **damped in the resonating cavity** on its way out |\n| **Hoarse** | **AT the cords** | The vibrating edge itself is diseased |\n| **NORMAL + stridor** | **BELOW the cords** | **⚠️ THE DANGEROUS COMBINATION** — the lesion sits inside the complete cricoid ring where swelling has nowhere to go |\n\n**⚠️ AND THAT IS WHY GLOTTIC CANCER PRESENTS EARLY AND SUPRAGLOTTIC CANCER PRESENTS LATE.** `L6`, Neoplasms slide: *\"**Glottic & Supraglottic — LATE stridor. Subglottic — EARLY stridor.**\"* A glottic tumour announces itself as **hoarseness** while still millimetres across; a supraglottic one only **muffles** the voice and is blamed on a sore throat, so it is often advanced with nodes at presentation.\n\n**HOW THE QUESTIONS FALL OUT OF THE TABLE:**\n\n- *Lesion at the level of the vocal cord* → **inspiratory only** (asked twice). Not biphasic — that is a centimetre lower, at the subglottis, and the centimetre changes the answer.\n- *Inspiratory stridor is seen in obstruction of…* larynx / trachea / bronchus / bronchiole → **LARYNX**. The trachea is biphasic; bronchus and bronchiole are expiratory, which by definition is not stridor.\n- *Which causes expiratory stridor* → **bronchial obstruction**. *Expiratory stridor* and *wheeze* are the same noise from the same place, and `L6` uses both words.\n- *Causes of inspiratory stridor EXCEPT* → **bronchial asthma**, the only option below the trachea. Epiglottitis is supraglottic, glottic carcinoma glottic, recurrent laryngeal papilloma laryngeal — all inspiratory.\n- *Biphasic stridor may be due to…* → **tracheal stenosis** in one printing and **subglottic tumour** in another; both sit in the subglottic-tracheal band, so the bank is consistent. **Bronchial asthma** (expiratory), **vocal cord paralysis** and **glottic carcinoma** (glottic, inspiratory) are the distractors both times.\n- *Brassy cough, NORMAL voice, no hoarseness, noise in both phases* → **subglottic**, and the paired question asks the phase and keys **biphasic**.\n\n> **⚠️ DEFECT 1 — the BARKING COUGH is keyed *supraglottic* and the material puts it SUBGLOTTIC.** `L6` attaches the barking cough to **croup**, and defines croup’s steeple sign as *\"ballooning of hypopharynx with **narrowing of subglottis**\"*, with **biphasic** stridor. **\"Subglottic\" is simply not among the four options**, so the printed key is the nearest available. Same shape as a nasal-fracture question elsewhere in the bank that keys *\"within a week\"* only because *\"immediately\"* is absent. **A key is the best option offered, not the best answer.** *(Acoustic reason, not on any slide: a cough is air blasted through the glottis, and its timbre is set by the segment immediately below — a narrow, rigid, oedematous subglottis turns it into the hollow seal-like bark.)*\n\n> **⚠️ DEFECT 2 — the bank contradicts itself on the HOT-POTATO VOICE.** One question offers both *supraglottic* and *supra-laryngeal* and keys **supra-laryngeal**; another question’s own printed box says *\"**supraglottic** lesion that causes muffled hot potato voice\"*. **Both are defensible, because the mechanism is damping in the resonating cavity above the cords rather than a single level.** Answer as printed in each case; the discrimination that actually matters is **muffled versus hoarse**, not supraglottic versus supra-laryngeal.\n\n> **⚠️ DEFECT 3 — an endpoint box calls the stridor of RLN injury BIPHASIC**, where the slide rule makes a glottic obstruction **inspiratory** — and the same bank, six pages later, keys a **subglottic tumour** for biphasic stridor. **The clean rule to sit the exam on is the slide’s.** In practice a very tight bilateral cord palsy can sound biphasic, which is why the stem is defensible. (Full note in strid-17.)\n\n**⚠️ ONE PLACE THE RULE BENDS — SEVERITY.** A severe glottic obstruction eventually becomes biphasic, because at high grades flow is turbulent both ways. **A stridor that was inspiratory and has become biphasic has not changed level; it has got worse.** Equally, severe asthma can be noisy in both phases, and a large central lesion can mimic asthma. *(Both caveats not taken from the course material.)*\n\n**⚠️ THE ERROR THIS SECTION EXISTS TO PREVENT IS LETHAL AND HAPPENS IN REAL DEPARTMENTS: TREATING UPPER-AIRWAY STRIDOR AS ASTHMA.** The bedside test costs nothing — **a noise loudest over the NECK is upper airway; one loudest over the CHEST is lower.** An *\"asthmatic\"* who does not respond to a bronchodilator needs the larynx looked at.",
        "qs": [
          "entep-throat-15",
          "entep-throat-34",
          "entep-throat-65",
          "entep-throat-90",
          "entqb-thr8-384",
          "entqb-thr8-391",
          "entqb-thr8-422",
          "entqb-thr8-423",
          "entqb-thr8-425",
          "entqb-thr8-432",
          "entqb-thr8-388",
          "entqb-thr8-389",
          "entep-throat-case-20"
        ]
      },
      {
        "id": "strid-3",
        "w": "high",
        "h": "The physics — Poiseuille, Venturi, Bernoulli",
        "body": "| Principle | What it states | Consequence in the airway |\n|---|---|---|\n| **Venturi effect** | A fluid **ACCELERATES** through a constriction — the same volume must cross a smaller section | The air moves fastest at the narrowest point |\n| **Bernoulli principle** | Total energy is conserved, so **where velocity rises, PRESSURE FALLS** | The fast-moving air presses **outward less** — **DECREASED intraluminal pressure** |\n| **Poiseuille’s law** | **Resistance rises with the FOURTH POWER** of the narrowing | **Flow collapses.** `L6` gives it a slide of its own, captioned *Effect Of Edema* |\n| **Boyle’s law** | Pressure × volume is constant in a **closed container** at constant temperature | **The odd one out — it governs a sealed gas** (a pneumothorax, a cuff at altitude), not flow through a tube |\n\n> **⚠️ THE THREE ARE A CHAIN, NOT ALTERNATIVES, AND TOGETHER THEY ARE A VICIOUS CIRCLE.** (1) Air **accelerates** through the narrowing — Venturi. (2) The accelerated air **drops the intraluminal pressure** — Bernoulli. (3) Atmospheric pressure outside now exceeds the pressure inside, so **the compliant walls are sucked further in**. (4) The airway is narrower, so step 1 repeats harder. (5) Poiseuille means resistance climbs **faster than the narrowing itself**. **The harder the child tries to breathe in, the more completely the airway closes.**\n\n**⚠️ THAT IS LARYNGOMALACIA IN FIVE LINES**, and it explains `L6`’s clinical list without memorising it: stridor *\"**worse with crying, feeding, sleeping (on back), and flexion of the neck**\"* — crying and feeding mean **faster inspiratory flow**, supine and flexion let the flaccid tissue **fall back into the lumen** — and *\"**improve with extension of the neck, lying prone and elevation of the mandible**\"*, all of which pull the soft tissue forward out of the airway.\n\n**⚠️ AND IT IS WHY OBSTRUCTION PRODUCES INDRAWING.** `L6`’s sign list — *\"retractions (suprasternal, supraclavicular, intercostal & epigastric)\"* — is a catalogue of Bernoulli at work: soft tissue pulled inward by a pressure that has gone negative.\n\n**⚠️ POISEUILLE IS THE ONE THAT KILLS, AND THE ARITHMETIC IS THE POINT.** Resistance ∝ 1/r⁴. A **1 mm rim of oedema in a 4.5 mm infant subglottis** removes most of the lumen and multiplies resistance many times over; **the same millimetre in an adult trachea is nothing.** That single calculation is behind every paediatric airway emergency in this chapter, and behind why a fibrotic adult airway that was silent for months decompensates over 24 hours when a little oedema or a plug of secretion is added.\n\n**⚠️ DEFECT RECORDED, KEY LEFT AS PRINTED.** One stem asks *\"which principle explains that narrowing of the airway leads to **increased airflow**\"* and keys the **Venturi effect**. Narrowing increases **VELOCITY**; it does **not** increase **flow** — flow is precisely what Poiseuille says **falls**. **The key is right for the principle it names; read the stem as *\"which principle explains that narrowing increases the SPEED of the air\".***\n\n**⚠️ THE BERNOULLI DISTRACTOR IS A TRUE STATEMENT ATTACHED TO THE WRONG LAW.** *\"Increased airway resistance\"* does happen in a narrowed airway — but that is **Poiseuille**. Bernoulli is about the **pressure–velocity trade**. *\"Increased intraluminal pressure\"* is the exact inversion, and if it were true, fast flow would splint the airway open and laryngomalacia could not exist.\n\n*(Venturi and Bernoulli are on no cached ENT slide — `L6` names only Poiseuille’s law. The physics above is **not taken from the course material**; the clinical consequences are `L6`’s and `L12`’s.)*",
        "qs": [
          "entqb-thr8-380",
          "entqb-thr8-381"
        ]
      },
      {
        "id": "strid-4",
        "w": "must",
        "h": "⭐ Grading stridor, and the signs of upper airway obstruction",
        "body": "> **`L6`, Grades of Stridor — the bank quotes every cell of this table verbatim, and asks it at least four times.**\n\n| | **GRADE I (mild)** | **GRADE II (moderate)** | **GRADE III (severe)** |\n|---|---|---|---|\n| Breathing | Mild difficult noisy breathing | Moderate difficult noisy breathing | Severe difficult noisy breathing |\n| **Retractions** | **Supraclavicular & suprasternal** | **+ INTERCOSTAL** | **+ intercostal & EPIGASTRIC** |\n| **Pulse** | **Tachycardia** | **Rapid** | **⚠️ RAPID AND IRREGULAR** |\n| Dyspnoea | **NO dyspnoea**; acting alae nasi; tachypnoea | **Variable**; shallow rapid respiration | **Severe dyspnoea & CYANOSIS** |\n| State | — | **Irritable and sweating** | **Irritability & air hunger** |\n| **Gases** | **PO2 > 95 % · PCO2 < 35 %** | **PO2 < 85 % · PCO2 35–40 %** | — |\n\n**⚠️ TWO PROGRESSIONS MAKE THE TABLE UNNECESSARY TO MEMORISE CELL BY CELL.**\n\n1. **Retractions march DOWNWARD** as the grade rises — **neck only** (I) → **+ chest wall** (II) → **+ abdomen** (III). The more negative the intrathoracic pressure, the lower the soft tissue that gets pulled in.\n2. **The pulse degrades in QUALITY, not just rate** — tachycardia → rapid → **rapid and IRREGULAR** → **bradycardia**. **A fast pulse says the patient is compensating; an IRREGULAR one says the myocardium itself is hypoxic; a SLOW one is pre-terminal.**\n\n**⚠️ SO THE PULSE ALONE TRACES THE WHOLE COURSE — AND THE STEP THAT LOOKS LIKE IMPROVEMENT IS THE ONE BEFORE ARREST.**\n\n**Keyed items to hold exactly:** cyanosis is **GRADE III**, not II · a **rapid irregular** pulse is **GRADE III**, not mild — mild has plain tachycardia · **Grade I has NO dyspnoea** · **PO2 < 85 %** is moderate · **epigastric** retractions are severe · **the FULL set of retractions (suprasternal, supraclavicular, intercostal AND subcostal) is GRADE III, not mild** — a question states the full list and calls it mild, and that is the false option.\n\n> **`L6`, Upper Airway Obstruction — Signs, verbatim.** *\"**Tripod or barking dog position.** Open mouth & **acting alae nasi**. Active accessory muscles of respiration. **Congested neck veins during expiration.** **Retractions** (suprasternal, supraclavicular, intercostal & epigastric). Tachycardia. Irritability, Restlessness, **Sweating**. **CYANOSIS & BRADYCARDIA (LATE SIGNS).**\"*\n\n**⚠️ EVERY SIGN ON THAT LIST EXCEPT THE LAST TWO IS COMPENSATION. BRADYCARDIA IS COMPENSATION FAILING**, and in a child a vagally driven bradycardia is the step immediately before asystole. **It is dangerous precisely because it looks like settling** — a screaming, sweating, tachycardic child becomes quiet, still and slow-pulsed. *(Mechanism not taken from the course material; the classification as late is `L6`’s.)*\n\n**⚠️ CYANOSIS IS LATE FOR A SECOND REASON: it needs about 5 g/dL of desaturated haemoglobin to be visible**, so it appears **later still in an anaemic child** and earlier in a polycythaemic one *(threshold not taken from the course material)*. `L6` says it twice — once in Grade III, once in the late-sign line.\n\n**THE TRIPOD OR \"BARKING DOG\" POSITION IS ENGINEERING, NOT DISTRESS** — and it is the **first** sign on `L6`’s list. *(Biomechanics below not taken from the course material.)*\n\n| Element | What it buys |\n|---|---|\n| **Sitting upright, leaning forward** | Gravity pulls tongue, epiglottis and swollen supraglottic tissue **forward, out of the airway** |\n| **Arms braced on a surface** | **Fixes the shoulder girdle** so accessory muscles pull on the ribs instead of the arms |\n| **Neck extended, chin thrust up** | **Straightens the pharyngo-laryngeal axis** |\n| **Mouth open** | Bypasses the nose, removing about half of total airway resistance |\n\n> **⚠️ SO IT IS EFFECTIVE SELF-TREATMENT, AND THAT DICTATES THE MOST IMPORTANT RULE IN PAEDIATRIC AIRWAY WORK: DO NOT LAY THE CHILD FLAT.** Forcing a child supine to examine the throat, site a cannula or take an X-ray removes every mechanical advantage at once. `L6`’s conservative management opens with a **posture** — *\"semisetting position\"* — for the same reason. **The bank prints the sign as *\"Parking dog position\"*; `L6` writes *\"barking dog\"*.**\n\n**⚠️ WHAT IS NOT A MANIFESTATION OF OBSTRUCTION: HOARSENESS.** It is nowhere on `L6`’s signs slide, and the reason is precise — **hoarseness tells you WHERE a lesion is, not HOW obstructed the airway is.** A patient can be hoarse with a perfectly adequate airway (vocal nodules, reflux, unilateral cord palsy, early glottic carcinoma), and can be severely obstructed with a **completely normal voice** (a subglottic lesion). **Two independent axes.** Stridor, suprasternal recession and nasal flaring all measure **work of breathing**; hoarseness measures **the cords**.\n\n**⚠️ AND THE ONLY REASON TO GRADE AT ALL IS THAT THE GRADE DECIDES THE MANAGEMENT** — see strid-18. `L6`: *\"1. Mild stridor — conservative. 2. Moderate — **improving (conservative); PROGRESSIVE (establish airway)**. 3. Severe — establish airway.\"* **Grade II is the grade where the direction of travel decides, not the grade.**",
        "qs": [
          "entqb-thr8-385",
          "entqb-thr8-386",
          "entqb-thr8-387",
          "entqb-thr8-396",
          "entqb-thr8-433",
          "entqb-thr8-438"
        ]
      },
      {
        "id": "strid-5",
        "w": "must",
        "h": "⭐ Causes of stridor — by age, and by mechanism",
        "body": "> **`L6`, Etiology & Classification of Stridor.** *\"Febrile – Afebrile · Intrinsic – Extrinsic · **Congenital** (laryngomalacia, web, stenosis) · **Trauma** (external, F.B., intubation, iatrogenic) · **Infection & inflammation** (LTB, croup, abscess) · **Developmental** (laryngocele, saccular cyst) · **Neurological** (V.C. paralysis) · **Vascular** (haemangioma, vascular ring) · **Neoplasm** (RRP, sarcoma, cystic hygroma).\"*\n\n> **`L6`, Common Causes Of Stridor — THE THREE AGE COLUMNS, VERBATIM.**\n\n| **a. NEONATES** | **b. CHILDREN** | **c. ADULTS** |\n|---|---|---|\n| **Laryngomalacia** | Acute non-specific laryngitis | **Laryngeal tumours (malignant > benign)** |\n| **Vocal cord paralysis** | **Epiglottitis** | **Laryngeal granulomas (SCLEROMA)** |\n| **Congenital subglottic stenosis** | **Croup** | **Bilateral abductor paralysis (post-thyroidectomy)** |\n| **Subglottic haemangioma** | **Foreign body & ingestion of corrosives** | **Laryngeal trauma** |\n| **Vascular ring** | **Retropharyngeal abscess** | **Post-intubation stenosis** |\n| Other congenital anomalies | Congenital laryngeal diseases | |\n| **Laryngeal spasm** | **Laryngeal papillomatosis** | |\n| | **Angioneurotic oedema** | |\n\n**⚠️ THE AGE COLUMN IS THE FASTEST WAY INTO ANY VIGNETTE: neonate → CONGENITAL · child → INFECTIVE or FOREIGN BODY · adult → NEOPLASTIC or IATROGENIC.**\n\n**⚠️ ONSET DATES THE CONGENITAL LESION — `L6`’s work-up slide.** *\"**Immediately after birth**: SG stenosis, congenital VC paralysis. **Delayed**: **laryngomalacia (1st week)**, **laryngeal haemangioma (1st 6 months)**.\"* Also note the history line: *\"premature newborn who have been intubated for variable period\"*.\n\n**THE CONGENITAL LESIONS, COMPACT** — `L12` gives them in order of incidence: **laryngomalacia · congenital VC paralysis · congenital subglottic stenosis · laryngeal web · posterior laryngeal cleft.** *(Full detail belongs to `ent-paedlar`; what follows is what this chapter’s questions need.)*\n\n| Lesion | Stridor | Cry / voice | Discriminator | Treatment |\n|---|---|---|---|---|\n| **Laryngomalacia** — *\"malacia = abnormal flaccidity\"* | **Inspiratory**, first days–weeks, *\"intermittent, mild-moderate, harsh and crowing\"*, worse crying/feeding/supine/neck flexion, better prone/neck extension/mandible lifted | **NORMAL** | **⚠️ Commonest congenital laryngeal anomaly (60 %) and commonest cause of stridor in infants and of chronic stridor.** Boys 2:1, commoner in prematures. **GERD in 80–90 %**, synchronous airway anomalies 15–20 %. Scope: **omega-shaped epiglottis, short aryepiglottic folds, tall thin flaccid / redundant arytenoid mucosa**. Resolves 18–24 months in 80–90 % | Reassurance, anti-reflux, follow growth. **Surgery only for**: severe stridor with **failure to thrive**, weight loss, **chest deformity (pectus excavatum)**, **cyanotic attacks, cor pulmonale**, hypoxaemia/hypercapnia → **supraglottoplasty** (AE-fold division, partial epiglottis amputation, removal of redundant supra-arytenoid mucosa) or tracheostomy |\n| **Congenital VC paralysis** | **Bilateral: severe inspiratory stridor immediately after birth, improves in sleep, worse on activity — usually needs tracheostomy** | **Unilateral: weak breathy cry** | **10 % of congenital laryngeal lesions; bilateral : unilateral = 1 : 4.** Unilateral (Lt > Rt) from cardiovascular anomalies (VSD, Fallot, PDA) or surgery for T-E fistula / heart / cervical oesophagostomy. Bilateral from **central causes — meningomyelocele, Arnold-Chiari, bulbar palsy** — **birth trauma** (prolonged 2nd stage, forceps), rarely hereditary | Unilateral: **none, resolves spontaneously**. Bilateral: **tracheotomy and follow-up**; arytenoidectomy or cordotomy |\n| **Congenital subglottic stenosis** | Severe form: **stridor and cyanosis immediately after birth**. Mild-moderate: **persistent croup (stridor > 3 weeks)**, difficult intubation at GA, **difficult decannulation** | Normal | **⚠️ Definition: SG lumen < 4 mm at term, < 3 mm in a premature** (normal 4.5 mm at term). **3rd commonest congenital anomaly but THE MOST SERIOUS.** Cartilaginous or soft-tissue | Conservative and follow-up for mild — many outgrow it; **tracheotomy**; endoscopic |\n| **Laryngeal web** — incomplete recanalisation of the lumen | Only if **thick large web** or with SG stenosis (1 in 3) | **Abnormal cry or voice** | Thin membranous / fibrous / cartilaginous. Types: **glottic (most common)**, interarytenoid (posterior glottic), subglottic + SG stenosis, supraglottic (very rare). **Feeding normal** | Bronchoscopic dilatation · MLS + **keel** insertion · laser incision + keel · laryngofissure |\n| **Subglottic haemangioma** | **Inspiratory stridor at about 6 months** | Normal | Congenital vascular malformation from mesodermal rests, **subglottic**; **50 % have head-and-neck haemangiomas elsewhere**; **female : male = 2 : 1** | **Tracheotomy and follow-up for spontaneous regression (2–4 years)**; corticosteroids systemic or intralesional; laser; interferon; cryosurgery; external irradiation; excision |\n\n**⚠️ KEYED FALSEHOOD: *\"haemangioma can only be congenital\"*.** Even the congenital subglottic one is **not present at birth** — `L6` dates it to the **first 6 months** — and haemangiomas also arise in adults as acquired laryngeal vascular lesions. **The absolute word *only* is what makes the statement false.** *(Acquired form not taken from the course material.)*\n\n**`L6`, congenital EXTRALARYNGEAL causes** — *\"cystic hygroma · congenital goitre · thymic remnants & cysts · mediastinal swellings e.g. teratoma · tracheal stenosis · tracheomalacia · **vascular ring**\"*, plus dermoid cyst among the external anomalies. **`L6` also lists extralaryngeal TUMOURS**: tracheal, **cancer thyroid**, hypopharyngeal, upper oesophageal, mediastinal.\n\n**⚠️ DEFECT RECORDED, KEY LEFT AS PRINTED — the \"SECOND most common cause of stridor in children\" is keyed FOREIGN BODY ASPIRATION.** **No cached lecture ranks the causes beyond first place**; `L6`’s children column is explicitly unordered, and `L12` calls **croup** *\"the most common infectious cause of airway obstruction in children\"*, which is at least as good a claim to second. **What makes the key defensible:** `L12` calls foreign body *\"the most common cause of death in home in children < 6 years\"* and `L6` adds *\"over 60 % of inhaled F.B. occurs in children aged 4 or under\"*. **Answer as the bank does; know the ranking is the bank’s, not the syllabus’s.** *(The bank also prints option (a) as \"Epiglottis\" for epiglottitis.)*\n\n> **⚠️ A RANKING QUESTION IN THIS CHAPTER IS ALWAYS ANSWERED BY READING THE ADJECTIVE.** Commonest **congenital** cause of stridor and commonest cause of **infantile** stridor = **laryngomalacia**. Commonest **infectious** cause of airway obstruction in children = **croup**. Commonest cause of **accidental death at home under 6** = **foreign body**. Commonest indication for **tracheostomy** = **prolonged intubation**. Commonest **operative** complication = **bleeding**; commonest **early postoperative** complication = **tube obstruction**.",
        "qs": [
          "entep-mfe4-6",
          "entqb-thr5-272",
          "entqb-thr8-438",
          "entep-throat-96"
        ]
      },
      {
        "id": "strid-6",
        "w": "high",
        "h": "Work-up of the stridulous patient",
        "body": "**HISTORY — `L6` puts two things first:** *\"premature newborn who have been **intubated** for variable period\"*, and the **onset** (immediate versus delayed — see strid-5). Add the choking episode, the fever, the voice, the feeding, the posture and the direction of travel.\n\n| | `L6`’s list, verbatim |\n|---|---|\n| **Laboratory** | **Arterial blood gases (PaO2 & PaCO2)** · **Blood pH** · Serum proteins · **Blood culture — annotated \"(Epiglottitis)\"** |\n| **Endoscopy** | **Flexible nasopharyngo-laryngoscopy** · Rigid nasal endoscopy · **Rigid laryngoscopy** · **Rigid bronchoscopy** |\n| **Radiology — plain** | 1. **Neck & thorax (lateral soft tissue)** 2. **Chest P.A. — expiratory, inspiratory & decubitus** 3. Mediastinum P.A., **high-kV \"Cincinnati\" view** |\n| **Radiology — other** | **Fluoroscopic screening** · **CT & CTA** (3D reconstruction, **CT virtual bronchoscopy**) · **MRI & MRA** |\n\n**⚠️ TWO PLAIN-FILM SIGNS ARE ASKED BY NAME:** the **THUMB (or \"cucumber\") SIGN** on a lateral neck film = **epiglottitis**; the **STEEPLE SIGN** = **croup**, which `L6` defines as *\"ballooning of hypopharynx with narrowing of subglottis\"*. Both in strid-11.\n\n**⚠️ WHICH CROSS-SECTIONAL MODALITY DEPENDS ON THE TISSUE YOU NEED AND THE STABILITY OF THE PATIENT — and the bank asks it two ways with two different answers.**\n\n| Question | Answer | Why |\n|---|---|---|\n| Best investigation to confirm the extent of **laryngeal TRAUMA** | **CT** | **Only CT shows CARTILAGE** — fracture lines, displacement, comminution, joint disruption, the lumen and air in the soft tissues. Fast, reformats in three planes |\n| Most useful imaging for **VASCULAR anomalies** causing stridor | **All of the above** (chest X-ray + barium swallow + MRI) | Vessels and their relation to soft tissue, in a **stable infant** — **MRI/MRA**, no radiation |\n\n**THE VASCULAR RING, worked through — because it is the only cause on `L6`’s lists that compresses the OESOPHAGUS as well as the trachea:**\n\n- **Chest X-ray** — the screening film; may show a **right-sided aortic arch**, the commonest plain-film clue, plus tracheal narrowing or deviation.\n- **Barium swallow** — the classic first positive test: a ring encircles the oesophagus, leaving a **POSTERIOR INDENTATION on the barium column**. Cheap and quick.\n- **MRI / MRA** — the definitive study: arch anatomy, the ring, and its relation to trachea and oesophagus in three dimensions, **without ionising radiation** in an infant who will be imaged repeatedly.\n- **Rigid bronchoscopy** — shows the **pulsatile external compression** that proves the lesion is vascular.\n- **Clinically:** biphasic stridor worse with feeding and neck flexion, **plus dysphagia and recurrent chest infection**. **A stridulous infant who also chokes on solids should have a barium swallow.** *(Right-sided arch, posterior indentation and the clinical pattern are **not taken from the course material**; the modality list is `L6`’s.)*\n\n**⚠️ NOTE FOR THE DUPLICATE SWEEP AND FOR ANSWERING: a bare modality menu — *X-ray / US / CT / MRI* — carries no content.** The same four options with the same key appear on an unrelated neck question. **Read the organ in the stem, not the menu.**\n\n**⚠️ AND THE INVESTIGATION NEVER PRECEDES THE AIRWAY.** CT is the right test for a fractured larynx and it is the **second** step; a patient with a compromised airway must never be left flat and alone in a scanner. Likewise **do not send a suspected epiglottitis to radiology** — the diagnosis is already clinical.",
        "qs": [
          "entqb-thr8-397",
          "entqb-thr7-357",
          "entep-throat-5",
          "entep-enr-26"
        ]
      },
      {
        "id": "strid-7",
        "w": "must",
        "h": "The infantile larynx — why a child is not a small adult",
        "body": "> **`L6`, Infantile Larynx — anatomical & physiological considerations, verbatim.** *\"Smaller in size (absolute & relative). **Higher in position (C3,4).** Infantile epiglottis (**long, tubular & narrow**). **SOFTER CARTILAGE.** **Loosely attached mucosa to submucosa.** **Shorter VC.** **Premature cough reflex.**\"* `L12` adds: *\"**funnel shaped → narrow SG region (4.5 mm)**\"*, *\"epiglottis long & folded on itself\"*, *\"**big arytenoids**\"*, *\"loose submucosal tissue → **oedema formation**\"*, and under **Neurological**: *\"**premature neuromuscular control → VC spasm**\"*, *\"**premature cough reflex → FB aspiration**\"*.\n\n| Feature | Consequence |\n|---|---|\n| **Narrow subglottis — 4.5 mm**, funnel-shaped | **Poiseuille bites.** A millimetre of oedema that is nothing in an adult is catastrophic here (strid-3) |\n| **Loosely attached mucosa / loose submucosa** | **Oedema and haematoma form fast and spread far** |\n| **Softer, MORE ELASTIC cartilage** | **⚠️ Laryngeal fractures are RARER in children — but the force is transmitted to the soft tissues instead**, so severe internal injury can sit behind a normal-looking, unfractured larynx |\n| **Less fibrous support** | **Cricotracheal separation is relatively commoner** |\n| **Larynx higher, at C3–4** | **Protective in trauma** (tucked behind the mandible) but **dangerous in swallowing** — the inlet sits behind the tongue base, so an object falling back over the tongue arrives at the airway. **One fact, opposite effects** |\n| **Long, tubular, folded epiglottis; big arytenoids; short cords** | The supraglottis is bulky and floppy — the laryngomalacia substrate |\n| **Premature cough reflex** | The airway’s last defence is weak, late and uncoordinated → **foreign body aspiration** |\n| **Premature neuromuscular control** | **Vocal cord spasm** |\n\n**⚠️ KEYED FALSEHOOD: *\"the paediatric larynx has LESS ELASTIC cartilage\"*.** `L6` says **softer**, which is the opposite. **And the consequence is a paradox worth understanding rather than memorising: fewer fractures, worse outcomes.** True in the same question: the larynx **is** higher than the adult, it **does** have less fibrous support, and blunt paediatric neck injury **is** more often life-threatening — *because* the injury is occult and the airway has no reserve.\n\n**⚠️ THE PRACTICAL RULE: IN A CHILD WITH BLUNT NECK TRAUMA, A NORMAL X-RAY AND AN INTACT-FEELING LARYNX ARE NOT REASSURANCE.** Observe, humidify, keep calm, and scope for any hoarseness, stridor or surgical emphysema — the swelling that will close the airway is still developing. And if an airway is needed, **tracheostomy is preferred to intubation** in significant laryngeal injury. *(Management points not taken from the course material; no cached slide covers paediatric laryngeal trauma.)*\n\n**DEVELOPMENT, from `L12`:** embryonic phase 0–8 weeks, organogenesis — **4th arch → SUPRAGLOTTIC larynx**; **6th arch → GLOTTIC and SUBGLOTTIC larynx**. Fetal phase 9 weeks – 7 months, organ maturation.\n\n**⚠️ AND `L12`’S CLASSIFICATION OF HOW CONGENITAL LESIONS PRESENT — three presentations, and each names its own differential:** **stridor** (laryngomalacia, congenital SG stenosis, **bilateral ABDUCTOR** VC palsy, thick laryngeal web) · **abnormal or weak cry** (laryngeal web, VC paralysis) · **aspiration / choking** (bilateral **ADDUCTOR** VC palsy, severe laryngomalacia, posterior laryngeal cleft). **⚠️ \"Abnormal cry in all EXCEPT\" is keyed LARYNGOMALACIA — its cry is NORMAL, and so are feeding and general health.**",
        "qs": [
          "entqb-thr7-338",
          "entqb-thr5-288",
          "entep-mfe4-6"
        ]
      },
      {
        "id": "strid-8",
        "w": "must",
        "h": "⭐ Foreign body aspiration — the numbers, and why children",
        "body": "> **`L12`, Incidence, verbatim.** *\"**The most common cause of death in home in children < 6 years.** **1 – 3 years (75 %).** **M : F = 2 : 1.** **Death rate: before endoscopy = 20 %. After endoscopy < 2 %.**\"* `L6` adds: *\"over **60 % of inhaled F.B. occurs in children aged 4 or under**\"*, and classifies inhaled bodies by *\"**Type: vegetable / inorganic metal**\"* and swallowed ones as *\"fish bone, meat lump, coins\"* lodging at *\"vallecula, pyriform, post-cricoid\"*.\n\n> **`L12`, SITE OF IMPACTION — the four figures sum to 100 %, so the whole distribution is examinable.** **Right bronchus 57 % · Left bronchus 33 % · Trachea 6 % · Larynx 4 %.** Shape it as **60 / 30 / 5 / 5, right > left > trachea > larynx.**\n\n**Why the right side:** the right main bronchus is **wider, shorter and more vertical**, because the heart pushes the left main bronchus into a more horizontal course, and the carina sits slightly left of midline. **⚠️ But in small children the two angles are more nearly equal before about 3 years, which is why the left still takes a full third — a normal right side excludes nothing.** *(Anatomy not taken from the course material; `L12` gives only the percentages.)*\n\n> **⚠️⚠️ COMMONEST SITE AND MOST LETHAL SITE ARE NOT THE SAME SITE. That one sentence organises the whole foreign-body group.** Ninety per cent lodge **below the trachea** and produce cough, wheeze and unilateral signs. The **4 % that lodge in the LARYNX** obstruct the only airway there is, in seconds — which is the mechanism behind `L12`’s headline. **A LARGE inhaled object cannot reach a bronchus at all; it impacts at larynx or trachea, and the cause of death is RESPIRATORY OBSTRUCTION** — not haemorrhage, not neurogenic shock, and not aspiration pneumonia, which is the death of a **neglected small** object over weeks.\n\n> **`L12`, Why FB aspiration is common in children — SIX items, verbatim, and the bank inverts one of them.** *\"**The larynx is higher in position.** Children like to **explore their environment with their mouth**. They are **unable to chew food properly**. They have a **propensity to play with eating**. **PREMATURE cough reflex.** They **lack posterior dentition**.\"*\n\n**⚠️ KEYED FALSEHOOD: *\"MATURE cough reflex\"*.** The reflex is **PREMATURE** — `L6` and `L12` both use that word. **Three of the four options in that question are verbatim slide items and the fourth inverts one; that is the commonest question shape in this bank.**\n\n| Factor | Why it matters | Modifiable? |\n|---|---|---|\n| **Premature cough reflex** | The airway’s **last line of defence**. Receptors, afferents and the glottic-closure-then-explosive-release sequence are all immature, so the cough is weaker, later and less coordinated. **An object an adult would eject on the first cough stays where it lands** | **No** |\n| **Lack posterior dentition** | Molars erupt from ~13 months, second molars 2–3 years. **A child given a peanut before then physically cannot grind it** | **No** |\n| **Unable to chew properly** | The same problem from the motor side | No |\n| **Larynx higher (C3–4)** | The inlet sits behind the tongue base, so food falling back arrives at the airway rather than passing into the oesophagus | **No** |\n| **Explores with the mouth** | Supplies the object | **Yes** |\n| **Plays while eating** | Supplies the occasion — **a sudden inspiration during a laugh, a cry or a run is the moment of aspiration** | **Yes** |\n\n**Prevention therefore targets only the behavioural half: no nuts, seeds, popcorn or raw hard vegetables before the molars are in; sit still to eat; small objects out of reach.** *(Prevention advice and molar timings not taken from the course material.)* **Round, smooth, compressible foods are the worst — peanuts, grapes, sweets — because they seal a lumen instead of letting air past.**\n\n**⚠️ ORGANIC VERSUS INORGANIC IS A REAL DISTINCTION, NOT A CLASSIFICATION EXERCISE.**\n\n| | **Organic** (peanut, seed, vegetable) | **Inorganic** (coin, bead, plastic) |\n|---|---|---|\n| Behaviour | **Absorbs moisture and SWELLS**; releases **oils and free fatty acids** causing intense chemical bronchitis; provokes **friable granulation tissue** | **Inert** — obstructs mechanically only |\n| **Neglected** | **⚠️ HAEMOPTYSIS** — `L12` prints the qualifier on the line itself: *\"**Hemoptysis. (ORGANIC neglected FB)**\"* | Distal collapse or infection; **no bleeding** |\n| Radiology | **Radiolucent — invisible** | Coin is radio-opaque |\n| Urgency | **Greater** — swelling, inflammation and granulation all make extraction harder and bloodier | Lower |\n\n**⚠️ THE KEYED FALSEHOOD IS ONE WORD: *\"haemoptysis occurs with INORGANIC neglected FB\"*.** True in the same question: **M : F 2 : 1**, and **most paediatric foreign bodies are organic** — consistent with `L6` putting *vegetable* first in its type list, and with children being given nuts they cannot chew. *(Swelling-and-oils mechanism not taken from the course material.)*\n\n**⚠️ DEFECT RECORDED, KEY LEFT AS PRINTED: the same question asserts as TRUE that *\"the commonest foreign body in ADULTS is the VEIL PIN\"*.** It is a **regional observation** — a headscarf pin held between the lips and inhaled on a sudden breath — well recognised in Egypt and the region, **stated on no cached slide, and not a universal fact**. It is not the key, so the bank is asserting it; answer accordingly and know the qualification. *(Not taken from the course material.)*\n\n**⚠️ AND THE TENFOLD FALL IN MORTALITY — 20 % BEFORE ENDOSCOPY, UNDER 2 % AFTER — IS THE ENTIRE ARGUMENT FOR A LOW THRESHOLD TO LOOK**, and the reason a *suggestive history alone* justifies bronchoscopy with a normal film.",
        "qs": [
          "entqb-thr5-281",
          "entqb-thr5-285",
          "entqb-thr5-288",
          "entqb-thr5-283",
          "entqb-thr5-272",
          "entqb-thr7-370"
        ]
      },
      {
        "id": "strid-9",
        "w": "must",
        "h": "⭐ Foreign body — the three phases, the four valves, and the film",
        "body": "> **`L12`, Clinical presentation, verbatim.** **Acute phase:** *\"**Stridor, respiratory difficulties.** **Pain in the root of the neck.** **Change of voice, cough.**\"* **Late phase — neglected FB:** *\"**Repeated or persistent chest infection NOT RESPONDING to medical treatment.** **Haemoptysis (organic neglected FB).** **Chronic cough.**\"*\n\n**THE THREE PHASES — and the middle one is why inhaled foreign bodies are missed:**\n\n1. **THE CHOKING EPISODE.** Sudden spasmodic cough and breathing difficulty as the object passes the larynx. **The single most valuable piece of history there is.**\n2. **⚠️ THE SILENT INTERVAL.** *\"After a while, he became well.\"* The object lodges in a bronchus, reflexes settle, and the child looks entirely normal for days or weeks. **Parents do not connect it to what follows, and will often deny any choking — their denial does not exclude it.**\n3. **THE COMPLICATION PHASE.** Days later: cough, tachypnoea and **UNILATERAL decreased air entry** as the segment collapses or becomes infected. Weeks later: the late phase above.\n\n**⚠️ *\"IMPROVES TEMPORARILY WITH ANTIBIOTICS BUT RETURNS WITH INCREASED SEVERITY\"* IS THE PHRASE THAT DECIDES A VIGNETTE.** Antibiotics treat the infection **distal to** the obstruction, so the child genuinely improves; they cannot remove the obstruction, so the same segment reinfects and each episode is worse as bronchiectatic damage accumulates. **A PNEUMONIA THAT RECURS IN THE SAME PLACE IS AN OBSTRUCTED AIRWAY UNTIL PROVED OTHERWISE** — and it will usually be **right-sided**, at 57 %.\n\n**Differential for that recurrent picture, decided by TEMPO and DISTRIBUTION** *(comparison not taken from the course material)*:\n\n| | Why it is not the answer |\n|---|---|\n| **Chronic aspiration syndrome** | Implies neurological impairment, cleft or T-E fistula; gives **diffuse, bilateral, dependent** change with feeding difficulty and failure to thrive. **Does not localise to one segment** |\n| **Untreated tuberculosis** | **Chronic constitutional** illness — weight loss, night sweats, contact history, **steadily** progressive. It does not clear on an ordinary antibiotic and relapse |\n| **Congenital airway anomaly** | **Lifelong and constant** — laryngomalacia gives persistent stridor from infancy, not episodic infection beginning at two. **The tempo is wrong** |\n\n> **⚠️ THE TEST: AN INHALED FOREIGN BODY IS *SUDDEN* IN ONSET, *RECURRENT* IN COURSE AND *FOCAL* IN POSITION. Aspiration is chronic and diffuse; TB chronic and progressive; a congenital anomaly lifelong and constant.**\n\n**⚠️ THE FOUR VALVE MECHANISMS — each produces a different film, and the direction of mediastinal shift is the give-away.** *(Classification not taken from the course material; the radiological consequences are `L12`’s.)*\n\n| Valve | Air IN | Air OUT | Film | Mediastinum |\n|---|---|---|---|---|\n| **Bypass** — partial, air passes both ways | ✔ reduced | ✔ reduced | **Normal or near-normal**; maybe reduced breath sounds. **The commonest and most easily missed** | Central |\n| **CHECK** — in on inspiration, trapped on expiration | ✔ | ✘ | **OBSTRUCTIVE EMPHYSEMA / HYPERINFLATION** | **PUSHED AWAY** |\n| **STOP** — complete obstruction | ✘ | ✘ | **Distal ATELECTASIS** (resorption — trapped air is absorbed, oxygen first then nitrogen) | **PULLED TOWARDS** |\n| **Ball** — obstructs on inspiration, opens on expiration | ✘ | ✔ | Progressive collapse; rare | Towards |\n\n**⚠️ THE CHECK VALVE IS THE ONE TO KNOW BEST, BECAUSE IT LOOKS BACKWARDS.** A peanut rarely blocks a bronchus completely: on inspiration the bronchus widens and air slips past, on expiration it narrows and grips. **The affected side becomes BIGGER, the mediastinum is pushed AWAY, and yet breath sounds over it are DIMINISHED.** That is exactly the classic vignette — *peanuts two days ago, right-sided diminished air entry, right-sided hyperinflation with the trachea deviated to the LEFT* — and the answer is **rigid bronchoscopy under GA**, because history plus film is already diagnostic. **⚠️ GET THE DIRECTION OF SHIFT BACKWARDS AND YOU WILL MISREAD THE FILM: pushed away = trapping = check valve; pulled towards = collapse = stop valve.**\n\n> **`L12`, Diagnosis, verbatim.** *\"**X-ray in EXPIRATION**: **hyperinflation, mediastinal shift**, infection, collapse, **± radio-opaque shadow**.\"*\n\n**⚠️ WHY THE EXPIRATORY FILM: on expiration the normal lung empties while the trapped side stays inflated, so an asymmetry invisible on a routine inspiratory film becomes obvious.** In a child too young to cooperate, a **lateral decubitus** film does the same using body weight *(not taken from the course material)*. `L6`’s own plain-film list already asks for *\"Chest P.A. — expiratory, inspiratory & decubitus\"*.\n\n**⚠️ THE MOST IMPORTANT RADIOGRAPHIC FACT IS THAT THE FILM IS OFTEN NORMAL.** Most paediatric bodies are **organic and radiolucent**, which is all that `L12`’s *\"± radio-opaque shadow\"* can promise, and a bypass valve produces neither trapping nor collapse. **THE X-RAY CAN CONFIRM AND CANNOT EXCLUDE.**\n\n**⚠️ KEYED FALSEHOOD IN THE RADIOLOGY QUESTION: *PNEUMOTHORAX*.** Obstructive emphysema (= `L12`’s *hyperinflation*), atelectasis (= *collapse*) and pneumonia (= *infection*) are all on the slide. **A foreign body obstructs a bronchus; it does not perforate the pleura.** The option is plausible rather than absurd because **pneumothorax and pneumomediastinum ARE recognised complications — of the BRONCHOSCOPY, and of severe air trapping rupturing a hyperinflated segment.** *(That qualification is not taken from the course material.)* **A complication of treatment is not a radiographic finding of the disease.**\n\n**⚠️ DEFECT RECORDED, KEY LEFT AS PRINTED — the \"CLASSIC TRIAD\" is printed as cough, wheeze and DYSPNOEA, excluding STRIDOR.** No cached slide states a triad, and the version most widely taught is **cough, wheeze and DECREASED BREATH SOUNDS**. **But the exclusion of stridor is sound and the reason is anatomical: 90 % of inhaled bodies lodge below the trachea, and bronchial obstruction is EXPIRATORY** — `L6` even names *\"foreign body in trachea\"* under **wheezing**. `L12` does list stridor, but in the **acute phase**, not the triad. Why the retained three occur: **cough** = the immediate reflex, premature in small children · **wheeze** = turbulent expiratory flow past a partial bronchial obstruction, and **a unilateral or asymmetric wheeze in a toddler is a foreign body until proved otherwise, not asthma** · **dyspnoea** = from the obstruction and the air trapping behind it.\n\n**⚠️ AND THE DELIBERATE NEGATIVE CONTROL — learn it as a pair with the positive vignette.** *3-year-old, **BILATERALLY** diminished air entry, **NO history of choking**, X-ray showing **increased bronchovascular markings*** → **MEDICAL TREATMENT**, because every foreign-body feature is absent or reversed: no aspiration event, **bilateral** signs where a foreign body is **unilateral** (57 % / 33 %), and **no hyperinflation and no mediastinal shift** — increased bronchovascular markings are the picture of **airway inflammation**. Rigid bronchoscopy means a general anaesthetic and instrumentation of the airway in a child with an infection and no suspicion of an object; CT is radiation and sedation to answer a question nobody asked; observation alone treats nothing in a symptomatic child. **⚠️ THE COUNTER-CAUTION IS THE MORE IMPORTANT HALF: the correct answer is \"treat medically\", NOT \"it is not a foreign body\". The difference is a follow-up appointment** — an infection that does not clear is `L12`’s late phase. *(Components of paediatric chest-infection treatment not taken from the course material.)*",
        "qs": [
          "entep-throat-13",
          "entep-throat-98",
          "entqb-thr5-300",
          "entqb-thr7-347",
          "entqb-thr7-348",
          "entqb-thr7-354",
          "entqb-thr7-371",
          "entqb-thr5-283"
        ]
      },
      {
        "id": "strid-10",
        "w": "must",
        "h": "⭐ Foreign body — management, what is contraindicated, and the button battery",
        "body": "> **`L12`, Management, verbatim and unconditional.** *\"**Extraction through RIGID BRONCHOSCOPE under GENERAL ANAESTHESIA.**\"*\n\n**⚠️ WHY RIGID AND NOT FLEXIBLE:** the rigid bronchoscope is a hollow tube through which the child is **VENTILATED while the airway is being worked in**, and it admits optical forceps that can **grip a solid object**. A flexible scope is diagnostic: it cannot ventilate and cannot grip a peanut. *(Not stated in the cached slides.)*\n\n**⚠️ AND IT DOES BOTH JOBS AT ONCE — DIAGNOSIS AND EXTRACTION, IN ONE PROCEDURE, WITH THE AIRWAY CONTROLLED THROUGHOUT.** That is why *\"prepare the child for bronchoscopy\"* beats every alternative on every printing of this question:\n\n| Distractor | Why it fails |\n|---|---|\n| **Laryngoscopy** (direct or indirect) | **Diagnostic only.** If the object is subglottic or bronchial it will not reach it, and instrumenting the larynx with no plan to remove what is found risks pushing it further |\n| **CT of chest / lung** | `L12` does list CT — but **imaging is for doubt, and there is none.** It costs time, radiation and often sedation to show what bronchoscopy would show **and** remove |\n| **Antibiotics and antitussives** | Treat the consequence and leave the cause; the child re-presents |\n| **Trendelenburg position** | **⚠️ ACTIVELY DANGEROUS — tipping the child head-down invites a mobile object to travel UP into the larynx and impact there** |\n| **Sedation** | **⚠️ THE MOST DANGEROUS OPTION ON ANY OF THESE LISTS.** It abolishes the cough reflex and the child’s own respiratory drive — the only two things maintaining an airway around a partial obstruction |\n| **Assurance and follow-up** | The object is in the airway now and will not come out on its own |\n\n**⚠️ THE THRESHOLD FOR BRONCHOSCOPY IS THE HISTORY, NOT THE IMAGING.** A witnessed choking episode while eating nuts is the diagnosis until proved otherwise, and **a normal chest examination and a normal chest X-ray do not exclude it** — an organic body is radiolucent and the classic signs may take days. **And \"change of voice\" in the history is the detail that raises the stakes: it puts the object at or near the LARYNX**, a shared airway with a mobile object in it, one cough from complete obstruction.\n\n**⚠️ DEFECT RECORDED, KEY LEFT AS PRINTED — *\"contraindicated in PARTIAL airway obstruction in children\"* is keyed CHEST PHYSIOTHERAPY.** It is a real and specific contraindication: percussion and postural drainage were historically used to shake an object loose and were abandoned because **they work in the wrong direction — a peanut causing partial obstruction of ONE lung, dislodged upward, wedges in the subglottis or trachea and obstructs BOTH.** **But standard paediatric resuscitation teaching makes the HEIMLICH MANOEUVRE the contraindicated intervention while the cough is effective, and most banks key it.** Answer as printed; know both.\n\n> **⚠️ THE PRINCIPLE THAT ORGANISES ALL OF IT: AN EFFECTIVE COUGH IS THE BEST AIRWAY MANOEUVRE THERE IS, AND ANYTHING THAT INTERFERES WITH IT MAKES MATTERS WORSE.**\n\n**THE BUTTON BATTERY — a category of its own, and the phrase *\"alkali secretion\"* in a stem is the give-away.** *(Nothing about batteries is on any cached ENT slide — `L12` classifies foreign bodies only as organic or inorganic, `L6` as vegetable or inorganic metal. **All of the following is not taken from the course material.**)*\n\n- **It does not merely obstruct — it BURNS, and it starts within minutes.** Three mechanisms: **(1) ELECTROLYSIS, the dominant one** — moist mucosa bridging the poles completes a circuit, and current splits water at the **negative pole**, generating **hydroxide** directly against the mucosa. **That is the \"alkali secretion\" the stem names.** **(2) Alkaline leakage** if the seal corrodes. **(3) Pressure necrosis** and local heat.\n- **Why alkali is worse than acid — and this generalises to every corrosive question:** an acid causes **coagulative** necrosis and the coagulum is a barrier that limits depth; **an alkali causes LIQUEFACTIVE necrosis** and keeps advancing (strid-15).\n- **Timescale: mucosal injury within 2 HOURS, full-thickness necrosis and perforation within 6.** The catastrophes — oesophageal perforation, tracheo-oesophageal fistula, erosion into the **aorta** — come days later, but the damage is done in the first hours. **Removal is immediate, ahead of a foreign body of any other kind.**\n- **⚠️ ON A PLAIN FILM A DISC BATTERY LOOKS LIKE A COIN. The distinguishing feature is the DOUBLE-RING or HALO SIGN on the AP view and a STEP-OFF at the edge on the lateral.** Mistaking one for the other loses the hours that matter. **A swallowed or inhaled \"coin\" needs the film looked at for a halo before anyone decides to observe.**\n- The other options rank below it: **peanut** — the most dangerous *organic* body, serious and slow; **plastic toy** — inert and **radiolucent**, so the hazard is that it does not show; **coin** — inert and radio-opaque.",
        "flow": {
          "title": "The choking child",
          "steps": [
            {
              "k": "decision",
              "t": "Can the child cough, cry or speak? (partial obstruction, EFFECTIVE cough)",
              "yes": "⚠️ DO NOT INTERVENE — encourage coughing, keep calm and upright, arrange urgent rigid bronchoscopy",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Conscious, but cough ineffective or obstruction complete?",
              "yes": "Back blows, then chest or abdominal thrusts BY AGE — immediately",
              "no": "Continue"
            },
            {
              "k": "alert",
              "t": "Unconscious: CPR, and inspect the airway at each breath",
              "n": "Complete obstruction is SILENT — no flow, no noise"
            },
            {
              "k": "alert",
              "t": "⚠️ NEVER chest physiotherapy or postural drainage with a partially obstructing bronchial body",
              "n": "It can float the object up into the trachea and obstruct BOTH lungs"
            },
            {
              "k": "step",
              "t": "Definitive treatment in every case",
              "n": "Extraction through a RIGID bronchoscope under general anaesthesia — it ventilates and it grips"
            },
            {
              "k": "alert",
              "t": "⚠️ A suggestive history alone justifies bronchoscopy",
              "n": "Normal examination and a normal X-ray exclude nothing: most paediatric bodies are organic and radiolucent. Mortality 20% before endoscopy, under 2% after"
            },
            {
              "k": "alert",
              "t": "⚠️ A BUTTON BATTERY is removed ahead of everything else",
              "n": "Electrolysis makes hydroxide at the negative pole: mucosal injury by 2 hours, perforation by 6. On X-ray it mimics a coin — look for the halo"
            }
          ]
        },
        "qs": [
          "entep-ear-29",
          "entep-throat-98",
          "entqb-thr7-349",
          "entqb-thr5-286",
          "entqb-thr7-370",
          "entep-throat-13"
        ]
      },
      {
        "id": "strid-11",
        "w": "must",
        "h": "⭐⭐ Croup versus epiglottitis — the paediatric airway emergency",
        "body": "> **`L6` and `L12` print both on facing slides, and this table answers every question in the group.**\n\n| | **CROUP** = acute laryngotracheobronchitis | **EPIGLOTTITIS** = supraglottitis |\n|---|---|---|\n| **Level** | **SUBGLOTTIC** | **SUPRAGLOTTIC** |\n| **Organism** | **Viral — PARAINFLUENZA** (also RSV) | **Haemophilus influenzae type b (90 %)**, other 10 % |\n| **Age** | **6 months – 3 years** (`L12`: 6 m – 3 y; `L6`: 6 m – 3 y) | **`L6`: 3–7 years · `L12`: 2–6 years** (can occur at any age) |\n| **Onset** | **Gradual, over days**, after a coryzal prodrome, worse at night | **⚠️ RAPIDLY PROGRESSIVE — HOURS** |\n| **Fever** | **Low grade** | **> 38.5 °C** |\n| **Cough** | **BARKING, prominent** — the seal-like bark | **ABSENT** |\n| **Voice** | **Hoarse** | **MUFFLED — \"hot potato\"** |\n| **Drooling** | No | **⚠️ YES — severe ODYNOPHAGIA, dribbling** |\n| **Posture** | Usually ordinary | **⚠️ Sitting, irritable, \"breathing with RAISED CHIN & OPENED MOUTH\"** — the tripod |\n| **Stridor** | **Biphasic** | **Inspiratory** |\n| **X-ray** | **STEEPLE SIGN** — *\"ballooning of hypopharynx with narrowing of subglottis\"* | **THUMB (thumbprint) SIGN**, also called the *\"cucumber\"* sign |\n| **Other** | Mucosal oedema, mucus plugs | **⚠️ LARYNGOSCOPY IS CONTRAINDICATED** (`L12`) · `L6` adds **blood culture** to the investigations, annotated *\"(Epiglottitis)\"* |\n| **Treatment** | Good hydration · analgesics, antipyretics · **NEBULISED RACEMIC EPINEPHRINE** · **steroids, systemic and nebulised** · antibiotics · humidification · hospitalisation. **Severe obstruction (rare): ETI, tracheostomy** | **⚠️ EMERGENCY.** **Steroids in massive dose** · analgesics, antipyretics, fluids, observation · **antibiotic: CEFTRIAXONE** · **severe stridor: endotracheal intubation, tracheostomy** |\n| Incidence note | `L12`: **the most common INFECTIOUS cause of airway obstruction in children** | **HIB VACCINE REDUCED THE INCIDENCE BY > 90 %** |\n\n**⚠️ THE COUGH IS THE FASTEST BEDSIDE DISCRIMINATOR: a barking cough argues AGAINST epiglottitis, because a child with a swollen epiglottis does not cough like that.** The next fastest is **drooling and refusal to swallow** — an inflamed epiglottis makes swallowing agony. And note the voice: in epiglottitis it is **muffled, not hoarse**, because the obstruction is above the cords.\n\n**⚠️ NOTE THE TERMINOLOGY TRAP: `L6`’s epiglottitis slide writes *\"Group B Haemophilus influenzae\"*.** The standard designation, and the one the bank prints as the key, is **type b (Hib)** — a **capsular serotype**, unrelated to the *group B* of streptococci.\n\n> **⚠️⚠️ SUSPECTED EPIGLOTTITIS — THE FIVE ABSOLUTE RULES, AND THE WORD \"MILD\" IS A TRAP, NOT A REASSURANCE.** Mild stridor in epiglottitis is the **last warning**: the airway can close in minutes, and the child sitting up drooling with a muffled voice is compensating. When they tire, they obstruct completely.\n\n1. **DO NOT EXAMINE THE THROAT.** No tongue depressor, no direct inspection — provocation can precipitate complete laryngospasm and death.\n2. **DO NOT LAY THE CHILD FLAT.** Leave them in whatever position they have chosen.\n3. **DO NOT SEPARATE THE CHILD FROM THE PARENT.** Distress worsens the obstruction.\n4. **DO NOT SEND THEM TO RADIOLOGY.** The thumb sign is real, but obtaining it means moving an unstable child away from help, **and the diagnosis has already been made clinically.**\n5. **ESCORT THEM.** From the moment epiglottitis is suspected the child is never unaccompanied, and the escort must be able to secure an airway.\n\n**⚠️ SO THE KEYED NEXT STEP IS *\"TRANSFER ESCORTED TO THE OPERATING ROOM TO SECURE THE AIRWAY\"* — ahead of antibiotics, ahead of the lateral neck film, and ahead of nebulised adrenaline.** The airway is secured in **theatre**, with an anaesthetist and an ENT surgeon and a tracheostomy set open: gas induction and intubation, with a surgical airway as the fallback. **Antibiotics come after the airway. Nebulised adrenaline is a CROUP measure — it buys time in subglottic mucosal oedema and does nothing for a swollen epiglottis; giving it and observing is exactly the delay that kills.** *(The examiner-pattern sheet separately records \"epiglottitis with severe stridor, primary management → endotracheal intubation\" — the same principle, and the option list decides which wording is offered.)*\n\n**ACUTE VIRAL LARYNGITIS — the third of `L12`’s acute non-specific laryngitides, and the mild one.** **Aetiology:** rhinovirus, RSV, parainfluenza, adenovirus. **Clinical:** **dysphonia and hoarseness**, **stridor only in infants under 1 year**, low-grade fever, cough, runny nose. **Treatment: conservative — NO ANTIBIOTIC** — antipyretics, humidification, decongestants, **voice rest**.\n\n**⚠️ AND THE OTHER FEBRILE CAUSE ON `L6`’S CHILDREN LIST IS NOT LARYNGEAL AT ALL: the RETROPHARYNGEAL ABSCESS** — stridor plus dysphagia plus torticollis in a child, treated by drainage (and by tracheostomy first if the airway is compromised). It belongs to `ent-pharsupp`, and `L6` lists **abscess drainage** among the causes where treating the cause **is** the airway management (strid-18).",
        "flow": {
          "title": "The febrile child with stridor",
          "steps": [
            {
              "k": "decision",
              "t": "Drooling, muffled voice, high fever, sitting forward, NO cough — over hours?",
              "yes": "⚠️ EPIGLOTTITIS. Do not examine the throat, do not lie flat, do not X-ray, do not separate from the parent",
              "no": "Continue"
            },
            {
              "k": "step",
              "t": "EPIGLOTTITIS pathway",
              "n": "Escort to theatre → gas induction and intubation with ENT scrubbed and a tracheostomy set open → THEN ceftriaxone, high-dose steroids, blood culture"
            },
            {
              "k": "decision",
              "t": "Barking cough, hoarse voice, low fever, biphasic stridor — over days?",
              "yes": "CROUP (parainfluenza, 6 months to 3 years, steeple sign)",
              "no": "Reconsider: foreign body, retropharyngeal abscess, angio-oedema, congenital lesion"
            },
            {
              "k": "step",
              "t": "CROUP pathway",
              "n": "Hydration, humidification, nebulised racemic epinephrine, steroids systemic and nebulised, antipyretics, antibiotics"
            },
            {
              "k": "alert",
              "t": "⚠️ Severe obstruction in either: endotracheal intubation, then tracheostomy",
              "n": "Rare in croup; expected in untreated epiglottitis"
            },
            {
              "k": "alert",
              "t": "⚠️ MILD stridor in epiglottitis is the LAST WARNING, not reassurance",
              "n": "The airway can close in minutes once the child tires"
            }
          ]
        },
        "qs": [
          "entep-throat-26",
          "entep-throat-51",
          "entqb-thr8-388",
          "entqb-thr8-432"
        ]
      },
      {
        "id": "strid-12",
        "w": "must",
        "h": "Laryngeal and neck trauma — mechanisms, zones, and the injuries to name",
        "body": "> **`L6`, Traumatic Causes, verbatim — and the open/closed split answers a question outright.** **a. EXTERNAL TRAUMA:** *\"**Open trauma: gunshot, cut throat, stab wound & surgical.** **Closed trauma: blunt trauma, hanging.**\"* **b. INTERNAL TRAUMA:** *\"**Mechanical**: F.B, intubation, cuff injury, endoscopy. **Physical**: thermal, blast, irradiation. **Chemical**: chemical fumes & potash.\"*\n\n**⚠️ *\"WHICH CAUSES PENETRATING NECK TRAUMA\"* → MISSILE INJURY** — `L6`’s *gunshot*, the only OPEN mechanism on the menu. Motor vehicle accident, hanging and crushing are all in the **CLOSED** column.\n\n| | **PENETRATING** | **BLUNT** |\n|---|---|---|\n| Injury pattern | Along a **track** — whatever the object crossed | **Crushed against the cervical spine**; force spreads widely |\n| Airway | **Breached** — often an obvious wound bubbling air | **Fractured but closed**; mucosa may be intact |\n| Vessels | **Direct laceration** — carotid, jugular; **exsanguination is the leading killer** | **Intimal tear → delayed thrombosis and stroke** |\n| Diagnosis | Usually visible — explore or image the track | **⚠️ DECEPTIVE — the skin can look normal over a shattered larynx** |\n| Timing | Immediate | **⚠️ CAN DECLARE ITSELF HOURS LATER** as oedema accumulates |\n\n> **⚠️ THE CLINICALLY DANGEROUS ONE IS BLUNT, NOT PENETRATING.** A gunshot wound is obviously serious and gets treated as such. **A blunt injury presents with a normal-looking neck and a larynx in pieces** — which is why this topic insists on flexible laryngoscopy in the stable patient and CT in every suspicion. *(The comparison is not taken from the course material; the mechanisms are `L6`’s.)*\n\n**THE THREE ZONES OF THE NECK** *(on no cached ENT slide — `L5) NECK MASS.pdf` gives only borders and triangles. **Not taken from the course material**, and the bank clearly expects it.)*\n\n| Zone | Boundaries | Contents at risk | Surgical access |\n|---|---|---|---|\n| **I** | **Clavicle / thoracic inlet → CRICOID** | Great vessels, lung apices, trachea, oesophagus, thoracic duct | **Difficult** — may need thoracotomy or sternotomy; **image before operating** |\n| **II** | **CRICOID → ANGLE OF MANDIBLE** | **Larynx, hypopharynx, carotid, jugular, oesophagus, RLN** | **Easy — direct exposure** |\n| **III** | **Angle of mandible → SKULL BASE** | Distal carotid, pharynx, cranial nerves | **Difficult** — mandible and skull base in the way; angiography, often endovascular |\n\n**⚠️ ZONE II IS THE COMMONEST ZONE INJURED — largest, most exposed, least shielded.** Zone I sits behind the clavicles and sternum, Zone III behind the mandible and mastoid; **a blow, a blade or a ligature arriving at the front of a neck lands in Zone II by default**, which is why the steering-wheel impact, the clothesline injury and the strangulation are all Zone II events. **⚠️ AND THE PARADOX: ZONE II IS ALSO THE LEAST DANGEROUS**, because its structures are **accessible** — a bleeding carotid there can be controlled through a standard neck incision. **Commonest is not most lethal**, the same distinction as foreign-body site versus foreign-body mortality. *\"All of the above\"* fails because the stem asks which is **most common**.\n\n**⚠️ THE RULE FOR ANY PENETRATING NECK WOUND: injury is assumed until excluded if the wound breaches the PLATYSMA. NEVER PROBE A NECK WOUND AND NEVER REMOVE AN IMPALED OBJECT OUTSIDE THEATRE** — either can release the tamponade holding a vascular injury closed. **The zone decides the imaging and the approach, not whether the patient is investigated.** *(Not taken from the course material.)*\n\n**THE INJURIES TO NAME BY MECHANISM:**\n\n| Injury | Mechanism |\n|---|---|\n| **⚠️ HYOID FRACTURE** | **STRANGULATION** — the classic, and the one looked for forensically. A ligature or hands compress the neck **high, above the thyroid cartilage**, where the soft tissues are thinnest; the hyoid is a small **U-shaped, unsupported** bone articulating with nothing, and its **greater horns** are driven medially and snap. **⚠️ It is CARTILAGINOUS in the young and OSSIFIES through adult life, so a young hyoid bends where an older one breaks — ABSENCE OF A FRACTURE DOES NOT EXCLUDE STRANGULATION** |\n| **Thyroid cartilage fracture** | **Anterior BLUNT** injury — steering wheel, dashboard, punch, clothesline. **The commonest fracture in blunt laryngeal trauma**, and the cause of the **loss of the laryngeal prominence** |\n| **Cricoid cartilage fracture** | **Greater force, and the most dangerous** — the cricoid is the **only complete ring**, so its collapse obstructs the subglottis |\n| **Arytenoid dislocation** | **Almost always IATROGENIC** — the immediate complication of intubation trauma (strid-16) |\n| **⚠️ CRICOTRACHEAL SEPARATION** | **The most severe blunt laryngotracheal injury, SCHAEFER-FUHRMAN GRADE 5** — clothesline injury or a direct anterior blow crushing the airway against the cervical spine. **The trachea is AVULSED from the cricoid and RETRACTS INTO THE MEDIASTINUM: the airway is not narrowed, it is DISCONTINUOUS** |\n\n**⚠️ CRICOTRACHEAL SEPARATION — its complications are \"all of the above\", and they all follow from one anatomical plane:**\n\n- **RECURRENT LARYNGEAL NERVE INJURY** — **both RLNs enter the larynx exactly here**, running in the tracheo-oesophageal grooves to pass behind the cricothyroid joint. A separation **avulses them, characteristically bilaterally**.\n- **VOCAL CORD PARALYSIS** — the consequence of the above. `L11) Vocal cord paralysis.pdf`: bilateral abductor paralysis gives *\"**Stridor. Normal voice.**\"* **The airway is obstructed and the voice sounds fine.**\n- **TRACHEAL STENOSIS** — the late consequence: circumferential scar contracts at the anastomosis and presents weeks to months later with biphasic stridor.\n- **⚠️ DEFECT RECORDED: options (a) and (c) are ONE ENTITY UNDER TWO NAMES** — the nerve lesion and its manifestation offered as separate complications. Nothing turns on it, because the key is *all of the above*.\n\n> **⚠️⚠️ THE MANAGEMENT POINT THAT MATTERS MORE THAN THE LIST: IN SUSPECTED CRICOTRACHEAL SEPARATION, DO NOT ATTEMPT BLIND OROTRACHEAL INTUBATION.** A tube pushed through a disrupted airway can push the larynx off the retracted trachea completely and create a false passage into the mediastinum — **a survivable injury becomes unsurvivable in seconds.** Secure by **TRACHEOSTOMY UNDER LOCAL ANAESTHESIA, placed BELOW the injury, ideally over a bronchoscope.**\n\n**THE CLINICAL SIGNS OF A SERIOUS LARYNGEAL INJURY — read as a set, because each names a structural failure:**\n\n| Sign | What it means |\n|---|---|\n| **Loss of the laryngeal prominence** | The thyroid ala has collapsed — **a flattened Adam’s apple**, visible and palpable |\n| **⚠️ SUBCUTANEOUS (surgical) EMPHYSEMA** | **THE AIRWAY LUMEN IS BREACHED.** Air escapes into the neck with every breath — **an open communication until proved otherwise.** It is equally a sign of a **perforated oesophagus**, and the two are indistinguishable on examination |\n| **Stridor** | The airway is narrowed at or above the trachea |\n| **Hoarseness or aphonia** | The injury has reached the cords |\n| **Cord immobility** | Joint disruption, RLN injury, or mechanical tethering — **all deep injuries** |\n| **Cannot tolerate lying flat** | **Ominous** — the patient is maintaining his own airway by posture |\n\n**⚠️ AND THE STRANGULATION SURVIVOR IS THE ONE WHO OBSTRUCTS LATE.** They can reach hospital looking almost well, with only hoarseness, neck pain and bruising, **and obstruct hours later** as oedema and haematoma develop in crushed tissues. `L6`’s own rule applies — *\"moderate stridor: improving (conservative), **PROGRESSIVE (establish airway)**\"*. **Anyone strangled is observed, not discharged, and the airway is secured early, because a swelling neck makes both intubation and tracheostomy harder with every hour.** Look also for **carotid intimal tear with delayed thrombosis and stroke, cervical spine injury, and hypoxic brain injury from the period of occlusion — which is what actually kills.** *(Strangulation detail not taken from the course material; `L6` names only \"hanging\".)*",
        "qs": [
          "entqb-thr7-369",
          "entqb-thr7-335",
          "entqb-thr7-337",
          "entqb-thr7-352",
          "entqb-thr7-338"
        ]
      },
      {
        "id": "strid-13",
        "w": "must",
        "h": "⭐ The Schaefer-Fuhrman grading of laryngotracheal injury",
        "body": "> **⚠️ ON NO CACHED ENT SLIDE.** `L6` names blunt laryngeal trauma only as a **cause of stridor** and grades nothing. **The classification below is answered from general medical knowledge and tagged — but the bank tests it FOUR times, so it has to be known cold.**\n\n| Grade | Findings | Management |\n|---|---|---|\n| **1** | **Minor** endolaryngeal haematoma or laceration, **NO detectable fracture** | **MEDICAL** |\n| **2** | Oedema, haematoma, **MINOR mucosal disruption WITHOUT exposed cartilage**; **NON-DISPLACED** fracture | **MEDICAL**, admitted and observed |\n| **3** | **Massive oedema · mucosal tears with EXPOSED CARTILAGE · DISPLACED fracture · VOCAL CORD IMMOBILITY** | **⚠️ SURGICAL EXPLORATION** |\n| **4** | As grade 3 but **UNSTABLE** — **COMMINUTED fracture**, **two or more fracture lines**, disrupted anterior larynx | **Surgical exploration, often with an ENDOLARYNGEAL STENT** |\n| **5** | **COMPLETE LARYNGOTRACHEAL SEPARATION** | Surgical — **airway first** |\n\n> **⚠️⚠️ THE ONLY THING THE CLASSIFICATION EXISTS TO DECIDE IS: OPERATE OR NOT. GRADES 1–2 MEDICAL · GRADES 3 AND ABOVE EXPLORED, WITHIN 24 HOURS.**\n\n**⚠️ THE 2/3 BOUNDARY IS THREE ADJECTIVES, AND THE BANK PRINTS THEM BOTH WAYS AS A DELIBERATE PAIR.**\n\n| Finding | **GRADE II** — *\"hoarseness and mild pain, no respiratory distress\"* | **GRADE III** |\n|---|---|---|\n| Fracture | **NON-displaced** | **DISPLACED** |\n| Mucosa | **MINOR** lacerations | **DEEP** tears |\n| Cartilage | **WITHOUT** exposed cartilage | **EXPOSED** |\n| Cords | Moving | **IMMOBILE** |\n| **Management** | **MEDICAL** | **SURGICAL EXPLORATION** |\n\n**⚠️ REMOVE ANY ONE QUALIFIER AND THE INJURY CROSSES THE LINE.** The option list of the *\"indication for surgical exploration\"* question is built the same way: every distractor is the **qualified** version of a grade-3 finding — *minor* haematoma (grade 1), *small* mucosal laceration (grade 2), *non-displaced* fracture (grade 2) — and the key is **EXPOSED CARTILAGE**.\n\n**THE FOUR GRADE-3 CRITERIA, AND WHY EACH INDEPENDENTLY FORCES SURGERY:**\n\n| Criterion | Why it cannot be watched |\n|---|---|\n| **Exposed cartilage** | **Cartilage has no blood supply of its own** — it lives on diffusion from the **perichondrium**. Bared into an infected airway it becomes ischaemic and infected (**PERICHONDRITIS**) and necroses; **lost laryngeal cartilage cannot be replaced.** It also **granulates instead of re-epithelialising, and granulation CONTRACTS into STENOSIS.** **Covering it with mucosa is the whole point of the operation** |\n| **Displaced fracture** | The framework is out of position and **will heal that way** — a permanently distorted larynx, a narrow lumen, a poor voice. It must be **reduced and fixed** |\n| **Deep mucosal tears** | Will not close cleanly alone, and **a tear crossing the ANTERIOR COMMISSURE costs the voice** |\n| **⚠️ VOCAL CORD IMMOBILITY** | A cord stops moving for one of **three** reasons and **all three are deep**: the **cricoarytenoid joint** is disrupted or dislocated, the **RLN** is injured, or the framework is so displaced that the cord is **mechanically tethered**. **OEDEMA ALONE DOES NOT IMMOBILISE A CORD** — so the finding is a marker of DEPTH, not of swelling |\n\n**⚠️ GRADE 3 VERSUS GRADE 4 IS STABILITY, NOT SEVERITY.** A grade-3 larynx is **displaced but has intact fragments that can be reduced and wired to one another**; a grade-4 larynx is **in pieces** — comminuted, two or more fracture lines, anterior larynx disrupted — with **nothing stable to fix to**, which is exactly why it needs a **stent** to hold the lumen open from inside while the fragments knit.\n\n**WORKED EXAMPLE — the block vignette.** *35-year-old, high-speed MVA, severe respiratory distress, stridor, subcutaneous emphysema, **loss of the laryngeal prominence**, **cord immobility** on flexible laryngoscopy, imaging shows a **COMMINUTED fracture of the thyroid cartilage** and **disruption of the cricoarytenoid joint**, haemodynamically stable but **cannot lie flat**.* He already has three grade-3 findings; **the word that lifts him to GRADE IV is COMMINUTED.** The bank prints its own box: *\"comminuted fractures, disruption of the cricoarytenoid joint: Grade IV\"*, and for the grade-2 vignette *\"non-displaced fractures and minor mucosal lacerations: Grade II injury\"*.\n\n**⚠️ SWEEP NOTE, RECORDED SO IT IS NOT RE-DISCOVERED: all four grading questions match each other — and an unrelated ADENOID-grading question — at 1.00 on option similarity, because *\"Grade I / II / III / IV\"* is an option list containing no content at all.** A bare ordinal menu defeats every option-based check; only the stem separates them.",
        "qs": [
          "entqb-thr7-345",
          "entqb-thr7-355",
          "entqb-thr7-374",
          "entqb-thr7-375",
          "entqb-thr7-350",
          "entqb-thr7-352"
        ]
      },
      {
        "id": "strid-14",
        "w": "must",
        "h": "⭐⭐ Laryngeal trauma — assessment and management, in order",
        "body": "**⚠️ NO CACHED ENT SLIDE COVERS THE MANAGEMENT OF LARYNGEAL TRAUMA.** `L6` names it only as a cause of stridor, and supplies the **airway framework** — the thresholds, the conservative measures, the routes to an airway, and tracheostomy in full. **Everything specific to the injury below is not taken from the course material** and the bank clearly expects it.\n\n> **⚠️ THE ORDERING PRINCIPLE THAT RECONCILES THE WHOLE FIVE-QUESTION BLOCK: 1. AIRWAY · 2. ASSESS · 3. REPAIR.** *The airway is the emergency; the exploration is the prognosis.*\n\n**STEP 0 — IS THE PATIENT STABLE? THE WHOLE ALGORITHM FORKS HERE.**\n\n| **STABLE — airway patent, saturating, speaking** | **UNSTABLE — distress, severe stridor, breached airway** |\n|---|---|\n| **⚠️ LOOK FIRST.** Flexible laryngoscopy at the bedside, in minutes, sitting upright | **⚠️ SECURE THE AIRWAY FIRST AND LOOK AFTERWARDS** |\n\n**⚠️ A SATURATION READING IS THE MOST OVER-TRUSTED NUMBER IN AIRWAY ASSESSMENT.** It stays normal until very late, because a patient working hard maintains oxygenation through a critically narrow airway right up until he cannot. **The stridor and the muffled voice are the reliable findings.**\n\n**WHICH INSTRUMENT — and the bank keys it two different ways four questions apart.**\n\n| | **Flexible fibreoptic, TRANSNASAL** | **Indirect MIRROR, transoral** |\n|---|---|---|\n| Needs the mouth to open | **NO — bypasses the jaw entirely** | **YES** |\n| Needs tongue protrusion and cooperation | No | Yes |\n| Equipment | Endoscope and light source | **A mirror and a head light — available anywhere, instantly** |\n| Gag reflex | Well tolerated | **Often defeats it** |\n| View of subglottis | Better | Limited |\n| Record | Photograph or video | None |\n\n> **⚠️ DEFECT RECORDED, KEY LEFT AS PRINTED — AND THE RECONCILING CLAUSE IS ONE PHRASE THE BANK NEVER EXPLAINS.** The patient with *\"multiple mandibular fractures and difficulty opening his mouth\"* is keyed **flexible transnasal**; the patient with *\"severe neck trauma **without evidence of facial affection**\"* is keyed **indirect mirror**, and **both questions offer both options**. **The clause is the trismus: with a fractured jaw the nasal route is the only route; with an intact jaw a mirror is available and immediate.** Read that way the two keys are consistent. **⚠️ THE POINT THE BANK IS MAKING BY ASKING TWICE: AN ABNORMAL VOICE AFTER BLUNT NECK TRAUMA IS AN INDICATION TO LOOK AT THE LARYNX, WHATEVER INSTRUMENT YOU REACH FOR. The instrument is a detail; the decision to look is the answer.**\n\n**What the examination is looking for, because each finding sets the grade:** **mucosal lacerations · exposed cartilage · haematoma · oedema · cord immobility · the size of the residual airway.**\n\n**⚠️ THE TWO HAZARDOUS DISTRACTORS IN THE STABLE PATIENT:**\n\n- **Emergency intubation** — **premature.** He is saturating and protecting his own airway; a blind tube through a swollen, possibly injured larynx can create a false passage or complete a disruption, and the trismus makes oral laryngoscopy very difficult. **Do not take away an airway that is working in order to replace it with one that may not.**\n- **⚠️ DIRECT LARYNGOSCOPY UNDER SEDATION — THE MOST DANGEROUS OPTION ON ANY LIST IN THIS CHAPTER.** Sedation removes the respiratory drive and muscle tone holding a marginal airway open, **and is being given to a man whose mouth will not open, so if he obstructs you cannot rescue him.** **NEVER SEDATE A STRIDULOUS PATIENT OUTSIDE A SETTING PREPARED FOR AN IMMEDIATE SURGICAL AIRWAY.**\n\n**STEP 1 — THE AIRWAY, WHEN IT IS NEEDED: TRACHEOSTOMY UNDER LOCAL ANAESTHESIA. Both halves of that phrase are doing work.**\n\n**Why NOT intubation** — in a larynx that is comminuted and already breached (the subcutaneous emphysema proves the lumen is open), a blind tube can: **push through a mucosal tear into a false passage, ventilating the neck instead of the lungs** · **complete a partial cricotracheal separation**, so the trachea retracts into the mediastinum and the airway becomes irrecoverable · **displace fragments further** · or simply **fail, in a patient with no airway and a neck now too swollen to operate on quickly.**\n\n**Why LOCAL anaesthesia** — general anaesthesia abolishes respiratory drive and muscle tone. **In a patient holding his airway open by his own effort and posture — *\"unable to tolerate supine positioning\"* is exactly that — induction can collapse it before a surgical airway is secured, and there is no way back.** The airway is established **awake, sitting up, breathing spontaneously**; the anaesthetic comes afterwards, for the repair. **And in laryngotracheal injury the opening must be placed BELOW the level of injury**, so a low tracheostomy may be needed.\n\n**⚠️ CRICOTHYROIDOTOMY IS A SECONDS-TO-SPARE RESCUE, NOT A PLANNED AIRWAY** — for the *cannot intubate, cannot ventilate* patient. It carries a higher rate of **subglottic stenosis** because the cricoid is the only complete ring, it must be converted anyway, and **it goes straight through the damaged segment in a laryngeal fracture.**\n\n**⚠️ AND A FRACTURED MANDIBLE IS A DIFFERENT PROBLEM AT A DIFFERENT LEVEL.** *No neck trauma, no stridor, no emphysema, neck stable* — **the larynx is intact; the obstruction is entirely above it.** The **genioglossus** attaches to the genial tubercles on the inner symphysis and is the muscle that holds the tongue forward; **a bilateral or symphyseal fracture destroys that anchor and the tongue falls back against the posterior pharyngeal wall**, with bleeding, swelling and displaced fragments on top. *\"Inability to maintain his airway\"* is precisely that. **The keyed answer is TRACHEOSTOMY, and it is the safest rather than the most invasive choice: the mouth IS the injury (trismus, blood, disrupted landmarks), and the jaw will be WIRED SHUT after fixation, so an oral tube sits in the surgeon’s field and cannot be maintained.** That is exactly why `L6` lists **maxillofacial operations** among the *prophylactic* tracheostomy indications. **Honest caveat: awake fibreoptic NASAL intubation is widely used for this patient and is not offered on the list — a key is the best option available.**\n\n| Problem | Airway |\n|---|---|\n| **Above the larynx, must last through jaw fixation** | **Tracheostomy** |\n| **The larynx itself is disrupted** | **Tracheostomy under LOCAL** — never blind intubation |\n| **Cannot intubate, cannot ventilate, seconds left** | Cricothyroidotomy |\n| **Airway threatened but patent, patient stable** | **Assess first** — flexible nasendoscopy |\n\n**STEP 2 — ASSESS. Three studies, and each answers a different question.**\n\n| Study | What it answers | Why the others lose |\n|---|---|---|\n| **CT — fine-cut, larynx and neck** | **CARTILAGE**: fracture lines, displacement, comminution, joint disruption, the lumen, air in the soft tissues. Fast, reformats in three planes | **X-ray** may show emphysema or a lost airway column but **cannot grade a fracture**, and normal films are common with real injuries · **MRI** is far too slow, hostile to a patient who cannot lie flat or still, poor for cortical detail, unsafe with unscreened metal · **Ultrasound** is **blocked by air and cartilage** and blind to the laryngeal skeleton |\n| **Endoscopy** | **MUCOSA and CORDS** — and Schaefer-Fuhrman needs both: *exposed cartilage*, *mucosal tears* and *cord immobility* are endoscopic; *displaced* and *comminuted* are radiological. **CT does not replace endoscopy; it complements it** | — |\n| **⚠️ GASTROGRAFIN SWALLOW** | **THE OESOPHAGUS.** A blunt force strong enough to comminute the thyroid cartilage compresses everything at that level against the cervical spine, and **the subcutaneous emphysema in the vignette is equally a sign of oesophageal perforation** | **Angiography** answers **vascular** injury (zone I or III, expanding haematoma, bruit, absent pulses) · **CT** with oral contrast is complementary, not the named study · **MRI** has essentially no role in acute neck trauma |\n\n**⚠️ WHY GASTROGRAFIN AND NOT BARIUM — the whole point of that question.**\n\n| | **Gastrografin** (water-soluble) | **Barium** |\n|---|---|---|\n| Leaks into the mediastinum | **Absorbed and cleared** | **⚠️ STAYS PERMANENTLY** — intense granulomatous **mediastinitis** and fibrosis |\n| Sensitivity for a small leak | Lower — small perforations are missed | Higher |\n| **If aspirated** | **⚠️ SEVERE CHEMICAL PNEUMONITIS** — hyperosmolar, draws fluid into the alveoli | Relatively inert in the lung |\n\n**So: gastrografin FIRST; if negative and suspicion remains, follow with DILUTE BARIUM.** **⚠️ The exception reverses the usual rule: in a patient at risk of ASPIRATION, gastrografin is the more dangerous agent.** **A missed oesophageal perforation leaks saliva and gut flora into the mediastinum, and mediastinitis mortality rises steeply with every hour of delay.**\n\n**STEP 3 — TREAT. Medical for grades 1–2; surgical for 3 and above.**\n\n**⚠️ DEFECT RECORDED, KEY LEFT AS PRINTED — the \"most important step in MEDICAL treatment\" is keyed CORTISONE.** No cached slide covers the medical treatment of laryngeal trauma, so the ranking is the bank’s. **It is defensible because it ranks by what preserves LIFE, not function: OEDEMA IS WHAT CLOSES THE AIRWAY.** The larynx is a rigid cartilaginous box lined by what `L6` calls *\"loosely attached mucosa to submucosa\"*, and Poiseuille means resistance rises with the fourth power of the narrowing. **Steroids given early limit the swelling that would otherwise force a tracheostomy; their value falls sharply after the first 24 hours.** *(Timing not taken from the course material.)* **Voice rest is arguably the most important step for the VOICE and does nothing for the AIRWAY — and airway is what kills.**\n\n| Measure | Purpose | On `L6`? |\n|---|---|---|\n| **CORTICOSTEROIDS** | Limit oedema — **the airway-preserving step** | ✔ *\"Corticosteroids\"* |\n| **Humidification** | Prevents crusting over injured mucosa | ✔ *\"Humidified oxygen inhalation\"* |\n| **Head elevation / semi-sitting** | Reduces venous congestion and swelling | ✔ *\"Semisetting position\"* |\n| **Antibiotics** | Where mucosa is breached and cartilage exposed — **perichondritis is the feared complication** | ✔ *\"Antibiotics & mucolytics\"* |\n| **Voice rest** | Lets injured cord mucosa heal without repeated collision — **the voice-preserving step** | Not on a slide |\n| **Anti-reflux** | Acid on a raw laryngeal surface worsens inflammation and granulation | Not on a slide |\n| **⚠️ OBSERVATION** | **The ACTIVE part of \"medical management\", not the passive one** — oedema accumulates over **24–48 hours**, so a patient comfortable on arrival can be in stridor by morning | — |\n\n**THE OPERATION, IN ORDER — and the order is the answer to *\"definitive management\"* against the trap of *\"tracheostomy alone\"*:**\n\n1. **Airway already secured** — tracheostomy, not intubation.\n2. **Expose** the larynx, usually through a **LARYNGOFISSURE**.\n3. **⚠️ CLOSE EVERY MUCOSAL TEAR SO NO CARTILAGE IS LEFT BARE — this is the step that prevents stenosis.**\n4. **Reduce and fix** the displaced fragments.\n5. **Restore the ANTERIOR COMMISSURE**, on which the voice depends.\n6. **Stent** — an endolaryngeal stent, **where the framework is comminuted and unstable (grade 4).**\n\n**⚠️ STEPS 3 AND 5 ARE THE VOICE; STEPS 4 AND 6 ARE THE AIRWAY. A TRACHEOSTOMY ALONE CONCEDES BOTH** — the larynx heals as a stenotic scarred box and the patient survives with a permanent tracheostomy and no voice, which is the outcome the operation exists to prevent. **Steroids and observation are correct for grades 1–2 only, and no amount of steroid reduces a fracture or covers bare cartilage. A STENT IS PART OF THE REPAIR, NOT AN ALTERNATIVE TO IT** — placed into an unreduced comminuted larynx it splints the fragments **in their displaced position**.\n\n**FIXATION — and a defect.** **⚠️ THE KEY IS STAINLESS STEEL WIRE**, the classical technique: **rigid** enough to resist the constant movement of swallowing, coughing and phonation; **inert**, sitting permanently beside a contaminated airway; and **thin**, because there is very little soft tissue to cover it. Passed through drill holes and twisted down. **⚠️ DEFECT RECORDED: modern practice largely favours TITANIUM MINIPLATES — option (b) — which give the most rigid fixation of all; the limitation is that SCREWS NEED CALCIFIED CARTILAGE TO GRIP, and the laryngeal cartilages ossify progressively through adult life, so plates hold well in an older patient and poorly in a young one.** Many surgeons use non-absorbable sutures in soft young cartilage. **Absorbable sutures fail because they lose strength in weeks and cartilage heals slowly — the reduction is lost before union. Antibiotics are not a fixation method at all**, though they are genuinely part of the treatment.\n\n> **⚠️⚠️ TIMING IS THE STRONGEST PREDICTOR OF OUTCOME: EXPLORE WITHIN 24 HOURS.** *\"Management should be conducted as soon as possible\"* is keyed as a general rule, and *\"management can be delayed up to 48 hours\"* and *\"time of management does not influence the prognosis\"* are both false for the same reason: **delay converts a repairable injury into a permanent one.**\n\n| **Within 24 hours** | **After several days** |\n|---|---|\n| Tissue planes **clean and identifiable** | Oedema and organising haematoma have **obliterated the landmarks** |\n| Fragments **reduced anatomically** | Fragments have begun to **fix in a displaced position** |\n| Mucosa **closed over bare cartilage** | **Granulation has already started** |\n| **Anterior commissure** reconstructed | Scar across it — **the voice is permanently altered** |\n| Infection not established | **Perichondritis** may already have set in |\n\n**⚠️ AND THE FOURTH OPTION IN THAT QUESTION IS FALSE FOR A DIFFERENT REASON: *\"medical management cannot be employed in ANY case of neck trauma\"* over-states it.** A patient with a **stable airway and mucosal injury only** is managed conservatively on exactly `L6`’s list. **Two clocks run after a laryngeal injury and both run fast** — oedema inside a rigid box worsens over **hours**, and an unrepaired displaced fracture scars into a **stenosis**. `L6`’s thresholds for acting rather than watching: *\"severe stridor · progressive moderate stridor · obstructing tumor · **PO2 < 60 mmHg** (N = 100) · **PCO2 > 50 mmHg** (N = 40) · **pH < 7.2**\"*.\n\n**⚠️ AND TWO DISTRACTORS IN THE PROGNOSIS QUESTION ARE ACTIVELY HARMFUL: *early intubation*** (the airway is secured by tracheostomy, not by forcing a tube through the damaged larynx) **and *prolonged steroid use*** (their benefit is in the first 24 hours; continued for weeks they impair wound healing and increase infection in a contaminated field). ***Delayed tracheostomy*** is the whole problem — a swelling neck becomes harder to operate on with every hour.",
        "flow": {
          "title": "Blunt or penetrating laryngeal trauma",
          "steps": [
            {
              "k": "decision",
              "t": "Airway compromised — severe stridor, surgical emphysema, cannot lie flat?",
              "yes": "⚠️ TRACHEOSTOMY UNDER LOCAL ANAESTHESIA, awake and sitting up, BELOW the injury. NEVER blind orotracheal intubation",
              "no": "Continue — the patient is stable"
            },
            {
              "k": "step",
              "t": "LOOK: flexible transnasal laryngoscopy (mirror if the jaw is intact and no scope is to hand)",
              "n": "⚠️ Never sedate a stridulous patient. Normal saturation reassures far too late"
            },
            {
              "k": "step",
              "t": "IMAGE: fine-cut CT of the larynx and neck",
              "n": "CT shows cartilage; endoscopy shows mucosa and cords. Both are needed to grade"
            },
            {
              "k": "decision",
              "t": "Subcutaneous emphysema, or a force able to comminute cartilage?",
              "yes": "Add a GASTROGRAFIN swallow — the oesophagus is directly behind, and mediastinitis kills",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Schaefer-Fuhrman grade 3 or above? (exposed cartilage · displaced fracture · deep mucosal tear · cord immobility)",
              "yes": "SURGICAL EXPLORATION",
              "no": "MEDICAL: steroids, humidification, head elevation, voice rest, anti-reflux, antibiotics — and ADMIT AND OBSERVE for 24-48 h"
            },
            {
              "k": "step",
              "t": "The operation, in this order",
              "n": "Laryngofissure → close every mucosal tear so no cartilage is bare → reduce and fix (stainless steel wire, or miniplates) → restore the anterior commissure → stent if comminuted (grade 4)"
            },
            {
              "k": "alert",
              "t": "⚠️ EXPLORE WITHIN 24 HOURS",
              "n": "After that the planes are oedematous, landmarks lost, granulation begun — and the functional result falls away sharply"
            }
          ]
        },
        "qs": [
          "entqb-thr7-346",
          "entqb-thr7-350",
          "entqb-thr7-351",
          "entqb-thr7-353",
          "entqb-thr7-356",
          "entqb-thr7-357",
          "entqb-thr7-358",
          "entqb-thr7-359",
          "entqb-thr7-372",
          "entqb-thr7-373",
          "entqb-thr7-368",
          "entep-throat-61",
          "entep-throat-107",
          "entqb-thr7-338"
        ]
      },
      {
        "id": "strid-15",
        "w": "high",
        "h": "Inhalation and caustic ingestion injury",
        "body": "**⚠️ NEITHER IS COVERED IN DETAIL ON ANY CACHED ENT SLIDE.** `L6` lists them only as categories of **internal trauma** — *\"**Physical**: thermal, blast, irradiation · **Chemical**: chemical fumes & **potash**\"* (potash, potassium carbonate or hydroxide, being itself an alkali, which is presumably why it is the slide’s example). **Everything below is not taken from the course material.**\n\n**INHALATION (THERMAL) INJURY — and the question is built on an internal contradiction.**\n\n> **⚠️ THE KEYED FALSEHOOD IS *\"trauma in the supraglottis commonly EXTENDS TO THE TRACHEA\"*, and the reason it is false is the option offered as TRUE one line earlier — the GLOTTIC REFLEX.**\n\n**Two mechanisms keep heat above the cords:**\n1. **The GLOTTIC CLOSURE REFLEX** — hot gas hitting the supraglottic mucosa triggers **reflex adduction of the cords**, shutting the door on the trachea.\n2. **HEAT EXCHANGE in the upper airway** — nose, pharynx and supraglottis are an efficient radiator; dry air at several hundred degrees is cooled to near body temperature by the time it reaches the cords. **The supraglottis absorbs the injury on the lower airway’s behalf.**\n\n**⚠️ THE ONE EXCEPTION IS THE DANGEROUS ONE: STEAM.** Water vapour carries roughly **4,000 times the heat capacity of dry air**, so the upper airway cannot cool it and steam **does** produce tracheobronchial burns. **Inhaled CHEMICAL products of combustion** are not stopped by a heat gradient at all and injure the whole tract.\n\n**The other two statements are TRUE:**\n- **Initial erythema and CARBON SPUTUM** — the earliest findings. The classic markers of significant exposure are **carbonaceous sputum, singed nasal vibrissae, facial burns, soot around the mouth and nose, and hoarseness**, with erythema and blistering of the supraglottic mucosa on endoscopy.\n- **⚠️ IT MAY LATER PROGRESS TO AIRWAY OBSTRUCTION — the single most important sentence about the condition.** The burned supraglottis swells over **hours**, and the swelling is made far worse by the **large-volume fluid resuscitation** a burned patient receives. **A patient comfortable on arrival can have an unmanageable airway by the time anyone reconsiders.**\n\n> **⚠️⚠️ HENCE: INTUBATE EARLY, ON SUSPICION. WAITING FOR STRIDOR IS WAITING TOO LONG.** `L6`’s general threshold — *\"progressive moderate stridor\"* — applies with unusual force, and in burns it drops further. Once the supraglottis is oedematous the anatomy is unrecognisable, intubation may fail, and a surgical airway through a burned swollen neck is a poor alternative. **A prophylactic tube can be removed in 48 hours if unnecessary; a lost airway cannot be undone.**\n\n**CAUSTIC INGESTION — acid versus alkali, keyed from both directions on the same page.**\n\n| | **ACID** | **ALKALI** |\n|---|---|---|\n| **Necrosis** | **COAGULATIVE** | **LIQUEFACTIVE** |\n| What happens | Proteins **denature and clot**, forming a firm **ESCHAR** | Fats are **SAPONIFIED** and proteins **dissolved** |\n| **Depth** | **SELF-LIMITING** — the eschar is a barrier | **⚠️ PROGRESSIVE — no barrier, so it keeps eating inward for as long as it is present. Depth increases with TIME** |\n| Worst site | **Stomach** (acid passes the oesophagus quickly) | **Pharynx and OESOPHAGUS** (a viscous alkali clings) |\n| Everyday source | Toilet and rust removers, battery acid | Drain and oven cleaner, caustic soda, **potash**, **button batteries** |\n\n**⚠️ SO *\"alkali is generally worse than acid\"* IS TRUE AND *\"acids cause liquefactive necrosis\"* IS FALSE — they are the same fact, one right and one inverted. An alkali burn is worse BECAUSE it liquefies; saying acids liquefy destroys the reason.** The other two false options in the positive question are *\"minimal tissue damage\"* (the reverse of the truth) and **⚠️ *\"limited to the oesophagus\"*** — a caustic **burns everything it touches on the way past**: lips, tongue, pharynx, **larynx**, oesophagus, stomach. **Worst is not limited, and in this topic the point is precisely that the larynx is involved.**\n\n**Two more statements the bank keys TRUE:**\n- **⚠️ *\"Direct damage while ingesting OR ON REGURGITATION\"* — and the second half is what catches people out.** The larynx is injured **twice**: once as the caustic passes the inlet on the way down, and again when it is **vomited back up**, bathing the supraglottis a second time. **THEREFORE VOMITING IS NEVER INDUCED, AND NEUTRALISATION IS NEVER ATTEMPTED** — an acid-base reaction is exothermic and adds a thermal burn to a chemical one.\n- **The GLOTTIC REFLEX limits injury to the supraglottis** — the same protective reflex as in inhalation injury. **The oesophagus, of course, is not protected at all, which is why the airway injury may be the lesser problem.**\n\n**⚠️ WHAT KILLS, EARLY AND LATE.** **EARLY: supraglottic oedema closing the airway over hours** — assess and secure the airway on suspicion, exactly as in inhalation injury. **LATE: OESOPHAGEAL STRICTURE** over weeks, the usual long-term consequence of an alkali burn — so these patients are **followed, not discharged**. Endoscopy within **24–48 hours** grades the injury, and a **gastrografin** rather than barium swallow is used where perforation is possible.\n\n**⚠️ AND THE SAME CHEMISTRY DRIVES THE BUTTON BATTERY (strid-10): electrolysis generates HYDROXIDE at the negative pole, so it produces an alkali burn from the moment it makes contact — mucosal injury within 2 hours, perforation by 6. It is not the leakage and not the current; it is the alkali.**",
        "qs": [
          "entqb-thr7-339",
          "entqb-thr7-340",
          "entqb-thr7-342",
          "entqb-thr5-286"
        ]
      },
      {
        "id": "strid-16",
        "w": "must",
        "h": "⭐⭐ Tracheostomy — the words, and the indications",
        "body": "**`L6` DISTINGUISHES TWO WORDS THAT ARE USED INTERCHANGEABLY EVERYWHERE ELSE, AND IT IS ASKED:**\n\n- **Tracheotomy** — *\"a **TEMPORARY** artificial opening between trachea and skin\"*.\n- **Tracheostomy** — *\"a **PERMANENT** artificial opening between trachea and skin\"*.\n\nThe definition slide then covers both: *\"**Creation of artificial opening in the trachea for the purpose of securing and maintaining the airway**.\"* In every question below the bank writes \"tracheostomy\" and means the operation generally — but if a stem contrasts the two words, **temporary vs permanent is the difference `L6` states**.\n\n**THE THREE HEADLINE INDICATIONS, verbatim:**\n\n1. **Airway obstruction at or above the level of the larynx.**\n2. **Respiratory failure requiring prolonged mechanical ventilation.**\n3. **Protection of the airway from bronchial secretion or aspiration.**\n\n**⚠️ AND THE CLASSIFICATION THE BANK ACTUALLY TESTS — OBSTRUCTIVE versus NON-OBSTRUCTIVE.** Learn the second column; the first is one line.\n\n| | What `L6` lists |\n|---|---|\n| **1. OBSTRUCTIVE** | *\"Obstruction **at, below, or above** the larynx\"* — glottic cancer, subglottic stenosis, bilateral cord paralysis, an impacted foreign body |\n| **2. NON-OBSTRUCTIVE — respiratory insufficiency** | *\"central or peripheral\"* — the brain is not driving, or the muscles are not working |\n| **2. NON-OBSTRUCTIVE — secretional obstruction** | *\"**prolonged coma**, **flail chest**, or **thoracic surgery**\"* — the airway is open, the patient cannot clear it |\n| **2. NON-OBSTRUCTIVE — prophylactic** | *\"**neck burn**, **radiotherapy of big laryngeal tumour**, **maxillofacial operations**\"* — the airway is adequate *now* and predictably will not be |\n| **2. NON-OBSTRUCTIVE — part of certain operations** | *\"1. Laryngofissure 2. Partial laryngectomy 3. **Total laryngectomy** 4. Laryngopharyngectomy\"* |\n\n**⚠️ THE DISCRIMINATION IN ONE SENTENCE: in an OBSTRUCTIVE indication the airway itself is narrowed; in a NON-OBSTRUCTIVE one the airway is patent and something else has failed.** So *\"prolonged endotracheal intubation\"* is **non-obstructive** — the larynx is open, the tube is the problem — while glottic cancer, subglottic stenosis and bilateral cord palsy are all obstructive. That is the whole of `entep-mfe4-12`.\n\n> **⚠️⚠️ AND THE COMMONEST INDICATION TODAY IS *PROLONGED INTUBATION*, NOT OBSTRUCTION.** This is a genuine change in what the operation is for: it began as an emergency for the obstructed larynx, and the large majority are now done **electively in intensive care, on patients whose airway is already secure**. `entqb-thr7-344` offers laryngeal cancer, foreign body aspiration and vocal cord paralysis against it — all real indications, all far rarer. **Answer by frequency, not by drama.** *(The shift itself is not taken from the course material; `L6` supplies the indication, second on its own list, but not the epidemiology.)*\n\n**WHEN — the thresholds are on the *Indications of Airway Establishment* slide and are covered with the stridor grading in `strid-14`.** Two of the five are clinical and come first — **severe stridor**, and **progressive moderate stridor** — then **obstructing tumour**, then the gases: **PO₂ < 60 mmHg** (normal 100), **PCO₂ > 50 mmHg** (normal 40), **pH < 7.2**. **⚠️ `entqb-thr8-401` asks which is NOT an indication and offers \"pH < 7.3\" — `L6` says 7.2. One decimal place is the whole question.**",
        "qs": [
          "entqb-thr7-344",
          "entep-mfe4-12",
          "entqb-thr8-401"
        ]
      },
      {
        "id": "strid-17",
        "w": "must",
        "h": "⭐ The eight functions — and what the operation offers a comatose patient",
        "body": "**`L6` prints eight *Functions of Tracheotomy*. They are worth knowing as a list, because a question can be built on any one of them:**\n\n1. **Bypass an upper airway obstruction.**\n2. **Decrease dead space (70–100 ml) by 10–50 %.**\n3. **Decrease resistance to air flow.**\n4. **An access to the trachea for suction.**\n5. **A pathway to deliver medication and humidification.**\n6. **Protection against aspiration.**\n7. **Allows swallowing without reflex apnoea.**\n8. **Decrease power of the cough.**\n\n**⚠️ NOTE THAT FUNCTION 8 IS A COST, NOT A BENEFIT, AND `L6` LISTS IT ANYWAY.** A cough needs a **closed glottis** to build pressure behind it; a tracheostomy leaves the larynx permanently open, so pressure cannot be built and the cough becomes weak and ineffective. That is precisely why **function 4 — suction — has to replace it**, and why the tube blocks if suction is neglected. **Two entries on the same list explain each other.**\n\n**Functions 2 and 3 are the physiology of `strid-3` applied.** Removing 70–100 ml of dead space is a large fraction of a 500 ml tidal volume, and bypassing the nose, pharynx and larynx removes the narrowest, most resistive part of the airway — **by Poiseuille, resistance falls with the fourth power of radius**, so a short wide tube in the trachea is a dramatically easier path than the natural one.\n\n> **⚠️⚠️ FUNCTION 6 IS THE ANSWER TO THE DEEPLY COMATOSE PATIENT (`entqb-thr8-439`), AND IT IS WORTH SEEING WHY THE OTHER OPTIONS FAIL.** Such a patient is **not obstructed** — they have lost the **cough, gag and swallow**, so saliva and gastric contents track into an unprotected trachea. A **cuffed** tube seals the trachea *below* the larynx and is the only thing on offer that stops that. **Aspiration pneumonia** is therefore prevented. **Bronchopneumonia is made MORE likely** by the operation, not less — the tube is a direct unfiltered route to the lungs. **Pulmonary oedema** is a cardiac or capillary-permeability problem a hole in the neck cannot touch. **Respiratory failure in coma is CENTRAL** — a tracheostomy is a **conduit, not a ventilator**; it delivers a breath only if a machine is attached. Note that this same patient sits under `L6`’s *\"secretional obstruction (prolonged coma…)\"* heading — **the indication and the function are the same fact read from two directions.**",
        "qs": [
          "entqb-thr8-439"
        ]
      },
      {
        "id": "strid-18",
        "w": "must",
        "h": "⭐⭐ The three levels — and which level for which disease",
        "body": "**`L6` classifies the operation twice: by TIMING — *\"Emergency\"* / *\"Elective\"* — and by LEVEL. The levels are learnt as ring numbers and they must be exact:**\n\n| Level | Rings | Sits against | Risk of going there |\n|---|---|---|---|\n| **HIGH** | **1st & 2nd** | Immediately under the **CRICOID** | **Cricoid / laryngeal perichondritis → SUBGLOTTIC STENOSIS**, difficult decannulation |\n| **MID** | **3rd & 4th** | Behind the **thyroid ISTHMUS** | **The most DIFFICULT** — the isthmus must be divided or retracted in a vascular field |\n| **LOW** | **5th & 6th** | Deep, near the **thoracic inlet** | **PLEURAL DOME → PNEUMOTHORAX**; the great vessels — **innominate artery**, thyroidea ima |\n\n**⚠️ MID IS THE STANDARD ELECTIVE LEVEL PRECISELY BECAUSE IT IS ONLY *DIFFICULT*.** Do not confuse **difficult** with **dangerous** — the trap in `entqb-thr8-418`. The isthmus of the thyroid crosses roughly the **2nd–4th rings**, so a mid tracheostomy means working through it: awkward and bloody, but the cricoid above and the pleura and innominate below are both avoided. **Awkward beats lethal.** *(The ranking by difficulty is not taken from the course material — `L6` gives the levels and the six sources of primary bleeding, but does not rank the levels.)*\n\n**⚠️ WHY HIGH IS NORMALLY FORBIDDEN — one anatomical fact.** The **cricoid is the ONLY COMPLETE ring in the entire airway**; every other tracheal ring is a horseshoe open behind. Cartilage is **avascular and fed entirely by its perichondrium**, so injuring the perichondrium starves it: **perichondritis**, then circumferential scar, then **subglottic stenosis** in the one place that cannot expand. `entqb-thr8-413` offers RLN injury (unrelated to height — the nerve lies in the tracheo-oesophageal groove at every level), bleeding (an argument against going *low*, not high) and tracheomalacia (a late consequence of cuff pressure). *(The perichondrial blood supply is not taken from the course material; `L6` names the cricoid among the structures at surgical injury and lists tracheal or laryngeal stenosis among its late complications.)*\n\n> **⚠️⚠️ AND YET THE BANK KEYS *HIGH* FOR LARYNGEAL CANCER AND *LOW* FOR THYROID CANCER. THE TWO ANSWERS ARE THE SAME PRINCIPLE: ENTER THE AIRWAY WHERE THE DISEASE IS NOT.**\n\n| Case | Level keyed | Why |\n|---|---|---|\n| **Laryngeal cancer** (`entqb-thr8-412`) | **HIGH** (1st–2nd) | The cricoid and subglottis **will be excised at laryngectomy anyway**, so the objection to a high stoma disappears; the tract is removed **en bloc** rather than left to seed **stomal recurrence**; and the **low trachea is preserved** for the permanent end stoma |\n| **Big thyroid cancer** (`entqb-thr8-416`) | **LOW** (5th–6th) | The **isthmus and lobes overlie rings 2–4**, so an extending tumour occupies mid and high. Cutting through a vascular tumour bleeds and disseminates it — **rings 5–6 are the only level below the disease** |\n\n*(Both indications are reasoned from the anatomy; `L6` gives the levels and lists total laryngectomy and laryngopharyngectomy among the operations that include a tracheostomy, but prints no rule for choosing a level — so the choice itself is not taken from the course material.)*\n\n**⚠️ AND THE PRICE OF GOING LOW IS THE NEXT QUESTION IN THE BANK.** `entqb-thr8-417` takes exactly the patient of `entqb-thr8-416` — the same large thyroid cancer, the same emergency low tracheostomy between rings 5 and 6 — and gives him **sudden dyspnoea with decreased breath sounds on one side**: a **pneumothorax**. That cluster is `strid-21`.\n\n**HIGH versus LOW, as `entep-throat-83` asks it:**\n\n| | **HIGH** | **LOW** |\n|---|---|---|\n| Injures | **Cricoid** → perichondritis, **subglottic stenosis** | **Dome of the pleura** → **pneumothorax**; great vessels of the neck root |\n| Because | The cricoid sits directly on ring 1 | **The pleura arches ABOVE the clavicle**, highest in children and short-necked adults; the innominate vessels lie behind the manubrium |\n\n**⚠️ DEFECT RECORDED, KEY LEFT AS PRINTED (`entep-throat-83`): its option (a), *\"innominate vessels injury in women and infants\"*, is ALSO a true risk of a low tracheostomy by `L6`’s own bleeding list — but the bank keys the pleural dome. Both are correct; answer as printed and note the clash.**",
        "qs": [
          "entqb-thr8-412",
          "entqb-thr8-413",
          "entqb-thr8-416",
          "entqb-thr8-418",
          "entep-throat-83"
        ]
      },
      {
        "id": "strid-19",
        "w": "must",
        "h": "⭐ The tube — three parts, four choices, and the two cannulae that are managed OPPOSITELY",
        "body": "**THREE PARTS, verbatim from `L6`:** *\"A tracheostomy tube has three parts: the **outer cannula**, the **inner cannula**, and the **obturator** used for inserting the tube.\"*\n\n**FOUR CHOICES:** **Portex or metal** · **single or double cannula** · **cuffed or non-cuffed** · **fenestrated or non-fenestrated**.\n\n**THE IDEAL TUBE — five specifications, and they are a plausible short question:** **inert material** · **double cannula** · **inner cannula longer** · **cuffed** · **fenestrated**.\n\n> **⚠️⚠️ THE HIGHEST-YIELD SENTENCES IN THE WHOLE TRACHEOSTOMY LECTURE, BECAUSE TWO QUESTIONS TURN ON THEM AND ONE INVERTS THEM:**\n> - *\"**Outer cannula stays in trachea ALL OF THE TIME, except for changing.**\"*\n> - *\"**Inner cannula is the SAFETY VALVE to keep airway open and is REMOVED FOR CLEANING.**\"*\n\n| | **OUTER cannula** | **INNER cannula** |\n|---|---|---|\n| Stays in | **All of the time** | Removed **repeatedly** |\n| Why | It **holds the tract open**; the tract is a raw wound for the first days, and removing the tube before it organises lets the opening **collapse** — with a real risk of a **false passage** on reinsertion | It is the **safety valve**. Crusts form in the lumen, and the inner tube can be taken out and cleaned **without ever leaving the patient without an airway** |\n| Timing | Left undisturbed about **5 days**, then changed | Cleaned **several times a day**, as often as secretions demand |\n\n**⚠️ THAT IS WHY THE IDEAL TUBE IS DOUBLE-CANNULA. The commonest early complication is a blocked tube (`strid-20`), and a single-cannula tube cannot be unblocked except by removing the patient’s only airway.**\n\n**`entqb-thr8-443` and `entqb-thr8-442` are the same fact asked from opposite ends, and the second one INVERTS it:**\n- **`entqb-thr8-443`** — *what allows track formation and avoids collapse of the tracheal opening?* → **leave the OUTER tube alone for 5 days.** The distractors (antibiotics and mucolytics, deflating the cuff 5 min/hour, frequent suction) are all genuine care measures — they protect **the lumen or the tracheal wall**, not the **tract**.\n- **`entqb-thr8-442`** — *all true EXCEPT* → **\"the INNER tube should be cleaned after 5 days\" is false.** The 5-day rule belongs to the **outer** tube. The other three options are correct: **semi-sitting**, **suction < 15 seconds to avoid hypoxia**, and **cuff pressure below tracheal capillary perfusion** — *too little cuff and the patient aspirates, too much and the tracheal wall necroses*, which is the same ischaemia that produces post-intubation stenosis in `strid-23`. *(The suction-duration and cuff-pressure figures are printed by the bank; `L6` gives the care list but not the numbers, so they are not taken from the course material.)*",
        "qs": [
          "entqb-thr8-442",
          "entqb-thr8-443"
        ]
      },
      {
        "id": "strid-20",
        "w": "must",
        "h": "⭐⭐ Complications — the three lists, and the \"commonest\" questions built on them",
        "body": "**`L6` sorts the complications into three groups — OPERATIVE, EARLY postoperative, LATE postoperative — and the bank’s questions are almost all *\"which group does this belong to\"* or *\"which is commonest in this group\"*. Learn the groups, not just the items.**\n\n**OPERATIVE — three, in order:**\n1. **Primary bleeding** — *ant. jugular v. · jugular arch · inf. thyroid v. · thyroid gland · thyroidea ima a. · innominate a.*\n2. **Apnoea.**\n3. **Surgical injury** — *oesophagus · recurrent laryngeal n. · **pleura** · cricoid cartilage.*\n\n**EARLY POSTOPERATIVE — nine:** **surgical emphysema** · **bleeding (reactionary & secondary)** · **pneumothorax & pneumomediastinum** · **obstruction of the tube** · **displacement of the tube** · **early tracheo-oesophageal fistula** · **infection** · **recurrent laryngeal n. paralysis** · **aspiration of gastric contents**.\n\n**LATE POSTOPERATIVE — nine:** **difficult decannulation** · **delayed haemorrhage after 5 days (innominate a. erosion)** · **late tracheo-oesophageal fistula** · **atelectasis or pulmonary infection** · **tracheal granulation** · **tracheal or laryngeal stenosis** · **tracheomalacia** · **persistent tracheo-cutaneous fistula** · **tracheostomy scar**.\n\n> **⚠️⚠️ TWO \"COMMONEST\" QUESTIONS SIT ON THE SAME PAGE AND DIFFER BY ONE WORD IN THE STEM. GETTING THEM THE RIGHT WAY ROUND IS PURE MARKS:**\n> - **Commonest OPERATIVE complication → BLEEDING** (`entqb-thr8-406`). It is **first on `L6`’s operative list**, and the pretracheal field is exactly where six named vessels lie. In an **emergency** those veins are **engorged by the obstruction itself**. **⚠️ Note that \"obstructed tube\" is offered here and cannot possibly be right — at the operative stage there is no tube in yet.**\n> - **Commonest EARLY POSTOPERATIVE complication → OBSTRUCTION OF THE TUBE** (`entqb-thr8-402`), against surgical emphysema, bleeding and pneumothorax — **all three of which are also on the early list**, which is what makes the question a real discrimination rather than a recall.\n\n**⚠️ WHY THE TUBE BLOCKS, AND WHY IT IS ALSO THE MOST DANGEROUS EARLY COMPLICATION.** `L6` explains it on the care slide: the tracheostomy is *\"a much more direct route to the lungs and therefore the air moving into the lungs will not have the benefit of the **warming, moistening and filtering** effect of the nasal passages… **It needs special care to prevent it’s blocking with secretions.**\"* Dry air thickens mucus, mucus crusts, the crust occludes the lumen — **and this patient has no other airway.** Prevention is **humidification, saline instillation and frequent suction** (`strid-22`), and the reason the ideal tube has a removable inner cannula (`strid-19`).\n\n**APNOEA THE MOMENT THE TRACHEA IS OPENED (`entqb-thr8-409`) — the key is \"both\".** An obstructed patient has been breathing on **two** drives at once: a **CO₂-driven central drive** and a **hypoxic peripheral drive** through the carotid and aortic bodies. Opening the trachea relieves the obstruction instantly, so **CO₂ washes out below the apnoeic threshold** *and* **PaO₂ rises above 60**, removing both stimuli in the same few breaths — and the patient stops breathing. **Practical consequence: have ventilation ready before the trachea is opened, and decompress an obstructed airway gradually.** *(`L6` lists apnoea as operative complication 2 but gives no mechanism; the chemoreceptor account is not taken from the course material.)*\n\n**⚠️ DELAYED HAEMORRHAGE AFTER 5 DAYS → THE INNOMINATE ARTERY (`entqb-thr8-403`), AND `L6` PRINTS THE INTERVAL INSIDE THE ITEM ITSELF.** The mechanism is a **tracheo-innominate fistula**: the tube tip or the cuff presses the anterior tracheal wall against the artery crossing behind the manubrium until it necroses through. The other three options — **anterior jugular vein, jugular arch, thyroidea ima artery** — are all on the **primary (operative) bleeding** list; they bleed **at the operation**, not on day five. **⚠️ A small \"herald\" bleed often precedes the fatal one, so ANY late stomal bleeding is an innominate fistula until proved otherwise.** *(The herald bleed and the fistula mechanism are not taken from the course material.)*\n\n**TIMING IS THE INSTRUMENT — three questions are decided by nothing else:**\n\n| Stem | Answer | Why the timing settles it |\n|---|---|---|\n| **Respiratory distress at TWO HOURS** (`entqb-thr8-441`) | **Slipped (displaced) tube** | At two hours **the tract has not formed** — the tube can leave the trachea and sit in the wound as a **false passage**, inflating the neck instead of the lungs while looking correctly placed. Tracheal stenosis takes weeks; central apnoea is an on-table event; OSA is **pharyngeal**, and a tracheostomy bypasses the pharynx entirely |\n| **All cause EARLY distress EXCEPT** (`entqb-thr8-408`) | **Pneumonia** | Early distress is always **mechanical** — obstructed tube, displaced tube, pneumothorax. **Pulmonary infection is on `L6`’s LATE list** and needs days |\n| **Early complication commoner in CHILDREN** (`entqb-thr8-407`) | **Aerophagia** | Two filters. **Is it early?** — tracheomalacia is **late**, so it goes regardless of the child. **Is it paediatric?** — fistula and infection are early but not childhood-specific. A **crying child with a fresh tracheostomy swallows large volumes of air** |\n\n**⚠️ AEROPHAGIA IS WORTH A PARAGRAPH BECAUSE THE BANK BUILDS A FULL VIGNETTE ON IT (`entqb-thr8-414`), AND THE SOURCE PRINTS THE EXPLANATION:** *\"Aerophagia (swallowing excess air) can lead to **abdominal distension**, which pushes against the **diaphragm**, restricting lung expansion and causing persistent dyspnoea.\"* Read that stem as a checklist: *\"despite a **patent** tracheostomy tube\"* kills obstruction · *\"**correctly positioned**\"* kills displacement · *\"**without** signs of upper airway obstruction\"* kills anything laryngeal · and *\"**abdominal distension**\"* names the answer. **The dyspnoea is RESTRICTIVE, not obstructive**, and it is worse in a child because **a child breathes almost entirely with the diaphragm**. **Treatment is a nasogastric tube.** Left alone it invites the **aspiration of gastric contents** that is complication nine on the same early list — *the two sit next to each other for a reason.* *(The paediatric respiratory mechanics are not taken from the course material.)*",
        "qs": [
          "entqb-thr8-406",
          "entqb-thr8-402",
          "entqb-thr8-409",
          "entqb-thr8-403",
          "entqb-thr8-441",
          "entqb-thr8-408",
          "entqb-thr8-407",
          "entqb-thr8-414"
        ]
      },
      {
        "id": "strid-21",
        "w": "must",
        "h": "⭐⭐ The chest after a tracheostomy — pneumothorax, and the one-word discriminator",
        "body": "**SEVEN QUESTIONS ACROSS BOTH BANKS ASK THIS SINGLE SITUATION, AND THEY ALL TURN ON THE SAME BEDSIDE LOGIC. IT IS THE BEST VALUE-PER-FACT IN THE CHAPTER.**\n\n**Why the pleura is reachable at all.** `L6` names it twice: **pleura** among the structures at **surgical injury**, and **pneumothorax & pneumomediastinum** third on the **early postoperative** list. The anatomy is that **the domes of the pleura arch UP into the root of the neck, above the clavicle** — highest in **children** and in **short-necked adults**. Dissection low in the pretracheal plane reaches them; so does a struggling, obstructed patient generating strong **negative intrathoracic pressure**, which can tear the apex without any instrument touching it. **This is the price of a LOW tracheostomy (`strid-18`).** *(The dome anatomy and the negative-pressure mechanism are not taken from the course material.)*\n\n> **⚠️⚠️ THE DISCRIMINATOR IS *UNILATERAL* AIR ENTRY. A TUBE PROBLEM SILENCES BOTH SIDES; ONE QUIET SIDE MEANS THE PROBLEM IS BELOW THE TUBE.**\n\n| Finding | Where the problem is |\n|---|---|\n| **Diminished air entry on ONE side**, tube clean and correctly sited | **PNEUMOTHORAX** — in the **pleural space** |\n| **Both sides quiet**, suction catheter will not pass | **Obstructed tube** — in the **lumen** |\n| **Both sides quiet**, neck inflating, crepitus, no airflow through the tube | **Displaced tube** — a **false passage** in the tissues |\n| Fever, purulent secretions, days later | **Pneumonia / atelectasis** — `L6`’s **LATE** list |\n\n**⚠️ THE STEMS ARE ENGINEERED SO THAT EACH CLAUSE ELIMINATES ONE OPTION — read them as exclusions, not as stories.** *\"The tube is **clean**\"* removes the commonest cause, obstruction, and argues against displacement (which gives no airflow at all plus surgical emphysema). *\"**Diminished air entry** on auscultation\"* then moves the problem out of the tube and into the chest. That is the whole of `entep-throat-8`, `entep-throat-39`, `entep-ear-52` and `entqb-thr8-431`.\n\n**`entep-throat-72` adds one word — *\"IMMEDIATE* respiratory distress following tracheostomy\" — and the word decides it.** Something that happened **during the operation** points to **pneumothorax** (pleural injury is on the operative list); **tube obstruction** needs time for secretions to crust; **chest infection** needs days; and **subcutaneous emphysema alarms everybody but does not obstruct anything**. **⚠️ The source misspells the keyed option as \"Peumothorax\"; the spelling is corrected in the entry.**\n\n**`entqb-thr8-417` is the same complication with the classic triad spelled out** — **sudden** onset, **unilaterally** decreased breath sounds, **chest pain** — in the patient who has just had a **low** tracheostomy for thyroid cancer. **Surgical emphysema often coexists and is a distractor, not a cause of reduced air entry;** tracheomalacia and tracheo-oesophageal fistula are the wrong timing and the wrong signs.\n\n**⚠️ AND ONE OF THE SEVEN ASKS FOR THE INVESTIGATION, NOT THE DIAGNOSIS (`entqb-thr8-424`) — the answer is a plain CHEST X-RAY, and the source prints the box.** All four options can show a pneumothorax; the first test is the one that answers the question **fastest, at least cost and least risk**. A **portable film** is immediate and shows the **pneumothorax, any mediastinal shift, the tube position and any collapse all at once**. **CT** means moving a breathless patient out of the department. **Bronchoscopy** looks *inside* the airway and is blind to the pleural space. **Ultrasound** is sensitive in trained hands, operator-dependent, and cannot show the tube. **⚠️ And \"the patient is STABLE\" is load-bearing — a TENSION pneumothorax is decompressed with a needle, not imaged.** *(The comparative merits and the tension exception are not taken from the course material.)*",
        "qs": [
          "entep-throat-72",
          "entep-throat-8",
          "entep-throat-39",
          "entep-ear-52",
          "entqb-thr8-431",
          "entqb-thr8-417",
          "entqb-thr8-424"
        ]
      },
      {
        "id": "strid-22",
        "w": "must",
        "h": "⭐ Post-operative care — and the two \"except\" questions built on it",
        "body": "**`L6` divides care three ways — *care for the TUBE, care for the STOMA, care for the PATIENT* — and then prints a nine-item list: **humidity · saline instillation · skin care · suctioning · inner cannula care · changing · securing · cleaning · resuming activities**.\n\n> **⚠️⚠️ THE ONE SENTENCE THAT EXPLAINS HALF OF THE CARE AND THE COMMONEST COMPLICATION AT ONCE:** *\"A tracheostomy needs extra care because it is a much more direct route to the lungs and therefore the air moving into the lungs **will not have the benefit of the WARMING, MOISTENING and FILTERING effect of the NASAL PASSAGES**. It needs special care to prevent it’s blocking with secretions.\"*\n\n**HUMIDIFICATION (`entqb-thr8-419`) replaces the MOISTENING function of the nose — and that is the answer, not the downstream benefits.** The distractors *\"to avoid lung collapse\"* and *\"to avoid aspiration pneumonia\"* are real problems and humidity helps with both indirectly, but **what humidity is *for* is the nose’s job that the stoma bypassed.** Without it mucus dries, crusts and blocks the tube. **⚠️ Oxygen delivered through a tracheostomy must be humidified for the same reason — dry O₂ makes crusting worse, which is why *\"breathing 100 % oxygen\"* is a wrong answer to the obstruction question below.**\n\n**AVOIDING TUBAL OBSTRUCTION (`entqb-thr8-410`) → FREQUENT SUCTION.** `L6` has it twice: on the care list, and as **function 4 of the operation itself** (*\"an access to the trachea for suction\"*). The distractors each fail for a distinct reason worth holding: **100 % oxygen** dries secretions (worse, not better) · **corticosteroids** treat oedema **in the wall**, not a plug **in the lumen** · and *\"**removal of the tube** and reinsertion after washing\"* would leave the patient **with no airway** — **⚠️ only the INNER cannula ever comes out for cleaning (`strid-19`).**\n\n**POSTURE — `L6` prescribes the SEMI-SITTING position**, first on its medical-treatment list, alongside **humidified oxygen**, **antibiotics and mucolytics**.\n\n> **⚠️⚠️ SO IN `entqb-thr8-420` — *\"post-operative care includes all EXCEPT\"* — THE ANSWER IS *PRONE POSITION*, AND IT IS NOT MERELY ABSENT FROM THE LIST BUT ACTIVELY HARMFUL:** it **buries a stoma that is on the front of the neck**, raises venous pressure in the head and neck, **splints the diaphragm**, and promotes reflux and aspiration. Frequent suction, mucolytics and humidified air are all on `L6`’s own slides. **⚠️ Note the trap: PRONE is the RIGHT posture for LARYNGOMALACIA (`strid-5`) — a different disease, and the bank is happy to let a half-remembered fact from earlier in the same lecture pull you into a wrong answer here.**\n\n**Care of the STOMA:** check the skin **around, above, below and behind** the stoma for redness or irritation; **change the dressing regularly, because a wet dressing causes infection and irritates the skin**; **tapes changed daily** or whenever dirty or wet. **Care of the PATIENT:** **physiotherapy and respiratory exercise**, **resuming activities**, and **communication** — a patient with an open larynx has no voice, and `L6` lists that as care rather than as an afterthought.",
        "qs": [
          "entqb-thr8-419",
          "entqb-thr8-410",
          "entqb-thr8-420"
        ]
      },
      {
        "id": "strid-23",
        "w": "must",
        "h": "⭐⭐ Intubation trauma — immediate versus delayed, and post-intubation stenosis",
        "body": "**`L6` names the mechanism and the end result but not the middle.** Under trauma it prints *\"**Internal trauma — Mechanical: F.B, intubation, CUFF INJURY, endoscopy**\"*, and among the **causes of stridor in adults** it prints *\"**Post intubation stenosis**\"*. **⚠️ NO CACHED ENT SLIDE LISTS THE COMPLICATIONS OF INTUBATION AS A GROUP**, so the immediate/delayed split below is **not taken from the course material** — but the bank asks it from both ends on the same page.\n\n| | Complication | Why it happens there |\n|---|---|---|\n| **IMMEDIATE** | **Dislocation of the arytenoid** (`entqb-thr7-343`) | The **cricoarytenoid joint is small and shallow**. A laryngoscope blade or the tube tip **catches the arytenoid and levers it out** at the moment of intubation |\n| **DELAYED — commonest** | **Intubation granuloma** (`entqb-thr7-341`) | The tube rests on the **posterior glottis**, over the **vocal process of the arytenoid** — thin mucosa on bare cartilage. Pressure ulcerates it; the ulcer heals by **exuberant granulation**, giving a smooth, often pedunculated lesion **weeks later**, presenting with **hoarseness** |\n| **DELAYED — most dangerous** | **Post-intubation SUBGLOTTIC / TRACHEAL STENOSIS** | **Cuff ischaemia** — see below |\n\n**⚠️ ARYTENOID DISLOCATION MIMICS AN RLN PALSY** — hoarseness with an immobile cord — and the two are separated by **laryngeal EMG** (normal muscle activity in dislocation, denervation in palsy) and by **passive mobility on palpation**. It matters because **early endoscopic reduction works, before the joint ankyloses**; a missed dislocation becomes the **cricoarytenoid ankylosis** offered as a distractor in the same question.\n\n> **⚠️⚠️ CUFF ISCHAEMIA IS THE MECHANISM BEHIND FOUR SEPARATE QUESTIONS, AND IT IS ONE SENTENCE: the cuff must seal against the mucosa at a pressure BELOW capillary perfusion pressure — above it, the mucosa is bloodless, ulcerates, and heals as CIRCUMFERENTIAL FIBROUS SCAR that then CONTRACTS over weeks to months.** The **subglottis is the worst place for it**, because the **cricoid is the only complete ring** and cannot expand outward (`strid-18`). *(The perfusion mechanism is not taken from the course material.)*\n\n**FOUR PRINTINGS OF ONE DIAGNOSIS, AND THE STEMS ARE THE ONLY DIFFERENCE — the phrase to recognise is *prolonged cuffed intubation, THEN biphasic stridor*:**\n\n| Question | The stem in one line | Keyed |\n|---|---|---|\n| `entep-mfe5-9` | ICU 4 weeks → biphasic stridor | **Post-intubation tracheal stenosis** |\n| `entqb-thr7-365` | Ventilated 3 weeks → biphasic stridor, hoarseness; **scope shows subglottic narrowing** | **Tracheal stenosis** |\n| `entqb-thr7-376` | RTA, ventilated 4 weeks, **extubated successfully**, progressive over **4 months** | **Post-intubation tracheal stenosis** |\n| `entep-throat-case-26` | Coma 3 weeks on a ventilator, now conscious, noisy inspiration **and** expiration | **Subglottic stenosis due to cuffed endotracheal intubation** |\n\n**⚠️ DEFECT RECORDED, KEY LEFT AS PRINTED (`entqb-thr7-365`): the vignette says the narrowing is SUBGLOTTIC and the key reads \"tracheal stenosis\".** Strictly those are different levels — the subglottis is inside the cricoid, the trachea below it — but **a single tube spans both, so post-intubation stenosis characteristically involves both**, and **no option offers \"subglottic stenosis\"**. Answer as printed and note the mismatch.\n\n**HOW THE THREE RIVALS ARE EXCLUDED, and it is always by TIMING or by VOICE:**\n- **Laryngeal oedema** — settles over **hours to days**, not weeks; it cannot be progressive at four months.\n- **Bilateral vocal cord paralysis** — gives stridor **with a NORMAL voice** (`L11) Vocal cord paralysis.pdf`), and it is present **at extubation**, not months later. *\"Extubated successfully\"* is the clause that kills it.\n- **Intubation granuloma** — sits on the **posterior cords**, so it gives **hoarseness**, and it rarely obstructs enough for biphasic stridor unless very large.\n\n**⚠️ AND BIPHASIC STRIDOR IS DOING REAL WORK IN ALL FOUR — by the phase-to-site rule of `strid-2` it localises to a FIXED, CENTRAL obstruction at the subglottis or trachea, which is exactly where a cuff sits.** *(A common real-world trap, not taken from the course material: this patient is often treated for **asthma** for months, because a fixed central narrowing wheezes.)*\n\n**AND THE PREVENTION IS AN INDICATION FOR THE OPERATION IN `strid-16`:** convert a patient who will need **prolonged ventilation** to a **tracheostomy**, which moves the cuff **below the larynx** and takes the tube out of the subglottis altogether. **That is why \"prolonged intubation\" is a NON-OBSTRUCTIVE indication and the commonest one.**",
        "qs": [
          "entqb-thr7-343",
          "entqb-thr7-341",
          "entqb-thr7-365",
          "entqb-thr7-376",
          "entep-mfe5-9",
          "entep-throat-case-26"
        ]
      },
      {
        "id": "strid-24",
        "w": "must",
        "h": "⭐ The airway after thyroid surgery, and the two emergencies with the SAME option list",
        "body": "**THYROID SURGERY THREATENS THE AIRWAY BY TWO COMPLETELY DIFFERENT ROUTES, AND THE BANK TESTS BOTH — sometimes over an identical set of four options.**\n\n| | **NERVE** — recurrent laryngeal injury | **CALCIUM** — parathyroid injury |\n|---|---|---|\n| Mechanism | The RLN supplies **every intrinsic muscle except the cricothyroid**, including the **posterior cricoarytenoid — the only ABDUCTOR**. Cut it **bilaterally** and neither cord opens | The parathyroids are removed or devascularised → **hypocalcaemia** → nerve membranes become **hyperexcitable** → **tetany**, including **laryngeal spasm** |\n| Timing | **On waking**, immediately | **Hours to days** later |\n| Presents as | **Stridor**, with a **surprisingly good voice** — the cords sit close together | **Perioral numbness, tingling of hands and feet, cramps**, carpopedal spasm, then spasm of the cords |\n| Signs | Stridor, poor air entry through the glottis | **⚠️ Chvostek’s sign** and **⚠️ Trousseau’s sign** |\n| **Treatment** | **AN AIRWAY** — intubation, then **tracheostomy** | **⚠️ IV CALCIUM. `L6`: *\"Management of the cause… should be the 1st line of therapy e.g.: TETANY (CALCIUM)\"*** |\n\n**`entep-throat-62`** — stridor after **total thyroidectomy** → **recurrent laryngeal nerve injury**. **The discrimination being tested is against the SUPERIOR laryngeal nerve**, whose external branch supplies only the **cricothyroid**, the muscle that **tenses the cord and sets PITCH**. Injuring it costs the patient their high notes; **it cannot narrow the airway**, because the cricothyroid neither opens nor closes the glottis. **⚠️ TWO DEFECTS IN THE PRINTED BOX ARE RECORDED, KEY LEFT AS PRINTED:** it says *\"bilateral **or unilateral**\"* when **only bilateral injury obstructs**, and it calls the stridor **biphasic** where `L6` makes a **glottic** obstruction **inspiratory** — and where the same bank keys a **subglottic** tumour for biphasic stridor six pages later.\n\n> **⚠️⚠️ `entqb-thr8-405` AND `entqb-thr8-415` PRINT THE *SAME FOUR OPTIONS* — subcutaneous adrenaline · endoluminal procedure · tracheostomy · Ca infusion — AND KEY OPPOSITE ANSWERS. The stem is the entire question.**\n> - **Swollen face, lips and tongue in MINUTES, non-pitting oedema of hands, feet and genitalia, gut cramps, low BP → ANGIONEUROTIC OEDEMA → SUBCUTANEOUS ADRENALINE.** `L6` answers it twice: adrenaline is on the **medical-treatment** list (*\"Semisitting position · Humidified Oxygen · Corticosteroids · Racemic Epinephrine · **Subcut. Adrenalin** · Antibiotics & Mucolytics · Anti-inflammatory drugs\"*), and **angioneurotic oedema is one of the conditions for which *\"management of the cause… should be the 1st line of therapy\"*.** Adrenaline reverses **capillary leak, bronchospasm and hypotension at once**. **⚠️ Intubation and tracheostomy are escalations, and instrumenting a grossly swollen supraglottis can make it worse.**\n> - **Cramps, perioral numbness, tingling, positive CHVOSTEK and TROUSSEAU → HYPOCALCAEMIA → CALCIUM INFUSION.** The bank’s own box names the cause: *\"laryngospasm, tetany, prolonged QT interval… due to HYPOCALCEMIA due to accidental removal of parathyroid gland.\"*\n> **The rule of thumb: swollen and MINUTES → adrenaline. Tingling, spasm and DAYS → calcium.**\n\n**`entqb-thr8-399` asks the cause of LARYNGEAL SPASM plainly, over an electrolyte menu — HYPOCALCAEMIA**, not hyper- or hypokalaemia and not hypernatraemia. **Calcium stabilises the nerve membrane; remove it and the membrane fires spontaneously**, so the adductors contract and the cords slam shut. `L6` lists **\"laryngeal spasm\"** among the **neonatal** causes of stridor, and `L12) Pediatric Laryngeal Lesions.pdf` attributes the infant version to **immature neuromuscular control**; the childhood association with **rickets** and the membrane mechanism are **not taken from the course material**.\n\n**⚠️ AND THE REASON THIS SECTION MATTERS BEYOND FOUR QUESTIONS: hypocalcaemic laryngeal spasm and bilateral abductor palsy can both present as stridor in the same post-thyroidectomy patient, and the treatments are unrelated.** One needs **calcium in a vein**; the other needs **a hole in the neck**. **Check the calcium before assuming the nerve.**",
        "qs": [
          "entep-throat-62",
          "entqb-thr8-405",
          "entqb-thr8-415",
          "entqb-thr8-399"
        ]
      }
    ]
  }
};
