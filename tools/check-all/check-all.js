/* One local gate.  Runs every check even if an earlier one fails. */
'use strict';
const path=require('path'),{spawnSync}=require('child_process');
const ROOT=path.resolve(__dirname,'..','..');
const jobs=[['boot-check','tools/boot-check/boot-check.js'],['validate','tools/validate/validate.js'],['fixture-check','tools/validate/fixture-check.js'],['dist-check','tools/dist-check.js']];
let failed=0;
for(const [name,file] of jobs){const r=spawnSync(process.execPath,[path.join(ROOT,file)],{cwd:ROOT,stdio:'inherit'});const ok=!r.error&&r.status===0;console.log('SUMMARY '+name+' '+(ok?'PASS':'FAIL')+(r.error?' '+r.error.message:''));if(!ok)failed++}
console.log('CHECK-ALL '+(failed?'FAIL '+failed+'/'+jobs.length:'PASS '+jobs.length+'/'+jobs.length));process.exit(failed?1:0);
