// CDP harness for desk3d fix-round-2 verification. Real mouse/keyboard input only --
// never el.click()/el.focus() in script (that skips hit-testing and focus order, which is
// exactly what round 1's refuter caught that the builder's own harness missed).
import { spawn } from 'node:child_process';
import fs from 'node:fs';
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const URL_ = 'file:///D:/claude%20os/Medical%20school/Herophilus/progress/app-replan/p5/desk3d/index.html';
export const OUT = process.env.DESK_OUT || 'D:/tmp-desk3d-fix2/';
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });
const sleep = ms => new Promise(r => setTimeout(r, ms));
let port = 9800 + Math.floor(Math.random() * 400);

export async function withPage(w, h, opts, fn) {
  opts = opts || {};
  const p = port++;
  const prof = OUT + 'prof' + Date.now() + '_' + p;
  const ch = spawn(CHROME, ['--headless=new', '--remote-debugging-port=' + p, '--user-data-dir=' + prof,
    '--no-first-run', '--hide-scrollbars', '--window-size=' + w + ',' + h, 'about:blank'], { stdio: 'ignore' });
  let list;
  for (let i = 0; i < 60; i++) { try { list = await (await fetch(`http://127.0.0.1:${p}/json/list`)).json(); if (list.find(t => t.type === 'page')) break; } catch { } await sleep(250); }
  const tgt = list.find(t => t.type === 'page');
  const ws = new WebSocket(tgt.webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);
  let id = 0; const pend = new Map(); const errs = []; const logs = []; const net = [];
  ws.onmessage = e => {
    const m = JSON.parse(e.data);
    if (m.id && pend.has(m.id)) { pend.get(m.id)(m); pend.delete(m.id); }
    if (m.method === 'Runtime.exceptionThrown') errs.push('EXC ' + JSON.stringify(m.params.exceptionDetails).slice(0, 300));
    if (m.method === 'Runtime.consoleAPICalled') { const t = m.params.args.map(a => a.value ?? a.description).join(' '); if (['error', 'warning'].includes(m.params.type)) errs.push('CON ' + t); else logs.push(t); }
    if (m.method === 'Log.entryAdded' && ['error', 'warning'].includes(m.params.entry.level)) errs.push('LOG ' + m.params.entry.text);
    if (m.method === 'Page.screencastFrame' && opts.onFrame) opts.onFrame(m.params, send);
    if (m.method === 'Network.requestWillBeSent') { const u = m.params.request.url; if (!u.startsWith('file:')) net.push(u.slice(0, 120)); }
  };
  const send = (method, params = {}) => new Promise(r => { const i = ++id; pend.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async ex => { const r = await send('Runtime.evaluate', { expression: ex, returnByValue: true, awaitPromise: true }); if (r.result?.exceptionDetails) return 'EVALERR ' + JSON.stringify(r.result.exceptionDetails).slice(0, 200); return r.result?.result?.value; };
  await send('Runtime.enable'); await send('Log.enable'); await send('Page.enable'); await send('Network.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 1, mobile: w < 500 });
  await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: opts.reduce ? 'reduce' : 'no-preference' }] });
  await send('Emulation.setFocusEmulationEnabled', { enabled: true });
  await send('Page.navigate', { url: URL_ });
  await sleep(2200);
  const shot = async name => { const s = await send('Page.captureScreenshot', { format: 'png' }); fs.writeFileSync(OUT + name + '.png', Buffer.from(s.result.data, 'base64')); };
  const mouse = async (type, x, y) => send('Input.dispatchMouseEvent', { type, x, y, button: type === 'mouseMoved' ? 'none' : 'left', clickCount: 1 });
  const click = async (x, y) => { await mouse('mouseMoved', x, y); await mouse('mousePressed', x, y); await sleep(30); await mouse('mouseReleased', x, y); };
  const KEYS = { Tab: 9, Enter: 13, Escape: 27 };
  const key = async k => { await send('Input.dispatchKeyEvent', { type: 'keyDown', key: k, code: k, windowsVirtualKeyCode: KEYS[k], text: k === 'Enter' ? '\r' : undefined }); await send('Input.dispatchKeyEvent', { type: 'keyUp', key: k, code: k, windowsVirtualKeyCode: KEYS[k] }); };
  const api = { send, ev, errs, logs, net, shot, mouse, click, key, w, h, sleep };
  try { return await fn(api); } finally { ws.close(); ch.kill(); }
}

// in-page helpers, evaluated once per session
export const HELP = `(function(){
 window.__rect = function(sel){ var e=document.querySelector(sel); if(!e) return null; var r=e.getBoundingClientRect(); var cs=getComputedStyle(e); return {x:r.x,y:r.y,w:r.width,h:r.height,disp:cs.display,hidden:e.hidden}; };
 window.__hit = function(sel){ var e=document.querySelector(sel); var r=e.getBoundingClientRect(); var cx=r.x+r.width/2, cy=r.y+r.height/2; var t=document.elementFromPoint(cx,cy); return {cx:cx,cy:cy,target:(t&&(t.id||t.className))||null}; };
 return 'ok'; })()`;
