function sessRing(frac,color){
  const r=54, c=2*Math.PI*r;
  return `<svg class="sr-ring" viewBox="0 0 128 128" aria-hidden="true">
    <circle cx="64" cy="64" r="${r}" fill="none" stroke="var(--line-2)" stroke-width="9"/>
    <circle id="srArc" cx="64" cy="64" r="${r}" fill="none" stroke="${color}" stroke-width="9"
      stroke-linecap="round" stroke-dasharray="${c.toFixed(1)}"
      stroke-dashoffset="${(c*(1-frac)).toFixed(1)}" transform="rotate(-90 64 64)"/></svg>`;
}
/* The tick repaints these four nodes and nothing else. A full render() every
   second would rebuild the page under the reader's cursor once a second. */
/* The rail clock is drawn by renderNav(), which runs only when something calls
   render() — so for a whole year it showed whatever the time was at the last
   render, and looked "frozen" everywhere except the session view (where
   answering a question forces a render and hides the fault). It is repainted
   from the tick here instead, on every view. */
function paintNavClock(){
  const n=$('navSessClock'); if(!n)return;
  const s=sess();
  if(!s){ if(n.className!=='cnt'){n.className='cnt'; n.textContent='—'} return }
  if(n.className!=='badge-due')n.className='badge-due';
  n.textContent=clMMSS(phaseLeft());
}
function paintSessionLive(){
  const s=sess(); if(!s||view.name!=='session')return;
  const t=$('sessTime'); if(!t)return;
  t.textContent=clMMSS(phaseLeft());
  const arc=$('srArc');
  if(arc){
    const r=54,c=2*Math.PI*r;
    const frac=phaseMs()?1-phaseLeft()/phaseMs():0;
    arc.setAttribute('stroke-dashoffset',(c*(1-frac)).toFixed(1));
  }
  const ph=$('sessPhase');
  if(ph)ph.textContent=s.paused?'Paused':(s.phase==='focus'?`Focus · block ${s.cycle} of ${s.plan.cycles}`:'Break');
  const st=sessStats(s);
  const n=$('sessCount'); if(n)n.textContent=st.n;
  const f=$('sessFocus'); if(f)f.textContent=Math.round(sessFocusMs(s)/60000);
}
function sessSetDraft(k,v){ sessDraft[k]=v; render() }

