/* Shared: language toggle, active nav, page titles */
(function(){
  var TITLES={
    'index':{ar:'AttenDo أتيندو | تحميل تطبيق الأندرويد',en:'AttenDo | Download the Android app'},
    'features':{ar:'مميزات AttenDo | استكشف كل ميزة بالتفصيل',en:'AttenDo features | explore every feature in detail'},
    'student':{ar:'AttenDo للطالب | مقرراتك واختباراتك وحضورك',en:'AttenDo for students | courses, quizzes and attendance'},
    'teacher':{ar:'AttenDo للمعلم | إدارة المقررات والاختبارات والوكلاء',en:'AttenDo for teachers | courses, quizzes and agents'},
    'download':{ar:'دليل تحميل AttenDo | التثبيت خطوة بخطوة',en:'AttenDo download guide | step-by-step install'}
  };
  function pageKey(){
    var p=location.pathname.split('/').pop()||'index.html';
    return p.replace('.html','')||'index';
  }
  var h=document.documentElement,b=document.getElementById('lang');
  function set(l){
    h.lang=l;h.dir=l==='ar'?'rtl':'ltr';
    if(b)b.textContent=l==='ar'?'English':'العربية';
    var k=pageKey(),t=TITLES[k]||TITLES['index'];
    document.title=t[l]||t.ar;
    try{localStorage.setItem('dl-lang',l)}catch(e){}
    document.dispatchEvent(new CustomEvent('langchange',{detail:l}));
  }
  var s=null;try{s=localStorage.getItem('dl-lang')}catch(e){}
  if(!s&&!/^ar/i.test(navigator.language||'ar'))s='en';
  window.__setLang=set;
  set(s||'ar');
  if(b)b.onclick=function(){set(h.lang==='ar'?'en':'ar')};
  // active nav
  var k=pageKey();
  document.querySelectorAll('.nav a').forEach(function(a){
    var href=(a.getAttribute('href')||'').split('/').pop().replace('.html','')||'index';
    if(href===k)a.classList.add('on');
  });
})();

/* Carousel helper: build a swipeable carousel of slides inside el.
   slides: array of HTML strings. Returns nothing. */
function buildCarousel(el,slides,onActivate){
  var view=document.createElement('div');view.className='view';
  var track=document.createElement('div');track.className='track';
  slides.forEach(function(h){var s=document.createElement('div');s.className='slide';s.innerHTML=h;track.appendChild(s);});
  view.appendChild(track);el.appendChild(view);
  var i=0,n=slides.length;
  var prev=document.createElement('button');prev.className='arr prev';prev.type='button';prev.setAttribute('aria-label','previous');prev.textContent='‹';
  var next=document.createElement('button');next.className='arr next';next.type='button';next.setAttribute('aria-label','next');next.textContent='›';
  el.appendChild(prev);el.appendChild(next);
  var dots=document.createElement('div');dots.className='dots';
  var db=[];
  slides.forEach(function(_,j){var d=document.createElement('button');d.type='button';d.setAttribute('aria-label','slide '+(j+1));d.onclick=function(){go(j)};dots.appendChild(d);db.push(d);});
  el.appendChild(dots);
  function go(j){
    i=(j+n)%n;
    track.style.transform='translateX('+(-i*100)+'%)';
    db.forEach(function(d,j){d.classList.toggle('on',j===i)});
    if(onActivate)onActivate(i);
  }
  prev.onclick=function(){go(i-1)};
  next.onclick=function(){go(i+1)};
  // touch swipe
  var x0=null;
  view.addEventListener('touchstart',function(e){x0=e.touches[0].clientX},{passive:true});
  view.addEventListener('touchend',function(e){
    if(x0==null)return;
    var dx=e.changedTouches[0].clientX-x0;x0=null;
    if(Math.abs(dx)>40){
      var rtl=document.documentElement.dir==='rtl';
      // swipe left shows next in LTR; in RTL the track is normalized to LTR order so same
      if(dx<0)go(i+1);else go(i-1);
    }
  },{passive:true});
  go(0);
  return {go:go,get index(){return i}};
}
