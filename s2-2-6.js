/* الدرس 2.6 — الرسم الحرّ */
STORY2({lesson:'الصف الأول · الدرس ٢.٦', topic:'الرسم الحرّ', file:'farasha-maryam', back:'https://alyahmedi352-star.github.io/abeer/',
 title:'فراشة مريم في الحديقة',
 intro:'رأت مريم فراشة ملوّنة في حديقة المدرسة وقالت: «سأرسمها بالفُرَش بحرية!» قال سالم: «في الرسّام فُرَشٌ كثيرة… لنجرّبها».',
 pages:[
  {title:'عشبٌ أخضر', text:'اختارت مريم اللون الأخضر، وأرادت عشبًا يشبه رذاذ الألوان.', q:'اختر الأداة المناسبة لرسم العشب.',
   groups:[{key:'grass',need:'spray',options:[['spray','🖌️ فرشاة الرذاذ (البخّاخ)','أحسنت! نقرت مريم وسحبت، فنبت عشبٌ أخضر ناعم.'],['rect','▭ مستطيل أخضر','صار العشب صندوقًا أخضر! العشب يحتاج رسمًا حرًّا. جرّب غيره.'],['eraser','🧽 الممحاة','الممحاة تمسح ولا ترسم. جرّب غيرها.']]}]},
  {title:'جسم الفراشة', text:'اختارت مريم الفرشاة لترسم جسم الفراشة، وقالت: «جسمها أصفر كالشمس».', q:'اختر لون الجسم.',
   groups:[{key:'body',need:'yellow',options:[['yellow','🟡 الأصفر','رائع! ظهر جسم الفراشة الأصفر.'],['black','⚫ الأسود','صار الجسم أسود! مريم تريده أصفر. جرّب غيره.'],['red','🔴 الأحمر','صار الجسم أحمر! مريم تريده أصفر. جرّب غيره.']]}]},
  {title:'أجنحةٌ مرفرفة', text:'قال سالم: «الأجنحة منحنية، نرسم حدودها الزرقاء بحرية».', q:'اختر الأداة التي نرسم بها حدود الأجنحة.',
   groups:[{key:'wings',need:'brush',options:[['brush','🖌️ الفرشاة','أحسنت! رفرفت أجنحة زرقاء، وظهر قرنا الاستشعار.'],['rect','▭ المستطيل','صارت الأجنحة صناديق! الفراشة لا تطير بصناديق. جرّب غيره.'],['line','╲ الخط','صارت الأجنحة خطوطًا مستقيمة! جرّب غيره.']]}]},
  {title:'نقاطٌ حمراء', text:'لوّنت مريم داخل الأجنحة بالرذاذ الأزرق، ثم أرادت بقعًا حمراء صغيرة.', q:'اختر الأداة المناسبة للبقع.',
   groups:[{key:'spots',need:'oil',options:[['oil','🖌️ فرشاة الألوان الزيتية','رائع! ظهرت بقعٌ حمراء جميلة على الأجنحة.'],['bucket','🪣 أداة التعبئة','امتلأ الجناح كلّه بالأحمر! نريد بقعًا صغيرة. جرّب غيرها.'],['eraser','🧽 الممحاة','الممحاة تمسح ولا تلوّن. جرّب غيرها.']]}]},
  {title:'نكمل غدًا', text:'حفظت مريم رسمتها باسم «فراشة» وأغلقت الملف. وفي اليوم التالي أرادت أن تضيف إليها زهرة.', q:'كيف تُرجع مريم رسمتها؟',
   groups:[{key:'open',need:'open',options:[['open','📂 ملف ← فتح (Open) ← فراشة','أحسنت! عادت الفراشة، وأضافت مريم زهرة من خيالها.'],['new','📄 ملف ← جديد (New)','ظهرت لوحة فارغة! الجديد لا يُرجع الرسمة. جرّب غيره.'],['draw','✏️ ترسمها من جديد','لا داعي للتعب، فالرسمة محفوظة! جرّب غيره.']]}]}
 ],
 end:{title:'حديقة مريم الملوّنة', text:'رسمت مريم بالفُرَش رسمًا حرًّا: عشبًا وفراشة وزهرة، وحفظت رسمتها وفتحتها من جديد لتكملها.'},
 win(c,H,t,cb){H.bg('#e9f1f8','#f7efe3');H.rect(36,18,648,444,'#f3f6fa',14,'#9aa6b2',2);H.rect(37,19,646,32,'#dfe8f3',13);H.text(t,360,36,15,'#3c4f63');
  ['#000','#7f7f7f','#880015','#ed1c24','#ff7f27','#fff200','#22b14c','#00a2e8','#3f48cc','#a349a4'].forEach((k,i)=>H.rect(472+i*19,64,15,15,k,2,'#c5ccd4',1));
  H.rect(262,62,16,12,null,0,'#3f6fb5',2);this.el(c,300,68,9,6,null,'#3f6fb5',2);this.pg(c,[[322,75],[331,61],[340,75]],null,'#3f6fb5',2);H.line(352,74,366,62,'#3f6fb5',2);
  H.emoji('✏️',70,70,18);H.emoji('🪣',98,70,18);H.emoji('🧽',126,70,18);H.emoji('🖌️',190,70,22);
  H.rect(52,92,616,352,cb||'#fff',4,'#c9d3de',2)},
 pg(c,p,f,s,w=5){c.beginPath();p.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();if(f){c.fillStyle=f;c.fill()}if(s){c.lineJoin='round';c.lineWidth=w;c.strokeStyle=s;c.stroke()}},
 el(c,x,y,rx,ry,f,s,w=5){c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);if(f){c.fillStyle=f;c.fill()}if(s){c.lineWidth=w;c.strokeStyle=s;c.stroke()}},
 rnd(n){let x=n*9301+49297;return()=>((x=(x*9301+49297)%233280)/233280)},
 wing(c,sx,f,k){c.beginPath();c.moveTo(360,210);c.bezierCurveTo(360+sx*60,120,360+sx*170,130,360+sx*140,215);c.bezierCurveTo(360+sx*190,250,360+sx*150,330,360+sx*10,265);c.closePath();if(f){c.fillStyle=f;c.fill()}c.lineWidth=9;c.lineJoin='round';c.strokeStyle=k;c.stroke()},
 paint(c,s,st,H){
  const fresh=st>=5&&s.open!=='open',closed=st===5&&!s.open;
  this.win(c,H,st>=5&&s.open==='open'?'فراشة - Paint':'Untitled - Paint');
  if(closed){H.rect(52,92,616,352,'#3d8fd1',4);H.emoji('🖼️',360,240,90);H.text('فراشة.png',360,310,24,'#fff');return}
  if(fresh&&s.open==='new'){H.bubble('لوحة فارغة!',360,260,22);if(st===5)H.mark(360,260,120,false);return}
  if(s.grass==='spray'){const r=this.rnd(7);c.fillStyle='#22b14c';for(let i=0;i<2600;i++){const x=54+r()*612,top=372+18*Math.sin(x/60);const y=top+r()*(444-top);if(r()<.85)c.fillRect(x,y,2,2)}}
  else if(s.grass==='rect')H.rect(52,380,616,64,'#22b14c');
  if(st===1&&s.grass==='eraser')H.bubble('الممحاة لا ترسم!',360,300,20);if(st===1&&s.grass)H.mark(360,405,60,s.grass==='spray');
  if(st>=3&&s.wings){const f=st>=4?(s.spots==='bucket'?'#e8233a':'#bfe3f7'):null;
   if(s.wings==='brush'){this.wing(c,1,f,'#2aa7d6');this.wing(c,-1,f,'#2aa7d6');c.lineWidth=6;c.strokeStyle='#e8233a';c.beginPath();c.moveTo(352,160);c.quadraticCurveTo(340,120,318,118);c.moveTo(368,160);c.quadraticCurveTo(380,120,402,118);c.stroke()}
   else if(s.wings==='rect'){H.rect(390,150,130,110,f,0,'#2aa7d6',8);H.rect(200,150,130,110,f,0,'#2aa7d6',8)}
   else{H.line(370,170,520,260,'#2aa7d6',8);H.line(350,170,200,260,'#2aa7d6',8)}
   if(st===3)H.mark(360,215,170,s.wings==='brush')}
  if(s.body){const k={yellow:'#ffe11a',black:'#222',red:'#e8233a'}[s.body];c.beginPath();c.moveTo(360,175);c.lineTo(360,300);c.lineCap='round';c.lineWidth=26;c.strokeStyle=k;c.stroke();H.circ(360,166,18,k);if(st===2)H.mark(360,235,90,s.body==='yellow')}
  if(st>=4&&s.spots==='oil')[[440,180,22],[280,180,22],[430,270,15],[290,270,15]].forEach(([x,y,r])=>H.circ(x,y,r,'#e8233a'));
  if(st===4&&s.spots==='eraser')H.bubble('الممحاة لا تلوّن!',360,120,20);if(st===4&&s.spots)H.mark(360,220,130,s.spots==='oil');
  if(st>=5&&s.open==='draw'){c.fillStyle='rgba(255,255,255,.75)';c.fillRect(52,92,616,352);H.bubble('رسمتك محفوظة… لا تتعب!',360,260,20);if(st===5)H.mark(360,260,120,false);return}
  if(st>=5&&s.open==='open'){H.line(580,380,585,260,'#22b14c',6);this.el(c,605,330,18,8,'#22b14c');for(let i=0;i<6;i++){const a=i*Math.PI/3;H.circ(585+30*Math.cos(a),240+30*Math.sin(a),20,'#e8233a')}H.circ(585,240,13,'#ffe11a');if(st===5)H.mark(585,250,60,true)}
  if(st===6)H.text('⭐ حديقة مريم ⭐',180,130,26);
 }});
