'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "139d775ca549dba97107bd549b22962a",
"assets/AssetManifest.json": "86f62123b5df14e4f1333ac29e8e5755",
"assets/assets/fonts/Comfortaa-SemiBold.ttf": "50c5468a51006a4b81d223cc28aa1790",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/images/ad2.png": "d4b7a634c2272c4c9dc86b618c2f5c81",
"assets/assets/images/ads.png": "8854592cdf4aa846366d5850dcec4ccd",
"assets/assets/images/ads3.jpg": "24363cf3c43688ec48271df4e5c9be05",
"assets/assets/images/android_studio_icon.png": "9e0dd549040ea96fe051de1d9134f59a",
"assets/assets/images/avatar.png": "b9363295c406e47f0dc0700a1b979d8b",
"assets/assets/images/c1.png": "9d36a10e041658c5df2899df786dfb28",
"assets/assets/images/c10.png": "ae79ee1914ad738d5871d9bd8b0c03ae",
"assets/assets/images/c11.png": "48dee1ef2adca9fc2fb20519e1f2ce93",
"assets/assets/images/c12.png": "91abcaa1c21e69772f2c2588254ed382",
"assets/assets/images/c13.png": "eefbba7f8daaba311ded9df904747fd3",
"assets/assets/images/c14.png": "0ea96b14a6eec7a489633a3ab95f08f5",
"assets/assets/images/c2.png": "7d55aea2dae8c717a69e21138614fafb",
"assets/assets/images/c3.png": "9ad04fd68fe6cc93662d45d57acf0769",
"assets/assets/images/c4.png": "4de23d7ab667169621514cdd4dc80dd6",
"assets/assets/images/c5.png": "bafa19f6ed593afcb93beec90b7bed4d",
"assets/assets/images/c6.png": "4e22ba2954683311fba7ced6f4904b09",
"assets/assets/images/c7.png": "203d63e0a2ed9c66917c1e8bd03b513e",
"assets/assets/images/c8.png": "10ffe09ba00812078defa76f0bbe898b",
"assets/assets/images/c9.png": "b2d3c123335c5182ff2f059166adef17",
"assets/assets/images/Canva_logo.png": "70d113dbbaf3d7454c6d2e08ec30f543",
"assets/assets/images/certificate_logo.jpeg": "de64ff7be9042af7dd44f9f462392291",
"assets/assets/images/dart_icon.png": "48ddfd9c2dc96705b20983c89f326a31",
"assets/assets/images/done.webp": "ecc4c5983dd7536f8f561d0074d3cc37",
"assets/assets/images/figma_logo.png": "348f789a20e7b76f44b587cec9418151",
"assets/assets/images/filter.png": "aefab42852f3566aef39801933457306",
"assets/assets/images/flutter_icon.png": "280061a25e491cd2ab4a6ffd889bc66c",
"assets/assets/images/g1.png": "a8dc77326e133e96dd31f9150b9d1d14",
"assets/assets/images/g10.jpeg": "a0bdc58e9b54365faa2e59a1e36e1299",
"assets/assets/images/g2.jpg": "e2e53fb2ec3ee464a0ec7a42b6f5cd8b",
"assets/assets/images/g3.png": "5ad659aa1a7f0a1dbb847fa658286aac",
"assets/assets/images/g4.png": "5662b4284aa3a1cc77171920e712f467",
"assets/assets/images/g6.png": "bd6993c13ffdd6e1b5558e22b70d0cb3",
"assets/assets/images/g7.png": "69fdab495b308e0ba002d6533061d372",
"assets/assets/images/g8.jpeg": "8aaf7341b121ad2be39818d22ed98b45",
"assets/assets/images/g9.jpeg": "199edfeff62b2a868c5e6f5e109ad246",
"assets/assets/images/google_logo.png": "38aabe0613c4f17945cee40327ac367e",
"assets/assets/images/gro.jpeg": "1dbff453247ec85cf8a5d88cdfc66034",
"assets/assets/images/human.png": "e24f8a74c7e51bd0b6ca9f9767dd1e9b",
"assets/assets/images/i1.jpeg": "6dc9cb6784400be1c37bffccc3151bb8",
"assets/assets/images/i5.jpeg": "12b1fefd7b46e3fc1c4c24d9bd963a2b",
"assets/assets/images/infosys_logo.png": "a282fa0e8684cd143d4e406a10d17efd",
"assets/assets/images/java_logo.png": "0fdbb306b24f0bc00c589a8341352c25",
"assets/assets/images/microsoft_logo.png": "a9bb130db07da8a3faa41434465f5ba5",
"assets/assets/images/rakhi.jpg": "d702cd6c474a2adb698b803a9c0ca740",
"assets/assets/images/sa.png": "d08ad5df71be9374fc2fbdeb54f115e3",
"assets/assets/images/sak.png": "10f8058e09bc99b0491d6929ae5bdb61",
"assets/assets/images/src.png": "15d81d7d7a05e81436ebbf16c9b80b08",
"assets/assets/images/user.png": "12169f1a37cd9ca5c6084a2c3e20c69f",
"assets/FontManifest.json": "5fded53fa5fff5050e6e6b659165583b",
"assets/fonts/MaterialIcons-Regular.otf": "1e9396c052f8bb0d0ffaaf5834a8b913",
"assets/NOTICES": "784eaf6bf0699e5839808c99a30e37d4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "00ffc473bfc321c14613d0831a0afa21",
"/": "00ffc473bfc321c14613d0831a0afa21",
"main.dart.js": "2cff9364c1573be3672f81c44fd37f86",
"manifest.json": "adf6ed45579798134390fcbfa6860e54",
"version.json": "d78f5551c6ab7d116c8aad74114b9ba9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