function vSession(p){
  const s=sess();
  let h=`<div class="eyebrow" style="background:var(--buffer)">Focus</div>
  <h1>${ico('clepsydra',26)} Study session</h1>`;

  if(s){
    const rest=s.phase==='break';
    const frac=phaseMs()?1-phaseLeft()/phaseMs():0;
    const st=sessStats(s);
    h+=`<p class="page-sub">The Clepsydra carries this clock into every other screen — you never have to come back here to see it.</p>
    <div class="sess-live">
      <div class="sr-wrap">
        ${sessRing(frac,rest?'var(--ok)':'var(--gold)')}
        <div class="sr-mid">
          <div class="sr-time" id="sessTime">${clMMSS(phaseLeft())}</div>
          <div class="sr-ph" id="sessPhase">${s.paused?'Paused':(rest?'Break':`Focus · block ${s.cycle} of ${s.plan.cycles}`)}</div>
        </div>
      </div>
      <div class="sess-side">
        <div class="grid g3" style="margin:0 0 18px">
          <div class="stat"><span class="emo">${ico('stylus',20)}</span><div class="n" id="sessCount">${st.n}</div><div class="l">Answered now</div></div>
          <div class="stat"><span class="emo">${ico('clepsydra',20)}</span><div class="n" id="sessFocus">${Math.round(sessFocusMs(s)/60000)}</div><div class="l">Minutes focused</div></div>
        </div>
        <div class="filterbar">
          <button class="btn ${s.paused?'go':'sec'}" onclick="sessPause()">${s.paused?'▶ Resume':'❚❚ Pause'}</button>
          <button class="btn sec" onclick="sessSkip()">${rest?'Skip the break':'Take the break now'}</button>
          <button class="btn sec" style="border-color:var(--bad);color:var(--bad)" onclick="endSession(false)">End session</button>
        </div>
        ${sessScopeIds(s.scope).length?`<div class="filterbar" style="margin-top:2px">
          <button class="btn go" onclick="startQuiz(${JSON.stringify(sessScopeIds(s.scope)).replace(/"/g,'&quot;')},'${sessScopeName(s.scope)}')">▶ Back to the questions</button>
        </div>`:''}
      </div>
    </div>`;
  }else{
    h+=`<p class="page-sub">Pick a block length and I will keep the time. The Clepsydra follows you through the app while it runs, so the clock is always in the corner wherever you are studying.</p>
    <div class="card sess-setup">
      <h2 style="margin-top:0">1 · Focus block</h2>
      <div class="filterbar">${[15,25,45,60].map(n=>
        `<button class="chip ${sessDraft.focus===n?'on':''}" style="--c:var(--gold)" onclick="sessSetDraft('focus',${n})">${n} min</button>`).join('')}</div>

      <h2>2 · Break</h2>
      <div class="filterbar">${[3,5,10,15].map(n=>
        `<button class="chip ${sessDraft.brk===n?'on':''}" style="--c:var(--ophtho)" onclick="sessSetDraft('brk',${n})">${n} min</button>`).join('')}</div>

      <h2>3 · How many blocks</h2>
      <div class="filterbar">${[1,2,3,4,6].map(n=>
        `<button class="chip ${sessDraft.cycles===n?'on':''}" style="--c:var(--neuro)" onclick="sessSetDraft('cycles',${n})">${n}</button>`).join('')}</div>

      <h2>4 · What are you working on</h2>
      <div class="filterbar">
        <button class="chip ${sessDraft.scope==='all'?'on':''}" onclick="sessSetDraft('scope','all')">Decide later</button>
        ${(()=>{const d=dueNow().length;return d?`<button class="chip ${sessDraft.scope==='review'?'on':''}" style="--c:var(--ent)" onclick="sessSetDraft('scope','review')">${ico('hourglass',15)} Review due <span style="opacity:.7">${d}</span></button>`:''})()}
        ${MODULES.filter(m=>qsInModule(m.id).length).map(m=>
          `<button class="chip ${sessDraft.scope===m.id?'on':''}" style="--c:${m.hex}" onclick="sessSetDraft('scope','${m.id}')">${ico(m.icon,15)} ${m.name}</button>`).join('')}
      </div>

      <div class="sess-sum">
        ${sessDraft.cycles} × ${sessDraft.focus} min focus with ${sessDraft.brk} min breaks —
        <b>${sessDraft.cycles*sessDraft.focus} minutes of work</b>, about
        ${Math.round((sessDraft.cycles*sessDraft.focus+(sessDraft.cycles-1)*sessDraft.brk)/6)/10} hours end to end.
      </div>
      <div class="filterbar" style="margin-bottom:0">
        <button class="btn go" onclick="startSession({focus:${sessDraft.focus},brk:${sessDraft.brk},cycles:${sessDraft.cycles},scope:'${sessDraft.scope}'})">▶ Begin</button>
      </div>
    </div>`;
  }

  /* ---- the log ---------------------------------------------------------- */
  const log=(S.sessLog||[]).filter(x=>sessionTerm(x)===activeTerm);
  const weekAgo=Date.now()-7*86400000;
  const wk=log.filter(x=>x.start>=weekAgo);
  if(log.length){
    h+=`<div class="grouphdr">Last seven days</div>
    <div class="grid g4" style="margin-bottom:22px">
      <div class="stat"><span class="emo">${ico('clepsydra',20)}</span><div class="n">${wk.reduce((n,x)=>n+(x.focusMin||0),0)}</div><div class="l">Minutes focused</div></div>
      <div class="stat"><span class="emo">${ico('laurel',20)}</span><div class="n">${wk.length}</div><div class="l">Sessions</div></div>
      <div class="stat"><span class="emo">${ico('stylus',20)}</span><div class="n">${wk.reduce((n,x)=>n+(x.answered||0),0)}</div><div class="l">Questions</div></div>
      ${(()=>{const a=wk.reduce((n,x)=>n+(x.answered||0),0), c=wk.reduce((n,x)=>n+(x.correct||0),0);
        const acc=a?Math.round(c/a*100):null;
        return `<div class="stat"><span class="emo">${ico('target',20)}</span><div class="n" style="color:${accColor(acc)}">${acc===null?'—':acc+'%'}</div><div class="l">Accuracy</div></div>`})()}
    </div>
    <div class="grouphdr">Every session</div>`;
    log.slice(0,25).forEach(x=>{
      const d=new Date(x.start);
      const acc=x.answered?Math.round(x.correct/x.answered*100):null;
      h+=`<div class="ch-row" style="cursor:default">
        <span class="ch-dot" style="background:${x.completed?'var(--ok)':'var(--line-2)'}"></span>
        <span class="ch-name">${d.toLocaleDateString('en-GB',{day:'numeric',month:'short'})} ·
          ${d.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'})}</span>
        <span class="ch-count">${x.focusMin} min · ${x.cycles} block${x.cycles===1?'':'s'}</span>
        <span class="ch-acc" style="color:${accColor(acc)};min-width:96px">${x.answered} q${acc===null?'':' · '+acc+'%'}</span>
      </div>`;
    });
  }else if(!s){
    h+=`<div class="empty"><div class="big">${ico('clepsydra',46)}</div><h3>No sessions yet</h3>
      <p>Finish one and it lands here, with the minutes you actually focused and how you scored inside them.</p></div>`;
  }
  p.innerHTML=h;
}

