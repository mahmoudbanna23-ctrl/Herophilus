# B2c brief — split `app\index.html` (2026-09-20)

Goal: move the inline CSS and JS of `app\index.html` (8301 lines) into files, behaviour unchanged.
This is a MOVE, not a rewrite: no renames, no reformatting, no logic edits, no "while I am here".

## Read first
- `progress\app-replan\code-map.md` — every function and style block already grouped, with line numbers.
- `CLAUDE.md` load-order rule. Do not read `app\index.html` whole; work by the map's line ranges.
- NEVER open anything under `app\data\`.

## Target
- `app\css\{tokens,base,layout,components,views,print}.css`
- `app\js\{boot,gate,storage,icons,theme,render,quiz,theory,sessions,clepsydra,utils}.js`
- `tokens.css` holds only the existing `:root` / `[data-theme]` custom properties — invent none.
- Classic `<script src>` tags, no `type="module"`, no bundler, no CDN. Must run from `file://`.
- Load order kept exactly: fonts in `<head>` before the stylesheets; the theme script stays INLINE
  before the stylesheets; subject data files, then aggregators, then the app scripts in the order
  their code appears today. Top-level `const`/`let` shared across files works in classic scripts
  only if declared before use in load order — keep source order, do not reorder blocks.
- Anything that cannot move safely (inline handlers' targets, the theme script, the Firebase config
  block if order-sensitive) stays inline; list it in the report.
- If a service worker or a cache list names files, add the new files to it. If `tools\build-launch.js`
  or `tools\dist-check.js` assume a single `index.html`, report it, do not edit them.

## May change
`app\index.html`, new files under `app\css\` and `app\js\`. Nothing else. No git commands.

## Must verify (paste the output)
- `node tools\boot-check\boot-check.js` — baseline to match exactly: `QUESTIONS 4049`, `THEORY 81`,
  `MODULES 4`, `chapters 156`, module cards 4, chapter rows 81 (ent 30, pediatrics 51),
  `console errors: 0`.
- `grep -o 'bankOf(' app/index.html app/js/*.js | wc -l` = 2 (same as before).
- `grep -o 'max-aspect-ratio:5/4' app/index.html app/css/*.css | wc -l` = 3.
- `@media print` selector text unchanged (diff the block before/after).
- `node --check` on every new `.js` file.
- Line totals: `index.html` + all new files vs 8301, difference explained by added tags only.

## Report (max 25 lines)
Files and line counts, what stayed inline and why, check outputs, anything uncertain.
A partial split that boots clean and is reported honestly beats a full one that does not.
