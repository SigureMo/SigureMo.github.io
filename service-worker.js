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
    "revision": "0bddc581c6c05d2f7a049dcf89c6c086"
  },
  {
    "url": "about.html",
    "revision": "f352bd541301e75cf8d8adb1324416b6"
  },
  {
    "url": "assets/css/0.styles.6cfa3334.css",
    "revision": "7433804e55fb2a49ed5ced3ac7634fff"
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
    "url": "assets/js/1.a6393b41.js",
    "revision": "044a6b64fc3b07931759f916a76ebdd5"
  },
  {
    "url": "assets/js/10.7592cca1.js",
    "revision": "c2b51b7e04b9e6628d962d7dc697d658"
  },
  {
    "url": "assets/js/12.b4af0b71.js",
    "revision": "8257098c8f7afe5f6a5b22410bead58b"
  },
  {
    "url": "assets/js/13.e2907dbf.js",
    "revision": "83e9b765209a062e2bb1decca397d985"
  },
  {
    "url": "assets/js/14.9a5c0dc4.js",
    "revision": "b73d96bd9f7934606296207466704427"
  },
  {
    "url": "assets/js/15.f8dd26ad.js",
    "revision": "e391a90885b465cb371113e0ba14e3d2"
  },
  {
    "url": "assets/js/16.e05a9e6c.js",
    "revision": "50b8fda2c911bd5648e0d39067cf1fa0"
  },
  {
    "url": "assets/js/17.9c8878d4.js",
    "revision": "a68ee5825bd2c51d02582142286bd64a"
  },
  {
    "url": "assets/js/18.8ea0da4a.js",
    "revision": "408d2f7691909b93d8cbd211b44461d6"
  },
  {
    "url": "assets/js/19.fcb6ea74.js",
    "revision": "932f4383a630d68da90ca7c20fd70fe1"
  },
  {
    "url": "assets/js/2.30d1ed6d.js",
    "revision": "2e49f2c400a4674830a0f61eee8e4a21"
  },
  {
    "url": "assets/js/20.b1cf5ba8.js",
    "revision": "dbbfd5b66593a918c5314b06a948daf9"
  },
  {
    "url": "assets/js/21.a9e3db56.js",
    "revision": "f2aa2caae603e0beb6d80029567a1cec"
  },
  {
    "url": "assets/js/22.f4c61f0d.js",
    "revision": "1ff4b3e37b629ec715b3fa0a0fb8ca51"
  },
  {
    "url": "assets/js/23.cbe99952.js",
    "revision": "21d6414d26c53183d6aa45aa03a29e58"
  },
  {
    "url": "assets/js/24.a1606c48.js",
    "revision": "7eea67b6596247f7309c331465627ed5"
  },
  {
    "url": "assets/js/25.bbd6ced0.js",
    "revision": "4710439b9198bb76914ac676487b5b9c"
  },
  {
    "url": "assets/js/26.2bba8445.js",
    "revision": "447e84b4ed66c786576494fe35bc8160"
  },
  {
    "url": "assets/js/27.114e26a2.js",
    "revision": "806d81cc53b3970e57c6a377cf1da985"
  },
  {
    "url": "assets/js/28.8e4e08ad.js",
    "revision": "6145c0be82ef5827e37692eb65aa82f6"
  },
  {
    "url": "assets/js/29.67231543.js",
    "revision": "33fbea7024fef64401914a54919573bb"
  },
  {
    "url": "assets/js/3.0cea4966.js",
    "revision": "e48e205a02c6f38f64c1c875e1647ca2"
  },
  {
    "url": "assets/js/30.136012ad.js",
    "revision": "a2c2cc3b79deaa84cd9540fa32b2d4ec"
  },
  {
    "url": "assets/js/31.3142c6fd.js",
    "revision": "a4c6a144176194803795c407204b2a38"
  },
  {
    "url": "assets/js/32.52b2edd5.js",
    "revision": "9a82976241030eca91b3573d02bfae0e"
  },
  {
    "url": "assets/js/33.4a293402.js",
    "revision": "2e9ce7a76155893b9ad4a616312c7162"
  },
  {
    "url": "assets/js/34.c2858665.js",
    "revision": "cb7b872ea14225d7d48176cbee51eb41"
  },
  {
    "url": "assets/js/35.0e8d2a08.js",
    "revision": "c0b13ff83b764d380a1aeaa01014c991"
  },
  {
    "url": "assets/js/36.9a0416ba.js",
    "revision": "e655b2758abab820db58512d51e7d98d"
  },
  {
    "url": "assets/js/37.58652e0e.js",
    "revision": "8ab91a4ea3955a9d13042895083f0eed"
  },
  {
    "url": "assets/js/38.819cf934.js",
    "revision": "62b04bd3c97bd7e7c617b02628188233"
  },
  {
    "url": "assets/js/39.94ef84dd.js",
    "revision": "30b5b1db302b4ef5647b3e045a949aa9"
  },
  {
    "url": "assets/js/4.23db01e2.js",
    "revision": "9a5df6afa1b29fb67cc354730857622b"
  },
  {
    "url": "assets/js/40.d8eeb581.js",
    "revision": "2099c1a9e9421ab6b42ae7f3d72a64a3"
  },
  {
    "url": "assets/js/41.1f7183eb.js",
    "revision": "d80699371c57cb29d63a09c94919090f"
  },
  {
    "url": "assets/js/42.2af9f15d.js",
    "revision": "e13eba4fb5ac3cc28f4e7b8b21a1df8c"
  },
  {
    "url": "assets/js/43.97628593.js",
    "revision": "a9d293e5bb8c2fd9b589cc77be900542"
  },
  {
    "url": "assets/js/44.6e5d9604.js",
    "revision": "19e38314e9475f5b15d870f4404ad19b"
  },
  {
    "url": "assets/js/45.c910c9a1.js",
    "revision": "0383705a90325863e6ce081f241c2245"
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
    "url": "assets/js/5.ba1983e9.js",
    "revision": "57aca3e569e80aadd713695ce952e560"
  },
  {
    "url": "assets/js/6.a1960097.js",
    "revision": "67951b8a01986229b8067d085704db77"
  },
  {
    "url": "assets/js/7.12977d8c.js",
    "revision": "15ba78e88bfbe501e1f45cb72762210a"
  },
  {
    "url": "assets/js/8.5cd3753c.js",
    "revision": "d035616bbc837d61c64749dbe2302920"
  },
  {
    "url": "assets/js/9.b1c97859.js",
    "revision": "ae3d5e5c6e9c75588e34815148e0cdb7"
  },
  {
    "url": "assets/js/app.c6a87883.js",
    "revision": "5cb72f9f19ff9fc68f4034689046c2a4"
  },
  {
    "url": "avatar.jpg",
    "revision": "a0f3f085df0623e5f87ed60c23d99fae"
  },
  {
    "url": "friends.html",
    "revision": "8b7255d5c18e5b18063316f810c8a242"
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
    "revision": "5beea29d5fa8014f19123e9baec4b916"
  },
  {
    "url": "index.html",
    "revision": "baf9f884ce688fd8c7f4abc73296d9c4"
  },
  {
    "url": "posts/2018/09/16/git-commit-message-convention.html",
    "revision": "aef4a68aeb80dbc1eb35b458b124a492"
  },
  {
    "url": "posts/2019/07/01/maxout.html",
    "revision": "663bad02a2e2ac0ba42ec76f7ab3a4ff"
  },
  {
    "url": "posts/2019/08/16/hello-gcn.html",
    "revision": "d218f07f56b85723043e356365160cc2"
  },
  {
    "url": "posts/2019/10/21/moefy-your-vuepress-blog.html",
    "revision": "574fe3d0641b44d9948047dd75bf5e64"
  },
  {
    "url": "posts/2019/10/26/git-collaboration.html",
    "revision": "999eeb1e27c9261d0cf6b84a2e5db066"
  },
  {
    "url": "posts/2020/03/22/simulate-anneal.html",
    "revision": "c405f4ea6e9f8b3939d5d3698a5e6193"
  },
  {
    "url": "posts/2020/04/06/first-experience-for-manjaro.html",
    "revision": "7fb0f3654a2e5d3ad082af630b77c2dc"
  },
  {
    "url": "posts/2020/04/08/tensorflow-learning-phase-setting.html",
    "revision": "44f8d6f261e4265f6d20ceef0aa9800c"
  },
  {
    "url": "posts/2020/05/25/gan-started.html",
    "revision": "a5c1a0093f7d8b72142320ff2585d9dd"
  },
  {
    "url": "posts/2020/06/12/use-git-filter-repo-clean-git-history.html",
    "revision": "f4eb6371f3be501f62cf4f6081e86850"
  },
  {
    "url": "posts/2020/06/22/deploy-blog-using-github-action.html",
    "revision": "4df647851a4f5bd640cca10a3880defc"
  },
  {
    "url": "posts/2021/01/31/javascript-prototype-chain.html",
    "revision": "14a0d413c07bf2d3e3e776bcd1388713"
  },
  {
    "url": "posts/2021/02/10/proxy-and-vue3-reactivity.html",
    "revision": "35631274d5811b45682cd9f9bb3323b9"
  },
  {
    "url": "posts/2022/01/21/lets-make-a-calculator-using-rust-and-llvm.html",
    "revision": "fd4e5658d42edb5d1c1dc05f42ca0454"
  },
  {
    "url": "posts/2022/09/21/moefy-paddle-dx-improvements.html",
    "revision": "63a415a4e47e944bffc813c06aab8bc2"
  },
  {
    "url": "posts/2023/04/22/decomposing-torch-dynamo.html",
    "revision": "03354fdaaf36e68b11a472f879303813"
  },
  {
    "url": "posts/2023/08/27/python311-instruction-specializing.html",
    "revision": "845dc14c6823dbd24abb25cc86b00ef7"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "c789a43096c610cea1702de98b4baf9a"
  },
  {
    "url": "posts/categories/做点有趣的.html",
    "revision": "4ce8d61f22b64bc29f8681ccc65c204f"
  },
  {
    "url": "posts/categories/学点有用的.html",
    "revision": "41c099ca73eb47223d95c91e723c5d97"
  },
  {
    "url": "posts/categories/想点没谱的.html",
    "revision": "ac73ff5db1981cb2e5c42d5ad963975c"
  },
  {
    "url": "posts/categories/找点好玩的.html",
    "revision": "bbc930ae4470bbf20164e07f0302d35a"
  },
  {
    "url": "posts/index.html",
    "revision": "bead9cdce6f518463605b3ebfdfcbccd"
  },
  {
    "url": "posts/tags/AST.html",
    "revision": "58cafd5b5c30b9f97416a2fe4f168313"
  },
  {
    "url": "posts/tags/blog.html",
    "revision": "2c8bc20190f7c87f8eebde508eacff41"
  },
  {
    "url": "posts/tags/ByteCode.html",
    "revision": "915a2556dad59cb814d7037327922fa6"
  },
  {
    "url": "posts/tags/CI.html",
    "revision": "3bb06e507e4fb9a44e6a679ff3682bb0"
  },
  {
    "url": "posts/tags/Compiler.html",
    "revision": "65e22e1e0eba2c2ad1d33158bb3e3ef1"
  },
  {
    "url": "posts/tags/DL.html",
    "revision": "a31ad3bca5381ac51922ba14c2d43c98"
  },
  {
    "url": "posts/tags/DX.html",
    "revision": "4afde7e5159f5a1c76d78b41224a2cb0"
  },
  {
    "url": "posts/tags/front end.html",
    "revision": "ca64a36a16a2c52ed8746520706e5198"
  },
  {
    "url": "posts/tags/GAN.html",
    "revision": "72b9b59a54ee464fd10e3374a5301fc0"
  },
  {
    "url": "posts/tags/GCN.html",
    "revision": "ededd05d1a2e884e45fa785afac45ad6"
  },
  {
    "url": "posts/tags/Git.html",
    "revision": "a4afd7a84685bcf1632e1bdd42eda9eb"
  },
  {
    "url": "posts/tags/GitHub.html",
    "revision": "6b5596e0ae0aa049c9aa4b230092ea16"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "f9d98e56a5484f48e950a9815981b59b"
  },
  {
    "url": "posts/tags/Interpreter.html",
    "revision": "9f16cb3df2ed9ce80a3af2fbe1d5cef2"
  },
  {
    "url": "posts/tags/JavaScript.html",
    "revision": "73d4cb84f9748aa9f0b65ec486e9d3e7"
  },
  {
    "url": "posts/tags/JIT.html",
    "revision": "b9730ee140640add0a547a2bfc2299d8"
  },
  {
    "url": "posts/tags/Linux.html",
    "revision": "9bc425f151dd1befeacb69b854ba1dfc"
  },
  {
    "url": "posts/tags/LLVM.html",
    "revision": "bf46ddf6a1302c0c73561a004745a47e"
  },
  {
    "url": "posts/tags/Manjaro.html",
    "revision": "6dfbaef5247b9fdde8f086b6b7ab706b"
  },
  {
    "url": "posts/tags/ML.html",
    "revision": "82f211c17cfb54ce1d2a613902f91019"
  },
  {
    "url": "posts/tags/OOC.html",
    "revision": "e7eab8e6fd35920797fbfcf773c7b2cf"
  },
  {
    "url": "posts/tags/Optimizer.html",
    "revision": "8d061930e69fe7d03572d5bd0e64940c"
  },
  {
    "url": "posts/tags/PaddlePaddle.html",
    "revision": "d7cb8548594a664851b2c8de9b312aa3"
  },
  {
    "url": "posts/tags/Python.html",
    "revision": "980bcf4417f88b87017a846cf0ddeee9"
  },
  {
    "url": "posts/tags/PyTorch.html",
    "revision": "e11522a614070de92e64bd1f492d4ad5"
  },
  {
    "url": "posts/tags/refactoring.html",
    "revision": "bcebcf0a329b8cccce4fde9bfa3f5547"
  },
  {
    "url": "posts/tags/Rust.html",
    "revision": "a620e56264341c0b58284a1c32babbfb"
  },
  {
    "url": "posts/tags/TensorFlow.html",
    "revision": "50dd827d3de4319fef37a9320ca53c87"
  },
  {
    "url": "posts/tags/VCA.html",
    "revision": "4e2c536ac9045ef482ae7470a13eeeb3"
  },
  {
    "url": "posts/tags/Virtual Machine.html",
    "revision": "17f62e540225053e989d68cace67c2fb"
  },
  {
    "url": "posts/tags/Vuejs.html",
    "revision": "d11e99faeaaaadbaebdf01d687f8fa2f"
  },
  {
    "url": "posts/tags/VuePress.html",
    "revision": "fc47e76f6a2303ba529b65fb7e9035c6"
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
