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
    "revision": "05a4f03afb77f00b46c456af026904b8"
  },
  {
    "url": "about.html",
    "revision": "85882ff4b3f6220f3e0d7c7911ffd38a"
  },
  {
    "url": "assets/css/0.styles.05297297.css",
    "revision": "83cd7b8ea5a50a010633914e0b96fc02"
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
    "url": "assets/js/1.68ae3170.js",
    "revision": "81c0a297d788635c3922b2278cbe4c0e"
  },
  {
    "url": "assets/js/10.1e435be9.js",
    "revision": "c2b51b7e04b9e6628d962d7dc697d658"
  },
  {
    "url": "assets/js/12.c0af932f.js",
    "revision": "d64cde466492f6af9fc8a4fc656adb4d"
  },
  {
    "url": "assets/js/13.85700a7a.js",
    "revision": "8545e67598a846bb02055bee5f50deb1"
  },
  {
    "url": "assets/js/14.e2b68c38.js",
    "revision": "1d19377382a5b1c8bb0d5e033f3bf5bc"
  },
  {
    "url": "assets/js/15.cd7d0023.js",
    "revision": "567ddc794908715d8be1bb76b5a90d5c"
  },
  {
    "url": "assets/js/16.82bbe83b.js",
    "revision": "def1c4ad3fb61c7d3e012c87b7c248c8"
  },
  {
    "url": "assets/js/17.4ab2c50a.js",
    "revision": "ac88a3d3b4244efed3075000c5d0490a"
  },
  {
    "url": "assets/js/18.d4a6242c.js",
    "revision": "408d2f7691909b93d8cbd211b44461d6"
  },
  {
    "url": "assets/js/19.f4b6b47b.js",
    "revision": "932f4383a630d68da90ca7c20fd70fe1"
  },
  {
    "url": "assets/js/2.b57299c2.js",
    "revision": "610122234315d28372e7373dc87c6bcc"
  },
  {
    "url": "assets/js/20.0ef4dc55.js",
    "revision": "dbbfd5b66593a918c5314b06a948daf9"
  },
  {
    "url": "assets/js/21.a27ab37f.js",
    "revision": "c6b4a5f1c9e8e4b6282c316051e6d6ff"
  },
  {
    "url": "assets/js/22.714f03ef.js",
    "revision": "1ff4b3e37b629ec715b3fa0a0fb8ca51"
  },
  {
    "url": "assets/js/23.1ee2d532.js",
    "revision": "21d6414d26c53183d6aa45aa03a29e58"
  },
  {
    "url": "assets/js/24.72556630.js",
    "revision": "7eea67b6596247f7309c331465627ed5"
  },
  {
    "url": "assets/js/25.3ac123bf.js",
    "revision": "a5008691ed1bef85152fa67d85668f7a"
  },
  {
    "url": "assets/js/26.1ec0b39f.js",
    "revision": "fdfacd1eaa5b2602468c0e20022d4491"
  },
  {
    "url": "assets/js/27.f8393a02.js",
    "revision": "10f0dfe83790ea2d843aec5a000f2ffc"
  },
  {
    "url": "assets/js/28.8f849984.js",
    "revision": "6145c0be82ef5827e37692eb65aa82f6"
  },
  {
    "url": "assets/js/29.039116b5.js",
    "revision": "33fbea7024fef64401914a54919573bb"
  },
  {
    "url": "assets/js/3.ae427081.js",
    "revision": "a2bcf296985471a0582ebf7d740385d9"
  },
  {
    "url": "assets/js/30.1e52f9f5.js",
    "revision": "a2c2cc3b79deaa84cd9540fa32b2d4ec"
  },
  {
    "url": "assets/js/31.e892cd87.js",
    "revision": "a4c6a144176194803795c407204b2a38"
  },
  {
    "url": "assets/js/32.72658ddb.js",
    "revision": "9a82976241030eca91b3573d02bfae0e"
  },
  {
    "url": "assets/js/33.cc770e0c.js",
    "revision": "583a1be9e160e34a8eff25a3a36aec2b"
  },
  {
    "url": "assets/js/34.aa094580.js",
    "revision": "cb7b872ea14225d7d48176cbee51eb41"
  },
  {
    "url": "assets/js/35.59948474.js",
    "revision": "2f4bf4660b669293bb0d40bc3ea3d68f"
  },
  {
    "url": "assets/js/36.4f012260.js",
    "revision": "e655b2758abab820db58512d51e7d98d"
  },
  {
    "url": "assets/js/37.899d1ba5.js",
    "revision": "8ab91a4ea3955a9d13042895083f0eed"
  },
  {
    "url": "assets/js/38.4914ed55.js",
    "revision": "65439fcca4eb758992232670bc71f8a6"
  },
  {
    "url": "assets/js/39.51b1e665.js",
    "revision": "1b12a3c33f230ef919937646ae551d34"
  },
  {
    "url": "assets/js/4.948a90b8.js",
    "revision": "93303d5d6992495f8f2d05cada8a63e0"
  },
  {
    "url": "assets/js/40.36a068fb.js",
    "revision": "a3a55d6d62eae0498eb1495b727e18f3"
  },
  {
    "url": "assets/js/41.e6a048b2.js",
    "revision": "18a50f7f97dae604e622a9ab6febe72f"
  },
  {
    "url": "assets/js/42.1ea8b94a.js",
    "revision": "e13eba4fb5ac3cc28f4e7b8b21a1df8c"
  },
  {
    "url": "assets/js/43.62f3e97a.js",
    "revision": "73c9ab608498d26c4c9d6beb0076c373"
  },
  {
    "url": "assets/js/44.94ff5b23.js",
    "revision": "c68eee8fa326fc4e524fa24e10d493fb"
  },
  {
    "url": "assets/js/45.c041d2ad.js",
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
    "url": "assets/js/5.c2ed0f78.js",
    "revision": "57aca3e569e80aadd713695ce952e560"
  },
  {
    "url": "assets/js/6.65e266ff.js",
    "revision": "67951b8a01986229b8067d085704db77"
  },
  {
    "url": "assets/js/7.1b24fae2.js",
    "revision": "3578762f8ac5cda0c07cd287738151ee"
  },
  {
    "url": "assets/js/8.c643a566.js",
    "revision": "42e2f5f8dcaa8a69d67b2a5f88a87612"
  },
  {
    "url": "assets/js/9.19f160bd.js",
    "revision": "ae3d5e5c6e9c75588e34815148e0cdb7"
  },
  {
    "url": "assets/js/app.d450e431.js",
    "revision": "f52aa282e5a95d303ceb61d491e8acc2"
  },
  {
    "url": "avatar.jpg",
    "revision": "a0f3f085df0623e5f87ed60c23d99fae"
  },
  {
    "url": "friends.html",
    "revision": "46262d759cbd59ee619e78d2bb77bbe1"
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
    "revision": "02cffef061004a4447a7cc52c9cd3848"
  },
  {
    "url": "index.html",
    "revision": "b10c2145cc9c8a607674ed436e0ec484"
  },
  {
    "url": "posts/2018/09/16/git-commit-message-convention.html",
    "revision": "f187b51afe4cdcc46e11d3bfdbd8454d"
  },
  {
    "url": "posts/2019/07/01/maxout.html",
    "revision": "49511cd0c841ddf8c7688c0bb3dea4ba"
  },
  {
    "url": "posts/2019/08/16/hello-gcn.html",
    "revision": "f04c5414d7912124b8704b40a392b359"
  },
  {
    "url": "posts/2019/10/21/moefy-your-vuepress-blog.html",
    "revision": "a2b68c353ff80804a8f68e6e498bcb68"
  },
  {
    "url": "posts/2019/10/26/git-collaboration.html",
    "revision": "55ec75f4d0809081b93872b6e9e96bbe"
  },
  {
    "url": "posts/2020/03/22/simulate-anneal.html",
    "revision": "586c13a0c7796e8302a53e4f1f486d16"
  },
  {
    "url": "posts/2020/04/06/first-experience-for-manjaro.html",
    "revision": "f972a994c3111322c705509d07ad30a5"
  },
  {
    "url": "posts/2020/04/08/tensorflow-learning-phase-setting.html",
    "revision": "376ac2e64c21640db35ee10531f8e96e"
  },
  {
    "url": "posts/2020/05/25/gan-started.html",
    "revision": "8909f39b6b04b106abfd38548d31cdf3"
  },
  {
    "url": "posts/2020/06/12/use-git-filter-repo-clean-git-history.html",
    "revision": "8057803ca8d0d1aa92532ced0b814d39"
  },
  {
    "url": "posts/2020/06/22/deploy-blog-using-github-action.html",
    "revision": "ae6b75db94a6da812b468442817ef22a"
  },
  {
    "url": "posts/2021/01/31/javascript-prototype-chain.html",
    "revision": "bc5ff9a485827ce223a8d52a33290c26"
  },
  {
    "url": "posts/2021/02/10/proxy-and-vue3-reactivity.html",
    "revision": "b085ace3bc651fd58ad2f888d47207ff"
  },
  {
    "url": "posts/2022/01/21/lets-make-a-calculator-using-rust-and-llvm.html",
    "revision": "35c2de1e8befbfd55c8eaa14a9876dbd"
  },
  {
    "url": "posts/2022/09/21/moefy-paddle-dx-improvements.html",
    "revision": "cf25f799f612c99f451d438a31e7008d"
  },
  {
    "url": "posts/2023/04/22/decomposing-torch-dynamo.html",
    "revision": "e244772eaf07eccdd39fea00a398926b"
  },
  {
    "url": "posts/2023/08/27/python311-instruction-specializing.html",
    "revision": "622e541ee3a1e2eba360d69d45ff32bc"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "a015376cc1a0b397d8a756d2a4151c2f"
  },
  {
    "url": "posts/categories/做点有趣的.html",
    "revision": "65463a242b74ff09736a1878384b7e0e"
  },
  {
    "url": "posts/categories/学点有用的.html",
    "revision": "70219600ddca5bd3e271a80b6124c2fc"
  },
  {
    "url": "posts/categories/想点没谱的.html",
    "revision": "e3c4140617b4db1dca36d2f54790c3ae"
  },
  {
    "url": "posts/categories/找点好玩的.html",
    "revision": "80d5963d30dd39f57710e4906c96ae29"
  },
  {
    "url": "posts/index.html",
    "revision": "79dc84678f6adeb4b1fa48fc44cfaa99"
  },
  {
    "url": "posts/tags/AST.html",
    "revision": "bd92394363e0246be2a49a6e85edb380"
  },
  {
    "url": "posts/tags/blog.html",
    "revision": "fb93ed145f766b5d3ae4d4b69e26a711"
  },
  {
    "url": "posts/tags/ByteCode.html",
    "revision": "ed8e596b9c04c2d121e76f22847d01eb"
  },
  {
    "url": "posts/tags/CI.html",
    "revision": "58f90627879b2f1cd199aece1df0e5e4"
  },
  {
    "url": "posts/tags/Compiler.html",
    "revision": "44aefea32d8ab3181aa7f7ebdcab182f"
  },
  {
    "url": "posts/tags/DL.html",
    "revision": "c85db0bf63c18e51d431aba26e32844e"
  },
  {
    "url": "posts/tags/DX.html",
    "revision": "91bf8fde28cfbcc37516b13ec768a9d2"
  },
  {
    "url": "posts/tags/front end.html",
    "revision": "78c425f56404579bfd2f866ec88413b8"
  },
  {
    "url": "posts/tags/GAN.html",
    "revision": "70555de4f2c0e3cc8a8c88d4f642ebe8"
  },
  {
    "url": "posts/tags/GCN.html",
    "revision": "db1736ae419bf5c90a37c4e750a67ac5"
  },
  {
    "url": "posts/tags/Git.html",
    "revision": "457bb6df4f7f326518a5b4c7bde0f844"
  },
  {
    "url": "posts/tags/GitHub.html",
    "revision": "140b7d632feb1585fa20827ed327090f"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "8fd4b55ceb5985c17edc1a743146f37f"
  },
  {
    "url": "posts/tags/Interpreter.html",
    "revision": "fec4966aa9b5cd66770f38c19b206327"
  },
  {
    "url": "posts/tags/JavaScript.html",
    "revision": "d9ec73a694775ae49983ea98d33c71dc"
  },
  {
    "url": "posts/tags/JIT.html",
    "revision": "ca3dd44e56981c5baa523a6efddcb7d2"
  },
  {
    "url": "posts/tags/Linux.html",
    "revision": "81146aa90e547ca9af6641d0de8f2105"
  },
  {
    "url": "posts/tags/LLVM.html",
    "revision": "af573a390d12a7c2112161f2cfcc5b51"
  },
  {
    "url": "posts/tags/Manjaro.html",
    "revision": "d76f5f6dd33ceb1254a3f4cca4f895a6"
  },
  {
    "url": "posts/tags/ML.html",
    "revision": "384eb25c9cfa6d86ac9dc276316627ce"
  },
  {
    "url": "posts/tags/OOC.html",
    "revision": "ad721e0c5e5436d10199a705a69a4508"
  },
  {
    "url": "posts/tags/Optimizer.html",
    "revision": "fcc718e45b92ce9aea4b198d3b35f412"
  },
  {
    "url": "posts/tags/PaddlePaddle.html",
    "revision": "d5e739b9e463c373c1b3fb1c61a9eccd"
  },
  {
    "url": "posts/tags/Python.html",
    "revision": "8d65812bb96e189c7ddf11797764a64a"
  },
  {
    "url": "posts/tags/PyTorch.html",
    "revision": "3f64a0f6bfa57496ceac551a693a312d"
  },
  {
    "url": "posts/tags/refactoring.html",
    "revision": "1d36b90849acf9921c3dffd390cd2922"
  },
  {
    "url": "posts/tags/Rust.html",
    "revision": "3172264d0e98c85b85ff45b2d9ee9227"
  },
  {
    "url": "posts/tags/TensorFlow.html",
    "revision": "eab724cdebb2137e7824e4014e612ab7"
  },
  {
    "url": "posts/tags/VCA.html",
    "revision": "72383fd392abe32ac3539dca1e2f7f3e"
  },
  {
    "url": "posts/tags/Virtual Machine.html",
    "revision": "2192377779f264b85ee67f6f3b754e34"
  },
  {
    "url": "posts/tags/Vuejs.html",
    "revision": "1b1ad94269302edbf1891b1df571ff8f"
  },
  {
    "url": "posts/tags/VuePress.html",
    "revision": "e6f26ba094242cd1803e31e7a5a402bb"
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
