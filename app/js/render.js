function go(v){
  if(!v)v={name:'home'};
  if(v.name==='theory'&&THEORY_LOCKED)v={name:'home'};
  if(v.name==='module'||(v.name==='theory'&&v.mod)){
    const id=v.name==='module'?v.id:v.mod;
    const m=activeModules().find(x=>x.id===id);
    if(!m||isLocked(id)||(v.ch&&
       (!THEORY[v.ch]||!m.groups.some(g=>g.chapters.some(c=>c[0]===v.ch))))){
      v={name:'home'};
    }
  }
  if(v.name==='quiz'&&(!Q.ids.length||
     Q.ids.some(id=>!QUESTIONS.some(q=>q.id===id))))v={name:'home'};
  view=v;render();window.scrollTo(0,0);closeRail();
}
/* Screens where the learner READS for minutes at a time. The cinematic layer
   pauses the ambient orbs on these, so nothing drifts beside a clinical stem.
   Everything else is a browse screen and stays alive. */
const STILL_VIEWS=['quiz','mock','review','theory'];

/* The ambient film obeys the same gate as the orbs, but CSS can only fade it —
   a paused <video> is the difference between a still picture and a decoder
   running behind a clinical stem, which costs battery and, on a slow machine,
   frames the reader can feel. So the opacity is CSS and the pause is here.

   Reduced motion is checked live rather than cached: the CSS already hides the
   film, and pausing as well means a viewer who flips the OS setting mid-session
   is not left with an invisible video still decoding. Every failure path is
   silent — play() rejects whenever autoplay is blocked, and that is a
   perfectly acceptable outcome that must never surface as an error. */
function setFilm(f,on){
  if(!f) return;
  if(!on){ f.pause(); return }
  const p=f.play();
  if(p&&p.catch) p.catch(()=>{});
}
function syncFilm(){
  const reduce=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  setFilm(document.querySelector('.ambient .film'),
          !reduce && !STILL_VIEWS.includes(view.name));
  /* The gate's copy. A hidden <video> keeps decoding — display:none does not
     stop it — so it has to be paused explicitly the moment the gate closes,
     or it runs for the whole session behind a screen nobody is looking at. */
  const g=$('gate');
  setFilm(document.querySelector('.gate-amb .film'),
          !reduce && !!g && !g.classList.contains('hide'));
}

function render(){
  /* Imports, snapshots and cloud merges can replace S without entering a
     profile again. Reconcile here before any page reads its question pool. */
  if(me){
    const choice=termChoice(S.term);
    if(!choice){
      termEntryPending=true;
      activateTerm(null);
      showGate('profiles');
      return;
    }
    if(termEntryPending)return;
    if(activateTerm(choice.id))toast('Semester updated to '+termName()+'. Saved progress is kept.');
  }
  renderNav();
  const p=$('page');
  // Drives body[data-view] in CSS — the alive-to-browse / calm-to-read gate.
  document.body.dataset.view=view.name||'home';
  /* ⚠️ Drop the reader before EVERY render. bk-on is set by bkInit() on the way
     into a chapter; left on, its overflow:hidden and fixed column height apply
     to whatever view comes next and clip it. Clearing here means only the
     chapter view can ever turn it back on. */
  document.body.classList.remove('bk-on');
  syncFilm();
  const emptyCourse=activeModules().length===0&&
    ['home','module','quiz','review','theory','flagged','mock','weak'].indexOf(view.name)>=0;
  if(emptyCourse)vEmptyTerm(p);
  else ({home:vHome,module:vModule,quiz:vQuiz,review:vReview,schedule:vSchedule,theory:vTheory,
    moved:vMoved,flagged:vFlagged,mock:vMock,session:vSession,weak:vWeak}[view.name]||vHome)(p);
  if((view.name==='home'||view.name==='mock')&&hasSavedMock()){
    p.insertAdjacentHTML('afterbegin','<p><button class="btn sec" onclick="offerMockResume()">Open saved mock exam</button></p>');
  }
  revealOnScroll(p);
  /* The companion travels with the view: she repaints her readout and, the
     first time she meets a screen, explains it. */
  clepPaint(); clepPlace(); clepOnView();
}

