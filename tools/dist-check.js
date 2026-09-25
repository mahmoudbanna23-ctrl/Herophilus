/* Boots dist/ — the folder that actually gets uploaded — and checks it is the
 * app minus exactly what was meant to be withheld.
 *
 *   node tools/dist-check.js      (run it after tools/build-launch.js)
 *
 * The thing that actually gets uploaded, booted. Not app/ — dist/, with the
 * locked subjects' bytes physically gone and every reference cache-busted.
 * A build that reports success and then 404s on its own data file is the
 * failure this exists to catch. */
const { spawn, execSync } = require('child_process');
const fs = require('fs'), os = require('os'), path = require('path');
const ROOT = path.resolve(__dirname, '..');
// Unique per run: a stale profile from a prior run's still-shutting-down
// Chrome must never be reused or deleted out from under it (Round 2 fix).
const WORK = fs.mkdtempSync(path.join(os.tmpdir(), 'herodist-'));
const sleep = ms => new Promise(r => setTimeout(r, ms));
function rmrf(p){try{fs.rmSync(p,{recursive:true,force:true})}catch(e){}}
function copyDir(a,b){fs.mkdirSync(b,{recursive:true});
  for(const e of fs.readdirSync(a,{withFileTypes:true})){const s=path.join(a,e.name),d=path.join(b,e.name);
    e.isDirectory()?copyDir(s,d):fs.copyFileSync(s,d);}}
const APP = path.join(WORK,'dist');
copyDir(path.join(ROOT,'dist'),APP);
const INDEX = path.join(APP,'index.html');
let html = fs.readFileSync(INDEX,'utf8');
const inject='<script>'
  +'Object.defineProperty(window,"showGate",{configurable:true,get:function(){return function(){};},set:function(){}});'
  +'try{localStorage.setItem("wardround.profiles",JSON.stringify([{id:"d",name:"D",av:{t:"g",v:"owl",c:"#5c7a52"},pin:""}]));}catch(e){}'
  +'<\/script>'
  +'<style>*,*::before,*::after{animation:none!important;transition:none!important}.reveal{opacity:1!important}</style>';
const h=html.indexOf('<head>');
html=html.slice(0,h+6)+'\n'+inject+'\n'+html.slice(h+6);
// A fresh profile must choose a semester before its question pool and UI render.
// Complete that user action through chooseTerm(), as the published content is y4s2.
html+='\n<script>window.addEventListener("load",function(){setTimeout(function(){'
  +'Promise.resolve(enterProfile(profiles[0])).then(function(){'
  +'termFields.pick={year:4,semester:2};chooseTerm();window.__ready=1});'
  +'},1200)});<\/script>\n';
fs.writeFileSync(INDEX,html);
const BS = String.fromCharCode(92);
const url='file:///'+INDEX.split(BS).join('/');

// Best-effort teardown: ask Chrome to close over CDP if we still have a live
// socket, then kill the spawned pid, then taskkill the whole process tree as
// a fallback (headless Chrome forks children that outlive proc.kill()), then
// wait briefly and remove the unique WORK dir. Every step swallows its own
// error — cleanup must never itself throw and mask the real failure.
async function cleanup(proc, ws, sendFn){
  if(ws){
    try{
      if(ws.readyState===WebSocket.OPEN && sendFn) await Promise.race([sendFn('Browser.close'), sleep(1000)]);
    }catch(e){}
    try{ ws.close(); }catch(e){}
  }
  // taskkill /T must run while proc is still the live tree root — crashpad-
  // handler and utility children detach from the job object by design and
  // are missed if the browser process has already exited by the time /T
  // walks the tree (measured: 2/10 runs orphaned crashpad-handler + an
  // unzip utility). Kill the tree FIRST, then fall back to proc.kill().
  if(proc && proc.pid){
    try{ execSync('taskkill /T /F /PID '+proc.pid, {stdio:'ignore'}); }catch(e){}
  }
  if(proc && proc.exitCode===null && !proc.killed){
    try{ proc.kill(); }catch(e){}
  }
  await new Promise(r=>{
    if(!proc || proc.exitCode!==null){ r(); return; }
    let done=false;
    proc.once('exit',()=>{ done=true; r(); });
    setTimeout(()=>{ if(!done) r(); }, 3000);
  });
  await sleep(300);
  rmrf(WORK);
}

