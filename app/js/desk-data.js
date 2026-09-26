/* ============ DESK DATA ============
   Pure functions for the living-desk home. No DOM, no globals read, no
   mutation. Every function takes its data as arguments. Not linked from
   index.html yet — run `node app/js/desk-data.js` for the self-check. */

/* local ISO date, no timezone dependency on utils.js */
function deskIsoLocal(d){
  const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}
function deskDayMs(iso){
  const [y,m,d]=iso.split('-').map(Number);
  return new Date(y,m-1,d).getTime();
}

/* 1. SRS letters due — mirrors utils.js dueNow()/inDeck() (utils.js:66-80):
   a deck item (answered, and if correct only at low confidence) with no srs
   record is due; a correct item at max level is excluded; everything else
   follows its srs due date. */
function ddInDeck(qid,answers){
  const a=answers[qid];
  if(!a)return false;
  if(a.ok!==true)return true;
  return a.conf===0||a.conf===1;
}
function lettersDue(answers,srs,qIds,today,maxLvl){
  let n=0;
  for(const qid of qIds){
    if(!ddInDeck(qid,answers))continue;
    const s=srs[qid];
    if(!s){n++;continue}
    if(answers[qid].ok===true&&s.lvl>=maxLvl)continue;
    if(s.due<=today)n++;
  }
  const state = n===0?0 : n===1?1 : n<10?'few':'many';
  return {count:n,state};
}

/* 2. mastery + spine-gilt tier */
const MASTERY_TIERS={
  t1Answered:0.25,
  t2Answered:0.60,t2Correct:0.70,
  t3Answered:0.90,t3Correct:0.85
};
function mastery(S,questions,modId){
  const answers=S.answers||{};
  const mq=questions.filter(q=>q.module===modId);
  const total=mq.length;
  let answered=0,correct=0;
  for(const q of mq){
    const a=answers[q.id];
    if(!a)continue;
    answered++;
    if(a.ok===true)correct++;
  }
  const answeredRatio=total?answered/total:0;
  const correctRatio=answered?correct/answered:0;
  const pct=answered?Math.round(correctRatio*100):0;
  let tier=0;
  if(answeredRatio>=MASTERY_TIERS.t3Answered&&correctRatio>=MASTERY_TIERS.t3Correct)tier=3;
  else if(answeredRatio>=MASTERY_TIERS.t2Answered&&correctRatio>=MASTERY_TIERS.t2Correct)tier=2;
  else if(answeredRatio>=MASTERY_TIERS.t1Answered)tier=1;
  return {answered,total,correct,pct,tier};
}

/* 3. most recently touched chapter inside a module */
function ribbonChapter(S,modId,modules){
  const rbc=S.resumeByChapter||{};
  const mod=modules.find(m=>m.id===modId);
  if(!mod)return null;
  const cids=new Set();
  for(const g of mod.groups)for(const c of g.chapters)cids.add(c[0]);
  let best=null,bestAt=-1;
  for(const cid of Object.keys(rbc)){
    if(!cids.has(cid))continue;
    if(!rbc[cid])continue;
    const at=rbc[cid].at||0;
    if(at>bestAt){bestAt=at;best=cid}
  }
  return best;
}

/* 4. ids to drill */
function weakSet(S,questions,limit){
  const miss=S.miss||{};
  const qset=new Set(questions.map(q=>q.id));
  const missIds=Object.keys(miss).filter(id=>(miss[id]||0)>0&&qset.has(id));
  if(missIds.length){
    const ids=missIds.slice().sort((a,b)=>(miss[b]||0)-(miss[a]||0)).slice(0,limit);
    return {ids,source:'miss'};
  }
  const answers=S.answers||{};
  const wrong=questions.filter(q=>{
    const a=answers[q.id];
    return a&&a.ok===false;
  }).sort((a,b)=>(answers[b.id].at||0)-(answers[a.id].at||0));
  const ids=wrong.slice(0,limit).map(q=>q.id);
  return {ids,source:'last'};
}

/* 5. answers logged today, repeats included */
function dailyCount(S,today){
  return S.tally ? (S.tally[today]||0) : null;
}

/* 6. exam countdown */
function nextExam(exams,now){
  const today=deskIsoLocal(now);
  const upcoming=exams.filter(e=>e.date>=today).sort((a,b)=>a.date<b.date?-1:1);
  if(!upcoming.length)return null;
  const e=upcoming[0];
  const daysLeft=Math.round((deskDayMs(e.date)-deskDayMs(today))/86400000);
  return Object.assign({},e,{daysLeft});
}
function sendoffDue(exams,now,shown){
  const t=new Date(now);
  t.setDate(t.getDate()+1);
  const tomorrow=deskIsoLocal(t);
  const shownSet=shown instanceof Set?shown:new Set(shown||[]);
  const e=exams.find(x=>x.date===tomorrow&&!shownSet.has(x.id));
  return e?Object.assign({},e):null;
}

