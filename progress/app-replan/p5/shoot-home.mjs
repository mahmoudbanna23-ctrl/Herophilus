/* P5 home shots + D3 matched trace, built from tools/boot-check/boot-check.js
 * (copy app/, stub gate, seed profile, enter it) and
 * progress/app-replan/mocks/shoot.mjs (raw-websocket CDP driver).
 *
 * node "progress/app-replan/p5/shoot-home.mjs" --work=D:/tmp/p5shots
 *
 * Harness traps this respects (project CLAUDE.md §7):
 *  - whole app/ copied, not a partial tree
 *  - showGate stubbed at parse time
 *  - profile seeded, enterProfile() called before anything is measured
 *  - --user-data-dir and the app copy both refuse a path containing "--"
 *  - one Chrome at a time, fresh profile dir each navigation
 */
import { spawn } from 'node:child_process';
import { readFile, writeFile, mkdir, rm, cp } from 'node:fs/promises';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve, dirname } from 'node:path';
import { pathToFileURL } from 'node:url';
import net from 'node:net';
import { randomBytes } from 'node:crypto';

const ROOT = resolve(import.meta.dirname, '..', '..', '..');
const argWork = process.argv.find(a => a.startsWith('--work='));
const WORK = argWork ? resolve(argWork.slice(7)) : join(tmpdir(), 'p5shots');
if (WORK.includes('--')) { console.error('REFUSING: work path contains "--".'); process.exit(1); }

const SHOTS_DIR = join(ROOT, 'progress', 'app-replan', 'p5', 'shots');
const TRACE_MD = join(ROOT, 'progress', 'app-replan', 'p5', 'trace-d3.md');

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const browser = existsSync(CHROME) ? CHROME : EDGE;

const sleep = ms => new Promise(r => setTimeout(r, ms));

function rmrf(p) { if (existsSync(p)) { try { require('fs').rmSync(p, { recursive: true, force: true }); } catch {} } }

async function buildApp() {
  await rm(WORK, { recursive: true, force: true }).catch(() => {});
  await mkdir(WORK, { recursive: true });
  const APP = join(WORK, 'app');
  await cp(join(ROOT, 'app'), APP, { recursive: true });

  const INDEX = join(APP, 'index.html');
  let html = readFileSync(INDEX, 'utf8');

  // Mirrors tools/boot-check/boot-check.js's init exactly (same globals: S,
  // save, enterProfile, finishProfileEntry, activateTerm, render, TERMS,
  // termEntryPending), plus a resumeByChapter seed hook and a ready flag.
  const probe = [
    '<script>',
    'window.__errs=[];',
    'window.addEventListener("error",function(e){window.__errs.push("ERROR: "+(e.message||"")+" @ "+(e.filename||"")+":"+(e.lineno||0));},true);',
    'Object.defineProperty(window,"showGate",{configurable:true,get:function(){return function(){};},set:function(){}});',
    'try{localStorage.setItem("wardround.profiles",JSON.stringify([{id:"boot",name:"Boot","av":0,"col":0}]));}catch(e){}',
    '</script>',
  ].join('\n');
  const headAt = html.indexOf('<head>');
  html = html.slice(0, headAt + 6) + '\n' + probe + '\n' + html.slice(headAt + 6);

  const init = [
    '<script>',
    'window.__ready=false;',
    'window.__seedRecent=function(cid){',
    '  try{S.resumeByChapter[cid]={at:Date.now(),finished:false};save();',
    '    if(typeof render==="function")render();return "ok";}catch(e){return "THREW "+e.message;}',
    '};',
    'window.addEventListener("load",function(){setTimeout(function(){',
    '  var p=Promise.resolve();',
    '  try{p=enterProfile({id:"boot",name:"Boot",av:0,col:0});}catch(e){window.__errs.push("enterProfile THREW: "+e.message);}',
    '  Promise.resolve(p).catch(function(e){window.__errs.push("enterProfile REJECTED: "+e);}).then(function(){',
    '    try{',
    '      var T=null;',
    '      for(var i=0;i<TERMS.length;i++){if(TERMS[i]&&TERMS[i].id==="y4s2"){T=TERMS[i];break;}}',
    '      if(T){',
    '        var prev=null; try{if(S&&S.term)prev=S.term;}catch(_){}',
    '        S.term={id:T.id,at:Math.max(Date.now(),prev?prev.at+1:0)};',
    '        save();',
    '        if(typeof termEntryPending!=="undefined"&&termEntryPending&&typeof finishProfileEntry==="function"){finishProfileEntry();}',
    '        else{if(typeof activateTerm==="function")activateTerm(T.id);if(typeof render==="function")render();}',
    '      }',
    '    }catch(e){window.__errs.push("term seed THREW: "+e.message);}',
    '    setTimeout(function(){window.__ready=true;},600);',
    '  });',
    '},1200);});',
    '</script>',
  ].join('\n');
  html = html.replace('</body>', init + '\n</body>');
  writeFileSync(INDEX, html, 'utf8');
  return INDEX;
}

