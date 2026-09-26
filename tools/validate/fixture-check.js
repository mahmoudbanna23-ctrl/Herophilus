'use strict';
const fs=require('fs'),os=require('os'),path=require('path');const {validate}=require('./validate');
const ROOT=path.resolve(__dirname,'..','..'), work=fs.mkdtempSync(path.join(os.tmpdir(),'herophilus_fixture_'));
function copy(a,b){fs.mkdirSync(b,{recursive:true});for(const e of fs.readdirSync(a,{withFileTypes:true})){const s=path.join(a,e.name),d=path.join(b,e.name);e.isDirectory()?copy(s,d):fs.copyFileSync(s,d)}}
const cases=[
 ['duplicate id','questions.ent.js','\nQ_ENT.push(Object.assign({},Q_ENT[0]));\n','duplicate id'],
 ['answer out of range','questions.ent.js','\nQ_ENT[0].answer=999999;\n','answer out of range'],
 ['dangling chapter','questions.ent.js',"\nQ_ENT[0].chapter='fixture-missing-chapter';\n",'unknown chapter'],
 ['sparse hole','questions.ent.js','\ndelete Q_ENT[0];\n','sparse hole'],
 ['missing imgAlt','questions.ent.js',"\nQ_ENT[0].image='q-fixture';delete Q_ENT[0].imgAlt;\n",'image needs imgAlt'],
 ['syntax error','questions.ent.js','\nthis is not valid javascript (;\n','syntax/load questions.ent.js']
];let bad=0;
try{for(const [name,file,append,needle] of cases){const d=path.join(work,name.replace(/ /g,'_'));copy(path.join(ROOT,'app'),d);fs.appendFileSync(path.join(d,'data',file),append);const r=validate(d), got=r.errors.join('\n');if(!r.ok&&got.includes(needle))console.log('PASS '+name);else{bad++;console.error('FAIL '+name+' was not caught: '+got)}}}finally{fs.rmSync(work,{recursive:true,force:true})}
console.log((cases.length-bad)+' fixtures passed, '+bad+' failed');process.exit(bad?1:0);
