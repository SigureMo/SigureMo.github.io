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
    "revision": "46a82932f2e6ae73dc3c479d2cd78231"
  },
  {
    "url": "about.html",
    "revision": "fddfff73b7d2f13b7050f3c129318dff"
  },
  {
    "url": "assets/css/0.styles.4b4222a6.css",
    "revision": "6ca7ef64bed223efb3b4ac79cb9515b7"
  },
  {
    "url": "assets/img/03_C_and_pointer01.36198e64.png",
    "revision": "36198e6472075ed32134a523e859cc0c"
  },
  {
    "url": "assets/img/24_Git01.5ed0300f.png",
    "revision": "5ed0300f171906361138cdaad43a5cc1"
  },
  {
    "url": "assets/img/claw.f886b8d5.svg",
    "revision": "f886b8d5021c8af029e2cd4dea609bcc"
  },
  {
    "url": "assets/img/CN01.8b0270fd.png",
    "revision": "8b0270fdeba3b8feecc65b7489a5ceff"
  },
  {
    "url": "assets/img/CN02.91b0f8d7.png",
    "revision": "91b0f8d75c489fc41f4ceda460468ff7"
  },
  {
    "url": "assets/img/CN03.5ddaa660.png",
    "revision": "5ddaa66033a963732464c01d6bcbe6ff"
  },
  {
    "url": "assets/img/CN04.e6dc02f2.png",
    "revision": "e6dc02f2d4a844515ba6236e13546ec9"
  },
  {
    "url": "assets/img/CN05.b88e682b.png",
    "revision": "b88e682beb86d3cc196384533cf3b025"
  },
  {
    "url": "assets/img/CN06.f00ef43f.png",
    "revision": "f00ef43f2b4e5521983dee8514e12225"
  },
  {
    "url": "assets/img/CN07.e80b174a.png",
    "revision": "e80b174adff950924030983cb01319be"
  },
  {
    "url": "assets/img/CN08.4de42250.png",
    "revision": "4de42250d60df85d5dc6ca9c8f956f8d"
  },
  {
    "url": "assets/img/CN09.2c3461cc.png",
    "revision": "2c3461cc370cd82820764c6b7e7797bd"
  },
  {
    "url": "assets/img/CN10.90421a3b.png",
    "revision": "90421a3bab225ac875ad3ab62be43cc6"
  },
  {
    "url": "assets/img/CN12.0bf86e56.png",
    "revision": "0bf86e562e8bdcb8a6dc54281bb1bb29"
  },
  {
    "url": "assets/img/CN13.6fa30190.png",
    "revision": "6fa301906388f875279726111e357db2"
  },
  {
    "url": "assets/img/CN14.849d7615.png",
    "revision": "849d76155e58555446e76b04823090b5"
  },
  {
    "url": "assets/img/CN15.295c12d0.png",
    "revision": "295c12d0abfe45fa7c32464e78a8a213"
  },
  {
    "url": "assets/img/CN16.57fa6ccf.png",
    "revision": "57fa6ccf562371ae5228944d158ffe60"
  },
  {
    "url": "assets/img/CN17.1abc9168.png",
    "revision": "1abc91680fb7ad78485bd8b0ed442aa2"
  },
  {
    "url": "assets/img/CN18.37e9f5e6.png",
    "revision": "37e9f5e6c9db64d7a90bbc670768db11"
  },
  {
    "url": "assets/img/CN19.b3e36148.png",
    "revision": "b3e361485f32d0b9e4d3aa07de5e445b"
  },
  {
    "url": "assets/img/CN20.a42605ff.png",
    "revision": "a42605ff2febd8597e25e366da6df01b"
  },
  {
    "url": "assets/img/CN21.10cb70c8.png",
    "revision": "10cb70c8d98613be146a82fd5c6c3860"
  },
  {
    "url": "assets/img/CN22.fd1c6d61.png",
    "revision": "fd1c6d61a8d672495861efbb3aa4b684"
  },
  {
    "url": "assets/img/CN23.fab93100.png",
    "revision": "fab9310046d933a703de38373679d3ef"
  },
  {
    "url": "assets/img/DL01.79aee825.png",
    "revision": "79aee8252ab3da603832956773f2b18c"
  },
  {
    "url": "assets/img/DL02.e85b707f.png",
    "revision": "e85b707f8170f41e01346fab3935812f"
  },
  {
    "url": "assets/img/DL03.0f19314f.png",
    "revision": "0f19314fcb693c5398b89d15d82c9151"
  },
  {
    "url": "assets/img/DL04.6a8deac7.png",
    "revision": "6a8deac74a66a0d53b06c6da72e2034e"
  },
  {
    "url": "assets/img/DL05.dc5c9d38.png",
    "revision": "dc5c9d382b580b725cd792cfb84445ee"
  },
  {
    "url": "assets/img/DL06.4639cc01.png",
    "revision": "4639cc0113e368e3f4851c10b5eac764"
  },
  {
    "url": "assets/img/DL07.b540c3ba.png",
    "revision": "b540c3ba32afdd4c0c0cb36abf311f21"
  },
  {
    "url": "assets/img/DL09.39fad2ec.png",
    "revision": "39fad2ece490936e5b47e1183f5bd549"
  },
  {
    "url": "assets/img/DL10.9e331471.png",
    "revision": "9e33147119238f1c658d7ac1a0c4fdc4"
  },
  {
    "url": "assets/img/DL11.6a696e38.png",
    "revision": "6a696e38a88f1eb240de9770eeba1555"
  },
  {
    "url": "assets/img/DL12.4bff6325.png",
    "revision": "4bff632581e08ad5fc8ee517697fa6b2"
  },
  {
    "url": "assets/img/DL13.7d56c868.png",
    "revision": "7d56c868cc6bd1622fab968401344c8e"
  },
  {
    "url": "assets/img/DL14.0e683181.png",
    "revision": "0e68318181ccececed9198b484074690"
  },
  {
    "url": "assets/img/DL15.c7683e03.png",
    "revision": "c7683e035f42b0f143f6ab76cc6eb665"
  },
  {
    "url": "assets/img/DL16.39eef639.png",
    "revision": "39eef639add1f4d202e042c2e77faee8"
  },
  {
    "url": "assets/img/DL17.584c83e2.png",
    "revision": "584c83e25a8d4de450aa6346ffbc266d"
  },
  {
    "url": "assets/img/DL18.965fa4b1.png",
    "revision": "965fa4b16c5ae2b339124c83794f6939"
  },
  {
    "url": "assets/img/DL19.3ce9950b.png",
    "revision": "3ce9950b86f48e42e9172063a320d7a9"
  },
  {
    "url": "assets/img/DL20.5c456ab7.png",
    "revision": "5c456ab7dfd3b0e0178cd76387c803fe"
  },
  {
    "url": "assets/img/DL21.88963536.png",
    "revision": "889635360c14fdb9b143b8430d459825"
  },
  {
    "url": "assets/img/DL22.f6984edf.png",
    "revision": "f6984edf16d9cb595cdb0b7d719563d2"
  },
  {
    "url": "assets/img/DL23.b2a2de03.png",
    "revision": "b2a2de0325d4a7637799a66176c0986f"
  },
  {
    "url": "assets/img/DL24.ec1180ea.png",
    "revision": "ec1180ea9ce15862294d6a1cf4dd12de"
  },
  {
    "url": "assets/img/DL25.d8c605f7.png",
    "revision": "d8c605f7b29a32d8d0fd279ffaf11fdb"
  },
  {
    "url": "assets/img/DL26.3f4df2fc.png",
    "revision": "3f4df2fc3c14a1d1648b6baea81cfa50"
  },
  {
    "url": "assets/img/DL27.472d3678.png",
    "revision": "472d36780ddf6c89cc9fe3391eb00753"
  },
  {
    "url": "assets/img/DL28.d023867a.png",
    "revision": "d023867ad1e4041e49a2f750b7bfb534"
  },
  {
    "url": "assets/img/DL29.fdf6ef6f.png",
    "revision": "fdf6ef6f2d1d92d5a1b4c355bb0552c4"
  },
  {
    "url": "assets/img/DL30.2e1ba36d.png",
    "revision": "2e1ba36d947a87cff9bda1e7cfb1536d"
  },
  {
    "url": "assets/img/DL31.b6f79af2.png",
    "revision": "b6f79af25cba84e25f551f25eb4bc4bd"
  },
  {
    "url": "assets/img/DL32.c3073c61.png",
    "revision": "c3073c618f06ee25b6c6cdc035f8acc8"
  },
  {
    "url": "assets/img/DL33.e12ad89f.png",
    "revision": "e12ad89fb1c601c8af78a2db2549c37b"
  },
  {
    "url": "assets/img/DL34.485a5ef6.png",
    "revision": "485a5ef67423bcd582b5ce80e051cd7a"
  },
  {
    "url": "assets/img/DL35.50062638.png",
    "revision": "50062638e65cc47397d10bdf81f22395"
  },
  {
    "url": "assets/img/DL36.cbb133f5.png",
    "revision": "cbb133f54052b61961804f3a9f3eeaf3"
  },
  {
    "url": "assets/img/DL37.fedb9f8f.png",
    "revision": "fedb9f8f9b5c50980132040c931652ab"
  },
  {
    "url": "assets/img/DL38.131f4d32.png",
    "revision": "131f4d324bd7ed348a5a9e9f302f5081"
  },
  {
    "url": "assets/img/DL39.def20f5d.png",
    "revision": "def20f5dfcbbddefa229916019ff170a"
  },
  {
    "url": "assets/img/DL40.1f848893.png",
    "revision": "1f8488931a292f81110b725f45c201c1"
  },
  {
    "url": "assets/img/DL41.e8561dd8.png",
    "revision": "e8561dd8ee9204025d9abdf782096485"
  },
  {
    "url": "assets/img/DL42.fa43e1cd.png",
    "revision": "fa43e1cd4d8c65920525ada32a30a7de"
  },
  {
    "url": "assets/img/DL43.0b00a324.png",
    "revision": "0b00a324ca8175ca1307ff1187a31309"
  },
  {
    "url": "assets/img/DL44.4d7dde1d.png",
    "revision": "4d7dde1d7dce2d39b1de293d258f8ab7"
  },
  {
    "url": "assets/img/DL45.51507cda.png",
    "revision": "51507cda8cb773756efb5a0d64b37e64"
  },
  {
    "url": "assets/img/DL46.c55ac06f.png",
    "revision": "c55ac06f215b2caaff37fbe1f8e158cc"
  },
  {
    "url": "assets/img/DL47.70af29d0.png",
    "revision": "70af29d0b72013a77715ab39b48732ce"
  },
  {
    "url": "assets/img/DL48.8ca3063c.png",
    "revision": "8ca3063c63bac8b3e031096160faed8a"
  },
  {
    "url": "assets/img/DL49.b76afc2b.png",
    "revision": "b76afc2b4a8d522e848ddf1f8a7f4d25"
  },
  {
    "url": "assets/img/DL50.8ca2874b.png",
    "revision": "8ca2874bd4ed1ae0f9596dd0fd10d215"
  },
  {
    "url": "assets/img/DL51.29ecdbca.png",
    "revision": "29ecdbca95cbe080cd627daa27755d8b"
  },
  {
    "url": "assets/img/DL52.a2a46625.png",
    "revision": "a2a466251833ef79933ba003fcacdbb3"
  },
  {
    "url": "assets/img/DL53.c93e3f84.png",
    "revision": "c93e3f84788a42f6e9efc196bbfc3be7"
  },
  {
    "url": "assets/img/DL54.c93c57c8.png",
    "revision": "c93c57c89dfae636ef14618fc35fbcbe"
  },
  {
    "url": "assets/img/DL55.f17df740.png",
    "revision": "f17df740f54352ceff79a49ce7394bfa"
  },
  {
    "url": "assets/img/DL56.60638584.png",
    "revision": "60638584990cbb4b495b89ff550d9096"
  },
  {
    "url": "assets/img/DL57.8906f935.png",
    "revision": "8906f9355dd0da1ca332dc21cdc8c96b"
  },
  {
    "url": "assets/img/DL58.2db91a91.png",
    "revision": "2db91a917fe2fa2ded4336126675a28a"
  },
  {
    "url": "assets/img/DL59.7c1e3f1e.png",
    "revision": "7c1e3f1e18f55b33c24e77f9b75af246"
  },
  {
    "url": "assets/img/DL60.0e62b424.png",
    "revision": "0e62b4246de9c176448ed58f12dfc73f"
  },
  {
    "url": "assets/img/DL61.7efbc4f6.png",
    "revision": "7efbc4f6bb08d775654c47d8e8cc8d4d"
  },
  {
    "url": "assets/img/DL62.4d60eb1f.png",
    "revision": "4d60eb1f868a34768c306c820cdd247d"
  },
  {
    "url": "assets/img/DL63.fb203a79.png",
    "revision": "fb203a79c99fd3cc9bb576df9d3e0262"
  },
  {
    "url": "assets/img/DS01.ac589772.jpeg",
    "revision": "ac5897721f8205a50e552a1bd45c8df9"
  },
  {
    "url": "assets/img/DS02.26b86815.jpeg",
    "revision": "26b868152077477d871d3918c976074d"
  },
  {
    "url": "assets/img/DS03.053daf9c.png",
    "revision": "053daf9c0f1a5022a15e0751eb88643f"
  },
  {
    "url": "assets/img/DS04.9616d3ab.png",
    "revision": "9616d3ab9ee4e2be906e36bcee752290"
  },
  {
    "url": "assets/img/DS05.46bfd0a8.jpeg",
    "revision": "46bfd0a8b3d54979741626a8f248e373"
  },
  {
    "url": "assets/img/DS06.5c1b3e61.png",
    "revision": "5c1b3e6154010823deb86b27993188d1"
  },
  {
    "url": "assets/img/DS07.ec821257.png",
    "revision": "ec82125706af71254feab85ef2ed05cf"
  },
  {
    "url": "assets/img/DS08.fb8c6d7b.png",
    "revision": "fb8c6d7b0857326ec6bebca6e9e17787"
  },
  {
    "url": "assets/img/DS09.6b1a7e83.png",
    "revision": "6b1a7e832cbf80c538e4de0b2275e3ef"
  },
  {
    "url": "assets/img/DS10.1b9a97ba.png",
    "revision": "1b9a97ba1ad2bf9864a45d0a5e8153ec"
  },
  {
    "url": "assets/img/DS11.9244f827.png",
    "revision": "9244f8277be2c4babf251e5d429e19eb"
  },
  {
    "url": "assets/img/DS12.881075e0.png",
    "revision": "881075e01f7c8f088a093b586bc4523f"
  },
  {
    "url": "assets/img/DS13.6a9eaf4e.png",
    "revision": "6a9eaf4ea513fc5a8d828927adb39733"
  },
  {
    "url": "assets/img/DS14.fa5f2027.png",
    "revision": "fa5f202741d56837ee64fc5746cf5cdd"
  },
  {
    "url": "assets/img/DS15.472d7d01.png",
    "revision": "472d7d0122a247c419bb4ade6323117a"
  },
  {
    "url": "assets/img/DS16.ccee2c7e.png",
    "revision": "ccee2c7ed8d59df28579dcff2c4e472e"
  },
  {
    "url": "assets/img/DS17.b417bc9a.png",
    "revision": "b417bc9ab9e75ee10dbfe6321b11d640"
  },
  {
    "url": "assets/img/DS18.7e1bd942.png",
    "revision": "7e1bd942725bc1b9a244f698d6c31f66"
  },
  {
    "url": "assets/img/DS19.498283b2.png",
    "revision": "498283b22e634125c9c027b5d2a19f58"
  },
  {
    "url": "assets/img/DS20.f4917168.png",
    "revision": "f49171682ce610778a424a885de741dd"
  },
  {
    "url": "assets/img/DS21.ba6f49c6.png",
    "revision": "ba6f49c6826c20f14cc8b18e56341b18"
  },
  {
    "url": "assets/img/DS22.e63782b7.png",
    "revision": "e63782b7dfe974c170c86c5febd8ceb4"
  },
  {
    "url": "assets/img/DS23.f7b6ab06.png",
    "revision": "f7b6ab063a35178416439a836d4415af"
  },
  {
    "url": "assets/img/DS24.65bad26b.png",
    "revision": "65bad26ba928321b6528b7c57e8e567a"
  },
  {
    "url": "assets/img/GCN_01.93b7c0a2.png",
    "revision": "93b7c0a2ae9708f38a48555e2f170b90"
  },
  {
    "url": "assets/img/GCN_02.6ae447e8.png",
    "revision": "6ae447e8414b299b74bd273bf273a4df"
  },
  {
    "url": "assets/img/GCN_03.e6ddd703.png",
    "revision": "e6ddd703fab3927adf7a8a9506eed5a0"
  },
  {
    "url": "assets/img/Maxout01.3fe6f9f7.png",
    "revision": "3fe6f9f7b951eb74242ffda7827ca081"
  },
  {
    "url": "assets/img/Maxout02.44594914.png",
    "revision": "44594914b95f226c0c1777dbadc9a4eb"
  },
  {
    "url": "assets/img/Maxout03.5f94003a.png",
    "revision": "5f94003a98622d5dbd0912f3f20d5920"
  },
  {
    "url": "assets/img/OS01.2ab793b1.png",
    "revision": "2ab793b1fd25a04f18601ca105e84b12"
  },
  {
    "url": "assets/img/OS02.ce6e3f33.png",
    "revision": "ce6e3f33b1cd6e3292674fbfb580a187"
  },
  {
    "url": "assets/img/OS03.0304025c.png",
    "revision": "0304025c3f723a6a51e41f7e6df13177"
  },
  {
    "url": "assets/img/OS04.c5770d5a.png",
    "revision": "c5770d5a98000c87b3b82ffeb835aa54"
  },
  {
    "url": "assets/img/OS05.20cf64d0.png",
    "revision": "20cf64d07bc453721b4d5f903ce3ff61"
  },
  {
    "url": "assets/img/OS06.5d2404f6.png",
    "revision": "5d2404f612284e23a4542bdbffb8e771"
  },
  {
    "url": "assets/img/OS07.7d09c70b.png",
    "revision": "7d09c70be21a5a4c0e37004a2aab6839"
  },
  {
    "url": "assets/img/OS08.9887a1fe.png",
    "revision": "9887a1fed6c1a9a58f0c74d00e1f17d6"
  },
  {
    "url": "assets/img/OS09.7eb4aa30.png",
    "revision": "7eb4aa300b6cb9fab2164058212306bb"
  },
  {
    "url": "assets/img/OS11.dec55523.png",
    "revision": "dec555239e60e07e1647f68481a9b2ad"
  },
  {
    "url": "assets/img/OS12.4fdd3d5f.png",
    "revision": "4fdd3d5f6864b493980d59dc0bbbaf76"
  },
  {
    "url": "assets/img/OS13.e7b333a9.png",
    "revision": "e7b333a99c6fac09dc67c5f219de3670"
  },
  {
    "url": "assets/img/OS14.e32b7b5a.png",
    "revision": "e32b7b5a97ef16e6ea6381859a62df4e"
  },
  {
    "url": "assets/img/OS15.421b0d0b.png",
    "revision": "421b0d0bd276d3ecd433cac5c0143569"
  },
  {
    "url": "assets/img/OS16.fdfab360.png",
    "revision": "fdfab360a6adcb1281daed7314c7f5a1"
  },
  {
    "url": "assets/img/OS17.2d6db9c7.png",
    "revision": "2d6db9c71ef7e1123ae8c9f5bdec1527"
  },
  {
    "url": "assets/img/OS18.454f03e7.png",
    "revision": "454f03e76936c22578eef13ddaf4d4d4"
  },
  {
    "url": "assets/img/OS19.27471043.png",
    "revision": "274710437fa7c1a271f9fe7e85c3f7ef"
  },
  {
    "url": "assets/img/OS20.f4c4f4e4.png",
    "revision": "f4c4f4e4faf5d2fe9ce7957d919b5f1a"
  },
  {
    "url": "assets/img/OS21.387e0d3b.png",
    "revision": "387e0d3bbb5065a8c9debfaf70fcf1b1"
  },
  {
    "url": "assets/img/OS22.dcbfe065.png",
    "revision": "dcbfe065d5bb93f7043df5d79919708a"
  },
  {
    "url": "assets/img/OS23.f3020a6f.png",
    "revision": "f3020a6f91cc74126e90e2e5bf1f7450"
  },
  {
    "url": "assets/img/OS24.9c7ab35d.png",
    "revision": "9c7ab35d7ba4d510612325012cbde753"
  },
  {
    "url": "assets/img/OS25.aa30f5b2.png",
    "revision": "aa30f5b24c24cadcd730a44ded43cde5"
  },
  {
    "url": "assets/img/OS26.38db0201.png",
    "revision": "38db020138fad3e03fb6a7c527c9c04c"
  },
  {
    "url": "assets/img/OS27.69994fe1.png",
    "revision": "69994fe10c02995c4b78af6b3a33ac82"
  },
  {
    "url": "assets/img/OS28.2569d7d1.png",
    "revision": "2569d7d14f863849d9c8682dde4e4faf"
  },
  {
    "url": "assets/img/OS29.0a265769.png",
    "revision": "0a265769241594cdeed77dcf284e90cf"
  },
  {
    "url": "assets/img/OS30.3a3517bb.png",
    "revision": "3a3517bbc99c47a214822ee1b382e3e1"
  },
  {
    "url": "assets/img/OS31.24476796.png",
    "revision": "24476796e98382002f95b2cdd107f8b0"
  },
  {
    "url": "assets/img/OS32.ca6a056c.png",
    "revision": "ca6a056cba4a97e0ec5eca99b4dd3a49"
  },
  {
    "url": "assets/img/OS33.f701f81e.png",
    "revision": "f701f81e516b1b6b1361a96ffcfd3e77"
  },
  {
    "url": "assets/img/OS35.d4e40b5c.png",
    "revision": "d4e40b5cfd7cb62e418671f893bdd8df"
  },
  {
    "url": "assets/img/OS36.a69fe737.png",
    "revision": "a69fe7374d1230c77b154493228ad371"
  },
  {
    "url": "assets/img/PCC01.4b0fef15.png",
    "revision": "4b0fef15d882c84b4c53a7d0e9d8da9d"
  },
  {
    "url": "assets/img/PCC02.3e2a4b8a.png",
    "revision": "3e2a4b8a369b96ec20e2bdf6bfb85022"
  },
  {
    "url": "assets/img/PCC03.fd45eac6.png",
    "revision": "fd45eac678b726d59763b412880c64a2"
  },
  {
    "url": "assets/img/PCC04.d1cd9261.png",
    "revision": "d1cd92610b5c6263509748a858be090a"
  },
  {
    "url": "assets/img/PCC05.6739912e.png",
    "revision": "6739912eaa846fe0dd95fd6826075ea9"
  },
  {
    "url": "assets/img/PCC06.b2eb4bdb.png",
    "revision": "b2eb4bdba7b45707ce9eeb2cc2b1d79c"
  },
  {
    "url": "assets/img/PCC07.883f1aca.png",
    "revision": "883f1acaa5377e3f957e7e17be0835a5"
  },
  {
    "url": "assets/img/PCC08.adb0453e.png",
    "revision": "adb0453eac8936b6d0c550a3a2069197"
  },
  {
    "url": "assets/img/PCC09.4a5ef6e4.png",
    "revision": "4a5ef6e44255ff388088a08be3f00c78"
  },
  {
    "url": "assets/img/PCC10.09e435c9.png",
    "revision": "09e435c92233601a1dd1a98f85ae2a75"
  },
  {
    "url": "assets/img/PCC11.f8fb3a17.png",
    "revision": "f8fb3a17dac64f2063312df6dd4010c4"
  },
  {
    "url": "assets/img/PCC12.7a05127c.png",
    "revision": "7a05127cbd7b95a61ae0f1eb5bf059cf"
  },
  {
    "url": "assets/img/PCC13.5c3e1c74.png",
    "revision": "5c3e1c74ec2d9c71da085985adf64bb0"
  },
  {
    "url": "assets/img/PCC14.91800192.png",
    "revision": "9180019273681cf601eede1d8981777b"
  },
  {
    "url": "assets/img/PCC15.dd9aaca3.png",
    "revision": "dd9aaca3d6486426d0ca6502fa435b91"
  },
  {
    "url": "assets/img/PCC16.c900bc9a.png",
    "revision": "c900bc9ada61c3ab813906ffcbde347d"
  },
  {
    "url": "assets/img/PCC17.57c2547d.png",
    "revision": "57c2547d7bc8f131798c894e6052083d"
  },
  {
    "url": "assets/img/PCC18.c388460c.png",
    "revision": "c388460c51ade4c00aaedf3768d9c531"
  },
  {
    "url": "assets/img/PCC19.d2d63616.png",
    "revision": "d2d63616a87d6aa7c419aa9b83dc361a"
  },
  {
    "url": "assets/img/PCC20.3cd6e779.png",
    "revision": "3cd6e7793c89f2a158f80f4f2c6448ea"
  },
  {
    "url": "assets/img/PCC21.d6e35946.png",
    "revision": "d6e359461de8223d289228720546cb1d"
  },
  {
    "url": "assets/img/PCC22.a2247c03.png",
    "revision": "a2247c037c0c19a735412a0d71b82075"
  },
  {
    "url": "assets/img/PCC24.04454028.png",
    "revision": "04454028368b5d30ad316baebf21f58b"
  },
  {
    "url": "assets/img/PCC25.5e4a650e.png",
    "revision": "5e4a650e4c89a11f6f2fa4b37349c3eb"
  },
  {
    "url": "assets/img/PCC26.699d90f6.png",
    "revision": "699d90f64fed5cbd7a4a6a76f8213f44"
  },
  {
    "url": "assets/img/PCC27.03af1111.png",
    "revision": "03af1111495e10fe3eeed5b6ecdd6d3f"
  },
  {
    "url": "assets/img/PCC28.4f0cc410.png",
    "revision": "4f0cc4104daaa6eb079c1bef32ed9e00"
  },
  {
    "url": "assets/img/PCC29.f1983704.png",
    "revision": "f198370443b1e162ff27b6cb6e3a6325"
  },
  {
    "url": "assets/img/PCC30.e1e2cebd.png",
    "revision": "e1e2cebd08827ed9a9c57201886cdb72"
  },
  {
    "url": "assets/img/PCC31.f7f4a0ac.png",
    "revision": "f7f4a0ac321d635a67f4727281a64cfa"
  },
  {
    "url": "assets/img/PCC32.365f3e2e.png",
    "revision": "365f3e2e9215a74d1b233eceb12ff0f9"
  },
  {
    "url": "assets/img/PCC33.6a55f0e1.png",
    "revision": "6a55f0e1bbe8adc021755b0a4c33bde9"
  },
  {
    "url": "assets/img/PCC34.5202d891.png",
    "revision": "5202d8914f577c913540c8a277b67e17"
  },
  {
    "url": "assets/img/PCC35.4e146585.png",
    "revision": "4e1465850d5ace76f7289de3a5508463"
  },
  {
    "url": "assets/img/PCC36.f4dae277.png",
    "revision": "f4dae277653d3344a81b230578f717ec"
  },
  {
    "url": "assets/img/PCC37.0c3f17d3.png",
    "revision": "0c3f17d37f40ab7140ab4cf6292422bf"
  },
  {
    "url": "assets/img/PMPW01.a02446a1.jpg",
    "revision": "a02446a18911b9d7a809c68bc5f1d985"
  },
  {
    "url": "assets/img/PMPW02.c306270f.png",
    "revision": "c306270fc5461905bf0a737fdfa092f7"
  },
  {
    "url": "assets/img/PMPW03.0b8a7988.png",
    "revision": "0b8a79887248cb3834954f43bce2a242"
  },
  {
    "url": "assets/img/PMPW06.1801bb8a.png",
    "revision": "1801bb8a54960afd48f53cf6281cdc2c"
  },
  {
    "url": "assets/img/PMPW07.e797dba3.png",
    "revision": "e797dba3eff1165bf42de2d4de71c8f0"
  },
  {
    "url": "assets/img/SA01.12769abd.png",
    "revision": "12769abd9da542498c779fb3d61a9ec5"
  },
  {
    "url": "assets/img/SA02.5b92e15a.png",
    "revision": "5b92e15ad7f086bd49d841a6b1518ac5"
  },
  {
    "url": "assets/img/SA03.49d1377e.png",
    "revision": "49d1377ee450c79247a99aa855430b42"
  },
  {
    "url": "assets/img/SPT01.c8b6625b.png",
    "revision": "c8b6625b5a8ba25be71c2e7de8095436"
  },
  {
    "url": "assets/img/SPT02.2536664f.png",
    "revision": "2536664fbddabb47396648ab44f0b529"
  },
  {
    "url": "assets/img/SPT03.c5fc2d29.png",
    "revision": "c5fc2d29bb3f0079641078ce318ea8a3"
  },
  {
    "url": "assets/img/SPT04.2fe41a01.png",
    "revision": "2fe41a01af466ad300b95e276550bbd9"
  },
  {
    "url": "assets/img/SPT05.3aa1d6a1.jpg",
    "revision": "3aa1d6a1e1596cd61bb62560dfed7c8c"
  },
  {
    "url": "assets/img/SPT06.cd76feb2.png",
    "revision": "cd76feb29920a209073a90d15acbb64d"
  },
  {
    "url": "assets/img/SPT07.384e2fd5.png",
    "revision": "384e2fd5ff8d16ac1bb4642a30902e43"
  },
  {
    "url": "assets/img/SPT08.6165accc.png",
    "revision": "6165acccc5b5ba24ac9c9bd6cc2d10ec"
  },
  {
    "url": "assets/img/SPT09.79062687.png",
    "revision": "79062687dad758a7cc640397f768fe6d"
  },
  {
    "url": "assets/img/SPT10.ef361b32.png",
    "revision": "ef361b325c42116424c200c2d8cf4cf7"
  },
  {
    "url": "assets/img/SPT11.5a02b84f.png",
    "revision": "5a02b84f4eb93001b712718f18db2687"
  },
  {
    "url": "assets/img/SPT12.0aed726c.png",
    "revision": "0aed726c8ea1b1873a2b7c71d8ab6518"
  },
  {
    "url": "assets/js/1.5267eebb.js",
    "revision": "b21c7354012c1dc8bbce7e9b7fcf8736"
  },
  {
    "url": "assets/js/10.92e08c9b.js",
    "revision": "1af182af78071b89001a8ddc04433234"
  },
  {
    "url": "assets/js/11.2f9f0eb6.js",
    "revision": "d62514218cf05ea8b8b88d95a7010a30"
  },
  {
    "url": "assets/js/12.994c916b.js",
    "revision": "eef3d5d682978daccd6784fd1afe1b02"
  },
  {
    "url": "assets/js/13.0fd5126a.js",
    "revision": "67b82cd817cb642d44ab2447131e603b"
  },
  {
    "url": "assets/js/14.11d4ee66.js",
    "revision": "ab61065f63cfbb09666793bcfbdb47c4"
  },
  {
    "url": "assets/js/15.063e05e7.js",
    "revision": "e017bac34450e05d4e877f86fce73f7d"
  },
  {
    "url": "assets/js/16.f6d10b3f.js",
    "revision": "fc378694162cfa46813d9eb06efe1c57"
  },
  {
    "url": "assets/js/17.55a100e5.js",
    "revision": "cdcc0a0e16bc5376df6de056add7eda6"
  },
  {
    "url": "assets/js/18.f17d4fe5.js",
    "revision": "5f6c1acf35cb35fe7865aa176de5d22c"
  },
  {
    "url": "assets/js/19.082c2eab.js",
    "revision": "b76f85bbb99008a5737d9441f8455722"
  },
  {
    "url": "assets/js/20.880cff98.js",
    "revision": "a5ab5d53f675e699644e9e8d3cddaaf9"
  },
  {
    "url": "assets/js/21.3ef622d5.js",
    "revision": "381930cd0e29f52f2b11482231b20c9b"
  },
  {
    "url": "assets/js/22.cb63dd25.js",
    "revision": "5f1d6cd56f67d798435d7cba23a21ebb"
  },
  {
    "url": "assets/js/23.d815a65e.js",
    "revision": "89adee18bcbe1de1824ab82f8d5ca1ba"
  },
  {
    "url": "assets/js/24.f7fe6d98.js",
    "revision": "1fc367fe2a89d5d94ef57fbb09024b55"
  },
  {
    "url": "assets/js/25.79e2532f.js",
    "revision": "ffb23497bff6f1782c736b65dd67ef8d"
  },
  {
    "url": "assets/js/26.76cf8661.js",
    "revision": "f778ffee0b2479d23451e4b7d3a32c8e"
  },
  {
    "url": "assets/js/27.4949f560.js",
    "revision": "47a21bd406a6bad1e3c1d37b5cc72da6"
  },
  {
    "url": "assets/js/28.403f9c78.js",
    "revision": "e48dfeefbc9765d2c7931af56c36a345"
  },
  {
    "url": "assets/js/29.08e5e0b0.js",
    "revision": "e18d36f13669b13030f9318907ddeb4a"
  },
  {
    "url": "assets/js/30.27337d55.js",
    "revision": "ce734039011092ce476352bb2e104d13"
  },
  {
    "url": "assets/js/31.62cacced.js",
    "revision": "fedc42719d45bf5ee0917c086cb7202c"
  },
  {
    "url": "assets/js/32.7a9b548a.js",
    "revision": "ef5d28da638aa5f4d03d2b720650b442"
  },
  {
    "url": "assets/js/33.2d4b9433.js",
    "revision": "5814ecf5dc6f32022dd96bd313218959"
  },
  {
    "url": "assets/js/34.67c941d1.js",
    "revision": "095bb47c8e3938672d4c17f8d3d47fb0"
  },
  {
    "url": "assets/js/35.08d8af35.js",
    "revision": "7db1c1ac50766d3adcfc8255ab176d9a"
  },
  {
    "url": "assets/js/36.fe82c24a.js",
    "revision": "167f52031181052d5ef796aad9e2cd3d"
  },
  {
    "url": "assets/js/37.7e280ef8.js",
    "revision": "6b75994125afb24d1ed1efabb057ab38"
  },
  {
    "url": "assets/js/38.e945d1a8.js",
    "revision": "1474dc3adbf8abe2939bbb6d98596662"
  },
  {
    "url": "assets/js/39.1ce1195c.js",
    "revision": "d1617e355eda1550dd32f780e87e80b6"
  },
  {
    "url": "assets/js/4.69bbbe05.js",
    "revision": "7d085a9b662e630c49b32cbeec53586f"
  },
  {
    "url": "assets/js/40.1d207a88.js",
    "revision": "77ca981d7e58dbef44ea5f33d962e5bb"
  },
  {
    "url": "assets/js/41.3f684380.js",
    "revision": "9e177e4c3404595395dfbbff38b52435"
  },
  {
    "url": "assets/js/42.0a38acc2.js",
    "revision": "9664bd7ecd78b6d4201b2d49a8b7269b"
  },
  {
    "url": "assets/js/43.5e82c9e1.js",
    "revision": "d6b323037fef9290dddf986a2fbe68a7"
  },
  {
    "url": "assets/js/44.998a3155.js",
    "revision": "807add0959f8d48751d21540b26c09ec"
  },
  {
    "url": "assets/js/45.875fdc37.js",
    "revision": "a17b52f48c5a437f9063c3ed592d2085"
  },
  {
    "url": "assets/js/46.678ccfea.js",
    "revision": "ad2206596419fdb4d601fea2a6f9fec9"
  },
  {
    "url": "assets/js/47.cc038a52.js",
    "revision": "c65363758f2fa08470f72f877a6e5719"
  },
  {
    "url": "assets/js/48.8655d2e7.js",
    "revision": "8b8b235d972fca379f51252740fe7b5a"
  },
  {
    "url": "assets/js/49.1b1b13ad.js",
    "revision": "9b138fa41545ec4374d1f2e88fcff5e2"
  },
  {
    "url": "assets/js/5.20f71a3e.js",
    "revision": "f60589438f0305248a4023cf99f79b7e"
  },
  {
    "url": "assets/js/50.7ef4cfe5.js",
    "revision": "93720e1748acbc7bcb52b384b30080d8"
  },
  {
    "url": "assets/js/51.b0435786.js",
    "revision": "b8935ef934610dc4c2077a1de26c0f13"
  },
  {
    "url": "assets/js/52.9e4c5a3d.js",
    "revision": "42cf412232eac6bb3d89e6ae4e0942fe"
  },
  {
    "url": "assets/js/53.3f260d31.js",
    "revision": "58c4c98d06c8006727317efeda7fdefc"
  },
  {
    "url": "assets/js/54.3fa853a2.js",
    "revision": "7aedbcdf4a26969ea87b18bb2303d2e4"
  },
  {
    "url": "assets/js/6.b268b72c.js",
    "revision": "fea7d29584718242eafa5547d63cc75a"
  },
  {
    "url": "assets/js/7.c241ed5c.js",
    "revision": "0abad0dcd1f86874e0cfe969c6e0074d"
  },
  {
    "url": "assets/js/8.1c4f9d84.js",
    "revision": "a011c3ded98c340192e16a1bfb77ccb9"
  },
  {
    "url": "assets/js/9.62b5cda8.js",
    "revision": "37ef9a89489d32ea2e18095bb8f13750"
  },
  {
    "url": "assets/js/app.c177b168.js",
    "revision": "738d6c7892290a950b3a80832b26b3c3"
  },
  {
    "url": "assets/js/vendors~flowchart.ca76c415.js",
    "revision": "bcb343a128cd90afb8b8386e75da9b94"
  },
  {
    "url": "bg.jpg",
    "revision": "1cba10deb74637758891b3731f5c3d2b"
  },
  {
    "url": "icons/favicon144.png",
    "revision": "0b54d3f5684dbd04e61af4e097f27adf"
  },
  {
    "url": "icons/favicon152.png",
    "revision": "5caedc9a819b47e3ceca9fab58451656"
  },
  {
    "url": "icons/favicon168.png",
    "revision": "8f45bbff255a2625245b889200643aab"
  },
  {
    "url": "icons/favicon192.png",
    "revision": "398f073aa0b42ec6957bb7ebea1336b6"
  },
  {
    "url": "icons/favicon256.png",
    "revision": "37a6c214e273bebe6268a3d6816d5348"
  },
  {
    "url": "icons/favicon48.png",
    "revision": "8a6f069ceef89d8f51d9c6cd186a450a"
  },
  {
    "url": "icons/favicon72.png",
    "revision": "4d3682e6d104bceee8c364003eb7a82a"
  },
  {
    "url": "icons/favicon96.png",
    "revision": "cb3f16d46f9a0c7e929109ea5803ec1a"
  },
  {
    "url": "index.html",
    "revision": "b188db5dd0bd53bcddbd700fe236c7b8"
  },
  {
    "url": "info_bg.jpg",
    "revision": "644e313ec713eaaeedfb9eb147fbf67e"
  },
  {
    "url": "posts/2018/09/09/c-and-pointer.html",
    "revision": "173a45db560c2832791f5406c103bce5"
  },
  {
    "url": "posts/2018/09/16/git-commit.html",
    "revision": "9efbe6820c992617ffea60243a2c6704"
  },
  {
    "url": "posts/2018/10/01/cmder.html",
    "revision": "ae7a40470ef1c1407e16d6b0351925c3"
  },
  {
    "url": "posts/2018/10/01/diskpart.html",
    "revision": "26798958daecf3e567c87b6e3ba03e1f"
  },
  {
    "url": "posts/2018/10/01/principle-of-metal-plastic-working.html",
    "revision": "a2169f3206c6398dc6435ed5bb1fc7b5"
  },
  {
    "url": "posts/2018/10/14/deep-learning.html",
    "revision": "a201a87cf6f2865854380bffdf4ffde0"
  },
  {
    "url": "posts/2018/11/21/solid-state-phase-transformation.html",
    "revision": "00dade78565541dba2ab43517f21d8ec"
  },
  {
    "url": "posts/2019/02/28/operating-system.html",
    "revision": "8747d1bf1a47e9f37e1f9bab6d0bd482"
  },
  {
    "url": "posts/2019/04/25/discrete-mathematics.html",
    "revision": "63d447c980196359c9fd982e33702e95"
  },
  {
    "url": "posts/2019/05/19/katex-index.html",
    "revision": "7ab564248e23ae99be55ec9d350cbdbb"
  },
  {
    "url": "posts/2019/07/01/maxout.html",
    "revision": "59ff09ca0d62561bf615b09cc2e97681"
  },
  {
    "url": "posts/2019/08/16/hello-gcn.html",
    "revision": "b95e2c3b1128e39e860e9b96647a29cd"
  },
  {
    "url": "posts/2019/08/17/build-blog-by-vuepress.html",
    "revision": "8af458c309928b166f399b9140827664"
  },
  {
    "url": "posts/2019/08/17/links-in-blog.html",
    "revision": "f1595dcf0f48e3f3c41897d995f20628"
  },
  {
    "url": "posts/2019/08/18/bilili.html",
    "revision": "779946aa295b626395e27f820414e620"
  },
  {
    "url": "posts/2019/08/21/data-structures-and-algorithms.html",
    "revision": "89d00272aa1d75f93bf7541ab899fffc"
  },
  {
    "url": "posts/2019/08/25/course-crawler.html",
    "revision": "fdc50c9f411d00dd0182b001720b7e03"
  },
  {
    "url": "posts/2019/09/11/vscode-plugins.html",
    "revision": "8b1f77d423a5d61eecbd67d6f0edc91d"
  },
  {
    "url": "posts/2019/09/18/computer-network.html",
    "revision": "2ba03350f969d3a3def368ca276004f2"
  },
  {
    "url": "posts/2019/10/04/c-to-plusplus.html",
    "revision": "2a958686defe5bfac680b2c962f4b3ec"
  },
  {
    "url": "posts/2019/10/21/beautify-your-vuepress-blog.html",
    "revision": "562b65149ca98be9ebedfab890d834b8"
  },
  {
    "url": "posts/2019/10/26/git-collaboration.html",
    "revision": "e875a730c72b77d82b46a32b92cbc757"
  },
  {
    "url": "posts/2019/11/10/online-tools.html",
    "revision": "f10fff2cfca885a360b191f1526bc009"
  },
  {
    "url": "posts/2019/11/17/principles-of-computer-composition.html",
    "revision": "9969707d835d2f354c4750dcf6bf650b"
  },
  {
    "url": "posts/2020/01/18/residual.html",
    "revision": "43e94b7c31aa8600c52f2a37958ff625"
  },
  {
    "url": "posts/2020/03/06/install-software-from-source.html",
    "revision": "14d75821ecd5b04bdfe757d2299b2930"
  },
  {
    "url": "posts/2020/03/06/jupyter-lab.html",
    "revision": "9fa288d3f11b3c6ad66dbacf7dcd9011"
  },
  {
    "url": "posts/2020/03/22/simulate-anneal.html",
    "revision": "b8469b272b08d98d5df3a7c896d53d53"
  },
  {
    "url": "posts/2020/04/06/first-experience-for-manjaro.html",
    "revision": "031ef176064093cff067b8f7e8888ed7"
  },
  {
    "url": "posts/2020/04/08/tensorflow-learning-phase-setting.html",
    "revision": "29fdaab937644057b5baa91c5a28863d"
  },
  {
    "url": "posts/2020/04/16/pal-huanlijing.html",
    "revision": "b5c5c554d5d87f54a6caa8c0b22aa66f"
  },
  {
    "url": "posts/2020/04/20/conference-location.html",
    "revision": "cb6abf7340cabda329e466f800f36f3c"
  },
  {
    "url": "posts/2020/04/21/use-kaomoji-in-fcitx.html",
    "revision": "1784151cf9bf455ee594ae26812bf79a"
  },
  {
    "url": "posts/2020/04/26/extract-resources-from-unity-app.html",
    "revision": "50d5adc1c34467f8f638e38f2a8da4dc"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "9ae31306f2e2969c7af8316a924c29bb"
  },
  {
    "url": "posts/categories/思.html",
    "revision": "8bbd6540ffd34e2b1d4c0d69917d1ec3"
  },
  {
    "url": "posts/categories/游.html",
    "revision": "b2b2d50717690e1f4ace39de1f5ab18e"
  },
  {
    "url": "posts/categories/迹.html",
    "revision": "ef0392ad1113b05737ce14f578666632"
  },
  {
    "url": "posts/categories/墨.html",
    "revision": "ff4964bf338628b1076a7c211caa9d74"
  },
  {
    "url": "posts/index.html",
    "revision": "f3568d47c267f0fe8b21fa2d4e72f025"
  },
  {
    "url": "posts/tags/Android.html",
    "revision": "a0155e68959582ebc777c2c4c86c8eba"
  },
  {
    "url": "posts/tags/blog.html",
    "revision": "438b009b26644f00ca1fb70b00f0d671"
  },
  {
    "url": "posts/tags/Bookmarks.html",
    "revision": "e9dabe4f8d92d58e2687a3b11b3c340b"
  },
  {
    "url": "posts/tags/C.html",
    "revision": "33ad1156510421363d5c527c8004052d"
  },
  {
    "url": "posts/tags/C++.html",
    "revision": "6617971561ac894c7be3e36046154352"
  },
  {
    "url": "posts/tags/Crawler.html",
    "revision": "25b614e99d34ca5e44a562bc4680643b"
  },
  {
    "url": "posts/tags/CS.html",
    "revision": "9a08420d2f193e5d772b4ae5108964e1"
  },
  {
    "url": "posts/tags/DL.html",
    "revision": "16f43938dc36382fb1e35fa234822c17"
  },
  {
    "url": "posts/tags/front end.html",
    "revision": "c4293531378a0247ff060089a51c7fd1"
  },
  {
    "url": "posts/tags/GCN.html",
    "revision": "814dc3ae04cd961da43582126202fe24"
  },
  {
    "url": "posts/tags/Git.html",
    "revision": "4d35f6cfa7f2201d3cfd18ec3a1f42ac"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "c99cd44178b6a10372eebc79e6677c70"
  },
  {
    "url": "posts/tags/kaoyan.html",
    "revision": "0944f5c13608269508a60f99cc449627"
  },
  {
    "url": "posts/tags/KaTeX.html",
    "revision": "dc6a88cb2d05107b718bd6a26e6df0b2"
  },
  {
    "url": "posts/tags/Linux.html",
    "revision": "91a293b497d518c6bb2f30d77f9a7c45"
  },
  {
    "url": "posts/tags/Manjaro.html",
    "revision": "15fd08fb9ba171e008c6b99d5a3fb323"
  },
  {
    "url": "posts/tags/Material Science.html",
    "revision": "b50006f9474ebbf70c730944ece8163d"
  },
  {
    "url": "posts/tags/Math.html",
    "revision": "715f737acfb6cb62aa7723e18eb86491"
  },
  {
    "url": "posts/tags/ML.html",
    "revision": "dd297067b03c5b2c9052068f0854b547"
  },
  {
    "url": "posts/tags/Optimizer.html",
    "revision": "13c232ea9154131eef38bc4b49915a9d"
  },
  {
    "url": "posts/tags/OS.html",
    "revision": "f9789136248911f967b03c01509d097e"
  },
  {
    "url": "posts/tags/PAL.html",
    "revision": "a44485d42e988c1db785c2171ce9e352"
  },
  {
    "url": "posts/tags/Python.html",
    "revision": "43fc91da26033b992d42f52534574855"
  },
  {
    "url": "posts/tags/Required Course.html",
    "revision": "a6e6893273ac035667ffc5c833f3ba6b"
  },
  {
    "url": "posts/tags/TensorFlow.html",
    "revision": "3ed38ff2235ebd7d703854f1cd39dc51"
  },
  {
    "url": "posts/tags/Tool.html",
    "revision": "07487105d7233103ccce230b63080d4d"
  },
  {
    "url": "posts/tags/VSCode.html",
    "revision": "a982bd12e968ec9f4519946940ec9749"
  },
  {
    "url": "posts/tags/Vuepress.html",
    "revision": "b522b356fd45ab1b7eb8978acad30614"
  },
  {
    "url": "posts/tags/Windows.html",
    "revision": "a50fed07d1eebe63c62e69d982c4c4c5"
  },
  {
    "url": "sigure_mo.png",
    "revision": "91202214e3e04b1431cf3d2e6e67842f"
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
