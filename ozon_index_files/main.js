!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=83)}([function(t,e,r){var n=r(50);t.exports=function(t,e,r){var o=null==t?void 0:n(t,e);return void 0===o?r:o}},function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},function(t,e,r){var n=r(16),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();t.exports=i},function(t,e,r){var n=r(17),o=r(37),i=r(14),s=r(5),a=r(23),c=r(25),u=r(18),p=r(27),f=Object.prototype.hasOwnProperty;t.exports=function(t){if(null==t)return!0;if(a(t)&&(s(t)||"string"==typeof t||"function"==typeof t.splice||c(t)||p(t)||i(t)))return!t.length;var e=o(t);if("[object Map]"==e||"[object Set]"==e)return!t.size;if(u(t))return!n(t).length;for(var r in t)if(f.call(t,r))return!1;return!0}},function(t,e,r){var n=r(28);t.exports=function(t){return(null==t?0:t.length)?n(t,1):[]}},function(t,e){var r=Array.isArray;t.exports=r},function(t,e,r){var n=r(39),o=r(42);t.exports=function(t,e){var r=o(t,e);return n(r)?r:void 0}},function(t,e,r){var n=r(8),o=r(33),i=r(34),s=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":s&&s in Object(t)?o(t):i(t)}},function(t,e,r){var n=r(2).Symbol;t.exports=n},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,r){var n=r(6)(Object,"create");t.exports=n},function(t,e,r){var n=r(67);t.exports=function(t,e){for(var r=t.length;r--;)if(n(t[r][0],e))return r;return-1}},function(t,e,r){var n=r(72);t.exports=function(t,e){var r=t.__data__;return n(e)?r["string"==typeof e?"string":"hash"]:r.map}},function(t,e,r){var n=r(80),o=r(17),i=r(23);t.exports=function(t){return i(t)?n(t):o(t)}},function(t,e,r){var n=r(32),o=r(9),i=Object.prototype,s=i.hasOwnProperty,a=i.propertyIsEnumerable,c=n(function(){return arguments}())?n:function(t){return o(t)&&s.call(t,"callee")&&!a.call(t,"callee")};t.exports=c},function(t,e,r){var n=r(7),o=r(9);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==n(t)}},function(t,e,r){(function(e){var r="object"==typeof e&&e&&e.Object===Object&&e;t.exports=r}).call(this,r(31))},function(t,e,r){var n=r(18),o=r(35),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return o(t);var e=[];for(var r in Object(t))i.call(t,r)&&"constructor"!=r&&e.push(r);return e}},function(t,e){var r=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}},function(t,e,r){var n=r(7),o=r(20);t.exports=function(t){if(!o(t))return!1;var e=n(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e){var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e,r){var n=r(6)(r(2),"Map");t.exports=n},function(t,e,r){var n=r(19),o=r(24);t.exports=function(t){return null!=t&&o(t.length)&&!n(t)}},function(t,e){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},function(t,e,r){(function(t){var n=r(2),o=r(46),i=e&&!e.nodeType&&e,s=i&&"object"==typeof t&&t&&!t.nodeType&&t,a=s&&s.exports===i?n.Buffer:void 0,c=(a?a.isBuffer:void 0)||o;t.exports=c}).call(this,r(26)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,r){var n=r(47),o=r(48),i=r(49),s=i&&i.isTypedArray,a=s?o(s):n;t.exports=a},function(t,e,r){var n=r(29),o=r(30);t.exports=function t(e,r,i,s,a){var c=-1,u=e.length;for(i||(i=o),a||(a=[]);++c<u;){var p=e[c];r>0&&i(p)?r>1?t(p,r-1,i,s,a):n(a,p):s||(a[a.length]=p)}return a}},function(t,e){t.exports=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}},function(t,e,r){var n=r(8),o=r(14),i=r(5),s=n?n.isConcatSpreadable:void 0;t.exports=function(t){return i(t)||o(t)||!!(s&&t&&t[s])}},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){var n=r(7),o=r(9);t.exports=function(t){return o(t)&&"[object Arguments]"==n(t)}},function(t,e,r){var n=r(8),o=Object.prototype,i=o.hasOwnProperty,s=o.toString,a=n?n.toStringTag:void 0;t.exports=function(t){var e=i.call(t,a),r=t[a];try{t[a]=void 0;var n=!0}catch(t){}var o=s.call(t);return n&&(e?t[a]=r:delete t[a]),o}},function(t,e){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},function(t,e,r){var n=r(36)(Object.keys,Object);t.exports=n},function(t,e){t.exports=function(t,e){return function(r){return t(e(r))}}},function(t,e,r){var n=r(38),o=r(22),i=r(43),s=r(44),a=r(45),c=r(7),u=r(21),p=u(n),f=u(o),l=u(i),d=u(s),h=u(a),_=c;(n&&"[object DataView]"!=_(new n(new ArrayBuffer(1)))||o&&"[object Map]"!=_(new o)||i&&"[object Promise]"!=_(i.resolve())||s&&"[object Set]"!=_(new s)||a&&"[object WeakMap]"!=_(new a))&&(_=function(t){var e=c(t),r="[object Object]"==e?t.constructor:void 0,n=r?u(r):"";if(n)switch(n){case p:return"[object DataView]";case f:return"[object Map]";case l:return"[object Promise]";case d:return"[object Set]";case h:return"[object WeakMap]"}return e}),t.exports=_},function(t,e,r){var n=r(6)(r(2),"DataView");t.exports=n},function(t,e,r){var n=r(19),o=r(40),i=r(20),s=r(21),a=/^\[object .+?Constructor\]$/,c=Function.prototype,u=Object.prototype,p=c.toString,f=u.hasOwnProperty,l=RegExp("^"+p.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(n(t)?l:a).test(s(t))}},function(t,e,r){var n,o=r(41),i=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(t){return!!i&&i in t}},function(t,e,r){var n=r(2)["__core-js_shared__"];t.exports=n},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e,r){var n=r(6)(r(2),"Promise");t.exports=n},function(t,e,r){var n=r(6)(r(2),"Set");t.exports=n},function(t,e,r){var n=r(6)(r(2),"WeakMap");t.exports=n},function(t,e){t.exports=function(){return!1}},function(t,e,r){var n=r(7),o=r(24),i=r(9),s={};s["[object Float32Array]"]=s["[object Float64Array]"]=s["[object Int8Array]"]=s["[object Int16Array]"]=s["[object Int32Array]"]=s["[object Uint8Array]"]=s["[object Uint8ClampedArray]"]=s["[object Uint16Array]"]=s["[object Uint32Array]"]=!0,s["[object Arguments]"]=s["[object Array]"]=s["[object ArrayBuffer]"]=s["[object Boolean]"]=s["[object DataView]"]=s["[object Date]"]=s["[object Error]"]=s["[object Function]"]=s["[object Map]"]=s["[object Number]"]=s["[object Object]"]=s["[object RegExp]"]=s["[object Set]"]=s["[object String]"]=s["[object WeakMap]"]=!1,t.exports=function(t){return i(t)&&o(t.length)&&!!s[n(t)]}},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e,r){(function(t){var n=r(16),o=e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,s=i&&i.exports===o&&n.process,a=function(){try{var t=i&&i.require&&i.require("util").types;return t||s&&s.binding&&s.binding("util")}catch(t){}}();t.exports=a}).call(this,r(26)(t))},function(t,e,r){var n=r(51),o=r(79);t.exports=function(t,e){for(var r=0,i=(e=n(e,t)).length;null!=t&&r<i;)t=t[o(e[r++])];return r&&r==i?t:void 0}},function(t,e,r){var n=r(5),o=r(52),i=r(53),s=r(76);t.exports=function(t,e){return n(t)?t:o(t,e)?[t]:i(s(t))}},function(t,e,r){var n=r(5),o=r(15),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/;t.exports=function(t,e){if(n(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!o(t))||(s.test(t)||!i.test(t)||null!=e&&t in Object(e))}},function(t,e,r){var n=r(54),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,s=n((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,(function(t,r,n,o){e.push(n?o.replace(i,"$1"):r||t)})),e}));t.exports=s},function(t,e,r){var n=r(55);t.exports=function(t){var e=n(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}},function(t,e,r){var n=r(56);function o(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var s=t.apply(this,n);return r.cache=i.set(o,s)||i,s};return r.cache=new(o.Cache||n),r}o.Cache=n,t.exports=o},function(t,e,r){var n=r(57),o=r(71),i=r(73),s=r(74),a=r(75);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=s,c.prototype.set=a,t.exports=c},function(t,e,r){var n=r(58),o=r(64),i=r(22);t.exports=function(){this.size=0,this.__data__={hash:new n,map:new(i||o),string:new n}}},function(t,e,r){var n=r(59),o=r(60),i=r(61),s=r(62),a=r(63);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=s,c.prototype.set=a,t.exports=c},function(t,e,r){var n=r(10);t.exports=function(){this.__data__=n?n(null):{},this.size=0}},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},function(t,e,r){var n=r(10),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(n){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return o.call(e,t)?e[t]:void 0}},function(t,e,r){var n=r(10),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return n?void 0!==e[t]:o.call(e,t)}},function(t,e,r){var n=r(10);t.exports=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=n&&void 0===e?"__lodash_hash_undefined__":e,this}},function(t,e,r){var n=r(65),o=r(66),i=r(68),s=r(69),a=r(70);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=s,c.prototype.set=a,t.exports=c},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,r){var n=r(11),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,r=n(e,t);return!(r<0)&&(r==e.length-1?e.pop():o.call(e,r,1),--this.size,!0)}},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,r){var n=r(11);t.exports=function(t){var e=this.__data__,r=n(e,t);return r<0?void 0:e[r][1]}},function(t,e,r){var n=r(11);t.exports=function(t){return n(this.__data__,t)>-1}},function(t,e,r){var n=r(11);t.exports=function(t,e){var r=this.__data__,o=n(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this}},function(t,e,r){var n=r(12);t.exports=function(t){var e=n(this,t).delete(t);return this.size-=e?1:0,e}},function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},function(t,e,r){var n=r(12);t.exports=function(t){return n(this,t).get(t)}},function(t,e,r){var n=r(12);t.exports=function(t){return n(this,t).has(t)}},function(t,e,r){var n=r(12);t.exports=function(t,e){var r=n(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this}},function(t,e,r){var n=r(77);t.exports=function(t){return null==t?"":n(t)}},function(t,e,r){var n=r(8),o=r(78),i=r(5),s=r(15),a=n?n.prototype:void 0,c=a?a.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(i(e))return o(e,t)+"";if(s(e))return c?c.call(e):"";var r=e+"";return"0"==r&&1/e==-1/0?"-0":r}},function(t,e){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}},function(t,e,r){var n=r(15);t.exports=function(t){if("string"==typeof t||n(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},function(t,e,r){var n=r(81),o=r(14),i=r(5),s=r(25),a=r(82),c=r(27),u=Object.prototype.hasOwnProperty;t.exports=function(t,e){var r=i(t),p=!r&&o(t),f=!r&&!p&&s(t),l=!r&&!p&&!f&&c(t),d=r||p||f||l,h=d?n(t.length,String):[],_=h.length;for(var g in t)!e&&!u.call(t,g)||d&&("length"==g||f&&("offset"==g||"parent"==g)||l&&("buffer"==g||"byteLength"==g||"byteOffset"==g)||a(g,_))||h.push(g);return h}},function(t,e){t.exports=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}},function(t,e){var r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&r.test(t))&&t>-1&&t%1==0&&t<e}},function(t,e,r){"use strict";r.r(e);var n=r(4),o=r.n(n),i=r(3),s=r.n(i),a=r(0),c=r.n(a);let u,p;function f(t,e){return new Promise(r=>setTimeout(()=>r(e),t))}function l(t){if(!t||"string"!=typeof t)return null;const e=t.replace(/[^\d;]/g,"");return parseInt(e[0])||null}!function(t){t.HIT="HIT",t.MISS="MISS"}(u||(u={})),function(t){t.UNKNOWN="CACHE_TYPE_UNKNOWN",t.NGINX="NGINX",t.CDN_MIDGRESS="CDN_MIDGRESS",t.CDN="CDN",t.MISS_ALL="MISS_ALL"}(p||(p={}));async function d(){const t=await navigator.permissions.query({name:"notifications"});return"denied"===Notification.permission&&"prompt"===t.state}const h=async(t,e)=>{let r="";return t?r="sitespeed":e?r="ui-tests":await async function(){if(!navigator.permissions)return!1;try{return await Promise.race([d(),f(100,!0)])}catch(t){}return!1}()?r="browser-detect/headless":window.navigator.webdriver&&(r="webdriver"),r?{testingToolName:r}:{}};var _=r(13),g=r.n(_),y=function(t,e){if("number"==typeof t&&"number"==typeof e)return t-e};const m={BodyFirstByte:"ST_BODY_FIRST_BYTE",BodyJSONTime:"ST_BODY_JSON_TIME",ComposerInternal:"ST_COMPOSER_INTERNAL",ComposerResponseTotal:"ST_COMPOSER_RESPONSE_TOTAL",ComposerTotal:"ST_COMPOSER_TOTAL",EntrypointInternal:"ST_ENTRYPOINT_INTERNAL",FirstByte:"ST_FIRST_BYTE",HeadJSONTime:"ST_HEAD_JSON_TIME",HeadLastByte:"ST_HEAD_LAST_BYTE",LastByte:"ST_LAST_BYTE",RenderTotal:"ST_RENDER_TOTAL",Resolve:"ST_RESOLVE",Total:"ST_TOTAL",Internal:"ST_INTERNAL",Widgets:"ST_WIDGETS",edge:"EDGE_TIME"},T=(t=[])=>{const e={};return 0===t.length||t.forEach(({name:t,duration:r})=>{m[t]&&(e[m[t]]=r)}),e},v=t=>{const{domainLookupEnd:e,domainLookupStart:r,connectEnd:n,redirectEnd:o,redirectStart:i,responseStart:s,responseEnd:a,secureConnectionStart:c,fetchStart:u,connectStart:p,redirectCount:f,duration:d,decodedBodySize:h,encodedBodySize:_,transferSize:g,nextHopProtocol:m}=t;return{...{CACHE_TIME:y(r,u),TLS_TIME:y(n,c),DNS_TIME:y(e,r)},...{TCP_TIME:y(n,p),REDIRECT_TIME:y(o,i),REDIRECT_COUNT:f,TIME_TO_FIRST_BYTE:y(s,r),TIME_TO_LAST_BYTE:y(a,r),TOTAL_TIME:d,PROTOCOL_VERSION:l(m)},...{TRANSFER_SIZE:g,DECODED_SIZE:h,ENCODED_SIZE:_}}};let b;!function(t){t.Navigate="NTT_NAVIGATE",t.Reload="NTT_RELOAD",t.BackForward="NTT_BACK_FORWARD",t.Prerender="NTT_PRERENDER"}(b||(b={}));const E={navigate:b.Navigate,reload:b.Reload,back_forward:b.BackForward,prerender:b.Prerender},S=()=>{const t=performance.getEntriesByType("navigation")[0],{domLoading:e,domComplete:r,domInteractive:n,domContentLoadedEventEnd:o,responseStart:i,responseEnd:s,requestStart:a,navigationStart:u,startTime:p}=t;let f;const l=v(t),d={DOM_LOADING_TIME:y(e,u||p),DOM_CONTENT_LOADED_TIME:y(o,u||p),DOM_COMPLETE_TIME:y(r,u||p),DOM_INTERACTIVE_TIME:y(n,u||p),SERVER_TIME:y(i,a),RESPONSE_TIME:y(s,i)};f={...d,...l};const h=c()(performance.getEntriesByName("HYDRATION_TIME"),"0.startTime"),_=window.__ST__?((t={})=>Object.entries(t).map(([t,e])=>({name:t,duration:e})))(window.__ST__):t.serverTiming;f={...f,...T(_),HYDRATION_TIME:y(h,o)};const m={};return g()(f).filter(t=>f[t]>0).forEach(t=>m[t]=f[t]),m},w=navigator.connection||navigator.mozConnection||navigator.webkitConnection,x=(new Date).toISOString(),j=(t,e)=>t.filter(({name:t})=>t===e);function I(){const t={};if(w){const e="CELLULAR_"+c()(w,"effectiveType","").toUpperCase().replace("-","_");t.connectionType=e}return t.navigationTimingType=(()=>{const t=performance.getEntriesByType("navigation")[0];return E[t.type]})(),t}async function O(t,{attributes:e,user:r,page:n,object:o,properties:i={},isSiteSpeed:s,isUiTests:a}){const c=I(),u=function(t={}){return Object.keys(t).map(e=>({type:e,value:t[e]}))}(t);return u.length?[{metrics:u,attributes:e,object:o,timestamp:x,user:r,page:n,...await h(s,a),properties:{...i,...c}}]:[]}var M=t=>async e=>{const{metrics:r,properties:n}=e;if(s()(r))return{};const o={...t,properties:{...t.properties,...n}};return await O(r,o)};const N=(t,e=!1)=>{const{initiatorType:r,serverTiming:n=[]}=t,o=v(t),i="img"===r||e?((t=[])=>{const e=t.reduce((t,e)=>"o3_img_resize"===e.name?(t[e.name]=e.duration||0,t):(t[e.name]=e.description||"",t),{}),r={cacheType:p.UNKNOWN},n=!e["cdn-cache"]||e["cdn-cache"]===u.MISS;return e["cdn-cache"]===u.HIT?r.cacheType=p.CDN:n&&e.o3_img_cache===u.HIT?r.cacheType=p.NGINX:n&&e.o3_img_cache===u.MISS?(r.cacheType=p.MISS_ALL,r.resizeTime=e.o3_img_resize):n&&"midgress"in e&&(r.cacheType=p.CDN_MIDGRESS),r})(n):{},s={...o,...i.resizeTime?{IMG_RESIZE_TIME:i.resizeTime}:{}},a={};return g()(s).filter(t=>s[t]>0).forEach(t=>a[t]=s[t]),{metrics:a,properties:{url:t.name,cacheType:i.cacheType}}};const A={CLS:"CUMULATIVE_LAYOUT_SHIFT",LCP:"LARGEST_CONTENTFUL_PAINT",FID:"FIRST_INPUT_DELAY",LT:"LONG_TASK_COUNT"},P=t=>{const e={};return Object.keys(t).forEach(r=>{var n;t[r].value&&(e[(n=r,A[n])]=t[r].value)}),e};var C=function(t=[]){if(performance.getEntriesByType){const e=performance.getEntriesByType("mark").reduce((t,e)=>(t[e.name]=e.startTime,t),{}),r={};for(let n=0;n<t.length;n++){const o=t[n],i=y(e[o+":end"],e[o+":start"]);i&&i>0&&(r[o]=i,performance.clearMarks(o+":end"))}return 0===Object.keys(r).length?{}:r}return{}},k=({trackNavigation:t,trackPaint:e,customMarksNames:r})=>({...t?S():{},...e?function(){if(performance.getEntriesByType){const t=performance.getEntriesByType("paint"),[e]=j(t,"first-contentful-paint"),[r]=j(t,"first-paint");if(e&&r)return{FIRST_CONTENTFUL_PAINT:e.startTime,FIRST_PAINT:r.startTime}}return{}}():{},...C(r)});let U;var L=({endpoint:t,headers:e},r)=>{U||(U=async function t(e=1e3,r=100,n=10){const o=window.__BAZONE__;if(o&&"object"==typeof o&&"function"==typeof o.then)return Promise.race([o,f(e)]);if(n>0){await f(r);return t(e,r,n-1)}return Promise.resolve()}()),U.then(()=>{const n=c()(window,"__NUXT__.state.requestID"),o=JSON.stringify({...n?{requestId:n}:{},...r});e&&"object"==typeof e?fetch(t,{body:o,method:"POST",headers:{"Content-Type":"application/json",...e}}):navigator.sendBeacon(t,o)})};const R=async({metrics:t={},getUser:e,getPage:r,object:n={},getAttributes:i,endpoint:a,trackNavigation:u,trackPaint:p,customMarksNames:l,trackImages:d,resources:h=[],trackJs:_,trackSpa:g,spaTransitionUrl:y,queryUrl:m,trackPagination:v,paginationUrl:b,extraPageInfo:E={},isSiteSpeed:S,isUiTests:w,webVitalsVariable:x,headers:j})=>{if(!window.performance||!performance.timing)return;const I={...k({trackNavigation:u,trackPaint:p,customMarksNames:l}),...t,...x?P(x):{}},A={attributes:i(),user:e(),page:r(),object:n,isSiteSpeed:S,isUiTests:w},C=d&&h.length?await async function(t,e){const r={...t,object:{type:"IMAGE"}},n=e.filter(t=>"img"===t.initiatorType).map(t=>N(t)).map(M(r)),i=await Promise.all(n);return i.filter(t=>!s()(t)),o()(i)}(A,h):[],U=_?await async function(t){const e={...t,object:{type:"SCRIPT"}},r=performance.getEntriesByType("resource").filter(t=>/\.js$/.test(t.name)).map(t=>N(t)).map(M(e)),n=await Promise.all(r);return n.filter(t=>!s()(t)),o()(n)}(A):[],R=v?await(async(t,e,{layoutContainer:r,layoutPagePartIndex:n,queryUrl:o="",loaderVisibleTime:i})=>{const s=c()(performance.getEntriesByName("paginationStart"),"0.startTime"),a=c()(performance.getEntriesByName("paginationEnd"),"0.startTime"),u=()=>performance.getEntriesByType("resource").find(t=>t.name.includes(encodeURIComponent(o)));let p=u(),l=10;for(;!p||l<=0;)await f(100),p=u(),l-=1;if(!p)return[];performance.clearMarks("paginationStart"),performance.clearMarks("paginationEnd");const d=N(p);return r&&n&&(t.page={...t.page,layoutContainer:r,layoutPagePartIndex:n}),t.properties={...t.properties,withSW:p.workerStart>0},d.metrics={...d.metrics,...T(p.serverTiming)},d.metrics.TOTAL_TIME=a-s,i&&(d.metrics.LOADER_TIME=i.end-i.start),M(t)(d)})(A,0,E):[],D=g?await(async(t,e,{saveMarks:r}={},n="")=>{const o=c()(performance.getEntriesByName("spaTransitionStart"),"0.startTime"),i=c()(performance.getEntriesByName("spaTransitionEnd"),"0.startTime"),s=c()(performance.getEntriesByName("layoutTimeStart"),"0.startTime"),a=c()(performance.getEntriesByName("layoutTimeEnd"),"0.startTime"),u=()=>performance.getEntriesByType("resource").find(t=>t.name.includes(encodeURIComponent(n)));let p=u(),l=10;for(;!p||l<=0;)await f(100),p=u(),l-=1;if(!p)return[];const d=N(p);d.metrics={...d.metrics,...T(p.serverTiming)},d.metrics.TOTAL_TIME=i-o,d.metrics.LAYOUT_TIME=a-s;const h=(t=>{for(const r of t){var e;if("edge_ip"===r.name)return null!==(e=r.description)&&void 0!==e?e:""}return""})(p.serverTiming);return h&&(d.properties.edgeIp=h),r||setTimeout(()=>{performance.clearMarks("spaTransitionStart"),performance.clearMarks("spaTransitionEnd"),performance.clearMarks("layoutTimeStart"),performance.clearMarks("layoutTimeEnd")},0),M(t)(d)})(A,0,{saveMarks:S},m):[],B={events:[...u||p||l||x?await O(I,A):[],...D,...R,...C,...U]};L({endpoint:a,headers:j},B)};const D=async({getAttributes:t,object:e,propertyUrl:r,metrics:n,getUser:o,getPage:i,endpoint:s,headers:a,isSiteSpeed:c,isUiTests:u,errors:p})=>{const f={attributes:t(),user:o(),page:i(),object:e,isSiteSpeed:c,isUiTests:u,properties:{url:r}};if(!n.length)return;p&&p.length&&f.properties&&(f.properties.errors=p);const l=await async function(t,{attributes:e,user:r,page:n,object:o,properties:i={},isSiteSpeed:s,isUiTests:a}){if(!t.length)return[];const c=I();return[{customMetrics:t,attributes:e,object:o,timestamp:x,user:r,page:n,...await h(s,a),properties:{...i,...c}}]}(n,f);L({endpoint:s,headers:a},{events:l})},B=["https://pxl-b10.ozone.ru/pxl/t.gif","https://pxl-b20.ozone.ru/pxl/t.gif","https://pxl-c10.ozone.ru/pxl/t.gif","https://pxl-c20.ozone.ru/pxl/t.gif","https://pxl-d10.ozone.ru/pxl/t.gif","https://pxl-d20.ozone.ru/pxl/t.gif","https://pxl-e10.ozone.ru/pxl/t.gif","https://pxl-f10.ozone.ru/pxl/t.gif","https://pxl-g20.ozone.ru/pxl/t.gif","https://pxl-h20.ozone.ru/pxl/t.gif","https://pxl-i20.ozone.ru/pxl/t.gif","https://pxl-k10.ozone.ru/pxl/t.gif"];const z=async(t,e=B)=>{await async function(t){for(const e of t)try{await fetch(e,{cache:"no-store"})}catch(t){}}(e);const r=()=>{const t=e.map(t=>performance.getEntriesByName(t));return o()(t)};let n=r(),i=10;for(;n.length!==e.length||i<=0;)await f(100),n=r(),i-=1;const a={...t,object:{type:"PIXEL"}},c=n.map(t=>N(t,!0)).map(M(a)),u=await Promise.all(c);return u.filter(t=>!s()(t)),o()(u)},F=(t=[])=>t.map(t=>{const{widgetName:e="",value:r=0}=t;return{name:"WidgetRender",value:r,metric:e}}),H={};function G(t,e,r,n){const o=function t(e){const r=[];for(const n of e)if(void 0!==n.timeSpent&&r.push(n),void 0!==n.placeholders)for(const e of n.placeholders)r.push(...t(e.widgets));return r}(r);o.length>0&&function(t,e,r=[],n){const o=[];r.forEach(t=>{H[t.stateId]||(o.push({name:"WidgetTimeSpent",value:t.timeSpent,metric:t.name}),H[t.stateId]=1)}),window.__ClientMetrics__.trackCustomMetric({propertyUrl:t,objectType:e,metrics:n?[...o,...F(window.widgetsTiming)]:o})}(t,e,o,n)}var V=r(1),Y=r.n(V);let W;!function(t){t.START="start",t.END="end"}(W||(W={}));class ${constructor(t){Y()(this,"heldEntries",[]),Y()(this,"sentEntries",[]),Y()(this,"capacity",20),this.capacity=void 0!==t.capacity?t.capacity:20}addHeldEntries(t,e=W.END){"start"===e?this.heldEntries.unshift(...t):this.heldEntries.push(...t)}addSentEntries(t){this.sentEntries.push(...t)}deleteHeldEntry(t){return"object"==typeof this.heldEntries[t]&&(this.heldEntries.splice(t,1),!0)}clearHeldEntries(){this.heldEntries=[]}clearSentEntries(){this.sentEntries=[]}checkFilled(){return this.heldEntries.length>=this.capacity}}let J;!function(t){t.trackImages="trackImages"}(J||(J={}));const q=new class{constructor(t){Y()(this,"store",void 0),Y()(this,"config",{}),Y()(this,"sendTimerId",void 0),Y()(this,"sendTimeout",void 0),Y()(this,"isPageCloseSent",void 0),Y()(this,"isOnUnload",!1),this.config=Object.assign({},t);try{this.store=new $({capacity:this.config.capacity})}catch(t){throw console.error(t),t}this.sendTimeout=this.config.sendTimeout,setTimeout(()=>{const t=()=>{"hidden"===document.visibilityState&&(this.flush(),removeEventListener("visibilitychange",t,!0))};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",()=>this.flush(),{capture:!0,once:!0})}),window.addEventListener("beforeunload",()=>{this.isOnUnload=!0,this.flush()})}cancelScheduledSend(){void 0!==this.sendTimerId&&clearTimeout(this.sendTimerId)}add(t,e={}){if(!1===this.isPageCloseSent||this.isOnUnload&&void 0===this.isPageCloseSent)return this.cancelScheduledSend(),this.store.addHeldEntries([t]),!0;this.store.checkFilled()&&this.send();const{force:r=!1}=e;return this.store.addHeldEntries([t]),this.cancelScheduledSend(),r?(this.flush(),!this.store.checkFilled()):(this.sendTimerId=setTimeout(()=>{this.send()},this.sendTimeout),!this.store.checkFilled())}flush(){return void 0!==this.sendTimerId&&(clearTimeout(this.sendTimerId),this.sendTimerId=void 0),this.send(),!0}send(){const t=this.store.heldEntries;if(!t.length)return!1;const e=function(t,e=J.trackImages){return c()(window,"__ClientMetrics__."+e)?(window.__ClientMetrics__[e]({data:t}),!0):(console.error("method "+e+" not found"),!1)}(t);return e&&(this.store.clearHeldEntries(),this.store.addSentEntries(t)),e}}({pageCloseEnabled:!0,capacity:20,sendTimeout:3e4});class K{constructor(){Y()(this,"observer",void 0),this.observer=new PerformanceObserver(this.collectEntries),document.addEventListener("pagehide",this.stopCollectEntries)}collectEntries(t){t.getEntries().filter(t=>"img"===t.initiatorType).forEach(t=>{q.add(t)})}startCollectEntries(){this.observer.observe({type:"resource",buffered:!0})}stopCollectEntries(){this.observer.disconnect()}}window.__ClientMetrics__={},window.__ClientMetrics__.init=function({isBot:t=!1,endpoint:e="",getAttributes:r=(()=>null),trackNavigation:n=!0,trackPaint:o=!0,trackImages:i=!1,trackJs:s=!1,trackCdnImages:a=!1,trackWidgetsTimeSpent:u=!1,customMarksNames:p=[],trackMemory:f=!0,getUser:l=(()=>null),getPage:d=(()=>null),object:h={},settings:_={spaTransitionUrl:"",paginationUrl:""},isSiteSpeed:g=!1,isUiTests:y=!1,webVitalsVariable:m=window.$$windowMetrics,headers:T=null}={}){try{if(t)return;if(!e)return;if(!(window&&window.navigator&&navigator.sendBeacon))return;const v={metrics:{},getAttributes:r,isSiteSpeed:g,isUiTests:y,object:h,getUser:l,getPage:d,endpoint:e,trackNavigation:n,trackPaint:o,trackJs:s,trackCdnImages:a,customMarksNames:p,headers:T},{spaTransitionUrl:b,paginationUrl:E}=_,S=()=>R(v),w=()=>(async({getUser:t,getPage:e,object:r,getAttributes:n,endpoint:o,trackCdnImages:i,isSiteSpeed:s,isUiTests:a,headers:c})=>{if(!i)return;const u={attributes:n(),user:t(),page:e(),object:r,isSiteSpeed:s,isUiTests:a},p={events:[...i?await z(u):[]]};L({endpoint:o,headers:c},p)})(v),x=()=>R({...v,webVitalsVariable:m});if("complete"===document.readyState?setTimeout(x,0):window.addEventListener("load",()=>setTimeout(x,0)),window.addEventListener("beforeunload",S),window.addEventListener("beforeunload",w),f&&window.addEventListener("beforeunload",()=>(async({endpoint:t,getAttributes:e,getPage:r,getUser:n,headers:o,...i})=>{const s=c()(window.performance,["memory","usedJSHeapSize"]),a=c()(window.performance,["memory","totalJSHeapSize"]),u={TOTAL_MEMORY_USAGE:a,JS_HEAP_MEMORY_USAGE:s},p={...i,attributes:e(),page:r(),user:n()};if(s||a){const e=await O(u,p);L({endpoint:t,headers:o},{events:e})}})({endpoint:e,getAttributes:r,getPage:d,getUser:l,headers:null,object:{type:"APPLICATION"}})),window.__ClientMetrics__.trackSpaTransition=(t="",{objectType:n=""}={})=>{R({customMarksNames:p,getAttributes:r,object:{type:n||"PAGE"},getUser:l,getPage:d,endpoint:e,trackSpa:!0,spaTransitionUrl:b,queryUrl:t,isSiteSpeed:g,isUiTests:y,headers:null})},window.__ClientMetrics__.trackSpa=()=>{R({customMarksNames:p,getAttributes:r,object:{type:"PAGE"},getUser:l,getPage:d,endpoint:e,isSiteSpeed:g,isUiTests:y,headers:T})},window.__ClientMetrics__.trackPaginationChange=t=>{R({getAttributes:r,object:{type:"PAGE_PART"},getUser:l,getPage:d,endpoint:e,trackPagination:!0,paginationUrl:E,extraPageInfo:t,isSiteSpeed:g,isUiTests:y,headers:null})},window.__ClientMetrics__.trackCustomMetric=({propertyUrl:t,metrics:n=[],objectType:o="CUSTOM",errors:i=[]})=>{D({getAttributes:r,object:{type:o},propertyUrl:t,metrics:n,getUser:l,getPage:d,endpoint:e,isSiteSpeed:g,isUiTests:y,headers:null,errors:i})},window.__ClientMetrics__.trackImages=({data:t})=>{R({resources:t,getAttributes:r,isSiteSpeed:g,isUiTests:y,getUser:l,getPage:d,endpoint:e,trackImages:i,headers:null})},i){(new K).startCollectEntries()}window.__ClientMetrics__.trackWidgetsTimeSpent=u?G:()=>{}}catch(t){console.error(t)}},window.__ClientMetricsAutoInit__&&window.__ClientMetricsInit__&&window.__ClientMetrics__.init(window.__ClientMetricsInit__)}])}));