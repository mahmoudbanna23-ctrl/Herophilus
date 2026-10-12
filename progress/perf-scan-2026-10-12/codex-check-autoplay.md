AGENTS.md loaded — Herophilus

PASS — static review found no breaking path where the gate hides without subsequent syncFilm().

Restored sessions reach the profile gate; absent sessions and file:// starts reach showGate() (app/js/gate.js:348,109,9; app/js/boot.js:405). Sign-out and profile switching reopen it (app/js/gate.js:138,769). Profile entry selects home before hideGate(), which immediately synchronizes, then renders again (app/js/theory.js:35; app/js/gate.js:740,743,581,752). Term switching renders; home/subject/chapter-list navigation synchronizes through render() (app/js/theory.js:135; app/js/render.js:14,75).

The original playback hole closes across both the 15-second restore wait and catalogue-failure return: the main video lacks autoplay, and neither path starts it (app/index.html:55; app/js/boot.js:383,392,394). Catalogue failure leaves the gate visible; it does not reach browsing (app/index.html:103; app/js/boot.js:383).

No playback-event/class dependency or pause-only visibility/pageshow handler found in inspected JS/CSS. Film control is centralized; existing visibility handlers concern timers and notes (app/js/render.js:31; app/js/quiz.js:718,749; app/js/clepsydra.js:651).

Still-view and reduced-motion rules remain intact (app/js/render.js:19,38,44; app/css/views.css:224,330). Reduced-motion playback changes still require synchronization; CSS hides immediately (app/js/render.js:38,75; app/css/views.css:336).

The gate film remains untouched, retains autoplay, synchronizes when rebuilt, and pauses when hidden (app/js/gate.js:554,574,579,581; app/js/render.js:48).

Not checked: actual browser playback, autoplay rejection, real authentication/restoration, or excluded data contents. No writes, server, browser, sign-in, or network used.