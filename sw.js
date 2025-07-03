const CACHE_NAME = 'superb-visitor-cache-v1';
const toCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/superb-logo.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(toCache))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});



