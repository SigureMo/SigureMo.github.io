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
    "revision": "63dc422db609f4614815e9176d30efc5"
  },
  {
    "url": "about.html",
    "revision": "0d326a016e1d616d0cedb2229c960a5d"
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
    "url": "assets/js/12.89455361.js",
    "revision": "ac378bc607778b546086bba6228cfa32"
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
    "url": "assets/js/15.172bcb0e.js",
    "revision": "958d116678f9614537304163b62aa8c5"
  },
  {
    "url": "assets/js/16.952a65ad.js",
    "revision": "9413660d0ccdebadc0df354a4769beca"
  },
  {
    "url": "assets/js/17.46f08569.js",
    "revision": "a68ee5825bd2c51d02582142286bd64a"
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
    "url": "assets/js/21.94eb6842.js",
    "revision": "4e0fed81d1f4df3258e0b20cdb96a633"
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
    "url": "assets/js/33.513f2c03.js",
    "revision": "2e9ce7a76155893b9ad4a616312c7162"
  },
  {
    "url": "assets/js/34.aa094580.js",
    "revision": "cb7b872ea14225d7d48176cbee51eb41"
  },
  {
    "url": "assets/js/35.07f8c616.js",
    "revision": "fa06e50f6e480221860ed7023c7c38f2"
  },
  {
    "url": "assets/js/36.4f012260.js",
    "revision": "e655b2758abab820db58512d51e7d98d"
  },
  {
    "url": "assets/js/37.e127d730.js",
    "revision": "bfd063a44222a14f4b8e833e71a915c9"
  },
  {
    "url": "assets/js/38.c1a52380.js",
    "revision": "62b04bd3c97bd7e7c617b02628188233"
  },
  {
    "url": "assets/js/39.d4fc3211.js",
    "revision": "f1b593846232d5776e221e13c72b34cf"
  },
  {
    "url": "assets/js/4.948a90b8.js",
    "revision": "93303d5d6992495f8f2d05cada8a63e0"
  },
  {
    "url": "assets/js/40.fd908510.js",
    "revision": "2099c1a9e9421ab6b42ae7f3d72a64a3"
  },
  {
    "url": "assets/js/41.fcbb3272.js",
    "revision": "d03e74e40113a0f52d19c73f62049892"
  },
  {
    "url": "assets/js/42.be4a28d4.js",
    "revision": "bc019e1d3465c2ece2aeb523d8081214"
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
    "url": "assets/js/app.dba29b73.js",
    "revision": "d6757b82b567e37556e9d2dbe8ff8cb4"
  },
  {
    "url": "avatar.jpg",
    "revision": "a0f3f085df0623e5f87ed60c23d99fae"
  },
  {
    "url": "friends.html",
    "revision": "bcffbbcb3807426a6edbbcaa86a26d67"
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
    "revision": "7ba5c5f64cb3bce433d7c7aa841eaa25"
  },
  {
    "url": "index.html",
    "revision": "a7ab8a63d385f4c571a0a3f7cdf5bc97"
  },
  {
    "url": "posts/2018/09/16/git-commit-message-convention.html",
    "revision": "573d19fa249278d9345a08527c842cbd"
  },
  {
    "url": "posts/2019/07/01/maxout.html",
    "revision": "2135d0c9053f2e241750af7fd9184222"
  },
  {
    "url": "posts/2019/08/16/hello-gcn.html",
    "revision": "0bd76e62bd7c4a7b86536a5c9b758681"
  },
  {
    "url": "posts/2019/10/21/moefy-your-vuepress-blog.html",
    "revision": "bf496f4b90912e610682c1b1b6fcecb3"
  },
  {
    "url": "posts/2019/10/26/git-collaboration.html",
    "revision": "9b0ccc5e5212de01e55d3b1284675f94"
  },
  {
    "url": "posts/2020/03/22/simulate-anneal.html",
    "revision": "283d0bd8c11cf137f34cacd8c81ed352"
  },
  {
    "url": "posts/2020/04/06/first-experience-for-manjaro.html",
    "revision": "71e64a0a4c8ed00f449d70d41412a7fe"
  },
  {
    "url": "posts/2020/04/08/tensorflow-learning-phase-setting.html",
    "revision": "f773eaa6ed066fb432e1fc751dcb7bc9"
  },
  {
    "url": "posts/2020/05/25/gan-started.html",
    "revision": "80d52c6ff9796cd5cb00ac93629da06d"
  },
  {
    "url": "posts/2020/06/12/use-git-filter-repo-clean-git-history.html",
    "revision": "b03cc0c0ee9d9003a31d02b7e2fd8bdd"
  },
  {
    "url": "posts/2020/06/22/deploy-blog-using-github-action.html",
    "revision": "e6853e6e88fe0f9ead2b681798f92067"
  },
  {
    "url": "posts/2021/01/31/javascript-prototype-chain.html",
    "revision": "f77c8a60c0a4c660aaa13ab8d0b30c87"
  },
  {
    "url": "posts/2021/02/10/proxy-and-vue3-reactivity.html",
    "revision": "44286e3b3303acbbe8ef40c450c5e03b"
  },
  {
    "url": "posts/2022/01/21/lets-make-a-calculator-using-rust-and-llvm.html",
    "revision": "b3dc71ef59b565f6bfffdd7d8c99e9ce"
  },
  {
    "url": "posts/2022/09/21/moefy-paddle-dx-improvements.html",
    "revision": "48217be427c49a004c1dbcacec06d1ac"
  },
  {
    "url": "posts/2023/04/22/decomposing-torch-dynamo.html",
    "revision": "88276261f9954cf2f1ecf72df4612b0f"
  },
  {
    "url": "posts/2023/08/27/python311-instruction-specializing.html",
    "revision": "69e48e6e7972baaf7eab953716ad07a9"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "040736d6ea4d83697896438233977bde"
  },
  {
    "url": "posts/categories/做点有趣的.html",
    "revision": "c446f84fc3c3e49b6fa27eacd387d35f"
  },
  {
    "url": "posts/categories/学点有用的.html",
    "revision": "1b6d30df9479c15e2acc6d1275c0e064"
  },
  {
    "url": "posts/categories/想点没谱的.html",
    "revision": "0a8c0f918385398b92420c10eafd7fde"
  },
  {
    "url": "posts/categories/找点好玩的.html",
    "revision": "2ce76270694a538674223f8874eb4156"
  },
  {
    "url": "posts/index.html",
    "revision": "3d185a0a2fc35312215af657e049589d"
  },
  {
    "url": "posts/tags/AST.html",
    "revision": "b45d1228c84f819c197a3e05e36fe63c"
  },
  {
    "url": "posts/tags/blog.html",
    "revision": "7ea2720a05115a195ff1cef2ac815247"
  },
  {
    "url": "posts/tags/ByteCode.html",
    "revision": "c3335deb153072825617822e19fcf051"
  },
  {
    "url": "posts/tags/CI.html",
    "revision": "f1a81f2387819a9327f3859918a8e31b"
  },
  {
    "url": "posts/tags/Compiler.html",
    "revision": "68948c28e6c8ff03c6bcd4c7debb7d07"
  },
  {
    "url": "posts/tags/DL.html",
    "revision": "e44af2b42bce95d57a9aa1cf08c097c8"
  },
  {
    "url": "posts/tags/DX.html",
    "revision": "3dd3c12950fd97c8416f2555bbb72ef1"
  },
  {
    "url": "posts/tags/front end.html",
    "revision": "db16789b57ebdb1270a5a4c6ddae4479"
  },
  {
    "url": "posts/tags/GAN.html",
    "revision": "d83ea3c15e2a5dd23a66a291ddaadbb4"
  },
  {
    "url": "posts/tags/GCN.html",
    "revision": "4cea7f9864f76aa1e09d6405dad3a919"
  },
  {
    "url": "posts/tags/Git.html",
    "revision": "7bcf48ba13d2017e0c6ab16c5794c014"
  },
  {
    "url": "posts/tags/GitHub.html",
    "revision": "a0ce6e1f9051455bfc3eb9d8916a20de"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "0e036aa650d09a1c707f05511b729963"
  },
  {
    "url": "posts/tags/Interpreter.html",
    "revision": "958084b443a43874e63508820cf1fcd4"
  },
  {
    "url": "posts/tags/JavaScript.html",
    "revision": "ccd4b0a13c22fc9b40677498bd956dbb"
  },
  {
    "url": "posts/tags/JIT.html",
    "revision": "187b3163e1ef88b592dd84eaf4977534"
  },
  {
    "url": "posts/tags/Linux.html",
    "revision": "1e7f67f074d12528f47f82d1090d9d88"
  },
  {
    "url": "posts/tags/LLVM.html",
    "revision": "4106b66e7a41d025a3b02db707fdb7dc"
  },
  {
    "url": "posts/tags/Manjaro.html",
    "revision": "c8520b41dc87c7315a46ce604224944a"
  },
  {
    "url": "posts/tags/ML.html",
    "revision": "b98f6598d11ddfb600f9ec7bb2c69530"
  },
  {
    "url": "posts/tags/OOC.html",
    "revision": "8f3a0fd62ade00b90ba749859c2831fa"
  },
  {
    "url": "posts/tags/Optimizer.html",
    "revision": "619757016519207701c8c405b32ab22e"
  },
  {
    "url": "posts/tags/PaddlePaddle.html",
    "revision": "592cce19bb14a9d9178ef11683e20783"
  },
  {
    "url": "posts/tags/Python.html",
    "revision": "cf55a3bb05a41a11eb512aa41931bc2a"
  },
  {
    "url": "posts/tags/PyTorch.html",
    "revision": "60c1db4ba9639606dd5eb1bf6cf78694"
  },
  {
    "url": "posts/tags/refactoring.html",
    "revision": "1b92be00d6b542a69a31bdcd845b7a14"
  },
  {
    "url": "posts/tags/Rust.html",
    "revision": "fe839a0954ec237c319aa82096c4d97e"
  },
  {
    "url": "posts/tags/TensorFlow.html",
    "revision": "f23752277edf6b65ce230e8b2fddc33d"
  },
  {
    "url": "posts/tags/VCA.html",
    "revision": "3b6beea796a2c13d42ad1746190d131c"
  },
  {
    "url": "posts/tags/Virtual Machine.html",
    "revision": "cf82c3999a8ba6dfdfbf06dcbf9d6365"
  },
  {
    "url": "posts/tags/Vuejs.html",
    "revision": "2cd53bc3646550ec28e65156566c62fe"
  },
  {
    "url": "posts/tags/VuePress.html",
    "revision": "b1f011618c72f3e9a69fabe4269cfbe2"
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
