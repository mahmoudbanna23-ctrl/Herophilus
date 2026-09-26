/* Self-check for scene-map-b.js. Classic script SCENE_MAP has no export, so this check
   reads the file's text and evals it in a small sandbox to get the var. Run: node scene-map-b.check.js

   CORRECTED 2026-09-26 per progress/app-replan/p5/REFUTE-scenemap-b.md: widthOK was
   hard-coded true (blind to the corrected 409px cluster); nothing checked bookCluster
   against the actual portrait crop width; nothing checked books stayed inside bookCluster
   or didn't overlap each other; extraBook and window were absent from the slot-blocker
   list; null (owner-pending) slots were not handled. All fixed below. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const src = fs.readFileSync(path.join(__dirname, 'scene-map-b.js'), 'utf8');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(src + '\nthis.SCENE_MAP = SCENE_MAP;', sandbox);
const SCENE_MAP = sandbox.SCENE_MAP;

let pass = 0;
const fails = [];
const pending = [];
function ok(cond, msg) { if (cond) pass++; else fails.push(msg); }

const P = SCENE_MAP.plate;

function overlaps(a, b) {
  const [ax, ay, aw, ah] = a, [bx, by, bw, bh] = b;
  return ax < bx + bw && bx < ax + aw && ay < by + bh && by < ay + ah;
}

function inside(inner, outer) {
  const [ix, iy, iw, ih] = inner, [ox, oy, ow, oh] = outer;
  return ix >= ox && iy >= oy && ix + iw <= ox + ow && iy + ih <= oy + oh;
}

function collectBoxes() {
  const out = {};
  out.wick = SCENE_MAP.wick.box;
  out.lamp = SCENE_MAP.lamp.box;
  for (const [name, v] of Object.entries(SCENE_MAP.books)) out['book.' + name] = v.box;
  out.bookCluster = SCENE_MAP.bookCluster.box;
  out.window = SCENE_MAP.window.box;
  out.openScroll = SCENE_MAP.openScroll.box;
  out.scrollBundle = SCENE_MAP.scrollBundle.box;
  out.bowl = SCENE_MAP.bowl.box;
  out.extraBook = SCENE_MAP.extraBook.box;
  for (const [name, v] of Object.entries(SCENE_MAP.slots)) {
    if (v === null) { pending.push('slot.' + name); continue; }
    out['slot.' + name] = v.box;
  }
  return out;
}
const boxes = collectBoxes();

// 1. every box inside the plate
for (const [name, b] of Object.entries(boxes)) {
  const [x, y, w, h] = b;
  ok(x >= 0 && y >= 0 && x + w <= P.w && y + h <= P.h,
    `${name} box [${b}] out of plate bounds (${P.w}x${P.h})`);
}

// 2. wick centre inside lamp box
{
  const [lx, ly, lw, lh] = SCENE_MAP.lamp.box;
  const [cx, cy] = SCENE_MAP.wick.center;
  ok(cx >= lx && cx <= lx + lw && cy >= ly && cy <= ly + lh,
    `wick center [${cx},${cy}] not inside lamp box [${SCENE_MAP.lamp.box}]`);
}

// 4. each book sits inside bookCluster
for (const [name, v] of Object.entries(SCENE_MAP.books)) {
  ok(inside(v.box, SCENE_MAP.bookCluster.box),
    `book.${name} [${v.box}] not inside bookCluster [${SCENE_MAP.bookCluster.box}]`);
}

// 4b. bookCluster also contains the lamp box (it's a union of books + lamp)
{
  const lampBox = SCENE_MAP.lamp.box;
  const clusterBox = SCENE_MAP.bookCluster.box;
  if (inside(lampBox, clusterBox)) {
    pass++;
  } else {
    fails.push(`lamp [${lampBox}] not inside bookCluster [${clusterBox}] — ` +
      `lamp right edge ${lampBox[0] + lampBox[2]} vs cluster right edge ${clusterBox[0] + clusterBox[2]}`);
  }
}

// 5. books do not overlap each other
{
  const bookNames = Object.keys(SCENE_MAP.books);
  for (let i = 0; i < bookNames.length; i++) {
    for (let j = i + 1; j < bookNames.length; j++) {
      ok(!overlaps(SCENE_MAP.books[bookNames[i]].box, SCENE_MAP.books[bookNames[j]].box),
        `book.${bookNames[i]} overlaps book.${bookNames[j]}`);
    }
  }
}

// 6. slots don't overlap each other or books/lamp/bowl/scroll/extraBook/window
//    (null / owner-pending slots are skipped, reported separately below). tablet/pile sit
//    ON openScroll by owner ruling 2026-09-26, so openScroll is excluded from THEIR blocker
//    list only — letters still must not touch openScroll.
const slotNames = Object.keys(boxes).filter((n) => n.startsWith('slot.'));
const blockerNames = ['lamp', 'bowl', 'openScroll', 'scrollBundle', 'extraBook', 'window',
  'book.terracotta', 'book.sage', 'book.violet', 'book.blue'];
const onScrollSlots = ['slot.tablet', 'slot.pile'];

for (let i = 0; i < slotNames.length; i++) {
  for (let j = i + 1; j < slotNames.length; j++) {
    ok(!overlaps(boxes[slotNames[i]], boxes[slotNames[j]]),
      `${slotNames[i]} overlaps ${slotNames[j]}`);
  }
  const blockers = onScrollSlots.includes(slotNames[i])
    ? blockerNames.filter((bn) => bn !== 'openScroll')
    : blockerNames;
  for (const bn of blockers) {
    ok(!overlaps(boxes[slotNames[i]], boxes[bn]),
      `${slotNames[i]} overlaps ${bn}`);
  }
}

// 6b. tablet and pile sit INSIDE openScroll (owner ruling 2026-09-26)
for (const name of onScrollSlots) {
  if (!boxes[name]) continue; // still pending, skip
  ok(inside(boxes[name], SCENE_MAP.openScroll.box),
    `${name} [${boxes[name]}] not inside openScroll [${SCENE_MAP.openScroll.box}]`);
}

// 7. PENDING slots reported, never counted as passes
for (const p of pending) {
  console.log(`${p}: PENDING — owner has not picked a box yet (see scene-map-b.js comment)`);
}

// 8. portrait crop shifted onto the books (owner ruling 2026-09-26): x0 = bookCluster's
//    left edge (portraitCrop.x0, a derived getter — not typed in); cropW derived here from
//    portraitCrop.viewport + plate.h, same as before. Assert every book box lies inside
//    [x0, x0+cropW]; report the lamp's clipped width (crop falls short of the lamp's right
//    edge) as an info line, and the plan's 400px bookCluster rule separately — neither info
//    line affects the exit code.
{
  const { w: vw, h: vh } = SCENE_MAP.portraitCrop.viewport;
  const scale = Math.max(vw / P.w, vh / P.h);
  const cropW = vw / scale;
  const x0 = SCENE_MAP.portraitCrop.x0;
  const cropRight = x0 + cropW;

  for (const [name, v] of Object.entries(SCENE_MAP.books)) {
    const [bx, , bw] = v.box;
    ok(bx >= x0 && bx + bw <= cropRight,
      `book.${name} [${v.box}] not inside portrait crop [${x0.toFixed(1)},${cropRight.toFixed(1)}]`);
  }

  console.log(`PORTRAIT: crop [${x0.toFixed(1)}, ${cropRight.toFixed(1)}] (w ${cropW.toFixed(1)}) — ${SCENE_MAP.portraitCrop.decision}`);

  const lampRight = SCENE_MAP.lamp.box[0] + SCENE_MAP.lamp.box[2];
  const lampClip = lampRight - cropRight;
  if (lampClip > 0) {
    console.log(`LAMP: crop clips ~${lampClip.toFixed(1)}px of the lamp handle (info only)`);
  }

  const limit = SCENE_MAP.bookCluster.widthLimit;
  const clusterW = SCENE_MAP.bookCluster.box[2];
  if (limit != null && clusterW > limit) {
    console.log(`WIDTH: bookCluster ${clusterW} exceeds plan's ${limit}px rule (info only)`);
  }
}

// 9. letters slot bottom vs desk front edge — only if the file records the desk edge as
//    data; scene-map-b.js currently only mentions y≈620 in a comment, not a field, so this
//    check is SKIPPED and says so rather than guessing a number.
if (SCENE_MAP.deskFrontEdgeY != null) {
  const [, ly, , lh] = SCENE_MAP.slots.letters ? SCENE_MAP.slots.letters.box : [0, 0, 0, 0];
  ok(ly + lh <= SCENE_MAP.deskFrontEdgeY,
    `letters slot bottom ${ly + lh} exceeds desk front edge ${SCENE_MAP.deskFrontEdgeY}`);
} else {
  console.log('SKIPPED: letters-vs-desk-edge check — scene-map-b.js records no deskFrontEdgeY field (only a y≈620 comment)');
}

console.log(`${pass} passed`);

if (fails.length) {
  console.error(`${fails.length} FAILED:`);
  for (const f of fails) console.error(' - ' + f);
  process.exit(1);
}
