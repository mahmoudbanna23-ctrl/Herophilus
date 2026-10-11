/* Checks for the library-hall home screen (app/js/hall.js, app/css/hall.css).
 *
 *   node progress/redesign/check-hall.mjs [--work=D:/scratch 2026/redesign/hallcheck]
 *
 * Built on progress/app-replan/p5/shoot-home.mjs (raw-websocket CDP driver) and
 * tools/boot-check/boot-check.js (copy the WHOLE app/, stub showGate at parse
 * time, seed a profile, enter it). One Chrome, fresh --user-data-dir, and the
 * work path may not contain a double dash. Prints one PASS/FAIL line per check,
 * then INFO lines (plaque contrast), and exits 1 on any FAIL.
 */
import { spawn } from 'node:child_process';
import { readFile, mkdir, rm, cp } from 'node:fs/promises';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import net from 'node:net';
import { randomBytes } from 'node:crypto';

const ROOT = resolve(import.meta.dirname, '..', '..');
const argWork = process.argv.find(a => a.startsWith('--work='));
const WORK = resolve(argWork ? argWork.slice(7) : 'D:/scratch 2026/redesign/hallcheck');
if (WORK.includes('--')) { console.error('REFUSING: work path contains "--".'); process.exit(1); }

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const browser = existsSync(CHROME) ? CHROME : EDGE;
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function buildApp() {
  await rm(WORK, { recursive: true, force: true }).catch(() => {});
  await mkdir(WORK, { recursive: true });
  const APP = join(WORK, 'app');
  await cp(join(ROOT, 'app'), APP, { recursive: true });
  const INDEX = join(APP, 'index.html');
  let html = readFileSync(INDEX, 'utf8');
  const probe = [
    '<script>',
    'window.__errs=[];',
    'window.addEventListener("error",function(e){window.__errs.push("ERROR: "+(e.message||"")+" @ "+(e.filename||"")+":"+(e.lineno||0));},true);',
    'window.addEventListener("unhandledrejection",function(e){window.__errs.push("REJECT: "+e.reason);});',
    '(function(){var ce=console.error;console.error=function(){window.__errs.push("console.error: "+Array.prototype.join.call(arguments," "));return ce.apply(console,arguments);};})();',
    'Object.defineProperty(window,"showGate",{configurable:true,get:function(){return function(){};},set:function(){}});',
    'try{localStorage.setItem("wardround.profiles",JSON.stringify([{id:"boot",name:"Boot","av":0,"col":0}]));}catch(e){}',
    '</script>',
  ].join('\n');
  const headAt = html.indexOf('<head>');
  html = html.slice(0, headAt + 6) + '\n' + probe + '\n' + html.slice(headAt + 6);
  const init = [
    '<script>',
    'window.__ready=false;',
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
    const head = data.length < 126 ? Buffer.from([0x81, 0x80 | data.length])
      : data.length < 65536 ? Buffer.from([0x81, 0xfe, data.length >> 8, data.length & 255])
      : (() => { const h = Buffer.alloc(10); h[0] = 0x81; h[1] = 0xff; h.writeBigUInt64BE(BigInt(data.length), 2); return h; })();
    // the masking key goes between header and payload; length bits need the mask flag
    if (data.length >= 126) head[1] |= 0x80;
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
          events,
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

let c;
async function ev(expression, awaitPromise = false) {
  const r = await c.send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise });
  if (r.exceptionDetails) throw new Error(JSON.stringify(r.exceptionDetails));
  return r.result.value;
}
async function waitReady(timeoutMs = 20000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (await ev('window.__ready===true')) return;
    await sleep(300);
  }
  throw new Error('app never became ready');
}

let fails = 0;
const line = (ok, name, detail = '') => {
  if (!ok) fails++;
  console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail ? '  [' + detail + ']' : ''));
};

/* WCAG contrast of the plaque's three text colours against its own fill. */
const CONTRAST_JS = `(()=>{
  const lum=c=>{const m=c.match(/[\\d.]+/g).map(Number);
    const f=v=>{v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)};
    return .2126*f(m[0])+.7152*f(m[1])+.0722*f(m[2])};
  const ratio=(a,b)=>{const x=lum(a),y=lum(b);return ((Math.max(x,y)+.05)/(Math.min(x,y)+.05))};
  const pl=document.querySelector('.alcove:not(.locked) .plaque');
  if(!pl) return null;
  const bg=getComputedStyle(pl).backgroundColor;
  const out={bg};
  [['name','.pl-name'],['count','.pl-count'],['acc','.pl-acc']].forEach(([k,s])=>{
    const e=pl.querySelector(s); if(!e) return;
    out[k]=+ratio(getComputedStyle(e).color,bg).toFixed(2);
  });
  document.querySelectorAll('.alcove .pl-acc').forEach((e,i)=>{
    out['acc'+i]=+ratio(getComputedStyle(e).color,bg).toFixed(2);
  });
  const g=document.querySelector('.hall-greet h1');
  if(g) out.h1=+ratio(getComputedStyle(g).color,getComputedStyle(g).backgroundColor).toFixed(2);
  return out;
})()`;