/* ============ SCHEDULE PAGE ============ */
function vSchedule(p){
  const t=todayISO();
  const {rows,catchups,overflow}=buildSchedule();
  const landing={};
  catchups.forEach(c=>{if(c.to)(landing[c.to]=landing[c.to]||[]).push(c)});
  const ed=!!S.editSched;

  const empty=!rows.length;

  let h=`<div class="eyebrow" style="background:var(--peds)">Your plan</div><h1>${ico('tablet',26)} Study schedule</h1>
  <p class="page-sub">${empty
      ? 'This is yours to write. Add the days you are studying and what each one is for; the plan is stored with your profile and nobody else sees it.'
      : 'Every subject has its own <b>&#10003; done</b> and <b>&#10007; missed</b> buttons. Missed work moves to a catch-up slot on a free day; nothing else shifts.'}</p>`;

  /* An empty plan gets one door, not a toolbar: the edit bar's two buttons are
     both meaningless before a day exists. */
  if(empty&&!ed){
    h+=`<div class="empty"><div class="big">${ico('tablet',46)}</div><h3>No days yet</h3>
     <p>Build the plan a day at a time &mdash; a date, then what you mean to study on it. A day you leave without a subject becomes a catch-up slot for anything you miss.</p>
     <div style="margin-top:20px"><button class="btn go" onclick="S.editSched=true;save();render()">${ico('stylus',15)} Start your plan</button></div></div>`;
    p.innerHTML=h;
    return;
  }

  h+=`<div class="edbar">
    <button class="btn ${ed?'':'sec'}" onclick="S.editSched=!S.editSched;save();render()">${ed?'\u2713 Done editing':`${ico('stylus',14)} Edit schedule`}</button>
    ${ed&&rows.length?`<button class="ed-t danger" onclick="resetSchedule()">Clear the whole plan</button>`:''}
  </div>`;

  if(!ed){
    h+=`<div class="sched-legend">
      <span class="leg"><span class="sw" style="background:var(--neuro)"></span>Today</span>
      <span class="leg"><span class="sw" style="background:var(--bad)"></span>Missed</span>
      <span class="leg"><span class="sw" style="background:var(--ok)"></span>Done</span>
      <span class="leg"><span class="sw" style="background:var(--bg-2);border-style:dashed"></span>Free \u00b7 catch-up slot</span>
    </div>`;
    const n=catchups.length;
    if(n){
      h+=`<button class="card" style="margin-bottom:20px;--c:rgba(109,76,125,.4)" onclick="go({name:'moved'})">
        <div style="display:flex;align-items:center;gap:11px">
          <span class="mod-ic" style="background:var(--neuro)">${ico('shuffle',20)}</span>
          <div><div class="mod-name" style="font-size:14.5px">${n} missed item${n===1?'':'s'} to catch up</div>
          <div class="mod-meta" style="margin:0">${overflow>0?`${overflow} with no slot left`:'All of it has a new date'} &rarr;</div></div>
        </div></button>`;
    }
  }

  rows.forEach((d,di)=>{
    const isToday=d.date===t;
    const marks=d.items.map(it=>S.sched[d.date+'|'+it.idx]);
    const allDone=d.items.length&&marks.every(m=>m==='done');
    const anyMissed=marks.some(m=>m==='missed');
    const cls=['day'];
    if(ed)cls.push('editing');
    else{
      if(d.rest||!d.items.length)cls.push('rest');
      if(anyMissed)cls.push('missed'); else if(allDone)cls.push('done');
      if(isToday)cls.push('today');
    }
    const dt=new Date(d.date+'T00:00:00');
    const wd=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][dt.getDay()];
    const dd=dt.toLocaleDateString('en-GB',{day:'numeric',month:'short'});
    const landed=landing[d.date]||[];

    h+=`<div class="${cls.join(' ')}">
      <span class="day-date"><span class="day-d">${dd}</span><br><span class="day-w">${wd}${isToday&&!ed?' \u00b7 today':''}${!ed&&anyMissed?' \u00b7 missed':(!ed&&allDone?' \u00b7 done':'')}</span></span>
      <span class="day-body">`;

    if(ed){
      d.items.forEach(it=>{
        h+=`<div class="ed-item">
          <span class="ed-col" style="background:${it.hex}" title="Change colour" onclick="cycleColour(${di},${it.idx})"></span>
          <input class="ed-lab" value="${esc(it.label)}" placeholder="Label"
            onchange="editItem(${di},${it.idx},'label',this.value)">
          <input class="ed-txt" value="${esc(it.text)}" placeholder="What to study"
            onchange="editItem(${di},${it.idx},'text',this.value)">
          <button class="ed-x" title="Remove" onclick="delItem(${di},${it.idx})">&times;</button>
        </div>`;
      });
      h+=`<button class="ed-add" onclick="addItem(${di})">+ Add a subject</button>`;
    }else{
      if(!d.items.length){
        h+=`<div class="track"><span class="track-body" style="color:var(--ink-4);font-style:italic">Free day \u2014 catch-up slot</span></div>`;
      }
      d.items.forEach(it=>{
        h+=trackRow(d.date,it.idx,it.label,it.hex,it.text,S.sched[d.date+'|'+it.idx]);
      });
      landed.forEach(c=>{
        h+=`<div class="track catchup">
          <span class="track-body"><span class="tag" style="background:${c.hex}">${esc(c.label)}</span>${esc(c.text)}
          <div class="movednote">&#8627; caught up from ${fmtShort(c.date)}</div></span></div>`;
      });
    }
    h+=`</span>`;
    if(ed){
      h+=`<span class="ed-day-tools">
        <button class="ed-t danger" onclick="delDay(${di})">Delete day</button>
      </span>`;
    }
    h+=`</div>`;
  });

  if(ed){
    h+=`<div class="newday">
      <b style="font-size:13px">Add a day:</b>
      <input type="date" id="newDate" value="${nextFreeDate()}">
      <button class="btn go" onclick="addDay()">Add</button>
      <span style="font-size:11.5px;color:var(--ink-4);font-weight:600">A day with no subjects becomes a catch-up slot.</span>
    </div>`;
  }
  p.innerHTML=h;
}
function fmtShort(iso){
  const d=new Date(iso+'T00:00:00');
  return d.toLocaleDateString('en-GB',{day:'numeric',month:'short'});
}
function trackRow(date,idx,label,hex,text,mark){
  return `<div class="track ${mark==='missed'?'is-missed':mark==='done'?'is-done':''}">
    <span class="track-body">${label?`<span class="tag" style="background:${hex}">${esc(label)}</span>`:''}${esc(text)}</span>
    <span class="day-marks">
      <button class="mk done ${mark==='done'?'on':''}" title="Mark done" onclick="setMark('${date}',${idx},'done')">&#10003;</button>
      <button class="mk miss ${mark==='missed'?'on':''}" title="Mark missed" onclick="setMark('${date}',${idx},'missed')">&#10007;</button>
    </span></div>`;
}
function setMark(date,idx,mark){
  const k=date+'|'+idx;
  if(S.sched[k]===mark)delete S.sched[k]; else S.sched[k]=mark;
  markDayActive();save();render();
  if(S.sched[k]==='missed'){
    const {overflow}=buildSchedule();
    toast(overflow>0?`Queued for catch-up \u2014 ${overflow} with no slot left`:'Queued for catch-up');
  }else if(S.sched[k]==='done')toast('Marked done');
  else toast('Cleared');
}

