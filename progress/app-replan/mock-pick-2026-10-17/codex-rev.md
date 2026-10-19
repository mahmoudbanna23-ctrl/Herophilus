AGENTS.md loaded — Herophilus

Changed:

app/js/quiz.js:1126-1179
- Added review subject chips, picked-subset filtering, selected due/all launch buttons, empty-selection note, and per-subject topic picker links.
- Kept stats and deck reset scoped to the full deck.

app/js/quiz.js:1226-1256
- Added review picker state and `rev` popup mode using deck questions.
- Generalised popup callbacks to retain the active mode for mock, practice, and review.

app/js/theory.js:28
- Clears review subject/topic selections when changing term.

app/css/views.css
- Unchanged; existing chip and adjustment-button styles were sufficient.

Ran `node --check` on both changed JavaScript files and `git diff --check`. No unresolved issues.