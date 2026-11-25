/* AttenDo feature tree (bilingual) + drill-down explorer */
var FEATURES=[
 {id:'quizzes',ic:'📝',
  ar:{t:'الاختبارات',d:'اختبارات تفاعلية يبنيها المعلم في دقائق، بتوقيت وتصحيح تلقائي وتحكم كامل في النتائج.'},
  en:{t:'Quizzes',d:'Interactive quizzes a teacher builds in minutes, with timers, auto-grading and full control over results.'},
  children:[
   {id:'ai',ic:'🤖',
    ar:{t:'أسئلة بالذكاء الاصطناعي',d:'المعلم يحدد نوع الأسئلة وعددها ومستوى الصعوبة، والذكاء الاصطناعي يولّدها من محتوى المقرر.'},
    en:{t:'AI-generated questions',d:'The teacher picks question types, counts and difficulty, and AI generates them from the course content.'},
    pts:{ar:['يختار المعلم الأنواع والأعداد ومستويات الصعوبة','توليد فوري من محتوى المقرر','مراجعة وتعديل أي سؤال قبل النشر'],
         en:['Teacher picks types, counts and difficulty levels','Instant generation from the course content','Review and edit any question before publishing']}},
   {id:'timed',ic:'⏱',
    ar:{t:'اختبار مؤقت بأمان',d:'وقت محدد لكل اختبار مع قفل تلقائي، وحماية ضد الغش أثناء الأداء.'},
    en:{t:'Timed and secured',d:'A time limit per quiz with auto-submit, plus anti-cheat protection during the attempt.'},
    pts:{ar:['عداد تنازلي ظاهر للطالب','تسليم تلقائي عند انتهاء الوقت','حجب محتوى الاختبار لو خرج الطالب من التطبيق'],
         en:['Visible countdown for the student','Auto-submit when time runs out','Quiz content is hidden if the student leaves the app']}},
   {id:'grading',ic:'✅',
    ar:{t:'تصحيح تلقائي ونتائج',d:'التصحيح فوري، والمعلم يقرر متى تظهر الدرجات والإجابات الصحيحة للطلاب.'},
    en:{t:'Auto-grading and results',d:'Grading is instant, and the teacher decides when scores and correct answers become visible.'},
    pts:{ar:['درجات فورية بعد التسليم','زر لإظهار النتائج للطلاب في الوقت المناسب','الإجابات الصحيحة لا تظهر إلا بعد إذن المعلم'],
         en:['Instant scores after submission','One button releases results to students','Correct answers stay hidden until the teacher allows']}},
   {id:'types',ic:'🗂',
    ar:{t:'أنواع أسئلة متعددة',d:'مزيج من أنواع الأسئلة بمستويات صعوبة مختلفة في الاختبار الواحد.'},
    en:{t:'Multiple question types',d:'A mix of question types and difficulty levels in one quiz.'},
    pts:{ar:['اختيار من متعدد وغيرها من الأنواع','مستويات صعوبة متدرجة','عدد الأسئلة من كل نوع حسب رغبة المعلم'],
         en:['Multiple choice and other types','Graduated difficulty levels','Per-type question counts set by the teacher']}}
  ]},
 {id:'attendance',ic:'📍',
  ar:{t:'الحضور',d:'تسجيل حضور سريع وآمن داخل القاعة، برمز QR متجدد أو بتحقق الموقع.'},
  en:{t:'Attendance',d:'Fast, secure in-class check-in with a rotating QR code or GPS verification.'},
  children:[
   {id:'qr',ic:'🔄',
    ar:{t:'رمز QR متجدد',d:'المعلم يفتح جلسة والرمز يتغير كل 10 ثوانٍ، فلا ينفع تصويره وإرساله لآخرين.'},
    en:{t:'Rotating QR code',d:'The teacher opens a session and the code changes every 10 seconds, so a photo of it is useless.'},
    pts:{ar:['رمز جديد كل 10 ثوانٍ','رمز موقّع من السيرفر وينتهي سريعًا','المسح من كاميرا التطبيق مباشرة'],
         en:['A new code every 10 seconds','Server-signed, quickly expiring tokens','Scanned right from the app camera']}},
   {id:'gps',ic:'🛰',
    ar:{t:'تحقق بالموقع GPS',d:'بديل للمسح: التطبيق يتأكد إن الطالب داخل نطاق القاعة قبل تسجيل الحضور.'},
    en:{t:'GPS verification',d:'An alternative to scanning: the app checks the student is inside the classroom range first.'},
    pts:{ar:['يرفض التسجيل لو الطالب بعيد عن القاعة','يتحقق من دقة الموقع قبل القبول','يعمل جنبًا إلى جنب مع QR'],
         en:['Rejects check-ins far from the classroom','Checks location accuracy before accepting','Works alongside QR']}},
   {id:'reports',ic:'📊',
    ar:{t:'سجلات الحضور',d:'نسب حضور واضحة لكل طالب وكل مقرر، تظهر للطالب والمعلم.'},
    en:{t:'Attendance records',d:'Clear attendance rates per student and per course, visible to students and teachers.'},
    pts:{ar:['نسبة حضور لكل طالب','سجل الجلسات لكل مقرر','الحضور لا يُمسح عند تسجيل الخروج'],
         en:['Attendance rate per student','Session history per course','Records survive logout']}}
  ]},
 {id:'courses',ic:'📚',
  ar:{t:'المقررات',d:'مقررات كاملة بالمحتوى والتقدم والاشتراكات، يشتريها الطالب ويتابعها من التطبيق.'},
  en:{t:'Courses',d:'Full courses with content, progress and subscriptions that students buy and follow in the app.'},
  children:[
   {id:'subs',ic:'💳',
    ar:{t:'اشتراكات مدفوعة',d:'بيع المقررات باشتراكات مدفوعة عبر بوابة دفع إلكترونية، مع تفعيل تلقائي بعد الدفع.'},
    en:{t:'Paid subscriptions',d:'Sell courses as paid subscriptions through an online payment gateway, activated automatically after payment.'},
    pts:{ar:['دفع إلكتروني عبر بوابة دفع (Paymob)','تفعيل الاشتراك بعد تأكيد الدفع','إمكانية الاسترجاع خلال ٢٨ ساعة من التفعيل حسب سياسة الاسترجاع','إدارة الاشتراكات من لوحة الإدارة'],
         en:['Online payment through a payment gateway (Paymob)','Subscription activates once payment is confirmed','Refunds possible within 28 hours of activation under the refund policy','Subscriptions managed from the admin panel']}},
   {id:'scorm',ic:'🎞',
    ar:{t:'محتوى SCORM تفاعلي',d:'رفع وتشغيل حزم SCORM التعليمية داخل المقرر مع تتبع تقدم الطالب فيها.'},
    en:{t:'Interactive SCORM content',d:'Upload and play SCORM packages inside courses, with student progress tracking.'},
    pts:{ar:['يدعم SCORM 1.2 و2004 تلقائيًا','مشغّل مدمج داخل التطبيق','تتبع درجات وتقدم الطالب في الحزمة'],
         en:['Auto-detects SCORM 1.2 and 2004','Built-in player inside the app','Tracks scores and progress per package']}},
   {id:'progress',ic:'📈',
    ar:{t:'تتبع التقدم',d:'نسبة إنجاز واضحة لكل مقرر، فيعرف الطالب أين وصل والمعلم من يحتاج متابعة.'},
    en:{t:'Progress tracking',d:'A clear completion rate per course, so students know where they stand and teachers know who needs a nudge.'},
    pts:{ar:['شريط تقدم لكل مقرر','متابعة من لوحة المعلم','مهام وتسليمات مرتبطة بالمقرر'],
         en:['A progress bar per course','Teacher-side monitoring','Tasks and assignments tied to the course']}}
  ]},
 {id:'agents',ic:'🤝',featured:true,
  ar:{t:'الوكلاء',d:'مراكز ومكاتب تسجّل الطلاب في مقرراتك بحسابات مستقلة تحت إشرافك الكامل.'},
  en:{t:'Agents',d:'Centers and offices that register students in your courses through their own accounts, under your full control.'},
  children:[
   {id:'accounts',ic:'🔑',
    ar:{t:'حساب مستقل لكل وكيل',d:'كل مركز أو مكتب ياخد حساب وكيل خاص به بكلمة مرور مؤقتة يغيّرها عند أول دخول.'},
    en:{t:'A separate account per agent',d:'Each center or office gets its own agent account with a temporary password changed on first login.'},
    pts:{ar:['إنشاء الحساب في ثوانٍ من لوحة المعلم','كلمة مرور مؤقتة لأول دخول','الوكيل يرى واجهة مخصصة للتسجيل فقط'],
         en:['Created in seconds from the teacher dashboard','Temporary password for first login','Agents see a registration-only interface']}},
   {id:'counts',ic:'🔢',
    ar:{t:'متابعة لكل وكيل',d:'عدد التسجيلات والطلاب لكل وكيل ظاهر لك أول بأول.'},
    en:{t:'Per-agent tracking',d:'Registrations and student counts per agent, always visible to you.'},
    pts:{ar:['عداد تسجيلات لكل وكيل','قائمة الطلاب المسجلين عن طريقه','تمييز النشط عن المعطّل'],
         en:['Registration counters per agent','The list of students each agent enrolled','Active vs disabled at a glance']}},
   {id:'control',ic:'🛠',
    ar:{t:'تحكم كامل',d:'أوقف الوكيل أو نشّطه في أي وقت، وحدد الأقسام التي يقدر يراها.'},
    en:{t:'Full control',d:'Disable or re-enable an agent anytime, and choose which sections they can see.'},
    pts:{ar:['زر إيقاف وتنشيط فوري','تحديد الأقسام الظاهرة لكل وكيل','الطلاب المسجلون يظلون في مقرراتك'],
         en:['Instant disable and re-enable','Per-agent section visibility','Enrolled students stay in your courses']}}
  ]},
 {id:'student',ic:'🎓',
  ar:{t:'تجربة الطالب',d:'كل ما يحتاجه الطالب في مكان واحد: تقويمه ومهامه ومحادثاته وإشعاراته.'},
  en:{t:'The student experience',d:'Everything a student needs in one place: calendar, tasks, chats and notifications.'},
  children:[
   {id:'calendar',ic:'🗓',
    ar:{t:'التقويم والمهام',d:'الاختبارات القادمة والمهام والتسليمات مجمعة في تقويم واحد واضح.'},
    en:{t:'Calendar and tasks',d:'Upcoming quizzes, tasks and deadlines gathered in one clear calendar.'},
    pts:{ar:['اختبارات ومهام في مكان واحد','تواريخ التسليم واضحة','تذكير قبل بدء الاختبار بعشر دقائق'],
         en:['Quizzes and tasks in one place','Clear due dates','Quiz start reminder 10 minutes ahead']}},
   {id:'chat',ic:'💬',
    ar:{t:'المحادثات',d:'تواصل مباشر بين الطالب والمعلم من داخل التطبيق، بدون تطبيقات خارجية.'},
    en:{t:'Chat',d:'Direct messaging between students and teachers inside the app, no external apps needed.'},
    pts:{ar:['محادثات فورية داخل التطبيق','مرتبطة بالمقررات والمعلمين','تعمل على الموبايل والمتصفح'],
         en:['Instant in-app messaging','Tied to courses and teachers','Works on mobile and browser']}},
   {id:'alerts',ic:'🔔',
    ar:{t:'الإشعارات',d:'جرس إشعارات يوصّل للطالب كل جديد: نتيجة، إعلان، أو تحديث في مقرره.'},
    en:{t:'Notifications',d:'A notification bell delivers everything new: a grade, an announcement, or a course update.'},
    pts:{ar:['إشعارات الإدارة والمعلمين','تنبيه عند ظهور النتائج','كل الإشعارات محفوظة في مكان واحد'],
         en:['Admin and teacher announcements','Alerts when results are released','All notifications kept in one place']}}
  ]},
 {id:'teacher',ic:'🧑‍🏫',
  ar:{t:'أدوات المعلم',d:'لوحة تحكم وأكواد طلاب ونتائج، كل ما يدير به المعلم شغله اليومي.'},
  en:{t:'Teacher tools',d:'A dashboard, student codes and results: everything a teacher runs their day with.'},
  children:[
   {id:'dashboard',ic:'📊',
    ar:{t:'لوحة التحكم',d:'إحصائيات المقررات والطلاب والاختبارات ومتوسط الدرجات في نظرة واحدة.'},
    en:{t:'Dashboard',d:'Course, student and quiz stats plus average scores at a glance.'},
    pts:{ar:['أعداد المقررات والطلاب والاختبارات','رسوم بيانية لمتوسط الدرجات','آخر النشاط في مكان واحد'],
         en:['Course, student and quiz counts','Average-score charts','Recent activity in one feed']}},
   {id:'codes',ic:'🎟',
    ar:{t:'أكواد الطلاب',d:'كل طالب يدخل بكود خاص به، فيسجّل بسرعة بدون بريد إلكتروني.'},
    en:{t:'Student codes',d:'Each student logs in with their own code, so onboarding is fast with no email needed.'},
    pts:{ar:['كود فريد لكل طالب','دخول سريع بدون بريد','المعلم يولّد الأكواد ويديرها'],
         en:['A unique code per student','Fast login without email','Teachers generate and manage codes']}},
   {id:'adminnotif',ic:'📣',
    ar:{t:'إشعارات الإدارة',d:'الإدارة ترسل إشعارات موجهة تصل لمجرّدي الطلاب أو مجموعات محددة.'},
    en:{t:'Admin notifications',d:'Admins send targeted notifications that reach all students or specific groups.'},
    pts:{ar:['إشعارات موجهة حسب الفئة','تظهر في جرس الطالب فورًا','سجل بما أُرسل'],
         en:['Targeted by audience','Appear instantly in the student bell','A log of what was sent']}}
  ]}
];

