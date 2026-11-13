/* الدرس 3.2 — استمتع */
STORY2({lesson:'الصف الأول · الدرس ٣.٢', topic:'استمتع', file:'maktabat-maryam', back:'https://alyahmedi352-star.github.io/abeer/',
 title:'رحلة مريم إلى مكتبة الأطفال',
 intro:'سمعت مريم أنّ لمكتبة الأطفال العامة موقعًا على الإنترنت. قالت: «سأزورها من حاسوبي الآن!» وقال سالم: «سأساعدك خطوةً خطوة».',
 pages:[
  {title:'نفتح المتصفّح', text:'نظرت مريم إلى شريط المهامّ أسفل الشاشة وقالت: «أيّ أيقونة تفتح الإنترنت؟»', q:'اختر الأداة التي تمكّنك من تصفّح الإنترنت.',
   groups:[{key:'app',need:'chrome',options:[['chrome','🌐 Google Chrome','أحسنت! انفتح متصفّح الإنترنت.'],['bin','🗑️ سلّة المحذوفات','سلّة المحذوفات فيها الملفّات المحذوفة، لا الإنترنت. جرّب غيرها.'],['paint','🎨 الرسّام','الرسّام للرسم، لا لتصفّح الإنترنت. جرّب غيره.']]}]},
  {title:'أين نكتب العنوان؟', text:'قال سالم: «لكلّ موقع اسم نكتبه في مكانٍ خاصّ أعلى المتصفّح».', q:'أين تنقر مريم لتكتب اسم الموقع؟',
   groups:[{key:'bar',need:'address',options:[['address','🔗 في شريط العنوان','صحيح! ظهر المؤشّر في شريط العنوان، وهو جاهز للكتابة.'],['close','✕ على زرّ الإغلاق','أُغلق المتصفّح! نفتحه من جديد ونجرّب مكانًا آخر.'],['tab','➕ على زرّ «+»','زرّ «+» يفتح علامة تبويب جديدة، ولا نكتب فيه. جرّب غيره.']]}]},
  {title:'نكتب اسم الموقع', text:'كان اسم الموقع مكتوبًا في الكتاب: www.cploman.com/ar', q:'اختر ما تكتبه مريم كما هو تمامًا.',
   groups:[{key:'url',need:'ok',options:[['ok','www.cploman.com/ar','أحسنت! كتبتِ اسم الموقع صحيحًا، حرفًا حرفًا.'],['typo','www.cplomn.com/ar','انتبهي! نقص حرفٌ من الاسم، فلن نصل إلى الموقع. جرّب غيره.'],['word','مكتبة','هذه كلمة وليست اسم الموقع. جرّب غيرها.']]}]},
  {title:'هيّا ننطلق!', text:'كتبت مريم الاسم، وبقي أن تضغط مفتاحًا واحدًا لتصل إلى الموقع.', q:'أيّ مفتاح تضغط؟',
   groups:[{key:'key',need:'enter',options:[['enter','⏎ مفتاح الإدخال (Enter)','رائع! ظهرت صفحة مكتبة الأطفال العامة.'],['space','␣ مفتاح المسافة','أضاف مسافةً فقط! جرّب غيره.'],['back','⌫ مفتاح الحذف','حُذف حرفٌ من الاسم! جرّب غيره.']]}]},
  {title:'في بيت الجدّة', text:'في بيت جدّتها وجدت مريم حاسوبًا بأيقونات مختلفة. قالت: «هل أستطيع التصفّح هنا أيضًا؟»', q:'أيّ أيقونة هي متصفّح إنترنت أيضًا؟',
   groups:[{key:'other',need:'edge',options:[['edge','🌊 Microsoft Edge','أحسنت! هناك متصفّحات كثيرة: Chrome وEdge وFirefox وSafari.'],['clock','⏰ الساعة','الساعة تخبرنا بالوقت فقط. جرّب غيرها.'],['folder','📁 مجلّد الصور','المجلّد فيه صور على الحاسوب، لا الإنترنت. جرّب غيره.']]}]}
 ],
 end:{title:'استمتعت مريم بالمكتبة!', text:'فتحت مريم المتصفّح، ونقرت في شريط العنوان، وكتبت اسم الموقع صحيحًا، ثم ضغطت مفتاح الإدخال (Enter). وعرفت أنّ هناك متصفّحات كثيرة.'},
 br(c,H,url,bg){H.bg('#e9f1f8','#f7efe3');H.rect(36,18,648,444,'#f3f6fa',14,'#9aa6b2',2);H.rect(37,19,646,34,'#dfe8f3',13);H.rect(60,26,170,27,'#fff',8);H.circ(76,39,7,'#4285f4');H.text('علامة تبويب',160,39,13,'#3c4f63');H.text('+',248,38,20,'#3c4f63');
  H.text('✕',662,36,14,'#3c4f63');this.lt(c,'←  →  ⟳',56,73,16,'#5c6575');H.rect(130,60,530,26,'#fff',13,'#c5ccd4',1);if(url)this.lt(c,url,146,73,15);
  H.rect(52,94,616,352,bg||'#fff',4,'#c9d3de',2)},
 card(c,H,x,y,e,t,ok){H.rect(x-70,y-48,140,96,'#fff',12,ok===undefined?'#c5ccd4':ok?'#2f8a57':'#e8574b',3);H.emoji(e,x,y-12,42);H.text(t,x,y+30,15)},
 lt(c,t,x,y,z,k){c.save();c.font=z+'px "Cairo",Tahoma,sans-serif';c.direction='ltr';c.textAlign='left';c.textBaseline='middle';c.fillStyle=k||'#15284b';c.fillText(t,x,y);c.restore()},
 win(c,H,t,cb){H.bg('#e9f1f8','#f7efe3');H.rect(36,18,648,444,'#f3f6fa',14,'#9aa6b2',2);H.rect(37,19,646,32,'#dfe8f3',13);H.text(t,360,36,15,'#3c4f63');
  ['#000','#7f7f7f','#880015','#ed1c24','#ff7f27','#fff200','#22b14c','#00a2e8','#3f48cc','#a349a4'].forEach((k,i)=>H.rect(472+i*19,64,15,15,k,2,'#c5ccd4',1));
  H.rect(262,62,16,12,null,0,'#3f6fb5',2);this.el(c,300,68,9,6,null,'#3f6fb5',2);this.pg(c,[[322,75],[331,61],[340,75]],null,'#3f6fb5',2);H.line(352,74,366,62,'#3f6fb5',2);
  H.emoji('✏️',70,70,18);H.emoji('🪣',98,70,18);H.emoji('🧽',126,70,18);H.emoji('🖌️',190,70,22);
  H.rect(52,92,616,352,cb||'#fff',4,'#c9d3de',2)},
 pg(c,p,f,s,w=5){c.beginPath();p.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();if(f){c.fillStyle=f;c.fill()}if(s){c.lineJoin='round';c.lineWidth=w;c.strokeStyle=s;c.stroke()}},
 el(c,x,y,rx,ry,f,s,w=5){c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);if(f){c.fillStyle=f;c.fill()}if(s){c.lineWidth=w;c.strokeStyle=s;c.stroke()}},
 paint(c,s,st,H){
  if(s.app!=='chrome'||(st===2&&s.bar==='close')){H.bg('#4aa3df','#2b7fc0');H.rect(0,430,720,50,'#1f2b3a');['⊞','🔍','🌐','🗑️','🎨','📁'].forEach((e,i)=>H.emoji(e,40+i*56,455,26));
   if(s.app&&s.app!=='chrome'){H.emoji({bin:'🗑️',paint:'🎨'}[s.app],360,220,110);if(st===1)H.mark(360,220,80,false)}
   if(st===2)H.bubble('أُغلق المتصفّح!',360,200,24);return}
  const done=s.key==='enter'&&s.url==='ok';
  let u='';if(s.bar==='address'||st>=3){u=s.url==='ok'?'www.cploman.com/ar':s.url==='typo'?'www.cplomn.com/ar':s.url==='word'?'':'|'}
  if(s.key==='space'&&st===4)u+=' ';if(s.key==='back'&&st===4)u=u.slice(0,-1);
  this.br(c,H,u,done?'#fdf6ec':'#fff');if(s.url==='word')H.text('مكتبة',600,73,15);
  if(st===1)H.mark(360,270,120,true);
  if(st===2&&s.bar)H.mark(s.bar==='address'?395:248,73,s.bar==='address'?40:22,s.bar==='address');
  if(st===3&&s.url)H.mark(395,73,40,s.url==='ok');
  if(done){H.rect(52,94,616,50,'#fff');H.text('مكتبة الأطفال العامة',540,119,20,'#8a1c3c');H.text('English',100,119,14,'#5c6575');
   H.rect(90,160,540,250,'#f6d9c4',10);H.emoji('👧',260,290,110);H.emoji('📚',400,320,70);H.text('المعرفة حقٌّ لنا',470,210,26,'#fff');H.text('مرحبًا بالصغار',470,250,20,'#8a1c3c')}
  else if(st>=4&&s.key){H.bubble(s.key==='space'?'أُضيفت مسافة…':'حُذف حرف!',360,250,22)}
  else if(st===3&&s.url&&s.url!=='ok')H.bubble('هل الاسم صحيح؟',360,250,22);
  if(st===4&&s.key)H.mark(360,250,90,s.key==='enter');
  if(s.other&&st>=5){H.rect(470,300,190,130,'#fff',12,'#c5ccd4',2);H.text('حاسوب الجدّة',565,320,15);
   ['🌊','⏰','📁'].forEach((e,i)=>H.emoji(e,510+i*55,375,38));if(s.other==='edge')H.text('متصفّح!',510,412,14,'#2f8a57');if(st===5)H.mark({edge:510,clock:565,folder:620}[s.other],375,28,s.other==='edge')}
  if(st===6)H.text('⭐ استمتعي بالقراءة ⭐',360,440,24);
 }});
