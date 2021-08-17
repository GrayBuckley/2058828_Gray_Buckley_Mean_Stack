const CACHE_NAME = 'C';
this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            return cache.addAll([
                'index.html',
                'icon.png',
                '.',
                'manifest.json',
                'service-worker.js'
            ])
        })
    )
})