/* Rebuild the plan. Content from missed days flows forward into later study days. */
function buildSchedule(){
  const rows=activeSchedule().map(d=>({
    date:d.date,rest:!!d.rest,
    items:(d.items||[]).map((it,i)=>({label:it.label,text:it.text,hex:it.hex||'#7a6a55',idx:i}))
  }));
  const missed=[];
  rows.forEach(r=>{
    if(r.rest)return;
    r.items.forEach(it=>{
      if(S.sched[r.date+'|'+it.idx]==='missed')
        missed.push({date:r.date,idx:it.idx,text:it.text,label:it.label,hex:it.hex});
    });
  });
  if(!missed.length)return {rows,catchups:[],overflow:0,capacity:0};

  const earliest=missed[0].date;
  const slots=[];
  rows.forEach(r=>{
    if(r.date<=earliest)return;
    if(r.rest||!r.items.length)slots.push({date:r.date,kind:'rest',cap:2});
  });
  const catchups=[];
  let si=0,used=0;
  missed.forEach(m=>{
    while(si<slots.length&&used>=slots[si].cap){si++;used=0}
    if(si>=slots.length){catchups.push(Object.assign({to:null,kind:null},m));return}
    catchups.push(Object.assign({to:slots[si].date,kind:slots[si].kind},m));
    used++;
  });
  return {rows,catchups,overflow:catchups.filter(c=>!c.to).length,
          capacity:slots.reduce((n,s)=>n+s.cap,0)};
}


