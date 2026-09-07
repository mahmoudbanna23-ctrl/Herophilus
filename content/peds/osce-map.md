# Pediatrics OSCE and long cases — structural map

Mapped 2026-09-08 from the PDFs' own text layer. **Nothing was rendered and nothing was
transcribed by eye for this map** — the three Word-produced files carry a complete text layer, so
section boundaries below are read straight out of the file, not reconstructed. The fourth file, a
CamScanner scan, is being identified separately and is recorded at the bottom.

## The headline finding — this is not a scanned job

The resume brief assumed image-only scans. That is wrong for three of the four files. All three
were produced by **Microsoft Word 2010** and `pdftotext` returns full, clean prose.

| File | Pages | Bytes | Text layer | Chars extracted |
|---|---|---|---|---|
| `pediatrics long cases.pdf` | 90 | 2.4 MB | **Yes, full** | 116,884 |
| `pediatrics OSCE.pdf` | 56 | 2.2 MB | **Yes, full** | 57,085 |
| `pediatric OSCE 2.pdf` | 32 | 2.5 MB | **Yes, full** | 19,972 |
| `CamScanner 01-05-2025 11.17.pdf` | 103 | 32.6 MB | **No** — 120 chars over pp.1–8 | — |

The whole readable corpus is **194 KB of text across 178 pages**. No OCR, no `pdftoppm` sweep and
no vision seat is needed for it. Only figure pages (listed below) and the CamScanner file require
looking at an image.

All four live in `Semester 8\Pedo\OSCE\`.

## Identity, as printed

Each page of all three carries a watermark header naming the source:

| File | Watermark, verbatim | Year |
|---|---|---|
| `pediatrics long cases.pdf` | `Dr_Yakout_ChicoAS_Pediatric_Long_Cases_A_SH_2023` | 2023 |
| `pediatrics OSCE.pdf` | `Dr_Yakout_ChicoAS_Pediatric_OSCE_A_SH_2023` | 2023 |
| `pediatric OSCE 2.pdf` | `Dr_Yakout_ChicoAS_Pediatric_OSCE_II_2023_A_SH` | 2023 |

Same author line throughout — Dr Yakout, ChicoAS, A_SH. The three are one set in three parts, not
three competing books.

**Page offset is zero.** Each page prints its own number in the footer (`Page 11` on PDF p.11 of
the long cases, `Page 21` on PDF p.21 of OSCE II). Printed page = PDF page in all three. Cite as
`<file>.pdf p.<N>` with no arithmetic.

## Overlap — there is almost none

The three files divide cleanly by kind of station:

- **`pediatrics long cases.pdf`** — 17 full long cases: history, examination, investigations,
  management, then a Q&A block. This is the file the workstream is named for.
- **`pediatrics OSCE.pdf`** — 14 examination stations (the manoeuvres): meninges, fontanel,
  abdomen, liver, spleen, chest, heart, tone, reflexes, power.
- **`pediatric OSCE 2.pdf`** — 13 further stations, none repeated from OSCE I: growth and
  nutrition measurements, pulses, pallor, cyanosis, sensation, coordination, gait, precordium,
  clubbing.

The only cross-reference is `pediatrics OSCE.pdf` p.56, an `Others` list that names five stations
(precordium/apex, pallor, weight and mid-arm circumference, nutritional status) which OSCE II then
covers in full. That is a pointer, not a duplicate.

## `pediatrics long cases.pdf` — 17 cases, 90 pages

`Q` count is the number of `Q<n>:` markers in the section. A zero is real, not a miss: those cases
print a case write-up with no Q&A block at all (verified on Fallot p.33–35, HSP p.75–78,
bronchiolitis p.88–90).

| # | Case | Pages | pp | Q&A |
|---|---|---|---|---|
| 1 | Cerebral palsy (CP) | p.1–12 | 12 | 13 |
| 2 | Nephrotic syndrome | p.13–20 | 8 | 41 |
| 3 | Nephritic syndrome | p.21–28 | 8 | 28 |
| 4 | VSD | p.29–32 | 4 | 6 |
| 5 | Fallot tetralogy | p.33–35 | 3 | 0 |
| 6 | Down syndrome | p.36–42 | 7 | 9 |
| 7 | Gastroenteritis | p.43–47 | 5 | 3 |
| 8 | Rheumatic fever | p.48–51 | 4 | 2 |
| 9 | PEM (Protein energy Malnutrition) | p.52–55 | 4 | 6 |
| 10 | Rickets | p.56–61 | 6 | 24 |
| 11 | G6PD deficiency (Acute hemolytic anemia) | p.62–65 | 4 | 10 |
| 12 | Thalassemia | p.66–70 | 5 | 14 |
| 13 | Idiopathic thrombocytopenic purpura (ITP) | p.71–74 | 4 | 11 |
| 14 | Henoch Schonlein Purpura (HSP) | p.75–78 | 4 | 0 |
| 15 | Pneumonia | p.79–81 | 3 | 3 |
| 16 | Asthma | p.82–87 | 6 | 8 |
| 17 | Acute bronchiolitis | p.88–90 | 3 | 0 |

Total 90 pages, 178 printed Q&A items.

### The house format a long case follows

Every case runs the same skeleton, in this order:

1. **History taking** — personal data · complaint · present history · past history · family
   history · nutritional and developmental history.
2. **Examination** — general (vital signs, anthropometry, head and neck, extremities) then the
   system in question.
3. **Investigations**.
4. **Management / treatment**.
5. **Questions** — numbered `Q1:`, `Q2:` … with the answer printed under each.
6. **`Summary, Don't miss`** — a short closing checklist of what the examiner is watching for
   (present in most cases, e.g. p.27, p.42, p.70, p.78).

