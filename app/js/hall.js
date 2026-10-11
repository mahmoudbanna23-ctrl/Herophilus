/* The home screen as a library: seen from outside first, then walked into.

   The four subject cards are replaced by one painted hall whose four alcoves
   are the four subjects. This file touches NO existing script: it wraps the
   three functions it needs by name (render.js looks them up at call time) and
   builds the hall around whatever vHome already wrote.

     vHome        — after it runs, everything it made moves into .hall-below, the
                    old "Subjects" heading and .mod-grid are dropped, and the
                    welcome <h1> moves onto the outside painting.
     syncFilm     — runs first on every render; it is where we learn which view
                    is showing, so body.hall-on is switched here, the ambient film
                    is stopped while the hall covers it, and any walk-in built by
                    the last render is killed before the page is replaced.
     inkMarkChips — runs right after render() adds the saved-mock button above
                    the page; the button is tucked into .hall-below so the hall
                    stays the first thing on screen.

   THE WALK-IN. Home opens on the outside painting (assets/hall/outside-*.jpg).
   A pinned, scroll-scrubbed section scales that painting about the doorway while
   the hall painting, clipped to the doorway's shape, is seen through it from the
   first pixel; the opening grows with the building until it covers the screen.
   The view then holds while plaques travel into place and their rings draw, and
   the rest of home laps up over the hall's lower edge with the hall moving a
   little slower. Only transform and clip-path are animated. GSAP, ScrollTrigger
   and DrawSVG are classic scripts in js/lib/, loaded from here, never from
   index.html, and never allowed to strand the boot: if they are missing, or take
   over 3 s, or motion is reduced, the plain stacked version stays — outside with
   its welcome card, the hall with plaques in place and rings full — no pin, no
   scrub, no timers.

   Coming back to home from another view lands in the hall, past the door; a
   fresh load starts outside. That is one in-memory variable (prev), never storage.
   Alcove click keeps the push-in; reduced motion: none of it. */
