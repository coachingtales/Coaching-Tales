if(!self.define){let e,a={};const t=(t,s)=>(t=new URL(t+".js",s).href,a[t]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=a,document.head.appendChild(e)}else e=t,importScripts(t),a()})).then((()=>{let e=a[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(s,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let i={};const r=e=>t(e,n),o={module:{uri:n},exports:i,require:r};a[n]=Promise.all(s.map((e=>o[e]||r(e)))).then((e=>(c(...e),i)))}}define(["./workbox-00a24876"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"a345027539dbad071cafa9c77b041307"},{url:"/_next/static/_TWAJwR0obokpRz6fLPwd/_buildManifest.js",revision:"8c797a2f420a6d1609350ab3f4760833"},{url:"/_next/static/_TWAJwR0obokpRz6fLPwd/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/52774a7f-133ebed3f3bfed33.js",revision:"_TWAJwR0obokpRz6fLPwd"},{url:"/_next/static/chunks/52774a7f-133ebed3f3bfed33.js.map",revision:"13fa56624f3bfac744cf237abfd8eac5"},{url:"/_next/static/chunks/620-bf32424ca23058a1.js",revision:"_TWAJwR0obokpRz6fLPwd"},{url:"/_next/static/chunks/620-bf32424ca23058a1.js.map",revision:"5bfce21b6d21a7f02058b49cea4ec13b"},{url:"/_next/static/chunks/7064611b-8295a2516e6c7d2b.js",revision:"_TWAJwR0obokpRz6fLPwd"},{url:"/_next/static/chunks/7064611b-8295a2516e6c7d2b.js.map",revision:"9d0715d88065df6fbe1c1117c25ac2de"},{url:"/_next/static/chunks/807-b78c6a46a4c16dcd.js",revision:"_TWAJwR0obokpRz6fLPwd"},{url:"/_next/static/chunks/807-b78c6a46a4c16dcd.js.map",revision:"b31c376f8be967f25a504e78b75d3449"},{url:"/_next/static/chunks/847-d8e4af3bf6b3488d.js",revision:"_TWAJwR0obokpRz6fLPwd"},{url:"/_next/static/chunks/847-d8e4af3bf6b3488d.js.map",revision:"3c3eb9f54b3364c92e6e322abb6921fb"},{url:"/_next/static/chunks/901-35e04a15d9275bb3.js",revision:"_TWAJwR0obokpRz6fLPwd"},{url:"/_next/static/chunks/901-35e04a15d9275bb3.js.map",revision:"4e1a54a771bbe81907b79598337f01a9"},{url:"/_next/static/chunks/app/%5Bcoach%5D/%5BpathChoice%5D/%5Bpath%5D/%5Bchoices%5D/end/page-7c254430406eca6d.js",revision:"_TWAJwR0obokpRz6fLPwd"},{url:"/_next/static/chunks/app/%5Bcoach%5D/%5BpathChoice%5D/%5Bpath%5D/%5Bchoices%5D/end/page-7c254430406eca6d.js.map",revision:"7d99f6c92d5c8d4f0cc1b53b438464ae"},{url:"/_next/static/chunks/app/%5Bcoach%5D/%5BpathChoice%5D/%5Bpath%5D/%5Bchoices%5D/end/save_pdf/page-bf9bdacc9e72efbf.js",revision:"_TWAJwR0obokpRz6fLPwd"},{url:"/_next/static/chunks/app/%5Bcoach%5D/%5BpathChoice%5D/%5Bpath%5D/%5Bchoices%5D/end/save_pdf/page-bf9bdacc9e72efbf.js.map",revision:"61189828b904810f61ff46cf3e549057"},{url:"/_next/static/chunks/app/%5Bcoach%5D/%5BpathChoice%5D/%5Bpath%5D/%5Bchoices%5D/page-be0d3ed6fcac2266.js",revision:"_TWAJwR0obokpRz6fLPwd"},{url:"/_next/static/chunks/app/%5Bcoach%5D/%5BpathChoice%5D/%5Bpath%5D/%5Bchoices%5D/page-be0d3ed6fcac2266.js.map",revision:"e0c1d8bf585808cb9a422dcddbd8fd57"},{url:"/_next/static/chunks/app/%5Bcoach%5D/%5BpathChoice%5D/%5Bpath%5D/page-325b6073710c9861.js",revision:"_TWAJwR0obokpRz6fLPwd"},{url:"/_next/static/chunks/app/%5Bcoach%5D/%5BpathChoice%5D/%5Bpath%5D/page-325b6073710c9861.js.map",revision:"e66a875a168cc70c4ba39ae51ec6d6c8"},{url:"/_next/static/chunks/app/%5Bcoach%5D/%5BpathChoice%5D/page-1c8783706c502d39.js",revision:"_TWAJwR0obokpRz6fLPwd"},{url:"/_next/static/chunks/app/%5Bcoach%5D/%5BpathChoice%5D/page-1c8783706c502d39.js.map",revision:"26ab365b3676d9e8f2d8514ac6219978"},{url:"/_next/static/chunks/app/%5Bcoach%5D/page-2d2c202cee0f0a05.js",revision:"_TWAJwR0obokpRz6fLPwd"},{url:"/_next/static/chunks/app/%5Bcoach%5D/page-2d2c202cee0f0a05.js.map",revision:"6c3f165d69d3a6ae014bf7467b52b30b"},{url:"/_next/static/chunks/app/_not-found/page-3122274caef2441c.js",revision:"_TWAJwR0obokpRz6fLPwd"},{url:"/_next/static/chunks/app/_not-found/page-3122274caef2441c.js.map",revision:"f3fb5c693d65123850e0b0a25947ba8c"},{url:"/_next/static/chunks/app/global-error-e95bad123da31789.js",revision:"_TWAJwR0obokpRz6fLPwd"},{url:"/_next/static/chunks/app/global-error-e95bad123da31789.js.map",revision:"dbfd787170b9bf83b062d74b6fc12e2b"},{url:"/_next/static/chunks/app/layout-c122e01ea6339c58.js",revision:"_TWAJwR0obokpRz6fLPwd"},{url:"/_next/static/chunks/app/layout-c122e01ea6339c58.js.map",revision:"64c73b7fbdd6837919942b4b0a207f03"},{url:"/_next/static/chunks/app/page-43c127151ca1d3c0.js",revision:"_TWAJwR0obokpRz6fLPwd"},{url:"/_next/static/chunks/app/page-43c127151ca1d3c0.js.map",revision:"4390505ecca1c3f3ab5083489054ab39"},{url:"/_next/static/chunks/app/sentry-example-page/page-2c1eda45c7dc5b2e.js",revision:"_TWAJwR0obokpRz6fLPwd"},{url:"/_next/static/chunks/app/sentry-example-page/page-2c1eda45c7dc5b2e.js.map",revision:"dd9bc37d952671fe220505daeceb9efe"},{url:"/_next/static/chunks/b2d98e07-756650886b5908ba.js",revision:"_TWAJwR0obokpRz6fLPwd"},{url:"/_next/static/chunks/b2d98e07-756650886b5908ba.js.map",revision:"7f447007a07cd9764046dcbefa916639"},{url:"/_next/static/chunks/fd9d1056-9ca1b3459d618492.js",revision:"_TWAJwR0obokpRz6fLPwd"},{url:"/_next/static/chunks/fd9d1056-9ca1b3459d618492.js.map",revision:"3f1654f525ec722f0603c98db7434224"},{url:"/_next/static/chunks/ff804112-c4917d655d30cbbe.js",revision:"_TWAJwR0obokpRz6fLPwd"},{url:"/_next/static/chunks/ff804112-c4917d655d30cbbe.js.map",revision:"5087121f65bc054c4d6b9d5bdfac57c2"},{url:"/_next/static/chunks/framework-332f134768e2321c.js",revision:"_TWAJwR0obokpRz6fLPwd"},{url:"/_next/static/chunks/framework-332f134768e2321c.js.map",revision:"9b72a0a3f70a1bbf24193f840fcc5243"},{url:"/_next/static/chunks/main-app-d6453c2586942a01.js",revision:"_TWAJwR0obokpRz6fLPwd"},{url:"/_next/static/chunks/main-app-d6453c2586942a01.js.map",revision:"044e1f778bd36833dcefa4995b40850d"},{url:"/_next/static/chunks/main-d0ca1ad435ca5c9c.js",revision:"_TWAJwR0obokpRz6fLPwd"},{url:"/_next/static/chunks/main-d0ca1ad435ca5c9c.js.map",revision:"62fad06928064ad4e24872174e333895"},{url:"/_next/static/chunks/pages/_app-aad2e8afd25e25e0.js",revision:"_TWAJwR0obokpRz6fLPwd"},{url:"/_next/static/chunks/pages/_app-aad2e8afd25e25e0.js.map",revision:"1661a3d5661936b4af22f70da0c3d3b1"},{url:"/_next/static/chunks/pages/_error-bbc0574c57de5961.js",revision:"_TWAJwR0obokpRz6fLPwd"},{url:"/_next/static/chunks/pages/_error-bbc0574c57de5961.js.map",revision:"693053bfeed1fac772908645b61686a8"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-c8ac8074507da32a.js",revision:"_TWAJwR0obokpRz6fLPwd"},{url:"/_next/static/chunks/webpack-c8ac8074507da32a.js.map",revision:"f939e94ad2a33eaa6981c879a792f014"},{url:"/_next/static/css/4638abafaf487e86.css",revision:"4638abafaf487e86"},{url:"/_next/static/css/4638abafaf487e86.css.map",revision:"74948a675baf95c7fa133666cdd24e78"},{url:"/_next/static/media/000325604fc3139a-s.woff2",revision:"a4f548be9d8fdfd4306b7c4520698a7b"},{url:"/_next/static/media/00eecbc6c81bba79-s.woff2",revision:"bce6ce9b84e7cbf063c8e672432faec1"},{url:"/_next/static/media/0e5eaf913b22d426-s.woff2",revision:"8b81d6bd9a72f2f1cf47679043cc6d56"},{url:"/_next/static/media/401536ba6ac57b4b-s.p.woff2",revision:"04d67e14ad52b66de0b7766899a237e5"},{url:"/_next/static/media/90cb4c83bb692c13-s.p.woff2",revision:"1240a1733a98514dd6d3f175fdbb7b6c"},{url:"/_next/static/media/cf6f59ef74797778-s.woff2",revision:"26d7bac5fe545fc686161fbb8e192cf8"},{url:"/_next/static/media/dab5b50288580af2-s.woff2",revision:"f7578a3be85c5a710dea8d0ff211ccdb"},{url:"/_next/static/media/f29c91ab0b6ba852-s.woff2",revision:"128f33f0ce1541c79599fb395eff7a10"},{url:"/_next/static/media/f9c3bd5c25a2c22c-s.woff2",revision:"bf46f2b4e7b69c03d9de3d5fb09bb141"},{url:"/_next/static/media/fb40faefeefda72d-s.woff2",revision:"f2f0e29f22dc2b419f65ecf38c2e2f86"},{url:"/audio/blank_space.mp3",revision:"75f96451a039463269147d4aa8342310"},{url:"/fonts/Montserrat_Alternates/MontserratAlternates-Black.ttf",revision:"4ee31e1bdfd4b73e58b03be7235c6b13"},{url:"/fonts/Montserrat_Alternates/MontserratAlternates-BlackItalic.ttf",revision:"7d584718a04661e4be40ae120301e87e"},{url:"/fonts/Montserrat_Alternates/MontserratAlternates-Bold.ttf",revision:"dec15f4454da4c3dcdba85a36c9f9a37"},{url:"/fonts/Montserrat_Alternates/MontserratAlternates-BoldItalic.ttf",revision:"b5efe009d5a7716bda810edee7b635be"},{url:"/fonts/Montserrat_Alternates/MontserratAlternates-ExtraBold.ttf",revision:"bb1218e7fc385a9bff7b79b2b096ab09"},{url:"/fonts/Montserrat_Alternates/MontserratAlternates-ExtraBoldItalic.ttf",revision:"4e5e038f59eb6d02e97f2302fd7ab6f4"},{url:"/fonts/Montserrat_Alternates/MontserratAlternates-ExtraLight.ttf",revision:"e67eb5869de7de7d0daecb535dcfcda5"},{url:"/fonts/Montserrat_Alternates/MontserratAlternates-ExtraLightItalic.ttf",revision:"bd7f18b4ce68cb013779ef54b4feb03e"},{url:"/fonts/Montserrat_Alternates/MontserratAlternates-Italic.ttf",revision:"433b5c0bbcdc5383624d124a3030e565"},{url:"/fonts/Montserrat_Alternates/MontserratAlternates-Light.ttf",revision:"36bcc537dc03505d47b5c6ada975cb9a"},{url:"/fonts/Montserrat_Alternates/MontserratAlternates-LightItalic.ttf",revision:"c599ecc210027f491004096a3919f619"},{url:"/fonts/Montserrat_Alternates/MontserratAlternates-Medium.ttf",revision:"4c61e408402414f36f5c3a06ecc5915b"},{url:"/fonts/Montserrat_Alternates/MontserratAlternates-MediumItalic.ttf",revision:"e45349294bfd8445f86a75d6084b2126"},{url:"/fonts/Montserrat_Alternates/MontserratAlternates-Regular.ttf",revision:"aed416691ba9afb1590d9ddf220f5996"},{url:"/fonts/Montserrat_Alternates/MontserratAlternates-SemiBold.ttf",revision:"049fdc5014564a1f21293fe11e108bcc"},{url:"/fonts/Montserrat_Alternates/MontserratAlternates-SemiBoldItalic.ttf",revision:"a6ee45b8654b1b1b0b5d5d46de410747"},{url:"/fonts/Montserrat_Alternates/MontserratAlternates-Thin.ttf",revision:"851b328f969eeba7e58ae81ddc7275ad"},{url:"/fonts/Montserrat_Alternates/MontserratAlternates-ThinItalic.ttf",revision:"21fc5ad34e9f724ab5bfdaf50afe55b1"},{url:"/fonts/Montserrat_Alternates/OFL.txt",revision:"cc9ecd3549266f0241761ac35ede5a88"},{url:"/football_192.png",revision:"7322b414b3fb98387a030057efd05180"},{url:"/football_512.png",revision:"8cd96c48a80ac19a99028616da7e81eb"},{url:"/icons/headphones.png",revision:"5bd465b1051134e55301e6cf68f99856"},{url:"/icons/left.png",revision:"6977aa6f7461e68147480c96decd4878"},{url:"/icons/letsbegin.png",revision:"fb6170d617ca4eb5e5ee7ece4f359398"},{url:"/icons/muted.png",revision:"357840c1c1ba7c4c2e91a7070abf6eb0"},{url:"/icons/next.png",revision:"207accbca91806003d26827f0477471a"},{url:"/icons/pauseButton.png",revision:"978f64089a94fda3ac919380e6aa6d6b"},{url:"/icons/playButton.png",revision:"463079bf33e0483f98f5a8dab8ed794e"},{url:"/icons/right.png",revision:"7e2fb5cce94117b82205e263304707fc"},{url:"/icons/sound.png",revision:"d1130b6679a2e1b04b958e63771675b4"},{url:"/icons/stopwatch.png",revision:"95d0b531956cded8dff24a9d8af5c894"},{url:"/icons/strategy.png",revision:"bcba355806df931933f670c65a151237"},{url:"/icons/text.png",revision:"6f9f548ffcf67aa1f886f6665fda5047"},{url:"/icons/whistle.png",revision:"69471180396add3e31f928d1041ff7ab"},{url:"/images/BL_component_1.png",revision:"10170a04c31fe0e3057d5aa5fbd522a3"},{url:"/images/BL_component_2.png",revision:"ad4680a8405500100a3da698d06253e2"},{url:"/images/BL_component_3.png",revision:"8d1e003aa14d78d37dd462f8e1ba477f"},{url:"/images/BL_component_4.png",revision:"f992bbb00271326ce61e72cd3384f848"},{url:"/images/BL_component_5.png",revision:"5660fb93dc2672f1229d91f66de635b7"},{url:"/images/BL_component_6.png",revision:"b0e92c598e7856727bcfc6ae00102bf8"},{url:"/images/BL_component_7.png",revision:"2460a8f271ddb1e4e5a6429bf3ef9a2e"},{url:"/images/IT_component_1.png",revision:"80ddac9373abe5a24858aeb72b4234c1"},{url:"/images/IT_component_2.png",revision:"2bfc051047f84ec4dc9a61b8ee6005ce"},{url:"/images/IT_component_3.png",revision:"f04b37ecbd7ad8c2867cbc3755b1814e"},{url:"/images/IT_component_4.png",revision:"d8648d6167af008b4f1f255fcf7ce01a"},{url:"/images/IT_component_5.png",revision:"d821c78c62df705e4d134cfe97a5b77a"},{url:"/images/IT_component_6.png",revision:"fdf0f1f1d8a07ce757f6e88b1a708fc1"},{url:"/images/IT_component_7.png",revision:"75f0b3f5568da5223f00fc96ab53846d"},{url:"/images/MR_component_1.png",revision:"e86adbcc372c7043e46eb26bfe4d97dc"},{url:"/images/MR_component_2.png",revision:"ccd409e5cbcc98df73871c917f128a53"},{url:"/images/MR_component_3.png",revision:"16ed62179ad2c2ac4838f82e04ca5773"},{url:"/images/MR_component_4.png",revision:"ee4cb63a7fa320e0228a3b3aba42dfd9"},{url:"/images/MR_component_5.png",revision:"4169d54741fa12a3d76ffc6206d52055"},{url:"/images/MR_component_6.png",revision:"43705db0f27ae6aa1eab74a7151a9102"},{url:"/images/MR_component_7.png",revision:"cc85bf0b50b1022840570fc914095082"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:t,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:20,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^\/_next\/image\?url=.+$/i,new e.CacheFirst({cacheName:"next-images",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/^\/.*/i,new e.NetworkFirst({cacheName:"pages-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif)$/i,new e.CacheFirst({cacheName:"image-assets",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:js|css)$/i,new e.StaleWhileRevalidate({cacheName:"static-resources",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3})]}),"GET")}));
//# sourceMappingURL=sw.js.map