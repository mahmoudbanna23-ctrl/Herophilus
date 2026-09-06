/* mobile-check.js — does the app fit on a phone?
 *
 * Walks every view at three viewport widths and reports horizontal overflow,
 * which is the mobile failure that actually reaches students: a page that
 * scrolls sideways, a row that pushes past the screen edge, a tap target too
 * small to hit. It reports numbers, not pictures, because a number can be
 * checked in a diff and a screenshot cannot.
 *
 * Numbers are the first pass, never the whole test. Anything this flags gets
 * looked at with --shot, because no numeric check has ever caught a crop and
 * none of them catches ugly either.
 *
 * ⚠️ WHY THIS DRIVES CHROME OVER THE DEVTOOLS PROTOCOL INSTEAD OF USING
 * --window-size + --dump-dom, WHICH IS WHAT EVERY OTHER TOOL HERE USES:
 * measured 2026-09-06, headless Chrome on this machine has a hard minimum
 * window width of about 504px. --window-size=390,844 and --window-size=360,780
 * BOTH produce a 504px viewport, and --hide-scrollbars does not move that
 * number on a page with nothing to scroll. The first version of this file
 * therefore tested 504px twice and printed the rows as "360x800" and
 * "390x844". Every "fits" on those two rows was meaningless.
 * Emulation.setDeviceMetricsOverride sets the real layout viewport, so 360 is
 * 360; the run prints the measured width next to the requested one so a repeat
 * of that failure is visible in the output rather than silent.
 *
 * What it does NOT check: horizontal scrolling INSIDE a box that is itself a
 * scroll container. The test here is whether the PAGE pans sideways, and a
 * sideways-scrolling table inside an overflow-x:auto wrapper is a deliberate
 * pattern, not that failure.
 *
 * Harness rules inherited from boot-check.js, each one a wasted run otherwise:
 *  - Copy the WHOLE app/ to a work dir; the data files must sit beside index.
 *  - ⚠️ The Chrome --user-data-dir must not sit under a path containing "--".
 *    The session scratchpad path does, and both browsers die there with
 *    "Multiple targets are not supported".
 *  - Stub showGate at parse time AND keep it stubbed — the app assigns its own.
 *  - Nothing renders until enterProfile() runs. Without it every count is zero,
 *    which reads exactly like a broken app.
 *  - Kill animation and force .reveal visible; IntersectionObserver never fires
 *    under virtual time, so cards stay at opacity 0 and measure as collapsed.
 *
 *   node tools/boot-check/mobile-check.js            all widths, numbers only
 *   node tools/boot-check/mobile-check.js --shot     also write PNGs
 *   node tools/boot-check/mobile-check.js --selftest prove it can report failure
 */
const { spawn } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const browser = fs.existsSync(CHROME) ? CHROME : EDGE;
const SHOT = process.argv.includes('--shot');
const SELFTEST = process.argv.includes('--selftest');

if (typeof WebSocket === 'undefined') {
  console.error('REFUSING: this Node has no global WebSocket, so it cannot speak the DevTools protocol. Node 22+ is required.');
  process.exit(1);
}

const WORK = path.join(os.tmpdir(), 'herophilus_mobile');
if (WORK.includes('--')) {
  console.error('REFUSING: work path contains "--" — Chrome dies with "Multiple targets are not supported".');
  process.exit(1);
}

/* The three that matter: the narrowest phone still in real use, a common
   Android, and portrait tablet where the rail starts to reappear. */
const VIEWPORTS = [
  { name: '360x800', w: 360, h: 800 },
  { name: '390x844', w: 390, h: 844 },
  { name: '768x1024', w: 768, h: 1024 },
];

const VIEWS = ['home', 'module', 'quiz', 'review', 'flagged', 'theory', 'schedule', 'session', 'mock', 'moved'];

const sleep = ms => new Promise(r => setTimeout(r, ms));
function rmrf(p) { if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true }); }
function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, e.name), d = path.join(dst, e.name);
    if (e.isDirectory()) copyDir(s, d); else fs.copyFileSync(s, d);
  }
}

rmrf(WORK);
const APP = path.join(WORK, 'app');
copyDir(path.join(ROOT, 'app'), APP);

const INDEX = path.join(APP, 'index.html');
let html = fs.readFileSync(INDEX, 'utf8');