async function waitPort(profileDir) {
  const p = join(profileDir, 'DevToolsActivePort');
  for (let i = 0; i < 150; i++) {
    if (existsSync(p)) return (await readFile(p, 'utf8')).split(/\r?\n/)[0];
    await sleep(100);
  }
  throw new Error('Chrome did not expose CDP');
}

function cdpConnect(wsUrl) {
  const { hostname, port, pathname } = new URL(wsUrl);
  const socket = net.createConnection({ host: hostname, port: Number(port) });
  const key = randomBytes(16).toString('base64');
  let ready = false, buffer = Buffer.alloc(0), id = 0;
  const pending = new Map();
  const events = [];
  const sendFrame = text => {
    const data = Buffer.from(text);
    const mask = randomBytes(4);
    const head = data.length < 126 ? Buffer.from([0x81, 0x80 | data.length]) : Buffer.from([0x81, 0xfe, data.length >> 8, data.length & 255]);
    for (let i = 0; i < data.length; i++) data[i] ^= mask[i % 4];
    socket.write(Buffer.concat([head, mask, data]));
  };
  return new Promise((resolveP, rejectP) => {
    socket.once('connect', () => socket.write(
      `GET ${pathname} HTTP/1.1\r\nHost: ${hostname}:${port}\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Key: ${key}\r\nSec-WebSocket-Version: 13\r\nOrigin: http://localhost\r\n\r\n`
    ));
    socket.on('error', rejectP);
    socket.on('data', data => {
      buffer = Buffer.concat([buffer, data]);
      if (!ready) {
        const end = buffer.indexOf('\r\n\r\n');
        if (end < 0) return;
        if (!buffer.subarray(0, end).toString().includes(' 101 ')) return rejectP(new Error(buffer.subarray(0, end).toString()));
        buffer = buffer.subarray(end + 4);
        ready = true;
        resolveP({
          send(method, params = {}) {
            return new Promise((res, rej) => {
              const callId = ++id;
              pending.set(callId, { resolve: res, reject: rej });
              sendFrame(JSON.stringify({ id: callId, method, params }));
            });
          },
          close() { socket.end(); },
        });
      }
      while (buffer.length >= 2) {
        const code = buffer[1] & 127;
        const bytes = code < 126 ? 0 : code === 126 ? 2 : 8;
        if (buffer.length < 2 + bytes) return;
        const length = code < 126 ? code : code === 126 ? buffer.readUInt16BE(2) : Number(buffer.readBigUInt64BE(2));
        if (buffer.length < 2 + bytes + length) return;
        const msg = JSON.parse(buffer.subarray(2 + bytes, 2 + bytes + length).toString());
        buffer = buffer.subarray(2 + bytes + length);
        if (msg.id) {
          const call = pending.get(msg.id);
          pending.delete(msg.id);
          if (call) { msg.error ? call.reject(msg.error) : call.resolve(msg.result); }
        } else events.push(msg);
      }
    });
  });
}

