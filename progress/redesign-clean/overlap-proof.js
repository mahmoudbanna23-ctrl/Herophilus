'use strict';
// Overlap proof for strip-fix #1 (and probe for #2/#4 numbers when asked).
// node progress\redesign-clean\overlap-proof.js [overlap|contrast|lag]
// Headless Chrome via CDP on a COPY of app\ (same harness shape as D:\scratch 2026\clean-strip\capture-strip.js).
const fs=require('fs'), path=require('path'), os=require('os');
const {spawn}=require('child_process');
const {pathToFileURL}=require('url');
const root=path.resolve(__dirname,'..','..');
const pause=ms=>new Promise(r=>setTimeout(r,ms));
const MODE=process.argv[2]||'overlap';

const SIZES=[[1440,900],[1180,820],[820,1180],[390,844]];
const VIEWS=[['home',"go({name:'home'})"],['ent',"go({name:'module',id:'ent'})"],['ophtho',"go({name:'module',id:'ophtho'})"],
  ['neuro',"go({name:'module',id:'neuropsych'})"],['peds',"go({name:'module',id:'pediatrics'})"],
  ['schedule',"go({name:'schedule'})"],['mock',"go({name:'mock'})"],['review',"go({name:'review'})"]];

const PAGE_JS = {
overlap: `
  // worst case bubble: longest tip or fact, plus the timer readout, tools row present
  const all=[];for(const k in CL_TIPS){try{all.push(CL_TIPS[k]())}catch(e){}}
  try{all.push(...clepFacts())}catch(e){}
  all.sort((a,b)=>b.length-a.length);
  clepSay(all[0],{force:true});
  const c=document.querySelector('.clep');
  c.classList.add('timed');const hud=document.getElementById('clepHud');if(hud)hud.textContent='FOCUS 25:00';
  await new Promise(r=>setTimeout(r,500));
  window.scrollTo(0,1e7);
  await new Promise(r=>setTimeout(r,400));
  const cr=c.getBoundingClientRect();
  const sayEl=document.getElementById('clepSay');const sr=sayEl.getBoundingClientRect();
  const body=document.getElementById('clepBody').getBoundingClientRect();
  const boxes=[cr,sr,body].filter(r=>r.width>0);
  const hits=[];
  let n=0;
  for(const el of document.querySelectorAll('#page *')){
    const r=el.getBoundingClientRect();
    if(!r.width||!r.height)continue;
    const cs=getComputedStyle(el);
    if(cs.visibility==='hidden'||cs.display==='none')continue;
    n++;
    for(const b of boxes){
      if(r.left<b.right&&r.right>b.left&&r.top<b.bottom&&r.bottom>b.top){
        hits.push((el.className||el.tagName)+'');break;
      }
    }
  }
  return {view:view.name,disp:getComputedStyle(c).display,clep:[Math.round(cr.left),Math.round(cr.top),Math.round(cr.width),Math.round(cr.height)],
    say:[Math.round(sr.left),Math.round(sr.top),Math.round(sr.width),Math.round(sr.height)],
    checked:n,hits:hits.length,sample:hits.slice(0,3),scrollY:Math.round(scrollY),atBottom:Math.round(scrollY+innerHeight)>=document.documentElement.scrollHeight-1,
    scrollH:document.documentElement.scrollHeight,vw:innerWidth};
`};

