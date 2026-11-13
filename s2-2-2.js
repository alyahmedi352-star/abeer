/* الدرس 2.2 — رسم الأشكال */
STORY2({lesson:'الصف الأول · الدرس ٢.٢', topic:'رسم الأشكال', file:'hadiyat-salem', back:'https://alyahmedi352-star.github.io/abeer/',
 title:'هدية سالم المرسومة',
 intro:'غدًا عيد ميلاد أخت سالم الصغيرة. قال سالم: «سأرسم لها علبة هدية في برنامج الرسّام!» وقالت مريم: «وأنا سأساعدك».',
 pages:[
  {title:'أين الرسّام؟', text:'فتح سالم قائمة «ابدأ»، ثم «Windows Accessories»، فظهرت برامج كثيرة.', q:'اختر برنامج الرسّام (Paint).',
   groups:[{key:'app',need:'paint',options:[['paint','🎨 Paint الرسّام','أحسنت! انفتحت نافذة الرسّام وفيها مساحة الرسم البيضاء.'],['calc','🧮 Calculator الآلة الحاسبة','الآلة الحاسبة للأرقام، لا للرسم. جرّب غيرها.'],['web','🌐 Microsoft Edge المتصفّح','المتصفّح لتصفّح الإنترنت، لا للرسم. جرّب غيره.']]}]},
  {title:'علبةٌ مستطيلة', text:'قالت مريم: «العلبة شكلها مستطيل. اختره من مجموعة الأشكال، ثم انقر واسحب وأفلت».', q:'اختر الشكل المناسب للعلبة.',
   groups:[{key:'shape',need:'rect',options:[['rect','▭ المستطيل','رائع! نقر سالم وسحب ثم أفلت، فظهر مستطيل العلبة.'],['circle','◯ الشكل البيضاوي','صارت العلبة دائرة! العلبة مستطيلة. جرّب غيره.'],['star','☆ النجمة','صارت العلبة نجمة! العلبة مستطيلة. جرّب غيره.']]}]},
  {title:'إطارٌ ذهبيّ', text:'قال سالم: «أختي تحبّ اللون الأصفر، سأجعل إطار العلبة أصفر».', q:'اختر لون الإطار.',
   groups:[{key:'line',need:'yellow',options:[['yellow','🟡 الأصفر','أحسنت! تغيّر لون الإطار إلى الأصفر.'],['blue','🔵 الأزرق','صار الإطار أزرق! سالم يريده أصفر. جرّب لونًا آخر.'],['green','🟢 الأخضر','صار الإطار أخضر! سالم يريده أصفر. جرّب لونًا آخر.']]}]},
  {title:'نملأ العلبة باللون', text:'اختار سالم اللون البرتقالي، ثم أراد أن يملأ العلبة كلّها بنقرة واحدة.', q:'اختر الأداة التي تملأ الشكل باللون.',
   groups:[{key:'fill',need:'bucket',options:[['bucket','🪣 أداة التعبئة','رائع! نقرة واحدة داخل المستطيل فامتلأ بالبرتقالي.'],['pencil','✏️ القلم','القلم يرسم خطوطًا رفيعة، وسيتعب سالم قبل أن يملأها. جرّب غيره.'],['eraser','🧽 الممحاة','الممحاة تمسح ولا تلوّن. جرّب غيرها.']]}]},
  {title:'أوه! خطٌّ أبيض', text:'جرّب سالم الممحاة فمسح خطًّا متعرّجًا من العلبة! قال: «أريد أن تعود العلبة كما كانت».', q:'اختر الزرّ الذي يلغي آخر خطوة.',
   groups:[{key:'undo',need:'undo',options:[['undo','↶ تراجُع','أحسنت! اختفى الخطّ الأبيض وعادت العلبة كما كانت.'],['redo','↷ إعادة','الإعادة ترجع خطوة ألغيناها، ولم نلغِ شيئًا بعد. جرّب غيره.'],['eraser','🧽 الممحاة مرّة أخرى','الممحاة تزيد المسح! جرّب غيرها.']]}]}
 ],
 end:{title:'هدية سالم جاهزة!', text:'فتح سالم الرسّام، ورسم مستطيلًا، وغيّر لون إطاره، وملأه باللون، وتراجع عن خطئه. ونصحته مريم: «احفظ عملك دائمًا!»'},
 win(c,H,t,cb){H.bg('#e9f1f8','#f7efe3');H.rect(36,18,648,444,'#f3f6fa',14,'#9aa6b2',2);H.rect(37,19,646,32,'#dfe8f3',13);H.text(t,360,36,15,'#3c4f63');
  ['#000','#7f7f7f','#880015','#ed1c24','#ff7f27','#fff200','#22b14c','#00a2e8','#3f48cc','#a349a4'].forEach((k,i)=>H.rect(472+i*19,64,15,15,k,2,'#c5ccd4',1));
  H.rect(262,62,16,12,null,0,'#3f6fb5',2);this.el(c,300,68,9,6,null,'#3f6fb5',2);this.pg(c,[[322,75],[331,61],[340,75]],null,'#3f6fb5',2);H.line(352,74,366,62,'#3f6fb5',2);
  H.emoji('✏️',70,70,18);H.emoji('🪣',98,70,18);H.emoji('🧽',126,70,18);H.emoji('🖌️',190,70,22);
  H.rect(52,92,616,352,cb||'#fff',4,'#c9d3de',2)},
 pg(c,p,f,s,w=5){c.beginPath();p.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();if(f){c.fillStyle=f;c.fill()}if(s){c.lineJoin='round';c.lineWidth=w;c.strokeStyle=s;c.stroke()}},
 el(c,x,y,rx,ry,f,s,w=5){c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);if(f){c.fillStyle=f;c.fill()}if(s){c.lineWidth=w;c.strokeStyle=s;c.stroke()}},
 shape(c,k,f,s,w){if(k==='rect')this.pg(c,[[220,170],[500,170],[500,370],[220,370]],f,s,w);else if(k==='circle')this.el(c,360,270,140,100,f,s,w);
  else if(k==='star'){const p=[];for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?50:115;p.push([360+r*Math.cos(a),275+r*Math.sin(a)])}this.pg(c,p,f,s,w)}},
 paint(c,s,st,H){
  if(s.app!=='paint'){H.bg('#4aa3df','#2b7fc0');H.rect(0,440,720,40,'#1f2b3a');H.emoji('⊞',30,460,24);
   H.rect(40,90,300,330,'#1f2b3a',8);H.text('Windows Accessories',190,120,18,'#fff');['🎨 Paint','🧮 Calculator','🌐 Microsoft Edge','📝 Notepad'].forEach((t,i)=>H.text(t,190,170+i*55,20,'#fff'));
   if(s.app){H.emoji({calc:'🧮',web:'🌐'}[s.app],530,230,120);if(st===1)H.mark(530,230,85,false)}return}
  this.win(c,H,'Untitled - Paint');if(st===1)H.mark(360,268,150,true);
  if(!s.shape)return;
  const f=s.fill==='bucket'?'#ff7f27':null,col={yellow:'#ffc90e',blue:'#2f6fd6',green:'#22b14c'}[s.line]||'#111';
  this.shape(c,s.shape,f,col,6);
  if(s.fill==='pencil')for(let i=0;i<5;i++)H.line(240+i*12,190,250+i*12,250,'#ff7f27',2);
  if(st===4&&s.fill==='eraser')H.bubble('لا يوجد شيء لنمسحه!',360,130,20);
  if(st===2)H.mark(360,270,165,s.shape==='rect');if(st===3&&s.line)H.mark(500,170,30,s.line==='yellow');if(st===4&&s.fill)H.mark(360,270,40,s.fill==='bucket');
  if(st>=5&&s.undo!=='undo'){c.save();c.beginPath();c.moveTo(260,200);c.lineTo(450,230);c.lineTo(270,280);c.lineTo(450,310);c.lineTo(280,350);c.lineCap='round';c.lineJoin='round';c.lineWidth=s.undo==='eraser'?34:18;c.strokeStyle='#fff';c.stroke();c.restore();
   if(s.undo==='redo')H.bubble('لا توجد خطوة لإعادتها',360,130,20);if(st===5&&s.undo)H.mark(360,270,60,false)}
  if(st===5&&s.undo==='undo')H.mark(360,270,60,true);
  if(st===6){H.rect(345,170,30,200,'#e8574b');H.rect(220,255,280,30,'#e8574b');this.el(c,330,160,30,18,'#e8574b');this.el(c,390,160,30,18,'#e8574b');H.circ(360,164,12,'#c43c33');H.text('⭐ عيد ميلاد سعيد ⭐',360,410,26)}
 }});
