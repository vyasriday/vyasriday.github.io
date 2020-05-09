const staticCache = 'static-site-v1';
const assets = [
  '/',
  // '/index.html',
  '/scripts/script.js',
  '/style.css',
  '/favicon.ico',
  '/resources/images/header-img.jpg',
  '/resources/images/background-medium.jpg',
  'https://fonts.googleapis.com/css?family=PT+Sans:400,700',
];

// install sw
self.addEventListener('install', (event) => {
  // open cache, create if does not exist and add the items to cache
  event.waitUntil(
    caches.open(staticCache).then((cache) => {
      console.log('caching assets');
      cache.addAll(assets);
    })
  );
});

// activate sw
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== staticCache)
          .map((key) => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cacheResponse) => {
      return cacheResponse || fetch(event.request);
    })
  );
});
