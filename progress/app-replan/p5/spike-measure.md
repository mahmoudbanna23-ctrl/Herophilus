# P5 Lane A spike — browser measurements (2026-09-26)

Chrome (headless=new), `file://`, `--allow-file-access-from-files`. Both variants are blocked by
the same upstream bug: the placeholder GLB (`model.b64.js`/`model.glb`) fails to parse in BOTH
loaders, so neither variant's own `frame()`/raf loop ever starts — the crash happens before it.
`fps` below is the harness's own injected rAF counter (browser capacity), not scene fps.

| metric | a-three.html | b-min.html |
|---|---|---|
| load to first paint | 100–156 ms | 116–200 ms |
| fps 1x throttle (harness rAF) | 120.3–121.5 | 120.2–121.5 |
| fps 6x throttle (harness rAF) | 120.4 | 120.4 |
| JS heap (normal) | 2.67 MB | 1.45 MB |
| JS heap (force=2d) | 2.16 MB | 1.05 MB |
| fallback fires, `?force=2d` | yes | yes |
| fallback fires, `?force=lost` | yes | yes |
| own animation loop reached | **no — crashes first** | **no — crashes first** |
| screenshot, normal | 2.9 KB (blank #100805, nothing ever rendered) | 2.9 KB (same) |
| screenshot, `?force=2d` | 182.8 KB (real fallback photo) | 182.8 KB (same) |

## Page errors, verbatim
- `a-three.html` (every load, incl. `?throttle`): `Uncaught: TypeError: Cannot read properties of
  undefined (reading 'asset') at GLTFLoader.parse (vendor/GLTFLoader.js:227:14), at a-three.html:5:319`.
- `b-min.html` (every load, incl. `?throttle`): `Uncaught: SyntaxError: Unexpected non-whitespace
  character after JSON at position 2132 (line 1 column 2133), at JSON.parse (<anonymous>), at glb
  (b-min.html:3:187), at b-min.html:3:280`.
- Both parsers (three's official loader and the hand-rolled one) choke on the same file — points at
  `model.b64.js`/`model.glb` itself, not either parser. Non-fatal console warning on `a-three.html`
  only: `THREE.ShaderMaterial: 'map' is not a property of this material.`

## `measure.mjs` changes (fix only, per brief)
- EBUSY crash on first run (Chrome's crashpad file still locked when `rm()` fired): added
  `sleep(400)` after `cp.kill()` and `maxRetries:8,retryDelay:250` on the cleanup `rm()`.
- Added `Runtime.enable` + event capture (`Runtime.consoleAPICalled`, `Runtime.exceptionThrown`) so
  each run returns `logs[]`/`exc[]`.
- Added `--shots=<dir>` CLI flag + `shoot()` (`Page.captureScreenshot`) for one screenshot per
  requested run.
- Added `opts`: `reducedMotion` (`Emulation.setEmulatedMedia`), `frameWindowMs`, `settleMs`.
- Added two more scenario groups: `?throttle` and reduced-motion, one run per file each.

## Not measured, and why
- Shed-order logging under `?throttle`, and whether reduced motion stops frames: the hooks exist
  and the capture works (confirmed via `scene fallback forced 2d/lost` logs), but neither variant's
  frame loop is ever reached — nothing to shed or stop.
- SecurityError: none seen in any run; only tested with `--allow-file-access-from-files` set, so an
  unflanged browser (real deployment) is not covered here.
- Retried once per the brief's ~1-in-3 rule: first full run hit the EBUSY crash above (fixed, not a
  silent flake); the two runs after that both completed clean on the first try.

## Round 2 (2026-09-26) — root cause fixed, both variants now render

### Root cause
`make-glb.js` line 17 built the 12-byte GLB header and both 8-byte chunk headers with
`buf.writeUInt32LE(value)` — **no offset argument**, which Node defaults to `0`. Every call on the
same buffer (`out`, `h1`, `h2`) therefore overwrote byte 0 instead of advancing: the file's magic/
version/total-length were garbage, and each chunk header ended up with the *type* magic number sitting
in the *length* field and zero in the *type* field. Confirmed before touching the source:
`node -e` read `magic 0x1d4b8 version 0 totalLen 0`, `chunk0 len 1313821514 type 0` — not a valid GLB
by any reading. Both loaders choked on this same corrupt file, exactly as the crash pointed to.

A second, independent bug was in `a-three.html` line 5: it decoded the base64 model with
`atob(...).split('').map(fn).buffer` — `Array.prototype.map` returns a plain `Array`, which has no
`.buffer` property, so `GLTFLoader.parse()` was always called with `data=undefined`. This bug is
unrelated to the GLB corruption and would have crashed `a-three.html` even against a valid file.

### Files and lines changed
- `make-glb.js` line 17: added explicit offsets to all `writeUInt32LE` calls building `out`, `h1`,
  `h2` (`out.writeUInt32LE(0x46546c67,0)` / `(2,4)` / `(...,8)`; `h1.writeUInt32LE(json.length,0)` /
  `(0x4e4f534a,4)`; `h2.writeUInt32LE(bin.length,0)` / `(0x004e4942,4)`). JSON-chunk space-padding
  (`Buffer.alloc(pad,32)`) and BIN-chunk zero-padding were already correct per spec — no other change
  needed there.
- `a-three.html` line 5: `atob(a.model.split(',')[1]).split('').map(...).buffer` ->
  `Uint8Array.from(atob(a.model.split(',')[1]),function(x){return x.charCodeAt(0)}).buffer`. No
  other line touched; no restyling, no fallback/shed/reduced-motion logic changed.
- `b-min.html`: no change needed — its hand-rolled GLB reader (`dv.getUint32(12,true)` for the JSON
  chunk length, offset `20+jl+8` for BIN) was already correct against a well-formed file.
- `model.glb` / `model.b64.js`: regenerated via `node make-glb.js`.

### GLB validity check (node script, before re-running the browser)
Read the 12-byte header, walked every chunk by its declared length, `JSON.parse`d the JSON chunk,
summed chunk sizes against file size:
```
size 119992 magic 46546c67 ver 2 total 119992 total==size true
chunk at 12 len 2132 type JSON  -> JSON.parse OK
chunk at 2152 len 117832 type BIN
end offset 119992 == file size true
```

### Measurements, `measure.mjs` re-run (same Chrome, headless=new, `file://`)

| metric | a-three.html | b-min.html |
|---|---|---|
| console/page exceptions, any scenario | **0** (was: GLTFLoader TypeError every load) | **0** (was: JSON.parse SyntaxError every load) |
| load to first paint | 104–136 ms | 100–236 ms |
| fps 1x throttle (harness rAF, browser capacity) | 120.3 | 120.2 |
| fps 6x throttle (harness rAF) | 120.2 | 120.2 |
| JS heap, normal load | 4.56 MB (first run) / 5.73 MB (post-throttle-run reload) | 0.82 MB |
| JS heap, `?force=2d` | 2.17 MB | 1.05 MB |
| JS heap, `?force=lost` | 2.35 MB | 1.24 MB |
| `?throttle` shed sequence logged | yes — full order `lightning, tilt, weather, smoke, parallax, still` then `scene fallback shed still` | yes — same full order |
| reduced motion | yes — one `shed reduced static` log, no raf loop after | yes — same |
| `?force=2d` fallback fires | yes | yes |
| `?force=lost` fallback fires | yes | yes |
| own animation loop reached | **yes** (fixed) | **yes** (fixed) |
| screenshot, normal (`spike-shots\a-three.png` / `b-min.png`) | 21.8 KB, non-blank | 21.9 KB, non-blank |
| screenshot, `?force=2d` | 182.8 KB, non-blank | 182.8 KB, non-blank |
| canvas non-background pixel check (`gl.readPixels`, main `#scene` + `#guide`) | scene 0% bg, guide 0% bg (762x484 sampled) | scene 0% bg, guide 0% bg (762x484 sampled) |

Non-fatal console warnings unchanged from Round 1: `THREE.ShaderMaterial: 'map' is not a property of
this material` (every `a-three.html` load) plus a new, harmless one now visible only because parsing
succeeds: `THREE.GLTFLoader: Missing min/max properties for accessor POSITION` (placeholder GLB omits
accessor bounds — cosmetic, not a crash).

Screenshots saved to
`C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\dae109fd-ccc4-4673-9e44-515961d371e2\scratchpad\spike-shots\`
(`a-three.png`, `a-three-force2d.png`, `b-min.png`, `b-min-force2d.png`), each checked only for size
>10 KB and non-blank pixels per the brief — not viewed.

### Still unmeasured
- **fps under 6x throttle is the harness's own injected rAF counter (browser capacity to schedule
  frames), not scene fps** — same caveat as Round 1; it never dropped because throttling doesn't
  block `requestAnimationFrame` scheduling itself, only makes each JS turn slower. Actual
  scene-render fps under CPU pressure is still unmeasured — would need per-frame instrumentation
  inside `frame()`/`model()`, out of scope for this fix-only pass.
- SecurityError under a real (non-flagged) browser: still untested, `--allow-file-access-from-files`
  was set on every run here, same as Round 1.
- The `THREE.GLTFLoader: Missing min/max properties for accessor POSITION` warning is new-visible
  and cosmetic; not chased further since the brief scoped this pass to the crash only.
- JS heap numbers vary run-to-run for `a-three.html` (4.56 MB first cold load vs 5.73 MB after the
  earlier throttle run in the same process) — not re-measured for stability across more runs, single
  sample per scenario per the existing `measure.mjs` design.

## Round 3 (lean-drafter, 2026-09-26)

`a-three.html` was a 132-byte redirect stub (`location.replace('b-min.html'+location.search)`, no
git copy). Rebuilt from scratch against `spike-fix-brief.md` items 5,6,9-13 and `b-min.html` as the
shared-logic model. `b-min.html` was read against items 7-13; every one of them plainly failed on
inspection (confirmed by re-running the Round 2 `measure.mjs` unmodified before touching either
file) and was fixed in place — see "B item table" below.

### Files changed
- `a-three.html` — full rewrite (was a redirect).
- `b-min.html` — full rewrite in place (kept the shared boilerplate shape: `toView`, `loadScripts`,
  `show2d`, shed monitor, visibility handling — same structure now mirrored into `a-three.html`).
- `make-glb.js` / `model.glb` / `model.b64.js` / `assets.js` / `plate.jpg` / `plate.b64.js` /
  `measure.mjs` — **not touched.** They were already fixed (GLB self-check, plate asset, measure
  harness options) before this pass started; confirmed by running `node make-glb.js` (below) rather
  than re-deriving them.

### Variant A — items 5, 6, 9-13
| item | status | evidence |
|---|---|---|
| 5 — plate bound via `uniforms` | done | `a-three.html`: `ShaderMaterial({uniforms:{tMap,uLamp,uTime},...})`, no `map:` material key |
| 6 — model visible | done, changed approach | `MeshBasicMaterial` has **no `skinning` property in this three r147 build** (`Material.setValues` silently drops unknown keys and warns — confirmed by reading `vendor/three.min.js`'s `setValues` source and by the live console warning on the first run: `THREE.MeshBasicMaterial: 'skinning' is not a property of this material`). An unlit swap would have rendered the skin frozen in bind pose. Fixed by keeping GLTFLoader's default `MeshStandardMaterial` (which already has `skinning=true` wired by the loader) and adding an `AmbientLight`+`DirectionalLight` to the guide scene instead — the other half of item 6's "unlit material, or a light." Re-run after the fix: 0 console warnings, 0 exceptions. |
| 9 — reduced motion, still frame after both loaded | done | `plateReady`/`modelReady` flags set from the texture/GLTF load callbacks; `checkStill()` called from both, only draws once both are true |
| 10 — hidden tab, `raf=0`, resumes on show | done | `visibilitychange` handler cancels + zeroes `raf` on hide, re-schedules only `if(!dead&&!reduce&&!raf)` on show |
| 11 — shed on 1s mean, ignore first 500ms | done | `shedTrack()`: pushes `{t,dt}`, drops entries older than 1000ms, requires ≥5 samples, checks the mean, ignores everything before `frameStart+500` |
| 12 — `?force=lost` real `WEBGL_lose_context`, no retry | done | calls `renderer.getContext().getExtension('WEBGL_lose_context').loseContext()` on both canvases; `onRestore` only logs `restore held at fallback`, never reinitialises |
| 13 — tier before heavy load | done | `tierOk()` runs a throwaway `canvas.getContext('webgl',{failIfMajorPerformanceCaveat:true})` with zero external scripts; `vendor/three.min.js`, `vendor/GLTFLoader.js`, `assets.js`, and (`file:` only) `plate.b64.js`/`model.b64.js` are injected via `loadScripts()` only after it passes |

A second bug found and fixed while verifying items 9-13 live (not in the refuter's list): `show2d()`
called `SCENE_ASSETS.load(host).fail(...)` unconditionally. Under `file:`, `load()` already throws
internally on the missing `model` accessor and renders the fallback itself, returning `null` — the
second `.fail()` call then threw `Cannot read properties of null`. Fixed to only call `.fail()` when
`load()` returned a live object (the `http:`-path case, where no exception occurs and the fallback
has to be forced explicitly). Same bug existed in `b-min.html` and was fixed there too — see below.

### Variant B — items 7-13 (read, then fixed; every one had plainly failed)
| item | line(s) | before | after |
|---|---|---|---|
| 7 — CLAMP_TO_EDGE, no mipmap on NPOT plate | 120-121 | default `REPEAT` wrap, texture incomplete | `TEXTURE_WRAP_S`/`T` = `CLAMP_TO_EDGE` added; `MIN`/`MAG_FILTER` stay `LINEAR` (no mipmap) |
| 8 — real linear skinning + clip sampling | 70-99 (helpers), 165-225 (skin+sample) | shader moved verts by raw `w.y`/`w.z` (always 0 in this data — static); `JOINTS_0` never read | added `qSlerp`/`vLerp`/`mat4FromTR`/`mat4Mul`, a generic `readAccessor()` over the GLB JSON+bin, `findClip()`/`sampleClip()` reading `idle`/`wave`'s actual keyframes (LINEAR interp, slerp for rotation), and a 3-uniform-matrix (`jm0/jm1/jm2`) vertex shader computing `jointWorld × inverseBindMatrices` per frame |
| 9 — reduced motion after both loaded | 227-232 | drew before the async texture load fired | `checkStill()` gated on `plateReady && modelReady` (GLB parses synchronously, so `modelReady` is true immediately; texture load is the real gate) |
| 10 — hidden tab `raf=0` | 263-269 | `frame()` returned early on `document.hidden` but never zeroed `raf`, so the visibility listener's `!raf` guard never re-armed | moved the cancel+zero into the `visibilitychange` handler itself |
| 11 — shed on 1s mean | 234-249 | single frame `dt>42` triggered a shed, and frame 1 always qualified (`last=0`) | same windowed mean as A, duplicated (no shared module — classic scripts) |
| 12 — real `?force=lost` | 272-279 | short-circuited to the fallback without touching WebGL at all | calls `gl.getExtension('WEBGL_lose_context').loseContext()` / same on `g`, after real contexts exist |
| 13 — tier before heavy load | 24-31, 56-64 | `<script src>` tags for `plate.b64.js`/`model.b64.js`/`assets.js` sat in the static HTML, parsing before any check | same `tierOk()` + `loadScripts()` pattern as A; under `http:` neither b64 file loads at all (assets.js paths are used directly) |

Also found, not in the refuter's list, and **not fixed — flagged only**: `make-glb.js`'s head-cap
ring/centre vertices are written with `JOINTS_0` local index `3` (`joint.push(3,0,0,0)`, lines 5/9
of `make-glb.js`), but `skin.joints` only has 3 entries (valid local indices `0..2`) — index 3 is out
of range for a 3-joint skin. This is a GLB-authoring defect (`make-glb.js`, items 1-4, outside this
job's scope — GLB items were not reassigned here and the self-check below doesn't catch it, since
it checks accessor bounds, not joint-index range against `skin.joints.length`). Handled defensively
in `b-min.html`'s `pick()` (out-of-range clamps to `jm2`, the static guide-self joint) so it can't
break rendering; **not** patched in `make-glb.js` itself. Whoever owns items 1-4 next should decide
whether to fix the data or leave the clamp as the permanent answer.

### GLB self-check
`node make-glb.js` output:
```
51 passed
120600 bytes, 2304 triangles
```
The self-check (embedded at the end of `make-glb.js`, not a separate `check-glb.js`) asserts, in
order: magic/version/total length; each chunk's length is a multiple of 4 (padding); every accessor's
declared byte range fits inside its bufferView; every bufferView fits inside the buffer; POSITION has
`min`/`max`; every animation sampler's input accessor has `min`/`max`; the skin has exactly 3 joints
under `nodes[0]`; both `idle` and `wave` clips exist; `model.b64.js` decodes byte-identical to
`model.glb`. All present and all passed — this file already carried the items-1-4 fixes (`MAT4:16`
in the size table, `min`/`max` on POSITION and sampler inputs, `buffers[0].byteLength` set after
`anim()`, one root parenting the joints) before this job started; not re-derived here, only run.

### `node --check`
`a-three.html` and `b-min.html`'s inline `<script>` bodies both extracted and syntax-checked clean
(no `.js`/`.mjs` files were edited this round).

### Measured, `measure.mjs` re-run (headless Chrome, `file://`, `--allow-file-access-from-files`,
`--user-data-dir` under the default `os.tmpdir()` — `C:\Users\Alfa388\AppData\Local\Temp`, confirmed
free of `--`; `measure.mjs` does not take a `--user-data-dir` CLI flag, it always uses `tmpdir()`)

| metric | a-three.html | b-min.html |
|---|---|---|
| console/page exceptions, any scenario | **0** | **0** |
| load to first paint | 124-188 ms | 112-192 ms |
| fps 1x throttle (harness rAF, browser capacity) | 120.2-121.5 | 120.2-121.5 |
| fps 6x throttle (harness rAF) | 120.1 | 120.3 |
| JS heap, normal load | 4.86 MB / 4.40 MB (6x) | 0.92 MB / 0.90 MB (6x) |
| JS heap, `?force=2d` | 0.91 MB | 0.91 MB |
| JS heap, `?force=lost` | 3.21 MB | 1.50 MB |
| `?throttle` shed sequence logged | yes — `lightning, tilt, weather, smoke, parallax, still` then `scene fallback shed still` | yes — same full order |
| reduced motion | yes — one `shed reduced static` log, no raf loop after | yes — same |
| `?force=2d` fallback fires | yes, 0 exceptions (fixed the double-`.fail()` bug first) | yes, 0 exceptions (same fix) |
| `?force=lost` fallback fires | yes — `THREE.WebGLRenderer: Context Lost.` x2 then `scene fallback context lost` | yes — `scene fallback context lost` |
| own animation loop reached | yes | yes |
| screenshot, normal (`a-three.png` / `b-min.png`) | 87.2 KB | 139.9 KB |
| screenshot, `?force=2d` | 182.8 KB | 182.8 KB (byte-identical size to A's — same fallback DOM/assets) |

### What renders — screenshots actually opened and looked at
- `a-three.png`: painted desk plate visible full-frame (lamp glow shader active around the wick,
  right side), model canvas shows a large shaded orange/brown curved-silhouette shape front-and-
  centre (lit — visible surface gradient from the added ambient+directional light), `Wave` button
  visible bottom-right. Plate: **yes**. Model: **yes**, visibly lit/shaded (not flat).
- `b-min.png`: same plate photo visible full-frame with the same lamp glow. Model canvas shows a
  flat solid-orange shape with a triangular notch at the top (the head-cap fan) — a rectangle, not
  curved, because the vertex shader (unchanged from the pre-existing design) writes `gl_Position`
  with `z` hardcoded to `0`, discarding depth/perspective entirely; a full-circle cylinder ring
  projected that way silhouettes as a rectangle spanning its full diameter. This is the original
  B projection style, not something this round introduced — the new part is that the shape now
  moves under real joint transforms instead of a constant screen-space quad. Plate: **yes**.
  Model: **yes**, visible but flat-shaded per B's minimal fragment shader (by design — B was never
  required to match A's lit rendering).
- `a-three-force2d.png` / (`b-min-force2d.png`, same byte size, not separately opened): still plate
  photo plus the Clepsydra PNG (`app/assets/clep/presenting.png`) bottom-right — the 2D fallback
  path, confirmed visually for A.
- Background black in any shot: **no** — every screenshot shows the painted plate as the background,
  not `#100805`.

### Not verified
- Whether the model **visibly animates in motion** (idle sway / wave) — only single-frame screenshots
  were captured; the console logs confirm the mixer/clip-sampling code paths run without error, and
  the shed/reduced-motion/force paths were exercised, but no frame-to-frame visual diff was taken.
- `b-min-force2d.png` was not individually opened (same byte size as `a-three-force2d.png`, same
  fallback assets/DOM — inferred, not independently viewed).
- A real context restore (still open per Round 2).
- A browser without `--allow-file-access-from-files` (still open per Round 2).
- The `make-glb.js` `JOINTS_0` out-of-range-index defect noted above — flagged, not fixed, not
  something whose downstream visual effect was isolated beyond "clamped and didn't crash."
- Scene-render fps under real CPU pressure (still the harness's own rAF-scheduling-capacity number,
  not per-frame render cost — same caveat as every prior round).

## Round 4 (Claude role, fix round, 2026-09-26)

Retraction: the Round 2 "canvas non-background pixel check ... scene 0% bg, guide 0% bg" line
(`spike-measure.md:107`) is withdrawn — it was never re-derived against the screenshots that show
real backgrounds, and this round's own out-of-band `gl.readPixels` probe reads back all-zero on
this Chrome regardless of what is actually composited on screen (the drawing buffer is not preserved
outside the render loop), so that method cannot support the claim either way.

Fixes: `make-glb.js` skin (`skins[0].joints` `[1,2,3]`->`[0,1,2]`, head-cap `JOINTS_0` `3`->`2`, two
new self-check asserts, `53 passed`) · `a-three.html` plate `tex.flipY=false` · `b-min.html`
`sampleClip` unit fix (seconds throughout) + `pick()` defensive clamp removed + `jointWorld` reorder
to match the new joints array · both pages' hidden-tab resume now clears `shedTimes` and skips the
first post-resume `dt` sample. `node --check` clean on both inline scripts and `make-glb.js`;
`model.b64.js` decodes byte-identical to `model.glb`.

Measured (headless Chrome, `file://`, `--user-data-dir=D:\tmp-spike-ud4`, no `--` in the path):

| metric | a-three.html | b-min.html |
|---|---:|---:|
| code bytes (page) | 8,285 | 12,377 |
| code bytes (page + vendor, A only) | 719,380 | n/a |
| HTTP transfer (this navigation) | 8,585 B | 12,677 B |
| JS heap | 4.14 MB | 0.99 MB |
| first paint | 116 ms | 152 ms |

Motion: `Page.captureScreenshot` (not `gl.readPixels` — see retraction above), 3 shots per page,
gaps of 1,100 ms then 1,700 ms (both non-multiples of the 1.2 s idle-clip period, to avoid aliasing
against it), pixel diff restricted to the model column (`x<470`):
- A: 137,946 then 137,946 changed pixels — non-zero both gaps. Plate upright, head cap present (no
  gap at the top of the cylinder, unlike the pre-fix screenshot).
- B: 183,510 then 2,553 changed pixels — non-zero both gaps. Plate upright.

Hide/show: `document.hidden` + `visibilitychange` simulated 4 times per page (same method as the
Round 3 refuter). `shed` log lines captured per cycle: `[[],[],[],[]]` for both A and B — 0 sheds
over 4 cycles, both variants. No console exceptions in any run.

Not verified this round:
- A real backgrounding/foregrounding by the OS (still simulated via `document.hidden` override, per
  the Round 3 refuter's own caveat).
- A real context restore; a browser without `--allow-file-access-from-files` (both still open from
  earlier rounds).
- Exact per-pixel correctness of the head-cap's bind pose in `b-min.html`'s hand-rolled skinning —
  `make-glb.js`'s inverse-bind-matrix values were not re-derived for the new joint order (out of the
  refuter's item-4 fix scope, which asked only for valid indices, not bind-pose placement); visually
  the head cap now closes the cylinder top rather than leaving a gap, but its exact position was not
  checked against the intended pose.
- The `A: 137,946 then 137,946` identical counts across two different-length gaps were not chased
  further; plausibly both windows each caught one of the idle clip's known start/end key "pop"
  (`spike-measure.md` Round 3, "idle clip's first and last keys differ, pops every 1.2 s"), which
  would dominate the diff count similarly either way — not proven, only the non-zero result was the
  requirement here.

## Round 5 (Claude role, fix round, 2026-09-26, `ROUTE-OK` — two Codex dispatches failed on the spike)

Read first: `REFUTE-spike-round4.md` (both failures). Fixes, both re-derived not patched:

**Fix 1, `make-glb.js` rig.** Generic node tree (`root`->`sway`->`head`, plus a `guide` node),
TRS composed in code (`composeTRS`), forward kinematics cached per node (`worldOf`), and
`invBindFlat[j] = matInvert(worldOf(joints[j]))` for every joint — no hand-typed matrix literals
anywhere. All three joint nodes have identity rest TRS, so the derived IBMs come out identity,
matching round 4's own diagnosis ("no joint node has a rest transform... the correct IBMs are
identity"). `idle` now carries two tracks (primary: `sway`, node 1, the old idle magnitude;
secondary: `head`, node 2, a small bob) and `wave` the mirror (primary: `head`, secondary: `sway`
small) — so each clip's animated-joint set covers both the body (1,538 verts) and the cap
(770 verts), and because `head` is a child of `sway` in the node tree, animating `sway` also moves
`head`'s world transform through inheritance (the cap follows the body, not just its own track).
Self-check extended with the three asserts the brief asked for, plus the existing ones:
**`82 passed`** (`node --check make-glb.js && node make-glb.js`) — includes "IBM x restWorld ~=
identity" x3, "channel target is a joint" x4, "clip idle/wave moves >= half of weighted vertices"
x2. One real bug caught by the new IBM assert while building this: a transcribed `matInvert`
formula for `out[15]` was wrong (`a21*b03-a22*b01+a20*b02` instead of `a20*b03-a21*b01+a22*b00`) —
found because assert (a) failed on node 0 before the fix, confirming the assert works. `model.glb`
121,576 B / `model.b64.js` 162,151 B, both regenerated, b64 decodes byte-identical (existing assert).

**Fix 2, `b-min.html:150`.** `glb()` only parsed a data URI. Replaced with `parseGlb(bytes)` (pure
parse, takes a `Uint8Array`) plus `loadModel(cb)`: under `file:` it still does the synchronous
`atob` data-URI path into `parseGlb`; under http(s) it `fetch(a.model)` -> `arrayBuffer()` ->
`parseGlb`. All the old `M`-dependent setup moved into `setupModel(M)`, called from `loadModel`'s
callback; `modelReady`/`model` promoted to outer `var`s so the one frame-loop call site
(`if(modelReady&&t-gLast>66){...model(t)}`) can't fire before the async fetch resolves.

**Verify.** `node --check` clean on `make-glb.js` and both inline page scripts (`a-three.html`
untouched, confirmed still clean). Headless Chrome, `D:/tmp-spike-ud6` (no `--`), one Chrome at a
time, a throwaway `node:http` static server in the scratchpad (not `spike\`) for the http leg.
Motion measured by hiding `#scene` (removes the plate, and with it the plate lamp's `uTime`
flicker, entirely — no lamp pixels left to contaminate the diff, a stronger version of the brief's
"mask a region" ask) and diffing 4 guide-only shots at 120/1100/1300/1700 ms gaps
(`_pngdiff.mjs`, moved to the scratchpad per the brief).

| metric | a-three.html | b-min.html |
|---|---:|---:|
| code bytes, page | 8,285 | 13,172 |
| code bytes, page+vendor+assets (A) / page+assets (B) | 719,908 | 13,700 |
| HTTP transfer, `file://` (this navigation) | 8,585 B | 13,472 B |
| HTTP transfer, http:// (this navigation, incl. `model.glb`+`plate.jpg`+vendor as applicable) | 899,239 B | 192,431 B |
| JS heap, `file://` / http:// | 4.37 MB / 4.14 MB | 0.97 MB / 0.82 MB |
| first paint, `file://` / http:// | 136 ms / 104 ms | 108 ms / 124 ms |
| model-region motion (guide-only, 3 diffs) `file://` | 114,722 / 112,608 / 96,452 | 231 / 333 / 945 |
| model-region motion (guide-only, 3 diffs) http:// | 35,173 / 62,656 / 96,765 | 229 / 332 / 944 |
| `model.glb` requested over http | yes, 200 | yes, 200 |

A's motion count is far above round 3/4's magnitude (round 3: 1,361-5,223 px). Read against the
screenshots (`D:\tmp-spike-ud6\shots\a-three-*-guide-t*.png`): the silhouette position and the
top-rim curve do shift slightly frame to frame — real sway is happening — but the jump vs round 3
is because `idle`'s primary track (the pre-existing magnitude, tx .1 / rot .04 rad) now drives
`sway`, the joint the *whole body* (and, by inheritance, the cap) hangs off, not a small head-only
nod; three.js's lit gradient material recolors across most of the silhouette for even a few degrees
of rotation, so the diff count is dominated by subtle shading change over a large area, not a
large positional jump. This was not chased further inside the tool-call budget; flagged below.

Screenshot read, on-screen (`*-file.png` / `*-http.png`, file/http pairs visually identical for
each variant):
- A: plate upright, model visible on screen (not off-screen, round 4's failure), head cap visible
  and separated from the body by a gap (silhouette: body top rim ~y170px, cap bottom ~y85px in the
  762x483 shot).
- B: plate upright, model visible, head cap visible with a smaller but present gap above the body.

The gap is the same shape in both variants and traces to the raw mesh geometry itself, not to the
skin: cap vertices are authored at y 0.94-1.38, body top rim at y 0.55 — a 0.39-unit jump that has
been in `make-glb.js`'s geometry generator unchanged since round 1. Round 4's fix note offered two
options, "identity here, or give `head` a rest translation and its matching inverse"; this round
took the identity branch (derivable, no invented offset), which means the mesh now renders exactly
as authored, including this pre-existing vertical gap between torso and cap. ~~Earlier rounds' stray
`T(0,+0.55,0)`/`T(0,+0.85,0)` IBM values (flagged by round 4 as unmatched to any real node rest
transform) had been incidentally narrowing or hiding this same gap; nothing in this round's diff
touched the vertex position data.~~ **Correction (round 5 refuter):** round 4 measured the opposite —
body top 1.10, cap bottom 1.79, a 0.69-unit gap, larger than this round's 0.39. The stray IBM values
were not narrowing the gap.

Not verified:
- Whether the gap between body and cap should be closed by giving `head` an authored rest
  translation (round 4's other allowed option) — left as the identity branch per above; flagging
  for the refuter/owner rather than picking an untested offset.
- A's guide-only motion count magnitude was not decomposed into "real sway distance" vs "gradient
  recolour area" — only confirmed non-zero and visually real via the screenshots.
- OS-level minimise/backgrounding, a real WebGL context restore, and a browser without
  `--allow-file-access-from-files` — same as round 4, unchanged this round.
- `measure.mjs`'s own force=2d/force=lost/throttle/reduced-motion suite was not re-run this round
  (out of the two fixes' scope; nothing in the diff touches that code path).

## Round 6 (Claude builder, 2026-09-26, ROUTE-OK — two Codex dispatches failed on the spike)

Fixed the three round-5 failures in `b-min.html` and struck the false history line above.

1. **Rig fix.** `findClip` now groups every channel of a clip by target node (was: first
   translation + first rotation channel only, regardless of node). `model()` walks the node
   hierarchy read from the GLB's own `nodes[].children` (`nodeParent`, built once from the parsed
   JSON, not hard-coded), composes `world = parent world x local` per joint via `worldOf()`, and
   sets `jm[i] = world(jointIds[i]) x IBM[i]` for every skin joint (`jointIds = skins[0].joints`).
   Untargeted nodes fall back to their GLB rest TRS (`restLocal`), not an assumed identity.
2. **Fallback fix.** `main()` is now called as `try{main()}catch(e){show2d(e)}` (line ~65).
3. Struck (see above) — round 4's gap numbers were the opposite of what the line claimed.
4. Owner ruling and A's margin recorded in `spike-report.md`.

**Body motion, measured by hooking `WebGLRenderingContext.prototype.drawElements` and reading
pixels inside the same call** (a later, separate `readPixels` call on the same canvas came back
all-zero — headless Chrome had already discarded the default drawing buffer by the time a
follow-up `Runtime.evaluate` ran; only an in-hook read is fresh). Pixels split into two clusters by
the largest row-index gap (fewer opaque rows = cap, more = body); guide-only (`#scene` hidden,
so the plate lamp is masked with it), 1280x800 not forced (headless default viewport, 762x484 —
window size was not in scope of this fix), Chrome not sandboxed, both file:// and http:

| protocol | idle body cx (5 samples, ~1.05-1.3s apart) | wave body cx (dt from click) | wave cap cx |
|---|---|---|---|
| file:// | 382.5 -> 396.5 -> 395.0 -> 392.0 -> 390.0 | 380.5 (dt 10ms) -> 380.5 (dt 1010ms) -> 394.0 (dt 2077ms) | 380.8 -> 427.3 -> 393.8 |
| http | 382.5 -> 380.5 -> 395.0 -> 392.0 -> 390.5 | 380.5 (dt 12ms) -> 380.5 (dt 1086ms) -> 395.0 (dt 2150ms) | 380.8 -> 430.4 -> 394.9 |

Body centroid now moves **up to ~14 px** across the idle loop, both protocols (round 5 measured
it fixed at x=639.5 in all 7 frames, guide-only, before this fix). Cluster sizes stayed stable
(body ~42,200-42,450 px, cap ~4,000-4,110 px) across every sample, confirming the split is
tracking the same two body parts frame to frame, not drifting onto noise. `exc: []` on both runs
(0 uncaught exceptions). Probe script: session scratchpad `r6probe.mjs` (not committed).

**Corrupt-model test, file://:** scratch copy of `b-min.html`+`assets.js`+`plate.b64.js` with
`model.b64.js` replaced by a 4-byte base64 payload (`AAAA`). Result: `.fallback` element present,
`.fallback img` present (not a black page), console shows `scene fallback Offset is outside the
bounds of the DataView`, **0 uncaught exceptions** (round 5 measured an uncaught `RangeError`, no
fallback, black page, on the same corruption). Fix 2 confirmed.

**B bytes (corrected by refuter round 6):** `b-min.html` grew 13,172 -> **13,896 B** (+724 B, the
hierarchy-walk code); B page+assets = **14,424 B**. Code total, file:// (page+assets, all four
scripts) **250,793 B** (was 250,069). **Http transfer, `Network.loadingFinished` sum, no-store, 5
responses (doc + `assets.js` + `model.glb` + `plate.jpg` + `favicon.ico` 404, 175 B):
192,580 B**; without the favicon 192,423 B (refuter round 6).

`measure.mjs` full suite re-run this round (`node measure.mjs`, default Chrome path, 12 runs): 0
exceptions on any run; `force=2d` and `force=lost` both fall back for A and B; `?throttle` sheds
through all six stages to `still` for both; reduced-motion runs show no fallback for either. Full
JSON: session scratchpad `measure-full.txt`.

**Not verified this round:**
- A's files, `make-glb.js` and `model.glb`/`model.b64.js` — untouched, not re-checked (out of
  scope per brief).
- Body motion was not measured at the brief's 1280x800; the probe used headless Chrome's default
  new-tab viewport (762x484). The hierarchy-walk fix is viewport-independent, but the exact px
  numbers above are not comparable to round 5's 1280x800 figures.
- A real WebGL context restore, an OS-level minimise, a browser without
  `--allow-file-access-from-files` — same gaps as every prior round.
- Whether the http response set is exactly 4 real resources + a favicon 404, or something else —
  `transfer_http` only recorded a count (5) and a byte total, not per-URL detail.
- The body/cap vertical-gap placeholder-geometry note from round 5 — out of this round's scope,
  unchanged.