const probe = [
  '<script>',
  'window.__errs=[];',
  'window.addEventListener("error",function(e){window.__errs.push("ERROR: "+(e.message||"")+" @ "+(e.filename||"")+":"+(e.lineno||0));},true);',
  'Object.defineProperty(window,"showGate",{configurable:true,get:function(){return function(){};},set:function(){}});',
  'try{localStorage.setItem("wardround.profiles",JSON.stringify([{id:"mob",name:"Mob","av":0,"col":0}]));}catch(e){}',
  '</script>',
  '<style>*,*::before,*::after{animation:none!important;transition:none!important}.reveal{opacity:1!important;transform:none!important}</style>',
].join('\n');
const headAt = html.indexOf('<head>');
if (headAt < 0) { console.error('no <head> in index.html'); process.exit(1); }
html = html.slice(0, headAt + 6) + '\n' + probe + '\n' + html.slice(headAt + 6);

/* SELFTEST puts a real, in-flow, 2000px-wide element on the page. Two things
   about that sentence are load-bearing, and each one was a failed selftest:
   - a REAL element, not the ::after pseudo the first version used. A pseudo
     widens scrollWidth but querySelectorAll never sees it, so that version
     exercised half the tool and left widest() untested.
   - on BODY, not inside #page. The app re-renders #page on every go(), so an
     element parked there is gone before the walk starts and the selftest
     reported the tool blind when it was the bait that had vanished. */
const SELFTEST_ID = '__selftest_wide';
const selftestScript = SELFTEST
  ? '<script>window.addEventListener("load",function(){var d=document.createElement("div");'
    + 'd.id="' + SELFTEST_ID + '";d.style.cssText="width:2000px;height:4px";'
    + 'document.body.appendChild(d);});<\/script>'
  : '';

const report = [
  '<script>',
  'window.addEventListener("load",function(){setTimeout(function(){',
  '  var p=Promise.resolve();',
  '  try{p=enterProfile({id:"mob",name:"Mob",av:0,col:0});}catch(e){window.__errs.push("enterProfile THREW: "+e.message);}',
  '  Promise.resolve(p).catch(function(e){window.__errs.push("enterProfile REJECTED: "+e);}).then(function(){setTimeout(walk,700);});',
  '},1200);});',
  /* An element only pushes the DOCUMENT wider if nothing between it and the
     root clips or scrolls it, and if it is not taken out of the flow by
     position:fixed. Without this the ambient decorative orbs — fixed, and
     clipped by their own container — were named as the widest element on every
     view, including every view that fit. Same signature as the six probe faults
     in boot-check: a confident answer from a healthy app. */
  'function contributes(el){',
  '  var n=el;',
  '  while(n&&n!==document.documentElement){',
  '    var cs=getComputedStyle(n);',
  '    if(cs.position==="fixed") return false;',
  '    var par=n.parentElement;',
  '    if(par&&par!==document.documentElement&&getComputedStyle(par).overflowX!=="visible") return false;',
  '    n=par;',
  '  }',
  '  return true;',
  '}',
  'function widest(){',
  /* Report the offender by name, not just that something overflowed — a bare
     "the page is 40px too wide" costs an afternoon of bisecting by hand. */
  '  var vw=document.documentElement.clientWidth, worst=null, wmax=0;',
  '  var all=document.querySelectorAll("body *");',
  '  for(var i=0;i<all.length;i++){',
  '    var el=all[i]; if(!el.getClientRects().length) continue;',
  '    var r=el.getBoundingClientRect();',
  '    if(r.right>vw+1 && r.right-vw>wmax && contributes(el)){ wmax=r.right-vw;',
  '      worst=(el.tagName.toLowerCase())+(el.id?"#"+el.id:"")+(el.className&&typeof el.className==="string"?"."+el.className.trim().split(/\\s+/).join("."):"")+" +"+Math.round(r.right-vw)+"px";',
  '    }',
  '  }',
  '  return worst;',
  '}',
  /* scrollWidth > clientWidth IS NOT THE TEST, and believing it was cost a
     whole run: with a classic vertical scrollbar Chrome reports
     documentElement.scrollWidth as the full 768 while clientWidth is 753, so
     five views were called OVERFLOWS at the tablet width and none of them
     overflowed. The scrollbar gutter is not sideways scroll. Ask the page the
     question directly instead — try to pan right and see whether it moves. */
  'function panX(){',
  '  var y=window.scrollY, x0=window.scrollX;',
  '  window.scrollTo(99999,y); var x=window.scrollX; window.scrollTo(x0,y);',
  '  return Math.round(x);',
  '}',
  'function tinyTaps(){',
  /* 44px is the long-standing minimum comfortable touch target. Count, don't
     fail on it — a few small controls are a judgement call, not a defect. */
  '  var n=0, els=document.querySelectorAll("button,a,.opt,.ch-row,.conf-b");',
  '  for(var i=0;i<els.length;i++){ var r=els[i].getBoundingClientRect();',
  '    if(r.width>0&&r.height>0&&r.height<44) n++; }',
  '  return n;',
  '}',
  'function walk(){',
  '  var out={vw:document.documentElement.clientWidth,iw:window.innerWidth,views:{}};',
  '  var names=' + JSON.stringify(VIEWS) + ';',
  '  var firstMod=(typeof MODULES!=="undefined"&&MODULES.length)?MODULES[0].id:null;',
  '  var someQ=(typeof QUESTIONS!=="undefined"&&QUESTIONS.length)?QUESTIONS[0]:null;',
  '  for(var i=0;i<names.length;i++){',
  '    var n=names[i];',
  '    try{',
  '      if(n==="module"&&firstMod) go({name:"module",id:firstMod});',
  '      else if(n==="quiz"&&someQ){ startQuiz([someQ.id],"Probe"); }',
  '      else go({name:n});',
  '      out.views[n]={scrollW:document.documentElement.scrollWidth,pan:panX(),over:widest(),tiny:tinyTaps()};',
  '    }catch(e){ out.views[n]="THREW "+e.message; }',
  '  }',
  '  try{go({name:"home"});}catch(e){}',
  '  out.errs=window.__errs.slice(0,20);',
  '  window.__mobileReport=out;',
  '  document.title="MOBILEREPORT";',
  '}',
  '</script>',
].join('\n');
html = html.replace('</body>', selftestScript + report + '\n</body>');
fs.writeFileSync(INDEX, html, 'utf8');

