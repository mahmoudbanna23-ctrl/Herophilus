// one-shot patch for fix round 3 (kept for the record; idempotence not needed)
const fs = require('fs');
const F = __dirname + '/app.js';
let s = fs.readFileSync(F, 'utf8');
const rep = (a, b) => { if (!s.includes(a)) { console.log('MISS', a.slice(0, 80)); process.exit(1); } s = s.replace(a, b); };

// decision 1: no soft hyphens anywhere
s = s.replace(/­/g, '');
if (s.includes('­')) { console.log('soft hyphen left'); process.exit(1); }

// decision 2: colour management on before any THREE.Color is made
rep("  var V3 = THREE.Vector3;", "  // r147 ships legacyMode = true, which treats hex colours as linear and washes every cover out;\n  // off, the hex values are sRGB and the covers render as the app's tokens (decision 2).\n  THREE.ColorManagement.legacyMode = false;\n  var V3 = THREE.Vector3;");

// minor: blocky shadow
rep("key.shadow.mapSize.set(1024, 1024);", "key.shadow.mapSize.set(2048, 2048);");

// minor: peek <= 12% of page height. Corner pivots out at 0.6 rad; the triangle past the fore-edge is
// 2p/sin(2*theta) tall for a protrusion p. Seal sits in the corner so part of it rides out with it.
rep("var IN = [0.0, 0.13, 0.035, -0.3], PEEK = [0.113, 0.13, 0.035, -0.3],", "var IN = [-0.02, 0.12, 0.035, 0], PEEK = [0.013, 0.12, 0.035, -0.6],");
rep("seal.position.set(PW / 2 - 0.035, PH / 2 - 0.04, 0.0055);", "seal.position.set(PW / 2 - 0.03, PH / 2 - 0.03, 0.0055);");

// decision 1: measure each title's one-line width once (16 px reference)
rep("    ui.insertBefore(btn, lectBtn);\n    b.btn = btn;", "    ui.insertBefore(btn, lectBtn);\n    b.btn = btn;\n    btn.style.fontSize = '16px'; b.w16 = btn.offsetWidth - 12; b.h16 = btn.offsetHeight; btn.style.fontSize = ''; b.fs = 0;");

// decision 1: the idle fit keeps every title (at its minimum size) inside the frame
rep("      if (s.bound && (r.x0 < -s.bound[0] || r.x1 > s.bound[0] || r.y0 < -s.bound[1] || r.y1 > s.bound[1])) return false;",
  "      if (s.bound && (r.x0 < -s.bound[0] || r.x1 > s.bound[0] || r.y0 < -s.bound[1] || r.y1 > s.bound[1])) return false;\n" +
  "      if (s.labels) for (var j = 0; j < s.labels.length; j++) {\n" +
  "        var L = s.labels[j]; ndc.copy(L.p).project(fitCam);\n" +
  "        if (ndc.x - L.hw < -0.985 || ndc.x + L.hw > 0.985 || ndc.y - L.hh < -0.985 || ndc.y + L.hh > 0.985) return false;\n" +
  "      }");
rep("    var pts = [];\n    books.forEach(function (b) {\n      withPose(b, { path: 0, hov: 0, cover: 0, tuck: 0, pp: 0, ppHover: 0 }, function () {\n        cornersOf([b.block, b.back, b.spine, b.front, b.arc], pts);\n      });\n    });\n    var portrait = state.portrait;\n    return fitCamera([{ pts: pts, bound: portrait ? [0.9, 0.8] : [0.92, 0.84] }], THREE.MathUtils.degToRad(portrait ? 38 : 14));",
  "    var pts = [], labels = [], fmin = minTitlePx();\n    books.forEach(function (b) {\n      withPose(b, { path: 0, hov: 0, cover: 0, tuck: 0, pp: 0, ppHover: 0 }, function () {\n        cornersOf([b.block, b.back, b.spine, b.front, b.arc], pts);\n" +
  "        // NDC half-extent of the title at its minimum size: a label never shrinks below it, and above it it fits the cover\n" +
  "        labels.push({ p: new V3(0, 0.02, CT / 2).applyMatrix4(b.front.matrixWorld), hw: (b.w16 * fmin / 16 + 12) / innerWidth, hh: (b.h16 * fmin / 16) / innerHeight });\n" +
  "      });\n    });\n    var portrait = state.portrait;\n    return fitCamera([{ pts: pts, bound: portrait ? [0.9, 0.8] : [0.92, 0.84], labels: labels }], THREE.MathUtils.degToRad(portrait ? 38 : 14));");
rep("  function fitIdle() {", "  function minTitlePx() { return innerWidth <= 560 ? 14 : 16; }\n  function fitIdle() {");

