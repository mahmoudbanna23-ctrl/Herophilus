# Section 6 "Cardiac disorders" — which chapter each entry is filed under

**Read this before you write a single `chapter:` field.** It was measured off `app\data\theory.peds.js`
— the app's own teaching content, which is what a student actually reads when they open a chapter —
not off either bank's existing entries.

## Why this file exists

Section 4 misfiled 24 of 87 entries because a single chapter was hard-coded into the drafting prompt
and applied to pages it did not fit. Section 5 fixed that by letting every half judge its own chapter,
and produced the opposite failure: **three diseases landed on two different shelves depending on which
agent read them**, and eight entries had to be re-filed after the fact. Croup went to `respiratory` in
two halves and `resp-bronch` in another; both of the halves that agreed with each other were wrong,
because both were following one shared precedent. **Agreement between two agents reading one precedent
is one measurement, not two.**

So the rulings below are measured once, centrally, from the theory file, and they are binding. What is
left to your judgement is which ruling a given page falls under — that still requires reading the page.

## The three cardiac shelves, and what the theory file teaches in each

**`cardiac` — "Congenital heart disease".** Its section headings are: the six-group classification ·
how it presents · the three fetal shunts · the switch at birth · normal saturations and pressures ·
what disqualifies a murmur · VSD anatomical types and haemodynamics · small VSD · moderate and large
VSD · **Eisenmenger syndrome** · PDA (why it is open, the preterm duct, why the murmur is continuous) ·
ASD types, size and closure · AVCD · coarctation (adult type, critical neonatal) · **the pulse pattern
names the lesion — left heart outflow obstruction**.

File here: VSD · ASD · PDA · AVCD/AVSD · coarctation · aortic stenosis · pulmonary stenosis ·
innocent and physiologic murmurs · murmur workup and "which investigation first" · heart failure from a
left-to-right shunt · risk factors for congenital heart disease · **Eisenmenger syndrome, which this
file teaches inside the VSD block and not in the cyanotic chapter** · and any question whose vignette
is a syndrome (Down, Turner, congenital rubella) but whose actual question is *which cardiac lesion*.

**`cardiac-cyan` — "Cyanotic heart disease".** Headings: the eight types · true cyanosis versus its
mimics · clues from the second sound and the murmur · complications · the four components of TOF ·
history and examination · investigations · symptoms and the sign that confirms it · treating the spell ·
medical management of TOF · shunt procedures · when waiting is justified.

File here: tetralogy of Fallot and its complications and spells · transposition of the great arteries ·
tricuspid atresia · the cyanotic neonate · the hyperoxia test · duct-dependent lesions and prostaglandin
E1.

**`cardiac-acq` — "Acquired heart disease".** Headings: aetiology of myocardial disease, the six
groups · Kawasaki AHA 2017 criteria · the MIS-C case definitions · infective endocarditis (organisms ·
clinical manifestations · investigation, diagnosis, treatment · **the susceptible patient**) · rheumatic
fever (presentation · **the Jones criteria, 1992 update** · proving the streptococcus · recurrence, RHD
and prophylaxis · treatment by stage) · **arrhythmias — the complex width and the rate decide**.

File here: rheumatic fever and every Jones-criteria question · rheumatic heart disease and the valve
lesions it causes, **mitral stenosis and mitral regurgitation included** · secondary prophylaxis ·
infective endocarditis, including its microbiology and its occurrence on a known VSD · viral myocarditis ·
pericarditis · Kawasaki · **and arrhythmia questions: this is where the theory file teaches SVT, and it
is the only pediatrics chapter holding both `adenosine` and vagal manoeuvres.**

## Two questions in this section are not cardiac at all

**Scarlet fever → `infection-rash`.** The theory file settles this outright: `infection-rash` carries a
dedicated section `inf-28` headed **"Scarlet fever"**, and `infection-bact` points at it explicitly —
its GABHS block writes "**Toxigenic:** scarlet fever (inf-28)". `infection-bact` describes the exotoxin
that causes the rash; it does not teach the disease. Do not file scarlet fever under `infection-bact`.

**Shock recognition and the pre-arrest child → `emergencies`.** That chapter teaches the four types of
shock, the three mechanisms of haemodynamic decompensation, telling them apart at the bedside, why blood
pressure is the trap, and age-banded vital signs. A question asking you to *recognise* a decompensating
child belongs there, not on a cardiac shelf.

## How to apply this

- **File by what the question ASKS, not by what its vignette mentions.** A congenital rubella vignette
  whose question is "which cardiac lesion" is `cardiac`. A Down syndrome vignette whose question is
  "which cardiac lesion" is `cardiac`.
- **Say in one clause, inside the entry's `explanation`, why an entry sits somewhere the section title
  would not predict** — the scarlet fever one, the shock one, the endocarditis ones. A reader who opens
  `infection-rash` and meets a question from the cardiac section should be able to see why it is there.
- **If a page does not fall under any ruling above, file it where the theory file teaches its subject,
  and say in your report which page it was and what you decided.** Do not follow another bank entry's
  precedent without saying you are doing so — that is exactly what went wrong in section 5.
