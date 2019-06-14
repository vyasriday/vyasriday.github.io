const cacheName = 'v2';
const cacheFiles = [
	'/',
	'/index.html',
	'.',
	'/style.css',
	'/resources/resume/Hridayesh_Sharma.pdf',
	'https://fonts.googleapis.com/css?family=PT+Sans:400,700',
	'/favicon.ico',
	'/resources/images/background-medium.jpg',
	'/resources/images/header-img.jpg',
	'/resources/images/icons/'
]

self.addEventListener('install', function (e) {
	console.log('[ServiceWorker] Installed');
	e.waitUntil(
		caches.open(cacheName).then(function (cache) {
			console.log('[ServiceWorker] Caching cacheFiles');
			return cache.addAll(cacheFiles);
		})
	);
});

self.addEventListener('activate', function (e) {
	console.log('[ServiceWorker] Activated');
	e.waitUntil(
		caches.keys().then(function (cacheNames) {
			return Promise.all(cacheNames.map(function (thisCacheName) {
				if (thisCacheName !== cacheName) {
					console.log('[ServiceWorker] Removing Cached Files from Cache - ', thisCacheName);
					return caches.delete(thisCacheName);
				}
			}));
		})
	);

});


self.addEventListener('fetch', function (e) {
			console.log('[ServiceWorker] Fetch', e.request.url);
			e.respondWith(
				caches.match(e.request)
				.then(function (response) {
					if (response) {
						return response;
					}

					let requestClone = e.request.clone();
					return fetch(requestClone)
						.then(function (response) {

							if (!response) {
								console.log("[ServiceWorker] No response from fetch ")
								return response;
							}

							let responseClone = response.clone();

							caches.open(cacheName).then(function (cache) {

								cache.put(e.request, responseClone);

								return response;

							});

						})
						.catch(function (err) {
							console.log('[ServiceWorker] Error Fetching & Caching New Data', err);
						});
				})
			)
});
