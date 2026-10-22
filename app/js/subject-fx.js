/* Subject-page effects (step 1b, 2026-10-22). Everything that moves here is copied published code; this file only
   wires it to the page and tears it down again. It contains NO animation, easing, timing or keyframes of its own.
     - progressbar.js 1.1.0 (vendor/progressbar.min.js): the chapter ring, options as in the owner's pick
       (strokeWidth 6, easing 'easeInOut', duration 1400, trailWidth 1, svgStyle null, percent text). Only colours and size change.
     - Codrops 3DStackMotion, effect-1 (vendor/stack-motion.js), GSAP + ScrollTrigger 3.12.5, Lenis 0.2.28:
       the stack at the top of the subject page; Lenis set up as the demo's smoothscroll.js does (new Lenis({lerp:.2}),
       lenis.on('scroll',ScrollTrigger.update), gsap.ticker.add, lagSmoothing(0)).
     - the browser's own View Transitions, default animation only (no ::view-transition rules anywhere).
   Lifecycle: render() calls destroy() before it replaces the view and init(page) after a subject page is drawn, so
   Lenis runs only while a subject page is on screen and every ScrollTrigger / timeline / Lenis / ring is gone after.
   Reduced motion: no stack, no Lenis, rings are set() at once, no view transition. */
const SubjFx=(function(){
  const CARDS=27;                 /* the demo's card count per stack */
  let lenis=null,tick=null,effects=[],resizeFns=[],bars=[],liveLenis=0;
  const reduced=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;
  const have=()=>typeof gsap!=='undefined'&&typeof ScrollTrigger!=='undefined'&&typeof Lenis!=='undefined'&&window.StackMotion;
  /* No stack on narrow screens (<=700px): the cards collapse to an unreadable ribbon there. Same path as reduced
     motion: list only, no GSAP / Lenis started. Decided when the page is drawn. */
  const narrow=()=>matchMedia('(max-width:700px)').matches;
  const stackOn=()=>!reduced()&&!narrow()&&!!have();

  /* Leaving a subject page while a ring is still drawing stops its tween, and progressbar.js (shifty) rejects the
     tween's promise with the tween state, a plain {offset:n} object, which nobody handles. That is the library
     being interrupted, not an app fault; swallow exactly that shape and nothing else. */
  window.addEventListener('unhandledrejection',e=>{
    const r=e.reason;
    if(r&&typeof r==='object'&&!(r instanceof Error)&&typeof r.offset==='number')e.preventDefault();
  });

  function ring(host){
    if(typeof ProgressBar==='undefined')return;
    const v=Math.max(0,Math.min(1,parseFloat(host.dataset.v)||0));
    const trail=getComputedStyle(document.documentElement).getPropertyValue('--line-2').trim()||'#888';
    const bar=new ProgressBar.Circle(host,{strokeWidth:6,easing:'easeInOut',duration:1400,color:host.dataset.c,trailColor:trail,trailWidth:1,svgStyle:null,
      text:{value:'0'},step:function(s,c){c.setText(Math.round(c.value()*100)+' %')}});
    bars.push(bar);
    if(reduced())bar.set(v);else bar.animate(v);
  }

  function init(page){
    page.querySelectorAll('.subj .ch-dot[data-v]').forEach(ring);
    if(!stackOn())return;
    const el=page.querySelector('.subj-stack [data-stack-1]');
    if(!el)return;
    gsap.registerPlugin(ScrollTrigger);
    lenis=new Lenis({lerp:.2});liveLenis++;
    lenis.on('scroll',ScrollTrigger.update);
    tick=time=>{lenis.raf(time*1000)};
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    /* The effect adds a window resize listener it never removes; catch it so destroy() can. */
    const orig=window.addEventListener;
    window.addEventListener=function(t,f,o){if(t==='resize')resizeFns.push(f);return orig.call(this,t,f,o)};
    try{effects.push(new window.StackMotion[1](el))}finally{window.addEventListener=orig}
  }

  function destroy(){
    bars.forEach(b=>{try{b.destroy()}catch(e){}});bars=[];
    resizeFns.forEach(f=>window.removeEventListener('resize',f));resizeFns=[];
    effects.forEach(e=>{if(e.tl)e.tl.kill()});effects=[];
    if(typeof ScrollTrigger!=='undefined')ScrollTrigger.getAll().forEach(t=>t.kill());
    if(tick){gsap.ticker.remove(tick);tick=null;gsap.ticker.lagSmoothing(500,33)}   /* 500,33 = GSAP's published default */
    if(lenis){lenis.off('scroll',ScrollTrigger.update);lenis.destroy();lenis=null;liveLenis--}
  }

  const stats=()=>({triggers:typeof ScrollTrigger!=='undefined'?ScrollTrigger.getAll().length:0,lenis:liveLenis,bars:bars.length});

  /* ---- View Transitions: M1 home subject card -> subject header, M2 chapter row / stack card -> quiz header ---- */
  const VT={src:null,kind:null,t:0};
  document.addEventListener('click',e=>{
    const a=e.target.closest&&e.target.closest('.mod-card,.subj .ch-row,.sk-card');
    if(!a||a.disabled)return;
    VT.src=a;VT.kind=a.classList.contains('mod-card')?'subj':'quiz';VT.t=Date.now();
  },true);

  function vt(run){
    const src=VT.src,kind=VT.kind,fresh=src&&Date.now()-VT.t<600;
    VT.src=null;
    if(!fresh||!document.startViewTransition||reduced()||!src.isConnected)return false;
    const name='vt-'+kind;
    src.style.viewTransitionName=name;
    const tr=document.startViewTransition(()=>{
      src.style.viewTransitionName='';
      run();
      window.scrollTo(0,0);
      const tgt=document.querySelector(kind==='subj'?'.subj-head':'.focus-quiz > :first-child');
      if(tgt)tgt.style.viewTransitionName=name;
    });
    tr.ready.catch(()=>{});
    const clear=()=>{const t=document.querySelector('[style*="'+name+'"]');if(t)t.style.viewTransitionName=''};
    tr.finished.then(clear,clear);
    return true;
  }

  return {CARDS,stackOn,init,destroy,stats,vt};
})();
