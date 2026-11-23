// Coverly: service worker (работа без интернета). Только собственные файлы приложения.
const CACHE = 'coverly-v1';
const SHELL = ['./', 'index.html', 'ads-config.js', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL).catch(() => {})).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (u.origin !== location.origin) return;            // реклама, iTunes, LRCLIB и т. п. не кэшируем
  // сначала сеть (всегда свежая версия), без сети берём из кэша
  e.respondWith(
    fetch(r).then(res => {
      if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(r, copy)); }
      return res;
    }).catch(() => caches.match(r).then(hit => hit || caches.match('index.html')))
  );
});
