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
    "url": "about/index.html",
    "revision": "f4cdbc81648d9d79923c6f93463a1bec"
  },
  {
    "url": "assets/css/0.styles.5c6a21fd.css",
    "revision": "6e6746b63eb08fb8f7400eb3083d4517"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.40e49907.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "assets/img/loading.c38bb4c9.svg",
    "revision": "c38bb4c91362836bff4e41485000be83"
  },
  {
    "url": "assets/img/pan.07613e22.png",
    "revision": "07613e229a93d4e819835f6c46a5bbc9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sortorder.b4608e8a.png",
    "revision": "b4608e8ac57a4a3a1e1c28a65f438d3b"
  },
  {
    "url": "assets/img/theardstatus.84764db5.png",
    "revision": "84764db5c683d9cf822648ad9e6efcaa"
  },
  {
    "url": "assets/img/threadtupu.d6a8e628.png",
    "revision": "d6a8e6284a4075fac74d3727b54ae27f"
  },
  {
    "url": "assets/js/1.30bd123a.js",
    "revision": "81f34f0ecd200dfe2ff1ebc84d4ae5b4"
  },
  {
    "url": "assets/js/10.3324734b.js",
    "revision": "6af9d14dbbcc3983ca3c2d2df0b9e1b6"
  },
  {
    "url": "assets/js/11.75d2fc2d.js",
    "revision": "e4ab702e5d008302f3b6bd479b41231a"
  },
  {
    "url": "assets/js/12.0338abd2.js",
    "revision": "ccc09b11e90ed95f98e8fdbdf2c71f0a"
  },
  {
    "url": "assets/js/13.dd85ee69.js",
    "revision": "1bee05c74d3b215db506ce3f402d4ffb"
  },
  {
    "url": "assets/js/14.91bcd6e1.js",
    "revision": "2d10ca78fd3682f549cea8de18b6e1ed"
  },
  {
    "url": "assets/js/15.238d1467.js",
    "revision": "0deeeb356a192c13e6a9061dee55383f"
  },
  {
    "url": "assets/js/16.c8e5adcc.js",
    "revision": "c50a820db6b1e77e7ec80012f0d2dca0"
  },
  {
    "url": "assets/js/17.ec1cc7c0.js",
    "revision": "0c980a05d2b7d77ad8278ee3d32baffa"
  },
  {
    "url": "assets/js/18.7aa00495.js",
    "revision": "ab1a348c28d2f067e39157a15a95d1b6"
  },
  {
    "url": "assets/js/19.b6bb58f8.js",
    "revision": "5087688d09057f6bce37d05058eade09"
  },
  {
    "url": "assets/js/2.c5a1c895.js",
    "revision": "90435cff53bd83b1a47c3b43b37adeaf"
  },
  {
    "url": "assets/js/20.8247240f.js",
    "revision": "aa200be1c4b5c347dd6b6870ac0ad905"
  },
  {
    "url": "assets/js/21.d665abce.js",
    "revision": "4d4dcb03a09d1840111f1aa213edc743"
  },
  {
    "url": "assets/js/22.aa5130e8.js",
    "revision": "ddf7291272392f3f35d8fa1e91cefea9"
  },
  {
    "url": "assets/js/23.c75f88c7.js",
    "revision": "a7c6c67ca7bf0bdbc73547c8026961ec"
  },
  {
    "url": "assets/js/24.378a3d29.js",
    "revision": "37bb62e1e076263c7662c5ebe6e0a05d"
  },
  {
    "url": "assets/js/25.3273de52.js",
    "revision": "9af92cdba2d4bd8f350c437fc94648ef"
  },
  {
    "url": "assets/js/26.9c8792a0.js",
    "revision": "0308c1b7b22fb940bce0ee1f8b09d221"
  },
  {
    "url": "assets/js/27.b77a1a56.js",
    "revision": "2770cb64ad015b546b458ed97075c6c2"
  },
  {
    "url": "assets/js/28.95c39f9d.js",
    "revision": "c27cc46ef537144172842e68792152a1"
  },
  {
    "url": "assets/js/29.32249fc6.js",
    "revision": "314faf4ddb74b6aa6a339efe3a324356"
  },
  {
    "url": "assets/js/5.17921162.js",
    "revision": "51c1c9a7c7de16a0d98afaad6d6b6a3a"
  },
  {
    "url": "assets/js/6.0cc268a7.js",
    "revision": "b2b49218b5725d58c892e256866f0bc2"
  },
  {
    "url": "assets/js/7.87315414.js",
    "revision": "f2117625818f1329c3d77247933c7972"
  },
  {
    "url": "assets/js/8.9be3e96a.js",
    "revision": "a043945c81af5c03f85e69b7572d304c"
  },
  {
    "url": "assets/js/9.68dbdbbb.js",
    "revision": "a1b1364dd23d069fb013037763134573"
  },
  {
    "url": "assets/js/app.f0bea611.js",
    "revision": "c6fdd20d1000efc3f4891e56d18de1a3"
  },
  {
    "url": "assets/js/vendors~flowchart.683ea7bd.js",
    "revision": "196b10dd75f0fd552456e33f7ffb1138"
  },
  {
    "url": "categories/index.html",
    "revision": "473aa5260980b84803db5bddd12838b0"
  },
  {
    "url": "categories/java/index.html",
    "revision": "7689b0f4dd14711f6c568400e0cf525e"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "8451d07a7b41a7d8882a7a525d109702"
  },
  {
    "url": "iconfont/iconfont.css",
    "revision": "c8b00d812608bf98f806b55fa4140795"
  },
  {
    "url": "iconfont/iconfont.eot",
    "revision": "0fe2ea06e44b4c5586cd81edfb62fa67"
  },
  {
    "url": "iconfont/iconfont.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "iconfont/iconfont.ttf",
    "revision": "b2bb6a1eda818d2a9d922d41de55eeb1"
  },
  {
    "url": "iconfont/iconfont.woff",
    "revision": "3779cf87ccaf621f668c84335713d7dc"
  },
  {
    "url": "iconfont/iconfont.woff2",
    "revision": "66dad00c26f513668475f73f4baa29aa"
  },
  {
    "url": "img/other/comment.png",
    "revision": "6878f2fce5e82c12f91eef87bde8bd2c"
  },
  {
    "url": "img/other/git_001.png",
    "revision": "dad7a6694ad6026308d580ada34703f5"
  },
  {
    "url": "img/other/http001.jpg",
    "revision": "856031f897fce74ca2103cd443e81fae"
  },
  {
    "url": "index.html",
    "revision": "867a69ec29d6cdb8be46350472610067"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "0cc493572504a40fda88217e523ebb8c"
  },
  {
    "url": "other/project.html",
    "revision": "ec69f828ab7e0409e7f363a57ed828d1"
  },
  {
    "url": "tag/index.html",
    "revision": "279e792dd2c982ad624161b0b8b0dc8e"
  },
  {
    "url": "tags/java/index.html",
    "revision": "8a8db6e3b2ad8e053f99749d7db7e960"
  },
  {
    "url": "tags/多线程/index.html",
    "revision": "f3045888203032bfb6bac0b8a23bab57"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "8ed5812019532bebc841132276e5841f"
  },
  {
    "url": "timeline/index.html",
    "revision": "b1e84e61afb64bb444f1ca85d61fe44a"
  },
  {
    "url": "view/index.html",
    "revision": "579eedcfdd3e85b1c14f55ae214cc735"
  },
  {
    "url": "view/kQWXr.gif",
    "revision": "e1effde1daad09edcb5d776c7f603b6a"
  },
  {
    "url": "view/love.html",
    "revision": "68de52e48f4306179d313c0604d4ef57"
  },
  {
    "url": "view/rddek.gif",
    "revision": "638c77362a2c110318d58cc3935f3177"
  },
  {
    "url": "view/比心1.png",
    "revision": "9344734f90afd01afb5566ac14c22dec"
  },
  {
    "url": "views/essay/20201119.html",
    "revision": "0ff43a00106fe0d22f719b9c703b2933"
  },
  {
    "url": "views/index.html",
    "revision": "6a586e66e39529924b59ce429281e29c"
  },
  {
    "url": "views/morethread/morethread_base_1.html",
    "revision": "fd5f726135bf0047cfe580be00a9c79b"
  },
  {
    "url": "views/todo/finalChapter_19.html",
    "revision": "7d6ac1ca5048fa28072ffc095522ef24"
  },
  {
    "url": "vuepress/fish.jpg",
    "revision": "3cb672033db83620e4e024c9c747e13f"
  },
  {
    "url": "vuepress/gzhewm.jpg",
    "revision": "86b976780326150031a02955955a0439"
  },
  {
    "url": "vuepress/head-fish.jpg",
    "revision": "ab7a9c264c4e2e0cddbf8a3229e8b2a0"
  },
  {
    "url": "vuepress/head.png",
    "revision": "8919827e695ae6a739b646f05bb5d991"
  },
  {
    "url": "vuepress/topic.png",
    "revision": "bf80a6f75ed6aff874261bb1d13ff529"
  },
  {
    "url": "vuepress/topic1.png",
    "revision": "f820e00ff2379ef507258a87a6ae418d"
  },
  {
    "url": "vuepress/zanshang01.png",
    "revision": "19f90a3088cb6c2d9eca4bcd02feae9c"
  },
  {
    "url": "vuepress/znote.png",
    "revision": "0098af9084c619fae94c3d593c609bbd"
  },
  {
    "url": "vuepress/zpj80231-logo.png",
    "revision": "a2aa1799583b0104477b398b98b757c3"
  },
  {
    "url": "vuepress/zpj80231-logo2.png",
    "revision": "97de419e4928299047a1de1b2b249f63"
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
