# B1 brief — design tokens (2026-09-20)

Goal: `app\css\tokens.css` becomes the single source of type, spacing, radius, shadow, motion and
z-index values, and the other five stylesheets use those tokens instead of raw numbers.
Colours are NOT touched. No selector, no rule order, no HTML, no JS is changed.

## Measured start (2026-09-20, `app\css\*.css`)
- `font-size`: 61 distinct values over 201 uses. `padding`: 93 distinct over 123 uses.
  `border-radius`: 14 distinct over 128 uses. 52 custom properties in `tokens.css` today.
- Durations in use: .13s x30, .12s x13, .18s x9, .14s x6, .5s x5, .15s x4, plus a long tail.
- z-index in use: 0, 1, 2, 3, 20, 40, 60, 150, 200, 210, 250, 300, 400.
- `var(--ink)` outside a `color:` declaration: 0. It must stay 0.

## Read first
- `style\greek.md` (117 lines) — finish authority.
- `progress\app-replan\design-refs.md` lines 58-66 — the settled rulings.
- NEVER open anything under `app\data\`. Do not read `app\js\*` — out of scope.

## Rules for the scales
- Existing colour custom properties in `tokens.css`: keep every name and value byte-for-byte.
- Add, in `tokens.css` only: a type scale of at most 8 steps, a spacing ladder on a 4px base
  (2px allowed as the smallest step) of at most 12 steps, radius `--r-sm:2px --r-md:4px --r-lg:8px`
  and nothing larger, shadow steps taken from the shadows already in the CSS (merge near-duplicates,
  invent none), motion tokens (3-4 durations, the easings already in use), z-index tokens for
  150/200/250/300/400 with those exact numbers. Small local z-index values (0-60, 210) stay raw.
- Pick each scale step from the values the CSS uses most, so most uses do not move at all.
- Replace raw values with `var(--token)` in base/layout/components/views css. Snap to the nearest
  step: a font-size may move at most 1px, a padding side at most 2px. A value that would move
  further stays raw and goes in the report — do not force it.
- `border-radius:50%` stays (round by meaning: avatar, medallion). Any pill radius (999px, 100px,
  50px on a non-round element) becomes `--r-lg`. No pills anywhere.
- `print.css`: do not touch. The theory reader is an A4 page; its dimensions stay raw.
- Units: keep the unit family a declaration already uses (rem stays rem, em stays em, clamp()
  expressions stay as they are and count as raw).
- The AI-tell refusal list in `design-refs.md` applies: no new gradients, glows, pills, or
  decorative additions. This block adds no visual idea; it only regularises numbers.

## Order of work (stop cleanly after any step if the clock runs short)
1. Tokens added to `tokens.css`. 2. border-radius. 3. z-index + motion. 4. font-size. 5. padding.
Run the boot check after each step. A partial pass reported honestly is a success.

## May change
`app\css\tokens.css`, `base.css`, `layout.css`, `components.css`, `views.css`. Nothing else.
Git: read-only `git -C <repo> diff` / `status` only — no add, commit, stash, checkout. No new files except under the session scratch directory.

## Must verify (paste the output)
- `node tools\boot-check\boot-check.js` = baseline: `QUESTIONS 4049`, `THEORY 81`, `MODULES 4`,
  `chapters 156`, 4 module cards, `console errors: 0`.
- Distinct counts after, same grep as the start numbers, `print.css` excluded:
  raw `font-size` values not using `var(` , raw `padding`, raw `border-radius`. Targets:
  font-size steps in use <= 8, padding combinations built only from ladder steps,
  radius <= 3 plus `50%`.
- `grep -ohE "[a-z-]+:[^;{}]*var\(--ink\)" app/css/*.css | grep -vE "^(color|--)" | wc -l` = 0.
- `grep -o 'max-aspect-ratio:5/4' app/css/*.css app/index.html | wc -l` = 3.
- `git diff --stat` shows only the five css files; `git diff -- app/css/print.css` is empty.
- `rg` is not installed: use `grep -E`, count with `wc -l` (`grep -c` misreports here).

## Report (max 25 lines)
The scales chosen (one line each), counts before/after, every value left raw and why, largest
single move made, check outputs, anything uncertain. Never claim a failure is pre-existing
without showing it on `git stash`-free evidence — the reviewer re-runs everything.
