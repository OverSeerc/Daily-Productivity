self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("dayframe-cache").then(cache =>
      cache.addAll([
        "./",
        "./index.html",
        "./css/main.css",
        "./js/app.js"
      ])
    )
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response =>
      response || fetch(e.request)
    )
  );
});
