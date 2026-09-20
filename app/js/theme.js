function currentTheme(){
  return document.documentElement.getAttribute('data-theme')==='light'?'light':'dark';
}
function setTheme(t,announce){
  t=(t==='light')?'light':'dark';
  document.documentElement.setAttribute('data-theme',t);
  try{localStorage.setItem(THKEY,t)}catch(e){}
  /* keeps the mobile browser chrome matching the page */
  const m=document.querySelector('meta[name="theme-color"]');
  if(m)m.setAttribute('content',t==='light'?'#e9eef6':'#070d16');
  paintThemeBtn();
  if(announce)toast(t==='light'?'Light mode':'Dark mode');
}
function toggleTheme(){setTheme(currentTheme()==='light'?'dark':'light',true)}
/* The button shows the theme you would GET, not the one you are in. */
function paintThemeBtn(){
  const light=currentTheme()==='light';
  const label=light?'Switch to dark mode':'Switch to light mode';
  document.querySelectorAll('.themebtn').forEach(b=>{
    b.innerHTML=ico(light?'moon':'sun',17);
    b.title=label;b.setAttribute('aria-label',label);
  });
}
/* Follow the operating system, but only until the user overrides it once.
   After that their choice wins on this device for good. */
if(window.matchMedia){
  try{
    const mq=matchMedia('(prefers-color-scheme:light)');
    const onSys=e=>{
      let stored=null;try{stored=localStorage.getItem(THKEY)}catch(x){}
      if(stored!=='light'&&stored!=='dark')setTheme(e.matches?'light':'dark');
    };
    if(mq.addEventListener)mq.addEventListener('change',onSys);
    else if(mq.addListener)mq.addListener(onSys);   /* older Safari */
  }catch(e){}
}

