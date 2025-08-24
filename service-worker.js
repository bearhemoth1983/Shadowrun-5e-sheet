self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("sr5e-cache").then((cache) => {
      return cache.addAll(["/shadowrun-5e-sheet/index.html", "/shadowrun-5e-sheet/main.js"]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
