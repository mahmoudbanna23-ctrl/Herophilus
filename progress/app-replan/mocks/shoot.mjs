import { spawn } from 'node:child_process';
import { readFile, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import net from 'node:net';
import { randomBytes } from 'node:crypto';

const root = resolve(import.meta.dirname);
const profile = join(tmpdir(), `hc-p3-${process.pid}`);
const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const pages = ['home-a', 'home-b', 'subject-a', 'subject-b'];
const sizes = [{ name: 'd', width: 1280, height: 800 }, { name: 'm', width: 390, height: 844 }];
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function waitPort() {
  const path = join(profile, 'DevToolsActivePort');
  for (let i = 0; i < 100; i++) {
    if (existsSync(path)) return (await readFile(path, 'utf8')).split(/\r?\n/)[0];
    await sleep(100);
  }
  throw new Error('Chrome did not expose CDP');
}
async function cdp(wsUrl) {
  const { hostname, port, pathname } = new URL(wsUrl);
  const socket = net.createConnection({ host: hostname, port: Number(port) });
  const key = randomBytes(16).toString('base64'); let ready = false; let buffer = Buffer.alloc(0); let id = 0;
  const pending = new Map();
  const sendFrame = text => { const data = Buffer.from(text); const mask = randomBytes(4); const head = data.length < 126 ? Buffer.from([0x81, 0x80 | data.length]) : Buffer.from([0x81, 0xfe, data.length >> 8, data.length & 255]); for (let i = 0; i < data.length; i++) data[i] ^= mask[i % 4]; socket.write(Buffer.concat([head, mask, data])); };
  return new Promise((resolve, reject) => {
    socket.once('connect', () => socket.write(`GET ${pathname} HTTP/1.1\r\nHost: ${hostname}:${port}\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Key: ${key}\r\nSec-WebSocket-Version: 13\r\nOrigin: http://localhost\r\n\r\n`));
    socket.on('error', reject);
    socket.on('data', data => { buffer = Buffer.concat([buffer, data]); if (!ready) { const end = buffer.indexOf('\r\n\r\n'); if (end < 0) return; if (!buffer.subarray(0, end).toString().includes(' 101 ')) return reject(new Error(buffer.subarray(0, end).toString())); buffer = buffer.subarray(end + 4); ready = true; resolve({ send(method, params = {}) { return new Promise((resolve, reject) => { const callId = ++id; pending.set(callId, { resolve, reject }); sendFrame(JSON.stringify({ id: callId, method, params })); }); }, close() { socket.end(); } }); } while (buffer.length >= 2) { const code = buffer[1] & 127; const bytes = code < 126 ? 0 : code === 126 ? 2 : 8; if (buffer.length < 2 + bytes) return; const length = code < 126 ? code : code === 126 ? buffer.readUInt16BE(2) : Number(buffer.readBigUInt64BE(2)); if (buffer.length < 2 + bytes + length) return; const msg = JSON.parse(buffer.subarray(2 + bytes, 2 + bytes + length).toString()); buffer = buffer.subarray(2 + bytes + length); if (msg.id) { const call = pending.get(msg.id); pending.delete(msg.id); msg.error ? call.reject(msg.error) : call.resolve(msg.result); } } });
  });
}
const browser = spawn(chrome, [`--user-data-dir=${profile}`, '--headless=new', '--remote-debugging-port=0', '--remote-allow-origins=*', '--allow-file-access-from-files', 'about:blank'], { stdio: 'ignore', windowsHide: true });
try {
  const port = await waitPort();
  const target = await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: 'PUT' })).json();
  const c = await cdp(target.webSocketDebuggerUrl.replace('localhost', '127.0.0.1'));
  await c.send('Page.enable');
  const report = [];
  for (const page of pages) for (const size of sizes) {
    await c.send('Emulation.setDeviceMetricsOverride', { width: size.width, height: size.height, deviceScaleFactor: 1, mobile: false });
    await c.send('Page.navigate', { url: pathToFileURL(join(root, `${page}.html`)).href });
    await sleep(600);
    const metrics = await c.send('Runtime.evaluate', { expression: `(()=>{const all=[...document.querySelectorAll('*')];const widest=all.reduce((a,e)=>e.getBoundingClientRect().right>a.getBoundingClientRect().right?e:a,document.documentElement);return {scrollWidth:document.documentElement.scrollWidth,right:Math.round(widest.getBoundingClientRect().right),tag:widest.tagName,className:widest.className}})()`, returnByValue: true });
    const shot = await c.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
    await writeFile(join(root, 'shots', `${page}-${size.name}.png`), Buffer.from(shot.data, 'base64'));
    report.push({ page, viewport: `${size.width}x${size.height}`, ...metrics.result.value });
  }
  await writeFile(join(root, 'shots', 'round-2-metrics.json'), `${JSON.stringify(report, null, 2)}\n`);
  c.close();
  console.table(report);
} finally {
  browser.kill();
  await rm(profile, { recursive: true, force: true });
}
