importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

if (workbox) {
  console.log(`Workbox is loaded`);
} else {
  console.log(`Workbox didn't load`);
}

workbox.routing.registerRoute(
  '/',
  workbox.strategies.networkFirst()
)

workbox.routing.registerRoute(
  /\.(?:js|css|html)$/,
  workbox.strategies.networkFirst()
)

workbox.routing.registerRoute(
  new RegExp('https://5cfdeea0ca949b00148d39c9.mockapi.io/api'),
  workbox.strategies.staleWhileRevalidate()
)