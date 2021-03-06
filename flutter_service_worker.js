'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2a5b61a22f4f1058beffaef18e5d1de6",
".git/config": "f112876a58f212cc1feb76c8521d4921",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5a96a2d653968a45dbed7a8bf24195ff",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3bdaa19ce1f229d42d0ffc5f4ff1d366",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "40a98e3396b385a136c45e7a04a37840",
".git/logs/refs/heads/master": "6f6446e0eb4a0ccd23cc966adb66d765",
".git/logs/refs/remotes/origin/master": "d10facdba2ba7829d5790b7c3dd83dc4",
".git/objects/0c/da111f7172774a00e5db59397ec7d8151ab3b3": "d4f5c47c93fd1d4f79bd952fb851f9ef",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/d06a477d63c352c7ef6fbfb96998f31105523f": "ba9429254300d8aca00f01242a370e2f",
".git/objects/1c/682364b59044e50c7789a3fa70d6f6c05304e4": "d415284497e7a8e2cfcab357162f0849",
".git/objects/23/4ae67561a78908cb9a97f7f7d73ad8029f7125": "772c97b764b195825fabe1962ccbc6d7",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/26/d8d95618ce22dddc88448a0c5c34051aa6455a": "5e28de1c5573997b96fac48b22568c13",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/4a4fc28e191368b95d1bd7acd9ad00fd5215f4": "a595be2f8cc01f3b3f64fc9f4feec1fb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/31/b2ffbe5f8f198bd56376b781bd2d897d425416": "f41138cb791a742b9b99a843eb877bf0",
".git/objects/32/d7f0464058f79877ec9d020fa6775ecc4881cd": "534e63061afddd2d852723d5703b871f",
".git/objects/34/561032185b5aa7600cf737839459f9dd4f2209": "c69f95c3336291cf16150a329c5f7b42",
".git/objects/34/b75c8d49da6e25bab512ffeeabbea167746859": "2d9c7a070d15c591d5c789fc6e88de47",
".git/objects/37/352b99c97d125a01d7ba2b270d340cac547a39": "730d2ff2c7f2dc0df4f5cb31bb1d68b0",
".git/objects/39/ffd1340e7be3c4ef54d386b95d9f431d3b7749": "4d2d19eeb726c3e592092cfb2606b11b",
".git/objects/3e/e45c34b1866301f39122d8a3707730c6cc2ebe": "0e04233c2ef5db752402a176e8c5413e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/d78abb08c68ddff89262fad44d4a7e9710086b": "7d3aff67942c3c2b3794adaac6545aa1",
".git/objects/47/93ed51754de1f4b11c1b33bc9aedd429a34de0": "319205e58d4f7b1204d460620cc2d588",
".git/objects/49/7d12973a2b539f04a7ec5dba96c0b5057cfd3e": "e7eefa66cdbde7a6cde1f3a2f2dbe2fa",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/54/ffcd05a478a4cf1be78f7592a3674787d0144a": "682c9b18e8634ed213ae31fbcf97a855",
".git/objects/58/cb9de641d283caeed4f8a7a5f869672e00d61a": "0944ce1c4411a9d6247fa898b3d5064b",
".git/objects/5e/4b0545c29202ec0c24c9d9d8ecb485de9559e1": "43930373a7fd4f4092feadec90115c23",
".git/objects/63/0a5849173997900b16189fe741820d48e71d0a": "22a4e48cf78f27d94d7dea98881a7655",
".git/objects/64/1f8a3a694a89a8d4fc12bb1ff748a04c0c5a92": "fa400f1f642dda0f3a0dbd4fdbde101d",
".git/objects/66/c2a905cee87b64e166adc1ce102aea2a08d9e6": "7e906669b837547c173f0eb9a37dd1bb",
".git/objects/6a/111d1f17f01e7a8d1ee34f106fc8f810ed4e74": "80a841ad30103971a67e6a34d60bd49a",
".git/objects/6d/12de5a32dd871f869380716bbb206a821de2be": "2ae2d06ecb5eecf2b0a6768b83990415",
".git/objects/6d/b4e0f26d9552408e117498c433a79426ea2327": "6a860da54129893f4768c974630d4bf6",
".git/objects/70/38b8cd54b9a2446a4ea95e2e692655e1e8c8d7": "6b8cf18bb1e3a2b7f20dfd995aabc3ca",
".git/objects/71/11a678059164c6576599b235785368d81923d5": "469a7bf1a879a314d129bfe66ae49327",
".git/objects/74/ab447d8f66d97c6836f39179313335d158a710": "505f63ec6a9509da7cb44cf99506b406",
".git/objects/75/a1b6cc5f67fc533f286f21de4448bdd3fa0170": "decdc0f92935da33c67c8008f8319de8",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/db71922993a246b3cfc98f1bdf8d1a0c3978d7": "bebcdd4d1f10976567855934ec297907",
".git/objects/7b/a6705f497001800f1b5a89a044887e0334b071": "ffd2f05e3dadabc800f9c54e447adcae",
".git/objects/7c/577e867078ff11d3b9f56240965cf5dc70642b": "d3cc21f2e6e0f5d45ea4d0bb4d94affa",
".git/objects/83/b9361655e3c4a6a22e8afd05df5af9cea2abf2": "6e5c7ce263ad1b21e0e884d7cbfed0bf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/a53b79af893099add6b286c07bb1bd5c0dfd13": "52b9a00105062a0d84680e1d8152e7e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/7b846802094b5512369fffcb031a4c5d265b3b": "d9b18a1a23170bbd9aac8867e21d0947",
".git/objects/a1/06519099d47cdec14a7a551db8d0237450fbc3": "75be7e157ffdd41053ab9c30ff1b6fca",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/752150e28fabd1dc317065103de4af6efcabd5": "d7d4edb75eecba25e74ed844e1c5131c",
".git/objects/a1/8a8eaa0adb3cd18efd2816ed65b2d6bbdda69b": "4c3af9303bc1db82e69555efee7dc484",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/572a50cd58cfd58fd400f9f775184d29cc7dee": "86a6ebbc18f01cf3904281fe36358dbd",
".git/objects/b5/c40c795acab0450702ebb81222f4523ddcc483": "61e4a1d18d5142ed9b966ba318cf4761",
".git/objects/b6/88403dd19833eb37413b3fade8b9e5946f4856": "459e856fa4cfcff3b0d9741c6b7a1136",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/e69fa4ffc8170b6bd9116400cfa72420b249b6": "1489cd850f8de86e673a1e9367f5e384",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/cab3dc6d6ed91a416b452a4e29b12afe6f60b3": "c5335ac29fa2cb5c67f491fda081b748",
".git/objects/bb/d0cee778a74f310c20c3ee542092b5d1bd039e": "01cc37ad2b982f4970a77a94d03a46dc",
".git/objects/c0/84b066139069a744a21343e5e703a2e6d76882": "9eb6dd3e232acc165d27b286e4b35fbe",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/518c5b0b02ecde86e763567d7a53f08abec10c": "20a29b402103b6d62cc32986b4546a49",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/ba2c9f3f06617e588ebf19b6ac642ba4b99950": "25cf65342de4051e0e3070456120e2c7",
".git/objects/d8/b5346140f84e08fe052afbd9dd622e893b1f57": "bb7ac10c717171c590243b9f3d99230f",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/f83408a0febfccf84148cac416fe47264bb349": "0d59b274a18fd7f8fe28a5c4510a49a7",
".git/objects/e1/020c8b1fb8636c0bdb11406451f31b770bf4a0": "59d30f4b14beed04a46b6f1e9a33207a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/c1b9f2d14b6d656e90653fe581120b7d479e77": "3902c7809a2fce3e7277d546c6712d2b",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/f4f6a1cb35615152602de6ed689c76fc062192": "6ab9ea62157cc70a9fb944b76a0ea1b6",
".git/objects/e9/b5abe9ea0fd4d5671d8508b2d4440646b550fd": "21423661a868dd7edda136180ef838d6",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/6e874e2c1c284b1b13141228b7a872dc00924f": "31359a1fa31122d5ff6440c3aab63b0f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/b803365c8e87cc8b7172e658cbb54a495d961f": "46c1282f76b15659803cbfb540ac6b00",
".git/objects/f1/a82f4518d619dd607812d63165630bfca323d7": "1bbaa7ee82860af16a6d46b9e6a63ac0",
".git/objects/f9/83569b4fcd5b35f9070ed6f381e72363f9bdf3": "aebfcb3fdb6be9476cb69b2ab72b3b35",
".git/objects/fa/3004c2a7cf4914a6d728c408b497d301e48ad3": "6063114c6856bef00bbc97f55180f5aa",
".git/objects/fc/32a313f263e2f103a2247eedd12036cfa13fe7": "39b2020360a5be737bf2a472a3f44eb8",
".git/ORIG_HEAD": "433b70c0c0b2dcd2d0ea25a94e6b57e6",
".git/refs/heads/master": "5c322bd39fd72e36f1eaea70055954d1",
".git/refs/remotes/origin/master": "5c322bd39fd72e36f1eaea70055954d1",
"assets/AssetManifest.json": "747d9f59efa78fbd6a4e75af5e548f9d",
"assets/assets/bildirim.jpg": "7419bcd5176b79524832106064512f3e",
"assets/assets/cs.jpg": "73e968980eff385183c149a6826b371f",
"assets/assets/giris.jpg": "4597e89bf4937b04844e37982f296735",
"assets/assets/icon/ikon.png": "53885557a3d3e43d6f808f9481629361",
"assets/assets/images/amtes.jpg": "dbbce53168b452c58b559eda00a41d67",
"assets/assets/images/baris.jpg": "a0208b932f3944df01ed88633853d1fa",
"assets/assets/images/gul.jpg": "4f15b4e025df9434a860d89c95cf1a83",
"assets/assets/images/lale.jpg": "671310adf7151b763d10c82b6758d181",
"assets/assets/images/nergis.jpg": "9aaf1ffb0f6909dcbc1b2fa613413d95",
"assets/assets/images/orkide.jpeg": "72913c504efef7d08924c672a3ee78d3",
"assets/assets/images/orkide.jpg": "56e0390b66ecd78248c70c7caec1d3d7",
"assets/assets/images/papatya.png": "477e12c15c3177121ed1c6eabf20d5c4",
"assets/assets/images/zambak.jpg": "0fe29945277db9a58d801e00cba5677a",
"assets/assets/indir.png": "310aec20a7b9f7902f2918a0556630cc",
"assets/assets/ivan-skorovarov-qvFtW-FsUa0-unsplash.jpg": "a7c2a0c3776e2c9e98b296a382e895b2",
"assets/assets/matthias-schroder-KoBCaTPydqs-unsplash.jpg": "395aa468d173aaf6c187c4ed8cccee88",
"assets/assets/new_file2.riv": "223a3f81d7da4c695e7d2e2d4d3b24a2",
"assets/assets/plant-background-whatspaper-1.jpg": "794d1bef1ac75ad1b0ca92692e982fb6",
"assets/assets/wallpaperflare.jpg": "58cb4b7089bdb5fbd366de9f2e7ad9d8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "10d24b948f34e7291d539a41e2d06d18",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "63ab4e8699e84ed679a4cc31b37dc9c6",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "d41d8cd98f00b204e9800998ecf8427e",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-512.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-maskable-192.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-maskable-512.png": "d41d8cd98f00b204e9800998ecf8427e",
"index.html": "a2ee02c68ab3155b47442ad1c7ac4540",
"/": "a2ee02c68ab3155b47442ad1c7ac4540",
"main.dart.js": "7b81b967f771cc056336919b758736c4",
"manifest.json": "83815229173f52c115406b6dfe0aa0b4",
"version.json": "754bc34ce4c65da4349eb9178236e8b3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
