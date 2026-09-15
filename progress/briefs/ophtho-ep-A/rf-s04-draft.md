# Refute: section 4 (Lacrimal System) draft before splice

Working root: `D:\claude os\Medical school\Herophilus`. You did not write this work. Try to break it. Report only: never edit a project file, no git. Stop at 45 tool calls.

## Under review

- `content/ophtho/qb-pages/oph-ep-p1-s04-lacrimal-system.draft.js` (24 entries). Builder report: `<scratchpad>/gw-s04-assemble-report.md`.
- Staging (final, image-verified): `content/ophtho/qb-pages/oph-ep-p1-s04-lacrimal-system.array.js`. Boxes: `oph-ep-p1-s04-lacrimal-system.boxes.md`. Unboxed prose (reviewed, final): `oph-ep-p1-s04-lacrimal-system.expl-unboxed.md`.
- Model already live and clean: `oph-ep-p1-s02-optics-refraction.array.js` + `.draft.js`.
- Validator: `node tools/bank-harness/val-oph-ep.js --part 1 4` exits 0 but warns "quoted box differs from staging expl" on n:1–6. Section 2 run the same way gives 0 such warnings.

`<scratchpad>` = `C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\c690134b-326b-4433-a5eb-cb30b9aea267\scratchpad`. Load JS with Node `vm`, never grep, for anything you count.

## Checks

1. **Box warnings — find the real cause.** The builder claims the array `expl` shape is the same as section 2's. Section 2 has 0 such warnings, which disproves that as stated. For each of the 6 rows, diff the validator's extracted quote (see `val-oph-ep.js` ~lines 240–250 and its `norm`) against the array `expl` after `norm`. Show the first differing ~60 chars per row (no more medical text than that). Say which side is wrong: the draft's quote, or the array's `expl` shape versus section 2's array shape, or both. Compare against `boxes.md`, which was read off the page images.
2. **Duplicates.** Pairs: n:2/n:4 (near-duplicates with different boxes), n:9/n:11, n:5/n:16, n:19/n:24, and n:6/n:12 (the validator flags a near-identical menu, one option apart). For each pair, compare after `norm`: stem, each option, option order, key, printed box text, pages. Classify each pair against these shapes: exact reprint, reordered options, reworded stem, dropped filler option, boxed second printing, or a shared menu with a real discriminating token. Name the token, or state that none exists. Verdict per pair: FOLD candidate or PAIR. Also check that each pointer sentence's claim is true to its row's own stem.
3. **Draft integrity.** 24 entries, 0 holes, ids unique, `answer` equals the array `key`, option text and count equal the array (n:18 has 5), `source` page equals the marked page, `chapter` valid. Unboxed explanations equal the md body byte for byte, except the added pointer sentence (quote each added sentence). Every boxed row: lead, then `> ` quote, then marker last. `\r` count 0.

## Report (≤35 lines) to `<scratchpad>/rf-s04-draft-report.md`

Check 1 cause, with the fix and which file it belongs in. Check 2 table: pair / shape / token / verdict. Check 3 failures only, or PASS.
