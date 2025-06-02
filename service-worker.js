
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('fitnessapp-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/sign_up.html',
        '/tracker.html'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