const url = 'file:///' + INDEX.replace(/\\/g, '/');

/* ---- the smallest DevTools client that does this job ------------------- */

function connect(ws) {
  const pending = new Map();
  let nextId = 0;
  ws.addEventListener('message', ev => {
    let m; try { m = JSON.parse(ev.data); } catch (e) { return; }
    if (m.id && pending.has(m.id)) {
      const { res, rej } = pending.get(m.id);
      pending.delete(m.id);
      if (m.error) rej(new Error(m.method + ': ' + m.error.message)); else res(m.result);
    }
  });
  return (method, params) => new Promise((res, rej) => {
    const id = ++nextId;
    pending.set(id, { res, rej });
    ws.send(JSON.stringify({ id, method, params: params || {} }));
  });
}

async function launch(udd) {
  const proc = spawn(browser, [
    '--headless=new', '--disable-gpu', '--no-sandbox', '--no-first-run',
    '--disable-extensions', '--allow-file-access-from-files',
    '--remote-debugging-port=0', '--hide-scrollbars', '--user-data-dir=' + udd,
    'about:blank',
  ], { stdio: 'ignore' });

  const portFile = path.join(udd, 'DevToolsActivePort');
  let port = 0;
  for (let i = 0; i < 60 && !port; i++) {
    await sleep(250);
    try { port = parseInt(fs.readFileSync(portFile, 'utf8').split('\n')[0], 10) || 0; } catch (e) { /* not up yet */ }
  }
  if (!port) { try { proc.kill(); } catch (e) {} throw new Error('Chrome never wrote DevToolsActivePort'); }

  let target = null;
  for (let i = 0; i < 40 && !target; i++) {
    try {
      const list = await (await fetch('http://127.0.0.1:' + port + '/json/list')).json();
      target = list.find(t => t.type === 'page' && t.webSocketDebuggerUrl);
    } catch (e) { /* still starting */ }
    if (!target) await sleep(250);
  }
  if (!target) { try { proc.kill(); } catch (e) {} throw new Error('no page target on the debugging port'); }

  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((res, rej) => {
    ws.addEventListener('open', res, { once: true });
    ws.addEventListener('error', () => rej(new Error('debugger socket refused')), { once: true });
  });
  return { proc, ws, send: connect(ws) };
}