/* ============ SCHEDULE EDITOR ============ */
function editItem(di,idx,field,val){
  const s=activeSchedule();
  if(!s[di]||!s[di].items[idx])return;
  s[di].items[idx][field]=val;
  save();
}
function cycleColour(di,idx){
  const s=activeSchedule();
  const it=s[di]&&s[di].items[idx];
  if(!it)return;
  const cur=SUBJ_COLOURS.findIndex(c=>c[0].toLowerCase()===String(it.hex).toLowerCase());
  it.hex=SUBJ_COLOURS[(cur+1)%SUBJ_COLOURS.length][0];
  saveSchedule();
}
function addItem(di){
  const s=activeSchedule();
  if(!s[di])return;
  s[di].rest=false;
  s[di].items.push({label:'',text:'',hex:'#7a6a55'});
  saveSchedule();
}
function delItem(di,idx){
  const s=activeSchedule();
  if(!s[di])return;
  const date=s[di].date;
  s[di].items.splice(idx,1);
  /* marks are index-based, so re-key them for this day */
  const keep={};
  Object.keys(S.sched).forEach(k=>{
    const [d,i]=k.split('|');
    if(d!==date){keep[k]=S.sched[k];return}
    const n=+i;
    if(n===idx)return;
    keep[d+'|'+(n>idx?n-1:n)]=S.sched[k];
  });
  S.sched=keep;
  saveSchedule();
}
function addDay(){
  const inp=$('newDate');
  const v=inp&&inp.value;
  if(!v){toast('Pick a date first');return}
  const s=activeSchedule();
  if(s.some(d=>d.date===v)){toast('That day is already in the plan');return}
  s.push({date:v,rest:false,items:[]});
  s.sort((a,b)=>a.date<b.date?-1:1);
  saveSchedule();toast('Day added');
}
function delDay(di){
  const s=activeSchedule();
  if(!s[di])return;
  const date=s[di].date;
  s.splice(di,1);
  Object.keys(S.sched).forEach(k=>{if(k.split('|')[0]===date)delete S.sched[k]});
  saveSchedule();toast('Day removed');
}
function nextFreeDate(){
  const s=activeSchedule();
  if(!s.length)return todayISO();
  const last=s[s.length-1].date;
  const d=new Date(last+'T00:00:00');
  d.setDate(d.getDate()+1);
  return isoLocal(d);
}
function resetSchedule(){
  showModal(`<h3>Clear the whole plan?</h3>
   <p>Every day you have written, and every done / missed mark on them, is removed and the schedule goes back to empty. There is no built-in plan to fall back on, so this cannot be undone. Your answers, highlights and review deck are not affected.</p>
   <div class="modal-actions">
     <button class="btn sec" onclick="closeModal()">Cancel</button>
     <button class="btn" style="background:var(--bad);border-color:var(--bad)" onclick="doResetSchedule()">Clear it</button>
   </div>`);
}
function doResetSchedule(){
  S.schedule=[];S.sched={};
  save();closeModal();render();toast('Schedule cleared');
}

