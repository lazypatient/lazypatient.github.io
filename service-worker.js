/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3b081a7fea91ee14af51751618ce3111"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.a0e190f2.js",
    "revision": "63ee03f03d39c47d65ac67485a27a829"
  },
  {
    "url": "assets/js/10.0f1a6214.js",
    "revision": "aed2ce279cb8069139b9ce0b4c0d8761"
  },
  {
    "url": "assets/js/11.1dcef5e3.js",
    "revision": "b44c80b1e90dd1fea3953864833ff464"
  },
  {
    "url": "assets/js/12.7f231f97.js",
    "revision": "05a328feee3c5a6667fd201c1e077c87"
  },
  {
    "url": "assets/js/13.4ab2683e.js",
    "revision": "7208e8294b490b53b99964be4640a8ae"
  },
  {
    "url": "assets/js/14.a4f14ad7.js",
    "revision": "414390e3837d548064f4ffd1c4809a7b"
  },
  {
    "url": "assets/js/15.d618cf92.js",
    "revision": "a2d0f51575afa3dcaa017af980cb1114"
  },
  {
    "url": "assets/js/16.fc67d057.js",
    "revision": "7bed02765cf9056e995bf32ff82bb3e1"
  },
  {
    "url": "assets/js/17.287fa90a.js",
    "revision": "6bfe9f510eef6ee814bac18322a20aa7"
  },
  {
    "url": "assets/js/18.5ac236ed.js",
    "revision": "6ebf26e8a597d729a1f560a4bfc03fc9"
  },
  {
    "url": "assets/js/4.d64128e2.js",
    "revision": "e10459d3809dba98c1bba49ef9ec64c3"
  },
  {
    "url": "assets/js/5.4ab99d5e.js",
    "revision": "7347dfdedba2d017c568c7b51150269e"
  },
  {
    "url": "assets/js/6.e7b886c2.js",
    "revision": "6663f4417c923daea0fe08aad64d7c09"
  },
  {
    "url": "assets/js/7.6503cb7d.js",
    "revision": "fe02ddd8bfbd811354a0d6b7f3f2a35d"
  },
  {
    "url": "assets/js/8.fc5b7506.js",
    "revision": "868cb4ce0a0a9291b4a5dade91da3cf6"
  },
  {
    "url": "assets/js/9.d898caf8.js",
    "revision": "c6abf0f2268fd16ebac5d1a16ddc286e"
  },
  {
    "url": "assets/js/app.9fb1b58a.js",
    "revision": "607ec32fde5898515427ce3390327b76"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.fe7c321e.js",
    "revision": "a64ebb2f4c1ee386f2eed5d866fffdab"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "17a5392857c67d9460e03266f4714646"
  },
  {
    "url": "categories/java/index.html",
    "revision": "08e87ea8da6c5ec4d02e1f1ef9bb209c"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "4bd2ee10145c3a25ff2b7a7f1fa4661e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "86e7d78107455d26f55fef488a43adbc"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "2e666406a2c3976b7addb26fd0baf1d9"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "3bc2363a8c0637e1025b7243f5adeb52"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "d081081d7c1ff57960f8580a0bc54d0f"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "d66dbd7978c7ec103ac996bdb3b979d3"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "f7809a125ec0cd3a3001f5531a28d3af"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "98ea5e1014785a5879334bdc4cdd349e"
  },
  {
    "url": "tags/js/index.html",
    "revision": "79593b9d7a7dd0fd765df8d21135ed89"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "bdd5d80b216c92ac3f54c38caec2aca5"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "f0c4c7d97d9acd22e9c46066ed278ec8"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "1432b743d9e220eeacf0638c7cdbe235"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "e9df161cca217795d1fba43aeba9f75b"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "74b335366ab069e4ccaa9602275d939d"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "0068d6e95092648bc02556f192a1cf98"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "d9c5bd7f42b3b5e58afda65c545b7069"
  },
  {
    "url": "timeline/index.html",
    "revision": "e2bd80c99dcee148b42be87bf74e42a2"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "ee05880410fea0da0c8076043135212f"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "e90f947a65d0ea7ce3cd68cfcd78cd86"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "0fd83273f151ca5bb998aa66e9ad2a28"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "9a5b400adbc6bf989610db0f29448a2c"
  },
  {
    "url": "生活分享/life.html",
    "revision": "b0d01b922b8d5c549d7cde6687a154fb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
