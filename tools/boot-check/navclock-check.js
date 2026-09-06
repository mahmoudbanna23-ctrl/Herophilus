/* Does the study-session clock in the left rail keep ticking when you are NOT
 * on the session view?
 *
 *   node tools/boot-check/navclock-check.js            expect TICKS
 *   node tools/boot-check/navclock-check.js --nofix    expect FROZEN
 *
 * The bug this exists for: renderNav() draws that clock once per navigation,
 * and the one-second tick only ever repainted the Clepsydra and the session
 * screen (paintSessionLive() returns immediately unless view.name==='session').
 * So the rail showed whatever the time was at the last render. It looked
 * intermittent because answering a question forces a render, which hides it.
 *
 * The --nofix run is the point of the file. It strips paintNavClock() back out
 * of the tick in the copied app and asserts the clock then stays frozen: a
 * check that has never been seen failing is not evidence that it can fail.
 *
 * Three things had to be true before this measured anything real, each one a
 * wasted run otherwise:
 *
 *  - The parse-time showGate stub does NOT survive. The app's own `function
 *    showGate` declaration replaces it, so boot() calls the real gate, which
 *    stops the session tick on purpose (index.html, showGate). Re-stub it
 *    AFTER the profile is entered or the test races boot and reports frozen.
 *  - Drive the clock past a live comparison, not against a constant: the probe
 *    reports phaseLeft() at each read as well as the DOM text, so a stopped
 *    virtual clock is distinguishable from a stopped paint.
 *  - A plain control setInterval is counted alongside, because "the DOM did
 *    not change" is otherwise indistinguishable from "no timer ran at all"
 *    under --virtual-time-budget.
 */
'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..', '..');
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const browser = fs.existsSync(CHROME) ? CHROME : EDGE;
const NOFIX = process.argv.includes('--nofix');

// A double dash anywhere in the workspace path kills both browsers.
const WORK = path.join(os.tmpdir(), 'herophilus_navclock');
if (WORK.includes('--')) {
  console.error('REFUSING: workspace path contains "--" — Chrome dies with "Multiple targets are not supported".');
  process.exit(1);
}

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

const TICK_FIXED = 'clepPaint(); paintNavClock(); paintSessionLive();';
const TICK_BROKEN = 'clepPaint(); paintSessionLive();';
if (NOFIX) {
  if (!html.includes(TICK_FIXED)) {
    console.error('--nofix: the fixed tick line is not in index.html, so there is nothing to un-fix.');
    process.exit(1);
  }
  html = html.replace(TICK_FIXED, TICK_BROKEN);
}

const probe = [
  '<script>',
  'window.__errs=[];',
  'window.addEventListener("error",function(e){window.__errs.push("ERROR: "+(e.message||"")+" @ "+(e.lineno||0));},true);',
  'try{localStorage.setItem("wardround.profiles",JSON.stringify([{id:"boot",name:"Boot",av:0,col:0}]));}catch(e){}',
  '</script>',
  '<style>*,*::before,*::after{animation:none!important;transition:none!important}.reveal{opacity:1!important;transform:none!important}</style>',
].join('\n');
const headAt = html.indexOf('<head>');
if (headAt < 0) { console.error('no <head> in index.html'); process.exit(1); }
html = html.slice(0, headAt + 6) + '\n' + probe + '\n' + html.slice(headAt + 6);

