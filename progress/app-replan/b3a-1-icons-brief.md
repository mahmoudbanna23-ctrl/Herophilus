# B3a job 1 brief — icons and emoji (2026-09-21)

Goal: the app shows no emoji. Every pictograph in markup or a user-visible string becomes an
`ico('<name>')` line icon. One concern only: no copy rewording, no layout change, no CSS redesign.

## Known
- `ico(name,size)` is in `app\js\icons.js:1`. The `ICONS` map is in `app\js\storage.js:359`.
  Read how existing entries are drawn (viewBox, stroke width, caps) and match them exactly.
- The profile portraits in `app\js\gate.js` (~line 422) were emoji once and are already gone; a
  saved profile may still HOLD an emoji and the code near line 457 handles that. Do not break it.
- `rg` is not installed: `grep -E`, count with `wc -l`. GNU grep here cannot match astral code
  points — use node with `/\p{Extended_Pictographic}/gu` instead.
- Never put a literal backslash or backtick inside a bash heredoc; write files with your file tool.

## Work
1. Write `tools\boot-check\emoji-check.js`: scans `app\index.html`, `app\js\*.js`, `app\css\*.css`
   (never `app\data\`), prints `file:line  char  U+code` for every `\p{Extended_Pictographic}`
   match, skipping plain digits, `#`, `*`, `©`, `®`, `™`. Exits 1 if any remain, else 0.
   An allow-list at the top of the file holds `file:line` exceptions with a reason each.
2. Run it, paste the starting list into the report.
3. Add to `ICONS`: printer, cloud, lock, warning, check, sleep, speaker — plus any other icon the
   list in step 2 needs. Same drawing style as the existing entries. No icon font, no external file.
4. Replace each emoji with `ico('<name>')` in the way that site already builds markup. Toasts go
   through `ico()` too. A typographic symbol that is not a pictograph (arrows, `×`, `✓` used as
   text, `·`, `—`) is not an emoji — leave it unless the check flags it, then decide per case and
   say which way in the report.
5. A legitimate exception (the legacy saved-profile handling, a comment that documents history)
   goes in the allow-list with its reason. Keep that list as short as the truth allows.

## May change
`app\js\*.js`, `app\index.html`, `app\css\components.css` (only if an icon needs a size/alignment
rule), new `tools\boot-check\emoji-check.js`. Nothing else. Never open `app\data\`.

## Must verify (paste the output)
- `node tools\boot-check\emoji-check.js` exits 0; allow-list printed.
- `node tools\boot-check\boot-check.js`: `QUESTIONS 4049  THEORY 81  MODULES 4  chapters 156`,
  4 module cards, `console errors: 0`.
- `node --check` on every changed `.js`.
- Every `ico('x')` name used anywhere in `app\js` exists as a key in `ICONS` (script it, paste
  the missing list — must be empty).
- `node tools\boot-check\b1-shots.js b3a1` runs and writes three PNGs.

## Report (max 20 lines)
Start list, icons added, each replacement site `file:line`, allow-list with reasons, check
outputs, anything uncertain. A partial pass reported honestly is a success.