async function measure(send, vp) {
  await send('Page.enable');
  await send('Runtime.enable');
  /* THIS is the line the whole rewrite exists for. --window-size cannot go
     below ~504px on Windows; this sets the layout viewport directly. */
  await send('Emulation.setDeviceMetricsOverride', {
    width: vp.w, height: vp.h, deviceScaleFactor: 1, mobile: vp.w < 768,
  });
  await send('Page.navigate', { url: url });

  for (let i = 0; i < 120; i++) {
    await sleep(500);
    let r;
    try {
      r = await send('Runtime.evaluate', { expression: 'window.__mobileReport||null', returnByValue: true });
    } catch (e) { continue; }
    const v = r && r.result && r.result.value;
    if (v && v.views) return v;
  }
  return null;
}

(async () => {
  let bad = 0;
  let sawSelftestElement = false;
  let session = null;

  for (const vp of VIEWPORTS) {
    let rep = null, why = '';
    /* The silent ~1-in-3 launch failure is real; retry rather than report a
       browser problem as an app problem. */
    for (let attempt = 1; attempt <= 3 && !rep; attempt++) {
      try {
        if (!session) session = await launch(path.join(WORK, 'chrome_profile_' + attempt + '_' + Date.now()));
        rep = await measure(session.send, vp);
        if (!rep) why = 'the page never produced a report';
      } catch (e) {
        why = e.message;
        if (session) { try { session.proc.kill(); } catch (x) {} session = null; }
      }
    }

    if (!rep) {
      console.log('\n' + vp.name + '  NO REPORT  ' + why);
      bad++;
      continue;
    }

    /* Verify against clientWidth, which is the LAYOUT viewport and the width
       every media query resolves against. Not innerWidth: under mobile
       emulation a page wider than the screen is zoomed out to fit, and
       innerWidth then reports the visual viewport — 1440 for a 360px layout,
       which reads exactly like the emulation having failed. --hide-scrollbars
       is on so the two agree on a page that scrolls vertically. */
    const got = rep.vw;
    const honest = got === vp.w ? '' : '   REQUESTED ' + vp.w + ', GOT ' + got;
    if (got !== vp.w) bad++;
    console.log('\n' + vp.name + '  (layout viewport ' + got + 'px, visual ' + (rep.iw || got) + 'px)' + honest);

    for (const [name, v] of Object.entries(rep.views)) {
      if (typeof v === 'string') { console.log('  ' + name.padEnd(10) + v); bad++; continue; }
      const overflow = v.pan > 1;
      if (overflow) bad++;
      if (v.over && v.over.indexOf('#' + SELFTEST_ID) >= 0) sawSelftestElement = true;
      console.log('  ' + name.padEnd(10)
        + (overflow ? 'SCROLLS SIDEWAYS ' + v.pan + 'px  (scrollWidth ' + v.scrollW + ')' : 'fits')
        + (v.over ? '   widest: ' + v.over : '')
        + (v.tiny ? '   ' + v.tiny + ' controls under 44px' : ''));
    }
    if (rep.errs && rep.errs.length) { console.log('  console: ' + rep.errs.join(' | ')); bad++; }

    if (SHOT) {
      const png = path.join(WORK, 'home_' + vp.name + '.png');
      try {
        const s = await session.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true });
        fs.writeFileSync(png, Buffer.from(s.data, 'base64'));
        console.log('  shot: ' + png);
      } catch (e) { console.log('  shot FAILED: ' + e.message); }
    }
  }

  if (session) { try { session.proc.kill(); } catch (e) {} }

  console.log('\n' + (bad === 0 ? 'PASS — no view overflows at any width' : bad + ' finding(s)'));

  if (SELFTEST) {
    /* Two things must break, named, for the same reason lock-check names its
       must-break list: a verdict of "something failed" lets a blind check hide
       behind a working one. */
    const overflowReported = bad > 0;
    console.log('\n  overflow reported            ' + (overflowReported ? 'broke' : 'BLIND'));
    console.log('  widest() named the element   ' + (sawSelftestElement ? 'broke' : 'BLIND'));
    const ok = overflowReported && sawSelftestElement;
    console.log('\n' + (ok
      ? 'SELFTEST OK — a real 2000px element is both counted and named.'
      : 'SELFTEST FAILED — this probe proves nothing about the checks marked BLIND.'));
    process.exit(ok ? 0 : 1);
  }
  process.exit(bad === 0 ? 0 : 1);
})().catch(e => { console.error('mobile-check crashed: ' + (e && e.stack || e)); process.exit(1); });
