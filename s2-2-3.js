/* الدرس 2.3 — لنتدرّب على الأشكال */
STORY2({lesson:'الصف الأول · الدرس ٢.٣', topic:'لنتدرّب على الأشكال', file:'mulsaq-maryam', back:'https://alyahmedi352-star.github.io/abeer/',
 title:'ملصق الأشكال الملوّنة',
 intro:'أعلنت المعلّمة عن مسابقة لأجمل ملصق أشكال. قالت مريم: «سأرسم سحابة كلام، وخماسيًّا، ومعيّنًا، ودوائر!» وجلس سالم يساعدها.',
 pages:[
  {title:'سحابة الكلام', text:'قالت مريم: «أبدأ بسحابة كلام تشبه الغيمة، أكتب فيها اسم الملصق لاحقًا».', q:'اختر شكل سحابة الكلام من مجموعة الأشكال.',
   groups:[{key:'cloud',need:'cloud',options:[['cloud','💭 شكل السحابة','أحسنت! ظهرت سحابة الكلام بإطارها الوردي.'],['rect','▭ المستطيل','ظهر مستطيل! نريد سحابة تشبه الغيمة. جرّب غيره.'],['pent','⬠ الخماسي','ظهر خماسي! نريد سحابة تشبه الغيمة. جرّب غيره.']]}]},
  {title:'سحابة زرقاء', text:'اختارت مريم اللون الأزرق الفاتح، وأرادت أن تملأ السحابة به.', q:'اختر الأداة المناسبة.',
   groups:[{key:'cfill',need:'bucket',options:[['bucket','🪣 أداة التعبئة','رائع! امتلأت السحابة بالأزرق الفاتح.'],['eraser','🧽 الممحاة','الممحاة تمسح ولا تملأ. جرّب غيرها.'],['pencil','✏️ القلم','القلم يرسم خطوطًا رفيعة فقط. جرّب غيره.']]}]},
  {title:'خماسيّ بلونين', text:'قال سالم: «اجعلي حدود الخماسي بنفسجية، وتعبئته خضراء».', q:'اختر لون الحدود، ثم لون التعبئة.',
   groups:[{key:'pout',need:'purple',options:[['purple','🟣 حدود بنفسجية','أحسنت! صارت الحدود بنفسجية. والآن اختر لون التعبئة.'],['orange','🟠 حدود برتقالية','صارت الحدود برتقالية! سالم قال بنفسجية.']]},
           {key:'pin',need:'green',options:[['green','🟢 تعبئة خضراء','رائع! امتلأ الخماسي بالأخضر.'],['pink','🩷 تعبئة وردية','صار الخماسي ورديًّا! سالم قال خضراء.']]}]},
  {title:'أين ذهب المعيّن؟', text:'رسمت مريم معيّنًا أزرق، ثم ضغطت «تراجُع» بالخطأ فاختفى!', q:'اختر الزرّ الذي يُرجع المعيّن.',
   groups:[{key:'redo',need:'redo',options:[['redo','↷ إعادة','أحسنت! عاد المعيّن الأزرق إلى مكانه.'],['undo','↶ تراجُع مرّة أخرى','اختفى الخماسي أيضًا! التراجع يلغي خطوة أخرى. جرّب غيره.'],['eraser','🧽 الممحاة','الممحاة لا تُرجع ما اختفى. جرّب غيرها.']]}]},
  {title:'ثلاث دوائر', text:'بقي ركنٌ فارغ. قالت مريم: «سأرسم فيه ثلاث دوائر بحدود مختلفة».', q:'اختر الشكل الذي نرسم به الدائرة.',
   groups:[{key:'circ',need:'oval',options:[['oval','◯ الشكل البيضاوي','رائع! نقرت مريم وسحبت فظهرت ثلاث دوائر ملوّنة.'],['line','╲ الخط','ظهرت خطوط مستقيمة! نريد دوائر. جرّب غيره.'],['tri','△ المثلث','ظهرت مثلّثات! نريد دوائر. جرّب غيره.']]}]}
 ],
 end:{title:'ملصق مريم جاهز!', text:'اختارت مريم الأشكال المناسبة، ولوّنت الحدود والتعبئة، واستعملت الإعادة لتُرجع ما اختفى. ملصقها مرشّح للفوز!'},
 win(c,H,t,cb){H.bg('#e9f1f8','#f7efe3');H.rect(36,18,648,444,'#f3f6fa',14,'#9aa6b2',2);H.rect(37,19,646,32,'#dfe8f3',13);H.text(t,360,36,15,'#3c4f63');
  ['#000','#7f7f7f','#880015','#ed1c24','#ff7f27','#fff200','#22b14c','#00a2e8','#3f48cc','#a349a4'].forEach((k,i)=>H.rect(472+i*19,64,15,15,k,2,'#c5ccd4',1));
  H.rect(262,62,16,12,null,0,'#3f6fb5',2);this.el(c,300,68,9,6,null,'#3f6fb5',2);this.pg(c,[[322,75],[331,61],[340,75]],null,'#3f6fb5',2);H.line(352,74,366,62,'#3f6fb5',2);
  H.emoji('✏️',70,70,18);H.emoji('🪣',98,70,18);H.emoji('🧽',126,70,18);H.emoji('🖌️',190,70,22);
  H.rect(52,92,616,352,cb||'#fff',4,'#c9d3de',2)},
 pg(c,p,f,s,w=5){c.beginPath();p.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();if(f){c.fillStyle=f;c.fill()}if(s){c.lineJoin='round';c.lineWidth=w;c.strokeStyle=s;c.stroke()}},
 el(c,x,y,rx,ry,f,s,w=5){c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);if(f){c.fillStyle=f;c.fill()}if(s){c.lineWidth=w;c.strokeStyle=s;c.stroke()}},
 cloud(c,f,s){const B=[[150,190,40],[195,160,42],[250,158,40],[290,190,38],[255,225,40],[195,228,42]];
  B.forEach(b=>H0(b,s,16));B.forEach(b=>H0(b,f||'#fff',0));function H0([x,y,r],k,e){c.beginPath();c.arc(x,y,r+e/2,0,Math.PI*2);c.fillStyle=k;c.fill()}
  c.beginPath();c.arc(150,262,9,0,7);c.arc(132,282,6,0,7);c.fillStyle=f||'#fff';c.fill();c.lineWidth=4;c.strokeStyle=s;c.stroke()},
 pent(c,f,s){const p=[];for(let i=0;i<5;i++){const a=-Math.PI/2+i*2*Math.PI/5;p.push([530+75*Math.cos(a),200+75*Math.sin(a)])}this.pg(c,p,f,s,9)},
 paint(c,s,st,H){
  this.win(c,H,'Untitled - Paint');
  const cf=s.cfill==='bucket'?'#99d9ea':null;
  if(s.cloud==='cloud')this.cloud(c,cf,'#e8336e');else if(s.cloud==='rect')H.rect(110,140,200,120,cf,6,'#e8336e',8);else if(s.cloud==='pent')this.pg(c,[[210,120],[290,180],[260,270],[160,270],[130,180]],cf,'#e8336e',8);
  if(s.cfill==='pencil')for(let i=0;i<4;i++)H.line(170+i*20,175,180+i*20,215,'#00a2e8',2);
  if(st===2&&s.cfill==='eraser')H.bubble('الممحاة لا تلوّن!',210,120,20);
  if(st===1&&s.cloud)H.mark(210,200,115,s.cloud==='cloud');if(st===2&&s.cfill)H.mark(210,200,115,s.cfill==='bucket');
  const hidePent=st>=4&&s.redo==='undo';
  if(st>=3&&!hidePent)this.pent(c,{green:'#b5e61d',pink:'#f5a3c7'}[s.pin]||'#fff',{purple:'#a349a4',orange:'#ff7f27'}[s.pout]||'#111');
  if(st===3&&(s.pout||s.pin))H.mark(530,205,92,s.pout==='purple'&&s.pin==='green');
  if(st>=4){const d=[[200,290],[270,360],[200,430],[130,360]].map(([x,y])=>[x+40,y-6]);
   if(s.redo==='redo')this.pg(c,d,null,'#00a2e8',8);else{c.save();c.setLineDash([8,8]);this.pg(c,d,null,'#c5ccd4',3);c.restore();H.bubble('أين المعيّن؟',240,354,18)}
   if(st===4&&s.redo)H.mark(240,354,86,s.redo==='redo')}
  if(s.circ){const P=[[450,330,'#d9541e','#111'],[600,330,'#a6c43c','#8a5a12'],[525,400,'#00a2e8','#1f4e9a']];
   P.forEach(([x,y,f,k])=>{if(s.circ==='oval')H.circ(x,y,34,f,k,7);else if(s.circ==='line')H.line(x-34,y+20,x+34,y-20,k,6);else this.pg(c,[[x,y-34],[x+34,y+28],[x-34,y+28]],null,k,6)});
   if(st===5)H.mark(525,365,105,s.circ==='oval')}
  if(st===6){H.text('ملصقي',210,195,26,'#15284b');H.text('⭐',530,205,40)}
 }});
