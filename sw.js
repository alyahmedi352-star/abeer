/* منصة أ. عبير — خدمة العمل دون إنترنت (الإصدار 4: حفظ تلقائي خفيف للطلبة) */
const C = 'abeer-v4';
const CORE = ['./', 'index.html', 'manifest.json', 'icon-192.png', 'icon-512.png', 'devices.js'];
const SKIP = /(firestore\.googleapis\.com|firebaseio\.com|firebasestorage|identitytoolkit|securetoken|googleapis\.com\/identity|google-analytics|googletagmanager|api\.github\.com)/;
self.addEventListener('install', e => { e.waitUntil(caches.open(C).then(c => Promise.all(CORE.map(u => c.add(u).catch(() => {})))).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
const clean = u => u.replace(/([?&])preview=1&?/, '$1').replace(/[?&]$/, '');
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET' || SKIP.test(r.url) || r.headers.has('range') || /\.mp4(\?|$)/i.test(r.url)) return;
  const page = r.mode === 'navigate';
  if (page) { // الصفحات: الإنترنت أولًا، ثم النسخة المحفوظة
    e.respondWith(fetch(r).then(res => { if (res.ok) { const cp = res.clone(); caches.open(C).then(c => c.put(clean(r.url), cp)); } return res; })
      .catch(() => caches.match(clean(r.url), { ignoreSearch: true }).then(m => m || caches.match('./'))));
    return;
  }
  // ملفات البرمجة والبيانات (js/css/json/html): الإنترنت أولًا لتصل التحديثات فورًا
  const u = new URL(r.url);
  if (u.origin === location.origin && /\.(js|css|json|html?)$/i.test(u.pathname)) {
    e.respondWith(fetch(r).then(res => { if (res.ok) { const cp = res.clone(); caches.open(C).then(c => c.put(r, cp)); } return res; })
      .catch(() => caches.match(r, { ignoreSearch: true })));
    return;
  }
  // الملفات الثقيلة (صور، عروض، PDF، خطوط): المحفوظ أولًا مع تحديثه في الخلفية
  e.respondWith(caches.match(r).then(m => {
    const net = fetch(r).then(res => { if (res && (res.ok || res.type === 'opaque')) { const cp = res.clone(); caches.open(C).then(c => c.put(r, cp)); } return res; }).catch(() => m);
    return m || net;
  }));
});
self.addEventListener('message', e => {
  const d = e.data || {}; if (d.type !== 'abr-precache') return;
  const urls = d.urls || []; let ok = 0, fail = 0, i = 0;
  const silent = !!d.silent;
  const tell = msg => self.clients.matchAll().then(cl => cl.forEach(x => x.postMessage(Object.assign({ silent }, msg))));
  e.waitUntil(caches.open(C).then(c => {
    const worker = () => { if (i >= urls.length) return Promise.resolve(); const u = urls[i++];
      return (silent ? c.match(u).then(m => m ? (ok++, null) : fetch(u, { cache: 'no-cache' })) : fetch(u, { cache: 'no-cache' })).then(res => { if (!res) return; if (res.ok) { ok++; return c.put(u, res); } fail++; }).catch(() => { fail++; })
        .then(() => { if (!silent && (ok + fail) % 5 === 0) tell({ type: 'abr-precache-progress', done: ok + fail, total: urls.length }); return worker(); }); };
    return Promise.all(silent ? [worker(), worker()] : [worker(), worker(), worker(), worker()]);
  }).then(() => tell({ type: 'abr-precache-done', ok, fail, full: d.full })));
});
