// install sw
self.addEventListener('install', event => console.log(event));

// activate sw
self.addEventListener('activate', event => console.log(event));

// fetch event
self.addEventListener('fetch', event => console.log(event));