async function main() {
  const INDEX = await buildApp();
  const url = pathToFileURL(INDEX).href;
  const profileDir = join(WORK, 'chrome_profile');
  const child = spawn(browser, [
    `--user-data-dir=${profileDir}`, '--headless=new', '--disable-gpu', '--no-first-run',
    '--remote-debugging-port=0', '--remote-allow-origins=*', '--allow-file-access-from-files',
    'about:blank',
  ], { stdio: 'ignore', windowsHide: true });
  try {
    const port = await waitPort(profileDir);
    const target = await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: 'PUT' })).json();
    c = await cdpConnect(target.webSocketDebuggerUrl.replace('localhost', '127.0.0.1'));
    await c.send('Page.enable');
    await c.send('Log.enable');
    await c.send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 800, deviceScaleFactor: 1, mobile: false });
    await c.send('Page.navigate', { url });
    await waitReady();

    /* A profile with answers, so the stat tiles and Continue button exist. */
    const seeded = await ev(`(()=>{try{
      QUESTIONS.slice(0,8).forEach((q,i)=>{S.answers[q.id]={ok:i%3!==0,at:Date.now(),pick:0}});
      const cid=openModules()[0].groups[0].chapters[0][0];
      S.resumeByChapter[cid]={at:Date.now(),finished:false};
      save();go({name:'home'});return 'ok'}catch(e){return 'THREW '+e.message}})()`);
    if (seeded !== 'ok') console.log('seed: ' + seeded);
    await sleep(900);

    // 1. console errors (page errors; missing paintings are expected 404s and listed apart)
    const errs = await ev('window.__errs.slice(0,20)');
    line(errs.length === 0, '0 console errors', errs.length ? errs.join(' | ') : '');
    const logErrs = c.events.filter(e => e.method === 'Log.entryAdded' && e.params.entry.level === 'error')
      .map(e => (e.params.entry.url || '') + ' ' + e.params.entry.text);
    const unexpected = logErrs.filter(t => !/assets\/hall\//.test(t));
    line(unexpected.length === 0, '0 unexpected network/log errors (hall paintings excepted)', unexpected.slice(0, 3).join(' | '));
    console.log('INFO missing-painting log entries: ' + (logErrs.length - unexpected.length));

    // 2. four alcoves
    const n = await ev(`document.querySelectorAll('#page .hall .alcove').length`);
    line(n === 4, 'exactly 4 .alcove in home', 'found ' + n);
    line(await ev(`document.querySelector('#page > .hall')===document.querySelector('#page').firstElementChild`),
      '.hall is the first element in the page');

    // 3. no .mod-grid, no old Subjects/Modules heading before the hero
    line(await ev(`!document.querySelector('#page .mod-grid')`), '.mod-grid absent from home');

    // 4. other blocks survive, inside .hall-below
    const blocks = await ev(`(()=>{const b=document.querySelector('#page > .hall-below');
      if(!b) return null;
      return {stats:b.querySelectorAll('.stat').length, cont:!!b.querySelector('.filterbar .btn.go'),
              hero:!!b.querySelector('.hero-panel'), today:/On today/.test(b.textContent),
              eyebrow:!!b.querySelector('.eyebrow'), sub:!!b.querySelector('.page-sub'),
              h1InHall:!!document.querySelector('.hall .hall-greet h1'), h1Below:!!b.querySelector('h1')};})()`);
    line(!!blocks && blocks.stats === 4 && blocks.cont && blocks.hero && blocks.eyebrow && blocks.sub,
      'stat tiles, Continue, hero panel, eyebrow, sub-line present in .hall-below', JSON.stringify(blocks));
    line(!!blocks && blocks.h1InHall && !blocks.h1Below, 'welcome h1 moved into the hall (not duplicated)');
    console.log('INFO "On today" plan block present today: ' + (blocks && blocks.today) + ' (depends on the schedule date; not forced)');

    // saved-mock button must not sit above the hall
    const mockOk = await ev(`(()=>{try{
      S.mockResume={paper:{term:activeTerm},at:Date.now()};
      const had=typeof hasSavedMock==='function'&&hasSavedMock();
      go({name:'home'});
      const first=document.querySelector('#page').firstElementChild;
      const btn=[...document.querySelectorAll('#page button')].find(b=>/saved mock/i.test(b.textContent));
      delete S.mockResume; go({name:'home'});
      return {had, hallFirst:first.classList.contains('hall'), btnInBelow:!!(btn&&btn.closest('.hall-below'))};
    }catch(e){return 'THREW '+e.message}})()`);
    console.log('INFO saved-mock tuck: ' + JSON.stringify(mockOk));
    await sleep(300);

    // 5. locked module
    const lock = await ev(`(()=>{try{
      LOCKED_MODULES.push('neuropsych'); go({name:'home'});
      const a=document.querySelector('.alcove[data-id="neuropsych"]');
      const r={dis:a&&a.getAttribute('aria-disabled'), veil:!!document.querySelector('.hall .veil'),
               glows:document.querySelectorAll('.hall .glow').length};
      a.click();
      r.stay=view.name; r.word=a.textContent.replace(/\\s+/g,' ').trim();
      LOCKED_MODULES.pop(); go({name:'home'}); return r;
    }catch(e){return 'THREW '+e.message}})()`);
    line(lock && lock.dis === 'true' && lock.veil && lock.glows === 3 && lock.stay === 'home',
      'locked module is aria-disabled, veiled, no glow, click does nothing', JSON.stringify(lock));
    await sleep(300);

    // 6. themes
    const themes = await ev(`(()=>{
      const root=document.documentElement; const was=root.getAttribute('data-theme');
      root.setAttribute('data-theme','dark');
      const d=getComputedStyle(document.querySelector('.hall')).getPropertyValue('--hall-wide').trim();
      const df=getComputedStyle(document.querySelector('.hall')).getPropertyValue('--hall-fore-filter').trim();
      root.setAttribute('data-theme','light');
      const l=getComputedStyle(document.querySelector('.hall')).getPropertyValue('--hall-wide').trim();
      const lglow=getComputedStyle(document.querySelector('.hall-glow .glow')).display;
      window.__cLight=null;
      if(was===null) root.removeAttribute('data-theme'); else root.setAttribute('data-theme',was);
      return {d,l,df,lglow};})()`);
    line(themes.d && themes.l && themes.d !== themes.l, 'themes set different --hall-wide', themes.d + ' vs ' + themes.l);
    line(themes.lglow === 'none', 'glow hidden in light theme');

    // contrast, both themes
    const cDark = await ev(`(()=>{document.documentElement.setAttribute('data-theme','dark');return ${CONTRAST_JS}})()`);
    const cLight = await ev(`(()=>{document.documentElement.setAttribute('data-theme','light');const r=${CONTRAST_JS};document.documentElement.setAttribute('data-theme','dark');return r})()`);
    console.log('INFO plaque contrast dark : ' + JSON.stringify(cDark));
    console.log('INFO plaque contrast light: ' + JSON.stringify(cLight));
    const allOver = o => o && Object.entries(o).filter(([k]) => k !== 'bg').every(([, v]) => v >= 4.5);
    line(allOver(cDark) && allOver(cLight), 'plaque + greeting text >= 4.5:1 in both themes');

    // 7. print
    await c.send('Emulation.setEmulatedMedia', { media: 'print' });
    await sleep(200);
    const pd = await ev(`getComputedStyle(document.querySelector('.hall')).display`);
    await c.send('Emulation.setEmulatedMedia', { media: '' });
    line(pd === 'none', 'print media: .hall computes to display:none', pd);

    // clepsydra swap
    const clep = await ev(`(()=>{return {on:CLEP.on,mini:CLEP.mini,img:!!document.querySelector('.hall-greet img.hall-clep'),
      src:(document.querySelector('.hall-greet img.hall-clep')||{}).src||null,
      bodyHidden:getComputedStyle(document.querySelector('.clep .cl-body')).visibility,
      cls:document.body.classList.contains('hall-clep')}})()`);
    console.log('INFO clepsydra: ' + JSON.stringify(clep));
    await sleep(500);
    const clep2 = await ev(`({cls:document.body.classList.contains('hall-clep'),vis:getComputedStyle(document.querySelector('.clep .cl-body')).visibility,img:!!document.querySelector('.hall-greet img.hall-clep'),on:CLEP.on,mini:CLEP.mini})`);
    line(!clep2.on || clep2.mini || (clep2.img && clep2.cls && clep2.vis === 'hidden'),
      'one Clepsydra at a time (hall figure shown, corner body hidden)', JSON.stringify(clep2));

    // 8a. probe sanity: loops DO run with motion allowed
    const live = await ev(`(()=>{const h=document.querySelector('.hall');
      return {live:h.classList.contains('live'),
        n:document.getAnimations().filter(a=>a.effect&&a.effect.target&&h.contains(a.effect.target)&&a.playState==='running').length}})()`);
    line(live.n > 0, 'sanity: hall loops run when motion is allowed (probe can see animations)', JSON.stringify(live));

    // 8b. reduced motion
    await c.send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
    await ev(`go({name:'home'})`);
    await sleep(500);
    const red = await ev(`(()=>{const h=document.querySelector('.hall');
      const anims=document.getAnimations().filter(a=>a.effect&&a.effect.target&&h.contains(a.effect.target));
      return {n:anims.length, running:anims.filter(a=>a.playState==='running').length,
              arrive:h.classList.contains('arrive')}})()`);
    line(red.n === 0, 'reduced motion: no hall element has an animation', JSON.stringify(red));

    // 9. activating an alcove lands on that module (reduced motion on: straight to go())
    const kb = await ev(`(()=>{const a=document.querySelector('.alcove[data-id="ophtho"]'); a.click();
      return {name:view.name,id:view.id}})()`);
    line(kb.name === 'module' && kb.id === 'ophtho', 'keyboard/immediate activation lands on that module', JSON.stringify(kb));
    await c.send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'no-preference' }] });
    await ev(`go({name:'home'})`);
    await sleep(900);

    // mouse click with motion on: push-in, then the module
    const pt = await ev(`(()=>{const r=document.querySelector('.alcove[data-id="neuropsych"] .plaque').getBoundingClientRect();
      return {x:r.left+r.width/2,y:r.top+r.height/2}})()`);
    await c.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: pt.x, y: pt.y });
    await c.send('Input.dispatchMouseEvent', { type: 'mousePressed', x: pt.x, y: pt.y, button: 'left', clickCount: 1 });
    await c.send('Input.dispatchMouseEvent', { type: 'mouseReleased', x: pt.x, y: pt.y, button: 'left', clickCount: 1 });
    await sleep(120);
    const mid = await ev(`({pushing:!!document.querySelector('.hall.pushing'),view:view.name})`);
    await sleep(900);
    const after = await ev(`({name:view.name,id:view.id})`);
    line(mid.pushing && mid.view === 'home' && after.name === 'module' && after.id === 'neuropsych',
      'mouse click: push-in first, then lands on that module', JSON.stringify({ mid, after }));

    // coming back from a module: arrival from that alcove
    await ev(`go({name:'home'})`);
    await sleep(150);
    const arr = await ev(`(()=>{const h=document.querySelector('.hall');
      return {arrive:h.classList.contains('arrive'),ox:h.style.getPropertyValue('--ox'),oy:h.style.getPropertyValue('--oy')}})()`);
    line(arr.arrive && !!arr.ox, 'returning from a module: arrival animation from that alcove', JSON.stringify(arr));

    // layout
    const lay = await ev(`(()=>{const h=document.querySelector('.hall').getBoundingClientRect();
      const b=document.querySelector('.hall-below').getBoundingClientRect();
      return {hallW:Math.round(h.width),vw:innerWidth,hallH:Math.round(h.height),topbar:document.querySelector('.topbar').offsetHeight,
        belowW:Math.round(b.width),sw:document.documentElement.scrollWidth}})()`);
    console.log('INFO layout 1280x800: ' + JSON.stringify(lay));
    line(lay.sw <= lay.vw, 'no horizontal overflow at 1280x800', JSON.stringify(lay));

    // leaving home restores the page
    await ev(`go({name:'module',id:'ent'})`);
    await sleep(200);
    const left = await ev(`({on:document.body.classList.contains('hall-on'),clep:document.body.classList.contains('hall-clep'),hall:!!document.querySelector('.hall'),amb:getComputedStyle(document.querySelector('.ambient')).display})`);
    line(!left.on && !left.clep && !left.hall && left.amb !== 'none', 'leaving home: hall-on/hall-clep gone, ambient back', JSON.stringify(left));

    c.close();
  } finally {
    child.kill();
    await sleep(300);
    await rm(profileDir, { recursive: true, force: true }).catch(() => {});
  }
  console.log(fails ? `\n${fails} FAIL` : '\nall PASS');
  process.exit(fails ? 1 : 0);
}
main().catch(e => { console.error('check-hall crashed: ' + (e && e.message || e)); process.exit(2); });