/* ============ RESCHEDULED PAGE ============ */
function vMoved(p){
  const {catchups,overflow,capacity}=buildSchedule();
  let h=`<div class="eyebrow" style="background:var(--neuro)">Catch-up plan</div><h1>${ico('shuffle',26)} Rescheduled</h1>
  <p class="page-sub">Only the subjects you marked missed, and the day each one has been moved to. Nothing else in the schedule was touched.</p>`;

  if(!catchups.length){
    h+=`<div class="empty"><div class="big">${ico('laurel',46)}</div><h3>Nothing missed</h3>
     <p>Nothing is behind. Mark a subject missed on the schedule and it appears here with a new date.</p>
     <div style="margin-top:20px"><button class="btn go" onclick="go({name:'schedule'})">Open schedule</button></div></div>`;
    p.innerHTML=h;return;
  }

  const placed=catchups.filter(c=>c.to);
  const dropped=catchups.filter(c=>!c.to);
  h+=`<div class="grid g4" style="margin-bottom:24px">
    <div class="stat"><span class="emo">${ico('shuffle',20)}</span><div class="n">${placed.length}</div><div class="l">Given a new date</div></div>
    <div class="stat"><span class="emo">${ico('hourglass',20)}</span><div class="n" style="color:${overflow?'var(--bad)':'var(--ok)'}">${overflow}</div><div class="l">No slot left</div></div>
    <div class="stat"><span class="emo">${ico('tablet',20)}</span><div class="n">${capacity}</div><div class="l">Catch-up capacity</div></div>
  </div>`;

  if(overflow){
    h+=`<div class="card" style="margin-bottom:22px;background:var(--bad-bg);border-color:var(--bad)">
      <b>${overflow} item${overflow===1?'':'s'} have nowhere to go.</b>
      <div style="margin-top:7px;font-size:13.3px;color:var(--ink-2);font-weight:500">
      Rest days and buffer days are full. Double up on a catch-up day, or drop something from the plan.</div></div>`;
  }

  const byDate={};
  placed.forEach(c=>{(byDate[c.to]=byDate[c.to]||[]).push(c)});
  Object.keys(byDate).sort().forEach(dt=>{
    const kind=byDate[dt][0].kind;
    h+=`<div class="grouphdr">&rarr; ${fmtShort(dt)} &middot; ${kind==='rest'?'rest day':'buffer day'}</div>`;
    byDate[dt].forEach(c=>{
      h+=`<div class="ch-row" style="cursor:default;align-items:flex-start">
        <span class="ch-dot" style="background:${c.hex};margin-top:4px"></span>
        <span class="ch-name">
          <div class="day-line"><span class="tag" style="background:${c.hex}">${esc(c.label)}</span>${esc(c.text)}</div>
          <div class="movednote">missed ${fmtShort(c.date)} &nbsp;&rarr;&nbsp; <b style="color:var(--ok)">${fmtShort(c.to)}</b></div>
        </span></div>`;
    });
  });

  if(dropped.length){
    h+=`<div class="grouphdr" style="color:var(--bad)">No catch-up slot available</div>`;
    dropped.forEach(c=>{
      h+=`<div class="ch-row" style="cursor:default;align-items:flex-start;border-color:var(--bad);background:var(--bad-bg)">
        <span class="ch-dot" style="background:var(--bad);margin-top:4px"></span>
        <span class="ch-name">
          <div class="day-line"><span class="tag" style="background:${c.hex}">${esc(c.label)}</span>${esc(c.text)}</div>
          <div class="movednote" style="color:var(--bad)">missed ${fmtShort(c.date)} &mdash; nowhere left to put it</div>
        </span></div>`;
    });
  }
  p.innerHTML=h;
}

/* ============ SEARCH ============ */
/* The listbox is what the search input opens. The items are real buttons so a
   keyboard reaches them, Enter and Space activate them, and a screen reader
   hears what each one is. The "+N more" line at the bottom used to look like a
   control while doing nothing, which is the worst of both: it now opens the
   rest of the matches this search collected. */
