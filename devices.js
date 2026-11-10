/* منصة أ. عبير اليحمدية — خيارات العرض على الأجهزة + العمل دون إنترنت (المرحلة الأولى) */
(function () {
  'use strict';
  var IN_PREVIEW = /[?&]preview=1/.test(location.search) || window.self !== window.top;
  var LS = { get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };
  var BRAND = 'var(--brand,#173F55)', GOLD = 'var(--gold,#D9A64E)';

  if (!document.querySelector('meta[name="viewport"]')) { var vp = document.createElement('meta'); vp.name = 'viewport'; vp.content = 'width=device-width, initial-scale=1, viewport-fit=cover'; document.head.appendChild(vp); }
  if (!document.querySelector('link[rel="manifest"]')) { var mf = document.createElement('link'); mf.rel = 'manifest'; mf.href = 'manifest.json'; document.head.appendChild(mf); }

  var css = '' +
    'html.abr-class{zoom:1.15}' +
    '#abr-fab{position:fixed;left:16px;bottom:calc(112px + env(safe-area-inset-bottom,0px));z-index:30;width:50px;height:50px;border-radius:50%;border:0;background:' + BRAND + ';color:#fff;font-size:22px;box-shadow:0 6px 18px rgba(0,0,0,.28);cursor:pointer}' +
    '#abr-shade{position:fixed;inset:0;background:rgba(15,44,60,.55);z-index:2147483000;display:none;align-items:center;justify-content:center;padding:16px}' +
    '#abr-shade.open{display:flex}' +
    '#abr-sheet{background:var(--paper,#fff);color:var(--text,#13324f);border-radius:22px;box-shadow:0 20px 50px rgba(0,0,0,.3);padding:18px;width:min(560px,100%);max-height:92vh;overflow:auto;font-family:inherit;direction:rtl}' +
    '#abr-sheet h3{margin:0 0 4px;font-size:1.25rem;color:' + BRAND + '}' +
    '#abr-sheet p.sub{margin:0 0 12px;color:var(--muted,#6b7c8f);font-size:.9rem}' +
    '#abr-sheet .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px}' +
    '#abr-sheet button.op{display:flex;flex-direction:column;align-items:center;gap:4px;border:2px solid transparent;background:var(--chip,#EEF4FA);border-radius:16px;padding:14px 8px;font:inherit;font-weight:800;color:inherit;cursor:pointer;text-align:center}' +
    '#abr-sheet button.op .ic{font-size:30px;line-height:1}' +
    '#abr-sheet button.op small{font-weight:500;color:var(--muted,#6b7c8f);font-size:.78rem}' +
    '#abr-sheet button.op:hover{border-color:' + GOLD + '}' +
    '#abr-sheet button.op.on{background:' + BRAND + ';color:#fff}#abr-sheet button.op.on small{color:#d7e6f2}' +
    '#abr-sheet h4{margin:16px 0 8px;font-size:1rem;color:' + BRAND + '}' +
    '#abr-sheet .x{float:left;border:0;background:var(--chip,#EEF4FA);border-radius:50%;width:36px;height:36px;font-size:18px;cursor:pointer;color:inherit}' +
    '#abr-sheet .stat{margin-top:12px;font-size:.85rem;color:var(--muted,#6b7c8f);text-align:center}' +
    '#abr-prev{position:fixed;inset:0;z-index:2147483001;background:rgba(10,25,45,.85);display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:inherit}' +
    '#abr-prev .bar{position:relative;z-index:2;color:#fff;margin-bottom:12px;display:flex;gap:10px;align-items:center;font-weight:700;flex-wrap:wrap;justify-content:center}' +
    '#abr-prev .bar button{border:0;border-radius:20px;padding:6px 16px;font:inherit;font-weight:800;cursor:pointer;background:#fff;color:#173F55}' +
    '#abr-prev .bar button.rot{background:' + GOLD + ';color:#2A1C05}' +
    '#abr-prev .box{position:relative;flex:none}' +
    '#abr-prev .dev{position:absolute;top:0;left:0;background:#111;border-radius:38px;padding:14px;box-shadow:0 20px 60px rgba(0,0,0,.5);transform-origin:0 0}' +
    '#abr-prev .dev.lap{border-radius:14px 14px 4px 4px;padding:12px 12px 26px}' +
    '#abr-prev iframe{border:0;border-radius:24px;background:#fff;display:block;max-width:none!important}' +
    '#abr-prev .dev.lap iframe{border-radius:4px}' +
    '#abr-toast{position:fixed;left:50%;top:calc(16px + env(safe-area-inset-top,0px));transform:translateX(-50%);background:' + BRAND + ';color:#fff;padding:12px 20px;border-radius:14px;z-index:2147483002;font-weight:800;box-shadow:0 6px 18px rgba(0,0,0,.3);display:none;max-width:92vw;text-align:center;font-family:inherit}' +
    '.sidenav a.sn#abr-sn{cursor:pointer}body:not(.staff) #abr-sn,body:not(.staff) #abr-td,body:not(.staff) #abr-rp,body:not(.staff) #abr-fab{display:none!important}' +
    '@media print{#abr-fab{display:none}}';
  var st = document.createElement('style'); st.id = 'abr-style'; st.textContent = css; document.head.appendChild(st);
  if (LS.get('abr-class') === '1' && !IN_PREVIEW) document.documentElement.classList.add('abr-class');

  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    navigator.serviceWorker.register('sw.js').catch(function () {});
  }
  var deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); deferredPrompt = e; });
  if (IN_PREVIEW) return;

  function toast(msg, ms) {
    var t = document.getElementById('abr-toast');
    if (!t) { t = document.createElement('div'); t.id = 'abr-toast'; document.body.appendChild(t); }
    t.textContent = msg; t.style.display = 'block'; clearTimeout(t._h); if (ms !== 0) t._h = setTimeout(function () { t.style.display = 'none'; }, ms || 3500);
  }

  /* ---------- معاينة الأجهزة ---------- */
  var DEV = { phone: { w: 390, h: 844, name: 'هاتف', cls: '' }, tablet: { w: 820, h: 1180, name: 'آيباد', cls: '' }, laptop: { w: 1366, h: 768, name: 'لابتوب', cls: 'lap' } };
  function preview(kind, landscape) {
    closePreview(); closeSheet();
    var d = DEV[kind]; var w = landscape ? d.h : d.w, h = landscape ? d.w : d.h;
    var wrap = document.createElement('div'); wrap.id = 'abr-prev';
    var bar = document.createElement('div'); bar.className = 'bar';
    bar.innerHTML = '<span>معاينة: ' + d.name + ' (' + w + '×' + h + ')</span>';
    if (kind !== 'laptop') { var r = document.createElement('button'); r.className = 'rot'; r.textContent = landscape ? 'وضع عمودي' : 'وضع أفقي'; r.onclick = function () { preview(kind, !landscape); }; bar.appendChild(r); }
    var c = document.createElement('button'); c.textContent = 'إغلاق ✕'; c.onclick = closePreview; bar.appendChild(c);
    var box = document.createElement('div'); box.className = 'box';
    var dev = document.createElement('div'); dev.className = 'dev ' + d.cls;
    var fr = document.createElement('iframe'); fr.width = w; fr.height = h; fr.style.width = w + 'px'; fr.style.height = h + 'px';
    var u = location.href.split('#')[0]; fr.src = u + (u.indexOf('?') > -1 ? '&' : '?') + 'preview=1' + (location.hash || '');
    dev.appendChild(fr); box.appendChild(dev); wrap.appendChild(bar); wrap.appendChild(box); document.body.appendChild(wrap);
    function fit() { var dw = dev.offsetWidth, dh = dev.offsetHeight; var sc = Math.min((window.innerWidth - 32) / dw, (window.innerHeight - 90) / dh, 1);
      dev.style.transform = 'scale(' + sc + ')'; box.style.width = (dw * sc) + 'px'; box.style.height = (dh * sc) + 'px'; }
    fit(); window.addEventListener('resize', fit); wrap._fit = fit;
    wrap.addEventListener('click', function (e) { if (e.target === wrap) closePreview(); });
  }
  function closePreview() { var p = document.getElementById('abr-prev'); if (p) { window.removeEventListener('resize', p._fit); p.remove(); } }

  /* ---------- شاشة الفصل ---------- */
  function classroom(on) {
    document.documentElement.classList.toggle('abr-class', on); LS.set('abr-class', on ? '1' : '0');
    if (on && document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(function () {});
    if (!on && document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(function () {});
    toast(on ? 'وضع شاشة الفصل: خط أكبر وملء الشاشة' : 'عدنا إلى العرض العادي');
  }

  /* ---------- التثبيت كتطبيق ---------- */
  function install() {
    if (window.matchMedia('(display-mode: standalone)').matches) { toast('المنصة مثبّتة بالفعل كتطبيق ✓'); return; }
    if (deferredPrompt) { deferredPrompt.prompt(); deferredPrompt.userChoice.finally(function () { deferredPrompt = null; }); return; }
    var ios = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    if (ios) toast('في الآيباد/الآيفون: افتحي المنصة في Safari ← زر المشاركة ⬆ ← «إضافة إلى الشاشة الرئيسية»', 8000);
    else toast('من قائمة المتصفّح (⋮) اختاري «تثبيت التطبيق» أو «إضافة إلى الشاشة الرئيسية»', 7000);
  }

  /* ---------- الحفظ للعمل دون إنترنت ---------- */
  var HEAVY = /\.(pdf|pptx|ppsx|ppt|xlsx|xls|docx|doc|zip)$/i, SKIPF = /(\.mp4|\.mov|\.nojekyll|\.md|\.gitattributes)$/i;
  function base() { return location.href.split('#')[0].split('?')[0].replace(/[^\/]*$/, ''); }
  function listFiles() {
    var m = location.hostname.match(/^([^.]+)\.github\.io$/), repo = location.pathname.split('/')[1];
    var fromGit = (m && repo) ? fetch('https://api.github.com/repos/' + m[1] + '/' + repo + '/git/trees/HEAD?recursive=1').then(function (r) { if (!r.ok) throw 0; return r.json(); })
      .then(function (j) { return j.tree.filter(function (x) { return x.type === 'blob'; }).map(function (x) { return { p: x.path, s: x.size || 0 }; }); }) : Promise.reject();
    return fromGit.catch(function () { return fetch('offline-files.json', { cache: 'no-store' }).then(function (r) { return r.json(); }); });
  }
  function fmt(b) { return b > 1048576 ? (b / 1048576).toFixed(0) + ' م.ب' : Math.max(1, Math.round(b / 1024)) + ' ك.ب'; }
  function saveOffline(full) {
    closeSheet();
    if (!('serviceWorker' in navigator) || !navigator.serviceWorker.controller) {
      toast('افتحي المنصة من رابطها على الإنترنت، ثم أعيدي تحميل الصفحة مرة واحدة وجرّبي مجددًا', 7000); return;
    }
    if (!navigator.onLine) { toast('يجب أن يكون الإنترنت متّصلًا أثناء الحفظ'); return; }
    toast('جاري تجهيز قائمة الملفات…', 0);
    listFiles().then(function (files) {
      files = files.filter(function (f) { return !SKIPF.test(f.p) && (full || !HEAVY.test(f.p)); });
      var total = files.reduce(function (a, f) { return a + (f.s || 0); }, 0);
      var b = base(); var urls = files.map(function (f) { return b + f.p.split('/').map(encodeURIComponent).join('/'); });
      urls.unshift(b);
      toast('جاري حفظ ' + urls.length + ' ملفًّا (' + fmt(total) + ')… لا تغلقي الصفحة', 0);
      navigator.serviceWorker.controller.postMessage({ type: 'abr-precache', urls: urls, full: !!full });
    }).catch(function () { toast('تعذّر تجهيز القائمة، تأكّدي من الاتصال بالإنترنت وحاولي مجددًا', 6000); });
  }
  if ('serviceWorker' in navigator) navigator.serviceWorker.addEventListener('message', function (e) {
    var d = e.data || {};
    if (d.type === 'abr-precache-progress') toast('جاري الحفظ: ' + d.done + ' من ' + d.total + '…', 0);
    if (d.type === 'abr-precache-done') {
      var when = new Date().toLocaleDateString('ar-OM');
      LS.set('abr-offline', when + (d.full ? ' (كل الملفات)' : ' (الصفحات والصور)'));
      toast('تمّ ✓ حُفظ ' + d.ok + ' ملفًّا' + (d.fail ? ' (تعذّر ' + d.fail + ')' : '') + '. المنصة جاهزة للعمل في الفصل دون إنترنت', 7000);
    }
  });

  /* ---------- لوحة الخيارات ---------- */
  var shade;
  function closeSheet() { if (shade) shade.classList.remove('open'); }
  function openSheet() {
    if (!shade) {
      shade = document.createElement('div'); shade.id = 'abr-shade';
      shade.addEventListener('click', function (e) {
        if (e.target !== shade) return;
        closeSheet(); /* أغلق اللوحة ثم مرّر النقرة إلى ما تحتها (مثل بوابة المُلهِمات) */
        var under = document.elementFromPoint(e.clientX, e.clientY), t = under && under.closest('a,button');
        if (t) t.click();
      });
      document.body.appendChild(shade);
    }
    var cls = document.documentElement.classList.contains('abr-class'), off = LS.get('abr-offline');
    var inst = window.matchMedia('(display-mode: standalone)').matches;
    shade.innerHTML = '<div id="abr-sheet" role="dialog" aria-label="خيارات العرض"><button class="x" aria-label="إغلاق">✕</button>' +
      '<h3>خيارات العرض</h3><p class="sub">شاهدي المنصة على أي جهاز، أو جهّزيها للفصل.</p>' +
      '<h4>معاينة المنصة على الأجهزة</h4><div class="grid">' +
      op('phone', '📱', 'هاتف', '390 × 844') + op('tablet', '📲', 'آيباد', '820 × 1180') + op('laptop', '💻', 'لابتوب', '1366 × 768') + op('pc', '🖥️', 'الحاسوب', 'العرض العادي', !cls) + '</div>' +
      '<h4>في الفصل</h4><div class="grid">' +
      op('class', '🧑‍🏫', 'شاشة الفصل', cls ? 'مفعّل — انقري للإلغاء' : 'خط كبير وملء الشاشة', cls) +
      op('install', '⬇️', inst ? 'مثبّتة كتطبيق ✓' : 'تثبيت كتطبيق', 'أيقونة على الشاشة الرئيسية', inst) + '</div>' +
      '<h4>العمل دون إنترنت</h4><div class="grid">' +
      op('light', '📶', 'حفظ الصفحات والصور', 'خفيف — مناسب للهاتف') + op('full', '🗂️', 'حفظ كل الملفات والعروض', 'يشمل العروض وملفات PDF (حجم كبير)') + '</div>' +
      '<div class="stat">' + (off ? 'آخر حفظ: ' + off : 'لم يتم الحفظ بعد — احفظي مرة واحدة في البيت قبل الذهاب إلى الفصل') + ' • ' + (navigator.onLine ? '🟢 متّصل' : '🔴 دون إنترنت') + '</div></div>';
    shade.querySelector('.x').onclick = closeSheet;
    shade.querySelectorAll('button.op').forEach(function (b) { b.onclick = function () { act(b.getAttribute('data-k'), cls); }; });
    shade.classList.add('open');
  }
  function op(k, ic, t, sub, on) { return '<button class="op' + (on ? ' on' : '') + '" data-k="' + k + '"><span class="ic">' + ic + '</span><span>' + t + '</span><small>' + sub + '</small></button>'; }
  function act(k, cls) {
    if (k === 'phone' || k === 'tablet' || k === 'laptop') return preview(k);
    if (k === 'pc') { closeSheet(); closePreview(); if (cls) classroom(false); return; }
    if (k === 'class') { closeSheet(); return classroom(!cls); }
    if (k === 'install') { closeSheet(); return install(); }
    if (k === 'light') return saveOffline(false);
    if (k === 'full') return saveOffline(true);
  }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closePreview(); closeSheet(); } });
  window.abrOpenDisplay = openSheet;

  /* ---------- زر في القائمة الجانبية (أو زر عائم إن لم توجد) ---------- */
  var ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="14" height="10" rx="1.5"></rect><path d="M6 18h6"></path><rect x="17" y="8" width="5" height="12" rx="1"></rect></svg>';
  function injectNav() {
    var foot = document.querySelector('.sidenav .sn-foot');
    if (!foot || foot.querySelector('#abr-sn')) return !!foot;
    var a = document.createElement('a'); a.className = 'sn'; a.id = 'abr-sn'; a.href = '#'; a.title = 'خيارات العرض'; a.setAttribute('role', 'button');
    a.innerHTML = '<span class="si" style="--sc:#2F6FB3">' + ICON + '</span><span class="st">خيارات العرض</span>';
    a.addEventListener('click', function (e) { e.preventDefault(); document.body.classList.remove('sn-open'); openSheet(); });
    foot.insertBefore(a, foot.firstChild);
    var t = document.createElement('a'); t.className = 'sn'; t.id = 'abr-td'; t.href = 'tahdeer.html'; t.title = 'دفتر التحضير';
    t.innerHTML = '<span class="si" style="--sc:#2E8B57"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h12a2 2 0 0 1 2 2v14H6a2 2 0 0 1-2-2z"></path><path d="M8 8h6M8 12h6M8 16h4"></path><path d="M18 8h2v12"></path></svg></span><span class="st">دفتر التحضير</span>';
    foot.insertBefore(t, a);
    var r = document.createElement('a'); r.className = 'sn'; r.id = 'abr-rp'; r.href = 'taqrir.html'; r.title = 'التقرير الشهري';
    r.innerHTML = '<span class="si" style="--sc:#8E44AD"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"></path></svg></span><span class="st">التقرير الشهري</span>';
    foot.insertBefore(r, t); return true;
  }
  function boot() {
    var fab = null;
    function check() {
      var ok = injectNav();
      if (ok && fab) { fab.remove(); fab = null; }
      if (!ok && !fab && !document.querySelector('.sidenav')) {
        fab = document.createElement('button'); fab.id = 'abr-fab'; fab.title = 'خيارات العرض'; fab.setAttribute('aria-label', 'خيارات العرض'); fab.textContent = '📱';
        fab.onclick = openSheet; document.body.appendChild(fab);
      }
    }
    check();
    new MutationObserver(function () { injectNav(); }).observe(document.body, { childList: true, subtree: true });
    setTimeout(check, 1500);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  window.addEventListener('online', function () { toast('عاد الاتصال بالإنترنت ✓'); });
  window.addEventListener('offline', function () { toast('لا يوجد إنترنت — المنصة تعمل من النسخة المحفوظة'); });
})();
