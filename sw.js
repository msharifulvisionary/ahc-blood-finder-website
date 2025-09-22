self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('ahc-blood-cache').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        'https://i.imgur.com/x8Go2ZI.png',
        'https://i.imgur.com/RocpY45.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
