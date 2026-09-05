# Section 8 — chapter rulings

Binding for every drafting half of peds endpoint part 2 section 8, "Neurological disorders"
(pp.930-1078, 60 staged). Measured 2026-09-05 off `app\data\theory.peds.js` and `app\data\modules.js`,
before staging opened. Page structure for the same section is in
`endpoint-p2-s08-page-map.md` — read both.

Why the file exists is the same reason as sections 6 and 7: section 4 hard-coded one chapter and
misfiled 24 of 87; section 5 distributed the judgment with no shared rulings and put three diseases
on two shelves. Judgment stays with the drafter everywhere a ruling does not reach; what is removed
is the chance of two halves deciding one collision differently.

**Section 8 is the most collision-prone section in the book so far.** Neurology in this module is
split across **four** chapters, and five more chapters outside neurology own topics a neurology
section will raise — neonatal seizures, HIE, meningitis, brain tumours and the neurocutaneous
syndromes all live elsewhere. Expect a wide spread; a section-8 block that comes back mostly
`neurological` is a symptom, not a result.

## The four neurology chapters

| id | title | its sections |
|---|---|---|
| `neuro-stroke` | Stroke and intracranial haemorrhage | neuro-1 extradural haemorrhage · neuro-2 **the acute focal deficit rule** · neuro-3 investigations |
| `neurological` | Seizures and epilepsy | neuro-4 febrile seizure · neuro-5 the aetiological classification (the "is it a seizure" differential) · neuro-6 epilepsy defined · neuro-7 focal onset · neuro-8 generalised onset · neuro-9 epileptic encephalopathy · neuro-10 the syndromes · neuro-11 the childhood syndrome · neuro-12 diagnosis is the history · neuro-13 six treatment principles · neuro-14 status epilepticus |
| `neuro-nm` | Motor and neuromuscular disorders | neuro-15 the motor pathway · neuro-16 the site/cause table · neuro-17 Friedreich ataxia · neuro-18 LMN disease defined · neuro-19 the approach · neuro-20 anterior horn cell and SMA · neuro-21 neuropathies · neuro-22 polio / GBS / transverse myelitis · neuro-23 Bell palsy · neuro-24 the muscular dystrophies · neuro-25 congenital myopathies · neuro-26 the floppy infant |
| `neuro-cp` | Cerebral palsy | neuro-27 definition · neuro-28 the six classifications · neuro-29 early detection |

## The rulings

**1. Febrile seizure is `neurological`** (`neuro-4` is a section written for it). Five infection
chapters mention it in passing; none teaches it. A febrile-seizure question does not go to
`infection` however feverish the vignette.

**2. Meningitis is `infection`** — the chapter is literally "The febrile child and meningitis"
(`inf-9` through `inf-15`, plus `infection-bact/inf-22`). This holds **even when the child
convulsed**: the seizure is how the meningitis announced itself. Two carve-outs:
- **Under 28 days → `neonatal-sepsis`** (`nsp-10`, the densest meningitis section outside
  `infection`).
- **A post-meningitic complication asked as such** — hydrocephalus, deafness, subdural effusion —
  → `infection-bact` (`inf-22`).

**3. A seizure in the first 28 days is `neonatal-seiz`, never `neurological`.** The chapter
"Neonatal seizures and birth injury" exists precisely because neonatal seizures are a different
disease with different causes, semiology and drugs. Age is the whole discriminator here.

**4. HIE and birth asphyxia are `perinatal-hie`** (`phi-1` … `phi-13`). The overlap with
`neonatal-seiz` is real and must be split by the ask: *this baby is fitting on day 1, what do you
give / what caused it* → `neonatal-seiz`; *staging, Sarnat, cooling, prognosis of the asphyxial
insult itself* → `perinatal-hie`.

**5. Cerebral palsy is `neuro-cp`**, including when the vignette is a child presenting with
developmental delay and the answer is CP. `dev-problems` owns delay as a **presenting problem and
its screening**; `neuro-cp` owns the diagnosis, its classification and its management.

