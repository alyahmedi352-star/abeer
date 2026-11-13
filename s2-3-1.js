/* الدرس 3.1 — الإنترنت */
STORY2({lesson:'الصف الأول · الدرس ٣.١', topic:'الإنترنت', file:'internet-salem', back:'https://alyahmedi352-star.github.io/abeer/',
 title:'حاسوب سالم يتّصل بالعالم',
 intro:'ابن عمّ سالم يسكن في بلدٍ بعيد. قال سالم: «أريد أن أراه وأكلّمه من حاسوبي!» قالت مريم: «هيّا نكتشف كيف تتّصل الحواسيب ببعضها».',
 pages:[
  {title:'شبكةٌ حول الأرض', text:'أشار سالم إلى الكرة الأرضية وسأل: «ما الذي يربط حاسوبي بحواسيب في جميع أنحاء العالم؟»', q:'اختر الإجابة الصحيحة.',
   groups:[{key:'net',need:'internet',options:[['internet','🌐 الإنترنت','أحسنت! الإنترنت يصل حاسوبك بأجهزة حاسوب أخرى في جميع أنحاء العالم.'],['power','🔌 سلك الكهرباء','سلك الكهرباء يشغّل الحاسوب فقط، ولا يصله بالعالم. جرّب غيره.'],['printer','🖨️ الطابعة','الطابعة تطبع الأوراق فقط. جرّب غيرها.']]}]},
  {title:'حاسوب المختبر', text:'في مختبر المدرسة رأى سالم سلكًا يخرج من الحاسوب إلى جهاز صغير (الموجّه).', q:'ما نوع هذا الاتصال بالإنترنت؟',
   groups:[{key:'wire',need:'wired',options:[['wired','🔌 اتصالٌ سلكي','صحيح! هنا يتّصل الحاسوب بالإنترنت عن طريق سلك.'],['wireless','📶 اتصالٌ لاسلكي','لكنّنا نرى سلكًا بين الحاسوب والموجّه! جرّب غيره.']]}]},
  {title:'لوحيّ مريم في الحديقة', text:'جلست مريم في الحديقة بجهازها اللوحي، ولا يوجد أيّ سلك، ومع ذلك فتحت الإنترنت!', q:'ما نوع هذا الاتصال؟',
   groups:[{key:'wifi',need:'wireless',options:[['wireless','📶 اتصالٌ لاسلكي','أحسنت! الجهاز يتّصل بالإنترنت دون أسلاك.'],['wired','🔌 اتصالٌ سلكي','لا يوجد سلك هنا! جرّب غيره.']]}]},
  {title:'إلى أين نذهب؟', text:'قرّرت العائلة زيارة المتحف، لكنّ سالم لا يعرف الطريق.', q:'أيّ استخدامات الإنترنت يساعده؟',
   groups:[{key:'use',need:'map',options:[['map','🗺️ الخرائط','رائع! ظهر الطريق إلى المتحف على الخريطة.'],['chat','💬 التواصل مع الآخرين','التواصل للحديث مع الأصدقاء، ونحن نريد الطريق. جرّب غيره.'],['game','🎮 لعبة','اللعبة لا تدلّنا على الطريق. جرّب غيرها.']]}]},
  {title:'رسالةٌ من مجهول', text:'ظهرت رسالة من شخص لا يعرفه سالم: «أرسل لي صورتك وكلمة المرور الخاصّة بك!»', q:'ماذا يفعل سالم؟',
   groups:[{key:'safe',need:'parents',options:[['parents','👨‍👩‍👦 يُخبر والديه أو معلّمته','أحسنت! لا نشارك معلوماتنا الشخصية، ونُخبر الكبار دائمًا.'],['photo','📤 يرسل صورته','لا نرسل صورنا لشخص مجهول! جرّب غيره.'],['pass','🔑 يكتب كلمة المرور','كلمة المرور سرٌّ لا نشاركه أبدًا! جرّب غيره.']]}]}
 ],
 end:{title:'سالم يتصفّح بأمان', text:'عرف سالم أنّ الإنترنت يصل الحواسيب حول العالم، بسلك أو دون سلك، ويُستخدم للتصفّح والتواصل والبحث والخرائط. وتذكّر أن ينتبه ويُخبر الكبار.'},
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
  H.bg('#1d6fb8','#0e3a6b');for(let i=0;i<40;i++)H.circ((i*137)%720,(i*89)%480,1.5,'#cfe4ff');
  H.circ(360,240,118,'#9fd3f3');this.el(c,320,200,48,62,'#6fbf4a');this.el(c,410,220,40,34,'#6fbf4a');this.el(c,390,300,26,36,'#6fbf4a');
  const D=[[150,110,'🖥️'],[570,110,'💻'],[110,300,'💻'],[610,300,'📱'],[360,420,'🖥️']];
  if(s.net==='internet'){c.save();c.setLineDash([7,7]);D.forEach(([x,y],i)=>D.slice(i+1).forEach(([a,b])=>H.line(x,y,a,b,'rgba(255,255,255,.7)',2)));c.restore();H.emoji('🛰️',640,40,46)}
  else if(s.net)H.emoji({power:'🔌',printer:'🖨️'}[s.net],360,240,90);
  D.forEach(([x,y,e])=>H.emoji(e,x,y,52));
  if(st===1&&s.net)H.mark(360,240,130,s.net==='internet');
  if(s.wire){H.rect(30,370,70,30,'#e9edf2',6,'#5c6575',2);H.circ(48,385,4,'#3ddc84');H.line(78,370,90,350,'#5c6575',2);
   if(s.wire==='wired')H.curve(100,390,120,360,110,322,'#fff',4);else H.emoji('📶',65,345,30);if(st===2)H.mark(85,355,50,s.wire==='wired')}
  if(s.wifi){if(s.wifi==='wireless')[16,28,40].forEach(r=>{c.beginPath();c.arc(610,262,r,Math.PI*1.2,Math.PI*1.8);c.lineWidth=5;c.strokeStyle='#fff';c.stroke()});
   else H.curve(610,330,600,430,700,460,'#fff',4);if(st===3)H.mark(610,290,55,s.wifi==='wireless')}
  if(s.use==='map'){H.emoji('📍',400,165,46);H.bubble('المتحف',400,120,18)}else if(s.use)H.emoji({chat:'💬',game:'🎮'}[s.use],400,160,50);if(st===4&&s.use)H.mark(400,160,45,s.use==='map');
  if(s.safe==='parents'){H.emoji('🛡️',150,220,70);if(st<6)H.bubble('معلوماتي سرّ!',150,160,18)}else if(s.safe){H.emoji('👤',150,220,60);H.emoji(s.safe==='photo'?'📤':'🔑',200,250,34)}
  if(st===5&&s.safe)H.mark(160,220,55,s.safe==='parents');
  if(st===6)H.text('⭐ متّصلون بأمان ⭐',360,40,28,'#fff');
 }});
