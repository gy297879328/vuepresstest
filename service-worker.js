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
    "revision": "6147d5f5abbfba75893575ac5215f780"
  },
  {
    "url": "about/index.html",
    "revision": "c660a5d76c3ccd820d25777692e217cf"
  },
  {
    "url": "assets/css/0.styles.6385e97d.css",
    "revision": "85d3f7e69f351787f656b8e68a86e3e2"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/genhtml.6ba8625a.png",
    "revision": "6ba8625ab4eb682cafa55e0a7136a8c8"
  },
  {
    "url": "assets/img/gitee_dz.3d639538.png",
    "revision": "3d639538a42599a47179859448f69f86"
  },
  {
    "url": "assets/img/giteepage.feb078f5.png",
    "revision": "feb078f5352d9d7f9c3eafbadb6c7cca"
  },
  {
    "url": "assets/img/githubfinal.70a01b80.png",
    "revision": "70a01b801991aade8212839e667b06af"
  },
  {
    "url": "assets/img/githubsetting.e63c49d2.png",
    "revision": "e63c49d20923583265d5ac34330cbbbb"
  },
  {
    "url": "assets/img/localindex.0610c78f.png",
    "revision": "0610c78faf6471d7a13a8a53b8b44e8d"
  },
  {
    "url": "assets/img/nginx.ff1f9c4f.png",
    "revision": "ff1f9c4f45e6c6dda7913002b7a9d627"
  },
  {
    "url": "assets/img/nodeindex.ca8a9e4a.png",
    "revision": "ca8a9e4aafd3916af5973d5520936431"
  },
  {
    "url": "assets/img/sortorder.b4608e8a.png",
    "revision": "b4608e8ac57a4a3a1e1c28a65f438d3b"
  },
  {
    "url": "assets/img/start1.be764560.png",
    "revision": "be76456099fac92d16be29f35f779700"
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
    "url": "assets/img/vssuedoc.bbf8bf5f.png",
    "revision": "bbf8bf5fda569f967f1a3760a15c265f"
  },
  {
    "url": "assets/img/vssuevue.c359a2de.png",
    "revision": "c359a2de0816f2678cb93e9b71d0d9b5"
  },
  {
    "url": "assets/img/wxm.1ea3fe37.png",
    "revision": "1ea3fe37911091fee0c4e87a87c556fd"
  },
  {
    "url": "assets/js/1.f1735da5.js",
    "revision": "c45139be69c1e898f8f464b120b2bed9"
  },
  {
    "url": "assets/js/10.229c5b03.js",
    "revision": "c07ca85b86269b1d8dee3c9f1dc633c6"
  },
  {
    "url": "assets/js/11.4ed0eab4.js",
    "revision": "7211760f2a2e5a3f5e56fe5da5755dc1"
  },
  {
    "url": "assets/js/12.08ec77b2.js",
    "revision": "35d9f706ac1733277337394a0c959fa3"
  },
  {
    "url": "assets/js/13.d1744417.js",
    "revision": "11f48cea5bf59d3b20998394386e8dbe"
  },
  {
    "url": "assets/js/14.e5bc594d.js",
    "revision": "c392d938a1a3aadf9e744619c1f39531"
  },
  {
    "url": "assets/js/15.b82017e7.js",
    "revision": "891cd7f9b5dbbd769564671fbff7b81b"
  },
  {
    "url": "assets/js/16.dafe5ee2.js",
    "revision": "a1463f5f83d673958424a19940ae8920"
  },
  {
    "url": "assets/js/17.c4c0c502.js",
    "revision": "d5b37b4a330e45d54a3be24f8d4aacad"
  },
  {
    "url": "assets/js/3.905c343d.js",
    "revision": "595d4256be7b8cc67c51997c2f52e2eb"
  },
  {
    "url": "assets/js/4.a73b51ea.js",
    "revision": "a740c26670838d6f81e177279d993e75"
  },
  {
    "url": "assets/js/5.e5f1cd86.js",
    "revision": "57e408aca196c8118f862a625da03c6c"
  },
  {
    "url": "assets/js/6.aa0b7ded.js",
    "revision": "e431416bd10cbaf0c65561fdaa31c664"
  },
  {
    "url": "assets/js/7.a5c18ffb.js",
    "revision": "c3a44540e665a906e55c4842b82e6a71"
  },
  {
    "url": "assets/js/8.dd2c577f.js",
    "revision": "0b57f5d5a8b43c734453e65535db7852"
  },
  {
    "url": "assets/js/9.d267227f.js",
    "revision": "e8c758ea9cbd660cb1be4b9cb6956417"
  },
  {
    "url": "assets/js/app.1e619ac6.js",
    "revision": "1c238b6536d13ab858540c4478cd2808"
  },
  {
    "url": "categories/index.html",
    "revision": "be511cc590772f703ac721a8b66cf3eb"
  },
  {
    "url": "categories/java/index.html",
    "revision": "1a0312429642efd5fe1fa4a774a11584"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "3113b0ce011efea69e757ea843c677eb"
  },
  {
    "url": "categories/多线程/index.html",
    "revision": "4859abadddd404cedd6eac33462f57e9"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "fa5b7f0a6491366497e83fcd33871270"
  },
  {
    "url": "head2.png",
    "revision": "fee2a218b075e5e09f4bd9d9e8450e1a"
  },
  {
    "url": "icons/cat128.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/cat16.png",
    "revision": "1aec0693ff6e320c0adedf185806b1ab"
  },
  {
    "url": "icons/cat48.png",
    "revision": "231db9fe2dd479a3aac7da8194bb9fd5"
  },
  {
    "url": "icons/LatteAndCat.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/LatteAndCat.svg",
    "revision": "8e2d868e240a4e9b1520fd83ad4b3ad3"
  },
  {
    "url": "index.html",
    "revision": "aa8c23862def7e5ebcf31be0492c509b"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "note/essay/20201119.html",
    "revision": "bbaff4998792be8e5b09b9edebfcac87"
  },
  {
    "url": "note/index.html",
    "revision": "4c398d6e0a6fa3b8077176d35718f739"
  },
  {
    "url": "note/java/2021/morethread/morethread_base_1.html",
    "revision": "9d3a8757b2990038ea73c86a4d906022"
  },
  {
    "url": "note/vuepress/2021/vuepress_final.html",
    "revision": "c02e9124e8d93e017c9cd523c858304b"
  },
  {
    "url": "pg4.png",
    "revision": "0bda5fbe6a6d5730fc73c584451934cd"
  },
  {
    "url": "pg5.jpg",
    "revision": "341bda33769f7d662da9a2ddb9ed1d8d"
  },
  {
    "url": "pg6.jpg",
    "revision": "888e982924dd7b07a4dfb73caf669e38"
  },
  {
    "url": "star.png",
    "revision": "d58c2c2e1655abbdbf4fb891b37361e6"
  },
  {
    "url": "tag/index.html",
    "revision": "3d11b76bb83c3e925a06b928fd342081"
  },
  {
    "url": "tag/java/index.html",
    "revision": "a7a4cc5bf5e0e6e9f4f2f94547965aa2"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "b15f707a0e1a529a3e0501dea123b063"
  },
  {
    "url": "tag/多线程/index.html",
    "revision": "efbd771581d11781eb43dbcfb95f2568"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "d4c0012bc142bfbf0b830cb7dcadaf3e"
  },
  {
    "url": "timeline/index.html",
    "revision": "e6c3a5551ad2f0412757365eb1ed8bc5"
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
    "url": "vuepress/myxgt.png",
    "revision": "73164c7794ad52812be3a7b66ce17b5f"
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