// decision 3: no pops. Titles fade (<=150 ms, CSS) and only for a physical cause: occluded, facing away,
// or their book leaving the frame. The open book's neighbours keep their titles, inert.
rep("  function setShown(el, on) { if (el.hidden === on) el.hidden = !on; }",
  "  function setShown(el, on) { if (el.hidden === on) el.hidden = !on; }\n  function setFade(el, on) { if (el.classList.contains('gone') === on) el.classList.toggle('gone', !on); }");
rep("      var v = anchorView(b.front, tmpA.set(0, 0.02, CT / 2 + 0.002), ZP);\n      // while a book is open the other titles are inert, so they are not drawn over the spread either\n      if (!v.on || (state.book && state.book !== b)) { setShown(b.btn, false); return; }\n      if (b.btn.hidden) b.btn.hidden = false;\n      var wpx = pxWidth(b.front, -W / 2 + 0.05, W / 2 - 0.05, 0, CT / 2);\n      var mw = Math.max(56, Math.round(wpx / 4) * 4);\n      if (b.mw !== mw || !b.lw) { b.mw = mw; b.btn.style.maxWidth = mw + 'px'; b.lw = b.btn.offsetWidth; b.lh = b.btn.offsetHeight; }\n      // a title that would cross the viewport edge is hidden, never shown cut\n      if (v.x - b.lw / 2 < 0 || v.x + b.lw / 2 > innerWidth || v.y - b.lh / 2 < 0 || v.y + b.lh / 2 > innerHeight) { b.btn.hidden = true; return; }\n      place(b.btn, v.x, v.y, Math.min(1, v.facing / 0.85));",
  "      var v = anchorView(b.front, tmpA.set(0, 0.02, CT / 2 + 0.002), ZP);\n" +
  "      // one line, the largest size that fits the cover, clamped to [16 desktop / 14 phone, 22]\n" +
  "      var wpx = pxWidth(b.front, -W / 2 + 0.05, W / 2 - 0.05, 0, CT / 2);\n" +
  "      var fs = Math.max(minTitlePx(), Math.min(22, Math.floor(16 * (wpx - 12) / b.w16)));\n" +
  "      if (fs !== b.fs) { b.fs = fs; b.btn.style.fontSize = fs + 'px'; b.lw = b.btn.offsetWidth; b.lh = b.btn.offsetHeight; }\n" +
  "      var inFrame = v.x - b.lw / 2 >= 0 && v.x + b.lw / 2 <= innerWidth && v.y - b.lh / 2 >= 0 && v.y + b.lh / 2 <= innerHeight;\n" +
  "      setFade(b.btn, v.on && inFrame);\n" +
  "      if (v.on || b.btn.classList.contains('gone')) place(b.btn, v.x, v.y, 1);");

// decision 3 / a11y: neighbours stay drawn but are inert and hidden from AT while a book is open
rep("    books.forEach(function (o) { o.btn.inert = true; });", "    books.forEach(function (o) { o.btn.inert = true; o.btn.setAttribute('aria-hidden', 'true'); });");
rep("    books.forEach(function (o) { o.btn.inert = false; });", "    books.forEach(function (o) { o.btn.inert = false; o.btn.removeAttribute('aria-hidden'); });");

// minor: Mocks label is always dark ink on cream. Tucked, it sits on the right page by the peeking corner.
rep("    var mv = out ? anchorView(b.sheet, tmpA.set(0, -0.03, 0.0025), ZP)\n      : anchorView(b.seal, tmpA.set(0, 0.004, 0), new V3(0, 1, 0)); // cylinder top faces +z after rotation\n",
  "    var mv;\n    if (out) mv = anchorView(b.sheet, tmpA.set(0, -0.03, 0.0025), ZP);\n    else {\n" +
  "      var fw = pxWidth(b.face, -0.1, 0.1, 0, 0) / 0.2, half = (mocksBtn.offsetWidth / 2 + 4) / Math.max(fw, 1);\n" +
  "      mv = anchorView(b.face, tmpA.set(Math.min(0.15, BLOCK_X1 - (BLOCK_X0 + BLOCK_X1) / 2 - half - 0.01), 0.3, 0), ZP);\n    }\n");
rep("      mocksBtn.className = out ? 'lbl page' : 'lbl mocks-tuck';\n      if (out) place(mocksBtn, mv.x, mv.y, 1); else place(mocksBtn, mv.x + 12, mv.y, 1, true);",
  "      place(mocksBtn, mv.x, mv.y, 1);");
// page labels: no squeeze either (minor: glyph width tied to layout, not to a fake perspective)
s = s.replace(/place\((lectBtn|questBtn), (lv|qv)\.x, (lv|qv)\.y, Math\.min\(1, (lv|qv)\.facing \/ 0\.85\)\)/g, 'place($1, $2.x, $3.y, 1)');

fs.writeFileSync(F, s);
console.log('patched');