if(typeof module!=='undefined'){
  let n=0;
  function ok(cond,label){
    if(!cond)throw new Error('desk-data self-check failed: '+label);
    n++;
  }

  /* empty S everywhere */
  ok(lettersDue({},{},['a','b'],'2026-09-26',4).count===0,'lettersDue empty S');
  ok(mastery({},[{id:'q1',module:'ent'}],'ent').answered===0,'mastery empty S');
  ok(ribbonChapter({},'ent',[{id:'ent',groups:[{chapters:[['ent-earanat','Ear anatomy']]}]}])===null,'ribbonChapter empty S');
  ok(weakSet({},[{id:'q1'}],5).ids.length===0,'weakSet empty S');
  ok(dailyCount({},'2026-09-26')===null,'dailyCount tally absent');

  /* tally absent vs present */
  ok(dailyCount({tally:{'2026-09-26':4}},'2026-09-26')===4,'dailyCount tally present, hit');
  ok(dailyCount({tally:{}},'2026-09-26')===0,'dailyCount tally present, empty-day miss');

  /* miss absent vs present */
  const Qs=[
    {id:'q1',module:'ent'},{id:'q2',module:'ent'},{id:'q3',module:'ent'}
  ];
  const Slast={answers:{
    q1:{pick:0,ok:true,at:100},
    q2:{pick:1,ok:false,at:300},
    q3:{pick:2,ok:false,at:200}
  }};
  const wsLast=weakSet(Slast,Qs,5);
  ok(wsLast.source==='last','weakSet falls back to last when miss absent');
  ok(wsLast.ids[0]==='q2'&&wsLast.ids[1]==='q3','weakSet last-wrong ordered most-recent-first');
  const Smiss={miss:{q1:1,q3:5}};
  const wsMiss=weakSet(Smiss,Qs,5);
  ok(wsMiss.source==='miss','weakSet prefers miss when present');
  ok(wsMiss.ids[0]==='q3'&&wsMiss.ids[1]==='q1','weakSet miss ordered by count desc');
  const wsMissLimit=weakSet(Smiss,Qs,1);
  ok(wsMissLimit.ids.length===1&&wsMissLimit.ids[0]==='q3','weakSet respects limit');

  /* chapter tuples */
  const modules=[{id:'ent',groups:[
    {chapters:[['ent-earanat','Ear anatomy'],['ent-nose','Nose']]}
  ]}];
  const Sribbon={resumeByChapter:{
    'ent-earanat':{qid:'x',at:1000,finished:false},
    'ent-nose':{qid:'y',at:2000,finished:true},
    'peds-other':{qid:'z',at:9999,finished:false}
  }};
  ok(ribbonChapter(Sribbon,'ent',modules)==='ent-nose','ribbonChapter picks most recent within module, ignores other-module cid');
  ok(ribbonChapter({resumeByChapter:{'peds-other':{at:1}}},'ent',modules)===null,'ribbonChapter null when nothing in module');
  ok(ribbonChapter({resumeByChapter:{'ent-earanat':null,'ent-nose':{at:5}}},'ent',modules)==='ent-nose','ribbonChapter skips a null entry instead of throwing');

  /* mastery tiers */
  const bigMod=[];
  for(let i=0;i<100;i++)bigMod.push({id:'q'+i,module:'m'});
  const Stier3={answers:{}};
  for(let i=0;i<95;i++)Stier3.answers['q'+i]={ok:i<90};
  const m3=mastery(Stier3,bigMod,'m');
  ok(m3.tier===3,'mastery tier 3 at 95% answered, ~94.7% correct');
  const Stier0={answers:{q0:{ok:true},q1:{ok:true}}};
  ok(mastery(Stier0,bigMod,'m').tier===0,'mastery tier 0 under 25% answered');
  const mk=(answered,correct)=>{const S={answers:{}};for(let i=0;i<answered;i++)S.answers['q'+i]={ok:i<correct};return S};
  ok(mastery(mk(25,0),bigMod,'m').tier===1,'mastery 25/0 gives tier 1 (25% answered edge)');
  ok(mastery(mk(60,42),bigMod,'m').tier===2,'mastery 60/42 gives tier 2 (70% correct edge)');
  ok(mastery(mk(60,41),bigMod,'m').tier===1,'mastery 60/41 gives tier 1 (just under 70% correct)');
  ok(mastery(mk(90,77),bigMod,'m').tier===3,'mastery 90/77 gives tier 3 (90% answered + 85%+ correct edge)');
  ok(mastery(mk(90,76),bigMod,'m').tier===2,'mastery 90/76 gives tier 2 (just under 85% correct)');
  ok(mastery(mk(89,77),bigMod,'m').tier===2,'mastery 89/77 gives tier 2 (just under 90% answered)');

  /* lettersDue state buckets */
  ok(lettersDue({},{},[],'2026-09-26',4).state===0,'lettersDue state 0');
  const oneAns={q1:{ok:false}};
  const oneDue={q1:{due:'2026-09-25'}};
  ok(lettersDue(oneAns,oneDue,['q1'],'2026-09-26',4).state===1,'lettersDue state 1');
  const fewAns={},fewSrs={};
  for(let i=0;i<3;i++){fewAns['q'+i]={ok:false};fewSrs['q'+i]={due:'2026-09-01'}}
  ok(lettersDue(fewAns,fewSrs,['q0','q1','q2'],'2026-09-26',4).state==='few','lettersDue state few');
  const manyAns={},manySrs={};
  for(let i=0;i<12;i++){manyAns['q'+i]={ok:false};manySrs['q'+i]={due:'2026-09-01'}}
  const manyIds=Array.from({length:12},(_,i)=>'q'+i);
  ok(lettersDue(manyAns,manySrs,manyIds,'2026-09-26',4).state==='many','lettersDue state many');

  /* lettersDue matches utils.js dueNow(): unanswered srs is not due, a correct
     high-confidence answer is out of the deck, a maxed-out correct item is
     excluded even with a stale due date */
  const rAns={a:{ok:false},b:{ok:true},c:{ok:true,conf:2}};
  const rSrs={b:{lvl:4,due:'2026-09-01'},c:{lvl:1,due:'2026-09-01'}};
  ok(lettersDue(rAns,rSrs,['a','b','c'],'2026-09-26',4).count===1,'lettersDue dueNow-equivalence repro gives count 1');

  /* day boundary for nextExam */
  const exams=[
    {id:'e1',label:'Peds papers',date:'2026-09-17'},
    {id:'e2',label:'ENT',date:'2026-09-26'},
    {id:'e3',label:'Ophtho',date:'2026-09-27'}
  ];
  const now=new Date(2026,8,26,9,0,0); /* month is 0-based: Sep 26 2026 */
  const ne=nextExam(exams,now);
  ok(ne.id==='e2'&&ne.daysLeft===0,'nextExam includes today, daysLeft 0');
  const nowLate=new Date(2026,8,26,23,59,0);
  const neLate=nextExam(exams,nowLate);
  ok(neLate.id==='e2'&&neLate.daysLeft===0,'nextExam day boundary uses calendar date, not time of day');
  const nowAfter=new Date(2026,8,27,0,0,0);
  ok(nextExam(exams,nowAfter).id==='e3'&&nextExam(exams,nowAfter).daysLeft===0,'nextExam on the exam’s own date, daysLeft 0');
  const past=new Date(2027,0,1);
  ok(nextExam(exams,past)===null,'nextExam null when every exam is past');

  /* sendoffDue already-shown */
  const nowEve=new Date(2026,8,26,20,0,0); /* tomorrow = e3 2026-09-27 */
  ok(sendoffDue(exams,nowEve,[]).id==='e3','sendoffDue fires for tomorrow’s exam');
  ok(sendoffDue(exams,nowEve,['e3'])===null,'sendoffDue suppressed once shown');
  ok(sendoffDue(exams,nowEve,new Set(['e3']))===null,'sendoffDue accepts a Set too');
  ok(sendoffDue(exams,nowEve,[])!==exams[2],'sendoffDue returns a copy, not the original exam object');

  /* sendoffDue across a 25-hour DST day (Africa/Cairo falls back 2026-10-30) —
     setDate(+1) crosses it correctly regardless of what the ms-of-day arithmetic
     would have done; run this file under TZ=Africa/Cairo to exercise the bug */
  const dstExams=[{id:'x',date:'2026-10-30'}];
  const dstNow=new Date(2026,9,29,0,30,0);
  const dstResult=sendoffDue(dstExams,dstNow,[]);
  ok(!!dstResult&&dstResult.id==='x','sendoffDue fires across the Cairo DST 25-hour day');

  console.log('desk-data self-check: '+n+' passed');

  module.exports={lettersDue,mastery,ribbonChapter,weakSet,dailyCount,nextExam,sendoffDue};
}
