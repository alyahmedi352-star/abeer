/* الدرس 3.4 — ابحث */
STORY2({lesson:'الصف الأول · الدرس ٣.٤', topic:'ابحث', file:'bahth-maryam', back:'https://alyahmedi352-star.github.io/abeer/',
 title:'مريم تبحث عن حيوانات عُمان',
 intro:'طلبت المعلّمة من الطلاب أن يعرفوا ثلاثة حيوانات بريّة تعيش في سلطنة عُمان. قالت مريم: «سأبحث عنها في الإنترنت!»',
 pages:[
  {title:'موقع البحث', text:'فتحت مريم المتصفّح ونقرت في شريط العنوان. قال سالم: «نحتاج موقعًا خاصًّا بالبحث».', q:'ماذا تكتب مريم في شريط العنوان؟',
   groups:[{key:'site',need:'google',options:[['google','www.google.com','أحسنت! ضغطت مريم مفتاح الإدخال (Enter) فظهر موقع البحث.'],['lib','www.cploman.com/ar','هذا موقع مكتبة الأطفال، لا موقع البحث. جرّب غيره.'],['nm','www.nm.gov.om','هذا موقع المتحف الوطني، لا موقع البحث. جرّب غيره.']]}]},
  {title:'كلمات البحث', text:'ظهر مربّع البحث. قالت مريم: «أكتب فيه ما أريد أن أعرفه بالضبط».', q:'اختر أفضل كلمات للبحث.',
   groups:[{key:'words',need:'oman',options:[['oman','الحيوانات البرية في سلطنة عمان','رائع! ضغطت Enter فظهرت نتائج عن حيوانات عُمان البريّة.'],['games','ألعاب','هذه الكلمة لا تبحث عن الحيوانات! جرّب غيرها.'],['all','حيوانات','ستظهر حيوانات من كلّ العالم! نريد حيوانات عُمان. جرّب غيرها.']]}]},
  {title:'الحيوان الأوّل', text:'ظهرت صور كثيرة. قالت مريم: «أبحث عن حيوانٍ يعيش في جبال عُمان».', q:'اختر حيوانًا بريًّا يعيش في عُمان.',
   groups:[{key:'a1',need:'leopard',options:[['leopard','🐆 النمر العربي','أحسنت! النمر العربي يعيش في جبال ظفار.'],['panda','🐼 الباندا','الباندا تعيش في الصين، لا في عُمان. جرّب غيرها.'],['penguin','🐧 البطريق','البطريق يعيش في الأماكن الباردة جدًّا. جرّب غيره.']]}]},
  {title:'الحيوان الثاني', text:'تابعت مريم البحث، ثم قالت: «وهذا حيوان رشيق يعيش في صحاري عُمان وسهولها!»', q:'اختر الحيوان الثاني.',
   groups:[{key:'a2',need:'gazelle',options:[['gazelle','🦌 الغزال العربي','رائع! الغزال العربي يعيش في عُمان.'],['koala','🐨 الكوالا','الكوالا تعيش في أستراليا. جرّب غيرها.'],['polar','🐻‍❄️ الدبّ القطبي','الدبّ القطبي يعيش في الثلج! جرّب غيره.']]}]},
  {title:'نافذةٌ غريبة', text:'فجأة ظهرت نافذة: «اربح جائزة! اكتب اسمك وعنوان بيتك».', q:'ماذا تفعل مريم؟',
   groups:[{key:'pop',need:'ask',options:[['ask','🙋 تسأل المعلّمة أو والديها','أحسنت! لا نكتب معلوماتنا الشخصية، ونسأل الكبار.'],['type','✍️ تكتب اسمها وعنوانها','لا نشارك معلوماتنا الشخصية أبدًا! جرّب غيره.'],['click','🖱️ تنقر على الجائزة فورًا','انتبهي! لا ننقر على نوافذ لا نعرفها. جرّب غيره.']]}]}
 ],
 end:{title:'وجدت مريم ثلاثة حيوانات!', text:'كتبت مريم في دفترها: النمر العربي، والغزال العربي، والطهر العربي. عرفت كيف تبحث في الإنترنت بكلمات واضحة، وبأمان.'},
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
  const ok=s.site==='google';
  this.br(c,H,s.site==='google'?'www.google.com':s.site==='lib'?'www.cploman.com/ar':s.site==='nm'?'www.nm.gov.om':'',ok?'#fff':s.site?'#f4ecf3':'#fff');
  if(st===1&&s.site)H.mark(395,73,40,ok);
  if(!ok){if(s.site)H.text(s.site==='lib'?'مكتبة الأطفال العامة':'المتحف الوطني',360,260,26,'#8a1c3c');return}
  const res=s.words==='oman'&&st>=3,G=['#4285f4','#ea4335','#fbbc05','#4285f4','#34a853','#ea4335'];
  if(!res){c.font='bold 52px Arial';c.textAlign='left';c.textBaseline='middle';c.direction='ltr';let gx=360-c.measureText('Google').width/2;[...'Google'].forEach((ch,i)=>{c.fillStyle=G[i];c.fillText(ch,gx,180);gx+=c.measureText(ch).width});H.rect(160,240,400,44,'#fff',22,'#c5ccd4',2);
   if(s.words)H.text({oman:'الحيوانات البرية في سلطنة عمان',games:'ألعاب',all:'حيوانات'}[s.words],530,262,18,'#15284b',false,'right');
   if(st===2&&s.words){H.mark(360,262,60,s.words==='oman');if(s.words!=='oman')H.emoji(s.words==='games'?'🎮':'🌍',360,360,70)}return}
  H.rect(70,104,580,34,'#f3f6fa',17);H.text('الحيوانات البرية في سلطنة عمان',620,121,15,'#15284b',false,'right');
  const A=[[560,220,'a1',{leopard:['🐆','النمر العربي'],panda:['🐼','الباندا'],penguin:['🐧','البطريق']}],[360,220,'a2',{gazelle:['🦌','الغزال العربي'],koala:['🐨','الكوالا'],polar:['🐻‍❄️','الدبّ القطبي']}]];
  A.forEach(([x,y,k,M])=>{const v=s[k];if(v){const good=v==='leopard'||v==='gazelle';this.card(c,H,x,y,M[v][0],M[v][1],good);if(st===(k==='a1'?3:4))H.mark(x,y,78,good)}else this.card(c,H,x,y,'❔','…')});
  this.card(c,H,160,220,st>=6?'🐐':'❔',st>=6?'الطهر العربي':'…');
  if(st>=5&&s.pop){if(s.pop==='ask'){H.emoji('🛡️',360,360,60);H.text('معلوماتي الشخصية سرّ',360,410,18,'#2f8a57')}
   else{H.rect(200,300,320,120,'#fff3c4',12,'#e8574b',3);H.text('🎁 اربح جائزة!',360,330,20,'#8a1c1c');H.text('اسمك: ____  عنوانك: ____',360,375,16)}
   if(st===5)H.mark(360,360,70,s.pop==='ask')}
  else if(st===5){H.rect(200,300,320,120,'#fff3c4',12,'#e8574b',3);H.text('🎁 اربح جائزة!',360,330,20,'#8a1c1c');H.text('اسمك: ____  عنوانك: ____',360,375,16)}
 }});
