AGENTS.md loaded — Herophilus

Changed:

app/js/quiz.js:1225-1275
- Scoped mock source filters by subject + bank.
- Added subject adjustment popup with source chips, topic groups, chapter expansion, summaries, and updated empty-state guidance.
- Removed inline chapter/source sections; length is now section 2.

app/css/views.css:39-47, 78
- Removed .mockch styling.
- Added compact subject-summary, popup, topic-row, chapter-indent, and mixed-state styles.

app/js/theory.js:28
- Left existing reset of all four mock state objects intact.

Checks passed:
- node --check app/js/quiz.js
- node --check app/js/theory.js
- git diff --check

No browser run, per brief.