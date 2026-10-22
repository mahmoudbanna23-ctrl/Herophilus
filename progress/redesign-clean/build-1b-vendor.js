/* Step 1b part 1: stage the copied subject-page motion pieces into app/vendor and app/assets/licences.
   Run: node progress/redesign-clean/build-1b-vendor.js
   Sources (read-only): D:/scratch 2026/motion-big/src/3DStackMotion-repo (Codrops, MIT; GSAP 3.12.5, Lenis, effect files)
                        D:/scratch 2026/motion-copied/src/progressbar (progressbar.js 1.1.0, MIT)
   Nothing here edits any motion. gsap, ScrollTrigger, Lenis, progressbar are byte copies. The three effect files are
   published as ES modules (import/export); only those import/export keywords are removed and the file is wrapped so it
   loads as a classic script, the same way the owner's pick page (motion-big/fix/base/p01-stack3d.html) loads them. */
const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..','..');
const vend=path.join(root,'app','vendor'),lic=path.join(root,'app','assets','licences');
const st='D:/scratch 2026/motion-big/src/3DStackMotion-repo';
const pb='D:/scratch 2026/motion-copied/src/progressbar';
fs.mkdirSync(vend,{recursive:true});fs.mkdirSync(lic,{recursive:true});

/* byte copies */
fs.copyFileSync(st+'/js/gsap.min.js',path.join(vend,'gsap.min.js'));
fs.copyFileSync(st+'/js/ScrollTrigger.min.js',path.join(vend,'ScrollTrigger.min.js'));
fs.copyFileSync(st+'/js/lenis.js',path.join(vend,'lenis.js'));
fs.copyFileSync(pb+'/progressbar.min.js',path.join(vend,'progressbar.min.js'));
fs.copyFileSync(st+'/LICENSE',path.join(lic,'3DStackMotion-LICENSE.txt'));
fs.copyFileSync(pb+'/LICENSE',path.join(lic,'progressbar-js-LICENSE.txt'));
const lenisLic='D:/scratch 2026/motion-big/src/lenis-repo/LICENSE';
fs.copyFileSync(lenisLic,path.join(lic,'lenis-LICENSE.txt'));

/* effect files: strip import/export only, wrap as classic script. throttle comes from the demo's utils.js. */
const utils=fs.readFileSync(st+'/js/utils.js','utf8');
const m=utils.match(/export const throttle = [\s\S]*?\n};/);
if(!m)throw new Error('throttle not found');
const throttle=m[0].replace('export const','const');
let out='/* 3D Stack Motion, Codrops (MIT, see assets/licences/3DStackMotion-LICENSE.txt).\n'+
'   stackMotionEffect.js from effect-1, effect-2 and effect-3 of https://github.com/codrops/3DStackMotion, copied as published.\n'+
'   Only the ES-module import/export keywords are removed so it loads as a classic script; no timing, easing or logic edited.\n'+
'   Needs gsap + ScrollTrigger (GSAP 3.12.5) loaded first. Exposes window.StackMotion = {1:Class,2:Class,3:Class}. */\n'+
'(function(){\n'+throttle+'\nwindow.StackMotion={};\n';
[1,2,3].forEach(n=>{
  let s=fs.readFileSync(st+'/js/effect-'+n+'/stackMotionEffect.js','utf8');
  s=s.replace(/^import [^\n]*\n/m,'').replace('export class StackMotionEffect','class StackMotionEffect');
  if(/^\s*(export|import)\s/m.test(s))throw new Error('module keyword left in effect-'+n);
  out+='{\n'+s+'\nwindow.StackMotion['+n+']=StackMotionEffect;\n}\n';
});
out+='})();\n';
fs.writeFileSync(path.join(vend,'stack-motion.js'),out);
console.log('vendored; stack-motion.js',out.length,'bytes');