Sections 5 and 6 are the two that map onto anything the app already does. Sections 1–4 are a
procedure to perform, not a question to answer.

## `pediatrics OSCE.pdf` — 14 stations, 56 pages

| # | Station | Pages |
|---|---|---|
| 1 | Test for meningeal irritation signs | p.1–7 |
| 2 | Examine anterior fontanel & measure head circumference | p.8–13 |
| 3 | Inspect abdomen | p.14–16 |
| 4 | Test of ascites | p.17–18 |
| 5 | Examine lower limb edema | p.19–21 |
| 6 | Examine liver | p.22–26 |
| 7 | Examine spleen | p.27–31 |
| 8 | Auscultate chest | p.32–36 |
| 9 | Inspect chest | p.37–39 |
| 10 | Palpate chest | p.40–42 |
| 11 | Auscultate heart | p.43–47 |
| 12 | Test for muscle tone | p.48–50 |
| 13 | Test for reflexes of upper and lower limbs | p.51–54 |
| 14 | Examine muscle power | p.55 |
| — | `Others` (pointer list to OSCE II stations) | p.56 |

House format per station: **Method** (numbered steps) → **Comment** (what to say) → `OSCE
Questions` block. p.45 is flagged in the source itself as `Murmurs on cardiology (VIP for OSCE,
ORAL)`.

## `pediatric OSCE 2.pdf` — 13 stations, 32 pages

| # | Station | Pages |
|---|---|---|
| 1 | Assess height | p.1–2 |
| 2 | Examine femoral pulse | p.3 |
| 3 | Comment on weight | p.4 |
| 4 | Measure mid arm circumference (MAC) | p.4 |
| 5 | Assess nutritional status | p.5–7 |
| 6 | Assess pallor | p.8–10 |
| 7 | Measure UL/LL ratio (sitting height) | p.11–12 |
| 8 | Assess cyanosis | p.13–15 |
| 9 | Examine touch sensation of upper limbs | p.16 |
| 10 | Examine touch sensation of lower limbs | p.17 |
| 11 | Assess coordination in upper and lower limbs, and gait | p.18–22 |
| 12 | Inspect precordium and palpate apex | p.23–26 |
| 13 | Assess clubbing | p.27–32 |

## What the text layer cannot give — figure pages

These pages extract as empty or near-empty. They hold diagrams or photographs and are the only
pages in the three files that would need rendering:

| File | Empty pages | Thin pages (<250 chars) |
|---|---|---|
| `pediatrics long cases.pdf` | p.11, p.76, p.77 | p.8 |
| `pediatrics OSCE.pdf` | — | p.23, p.54 |
| `pediatric OSCE 2.pdf` | p.2, p.6, p.7, p.9, p.15, p.25, p.26, p.31, p.32 | p.8, p.11, p.21, p.28 |

**OSCE II is picture-heavy** — 9 of its 32 pages carry no text at all and its average page holds
498 characters against 1,145 in the long cases. Clubbing (p.27–32) and precordium (p.23–26) end in
runs of pure image. Any faithful build of OSCE II needs those pages looked at; the other two files
barely do.

## Arabic in the source

Colloquial Egyptian lines are printed throughout — the words to say to the mother, and the
examiner-facing asides. 21 pages of the long cases, 9 of OSCE I, 1 of OSCE II carry them, e.g.
`pediatrics OSCE.pdf` p.32, where the entire auscultate-chest method is written in Arabic.

This collides with the standing rule that all study output is in English. These lines are not
decoration — they are the script the student is expected to speak at the station. **Decision
needed from the owner** before any build: keep them verbatim, translate them, or drop them.

## `CamScanner 01-05-2025 11.17.pdf` — a fourth source, by a different team

103 pages, 32.6 MB, A4, producer `intsig.com pdf producer`, no text layer (120 chars over pp.1–8).
Not named in the resume brief. Identified 2026-09-08 by rendering pp.1, 2, 3, 25, 50, 75, 100 in a
subagent; nothing was transcribed.

- **Source:** `THE HELP TEAM` — a student compilation, not Dr Yakout's. Arabic branding and a
  cartoon mascot; no book title, author or year printed beyond the team name (p.1).
- **Contents page (p.1), headed `LONG CASES`:** Cerebral Palsy · Down Syndrome · Malnutrition
  (Rickets / Marasmus / Kwashiorkor) · Gastroenteritis · Convulsions and Meningitis · Cardiology
  (VSD / TOF / Rheumatic Fever) · Nephrology (Nephrotic / Nephritic / UTI) · Haematology (ITP /
  HSP / DDx purpura / G6PD / Thalassemia) · Pneumonia · Asthma · an Infections table.
- **Three separately-paginated parts**, so **printed page ≠ PDF page and the offset resets**:
  long cases (PDF p.2 prints `Page 1`, so PDF − 1) · a `SHORT OSCE` section opening near PDF p.50
  (PDF p.75 prints `Page 24`) · a handwritten block from about PDF p.100 (prints `Page 50`, its
  own run, no header). Exact boundaries are **not pinned** — only 7 pages were sampled.
- **Kind of page:** mostly printed digital handout, bilingual English/Arabic history-taking
  checklists and disease summary tables with line-art diagrams (~85% text, ~15% diagram, no
  photographs). PDF p.100 onward is genuinely handwritten — a different hand from the rest.
- **Scan quality:** legible throughout; the printed pages are digital-native, CamScanned rather
  than photocopied.

**Overlap with Dr Yakout is not measured.** The topic list clearly covers the same ground, and it
adds three the Dr Yakout long cases do not print — **convulsions and meningitis, UTI, and an
infections table**. Whether the shared topics duplicate or complement would need a page-level
comparison that has not been done.

**This file is the expensive one.** It is the only source with no text layer, so every page of it
costs a render and a visual read. The other three cost nothing.
