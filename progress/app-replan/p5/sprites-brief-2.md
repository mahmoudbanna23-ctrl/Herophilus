# P5 step 2b, dispatch 2 — finish the sprite job (2026-09-26)

Same brief as `progress/app-replan/p5/sprites-brief.md` (read it in full; its write grant, rules
and "Do not" list all apply), with ONE change and a narrower scope.

CHANGE: an edit whose size differs from 1916x821 by at most 2 px in either dimension is ACCEPTED,
not failed. Do not resample. Decode it as-is and let the per-box +-8 px shift search register it
against the master (shift = offset of the edit relative to the master at that box). Report each
edit's real size in the report. Only a difference over 2 px fails that edit.

SCOPE:
- REUSE `plates/edits/edit-1.png` .. `edit-4.png` as they are. Do not regenerate them unless the
  cutter measures a seam > 10 on a sprite; then retry that one edit once, per the original brief.
- Generate `plates/edits/ribbon-raw.png` (original brief, edit 5).
- Write `plates/cut-sprites.js`, run it, write every sprite to `app/assets/scene/`.
- Overwrite `plates/sprites-report.md` as plain UTF-8 (the current file is not valid UTF-8).