/* Fade cards up as they enter the viewport — browse screens only. Reading
   screens get the page entrance animation and then hold completely still.
   Falls back to showing everything if IntersectionObserver is unavailable. */
let _revealObs=null;
function revealOnScroll(root){
  if(_revealObs){_revealObs.disconnect();_revealObs=null}
  if(STILL_VIEWS.includes(view.name)) return;
  if(matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  const items=root.querySelectorAll('.card,.stat,.ch-row,.th-ch,.day');
  if(!items.length||!('IntersectionObserver' in window)) return;
  _revealObs=new IntersectionObserver((entries,obs)=>{
    entries.forEach(e=>{ if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target)} });
  },{rootMargin:'0px 0px -40px 0px',threshold:.06});
  items.forEach((el,i)=>{
    el.classList.add('reveal');
    el.style.transitionDelay=Math.min(i,10)*26+'ms';
    _revealObs.observe(el);
  });
}


function renderNav(){
  $('railTerm').textContent=termName()+' · Q-Bank';
  const rp=$('railProf');
  if(rp&&me){
    rp.innerHTML=avHTML(me.av,'rav')+
      `<span style="flex:1;min-width:0"><span class="rn">${esc(me.name)}</span><br><span class="rs">Switch profile</span></span>`;
  }
  drawRailSync();
  const st=streakCount();
  $('streakBox').innerHTML=st===0?`<span class="fl">${ico('olive',18)}</span>
    <span><span class="t">Answer a question to start a streak</span></span>`:`<span class="fl">${ico('olive',18)}</span>
    <span><span class="n">${st}</span> <span class="t">day${st===1?'':'s'} in a row</span></span>`;
  const due=dueNow().length;
  const flagged=QUESTIONS.filter(q=>S.flags[q.id]).length;
  const moves=buildSchedule().catchups.length;
  let h=`<button class="nav-item ${view.name==='home'?'on':''}" onclick="go({name:'home'})"><span class="ic">${ico('temple',17)}</span> Dashboard</button>`;
  h+=`<button class="nav-item ${view.name==='schedule'?'on':''}" onclick="go({name:'schedule'})"><span class="ic">${ico('tablet',17)}</span> Schedule</button>`;
  h+=`<button class="nav-item ${view.name==='moved'?'on':''}" onclick="go({name:'moved'})"><span class="ic">${ico('shuffle',17)}</span> Rescheduled${moves?`<span class="badge-due">${moves}</span>`:'<span class="cnt">0</span>'}</button>`;
  /* Theory sits back exactly the way a locked subject does — same disabled row,
     same "soon" count — because it is the same promise: the section is coming,
     it is not broken and it is not gone. */
  h+=THEORY_LOCKED
    ? `<button class="nav-item" disabled style="opacity:.45"><span class="ic">${ico('scroll',17)}</span> Theory<span class="cnt">soon</span></button>`
    : `<button class="nav-item ${view.name==='theory'?'on':''}" onclick="go({name:'theory'})"><span class="ic">${ico('scroll',17)}</span> Theory<span class="cnt">${theoryCount()}</span></button>`;
  h+=`<div class="nav-label">Modules</div>`;
  activeModules().forEach(m=>{
    if(isLocked(m.id)){
      h+=`<button class="nav-item" disabled style="opacity:.45">
        <span class="ic">${ico(m.icon,17)}</span> ${m.name}<span class="cnt">soon</span></button>`;
      return;
    }
    h+=`<button class="nav-item ${view.name==='module'&&view.id===m.id?'on':''}" onclick="go({name:'module',id:'${m.id}'})">
      <span class="ic">${ico(m.icon,17)}</span> ${m.name}<span class="cnt">${qsInModule(m.id).length}</span></button>`;
  });
  h+=`<div class="nav-label">Practice</div>`;
  /* A live session shows its clock here as well as on the Clepsydra, so the
     rail tells you one is running even when she is collapsed. */
  const ls=sess();
  h+=`<button class="nav-item ${view.name==='session'?'on':''}" onclick="go({name:'session'})">
    <span class="ic">${ico('clepsydra',17)}</span> Study session${
      ls?`<span class="badge-due" id="navSessClock">${clMMSS(phaseLeft())}</span>`
        :'<span class="cnt" id="navSessClock">—</span>'}</button>`;
  h+=`<button class="nav-item ${view.name==='review'?'on':''}" onclick="go({name:'review'})"><span class="ic">${ico('hourglass',17)}</span> Review deck
    ${due?`<span class="badge-due">${due}</span>`:'<span class="cnt">0</span>'}</button>`;
  h+=`<button class="nav-item ${view.name==='flagged'?'on':''}" onclick="go({name:'flagged'})"><span class="ic">${ico('laurel',17)}</span> Flagged<span class="cnt">${flagged}</span></button>`;
  const weak=weakChapters().filter(c=>c.done>=WEAK_MIN&&c.acc<60).length;
  h+=`<button class="nav-item ${view.name==='weak'?'on':''}" onclick="go({name:'weak'})"><span class="ic">${ico('target',17)}</span> Weakest chapters${
    weak?`<span class="badge-due">${weak}</span>`:'<span class="cnt">0</span>'}</button>`;
  h+=`<button class="nav-item ${view.name==='mock'?'on':''}" onclick="go({name:'mock'})"><span class="ic">${ico('amphora',17)}</span> Mock exam</button>`;
  $('nav').innerHTML=`<button class="nav-item" onclick="showTermPicker()">
    <span class="ic">${ico('tablet',17)}</span> Change semester</button>`+h;
}