async function main(){
  let browser, socket, work;
  const pending=new Map();let seq=0;
  const consoleErrors=[];
  const cdp=(method,params={})=>{const id=++seq;return new Promise((resolve,reject)=>{
    const timer=setTimeout(()=>{pending.delete(id);reject(Error('CDP timeout: '+method));},30000);
    pending.set(id,{resolve:v=>{clearTimeout(timer);resolve(v)},reject:e=>{clearTimeout(timer);reject(e)}});
    socket.send(JSON.stringify({id,method,params}));});};
  const evaluate=async code=>{const r=await cdp('Runtime.evaluate',{expression:'(async()=>{'+code+'})()',awaitPromise:true,returnByValue:true});
    if(r.exceptionDetails)throw Error(r.exceptionDetails.exception?.description||r.exceptionDetails.text);return r.result.value;};
  const until=async fn=>{const end=Date.now()+25000;let last;while(Date.now()<end){try{if(await fn())return}catch(e){last=e}await pause(100)}throw last||Error('Wait timed out');};
  try{
    work=fs.mkdtempSync(path.join(os.tmpdir(),'herophilus-proof-'));
    if(work.includes('--'))throw Error('Temporary path must not contain --');
    const app=path.join(work,'app');fs.cpSync(path.join(root,'app'),app,{recursive:true});
    if(process.env.CLEP_JS)fs.copyFileSync(process.env.CLEP_JS,path.join(app,'js','clepsydra.js'));
    const exe=[process.env.UI_TASK_BROWSER,'C:/Program Files/Google/Chrome/Application/chrome.exe','C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].filter(Boolean).find(p=>fs.existsSync(p));
    const profile=path.join(work,'profile');
    browser=spawn(exe,['--headless=new','--disable-gpu','--no-sandbox','--no-first-run','--disable-extensions','--disable-background-networking','--remote-debugging-port=0','--user-data-dir='+profile,'about:blank'],{windowsHide:true,stdio:'ignore'});
    const portFile=path.join(profile,'DevToolsActivePort');
    await until(()=>fs.existsSync(portFile));
    const port=fs.readFileSync(portFile,'utf8').split('\n')[0];
    const targets=await (await fetch('http://127.0.0.1:'+port+'/json/list')).json();
    socket=new WebSocket(targets.find(t=>t.type==='page').webSocketDebuggerUrl);
    await new Promise((resolve,reject)=>{socket.onopen=resolve;socket.onerror=reject});
    socket.onmessage=e=>{const m=JSON.parse(e.data);
      if(m.id){const p=pending.get(m.id);if(p){pending.delete(m.id);m.error?p.reject(Error(m.error.message)):p.resolve(m.result)}return}
      if(m.method==='Runtime.exceptionThrown')consoleErrors.push('exception: '+(m.params.exceptionDetails.exception?.description||m.params.exceptionDetails.text).split('\n')[0]);
      else if(m.method==='Runtime.consoleAPICalled'&&m.params.type==='error')consoleErrors.push('console.error: '+m.params.args.map(a=>a.value??a.description).join(' ').slice(0,200));};
    await cdp('Page.enable');await cdp('Runtime.enable');await cdp('Network.enable');
    await cdp('Network.setBlockedURLs',{urls:['http://*','https://*']});
    await cdp('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
    await cdp('Page.navigate',{url:pathToFileURL(path.join(app,'index.html')).href});
    await until(()=>evaluate('return document.readyState==="complete" && typeof enterProfile==="function";'));
    await evaluate("await enterProfile({id:'uiTask',name:'UI Task',av:0,col:0});if(!S.term){S.term={id:'y4s2',at:Date.now()};await save();finishProfileEntry();}return 1;");
    const custom=process.argv[3]?fs.readFileSync(process.argv[3],'utf8'):null;
    const rows=[];
    if(MODE==='overlap'){
      for(const [w,h] of SIZES){
        await cdp('Emulation.setDeviceMetricsOverride',{width:w,height:h,deviceScaleFactor:1,mobile:false});
        for(const theme of ['dark','light']){
          for(const [name,code] of VIEWS){
            await evaluate("closeModal&&closeModal();setTheme('"+theme+"');"+code+";window.scrollTo(0,0);");
            await pause(700);
            const r=await evaluate(PAGE_JS.overlap);
            rows.push({size:w+'x'+h,theme,screen:name,...r});
          }
        }
      }
      let bad=0;
      for(const r of rows){ if(r.hits||r.disp==='none'||!r.atBottom)bad++; }
      for(const r of rows)console.log(r.size,r.theme,r.screen.padEnd(8),'clep',r.clep.join(','),'say',r.say.join(','),'checked',r.checked,'hits',r.hits,r.hits?JSON.stringify(r.sample):'', r.atBottom?'':'NOT-AT-BOTTOM', r.disp==='none'?'CLEP-HIDDEN':'');
      console.log('TOTAL',rows.length,'combos; failing',bad,'; console errors',consoleErrors.length);
    } else if(MODE==='matched'){
      await cdp('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:false});
      await evaluate("go({name:'module',id:'ent'})");await pause(600);
      await cdp('DOM.enable');await cdp('CSS.enable');
      const doc=await cdp('DOM.getDocument');
      const q=await cdp('DOM.querySelector',{nodeId:doc.root.nodeId,selector:'#page'});
      const m=await cdp('CSS.getMatchedStylesForNode',{nodeId:q.nodeId});
      for(const r of m.matchedCSSRules){const pr=r.rule.style.cssProperties.filter(x=>/padding/.test(x.name)).map(x=>x.name+':'+x.value+(x.disabled?'(off)':''));
        if(pr.length)console.log((r.rule.styleSheetId||'')+' '+r.rule.selectorList.text.slice(0,90)+' {'+pr.join(';')+'}', (r.rule.media||[]).map(x=>x.text).join(','));}
    } else {
      const sizes=[[1440,900],[1180,820]];
      for(const [w,h] of sizes){
        await cdp('Emulation.setDeviceMetricsOverride',{width:w,height:h,deviceScaleFactor:1,mobile:false});
        for(const theme of ['dark','light']){
          await evaluate("closeModal&&closeModal();setTheme('"+theme+"');go({name:'home'});window.scrollTo(0,0);");
          await pause(700);
          const r=await evaluate(custom||'return 0');
          console.log(w+'x'+h,theme,JSON.stringify(r));
        }
      }
    }
    if(consoleErrors.length)console.log(consoleErrors.join('\n'));
  } finally {
    if(socket){try{await cdp('Browser.close')}catch(_){}try{socket.close()}catch(_){}}
    if(browser&&!browser.killed){try{browser.kill()}catch(_){}}
    await pause(500);
    if(work){try{fs.rmSync(work,{recursive:true,force:true})}catch(_){}}
  }
}
main().catch(e=>{console.log('FAILED',e.message);process.exit(1)});
