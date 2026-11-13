/* الدرس 2.4 — دمج الأشكال */
STORY2({lesson:'الصف الأول · الدرس ٢.٤', topic:'دمج الأشكال', file:'shams-maryam', back:'https://alyahmedi352-star.github.io/abeer/',
 title:'شمسُ مريم المشرقة',
 intro:'استيقظت مريم على صباحٍ مشمس وقالت: «هيّا نرسم شمسًا!» قال سالم: «سنصنعها من دائرة وخطوط… أي ندمج الأشكال».',
 pages:[
  {title:'قرص الشمس', text:'قالت مريم: «الشمس مستديرة. نختار الشكل المناسب، ثم ننقر ونسحب ونُفلت».', q:'اختر الشكل الذي نرسم به قرص الشمس.',
   groups:[{key:'disc',need:'oval',options:[['oval','◯ الشكل البيضاوي','أحسنت! ظهرت دائرة الشمس.'],['rect','▭ المستطيل','ظهر مستطيل! الشمس مستديرة. جرّب غيره.'],['tri','△ المثلث','ظهر مثلث! الشمس مستديرة. جرّب غيره.']]}]},
  {title:'حدود برتقالية سميكة', text:'قال سالم: «لنجعل حدود الشمس برتقالية… وسميكة حتى تظهر جيدًا».', q:'اختر لون الحدود، ثم اختر حجم الخط من زرّ (Size).',
   groups:[{key:'col',need:'orange',options:[['orange','🟠 برتقالي','أحسنت! صارت الحدود برتقالية. والآن اختر الحجم.'],['blue','🔵 أزرق','صارت الحدود زرقاء! نريدها برتقالية.']]},
           {key:'size',need:'thick',options:[['thick','━ أسمك خط','رائع! صارت الحدود سميكة وواضحة.'],['thin','─ خط رفيع','الخط رفيع جدًّا ولا يكاد يظهر. نريده سميكًا.']]}]},
  {title:'شمسٌ صفراء', text:'اختارت مريم اللون الأصفر، وأرادت أن تملأ قرص الشمس به.', q:'اختر الأداة المناسبة.',
   groups:[{key:'fill',need:'bucket',options:[['bucket','🪣 أداة التعبئة','رائع! امتلأت الشمس بالأصفر الدافئ.'],['line','╲ الخط','الخط يرسم خطًّا واحدًا ولا يملأ الدائرة. جرّب غيره.'],['eraser','🧽 الممحاة','الممحاة تمسح ولا تملأ. جرّب غيرها.']]}]},
  {title:'أشعّة الشمس', text:'قال سالم: «الشمس تحتاج أشعّة! نرسم حولها خطوطًا برتقالية».', q:'اختر الأداة التي نرسم بها الأشعّة.',
   groups:[{key:'rays',need:'line',options:[['line','╲ الخط','أحسنت! نقر سالم وسحب مرّات كثيرة، فأشرقت الأشعّة حول الشمس.'],['oval','◯ الشكل البيضاوي','ظهرت دوائر صغيرة بدل الأشعّة! جرّب غيره.'],['bucket','🪣 أداة التعبئة','امتلأت اللوحة كلّها بالأصفر! الأشعّة خطوط. جرّب غيرها.']]}]},
  {title:'سماءٌ زرقاء', text:'قالت مريم: «الخلفية البيضاء لا تشبه السماء. سألوّنها بالأزرق الفاتح».', q:'كيف تلوّن مريم الخلفية؟',
   groups:[{key:'bg',need:'bucket',options:[['bucket','🪣 التعبئة بالنقر على الخلفية','أحسنت! صارت السماء زرقاء والشمس تلمع فيها.'],['rect','▭ مستطيل أزرق كبير','غطّى المستطيل الشمس! نريد تلوين الخلفية فقط. جرّب غيره.'],['eraser','🧽 الممحاة','الممحاة لا تلوّن الخلفية. جرّب غيرها.']]}]}
 ],
 end:{title:'صباحٌ جميل في لوحة مريم', text:'دمجت مريم دائرةً وخطوطًا فصنعت شمسًا، وغيّرت لون الحدود وحجمها، ولوّنت الخلفية، ثم أضافت بيتًا وسحابة. وقال سالم: «احفظي عملك دائمًا!»'},
 win(c,H,t,cb){H.bg('#e9f1f8','#f7efe3');H.rect(36,18,648,444,'#f3f6fa',14,'#9aa6b2',2);H.rect(37,19,646,32,'#dfe8f3',13);H.text(t,360,36,15,'#3c4f63');
  ['#000','#7f7f7f','#880015','#ed1c24','#ff7f27','#fff200','#22b14c','#00a2e8','#3f48cc','#a349a4'].forEach((k,i)=>H.rect(472+i*19,64,15,15,k,2,'#c5ccd4',1));
  H.rect(262,62,16,12,null,0,'#3f6fb5',2);this.el(c,300,68,9,6,null,'#3f6fb5',2);this.pg(c,[[322,75],[331,61],[340,75]],null,'#3f6fb5',2);H.line(352,74,366,62,'#3f6fb5',2);
  H.emoji('✏️',70,70,18);H.emoji('🪣',98,70,18);H.emoji('🧽',126,70,18);H.emoji('🖌️',190,70,22);
  H.rect(52,92,616,352,cb||'#fff',4,'#c9d3de',2)},
 pg(c,p,f,s,w=5){c.beginPath();p.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();if(f){c.fillStyle=f;c.fill()}if(s){c.lineJoin='round';c.lineWidth=w;c.strokeStyle=s;c.stroke()}},
 el(c,x,y,rx,ry,f,s,w=5){c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);if(f){c.fillStyle=f;c.fill()}if(s){c.lineWidth=w;c.strokeStyle=s;c.stroke()}},
 paint(c,s,st,H){
  const sky=s.bg==='bucket'?'#99d9ea':s.rays==='bucket'&&st===4?'#fff200':'#fff';
  this.win(c,H,'Untitled - Paint',sky);
  const X=470,Y=230,R=62,col={orange:'#ff7f27',blue:'#2f6fd6'}[s.col]||'#111',w={thick:10,thin:2}[s.size]||3,f=s.fill==='bucket'?'#fff200':null;
  if(s.rays==='line')for(let i=0;i<16;i++){const a=i*Math.PI/8,r2=i%2?R+38:R+56;H.line(X+(R+12)*Math.cos(a),Y+(R+12)*Math.sin(a),X+r2*Math.cos(a),Y+r2*Math.sin(a),'#ff7f27',7)}
  else if(s.rays==='oval')for(let i=0;i<8;i++){const a=i*Math.PI/4;H.circ(X+(R+30)*Math.cos(a),Y+(R+30)*Math.sin(a),10,null,'#ff7f27',4)}
  if(s.disc==='oval')H.circ(X,Y,R,f,col,w);else if(s.disc==='rect')H.rect(X-R,Y-R*.7,R*2,R*1.4,f,0,col,w);else if(s.disc==='tri')this.pg(c,[[X,Y-R],[X+R,Y+R*.8],[X-R,Y+R*.8]],f,col,w);
  if(s.fill==='line')H.line(X-30,Y,X+30,Y,'#fff200',6);
  if(st===3&&s.fill==='eraser')H.bubble('الممحاة لا تلوّن!',X,120,20);
  if(st===1&&s.disc)H.mark(X,Y,R+18,s.disc==='oval');if(st===2&&(s.col||s.size))H.mark(X,Y,R+18,s.col==='orange'&&s.size==='thick');
  if(st===3&&s.fill)H.mark(X,Y,R+18,s.fill==='bucket');if(st===4&&s.rays)H.mark(X,Y,R+66,s.rays==='line');
  if(s.bg==='rect')H.rect(330,110,320,300,'#2f6fd6',4);if(st===5&&s.bg==='eraser')H.bubble('الممحاة لا تلوّن!',360,140,20);
  if(st===5&&s.bg)H.mark(s.bg==='rect'?490:200,s.bg==='rect'?260:300,s.bg==='rect'?150:60,s.bg==='bucket');
  if(st===6){H.circ(140,150,24,'#fff');H.circ(170,140,30,'#fff');H.circ(200,152,22,'#fff');H.rect(118,150,104,24,'#fff',10);
   H.rect(130,320,130,110,'#e8cfa5',0,'#a8743f',3);this.pg(c,[[115,322],[195,250],[275,322]],'#8a1c1c');H.rect(145,345,30,26,'#e9f5e6',0,'#a8743f',3);H.rect(215,345,30,26,'#e9f5e6',0,'#a8743f',3);H.rect(180,380,30,50,'#e8574b')}
 }});
