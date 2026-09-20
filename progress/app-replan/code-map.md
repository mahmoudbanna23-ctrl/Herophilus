# `app/index.html` code map

Note: inspected `app/index.html` only; line numbers are one-based.

| Measure | Exact result | Reproducible command |
|---|---:|---|
| Inline named `function` declarations | 293 | `grep -E -c '^[[:space:]]*(async[[:space:]]+)?function[[:space:]]+[A-Za-z_$][A-Za-z0-9_$]*[[:space:]]*[(]' app/index.html` |
| Inline arrow-function bindings (top-level `const`/`let`/`var` = arrow, one-line-anchored) | 66 | `grep -E '^[[:space:]]*(const\|let\|var)[[:space:]]+[A-Za-z_$][A-Za-z0-9_$]*[[:space:]]*=[[:space:]]*(async[[:space:]]+)?(\([^()]*\)\|[A-Za-z_$][A-Za-z0-9_$]*)[[:space:]]*=>' app/index.html \| wc -l` — the earlier `=.*=>` pattern (159) also matched values that merely *contain* an arrow further down the line, e.g. `banksGone` (3028), `cur` (3195), `years` (3550), `nq` (3849) — 93 of those 159 were not arrow-function bindings at all; use `| wc -l`, not `grep -c`, since GNU grep 3.0 here misreports the count for this pattern. No `= function(...)` bindings exist (`grep -E -c '...=[[:space:]]*(async[[:space:]]+)?function\b' app/index.html` → 0). |
| CSS named divider sections | 34 | `grep -E -c '^/\* (-{4,}) (Layout|Type|Cards|Chapter rows|Question|free-text case questions|Schedule|Highlighter|Jump navigator|Schedule editor|Cloud sync|Theory \(document view\)|Print / Save as PDF|Misc|ground|the film|the gate: still while reading|glass on the fixed furniture only|surfaces get an inner highlight so edges read on dark|entrance motion|accessibility|glyphs|display type|module artwork|the Herophilus panel|she is alive|projection artefacts|what she says|the readout and controls|collapsed|small screens: she gets out of the way|opt-outs|the study session screen|the backup status light) -{4,} \*/$' app/index.html` |

### Arrow-function bindings, enumerated (66, name (line), matches the count above)

`$ (3080); chapterName (3081); moduleOf (3082); bankOf (3146); bankName (3147); banksOf (3165); bankPills (3167); isLocked (3177); openModules (3178); bankOn (3179); qsIn (3181); qsInModule (3182); allQsInModule (3184); banksPresent (3189); isAnswered (3220); isCorrect (3221); isoLocal (3231); todayISO (3232); tagHex (3233); onSys (3379); flushT (3398); flushP (3402); chip (3551); cell (3681); fp (3731); fl (3732); fq (3733); ft (3739); esq (3874); settle (3970); keepIf (4056); note (4084); done (4169); next (4173); syncClock (4207); inAppBrowser (4770); map (4847); obj (5442); num (5443); current (5482); correct (6078); done (6220); legacy (6226); seen (6303); renderList (7130); clepReduced (7348); mv (7489); up (7499); clPick (7679); own (8116); obj (8117); num (8118); int (8119); str (8120); bool (8121); strings (8122); date (8123); optional (8124); map (8125); bad (8126); rating (8137); answer (8138); item (8162); schedule (8164); session (8166); log (8173)`

Note: some names recur under different enclosing functions (`obj`, `num`, `map`, `done` each appear twice at different lines) — these are separate local bindings, not duplicates. Named-function count above (293) and this arrow count (66) are separate, non-overlapping measures; they are not meant to sum to a single "total function" figure.

## JavaScript named functions

