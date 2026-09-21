# B3a job 3 brief — a real type scale (2026-09-21)

Goal: every `font-size` in `app\css\{base,layout,components,views}.css` comes from ONE ladder of
nine steps in `tokens.css`. B1 only renamed the old small sizes (`--fs-1..8`, 10.5-14px in half-px
steps) and left 22 display sizes raw. This job replaces both with a ladder that has a visible
ratio. It changes the look slightly, on purpose; the owner sees before/after shots before commit.

## Measured start (2026-09-21)
- Token uses: fs-8 x33, fs-1 x22, fs-7 x17, fs-5 x16, fs-6 x15, fs-3 x15, fs-4 x12, fs-2 x12.
- Raw: 17px x6, 19px x5, 24px x3, 22px x3, 25px x2, 18px x2, 17.5px x2, 16px x2, 16.5px x2 (one is
  the `body` size in `base.css:8`), and one each of 52, 44, 40, 38, 33, 31, 29, 21, 20, 15.5, 9,
  8.5, 8px, plus `clamp(28px,6vw,36px)` and `inherit` x2.

## The ladder (put in `tokens.css`, replacing `--fs-1..8`)
`--fs-xs:11px  --fs-sm:12px  --fs-md:13px  --fs-ui:14px  --fs-body:16.5px  --fs-lg:19px
--fs-xl:24px  --fs-2xl:32px  --fs-3xl:44px`

Mapping: 10.5, 11 -> xs · 11.5, 12 -> sm · 12.5, 13 -> md · 13.5, 14 -> ui · 15.5, 16, 16.5, 17,
17.5 -> body · 18, 19, 20, 21 -> lg · 22, 24, 25 -> xl · 29, 31, 33 -> 2xl · 38, 40, 44 -> 3xl.
- 52px: stays raw if it is the single largest display line; say where it is in the report.
- 8, 8.5, 9px: stay raw (badge/microlabel) — list each site in the report, do not enlarge.
- `clamp(...)` and `inherit` stay as they are. `print.css` is not touched.
- Any inline `font-size` or `var(--fs-N)` in `app\js\*.js` or `app\index.html`: grep for them;
  repoint `var(--fs-N)` to the new name, leave raw inline px alone and list them.
- After the job no `--fs-1..8` name may remain anywhere under `app\`.

## May change
`app\css\tokens.css`, `base.css`, `layout.css`, `components.css`, `views.css`; `app\js\*.js` and
`app\index.html` only to repoint an old `--fs-N` name. Nothing else. Never open `app\data\`.
No selector, rule order, colour, spacing or HTML structure changes. Use bounded, per-declaration
replacements — an unbounded regex corrupted two files in B1.

## Must verify (paste the output)
- `grep -rohE "var\(--fs-[0-9]\)" app/css app/js app/index.html | wc -l` = 0.
- Every `var(--fs-*)` used is defined in `tokens.css` (script it; missing list must be empty).
- Distinct raw `font-size` values left, with counts (expected: 52px?, 9, 8.5, 8, clamp, inherit).
- `node tools\boot-check\boot-check.js` baseline: `QUESTIONS 4049  THEORY 81  MODULES 4
  chapters 156`, 4 module cards, `console errors: 0`.
- `node tools\boot-check\mobile-check.js` PASS; `strike-check.js` all PASS; `emoji-check.js` clean.
- `git diff -- app/css/print.css` empty; `git diff --stat` lists only allowed files.
- `node tools\boot-check\b1-shots.js type` writes three PNGs.

## Report (max 20 lines)
Counts before/after, every site left raw with `file:line`, the largest single move, any place
where text now clips, wraps or overflows its box, check outputs, anything uncertain.
A partial pass reported honestly is a success.
