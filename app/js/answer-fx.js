/* Answer motion for the focus quiz. Nothing here authors motion.
   - Tick and cross: the owner's two LottieFiles pieces (vendor/lottie-fx-data.js), played by lottie-web 5.12.2 (vendor/lottie_light.min.js).
   - Row shake and bounce: animate.css 4.1.1 classes animate__headShake and animate__pulse (css/animate-picks.css), default duration.
   Only colour values are changed: the Lottie fill and stroke colours are set from our tokens when the animation is created.
   Reduced motion: the Lottie shows its last frame and no animate.css class is applied.
   Exam mode never reaches here: nothing is revealed in a paper. */
let fxLive=[];

function fxReduced(){return !!(window.matchMedia&&window.matchMedia('(prefers-reduced-motion:reduce)').matches)}

/* "#rrggbb" or "#rgb" token value to Lottie's 0..1 floats */
function fxRGB(token){
  let v=getComputedStyle(document.documentElement).getPropertyValue(token).trim().replace('#','');
  if(v.length===3)v=v.split('').map(c=>c+c).join('');
  if(!/^[0-9a-f]{6}/i.test(v))return null;
  return [0,2,4].map(i=>parseInt(v.substr(i,2),16)/255);
}

/* Colour values only. Walks a copy of the animation data and rewrites every fill and stroke colour. */
function fxTint(data,fill,stroke){
  const d=JSON.parse(JSON.stringify(data));
  const paint=(c,rgb)=>{
    if(!c||!rgb)return;
    const col=rgb.concat([1]);
    if(c.a===0)c.k=col;
    else if(Array.isArray(c.k))c.k.forEach(kf=>{if(kf.s)kf.s=col.slice();if(kf.e)kf.e=col.slice()});
  };
  (function walk(o){
    if(!o||typeof o!=='object')return;
    if(o.ty==='fl')paint(o.c,fill);
    else if(o.ty==='st')paint(o.c,stroke);
    for(const k in o)walk(o[k]);
  })(d);
  return d;
}

/* kind: 'check' or 'cross'. play: true only on the render that follows an actual check. */
function fxMount(host,kind,play){
  if(typeof lottie==='undefined')return false;
  const data=kind==='check'?window.LOTTIE_FX_CHECK:window.LOTTIE_FX_CROSS;
  if(!data)return false;
  const fill=fxRGB(kind==='check'?'--ok':'--bad'),stroke=fxRGB('--surface-0');
  const go=play&&!fxReduced();
  const anim=lottie.loadAnimation({container:host,renderer:'svg',loop:false,autoplay:go,animationData:fxTint(data,fill,stroke)});
  fxLive.push(anim);
  if(!go){
    const last=()=>anim.goToAndStop(Math.max(0,anim.totalFrames-1),true);
    if(anim.isLoaded)last();else anim.addEventListener('DOMLoaded',last);
  }
  return true;
}

/* Theme change: the tint is read from the tokens at mount, so remount the icons at their last frame to pick up the new colours.
   Colour only; nothing replays. */
new MutationObserver(()=>{if(fxLive.length)fxRun(document,false)}).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});

/* Called after the question card is in the DOM. fresh = this render follows a check. */
function fxRun(root,fresh){
  if(typeof lottie!=='undefined'){fxLive.forEach(a=>{try{a.destroy()}catch(e){}});fxLive=[]}
  const reduced=fxReduced();
  root.querySelectorAll('.fx[data-fx]').forEach(host=>{
    const row=host.closest('.opt');
    const mounted=fxMount(host,host.getAttribute('data-fx'),fresh&&host.hasAttribute('data-play'));
    /* no player loaded: leave the plain letter showing */
    if(!mounted&&row){const l=host.parentElement;if(l)l.classList.remove('has-fx');host.remove()}
  });
  if(fresh&&!reduced){
    const bad=root.querySelector('.opt.wrong'),good=root.querySelector('.opt.correct');
    if(bad)bad.classList.add('animate__animated','animate__headShake');
    else if(good)good.classList.add('animate__animated','animate__pulse');
  }
}