async function evalExpr(c, expression, awaitPromise = false) {
  const r = await c.send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise });
  if (r.exceptionDetails) throw new Error(JSON.stringify(r.exceptionDetails));
  return r.result.value;
}

async function waitReady(c, timeoutMs = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const v = await evalExpr(c, 'window.__ready===true');
    if (v) return;
    await sleep(300);
  }
  throw new Error('app never became ready');
}

const SIZES = [
  { name: '1280x800', w: 1280, h: 800 },
  { name: '820x1180', w: 820, h: 1180 },
  { name: '1180x820', w: 1180, h: 820 },
  { name: '390x844', w: 390, h: 844 },
];

async function measureAndShoot(c, size, label) {
  await c.send('Emulation.setDeviceMetricsOverride', { width: size.w, height: size.h, deviceScaleFactor: 1, mobile: size.w < 600 });
  await sleep(250);
  const info = await evalExpr(c, `(()=>{
    const cand=document.querySelector('[data-desk-candle]');
    let visible=false;
    if(cand){const r=cand.getBoundingClientRect();const cs=getComputedStyle(cand);
      visible = cs.display!=='none' && cs.visibility!=='hidden' && r.width>0 && r.height>0;}
    return {scrollWidth:document.documentElement.scrollWidth, viewportWidth:window.innerWidth, candleVisible:visible};
  })()`);
  const shot = await c.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  await mkdir(SHOTS_DIR, { recursive: true });
  await writeFile(join(SHOTS_DIR, `home-${size.name}-${label}.png`), Buffer.from(shot.data, 'base64'));
  return { size: size.name, label, ...info };
}

async function traceRun(c, seconds) {
  await c.send('Performance.enable');
  const before = await c.send('Performance.getMetrics');
  const framesP = evalExpr(c, `new Promise(resolve=>{
    let n=0; const start=performance.now(); const dur=${seconds * 1000};
    function step(){n++; if(performance.now()-start<dur) requestAnimationFrame(step); else resolve(n);}
    requestAnimationFrame(step);
  })`, true);
  const frames = await framesP;
  const after = await c.send('Performance.getMetrics');
  const pick = (m, name) => (m.metrics.find(x => x.name === name) || {}).value;
  const names = ['TaskDuration', 'ScriptDuration', 'LayoutCount', 'RecalcStyleCount', 'LayoutDuration', 'RecalcStyleDuration'];
  const out = { frames };
  for (const n of names) out[n] = (pick(after, n) ?? 0) - (pick(before, n) ?? 0);
  return out;
}