function doSearch(){
  const v=$('search').value.trim().toLowerCase();
  const box=$('results');
  const sinput=$('search');
  if(v.length<2){box.classList.remove('show');box.innerHTML='';sinput.setAttribute('aria-expanded','false');sinput.removeAttribute('aria-activedescendant');return}
  const hits=[];
  for(const q of QUESTIONS){
    const hay=(q.stem+' '+((q.options||[]).join(' '))+' '+((q.type==='case')?((q.answer||'')+' '):'')+(q.explanation||'')+' '+(q.objective||'')+' '+chapterName(q.chapter)).toLowerCase();
    const idx=hay.indexOf(v);
    if(idx>=0)hits.push({kind:'q',q:q,idx:idx});
    if(hits.length>=40)break;
  }
  /* THEORY is still indexed and still searchable in the code; it is simply not
     searched while the section is held back, because a result the student
     cannot open is worse than no result. */
  const thits=[];
  if(!THEORY_LOCKED)Object.keys(THEORY).forEach(ch=>{
    (THEORY[ch].sections||[]).forEach(s=>{
      const hay=(s.h+' '+(s.body||'')+' '+JSON.stringify(s.table||'')+' '+JSON.stringify(s.flow||'')).toLowerCase();
      const idx=hay.indexOf(v);
      if(idx>=0)thits.push({kind:'t',ch:ch,sec:s,idx:idx});
    });
  });
  thits.sort((a,b)=>a.idx-b.idx);
  hits.sort((a,b)=>a.idx-b.idx);
  /* A button's content model is phrasing content, so the tag and the text are
     spans made into blocks by the stylesheet rather than the divs a div-based
     row could afford. */
  const renderList=(extra)=>{
    const showT=extra?thits:thits.slice(0,5);
    const showQ=extra?hits:hits.slice(0,12);
    let h='';
    let id=0;
    showT.forEach(t=>{
      h+=`<button class="res-item" type="button" role="option" id="res-${id}" data-jump="theory" data-ch="${esc(t.ch)}" data-sec="${esc(t.sec.id)}">
        <span class="res-tag" style="color:var(--neuro)">${ico('scroll',16)} Notes \u00b7 ${esc(chapterName(t.ch))}</span>
        <span class="res-txt"><b>${esc(t.sec.h)}</b></span></button>`;
      id++;
    });
    showQ.forEach(({q})=>{
      const m=moduleOf(q.module)||{hex:'#7a6a55'};
      h+=`<button class="res-item" type="button" role="option" id="res-${id}" data-jump="q" data-qid="${esc(q.id)}">
        <span class="res-tag" style="color:${m.hex}">${esc(chapterName(q.chapter))}</span>
        <span class="res-txt">${esc(q.stem.slice(0,130))}\u2026</span></button>`;
      id++;
    });
    /* The count is of matches this search actually collected, and the loop above
       stops at forty, so this promises only what the next click can deliver. It
       carries role="option" because a listbox may hold nothing else, and the
       arrow keys already walk it as the last row. */
    const more=(hits.length-showQ.length)+(thits.length-showT.length);
    if(more>0)h+=`<button class="res-item res-more" type="button" role="option" data-jump="more">+${more} more \u2014 show them</button>`;
    box.innerHTML=h;
    box.setAttribute('aria-label',`${id} result${id===1?'':'s'} for ${v}`);
    sinput.setAttribute('aria-expanded','true');
    sinput.removeAttribute('aria-activedescendant');
  };
  if(!hits.length&&!thits.length){
    box.innerHTML='<div class="res-empty">Nothing matched \u2014 try a shorter term. Search covers questions'+(THEORY_LOCKED?' and explanations.':', explanations and the notes.')+'</div>';
    box.classList.add('show');
    sinput.setAttribute('aria-expanded','true');
    sinput.removeAttribute('aria-activedescendant');
    return;
  }
  renderList(!!doSearch.all);
  box.classList.add('show');
}
/* The listbox click handler is delegated because the items are rebuilt on
   every keystroke. theory and q are the two jump targets; more re-runs the
   search with the slice limits lifted, so every match this search collected is
   shown at once. The flag lives on doSearch rather than in a new variable
   because the input listener passes doSearch its Event object as the first
   argument, which a parameter would read as a permanent "show everything". It
   is cleared on the next keystroke: a new term deserves the short list again. */
$('results').addEventListener('click',e=>{
  const b=e.target.closest&&e.target.closest('.res-item');if(!b)return;
  const j=b.getAttribute('data-jump');
  if(j==='more'){doSearch.all=true;doSearch();return}
  if(j==='theory'){jumpTheory(b.getAttribute('data-ch'),b.getAttribute('data-sec'));return}
  if(j==='q'){jump(b.getAttribute('data-qid'));return}
});
function jumpTheory(ch,sec){
  $('search').value='';$('results').classList.remove('show');$('search').setAttribute('aria-expanded','false');
  const m=activeModules().find(x=>x.groups.some(g=>g.chapters.some(c=>c[0]===ch)));
  if(!m||!THEORY[ch])return;
  go({name:'theory',mod:m.id,ch:ch,sec:sec});
}
function jump(id){$('search').value='';$('results').classList.remove('show');$('search').setAttribute('aria-expanded','false');startQuiz([id],'Search result')}
/* The listbox is operable from the keyboard because the cursor only has the
   input to land on otherwise, and a dropdown the cursor cannot reach is a
   dropdown that does not exist. ArrowDown and ArrowUp move through the items,
   Home and End jump to the ends, Enter opens the one with focus, Escape closes
   the listbox without clearing the typed term — the student may still want it. */
