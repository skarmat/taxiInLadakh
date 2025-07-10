// Service Worker for Ladakh Taxi Services
const CACHE_NAME = "ladakh-taxi-v1";
const urlsToCache = [
  "/",
  "/index-new.html",
  "/thank-you-new.html",
  "/script-new.js",
  "/dist/output.css",
  "/images/taxi1.jpg",
  "/images/taxi2.jpg",
  "/images/taxi3.jpg",
  "/images/taxi4.jpg",
  "/images/taxi5.jpg",
  "/images/taxi6.jpg",
  "/images/taxi7.jpg",
  "/images/taxi8.jpg",
  "/images/taxi9.jpg",
  "/images/taxi10.jpg",
  "/images/taxi11.jpg",
  "/images/taxi12.jpg",
];

// Install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached version or fetch from network
      return response || fetch(event.request);
    })
  );
});

// Activate event
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
