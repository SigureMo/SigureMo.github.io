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
    "revision": "68efb27b55eaea84bc5eba7707948d50"
  },
  {
    "url": "about.html",
    "revision": "b0caadb98eebf6e4cdf8c710b987f3e8"
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
    "url": "assets/js/16.e05a9e6c.js",
    "revision": "50b8fda2c911bd5648e0d39067cf1fa0"
  },
  {
    "url": "assets/js/17.d3b6860a.js",
    "revision": "db8c8d3fc6d30e8160a545f39c9940b5"
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
    "url": "assets/js/21.33de6375.js",
    "revision": "b214daf8d7f1371569c8bfbc4c1e2364"
  },
  {
    "url": "assets/js/22.765b4ca7.js",
    "revision": "e17999cb33b65c26431975391a050aae"
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
    "url": "assets/js/33.f4bef02e.js",
    "revision": "1dbdecfabbacdf47d141f1c99644bd34"
  },
  {
    "url": "assets/js/34.27d2db56.js",
    "revision": "8a5339a7163fe78d6b2ad98652c33bf2"
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
    "url": "assets/js/40.f0b38ea7.js",
    "revision": "a3a55d6d62eae0498eb1495b727e18f3"
  },
  {
    "url": "assets/js/41.6da241c0.js",
    "revision": "18a50f7f97dae604e622a9ab6febe72f"
  },
  {
    "url": "assets/js/42.2af9f15d.js",
    "revision": "e13eba4fb5ac3cc28f4e7b8b21a1df8c"
  },
  {
    "url": "assets/js/43.6da9a995.js",
    "revision": "73c9ab608498d26c4c9d6beb0076c373"
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
    "url": "assets/js/app.8590b78f.js",
    "revision": "43aee4752dd328e9b7b08f56c23d3306"
  },
  {
    "url": "avatar.jpg",
    "revision": "a0f3f085df0623e5f87ed60c23d99fae"
  },
  {
    "url": "friends.html",
    "revision": "4fb98ade7825d1b2cbe6e6e4e1f0c803"
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
    "revision": "acf9f9e92c5d2891dcd3ef051ff74adc"
  },
  {
    "url": "index.html",
    "revision": "cf94311e37e3b9ee461d93871cfb6f4d"
  },
  {
    "url": "posts/2018/09/16/git-commit-message-convention.html",
    "revision": "a1f4e66712bc981857d6dd6f9ee61ca0"
  },
  {
    "url": "posts/2019/07/01/maxout.html",
    "revision": "45b4c4f931d3c8399ccceb8448d70ef7"
  },
  {
    "url": "posts/2019/08/16/hello-gcn.html",
    "revision": "115736de663495eca1a4187a36e9c57a"
  },
  {
    "url": "posts/2019/10/21/moefy-your-vuepress-blog.html",
    "revision": "60d0ab93c3b423582fbff1300e2f5f47"
  },
  {
    "url": "posts/2019/10/26/git-collaboration.html",
    "revision": "4d397fc0f47ab1638fbf68e99499cc81"
  },
  {
    "url": "posts/2020/03/22/simulate-anneal.html",
    "revision": "764bf947035019ada1569d60124aa41a"
  },
  {
    "url": "posts/2020/04/06/first-experience-for-manjaro.html",
    "revision": "9f890455dea2af96e46531c9370832c5"
  },
  {
    "url": "posts/2020/04/08/tensorflow-learning-phase-setting.html",
    "revision": "9319c59bf88d9e220be4f30833599405"
  },
  {
    "url": "posts/2020/05/25/gan-started.html",
    "revision": "d14c6c9384bfa5e49adaedb8b36b6f2f"
  },
  {
    "url": "posts/2020/06/12/use-git-filter-repo-clean-git-history.html",
    "revision": "71090c05b0e8b4710f6578d79f8bb6fe"
  },
  {
    "url": "posts/2020/06/22/deploy-blog-using-github-action.html",
    "revision": "47eeaaab1771caec7d0a3184cef868d7"
  },
  {
    "url": "posts/2021/01/31/javascript-prototype-chain.html",
    "revision": "8ee81d8c39a161d021e9fbfc969b9513"
  },
  {
    "url": "posts/2021/02/10/proxy-and-vue3-reactivity.html",
    "revision": "f83a17f383d06231b0e98ca22f3b1a9d"
  },
  {
    "url": "posts/2022/01/21/lets-make-a-calculator-using-rust-and-llvm.html",
    "revision": "45c307a5d0bdd1e7dfeb6ed7e835fd9e"
  },
  {
    "url": "posts/2022/09/21/moefy-paddle-dx-improvements.html",
    "revision": "8e07fe9794c06c5d0700ff507bd71ff3"
  },
  {
    "url": "posts/2023/04/22/decomposing-torch-dynamo.html",
    "revision": "24bf666ccf293d8487f4308670284a15"
  },
  {
    "url": "posts/2023/08/27/python311-instruction-specializing.html",
    "revision": "d6403112e4c6446cf92d540fb88358d2"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "d29c36e47027e3edab4a2d34e57350cc"
  },
  {
    "url": "posts/categories/做点有趣的.html",
    "revision": "ee83d4e8874500b1813573d1bccaab5f"
  },
  {
    "url": "posts/categories/学点有用的.html",
    "revision": "f15545d93d789520b893df2e0a6b2caa"
  },
  {
    "url": "posts/categories/想点没谱的.html",
    "revision": "1621fa4604350ef2c3de2b7eee09789d"
  },
  {
    "url": "posts/categories/找点好玩的.html",
    "revision": "c6051da99072bd3344e089e82517c89f"
  },
  {
    "url": "posts/index.html",
    "revision": "2b0c3ff17be6f2086cb50604e4b46e87"
  },
  {
    "url": "posts/tags/AST.html",
    "revision": "06d415d0639814d59c976ee6f36fcebf"
  },
  {
    "url": "posts/tags/blog.html",
    "revision": "a6f471039f6eab8936666241c9bde1eb"
  },
  {
    "url": "posts/tags/ByteCode.html",
    "revision": "1e4322fa0424b8d526e9a00f51337d2a"
  },
  {
    "url": "posts/tags/CI.html",
    "revision": "c975711580f3dfefe06ead67071ca3ac"
  },
  {
    "url": "posts/tags/Compiler.html",
    "revision": "623b5cc88538d861df0c710c4c22568e"
  },
  {
    "url": "posts/tags/DL.html",
    "revision": "d7014755d51a85c60d62987ef42c1a96"
  },
  {
    "url": "posts/tags/DX.html",
    "revision": "fb9d2d55cfa946203c1519f697e1c814"
  },
  {
    "url": "posts/tags/front end.html",
    "revision": "e87fc173f1cb2627705754cc32f3e4d4"
  },
  {
    "url": "posts/tags/GAN.html",
    "revision": "e87a9b59cb34ed50273c1000a6bacb42"
  },
  {
    "url": "posts/tags/GCN.html",
    "revision": "0058bd81c7ca5abee02606ea48ecb8d0"
  },
  {
    "url": "posts/tags/Git.html",
    "revision": "148c7d027e5d444b5b8105cdb84be870"
  },
  {
    "url": "posts/tags/GitHub.html",
    "revision": "ba4d8f6ac116e98b45859f5068905e4f"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "021f865af1704d1e3db3375901a8e970"
  },
  {
    "url": "posts/tags/Interpreter.html",
    "revision": "4cef1f1c94a15d48703614a8c5bff7a5"
  },
  {
    "url": "posts/tags/JavaScript.html",
    "revision": "02b081638be541eb32f98f67fd3ec3d5"
  },
  {
    "url": "posts/tags/JIT.html",
    "revision": "eb8fa7f8434342753cb9d61cd6e88507"
  },
  {
    "url": "posts/tags/Linux.html",
    "revision": "6eb6ae8948242ac57113003abd0383dc"
  },
  {
    "url": "posts/tags/LLVM.html",
    "revision": "4463802d10b4aaee548962e7a685a95b"
  },
  {
    "url": "posts/tags/Manjaro.html",
    "revision": "765a9fa27903f03cd4d660324ccaa1c2"
  },
  {
    "url": "posts/tags/ML.html",
    "revision": "378ddae43333c1446b24ebd4d286a660"
  },
  {
    "url": "posts/tags/OOC.html",
    "revision": "875fb4a52df7426ada27e590a1d45658"
  },
  {
    "url": "posts/tags/Optimizer.html",
    "revision": "4be22cbec2ebfba47ce7795615c3aac1"
  },
  {
    "url": "posts/tags/PaddlePaddle.html",
    "revision": "e2c40f2f8a10f0816cb1b4094b1a51ab"
  },
  {
    "url": "posts/tags/Python.html",
    "revision": "6cc9003b5f7fefde07836276346ffe0a"
  },
  {
    "url": "posts/tags/PyTorch.html",
    "revision": "ad69fc00ad31fa39fb0a8ea74f03cfc3"
  },
  {
    "url": "posts/tags/refactoring.html",
    "revision": "f60bcae81ca0efda041f687d76158e3e"
  },
  {
    "url": "posts/tags/Rust.html",
    "revision": "8217a5ff1725a39c65b517a214dce854"
  },
  {
    "url": "posts/tags/TensorFlow.html",
    "revision": "deab00a320d3f31e26e787a955f5396d"
  },
  {
    "url": "posts/tags/VCA.html",
    "revision": "fd65471eb012763d398c5b911e98a9ba"
  },
  {
    "url": "posts/tags/Virtual Machine.html",
    "revision": "8894bb4adb00f1ba745bb7b9d762cd8a"
  },
  {
    "url": "posts/tags/Vuejs.html",
    "revision": "0b659d82a60ebf32a1021beb49832102"
  },
  {
    "url": "posts/tags/VuePress.html",
    "revision": "d6aa538333eac261ab1f2fdb437217c2"
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
