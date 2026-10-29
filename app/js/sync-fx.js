/* Sync light (step 3 part C). Nothing here authors motion.
   While the rail says "Syncing" the light is the owner's pick 32, the useAnimations "Loading v2" Lottie
   (vendor/lottie-loading-data.js), played by lottie-web 5.12.2 as published: looped, because a sync has no known length.
   Only the colour is set, from our token, with answer-fx.js's fxTint. Under reduced motion it shows one still frame.
   Needs answer-fx.js (fxTint, fxRGB, fxReduced) loaded first. drawRailSync (gate.js) calls syncLoadMount after every repaint. */
let syncLo=null;

function syncLoadMount(){
  if(syncLo){try{syncLo.destroy()}catch(e){}syncLo=null}
  const host=document.querySelector('#railSync .sync-lo');
  if(!host||typeof lottie==='undefined'||!window.LOTTIE_FX_LOADING)return;
  const go=!fxReduced();
  const c=fxRGB('--accent');
  const anim=lottie.loadAnimation({container:host,renderer:'svg',loop:go,autoplay:go,animationData:fxTint(window.LOTTIE_FX_LOADING,c,c)});
  syncLo=anim;
  if(!go){
    const still=()=>anim.goToAndStop(Math.max(0,anim.totalFrames-1),true);
    if(anim.isLoaded)still();else anim.addEventListener('DOMLoaded',still);
  }
}

/* Theme change: the tint is read from the tokens at mount, so remount. Colour only. */
new MutationObserver(()=>{if(syncLo&&typeof drawRailSync==='function')drawRailSync()}).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
