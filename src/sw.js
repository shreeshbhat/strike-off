// change to the version you get from `npm ls workbox-build`
importScripts("workbox-v4.2.0/workbox-sw.js");

self.addEventListener('message', ({ data }) => {
  if (data === 'skipWaiting') {
    self.skipWaiting();
  }
});

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request).then(function(response) {
//       return response || fetch(event.request);
//     })
//   );
// });

// the precache manifest will be injected into the following line
self.workbox.precaching.precacheAndRoute([]);