(function(){
  'use strict';

  const link=document.createElement('link');
  link.rel='stylesheet'; link.href='css/hall.css';
  document.head.appendChild(link);
  const warm=document.createElement('link');
  warm.rel='stylesheet'; warm.href='css/warm.css';
  document.head.appendChild(warm);
  const type=document.createElement('link');
  type.rel='stylesheet'; type.href='css/type.css';
  document.head.appendChild(type);

  /* Left to right on the painting. The order is fixed here, by module id — never
     taken from the order activeModules() returns. */
  const ORDER=['ent','ophtho','neuropsych','pediatrics'];
  /* The doorway, as fractions of the 1536x1024 outside painting (pixel-scanned
     by the painter; the two themes agree within 0.3%). */
  const DOOR={cx:.498,cy:.528,l:.412,t:.326,w:.173,h:.404,arch:.425,inset:.004};
  const PAINT_W=1536, PAINT_H=1024;

  let prev=null;          // the view before this render: {name,id}
  let returned=false;     // this render entered home from another view
  let keepY=0;            // scroll position to keep when home re-renders in place
  let pushing=false;      // one-shot guard: a push-in is under way
  let hallObs=null;       // watches the hall to pause loops and swap the Clepsydra
  let walk=null;          // the live walk-in: {kill()}
  let buildToken=0;       // bumped on every kill; a late async upgrade checks it
  let libState='idle';    // 'idle' | 'loading' | 'ok' | 'fail'
  let libPromise=null;
  let decodedTheme='';    // the theme whose two paintings are already decoded

  const reduced=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;
  const tall=()=>matchMedia('(orientation:portrait)').matches;   // same test as hall.css: upright window, tall painting
  const body=()=>document.body;
  const theme=()=>document.documentElement.getAttribute('data-theme')==='light'?'light':'dark';

  function unwatch(){
    if(hallObs){hallObs.disconnect();hallObs=null}
    body().classList.remove('hall-clep');
  }

  /* ---- motion libraries ----------------------------------------------- */
  /* Three local classic scripts, loaded in order. DrawSVG is optional (the rings
     fall back to a dash-offset move without it); gsap and ScrollTrigger are not. */
  function loadLibs(){
    if(libPromise) return libPromise;
    libState='loading';
    const files=['gsap.min.js','ScrollTrigger.min.js','DrawSVGPlugin.min.js'];
    libPromise=new Promise(resolve=>{
      const fin=ok=>{
        libState=ok&&window.gsap&&window.ScrollTrigger?'ok':'fail';
        resolve(libState==='ok');
      };
      (function next(i){
        if(i===files.length){fin(true);return}
        const s=document.createElement('script');
        s.src='js/lib/'+files[i];
        s.onload=()=>next(i+1);
        s.onerror=()=>{ if(i===2) next(3); else fin(false) };
        document.head.appendChild(s);
      })(0);
    });
    return libPromise;
  }
  if(!reduced()) loadLibs();

  function decodePaintings(){
    const th=theme();
    return Promise.all(['outside-'+th,'hall-'+th+(tall()?'-tall':'')].map(n=>{
      const im=new Image();
      im.src='assets/hall/'+n+'.jpg';
      return im.decode?im.decode().catch(()=>{}):Promise.resolve();
    })).then(()=>{decodedTheme=th});
  }

  /* Resolves true when motion can start, false when the plain version must stay.
     The 3 s clock covers the libraries and the two paintings together. */
  function motionReady(){
    return new Promise(resolve=>{
      let done=false;
      const fin=ok=>{ if(done) return; done=true; clearTimeout(t); resolve(ok) };
      const t=setTimeout(()=>fin(false),3000);
      loadLibs().then(ok=>ok?decodePaintings().then(()=>fin(true)):fin(false)).catch(()=>fin(false));
    });
  }
  const motionNow=()=>libState==='ok'&&decodedTheme===theme();

  /* ---- wraps ---------------------------------------------------------- */
  const _syncFilm=syncFilm;
  syncFilm=function(){
    /* Before the page is replaced: remember where a re-render of home stood, and
       take the old walk-in apart while its elements still exist. */
    keepY=prev&&prev.name==='home'&&view.name==='home'?(window.scrollY||0):0;
    killWalk();
    const r=_syncFilm.apply(this,arguments);
    const home=view.name==='home'&&activeModules().length>0;
    returned=home&&!!prev&&prev.name!=='home';
    prev={name:view.name,id:view.id};
    body().classList.toggle('hall-on',home);
    if(home){
      /* display:none does not stop a <video> decoding — pause it explicitly. */
      setFilm(document.querySelector('.ambient .film'),false);
    }else{
      unwatch();
    }
    return r;
  };

  const _vHome=vHome;
  vHome=function(p){
    const r=_vHome.apply(this,arguments);
    buildHall(p);
    return r;
  };

  const _ink=inkMarkChips;
  inkMarkChips=function(root){
    const r=_ink.apply(this,arguments);
    tuck(root);
    return r;
  };

  /* Anything render() put in front of the hall (the saved-mock button) goes in
     front of the content below it instead. */
  function tuck(root){
    const hall=root&&root.querySelector(':scope > .hall');
    const below=root&&root.querySelector(':scope > .hall-below');
    if(!hall||!below) return;
    const strays=[];
    for(const el of Array.from(root.children)){
      if(el===hall) break;
      strays.push(el);
    }
    const first=below.firstChild;
    strays.forEach(el=>below.insertBefore(el,first));
  }

  /* ---- build ---------------------------------------------------------- */
  function buildHall(p){
    unwatch();
    const mods=activeModules();
    const byId={};
    mods.forEach(m=>{byId[m.id]=m});
    if(!ORDER.some(id=>byId[id])){body().classList.remove('hall-on');return}
    body().classList.add('hall-on');

    const below=document.createElement('div');
    below.className='hall-below';
    while(p.firstChild) below.appendChild(p.firstChild);
    const h1=below.querySelector('h1');
    const grid=below.querySelector('.mod-grid');
    if(grid){
      const head=grid.previousElementSibling;
      if(head&&head.tagName==='H2') head.remove();
      grid.remove();
    }

    /* One slot per painted alcove. A subject missing from the data leaves its
       alcove dimmed and inert; it never moves the others. */
    let alcoves='',glows='';
    ORDER.forEach((id,i)=>{
      const m=byId[id], n=i+1;
      if(!m){glows+=`<i class="veil" data-i="${n}"></i>`;return}
      const locked=isLocked(m.id);
      const qs=qsInModule(m.id);
      const d=qs.filter(q=>isAnswered(q.id)).length;
      const a=accuracy(qs);
      const chs=m.groups.reduce((k,g)=>k+g.chapters.length,0);
      if(locked){
        glows+=`<i class="veil" data-i="${n}"></i>`;
        alcoves+=`<button class="alcove locked" type="button" data-i="${n}" data-id="${m.id}"
          style="--hex:${m.hex}" aria-disabled="true" aria-label="${esc(m.name)}, coming soon">
          <span class="plaque"><span class="pl-name">${esc(m.name)}</span>
          <span class="pl-count">Coming soon</span></span></button>`;
        return;
      }
      glows+=`<i class="glow" data-i="${n}"></i>`;
      const pct=qs.length?d/qs.length*100:0;
      const foot=d===0
        ?`<span class="pl-count">Start studying</span>`
        :`<span class="pl-row">${ring(pct,m.hex,38).replace('<svg ','<svg viewBox="0 0 38 38" ')}<span class="pl-meta">
            <span class="pl-acc" style="color:${accColor(a)}">${a===null?'—':a+'%'}</span>
            <span class="pl-count">${d}/${qs.length}<span class="pl-w"> answered</span></span></span></span>`;
      const say=`${m.name}, ${chs} chapters, ${qs.length} question${qs.length===1?'':'s'}`+
        (d?`, ${d} answered${a===null?'':', '+a+'% accuracy'}`:', not started');
      alcoves+=`<button class="alcove" type="button" data-i="${n}" data-id="${m.id}"
        style="--hex:${m.hex}" aria-label="${esc(say)}">
        <span class="plaque"><span class="pl-name">${esc(m.name)}</span>${foot}</span></button>`;
    });

    let dust='';
    for(let i=0;i<30;i++){
      dust+=`<i style="--x:${(Math.random()*100).toFixed(1)}%;--y:${(Math.random()*100).toFixed(1)}%;`+
        `--s:${(1+Math.random()*2).toFixed(1)}px;--d:${(14+Math.random()*18).toFixed(1)}s;`+
        `--dl:-${(Math.random()*30).toFixed(1)}s;--dx:${(Math.random()*40-20).toFixed(0)}px;`+
        `--dy:${(-30-Math.random()*50).toFixed(0)}px"></i>`;
    }

    const hall=document.createElement('section');
    hall.className='hall';
    hall.setAttribute('aria-label','Subjects');
    hall.innerHTML=
      `<div class="hall-view">
         <div class="wk-out" aria-hidden="true"></div>
         <div class="wk-text"></div>
         <div class="wk-clip"><div class="hall-push"><div class="hall-stage">
           <div class="hall-back"></div>
           <div class="hall-glow hall-frame">${glows}</div>
           <div class="hall-dust" aria-hidden="true">${dust}</div>
           <div class="hall-alcoves hall-frame">${alcoves}</div>
           <div class="hall-fore" aria-hidden="true"></div>
           <div class="hall-greet"></div>
         </div></div></div>
       </div>`;

    /* The welcome line and the student's name: real text on the outside painting. */
    const wk=hall.querySelector('.wk-text');
    const who=(typeof me!=='undefined'&&me&&me.name&&me.name!=='Untitled')?me.name:'';
    if(who) wk.insertAdjacentHTML('beforeend',`<p class="wk-name">Welcome, ${esc(who)}</p>`);
    if(h1) wk.appendChild(h1);

    /* The Clepsydra's greeting is unchanged: her existing picture, in the hall. */
    const showClep=!!(CLEP.on&&!CLEP.mini);
    if(showClep){
      const img=document.createElement('img');
      img.className='hall-clep';
      img.src=poseSrc('welcoming');
      img.alt='';
      hall.querySelector('.hall-greet').appendChild(img);
    }

    p.appendChild(hall);
    p.appendChild(below);
    sizeHall(hall);

    const st={vis:false,gate:true,showClep};   // gate: the door has been passed
    const syncClep=()=>{
      hall.classList.toggle('live',st.vis);
      body().classList.toggle('hall-clep',st.showClep&&st.vis&&st.gate);
    };
    st.sync=syncClep;

    hall.addEventListener('click',e=>{
      const b=e.target.closest('.alcove');
      if(!b||b.getAttribute('aria-disabled')==='true') return;
      if(hall.classList.contains('walk')&&!hall.classList.contains('open')) return;
      choose(hall,b,e.detail===0);
    });

    if(matchMedia('(pointer:fine)').matches&&!reduced()) parallax(hall);

    if('IntersectionObserver' in window){
      hallObs=new IntersectionObserver(es=>{
        st.vis=es[es.length-1].isIntersecting;
        syncClep();
      },{threshold:.35});
      hallObs.observe(hall);
    }else{
      st.vis=true;
      syncClep();
    }

    /* Motion: only when allowed, and only once the libraries and both paintings
       are ready. Anything less leaves the plain stacked version as built above. */
    if(!reduced()){
      const token=++buildToken;
      const go_=()=>{ if(token===buildToken&&hall.isConnected) startWalk(hall,below,st,returned,keepY) };
      if(motionNow()) go_();
      else motionReady().then(ok=>{ if(ok) go_() });
    }
  }

  function sizeHall(hall){
    const bar=document.querySelector('.topbar');
    hall.style.setProperty('--hall-top',(bar?bar.offsetHeight:64)+'px');
  }
  addEventListener('resize',()=>{
    const hall=document.querySelector('.hall');
    if(hall) sizeHall(hall);
  });

  /* ---- the walk-in ---------------------------------------------------- */
  function killWalk(){
    buildToken++;
    if(!walk) return;
    const w=walk;
    walk=null;
    try{w.kill()}catch(e){}
  }

  function startWalk(hall,below,st,landed,y0){
    const g=window.gsap, ST=window.ScrollTrigger;
    if(!g||!ST||walk) return;
    g.registerPlugin(ST);
    const hasDraw=!!window.DrawSVGPlugin;
    if(hasDraw) g.registerPlugin(window.DrawSVGPlugin);
    ST.config({ignoreMobileResize:true});

    const view_=hall.querySelector('.hall-view');
    const out=hall.querySelector('.wk-out');
    const text=hall.querySelector('.wk-text');
    const clip=hall.querySelector('.wk-clip');
    const stage=hall.querySelector('.hall-stage');
    const plaques=Array.from(hall.querySelectorAll('.plaque'));
    const rings=Array.from(hall.querySelectorAll('.plaque .ring svg circle:nth-of-type(2)'));

    hall.classList.add('walk');
    below.classList.add('lap');
    clip.inert=true;
    st.gate=false;

    const P={p:0,q:0};        // walk-in progress, pull-back progress (both 0..1)
    const G={};               // geometry, rebuilt on every refresh
    const clamp=(v,lo,hi)=>Math.min(hi,Math.max(lo,v));

    const setOut=v=>g.set(out,{scale:v});
    const setStage=v=>g.set(stage,{scale:v});
    const setTx=g.quickSetter(text,'x','px'), setTy=g.quickSetter(text,'y','px');
    /* Geometry. Runs on build and again on every ScrollTrigger refresh (resize,
       orientation change) — the only place layout is read. */
    function layout(){
      const bar=document.querySelector('.topbar');
      const W=view_.clientWidth, H=view_.clientHeight;
      const k=Math.max(W/PAINT_W,H/PAINT_H), Wo=PAINT_W*k, Ho=PAINT_H*k;
      const ox=clamp(W/2-DOOR.cx*Wo,W-Wo,0), oy=clamp(H/2-DOOR.cy*Ho,H-Ho,0);
      const Px=ox+DOOR.cx*Wo, Py=oy+DOOR.cy*Ho;
      const m=DOOR.inset*Wo;
      const d={l:ox+DOOR.l*Wo+m, r:ox+(DOOR.l+DOOR.w)*Wo-m,
               t:oy+DOOR.t*Ho+m, b:oy+(DOOR.t+DOOR.h)*Ho,
               arch:(DOOR.arch-DOOR.t)*Ho-m};
      /* outside scale: the smallest at which the opening covers the box,
         both sides and the bottom first, then both top corners of the arch */
      let S=Math.max(Px/(Px-d.l),(W-Px)/(d.r-Px),(H-Py)/(d.b-Py))*1.03;
      const inside=(x,yy,s)=>{
        const L=Px+(d.l-Px)*s, R=Px+(d.r-Px)*s;
        if(x<L||x>R) return false;
        const ya=Py+(d.t+d.arch-Py)*s;
        if(yy>=ya) return true;
        const rx=(R-L)/2, ry=d.arch*s, dx=(x-(L+R)/2)/rx, dy=(yy-ya)/ry;
        return dx*dx+dy*dy<=1;
      };
      for(let i=0;i<60&&!(inside(0,0,S)&&inside(W,0,S));i++) S*=1.02;
      /* the hall's own scale at the start: the smallest that still covers the doorway */
      const R=Math.min(1,Math.max((Px-d.l)/Px,(d.r-Px)/(W-Px),(Py-d.t)/Py,(d.b-Py)/(H-Py))*1.04);
      /* the pull-back: cover (what the door shows) down to the width that fits all
         four alcoves (painting x 3.5-97, y 10-77). 1 when cover already fits. */
      const fwC=tall()?Math.min(Math.max(W,H*2/3),1.08*W):Math.min(Math.max(W,1.5*H),2.08*H);
      const fwT=tall()?W/.95:Math.min(W/.94,2.2*H);   // tall: alcoves span x 2.4-98
      const pb=Math.min(1,fwT/fwC);
      const tr=text.getBoundingClientRect?{x:text.offsetLeft+text.offsetWidth/2,y:text.offsetTop+text.offsetHeight/2}:{x:0,y:0};
      Object.assign(G,{W,H,Px,Py,d,S,R,pb,tr,top:bar?bar.offsetHeight:64});
      out.style.left=ox+'px'; out.style.top=oy+'px';
      out.style.width=Wo+'px'; out.style.height=Ho+'px';
      g.set(out,{transformOrigin:(Px-ox)+'px '+(Py-oy)+'px'});
      g.set(stage,{transformOrigin:Px+'px '+Py+'px'});
    }

    function clipFor(so){
      const {W,H,Px,Py,d}=G;
      const L=Px+(d.l-Px)*so, Rr=Px+(d.r-Px)*so, T=Py+(d.t-Py)*so, B=Py+(d.b-Py)*so;
      const rx=(Rr-L)/2, ry=d.arch*so;
      return 'inset('+T.toFixed(1)+'px '+(W-Rr).toFixed(1)+'px '+(H-B).toFixed(1)+'px '+L.toFixed(1)+'px round '+
        rx.toFixed(1)+'px '+rx.toFixed(1)+'px 0 0 / '+ry.toFixed(1)+'px '+ry.toFixed(1)+'px 0 0)';
    }

    /* One scrubbed state -> every moving thing. No layout reads in here. The
       last part of the growth is the quick part of the scroll (u = p^1.5), so the
       enlarged outside painting is on screen for as little time as possible. */
    function apply(){
      const u=Math.pow(P.p,1.5);
      const so=Math.pow(G.S,u);
      setOut(so);
      setStage(Math.min(1,G.R*so)*(1+(G.pb-1)*P.q));
      clip.style.clipPath=u>=1?'none':clipFor(so);
      const f=so-1;
      setTx((G.tr.x-G.Px)*f); setTy((G.tr.y-G.Py)*f);      const open=P.p>=.985;
      if(open!==st.gate){
        st.gate=open;
        hall.classList.toggle('open',open);
        clip.inert=!open;
        st.sync();
      }
    }

    layout();

    /* The scrubbed timeline: 2 units of walk-in, then the hold. Eased "none". */
    const tl=g.timeline({paused:true,defaults:{ease:'none'}});
    tl.to(P,{p:1,duration:2,onUpdate:apply},0);
    tl.to(P,{q:1,duration:.6,onUpdate:apply},2);
    if(plaques.length) tl.fromTo(plaques,{yPercent:130},{yPercent:0,duration:.45,stagger:.1},2.15);
    rings.forEach((c,i)=>{
      const len=parseFloat(c.getAttribute('stroke-dasharray'))||0;
      const off=parseFloat(c.getAttribute('stroke-dashoffset'))||0;
      const pct=len?Math.max(0,Math.min(100,(1-off/len)*100)):0;
      if(hasDraw) tl.fromTo(c,{drawSVG:'0% 0%'},{drawSVG:'0% '+pct.toFixed(2)+'%',duration:.5},2.45+i*.1);
      else tl.fromTo(c,{attr:{'stroke-dashoffset':len}},{attr:{'stroke-dashoffset':off},duration:.5},2.45+i*.1);
    });

    const pin=ST.create({
      trigger:hall,
      start:()=>'top '+G.top+'px',
      end:()=>'+='+Math.round(G.H*tl.duration()),
      pin:true,pinSpacing:true,scrub:.8,anticipatePin:1,animation:tl,
      onToggle:self=>hall.classList.toggle('pinned',self.isActive)
    });

    /* Release: while the rest of home laps up, the hall drifts down inside its box
       by a quarter of the distance — it moves slower than the content. */
    const depthTween=g.fromTo(view_,{y:0},{y:()=>G.H*.25,ease:'none'});
    const depth=ST.create({
      trigger:hall,
      start:()=>pin.end,
      end:()=>pin.end+G.H,
      scrub:true,animation:depthTween,invalidateOnRefresh:true
    });

    const relayout=()=>{layout();apply()};
    ST.addEventListener('refreshInit',relayout);
    apply();
    ST.refresh();

    const jumpTo=yy=>{
      window.scrollTo(0,yy);
      ST.update();
      if(pin.scrubTween) pin.scrubTween.progress(1);
      apply();
    };
    /* Past the door when coming back to home; the same place on an in-place re-render. */
    if(landed||y0>0){
      const run=()=>{ if(walk&&walk.hall===hall) jumpTo(landed?Math.max(0,pin.end-1):y0) };
      Promise.resolve().then(run);
    }

    walk={
      hall,
      kill(){
        ST.removeEventListener('refreshInit',relayout);
        try{depth.kill(true)}catch(e){}
        try{pin.kill(true)}catch(e){}
        try{tl.kill();depthTween.kill()}catch(e){}
        hall.classList.remove('walk','pinned','open');
        below.classList.remove('lap');
        clip.inert=false;
        clip.style.clipPath='';
        st.gate=true;
        st.sync();
      }
    };
  }

  /* The origin is a share of the hall, so it survives the stage being scaled. */
  function setOrigin(hall,b){
    const push=hall.querySelector('.hall-push');
    const hr=push.getBoundingClientRect(), br=b.getBoundingClientRect();
    if(!hr.width||!hr.height) return;
    hall.style.setProperty('--ox',((br.left+br.width/2-hr.left)/hr.width*100).toFixed(1)+'%');
    hall.style.setProperty('--oy',((br.top+br.height/2-hr.top)/hr.height*100).toFixed(1)+'%');
  }

  function choose(hall,b,kbd){
    if(pushing) return;
    const id=b.dataset.id;
    if(kbd||reduced()){go({name:'module',id});return}
    pushing=true;
    setOrigin(hall,b);
    b.classList.add('pick');
    hall.classList.add('pushing');
    setTimeout(()=>{pushing=false;go({name:'module',id})},450);
  }

  /* One listener, two custom properties, written inside a frame. */
  function parallax(hall){
    let raf=0,nx=0,ny=0;
    const write=()=>{
      raf=0;
      hall.style.setProperty('--mx',nx.toFixed(3));
      hall.style.setProperty('--my',ny.toFixed(3));
    };
    hall.addEventListener('pointermove',e=>{
      const r=hall.getBoundingClientRect();
      if(!r.width||!r.height) return;
      nx=((e.clientX-r.left)/r.width-.5)*2;
      ny=((e.clientY-r.top)/r.height-.5)*2;
      if(!raf) raf=requestAnimationFrame(write);
    });
    hall.addEventListener('pointerleave',()=>{
      nx=0;ny=0;
      if(!raf) raf=requestAnimationFrame(write);
    });
  }
})();
