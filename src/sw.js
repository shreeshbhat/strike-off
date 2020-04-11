// change to the version you get from `npm ls workbox-build`
importScripts('workbox-v4.3.1/workbox-sw.js');

self.addEventListener('message', ({ data }) => {
  if (data === 'skipWaiting') {
    self.skipWaiting();
  }
});

// the precache manifest will be injected into the following line
self.workbox.precaching.precacheAndRoute([]);