| Concern | Function (line) |
|---|---|
| State / storage | `activeSchedule` (2939); `saveSchedule` (2943); `loadState` (2953); `dropAI` (2982); `migrateSched` (2983); `warnSaveFailure` (2995); `save` (3042); `$` (3080); `chapterName` (3081); `moduleOf` (3082); `qImgSrc` (3105); `qFigure` (3111); `openZoom` (3137); `bankOf` (3146); `bankName` (3147); `banksOf` (3165); `bankPills` (3167); `isLocked` (3177); `openModules` (3178); `bankOn` (3179); `qsIn` (3181); `qsInModule` (3182); `allQsInModule` (3184); `banksPresent` (3189); `toggleBank` (3190); `clearBanks` (3204); `sanitiseBanks` (3209); `isAnswered` (3220); `isCorrect` (3221); `isoLocal` (3231); `todayISO` (3232); `tagHex` (3233); `accuracy` (3235); `accColor` (3240) |
| Utilities | `ico` (3332); `onSys` (3379); `toast` (3388); `esc` (3392); `md` (3393); `flushT` (3398); `flushP` (3402); `ring` (3412); `confetti` (3422); `scheduleSRS` (3439); `inDeck` (3453); `deckAll` (3459); `dueNow` (3460); `streakCount` (3469); `markDayActive` (3482) |
| Theme | `currentTheme` (3351); `setTheme` (3354); `toggleTheme` (3364); `paintThemeBtn` (3366) |
| Theory | `theoryFor` (3488); `theoryChapters` (3489); `theoryCount` (3495); `termName` (3499); `activateTerm` (3503); `termFields` (3534); `termPublished` (3544); `termChips` (3548); `chip` (3551); `termPick` (3578); `gateTermStep` (3583); `showTermPicker` (3595); `chooseTerm` (3608); `vEmptyTerm` (3625); `qTheory` (3635); `isMdRule` (3655); `mdTable` (3678); `cell` (3681); `mdCells` (3687); `mdLead` (3704); `mdBlock` (3722); `fp` (3731); `fl` (3732); `fq` (3733); `ft` (3739); `flowHTML` (3784); `tableHTML` (3803); `mdInline` (3817); `toggleTh` (3820); `vTheory` (3822); `esq` (3874); `bkOn` (3955); `bkInit` (3956); `settle` (3970); `bkMeasure` (3980); `keepIf` (4056); `note` (4084); `bkPaint` (4109); `bkTurn` (4128); `bkToSec` (4134); `openTheoryFor` (4139) |
| Sync | `cloudConfig` (4154); `cloudEnabled` (4162); `loadSDK` (4164); `done` (4169); `next` (4173); `initCloud` (4186); `isStandalone` (4202); `syncClock` (4207); `setSync` (4208); `drawRailSync` (4216); `signInGoogle` (4230); `afterSignIn` (4255); `signOutCloud` (4288); `cloudWait` (4296); `resetCloud` (4302); `stopRetry` (4305); `retrySync` (4309); `currentCloud` (4316); `rosterRef` (4320); `docRef` (4324); `rosterProfile` (4329); `rosterList` (4333); `syncRoster` (4339); `mergeStates` (4355); `pullCloud` (4408); `schedulePush` (4415); `pushCloud` (4421); `restoreSession` (4481); `showSplash` (4502); `hideSplash` (4508); `syncSetup` (4511); `saveCfg` (4552); `clearCfg` (4567) |
| Gate / auth | `avSrc` (4596); `avKey` (4621); `stateKey` (4631); `loadProfiles` (4632); `saveProfiles` (4635); `bootstrapProfiles` (4636); `avFrame` (4655); `avHTML` (4677); `gateChrome` (4700); `showGate` (4713); `hideGate` (4729); `gateSignInStep` (4735); `inAppBrowser` (4770); `gateProfileStep` (4773); `d` (4779); `pickProfile` (4820); `migrateColours` (4846); `map` (4847); `enterProfile` (4861); `finishProfileEntry` (4885); `leaveProfile` (4910); `switchProfile` (4919); `askPin` (4934); `pinHop` (4948); `pinBack` (4952); `readPin` (4956); `tryPin` (4957); `editProfile` (4968); `drawProfileEditor` (4973); `pfUpload` (5012); `saveProfile` (5035); `deleteProfile` (5049); `doDeleteProfile` (5059); `manageProfiles` (5069) |
| Boot / render per view | `go` (5091); `setFilm` (5121); `syncFilm` (5127); `render` (5139); `revealOnScroll` (5181); `renderNav` (5198); `vHome` (5252); `vModule` (5369); `boot` (8289) |
| Quiz | `hasStoredMock` (5433); `hasSavedMock` (5434); `validMockResume` (5441); `obj` (5442); `num` (5443); `writeMockResume` (5461); `savedMockProblem` (5467); `offerMockResume` (5477); `current` (5482); `startChapter` (5518); `saveResume` (5534); `moveQ` (5549); `startQuiz` (5561); `normTxt` (5586); `lev` (5590); `keyHit` (5603); `gradeCase` (5613); `revealCase` (5619); `peekCase` (5641); `vCase` (5645); `vQuiz` (5755); `pick` (5876); `reveal` (5908); `setConf` (5939); `navQ` (5954); `finishSet` (5970); `examLeft` (6023); `examClockText` (6024); `examClockClass` (6032); `paintExamClock` (6035); `examStartTick` (6042); `examStopTick` (6051); `examConfirmFinish` (6052); `examFinish` (6061); `correct` (6078); `examReview` (6101); `flushNote` (6137); `toggleNote` (6147); `saveNote` (6152); `openReport` (6177); `pickReportKind` (6193); `reportText` (6201); `sendReport` (6207); `copyReport` (6217); `done` (6220); `legacy` (6226); `toggleFlag` (6240); `toggleExp` (6241); `openJump` (6247); `jumpTo` (6288); `jumpGo` (6293); `jumpNextUnanswered` (6299); `seen` (6303); `jumpFirstWrong` (6310); `setPen` (6324); `offsetOf` (6326); `stripMarks` (6336); `paint` (6344); `applyHighlights` (6362); `carve` (6366); `onStemSelect` (6375); `clearHl` (6403); `markbar` (6409) |
| Review | `weakChapters` (6428); `vWeak` (6470); `vReview` (6520); `daysUntil` (6566); `vFlagged` (6568) |
| Mock | `mockable` (6599); `vMock` (6600); `examMins` (6635); `runMock` (6636) |
| Sessions / schedule | `sessRing` (6650); `paintNavClock` (6665); `paintSessionLive` (6672); `sessSetDraft` (6688); `vSession` (6690); `vSchedule` (6791); `fmtShort` (6903); `trackRow` (6907); `setMark` (6915); `buildSchedule` (6927); `editItem` (6962); `cycleColour` (6968); `addItem` (6976); `delItem` (6983); `addDay` (7000); `delDay` (7010); `nextFreeDate` (7018); `resetSchedule` (7026); `doResetSchedule` (7034); `vMoved` (7040); `doSearch` (7102); `renderList` (7130); `jumpTheory` (7183); `jump` (7189); `sessionTerm` (7780); `sess` (7781); `phaseMs` (7784); `phaseElapsed` (7788); `phaseLeft` (7793); `sessStats` (7798); `sessFocusMs` (7806); `startSession` (7810); `sessScopeIds` (7832); `sessScopeName` (7843); `sessPause` (7849); `sessSkip` (7855); `advancePhase` (7856); `endSession` (7871); `sessStartTick` (7893); `sessStopTick` (7901) |
| Clepsydra | `poseSrc` (7257); `clepPreload` (7274); `clepFigure` (7277); `clepPose` (7297); `clepViewPose` (7321); `clepSettle` (7324); `clepMiniDial` (7328); `clepLoadCfg` (7335); `clepSaveCfg` (7344); `clepReduced` (7348); `clepMount` (7351); `clepShow` (7409); `clepHide` (7420); `clepOnLeft` (7437); `clepPlace` (7440); `clepClearRail` (7474); `clepDrag` (7482); `mv` (7489); `up` (7499); `clepMini` (7513); `clepMute` (7519); `clepPaintTools` (7524); `clepSegs` (7540); `clepPartial` (7545); `clepSay` (7554); `clepDismiss` (7584); `clepGlitchBurst` (7595); `clepGlitchLoop` (7602); `clepChapterCount` (7611); `clepFacts` (7664); `clPick` (7679); `clepViewKey` (7681); `clepTip` (7682); `clepAsk` (7688); `clepOnView` (7694); `clepIdleLoop` (7712); `clepShiftLoop` (7728); `clMMSS` (7742); `clepPaint` (7746) |
| Storage / utilities | `showModal` (7917); `closeModal` (7918); `showShortcuts` (7919); `bakKey` (7960); `bakRead` (7961); `bakWrite` (7968); `bakPrune` (7985); `bakSnapshot` (8000); `bakSchedule` (8013); `bakNewest` (8018); `bakWhen` (8037); `paintBakBtn` (8046); `showBackup` (8056); `bakConfirm` (8081); `bakRestore` (8096); `exportData` (8107); `checkedProgressState` (8115); `own` (8116); `obj` (8117); `num` (8118); `int` (8119); `str` (8120); `bool` (8121); `strings` (8122); `date` (8123); `optional` (8124); `map` (8125); `bad` (8126); `safe` (8129); `rating` (8137); `answer` (8138); `item` (8162); `schedule` (8164); `session` (8166); `log` (8173); `importData` (8182); `toggleRail` (8216); `closeRail` (8217); `setPh` (8283) |

