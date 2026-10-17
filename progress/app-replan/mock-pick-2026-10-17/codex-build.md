AGENTS.md loaded — Herophilus

Changed:
app/js/quiz.js:1217–1303 — added transient chapter/source/detail state, shared mockPool(), chapter accordions, bank chips, contextual empty states, and made both display/run pools use mockPool().

app/js/theory.js:28 — resets all mock picker state on term activation.

app/css/views.css:39–40 — added minimal mock chapter details/summary styling.

Validation passed:
node --check app/js/quiz.js
node --check app/js/theory.js
git diff --check

No browser exercise was run, per the brief’s restriction.