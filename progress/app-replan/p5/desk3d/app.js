/* Herophilus P5 step 1 test render, fix round 2: four procedural leather books on a desk.
   Flat colours only, no textures. Every readable word is live HTML text placed each frame on a
   projected 3D anchor (decision 1); the canvas carries no text at all. */
(function () {
  'use strict';

  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canvas = document.getElementById('scene');
  var ui = document.getElementById('ui');
  var backBtn = document.getElementById('backBtn');
  var lectBtn = document.getElementById('lectBtn');
  var questBtn = document.getElementById('questBtn');
  var mocksBtn = document.getElementById('mocksBtn');
  // r147 ships legacyMode = true, which treats hex colours as linear and washes every cover out;
  // off, the hex values are sRGB and the covers render as the app's tokens (decision 2).
  THREE.ColorManagement.legacyMode = false;
  var V3 = THREE.Vector3;

  var SUBJECTS = [
    { id: 'ent', name: 'ENT', label: 'ENT', color: 0xb4472f, pct: 0.58 },
    { id: 'ophtho', name: 'Ophthalmology', label: 'Ophthalmology', color: 0x5c7a52, pct: 0.42 },
    { id: 'neuro', name: 'Neuropsychiatry', label: 'Neuropsychiatry', color: 0x6d4c7d, pct: 0.67 },
    { id: 'peds', name: 'Pediatrics', label: 'Pediatrics', color: 0x2e5f8a, pct: 0.31 }
  ];

  // ---- easing: nothing linear; every rest pose settles (decision 6) ----
  var SETTLE = 0.025; // overshoot, fraction of travel (<= 3%)
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
  function easeInOutCubic(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function sineInOut(t) { return 0.5 - 0.5 * Math.cos(Math.PI * t); }
  // 'settle': run past the target by SETTLE, then ease back over the last ~150 ms
  function makeSettle(dur, inOut) {
    var s = Math.min(0.4, 150 / dur), main = 1 - s;
    return function (t) {
      if (t < main) { var u = t / main; return (1 + SETTLE) * (inOut ? easeInOutCubic(u) : easeOutCubic(u)); }
      return 1 + SETTLE - SETTLE * sineInOut((t - main) / s);
    };
  }
  // 'land': arrive, rebound back by SETTLE (a book landing, a cover slapping shut), come to rest.
  // Used wherever running past the target would push into something solid (desk, page block).
  function makeLand(dur) {
    var s = Math.min(0.4, 150 / dur), main = 1 - s;
    return function (t) {
      if (t < main) return easeInOutCubic(t / main);
      return 1 - SETTLE * Math.sin(Math.PI * (t - main) / s);
    };
  }

  // ---- tween manager ----
  var tweens = [];
  function tween(target, prop, to, dur, ease, delay) {
    for (var i = tweens.length - 1; i >= 0; i--) {
      if (tweens[i].target === target && tweens[i].prop === prop) tweens.splice(i, 1);
    }
    if (dur <= 0 && !delay) { target[prop] = to; return; }
    tweens.push({ target: target, prop: prop, from: null, to: to, dur: Math.max(1, dur), ease: ease,
      t0: performance.now() + (delay || 0) });
  }
  function updateTweens(now) {
    for (var i = tweens.length - 1; i >= 0; i--) {
      var tw = tweens[i];
      if (now < tw.t0) continue;
      if (tw.from === null) tw.from = tw.target[tw.prop];
      var t = Math.min(1, (now - tw.t0) / tw.dur);
      // exact landing: the last frame writes the target itself, never from + (to - from) * 1
      tw.target[tw.prop] = t >= 1 ? tw.to : tw.from + (tw.to - tw.from) * tw.ease(t);
      if (t >= 1) tweens.splice(i, 1);
    }
  }
  function busy(target) { for (var i = 0; i < tweens.length; i++) if (tweens[i].target === target) return true; return false; }

  // ---- renderer / scene / camera ----
  var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputEncoding = THREE.sRGBEncoding;

  var scene = new THREE.Scene();
  scene.background = new THREE.Color(0x120c0a);

  var VFOV = 42;
  var camera = new THREE.PerspectiveCamera(VFOV, innerWidth / innerHeight, 0.05, 60);
  var cam = { px: 0, py: 1.7, pz: 6, lx: 0, ly: 0.5, lz: 0 }; // tweened; applied each frame

  // ---- lights ----
  scene.add(new THREE.HemisphereLight(0xa08a78, 0x2a1c14, 0.55));
  scene.add(new THREE.AmbientLight(0x6a5646, 0.45));
  var key = new THREE.PointLight(0xffdcae, 3.6, 26, 2); // warm oil-lamp key, from the right
  key.position.set(3.4, 2.8, 3.0);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.radius = 4;
  key.shadow.bias = -0.0015;
  key.shadow.normalBias = 0.02;
  scene.add(key);
  var rim = new THREE.DirectionalLight(0x88aaff, 0.6); // cool rim, from behind
  rim.position.set(-2.2, 2.4, -3.4);
  scene.add(rim);

  // ---- desk (deep enough that a steep portrait camera sees desk, not void) + back wall ----
  var desk = new THREE.Mesh(new THREE.BoxGeometry(18, 0.25, 12),
    new THREE.MeshStandardMaterial({ color: 0x4a2d1c, roughness: 0.72, metalness: 0.03 }));
  desk.position.set(0, -0.125, -1);
  desk.receiveShadow = true;
  scene.add(desk);
  var wall = new THREE.Mesh(new THREE.PlaneGeometry(40, 14),
    new THREE.MeshStandardMaterial({ color: 0x2e1f16, roughness: 0.95 }));
  wall.position.set(0, 5, -7);
  scene.add(wall);

  function darken(hex, amt) { var c = new THREE.Color(hex); c.multiplyScalar(1 - amt); return c.getHex(); }
  function leather(hex) { return new THREE.MeshStandardMaterial({ color: hex, roughness: 0.55, metalness: 0.05 }); }
  var goldMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.38, metalness: 0.65 });
  var ENDPAPER_K = { land: 0.72, portrait: 0.53 }; // measured per layout (fix-5): the lamp angle differs
  var paperMat = new THREE.MeshStandardMaterial({ color: 0xf1e7cc, roughness: 0.92 });
  // the left page is the same paper, but the open cover turns it ~24 deg toward the lamp (key light
  // cos 0.72 vs 0.46 on the right page), so it rendered lemon-bright. Same hue, albedo scaled down so
  // both pages of the open spread render the same colour (measured by __pageRGB, NOTES round 4).
  var endMat = paperMat.clone(); endMat.color.multiplyScalar(ENDPAPER_K.land);
  var blockMat = new THREE.MeshStandardMaterial({ color: 0xe6dbbd, roughness: 0.92 });
  var sealMat = new THREE.MeshStandardMaterial({ color: 0x8a1f1c, roughness: 0.5, metalness: 0.05 });

  // ---- book geometry (root origin = book centre) ----
  var W = 0.62, H = 0.92, T = 0.16, CT = 0.022, SQ = 0.035; // SQ = cover overhang past the pages
  var REST_Y = H / 2 + 0.001;   // bottom face on the desk top (y = 0)
  var BLOCK_D = T - 2 * CT;     // page-block depth
  var FACE_Z = BLOCK_D / 2;     // page-block front face
  var BLOCK_X0 = -W / 2, BLOCK_X1 = W / 2 - SQ; // spine side .. fore-edge
  var OPEN_ANGLE = -2.72;       // cover swings on the spine toward the viewer, ~156 deg: a V spread
  var PW = 0.40, PH = 0.52;     // mocks sheet

  var occluders = [];   // meshes that can hide a label (arcs/bands/trim are too thin to count)
  var pickables = [];   // meshes a pointer ray can hit

  function buildBook(s, idx) {
    var b = { subject: s, idx: idx, path: 0, hov: 0, cover: 0, tuck: 0, pp: 0, ppHover: 0,
      baseX: 0, baseZ: 0, baseRotY: 0, phase: 'closed', hoverSrc: {} };
    var root = new THREE.Group(); b.root = root;
    function part(mesh, name, pick) {
      mesh.userData.book = b; mesh.userData.part = name;
      mesh.castShadow = true; mesh.receiveShadow = true;
      if (pick) { pickables.push(mesh); occluders.push(mesh); }
      return mesh;
    }
    var dark = darken(s.color, 0.28);

    var block = part(new THREE.Mesh(new THREE.BoxGeometry(BLOCK_X1 - BLOCK_X0, H - SQ, BLOCK_D), blockMat), 'block', true);
    block.position.x = (BLOCK_X0 + BLOCK_X1) / 2;
    root.add(block); b.block = block;

    // the right page of the spread: top leaf of the page block, carries Questions
    var face = part(new THREE.Mesh(new THREE.PlaneGeometry(BLOCK_X1 - BLOCK_X0 - 0.03, H - SQ - 0.03), paperMat), 'page', true);
    face.castShadow = false;
    face.position.set((BLOCK_X0 + BLOCK_X1) / 2 + 0.012, 0, FACE_Z + 0.0015);
    root.add(face); b.face = face;

    var back = part(new THREE.Mesh(new THREE.BoxGeometry(W, H, CT), leather(dark)), 'back', true);
    back.position.z = -(T / 2 - CT / 2);
    root.add(back); b.back = back;

    var spine = part(new THREE.Mesh(new THREE.CylinderGeometry(T / 2, T / 2, H, 18, 1, false, Math.PI, Math.PI), leather(dark)), 'spine', true);
    spine.position.x = -W / 2;
    root.add(spine); b.spine = spine;
    for (var k = 0; k < 4; k++) {
      var band = new THREE.Mesh(new THREE.TorusGeometry(T / 2 + 0.004, 0.008, 6, 16, Math.PI), goldMat);
      band.rotation.set(Math.PI / 2, 0, Math.PI / 2);
      band.position.set(-W / 2, H / 2 - 0.13 - k * (H - 0.26) / 3, 0);
      root.add(band);
    }

    // front cover on a pivot that sits ON the spine edge
    var pivot = new THREE.Object3D();
    pivot.position.set(-W / 2, 0, T / 2 - CT / 2);
    root.add(pivot); b.pivot = pivot;
    var front = part(new THREE.Mesh(new THREE.BoxGeometry(W, H, CT), leather(s.color)), 'cover', true);
    front.position.x = W / 2;
    pivot.add(front); b.front = front;
    // gilt frame on the outside of the cover
    var gi = 0.045, gw = 0.011;
    [[W / 2, H / 2 - gi, W - 2 * gi, gw], [W / 2, -H / 2 + gi, W - 2 * gi, gw],
     [gi, 0, gw, H - 2 * gi], [W - gi, 0, gw, H - 2 * gi]].forEach(function (g) {
      var m = new THREE.Mesh(new THREE.BoxGeometry(g[2], g[3], 0.003), goldMat);
      m.position.set(g[0], g[1], CT / 2 + 0.0015);
      pivot.add(m);
    });
    // the left page of the spread: paper endpaper pasted inside the cover, carries Lectures
    var endp = part(new THREE.Mesh(new THREE.PlaneGeometry(W - 0.035, H - 0.03), endMat), 'endpaper', true);
    endp.castShadow = false;
    endp.rotation.y = Math.PI; // faces the pages while shut, the viewer once the cover swings
    endp.position.set(W / 2 + 0.006, 0, -CT / 2 - 0.0008);
    pivot.add(endp); b.endp = endp;

    // Mocks: a sealed sheet tucked BETWEEN the leaves (inside the block volume). Invisible while
    // the cover is shut, so the seal can never show through it (decision 3).
    var paper = new THREE.Group(); b.paper = paper;
    var sheet = part(new THREE.Mesh(new THREE.BoxGeometry(PW, PH, 0.004), paperMat), 'paper', true);
    paper.add(sheet); b.sheet = sheet;
    var seal = part(new THREE.Mesh(new THREE.CylinderGeometry(0.027, 0.029, 0.007, 24), sealMat), 'paper', false);
    seal.rotation.x = Math.PI / 2;
    seal.position.set(PW / 2 - 0.03, PH / 2 - 0.03, 0.0055);
    paper.add(seal); b.seal = seal;
    // the sheet is paper-thin: its soft shadow smeared grey across the Questions page when slid out
    sheet.castShadow = false; seal.castShadow = false;
    paper.visible = false;
    root.add(paper);

    // progress arc: a thin gilt ring held clear above the book, with a faint full track
    var arcR = 0.12;
    // material ARRAYS: the sweep is drawn through geometry groups, so it can rewind (setSweep)
    var track = new THREE.Mesh(new THREE.TorusGeometry(arcR, 0.003, 6, 64),
      [new THREE.MeshStandardMaterial({ color: 0x5a4a2c, roughness: 0.6, metalness: 0.4 })]);
    track.position.set(0, H / 2 + 0.2, 0);
    track.rotation.set(0, Math.PI, Math.PI / 2); // same start as the arc, so both rewind to 12 o'clock
    root.add(track); b.track = track;
    var arc = new THREE.Mesh(new THREE.TorusGeometry(arcR, 0.008, 8, 64, Math.PI * 2 * s.pct), [goldMat]);
    arc.rotation.set(0, Math.PI, Math.PI / 2); // start at 12 o'clock, run clockwise
    arc.position.copy(track.position);
    root.add(arc); b.arc = arc;
    b.arcS = 1; b.arcDrawn = -1; // arc sweep: 1 = full value, 0 = rewound (the book is up / open)

    b.colliders = [block, back, spine, front, arc, sheet];
    b.bookParts = [block, back, spine, front, endp];
    return b;
  }

  var books = SUBJECTS.map(buildBook);
  books.forEach(function (b) { scene.add(b.root); });

  // ---- HTML labels: book titles are the book buttons ----
  books.forEach(function (b) {
    var btn = document.createElement('button');
    btn.className = 'lbl title';
    btn.dataset.id = b.subject.id;
    btn.textContent = b.subject.label;
    btn.setAttribute('aria-label', 'Open ' + b.subject.name);
    ui.insertBefore(btn, lectBtn);
    b.btn = btn;
    btn.style.fontSize = '16px'; b.w16 = btn.offsetWidth - 12; b.h16 = btn.offsetHeight; btn.style.fontSize = ''; b.fs = 0;
    btn.addEventListener('pointerenter', function () { setHover(b, 'lbl', true); });
    btn.addEventListener('pointerleave', function () { setHover(b, 'lbl', false); });
    btn.addEventListener('focus', function () { if (!suppressFocusHover && btn.matches(':focus-visible')) setHover(b, 'focus', true); });
    btn.addEventListener('blur', function () { setHover(b, 'focus', false); });
    btn.addEventListener('click', function () { openBook(b); });
  });

  // ---- layout ----
  var state = { book: null, portrait: false };
  function layoutBooks() {
    var portrait = innerWidth / innerHeight < 0.95; // below ~0.95 a row of four 16 px title plates would touch (wb-sweep 570-590x640)
    state.portrait = portrait;
    endMat.color.copy(paperMat.color).multiplyScalar(portrait ? ENDPAPER_K.portrait : ENDPAPER_K.land);
    books.forEach(function (b, i) {
      if (portrait) {
        // 2x2: ENT / Ophthalmology at the back (top of screen, reading order), the other two in front
        var col = i % 2, row = i < 2 ? 0 : 1;
        b.baseX = col ? 0.86 : -0.86;
        b.baseZ = row ? 0.55 : -1.15;
        b.baseRotY = col ? -0.12 : 0.12;
      } else {
        b.baseX = (i - 1.5) * 1.18; b.baseZ = 0; b.baseRotY = (i - 1.5) * -0.09;
      }
    });
    var frontZ = portrait ? 0.55 : 0;
    state.reading = { x: portrait ? 0 : 0.13, y: REST_Y, z: frontZ + (portrait ? 1.4 : 0.9) };
    books.forEach(buildPath);
  }
  // Path out of the stack (decision 5: never through another book). Row books and the portrait
  // front row come forward first, then glide across. Portrait back-row books slide sideways into
  // the aisle between the columns and come forward through the gap between the front books.
  function buildPath(b) {
    var r = state.reading, y0 = REST_Y, x0 = b.baseX, z0 = b.baseZ, L = 0.13, pts;
    if (state.portrait && z0 < 0) {
      pts = [[x0, y0, z0], [x0, y0 + L * 0.8, z0 + 0.02], [x0 * 0.35, y0 + L, z0 + 0.06], [0.03, y0 + L, z0 + 0.55],
        [0.05, y0 + L, 0.85], [r.x, y0 + L, r.z - 0.05], [r.x, y0, r.z]];
    } else {
      pts = [[x0, y0, z0], [x0, y0 + L * 0.8, z0 + 0.05], [x0, y0 + L, z0 + 0.4],
        [(x0 + r.x) / 2, y0 + L, (z0 + 0.4 + r.z) / 2], [r.x, y0 + L, r.z - 0.03], [r.x, y0, r.z]];
    }
    b.curve = new THREE.CatmullRomCurve3(pts.map(function (p) { return new V3(p[0], p[1], p[2]); }), false, 'centripetal');
    b.curve.arcLengthDivisions = 300;
  }

  // ---- pose ----
  var tmpV = new V3();
  function paperPose(b) {
    // slides UP along the pages, between the leaves, face to camera: in (whole sheet inside the
    // block) -> peek (top edge + seal above the head of the pages) -> side -> out (three quarters
    // clear, foot still tucked). z sits behind the gilt arc so the ring floats in front of it.
    var IN = [-0.02, 0.12, -0.015, 0], PEEK = [-0.02, 0.30, -0.015, -0.03],
      SIDE = [-0.02, 0.42, -0.015, 0], OUT = [-0.02, 0.56, -0.015, 0];
    var pp = b.pp + b.ppHover, a, c, t;
    if (pp <= 0.001) { a = IN; c = PEEK; t = b.tuck; }
    else if (pp < 0.55) { a = PEEK; c = SIDE; t = pp / 0.55; }
    else { a = SIDE; c = OUT; t = (pp - 0.55) / 0.45; }
    b.paper.position.set(a[0] + (c[0] - a[0]) * t, a[1] + (c[1] - a[1]) * t, a[2] + (c[2] - a[2]) * t);
    b.paper.rotation.z = a[3] + (c[3] - a[3]) * t;
  }
  function applyPose(b) {
    var p;
    if (b.path <= 0) p = tmpV.set(b.baseX, REST_Y, b.baseZ);
    else if (b.path >= 1) p = tmpV.copy(b.curve.points[b.curve.points.length - 1]);
    else p = b.curve.getPointAt(b.path, tmpV);
    var u = Math.min(1, Math.max(0, b.path / 0.5)), sq = u * u * (3 - 2 * u);
    b.root.position.set(p.x, p.y + 0.045 * b.hov, p.z + 0.08 * b.hov);
    b.root.rotation.set(-0.085 * b.hov, b.baseRotY * (1 - sq), 0);
    b.pivot.rotation.y = b.cover;
    b.paper.visible = b.cover < -1.6;
    paperPose(b);
  }

  // ---- one camera-fit function (decision 4) ----
  // sets: [{pts, span:[sx,sy]} | {pts, bound:[bx,by]}]; the LAST set is the one centred on.
  var fitCam = new THREE.PerspectiveCamera(VFOV, 1, 0.05, 200);
  var ndc = new V3();
  function placeFit(c, f, D) { fitCam.position.copy(c).addScaledVector(f, -D); fitCam.lookAt(c); fitCam.updateMatrixWorld(); }
  function ndcRange(pts) {
    var r = { x0: Infinity, x1: -Infinity, y0: Infinity, y1: -Infinity, behind: false };
    for (var i = 0; i < pts.length; i++) {
      ndc.copy(pts[i]).project(fitCam);
      if (ndc.z > 1 || ndc.z < -1) r.behind = true;
      if (ndc.x < r.x0) r.x0 = ndc.x; if (ndc.x > r.x1) r.x1 = ndc.x;
      if (ndc.y < r.y0) r.y0 = ndc.y; if (ndc.y > r.y1) r.y1 = ndc.y;
    }
    return r;
  }
  function fitsAt(sets, c, f, D) {
    placeFit(c, f, D);
    for (var i = 0; i < sets.length; i++) {
      var s = sets[i], r = ndcRange(s.pts);
      if (r.behind) return false;
      if (s.span && (r.x1 - r.x0 > s.span[0] || r.y1 - r.y0 > s.span[1])) return false;
      if (s.bound && (r.x0 < -s.bound[0] || r.x1 > s.bound[0] || r.y0 < -s.bound[1] || r.y1 > s.bound[1])) return false;
      if (s.labels) for (var j = 0; j < s.labels.length; j++) {
        var L = s.labels[j]; ndc.copy(L.p).project(fitCam);
        if (ndc.x - L.hw < -0.985 || ndc.x + L.hw > 0.985 || ndc.y - L.hh < -0.985 || ndc.y + L.hh > 0.985) return false;
      }
    }
    return true;
  }
  function solveD(sets, c, f) {
    var lo = 0.2, hi = 80;
    for (var i = 0; i < 44; i++) { var m = (lo + hi) / 2; if (fitsAt(sets, c, f, m)) hi = m; else lo = m; }
    return hi;
  }
  function fitCamera(sets, pitch) {
    fitCam.aspect = innerWidth / innerHeight; fitCam.updateProjectionMatrix();
    var f = new V3(0, -Math.sin(pitch), -Math.cos(pitch));
    var up = new V3(0, Math.cos(pitch), -Math.sin(pitch)), right = new V3(1, 0, 0);
    var pts = sets[sets.length - 1].pts, box = new THREE.Box3().setFromPoints(pts), c = box.getCenter(new V3());
    var tanV = Math.tan(THREE.MathUtils.degToRad(VFOV) / 2), tanH = tanV * fitCam.aspect, D = 5;
    for (var it = 0; it < 8; it++) {
      D = solveD(sets, c, f);
      placeFit(c, f, D);
      var r = ndcRange(pts);
      c.addScaledVector(right, (r.x0 + r.x1) / 2 * D * tanH).addScaledVector(up, (r.y0 + r.y1) / 2 * D * tanV);
    }
    D = solveD(sets, c, f);
    var p = c.clone().addScaledVector(f, -D);
    return { px: p.x, py: p.y, pz: p.z, lx: c.x, ly: c.y, lz: c.z, D: D };
  }
  function cornersOf(meshes, out) {
    meshes.forEach(function (m) {
      var bb = m.geometry.boundingBox || (m.geometry.computeBoundingBox(), m.geometry.boundingBox);
      for (var i = 0; i < 8; i++) {
        out.push(new V3(i & 1 ? bb.max.x : bb.min.x, i & 2 ? bb.max.y : bb.min.y, i & 4 ? bb.max.z : bb.min.z).applyMatrix4(m.matrixWorld));
      }
    });
    return out;
  }
  // evaluate a book at a hypothetical pose, restore afterwards
  function withPose(b, pose, fn) {
    var save = { path: b.path, hov: b.hov, cover: b.cover, tuck: b.tuck, pp: b.pp, ppHover: b.ppHover };
    Object.keys(pose).forEach(function (k) { b[k] = pose[k]; });
    applyPose(b); b.root.updateMatrixWorld(true);
    var r = fn();
    Object.keys(save).forEach(function (k) { b[k] = save[k]; });
    applyPose(b); b.root.updateMatrixWorld(true);
    return r;
  }
  function minTitlePx() { return innerWidth <= 560 ? 14 : 16; }
  function fitIdle() {
    var pts = [], labels = [], fmin = minTitlePx();
    books.forEach(function (b) {
      withPose(b, { path: 0, hov: 0, cover: 0, tuck: 0, pp: 0, ppHover: 0 }, function () {
        cornersOf([b.block, b.back, b.spine, b.front, b.arc], pts);
        // NDC half-extent of the title at its minimum size: a label never shrinks below it, and above it it fits the cover
        labels.push({ p: new V3(0, 0.02, CT / 2).applyMatrix4(b.front.matrixWorld), hw: (b.w16 * fmin / 16 + 12) / innerWidth, hh: (b.h16 * fmin / 16) / innerHeight });
      });
    });
    var portrait = state.portrait;
    return fitCamera([{ pts: pts, bound: portrait ? [0.9, 0.8] : [0.92, 0.84], labels: labels }], THREE.MathUtils.degToRad(portrait ? 38 : 14));
  }
  function fitOpen(b) {
    var bookPts = [], all = [];
    withPose(b, { path: 1, hov: 0, cover: OPEN_ANGLE, tuck: 1, pp: 0, ppHover: 0 }, function () {
      cornersOf(b.bookParts, bookPts); cornersOf(b.bookParts.concat([b.arc, b.sheet]), all);
    });
    withPose(b, { path: 1, hov: 0, cover: OPEN_ANGLE, tuck: 1, pp: 1, ppHover: 0 }, function () { cornersOf([b.sheet], all); });
    var land = innerWidth >= innerHeight;
    // the open book spans ~60% of the SHORTER screen side (NDC span 1.2 of 2)
    var span = land ? [1.84, 1.2] : [1.2, 1.84];
    return fitCamera([{ pts: bookPts, span: span }, { pts: all, bound: [0.92, land ? 0.8 : 0.84] }],
      THREE.MathUtils.degToRad(land ? 11 : 34));
  }
  function camTo(fit, dur, delay) {
    ['px', 'py', 'pz', 'lx', 'ly', 'lz'].forEach(function (k) { tween(cam, k, fit[k], dur, makeSettle(dur, true), delay); });
  }
  function camSnap(fit) { ['px', 'py', 'pz', 'lx', 'ly', 'lz'].forEach(function (k) { tween(cam, k, fit[k], 0); }); }

  function resize() {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight, false);
    layoutBooks();
    books.forEach(applyPose);
    scene.updateMatrixWorld(true);
    if (!state.book) camSnap(fitIdle());
    else if (state.book.phase === 'open') camSnap(fitOpen(state.book));
  }

  // ---- hover ----
  var suppressFocusHover = false;
  function setHover(b, src, on) {
    b.hoverSrc[src] = on;
    var want = (b.hoverSrc.lbl || b.hoverSrc.ray || b.hoverSrc.focus) ? 1 : 0;
    if (state.book || reduce) return;
    if (b.hovWant === want) return;
    b.hovWant = want;
    tween(b, 'hov', want, 360, want ? makeSettle(360) : easeOutCubic);
  }
  function setPaperHover(on) {
    var b = state.book;
    if (!b || b.phase !== 'open' || reduce || b.pp > 0) return;
    if (b.ppHoverWant === on) return;
    b.ppHoverWant = on;
    // a small lift (~0.008 world, well under half the label's height): the label rides the sheet,
    // so a bigger lift carried it out from under the pointer between press and release
    tween(b, 'ppHover', on ? 0.025 : 0, 280, on ? makeSettle(280) : easeOutCubic);
  }

  // ---- open / close ----
  function openBook(b) {
    if (state.book || b.phase !== 'closed') return;
    state.book = b; b.phase = 'opening';
    books.forEach(function (o) { o.hoverSrc = {}; o.hovWant = 0; if (o !== b) tween(o, 'hov', 0, reduce ? 0 : 300, easeOutCubic); });
    setUiForOpen(b);
    var R = reduce ? 0 : 1;
    tween(b, 'hov', 0, 300 * R, easeOutCubic);
    tween(b, 'arcS', 0, 300 * R, easeInOutCubic); // the arc belongs to the closed book: it rewinds as she lifts
    tween(b, 'path', 1, 900 * R, makeLand(900));
    camTo(fitOpen(b), 950 * R, 220 * R);
    tween(b, 'cover', OPEN_ANGLE, 700 * R, makeSettle(700), 620 * R);
    tween(b, 'tuck', 1, 420 * R, makeSettle(420), 1180 * R);
    setTimeout(function () { b.phase = 'open'; }, reduce ? 0 : 1350);
  }
  function closeBook() {
    var b = state.book;
    if (!b || b.phase !== 'open') return;
    b.phase = 'closing';
    var hadFocus = document.activeElement === document.body || document.activeElement === backBtn ||
      ui.contains(document.activeElement);
    // page labels are NOT hidden here: updateLabels fades each one as its own cause happens
    // (cover swings past facing, cover shuts over the page, paper tucks back in)
    backBtn.hidden = true;
    var R = reduce ? 0 : 1, t = 0;
    tween(b, 'ppHover', 0, 200 * R, easeOutCubic); b.ppHoverWant = false;
    if (b.pp > 0) { tween(b, 'pp', 0, 450 * R, makeSettle(450, true)); t = 430; }
    tween(b, 'tuck', 0, 260 * R, easeInOutCubic, t * R);
    tween(b, 'cover', 0, 650 * R, makeLand(650), t * R);
    tween(b, 'path', 0, 900 * R, makeLand(900), (t + 520) * R);
    tween(b, 'arcS', 1, 300 * R, easeInOutCubic, (t + 520 + 900) * R); // sweeps back once she has landed
    camTo(fitIdle(), 950 * R, (t + 520) * R);
    setTimeout(function () {
      b.phase = 'closed'; state.book = null; b.paperOut = false;
      setUiForClosed();
      if (hadFocus) { suppressFocusHover = true; b.btn.focus({ preventScroll: true }); suppressFocusHover = false; }
    }, reduce ? 0 : t + 520 + 960);
  }
  function toggleMocks() {
    var b = state.book;
    if (!b || b.phase !== 'open') return;
    b.paperOut = !b.paperOut;
    var d = reduce ? 0 : 560;
    tween(b, 'ppHover', 0, reduce ? 0 : 200, easeOutCubic); b.ppHoverWant = false;
    tween(b, 'pp', b.paperOut ? 1 : 0, d, makeSettle(d, true));
    console.log('mocks:' + b.subject.id, b.paperOut ? 'out' : 'in');
  }
  function setUiForOpen(b) {
    books.forEach(function (o) { o.btn.inert = true; o.btn.setAttribute('aria-hidden', 'true'); });
    backBtn.hidden = false;
    lectBtn.setAttribute('aria-label', b.subject.name + ': Lectures');
    questBtn.setAttribute('aria-label', b.subject.name + ': Questions');
    mocksBtn.setAttribute('aria-label', b.subject.name + ': Mocks');
  }
  function setUiForClosed() {
    books.forEach(function (o) { o.btn.inert = false; o.btn.removeAttribute('aria-hidden'); });
    backBtn.hidden = true;
    [lectBtn, questBtn, mocksBtn].forEach(function (el) { setFade(el, false); });
  }
  function logChoice(kind) { if (state.book && state.book.phase === 'open') console.log(kind + ':' + state.book.subject.id); }

  backBtn.addEventListener('click', closeBook);
  lectBtn.addEventListener('click', function () { logChoice('lectures'); });
  questBtn.addEventListener('click', function () { logChoice('questions'); });
  mocksBtn.addEventListener('click', toggleMocks);
  mocksBtn.addEventListener('pointerenter', function () { setPaperHover(true); });
  mocksBtn.addEventListener('pointerleave', function () { setPaperHover(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && state.book) closeBook(); });

  // ---- picking: rays against the real book meshes (decision 5) ----
  var ray = new THREE.Raycaster(), ptr = new THREE.Vector2();
  function pick(e) {
    ptr.set(e.clientX / innerWidth * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
    ray.setFromCamera(ptr, camera);
    var hits = ray.intersectObjects(pickables, false);
    for (var i = 0; i < hits.length; i++) if (hits[i].object.visible && visibleChain(hits[i].object)) return hits[i].object;
    return null;
  }
  function visibleChain(o) { while (o) { if (!o.visible) return false; o = o.parent; } return true; }
  var rayHover = null;
  canvas.addEventListener('pointermove', function (e) {
    var hit = pick(e), clickable = false;
    if (!state.book) {
      var hb = hit ? hit.userData.book : null;
      if (hb !== rayHover) { if (rayHover) setHover(rayHover, 'ray', false); if (hb) setHover(hb, 'ray', true); rayHover = hb; }
      clickable = !!hb;
    } else if (hit && hit.userData.book === state.book) {
      var p = hit.userData.part;
      clickable = p === 'endpaper' || p === 'page' || p === 'paper';
      setPaperHover(p === 'paper');
    } else setPaperHover(false);
    canvas.style.cursor = clickable ? 'pointer' : 'default';
  });
  canvas.addEventListener('pointerleave', function () { if (rayHover) setHover(rayHover, 'ray', false); rayHover = null; });
  canvas.addEventListener('click', function (e) {
    var hit = pick(e);
    if (!state.book) { if (hit) openBook(hit.userData.book); return; }
    if (state.book.phase !== 'open') return;
    if (hit && hit.userData.book === state.book) {
      var p = hit.userData.part;
      if (p === 'endpaper') logChoice('lectures');
      else if (p === 'page') logChoice('questions');
      else if (p === 'paper') toggleMocks();
      return; // the open book's own edges are not "outside"
    }
    closeBook();
  });

  // ---- labels: project an anchor, hide when facing away / occluded / off-screen ----
  var aW = new V3(), nW = new V3(), toCam = new V3(), lray = new THREE.Raycaster(), nm = new THREE.Matrix3();
  function anchorView(mesh, local, normalLocal) {
    aW.copy(local).applyMatrix4(mesh.matrixWorld);
    nm.getNormalMatrix(mesh.matrixWorld);
    nW.copy(normalLocal).applyMatrix3(nm).normalize();
    toCam.copy(camera.position).sub(aW);
    var dist = toCam.length(); toCam.divideScalar(dist);
    var facing = nW.dot(toCam);
    ndc.copy(aW).project(camera);
    var x = (ndc.x * 0.5 + 0.5) * innerWidth, y = (-ndc.y * 0.5 + 0.5) * innerHeight;
    var on = facing > 0.2 && ndc.z < 1 && x >= 0 && x <= innerWidth && y >= 0 && y <= innerHeight, occ = false;
    if (on) {
      lray.set(camera.position, toCam.clone().negate());
      lray.far = dist + 0.01;
      var hits = lray.intersectObjects(occluders, false);
      for (var i = 0; i < hits.length; i++) {
        var o = hits[i].object;
        if (!visibleChain(o) || o === mesh) continue;
        if (hits[i].distance < dist - 0.004) { on = false; occ = true; }
        break;
      }
    }
    return { on: on, occ: occ, x: x, y: y, facing: facing, dist: dist };
  }
  // is any corner of the title's plate covered by ANOTHER book nearer than the title itself?
  // (the whole plate, not just the text, so a title is cut the frame an edge of a book reaches it)
  var eray = new THREE.Raycaster(), eN = new THREE.Vector2();
  function plateClear(b, x, y, hw, hh, dist) {
    for (var k = 0; k < 4; k++) {
      eN.set(((x + (k & 1 ? hw : -hw)) / innerWidth) * 2 - 1, -((y + (k & 2 ? hh : -hh)) / innerHeight) * 2 + 1);
      eray.setFromCamera(eN, camera);
      var hits = eray.intersectObjects(occluders, false);
      for (var i = 0; i < hits.length; i++) {
        if (!visibleChain(hits[i].object)) continue;
        if (hits[i].object.userData.book !== b && hits[i].distance < dist) return false;
        break;
      }
    }
    return true;
  }
  // every label shows and hides through the 150 ms opacity fade (CSS .gone), never a cut
  function setFade(el, on) { if (el.classList.contains('gone') === on) el.classList.toggle('gone', !on); }
  function place(el, x, y, sx, alignLeft) {
    el.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px) translate(' + (alignLeft ? '0' : '-50%') +
      ',-50%) scaleX(' + sx.toFixed(3) + ')';
  }
  var ZP = new V3(0, 0, 1), ZN = new V3(0, 0, -1), tmpA = new V3(), tmpB = new V3();
  function pxWidth(mesh, x0, x1, y, z) {
    ndc.copy(tmpA.set(x0, y, z)).applyMatrix4(mesh.matrixWorld).project(camera); var a = ndc.x;
    ndc.copy(tmpB.set(x1, y, z)).applyMatrix4(mesh.matrixWorld).project(camera);
    return Math.abs(ndc.x - a) * 0.5 * innerWidth;
  }
  function updateLabels(now) {
    // ONE shared title size (fix-5 decision 3): the largest at which every resting book's title fits
    // its own cover on one line, clamped to [16 desktop / 14 phone, 22]. The open book is left out:
    // it is lifting toward the camera, so its cover only grows.
    var fit = 22;
    books.forEach(function (b) {
      if (b === state.book) return;
      var wpx = pxWidth(b.front, -W / 2 + 0.05, W / 2 - 0.05, 0, CT / 2);
      fit = Math.min(fit, Math.floor(16 * (wpx - 12) / b.w16));
    });
    var fs = Math.max(minTitlePx(), fit);
    books.forEach(function (b) {
      if (fs !== b.fs) { b.fs = fs; b.btn.style.fontSize = fs + 'px'; b.lw = b.btn.offsetWidth; b.lh = b.btn.offsetHeight; }
    });
    // hide when the title stops being visible within 150 ms (the fade ends on time); show only when
    // it stays visible for the whole next 600 ms
    var fc = forecastVis(now);
    books.forEach(function (b, i) {
      var v = anchorView(b.front, tmpA.set(0, 0.02, CT / 2 + 0.002), ZP), o = fc[i];
      // input can change the future (a hover, then the click that opens): a hidden title also waits
      // 400 ms from its last hide before it may come back, so hide -> show -> hide never fits in 400 ms
      if (b.titleShown) { if (!(o[0] && o[1] && o[2])) { b.titleShown = false; b.hideAt = now; } }
      else if (!(now - (b.hideAt || -1e9) < 400) && o.every(function (x) { return x; })) b.titleShown = true;
      setFade(b.btn, b.titleShown);
      place(b.btn, v.x, v.y, 1);
    });
    // page labels: always placed on their own anchor (so a label never appears at a stale spot),
    // shown/hidden only through the 150 ms fade, driven by the physical cause of each
    var b = state.book;
    if (!b) return;
    var lv = anchorView(b.endp, tmpA.set(0, 0.02, 0), ZP); // plane-local +z = its visible face
    setFade(lectBtn, lv.on); place(lectBtn, lv.x, lv.y, 1);
    var qv = anchorView(b.face, tmpA.set(0, 0.02, 0), ZP);
    setFade(questBtn, qv.on); place(questBtn, qv.x, qv.y, 1);
    // Mocks rides on the sheet itself (top-left, clear of the seal and the arc) at every pose
    var mv = anchorView(b.sheet, tmpA.set(-0.12, PH / 2 - 0.065, 0.0025), ZP);
    setFade(mocksBtn, mv.on && b.paper.visible && b.tuck > 0.6);
    place(mocksBtn, mv.x, mv.y, 1);
  }

  // ---- intersection probe (verification only): OBB-vs-OBB separating-axis test per mesh ----
  function obb(m) {
    var bb = m.geometry.boundingBox || (m.geometry.computeBoundingBox(), m.geometry.boundingBox);
    var e = m.matrixWorld.elements, c = bb.getCenter(new V3()).applyMatrix4(m.matrixWorld), hs = bb.getSize(new V3()).multiplyScalar(0.5);
    var u = [new V3(e[0], e[1], e[2]), new V3(e[4], e[5], e[6]), new V3(e[8], e[9], e[10])];
    var h = [hs.x * u[0].length(), hs.y * u[1].length(), hs.z * u[2].length()];
    u.forEach(function (a) { a.normalize(); });
    return { c: c, u: u, h: h };
  }
  function obbHit(A, B, eps) {
    var R = [[], [], []], AR = [[], [], []], i, j, ra, rb;
    for (i = 0; i < 3; i++) for (j = 0; j < 3; j++) { R[i][j] = A.u[i].dot(B.u[j]); AR[i][j] = Math.abs(R[i][j]) + 1e-6; }
    var d = B.c.clone().sub(A.c), t = [d.dot(A.u[0]), d.dot(A.u[1]), d.dot(A.u[2])];
    for (i = 0; i < 3; i++) { ra = A.h[i]; rb = B.h[0] * AR[i][0] + B.h[1] * AR[i][1] + B.h[2] * AR[i][2]; if (Math.abs(t[i]) > ra + rb - eps) return false; }
    for (j = 0; j < 3; j++) { ra = A.h[0] * AR[0][j] + A.h[1] * AR[1][j] + A.h[2] * AR[2][j]; rb = B.h[j]; if (Math.abs(t[0] * R[0][j] + t[1] * R[1][j] + t[2] * R[2][j]) > ra + rb - eps) return false; }
    for (i = 0; i < 3; i++) for (j = 0; j < 3; j++) {
      var i1 = (i + 1) % 3, i2 = (i + 2) % 3, j1 = (j + 1) % 3, j2 = (j + 2) % 3;
      ra = A.h[i1] * AR[i2][j] + A.h[i2] * AR[i1][j]; rb = B.h[j1] * AR[i][j2] + B.h[j2] * AR[i][j1];
      if (Math.abs(t[i2] * R[i1][j] - t[i1] * R[i2][j]) > ra + rb - eps) return false;
    }
    return true;
  }
  window.__ix = { on: false, frames: 0, hitFrames: 0, first: null };
  function probeIntersections() {
    var X = window.__ix; X.frames++;
    var hit = null;
    for (var a = 0; a < books.length && !hit; a++) for (var c = a + 1; c < books.length && !hit; c++) {
      var A = books[a].colliders.filter(visibleChain).map(obb), B = books[c].colliders.filter(visibleChain).map(obb);
      for (var i = 0; i < A.length && !hit; i++) for (var j = 0; j < B.length && !hit; j++) {
        if (obbHit(A[i], B[j], 0.002)) hit = books[a].subject.id + '.' + books[a].colliders[i].userData.part + ' x ' + books[c].subject.id + '.' + books[c].colliders[j].userData.part;
      }
    }
    if (hit) { X.hitFrames++; if (!X.first) X.first = hit; }
  }

  // draw the first s of a torus along its circumference. TorusGeometry indexes ring by ring
  // (j = tube ring, i = step round the circle, 6 indices each), so one group per ring, n steps long.
  // The geometry itself never changes, so its bounds (and every camera fit) stay those of the full arc.
  function setSweep(mesh, s) {
    var g = mesh.geometry, tub = g.parameters.tubularSegments, rad = g.parameters.radialSegments, n = Math.round(tub * s);
    g.clearGroups();
    for (var j = 0; j < rad; j++) g.addGroup(j * tub * 6, n * 6, 0);
    mesh.visible = n > 0;
  }

  // ---- occlusion forecast (fix-5 decision 1) ----
  // All motion is tweens, so where every book and the camera will be is known ahead. Each frame the
  // title plates are tested at now + FORE ms: a title starts its 150 ms fade when contact is 150 ms
  // away (so the fade ENDS at contact), and comes back only when clear for the next 600 ms
  // (hysteresis: a show is never followed by a hide inside 400 ms). Never a one-frame cut.
  var FORE = [0, 75, 150, 225, 300, 375, 450, 525, 600];
  // the whole visibility test is forecast, not only occlusion: facing away and leaving the frame are
  // tween-driven too, and forecasting them gives the same hysteresis (no fade reversing every frame)
  function titleVis(b) {
    var v = anchorView(b.front, tmpA.set(0, 0.02, CT / 2 + 0.002), ZP);
    var inFrame = v.x - b.lw / 2 >= 0 && v.x + b.lw / 2 <= innerWidth && v.y - b.lh / 2 >= 0 && v.y + b.lh / 2 <= innerHeight;
    return v.on && inFrame && plateClear(b, v.x, v.y, b.lw / 2, b.lh / 2, v.dist);
  }
  function forecastVis(now) {
    var out = books.map(function (b) { return [titleVis(b)]; });
    if (!tweens.length) return out.map(function (o) { return FORE.map(function () { return o[0]; }); });
    var saved = tweens.map(function (tw) { return tw.target[tw.prop]; });
    for (var k = 1; k < FORE.length; k++) {
      var t = now + FORE[k];
      tweens.forEach(function (tw, j) {
        if (t < tw.t0) return;
        var from = tw.from === null ? saved[j] : tw.from, u = Math.min(1, (t - tw.t0) / tw.dur);
        tw.target[tw.prop] = u >= 1 ? tw.to : from + (tw.to - from) * tw.ease(u);
      });
      books.forEach(applyPose);
      camera.position.set(cam.px, cam.py, cam.pz); camera.lookAt(cam.lx, cam.ly, cam.lz);
      scene.updateMatrixWorld(true); camera.updateMatrixWorld();
      books.forEach(function (b, i) { out[i].push(titleVis(b)); });
    }
    tweens.forEach(function (tw, j) { tw.target[tw.prop] = saved[j]; });
    books.forEach(applyPose);
    camera.position.set(cam.px, cam.py, cam.pz); camera.lookAt(cam.lx, cam.ly, cam.lz);
    scene.updateMatrixWorld(true); camera.updateMatrixWorld();
    return out;
  }

  // arc probe (verification only): points along every DRAWN arc that are in front of the open book
  // or its sheet on screen (the ray to the arc point meets the open book only behind the point)
  window.__arcOverlap = function () {
    var ob = state.book; if (!ob) return 0;
    var parts = ob.colliders.concat([ob.endp, ob.face]).filter(function (m) { return m !== ob.arc && visibleChain(m); });
    var n = 0, p = new V3(), dir = new V3(), rc = new THREE.Raycaster();
    books.forEach(function (b) {
      if (!b.arc.visible) return;
      var g = b.arc.geometry.parameters, steps = Math.round(g.tubularSegments * b.arcS);
      for (var i = 0; i <= steps; i += 2) {
        var th = g.arc * i / g.tubularSegments;
        p.set(g.radius * Math.cos(th), g.radius * Math.sin(th), 0).applyMatrix4(b.arc.matrixWorld);
        dir.copy(p).sub(camera.position); var d = dir.length(); dir.divideScalar(d);
        rc.set(camera.position, dir);
        var hits = rc.intersectObjects(parts, false);
        if (hits.length && hits[0].distance > d) { n++; window.__arcLast = b.subject.id + " in front of " + ob.subject.id + " path " + ob.path.toFixed(2) + " arcS " + b.arcS.toFixed(2) + " cover " + ob.cover.toFixed(2) + " " + hits[0].object.userData.part; }
      }
    });
    return n;
  };

  // ---- fps counter lives in the render loop ----
  window.__fps = { mean: 60, samples: [] };
  var last = 0;
  function frame(now) {
    requestAnimationFrame(frame);
    var dt = last ? now - last : 16.7; last = now;
    var s = window.__fps.samples; s.push(dt); if (s.length > 240) s.shift();
    var sum = 0; for (var i = 0; i < s.length; i++) sum += s[i];
    window.__fps.mean = 1000 / (sum / s.length);

    updateTweens(now);
    books.forEach(applyPose);
    books.forEach(function (b) { if (b.arcDrawn !== b.arcS) { b.arcDrawn = b.arcS; setSweep(b.arc, b.arcS); setSweep(b.track, b.arcS); } });
    camera.position.set(cam.px, cam.py, cam.pz);
    camera.lookAt(cam.lx, cam.ly, cam.lz);
    scene.updateMatrixWorld(true);
    camera.updateMatrixWorld();
    if (window.__ix.on) probeIntersections();
    updateLabels(now);
    renderer.render(scene, camera);
  }

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(frame);

  // ---- read-only probes for the verification harness (no input is driven through these) ----
  window.__debug = function () {
    return {
      cam: [cam.px, cam.py, cam.pz], look: [cam.lx, cam.ly, cam.lz], open: state.book ? state.book.subject.id : null,
      books: books.map(function (b) {
        return { id: b.subject.id, path: b.path, hov: b.hov, cover: b.cover, pp: b.pp, tuck: b.tuck, phase: b.phase,
          m: b.root.matrixWorld.elements.slice() };
      })
    };
  };
  window.__coverCentre = function (id) {
    var b = books.filter(function (x) { return x.subject.id === id; })[0];
    ndc.copy(tmpA.set(0, 0, CT / 2)).applyMatrix4(b.front.matrixWorld).project(camera);
    return { x: (ndc.x * 0.5 + 0.5) * innerWidth, y: (-ndc.y * 0.5 + 0.5) * innerHeight };
  };
  // camera must move TOWARD the book it opens (decision 4): distances and direction, per book
  window.__camReport = function () {
    var idle = fitIdle();
    return books.map(function (b) {
      var o = fitOpen(b), s = new V3(b.baseX, REST_Y, b.baseZ), e = b.curve.points[b.curve.points.length - 1];
      var c0 = new V3(idle.px, idle.py, idle.pz), c1 = new V3(o.px, o.py, o.pz);
      return { id: b.subject.id, dStart: +c0.distanceTo(s).toFixed(3), dEnd: +c1.distanceTo(e).toFixed(3),
        towardDot: +c1.clone().sub(c0).normalize().dot(e.clone().sub(c0).normalize()).toFixed(3), idleCam: [idle.px, idle.py, idle.pz].map(function (v) { return +v.toFixed(2); }),
        openCam: [o.px, o.py, o.pz].map(function (v) { return +v.toFixed(2); }) };
    });
  };
  // screen rect of every visible book's meshes, for the clip check
  window.__screenRects = function () {
    return books.map(function (b) {
      var pts = cornersOf(b.colliders.filter(visibleChain).concat(b.paper.visible ? [] : []), []), x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
      pts.forEach(function (p) {
        ndc.copy(p).project(camera);
        var x = (ndc.x * 0.5 + 0.5) * innerWidth, y = (-ndc.y * 0.5 + 0.5) * innerHeight;
        x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y);
      });
      return { id: b.subject.id, x0: x0, y0: y0, x1: x1, y1: y1 };
    });
  };
  // fraction of frame rows that are empty background (render + read back in the same task)
  // contrast probe (verification only): text colour vs the darkest and lightest rendered pixel under
  // each visible label's text box. WCAG relative luminance on the sRGB canvas output.
  window.__contrast = function () {
    renderer.render(scene, camera);
    var gl = renderer.getContext(), W0 = gl.drawingBufferWidth, H0 = gl.drawingBufferHeight, pr = W0 / innerWidth;
    var px = new Uint8Array(W0 * H0 * 4); gl.readPixels(0, 0, W0, H0, gl.RGBA, gl.UNSIGNED_BYTE, px);
    function lin(c) { c /= 255; return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); }
    function lum(r, g, b) { return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b); }
    var out = {};
    document.querySelectorAll('.lbl').forEach(function (e) {
      if (e.hidden || e.classList.contains('gone') || !e.firstChild) return;
      var rg = document.createRange(); rg.selectNodeContents(e); var r = rg.getBoundingClientRect();
      var m = getComputedStyle(e).color.match(/\d+(\.\d+)?/g).map(Number), Lf = lum(m[0], m[1], m[2]);
      var bg = (getComputedStyle(e).backgroundColor.match(/[\d.]+/g) || [0, 0, 0, 0]).map(Number), ba = bg.length > 3 ? bg[3] : 1;
      if (getComputedStyle(e).backgroundColor === 'rgba(0, 0, 0, 0)') ba = 0;
      var lo = 1, hi = 0;
      for (var y = Math.max(0, Math.floor(r.top * pr)); y < Math.min(H0, Math.ceil(r.bottom * pr)); y++)
        for (var x = Math.max(0, Math.floor(r.left * pr)); x < Math.min(W0, Math.ceil(r.right * pr)); x++) {
          var k = ((H0 - 1 - y) * W0 + x) * 4, L = lum(ba * bg[0] + (1 - ba) * px[k], ba * bg[1] + (1 - ba) * px[k + 1], ba * bg[2] + (1 - ba) * px[k + 2]);
          if (L < lo) lo = L; if (L > hi) hi = L;
        }
      var c = function (L) { return (Math.max(L, Lf) + 0.05) / (Math.min(L, Lf) + 0.05); };
      out[e.dataset.id || e.id] = { fg: getComputedStyle(e).color, vsDark: +c(lo).toFixed(2), vsLight: +c(hi).toFixed(2), min: +Math.min(c(lo), c(hi)).toFixed(2), fs: parseFloat(getComputedStyle(e).fontSize) };
    });
    return out;
  };
  // peek probe: height of the sheet above the head of the page block, as a fraction of page height,
  // tucked (pp 0) and slid out (pp 1); plus the seal centre's height above the head
  window.__peek = function (id) {
    var b = books.filter(function (o) { return o.subject.id === id; })[0], head = (H - SQ) / 2, r = {};
    [0, 1].forEach(function (pp) {
      withPose(b, { tuck: 1, pp: pp, ppHover: 0, cover: OPEN_ANGLE }, function () {
        var inv = new THREE.Matrix4().copy(b.root.matrixWorld).invert(), p = new V3();
        var top = p.set(0, PH / 2, 0).applyMatrix4(b.sheet.matrixWorld).applyMatrix4(inv).y;
        var sp = new V3().setFromMatrixPosition(b.seal.matrixWorld).applyMatrix4(inv);
        r['pp' + pp] = { fracAboveHead: +(Math.max(0, top - head) / H).toFixed(3), sealAboveHead: +(sp.y - head).toFixed(4) };
      });
    });
    return r;
  };
  // page-colour probe: mean rendered sRGB of a 30x16 px patch 30 px below the Lectures and Questions labels
  window.__pageRGB = function () {
    renderer.render(scene, camera);
    var gl = renderer.getContext(), W0 = gl.drawingBufferWidth, H0 = gl.drawingBufferHeight, pr = W0 / innerWidth;
    var px = new Uint8Array(W0 * H0 * 4); gl.readPixels(0, 0, W0, H0, gl.RGBA, gl.UNSIGNED_BYTE, px);
    var out = {};
    [lectBtn, questBtn].forEach(function (e) {
      var r = e.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2 + 30, s = [0, 0, 0], n = 0;
      for (var y = Math.floor((cy - 8) * pr); y < (cy + 8) * pr; y++) for (var x = Math.floor((cx - 15) * pr); x < (cx + 15) * pr; x++) {
        var k = ((H0 - 1 - y) * W0 + x) * 4; s[0] += px[k]; s[1] += px[k + 1]; s[2] += px[k + 2]; n++;
      }
      out[e.id] = s.map(function (v) { return Math.round(v / n); });
    });
    return out;
  };
  window.__band = function () {
    renderer.render(scene, camera);
    var gl = renderer.getContext(), w = gl.drawingBufferWidth, h = gl.drawingBufferHeight, px = new Uint8Array(w * h * 4);
    gl.readPixels(0, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, px);
    var empty = 0, top = 0, bottom = 0, seenTop = false;
    var rows = [];
    for (var y = 0; y < h; y++) {
      var n = 0;
      for (var x = 0; x < w; x++) {
        var k = (y * w + x) * 4;
        if (Math.abs(px[k] - 18) < 10 && Math.abs(px[k + 1] - 12) < 10 && Math.abs(px[k + 2] - 10) < 10) n++;
      }
      rows.push(n / w >= 0.9);
    }
    rows.reverse(); // readPixels is bottom-up
    rows.forEach(function (e) { if (e) empty++; });
    for (var i = 0; i < rows.length && rows[i]; i++) top++;
    for (var j = rows.length - 1; j >= 0 && rows[j]; j--) bottom++;
    return { emptyRows: empty / h, top: top / h, bottom: bottom / h };
  };
}());
