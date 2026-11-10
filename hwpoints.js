/* منصة أ. عبير — ربط نتائج الواجبات والحصاد بنقاط لوحة المعلم تلقائيًّا */
(function () {
  'use strict';
  var CFG_DOC = 't_config/hwpoints', ALIAS_DOC = 't_config/hwalias';
  var C = { on: true, tiers: [[90, 3], [70, 2], [50, 1]], since: 0, last: 0, total: 0 }, ALIAS = {}, UNM = [], busy = false, started = false;
  function g(n) { try { if (n === 'T') return typeof T !== 'undefined' ? T : undefined; if (n === 'db') return typeof db !== 'undefined' ? db : undefined; if (n === 'toast') return typeof toast !== 'undefined' ? toast : undefined; } catch (e) {} return undefined; }
  var nrm = function (s) { return String(s || '').replace(/[\u064B-\u0652\u0640]/g, '').replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي').replace(/[^\u0600-\u06FFa-zA-Z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim(); };
  var digit = function (s) { var m = String(s || '').replace(/[٠-٩]/g, function (d) { return '٠١٢٣٤٥٦٧٨٩'.indexOf(d); }).match(/(\d)(?!.*\d)/); return m ? m[1] : ''; };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  function ptsFor(pct) { for (var i = 0; i < C.tiers.length; i++) if (pct >= C.tiers[i][0]) return C.tiers[i][1]; return 0; }
  function say(m) { var f = g('toast'); if (typeof f === 'function') f(m); else console.log(m); }

  function waitReady() {
    var T = g('T'), db = g('db');
    if (T && db && T.role === 'owner' && T.classes && T.classes.length) { if (!started) { started = true; boot(); } }
    else setTimeout(waitReady, 1500);
  }
  function boot() {
    var db = g('db');
    Promise.all([db.doc(CFG_DOC).get(), db.doc(ALIAS_DOC).get()]).then(function (r) {
      if (r[0].exists) C = Object.assign(C, r[0].data()); else { C.since = 0; C.first = true; }
      ALIAS = r[1].exists ? (r[1].data().map || {}) : {};
      injectBtn();
      if (C.first) openPanel(); else if (C.on) sync(true);
    }).catch(function (e) { console.warn('hwpoints', e); });
  }

  /* مطابقة نتيجة واجب بطالب في اللوحة */
  function match(r, studs, classes) {
    var key = nrm(r.name) + '|' + (r.grade || '');
    if (ALIAS[key]) return studs.find(function (s) { return s.id === ALIAS[key]; }) || null;
    var gcls = classes.filter(function (c) { return c.grade === r.grade; }).map(function (c) { return c.id; });
    var pool = studs.filter(function (s) { return gcls.indexOf(s.classId) > -1; });
    var n = nrm(r.name); if (!n) return null;
    var hit = pool.filter(function (s) { return nrm(s.name) === n; });
    if (!hit.length) { var p = n.split(' '); if (p.length >= 2) hit = pool.filter(function (s) { var q = nrm(s.name).split(' '); return q[0] === p[0] && q[1] === p[1]; }); }
    if (hit.length > 1) { var d = digit(r.cls); if (d) { var h2 = hit.filter(function (s) { var c = classes.find(function (x) { return x.id === s.classId; }); return c && digit(c.name) === d; }); if (h2.length) hit = h2; } }
    return hit.length === 1 ? hit[0] : null;
  }

  function sync(silent) {
    if (busy) return; busy = true;
    var db = g('db'), T = g('T'), today = new Date().toLocaleDateString('en-CA');
    Promise.all([db.collection('results').get(), db.collection('t_students').get(), db.collection('t_points').where('src', '==', 'hw').get()]).then(function (q) {
      var res = q[0].docs.map(function (d) { return Object.assign({ id: d.id }, d.data()); })
        .filter(function (r) { return r.gid !== 'staff' && r.gid !== 'tch' && (r.at || 0) >= (C.since || 0) && r.name && r.grade; })
        .sort(function (a, b) { return (a.at || 0) - (b.at || 0); });
      var studs = q[1].docs.map(function (d) { return Object.assign({ id: d.id }, d.data()); }).filter(function (s) { return !s.removed; });
      var done = {}; q[2].docs.forEach(function (d) { done[d.id] = 1; });
      var ops = [], add = 0, unm = {};
      res.forEach(function (r) {
        var s = match(r, studs, T.classes);
        if (!s) { var k = nrm(r.name) + '|' + r.grade; (unm[k] = unm[k] || { name: r.name, cls: r.cls, grade: r.grade, n: 0, titles: [] }); unm[k].n++; if (unm[k].titles.length < 3) unm[k].titles.push(r.title); return; }
        var id = 'hw_' + s.id + '_' + String(r.key || r.title || r.id).replace(/[\/\s]+/g, '_').slice(0, 80);
        if (done[id]) return; done[id] = 1;
        var d = ptsFor(+r.pct || 0); if (!d) return;
        ops.push([id, { studentId: s.id, classId: s.classId, delta: d, reason: r.type === 'حصاد' ? 'حصاد الوحدة' : 'واجب المنصة', at: Date.now(), date: r.at ? new Date(r.at).toLocaleDateString('en-CA') : today, src: 'hw', resultId: r.id, title: r.title || '', pct: +r.pct || 0 }, s.id, d]);
        add += d;
      });
      UNM = Object.keys(unm).map(function (k) { return Object.assign({ k: k }, unm[k]); });
      var chain = Promise.resolve();
      for (var i = 0; i < ops.length; i += 200) (function (part) {
        chain = chain.then(function () { var b = db.batch(); part.forEach(function (o) { b.set(db.doc('t_points/' + o[0]), o[1]); b.update(db.doc('t_students/' + o[2]), { pts: firebase.firestore.FieldValue.increment(o[3]) }); }); return b.commit(); });
      })(ops.slice(i, i + 200));
      return chain.then(function () {
        C.last = Date.now(); C.total = (C.total || 0) + add;
        return db.doc(CFG_DOC).set({ on: C.on, tiers: C.tiers, since: C.since || 0, last: C.last, total: C.total }, { merge: true });
      }).then(function () {
        busy = false; badge();
        if (ops.length) say('🔗 أُضيفت ' + add + ' نقطة من واجبات المنصة لـ ' + ops.length + ' نتيجة');
        else if (!silent) say('لا توجد نتائج جديدة لإضافتها');
        if (document.getElementById('hwp-shade')) openPanel();
      });
    }).catch(function (e) { busy = false; console.warn(e); say('تعذّرت مزامنة نقاط الواجبات'); });
  }

  /* زر في شريط التبويبات + لوحة الإعدادات */
  var css = '#hwp-btn{position:fixed;left:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:40;border:0;border-radius:24px;padding:10px 16px;background:#173F55;color:#fff;font:inherit;font-weight:800;box-shadow:0 6px 18px rgba(0,0,0,.25);cursor:pointer}#hwp-btn b{background:#D9A64E;color:#2A1C05;border-radius:12px;padding:0 7px;margin-right:6px}' +
    '#hwp-shade{position:fixed;inset:0;background:rgba(15,44,60,.55);z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:14px}' +
    '#hwp{background:#fff;border-radius:20px;padding:18px;width:min(640px,100%);max-height:92vh;overflow:auto;direction:rtl;font-family:inherit;color:#13324f}' +
    '#hwp h3{margin:0 0 6px;color:#173F55}#hwp h4{margin:14px 0 6px;color:#1F5A78}#hwp .x{float:left;border:0;background:#EEF3F7;border-radius:50%;width:34px;height:34px;cursor:pointer;font-size:16px}' +
    '#hwp .tr{display:flex;gap:8px;flex-wrap:wrap}#hwp .tr label{background:#EEF3F7;border-radius:12px;padding:6px 10px;font-weight:700}#hwp input[type=number]{width:58px;font:inherit;border:1px solid #cdd8e1;border-radius:8px;padding:2px 6px}' +
    '#hwp .b{border:0;border-radius:12px;padding:9px 14px;font:inherit;font-weight:800;cursor:pointer;background:#173F55;color:#fff}#hwp .b.g{background:#D9A64E;color:#2A1C05}#hwp .b.s{background:#EEF3F7;color:#173F55}' +
    '#hwp table{width:100%;border-collapse:collapse;font-size:.88rem}#hwp td,#hwp th{border:1px solid #dfe7ee;padding:5px;text-align:center}#hwp th{background:#173F55;color:#fff}#hwp select{font:inherit;max-width:180px}' +
    '#hwp .note{color:#5f7387;font-size:.85rem}#hwp .ok{background:#E4F4EA;border-radius:12px;padding:8px 12px;font-weight:700;color:#1E5A36}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  function injectBtn() {
    if (document.getElementById('hwp-btn')) return;
    var b = document.createElement('button'); b.id = 'hwp-btn'; b.onclick = openPanel; document.body.appendChild(b); badge();
  }
  function badge() { var b = document.getElementById('hwp-btn'); if (b) b.innerHTML = '🔗 نقاط الواجبات' + (UNM.length ? '<b>' + UNM.length + '</b>' : ''); }
  function close() { var s = document.getElementById('hwp-shade'); if (s) s.remove(); }
  function openPanel() {
    close(); var T = g('T');
    var studs = (g('T').allStudents) || null;
    var sh = document.createElement('div'); sh.id = 'hwp-shade'; sh.onclick = function (e) { if (e.target === sh) close(); };
    var h = '<div id="hwp"><button class="x" aria-label="إغلاق">✕</button><h3>🔗 ربط الواجبات بنقاط اللوحة</h3>' +
      '<p class="note" style="margin:0">عندما يحلّ الطالب واجبًا أو حصادًا في المنصة باسمه، تُضاف له نقاط هنا تلقائيًّا عند فتح اللوحة. كل واجب يُحتسب مرة واحدة فقط لكل طالب (أول محاولة).</p>';
    if (C.first) {
      h += '<h4>التفعيل لأول مرة</h4><p>هل تريدين احتساب الواجبات التي حُلّت سابقًا أيضًا؟</p><div class="tr"><button class="b g" data-a="all">نعم، كل الواجبات السابقة</button><button class="b s" data-a="month">من بداية هذا الشهر</button><button class="b s" data-a="now">من الآن فصاعدًا فقط</button></div>';
    } else {
      h += '<div class="ok" style="margin-top:10px">' + (C.on ? '✅ الربط مفعّل' : '⏸️ الربط متوقف') + ' • مجموع النقاط المضافة: ' + (C.total || 0) + (C.last ? ' • آخر مزامنة: ' + new Date(C.last).toLocaleString('ar-OM', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : '') + '</div>';
    }
    h += '<h4>النقاط حسب النتيجة</h4><div class="tr">' + C.tiers.map(function (t, i) { return '<label>' + t[0] + '% فأكثر ← <input type="number" min="0" max="10" data-t="' + i + '" value="' + t[1] + '"> نقطة</label>'; }).join('') + '</div><p class="note">أقل من ' + C.tiers[C.tiers.length - 1][0] + '%: لا نقاط.</p>';
    if (!C.first) h += '<div class="tr" style="margin-top:6px"><button class="b" data-a="sync">🔄 مزامنة الآن</button><button class="b s" data-a="save">💾 حفظ الإعدادات</button><button class="b s" data-a="toggle">' + (C.on ? '⏸️ إيقاف الربط' : '▶️ تفعيل الربط') + '</button></div>';
    if (UNM.length) {
      var cls = T.classes;
      h += '<h4>⚠️ أسماء لم تتطابق مع طلاب اللوحة (' + UNM.length + ')</h4><p class="note">اختاري الطالب الصحيح مرة واحدة، فتُحتسب نتائجه الآن وكل مرة قادمة.</p><table><tr><th>الاسم كما كتبه</th><th>الصف</th><th>النتائج</th><th>هو الطالب</th></tr>' +
        UNM.slice(0, 60).map(function (u, i) { return '<tr><td>' + esc(u.name) + (u.cls ? ' <small>(' + esc(u.cls) + ')</small>' : '') + '</td><td>' + esc(u.grade) + '</td><td>' + u.n + '</td><td><select data-u="' + i + '"><option value="">— اختاري —</option></select></td></tr>'; }).join('') + '</table>' +
        '<div class="tr" style="margin-top:8px"><button class="b g" data-a="alias">✔️ حفظ المطابقة واحتساب النقاط</button></div>';
    }
    h += '</div>'; sh.innerHTML = h; document.body.appendChild(sh);
    sh.querySelector('.x').onclick = close;
    if (UNM.length) fillSelects(sh);
    sh.querySelectorAll('[data-a]').forEach(function (b) { b.onclick = function () { act(b.getAttribute('data-a'), sh); }; });
  }
  function fillSelects(sh) {
    var db = g('db'), T = g('T');
    db.collection('t_students').get().then(function (q) {
      var studs = q.docs.map(function (d) { return Object.assign({ id: d.id }, d.data()); }).filter(function (s) { return !s.removed; });
      sh.querySelectorAll('select[data-u]').forEach(function (sel) {
        var u = UNM[+sel.getAttribute('data-u')]; var cl = T.classes.filter(function (c) { return c.grade === u.grade; });
        cl.forEach(function (c) { var og = document.createElement('optgroup'); og.label = c.name; studs.filter(function (s) { return s.classId === c.id; }).sort(function (a, b) { return a.name.localeCompare(b.name, 'ar'); }).forEach(function (s) { var o = document.createElement('option'); o.value = s.id; o.textContent = s.name; og.appendChild(o); }); sel.appendChild(og); });
      });
    });
  }
  function readTiers(sh) { sh.querySelectorAll('input[data-t]').forEach(function (i) { C.tiers[+i.getAttribute('data-t')][1] = Math.max(0, Math.min(10, +i.value || 0)); }); }
  function act(a, sh) {
    var db = g('db');
    if (a === 'all' || a === 'month' || a === 'now') {
      readTiers(sh); var n = new Date();
      C.since = a === 'all' ? 0 : a === 'month' ? new Date(n.getFullYear(), n.getMonth(), 1).getTime() : Date.now();
      C.first = false; C.on = true;
      db.doc(CFG_DOC).set({ on: true, tiers: C.tiers, since: C.since, last: 0, total: 0 }).then(function () { say('تم التفعيل ✓ جارٍ الاحتساب…'); sync(false); });
      return;
    }
    if (a === 'sync') { readTiers(sh); return sync(false); }
    if (a === 'save') { readTiers(sh); db.doc(CFG_DOC).set({ tiers: C.tiers }, { merge: true }).then(function () { say('حُفظت الإعدادات ✓'); }); return; }
    if (a === 'toggle') { C.on = !C.on; db.doc(CFG_DOC).set({ on: C.on }, { merge: true }).then(function () { openPanel(); }); return; }
    if (a === 'alias') {
      var n = 0; sh.querySelectorAll('select[data-u]').forEach(function (sel) { if (sel.value) { ALIAS[UNM[+sel.getAttribute('data-u')].k] = sel.value; n++; } });
      if (!n) return say('اختاري طالبًا واحدًا على الأقل');
      db.doc(ALIAS_DOC).set({ map: ALIAS }).then(function () { say('حُفظت المطابقة ✓'); sync(false); });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', waitReady); else waitReady();
})();
