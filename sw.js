const CACHE = 'JAPP-v1';

self.addEventListener('install',e =>{
    /*Cuando se instala el SW el cache de lo mas importante*/
    const cacheProm = caches.open( CACHE ).then(cache=>{
        return cache.addAll([
        ]);
    })
});