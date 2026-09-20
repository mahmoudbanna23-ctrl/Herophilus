# s16 Pediatric Ophthalmology — House collisions (for the end-of-stream `alsoIn` merge)

Measured 2026-09-20 with `sweep-oph-staged.js` (16 staged rows vs live endpoint bank and 1,598 House); full output in
`_s16-work/sweep.txt`. Keys compared after stripping the option labels the endpoint book prints on n11, n13, n16.

## Same question, drafted rows (the new endpoint id takes `alsoIn: house`)

| staged n | endpoint id | House id | stem / options | key | note |
|---|---|---|---|---|---|
| 11 | ophep-pediatric-ophthalmology-11 | opmcq-c16-7 | 1.000 / same four | same (Ophthalmia neonatorum) | endpoint prints labels "A. B. C. 0." |
| 12 | ophep-pediatric-ophthalmology-12 | opmcq-c16-10 | 1.000 / House adds "None of the above" | same (Congenital glaucoma) | printed variant; endpoint prints "Pediatriac", "RetinobU1stoma" |
| 14 | ophep-pediatric-ophthalmology-14 | opmcq-c16-3 | 1.000 / 1.000 | same | |

## Same question, folded rows (the LIVE survivor takes `alsoIn: house`, if it does not carry it already)

| staged n | folded into | House id | key |
|---|---|---|---|
| 9, 15 | ophep-optics-refraction-9 | opmcq-c15-8 | same |
| 10 | ophep-cornea-11 | opmcq-c8-6 | same |
| 13 | ophep-malignancies-eye-adnexa-8 | opmcq-c16-5 | same (Retinoblastoma) |
| 16 | ophep-optics-refraction-18 | opmcq-c2-13 | same (Anisometropia) |

## Reprint citations owed on the live survivors (`source` field)

- ophep-optics-refraction-9: add p.1134-1135 (boxed) and p.1146-1147.
- ophep-cornea-11: add p.1136-1137 (boxed).
- ophep-malignancies-eye-adnexa-8: add p.1142-1143.
- ophep-optics-refraction-18: add p.1148-1149.

## Not a match

- n1: best House hit 0.750, different key — different question.
