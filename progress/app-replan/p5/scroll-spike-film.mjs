import { spawn } from 'node:child_process';
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const URL_ = 'file:///D:/claude%20os/Medical%20school/Herophilus/progress/app-replan/p5/scroll-spike/index.html';
const OUT = 'D:/tmp-spike-ref/shots/';
import fs from 'node:fs';
const sleep = ms => new Promise(r => setTimeout(r, ms));
let port = 9400 + Math.floor(Math.random()*400);
async function run(pass){
  const prof = 'D:/tmp-spike-ref/prof' + Date.now();
  const ch = spawn(CHROME, ['--headless=new','--remote-debugging-port='+port,'--user-data-dir='+prof,'--no-first-run','--hide-scrollbars','--window-size=1280,800','about:blank'], {stdio:'ignore'});
  let list; for (let i=0;i<40;i++){ try{ list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json(); if(list.find(t=>t.type==='page')) break;}catch{} await sleep(250); }
  const tgt = list.find(t=>t.type==='page');
  const ws = new WebSocket(tgt.webSocketDebuggerUrl);
  await new Promise(r=>ws.onopen=r);
  let id=0; const pend=new Map(); const errs=[];
  ws.onmessage = e => { const m=JSON.parse(e.data); if(m.id&&pend.has(m.id)){pend.get(m.id)(m);pend.delete(m.id);} 
    if(m.method==='Runtime.exceptionThrown') errs.push('EXC '+JSON.stringify(m.params.exceptionDetails).slice(0,300));
    if(m.method==='Runtime.consoleAPICalled' && ['error','warning','assert'].includes(m.params.type)) errs.push('CON '+m.params.type+' '+JSON.stringify(m.params.args.map(a=>a.value??a.description)).slice(0,300));
    if(m.method==='Log.entryAdded' && ['error','warning'].includes(m.params.entry.level)) errs.push('LOG '+m.params.entry.level+' '+m.params.entry.text+' '+(m.params.entry.url||''));
  };
  const send=(method,params={})=>new Promise(r=>{const i=++id;pend.set(i,r);ws.send(JSON.stringify({id:i,method,params}));});
  const ev=async ex=>(await send('Runtime.evaluate',{expression:ex,returnByValue:true,awaitPromise:true})).result?.result?.value;
  await send('Runtime.enable'); await send('Log.enable'); await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride',{width:pass.w,height:pass.h,deviceScaleFactor:1,mobile:pass.w<500});
  if(pass.reduced) await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
  if(pass.fallback) await send('Page.addScriptToEvaluateOnNewDocument',{source:"CSS.supports=function(){return false};document.addEventListener('DOMContentLoaded',function(){var s=document.createElement('style');s.textContent='.scene{animation:none!important}';document.head.appendChild(s)});"});
  await send('Page.navigate',{url:URL_}); await sleep(2500);
  const info=[];
  for(const f of pass.fr){
    await ev(`(async()=>{scrollTo(0,${f}*(document.documentElement.scrollHeight-innerHeight));dispatchEvent(new Event('scroll'));await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));return 1})()`);
    await sleep(pass.fast?60:350);
    const st=await ev(`(()=>{const s=document.querySelector('.scene');const g=e=>getComputedStyle(document.querySelector(e));return {p:getComputedStyle(s).getPropertyValue('--p'),y:scrollY,plate:g('.plate').transform,clip:g('.daily').clipPath,copyOp:g('.copy span').opacity,bookOp:[...document.querySelectorAll('.book')].map(b=>getComputedStyle(b).opacity).join('/'),imgs:[...document.images].filter(i=>!i.naturalWidth).length,fonts:document.fonts.check('20px Cinzel'),ovf:document.documentElement.scrollWidth>innerWidth,rings:[...document.querySelectorAll('.book i')].map(i=>Math.round(i.getBoundingClientRect().width)).join('/'),spans:[...document.querySelectorAll('.copy span')].map(s=>getComputedStyle(s).opacity+'|'+getComputedStyle(s).transform).join(' ; ')}})()`);
    info.push({f,...st});
    const shot=await send('Page.captureScreenshot',{format:'png'});
    fs.writeFileSync(OUT+pass.name+'-'+String(Math.round(f*100)).padStart(3,'0')+'.png',Buffer.from(shot.result.data,'base64'));
  }
  ws.close(); ch.kill(); port++;
  return {info,errs};
}
const passes=JSON.parse(process.argv[2]);
const res={};
for(const p of passes){ try{res[p.name]=await run(p);}catch(e){ try{res[p.name]=await run(p);}catch(e2){res[p.name]={fail:String(e2)};} } }
fs.writeFileSync('D:/tmp-spike-ref/film-'+passes[0].name+'.json',JSON.stringify(res,null,1));
for(const [k,v] of Object.entries(res)){ console.log(k,'errs',v.errs?.length, v.fail||''); if(!v.fast) (v.info||[]).forEach(i=>console.log(JSON.stringify(i))); (v.errs||[]).slice(0,10).forEach(e=>console.log(' ',e)); }
