P1a refute 2026-09-26 — PASS (no blocking defect; 5 minor).
Exit codes: validate 0 (152420 checks) · fixture-check 0 (6/6) · check-all 0 "CHECK-ALL PASS 4/4" · smoke.html headless Chrome "SMOKE PASS 11/11".
app/ diff: only questions.neuro.js, 23 lines npqb-nr-228..250, nr-demyelinating->nr-ms, rest of each line byte-identical. Other app/ untracked = smoke.* + pre-existing assets/scene, graphify-out, 3 npep jpgs (not Codex, per brief scope).
Counts: own vm load, holes indexed = counts.json exactly (Q+C 6956, 0 holes, theory 30/51/36/36).
check-all spawns existing boot-check.js + dist-check.js, no reimplementation. smoke.html: classic scripts, index.html order, no module/CDN/URL.
Mutations (scratch copy, --root): answer=options.length, -1, "1", 1.5 · qs dangling id · alsoIn unknown / as string · bank "Endpoint" · count +1 / -1 · cross-file dup · same-file dup · chapter in other module · unknown module · case keys=[] · case sparse hole · theory chapter unresolved · 1 option · imgAlt whitespace · id/stem/explanation missing · image file missing · new data file absent from counts.json — 23/23 CAUGHT, 0 missed.
Minor:
1 p1a-report.md:17 — claims 12 smoke cases; page runs 11 — correct text.
2 app/smoke.js:15 — quiz case builds its own buttons then counts them; tautological — render via app code or drop claim.
3 app/smoke.js:16-17 — "badge colour" cases test bank counts >0, not colour — assert computed badge colour or rename.
4 tools/validate/validate.js:21 — check() counts failed checks too, so "N checks passed; M failed" overstates passes — count passes only.
5 app/smoke.js:3 — EXPECTED_TOTAL=6956 pinned separately from counts.json; drift risk — note or derive.
Report still says CHECK-ALL FAIL 1/4 (pre-fix); stale, expected.