/* ============ DASHBOARD ============ */
function vHome(p){
  const total=QUESTIONS.length;
  const done=QUESTIONS.filter(q=>isAnswered(q.id)).length;
  const acc=accuracy(QUESTIONS);
  const due=dueNow().length;
  /* A profile that has answered nothing has nothing to stand on, and the four
     stat tiles say so in the bluntest possible way: 0 / — / 0 / 0. That is an
     empty scoreboard shown to somebody who has not played yet, and it was the
     first sentence the app spoke to a new colleague. The first run asks for a
     subject instead, and puts the subjects directly underneath the question.
     The moment one answer lands the dashboard becomes the ledger it was built
     to be — nothing is removed, it is deferred until it means something. */
  const fresh=done===0;

  let h=`<div class="eyebrow">${esc(termName())}</div>`;
  h+=fresh
    ?`<h1>Choose a subject to begin</h1>
      <p class="page-sub">${total} questions, transcribed from the printed banks. Start anywhere — every chapter remembers where you stopped.</p>`
    :`<h1>Where you stand</h1>
      <p class="page-sub">${total} questions loaded. Work through them by chapter, by module, or build a custom set.</p>`;

  if(!fresh){
    h+=`<div class="grid g4" style="margin-bottom:30px">
    <div class="stat"><span class="emo">${ico('stylus',20)}</span><div class="n">${done}<span style="font-size:15px;color:var(--ink-4)">/${total}</span></div><div class="l">Answered</div></div>
    <div class="stat"><span class="emo">${ico('target',20)}</span><div class="n" style="color:${accColor(acc)}">${acc===null?'—':acc+'%'}</div><div class="l">Accuracy</div></div>
    <div class="stat"><span class="emo">${ico('hourglass',20)}</span><div class="n" style="color:${due?'var(--ent)':'var(--ok)'}">${due}</div><div class="l">Due for review</div></div>
    <div class="stat"><span class="emo">${ico('laurel',20)}</span><div class="n">${QUESTIONS.filter(q=>S.flags[q.id]).length}</div><div class="l">Flagged</div></div>
  </div>`;
  }

  /* openModules(), not MODULES: a student who practised a subject before it was
     locked still has its place saved, and offering to continue it would open a
     chapter with nothing in it. The pointer is kept, just not offered. */
  const recent=Object.keys(S.resumeByChapter||{}).filter(cid=>
    openModules().some(m=>m.groups.some(g=>g.chapters.some(c=>c[0]===cid)))
  ).sort((a,b)=>S.resumeByChapter[b].at-S.resumeByChapter[a].at)[0];
  if(recent){
    const r=S.resumeByChapter[recent];
    h+=`<div class="filterbar"><button class="btn go" onclick="startChapter('${recent}')">${r.finished?'Restart':'Continue'} &mdash; ${esc(chapterName(recent))}</button></div>`;
  }

  const t=todayISO();
  const rows=buildSchedule().rows;
  const today=rows.find(d=>d.date===t);
  let todayHTML='';
  if(today&&today.items&&today.items.length){
    todayHTML=`<h2>${ico('laurel',20)} On today</h2><div class="card" style="margin-bottom:28px;--c:rgba(109,76,125,.4)">
      ${today.items.map(it=>`<div class="day-line">${it.label?`<span class="tag" style="background:${it.hex}">${esc(it.label)}</span>`:''}${esc(it.text)}</div>`).join('')}
      </div>`;
  }

  /* The man the app is named after. The engraving and the biography both come
     from the user's own supplied image (Design\Images\Father of anatomy 2.jpg) — this
     is NOT from the Semester 8 course material and carries no page citation,
     which is why it is kept to biography and never touches clinical content. */
  const heroHTML=`<section class="hero-panel">
    <div class="hp-art"><img src="assets/herophilus-bust.jpg" alt="Engraved bust of Herophilus" loading="lazy"></div>
    <div class="hp-txt">
      <div class="hp-kicker">Alexandria · c. 335–280 BC</div>
      <div class="hp-name">Herophilus</div>
      <div class="hp-sub">Father of Anatomy</div>
      <p>An ancient Greek physician, the first to dissect and study the human body. His work laid the foundations for understanding the <b>brain</b>, the <b>nerves</b>, the <b>eye</b> and the <b>blood vessels</b>.</p>
      <p>Twenty-three centuries later, you are revising the same four things.</p>
    </div>
  </section>`;

  let modsHTML=`<h2>${fresh?'Subjects':'Modules'}</h2><div class="grid g3 mod-grid">`;
  activeModules().forEach(m=>{
    const qs=qsInModule(m.id);
    const d=qs.filter(q=>isAnswered(q.id)).length;
    const a=accuracy(qs);
    const pct=qs.length?d/qs.length*100:0;
    const chs=m.groups.reduce((n,g)=>n+g.chapters.length,0);
    /* A locked subject keeps its card and its artwork — dropping it would read
       as an app that only covers two subjects — but shows no counts and no
       progress ring, because both would be zero and a zero reads as broken. */
    if(isLocked(m.id)){
      modsHTML+=`<div class="card mod-card locked" style="--c:${m.color}" aria-disabled="true">
        ${(m.art||MOD_ART[m.id])?`<span class="mod-art" style="--art:url('../assets/${m.art||MOD_ART[m.id]}.jpg')"></span>`:''}
        <span class="soon">Coming soon</span>
        <div class="mod-info">
          <div class="mod-top"><span class="mod-ic">${ico(m.icon,25)}</span><span class="mod-name">${m.name}</span></div>
          <div class="mod-meta">${chs} chapters on the syllabus. The questions are still being transcribed.</div>
        </div>
      </div>`;
      return;
    }
    /* An untouched subject has no ring worth drawing. A 0% arc, a dash for
       accuracy and "0/1598 answered" are three separate ways of printing the
       same nothing, and printed three times they read as a fault rather than a
       beginning. The card says what to do instead, and earns its ring with the
       first answer. Same height either way, so the grid does not jump when one
       subject crosses over. */
    const foot=d===0
      ?`<div class="ringrow startrow"><span class="startgo">Start studying</span></div>`
      :`<div class="ringrow">${ring(pct,m.hex)}
          <div class="ringmeta"><div class="a" style="color:${accColor(a)}">${a===null?'—':a+'%'}</div>
          <div class="b">${d}/${qs.length} answered</div></div></div>`;
    modsHTML+=`<button class="card mod-card" style="--c:${m.color}" onclick="go({name:'module',id:'${m.id}'})">
      ${(m.art||MOD_ART[m.id])?`<span class="mod-art" style="--art:url('../assets/${m.art||MOD_ART[m.id]}.jpg')"></span>`:''}
      <div class="mod-info">
        <div class="mod-top"><span class="mod-ic">${ico(m.icon,25)}</span><span class="mod-name">${m.name}</span></div>
        <div class="mod-meta">${chs} chapters · ${qs.length} question${qs.length===1?'':'s'}</div>
        ${foot}
      </div>
    </button>`;
  });
  modsHTML+=`</div>`;

  /* The biography sits above the subjects on every run. A first run once led
     with the subjects and kept it as a closing note, which buried the card the
     app is named after at the foot of the page. */
  h+=todayHTML+heroHTML+modsHTML;
  p.innerHTML=h;
}

