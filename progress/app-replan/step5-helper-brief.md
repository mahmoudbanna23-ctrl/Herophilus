# Step 5 helper - app-lane brief, 2026-10-31

Branch redesign/clean-2026-10, this checkout only. The job is parts A, B, C and D of
`progress\redesign-clean\step5-brief.txt`; read it first. Where the two differ, this file wins.

## May change
- app\js\clepsydra.js
- app\js\sessions.js
- app\js\quiz.js
- app\js\theory.js
- app\js\render.js
- app\js\gate.js
- app\index.html
- app\css\views.css
- app\css\lean.css
- app\css\skin.css
- app\css\focus.css
- progress\redesign-clean\step5-notes.md

Not print.css, not storage.js, not app\data\.

## Differences from step5-brief.txt
- A4: the slide runs on GSAP, already in app\vendor\gsap.min.js with its licence recorded. No download
  and no hand-written keyframes. Use the GSAP global, guarded, so a missing library leaves her tucked
  and the app working. Loading order: check where gsap.min.js sits in index.html against clepsydra.js.
- Print: print.css is frozen and may already hide her, check. Anything further goes in views.css.
- Skip VERIFY and OUTPUT. This sandbox cannot drive headless Chrome or write outside the folder; an
  independent checker runs both afterwards. Do run `node --check` on every js file touched and
  `node tools\boot-check\boot-check.js` if it runs here; report what it says, or that it could not run.

Append to step5-notes.md as you go. End with under 100 words: what is done, what is not, every file touched.