async function main() {
  const INDEX = await buildApp();
  const url = pathToFileURL(INDEX).href;
  const results = { measures: [], traceLit: [], traceStopped: [] };

  // --- Load 1: candle stays lit throughout ---
  {
    const profileDir = join(WORK, 'chrome_profile_lit');
    const child = spawn(browser, [
      `--user-data-dir=${profileDir}`, '--headless=new', '--disable-gpu', '--no-first-run',
      '--remote-debugging-port=0', '--remote-allow-origins=*', '--allow-file-access-from-files',
      'about:blank',
    ], { stdio: 'ignore', windowsHide: true });
    try {
      const port = await waitPort(profileDir);
      const target = await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: 'PUT' })).json();
      const c = await cdpConnect(target.webSocketDebuggerUrl.replace('localhost', '127.0.0.1'));
      await c.send('Page.enable');
      await c.send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 800, deviceScaleFactor: 1, mobile: false });
      await c.send('Page.navigate', { url });
      await waitReady(c);
      await sleep(800); // let boot settle before the timed window starts

      results.traceLit.push(await traceRun(c, 10));
      await sleep(500);
      results.traceLit.push(await traceRun(c, 10));

      for (const size of SIZES) results.measures.push(await measureAndShoot(c, size, 'new'));

      const seedR = await evalExpr(c, 'window.__seedRecent("growth-puberty")');
      if (seedR !== 'ok') console.error('seed failed: ' + seedR);
      await sleep(300);
      for (const size of SIZES) results.measures.push(await measureAndShoot(c, size, 'seeded'));

      await c.send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 800, deviceScaleFactor: 1, mobile: false });
      await c.send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
      await sleep(500);
      const shot = await c.send('Page.captureScreenshot', { format: 'png' });
      await writeFile(join(SHOTS_DIR, 'home-1280x800-reduced.png'), Buffer.from(shot.data, 'base64'));

      c.close();
    } finally {
      child.kill();
      await rm(profileDir, { recursive: true, force: true }).catch(() => {});
    }
  }

  // --- Load 2: fresh page, click candle immediately, then trace stopped ---
  {
    const profileDir = join(WORK, 'chrome_profile_stopped');
    const child = spawn(browser, [
      `--user-data-dir=${profileDir}`, '--headless=new', '--disable-gpu', '--no-first-run',
      '--remote-debugging-port=0', '--remote-allow-origins=*', '--allow-file-access-from-files',
      'about:blank',
    ], { stdio: 'ignore', windowsHide: true });
    try {
      const port = await waitPort(profileDir);
      const target = await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: 'PUT' })).json();
      const c = await cdpConnect(target.webSocketDebuggerUrl.replace('localhost', '127.0.0.1'));
      await c.send('Page.enable');
      await c.send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 800, deviceScaleFactor: 1, mobile: false });
      await c.send('Page.navigate', { url });
      await waitReady(c);
      await sleep(800);

      const clickR = await evalExpr(c, `(()=>{const b=document.querySelector('[data-desk-candle]');if(!b)return 'no candle';b.click();return b.getAttribute('aria-pressed');})()`);
      await sleep(300);
      const shot = await c.send('Page.captureScreenshot', { format: 'png' });
      await writeFile(join(SHOTS_DIR, 'home-1280x800-candle-off.png'), Buffer.from(shot.data, 'base64'));
      results.candleClickResult = clickR;

      results.traceStopped.push(await traceRun(c, 10));
      await sleep(500);
      results.traceStopped.push(await traceRun(c, 10));

      c.close();
    } finally {
      child.kill();
      await rm(profileDir, { recursive: true, force: true }).catch(() => {});
    }
  }

  await writeFile(join(SHOTS_DIR, 'measures.json'), JSON.stringify(results.measures, null, 2));

  const fmt = arr => arr.map((r, i) =>
    `  run ${i + 1}: frames=${r.frames} TaskDuration=${r.TaskDuration.toFixed(3)} ScriptDuration=${r.ScriptDuration.toFixed(3)} LayoutCount=${r.LayoutCount} RecalcStyleCount=${r.RecalcStyleCount} LayoutDuration=${r.LayoutDuration.toFixed(3)} RecalcStyleDuration=${r.RecalcStyleDuration.toFixed(3)}`
  ).join('\n');

  const md = `# P5 D3 matched trace — home, candle lit vs stopped

10 s window each, ${results.traceLit.length} runs per state. Metrics are
\`Performance.getMetrics\` deltas (before/after the 10 s window); frames is a
requestAnimationFrame counter running for the same window (not a browser
paint-frame count — CDP tracing frame counters were not used here).

## Candle lit
${fmt(results.traceLit)}

## Candle stopped
Click result (aria-pressed after click): ${results.candleClickResult}
${fmt(results.traceStopped)}
`;
  await writeFile(TRACE_MD, md, 'utf8');

  console.log('measures:');
  console.table(results.measures);
  console.log('candle click result: ' + results.candleClickResult);
  console.log('trace lit:', results.traceLit);
  console.log('trace stopped:', results.traceStopped);
}

main().catch(e => { console.error('FATAL: ' + (e && e.stack || e)); process.exit(1); });