async function main(){
  const udd=path.join(WORK,'prof');
  const proc=spawn('C:/Program Files/Google/Chrome/Application/chrome.exe',[
    '--headless=new','--disable-gpu','--no-sandbox','--no-first-run',
    '--allow-file-access-from-files','--window-size=1440,1000',
    '--disable-crash-reporter','--disable-breakpad','--disable-component-update',
    '--remote-debugging-port=0','--user-data-dir='+udd,'about:blank'],{stdio:'ignore'});
  let ws=null, send=null;
  try{
    let port=0;
    for(let i=0;i<60&&!port;i++){await sleep(250);
      try{port=parseInt(fs.readFileSync(path.join(udd,'DevToolsActivePort'),'utf8').split('\n')[0],10)||0}catch(e){}}
    let t=null;
    for(let i=0;i<40&&!t;i++){
      try{t=(await(await fetch('http://127.0.0.1:'+port+'/json/list')).json()).find(x=>x.type==='page')}catch(e){}
      if(!t)await sleep(250);}
    if(!t){
      throw new Error('never got a page target (port='+port+', chrome pid='+proc.pid+')');
    }
    ws=new WebSocket(t.webSocketDebuggerUrl);
    await new Promise((res,rej)=>{
      ws.addEventListener('open',res,{once:true});
      ws.addEventListener('error',()=>rej(new Error('ws open failed')),{once:true});
    });
    const pending=new Map();let id=0;const errs=[],failedReq=[];
    const reqUrl=new Map();
    ws.addEventListener('message',ev=>{const m=JSON.parse(ev.data);
      if(m.method==='Runtime.exceptionThrown')errs.push(JSON.stringify(m.params).slice(0,240));
      if(m.method==='Log.entryAdded'&&m.params.entry.level==='error')errs.push('log: '+m.params.entry.text.slice(0,200));
      if(m.method==='Network.loadingFailed')failedReq.push(m.params.requestId+' '+m.params.errorText);
      if(m.method==='Network.requestWillBeSent')reqUrl.set(m.params.requestId,m.params.request.url);
      if(m.id&&pending.has(m.id)){const{res}=pending.get(m.id);pending.delete(m.id);res(m.result);}});
    send=(method,params)=>new Promise(res=>{const i=++id;pending.set(i,{res});
      ws.send(JSON.stringify({id:i,method,params:params||{}}));});
    await send('Page.enable');await send('Runtime.enable');await send('Log.enable');await send('Network.enable');
    await send('Page.navigate',{url});
    let ok=false;
    for(let i=0;i<60&&!ok;i++){await sleep(500);
      const r=await send('Runtime.evaluate',{expression:'!!window.__ready',returnByValue:true});
      ok=!!(r.result&&r.result.value);}
    if(!ok){
      throw new Error('never booted\n'+errs.join('\n'));
    }

    const ev=async e=>{
      const r=await send('Runtime.evaluate',{returnByValue:true,awaitPromise:true,expression:e});
      if(r.exceptionDetails)return {__threw:JSON.stringify(r.exceptionDetails).slice(0,300)};
      return r.result.value;};

    let pass=0,fail=0;
    const check=(name,got,want)=>{
      const good=JSON.stringify(got)===JSON.stringify(want);
      good?pass++:fail++;
      console.log((good?'  ok   ':'  FAIL ')+name+(good?'':'   got '+JSON.stringify(got)+' want '+JSON.stringify(want)));
    };

    check('the shipped page boots with no console error and no exception', errs, []);

    const failedNames=failedReq.map(f=>{const rid=f.split(' ')[0];
      const u=reqUrl.get(rid)||'?';return u.split('/').pop().split('?')[0]+' '+f.split(' ').slice(1).join(' ');})
      .filter(x=>!/favicon/i.test(x));
    check('nothing 404s — every script and asset the page asks for is in the folder', failedNames, []);

    /* Counts are compared against each other, never against a number typed in
       here: the bank grows by the commit, and a test that has to be edited every
       time it is right is a test nobody re-runs. What must hold is that the two
       shipping subjects carry everything, and that they are the whole of it. */
    const counts = await ev(`(function(){
        var by={};QUESTIONS.forEach(function(q){by[q.module]=(by[q.module]||0)+1});
        return {total:QUESTIONS.length, modules:MODULES.length, by:by};
      })()`);
    console.log('    shipping: ' + JSON.stringify(counts.by) + '  total ' + counts.total);
    check('all four shipping subjects carry every question in the upload',
      [counts.modules, counts.by.ent > 0, counts.by.pediatrics > 0, counts.by.ophtho > 0, counts.by.neuropsych > 0,
       (counts.by.ent || 0) + (counts.by.pediatrics || 0) + (counts.by.ophtho || 0) + (counts.by.neuropsych || 0) === counts.total],
      [4, true, true, true, true, true]);

    check('no theory text ships at all, and the map is empty rather than missing',
      await ev(`[typeof THEORY, Object.keys(THEORY).length,
                 typeof window.T_ENT, typeof window.T_PEDS,
                 typeof window.T_OPHTHO, typeof window.T_NEURO]`),
      ['object',0,'undefined','undefined','undefined','undefined']);

    await ev('go({name:"home"})'); await sleep(500);
    check('four module cards, none locked',
      await ev(`(function(){
        var c=document.querySelectorAll('.mod-card');
        return [c.length, document.querySelectorAll('.mod-card.locked').length,
                [].slice.call(c).filter(function(x){return /Coming soon/.test(x.textContent)}).length];
      })()`), [4,0,0]);

    check('the theory rail row is present, disabled, and says soon',
      await ev(`(function(){
        var rows=[].slice.call(document.querySelectorAll('.nav-item'));
        var th=rows.filter(function(r){return /Theory/.test(r.textContent)})[0];
        return [!!th, th?th.disabled:null, th?/soon/.test(th.textContent):null];
      })()`), [true,true,true]);

    check('a shipping chapter still opens its questions',
      await ev(`(function(){
        go({name:'module',id:'ent'});
        return document.querySelectorAll('.ch-row').length>0;
      })()`), true);

    console.log('\n'+pass+' passed, '+fail+' failed');
    return fail?1:0;
  } finally {
    await cleanup(proc, ws, send);
  }
}

main().then(code=>process.exit(code)).catch(e=>{console.error(e);process.exit(1)});
