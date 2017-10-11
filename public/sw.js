/* eslint comma-dangle: "off" */

const assetsHash = 'xxxxxx';

const config = {
  caches: {
    'youprefer-statics-v5': [

      '/assets/css/reset.css',

      '/assets/html/ayyy.html',
      '/assets/html/share-buttons.html',

      '/assets/img/check_sign.png',
      '/assets/img/lighting_overlay.png',
      '/assets/img/question_circle.png',
      '/assets/img/question_mark_broken.png',

      `/main.bundle.${assetsHash}.js`,
      `/vendor.bundle.${assetsHash}.js`,

      '/index.html',
      '/',
    ],
  },

  indexPage: '/index.html',
};

self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all(
      Object.keys(config.caches).map(cacheName =>
        caches.open(cacheName).then((cache) => {
          cache.addAll(config.caches[cacheName]);
        })
      )
    )
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.filter(name => !Object.keys(config.caches).includes(name))
          .map(name => caches.delete(name))
      )
    )
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Send the index page when needed
  if (url.origin === location.origin && url.pathname === '/') {
    event.respondWith(caches.match(config.indexPage));
    return;
  }

  // For every request, try to pull
  // it from the cache, fallback to network
  event.respondWith(
    caches.match(event.request)
    .then(response => response || fetch(event.request))
    .catch(() => caches.match(config.indexPage))
  );
});