function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}

/* Build carousel slides (HTML) for the top-level features, linking to the explorer */
function featureSlideHTML(f){
  return '<button class="fcard" type="button" data-f="'+f.id+'">'
    +'<span class="ic">'+f.ic+'</span>'
    +'<h3><span data-l="ar">'+esc(f.ar.t)+'</span><span data-l="en">'+esc(f.en.t)+'</span></h3>'
    +'<p><span data-l="ar">'+esc(f.ar.d)+'</span><span data-l="en">'+esc(f.en.d)+'</span></p>'
    +'<span class="more"><span data-l="ar">استكشف الميزة ←</span><span data-l="en">Explore the feature →</span></span>'
    +'</button>';
}

/* Drill-down explorer. mount: element. Renders breadcrumb + node head + children. */
function buildExplorer(mount){
  function find(path){
    var list=FEATURES,node=null,nodes=[];
    for(var i=0;i<path.length;i++){
      node=list.find(function(f){return f.id===path[i]});
      if(!node)return null;
      nodes.push(node);list=node.children||[];
    }
    return nodes;
  }
  function render(path){
    var nodes=find(path)||[];
    mount.innerHTML='';
    // breadcrumb
    var cr=document.createElement('div');cr.className='crumbs';
    var root=document.createElement('button');root.type='button';
    root.innerHTML='<span data-l="ar">كل المميزات</span><span data-l="en">All features</span>';
    root.onclick=function(){go([])};cr.appendChild(root);
    nodes.forEach(function(n,i){
      var sep=document.createElement('span');sep.className='sep';sep.textContent='‹';cr.appendChild(sep);
      var b=document.createElement('button');b.type='button';
      b.innerHTML=n.ic+' <span data-l="ar">'+esc(n.ar.t)+'</span><span data-l="en">'+esc(n.en.t)+'</span>';
      b.onclick=function(){go(path.slice(0,i+1))};cr.appendChild(b);
    });
    mount.appendChild(cr);
    var kids,head;
    if(nodes.length===0){
      head={ic:'✨',ar:{t:'مميزات AttenDo',d:'اضغط على أي ميزة لتشوف تفاصيلها ومميزاتها الفرعية.'},
            en:{t:'AttenDo features',d:'Tap any feature to see its details and sub-features.'}};
      kids=FEATURES;
    }else{
      head=nodes[nodes.length-1];kids=head.children||[];
    }
    var box=document.createElement('div');box.className='fnode';
    var fh=document.createElement('div');fh.className='fhead';
    fh.innerHTML='<span class="ic">'+head.ic+'</span>'
      +'<h2><span data-l="ar">'+esc(head.ar.t)+'</span><span data-l="en">'+esc(head.en.t)+'</span></h2>'
      +'<p><span data-l="ar">'+esc(head.ar.d)+'</span><span data-l="en">'+esc(head.en.d)+'</span></p>';
    if(head.pts){
      var ul=document.createElement('ul');ul.className='pts';
      head.pts.ar.forEach(function(p,i){
        var li=document.createElement('li');
        li.innerHTML='<span data-l="ar">'+esc(p)+'</span><span data-l="en">'+esc(head.pts.en[i])+'</span>';
        ul.appendChild(li);
      });
      fh.appendChild(ul);
    }
    box.appendChild(fh);
    if(kids.length){
      var grid=document.createElement('div');grid.className='kids';
      kids.forEach(function(k){
        var b=document.createElement('button');b.type='button';b.className='kid';
        b.innerHTML='<span class="ic">'+k.ic+'</span>'
          +'<h4><span data-l="ar">'+esc(k.ar.t)+'</span><span data-l="en">'+esc(k.en.t)+'</span></h4>'
          +'<p><span data-l="ar">'+esc(k.ar.d)+'</span><span data-l="en">'+esc(k.en.d)+'</span></p>'
          +((k.children&&k.children.length)?'<span class="go"><span data-l="ar">المميزات الفرعية ←</span><span data-l="en">Sub-features →</span></span>':'');
        b.onclick=function(){go(path.concat(k.id))};
        grid.appendChild(b);
      });
      box.appendChild(grid);
    }
    mount.appendChild(box);
  }
  function go(path){
    render(path);
    try{
      var u=new URL(location.href);
      if(path.length)u.searchParams.set('f',path.join('/'));else u.searchParams.delete('f');
      history.replaceState(null,'',u);
    }catch(e){}
  }
  function currentPath(){try{var q=new URL(location.href).searchParams.get('f');return q?q.split('/').filter(Boolean):[]}catch(e){return[]}}
  var initial=currentPath();
  if(!find(initial))initial=[];
  render(initial);
  document.addEventListener('langchange',function(){render(currentPath())});
}