## CSS blocks

| Concern | Line range(s) |
|---|---|
| Boot / base / layout | 37–473 |
| Quiz / cases / highlighter / jump | 474–846 |
| Gate / auth / profiles | 847–1173 |
| Sync | 1174–1234 |
| Theory / book reader | 1235–1570 |
| Print | 1571–1849 |
| Utilities / visual system | 1850–2317 |
| Theme / decorative chrome | 2318–2479 |
| Clepsydra | 2480–2757 |
| Sessions / backup | 2758–2815 |

Note: CSS is a single `<style>` element (37–2815). The reproducible count is 34 named divider sections (command above); the prior “216 authored rule groups” claim is removed because it did not have a single-command reproduction. The three `max-aspect-ratio:5/4` blocks remain separately present at 2736, 2746, and 2756; the print selector range remains 1571–1849.

## Dead-code evidence

| Kind | Entry | Evidence |
|---|---|---|
| Function | `theoryFor` (3488) | `grep -E -c '\btheoryFor\b' app/index.html` → 1. The only match is its declaration; no string reference, inline handler, or `window.` property match was found. |
| Function | `toggleTh` (3820) | `grep -E -c '\btoggleTh\b' app/index.html` → 1. `toggleTheme` is a distinct name and has 4 matches. |
| Function | `tagHex` (3233), `const tagHex=t=>...` | `grep -E -c '\btagHex\b' app/index.html` → 1. Only its own declaration; no call site found. |
| Selector | `.bk-bar` (1426) | `grep -E -n '\.bk-bar\b' app/index.html` → matches at 1426 and 1782, both inside the `<style>` block (37–2815); zero uses outside it. |
| Selector | `.bk-num` (1439) | `grep -E -n '\.bk-num\b' app/index.html` → matches at 1439 and 1460, both inside 37–2815; zero uses outside it. |
| Selector | `.gate .gor` (1199) | `grep -E -n '\.gate \.gor\b' app/index.html` → single match at 1199, inside 37–2815; zero uses outside it. |
| Selector | `.pal` / `.pal.on` (843–844) | `grep -E -n 'class="[^"]*\bpal\b|classList[^;]*\bpal\b|['"'"'\"]pal['"'"'\"]' app/index.html` → no match anywhere; the only occurrences of the string `pal` at all are the two definitions (843, 844) plus unrelated prose using "palette"/"pale" in comments. |

Not judged: id selectors, `@media`/`@keyframes` names, and any class built or toggled only at runtime (see `fr-mount`/`fr-moulding`/`fr-walnut` below) — a static grep cannot settle these without a scoped extractor.

Note: `fr-mount`, `fr-moulding`, `fr-walnut` are **not dead** — they are built as `'fr fr-'+f` at 4658 (`const cls='fr fr-'+f+(small?' fr-sm':'');`), so a plain string search for the class name never appears at the call site by design.

Note: `bankOf` is not dead: `grep -E -n '\bbankOf[(]' app/index.html` finds its live call in `banksOf` at 3165; `banksOf` is the live multi-bank path. Named functions were checked with the same `grep -E -c '\bNAME\b' app/index.html` word-boundary form; only the three count-1 functions above meet the stated dead-code criterion.
