(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0bVq":function(t,e,n){var r=n("hBhu");function o(t){if(!(this instanceof o))return new o(t);this._from=t,this.ease("linear"),this.duration(500)}n("M4kv")(o.prototype),o.prototype.reset=function(){return this.isArray="[object Array]"===Object.prototype.toString.call(this._from),this._curr=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}({},this._from),this._done=!1,this._start=Date.now(),this},o.prototype.to=function(t){return this.reset(),this._to=t,this},o.prototype.duration=function(t){return this._duration=t,this},o.prototype.ease=function(t){if(!(t="function"==typeof t?t:r[t]))throw new TypeError("invalid easing function");return this._ease=t,this},o.prototype.stop=function(){return this.stopped=!0,this._done=!0,this.emit("stop"),this.emit("end"),this},o.prototype.step=function(){if(!this._done){var t=this._duration,e=Date.now();if(e-this._start>=t)return this._from=this._to,this._update(this._to),this._done=!0,this.emit("end"),this;var n=this._from,r=this._to,o=this._curr,i=(0,this._ease)((e-this._start)/t);if(this.isArray){for(var u=0;u<n.length;++u)o[u]=n[u]+(r[u]-n[u])*i;return this._update(o),this}for(var c in n)o[c]=n[c]+(r[c]-n[c])*i;return this._update(o),this}},o.prototype.update=function(t){return 0==arguments.length?this.step():(this._update=t,this)},t.exports=o},D3e4:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=(n("uWGQ"),n("NGmk"),n("qS3X"),n("Sid0")),u=n("yZVP"),c=o.a.forwardRef((function(t,e){var n=t.subCat,r=t.sortedCards;t.setSubCatInView;return o.a.createElement(u.a,{ref:e},o.a.createElement(u.b,{id:n.url}),o.a.createElement(u.c,null,o.a.createElement(u.d,null,n.name)),o.a.createElement(u.e,null,r.map((function(t,e){return o.a.createElement(i.a,{key:e,data:t.node})}))))})),a=n("1Xmf"),l=n("XhhI"),s=n("vOnD"),f=s.b.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-11b2ycx-0"})(["display:flex;justify-content:center;padding-top:5px;@media (max-width:575px){justify-content:start;padding:1vw 4vw 0;overflow-x:scroll;scrollbar-width:none;::-webkit-scrollbar{display:none;}}"]),p=s.b.div.withConfig({displayName:"styles__SubCategory",componentId:"sc-11b2ycx-1"})(["margin:0 12px;margin-bottom:20px;:hover{cursor:pointer;a{color:var(--color-orange);border-bottom:1px solid rgba(235,91,11,0.4);font-size:14px;}}@media (max-width:575px){margin:0 5vw 2vw 0;:last-child{margin-right:0;}a{font-size:5vw;}:hover{a{font-size:5vw;}}}"]),h=s.b.a.withConfig({displayName:"styles__SubCategoryItem",componentId:"sc-11b2ycx-2"})(["font-size:14px;color:var(--color-green);padding-bottom:1px;border-bottom:1px solid rgba(69,231,134,0.4);white-space:nowrap;text-decoration:none;"," @media (max-width:575px){font-size:4.3vw;}"],(function(t){return t.selected&&"\n        color: var(--color-grey);\n        border: none;\n\n    "})),d=n("7Cbv"),m=n("boqk"),b=n.n(m),y=(n("YwZP"),n("oEq0"),n("Wbzz"),function(t){var e,n=t.currentElementIndexInViewport,r=t.category;return o.a.createElement(f,null,null==r||null===(e=r.subCategories)||void 0===e?void 0:e.map((function(t,e){return o.a.createElement(p,{key:Object(d.a)()},o.a.createElement(h,{onClick:function(){return b()("#"+t.url)},selected:n===e},t.name))})))}),v=n("KRny");function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function w(t,e,n){return e&&g(t.prototype,e),n&&g(t,n),t}function _(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,O(t,e)}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var k=function(){},E=function(t){function e(e){var n;return(n=t.call(this)||this).el=e,n}_(e,t);var n=e.prototype;return n.isScrolledToBottom=function(){return this.scrollTop+this.outerHeight>=this.scrollHeight},n.registerScrollEvent=function(t){this.el.addEventListener("scroll",t)},n.unregisterScrollEvent=function(t){this.el.removeEventListener("scroll",t)},e.create=function(t){var n=document.querySelector(t);if(!n)throw new Error("element is not found.");return new e(n)},w(e,[{key:"top",get:function(){return this.el.getBoundingClientRect().top}},{key:"outerHeight",get:function(){return this.el.getBoundingClientRect().height}},{key:"scrollTop",get:function(){return this.el.scrollTop}},{key:"scrollHeight",get:function(){return this.el.scrollHeight}}]),e}(k),M=function(t){function e(){return t.apply(this,arguments)||this}_(e,t);var n=e.prototype;return n.isScrolledToBottom=function(){return this.scrollTop+this.outerHeight>=this.scrollHeight},n.registerScrollEvent=function(t){document.addEventListener("scroll",t)},n.unregisterScrollEvent=function(t){document.removeEventListener("scroll",t)},e.create=function(){return new e},w(e,[{key:"outerHeight",get:function(){return window.innerHeight}},{key:"scrollTop",get:function(){return document.documentElement.scrollTop}},{key:"scrollHeight",get:function(){return document.documentElement.scrollHeight}}]),e}(k),x=function(){function t(){}return t.create=function(t){return t?E.create(t):M.create()},t}(),I=function(t){var e=t.children,n=function(t){var e=t.sectionRefs,n=t.rootSelector,o=t.offset,i=void 0===o?0:o,u=Object(r.useRef)(null);Object(r.useEffect)((function(){u.current=x.create(n)}),[n]);var c=Object(r.useCallback)((function(){return!!u.current&&u.current.isScrolledToBottom()}),[u]),a=Object(r.useCallback)((function(t){if(!u.current)return!1;var e=u.current.scrollTop,n=e+u.current.outerHeight,r=t.getBoundingClientRect(),o=u.current instanceof E?e+r.top-u.current.top+i:e+r.top+i;return[o<n,o+r.height>e].every((function(t){return t}))}),[u,i]),l=Object(r.useCallback)((function(){return e.map((function(t){return!!t.current&&a(t.current)}))}),[a,e]),s=Object(r.useState)([]),f=s[0],p=s[1],h=Object(r.useMemo)((function(){return f.findIndex((function(t){return t}))}),[f]),d=Object(r.useCallback)((function(){var t=c()?[].concat(new Array(e.length-1).fill(!1).map((function(t){return t})),[!0]):l();p(t)}),[l,c,e]);return Object(r.useEffect)((function(){return d(),u.current&&u.current.registerScrollEvent(d),function(){u.current&&u.current.unregisterScrollEvent(d)}}),[d]),{elementsStatusInViewport:f,currentElementIndexInViewport:h}}({sectionRefs:t.sectionRefs,rootSelector:t.rootSelector,offset:t.offset});return e({elementsStatusInViewport:n.elementsStatusInViewport,currentElementIndexInViewport:n.currentElementIndexInViewport})};e.a=function(t){var e,n=t.cards,i=t.category,u=null==i||null===(e=i.subCategories)||void 0===e?void 0:e.length,s=Array(u).fill().map((function(t,e){return Object(r.createRef)()}));return o.a.createElement(I,{offset:-50,sectionRefs:s},(function(t){var e,r=t.currentElementIndexInViewport;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,null,o.a.createElement(a.a,{category:i}),o.a.createElement(y,{category:i,currentElementIndexInViewport:r})),o.a.createElement(v.a,{withMargin:!0},null==i||null===(e=i.subCategories)||void 0===e?void 0:e.map((function(t,e){console.log("subCat",t);var r=n.filter((function(e){return e.node.fontSubcategory.includes(t.name)}));return o.a.createElement(c,{ref:s[e],key:"section-"+e,subCat:t,sortedCards:r})}))))}))}},F0uZ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AnchorLink=f;var r=c(n("q1tI")),o=n("Wbzz"),i=c(n("17x9")),u=n("dj5g");function c(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){var e=t.to,n=t.title,i=t.children,c=t.className,a=t.stripHash,s=void 0!==a&&a,f=t.gatsbyLinkProps,p=void 0===f?{}:f,h=t.onAnchorLinkClick,d=s?u.handleStrippedLinkClick:u.handleLinkClick,m=l(l({},p),{},{to:s?(0,u.stripHashedLocation)(e):e,onClick:function(t){return d(e,t,h)}});return n&&(m.title=n),c&&(m.className=c),r.default.createElement(o.Link,m,i||n)}f.propTypes={to:i.default.string.isRequired,title:i.default.string,className:i.default.string,stripHash:i.default.bool,gatsbyLinkProps:i.default.object,onAnchorLinkClick:i.default.func,children:i.default.node}},GVS5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.INVALID_HASH=e.IMPROPPER_FORMATTING=void 0;e.IMPROPPER_FORMATTING="Anchor path should contain an absolute root path `/` and selector `#` Ex: `/about#team`";e.INVALID_HASH="Anchor Links plugin attempted to scroll to an invalid hash on route change."},JwyU:function(t,e,n){var r=n("0bVq"),o=n("xEkU");t.exports=function(t,e,n){n=n||{};var i={top:window.pageYOffset||document.documentElement.scrollTop,left:window.pageXOffset||document.documentElement.scrollLeft},u=r(i).ease(n.ease||"out-circ").to({top:e,left:t}).duration(n.duration||1e3);function c(){o(c),u.update()}return u.update((function(t){window.scrollTo(0|t.left,0|t.top)})),u.on("end",(function(){c=function(){}})),c(),u}},M4kv:function(t,e,n){function r(t){if(t)return function(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}(t)}r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},r.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var o=0;o<r.length;o++)if((n=r[o])===e||n.fn===e){r.splice(o,1);break}return 0===r.length&&delete this._callbacks["$"+t],this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n)for(var r=0,o=(n=n.slice(0)).length;r<o;++r)n[r].apply(this,e);return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length},t.exports=r},SKMy:function(t,e,n){var r=n("JwyU");t.exports=function(t,e){if(e=e||{},"string"==typeof t&&(t=document.querySelector(t)),t)return r(0,function(t,e,n){var r,o=document.body,i=document.documentElement,u=t.getBoundingClientRect(),c=i.clientHeight,a=Math.max(o.scrollHeight,o.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight);e=e||0,r="bottom"===n?u.bottom-c:"middle"===n?u.bottom-c/2-u.height/2:u.top;var l=a-c;return Math.min(r+e+window.pageYOffset,l)}(t,e.offset,e.align),e)}},aTCE:function(t,e,n){"use strict";n("q1tI"),n("Wbzz")},bQgK:function(t,e,n){(function(e){(function(){var n,r,o,i,u,c;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:null!=e&&e.hrtime?(t.exports=function(){return(n()-u)/1e6},r=e.hrtime,i=(n=function(){var t;return 1e9*(t=r())[0]+t[1]})(),c=1e9*e.uptime(),u=i-c):Date.now?(t.exports=function(){return Date.now()-o},o=Date.now()):(t.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,n("8oxB"))},boqk:function(t,e,n){"use strict";e.__esModule=!0,e.default=void 0;var r=function(t,e){void 0===e&&(e="start");var n=document.querySelector(t);return!!n&&(n.scrollIntoView({behavior:"smooth",block:e}),!0)};e.default=r},dj5g:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.logWarning=p,e.scroller=h,e.handleLinkClick=function(t,e,n){t.includes("/")&&t.includes("#")||p(c.IMPROPPER_FORMATTING);if(f&&t.includes("#")){var r=l(t.split("#"),2),o=r[0],i=r[1];window.location.pathname===(0,u.withPrefix)(o)&&(e.preventDefault(),h("#".concat(i),window.gatsby_scroll_offset,window.gatsby_scroll_duration))}n&&n()},e.handleStrippedLinkClick=function(t,e,n){t.includes("/")&&t.includes("#")||p(c.IMPROPPER_FORMATTING);var r=l(t.split("#"),2),o=r[0],i=r[1],u=f&&window.location.pathname===o,a=f&&window.location.pathname!==o;u&&(e.preventDefault(),h("#".concat(i),window.gatsby_scroll_offset,window.gatsby_scroll_duration));a&&(window.gatsby_scroll_hash="#".concat(i));n&&n()},e.stripHashedLocation=function(t){return t.split("#")[0]},e.checkHash=function(t,e){var n=t.hash,r=n?n.substr(1):null,o=r?document.getElementById(r):null;n&&Boolean(o)?h(n,e):n&&r&&!o&&p(c.INVALID_HASH)},e.isDevelopment=e.isBrowser=void 0;var o,i=(o=n("SKMy"))&&o.__esModule?o:{default:o},u=n("Wbzz"),c=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!=typeof t)return{default:t};var e=a();if(e&&e.has(t))return e.get(t);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var u=o?Object.getOwnPropertyDescriptor(t,i):null;u&&(u.get||u.set)?Object.defineProperty(n,i,u):n[i]=t[i]}n.default=t,e&&e.set(t,n);return n}(n("GVS5"));function a(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return a=function(){return t},t}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var u,c=t[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(a){o=!0,i=a}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var f="undefined"!=typeof window;e.isBrowser=f;function p(t){0}function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;(0,i.default)(t,{duration:n,offset:e})}e.isDevelopment=!1},hBhu:function(t,e){e.linear=function(t){return t},e.inQuad=function(t){return t*t},e.outQuad=function(t){return t*(2-t)},e.inOutQuad=function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},e.inCube=function(t){return t*t*t},e.outCube=function(t){return--t*t*t+1},e.inOutCube=function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},e.inQuart=function(t){return t*t*t*t},e.outQuart=function(t){return 1- --t*t*t*t},e.inOutQuart=function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},e.inQuint=function(t){return t*t*t*t*t},e.outQuint=function(t){return--t*t*t*t*t+1},e.inOutQuint=function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},e.inSine=function(t){return 1-Math.cos(t*Math.PI/2)},e.outSine=function(t){return Math.sin(t*Math.PI/2)},e.inOutSine=function(t){return.5*(1-Math.cos(Math.PI*t))},e.inExpo=function(t){return 0==t?0:Math.pow(1024,t-1)},e.outExpo=function(t){return 1==t?t:1-Math.pow(2,-10*t)},e.inOutExpo=function(t){return 0==t?0:1==t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},e.inCirc=function(t){return 1-Math.sqrt(1-t*t)},e.outCirc=function(t){return Math.sqrt(1- --t*t)},e.inOutCirc=function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},e.inBack=function(t){var e=1.70158;return t*t*((e+1)*t-e)},e.outBack=function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},e.inOutBack=function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},e.inBounce=function(t){return 1-e.outBounce(1-t)},e.outBounce=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},e.inOutBounce=function(t){return t<.5?.5*e.inBounce(2*t):.5*e.outBounce(2*t-1)+.5},e.inElastic=function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4))},e.outElastic=function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.4)+1)},e.inOutElastic=function(t){var e,n=.1,r=.4;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=r*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/r)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/r)*.5+1)},e["in-quad"]=e.inQuad,e["out-quad"]=e.outQuad,e["in-out-quad"]=e.inOutQuad,e["in-cube"]=e.inCube,e["out-cube"]=e.outCube,e["in-out-cube"]=e.inOutCube,e["in-quart"]=e.inQuart,e["out-quart"]=e.outQuart,e["in-out-quart"]=e.inOutQuart,e["in-quint"]=e.inQuint,e["out-quint"]=e.outQuint,e["in-out-quint"]=e.inOutQuint,e["in-sine"]=e.inSine,e["out-sine"]=e.outSine,e["in-out-sine"]=e.inOutSine,e["in-expo"]=e.inExpo,e["out-expo"]=e.outExpo,e["in-out-expo"]=e.inOutExpo,e["in-circ"]=e.inCirc,e["out-circ"]=e.outCirc,e["in-out-circ"]=e.inOutCirc,e["in-back"]=e.inBack,e["out-back"]=e.outBack,e["in-out-back"]=e.inOutBack,e["in-bounce"]=e.inBounce,e["out-bounce"]=e.outBounce,e["in-out-bounce"]=e.inOutBounce,e["in-elastic"]=e.inElastic,e["out-elastic"]=e.outElastic,e["in-out-elastic"]=e.inOutElastic},oEq0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"AnchorLink",{enumerable:!0,get:function(){return r.AnchorLink}});var r=n("F0uZ")},qS3X:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("YwZP");function o(){return new URLSearchParams(Object(r.useLocation)().search)}},"xEK/":function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("uWGQ"),u=n("1Xmf"),c=n("XhhI"),a=n("KRny");e.a=function(t){var e=t.cards;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,null,o.a.createElement(u.a,null)),o.a.createElement(a.a,null,o.a.createElement(i.a,{cards:e})))}},xEkU:function(t,e,n){(function(e){for(var r=n("bQgK"),o="undefined"==typeof window?e:window,i=["moz","webkit"],u="AnimationFrame",c=o["request"+u],a=o["cancel"+u]||o["cancelRequest"+u],l=0;!c&&l<i.length;l++)c=o[i[l]+"Request"+u],a=o[i[l]+"Cancel"+u]||o[i[l]+"CancelRequest"+u];if(!c||!a){var s=0,f=0,p=[];c=function(t){if(0===p.length){var e=r(),n=Math.max(0,1e3/60-(e-s));s=n+e,setTimeout((function(){var t=p.slice(0);p.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(s)}catch(n){setTimeout((function(){throw n}),0)}}),Math.round(n))}return p.push({handle:++f,callback:t,cancelled:!1}),f},a=function(t){for(var e=0;e<p.length;e++)p[e].handle===t&&(p[e].cancelled=!0)}}t.exports=function(t){return c.call(o,t)},t.exports.cancel=function(){a.apply(o,arguments)},t.exports.polyfill=function(t){t||(t=o),t.requestAnimationFrame=c,t.cancelAnimationFrame=a}}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=33aa761eaac5d75fb9c8f9555888488d4aa02ae0-76d8ee5a35be94538800.js.map