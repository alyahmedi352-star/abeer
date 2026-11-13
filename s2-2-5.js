/* الدرس 2.5 — لنتدرّب على دمج الأشكال */
STORY2({lesson:'الصف الأول · الدرس ٢.٥', topic:'لنتدرّب على دمج الأشكال', file:'balloon-salem', back:'https://alyahmedi352-star.github.io/abeer/',
 title:'بالون سالم المبتسم',
 intro:'في يوم النشاط المدرسي قرّر سالم أن يرسم بالونًا له وجهٌ يبتسم وقبّعة. قالت مريم: «سندمج أشكالًا كثيرة… هيّا!»',
 pages:[
  {title:'وجه البالون', text:'رسم سالم دائرة كبيرة خضراء الحدود، وقال: «أريد حدودها سميكة جدًّا مثل البالون الحقيقي».', q:'اختر حجم الحدود من زرّ (Size).',
   groups:[{key:'size',need:'thick',options:[['thick','━ أسمك خط','أحسنت! صارت حدود البالون سميكة وواضحة.'],['mid','— خط متوسّط','الخط متوسّط، وسالم يريده أسمك. جرّب غيره.'],['thin','─ خط رفيع جدًّا','الخط رفيع جدًّا! سالم يريده سميكًا. جرّب غيره.']]}]},
  {title:'قبّعةٌ أنيقة', text:'قالت مريم: «القبّعة من قطعتين: حافّة عريضة وجزء أعلى، وكلاهما مستطيل».', q:'اختر الشكل الذي نرسم به القبّعة.',
   groups:[{key:'hat',need:'rect',options:[['rect','▭ المستطيل','رائع! رسم سالم مستطيلين فصارت القبّعة.'],['oval','◯ الشكل البيضاوي','صارت القبّعة دائرة! قبّعة سالم من مستطيلين. جرّب غيره.'],['tri','△ المثلث','صارت قبّعة حفلات مثلّثة! قبّعة سالم من مستطيلين. جرّب غيره.']]}]},
  {title:'عينان لامعتان', text:'قال سالم: «العينان بيضاويّتان بحدود زرقاء».', q:'اختر الشكل الذي نرسم به العينين.',
   groups:[{key:'eyes',need:'oval',options:[['oval','◯ الشكل البيضاوي','أحسنت! صار للبالون عينان لامعتان.'],['rect','▭ المستطيل','صارت العينان مربّعتين! جرّب غيره.'],['line','╲ الخط','صارت العينان خطّين مستقيمين! جرّب غيره.']]}]},
  {title:'ابتسامة!', text:'قالت مريم: «الابتسامة خطٌّ منحنٍ نرسمه بحرية بيدنا».', q:'اختر الأداة المناسبة لرسم الابتسامة.',
   groups:[{key:'mouth',need:'brush',options:[['brush','🖌️ الفرشاة','رائع! رسم سالم بالفرشاة ابتسامة حمراء جميلة.'],['line','╲ الخط','الخط المستقيم لا يبتسم! جرّب غيره.'],['rect','▭ المستطيل','صار الفم صندوقًا! جرّب غيره.']]}]},
  {title:'خيط البالون', text:'اختار سالم أداة الخط، ثم حجم الخط، ثم اللون الأسود.', q:'ماذا يفعل الآن ليرسم الخيط؟',
   groups:[{key:'str',need:'drag',options:[['drag','🖱️ انقر واسحب ثم أفلت','أحسنت! ظهر خيط البالون، وصار يطير.'],['dbl','👆 انقر مرّتين فقط','ظهرت نقطة صغيرة فقط! نحتاج إلى السحب. جرّب غيره.'],['type','⌨️ اكتب كلمة «خيط»','الخط لا يُرسم بالكتابة! جرّب غيره.']]}]}
 ],
 end:{title:'بالون سالم يطير!', text:'دمج سالم دائرةً ومستطيلين وشكلين بيضاويّين، ورسم الابتسامة بالفرشاة والخيط بأداة الخط. صار البالون جاهزًا ليوم النشاط.'},
 win(c,H,t,cb){H.bg('#e9f1f8','#f7efe3');H.rect(36,18,648,444,'#f3f6fa',14,'#9aa6b2',2);H.rect(37,19,646,32,'#dfe8f3',13);H.text(t,360,36,15,'#3c4f63');
  ['#000','#7f7f7f','#880015','#ed1c24','#ff7f27','#fff200','#22b14c','#00a2e8','#3f48cc','#a349a4'].forEach((k,i)=>H.rect(472+i*19,64,15,15,k,2,'#c5ccd4',1));
  H.rect(262,62,16,12,null,0,'#3f6fb5',2);this.el(c,300,68,9,6,null,'#3f6fb5',2);this.pg(c,[[322,75],[331,61],[340,75]],null,'#3f6fb5',2);H.line(352,74,366,62,'#3f6fb5',2);
  H.emoji('✏️',70,70,18);H.emoji('🪣',98,70,18);H.emoji('🧽',126,70,18);H.emoji('🖌️',190,70,22);
  H.rect(52,92,616,352,cb||'#fff',4,'#c9d3de',2)},
 pg(c,p,f,s,w=5){c.beginPath();p.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();if(f){c.fillStyle=f;c.fill()}if(s){c.lineJoin='round';c.lineWidth=w;c.strokeStyle=s;c.stroke()}},
 el(c,x,y,rx,ry,f,s,w=5){c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);if(f){c.fillStyle=f;c.fill()}if(s){c.lineWidth=w;c.strokeStyle=s;c.stroke()}},
 paint(c,s,st,H){
  this.win(c,H,'Untitled - Paint',st===6?'#e9f5fb':'#fff');
  const X=360,Y=270,R=88,lift=st===6?-8:0;c.translate(0,lift);
  if(s.str==='drag'){c.beginPath();c.moveTo(X,Y+R);c.lineTo(X-6,436-lift);c.lineWidth=4;c.strokeStyle='#111';c.stroke()}
  else if(s.str==='dbl')H.circ(X,Y+R+16,4,'#111');else if(s.str==='type')H.text('خيط',X,Y+R+30,24,'#111');
  H.circ(X,Y,R,'#fff','#22b14c',{thick:14,mid:6,thin:2}[s.size]||4);
  if(st===1&&s.size)H.mark(X,Y,R+20,s.size==='thick');
  if(s.hat==='rect'){H.rect(X-68,Y-R-30,136,22,'#7fd0f0');H.rect(X-44,Y-R-80,88,52,'#7fd0f0')}else if(s.hat==='oval')H.circ(X,Y-R-34,40,'#7fd0f0');else if(s.hat==='tri')this.pg(c,[[X,Y-R-90],[X+44,Y-R-6],[X-44,Y-R-6]],'#7fd0f0');
  if(st===2&&s.hat)H.mark(X,Y-R-40,64,s.hat==='rect');
  [[X-34,Y-22],[X+34,Y-22]].forEach(([x,y])=>{if(s.eyes==='oval')this.el(c,x,y,18,13,'#e3e8a4','#00a2e8',5);else if(s.eyes==='rect')H.rect(x-14,y-14,28,28,'#e3e8a4',0,'#00a2e8',4);else if(s.eyes==='line')H.line(x-16,y,x+16,y,'#00a2e8',5)});
  if(st===3&&s.eyes)H.mark(X,Y-22,62,s.eyes==='oval');
  if(s.mouth==='brush'){c.beginPath();c.moveTo(X-48,Y+20);c.bezierCurveTo(X-30,Y+62,X+26,Y+60,X+50,Y+16);c.lineCap='round';c.lineWidth=7;c.strokeStyle='#e8233a';c.stroke()}
  else if(s.mouth==='line')H.line(X-45,Y+38,X+45,Y+38,'#e8233a',6);else if(s.mouth==='rect')H.rect(X-34,Y+22,68,32,null,0,'#e8233a',5);
  if(st===4&&s.mouth)H.mark(X,Y+38,50,s.mouth==='brush');
  if(st===5&&s.str)H.mark(X,Y+R+40,40,s.str==='drag');
  c.translate(0,-lift);
  if(st===6){H.text('⭐ يوم النشاط ⭐',160,140,26);H.circ(580,170,30,'#ffc90e');H.circ(600,250,26,'#e8574b');H.line(580,200,586,300,'#555',2);H.line(600,276,592,330,'#555',2)}
 }});
