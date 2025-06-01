
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('fitnessapp-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/FitnessApp_Login_Linked_SignUp.html',
        '/FitnessApp_SignUp_Linked_Login.html',
        '/Running_and_Workout_Tracker_Reverted_to_Final_Spacing.html'
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