/* ============ MODULE ============ */
function vModule(p){
  const m=moduleOf(view.id);
  const qs=qsInModule(m.id);
  const a=accuracy(qs);
  let h=`<button class="tb-btn" style="padding-left:0;margin-bottom:8px" onclick="go({name:'home'})">← Dashboard</button>
  <div class="eyebrow" style="background:${m.hex}">${m.name}</div>
  <h1>${ico(m.icon,26)} ${m.name}</h1>
  <p class="page-sub">${qs.length} question${qs.length===1?'':'s'} · ${qs.filter(q=>isAnswered(q.id)).length} answered${a!==null?` · <b style="color:${accColor(a)}">${a}% accuracy</b>`:''}</p>`;

  /* Source filter. Only rendered for banks this module actually has questions
     from, so an empty module does not offer three dead toggles. */
  const allQ=allQsInModule(m.id);
  const present=BANKS.filter(b=>allQ.some(q=>banksOf(q).indexOf(b.id)>=0));
  if(present.length>1){
    const sel=S.banks[m.id]||[];
    const filtering=sel.length>0;
    h+=`<div class="bankbar">
      <span class="bank-lbl">Source</span>
      ${present.map(b=>{
        /* A shared question counts for EVERY bank it is in, so these chips can
           sum to more than the module's question count. That is the honest
           reading — the question really is in both banks — and it is the
           user's choice (2026-08-03). Do not "fix" it by counting origins. */
        const on=!filtering||sel.indexOf(b.id)>=0;
        const n=allQ.filter(q=>banksOf(q).indexOf(b.id)>=0).length;
        return `<button class="bankchip ${on?'on':''}" style="--bk:${b.hex}"
          onclick="toggleBank('${m.id}','${b.id}')"
          aria-pressed="${on}">${b.name}<span class="bankn">${n}</span></button>`;
      }).join('')}
      ${filtering?`<button class="bankchip reset" onclick="clearBanks('${m.id}')">Show all</button>`:''}
    </div>`;
  }

  if(qs.length){
    const un=qs.filter(q=>!isAnswered(q.id));
    h+=`<div class="filterbar">
      <button class="btn go" onclick="startQuiz(${JSON.stringify(qs.map(q=>q.id)).replace(/"/g,'&quot;')},'${m.name} — all')">${ico('play')} Practise all ${qs.length}</button>
      ${un.length?`<button class="btn sec" onclick="startQuiz(${JSON.stringify(un.map(q=>q.id)).replace(/"/g,'&quot;')},'${m.name} — new')">Unanswered (${un.length})</button>`:''}
    </div>`;
  }

  m.groups.forEach(g=>{
    h+=`<div class="grouphdr">${g.name}</div>`;
    g.chapters.forEach(([cid,cname])=>{
      const cq=qsIn(cid);
      const ca=accuracy(cq);
      const cd=cq.filter(q=>isAnswered(q.id)).length;
      const dot=cq.length?(ca===null?'#fff':accColor(ca)):'transparent';
      const resume=(S.resumeByChapter||{})[cid];
      h+=`<button class="ch-row" ${cq.length?'':'disabled'} onclick="startChapter('${cid}')">
        <span class="ch-dot" style="background:${dot}"></span>
        <span class="ch-name">${cname}${resume?` &middot; ${resume.finished?'Restart':'Continue'}`:''}</span>
        <span class="ch-count">${cq.length?`${cd}/${cq.length}`:'no questions yet'}</span>
        <span class="ch-acc" style="color:${accColor(ca)}">${ca===null?'':ca+'%'}</span>
      </button>`;
    });
  });
  p.innerHTML=h;
}

/* ============ QUIZ ============ */
let Q={ids:[],i:0,title:'',sel:null,shown:false,t0:null,txt:'',peek:false,caret:null,did:{},attempts:{},chapter:null,sources:[]};
/* The profile already has a storage key. Keeping the paper inside it makes picks
   and the paper recover together, including through exports and cloud merges. */
