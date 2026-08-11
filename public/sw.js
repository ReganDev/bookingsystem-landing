/**
 * Self-destroying service worker.
 *
 * The dashboard PWA used to be served from this domain and registered a
 * worker at this exact path, with `navigateFallback: '/index.html'` and a
 * precached app shell. Those registrations still live in returning visitors'
 * browsers, where they intercept navigations and serve the old app from cache
 * for any path on this origin — including paths this site does not have.
 *
 * Letting the path 404 does not clear them reliably across browsers. Taking
 * the registration's place does: this script installs, unregisters itself,
 * drops every cache it can reach, and reloads open tabs.
 *
 * The marketing site has no service worker of its own. This file exists only
 * to clean up after the old one, and can be deleted once old installs have
 * aged out.
 */

self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      await self.registration.unregister()

      const keys = await caches.keys()
      await Promise.all(keys.map((key) => caches.delete(key)))

      // Reload anything already open so the visitor sees the real site now,
      // rather than on some later visit.
      const clients = await self.clients.matchAll({ type: 'window' })
      for (const client of clients) {
        client.navigate(client.url)
      }
    })(),
  )
})
