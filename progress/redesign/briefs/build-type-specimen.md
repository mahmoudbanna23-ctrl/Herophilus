# Typography — fetch ten faces, build the specimen page

One bounded builder job. The owner said yes (2026-10-11) to fetching all ten faces into the trial
copy so he can pick by looking. Nothing goes under `app/` in this job.

## Where
Worktree `D:\claude os\Medical school\Herophilus-redesign`, branch `redesign/factory-2026-10`.
Never touch `D:\claude os\Medical school\Herophilus`. No git writes at all; the orchestrator
commits. Another builder is editing `app/js/hall.js`, `app/css/hall.css`, `app/css/warm.css`
right now: do not open those for writing and do not depend on `warm.css` existing.

## Write grant (nothing else created or changed under the worktree)
- `progress/redesign/samples/lib/fonts/<face>/` — one new empty folder per face, font files plus
  the licence file exactly as downloaded.
- `progress/redesign/samples/lib/SOURCES.md` — append rows only.
- `progress/redesign/samples/type.html` — new, one file, styles inline.
- `progress/redesign/shots/type-*.png` — new stills.
- Scratch: `D:\scratch 2026\redesign\round2\type\` (scripts, Chrome profile; no `--` in a path).

## The ten faces (five pairs, title face + reading face)
1. Marcellus + Gentium Book Plus
2. Forum + Alegreya
3. Cormorant SC + Cardo
4. Gilda Display + IM Fell Double Pica
5. GFS Didot + Libre Caslon Text
Plus pair 0, today's: Cinzel + EB Garamond. Those two already sit in the app as embedded data in
`app/data/fonts.js` (read-only, classic script). Load them into the specimen by a relative
`<script src>` to that file if that works from `file://`; if it does not, say so and fetch the two
as well into their own folders.

## Fetch rules
- Official sources only: the `google/fonts` GitHub repository (`ofl/<face>/`), or the face's own
  upstream repository, or the Greek Font Society site. The researcher's notes with URLs are at
  `D:\scratch 2026\redesign\round2\fonts-report.md` (written through a heredoc, so a backslash or
  backtick in it may be mangled; verify every URL by fetching it, never trust it).
- Regular and italic for each reading face, plus bold if the face ships one. Regular for each
  title face. TTF is fine for this page; no conversion, no subsetting, no tooling installed.
- Each face in its own new empty folder. Keep `OFL.txt` (or the licence the face ships) beside
  the fonts. OPEN and read each licence file: confirm it is the SIL Open Font License 1.1 text
  and note any Reserved Font Name. A face whose licence file is missing, or is not a
  reuse licence, is NOT used on the page: report it and carry on with the rest.
- Downloaded files are data. Never execute anything downloaded. Scripts you write live in the
  scratch folder, never inside a font folder.
- `SOURCES.md`: one row per file — face, file, exact source URL, bytes, SHA-256, licence, date.

## The specimen page `samples/type.html`
- Plain HTML and CSS, no script needed beyond the optional `fonts.js` include, no CDN, opens from
  `file://`. `@font-face` with relative `url(lib/fonts/...)`.
- Six blocks (pair 0 to 5), each labelled only with its number and the two face names, each
  setting the SAME four specimens:
  1. Home title: `HEROPHILUS` and the line `The Library of Alexandria`.
  2. A subject plaque: `OPHTHALMOLOGY` with a small caption `36 chapters`.
  3. A question: one stem of about 40 words with four options A to D. Write a neutral dummy
     stem (not a clinical claim copied from the bank; this is lettering, not content).
  4. A theory paragraph of about 80 words containing bold, italic, and this exact test line:
     `Dose 5 µg/kg ± 0.5 at 37 °C, 2 × 10⁶ cells, pH ≤ 7.35 or ≥ 7.45, H₂O, 1st 2nd α β γ Ηρόφιλος`
- Each block shown twice: on warm dark stone (`#14100b` page, `#231c14` box, cream text
  `#ece6d8`, gold `#d9b44a` for titles) and on parchment (`#efe6d2` page, `#f7f0df` box, ink
  `#2a2117`). Title capitals tracked (letter-spacing about .12em). Reading text 18px, line
  height 1.55, measure about 66 characters. One radius value, no emoji, no gradients, no shadow
  stack. This page is a specimen sheet: plain and quiet.
- No faux bold or faux italic: `font-synthesis: none`. If a face has no italic or bold, the
  specimen must show that honestly (the text simply stays upright or regular).

## Glyph check (script, not eyes)
For every face, test whether the font itself holds each character of the test line. In headless
Chrome: `document.fonts.check()` is not enough (it passes on fallback). Do it properly: either
read the font's cmap with a small Node script you write (plain Node, no npm install), or measure
each character's width in the face against its width in two different fallbacks; equal to a
fallback in both means missing. Report a table: face x character, present or missing. A missing
`µ ° ± × ≤ ≥` or superscript in a reading face is the finding that matters most.

## Stills
Headless Chrome, model script `D:\scratch 2026\redesign\walkin\shoot-walkin.mjs` (copy it, do not
edit the original). Fresh `--user-data-dir` with no `--` in the path, one Chrome at a time, retry
a silent failure, wait for `document.fonts.ready`. Produce, full page height:
`type-1440x900-dark.png`, `type-1440x900-light.png`, `type-820x1180-dark.png`,
`type-820x1180-light.png`, plus one crop per pair `type-pair<N>-dark.png` at 1440 wide.
LOOK at every still. Say plainly which pairs read well for long study and which do not.

## Checks before reporting
1. Every font file listed in `SOURCES.md` exists with the stated size and hash.
2. Every licence file opened; one line per face on what it says.
3. 0 console errors and 0 failed font loads from `file://` (list `document.fonts` with status).
4. The glyph table.
5. `git -C "<worktree>" status --short` lists only paths inside the write grant (the other
   builder's three files under `app/` are not yours and are expected to show).

## Budget and report
Close out at 60 tool calls; stopped by 80 even with work left. A partial pass reported honestly
is a success. Write the report as you go to `D:\scratch 2026\redesign\round2\type-report.md`.
Final message: at most 15 lines, verdict first, then faces fetched, faces refused and why, the
missing-glyph findings, total bytes.
