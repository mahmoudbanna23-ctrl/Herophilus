/* Capture the dark HOME view with its ambient layer on and hidden. */
'use strict';
const { spawn } = require('child_process');
const fs = require('fs'), os = require('os'), path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const OUT = path.join(ROOT, 'progress', 'app-replan', 'shots');
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const browser = fs.existsSync(CHROME) ? CHROME : EDGE;
const WORK = path.join(os.tmpdir(), 'herophilus_q2_shots');
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
function rmrf(p) { if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true }); }
function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, e.name), d = path.join(dst, e.name);
    if (e.isDirectory()) copyDir(s, d); else fs.copyFileSync(s, d);
  }
}
function connect(ws) {
  const pending = new Map(); let id = 0;
  ws.addEventListener('message', event => {
    let m; try { m = JSON.parse(event.data); } catch (_) { return; }
    if (!m.id || !pending.has(m.id)) return;
    const p = pending.get(m.id); pending.delete(m.id);
    m.error ? p.reject(new Error(m.error.message)) : p.resolve(m.result);
  });
  return (method, params = {}) => new Promise((resolve, reject) => {
    const n = ++id; pending.set(n, { resolve, reject });
    ws.send(JSON.stringify({ id: n, method, params }));
  });
}
async function launch(profile) {
  const proc = spawn(browser, ['--headless=new', '--disable-gpu', '--no-sandbox', '--no-first-run',
    '--disable-extensions', '--allow-file-access-from-files', '--remote-debugging-port=0',
    '--hide-scrollbars', '--user-data-dir=' + profile, 'about:blank'], { stdio: 'ignore' });
  const portFile = path.join(profile, 'DevToolsActivePort'); let port = 0;
  for (let i = 0; i < 80 && !port; i++) { await sleep(250); try { port = +fs.readFileSync(portFile, 'utf8').split('\n')[0]; } catch (_) {} }
  if (!port) throw new Error('Chrome never wrote DevToolsActivePort');
  let target;
  for (let i = 0; i < 40 && !target; i++) {
    try { target = (await (await fetch('http://127.0.0.1:' + port + '/json/list')).json()).find(t => t.type === 'page'); } catch (_) {}
    if (!target) await sleep(250);
  }
  if (!target) throw new Error('no page target');
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => { ws.addEventListener('open', resolve, { once: true }); ws.addEventListener('error', reject, { once: true }); });
  return { proc, send: connect(ws) };
}
rmrf(WORK); copyDir(path.join(ROOT, 'app'), path.join(WORK, 'app'));
const index = path.join(WORK, 'app', 'index.html'); let html = fs.readFileSync(index, 'utf8');
const inject = [
  '<script>Object.defineProperty(window,"showGate",{configurable:true,get:function(){return function(){}},set:function(){}});try{localStorage.setItem("wardround.theme","dark");localStorage.setItem("wardround.profiles",JSON.stringify([{id:"q2",name:"Q2",av:0,col:0}]))}catch(e){}</script>',
  '<style>.reveal{opacity:1!important;transform:none!important}</style>'
].join('\n');
const at = html.indexOf('<head>'); if (at < 0) throw new Error('no head');
html = html.slice(0, at + 6) + inject + html.slice(at + 6);
html = html.replace('</body>', '<script>window.addEventListener("load",function(){setTimeout(function(){Promise.resolve(enterProfile({id:"q2",name:"Q2",av:0,col:0})).then(function(){var t=TERMS&&TERMS.find(function(x){return x.id==="y4s2"});if(t){S.term={id:t.id,at:Date.now()};save();if(typeof finishProfileEntry==="function")finishProfileEntry();else{activateTerm(t.id);render()}}go({name:"home"});window.__q2ready=true})},900)})</script></body>');
fs.writeFileSync(index, html, 'utf8');
const url = 'file:///' + index.replace(/\\/g, '/');
(async () => {
  let session;
  try {
    session = await launch(path.join(WORK, 'chrome_profile'));
    const send = session.send;
    await send('Page.enable'); await send('Runtime.enable');
    await send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 800, deviceScaleFactor: 1, mobile: false });
    await send('Page.navigate', { url });
    for (let i = 0; i < 60; i++) { await sleep(250); const r = await send('Runtime.evaluate', { expression: 'window.__q2ready===true', returnByValue: true }); if (r.result.value) break; if (i === 59) throw new Error('HOME never became ready'); }
    await sleep(1800); // leave time for the video and moving orbs to paint
    let shot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
    fs.writeFileSync(path.join(OUT, 'q2-ambient-on-1280x800.png'), Buffer.from(shot.data, 'base64'));
    await send('Runtime.evaluate', { expression: 'document.querySelector(".ambient").style.setProperty("display","none","important")' });
    await sleep(200);
    shot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
    fs.writeFileSync(path.join(OUT, 'q2-ambient-off-1280x800.png'), Buffer.from(shot.data, 'base64'));
    const on = fs.readFileSync(path.join(OUT, 'q2-ambient-on-1280x800.png'));
    const off = fs.readFileSync(path.join(OUT, 'q2-ambient-off-1280x800.png'));
    if (on.length <= 20480 || off.length <= 20480 || on.equals(off)) throw new Error('screenshot verification failed');
    console.log('wrote ' + on.length + ' and ' + off.length + ' bytes; differ');
  } finally { if (session) try { session.proc.kill(); } catch (_) {} rmrf(WORK); }
})().catch(e => { console.error('FAILED: ' + e.message); process.exitCode = 1; });
