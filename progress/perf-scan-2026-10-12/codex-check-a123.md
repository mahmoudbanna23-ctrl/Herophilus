AGENTS.md loaded — Herophilus

A1 PASS — No animation escape found. The reading selector (0,2,2) beats the base (0,1,1). Hover (0,3,1) overrides duration only; animation-name remains none. Active also specifies none; reduced-motion agrees. No light-theme override or non-.btn orbit user found (app/css/views.css:236; app/css/components.css:116, :117, :119, :133, :135).

All five STILL_VIEWS match; render writes their names to data-view. Navigation exists for each, with theory conditional on THEORY_LOCKED (app/js/render.js:19, :69, :146, :165, :171; app/js/quiz.js:142, :593). At rest, --angle is 0deg: the masked 1px gradient has its colour peak at 180°, along the bottom (app/css/components.css:2, :116).

A2 FAIL — Uncovered first-boot path, pre-existing rather than introduced: main video has autoplay and #gate initially lacks hide. Boot awaits restoration without first calling syncFilm(), so playback can continue underneath the gate/splash during the 15-second wait. Catalogue failure returns without synchronization altogether (app/index.html:53, :101; app/js/boot.js:383, :392, :394, :405).

Subsequent paths look sound: showGate unhides/rebuilds then synchronizes; hideGate hides then synchronizes. No gate-element removal/reinsertion path found (app/js/gate.js:568, :574, :579, :581). Sign-out shows/synchronizes before awaiting Firebase. Entry sets home through activateTerm before hiding, then renders again; no stranded browse pause found (app/js/gate.js:138, :139, :740, :743, :752; app/js/theory.js:35).

A3 PASS — Both arrays retain QUESTIONS object references; includes and Set.has therefore match identically. Filtering preserves order and duplicates. mdue readers are only the count and launch IDs; row due marks remain separate. Twelve synthetic old/new HTML comparisons matched, including 1,254-question cases (app/js/utils.js:81, :84; app/js/quiz.js:1151, :1155, :1156, :1158, :1163).

No persistence mutation found in these changes (app/js/render.js:31; app/js/quiz.js:1151). Print still hides gate, ambient and control bars; surviving rings become static (app/css/print.css:10, :51; app/css/views.css:236). File startup uses local profiles (app/js/gate.js:9, :573).

Not checked: browser playback/appearance, printed output, actual saved/cloud sessions, or configured theory availability. No browser/network/data-file access or writes.