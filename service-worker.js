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
    "revision": "bfa14362dd4fef9bf407dbcdda5b9b21"
  },
  {
    "url": "about.html",
    "revision": "d2db0e6c736207325454c69583d14499"
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
    "url": "assets/js/15.2e04baf7.js",
    "revision": "567ddc794908715d8be1bb76b5a90d5c"
  },
  {
    "url": "assets/js/16.917cc283.js",
    "revision": "9413660d0ccdebadc0df354a4769beca"
  },
  {
    "url": "assets/js/17.9c8878d4.js",
    "revision": "a68ee5825bd2c51d02582142286bd64a"
  },
  {
    "url": "assets/js/18.d1798cd5.js",
    "revision": "de1937ad1b956ead18f5b2a73f384879"
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
    "url": "assets/js/21.b3ab51c4.js",
    "revision": "4e0fed81d1f4df3258e0b20cdb96a633"
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
    "url": "assets/js/34.f176a1ca.js",
    "revision": "7f92341b58159412be259396ede0aa07"
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
    "url": "assets/js/38.79e99172.js",
    "revision": "adc70d1890448f50beec1b65a93fc5d8"
  },
  {
    "url": "assets/js/39.6028c77f.js",
    "revision": "d90671e116b8c565aba6d8bb7d1bea0f"
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
    "url": "assets/js/41.209bab9b.js",
    "revision": "d03e74e40113a0f52d19c73f62049892"
  },
  {
    "url": "assets/js/42.338e6a58.js",
    "revision": "740bdb8caa1a177cd49fc28ded56b6f8"
  },
  {
    "url": "assets/js/43.97628593.js",
    "revision": "a9d293e5bb8c2fd9b589cc77be900542"
  },
  {
    "url": "assets/js/44.9dd9c913.js",
    "revision": "c68eee8fa326fc4e524fa24e10d493fb"
  },
  {
    "url": "assets/js/45.ba31bc7c.js",
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
    "url": "assets/js/app.0086b947.js",
    "revision": "b931d297e0635dc0d37cd57636244027"
  },
  {
    "url": "avatar.jpg",
    "revision": "a0f3f085df0623e5f87ed60c23d99fae"
  },
  {
    "url": "friends.html",
    "revision": "be1157355dec19150529446cc05e795e"
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
    "revision": "83a247ee670ebc210f8a27026cdcb887"
  },
  {
    "url": "index.html",
    "revision": "2fbaf389018cce49f68942a08b92c0d2"
  },
  {
    "url": "posts/2018/09/16/git-commit-message-convention.html",
    "revision": "0e186c816a6ebf3c24d2fde519fe8582"
  },
  {
    "url": "posts/2019/07/01/maxout.html",
    "revision": "12b1a210591db9387a7eb93ea17ce93f"
  },
  {
    "url": "posts/2019/08/16/hello-gcn.html",
    "revision": "b971475de690a7d33208bfd0ce17d15b"
  },
  {
    "url": "posts/2019/10/21/moefy-your-vuepress-blog.html",
    "revision": "72d0b8588b8df0642db83f5faab67531"
  },
  {
    "url": "posts/2019/10/26/git-collaboration.html",
    "revision": "404d5413a4873574107837a85b920074"
  },
  {
    "url": "posts/2020/03/22/simulate-anneal.html",
    "revision": "f78f037ef7a1fb71d5397cfb9ae66e45"
  },
  {
    "url": "posts/2020/04/06/first-experience-for-manjaro.html",
    "revision": "0b7581b901dc06b86cec608c236b9b73"
  },
  {
    "url": "posts/2020/04/08/tensorflow-learning-phase-setting.html",
    "revision": "2ec243b72d269d2936196110acf8f6cc"
  },
  {
    "url": "posts/2020/05/25/gan-started.html",
    "revision": "0f9e05a2d0364e33f9bea5ad4dede10f"
  },
  {
    "url": "posts/2020/06/12/use-git-filter-repo-clean-git-history.html",
    "revision": "020bea2521dbce19058c5c56e094f744"
  },
  {
    "url": "posts/2020/06/22/deploy-blog-using-github-action.html",
    "revision": "58d28136eec6f95952aaf99d2a1366cb"
  },
  {
    "url": "posts/2021/01/31/javascript-prototype-chain.html",
    "revision": "0769bcf89df7507cf844c702823b8482"
  },
  {
    "url": "posts/2021/02/10/proxy-and-vue3-reactivity.html",
    "revision": "91a29beddfac5bfd870649f94391e15a"
  },
  {
    "url": "posts/2022/01/21/lets-make-a-calculator-using-rust-and-llvm.html",
    "revision": "bf96ae4eb10d998c7714b5792b9ae6e3"
  },
  {
    "url": "posts/2022/09/21/moefy-paddle-dx-improvements.html",
    "revision": "2e6ce23db3eb58d5f8aef31c5675b973"
  },
  {
    "url": "posts/2023/04/22/decomposing-torch-dynamo.html",
    "revision": "3d96c5a0166a51dd995c698c90aad6f6"
  },
  {
    "url": "posts/2023/08/27/python311-instruction-specializing.html",
    "revision": "d2862d44e80b0c42b3a654ed73332e44"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "f48bf160299faf27b57684742a74d867"
  },
  {
    "url": "posts/categories/做点有趣的.html",
    "revision": "41e37b5de4dd744abe25bdadf60b28a7"
  },
  {
    "url": "posts/categories/学点有用的.html",
    "revision": "c77f4b6c24fca7524e344d885cfd249b"
  },
  {
    "url": "posts/categories/想点没谱的.html",
    "revision": "5264550338d19fec0b38dc1da8cd9bcb"
  },
  {
    "url": "posts/categories/找点好玩的.html",
    "revision": "d47b6e8e8f72b9a5d3ebf7c358c87f14"
  },
  {
    "url": "posts/index.html",
    "revision": "e36bea8083992662941c1f51633a380a"
  },
  {
    "url": "posts/tags/AST.html",
    "revision": "477ad9619fc2d6e78baee41f6911341a"
  },
  {
    "url": "posts/tags/blog.html",
    "revision": "dddc59102871621263ba0ab4a972e170"
  },
  {
    "url": "posts/tags/ByteCode.html",
    "revision": "f821210f706e1c37fa71403a6a06edf5"
  },
  {
    "url": "posts/tags/CI.html",
    "revision": "71f4ef515156aa1596ccb6db71f66377"
  },
  {
    "url": "posts/tags/Compiler.html",
    "revision": "138e4f2e9920bb4deb276339206dbab9"
  },
  {
    "url": "posts/tags/DL.html",
    "revision": "1e53dd257f22a9986ef1afa96ff36f72"
  },
  {
    "url": "posts/tags/DX.html",
    "revision": "59bdbfddbe1696c580c36a562694dd40"
  },
  {
    "url": "posts/tags/front end.html",
    "revision": "cdb2d75bd65b587a7d668cb7d5cff7aa"
  },
  {
    "url": "posts/tags/GAN.html",
    "revision": "62e8cfa37a9993a77af7fb88e1cedffe"
  },
  {
    "url": "posts/tags/GCN.html",
    "revision": "b207cf1ad829ebb4be4767a7f8783dff"
  },
  {
    "url": "posts/tags/Git.html",
    "revision": "95adbdb5614882b1ac8820823ae5ac81"
  },
  {
    "url": "posts/tags/GitHub.html",
    "revision": "623195a95bc9c948aed844c5fcc9bc88"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "03b82590e8f43071b905b566d746dc71"
  },
  {
    "url": "posts/tags/Interpreter.html",
    "revision": "aadd91838c71d6753f72eb72615d95af"
  },
  {
    "url": "posts/tags/JavaScript.html",
    "revision": "bffcbb6cedc23978f94c24f65fb1adf4"
  },
  {
    "url": "posts/tags/JIT.html",
    "revision": "353795f1dc563655d440dfe0e5ecc6bd"
  },
  {
    "url": "posts/tags/Linux.html",
    "revision": "e66c92f0cd811793d31be93183b997d8"
  },
  {
    "url": "posts/tags/LLVM.html",
    "revision": "bda5029c6710323d876699fdbdb1b485"
  },
  {
    "url": "posts/tags/Manjaro.html",
    "revision": "39e604c6c9c307deb31138e8d7e05d22"
  },
  {
    "url": "posts/tags/ML.html",
    "revision": "adc187f9156a133b2258332da517e6e4"
  },
  {
    "url": "posts/tags/OOC.html",
    "revision": "b389868a99607ab05e59e31780c79d2b"
  },
  {
    "url": "posts/tags/Optimizer.html",
    "revision": "61e33b9773bf7659e9ea01e8265affb4"
  },
  {
    "url": "posts/tags/PaddlePaddle.html",
    "revision": "c2c1aa8295cb0958d50af3c34d39ef54"
  },
  {
    "url": "posts/tags/Python.html",
    "revision": "460004ed656d221759b8ac868e6f4c07"
  },
  {
    "url": "posts/tags/PyTorch.html",
    "revision": "22aca7cc96550ced0bc20959baf0c653"
  },
  {
    "url": "posts/tags/refactoring.html",
    "revision": "2896124990fccbd4c1e8c84948567d8a"
  },
  {
    "url": "posts/tags/Rust.html",
    "revision": "2208f51ac3fb9c6b03ddb87f4271923e"
  },
  {
    "url": "posts/tags/TensorFlow.html",
    "revision": "8c432f702ce9a69341f836147db766c5"
  },
  {
    "url": "posts/tags/VCA.html",
    "revision": "4faf892753f3a20c9029f822e7d1ec18"
  },
  {
    "url": "posts/tags/Virtual Machine.html",
    "revision": "4deaaa9d19148156a673684a59c6486e"
  },
  {
    "url": "posts/tags/Vuejs.html",
    "revision": "4428c1b336e25c18af2bb50b0d06144c"
  },
  {
    "url": "posts/tags/VuePress.html",
    "revision": "0d7fc9e1b2b3b7ceab757f0f4e0c662e"
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
