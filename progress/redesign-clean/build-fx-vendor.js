/* Step 1a part B: stage the copied answer-motion pieces into app/vendor and app/css.
   Run: node progress/redesign-clean/build-fx-vendor.js
   Inputs are the pinned npm packs unpacked in D:/scratch 2026/clean-vendor/pack (lottie-web 5.12.2, animate.css 4.1.1)
   and the two owner-picked Lottie files in progress/redesign-clean/anim-picks.
   Nothing here edits any motion: files are copied; the Lottie JSON is wrapped as a classic script (file:// has no fetch). */
const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..','..');
const pack='D:/scratch 2026/clean-vendor/pack';
const vend=path.join(root,'app','vendor');
fs.mkdirSync(vend,{recursive:true});

/* 1. player, byte copy */
fs.copyFileSync(pack+'/lw/package/build/player/lottie_light.min.js',path.join(vend,'lottie_light.min.js'));
fs.copyFileSync(pack+'/lw/package/LICENSE.md',path.join(root,'app','assets','licences','lottie-web-LICENSE.txt'));
fs.copyFileSync(pack+'/ac/package/LICENSE',path.join(root,'app','assets','licences','animate-css-LICENSE.txt'));

/* 2. Lottie JSON wrapped as classic scripts, byte-exact JSON inside */
const ap=path.join(root,'progress','redesign-clean','anim-picks');
const check=fs.readFileSync(path.join(ap,'checkmark-UaMrRzGt3G.json'),'utf8').trim();
const cross=fs.readFileSync(path.join(ap,'cross-close-cancel-icon-animation-imJWR2OMg7.json'),'utf8').trim();
JSON.parse(check);JSON.parse(cross);
fs.writeFileSync(path.join(vend,'lottie-fx-data.js'),
'/* Lottie animation data, copied unchanged from LottieFiles (Lottie Simple License, see assets/licences/lottiefiles-LICENSE.txt).\n'+
'   checkmark-UaMrRzGt3G.json (owner pick 22) and cross-close-cancel-icon-animation-imJWR2OMg7.json (owner pick 24).\n'+
'   Wrapped in a var because file:// pages cannot fetch JSON. Colours are tinted at play time in js/answer-fx.js. */\n'+
'var LOTTIE_FX_CHECK='+check+';\nvar LOTTIE_FX_CROSS='+cross+';\n');

/* 3. animate.css 4.1.1: only the base rules, headShake and pulse, cut verbatim from the published dist file */
const src=fs.readFileSync(pack+'/ac/package/animate.css','utf8');
const grab=(start,label)=>{
  const i=src.indexOf(start);
  if(i<0)throw new Error('not found: '+label);
  return i;
};
const headEnd=src.indexOf('*/')+2;
const header=src.slice(0,headEnd);
function block(startMarker){
  const i=grab(startMarker,startMarker);
  let depth=0,j=src.indexOf('{',i);
  for(;j<src.length;j++){
    if(src[j]==='{')depth++;
    else if(src[j]==='}'){depth--;if(depth===0)break}
  }
  return src.slice(i,j+1);
}
const parts=[
  header,
  '/* Excerpt for Herophilus: base rules, headShake and pulse only. Class names and values are as published. */',
  block(':root {'),
  block('.animate__animated {'),
  block('@media print, (prefers-reduced-motion: reduce) {'),
  block('@keyframes headShake {'),
  block('.animate__headShake {'),
  block('@keyframes pulse {'),
  block('.animate__pulse {')
].filter(Boolean);
fs.writeFileSync(path.join(root,'app','css','animate-picks.css'),parts.join('\n\n')+'\n');
console.log('wrote vendor + animate-picks.css; sizes',fs.statSync(path.join(vend,'lottie_light.min.js')).size,fs.statSync(path.join(vend,'lottie-fx-data.js')).size,fs.statSync(path.join(root,'app','css','animate-picks.css')).size);
