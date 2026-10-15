/* rooms.js - a painted room behind each subject's pages (redesign trial).

   Replaces the looping background video. One layer, <div class="room">, goes in as the first
   child of .ambient (the video's old slot, under the orbs). Which room shows follows the page:
   a subject's module page, theory, and a quiz or results made only of that subject's
   questions; everything else (hall, timetable, flagged, mixed sets, mocks) shows the hall.
   body[data-room] carries the choice; rooms.css maps it to a painting.

   Movement: scrolling writes --room-p (0..1) on .room through one passive listener and a
   short glide in requestAnimationFrame. The loop stops when settled or the tab is hidden.
   Reading views freeze it; prefers-reduced-motion means a still picture and no listener.
   Read-only on Q, view and QUESTIONS; nothing here writes storage. */
(function(){
  'use strict';

  const IDS=['ent','ophtho','neuropsych','pediatrics'];
  const READING=['quiz','results','mock','review','theory'];
  const amb=document.querySelector('.ambient');
  if(!amb||typeof syncFilm!=='function') return;

  /* Q, view and QUESTIONS are script-scope lets: reachable by bare name, never window.x. */
  const curView=()=>(typeof view!=='undefined'&&view)||{};
  const reduced=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;

  /* ---- the layer ---------------------------------------------------------- */
  const room=document.createElement('div');
  room.className='room';
  room.innerHTML='<i></i><i></i><b class="room-glow"></b>';
  amb.insertBefore(room,amb.firstChild);
  const layers=room.querySelectorAll('i');
  let front=0, shown='';
  const seen=new Set();

  /* Computed style gives the absolute address of whatever painting the CSS variable names. */
  function urlOf(el){
    const m=/url\(["']?([^"')]+)/.exec(getComputedStyle(el).backgroundImage);
    return m?m[1]:'';
  }
  /* Set the plate on the hidden layer, swap once it has decoded. */
  function plate(id){
    if(id===shown) return;
    shown=id;
    const next=layers[1-front], prev=layers[front];
    next.dataset.plate=id;
    const swap=()=>{
      if(shown!==id) return;
      next.classList.add('on'); prev.classList.remove('on'); front=1-front;
    };
    const src=urlOf(next);
    if(!src) return swap();
    const img=new Image(); img.src=src; seen.add(src);
    (img.decode?img.decode():Promise.reject()).then(swap,swap);
  }
  /* While home shows: warm the cache with the other rooms for the current look. */
  function preload(){
    const probe=document.createElement('i');
    probe.style.display='none'; room.appendChild(probe);
    IDS.forEach(id=>{
      probe.dataset.plate=id;
      const src=urlOf(probe);
      if(src&&!seen.has(src)){seen.add(src); new Image().src=src}
    });
    probe.remove();
  }

  /* ---- which room --------------------------------------------------------- */
  function roomFor(){
    const v=curView();
    let id='hall';
    if(v.name==='module') id=v.id;
    else if(v.name==='theory') id=v.mod;
    else if((v.name==='quiz'||v.name==='results')&&typeof Q!=='undefined'&&Q&&Q.ids&&Q.ids.length&&typeof QUESTIONS!=='undefined'){
      const want=new Set(Q.ids), mods=new Set();
      for(const q of QUESTIONS) if(want.has(q.id)) mods.add(q.module);
      if(mods.size===1) id=[...mods][0];
    }
    return IDS.includes(id)?id:'hall';
  }

  /* ---- video off ---------------------------------------------------------- */
  /* The element and its poster stay so base code keeps working; it just never loads. */
  function off(v){
    if(v.autoplay||v.getAttribute('src')||v.querySelector('source')){
      v.autoplay=false; v.removeAttribute('autoplay'); v.preload='none';
      v.querySelectorAll('source').forEach(s=>s.remove());
      v.removeAttribute('src'); v.load();
    }
    v.pause();
  }
  const filmsOff=()=>document.querySelectorAll('video.film').forEach(off);
  /* The gate rebuilds its own video on every step; strip each new one. */
  const gate=document.getElementById('gate');
  if(gate) new MutationObserver(filmsOff).observe(gate,{childList:true});

  /* ---- movement ----------------------------------------------------------- */
  let range=0, tgt=0, cur=0, raf=0, ro=null, armed=false;
  const frozen=()=>READING.includes(curView().name);
  const paint=()=>room.style.setProperty('--room-p',cur.toFixed(4));
  function measure(){range=Math.max(0,document.documentElement.scrollHeight-innerHeight)}
  function tick(){
    raf=0;
    if(document.hidden||frozen()) return;
    cur+=(tgt-cur)*.14;
    if(Math.abs(tgt-cur)<.0008) cur=tgt;
    paint();
    if(cur!==tgt) raf=requestAnimationFrame(tick);
  }
  function kick(){
    if(document.hidden||frozen()) return;
    tgt=range>0?Math.min(1,Math.max(0,scrollY/range)):0;
    if(!raf) raf=requestAnimationFrame(tick);
  }
  const resized=()=>{measure(); kick()};
  /* Listener and observer exist only while motion is allowed; checked live. */
  function arm(){
    if(reduced()){
      if(armed){
        removeEventListener('scroll',kick); removeEventListener('resize',resized);
        if(ro) ro.disconnect();
        armed=false;
      }
      cur=tgt=0; paint();
    }else if(!armed){
      addEventListener('scroll',kick,{passive:true});
      addEventListener('resize',resized);
      const page=document.getElementById('page');
      if(page&&window.ResizeObserver){ro=ro||new ResizeObserver(resized); ro.observe(page)}
      armed=true;
    }
    if(armed){measure(); kick()}
  }
  document.addEventListener('visibilitychange',()=>{if(!document.hidden) kick()});
  matchMedia('(prefers-reduced-motion:reduce)').addEventListener('change',arm);

  /* ---- wire in ------------------------------------------------------------ */
  function apply(){
    if(['quiz','results'].includes(curView().name)){filmsOff();return}
    const id=roomFor();
    document.body.dataset.room=id;
    plate(id);
    filmsOff();
    arm();
    if(curView().name==='home'&&window.requestIdleCallback) requestIdleCallback(preload);
  }
  const _sync=syncFilm;
  syncFilm=function(){
    const r=_sync.apply(this,arguments);
    apply();
    return r;
  };
  apply();
})();
