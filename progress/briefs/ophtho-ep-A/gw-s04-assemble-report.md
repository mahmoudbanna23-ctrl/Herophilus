# Section 4 assembly report

Step1: array pre-merge state confirmed 24 empty expl, boxPrinted true n:1-6 only; md headings' keys/pages matched array. Pre-merge copy saved.

Merge: n:1-6 expl filled with box text (lead+quote+marker, matching s03's stored form); n:7-24 left EMPTY (validator derives BOXED from non-empty array `expl` — confirmed empirically against s02's array, and against s03's array, which currently fills expl on unboxed rows too and would misclassify them as boxed if validated; this matches the coordinator's mid-task correction).

Sizes: array pre-merge 24,651 B -> merged 27,007 B; draft 51,004 B. CR count 0 in all three.

Verification:
- node --check: array, draft — both OK.
- Array: length 24, holes 0, 6/6 expl non-empty (n:1-6), 18/18 empty (n:7-24).
- Only-`expl`-changed assertion (pre-merge vs merged, `expl` stripped, JSON.stringify equal): PASS.
- n:1-6 draft `explanation` === array `expl` exactly: 6/6.
- n:7-24 draft `explanation` === md body byte-for-byte: 16/18 exact (n:11, n:16 deliberately extended, see below); other 16 exact.
- Draft: 24 entries, holes 0, 24 unique ids, n:18 has 5 options, answers match staged keys.

Shared menus (coordinator correction): validator found 3 exact-match groups: (2,4) anchor 2, (5,16) anchor 5, (9,11) anchor 9.
- n:11, n:16 (both unboxed): appended one sentence before the marker paragraph — `Same option menu as \`ophep-lacrimal-system-9\`; the discriminating token here is pain versus painlessness.` (n:11) and `Same option menu as \`ophep-lacrimal-system-5\`; the discriminating token here is middle watery layer versus inner mucus layer.` (n:16) — both tokens already named in their own bodies. Draft's `explanation` differs from the md body for these two rows only, and only by this appended sentence; everything else byte-identical.
- n:4 (BOXED, non-anchor of the n:2/n:4 menu): resolved per coordinator's explicit ruling. Draft-only fix, array `expl` for n:4 untouched (still the printed box, verbatim). Layout applied in `build-draft.js`'s `appendBoxedMenuNote`: lead -> `> ` quote (unchanged) -> blank line -> one plain unquoted sentence naming the anchor id in backticks -> blank line -> boxed marker (unchanged, last line). Sentence added: `This question shares its option menu with \`ophep-lacrimal-system-2\`; read the two together.`

## Final validator run (post n:4 fix)

`node tools/bank-harness/val-oph-ep.js --part 1 4` — **exit 0**.

Last 20 lines of output:
```
OPHTHALMOLOGY ONLY: part 1, section 4 -> questions.ophtho.ep.js / Q_OPHTHO_EP (validator is read-only)
section 4 draft  length 24  holes 0  var S04_DRAFT_LACRIMAL_SYSTEM
derived from staging: boxed 6/24 | straddles none | figures none | shared menus 3 | staged but not in this file: none
  shared menu n:2, n:4 -> table anchored at ophep-lacrimal-system-2
  shared menu n:5, n:16 -> table anchored at ophep-lacrimal-system-5
  shared menu n:9, n:11 -> table anchored at ophep-lacrimal-system-9
warnings:
  near-identical option menus n:6 and n:12 -- one option apart. Read both: if it is the same menu, anchor the table at ophep-lacrimal-system-6 and have ophep-lacrimal-system-12 point at it. If the differing option changes what is asked, it is not a pairing.
  ophep-lacrimal-system-1: quoted box differs from staging expl -- read the page and settle which is verbatim
  ophep-lacrimal-system-2: quoted box differs from staging expl -- read the page and settle which is verbatim
  ophep-lacrimal-system-3: quoted box differs from staging expl -- read the page and settle which is verbatim
  ophep-lacrimal-system-4: quoted box differs from staging expl -- read the page and settle which is verbatim
  ophep-lacrimal-system-5: quoted box differs from staging expl -- read the page and settle which is verbatim
  ophep-lacrimal-system-6: quoted box differs from staging expl -- read the page and settle which is verbatim
ALL CHECKS PASSED
words: 1:52 2:50 3:41 4:71 5:57 6:110 7:307 8:228 9:256 10:200 11:275 12:293 13:328 14:305 15:239 16:196 17:274 18:276 19:313 20:226 21:246 22:220 23:189 24:313
total words: 5065
chapters: {"op-lac":24}
```

Every remaining warning (none affect exit code, all pre-existing / unrelated to the n:4 fix):
1. `near-identical option menus n:6 and n:12 -- one option apart` — not resolved, not in scope of this task's instructions (only exact-match shared-menu groups were required to point at an anchor; this is a near-identical pairing flagged for human judgment on whether it's the same question).
2. `ophep-lacrimal-system-1..6: quoted box differs from staging expl` (6 warnings, one per boxed row) — expected: array `expl` stores the full lead+quote+marker string; the validator's own blockquote-line extraction (for its warning-only comparison) compares against the bare staging `expl`, which doesn't include the lead/marker wrapper. Same shape confirmed present and accepted in section 2's passing array.

Draft rows whose `explanation` differs from the md/box source due to an added anchor sentence (both draft-only, source files untouched):
- `ophep-lacrimal-system-4` (BOXED): added `This question shares its option menu with \`ophep-lacrimal-system-2\`; read the two together.` between the quote and the boxed marker.
- `ophep-lacrimal-system-11` (unboxed): added `Same option menu as \`ophep-lacrimal-system-9\`; the discriminating token here is pain versus painlessness.` before the unboxed marker.
- `ophep-lacrimal-system-16` (unboxed): added `Same option menu as \`ophep-lacrimal-system-5\`; the discriminating token here is middle watery layer versus inner mucus layer.` before the unboxed marker.

Final sizes: array 27,007 B (unchanged since merge), draft 51,099 B, 0 CR in both.

Task complete. Stopping per coordinator's instruction.

Files touched (all in write grant):
- `content/ophtho/qb-pages/oph-ep-p1-s04-lacrimal-system.array.js`
- `content/ophtho/qb-pages/oph-ep-p1-s04-lacrimal-system.pre-merge.js` (new)
- `content/ophtho/qb-pages/oph-ep-p1-s04-lacrimal-system.draft.js` (new)
- Scripts: `<scratchpad>\cl-s04\merge.js`, `verify-array.js`, `build-draft.js`, `verify-draft.js`
