/* الدرس 1.5 — دعنا نتذكّر */
STORY2({lesson:'الصف الأول · الدرس ١.٥', topic:'دعنا نتذكّر', file:'lawhat-altathakkur', back:'https://alyahmedi352-star.github.io/abeer/',
 title:'لوحة التذكّر السحرية',
 intro:'علّقت المعلّمة لوحة كبيرة فيها أربعة مربّعات فارغة، وقالت: «كلّ إجابة صحيحة تملأ مربّعًا!» قال سالم لمريم: «هيّا نتذكّر كلّ ما تعلّمناه».',
 pages:[
  {title:'النقر', text:'في المربّع الأول فأرة كبيرة. سألت مريم: «بأيّ زرّ ننقر لنختار شيئًا؟»', q:'اختر جزء الفأرة.',
   groups:[{key:'click',need:'left',options:[['left','الزرّ الأيسر','أحسنت! ننقر بالزرّ الأيسر.'],['right','الزرّ الأيمن','الزرّ الأيمن يفتح قائمة. ننقر عادةً بالأيسر.'],['wheel','عجلة التمرير','العجلة للتمرير، لا للنقر.']]}]},
  {title:'التمرير', text:'قال سالم: «الصفحة طويلة! أريد أن أنزل إلى أسفلها».', q:'اختر جزء الفأرة.',
   groups:[{key:'scroll',need:'wheel',options:[['wheel','عجلة التمرير','صحيح! نمرّر الصفحة بالعجلة.'],['left','الزرّ الأيسر','الزرّ الأيسر للنقر. جرّب غيره.'],['right','الزرّ الأيمن','الزرّ الأيمن لا يمرّر الصفحة.']]}]},
  {title:'الحرف الخطأ', text:'في المربّع الثاني لوحة مفاتيح. كتبت مريم حرفًا خطأً.', q:'أيّ مفتاح يحذف الحرف؟',
   groups:[{key:'del',need:'back',options:[['back','Backspace','أحسنت! مفتاح المسافة للخلف يحذف الحرف.'],['space','Spacebar','هذا يضيف مسافة ولا يحذف.'],['enter','Enter','هذا ينقل إلى سطر جديد ولا يحذف.']]}]},
  {title:'صورة بالكاميرا', text:'في المربّع الثالث كاميرا. التقط سالم صورة لمريم.', q:'ما الملف الذي أنشأه سالم؟',
   groups:[{key:'file',need:'img',options:[['img','🖼️ ملف صورة','صحيح! الكاميرا تنشئ ملف صورة.'],['sound','🎵 ملف صوت','الصوت يُسجَّل بالميكروفون. جرّب غيره.'],['text','📝 ملف نصّ','النصّ نكتبه بلوحة المفاتيح. جرّب غيره.']]}]},
  {title:'قبل أن نبدأ', text:'في المربّع الأخير سؤال مهمّ: ماذا نفعل قبل استخدام الحاسوب؟', q:'اختر السلوك الصحيح.',
   groups:[{key:'act',need:'wash',options:[['wash','🧼 أغسل يديّ','رائع! نغسل أيدينا قبل استخدام الحاسوب.'],['eat','🍔 آكل بجانبه','الطعام قد يتلف الحاسوب. جرّب غيره.'],['pull','🔌 أشدّ الأسلاك','شدّ الأسلاك خطر! جرّب غيره.']]}]}
 ],
 end:{title:'امتلأت لوحة التذكّر!', text:'تذكّر سالم ومريم أزرار الفأرة، ومفتاح المسافة للخلف، وملف الصورة، وغسل اليدين قبل استخدام الحاسوب.'},
 paint(c,s,st,H){
  H.bg('#f3ead8','#efe2c8');H.rect(20,16,680,448,'#2f5d4f',18,'#8a5c2e',10);
  const box=[[40,36],[370,36],[40,250],[370,250]];box.forEach(([x,y])=>H.rect(x,y,310,194,'rgba(255,255,255,.1)',12,'rgba(255,255,255,.35)',2));
  // الفأرة
  const mx=195,my=140;c.beginPath();c.ellipse(mx,my,55,78,0,0,Math.PI*2);c.fillStyle='#f4f6f8';c.fill();
  const hl=(part,col)=>{c.save();c.beginPath();c.ellipse(mx,my,55,78,0,0,Math.PI*2);c.clip();c.fillStyle=col;if(part==='left')c.fillRect(mx-55,my-78,55,70);if(part==='right')c.fillRect(mx,my-78,55,70);c.restore();if(part==='wheel')H.rect(mx-7,my-55,14,30,col,6)};
  if(s.click&&s.click!=='wheel')hl(s.click,s.click==='left'?'#7ddc9b':'#ff9a8f');if(st>=2&&s.scroll&&s.scroll!=='wheel')hl(s.scroll,'#ff9a8f');
  H.line(mx-55,my-8,mx+55,my-8,'#9aa6b2',2);H.line(mx,my-78,mx,my-8,'#9aa6b2',2);
  const wc=(st>=2&&s.scroll)?(s.scroll==='wheel'?'#2f8a57':'#9aa6b2'):(s.click==='wheel'?'#e8574b':'#9aa6b2');H.rect(mx-9,my-58,18,36,wc,8);
  H.text('يسار',mx-30,my-40,14,'#15284b');H.text('يمين',mx+30,my-40,14,'#15284b');
  // لوحة المفاتيح
  H.rect(395,90,260,90,'#e9edf2',8);const K=[['enter','Enter',420,100,70],['back','Backspace',500,100,130],['space','Spacebar',440,140,170]];
  K.forEach(([k,l,x,y,w])=>H.rect(x,y,w,30,s.del===k?(k==='back'?'#7ddc9b':'#ff9a8f'):'#fff',5,'#9aa6b2',2)||H.text(l,x+w/2,y+15,15));
  K.forEach(([k,l,x,y,w])=>H.text(l,x+w/2,y+15,15));
  // الملف
  H.emoji('📷',120,345,64);if(s.file){H.text('←',195,345,40,'#fff');H.emoji({img:'🖼️',sound:'🎵',text:'📝'}[s.file],270,345,70);if(st===4)H.mark(270,345,50,s.file==='img')}
  // السلوك
  H.emoji('💻',440,345,60);if(s.act){H.emoji({wash:'🧼',eat:'🍔',pull:'🔌'}[s.act],590,345,70);if(st===5)H.mark(590,345,52,s.act==='wash')}
  const ok=[s.click==='left'&&s.scroll==='wheel',s.del==='back',s.file==='img',s.act==='wash'];
  box.forEach(([x,y],i)=>{if(ok[i])H.text('⭐',x+290,y+20,26,'#ffd454')});
 }});
