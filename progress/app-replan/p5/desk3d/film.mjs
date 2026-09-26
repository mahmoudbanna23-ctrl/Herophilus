// Time-driven headless-Chrome film + measurement for desk3d step 1.
// Adapted from p5/scroll-spike-film.mjs (CDP over raw WebSocket, no deps).
import { spawn } from 'node:child_process';
import fs from 'node:fs';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const URL_ = 'file:///D:/claude%20os/Medical%20school/Herophilus/progress/app-replan/p5/desk3d/index.html';
const OUT = 'D:/tmp-desk3d-1/';
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });
const sleep = ms => new Promise(r => setTimeout(r, ms));

let portCounter = 9700 + Math.floor(Math.random() * 300);

async function withPage(w, h, fn) {
  const port = portCounter++;
  const prof = 'D:/tmp-desk3d-1/prof' + Date.now() + '_' + port;
  const ch = spawn(CHROME, ['--headless=new', '--remote-debugging-port=' + port, '--user-data-dir=' + prof,
    '--no-first-run', '--hide-scrollbars', '--window-size=' + w + ',' + h, 'about:blank'], { stdio: 'ignore' });
  let list;
  for (let i = 0; i < 40; i++) {
    try { list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json(); if (list.find(t => t.type === 'page')) break; } catch { }
    await sleep(250);
  }
  const tgt = list.find(t => t.type === 'page');
  const ws = new WebSocket(tgt.webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);
  let id = 0; const pend = new Map(); const errs = []; const frameHandlers = [];
  ws.onmessage = e => {
    const m = JSON.parse(e.data);
    if (m.id && pend.has(m.id)) { pend.get(m.id)(m); pend.delete(m.id); }
    if (m.method === 'Runtime.exceptionThrown') errs.push('EXC ' + JSON.stringify(m.params.exceptionDetails).slice(0, 300));
    if (m.method === 'Runtime.consoleAPICalled' && ['error', 'warning'].includes(m.params.type))
      errs.push('CON ' + m.params.type + ' ' + JSON.stringify(m.params.args.map(a => a.value ?? a.description)).slice(0, 300));
    if (m.method === 'Log.entryAdded' && ['error', 'warning'].includes(m.params.entry.level))
      errs.push('LOG ' + m.params.entry.level + ' ' + m.params.entry.text);
    if (m.method === 'Page.screencastFrame') frameHandlers.forEach(h => h(m.params));
  };
  const send = (method, params = {}) => new Promise(r => { const i = ++id; pend.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async ex => (await send('Runtime.evaluate', { expression: ex, returnByValue: true, awaitPromise: true })).result?.result?.value;
  await send('Runtime.enable'); await send('Log.enable'); await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 1, mobile: w < 500 });
  // headless Chrome on this machine reports prefers-reduced-motion:reduce by default (measured) --
  // force no-preference so the filmed sequence actually shows the eased motion under test.
  await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'no-preference' }] });
  // headless pages are not "focused" by default: element.focus() moves activeElement but never
  // fires the 'focus' event, so hover-via-keyboard never ran until this was set (measured).
  await send('Emulation.setFocusEmulationEnabled', { enabled: true });
  await send('Page.navigate', { url: URL_ });
  await sleep(2200);
  const api = { send, ev, errs, frameHandlers, w, h };
  let res;
  try { res = await fn(api); } finally { ws.close(); ch.kill(); }
  return res;
}

async function shoot(api, name) {
  const shot = await api.send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(OUT + name + '.png', Buffer.from(shot.result.data, 'base64'));
}

async function measureFps(w, h, throttle) {
  return withPage(w, h, async api => {
    await api.send('Emulation.setCPUThrottlingRate', { rate: throttle });
    await api.ev(`document.querySelector('.bk[data-id="ent"]').focus()`);
    await sleep(300);
    await api.ev(`document.querySelector('.bk[data-id="ent"]').click()`);
    await sleep(3000); // covers the open chain + settle, sampled over the rolling window
    const mean = await api.ev('window.__fps.mean');
    const heap = await api.ev('window.__mem()');
    return { throttle, w, h, fps: mean, heapBytes: heap, errs: api.errs.slice() };
  });
}

async function filmSize(w, h, tag) {
  return withPage(w, h, async api => {
    // screencast for the video
    const frames = [];
    api.frameHandlers.push(async p => {
      frames.push(Buffer.from(p.data, 'base64'));
      await api.send('Page.screencastFrameAck', { sessionId: p.sessionId });
    });
    await api.send('Page.startScreencast', { format: 'png', everyNthFrame: 1, maxWidth: w, maxHeight: h });

    await shoot(api, tag + '-1-idle');
    await sleep(1000);

    await api.ev(`document.querySelector('.bk[data-id="ent"]').focus()`);
    await sleep(500);
    await shoot(api, tag + '-2-hover-ent');

    await api.ev(`document.querySelector('.bk[data-id="ent"]').click()`);
    await sleep(1900); // lift+turn(550) -> camera(600) -> cover open(650) chain
    await shoot(api, tag + '-3-open-ent');
    await sleep(1500); // hold 1.5s

    for (const sel of ['#lectBtn', '#questBtn', '#mocksBtn']) {
      await api.ev(`document.querySelector('${sel}').focus()`);
      await sleep(400);
    }
    await shoot(api, tag + '-4-hover-targets');
    await api.ev(`document.querySelector('#mocksBtn').click()`); // exercise the paper-slide path
    await sleep(600);

    await api.ev(`document.getElementById('backBtn').click()`);
    await sleep(1700); // close chain: paper(400)+cover(550)+camera(600)+settle(550) worst case, capped here
    await shoot(api, tag + '-5-after-back');

    await api.ev(`document.querySelector('.bk[data-id="peds"]').click()`);
    await sleep(1900);
    await shoot(api, tag + '-6-open-peds');

    await api.ev(`document.getElementById('backBtn').click()`);
    await sleep(1700);

    await api.send('Page.stopScreencast', {});
    fs.mkdirSync(OUT + 'frames-' + tag, { recursive: true });
    frames.forEach((buf, i) => fs.writeFileSync(OUT + 'frames-' + tag + '/f' + String(i).padStart(5, '0') + '.png', buf));
    return { frameCount: frames.length, errs: api.errs.slice() };
  });
}

const mode = process.argv[2];
if (mode === 'fps') {
  const w = Number(process.argv[3]), h = Number(process.argv[4]), rate = Number(process.argv[5]);
  const r = await measureFps(w, h, rate);
  console.log(JSON.stringify(r));
} else if (mode === 'film') {
  const w = Number(process.argv[3]), h = Number(process.argv[4]), tag = process.argv[5];
  const r = await filmSize(w, h, tag);
  console.log(JSON.stringify(r));
}