$('search').addEventListener('keydown',e=>{
  const box=$('results');
  const items=box.querySelectorAll&&box.querySelectorAll('.res-item');
  const open=box.classList.contains('show')&&items&&items.length>0;
  if(e.key==='ArrowDown'&&open){e.preventDefault();if(items[0].focus)items[0].focus();return}
  if(e.key==='ArrowUp'&&open){e.preventDefault();if(items[items.length-1].focus)items[items.length-1].focus();return}
  if(e.key==='Enter'&&open){e.preventDefault();if(items[0])items[0].click();return}
  if(e.key==='Escape'&&open){e.preventDefault();box.classList.remove('show');e.target.setAttribute('aria-expanded','false');e.target.removeAttribute('aria-activedescendant');return}
});
$('results').addEventListener('keydown',e=>{
  const items=e.currentTarget.querySelectorAll('.res-item');
  if(!items.length)return;
  const i=Array.prototype.indexOf.call(items,e.target);
  if(i<0)return;
  if(e.key==='ArrowDown'){e.preventDefault();if(items[(i+1)%items.length].focus)items[(i+1)%items.length].focus();return}
  if(e.key==='ArrowUp'){e.preventDefault();if(items[(i-1+items.length)%items.length].focus)items[(i-1+items.length)%items.length].focus();return}
  if(e.key==='Home'){e.preventDefault();if(items[0].focus)items[0].focus();return}
  if(e.key==='End'){e.preventDefault();if(items[items.length-1].focus)items[items.length-1].focus();return}
  if(e.key==='Escape'){e.preventDefault();$('results').classList.remove('show');const s=$('search');s.setAttribute('aria-expanded','false');s.removeAttribute('aria-activedescendant');s.focus();return}
});

/* ============================================================================
   THE CLEPSYDRA — the study companion.

   A κλεψύδρα is the Alexandrian water clock, so she is a clock, and she wears
   a laurel. She keeps the session timer, and she explains whatever screen she
   is standing on. Everything she states about the app is computed here from
   the same data the screen is built from — she must never be able to drift out
   of date with what the app actually does.

   Where she lives is a DEVICE preference, like the theme: which corner suits
   you depends on the screen you are looking at, not on who is studying. So her
   position, her mute and her collapsed state sit in their own localStorage key
   and are deliberately not synced.
   ============================================================================ */
const CLKEY='wardround.clep';
const CLEP={on:false,mini:false,muted:false,pos:null,posQ:null,seen:{},
            typer:null,hideT:null,glT:null,tickT:null,lastSay:0,idleT:null,
            pose:null,swapT:null,settleT:null,shiftT:null};

/* ---- the figure, in nine poses ------------------------------------------
   THE USER'S OWN ARTWORK, not a drawing of it. Nine poses supplied on
   2026-08-02, cut out of their white sheet and landed on one shared 360x360
   canvas — see CLAUDE.md for the cutout and the alignment, and why a colour
   threshold cannot do either.

   She faces the viewer in all nine and wears her own gold wreath. That
   retired two earlier pieces of work: the CSS stephane (she has a real crown
   now) and the note that she could not be turned to face the reader.

   An <img> is NOT CORS-blocked over file:// the way a font or an ES module
   is, so a relative path works from a double-clicked copy. Only the bundler
   turns these into data: URIs, because a single file has no assets/ folder —
   which is why the filename is a VALUE in this map rather than being built
   inline, exactly as MOD_ART is.
   ------------------------------------------------------------------------ */
const CLEP_POSES={
  waving:'waving', welcoming:'welcoming', talking:'talking', pointing:'pointing',
  thinking:'thinking', surprised:'surprised', dancing:'dancing',
  jumping:'jumping', presenting:'presenting'
};
const CL_REST='waving';
