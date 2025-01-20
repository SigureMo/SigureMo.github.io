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
    "revision": "2d08acbff8cb33b9fc324a04fb8c8c0d"
  },
  {
    "url": "about.html",
    "revision": "3603badabc1901dcff3fbfcba5c35579"
  },
  {
    "url": "assets/css/0.styles.41115e46.css",
    "revision": "aeb206c49b5827a5527521fbcf8fc0de"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",
    "revision": "7f06b4e30317f784d61d26686aed0ab2"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",
    "revision": "aaf4eee9fba9907d61c3935e0b6a54ae"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",
    "revision": "e78e28b4834954df047e4925e9dbf354"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",
    "revision": "021dd4dc61ee5f5cdf315f43b48c094b"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",
    "revision": "1e802ca9dedc4ed4e3c6f645e4316128"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",
    "revision": "4ec58befa687e9752c3c91cd9bcf1bcb"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",
    "revision": "7edb53b6693d75b8a2232481eea1a52c"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",
    "revision": "d3b46c3a530116933081d9d74e3e9fe8"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",
    "revision": "d49f2d55ce4f40f982d8ba63d746fbf9"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",
    "revision": "a31e7cba7b7221ebf1a2ae545fb306b2"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",
    "revision": "c4c8cab7d5be97b2bb283e531c077355"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",
    "revision": "d5b59ec9764e10f4a82369ae29f3ac58"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",
    "revision": "32a5339eb809f381a7357ba56f82aab3"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",
    "revision": "a48dad4f58c82e38a10da0ceebb86370"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",
    "revision": "b7d9c46bff5d51da6209e355cc4a235d"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.22086eb5.woff",
    "revision": "22086eb5d97009c3e99bcc1d16ce6865"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",
    "revision": "8e1e01c4b1207c0a383d9a2b4f86e637"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",
    "revision": "9ceff51b3cb7ce6eb4e8efa8163a1472"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",
    "revision": "284a17fe5baf72ff8217d4c7e70c0f82"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",
    "revision": "4c57dbc44bfff1fdf08a59cf556fdab3"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",
    "revision": "e8b44b990516dab7937bf240fde8b46a"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.29c86397.ttf",
    "revision": "29c86397e75cdcb3135af8295f1c2e28"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.99be0e10.woff",
    "revision": "99be0e10c38cd42466e6fe1665ef9536"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",
    "revision": "e533d5a2506cf053cd671b335ec04dde"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",
    "revision": "5c734d78610fa35282f3379f866707f2"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",
    "revision": "5c94aef490324b0925dbe5f643e8fd04"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.b741441f.woff",
    "revision": "b741441f6d71014d0453ca3ebc884dd4"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",
    "revision": "9a2834a9ff8ab411153571e0e55ac693"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",
    "revision": "b13731ef4e2bfc3d8d859271e39550fc"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",
    "revision": "d747bd1e7a6a43864285edd73dcde253"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",
    "revision": "291e76b8871b84560701bd29f9d1dcc7"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",
    "revision": "4ad08b826b8065e1eab85324d726538c"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.f0303906.woff",
    "revision": "f0303906c2a67ac63bf1e8ccd638a89e"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",
    "revision": "3fb419559955e3ce75619f1a5e8c6c84"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",
    "revision": "6e0830bee40435e72165345e0682fbfc"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",
    "revision": "7dc027cba9f7b11ec92af4a311372a85"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",
    "revision": "4059868e460d2d2e6be18e180d20c43d"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",
    "revision": "727a9b0d97d72d2fc0228fe4e07fb4d8"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",
    "revision": "fba01c9c6fb2866a0f95bcacb2c187a5"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",
    "revision": "2555754a67062cac3a0913b715ab982f"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",
    "revision": "5c58d168c0b66d2c32234a6718e74dfb"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",
    "revision": "d929cd671b19f0cfea55b6200fb47461"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.755e2491.woff2",
    "revision": "755e2491f13b5269f0afd5a56f7aa692"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",
    "revision": "d12ea9efb375f9dc331f562e69892638"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",
    "revision": "d524c9a5b62a17f98f4a97af37fea735"
  },
  {
    "url": "assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",
    "revision": "7342d45b052c3a2abc21049959fbab7f"
  },
  {
    "url": "assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",
    "revision": "eb130dcc661de766c999c60ba1525a88"
  },
  {
    "url": "assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",
    "revision": "ad7672524b64b730dfd176140a8945cb"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",
    "revision": "257023560753aeb0b89b7e434d3da17f"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",
    "revision": "3fe216d2a5f736c560cde71984554b64"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",
    "revision": "6cc31ea5c223c88705a13727a71417fa"
  },
  {
    "url": "assets/img/ast-grep.13d6e50e.png",
    "revision": "13d6e50ee9051b7541970917116d2d80"
  },
  {
    "url": "assets/img/ast-transform.drawio.c91ec598.png",
    "revision": "c91ec59820447d383b06ce4cbe8426be"
  },
  {
    "url": "assets/img/ast.drawio.1ed7d6cf.png",
    "revision": "1ed7d6cfae2d9b5712c566bc50272e29"
  },
  {
    "url": "assets/img/BiGAN.c5724f7c.png",
    "revision": "c5724f7c30794c8e60e3eff96a77d1c7"
  },
  {
    "url": "assets/img/CGAN-01.3f9fd91b.png",
    "revision": "3f9fd91b0b623b078fc01df755a5966f"
  },
  {
    "url": "assets/img/CGAN-02.a9e2d3e2.png",
    "revision": "a9e2d3e2fec9036c1fc6825eb94153f3"
  },
  {
    "url": "assets/img/claw.f886b8d5.svg",
    "revision": "f886b8d5021c8af029e2cd4dea609bcc"
  },
  {
    "url": "assets/img/dynamo-compile.drawio.236dde09.png",
    "revision": "236dde0934fbc98ae6dff132c80cd2bb"
  },
  {
    "url": "assets/img/dynamo-eval-frame.drawio.f8dd9469.png",
    "revision": "f8dd94693b8e660bb947b39017a181d3"
  },
  {
    "url": "assets/img/dynamo-overview.69905ffa.png",
    "revision": "69905ffaa20c9ad1f0fdc819d28d0f4d"
  },
  {
    "url": "assets/img/dynamo-resume.drawio.9d36d118.png",
    "revision": "9d36d1188637895d3fcd4bce3ee611d1"
  },
  {
    "url": "assets/img/dynamo-simulate-execution.drawio.e6e42641.png",
    "revision": "e6e426410f944206312541de672caefa"
  },
  {
    "url": "assets/img/GAN-Theory-01.4a14384f.png",
    "revision": "4a14384fa6f49d4ef1bbab84bb7dc8c2"
  },
  {
    "url": "assets/img/GAN-Theory-02.0ae9732f.png",
    "revision": "0ae9732f24fb33e54802c098048b9523"
  },
  {
    "url": "assets/img/GCN_02.973e50ee.png",
    "revision": "973e50ee19cbec2eb72123fe17ca9b74"
  },
  {
    "url": "assets/img/GCN_03.2f5ada9f.png",
    "revision": "2f5ada9f541643cf2317d408a2beea63"
  },
  {
    "url": "assets/img/gcn-01.drawio.8a0311d9.png",
    "revision": "8a0311d9d2524fef4d0a3fe653010368"
  },
  {
    "url": "assets/img/git-collaboration01.927d0bca.png",
    "revision": "927d0bca809ba01e0e53d3300b835478"
  },
  {
    "url": "assets/img/Improving-GAN-01.6fbef6c4.png",
    "revision": "6fbef6c4d9e15133f621bd1ce926f9e8"
  },
  {
    "url": "assets/img/Improving-GAN-02.374c70f0.png",
    "revision": "374c70f00598f4f78c61f45378f8fffd"
  },
  {
    "url": "assets/img/Improving-GAN-03.041780d4.png",
    "revision": "041780d4726b1e9ae97aeb88e79c989e"
  },
  {
    "url": "assets/img/InfoGAN.5d81f7a2.png",
    "revision": "5d81f7a2a88b86971c95ffb58b75394d"
  },
  {
    "url": "assets/img/inline-cache.drawio.64b35eb1.png",
    "revision": "64b35eb1c22041be639a15597b858036"
  },
  {
    "url": "assets/img/maxout-01.7d261fdc.png",
    "revision": "7d261fdcbf9a9806c01c404ddcf05ea7"
  },
  {
    "url": "assets/img/maxout-02.dae9fe0f.png",
    "revision": "dae9fe0f28e099f8c326ebff2f71d038"
  },
  {
    "url": "assets/img/maxout-03.01bbd534.png",
    "revision": "01bbd53416826aedc4c140154e432f80"
  },
  {
    "url": "assets/img/prototype_01.d8c01c63.png",
    "revision": "d8c01c6308443f3765108144f710ef54"
  },
  {
    "url": "assets/img/prototype_02.f3945c4b.png",
    "revision": "f3945c4bbc483ad981931bd66f2e3caf"
  },
  {
    "url": "assets/img/prototype_03.693b9d04.png",
    "revision": "693b9d04f3378c694106534bdc34ed6b"
  },
  {
    "url": "assets/img/prototype_04.11ea3a46.png",
    "revision": "11ea3a4681c7840915ada6f49bdf70e4"
  },
  {
    "url": "assets/img/proxy_01.drawio.8b615ce4.png",
    "revision": "8b615ce4a9371893a7095ef6b1cec188"
  },
  {
    "url": "assets/img/SA01.801f35af.png",
    "revision": "801f35af586a87dc7b46e755dfa3c29d"
  },
  {
    "url": "assets/img/SA03.64c848d7.png",
    "revision": "64c848d7b091141fcbddc4dd9c5ac265"
  },
  {
    "url": "assets/img/specializing-overview.drawio.ebeeb0d5.png",
    "revision": "ebeeb0d5410be9d27fe32f983cd58fbb"
  },
  {
    "url": "assets/img/SPT02.8c6da300.png",
    "revision": "8c6da300d2c0791da24b8a781e76a76d"
  },
  {
    "url": "assets/img/Unsupervised-CGAN-01.cdb57ff5.png",
    "revision": "cdb57ff5a3e38aa8fb79735c7ad778ed"
  },
  {
    "url": "assets/img/Unsupervised-CGAN-02.f15e0c92.png",
    "revision": "f15e0c92a6686e6ff7689596dac74eab"
  },
  {
    "url": "assets/img/Unsupervised-CGAN-03.99755925.png",
    "revision": "9975592557371379a6a59d0d2d33e1cc"
  },
  {
    "url": "assets/img/Unsupervised-CGAN-04.a07c2e97.png",
    "revision": "a07c2e97a1cc72e951b5c2cfd412e483"
  },
  {
    "url": "assets/img/Unsupervised-CGAN-05.2b9bd024.png",
    "revision": "2b9bd0243a4c054383ac6b606d73f1cf"
  },
  {
    "url": "assets/img/Unsupervised-CGAN-06.7a18b4f8.png",
    "revision": "7a18b4f8e1838c66fd9fc951197ec316"
  },
  {
    "url": "assets/img/Unsupervised-CGAN-07.5d8f42d5.png",
    "revision": "5d8f42d55956067cfcaa29d669775466"
  },
  {
    "url": "assets/img/Unsupervised-CGAN-08.01d3f74a.png",
    "revision": "01d3f74a948e738d5da5e188bad66235"
  },
  {
    "url": "assets/img/Unsupervised-CGAN-09.448d366f.png",
    "revision": "448d366f63c042dfb83230f6cf320df9"
  },
  {
    "url": "assets/img/Unsupervised-CGAN-10.43937715.png",
    "revision": "43937715a51a03c5b53f580c8bf15195"
  },
  {
    "url": "assets/img/VAE-GAN.fed55d98.png",
    "revision": "fed55d9893081e06b3bf9eedc8c306c4"
  },
  {
    "url": "assets/img/visitor-01.drawio.b0c78f2c.png",
    "revision": "b0c78f2cf3ba41a80d31ace502c78d8e"
  },
  {
    "url": "assets/img/visitor-02.drawio.45935487.png",
    "revision": "45935487e263f1aa0e3222910cdf5f6c"
  },
  {
    "url": "assets/img/vue3_reactivity_01.abd683a6.png",
    "revision": "abd683a6ab0a8526d1a556fce05f5898"
  },
  {
    "url": "assets/img/workflow.drawio.abd5ae5c.png",
    "revision": "abd5ae5c62528ecd27bf0f65243684ce"
  },
  {
    "url": "assets/js/1.05d9e074.js",
    "revision": "e13da2e1deb4de6aa7f0c9315041c567"
  },
  {
    "url": "assets/js/10.9d5b1dc8.js",
    "revision": "c2b51b7e04b9e6628d962d7dc697d658"
  },
  {
    "url": "assets/js/12.66c0a540.js",
    "revision": "f4bfe94cf88c78c66ef48d99e0a3dddc"
  },
  {
    "url": "assets/js/13.f2f9f4f0.js",
    "revision": "11a057982e8df64bafaae15979771172"
  },
  {
    "url": "assets/js/14.70d27364.js",
    "revision": "b7ea59bfa2afe2a80d66c5085381170f"
  },
  {
    "url": "assets/js/15.c83e5eb9.js",
    "revision": "567ddc794908715d8be1bb76b5a90d5c"
  },
  {
    "url": "assets/js/16.98f93bc8.js",
    "revision": "2199afa5a5e6302affc1746eeca38b2d"
  },
  {
    "url": "assets/js/17.3157425d.js",
    "revision": "a68ee5825bd2c51d02582142286bd64a"
  },
  {
    "url": "assets/js/18.ad20fa99.js",
    "revision": "b920e6fb0480d80e8f17dae1e8d8d77e"
  },
  {
    "url": "assets/js/19.825c19ae.js",
    "revision": "932f4383a630d68da90ca7c20fd70fe1"
  },
  {
    "url": "assets/js/2.a4313740.js",
    "revision": "537670b558b9fe9894323fad78c8efea"
  },
  {
    "url": "assets/js/20.bd6f9a90.js",
    "revision": "dbbfd5b66593a918c5314b06a948daf9"
  },
  {
    "url": "assets/js/21.47d535fe.js",
    "revision": "f2aa2caae603e0beb6d80029567a1cec"
  },
  {
    "url": "assets/js/22.c133959d.js",
    "revision": "7149875a78990a4f56bf2d5a81369595"
  },
  {
    "url": "assets/js/23.48f5cd69.js",
    "revision": "21d6414d26c53183d6aa45aa03a29e58"
  },
  {
    "url": "assets/js/24.c1bd6151.js",
    "revision": "7eea67b6596247f7309c331465627ed5"
  },
  {
    "url": "assets/js/25.33d7359a.js",
    "revision": "3d04a14f4f643bdb2610db24b44ffa67"
  },
  {
    "url": "assets/js/26.08a6730a.js",
    "revision": "a23f577db6e018e9d87215d5f498f718"
  },
  {
    "url": "assets/js/27.a008750f.js",
    "revision": "6fda9e991159d13157a9ab30cc99ea15"
  },
  {
    "url": "assets/js/28.6d3ee91b.js",
    "revision": "6145c0be82ef5827e37692eb65aa82f6"
  },
  {
    "url": "assets/js/29.2a0d9e6a.js",
    "revision": "33fbea7024fef64401914a54919573bb"
  },
  {
    "url": "assets/js/3.974bcf0c.js",
    "revision": "8c373a50e21e9d49e6c6d57558b8973c"
  },
  {
    "url": "assets/js/30.d7efd31a.js",
    "revision": "a2c2cc3b79deaa84cd9540fa32b2d4ec"
  },
  {
    "url": "assets/js/31.3f6f47d6.js",
    "revision": "a4c6a144176194803795c407204b2a38"
  },
  {
    "url": "assets/js/32.c29e21c1.js",
    "revision": "c015817167c36a17e957ac055772eff8"
  },
  {
    "url": "assets/js/33.8157f65a.js",
    "revision": "2e9ce7a76155893b9ad4a616312c7162"
  },
  {
    "url": "assets/js/34.898931a8.js",
    "revision": "cb7b872ea14225d7d48176cbee51eb41"
  },
  {
    "url": "assets/js/35.eeafd42a.js",
    "revision": "3410cf536a85748a08e55338be878424"
  },
  {
    "url": "assets/js/36.88841b5a.js",
    "revision": "e655b2758abab820db58512d51e7d98d"
  },
  {
    "url": "assets/js/37.8fc21d57.js",
    "revision": "3ac745832956811165092e1175adf320"
  },
  {
    "url": "assets/js/38.bbb61dbe.js",
    "revision": "c412dc3a775b7dcc937dbaeafa1f599f"
  },
  {
    "url": "assets/js/39.9a061f18.js",
    "revision": "f1b593846232d5776e221e13c72b34cf"
  },
  {
    "url": "assets/js/4.cc70c28d.js",
    "revision": "e3e48fdb1a80dee785185d0604a119c8"
  },
  {
    "url": "assets/js/40.74bab01b.js",
    "revision": "2099c1a9e9421ab6b42ae7f3d72a64a3"
  },
  {
    "url": "assets/js/41.37268823.js",
    "revision": "f7d9eb1ccda8d746a7add994fd535cf1"
  },
  {
    "url": "assets/js/42.c246a256.js",
    "revision": "e13eba4fb5ac3cc28f4e7b8b21a1df8c"
  },
  {
    "url": "assets/js/43.c3cc7b0c.js",
    "revision": "a9d293e5bb8c2fd9b589cc77be900542"
  },
  {
    "url": "assets/js/44.27097e52.js",
    "revision": "19e38314e9475f5b15d870f4404ad19b"
  },
  {
    "url": "assets/js/45.a49c04f4.js",
    "revision": "aa60e469772c58cc3444a3dc8318188f"
  },
  {
    "url": "assets/js/46.8dd233b3.js",
    "revision": "46844a3926c3c22cf040570bb71f15b6"
  },
  {
    "url": "assets/js/47.a86d6e2d.js",
    "revision": "2cd7256962ce5486d39f72ca2e0d2373"
  },
  {
    "url": "assets/js/5.5cdce142.js",
    "revision": "57aca3e569e80aadd713695ce952e560"
  },
  {
    "url": "assets/js/6.458f2b3f.js",
    "revision": "67951b8a01986229b8067d085704db77"
  },
  {
    "url": "assets/js/7.3b2d9053.js",
    "revision": "357342053cc44a382dbd6540cd4ab8a4"
  },
  {
    "url": "assets/js/8.0fcd9a25.js",
    "revision": "e0b571497cf4ff6a9c2e9a920b435e7d"
  },
  {
    "url": "assets/js/9.359e19c2.js",
    "revision": "ae3d5e5c6e9c75588e34815148e0cdb7"
  },
  {
    "url": "assets/js/app.1b219f46.js",
    "revision": "6aebb2b7c8392e1e0b7197336dfb8a58"
  },
  {
    "url": "avatar.jpg",
    "revision": "a0f3f085df0623e5f87ed60c23d99fae"
  },
  {
    "url": "friends.html",
    "revision": "329c3e40878544e9fef69618685640d4"
  },
  {
    "url": "icons/favicon144.png",
    "revision": "34351187312c1a80471c4c21e2047598"
  },
  {
    "url": "icons/favicon152.png",
    "revision": "90c5cedad4928d984deab2fb22bca560"
  },
  {
    "url": "icons/favicon168.png",
    "revision": "2bdfc32cf5a7eb36ee2f24874d2b94e7"
  },
  {
    "url": "icons/favicon192.png",
    "revision": "9255753a710234b3911f3e8d341c6fcf"
  },
  {
    "url": "icons/favicon256.png",
    "revision": "8ece81e372c66c9444863ee422e53d79"
  },
  {
    "url": "icons/favicon48.png",
    "revision": "0e418f58d529de871b7e539f42c93814"
  },
  {
    "url": "icons/favicon72.png",
    "revision": "3fef97ec24cf69afc5231f21f31b56e4"
  },
  {
    "url": "icons/favicon96.png",
    "revision": "0dd3942922f602d95535f5f3f201cf03"
  },
  {
    "url": "img/index.html",
    "revision": "f1f795c11e5834b9f97dea742aaa1a6b"
  },
  {
    "url": "index.html",
    "revision": "939619a66e11b8129b63287e3d74e651"
  },
  {
    "url": "posts/2018/09/16/git-commit-message-convention.html",
    "revision": "b8f1f6757adfcd7ef7d004da790a4849"
  },
  {
    "url": "posts/2019/07/01/maxout.html",
    "revision": "f19afb67f4cc71ff569ed6d8323c5eaa"
  },
  {
    "url": "posts/2019/08/16/hello-gcn.html",
    "revision": "f7010eb0a05e2670e7bb810123cb557e"
  },
  {
    "url": "posts/2019/10/21/moefy-your-vuepress-blog.html",
    "revision": "9baf764456277e4f26db41026b645c7d"
  },
  {
    "url": "posts/2019/10/26/git-collaboration.html",
    "revision": "6e7767fca46ef46af04637ec6ea8e906"
  },
  {
    "url": "posts/2020/03/22/simulate-anneal.html",
    "revision": "bbade5addf60704b364792ec9a055819"
  },
  {
    "url": "posts/2020/04/06/first-experience-for-manjaro.html",
    "revision": "419aaf38f82275e9ee88c75e8cbfd337"
  },
  {
    "url": "posts/2020/04/08/tensorflow-learning-phase-setting.html",
    "revision": "ea8e912be841d6006603423784a68ad7"
  },
  {
    "url": "posts/2020/05/25/gan-started.html",
    "revision": "cbd8bac87714e20b6027ea056c440a9b"
  },
  {
    "url": "posts/2020/06/12/use-git-filter-repo-clean-git-history.html",
    "revision": "9762bea209c73d1105b0ee8f9f287263"
  },
  {
    "url": "posts/2020/06/22/deploy-blog-using-github-action.html",
    "revision": "d4c8a88b7e02bbb18c24a3a6a6f5b510"
  },
  {
    "url": "posts/2021/01/31/javascript-prototype-chain.html",
    "revision": "3979e013b7e2aa7309e63236e861e9f9"
  },
  {
    "url": "posts/2021/02/10/proxy-and-vue3-reactivity.html",
    "revision": "c3eaaa50857aea11af70550d2f21b62c"
  },
  {
    "url": "posts/2022/01/21/lets-make-a-calculator-using-rust-and-llvm.html",
    "revision": "fb23061d1f39640f8c59cac4efee86dd"
  },
  {
    "url": "posts/2022/09/21/moefy-paddle-dx-improvements.html",
    "revision": "49aab63fa55281de4f8904c0e6554c8d"
  },
  {
    "url": "posts/2023/04/22/decomposing-torch-dynamo.html",
    "revision": "d983f7f644cb8e10de86d65551dd837b"
  },
  {
    "url": "posts/2023/08/27/python311-instruction-specializing.html",
    "revision": "a45b59a85b818c3dfe1d9690939d2bab"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "09198bbb2fe1e571e95ff8903b3c66d0"
  },
  {
    "url": "posts/categories/做点有趣的.html",
    "revision": "c846189376df53f14f098844b7369ef2"
  },
  {
    "url": "posts/categories/学点有用的.html",
    "revision": "61ae6395a9fdffe9d1650602531b05c9"
  },
  {
    "url": "posts/categories/想点没谱的.html",
    "revision": "0a405e86cc7434505ac235845d465b05"
  },
  {
    "url": "posts/categories/找点好玩的.html",
    "revision": "10b1dd997e7ded342356d87917e5e682"
  },
  {
    "url": "posts/index.html",
    "revision": "120ac242da984fd9c1ac6bff76d6f064"
  },
  {
    "url": "posts/tags/AST.html",
    "revision": "2d9d4b6d18dfd71d3c5f1ba192d71008"
  },
  {
    "url": "posts/tags/blog.html",
    "revision": "8fe5f7ddd9ed7421d34a1447e1db1cd5"
  },
  {
    "url": "posts/tags/ByteCode.html",
    "revision": "ccc9d2f98cba852576916b9c4a70a0b9"
  },
  {
    "url": "posts/tags/CI.html",
    "revision": "b2177b8d93d8878e386abd3917122b7d"
  },
  {
    "url": "posts/tags/Compiler.html",
    "revision": "41da38b3fcc95c54800e399dc07946e0"
  },
  {
    "url": "posts/tags/DL.html",
    "revision": "9fb5a66893dd43dd51bed41dcb5b8a80"
  },
  {
    "url": "posts/tags/DX.html",
    "revision": "15e6ff0e7232e858678cc39b5508844a"
  },
  {
    "url": "posts/tags/front end.html",
    "revision": "800cef399d3f5c824585ce54336bb23e"
  },
  {
    "url": "posts/tags/GAN.html",
    "revision": "47303c80bde800300f05923245f81599"
  },
  {
    "url": "posts/tags/GCN.html",
    "revision": "c4c29ab6a57cfd24353aad103effd751"
  },
  {
    "url": "posts/tags/Git.html",
    "revision": "4b00b90f08b889ec0667288b7f9ce141"
  },
  {
    "url": "posts/tags/GitHub.html",
    "revision": "415975562bd84c78020791306addeb18"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "d63c8237dba47111377d8e6aa45427e0"
  },
  {
    "url": "posts/tags/Interpreter.html",
    "revision": "c59c0aae4370cb477e88899abdbfbbbf"
  },
  {
    "url": "posts/tags/JavaScript.html",
    "revision": "944f8de8423bc51ad33625ecb29fc455"
  },
  {
    "url": "posts/tags/JIT.html",
    "revision": "52e85f91cf7c706d87e9a3c64edf21ae"
  },
  {
    "url": "posts/tags/Linux.html",
    "revision": "4942298d292af88c4926febf35deef51"
  },
  {
    "url": "posts/tags/LLVM.html",
    "revision": "a8b4cf0e63d2b9cfc362b0a8e9880e6a"
  },
  {
    "url": "posts/tags/Manjaro.html",
    "revision": "e0ae50fff88c2033b753560af7603910"
  },
  {
    "url": "posts/tags/ML.html",
    "revision": "180c4832e497454aca7218933fb53b79"
  },
  {
    "url": "posts/tags/OOC.html",
    "revision": "2ef481e96669eeddbd30d06e77669595"
  },
  {
    "url": "posts/tags/Optimizer.html",
    "revision": "d2bf4add4099bbe39ead9a75c61f8527"
  },
  {
    "url": "posts/tags/PaddlePaddle.html",
    "revision": "8822643fba700a6864d3250427e43ac5"
  },
  {
    "url": "posts/tags/Python.html",
    "revision": "aaa16ef4e6a9ca7bd3e64dcd72826b73"
  },
  {
    "url": "posts/tags/PyTorch.html",
    "revision": "af290c88f176fff0ec5c5335b5606a3d"
  },
  {
    "url": "posts/tags/refactoring.html",
    "revision": "2d4deca1c92cce1bb22fee349bba3cb0"
  },
  {
    "url": "posts/tags/Rust.html",
    "revision": "e260f7b2c1ec7b513df9d389ed9cd606"
  },
  {
    "url": "posts/tags/TensorFlow.html",
    "revision": "d477b20c5d2bc95c35215078809fea90"
  },
  {
    "url": "posts/tags/VCA.html",
    "revision": "e5181b88be32b1b644777559ebf7edaa"
  },
  {
    "url": "posts/tags/Virtual Machine.html",
    "revision": "3991963034259137325e19be1311074d"
  },
  {
    "url": "posts/tags/Vuejs.html",
    "revision": "2483241e3601b4d58b87bfb617cae2d2"
  },
  {
    "url": "posts/tags/VuePress.html",
    "revision": "25f3947addf0f07eb3667a726dc09bd0"
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
