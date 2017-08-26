const cacheId = 'barcamp2017';
const precacheFiles = [
  // Fallback pages:
  'offline.html',
  '404.html',

  // Important assets:
  '/barcamp2017/css/app.css',
  '/barcamp2017/js/app.js',
  'sw-register.js'
];

const precache = () => {};
const getFromServer = (request) => {};
const getFallbackFile = (matching) => {};
const getFromCache = (request) => {};
const addToCache = (request) => {};

// Set up the offline/404 pages (& primary assets) in the cache and open a new cache
self.addEventListener('install', (event) => {
  event.waitUntil(precache());
});

self.addEventListener('fetch', (event) => {
  // Network first: try getFromServer(), and if it fails getFromCache()
  event.respondWith(
    getFromServer(event.request)
    .catch(() => {
      return getFromCache(event.request);
    })
  );

  event.waitUntil(addToCache(event.request));
});
