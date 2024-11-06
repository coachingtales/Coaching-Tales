// public/service-worker.js

const CACHE_NAME = "coaching-tales-cache-v1";
const urlsToCache = [
	"/",
	"/favicon.ico",
	"/manifest.json",
	"/football_192.png",
	"/football_512.png",
];

// Install event - caching resources
self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return cache.addAll(urlsToCache);
		}),
	);
});

// Activate event - cleaning up old caches
self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cache) => {
					if (cache !== CACHE_NAME) {
						return caches.delete(cache);
					}
				}),
			);
		}),
	);
});

// Fetch event - serving from cache if available
self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			return response || fetch(event.request);
		}),
	);
});
