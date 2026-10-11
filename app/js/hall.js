/* The home screen as a library hall — a look-and-layout trial.

   The four subject cards are replaced by one painted hall whose four alcoves
   are the four subjects. This file touches NO existing script: it wraps the
   three functions it needs by name (render.js looks them up at call time) and
   builds the hall around whatever vHome already wrote.

     vHome        — after it runs, everything it made moves into .hall-below, the
                    old "Subjects" heading and .mod-grid are dropped, and the
                    welcome <h1> moves into the hall.
     syncFilm     — runs first on every render; it is where we learn which view
                    is showing, so body.hall-on is switched here and the ambient
                    film is stopped while the hall covers it.
     inkMarkChips — runs right after render() adds the saved-mock button above
                    the page; the button is tucked into .hall-below so the hall
                    stays the first thing on screen.

   The pictures (assets/hall/*) arrive separately. Until they do, hall.css shows
   a flat warm colour, never a broken image. Alcove boxes are percentages of the
   picture and live at the top of hall.css.

   Motion has a physical cause. Entering home you step back into the hall;
   coming back from a subject you step back out of ITS alcove; choosing one
   pushes in on that alcove. Reduced motion: none of it, and no timer is left
   running — the only timer here is the one-shot push-in. */
(function(){
  'use strict';

  const link=document.createElement('link');
  link.rel='stylesheet'; link.href='css/hall.css';
  document.head.appendChild(link);

  let prev=null;          // the view before this render: {name,id}
  let arriving=false;     // this render entered home from another view
  let arriveFrom=null;    // the module's id when that view was a module
  let lastAlcove=null;    // id of the module last chosen or last left
  let pushing=false;      // one-shot guard: a push-in is under way
  let hallObs=null;       // watches the hall to pause loops and swap the Clepsydra

  const reduced=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;
  const body=()=>document.body;

  function unwatch(){
    if(hallObs){hallObs.disconnect();hallObs=null}
    body().classList.remove('hall-clep');
  }

  /* ---- wraps ---------------------------------------------------------- */
  const _syncFilm=syncFilm;
  syncFilm=function(){
    const r=_syncFilm.apply(this,arguments);
    const home=view.name==='home'&&activeModules().length>0;
    if(view.name==='module') lastAlcove=view.id;
    arriving=home&&(!prev||prev.name!=='home');
    arriveFrom=arriving&&prev&&prev.name==='module'?lastAlcove:null;
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
    if(!mods.length||mods.length>4){body().classList.remove('hall-on');return}
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

    let alcoves='',glows='';
    mods.forEach((m,i)=>{
      const n=i+1, locked=isLocked(m.id);
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
        :`<span class="pl-row">${ring(pct,m.hex,38)}<span class="pl-meta">
            <span class="pl-acc" style="color:${accColor(a)}">${a===null?'—':a+'%'}</span>
            <span class="pl-count">${d}/${qs.length} answered</span></span></span>`;
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
      `<div class="hall-stage">
         <div class="hall-back"></div>
         <div class="hall-glow hall-frame">${glows}</div>
         <div class="hall-dust" aria-hidden="true">${dust}</div>
         <div class="hall-alcoves hall-frame">${alcoves}</div>
         <div class="hall-fore" aria-hidden="true"></div>
         <div class="hall-greet"></div>
       </div>`;

    const greet=hall.querySelector('.hall-greet');
    if(h1) greet.appendChild(h1);
    const showClep=!!(CLEP.on&&!CLEP.mini);
    if(showClep){
      const img=document.createElement('img');
      img.className='hall-clep';
      img.src=poseSrc('welcoming');
      img.alt='';
      greet.appendChild(img);
    }

    p.appendChild(hall);
    p.appendChild(below);
    sizeHall(hall);

    /* Arrival: you step back into the hall — out of the alcove you just left. */
    if(arriving&&!reduced()){
      arriving=false;
      const from=arriveFrom&&hall.querySelector(`.alcove[data-id="${arriveFrom}"]`);
      if(from) setOrigin(hall,from);
      hall.classList.add('arrive');
      hall.querySelector('.hall-stage').addEventListener('animationend',()=>hall.classList.remove('arrive'),{once:true});
    }
    arriving=false;

    hall.addEventListener('click',e=>{
      const b=e.target.closest('.alcove');
      if(!b||b.getAttribute('aria-disabled')==='true') return;
      choose(hall,b,e.detail===0);
    });

    if(matchMedia('(pointer:fine)').matches&&!reduced()) parallax(hall);

    if('IntersectionObserver' in window){
      hallObs=new IntersectionObserver(es=>{
        const on=es[es.length-1].isIntersecting;
        hall.classList.toggle('live',on);
        body().classList.toggle('hall-clep',on&&showClep);
      },{threshold:.35});
      hallObs.observe(hall);
    }else{
      hall.classList.add('live');
      body().classList.toggle('hall-clep',showClep);
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

  /* The origin is a share of the hall, so it survives the stage being scaled. */
  function setOrigin(hall,b){
    const hr=hall.getBoundingClientRect(), br=b.getBoundingClientRect();
    if(!hr.width||!hr.height) return;
    hall.style.setProperty('--ox',((br.left+br.width/2-hr.left)/hr.width*100).toFixed(1)+'%');
    hall.style.setProperty('--oy',((br.top+br.height/2-hr.top)/hr.height*100).toFixed(1)+'%');
  }

  function choose(hall,b,kbd){
    if(pushing) return;
    const id=b.dataset.id;
    lastAlcove=id;
    if(kbd||reduced()){go({name:'module',id});return}
    pushing=true;
    setOrigin(hall,b);
    hall.classList.remove('arrive');
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