const report = [
  '<script>',
  'function nc(){var n=document.getElementById("navSessClock");return n?n.textContent.trim():"(no node)"}',
  'window.addEventListener("load",function(){setTimeout(function(){',
  '  Promise.resolve(enterProfile({id:"boot",name:"Boot",av:0,col:0})).then(function(){',
  '    var r={};',
  // boot() reaches the real showGate, which stops the session tick by design.
  // Stub it now that the profile is in, so the test is not racing the gate.
  '    window.showGate=function(){};',
  '    window.__fires=0; setInterval(function(){window.__fires++},1000);',
  // Start the session by hand rather than through startSession(), which also
  // opens a quiz. The bug is about every view OTHER than the session, so park
  // on home deliberately and stay there.
  '    S.sess={startedAt:Date.now(),phase:"focus",phaseStart:Date.now(),lost:0,focusMs:0,',
  '      cycle:1,plan:{focus:25,brk:5,cycles:4},scope:"all",paused:false,pausedAt:0};',
  '    sessStartTick();',
  '    go({name:"home"});',
  '    r.view=view.name;',
  '    r.d0=Date.now(); r.p0=clMMSS(phaseLeft()); r.t0=nc();',
  '    setTimeout(function(){',
  '      r.d1=Date.now()-r.d0; r.p1=clMMSS(phaseLeft()); r.t1=nc();',
  '      setTimeout(function(){',
  '        r.d2=Date.now()-r.d0; r.p2=clMMSS(phaseLeft()); r.t2=nc();',
  '        r.viewEnd=view.name; r.fires=window.__fires; r.tickArmed=!!CLEP.tickT;',
  '        r.errs=window.__errs.slice(0,10);',
  '        document.title="NAVCLOCK "+JSON.stringify(r);',
  '      },4000);',
  '    },4000);',
  '  });',
  '},1200);});',
  '</script>',
].join('\n');
html = html.replace('</body>', report + '\n</body>');
fs.writeFileSync(INDEX, html, 'utf8');

const url = 'file:///' + INDEX.replace(/\\/g, '/');
let dom = '';
for (let attempt = 1; attempt <= 3; attempt++) {
  try {
    dom = execFileSync(browser, [
      '--headless=new', '--disable-gpu', '--no-sandbox', '--no-first-run',
      '--disable-extensions', '--allow-file-access-from-files',
      '--virtual-time-budget=30000', '--user-data-dir=' + path.join(WORK, 'chrome_profile_' + attempt),
      '--dump-dom', url,
    ], { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024, timeout: 180000 });
  } catch (e) { dom = e.stdout || ''; }
  if (dom.includes('NAVCLOCK')) break;
  console.error('attempt ' + attempt + ': no report in DOM — retrying');
}
const m = dom.match(/NAVCLOCK (\{.*?\})<\/title>/s);
if (!m) { console.error('NO REPORT after 3 attempts. dom ' + dom.length + ' bytes'); process.exit(1); }
const r = JSON.parse(m[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>'));

console.log((NOFIX ? 'fix removed  ' : 'current file ') + '  view: ' + r.view + ' -> ' + r.viewEnd);
console.log('rail clock (DOM) : ' + r.t0 + '  ' + r.t1 + '  ' + r.t2);
console.log('phaseLeft (live) : ' + r.p0 + '  ' + r.p1 + '  ' + r.p2);
console.log('ms elapsed       : 0  ' + r.d1 + '  ' + r.d2);
console.log('control timer fires in 8 s: ' + r.fires + '   session tick still armed: ' + r.tickArmed);
(r.errs || []).forEach(e => console.log('  ! ' + e));

// The test is only meaningful if time moved and timers ran at all.
if (r.p0 === r.p2) { console.log('INVALID: the session clock itself never moved'); process.exit(1); }
if (!r.fires) { console.log('INVALID: no timer fired under virtual time'); process.exit(1); }
if (r.viewEnd === 'session') { console.log('INVALID: the test drifted onto the session view'); process.exit(1); }

const moved = (r.t0 !== r.t1) && (r.t1 !== r.t2);
if (NOFIX) {
  console.log(moved ? 'UNEXPECTED: it ticked with the fix removed' : 'FROZEN, as it must be with the fix removed');
  process.exit(moved ? 1 : 0);
}
console.log(moved ? 'TICKS off the session view' : 'STILL FROZEN');
process.exit(moved ? 0 : 1);
