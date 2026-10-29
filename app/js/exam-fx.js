/* Hourglass beside the exam clock (step 3 part A). Nothing here authors motion.
   The piece is the owner's LottieFiles pick 7 (vendor/lottie-hourglass-data.js), played once by lottie-web 5.12.2
   (the player answer-fx.js already uses). Only the fill and stroke colours are set, from our tokens, with
   answer-fx.js's fxTint. Plays on the first render of a paper; every later render of the same paper, and reduced
   motion, show the last frame. Needs answer-fx.js (fxTint, fxRGB, fxReduced) loaded first. */
let hgLive=null, hgPlayedFor=null;

/* host: the .exam-hg span in the quiz header. exam: Q.exam (its end time names the paper). */
function examHgRun(root){
  if(hgLive){try{hgLive.destroy()}catch(e){}hgLive=null}
  const host=root.querySelector('.exam-hg');
  if(!host||typeof lottie==='undefined'||!window.LOTTIE_FX_HOURGLASS||!Q.exam)return;
  const first=hgPlayedFor!==Q.exam.end;
  hgPlayedFor=Q.exam.end;
  const go=first&&!fxReduced();
  const anim=lottie.loadAnimation({container:host,renderer:'svg',loop:false,autoplay:go,
    animationData:fxTint(window.LOTTIE_FX_HOURGLASS,fxRGB('--accent'),fxRGB('--text-2'))});
  hgLive=anim;
  if(!go){
    const last=()=>anim.goToAndStop(Math.max(0,anim.totalFrames-1),true);
    if(anim.isLoaded)last();else anim.addEventListener('DOMLoaded',last);
  }
}

/* Theme change: the tint is read from the tokens at mount, so remount at the last frame. Colour only; nothing replays. */
new MutationObserver(()=>{
  if(!hgLive||typeof view==='undefined'||view.name!=='quiz')return;
  hgPlayedFor=Q.exam?Q.exam.end:null;
  examHgRun(document);
}).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
