!function(t){function e(e){for(var r,a,c=e[0],u=e[1],s=e[2],f=0,p=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(l&&l(e);p.length;)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={3:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=u;i.push([64,0,1,2,4,5]),n()}({25:function(t,e,n){"use strict";var r=n(26),o=n(5),i=n(27);n(58),n(59),n(60);function a(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(e){var n=e.button,r=e.drawer,o=e.content;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._button=n,this._drawer=r,this._content=o,this._initialAppShell()}var e,n,u,s,l;return e=t,n=[{key:"_initialAppShell",value:function(){r.a.init({button:this._button,drawer:this._drawer,content:this._content})}},{key:"renderPage",value:(s=regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.a.parseActiveUrlWithCombiner(),n=i.a[e],t.next=4,n.render();case 4:return this._content.innerHTML=t.sent,t.next=7,n.afterRender();case 7:case"end":return t.stop()}}),t,this)})),l=function(){var t=this,e=arguments;return new Promise((function(n,r){var o=s.apply(t,e);function i(t){a(o,n,r,i,c,"next",t)}function c(t){a(o,n,r,i,c,"throw",t)}i(void 0)}))},function(){return l.apply(this,arguments)})}],n&&c(e.prototype,n),u&&c(e,u),t}();e.a=u},58:function(t,e){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function a(t){var e="function"==typeof Map?new Map:void 0;return a=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return c(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,t)},a(t)}function c(t,e,n){return c=u()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&s(o,n.prototype),o},c.apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}var f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(y,t);var e,n,a,c,f,p=(e=y,n=u(),function(){var t,r=l(e);if(n){var o=l(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return i(this,t)});function y(){return r(this,y),p.apply(this,arguments)}return a=y,(c=[{key:"connectedCallback",value:function(){this.innerHTML='<footer class="footer">\n        <div class="container">\n            <div class="footer__wrapper">\n                <div class="footer__site">\n                    <p class="footer__title">Sitemap</p>\n                    <nav>\n                        <ul class="nav-footer">\n                            <li class="nav-footer__item">\n                                <a class="nav-footer__link" href="#/home">Beranda</a>\n                            </li>\n                            <li class="nav-footer__item">\n                                <a class="nav-footer__link" href="#/favorite">Favorite</a>\n                            </li>\n                            <li class="nav-footer__item">\n                                <a class="nav-footer__link"  href="https://www.linkedin.com/in/hasan-romadon/" target="_blank" rel="noopener" >Tentang</a>\n                            </li>\n                        </ul>\n                    </nav>\n                </div>\n                <div class="footer__social-media">\n                    <p class="footer__title">Kontak kami</p>\n                    <ul class="footer__social-media__list">\n                        <li> <a href="#" class="footer__social-media__list__link" > <img src="images/icons/icon-fb.png" alt="facebook"></a></li>\n                        <li> <a href="#" class="footer__social-media__list__link" > <img src="images/icons/icon-ig.png" alt="instagram"></a></li>\n                        <li> <a href="#" class="footer__social-media__list__link" > <img src="images/icons/icon-tw.png" alt="twitter"> </a></li>\n                    </ul>\n                </div>\n                <div class="footer__about">\n                    <img class="footer__logo" src="images/icons/logo.png" alt="">\n                    <p class="footer__about">Kulinary adalah sebuah website untuk mendapatkan informasi\n                        restoran-restoran\n                        kekinian dan terlengkap.</p>\n                    <p class="footer__about">Copyright © 2021 - Kulinary</p>\n                </div>\n            </div>\n        </div>\n    </footer>'}}])&&o(a.prototype,c),f&&o(a,f),y}(a(HTMLElement));customElements.define("footer-comp",f)},59:function(t,e){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function a(t){var e="function"==typeof Map?new Map:void 0;return a=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return c(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,t)},a(t)}function c(t,e,n){return c=u()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&s(o,n.prototype),o},c.apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}var f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(y,t);var e,n,a,c,f,p=(e=y,n=u(),function(){var t,r=l(e);if(n){var o=l(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return i(this,t)});function y(){return r(this,y),p.apply(this,arguments)}return a=y,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='<section class=" section section_category">\n        <div class="container">\n            <h2 class="section__title" tabindex="0">Restoran berdasarkan kategori</h2>\n            <div class="category-wrapper">\n                <div class="category__option category__option--first">\n                    <picture>\n                        <source type="image/webp" srcset="images/category/cat_jawa.webp">\n                        <source type="image/jpeg" srcset="images/category/cat_jawa.png">\n                        <img class="lazyload category__option__img" src="images/utils/placeholder.png" \n                        data-src="images/category/cat_jawa.png" alt="">\n                    </picture>\n                    <a class="category__option__link" href="/#/search/jawa">\n                        <span class="visually-hidden">kategori</span>\n                        <span class="category__option__text">Jawa</span>\n                    </a>\n                </div>\n                <div class="category__option">\n                    <picture>\n                        <source type="image/webp" srcset="images/category/cat_italia.webp">\n                        <source type="image/jpeg" srcset="images/category/cat_italia.png">\n                        <img class="lazyload category__option__img" src="images/utils/placeholder.png" \n                        data-src="images/category/cat_italia.png" alt="">\n                    </picture>\n                    <a class="category__option__link" href="/#/search/italia">\n                        <span class="visually-hidden">kategori</span>\n                        <span class="category__option__text">Italia</span>\n                    </a>\n                </div>\n                <div class="category__option">\n                <picture>\n                    <source type="image/webp" srcset="images/category/cat_bali.webp">\n                    <source type="image/jpeg" srcset="images/category/cat_bali.png">\n                    <img class="lazyload category__option__img" src="images/utils/placeholder.png" \n                    data-src="images/category/cat_bali.png" alt="">\n                </picture>\n                    <a class="category__option__link" href="/#/search/bali">\n                        <span class="visually-hidden">kategori</span>\n                        <span class="category__option__text">Bali</span>\n                    </a>\n                </div>\n                <div class="category__option">\n                <picture>\n                    <source type="image/webp" srcset="images/category/cat_modern.webp">\n                    <source type="image/jpeg" srcset="images/category/cat_modern.png">\n                    <img class="lazyload category__option__img" src="images/utils/placeholder.png" \n                data-src="images/category/cat_modern.png" alt="">\n                </picture>\n                    <a class="category__option__link" href="/#/search/modern">\n                        <span class="visually-hidden">kategori</span>\n                        <span class="category__option__text">Modern</span>\n                    </a>\n                </div>\n                <div class="category__option">\n                <picture>\n                    <source type="image/webp" srcset="images/category/cat_soup.webp">\n                    <source type="image/jpeg" srcset="images/category/cat_soup.png">\n                    <img class="lazyload category__option__img" src="images/utils/placeholder.png" \n                    data-src="images/category/cat_soup.png" alt="">\n                </picture>\n                    <a class="category__option__link" href="/#/search/sunda">\n                        <span class="visually-hidden">kategori</span>\n                        <span class="category__option__text">Sunda</span>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </section>'}}])&&o(a.prototype,c),f&&o(a,f),y}(a(HTMLElement));customElements.define("categoryfood-comp",f)},60:function(t,e){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function a(t){var e="function"==typeof Map?new Map:void 0;return a=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return c(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,t)},a(t)}function c(t,e,n){return c=u()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&s(o,n.prototype),o},c.apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}var f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(y,t);var e,n,a,c,f,p=(e=y,n=u(),function(){var t,r=l(e);if(n){var o=l(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return i(this,t)});function y(){return r(this,y),p.apply(this,arguments)}return a=y,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='<div class="spinner">\n                        <img src="images/icons/icon-spinner.svg"/>\n                      </div>'}}])&&o(a.prototype,c),f&&o(a,f),y}(a(HTMLElement));customElements.define("loading-comp",f)},61:function(t,e,n){"use strict";var r=n(9);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function u(t){var e="function"==typeof Map?new Map:void 0;return u=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return s(t,arguments,p(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,t)},u(t)}function s(t,e,n){return s=l()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&f(o,n.prototype),o},s.apply(null,arguments)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function f(t,e){return f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},f(t,e)}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(b,t);var e,n,o,u,s,y=(e=b,n=l(),function(){var t,r=p(e);if(n){var o=p(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return c(this,t)});function b(){return i(this,b),y.apply(this,arguments)}return o=b,(u=[{key:"connectedCallback",value:function(){this.render(),Object(r.a)(".skip-link","#mainContent")}},{key:"render",value:function(){this.innerHTML='\n    <button class="skip-link" tabindex="0" data-link="mainContent" >LEWATI KE KONTEN UTAMA</button>\n    <header class="app-bar">\n    <div class="container app-bar__container">\n      <div class="app-bar__brand">\n      <a href="#/"> <img class="app-bar__logo" src="images/icons/logo.png" alt="logo" srcset=""></a>\n      </div>\n      <nav id="navigationDrawer" class="app-bar__navigation">\n          <ul>\n              <li><a href="#/home" >Beranda</a></li>\n              <li><a href="#/favorite">Favorit</a></li>\n              <li><a href="https://www.linkedin.com/in/hasan-romadon/" target="_blank" rel="noopener">Tentang</a></li>\n          </ul>\n      </nav>\n      <div class="app-bar__menu">\n      <button id="hamburgerButton">☰</button>\n      </div>\n    </div>\n    </header>'}}])&&a(o.prototype,u),s&&a(o,s),b}(u(HTMLElement));customElements.define("navbar-comp",y)},62:function(t,e){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function a(t){var e="function"==typeof Map?new Map:void 0;return a=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return c(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,t)},a(t)}function c(t,e,n){return c=u()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&s(o,n.prototype),o},c.apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}var f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(y,t);var e,n,a,c,f,p=(e=y,n=u(),function(){var t,r=l(e);if(n){var o=l(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return i(this,t)});function y(){return r(this,y),p.apply(this,arguments)}return a=y,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='<div class="hero-container">    \n                      <picture>\n                        <source type="image/jpeg" media="(max-width: 600px)" srcset="images/heros/hero-image-small.jpg">\n                        <source type="image/webp" media="(max-width: 600px)" srcset="images/heros/hero-image-small.webp">\n                        <source type="image/webp" srcset="images/heros/hero-image-large.webp">\n                        <img class="hero-image" style="width:100%;" src="images/heros/hero-image-large.jpg" alt="makanan dimeja"></img>\n                      </picture>\n                      <div class="centered">\n                              <img class="hero-icon" src="images/icons/home-icon.svg" alt="icon kulinary" srcset="">\n                          <h1>Temukan restoran yang akan menjadi <span class="hero-span">Favoritmu!</span></h1>\n                          <p>Tidak bingung lagi mau makan apa!</p>\n                      </div>\n                    </div>'}}])&&o(a.prototype,c),f&&o(a,f),y}(a(HTMLElement));customElements.define("hero-comp",f)}});