**6. The whole neuromuscular ladder is `neuro-nm`** — floppy infant, SMA, GBS, polio, transverse
myelitis, hereditary neuropathies, Bell palsy, Friedreich ataxia, the muscular dystrophies and the
congenital myopathies. **One carve-out: Duchenne asked as a genetics problem** — pedigree, carrier
risk, X-linked recessive mechanics, prenatal testing — → `genetics` (`gen-16`). Duchenne asked
clinically (Gower, calf pseudohypertrophy, CK, steroids, the cardiomyopathy) → `neuro-nm`.

**7. Brain tumours are `malignant-solid`, not neurology.** `mal-19`/`mal-20`/`mal-21` teach the
posterior fossa tumours, their presentation and their imaging; `neuro-nm/neuro-16` lists "tumour"
only as one row of a site-of-lesion table. A morning headache with vomiting and papilloedema asking
*what is this* → `malignant-solid`.

**8. ⚠️ The neurocutaneous syndromes are `malignant-solid`.** Measured, and counter-intuitive:
neurofibromatosis, tuberous sclerosis and Sturge-Weber are taught in `malignant-solid/mal-16`,
`mal-17` and `mal-18` — three sections written for them — while `neurological` and `neonatal-seiz`
each mention them once. A café-au-lait or ash-leaf question goes there. **Say so in one clause in
the `explanation`**, because a reader will not expect it.

**9. Acute focal neurological deficit is `neuro-stroke`** — this is `neuro-2`'s own stated rule,
which it says outranks everything else. Extradural and intracranial haemorrhage, including the
lucid-interval head injury, are `neuro-1`. Where the question is really about the **underlying
disease** — sickle cell, congenital cyanotic heart disease as an embolic source — file to that
disease's chapter (`haematology`, `cardiac-cyan`) and say why.

**10. Syncope and breath-holding attacks are `neurological`** (`neuro-5`, which carries seven
mentions of syncope as the leading seizure mimic). **Unless the question is cardiac** — exertional
collapse, a long QT trace, a murmur — in which case it is `cardiac` or `cardiac-acq`.

**11. Status epilepticus is `neurological`** (`neuro-14`), **not `emergencies`.** Measured:
`emergencies` contains no mention of it. This is the opposite of the section-6 shock ruling, and it
is deliberate — the shelf follows the theory, not the word "emergency".

**12. Hydrocephalus and neural tube defects have no chapter.** File by cause and say so:
post-meningitic → `infection-bact`; post-haemorrhagic in a preterm → `perinatal` (`per-10`); with a
posterior fossa tumour → `malignant-solid`. **Neural tube defects and periconceptual folate →
`genetics`** (`gen-12`, `gen-18`), which is where the theory puts them.

**13. Intellectual disability, tics and Tourette are `mental`; autism and ADHD are `dev-nd`; global
developmental delay, its screening schedule and hearing are `dev-problems`.** These three are
adjacent and easy to blur — `mental/ment-2` owns the two-limb definition of intellectual disability
and `ment-6` owns tics, while `dev-nd/dp-9..12` is autism and `dp-13..17` is ADHD end to end.

**14. Primary headache — migraine and tension-type — is not taught in this module.** Where a
section-8 page asks it, file `neurological`, answer it from general knowledge, and carry the tag
`not taken from the course material` on the outside claims. Do not declare a gap. First rule out
that the question is really a secondary-headache question, in which case rulings 2, 7 and 9 decide it.

## Standing instructions

- File by what the question **asks**, never by what the vignette mentions.
- Where an entry sits somewhere the section title would not predict — which in this section will be
  often — **say why in one clause inside `explanation`**.
- If no ruling here applies and the theory file does not settle it, file by the theory file and
  **report the decision** in your close-out. Do not invent a chapter; `MODULES` is fixed.
