// fix round 3, second patch: re-balance lights for colour-managed output, occlusion over the title's
// whole width, and a plate-aware contrast probe.
const fs = require('fs');
const F = __dirname + '/app.js';
let s = fs.readFileSync(F, 'utf8');
const rep = (a, b) => { if (!s.includes(a)) { console.log('MISS', a.slice(0, 80)); process.exit(1); } s = s.replace(a, b); };

// with colour management on, light colours are sRGB too: a less orange key and more fill,
// so paper reads cream and covers read as their tokens
rep("scene.add(new THREE.HemisphereLight(0x5a4232, 0x140c08, 0.28));", "scene.add(new THREE.HemisphereLight(0xa08a78, 0x2a1c14, 0.55));");
rep("scene.add(new THREE.AmbientLight(0x2a1c14, 0.35));", "scene.add(new THREE.AmbientLight(0x6a5646, 0.45));");
rep("var key = new THREE.PointLight(0xffb066, 3.2, 26, 2);", "var key = new THREE.PointLight(0xffdcae, 3.6, 26, 2);");

// titles: occluded if anything but their own book is the first thing under either end of the text
rep("      setFade(b.btn, v.on && inFrame);",
  "      var clear = v.on && inFrame && endsClear(b, v.x, v.y, b.lw / 2 - 8);\n      setFade(b.btn, clear);");
rep("  function setShown(el, on) {",
  "  var eray = new THREE.Raycaster(), eN = new THREE.Vector2();\n" +
  "  function endsClear(b, x, y, hw) {\n" +
  "    for (var k = -1; k <= 1; k += 2) {\n" +
  "      eN.set(((x + k * hw) / innerWidth) * 2 - 1, -(y / innerHeight) * 2 + 1);\n" +
  "      eray.setFromCamera(eN, camera);\n" +
  "      var hits = eray.intersectObjects(occluders, false);\n" +
  "      for (var i = 0; i < hits.length; i++) { if (!visibleChain(hits[i].object)) continue; if (hits[i].object.userData.book !== b) return false; break; }\n" +
  "    }\n    return true;\n  }\n" +
  "  function setShown(el, on) {");

// probe: composite the label's own background plate (sRGB, as the browser does) over each pixel
rep("      var m = getComputedStyle(e).color.match(/\\d+(\\.\\d+)?/g).map(Number), Lf = lum(m[0], m[1], m[2]);",
  "      var m = getComputedStyle(e).color.match(/\\d+(\\.\\d+)?/g).map(Number), Lf = lum(m[0], m[1], m[2]);\n" +
  "      var bg = (getComputedStyle(e).backgroundColor.match(/[\\d.]+/g) || [0, 0, 0, 0]).map(Number), ba = bg.length > 3 ? bg[3] : 1;\n" +
  "      if (getComputedStyle(e).backgroundColor === 'rgba(0, 0, 0, 0)') ba = 0;");
rep("          var k = ((H0 - 1 - y) * W0 + x) * 4, L = lum(px[k], px[k + 1], px[k + 2]);",
  "          var k = ((H0 - 1 - y) * W0 + x) * 4, L = lum(ba * bg[0] + (1 - ba) * px[k], ba * bg[1] + (1 - ba) * px[k + 1], ba * bg[2] + (1 - ba) * px[k + 2]);");
fs.writeFileSync(F, s);
console.log('patched b');
