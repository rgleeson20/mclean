import{e as H2}from"./chunk-H33WAMU5.js";import{Cb as c1,Hb as e1,Ia as u2,Oa as p2,Qa as d2,Sa as O1,Ta as E,V as I1,W as v2,bc as x2,ca as a1,da as h2,ea as z2,eb as C2,fa as z1,fb as E1,kb as G,lb as _,mb as Z1,ob as b2,ub as M2,vb as g2}from"./chunk-7JE5ULPF.js";function L2(a,c){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);c&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable})),e.push.apply(e,n)}return e}function s(a){for(var c=1;c<arguments.length;c++){var e=arguments[c]!=null?arguments[c]:{};c%2?L2(Object(e),!0).forEach(function(n){b(a,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):L2(Object(e)).forEach(function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))})}return a}function y1(a){"@babel/helpers - typeof";return y1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},y1(a)}function A3(a,c){if(!(a instanceof c))throw new TypeError("Cannot call a class as a function")}function V2(a,c){for(var e=0;e<c.length;e++){var n=c[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function w3(a,c,e){return c&&V2(a.prototype,c),e&&V2(a,e),Object.defineProperty(a,"prototype",{writable:!1}),a}function b(a,c,e){return c in a?Object.defineProperty(a,c,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[c]=e,a}function Q1(a,c){return q3(a)||O3(a,c)||X2(a,c)||Z3()}function m1(a){return P3(a)||I3(a)||X2(a)||E3()}function P3(a){if(Array.isArray(a))return j1(a)}function q3(a){if(Array.isArray(a))return a}function I3(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function O3(a,c){var e=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var n=[],i=!0,r=!1,t,f;try{for(e=e.call(a);!(i=(t=e.next()).done)&&(n.push(t.value),!(c&&n.length===c));i=!0);}catch(o){r=!0,f=o}finally{try{!i&&e.return!=null&&e.return()}finally{if(r)throw f}}return n}}function X2(a,c){if(a){if(typeof a=="string")return j1(a,c);var e=Object.prototype.toString.call(a).slice(8,-1);if(e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set")return Array.from(a);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return j1(a,c)}}function j1(a,c){(c==null||c>a.length)&&(c=a.length);for(var e=0,n=new Array(c);e<c;e++)n[e]=a[e];return n}function E3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var y2=function(){},a2={},J2={},K2=null,Q2={mark:y2,measure:y2};try{typeof window<"u"&&(a2=window),typeof document<"u"&&(J2=document),typeof MutationObserver<"u"&&(K2=MutationObserver),typeof performance<"u"&&(Q2=performance)}catch{}var T3=a2.navigator||{},N2=T3.userAgent,S2=N2===void 0?"":N2,T=a2,d=J2,k2=K2,u1=Q2,g5=!!T.document,I=!!d.documentElement&&!!d.head&&typeof d.addEventListener=="function"&&typeof d.createElement=="function",a3=~S2.indexOf("MSIE")||~S2.indexOf("Trident/"),p1,d1,C1,b1,M1,w="___FONT_AWESOME___",G1=16,c3="fa",e3="svg-inline--fa",Y="data-fa-i2svg",_1="data-fa-pseudo-element",F3="data-fa-pseudo-element-pending",c2="data-prefix",e2="data-icon",A2="fontawesome-i2svg",D3="async",R3=["HTML","HEAD","STYLE","SCRIPT"],n3=function(){try{return!0}catch{return!1}}(),p="classic",C="sharp",n2=[p,C];function v1(a){return new Proxy(a,{get:function(e,n){return n in e?e[n]:e[p]}})}var t1=v1((p1={},b(p1,p,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),b(p1,C,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),p1)),f1=v1((d1={},b(d1,p,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),b(d1,C,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),d1)),o1=v1((C1={},b(C1,p,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),b(C1,C,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),C1)),j3=v1((b1={},b(b1,p,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),b(b1,C,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),b1)),G3=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,i3="fa-layers-text",_3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,W3=v1((M1={},b(M1,p,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),b(M1,C,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),M1)),r3=[1,2,3,4,5,6,7,8,9,10],B3=r3.concat([11,12,13,14,15,16,17,18,19,20]),Y3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],W={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},l1=new Set;Object.keys(f1[p]).map(l1.add.bind(l1));Object.keys(f1[C]).map(l1.add.bind(l1));var $3=[].concat(n2,m1(l1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",W.GROUP,W.SWAP_OPACITY,W.PRIMARY,W.SECONDARY]).concat(r3.map(function(a){return"".concat(a,"x")})).concat(B3.map(function(a){return"w-".concat(a)})),i1=T.FontAwesomeConfig||{};function U3(a){var c=d.querySelector("script["+a+"]");if(c)return c.getAttribute(a)}function X3(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}d&&typeof d.querySelector=="function"&&(w2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],w2.forEach(function(a){var c=Q1(a,2),e=c[0],n=c[1],i=X3(U3(e));i!=null&&(i1[n]=i)}));var w2,t3={styleDefault:"solid",familyDefault:"classic",cssPrefix:c3,replacementClass:e3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};i1.familyPrefix&&(i1.cssPrefix=i1.familyPrefix);var K=s(s({},t3),i1);K.autoReplaceSvg||(K.observeMutations=!1);var v={};Object.keys(t3).forEach(function(a){Object.defineProperty(v,a,{enumerable:!0,set:function(e){K[a]=e,r1.forEach(function(n){return n(v)})},get:function(){return K[a]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(c){K.cssPrefix=c,r1.forEach(function(e){return e(v)})},get:function(){return K.cssPrefix}});T.FontAwesomeConfig=v;var r1=[];function J3(a){return r1.push(a),function(){r1.splice(r1.indexOf(a),1)}}var Z=G1,A={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function K3(a){if(!(!a||!I)){var c=d.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=a;for(var e=d.head.childNodes,n=null,i=e.length-1;i>-1;i--){var r=e[i],t=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(t)>-1&&(n=r)}return d.head.insertBefore(c,n),a}}var Q3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function s1(){for(var a=12,c="";a-- >0;)c+=Q3[Math.random()*62|0];return c}function Q(a){for(var c=[],e=(a||[]).length>>>0;e--;)c[e]=a[e];return c}function i2(a){return a.classList?Q(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(c){return c})}function f3(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function a4(a){return Object.keys(a||{}).reduce(function(c,e){return c+"".concat(e,'="').concat(f3(a[e]),'" ')},"").trim()}function k1(a){return Object.keys(a||{}).reduce(function(c,e){return c+"".concat(e,": ").concat(a[e].trim(),";")},"")}function r2(a){return a.size!==A.size||a.x!==A.x||a.y!==A.y||a.rotate!==A.rotate||a.flipX||a.flipY}function c4(a){var c=a.transform,e=a.containerWidth,n=a.iconWidth,i={transform:"translate(".concat(e/2," 256)")},r="translate(".concat(c.x*32,", ").concat(c.y*32,") "),t="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),f="rotate(".concat(c.rotate," 0 0)"),o={transform:"".concat(r," ").concat(t," ").concat(f)},m={transform:"translate(".concat(n/2*-1," -256)")};return{outer:i,inner:o,path:m}}function e4(a){var c=a.transform,e=a.width,n=e===void 0?G1:e,i=a.height,r=i===void 0?G1:i,t=a.startCentered,f=t===void 0?!1:t,o="";return f&&a3?o+="translate(".concat(c.x/Z-n/2,"em, ").concat(c.y/Z-r/2,"em) "):f?o+="translate(calc(-50% + ".concat(c.x/Z,"em), calc(-50% + ").concat(c.y/Z,"em)) "):o+="translate(".concat(c.x/Z,"em, ").concat(c.y/Z,"em) "),o+="scale(".concat(c.size/Z*(c.flipX?-1:1),", ").concat(c.size/Z*(c.flipY?-1:1),") "),o+="rotate(".concat(c.rotate,"deg) "),o}var n4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function o3(){var a=c3,c=e3,e=v.cssPrefix,n=v.replacementClass,i=n4;if(e!==a||n!==c){var r=new RegExp("\\.".concat(a,"\\-"),"g"),t=new RegExp("\\--".concat(a,"\\-"),"g"),f=new RegExp("\\.".concat(c),"g");i=i.replace(r,".".concat(e,"-")).replace(t,"--".concat(e,"-")).replace(f,".".concat(n))}return i}var P2=!1;function T1(){v.autoAddCss&&!P2&&(K3(o3()),P2=!0)}var i4={mixout:function(){return{dom:{css:o3,insertCss:T1}}},hooks:function(){return{beforeDOMElementCreation:function(){T1()},beforeI2svg:function(){T1()}}}},P=T||{};P[w]||(P[w]={});P[w].styles||(P[w].styles={});P[w].hooks||(P[w].hooks={});P[w].shims||(P[w].shims=[]);var N=P[w],l3=[],r4=function a(){d.removeEventListener("DOMContentLoaded",a),N1=1,l3.map(function(c){return c()})},N1=!1;I&&(N1=(d.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(d.readyState),N1||d.addEventListener("DOMContentLoaded",r4));function t4(a){I&&(N1?setTimeout(a,0):l3.push(a))}function h1(a){var c=a.tag,e=a.attributes,n=e===void 0?{}:e,i=a.children,r=i===void 0?[]:i;return typeof a=="string"?f3(a):"<".concat(c," ").concat(a4(n),">").concat(r.map(h1).join(""),"</").concat(c,">")}function q2(a,c,e){if(a&&a[c]&&a[c][e])return{prefix:c,iconName:e,icon:a[c][e]}}var f4=function(c,e){return function(n,i,r,t){return c.call(e,n,i,r,t)}},F1=function(c,e,n,i){var r=Object.keys(c),t=r.length,f=i!==void 0?f4(e,i):e,o,m,l;for(n===void 0?(o=1,l=c[r[0]]):(o=0,l=n);o<t;o++)m=r[o],l=f(l,c[m],m,c);return l};function o4(a){for(var c=[],e=0,n=a.length;e<n;){var i=a.charCodeAt(e++);if(i>=55296&&i<=56319&&e<n){var r=a.charCodeAt(e++);(r&64512)==56320?c.push(((i&1023)<<10)+(r&1023)+65536):(c.push(i),e--)}else c.push(i)}return c}function W1(a){var c=o4(a);return c.length===1?c[0].toString(16):null}function l4(a,c){var e=a.length,n=a.charCodeAt(c),i;return n>=55296&&n<=56319&&e>c+1&&(i=a.charCodeAt(c+1),i>=56320&&i<=57343)?(n-55296)*1024+i-56320+65536:n}function I2(a){return Object.keys(a).reduce(function(c,e){var n=a[e],i=!!n.icon;return i?c[n.iconName]=n.icon:c[e]=n,c},{})}function B1(a,c){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=e.skipHooks,i=n===void 0?!1:n,r=I2(c);typeof N.hooks.addPack=="function"&&!i?N.hooks.addPack(a,I2(c)):N.styles[a]=s(s({},N.styles[a]||{}),r),a==="fas"&&B1("fa",c)}var g1,x1,H1,U=N.styles,s4=N.shims,m4=(g1={},b(g1,p,Object.values(o1[p])),b(g1,C,Object.values(o1[C])),g1),t2=null,s3={},m3={},v3={},h3={},z3={},v4=(x1={},b(x1,p,Object.keys(t1[p])),b(x1,C,Object.keys(t1[C])),x1);function h4(a){return~$3.indexOf(a)}function z4(a,c){var e=c.split("-"),n=e[0],i=e.slice(1).join("-");return n===a&&i!==""&&!h4(i)?i:null}var u3=function(){var c=function(r){return F1(U,function(t,f,o){return t[o]=F1(f,r,{}),t},{})};s3=c(function(i,r,t){if(r[3]&&(i[r[3]]=t),r[2]){var f=r[2].filter(function(o){return typeof o=="number"});f.forEach(function(o){i[o.toString(16)]=t})}return i}),m3=c(function(i,r,t){if(i[t]=t,r[2]){var f=r[2].filter(function(o){return typeof o=="string"});f.forEach(function(o){i[o]=t})}return i}),z3=c(function(i,r,t){var f=r[2];return i[t]=t,f.forEach(function(o){i[o]=t}),i});var e="far"in U||v.autoFetchSvg,n=F1(s4,function(i,r){var t=r[0],f=r[1],o=r[2];return f==="far"&&!e&&(f="fas"),typeof t=="string"&&(i.names[t]={prefix:f,iconName:o}),typeof t=="number"&&(i.unicodes[t.toString(16)]={prefix:f,iconName:o}),i},{names:{},unicodes:{}});v3=n.names,h3=n.unicodes,t2=A1(v.styleDefault,{family:v.familyDefault})};J3(function(a){t2=A1(a.styleDefault,{family:v.familyDefault})});u3();function f2(a,c){return(s3[a]||{})[c]}function u4(a,c){return(m3[a]||{})[c]}function B(a,c){return(z3[a]||{})[c]}function p3(a){return v3[a]||{prefix:null,iconName:null}}function p4(a){var c=h3[a],e=f2("fas",a);return c||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function F(){return t2}var o2=function(){return{prefix:null,iconName:null,rest:[]}};function A1(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=c.family,n=e===void 0?p:e,i=t1[n][a],r=f1[n][a]||f1[n][i],t=a in N.styles?a:null;return r||t||null}var O2=(H1={},b(H1,p,Object.keys(o1[p])),b(H1,C,Object.keys(o1[C])),H1);function w1(a){var c,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,i=n===void 0?!1:n,r=(c={},b(c,p,"".concat(v.cssPrefix,"-").concat(p)),b(c,C,"".concat(v.cssPrefix,"-").concat(C)),c),t=null,f=p;(a.includes(r[p])||a.some(function(m){return O2[p].includes(m)}))&&(f=p),(a.includes(r[C])||a.some(function(m){return O2[C].includes(m)}))&&(f=C);var o=a.reduce(function(m,l){var h=z4(v.cssPrefix,l);if(U[l]?(l=m4[f].includes(l)?j3[f][l]:l,t=l,m.prefix=l):v4[f].indexOf(l)>-1?(t=l,m.prefix=A1(l,{family:f})):h?m.iconName=h:l!==v.replacementClass&&l!==r[p]&&l!==r[C]&&m.rest.push(l),!i&&m.prefix&&m.iconName){var z=t==="fa"?p3(m.iconName):{},u=B(m.prefix,m.iconName);z.prefix&&(t=null),m.iconName=z.iconName||u||m.iconName,m.prefix=z.prefix||m.prefix,m.prefix==="far"&&!U.far&&U.fas&&!v.autoFetchSvg&&(m.prefix="fas")}return m},o2());return(a.includes("fa-brands")||a.includes("fab"))&&(o.prefix="fab"),(a.includes("fa-duotone")||a.includes("fad"))&&(o.prefix="fad"),!o.prefix&&f===C&&(U.fass||v.autoFetchSvg)&&(o.prefix="fass",o.iconName=B(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||t==="fa")&&(o.prefix=F()||"fas"),o}var d4=function(){function a(){A3(this,a),this.definitions={}}return w3(a,[{key:"add",value:function(){for(var e=this,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];var t=i.reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(f){e.definitions[f]=s(s({},e.definitions[f]||{}),t[f]),B1(f,t[f]);var o=o1[p][f];o&&B1(o,t[f]),u3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,n){var i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(function(r){var t=i[r],f=t.prefix,o=t.iconName,m=t.icon,l=m[2];e[f]||(e[f]={}),l.length>0&&l.forEach(function(h){typeof h=="string"&&(e[f][h]=m)}),e[f][o]=m}),e}}]),a}(),E2=[],X={},J={},C4=Object.keys(J);function b4(a,c){var e=c.mixoutsTo;return E2=a,X={},Object.keys(J).forEach(function(n){C4.indexOf(n)===-1&&delete J[n]}),E2.forEach(function(n){var i=n.mixout?n.mixout():{};if(Object.keys(i).forEach(function(t){typeof i[t]=="function"&&(e[t]=i[t]),y1(i[t])==="object"&&Object.keys(i[t]).forEach(function(f){e[t]||(e[t]={}),e[t][f]=i[t][f]})}),n.hooks){var r=n.hooks();Object.keys(r).forEach(function(t){X[t]||(X[t]=[]),X[t].push(r[t])})}n.provides&&n.provides(J)}),e}function Y1(a,c){for(var e=arguments.length,n=new Array(e>2?e-2:0),i=2;i<e;i++)n[i-2]=arguments[i];var r=X[a]||[];return r.forEach(function(t){c=t.apply(null,[c].concat(n))}),c}function $(a){for(var c=arguments.length,e=new Array(c>1?c-1:0),n=1;n<c;n++)e[n-1]=arguments[n];var i=X[a]||[];i.forEach(function(r){r.apply(null,e)})}function q(){var a=arguments[0],c=Array.prototype.slice.call(arguments,1);return J[a]?J[a].apply(null,c):void 0}function $1(a){a.prefix==="fa"&&(a.prefix="fas");var c=a.iconName,e=a.prefix||F();if(c)return c=B(e,c)||c,q2(d3.definitions,e,c)||q2(N.styles,e,c)}var d3=new d4,M4=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,$("noAuto")},g4={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return I?($("beforeI2svg",c),q("pseudoElements2svg",c),q("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=c.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,t4(function(){H4({autoReplaceSvgRoot:e}),$("watch",c)})}},x4={icon:function(c){if(c===null)return null;if(y1(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:B(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var e=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],n=A1(c[0]);return{prefix:n,iconName:B(n,e)||e}}if(typeof c=="string"&&(c.indexOf("".concat(v.cssPrefix,"-"))>-1||c.match(G3))){var i=w1(c.split(" "),{skipLookups:!0});return{prefix:i.prefix||F(),iconName:B(i.prefix,i.iconName)||i.iconName}}if(typeof c=="string"){var r=F();return{prefix:r,iconName:B(r,c)||c}}}},L={noAuto:M4,config:v,dom:g4,parse:x4,library:d3,findIconDefinition:$1,toHtml:h1},H4=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=c.autoReplaceSvgRoot,n=e===void 0?d:e;(Object.keys(N.styles).length>0||v.autoFetchSvg)&&I&&v.autoReplaceSvg&&L.dom.i2svg({node:n})};function P1(a,c){return Object.defineProperty(a,"abstract",{get:c}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(n){return h1(n)})}}),Object.defineProperty(a,"node",{get:function(){if(I){var n=d.createElement("div");return n.innerHTML=a.html,n.children}}}),a}function L4(a){var c=a.children,e=a.main,n=a.mask,i=a.attributes,r=a.styles,t=a.transform;if(r2(t)&&e.found&&!n.found){var f=e.width,o=e.height,m={x:f/o/2,y:.5};i.style=k1(s(s({},r),{},{"transform-origin":"".concat(m.x+t.x/16,"em ").concat(m.y+t.y/16,"em")}))}return[{tag:"svg",attributes:i,children:c}]}function V4(a){var c=a.prefix,e=a.iconName,n=a.children,i=a.attributes,r=a.symbol,t=r===!0?"".concat(c,"-").concat(v.cssPrefix,"-").concat(e):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:s(s({},i),{},{id:t}),children:n}]}]}function l2(a){var c=a.icons,e=c.main,n=c.mask,i=a.prefix,r=a.iconName,t=a.transform,f=a.symbol,o=a.title,m=a.maskId,l=a.titleId,h=a.extra,z=a.watchable,u=z===void 0?!1:z,g=n.found?n:e,V=g.width,y=g.height,S=i==="fak",M=[v.replacementClass,r?"".concat(v.cssPrefix,"-").concat(r):""].filter(function(O){return h.classes.indexOf(O)===-1}).filter(function(O){return O!==""||!!O}).concat(h.classes).join(" "),x={children:[],attributes:s(s({},h.attributes),{},{"data-prefix":i,"data-icon":r,class:M,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(V," ").concat(y)})},k=S&&!~h.classes.indexOf("fa-fw")?{width:"".concat(V/y*16*.0625,"em")}:{};u&&(x.attributes[Y]=""),o&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(l||s1())},children:[o]}),delete x.attributes.title);var H=s(s({},x),{},{prefix:i,iconName:r,main:e,mask:n,maskId:m,transform:t,symbol:f,styles:s(s({},k),h.styles)}),R=n.found&&e.found?q("generateAbstractMask",H)||{children:[],attributes:{}}:q("generateAbstractIcon",H)||{children:[],attributes:{}},j=R.children,q1=R.attributes;return H.children=j,H.attributes=q1,f?V4(H):L4(H)}function Z2(a){var c=a.content,e=a.width,n=a.height,i=a.transform,r=a.title,t=a.extra,f=a.watchable,o=f===void 0?!1:f,m=s(s(s({},t.attributes),r?{title:r}:{}),{},{class:t.classes.join(" ")});o&&(m[Y]="");var l=s({},t.styles);r2(i)&&(l.transform=e4({transform:i,startCentered:!0,width:e,height:n}),l["-webkit-transform"]=l.transform);var h=k1(l);h.length>0&&(m.style=h);var z=[];return z.push({tag:"span",attributes:m,children:[c]}),r&&z.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),z}function y4(a){var c=a.content,e=a.title,n=a.extra,i=s(s(s({},n.attributes),e?{title:e}:{}),{},{class:n.classes.join(" ")}),r=k1(n.styles);r.length>0&&(i.style=r);var t=[];return t.push({tag:"span",attributes:i,children:[c]}),e&&t.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),t}var D1=N.styles;function U1(a){var c=a[0],e=a[1],n=a.slice(4),i=Q1(n,1),r=i[0],t=null;return Array.isArray(r)?t={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(W.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(W.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(W.PRIMARY),fill:"currentColor",d:r[1]}}]}:t={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:c,height:e,icon:t}}var N4={found:!1,width:512,height:512};function S4(a,c){!n3&&!v.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(c,'" is missing.'))}function X1(a,c){var e=c;return c==="fa"&&v.styleDefault!==null&&(c=F()),new Promise(function(n,i){var r={found:!1,width:512,height:512,icon:q("missingIconAbstract")||{}};if(e==="fa"){var t=p3(a)||{};a=t.iconName||a,c=t.prefix||c}if(a&&c&&D1[c]&&D1[c][a]){var f=D1[c][a];return n(U1(f))}S4(a,c),n(s(s({},N4),{},{icon:v.showMissingIcons&&a?q("missingIconAbstract")||{}:{}}))})}var T2=function(){},J1=v.measurePerformance&&u1&&u1.mark&&u1.measure?u1:{mark:T2,measure:T2},n1='FA "6.5.1"',k4=function(c){return J1.mark("".concat(n1," ").concat(c," begins")),function(){return C3(c)}},C3=function(c){J1.mark("".concat(n1," ").concat(c," ends")),J1.measure("".concat(n1," ").concat(c),"".concat(n1," ").concat(c," begins"),"".concat(n1," ").concat(c," ends"))},s2={begin:k4,end:C3},L1=function(){};function F2(a){var c=a.getAttribute?a.getAttribute(Y):null;return typeof c=="string"}function A4(a){var c=a.getAttribute?a.getAttribute(c2):null,e=a.getAttribute?a.getAttribute(e2):null;return c&&e}function w4(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(v.replacementClass)}function P4(){if(v.autoReplaceSvg===!0)return V1.replace;var a=V1[v.autoReplaceSvg];return a||V1.replace}function q4(a){return d.createElementNS("http://www.w3.org/2000/svg",a)}function I4(a){return d.createElement(a)}function b3(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=c.ceFn,n=e===void 0?a.tag==="svg"?q4:I4:e;if(typeof a=="string")return d.createTextNode(a);var i=n(a.tag);Object.keys(a.attributes||[]).forEach(function(t){i.setAttribute(t,a.attributes[t])});var r=a.children||[];return r.forEach(function(t){i.appendChild(b3(t,{ceFn:n}))}),i}function O4(a){var c=" ".concat(a.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var V1={replace:function(c){var e=c[0];if(e.parentNode)if(c[1].forEach(function(i){e.parentNode.insertBefore(b3(i),e)}),e.getAttribute(Y)===null&&v.keepOriginalSource){var n=d.createComment(O4(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(c){var e=c[0],n=c[1];if(~i2(e).indexOf(v.replacementClass))return V1.replace(c);var i=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var r=n[0].attributes.class.split(" ").reduce(function(f,o){return o===v.replacementClass||o.match(i)?f.toSvg.push(o):f.toNode.push(o),f},{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}var t=n.map(function(f){return h1(f)}).join(`
`);e.setAttribute(Y,""),e.innerHTML=t}};function D2(a){a()}function M3(a,c){var e=typeof c=="function"?c:L1;if(a.length===0)e();else{var n=D2;v.mutateApproach===D3&&(n=T.requestAnimationFrame||D2),n(function(){var i=P4(),r=s2.begin("mutate");a.map(i),r(),e()})}}var m2=!1;function g3(){m2=!0}function K1(){m2=!1}var S1=null;function R2(a){if(k2&&v.observeMutations){var c=a.treeCallback,e=c===void 0?L1:c,n=a.nodeCallback,i=n===void 0?L1:n,r=a.pseudoElementsCallback,t=r===void 0?L1:r,f=a.observeMutationsRoot,o=f===void 0?d:f;S1=new k2(function(m){if(!m2){var l=F();Q(m).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!F2(h.addedNodes[0])&&(v.searchPseudoElements&&t(h.target),e(h.target)),h.type==="attributes"&&h.target.parentNode&&v.searchPseudoElements&&t(h.target.parentNode),h.type==="attributes"&&F2(h.target)&&~Y3.indexOf(h.attributeName))if(h.attributeName==="class"&&A4(h.target)){var z=w1(i2(h.target)),u=z.prefix,g=z.iconName;h.target.setAttribute(c2,u||l),g&&h.target.setAttribute(e2,g)}else w4(h.target)&&i(h.target)})}}),I&&S1.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function E4(){S1&&S1.disconnect()}function Z4(a){var c=a.getAttribute("style"),e=[];return c&&(e=c.split(";").reduce(function(n,i){var r=i.split(":"),t=r[0],f=r.slice(1);return t&&f.length>0&&(n[t]=f.join(":").trim()),n},{})),e}function T4(a){var c=a.getAttribute("data-prefix"),e=a.getAttribute("data-icon"),n=a.innerText!==void 0?a.innerText.trim():"",i=w1(i2(a));return i.prefix||(i.prefix=F()),c&&e&&(i.prefix=c,i.iconName=e),i.iconName&&i.prefix||(i.prefix&&n.length>0&&(i.iconName=u4(i.prefix,a.innerText)||f2(i.prefix,W1(a.innerText))),!i.iconName&&v.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=a.firstChild.data)),i}function F4(a){var c=Q(a.attributes).reduce(function(i,r){return i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i},{}),e=a.getAttribute("title"),n=a.getAttribute("data-fa-title-id");return v.autoA11y&&(e?c["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(n||s1()):(c["aria-hidden"]="true",c.focusable="false")),c}function D4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:A,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function j2(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=T4(a),n=e.iconName,i=e.prefix,r=e.rest,t=F4(a),f=Y1("parseNodeAttributes",{},a),o=c.styleParser?Z4(a):[];return s({iconName:n,title:a.getAttribute("title"),titleId:a.getAttribute("data-fa-title-id"),prefix:i,transform:A,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:t}},f)}var R4=N.styles;function x3(a){var c=v.autoReplaceSvg==="nest"?j2(a,{styleParser:!1}):j2(a);return~c.extra.classes.indexOf(i3)?q("generateLayersText",a,c):q("generateSvgReplacementMutation",a,c)}var D=new Set;n2.map(function(a){D.add("fa-".concat(a))});Object.keys(t1[p]).map(D.add.bind(D));Object.keys(t1[C]).map(D.add.bind(D));D=m1(D);function G2(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!I)return Promise.resolve();var e=d.documentElement.classList,n=function(h){return e.add("".concat(A2,"-").concat(h))},i=function(h){return e.remove("".concat(A2,"-").concat(h))},r=v.autoFetchSvg?D:n2.map(function(l){return"fa-".concat(l)}).concat(Object.keys(R4));r.includes("fa")||r.push("fa");var t=[".".concat(i3,":not([").concat(Y,"])")].concat(r.map(function(l){return".".concat(l,":not([").concat(Y,"])")})).join(", ");if(t.length===0)return Promise.resolve();var f=[];try{f=Q(a.querySelectorAll(t))}catch{}if(f.length>0)n("pending"),i("complete");else return Promise.resolve();var o=s2.begin("onTree"),m=f.reduce(function(l,h){try{var z=x3(h);z&&l.push(z)}catch(u){n3||u.name==="MissingIcon"&&console.error(u)}return l},[]);return new Promise(function(l,h){Promise.all(m).then(function(z){M3(z,function(){n("active"),n("complete"),i("pending"),typeof c=="function"&&c(),o(),l()})}).catch(function(z){o(),h(z)})})}function j4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;x3(a).then(function(e){e&&M3([e],c)})}function G4(a){return function(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(c||{}).icon?c:$1(c||{}),i=e.mask;return i&&(i=(i||{}).icon?i:$1(i||{})),a(n,s(s({},e),{},{mask:i}))}}var _4=function(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,i=n===void 0?A:n,r=e.symbol,t=r===void 0?!1:r,f=e.mask,o=f===void 0?null:f,m=e.maskId,l=m===void 0?null:m,h=e.title,z=h===void 0?null:h,u=e.titleId,g=u===void 0?null:u,V=e.classes,y=V===void 0?[]:V,S=e.attributes,M=S===void 0?{}:S,x=e.styles,k=x===void 0?{}:x;if(c){var H=c.prefix,R=c.iconName,j=c.icon;return P1(s({type:"icon"},c),function(){return $("beforeDOMElementCreation",{iconDefinition:c,params:e}),v.autoA11y&&(z?M["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(g||s1()):(M["aria-hidden"]="true",M.focusable="false")),l2({icons:{main:U1(j),mask:o?U1(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:R,transform:s(s({},A),i),symbol:t,title:z,maskId:l,titleId:g,extra:{attributes:M,styles:k,classes:y}})})}},W4={mixout:function(){return{icon:G4(_4)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=G2,e.nodeCallback=j4,e}}},provides:function(c){c.i2svg=function(e){var n=e.node,i=n===void 0?d:n,r=e.callback,t=r===void 0?function(){}:r;return G2(i,t)},c.generateSvgReplacementMutation=function(e,n){var i=n.iconName,r=n.title,t=n.titleId,f=n.prefix,o=n.transform,m=n.symbol,l=n.mask,h=n.maskId,z=n.extra;return new Promise(function(u,g){Promise.all([X1(i,f),l.iconName?X1(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(V){var y=Q1(V,2),S=y[0],M=y[1];u([e,l2({icons:{main:S,mask:M},prefix:f,iconName:i,transform:o,symbol:m,maskId:h,title:r,titleId:t,extra:z,watchable:!0})])}).catch(g)})},c.generateAbstractIcon=function(e){var n=e.children,i=e.attributes,r=e.main,t=e.transform,f=e.styles,o=k1(f);o.length>0&&(i.style=o);var m;return r2(t)&&(m=q("generateAbstractTransformGrouping",{main:r,transform:t,containerWidth:r.width,iconWidth:r.width})),n.push(m||r.icon),{children:n,attributes:i}}}},B4={mixout:function(){return{layer:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.classes,r=i===void 0?[]:i;return P1({type:"layer"},function(){$("beforeDOMElementCreation",{assembler:e,params:n});var t=[];return e(function(f){Array.isArray(f)?f.map(function(o){t=t.concat(o.abstract)}):t=t.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(m1(r)).join(" ")},children:t}]})}}}},Y4={mixout:function(){return{counter:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.title,r=i===void 0?null:i,t=n.classes,f=t===void 0?[]:t,o=n.attributes,m=o===void 0?{}:o,l=n.styles,h=l===void 0?{}:l;return P1({type:"counter",content:e},function(){return $("beforeDOMElementCreation",{content:e,params:n}),y4({content:e.toString(),title:r,extra:{attributes:m,styles:h,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(m1(f))}})})}}}},$4={mixout:function(){return{text:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?A:i,t=n.title,f=t===void 0?null:t,o=n.classes,m=o===void 0?[]:o,l=n.attributes,h=l===void 0?{}:l,z=n.styles,u=z===void 0?{}:z;return P1({type:"text",content:e},function(){return $("beforeDOMElementCreation",{content:e,params:n}),Z2({content:e,transform:s(s({},A),r),title:f,extra:{attributes:h,styles:u,classes:["".concat(v.cssPrefix,"-layers-text")].concat(m1(m))}})})}}},provides:function(c){c.generateLayersText=function(e,n){var i=n.title,r=n.transform,t=n.extra,f=null,o=null;if(a3){var m=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();f=l.width/m,o=l.height/m}return v.autoA11y&&!i&&(t.attributes["aria-hidden"]="true"),Promise.resolve([e,Z2({content:e.innerHTML,width:f,height:o,transform:r,title:i,extra:t,watchable:!0})])}}},U4=new RegExp('"',"ug"),_2=[1105920,1112319];function X4(a){var c=a.replace(U4,""),e=l4(c,0),n=e>=_2[0]&&e<=_2[1],i=c.length===2?c[0]===c[1]:!1;return{value:W1(i?c[0]:c),isSecondary:n||i}}function W2(a,c){var e="".concat(F3).concat(c.replace(":","-"));return new Promise(function(n,i){if(a.getAttribute(e)!==null)return n();var r=Q(a.children),t=r.filter(function(j){return j.getAttribute(_1)===c})[0],f=T.getComputedStyle(a,c),o=f.getPropertyValue("font-family").match(_3),m=f.getPropertyValue("font-weight"),l=f.getPropertyValue("content");if(t&&!o)return a.removeChild(t),n();if(o&&l!=="none"&&l!==""){var h=f.getPropertyValue("content"),z=~["Sharp"].indexOf(o[2])?C:p,u=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?f1[z][o[2].toLowerCase()]:W3[z][m],g=X4(h),V=g.value,y=g.isSecondary,S=o[0].startsWith("FontAwesome"),M=f2(u,V),x=M;if(S){var k=p4(V);k.iconName&&k.prefix&&(M=k.iconName,u=k.prefix)}if(M&&!y&&(!t||t.getAttribute(c2)!==u||t.getAttribute(e2)!==x)){a.setAttribute(e,x),t&&a.removeChild(t);var H=D4(),R=H.extra;R.attributes[_1]=c,X1(M,u).then(function(j){var q1=l2(s(s({},H),{},{icons:{main:j,mask:o2()},prefix:u,iconName:x,extra:R,watchable:!0})),O=d.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?a.insertBefore(O,a.firstChild):a.appendChild(O),O.outerHTML=q1.map(function(k3){return h1(k3)}).join(`
`),a.removeAttribute(e),n()}).catch(i)}else n()}else n()})}function J4(a){return Promise.all([W2(a,"::before"),W2(a,"::after")])}function K4(a){return a.parentNode!==document.head&&!~R3.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(_1)&&(!a.parentNode||a.parentNode.tagName!=="svg")}function B2(a){if(I)return new Promise(function(c,e){var n=Q(a.querySelectorAll("*")).filter(K4).map(J4),i=s2.begin("searchPseudoElements");g3(),Promise.all(n).then(function(){i(),K1(),c()}).catch(function(){i(),K1(),e()})})}var Q4={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=B2,e}}},provides:function(c){c.pseudoElements2svg=function(e){var n=e.node,i=n===void 0?d:n;v.searchPseudoElements&&B2(i)}}},Y2=!1,a5={mixout:function(){return{dom:{unwatch:function(){g3(),Y2=!0}}}},hooks:function(){return{bootstrap:function(){R2(Y1("mutationObserverCallbacks",{}))},noAuto:function(){E4()},watch:function(e){var n=e.observeMutationsRoot;Y2?K1():R2(Y1("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},$2=function(c){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce(function(n,i){var r=i.toLowerCase().split("-"),t=r[0],f=r.slice(1).join("-");if(t&&f==="h")return n.flipX=!0,n;if(t&&f==="v")return n.flipY=!0,n;if(f=parseFloat(f),isNaN(f))return n;switch(t){case"grow":n.size=n.size+f;break;case"shrink":n.size=n.size-f;break;case"left":n.x=n.x-f;break;case"right":n.x=n.x+f;break;case"up":n.y=n.y-f;break;case"down":n.y=n.y+f;break;case"rotate":n.rotate=n.rotate+f;break}return n},e)},c5={mixout:function(){return{parse:{transform:function(e){return $2(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,n){var i=n.getAttribute("data-fa-transform");return i&&(e.transform=$2(i)),e}}},provides:function(c){c.generateAbstractTransformGrouping=function(e){var n=e.main,i=e.transform,r=e.containerWidth,t=e.iconWidth,f={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(i.x*32,", ").concat(i.y*32,") "),m="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),l="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(o," ").concat(m," ").concat(l)},z={transform:"translate(".concat(t/2*-1," -256)")},u={outer:f,inner:h,path:z};return{tag:"g",attributes:s({},u.outer),children:[{tag:"g",attributes:s({},u.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:s(s({},n.icon.attributes),u.path)}]}]}}}},R1={x:0,y:0,width:"100%",height:"100%"};function U2(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||c)&&(a.attributes.fill="black"),a}function e5(a){return a.tag==="g"?a.children:[a]}var n5={hooks:function(){return{parseNodeAttributes:function(e,n){var i=n.getAttribute("data-fa-mask"),r=i?w1(i.split(" ").map(function(t){return t.trim()})):o2();return r.prefix||(r.prefix=F()),e.mask=r,e.maskId=n.getAttribute("data-fa-mask-id"),e}}},provides:function(c){c.generateAbstractMask=function(e){var n=e.children,i=e.attributes,r=e.main,t=e.mask,f=e.maskId,o=e.transform,m=r.width,l=r.icon,h=t.width,z=t.icon,u=c4({transform:o,containerWidth:h,iconWidth:m}),g={tag:"rect",attributes:s(s({},R1),{},{fill:"white"})},V=l.children?{children:l.children.map(U2)}:{},y={tag:"g",attributes:s({},u.inner),children:[U2(s({tag:l.tag,attributes:s(s({},l.attributes),u.path)},V))]},S={tag:"g",attributes:s({},u.outer),children:[y]},M="mask-".concat(f||s1()),x="clip-".concat(f||s1()),k={tag:"mask",attributes:s(s({},R1),{},{id:M,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,S]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:e5(z)},k]};return n.push(H,{tag:"rect",attributes:s({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(M,")")},R1)}),{children:n,attributes:i}}}},i5={provides:function(c){var e=!1;T.matchMedia&&(e=T.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){var n=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:s(s({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var t=s(s({},r),{},{attributeName:"opacity"}),f={tag:"circle",attributes:s(s({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||f.children.push({tag:"animate",attributes:s(s({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:s(s({},t),{},{values:"1;0;1;1;0;1;"})}),n.push(f),n.push({tag:"path",attributes:s(s({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:s(s({},t),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:s(s({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:s(s({},t),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},r5={hooks:function(){return{parseNodeAttributes:function(e,n){var i=n.getAttribute("data-fa-symbol"),r=i===null?!1:i===""?!0:i;return e.symbol=r,e}}}},t5=[i4,W4,B4,Y4,$4,Q4,a5,c5,n5,i5,r5];b4(t5,{mixoutsTo:L});var x5=L.noAuto,H5=L.config,L5=L.library,V5=L.dom,H3=L.parse,y5=L.findIconDefinition,N5=L.toHtml,L3=L.icon,S5=L.layer,f5=L.text,o5=L.counter;var s5=["*"],m5=a=>{throw new Error(`Could not find icon with iconName=${a.iconName} and prefix=${a.prefix} in the icon library.`)},v5=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},h5=a=>{let c={[`fa-${a.animation}`]:a.animation!=null&&!a.animation.startsWith("spin"),"fa-spin":a.animation==="spin"||a.animation==="spin-reverse","fa-spin-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-spin-reverse":a.animation==="spin-reverse"||a.animation==="spin-pulse-reverse","fa-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-fw":a.fixedWidth,"fa-border":a.border,"fa-inverse":a.inverse,"fa-layers-counter":a.counter,"fa-flip-horizontal":a.flip==="horizontal"||a.flip==="both","fa-flip-vertical":a.flip==="vertical"||a.flip==="both",[`fa-${a.size}`]:a.size!==null,[`fa-rotate-${a.rotate}`]:a.rotate!==null,[`fa-pull-${a.pull}`]:a.pull!==null,[`fa-stack-${a.stackItemSize}`]:a.stackItemSize!=null};return Object.keys(c).map(e=>c[e]?e:null).filter(e=>e)},z5=a=>a.prefix!==void 0&&a.iconName!==void 0,u5=(a,c)=>z5(a)?a:typeof a=="string"?{prefix:c,iconName:a}:{prefix:a[0],iconName:a[1]},p5=(()=>{let c=class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};c.\u0275fac=function(i){return new(i||c)},c.\u0275prov=I1({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),d5=(()=>{let c=class c{constructor(){this.definitions={}}addIcons(...n){for(let i of n){i.prefix in this.definitions||(this.definitions[i.prefix]={}),this.definitions[i.prefix][i.iconName]=i;for(let r of i.icon[2])typeof r=="string"&&(this.definitions[i.prefix][r]=i)}}addIconPacks(...n){for(let i of n){let r=Object.keys(i).map(t=>i[t]);this.addIcons(...r)}}getIconDefinition(n,i){return n in this.definitions&&i in this.definitions[n]?this.definitions[n][i]:null}};c.\u0275fac=function(i){return new(i||c)},c.\u0275prov=I1({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),C5=(()=>{let c=class c{constructor(){this.stackItemSize="1x"}ngOnChanges(n){if("size"in n)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};c.\u0275fac=function(i){return new(i||c)},c.\u0275dir=z2({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[z1]});let a=c;return a})(),b5=(()=>{let c=class c{constructor(n,i){this.renderer=n,this.elementRef=i}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(n){"size"in n&&(n.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${n.size.currentValue}`),n.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${n.size.previousValue}`))}};c.\u0275fac=function(i){return new(i||c)(E(d2),E(p2))},c.\u0275cmp=a1({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[z1,e1],ngContentSelectors:s5,decls:1,vars:0,template:function(i,r){i&1&&(M2(),g2(0))},encapsulation:2});let a=c;return a})(),V3=(()=>{let c=class c{set spin(n){this.animation=n?"spin":void 0}set pulse(n){this.animation=n?"spin-pulse":void 0}constructor(n,i,r,t,f){this.sanitizer=n,this.config=i,this.iconLibrary=r,this.stackItem=t,this.classes=[],f!=null&&t==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(n){if(this.icon==null&&this.config.fallbackIcon==null){v5();return}if(n){let i=this.icon!=null?this.icon:this.config.fallbackIcon,r=this.findIconDefinition(i);if(r!=null){let t=this.buildParams();this.renderIcon(r,t)}}}render(){this.ngOnChanges({})}findIconDefinition(n){let i=u5(n,this.config.defaultPrefix);if("icon"in i)return i;let r=this.iconLibrary.getIconDefinition(i.prefix,i.iconName);return r??(m5(i),null)}buildParams(){let n={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},i=typeof this.transform=="string"?H3.transform(this.transform):this.transform;return{title:this.title,transform:i,classes:[...h5(n),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(n,i){let r=L3(n,i);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(r.html.join(`
`))}};c.\u0275fac=function(i){return new(i||c)(E(H2),E(p5),E(d5),E(C5,8),E(b5,8))},c.\u0275cmp=a1({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(i,r){i&2&&(b2("innerHTML",r.renderedIconHTML,u2),C2("title",r.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[z1,e1],decls:0,vars:0,template:function(i,r){},encapsulation:2});let a=c;return a})();var y3=(()=>{let c=class c{};c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=h2({type:c}),c.\u0275inj=v2({});let a=c;return a})();var N3={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]};var S3={prefix:"fab",iconName:"vimeo",icon:[448,512,[],"f40a","M403.2 32H44.8C20.1 32 0 52.1 0 76.8v358.4C0 459.9 20.1 480 44.8 480h358.4c24.7 0 44.8-20.1 44.8-44.8V76.8c0-24.7-20.1-44.8-44.8-44.8zM377 180.8c-1.4 31.5-23.4 74.7-66 129.4-44 57.2-81.3 85.8-111.7 85.8-18.9 0-34.8-17.4-47.9-52.3-25.5-93.3-36.4-148-57.4-148-2.4 0-10.9 5.1-25.4 15.2l-15.2-19.6c37.3-32.8 72.9-69.2 95.2-71.2 25.2-2.4 40.7 14.8 46.5 51.7 20.7 131.2 29.9 151 67.6 91.6 13.5-21.4 20.8-37.7 21.8-48.9 3.5-33.2-25.9-30.9-45.8-22.4 15.9-52.1 46.3-77.4 91.2-76 33.3.9 49 22.5 47.1 64.7z"]};var F5=(()=>{let c=class c{constructor(){this.faLinkedin=N3,this.faVimeo=S3}};c.\u0275fac=function(i){return new(i||c)},c.\u0275cmp=a1({type:c,selectors:[["app-contact"]],standalone:!0,features:[e1],decls:13,vars:2,consts:[[1,"bold"],["data-auto-recognition","true","href","mailto:megan_mclean93@hotmail.com"],["href","https://www.linkedin.com/in/megan-mclean-9599b063/","target","_blank",1,"icon-link"],["size","10x",3,"icon"],["href","http://www.vimeo.com/meganmclean","target","_blank",1,"icon-link"]],template:function(i,r){i&1&&(G(0,"h1"),c1(1,"Contact Information"),_(),G(2,"p")(3,"span",0),c1(4,"Email: "),_(),G(5,"a",1),c1(6,"megan_mclean93@hotmail.com"),_()(),G(7,"h2"),c1(8,"Links"),_(),G(9,"a",2),Z1(10,"fa-icon",3),_(),G(11,"a",4),Z1(12,"fa-icon",3),_()),i&2&&(O1(10),E1("icon",r.faLinkedin),O1(2),E1("icon",r.faVimeo))},dependencies:[x2,y3,V3],styles:[".bold[_ngcontent-%COMP%]{font-weight:700}.icon-link[_ngcontent-%COMP%]{all:unset}"]});let a=c;return a})();export{F5 as ContactComponent};
