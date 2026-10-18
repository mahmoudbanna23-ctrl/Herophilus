AGENTS.md loaded — Herophilus

Changed:

app/js/quiz.js:1217, 1226–1251
Added transient pracChOff state. Extended the existing mock topic picker with prac mode: source-free, source-filtered qsInModule counts, separate practice open-state keys, and all topic/chapter controls targeting practice state. Mock mode retains its prior state and calls.

app/js/render.js:328–359
Practise all and Unanswered now use the chapter-filtered list. Empty practice halves hide their Practise-all button. Added the topic-picker line and muted “No topic picked” state; page counts, accuracy, and chapter rows still use full qs.

app/js/theory.js:28
Resets pracChOff on term activation.

app/css/views.css
No change needed; existing picker styles cover the new control.

Ran node --check on all three changed JavaScript files and git diff --check. I did not use a browser, server, network, or inspect app/data.