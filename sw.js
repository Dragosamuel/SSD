const CACHE_NAME = 'busssa-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/styles-enhanced.css',
    '/assets/logo.png',
    // Add other important assets
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
}); 