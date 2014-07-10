/* Modernizr 2.8.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-input-localstorage-shiv-mq-cssclasses-teststyles-load
 */
;window.Modernizr=function(a,b,c){function w(a){j.cssText=a}function x(a,b){return w(prefixes.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}function B(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)o[c[d]]=c[d]in k;return o.list&&(o.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),o}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "))}var d="2.8.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l={}.toString,m={},n={},o={},p=[],q=p.slice,r,s=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},t=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return s("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=q.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(q.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(q.call(arguments)))};return e}),m.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}};for(var C in m)v(m,C)&&(r=C.toLowerCase(),e[r]=m[C](),p.push((e[r]?"":"no-")+r));return e.input||B(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e.mq=t,e.testStyles=s,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+p.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};;var P = (function(prototype, ownProperty, undefined) {
  return function P(_superclass /* = Object */, definition) {
    // handle the case where no superclass is given
    if (definition === undefined) {
      definition = _superclass;
      _superclass = Object;
    }

    // C is the class to be returned.
    //
    // When called, creates and initializes an instance of C, unless
    // `this` is already an instance of C, then just initializes `this`;
    // either way, returns the instance of C that was initialized.
    //
    //  TODO: the Chrome inspector shows all created objects as `C`
    //        rather than `Object`.  Setting the .name property seems to
    //        have no effect.  Is there a way to override this behavior?
    function C() {
      var self = this instanceof C ? this : new Bare;
      self.init.apply(self, arguments);
      return self;
    }

    // C.Bare is a class with a noop constructor.  Its prototype will be
    // the same as C, so that instances of C.Bare are instances of C.
    // `new MyClass.Bare` then creates new instances of C without
    // calling .init().
    function Bare() {}
    C.Bare = Bare;

    // Extend the prototype chain: first use Bare to create an
    // uninitialized instance of the superclass, then set up Bare
    // to create instances of this class.
    var _super = Bare[prototype] = _superclass[prototype];
    var proto = Bare[prototype] = C[prototype] = C.p = new Bare;

    // pre-declaring the iteration variable for the loop below to save
    // a `var` keyword after minification
    var key;

    // set the constructor property on the prototype, for convenience
    proto.constructor = C;

    C.extend = function(def) { return P(C, def); }

    return (C.open = function(def) {
      if (typeof def === 'function') {
        // call the defining function with all the arguments you need
        // extensions captures the return value.
        def = def.call(C, proto, _super, C, _superclass);
      }

      // ...and extend it
      if (typeof def === 'object') {
        for (key in def) {
          if (ownProperty.call(def, key)) {
            proto[key] = def[key];
          }
        }
      }

      // if no init, assume we're inheriting from a non-Pjs class, so
      // default to using the superclass constructor.
      if (!('init' in proto)) proto.init = _superclass;

      return C;
    })(definition);
  }

  // as a minifier optimization, we've closured in a few helper functions
  // and the string 'prototype' (C[p] is much shorter than C.prototype)
})('prototype', ({}).hasOwnProperty);
;/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
;/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);;/**
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 1.0.2
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */

/*jslint browser:true, node:true*/
/*global define, Event, Node*/


/**
 * Instantiate fast-clicking listeners on the specified layer.
 *
 * @constructor
 * @param {Element} layer The layer to listen on
 * @param {Object} options The options to override the defaults
 */
function FastClick(layer, options) {
	'use strict';
	var oldOnClick;

	options = options || {};

	/**
	 * Whether a click is currently being tracked.
	 *
	 * @type boolean
	 */
	this.trackingClick = false;


	/**
	 * Timestamp for when click tracking started.
	 *
	 * @type number
	 */
	this.trackingClickStart = 0;


	/**
	 * The element being tracked for a click.
	 *
	 * @type EventTarget
	 */
	this.targetElement = null;


	/**
	 * X-coordinate of touch start event.
	 *
	 * @type number
	 */
	this.touchStartX = 0;


	/**
	 * Y-coordinate of touch start event.
	 *
	 * @type number
	 */
	this.touchStartY = 0;


	/**
	 * ID of the last touch, retrieved from Touch.identifier.
	 *
	 * @type number
	 */
	this.lastTouchIdentifier = 0;


	/**
	 * Touchmove boundary, beyond which a click will be cancelled.
	 *
	 * @type number
	 */
	this.touchBoundary = options.touchBoundary || 10;


	/**
	 * The FastClick layer.
	 *
	 * @type Element
	 */
	this.layer = layer;

	/**
	 * The minimum time between tap(touchstart and touchend) events
	 *
	 * @type number
	 */
	this.tapDelay = options.tapDelay || 200;

	if (FastClick.notNeeded(layer)) {
		return;
	}

	// Some old versions of Android don't have Function.prototype.bind
	function bind(method, context) {
		return function() { return method.apply(context, arguments); };
	}


	var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
	var context = this;
	for (var i = 0, l = methods.length; i < l; i++) {
		context[methods[i]] = bind(context[methods[i]], context);
	}

	// Set up event handlers as required
	if (deviceIsAndroid) {
		layer.addEventListener('mouseover', this.onMouse, true);
		layer.addEventListener('mousedown', this.onMouse, true);
		layer.addEventListener('mouseup', this.onMouse, true);
	}

	layer.addEventListener('click', this.onClick, true);
	layer.addEventListener('touchstart', this.onTouchStart, false);
	layer.addEventListener('touchmove', this.onTouchMove, false);
	layer.addEventListener('touchend', this.onTouchEnd, false);
	layer.addEventListener('touchcancel', this.onTouchCancel, false);

	// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
	// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
	// layer when they are cancelled.
	if (!Event.prototype.stopImmediatePropagation) {
		layer.removeEventListener = function(type, callback, capture) {
			var rmv = Node.prototype.removeEventListener;
			if (type === 'click') {
				rmv.call(layer, type, callback.hijacked || callback, capture);
			} else {
				rmv.call(layer, type, callback, capture);
			}
		};

		layer.addEventListener = function(type, callback, capture) {
			var adv = Node.prototype.addEventListener;
			if (type === 'click') {
				adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
					if (!event.propagationStopped) {
						callback(event);
					}
				}), capture);
			} else {
				adv.call(layer, type, callback, capture);
			}
		};
	}

	// If a handler is already declared in the element's onclick attribute, it will be fired before
	// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
	// adding it as listener.
	if (typeof layer.onclick === 'function') {

		// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
		// - the old one won't work if passed to addEventListener directly.
		oldOnClick = layer.onclick;
		layer.addEventListener('click', function(event) {
			oldOnClick(event);
		}, false);
		layer.onclick = null;
	}
}


/**
 * Android requires exceptions.
 *
 * @type boolean
 */
var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0;


/**
 * iOS requires exceptions.
 *
 * @type boolean
 */
var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent);


/**
 * iOS 4 requires an exception for select elements.
 *
 * @type boolean
 */
var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


/**
 * iOS 6.0(+?) requires the target element to be manually derived
 *
 * @type boolean
 */
var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS ([6-9]|\d{2})_\d/).test(navigator.userAgent);


/**
 * Determine whether a given element requires a native click.
 *
 * @param {EventTarget|Element} target Target DOM element
 * @returns {boolean} Returns true if the element needs a native click
 */
FastClick.prototype.needsClick = function(target) {
	'use strict';
	switch (target.nodeName.toLowerCase()) {

	// Don't send a synthetic click to disabled inputs (issue #62)
	case 'button':
	case 'select':
	case 'textarea':
		if (target.disabled) {
			return true;
		}

		break;
	case 'input':

		// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
		if ((deviceIsIOS && target.type === 'file') || target.disabled) {
			return true;
		}

		break;
	case 'label':
	case 'video':
		return true;
	}

	return (/\bneedsclick\b/).test(target.className);
};


/**
 * Determine whether a given element requires a call to focus to simulate click into element.
 *
 * @param {EventTarget|Element} target Target DOM element
 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
 */
FastClick.prototype.needsFocus = function(target) {
	'use strict';
	switch (target.nodeName.toLowerCase()) {
	case 'textarea':
		return true;
	case 'select':
		return !deviceIsAndroid;
	case 'input':
		switch (target.type) {
		case 'button':
		case 'checkbox':
		case 'file':
		case 'image':
		case 'radio':
		case 'submit':
			return false;
		}

		// No point in attempting to focus disabled inputs
		return !target.disabled && !target.readOnly;
	default:
		return (/\bneedsfocus\b/).test(target.className);
	}
};


/**
 * Send a click event to the specified element.
 *
 * @param {EventTarget|Element} targetElement
 * @param {Event} event
 */
FastClick.prototype.sendClick = function(targetElement, event) {
	'use strict';
	var clickEvent, touch;

	// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
	if (document.activeElement && document.activeElement !== targetElement) {
		document.activeElement.blur();
	}

	touch = event.changedTouches[0];

	// Synthesise a click event, with an extra attribute so it can be tracked
	clickEvent = document.createEvent('MouseEvents');
	clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
	clickEvent.forwardedTouchEvent = true;
	targetElement.dispatchEvent(clickEvent);
};

FastClick.prototype.determineEventType = function(targetElement) {
	'use strict';

	//Issue #159: Android Chrome Select Box does not open with a synthetic click event
	if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
		return 'mousedown';
	}

	return 'click';
};


/**
 * @param {EventTarget|Element} targetElement
 */
FastClick.prototype.focus = function(targetElement) {
	'use strict';
	var length;

	// Issue #160: on iOS 7, some input elements (e.g. date datetime) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
	if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time') {
		length = targetElement.value.length;
		targetElement.setSelectionRange(length, length);
	} else {
		targetElement.focus();
	}
};


/**
 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
 *
 * @param {EventTarget|Element} targetElement
 */
FastClick.prototype.updateScrollParent = function(targetElement) {
	'use strict';
	var scrollParent, parentElement;

	scrollParent = targetElement.fastClickScrollParent;

	// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
	// target element was moved to another parent.
	if (!scrollParent || !scrollParent.contains(targetElement)) {
		parentElement = targetElement;
		do {
			if (parentElement.scrollHeight > parentElement.offsetHeight) {
				scrollParent = parentElement;
				targetElement.fastClickScrollParent = parentElement;
				break;
			}

			parentElement = parentElement.parentElement;
		} while (parentElement);
	}

	// Always update the scroll top tracker if possible.
	if (scrollParent) {
		scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
	}
};


/**
 * @param {EventTarget} targetElement
 * @returns {Element|EventTarget}
 */
FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {
	'use strict';

	// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
	if (eventTarget.nodeType === Node.TEXT_NODE) {
		return eventTarget.parentNode;
	}

	return eventTarget;
};


/**
 * On touch start, record the position and scroll offset.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchStart = function(event) {
	'use strict';
	var targetElement, touch, selection;

	// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
	if (event.targetTouches.length > 1) {
		return true;
	}

	targetElement = this.getTargetElementFromEventTarget(event.target);
	touch = event.targetTouches[0];

	if (deviceIsIOS) {

		// Only trusted events will deselect text on iOS (issue #49)
		selection = window.getSelection();
		if (selection.rangeCount && !selection.isCollapsed) {
			return true;
		}

		if (!deviceIsIOS4) {

			// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
			// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
			// with the same identifier as the touch event that previously triggered the click that triggered the alert.
			// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
			// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
			if (touch.identifier === this.lastTouchIdentifier) {
				event.preventDefault();
				return false;
			}

			this.lastTouchIdentifier = touch.identifier;

			// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
			// 1) the user does a fling scroll on the scrollable layer
			// 2) the user stops the fling scroll with another tap
			// then the event.target of the last 'touchend' event will be the element that was under the user's finger
			// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
			// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
			this.updateScrollParent(targetElement);
		}
	}

	this.trackingClick = true;
	this.trackingClickStart = event.timeStamp;
	this.targetElement = targetElement;

	this.touchStartX = touch.pageX;
	this.touchStartY = touch.pageY;

	// Prevent phantom clicks on fast double-tap (issue #36)
	if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
		event.preventDefault();
	}

	return true;
};


/**
 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.touchHasMoved = function(event) {
	'use strict';
	var touch = event.changedTouches[0], boundary = this.touchBoundary;

	if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
		return true;
	}

	return false;
};


/**
 * Update the last position.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchMove = function(event) {
	'use strict';
	if (!this.trackingClick) {
		return true;
	}

	// If the touch has moved, cancel the click tracking
	if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
		this.trackingClick = false;
		this.targetElement = null;
	}

	return true;
};


/**
 * Attempt to find the labelled control for the given label element.
 *
 * @param {EventTarget|HTMLLabelElement} labelElement
 * @returns {Element|null}
 */
FastClick.prototype.findControl = function(labelElement) {
	'use strict';

	// Fast path for newer browsers supporting the HTML5 control attribute
	if (labelElement.control !== undefined) {
		return labelElement.control;
	}

	// All browsers under test that support touch events also support the HTML5 htmlFor attribute
	if (labelElement.htmlFor) {
		return document.getElementById(labelElement.htmlFor);
	}

	// If no for attribute exists, attempt to retrieve the first labellable descendant element
	// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
	return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
};


/**
 * On touch end, determine whether to send a click event at once.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchEnd = function(event) {
	'use strict';
	var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

	if (!this.trackingClick) {
		return true;
	}

	// Prevent phantom clicks on fast double-tap (issue #36)
	if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
		this.cancelNextClick = true;
		return true;
	}

	// Reset to prevent wrong click cancel on input (issue #156).
	this.cancelNextClick = false;

	this.lastClickTime = event.timeStamp;

	trackingClickStart = this.trackingClickStart;
	this.trackingClick = false;
	this.trackingClickStart = 0;

	// On some iOS devices, the targetElement supplied with the event is invalid if the layer
	// is performing a transition or scroll, and has to be re-detected manually. Note that
	// for this to function correctly, it must be called *after* the event target is checked!
	// See issue #57; also filed as rdar://13048589 .
	if (deviceIsIOSWithBadTarget) {
		touch = event.changedTouches[0];

		// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
		targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
		targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
	}

	targetTagName = targetElement.tagName.toLowerCase();
	if (targetTagName === 'label') {
		forElement = this.findControl(targetElement);
		if (forElement) {
			this.focus(targetElement);
			if (deviceIsAndroid) {
				return false;
			}

			targetElement = forElement;
		}
	} else if (this.needsFocus(targetElement)) {

		// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
		// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
		if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
			this.targetElement = null;
			return false;
		}

		this.focus(targetElement);
		this.sendClick(targetElement, event);

		// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
		// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
		if (!deviceIsIOS || targetTagName !== 'select') {
			this.targetElement = null;
			event.preventDefault();
		}

		return false;
	}

	if (deviceIsIOS && !deviceIsIOS4) {

		// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
		// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
		scrollParent = targetElement.fastClickScrollParent;
		if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
			return true;
		}
	}

	// Prevent the actual click from going though - unless the target node is marked as requiring
	// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
	if (!this.needsClick(targetElement)) {
		event.preventDefault();
		this.sendClick(targetElement, event);
	}

	return false;
};


/**
 * On touch cancel, stop tracking the click.
 *
 * @returns {void}
 */
FastClick.prototype.onTouchCancel = function() {
	'use strict';
	this.trackingClick = false;
	this.targetElement = null;
};


/**
 * Determine mouse events which should be permitted.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onMouse = function(event) {
	'use strict';

	// If a target element was never set (because a touch event was never fired) allow the event
	if (!this.targetElement) {
		return true;
	}

	if (event.forwardedTouchEvent) {
		return true;
	}

	// Programmatically generated events targeting a specific element should be permitted
	if (!event.cancelable) {
		return true;
	}

	// Derive and check the target element to see whether the mouse event needs to be permitted;
	// unless explicitly enabled, prevent non-touch click events from triggering actions,
	// to prevent ghost/doubleclicks.
	if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

		// Prevent any user-added listeners declared on FastClick element from being fired.
		if (event.stopImmediatePropagation) {
			event.stopImmediatePropagation();
		} else {

			// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
			event.propagationStopped = true;
		}

		// Cancel the event
		event.stopPropagation();
		event.preventDefault();

		return false;
	}

	// If the mouse event is permitted, return true for the action to go through.
	return true;
};


/**
 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
 * an actual click which should be permitted.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onClick = function(event) {
	'use strict';
	var permitted;

	// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
	if (this.trackingClick) {
		this.targetElement = null;
		this.trackingClick = false;
		return true;
	}

	// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
	if (event.target.type === 'submit' && event.detail === 0) {
		return true;
	}

	permitted = this.onMouse(event);

	// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
	if (!permitted) {
		this.targetElement = null;
	}

	// If clicks are permitted, return true for the action to go through.
	return permitted;
};


/**
 * Remove all FastClick's event listeners.
 *
 * @returns {void}
 */
FastClick.prototype.destroy = function() {
	'use strict';
	var layer = this.layer;

	if (deviceIsAndroid) {
		layer.removeEventListener('mouseover', this.onMouse, true);
		layer.removeEventListener('mousedown', this.onMouse, true);
		layer.removeEventListener('mouseup', this.onMouse, true);
	}

	layer.removeEventListener('click', this.onClick, true);
	layer.removeEventListener('touchstart', this.onTouchStart, false);
	layer.removeEventListener('touchmove', this.onTouchMove, false);
	layer.removeEventListener('touchend', this.onTouchEnd, false);
	layer.removeEventListener('touchcancel', this.onTouchCancel, false);
};


/**
 * Check whether FastClick is needed.
 *
 * @param {Element} layer The layer to listen on
 */
FastClick.notNeeded = function(layer) {
	'use strict';
	var metaViewport;
	var chromeVersion;

	// Devices that don't support touch don't need FastClick
	if (typeof window.ontouchstart === 'undefined') {
		return true;
	}

	// Chrome version - zero for other browsers
	chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

	if (chromeVersion) {

		if (deviceIsAndroid) {
			metaViewport = document.querySelector('meta[name=viewport]');

			if (metaViewport) {
				// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
				if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
					return true;
				}
				// Chrome 32 and above with width=device-width or less don't need FastClick
				if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
					return true;
				}
			}

		// Chrome desktop doesn't need FastClick (issue #15)
		} else {
			return true;
		}
	}

	// IE10 with -ms-touch-action: none, which disables double-tap-to-zoom (issue #97)
	if (layer.style.msTouchAction === 'none') {
		return true;
	}

	return false;
};


/**
 * Factory method for creating a FastClick object
 *
 * @param {Element} layer The layer to listen on
 * @param {Object} options The options to override the defaults
 */
FastClick.attach = function(layer, options) {
	'use strict';
	return new FastClick(layer, options);
};


if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {

	// AMD. Register as an anonymous module.
	define(function() {
		'use strict';
		return FastClick;
	});
} else if (typeof module !== 'undefined' && module.exports) {
	module.exports = FastClick.attach;
	module.exports.FastClick = FastClick;
} else {
	window.FastClick = FastClick;
}
;/**
 * @license
 * Lo-Dash 2.4.1 (Custom Build) lodash.com/license | Underscore.js 1.5.2 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./dist/lodash.js`
 */
;(function(){function n(n,t,e){e=(e||0)-1;for(var r=n?n.length:0;++e<r;)if(n[e]===t)return e;return-1}function t(t,e){var r=typeof e;if(t=t.l,"boolean"==r||null==e)return t[e]?0:-1;"number"!=r&&"string"!=r&&(r="object");var u="number"==r?e:m+e;return t=(t=t[r])&&t[u],"object"==r?t&&-1<n(t,e)?0:-1:t?0:-1}function e(n){var t=this.l,e=typeof n;if("boolean"==e||null==n)t[n]=true;else{"number"!=e&&"string"!=e&&(e="object");var r="number"==e?n:m+n,t=t[e]||(t[e]={});"object"==e?(t[r]||(t[r]=[])).push(n):t[r]=true
}}function r(n){return n.charCodeAt(0)}function u(n,t){for(var e=n.m,r=t.m,u=-1,o=e.length;++u<o;){var i=e[u],a=r[u];if(i!==a){if(i>a||typeof i=="undefined")return 1;if(i<a||typeof a=="undefined")return-1}}return n.n-t.n}function o(n){var t=-1,r=n.length,u=n[0],o=n[r/2|0],i=n[r-1];if(u&&typeof u=="object"&&o&&typeof o=="object"&&i&&typeof i=="object")return false;for(u=f(),u["false"]=u["null"]=u["true"]=u.undefined=false,o=f(),o.k=n,o.l=u,o.push=e;++t<r;)o.push(n[t]);return o}function i(n){return"\\"+U[n]
}function a(){return h.pop()||[]}function f(){return g.pop()||{k:null,l:null,m:null,"false":false,n:0,"null":false,number:null,object:null,push:null,string:null,"true":false,undefined:false,o:null}}function l(n){n.length=0,h.length<_&&h.push(n)}function c(n){var t=n.l;t&&c(t),n.k=n.l=n.m=n.object=n.number=n.string=n.o=null,g.length<_&&g.push(n)}function p(n,t,e){t||(t=0),typeof e=="undefined"&&(e=n?n.length:0);var r=-1;e=e-t||0;for(var u=Array(0>e?0:e);++r<e;)u[r]=n[t+r];return u}function s(e){function h(n,t,e){if(!n||!V[typeof n])return n;
t=t&&typeof e=="undefined"?t:tt(t,e,3);for(var r=-1,u=V[typeof n]&&Fe(n),o=u?u.length:0;++r<o&&(e=u[r],false!==t(n[e],e,n)););return n}function g(n,t,e){var r;if(!n||!V[typeof n])return n;t=t&&typeof e=="undefined"?t:tt(t,e,3);for(r in n)if(false===t(n[r],r,n))break;return n}function _(n,t,e){var r,u=n,o=u;if(!u)return o;for(var i=arguments,a=0,f=typeof e=="number"?2:i.length;++a<f;)if((u=i[a])&&V[typeof u])for(var l=-1,c=V[typeof u]&&Fe(u),p=c?c.length:0;++l<p;)r=c[l],"undefined"==typeof o[r]&&(o[r]=u[r]);
return o}function U(n,t,e){var r,u=n,o=u;if(!u)return o;var i=arguments,a=0,f=typeof e=="number"?2:i.length;if(3<f&&"function"==typeof i[f-2])var l=tt(i[--f-1],i[f--],2);else 2<f&&"function"==typeof i[f-1]&&(l=i[--f]);for(;++a<f;)if((u=i[a])&&V[typeof u])for(var c=-1,p=V[typeof u]&&Fe(u),s=p?p.length:0;++c<s;)r=p[c],o[r]=l?l(o[r],u[r]):u[r];return o}function H(n){var t,e=[];if(!n||!V[typeof n])return e;for(t in n)me.call(n,t)&&e.push(t);return e}function J(n){return n&&typeof n=="object"&&!Te(n)&&me.call(n,"__wrapped__")?n:new Q(n)
}function Q(n,t){this.__chain__=!!t,this.__wrapped__=n}function X(n){function t(){if(r){var n=p(r);be.apply(n,arguments)}if(this instanceof t){var o=nt(e.prototype),n=e.apply(o,n||arguments);return wt(n)?n:o}return e.apply(u,n||arguments)}var e=n[0],r=n[2],u=n[4];return $e(t,n),t}function Z(n,t,e,r,u){if(e){var o=e(n);if(typeof o!="undefined")return o}if(!wt(n))return n;var i=ce.call(n);if(!K[i])return n;var f=Ae[i];switch(i){case T:case F:return new f(+n);case W:case P:return new f(n);case z:return o=f(n.source,C.exec(n)),o.lastIndex=n.lastIndex,o
}if(i=Te(n),t){var c=!r;r||(r=a()),u||(u=a());for(var s=r.length;s--;)if(r[s]==n)return u[s];o=i?f(n.length):{}}else o=i?p(n):U({},n);return i&&(me.call(n,"index")&&(o.index=n.index),me.call(n,"input")&&(o.input=n.input)),t?(r.push(n),u.push(o),(i?St:h)(n,function(n,i){o[i]=Z(n,t,e,r,u)}),c&&(l(r),l(u)),o):o}function nt(n){return wt(n)?ke(n):{}}function tt(n,t,e){if(typeof n!="function")return Ut;if(typeof t=="undefined"||!("prototype"in n))return n;var r=n.__bindData__;if(typeof r=="undefined"&&(De.funcNames&&(r=!n.name),r=r||!De.funcDecomp,!r)){var u=ge.call(n);
De.funcNames||(r=!O.test(u)),r||(r=E.test(u),$e(n,r))}if(false===r||true!==r&&1&r[1])return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,u){return n.call(t,e,r,u)};case 4:return function(e,r,u,o){return n.call(t,e,r,u,o)}}return Mt(n,t)}function et(n){function t(){var n=f?i:this;if(u){var h=p(u);be.apply(h,arguments)}return(o||c)&&(h||(h=p(arguments)),o&&be.apply(h,o),c&&h.length<a)?(r|=16,et([e,s?r:-4&r,h,null,i,a])):(h||(h=arguments),l&&(e=n[v]),this instanceof t?(n=nt(e.prototype),h=e.apply(n,h),wt(h)?h:n):e.apply(n,h))
}var e=n[0],r=n[1],u=n[2],o=n[3],i=n[4],a=n[5],f=1&r,l=2&r,c=4&r,s=8&r,v=e;return $e(t,n),t}function rt(e,r){var u=-1,i=st(),a=e?e.length:0,f=a>=b&&i===n,l=[];if(f){var p=o(r);p?(i=t,r=p):f=false}for(;++u<a;)p=e[u],0>i(r,p)&&l.push(p);return f&&c(r),l}function ut(n,t,e,r){r=(r||0)-1;for(var u=n?n.length:0,o=[];++r<u;){var i=n[r];if(i&&typeof i=="object"&&typeof i.length=="number"&&(Te(i)||yt(i))){t||(i=ut(i,t,e));var a=-1,f=i.length,l=o.length;for(o.length+=f;++a<f;)o[l++]=i[a]}else e||o.push(i)}return o
}function ot(n,t,e,r,u,o){if(e){var i=e(n,t);if(typeof i!="undefined")return!!i}if(n===t)return 0!==n||1/n==1/t;if(n===n&&!(n&&V[typeof n]||t&&V[typeof t]))return false;if(null==n||null==t)return n===t;var f=ce.call(n),c=ce.call(t);if(f==D&&(f=q),c==D&&(c=q),f!=c)return false;switch(f){case T:case F:return+n==+t;case W:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case z:case P:return n==oe(t)}if(c=f==$,!c){var p=me.call(n,"__wrapped__"),s=me.call(t,"__wrapped__");if(p||s)return ot(p?n.__wrapped__:n,s?t.__wrapped__:t,e,r,u,o);
if(f!=q)return false;if(f=n.constructor,p=t.constructor,f!=p&&!(dt(f)&&f instanceof f&&dt(p)&&p instanceof p)&&"constructor"in n&&"constructor"in t)return false}for(f=!u,u||(u=a()),o||(o=a()),p=u.length;p--;)if(u[p]==n)return o[p]==t;var v=0,i=true;if(u.push(n),o.push(t),c){if(p=n.length,v=t.length,(i=v==p)||r)for(;v--;)if(c=p,s=t[v],r)for(;c--&&!(i=ot(n[c],s,e,r,u,o)););else if(!(i=ot(n[v],s,e,r,u,o)))break}else g(t,function(t,a,f){return me.call(f,a)?(v++,i=me.call(n,a)&&ot(n[a],t,e,r,u,o)):void 0}),i&&!r&&g(n,function(n,t,e){return me.call(e,t)?i=-1<--v:void 0
});return u.pop(),o.pop(),f&&(l(u),l(o)),i}function it(n,t,e,r,u){(Te(t)?St:h)(t,function(t,o){var i,a,f=t,l=n[o];if(t&&((a=Te(t))||Pe(t))){for(f=r.length;f--;)if(i=r[f]==t){l=u[f];break}if(!i){var c;e&&(f=e(l,t),c=typeof f!="undefined")&&(l=f),c||(l=a?Te(l)?l:[]:Pe(l)?l:{}),r.push(t),u.push(l),c||it(l,t,e,r,u)}}else e&&(f=e(l,t),typeof f=="undefined"&&(f=t)),typeof f!="undefined"&&(l=f);n[o]=l})}function at(n,t){return n+he(Re()*(t-n+1))}function ft(e,r,u){var i=-1,f=st(),p=e?e.length:0,s=[],v=!r&&p>=b&&f===n,h=u||v?a():s;
for(v&&(h=o(h),f=t);++i<p;){var g=e[i],y=u?u(g,i,e):g;(r?!i||h[h.length-1]!==y:0>f(h,y))&&((u||v)&&h.push(y),s.push(g))}return v?(l(h.k),c(h)):u&&l(h),s}function lt(n){return function(t,e,r){var u={};e=J.createCallback(e,r,3),r=-1;var o=t?t.length:0;if(typeof o=="number")for(;++r<o;){var i=t[r];n(u,i,e(i,r,t),t)}else h(t,function(t,r,o){n(u,t,e(t,r,o),o)});return u}}function ct(n,t,e,r,u,o){var i=1&t,a=4&t,f=16&t,l=32&t;if(!(2&t||dt(n)))throw new ie;f&&!e.length&&(t&=-17,f=e=false),l&&!r.length&&(t&=-33,l=r=false);
var c=n&&n.__bindData__;return c&&true!==c?(c=p(c),c[2]&&(c[2]=p(c[2])),c[3]&&(c[3]=p(c[3])),!i||1&c[1]||(c[4]=u),!i&&1&c[1]&&(t|=8),!a||4&c[1]||(c[5]=o),f&&be.apply(c[2]||(c[2]=[]),e),l&&we.apply(c[3]||(c[3]=[]),r),c[1]|=t,ct.apply(null,c)):(1==t||17===t?X:et)([n,t,e,r,u,o])}function pt(n){return Be[n]}function st(){var t=(t=J.indexOf)===Wt?n:t;return t}function vt(n){return typeof n=="function"&&pe.test(n)}function ht(n){var t,e;return n&&ce.call(n)==q&&(t=n.constructor,!dt(t)||t instanceof t)?(g(n,function(n,t){e=t
}),typeof e=="undefined"||me.call(n,e)):false}function gt(n){return We[n]}function yt(n){return n&&typeof n=="object"&&typeof n.length=="number"&&ce.call(n)==D||false}function mt(n,t,e){var r=Fe(n),u=r.length;for(t=tt(t,e,3);u--&&(e=r[u],false!==t(n[e],e,n)););return n}function bt(n){var t=[];return g(n,function(n,e){dt(n)&&t.push(e)}),t.sort()}function _t(n){for(var t=-1,e=Fe(n),r=e.length,u={};++t<r;){var o=e[t];u[n[o]]=o}return u}function dt(n){return typeof n=="function"}function wt(n){return!(!n||!V[typeof n])
}function jt(n){return typeof n=="number"||n&&typeof n=="object"&&ce.call(n)==W||false}function kt(n){return typeof n=="string"||n&&typeof n=="object"&&ce.call(n)==P||false}function xt(n){for(var t=-1,e=Fe(n),r=e.length,u=Xt(r);++t<r;)u[t]=n[e[t]];return u}function Ct(n,t,e){var r=-1,u=st(),o=n?n.length:0,i=false;return e=(0>e?Ie(0,o+e):e)||0,Te(n)?i=-1<u(n,t,e):typeof o=="number"?i=-1<(kt(n)?n.indexOf(t,e):u(n,t,e)):h(n,function(n){return++r<e?void 0:!(i=n===t)}),i}function Ot(n,t,e){var r=true;t=J.createCallback(t,e,3),e=-1;
var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&(r=!!t(n[e],e,n)););else h(n,function(n,e,u){return r=!!t(n,e,u)});return r}function Nt(n,t,e){var r=[];t=J.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u;){var o=n[e];t(o,e,n)&&r.push(o)}else h(n,function(n,e,u){t(n,e,u)&&r.push(n)});return r}function It(n,t,e){t=J.createCallback(t,e,3),e=-1;var r=n?n.length:0;if(typeof r!="number"){var u;return h(n,function(n,e,r){return t(n,e,r)?(u=n,false):void 0}),u}for(;++e<r;){var o=n[e];
if(t(o,e,n))return o}}function St(n,t,e){var r=-1,u=n?n.length:0;if(t=t&&typeof e=="undefined"?t:tt(t,e,3),typeof u=="number")for(;++r<u&&false!==t(n[r],r,n););else h(n,t);return n}function Et(n,t,e){var r=n?n.length:0;if(t=t&&typeof e=="undefined"?t:tt(t,e,3),typeof r=="number")for(;r--&&false!==t(n[r],r,n););else{var u=Fe(n),r=u.length;h(n,function(n,e,o){return e=u?u[--r]:--r,t(o[e],e,o)})}return n}function Rt(n,t,e){var r=-1,u=n?n.length:0;if(t=J.createCallback(t,e,3),typeof u=="number")for(var o=Xt(u);++r<u;)o[r]=t(n[r],r,n);
else o=[],h(n,function(n,e,u){o[++r]=t(n,e,u)});return o}function At(n,t,e){var u=-1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&Te(n)){e=-1;for(var i=n.length;++e<i;){var a=n[e];a>o&&(o=a)}}else t=null==t&&kt(n)?r:J.createCallback(t,e,3),St(n,function(n,e,r){e=t(n,e,r),e>u&&(u=e,o=n)});return o}function Dt(n,t,e,r){if(!n)return e;var u=3>arguments.length;t=J.createCallback(t,r,4);var o=-1,i=n.length;if(typeof i=="number")for(u&&(e=n[++o]);++o<i;)e=t(e,n[o],o,n);else h(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)
});return e}function $t(n,t,e,r){var u=3>arguments.length;return t=J.createCallback(t,r,4),Et(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)}),e}function Tt(n){var t=-1,e=n?n.length:0,r=Xt(typeof e=="number"?e:0);return St(n,function(n){var e=at(0,++t);r[t]=r[e],r[e]=n}),r}function Ft(n,t,e){var r;t=J.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&!(r=t(n[e],e,n)););else h(n,function(n,e,u){return!(r=t(n,e,u))});return!!r}function Bt(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=-1;
for(t=J.createCallback(t,e,3);++o<u&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[0]:v;return p(n,0,Se(Ie(0,r),u))}function Wt(t,e,r){if(typeof r=="number"){var u=t?t.length:0;r=0>r?Ie(0,u+r):r||0}else if(r)return r=zt(t,e),t[r]===e?r:-1;return n(t,e,r)}function qt(n,t,e){if(typeof t!="number"&&null!=t){var r=0,u=-1,o=n?n.length:0;for(t=J.createCallback(t,e,3);++u<o&&t(n[u],u,n);)r++}else r=null==t||e?1:Ie(0,t);return p(n,r)}function zt(n,t,e,r){var u=0,o=n?n.length:u;for(e=e?J.createCallback(e,r,1):Ut,t=e(t);u<o;)r=u+o>>>1,e(n[r])<t?u=r+1:o=r;
return u}function Pt(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(e=J.createCallback(e,r,3)),ft(n,t,e)}function Kt(){for(var n=1<arguments.length?arguments:arguments[0],t=-1,e=n?At(Ve(n,"length")):0,r=Xt(0>e?0:e);++t<e;)r[t]=Ve(n,t);return r}function Lt(n,t){var e=-1,r=n?n.length:0,u={};for(t||!r||Te(n[0])||(t=[]);++e<r;){var o=n[e];t?u[o]=t[e]:o&&(u[o[0]]=o[1])}return u}function Mt(n,t){return 2<arguments.length?ct(n,17,p(arguments,2),null,t):ct(n,1,null,null,t)
}function Vt(n,t,e){function r(){c&&ve(c),i=c=p=v,(g||h!==t)&&(s=Ue(),a=n.apply(l,o),c||i||(o=l=null))}function u(){var e=t-(Ue()-f);0<e?c=_e(u,e):(i&&ve(i),e=p,i=c=p=v,e&&(s=Ue(),a=n.apply(l,o),c||i||(o=l=null)))}var o,i,a,f,l,c,p,s=0,h=false,g=true;if(!dt(n))throw new ie;if(t=Ie(0,t)||0,true===e)var y=true,g=false;else wt(e)&&(y=e.leading,h="maxWait"in e&&(Ie(t,e.maxWait)||0),g="trailing"in e?e.trailing:g);return function(){if(o=arguments,f=Ue(),l=this,p=g&&(c||!y),false===h)var e=y&&!c;else{i||y||(s=f);var v=h-(f-s),m=0>=v;
m?(i&&(i=ve(i)),s=f,a=n.apply(l,o)):i||(i=_e(r,v))}return m&&c?c=ve(c):c||t===h||(c=_e(u,t)),e&&(m=true,a=n.apply(l,o)),!m||c||i||(o=l=null),a}}function Ut(n){return n}function Gt(n,t,e){var r=true,u=t&&bt(t);t&&(e||u.length)||(null==e&&(e=t),o=Q,t=n,n=J,u=bt(t)),false===e?r=false:wt(e)&&"chain"in e&&(r=e.chain);var o=n,i=dt(o);St(u,function(e){var u=n[e]=t[e];i&&(o.prototype[e]=function(){var t=this.__chain__,e=this.__wrapped__,i=[e];if(be.apply(i,arguments),i=u.apply(n,i),r||t){if(e===i&&wt(i))return this;
i=new o(i),i.__chain__=t}return i})})}function Ht(){}function Jt(n){return function(t){return t[n]}}function Qt(){return this.__wrapped__}e=e?Y.defaults(G.Object(),e,Y.pick(G,A)):G;var Xt=e.Array,Yt=e.Boolean,Zt=e.Date,ne=e.Function,te=e.Math,ee=e.Number,re=e.Object,ue=e.RegExp,oe=e.String,ie=e.TypeError,ae=[],fe=re.prototype,le=e._,ce=fe.toString,pe=ue("^"+oe(ce).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),se=te.ceil,ve=e.clearTimeout,he=te.floor,ge=ne.prototype.toString,ye=vt(ye=re.getPrototypeOf)&&ye,me=fe.hasOwnProperty,be=ae.push,_e=e.setTimeout,de=ae.splice,we=ae.unshift,je=function(){try{var n={},t=vt(t=re.defineProperty)&&t,e=t(n,n,n)&&t
}catch(r){}return e}(),ke=vt(ke=re.create)&&ke,xe=vt(xe=Xt.isArray)&&xe,Ce=e.isFinite,Oe=e.isNaN,Ne=vt(Ne=re.keys)&&Ne,Ie=te.max,Se=te.min,Ee=e.parseInt,Re=te.random,Ae={};Ae[$]=Xt,Ae[T]=Yt,Ae[F]=Zt,Ae[B]=ne,Ae[q]=re,Ae[W]=ee,Ae[z]=ue,Ae[P]=oe,Q.prototype=J.prototype;var De=J.support={};De.funcDecomp=!vt(e.a)&&E.test(s),De.funcNames=typeof ne.name=="string",J.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:N,variable:"",imports:{_:J}},ke||(nt=function(){function n(){}return function(t){if(wt(t)){n.prototype=t;
var r=new n;n.prototype=null}return r||e.Object()}}());var $e=je?function(n,t){M.value=t,je(n,"__bindData__",M)}:Ht,Te=xe||function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&ce.call(n)==$||false},Fe=Ne?function(n){return wt(n)?Ne(n):[]}:H,Be={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},We=_t(Be),qe=ue("("+Fe(We).join("|")+")","g"),ze=ue("["+Fe(Be).join("")+"]","g"),Pe=ye?function(n){if(!n||ce.call(n)!=q)return false;var t=n.valueOf,e=vt(t)&&(e=ye(t))&&ye(e);return e?n==e||ye(n)==e:ht(n)
}:ht,Ke=lt(function(n,t,e){me.call(n,e)?n[e]++:n[e]=1}),Le=lt(function(n,t,e){(me.call(n,e)?n[e]:n[e]=[]).push(t)}),Me=lt(function(n,t,e){n[e]=t}),Ve=Rt,Ue=vt(Ue=Zt.now)&&Ue||function(){return(new Zt).getTime()},Ge=8==Ee(d+"08")?Ee:function(n,t){return Ee(kt(n)?n.replace(I,""):n,t||0)};return J.after=function(n,t){if(!dt(t))throw new ie;return function(){return 1>--n?t.apply(this,arguments):void 0}},J.assign=U,J.at=function(n){for(var t=arguments,e=-1,r=ut(t,true,false,1),t=t[2]&&t[2][t[1]]===n?1:r.length,u=Xt(t);++e<t;)u[e]=n[r[e]];
return u},J.bind=Mt,J.bindAll=function(n){for(var t=1<arguments.length?ut(arguments,true,false,1):bt(n),e=-1,r=t.length;++e<r;){var u=t[e];n[u]=ct(n[u],1,null,null,n)}return n},J.bindKey=function(n,t){return 2<arguments.length?ct(t,19,p(arguments,2),null,n):ct(t,3,null,null,n)},J.chain=function(n){return n=new Q(n),n.__chain__=true,n},J.compact=function(n){for(var t=-1,e=n?n.length:0,r=[];++t<e;){var u=n[t];u&&r.push(u)}return r},J.compose=function(){for(var n=arguments,t=n.length;t--;)if(!dt(n[t]))throw new ie;
return function(){for(var t=arguments,e=n.length;e--;)t=[n[e].apply(this,t)];return t[0]}},J.constant=function(n){return function(){return n}},J.countBy=Ke,J.create=function(n,t){var e=nt(n);return t?U(e,t):e},J.createCallback=function(n,t,e){var r=typeof n;if(null==n||"function"==r)return tt(n,t,e);if("object"!=r)return Jt(n);var u=Fe(n),o=u[0],i=n[o];return 1!=u.length||i!==i||wt(i)?function(t){for(var e=u.length,r=false;e--&&(r=ot(t[u[e]],n[u[e]],null,true)););return r}:function(n){return n=n[o],i===n&&(0!==i||1/i==1/n)
}},J.curry=function(n,t){return t=typeof t=="number"?t:+t||n.length,ct(n,4,null,null,null,t)},J.debounce=Vt,J.defaults=_,J.defer=function(n){if(!dt(n))throw new ie;var t=p(arguments,1);return _e(function(){n.apply(v,t)},1)},J.delay=function(n,t){if(!dt(n))throw new ie;var e=p(arguments,2);return _e(function(){n.apply(v,e)},t)},J.difference=function(n){return rt(n,ut(arguments,true,true,1))},J.filter=Nt,J.flatten=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(n=Rt(n,e,r)),ut(n,t)
},J.forEach=St,J.forEachRight=Et,J.forIn=g,J.forInRight=function(n,t,e){var r=[];g(n,function(n,t){r.push(t,n)});var u=r.length;for(t=tt(t,e,3);u--&&false!==t(r[u--],r[u],n););return n},J.forOwn=h,J.forOwnRight=mt,J.functions=bt,J.groupBy=Le,J.indexBy=Me,J.initial=function(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=u;for(t=J.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else r=null==t||e?1:t||r;return p(n,0,Se(Ie(0,u-r),u))},J.intersection=function(){for(var e=[],r=-1,u=arguments.length,i=a(),f=st(),p=f===n,s=a();++r<u;){var v=arguments[r];
(Te(v)||yt(v))&&(e.push(v),i.push(p&&v.length>=b&&o(r?e[r]:s)))}var p=e[0],h=-1,g=p?p.length:0,y=[];n:for(;++h<g;){var m=i[0],v=p[h];if(0>(m?t(m,v):f(s,v))){for(r=u,(m||s).push(v);--r;)if(m=i[r],0>(m?t(m,v):f(e[r],v)))continue n;y.push(v)}}for(;u--;)(m=i[u])&&c(m);return l(i),l(s),y},J.invert=_t,J.invoke=function(n,t){var e=p(arguments,2),r=-1,u=typeof t=="function",o=n?n.length:0,i=Xt(typeof o=="number"?o:0);return St(n,function(n){i[++r]=(u?t:n[t]).apply(n,e)}),i},J.keys=Fe,J.map=Rt,J.mapValues=function(n,t,e){var r={};
return t=J.createCallback(t,e,3),h(n,function(n,e,u){r[e]=t(n,e,u)}),r},J.max=At,J.memoize=function(n,t){function e(){var r=e.cache,u=t?t.apply(this,arguments):m+arguments[0];return me.call(r,u)?r[u]:r[u]=n.apply(this,arguments)}if(!dt(n))throw new ie;return e.cache={},e},J.merge=function(n){var t=arguments,e=2;if(!wt(n))return n;if("number"!=typeof t[2]&&(e=t.length),3<e&&"function"==typeof t[e-2])var r=tt(t[--e-1],t[e--],2);else 2<e&&"function"==typeof t[e-1]&&(r=t[--e]);for(var t=p(arguments,1,e),u=-1,o=a(),i=a();++u<e;)it(n,t[u],r,o,i);
return l(o),l(i),n},J.min=function(n,t,e){var u=1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&Te(n)){e=-1;for(var i=n.length;++e<i;){var a=n[e];a<o&&(o=a)}}else t=null==t&&kt(n)?r:J.createCallback(t,e,3),St(n,function(n,e,r){e=t(n,e,r),e<u&&(u=e,o=n)});return o},J.omit=function(n,t,e){var r={};if(typeof t!="function"){var u=[];g(n,function(n,t){u.push(t)});for(var u=rt(u,ut(arguments,true,false,1)),o=-1,i=u.length;++o<i;){var a=u[o];r[a]=n[a]}}else t=J.createCallback(t,e,3),g(n,function(n,e,u){t(n,e,u)||(r[e]=n)
});return r},J.once=function(n){var t,e;if(!dt(n))throw new ie;return function(){return t?e:(t=true,e=n.apply(this,arguments),n=null,e)}},J.pairs=function(n){for(var t=-1,e=Fe(n),r=e.length,u=Xt(r);++t<r;){var o=e[t];u[t]=[o,n[o]]}return u},J.partial=function(n){return ct(n,16,p(arguments,1))},J.partialRight=function(n){return ct(n,32,null,p(arguments,1))},J.pick=function(n,t,e){var r={};if(typeof t!="function")for(var u=-1,o=ut(arguments,true,false,1),i=wt(n)?o.length:0;++u<i;){var a=o[u];a in n&&(r[a]=n[a])
}else t=J.createCallback(t,e,3),g(n,function(n,e,u){t(n,e,u)&&(r[e]=n)});return r},J.pluck=Ve,J.property=Jt,J.pull=function(n){for(var t=arguments,e=0,r=t.length,u=n?n.length:0;++e<r;)for(var o=-1,i=t[e];++o<u;)n[o]===i&&(de.call(n,o--,1),u--);return n},J.range=function(n,t,e){n=+n||0,e=typeof e=="number"?e:+e||1,null==t&&(t=n,n=0);var r=-1;t=Ie(0,se((t-n)/(e||1)));for(var u=Xt(t);++r<t;)u[r]=n,n+=e;return u},J.reject=function(n,t,e){return t=J.createCallback(t,e,3),Nt(n,function(n,e,r){return!t(n,e,r)
})},J.remove=function(n,t,e){var r=-1,u=n?n.length:0,o=[];for(t=J.createCallback(t,e,3);++r<u;)e=n[r],t(e,r,n)&&(o.push(e),de.call(n,r--,1),u--);return o},J.rest=qt,J.shuffle=Tt,J.sortBy=function(n,t,e){var r=-1,o=Te(t),i=n?n.length:0,p=Xt(typeof i=="number"?i:0);for(o||(t=J.createCallback(t,e,3)),St(n,function(n,e,u){var i=p[++r]=f();o?i.m=Rt(t,function(t){return n[t]}):(i.m=a())[0]=t(n,e,u),i.n=r,i.o=n}),i=p.length,p.sort(u);i--;)n=p[i],p[i]=n.o,o||l(n.m),c(n);return p},J.tap=function(n,t){return t(n),n
},J.throttle=function(n,t,e){var r=true,u=true;if(!dt(n))throw new ie;return false===e?r=false:wt(e)&&(r="leading"in e?e.leading:r,u="trailing"in e?e.trailing:u),L.leading=r,L.maxWait=t,L.trailing=u,Vt(n,t,L)},J.times=function(n,t,e){n=-1<(n=+n)?n:0;var r=-1,u=Xt(n);for(t=tt(t,e,1);++r<n;)u[r]=t(r);return u},J.toArray=function(n){return n&&typeof n.length=="number"?p(n):xt(n)},J.transform=function(n,t,e,r){var u=Te(n);if(null==e)if(u)e=[];else{var o=n&&n.constructor;e=nt(o&&o.prototype)}return t&&(t=J.createCallback(t,r,4),(u?St:h)(n,function(n,r,u){return t(e,n,r,u)
})),e},J.union=function(){return ft(ut(arguments,true,true))},J.uniq=Pt,J.values=xt,J.where=Nt,J.without=function(n){return rt(n,p(arguments,1))},J.wrap=function(n,t){return ct(t,16,[n])},J.xor=function(){for(var n=-1,t=arguments.length;++n<t;){var e=arguments[n];if(Te(e)||yt(e))var r=r?ft(rt(r,e).concat(rt(e,r))):e}return r||[]},J.zip=Kt,J.zipObject=Lt,J.collect=Rt,J.drop=qt,J.each=St,J.eachRight=Et,J.extend=U,J.methods=bt,J.object=Lt,J.select=Nt,J.tail=qt,J.unique=Pt,J.unzip=Kt,Gt(J),J.clone=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=t,t=false),Z(n,t,typeof e=="function"&&tt(e,r,1))
},J.cloneDeep=function(n,t,e){return Z(n,true,typeof t=="function"&&tt(t,e,1))},J.contains=Ct,J.escape=function(n){return null==n?"":oe(n).replace(ze,pt)},J.every=Ot,J.find=It,J.findIndex=function(n,t,e){var r=-1,u=n?n.length:0;for(t=J.createCallback(t,e,3);++r<u;)if(t(n[r],r,n))return r;return-1},J.findKey=function(n,t,e){var r;return t=J.createCallback(t,e,3),h(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},J.findLast=function(n,t,e){var r;return t=J.createCallback(t,e,3),Et(n,function(n,e,u){return t(n,e,u)?(r=n,false):void 0
}),r},J.findLastIndex=function(n,t,e){var r=n?n.length:0;for(t=J.createCallback(t,e,3);r--;)if(t(n[r],r,n))return r;return-1},J.findLastKey=function(n,t,e){var r;return t=J.createCallback(t,e,3),mt(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},J.has=function(n,t){return n?me.call(n,t):false},J.identity=Ut,J.indexOf=Wt,J.isArguments=yt,J.isArray=Te,J.isBoolean=function(n){return true===n||false===n||n&&typeof n=="object"&&ce.call(n)==T||false},J.isDate=function(n){return n&&typeof n=="object"&&ce.call(n)==F||false
},J.isElement=function(n){return n&&1===n.nodeType||false},J.isEmpty=function(n){var t=true;if(!n)return t;var e=ce.call(n),r=n.length;return e==$||e==P||e==D||e==q&&typeof r=="number"&&dt(n.splice)?!r:(h(n,function(){return t=false}),t)},J.isEqual=function(n,t,e,r){return ot(n,t,typeof e=="function"&&tt(e,r,2))},J.isFinite=function(n){return Ce(n)&&!Oe(parseFloat(n))},J.isFunction=dt,J.isNaN=function(n){return jt(n)&&n!=+n},J.isNull=function(n){return null===n},J.isNumber=jt,J.isObject=wt,J.isPlainObject=Pe,J.isRegExp=function(n){return n&&typeof n=="object"&&ce.call(n)==z||false
},J.isString=kt,J.isUndefined=function(n){return typeof n=="undefined"},J.lastIndexOf=function(n,t,e){var r=n?n.length:0;for(typeof e=="number"&&(r=(0>e?Ie(0,r+e):Se(e,r-1))+1);r--;)if(n[r]===t)return r;return-1},J.mixin=Gt,J.noConflict=function(){return e._=le,this},J.noop=Ht,J.now=Ue,J.parseInt=Ge,J.random=function(n,t,e){var r=null==n,u=null==t;return null==e&&(typeof n=="boolean"&&u?(e=n,n=1):u||typeof t!="boolean"||(e=t,u=true)),r&&u&&(t=1),n=+n||0,u?(t=n,n=0):t=+t||0,e||n%1||t%1?(e=Re(),Se(n+e*(t-n+parseFloat("1e-"+((e+"").length-1))),t)):at(n,t)
},J.reduce=Dt,J.reduceRight=$t,J.result=function(n,t){if(n){var e=n[t];return dt(e)?n[t]():e}},J.runInContext=s,J.size=function(n){var t=n?n.length:0;return typeof t=="number"?t:Fe(n).length},J.some=Ft,J.sortedIndex=zt,J.template=function(n,t,e){var r=J.templateSettings;n=oe(n||""),e=_({},e,r);var u,o=_({},e.imports,r.imports),r=Fe(o),o=xt(o),a=0,f=e.interpolate||S,l="__p+='",f=ue((e.escape||S).source+"|"+f.source+"|"+(f===N?x:S).source+"|"+(e.evaluate||S).source+"|$","g");n.replace(f,function(t,e,r,o,f,c){return r||(r=o),l+=n.slice(a,c).replace(R,i),e&&(l+="'+__e("+e+")+'"),f&&(u=true,l+="';"+f+";\n__p+='"),r&&(l+="'+((__t=("+r+"))==null?'':__t)+'"),a=c+t.length,t
}),l+="';",f=e=e.variable,f||(e="obj",l="with("+e+"){"+l+"}"),l=(u?l.replace(w,""):l).replace(j,"$1").replace(k,"$1;"),l="function("+e+"){"+(f?"":e+"||("+e+"={});")+"var __t,__p='',__e=_.escape"+(u?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}";try{var c=ne(r,"return "+l).apply(v,o)}catch(p){throw p.source=l,p}return t?c(t):(c.source=l,c)},J.unescape=function(n){return null==n?"":oe(n).replace(qe,gt)},J.uniqueId=function(n){var t=++y;return oe(null==n?"":n)+t
},J.all=Ot,J.any=Ft,J.detect=It,J.findWhere=It,J.foldl=Dt,J.foldr=$t,J.include=Ct,J.inject=Dt,Gt(function(){var n={};return h(J,function(t,e){J.prototype[e]||(n[e]=t)}),n}(),false),J.first=Bt,J.last=function(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=u;for(t=J.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[u-1]:v;return p(n,Ie(0,u-r))},J.sample=function(n,t,e){return n&&typeof n.length!="number"&&(n=xt(n)),null==t||e?n?n[at(0,n.length-1)]:v:(n=Tt(n),n.length=Se(Ie(0,t),n.length),n)
},J.take=Bt,J.head=Bt,h(J,function(n,t){var e="sample"!==t;J.prototype[t]||(J.prototype[t]=function(t,r){var u=this.__chain__,o=n(this.__wrapped__,t,r);return u||null!=t&&(!r||e&&typeof t=="function")?new Q(o,u):o})}),J.VERSION="2.4.1",J.prototype.chain=function(){return this.__chain__=true,this},J.prototype.toString=function(){return oe(this.__wrapped__)},J.prototype.value=Qt,J.prototype.valueOf=Qt,St(["join","pop","shift"],function(n){var t=ae[n];J.prototype[n]=function(){var n=this.__chain__,e=t.apply(this.__wrapped__,arguments);
return n?new Q(e,n):e}}),St(["push","reverse","sort","unshift"],function(n){var t=ae[n];J.prototype[n]=function(){return t.apply(this.__wrapped__,arguments),this}}),St(["concat","slice","splice"],function(n){var t=ae[n];J.prototype[n]=function(){return new Q(t.apply(this.__wrapped__,arguments),this.__chain__)}}),J}var v,h=[],g=[],y=0,m=+new Date+"",b=75,_=40,d=" \t\x0B\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",w=/\b__p\+='';/g,j=/\b(__p\+=)''\+/g,k=/(__e\(.*?\)|\b__t\))\+'';/g,x=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,C=/\w*$/,O=/^\s*function[ \n\r\t]+\w/,N=/<%=([\s\S]+?)%>/g,I=RegExp("^["+d+"]*0+(?=.$)"),S=/($^)/,E=/\bthis\b/,R=/['\n\r\t\u2028\u2029\\]/g,A="Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "),D="[object Arguments]",$="[object Array]",T="[object Boolean]",F="[object Date]",B="[object Function]",W="[object Number]",q="[object Object]",z="[object RegExp]",P="[object String]",K={};
K[B]=false,K[D]=K[$]=K[T]=K[F]=K[W]=K[q]=K[z]=K[P]=true;var L={leading:false,maxWait:0,trailing:false},M={configurable:false,enumerable:false,value:null,writable:false},V={"boolean":false,"function":true,object:true,number:false,string:false,undefined:false},U={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"},G=V[typeof window]&&window||this,H=V[typeof exports]&&exports&&!exports.nodeType&&exports,J=V[typeof module]&&module&&!module.nodeType&&module,Q=J&&J.exports===H&&H,X=V[typeof global]&&global;!X||X.global!==X&&X.window!==X||(G=X);
var Y=s();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(G._=Y, define(function(){return Y})):H&&J?Q?(J.exports=Y)._=Y:H._=Y:G._=Y}).call(this);;/*!
* Fine Uploader
*
* Copyright 2013, Widen Enterprises, Inc. info@fineuploader.com
*
* Version: 5.0.3
*
* Homepage: http://fineuploader.com
*
* Repository: git://github.com/Widen/fine-uploader.git
*
* Licensed under GNU GPL v3, see LICENSE
*/ 


/*globals window, navigator, document, FormData, File, HTMLInputElement, XMLHttpRequest, Blob, Storage, ActiveXObject */
/* jshint -W079 */
var qq = function(element) {
    "use strict";

    return {
        hide: function() {
            element.style.display = "none";
            return this;
        },

        /** Returns the function which detaches attached event */
        attach: function(type, fn) {
            if (element.addEventListener){
                element.addEventListener(type, fn, false);
            } else if (element.attachEvent){
                element.attachEvent("on" + type, fn);
            }
            return function() {
                qq(element).detach(type, fn);
            };
        },

        detach: function(type, fn) {
            if (element.removeEventListener){
                element.removeEventListener(type, fn, false);
            } else if (element.attachEvent){
                element.detachEvent("on" + type, fn);
            }
            return this;
        },

        contains: function(descendant) {
            // The [W3C spec](http://www.w3.org/TR/domcore/#dom-node-contains)
            // says a `null` (or ostensibly `undefined`) parameter
            // passed into `Node.contains` should result in a false return value.
            // IE7 throws an exception if the parameter is `undefined` though.
            if (!descendant) {
                return false;
            }

            // compareposition returns false in this case
            if (element === descendant) {
                return true;
            }

            if (element.contains){
                return element.contains(descendant);
            } else {
                /*jslint bitwise: true*/
                return !!(descendant.compareDocumentPosition(element) & 8);
            }
        },

        /**
         * Insert this element before elementB.
         */
        insertBefore: function(elementB) {
            elementB.parentNode.insertBefore(element, elementB);
            return this;
        },

        remove: function() {
            element.parentNode.removeChild(element);
            return this;
        },

        /**
         * Sets styles for an element.
         * Fixes opacity in IE6-8.
         */
        css: function(styles) {
            /*jshint eqnull: true*/
            if (element.style == null) {
                throw new qq.Error("Can't apply style to node as it is not on the HTMLElement prototype chain!");
            }

            /*jshint -W116*/
            if (styles.opacity != null){
                if (typeof element.style.opacity !== "string" && typeof(element.filters) !== "undefined"){
                    styles.filter = "alpha(opacity=" + Math.round(100 * styles.opacity) + ")";
                }
            }
            qq.extend(element.style, styles);

            return this;
        },

        hasClass: function(name) {
            var re = new RegExp("(^| )" + name + "( |$)");
            return re.test(element.className);
        },

        addClass: function(name) {
            if (!qq(element).hasClass(name)){
                element.className += " " + name;
            }
            return this;
        },

        removeClass: function(name) {
            var re = new RegExp("(^| )" + name + "( |$)");
            element.className = element.className.replace(re, " ").replace(/^\s+|\s+$/g, "");
            return this;
        },

        getByClass: function(className) {
            var candidates,
                result = [];

            if (element.querySelectorAll){
                return element.querySelectorAll("." + className);
            }

            candidates = element.getElementsByTagName("*");

            qq.each(candidates, function(idx, val) {
                if (qq(val).hasClass(className)){
                    result.push(val);
                }
            });
            return result;
        },

        children: function() {
            var children = [],
                child = element.firstChild;

            while (child){
                if (child.nodeType === 1){
                    children.push(child);
                }
                child = child.nextSibling;
            }

            return children;
        },

        setText: function(text) {
            element.innerText = text;
            element.textContent = text;
            return this;
        },

        clearText: function() {
            return qq(element).setText("");
        },

        // Returns true if the attribute exists on the element
        // AND the value of the attribute is NOT "false" (case-insensitive)
        hasAttribute: function(attrName) {
            var attrVal;

            if (element.hasAttribute) {

                if (!element.hasAttribute(attrName)) {
                    return false;
                }

                /*jshint -W116*/
                return (/^false$/i).exec(element.getAttribute(attrName)) == null;
            }
            else {
                attrVal = element[attrName];

                if (attrVal === undefined) {
                    return false;
                }

                /*jshint -W116*/
                return (/^false$/i).exec(attrVal) == null;
            }
        }
    };
};

(function(){
    "use strict";

    qq.log = function(message, level) {
        if (window.console) {
            if (!level || level === "info") {
                window.console.log(message);
            }
            else
            {
                if (window.console[level]) {
                    window.console[level](message);
                }
                else {
                    window.console.log("<" + level + "> " + message);
                }
            }
        }
    };

    qq.isObject = function(variable) {
        return variable && !variable.nodeType && Object.prototype.toString.call(variable) === "[object Object]";
    };

    qq.isFunction = function(variable) {
        return typeof(variable) === "function";
    };

    /**
     * Check the type of a value.  Is it an "array"?
     *
     * @param value value to test.
     * @returns true if the value is an array or associated with an `ArrayBuffer`
     */
    qq.isArray = function(value) {
        return Object.prototype.toString.call(value) === "[object Array]" ||
            (value && window.ArrayBuffer && value.buffer && value.buffer.constructor === ArrayBuffer);
    };

    // Looks for an object on a `DataTransfer` object that is associated with drop events when utilizing the Filesystem API.
    qq.isItemList = function(maybeItemList) {
        return Object.prototype.toString.call(maybeItemList) === "[object DataTransferItemList]";
    };

    // Looks for an object on a `NodeList` or an `HTMLCollection`|`HTMLFormElement`|`HTMLSelectElement`
    // object that is associated with collections of Nodes.
    qq.isNodeList = function(maybeNodeList) {
        return Object.prototype.toString.call(maybeNodeList) === "[object NodeList]" ||
            // If `HTMLCollection` is the actual type of the object, we must determine this
            // by checking for expected properties/methods on the object
            (maybeNodeList.item && maybeNodeList.namedItem);
    };

    qq.isString = function(maybeString) {
        return Object.prototype.toString.call(maybeString) === "[object String]";
    };

    qq.trimStr = function(string) {
        if (String.prototype.trim) {
            return string.trim();
        }

        return string.replace(/^\s+|\s+$/g,"");
    };


    /**
     * @param str String to format.
     * @returns {string} A string, swapping argument values with the associated occurrence of {} in the passed string.
     */
    qq.format = function(str) {

        var args =  Array.prototype.slice.call(arguments, 1),
            newStr = str,
            nextIdxToReplace = newStr.indexOf("{}");

        qq.each(args, function(idx, val) {
            var strBefore = newStr.substring(0, nextIdxToReplace),
                strAfter = newStr.substring(nextIdxToReplace+2);

            newStr = strBefore + val + strAfter;
            nextIdxToReplace = newStr.indexOf("{}", nextIdxToReplace + val.length);

            // End the loop if we have run out of tokens (when the arguments exceed the # of tokens)
            if (nextIdxToReplace < 0) {
                return false;
            }
        });

        return newStr;
    };

    qq.isFile = function(maybeFile) {
        return window.File && Object.prototype.toString.call(maybeFile) === "[object File]";
    };

    qq.isFileList = function(maybeFileList) {
        return window.FileList && Object.prototype.toString.call(maybeFileList) === "[object FileList]";
    };

    qq.isFileOrInput = function(maybeFileOrInput) {
        return qq.isFile(maybeFileOrInput) || qq.isInput(maybeFileOrInput);
    };

    qq.isInput = function(maybeInput, notFile) {
        var evaluateType = function(type) {
            var normalizedType = type.toLowerCase();

            if (notFile) {
                return normalizedType !== "file";
            }

            return normalizedType === "file";
        };

        if (window.HTMLInputElement) {
            if (Object.prototype.toString.call(maybeInput) === "[object HTMLInputElement]") {
                if (maybeInput.type && evaluateType(maybeInput.type)) {
                    return true;
                }
            }
        }
        if (maybeInput.tagName) {
            if (maybeInput.tagName.toLowerCase() === "input") {
                if (maybeInput.type && evaluateType(maybeInput.type)) {
                    return true;
                }
            }
        }

        return false;
    };

    qq.isBlob = function(maybeBlob) {
        if (window.Blob && Object.prototype.toString.call(maybeBlob) === "[object Blob]") {
            return true;
        }
    };

    qq.isXhrUploadSupported = function() {
        var input = document.createElement("input");
        input.type = "file";

        return (
            input.multiple !== undefined &&
                typeof File !== "undefined" &&
                typeof FormData !== "undefined" &&
                typeof (qq.createXhrInstance()).upload !== "undefined" );
    };

    // Fall back to ActiveX is native XHR is disabled (possible in any version of IE).
    qq.createXhrInstance = function() {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        }

        try {
            return new ActiveXObject("MSXML2.XMLHTTP.3.0");
        }
        catch(error) {
            qq.log("Neither XHR or ActiveX are supported!", "error");
            return null;
        }
    };

    qq.isFolderDropSupported = function(dataTransfer) {
        return dataTransfer.items &&
            dataTransfer.items.length > 0 &&
            dataTransfer.items[0].webkitGetAsEntry;
    };

    qq.isFileChunkingSupported = function() {
        return !qq.androidStock() && //Android's stock browser cannot upload Blobs correctly
            qq.isXhrUploadSupported() &&
            (File.prototype.slice !== undefined || File.prototype.webkitSlice !== undefined || File.prototype.mozSlice !== undefined);
    };

    qq.sliceBlob = function(fileOrBlob, start, end) {
        var slicer = fileOrBlob.slice || fileOrBlob.mozSlice || fileOrBlob.webkitSlice;

        return slicer.call(fileOrBlob, start, end);
    };

    qq.arrayBufferToHex = function(buffer) {
        var bytesAsHex = "",
            bytes = new Uint8Array(buffer);


        qq.each(bytes, function(idx, byt) {
            var byteAsHexStr = byt.toString(16);

            if (byteAsHexStr.length < 2) {
                byteAsHexStr = "0" + byteAsHexStr;
            }

            bytesAsHex += byteAsHexStr;
        });

        return bytesAsHex;
    };

    qq.readBlobToHex = function(blob, startOffset, length) {
        var initialBlob = qq.sliceBlob(blob, startOffset, startOffset + length),
            fileReader = new FileReader(),
            promise = new qq.Promise();

        fileReader.onload = function() {
            promise.success(qq.arrayBufferToHex(fileReader.result));
        };

        fileReader.onerror = promise.failure;

        fileReader.readAsArrayBuffer(initialBlob);

        return promise;
    };

    qq.extend = function(first, second, extendNested) {
        qq.each(second, function(prop, val) {
            if (extendNested && qq.isObject(val)) {
                if (first[prop] === undefined) {
                    first[prop] = {};
                }
                qq.extend(first[prop], val, true);
            }
            else {
                first[prop] = val;
            }
        });

        return first;
    };

    /**
     * Allow properties in one object to override properties in another,
     * keeping track of the original values from the target object.
     *
     * Note that the pre-overriden properties to be overriden by the source will be passed into the `sourceFn` when it is invoked.
     *
     * @param target Update properties in this object from some source
     * @param sourceFn A function that, when invoked, will return properties that will replace properties with the same name in the target.
     * @returns {object} The target object
     */
    qq.override = function(target, sourceFn) {
        var super_ = {},
            source = sourceFn(super_);

        qq.each(source, function(srcPropName, srcPropVal) {
            if (target[srcPropName] !== undefined) {
                super_[srcPropName] = target[srcPropName];
            }

            target[srcPropName] = srcPropVal;
        });

        return target;
    };

    /**
     * Searches for a given element in the array, returns -1 if it is not present.
     * @param {Number} [from] The index at which to begin the search
     */
    qq.indexOf = function(arr, elt, from){
        if (arr.indexOf) {
            return arr.indexOf(elt, from);
        }

        from = from || 0;
        var len = arr.length;

        if (from < 0) {
            from += len;
        }

        for (; from < len; from+=1){
            if (arr.hasOwnProperty(from) && arr[from] === elt){
                return from;
            }
        }
        return -1;
    };

    //this is a version 4 UUID
    qq.getUniqueId = function(){
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
            /*jslint eqeq: true, bitwise: true*/
            var r = Math.random()*16|0, v = c == "x" ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    };

    //
    // Browsers and platforms detection
    qq.ie = function() {
        return navigator.userAgent.indexOf("MSIE") !== -1;
    };

    qq.ie7 = function() {
        return navigator.userAgent.indexOf("MSIE 7") !== -1;
    };

    qq.ie10 = function() {
        return navigator.userAgent.indexOf("MSIE 10") !== -1;
    };

    qq.ie11 = function() {
        return (navigator.userAgent.indexOf("Trident") !== -1 &&
            navigator.userAgent.indexOf("rv:11") !== -1);
    };

    qq.safari = function() {
        return navigator.vendor !== undefined && navigator.vendor.indexOf("Apple") !== -1;
    };

    qq.chrome = function() {
        return navigator.vendor !== undefined && navigator.vendor.indexOf("Google") !== -1;
    };

    qq.opera = function() {
        return navigator.vendor !== undefined && navigator.vendor.indexOf("Opera") !== -1;
    };

    qq.firefox = function() {
        return (!qq.ie11() && navigator.userAgent.indexOf("Mozilla") !== -1 && navigator.vendor !== undefined && navigator.vendor === "");
    };

    qq.windows = function() {
        return navigator.platform === "Win32";
    };

    qq.android = function() {
        return navigator.userAgent.toLowerCase().indexOf("android") !== -1;
    };

    // We need to identify the Android stock browser via the UA string to work around various bugs in this browser,
    // such as the one that prevents a `Blob` from being uploaded.
    qq.androidStock = function() {
        return qq.android() && navigator.userAgent.toLowerCase().indexOf("chrome") < 0;
    };

    qq.ios7 = function() {
        return qq.ios() && navigator.userAgent.indexOf(" OS 7_") !== -1;
    };

    qq.ios = function() {
        /*jshint -W014 */
        return navigator.userAgent.indexOf("iPad") !== -1
            || navigator.userAgent.indexOf("iPod") !== -1
            || navigator.userAgent.indexOf("iPhone") !== -1;
    };

    //
    // Events

    qq.preventDefault = function(e){
        if (e.preventDefault){
            e.preventDefault();
        } else{
            e.returnValue = false;
        }
    };

    /**
     * Creates and returns element from html string
     * Uses innerHTML to create an element
     */
    qq.toElement = (function(){
        var div = document.createElement("div");
        return function(html){
            div.innerHTML = html;
            var element = div.firstChild;
            div.removeChild(element);
            return element;
        };
    }());

    //key and value are passed to callback for each entry in the iterable item
    qq.each = function(iterableItem, callback) {
        var keyOrIndex, retVal;

        if (iterableItem) {
            // Iterate through [`Storage`](http://www.w3.org/TR/webstorage/#the-storage-interface) items
            if (window.Storage && iterableItem.constructor === window.Storage) {
                for (keyOrIndex = 0; keyOrIndex < iterableItem.length; keyOrIndex++) {
                    retVal = callback(iterableItem.key(keyOrIndex), iterableItem.getItem(iterableItem.key(keyOrIndex)));
                    if (retVal === false) {
                        break;
                    }
                }
            }
            // `DataTransferItemList` & `NodeList` objects are array-like and should be treated as arrays
            // when iterating over items inside the object.
            else if (qq.isArray(iterableItem) || qq.isItemList(iterableItem) || qq.isNodeList(iterableItem)) {
                for (keyOrIndex = 0; keyOrIndex < iterableItem.length; keyOrIndex++) {
                    retVal = callback(keyOrIndex, iterableItem[keyOrIndex]);
                    if (retVal === false) {
                        break;
                    }
                }
            }
            else if (qq.isString(iterableItem)) {
                for (keyOrIndex = 0; keyOrIndex < iterableItem.length; keyOrIndex++) {
                    retVal = callback(keyOrIndex, iterableItem.charAt(keyOrIndex));
                    if (retVal === false) {
                        break;
                    }
                }
            }
            else {
                for (keyOrIndex in iterableItem) {
                    if (Object.prototype.hasOwnProperty.call(iterableItem, keyOrIndex)) {
                        retVal = callback(keyOrIndex, iterableItem[keyOrIndex]);
                        if (retVal === false) {
                            break;
                        }
                    }
                }
            }
        }
    };

    //include any args that should be passed to the new function after the context arg
    qq.bind = function(oldFunc, context) {
        if (qq.isFunction(oldFunc)) {
            var args =  Array.prototype.slice.call(arguments, 2);

            return function() {
                var newArgs = qq.extend([], args);
                if (arguments.length) {
                    newArgs = newArgs.concat(Array.prototype.slice.call(arguments));
                }
                return oldFunc.apply(context, newArgs);
            };
        }

        throw new Error("first parameter must be a function!");
    };

    /**
     * obj2url() takes a json-object as argument and generates
     * a querystring. pretty much like jQuery.param()
     *
     * how to use:
     *
     *    `qq.obj2url({a:'b',c:'d'},'http://any.url/upload?otherParam=value');`
     *
     * will result in:
     *
     *    `http://any.url/upload?otherParam=value&a=b&c=d`
     *
     * @param  Object JSON-Object
     * @param  String current querystring-part
     * @return String encoded querystring
     */
    qq.obj2url = function(obj, temp, prefixDone){
        /*jshint laxbreak: true*/
        var uristrings = [],
            prefix = "&",
            add = function(nextObj, i){
                var nextTemp = temp
                    ? (/\[\]$/.test(temp)) // prevent double-encoding
                    ? temp
                    : temp+"["+i+"]"
                    : i;
                if ((nextTemp !== "undefined") && (i !== "undefined")) {
                    uristrings.push(
                        (typeof nextObj === "object")
                            ? qq.obj2url(nextObj, nextTemp, true)
                            : (Object.prototype.toString.call(nextObj) === "[object Function]")
                            ? encodeURIComponent(nextTemp) + "=" + encodeURIComponent(nextObj())
                            : encodeURIComponent(nextTemp) + "=" + encodeURIComponent(nextObj)
                    );
                }
            };

        if (!prefixDone && temp) {
            prefix = (/\?/.test(temp)) ? (/\?$/.test(temp)) ? "" : "&" : "?";
            uristrings.push(temp);
            uristrings.push(qq.obj2url(obj));
        } else if ((Object.prototype.toString.call(obj) === "[object Array]") && (typeof obj !== "undefined") ) {
            qq.each(obj, function(idx, val) {
                add(val, idx);
            });
        } else if ((typeof obj !== "undefined") && (obj !== null) && (typeof obj === "object")){
            qq.each(obj, function(prop, val) {
                add(val, prop);
            });
        } else {
            uristrings.push(encodeURIComponent(temp) + "=" + encodeURIComponent(obj));
        }

        if (temp) {
            return uristrings.join(prefix);
        } else {
            return uristrings.join(prefix)
                .replace(/^&/, "")
                .replace(/%20/g, "+");
        }
    };

    qq.obj2FormData = function(obj, formData, arrayKeyName) {
        if (!formData) {
            formData = new FormData();
        }

        qq.each(obj, function(key, val) {
            key = arrayKeyName ? arrayKeyName + "[" + key + "]" : key;

            if (qq.isObject(val)) {
                qq.obj2FormData(val, formData, key);
            }
            else if (qq.isFunction(val)) {
                formData.append(key, val());
            }
            else {
                formData.append(key, val);
            }
        });

        return formData;
    };

    qq.obj2Inputs = function(obj, form) {
        var input;

        if (!form) {
            form = document.createElement("form");
        }

        qq.obj2FormData(obj, {
            append: function(key, val) {
                input = document.createElement("input");
                input.setAttribute("name", key);
                input.setAttribute("value", val);
                form.appendChild(input);
            }
        });

        return form;
    };

    /**
     * Not recommended for use outside of Fine Uploader since this falls back to an unchecked eval if JSON.parse is not
     * implemented.  For a more secure JSON.parse polyfill, use Douglas Crockford's json2.js.
     */
    qq.parseJson = function(json) {
        /*jshint evil: true*/
        if (window.JSON && qq.isFunction(JSON.parse)) {
            return JSON.parse(json);
        } else {
            return eval("(" + json + ")");
        }
    };

    /**
     * Retrieve the extension of a file, if it exists.
     *
     * @param filename
     * @returns {string || undefined}
     */
    qq.getExtension = function(filename) {
        var extIdx = filename.lastIndexOf(".") + 1;

        if (extIdx > 0) {
            return filename.substr(extIdx, filename.length - extIdx);
        }
    };

    qq.getFilename = function(blobOrFileInput) {
        /*jslint regexp: true*/

        if (qq.isInput(blobOrFileInput)) {
            // get input value and remove path to normalize
            return blobOrFileInput.value.replace(/.*(\/|\\)/, "");
        }
        else if (qq.isFile(blobOrFileInput)) {
            if (blobOrFileInput.fileName !== null && blobOrFileInput.fileName !== undefined) {
                return blobOrFileInput.fileName;
            }
        }

        return blobOrFileInput.name;
    };

    /**
     * A generic module which supports object disposing in dispose() method.
     * */
    qq.DisposeSupport = function() {
        var disposers = [];

        return {
            /** Run all registered disposers */
            dispose: function() {
                var disposer;
                do {
                    disposer = disposers.shift();
                    if (disposer) {
                        disposer();
                    }
                }
                while (disposer);
            },

            /** Attach event handler and register de-attacher as a disposer */
            attach: function() {
                var args = arguments;
                /*jslint undef:true*/
                this.addDisposer(qq(args[0]).attach.apply(this, Array.prototype.slice.call(arguments, 1)));
            },

            /** Add disposer to the collection */
            addDisposer: function(disposeFunction) {
                disposers.push(disposeFunction);
            }
        };
    };
}());

/* globals qq */
/**
 * Fine Uploader top-level Error container.  Inherits from `Error`.
 */
(function() {
    "use strict";

    qq.Error = function(message) {
        this.message = "[Fine Uploader " + qq.version + "] " + message;
    };

    qq.Error.prototype = new Error();
}());

/*global qq */
qq.version="5.0.3";

/* globals qq */
qq.supportedFeatures = (function () {
    "use strict";

    var supportsUploading,
        supportsUploadingBlobs,
        supportsAjaxFileUploading,
        supportsFolderDrop,
        supportsChunking,
        supportsResume,
        supportsUploadViaPaste,
        supportsUploadCors,
        supportsDeleteFileXdr,
        supportsDeleteFileCorsXhr,
        supportsDeleteFileCors,
        supportsFolderSelection,
        supportsImagePreviews,
        supportsUploadProgress;


    function testSupportsFileInputElement() {
        var supported = true,
            tempInput;

        try {
            tempInput = document.createElement("input");
            tempInput.type = "file";
            qq(tempInput).hide();

            if (tempInput.disabled) {
                supported = false;
            }
        }
        catch (ex) {
            supported = false;
        }

        return supported;
    }

    //only way to test for Filesystem API support since webkit does not expose the DataTransfer interface
    function isChrome21OrHigher() {
        return (qq.chrome() || qq.opera()) &&
            navigator.userAgent.match(/Chrome\/[2][1-9]|Chrome\/[3-9][0-9]/) !== undefined;
    }

    //only way to test for complete Clipboard API support at this time
    function isChrome14OrHigher() {
        return (qq.chrome() || qq.opera()) &&
            navigator.userAgent.match(/Chrome\/[1][4-9]|Chrome\/[2-9][0-9]/) !== undefined;
    }

    //Ensure we can send cross-origin `XMLHttpRequest`s
    function isCrossOriginXhrSupported() {
        if (window.XMLHttpRequest) {
            var xhr = qq.createXhrInstance();

            //Commonly accepted test for XHR CORS support.
            return xhr.withCredentials !== undefined;
        }

        return false;
    }

    //Test for (terrible) cross-origin ajax transport fallback for IE9 and IE8
    function isXdrSupported() {
        return window.XDomainRequest !== undefined;
    }

    // CORS Ajax requests are supported if it is either possible to send credentialed `XMLHttpRequest`s,
    // or if `XDomainRequest` is an available alternative.
    function isCrossOriginAjaxSupported() {
        if (isCrossOriginXhrSupported()) {
            return true;
        }

        return isXdrSupported();
    }

    function isFolderSelectionSupported() {
        // We know that folder selection is only supported in Chrome via this proprietary attribute for now
        return document.createElement("input").webkitdirectory !== undefined;
    }


    supportsUploading = testSupportsFileInputElement();

    supportsAjaxFileUploading = supportsUploading && qq.isXhrUploadSupported();

    supportsUploadingBlobs = supportsAjaxFileUploading && !qq.androidStock();

    supportsFolderDrop = supportsAjaxFileUploading && isChrome21OrHigher();

    supportsChunking = supportsAjaxFileUploading && qq.isFileChunkingSupported();

    supportsResume = supportsAjaxFileUploading && supportsChunking && !!window.localStorage;

    supportsUploadViaPaste = supportsAjaxFileUploading && isChrome14OrHigher();

    supportsUploadCors = supportsUploading && (window.postMessage !== undefined || supportsAjaxFileUploading);

    supportsDeleteFileCorsXhr = isCrossOriginXhrSupported();

    supportsDeleteFileXdr = isXdrSupported();

    supportsDeleteFileCors = isCrossOriginAjaxSupported();

    supportsFolderSelection = isFolderSelectionSupported();

    supportsImagePreviews = supportsAjaxFileUploading && window.FileReader !== undefined;

    supportsUploadProgress = (function() {
        if (supportsAjaxFileUploading) {
            return !qq.androidStock() &&
                !(qq.ios() && navigator.userAgent.indexOf("CriOS") >= 0);
        }
        return false;
    }());


    return {
        ajaxUploading: supportsAjaxFileUploading,
        blobUploading: supportsUploadingBlobs,
        canDetermineSize: supportsAjaxFileUploading,
        chunking: supportsChunking,
        deleteFileCors: supportsDeleteFileCors,
        deleteFileCorsXdr: supportsDeleteFileXdr, //NOTE: will also return true in IE10, where XDR is also supported
        deleteFileCorsXhr: supportsDeleteFileCorsXhr,
        fileDrop: supportsAjaxFileUploading, //NOTE: will also return true for touch-only devices.  It's not currently possible to accurately test for touch-only devices
        folderDrop: supportsFolderDrop,
        folderSelection: supportsFolderSelection,
        imagePreviews: supportsImagePreviews,
        imageValidation: supportsImagePreviews,
        itemSizeValidation: supportsAjaxFileUploading,
        pause: supportsChunking,
        progressBar: supportsUploadProgress,
        resume: supportsResume,
        scaling: supportsImagePreviews && supportsUploadingBlobs,
        tiffPreviews: qq.safari(), // Not the best solution, but simple and probably accurate enough (for now)
        unlimitedScaledImageSize: !qq.ios(), // false simply indicates that there is some known limit
        uploading: supportsUploading,
        uploadCors: supportsUploadCors,
        uploadCustomHeaders: supportsAjaxFileUploading,
        uploadNonMultipart: supportsAjaxFileUploading,
        uploadViaPaste: supportsUploadViaPaste
    };

}());

/*globals qq*/

// Is the passed object a promise instance?
qq.isGenericPromise = function(maybePromise) {
    "use strict";
    return !!(maybePromise && maybePromise.then && qq.isFunction(maybePromise.then));
};

qq.Promise = function() {
    "use strict";

    var successArgs, failureArgs,
        successCallbacks = [],
        failureCallbacks = [],
        doneCallbacks = [],
        state = 0;

    qq.extend(this, {
        then: function(onSuccess, onFailure) {
            if (state === 0) {
                if (onSuccess) {
                    successCallbacks.push(onSuccess);
                }
                if (onFailure) {
                    failureCallbacks.push(onFailure);
                }
            }
            else if (state === -1) {
                onFailure && onFailure.apply(null, failureArgs);
            }
            else if (onSuccess) {
                onSuccess.apply(null,successArgs);
            }

            return this;
        },

        done: function(callback) {
            if (state === 0) {
                doneCallbacks.push(callback);
            }
            else {
                callback.apply(null, failureArgs === undefined ? successArgs : failureArgs);
            }

            return this;
        },

        success: function() {
            state = 1;
            successArgs = arguments;

            if (successCallbacks.length) {
                qq.each(successCallbacks, function(idx, callback) {
                    callback.apply(null, successArgs);
                });
            }

            if(doneCallbacks.length) {
                qq.each(doneCallbacks, function(idx, callback) {
                    callback.apply(null, successArgs);
                });
            }

            return this;
        },

        failure: function() {
            state = -1;
            failureArgs = arguments;

            if (failureCallbacks.length) {
                qq.each(failureCallbacks, function(idx, callback) {
                    callback.apply(null, failureArgs);
                });
            }

            if(doneCallbacks.length) {
                qq.each(doneCallbacks, function(idx, callback) {
                    callback.apply(null, failureArgs);
                });
            }

            return this;
        }
    });
};

/* globals qq */
/**
 * Placeholder for a Blob that will be generated on-demand.
 *
 * @param referenceBlob Parent of the generated blob
 * @param onCreate Function to invoke when the blob must be created.  Must be promissory.
 * @constructor
 */
qq.BlobProxy = function(referenceBlob, onCreate) {
    "use strict";

    qq.extend(this, {
        referenceBlob: referenceBlob,

        create: function() {
            return onCreate(referenceBlob);
        }
    });
};

/*globals qq*/

/**
 * This module represents an upload or "Select File(s)" button.  It's job is to embed an opaque `<input type="file">`
 * element as a child of a provided "container" element.  This "container" element (`options.element`) is used to provide
 * a custom style for the `<input type="file">` element.  The ability to change the style of the container element is also
 * provided here by adding CSS classes to the container on hover/focus.
 *
 * TODO Eliminate the mouseover and mouseout event handlers since the :hover CSS pseudo-class should now be
 * available on all supported browsers.
 *
 * @param o Options to override the default values
 */
qq.UploadButton = function(o) {
    "use strict";


    var disposeSupport = new qq.DisposeSupport(),

        options = {
            // "Container" element
            element: null,

            // If true adds `multiple` attribute to `<input type="file">`
            multiple: false,

            // Corresponds to the `accept` attribute on the associated `<input type="file">`
            acceptFiles: null,

            // A true value allows folders to be selected, if supported by the UA
            folders: false,

            // `name` attribute of `<input type="file">`
            name: "qqfile",

            // Called when the browser invokes the onchange handler on the `<input type="file">`
            onChange: function(input) {},

            // **This option will be removed** in the future as the :hover CSS pseudo-class is available on all supported browsers
            hoverClass: "qq-upload-button-hover",

            focusClass: "qq-upload-button-focus"
        },
        input, buttonId;

    // Overrides any of the default option values with any option values passed in during construction.
    qq.extend(options, o);

    buttonId = qq.getUniqueId();

    // Embed an opaque `<input type="file">` element as a child of `options.element`.
    function createInput() {
        var input = document.createElement("input");

        input.setAttribute(qq.UploadButton.BUTTON_ID_ATTR_NAME, buttonId);

        if (options.multiple) {
            input.setAttribute("multiple", "");
        }

        if (options.folders && qq.supportedFeatures.folderSelection) {
            // selecting directories is only possible in Chrome now, via a vendor-specific prefixed attribute
            input.setAttribute("webkitdirectory", "");
        }

        if (options.acceptFiles) {
            input.setAttribute("accept", options.acceptFiles);
        }

        input.setAttribute("type", "file");
        input.setAttribute("name", options.name);

        qq(input).css({
            position: "absolute",
            // in Opera only 'browse' button
            // is clickable and it is located at
            // the right side of the input
            right: 0,
            top: 0,
            fontFamily: "Arial",
            // 4 persons reported this, the max values that worked for them were 243, 236, 236, 118
            fontSize: "118px",
            margin: 0,
            padding: 0,
            cursor: "pointer",
            opacity: 0
        });

        options.element.appendChild(input);

        disposeSupport.attach(input, "change", function(){
            options.onChange(input);
        });

        // **These event handlers will be removed** in the future as the :hover CSS pseudo-class is available on all supported browsers
        disposeSupport.attach(input, "mouseover", function(){
            qq(options.element).addClass(options.hoverClass);
        });
        disposeSupport.attach(input, "mouseout", function(){
            qq(options.element).removeClass(options.hoverClass);
        });

        disposeSupport.attach(input, "focus", function(){
            qq(options.element).addClass(options.focusClass);
        });
        disposeSupport.attach(input, "blur", function(){
            qq(options.element).removeClass(options.focusClass);
        });

        // IE and Opera, unfortunately have 2 tab stops on file input
        // which is unacceptable in our case, disable keyboard access
        if (window.attachEvent) {
            // it is IE or Opera
            input.setAttribute("tabIndex", "-1");
        }

        return input;
    }

    // Make button suitable container for input
    qq(options.element).css({
        position: "relative",
        overflow: "hidden",
        // Make sure browse button is in the right side in Internet Explorer
        direction: "ltr"
    });

    input = createInput();


    // Exposed API
    qq.extend(this, {
        getInput: function() {
            return input;
        },

        getButtonId: function() {
            return buttonId;
        },

        setMultiple: function(isMultiple) {
            if (isMultiple !== options.multiple) {
                if (isMultiple) {
                    input.setAttribute("multiple", "");
                }
                else {
                    input.removeAttribute("multiple");
                }
            }
        },

        setAcceptFiles: function(acceptFiles) {
            if (acceptFiles !== options.acceptFiles) {
                input.setAttribute("accept", acceptFiles);
            }
        },

        reset: function(){
            if (input.parentNode){
                qq(input).remove();
            }

            qq(options.element).removeClass(options.focusClass);
            input = createInput();
        }
    });
};

qq.UploadButton.BUTTON_ID_ATTR_NAME = "qq-button-id";

/*globals qq */
qq.UploadData = function(uploaderProxy) {
    "use strict";

    var data = [],
        byUuid = {},
        byStatus = {},
        byProxyGroupId = {},
        byBatchId = {};


    function getDataByIds(idOrIds) {
        if (qq.isArray(idOrIds)) {
            var entries = [];

            qq.each(idOrIds, function(idx, id) {
                entries.push(data[id]);
            });

            return entries;
        }

        return data[idOrIds];
    }

    function getDataByUuids(uuids) {
        if (qq.isArray(uuids)) {
            var entries = [];

            qq.each(uuids, function(idx, uuid) {
                entries.push(data[byUuid[uuid]]);
            });

            return entries;
        }

        return data[byUuid[uuids]];
    }

    function getDataByStatus(status) {
        var statusResults = [],
            statuses = [].concat(status);

        qq.each(statuses, function(index, statusEnum) {
            var statusResultIndexes = byStatus[statusEnum];

            if (statusResultIndexes !== undefined) {
                qq.each(statusResultIndexes, function(i, dataIndex) {
                    statusResults.push(data[dataIndex]);
                });
            }
        });

        return statusResults;
    }

    qq.extend(this, {
        /**
         * Adds a new file to the data cache for tracking purposes.
         *
         * @param spec Data that describes this file.  Possible properties are:
         *
         * - uuid: Initial UUID for this file.
         * - name: Initial name of this file.
         * - size: Size of this file, omit if this cannot be determined
         * - status: Initial `qq.status` for this file.  Omit for `qq.status.SUBMITTING`.
         * - batchId: ID of the batch this file belongs to
         * - proxyGroupId: ID of the proxy group associated with this file
         *
         * @returns {number} Internal ID for this file.
         */
        addFile: function(spec) {
            var status = spec.status || qq.status.SUBMITTING;

            var id = data.push({
                name: spec.name,
                originalName: spec.name,
                uuid: spec.uuid,
                size: spec.size || -1,
                status: status
            }) - 1;

            if (spec.batchId) {
                data[id].batchId = spec.batchId;

                if (byBatchId[spec.batchId] === undefined) {
                    byBatchId[spec.batchId] = [];
                }
                byBatchId[spec.batchId].push(id);
            }

            if (spec.proxyGroupId) {
                data[id].proxyGroupId = spec.proxyGroupId;

                if (byProxyGroupId[spec.proxyGroupId] === undefined) {
                    byProxyGroupId[spec.proxyGroupId] = [];
                }
                byProxyGroupId[spec.proxyGroupId].push(id);
            }

            data[id].id = id;
            byUuid[spec.uuid] = id;

            if (byStatus[status] === undefined) {
                byStatus[status] = [];
            }
            byStatus[status].push(id);

            uploaderProxy.onStatusChange(id, null, status);

            return id;
        },

        retrieve: function(optionalFilter) {
            if (qq.isObject(optionalFilter) && data.length)  {
                if (optionalFilter.id !== undefined) {
                    return getDataByIds(optionalFilter.id);
                }

                else if (optionalFilter.uuid !== undefined) {
                    return getDataByUuids(optionalFilter.uuid);
                }

                else if (optionalFilter.status) {
                    return getDataByStatus(optionalFilter.status);
                }
            }
            else {
                return qq.extend([], data, true);
            }
        },

        reset: function() {
            data = [];
            byUuid = {};
            byStatus = {};
            byBatchId = {};
        },

        setStatus: function(id, newStatus) {
            var oldStatus = data[id].status,
                byStatusOldStatusIndex = qq.indexOf(byStatus[oldStatus], id);

            byStatus[oldStatus].splice(byStatusOldStatusIndex, 1);

            data[id].status = newStatus;

            if (byStatus[newStatus] === undefined) {
                byStatus[newStatus] = [];
            }
            byStatus[newStatus].push(id);

            uploaderProxy.onStatusChange(id, oldStatus, newStatus);
        },

        uuidChanged: function(id, newUuid) {
            var oldUuid = data[id].uuid;

            data[id].uuid = newUuid;
            byUuid[newUuid] = id;
            delete byUuid[oldUuid];
        },

        updateName: function(id, newName) {
            data[id].name = newName;
        },

        updateSize: function(id, newSize) {
            data[id].size = newSize;
        },

        // Only applicable if this file has a parent that we may want to reference later.
        setParentId: function(targetId, parentId) {
            data[targetId].parentId = parentId;
        },

        getIdsInProxyGroup: function(id) {
            var proxyGroupId = data[id].proxyGroupId;

            if (proxyGroupId) {
                return byProxyGroupId[proxyGroupId];
            }
            return [];
        },

        getIdsInBatch: function(id) {
            var batchId = data[id].batchId;

            return byBatchId[batchId];
        }
    });
};

qq.status = {
    SUBMITTING: "submitting",
    SUBMITTED: "submitted",
    REJECTED: "rejected",
    QUEUED: "queued",
    CANCELED: "canceled",
    PAUSED: "paused",
    UPLOADING: "uploading",
    UPLOAD_RETRYING: "retrying upload",
    UPLOAD_SUCCESSFUL: "upload successful",
    UPLOAD_FAILED: "upload failed",
    DELETE_FAILED: "delete failed",
    DELETING: "deleting",
    DELETED: "deleted"
};

/*globals qq*/
/**
 * Defines the public API for FineUploaderBasic mode.
 */
(function(){
    "use strict";

    qq.basePublicApi = {
        addBlobs: function(blobDataOrArray, params, endpoint) {
            if (!qq.supportedFeatures.blobUploading) {
                throw new qq.Error("Blob uploading is not supported in this browser!");
            }

            if (blobDataOrArray) {
                var blobDataArray = [].concat(blobDataOrArray),
                    verifiedBlobDataList = [],
                    batchId = this._storedIds.length === 0 ? qq.getUniqueId() : this._currentBatchId,
                    self = this;

                this._currentBatchId = batchId;

                qq.each(blobDataArray, function(idx, blobData) {
                    var blobOrBlobData;

                    if (qq.isBlob(blobData) && !qq.isFileOrInput(blobData)) {
                        blobOrBlobData = {
                            blob: blobData,
                            name: self._options.blobs.defaultName
                        };
                    }
                    else if (qq.isObject(blobData) && blobData.blob && blobData.name) {
                        blobOrBlobData = blobData;
                    }
                    else {
                        self.log("addBlobs: entry at index " + idx + " is not a Blob or a BlobData object", "error");
                    }

                    blobOrBlobData && self._handleNewFile(blobOrBlobData, batchId, verifiedBlobDataList);
                });

                this._prepareItemsForUpload(verifiedBlobDataList, params, endpoint);
            }
            else {
                this.log("undefined or non-array parameter passed into addBlobs", "error");
            }
        },

        addFiles: function(filesOrInputs, params, endpoint) {
            var verifiedFilesOrInputs = [],
                batchId = this._storedIds.length === 0 ? qq.getUniqueId() : this._currentBatchId,
                fileOrInputIndex, fileOrInput, fileIndex;

            this._currentBatchId = batchId;

            if (filesOrInputs) {
                if (!qq.isFileList(filesOrInputs)) {
                    filesOrInputs = [].concat(filesOrInputs);
                }

                for (fileOrInputIndex = 0; fileOrInputIndex < filesOrInputs.length; fileOrInputIndex+=1) {
                    fileOrInput = filesOrInputs[fileOrInputIndex];

                    if (qq.isFileOrInput(fileOrInput)) {
                        if (qq.isInput(fileOrInput) && qq.supportedFeatures.ajaxUploading) {
                            for (fileIndex = 0; fileIndex < fileOrInput.files.length; fileIndex++) {
                                this._handleNewFile(fileOrInput.files[fileIndex], batchId, verifiedFilesOrInputs);
                            }
                        }
                        else {
                            this._handleNewFile(fileOrInput, batchId, verifiedFilesOrInputs);
                        }
                    }
                    else {
                        this.log(fileOrInput + " is not a File or INPUT element!  Ignoring!", "warn");
                    }
                }

                this.log("Received " + verifiedFilesOrInputs.length + " files or inputs.");
                this._prepareItemsForUpload(verifiedFilesOrInputs, params, endpoint);
            }
        },

        cancel: function(id) {
            this._handler.cancel(id);
        },

        cancelAll: function() {
            var storedIdsCopy = [],
                self = this;

            qq.extend(storedIdsCopy, this._storedIds);
            qq.each(storedIdsCopy, function(idx, storedFileId) {
                self.cancel(storedFileId);
            });

            this._handler.cancelAll();
        },

        clearStoredFiles: function(){
            this._storedIds = [];
        },

        continueUpload: function(id) {
            var uploadData = this._uploadData.retrieve({id: id});

            if (!qq.supportedFeatures.pause || !this._options.chunking.enabled) {
                return false;
            }

            if (uploadData.status === qq.status.PAUSED) {
                this.log(qq.format("Paused file ID {} ({}) will be continued.  Not paused.", id, this.getName(id)));
                this._uploadFile(id);
                return true;
            }
            else {
                this.log(qq.format("Ignoring continue for file ID {} ({}).  Not paused.", id, this.getName(id)), "error");
            }

            return false;
        },

        deleteFile: function(id) {
            return this._onSubmitDelete(id);
        },

        // TODO document?
        doesExist: function(fileOrBlobId) {
            return this._handler.isValid(fileOrBlobId);
        },

                // Generate a variable size thumbnail on an img or canvas,
        // returning a promise that is fulfilled when the attempt completes.
        // Thumbnail can either be based off of a URL for an image returned
        // by the server in the upload response, or the associated `Blob`.
        drawThumbnail: function(fileId, imgOrCanvas, maxSize, fromServer) {
            var promiseToReturn = new qq.Promise();

            if (this._imageGenerator) {
                var fileOrUrl = this._thumbnailUrls[fileId],
                    options = {
                        scale: maxSize > 0,
                        maxSize: maxSize > 0 ? maxSize : null
                    };

                // If client-side preview generation is possible
                // and we are not specifically looking for the image URl returned by the server...
                if (!fromServer && qq.supportedFeatures.imagePreviews) {
                    fileOrUrl = this.getFile(fileId);
                }

                /* jshint eqeqeq:false,eqnull:true */
                if (fileOrUrl == null) {
                    promiseToReturn.failure({container: imgOrCanvas, error: "File or URL not found."});
                }
                else {
                    this._imageGenerator.generate(fileOrUrl, imgOrCanvas, options).then(
                        function success(modifiedContainer) {
                            promiseToReturn.success(modifiedContainer);
                        },

                        function failure(container, reason) {
                            promiseToReturn.failure({container: container, error: reason || "Problem generating thumbnail"});
                        }
                    );
                }
            }
            else {
                promiseToReturn.failure({container: imgOrCanvas, error: "Missing image generator module"});
            }

            return promiseToReturn;
        },

        getButton: function(fileId) {
            return this._getButton(this._buttonIdsForFileIds[fileId]);
        },

        getFile: function(fileOrBlobId) {
            return this._handler.getFile(fileOrBlobId) || null;
        },

        getInProgress: function() {
            return this._uploadData.retrieve({
                status: [
                    qq.status.UPLOADING,
                    qq.status.UPLOAD_RETRYING,
                    qq.status.QUEUED
                ]
            }).length;
        },

        getName: function(id) {
            return this._uploadData.retrieve({id: id}).name;
        },

                // Parent ID for a specific file, or null if this is the parent, or if it has no parent.
        getParentId: function(id) {
            var uploadDataEntry = this.getUploads({id: id}),
                parentId = null;

            if (uploadDataEntry) {
                if (uploadDataEntry.parentId !== undefined) {
                    parentId = uploadDataEntry.parentId;
                }
            }

            return parentId;
        },

        getResumableFilesData: function() {
            return this._handler.getResumableFilesData();
        },

        getSize: function(id) {
            return this._uploadData.retrieve({id: id}).size;
        },

        getNetUploads: function() {
            return this._netUploaded;
        },

        getRemainingAllowedItems: function() {
            var allowedItems = this._options.validation.itemLimit;

            if (allowedItems > 0) {
                return this._options.validation.itemLimit - this._netUploadedOrQueued;
            }

            return null;
        },

        getUploads: function(optionalFilter) {
            return this._uploadData.retrieve(optionalFilter);
        },

        getUuid: function(id) {
            return this._uploadData.retrieve({id: id}).uuid;
        },

        log: function(str, level) {
            if (this._options.debug && (!level || level === "info")) {
                qq.log("[Fine Uploader " + qq.version + "] " + str);
            }
            else if (level && level !== "info") {
                qq.log("[Fine Uploader " + qq.version + "] " + str, level);

            }
        },

        pauseUpload: function(id) {
            var uploadData = this._uploadData.retrieve({id: id});

            if (!qq.supportedFeatures.pause || !this._options.chunking.enabled) {
                return false;
            }

            // Pause only really makes sense if the file is uploading or retrying
            if (qq.indexOf([qq.status.UPLOADING, qq.status.UPLOAD_RETRYING], uploadData.status) >= 0) {
                if (this._handler.pause(id)) {
                    this._uploadData.setStatus(id, qq.status.PAUSED);
                    return true;
                }
                else {
                    this.log(qq.format("Unable to pause file ID {} ({}).", id, this.getName(id)), "error");
                }
            }
            else {
                this.log(qq.format("Ignoring pause for file ID {} ({}).  Not in progress.", id, this.getName(id)), "error");
            }

            return false;
        },

        reset: function() {
            this.log("Resetting uploader...");

            this._handler.reset();
            this._storedIds = [];
            this._autoRetries = [];
            this._retryTimeouts = [];
            this._preventRetries = [];
            this._thumbnailUrls = [];

            qq.each(this._buttons, function(idx, button) {
                button.reset();
            });

            this._paramsStore.reset();
            this._endpointStore.reset();
            this._netUploadedOrQueued = 0;
            this._netUploaded = 0;
            this._uploadData.reset();
            this._buttonIdsForFileIds = [];

            this._pasteHandler && this._pasteHandler.reset();
            this._options.session.refreshOnReset && this._refreshSessionData();

            this._succeededSinceLastAllComplete = [];
            this._failedSinceLastAllComplete = [];

            this._totalProgress && this._totalProgress.reset();
        },

        retry: function(id) {
            return this._manualRetry(id);
        },

        scaleImage: function(id, specs) {
            var self = this;

            return qq.Scaler.prototype.scaleImage(id, specs, {
                log: qq.bind(self.log, self),
                getFile: qq.bind(self.getFile, self),
                uploadData: self._uploadData
            });
        },

        setCustomHeaders: function(headers, id) {
            this._customHeadersStore.set(headers, id);
        },

        setDeleteFileCustomHeaders: function(headers, id) {
            this._deleteFileCustomHeadersStore.set(headers, id);
        },

        setDeleteFileEndpoint: function(endpoint, id) {
            this._deleteFileEndpointStore.set(endpoint, id);
        },

        setDeleteFileParams: function(params, id) {
            this._deleteFileParamsStore.set(params, id);
        },

        // Re-sets the default endpoint, an endpoint for a specific file, or an endpoint for a specific button
        setEndpoint: function(endpoint, id) {
            this._endpointStore.set(endpoint, id);
        },

        setName: function(id, newName) {
            this._uploadData.updateName(id, newName);
        },

        setParams: function(params, id) {
            this._paramsStore.set(params, id);
        },

        setUuid: function(id, newUuid) {
            return this._uploadData.uuidChanged(id, newUuid);
        },

        uploadStoredFiles: function() {
            var idToUpload;

            if (this._storedIds.length === 0) {
                this._itemError("noFilesError");
            }
            else {
                while (this._storedIds.length) {
                    idToUpload = this._storedIds.shift();
                    this._uploadFile(idToUpload);
                }
            }
        }
    };




    /**
     * Defines the private (internal) API for FineUploaderBasic mode.
     */
    qq.basePrivateApi = {
        // Updates internal state with a file record (not backed by a live file).  Returns the assigned ID.
        _addCannedFile: function(sessionData) {
            var id = this._uploadData.addFile({
                uuid: sessionData.uuid,
                name: sessionData.name,
                size: sessionData.size,
                status: qq.status.UPLOAD_SUCCESSFUL
            });

            sessionData.deleteFileEndpoint && this.setDeleteFileEndpoint(sessionData.deleteFileEndpoint, id);
            sessionData.deleteFileParams && this.setDeleteFileParams(sessionData.deleteFileParams, id);

            if (sessionData.thumbnailUrl) {
                this._thumbnailUrls[id] = sessionData.thumbnailUrl;
            }

            this._netUploaded++;
            this._netUploadedOrQueued++;

            return id;
        },

        _annotateWithButtonId: function(file, associatedInput) {
            if (qq.isFile(file)) {
                file.qqButtonId = this._getButtonId(associatedInput);
            }
        },

        _batchError: function(message) {
            this._options.callbacks.onError(null, null, message, undefined);
        },

        _createDeleteHandler: function() {
            var self = this;

            return new qq.DeleteFileAjaxRequester({
                method: this._options.deleteFile.method.toUpperCase(),
                maxConnections: this._options.maxConnections,
                uuidParamName: this._options.request.uuidName,
                customHeaders: this._deleteFileCustomHeadersStore,
                paramsStore: this._deleteFileParamsStore,
                endpointStore: this._deleteFileEndpointStore,
                demoMode: this._options.demoMode,
                cors: this._options.cors,
                log: qq.bind(self.log, self),
                onDelete: function(id) {
                    self._onDelete(id);
                    self._options.callbacks.onDelete(id);
                },
                onDeleteComplete: function(id, xhrOrXdr, isError) {
                    self._onDeleteComplete(id, xhrOrXdr, isError);
                    self._options.callbacks.onDeleteComplete(id, xhrOrXdr, isError);
                }

            });
        },

        _createPasteHandler: function() {
            var self = this;

            return new qq.PasteSupport({
                targetElement: this._options.paste.targetElement,
                callbacks: {
                    log: qq.bind(self.log, self),
                    pasteReceived: function(blob) {
                        self._handleCheckedCallback({
                            name: "onPasteReceived",
                            callback: qq.bind(self._options.callbacks.onPasteReceived, self, blob),
                            onSuccess: qq.bind(self._handlePasteSuccess, self, blob),
                            identifier: "pasted image"
                        });
                    }
                }
            });
        },

        _createStore: function(initialValue, readOnlyValues) {
            var store = {},
                catchall = initialValue,
                perIdReadOnlyValues = {},
                copy = function(orig) {
                    if (qq.isObject(orig)) {
                        return qq.extend({}, orig);
                    }
                    return orig;
                },
                getReadOnlyValues = function() {
                    if (qq.isFunction(readOnlyValues)) {
                        return readOnlyValues();
                    }
                    return readOnlyValues;
                },
                includeReadOnlyValues = function(id, existing) {
                    if (readOnlyValues && qq.isObject(existing)) {
                        qq.extend(existing, getReadOnlyValues());
                    }

                    if (perIdReadOnlyValues[id]) {
                        qq.extend(existing, perIdReadOnlyValues[id]);
                    }
                };

            return {
                set: function(val, id) {
                    /*jshint eqeqeq: true, eqnull: true*/
                    if (id == null) {
                        store = {};
                        catchall = copy(val);
                    }
                    else {
                        store[id] = copy(val);
                    }
                },

                get: function(id) {
                    var values;

                    /*jshint eqeqeq: true, eqnull: true*/
                    if (id != null && store[id]) {
                        values = store[id];
                    }
                    else {
                        values = copy(catchall);
                    }

                    includeReadOnlyValues(id, values);

                    return copy(values);
                },

                addReadOnly: function(id, values) {
                    // Only applicable to Object stores
                    if (qq.isObject(store)) {
                        perIdReadOnlyValues[id] = perIdReadOnlyValues[id] || {};
                        qq.extend(perIdReadOnlyValues[id], values);
                    }
                },

                remove: function(fileId) {
                    return delete store[fileId];
                },

                reset: function() {
                    store = {};
                    perIdReadOnlyValues = {};
                    catchall = initialValue;
                }
            };
        },

        _createUploadDataTracker: function() {
            var self = this;

            return new qq.UploadData({
                getName: function(id) {
                    return self.getName(id);
                },
                getUuid: function(id) {
                    return self.getUuid(id);
                },
                getSize: function(id) {
                    return self.getSize(id);
                },
                onStatusChange: function(id, oldStatus, newStatus) {
                    self._onUploadStatusChange(id, oldStatus, newStatus);
                    self._options.callbacks.onStatusChange(id, oldStatus, newStatus);
                    self._maybeAllComplete(id, newStatus);

                    if (self._totalProgress) {
                        setTimeout(function() {
                            self._totalProgress.onStatusChange(id, oldStatus, newStatus);
                        }, 0);
                    }
                }
            });
        },

        /**
         * Generate a tracked upload button.
         *
         * @param spec Object containing a required `element` property
         * along with optional `multiple`, `accept`, and `folders`.
         * @returns {qq.UploadButton}
         * @private
         */
        _createUploadButton: function(spec) {
            var self = this,
                acceptFiles = spec.accept || this._options.validation.acceptFiles,
                allowedExtensions = spec.allowedExtensions || this._options.validation.allowedExtensions;

            function allowMultiple() {
                if (qq.supportedFeatures.ajaxUploading) {
                    // Workaround for bug in iOS7 (see #1039)
                    if (qq.ios7() && self._isAllowedExtension(allowedExtensions, ".mov")) {
                        return false;
                    }

                    if (spec.multiple === undefined) {
                        return self._options.multiple;
                    }

                    return spec.multiple;
                }

                return false;
            }

            var button = new qq.UploadButton({
                element: spec.element,
                folders: spec.folders,
                name: this._options.request.inputName,
                multiple: allowMultiple(),
                acceptFiles: acceptFiles,
                onChange: function(input) {
                    self._onInputChange(input);
                },
                hoverClass: this._options.classes.buttonHover,
                focusClass: this._options.classes.buttonFocus
            });

            this._disposeSupport.addDisposer(function() {
                button.dispose();
            });

            self._buttons.push(button);

            return button;
        },

        _createUploadHandler: function(additionalOptions, namespace) {
            var self = this,
                lastOnProgress = {},
                options = {
                    debug: this._options.debug,
                    maxConnections: this._options.maxConnections,
                    cors: this._options.cors,
                    demoMode: this._options.demoMode,
                    paramsStore: this._paramsStore,
                    endpointStore: this._endpointStore,
                    chunking: this._options.chunking,
                    resume: this._options.resume,
                    blobs: this._options.blobs,
                    log: qq.bind(self.log, self),
                    preventRetryParam: this._options.retry.preventRetryResponseProperty,
                    onProgress: function(id, name, loaded, total) {
                        if (lastOnProgress[id]) {
                            if (lastOnProgress[id].loaded !== loaded || lastOnProgress[id].total !== total) {
                                self._onProgress(id, name, loaded, total);
                                self._options.callbacks.onProgress(id, name, loaded, total);
                            }
                        }
                        else {
                            self._onProgress(id, name, loaded, total);
                            self._options.callbacks.onProgress(id, name, loaded, total);
                        }

                        lastOnProgress[id] = {loaded: loaded, total: total};

                    },
                    onComplete: function(id, name, result, xhr) {
                        delete lastOnProgress[id];

                        var status = self.getUploads({id: id}).status;

                        // This is to deal with some observed cases where the XHR readyStateChange handler is
                        // invoked by the browser multiple times for the same XHR instance with the same state
                        // readyState value.  Higher level: don't invoke complete-related code if we've already
                        // done this.
                        if (status === qq.status.UPLOAD_SUCCESSFUL || status === qq.status.UPLOAD_FAILED) {
                            return;
                        }

                        var retVal = self._onComplete(id, name, result, xhr);

                        // If the internal `_onComplete` handler returns a promise, don't invoke the `onComplete` callback
                        // until the promise has been fulfilled.
                        if (retVal instanceof  qq.Promise) {
                            retVal.done(function() {
                                self._options.callbacks.onComplete(id, name, result, xhr);
                            });
                        }
                        else {
                            self._options.callbacks.onComplete(id, name, result, xhr);
                        }
                    },
                    onCancel: function(id, name, cancelFinalizationEffort) {
                        var promise = new qq.Promise();

                        self._handleCheckedCallback({
                            name: "onCancel",
                            callback: qq.bind(self._options.callbacks.onCancel, self, id, name),
                            onFailure: promise.failure,
                            onSuccess: function() {
                                cancelFinalizationEffort.then(function() {
                                    self._onCancel(id, name);
                                });

                                promise.success();
                            },
                            identifier: id
                        });

                        return promise;
                    },
                    onUploadPrep: qq.bind(this._onUploadPrep, this),
                    onUpload: function(id, name) {
                        self._onUpload(id, name);
                        self._options.callbacks.onUpload(id, name);
                    },
                    onUploadChunk: function(id, name, chunkData) {
                        self._onUploadChunk(id, chunkData);
                        self._options.callbacks.onUploadChunk(id, name, chunkData);
                    },
                    onUploadChunkSuccess: function(id, chunkData, result, xhr) {
                        self._options.callbacks.onUploadChunkSuccess.apply(self, arguments);
                    },
                    onResume: function(id, name, chunkData) {
                        return self._options.callbacks.onResume(id, name, chunkData);
                    },
                    onAutoRetry: function(id, name, responseJSON, xhr) {
                        return self._onAutoRetry.apply(self, arguments);
                    },
                    onUuidChanged: function(id, newUuid) {
                        self.log("Server requested UUID change from '" + self.getUuid(id) + "' to '" + newUuid + "'");
                        self.setUuid(id, newUuid);
                    },
                    getName: qq.bind(self.getName, self),
                    getUuid: qq.bind(self.getUuid, self),
                    getSize: qq.bind(self.getSize, self),
                    setSize: qq.bind(self._setSize, self),
                    getDataByUuid: function(uuid) {
                        return self.getUploads({uuid: uuid});
                    },
                    isQueued: function(id) {
                        var status = self.getUploads({id: id}).status;
                        return status === qq.status.QUEUED ||
                            status === qq.status.SUBMITTED ||
                            status === qq.status.UPLOAD_RETRYING ||
                            status === qq.status.PAUSED;
                    },
                    getIdsInProxyGroup: self._uploadData.getIdsInProxyGroup,
                    getIdsInBatch: self._uploadData.getIdsInBatch
                };

            qq.each(this._options.request, function(prop, val) {
                options[prop] = val;
            });

            options.customHeaders = this._customHeadersStore;

            if (additionalOptions) {
                qq.each(additionalOptions, function(key, val) {
                    options[key] = val;
                });
            }

            return new qq.UploadHandlerController(options, namespace);
        },

        _fileOrBlobRejected: function(id) {
            this._netUploadedOrQueued--;
            this._uploadData.setStatus(id, qq.status.REJECTED);
        },

        _formatSize: function(bytes){
            var i = -1;
            do {
                bytes = bytes / 1000;
                i++;
            } while (bytes > 999);

            return Math.max(bytes, 0.1).toFixed(1) + this._options.text.sizeSymbols[i];
        },

        // Creates an internal object that tracks various properties of each extra button,
        // and then actually creates the extra button.
        _generateExtraButtonSpecs: function() {
            var self = this;

            this._extraButtonSpecs = {};

            qq.each(this._options.extraButtons, function(idx, extraButtonOptionEntry) {
                var multiple = extraButtonOptionEntry.multiple,
                    validation = qq.extend({}, self._options.validation, true),
                    extraButtonSpec = qq.extend({}, extraButtonOptionEntry);

                if (multiple === undefined) {
                    multiple = self._options.multiple;
                }

                if (extraButtonSpec.validation) {
                    qq.extend(validation, extraButtonOptionEntry.validation, true);
                }

                qq.extend(extraButtonSpec, {
                    multiple: multiple,
                    validation: validation
                }, true);

                self._initExtraButton(extraButtonSpec);
            });
        },

        _getButton: function(buttonId) {
            var extraButtonsSpec = this._extraButtonSpecs[buttonId];

            if (extraButtonsSpec) {
                return extraButtonsSpec.element;
            }
            else if (buttonId === this._defaultButtonId) {
                return this._options.button;
            }
        },

        /**
         * Gets the internally used tracking ID for a button.
         *
         * @param buttonOrFileInputOrFile `File`, `<input type="file">`, or a button container element
         * @returns {*} The button's ID, or undefined if no ID is recoverable
         * @private
         */
        _getButtonId: function(buttonOrFileInputOrFile) {
            var inputs, fileInput,
                fileBlobOrInput = buttonOrFileInputOrFile;

            // We want the reference file/blob here if this is a proxy (a file that will be generated on-demand later)
            if (fileBlobOrInput instanceof qq.BlobProxy) {
                fileBlobOrInput = fileBlobOrInput.referenceBlob;
            }

            // If the item is a `Blob` it will never be associated with a button or drop zone.
            if (fileBlobOrInput && !qq.isBlob(fileBlobOrInput)) {
                if (qq.isFile(fileBlobOrInput)) {
                    return fileBlobOrInput.qqButtonId;
                }
                else if (fileBlobOrInput.tagName.toLowerCase() === "input" &&
                    fileBlobOrInput.type.toLowerCase() === "file") {

                    return fileBlobOrInput.getAttribute(qq.UploadButton.BUTTON_ID_ATTR_NAME);
                }

                inputs = fileBlobOrInput.getElementsByTagName("input");

                qq.each(inputs, function(idx, input) {
                    if (input.getAttribute("type") === "file") {
                        fileInput = input;
                        return false;
                    }
                });

                if (fileInput) {
                    return fileInput.getAttribute(qq.UploadButton.BUTTON_ID_ATTR_NAME);
                }
            }
        },

        _getNotFinished: function() {
            return this._uploadData.retrieve({
                status: [
                    qq.status.UPLOADING,
                    qq.status.UPLOAD_RETRYING,
                    qq.status.QUEUED,
                    qq.status.SUBMITTING,
                    qq.status.SUBMITTED,
                    qq.status.PAUSED
                ]
            }).length;
        },

        // Get the validation options for this button.  Could be the default validation option
        // or a specific one assigned to this particular button.
        _getValidationBase: function(buttonId) {
            var extraButtonSpec = this._extraButtonSpecs[buttonId];

            return extraButtonSpec ? extraButtonSpec.validation : this._options.validation;
        },

        _getValidationDescriptor: function(fileWrapper) {
            if (fileWrapper.file instanceof qq.BlobProxy) {
                return {
                    name: qq.getFilename(fileWrapper.file.referenceBlob),
                    size: fileWrapper.file.referenceBlob.size
                };
            }

            return {
                name: this.getUploads({id: fileWrapper.id}).name,
                size: this.getUploads({id: fileWrapper.id}).size
            };
        },

        _getValidationDescriptors: function(fileWrappers) {
            var self = this,
                fileDescriptors = [];

            qq.each(fileWrappers, function(idx, fileWrapper) {
                fileDescriptors.push(self._getValidationDescriptor(fileWrapper));
            });

            return fileDescriptors;
        },

        // Allows camera access on either the default or an extra button for iOS devices.
        _handleCameraAccess: function() {
            if (this._options.camera.ios && qq.ios()) {
                var acceptIosCamera = "image/*;capture=camera",
                    button = this._options.camera.button,
                    buttonId = button ? this._getButtonId(button) : this._defaultButtonId,
                    optionRoot = this._options;

                // If we are not targeting the default button, it is an "extra" button
                if (buttonId && buttonId !== this._defaultButtonId) {
                    optionRoot = this._extraButtonSpecs[buttonId];
                }

                // Camera access won't work in iOS if the `multiple` attribute is present on the file input
                optionRoot.multiple = false;

                // update the options
                if (optionRoot.validation.acceptFiles === null) {
                    optionRoot.validation.acceptFiles = acceptIosCamera;
                }
                else {
                    optionRoot.validation.acceptFiles += "," + acceptIosCamera;
                }

                // update the already-created button
                qq.each(this._buttons, function(idx, button) {
                    if (button.getButtonId() === buttonId) {
                        button.setMultiple(optionRoot.multiple);
                        button.setAcceptFiles(optionRoot.acceptFiles);

                        return false;
                    }
                });
            }
        },

        _handleCheckedCallback: function(details) {
            var self = this,
                callbackRetVal = details.callback();

            if (qq.isGenericPromise(callbackRetVal)) {
                this.log(details.name + " - waiting for " + details.name + " promise to be fulfilled for " + details.identifier);
                return callbackRetVal.then(
                    function(successParam) {
                        self.log(details.name + " promise success for " + details.identifier);
                        details.onSuccess(successParam);
                    },
                    function() {
                        if (details.onFailure) {
                            self.log(details.name + " promise failure for " + details.identifier);
                            details.onFailure();
                        }
                        else {
                            self.log(details.name + " promise failure for " + details.identifier);
                        }
                    });
            }

            if (callbackRetVal !== false) {
                details.onSuccess(callbackRetVal);
            }
            else {
                if (details.onFailure) {
                    this.log(details.name + " - return value was 'false' for " + details.identifier + ".  Invoking failure callback.");
                    details.onFailure();
                }
                else {
                    this.log(details.name + " - return value was 'false' for " + details.identifier + ".  Will not proceed.");
                }
            }

            return callbackRetVal;
        },

        // Updates internal state when a new file has been received, and adds it along with its ID to a passed array.
        _handleNewFile: function(file, batchId, newFileWrapperList) {
            var self = this,
                uuid = qq.getUniqueId(),
                size = -1,
                name = qq.getFilename(file),
                actualFile = file.blob || file,
                handler = this._customNewFileHandler ?
                    this._customNewFileHandler :
                    qq.bind(self._handleNewFileGeneric, self);

            if (!qq.isInput(actualFile) && actualFile.size >= 0) {
                size = actualFile.size;
            }

            handler(actualFile, name, uuid, size, newFileWrapperList, batchId, this._options.request.uuidName, {
                uploadData: self._uploadData,
                paramsStore: self._paramsStore,
                addFileToHandler: function(id, file) {
                    self._handler.add(id, file);
                    self._netUploadedOrQueued++;
                    self._trackButton(id);
                }
            });
        },

        _handleNewFileGeneric: function(file, name, uuid, size, fileList, batchId) {
            var id = this._uploadData.addFile({uuid: uuid, name: name, size: size, batchId: batchId});

            this._handler.add(id, file);
            this._trackButton(id);

            this._netUploadedOrQueued++;

            fileList.push({id: id, file: file});
        },

        _handlePasteSuccess: function(blob, extSuppliedName) {
            var extension = blob.type.split("/")[1],
                name = extSuppliedName;

            /*jshint eqeqeq: true, eqnull: true*/
            if (name == null) {
                name = this._options.paste.defaultName;
            }

            name += "." + extension;

            this.addBlobs({
                name: name,
                blob: blob
            });
        },

        // Creates an extra button element
        _initExtraButton: function(spec) {
            var button = this._createUploadButton({
                element: spec.element,
                multiple: spec.multiple,
                accept: spec.validation.acceptFiles,
                folders: spec.folders,
                allowedExtensions: spec.validation.allowedExtensions
            });

            this._extraButtonSpecs[button.getButtonId()] = spec;
        },

        _initFormSupportAndParams: function() {
            this._formSupport = qq.FormSupport && new qq.FormSupport(
                this._options.form, qq.bind(this.uploadStoredFiles, this), qq.bind(this.log, this)
            );

            if (this._formSupport && this._formSupport.attachedToForm) {
                this._paramsStore = this._createStore(
                    this._options.request.params,  this._formSupport.getFormInputsAsObject
                );

                this._options.autoUpload = this._formSupport.newAutoUpload;
                if (this._formSupport.newEndpoint) {
                    this._options.request.endpoint = this._formSupport.newEndpoint;
                }
            }
            else {
                this._paramsStore = this._createStore(this._options.request.params);
            }
        },

        _isDeletePossible: function() {
            if (!qq.DeleteFileAjaxRequester || !this._options.deleteFile.enabled) {
                return false;
            }

            if (this._options.cors.expected) {
                if (qq.supportedFeatures.deleteFileCorsXhr) {
                    return true;
                }

                if (qq.supportedFeatures.deleteFileCorsXdr && this._options.cors.allowXdr) {
                    return true;
                }

                return false;
            }

            return true;
        },

        _isAllowedExtension: function(allowed, fileName) {
            var valid = false;

            if (!allowed.length) {
                return true;
            }

            qq.each(allowed, function(idx, allowedExt) {
                /**
                 * If an argument is not a string, ignore it.  Added when a possible issue with MooTools hijacking the
                 * `allowedExtensions` array was discovered.  See case #735 in the issue tracker for more details.
                 */
                if (qq.isString(allowedExt)) {
                    /*jshint eqeqeq: true, eqnull: true*/
                    var extRegex = new RegExp("\\." + allowedExt + "$", "i");

                    if (fileName.match(extRegex) != null) {
                        valid = true;
                        return false;
                    }
                }
            });

            return valid;
        },

        /**
         * Constructs and returns a message that describes an item/file error.  Also calls `onError` callback.
         *
         * @param code REQUIRED - a code that corresponds to a stock message describing this type of error
         * @param maybeNameOrNames names of the items that have failed, if applicable
         * @param item `File`, `Blob`, or `<input type="file">`
         * @private
         */
        _itemError: function(code, maybeNameOrNames, item) {
            var message = this._options.messages[code],
                allowedExtensions = [],
                names = [].concat(maybeNameOrNames),
                name = names[0],
                buttonId = this._getButtonId(item),
                validationBase = this._getValidationBase(buttonId),
                extensionsForMessage, placeholderMatch;

            function r(name, replacement){ message = message.replace(name, replacement); }

            qq.each(validationBase.allowedExtensions, function(idx, allowedExtension) {
                /**
                 * If an argument is not a string, ignore it.  Added when a possible issue with MooTools hijacking the
                 * `allowedExtensions` array was discovered.  See case #735 in the issue tracker for more details.
                 */
                if (qq.isString(allowedExtension)) {
                    allowedExtensions.push(allowedExtension);
                }
            });

            extensionsForMessage = allowedExtensions.join(", ").toLowerCase();

            r("{file}", this._options.formatFileName(name));
            r("{extensions}", extensionsForMessage);
            r("{sizeLimit}", this._formatSize(validationBase.sizeLimit));
            r("{minSizeLimit}", this._formatSize(validationBase.minSizeLimit));

            placeholderMatch = message.match(/(\{\w+\})/g);
            if (placeholderMatch !== null) {
                qq.each(placeholderMatch, function(idx, placeholder) {
                    r(placeholder, names[idx]);
                });
            }

            this._options.callbacks.onError(null, name, message, undefined);

            return message;
        },

        /**
         * Conditionally orders a manual retry of a failed upload.
         *
         * @param id File ID of the failed upload
         * @param callback Optional callback to invoke if a retry is prudent.
         * In lieu of asking the upload handler to retry.
         * @returns {boolean} true if a manual retry will occur
         * @private
         */
        _manualRetry: function(id, callback) {
            if (this._onBeforeManualRetry(id)) {
                this._netUploadedOrQueued++;
                this._uploadData.setStatus(id, qq.status.UPLOAD_RETRYING);

                if (callback) {
                    callback(id);
                }
                else {
                    this._handler.retry(id);
                }

                return true;
            }
        },

        _maybeAllComplete: function(id, status) {
            var self = this,
                notFinished = this._getNotFinished();

            if (status === qq.status.UPLOAD_SUCCESSFUL) {
                this._succeededSinceLastAllComplete.push(id);
            }
            else if (status === qq.status.UPLOAD_FAILED) {
                this._failedSinceLastAllComplete.push(id);
            }

            if (notFinished === 0 &&
                (this._succeededSinceLastAllComplete.length || this._failedSinceLastAllComplete.length)) {
                // Attempt to ensure onAllComplete is not invoked before other callbacks, such as onCancel & onComplete
                setTimeout(function() {
                    self._onAllComplete(self._succeededSinceLastAllComplete, self._failedSinceLastAllComplete);
                }, 0);
            }
        },

        _maybeParseAndSendUploadError: function(id, name, response, xhr) {
            // Assuming no one will actually set the response code to something other than 200
            // and still set 'success' to true...
            if (!response.success){
                if (xhr && xhr.status !== 200 && !response.error) {
                    this._options.callbacks.onError(id, name, "XHR returned response code " + xhr.status, xhr);
                }
                else {
                    var errorReason = response.error ? response.error : this._options.text.defaultResponseError;
                    this._options.callbacks.onError(id, name, errorReason, xhr);
                }
            }
        },

        _maybeProcessNextItemAfterOnValidateCallback: function(validItem, items, index, params, endpoint) {
            var self = this;

            if (items.length > index) {
                if (validItem || !this._options.validation.stopOnFirstInvalidFile) {
                    //use setTimeout to prevent a stack overflow with a large number of files in the batch & non-promissory callbacks
                    setTimeout(function() {
                        var validationDescriptor = self._getValidationDescriptor(items[index]);

                        self._handleCheckedCallback({
                            name: "onValidate",
                            callback: qq.bind(self._options.callbacks.onValidate, self, items[index].file),
                            onSuccess: qq.bind(self._onValidateCallbackSuccess, self, items, index, params, endpoint),
                            onFailure: qq.bind(self._onValidateCallbackFailure, self, items, index, params, endpoint),
                            identifier: "Item '" + validationDescriptor.name + "', size: " + validationDescriptor.size
                        });
                    }, 0);
                }
                else if (!validItem) {
                    for (; index < items.length; index++) {
                        self._fileOrBlobRejected(items[index].id);
                    }
                }
            }
        },

        _onAllComplete: function(successful, failed) {
            this._totalProgress && this._totalProgress.onAllComplete(successful, failed, this._preventRetries);

            this._options.callbacks.onAllComplete(qq.extend([], successful), qq.extend([], failed));

            this._succeededSinceLastAllComplete = [];
            this._failedSinceLastAllComplete = [];
        },

        /**
         * Attempt to automatically retry a failed upload.
         *
         * @param id The file ID of the failed upload
         * @param name The name of the file associated with the failed upload
         * @param responseJSON Response from the server, parsed into a javascript object
         * @param xhr Ajax transport used to send the failed request
         * @param callback Optional callback to be invoked if a retry is prudent.
         * Invoked in lieu of asking the upload handler to retry.
         * @returns {boolean} true if an auto-retry will occur
         * @private
         */
        _onAutoRetry: function(id, name, responseJSON, xhr, callback) {
            var self = this;

            self._preventRetries[id] = responseJSON[self._options.retry.preventRetryResponseProperty];

            if (self._shouldAutoRetry(id, name, responseJSON)) {
                self._maybeParseAndSendUploadError.apply(self, arguments);
                self._options.callbacks.onAutoRetry(id, name, self._autoRetries[id]);
                self._onBeforeAutoRetry(id, name);

                self._retryTimeouts[id] = setTimeout(function() {
                    self.log("Retrying " + name + "...");
                    self._uploadData.setStatus(id, qq.status.UPLOAD_RETRYING);

                    if (callback) {
                        callback(id);
                    }
                    else {
                        self._handler.retry(id);
                    }
                }, self._options.retry.autoAttemptDelay * 1000);

                return true;
            }
        },

        _onBeforeAutoRetry: function(id, name) {
            this.log("Waiting " + this._options.retry.autoAttemptDelay + " seconds before retrying " + name + "...");
        },

        //return false if we should not attempt the requested retry
        _onBeforeManualRetry: function(id) {
            var itemLimit = this._options.validation.itemLimit;

            if (this._preventRetries[id]) {
                this.log("Retries are forbidden for id " + id, "warn");
                return false;
            }
            else if (this._handler.isValid(id)) {
                var fileName = this.getName(id);

                if (this._options.callbacks.onManualRetry(id, fileName) === false) {
                    return false;
                }

                if (itemLimit > 0 && this._netUploadedOrQueued+1 > itemLimit) {
                    this._itemError("retryFailTooManyItems");
                    return false;
                }

                this.log("Retrying upload for '" + fileName + "' (id: " + id + ")...");
                return true;
            }
            else {
                this.log("'" + id + "' is not a valid file ID", "error");
                return false;
            }
        },

        _onCancel: function(id, name) {
            this._netUploadedOrQueued--;

            clearTimeout(this._retryTimeouts[id]);

            var storedItemIndex = qq.indexOf(this._storedIds, id);
            if (!this._options.autoUpload && storedItemIndex >= 0) {
                this._storedIds.splice(storedItemIndex, 1);
            }

            this._uploadData.setStatus(id, qq.status.CANCELED);
        },

        _onComplete: function(id, name, result, xhr) {
            if (!result.success) {
                this._netUploadedOrQueued--;
                this._uploadData.setStatus(id, qq.status.UPLOAD_FAILED);

                if (result[this._options.retry.preventRetryResponseProperty] === true) {
                    this._preventRetries[id] = true;
                }
            }
            else {
                if (result.thumbnailUrl) {
                    this._thumbnailUrls[id] = result.thumbnailUrl;
                }

                this._netUploaded++;
                this._uploadData.setStatus(id, qq.status.UPLOAD_SUCCESSFUL);
            }

            this._maybeParseAndSendUploadError(id, name, result, xhr);

            return result.success ? true : false;
        },

        _onDelete: function(id) {
            this._uploadData.setStatus(id, qq.status.DELETING);
        },

        _onDeleteComplete: function(id, xhrOrXdr, isError) {
            var name = this.getName(id);

            if (isError) {
                this._uploadData.setStatus(id, qq.status.DELETE_FAILED);
                this.log("Delete request for '" + name + "' has failed.", "error");

                // For error reporing, we only have accesss to the response status if this is not
                // an `XDomainRequest`.
                if (xhrOrXdr.withCredentials === undefined) {
                    this._options.callbacks.onError(id, name, "Delete request failed", xhrOrXdr);
                }
                else {
                    this._options.callbacks.onError(id, name, "Delete request failed with response code " + xhrOrXdr.status, xhrOrXdr);
                }
            }
            else {
                this._netUploadedOrQueued--;
                this._netUploaded--;
                this._handler.expunge(id);
                this._uploadData.setStatus(id, qq.status.DELETED);
                this.log("Delete request for '" + name + "' has succeeded.");
            }
        },

        _onInputChange: function(input) {
            var fileIndex;

            if (qq.supportedFeatures.ajaxUploading) {
                for (fileIndex = 0; fileIndex < input.files.length; fileIndex++) {
                    this._annotateWithButtonId(input.files[fileIndex], input);
                }

                this.addFiles(input.files);
            }
            // Android 2.3.x will fire `onchange` even if no file has been selected
            else if (input.value.length > 0) {
                this.addFiles(input);
            }

            qq.each(this._buttons, function(idx, button) {
                button.reset();
            });
        },

        _onProgress: function(id, name, loaded, total) {
            this._totalProgress && this._totalProgress.onIndividualProgress(id, loaded, total);
        },

        _onSubmit: function(id, name) {
            //nothing to do yet in core uploader
        },

        _onSubmitCallbackSuccess: function(id, name) {
            this._onSubmit.apply(this, arguments);
            this._uploadData.setStatus(id, qq.status.SUBMITTED);
            this._onSubmitted.apply(this, arguments);
            this._options.callbacks.onSubmitted.apply(this, arguments);

            if (this._options.autoUpload) {
                this._uploadFile(id);
            }
            else {
                this._storeForLater(id);
            }
        },

        _onSubmitDelete: function(id, onSuccessCallback, additionalMandatedParams) {
            var uuid = this.getUuid(id),
                adjustedOnSuccessCallback;

            if (onSuccessCallback) {
                adjustedOnSuccessCallback = qq.bind(onSuccessCallback, this, id, uuid, additionalMandatedParams);
            }

            if (this._isDeletePossible()) {
                this._handleCheckedCallback({
                    name: "onSubmitDelete",
                    callback: qq.bind(this._options.callbacks.onSubmitDelete, this, id),
                    onSuccess: adjustedOnSuccessCallback ||
                        qq.bind(this._deleteHandler.sendDelete, this, id, uuid, additionalMandatedParams),
                    identifier: id
                });
                return true;
            }
            else {
                this.log("Delete request ignored for ID " + id + ", delete feature is disabled or request not possible " +
                    "due to CORS on a user agent that does not support pre-flighting.", "warn");
                return false;
            }
        },

        _onSubmitted: function(id) {
            //nothing to do in the base uploader
        },

        _onTotalProgress: function(loaded, total) {
            this._options.callbacks.onTotalProgress(loaded, total);
        },

        _onUploadPrep: function(id) {
            // nothing to do in the core uploader for now
        },

        _onUpload: function(id, name) {
            this._uploadData.setStatus(id, qq.status.UPLOADING);
        },

        _onUploadChunk: function(id, chunkData) {
            //nothing to do in the base uploader
        },

        _onUploadStatusChange: function(id, oldStatus, newStatus) {
            // Make sure a "queued" retry attempt is canceled if the upload has been paused
            if (newStatus === qq.status.PAUSED) {
                clearTimeout(this._retryTimeouts[id]);
            }
        },

        _onValidateBatchCallbackFailure: function(fileWrappers) {
            var self = this;

            qq.each(fileWrappers, function(idx, fileWrapper) {
                self._fileOrBlobRejected(fileWrapper.id);
            });
        },

        _onValidateBatchCallbackSuccess: function(validationDescriptors, items, params, endpoint, button) {
            var errorMessage,
                itemLimit = this._options.validation.itemLimit,
                proposedNetFilesUploadedOrQueued = this._netUploadedOrQueued;

            if (itemLimit === 0 || proposedNetFilesUploadedOrQueued <= itemLimit) {
                if (items.length > 0) {
                    this._handleCheckedCallback({
                        name: "onValidate",
                        callback: qq.bind(this._options.callbacks.onValidate, this, validationDescriptors[0], button),
                        onSuccess: qq.bind(this._onValidateCallbackSuccess, this, items, 0, params, endpoint),
                        onFailure: qq.bind(this._onValidateCallbackFailure, this, items, 0, params, endpoint),
                        identifier: "Item '" + items[0].file.name + "', size: " + items[0].file.size
                    });
                }
                else {
                    this._itemError("noFilesError");
                }
            }
            else {
                this._onValidateBatchCallbackFailure(items);
                errorMessage = this._options.messages.tooManyItemsError
                    .replace(/\{netItems\}/g, proposedNetFilesUploadedOrQueued)
                    .replace(/\{itemLimit\}/g, itemLimit);
                this._batchError(errorMessage);
            }
        },

        _onValidateCallbackFailure: function(items, index, params, endpoint) {
            var nextIndex = index+ 1;

            this._fileOrBlobRejected(items[0].id, items[0].file.name);

            this._maybeProcessNextItemAfterOnValidateCallback(false, items, nextIndex, params, endpoint);
        },

        _onValidateCallbackSuccess: function(items, index, params, endpoint) {
            var self = this,
                nextIndex = index+1,
                validationDescriptor = this._getValidationDescriptor(items[index]);

            this._validateFileOrBlobData(items[index], validationDescriptor)
                .then(
                function() {
                    self._upload(items[index].id, params, endpoint);
                    self._maybeProcessNextItemAfterOnValidateCallback(true, items, nextIndex, params, endpoint);
                },
                function() {
                    self._maybeProcessNextItemAfterOnValidateCallback(false, items, nextIndex, params, endpoint);
                }
            );
        },

        _prepareItemsForUpload: function(items, params, endpoint) {
            if (items.length === 0) {
                this._itemError("noFilesError");
                return;
            }

            var validationDescriptors = this._getValidationDescriptors(items),
                buttonId = this._getButtonId(items[0].file),
                button = this._getButton(buttonId);

            this._handleCheckedCallback({
                name: "onValidateBatch",
                callback: qq.bind(this._options.callbacks.onValidateBatch, this, validationDescriptors, button),
                onSuccess: qq.bind(this._onValidateBatchCallbackSuccess, this, validationDescriptors, items, params, endpoint, button),
                onFailure: qq.bind(this._onValidateBatchCallbackFailure, this, items),
                identifier: "batch validation"
            });
        },

        _preventLeaveInProgress: function(){
            var self = this;

            this._disposeSupport.attach(window, "beforeunload", function(e){
                if (self.getInProgress()) {
                    e = e || window.event;
                    // for ie, ff
                    e.returnValue = self._options.messages.onLeave;
                    // for webkit
                    return self._options.messages.onLeave;
                }
            });
        },

        // Attempts to refresh session data only if the `qq.Session` module exists
        // and a session endpoint has been specified.  The `onSessionRequestComplete`
        // callback will be invoked once the refresh is complete.
        _refreshSessionData: function() {
            var self = this,
                options = this._options.session;

            /* jshint eqnull:true */
            if (qq.Session && this._options.session.endpoint != null) {
                if (!this._session) {
                    qq.extend(options, this._options.cors);

                    options.log = qq.bind(this.log, this);
                    options.addFileRecord = qq.bind(this._addCannedFile, this);

                    this._session = new qq.Session(options);
                }

                setTimeout(function() {
                    self._session.refresh().then(function(response, xhrOrXdr) {

                        self._options.callbacks.onSessionRequestComplete(response, true, xhrOrXdr);

                    }, function(response, xhrOrXdr) {

                        self._options.callbacks.onSessionRequestComplete(response, false, xhrOrXdr);
                    });
                }, 0);
            }
        },

        _setSize: function(id, newSize) {
            this._uploadData.updateSize(id, newSize);
            this._totalProgress && this._totalProgress.onNewSize(id);
        },

        _shouldAutoRetry: function(id, name, responseJSON) {
            var uploadData = this._uploadData.retrieve({id: id});

            /*jshint laxbreak: true */
            if (!this._preventRetries[id]
                && this._options.retry.enableAuto
                && uploadData.status !== qq.status.PAUSED) {

                if (this._autoRetries[id] === undefined) {
                    this._autoRetries[id] = 0;
                }

                if (this._autoRetries[id] < this._options.retry.maxAutoAttempts) {
                    this._autoRetries[id] += 1;
                    return true;
                }
            }

            return false;
        },

        _storeForLater: function(id) {
            this._storedIds.push(id);
        },

        // Maps a file with the button that was used to select it.
        _trackButton: function(id) {
            var buttonId;

            if (qq.supportedFeatures.ajaxUploading) {
                buttonId = this._handler.getFile(id).qqButtonId;
            }
            else {
                buttonId = this._getButtonId(this._handler.getInput(id));
            }

            if (buttonId) {
                this._buttonIdsForFileIds[id] = buttonId;
            }
        },

        _upload: function(id, params, endpoint) {
            var name = this.getName(id);

            if (params) {
                this.setParams(params, id);
            }

            if (endpoint) {
                this.setEndpoint(endpoint, id);
            }

            this._handleCheckedCallback({
                name: "onSubmit",
                callback: qq.bind(this._options.callbacks.onSubmit, this, id, name),
                onSuccess: qq.bind(this._onSubmitCallbackSuccess, this, id, name),
                onFailure: qq.bind(this._fileOrBlobRejected, this, id, name),
                identifier: id
            });
        },

        _uploadFile: function(id) {
            if (!this._handler.upload(id)) {
                this._uploadData.setStatus(id, qq.status.QUEUED);
            }
        },

        /**
         * Performs some internal validation checks on an item, defined in the `validation` option.
         *
         * @param fileWrapper Wrapper containing a `file` along with an `id`
         * @param validationDescriptor Normalized information about the item (`size`, `name`).
         * @returns qq.Promise with appropriate callbacks invoked depending on the validity of the file
         * @private
         */
        _validateFileOrBlobData: function(fileWrapper, validationDescriptor) {
            var self = this,
                file = (function() {
                    if (fileWrapper.file instanceof qq.BlobProxy) {
                        return fileWrapper.file.referenceBlob;
                    }
                    return fileWrapper.file;
                }()),
                name = validationDescriptor.name,
                size = validationDescriptor.size,
                buttonId = this._getButtonId(fileWrapper.file),
                validationBase = this._getValidationBase(buttonId),
                validityChecker = new qq.Promise();

            validityChecker.then(
                function() {},
                function() {
                    self._fileOrBlobRejected(fileWrapper.id, name);
                });

            if (qq.isFileOrInput(file) && !this._isAllowedExtension(validationBase.allowedExtensions, name)) {
                this._itemError("typeError", name, file);
                return validityChecker.failure();
            }

            if (size === 0) {
                this._itemError("emptyError", name, file);
                return validityChecker.failure();
            }

            if (size > 0 && validationBase.sizeLimit && size > validationBase.sizeLimit) {
                this._itemError("sizeError", name, file);
                return validityChecker.failure();
            }

            if (size > 0 && size < validationBase.minSizeLimit) {
                this._itemError("minSizeError", name, file);
                return validityChecker.failure();
            }

            if (qq.ImageValidation && qq.supportedFeatures.imagePreviews && qq.isFile(file)) {
                new qq.ImageValidation(file, qq.bind(self.log, self)).validate(validationBase.image).then(
                    validityChecker.success,
                    function(errorCode) {
                        self._itemError(errorCode + "ImageError", name, file);
                        validityChecker.failure();
                    }
                );
            }
            else {
                validityChecker.success();
            }

            return validityChecker;
        },

        _wrapCallbacks: function() {
            var self, safeCallback;

            self = this;

            safeCallback = function(name, callback, args) {
                var errorMsg;

                try {
                    return callback.apply(self, args);
                }
                catch (exception) {
                    errorMsg = exception.message || exception.toString();
                    self.log("Caught exception in '" + name + "' callback - " + errorMsg, "error");
                }
            };

            /* jshint forin: false, loopfunc: true */
            for (var prop in this._options.callbacks) {
                (function() {
                    var callbackName, callbackFunc;
                    callbackName = prop;
                    callbackFunc = self._options.callbacks[callbackName];
                    self._options.callbacks[callbackName] = function() {
                        return safeCallback(callbackName, callbackFunc, arguments);
                    };
                }());
            }
        }
    };
}());

/*globals qq*/
(function(){
    "use strict";

    qq.FineUploaderBasic = function(o) {
        var self = this;

        // These options define FineUploaderBasic mode.
        this._options = {
            debug: false,
            button: null,
            multiple: true,
            maxConnections: 3,
            disableCancelForFormUploads: false,
            autoUpload: true,

            request: {
                endpoint: "/server/upload",
                params: {},
                paramsInBody: true,
                customHeaders: {},
                forceMultipart: true,
                inputName: "qqfile",
                uuidName: "qquuid",
                totalFileSizeName: "qqtotalfilesize",
                filenameParam: "qqfilename"
            },

            validation: {
                allowedExtensions: [],
                sizeLimit: 0,
                minSizeLimit: 0,
                itemLimit: 0,
                stopOnFirstInvalidFile: true,
                acceptFiles: null,
                image: {
                    maxHeight: 0,
                    maxWidth: 0,
                    minHeight: 0,
                    minWidth: 0
                }
            },

            callbacks: {
                onSubmit: function(id, name){},
                onSubmitted: function(id, name){},
                onComplete: function(id, name, responseJSON, maybeXhr){},
                onAllComplete: function(successful, failed) {},
                onCancel: function(id, name){},
                onUpload: function(id, name){},
                onUploadChunk: function(id, name, chunkData){},
                onUploadChunkSuccess: function(id, chunkData, responseJSON, xhr){},
                onResume: function(id, fileName, chunkData){},
                onProgress: function(id, name, loaded, total){},
                onTotalProgress: function(loaded, total){},
                onError: function(id, name, reason, maybeXhrOrXdr) {},
                onAutoRetry: function(id, name, attemptNumber) {},
                onManualRetry: function(id, name) {},
                onValidateBatch: function(fileOrBlobData) {},
                onValidate: function(fileOrBlobData) {},
                onSubmitDelete: function(id) {},
                onDelete: function(id){},
                onDeleteComplete: function(id, xhrOrXdr, isError){},
                onPasteReceived: function(blob) {},
                onStatusChange: function(id, oldStatus, newStatus) {},
                onSessionRequestComplete: function(response, success, xhrOrXdr) {}
            },

            messages: {
                typeError: "{file} has an invalid extension. Valid extension(s): {extensions}.",
                sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
                minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
                emptyError: "{file} is empty, please select files again without it.",
                noFilesError: "No files to upload.",
                tooManyItemsError: "Too many items ({netItems}) would be uploaded.  Item limit is {itemLimit}.",
                maxHeightImageError: "Image is too tall.",
                maxWidthImageError: "Image is too wide.",
                minHeightImageError: "Image is not tall enough.",
                minWidthImageError: "Image is not wide enough.",
                retryFailTooManyItems: "Retry failed - you have reached your file limit.",
                onLeave: "The files are being uploaded, if you leave now the upload will be canceled."
            },

            retry: {
                enableAuto: false,
                maxAutoAttempts: 3,
                autoAttemptDelay: 5,
                preventRetryResponseProperty: "preventRetry"
            },

            classes: {
                buttonHover: "qq-upload-button-hover",
                buttonFocus: "qq-upload-button-focus"
            },

            chunking: {
                enabled: false,
                concurrent: {
                    enabled: false
                },
                paramNames: {
                    partIndex: "qqpartindex",
                    partByteOffset: "qqpartbyteoffset",
                    chunkSize: "qqchunksize",
                    totalFileSize: "qqtotalfilesize",
                    totalParts: "qqtotalparts"
                },
                partSize: 2000000,
                // only relevant for traditional endpoints, only required when concurrent.enabled === true
                success: {
                    endpoint: null
                }
            },

            resume: {
                enabled: false,
                recordsExpireIn: 7, //days
                paramNames: {
                    resuming: "qqresume"
                }
            },

            formatFileName: function(fileOrBlobName) {
                if (fileOrBlobName !== undefined && fileOrBlobName.length > 33) {
                    fileOrBlobName = fileOrBlobName.slice(0, 19) + "..." + fileOrBlobName.slice(-14);
                }
                return fileOrBlobName;
            },

            text: {
                defaultResponseError: "Upload failure reason unknown",
                sizeSymbols: ["kB", "MB", "GB", "TB", "PB", "EB"]
            },

            deleteFile : {
                enabled: false,
                method: "DELETE",
                endpoint: "/server/upload",
                customHeaders: {},
                params: {}
            },

            cors: {
                expected: false,
                sendCredentials: false,
                allowXdr: false
            },

            blobs: {
                defaultName: "misc_data"
            },

            paste: {
                targetElement: null,
                defaultName: "pasted_image"
            },

            camera: {
                ios: false,

                // if ios is true: button is null means target the default button, otherwise target the button specified
                button: null
            },

            // This refers to additional upload buttons to be handled by Fine Uploader.
            // Each element is an object, containing `element` as the only required
            // property.  The `element` must be a container that will ultimately
            // contain an invisible `<input type="file">` created by Fine Uploader.
            // Optional properties of each object include `multiple`, `validation`,
            // and `folders`.
            extraButtons: [],

            // Depends on the session module.  Used to query the server for an initial file list
            // during initialization and optionally after a `reset`.
            session: {
                endpoint: null,
                params: {},
                customHeaders: {},
                refreshOnReset: true
            },

            // Send parameters associated with an existing form along with the files
            form: {
                // Element ID, HTMLElement, or null
                element: "qq-form",

                // Overrides the base `autoUpload`, unless `element` is null.
                autoUpload: false,

                // true = upload files on form submission (and squelch submit event)
                interceptSubmit: true
            },

            // scale images client side, upload a new file for each scaled version
            scaling: {
                // send the original file as well
                sendOriginal: true,

                // fox orientation for scaled images
                orient: true,

                // If null, scaled image type will match reference image type.  This value will be referred to
                // for any size record that does not specific a type.
                defaultType: null,

                defaultQuality: 80,

                failureText: "Failed to scale",

                includeExif: false,

                // metadata about each requested scaled version
                sizes: []
            }
        };

        // Replace any default options with user defined ones
        qq.extend(this._options, o, true);

        this._buttons = [];
        this._extraButtonSpecs = {};
        this._buttonIdsForFileIds = [];

        this._wrapCallbacks();
        this._disposeSupport =  new qq.DisposeSupport();

        this._storedIds = [];
        this._autoRetries = [];
        this._retryTimeouts = [];
        this._preventRetries = [];
        this._thumbnailUrls = [];

        this._netUploadedOrQueued = 0;
        this._netUploaded = 0;
        this._uploadData = this._createUploadDataTracker();

        this._initFormSupportAndParams();

        this._customHeadersStore = this._createStore(this._options.request.customHeaders);
        this._deleteFileCustomHeadersStore = this._createStore(this._options.deleteFile.customHeaders);

        this._deleteFileParamsStore = this._createStore(this._options.deleteFile.params);

        this._endpointStore = this._createStore(this._options.request.endpoint);
        this._deleteFileEndpointStore = this._createStore(this._options.deleteFile.endpoint);

        this._handler = this._createUploadHandler();

        this._deleteHandler = qq.DeleteFileAjaxRequester && this._createDeleteHandler();

        if (this._options.button) {
            this._defaultButtonId = this._createUploadButton({element: this._options.button}).getButtonId();
        }

        this._generateExtraButtonSpecs();

        this._handleCameraAccess();

        if (this._options.paste.targetElement) {
            if (qq.PasteSupport) {
                this._pasteHandler = this._createPasteHandler();
            }
            else {
                this.log("Paste support module not found", "error");
            }
        }

        this._preventLeaveInProgress();

        this._imageGenerator = qq.ImageGenerator && new qq.ImageGenerator(qq.bind(this.log, this));
        this._refreshSessionData();

        this._succeededSinceLastAllComplete = [];
        this._failedSinceLastAllComplete = [];

        this._scaler = (qq.Scaler && new qq.Scaler(this._options.scaling, qq.bind(this.log, this))) || {};
        if (this._scaler.enabled) {
            this._customNewFileHandler = qq.bind(this._scaler.handleNewFile, this._scaler);
        }

        if (qq.TotalProgress && qq.supportedFeatures.progressBar) {
            this._totalProgress = new qq.TotalProgress(
                qq.bind(this._onTotalProgress, this),

                function(id) {
                    var entry = self._uploadData.retrieve({id: id});
                    return (entry && entry.size) || 0;
                }
            );
        }
    };

    // Define the private & public API methods.
    qq.FineUploaderBasic.prototype = qq.basePublicApi;
    qq.extend(qq.FineUploaderBasic.prototype, qq.basePrivateApi);
}());

/*globals qq, XDomainRequest*/
/** Generic class for sending non-upload ajax requests and handling the associated responses **/
qq.AjaxRequester = function (o) {
    "use strict";

    var log, shouldParamsBeInQueryString,
        queue = [],
        requestData = {},
        options = {
            acceptHeader: null,
            validMethods: ["POST"],
            method: "POST",
            contentType: "application/x-www-form-urlencoded",
            maxConnections: 3,
            customHeaders: {},
            endpointStore: {},
            paramsStore: {},
            mandatedParams: {},
            allowXRequestedWithAndCacheControl: true,
            successfulResponseCodes: {
                "DELETE": [200, 202, 204],
                "POST": [200, 204],
                "GET": [200]
            },
            cors: {
                expected: false,
                sendCredentials: false
            },
            log: function (str, level) {},
            onSend: function (id) {},
            onComplete: function (id, xhrOrXdr, isError) {},
            onProgress: null
        };

    qq.extend(options, o);
    log = options.log;

    if (qq.indexOf(options.validMethods, options.method) < 0) {
        throw new Error("'" + options.method + "' is not a supported method for this type of request!");
    }

    // [Simple methods](http://www.w3.org/TR/cors/#simple-method)
    // are defined by the W3C in the CORS spec as a list of methods that, in part,
    // make a CORS request eligible to be exempt from preflighting.
    function isSimpleMethod() {
        return qq.indexOf(["GET", "POST", "HEAD"], options.method) >= 0;
    }

    // [Simple headers](http://www.w3.org/TR/cors/#simple-header)
    // are defined by the W3C in the CORS spec as a list of headers that, in part,
    // make a CORS request eligible to be exempt from preflighting.
    function containsNonSimpleHeaders(headers) {
        var containsNonSimple = false;

        qq.each(containsNonSimple, function(idx, header) {
            if (qq.indexOf(["Accept", "Accept-Language", "Content-Language", "Content-Type"], header) < 0) {
                containsNonSimple = true;
                return false;
            }
        });

        return containsNonSimple;
    }

    function isXdr(xhr) {
        //The `withCredentials` test is a commonly accepted way to determine if XHR supports CORS.
        return options.cors.expected && xhr.withCredentials === undefined;
    }

    // Returns either a new `XMLHttpRequest` or `XDomainRequest` instance.
    function getCorsAjaxTransport() {
        var xhrOrXdr;

        if (window.XMLHttpRequest || window.ActiveXObject) {
            xhrOrXdr = qq.createXhrInstance();

            if (xhrOrXdr.withCredentials === undefined) {
                xhrOrXdr = new XDomainRequest();
            }
        }

        return xhrOrXdr;
    }

    // Returns either a new XHR/XDR instance, or an existing one for the associated `File` or `Blob`.
    function getXhrOrXdr(id, suppliedXhr) {
        var xhrOrXdr = requestData[id].xhr;

        if (!xhrOrXdr) {
            if (suppliedXhr) {
                xhrOrXdr = suppliedXhr;
            }
            else {
                if (options.cors.expected) {
                    xhrOrXdr = getCorsAjaxTransport();
                }
                else {
                    xhrOrXdr = qq.createXhrInstance();
                }
            }

            requestData[id].xhr = xhrOrXdr;
        }

        return xhrOrXdr;
    }

    // Removes element from queue, sends next request
    function dequeue(id) {
        var i = qq.indexOf(queue, id),
            max = options.maxConnections,
            nextId;

        delete requestData[id];
        queue.splice(i, 1);

        if (queue.length >= max && i < max) {
            nextId = queue[max - 1];
            sendRequest(nextId);
        }
    }

    function onComplete(id, xdrError) {
        var xhr = getXhrOrXdr(id),
            method = options.method,
            isError = xdrError === true;

        dequeue(id);

        if (isError) {
            log(method + " request for " + id + " has failed", "error");
        }
        else if (!isXdr(xhr) && !isResponseSuccessful(xhr.status)) {
            isError = true;
            log(method + " request for " + id + " has failed - response code " + xhr.status, "error");
        }

        options.onComplete(id, xhr, isError);
    }

    function getParams(id) {
        var onDemandParams = requestData[id].additionalParams,
            mandatedParams = options.mandatedParams,
            params;

        if (options.paramsStore.get) {
            params = options.paramsStore.get(id);
        }

        if (onDemandParams) {
            qq.each(onDemandParams, function (name, val) {
                params = params || {};
                params[name] = val;
            });
        }

        if (mandatedParams) {
            qq.each(mandatedParams, function (name, val) {
                params = params || {};
                params[name] = val;
            });
        }

        return params;
    }

    function sendRequest(id, opt_xhr) {
        var xhr = getXhrOrXdr(id, opt_xhr),
            method = options.method,
            params = getParams(id),
            payload = requestData[id].payload,
            url;

        options.onSend(id);

        url = createUrl(id, params);

        // XDR and XHR status detection APIs differ a bit.
        if (isXdr(xhr)) {
            xhr.onload = getXdrLoadHandler(id);
            xhr.onerror = getXdrErrorHandler(id);
        }
        else {
            xhr.onreadystatechange = getXhrReadyStateChangeHandler(id);
        }


        registerForUploadProgress(id);

        // The last parameter is assumed to be ignored if we are actually using `XDomainRequest`.
        xhr.open(method, url, true);

        // Instruct the transport to send cookies along with the CORS request,
        // unless we are using `XDomainRequest`, which is not capable of this.
        if (options.cors.expected && options.cors.sendCredentials && !isXdr(xhr)) {
            xhr.withCredentials = true;
        }

        setHeaders(id);

        log("Sending " + method + " request for " + id);

        if (payload) {
            xhr.send(payload);
        }
        else if (shouldParamsBeInQueryString || !params) {
            xhr.send();
        }
        else if (params && options.contentType && options.contentType.toLowerCase().indexOf("application/x-www-form-urlencoded") >= 0) {
            xhr.send(qq.obj2url(params, ""));
        }
        else if (params && options.contentType && options.contentType.toLowerCase().indexOf("application/json") >= 0) {
            xhr.send(JSON.stringify(params));
        }
        else {
            xhr.send(params);
        }

        return xhr;
    }

    function createUrl(id, params) {
        var endpoint = options.endpointStore.get(id),
            addToPath = requestData[id].addToPath;

        /*jshint -W116,-W041 */
        if (addToPath != undefined) {
            endpoint += "/" + addToPath;
        }

        if (shouldParamsBeInQueryString && params) {
            return qq.obj2url(params, endpoint);
        }
        else {
            return endpoint;
        }
    }

    // Invoked by the UA to indicate a number of possible states that describe
    // a live `XMLHttpRequest` transport.
    function getXhrReadyStateChangeHandler(id) {
        return function () {
            if (getXhrOrXdr(id).readyState === 4) {
                onComplete(id);
            }
        };
    }

    function registerForUploadProgress(id) {
        var onProgress = options.onProgress;

        if (onProgress) {
            getXhrOrXdr(id).upload.onprogress = function(e) {
                if (e.lengthComputable) {
                    onProgress(id, e.loaded, e.total);
                }
            };
        }
    }

    // This will be called by IE to indicate **success** for an associated
    // `XDomainRequest` transported request.
    function getXdrLoadHandler(id) {
        return function () {
            onComplete(id);
        };
    }

    // This will be called by IE to indicate **failure** for an associated
    // `XDomainRequest` transported request.
    function getXdrErrorHandler(id) {
        return function () {
            onComplete(id, true);
        };
    }

    function setHeaders(id) {
        var xhr = getXhrOrXdr(id),
            customHeaders = options.customHeaders,
            onDemandHeaders = requestData[id].additionalHeaders || {},
            method = options.method,
            allHeaders = {};

        // If XDomainRequest is being used, we can't set headers, so just ignore this block.
        if (!isXdr(xhr)) {
            options.acceptHeader && xhr.setRequestHeader("Accept", options.acceptHeader);

            // Only attempt to add X-Requested-With & Cache-Control if permitted
            if (options.allowXRequestedWithAndCacheControl) {
                // Do not add X-Requested-With & Cache-Control if this is a cross-origin request
                // OR the cross-origin request contains a non-simple method or header.
                // This is done to ensure a preflight is not triggered exclusively based on the
                // addition of these 2 non-simple headers.
                if (!options.cors.expected || (!isSimpleMethod() || containsNonSimpleHeaders(customHeaders))) {
                    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                    xhr.setRequestHeader("Cache-Control", "no-cache");
                }
            }

            if (options.contentType && (method === "POST" || method === "PUT")) {
                xhr.setRequestHeader("Content-Type", options.contentType);
            }

            qq.extend(allHeaders, qq.isFunction(customHeaders) ? customHeaders(id) : customHeaders);
            qq.extend(allHeaders, onDemandHeaders);

            qq.each(allHeaders, function (name, val) {
                xhr.setRequestHeader(name, val);
            });
        }
    }

    function isResponseSuccessful(responseCode) {
        return qq.indexOf(options.successfulResponseCodes[options.method], responseCode) >= 0;
    }

    function prepareToSend(id, opt_xhr, addToPath, additionalParams, additionalHeaders, payload) {
        requestData[id] = {
            addToPath: addToPath,
            additionalParams: additionalParams,
            additionalHeaders: additionalHeaders,
            payload: payload
        };

        var len = queue.push(id);

        // if too many active connections, wait...
        if (len <= options.maxConnections) {
            return sendRequest(id, opt_xhr);
        }
    }


    shouldParamsBeInQueryString = options.method === "GET" || options.method === "DELETE";

    qq.extend(this, {
        // Start the process of sending the request.  The ID refers to the file associated with the request.
        initTransport: function(id) {
            var path, params, headers, payload, cacheBuster;

            return {
                // Optionally specify the end of the endpoint path for the request.
                withPath: function(appendToPath) {
                    path = appendToPath;
                    return this;
                },

                // Optionally specify additional parameters to send along with the request.
                // These will be added to the query string for GET/DELETE requests or the payload
                // for POST/PUT requests.  The Content-Type of the request will be used to determine
                // how these parameters should be formatted as well.
                withParams: function(additionalParams) {
                    params = additionalParams;
                    return this;
                },

                // Optionally specify additional headers to send along with the request.
                withHeaders: function(additionalHeaders) {
                    headers = additionalHeaders;
                    return this;
                },

                // Optionally specify a payload/body for the request.
                withPayload: function(thePayload) {
                    payload = thePayload;
                    return this;
                },

                // Appends a cache buster (timestamp) to the request URL as a query parameter (only if GET or DELETE)
                withCacheBuster: function() {
                    cacheBuster = true;
                    return this;
                },

                // Send the constructed request.
                send: function(opt_xhr) {
                    if (cacheBuster && qq.indexOf(["GET", "DELETE"], options.method) >= 0) {
                        params.qqtimestamp = new Date().getTime();
                    }

                    return prepareToSend(id, opt_xhr, path, params, headers, payload);
                }
            };
        },

        canceled: function(id) {
            dequeue(id);
        }
    });
};

/* globals qq */
/**
 * Common upload handler functions.
 *
 * @constructor
 */
qq.UploadHandler = function(spec) {
    "use strict";

    var proxy = spec.proxy,
        fileState = {},
        onCancel = proxy.onCancel,
        getName = proxy.getName;


    qq.extend(this, {
        add: function(id, fileItem) {
            fileState[id] = fileItem;
            fileState[id].temp = {};
        },

        cancel: function(id) {
            var self = this,
                cancelFinalizationEffort = new qq.Promise(),
                onCancelRetVal = onCancel(id, getName(id), cancelFinalizationEffort);

            onCancelRetVal.then(function() {
                if (self.isValid(id)) {
                    fileState[id].canceled = true;
                    self.expunge(id);
                }
                cancelFinalizationEffort.success();
            });
        },

        expunge: function(id) {
            delete fileState[id];
        },

        getThirdPartyFileId: function(id) {
            return fileState[id].key;
        },

        isValid: function(id) {
            return fileState[id] !== undefined;
        },

        reset: function() {
            fileState = {};
        },

        _getFileState: function(id) {
            return fileState[id];
        },

        _setThirdPartyFileId: function(id, thirdPartyFileId) {
            fileState[id].key = thirdPartyFileId;
        },

        _wasCanceled: function(id) {
            return !!fileState[id].canceled;
        }
    });
};

/*globals qq*/
/**
 * Base upload handler module.  Controls more specific handlers.
 *
 * @param o Options.  Passed along to the specific handler submodule as well.
 * @param namespace [optional] Namespace for the specific handler.
 */
qq.UploadHandlerController = function(o, namespace) {
    "use strict";

    var controller = this,
        chunkingPossible = false,
        concurrentChunkingPossible = false,
        chunking, preventRetryResponse, log, handler,

    options = {
        paramsStore: {},
        maxConnections: 3, // maximum number of concurrent uploads
        chunking: {
            enabled: false,
            multiple: {
                enabled: false
            }
        },
        log: function(str, level) {},
        onProgress: function(id, fileName, loaded, total){},
        onComplete: function(id, fileName, response, xhr){},
        onCancel: function(id, fileName){},
        onUploadPrep: function(id){}, // Called if non-trivial operations will be performed before onUpload
        onUpload: function(id, fileName){},
        onUploadChunk: function(id, fileName, chunkData){},
        onUploadChunkSuccess: function(id, chunkData, response, xhr){},
        onAutoRetry: function(id, fileName, response, xhr){},
        onResume: function(id, fileName, chunkData){},
        onUuidChanged: function(id, newUuid){},
        getName: function(id) {},
        setSize: function(id, newSize) {},
        isQueued: function(id) {},
        getIdsInProxyGroup: function(id) {},
        getIdsInBatch: function(id) {}
    },


    chunked = {
        // Called when each chunk has uploaded successfully
        done: function(id, chunkIdx, response, xhr) {
            var chunkData = handler._getChunkData(id, chunkIdx);

            handler._getFileState(id).attemptingResume = false;

            delete handler._getFileState(id).temp.chunkProgress[chunkIdx];
            handler._getFileState(id).loaded += chunkData.size;

            options.onUploadChunkSuccess(id, handler._getChunkDataForCallback(chunkData), response, xhr);
        },

        // Called when all chunks have been successfully uploaded and we want to ask the handler to perform any
        // logic associated with closing out the file, such as combining the chunks.
        finalize: function(id) {
            var size = options.getSize(id),
                name = options.getName(id);

            log("All chunks have been uploaded for " + id + " - finalizing....");
            handler.finalizeChunks(id).then(
                function(response, xhr) {
                    log("Finalize successful for " + id);

                    var normaizedResponse = upload.normalizeResponse(response, true);

                    options.onProgress(id, name, size, size);
                    handler._maybeDeletePersistedChunkData(id);
                    upload.cleanup(id, normaizedResponse, xhr);
                },
                function(response, xhr) {
                    var normaizedResponse = upload.normalizeResponse(response, false);

                    log("Problem finalizing chunks for file ID " + id + " - " + normaizedResponse.error, "error");

                    if (normaizedResponse.reset) {
                        chunked.reset(id);
                    }

                    if (!options.onAutoRetry(id, name, normaizedResponse, xhr)) {
                        upload.cleanup(id, normaizedResponse, xhr);
                    }
                }
            );
        },

        hasMoreParts: function(id) {
            return !!handler._getFileState(id).chunking.remaining.length;
        },

        nextPart: function(id) {
            var nextIdx = handler._getFileState(id).chunking.remaining.shift();

            if (nextIdx >= handler._getTotalChunks(id)) {
                nextIdx = null;
            }

            return nextIdx;
        },

        reset: function(id) {
            log("Server or callback has ordered chunking effort to be restarted on next attempt for item ID " + id, "error");

            handler._maybeDeletePersistedChunkData(id);
            handler.reevaluateChunking(id);
            handler._getFileState(id).loaded = 0;
        },

        sendNext: function(id) {
            var size = options.getSize(id),
                name = options.getName(id),
                chunkIdx = chunked.nextPart(id),
                chunkData = handler._getChunkData(id, chunkIdx),
                resuming = handler._getFileState(id).attemptingResume,
                inProgressChunks = handler._getFileState(id).chunking.inProgress || [];

            if (handler._getFileState(id).loaded == null) {
                handler._getFileState(id).loaded = 0;
            }

            // Don't follow-through with the resume attempt if the integrator returns false from onResume
            if (resuming && options.onResume(id, name, chunkData) === false) {
                chunked.reset(id);
                chunkIdx = chunked.nextPart(id);
                chunkData = handler._getChunkData(id, chunkIdx);
                resuming = false;
            }

            // If all chunks have already uploaded successfully, we must be re-attempting the finalize step.
            if (chunkIdx == null && inProgressChunks.length === 0) {
                chunked.finalize(id);
            }

            // Send the next chunk
            else {
                log("Sending chunked upload request for item " + id + ": bytes " + (chunkData.start+1) + "-" + chunkData.end + " of " + size);
                options.onUploadChunk(id, name, handler._getChunkDataForCallback(chunkData));

                inProgressChunks.push(chunkIdx);
                handler._getFileState(id).chunking.inProgress = inProgressChunks;

                if (concurrentChunkingPossible) {
                    connectionManager.open(id, chunkIdx);
                }

                if (concurrentChunkingPossible && connectionManager.available() && handler._getFileState(id).chunking.remaining.length) {
                    chunked.sendNext(id);
                }

                handler.uploadChunk(id, chunkIdx, resuming).then(
                    // upload chunk success
                    function success(response, xhr) {
                        log("Chunked upload request succeeded for " + id + ", chunk " + chunkIdx);

                        handler.clearCachedChunk(id, chunkIdx);

                        var inProgressChunks = handler._getFileState(id).chunking.inProgress || [],
                            responseToReport = upload.normalizeResponse(response, true),
                            inProgressChunkIdx = qq.indexOf(inProgressChunks, chunkIdx);

                        log(qq.format("Chunk {} for file {} uploaded successfully.", chunkIdx, id));

                        chunked.done(id, chunkIdx, responseToReport, xhr);

                        if (inProgressChunkIdx >= 0) {
                            inProgressChunks.splice(inProgressChunkIdx, 1);
                        }

                        handler._maybePersistChunkedState(id);

                        if (!chunked.hasMoreParts(id) && inProgressChunks.length === 0) {
                            chunked.finalize(id);
                        }
                        else if (chunked.hasMoreParts(id)) {
                            chunked.sendNext(id);
                        }
                    },

                    // upload chunk failure
                    function failure(response, xhr) {
                        log("Chunked upload request failed for " + id + ", chunk " + chunkIdx);

                        handler.clearCachedChunk(id, chunkIdx);

                        var responseToReport = upload.normalizeResponse(response, false);

                        if (responseToReport.reset) {
                            chunked.reset(id);
                        }
                        else {
                            var inProgressIdx = qq.indexOf(handler._getFileState(id).chunking.inProgress, chunkIdx);
                            if (inProgressIdx >= 0) {
                                handler._getFileState(id).chunking.inProgress.splice(inProgressIdx, 1);
                                handler._getFileState(id).chunking.remaining.unshift(chunkIdx);
                            }
                        }

                        // We may have aborted all other in-progress chunks for this file due to a failure.
                        // If so, ignore the failures associated with those aborts.
                        if (!handler._getFileState(id).temp.ignoreFailure) {
                            // If this chunk has failed, we want to ignore all other failures of currently in-progress
                            // chunks since they will be explicitly aborted
                            if (concurrentChunkingPossible) {
                                handler._getFileState(id).temp.ignoreFailure = true;

                                qq.each(handler._getXhrs(id), function(ckid, ckXhr) {
                                    ckXhr.abort();
                                });

                                // We must indicate that all aborted chunks are no longer in progress
                                handler.moveInProgressToRemaining(id);

                                // Free up any connections used by these chunks, but don't allow any
                                // other files to take up the connections (until we have exhausted all auto-retries)
                                connectionManager.free(id, true);
                            }

                            if (!options.onAutoRetry(id, name, responseToReport, xhr)) {
                                // If one chunk fails, abort all of the others to avoid odd race conditions that occur
                                // if a chunk succeeds immediately after one fails before we have determined if the upload
                                // is a failure or not.
                                upload.cleanup(id, responseToReport, xhr);
                            }
                        }
                    }
                )
                    .done(function() {
                        handler.clearXhr(id, chunkIdx);
                    }) ;
            }
        }
    },

    connectionManager = {
        _open: [],
        _openChunks: {},
        _waiting: [],

        available: function() {
            var max = options.maxConnections,
                openChunkEntriesCount = 0,
                openChunksCount = 0;

            qq.each(connectionManager._openChunks, function(fileId, openChunkIndexes) {
                openChunkEntriesCount++;
                openChunksCount += openChunkIndexes.length;
            });

            return max - (connectionManager._open.length - openChunkEntriesCount + openChunksCount);
        },

        /**
         * Removes element from queue, starts upload of next
         */
        free: function(id, dontAllowNext) {
            var allowNext = !dontAllowNext,
                waitingIndex = qq.indexOf(connectionManager._waiting, id),
                connectionsIndex = qq.indexOf(connectionManager._open, id),
                nextId;

            delete connectionManager._openChunks[id];

            if (upload.getProxyOrBlob(id) instanceof qq.BlobProxy) {
                log("Generated blob upload has ended for " + id + ", disposing generated blob.");
                delete handler._getFileState(id).file;
            }

            // If this file was not consuming a connection, it was just waiting, so remove it from the waiting array
            if (waitingIndex >= 0) {
                connectionManager._waiting.splice(waitingIndex, 1);
            }
            // If this file was consuming a connection, allow the next file to be uploaded
            else if (allowNext && connectionsIndex >= 0) {
                connectionManager._open.splice(connectionsIndex, 1);

                nextId = connectionManager._waiting.shift();
                if (nextId >= 0) {
                    connectionManager._open.push(nextId);
                    upload.start(nextId);
                }
            }
        },

        getWaitingOrConnected: function() {
            var waitingOrConnected = [];

            qq.each(waitingOrConnected, connectionManager._open);
            return qq.each(waitingOrConnected, connectionManager._waiting);
        },

        isUsingConnection: function(id) {
            return qq.indexOf(connectionManager._open, id) >= 0;
        },

        open: function(id, chunkIdx) {
            if (chunkIdx == null) {
                connectionManager._waiting.push(id);
            }

            if (connectionManager.available()) {
                if (chunkIdx == null) {
                    connectionManager._waiting.pop();
                    connectionManager._open.push(id);
                }
                else {
                    (function() {
                        var openChunksEntry = connectionManager._openChunks[id] || [];
                        openChunksEntry.push(chunkIdx);
                        connectionManager._openChunks[id] = openChunksEntry;
                    }());
                }

                return true;
            }

            return false;
        },

        reset: function() {
            connectionManager._waiting = [];
            connectionManager._open = [];
        }
    },

    simple = {
        send: function(id, name) {
            handler._getFileState(id).loaded = 0;

            log("Sending simple upload request for " + id);
            handler.uploadFile(id).then(
                function(response, opt_xhr) {
                    log("Simple upload request succeeded for " + id);

                    var responseToReport = upload.normalizeResponse(response, true);

                    var size = options.getSize(id);

                    options.onProgress(id, name, size, size);
                    upload.maybeNewUuid(id, responseToReport);
                    upload.cleanup(id, responseToReport, opt_xhr);
                },

                function(response, opt_xhr) {
                    log("Simple upload request failed for " + id);

                    var responseToReport = upload.normalizeResponse(response, false);

                    if (!options.onAutoRetry(id, name, responseToReport, opt_xhr)) {
                        upload.cleanup(id, responseToReport, opt_xhr);
                    }
                }
            );
        }
    },


    upload = {
        cancel: function(id) {
            log("Cancelling " + id);
            options.paramsStore.remove(id);
            connectionManager.free(id);
        },

        cleanup: function(id, response, opt_xhr) {
            var name = options.getName(id);

            options.onComplete(id, name, response, opt_xhr);

            if (handler._getFileState(id)) {
                handler._clearXhrs && handler._clearXhrs(id);
            }

            connectionManager.free(id);
        },

        // Returns a qq.BlobProxy, or an actual File/Blob if no proxy is involved, or undefined
        // if none of these are available for the ID
        getProxyOrBlob: function(id) {
            return (handler.getProxy && handler.getProxy(id)) ||
                (handler.getFile && handler.getFile(id));
        },

        initHandler: function() {
            var handlerType = namespace ? qq[namespace] : qq.traditional,
                handlerModuleSubtype = qq.supportedFeatures.ajaxUploading ? "Xhr" : "Form";

            handler = new handlerType[handlerModuleSubtype + "UploadHandler"](
                options,
                {
                    getDataByUuid: options.getDataByUuid,
                    getName: options.getName,
                    getSize: options.getSize,
                    getUuid: options.getUuid,
                    log: log,
                    onCancel: options.onCancel,
                    onProgress: options.onProgress,
                    onUuidChanged: options.onUuidChanged
                }
            );

            if (handler._removeExpiredChunkingRecords) {
                handler._removeExpiredChunkingRecords();
            }
        },

        isDeferredEligibleForUpload: function(id) {
            return options.isQueued(id);
        },

        // For Blobs that are part of a group of generated images, along with a reference image,
        // this will ensure the blobs in the group are uploaded in the order they were triggered,
        // even if some async processing must be completed on one or more Blobs first.
        maybeDefer: function(id, blob) {
            // If we don't have a file/blob yet & no file/blob exists for this item, request it,
            // and then submit the upload to the specific handler once the blob is available.
            // ASSUMPTION: This condition will only ever be true if XHR uploading is supported.
            if (blob && !handler.getFile(id) && blob instanceof qq.BlobProxy) {

                // Blob creation may take some time, so the caller may want to update the
                // UI to indicate that an operation is in progress, even before the actual
                // upload begins and an onUpload callback is invoked.
                options.onUploadPrep(id);

                log("Attempting to generate a blob on-demand for " + id);
                blob.create().then(function(generatedBlob) {
                    log("Generated an on-demand blob for " + id);

                    // Update record associated with this file by providing the generated Blob
                    handler.updateBlob(id, generatedBlob);

                    // Propagate the size for this generated Blob
                    options.setSize(id, generatedBlob.size);

                    // Order handler to recalculate chunking possibility, if applicable
                    handler.reevaluateChunking(id);

                    upload.maybeSendDeferredFiles(id);
                },

                // Blob could not be generated.  Fail the upload & attempt to prevent retries.  Also bubble error message.
                function(errorMessage) {
                    var errorResponse = {};

                    if (errorMessage) {
                        errorResponse.error = errorMessage;
                    }

                    log(qq.format("Failed to generate blob for ID {}.  Error message: {}.", id, errorMessage), "error");

                    options.onComplete(id, options.getName(id), qq.extend(errorResponse, preventRetryResponse), null);
                    upload.maybeSendDeferredFiles(id);
                    connectionManager.free(id);
                });
            }
            else {
                return upload.maybeSendDeferredFiles(id);
            }

            return false;
        },

        // Upload any grouped blobs, in the proper order, that are ready to be uploaded
        maybeSendDeferredFiles: function(id) {
            var idsInGroup = options.getIdsInProxyGroup(id),
                uploadedThisId = false;

            if (idsInGroup && idsInGroup.length) {
                log("Maybe ready to upload proxy group file " + id);

                qq.each(idsInGroup, function(idx, idInGroup) {
                    if (upload.isDeferredEligibleForUpload(idInGroup) && !!handler.getFile(idInGroup)) {
                        uploadedThisId = idInGroup === id;
                        upload.now(idInGroup);
                    }
                    else if (upload.isDeferredEligibleForUpload(idInGroup)) {
                        return false;
                    }
                });
            }
            else {
                uploadedThisId = true;
                upload.now(id);
            }

            return uploadedThisId;
        },

        maybeNewUuid: function (id, response) {
            if (response.newUuid !== undefined) {
                options.onUuidChanged(id, response.newUuid);
            }
        },

        // The response coming from handler implementations may be in various formats.
        // Instead of hoping a promise nested 5 levels deep will always return an object
        // as its first param, let's just normalize the response here.
        normalizeResponse: function(originalResponse, successful) {
            var response = originalResponse;

            // The passed "response" param may not be a response at all.
            // It could be a string, detailing the error, for example.
            if (!qq.isObject(originalResponse)) {
                response = {};

                if (qq.isString(originalResponse) && !successful) {
                    response.error = originalResponse;
                }
            }

            response.success = successful;

            return response;
        },

        now: function(id) {
            var name = options.getName(id);

            if (!controller.isValid(id)) {
                throw new qq.Error(id + " is not a valid file ID to upload!");
            }

            options.onUpload(id, name);

            if (chunkingPossible && handler._shouldChunkThisFile(id)) {
                chunked.sendNext(id);
            }
            else {
                simple.send(id, name);
            }
        },

        start: function(id) {
            var blobToUpload = upload.getProxyOrBlob(id);

            if (blobToUpload) {
                return upload.maybeDefer(id, blobToUpload);
            }
            else {
                upload.now(id);
                return true;
            }
        }
    };

    qq.extend(this, {
        /**
         * Adds file or file input to the queue
         **/
        add: function(id, file) {
            handler.add.apply(this, arguments);
        },

        /**
         * Sends the file identified by id
         */
        upload: function(id) {
            if(connectionManager.open(id)) {
                return upload.start(id);
            }
            return false;
        },

        retry: function(id) {
            // On retry, if concurrent chunking has been enabled, we may have aborted all other in-progress chunks
            // for a file when encountering a failed chunk upload.  We then signaled the controller to ignore
            // all failures associated with these aborts.  We are now retrying, so we don't want to ignore
            // any more failures at this point.
            if (concurrentChunkingPossible) {
                handler._getFileState(id).temp.ignoreFailure = false;
            }
            
            // If we are attempting to retry a file that is already consuming a connection, this is likely an auto-retry.
            // Just go ahead and ask the handler to upload again.
            if (connectionManager.isUsingConnection(id)) {
                return upload.start(id);
            }

            // If we are attempting to retry a file that is not currently consuming a connection,
            // this is likely a manual retry attempt.  We will need to ensure a connection is available
            // before the retry commences.
            else {
                return controller.upload(id);
            }
        },

        /**
         * Cancels file upload by id
         */
        cancel: function(id) {
            var cancelRetVal = handler.cancel(id);

            if (qq.isGenericPromise(cancelRetVal)) {
                cancelRetVal.then(function() {
                    upload.cancel(id);
                });
            }
            else if (cancelRetVal !== false) {
                upload.cancel(id);
            }
        },

        /**
         * Cancels all queued or in-progress uploads
         */
        cancelAll: function() {
            var waitingOrConnected = connectionManager.getWaitingOrConnected();

            qq.each(waitingOrConnected, function(idx, fileId) {
                controller.cancel(fileId);
            });

            connectionManager.reset();
        },

        // Returns a File, Blob, or the Blob/File for the reference/parent file if the targeted blob is a proxy.
        // Undefined if no file record is available.
        getFile: function(id) {
            if (handler.getProxy && handler.getProxy(id)) {
                return handler.getProxy(id).referenceBlob;
            }

            return handler.getFile && handler.getFile(id);
        },

        // Returns true if the Blob associated with the ID is related to a proxy s
        isProxied: function(id) {
            return !!(handler.getProxy && handler.getProxy(id));
        },

        getInput: function(id) {
            if (handler.getInput) {
                return handler.getInput(id);
            }
        },

        reset: function() {
            log("Resetting upload handler");
            controller.cancelAll();
            connectionManager.reset();
            handler.reset();
        },

        expunge: function(id) {
            if (controller.isValid(id)) {
                return handler.expunge(id);
            }
        },

        /**
         * Determine if the file exists.
         */
        isValid: function(id) {
            return handler.isValid(id);
        },

        getResumableFilesData: function() {
            if (handler.getResumableFilesData) {
                return handler.getResumableFilesData();
            }
            return [];
        },

        /**
         * This may or may not be implemented, depending on the handler.  For handlers where a third-party ID is
         * available (such as the "key" for Amazon S3), this will return that value.  Otherwise, the return value
         * will be undefined.
         *
         * @param id Internal file ID
         * @returns {*} Some identifier used by a 3rd-party service involved in the upload process
         */
        getThirdPartyFileId: function(id) {
            if (controller.isValid(id)) {
                return handler.getThirdPartyFileId(id);
            }
        },

        /**
         * Attempts to pause the associated upload if the specific handler supports this and the file is "valid".
         * @param id ID of the upload/file to pause
         * @returns {boolean} true if the upload was paused
         */
        pause: function(id) {
            if (controller.isResumable(id) && handler.pause && controller.isValid(id) && handler.pause(id)) {
                connectionManager.free(id);
                handler.moveInProgressToRemaining(id);
                return true;
            }
            return false;
        },

        // True if the file is eligible for pause/resume.
        isResumable: function(id) {
            return !!handler.isResumable && handler.isResumable(id);
        }
    });

    qq.extend(options, o);
    log = options.log;
    chunkingPossible = options.chunking.enabled && qq.supportedFeatures.chunking;
    concurrentChunkingPossible = chunkingPossible && options.chunking.concurrent.enabled;

    preventRetryResponse = (function() {
        var response = {};

        response[options.preventRetryParam] = true;

        return response;
    }());

    upload.initHandler();
};

/* globals qq */
/**
 * Common APIs exposed to creators of upload via form/iframe handlers.  This is reused and possibly overridden
 * in some cases by specific form upload handlers.
 *
 * @constructor
 */
qq.FormUploadHandler = function(spec) {
    "use strict";

    var options = spec.options,
        handler = this,
        proxy = spec.proxy,
        formHandlerInstanceId = qq.getUniqueId(),
        onloadCallbacks = {},
        detachLoadEvents = {},
        postMessageCallbackTimers = {},
        isCors = options.isCors,
        inputName = options.inputName,
        getUuid = proxy.getUuid,
        log = proxy.log,
        corsMessageReceiver = new qq.WindowReceiveMessage({log: log});


    /**
     * Remove any trace of the file from the handler.
     *
     * @param id ID of the associated file
     */
    function expungeFile(id) {
        delete detachLoadEvents[id];

        // If we are dealing with CORS, we might still be waiting for a response from a loaded iframe.
        // In that case, terminate the timer waiting for a message from the loaded iframe
        // and stop listening for any more messages coming from this iframe.
        if (isCors) {
            clearTimeout(postMessageCallbackTimers[id]);
            delete postMessageCallbackTimers[id];
            corsMessageReceiver.stopReceivingMessages(id);
        }

        var iframe = document.getElementById(handler._getIframeName(id));
        if (iframe) {
            // To cancel request set src to something else.  We use src="javascript:false;"
            // because it doesn't trigger ie6 prompt on https
            /* jshint scripturl:true */
            iframe.setAttribute("src", "javascript:false;");

            qq(iframe).remove();
        }
    }

    /**
     * @param iframeName `document`-unique Name of the associated iframe
     * @returns {*} ID of the associated file
     */
    function getFileIdForIframeName(iframeName) {
        return iframeName.split("_")[0];
    }

    /**
     * Generates an iframe to be used as a target for upload-related form submits.  This also adds the iframe
     * to the current `document`.  Note that the iframe is hidden from view.
     *
     * @param name Name of the iframe.
     * @returns {HTMLIFrameElement} The created iframe
     */
    function initIframeForUpload(name) {
        var iframe = qq.toElement("<iframe src='javascript:false;' name='" + name + "' />");

        iframe.setAttribute("id", name);

        iframe.style.display = "none";
        document.body.appendChild(iframe);

        return iframe;
    }

    /**
     * If we are in CORS mode, we must listen for messages (containing the server response) from the associated
     * iframe, since we cannot directly parse the content of the iframe due to cross-origin restrictions.
     *
     * @param iframe Listen for messages on this iframe.
     * @param callback Invoke this callback with the message from the iframe.
     */
    function registerPostMessageCallback(iframe, callback) {
        var iframeName = iframe.id,
            fileId = getFileIdForIframeName(iframeName),
            uuid = getUuid(fileId);

        onloadCallbacks[uuid] = callback;

        // When the iframe has loaded (after the server responds to an upload request)
        // declare the attempt a failure if we don't receive a valid message shortly after the response comes in.
        detachLoadEvents[fileId] = qq(iframe).attach("load", function() {
            if (handler.getInput(fileId)) {
                log("Received iframe load event for CORS upload request (iframe name " + iframeName + ")");

                postMessageCallbackTimers[iframeName] = setTimeout(function() {
                    var errorMessage = "No valid message received from loaded iframe for iframe name " + iframeName;
                    log(errorMessage, "error");
                    callback({
                        error: errorMessage
                    });
                }, 1000);
            }
        });

        // Listen for messages coming from this iframe.  When a message has been received, cancel the timer
        // that declares the upload a failure if a message is not received within a reasonable amount of time.
        corsMessageReceiver.receiveMessage(iframeName, function(message) {
            log("Received the following window message: '" + message + "'");
            var fileId = getFileIdForIframeName(iframeName),
                response = handler._parseJsonResponse(fileId, message),
                uuid = response.uuid,
                onloadCallback;

            if (uuid && onloadCallbacks[uuid]) {
                log("Handling response for iframe name " + iframeName);
                clearTimeout(postMessageCallbackTimers[iframeName]);
                delete postMessageCallbackTimers[iframeName];

                handler._detachLoadEvent(iframeName);

                onloadCallback = onloadCallbacks[uuid];

                delete onloadCallbacks[uuid];
                corsMessageReceiver.stopReceivingMessages(iframeName);
                onloadCallback(response);
            }
            else if (!uuid) {
                log("'" + message + "' does not contain a UUID - ignoring.");
            }
        });
    }

    qq.extend(this, new qq.UploadHandler(spec));

    qq.override(this, function(super_) {
        return {
            /**
             * Adds File or Blob to the queue
             **/
            add: function(id, fileInput) {
                super_.add(id, {input: fileInput});

                fileInput.setAttribute("name", inputName);

                // remove file input from DOM
                if (fileInput.parentNode){
                    qq(fileInput).remove();
                }
            },

            expunge: function(id) {
                expungeFile(id);
                super_.expunge(id);
            },

            isValid: function(id) {
                return super_.isValid(id) &&
                    handler._getFileState(id).input !== undefined;
            }
        };
    });

    qq.extend(this, {
        /**
         * This function either delegates to a more specific message handler if CORS is involved,
         * or simply registers a callback when the iframe has been loaded that invokes the passed callback
         * after determining if the content of the iframe is accessible.
         *
         * @param iframe Associated iframe
         * @param callback Callback to invoke after we have determined if the iframe content is accessible.
         */
        _attachLoadEvent: function(iframe, callback) {
            /*jslint eqeq: true*/
            var responseDescriptor;

            if (isCors) {
                registerPostMessageCallback(iframe, callback);
            }
            else {
                detachLoadEvents[iframe.id] = qq(iframe).attach("load", function(){
                    log("Received response for " + iframe.id);

                    // when we remove iframe from dom
                    // the request stops, but in IE load
                    // event fires
                    if (!iframe.parentNode){
                        return;
                    }

                    try {
                        // fixing Opera 10.53
                        if (iframe.contentDocument &&
                            iframe.contentDocument.body &&
                            iframe.contentDocument.body.innerHTML == "false"){
                            // In Opera event is fired second time
                            // when body.innerHTML changed from false
                            // to server response approx. after 1 sec
                            // when we upload file with iframe
                            return;
                        }
                    }
                    catch (error) {
                        //IE may throw an "access is denied" error when attempting to access contentDocument on the iframe in some cases
                        log("Error when attempting to access iframe during handling of upload response (" + error.message + ")", "error");
                        responseDescriptor = {success: false};
                    }

                    callback(responseDescriptor);
                });
            }
        },

        /**
         * Creates an iframe with a specific document-unique name.
         *
         * @param id ID of the associated file
         * @returns {HTMLIFrameElement}
         */
        _createIframe: function(id) {
            var iframeName = handler._getIframeName(id);

            return initIframeForUpload(iframeName);
        },

        /**
         * Called when we are no longer interested in being notified when an iframe has loaded.
         *
         * @param id Associated file ID
         */
        _detachLoadEvent: function(id) {
            if (detachLoadEvents[id] !== undefined) {
                detachLoadEvents[id]();
                delete detachLoadEvents[id];
            }
        },

        /**
         * @param fileId ID of the associated file
         * @returns {string} The `document`-unique name of the iframe
         */
        _getIframeName: function(fileId) {
            return fileId + "_" + formHandlerInstanceId;
        },

        getInput: function(id) {
            return handler._getFileState(id).input;
        },

        /**
         * Generates a form element and appends it to the `document`.  When the form is submitted, a specific iframe is targeted.
         * The name of the iframe is passed in as a property of the spec parameter, and must be unique in the `document`.  Note
         * that the form is hidden from view.
         *
         * @param spec An object containing various properties to be used when constructing the form.  Required properties are
         * currently: `method`, `endpoint`, `params`, `paramsInBody`, and `targetName`.
         * @returns {HTMLFormElement} The created form
         */
        _initFormForUpload: function(spec) {
            var method = spec.method,
                endpoint = spec.endpoint,
                params = spec.params,
                paramsInBody = spec.paramsInBody,
                targetName = spec.targetName,
                form = qq.toElement("<form method='" + method + "' enctype='multipart/form-data'></form>"),
                url = endpoint;

            if (paramsInBody) {
                qq.obj2Inputs(params, form);
            }
            else {
                url = qq.obj2url(params, endpoint);
            }

            form.setAttribute("action", url);
            form.setAttribute("target", targetName);
            form.style.display = "none";
            document.body.appendChild(form);

            return form;
        }
    });
};

/* globals qq */
/**
 * Common API exposed to creators of XHR handlers.  This is reused and possibly overriding in some cases by specific
 * XHR upload handlers.
 *
 * @constructor
 */
qq.XhrUploadHandler = function(spec) {
    "use strict";

    var handler = this,
        namespace = spec.options.namespace,
        proxy = spec.proxy,
        chunking = spec.options.chunking,
        resume = spec.options.resume,
        chunkFiles = chunking && spec.options.chunking.enabled && qq.supportedFeatures.chunking,
        resumeEnabled = resume && spec.options.resume.enabled && chunkFiles && qq.supportedFeatures.resume,
        getName = proxy.getName,
        getSize = proxy.getSize,
        getUuid = proxy.getUuid,
        getEndpoint = proxy.getEndpoint,
        getDataByUuid = proxy.getDataByUuid,
        onUuidChanged = proxy.onUuidChanged,
        onProgress = proxy.onProgress,
        log = proxy.log;


    function abort(id) {
        qq.each(handler._getXhrs(id), function(xhrId, xhr) {
            var ajaxRequester = handler._getAjaxRequester(id, xhrId);

            xhr.onreadystatechange = null;
            xhr.upload.onprogress = null;
            xhr.abort();
            ajaxRequester && ajaxRequester.canceled && ajaxRequester.canceled(id);
        });
    }

    qq.extend(this, new qq.UploadHandler(spec));

    qq.override(this, function(super_) {
        return {
            /**
             * Adds File or Blob to the queue
             **/
            add: function(id, blobOrProxy) {
                if (qq.isFile(blobOrProxy) || qq.isBlob(blobOrProxy)) {
                    super_.add(id, {file: blobOrProxy});
                }
                else if (blobOrProxy instanceof qq.BlobProxy) {
                    super_.add(id, {proxy: blobOrProxy});
                }
                else {
                    throw new Error("Passed obj is not a File, Blob, or proxy");
                }

                handler._initTempState(id);
                resumeEnabled && handler._maybePrepareForResume(id);
            },

            expunge: function(id) {
                abort(id);
                handler._maybeDeletePersistedChunkData(id);
                handler._clearXhrs(id);
                super_.expunge(id);
            }
        };
    });

    qq.extend(this, {
        // Clear the cached chunk `Blob` after we are done with it, just in case the `Blob` bytes are stored in memory.
        clearCachedChunk: function(id, chunkIdx) {
            delete handler._getFileState(id).temp.cachedChunks[chunkIdx];
        },

        clearXhr: function(id, chunkIdx) {
            var tempState = handler._getFileState(id).temp;

            if (tempState.xhrs) {
                delete tempState.xhrs[chunkIdx];
            }
            if (tempState.ajaxRequesters) {
                delete tempState.ajaxRequesters[chunkIdx];
            }
        },

        // Called when all chunks have been successfully uploaded.  Expected promissory return type.
        // This defines the default behavior if nothing further is required when all chunks have been uploaded.
        finalizeChunks: function(id, responseParser) {
            var lastChunkIdx = handler._getTotalChunks(id) - 1,
                xhr = handler._getXhr(id, lastChunkIdx);

            if (responseParser) {
                return new qq.Promise().success(responseParser(xhr), xhr);
            }

            return new qq.Promise().success({}, xhr);
        },

        getFile: function(id) {
            return handler.isValid(id) && handler._getFileState(id).file;
        },

        getProxy: function(id) {
            return handler.isValid(id) && handler._getFileState(id).proxy;
        },

        /**
         * @returns {Array} Array of objects containing properties useful to integrators
         * when it is important to determine which files are potentially resumable.
         */
        getResumableFilesData: function() {
            var resumableFilesData = [];

            handler._iterateResumeRecords(function(key, uploadData) {
                handler.moveInProgressToRemaining(null, uploadData.chunking.inProgress,  uploadData.chunking.remaining);

                var data = {
                    name: uploadData.name,
                    remaining: uploadData.chunking.remaining,
                    size: uploadData.size,
                    uuid: uploadData.uuid
                };

                if (uploadData.key) {
                    data.key = uploadData.key;
                }

                resumableFilesData.push(data);
            });

            return resumableFilesData;
        },

        isResumable: function(id) {
            return !!chunking && handler.isValid(id) && !handler._getFileState(id).notResumable;
        },

        moveInProgressToRemaining: function(id, opt_inProgress, opt_remaining) {
            var inProgress = opt_inProgress || handler._getFileState(id).chunking.inProgress,
                remaining = opt_remaining || handler._getFileState(id).chunking.remaining;

            if (inProgress) {
                inProgress.reverse();
                qq.each(inProgress, function(idx, chunkIdx) {
                    remaining.unshift(chunkIdx);
                });
                inProgress.length = 0;
            }
        },

        pause: function(id) {
            if(handler.isValid(id)) {
                log(qq.format("Aborting XHR upload for {} '{}' due to pause instruction.", id, getName(id)));
                handler._getFileState(id).paused = true;
                abort(id);
                return true;
            }
        },

        reevaluateChunking: function(id) {
            if (chunking && handler.isValid(id)) {
                var state = handler._getFileState(id),
                    totalChunks;

                delete state.chunking;

                state.chunking = {};
                totalChunks = handler._getTotalChunks(id);
                if (totalChunks > 1) {
                    state.chunking.enabled = true;
                    state.chunking.parts = totalChunks;
                    state.chunking.remaining = [];

                    for (var i = 0; i < totalChunks; i++) {
                        state.chunking.remaining.push(i);
                    }

                    handler._initTempState(id);
                }
                else {
                    state.chunking.enabled = false;
                }
            }
        },

        updateBlob: function(id, newBlob) {
            if (handler.isValid(id)) {
                handler._getFileState(id).file = newBlob;
            }
        },

        _clearXhrs: function(id) {
            var tempState = handler._getFileState(id).temp;

            qq.each(tempState.ajaxRequesters, function(chunkId) {
                delete tempState.ajaxRequesters[chunkId];
            });

            qq.each(tempState.xhrs, function(chunkId) {
                delete tempState.xhrs[chunkId];
            });
        },

        /**
         * Creates an XHR instance for this file and stores it in the fileState.
         *
         * @param id File ID
         * @param opt_chunkIdx The chunk index associated with this XHR, if applicable
         * @returns {XMLHttpRequest}
         */
        _createXhr: function(id, opt_chunkIdx) {
            return handler._registerXhr(id, opt_chunkIdx, qq.createXhrInstance());
        },

        _getAjaxRequester: function(id, opt_chunkIdx) {
            var chunkIdx = opt_chunkIdx == null ? -1 : opt_chunkIdx;
            return handler._getFileState(id).temp.ajaxRequesters[chunkIdx];
        },

        _getChunkData: function(id, chunkIndex) {
            var chunkSize = chunking.partSize,
                fileSize = getSize(id),
                fileOrBlob = handler.getFile(id),
                startBytes = chunkSize * chunkIndex,
                endBytes = startBytes+chunkSize >= fileSize ? fileSize : startBytes+chunkSize,
                totalChunks = handler._getTotalChunks(id),
                cachedChunks = this._getFileState(id).temp.cachedChunks,

                // To work around a Webkit GC bug, we must keep each chunk `Blob` in scope until we are done with it.
                // See https://github.com/Widen/fine-uploader/issues/937#issuecomment-41418760
                blob = cachedChunks[chunkIndex] || qq.sliceBlob(fileOrBlob, startBytes, endBytes);

            cachedChunks[chunkIndex] = blob;

            return {
                part: chunkIndex,
                start: startBytes,
                end: endBytes,
                count: totalChunks,
                blob: blob,
                size: endBytes - startBytes
            };
        },

        _getChunkDataForCallback: function(chunkData) {
            return {
                partIndex: chunkData.part,
                startByte: chunkData.start + 1,
                endByte: chunkData.end,
                totalParts: chunkData.count
            };
        },

        /**
         * @param id File ID
         * @returns {string} Identifier for this item that may appear in the browser's local storage
         */
        _getLocalStorageId: function(id) {
            var formatVersion = "5.0",
                name = getName(id),
                size = getSize(id),
                chunkSize = chunking.partSize,
                endpoint = getEndpoint(id);

            return qq.format("qq{}resume{}-{}-{}-{}-{}", namespace, formatVersion, name, size, chunkSize, endpoint);
        },

        _getMimeType: function(id) {
            return handler.getFile(id).type;
        },

        _getPersistableData: function(id) {
            return handler._getFileState(id).chunking;
        },

        /**
         * @param id ID of the associated file
         * @returns {number} Number of parts this file can be divided into, or undefined if chunking is not supported in this UA
         */
        _getTotalChunks: function(id) {
            if (chunking) {
                var fileSize = getSize(id),
                    chunkSize = chunking.partSize;

                return Math.ceil(fileSize / chunkSize);
            }
        },

        _getXhr: function(id, opt_chunkIdx) {
            var chunkIdx = opt_chunkIdx == null ? -1 : opt_chunkIdx;
            return handler._getFileState(id).temp.xhrs[chunkIdx];
        },

        _getXhrs: function(id) {
            return handler._getFileState(id).temp.xhrs;
        },

        // Iterates through all XHR handler-created resume records (in local storage),
        // invoking the passed callback and passing in the key and value of each local storage record.
        _iterateResumeRecords: function(callback) {
            if (resumeEnabled) {
                qq.each(localStorage, function(key, item) {
                    if (key.indexOf(qq.format("qq{}resume-", namespace)) === 0) {
                        var uploadData = JSON.parse(item);
                        callback(key, uploadData);
                    }
                });
            }
        },

        _initTempState: function(id) {
            handler._getFileState(id).temp = {
                ajaxRequesters: {},
                chunkProgress: {},
                xhrs: {},
                cachedChunks: {}
            };
        },

        _markNotResumable: function(id) {
            handler._getFileState(id).notResumable = true;
        },

        // Removes a chunked upload record from local storage, if possible.
        // Returns true if the item was removed, false otherwise.
        _maybeDeletePersistedChunkData: function(id) {
            var localStorageId;

            if (resumeEnabled && handler.isResumable(id)) {
                localStorageId = handler._getLocalStorageId(id);

                if (localStorageId && localStorage.getItem(localStorageId)) {
                    localStorage.removeItem(localStorageId);
                    return true;
                }
            }

            return false;
        },

        // If this is a resumable upload, grab the relevant data from storage and items in memory that track this upload
        // so we can pick up from where we left off.
        _maybePrepareForResume: function(id) {
            var state = handler._getFileState(id),
                localStorageId, persistedData;

            // Resume is enabled and possible and this is the first time we've tried to upload this file in this session,
            // so prepare for a resume attempt.
            if (resumeEnabled && state.key === undefined) {
                localStorageId = handler._getLocalStorageId(id);
                persistedData = localStorage.getItem(localStorageId);

                // If we found this item in local storage, maybe we should resume it.
                if (persistedData) {
                    persistedData = JSON.parse(persistedData);

                    // If we found a resume record but we have already handled this file in this session,
                    // don't try to resume it & ensure we don't persist future check data
                    if (getDataByUuid(persistedData.uuid)) {
                        handler._markNotResumable(id);
                    }
                    else {
                        log(qq.format("Identified file with ID {} and name of {} as resumable.", id, getName(id)));

                        onUuidChanged(id, persistedData.uuid);

                        state.key = persistedData.key;
                        state.chunking = persistedData.chunking;
                        state.loaded = persistedData.loaded;
                        state.attemptingResume = true;

                        handler.moveInProgressToRemaining(id);
                    }
                }
            }
        },

        // Persist any data needed to resume this upload in a new session.
        _maybePersistChunkedState: function(id) {
            var state = handler._getFileState(id),
                localStorageId, persistedData;

            // If local storage isn't supported by the browser, or if resume isn't enabled or possible, give up
            if (resumeEnabled && handler.isResumable(id)) {
                localStorageId = handler._getLocalStorageId(id);

                persistedData = {
                    name: getName(id),
                    size: getSize(id),
                    uuid: getUuid(id),
                    key: state.key,
                    chunking: state.chunking,
                    loaded: state.loaded,
                    lastUpdated: Date.now()
                };

                localStorage.setItem(localStorageId, JSON.stringify(persistedData));
            }
        },

        _registerProgressHandler: function(id, chunkIdx, chunkSize) {
            var xhr = handler._getXhr(id, chunkIdx),
                progressCalculator = {
                    simple: function(loaded, total) {
                        var fileSize = getSize(id);

                        if (loaded === total) {
                            onProgress(id, name, fileSize, fileSize);
                        }
                        else {
                            onProgress(id, name, (loaded >= fileSize ? fileSize-1 : loaded), fileSize);
                        }
                    },

                    chunked: function(loaded, total) {
                        var chunkProgress = handler._getFileState(id).temp.chunkProgress,
                            totalSuccessfullyLoadedForFile = handler._getFileState(id).loaded,
                            loadedForRequest = loaded,
                            totalForRequest = total,
                            totalFileSize = getSize(id),
                            estActualChunkLoaded = loadedForRequest - (totalForRequest - chunkSize),
                            totalLoadedForFile = totalSuccessfullyLoadedForFile;

                        chunkProgress[chunkIdx] = estActualChunkLoaded;

                        qq.each(chunkProgress, function(chunkIdx, chunkLoaded) {
                            totalLoadedForFile += chunkLoaded;
                        });

                        onProgress(id, name, totalLoadedForFile, totalFileSize);
                    }
                };

            xhr.upload.onprogress = function(e) {
                if (e.lengthComputable) {
                    /* jshint eqnull: true */
                    var type = chunkSize == null ? "simple" : "chunked";
                    progressCalculator[type](e.loaded, e.total);
                }
            };
        },

        /**
         * Registers an XHR transport instance created elsewhere.
         *
         * @param id ID of the associated file
         * @param opt_chunkIdx The chunk index associated with this XHR, if applicable
         * @param xhr XMLHttpRequest object instance
         * @param opt_ajaxRequester `qq.AjaxRequester` associated with this request, if applicable.
         * @returns {XMLHttpRequest}
         */
        _registerXhr: function(id, opt_chunkIdx, xhr, opt_ajaxRequester) {
            var xhrsId = opt_chunkIdx == null ? -1 : opt_chunkIdx,
                tempState = handler._getFileState(id).temp;

            tempState.xhrs = tempState.xhrs || {};
            tempState.ajaxRequesters = tempState.ajaxRequesters || {};

            tempState.xhrs[xhrsId] = xhr;

            if (opt_ajaxRequester) {
                tempState.ajaxRequesters[xhrsId] = opt_ajaxRequester;
            }

            return xhr;
        },

        // Deletes any local storage records that are "expired".
        _removeExpiredChunkingRecords: function() {
            var expirationDays = resume.recordsExpireIn;

            handler._iterateResumeRecords(function(key, uploadData) {
                var expirationDate = new Date(uploadData.lastUpdated);

                // transform updated date into expiration date
                expirationDate.setDate(expirationDate.getDate() + expirationDays);

                if (expirationDate.getTime() <= Date.now()) {
                    log("Removing expired resume record with key " + key);
                    localStorage.removeItem(key);
                }
            });
        },

        /**
         * Determine if the associated file should be chunked.
         *
         * @param id ID of the associated file
         * @returns {*} true if chunking is enabled, possible, and the file can be split into more than 1 part
         */
        _shouldChunkThisFile: function(id) {
            var state = handler._getFileState(id);

            if (!state.chunking) {
                handler.reevaluateChunking(id);
            }

            return state.chunking.enabled;
        }
    });
};

/*globals qq */
/*jshint -W117 */
qq.WindowReceiveMessage = function(o) {
    "use strict";

    var options = {
            log: function(message, level) {}
        },
        callbackWrapperDetachers = {};

    qq.extend(options, o);

    qq.extend(this, {
        receiveMessage : function(id, callback) {
            var onMessageCallbackWrapper = function(event) {
                    callback(event.data);
                };

            if (window.postMessage) {
                callbackWrapperDetachers[id] = qq(window).attach("message", onMessageCallbackWrapper);
            }
            else {
                log("iframe message passing not supported in this browser!", "error");
            }
        },

        stopReceivingMessages : function(id) {
            if (window.postMessage) {
                var detacher = callbackWrapperDetachers[id];
                if (detacher) {
                    detacher();
                }
            }
        }
    });
};

/*globals qq */
/**
 * Defines the public API for FineUploader mode.
 */
(function(){
    "use strict";

    qq.uiPublicApi = {
        clearStoredFiles: function() {
            this._parent.prototype.clearStoredFiles.apply(this, arguments);
            this._templating.clearFiles();
        },

        addExtraDropzone: function(element){
            this._dnd && this._dnd.setupExtraDropzone(element);
        },

        removeExtraDropzone: function(element){
            if (this._dnd) {
                return this._dnd.removeDropzone(element);
            }
        },

        getItemByFileId: function(id) {
            return this._templating.getFileContainer(id);
        },

        reset: function() {
            this._parent.prototype.reset.apply(this, arguments);
            this._templating.reset();

            if (!this._options.button && this._templating.getButton()) {
                this._defaultButtonId = this._createUploadButton({element: this._templating.getButton()}).getButtonId();
            }

            if (this._dnd) {
                this._dnd.dispose();
                this._dnd = this._setupDragAndDrop();
            }

            this._totalFilesInBatch = 0;
            this._filesInBatchAddedToUi = 0;

            this._setupClickAndEditEventHandlers();
        },

        setName: function(id, newName) {
            var formattedFilename = this._options.formatFileName(newName);

            this._parent.prototype.setName.apply(this, arguments);
            this._templating.updateFilename(id, formattedFilename);
        },

        pauseUpload: function(id) {
            var paused = this._parent.prototype.pauseUpload.apply(this, arguments);

            paused && this._templating.uploadPaused(id);
            return paused;
        },

        continueUpload: function(id) {
            var continued = this._parent.prototype.continueUpload.apply(this, arguments);

            continued && this._templating.uploadContinued(id);
            return continued;
        },

        getId: function(fileContainerOrChildEl) {
            return this._templating.getFileId(fileContainerOrChildEl);
        },

        getDropTarget: function(fileId) {
            var file = this.getFile(fileId);

            return file.qqDropTarget;
        }
    };




    /**
     * Defines the private (internal) API for FineUploader mode.
     */
    qq.uiPrivateApi = {
        _getButton: function(buttonId) {
            var button = this._parent.prototype._getButton.apply(this, arguments);

            if (!button) {
                if (buttonId === this._defaultButtonId) {
                    button = this._templating.getButton();
                }
            }

            return button;
        },

        _removeFileItem: function(fileId) {
            this._templating.removeFile(fileId);
        },

        _setupClickAndEditEventHandlers: function() {
            this._fileButtonsClickHandler = qq.FileButtonsClickHandler && this._bindFileButtonsClickEvent();

            // A better approach would be to check specifically for focusin event support by querying the DOM API,
            // but the DOMFocusIn event is not exposed as a property, so we have to resort to UA string sniffing.
            this._focusinEventSupported = !qq.firefox();

            if (this._isEditFilenameEnabled())
            {
                this._filenameClickHandler = this._bindFilenameClickEvent();
                this._filenameInputFocusInHandler = this._bindFilenameInputFocusInEvent();
                this._filenameInputFocusHandler = this._bindFilenameInputFocusEvent();
            }
        },

        _setupDragAndDrop: function() {
            var self = this,
                dropZoneElements = this._options.dragAndDrop.extraDropzones,
                templating = this._templating,
                defaultDropZone = templating.getDropZone();

            defaultDropZone && dropZoneElements.push(defaultDropZone);

            return new qq.DragAndDrop({
                dropZoneElements: dropZoneElements,
                allowMultipleItems: this._options.multiple,
                classes: {
                    dropActive: this._options.classes.dropActive
                },
                callbacks: {
                    processingDroppedFiles: function() {
                        templating.showDropProcessing();
                    },
                    processingDroppedFilesComplete: function(files, targetEl) {
                        templating.hideDropProcessing();

                        qq.each(files, function(idx, file) {
                            file.qqDropTarget = targetEl;
                        });

                        if (files.length) {
                            self.addFiles(files, null, null);
                        }
                    },
                    dropError: function(code, errorData) {
                        self._itemError(code, errorData);
                    },
                    dropLog: function(message, level) {
                        self.log(message, level);
                    }
                }
            });
        },

        _bindFileButtonsClickEvent: function() {
            var self = this;

            return new qq.FileButtonsClickHandler({
                templating: this._templating,

                log: function(message, lvl) {
                    self.log(message, lvl);
                },

                onDeleteFile: function(fileId) {
                    self.deleteFile(fileId);
                },

                onCancel: function(fileId) {
                    self.cancel(fileId);
                },

                onRetry: function(fileId) {
                    qq(self._templating.getFileContainer(fileId)).removeClass(self._classes.retryable);
                    self._templating.hideRetry(fileId);
                    self.retry(fileId);
                },

                onPause: function(fileId) {
                    self.pauseUpload(fileId);
                },

                onContinue: function(fileId) {
                    self.continueUpload(fileId);
                },

                onGetName: function(fileId) {
                    return self.getName(fileId);
                }
            });
        },

        _isEditFilenameEnabled: function() {
            /*jshint -W014 */
            return this._templating.isEditFilenamePossible()
                && !this._options.autoUpload
                && qq.FilenameClickHandler
                && qq.FilenameInputFocusHandler
                && qq.FilenameInputFocusHandler;
        },

        _filenameEditHandler: function() {
            var self = this,
                templating = this._templating;

            return {
                templating: templating,
                log: function(message, lvl) {
                    self.log(message, lvl);
                },
                onGetUploadStatus: function(fileId) {
                    return self.getUploads({id: fileId}).status;
                },
                onGetName: function(fileId) {
                    return self.getName(fileId);
                },
                onSetName: function(id, newName) {
                    self.setName(id, newName);
                },
                onEditingStatusChange: function(id, isEditing) {
                    var qqInput = qq(templating.getEditInput(id)),
                        qqFileContainer = qq(templating.getFileContainer(id));

                    if (isEditing) {
                        qqInput.addClass("qq-editing");
                        templating.hideFilename(id);
                        templating.hideEditIcon(id);
                    }
                    else {
                        qqInput.removeClass("qq-editing");
                        templating.showFilename(id);
                        templating.showEditIcon(id);
                    }

                    // Force IE8 and older to repaint
                    qqFileContainer.addClass("qq-temp").removeClass("qq-temp");
                }
            };
        },

        _onUploadStatusChange: function(id, oldStatus, newStatus) {
            this._parent.prototype._onUploadStatusChange.apply(this, arguments);

            if (this._isEditFilenameEnabled()) {
                // Status for a file exists before it has been added to the DOM, so we must be careful here.
                if (this._templating.getFileContainer(id) && newStatus !== qq.status.SUBMITTED) {
                    this._templating.markFilenameEditable(id);
                    this._templating.hideEditIcon(id);
                }
            }
        },

        _bindFilenameInputFocusInEvent: function() {
            var spec = qq.extend({}, this._filenameEditHandler());

            return new qq.FilenameInputFocusInHandler(spec);
        },

        _bindFilenameInputFocusEvent: function() {
            var spec = qq.extend({}, this._filenameEditHandler());

            return new qq.FilenameInputFocusHandler(spec);
        },

        _bindFilenameClickEvent: function() {
            var spec = qq.extend({}, this._filenameEditHandler());

            return new qq.FilenameClickHandler(spec);
        },

        _storeForLater: function(id) {
            this._parent.prototype._storeForLater.apply(this, arguments);
            this._templating.hideSpinner(id);
        },

        _onAllComplete: function(successful, failed) {
            this._parent.prototype._onAllComplete.apply(this, arguments);
            this._templating.resetTotalProgress();
        },

        _onSubmit: function(id, name) {
            var file = this.getFile(id);

            if (file && file.qqPath && this._options.dragAndDrop.reportDirectoryPaths) {
                this._paramsStore.addReadOnly(id, {
                    qqpath: file.qqPath
                });
            }

            this._parent.prototype._onSubmit.apply(this, arguments);
            this._addToList(id, name);
        },

        // The file item has been added to the DOM.
        _onSubmitted: function(id) {
            // If the edit filename feature is enabled, mark the filename element as "editable" and the associated edit icon
            if (this._isEditFilenameEnabled()) {
                this._templating.markFilenameEditable(id);
                this._templating.showEditIcon(id);

                // If the focusin event is not supported, we must add a focus handler to the newly create edit filename text input
                if (!this._focusinEventSupported) {
                    this._filenameInputFocusHandler.addHandler(this._templating.getEditInput(id));
                }
            }
        },

        // Update the progress bar & percentage as the file is uploaded
        _onProgress: function(id, name, loaded, total){
            this._parent.prototype._onProgress.apply(this, arguments);

            this._templating.updateProgress(id, loaded, total);

            if (Math.round(loaded / total * 100) === 100) {
                this._templating.hideCancel(id);
                this._templating.hidePause(id);
                this._templating.hideProgress(id);
                this._templating.setStatusText(id, this._options.text.waitingForResponse);

                // If ~last byte was sent, display total file size
                this._displayFileSize(id);
            }
            else {
                // If still uploading, display percentage - total size is actually the total request(s) size
                this._displayFileSize(id, loaded, total);
            }
        },

        _onTotalProgress: function(loaded, total) {
            this._parent.prototype._onTotalProgress.apply(this, arguments);
            this._templating.updateTotalProgress(loaded, total);
        },

        _onComplete: function(id, name, result, xhr) {
            var parentRetVal = this._parent.prototype._onComplete.apply(this, arguments),
                templating = this._templating,
                fileContainer = templating.getFileContainer(id),
                self = this;

            function completeUpload(result) {
                // If this file is not represented in the templating module, perhaps it was hidden intentionally.
                // If so, don't perform any UI-related tasks related to this file.
                if (!fileContainer) {
                    return;
                }

                templating.setStatusText(id);

                qq(fileContainer).removeClass(self._classes.retrying);
                templating.hideProgress(id);

                if (!self._options.disableCancelForFormUploads || qq.supportedFeatures.ajaxUploading) {
                    templating.hideCancel(id);
                }
                templating.hideSpinner(id);

                if (result.success) {
                    self._markFileAsSuccessful(id);
                }
                else {
                    qq(fileContainer).addClass(self._classes.fail);

                    if (templating.isRetryPossible() && !self._preventRetries[id]) {
                        qq(fileContainer).addClass(self._classes.retryable);
                        templating.showRetry(id);
                    }
                    self._controlFailureTextDisplay(id, result);
                }
            }

            // The parent may need to perform some async operation before we can accurately determine the status of the upload.
            if (parentRetVal instanceof qq.Promise) {
                parentRetVal.done(function(newResult) {
                    completeUpload(newResult);
                });

            }
            else {
                completeUpload(result);
            }

            return parentRetVal;
        },

        _markFileAsSuccessful: function(id) {
            var templating = this._templating;

            if (this._isDeletePossible()) {
                templating.showDeleteButton(id);
            }

            qq(templating.getFileContainer(id)).addClass(this._classes.success);

            this._maybeUpdateThumbnail(id);
        },

        _onUploadPrep: function(id) {
            this._parent.prototype._onUploadPrep.apply(this, arguments);
            this._templating.showSpinner(id);
        },

        _onUpload: function(id, name){
            var parentRetVal = this._parent.prototype._onUpload.apply(this, arguments);

            this._templating.showSpinner(id);

            return parentRetVal;
        },

        _onUploadChunk: function(id, chunkData) {
            this._parent.prototype._onUploadChunk.apply(this, arguments);

            // Only display the pause button if we have finished uploading at least one chunk
            // & this file can be resumed
            if (chunkData.partIndex > 0 && this._handler.isResumable(id)) {
                this._templating.allowPause(id);
            }
        },

        _onCancel: function(id, name) {
            this._parent.prototype._onCancel.apply(this, arguments);
            this._removeFileItem(id);

            if (this._getNotFinished() === 0) {
                this._templating.resetTotalProgress();
            }
        },

        _onBeforeAutoRetry: function(id) {
            var retryNumForDisplay, maxAuto, retryNote;

            this._parent.prototype._onBeforeAutoRetry.apply(this, arguments);

            this._showCancelLink(id);

            if (this._options.retry.showAutoRetryNote) {
                retryNumForDisplay = this._autoRetries[id];
                maxAuto = this._options.retry.maxAutoAttempts;

                retryNote = this._options.retry.autoRetryNote.replace(/\{retryNum\}/g, retryNumForDisplay);
                retryNote = retryNote.replace(/\{maxAuto\}/g, maxAuto);

                this._templating.setStatusText(id, retryNote);
                qq(this._templating.getFileContainer(id)).addClass(this._classes.retrying);
            }
        },

        //return false if we should not attempt the requested retry
        _onBeforeManualRetry: function(id) {
            if (this._parent.prototype._onBeforeManualRetry.apply(this, arguments)) {
                this._templating.resetProgress(id);
                qq(this._templating.getFileContainer(id)).removeClass(this._classes.fail);
                this._templating.setStatusText(id);
                this._templating.showSpinner(id);
                this._showCancelLink(id);
                return true;
            }
            else {
                qq(this._templating.getFileContainer(id)).addClass(this._classes.retryable);
                this._templating.showRetry(id);
                return false;
            }
        },

        _onSubmitDelete: function(id) {
            var onSuccessCallback = qq.bind(this._onSubmitDeleteSuccess, this);

            this._parent.prototype._onSubmitDelete.call(this, id, onSuccessCallback);
        },

        _onSubmitDeleteSuccess: function(id, uuid, additionalMandatedParams) {
            if (this._options.deleteFile.forceConfirm) {
                this._showDeleteConfirm.apply(this, arguments);
            }
            else {
                this._sendDeleteRequest.apply(this, arguments);
            }
        },

        _onDeleteComplete: function(id, xhr, isError) {
            this._parent.prototype._onDeleteComplete.apply(this, arguments);

            this._templating.hideSpinner(id);

            if (isError) {
                this._templating.setStatusText(id, this._options.deleteFile.deletingFailedText);
                this._templating.showDeleteButton(id);
            }
            else {
                this._removeFileItem(id);
            }
        },

        _sendDeleteRequest: function(id, uuid, additionalMandatedParams) {
            this._templating.hideDeleteButton(id);
            this._templating.showSpinner(id);
            this._templating.setStatusText(id, this._options.deleteFile.deletingStatusText);
            this._deleteHandler.sendDelete.apply(this, arguments);
        },

        _showDeleteConfirm: function(id, uuid, mandatedParams) {
            /*jshint -W004 */
            var fileName = this.getName(id),
                confirmMessage = this._options.deleteFile.confirmMessage.replace(/\{filename\}/g, fileName),
                uuid = this.getUuid(id),
                deleteRequestArgs = arguments,
                self = this,
                retVal;

            retVal = this._options.showConfirm(confirmMessage);

            if (qq.isGenericPromise(retVal)) {
                retVal.then(function () {
                    self._sendDeleteRequest.apply(self, deleteRequestArgs);
                });
            }
            else if (retVal !== false) {
                self._sendDeleteRequest.apply(self, deleteRequestArgs);
            }
        },

        _addToList: function(id, name, canned) {
            var prependData,
                prependIndex = 0,
                dontDisplay = this._handler.isProxied(id) && this._options.scaling.hideScaled;

            // If we don't want this file to appear in the UI, skip all of this UI-related logic.
            if (dontDisplay) {
                return;
            }

            if (this._options.display.prependFiles) {
                if (this._totalFilesInBatch > 1 && this._filesInBatchAddedToUi > 0) {
                    prependIndex = this._filesInBatchAddedToUi - 1;
                }

                prependData = {
                    index: prependIndex
                };
            }

            if (!canned) {
                if (this._options.disableCancelForFormUploads && !qq.supportedFeatures.ajaxUploading) {
                    this._templating.disableCancel();
                }

                if (!this._options.multiple) {
                    this._handler.cancelAll();
                    this._clearList();
                }
            }

            this._templating.addFile(id, this._options.formatFileName(name), prependData);

            if (canned) {
                this._thumbnailUrls[id] && this._templating.updateThumbnail(id, this._thumbnailUrls[id], true);
            }
            else {
                this._templating.generatePreview(id, this.getFile(id));
            }

            this._filesInBatchAddedToUi += 1;

            if (canned ||
                (this._options.display.fileSizeOnSubmit && qq.supportedFeatures.ajaxUploading)) {

                this._displayFileSize(id);
            }
        },

        _clearList: function(){
            this._templating.clearFiles();
            this.clearStoredFiles();
        },

        _displayFileSize: function(id, loadedSize, totalSize) {
            var size = this.getSize(id),
                sizeForDisplay = this._formatSize(size);

            if (size >= 0) {
                if (loadedSize !== undefined && totalSize !== undefined) {
                    sizeForDisplay = this._formatProgress(loadedSize, totalSize);
                }

                this._templating.updateSize(id, sizeForDisplay);
            }
        },

        _formatProgress: function (uploadedSize, totalSize) {
            var message = this._options.text.formatProgress;
            function r(name, replacement) { message = message.replace(name, replacement); }

            r("{percent}", Math.round(uploadedSize / totalSize * 100));
            r("{total_size}", this._formatSize(totalSize));
            return message;
        },

        _controlFailureTextDisplay: function(id, response) {
            var mode, maxChars, responseProperty, failureReason, shortFailureReason;

            mode = this._options.failedUploadTextDisplay.mode;
            maxChars = this._options.failedUploadTextDisplay.maxChars;
            responseProperty = this._options.failedUploadTextDisplay.responseProperty;

            if (mode === "custom") {
                failureReason = response[responseProperty];
                if (failureReason) {
                    if (failureReason.length > maxChars) {
                        shortFailureReason = failureReason.substring(0, maxChars) + "...";
                    }
                }
                else {
                    failureReason = this._options.text.failUpload;
                }

                this._templating.setStatusText(id, shortFailureReason || failureReason);

                if (this._options.failedUploadTextDisplay.enableTooltip) {
                    this._showTooltip(id, failureReason);
                }
            }
            else if (mode === "default") {
                this._templating.setStatusText(id, this._options.text.failUpload);
            }
            else if (mode !== "none") {
                this.log("failedUploadTextDisplay.mode value of '" + mode + "' is not valid", "warn");
            }
        },

        _showTooltip: function(id, text) {
            this._templating.getFileContainer(id).title = text;
        },

        _showCancelLink: function(id) {
            if (!this._options.disableCancelForFormUploads || qq.supportedFeatures.ajaxUploading) {
                this._templating.showCancel(id);
            }
        },

        _itemError: function(code, name, item) {
            var message = this._parent.prototype._itemError.apply(this, arguments);
            this._options.showMessage(message);
        },

        _batchError: function(message) {
            this._parent.prototype._batchError.apply(this, arguments);
            this._options.showMessage(message);
        },

        _setupPastePrompt: function() {
            var self = this;

            this._options.callbacks.onPasteReceived = function() {
                var message = self._options.paste.namePromptMessage,
                    defaultVal = self._options.paste.defaultName;

                return self._options.showPrompt(message, defaultVal);
            };
        },

        _fileOrBlobRejected: function(id, name) {
            this._totalFilesInBatch -= 1;
            this._parent.prototype._fileOrBlobRejected.apply(this, arguments);
        },

        _prepareItemsForUpload: function(items, params, endpoint) {
            this._totalFilesInBatch = items.length;
            this._filesInBatchAddedToUi = 0;
            this._parent.prototype._prepareItemsForUpload.apply(this, arguments);
        },

        _maybeUpdateThumbnail: function(fileId) {
            var thumbnailUrl = this._thumbnailUrls[fileId];

            this._templating.updateThumbnail(fileId, thumbnailUrl);
        },

        _addCannedFile: function(sessionData) {
            var id = this._parent.prototype._addCannedFile.apply(this, arguments);

            this._addToList(id, this.getName(id), true);
            this._templating.hideSpinner(id);
            this._templating.hideCancel(id);
            this._markFileAsSuccessful(id);

            return id;
        },

        _setSize: function(id, newSize) {
            this._parent.prototype._setSize.apply(this, arguments);

            this._templating.updateSize(id, this._formatSize(newSize));
        }
    };
}());

/*globals qq */
/**
 * This defines FineUploader mode, which is a default UI w/ drag & drop uploading.
 */
qq.FineUploader = function(o, namespace) {
    "use strict";

    // By default this should inherit instance data from FineUploaderBasic, but this can be overridden
    // if the (internal) caller defines a different parent.  The parent is also used by
    // the private and public API functions that need to delegate to a parent function.
    this._parent = namespace ? qq[namespace].FineUploaderBasic : qq.FineUploaderBasic;
    this._parent.apply(this, arguments);

    // Options provided by FineUploader mode
    qq.extend(this._options, {
        element: null,

        button: null,

        listElement: null,

        dragAndDrop: {
            extraDropzones: [],
            reportDirectoryPaths: false
        },

        text: {
            formatProgress: "{percent}% of {total_size}",
            failUpload: "Upload failed",
            waitingForResponse: "Processing...",
            paused: "Paused"
        },

        template: "qq-template",

        classes: {
            retrying: "qq-upload-retrying",
            retryable: "qq-upload-retryable",
            success: "qq-upload-success",
            fail: "qq-upload-fail",
            editable: "qq-editable",
            hide: "qq-hide",
            dropActive: "qq-upload-drop-area-active"
        },

        failedUploadTextDisplay: {
            mode: "default", //default, custom, or none
            maxChars: 50,
            responseProperty: "error",
            enableTooltip: true
        },

        messages: {
            tooManyFilesError: "You may only drop one file",
            unsupportedBrowser: "Unrecoverable error - this browser does not permit file uploading of any kind."
        },

        retry: {
            showAutoRetryNote: true,
            autoRetryNote: "Retrying {retryNum}/{maxAuto}..."
        },

        deleteFile: {
            forceConfirm: false,
            confirmMessage: "Are you sure you want to delete {filename}?",
            deletingStatusText: "Deleting...",
            deletingFailedText: "Delete failed"

        },

        display: {
            fileSizeOnSubmit: false,
            prependFiles: false
        },

        paste: {
            promptForName: false,
            namePromptMessage: "Please name this image"
        },

        thumbnails: {
            placeholders: {
                waitUntilResponse: false,
                notAvailablePath: null,
                waitingPath: null
            }
        },

        scaling: {
            hideScaled: false
        },

        showMessage: function(message){
            setTimeout(function() {
                window.alert(message);
            }, 0);
        },

        showConfirm: function(message) {
            return window.confirm(message);
        },

        showPrompt: function(message, defaultValue) {
            return window.prompt(message, defaultValue);
        }
    }, true);

    // Replace any default options with user defined ones
    qq.extend(this._options, o, true);

    this._templating = new qq.Templating({
        log: qq.bind(this.log, this),
        templateIdOrEl: this._options.template,
        containerEl: this._options.element,
        fileContainerEl: this._options.listElement,
        button: this._options.button,
        imageGenerator: this._imageGenerator,
        classes: {
            hide: this._options.classes.hide,
            editable: this._options.classes.editable
        },
        placeholders: {
            waitUntilUpdate: this._options.thumbnails.placeholders.waitUntilResponse,
            thumbnailNotAvailable: this._options.thumbnails.placeholders.notAvailablePath,
            waitingForThumbnail: this._options.thumbnails.placeholders.waitingPath
        },
        text: this._options.text
    });

    if (!qq.supportedFeatures.uploading || (this._options.cors.expected && !qq.supportedFeatures.uploadCors)) {
        this._templating.renderFailure(this._options.messages.unsupportedBrowser);
    }
    else {
        this._wrapCallbacks();

        this._templating.render();

        this._classes = this._options.classes;

        if (!this._options.button && this._templating.getButton()) {
            this._defaultButtonId = this._createUploadButton({element: this._templating.getButton()}).getButtonId();
        }

        this._setupClickAndEditEventHandlers();

        if (qq.DragAndDrop && qq.supportedFeatures.fileDrop) {
            this._dnd = this._setupDragAndDrop();
        }

        if (this._options.paste.targetElement && this._options.paste.promptForName) {
            if (qq.PasteSupport) {
                this._setupPastePrompt();
            }
            else {
                this.log("Paste support module not found.", "error");
            }
        }

        this._totalFilesInBatch = 0;
        this._filesInBatchAddedToUi = 0;
    }
};

// Inherit the base public & private API methods
qq.extend(qq.FineUploader.prototype, qq.basePublicApi);
qq.extend(qq.FineUploader.prototype, qq.basePrivateApi);

// Add the FineUploader/default UI public & private UI methods, which may override some base methods.
qq.extend(qq.FineUploader.prototype, qq.uiPublicApi);
qq.extend(qq.FineUploader.prototype, qq.uiPrivateApi);

/* globals qq */
/* jshint -W065 */
/**
 * Module responsible for rendering all Fine Uploader UI templates.  This module also asserts at least
 * a limited amount of control over the template elements after they are added to the DOM.
 * Wherever possible, this module asserts total control over template elements present in the DOM.
 *
 * @param spec Specification object used to control various templating behaviors
 * @constructor
 */
qq.Templating = function(spec) {
    "use strict";

    var FILE_ID_ATTR = "qq-file-id",
        FILE_CLASS_PREFIX = "qq-file-id-",
        THUMBNAIL_MAX_SIZE_ATTR = "qq-max-size",
        THUMBNAIL_SERVER_SCALE_ATTR = "qq-server-scale",
        // This variable is duplicated in the DnD module since it can function as a standalone as well
        HIDE_DROPZONE_ATTR = "qq-hide-dropzone",
        isCancelDisabled = false,
        thumbnailMaxSize = -1,
        options = {
            log: null,
            templateIdOrEl: "qq-template",
            containerEl: null,
            fileContainerEl: null,
            button: null,
            imageGenerator: null,
            classes: {
                hide: "qq-hide",
                editable: "qq-editable"
            },
            placeholders: {
                waitUntilUpdate: false,
                thumbnailNotAvailable: null,
                waitingForThumbnail: null
            },
            text: {
                paused: "Paused"
            }
        },
        selectorClasses = {
            button: "qq-upload-button-selector",
            drop: "qq-upload-drop-area-selector",
            list: "qq-upload-list-selector",
            progressBarContainer: "qq-progress-bar-container-selector",
            progressBar: "qq-progress-bar-selector",
            totalProgressBarContainer: "qq-total-progress-bar-container-selector",
            totalProgressBar: "qq-total-progress-bar-selector",
            file: "qq-upload-file-selector",
            spinner: "qq-upload-spinner-selector",
            size: "qq-upload-size-selector",
            cancel: "qq-upload-cancel-selector",
            pause: "qq-upload-pause-selector",
            continueButton: "qq-upload-continue-selector",
            deleteButton: "qq-upload-delete-selector",
            retry: "qq-upload-retry-selector",
            statusText: "qq-upload-status-text-selector",
            editFilenameInput: "qq-edit-filename-selector",
            editNameIcon: "qq-edit-filename-icon-selector",
            dropProcessing: "qq-drop-processing-selector",
            dropProcessingSpinner: "qq-drop-processing-spinner-selector",
            thumbnail: "qq-thumbnail-selector"
        },
        previewGeneration = {},
        cachedThumbnailNotAvailableImg = new qq.Promise(),
        cachedWaitingForThumbnailImg = new qq.Promise(),
        log,
        isEditElementsExist,
        isRetryElementExist,
        templateHtml,
        container,
        fileList,
        showThumbnails,
        serverScale;

    /**
     * Grabs the HTML from the script tag holding the template markup.  This function will also adjust
     * some internally-tracked state variables based on the contents of the template.
     * The template is filtered so that irrelevant elements (such as the drop zone if DnD is not supported)
     * are omitted from the DOM.  Useful errors will be thrown if the template cannot be parsed.
     *
     * @returns {{template: *, fileTemplate: *}} HTML for the top-level file items templates
     */
    function parseAndGetTemplate() {
        var scriptEl,
            scriptHtml,
            fileListNode,
            tempTemplateEl,
            fileListHtml,
            defaultButton,
            dropArea,
            thumbnail,
            dropProcessing;

        log("Parsing template");

        /*jshint -W116*/
        if (options.templateIdOrEl == null) {
            throw new Error("You MUST specify either a template element or ID!");
        }

        // Grab the contents of the script tag holding the template.
        if (qq.isString(options.templateIdOrEl)) {
            scriptEl = document.getElementById(options.templateIdOrEl);

            if (scriptEl === null) {
                throw new Error(qq.format("Cannot find template script at ID '{}'!", options.templateIdOrEl));
            }

            scriptHtml = scriptEl.innerHTML;
        }
        else {
            if (options.templateIdOrEl.innerHTML === undefined) {
                throw new Error("You have specified an invalid value for the template option!  " +
                    "It must be an ID or an Element.");
            }

            scriptHtml = options.templateIdOrEl.innerHTML;
        }

        scriptHtml = qq.trimStr(scriptHtml);
        tempTemplateEl = document.createElement("div");
        tempTemplateEl.appendChild(qq.toElement(scriptHtml));

        // Don't include the default template button in the DOM
        // if an alternate button container has been specified.
        if (options.button) {
            defaultButton = qq(tempTemplateEl).getByClass(selectorClasses.button)[0];
            if (defaultButton) {
                qq(defaultButton).remove();
            }
        }

        // Omit the drop processing element from the DOM if DnD is not supported by the UA,
        // or the drag and drop module is not found.
        // NOTE: We are consciously not removing the drop zone if the UA doesn't support DnD
        // to support layouts where the drop zone is also a container for visible elements,
        // such as the file list.
        if (!qq.DragAndDrop || !qq.supportedFeatures.fileDrop) {
            dropProcessing = qq(tempTemplateEl).getByClass(selectorClasses.dropProcessing)[0];
            if (dropProcessing) {
                qq(dropProcessing).remove();
            }

        }

        dropArea = qq(tempTemplateEl).getByClass(selectorClasses.drop)[0];

        // If DnD is not available then remove
        // it from the DOM as well.
        if (dropArea && !qq.DragAndDrop) {
            log("DnD module unavailable.", "info");
            qq(dropArea).remove();
        }

        // If there is a drop area defined in the template, and the current UA doesn't support DnD,
        // and the drop area is marked as "hide before enter", ensure it is hidden as the DnD module
        // will not do this (since we will not be loading the DnD module)
        if (dropArea && !qq.supportedFeatures.fileDrop &&
            qq(dropArea).hasAttribute(HIDE_DROPZONE_ATTR)) {

            qq(dropArea).css({
                display: "none"
            });
        }

        // Ensure the `showThumbnails` flag is only set if the thumbnail element
        // is present in the template AND the current UA is capable of generating client-side previews.
        thumbnail = qq(tempTemplateEl).getByClass(selectorClasses.thumbnail)[0];
        if (!showThumbnails) {
            thumbnail && qq(thumbnail).remove();
        }
        else if (thumbnail) {
            thumbnailMaxSize = parseInt(thumbnail.getAttribute(THUMBNAIL_MAX_SIZE_ATTR));
            // Only enforce max size if the attr value is non-zero
            thumbnailMaxSize = thumbnailMaxSize > 0 ? thumbnailMaxSize : null;

            serverScale = qq(thumbnail).hasAttribute(THUMBNAIL_SERVER_SCALE_ATTR);
        }
        showThumbnails = showThumbnails && thumbnail;

        isEditElementsExist = qq(tempTemplateEl).getByClass(selectorClasses.editFilenameInput).length > 0;
        isRetryElementExist = qq(tempTemplateEl).getByClass(selectorClasses.retry).length > 0;

        fileListNode = qq(tempTemplateEl).getByClass(selectorClasses.list)[0];
        /*jshint -W116*/
        if (fileListNode == null) {
            throw new Error("Could not find the file list container in the template!");
        }

        fileListHtml = fileListNode.innerHTML;
        fileListNode.innerHTML = "";

        log("Template parsing complete");

        return {
            template: qq.trimStr(tempTemplateEl.innerHTML),
            fileTemplate: qq.trimStr(fileListHtml)
        };
    }

    function getFile(id) {
        return qq(fileList).getByClass(FILE_CLASS_PREFIX + id)[0];
    }

    function getTemplateEl(context, cssClass) {
        return context && qq(context).getByClass(cssClass)[0];
    }

    function prependFile(el, index) {
        var parentEl = fileList,
            beforeEl = parentEl.firstChild;

        if (index > 0) {
            beforeEl = qq(parentEl).children()[index].nextSibling;

        }

        parentEl.insertBefore(el, beforeEl);
    }

    function getCancel(id) {
        return getTemplateEl(getFile(id), selectorClasses.cancel);
    }

    function getPause(id) {
        return getTemplateEl(getFile(id), selectorClasses.pause);
    }

    function getContinue(id) {
        return getTemplateEl(getFile(id), selectorClasses.continueButton);
    }

    function getProgress(id) {
        /* jshint eqnull:true */
        // Total progress bar
        if (id == null) {
            return getTemplateEl(container, selectorClasses.totalProgressBarContainer) ||
                getTemplateEl(container, selectorClasses.totalProgressBar);
        }

        // Per-file progress bar
        return getTemplateEl(getFile(id), selectorClasses.progressBarContainer) ||
            getTemplateEl(getFile(id), selectorClasses.progressBar);
    }

    function getSpinner(id) {
        return getTemplateEl(getFile(id), selectorClasses.spinner);
    }

    function getEditIcon(id) {
        return getTemplateEl(getFile(id), selectorClasses.editNameIcon);
    }

    function getSize(id) {
        return getTemplateEl(getFile(id), selectorClasses.size);
    }

    function getDelete(id) {
        return getTemplateEl(getFile(id), selectorClasses.deleteButton);
    }

    function getRetry(id) {
        return getTemplateEl(getFile(id), selectorClasses.retry);
    }

    function getFilename(id) {
        return getTemplateEl(getFile(id), selectorClasses.file);
    }

    function getDropProcessing() {
        return getTemplateEl(container, selectorClasses.dropProcessing);
    }

    function getThumbnail(id) {
        return showThumbnails && getTemplateEl(getFile(id), selectorClasses.thumbnail);
    }

    function hide(el) {
        el && qq(el).addClass(options.classes.hide);
    }

    function show(el) {
        el && qq(el).removeClass(options.classes.hide);
    }

    function setProgressBarWidth(id, percent) {
        var bar = getProgress(id),
            /* jshint eqnull:true */
            progressBarSelector = id == null ? selectorClasses.totalProgressBar : selectorClasses.progressBar;

        if (bar && !qq(bar).hasClass(progressBarSelector)) {
            bar = qq(bar).getByClass(progressBarSelector)[0];
        }

        bar && qq(bar).css({width: percent + "%"});
    }

    // During initialization of the templating module we should cache any
    // placeholder images so we can quickly swap them into the file list on demand.
    // Any placeholder images that cannot be loaded/found are simply ignored.
    function cacheThumbnailPlaceholders() {
        var notAvailableUrl =  options.placeholders.thumbnailNotAvailable,
            waitingUrl = options.placeholders.waitingForThumbnail,
            spec = {
                maxSize: thumbnailMaxSize,
                scale: serverScale
            };

        if (showThumbnails) {
            if (notAvailableUrl) {
                options.imageGenerator.generate(notAvailableUrl, new Image(), spec).then(
                    function(updatedImg) {
                        cachedThumbnailNotAvailableImg.success(updatedImg);
                    },
                    function() {
                        cachedThumbnailNotAvailableImg.failure();
                        log("Problem loading 'not available' placeholder image at " + notAvailableUrl, "error");
                    }
                );
            }
            else {
                cachedThumbnailNotAvailableImg.failure();
            }

            if (waitingUrl) {
                options.imageGenerator.generate(waitingUrl, new Image(), spec).then(
                    function(updatedImg) {
                        cachedWaitingForThumbnailImg.success(updatedImg);
                    },
                    function() {
                        cachedWaitingForThumbnailImg.failure();
                        log("Problem loading 'waiting for thumbnail' placeholder image at " + waitingUrl, "error");
                    }
                );
            }
            else {
                cachedWaitingForThumbnailImg.failure();
            }
        }
    }

    // Displays a "waiting for thumbnail" type placeholder image
    // iff we were able to load it during initialization of the templating module.
    function displayWaitingImg(thumbnail) {
        var waitingImgPlacement = new qq.Promise();

        cachedWaitingForThumbnailImg.then(function(img) {
            maybeScalePlaceholderViaCss(img, thumbnail);
            /* jshint eqnull:true */
            if (!thumbnail.src) {
                thumbnail.src = img.src;
                thumbnail.onload = function() {
                    show(thumbnail);
                    waitingImgPlacement.success();
                };
            }
            else {
                waitingImgPlacement.success();
            }
        }, function() {
            // In some browsers (such as IE9 and older) an img w/out a src attribute
            // are displayed as "broken" images, so we should just hide the img tag
            // if we aren't going to display the "waiting" placeholder.
            hide(thumbnail);
            waitingImgPlacement.success();
        });

        return waitingImgPlacement;
    }

    // Displays a "thumbnail not available" type placeholder image
    // iff we were able to load this placeholder during initialization
    // of the templating module or after preview generation has failed.
    function maybeSetDisplayNotAvailableImg(id, thumbnail) {
        var previewing = previewGeneration[id] || new qq.Promise().failure(),
            notAvailableImgPlacement = new qq.Promise();

        cachedThumbnailNotAvailableImg.then(function(img) {
            previewing.then(
                function() {
                    notAvailableImgPlacement.success();
                },
                function() {
                    maybeScalePlaceholderViaCss(img, thumbnail);
                    thumbnail.onload = function() {
                        notAvailableImgPlacement.success();
                    };
                    thumbnail.src = img.src;
                    show(thumbnail);
                }
            );
        });

        return notAvailableImgPlacement;
    }

    // Ensures a placeholder image does not exceed any max size specified
    // via `style` attribute properties iff <canvas> was not used to scale
    // the placeholder AND the target <img> doesn't already have these `style` attribute properties set.
    function maybeScalePlaceholderViaCss(placeholder, thumbnail) {
        var maxWidth = placeholder.style.maxWidth,
            maxHeight = placeholder.style.maxHeight;

        if (maxHeight && maxWidth && !thumbnail.style.maxWidth && !thumbnail.style.maxHeight) {
            qq(thumbnail).css({
                maxWidth: maxWidth,
                maxHeight: maxHeight
            });
        }
    }

    function useCachedPreview(targetThumbnailId, cachedThumbnailId) {
        var targetThumnail = getThumbnail(targetThumbnailId),
            cachedThumbnail = getThumbnail(cachedThumbnailId);

        log(qq.format("ID {} is the same file as ID {}.  Will use generated thumbnail from ID {} instead.", targetThumbnailId, cachedThumbnailId, cachedThumbnailId));

        // Generation of the related thumbnail may still be in progress, so, wait until it is done.
        previewGeneration[cachedThumbnailId].then(function() {
            previewGeneration[targetThumbnailId].success();
            log(qq.format("Now using previously generated thumbnail created for ID {} on ID {}.", cachedThumbnailId, targetThumbnailId));
            targetThumnail.src = cachedThumbnail.src;
            show(targetThumnail);
        },
        function() {
            previewGeneration[targetThumbnailId].failure();
            if (!options.placeholders.waitUntilUpdate) {
                maybeSetDisplayNotAvailableImg(targetThumbnailId, targetThumnail);
            }
        });
    }

    function generateNewPreview(id, blob, spec) {
        var thumbnail = getThumbnail(id);

        log("Generating new thumbnail for " + id);
        blob.qqThumbnailId = id;

        return options.imageGenerator.generate(blob, thumbnail, spec).then(
            function() {
                show(thumbnail);
                previewGeneration[id].success();
            },
            function() {
                previewGeneration[id].failure();

                // Display the "not available" placeholder img only if we are
                // not expecting a thumbnail at a later point, such as in a server response.
                if (!options.placeholders.waitUntilUpdate) {
                    maybeSetDisplayNotAvailableImg(id, thumbnail);
                }
            });
    }


    qq.extend(options, spec);
    log = options.log;

    container = options.containerEl;
    showThumbnails = options.imageGenerator !== undefined;
    templateHtml = parseAndGetTemplate();

    cacheThumbnailPlaceholders();

    qq.extend(this, {
        render: function() {
            log("Rendering template in DOM.");

            container.innerHTML = templateHtml.template;
            hide(getDropProcessing());
            this.hideTotalProgress();
            fileList = options.fileContainerEl || getTemplateEl(container, selectorClasses.list);

            log("Template rendering complete");
        },

        renderFailure: function(message) {
            var cantRenderEl = qq.toElement(message);
            container.innerHTML = "";
            container.appendChild(cantRenderEl);
        },

        reset: function() {
            this.render();
        },

        clearFiles: function() {
            fileList.innerHTML = "";
        },

        disableCancel: function() {
            isCancelDisabled = true;
        },

        addFile: function(id, name, prependInfo) {
            var fileEl = qq.toElement(templateHtml.fileTemplate),
                fileNameEl = getTemplateEl(fileEl, selectorClasses.file);

            qq(fileEl).addClass(FILE_CLASS_PREFIX + id);
            fileNameEl && qq(fileNameEl).setText(name);
            fileEl.setAttribute(FILE_ID_ATTR, id);

            if (prependInfo) {
                prependFile(fileEl, prependInfo.index);
            }
            else {
                fileList.appendChild(fileEl);
            }

            hide(getProgress(id));
            hide(getSize(id));
            hide(getDelete(id));
            hide(getRetry(id));
            hide(getPause(id));
            hide(getContinue(id));

            if (isCancelDisabled) {
                this.hideCancel(id);
            }
        },

        removeFile: function(id) {
            qq(getFile(id)).remove();
        },

        getFileId: function(el) {
            var currentNode = el;

            if (currentNode) {
                /*jshint -W116*/
                while (currentNode.getAttribute(FILE_ID_ATTR) == null) {
                    currentNode = currentNode.parentNode;
                }

                return parseInt(currentNode.getAttribute(FILE_ID_ATTR));
            }
        },

        getFileList: function() {
            return fileList;
        },

        markFilenameEditable: function(id) {
            var filename = getFilename(id);

            filename && qq(filename).addClass(options.classes.editable);
        },

        updateFilename: function(id, name) {
            var filename = getFilename(id);

            filename && qq(filename).setText(name);
        },

        hideFilename: function(id) {
            hide(getFilename(id));
        },

        showFilename: function(id) {
            show(getFilename(id));
        },

        isFileName: function(el) {
            return qq(el).hasClass(selectorClasses.file);
        },

        getButton: function() {
            return options.button || getTemplateEl(container, selectorClasses.button);
        },

        hideDropProcessing: function() {
            hide(getDropProcessing());
        },

        showDropProcessing: function() {
            show(getDropProcessing());
        },

        getDropZone: function() {
            return getTemplateEl(container, selectorClasses.drop);
        },

        isEditFilenamePossible: function() {
            return isEditElementsExist;
        },

        hideRetry: function(id) {
            hide(getRetry(id));
        },

        isRetryPossible: function() {
            return isRetryElementExist;
        },

        showRetry: function(id) {
            show(getRetry(id));
        },

        getFileContainer: function(id) {
            return getFile(id);
        },

        showEditIcon: function(id) {
            var icon = getEditIcon(id);

            icon && qq(icon).addClass(options.classes.editable);
        },

        hideEditIcon: function(id) {
            var icon = getEditIcon(id);

            icon && qq(icon).removeClass(options.classes.editable);
        },

        isEditIcon: function(el) {
            return qq(el).hasClass(selectorClasses.editNameIcon);
        },

        getEditInput: function(id) {
            return getTemplateEl(getFile(id), selectorClasses.editFilenameInput);
        },

        isEditInput: function(el) {
            return qq(el).hasClass(selectorClasses.editFilenameInput);
        },

        updateProgress: function(id, loaded, total) {
            var bar = getProgress(id),
                percent;

            if (bar) {
                percent = Math.round(loaded / total * 100);

                if (percent === 100) {
                    hide(bar);
                }
                else {
                    show(bar);
                }

                setProgressBarWidth(id, percent);
            }
        },

        updateTotalProgress: function(loaded, total) {
            this.updateProgress(null, loaded, total);
        },

        hideProgress: function(id) {
            var bar = getProgress(id);

            bar && hide(bar);
        },

        hideTotalProgress: function() {
            this.hideProgress();
        },

        resetProgress: function(id) {
            setProgressBarWidth(id, 0);
        },

        resetTotalProgress: function() {
            this.resetProgress();
        },

        showCancel: function(id) {
            if (!isCancelDisabled) {
                var cancel = getCancel(id);

                cancel && qq(cancel).removeClass(options.classes.hide);
            }
        },

        hideCancel: function(id) {
            hide(getCancel(id));
        },

        isCancel: function(el)  {
            return qq(el).hasClass(selectorClasses.cancel);
        },

        allowPause: function(id) {
            show(getPause(id));
            hide(getContinue(id));
        },

        uploadPaused: function(id) {
            this.setStatusText(id, options.text.paused);
            this.allowContinueButton(id);
            hide(getSpinner(id));
        },

        hidePause: function(id) {
            hide(getPause(id));
        },

        isPause: function(el) {
            return qq(el).hasClass(selectorClasses.pause);
        },

        isContinueButton: function(el) {
            return qq(el).hasClass(selectorClasses.continueButton);
        },

        allowContinueButton: function(id) {
            show(getContinue(id));
            hide(getPause(id));
        },

        uploadContinued: function(id) {
            this.setStatusText(id, "");
            this.allowPause(id);
            show(getSpinner(id));
        },

        showDeleteButton: function(id) {
            show(getDelete(id));
        },

        hideDeleteButton: function(id) {
            hide(getDelete(id));
        },

        isDeleteButton: function(el) {
            return qq(el).hasClass(selectorClasses.deleteButton);
        },

        isRetry: function(el) {
            return qq(el).hasClass(selectorClasses.retry);
        },

        updateSize: function(id, text) {
            var size = getSize(id);

            if (size) {
                show(size);
                qq(size).setText(text);
            }
        },

        setStatusText: function(id, text) {
            var textEl = getTemplateEl(getFile(id), selectorClasses.statusText);

            if (textEl) {
                /*jshint -W116*/
                if (text == null) {
                    qq(textEl).clearText();
                }
                else {
                    qq(textEl).setText(text);
                }
            }
        },

        hideSpinner: function(id) {
            hide(getSpinner(id));
        },

        showSpinner: function(id) {
            show(getSpinner(id));
        },

        generatePreview: function(id, opt_fileOrBlob) {
            var relatedThumbnailId = opt_fileOrBlob && opt_fileOrBlob.qqThumbnailId,
                thumbnail = getThumbnail(id),
                spec = {
                    maxSize: thumbnailMaxSize,
                    scale: true,
                    orient: true
                };

            if (qq.supportedFeatures.imagePreviews) {
                if (thumbnail) {
                    displayWaitingImg(thumbnail).done(function() {
                        previewGeneration[id] = new qq.Promise();

                        /* jshint eqnull: true */
                        // If we've already generated an <img> for this file, use the one that exists,
                        // don't waste resources generating a new one.
                        if (relatedThumbnailId != null) {
                            useCachedPreview(id, relatedThumbnailId);
                        }
                        else {
                            generateNewPreview(id, opt_fileOrBlob, spec);
                        }
                    });
                }
            }
            else if (thumbnail) {
                displayWaitingImg(thumbnail);
            }
        },

        updateThumbnail: function(id, thumbnailUrl, showWaitingImg) {
            var thumbnail = getThumbnail(id),
                spec = {
                    maxSize: thumbnailMaxSize,
                    scale: serverScale
                };

            if (thumbnail) {
                if (thumbnailUrl) {
                    if (showWaitingImg) {
                        displayWaitingImg(thumbnail);
                    }

                    return options.imageGenerator.generate(thumbnailUrl, thumbnail, spec).then(
                        function() {
                            show(thumbnail);
                        },
                        function() {
                            maybeSetDisplayNotAvailableImg(id, thumbnail);
                        }
                    );
                }
                else {
                    maybeSetDisplayNotAvailableImg(id, thumbnail);
                }
            }
        }
    });
};

/*globals qq*/
/**
 * Upload handler used that assumes the current user agent does not have any support for the
 * File API, and, therefore, makes use of iframes and forms to submit the files directly to
 * a generic server.
 *
 * @param options Options passed from the base handler
 * @param proxy Callbacks & methods used to query for or push out data/changes
 */
qq.traditional = qq.traditional || {};
qq.traditional.FormUploadHandler = function(options, proxy) {
    "use strict";

    var handler = this,
        getName = proxy.getName,
        getUuid = proxy.getUuid,
        log = proxy.log;

    /**
     * @param innerHtmlOrMessage JSON message
     * @returns {*} The parsed response, or an empty object if the response could not be parsed
     */
    function parseJsonResponse(innerHtmlOrMessage) {
        var response = {};

        try {
            response = qq.parseJson(innerHtmlOrMessage);
        }
        catch(error) {
            log("Error when attempting to parse iframe upload response (" + error.message + ")", "error");
        }

        return response;
    }

    /**
     * Returns json object received by iframe from server.
     */
    function getIframeContentJson(id, iframe) {
        /*jshint evil: true*/

        var response;

        //IE may throw an "access is denied" error when attempting to access contentDocument on the iframe in some cases
        try {
            // iframe.contentWindow.document - for IE<7
            var doc = iframe.contentDocument || iframe.contentWindow.document,
                innerHtml = doc.body.innerHTML;

            log("converting iframe's innerHTML to JSON");
            log("innerHTML = " + innerHtml);
            //plain text response may be wrapped in <pre> tag
            if (innerHtml && innerHtml.match(/^<pre/i)) {
                innerHtml = doc.body.firstChild.firstChild.nodeValue;
            }

            response = parseJsonResponse(innerHtml);
        }
        catch(error) {
            log("Error when attempting to parse form upload response (" + error.message + ")", "error");
            response = {success: false};
        }

        return response;
    }

    /**
     * Creates form, that will be submitted to iframe
     */
    function createForm(id, iframe){
        var params = options.paramsStore.get(id),
            method = options.demoMode ? "GET" : "POST",
            endpoint = options.endpointStore.get(id),
            name = getName(id);

        params[options.uuidName] = getUuid(id);
        params[options.filenameParam] = name;

        return handler._initFormForUpload({
            method: method,
            endpoint: endpoint,
            params: params,
            paramsInBody: options.paramsInBody,
            targetName: iframe.name
        });
    }

    this.uploadFile = function(id) {
        var input = handler.getInput(id),
            iframe = handler._createIframe(id),
            promise = new qq.Promise(),
            form;

        form = createForm(id, iframe);
        form.appendChild(input);

        handler._attachLoadEvent(iframe, function(responseFromMessage){
            log("iframe loaded");

            var response = responseFromMessage ? responseFromMessage : getIframeContentJson(id, iframe);

            handler._detachLoadEvent(id);

            //we can't remove an iframe if the iframe doesn't belong to the same domain
            if (!options.cors.expected) {
                qq(iframe).remove();
            }

            if (response.success) {
                promise.success(response);
            }
            else {
                promise.failure(response);
            }
        });

        log("Sending upload request for " + id);
        form.submit();
        qq(form).remove();

        return promise;
    };

    qq.extend(this, new qq.FormUploadHandler({
            options: {
                isCors: options.cors.expected,
                inputName: options.inputName
            },
        
            proxy: {
                onCancel: options.onCancel,
                getName: getName,
                getUuid: getUuid,
                log: log
            }
        }
    ));
};

/*globals qq*/
/**
 * Upload handler used to upload to traditional endpoints.  It depends on File API support, and, therefore,
 * makes use of `XMLHttpRequest` level 2 to upload `File`s and `Blob`s to a generic server.
 *
 * @param spec Options passed from the base handler
 * @param proxy Callbacks & methods used to query for or push out data/changes
 */
qq.traditional = qq.traditional || {};
qq.traditional.XhrUploadHandler = function(spec, proxy) {
    "use strict";

    var handler = this,
        getName = proxy.getName,
        getSize = proxy.getSize,
        getUuid = proxy.getUuid,
        log = proxy.log,
        multipart = spec.forceMultipart || spec.paramsInBody,

        addChunkingSpecificParams = function(id, params, chunkData) {
            var size = getSize(id),
                name = getName(id);

            params[spec.chunking.paramNames.partIndex] = chunkData.part;
            params[spec.chunking.paramNames.partByteOffset] = chunkData.start;
            params[spec.chunking.paramNames.chunkSize] = chunkData.size;
            params[spec.chunking.paramNames.totalParts] = chunkData.count;
            params[spec.totalFileSizeName] = size;

            /**
             * When a Blob is sent in a multipart request, the filename value in the content-disposition header is either "blob"
             * or an empty string.  So, we will need to include the actual file name as a param in this case.
             */
            if (multipart) {
                params[spec.filenameParam] = name;
            }
        },


        allChunksDoneRequester = new qq.traditional.AllChunksDoneAjaxRequester({
            cors: spec.cors,
            endpoint: spec.chunking.success.endpoint,
            log: log
        }),

        createReadyStateChangedHandler = function(id, xhr) {
            var promise = new qq.Promise();

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    var result = onUploadOrChunkComplete(id, xhr);

                    if (result.success) {
                        promise.success(result.response, xhr);
                    }
                    else {
                        promise.failure(result.response, xhr);
                    }
                }
            };

            return promise;
        },

        getChunksCompleteParams = function(id) {
            var params = spec.paramsStore.get(id),
                name = getName(id),
                size = getSize(id);

            params[spec.uuidName] = getUuid(id);
            params[spec.filenameParam] = name;
            params[spec.totalFileSizeName] = size;
            params[spec.chunking.paramNames.totalParts] = handler._getTotalChunks(id);

            return params;
        },

        isErrorUploadResponse = function(xhr, response) {
            return xhr.status !== 200 || !response.success || response.reset;
        },

        onUploadOrChunkComplete = function(id, xhr) {
            var response;

            log("xhr - server response received for " + id);
            log("responseText = " + xhr.responseText);

            response = parseResponse(true, xhr);

            return {
                success: !isErrorUploadResponse(xhr, response),
                response: response
            };
        },

        // If this is an upload response, we require a JSON payload, otherwise, it is optional.
        parseResponse = function(upload, xhr) {
            var response = {};

            try {
                log(qq.format("Received response status {} with body: {}", xhr.status, xhr.responseText));
                response = qq.parseJson(xhr.responseText);
            }
            catch(error) {
                upload && log("Error when attempting to parse xhr response text (" + error.message + ")", "error");
            }

            return response;
        },

        sendChunksCompleteRequest = function(id) {
            var promise = new qq.Promise();

            allChunksDoneRequester.complete(
                    id,
                    handler._createXhr(id),
                    getChunksCompleteParams(id),
                    spec.customHeaders.get(id)
                )
                .then(function(xhr) {
                    promise.success(parseResponse(false, xhr), xhr);
                }, function(xhr) {
                    promise.failure(parseResponse(false, xhr), xhr);
                });

            return promise;
        },

        setParamsAndGetEntityToSend = function(params, xhr, fileOrBlob, id) {
            var formData = new FormData(),
                method = spec.demoMode ? "GET" : "POST",
                endpoint = spec.endpointStore.get(id),
                name = getName(id),
                size = getSize(id);

            params[spec.uuidName] = getUuid(id);
            params[spec.filenameParam] = name;

            if (multipart) {
                params[spec.totalFileSizeName] = size;
            }

            //build query string
            if (!spec.paramsInBody) {
                if (!multipart) {
                    params[spec.inputName] = name;
                }
                endpoint = qq.obj2url(params, endpoint);
            }

            xhr.open(method, endpoint, true);

            if (spec.cors.expected && spec.cors.sendCredentials) {
                xhr.withCredentials = true;
            }

            if (multipart) {
                if (spec.paramsInBody) {
                    qq.obj2FormData(params, formData);
                }

                formData.append(spec.inputName, fileOrBlob);
                return formData;
            }

            return fileOrBlob;
        },

        setUploadHeaders = function(id, xhr) {
            var extraHeaders = spec.customHeaders.get(id),
                fileOrBlob = handler.getFile(id);

            xhr.setRequestHeader("Accept", "application/json");
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xhr.setRequestHeader("Cache-Control", "no-cache");

            if (!multipart) {
                xhr.setRequestHeader("Content-Type", "application/octet-stream");
                //NOTE: return mime type in xhr works on chrome 16.0.9 firefox 11.0a2
                xhr.setRequestHeader("X-Mime-Type", fileOrBlob.type);
            }

            qq.each(extraHeaders, function(name, val) {
                xhr.setRequestHeader(name, val);
            });
        };


    qq.extend(this, {
        uploadChunk: function(id, chunkIdx, resuming) {
            var chunkData = handler._getChunkData(id, chunkIdx),
                xhr = handler._createXhr(id, chunkIdx),
                size = getSize(id),
                promise, toSend, params;

            promise = createReadyStateChangedHandler(id, xhr);
            handler._registerProgressHandler(id, chunkIdx, chunkData.size);
            params = spec.paramsStore.get(id);
            addChunkingSpecificParams(id, params, chunkData);

            if (resuming) {
                params[spec.resume.paramNames.resuming] = true;
            }

            toSend = setParamsAndGetEntityToSend(params, xhr, chunkData.blob, id);
            setUploadHeaders(id, xhr);
            xhr.send(toSend);

            return promise;
        },

        uploadFile: function(id) {
            var fileOrBlob = handler.getFile(id),
                promise, xhr, params, toSend;

            xhr = handler._createXhr(id);
            handler._registerProgressHandler(id);
            promise = createReadyStateChangedHandler(id, xhr);
            params = spec.paramsStore.get(id);
            toSend = setParamsAndGetEntityToSend(params, xhr, fileOrBlob, id);
            setUploadHeaders(id, xhr);
            xhr.send(toSend);

            return promise;
        }
    });

    qq.extend(this, new qq.XhrUploadHandler({
            options: qq.extend({namespace: "traditional"}, spec),
            proxy: qq.extend({getEndpoint: spec.endpointStore.get}, proxy)
        }
    ));

    qq.override(this, function(super_) {
        return {
            finalizeChunks: function(id) {
                if (spec.chunking.success.endpoint) {
                    return sendChunksCompleteRequest(id);
                }
                else {
                    return super_.finalizeChunks(id, qq.bind(parseResponse, this, true));
                }
            }
        };
    });
};

/*globals qq*/
/**
 * Ajax requester used to send a POST to a traditional endpoint once all chunks for a specific file have uploaded
 * successfully.
 *
 * @param o Options from the caller - will override the defaults.
 * @constructor
 */
qq.traditional.AllChunksDoneAjaxRequester = function(o) {
    "use strict";

    var requester,
        method = "POST",
        options = {
            cors: {
                allowXdr: false,
                expected: false,
                sendCredentials: false
            },
            endpoint: null,
            log: function(str, level) {}
        },
        promises = {},
        endpointHandler = {
            get: function(id) {
                return options.endpoint;
            }
        };

    qq.extend(options, o);

    requester = qq.extend(this, new qq.AjaxRequester({
        acceptHeader: "application/json",
        validMethods: [method],
        method: method,
        successfulResponseCodes: (function() {
            var codes = {};
            codes[method] = [200, 201, 202];
            return codes;
        }()),
        endpointStore: endpointHandler,
        allowXRequestedWithAndCacheControl: false,
        cors: options.cors,
        log: options.log,
        onComplete: function(id, xhr, isError) {
            var promise = promises[id];

            delete promises[id];

            if (isError) {
                promise.failure(xhr);
            }
            else {
                promise.success(xhr);
            }
        }
    }));


    qq.extend(this, {
        complete: function(id, xhr, params, headers) {
            var promise = new qq.Promise();

            options.log("Submitting All Chunks Done request for " + id);

            promises[id] = promise;

            requester.initTransport(id)
                .withParams(params)
                .withHeaders(headers)
                .send(xhr);

            return promise;
        }
    });
};

/*globals qq*/
qq.PasteSupport = function(o) {
    "use strict";

    var options, detachPasteHandler;

    options = {
        targetElement: null,
        callbacks: {
            log: function(message, level) {},
            pasteReceived: function(blob) {}
        }
    };

    function isImage(item) {
        return item.type &&
            item.type.indexOf("image/") === 0;
    }

    function registerPasteHandler() {
        qq(options.targetElement).attach("paste", function(event) {
            var clipboardData = event.clipboardData;

            if (clipboardData) {
                qq.each(clipboardData.items, function(idx, item) {
                    if (isImage(item)) {
                        var blob = item.getAsFile();
                        options.callbacks.pasteReceived(blob);
                    }
                });
            }
        });
    }

    function unregisterPasteHandler() {
        if (detachPasteHandler) {
            detachPasteHandler();
        }
    }

    qq.extend(options, o);
    registerPasteHandler();

    qq.extend(this, {
        reset: function() {
            unregisterPasteHandler();
        }
    });
};

/*globals qq, document, CustomEvent*/
qq.DragAndDrop = function(o) {
    "use strict";

    var options,
        HIDE_ZONES_EVENT_NAME = "qq-hidezones",
        HIDE_BEFORE_ENTER_ATTR = "qq-hide-dropzone",
        uploadDropZones = [],
        droppedFiles = [],
        disposeSupport = new qq.DisposeSupport();

    options = {
        dropZoneElements: [],
        allowMultipleItems: true,
        classes: {
            dropActive: null
        },
        callbacks: new qq.DragAndDrop.callbacks()
    };

    qq.extend(options, o, true);

    function uploadDroppedFiles(files, uploadDropZone) {
        // We need to convert the `FileList` to an actual `Array` to avoid iteration issues
        var filesAsArray = Array.prototype.slice.call(files);

        options.callbacks.dropLog("Grabbed " + files.length + " dropped files.");
        uploadDropZone.dropDisabled(false);
        options.callbacks.processingDroppedFilesComplete(filesAsArray, uploadDropZone.getElement());
    }

    function traverseFileTree(entry) {
        var parseEntryPromise = new qq.Promise();

        if (entry.isFile) {
            entry.file(function(file) {
                var name = entry.name,
                    fullPath = entry.fullPath,
                    indexOfNameInFullPath = fullPath.indexOf(name);

                // remove file name from full path string
                fullPath = fullPath.substr(0, indexOfNameInFullPath);

                // remove leading slash in full path string
                if (fullPath.charAt(0) === "/") {
                    fullPath = fullPath.substr(1);
                }

                file.qqPath = fullPath;
                droppedFiles.push(file);
                parseEntryPromise.success();
            },
            function(fileError) {
                options.callbacks.dropLog("Problem parsing '" + entry.fullPath + "'.  FileError code " + fileError.code + ".", "error");
                parseEntryPromise.failure();
            });
        }
        else if (entry.isDirectory) {
            getFilesInDirectory(entry).then(
                function allEntriesRead(entries) {
                    var entriesLeft = entries.length;

                    qq.each(entries, function(idx, entry) {
                        traverseFileTree(entry).done(function() {
                            entriesLeft-=1;

                            if (entriesLeft === 0) {
                                parseEntryPromise.success();
                            }
                        });
                    });

                    if (!entries.length) {
                        parseEntryPromise.success();
                    }
                },

                function readFailure(fileError) {
                    options.callbacks.dropLog("Problem parsing '" + entry.fullPath + "'.  FileError code " + fileError.code + ".", "error");
                    parseEntryPromise.failure();
                }
            );
        }

        return parseEntryPromise;
    }

    // Promissory.  Guaranteed to read all files in the root of the passed directory.
    function getFilesInDirectory(entry, reader, accumEntries, existingPromise) {
        var promise = existingPromise || new qq.Promise(),
            dirReader = reader || entry.createReader();

        dirReader.readEntries(
            function readSuccess(entries) {
                var newEntries = accumEntries ? accumEntries.concat(entries) : entries;

                if (entries.length) {
                    setTimeout(function() { // prevent stack oveflow, however unlikely
                        getFilesInDirectory(entry, dirReader, newEntries, promise);
                    }, 0);
                }
                else {
                    promise.success(newEntries);
                }
            },

            promise.failure
        );

        return promise;
    }

    function handleDataTransfer(dataTransfer, uploadDropZone) {
        var pendingFolderPromises = [],
            handleDataTransferPromise = new qq.Promise();

        options.callbacks.processingDroppedFiles();
        uploadDropZone.dropDisabled(true);

        if (dataTransfer.files.length > 1 && !options.allowMultipleItems) {
            options.callbacks.processingDroppedFilesComplete([]);
            options.callbacks.dropError("tooManyFilesError", "");
            uploadDropZone.dropDisabled(false);
            handleDataTransferPromise.failure();
        }
        else {
            droppedFiles = [];

            if (qq.isFolderDropSupported(dataTransfer)) {
                qq.each(dataTransfer.items, function(idx, item) {
                    var entry = item.webkitGetAsEntry();

                    if (entry) {
                        //due to a bug in Chrome's File System API impl - #149735
                        if (entry.isFile) {
                            droppedFiles.push(item.getAsFile());
                        }

                        else {
                            pendingFolderPromises.push(traverseFileTree(entry).done(function() {
                                pendingFolderPromises.pop();
                                if (pendingFolderPromises.length === 0) {
                                    handleDataTransferPromise.success();
                                }
                            }));
                        }
                    }
                });
            }
            else {
                droppedFiles = dataTransfer.files;
            }

            if (pendingFolderPromises.length === 0) {
                handleDataTransferPromise.success();
            }
        }

        return handleDataTransferPromise;
    }

    function setupDropzone(dropArea) {
        var dropZone = new qq.UploadDropZone({
            HIDE_ZONES_EVENT_NAME: HIDE_ZONES_EVENT_NAME,
            element: dropArea,
            onEnter: function(e){
                qq(dropArea).addClass(options.classes.dropActive);
                e.stopPropagation();
            },
            onLeaveNotDescendants: function(e){
                qq(dropArea).removeClass(options.classes.dropActive);
            },
            onDrop: function(e){
                handleDataTransfer(e.dataTransfer, dropZone).then(
                    function() {
                        uploadDroppedFiles(droppedFiles, dropZone);
                    },
                    function() {
                        options.callbacks.dropLog("Drop event DataTransfer parsing failed.  No files will be uploaded.", "error");
                    }
                );
            }
        });

        disposeSupport.addDisposer(function() {
            dropZone.dispose();
        });

        qq(dropArea).hasAttribute(HIDE_BEFORE_ENTER_ATTR) && qq(dropArea).hide();

        uploadDropZones.push(dropZone);

        return dropZone;
    }

    function isFileDrag(dragEvent) {
        var fileDrag;

        qq.each(dragEvent.dataTransfer.types, function(key, val) {
            if (val === "Files") {
                fileDrag = true;
                return false;
            }
        });

        return fileDrag;
    }

    // Attempt to determine when the file has left the document.  It is not always possible to detect this
    // in all cases, but it is generally possible in all browsers, with a few exceptions.
    //
    // Exceptions:
    // * IE10+ & Safari: We can't detect a file leaving the document if the Explorer window housing the file
    //                   overlays the browser window.
    // * IE10+: If the file is dragged out of the window too quickly, IE does not set the expected values of the
    //          event's X & Y properties.
    function leavingDocumentOut(e) {
        if (qq.firefox()) {
            return !e.relatedTarget;
        }

        if (qq.safari()) {
            return e.x < 0 || e.y < 0;
        }

        return e.x === 0 && e.y === 0;
    }

    function setupDragDrop() {
        var dropZones = options.dropZoneElements,

            maybeHideDropZones = function() {
                setTimeout(function() {
                    qq.each(dropZones, function(idx, dropZone) {
                        qq(dropZone).hasAttribute(HIDE_BEFORE_ENTER_ATTR) && qq(dropZone).hide();
                        qq(dropZone).removeClass(options.classes.dropActive);
                    });
                }, 10);
            };

        qq.each(dropZones, function(idx, dropZone) {
            var uploadDropZone = setupDropzone(dropZone);

            // IE <= 9 does not support the File API used for drag+drop uploads
            if (dropZones.length && (!qq.ie() || qq.ie10())) {
                disposeSupport.attach(document, "dragenter", function(e) {
                    if (!uploadDropZone.dropDisabled() && isFileDrag(e)) {
                        qq.each(dropZones, function(idx, dropZone) {
                            // We can't apply styles to non-HTMLElements, since they lack the `style` property
                            if (dropZone instanceof HTMLElement) {
                                qq(dropZone).css({display: "block"});
                            }
                        });
                    }
                });
            }
        });

        disposeSupport.attach(document, "dragleave", function(e) {
            if (leavingDocumentOut(e)) {
                maybeHideDropZones();
            }
        });

        // Just in case we were not able to detect when a dragged file has left the document,
        // hide all relevant drop zones the next time the mouse enters the document.
        // Note that mouse events such as this one are not fired during drag operations.
        disposeSupport.attach(qq(document).children()[0], "mouseenter", function(e) {
            maybeHideDropZones();
        });

        disposeSupport.attach(document, "drop", function(e){
            e.preventDefault();
            maybeHideDropZones();
        });

        disposeSupport.attach(document, HIDE_ZONES_EVENT_NAME, maybeHideDropZones);
    }

    setupDragDrop();

    qq.extend(this, {
        setupExtraDropzone: function(element) {
            options.dropZoneElements.push(element);
            setupDropzone(element);
        },

        removeDropzone: function(element) {
            var i,
                dzs = options.dropZoneElements;

            for(i in dzs) {
                if (dzs[i] === element) {
                    return dzs.splice(i, 1);
                }
            }
        },

        dispose: function() {
            disposeSupport.dispose();
            qq.each(uploadDropZones, function(idx, dropZone) {
                dropZone.dispose();
            });
        }
    });
};

qq.DragAndDrop.callbacks = function() {
    "use strict";

    return {
        processingDroppedFiles: function() {},
        processingDroppedFilesComplete: function(files, targetEl) {},
        dropError: function(code, errorSpecifics) {
            qq.log("Drag & drop error code '" + code + " with these specifics: '" + errorSpecifics + "'", "error");
        },
        dropLog: function(message, level) {
            qq.log(message, level);
        }
    };
};

qq.UploadDropZone = function(o){
    "use strict";

    var disposeSupport = new qq.DisposeSupport(),
        options, element, preventDrop, dropOutsideDisabled;

    options = {
        element: null,
        onEnter: function(e){},
        onLeave: function(e){},
        // is not fired when leaving element by hovering descendants
        onLeaveNotDescendants: function(e){},
        onDrop: function(e){}
    };

    qq.extend(options, o);
    element = options.element;

    function dragover_should_be_canceled(){
        return qq.safari() || (qq.firefox() && qq.windows());
    }

    function disableDropOutside(e){
        // run only once for all instances
        if (!dropOutsideDisabled ){

            // for these cases we need to catch onDrop to reset dropArea
            if (dragover_should_be_canceled){
                disposeSupport.attach(document, "dragover", function(e){
                    e.preventDefault();
                });
            } else {
                disposeSupport.attach(document, "dragover", function(e){
                    if (e.dataTransfer){
                        e.dataTransfer.dropEffect = "none";
                        e.preventDefault();
                    }
                });
            }

            dropOutsideDisabled = true;
        }
    }

    function isValidFileDrag(e){
        // e.dataTransfer currently causing IE errors
        // IE9 does NOT support file API, so drag-and-drop is not possible
        if (qq.ie() && !qq.ie10()) {
            return false;
        }

        var effectTest, dt = e.dataTransfer,
        // do not check dt.types.contains in webkit, because it crashes safari 4
        isSafari = qq.safari();

        // dt.effectAllowed is none in Safari 5
        // dt.types.contains check is for firefox

        // dt.effectAllowed crashes IE11 when files have been dragged from
        // the filesystem
        effectTest = (qq.ie10() || qq.ie11()) ? true : dt.effectAllowed !== "none";
        return dt && effectTest && (dt.files || (!isSafari && dt.types.contains && dt.types.contains("Files")));
    }

    function isOrSetDropDisabled(isDisabled) {
        if (isDisabled !== undefined) {
            preventDrop = isDisabled;
        }
        return preventDrop;
    }

    function triggerHidezonesEvent() {
        var hideZonesEvent;

        function triggerUsingOldApi() {
            hideZonesEvent = document.createEvent("Event");
            hideZonesEvent.initEvent(options.HIDE_ZONES_EVENT_NAME, true, true);
        }

        if (window.CustomEvent) {
            try {
                hideZonesEvent = new CustomEvent(options.HIDE_ZONES_EVENT_NAME);
            }
            catch (err) {
                triggerUsingOldApi();
            }
        }
        else {
            triggerUsingOldApi();
        }

        document.dispatchEvent(hideZonesEvent);
    }

    function attachEvents(){
        disposeSupport.attach(element, "dragover", function(e){
            if (!isValidFileDrag(e)) {
                return;
            }

            // dt.effectAllowed crashes IE11 when files have been dragged from
            // the filesystem
            var effect = (qq.ie() || qq.ie11()) ? null : e.dataTransfer.effectAllowed;
            if (effect === "move" || effect === "linkMove"){
                e.dataTransfer.dropEffect = "move"; // for FF (only move allowed)
            } else {
                e.dataTransfer.dropEffect = "copy"; // for Chrome
            }

            e.stopPropagation();
            e.preventDefault();
        });

        disposeSupport.attach(element, "dragenter", function(e){
            if (!isOrSetDropDisabled()) {
                if (!isValidFileDrag(e)) {
                    return;
                }
                options.onEnter(e);
            }
        });

        disposeSupport.attach(element, "dragleave", function(e){
            if (!isValidFileDrag(e)) {
                return;
            }

            options.onLeave(e);

            var relatedTarget = document.elementFromPoint(e.clientX, e.clientY);
            // do not fire when moving a mouse over a descendant
            if (qq(this).contains(relatedTarget)) {
                return;
            }

            options.onLeaveNotDescendants(e);
        });

        disposeSupport.attach(element, "drop", function(e) {
            if (!isOrSetDropDisabled()) {
                if (!isValidFileDrag(e)) {
                    return;
                }

                e.preventDefault();
                e.stopPropagation();
                options.onDrop(e);

                triggerHidezonesEvent();
            }
        });
    }

    disableDropOutside();
    attachEvents();

    qq.extend(this, {
        dropDisabled: function(isDisabled) {
            return isOrSetDropDisabled(isDisabled);
        },

        dispose: function() {
            disposeSupport.dispose();
        },

        getElement: function() {
            return element;
        }
    });
};

/*globals qq, XMLHttpRequest*/
qq.DeleteFileAjaxRequester = function(o) {
    "use strict";

    var requester,
        options = {
            method: "DELETE",
            uuidParamName: "qquuid",
            endpointStore: {},
            maxConnections: 3,
            customHeaders: function(id) {return {};},
            paramsStore: {},
            demoMode: false,
            cors: {
                expected: false,
                sendCredentials: false
            },
            log: function(str, level) {},
            onDelete: function(id) {},
            onDeleteComplete: function(id, xhrOrXdr, isError) {}
        };

    qq.extend(options, o);

    function getMandatedParams() {
        if (options.method.toUpperCase() === "POST") {
            return {
                "_method": "DELETE"
            };
        }

        return {};
    }

    requester = qq.extend(this, new qq.AjaxRequester({
        acceptHeader: "application/json",
        validMethods: ["POST", "DELETE"],
        method: options.method,
        endpointStore: options.endpointStore,
        paramsStore: options.paramsStore,
        mandatedParams: getMandatedParams(),
        maxConnections: options.maxConnections,
        customHeaders: function(id) {
            return options.customHeaders.get(id);
        },
        demoMode: options.demoMode,
        log: options.log,
        onSend: options.onDelete,
        onComplete: options.onDeleteComplete,
        cors: options.cors
    }));


    qq.extend(this, {
        sendDelete: function(id, uuid, additionalMandatedParams) {
            var additionalOptions = additionalMandatedParams || {};

            options.log("Submitting delete file request for " + id);

            if (options.method === "DELETE") {
                requester.initTransport(id)
                    .withPath(uuid)
                    .withParams(additionalOptions)
                    .send();
            }
            else {
                additionalOptions[options.uuidParamName] = uuid;
                requester.initTransport(id)
                    .withParams(additionalOptions)
                    .send();
            }
        }
    });
};

/*global qq, define */
/*jshint strict:false,bitwise:false,nonew:false,asi:true,-W064,-W116,-W089 */
/**
 * Mega pixel image rendering library for iOS6+
 *
 * Fixes iOS6+'s image file rendering issue for large size image (over mega-pixel),
 * which causes unexpected subsampling when drawing it in canvas.
 * By using this library, you can safely render the image with proper stretching.
 *
 * Copyright (c) 2012 Shinichi Tomita <shinichi.tomita@gmail.com>
 * Released under the MIT license
 *
 * Modified by Widen for Fine Uploader
 */
(function() {

    /**
     * Detect subsampling in loaded image.
     * In iOS, larger images than 2M pixels may be subsampled in rendering.
     */
    function detectSubsampling(img) {
        var iw = img.naturalWidth, ih = img.naturalHeight;
        if (iw * ih > 1024 * 1024) { // subsampling may happen over megapixel image
            var canvas = document.createElement("canvas");
            canvas.width = canvas.height = 1;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, -iw + 1, 0);
            // subsampled image becomes half smaller in rendering size.
            // check alpha channel value to confirm image is covering edge pixel or not.
            // if alpha value is 0 image is not covering, hence subsampled.
            return ctx.getImageData(0, 0, 1, 1).data[3] === 0;
        } else {
            return false;
        }
    }

    /**
     * Detecting vertical squash in loaded image.
     * Fixes a bug which squash image vertically while drawing into canvas for some images.
     */
    function detectVerticalSquash(img, iw, ih) {
        var canvas = document.createElement("canvas");
        canvas.width = 1;
        canvas.height = ih;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var data = ctx.getImageData(0, 0, 1, ih).data;
        // search image edge pixel position in case it is squashed vertically.
        var sy = 0;
        var ey = ih;
        var py = ih;
        while (py > sy) {
            var alpha = data[(py - 1) * 4 + 3];
            if (alpha === 0) {
                ey = py;
            } else {
                sy = py;
            }
            py = (ey + sy) >> 1;
        }
        var ratio = (py / ih);
        return (ratio===0)?1:ratio;
    }

    /**
     * Rendering image element (with resizing) and get its data URL
     */
    function renderImageToDataURL(img, options, doSquash) {
        var canvas = document.createElement("canvas"),
            mime = options.mime || "image/jpeg";

        renderImageToCanvas(img, canvas, options, doSquash);
        return canvas.toDataURL(mime, options.quality || 0.8);
    }

    function maybeCalculateDownsampledDimensions(spec) {
        var maxPixels = 5241000; //iOS specific value

        if (!qq.ios()) {
            throw new qq.Error("Downsampled dimensions can only be reliably calculated for iOS!");
        }

        if (spec.origHeight * spec.origWidth > maxPixels) {
            return {
                newHeight: Math.round(Math.sqrt(maxPixels * (spec.origHeight / spec.origWidth))),
                newWidth: Math.round(Math.sqrt(maxPixels * (spec.origWidth / spec.origHeight)))
            }
        }
    }

    /**
     * Rendering image element (with resizing) into the canvas element
     */
    function renderImageToCanvas(img, canvas, options, doSquash) {
        var iw = img.naturalWidth, ih = img.naturalHeight;
        var width = options.width, height = options.height;
        var ctx = canvas.getContext("2d");
        ctx.save();

        if (!qq.supportedFeatures.unlimitedScaledImageSize) {
            var modifiedDimensions = maybeCalculateDownsampledDimensions({
                origWidth: width,
                origHeight: height
            });

            if (modifiedDimensions) {
                qq.log(qq.format("Had to reduce dimensions due to device limitations from {}w / {}h to {}w / {}h",
                    width, height, modifiedDimensions.newWidth, modifiedDimensions.newHeight),
                "warn");

                width = modifiedDimensions.newWidth;
                height = modifiedDimensions.newHeight;
            }
        }

        transformCoordinate(canvas, width, height, options.orientation);

        // Fine Uploader specific: Save some CPU cycles if not using iOS
        // Assumption: This logic is only needed to overcome iOS image sampling issues
        if (qq.ios()) {
            var subsampled = detectSubsampling(img);
            if (subsampled) {
                iw /= 2;
                ih /= 2;
            }
            var d = 1024; // size of tiling canvas
            var tmpCanvas = document.createElement("canvas");
            tmpCanvas.width = tmpCanvas.height = d;
            var tmpCtx = tmpCanvas.getContext("2d");
            var vertSquashRatio = doSquash ? detectVerticalSquash(img, iw, ih) : 1;
            var dw = Math.ceil(d * width / iw);
            var dh = Math.ceil(d * height / ih / vertSquashRatio);
            var sy = 0;
            var dy = 0;
            while (sy < ih) {
                var sx = 0;
                var dx = 0;
                while (sx < iw) {
                    tmpCtx.clearRect(0, 0, d, d);
                    tmpCtx.drawImage(img, -sx, -sy);
                    ctx.drawImage(tmpCanvas, 0, 0, d, d, dx, dy, dw, dh);
                    sx += d;
                    dx += dw;
                }
                sy += d;
                dy += dh;
            }
            ctx.restore();
            tmpCanvas = tmpCtx = null;
        }
        else {
            ctx.drawImage(img, 0, 0, width, height);
        }

        canvas.qqImageRendered && canvas.qqImageRendered();
    }

    /**
     * Transform canvas coordination according to specified frame size and orientation
     * Orientation value is from EXIF tag
     */
    function transformCoordinate(canvas, width, height, orientation) {
        switch (orientation) {
            case 5:
            case 6:
            case 7:
            case 8:
                canvas.width = height;
                canvas.height = width;
                break;
            default:
                canvas.width = width;
                canvas.height = height;
        }
        var ctx = canvas.getContext("2d");
        switch (orientation) {
            case 2:
                // horizontal flip
                ctx.translate(width, 0);
                ctx.scale(-1, 1);
                break;
            case 3:
                // 180 rotate left
                ctx.translate(width, height);
                ctx.rotate(Math.PI);
                break;
            case 4:
                // vertical flip
                ctx.translate(0, height);
                ctx.scale(1, -1);
                break;
            case 5:
                // vertical flip + 90 rotate right
                ctx.rotate(0.5 * Math.PI);
                ctx.scale(1, -1);
                break;
            case 6:
                // 90 rotate right
                ctx.rotate(0.5 * Math.PI);
                ctx.translate(0, -height);
                break;
            case 7:
                // horizontal flip + 90 rotate right
                ctx.rotate(0.5 * Math.PI);
                ctx.translate(width, -height);
                ctx.scale(-1, 1);
                break;
            case 8:
                // 90 rotate left
                ctx.rotate(-0.5 * Math.PI);
                ctx.translate(-width, 0);
                break;
            default:
                break;
        }
    }


    /**
     * MegaPixImage class
     */
    function MegaPixImage(srcImage, errorCallback) {
        if (window.Blob && srcImage instanceof Blob) {
            var img = new Image();
            var URL = window.URL && window.URL.createObjectURL ? window.URL :
                    window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL :
                null;
            if (!URL) { throw Error("No createObjectURL function found to create blob url"); }
            img.src = URL.createObjectURL(srcImage);
            this.blob = srcImage;
            srcImage = img;
        }
        if (!srcImage.naturalWidth && !srcImage.naturalHeight) {
            var _this = this;
            srcImage.onload = function() {
                var listeners = _this.imageLoadListeners;
                if (listeners) {
                    _this.imageLoadListeners = null;
                    // IE11 doesn't reliably report actual image dimensions immediately after onload for small files,
                    // so let's push this to the end of the UI thread queue.
                    setTimeout(function() {
                        for (var i=0, len=listeners.length; i<len; i++) {
                            listeners[i]();
                        }
                    }, 0);
                }
            };
            srcImage.onerror = errorCallback;
            this.imageLoadListeners = [];
        }
        this.srcImage = srcImage;
    }

    /**
     * Rendering megapix image into specified target element
     */
    MegaPixImage.prototype.render = function(target, options) {
        if (this.imageLoadListeners) {
            var _this = this;
            this.imageLoadListeners.push(function() { _this.render(target, options) });
            return;
        }
        options = options || {};
        var imgWidth = this.srcImage.naturalWidth, imgHeight = this.srcImage.naturalHeight,
            width = options.width, height = options.height,
            maxWidth = options.maxWidth, maxHeight = options.maxHeight,
            doSquash = !this.blob || this.blob.type === "image/jpeg";
        if (width && !height) {
            height = (imgHeight * width / imgWidth) << 0;
        } else if (height && !width) {
            width = (imgWidth * height / imgHeight) << 0;
        } else {
            width = imgWidth;
            height = imgHeight;
        }
        if (maxWidth && width > maxWidth) {
            width = maxWidth;
            height = (imgHeight * width / imgWidth) << 0;
        }
        if (maxHeight && height > maxHeight) {
            height = maxHeight;
            width = (imgWidth * height / imgHeight) << 0;
        }
        var opt = { width : width, height : height };
        for (var k in options) opt[k] = options[k];

        var tagName = target.tagName.toLowerCase();
        if (tagName === "img") {
            target.src = renderImageToDataURL(this.srcImage, opt, doSquash);
        } else if (tagName === "canvas") {
            renderImageToCanvas(this.srcImage, target, opt, doSquash);
        }
        if (typeof this.onrender === "function") {
            this.onrender(target);
        }
    };

    qq.MegaPixImage = MegaPixImage;
})();

/*globals qq */
/**
 * Draws a thumbnail of a Blob/File/URL onto an <img> or <canvas>.
 *
 * @constructor
 */
qq.ImageGenerator = function(log) {
    "use strict";

    function isImg(el) {
        return el.tagName.toLowerCase() === "img";
    }

    function isCanvas(el) {
        return el.tagName.toLowerCase() === "canvas";
    }

    function isImgCorsSupported() {
        return new Image().crossOrigin !== undefined;
    }

    function isCanvasSupported() {
        var canvas = document.createElement("canvas");

        return canvas.getContext && canvas.getContext("2d");
    }

    // This is only meant to determine the MIME type of a renderable image file.
    // It is used to ensure images drawn from a URL that have transparent backgrounds
    // are rendered correctly, among other things.
    function determineMimeOfFileName(nameWithPath) {
        /*jshint -W015 */
        var pathSegments = nameWithPath.split("/"),
            name = pathSegments[pathSegments.length - 1],
            extension = qq.getExtension(name);

        extension = extension && extension.toLowerCase();

        switch(extension) {
            case "jpeg":
            case "jpg":
                return "image/jpeg";
            case "png":
                return "image/png";
            case "bmp":
                return "image/bmp";
            case "gif":
                return "image/gif";
            case "tiff":
            case "tif":
                return "image/tiff";
        }
    }

    // This will likely not work correctly in IE8 and older.
    // It's only used as part of a formula to determine
    // if a canvas can be used to scale a server-hosted thumbnail.
    // If canvas isn't supported by the UA (IE8 and older)
    // this method should not even be called.
    function isCrossOrigin(url) {
        var targetAnchor = document.createElement("a"),
            targetProtocol, targetHostname, targetPort;

        targetAnchor.href = url;

        targetProtocol = targetAnchor.protocol;
        targetPort = targetAnchor.port;
        targetHostname = targetAnchor.hostname;

        if (targetProtocol.toLowerCase() !== window.location.protocol.toLowerCase()) {
            return true;
        }

        if (targetHostname.toLowerCase() !== window.location.hostname.toLowerCase()) {
            return true;
        }

        // IE doesn't take ports into consideration when determining if two endpoints are same origin.
        if (targetPort !== window.location.port && !qq.ie()) {
            return true;
        }

        return false;
    }

    function registerImgLoadListeners(img, promise) {
        img.onload = function() {
            img.onload = null;
            img.onerror = null;
            promise.success(img);
        };

        img.onerror = function() {
            img.onload = null;
            img.onerror = null;
            log("Problem drawing thumbnail!", "error");
            promise.failure(img, "Problem drawing thumbnail!");
        };
    }

    function registerCanvasDrawImageListener(canvas, promise) {
        // The image is drawn on the canvas by a third-party library,
        // and we want to know when this is completed.  Since the library
        // may invoke drawImage many times in a loop, we need to be called
        // back when the image is fully rendered.  So, we are expecting the
        // code that draws this image to follow a convention that involves a
        // function attached to the canvas instance be invoked when it is done.
        canvas.qqImageRendered = function() {
            promise.success(canvas);
        };
    }

    // Fulfills a `qq.Promise` when an image has been drawn onto the target,
    // whether that is a <canvas> or an <img>.  The attempt is considered a
    // failure if the target is not an <img> or a <canvas>, or if the drawing
    // attempt was not successful.
    function registerThumbnailRenderedListener(imgOrCanvas, promise) {
        var registered = isImg(imgOrCanvas) || isCanvas(imgOrCanvas);

        if (isImg(imgOrCanvas)) {
            registerImgLoadListeners(imgOrCanvas, promise);
        }
        else if (isCanvas(imgOrCanvas)) {
            registerCanvasDrawImageListener(imgOrCanvas, promise);
        }
        else {
            promise.failure(imgOrCanvas);
            log(qq.format("Element container of type {} is not supported!", imgOrCanvas.tagName), "error");
        }

        return registered;
    }

    // Draw a preview iff the current UA can natively display it.
    // Also rotate the image if necessary.
    function draw(fileOrBlob, container, options) {
        var drawPreview = new qq.Promise(),
            identifier = new qq.Identify(fileOrBlob, log),
            maxSize = options.maxSize,
            // jshint eqnull:true
            orient = options.orient == null ? true : options.orient,
            megapixErrorHandler = function() {
                container.onerror = null;
                container.onload = null;
                log("Could not render preview, file may be too large!", "error");
                drawPreview.failure(container, "Browser cannot render image!");
            };

        identifier.isPreviewable().then(
            function(mime) {
                // If options explicitly specify that Orientation is not desired,
                // replace the orient task with a dummy promise that "succeeds" immediately.
                var dummyExif = {
                        parse: function() {
                            return new qq.Promise().success();
                        }
                    },
                    exif = orient ? new qq.Exif(fileOrBlob, log) : dummyExif,
                    mpImg = new qq.MegaPixImage(fileOrBlob, megapixErrorHandler);

                if (registerThumbnailRenderedListener(container, drawPreview)) {
                    exif.parse().then(
                        function(exif) {
                            var orientation = exif && exif.Orientation;

                            mpImg.render(container, {
                                maxWidth: maxSize,
                                maxHeight: maxSize,
                                orientation: orientation,
                                mime: mime
                            });
                        },

                        function(failureMsg) {
                            log(qq.format("EXIF data could not be parsed ({}).  Assuming orientation = 1.", failureMsg));

                            mpImg.render(container, {
                                maxWidth: maxSize,
                                maxHeight: maxSize,
                                mime: mime
                            });
                        }
                    );
                }
            },

            function() {
                log("Not previewable");
                drawPreview.failure(container, "Not previewable");
            }
        );

        return drawPreview;
    }

    function drawOnCanvasOrImgFromUrl(url, canvasOrImg, draw, maxSize) {
        var tempImg = new Image(),
            tempImgRender = new qq.Promise();

        registerThumbnailRenderedListener(tempImg, tempImgRender);

        if (isCrossOrigin(url)) {
            tempImg.crossOrigin = "anonymous";
        }

        tempImg.src = url;

        tempImgRender.then(function() {
            registerThumbnailRenderedListener(canvasOrImg, draw);

            var mpImg = new qq.MegaPixImage(tempImg);
            mpImg.render(canvasOrImg, {
                maxWidth: maxSize,
                maxHeight: maxSize,
                mime: determineMimeOfFileName(url)
            });
        });
    }

    function drawOnImgFromUrlWithCssScaling(url, img, draw, maxSize) {
        registerThumbnailRenderedListener(img, draw);
        qq(img).css({
            maxWidth: maxSize + "px",
            maxHeight: maxSize + "px"
        });

        img.src = url;
    }

    // Draw a (server-hosted) thumbnail given a URL.
    // This will optionally scale the thumbnail as well.
    // It attempts to use <canvas> to scale, but will fall back
    // to max-width and max-height style properties if the UA
    // doesn't support canvas or if the images is cross-domain and
    // the UA doesn't support the crossorigin attribute on img tags,
    // which is required to scale a cross-origin image using <canvas> &
    // then export it back to an <img>.
    function drawFromUrl(url, container, options) {
        var draw = new qq.Promise(),
            scale = options.scale,
            maxSize = scale ? options.maxSize : null;

        // container is an img, scaling needed
        if (scale && isImg(container)) {
            // Iff canvas is available in this UA, try to use it for scaling.
            // Otherwise, fall back to CSS scaling
            if (isCanvasSupported()) {
                // Attempt to use <canvas> for image scaling,
                // but we must fall back to scaling via CSS/styles
                // if this is a cross-origin image and the UA doesn't support <img> CORS.
                if (isCrossOrigin(url) && !isImgCorsSupported()) {
                    drawOnImgFromUrlWithCssScaling(url, container, draw, maxSize);
                }
                else {
                    drawOnCanvasOrImgFromUrl(url, container, draw, maxSize);
                }
            }
            else {
                drawOnImgFromUrlWithCssScaling(url, container, draw, maxSize);
            }
        }
        // container is a canvas, scaling optional
        else if (isCanvas(container)) {
            drawOnCanvasOrImgFromUrl(url, container, draw, maxSize);
        }
        // container is an img & no scaling: just set the src attr to the passed url
        else if (registerThumbnailRenderedListener(container, draw)) {
            container.src = url;
        }

        return draw;
    }


    qq.extend(this, {
        /**
         * Generate a thumbnail.  Depending on the arguments, this may either result in
         * a client-side rendering of an image (if a `Blob` is supplied) or a server-generated
         * image that may optionally be scaled client-side using <canvas> or CSS/styles (as a fallback).
         *
         * @param fileBlobOrUrl a `File`, `Blob`, or a URL pointing to the image
         * @param container <img> or <canvas> to contain the preview
         * @param options possible properties include `maxSize` (int), `orient` (bool - default true), and `resize` (bool - default true)
         * @returns qq.Promise fulfilled when the preview has been drawn, or the attempt has failed
         */
        generate: function(fileBlobOrUrl, container, options) {
            if (qq.isString(fileBlobOrUrl)) {
                log("Attempting to update thumbnail based on server response.");
                return drawFromUrl(fileBlobOrUrl, container, options || {});
            }
            else {
                log("Attempting to draw client-side image preview.");
                return draw(fileBlobOrUrl, container, options || {});
            }
        }
    });

    /*<testing>*/
    this._testing = {};
    this._testing.isImg = isImg;
    this._testing.isCanvas = isCanvas;
    this._testing.isCrossOrigin = isCrossOrigin;
    this._testing.determineMimeOfFileName = determineMimeOfFileName;
    /*</testing>*/
};

/*globals qq */
/**
 * EXIF image data parser.  Currently only parses the Orientation tag value,
 * but this may be expanded to other tags in the future.
 *
 * @param fileOrBlob Attempt to parse EXIF data in this `Blob`
 * @constructor
 */
qq.Exif = function(fileOrBlob, log) {
    "use strict";

    // Orientation is the only tag parsed here at this time.
    var TAG_IDS = [274],
        TAG_INFO = {
            274: {
                name: "Orientation",
                bytes: 2
            }
        };

    // Convert a little endian (hex string) to big endian (decimal).
    function parseLittleEndian(hex) {
        var result = 0,
            pow = 0;

        while (hex.length > 0) {
            result += parseInt(hex.substring(0, 2), 16) * Math.pow(2, pow);
            hex = hex.substring(2, hex.length);
            pow += 8;
        }

        return result;
    }

    // Find the byte offset, of Application Segment 1 (EXIF).
    // External callers need not supply any arguments.
    function seekToApp1(offset, promise) {
        var theOffset = offset,
            thePromise = promise;
        if (theOffset === undefined) {
            theOffset = 2;
            thePromise = new qq.Promise();
        }

        qq.readBlobToHex(fileOrBlob, theOffset, 4).then(function(hex) {
            var match = /^ffe([0-9])/.exec(hex);
            if (match) {
                if (match[1] !== "1") {
                    var segmentLength = parseInt(hex.slice(4, 8), 16);
                    seekToApp1(theOffset + segmentLength + 2, thePromise);
                }
                else {
                    thePromise.success(theOffset);
                }
            }
            else {
                thePromise.failure("No EXIF header to be found!");
            }
        });

        return thePromise;
    }

    // Find the byte offset of Application Segment 1 (EXIF) for valid JPEGs only.
    function getApp1Offset() {
        var promise = new qq.Promise();

        qq.readBlobToHex(fileOrBlob, 0, 6).then(function(hex) {
            if (hex.indexOf("ffd8") !== 0) {
                promise.failure("Not a valid JPEG!");
            }
            else {
                seekToApp1().then(function(offset) {
                    promise.success(offset);
                },
                function(error) {
                    promise.failure(error);
                });
            }
        });

        return promise;
    }

    // Determine the byte ordering of the EXIF header.
    function isLittleEndian(app1Start) {
        var promise = new qq.Promise();

        qq.readBlobToHex(fileOrBlob, app1Start + 10, 2).then(function(hex) {
            promise.success(hex === "4949");
        });

        return promise;
    }

    // Determine the number of directory entries in the EXIF header.
    function getDirEntryCount(app1Start, littleEndian) {
        var promise = new qq.Promise();

        qq.readBlobToHex(fileOrBlob, app1Start + 18, 2).then(function(hex) {
            if (littleEndian) {
                return promise.success(parseLittleEndian(hex));
            }
            else {
                promise.success(parseInt(hex, 16));
            }
        });

        return promise;
    }

    // Get the IFD portion of the EXIF header as a hex string.
    function getIfd(app1Start, dirEntries) {
        var offset = app1Start + 20,
            bytes = dirEntries * 12;

        return qq.readBlobToHex(fileOrBlob, offset, bytes);
    }

    // Obtain an array of all directory entries (as hex strings) in the EXIF header.
    function getDirEntries(ifdHex) {
        var entries = [],
            offset = 0;

        while (offset+24 <= ifdHex.length) {
            entries.push(ifdHex.slice(offset, offset + 24));
            offset += 24;
        }

        return entries;
    }

    // Obtain values for all relevant tags and return them.
    function getTagValues(littleEndian, dirEntries) {
        var TAG_VAL_OFFSET = 16,
            tagsToFind = qq.extend([], TAG_IDS),
            vals = {};

        qq.each(dirEntries, function(idx, entry) {
            var idHex = entry.slice(0, 4),
                id = littleEndian ? parseLittleEndian(idHex) : parseInt(idHex, 16),
                tagsToFindIdx = tagsToFind.indexOf(id),
                tagValHex, tagName, tagValLength;

            if (tagsToFindIdx >= 0) {
                tagName = TAG_INFO[id].name;
                tagValLength = TAG_INFO[id].bytes;
                tagValHex = entry.slice(TAG_VAL_OFFSET, TAG_VAL_OFFSET + (tagValLength*2));
                vals[tagName] = littleEndian ? parseLittleEndian(tagValHex) : parseInt(tagValHex, 16);

                tagsToFind.splice(tagsToFindIdx, 1);
            }

            if (tagsToFind.length === 0) {
                return false;
            }
        });

        return vals;
    }

    qq.extend(this, {
        /**
         * Attempt to parse the EXIF header for the `Blob` associated with this instance.
         *
         * @returns {qq.Promise} To be fulfilled when the parsing is complete.
         * If successful, the parsed EXIF header as an object will be included.
         */
        parse: function() {
            var parser = new qq.Promise(),
                onParseFailure = function(message) {
                    log(qq.format("EXIF header parse failed: '{}' ", message));
                    parser.failure(message);
                };

            getApp1Offset().then(function(app1Offset) {
                log(qq.format("Moving forward with EXIF header parsing for '{}'", fileOrBlob.name === undefined ? "blob" : fileOrBlob.name));

                isLittleEndian(app1Offset).then(function(littleEndian) {

                    log(qq.format("EXIF Byte order is {} endian", littleEndian ? "little" : "big"));

                    getDirEntryCount(app1Offset, littleEndian).then(function(dirEntryCount) {

                        log(qq.format("Found {} APP1 directory entries", dirEntryCount));

                        getIfd(app1Offset, dirEntryCount).then(function(ifdHex) {
                            var dirEntries = getDirEntries(ifdHex),
                                tagValues = getTagValues(littleEndian, dirEntries);

                            log("Successfully parsed some EXIF tags");

                            parser.success(tagValues);
                        }, onParseFailure);
                    }, onParseFailure);
                }, onParseFailure);
            }, onParseFailure);

            return parser;
        }
    });

    /*<testing>*/
    this._testing = {};
    this._testing.parseLittleEndian = parseLittleEndian;
    /*</testing>*/
};

/*globals qq */
qq.Identify = function(fileOrBlob, log) {
    "use strict";

    function isIdentifiable(magicBytes, questionableBytes) {
        var identifiable = false,
            magicBytesEntries = [].concat(magicBytes);

        qq.each(magicBytesEntries, function(idx, magicBytesArrayEntry) {
            if (questionableBytes.indexOf(magicBytesArrayEntry) === 0) {
                identifiable = true;
                return false;
            }
        });

        return identifiable;
    }

    qq.extend(this, {
        /**
         * Determines if a Blob can be displayed natively in the current browser.  This is done by reading magic
         * bytes in the beginning of the file, so this is an asynchronous operation.  Before we attempt to read the
         * file, we will examine the blob's type attribute to save CPU cycles.
         *
         * @returns {qq.Promise} Promise that is fulfilled when identification is complete.
         * If successful, the MIME string is passed to the success handler.
         */
        isPreviewable: function() {
            var self = this,
                idenitifer = new qq.Promise(),
                previewable = false,
                name = fileOrBlob.name === undefined ? "blob" : fileOrBlob.name;

            log(qq.format("Attempting to determine if {} can be rendered in this browser", name));

            log("First pass: check type attribute of blob object.");

            if (this.isPreviewableSync()) {
                log("Second pass: check for magic bytes in file header.");

                qq.readBlobToHex(fileOrBlob, 0, 4).then(function(hex) {
                    qq.each(self.PREVIEWABLE_MIME_TYPES, function(mime, bytes) {
                        if (isIdentifiable(bytes, hex)) {
                            // Safari is the only supported browser that can deal with TIFFs natively,
                            // so, if this is a TIFF and the UA isn't Safari, declare this file "non-previewable".
                            if (mime !== "image/tiff" || qq.supportedFeatures.tiffPreviews) {
                                previewable = true;
                                idenitifer.success(mime);
                            }

                            return false;
                        }
                    });

                    log(qq.format("'{}' is {} able to be rendered in this browser", name, previewable ? "" : "NOT"));

                    if (!previewable) {
                        idenitifer.failure();
                    }
                },
                function() {
                    log("Error reading file w/ name '" + name + "'.  Not able to be rendered in this browser.");
                    idenitifer.failure();
                });
            }
            else {
                idenitifer.failure();
            }

            return idenitifer;
        },

        /**
         * Determines if a Blob can be displayed natively in the current browser.  This is done by checking the
         * blob's type attribute.  This is a synchronous operation, useful for situations where an asynchronous operation
         * would be challenging to support.  Note that the blob's type property is not as accurate as reading the
         * file's magic bytes.
         *
         * @returns {Boolean} true if the blob can be rendered in the current browser
         */
        isPreviewableSync: function() {
            var fileMime = fileOrBlob.type,
                // Assumption: This will only ever be executed in browsers that support `Object.keys`.
                isRecognizedImage = qq.indexOf(Object.keys(this.PREVIEWABLE_MIME_TYPES), fileMime) >= 0,
                previewable = false,
                name = fileOrBlob.name === undefined ? "blob" : fileOrBlob.name;

            if (isRecognizedImage) {
                if (fileMime === "image/tiff") {
                    previewable = qq.supportedFeatures.tiffPreviews;
                }
                else {
                    previewable = true;
                }
            }

            !previewable && log(name + " is not previewable in this browser per the blob's type attr");

            return previewable;
        }
    });
};

qq.Identify.prototype.PREVIEWABLE_MIME_TYPES = {
    "image/jpeg": "ffd8ff",
    "image/gif": "474946",
    "image/png": "89504e",
    "image/bmp": "424d",
    "image/tiff": ["49492a00", "4d4d002a"]
};

/*globals qq*/
/**
 * Attempts to validate an image, wherever possible.
 *
 * @param blob File or Blob representing a user-selecting image.
 * @param log Uses this to post log messages to the console.
 * @constructor
 */
qq.ImageValidation = function(blob, log) {
    "use strict";

    /**
     * @param limits Object with possible image-related limits to enforce.
     * @returns {boolean} true if at least one of the limits has a non-zero value
     */
    function hasNonZeroLimits(limits) {
        var atLeastOne = false;

        qq.each(limits, function(limit, value) {
            if (value > 0) {
                atLeastOne = true;
                return false;
            }
        });

        return atLeastOne;
    }

    /**
     * @returns {qq.Promise} The promise is a failure if we can't obtain the width & height.
     * Otherwise, `success` is called on the returned promise with an object containing
     * `width` and `height` properties.
     */
    function getWidthHeight() {
        var sizeDetermination = new qq.Promise();

        new qq.Identify(blob, log).isPreviewable().then(function() {
            var image = new Image(),
                url = window.URL && window.URL.createObjectURL ? window.URL :
                      window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL :
                      null;

            if (url) {
                image.onerror = function() {
                    log("Cannot determine dimensions for image.  May be too large.", "error");
                    sizeDetermination.failure();
                };

                image.onload = function() {
                    sizeDetermination.success({
                        width: this.width,
                        height: this.height
                    });
                };

                image.src = url.createObjectURL(blob);
            }
            else {
                log("No createObjectURL function available to generate image URL!", "error");
                sizeDetermination.failure();
            }
        }, sizeDetermination.failure);

        return sizeDetermination;
    }

    /**
     *
     * @param limits Object with possible image-related limits to enforce.
     * @param dimensions Object containing `width` & `height` properties for the image to test.
     * @returns {String || undefined} The name of the failing limit.  Undefined if no failing limits.
     */
    function getFailingLimit(limits, dimensions) {
        var failingLimit;

        qq.each(limits, function(limitName, limitValue) {
            if (limitValue > 0) {
                var limitMatcher = /(max|min)(Width|Height)/.exec(limitName),
                    dimensionPropName = limitMatcher[2].charAt(0).toLowerCase() + limitMatcher[2].slice(1),
                    actualValue = dimensions[dimensionPropName];

                /*jshint -W015*/
                switch(limitMatcher[1]) {
                    case "min":
                        if (actualValue < limitValue) {
                            failingLimit = limitName;
                            return false;
                        }
                        break;
                    case "max":
                        if (actualValue > limitValue) {
                            failingLimit = limitName;
                            return false;
                        }
                        break;
                }
            }
        });

        return failingLimit;
    }

    /**
     * Validate the associated blob.
     *
     * @param limits
     * @returns {qq.Promise} `success` is called on the promise is the image is valid or
     * if the blob is not an image, or if the image is not verifiable.
     * Otherwise, `failure` with the name of the failing limit.
     */
    this.validate = function(limits) {
        var validationEffort = new qq.Promise();

        log("Attempting to validate image.");

        if (hasNonZeroLimits(limits)) {
            getWidthHeight().then(function(dimensions) {
                var failingLimit = getFailingLimit(limits, dimensions);

                if (failingLimit) {
                    validationEffort.failure(failingLimit);
                }
                else {
                    validationEffort.success();
                }
            }, validationEffort.success);
        }
        else {
            validationEffort.success();
        }

        return validationEffort;
    };
};

/* globals qq */
/**
 * Module used to control populating the initial list of files.
 *
 * @constructor
 */
qq.Session = function(spec) {
    "use strict";

    var options = {
        endpoint: null,
        params: {},
        customHeaders: {},
        cors: {},
        addFileRecord: function(sessionData) {},
        log: function(message, level) {}
    };

    qq.extend(options, spec, true);


    function isJsonResponseValid(response) {
        if (qq.isArray(response)) {
            return true;
        }

        options.log("Session response is not an array.", "error");
    }

    function handleFileItems(fileItems, success, xhrOrXdr, promise) {
        var someItemsIgnored = false;

        success = success && isJsonResponseValid(fileItems);

        if (success) {
            qq.each(fileItems, function(idx, fileItem) {
                /* jshint eqnull:true */
                if (fileItem.uuid == null) {
                    someItemsIgnored = true;
                    options.log(qq.format("Session response item {} did not include a valid UUID - ignoring.", idx), "error");
                }
                else if (fileItem.name == null) {
                    someItemsIgnored = true;
                    options.log(qq.format("Session response item {} did not include a valid name - ignoring.", idx), "error");
                }
                else {
                    try {
                        options.addFileRecord(fileItem);
                        return true;
                    }
                    catch(err) {
                        someItemsIgnored = true;
                        options.log(err.message, "error");
                    }
                }

                return false;
            });
        }

        promise[success && !someItemsIgnored ? "success" : "failure"](fileItems, xhrOrXdr);
    }

    // Initiate a call to the server that will be used to populate the initial file list.
    // Returns a `qq.Promise`.
    this.refresh = function() {
        /*jshint indent:false */
        var refreshEffort = new qq.Promise(),
            refreshCompleteCallback = function(response, success, xhrOrXdr) {
                handleFileItems(response, success, xhrOrXdr, refreshEffort);
            },
            requsterOptions = qq.extend({}, options),
            requester = new qq.SessionAjaxRequester(
                qq.extend(requsterOptions, {onComplete: refreshCompleteCallback})
            );

        requester.queryServer();

        return refreshEffort;
    };
};

/*globals qq, XMLHttpRequest*/
/**
 * Thin module used to send GET requests to the server, expecting information about session
 * data used to initialize an uploader instance.
 *
 * @param spec Various options used to influence the associated request.
 * @constructor
 */
qq.SessionAjaxRequester = function(spec) {
    "use strict";

    var requester,
        options = {
            endpoint: null,
            customHeaders: {},
            params: {},
            cors: {
                expected: false,
                sendCredentials: false
            },
            onComplete: function(response, success, xhrOrXdr) {},
            log: function(str, level) {}
        };

    qq.extend(options, spec);

    function onComplete(id, xhrOrXdr, isError) {
        var response = null;

        /* jshint eqnull:true */
        if (xhrOrXdr.responseText != null) {
            try {
                response = qq.parseJson(xhrOrXdr.responseText);
            }
            catch(err) {
                options.log("Problem parsing session response: " + err.message, "error");
                isError = true;
            }
        }

        options.onComplete(response, !isError, xhrOrXdr);
    }

    requester = qq.extend(this, new qq.AjaxRequester({
        acceptHeader: "application/json",
        validMethods: ["GET"],
        method: "GET",
        endpointStore: {
            get: function() {
                return options.endpoint;
            }
        },
        customHeaders: options.customHeaders,
        log: options.log,
        onComplete: onComplete,
        cors: options.cors
    }));


    qq.extend(this, {
        queryServer: function() {
            var params = qq.extend({}, options.params);

            options.log("Session query request.");

            requester.initTransport("sessionRefresh")
                .withParams(params)
                .withCacheBuster()
                .send();
        }
    });
};

/* globals qq */
/**
 * Module that handles support for existing forms.
 *
 * @param options Options passed from the integrator-supplied options related to form support.
 * @param startUpload Callback to invoke when files "stored" should be uploaded.
 * @param log Proxy for the logger
 * @constructor
 */
qq.FormSupport = function(options, startUpload, log) {
    "use strict";
    var self  = this,
        interceptSubmit = options.interceptSubmit,
        formEl = options.element,
        autoUpload = options.autoUpload;

    // Available on the public API associated with this module.
    qq.extend(this, {
        // To be used by the caller to determine if the endpoint will be determined by some processing
        // that occurs in this module, such as if the form has an action attribute.
        // Ignore if `attachToForm === false`.
        newEndpoint: null,

        // To be used by the caller to determine if auto uploading should be allowed.
        // Ignore if `attachToForm === false`.
        newAutoUpload: autoUpload,

        // true if a form was detected and is being tracked by this module
        attachedToForm: false,

        // Returns an object with names and values for all valid form elements associated with the attached form.
        getFormInputsAsObject: function() {
            /* jshint eqnull:true */
            if (formEl == null) {
                return null;
            }

            return self._form2Obj(formEl);
        }
    });

    // If the form contains an action attribute, this should be the new upload endpoint.
    function determineNewEndpoint(formEl) {
        if (formEl.getAttribute("action")) {
            self.newEndpoint = formEl.getAttribute("action");
        }
    }

    // Return true only if the form is valid, or if we cannot make this determination.
    // If the form is invalid, ensure invalid field(s) are highlighted in the UI.
    function validateForm(formEl, nativeSubmit) {
        if (formEl.checkValidity && !formEl.checkValidity()) {
            log("Form did not pass validation checks - will not upload.", "error");
            nativeSubmit();
        }
        else {
            return true;
        }
    }

    // Intercept form submit attempts, unless the integrator has told us not to do this.
    function maybeUploadOnSubmit(formEl) {
        var nativeSubmit = formEl.submit;

        // Intercept and squelch submit events.
        qq(formEl).attach("submit", function(event) {
            event = event || window.event;

            if (event.preventDefault) {
                event.preventDefault();
            }
            else {
                event.returnValue = false;
            }

            validateForm(formEl, nativeSubmit) && startUpload();
        });

        // The form's `submit()` function may be called instead (i.e. via jQuery.submit()).
        // Intercept that too.
        formEl.submit = function() {
            validateForm(formEl, nativeSubmit) && startUpload();
        };
    }

    // If the element value passed from the uploader is a string, assume it is an element ID - select it.
    // The rest of the code in this module depends on this being an HTMLElement.
    function determineFormEl(formEl) {
        if (formEl) {
            if (qq.isString(formEl)) {
                formEl = document.getElementById(formEl);
            }

            if (formEl) {
                log("Attaching to form element.");
                determineNewEndpoint(formEl);
                interceptSubmit && maybeUploadOnSubmit(formEl);
            }
        }

        return formEl;
    }

    formEl = determineFormEl(formEl);
    this.attachedToForm = !!formEl;
};

qq.extend(qq.FormSupport.prototype, {
    // Converts all relevant form fields to key/value pairs.  This is meant to mimic the data a browser will
    // construct from a given form when the form is submitted.
    _form2Obj: function(form) {
        "use strict";
        var obj = {},
            notIrrelevantType = function(type) {
                var irrelevantTypes = [
                    "button",
                    "image",
                    "reset",
                    "submit"
                ];

                return qq.indexOf(irrelevantTypes, type.toLowerCase()) < 0;
            },
            radioOrCheckbox = function(type) {
                return qq.indexOf(["checkbox", "radio"], type.toLowerCase()) >= 0;
            },
            ignoreValue = function(el) {
                if (radioOrCheckbox(el.type) && !el.checked) {
                    return true;
                }

                return el.disabled && el.type.toLowerCase() !== "hidden";
            },
            selectValue = function(select) {
                var value = null;

                qq.each(qq(select).children(), function(idx, child) {
                    if (child.tagName.toLowerCase() === "option" && child.selected) {
                        value = child.value;
                        return false;
                    }
                });

                return value;
            };

        qq.each(form.elements, function(idx, el) {
            if ((qq.isInput(el, true) || el.tagName.toLowerCase() === "textarea") &&
                notIrrelevantType(el.type) &&
                !ignoreValue(el)) {

                obj[el.name] = el.value;
            }
            else if (el.tagName.toLowerCase() === "select" && !ignoreValue(el)) {
                var value = selectValue(el);

                if (value !== null) {
                    obj[el.name] = value;
                }
            }
        });

        return obj;
    }
});

/* globals qq, ExifRestorer */
/**
 * Controls generation of scaled images based on a reference image encapsulated in a `File` or `Blob`.
 * Scaled images are generated and converted to blobs on-demand.
 * Multiple scaled images per reference image with varying sizes and other properties are supported.
 *
 * @param spec Information about the scaled images to generate.
 * @param log Logger instance
 * @constructor
 */
qq.Scaler = function(spec, log) {
    "use strict";

    var self = this,
        includeReference = spec.sendOriginal,
        orient = spec.orient,
        defaultType = spec.defaultType,
        defaultQuality = spec.defaultQuality / 100,
        failedToScaleText = spec.failureText,
        includeExif = spec.includeExif,
        sizes = this._getSortedSizes(spec.sizes);

    // Revealed API for instances of this module
    qq.extend(this, {
        // If no targeted sizes have been declared or if this browser doesn't support
        // client-side image preview generation, there is no scaling to do.
        enabled: qq.supportedFeatures.scaling && sizes.length > 0,

        getFileRecords: function(originalFileUuid, originalFileName, originalBlobOrBlobData) {
            var self = this,
                records = [],
                originalBlob = originalBlobOrBlobData.blob ? originalBlobOrBlobData.blob : originalBlobOrBlobData,
                idenitifier = new qq.Identify(originalBlob, log);

            // If the reference file cannot be rendered natively, we can't create scaled versions.
            if (idenitifier.isPreviewableSync()) {
                // Create records for each scaled version & add them to the records array, smallest first.
                qq.each(sizes, function(idx, sizeRecord) {
                    var outputType = self._determineOutputType({
                        defaultType: defaultType,
                        requestedType: sizeRecord.type,
                        refType: originalBlob.type
                    });

                    records.push({
                        uuid: qq.getUniqueId(),
                        name: self._getName(originalFileName, {
                            name: sizeRecord.name,
                            type: outputType,
                            refType: originalBlob.type
                        }),
                        blob: new qq.BlobProxy(originalBlob,
                            qq.bind(self._generateScaledImage, self, {
                                maxSize: sizeRecord.maxSize,
                                orient: orient,
                                type: outputType,
                                quality: defaultQuality,
                                failedText: failedToScaleText,
                                includeExif: includeExif,
                                log: log
                            }))
                        }
                    );
                });

                includeReference && records.push({
                    uuid: originalFileUuid,
                    name: originalFileName,
                    blob: originalBlob
                });
            }
            else {
                records.push({
                    uuid: originalFileUuid,
                    name: originalFileName,
                    blob: originalBlob
                });
            }

            return records;
        },

        handleNewFile: function(file, name, uuid, size, fileList, uuidParamName, batchId, api) {
            var self = this,
                buttonId = file.qqButtonId || (file.blob && file.blob.qqButtonId),
                scaledIds = [],
                originalId = null,
                addFileToHandler = api.addFileToHandler,
                uploadData = api.uploadData,
                paramsStore = api.paramsStore,
                proxyGroupId = qq.getUniqueId();

            qq.each(self.getFileRecords(uuid, name, file), function(idx, record) {
                var relatedBlob = file,
                    relatedSize = size,
                    id;

                if (record.blob instanceof qq.BlobProxy) {
                    relatedBlob = record.blob;
                    relatedSize = -1;
                }

                id = uploadData.addFile({
                    uuid: record.uuid,
                    name: record.name,
                    size: relatedSize,
                    batchId: batchId,
                    proxyGroupId: proxyGroupId
                });

                if (record.blob instanceof qq.BlobProxy) {
                    scaledIds.push(id);
                }
                else {
                    originalId = id;
                }

                addFileToHandler(id, relatedBlob);

                fileList.push({id: id, file: relatedBlob});

            });

            // If we are potentially uploading an original file and some scaled versions,
            // ensure the scaled versions include reference's to the parent's UUID and size
            // in their associated upload requests.
            if (originalId !== null) {
                qq.each(scaledIds, function(idx, scaledId) {
                    var params = {
                        qqparentuuid: uploadData.retrieve({id: originalId}).uuid,
                        qqparentsize: uploadData.retrieve({id: originalId}).size
                    };

                    // Make SURE the UUID for each scaled image is sent with the upload request,
                    // to be consistent (since we need to ensure it is sent for the original file as well).
                    params[uuidParamName] = uploadData.retrieve({id: scaledId}).uuid;

                    uploadData.setParentId(scaledId, originalId);
                    paramsStore.addReadOnly(scaledId, params);
                });

                // If any scaled images are tied to this parent image, be SURE we send its UUID as an upload request
                // parameter as well.
                if (scaledIds.length) {
                    (function() {
                        var param = {};
                        param[uuidParamName] = uploadData.retrieve({id: originalId}).uuid;
                        paramsStore.addReadOnly(originalId, param);
                    }());
                }
            }
        }
    });
};

qq.extend(qq.Scaler.prototype, {
    scaleImage: function(id, specs, api) {
        "use strict";

        if (!qq.supportedFeatures.scaling) {
            throw new qq.Error("Scaling is not supported in this browser!");
        }

        var scalingEffort = new qq.Promise(),
            log = api.log,
            file = api.getFile(id),
            uploadData = api.uploadData.retrieve({id: id}),
            name = uploadData && uploadData.name,
            uuid = uploadData && uploadData.uuid,
            scalingOptions = {
                sendOriginal: false,
                orient: specs.orient,
                defaultType: specs.type || null,
                defaultQuality: specs.quality,
                failedToScaleText: "Unable to scale",
                sizes: [{name: "", maxSize: specs.maxSize}]
            },
            scaler = new qq.Scaler(scalingOptions, log);

        if (!qq.Scaler || !qq.supportedFeatures.imagePreviews || !file) {
            scalingEffort.failure();

            log("Could not generate requested scaled image for " + id + ".  " +
                "Scaling is either not possible in this browser, or the file could not be located.", "error");
        }
        else {
            (qq.bind(function() {
                // Assumption: There will never be more than one record
                var record = scaler.getFileRecords(uuid, name, file)[0];

                if (record && record.blob instanceof qq.BlobProxy) {
                    record.blob.create().then(scalingEffort.success, scalingEffort.failure);
                }
                else {
                    log(id + " is not a scalable image!", "error");
                    scalingEffort.failure();
                }
            }, this)());
        }

        return scalingEffort;
    },

    // NOTE: We cannot reliably determine at this time if the UA supports a specific MIME type for the target format.
    // image/jpeg and image/png are the only safe choices at this time.
    _determineOutputType: function(spec) {
        "use strict";

        var requestedType = spec.requestedType,
            defaultType = spec.defaultType,
            referenceType = spec.refType;

        // If a default type and requested type have not been specified, this should be a
        // JPEG if the original type is a JPEG, otherwise, a PNG.
        if (!defaultType && !requestedType) {
            if (referenceType !== "image/jpeg") {
                return "image/png";
            }
            return referenceType;
        }

        // A specified default type is used when a requested type is not specified.
        if (!requestedType) {
            return defaultType;
        }

        // If requested type is specified, use it, as long as this recognized type is supported by the current UA
        if (qq.indexOf(Object.keys(qq.Identify.prototype.PREVIEWABLE_MIME_TYPES), requestedType) >= 0) {
            if (requestedType === "image/tiff") {
                return qq.supportedFeatures.tiffPreviews ? requestedType : defaultType;
            }

            return requestedType;
        }

        return defaultType;
    },

    // Get a file name for a generated scaled file record, based on the provided scaled image description
    _getName: function(originalName, scaledVersionProperties) {
        "use strict";

        var startOfExt = originalName.lastIndexOf("."),
            nameAppendage = " (" + scaledVersionProperties.name + ")",
            versionType = scaledVersionProperties.type || "image/png",
            referenceType = scaledVersionProperties.refType,
            scaledName = "",
            scaledExt = qq.getExtension(originalName);

        if (startOfExt >= 0) {
            scaledName = originalName.substr(0, startOfExt);

            if (referenceType !== versionType) {
                scaledExt = versionType.split("/")[1];
            }

            scaledName += nameAppendage + "." + scaledExt;
        }
        else {
            scaledName = originalName + nameAppendage;
        }

        return scaledName;
    },

    // We want the smallest scaled file to be uploaded first
    _getSortedSizes: function(sizes) {
        "use strict";

        sizes = qq.extend([], sizes);

        return sizes.sort(function(a, b) {
            if (a.maxSize > b.maxSize) {
                return 1;
            }
            if (a.maxSize < b.maxSize) {
                return -1;
            }
            return 0;
        });
    },

    _generateScaledImage: function(spec, sourceFile) {
        "use strict";

        var self = this,
            log = spec.log,
            maxSize = spec.maxSize,
            orient = spec.orient,
            type = spec.type,
            quality = spec.quality,
            failedText = spec.failedText,
            includeExif = spec.includeExif && sourceFile.type === "image/jpeg" && type === "image/jpeg",
            scalingEffort = new qq.Promise(),
            imageGenerator = new qq.ImageGenerator(log),
            canvas = document.createElement("canvas");

        log("Attempting to generate scaled version for " + sourceFile.name);

        imageGenerator.generate(sourceFile, canvas, {maxSize: maxSize, orient: orient}).then(function() {
            var scaledImageDataUri = canvas.toDataURL(type, quality),
                signalSuccess = function() {
                    log("Success generating scaled version for " + sourceFile.name);
                    var blob = self._dataUriToBlob(scaledImageDataUri);
                    scalingEffort.success(blob);
                };

            if (includeExif) {
                self._insertExifHeader(sourceFile, scaledImageDataUri, log).then(function(scaledImageDataUriWithExif) {
                    scaledImageDataUri = scaledImageDataUriWithExif;
                    signalSuccess();
                },
                function() {
                    log("Problem inserting EXIF header into scaled image.  Using scaled image w/out EXIF data.", "error");
                    signalSuccess();
                });
            }
            else {
                signalSuccess();
            }
        }, function() {
            log("Failed attempt to generate scaled version for " + sourceFile.name, "error");
            scalingEffort.failure(failedText);
        });

        return scalingEffort;
    },

    // Attempt to insert the original image's EXIF header into a scaled version.
    _insertExifHeader: function(originalImage, scaledImageDataUri, log) {
        "use strict";

        var reader = new FileReader(),
            insertionEffort = new qq.Promise(),
            originalImageDataUri = "";

        reader.onload = function() {
            originalImageDataUri = reader.result;
            insertionEffort.success(ExifRestorer.restore(originalImageDataUri, scaledImageDataUri));
        };

        reader.onerror = function() {
            log("Problem reading " + originalImage.name + " during attempt to transfer EXIF data to scaled version.", "error");
            insertionEffort.failure();
        };

        reader.readAsDataURL(originalImage);

        return insertionEffort;
    },


    _dataUriToBlob: function(dataUri) {
        "use strict";

        var byteString, mimeString, arrayBuffer, intArray;

        // convert base64 to raw binary data held in a string
        if (dataUri.split(",")[0].indexOf("base64") >= 0) {
            byteString = atob(dataUri.split(",")[1]);
        }
        else {
            byteString = decodeURI(dataUri.split(",")[1]);
        }

        // extract the MIME
        mimeString = dataUri.split(",")[0]
            .split(":")[1]
            .split(";")[0];

        // write the bytes of the binary string to an ArrayBuffer
        arrayBuffer = new ArrayBuffer(byteString.length);
        intArray = new Uint8Array(arrayBuffer);
        qq.each(byteString, function(idx, character) {
            intArray[idx] = character.charCodeAt(0);
        });

        return this._createBlob(arrayBuffer, mimeString);
    },

    _createBlob: function(data, mime) {
        "use strict";

        var BlobBuilder = window.BlobBuilder ||
                window.WebKitBlobBuilder ||
                window.MozBlobBuilder ||
                window.MSBlobBuilder,
            blobBuilder = BlobBuilder && new BlobBuilder();

        if (blobBuilder) {
            blobBuilder.append(data);
            return blobBuilder.getBlob(mime);
        }
        else {
            return new Blob([data], {type: mime});
        }
    }
});

//Based on MinifyJpeg
//http://elicon.blog57.fc2.com/blog-entry-206.html

var ExifRestorer = (function()
{
   
	var ExifRestorer = {};
	 
    ExifRestorer.KEY_STR = "ABCDEFGHIJKLMNOP" +
                         "QRSTUVWXYZabcdef" +
                         "ghijklmnopqrstuv" +
                         "wxyz0123456789+/" +
                         "=";

    ExifRestorer.encode64 = function(input)
    {
        var output = "",
            chr1, chr2, chr3 = "",
            enc1, enc2, enc3, enc4 = "",
            i = 0;

        do {
            chr1 = input[i++];
            chr2 = input[i++];
            chr3 = input[i++];

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
               enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
               enc4 = 64;
            }

            output = output +
               this.KEY_STR.charAt(enc1) +
               this.KEY_STR.charAt(enc2) +
               this.KEY_STR.charAt(enc3) +
               this.KEY_STR.charAt(enc4);
            chr1 = chr2 = chr3 = "";
            enc1 = enc2 = enc3 = enc4 = "";
        } while (i < input.length);

        return output;
    };
    
    ExifRestorer.restore = function(origFileBase64, resizedFileBase64)
    {
        var expectedBase64Header = "data:image/jpeg;base64,";

        if (!origFileBase64.match(expectedBase64Header))
        {
        	return resizedFileBase64;
        }       
        
        var rawImage = this.decode64(origFileBase64.replace(expectedBase64Header, ""));
        var segments = this.slice2Segments(rawImage);
                
        var image = this.exifManipulation(resizedFileBase64, segments);
        
        return expectedBase64Header + this.encode64(image);
        
    };


    ExifRestorer.exifManipulation = function(resizedFileBase64, segments)
    {
            var exifArray = this.getExifArray(segments),
                newImageArray = this.insertExif(resizedFileBase64, exifArray),
                aBuffer = new Uint8Array(newImageArray);

            return aBuffer;
    };


    ExifRestorer.getExifArray = function(segments)
    {
            var seg;
            for (var x = 0; x < segments.length; x++)
            {
                seg = segments[x];
                if (seg[0] == 255 & seg[1] == 225) //(ff e1)
                {
                    return seg;
                }
            }
            return [];
    };


    ExifRestorer.insertExif = function(resizedFileBase64, exifArray)
    {
            var imageData = resizedFileBase64.replace("data:image/jpeg;base64,", ""),
                buf = this.decode64(imageData),
                separatePoint = buf.indexOf(255,3),
                mae = buf.slice(0, separatePoint),
                ato = buf.slice(separatePoint),
                array = mae;

            array = array.concat(exifArray);
            array = array.concat(ato);
           return array;
    };


    
    ExifRestorer.slice2Segments = function(rawImageArray)
    {
        var head = 0,
            segments = [];

        while (1)
        {
            if (rawImageArray[head] == 255 & rawImageArray[head + 1] == 218){break;}
            if (rawImageArray[head] == 255 & rawImageArray[head + 1] == 216)
            {
                head += 2;
            }
            else
            {
                var length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3],
                    endPoint = head + length + 2,
                    seg = rawImageArray.slice(head, endPoint);
                segments.push(seg);
                head = endPoint;
            }
            if (head > rawImageArray.length){break;}
        }

        return segments;
    };


    
    ExifRestorer.decode64 = function(input) 
    {
        var output = "",
            chr1, chr2, chr3 = "",
            enc1, enc2, enc3, enc4 = "",
            i = 0,
            buf = [];

        // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
        var base64test = /[^A-Za-z0-9\+\/\=]/g;
        if (base64test.exec(input)) {
            throw new Error("There were invalid base64 characters in the input text.  " +
                "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='");
        }
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        do {
            enc1 = this.KEY_STR.indexOf(input.charAt(i++));
            enc2 = this.KEY_STR.indexOf(input.charAt(i++));
            enc3 = this.KEY_STR.indexOf(input.charAt(i++));
            enc4 = this.KEY_STR.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            buf.push(chr1);

            if (enc3 != 64) {
               buf.push(chr2);
            }
            if (enc4 != 64) {
               buf.push(chr3);
            }

            chr1 = chr2 = chr3 = "";
            enc1 = enc2 = enc3 = enc4 = "";

        } while (i < input.length);

        return buf;
    };

    
    return ExifRestorer;
})();

/* globals qq */
/**
 * Keeps a running tally of total upload progress for a batch of files.
 *
 * @param callback Invoked when total progress changes, passing calculated total loaded & total size values.
 * @param getSize Function that returns the size of a file given its ID
 * @constructor
 */
qq.TotalProgress = function(callback, getSize) {
    "use strict";

    var perFileProgress = {},
        totalLoaded = 0,
        totalSize = 0,

        lastLoadedSent = -1,
        lastTotalSent = -1,
        callbackProxy = function(loaded, total) {
            if (loaded !== lastLoadedSent || total !== lastTotalSent) {
                callback(loaded, total);
            }

            lastLoadedSent = loaded;
            lastTotalSent = total;
        },

        /**
         * @param failed Array of file IDs that have failed
         * @param retryable Array of file IDs that are retryable
         * @returns true if none of the failed files are eligible for retry
         */
        noRetryableFiles = function(failed, retryable) {
            var none = true;

            qq.each(failed, function(idx, failedId) {
                if (qq.indexOf(retryable, failedId) >= 0) {
                    none = false;
                    return false;
                }
            });

            return none;
        },

        onCancel = function(id) {
            updateTotalProgress(id, -1, -1);
            delete perFileProgress[id];
        },

        onAllComplete = function(successful, failed, retryable) {
            if (failed.length === 0 || noRetryableFiles(failed, retryable)) {
                callbackProxy(totalSize, totalSize);
                this.reset();
            }
        },

        onNew = function(id) {
            var size = getSize(id);

            // We might not know the size yet, such as for blob proxies
            if (size > 0) {
                updateTotalProgress(id, 0, size);
                perFileProgress[id] = {loaded: 0, total: size};
            }
        },

        /**
         * Invokes the callback with the current total progress of all files in the batch.  Called whenever it may
         * be appropriate to re-calculate and dissemenate this data.
         *
         * @param id ID of a file that has changed in some important way
         * @param newLoaded New loaded value for this file.  -1 if this value should no longer be part of calculations
         * @param newTotal New total size of the file.  -1 if this value should no longer be part of calculations
         */
        updateTotalProgress = function(id, newLoaded, newTotal) {
            var oldLoaded = perFileProgress[id] ? perFileProgress[id].loaded : 0,
                oldTotal = perFileProgress[id] ? perFileProgress[id].total : 0;

            if (newLoaded === -1 && newTotal === -1) {
                totalLoaded -= oldLoaded;
                totalSize -= oldTotal;
            }
            else {
                if (newLoaded) {
                    totalLoaded += newLoaded - oldLoaded;
                }
                if (newTotal) {
                    totalSize += newTotal - oldTotal;
                }
            }

            callbackProxy(totalLoaded, totalSize);
        };

    qq.extend(this, {
        // Called when a batch of files has completed uploading.
        onAllComplete: onAllComplete,

        // Called when the status of a file has changed.
        onStatusChange: function(id, oldStatus, newStatus) {
            if (newStatus === qq.status.CANCELED || newStatus === qq.status.REJECTED) {
                onCancel(id);
            }
            else if (newStatus === qq.status.SUBMITTING) {
                onNew(id);
            }
        },

        // Called whenever the upload progress of an individual file has changed.
        onIndividualProgress: function(id, loaded, total) {
            updateTotalProgress(id, loaded, total);
            perFileProgress[id] = {loaded: loaded, total: total};
        },

        // Called whenever the total size of a file has changed, such as when the size of a generated blob is known.
        onNewSize: function(id) {
            onNew(id);
        },

        reset: function() {
            perFileProgress = {};
            totalLoaded = 0;
            totalSize = 0;
        }
    });
};

/*globals qq */
// Base handler for UI (FineUploader mode) events.
// Some more specific handlers inherit from this one.
qq.UiEventHandler = function(s, protectedApi) {
    "use strict";

    var disposer = new qq.DisposeSupport(),
        spec = {
            eventType: "click",
            attachTo: null,
            onHandled: function(target, event) {}
        };


    // This makes up the "public" API methods that will be accessible
    // to instances constructing a base or child handler
    qq.extend(this, {
        addHandler: function(element) {
            addHandler(element);
        },

        dispose: function() {
            disposer.dispose();
        }
    });

    function addHandler(element) {
        disposer.attach(element, spec.eventType, function(event) {
            // Only in IE: the `event` is a property of the `window`.
            event = event || window.event;

            // On older browsers, we must check the `srcElement` instead of the `target`.
            var target = event.target || event.srcElement;

            spec.onHandled(target, event);
        });
    }

    // These make up the "protected" API methods that children of this base handler will utilize.
    qq.extend(protectedApi, {
        getFileIdFromItem: function(item) {
            return item.qqFileId;
        },

        getDisposeSupport: function() {
            return disposer;
        }
    });


    qq.extend(spec, s);

    if (spec.attachTo) {
        addHandler(spec.attachTo);
    }
};

/* global qq */
qq.FileButtonsClickHandler = function(s) {
    "use strict";

    var inheritedInternalApi = {},
        spec = {
            templating: null,
            log: function(message, lvl) {},
            onDeleteFile: function(fileId) {},
            onCancel: function(fileId) {},
            onRetry: function(fileId) {},
            onPause: function(fileId) {},
            onContinue: function(fileId) {},
            onGetName: function(fileId) {}
        },
        buttonHandlers = {
            cancel: function(id) { spec.onCancel(id); },
            retry:  function(id) { spec.onRetry(id); },
            deleteButton: function(id) { spec.onDeleteFile(id); },
            pause: function(id) { spec.onPause(id); },
            continueButton: function(id) { spec.onContinue(id); }
        };

    function examineEvent(target, event) {
        qq.each(buttonHandlers, function(buttonType, handler) {
            var firstLetterCapButtonType = buttonType.charAt(0).toUpperCase() + buttonType.slice(1),
                fileId;

            if (spec.templating["is" + firstLetterCapButtonType](target)) {
                fileId = spec.templating.getFileId(target);
                qq.preventDefault(event);
                spec.log(qq.format("Detected valid file button click event on file '{}', ID: {}.", spec.onGetName(fileId), fileId));
                handler(fileId);
                return false;
            }
        });
    }

    qq.extend(spec, s);

    spec.eventType = "click";
    spec.onHandled = examineEvent;
    spec.attachTo = spec.templating.getFileList();

    qq.extend(this, new qq.UiEventHandler(spec, inheritedInternalApi));
};

/*globals qq */
// Child of FilenameEditHandler.  Used to detect click events on filename display elements.
qq.FilenameClickHandler = function(s) {
    "use strict";

    var inheritedInternalApi = {},
        spec = {
            templating: null,
            log: function(message, lvl) {},
            classes: {
                file: "qq-upload-file",
                editNameIcon: "qq-edit-filename-icon"
            },
            onGetUploadStatus: function(fileId) {},
            onGetName: function(fileId) {}
        };

    qq.extend(spec, s);

    // This will be called by the parent handler when a `click` event is received on the list element.
    function examineEvent(target, event) {
        if (spec.templating.isFileName(target) || spec.templating.isEditIcon(target)) {
            var fileId = spec.templating.getFileId(target),
                status = spec.onGetUploadStatus(fileId);

            // We only allow users to change filenames of files that have been submitted but not yet uploaded.
            if (status === qq.status.SUBMITTED) {
                spec.log(qq.format("Detected valid filename click event on file '{}', ID: {}.", spec.onGetName(fileId), fileId));
                qq.preventDefault(event);

                inheritedInternalApi.handleFilenameEdit(fileId, target, true);
            }
        }
    }

    spec.eventType = "click";
    spec.onHandled = examineEvent;

    qq.extend(this, new qq.FilenameEditHandler(spec, inheritedInternalApi));
};

/*globals qq */
// Child of FilenameEditHandler.  Used to detect focusin events on file edit input elements.
qq.FilenameInputFocusInHandler = function(s, inheritedInternalApi) {
    "use strict";

    var spec = {
            templating: null,
            onGetUploadStatus: function(fileId) {},
            log: function(message, lvl) {}
        };

    if (!inheritedInternalApi) {
        inheritedInternalApi = {};
    }

    // This will be called by the parent handler when a `focusin` event is received on the list element.
    function handleInputFocus(target, event) {
        if (spec.templating.isEditInput(target)) {
            var fileId = spec.templating.getFileId(target),
                status = spec.onGetUploadStatus(fileId);

            if (status === qq.status.SUBMITTED) {
                spec.log(qq.format("Detected valid filename input focus event on file '{}', ID: {}.", spec.onGetName(fileId), fileId));
                inheritedInternalApi.handleFilenameEdit(fileId, target);
            }
        }
    }

    spec.eventType = "focusin";
    spec.onHandled = handleInputFocus;

    qq.extend(spec, s);
    qq.extend(this, new qq.FilenameEditHandler(spec, inheritedInternalApi));
};

/*globals qq */
/**
 * Child of FilenameInputFocusInHandler.  Used to detect focus events on file edit input elements.  This child module is only
 * needed for UAs that do not support the focusin event.  Currently, only Firefox lacks this event.
 *
 * @param spec Overrides for default specifications
 */
qq.FilenameInputFocusHandler = function(spec) {
    "use strict";

    spec.eventType = "focus";
    spec.attachTo = null;

    qq.extend(this, new qq.FilenameInputFocusInHandler(spec, {}));
};

/*globals qq */
// Handles edit-related events on a file item (FineUploader mode).  This is meant to be a parent handler.
// Children will delegate to this handler when specific edit-related actions are detected.
qq.FilenameEditHandler = function(s, inheritedInternalApi) {
    "use strict";

    var spec = {
            templating: null,
            log: function(message, lvl) {},
            onGetUploadStatus: function(fileId) {},
            onGetName: function(fileId) {},
            onSetName: function(fileId, newName) {},
            onEditingStatusChange: function(fileId, isEditing) {}
        };


    function getFilenameSansExtension(fileId) {
        var filenameSansExt = spec.onGetName(fileId),
            extIdx = filenameSansExt.lastIndexOf(".");

        if (extIdx > 0) {
            filenameSansExt = filenameSansExt.substr(0, extIdx);
        }

        return filenameSansExt;
    }

    function getOriginalExtension(fileId) {
        var origName = spec.onGetName(fileId);
        return qq.getExtension(origName);
    }

    // Callback iff the name has been changed
    function handleNameUpdate(newFilenameInputEl, fileId) {
        var newName = newFilenameInputEl.value,
            origExtension;

        if (newName !== undefined && qq.trimStr(newName).length > 0) {
            origExtension = getOriginalExtension(fileId);

            if (origExtension !== undefined) {
                newName = newName + "." + origExtension;
            }

            spec.onSetName(fileId, newName);
        }

        spec.onEditingStatusChange(fileId, false);
    }

    // The name has been updated if the filename edit input loses focus.
    function registerInputBlurHandler(inputEl, fileId) {
        inheritedInternalApi.getDisposeSupport().attach(inputEl, "blur", function() {
            handleNameUpdate(inputEl, fileId);
        });
    }

    // The name has been updated if the user presses enter.
    function registerInputEnterKeyHandler(inputEl, fileId) {
        inheritedInternalApi.getDisposeSupport().attach(inputEl, "keyup", function(event) {

            var code = event.keyCode || event.which;

            if (code === 13) {
                handleNameUpdate(inputEl, fileId);
            }
        });
    }

    qq.extend(spec, s);

    spec.attachTo = spec.templating.getFileList();

    qq.extend(this, new qq.UiEventHandler(spec, inheritedInternalApi));

    qq.extend(inheritedInternalApi, {
        handleFilenameEdit: function(id, target, focusInput) {
            var newFilenameInputEl = spec.templating.getEditInput(id);

            spec.onEditingStatusChange(id, true);

            newFilenameInputEl.value = getFilenameSansExtension(id);

            if (focusInput) {
                newFilenameInputEl.focus();
            }

            registerInputBlurHandler(newFilenameInputEl, id);
            registerInputEnterKeyHandler(newFilenameInputEl, id);
        }
    });
};

/*globals jQuery, qq*/
(function($) {
    "use strict";
    var $el,
        pluginOptions = ["uploaderType", "endpointType"];

    function init(options) {
        var xformedOpts = transformVariables(options || {}),
            newUploaderInstance = getNewUploaderInstance(xformedOpts);

        uploader(newUploaderInstance);
        addCallbacks(xformedOpts, newUploaderInstance);

        return $el;
    }

    function getNewUploaderInstance(params) {
        var uploaderType = pluginOption("uploaderType"),
            namespace = pluginOption("endpointType");

        // If the integrator has defined a specific type of uploader to load, use that, otherwise assume `qq.FineUploader`
        if (uploaderType) {
            // We can determine the correct constructor function to invoke by combining "FineUploader"
            // with the upper camel cased `uploaderType` value.
            uploaderType = uploaderType.charAt(0).toUpperCase() + uploaderType.slice(1).toLowerCase();

            if (namespace) {
                return new qq[namespace]["FineUploader" + uploaderType](params);
            }

            return new qq["FineUploader" + uploaderType](params);
        }
        else {
            if (namespace) {
                return new qq[namespace].FineUploader(params);
            }

            return new qq.FineUploader(params);
        }
    }

    function dataStore(key, val) {
        var data = $el.data("fineuploader");

        if (val) {
            if (data === undefined) {
                data = {};
            }
            data[key] = val;
            $el.data("fineuploader", data);
        }
        else {
            if (data === undefined) {
                return null;
            }
            return data[key];
        }
    }

    //the underlying Fine Uploader instance is stored in jQuery's data stored, associated with the element
    // tied to this instance of the plug-in
    function uploader(instanceToStore) {
        return dataStore("uploader", instanceToStore);
    }

    function pluginOption(option, optionVal) {
        return dataStore(option, optionVal);
    }

    // Implement all callbacks defined in Fine Uploader as functions that trigger appropriately names events and
    // return the result of executing the bound handler back to Fine Uploader
    function addCallbacks(transformedOpts, newUploaderInstance) {
        var callbacks = transformedOpts.callbacks = {};

        $.each(newUploaderInstance._options.callbacks, function(prop, nonJqueryCallback) {
            var name, callbackEventTarget;

            name = /^on(\w+)/.exec(prop)[1];
            name = name.substring(0, 1).toLowerCase() + name.substring(1);
            callbackEventTarget = $el;

            callbacks[prop] = function() {
                var originalArgs = Array.prototype.slice.call(arguments),
                    transformedArgs = [],
                    nonJqueryCallbackRetVal, jqueryEventCallbackRetVal;

                $.each(originalArgs, function(idx, arg) {
                    transformedArgs.push(maybeWrapInJquery(arg));
                });

                nonJqueryCallbackRetVal = nonJqueryCallback.apply(this, originalArgs);

                try {
                    jqueryEventCallbackRetVal = callbackEventTarget.triggerHandler(name, transformedArgs);
                }
                catch (error) {
                    qq.log("Caught error in Fine Uploader jQuery event handler: " + error.message, "error");
                }

                /*jshint -W116*/
                if (nonJqueryCallbackRetVal != null) {
                    return nonJqueryCallbackRetVal;
                }
                return jqueryEventCallbackRetVal;
            };
        });

        newUploaderInstance._options.callbacks = callbacks;
    }

    //transform jQuery objects into HTMLElements, and pass along all other option properties
    function transformVariables(source, dest) {
        var xformed, arrayVals;

        if (dest === undefined) {
            if (source.uploaderType !== "basic") {
                xformed = { element : $el[0] };
            }
            else {
                xformed = {};
            }
        }
        else {
            xformed = dest;
        }

        $.each(source, function(prop, val) {
            if ($.inArray(prop, pluginOptions) >= 0) {
                pluginOption(prop, val);
            }
            else if (val instanceof $) {
                xformed[prop] = val[0];
            }
            else if ($.isPlainObject(val)) {
                xformed[prop] = {};
                transformVariables(val, xformed[prop]);
            }
            else if ($.isArray(val)) {
                arrayVals = [];
                $.each(val, function(idx, arrayVal) {
                    var arrayObjDest = {};

                    if (arrayVal instanceof $) {
                        $.merge(arrayVals, arrayVal);
                    }
                    else if ($.isPlainObject(arrayVal)) {
                        transformVariables(arrayVal, arrayObjDest);
                        arrayVals.push(arrayObjDest);
                    }
                    else {
                        arrayVals.push(arrayVal);
                    }
                });
                xformed[prop] = arrayVals;
            }
            else {
                xformed[prop] = val;
            }
        });

        if (dest === undefined) {
            return xformed;
        }
    }

    function isValidCommand(command) {
        return $.type(command) === "string" &&
            !command.match(/^_/) && //enforce private methods convention
            uploader()[command] !== undefined;
    }

    // Assuming we have already verified that this is a valid command, call the associated function in the underlying
    // Fine Uploader instance (passing along the arguments from the caller) and return the result of the call back to the caller
    function delegateCommand(command) {
        var xformedArgs = [],
            origArgs = Array.prototype.slice.call(arguments, 1),
            retVal;

        transformVariables(origArgs, xformedArgs);

        retVal = uploader()[command].apply(uploader(), xformedArgs);

        return maybeWrapInJquery(retVal);
    }

    // If the value is an `HTMLElement` or `HTMLDocument`, wrap it in a `jQuery` object
    function maybeWrapInJquery(val) {
        var transformedVal = val;

        // If the command is returning an `HTMLElement` or `HTMLDocument`, wrap it in a `jQuery` object
        /*jshint -W116*/
        if (val != null && typeof val === "object" &&
           (val.nodeType === 1 || val.nodeType === 9) && val.cloneNode) {

            transformedVal = $(val);
        }

        return transformedVal;
    }

    $.fn.fineUploader = function(optionsOrCommand) {
        var self = this, selfArgs = arguments, retVals = [];

        this.each(function(index, el) {
            $el = $(el);

            if (uploader() && isValidCommand(optionsOrCommand)) {
                retVals.push(delegateCommand.apply(self, selfArgs));

                if (self.length === 1) {
                    return false;
                }
            }
            else if (typeof optionsOrCommand === "object" || !optionsOrCommand) {
                init.apply(self, selfArgs);
            }
            else {
                $.error("Method " +  optionsOrCommand + " does not exist on jQuery.fineUploader");
            }
        });

        if (retVals.length === 1) {
            return retVals[0];
        }
        else if (retVals.length > 1) {
            return retVals;
        }

        return this;
    };

}(jQuery));

/*globals jQuery, qq*/
(function($) {
    "use strict";
    var rootDataKey = "fineUploaderDnd",
        $el;

    function init (options) {
        if (!options) {
            options = {};
        }

        options.dropZoneElements = [$el];
        var xformedOpts = transformVariables(options);
        addCallbacks(xformedOpts);
        dnd(new qq.DragAndDrop(xformedOpts));

        return $el;
    }

    function dataStore(key, val) {
        var data = $el.data(rootDataKey);

        if (val) {
            if (data === undefined) {
                data = {};
            }
            data[key] = val;
            $el.data(rootDataKey, data);
        }
        else {
            if (data === undefined) {
                return null;
            }
            return data[key];
        }
    }

    function dnd(instanceToStore) {
        return dataStore("dndInstance", instanceToStore);
    }

    function addCallbacks(transformedOpts) {
        var callbacks = transformedOpts.callbacks = {};

        $.each(new qq.DragAndDrop.callbacks(), function(prop, func) {
            var name = prop,
                $callbackEl;

            $callbackEl = $el;

            callbacks[prop] = function() {
                var args = Array.prototype.slice.call(arguments),
                    jqueryHandlerResult = $callbackEl.triggerHandler(name, args);

                return jqueryHandlerResult;
            };
        });
    }

    //transform jQuery objects into HTMLElements, and pass along all other option properties
    function transformVariables(source, dest) {
        var xformed, arrayVals;

        if (dest === undefined) {
            xformed = {};
        }
        else {
            xformed = dest;
        }

        $.each(source, function(prop, val) {
            if (val instanceof $) {
                xformed[prop] = val[0];
            }
            else if ($.isPlainObject(val)) {
                xformed[prop] = {};
                transformVariables(val, xformed[prop]);
            }
            else if ($.isArray(val)) {
                arrayVals = [];
                $.each(val, function(idx, arrayVal) {
                    if (arrayVal instanceof $) {
                        $.merge(arrayVals, arrayVal);
                    }
                    else {
                        arrayVals.push(arrayVal);
                    }
                });
                xformed[prop] = arrayVals;
            }
            else {
                xformed[prop] = val;
            }
        });

        if (dest === undefined) {
            return xformed;
        }
    }

    function isValidCommand(command) {
        return $.type(command) === "string" &&
            command === "dispose" &&
            dnd()[command] !== undefined;
    }

    function delegateCommand(command) {
        var xformedArgs = [], origArgs = Array.prototype.slice.call(arguments, 1);
        transformVariables(origArgs, xformedArgs);
        return dnd()[command].apply(dnd(), xformedArgs);
    }

    $.fn.fineUploaderDnd = function(optionsOrCommand) {
        var self = this, selfArgs = arguments, retVals = [];

        this.each(function(index, el) {
            $el = $(el);

            if (dnd() && isValidCommand(optionsOrCommand)) {
                retVals.push(delegateCommand.apply(self, selfArgs));

                if (self.length === 1) {
                    return false;
                }
            }
            else if (typeof optionsOrCommand === "object" || !optionsOrCommand) {
                init.apply(self, selfArgs);
            }
            else {
                $.error("Method " +  optionsOrCommand + " does not exist in Fine Uploader's DnD module.");
            }
        });

        if (retVals.length === 1) {
            return retVals[0];
        }
        else if (retVals.length > 1) {
            return retVals;
        }

        return this;
    };

}(jQuery));

/*! 2014-07-03 */
;if (typeof String.prototype.startsWith !== 'function') {
    String.prototype.startsWith = function (str) {
        return this.slice(0, str.length) === str;
    };
}

// create the base namespace
var CBR = CBR || {};

// create additional namespace
CBR.Models = CBR.Models || {};
CBR.Controllers = CBR.Controllers || {};
CBR.Services = CBR.Services || {};

CBR.isBrowserSmallScreen = function () {
    return window.getComputedStyle(
        document.querySelector("html"), ":after"
    ).getPropertyValue("content") === "none";
};

CBR.isBrowserMediumScreen = function () {
    var content = window.getComputedStyle(
        document.querySelector("html"), ":after"
    ).getPropertyValue("content");

    // In some browsers like Firefox, "content" is wrapped by double-quotes, that's why doing "return content === "GLOBAL_MEDIUM_SCREEN_BREAKPOINT" would be false.
    return _.contains(content, "GLOBAL_MEDIUM_SCREEN_BREAKPOINT");
};

CBR.isBrowserLargeScreen = function () {
    var content = window.getComputedStyle(
        document.querySelector("html"), ":after"
    ).getPropertyValue("content");

    return _.contains(content, "GLOBAL_LARGE_SCREEN_BREAKPOINT");
};
;CBR.Services.Validator = P(function (s) {
    s.checkEmpty = "empty";
    s.checkEmail = "email";
    s.checkUsername = "username";
    s.checkDateInFuture = "in-future";
    s.checkMinLength = "min-length";
    s.checkMaxLength = "max-length";
    s.checkInteger = "integer";
    s.checkDecimal = "decimal";
    s.checkUrl = "url"; // TODO

    s.init = function (options) {
        this.options = options;

        for (var i = 0; i < this._getFieldIds().length; i++) {
            var $field = jQuery("#" + this._getFieldIds()[i]);

            if ($field.hasClass("pills"))
                this._addClickEvents($field);
            else {
                this._addBlurEvent($field);
                this._addValueChangedEvent($field);
            }
        }
    };

    s.isValid = function () {
        var result = true;
        var isFocusOnFirstInvalidFieldDone = false;
        var $field;

        for (var i = 0; i < this._getFieldIds().length; i++) {
            $field = jQuery("#" + this._getFieldIds()[i]);

            if (!this._validateField($field, false)) {
                result = false;

                // We focus on the first invalid field
                if (!isFocusOnFirstInvalidFieldDone) {
                    $field.focus();
                    isFocusOnFirstInvalidFieldDone = true;
                }
            }
        }

        return result;
    };

    s.flagValid = function ($field) {
        var $wrapper = $field.parent();
        $wrapper.removeClass("has-error");
        //$wrapper.addClass("has-success");
    };

    s.flagInvalid = function ($field) {
        var $wrapper = $field.parent();
        //$wrapper.removeClass("has-success");
        $wrapper.addClass("has-error");
    };

    s.isFlaggedInvalid = function ($field) {
        return $field.parent().hasClass("has-error");
    };

    s._getFieldIds = function () {
        return this.options.fieldIds;
    };

    s._get$empty = function ($field) {
        return this._get$error($field, this.checkEmpty);
    };

    s._get$email = function ($field) {
        return this._get$error($field, this.checkEmail);
    };

    s._get$username = function ($field) {
        return this._get$error($field, this.checkUsername);
    };

    s._get$inFuture = function ($field) {
        return this._get$error($field, this.checkDateInFuture);
    };

    s._get$minLength = function ($field) {
        return this._get$error($field, this.checkMinLength);
    };

    s._get$maxLength = function ($field) {
        return this._get$error($field, this.checkMaxLength);
    };

    s._get$integer = function ($field) {
        return this._get$error($field, this.checkInteger);
    };

    s._get$decimal = function ($field) {
        return this._get$error($field, this.checkDecimal);
    };

    s._get$error = function ($field, checkType) {
        return $field.parent().find("p[data-check=" + checkType + "]");
    };

    s._isToCheckIfEmpty = function ($field) {
        return this._get$empty($field).length === 1;
    };

    s._isToCheckIfEmail = function ($field) {
        return this._get$email($field).length === 1;
    };

    s._isToCheckIfUsername = function ($field) {
        return this._get$username($field).length === 1;
    };

    s._isToCheckIfInFuture = function ($field) {
        return this._get$inFuture($field).length === 1;
    };

    s._isToCheckIfMinLength = function ($field) {
        return this._get$minLength($field).length === 1;
    };

    s._isToCheckIfMaxLength = function ($field) {
        return this._get$maxLength($field).length === 1;
    };

    s._isToCheckIfInteger = function ($field) {
        return this._get$integer($field).length === 1;
    };

    s._isToCheckIfDecimal = function ($field) {
        return this._get$decimal($field).length === 1;
    };

    s._isValidEmail = function (email) {
        if (email === "")
            return true;

        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return reg.test(email);
    };

    s._isValidUsername = function (username) {
        var reg = /^([A-Za-z0-9_\-])+$/;
        return reg.test(username);
    };

    s._isInFuture = function (dateStr) {
        var yearMonthDay = dateStr.split("-");
        var year = parseInt(yearMonthDay[0], 10);
        var month = parseInt(yearMonthDay[1], 10);
        var day = parseInt(yearMonthDay[2], 10);

        var date = new Date(year, month - 1, day);
        var now = new Date();

        var oneDayInMillis = 1000 * 60 * 60 * 24;
        var nbDaysDifference = Math.ceil((date - now) / oneDayInMillis);

        return nbDaysDifference > 0;
    };

    s._isMinLength = function (value, minLength) {
        if (value === null || value === undefined || value === "")
            return true;
        return value.length >= minLength;
    };

    s._isMaxLength = function (value, maxLength) {
        if (value === null || value === undefined || value === "")
            return true;
        return value.length <= maxLength;
    };

    s._isInteger = function (value) {
        var reg = /^\d*$/;
        return reg.test(value);
    };

    s._isDecimal = function (value) {
        var reg = /^\d*\.?\d*$/;
        return reg.test(value);
    };

    s._validateField = function ($field, isOnBlur) {

        // Empty?
        if (this._isToCheckIfEmpty($field)) {
            if ($field.hasClass("nav-pills") &&
                $field.children(".active").length === 0) {

                this.flagInvalid($field);
                this._slideDownErrorMessage(this._get$empty($field));
                return false;
            }
            if (!$field.hasClass("nav-pills") && !$field.val().trim()) {

                if (!isOnBlur) {
                    this.flagInvalid($field);
                    this._slideDownErrorMessage(this._get$empty($field));
                }
                return false;
            }

            this._slideUpErrorMessage(this._get$empty($field));
        }

        // Email?
        if (this._isToCheckIfEmail($field)) {
            if (!this._isValidEmail($field.val())) {
                this.flagInvalid($field);
                this._slideDownErrorMessage(this._get$email($field));
                return false;
            }

            this._slideUpErrorMessage(this._get$email($field));
        }

        // Username?
        if (this._isToCheckIfUsername($field)) {
            if (!this._isValidUsername($field.val())) {
                this.flagInvalid($field);
                this._slideDownErrorMessage(this._get$username($field));
                return false;
            }
            this._slideUpErrorMessage(this._get$username($field));
        }

        // In the future?
        if (this._isToCheckIfInFuture($field)) {
            if (!this._isInFuture($field.val())) {
                this.flagInvalid($field);
                this._slideDownErrorMessage(this._get$inFuture($field));
                return false;
            }
            this._slideUpErrorMessage(this._get$inFuture($field));
        }

        // Min length?
        if (this._isToCheckIfMinLength($field)) {
            if (!this._isMinLength($field.val(), $field.data("min-length"))) {
                this.flagInvalid($field);
                this._slideDownErrorMessage(this._get$minLength($field));
                return false;
            }
            this._slideUpErrorMessage(this._get$minLength($field));
        }

        // Max length?
        if (this._isToCheckIfMaxLength($field)) {
            if (!this._isMaxLength($field.val(), $field.attr("maxlength"))) {
                this.flagInvalid($field);
                this._slideDownErrorMessage(this._get$maxLength($field));
                return false;
            }
            this._slideUpErrorMessage(this._get$maxLength($field));
        }

        // Integer number?
        if (this._isToCheckIfInteger($field)) {
            if (!this._isInteger($field.val())) {
                this.flagInvalid($field);
                this._slideDownErrorMessage(this._get$integer($field));
                return false;
            }
            this._slideUpErrorMessage(this._get$integer($field));
        }

        // Decimal number?
        if (this._isToCheckIfDecimal($field)) {
            if (!this._isDecimal($field.val())) {
                this.flagInvalid($field);
                this._slideDownErrorMessage(this._get$decimal($field));
                return false;
            }
            this._slideUpErrorMessage(this._get$decimal($field));
        }

        this.flagValid($field);

        return true;
    };

    s._addBlurEvent = function ($field) {
        $field.blur(function () {
            this._validateField($field, true);
        }.bind(this));
    };

    s._addValueChangedEvent = function ($field) {
        $field.change(function () {
            this._validateField($field);
        }.bind(this));
    };

    s._addClickEvents = function ($field) {
        $field.find("a").bind("active-toggled", function () {
            this._validateField($field);
        }.bind(this));
    };

    s._slideDownErrorMessage = function ($errorMsgEl) {
        if ($errorMsgEl.html()) {
            $errorMsgEl.show(); // TODO: animate
        }
    };

    s._slideUpErrorMessage = function ($errorMsgEl) {
        if ($errorMsgEl.html()) {
            $errorMsgEl.hide(); // TODO: animate
        }
    };
});
;CBR.Models.JsonSerializable = P(function (m) {
    m.init = function (options) {
        this.options = options;
    };

    m.toJSON = function () {
        return this.options;
    };
});
;CBR.Models.Country = {
    global: {
        id: 0,
        name: "Global"
    }
};
;CBR.Models.Account = P(CBR.Models.JsonSerializable, function(m) {
    m.options = {  // Defaults
    };

    m.getUsername = function() {
        return this.options.username;
    };

    m.setPassword = function(password) {
        this.options.password = password;
    };
});
;CBR.Controllers.Base = P(function (c) {
    c.httpStatusCode = {
        noContent: 204,
        unauthorized: 401
    };

    c.floatingAlertFadeOutDelay = 1500;

    c.init = function (options) {
        this.options = options;
    };

    c.getEl = function () {
        return $(this.options.el);
    };

    c.setActivePill = function (e) {
        e.preventDefault();

        var $a = $(e.currentTarget);
        var $li = $a.parent();
        var $ul = $li.parent();
        $ul.children().removeClass("active");

        $li.addClass("active");

        $a.trigger("active-toggled");
    };

    c.initElements = function () {
        this._applyModernizrRules();
        this._initFloatingAlerts();
    };

    c.saveInLocalStorage = function (key, value, isGlobalScope) {
        if (Modernizr.localstorage) {
            if (isGlobalScope) {
                localStorage.setItem(key, JSON.stringify(value));
            } else {
                var pageId = $("body").attr("id");

                var pageDataInLocalStorage = JSON.parse(localStorage.getItem(pageId)) || {};
                pageDataInLocalStorage[key] = value;

                localStorage.setItem(pageId, JSON.stringify(pageDataInLocalStorage));
            }
        }
    };

    c.getFromLocalStorage = function (key, isGlobalScope) {
        if (Modernizr.localstorage) {
            if (isGlobalScope) {
                return JSON.parse(localStorage.getItem(key));
            }

            var pageId = $("body").attr("id");

            var pageDataInLocalStorage = JSON.parse(localStorage.getItem(pageId)) || {};

            return pageDataInLocalStorage[key];
        }
    };

    c.removeFromLocalStorage = function (key, isGlobalScope) {
        if (Modernizr.localstorage) {
            if (isGlobalScope) {
                localStorage.removeItem(key);
            } else {
                var pageId = $("body").attr("id");

                var pageDataInLocalStorage = JSON.parse(localStorage.getItem(pageId)) || {};
                delete pageDataInLocalStorage[key];

                localStorage.setItem(pageId, JSON.stringify(pageDataInLocalStorage));
            }
        }
    };

    c.fadeOutFloatingAlerts = function () {
        var $floatingAlerts = $(".alert.floating");

        _.delay(function () {
            $floatingAlerts.fadeOut("slow", function () {
                $floatingAlerts.remove();
            });
        }, this.floatingAlertFadeOutDelay);
    };

    c.showAlert = function (text) {
        // In case another alert is displayed, we delete it
        $(".alert.floating").remove();

        var $floatingAlert = $('<div class="alert alert-success floating">' + text + '</div>');

        this.getEl().prepend($floatingAlert);

        // Center the alert
        $floatingAlert.css("margin-left", -$floatingAlert.width() / 2);

        // Now that the floating alert is centered, we can show it
        $floatingAlert.show();

        _.delay(function () {
            $floatingAlert.fadeOut("slow", function () {
                $floatingAlert.remove();
            });
        }, this.floatingAlertFadeOutDelay);
    };

    c._applyModernizrRules = function () {
        if (!Modernizr.input.placeholder) {
            $(".mdnz-polyfill.placeholder").show();
        }
    };

    c._initFloatingAlerts = function () {
        $(".alert.floating").each(function (index, element) {
            var $floatingAlert = $(element);

            // Centering
            $floatingAlert.css("margin-left", -$floatingAlert.width() / 2);

            // Now that the floating alert is centered, we can show it
            $floatingAlert.show();
        });
    };
});;CBR.Controllers.NewProjectPic = P(CBR.Controllers.Base, function (c, base) {
    c.facebookProjectPictureRatio = 360 / 1430;

    c.initElements = function () {
        base.initElements.call(this);

        this.$newProjectPic = $(".new-project-pic");

        this._initProjectPictureHeight(this.$newProjectPic);
    };

    c.initEvents = function () {
        window.onresize = _.debounce($.proxy(this._initProjectPictureHeight, this), 100);
    };

    // We set the height in JS because it's hard to do in CSS, cf. http://stackoverflow.com/questions/5657964/css-why-doesn-t-percentage-height-work
    c._initProjectPictureHeight = function () {
        this.$newProjectPic.height(this.$newProjectPic.width() * this.facebookProjectPictureRatio);
    };
});
;CBR.Controllers.Index = P(CBR.Controllers.Base, function(c, base) {
    c.run = function () {
        this._initElements();
    };

    c._initElements = function () {
        base.initElements.call(this);
    };
});
;CBR.Controllers.CreateProject = P(CBR.Controllers.NewProjectPic, function (c, newProjectPic) {
    c.run = function () {
        this._initElements();
        this._initValidation();
        this._initEvents();
    };

    c._initElements = function () {
        newProjectPic.initElements.call(this);

        this.$form = $("form");
        this.$title = $("#title");
        this.$description = $("#description");
        this.$homepageUrl = $("#homepage-url");
        this.$countrySelect = $("#country");
        this.$locality = $("#locality");
        this.$submitBtn = $("[type=submit]");

        $("#fine-uploader").fineUploader({
            uploaderType: 'basic',
            button: $("#upload-btn")[0],
            request: {
                endpoint: '/files/project-pic/temp'
            }
        })
            .on('upload', function (fileId, fileName) {
                this.$newProjectPic.addClass("loading");
            }.bind(this))
            .on('error', function (fileId, fileName, errorReason, xhr) {
                alert("Upload error :(");
            })
            .on('complete', function (fileId, fileName, responseJSON, xhr) {
                if (xhr.success) {
                    this.$newProjectPic.removeClass("loading")
                        .css("background-image", "url(/files/project-pic/temp?time=" + new Date().getTime() + ")");
                }
            }.bind(this));

        // The submit button may remain disabled when navigating back. We make sure it doesn't happen
        this.$submitBtn.prop("disabled", false);
    };

    c._initValidation = function () {
        this.validator = new CBR.Services.Validator({
            fieldIds: [
                "title",
                "description",
                "homepage-url",
                "locality"
            ]
        });
    };

    c._initEvents = function () {
        newProjectPic.initEvents.call(this);

        this.$countrySelect.change($.proxy(this._onCountryChange, this));
        this.$form.submit($.proxy(this._doSubmit, this));
    };

    c._onCountryChange = function (e) {
        if (parseInt(this.$countrySelect.val(), 10) === CBR.Models.Country.global.id) {
            this.$locality.val("");
            this.$locality.prop("disabled", true);
        } else {
            this.$locality.prop("disabled", false);
        }
    };

    c._doSubmit = function (e) {
        if (e) {
            e.preventDefault();
        }

        if (this.validator.isValid()) {
            this.$submitBtn.button('loading');

            var locality = this.$locality.val();

            var countryId = this.$countrySelect.val();
            var country = countryId !== CBR.Models.Country.global.id ? {
                id: countryId,
                name: this.$countrySelect.children(':selected').text()
            } : null;

            var project = {
                title: this.$title.val(),
                description: this.$description.val(),
                homepageUrl: this.$homepageUrl.val(),
                country: country,
                locality: locality ? locality : null
            };

            $.ajax({
                url: "/api/projects/temp",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify(project)
            }).done(function (data, textStatus, jqXHR) {
                    location.href = "/projects/new/preview";
                }.bind(this)
            ).fail(function (jqXHR, textStatus, errorThrown) {
                    this.$submitBtn.button('reset');
                    alert("AJAX fail :(");
                }.bind(this));
        }
    };
});
;CBR.Controllers.PreviewNewProject = P(CBR.Controllers.NewProjectPic, function (c, newProjectPic) {
    c.run = function () {
        this._initElements();
        this._initEvents();
    };

    c._initElements = function () {
        newProjectPic.initElements.call(this);

        this.$editBtn = $("#edit");
        this.$nextBtn = $("#next");
    };

    c._initEvents = function () {
        newProjectPic.initEvents.call(this);

        this.$editBtn.click(this._navigateBack);
    };

    c._navigateBack = function(e) {
        history.back();
    };
});
;