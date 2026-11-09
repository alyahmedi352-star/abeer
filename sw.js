/* منصة أ. عبير — خدمة العمل دون إنترنت (الإصدار 3) */
const C = 'abeer-v3';
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
  // الملفات: المحفوظ أولًا مع تحديثه في الخلفية
  e.respondWith(caches.match(r).then(m => {
    const net = fetch(r).then(res => { if (res && (res.ok || res.type === 'opaque')) { const cp = res.clone(); caches.open(C).then(c => c.put(r, cp)); } return res; }).catch(() => m);
    return m || net;
  }));
});
self.addEventListener('message', e => {
  const d = e.data || {}; if (d.type !== 'abr-precache') return;
  const urls = d.urls || []; let ok = 0, fail = 0, i = 0;
  const tell = msg => self.clients.matchAll().then(cl => cl.forEach(x => x.postMessage(msg)));
  e.waitUntil(caches.open(C).then(c => {
    const worker = () => { if (i >= urls.length) return Promise.resolve(); const u = urls[i++];
      return fetch(u, { cache: 'no-cache' }).then(res => { if (res.ok) { ok++; return c.put(u, res); } fail++; }).catch(() => { fail++; })
        .then(() => { if ((ok + fail) % 5 === 0) tell({ type: 'abr-precache-progress', done: ok + fail, total: urls.length }); return worker(); }); };
    return Promise.all([worker(), worker(), worker(), worker()]);
  }).then(() => tell({ type: 'abr-precache-done', ok, fail, full: d.full })));
});
