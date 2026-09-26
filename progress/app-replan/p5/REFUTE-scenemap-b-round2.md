# REFUTE round 2 - SCENE_MAP plate B (2026-09-26)

**Verdict: FAIL** (boxes pass; data/notes fail two brief items).

Method: own PNG decode (node zlib), pixel profiles, crops with box outlined, written to D:/tmp-scenemap-r2/ and looked at. Ran node scene-map-b.check.js myself: "34 passed", 2 PENDING lines, PORTRAIT and WIDTH info lines, exit 0.

## 1. Boxes vs round-1 fixes
All 15 keys equal the round-1 fix values except books.violet w 43 (fix said 44) - the deliberate main-chat trim. tablet/pile null as owner-pending. bookCluster [1066,217,409,241] = computed union of books+lamp (x 1066..1475, y 217..458).

## 2. Plate spot-checks (crops looked at)
- lamp [1233,345,242,113]: hugs; handle rows y370-375 last lit pixel x=1474, box ends 1474 inclusive. PASS.
- bookCluster: all four books + lamp inside, tight. PASS. Books' bottom: dark seam at y=433 in columns 1090/1140/1188; boxes end y=432. PASS.
- violet/blue seam: below y~230 x=1209 (12,8,13) and 1210 (4,1,2) are black gap; violet body ends x=1208. w 43 is RIGHT for the spine. Only the top corners touch: rows y220-228, violet page edge/corner reaches x~1210-1212 where blue's top corner also sits (e.g. (1214,220)=133,80,75). Genuine 2-3 px occlusion at the corner, not a measurement error; trim loses at most ~2 px x 8 rows of violet. Accept.
- openScroll [948,458,522,90]: top/bottom right (parchment 456..546). Box sits ~15-20 px right of the flat parchment: ~20 px of flat parchment left of x=948 excluded (left roll ends x~925-932), and the right roll intrudes the top-right corner (roll edge x~1452 at y458, ~1480 at y515). Minor, within round-1's stated +-10 on the right roll plus ~15 on the left. Advisory: [932,458,522,90].
- letters [642,522,160,90]: all free wood; diagonal desk edge clear at top-left, front edge y~619 below box bottom 612, scroll left roll x~814 right of box end 802. PASS.
- extraBook [1608,438,308,162]: spine left x~1609, top ~440, bottom ~595; hugs. PASS. Note box overlaps bowl box (x 1608..1765, y 438..473) - genuine occlusion (catch-cup behind book), not a defect.

## 3. Check honesty
- PASS: no hard-coded pass; ok() counts only real conditions; 34 = 13 in-plate + 1 wick + 4 book-in-cluster + 6 book pairs + 10 letters-vs-blocker. Null slots go to pending, never counted.
- FAIL: portrait overflow is NOT computed from data. scene-map-b.js line 91 types portraitCropW: 379.4 as a literal (formula only in a comment); portraitCrop.sourceWidth 379, cluster 409, overflow 29.6 are typed too. check.js reads the literal and never derives 390/(844/821) from viewport + plate.h. Fix: in scene-map-b.js compute portraitCropW from portraitCrop.viewport and plate.h (or drop the literal and compute in check.js), and derive cluster/overflow from bookCluster.box; have check.js assert the stored value equals the computed one.
- Residual (not required by this brief, named in round 1): no assert that bookCluster equals the union of books+lamp; no slot-on-desk-top check (y+h <= 620). Section numbering skips 3.

## 4. Notes section
- PASS: states the round-1 FAIL (9 of 15), names both owner-pending decisions (tablet/pile slot, portrait overflow) with numbers 379.4 / 409 / 29.6.
- FAIL: table row violet shows corrected (1166,219,44,214); file now has w 43. Last paragraph says the 1 px violet/blue overlap is "reported here rather than silently adjusted" - stale, it was adjusted. Fix: violet row to (1166,219,43,214), rewrite that paragraph to record the trim and the seam evidence above.

## Minor text defects
- scene-map-b.js line 26 comment "x209..1280" should read x1209..1280.
- scene-map-b.js header "Every box below is the refuter's own pixel-profile fix" - violet w 43 is not; say so.

## Fit to commit
Not yet. All three files need the edits above (js: computed portraitCropW + comment fixes; check.js: derive/assert the crop width; notes: violet 43 + stale paragraph). No box needs re-measuring.

## Round 3 (2026-09-26)

**Verdict: PASS.** All six drafter claims hold. Three files fit to commit.

- (a) PASS. scene-map-b.js stores portraitCrop as { x, viewport, decision, note } only. Grep for 379 / 29.6 / 409: no 379 or 29.6 anywhere; 409 appears only as bookCluster.box[2] (the measured box itself) and in two comments.
- (b) PASS. check.js computes scale = max(vw/plate.w, vh/plate.h), cropW = vw/scale, overflow = bookCluster.box[2] - cropW. Real run: "35 passed", "PORTRAIT: cluster 409 > crop 379.4 ... (overflow 29.6)", exit 0. Break tests on copies in D:/tmp-scenemap-r2/brk/ (originals untouched, git status unchanged): bookCluster w 420 gives overflow 40.6; w 350 gives "fits crop 379.4"; viewport h 900 gives crop 355.8 / overflow 53.2 (390/(900/821) = 355.8, right); viewport w 500 gives "fits crop 486.4" (500/(844/821), right). Every line moves with the data.
- (c) PASS. New 4b assert: lamp inside bookCluster; with the books-inside assert this covers every book and the lamp. Count 34 -> 35 matches. Breaks correctly: cluster w 350 -> exit 1 "lamp right edge 1475 vs cluster right edge 1416"; lamp w 250 -> exit 1 "1483 vs 1475". Residual (not claimed, not blocking): it tests containment, not equality - an oversized cluster (w 420) still passes.
- (d) PASS. openScroll: [932, 458, 522, 90] (line 59); right edge 1454 now clears the right roll (~1452 at y458).
- (e) PASS. Comment reads x1209..1280; header credits violet w 43 as a main-chat trim confirmed by round 2.
- (f) PASS. Notes table: violet (1166,219,43,214), open scroll (932,458,522,90) with reason; overlap paragraph records the trim, the y220-228 corner occlusion, and the round-2 fixes. Both owner-pending decisions still named. Nit: it says "the round-1 pass found" the 1 px overlap - it was the drafter's check run after round 1. Cosmetic.

**Desk-edge skip does not block.** The check prints SKIPPED, never counts it as a pass. Round 2 crop confirmed letters bottom y=612 sits above the desk front edge y~619. Adding a deskFrontEdgeY field is optional follow-up work.
