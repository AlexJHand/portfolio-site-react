"use strict";var precacheConfig=[["/index.html","2148a27f4d179cfd2508c4d793113d09"],["/static/css/main.fad5fb76.css","3fb121b0eb1a23ba025c7a3e584ce8e6"],["/static/js/main.b61b360e.js","0c26591f905f8af922140fe3330cbc4e"],["/static/media/Alex_Hand.707d2860.jpg","707d28607bf7ca7e2636e17919d7cf8a"],["/static/media/MCMAnnual.7469f267.png","7469f2670ebf342271498aefc55c8da8"],["/static/media/MCMEdit.403e8d1b.png","403e8d1bee1416a0dc6a0ecd9e6038e8"],["/static/media/MCMGlobal.8a19dda6.png","8a19dda6dee011fa6bab39161903a637"],["/static/media/MCMIntake.871abc8e.png","871abc8ea5d85d6bf2fdbf5000d3f52a"],["/static/media/MCMLanding.840393c3.png","840393c3b08bafc285960031d1597ff5"],["/static/media/blog.d5cf1e8c.png","d5cf1e8c2d92aa3b02e8641da817e5b3"],["/static/media/furious.595e1621.png","595e162100761acfe2c15372230301b0"],["/static/media/goals_Screenshot.e5b2d1ce.png","e5b2d1ce57e8f7d444b78de970cec9b2"],["/static/media/home_Screenshot.eea8fbd2.png","eea8fbd217ab69275d02c0daaa387675"],["/static/media/search_page.1a80eb21.png","1a80eb21751b0f0670704a6d20783a9e"],["/static/media/social_drinker.3b4772f2.png","3b4772f29dea4fd889f442ea2e32bd83"],["/static/media/table_Screenshot.4789007e.png","4789007e42ca85f8f2e462fb78e3d9bc"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});