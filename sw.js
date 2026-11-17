const CACHE="kiverco-checksheet-v7";
const ASSETS=["./","./index.html","./manifest.webmanifest"];
self.addEventListener("install",event=>event.waitUntil((async()=>{const cache=await caches.open(CACHE);await cache.addAll(ASSETS);await self.skipWaiting();})()));
self.addEventListener("activate",event=>event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)));await self.clients.claim();})()));
self.addEventListener("fetch",event=>{
 if(event.request.method!=="GET")return;
 const url=new URL(event.request.url);
 if(url.origin!==self.location.origin)return;
 const isPage=event.request.mode==="navigate"||url.pathname.endsWith(".html")||url.pathname.endsWith("/");
 event.respondWith((async()=>{
  if(isPage){
   try{const fresh=await fetch(event.request,{cache:"no-store"});if(fresh.ok){const cache=await caches.open(CACHE);await cache.put(event.request,fresh.clone());}return fresh;}catch(error){return (await caches.match(event.request))||caches.match("./");}
  }
  const cached=await caches.match(event.request);if(cached)return cached;
  const response=await fetch(event.request);if(response.ok){const cache=await caches.open(CACHE);cache.put(event.request,response.clone());}return response;
 })());
});