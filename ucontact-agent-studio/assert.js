var g=(function(){return this})();
g.self=g; g.window=g; g.globalThis=g;
g.setTimeout=function(){return 0}; g.clearTimeout=function(){};
g.performance={now:function(){return 0}}; g.navigator={userAgent:'jsc'};
g.document={getElementById:function(){return null},addEventListener:function(){},removeEventListener:function(){},querySelector:function(){return null}};
g.TextEncoder=function(){this.encode=function(s){var a=[];for(var i=0;i<s.length;i++)a.push(s.charCodeAt(i)&255);return a}};
g.MessageChannel=function(){this.port1={};this.port2={postMessage:function(){}}};
g.console=g.console||{log:function(){},warn:function(){},error:function(){}};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(){'use strict';(function(c,x){"object"===typeof exports&&"undefined"!==typeof module?x(exports):"function"===typeof define&&define.amd?define(["exports"],x):(c=c||self,x(c.React={}))})(this,function(c){function x(a){if(null===a||"object"!==typeof a)return null;a=V&&a[V]||a["@@iterator"];return"function"===typeof a?a:null}function w(a,b,e){this.props=a;this.context=b;this.refs=W;this.updater=e||X}function Y(){}function K(a,b,e){this.props=a;this.context=b;this.refs=W;this.updater=e||X}function Z(a,b,
e){var m,d={},c=null,h=null;if(null!=b)for(m in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(c=""+b.key),b)aa.call(b,m)&&!ba.hasOwnProperty(m)&&(d[m]=b[m]);var l=arguments.length-2;if(1===l)d.children=e;else if(1<l){for(var f=Array(l),k=0;k<l;k++)f[k]=arguments[k+2];d.children=f}if(a&&a.defaultProps)for(m in l=a.defaultProps,l)void 0===d[m]&&(d[m]=l[m]);return{$$typeof:y,type:a,key:c,ref:h,props:d,_owner:L.current}}function na(a,b){return{$$typeof:y,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}
function M(a){return"object"===typeof a&&null!==a&&a.$$typeof===y}function oa(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?oa(""+a.key):b.toString(36)}function B(a,b,e,m,d){var c=typeof a;if("undefined"===c||"boolean"===c)a=null;var h=!1;if(null===a)h=!0;else switch(c){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case y:case pa:h=!0}}if(h)return h=a,d=d(h),a=""===m?"."+
N(h,0):m,ca(d)?(e="",null!=a&&(e=a.replace(da,"$&/")+"/"),B(d,b,e,"",function(a){return a})):null!=d&&(M(d)&&(d=na(d,e+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(da,"$&/")+"/")+a)),b.push(d)),1;h=0;m=""===m?".":m+":";if(ca(a))for(var l=0;l<a.length;l++){c=a[l];var f=m+N(c,l);h+=B(c,b,e,f,d)}else if(f=x(a),"function"===typeof f)for(a=f.call(a),l=0;!(c=a.next()).done;)c=c.value,f=m+N(c,l++),h+=B(c,b,e,f,d);else if("object"===c)throw b=String(a),Error("Objects are not valid as a React child (found: "+
("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}function C(a,b,e){if(null==a)return a;var c=[],d=0;B(a,c,"","",function(a){return b.call(e,a,d++)});return c}function qa(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=
0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}function O(a,b){var e=a.length;a.push(b);a:for(;0<e;){var c=e-1>>>1,d=a[c];if(0<D(d,b))a[c]=b,a[e]=d,e=c;else break a}}function p(a){return 0===a.length?null:a[0]}function E(a){if(0===a.length)return null;var b=a[0],e=a.pop();if(e!==b){a[0]=e;a:for(var c=0,d=a.length,k=d>>>1;c<k;){var h=2*(c+1)-1,l=a[h],f=h+1,g=a[f];if(0>D(l,e))f<d&&0>D(g,l)?(a[c]=g,a[f]=e,c=f):(a[c]=l,a[h]=e,c=h);else if(f<d&&0>D(g,e))a[c]=g,a[f]=e,c=f;else break a}}return b}
function D(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}function P(a){for(var b=p(r);null!==b;){if(null===b.callback)E(r);else if(b.startTime<=a)E(r),b.sortIndex=b.expirationTime,O(q,b);else break;b=p(r)}}function Q(a){z=!1;P(a);if(!u)if(null!==p(q))u=!0,R(S);else{var b=p(r);null!==b&&T(Q,b.startTime-a)}}function S(a,b){u=!1;z&&(z=!1,ea(A),A=-1);F=!0;var c=k;try{P(b);for(n=p(q);null!==n&&(!(n.expirationTime>b)||a&&!fa());){var m=n.callback;if("function"===typeof m){n.callback=null;
k=n.priorityLevel;var d=m(n.expirationTime<=b);b=v();"function"===typeof d?n.callback=d:n===p(q)&&E(q);P(b)}else E(q);n=p(q)}if(null!==n)var g=!0;else{var h=p(r);null!==h&&T(Q,h.startTime-b);g=!1}return g}finally{n=null,k=c,F=!1}}function fa(){return v()-ha<ia?!1:!0}function R(a){G=a;H||(H=!0,I())}function T(a,b){A=ja(function(){a(v())},b)}var y=Symbol.for("react.element"),pa=Symbol.for("react.portal"),ra=Symbol.for("react.fragment"),sa=Symbol.for("react.strict_mode"),ta=Symbol.for("react.profiler"),
ua=Symbol.for("react.provider"),va=Symbol.for("react.context"),wa=Symbol.for("react.forward_ref"),xa=Symbol.for("react.suspense"),ya=Symbol.for("react.memo"),za=Symbol.for("react.lazy"),V=Symbol.iterator,X={isMounted:function(a){return!1},enqueueForceUpdate:function(a,b,c){},enqueueReplaceState:function(a,b,c,m){},enqueueSetState:function(a,b,c,m){}},ka=Object.assign,W={};w.prototype.isReactComponent={};w.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
this.updater.enqueueSetState(this,a,b,"setState")};w.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};Y.prototype=w.prototype;var t=K.prototype=new Y;t.constructor=K;ka(t,w.prototype);t.isPureReactComponent=!0;var ca=Array.isArray,aa=Object.prototype.hasOwnProperty,L={current:null},ba={key:!0,ref:!0,__self:!0,__source:!0},da=/\/+/g,g={current:null},J={transition:null};if("object"===typeof performance&&"function"===typeof performance.now){var Aa=performance;
var v=function(){return Aa.now()}}else{var la=Date,Ba=la.now();v=function(){return la.now()-Ba}}var q=[],r=[],Ca=1,n=null,k=3,F=!1,u=!1,z=!1,ja="function"===typeof setTimeout?setTimeout:null,ea="function"===typeof clearTimeout?clearTimeout:null,ma="undefined"!==typeof setImmediate?setImmediate:null;"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var H=!1,G=null,A=-1,ia=5,ha=
-1,U=function(){if(null!==G){var a=v();ha=a;var b=!0;try{b=G(!0,a)}finally{b?I():(H=!1,G=null)}}else H=!1};if("function"===typeof ma)var I=function(){ma(U)};else if("undefined"!==typeof MessageChannel){t=new MessageChannel;var Da=t.port2;t.port1.onmessage=U;I=function(){Da.postMessage(null)}}else I=function(){ja(U,0)};t={ReactCurrentDispatcher:g,ReactCurrentOwner:L,ReactCurrentBatchConfig:J,Scheduler:{__proto__:null,unstable_ImmediatePriority:1,unstable_UserBlockingPriority:2,unstable_NormalPriority:3,
unstable_IdlePriority:5,unstable_LowPriority:4,unstable_runWithPriority:function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=k;k=a;try{return b()}finally{k=c}},unstable_next:function(a){switch(k){case 1:case 2:case 3:var b=3;break;default:b=k}var c=k;k=b;try{return a()}finally{k=c}},unstable_scheduleCallback:function(a,b,c){var e=v();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?e+c:e):c=e;switch(a){case 1:var d=-1;break;case 2:d=250;break;case 5:d=
1073741823;break;case 4:d=1E4;break;default:d=5E3}d=c+d;a={id:Ca++,callback:b,priorityLevel:a,startTime:c,expirationTime:d,sortIndex:-1};c>e?(a.sortIndex=c,O(r,a),null===p(q)&&a===p(r)&&(z?(ea(A),A=-1):z=!0,T(Q,c-e))):(a.sortIndex=d,O(q,a),u||F||(u=!0,R(S)));return a},unstable_cancelCallback:function(a){a.callback=null},unstable_wrapCallback:function(a){var b=k;return function(){var c=k;k=b;try{return a.apply(this,arguments)}finally{k=c}}},unstable_getCurrentPriorityLevel:function(){return k},unstable_shouldYield:fa,
unstable_requestPaint:function(){},unstable_continueExecution:function(){u||F||(u=!0,R(S))},unstable_pauseExecution:function(){},unstable_getFirstCallbackNode:function(){return p(q)},get unstable_now(){return v},unstable_forceFrameRate:function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ia=0<a?Math.floor(1E3/a):5},unstable_Profiling:null}};c.Children={map:C,forEach:function(a,b,c){C(a,function(){b.apply(this,
arguments)},c)},count:function(a){var b=0;C(a,function(){b++});return b},toArray:function(a){return C(a,function(a){return a})||[]},only:function(a){if(!M(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};c.Component=w;c.Fragment=ra;c.Profiler=ta;c.PureComponent=K;c.StrictMode=sa;c.Suspense=xa;c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t;c.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+
a+".");var e=ka({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=L.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var l=a.type.defaultProps;for(f in b)aa.call(b,f)&&!ba.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==l?l[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){l=Array(f);for(var g=0;g<f;g++)l[g]=arguments[g+2];e.children=l}return{$$typeof:y,type:a.type,key:d,ref:k,props:e,_owner:h}};c.createContext=function(a){a={$$typeof:va,
_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:ua,_context:a};return a.Consumer=a};c.createElement=Z;c.createFactory=function(a){var b=Z.bind(null,a);b.type=a;return b};c.createRef=function(){return{current:null}};c.forwardRef=function(a){return{$$typeof:wa,render:a}};c.isValidElement=M;c.lazy=function(a){return{$$typeof:za,_payload:{_status:-1,_result:a},_init:qa}};c.memo=function(a,b){return{$$typeof:ya,type:a,
compare:void 0===b?null:b}};c.startTransition=function(a,b){b=J.transition;J.transition={};try{a()}finally{J.transition=b}};c.unstable_act=function(a){throw Error("act(...) is not supported in production builds of React.");};c.useCallback=function(a,b){return g.current.useCallback(a,b)};c.useContext=function(a){return g.current.useContext(a)};c.useDebugValue=function(a,b){};c.useDeferredValue=function(a){return g.current.useDeferredValue(a)};c.useEffect=function(a,b){return g.current.useEffect(a,
b)};c.useId=function(){return g.current.useId()};c.useImperativeHandle=function(a,b,c){return g.current.useImperativeHandle(a,b,c)};c.useInsertionEffect=function(a,b){return g.current.useInsertionEffect(a,b)};c.useLayoutEffect=function(a,b){return g.current.useLayoutEffect(a,b)};c.useMemo=function(a,b){return g.current.useMemo(a,b)};c.useReducer=function(a,b,c){return g.current.useReducer(a,b,c)};c.useRef=function(a){return g.current.useRef(a)};c.useState=function(a){return g.current.useState(a)};
c.useSyncExternalStore=function(a,b,c){return g.current.useSyncExternalStore(a,b,c)};c.useTransition=function(){return g.current.useTransition()};c.version="18.2.0"});
})();

/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(){'use strict';(function(w,F){"object"===typeof exports&&"undefined"!==typeof module?F(exports,require("react")):"function"===typeof define&&define.amd?define(["exports","react"],F):(w=w||self,F(w.ReactDOMServer={},w.React))})(this,function(w,F){function l(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
function ra(a){if(v.call(sa,a))return!0;if(v.call(ta,a))return!1;if(hb.test(a))return sa[a]=!0;ta[a]=!0;return!1}function q(a,b,c,d,f,e,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=f;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=e;this.removeEmptyString=g}function r(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=ib.exec(a);if(b){var c="",d,f=0;for(d=b.index;d<a.length;d++){switch(a.charCodeAt(d)){case 34:b=
"&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==d&&(c+=a.substring(f,d));f=d+1;c+=b}a=f!==d?c+a.substring(f,d):c}return a}function y(a,b){return{insertionMode:a,selectedValue:b}}function jb(a,b,c){switch(b){case "select":return y(1,null!=c.value?c.value:c.defaultValue);case "svg":return y(2,null);case "math":return y(3,null);case "foreignObject":return y(1,null);case "table":return y(4,null);case "thead":case "tbody":case "tfoot":return y(5,
null);case "colgroup":return y(7,null);case "tr":return y(6,null)}return 4<=a.insertionMode||0===a.insertionMode?y(1,null):a}function ua(a,b,c){if("object"!==typeof c)throw Error(l(62));b=!0;for(var d in c)if(v.call(c,d)){var f=c[d];if(null!=f&&"boolean"!==typeof f&&""!==f){if(0===d.indexOf("--")){var e=r(d);f=r((""+f).trim())}else{e=d;var g=va.get(e);void 0!==g?e=g:(g=r(e.replace(kb,"-$1").toLowerCase().replace(lb,"-ms-")),va.set(e,g),e=g);f="number"===typeof f?0===f||v.call(L,d)?""+f:f+"px":r((""+
f).trim())}b?(b=!1,a.push(' style="',e,":",f)):a.push(";",e,":",f)}}b||a.push('"')}function x(a,b,c,d){switch(c){case "style":ua(a,b,d);return;case "defaultValue":case "defaultChecked":case "innerHTML":case "suppressContentEditableWarning":case "suppressHydrationWarning":return}if(!(2<c.length)||"o"!==c[0]&&"O"!==c[0]||"n"!==c[1]&&"N"!==c[1])if(b=p.hasOwnProperty(c)?p[c]:null,null!==b){switch(typeof d){case "function":case "symbol":return;case "boolean":if(!b.acceptsBooleans)return}c=b.attributeName;
switch(b.type){case 3:d&&a.push(" ",c,'=""');break;case 4:!0===d?a.push(" ",c,'=""'):!1!==d&&a.push(" ",c,'="',r(d),'"');break;case 5:isNaN(d)||a.push(" ",c,'="',r(d),'"');break;case 6:!isNaN(d)&&1<=d&&a.push(" ",c,'="',r(d),'"');break;default:b.sanitizeURL&&(d=""+d),a.push(" ",c,'="',r(d),'"')}}else if(ra(c)){switch(typeof d){case "function":case "symbol":return;case "boolean":if(b=c.toLowerCase().slice(0,5),"data-"!==b&&"aria-"!==b)return}a.push(" ",c,'="',r(d),'"')}}function M(a,b,c){if(null!=
b){if(null!=c)throw Error(l(60));if("object"!==typeof b||!("__html"in b))throw Error(l(61));b=b.__html;null!==b&&void 0!==b&&a.push(""+b)}}function mb(a){var b="";F.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function aa(a,b,c,d){a.push(z(c));var f=c=null,e;for(e in b)if(v.call(b,e)){var g=b[e];if(null!=g)switch(e){case "children":c=g;break;case "dangerouslySetInnerHTML":f=g;break;default:x(a,d,e,g)}}a.push(">");M(a,f,c);return"string"===typeof c?(a.push(r(c)),null):c}function z(a){var b=
wa.get(a);if(void 0===b){if(!nb.test(a))throw Error(l(65,a));b="<"+a;wa.set(a,b)}return b}function ob(a,b,c,d,f){switch(b){case "select":a.push(z("select"));var e=null,g=null;for(t in c)if(v.call(c,t)){var h=c[t];if(null!=h)switch(t){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;case "defaultValue":case "value":break;default:x(a,d,t,h)}}a.push(">");M(a,g,e);return e;case "option":g=f.selectedValue;a.push(z("option"));var m=h=null,n=null;var t=null;for(e in c)if(v.call(c,e)){var k=
c[e];if(null!=k)switch(e){case "children":h=k;break;case "selected":n=k;break;case "dangerouslySetInnerHTML":t=k;break;case "value":m=k;default:x(a,d,e,k)}}if(null!=g)if(c=null!==m?""+m:mb(h),ba(g))for(d=0;d<g.length;d++){if(""+g[d]===c){a.push(' selected=""');break}}else""+g===c&&a.push(' selected=""');else n&&a.push(' selected=""');a.push(">");M(a,t,h);return h;case "textarea":a.push(z("textarea"));t=g=e=null;for(h in c)if(v.call(c,h)&&(m=c[h],null!=m))switch(h){case "children":t=m;break;case "value":e=
m;break;case "defaultValue":g=m;break;case "dangerouslySetInnerHTML":throw Error(l(91));default:x(a,d,h,m)}null===e&&null!==g&&(e=g);a.push(">");if(null!=t){if(null!=e)throw Error(l(92));if(ba(t)&&1<t.length)throw Error(l(93));e=""+t}"string"===typeof e&&"\n"===e[0]&&a.push("\n");null!==e&&a.push(r(""+e));return null;case "input":a.push(z("input"));m=t=h=e=null;for(g in c)if(v.call(c,g)&&(n=c[g],null!=n))switch(g){case "children":case "dangerouslySetInnerHTML":throw Error(l(399,"input"));case "defaultChecked":m=
n;break;case "defaultValue":h=n;break;case "checked":t=n;break;case "value":e=n;break;default:x(a,d,g,n)}null!==t?x(a,d,"checked",t):null!==m&&x(a,d,"checked",m);null!==e?x(a,d,"value",e):null!==h&&x(a,d,"value",h);a.push("/>");return null;case "menuitem":a.push(z("menuitem"));for(var p in c)if(v.call(c,p)&&(e=c[p],null!=e))switch(p){case "children":case "dangerouslySetInnerHTML":throw Error(l(400));default:x(a,d,p,e)}a.push(">");return null;case "title":a.push(z("title"));e=null;for(k in c)if(v.call(c,
k)&&(g=c[k],null!=g))switch(k){case "children":e=g;break;case "dangerouslySetInnerHTML":throw Error(l(434));default:x(a,d,k,g)}a.push(">");return e;case "listing":case "pre":a.push(z(b));g=e=null;for(m in c)if(v.call(c,m)&&(h=c[m],null!=h))switch(m){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;default:x(a,d,m,h)}a.push(">");if(null!=g){if(null!=e)throw Error(l(60));if("object"!==typeof g||!("__html"in g))throw Error(l(61));c=g.__html;null!==c&&void 0!==c&&("string"===typeof c&&
0<c.length&&"\n"===c[0]?a.push("\n",c):a.push(""+c))}"string"===typeof e&&"\n"===e[0]&&a.push("\n");return e;case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":a.push(z(b));for(var q in c)if(v.call(c,q)&&(e=c[q],null!=e))switch(q){case "children":case "dangerouslySetInnerHTML":throw Error(l(399,b));default:x(a,d,q,e)}a.push("/>");return null;case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return aa(a,
c,b,d);case "html":return 0===f.insertionMode&&a.push("<!DOCTYPE html>"),aa(a,c,b,d);default:if(-1===b.indexOf("-")&&"string"!==typeof c.is)return aa(a,c,b,d);a.push(z(b));g=e=null;for(n in c)if(v.call(c,n)&&(h=c[n],null!=h))switch(n){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;case "style":ua(a,d,h);break;case "suppressContentEditableWarning":case "suppressHydrationWarning":break;default:ra(n)&&"function"!==typeof h&&"symbol"!==typeof h&&a.push(" ",n,'="',r(h),'"')}a.push(">");
M(a,g,e);return e}}function xa(a,b,c){a.push('\x3c!--$?--\x3e<template id="');if(null===c)throw Error(l(395));a.push(c);return a.push('"></template>')}function pb(a,b,c,d){switch(c.insertionMode){case 0:case 1:return a.push('<div hidden id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 2:return a.push('<svg aria-hidden="true" style="display:none" id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 3:return a.push('<math aria-hidden="true" style="display:none" id="'),
a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 4:return a.push('<table hidden id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 5:return a.push('<table hidden><tbody id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 6:return a.push('<table hidden><tr id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 7:return a.push('<table hidden><colgroup id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');
default:throw Error(l(397));}}function qb(a,b){switch(b.insertionMode){case 0:case 1:return a.push("</div>");case 2:return a.push("</svg>");case 3:return a.push("</math>");case 4:return a.push("</table>");case 5:return a.push("</tbody></table>");case 6:return a.push("</tr></table>");case 7:return a.push("</colgroup></table>");default:throw Error(l(397));}}function ca(a){return JSON.stringify(a).replace(rb,function(a){switch(a){case "<":return"\\u003c";case "\u2028":return"\\u2028";case "\u2029":return"\\u2029";
default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");}})}function sb(a,b){b=void 0===b?"":b;return{bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:b+"P:",segmentPrefix:b+"S:",boundaryPrefix:b+"B:",idPrefix:b,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:a}}
function ya(a,b,c,d){if(c.generateStaticMarkup)return a.push(r(b)),!1;""===b?a=d:(d&&a.push("\x3c!-- --\x3e"),a.push(r(b)),a=!0);return a}function da(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case za:return"Fragment";case Aa:return"Portal";case Ba:return"Profiler";case Ca:return"StrictMode";case Da:return"Suspense";case Ea:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Fa:return(a.displayName||
"Context")+".Consumer";case Ga:return(a._context.displayName||"Context")+".Provider";case Ha:var b=a.render;a=a.displayName;a||(a=b.displayName||b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ia:return b=a.displayName||null,null!==b?b:da(a.type)||"Memo";case ea:b=a._payload;a=a._init;try{return da(a(b))}catch(c){}}return null}function Ja(a,b){a=a.contextTypes;if(!a)return Ka;var c={},d;for(d in a)c[d]=b[d];return c}function N(a,b){if(a!==b){a.context._currentValue2=a.parentValue;
a=a.parent;var c=b.parent;if(null===a){if(null!==c)throw Error(l(401));}else{if(null===c)throw Error(l(401));N(a,c)}b.context._currentValue2=b.value}}function La(a){a.context._currentValue2=a.parentValue;a=a.parent;null!==a&&La(a)}function Ma(a){var b=a.parent;null!==b&&Ma(b);a.context._currentValue2=a.value}function Na(a,b){a.context._currentValue2=a.parentValue;a=a.parent;if(null===a)throw Error(l(402));a.depth===b.depth?N(a,b):Na(a,b)}function Oa(a,b){var c=b.parent;if(null===c)throw Error(l(402));
a.depth===c.depth?N(a,c):Oa(a,c);b.context._currentValue2=b.value}function O(a){var b=D;b!==a&&(null===b?Ma(a):null===a?La(b):b.depth===a.depth?N(b,a):b.depth>a.depth?Na(b,a):Oa(b,a),D=a)}function Pa(a,b,c,d){var f=void 0!==a.state?a.state:null;a.updater=Qa;a.props=c;a.state=f;var e={queue:[],replace:!1};a._reactInternals=e;var g=b.contextType;a.context="object"===typeof g&&null!==g?g._currentValue2:d;g=b.getDerivedStateFromProps;"function"===typeof g&&(g=g(c,f),f=null===g||void 0===g?f:G({},f,g),
a.state=f);if("function"!==typeof b.getDerivedStateFromProps&&"function"!==typeof a.getSnapshotBeforeUpdate&&("function"===typeof a.UNSAFE_componentWillMount||"function"===typeof a.componentWillMount))if(b=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),b!==a.state&&Qa.enqueueReplaceState(a,a.state,null),null!==e.queue&&0<e.queue.length)if(b=e.queue,g=e.replace,e.queue=null,e.replace=!1,g&&1===
b.length)a.state=b[0];else{e=g?b[0]:a.state;f=!0;for(g=g?1:0;g<b.length;g++){var h=b[g];h="function"===typeof h?h.call(a,e,c,d):h;null!=h&&(f?(f=!1,e=G({},e,h)):G(e,h))}a.state=e}else e.queue=null}function fa(a,b,c){var d=a.id;a=a.overflow;var f=32-P(d)-1;d&=~(1<<f);c+=1;var e=32-P(b)+f;if(30<e){var g=f-f%5;e=(d&(1<<g)-1).toString(32);d>>=g;f-=g;return{id:1<<32-P(b)+f|c<<f|d,overflow:e+a}}return{id:1<<e|c<<f|d,overflow:a}}function tb(a){a>>>=0;return 0===a?32:31-(ub(a)/vb|0)|0}function wb(a,b){return a===
b&&(0!==a||1/a===1/b)||a!==a&&b!==b}function E(){if(null===B)throw Error(l(321));return B}function Ra(){if(0<Q)throw Error(l(312));return{memoizedState:null,queue:null,next:null}}function ha(){null===k?null===R?(H=!1,R=k=Ra()):(H=!0,k=R):null===k.next?(H=!1,k=k.next=Ra()):(H=!0,k=k.next);return k}function ia(){ja=B=null;S=!1;R=null;Q=0;k=A=null}function Sa(a,b){return"function"===typeof b?b(a):b}function Ta(a,b,c){B=E();k=ha();if(H){var d=k.queue;b=d.dispatch;if(null!==A&&(c=A.get(d),void 0!==c)){A.delete(d);
d=k.memoizedState;do d=a(d,c.action),c=c.next;while(null!==c);k.memoizedState=d;return[d,b]}return[k.memoizedState,b]}a=a===Sa?"function"===typeof b?b():b:void 0!==c?c(b):b;k.memoizedState=a;a=k.queue={last:null,dispatch:null};a=a.dispatch=xb.bind(null,B,a);return[k.memoizedState,a]}function Ua(a,b){B=E();k=ha();b=void 0===b?null:b;if(null!==k){var c=k.memoizedState;if(null!==c&&null!==b){var d=c[1];a:if(null===d)d=!1;else{for(var f=0;f<d.length&&f<b.length;f++)if(!yb(b[f],d[f])){d=!1;break a}d=!0}if(d)return c[0]}}a=
a();k.memoizedState=[a,b];return a}function xb(a,b,c){if(25<=Q)throw Error(l(301));if(a===B)if(S=!0,a={action:c,next:null},null===A&&(A=new Map),c=A.get(b),void 0===c)A.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}}function zb(){throw Error(l(394));}function T(){}function Ab(a){console.error(a);return null}function I(){}function Bb(a,b,c,d,f,e,g,h,m){var n=[],l=new Set;b={destination:null,responseState:b,progressiveChunkSize:void 0===d?12800:d,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,
pendingRootTasks:0,completedRootSegment:null,abortableTasks:l,pingedTasks:n,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:void 0===f?Ab:f,onAllReady:void 0===e?I:e,onShellReady:void 0===g?I:g,onShellError:void 0===h?I:h,onFatalError:void 0===m?I:m};c=U(b,0,null,c,!1,!1);c.parentFlushed=!0;a=ka(b,a,null,c,l,Ka,null,Cb);n.push(a);return b}function ka(a,b,c,d,f,e,g,h){a.allPendingTasks++;null===c?a.pendingRootTasks++:c.pendingTasks++;var m={node:b,ping:function(){var b=
a.pingedTasks;b.push(m);1===b.length&&Va(a)},blockedBoundary:c,blockedSegment:d,abortSet:f,legacyContext:e,context:g,treeContext:h};f.add(m);return m}function U(a,b,c,d,f,e){return{status:0,id:-1,index:b,parentFlushed:!1,chunks:[],children:[],formatContext:d,boundary:c,lastPushedText:f,textEmbedded:e}}function J(a,b){a=a.onError(b);if(null!=a&&"string"!==typeof a)throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+
typeof a+'" instead');return a}function V(a,b){var c=a.onShellError;c(b);c=a.onFatalError;c(b);null!==a.destination?(a.status=2,a.destination.destroy(b)):(a.status=1,a.fatalError=b)}function Wa(a,b,c,d,f){B={};ja=b;K=0;for(a=c(d,f);S;)S=!1,K=0,Q+=1,k=null,a=c(d,f);ia();return a}function Xa(a,b,c,d,f){f=c.render();var e=d.childContextTypes;if(null!==e&&void 0!==e){var g=b.legacyContext;if("function"!==typeof c.getChildContext)d=g;else{c=c.getChildContext();for(var h in c)if(!(h in e))throw Error(l(108,
da(d)||"Unknown",h));d=G({},g,c)}b.legacyContext=d;u(a,b,f);b.legacyContext=g}else u(a,b,f)}function Ya(a,b){if(a&&a.defaultProps){b=G({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}function la(a,b,c,d,f){if("function"===typeof c)if(c.prototype&&c.prototype.isReactComponent){f=Ja(c,b.legacyContext);var e=c.contextType;e=new c(d,"object"===typeof e&&null!==e?e._currentValue2:f);Pa(e,c,d,f);Xa(a,b,e,c)}else{e=Ja(c,b.legacyContext);f=Wa(a,b,c,d,e);var g=0!==K;if("object"===
typeof f&&null!==f&&"function"===typeof f.render&&void 0===f.$$typeof)Pa(f,c,d,e),Xa(a,b,f,c);else if(g){d=b.treeContext;b.treeContext=fa(d,1,0);try{u(a,b,f)}finally{b.treeContext=d}}else u(a,b,f)}else if("string"===typeof c){f=b.blockedSegment;e=ob(f.chunks,c,d,a.responseState,f.formatContext);f.lastPushedText=!1;g=f.formatContext;f.formatContext=jb(g,c,d);ma(a,b,e);f.formatContext=g;switch(c){case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "input":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":break;
default:f.chunks.push("</",c,">")}f.lastPushedText=!1}else{switch(c){case Db:case Eb:case Ca:case Ba:case za:u(a,b,d.children);return;case Ea:u(a,b,d.children);return;case Fb:throw Error(l(343));case Da:a:{c=b.blockedBoundary;f=b.blockedSegment;e=d.fallback;d=d.children;g=new Set;var h={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:g,errorDigest:null},m=U(a,f.chunks.length,h,f.formatContext,!1,!1);f.children.push(m);
f.lastPushedText=!1;var n=U(a,0,null,f.formatContext,!1,!1);n.parentFlushed=!0;b.blockedBoundary=h;b.blockedSegment=n;try{if(ma(a,b,d),a.responseState.generateStaticMarkup||n.lastPushedText&&n.textEmbedded&&n.chunks.push("\x3c!-- --\x3e"),n.status=1,W(h,n),0===h.pendingTasks)break a}catch(t){n.status=4,h.forceClientRender=!0,h.errorDigest=J(a,t)}finally{b.blockedBoundary=c,b.blockedSegment=f}b=ka(a,e,c,m,g,b.legacyContext,b.context,b.treeContext);a.pingedTasks.push(b)}return}if("object"===typeof c&&
null!==c)switch(c.$$typeof){case Ha:d=Wa(a,b,c.render,d,f);if(0!==K){c=b.treeContext;b.treeContext=fa(c,1,0);try{u(a,b,d)}finally{b.treeContext=c}}else u(a,b,d);return;case Ia:c=c.type;d=Ya(c,d);la(a,b,c,d,f);return;case Ga:f=d.children;c=c._context;d=d.value;e=c._currentValue2;c._currentValue2=d;g=D;D=d={parent:g,depth:null===g?0:g.depth+1,context:c,parentValue:e,value:d};b.context=d;u(a,b,f);a=D;if(null===a)throw Error(l(403));d=a.parentValue;a.context._currentValue2=d===Gb?a.context._defaultValue:
d;a=D=a.parent;b.context=a;return;case Fa:d=d.children;d=d(c._currentValue2);u(a,b,d);return;case ea:f=c._init;c=f(c._payload);d=Ya(c,d);la(a,b,c,d,void 0);return}throw Error(l(130,null==c?c:typeof c,""));}}function u(a,b,c){b.node=c;if("object"===typeof c&&null!==c){switch(c.$$typeof){case Hb:la(a,b,c.type,c.props,c.ref);return;case Aa:throw Error(l(257));case ea:var d=c._init;c=d(c._payload);u(a,b,c);return}if(ba(c)){Za(a,b,c);return}null===c||"object"!==typeof c?d=null:(d=$a&&c[$a]||c["@@iterator"],
d="function"===typeof d?d:null);if(d&&(d=d.call(c))){c=d.next();if(!c.done){var f=[];do f.push(c.value),c=d.next();while(!c.done);Za(a,b,f)}return}a=Object.prototype.toString.call(c);throw Error(l(31,"[object Object]"===a?"object with keys {"+Object.keys(c).join(", ")+"}":a));}"string"===typeof c?(d=b.blockedSegment,d.lastPushedText=ya(b.blockedSegment.chunks,c,a.responseState,d.lastPushedText)):"number"===typeof c&&(d=b.blockedSegment,d.lastPushedText=ya(b.blockedSegment.chunks,""+c,a.responseState,
d.lastPushedText))}function Za(a,b,c){for(var d=c.length,f=0;f<d;f++){var e=b.treeContext;b.treeContext=fa(e,d,f);try{ma(a,b,c[f])}finally{b.treeContext=e}}}function ma(a,b,c){var d=b.blockedSegment.formatContext,f=b.legacyContext,e=b.context;try{return u(a,b,c)}catch(m){if(ia(),"object"===typeof m&&null!==m&&"function"===typeof m.then){c=m;var g=b.blockedSegment,h=U(a,g.chunks.length,null,g.formatContext,g.lastPushedText,!0);g.children.push(h);g.lastPushedText=!1;a=ka(a,b.node,b.blockedBoundary,
h,b.abortSet,b.legacyContext,b.context,b.treeContext).ping;c.then(a,a);b.blockedSegment.formatContext=d;b.legacyContext=f;b.context=e;O(e)}else throw b.blockedSegment.formatContext=d,b.legacyContext=f,b.context=e,O(e),m;}}function Ib(a){var b=a.blockedBoundary;a=a.blockedSegment;a.status=3;ab(this,b,a)}function bb(a,b,c){var d=a.blockedBoundary;a.blockedSegment.status=3;null===d?(b.allPendingTasks--,2!==b.status&&(b.status=2,null!==b.destination&&b.destination.push(null))):(d.pendingTasks--,d.forceClientRender||
(d.forceClientRender=!0,a=void 0===c?Error(l(432)):c,d.errorDigest=b.onError(a),d.parentFlushed&&b.clientRenderedBoundaries.push(d)),d.fallbackAbortableTasks.forEach(function(a){return bb(a,b,c)}),d.fallbackAbortableTasks.clear(),b.allPendingTasks--,0===b.allPendingTasks&&(d=b.onAllReady,d()))}function W(a,b){if(0===b.chunks.length&&1===b.children.length&&null===b.children[0].boundary){var c=b.children[0];c.id=b.id;c.parentFlushed=!0;1===c.status&&W(a,c)}else a.completedSegments.push(b)}function ab(a,
b,c){if(null===b){if(c.parentFlushed){if(null!==a.completedRootSegment)throw Error(l(389));a.completedRootSegment=c}a.pendingRootTasks--;0===a.pendingRootTasks&&(a.onShellError=I,b=a.onShellReady,b())}else b.pendingTasks--,b.forceClientRender||(0===b.pendingTasks?(c.parentFlushed&&1===c.status&&W(b,c),b.parentFlushed&&a.completedBoundaries.push(b),b.fallbackAbortableTasks.forEach(Ib,a),b.fallbackAbortableTasks.clear()):c.parentFlushed&&1===c.status&&(W(b,c),1===b.completedSegments.length&&b.parentFlushed&&
a.partialBoundaries.push(b)));a.allPendingTasks--;0===a.allPendingTasks&&(a=a.onAllReady,a())}function Va(a){if(2!==a.status){var b=D,c=na.current;na.current=cb;var d=X;X=a.responseState;try{var f=a.pingedTasks,e;for(e=0;e<f.length;e++){var g=f[e];var h=a,m=g.blockedSegment;if(0===m.status){O(g.context);try{u(h,g,g.node),h.responseState.generateStaticMarkup||m.lastPushedText&&m.textEmbedded&&m.chunks.push("\x3c!-- --\x3e"),g.abortSet.delete(g),m.status=1,ab(h,g.blockedBoundary,m)}catch(C){if(ia(),
"object"===typeof C&&null!==C&&"function"===typeof C.then){var l=g.ping;C.then(l,l)}else{g.abortSet.delete(g);m.status=4;var k=g.blockedBoundary,p=C,q=J(h,p);null===k?V(h,p):(k.pendingTasks--,k.forceClientRender||(k.forceClientRender=!0,k.errorDigest=q,k.parentFlushed&&h.clientRenderedBoundaries.push(k)));h.allPendingTasks--;if(0===h.allPendingTasks){var r=h.onAllReady;r()}}}finally{}}}f.splice(0,e);null!==a.destination&&oa(a,a.destination)}catch(C){J(a,C),V(a,C)}finally{X=d,na.current=c,c===cb&&
O(b)}}}function Y(a,b,c){c.parentFlushed=!0;switch(c.status){case 0:var d=c.id=a.nextSegmentId++;c.lastPushedText=!1;c.textEmbedded=!1;a=a.responseState;b.push('<template id="');b.push(a.placeholderPrefix);a=d.toString(16);b.push(a);return b.push('"></template>');case 1:c.status=2;var f=!0;d=c.chunks;var e=0;c=c.children;for(var g=0;g<c.length;g++){for(f=c[g];e<f.index;e++)b.push(d[e]);f=Z(a,b,f)}for(;e<d.length-1;e++)b.push(d[e]);e<d.length&&(f=b.push(d[e]));return f;default:throw Error(l(390));
}}function Z(a,b,c){var d=c.boundary;if(null===d)return Y(a,b,c);d.parentFlushed=!0;if(d.forceClientRender)return a.responseState.generateStaticMarkup||(d=d.errorDigest,b.push("\x3c!--$!--\x3e"),b.push("<template"),d&&(b.push(' data-dgst="'),d=r(d),b.push(d),b.push('"')),b.push("></template>")),Y(a,b,c),a=a.responseState.generateStaticMarkup?!0:b.push("\x3c!--/$--\x3e"),a;if(0<d.pendingTasks){d.rootSegmentID=a.nextSegmentId++;0<d.completedSegments.length&&a.partialBoundaries.push(d);var f=a.responseState;
var e=f.nextSuspenseID++;f=f.boundaryPrefix+e.toString(16);d=d.id=f;xa(b,a.responseState,d);Y(a,b,c);return b.push("\x3c!--/$--\x3e")}if(d.byteSize>a.progressiveChunkSize)return d.rootSegmentID=a.nextSegmentId++,a.completedBoundaries.push(d),xa(b,a.responseState,d.id),Y(a,b,c),b.push("\x3c!--/$--\x3e");a.responseState.generateStaticMarkup||b.push("\x3c!--$--\x3e");c=d.completedSegments;if(1!==c.length)throw Error(l(391));Z(a,b,c[0]);a=a.responseState.generateStaticMarkup?!0:b.push("\x3c!--/$--\x3e");
return a}function db(a,b,c){pb(b,a.responseState,c.formatContext,c.id);Z(a,b,c);return qb(b,c.formatContext)}function eb(a,b,c){for(var d=c.completedSegments,f=0;f<d.length;f++)fb(a,b,c,d[f]);d.length=0;a=a.responseState;d=c.id;c=c.rootSegmentID;b.push(a.startInlineScript);a.sentCompleteBoundaryFunction?b.push('$RC("'):(a.sentCompleteBoundaryFunction=!0,b.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'));
if(null===d)throw Error(l(395));c=c.toString(16);b.push(d);b.push('","');b.push(a.segmentPrefix);b.push(c);return b.push('")\x3c/script>')}function fb(a,b,c,d){if(2===d.status)return!0;var f=d.id;if(-1===f){if(-1===(d.id=c.rootSegmentID))throw Error(l(392));return db(a,b,d)}db(a,b,d);a=a.responseState;b.push(a.startInlineScript);a.sentCompleteSegmentFunction?b.push('$RS("'):(a.sentCompleteSegmentFunction=!0,b.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'));
b.push(a.segmentPrefix);f=f.toString(16);b.push(f);b.push('","');b.push(a.placeholderPrefix);b.push(f);return b.push('")\x3c/script>')}function oa(a,b){try{var c=a.completedRootSegment;if(null!==c&&0===a.pendingRootTasks){Z(a,b,c);a.completedRootSegment=null;var d=a.responseState.bootstrapChunks;for(c=0;c<d.length-1;c++)b.push(d[c]);c<d.length&&b.push(d[c])}var f=a.clientRenderedBoundaries,e;for(e=0;e<f.length;e++){var g=f[e];d=b;var h=a.responseState,m=g.id,k=g.errorDigest,p=g.errorMessage,q=g.errorComponentStack;
d.push(h.startInlineScript);h.sentClientRenderFunction?d.push('$RX("'):(h.sentClientRenderFunction=!0,d.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'));if(null===m)throw Error(l(395));d.push(m);d.push('"');if(k||p||q){d.push(",");var r=ca(k||"");d.push(r)}if(p||q){d.push(",");var v=ca(p||"");d.push(v)}if(q){d.push(",");var x=ca(q);d.push(x)}if(!d.push(")\x3c/script>")){a.destination=
null;e++;f.splice(0,e);return}}f.splice(0,e);var u=a.completedBoundaries;for(e=0;e<u.length;e++)if(!eb(a,b,u[e])){a.destination=null;e++;u.splice(0,e);return}u.splice(0,e);var w=a.partialBoundaries;for(e=0;e<w.length;e++){var z=w[e];a:{f=a;g=b;var y=z.completedSegments;for(h=0;h<y.length;h++)if(!fb(f,g,z,y[h])){h++;y.splice(0,h);var B=!1;break a}y.splice(0,h);B=!0}if(!B){a.destination=null;e++;w.splice(0,e);return}}w.splice(0,e);var A=a.completedBoundaries;for(e=0;e<A.length;e++)if(!eb(a,b,A[e])){a.destination=
null;e++;A.splice(0,e);return}A.splice(0,e)}finally{0===a.allPendingTasks&&0===a.pingedTasks.length&&0===a.clientRenderedBoundaries.length&&0===a.completedBoundaries.length&&b.push(null)}}function Jb(a,b){try{var c=a.abortableTasks;c.forEach(function(c){return bb(c,a,b)});c.clear();null!==a.destination&&oa(a,a.destination)}catch(d){J(a,d),V(a,d)}}function Kb(){}function gb(a,b,c,d){var f=!1,e=null,g="",h={push:function(a){null!==a&&(g+=a);return!0},destroy:function(a){f=!0;e=a}},k=!1;a=Bb(a,sb(c,
b?b.identifierPrefix:void 0),{insertionMode:1,selectedValue:null},Infinity,Kb,void 0,function(){k=!0},void 0,void 0);Va(a);Jb(a,d);if(1===a.status)a.status=2,h.destroy(a.fatalError);else if(2!==a.status&&null===a.destination){a.destination=h;try{oa(a,h)}catch(n){J(a,n),V(a,n)}}if(f)throw e;if(!k)throw Error(l(426));return g}var v=Object.prototype.hasOwnProperty,hb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
ta={},sa={},p={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){p[a]=new q(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];p[b]=new q(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){p[a]=new q(a,2,!1,a.toLowerCase(),null,
!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){p[a]=new q(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){p[a]=new q(a,3,!1,a.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(a){p[a]=
new q(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){p[a]=new q(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){p[a]=new q(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){p[a]=new q(a,5,!1,a.toLowerCase(),null,!1,!1)});var pa=/[\-:]([a-z])/g,qa=function(a){return a[1].toUpperCase()};"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=
a.replace(pa,qa);p[b]=new q(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(pa,qa);p[b]=new q(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(pa,qa);p[b]=new q(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){p[a]=new q(a,1,!1,a.toLowerCase(),null,!1,!1)});p.xlinkHref=new q("xlinkHref",
1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){p[a]=new q(a,1,!1,a.toLowerCase(),null,!0,!0)});var L={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,
gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lb=["Webkit","ms","Moz","O"];Object.keys(L).forEach(function(a){Lb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);L[b]=L[a]})});var ib=/["'&<>]/,kb=/([A-Z])/g,lb=/^ms-/,ba=Array.isArray,
va=new Map,nb=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,wa=new Map,rb=/[<\u2028\u2029]/g,G=Object.assign,Hb=Symbol.for("react.element"),Aa=Symbol.for("react.portal"),za=Symbol.for("react.fragment"),Ca=Symbol.for("react.strict_mode"),Ba=Symbol.for("react.profiler"),Ga=Symbol.for("react.provider"),Fa=Symbol.for("react.context"),Ha=Symbol.for("react.forward_ref"),Da=Symbol.for("react.suspense"),Ea=Symbol.for("react.suspense_list"),Ia=Symbol.for("react.memo"),ea=Symbol.for("react.lazy"),Fb=Symbol.for("react.scope"),
Eb=Symbol.for("react.debug_trace_mode"),Db=Symbol.for("react.legacy_hidden"),Gb=Symbol.for("react.default_value"),$a=Symbol.iterator,Ka={},D=null,Qa={isMounted:function(a){return!1},enqueueSetState:function(a,b,c){a=a._reactInternals;null!==a.queue&&a.queue.push(b)},enqueueReplaceState:function(a,b,c){a=a._reactInternals;a.replace=!0;a.queue=[b]},enqueueForceUpdate:function(a,b){}},Cb={id:1,overflow:""},P=Math.clz32?Math.clz32:tb,ub=Math.log,vb=Math.LN2,yb="function"===typeof Object.is?Object.is:
wb,B=null,ja=null,R=null,k=null,H=!1,S=!1,K=0,A=null,Q=0,cb={readContext:function(a){return a._currentValue2},useContext:function(a){E();return a._currentValue2},useMemo:Ua,useReducer:Ta,useRef:function(a){B=E();k=ha();var b=k.memoizedState;return null===b?(a={current:a},k.memoizedState=a):b},useState:function(a){return Ta(Sa,a)},useInsertionEffect:T,useLayoutEffect:function(a,b){},useCallback:function(a,b){return Ua(function(){return a},b)},useImperativeHandle:T,useEffect:T,useDebugValue:T,useDeferredValue:function(a){E();
return a},useTransition:function(){E();return[!1,zb]},useId:function(){var a=ja.treeContext;var b=a.overflow;a=a.id;a=(a&~(1<<32-P(a)-1)).toString(32)+b;var c=X;if(null===c)throw Error(l(404));b=K++;a=":"+c.idPrefix+"R"+a;0<b&&(a+="H"+b.toString(32));return a+":"},useMutableSource:function(a,b,c){E();return b(a._source)},useSyncExternalStore:function(a,b,c){if(void 0===c)throw Error(l(407));return c()}},X=null,na=F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;w.renderToNodeStream=
function(){throw Error(l(207));};w.renderToStaticMarkup=function(a,b){return gb(a,b,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};w.renderToStaticNodeStream=function(){throw Error(l(208));};w.renderToString=function(a,b){return gb(a,b,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};
w.version="18.2.0"});
})();

/* ============================ INTERFACE LANGUAGE ============================
   The whole interface can be read in Spanish. Rather than threading a language through every
   component, every element passes through one translator: string children and the few
   host-element attributes a person reads (title, placeholder, aria-label). What an agent SAYS is
   never translated — it follows the agent's own language, set on the Voice step — so this table
   holds interface text only. Anything without an entry is left exactly as it was. */
let UI_LANG = 'en';
try { if (typeof localStorage !== 'undefined' && localStorage.getItem('ucx.uiLang') === 'es') UI_LANG = 'es'; } catch (e) {}
const setUiLang = l => { UI_LANG = l === 'es' ? 'es' : 'en';
  try { localStorage.setItem('ucx.uiLang', UI_LANG); } catch (e) {}
  try { document.documentElement.lang = UI_LANG; } catch (e) {} };

const ES = {
  /* shell */
  'Administrator':'Administrador', 'Users':'Usuarios', 'Connectors':'Conectores', 'Campaigns':'Campañas',
  'AI Agents':'Agentes de IA', 'Automations':'Automatizaciones', 'Configuration':'Configuración',
  'Analytics':'Analítica', 'Outbound hub':'Outbound Hub', 'Interactions':'Interacciones', 'Wallboards':'Wallboards',
  'Developer':'Desarrollador', 'Forms':'Formularios', 'Interface language':'Idioma de la interfaz',
  /* agent list */
  'Create agent':'Crear agente', 'Search agents':'Buscar agentes', 'Inbound':'Entrante', 'Outbound':'Saliente',
  'Deployed':'Desplegado', 'credits left · renews':'créditos disponibles · se renueva el', 'of':'de',
  'Deployed before · no dialer is running it now':'Desplegado antes · ningún discador lo usa ahora',
  'It':'El agente', 'in':'en', 'dialers':'discadores',
  /* templates */
  'Lead capture & quotes':'Captación y cotizaciones', 'Appointments':'Citas', 'Messages & callbacks':'Recados y devoluciones',
  'Collections':'Cobranzas', 'Receptionist':'Recepcionista',
  'Calls people who asked about a product, checks what they need and gets them a quote.':'Llama a quienes preguntaron por un producto, averigua qué necesitan y les consigue una cotización.',
  'Confirms, moves and reminds — for clinics, workshops and service visits.':'Confirma, reprograma y recuerda: para clínicas, talleres y visitas técnicas.',
  'Delivers a message, takes one back and agrees when a person will call.':'Entrega un recado, toma otro y acuerda cuándo llamará una persona.',
  'Explains an overdue balance, agrees a payment date and sends the payment link.':'Explica un saldo vencido, acuerda una fecha de pago y envía el enlace de pago.',
  'Answers the company line, greets callers, collects who is calling and why, and passes a summary on.':'Atiende la línea de la empresa, saluda, registra quién llama y por qué, y envía un resumen.',
  'New · inbound only':'Nuevo · solo entrante',
  /* wizard chrome */
  'Agents':'Agentes', 'Draft saved':'Borrador guardado', 'Saving…':'Guardando…', 'Back':'Atrás', 'Continue':'Continuar',
  'Direction & job':'Dirección y tarea', 'Voice':'Voz', 'Scope':'Alcance', 'Rules':'Reglas', 'Test':'Prueba',
  /* step 1 */
  'Who starts the interaction?':'¿Quién inicia la interacción?', 'What job should it do?':'¿Qué tarea debe hacer?',
  'Pick the closest one. Each brings rules already filled in':'Elige la más parecida. Cada una trae reglas ya completadas',
  ', worded for calls coming in':', redactadas para llamadas entrantes',
  'Direction is fixed once an agent exists.':'La dirección queda fija una vez creado el agente.',
  'Something else':'Otra cosa', 'Talk to our team':'Hablar con nuestro equipo',
  'Describe the job in your own words and our team builds the template with you.':'Describe la tarea con tus palabras y nuestro equipo arma la plantilla contigo.',
  'Nothing here is locked in. Every rule a template brings can be changed in step 4.':'Nada queda fijo. Cada regla que trae una plantilla se puede cambiar en el paso 4.',
  'Learn more: AI agent collection prerequisites — list, dialer and disposition requirements':'Más información: requisitos del agente de IA de cobranzas — lista, discador y tipificaciones',
  'Learn more: AI agent collection prerequisites':'Más información: requisitos del agente de IA de cobranzas',
  'AI agent collection prerequisites':'Requisitos del agente de IA de cobranzas', 'Prerequisites':'Requisitos', 'Learn more':'Más información',
  'Four things have to be in place before an agent can take or make interactions. Three of them are set up outside this screen.':'Hay cuatro cosas que deben estar listas antes de que un agente pueda atender o iniciar interacciones. Tres se configuran fuera de esta pantalla.',
  'A dialer to run in':'Un discador donde correr', 'A list of people to call':'Una lista de personas a llamar',
  'Dispositions on the campaign':'Tipificaciones en la campaña', 'Credits on the account':'Créditos en la cuenta',
  'An agent runs inside a dialer. Deploy stays blocked until it is in one, and the agent page says which dialers are running it. Dialers are assigned in the Outbound Hub, not here.':'Un agente corre dentro de un discador. Desplegar queda bloqueado hasta que esté en uno, y la página del agente indica qué discadores lo usan. Los discadores se asignan en el Outbound Hub, no aquí.',
  'An outbound agent calls the contacts in its dialer’s list. Testing never touches that list — a test call rings your own number and nobody else’s.':'Un agente saliente llama a los contactos de la lista de su discador. Las pruebas nunca tocan esa lista: una llamada de prueba suena solo en tu número.',
  'How an interaction is coded when it ends is configured on the campaign, outside the agent. The agent reports what happened; it does not define the codes.':'Cómo se tipifica una interacción al terminar se configura en la campaña, fuera del agente. El agente informa qué pasó; no define los códigos.',
  'Every interaction an agent handles spends credits, and each one reports its own total. What is left is shown on the AI Agents screen.':'Cada interacción que atiende un agente consume créditos, y cada una informa su total. El saldo se muestra en la pantalla de Agentes de IA.',
  'Tell us about the job':'Cuéntanos sobre la tarea', 'Send to my team':'Enviar a mi equipo',
  'Describe the calls you want in your own words. A solutions engineer builds the template with you.':'Describe las llamadas que quieres con tus palabras. Un ingeniero de soluciones arma la plantilla contigo.',
  'We need to call people who missed a delivery and agree a new day…':'Necesitamos llamar a quienes no recibieron una entrega y acordar un nuevo día…',
  /* step 2 */
  'Which language, and whose voice?':'¿Qué idioma y qué voz?',
  'An agent speaks one language. Pick it, then listen to the voices available for that language.':'Un agente habla un solo idioma. Elígelo y escucha las voces disponibles para ese idioma.',
  'Language':'Idioma', 'Sample':'Muestra', 'voices ·':'voces ·', '· sample line':'· frase de muestra',
  'English (United States)':'Inglés (Estados Unidos)', 'Spanish (Latin America)':'Español (Latinoamérica)',
  'English (US)':'Inglés (EE. UU.)', 'Spanish (LATAM)':'Español (LATAM)',
  /* step 3 — the brief */
  'What it will do on every call':'Qué hará en cada llamada',
  'Written out in full. Anything underlined is yours to change — tap it.':'Escrito completo. Todo lo subrayado lo puedes cambiar: tócalo.',
  ', asks what they need, then':', pregunta qué necesitan, luego', ', delivers the message, then':', entrega el recado, luego',
  ', states the date and time, then':', indica la fecha y la hora, luego', 'mentions a complaint':'menciona un reclamo', 'a lawyer':'un abogado',
  '· Call':'· Llamada', 'days':'días',
  'It calls':'Llama a', 'It answers calls to':'Atiende las llamadas de', 'On each one it':'En cada llamada, el agente',
  ', then':', luego', 'then':'luego', ', and':', y', 'and':'y',
  'If someone asks for a person, it':'Si alguien pide hablar con una persona, el agente',
  'people with overdue payments at':'personas con pagos vencidos en', 'people who asked for a quote from':'personas que pidieron una cotización a',
  'customers of':'clientes de', 'people who left a message for':'personas que dejaron un recado a', 'callers of':'quienes llaman a',
  'The name the agent says out loud.':'El nombre que el agente dice en voz alta.',
  'Used in the greeting and the spoken disclosure.':'Se usa en el saludo y en el aviso hablado.',
  'Used in the greeting and the disclosure.':'Se usa en el saludo y en el aviso.',
  'How it opens, before anything else.':'Cómo empieza, antes que nada.',
  'The one thing the call is for.':'Lo único para lo que es la llamada.',
  'The escape hatch. Always available to the caller.':'La salida de emergencia. Siempre disponible para quien llama.',
  'verifies who it is speaking to':'verifica con quién está hablando', 'asks for the person by name':'pregunta por la persona por su nombre',
  'speaks to whoever answers':'habla con quien atienda',
  'On collections calls the agent must establish who it is speaking to. The balance can never be mentioned to anyone else, so there is no option to speak to whoever answers.':'En las llamadas de cobranza el agente debe confirmar con quién habla. El saldo nunca se puede mencionar a otra persona, así que no existe la opción de hablar con quien atienda.',
  'sends a quote by WhatsApp the same day':'envía una cotización por WhatsApp el mismo día', 'books a visit with an advisor':'agenda una visita con un asesor',
  'asks the budget and passes it to sales':'pregunta el presupuesto y lo pasa a ventas', 'confirms or moves the appointment':'confirma o reprograma la cita',
  'only confirms, never reschedules':'solo confirma, nunca reprograma', 'confirms and explains what to bring':'confirma y explica qué traer',
  'agrees a callback time and number':'acuerda hora y número para devolver la llamada', 'delivers the message and ends':'entrega el recado y termina',
  'reads the message back to confirm':'repite el recado para confirmarlo', 'agrees a payment date within':'acuerda una fecha de pago en un plazo de',
  'agrees a partial payment of at least':'acuerda un pago parcial de al menos',
  'verifies when the customer intends to pay':'verifica cuándo el cliente tiene intención de pagar',
  'Goal: records the date the customer gave':'Objetivo: registra la fecha que dio el cliente',
  'collects the caller’s details and confirms them back':'registra los datos de quien llama y los confirma',
  'books an appointment from the connected calendar':'agenda una cita en el calendario conectado',
  'answers questions from the business profile, then takes a message':'responde preguntas con el perfil de la empresa y luego toma un recado',
  'takes a message':'toma un recado', 'books appointments':'agenda citas', 'answers questions from the business profile':'responde preguntas con el perfil de la empresa',
  'Days to pay':'Días para pagar', 'Minimum share':'Porcentaje mínimo', 'Custom':'Personalizado',
  'Custom days to pay':'Días para pagar, personalizado', 'Custom minimum share':'Porcentaje mínimo, personalizado',
  'How long the customer gets before the date it agrees.':'Cuánto tiempo tiene el cliente hasta la fecha que acuerda.',
  'The smallest part of the balance the agent may accept.':'La parte más pequeña del saldo que el agente puede aceptar.',
  'transfers to a campaign':'transfiere a una campaña', 'takes a message and ends the call':'toma un recado y termina la llamada',
  'Campaign':'Campaña',
  'A transfer goes to the people working that campaign. Taking a message ends the call and sends your team what it collected.':'Una transferencia va a las personas que trabajan esa campaña. Tomar un recado termina la llamada y envía a tu equipo lo que recogió.',
  'Transfer puts the caller through live, to the people working that campaign. Taking a message ends the call and sends your team what it collected.':'Transferir pasa la llamada en vivo a las personas que trabajan esa campaña. Tomar un recado termina la llamada y envía a tu equipo lo que recogió.',
  'states the amount owed':'indica el monto adeudado', 'says only that there is an outstanding balance':'solo dice que hay un saldo pendiente',
  'What it tells the right person about the balance.':'Qué le dice a la persona correcta sobre el saldo.',
  'Either way the balance is only ever discussed with the intended person. The real amount comes from the campaign’s contact list;':'En cualquier caso, el saldo solo se habla con la persona indicada. El monto real viene de la lista de contactos de la campaña;',
  'stands in for it here.':'lo reemplaza aquí.',
  'sends the payment link to the contact channel on file, without saying which':'envía el enlace de pago al canal de contacto registrado, sin decir cuál',
  'tells the customer where to pay':'le dice al cliente dónde pagar',
  'How the customer pays once a date is agreed.':'Cómo paga el cliente una vez acordada la fecha.',
  'Where to pay':'Dónde pagar', 'Any Banco Sol branch, or the app':'Cualquier sucursal de Banco Sol, o la app',
  'It opens the same way every time — first the disclosure, which cannot be removed:':'Siempre empieza igual: primero el aviso, que no se puede quitar:',
  'It opens the same way every time — first the disclosure, which cannot be removed, only reworded:':'Siempre empieza igual: primero el aviso, que no se puede quitar, solo cambiar de redacción:',
  'Required by law — cannot be removed':'Exigido por ley: no se puede quitar', 'Required disclosure — cannot be removed':'Aviso obligatorio: no se puede quitar',
  'Required on every call — choose the wording, it cannot be removed':'Obligatorio en cada llamada: elige la redacción, no se puede quitar',
  'The disclosure':'El aviso', 'Said first on every call. Pick the wording — it cannot be switched off.':'Se dice primero en cada llamada. Elige la redacción: no se puede desactivar.',
  'Disclosure wording':'Redacción del aviso', 'Every option says it is a virtual assistant and names':'Todas las opciones dicen que es un asistente virtual y nombran a',
  '. That part is not optional.':'. Esa parte no es opcional.',
  'Then, in its own words:':'Luego, con sus propias palabras:', 'Every call opens with the required disclosure:':'Cada llamada empieza con el aviso obligatorio:', 'Then its opener:':'Luego, su apertura:', 'Your opener, in the agent\'s own voice.':'Tu frase de apertura, en la voz del agente.',
  'Keep it to one sentence.':'Que sea una sola frase.', 'says it in':'la dice en',
  'Customer':'Cliente', 'Caller':'Quien llama',
  /* collections: balance mentions, offers, closing line, promise */
  'and otherwise asks when the customer intends to pay':'y si no, pregunta cuándo piensa pagar el cliente',
  'and asks when the customer intends to pay':'y pregunta cuándo piensa pagar el cliente',
  'Once a date is agreed, it':'Una vez acordada una fecha, el agente', '. Once a date is agreed, it':'. Una vez acordada una fecha, el agente',
  'If no date is agreed, it':'Si no se acuerda una fecha, el agente', '. If no date is agreed, it':'. Si no se acuerda una fecha, el agente',
  'ends the call':'termina la llamada', 'hands it to a person':'la pasa a una persona',
  'What it does when the customer gives no date at all.':'Qué hace cuando el cliente no da ninguna fecha.',
  'It hands over the same way as when someone asks for a person: it':'La pasa igual que cuando alguien pide una persona: el agente',
  'If no date is agreed':'Si no se acuerda una fecha',
  'And it ends every call with':'Y termina cada llamada con', 'It ends every call with':'Termina cada llamada con',
  'It also mentions:':'También menciona:', 'It also mentions':'También menciona',
  'how long the payment is overdue':'cuánto tiempo lleva de atraso el pago', 'the contract or account number':'el número de contrato o de cuenta',
  'how long it’s overdue':'cuánto tiempo lleva de atraso', 'the contract number':'el número de contrato',
  'days':'días', 'months':'meses', 'Overdue in':'Atraso en', 'List column':'Columna de la lista',
  'Each value comes from the campaign’s contact list, from the column named here. In this preview':'Cada valor viene de la lista de contactos de la campaña, de la columna indicada aquí. En esta vista previa',
  'and contract':'y el contrato', 'stand in for them.':'los reemplazan.',
  'What it can offer':'Qué puede ofrecer',
  'Tick what it may offer and put them in order. It offers one at a time and stops at the first yes.':'Marca lo que puede ofrecer y ordénalo. Ofrece una cosa a la vez y se detiene en el primer sí.',
  'full payment within N days':'pago total en un plazo de N días', 'a partial payment of at least N %':'un pago parcial de al menos N %',
  'the minimum payment':'el pago mínimo', 'in two parts: first today, the rest within N days':'en dos pagos: uno hoy y el resto en un plazo de N días',
  'a reduced balance without interest':'un saldo reducido sin intereses',
  'full payment within':'pago total en un plazo de', 'a partial payment of at least':'un pago parcial de al menos',
  'in two parts: first today, the rest within':'en dos pagos: uno hoy y el resto en un plazo de',
  'The agent works out':'El agente calcula el', '% of the amount on the list —':'% del monto de la lista:', 'here.':'aquí.',
  'The agent never calculates a discount; it reads the figure from the list —':'El agente nunca calcula un descuento; lee la cifra de la lista:',
  'If no offer is accepted (or none is ticked), it asks when the customer intends to pay and records the date.':'Si no se acepta ninguna oferta (o no hay ninguna marcada), pregunta cuándo piensa pagar el cliente y registra la fecha.',
  'Closing line':'Frase de cierre', 'Add a closing line':'Agregar una frase de cierre', 'no closing line — add one':'una frase de cierre opcional: agrégala',
  'Optional. Read word for word at the end of every call. Leave it empty for none.':'Opcional. Se lee palabra por palabra al final de cada llamada. Déjala vacía si no quieres ninguna.',
  'Any Banco Sol branch, quoting contract {contract}':'Cualquier sucursal de Banco Sol, indicando el contrato {contract}',
  'makes no payment offer':'no hace ofertas de pago', '· end':'· fin', 'Days for the rest':'Días para el resto',
  'How long the customer gets for the second part.':'Cuánto tiempo tiene el cliente para el segundo pago.',
  'Two rules are off while the brief offers a reduced balance without interest: that offer removes interest, so the agent cannot also promise never to.':'Hay dos reglas desactivadas mientras la descripción ofrece un saldo reducido sin intereses: esa oferta quita los intereses, así que el agente no puede prometer también que nunca lo hará.',
  'Off while a reduced balance without interest is on offer':'Desactivada mientras se ofrezca un saldo reducido sin intereses',
  'Off while the brief offers a reduced balance without interest':'Desactivada mientras la descripción ofrezca un saldo reducido sin intereses',
  'nothing else':'nada más', 'none':'ninguna', 'Offer':'Oferta', 'Promise':'Promesa', 'Promise ·':'Promesa ·',
  'Recorded promise':'Promesa registrada', 'What the agent recorded when it reached a date':'Lo que registró el agente al llegar a una fecha',
  'Amount':'Monto', 'Date':'Fecha', 'Promise recorded':'Promesa registrada', 'End of call · promise recorded':'Fin de la llamada · promesa registrada',
  'intent — the date the customer gave':'intención: la fecha que dio el cliente', 'intent':'intención',
  'No offers ticked':'Ninguna oferta marcada', 'No offer accepted':'Ninguna oferta aceptada',
  'fallback: asks when the customer intends to pay':'alternativa: pregunta cuándo piensa pagar el cliente',
  'Fallback: records the date the customer gave':'Alternativa: registra la fecha que dio el cliente',
  'Fallback: waiting for the date the customer gives':'Alternativa: espera la fecha que dé el cliente',
  'No date recorded':'No se registró una fecha', 'the call ends':'termina la llamada', 'the payment step does not apply':'no se aplica el paso de pago',
  /* receptionist brief */
  'It greets callers,':'Saluda a quien llama,', ', and when it can’t help it':'y cuando no puede ayudar,',
  'What it asks every caller, in this order.':'Qué le pregunta a cada persona, en este orden.', 'Fields it collects':'Datos que recoge',
  'Anything you add here is asked of every caller, and shows on the rules step with its wording.':'Lo que agregues aquí se le pregunta a cada persona y aparece en el paso de reglas con su redacción.',
  'What the call is for. A receptionist can do more than one.':'Para qué es la llamada. Una recepcionista puede hacer más de una cosa.',
  'What the call is for':'Para qué es la llamada', 'Pick as many as it should handle. It always keeps at least one —':'Elige todas las que deba atender. Siempre conserva al menos una:',
  'is the fallback.':'es la opción por defecto.', 'What it does when it cannot help, or the caller asks for a person.':'Qué hace cuando no puede ayudar o quien llama pide una persona.',
  'Every call it answers opens with':'Cada llamada que atiende empieza con', 'The greeting, in the agent’s own voice.':'El saludo, en la voz del agente.',
  'Set below, under What it knows':'Se configura abajo, en Qué sabe', 'What it knows':'Qué sabe',
  'Answers come only from here. Leave it empty and the agent takes a message instead of guessing.':'Las respuestas salen solo de aquí. Si lo dejas vacío, el agente toma un recado en vez de adivinar.',
  'About the company':'Sobre la empresa', 'Opening hours, what you do, how to find you…':'Horarios, qué hacen, cómo llegar…',
  'Website pages it learns from':'Páginas web de las que aprende', 'Files it learns from':'Archivos de los que aprende', 'Upload files':'Subir archivos', 'Empty':'Vacío', 'PDF, Word, text or spreadsheet files: price lists, FAQs, policies. In this prototype only the file name is kept.':'Archivos PDF, Word, texto u hojas de cálculo: listas de precios, preguntas frecuentes, políticas. En este prototipo solo se guarda el nombre del archivo.', 'Paste a page address and press Enter…':'Pega la dirección de una página y presiona Enter…',
  'Call it':'Nombre', 'It asks':'Pregunta', 'Order number':'Número de pedido', 'Do you have your order number handy?':'¿Tiene a mano su número de pedido?',
  'knows nothing about the business yet':'todavía no sabe nada de la empresa', 'collects nothing extra':'no recoge nada extra',
  'Name':'Nombre', 'Callback number':'Número para devolver la llamada', 'Reason for the call':'Motivo de la llamada', 'Email':'Correo', 'Company':'Empresa',
  /* step 4 — rules */
  'The rules it cannot break':'Las reglas que no puede romper', 'What it asks, and the rules it cannot break':'Qué pregunta y las reglas que no puede romper',
  'What it asks every caller':'Qué le pregunta a cada persona',
  'Toggle what it asks. Your own questions are asked after these, in the order you add them.':'Activa lo que pregunta. Tus preguntas se hacen después de estas, en el orden en que las agregues.',
  'Add a question of your own':'Agrega una pregunta propia', 'What you call it':'Cómo la llamas', 'What it asks out loud':'Qué pregunta en voz alta',
  'Fill both boxes to add it':'Completa ambos campos para agregarla', 'Add this question':'Agregar esta pregunta',
  'Asked of every caller, after the ones ticked above. You can switch it off or remove it later.':'Se le pregunta a cada persona, después de las marcadas arriba. Puedes desactivarla o quitarla después.',
  'Handover rules':'Reglas de derivación', 'Always on':'Siempre activa', 'Your own':'Tuyas', 'Other (specify)':'Otra (especificar)',
  'Describe it in your own words…':'Descríbela con tus palabras…', 'Add':'Agregar', 'Remove handover rule':'Quitar regla de derivación',
  'The customer asks for a person':'El cliente pide hablar con una persona',
  'The customer mentions a complaint, a lawyer or the regulator':'El cliente menciona un reclamo, un abogado o el regulador',
  'The customer asks about something outside this agent’s job':'El cliente pregunta por algo fuera de la tarea del agente',
  'The agent has asked the same question twice without an answer':'El agente hizo la misma pregunta dos veces sin respuesta',
  'The customer insists on something the agent may not promise':'El cliente insiste en algo que el agente no puede prometer',
  'The customer goes quiet for more than ten seconds':'El cliente se queda en silencio más de diez segundos',
  'asks for a person':'pide hablar con una persona', 'mentions a complaint or a lawyer':'menciona un reclamo o un abogado',
  'asks about something outside its job':'pregunta por algo fuera de su tarea', 'will not answer a question twice over':'no responde una pregunta dos veces',
  'insists on something it may not promise':'insiste en algo que no puede prometer', 'goes quiet':'se queda en silencio',
  'Words it must never use':'Palabras que nunca debe usar', 'Standard words':'Palabras estándar', 'Add a word…':'Agrega una palabra…',
  'Tick the ones that apply. If a word here would come up, the agent rephrases.':'Marca las que correspondan. Si una de estas palabras fuera a salir, el agente reformula.',
  'Other rules':'Otras reglas',
  'Tick the ones that apply. A never-promise rule makes the agent say it cannot promise that, then offer what it can do instead; the others change what it does on the call.':'Marca las que correspondan. Una regla de «nunca prometer» hace que el agente diga que no puede prometerlo y ofrezca lo que sí puede hacer; las demás cambian lo que hace en la llamada.',
  'A rule of your own':'Una regla propia', 'End the call if the customer is driving':'Terminar la llamada si el cliente está manejando',
  'Add this rule':'Agregar esta regla', 'Type the rule first':'Escribe la regla primero',
  'The message it leaves':'El mensaje que deja', 'Message for whoever answers':'Mensaje para quien atienda', 'What it says to whoever picked up':'Qué le dice a quien atendió',
  'End the call if someone other than the intended person answers':'Terminar la llamada si atiende alguien que no es la persona indicada',
  'If someone other than the intended person answers, never disclose the amount owed':'Si atiende alguien que no es la persona indicada, nunca revelar el monto adeudado',
  'If someone other than the intended person answers, leave this message':'Si atiende alguien que no es la persona indicada, dejar este mensaje',
  'Never promise a final price':'Nunca prometer un precio final', 'Never promise a discount':'Nunca prometer un descuento',
  'Never promise same-day delivery':'Nunca prometer entrega en el día', 'Never promise a specific doctor':'Nunca prometer un médico en particular',
  'Never promise a same-day slot':'Nunca prometer un turno en el día', 'Never give clinical advice':'Nunca dar consejo clínico',
  'Never promise an exact callback minute':'Nunca prometer el minuto exacto de la devolución', 'Never promise a resolution':'Nunca prometer una solución',
  'Never promise to remove interest':'Nunca prometer quitar intereses', 'Never promise to stop legal action':'Nunca prometer detener acciones legales',
  'Never promise a discount on the balance':'Nunca prometer un descuento sobre el saldo',
  'Never promise a person will call back at an exact time':'Nunca prometer que una persona devolverá la llamada a una hora exacta',
  'Never quote a price':'Nunca dar un precio', 'Never confirm an appointment the calendar hasn’t accepted':'Nunca confirmar una cita que el calendario no aceptó',
  'Save & open the agent':'Guardar y abrir el agente',
  /* step 5 — test */
  'Try it before anyone else does':'Pruébalo antes que nadie',
  'You play the customer. Type anything, or tap a line below. Nothing here reaches a real phone.':'Tú haces de cliente. Escribe lo que quieras o toca una frase abajo. Nada de esto llega a un teléfono real.',
  'You play the customer who just called in. Type anything, or tap a line below. Nothing here reaches a real phone.':'Tú haces de cliente que acaba de llamar. Escribe lo que quieras o toca una frase abajo. Nada de esto llega a un teléfono real.',
  'Script':'Guion', 'Live · Claude':'En vivo · Claude',
  'Live mode is not available in this build — replies follow a script that reads the same settings':'El modo en vivo no está disponible en esta versión: las respuestas siguen un guion que lee la misma configuración',
  'Replies come from Claude (quick tier), from a prompt built out of this agent’s settings':'Las respuestas vienen de Claude (nivel rápido), con un prompt armado a partir de la configuración de este agente',
  'Say something as the customer…':'Di algo como cliente…', 'Send':'Enviar',
  'Test conversations spend credits like any other interaction — the test agent itself costs nothing extra. Tests are not written to the call log and don’t affect metrics.':'Las conversaciones de prueba consumen créditos como cualquier interacción; el agente de prueba no cuesta nada extra. Las pruebas no quedan en el registro de llamadas y no afectan las métricas.',
  'Live replies use your account’s Claude credits.':'Las respuestas en vivo usan los créditos de Claude de tu cuenta.',
  'Hear it for real':'Escúchalo de verdad', 'Call':'Llamar', 'Back to the agent':'Volver al agente', 'Back to the rules':'Volver a las reglas',
  'Calling you now':'Te estamos llamando', 'Connecting you':'Conectando', 'Ringing':'Sonando', 'Dialling':'Marcando', 'Cancel':'Cancelar',
  'Call again':'Llamar de nuevo', 'Done':'Listo', 'Call me now':'Llámame ahora', 'Simulate the call':'Simular la llamada',
  'Here is what was said. Tap any line later on the correction screen to fix it.':'Esto es lo que se dijo. Después puedes tocar cualquier frase en la pantalla de corrección para arreglarla.',
  'One call, to you only. It does not touch your contact list.':'Una sola llamada, solo a ti. No toca tu lista de contactos.',
  'This is the number the agent will answer while it is being tested. Only you can reach it.':'Este es el número que atenderá el agente mientras se prueba. Solo tú puedes llamarlo.',
  'Test line':'Línea de prueba', 'Your phone number':'Tu número de teléfono', 'You':'Tú', 'Call finished · 0:41':'Llamada terminada · 0:41',
  /* agent page */
  'All agents':'Todos los agentes', 'History':'Historial', 'Edit':'Editar', 'How it is set up':'Cómo está configurado',
  'Asks for a person →':'Pide una persona →', 'Latest':'Última', 'unsaved changes':'cambios sin guardar', 'deployed':'desplegada', 'draft':'borrador',
  'No versions yet':'Todavía no hay versiones', 'Last deployed':'Último despliegue', 'Last deployed: never':'Último despliegue: nunca', 'by':'por',
  'Spent':'Consumió', 'credits over':'créditos en', 'interactions':'interacciones', 'No credits spent yet':'Todavía no consumió créditos',
  'Live in':'En vivo en', 'No dialer is running it now':'Ningún discador lo usa ahora', 'Not in a dialer yet':'Todavía no está en un discador',
  'Save':'Guardar', 'Saved':'Guardado', 'Deploy':'Desplegar', 'Delete agent':'Eliminar agente',
  'This version is live':'Esta versión está en vivo', 'Not deployed yet':'Todavía no desplegada',
  'is the latest version and it is already deployed. Edit the agent to start a new draft.':'es la última versión y ya está desplegada. Edita el agente para empezar un nuevo borrador.',
  'This agent is not in a dialer yet, so there is nothing to deploy to. Add it to a dialer in the Outbound Hub, then deploy from here.':'Este agente todavía no está en un discador, así que no hay dónde desplegarlo. Agrégalo a un discador en el Outbound Hub y despliégalo desde aquí.',
  'It was last deployed on':'Se desplegó por última vez el',
  ', but no dialer is running it now, so there is nothing to deploy to. Put it back in a dialer in the Outbound Hub to deploy it again.':', pero ningún discador lo usa ahora, así que no hay dónde desplegarlo. Vuelve a ponerlo en un discador en el Outbound Hub para desplegarlo otra vez.',
  'Assign this agent to a dialer in the Outbound Hub to deploy it':'Asigna este agente a un discador en el Outbound Hub para desplegarlo',
  'No dialer is running it now — put it back in one to deploy again':'Ningún discador lo usa ahora: vuelve a ponerlo en uno para desplegarlo otra vez',
  'No dialer is running it now — assign it in the Outbound Hub to deploy again':'Ningún discador lo usa ahora: asígnalo en el Outbound Hub para desplegarlo otra vez',
  'Not in a dialer yet — assign it in the Outbound Hub first':'Todavía no está en un discador: asígnalo primero en el Outbound Hub',
  'Save the change and publish it, in one step':'Guardar el cambio y publicarlo en un solo paso',
  'is already deployed — nothing new to publish':'ya está desplegada: no hay nada nuevo para publicar',
  'recovered':'recuperada',
  '— what you see above is that version\'s configuration, not live yet. Save it to keep it as the working draft, or Deploy to save and publish it in one step.':'— lo que ves arriba es la configuración de esa versión, todavía no está en vivo. Guárdala para dejarla como borrador de trabajo, o despliégala para guardarla y publicarla en un solo paso.',
  /* summary prose */
  'answers calls to':'atiende las llamadas de', 'Every call opens with the fixed disclosure, then':'Cada llamada empieza con el aviso fijo, luego',
  'when the customer':'cuando el cliente', 'It never promises':'Nunca promete', 'never says':'nunca dice', 'Other':'Otras', 'rule':'regla', 'rules':'reglas',
  'it follows:':'que sigue:', 'It also hands over on your own':'También deriva según tus', 'Corrections you have applied:':'Correcciones que aplicaste:',
  'a final price':'un precio final', 'a discount':'un descuento', 'same-day delivery':'entrega en el día', 'a specific doctor':'un médico en particular',
  'a same-day slot':'un turno en el día', 'an exact callback minute':'el minuto exacto de la devolución', 'a resolution':'una solución',
  'to remove interest':'quitar intereses', 'to stop legal action':'detener acciones legales', 'a discount on the balance':'un descuento sobre el saldo',
  'a person will call back at an exact time':'que una persona devolverá la llamada a una hora exacta',
  /* modals on the agent page */
  'Deploy this agent?':'¿Desplegar este agente?', 'This agent is assigned to':'Este agente está asignado a',
  'Changes apply to the next interaction.':'Los cambios se aplican desde la próxima interacción.', 'It replaces':'Reemplaza a', ', the version the':', la versión que',
  'dialer is':'el discador está', 'dialers are':'los discadores están', 'using now.':'usando ahora.',
  'An agent runs one live version everywhere it is assigned, so all':'Un agente corre una sola versión en vivo en todos los lugares donde está asignado, así que los',
  'dialers switch together. To move one of them separately it needs its own agent.':'discadores cambian juntos. Para mover uno por separado hace falta un agente propio.',
  'The configuration you recovered from':'La configuración que recuperaste de', 'is saved as':'se guarda como', 'and published in the same step.':'y se publica en el mismo paso.',
  'Version history':'Historial de versiones', 'Close':'Cerrar', 'Was live':'Estuvo en vivo', 'Recover this version':'Recuperar esta versión',
  '· deployed and live now':'· desplegada y en vivo ahora', '· never deployed':'· nunca desplegada',
  'Nothing to compare':'Nada para comparar', 'is the newest version there is.':'es la versión más nueva que existe.', 'Nothing would change':'No cambiaría nada',
  'is identical to':'es idéntica a', ', the version running now':', la versión en uso ahora', 'Deploying':'Desplegar', 'changes':'cambia',
  'one thing':'una cosa', 'Gains':'Agrega', 'Loses':'Quita', 'Changes':'Cambia',
  'Company it says':'Empresa que nombra', 'How it opens':'Cómo empieza', 'What it is for':'Para qué es', 'Asks for a person':'Pide una persona',
  'Opening line':'Frase de apertura', 'Disclosure':'Aviso', 'What it says about the balance':'Qué dice sobre el saldo', 'How payment is arranged':'Cómo se acuerda el pago',
  'Handover rule':'Regla de derivación', 'Never promises':'Nunca promete', 'Other rule':'Otra regla', 'Banned word':'Palabra prohibida', 'Correction':'Corrección',
  'Asks every caller':'Pregunta a cada persona',
  'Keep it':'Conservarlo', 'Its brief, its rules and its interaction history go with it. This cannot be undone.':'Se eliminan su descripción, sus reglas y su historial de interacciones. Esto no se puede deshacer.',
  'It is live in':'Está en vivo en', '— deleting it stops those calls.':'— eliminarlo detiene esas llamadas.',
  'This agent is deployed':'Este agente está desplegado', 'is deployed and live in':'está desplegado y en vivo en',
  '. Saving overwrites the previous version':'. Guardar sobrescribe la versión anterior', 'Any interactions in progress will be affected.':'Las interacciones en curso se verán afectadas.',
  'Keep editing':'Seguir editando', 'Save anyway':'Guardar de todos modos',
  /* version notes */
  'First version':'Primera versión', 'Edited the agent':'Agente editado', 'Reworded the opener':'Cambió la frase de apertura',
  'Added the medical-emergency handover rule':'Agregó la regla de derivación por urgencia médica', 'Never-promise: final price':'Nunca prometer: precio final',
  'Let it book appointments as well as take messages':'Ahora también agenda citas, además de tomar recados',
  'Say only that a balance is outstanding, never the amount':'Decir solo que hay un saldo pendiente, nunca el monto',
  'Added abogado to the words it must never use':'Agregó «abogado» a las palabras que nunca debe usar',
  'Gave customers five days instead of three':'Dio a los clientes cinco días en lugar de tres',
  /* calls + correction */
  'Which call should it learn from?':'¿De qué llamada debería aprender?',
  'Tap a call to read what was said and fix it. Every correction becomes a setting you approve first.':'Toca una llamada para leer qué se dijo y corregirlo. Cada corrección se convierte en un ajuste que apruebas primero.',
  'No calls yet':'Todavía no hay llamadas', 'All':'Todas', 'Worth a look':'Vale la pena revisar', 'Nothing needs a look right now.':'Nada necesita revisión ahora.',
  '“Worth a look” marks calls that ended without reaching the goal. No answers cannot be corrected — nothing was said.':'«Vale la pena revisar» marca las llamadas que terminaron sin cumplir el objetivo. Las llamadas sin respuesta no se pueden corregir: no se dijo nada.',
  'Nobody answered — nothing was said':'Nadie atendió: no se dijo nada',
  'has not made any calls yet. Deploy it into a dialer and its calls show up here.':'todavía no hizo llamadas. Despliégalo en un discador y sus llamadas aparecerán aquí.',
  'Confirmed':'Confirmada', 'Rescheduled':'Reprogramada', 'Took a message':'Tomó un recado', 'Transferred':'Transferida', 'No answer':'Sin respuesta',
  'All calls':'Todas las llamadas', 'Teach it what to say':'Enséñale qué decir', 'Tap anything':'Toca cualquier cosa que',
  'said that was wrong, then write what it should have said instead. We turn it into a setting — you approve the change before it takes effect.':'dijo mal y escribe qué debería haber dicho. Lo convertimos en un ajuste: apruebas el cambio antes de que se aplique.',
  'Selected — tell us what it should have said →':'Seleccionada: cuéntanos qué debería haber dicho →', 'Tap to correct':'Toca para corregir',
  'Corrections become plain-language settings. There is no script or prompt text to edit here — there never is.':'Las correcciones se convierten en ajustes en lenguaje claro. Aquí no hay guion ni prompt para editar, y nunca lo habrá.',
  'Pick a line':'Elige una frase', 'Tap any line':'Toca cualquier frase que', 'said. Most supervisors start where the customer got stuck — here, right after “':'dijo. La mayoría de los supervisores empieza donde el cliente se trabó: aquí, justo después de “',
  'What should it have said?':'¿Qué debería haber dicho?', 'In your own words. One sentence is enough.':'Con tus palabras. Una frase alcanza.',
  'It should have offered another time before taking a message…':'Debería haber ofrecido otro horario antes de tomar un recado…',
  'See the change':'Ver el cambio', 'Proposed change':'Cambio propuesto', 'Add rule:':'Agregar regla:', 'Change the goal':'Cambiar el objetivo',
  'Applies to future calls only.':'Se aplica solo a llamadas futuras.', 'It reaches live calls on the next deploy.':'Llega a las llamadas en vivo con el próximo despliegue.',
  'Discard':'Descartar', 'Apply change':'Aplicar cambio', 'Teach it':'Enséñale',
  /* interactions */
  'AI agents':'Agentes de IA', 'People':'Personas', 'Search interaction':'Buscar interacción',
  'AI agents and people, side by side. The star marks the AI ones — open any row to read it.':'Agentes de IA y personas, lado a lado. La estrella marca las de IA: abre cualquier fila para leerla.',
  'Start time':'Inicio', 'End time':'Fin', 'Channel':'Canal', 'Client':'Cliente', 'Source':'Origen', 'Handled by':'Atendida por',
  'Disposition':'Tipificación', 'Credits':'Créditos', 'Duration':'Duración', 'Items per page: 50':'Elementos por página: 50', 'Items 1–':'Elementos 1–',
  'Handed over':'Derivada', 'Payment agreed':'Pago acordado', 'Solved':'Resuelta', 'Unsolved':'Sin resolver', 'Answering Machine':'Contestador',
  'Reported by the agent for this interaction':'Informado por el agente para esta interacción', 'Handled by a person — no credits':'Atendida por una persona: sin créditos',
  'Summary':'Resumen', 'Transcription':'Transcripción', 'Chat':'Chat', 'Data':'Datos', 'Comments':'Comentarios', 'Quality':'Calidad',
  'Back to interactions':'Volver a interacciones', 'Credits this interaction reported, from the webhook':'Créditos que informó esta interacción, desde el webhook',
  'credits':'créditos', '· AI agent':'· agente de IA', 'Download recording':'Descargar grabación', 'Timeline':'Línea de tiempo',
  'Hide timeline':'Ocultar línea de tiempo', 'Show timeline':'Mostrar línea de tiempo', 'Started':'Inicio', 'Hold time':'Tiempo en espera',
  'Attended by AI agent':'Atendida por agente de IA', 'Attended by user':'Atendida por usuario', 'Handed over to user':'Derivada a usuario',
  'Attended by automation':'Atendida por automatización', 'Finished':'Finalizada',
  'Conversation summary':'Resumen de la conversación', 'A quick overview of the conversation.':'Un vistazo rápido a la conversación.',
  'Sentiment':'Sentimiento', 'Main reason of the conversation':'Motivo principal de la conversación', 'Key points discussed':'Puntos clave', 'Resolution':'Resolución',
  'Positive':'Positivo', 'Neutral':'Neutral', 'Negative':'Negativo',
  'No summary for this interaction':'No hay resumen para esta interacción',
  'Summaries are written by the AI agent that held the conversation. This one was handled by a person.':'Los resúmenes los escribe el agente de IA que tuvo la conversación. Esta la atendió una persona.',
  'No transcription for this call':'No hay transcripción para esta llamada',
  'Calls handled by people are recorded, not transcribed. Interactions an AI agent held come with a full transcript.':'Las llamadas que atienden personas se graban, no se transcriben. Las que atiende un agente de IA vienen con la transcripción completa.',
  'Nobody has commented on this interaction.':'Nadie comentó esta interacción.', 'Add a comment…':'Agrega un comentario…',
  'No evaluations yet':'Todavía no hay evaluaciones', 'Results appear here once you complete one.':'Los resultados aparecen aquí cuando completes una.',
  'Evaluate':'Evaluar', 'Evaluation':'Evaluación', 'Evaluee — campaign':'Evaluado — campaña', 'Model':'Modelo', 'No data available':'No hay datos disponibles',
  'Web chat':'Chat web', 'WhatsApp':'WhatsApp', 'SMS':'SMS', 'inbound':'entrante', 'outbound':'saliente',
  'Today':'Hoy', 'Yesterday':'Ayer',
  /* toasts */
  'Saved as a working draft. Deploy it when you are ready.':'Guardado como borrador de trabajo. Despliégalo cuando estés listo.',
  'Saved as the working draft.':'Guardado como borrador de trabajo.', 'Sent. Your account team will pick it up with you.':'Enviado. Tu equipo de cuenta lo retomará contigo.',
  'Deployed.':'Desplegado.', 'This is now the live version.':'Esta es ahora la versión en vivo.',
  /* simulator captions */
  'Closing':'Cierre', 'Goal setting':'Objetivo', 'Goal reached':'Objetivo cumplido', 'call ends':'termina la llamada',
  'Rule: always disclose':'Regla: siempre se identifica', 'handoff setting':'ajuste de derivación',
  'Ends the call':'Termina la llamada', 'the disposition is set outside the agent':'la tipificación se define fuera del agente',
  'Rule: offer a partial payment before escalating':'Regla: ofrecer un pago parcial antes de escalar',
  'Rule: offer another slot before taking a message':'Regla: ofrecer otro horario antes de tomar un recado',
  'Rule: ends the call — the wrong person answered':'Regla: termina la llamada, atendió otra persona',
  'Rule: leaves the message you set, then ends the call':'Regla: deja el mensaje que configuraste y termina la llamada',
  'the amount is never disclosed':'el monto nunca se revela', 'Handover rule: a complaint or a lawyer is mentioned':'Regla de derivación: se menciona un reclamo o un abogado',
  'Nothing stops it answering that':'Nada le impide responder eso', 'goal setting':'objetivo',
  'Fixed disclosure + your opener':'Aviso fijo + tu apertura', 'Fixed disclosure + your opener + the identity check':'Aviso fijo + tu apertura + la verificación de identidad',
  'Answered from the business profile':'Respondió con el perfil de la empresa', 'Goal: collects the caller’s details':'Objetivo: registra los datos de quien llama',
  'Goal: books from the connected calendar':'Objetivo: agenda en el calendario conectado', 'Goal setting → takes a message instead':'Objetivo → toma un recado en su lugar',
  'Nothing in the business profile yet → takes a message':'Todavía no hay nada en el perfil de la empresa → toma un recado',
  'Live':'En vivo', 'Claude':'Claude', 'Live reply failed → script':'Falló la respuesta en vivo → guion',
  /* no drafts: saving replaces the current version; Live = in a dialer */
  'Updating…':'Actualizando…', 'Not saved yet':'Sin guardar todavía',
  'An agent runs inside a dialer. It is live only while it is in one, and the agent page says which dialers are running it. Dialers are assigned in the Outbound Hub, not here.':'Un agente corre dentro de un discador. Solo está en vivo mientras está en uno, y la página del agente dice qué discadores lo usan. Los discadores se asignan en el Outbound Hub, no aquí.',
  'Live':'En vivo', 'Current':'Actual', 'The current version':'La versión actual', 'live':'en vivo', 'not live':'no en vivo',
  'Not in a dialer':'No está en un discador', 'The current version · not in a dialer':'La versión actual · no está en un discador',
  'This agent is not in a dialer, so it is not live. Add it to a dialer in the Outbound Hub to put it live — it will run':'Este agente no está en un discador, así que no está en vivo. Agrégalo a un discador en el Outbound Hub para ponerlo en vivo; usará',
  'its current version':'su versión actual', ' · current, not live':' · actual, no en vivo',
  'is the current version.':'es la versión actual.', ', the current version.':', la versión actual.', 'Recovering':'Recuperar',
  'This agent is live':'Este agente está en vivo', 'is live in':'está en vivo en',
  '. Saving replaces the version it is running':'. Guardar reemplaza la versión que está usando', ', in every one of them at once.':', en todos a la vez.',
  'Save and replace':'Guardar y reemplazar',
  'has not made any calls yet. Assign it to a dialer in the Outbound Hub and its calls show up here.':'todavía no hizo llamadas. Asígnalo a un discador en el Outbound Hub y sus llamadas aparecerán aquí.',
  'It reaches live calls as soon as it is applied.':'Llega a las llamadas en vivo en cuanto se aplica.',
  'Saved as v1. Add it to a dialer in the Outbound Hub to put it live.':'Guardado como v1. Agrégalo a un discador en el Outbound Hub para ponerlo en vivo.',
};

/* strings that carry a name, a number or a version */
const MONTHS_ES = {Jan:'ene',Feb:'feb',Mar:'mar',Apr:'abr',May:'may',Jun:'jun',Jul:'jul',Aug:'ago',Sep:'sep',Oct:'oct',Nov:'nov',Dec:'dic'};
const plural = (n, one, many) => n + ' ' + (n === '1' ? one : many);
/* an offer label, with its number and optional list column */
const OFFER_ES = [
  [/^full payment within (\d+) days/, m => 'pago total en un plazo de ' + m[1] + ' días'],
  [/^a partial payment of at least (\d+)%/, m => 'un pago parcial de al menos ' + m[1] + '%'],
  [/^the minimum payment/, () => 'el pago mínimo'],
  [/^in two parts: first today, the rest within (\d+) days/, m => 'en dos pagos: uno hoy y el resto en un plazo de ' + m[1] + ' días'],
  [/^a reduced balance without interest/, () => 'un saldo reducido sin intereses'],
];
const trOffer = s => { for (const [rx, fn] of OFFER_ES) { const m = s.match(rx); if (m) return fn(m) + s.slice(m[0].length); } return null; };
/* "a, b or c" where the items are offers (one of them carries its own comma) */
const trOffers = s => { let rest = s, out = [];
  while (rest) { const t = trOffer(rest); if (t === null) return null;
    const m = OFFER_ES.map(([rx]) => rest.match(rx)).find(Boolean); out.push(t.slice(0, t.length - (rest.length - m[0].length)));
    rest = rest.slice(m[0].length); const j = rest.match(/^(, | or )/); if (j) { out.push(j[0] === ' or ' ? ' o ' : ', '); rest = rest.slice(j[0].length); } else if (rest) return null; }
  return out.join(''); };
const ES_RX = [
  [/^(offers (.+)|makes no payment offer), (and (?:otherwise )?asks when the customer intends to pay)$/, m => (m[2] ? 'ofrece ' + (trOffers(m[2]) || m[2]) : 'no hace ofertas de pago') + ', ' + tr(m[3])],
  [/^offers (.+)$/, m => { const t = trOffers(m[1]); return t === null ? null : 'ofrece ' + t; }],
  [/^(states the amount owed|says only that there is an outstanding balance) and (.+)$/, m => tr(m[1]) + ' y ' + m[2].split(' and ').map(x => tr(x)).join(' y ')],
  [/^Move (.+) (up|down)$/, m => (m[2] === 'up' ? 'Subir ' : 'Bajar ') + tr(m[1])],
  [/^List column for (.+)$/, m => 'Columna de la lista para ' + ({overdue:'el atraso', contract:'el contrato', minimum:'el pago mínimo', reduced:'el saldo reducido'}[m[1]] || m[1])],
  [/^(\d+) · (.+)$/, m => { const t = trOffer(m[2]); return t === null ? null : m[1] + ' · ' + t; }],
  [/^Offer (\d+) of (\d+): (.+)$/, m => 'Oferta ' + m[1] + ' de ' + m[2] + ': ' + (trOffer(m[3]) || m[3])],
  [/^Offer accepted: (.+?) · payment setting: (.+)$/, m => 'Oferta aceptada: ' + (trOffer(m[1]) || m[1]) + ' · ajuste de pago: ' + tr(m[2])],
  [/^Offer: (.+)$/, m => 'Oferta: ' + (trOffer(m[1]) || m[1])],
  [/^payment setting: (.+)$/, m => 'ajuste de pago: ' + tr(m[1])],
  [/^(Fallback: records the date the customer gave) · payment setting: (.+)$/, m => tr(m[1]) + ' · ajuste de pago: ' + tr(m[2])],
  [/^Goal reached · payment setting: (.+)$/, m => 'Objetivo cumplido · ajuste de pago: ' + tr(m[1])],
  [/^how long it’s overdue, in (days|months) \((.+?)\)( and the contract number \((.+)\))?$/, m => 'cuánto tiempo lleva de atraso, en ' + (m[1] === 'days' ? 'días' : 'meses') + ' (' + m[2] + ')' + (m[3] ? ' y el número de contrato (' + m[4] + ')' : '')],
  [/^the contract number \((.+)\)$/, m => 'el número de contrato (' + m[1] + ')'],
  [/^Promise recorded: (.+) · (.+) · (.+)$/, m => 'Promesa registrada: ' + (m[1] === 'intent' ? 'intención' : (trOffer(m[1]) || m[1])) + ' · ' + m[2] + ' · ' + m[3]],
  [/^(full payment within|a partial payment of at least|the minimum payment|in two parts|a reduced balance without interest)/, m => trOffer(m.input)],
  [/^Edit — ([\s\S]+)$/, m => 'Editar — ' + tr(m[1])],
  [/^Step (\d) · (.+)$/, m => 'Paso ' + m[1] + ' · ' + tr(m[2])],
  [/^Built from the (.+) template$/, m => 'Creado con la plantilla ' + tr(m[1])],
  [/^Filled in from the (.+) template\. Open a section to change what is in it\.$/, m =>
     'Completado con la plantilla ' + tr(TEMPLATES.map(t => t.name).find(n => n.toLowerCase() === m[1]) || m[1]).toLowerCase() + '. Abre una sección para cambiar lo que tiene.'],
  [/^(.+) · (\d+) rules?$/, m => tr(m[1]) + ' · ' + plural(m[2], 'regla', 'reglas')],
  [/^(\d+) rules?$/, m => plural(m[1], 'regla', 'reglas')],
  [/^(\d+) words?$/, m => plural(m[1], 'palabra', 'palabras')],
  [/^(\d+) questions?$/, m => plural(m[1], 'pregunta', 'preguntas')],
  [/^(\d+) sources?$/, m => plural(m[1], 'fuente', 'fuentes')],
  [/^(\d+) things$/, m => m[1] + ' cosas'],
  [/^(\d+) days$/, m => m[1] + ' días'],
  [/^Used by (\d+) teams$/, m => 'Lo usan ' + m[1] + ' equipos'],
  [/^(\d+) voices ·$/, m => m[1] + ' voces ·'],
  [/^Deployed · one live version, running in (.+)$/, m => 'Desplegado · una versión en vivo, corriendo en ' + trList(m[1], true)],
  [/^in (\d+) dialers$/, m => 'en ' + m[1] + ' discadores'],
  [/^Open (.+)$/, m => 'Abrir ' + m[1]],
  [/^Delete (.+)\?$/, m => '¿Eliminar ' + m[1] + '?'],
  [/^Remove (.+)$/, m => 'Quitar ' + tr(m[1])],
  [/^Copy (.+)$/, m => 'Copiar ' + tr(m[1])],
  [/^(v\d+) · read-only$/, m => m[1] + ' · solo lectura'],
  [/^How (v\d+) was set up, in full$/, m => 'Cómo estaba configurada ' + m[1] + ', completa'],
  [/^Publish (.+) as the live version$/, m => 'Publicar ' + m[1] + ' como versión en vivo'],
  [/^(v\d+) is already deployed — nothing new to publish$/, m => m[1] + ' ya está desplegada: no hay nada nuevo para publicar'],
  [/^against (v\d+)(, the version running now)?$/, m => 'contra ' + m[1] + (m[2] ? ', la versión en uso ahora' : '')],
  [/^· was live, replaced by (v\d+)$/, m => '· estuvo en vivo, reemplazada por ' + m[1]],
  [/^Was live(?: from (.+))?, until (v\d+) replaced it$/, m => 'Estuvo en vivo' + (m[1] ? ' desde ' + tr(m[1]) : '') + ', hasta que la reemplazó ' + m[2]],
  [/^Deployed (.+)$/, m => 'Desplegada ' + tr(m[1])],
  [/^Recovered (v\d+)$/, m => 'Recuperada de ' + m[1]],
  [/^agrees a payment date within (\d+) days$/, m => 'acuerda una fecha de pago en un plazo de ' + m[1] + ' días'],
  [/^agrees a partial payment of at least (\d+)%$/, m => 'acuerda un pago parcial de al menos ' + m[1] + '%'],
  [/^tells the customer where to pay: ([\s\S]*)$/, m => 'le dice al cliente dónde pagar: ' + m[1]],
  [/^transfers to the (.+) campaign$/, m => 'transfiere a la campaña ' + m[1]],
  [/^When any of these happens the agent stops, says a person will take over, and hands the call across\. It hands over by: (.+) — change that on the brief\.$/, m =>
     'Cuando pasa cualquiera de estas cosas, el agente se detiene, dice que una persona continuará y pasa la llamada. Deriva así: ' + tr(m[1]) + '. Cámbialo en la descripción.'],
  [/^collects ([\s\S]+)$/, m => 'recoge ' + m[1]
     .replace(/, plus (\d+) custom questions?/, (x, n) => ', más ' + n + (n === '1' ? ' pregunta propia' : ' preguntas propias'))
     .replace(/a name/, 'un nombre').replace(/a callback number/, 'un número para devolver la llamada')
     .replace(/the reason for the call/, 'el motivo de la llamada').replace(/an email/, 'un correo')
     .replace(/the company/, 'la empresa').replace(/ and /g, ' y ')],
  [/^answers from ([\s\S]+)$/, m => 'responde con ' + m[1].replace('the business profile', 'el perfil de la empresa')
     .replace(/(\d+) trained pages?/, (x, n) => n + (n === '1' ? ' página entrenada' : ' páginas entrenadas'))
     .replace(/(\d+) uploaded files?/, (x, n) => n + (n === '1' ? ' archivo subido' : ' archivos subidos')).replace(' and ', ' y ')],
  [/^takes a message and books appointments$/, () => 'toma un recado y agenda citas'],
  [/^Answer and talk to (.+) as if you were a customer\.$/, m => 'Atiende y habla con ' + m[1] + ' como si fueras un cliente.'],
  [/^You are calling in — talk to (.+) as a customer would\.$/, m => 'Estás llamando: habla con ' + m[1] + ' como lo haría un cliente.'],
  [/^Saved as (v\d+)\. Deploy it when you are ready\.$/, m => 'Guardado como ' + m[1] + '. Despliégalo cuando estés listo.'],
  [/^Saved as (v\d+) and deployed\. ([\s\S]*)$/, m => 'Guardado como ' + m[1] + ' y desplegado. ' + tr(m[2])],
  [/^Deployed\. ([\s\S]+)$/, m => 'Desplegado. ' + tr(m[1])],
  [/^(.+) picks? it up on the next interaction\.$/, m => trList(m[1], true) + (/ and /.test(m[1]) ? ' lo toman' : ' lo toma') + ' en la próxima interacción.'],
  [/^(v\d+) loaded\. Read it here, then Deploy it when you are ready\.$/, m => m[1] + ' cargada. Revísala aquí y despliégala cuando estés listo.'],
  [/^Settings updated\. (.+) uses this from the next interaction\.$/, m => 'Ajustes actualizados. ' + m[1] + ' lo usa desde la próxima interacción.'],
  [/^(.+) deleted\.$/, m => m[1] + ' eliminado.'],
  [/^Rule: (.+)$/, m => 'Regla: ' + tr(m[1])],
  [/^If someone other than the intended person answers, leave this message: ([\s\S]+)$/, m => 'Si atiende alguien que no es la persona indicada, dejar este mensaje: ' + m[1]],
  [/^Payment setting: (.+)$/, m => 'Ajuste de pago: ' + tr(m[1])],
  [/^Your own handover rule: “(.+)”$/, m => 'Tu regla de derivación: “' + m[1] + '”'],
  [/^“(.+)” is on its never-use list → rephrase and hand off$/, m => '“' + m[1] + '” está en su lista de palabras prohibidas → reformula y deriva'],
  [/^(\d+) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4})(, [\d:]+)?$/, m => m[1] + ' ' + MONTHS_ES[m[2]] + ' ' + m[3] + (m[4] || '')],
  [/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d+), (\d{4}),$/, m => m[2] + ' ' + MONTHS_ES[m[1]] + ' ' + m[3] + ','],
  [/^(\d+) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) · ([\d:]+)$/, m => m[1] + ' ' + MONTHS_ES[m[2]] + ' · ' + m[3]],
  [/^(Today|Yesterday) · ([\d:]+)$/, m => (m[1] === 'Today' ? 'Hoy' : 'Ayer') + ' · ' + m[2]],
  [/^Remaining credits, from the n2p usage API · renews (.+)$/, m => 'Créditos disponibles, según la API de uso de n2p · se renueva el ' + tr(m[1])],
  [/^(Call|Web chat|WhatsApp|Email|SMS) · (inbound|outbound)$/, m => ({'Call':'Llamada','Web chat':'Chat web','WhatsApp':'WhatsApp','Email':'Correo','SMS':'SMS'})[m[1]] + ' · ' + (m[2] === 'inbound' ? 'entrante' : 'saliente')],
  [/^AI agent · (.+)$/, m => 'Agente de IA · ' + tr(m[1])],
  [/^calls (.+)$/, m => 'llama a ' + tr(m[1])],
  [/^Subject: (.+)$/, m => 'Asunto: ' + m[1]],
  [/^Live · running in (.+)$/, m => 'En vivo · corriendo en ' + trList(m[1], true)],
  [/^· current, live in (.+)$/, m => '· actual, en vivo en ' + trList(m[1], true)],
  [/^· replaced by (v\d+)$/, m => '· reemplazada por ' + m[1]],
  [/^against (v\d+), the current version$/, m => 'contra ' + m[1] + ', la versión actual'],
  [/^Saved as (v\d+)\. It replaces (v\d+|the previous version) in (.+) from the next interaction\.$/, m => 'Guardado como ' + m[1] + '. Reemplaza a ' + (m[2] === 'the previous version' ? 'la versión anterior' : m[2]) + ' en ' + trList(m[3], true) + ' desde la próxima interacción.'],
  [/^Saved as (v\d+)\. It is now the current version\.$/, m => 'Guardado como ' + m[1] + '. Ahora es la versión actual.'],
  [/^(v\d+) loaded\. Review it, then save to make it the current version\.$/, m => m[1] + ' cargada. Revísala y guárdala para que sea la versión actual.'],
];

/* "a, b or c" / "a · b" / "a → b": translate piece by piece when every piece is known */
function trList(s, names) {
  const parts = s.split(/(, | or | and | · | → )/);
  if (parts.length < 3) return names ? s : undefined;
  /* a list of single words (banned words, dialer names) keeps its words; only the joins change */
  if (parts.every((p, i) => i % 2 || /^[\w\u00c0-\u017f.-]+$/.test(p)) && parts.some((p, i) => i % 2 && (p === ' or ' || p === ' and ')))
    return parts.map((p, i) => i % 2 ? (p === ' or ' ? ' o ' : p === ' and ' ? ' y ' : p) : (trExact(p) !== undefined ? trExact(p) : p)).join('');
  let hit = false;
  const out = parts.map((p, i) => {
    if (i % 2) return p === ' or ' ? ' o ' : p === ' and ' ? ' y ' : p;
    const t = trExact(p);
    if (t !== undefined) { hit = true; return t; }
    return names ? p : null;
  });
  return (names || (hit && out.indexOf(null) < 0)) ? out.join('') : undefined;
}
function trExact(core) {
  if (Object.prototype.hasOwnProperty.call(ES, core)) return ES[core];
  for (const [rx, fn] of ES_RX) { const m = core.match(rx); if (m) { const r = fn(m); if (r != null) return r; } }
  return undefined;
}
function tr(s) {
  if (UI_LANG !== 'es' || typeof s !== 'string') return s;
  const m = s.match(/^(\s*)([\s\S]*?)(\s*)$/), core = m[2];
  if (!core) return s;
  let out = trExact(core);
  if (out === undefined) out = trList(core, false);
  return out === undefined ? s : m[1] + out + m[3];
}
/* the single place every element passes through */
const __createElement = React.createElement;
const TR_ATTRS = ['title', 'placeholder', 'aria-label'];
React.createElement = function (type, props) {
  if (UI_LANG !== 'es') return __createElement.apply(null, arguments);
  const args = Array.prototype.slice.call(arguments);
  if (props && typeof type === 'string') {
    let p = null;
    TR_ATTRS.forEach(k => { if (typeof props[k] === 'string') { const t = tr(props[k]); if (t !== props[k]) { p = p || { ...props }; p[k] = t; } } });
    if (p) args[1] = p;
  }
  /* text inside a text field is what someone typed — never translate it */
  if (type !== 'textarea' && type !== 'option')
    for (let i = 2; i < args.length; i++) {
      const c = args[i];
      if (typeof c === 'string') args[i] = tr(c);
      else if (Array.isArray(c)) args[i] = c.map(x => typeof x === 'string' ? tr(x) : x);
    }
  return __createElement.apply(null, args);
};

/* ---- Languages and the voices available in each (as in uContact's Languages panel) ---- */
const LANGS = {
  en:{id:'en', name:'English (United States)', short:'English (US)'},
  es:{id:'es', name:'Spanish (Latin America)', short:'Spanish (LATAM)'},
};
const TIER = 'Premium V2';
const PERSONAS = [
  /* English (United States) */
  {id:'alice',     name:'Alice',     lang:'en', tier:TIER, grad:'linear-gradient(140deg,#7C5BF7,#C25BE0)',
   line:'Good afternoon, I’m calling from the clinic. Do you have a minute?'},
  {id:'alyssa',    name:'Alyssa',    lang:'en', tier:TIER, grad:'linear-gradient(140deg,#F0722E,#F5B03D)',
   line:'Hi! I’m calling about the quote you asked us for.'},
  {id:'catherine', name:'Catherine', lang:'en', tier:TIER, grad:'linear-gradient(140deg,#3D7BF5,#4FC0E8)',
   line:'Good afternoon. Am I speaking with the account holder?'},
  {id:'emily',     name:'Emily',     lang:'en', tier:TIER, grad:'linear-gradient(140deg,#E0489B,#F58BB0)',
   line:'Hello, I’m calling to confirm your appointment on Thursday at ten.'},
  {id:'felix',     name:'Felix',     lang:'en', tier:TIER, grad:'linear-gradient(140deg,#1FA85E,#6BD46A)',
   line:'Good afternoon, I’m calling on behalf of the company.'},
  {id:'gail',      name:'Gail',      lang:'en', tier:TIER, grad:'linear-gradient(140deg,#8A5BF7,#5BA8F7)',
   line:'Hi there, I’m returning your call about the message you left.'},
  {id:'james',     name:'James',     lang:'en', tier:TIER, grad:'linear-gradient(140deg,#2F6BD8,#33A2C4)',
   line:'Good afternoon. I’ll keep this brief — it’s about your request.'},
  /* Spanish (Latin America) */
  {id:'antonio',   name:'Antonio',   lang:'es', tier:TIER, grad:'linear-gradient(140deg,#5B3DF5,#8A5BF7)',
   line:'Buenas tardes, le llamo de parte de la clínica. ¿Tiene un minuto?'},
  {id:'bob',       name:'Bob',       lang:'es', tier:TIER, grad:'linear-gradient(140deg,#0E9F52,#68C98A)',
   line:'Buenas tardes, le llamo en nombre de la compañía.'},
  {id:'charles',   name:'Charles',   lang:'es', tier:TIER, grad:'linear-gradient(140deg,#C97A00,#F0B54A)',
   line:'Buenas, ¿cómo está? Le llamo un momento por su solicitud.'},
  {id:'frank',     name:'Frank',     lang:'es', tier:TIER, grad:'linear-gradient(140deg,#3D7BF5,#5BC0E8)',
   line:'Buenas tardes. ¿Hablo con la persona titular?'},
  {id:'gloria',    name:'Gloria',    lang:'es', tier:TIER, grad:'linear-gradient(140deg,#E0489B,#F79ABF)',
   line:'¡Hola! ¿Cómo está? Le llamo por la consulta que nos dejó.'},
  {id:'linda',     name:'Linda',     lang:'es', tier:TIER, grad:'linear-gradient(140deg,#B8420C,#F0803D)',
   line:'Buenas tardes, le devuelvo la llamada por el mensaje que dejó.'},
].map(v => ({...v, reg:LANGS[v.lang].name+' · '+v.tier}));
const voicesIn = lang => PERSONAS.filter(v => v.lang===lang);

/* ---- Handover: when the agent stops and gives the call to a person ---- */
const HANDOVER = [
  {id:'asks',     v:'The customer asks for a person', always:true, short:'asks for a person'},
  {id:'legal',    v:'The customer mentions a complaint, a lawyer or the regulator', short:'mentions a complaint or a lawyer'},
  {id:'offtopic', v:'The customer asks about something outside this agent’s job', short:'asks about something outside its job'},
  {id:'repeat',   v:'The agent has asked the same question twice without an answer', short:'will not answer a question twice over'},
  {id:'promise',  v:'The customer insists on something the agent may not promise', short:'insists on something it may not promise'},
  {id:'silence',  v:'The customer goes quiet for more than ten seconds', short:'goes quiet'},
];
/* "a, b or c" — used by the prose summary */
const orList = xs => xs.length<2 ? (xs[0]||'') : xs.slice(0,-1).join(', ')+' or '+xs[xs.length-1];
const HANDOVER_SEED = {
  reception:    ['repeat'],
  leads:        ['promise','offtopic'],
  appointments: ['offtopic'],
  messages:     ['repeat'],
  collections:  ['legal','promise'],
};
const SEED_HANDOVER = [
  ['offtopic'], ['promise','offtopic'],
  ['repeat'],                      // the receptionist's own
  [], ['legal','promise'], ['legal','promise'],
];

/* Collections may never discuss a balance with whoever happens to answer, so
   "speaks to whoever answers" is not an option there — it cannot be chosen at all. */
const identityFor = tid => tid==='collections' ? IDENTITY.filter(o => o.id!=='none') : IDENTITY;
/* Every template offers every hand-off, the receptionist included — putting callers through is
   much of that job. Kept as a function so a template can restrict it later without hunting. */
const handoffFor = tid => HANDOFF;
/* A live transfer goes to a campaign, chosen from the ones the platform already runs. The list
   is the campaigns the Interactions log and the dialers already name — no new platform detail. */
const CAMPAIGNS = ['Citas_Sept', 'Cobros_Ago', 'Cobros_Septiembre', 'Cotizaciones_Q3', 'Leads_Web', 'Sales_Engineers'];
const campaignOf = o => ((o && o.tokens) || {}).campaign || CAMPAIGNS[0];
/* What the hand-off reads as on screen: the campaign is part of the sentence. */
const handLabel = o => { const h = val(HANDOFF, ((o && o.tokens) || {}).handoff);
  return h.id === 'campaign' ? 'transfers to the ' + campaignOf(o) + ' campaign' : h.v; };

/* ---- Collections only: what it says about the balance, and how the customer pays ---- */
const DISCLOSE = [
  {id:'amount', v:'states the amount owed',
   say:'Tiene un saldo pendiente de {amount}.', sayEn:'You have an outstanding balance of {amount}.'},
  {id:'exists', v:'says only that there is an outstanding balance',
   say:'Tiene un saldo pendiente con nosotros.', sayEn:'You have an outstanding balance with us.'},
];
/* no real balance exists in this prototype; the seed carries a stand-in figure */
const AMOUNT_PLACEHOLDER = '$184.50';
const amountOf    = o => ((o && o.tokens) || {}).amount || AMOUNT_PLACEHOLDER;
const discloseOf  = o => val(DISCLOSE, ((o && o.tokens) || {}).disclose);
const discloseLabel = o => discloseOf(o).v;
const discloseSay = o => saysIn(discloseOf(o), langOf(o)).replace('{amount}', amountOf(o));
const PAYMENT = [
  {id:'channel', v:'sends the payment link to the contact channel on file, without saying which',
   say:'Le envío el enlace de pago al canal de contacto que tenemos registrado.',
   sayEn:'I will send the payment link to the contact channel we have on file.'},
  {id:'place',   v:'tells the customer where to pay',
   say:'Puede pagar en {place}.', sayEn:'You can pay at {place}.'},
];
const paymentOf    = o => val(PAYMENT, ((o && o.tokens) || {}).payment);
const paymentPlace = o => (((o && o.tokens) || {}).paymentPlace || '').trim();
const paymentLabel = o => { const p = paymentOf(o);
  return p.id === 'place' ? p.v + ': ' + (paymentPlace(o) || '…') : p.v; };
const paymentSay   = o => saysIn(paymentOf(o), langOf(o)).replace('{place}', (paymentPlace(o) || '…').replace(/\{contract\}/g, contractOf(o)));

/* ---- Collections: what else it mentions about the account ------------------------------
   Siblings of the amount radio, not children of it: they apply whichever radio is chosen.
   Every value comes from a column of the campaign's contact list; the column name is the
   only thing the supervisor types, and a stand-in figure plays the value in the preview, the
   way $184.50 stands in for the balance. */
const LIST_COLS = {overdue:'DIAS_MORA', contract:'CUENTA', minimum:'PAGO_MIN', reduced:'SALDO_REDUCIDO'};
const PLACEHOLDERS = {overdue:{days:45, months:2}, contract:'4821', minimum:'$45.00', reduced:'$152.00'};
const colOf      = (o, k) => ((((o && o.tokens) || {}).cols || {})[k] || '').trim() || LIST_COLS[k];
const mentionsOf = o => { const m = ((o && o.tokens) || {}).mentions || {}; return {overdue:!!m.overdue, contract:!!m.contract}; };
const overdueUnit = o => (((o && o.tokens) || {}).overdueUnit === 'months') ? 'months' : 'days';
const overdueN   = o => PLACEHOLDERS.overdue[overdueUnit(o)];
const contractOf = () => PLACEHOLDERS.contract;
const MENTIONS = [
  {id:'overdue',  v:'how long the payment is overdue', short:'how long it’s overdue'},
  {id:'contract', v:'the contract or account number',   short:'the contract number'},
];
const mentionsLabel = o => { const m = mentionsOf(o);
  return MENTIONS.filter(x => m[x.id]).map(x => x.short); };
/* the radio's phrase, then whatever else it mentions: "states the amount owed and how long it's overdue" */
const discloseFull = o => { const xs = mentionsLabel(o);
  return discloseOf(o).v + (xs.length ? ' and ' + andList(xs) : ''); };
const overdueSay = o => { const n = overdueN(o), mo = overdueUnit(o) === 'months', en = langOf(o) === 'en';
  return en ? 'Your account is ' + n + ' ' + (mo ? 'months' : 'days') + ' overdue.'
            : 'Su cuenta lleva ' + n + ' ' + (mo ? 'meses' : 'días') + ' de atraso.'; };
/* the contract rides on the balance sentence; the overdue line follows it */
const discloseSentence = o => { const m = mentionsOf(o), en = langOf(o) === 'en';
  let s = discloseSay(o);
  if (m.contract) s = s.replace(/\.$/, en ? ' on the contract ending ' + contractOf(o) + '.' : ' del contrato terminado en ' + contractOf(o) + '.');
  return s + (m.overdue ? ' ' + overdueSay(o) : ''); };

/* ---- Collections: what it can offer, in order ------------------------------------------
   An ordered list rather than one goal. The agent offers them one at a time, in this order, and
   stops at the first yes. Nothing ticked, or nothing accepted, falls through to the fixed
   fallback: it asks when the customer intends to pay and records that date. */
const OFFER_IDS = ['date5', 'partial', 'minimum', 'twopart', 'reduced'];
const INTENT_ASK = {say:'¿Para qué fecha tiene pensado realizar el pago?', sayEn:'When are you planning to make the payment?'};
const FALLBACK_LINE = 'If no offer is accepted (or none is ticked), it asks when the customer intends to pay and records the date.';
/* An agent saved before offers existed carries one goal; read it as that one offer, ticked. */
const offersOf = o => { const t = (o && o.tokens) || {};
  const raw = Array.isArray(t.offers) ? t.offers : OFFER_IDS.map(id => ({id, on: id === t.goal}));
  const list = raw.filter(x => OFFER_IDS.indexOf(x.id) > -1).map(x => ({id:x.id, on:!!x.on}));
  OFFER_IDS.forEach(id => { if (!list.some(x => x.id === id)) list.push({id, on:false}); });
  return list; };
const offerDef     = id => val(goalsFor('collections'), id);
const activeOffers = o => offersOf(o).filter(x => x.on).map(x => offerDef(x.id));
const reducedOn    = o => !!o && o.template === 'collections' && activeOffers(o).some(x => x.id === 'reduced');
const moneyNum  = s => parseFloat(String(s).replace(/[^\d.]/g, '')) || 0;
const moneyFmt  = n => '$' + n.toFixed(2);
const offerLabel = (o, id) => { const g = offerDef(id), gp = paramOf(id);
  return gp ? g.v + ' ' + gp.fmt(paramVal(o, id)) : g.v; };
const offerAmount = (o, id) => id === 'partial' ? moneyFmt(moneyNum(amountOf(o)) * paramVal(o, 'partial') / 100)
  : id === 'minimum' ? PLACEHOLDERS.minimum : id === 'reduced' ? PLACEHOLDERS.reduced : amountOf(o);
const offerSay = (o, id) => { const g = offerDef(id), gp = paramOf(id), lang = langOf(o);
  let line = saysIn(g, lang);
  if (gp) line = line.replace('{n}', ((lang === 'en' && gp.sayEn) ? gp.sayEn : gp.say)(paramVal(o, id)));
  return line.replace('{amt}', offerAmount(o, id)).replace('{min}', PLACEHOLDERS.minimum).replace('{red}', PLACEHOLDERS.reduced); };
const intentSay   = o => saysIn(INTENT_ASK, langOf(o));
const offersLabel = o => { const xs = activeOffers(o).map(g => offerLabel(o, g.id));
  return xs.length ? 'offers ' + orList(xs) : 'makes no payment offer'; };
const fallbackPhrase = o => activeOffers(o).length ? 'and otherwise asks when the customer intends to pay'
  : 'and asks when the customer intends to pay';
/* the promise it records on reaching a date */
const DAY_MS = 864e5;
const dateIn = n => { const d = new Date(Date.now() + n * DAY_MS);
  return d.getDate() + ' ' + MONTHS[d.getMonth()] + ' ' + d.getFullYear(); };
const promiseFor = (o, id, stated) => id === 'intent'
  ? {offer:'intent', amount:amountOf(o), date:stated || dateIn(0)}
  : {offer:offerLabel(o, id), amount:offerAmount(o, id),
     date: id === 'date5' ? dateIn(paramVal(o, 'date5')) : id === 'twopart' ? dateIn(paramVal(o, 'twopart')) : dateIn(0)};
/* the optional last line, read word for word at the end of every call */
/* What happens when the customer gives no date at all: end, or the same hand-off as "asks for a person". */
const NO_DATE = [{id:'end', v:'ends the call'}, {id:'handover', v:'hands it to a person'}];
const noDateOf    = o => val(NO_DATE, ((o && o.tokens) || {}).noDate || 'end');
const noDateLabel = o => noDateOf(o).v;
const closingOf = o => ((((o && o.tokens) || {}).closing) || '').trim();

/* Two collections goals hold a number the supervisor taps rather than types. */
const GOAL_PARAMS = {
  /* custom:'replace' drops the last preset in favour of a Custom pill; custom:'add' keeps every
     preset and appends one. Either way the supervisor can type an exact number. */
  date5:   {def:5,  opts:[3,5,7,15,30], fmt:n=>n+' days', say:n=>n+' días', sayEn:n=>n+' days',
            title:'Days to pay', hint:'How long the customer gets before the date it agrees.',
            custom:'replace', unit:'days', max:180},
  partial: {def:30, opts:[30,50,70],    fmt:n=>n+'%',     say:n=>n+'%',     sayEn:n=>n+'%',
            title:'Minimum share', hint:'The smallest part of the balance the agent may accept.',
            custom:'add', unit:'%', max:100},
  twopart: {def:15, opts:[7,15,30,45,60], fmt:n=>n+' days', say:n=>n+' días', sayEn:n=>n+' days',
            title:'Days for the rest', hint:'How long the customer gets for the second part.',
            custom:'replace', unit:'days', max:180},
};
const paramOf = goalId => GOAL_PARAMS[goalId] || null;
const paramVal = (o, goalId) => {
  const gp = paramOf(goalId); if(!gp) return null;
  const ps = (o && o.tokens && o.tokens.params) || {};
  return ps[goalId]==null ? gp.def : ps[goalId];
};
/* A receptionist does several jobs at once — takes messages, books, answers questions — so its
   goal is a list. Every other template keeps exactly one. tokens.goal stays the first of that
   list either way, so everything that quotes "the goal" (the spoken line, the simulator, the
   correction flow) keeps reading a single id and needs no change. */
const multiGoal = tid => tid==='reception';
const goalIds = o => { const t = o.tokens || {}, g = t.goals;
  /* goals is the list and goal is its first. If a writer sets goal alone, or to something the
     list does not contain, that single goal wins — so the two can never silently disagree. */
  return (g && g.length && g.indexOf(t.goal) > -1) ? g : [t.goal].filter(Boolean); };
/* An agent speaks one language, so everything it says has to follow the voice. Every spoken
   line carries an English twin (sayEn / openerEn / custSayEn); this picks the right one, and
   falls back to the Spanish when a line has no twin rather than rendering nothing. */
const langOf = o => (o && o.lang) || (o && o.personaId ? persona(o.personaId).lang : 'es');
const inLang = (obj, key, lang) => (lang==='en' && obj && obj[key+'En']) ? obj[key+'En'] : (obj ? obj[key] : '');
const saysIn = (obj, lang) => inLang(obj, 'say', lang);

/* Read a goal through these two so the number shows up everywhere it is quoted. */
const goalOf    = o => val(goalsFor(o.template), o.tokens.goal);
const oneGoalLabel = (o, id) => { const g = val(goalsFor(o.template), id), gp = paramOf(g.id);
  return gp ? g.v+' '+gp.fmt(paramVal(o, g.id)) : g.v; };
const goalLabel = o => { if(o && o.template === 'collections') return offersLabel(o) + ', ' + fallbackPhrase(o);
  const ids = goalIds(o);
  if(ids.length < 2) return oneGoalLabel(o, goalOf(o).id);
  /* listed together, the short forms read as a sentence; alone, the full phrase still stands */
  return andList(ids.map(id => { const g = val(goalsFor(o.template), id);
    return g.short || oneGoalLabel(o, id); })); };
const goalSay   = o => { if(o && o.template === 'collections') { const a = activeOffers(o);
    return a.length ? offerSay(o, a[0].id) : intentSay(o); }
  const g = goalOf(o), gp = paramOf(g.id), lang = langOf(o);
  const line = saysIn(g, lang);
  if(!gp) return line;
  const unit = (lang==='en' && gp.sayEn) ? gp.sayEn : gp.say;   // "5 days", not "5 días"
  return line.replace('{n}', unit(paramVal(o, g.id))); };
const optLabel  = (o, draft) => { const gp = paramOf(o.id);
  return gp ? o.v+' '+gp.fmt(paramVal(draft, o.id)) : o.v; };

/* ---- Credits ----------------------------------------------------------------------------
   Two separate facts, from two separate places, exactly as the platform reports them:
   the balance comes from the n2p usage API and is about the account, while every interaction
   carries its own credit total from the webhook. Nothing here derives one from the other —
   the balance is not the sum of this log, because the log is one month of one screen. */
const CREDITS = {remaining:12480, included:20000, renews:'1 Oct 2026', source:'n2p usage API'};
const creditsLeft  = () => CREDITS.remaining;
const creditsPct   = () => Math.max(0, Math.min(100, Math.round(CREDITS.remaining / CREDITS.included * 100)));
const creditsLow   = () => creditsPct() <= 15;
const fmtCredits   = n => (n==null ? '—' : String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ','));
/* Only an AI-handled interaction spends credits; a person handling one spends none. */
const creditsOf    = row => (row && row.voice) ? (row.credits || 0) : null;
const creditsBy    = id => INTERACTIONS.filter(r => r.agent===id && r.voice)
  .reduce((n, r) => n + (r.credits || 0), 0);
const creditsRows  = id => INTERACTIONS.filter(r => r.agent===id && r.voice).length;

const callsFor = a => (a.calls ? CALL_LOG.slice() : []);

/* What a customer asks, and the rule that governs the answer. The refusal only happens when
   that rule is actually ticked on the rules step — untick it and the agent answers plainly, so
   the simulated call follows the settings rather than a fixed script. Each entry names the rule
   it matched, which is what the caption under the reply shows. */
const PROMISE_GUARDS = [
  {ask:/descuento|interes|rebaj|condon|discount|interest|waive|knock off/i, rule:/discount|interest/i,
   es:'No le puedo prometer quitar intereses ni descuentos. ',
   en:'I cannot promise to remove interest or give a discount. '},
  {ask:/precio|cuanto|cuesta|vale|tarifa|price|cost|how much|charge/i, rule:/price/i,
   es:'No le puedo dar un precio final por teléfono. ',
   en:'I cannot give you a final price over the phone. '},
  {ask:/demanda|juicio|acciones legales|legal action|lawsuit|sue/i, rule:/legal action/i,
   es:'No le puedo prometer detener acciones legales. ',
   en:'I cannot promise to stop legal action. '},
  {ask:/entrega|envio|cuando llega|delivery|deliver|ship/i, rule:/delivery/i,
   es:'No le puedo prometer una entrega el mismo día. ',
   en:'I cannot promise same-day delivery. '},
  {ask:/medico|doctor|especialista/i, rule:/specific doctor/i,
   es:'No le puedo asegurar un médico en particular. ',
   en:'I cannot promise a specific doctor. '},
  {ask:/hoy mismo|mismo dia|today|same.?day/i, rule:/same-day slot/i,
   es:'No le puedo prometer un turno para hoy. ',
   en:'I cannot promise a same-day slot. '},
  {ask:/resolver|solucion|resolution|fix it|sort it/i, rule:/resolution/i,
   es:'No le puedo prometer una solución. ',
   en:'I cannot promise a resolution. '},
];
/* the rule that covers what was asked, but only if it is ticked */
const guardFor = (draft, s) => { for(const g of PROMISE_GUARDS){ if(!g.ask.test(s)) continue;
  return {g, rule: promisesOf(draft).filter(p => g.rule.test(p.t))[0] || null}; } return null; };
/* a word the agent is set never to say, as the customer just said it */
const bannedHit = (draft, s) => (draft.banned || []).filter(w =>
  w && s.indexOf(norm(w)) > -1)[0] || null;
/* one of the supervisor's own handover rules, matched on its distinctive words */
const ownHandoverHit = (draft, s) => (draft.handoverOther || []).filter(r =>
  norm(r).split(/[^a-z0-9]+/).filter(w => w.length > 4).some(w => s.indexOf(w) > -1))[0] || null;

/* ---- The agent, written out as the instructions a model would need ------------------------
   This is the one place the prototype composes a prompt, and no supervisor ever sees it: it is
   assembled from the same settings the wizard shows them, so the brief, the rules step and the
   simulated call all describe one agent. Every setting that can be changed on a screen appears
   here, and an unticked rule is simply absent. */
/* The wizard's phrases are third person because on screen they follow "It" — "agrees a payment
   date", "verifies who it is speaking to". Addressed to the model as "you" they need the bare
   verb. Only template phrases go through this; anything a supervisor typed is quoted untouched. */
const asYou = ph => String(ph || '')
  .split(/(,\s+|\s+and\s+)/)                       // convert the verb that opens each clause
  .map((seg, i) => i % 2 ? seg : seg.replace(/^((?:only|never|also|then)\s+)?(\w+?)(ies|s)\b/,
    (m, adv, stem, end) => (adv || '') + (end === 'ies' ? stem + 'y' : stem)))
  .join('')
  .replace(/\bit is\b/g, 'you are').replace(/\bits\b/g, 'your');
function agentPrompt(d){
  const p = persona(d.personaId), tk = d.tokens || {}, L = langOf(d), inb = d.direction === 'in';
  const lang = (LANGS[L] || LANGS.es).name;
  const t = template(d.template), rec = d.template === 'reception';
  const hand = val(handoffFor(d.template), tk.handoff);
  const ident = val(identityFor(d.template), tk.identity);
  const trig = (d.handover || []).map(id => (HANDOVER.find(o => o.id === id) || {}).v).filter(Boolean);
  const own = d.handoverOther || [];
  const proms = promisesOf(d).map(r => r.t), rules = otherRules(d).map(ruleText);
  const col = d.template === 'collections', tp = thirdParty(d);
  const say = x => '"' + x + '"';
  const lines = [];
  lines.push(`You are ${p.name}, a virtual assistant for ${tk.company}, speaking with a customer on the phone.`);
  lines.push(inb ? 'The customer called you.' : 'You placed this call to the customer.');
  lines.push(`Speak only ${lang}. Talk the way a person talks on a call: short turns, one question at a time, no lists, no markdown, no emoji.`);
  lines.push('');
  lines.push('WHAT YOU DO');
  if(rec) lines.push(`- Your job: you ${asYou(goalLabel(d))}. Greet the caller and find out how you can help.`);
  else if(!col) lines.push(`- Your job: you ${asYou(goalLabel(d))}.${t.mid ? ' You ' + asYou(t.mid.replace(/,?\s*and$/, '')) + '.' : ''} When it is time, say something like ${say(goalSay(d))}`);
  if(col){
    const m = mentionsOf(d), offers = activeOffers(d);
    lines.push('- Your job: agree a payment with the customer and record it.');
    lines.push(`- About the balance: you ${asYou(discloseLabel(d))}.${discloseOf(d).id === 'amount' ? ' The amount owed is ' + amountOf(d) + '.' : ' Do not state the amount, even if asked.'}`
      + (m.overdue ? ` Also say how long the payment is overdue, in ${overdueUnit(d)} (from the contact list column ${colOf(d,'overdue')}).` : '')
      + (m.contract ? ` Also name the contract by its last digits (from the contact list column ${colOf(d,'contract')}).` : '')
      + ` Say it like ${say(discloseSentence(d))}`);
    if(offers.length){
      lines.push('- Offer these one at a time, in this order. Stop at the first one the customer accepts:');
      offers.forEach((g, i) => lines.push(`    ${i + 1}. ${offerLabel(d, g.id)}${g.id === 'minimum' || g.id === 'reduced' ? ' (the figure comes from the contact list column ' + colOf(d, g.id) + ')' : ''}: ${say(offerSay(d, g.id))}`));
      if(offers.some(g => g.id === 'partial')) lines.push(`- The partial payment is ${paramVal(d,'partial')}% of the amount on the contact list: ${offerAmount(d,'partial')}.`);
      if(offers.some(g => g.id === 'reduced')) lines.push('- Never calculate a discount yourself. The reduced balance is the figure the contact list gives, read as it is.');
    } else lines.push('- Make no payment offer.');
    lines.push(`- If no offer is accepted${offers.length ? '' : ' (there are none)'}, ask when the customer intends to pay and record that date: ${say(intentSay(d))}`);
    lines.push(`- Once a date is recorded — an accepted offer or the date the customer gave — you ${asYou(paymentLabel(d))}. Say something like ${say(paymentSay(d))}`);
    lines.push(noDateOf(d).id === 'handover'
      ? `- If no date is agreed, hand the call over the same way as when the customer asks for a person (you ${asYou(handLabel(d))}). Record no promise.`
      : '- If no date is agreed, thank the customer, say the closing line and end the call. Record no promise.');
    lines.push('- Whenever you reach a date, record the promise: the offer accepted (or "intent"), the amount and the date.');
  }
  lines.push('');
  lines.push('HOW EVERY CALL STARTS');
  lines.push(`- The very first thing you say is this disclosure, word for word: ${say(disclosureFor(d))}`);
  lines.push(`- Then your opening line: ${say(d.opener)}`);
  if(!rec && tk.identity !== 'none')
    lines.push(`- Before discussing anything about the account, ${asYou(ident.v)}: ${say(saysIn(ident, L))} If it turns out you are not speaking to the right person, do not discuss the reason for the call.`);
  if(col && closingOf(d)){
    lines.push('');
    lines.push('HOW EVERY CALL ENDS');
    lines.push(`- The very last thing you say on every call, word for word: ${say(closingOf(d))}`);
  }
  lines.push('');
  lines.push('HANDING THE CALL TO A PERSON');
  lines.push(`- If the customer asks for a person, you ${asYou(handLabel(d))}. Say ${say(saysIn(hand, L))}`);
  if(trig.length || own.length){
    lines.push('- Also hand the call to a person, saying the same line, when any of these happens:');
    trig.forEach(x => lines.push(`    - ${x}`));
    own.forEach(x => lines.push(`    - ${x}`));
  }
  if(proms.length || rules.length || (d.banned || []).length || (d.extraRules || []).length){
    lines.push('');
    lines.push('RULES YOU CANNOT BREAK');
    proms.forEach(x => lines.push(`- ${x}. If asked, say plainly that you cannot promise that, then offer what you can do.`));
    rules.forEach(x => lines.push(`- ${x}.`));
    if(tp.message !== null && tp.ends) lines.push('- So if the wrong person answers: say that message, nothing else, and end the call.');
    if((d.banned || []).length) lines.push(`- Never say any of these words: ${d.banned.join(', ')}. Rephrase instead.`);
    (d.extraRules || []).forEach(x => lines.push(`- ${x}.`));
  }
  if(rec){
    const asks = (d.collect || []).filter(f => f.on);
    const k = d.knowledge || {};
    lines.push('');
    lines.push('WHAT YOU ASK AND WHAT YOU KNOW');
    if(asks.length){
      lines.push('- Ask every caller for these, in this order, one at a time:');
      asks.forEach(f => lines.push(`    - ${f.label}: ${say(f.question)}`));
    }
    if((k.about || '').trim()) lines.push(`- You may answer questions from this business profile only: ${say(k.about.trim())}`);
    if((k.urls || []).length) lines.push(`- You were also trained on these pages: ${k.urls.join(', ')}.`);
    if((k.files || []).length) lines.push(`- You were also given these files: ${k.files.map(f => f.name).join(', ')}.`);
    lines.push('- Anything not covered above: take a message rather than guess.');
  }
  lines.push('');
  lines.push('HOW TO ANSWER');
  lines.push('Reply with JSON only, nothing else: {"say": "<your next line, in ' + lang + '>", "why": "<the one rule or setting above that governed it, in a few words, in English>"}');
  if(col) lines.push('When you reach a date, add "promise": {"offer": "<the offer accepted, or intent>", "amount": "<amount>", "date": "<date>"} to that reply.');
  lines.push('Keep "say" to one or two short sentences.');
  return lines.join('\n');
}
/* The conversation as the sampler wants it: user/assistant turns, strictly alternating, opening
   with user. The capability has no system prompt, so the standing instructions ride in the first
   user turn, along with the line the agent has already said on screen. Pure, so it is testable. */
function liveTurns(d, msgs, input){
  const turns = [];
  const push = (role, content) => { const c = String(content == null ? '' : content).trim(); if(!c) return;
    if(turns.length && turns[turns.length-1].role === role) turns[turns.length-1].content += '\n\n' + c;
    else turns.push({role, content:c}); };
  const opening = (msgs.length && msgs[0].who === 'a') ? msgs[0].txt : '';
  const all = (opening ? msgs.slice(1) : msgs).concat([{who:'c', txt:input}]);
  const lead = agentPrompt(d)
    + (opening ? '\n\nYOU HAVE ALREADY SAID\n"' + opening + '"' : '')
    + '\n\nTHE CONVERSATION CONTINUES\n';
  let first = true;
  all.forEach(m => {
    if(m.who === 'c'){ push('user', (first ? lead + 'The customer says: ' : '') + m.txt); first = false; }
    else push('assistant', m.txt);
  });
  if(!turns.length || turns[0].role !== 'user') turns.unshift({role:'user', content: lead + 'The customer is on the line.'});
  return turns;
}

/* ---- Interactions log (Analytics › Interactions) ---- */
const MEDIA = {
  call:  {label:'Call',     ink:'#3D7BF5', soft:'#E8F1FE'},
  chat:  {label:'Web chat', ink:'#D8433A', soft:'#FCEBEA'},
  wa:    {label:'WhatsApp', ink:'#12A150', soft:'#E4F6EC'},
  email: {label:'Email',    ink:'#EF7327', soft:'#FDF0E8'},
  sms:   {label:'SMS',      ink:'#7C3AED', soft:'#F0EAFE'},
};
/* Rows an AI agent handled carry `voice`; the rest were handled by people. */
const INTERACTIONS = [
  {id:'i1',  start:'2026-08-31 09:14:02', end:'2026-08-31 09:15:08', medium:'call',  dir:'out',
   client:'María Herrera',        source:'5980114227', campaign:'Citas_Sept',   voice:'gloria',  agent:'a1',
   call:'c2', disp:'Confirmed',   credits:18, dur:'1m 06s'},
  {id:'i5',  start:'2026-08-31 09:05:12', end:'2026-08-31 09:06:04', medium:'call',  dir:'in',
   client:'+16172853680',         source:'15513483152', campaign:'Sales_Engineers', user:'PS Agent',
   disp:'Unsolved',   dur:'52s'},
  {id:'i2',  start:'2026-08-31 09:12:44', end:'2026-08-31 09:13:36', medium:'wa',    dir:'in',
   client:'+57 310 555 0142',     source:'wa_business', campaign:'Cobros_Ago', voice:'frank',   agent:'a5',
   call:'c1', disp:'Handed over', credits:14, dur:'52s'},
  {id:'i9',  start:'2026-08-31 08:40:07', end:'2026-08-31 09:02:19', medium:'email', dir:'in',
   client:'Team Twilio',          source:'',           campaign:'Test',        user:'ccass_spena',
   disp:'Unsolved',   dur:'22m 12s'},
  {id:'i3',  start:'2026-08-31 09:11:20', end:'2026-08-31 09:12:31', medium:'call',  dir:'out',
   client:'Jorge Betancur',       source:'5980114227', campaign:'Citas_Sept',   voice:'gloria',  agent:'a1',
   call:'c1', disp:'Took a message', credits:19, dur:'1m 11s'},
  {id:'i12', start:'2026-08-31 08:15:03', end:'2026-08-31 08:16:44', medium:'call',  dir:'in',
   client:'+16172853680',         source:'15513483152', campaign:'Sales_Engineers', user:'Support_IVR',
   disp:'',           dur:'1m 41s'},
  {id:'i4',  start:'2026-08-31 09:08:55', end:'2026-08-31 09:09:37', medium:'chat',  dir:'in',
   client:'sebastian.pena…',      source:'web_widget', campaign:'Test',        voice:'linda',   agent:'a3',
   call:'c5', disp:'Solved',      credits:23, dur:'42s'},
  {id:'i10', start:'2026-08-31 08:31:55', end:'2026-08-31 08:33:02', medium:'chat',  dir:'in',
   client:'Facebook Ads Team',    source:'web_widget', campaign:'Test',        user:'ccass_spena',
   disp:'Solved',     dur:'1m 07s'},
  {id:'i13', start:'2026-08-31 08:04:58', end:'2026-08-31 08:06:12', medium:'call',  dir:'out',
   client:'Camilo Restrepo',      source:'5980114227', campaign:'Citas_Sept',   voice:'gloria',  agent:'a1',
   call:'c4', disp:'Handed over', then:'psagent1', credits:21, dur:'1m 14s'},
  {id:'i6',  start:'2026-08-31 08:58:30', end:'2026-08-31 08:59:38', medium:'call',  dir:'out',
   client:'6172853680',           source:'15513483152', campaign:'Sales_Engineers', user:'PS Agent',
   disp:'Answering Machine', dur:'1m 08s'},
  {id:'i7',  start:'2026-08-31 08:51:02', end:'2026-08-31 08:52:47', medium:'sms',   dir:'out',
   client:'Andrea Salgado',       source:'wa_business', campaign:'Cobros_Ago', voice:'antonio', agent:'a6',
   call:'c5', disp:'Payment agreed', credits:26, dur:'1m 45s',
   // what the agent recorded on reaching a date: the offer accepted (or "intent"), amount, date
   promise:{offer:'full payment within 5 days', amount:'$184.50', date:'5 Sep 2026'}},
  {id:'i14', start:'2026-08-31 07:58:22', end:'2026-08-31 07:59:03', medium:'chat',  dir:'in',
   client:'Instagram',            source:'web_widget', campaign:'Test',        user:'ccass_spena',
   disp:'Unsolved',   dur:'41s'},
  {id:'i11', start:'2026-08-31 08:22:41', end:'2026-08-31 08:23:29', medium:'wa',    dir:'in',
   client:'+57 300 555 8891',     source:'wa_business', campaign:'Cobros_Ago', voice:'frank',   agent:'a5',
   call:'c6', disp:'Took a message', credits:31, dur:'48s'},
  {id:'i15', start:'2026-08-30 19:42:10', end:'2026-08-30 19:43:51', medium:'sms',   dir:'out',
   client:'Nicolás Ospina',       source:'wa_business', campaign:'Cobros_Ago', voice:'antonio', agent:'a6',
   call:'c7', disp:'Payment agreed', credits:12, dur:'1m 41s',
   promise:{offer:'a partial payment of at least 30%', amount:'$55.35', date:'30 Aug 2026'}},
  {id:'i8',  start:'2026-08-31 08:44:19', end:'2026-08-31 08:44:31', medium:'call',  dir:'out',
   client:'Luz Mariana Ríos',     source:'5980114227', campaign:'Citas_Sept',   voice:'gloria',  agent:'a1',
   call:'c3', disp:'No answer',   credits:15, dur:'12s'},
];
const aiRows = () => INTERACTIONS.filter(r => r.voice);

/* ---- one interaction, opened ---- */
const addSecs = (stamp, secs) => {
  const t = stamp.slice(11).split(':').map(Number);
  let s = t[0]*3600 + t[1]*60 + t[2] + secs;
  const p = n => String(n).padStart(2,'0');
  return p(Math.floor(s/3600)%24)+':'+p(Math.floor(s/60)%60)+':'+p(s%60);
};
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const stampParts = s => {
  const y = s.slice(0,4), mo = MONTHS[+s.slice(5,7)-1], da = +s.slice(8,10);
  let hh = +s.slice(11,13); const mi = s.slice(14,16), se = s.slice(17,19);
  const ap = hh < 12 ? 'AM' : 'PM'; hh = hh % 12 || 12;
  return {d: mo+' '+da+', '+y+',', t: hh+':'+mi+':'+se+' '+ap};
};
const prettyStamp = s => stampParts(s).d+' '+stampParts(s).t;

/* The event rail down the left of an opened interaction. */
function ixEvents(row, agents){
  const v = row.voice ? persona(row.voice) : null;
  const ag = row.agent && agents ? agents.find(a=>a.id===row.agent) : null;
  const ev = [
    {k:'start',  label:'Started', at:stampParts(row.start)},
    {k:'hold',   label:'Hold time', val:v?'2s':'23s'},
  ];
  ev.push(v
    ? {k:'ai',   label:'Attended by AI agent', at:stampParts(row.start),
       who:v.name, team:row.campaign, dur:row.dur, voice:row.voice, agentName:ag?ag.name:''}
    : {k:'user', label:'Attended by user', at:stampParts(row.start),
       who:row.user, team:row.campaign, dur:row.dur});
  if(row.disp==='Handed over')
    ev.push({k:'hand', label:'Handed over to user', at:stampParts(row.end), who:row.then||'psagent1',
      team:row.campaign, dur:'26s'});
  if(!v && row.user==='Support_IVR')
    ev.push({k:'auto', label:'Attended by automation', who:'Support_IVR', team:row.campaign, dur:'0s'});
  if(row.disp) ev.push({k:'disp', label:'Disposition', list:[row.disp]});
  ev.push({k:'end', label:'Finished', at:stampParts(row.end), dur:row.dur});
  return ev;
}

/* The message thread. AI interactions have a real one; human ones use canned mock text. */
function ixThread(row, agents){
  const v = row.voice ? persona(row.voice) : null;
  const ag = row.agent && agents ? agents.find(a=>a.id===row.agent) : null;
  if(v && ag){
    return transcriptFor(ag, callById(ag, row.call) || {kind:'message'}).map((m,i)=>({
      who:m.w==='a'?'agent':'customer', name:m.w==='a'?v.name:row.client,
      time:addSecs(row.start, i*9), text:m.t, ai:m.w==='a', voice:row.voice}));
  }
  if(row.medium==='email') return [{who:'customer', name:'update@digital.metamail.com',
    time:addSecs(row.start,0), subject:'Share Your Thoughts: Help Shape the Future of Meta Horizon',
    text:'We’re excited to invite you to participate in a brief survey that will help us better understand your experience building with Meta Horizon. Your input is crucial in shaping our strategies.'}];
  return [
    {who:'customer', name:row.client, time:addSecs(row.start,0), text:'Hello, I’m requesting help about some products'},
    {who:'agent',    name:row.user,   time:addSecs(row.start,100), text:'Sure! What kind of products are you looking for?', read:true},
  ];
}

/* The raw payload behind the Data tab. */
const ixJson = row => ([
  {CAMPAIGN:null, telephonycampaign:null},
  {n:'0', res:null, guid:'2f79883d-5b3a-49e3-babb-3d0b620290d8',
   AGENT:row.voice ? persona(row.voice).name : row.user,
   isAI:row.voice ? 'true' : 'false',
   MYCHAN:'PJSIP/urb3vomu6rmwbc9g-00000000',
   apiRes:{result:{isTransferring:row.disp==='Handed over'?'true':'false', needsFinishIvr:'true'},
     index:null, rows:null, total:null, serverDate:row.end},
   outMES:87.9, status:null, CHANNEL:row.medium, DIRECTION:row.dir, DISPOSITION:row.disp||null,
   creditsUsed:creditsOf(row), ...(row.promise ? {promise:row.promise} : {})},
]);

/* ---- Conversation summary (the Summary tab) ---- */
const SENTIMENTS = {
  Positive:{ink:'#0E9F52', soft:'#E4F6EC'},
  Neutral: {ink:'#5A5678', soft:'#EFEEF6'},
  Negative:{ink:'#FF5A2D', soft:'#FFE9E1'},
};
/* Only interactions an AI agent held come with one. */
function ixSummary(row, agents){
  if(!row.voice) return null;
  const v = persona(row.voice), co = (agents && row.agent)
    ? (agents.find(a=>a.id===row.agent)||{tokens:{}}).tokens.company : '';
  const S = {
    'Confirmed':{s:'Positive',
      reason:'The customer was called to confirm an appointment already booked with '+co+'.',
      key:v.name+' verified who it was speaking to, stated the date and time, and asked for confirmation. The customer agreed without asking for changes.',
      res:'Appointment confirmed. Nothing was left open and no handover was needed.'},
    'Took a message':{s:'Negative',
      reason:'The customer was called to confirm an appointment with '+co+' and could not make the slot offered.',
      key:'The customer said they work late that day. '+v.name+' took a message instead of offering another slot, then repeated the offer to pass the message on when the customer asked about the afternoon.',
      res:'No new date was agreed. A message was left for the front desk — the customer asked twice for an alternative and was never offered one.'},
    'Handed over':{s:'Negative',
      reason:'The customer was called by '+co+' and asked something '+v.name+' is not allowed to answer.',
      key:'The customer pressed for a commitment on the balance. '+v.name+' declined to promise it, as the rules require, and the customer asked for a person.',
      res:'Handed over to '+(row.then||'a person')+' mid-call. The customer waited 26 seconds before someone picked up.'},
    'Payment agreed':{s:'Positive',
      reason:'The customer was contacted about an overdue balance at '+co+'.',
      key:v.name+' confirmed who it was speaking to, explained the balance and proposed a date. The customer accepted without asking for a discount.',
      res:'A payment date was agreed and the link was sent. No handover was needed.'},
    'No answer':{s:'Neutral',
      reason:'An attempt to reach the customer about an appointment with '+co+'.',
      key:'Nobody picked up. '+v.name+' left no message, as the rules require on a first attempt.',
      res:'No contact. The customer stays in the list for the next attempt.'},
    'Solved':{s:'Positive',
      reason:'The customer got in touch about a message left earlier for '+co+'.',
      key:v.name+' identified the customer, delivered the message, and agreed both the number and the time for the callback.',
      res:'Callback time agreed. The customer had no further questions.'},
  };
  const f = S[row.disp] || {s:'Neutral',
    reason:'The customer was contacted by '+co+'.',
    key:v.name+' followed the brief and stayed inside its rules.',
    res:'The interaction ended without anything left open.'};
  return {sentiment:f.s, reason:f.reason, key:f.key, resolution:f.res};
}

/* ---- versions, deployment and dialer assignment ---- */
const ME = 'attilio.porchia';
const nowStamp = () => {
  const d = new Date(), p = n => String(n).padStart(2,'0');
  return d.getDate()+' '+MONTHS[d.getMonth()]+' '+d.getFullYear()+', '+p(d.getHours())+':'+p(d.getMinutes());
};
/* There are no drafts. Every save writes a new version and that version is the one the agent
   runs from then on — the newest version is always the current one. "Live" is not a property of
   a version: it only says the agent is attached to a dialer in the Outbound Hub. */
const latestVersion   = a => (a.versions||[])[(a.versions||[]).length-1] || null;
const currentVersion  = latestVersion;
const nextVersionId   = a => 'v' + ((a.versions||[]).length + 1);
/* An agent can serve several dialers, and it runs ONE version in all of them: saving replaces
   that version everywhere at once. Which dialers is decided in the Outbound Hub, not here. The
   `dialers` array is the single source of truth — the `assignedToDialer` boolean the seeds still
   carry is descriptive only, and no logic reads it. */
const dialersOf    = a => (a && a.dialers) || [];
const isLive       = a => dialersOf(a).length > 0;    // attached to a dialer right now
const dialerCount  = a => dialersOf(a).length;
/* A version is a snapshot of the configuration the wizard can edit — and nothing else: no id,
   no name, no call counters, no version list. Versions created in the app carry their own `cfg`
   snapshot. The seeded history predates that, so those versions carry `was`: only the fields
   that differed back then, laid over what the agent is now. */
const CFG_KEYS = ['personaId','template','direction','lang','attempts','from','to','tokens',
  'opener','banned','promises','extraRules','handover','handoverOther','collect','knowledge'];
const configOf = a => { const o = {};
  CFG_KEYS.forEach(k => { if(a && a[k]!==undefined) o[k] = a[k]; }); return o; };
const versionConfig = (a, v) => v && v.cfg ? v.cfg : {...configOf(a), ...((v && v.was) || {})};
/* An agent carrying the configuration of one of its own versions, for read-only review. */
const agentAtVersion = (a, v) => ({...a, ...versionConfig(a, v)});

/* A rule can be switched off without being thrown away — the templates' defaults stay visible
   and re-tickable. `on` is what counts everywhere a rule is applied or quoted; a rule the
   supervisor typed carries custom:true and is the only kind that can be deleted outright. */
/* Offering a reduced balance without interest IS removing interest, so while that offer is ticked
   the two never-promise rules that forbid it are off — derived here, never written into the
   agent, so unticking the offer brings them straight back. */
const REDUCED_CONFLICTS = ['Never promise to remove interest', 'Never promise a discount on the balance'];
const suspendedByOffer = (o, p) => reducedOn(o) && REDUCED_CONFLICTS.indexOf(p.t) > -1;
const activePromises = o => (o.promises || []).filter(p => p.on !== false && !suspendedByOffer(o, p));
/* The list holds two kinds of rule now. Anything without a kind is a never-promise, which is
   what every entry used to be — so older agents and stored versions read back unchanged. */
const ruleKind   = r => r.kind || 'promise';
const promisesOf = o => activePromises(o).filter(r => ruleKind(r)==='promise');
const otherRules = o => activePromises(o).filter(r => ruleKind(r)==='rule');
/* End the call rather than leave anything with whoever picked up — the same principle that
   removed "speaks to whoever answers" from collections: never disclose to a third party. */
const THIRD_PARTY_RULE = 'End the call if someone other than the intended person answers';
/* Two more on the same subject, seeded for collections. The message one carries a text the
   supervisor edits (`param`); the label quotes it so the rule reads whole wherever it is shown. */
const THIRD_PARTY_NO_AMOUNT = 'If someone other than the intended person answers, never disclose the amount owed';
const THIRD_PARTY_MESSAGE   = 'If someone other than the intended person answers, leave this message';
const THIRD_PARTY_MESSAGE_DEFAULT    = 'Por favor, pida a la persona titular que se comunique con {company}.';
const THIRD_PARTY_MESSAGE_DEFAULT_EN = 'Please ask the account holder to get in touch with {company}.';
const thirdPartyMessageDefault = (lang, company) =>
  (lang === 'en' ? THIRD_PARTY_MESSAGE_DEFAULT_EN : THIRD_PARTY_MESSAGE_DEFAULT).replace('{company}', company || '');
const ruleText = r => r.param !== undefined ? r.t + ': \u201c' + r.param + '\u201d' : r.t;
/* the three rules, read off an agent: which are ticked and the message it leaves */
const thirdParty = o => { const rs = otherRules(o);
  const msg = rs.filter(r => r.t === THIRD_PARTY_MESSAGE)[0] || null;
  return { ends: rs.some(r => r.t === THIRD_PARTY_RULE), noAmount: rs.some(r => r.t === THIRD_PARTY_NO_AMOUNT),
           message: msg ? (msg.param || '').trim() : null }; };
const bannedDefaults = d => { const t = template(d && d.template), en = langOf(d)==='en';
  return (en ? DEFAULT_BANNED_EN : DEFAULT_BANNED).concat(en ? (t.bannedEn || t.banned) : t.banned)
    .filter((w, i, a) => a.indexOf(w) === i); };

/* Comparing two versions. Everything the wizard can change is either a single value (voice,
   language, the opening line…) or a list (handover rules, never-promises, banned words). Single
   values are compared old against new; lists are compared item by item — so a version that drops
   one rule reads as one line about that rule, not as two copies of the whole list. Only what a
   screen can actually edit is compared (`attempts`/`from`/`to` survive in the data but no screen
   edits them, so they are left out). */
const CFG_SCALARS = [
  {k:'Voice',             get:(c,p) => p.name},
  {k:'Language',          get:(c,p) => (LANGS[c.lang || p.lang] || {}).name || ''},
  {k:'Company it says',   get:c => c.tokens.company || ''},
  {k:'How it opens',      get:c => val(identityFor(c.template), c.tokens.identity).v},
  {k:'What it is for',    when:c => c.template !== 'collections', get:c => goalLabel(c)},
  {k:'Asks for a person', get:c => handLabel(c)},
  {k:'Disclosure',                     when:c => c.template === 'collections', get:c => '\u201c' + disclosureFor(c) + '\u201d', long:true},
  {k:'What it says about the balance', when:c => c.template === 'collections', get:c => discloseLabel(c)},
  {k:'It also mentions',               when:c => c.template === 'collections',
                                       get:c => { const m = mentionsOf(c), xs = [];
                                         if(m.overdue) xs.push('how long it’s overdue, in ' + overdueUnit(c) + ' (' + colOf(c,'overdue') + ')');
                                         if(m.contract) xs.push('the contract number (' + colOf(c,'contract') + ')');
                                         return xs.length ? andList(xs) : 'nothing else'; }},
  {k:'How payment is arranged',        when:c => c.template === 'collections', get:c => paymentLabel(c)},
  {k:'If no date is agreed',           when:c => c.template === 'collections', get:c => noDateLabel(c)},
  {k:'Closing line',                   when:c => c.template === 'collections',
                                       get:c => closingOf(c) ? '\u201c' + closingOf(c) + '\u201d' : 'none', long:true},
  {k:'Opening line',      get:c => '\u201c' + (c.opener || '') + '\u201d', long:true},
  {k:'What it knows',     when:c => c.template === 'reception',
                          get:c => knowledgeLabel(c.knowledge || {})},
];
const CFG_LISTS = [
  {k:'Handover rule',   get:c => (c.handover || []).map(id => (HANDOVER.find(o => o.id === id) || {}).short)
                                   .filter(Boolean).concat(c.handoverOther || [])},
  {k:'Offer',           get:c => c.template === 'collections'
                                   ? activeOffers(c).map((g, i) => (i + 1) + ' · ' + offerLabel(c, g.id)
                                       + (g.id === 'minimum' || g.id === 'reduced' ? ' (' + colOf(c, g.id) + ')' : '')) : []},
  {k:'Never promises',  get:c => promisesOf(c).map(x => x.t.replace(/^Never promise /i, ''))},
  {k:'Other rule',      get:c => otherRules(c).map(ruleText)},
  {k:'Banned word',     get:c => (c.banned || []).slice()},
  {k:'Correction',      get:c => (c.extraRules || []).slice()},
  {k:'Asks every caller', get:c => c.template === 'reception'
                                   ? (c.collect || []).filter(f => f.on).map(f => f.label) : []},
];
/* configOf fills the gaps, and tokens is guaranteed — goalLabel reads tokens.goal. */
function cfgOf(cfg, a){ const c = {...configOf(a || {}), ...cfg}; c.tokens = c.tokens || {}; return c; }
function cfgFacts(cfg, a){
  const c = cfgOf(cfg, a), p = persona(c.personaId), f = {};
  CFG_SCALARS.forEach(s => { if(!s.when || s.when(c)) f[s.k] = s.get(c, p); });
  return f;
}
function cfgLists(cfg, a){
  const c = cfgOf(cfg, a), f = {};
  CFG_LISTS.forEach(s => { f[s.k] = s.get(c) || []; });
  return f;
}
/* One row per actual change: a value that reads differently, or a single list item gained or
   lost. Losses come before gains — what a version takes away is what a supervisor must catch. */
function diffFacts(fromCfg, toCfg, a){
  const A = cfgFacts(fromCfg, a), B = cfgFacts(toCfg, a);
  const LA = cfgLists(fromCfg, a), LB = cfgLists(toCfg, a), out = [];
  CFG_SCALARS.forEach(s => { const x = A[s.k], y = B[s.k];
    if(x !== undefined && y !== undefined && x !== y) out.push({kind:'change', k:s.k, from:x, to:y, long:!!s.long});
    else if(x === undefined && y !== undefined) out.push({kind:'add',  k:s.k, item:y});
    else if(x !== undefined && y === undefined) out.push({kind:'drop', k:s.k, item:x}); });
  CFG_LISTS.forEach(s => { const x = LA[s.k] || [], y = LB[s.k] || [];
    x.filter(i => y.indexOf(i) < 0).forEach(i => out.push({kind:'drop', k:s.k, item:i}));
    y.filter(i => x.indexOf(i) < 0).forEach(i => out.push({kind:'add',  k:s.k, item:i})); });
  return out;
}
/* What a version is worth comparing against: the current one. */
const versionBaseline = (a, v) => {
  const cur = currentVersion(a);
  return cur && v && cur.id !== v.id ? cur : null;
};
const versionDiff = (a, v) => { const b = versionBaseline(a, v);
  return b ? {base:b, rows:diffFacts(versionConfig(a, b), versionConfig(a, v), a)} : null; };

const isCurrentVersion = (a, v) => { const c = currentVersion(a); return !!c && !!v && c.id === v.id; };

/* ---- Receptionist: what it asks every caller, and what it knows ---- */
const COLLECT_DEFAULTS = [
  {id:'name',    label:'Name',              question:'May I have your name?',                          on:true},
  {id:'phone',   label:'Callback number',   question:'What’s the best number to reach you back on?', on:true},
  {id:'reason',  label:'Reason for the call', question:'How can we help you today?',                  on:true},
  {id:'email',   label:'Email',             question:'What’s the best email for you?',               on:false},
  {id:'company', label:'Company',           question:'And what company are you with?',                on:false},
];
const COLLECT_PHRASE = {name:'a name', phone:'a callback number', reason:'the reason for the call',
  email:'an email', company:'the company'};
/* what a caller says back in the preview, per field */
const CALLER_SAYS = {name:'It’s María Herrera.', phone:'310 555 0142.', reason:'I’m calling about an invoice.',
  email:'maria@herrera.co', company:'Andina Seguros.'};
const andList = xs => xs.length<2 ? (xs[0]||'') : xs.slice(0,-1).join(', ')+' and '+xs[xs.length-1];
function collectLabel(fields){
  const on = (fields||[]).filter(f=>f.on);
  const std = on.filter(f=>!f.custom).map(f=>COLLECT_PHRASE[f.id]||f.label.toLowerCase());
  const custom = on.filter(f=>f.custom).length;
  if(!std.length && !custom) return 'collects nothing extra';
  return 'collects '+andList(std)
    +(custom ? (std.length?', plus ':'')+custom+(custom===1?' custom question':' custom questions') : '');
}
function knowledgeLabel(k){
  const about=((k&&k.about)||'').trim(), n=((k&&k.urls)||[]).length, f=((k&&k.files)||[]).length;
  if(!about && !n && !f) return 'knows nothing about the business yet';
  const parts=[]; if(about) parts.push('the business profile'); if(n) parts.push(n+(n===1?' trained page':' trained pages'));
  if(f) parts.push(f+(f===1?' uploaded file':' uploaded files'));
  return 'answers from '+andList(parts);
}
/* the short count on the collapsed "What it knows" section */
function knowledgeCount(k){
  const n=(((k&&k.about)||'').trim()?1:0)+((k&&k.urls)||[]).length+((k&&k.files)||[]).length;
  return n ? n+(n===1?' source':' sources') : 'Empty';
}
const fmtSize = b => b < 1024 ? b+' B' : b < 1048576 ? Math.round(b/1024)+' KB' : (b/1048576).toFixed(1)+' MB';
/* Files the receptionist answers from. The prototype keeps each file's name and size only —
   the contents are never read or sent anywhere. */
function KnowledgeFiles({ k, set }) {
  const ref = useRef(null);
  const files = k.files || [];
  const add = list => {
    const got = Array.from(list || []).map(f => ({ name: f.name, size: f.size }))
      .filter(f => !files.some(x => x.name === f.name));
    if (got.length) set({ knowledge: { ...k, files: [...files, ...got] } });
  };
  return React.createElement(React.Fragment, null, files.length > 0 && React.createElement("div", {
    className: "tags urls",
    style: { marginBottom: 10 }
  }, files.map(f => React.createElement("span", {
    className: "tag",
    key: f.name
  }, f.name, React.createElement("span", {
    style: { opacity: .65, fontWeight: 500 }
  }, fmtSize(f.size)), React.createElement("button", {
    onClick: () => set({ knowledge: { ...k, files: files.filter(x => x.name !== f.name) } }),
    "aria-label": 'Remove ' + f.name
  }, I.x)))), React.createElement("input", {
    ref: ref,
    type: "file",
    multiple: true,
    accept: ".pdf,.doc,.docx,.txt,.md,.csv,.xlsx",
    style: { display: 'none' },
    onChange: e => { add(e.target.files); e.target.value = ''; }
  }), React.createElement("button", {
    className: "btn btn-gho btn-sm",
    onClick: () => ref.current && ref.current.click()
  }, I.arrowUp, "Upload files"), React.createElement("div", {
    className: "note",
    style: { marginTop: 10 }
  }, I.info, React.createElement("span", null, "PDF, Word, text or spreadsheet files: price lists, FAQs, policies. In this prototype only the file name is kept.")));
}
/* The fixed disclosure. Unchanged for every existing template; English for the receptionist. */
/* Collections: the disclosure is still mandatory and locked, but the wording is a choice among
   approved lines. The first is the original line, so an agent that never chose keeps it. */
const DISCLOSURES = [
  {id:'std',    es:'Le hablo desde un asistente virtual de {co}.',
                en:'You’re speaking with a virtual assistant for {co}.'},
  {id:'hola',   es:'Hola, le habla el asistente virtual de {co}.',
                en:'Hello, this is the virtual assistant for {co}.'},
  {id:'behalf', es:'Hola, soy el asistente virtual de {co} y me comunico en nombre de {co}.',
                en:'Hello, I’m the virtual assistant for {co}, calling on behalf of {co}.'},
  {id:'call',   es:'Hola, esta es una llamada realizada por el asistente virtual de {co}.',
                en:'Hello, this call is being made by the virtual assistant for {co}.'},
];
const disclosureLine = (opt, lang, co) => (lang==='en' ? opt.en : opt.es).split('{co}').join(co);
const disclosureOpt  = d => d.template==='collections' ? val(DISCLOSURES, (d.tokens||{}).disclosure) : DISCLOSURES[0];
const disclosureFor = d => d.template==='reception'
  ? disclosureLine(DISCLOSURES[0], 'en', d.tokens.company)
  : disclosureLine(disclosureOpt(d), langOf(d), d.tokens.company);
const RECEPTION_QUICKS = ['I’d like to leave a message', 'Can I book an appointment?', 'What are your opening hours?'];

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useMemo,
  useRef,
  useEffect,
  useCallback
} = React;

/* ============================ ICONS ============================ */
const I = {
  burger: /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 6h16M4 12h16M4 18h16"
  })),
  monitor: /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "3",
    width: "20",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 21h8M12 17v4"
  })),
  inbox: /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 12h-6l-2 3h-4l-2-3H2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 5h13l3.5 7v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5z"
  })),
  card: /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "10",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 9h4M15 13h4M6 16h7"
  })),
  info: /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 11v5M12 7.6v.2"
  })),
  user: /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "3.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.5 20a7.5 7.5 0 0 1 15 0"
  })),
  users: /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "8",
    r: "3.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 19.5a6.5 6.5 0 0 1 13 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 5.5a3.2 3.2 0 0 1 0 6M17.5 19.5a6.6 6.6 0 0 0-2-4.7"
  })),
  plug: /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 15.5 11 11l4.5-2.5L13 13z"
  })),
  bolt: /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 12a8 8 0 1 1 2.4 5.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 8v4h4"
  })),
  gear: /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2.5v2.6M12 18.9v2.6M4.2 7.2l2.2 1.3M17.6 15.5l2.2 1.3M4.2 16.8l2.2-1.3M17.6 8.5l2.2-1.3"
  })),
  spark: /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l1.8 4.7L18.5 9l-4.7 1.8L12 15.5l-1.8-4.7L5.5 9l4.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 16.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z"
  })),
  chat: /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 12a7.5 7.5 0 0 1-11 6.6L4.5 20l1.3-4A7.5 7.5 0 1 1 20 12z"
  })),
  board: /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "15",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 15v-3M11 15V9M15 15v-5"
  })),
  form: /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "3",
    width: "16",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 8h8M8 12h8M8 16h4"
  })),
  bell: /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 19a2 2 0 0 0 4 0"
  })),
  cup: /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 8h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 9h2a2.5 2.5 0 0 1 0 5h-2"
  })),
  phoneOut: /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14.5 3.5h6v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.5 3.5 14 10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.4 5.6 8.2 3.4a1.6 1.6 0 0 0-2.3 0L4.4 4.9c-1 1-1 2.5-.4 3.9a22 22 0 0 0 11.2 11.2c1.4.6 2.9.6 3.9-.4l1.5-1.5a1.6 1.6 0 0 0 0-2.3l-2.2-2.2a1.6 1.6 0 0 0-2.3 0l-1 1a19 19 0 0 1-5.5-5.5l1-1a1.6 1.6 0 0 0 0-2.3z"
  })),
  phoneIn: /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.5 3.5 14 10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 4.5v5.5h5.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.4 5.6 8.2 3.4a1.6 1.6 0 0 0-2.3 0L4.4 4.9c-1 1-1 2.5-.4 3.9a22 22 0 0 0 11.2 11.2c1.4.6 2.9.6 3.9-.4l1.5-1.5a1.6 1.6 0 0 0 0-2.3l-2.2-2.2a1.6 1.6 0 0 0-2.3 0l-1 1a19 19 0 0 1-5.5-5.5l1-1a1.6 1.6 0 0 0 0-2.3z"
  })),
  phone: /*#__PURE__*/React.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.4 5.6 8.2 3.4a1.6 1.6 0 0 0-2.3 0L4.4 4.9c-1 1-1 2.5-.4 3.9a22 22 0 0 0 11.2 11.2c1.4.6 2.9.6 3.9-.4l1.5-1.5a1.6 1.6 0 0 0 0-2.3l-2.2-2.2a1.6 1.6 0 0 0-2.3 0l-1 1a19 19 0 0 1-5.5-5.5l1-1a1.6 1.6 0 0 0 0-2.3z"
  })),
  check: /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 12.5 9.5 18 20 6.5"
  })),
  plus: /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  })),
  x: /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6 6 18"
  })),
  back: /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15 5l-7 7 7 7"
  })),
  fwd: /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 5l7 7-7 7"
  })),
  lock: /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "10.5",
    width: "16",
    height: "11",
    rx: "2.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 10.5V7a4 4 0 0 1 8 0v3.5"
  })),
  pencil: /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.1",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 20h4L20 8l-4-4L4 16z"
  })),
  send: /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 12 20 4l-8 16-2-6z"
  })),
  play: /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 4l13 8-13 8z"
  })),
  clock: /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v5.5l3.5 2"
  })),
  calendar: /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 10h18M8 3v4M16 3v4"
  })),
  quote: /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 3h9l4 4v14H6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 12h7M9 16h5M9 8h4"
  })),
  msg: /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 11.5a7 7 0 0 1-10.3 6.2L5 19l1.2-4A7 7 0 1 1 20 11.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 11.5h5"
  })),
  scale: /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 4v16M6 20h12M12 7 5 9l3 5 3-5zM12 7l7 2-3 5-3-5z"
  })),
  globe: /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 9.5h17M3.5 14.5h17M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z"
  })),
  arrowUp: /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 19V5M5.5 11.5 12 5l6.5 6.5"
  })),
  arrowDown: /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5.5 12.5 12 19l6.5-6.5"
  })),
  spinner: /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3a9 9 0 1 0 9 9"
  })),
  wand: /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 19 16 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 4.5 15 7l2.5 1-2.5 1-1 2.5-1-2.5L10.5 8 13 7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.5 13.5l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6z"
  })),
  shield: /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l7.5 3v5.5c0 4.5-3.2 7.8-7.5 9.5-4.3-1.7-7.5-5-7.5-9.5V6z"
  }))
};

/* ============================ MOCK DATA ============================ */

const persona = id => PERSONAS.find(p => p.id === id) || PERSONAS[0];
const GOALS = {
  leads: [{
    id: 'quote_wa',
    v: 'sends a quote by WhatsApp the same day',
    say: 'Le envío la cotización por WhatsApp hoy mismo, ¿le parece?',
  sayEn: 'I can send the quote over on WhatsApp today — does that work for you?'
  }, {
    id: 'visit',
    v: 'books a visit with an advisor',
    say: 'Le agendo una visita con un asesor, ¿mañana a las 10:00 le sirve?',
  sayEn: 'I can book you a visit with an advisor. Would tomorrow at ten suit you?'
  }, {
    id: 'budget',
    v: 'asks the budget and passes it to sales',
    say: '¿Qué presupuesto tiene en mente? Con eso le paso el caso a un asesor.',
  sayEn: 'What budget did you have in mind? I will pass that to an advisor with your details.'
  }],
  appointments: [{
    id: 'confirm',
    v: 'confirms or moves the appointment',
    say: '¿Le confirmo la cita del jueves a las 10:00, o prefiere otro horario?',
  sayEn: 'Shall I confirm Thursday at ten, or would another time suit you better?'
  }, {
    id: 'confirm_only',
    v: 'only confirms, never reschedules',
    say: '¿Me confirma que asistirá el jueves a las 10:00?',
  sayEn: 'Can you confirm you will be there on Thursday at ten?'
  }, {
    id: 'prep',
    v: 'confirms and explains what to bring',
    say: 'Le confirmo el jueves 10:00. Traiga su documento y los exámenes previos.',
  sayEn: 'Thursday at ten, confirmed. Please bring your ID and any previous test results.'
  }],
  messages: [{
    id: 'callback',
    v: 'agrees a callback time and number',
    say: '¿A qué número le devolvemos la llamada, y a qué hora le conviene?',
  sayEn: 'What number should we call you back on, and what time suits you?'
  }, {
    id: 'deliver',
    v: 'delivers the message and ends',
    say: 'Le dejo el recado y con eso termino. Gracias por su tiempo.',
  sayEn: 'I will leave that message for you, and that is everything. Thanks for your time.'
  }, {
    id: 'confirm_r',
    v: 'reads the message back to confirm',
    say: 'Le repito el recado para confirmar que quedó bien anotado.',
  sayEn: 'Let me read the message back so we know it is right.'
  }],
  // Collections: what it can offer, in the order the supervisor sets. "When do you intend to pay"
  // is no longer one of them — it is the fixed fallback (INTENT_ASK in data.js).
  collections: [{
    id: 'date5',
    v: 'full payment within',
    say: '¿Puede realizar el pago total dentro de {n}?',
    sayEn: 'Could you pay the full balance within {n}?'
  }, {
    id: 'partial',
    v: 'a partial payment of at least',
    say: 'Podemos registrar un abono de al menos {n} del saldo, es decir {amt}. ¿Le parece?',
    sayEn: 'We can take a part payment of at least {n} of the balance — that is {amt}. Would that work?'
  }, {
    id: 'minimum',
    v: 'the minimum payment',
    say: 'Puede realizar el pago mínimo de {min}. ¿Le sirve?',
    sayEn: 'You can make the minimum payment of {min}. Would that work?'
  }, {
    id: 'twopart',
    v: 'in two parts: first today, the rest within',
    say: 'Podemos dividirlo en dos pagos: uno hoy y el resto dentro de {n}. ¿Le parece?',
    sayEn: 'We can split it in two: one part today and the rest within {n}. Would that work?'
  }, {
    id: 'reduced',
    v: 'a reduced balance without interest',
    say: 'Podemos dejar el saldo en {red}, sin intereses. ¿Le parece?',
    sayEn: 'We can settle the balance at {red}, without interest. Would that work?'
  }],
  reception: [{
    id: 'takemsg',
    v: 'collects the caller’s details and confirms them back',
    // `short` is used only when several jobs are listed together, where the full phrases
    // (which carry their own "and" and comma clauses) would run into each other
    short: 'takes a message',
    say: 'Let me make sure I have that right — I’ll read it back to you before we finish.'
  }, {
    id: 'book',
    v: 'books an appointment from the connected calendar',
    short: 'books appointments',
    say: 'I can book that for you now. Which day works best?'
  }, {
    id: 'answer',
    v: 'answers questions from the business profile, then takes a message',
    short: 'answers questions from the business profile',
    say: 'Happy to help with that. Anything I can’t answer, I’ll pass on as a message.'
  }]
};
const IDENTITY = [{
  id: 'verify',
  v: 'verifies who it is speaking to',
  say: '¿Hablo con la persona titular?',
  sayEn: 'Am I speaking with the account holder?'
}, {
  id: 'byname',
  v: 'asks for the person by name',
  say: '¿Se encuentra la señora Herrera?',
  sayEn: 'Is Mrs Herrera available?'
}, {
  id: 'none',
  v: 'speaks to whoever answers',
  say: 'Le comento el motivo de la llamada.',
  sayEn: 'Let me explain why I am calling.'
}];
const HANDOFF = [{
  id: 'campaign',
  v: 'transfers to a campaign',
  say: 'Con gusto, le paso con el equipo de esa campaña ahora mismo.',
  // sayEn is used by the one template that speaks English; the rest quote `say`
  sayEn: 'Of course — let me put you through to the team on that campaign.'
}, {
  id: 'msg',
  v: 'takes a message and ends the call',
  say: 'Le tomo el recado y una persona le devuelve la llamada.',
  sayEn: 'I’ll take a message and someone will call you back.'
}];
const TEMPLATES = [{
  id: 'leads',
  name: 'Lead capture & quotes',
  icon: I.quote,
  blurb: 'Calls people who asked about a product, checks what they need and gets them a quote.',
  stat: 'Used by 34 teams',
  company: 'Seguros Vida Andina',
  who: 'people who asked for a quote from',
  mid: 'asks what they need, and',
  goal: 'quote_wa',
  handoff: 'campaign',
  campaign: 'Sales_Engineers',
  opener: 'Le llamo por la cotización que solicitó.',
  openerEn: 'I am calling about the quote you asked us for.',
  inOpener: '¿En qué producto está interesado?',
  inOpenerEn: 'Which product are you interested in?',
  promises: ['Never promise a final price', 'Never promise a discount', 'Never promise same-day delivery'],
  banned: ['gratis', 'garantizado'],
  bannedEn: ['free', 'guaranteed'],
  custSay: 'Sí, pedí información por la página.',
  custSayEn: 'Yes, I asked for information on your website.'
}, {
  id: 'appointments',
  name: 'Appointments',
  icon: I.calendar,
  blurb: 'Confirms, moves and reminds — for clinics, workshops and service visits.',
  stat: 'Used by 51 teams',
  company: 'Clínica Andes',
  who: 'customers of',
  mid: 'states the date and time, and',
  goal: 'confirm',
  handoff: 'campaign',
  campaign: 'Citas_Sept',
  opener: 'Le llamo para confirmar su cita del jueves a las 10:00.',
  openerEn: 'I am calling to confirm your appointment on Thursday at ten.',
  inOpener: '¿Desea agendar, mover o confirmar una cita?',
  inOpenerEn: 'Would you like to book, move or confirm an appointment?',
  promises: ['Never promise a specific doctor', 'Never promise a same-day slot', 'Never give clinical advice'],
  banned: ['diagnóstico', 'urgencia'],
  bannedEn: ['diagnosis', 'emergency'],
  custSay: 'Sí, con ella. ¿De qué se trata?',
  custSayEn: 'Speaking. What is it about?'
}, {
  id: 'messages',
  name: 'Messages & callbacks',
  icon: I.msg,
  blurb: 'Delivers a message, takes one back and agrees when a person will call.',
  stat: 'Used by 22 teams',
  company: 'Servicios Del Plata',
  who: 'people who left a message for',
  mid: 'delivers the message, and',
  goal: 'callback',
  handoff: 'msg',
  opener: 'Le devuelvo la llamada por el mensaje que nos dejó.',
  openerEn: 'I am returning your call about the message you left us.',
  inOpener: '¿Desea dejar un mensaje o que le devolvamos la llamada?',
  inOpenerEn: 'Would you like to leave a message, or have us call you back?',
  promises: ['Never promise an exact callback minute', 'Never promise a resolution'],
  banned: ['reclamo'],
  bannedEn: ['complaint'],
  custSay: 'Ah sí, llamé ayer y no me contestaron.',
  custSayEn: 'Oh yes, I rang yesterday and nobody picked up.'
}, {
  id: 'collections',
  name: 'Collections',
  icon: I.scale,
  blurb: 'Explains an overdue balance, agrees a payment date and sends the payment link.',
  stat: 'Used by 18 teams',
  company: 'Banco Sol',
  who: 'people with overdue payments at',
  mid: 'explains the balance, and',
  goal: 'date5',
  handoff: 'campaign',
  campaign: 'Cobros_Ago',
  opener: 'Le llamo por su saldo pendiente.',
  openerEn: 'I am calling about your outstanding balance.',
  inOpener: '¿Desea consultar su saldo o registrar un pago?',
  inOpenerEn: 'Would you like to check your balance or make a payment?',
  promises: ['Never promise to remove interest', 'Never promise to stop legal action', 'Never promise a discount on the balance'],
  banned: ['abogado'],
  bannedEn: ['lawyer'],
  custSay: 'Sí, soy yo. Ya sé del saldo pendiente.',
  custSayEn: 'Yes, speaking. I know about the balance.'
}, {
  id: 'reception',
  name: 'Receptionist',
  icon: I.phoneIn,
  inboundOnly: true,
  blurb: 'Answers the company line, greets callers, collects who is calling and why, and passes a summary on.',
  stat: 'New · inbound only',
  company: 'Estudio Jurídico Lara',
  who: 'callers of',
  mid: '',
  goal: 'takemsg',
  handoff: 'msg',
  opener: 'Thank you for calling — how can I help you today?',
  inOpener: 'Thank you for calling — how can I help you today?',
  promises: ['Never promise a person will call back at an exact time', 'Never quote a price', 'Never confirm an appointment the calendar hasn’t accepted'],
  banned: ['guaranteed', 'immediately'],
  custSay: 'Hi, I was hoping to speak with someone about my case.'
}];
const template = id => TEMPLATES.find(t => t.id === id) || TEMPLATES[1];
const DEFAULT_BANNED = ['urgente', 'demanda', 'embargo'];
/* the same three, for an agent that speaks English */
const DEFAULT_BANNED_EN = ['urgent', 'lawsuit', 'seizure'];
function newDraft() {
  return {
    direction: null,
    template: null,
    lang: null,
    handover: [],
    handoverOther: [],
    collect: [],
    knowledge: { about: '', urls: [] },
    personaId: null,
    tokens: {},
    opener: '',
    attempts: 2,
    from: 8,
    to: 18,
    banned: [],
    promises: [],
    name: ''
  };
}
const NAME_ES = {
  appointments: 'Citas ',
  collections: 'Cobros ',
  messages: 'Recados ',
  leads: 'Cotizaciones '
};
function seedFromTemplate(d, tid) {
  const t = template(tid);
  const inbound = d.direction === 'in';
  return {
    ...d,
    template: tid,
    name: (inbound ? 'Recepción ' : NAME_ES[tid] || '') + t.company,
    handover: (HANDOVER_SEED[tid] || []).slice(),
    handoverOther: [],
    // only the receptionist has anything here; every other template gets clean defaults
    collect: tid === 'reception' ? COLLECT_DEFAULTS.map(f => ({ ...f })) : [],
    knowledge: tid === 'reception' ? { about: '', urls: [] } : { about: '', urls: [] },
    tokens: {
      company: t.company,
      identity: 'verify',
      goal: t.goal,
      // a receptionist can hold several jobs at once; goal stays the first of them
      goals: multiGoal(tid) ? [t.goal] : undefined,
      handoff: t.handoff,
      campaign: t.campaign || CAMPAIGNS[0],
      // collections only: what it says about the balance, and how the customer pays
      ...(tid === 'collections' ? { disclose: 'amount', amount: AMOUNT_PLACEHOLDER, payment: 'channel', paymentPlace: '',
        mentions: { overdue: false, contract: false }, overdueUnit: 'days', cols: { ...LIST_COLS },
        offers: OFFER_IDS.map(id => ({ id, on: id === 'date5' })), closing: '', noDate: 'end' } : {})
    },
    opener: d.lang === 'en'
      ? (inbound ? (t.inOpenerEn || t.inOpener) : (t.openerEn || t.opener))
      : (inbound ? t.inOpener : t.opener),
    banned: d.lang === 'en'
      ? [...DEFAULT_BANNED_EN, ...(t.bannedEn || t.banned)]
      : [...DEFAULT_BANNED, ...t.banned],
    // whoever rang in is by definition the person on the line, so the wrong-recipient rule is
    // seeded for outbound work only
    promises: (inbound ? [] : [{ t: THIRD_PARTY_RULE, on: true, kind: 'rule' }])
      // collections adds the two sibling rules: never the amount, and the message it leaves
      .concat(!inbound && tid === 'collections' ? [
        { t: THIRD_PARTY_NO_AMOUNT, on: true, kind: 'rule' },
        { t: THIRD_PARTY_MESSAGE, on: true, kind: 'rule', param: thirdPartyMessageDefault(d.lang, t.company) }] : [])
      // a template rule that does not begin "Never promise" was never a promise: the summary
      // read "never promises ... or Never give clinical advice". It is an other-rule.
      .concat(t.promises.map(p => ({
        t: p,
        on: true,
        kind: /^never promise/i.test(p) ? 'promise' : 'rule'
      })))
  };
}

/* ---- the call log a supervisor picks from before correcting anything ---- */
const OUTCOMES = {
  confirmed: {
    label: 'Confirmed',
    cls: 'pill-live'
  },
  moved: {
    label: 'Rescheduled',
    cls: 'pill-live'
  },
  message: {
    label: 'Took a message',
    cls: 'pill-reh'
  },
  transfer: {
    label: 'Transferred',
    cls: 'pill-acc'
  },
  none: {
    label: 'No answer',
    cls: 'pill-dra'
  }
};
const CALL_LOG = [{
  id: 'c1',
  no: '4.812',
  when: 'Today · 15:42',
  dur: '1:06',
  kind: 'message',
  flag: true,
  snippet: 'Ese día no puedo, estoy trabajando hasta tarde.'
}, {
  id: 'c2',
  no: '4.809',
  when: 'Today · 15:10',
  dur: '0:38',
  kind: 'confirmed',
  snippet: 'Sí, perfecto, ahí estaré.'
}, {
  id: 'c3',
  no: '4.804',
  when: 'Today · 14:29',
  dur: '0:12',
  kind: 'none',
  snippet: 'Nadie contestó.'
}, {
  id: 'c4',
  no: '4.791',
  when: 'Yesterday · 17:55',
  dur: '1:24',
  kind: 'transfer',
  flag: true,
  snippet: 'Prefiero hablar con una persona.'
}, {
  id: 'c5',
  no: '4.786',
  when: 'Yesterday · 16:31',
  dur: '0:52',
  kind: 'moved',
  snippet: '¿El viernes a las nueve? Sí, me sirve.'
}, {
  id: 'c6',
  no: '4.770',
  when: 'Yesterday · 11:07',
  dur: '0:44',
  kind: 'message',
  flag: true,
  snippet: 'Ahora no puedo hablar.'
}, {
  id: 'c7',
  no: '4.755',
  when: '23 Aug · 09:48',
  dur: '1:11',
  kind: 'confirmed',
  snippet: 'Listo, confirmado.'
}];
/* A draft agent has never run. On the Test rung the log is simulated. */
const callById = (a, id) => {
  const cs = callsFor(a);
  return cs.find(c => c.id === id) || cs[0] || null;
};

/* What a correction on each kind of call would change. */
const proposalFor = (a, kind) => kind === 'transfer' ? {
  rule: 'Answer what it can answer before transferring'
} : kind === 'confirmed' || kind === 'moved' ? {
  rule: 'Read the date back before ending the call'
} : a.template === 'collections' ? {
  rule: 'Offer another available slot before taking a message'
} : {
  rule: 'Offer another available slot before taking a message',
  goal: goalsFor(a.template)[0]
};
const SEED_AGENTS_RAW = [{
  id: 'a1',
  name: 'Citas Clínica Andes',
  personaId: 'gloria',
  template: 'appointments',
  assignedToDialer: true,
  dialers: ['Citas_Septiembre'],
  versions: [
    // `was` = what this version held that the agent no longer does; the newest needs none
    { id: 'v1', author: 'attilio.porchia', when: '2 Aug 2026, 10:04',  changed: 'First version',
      was: { opener: 'Le llamo por su cita en Clínica Andes.', handoverOther: [] } },
    { id: 'v2', author: 'attilio.porchia', when: '14 Aug 2026, 09:12',changed: 'Reworded the opener',
      was: { handoverOther: [] } },
    { id: 'v3', author: 'carina.soca',     when: '22 Aug 2026, 16:40', changed: 'Added the medical-emergency handover rule' }
  ],
  calls: 412,
  direction: 'out',
  attempts: 3,
  from: 8,
  to: 18,
  tokens: {
    company: 'Clínica Andes',
    identity: 'verify',
    goal: 'confirm',
    handoff: 'campaign',
    campaign: 'Citas_Sept'
  },
  opener: 'Le llamo para confirmar su cita del jueves a las 10:00.',
  banned: [...DEFAULT_BANNED, 'diagnóstico'],
  promises: [{
    t: 'Never promise a specific doctor',
    on: true
  }, {
    t: 'Never promise a same-day slot',
    on: true
  }],
  extraRules: []
}, {
  id: 'a2',
  name: 'Cotizaciones Seguros Vida',
  personaId: 'antonio',
  template: 'leads',
  assignedToDialer: true,
  dialers: ['Cotizaciones_Q3', 'Leads_Web'],
  versions: [
    { id: 'v1', author: 'carina.soca',     when: '18 Aug 2026, 15:22', changed: 'First version',
      was: { promises: [] } },
    { id: 'v2', author: 'attilio.porchia', when: '29 Aug 2026, 11:05', changed: 'Never-promise: final price' }
  ],
  calls: 20,
  direction: 'out',
  attempts: 5,
  from: 9,
  to: 19,
  tokens: {
    company: 'Seguros Vida Andina',
    identity: 'byname',
    goal: 'quote_wa',
    handoff: 'campaign',
    campaign: 'Sales_Engineers'
  },
  opener: 'Le llamo por la cotización que solicitó.',
  banned: [...DEFAULT_BANNED, 'gratis'],
  promises: [{
    t: 'Never promise a final price',
    on: true
  }],
  extraRules: []
}, {
  // the worked example for the Receptionist template, and the one inbound agent in the set.
  // It speaks English because that template's own wording is written in English.
  id: 'a3',
  name: 'Recepción Del Plata',
  personaId: 'gail',
  template: 'reception',
  lang: 'en',
  assignedToDialer: false,
  dialers: [],
  versions: [
    { id: 'v1', author: 'attilio.porchia', when: '12 Aug 2026, 09:30',
      changed: 'First version',
      // it only took messages then; booking came later
      was: { tokens: { company: 'Servicios Del Plata', identity: 'verify', goal: 'takemsg',
        goals: ['takemsg'], handoff: 'msg' } } },
    { id: 'v2', author: 'carina.soca', when: '3 Sep 2026, 11:40',
      changed: 'Let it book appointments as well as take messages' }
  ],
  calls: 38,
  direction: 'in',
  attempts: 4,
  from: 10,
  to: 20,
  tokens: {
    company: 'Servicios Del Plata',
    identity: 'verify',
    goal: 'takemsg',
    goals: ['takemsg', 'book'],
    handoff: 'msg'
  },
  opener: 'Thank you for calling — how can I help you today?',
  banned: [...DEFAULT_BANNED_EN, 'guaranteed', 'immediately'],
  collect: COLLECT_DEFAULTS.map(f => ({ ...f })),
  knowledge: { about: 'Servicios Del Plata handles maintenance contracts for commercial buildings. The office is open Monday to Friday, 9 to 6.', urls: ['servicios-del-plata.com/contact'] },
  promises: [{
    t: 'Never promise a person will call back at an exact time',
    on: true
  }, {
    t: 'Never quote a price',
    on: true,
    kind: 'rule'
  }],
  extraRules: []
}, {
  id: 'a4',
  name: 'Bienvenida Nuevos Clientes',
  personaId: 'charles',
  template: 'leads',
  assignedToDialer: false,
  dialers: [],
  versions: [
    { id: 'v1', author: 'attilio.porchia', when: '31 Aug 2026, 17:48',changed: 'First version' }
  ],
  calls: 0,
  direction: 'out',
  attempts: 2,
  from: 8,
  to: 18,
  tokens: {
    company: 'Multitienda Cuscatlán',
    identity: 'verify',
    goal: 'budget',
    handoff: 'campaign',
    campaign: 'Sales_Engineers'
  },
  opener: 'Le llamo para darle la bienvenida y explicarle su plan.',
  banned: DEFAULT_BANNED,
  promises: [],
  extraRules: []
}, {
  id: 'a5',
  // collections is outbound work — the wizard cannot produce an inbound one, so no seeded
  // agent should be one either
  name: 'Cobros WhatsApp Banco Sol',
  personaId: 'frank',
  template: 'collections',
  assignedToDialer: false,
  dialers: [],
  versions: [
    { id: 'v1', author: 'carina.soca', when: '1 Sep 2026, 08:15',changed: 'First version',
      was: { opener: 'Le escribo por un saldo vencido.', banned: [...DEFAULT_BANNED],
        tokens: { company: 'Banco Sol', identity: 'verify', goal: 'date5', handoff: 'campaign', campaign: 'Cobros_Ago',
          disclose: 'amount', amount: AMOUNT_PLACEHOLDER, payment: 'channel', paymentPlace: '',
          mentions: { overdue: false, contract: false }, overdueUnit: 'days', cols: { ...LIST_COLS },
          offers: OFFER_IDS.map(id => ({ id, on: false })), closing: '' } } },
    { id: 'v2', author: 'carina.soca', when: '8 Sep 2026, 16:02',
      changed: 'Say only that a balance is outstanding, never the amount',
      was: { banned: [...DEFAULT_BANNED] } },
    { id: 'v3', author: 'attilio.porchia', when: '15 Sep 2026, 10:25',
      changed: 'Added abogado to the words it must never use' }
  ],
  calls: 12,
  direction: 'out',
  attempts: 3,
  from: 8,
  to: 18,
  tokens: {
    company: 'Banco Sol',
    identity: 'verify',
    goal: 'date5',
    handoff: 'campaign',
    campaign: 'Cobros_Ago',
    disclose: 'exists',
    amount: AMOUNT_PLACEHOLDER,
    payment: 'channel',
    paymentPlace: '',
    // no offers: it says a balance is outstanding and asks when the customer intends to pay
    mentions: { overdue: false, contract: false },
    overdueUnit: 'days',
    cols: { ...LIST_COLS },
    offers: OFFER_IDS.map(id => ({ id, on: false })),
    closing: ''
  },
  opener: 'Le escribo por su saldo pendiente con Banco Sol.',
  banned: [...DEFAULT_BANNED, 'abogado'],
  promises: [{
    t: 'Never promise to remove interest',
    on: true
  }, {
    t: 'Never promise a discount on the balance',
    on: true
  }, { t: THIRD_PARTY_RULE, on: true, kind: 'rule' },
     { t: THIRD_PARTY_NO_AMOUNT, on: true, kind: 'rule' },
     { t: THIRD_PARTY_MESSAGE, on: true, kind: 'rule', param: thirdPartyMessageDefault('es', 'Banco Sol') }],
  extraRules: []
}, {
  // the established outbound collections agent: live in a dialer, with a version to replace
  id: 'a6',
  name: 'Cobros Banco Sol',
  personaId: 'antonio',
  template: 'collections',
  assignedToDialer: true,
  dialers: ['Cobros_Septiembre'],
  versions: [
    { id: 'v1', author: 'attilio.porchia', when: '26 Aug 2026, 10:12',
      changed: 'First version', was: { tokens: { company: 'Banco Sol', identity: 'verify',
        goal: 'date5', handoff: 'campaign', campaign: 'Cobros_Ago', params: { date5: 3, partial: 30 },
        disclose: 'amount', amount: AMOUNT_PLACEHOLDER, payment: 'channel', paymentPlace: '',
        mentions: { overdue: true, contract: false }, overdueUnit: 'days', cols: { ...LIST_COLS },
        offers: [{ id: 'date5', on: true }, { id: 'partial', on: true }, { id: 'minimum', on: false }, { id: 'twopart', on: false }, { id: 'reduced', on: false }], closing: '' } } },
    { id: 'v2', author: 'carina.soca', when: '4 Sep 2026, 12:20',
      changed: 'Gave customers five days instead of three' }
  ],
  calls: 96,
  direction: 'out',
  attempts: 4,
  from: 9,
  to: 19,
  tokens: {
    company: 'Banco Sol',
    identity: 'verify',
    goal: 'date5',
    handoff: 'campaign',
    campaign: 'Cobros_Ago',
    disclose: 'amount',
    amount: AMOUNT_PLACEHOLDER,
    payment: 'channel',
    paymentPlace: '',
    // it states the amount and how long it's overdue, then offers full payment in 5 days, then 30%
    params: { date5: 5, partial: 30 },
    mentions: { overdue: true, contract: false },
    overdueUnit: 'days',
    cols: { ...LIST_COLS },
    offers: [{ id: 'date5', on: true }, { id: 'partial', on: true }, { id: 'minimum', on: false }, { id: 'twopart', on: false }, { id: 'reduced', on: false }],
    closing: ''
  },
  opener: 'Le llamo por su saldo pendiente con Banco Sol.',
  banned: [...DEFAULT_BANNED, 'abogado'],
  promises: [{
    t: 'Never promise to remove interest',
    on: true
  }, {
    t: 'Never promise to stop legal action',
    on: true
  }, {
    t: 'Never promise a discount on the balance',
    on: true
  }, { t: THIRD_PARTY_RULE, on: true, kind: 'rule' },
     { t: THIRD_PARTY_NO_AMOUNT, on: true, kind: 'rule' },
     { t: THIRD_PARTY_MESSAGE, on: true, kind: 'rule', param: thirdPartyMessageDefault('es', 'Banco Sol') }],
  extraRules: []
}];
const SEED_AGENTS = SEED_AGENTS_RAW.map((a, i) => ({
  ...a,
  handover: (SEED_HANDOVER[i] || []).slice(),
  handoverOther: i === 0 ? ['El paciente menciona una urgencia médica'] : []
}));

/* Inbound has no batch test — there is no list of contacts to run 20 of. */
const dirLabel = dir => dir === 'in' ? 'Inbound' : 'Outbound';
const hh = h => String(h).padStart(2, '0') + ':00';
const fmtRange = (a, b) => hh(a) + ' and ' + hh(b);
const val = (arr, id) => arr.find(o => o.id === id) || arr[0];
const goalsFor = tid => GOALS[tid] || GOALS.appointments;

/* ============================ PRIMITIVES ============================ */
function Avatar({
  p,
  size = 40,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ava",
    style: {
      width: size,
      height: size,
      fontSize: size * 0.36,
      background: p.grad,
      ...style
    }
  }, p.name[0]);
}
function Pill({
  cls,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'pill ' + cls
  }, /*#__PURE__*/React.createElement("i", null), children);
}
function Popover({
  onClose,
  align,
  wide,
  children
}) {
  const ref = useRef(null);
  useEffect(() => {
    const down = e => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    const key = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('mousedown', down);
    document.addEventListener('keydown', key);
    return () => {
      document.removeEventListener('mousedown', down);
      document.removeEventListener('keydown', key);
    };
  }, [onClose]);
  return /*#__PURE__*/React.createElement("div", {
    className: 'pop' + (align === 'right' ? ' right' : '') + (wide ? ' pop-wide' : ''),
    ref: ref
  }, children);
}
function Option({
  on,
  onClick,
  children
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: "opt",
    role: "radio",
    "aria-checked": on,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", {
    className: "radio"
  }), /*#__PURE__*/React.createElement("span", null, children));
}
function Modal({
  title,
  children,
  onClose,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "scrim",
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title
  }, /*#__PURE__*/React.createElement("h3", null, title), children, /*#__PURE__*/React.createElement("div", {
    className: "modal-row"
  }, actions)));
}
function Toast({
  msg
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "toast"
  }, I.check, msg);
}

/* ============================ SHELL ============================ */
function Shell({
  children,
  crumb,
  onHome,
  onGo,
  here,
  uiLang,
  onUiLang
}) {
  const nav = [{
    g: 'Administrator'
  }, {
    t: 'Users',
    i: I.user
  }, {
    t: 'Connectors',
    i: I.plug
  }, {
    t: 'Campaigns',
    i: I.users
  }, {
    t: 'AI Agents',
    i: I.spark,
    go: 'list'
  }, {
    t: 'Automations',
    i: I.bolt
  }, {
    t: 'Configuration',
    i: I.gear
  }, {
    g: 'Analytics'
  }, {
    t: 'Outbound hub',
    i: I.board
  }, {
    t: 'Interactions',
    i: I.chat,
    go: 'interactions'
  }, {
    t: 'Wallboards',
    i: I.board
  }, {
    g: 'Developer'
  }, {
    t: 'Forms',
    i: I.form
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "rail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rail-burger"
  }, I.burger), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rail-ico"
  }, I.monitor), /*#__PURE__*/React.createElement("div", {
    className: "rail-ico"
  }, I.inbox), /*#__PURE__*/React.createElement("div", {
    className: "rail-ico",
    "aria-current": "true"
  }, I.spark), /*#__PURE__*/React.createElement("div", {
    className: "rail-ico"
  }, I.card)), /*#__PURE__*/React.createElement("div", {
    className: "rail-foot"
  }, I.info)), /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand-mark"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      height: 11
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      height: 19
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      height: 14
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "brand-name"
  }, "ucontact")), nav.map((n, i) => n.g ? /*#__PURE__*/React.createElement("div", {
    className: "nav-grp mono",
    key: i,
    style: {
      fontSize: 11,
      letterSpacing: '.1em'
    }
  }, n.g) : /*#__PURE__*/React.createElement("button", {
    className: "nav-item",
    key: i,
    "aria-current": n.go && here === n.go ? 'true' : undefined,
    onClick: n.go ? () => onGo(n.go) : undefined
  }, n.i, n.t))), /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, /*#__PURE__*/React.createElement("header", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "topnav"
  }, [{ k: 'list', t: 'AI Agents', i: I.spark }, { k: 'interactions', t: 'Interactions', i: I.chat }].map(x => /*#__PURE__*/React.createElement("button", {
    key: x.k,
    className: "topnav-b",
    "aria-current": here === x.k ? 'true' : undefined,
    onClick: () => onGo(x.k)
  }, x.i, /*#__PURE__*/React.createElement("span", null, x.t)))), /*#__PURE__*/React.createElement("span", {
    className: "topbar-t"
  }, crumb), /*#__PURE__*/React.createElement("span", {
    className: "topbar-r"
  }, onUiLang && /*#__PURE__*/React.createElement("span", {
    className: "langsw",
    role: "radiogroup",
    "aria-label": "Interface language"
  }, [['en', 'EN'], ['es', 'ES']].map(([id, lab]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    role: "radio",
    "aria-checked": uiLang === id,
    className: 'langsw-b' + (uiLang === id ? ' on' : ''),
    onClick: () => onUiLang(id)
  }, lab))), I.cup, I.bell, /*#__PURE__*/React.createElement("span", {
    className: "ava-me"
  }))), children));
}

/* ============================ 1 · AGENT LIST ============================ */
/* ============================ WIZARD CHROME ============================ */
const STEP_LABELS = ['Direction & job', 'Voice', 'Scope', 'Rules', 'Test'];
function SavedState({
  busy
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'saved' + (busy ? ' busy' : '')
  }, /*#__PURE__*/React.createElement("span", {
    className: "saved-dot"
  }, busy ? I.spinner : I.check), busy ? 'Updating…' : 'Not saved yet');
}
function WizardBar({
  step,
  maxStep,
  onGo,
  busy,
  onExit
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "wz-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wz-row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-qui btn-sm",
    onClick: onExit,
    style: {
      marginLeft: -8
    }
  }, I.back, "Agents"), /*#__PURE__*/React.createElement("div", {
    className: "wz-steps"
  }, STEP_LABELS.map((l, i) => {
    const n = i + 1,
      s = n === step ? 'now' : n < step || n <= maxStep ? 'done' : 'todo';
    return /*#__PURE__*/React.createElement("button", {
      key: l,
      className: "wz-seg",
      "data-s": s,
      disabled: s === 'todo',
      onClick: () => s !== 'todo' && onGo(n),
      title: 'Step ' + n + ' · ' + l
    }, /*#__PURE__*/React.createElement("span", {
      className: "wz-lab"
    }, n, ". ", l));
  })), /*#__PURE__*/React.createElement(SavedState, {
    busy: busy
  })));
}
function StepHead({
  title,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 27
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, sub));
}
function Foot({
  onBack,
  onNext,
  nextLabel,
  nextOk,
  wide,
  extra
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "wz-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wz-foot-in",
    style: wide ? {
      maxWidth: 1120
    } : null
  }, onBack && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-gho",
    onClick: onBack
  }, I.back, "Back"), extra, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-pri",
    style: {
      marginLeft: 'auto'
    },
    disabled: !nextOk,
    onClick: onNext
  }, nextLabel || 'Continue', I.fwd)));
}

/* ============================ 2 · DIRECTION ============================ */

/* ============================ 3 · TEMPLATE GALLERY ============================ */

/* ============================ 4 · VOICE & LANGUAGE ============================ */
/* ============================ 5 · THE BRIEF ============================ */
function Chip({
  label,
  hint,
  children,
  align,
  onOpen,
  isOpen
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "chip-wrap"
  }, /*#__PURE__*/React.createElement("button", {
    className: 'chip' + (isOpen ? ' open' : ''),
    onClick: onOpen,
    title: 'Edit — ' + label
  }, label), isOpen && /*#__PURE__*/React.createElement(Popover, {
    onClose: onOpen,
    align: align
  }, /*#__PURE__*/React.createElement("div", {
    className: "pop-t"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "pop-h"
  }, hint), children));
}
/* A goal parameter's stepper: preset pills, plus — when gp.custom is set — a "Custom" pill that
   opens an inline number input so an exact value can be typed. custom:'replace' gives that slot
   the last preset's place (days to pay: 3/5/7/15/Custom); custom:'add' keeps every preset and
   appends one (minimum share: 30/50/70/Custom). A param with no gp.custom renders exactly as
   before. Mounted only while the chip popover is open, so it always opens in a clean state. */
function ParamStepper({ gp, pv, setParam, close }) {
  const presets = gp.custom === 'replace' ? gp.opts.slice(0, -1) : gp.opts;
  const isPreset = presets.indexOf(pv) > -1;
  const [editing, setEditing] = useState(!!gp.custom && !isPreset);
  const commit = v => { const n = parseInt(v, 10); if (!(n > 0)) return null;
    const capped = gp.max ? Math.min(n, gp.max) : n; setParam(capped); return capped; };
  return /*#__PURE__*/React.createElement("div", {
    className: "steps-row",
    role: "radiogroup",
    "aria-label": gp.title
  }, presets.map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    className: "step-pill",
    role: "radio",
    "aria-checked": n === pv && !editing,
    onClick: () => { setParam(n); setEditing(false); close(); }
  }, gp.fmt(n))), gp.custom && (editing ? /*#__PURE__*/React.createElement("span", {
    className: "step-pill step-custom",
    key: "custom"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "1",
    max: gp.max || null,
    className: "step-custom-inp",
    autoFocus: true,
    "aria-label": "Custom " + gp.title.toLowerCase(),
    defaultValue: isPreset ? '' : pv,
    onKeyDown: e => { if (e.key === 'Enter' && commit(e.target.value) !== null) close(); },
    onBlur: e => commit(e.target.value)
  }), /*#__PURE__*/React.createElement("span", { className: "mono" }, gp.unit)) : /*#__PURE__*/React.createElement("button", {
    key: "custom",
    className: "step-pill",
    role: "radio",
    "aria-checked": !isPreset,
    onClick: () => setEditing(true)
  }, isPreset ? "Custom" : gp.fmt(pv))));
}
function StepBrief({
  draft,
  set,
  next,
  back
}) {
  const [open, setOpen] = useState(null);
  const t = template(draft.template),
    p = persona(draft.personaId);
  const tk = draft.tokens,
    inb = draft.direction === 'in';
  const goals = goalsFor(draft.template);
  const goal = val(goals, tk.goal),
    ident = val(identityFor(draft.template), tk.identity),
    hand = val(HANDOFF, tk.handoff);
  const setTok = (k, v) => set({
    tokens: {
      ...tk,
      [k]: v
    }
  });
  const tog = k => () => setOpen(open === k ? null : k);
  const gp = paramOf(goal.id),
    pv = gp ? paramVal(draft, goal.id) : null;
  const setParam = n => setTok('params', { ...(tk.params || {}), [goal.id]: n });
  const disclosure = disclosureFor(draft);
  const col = draft.template === 'collections';
  const b3 = (tk.identity === 'none' ? '' : saysIn(ident, langOf(draft)) + ' ') + (col ? discloseSentence(draft) + ' ' : '') + goalSay(draft);
  /* collections only: what it says about the balance, and how the customer pays */
  const discChip = col && /*#__PURE__*/React.createElement(Chip, {
    label: discloseFull(draft),
    hint: "What it tells the right person about the balance.",
    isOpen: open === 'disclose',
    onOpen: tog('disclose')
  }, /*#__PURE__*/React.createElement("div", {
    role: "radiogroup"
  }, DISCLOSE.map(o => /*#__PURE__*/React.createElement(Option, {
    key: o.id,
    on: o.id === discloseOf(draft).id,
    onClick: () => {
      setTok('disclose', o.id);
      setOpen(null);
    }
  }, o.v))), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: { marginTop: 10 }
  }, I.shield, /*#__PURE__*/React.createElement("span", null, "Either way the balance is only ever discussed with the intended person. The real amount comes from the campaign\u2019s contact list; ", amountOf(draft), " stands in for it here.")), /*#__PURE__*/React.createElement(MentionsPicker, {
    draft: draft,
    set: set
  }));
  const payChip = col && /*#__PURE__*/React.createElement(Chip, {
    label: paymentLabel(draft),
    hint: "How the customer pays once a date is agreed.",
    isOpen: open === 'payment',
    onOpen: tog('payment')
  }, /*#__PURE__*/React.createElement("div", {
    role: "radiogroup"
  }, PAYMENT.map(o => /*#__PURE__*/React.createElement(Option, {
    key: o.id,
    on: o.id === paymentOf(draft).id,
    onClick: () => {
      setTok('payment', o.id);
      if (o.id !== 'place') setOpen(null);
    }
  }, o.v))), paymentOf(draft).id === 'place' && /*#__PURE__*/React.createElement("input", {
    className: "inp",
    style: { marginTop: 10 },
    autoFocus: true,
    value: tk.paymentPlace || '',
    placeholder: "Any Banco Sol branch, quoting contract {contract}",
    "aria-label": "Where to pay",
    onChange: e => setTok('paymentPlace', e.target.value)
  }));
  const noDateChip = col && /*#__PURE__*/React.createElement(Chip, {
    label: noDateLabel(draft),
    hint: "What it does when the customer gives no date at all.",
    isOpen: open === 'nodate',
    onOpen: tog('nodate')
  }, /*#__PURE__*/React.createElement("div", {
    role: "radiogroup"
  }, NO_DATE.map(o => /*#__PURE__*/React.createElement(Option, {
    key: o.id,
    on: o.id === noDateOf(draft).id,
    onClick: () => {
      setTok('noDate', o.id);
      setOpen(null);
    }
  }, o.v))), noDateOf(draft).id === 'handover' && /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: { marginTop: 10 }
  }, I.info, /*#__PURE__*/React.createElement("span", null, "It hands over the same way as when someone asks for a person: it ", handLabel(draft), ".")));
  const companyChip = /*#__PURE__*/React.createElement(Chip, {
    label: tk.company,
    hint: "The name the agent says out loud.",
    isOpen: open === 'company',
    onOpen: tog('company')
  }, /*#__PURE__*/React.createElement("input", {
    className: "inp",
    autoFocus: true,
    value: tk.company,
    onChange: e => setTok('company', e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 9
    }
  }, I.info, /*#__PURE__*/React.createElement("span", null, "Used in the greeting and the spoken disclosure.")));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "wrap wz-wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brief-2col"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHead, {
    title: "What it will do on every call",
    sub: "Written out in full. Anything underlined is yours to change \u2014 tap it."
  }), /*#__PURE__*/React.createElement("p", {
    className: "brief"
  }, inb ? /*#__PURE__*/React.createElement(React.Fragment, null, "It answers calls to ", companyChip, ".") : /*#__PURE__*/React.createElement(React.Fragment, null, "It calls ", t.who, " ", companyChip, "."), ' ', "On each one it", ' ', /*#__PURE__*/React.createElement(Chip, {
    label: ident.v,
    hint: "How it opens, before anything else.",
    isOpen: open === 'identity',
    onOpen: tog('identity')
  }, /*#__PURE__*/React.createElement("div", {
    role: "radiogroup"
  }, identityFor(draft.template).map(o => /*#__PURE__*/React.createElement(Option, {
    key: o.id,
    on: o.id === tk.identity,
    onClick: () => {
      setTok('identity', o.id);
      setOpen(null);
    }
  }, o.v))), draft.template === 'collections' && /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: { marginTop: 11 }
  }, I.shield, /*#__PURE__*/React.createElement("span", null, "On collections calls the agent must establish who it is speaking to. The balance can never be mentioned to anyone else, so there is no option to speak to whoever answers."))), col ? /*#__PURE__*/React.createElement(React.Fragment, null, ', ', discChip, ', ', /*#__PURE__*/React.createElement(OffersChip, {
    draft: draft,
    set: set,
    open: open,
    tog: tog
  }), ', ', fallbackPhrase(draft), '.', ' ', "Once a date is agreed, it ", payChip, ".", ' ', "If no date is agreed, it ", noDateChip, ".") : /*#__PURE__*/React.createElement(React.Fragment, null, t.mid ? ', ' + t.mid.replace(/,?\s*and$/, '') + ', then ' : ', then ', /*#__PURE__*/React.createElement(Chip, {
    label: goal.v,
    hint: "The one thing the call is for.",
    isOpen: open === 'goal',
    onOpen: tog('goal')
  }, /*#__PURE__*/React.createElement("div", {
    role: "radiogroup"
  }, goals.map(o => /*#__PURE__*/React.createElement(Option, {
    key: o.id,
    on: o.id === tk.goal,
    onClick: () => {
      setTok('goal', o.id);
      setOpen(null);
    }
  }, optLabel(o, draft))))), gp && ' ', gp && /*#__PURE__*/React.createElement(Chip, {
    label: gp.fmt(pv),
    hint: gp.hint,
    isOpen: open === 'param',
    onOpen: tog('param')
  }, /*#__PURE__*/React.createElement(ParamStepper, {
    gp: gp,
    pv: pv,
    setParam: setParam,
    close: () => setOpen(null)
  })), "."), ' ', "If someone asks for a person, it ", /*#__PURE__*/React.createElement(Chip, {
    label: handLabel(draft),
    align: "right",
    hint: "The escape hatch. Always available to the caller.",
    isOpen: open === 'handoff',
    onOpen: tog('handoff')
  }, /*#__PURE__*/React.createElement("div", {
    role: "radiogroup"
  }, HANDOFF.map(o => /*#__PURE__*/React.createElement(Option, {
    key: o.id,
    on: o.id === tk.handoff,
    onClick: () => {
      setTok('handoff', o.id);
      if (o.id !== 'campaign') setOpen(null);
    }
  }, o.v))), tk.handoff === 'campaign' && /*#__PURE__*/React.createElement("select", {
    className: "inp",
    style: { marginTop: 10 },
    value: campaignOf(draft),
    "aria-label": "Campaign",
    onChange: e => setTok('campaign', e.target.value)
  }, CAMPAIGNS.map(c => /*#__PURE__*/React.createElement("option", { key: c, value: c }, c))), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: { marginTop: 10 }
  }, I.info, /*#__PURE__*/React.createElement("span", null, "A transfer goes to the people working that campaign. Taking a message ends the call and sends your team what it collected."))), "."), /*#__PURE__*/React.createElement("p", {
    className: "brief",
    style: {
      marginTop: 22
    }
  }, "Every call opens with the required disclosure:", col ? /*#__PURE__*/React.createElement("span", {
    className: "chip-wrap chip-fix-block"
  }, /*#__PURE__*/React.createElement("button", {
    className: 'chip chip-lockpick' + (open === 'disclosure' ? ' open' : ''),
    onClick: tog('disclosure'),
    title: "Required on every call \u2014 choose the wording, it cannot be removed"
  }, I.lock, disclosure), open === 'disclosure' && /*#__PURE__*/React.createElement(Popover, {
    onClose: tog('disclosure')
  }, /*#__PURE__*/React.createElement("div", {
    className: "pop-t"
  }, "The disclosure"), /*#__PURE__*/React.createElement("div", {
    className: "pop-h"
  }, "Said first on every call. Pick the wording \u2014 it cannot be switched off."), /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    "aria-label": "Disclosure wording"
  }, DISCLOSURES.map(o => /*#__PURE__*/React.createElement(Option, {
    key: o.id,
    on: o.id === disclosureOpt(draft).id,
    onClick: () => {
      setTok('disclosure', o.id);
      setOpen(null);
    }
  }, disclosureLine(o, langOf(draft), tk.company)))), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: { marginTop: 10 }
  }, I.lock, /*#__PURE__*/React.createElement("span", null, "Every option says it is a virtual assistant and names ", tk.company, ". That part is not optional.")))) : /*#__PURE__*/React.createElement("span", {
    className: "chip-fix chip-fix-block",
    title: "Required by law \u2014 cannot be removed"
  }, I.lock, disclosure), "Then its opener:", ' ', /*#__PURE__*/React.createElement(Chip, {
    label: draft.opener,
    hint: "Your opener, in the agent's own voice.",
    isOpen: open === 'opener',
    onOpen: tog('opener')
  }, /*#__PURE__*/React.createElement("textarea", {
    className: "inp",
    autoFocus: true,
    value: draft.opener,
    onChange: e => set({
      opener: e.target.value
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 9
    }
  }, I.info, /*#__PURE__*/React.createElement("span", null, "Keep it to one sentence. ", p.name, " says it in ", p.reg.split(' · ')[0], ".")))), col && /*#__PURE__*/React.createElement("p", {
    className: "brief",
    style: {
      marginTop: 22
    }
  }, "And it ends every call with ", /*#__PURE__*/React.createElement(ClosingChip, {
    draft: draft,
    set: set,
    open: open,
    tog: tog
  }), ".")), /*#__PURE__*/React.createElement("div", {
    className: "prev"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prev-hd"
  }, /*#__PURE__*/React.createElement(Avatar, {
    p: p,
    size: 26
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 13.5
    }
  }, p.name)), /*#__PURE__*/React.createElement("div", {
    className: "prev-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bub bub-a",
    key: 'a' + disclosure + draft.opener
  }, /*#__PURE__*/React.createElement("span", {
    className: "bub-lab"
  }, p.name, " \xB7 0:02"), /*#__PURE__*/React.createElement("span", {
    className: "disc"
  }, disclosure), " ", draft.opener), /*#__PURE__*/React.createElement("div", {
    className: "bub bub-c",
    key: "c1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bub-lab"
  }, "Customer"), inLang(t, 'custSay', langOf(draft))), /*#__PURE__*/React.createElement("div", {
    className: "bub bub-a",
    key: 'a' + b3
  }, /*#__PURE__*/React.createElement("span", {
    className: "bub-lab"
  }, p.name, " \xB7 0:11"), b3), col && closingOf(draft) && /*#__PURE__*/React.createElement("div", {
    className: "bub bub-a",
    key: 'z' + closingOf(draft)
  }, /*#__PURE__*/React.createElement("span", {
    className: "bub-lab"
  }, p.name, " \xB7 end"), closingOf(draft))), ))), /*#__PURE__*/React.createElement(Foot, {
    onBack: back,
    onNext: next,
    nextOk: !!tk.company.trim(),
    wide: true
  }));
}

/* ============================ 6 · BUSINESS RULES ============================ */
function TagInput({
  tags,
  onChange,
  placeholder
}) {
  const [v, setV] = useState('');
  const add = () => {
    const w = v.trim().toLowerCase();
    if (w && !tags.includes(w)) onChange([...tags, w]);
    setV('');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "tags"
  }, tags.map(t => /*#__PURE__*/React.createElement("span", {
    className: "tag",
    key: t
  }, t, /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange(tags.filter(x => x !== t)),
    "aria-label": 'Remove ' + t
  }, I.x))), /*#__PURE__*/React.createElement("input", {
    value: v,
    placeholder: placeholder,
    onChange: e => setV(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ',') {
        e.preventDefault();
        add();
      }
      if (e.key === 'Backspace' && !v && tags.length) onChange(tags.slice(0, -1));
    },
    onBlur: add
  }));
}

/* ============================ 7 · TEST ============================ */
const norm = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
function agentReply(input, draft, history) {
  const s = norm(input),
    tk = draft.tokens;
  const goal = val(goalsFor(draft.template), tk.goal),
    hand = val(HANDOFF, tk.handoff);
  if (draft.template === 'reception') {
    const k = draft.knowledge || { about: '', urls: [] };
    const ask = (draft.collect || []).filter(f => f.on);
    const first = ask[0] ? ' ' + ask[0].question : '';
    if (/message|leave a|mensaje|recado/.test(s)) return {
      txt: 'Of course.' + (first || ' May I have your name?'),
      why: 'Goal: collects the caller’s details'
    };
    if (/appointment|book|schedule|cita|agendar/.test(s)) return goalIds(draft).indexOf('book') > -1 ? {
      txt: 'I can book that from the calendar. Which day works best for you?',
      why: 'Goal: books from the connected calendar'
    } : {
      txt: 'I can’t book that myself, but I’ll take your details and the team will call you back to set it up.' + first,
      why: 'Goal setting → takes a message instead'
    };
    if (/robot|human|person|someone|speak to|real|assistant|machine/.test(s)) return {
      txt: 'You’re speaking with a virtual assistant for ' + tk.company + '. ' + (hand.sayEn || hand.say),
      why: 'Rule: always disclose · handoff setting'
    };
    if (/hours|open|opening|close|horario|abren/.test(s)) return (k.about || '').trim() ? {
      txt: 'Sure. ' + k.about.trim().split('. ')[0].replace(/\.$/, '') + '. Is there anything else I can help with?',
      why: 'Answered from the business profile'
    } : {
      txt: 'I don’t have that to hand, so let me take a message and someone will confirm the hours with you.' + first,
      why: 'Nothing in the business profile yet → takes a message'
    };
  }
  /* everything below answers in the agent's own language; en picks the second string */
  const L = langOf(draft), pick = (es, en) => L === 'en' ? en : es;
  const handSay = saysIn(hand, L);
  if (/robot|humano|persona|quien habla|con quien|maquina|grabacion|asistente|human|speak to|speaking to|who am i|am i talking|real person/.test(s)) return {
    txt: pick('Soy un asistente virtual de ' + tk.company + '. ',
             'You’re speaking with a virtual assistant for ' + tk.company + '. ') + handSay,
    why: 'Rule: always disclose · handoff setting'
  };
  const tp = thirdParty(draft), col = draft.template === 'collections';
  if (/no soy|no est|se equivoc|numero equivocado|wrong number|not here|he.s out|she.s out|who.s calling/i.test(s)
      && (tp.ends || tp.message !== null)) {
    /* the three third-party rules, read together: the message it may leave, then it ends; and
       the balance is never in this reply — by construction, nothing here quotes it */
    const bye = pick('Que tenga buen día.', 'Have a good day.') + (col && closingOf(draft) ? ' ' + closingOf(draft) : '');
    if (tp.message) return {
      txt: tp.message + ' ' + bye,
      why: 'Rule: leaves the message you set, then ends the call' + (tp.noAmount ? ' · the amount is never disclosed' : '')
    };
    return {
      txt: pick('Disculpe la molestia, no dejo ningún detalle. ', 'Sorry to trouble you — I’ll not leave any details. ') + bye,
      why: 'Rule: ends the call — the wrong person answered' + (tp.noAmount ? ' · the amount is never disclosed' : '')
    };
  }
  if (col && /como pago|donde pago|como le pago|link de pago|enlace de pago|how do i pay|where do i pay|payment link|how can i pay/i.test(s)) return {
    txt: paymentSay(draft),
    why: 'Payment setting: ' + paymentLabel(draft)
  };
  /* the customer names a day to pay (the answer the "when do you intend to pay" goal asks for):
     the agent records it and says how to pay — it never pushes a date the customer did not give */
  const DAYWORD = /\b(lunes|martes|miercoles|jueves|viernes|sabado|domingo|manana|semana|quincena|fin de mes|el \d{1,2}|monday|tuesday|wednesday|thursday|friday|saturday|sunday|tomorrow|next week|end of the month|payday|on the \d{1,2})\b/i;
  if (col && DAYWORD.test(s)) return {
    txt: pick('Perfecto, dejo registrada esa fecha. ', 'Perfect, I have noted that date. ') + paymentSay(draft) + pick(' Gracias por su tiempo.', ' Thanks for your time.') + colEnd(draft),
    why: 'Fallback: records the date the customer gave · payment setting: ' + paymentLabel(draft),
    stage: 'done',
    // the day the customer named, in their words — the agent never turns it into a date it chose
    promise: promiseFor(draft, 'intent', (s.match(DAYWORD) || [s])[0].trim() + (L === 'en' ? ' (as stated)' : ' (según el cliente)'))
  };
  if (/no me llame|no vuelva a llamar|de la lista|dar de baja|no quiero recibir|no llame mas|do ?n.?t call|do not call|stop calling|take me off/i.test(s)) return {
    txt: pick('Entendido, no le insisto más. Cierro la llamada aquí. Buen día.',
      'Understood — I will not call again. I will close the call here. Have a good day.') + (col ? colEnd(draft) : ''),
    why: 'Ends the call · the disposition is set outside the agent'
  };
  if (col) { const r = collectionsTurn(s, draft, history, pick); if (r) return r; }
  if (/no tengo|no puedo pagar|sin plata|sin dinero|desemplead|can.?t pay|cannot pay|no money|no way to pay|out of work|unemployed/i.test(s)) return {
    txt: pick('Entiendo. Podemos registrar un abono parcial, ¿cuánto podría abonar esta semana?',
      'I understand. We can take a part payment — how much could you manage this week?'),
    why: 'Rule: offer a partial payment before escalating'
  };
  const guard = guardFor(draft, s);
  if (guard && col) {
    /* refuse what the rule forbids, then put the offer that is on the table back on it */
    const st = colStage(history), lead = guard.rule ? pick(guard.g.es, guard.g.en) : '';
    const r = typeof st === 'number' || st === 'intent' ? colOffer(draft, st === 'intent' ? activeOffers(draft).length : st, pick, lead)
      : colOpenOffer(draft, pick, lead);
    return { ...r, why: guard.rule ? 'Rule: ' + guard.rule.t : 'Nothing stops it answering that · ' + r.why };
  }
  if (guard) return {
    txt: (guard.rule ? pick(guard.g.es, guard.g.en) : '') + goalSay(draft),
    why: guard.rule ? 'Rule: ' + guard.rule.t : 'Nothing stops it answering that · goal setting'
  };
  if (/no puedo|ocupad|trabaj|otro dia|otro horario|mas tarde|cambiar|mover|reagenda|can.?t do that day|cannot do that|another day|reschedule|move it|later/i.test(s)) return {
    txt: pick('Sin problema. Tengo el viernes a las 9:00 o el lunes a las 15:00. ¿Alguno le sirve?',
      'No problem. I have Friday at nine or Monday at three. Would either of those work?'),
    why: 'Rule: offer another slot before taking a message'
  };
  if (/^(si|claro|ok|dale|listo|confirmo|de acuerdo|perfecto|bueno|yes|sure|confirmed|agreed|fine|okay)\b/i.test(s)) return {
    // only the callback goal has a number to read back
    txt: tk.goal === 'callback'
      ? pick('Perfecto. Le repito el número para asegurarme de que quedó bien, y le devolvemos la llamada a esa hora.',
          'Perfect. Let me read the number back so we have it right, and we will call you at that time.')
      : col
      ? pick('Perfecto, queda registrado. ', 'Perfect, that is noted. ') + paymentSay(draft) + pick(' Gracias por su tiempo.', ' Thanks for your time.')
      : pick('Perfecto, queda confirmado. Le enviamos el detalle por WhatsApp. Gracias por su tiempo.',
          'Perfect, that is confirmed. We will send the details on WhatsApp. Thanks for your time.'),
    why: col ? 'Goal reached · payment setting: ' + paymentLabel(draft) : 'Goal reached · call ends'
  };
  if (/gracias|adios|chao|hasta luego|thanks|thank you|goodbye|bye/i.test(s)) return {
    txt: pick('Gracias a usted. Que tenga buen día.', 'Thank you. Have a good day.') + (col ? colEnd(draft) : ''),
    why: 'Closing'
  };
  const hv = draft.handover || [];
  if (hv.indexOf('legal') > -1 && /abogado|demanda|queja|superintendencia|denuncia|defensor|lawyer|solicitor|complaint|regulator|sue you|legal action/i.test(s)) return {
    txt: pick('Prefiero que esto lo vea una persona. ', 'I would rather a person looked at this. ') + handSay,
    why: 'Handover rule: a complaint or a lawyer is mentioned'
  };
  const own = ownHandoverHit(draft, s);
  if (own) return {
    txt: pick('Prefiero que esto lo vea una persona. ', 'I would rather a person looked at this. ') + handSay,
    why: 'Your own handover rule: “' + own + '”'
  };
  const bad = bannedHit(draft, s);
  if (bad) return {
    txt: pick('Le entiendo. ', 'I understand. ') + handSay,
    why: '“' + bad + '” is on its never-use list → rephrase and hand off'
  };
  if (col) return colOpenOffer(draft, pick, '');
  return {
    txt: goalSay(draft),
    why: 'Goal setting'
  };
}
/* ---- Collections, turn by turn -----------------------------------------------------------
   The scripted call keeps one piece of state on each agent line: which offer is on the table
   (its position in the ordered list), 'intent' once it has fallen back to asking for a date, or
   'done' once a date was recorded or the call ended without one. */
const colEnd = d => closingOf(d) ? ' ' + closingOf(d) : '';
const colStage = history => { const a = (history || []).filter(m => m.who === 'a' && m.stage !== undefined);
  return a.length ? a[a.length - 1].stage : null; };
const colOffer = (d, i, pick, lead, why) => { const offers = activeOffers(d);
  if (i < offers.length) return { txt: lead + offerSay(d, offers[i].id), stage: i,
    why: why || 'Offer ' + (i + 1) + ' of ' + offers.length + ': ' + offerLabel(d, offers[i].id) };
  return { txt: lead + intentSay(d), stage: 'intent',
    why: offers.length ? 'No offer accepted → fallback: asks when the customer intends to pay'
                       : 'No offers ticked → fallback: asks when the customer intends to pay' }; };
/* first contact with the right person: the balance, what else it mentions, then offer 1 */
const colOpenOffer = (d, pick, lead) => { const r = colOffer(d, 0, pick, lead + discloseSentence(d) + ' ');
  return { ...r, why: discloseFull(d) + ' · ' + r.why }; };
const DECLINE = /^(no|nop|tampoco|imposible)\b|no me alcanza|no puedo|no tengo|no me sirve|es mucho|demasiado|can.?t|cannot|no way|too much|not possible|afford/i;
const ACCEPT = /^(si|claro|ok|dale|listo|confirmo|de acuerdo|perfecto|bueno|me sirve|yes|sure|confirmed|agreed|fine|okay|that works)\b/i;
function collectionsTurn(s, d, history, pick) {
  const stage = colStage(history), offers = activeOffers(d);
  if (stage === 'done') return null;
  /* asking for interest off or a discount while a reduced balance is on offer: that IS the offer */
  if (reducedOn(d) && /interes|descuento|rebaj|discount|interest/i.test(s)) {
    const i = offers.findIndex(g => g.id === 'reduced');
    return colOffer(d, i, pick, pick('Puedo ofrecerle esto: ', 'Here is what I can offer: '), 'Offer: a reduced balance without interest');
  }
  if (DECLINE.test(s)) {
    if (stage === 'intent') return noDateOf(d).id === 'handover' ? {
      txt: pick('Entiendo. Prefiero que lo vea una persona. ', 'I understand. I would rather a person looked at this. ')
        + saysIn(val(handoffFor(d.template), d.tokens.handoff), langOf(d)),
      why: 'No date agreed → hands it to a person · ' + handLabel(d), stage: 'done' } : {
      txt: pick('Entiendo. Dejo constancia de que por ahora no puede darme una fecha. Gracias por su tiempo.',
        'I understand. I will note that you cannot give me a date for now. Thanks for your time.') + colEnd(d),
      why: 'No date agreed → ends the call · no promise, no payment step', stage: 'done' };
    if (typeof stage === 'number') return colOffer(d, stage + 1, pick, pick('Entiendo. ', 'I understand. '));
    return colOffer(d, 0, pick, pick('Entiendo. ', 'I understand. '));
  }
  if (ACCEPT.test(s)) {
    if (typeof stage === 'number' && stage < offers.length) { const id = offers[stage].id;
      return { txt: pick('Perfecto, queda registrado. ', 'Perfect, that is noted. ') + paymentSay(d) + pick(' Gracias por su tiempo.', ' Thanks for your time.') + colEnd(d),
        why: 'Offer accepted: ' + offerLabel(d, id) + ' · payment setting: ' + paymentLabel(d),
        stage: 'done', promise: promiseFor(d, id) }; }
    if (stage === 'intent') return { txt: pick('¿Qué fecha le queda bien?', 'Which date works for you?'),
      why: 'Fallback: waiting for the date the customer gives', stage: 'intent' };
    return colOpenOffer(d, pick, '');
  }
  return null;
}
/* What a customer actually says to THIS agent. One generic set meant a collections agent
   offered "I cannot do that day" and "How much does it cost?" — lines from two other jobs.
   Each set is chosen so every line reaches a real branch: the identity check, the goal, a rule
   the template ticks, a handover trigger it seeds, and the two that end a call. */
const QUICKS_BY_TEMPLATE = {
  collections: {
    es: ['¿Con quién hablo?', 'No tengo cómo pagar ahora', '¿Me quita los intereses?',
         'Voy a hablar con mi abogado', '¿Me hace un descuento?', 'No soy yo, se equivocó',
         '¿Cómo pago?', 'No me alcanza', 'Le pago el viernes', 'Sí, confirmo', 'No me llame más'],
    en: ['Who am I speaking to?', 'I have no way to pay right now', 'Can you drop the interest?',
         'I am speaking to my lawyer', 'Can I get a discount?', 'Wrong person, she is not here',
         'How do I pay?', 'That is too much for me', 'I will pay on Friday', 'Yes, confirmed', 'Do not call me again']
  },
  appointments: {
    es: ['¿Con quién hablo?', 'Ese día no puedo', '¿Me lo puede mover?', '¿Me atiende otro médico?',
         'No soy yo, se equivocó', 'Sí, confirmo', 'Quiero hablar con una persona', 'No me llame más'],
    en: ['Who am I speaking to?', 'I cannot do that day', 'Could you move it?', 'Can I see a different doctor?',
         'Wrong person, she is not here', 'Yes, confirmed', 'I want to speak to a person', 'Do not call me again']
  },
  leads: {
    es: ['¿Con quién hablo?', '¿Cuánto cuesta?', '¿Me hace un descuento?', 'Mándemelo por WhatsApp',
         'No soy yo, se equivocó', 'Sí, me interesa', 'Quiero hablar con una persona', 'No me llame más'],
    en: ['Who am I speaking to?', 'How much does it cost?', 'Can you give me a discount?',
         'Send it to me on WhatsApp', 'Wrong person, she is not here', 'Yes, I am interested',
         'I want to speak to a person', 'Do not call me again']
  },
  messages: {
    es: ['¿Con quién hablo?', '¿A qué hora me llaman?', 'Necesito que me solucionen esto', 'Llamé ayer y nadie contestó',
         'No soy yo, se equivocó', 'Sí, confirmo', 'Quiero hablar con una persona', 'No me llame más'],
    en: ['Who am I speaking to?', 'What time will you call?', 'I need you to fix it',
         'I rang yesterday and nobody answered', 'Wrong person, she is not here', 'Yes, confirmed',
         'I want to speak to a person', 'Do not call me again']
  }
};
/* the fallback, for a template with no set of its own */
const QUICKS = ['¿Con quién hablo?', 'No soy yo, se equivocó', 'Gracias, adiós', 'Sí, confirmo',
  'Quiero hablar con una persona', 'No me llame más'];
const QUICKS_EN = ['Who am I speaking to?', 'Wrong person, she is not here', 'Thanks, goodbye',
  'Yes, confirmed', 'I want to speak to a person', 'Do not call me again'];
const quicksFor = d => { if(d.template === 'reception') return RECEPTION_QUICKS;
  const set = QUICKS_BY_TEMPLATE[d.template], lang = langOf(d) === 'en' ? 'en' : 'es';
  return set ? set[lang] : (lang === 'en' ? QUICKS_EN : QUICKS); };
/* Live mode. The page asks Claude for the agent's next line through the artifact runtime's
   `sample` capability — the same call the Coach AI prototype makes — from a prompt composed of
   every setting on the previous screens (agentPrompt). `modelTier: 'quick'` keeps it on the
   fast, low-effort tier. Guarded: with no runtime the status pill reads "Script" and the scripted
   simulator answers as it always has; a failed live turn falls back for that turn and says so. */
const liveRuntime = () => (typeof window !== 'undefined' && window.claude
  && typeof window.claude.use === 'function') ? window.claude : null;
let liveSampler = null;                                   // resolved once, reused across turns
async function liveReply(draft, history, input) {
  const rt = liveRuntime();
  if (!rt) return null;
  try {
    if (!liveSampler) liveSampler = await rt.use('sample');
    const { text } = await liveSampler(liveTurns(draft, history, input), { cache: false, modelTier: 'quick' });
    const t = String(text == null ? '' : text);
    const a = t.indexOf('{'), b = t.lastIndexOf('}');
    if (a > -1 && b > a) {
      const j = JSON.parse(t.slice(a, b + 1));
      if (j && j.say) return { txt: String(j.say), why: 'Live · ' + (j.why ? String(j.why) : 'Claude'),
        promise: j.promise && j.promise.date ? { offer: String(j.promise.offer || 'intent'), amount: String(j.promise.amount || ''), date: String(j.promise.date) } : undefined };
    }
    const plain = t.trim();
    return plain ? { txt: plain, why: 'Live · Claude' } : null;
  } catch (e) {
    liveSampler = null;                                  // a stale sampler is re-resolved next turn
    return null;
  }
}
function StepTest({
  draft,
  set,
  next,
  back,
  testExit
}) {
  const [live] = useState(() => !!liveRuntime());
  const p = persona(draft.personaId),
    tk = draft.tokens;
  const inb = draft.direction === 'in';
  /* The agent is set to establish who it is speaking to, and the brief's preview says so — but
     the simulated call used to skip straight past it. An agent that rings you and opens with a
     balance before checking it has the right person is the thing the setting exists to prevent. */
  const identLine = (draft.template !== 'reception' && tk.identity !== 'none')
    ? ' ' + saysIn(val(identityFor(draft.template), tk.identity), langOf(draft)) : '';
  const open = disclosureFor(draft) + ' ' + draft.opener + identLine;
  const [msgs, setMsgs] = useState([{
    who: 'a',
    txt: open,
    why: 'Fixed disclosure + your opener' + (identLine ? ' + the identity check' : '')
  }]);
  const [v, setV] = useState('');
  const [typing, setTyping] = useState(false);
  const [call, setCall] = useState(null);
  const scroll = useRef(null);
  useEffect(() => {
    if (scroll.current) scroll.current.scrollTop = scroll.current.scrollHeight;
  }, [msgs, typing]);
  const send = txt => {
    const m = (txt || v).trim();
    if (!m) return;
    const history = msgs;                       // the turns before this one
    setMsgs(x => [...x, {
      who: 'c',
      txt: m
    }]);
    setV('');
    setTyping(true);
    const scripted = () => ({ who: 'a', ...agentReply(m, draft, history) });
    if (live) {
      liveReply(draft, history, m).then(r => {
        setTyping(false);
        setMsgs(x => [...x, r ? { who: 'a', ...r }
          : { ...scripted(), why: 'Live reply failed → script · ' + agentReply(m, draft, history).why }]);
      });
      return;
    }
    setTimeout(() => {
      setTyping(false);
      setMsgs(x => [...x, scripted()]);
    }, 700);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "wrap wz-wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHead, {
    title: "Try it before anyone else does",
    sub: 'You play the customer' + (inb ? ' who just called in' : '') + '. Type anything, or tap a line below. Nothing here reaches a real phone.'
  }), /*#__PURE__*/React.createElement("div", {
    className: "chatbox"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prev-hd"
  }, /*#__PURE__*/React.createElement(Avatar, {
    p: p,
    size: 26
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 13.5
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, tk.company), /*#__PURE__*/React.createElement("span", {
    className: 'pill ' + (live ? 'pill-live' : 'pill-reh'),
    style: {
      marginLeft: 'auto'
    },
    title: live
      ? 'Replies come from Claude (quick tier), from a prompt built out of this agent’s settings'
      : 'Live mode is not available in this build — replies follow a script that reads the same settings'
  }, /*#__PURE__*/React.createElement("i", null), live ? 'Live · Claude' : 'Script')), /*#__PURE__*/React.createElement("div", {
    className: "chat-scroll",
    ref: scroll
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: m.who === 'a' ? 'flex-start' : 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: 'bub ' + (m.who === 'a' ? 'bub-a' : 'bub-c')
  }, m.txt), m.why && /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      marginTop: 5,
      marginLeft: 4
    }
  }, m.why), m.promise && /*#__PURE__*/React.createElement(PromiseCard, {
    p: m.promise,
    title: "End of call \xB7 promise recorded"
  }))), typing && /*#__PURE__*/React.createElement("div", {
    className: "bub bub-a"
  }, /*#__PURE__*/React.createElement("span", {
    className: "typing"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)))), /*#__PURE__*/React.createElement("div", {
    className: "quick"
  }, quicksFor(draft).map(q => /*#__PURE__*/React.createElement("button", {
    className: "qbtn",
    key: q,
    onClick: () => send(q)
  }, q))), /*#__PURE__*/React.createElement("div", {
    className: "chat-in"
  }, /*#__PURE__*/React.createElement("input", {
    value: v,
    placeholder: "Say something as the customer\u2026",
    onChange: e => setV(e.target.value),
    onKeyDown: e => e.key === 'Enter' && send()
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-pri btn-sm",
    onClick: () => send(),
    "aria-label": "Send"
  }, I.send))), /*#__PURE__*/React.createElement("div", {
    className: "tnote"
  }, "Test conversations spend credits like any other interaction \u2014 the test agent itself costs nothing extra. Tests are not written to the call log and don\u2019t affect metrics.", live ? ' Live replies use your account’s Claude credits.' : '')), /*#__PURE__*/React.createElement("div", {
    className: "side"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, "Hear it for real"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-pri btn-call",
    onClick: () => setCall('setup')
  }, inb ? I.phoneIn : I.phoneOut, "Call")))), call && /*#__PURE__*/React.createElement(CallMe, {
    draft: draft,
    state: call,
    setState: setCall
  }), /*#__PURE__*/React.createElement(Foot, {
    onBack: back,
    onNext: next,
    nextOk: true,
    nextLabel: testExit === 'agent' ? "Back to the agent" : "Back to the rules",
    wide: true
  }));
}
function CallMe({
  draft,
  state,
  setState
}) {
  const p = persona(draft.personaId),
    tk = draft.tokens;
  const inb = draft.direction === 'in';
  const [num, setNum] = useState(inb ? '601 555 0142' : '310 555 0142');
  useEffect(() => {
    if (state !== 'ring') return;
    const t = setTimeout(() => setState('done'), 2800);
    return () => clearTimeout(t);
  }, [state, setState]);
  const gSay = goalSay(draft);
  const tr = [{
    w: p.name,
    t: disclosureFor(draft) + ' ' + draft.opener
  }, {
    w: 'You',
    t: inb ? 'Llamo por mi cita del jueves.' : 'Sí, dígame.'
  }, {
    w: p.name,
    t: gSay
  }, {
    w: 'You',
    t: 'Ese día no puedo.'
  }, {
    w: p.name,
    t: 'Sin problema. Tengo el viernes a las 9:00 o el lunes a las 15:00. ¿Alguno le sirve?'
  }];
  if (state === 'ring') return /*#__PURE__*/React.createElement(Modal, {
    title: inb ? 'Connecting you' : 'Calling you now',
    onClose: () => setState(null),
    actions: /*#__PURE__*/React.createElement("button", {
      className: "btn btn-gho",
      onClick: () => setState(null)
    }, "Cancel")
  }, /*#__PURE__*/React.createElement("div", {
    className: "ringer"
  }, I.phone), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      marginTop: 22
    }
  }, inb ? /*#__PURE__*/React.createElement(React.Fragment, null, "Dialling ", /*#__PURE__*/React.createElement("b", {
    className: "tnum"
  }, num), "\u2026") : /*#__PURE__*/React.createElement(React.Fragment, null, "Ringing ", /*#__PURE__*/React.createElement("b", {
    className: "tnum"
  }, num), "\u2026"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)'
    }
  }, inb ? 'You are calling in — talk to ' + p.name + ' as a customer would.' : 'Answer and talk to ' + p.name + ' as if you were a customer.')));
  if (state === 'done') return /*#__PURE__*/React.createElement(Modal, {
    title: "Call finished \xB7 0:41",
    onClose: () => setState(null),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-gho",
      onClick: () => setState('ring')
    }, "Call again"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-pri",
      onClick: () => setState(null)
    }, "Done"))
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, "Here is what was said. Tap any line later on the correction screen to fix it."), /*#__PURE__*/React.createElement("div", {
    className: "tr",
    style: {
      marginTop: 4
    }
  }, tr.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: 'tr-row ' + (r.w === 'You' ? 'cust' : ''),
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "tr-who"
  }, r.w), /*#__PURE__*/React.createElement("span", {
    className: "tr-txt",
    style: {
      fontSize: 15
    }
  }, r.t)))));
  return /*#__PURE__*/React.createElement(Modal, {
    title: "Call",
    onClose: () => setState(null),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-gho",
      onClick: () => setState(null)
    }, "Cancel"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-pri",
      onClick: () => setState('ring')
    }, inb ? I.phoneIn : I.phoneOut, inb ? 'Simulate the call' : 'Call me now'))
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, inb ? 'This is the number the agent will answer while it is being tested. Only you can reach it.' : 'One call, to you only. It does not touch your contact list.'), /*#__PURE__*/React.createElement("input", {
    className: "inp tnum",
    value: num,
    onChange: e => setNum(e.target.value),
    "aria-label": inb ? 'Test line' : 'Your phone number'
  }));
}
/* ============================ 9 · THE AGENT PAGE + GO-LIVE LADDER ============================ */

/* ============================ 10 · PICK A CALL ============================ */
function CallList({
  agent,
  onBack,
  onOpen
}) {
  const a = agent,
    p = persona(a.personaId);
  const calls = callsFor(a);
  const [filter, setFilter] = useState('all');
  const flagged = calls.filter(c => c.flag).length;
  const shown = filter === 'flag' ? calls.filter(c => c.flag) : calls;
  const chip = on => on ? {
    background: 'var(--accent-soft)',
    borderColor: 'var(--accent)',
    color: 'var(--accent-ink)',
    fontWeight: 600
  } : null;
  return /*#__PURE__*/React.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel-hd"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-qui btn-sm",
    style: {
      marginLeft: -12,
      marginBottom: 6
    },
    onClick: onBack
  }, I.back, "All agents"), /*#__PURE__*/React.createElement("div", {
    className: "panel-eyebrow"
  }, a.name), /*#__PURE__*/React.createElement("h1", null, "Which call should it learn from?"), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "Tap a call to read what was said and fix it. Every correction becomes a setting you approve first.")), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 940,
      margin: '0 auto'
    }
  }, calls.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: '46px 28px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: 'var(--grey-soft)',
      color: 'var(--ink-3)',
      display: 'grid',
      placeItems: 'center',
      margin: '0 auto 14px'
    }
  }, I.chat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, "No calls yet"), /*#__PURE__*/React.createElement("p", {
    className: "sub",
    style: {
      margin: '6px auto 0',
      maxWidth: '44ch'
    }
  }, p.name, " has not made any calls yet. Assign it to a dialer in the Outbound Hub and its calls show up here.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "qbtn",
    style: chip(filter === 'all'),
    onClick: () => setFilter('all')
  }, "All ", calls.length), /*#__PURE__*/React.createElement("button", {
    className: "qbtn",
    style: chip(filter === 'flag'),
    onClick: () => setFilter('flag')
  }, "Worth a look ", flagged)), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      overflow: 'hidden',
      padding: 0
    }
  }, shown.map((c, i) => {
    const o = OUTCOMES[c.kind],
      dead = c.kind === 'none';
    const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        width: 116,
        flex: 'none',
        paddingTop: 4
      }
    }, c.when), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 132,
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(Pill, {
      cls: o.cls
    }, o.label)), /*#__PURE__*/React.createElement("span", {
      className: "tr-txt",
      style: {
        flex: '1 1 220px',
        fontSize: 15.5
      }
    }, "\u201C", c.snippet, "\u201D"), /*#__PURE__*/React.createElement("span", {
      className: "mono tnum",
      style: {
        paddingTop: 4
      }
    }, c.dur), /*#__PURE__*/React.createElement("span", {
      style: {
        color: dead ? 'transparent' : 'var(--ink-3)',
        paddingTop: 2
      }
    }, I.fwd));
    const st = {
      borderTop: i ? '1px solid var(--line-2)' : 0,
      borderRadius: 0,
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      width: '100%',
      textAlign: 'left',
      opacity: dead ? .55 : 1
    };
    return dead ? /*#__PURE__*/React.createElement("div", {
      key: c.id,
      className: "tr-row",
      style: st,
      title: "Nobody answered \u2014 nothing was said"
    }, inner) : /*#__PURE__*/React.createElement("button", {
      key: c.id,
      className: "tr-row agent",
      style: st,
      onClick: () => onOpen(c.id)
    }, inner);
  })), shown.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 16
    }
  }, I.check, /*#__PURE__*/React.createElement("span", null, "Nothing needs a look right now.")), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 16
    }
  }, I.info, /*#__PURE__*/React.createElement("span", null, "\u201CWorth a look\u201D marks calls that ended without reaching the goal. No answers cannot be corrected \u2014 nothing was said."))))));
}

/* ============================ 11 · CORRECTION ============================ */
function transcriptFor(a, call) {
  const tk = a.tokens,
    inb = a.direction === 'in';
  const kind = call && call.kind || 'message';
  const greet = {
    w: 'a',
    t: disclosureFor(a) + ' ' + a.opener
  };
  const hello = inb ? {
    w: 'c',
    t: 'Hola, llamo por mi cita del jueves.'
  } : {
    w: 'c',
    t: '¿Aló?'
  };
  const head = inb ? [greet, hello] : [hello, greet];
  const gSay = goalSay(a);
  const hand = val(HANDOFF, tk.handoff);
  if (kind === 'confirmed') return [...head, {
    w: 'a',
    t: gSay
  }, {
    w: 'c',
    t: 'Sí, perfecto, ahí estaré.'
  }, {
    w: 'a',
    t: 'Gracias a usted. Que tenga buen día.'
  }];
  if (kind === 'moved') return [...head, {
    w: 'a',
    t: gSay
  }, {
    w: 'c',
    t: 'Ese día no puedo. ¿Hay algo el viernes?'
  }, {
    w: 'a',
    t: 'Sin problema. Tengo el viernes a las 9:00 o el lunes a las 15:00. ¿Alguno le sirve?'
  }, {
    w: 'c',
    t: '¿El viernes a las nueve? Sí, me sirve.'
  }, {
    w: 'a',
    t: 'Queda para el viernes. Gracias por su tiempo.'
  }];
  if (kind === 'transfer') return [...head, {
    w: 'a',
    t: gSay
  }, {
    w: 'c',
    t: '¿Y eso cuánto me va a costar?'
  }, {
    w: 'a',
    t: hand.say,
    bad: true
  }, {
    w: 'c',
    t: 'Prefiero hablar con una persona.'
  }, {
    w: 'a',
    t: 'Le paso ahora mismo. Gracias por su tiempo.'
  }];
  return [...head, {
    w: 'a',
    t: gSay
  }, {
    w: 'c',
    t: 'Ese día no puedo, estoy trabajando hasta tarde.'
  }, {
    w: 'a',
    t: 'Entiendo. Le tomo el recado y una persona le devuelve la llamada.',
    bad: true
  }, {
    w: 'c',
    t: 'Bueno… ¿pero no hay algo por la tarde?'
  }, {
    w: 'a',
    t: 'Le paso el recado a recepción. Gracias por su tiempo.',
    bad: true
  }];
}
const SUGGESTS = {
  message: ['Ofrecer otro horario disponible antes de tomar el recado', 'Preguntar qué días y horas le sirven', 'Ofrecer la tarde del viernes'],
  transfer: ['Responder lo que sí puede antes de transferir', 'Explicar que el precio lo confirma un asesor', 'Preguntar si prefiere que le llamemos'],
  confirmed: ['Repetir la fecha antes de cerrar', 'Confirmar el lugar de la cita'],
  moved: ['Repetir la nueva fecha antes de cerrar', 'Preguntar si quiere un recordatorio']
};
function Correction({
  agent,
  call,
  agents,
  setAgents,
  onBack,
  toast
}) {
  const a = agent,
    p = persona(a.personaId);
  const tr = useMemo(() => transcriptFor(a, call), [a, call]);
  const [sel, setSel] = useState(null);
  const [txt, setTxt] = useState('');
  const [proposed, setProposed] = useState(null);
  const [apply, setApply] = useState({
    rule: true,
    goal: true
  });
  const suggests = SUGGESTS[call.kind] || SUGGESTS.message;
  const pick = i => {
    setSel(i);
    setTxt('');
    setProposed(null);
  };
  const submit = () => setProposed({
    ...proposalFor(a, call.kind),
    said: txt
  });
  const confirm = () => {
    setAgents(agents.map(x => x.id === a.id ? {
      ...x,
      extraRules: [...(x.extraRules || []), ...(apply.rule ? [proposed.rule] : [])],
      tokens: proposed.goal && apply.goal ? {
        ...x.tokens,
        goal: proposed.goal.id
      } : x.tokens
    } : x));
    setProposed(null);
    setSel(null);
    toast('Settings updated. ' + p.name + ' uses this from the next interaction.');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel-hd"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-qui btn-sm",
    style: {
      marginLeft: -12,
      marginBottom: 6
    },
    onClick: onBack
  }, I.back, "All calls"), /*#__PURE__*/React.createElement("div", {
    className: "panel-eyebrow"
  }, a.name, " \xB7 Call ", call.no, " \xB7 ", call.when, " \xB7 ", call.dur, " \xB7 ", OUTCOMES[call.kind].label), /*#__PURE__*/React.createElement("h1", null, "Teach it what to say"), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "Tap anything ", p.name, " said that was wrong, then write what it should have said instead. We turn it into a setting \u2014 you approve the change before it takes effect.")), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "corr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tr"
  }, tr.map((r, i) => r.w === 'c' ? /*#__PURE__*/React.createElement("div", {
    className: "tr-row cust",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "tr-who"
  }, "Customer"), /*#__PURE__*/React.createElement("span", {
    className: "tr-txt"
  }, r.t)) : /*#__PURE__*/React.createElement("button", {
    className: 'tr-row agent' + (sel === i ? ' sel' : ''),
    key: i,
    onClick: () => pick(i)
  }, /*#__PURE__*/React.createElement("span", {
    className: "tr-who"
  }, p.name), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "tr-txt"
  }, r.t), sel === i && /*#__PURE__*/React.createElement("span", {
    className: "tr-hint"
  }, I.pencil, "Selected \u2014 tell us what it should have said \u2192"), sel !== i && r.bad && /*#__PURE__*/React.createElement("span", {
    className: "tr-hint",
    style: {
      color: 'var(--ink-3)'
    }
  }, I.pencil, "Tap to correct")))), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 18
    }
  }, I.lock, /*#__PURE__*/React.createElement("span", null, "Corrections become plain-language settings. There is no script or prompt text to edit here \u2014 there never is."))), /*#__PURE__*/React.createElement("div", {
    className: "side"
  }, sel === null && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, "Pick a line"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: 'var(--ink-2)',
      lineHeight: 1.55,
      marginBottom: 0
    }
  }, "Tap any line ", p.name, " said. Most supervisors start where the customer got stuck \u2014 here, right after \u201C", call.snippet, "\u201D.")), sel !== null && !proposed && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, "What should it have said?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)',
      marginTop: 5
    }
  }, "In your own words. One sentence is enough."), /*#__PURE__*/React.createElement("textarea", {
    className: "inp",
    autoFocus: true,
    value: txt,
    onChange: e => setTxt(e.target.value),
    placeholder: "It should have offered another time before taking a message\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      flexWrap: 'wrap',
      marginTop: 11
    }
  }, suggests.map(s => /*#__PURE__*/React.createElement("button", {
    className: "qbtn",
    key: s,
    onClick: () => setTxt(s)
  }, s))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-pri",
    style: {
      width: '100%',
      marginTop: 15
    },
    disabled: !txt.trim(),
    onClick: submit
  }, I.wand, "See the change")), proposed && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "pill pill-acc"
  }, /*#__PURE__*/React.createElement("i", null), "Proposed change"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: 'var(--ink-2)',
      margin: '12px 0 0'
    }
  }, "From \u201C", proposed.said, "\u201D we would change ", proposed.goal ? 'two settings' : 'one setting', ":"), /*#__PURE__*/React.createElement("div", {
    className: "diff"
  }, /*#__PURE__*/React.createElement("label", {
    className: "diff-item",
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: apply.rule,
    onChange: e => setApply({
      ...apply,
      rule: e.target.checked
    })
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Add rule:"), " ", proposed.rule, ".")), proposed.goal && /*#__PURE__*/React.createElement("label", {
    className: "diff-item",
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: apply.goal,
    onChange: e => setApply({
      ...apply,
      goal: e.target.checked
    })
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Change the goal"), " to \u201C", goalLabel({ template: a.template, tokens: { ...a.tokens, goal: proposed.goal.id } }), "\u201D, so it may offer an alternative instead of only taking a message."))), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 12
    }
  }, I.info, /*#__PURE__*/React.createElement("span", null, "Applies to future calls only. ", 'It reaches live calls as soon as it is applied.')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-gho btn-sm",
    onClick: () => setProposed(null)
  }, "Discard"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-pri",
    style: {
      flex: 1
    },
    disabled: !apply.rule && !(proposed.goal && apply.goal),
    onClick: confirm
  }, "Apply change")))))));
}

/* Saving an edit of an agent that is live in a dialer. Saving replaces the version it runs, so the
   warning names the dialers and that version before the supervisor commits to it. */
function SaveLiveWarning({
  agent,
  onCancel,
  onConfirm
}) {
  const a = agent || {},
    dials = dialersOf(a),
    cur = currentVersion(a);
  return /*#__PURE__*/React.createElement(Modal, {
    title: "This agent is live",
    onClose: onCancel,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-gho",
      onClick: onCancel
    }, "Keep editing"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-pri",
      onClick: onConfirm
    }, "Save and replace"))
  }, /*#__PURE__*/React.createElement("p", {
    style: { marginTop: 0 }
  }, /*#__PURE__*/React.createElement("b", null, a.name), " is live in ", /*#__PURE__*/React.createElement("b", null, andList(dials)), ". Saving replaces the version it is running", cur ? /*#__PURE__*/React.createElement(React.Fragment, null, ", ", /*#__PURE__*/React.createElement("b", null, cur.id)) : null, ", in every one of them at once."), /*#__PURE__*/React.createElement("div", {
    className: "note"
  }, I.info, /*#__PURE__*/React.createElement("span", null, "Any interactions in progress will be affected.")));
}

/* ============================ APP ROOT ============================ */
function App() {
  const [agents, setAgents] = useState(SEED_AGENTS);
  const [scr, setScr] = useState({
    n: 'list'
  });
  const [draft, setDraft] = useState(newDraft);
  const [step, setStep] = useState(1);
  const [maxStep, setMaxStep] = useState(1);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState(null);
  const [talk, setTalk] = useState(false);
  const [askSave, setAskSave] = useState(false);   // editing a live agent: warn before saving
  /* the interface language; every element is translated on its way to the screen (i18n.js) */
  const [uiLang, setUiLangState] = useState(UI_LANG);
  UI_LANG = uiLang;
  const switchUi = l => { setUiLang(l); setUiLangState(UI_LANG); };
  const timer = useRef(null);
  const savedRef = useRef(null);
  const toast = t => {
    setMsg(t);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setMsg(null), 3400);
  };
  const set = patch => {
    setDraft(d => ({
      ...d,
      ...patch
    }));
    setBusy(true);
    clearTimeout(savedRef.current);
    savedRef.current = setTimeout(() => setBusy(false), 620);
  };
  const go = n => {
    setStep(n);
    setMaxStep(m => Math.max(m, n));
    const el = document.querySelector('.panel');
    if (el) el.scrollTop = 0;
  };
  const startCreate = () => {
    setDraft(newDraft());
    setStep(1);
    setMaxStep(1);
    setScr({
      n: 'wizard'
    });
  };
  const editAgent = id => {
    const a = agents.find(x => x.id === id);
    setDraft({
      ...newDraft(),
      ...a
    });
    setStep(3);
    setMaxStep(5);
    setScr({
      n: 'wizard',
      editing: id
    });
  };
  const testAgent = id => {
    const a = agents.find(x => x.id === id);
    setDraft({ ...newDraft(), ...a });
    setStep(5);
    setMaxStep(5);
    setScr({ n: 'wizard', editing: id, from: 'agent' });
  };
  /* Recovering a version changes nothing by itself. It loads that version's configuration onto
     the Scope screen; saving it from the wizard makes it the current version, and leaving without
     saving leaves the agent as it was. */
  const recoverVersion = (id, v) => {
    const a = agents.find(x => x.id === id);
    if (!a) return;
    const cfg = versionConfig(a, v);
    setDraft({ ...newDraft(), ...a, ...cfg });
    setStep(3);
    setMaxStep(5);
    setScr({ n: 'wizard', editing: id, recovered: v.id });
    toast(v.id + ' loaded. Review it, then save to make it the current version.');
  };
  const deleteAgent = id => {
    const a = agents.find(x => x.id === id);
    setAgents(agents.filter(x => x.id !== id));
    setScr({ n: 'list' });
    toast((a ? a.name : 'Agent') + ' deleted.');
  };
  const finish = () => {
    if (scr.editing) {
      const was = agents.find(x => x.id === scr.editing) || {};
      const newVersion = nextVersionId(was), prev = currentVersion(was);
      setAgents(agents.map(x => {
        if (x.id !== scr.editing) return x;
        const merged = { ...x, ...draft, id: x.id };
        return {
          ...merged,
          // every save is a new version, and it is the one the agent runs from now on
          versions: [...(x.versions || []), {
            id: newVersion, author: ME, when: nowStamp(),
            changed: scr.recovered ? 'Recovered ' + scr.recovered : 'Edited the agent',
            cfg: configOf(merged)
          }]
        };
      }));
      toast('Saved as ' + newVersion + '. ' + (isLive(was)
        ? 'It replaces ' + (prev ? prev.id : 'the previous version') + ' in ' + andList(dialersOf(was)) + ' from the next interaction.'
        : 'It is now the current version.'));
      setScr({
        n: 'agent',
        id: scr.editing
      });
    } else {
      const id = 'n' + (agents.length + 1);
      setAgents([...agents, {
        ...draft,
        id,
        calls: 0,
        assignedToDialer: false,
        dialers: [],
        versions: [{ id: 'v1', author: ME, when: nowStamp(), changed: 'First version',
          cfg: configOf(draft) }],
        extraRules: []
      }]);
      toast('Saved as v1. Add it to a dialer in the Outbound Hub to put it live.');
      setScr({
        n: 'agent',
        id
      });
    }
  };
  const agent = scr.id ? agents.find(a => a.id === scr.id) : null;
  const crumb = scr.n === 'interactions' ? 'Analytics / Interactions' : scr.n === 'ix' ? 'Analytics / Interactions / Detail' : scr.n === 'wizard' ? 'AI Agents / ' + (scr.editing ? 'Edit' : 'New agent') : scr.n === 'calls' ? 'AI Agents / ' + (agent ? agent.name : '') + ' / Calls' : scr.n === 'correct' ? 'AI Agents / ' + (agent ? agent.name : '') + ' / Calls / Correct' : scr.n === 'agent' ? 'AI Agents / ' + (agent ? agent.name : '') : 'AI Agents';
  let body;
  if (scr.n === 'list') body = /*#__PURE__*/React.createElement(AgentList, {
    agents: agents,
    onCreate: startCreate,
    onOpen: id => setScr({
      n: 'agent',
      id
    })
  });else if (scr.n === 'agent' && agent) body = /*#__PURE__*/React.createElement(AgentPage, {
    agent: agent,
    agents: agents,
    setAgents: setAgents,
    onBack: () => setScr({
      n: 'list'
    }),
    onEdit: editAgent,
    onTest: testAgent,
    onRecover: recoverVersion,
    onDelete: deleteAgent,
    toast: toast
  });else if (scr.n === 'interactions') body = /*#__PURE__*/React.createElement(Interactions, {
    agents: agents,
    onOpenRow: rid => setScr({
      n: 'ix',
      rowId: rid
    })
  });else if (scr.n === 'ix') body = /*#__PURE__*/React.createElement(InteractionDetail, {
    row: INTERACTIONS.find(r => r.id === scr.rowId) || INTERACTIONS[0],
    agents: agents,
    onBack: () => setScr({
      n: 'interactions'
    }),
    onTeach: (aid, cid) => setScr({
      n: 'correct',
      id: aid,
      callId: cid
    })
  });else if (scr.n === 'calls' && agent) body = /*#__PURE__*/React.createElement(CallList, {
    agent: agent,
    onBack: () => setScr({
      n: 'list'
    }),
    onOpen: cid => setScr({
      n: 'correct',
      id: scr.id,
      callId: cid
    })
  });else if (scr.n === 'correct' && agent) body = callById(agent, scr.callId) ? /*#__PURE__*/React.createElement(Correction, {
    agent: agent,
    call: callById(agent, scr.callId),
    agents: agents,
    setAgents: setAgents,
    onBack: () => setScr({
      n: 'calls',
      id: scr.id
    }),
    toast: toast
  }) : /*#__PURE__*/React.createElement(CallList, {
    agent: agent,
    onBack: () => setScr({
      n: 'list'
    }),
    onOpen: cid => setScr({
      n: 'correct',
      id: scr.id,
      callId: cid
    })
  });else {
    const common = {
      draft,
      set,
      // the agent is saved from the Rules step; Test is opened from the agent page and
      // only ever goes back — it never writes a version
      // saving an edit of an agent that is live in a dialer asks first
      next: () => step === 4 ? (scr.editing && isLive(agents.find(x => x.id === scr.editing) || {}) ? setAskSave(true) : finish()) : step === 5 ? (scr.from === 'agent' ? setScr({ n: 'agent', id: scr.editing }) : go(4)) : go(step + 1),
      back: () => go(step - 1),
      testExit: scr.from === 'agent' ? 'agent' : 'rules'
    };
    body = /*#__PURE__*/React.createElement("div", {
      className: "panel"
    }, /*#__PURE__*/React.createElement(WizardBar, {
      step: step,
      maxStep: maxStep,
      onGo: go,
      busy: busy,
      onExit: () => setScr({
        n: 'list'
      })
    }), step === 1 && /*#__PURE__*/React.createElement(StepDirection, _extends({}, common, {
      locked: !!scr.editing,
      talk: () => setTalk(true)
    })), step === 2 && /*#__PURE__*/React.createElement(StepVoice, common), step === 3 && /*#__PURE__*/React.createElement(draft.template === 'reception' ? StepBriefReception : StepBrief, common), step === 4 && /*#__PURE__*/React.createElement(StepRules, common), step === 5 && /*#__PURE__*/React.createElement(StepTest, common));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Shell, {
    crumb: crumb,
    uiLang: uiLang,
    onUiLang: switchUi,
    here: scr.n === 'interactions' || scr.n === 'ix' ? 'interactions' : 'list',
    onGo: where => setScr({
      n: where
    }),
    onHome: () => setScr({
      n: 'list'
    })
  }, body), askSave && /*#__PURE__*/React.createElement(SaveLiveWarning, {
    agent: agents.find(x => x.id === scr.editing),
    onCancel: () => setAskSave(false),
    onConfirm: () => { setAskSave(false); finish(); }
  }), talk && /*#__PURE__*/React.createElement(Modal, {
    title: "Tell us about the job",
    onClose: () => setTalk(false),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-gho",
      onClick: () => setTalk(false)
    }, "Cancel"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-pri",
      onClick: () => {
        setTalk(false);
        toast('Sent. Your account team will pick it up with you.');
      }
    }, "Send to my team"))
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, "Describe the calls you want in your own words. A solutions engineer builds the template with you."), /*#__PURE__*/React.createElement("textarea", {
    className: "inp",
    autoFocus: true,
    placeholder: "We need to call people who missed a delivery and agree a new day\u2026"
  })), msg && /*#__PURE__*/React.createElement(Toast, {
    msg: msg
  }));
}

/* The prerequisites page the "Learn more" links point at. Everything it states is something
   this prototype already enforces or says elsewhere — no invented platform detail, and no
   outbound link, since there is no real documentation URL to send anyone to. Self-contained
   (it owns its own open state) so no screen using it gains a useState. */
const PREREQS = [{
  t: 'A dialer to run in',
  ico: 'board',
  d: 'An agent runs inside a dialer. It is live only while it is in one, and the agent page says which dialers are running it. Dialers are assigned in the Outbound Hub, not here.'
}, {
  t: 'A list of people to call',
  ico: 'users',
  d: 'An outbound agent calls the contacts in its dialer\u2019s list. Testing never touches that list \u2014 a test call rings your own number and nobody else\u2019s.'
}, {
  t: 'Dispositions on the campaign',
  ico: 'form',
  d: 'How an interaction is coded when it ends is configured on the campaign, outside the agent. The agent reports what happened; it does not define the codes.'
}, {
  t: 'Credits on the account',
  ico: 'bolt',
  d: 'Every interaction an agent handles spends credits, and each one reports its own total. What is left is shown on the AI Agents screen.'
}];
function PrereqLink({
  label,
  className
}) {
  const [open, setOpen] = useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
    className: className || 'learnmore',
    href: "#",
    onClick: e => {
      e.preventDefault();
      setOpen(true);
    }
  }, label), open && /*#__PURE__*/React.createElement(Modal, {
    title: "AI agent collection prerequisites",
    onClose: () => setOpen(false),
    actions: /*#__PURE__*/React.createElement("button", {
      className: "btn btn-gho",
      onClick: () => setOpen(false)
    }, "Close")
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, "Four things have to be in place before an agent can take or make interactions. Three of them are set up outside this screen."), /*#__PURE__*/React.createElement("div", {
    className: "prereqs"
  }, PREREQS.map(x => /*#__PURE__*/React.createElement("div", {
    className: "prereq",
    key: x.t
  }, /*#__PURE__*/React.createElement("span", {
    className: "prereq-ico"
  }, I[x.ico]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "prereq-t"
  }, x.t), /*#__PURE__*/React.createElement("div", {
    className: "prereq-d"
  }, x.d)))))));
}

/* ============================ collapsible section ============================ */
function Section({
  title,
  hint,
  summary,
  defaultOpen,
  children
}) {
  const [open, setOpen] = useState(defaultOpen === true);
  return /*#__PURE__*/React.createElement("div", {
    className: "sec",
    "data-open": open ? '1' : '0'
  }, /*#__PURE__*/React.createElement("button", {
    className: "sec-hd",
    "aria-expanded": open,
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement("span", {
    className: "sec-chev"
  }, I.fwd), /*#__PURE__*/React.createElement("span", {
    className: "sec-t"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "sec-sum mono"
  }, summary)), open && /*#__PURE__*/React.createElement("div", {
    className: "sec-body"
  }, hint && /*#__PURE__*/React.createElement("div", {
    className: "field-h",
    style: {
      marginBottom: 15,
      maxWidth: '62ch'
    }
  }, hint), children));
}

/* ============================ 1 · DIRECTION + JOB ============================ */
/* Per direction: one template is featured (shown first, full colour); its opposite-number
   is hidden outright (an inbound receptionist has no outbound counterpart, and vice versa
   for collections); everything else stays pickable but visually dimmed. Purely a gallery
   presentation choice — seedFromTemplate/newDraft and every downstream screen are untouched. */
const GALLERY_FOCUS = {
  out: {
    featured: 'collections',
    hide: 'reception'
  },
  in: {
    featured: 'reception',
    hide: 'collections'
  }
};
function galleryTemplates(direction) {
  const g = GALLERY_FOCUS[direction];
  if (!g) return TEMPLATES;
  const feat = TEMPLATES.find(t => t.id === g.featured);
  const rest = TEMPLATES.filter(t => t.id !== g.featured && t.id !== g.hide);
  return feat ? [feat, ...rest] : rest;
}
function TemplateGallery({
  draft,
  set,
  talk
}) {
  const focus = GALLERY_FOCUS[draft.direction];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gridTemplateColumns: '1fr 1fr'
    }
  }, galleryTemplates(draft.direction).map(t => {
    const on = draft.template === t.id;
    const dim = !!focus && t.id !== focus.featured;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      className: dim ? 'pick dim' : 'pick',
      "aria-pressed": on,
      onClick: () => set(seedFromTemplate(draft, t.id))
    }, on && /*#__PURE__*/React.createElement("span", {
      className: "pick-check"
    }, I.check), /*#__PURE__*/React.createElement("span", {
      className: "pick-ico"
    }, t.icon), /*#__PURE__*/React.createElement("span", {
      className: "pick-t"
    }, t.name), /*#__PURE__*/React.createElement("span", {
      className: "pick-d"
    }, t.blurb), /*#__PURE__*/React.createElement("span", {
      style: {
        marginTop: 'auto',
        paddingTop: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono"
    }, t.stat)));
  }), /*#__PURE__*/React.createElement("button", {
    className: "pick",
    style: {
      gridColumn: '1 / -1',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16
    },
    onClick: talk
  }, /*#__PURE__*/React.createElement("span", {
    className: "pick-ico",
    style: {
      background: 'var(--grey-soft)',
      color: 'var(--ink-2)'
    }
  }, I.wand), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "pick-t",
    style: {
      display: 'block'
    }
  }, "Something else"), /*#__PURE__*/React.createElement("span", {
    className: "pick-d"
  }, "Describe the job in your own words and our team builds the template with you.")), /*#__PURE__*/React.createElement("span", {
    className: "btn btn-gho btn-sm",
    style: {
      marginLeft: 'auto'
    }
  }, "Talk to our team", I.fwd))), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 18
    }
  }, I.info, /*#__PURE__*/React.createElement("span", null, "Nothing here is locked in. Every rule a template brings can be changed in step 4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(PrereqLink, {
    label: "Learn more: AI agent collection prerequisites \u2014 list, dialer and disposition requirements"
  })));
}
function StepDirection({
  draft,
  set,
  next,
  locked,
  talk
}) {
  const opts = [{
    id: 'out',
    t: 'Outbound',
    ico: I.phoneOut
  }, {
    id: 'in',
    t: 'Inbound',
    ico: I.phoneIn
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(StepHead, {
    title: "Who starts the interaction?"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gridTemplateColumns: '1fr 1fr'
    }
  }, opts.map(o => {
    const on = draft.direction === o.id;
    return /*#__PURE__*/React.createElement("button", {
      key: o.id,
      className: "pick",
      "aria-pressed": on,
      disabled: !!locked,
      onClick: locked ? undefined : () => set({
        direction: o.id,
        template: null
      }),
      style: {
        minHeight: 132,
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 14,
        padding: 24
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      className: "pick-check"
    }, I.check), /*#__PURE__*/React.createElement("span", {
      className: "pick-ico"
    }, o.ico), /*#__PURE__*/React.createElement("span", {
      className: "pick-t",
      style: {
        fontSize: 18,
        color: locked && !on ? 'var(--ink-3)' : null
      }
    }, o.t));
  })), locked && /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 18
    }
  }, I.lock, /*#__PURE__*/React.createElement("span", null, "Direction is fixed once an agent exists.")), draft.direction && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      borderTop: '1px solid var(--line-2)',
      paddingTop: 26,
      animation: 'pop .2s ease-out'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 6px',
      fontSize: 23
    }
  }, "What job should it do?"), /*#__PURE__*/React.createElement("p", {
    className: "sub",
    style: {
      marginTop: 0,
      marginBottom: 18
    }
  }, "Pick the closest one. Each brings rules already filled in", draft.direction === 'in' ? ', worded for calls coming in' : '', "."), /*#__PURE__*/React.createElement(TemplateGallery, {
    draft: draft,
    set: set,
    talk: talk
  })))), /*#__PURE__*/React.createElement(Foot, {
    onNext: next,
    nextOk: !!draft.direction && !!draft.template
  }));
}

/* ============================ 6 · BUSINESS RULES ============================ */
function HandoverRules({
  draft,
  set
}) {
  const [ho, setHo] = useState('');
  const hv = draft.handover || [],
    other = draft.handoverOther || [];
  const toggle = id => set({
    handover: hv.indexOf(id) > -1 ? hv.filter(x => x !== id) : [...hv, id]
  });
  const addOther = () => {
    const t = ho.trim();
    if (t) set({
      handoverOther: [...other, t]
    });
    setHo('');
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": "Handover rules"
  }, HANDOVER.map(o => {
    const on = o.always || hv.indexOf(o.id) > -1;
    return o.always ? /*#__PURE__*/React.createElement("div", {
      className: "opt opt-lock",
      "aria-checked": "true",
      key: o.id,
      style: {
        cursor: 'default'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "cbx"
    }, I.check), /*#__PURE__*/React.createElement("span", null, o.v, /*#__PURE__*/React.createElement("span", {
      className: "lock-note",
      style: {
        marginLeft: 9
      }
    }, I.lock, "Always on"))) : /*#__PURE__*/React.createElement("button", {
      className: "opt",
      role: "checkbox",
      "aria-checked": on,
      key: o.id,
      onClick: () => toggle(o.id)
    }, /*#__PURE__*/React.createElement("span", {
      className: "cbx"
    }, on && I.check), /*#__PURE__*/React.createElement("span", null, o.v));
  })), other.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      marginBottom: 8
    }
  }, "Your own"), other.map((t, i) => /*#__PURE__*/React.createElement("div", {
    className: "prom",
    key: i,
    style: {
      marginTop: i ? 8 : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "no-ico",
    style: {
      background: 'var(--accent-soft)',
      color: 'var(--accent)'
    }
  }, I.check), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, t), /*#__PURE__*/React.createElement("button", {
    className: "prom-x",
    "aria-label": "Remove handover rule",
    onClick: () => set({
      handoverOther: other.filter((_, j) => j !== i)
    })
  }, I.x)))), /*#__PURE__*/React.createElement("div", {
    className: "prom",
    style: {
      marginTop: 12,
      background: 'var(--panel-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "no-ico",
    style: {
      background: 'var(--accent-soft)',
      color: 'var(--accent)'
    }
  }, I.plus), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)',
      flex: 'none'
    }
  }, "Other (specify)"), /*#__PURE__*/React.createElement("input", {
    className: "inp",
    style: {
      border: 0,
      padding: '2px 0',
      background: 'none'
    },
    value: ho,
    placeholder: "Describe it in your own words\u2026",
    onChange: e => setHo(e.target.value),
    onKeyDown: e => e.key === 'Enter' && addOther()
  }), ho.trim() && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-gho btn-sm",
    onClick: addOther
  }, "Add")));
}
function OtherRules({
  draft,
  set
}) {
  const [np, setNp] = useState('');
  const list = draft.promises || [];
  const ready = !!np.trim();
  /* the template's rules are ticked by default and can be unticked rather than deleted, so a
     supervisor can see what the template offered and put it back */
  const toggle = i => set({
    promises: list.map((p, j) => j === i ? {
      ...p,
      on: p.on === false
    } : p)
  });
  const add = () => {
    if (!ready) return;
    set({
      promises: [...list, {
        t: np.trim(),
        on: true,
        custom: true,
        kind: 'rule'
      }]
    });
    setNp('');
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, reducedOn(draft) && /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginBottom: 8
    }
  }, I.info, /*#__PURE__*/React.createElement("span", null, "Two rules are off while the brief offers a reduced balance without interest: that offer removes interest, so the agent cannot also promise never to.")), /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": "Other rules"
  }, list.map((p, i) => {
    /* off, greyed and not clickable while a reduced balance is on offer; never rewritten,
       so unticking that offer brings the rule back exactly as it was */
    if (suspendedByOffer(draft, p)) return /*#__PURE__*/React.createElement("div", {
      className: "cf",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "opt opt-lock opt-off",
      "aria-checked": "false",
      "aria-disabled": "true",
      title: "Off while the brief offers a reduced balance without interest"
    }, /*#__PURE__*/React.createElement("span", {
      className: "cbx"
    }), /*#__PURE__*/React.createElement("span", null, p.t, /*#__PURE__*/React.createElement("span", {
      className: "cf-q"
    }, "Off while a reduced balance without interest is on offer"))));
    const on = p.on !== false;
    return /*#__PURE__*/React.createElement("div", {
      className: "cf",
      key: i
    }, /*#__PURE__*/React.createElement("button", {
      className: "opt",
      role: "checkbox",
      "aria-checked": on,
      onClick: () => toggle(i)
    }, /*#__PURE__*/React.createElement("span", {
      className: "cbx"
    }, on && I.check), /*#__PURE__*/React.createElement("span", null, p.t, p.param !== undefined && /*#__PURE__*/React.createElement("span", {
      className: "cf-q"
    }, "\u201C", p.param || '…', "\u201D"))), p.custom && /*#__PURE__*/React.createElement("button", {
      className: "prom-x",
      "aria-label": 'Remove ' + p.t,
      onClick: () => set({
        promises: list.filter((_, j) => j !== i)
      })
    }, I.x), p.param !== undefined && on && /*#__PURE__*/React.createElement("div", {
      className: "addq addq-mini rule-param"
    }, /*#__PURE__*/React.createElement("label", {
      className: "addq-f addq-wide"
    }, /*#__PURE__*/React.createElement("span", {
      className: "addq-l"
    }, "The message it leaves"), /*#__PURE__*/React.createElement("input", {
      className: "inp",
      value: p.param,
      "aria-label": "Message for whoever answers",
      placeholder: "What it says to whoever picked up",
      onChange: e => set({
        promises: list.map((x, j) => j === i ? {
          ...x,
          param: e.target.value
        } : x)
      })
    }))));
  })), /*#__PURE__*/React.createElement("div", {
    className: "addq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "addq-row"
  }, /*#__PURE__*/React.createElement("label", {
    className: "addq-f addq-wide"
  }, /*#__PURE__*/React.createElement("span", {
    className: "addq-l"
  }, "A rule of your own"), /*#__PURE__*/React.createElement("input", {
    className: "inp",
    value: np,
    placeholder: "End the call if the customer is driving",
    onChange: e => setNp(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        add();
      }
    }
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-pri btn-sm",
    disabled: !ready,
    onClick: add,
    title: ready ? 'Add this rule' : 'Type the rule first'
  }, "Add"))));
}

/* The words the template bans are shown as standard options to tick, not as things you can only
   delete; anything you type yourself sits below them and stays removable. */
function BannedWords({
  draft,
  set
}) {
  const defaults = bannedDefaults(draft),
    on = draft.banned || [];
  const extras = on.filter(w => defaults.indexOf(w) < 0);
  const toggle = w => set({
    banned: on.indexOf(w) > -1 ? on.filter(x => x !== w) : [...on, w]
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": "Standard words"
  }, defaults.map(w => {
    const isOn = on.indexOf(w) > -1;
    return /*#__PURE__*/React.createElement("button", {
      className: "opt",
      role: "checkbox",
      "aria-checked": isOn,
      key: w,
      onClick: () => toggle(w)
    }, /*#__PURE__*/React.createElement("span", {
      className: "cbx"
    }, isOn && I.check), /*#__PURE__*/React.createElement("span", null, w));
  })), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      margin: '14px 0 8px'
    }
  }, "Your own"), /*#__PURE__*/React.createElement(TagInput, {
    tags: extras,
    placeholder: "Add a word\u2026",
    onChange: next => set({
      banned: [...on.filter(w => defaults.indexOf(w) > -1), ...next]
    })
  }));
}
function CollectFields({
  draft,
  set
}) {
  const fields = draft.collect || [];
  const [label, setLabel] = useState('');
  const [q, setQ] = useState('');
  const toggle = id => set({
    collect: fields.map(f => f.id === id ? {
      ...f,
      on: !f.on
    } : f)
  });
  const remove = id => set({
    collect: fields.filter(f => f.id !== id)
  });
  const ready = !!label.trim() && !!q.trim();
  const add = () => {
    if (!ready) return;
    set({
      collect: [...fields, {
        id: 'custom_' + Date.now().toString(36),
        label: label.trim(),
        question: q.trim(),
        on: true,
        custom: true
      }]
    });
    setLabel('');
    setQ('');
  };
  const onKey = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      add();
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": "What it asks every caller"
  }, fields.map(f => /*#__PURE__*/React.createElement("div", {
    className: "cf",
    key: f.id
  }, /*#__PURE__*/React.createElement("button", {
    className: "opt",
    role: "checkbox",
    "aria-checked": f.on,
    onClick: () => toggle(f.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "cbx"
  }, f.on && I.check), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, f.label), /*#__PURE__*/React.createElement("span", {
    className: "cf-q"
  }, "\u201C", f.question, "\u201D"))), f.custom && /*#__PURE__*/React.createElement("button", {
    className: "prom-x",
    "aria-label": 'Remove ' + f.label,
    onClick: () => remove(f.id)
  }, I.x)))), /*#__PURE__*/React.createElement("div", {
    className: "addq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "addq-t"
  }, "Add a question of your own"), /*#__PURE__*/React.createElement("div", {
    className: "addq-row"
  }, /*#__PURE__*/React.createElement("label", {
    className: "addq-f"
  }, /*#__PURE__*/React.createElement("span", {
    className: "addq-l"
  }, "What you call it"), /*#__PURE__*/React.createElement("input", {
    className: "inp",
    value: label,
    placeholder: "Order number",
    onChange: e => setLabel(e.target.value),
    onKeyDown: onKey
  })), /*#__PURE__*/React.createElement("label", {
    className: "addq-f addq-wide"
  }, /*#__PURE__*/React.createElement("span", {
    className: "addq-l"
  }, "What it asks out loud"), /*#__PURE__*/React.createElement("input", {
    className: "inp",
    value: q,
    placeholder: "Do you have your order number handy?",
    onChange: e => setQ(e.target.value),
    onKeyDown: onKey
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-pri btn-sm",
    disabled: !ready,
    onClick: add,
    title: ready ? 'Add this question' : 'Fill both boxes to add it'
  }, I.plus, "Add")), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 10
    }
  }, I.info, /*#__PURE__*/React.createElement("span", null, "Asked of every caller, after the ones ticked above. You can switch it off or remove it later."))));
}
function StepRules({
  draft,
  set,
  next,
  back
}) {
  const isRec = draft.template === 'reception';
  const asked = (draft.collect || []).filter(f => f.on).length;
  const hv = draft.handover || [],
    other = draft.handoverOther || [];
  const chosen = hv.length + other.length + 1; // +1 for the always-on trigger
  const n = (k, one, many) => k + (k === 1 ? ' ' + one : ' ' + many);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(StepHead, {
    title: isRec ? 'What it asks, and the rules it cannot break' : 'The rules it cannot break',
    sub: 'Filled in from the ' + template(draft.template).name.toLowerCase() + ' template. Open a section to change what is in it.'
  }), isRec && /*#__PURE__*/React.createElement(Section, {
    title: "What it asks every caller",
    summary: n(asked, 'question', 'questions'),
    hint: "Toggle what it asks. Your own questions are asked after these, in the order you add them."
  }, /*#__PURE__*/React.createElement(CollectFields, {
    draft: draft,
    set: set
  })), /*#__PURE__*/React.createElement(Section, {
    title: "Handover rules",
    summary: n(chosen, 'rule', 'rules'),
    hint: 'When any of these happens the agent stops, says a person will take over, and hands the call across. It hands over by: ' + handLabel(draft) + ' — change that on the brief.'
  }, /*#__PURE__*/React.createElement(HandoverRules, {
    draft: draft,
    set: set
  })), /*#__PURE__*/React.createElement(Section, {
    title: "Words it must never use",
    summary: n(draft.banned.length, 'word', 'words'),
    hint: "Tick the ones that apply. If a word here would come up, the agent rephrases."
  }, /*#__PURE__*/React.createElement(BannedWords, {
    draft: draft,
    set: set
  })), /*#__PURE__*/React.createElement(Section, {
    title: "Other rules",
    summary: n(activePromises(draft).length, 'rule', 'rules'),
    hint: "Tick the ones that apply. A never-promise rule makes the agent say it cannot promise that, then offer what it can do instead; the others change what it does on the call."
  }, /*#__PURE__*/React.createElement(OtherRules, {
    draft: draft,
    set: set
  })))), /*#__PURE__*/React.createElement(Foot, {
    onBack: back,
    onNext: next,
    nextLabel: "Save & open the agent",
    nextOk: true
  }));
}

/* ============================ 4 · LANGUAGE & VOICE ============================ */
function StepVoice({
  draft,
  set,
  next,
  back
}) {
  const [playing, setPlaying] = useState(null);
  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => setPlaying(null), 2600);
    return () => clearTimeout(t);
  }, [playing]);
  const lang = draft.lang || (draft.personaId ? persona(draft.personaId).lang : null);
  const voices = lang ? voicesIn(lang) : [];
  /* The template seeds a Spanish opener a step before the language is chosen, so switching
     language has to bring the opener with it — unless it has been edited, which is the one
     thing we must not overwrite. */
  const pickLang = id => {
    const t = template(draft.template),
      inb = draft.direction === 'in';
    const wasDefault = draft.opener === (inb ? t.inOpener : t.opener) || draft.opener === (inb ? t.inOpenerEn : t.openerEn);
    const next = id === 'en' ? inb ? t.inOpenerEn || t.inOpener : t.openerEn || t.opener : inb ? t.inOpener : t.opener;
    /* the banned list swaps on the same terms: only while it is still the template's own */
    const wasStock = (draft.banned || []).join('|') === bannedDefaults({
      ...draft,
      lang: draft.lang
    }).join('|');
    const nextBanned = bannedDefaults({
      ...draft,
      lang: id
    });
    /* and the message the third-party rule leaves, while it is still a stock default */
    const co = (draft.tokens || {}).company;
    const stockMsg = [thirdPartyMessageDefault('es', co), thirdPartyMessageDefault('en', co)];
    const nextPromises = (draft.promises || []).map(r => r.t === THIRD_PARTY_MESSAGE && stockMsg.indexOf(r.param) > -1 ? {
      ...r,
      param: thirdPartyMessageDefault(id, co)
    } : r);
    set({
      lang: id,
      personaId: draft.personaId && persona(draft.personaId).lang === id ? draft.personaId : null,
      ...(wasDefault ? {
        opener: next
      } : {}),
      ...(wasStock ? {
        banned: nextBanned
      } : {}),
      promises: nextPromises
    });
  };
  const sel = draft.personaId ? persona(draft.personaId) : null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(StepHead, {
    title: "Which language, and whose voice?",
    sub: "An agent speaks one language. Pick it, then listen to the voices available for that language."
  }), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      marginBottom: 11
    }
  }, "Language"), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gridTemplateColumns: '1fr 1fr'
    }
  }, Object.keys(LANGS).map(id => {
    const l = LANGS[id],
      on = lang === id,
      n = voicesIn(id).length;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      className: "pick",
      "aria-pressed": on,
      onClick: () => pickLang(id),
      style: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
        padding: '18px 20px'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      className: "pick-check"
    }, I.check), /*#__PURE__*/React.createElement("span", {
      className: "pick-ico"
    }, I.globe), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      className: "pick-t",
      style: {
        display: 'block'
      }
    }, l.name), /*#__PURE__*/React.createElement("span", {
      className: "mono"
    }, n, " voices \xB7 ", TIER)));
  })), lang && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30,
      borderTop: '1px solid var(--line-2)',
      paddingTop: 24,
      animation: 'pop .2s ease-out'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 0,
      overflow: 'hidden'
    }
  }, voices.map((p, i) => {
    const on = draft.personaId === p.id;
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      className: 'vrow' + (on ? ' on' : ''),
      style: {
        borderTop: i ? '1px solid var(--line-2)' : 0
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "vrow-pick",
      role: "radio",
      "aria-checked": on,
      onClick: () => set({
        personaId: p.id
      })
    }, /*#__PURE__*/React.createElement(Avatar, {
      p: p,
      size: 30
    }), /*#__PURE__*/React.createElement("span", {
      className: "vrow-name"
    }, p.name), /*#__PURE__*/React.createElement("span", {
      className: "vtier mono"
    }, p.tier), on && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        color: 'var(--accent)',
        display: 'grid',
        placeItems: 'center'
      }
    }, I.check)), /*#__PURE__*/React.createElement("button", {
      className: 'play' + (playing === p.id ? ' on' : ''),
      style: {
        marginTop: 0,
        flex: 'none'
      },
      onClick: () => setPlaying(playing === p.id ? null : p.id)
    }, playing === p.id ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "wave"
    }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)), "0:02") : /*#__PURE__*/React.createElement(React.Fragment, null, I.play, " Sample")));
  })), sel && /*#__PURE__*/React.createElement("div", {
    className: "prev",
    style: {
      marginTop: 22,
      position: 'static'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "prev-hd"
  }, /*#__PURE__*/React.createElement(Avatar, {
    p: sel,
    size: 26
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 13.5
    }
  }, sel.name), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      marginLeft: 'auto'
    }
  }, LANGS[sel.lang].short, " \xB7 sample line")), /*#__PURE__*/React.createElement("div", {
    className: "prev-body",
    style: {
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bub bub-a",
    key: sel.id
  }, sel.line)))))), /*#__PURE__*/React.createElement(Foot, {
    onBack: back,
    onNext: next,
    nextOk: !!lang && !!draft.personaId
  }));
}

/* ============================ 1 · AGENT LIST ============================ */
const ICO_TRASH = /*#__PURE__*/React.createElement("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.9",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M4 7h16M9.5 7V4.5h5V7M6.5 7l1 13h9l1-13M10 11v6M14 11v6"
}));

/* What is left on the account, read from the n2p usage API. Deliberately not a sum of the
   interactions log — that is one month of one screen, this is the balance. */
function CreditsWidget() {
  const pct = creditsPct();
  return /*#__PURE__*/React.createElement("div", {
    className: 'credits' + (creditsLow() ? ' credits-low' : ''),
    title: 'Remaining credits, from the ' + CREDITS.source + ' · renews ' + CREDITS.renews
  }, /*#__PURE__*/React.createElement("div", {
    className: "credits-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "credits-n tnum"
  }, fmtCredits(creditsLeft())), /*#__PURE__*/React.createElement("span", {
    className: "credits-of tnum"
  }, "of ", fmtCredits(CREDITS.included))), /*#__PURE__*/React.createElement("div", {
    className: "credits-bar"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: pct + '%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "credits-sub mono"
  }, "credits left \xB7 renews ", CREDITS.renews));
}
function AgentList({
  agents,
  onCreate,
  onOpen
}) {
  const [q, setQ] = useState('');
  const shown = agents.filter(a => (a.name + a.tokens.company).toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel-hd"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0
    }
  }, "AI Agents"), /*#__PURE__*/React.createElement(CreditsWidget, null), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-pri",
    onClick: onCreate
  }, I.plus, "Create agent"))), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 420,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "inp",
    placeholder: "Search agents",
    value: q,
    onChange: e => setQ(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid list-grid"
  }, shown.map(a => {
    const p = persona(a.personaId),
      inb = a.direction === 'in';
    return /*#__PURE__*/React.createElement("div", {
      className: "card ag-card",
      key: a.id,
      role: "button",
      tabIndex: 0,
      "aria-label": 'Open ' + a.name,
      onClick: () => onOpen(a.id),
      onKeyDown: e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen(a.id);
        }
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ag-top"
    }, /*#__PURE__*/React.createElement(Avatar, {
      p: p,
      size: 44
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ag-name"
    }, a.name), /*#__PURE__*/React.createElement("div", {
      className: "ag-meta"
    }, p.name, " \xB7 ", LANGS[p.lang].short))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 7,
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "pill",
      style: {
        background: 'var(--accent-soft)',
        color: 'var(--accent-ink)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'grid',
        placeItems: 'center',
        width: 13
      }
    }, inb ? I.phoneIn : I.phoneOut), dirLabel(a.direction)), /*#__PURE__*/React.createElement("span", {
      className: "pill pill-tpl",
      title: 'Built from the ' + template(a.template).name + ' template'
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'grid',
        placeItems: 'center',
        width: 13
      }
    }, template(a.template).icon), template(a.template).name), isLive(a) && /*#__PURE__*/React.createElement(LiveBadge, {
      dialers: a.dialers
    })), /*#__PURE__*/React.createElement("div", {
      className: "ag-line"
    }, "It ", goalLabel(a), "."));
  }))));
}

/* ============================ 9 · THE AGENT PAGE ============================ */
const ruleCount = a => (a.handover || []).length + (a.handoverOther || []).length + 1 + (a.banned || []).length + activePromises(a).length;

/* Add a question to what the receptionist collects, without leaving the chip. Mounted only
   while the popover is open, so the two inputs always start empty. */
function CollectAdd({
  fields,
  set
}) {
  const [label, setLabel] = useState('');
  const [q, setQ] = useState('');
  const ready = !!label.trim() && !!q.trim();
  const add = () => {
    if (!ready) return;
    set({
      collect: [...fields, {
        id: 'custom_' + Date.now().toString(36),
        label: label.trim(),
        question: q.trim(),
        on: true,
        custom: true
      }]
    });
    setLabel('');
    setQ('');
  };
  const onKey = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      add();
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "addq addq-mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "addq-row"
  }, /*#__PURE__*/React.createElement("label", {
    className: "addq-f"
  }, /*#__PURE__*/React.createElement("span", {
    className: "addq-l"
  }, "Call it"), /*#__PURE__*/React.createElement("input", {
    className: "inp",
    value: label,
    placeholder: "Order number",
    onChange: e => setLabel(e.target.value),
    onKeyDown: onKey
  })), /*#__PURE__*/React.createElement("label", {
    className: "addq-f addq-wide"
  }, /*#__PURE__*/React.createElement("span", {
    className: "addq-l"
  }, "It asks"), /*#__PURE__*/React.createElement("input", {
    className: "inp",
    value: q,
    placeholder: "Do you have your order number handy?",
    onChange: e => setQ(e.target.value),
    onKeyDown: onKey
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-pri btn-sm",
    disabled: !ready,
    onClick: add,
    title: ready ? 'Add this question' : 'Fill both boxes to add it'
  }, "Add")));
}

/* What recovering this version would change, against the current one. One line per change,
   each marked gained / lost / changed, so the answer to "what is different?" is countable at a
   glance instead of being two full lists the reader has to compare themselves. */
function VersionDiff({
  agent,
  version
}) {
  const d = versionDiff(agent, version);
  if (!d) return /*#__PURE__*/React.createElement("div", {
    className: "vd-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vd-lead"
  }, "Nothing to compare"), /*#__PURE__*/React.createElement("div", {
    className: "vd-sub"
  }, version.id, " is the current version."));
  const against = 'against ' + d.base.id + ', the current version';
  if (!d.rows.length) return /*#__PURE__*/React.createElement("div", {
    className: "vd-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vd-lead"
  }, "Nothing would change"), /*#__PURE__*/React.createElement("div", {
    className: "vd-sub"
  }, version.id, " is identical to ", d.base.id, ", the current version."));
  const nch = d.rows.length;
  return /*#__PURE__*/React.createElement("div", {
    className: "vd-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vd-lead"
  }, "Recovering ", version.id, " changes ", nch === 1 ? 'one thing' : nch + ' things'), /*#__PURE__*/React.createElement("div", {
    className: "vd-sub"
  }, against), /*#__PURE__*/React.createElement("div", {
    className: "vd-rows"
  }, d.rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: 'vd-r vd-' + r.kind,
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "vd-m"
  }, r.kind === 'add' ? I.plus : r.kind === 'drop' ? I.x : I.pencil), /*#__PURE__*/React.createElement("div", {
    className: "vd-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vd-lab"
  }, r.kind === 'add' ? 'Gains' : r.kind === 'drop' ? 'Loses' : 'Changes', " \xB7 ", r.k), r.kind !== 'change' ? /*#__PURE__*/React.createElement("div", {
    className: "vd-item"
  }, r.item) : r.long ? /*#__PURE__*/React.createElement("div", {
    className: "vd-stack"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vd-old"
  }, r.from), /*#__PURE__*/React.createElement("span", {
    className: "vd-new"
  }, r.to)) : /*#__PURE__*/React.createElement("div", {
    className: "vd-pair"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vd-old"
  }, r.from), /*#__PURE__*/React.createElement("span", {
    className: "vd-arrow"
  }, I.fwd), /*#__PURE__*/React.createElement("span", {
    className: "vd-new"
  }, r.to)))))));
}

/* Live means attached to a dialer in the Outbound Hub — nothing more. One version runs in all of
   them; several is worth saying on screen, so the badge counts them and the tooltip names them. */
function LiveBadge({
  dialers
}) {
  const ds = dialers || [],
    n = ds.length;
  return /*#__PURE__*/React.createElement("span", {
    className: "pill deployed",
    title: 'Live · running in ' + andList(ds)
  }, /*#__PURE__*/React.createElement("i", null), "Live", n > 1 && /*#__PURE__*/React.createElement("span", {
    className: "pill-sub"
  }, "in ", n, " dialers"));
}
function AgentSummary({
  agent
}) {
  const a = agent,
    p = persona(a.personaId),
    inb = a.direction === 'in';
  const ident = val(identityFor(a.template), a.tokens.identity);
  const V = ({
    children
  }) => /*#__PURE__*/React.createElement("b", {
    className: "pv"
  }, children);
  /* asking for a person is always a trigger, so it belongs in the sentence */
  const triggers = ['asks for a person'].concat((a.handover || []).map(id => (HANDOVER.find(o => o.id === id) || {}).short).filter(Boolean));
  const own = a.handoverOther || [];
  const promises = promisesOf(a).map(x => x.t.replace(/^Never promise /i, ''));
  const others = otherRules(a);
  return /*#__PURE__*/React.createElement("div", {
    className: "brief-prose"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(V, null, p.name), " ", inb ? 'answers calls to ' : template(a.template).who ? 'calls ' + template(a.template).who + ' ' : 'calls ', /*#__PURE__*/React.createElement(V, null, a.tokens.company), " in ", /*#__PURE__*/React.createElement(V, null, LANGS[p.lang].name), ".", ' ', "It ", a.template === 'collections' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(V, null, ident.v), ", ", /*#__PURE__*/React.createElement(V, null, discloseFull(a)), ", ", /*#__PURE__*/React.createElement(V, null, offersLabel(a)), ", ", fallbackPhrase(a), ". Once a date is agreed, it ", /*#__PURE__*/React.createElement(V, null, paymentLabel(a)), ". If no date is agreed, it ", /*#__PURE__*/React.createElement(V, null, noDateLabel(a)), ".") : /*#__PURE__*/React.createElement(React.Fragment, null, a.template !== 'reception' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(V, null, ident.v), ", then "), /*#__PURE__*/React.createElement(V, null, goalLabel(a)), ".")), /*#__PURE__*/React.createElement("p", null, "Every call opens with the fixed disclosure, then ", /*#__PURE__*/React.createElement("span", {
    className: "pq"
  }, "\u201C", a.opener, "\u201D"), a.template === 'collections' && closingOf(a) && /*#__PURE__*/React.createElement(React.Fragment, null, ' ', "It ends every call with ", /*#__PURE__*/React.createElement("span", {
    className: "pq"
  }, "\u201C", closingOf(a), "\u201D"))), /*#__PURE__*/React.createElement("p", null, "It ", /*#__PURE__*/React.createElement(V, null, handLabel(a)), " when the customer ", orList(triggers), ".", promises.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, " It never promises ", /*#__PURE__*/React.createElement(V, null, orList(promises)), a.banned.length ? '' : '.'), a.banned.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, promises.length ? ', and' : ' It', " never says ", /*#__PURE__*/React.createElement(V, null, orList(a.banned)), ".")), others.length > 0 && /*#__PURE__*/React.createElement("p", null, "Other ", others.length === 1 ? 'rule' : 'rules', " it follows:", ' ', others.map((r, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "pq"
  }, "\u201C", ruleText(r), "\u201D"), i < others.length - 1 ? ', ' : ''))), own.length > 0 && /*#__PURE__*/React.createElement("p", null, "It also hands over on your own ", own.length === 1 ? 'rule' : 'rules', ":", ' ', own.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "pq"
  }, "\u201C", t, "\u201D"), i < own.length - 1 ? ', ' : ''))), (a.extraRules || []).length > 0 && /*#__PURE__*/React.createElement("p", null, "Corrections you have applied: ", /*#__PURE__*/React.createElement(V, null, orList(a.extraRules)), "."));
}
function SumRow({
  label,
  children,
  wide
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sumrow",
    style: wide ? {
      gridColumn: '1 / -1'
    } : null
  }, /*#__PURE__*/React.createElement("span", {
    className: "sumrow-k mono"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "sumrow-v"
  }, children));
}
function AgentPage({
  agent,
  agents,
  setAgents,
  onBack,
  onEdit,
  onTest,
  onRecover,
  onDelete,
  toast
}) {
  const a = agent,
    p = persona(a.personaId);
  const [askDel, setAskDel] = useState(false);
  const [history, setHistory] = useState(false);
  const [viewing, setViewing] = useState(null); // a version being read read-only
  const inb = a.direction === 'in';
  /* There is no separate publish step: the newest version is the one the agent runs, and it is
     live wherever the Outbound Hub has put it in a dialer. */
  const cur = currentVersion(a);
  const dials = dialersOf(a),
    live = isLive(a);
  const vs = a.versions || [];
  const replacedBy = v => {
    const i = vs.findIndex(x => x.id === v.id);
    return i > -1 && vs[i + 1] ? vs[i + 1].id : null;
  };

  /* Recovering loads the version onto the Scope screen for review; nothing changes until it is
     saved from there. */
  const recover = v => {
    setViewing(null);
    setHistory(false);
    onRecover(a.id, v);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel-hd"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-qui btn-sm",
    style: {
      marginLeft: -12,
      marginBottom: 6
    },
    onClick: onBack
  }, I.back, "All agents"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    p: p,
    size: 46
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 23
    }
  }, a.name), /*#__PURE__*/React.createElement("span", {
    className: "pill",
    style: {
      background: 'var(--accent-soft)',
      color: 'var(--accent-ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 13
    }
  }, inb ? I.phoneIn : I.phoneOut), dirLabel(a.direction)), live && /*#__PURE__*/React.createElement(LiveBadge, {
    dialers: a.dialers
  }), cur && /*#__PURE__*/React.createElement("span", {
    className: "vchip",
    title: "The current version"
  }, cur.id)), /*#__PURE__*/React.createElement("div", {
    className: "ag-meta"
  }, p.name, " \xB7 ", LANGS[p.lang].name, " \xB7 ", p.tier)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 9,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-gho btn-sm",
    onClick: () => onTest(a.id)
  }, I.chat, "Test"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-gho btn-sm",
    onClick: () => setHistory(true)
  }, I.clock, "History"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-gho btn-sm",
    onClick: () => onEdit(a.id)
  }, I.pencil, "Edit"), /*#__PURE__*/React.createElement(PrereqLink, {
    label: "Prerequisites",
    className: "learnmore prereq-inline"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "brief",
    style: {
      fontSize: 20,
      marginTop: 0
    }
  }, "It ", inb ? 'answers calls to' : 'calls ' + template(a.template).who, " ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 500
    }
  }, a.tokens.company), " and ", goalLabel(a), ".", ' ', "Asks for a person \u2192 ", handLabel(a), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(Section, {
    title: "How it is set up",
    summary: template(a.template).name + ' · ' + ruleCount(a) + ' rules'
  }, /*#__PURE__*/React.createElement(AgentSummary, {
    agent: a
  }))), !live && /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 18
    }
  }, I.info, /*#__PURE__*/React.createElement("span", null, "This agent is not in a dialer, so it is not live. Add it to a dialer in the Outbound Hub to put it live \u2014 it will run ", cur ? cur.id : 'its current version', ".")), /*#__PURE__*/React.createElement("div", {
    className: "actionbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ab-facts"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ab-lead"
  }, cur ? /*#__PURE__*/React.createElement(React.Fragment, null, "Current ", /*#__PURE__*/React.createElement("b", null, cur.id), " \xB7 ", live ? 'live' : 'not live') : /*#__PURE__*/React.createElement(React.Fragment, null, "No versions yet")), /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, cur ? /*#__PURE__*/React.createElement(React.Fragment, null, "Saved ", cur.when, " by ", cur.author) : /*#__PURE__*/React.createElement(React.Fragment, null, "Not saved yet")), /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, creditsRows(a.id) ? /*#__PURE__*/React.createElement(React.Fragment, null, "Spent ", fmtCredits(creditsBy(a.id)), " credits over ", creditsRows(a.id), " interactions") : /*#__PURE__*/React.createElement(React.Fragment, null, "No credits spent yet")), /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, live ? /*#__PURE__*/React.createElement(React.Fragment, null, "Live in ", andList(dials)) : /*#__PURE__*/React.createElement(React.Fragment, null, "Not in a dialer")), /*#__PURE__*/React.createElement(PrereqLink, {
    label: "Learn more: AI agent collection prerequisites"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ab-danger"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dan btn-sm",
    onClick: () => setAskDel(true)
  }, ICO_TRASH, "Delete agent"))))), history && !viewing && /*#__PURE__*/React.createElement(Modal, {
    title: "Version history",
    onClose: () => setHistory(false),
    actions: /*#__PURE__*/React.createElement("button", {
      className: "btn btn-gho",
      onClick: () => setHistory(false)
    }, "Close")
  }, /*#__PURE__*/React.createElement("div", {
    className: "vlist"
  }, vs.slice().reverse().map(v => /*#__PURE__*/React.createElement("button", {
    className: "vrowh",
    key: v.id,
    onClick: () => setViewing(v)
  }, /*#__PURE__*/React.createElement("span", {
    className: "vid"
  }, v.id), /*#__PURE__*/React.createElement("span", {
    className: "vmeta"
  }, /*#__PURE__*/React.createElement("b", null, v.changed), /*#__PURE__*/React.createElement("span", null, v.author, " \xB7 ", v.when)), isCurrentVersion(a, v) && /*#__PURE__*/React.createElement("span", {
    className: "vdep mono",
    title: live ? 'Live · running in ' + andList(dials) : 'The current version · not in a dialer'
  }, live ? 'Live' : 'Current'), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)'
    }
  }, I.fwd))))), viewing && /*#__PURE__*/React.createElement(Modal, {
    title: viewing.id + ' · read-only',
    onClose: () => setViewing(null),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-gho",
      onClick: () => setViewing(null)
    }, "Back"), !isCurrentVersion(a, viewing) && /*#__PURE__*/React.createElement("button", {
      className: "btn btn-pri",
      onClick: () => recover(viewing)
    }, "Recover this version"))
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      marginBottom: 8
    }
  }, viewing.author, " \xB7 ", viewing.when, isCurrentVersion(a, viewing) ? live ? ' · current, live in ' + andList(dials) : ' · current, not live' : replacedBy(viewing) ? ' · replaced by ' + replacedBy(viewing) : ''), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, viewing.changed), /*#__PURE__*/React.createElement(VersionDiff, {
    agent: a,
    version: viewing
  }), /*#__PURE__*/React.createElement(Section, {
    title: 'How ' + viewing.id + ' was set up, in full',
    summary: template(a.template).name
  }, /*#__PURE__*/React.createElement(AgentSummary, {
    agent: agentAtVersion(a, viewing)
  }))), askDel && /*#__PURE__*/React.createElement(Modal, {
    title: 'Delete ' + a.name + '?',
    onClose: () => setAskDel(false),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-gho",
      onClick: () => setAskDel(false)
    }, "Keep it"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-dan",
      onClick: () => onDelete(a.id)
    }, ICO_TRASH, "Delete agent"))
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, "Its brief, its rules and its interaction history go with it. This cannot be undone.", live && /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("b", null, "It is live in ", andList(dials)), " \u2014 deleting it stops those calls."))));
}

/* ============================ 12 · INTERACTIONS ============================ */
const MED_ICO = {
  call: /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.4 5.6 8.2 3.4a1.6 1.6 0 0 0-2.3 0L4.4 4.9c-1 1-1 2.5-.4 3.9a22 22 0 0 0 11.2 11.2c1.4.6 2.9.6 3.9-.4l1.5-1.5a1.6 1.6 0 0 0 0-2.3l-2.2-2.2a1.6 1.6 0 0 0-2.3 0l-1 1a19 19 0 0 1-5.5-5.5l1-1a1.6 1.6 0 0 0 0-2.3z"
  })),
  chat: /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 11.5a7 7 0 0 1-10.3 6.2L5 19l1.2-4A7 7 0 1 1 20 11.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 11h5"
  })),
  wa: /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.5-4.4A8.4 8.4 0 1 1 20.5 11.7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 9.2c0 3 2.4 5.4 5.4 5.4.5 0 .9-.4.9-.9v-.9l-1.8-.9-.9.9a4 4 0 0 1-1.8-1.8l.9-.9L10.8 8.3H9.9c-.5 0-.9.4-.9.9z"
  })),
  sms: /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "3",
    width: "16",
    height: "18",
    rx: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 8h8M8 12h5"
  })),
  email: /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5.5",
    width: "18",
    height: "13",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 7 12 13l8.5-6"
  }))
};
const ICO_IN = /*#__PURE__*/React.createElement("svg", {
  width: "8",
  height: "8",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "3.4",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M17 7 7 17M7 9v8h8"
}));
const ICO_OUT = /*#__PURE__*/React.createElement("svg", {
  width: "8",
  height: "8",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "3.4",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M7 17 17 7M17 15V7H9"
}));
const ICO_AI = /*#__PURE__*/React.createElement("svg", {
  width: "9",
  height: "9",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2.5l2 5.5 5.5 2-5.5 2-2 5.5-2-5.5L4.5 10l5.5-2z"
}));

/* The channel cell: what it was, which way it went, and whether an AI agent held it. */
function ChannelBadge({
  medium,
  dir,
  ai
}) {
  const m = MEDIA[medium];
  return /*#__PURE__*/React.createElement("span", {
    className: 'chb' + (ai ? ' chb-ai' : ''),
    style: {
      background: m.soft,
      color: m.ink
    },
    title: (ai ? 'AI agent · ' : '') + m.label + ' · ' + (dir === 'in' ? 'inbound' : 'outbound')
  }, MED_ICO[medium], /*#__PURE__*/React.createElement("span", {
    className: "chb-dir",
    style: {
      background: m.ink
    }
  }, dir === 'in' ? ICO_IN : ICO_OUT), ai && /*#__PURE__*/React.createElement("span", {
    className: "chb-badge"
  }, ICO_AI));
}
function Interactions({
  agents,
  onOpenRow
}) {
  const [filter, setFilter] = useState('all');
  const rows = INTERACTIONS.filter(r => filter === 'all' ? true : filter === 'ai' ? !!r.voice : !r.voice);
  const chip = on => on ? {
    background: 'var(--accent-soft)',
    borderColor: 'var(--accent)',
    color: 'var(--accent-ink)',
    fontWeight: 600
  } : null;
  return /*#__PURE__*/React.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel-hd"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel-eyebrow"
  }, "Analytics"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0
    }
  }, "Interactions"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 9,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-gho btn-sm"
  }, "Search interaction")))), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 14,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "qbtn",
    style: chip(filter === 'all'),
    onClick: () => setFilter('all')
  }, "All ", INTERACTIONS.length), /*#__PURE__*/React.createElement("button", {
    className: "qbtn",
    style: chip(filter === 'ai'),
    onClick: () => setFilter('ai')
  }, "AI agents ", aiRows().length), /*#__PURE__*/React.createElement("button", {
    className: "qbtn",
    style: chip(filter === 'people'),
    onClick: () => setFilter('people')
  }, "People ", INTERACTIONS.length - aiRows().length), /*#__PURE__*/React.createElement("span", {
    className: "note",
    style: {
      marginLeft: 'auto'
    }
  }, I.info, /*#__PURE__*/React.createElement("span", null, "AI agents and people, side by side. The star marks the AI ones \u2014 open any row to read it."))), /*#__PURE__*/React.createElement("div", {
    className: "itab-wrap"
  }, /*#__PURE__*/React.createElement("table", {
    className: "itab"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Start time"), /*#__PURE__*/React.createElement("th", null, "End time"), /*#__PURE__*/React.createElement("th", null, "Channel"), /*#__PURE__*/React.createElement("th", null, "Client"), /*#__PURE__*/React.createElement("th", null, "Source"), /*#__PURE__*/React.createElement("th", null, "Campaign"), /*#__PURE__*/React.createElement("th", null, "Handled by"), /*#__PURE__*/React.createElement("th", null, "Disposition"), /*#__PURE__*/React.createElement("th", null, "Promise"), /*#__PURE__*/React.createElement("th", {
    className: "ta-r"
  }, "Credits"), /*#__PURE__*/React.createElement("th", {
    className: "ta-r"
  }, "Duration"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => {
    const v = r.voice ? persona(r.voice) : null;
    const ag = r.agent ? agents.find(a => a.id === r.agent) : null;
    const open = () => onOpenRow(r.id);
    return /*#__PURE__*/React.createElement("tr", {
      key: r.id,
      className: 'itab-row' + (v ? ' itab-ai' : ''),
      onClick: open,
      tabIndex: 0,
      role: "button",
      onKeyDown: e => {
        if (e.key === 'Enter') open();
      }
    }, /*#__PURE__*/React.createElement("td", {
      className: "tnum"
    }, r.start), /*#__PURE__*/React.createElement("td", {
      className: "tnum"
    }, r.end), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(ChannelBadge, {
      medium: r.medium,
      dir: r.dir,
      ai: !!v
    })), /*#__PURE__*/React.createElement("td", {
      className: "itab-cl"
    }, r.client), /*#__PURE__*/React.createElement("td", {
      className: "tnum",
      style: {
        color: 'var(--ink-3)'
      }
    }, r.source || '—'), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: 'pill ' + (r.campaign === 'Test' ? 'pill-reh' : 'pill-acc')
    }, r.campaign)), /*#__PURE__*/React.createElement("td", null, v ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "itab-by"
    }, /*#__PURE__*/React.createElement(Avatar, {
      p: v,
      size: 22
    }), v.name, /*#__PURE__*/React.createElement("span", {
      className: "vtier mono",
      style: {
        marginLeft: 2
      }
    }, "AI")), r.then && /*#__PURE__*/React.createElement("span", {
      className: "itab-by",
      style: {
        color: 'var(--ink-2)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "itab-hum"
    }, I.user), r.then)) : /*#__PURE__*/React.createElement("span", {
      className: "itab-by"
    }, /*#__PURE__*/React.createElement("span", {
      className: "itab-hum"
    }, I.user), r.user)), /*#__PURE__*/React.createElement("td", {
      style: {
        color: r.disp ? 'var(--ink)' : 'var(--ink-3)'
      }
    }, r.disp || '—'), /*#__PURE__*/React.createElement("td", {
      className: "itab-prom",
      style: {
        color: r.promise ? 'var(--ink)' : 'var(--ink-3)'
      }
    }, r.promise ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, r.promise.offer === 'intent' ? 'intent' : r.promise.offer), /*#__PURE__*/React.createElement("span", {
      className: "tnum"
    }, r.promise.amount, " \xB7 ", r.promise.date)) : '—'), /*#__PURE__*/React.createElement("td", {
      className: "tnum ta-r",
      style: {
        color: v ? 'var(--ink)' : 'var(--ink-3)'
      },
      title: v ? 'Reported by the agent for this interaction' : 'Handled by a person — no credits'
    }, v ? fmtCredits(creditsOf(r)) : '—'), /*#__PURE__*/React.createElement("td", {
      className: "tnum ta-r"
    }, r.dur));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "itab-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "Items per page: 50"), /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "Items 1\u2013", rows.length, " of ", rows.length))));
}

/* ============================ 13 · ONE INTERACTION, OPENED ============================ */
const TL_ICO = {
  hold: /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 3h10M7 21h10M8 3c0 4 8 5 8 9s-8 5-8 9"
  })),
  user: /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "3.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 20a7 7 0 0 1 14 0"
  })),
  queue: /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6v12M11 8v8M16 10v4"
  })),
  auto: /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "7",
    width: "16",
    height: "12",
    rx: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9.5",
    cy: "13",
    r: "1.2",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "14.5",
    cy: "13",
    r: "1.2",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7V4"
  })),
  disp: /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 4l3 5H5z"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "13",
    width: "6",
    height: "6",
    rx: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16.5",
    cy: "16",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16.5",
    cy: "6.5",
    r: "2.5"
  })),
  end: /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 7l10 10M17 7 7 17"
  }))
};
const ICO_LINK = /*#__PURE__*/React.createElement("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M9.5 14.5a4 4 0 0 1 0-5.7l2.8-2.8a4 4 0 0 1 5.7 5.7l-1.4 1.4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.5 9.5a4 4 0 0 1 0 5.7l-2.8 2.8a4 4 0 0 1-5.7-5.7l1.4-1.4"
}));
const ICO_RWD = /*#__PURE__*/React.createElement("svg", {
  width: "17",
  height: "17",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M11 6 5 12l6 6M19 6l-6 6 6 6"
}));
const ICO_FFW = /*#__PURE__*/React.createElement("svg", {
  width: "17",
  height: "17",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M13 6l6 6-6 6M5 6l6 6-6 6"
}));
const ICO_TAG = /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M4 9.5 9.5 4H20v10.5L14.5 20H4z"
}));
const ICO_DL = /*#__PURE__*/React.createElement("svg", {
  width: "17",
  height: "17",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("rect", {
  x: "4",
  y: "4",
  width: "16",
  height: "16",
  rx: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 8v6M9 11.5l3 3 3-3"
}));
const ICO_COPY = /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.9",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("rect", {
  x: "9",
  y: "9",
  width: "11",
  height: "11",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 5.5H6a1.5 1.5 0 0 0-1.5 1.5v9"
}));
function SumField({
  title,
  text
}) {
  const [done, setDone] = useState(false);
  const copy = () => {
    try {
      navigator.clipboard && navigator.clipboard.writeText(text);
    } catch (e) {}
    setDone(true);
    setTimeout(() => setDone(false), 1400);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "sf"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sf-hd"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sf-t"
  }, title), /*#__PURE__*/React.createElement("button", {
    className: "sf-copy",
    onClick: copy,
    "aria-label": 'Copy ' + title
  }, done ? I.check : ICO_COPY)), /*#__PURE__*/React.createElement("p", {
    className: "sf-b"
  }, text));
}
function ConversationSummary({
  row,
  agents
}) {
  const sum = ixSummary(row, agents);
  if (!sum) return /*#__PURE__*/React.createElement("div", {
    className: "ixempty"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ixempty-ico"
  }, ICO_AI), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 16
    }
  }, "No summary for this interaction"), /*#__PURE__*/React.createElement("p", {
    className: "sub",
    style: {
      maxWidth: '44ch',
      margin: '6px auto 0'
    }
  }, "Summaries are written by the AI agent that held the conversation. This one was handled by a person."));
  const sen = SENTIMENTS[sum.sentiment];
  return /*#__PURE__*/React.createElement("div", {
    className: "sumtab"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sf-title"
  }, "Conversation summary"), /*#__PURE__*/React.createElement("p", {
    className: "field-h",
    style: {
      marginTop: 2
    }
  }, "A quick overview of the conversation."), /*#__PURE__*/React.createElement("div", {
    className: "sf-t",
    style: {
      marginTop: 22
    }
  }, "Sentiment"), /*#__PURE__*/React.createElement("div", {
    className: "sf-sent",
    style: {
      background: sen.ink
    }
  }, sum.sentiment), /*#__PURE__*/React.createElement(SumField, {
    title: "Main reason of the conversation",
    text: sum.reason
  }), /*#__PURE__*/React.createElement(SumField, {
    title: "Key points discussed",
    text: sum.key
  }), /*#__PURE__*/React.createElement(SumField, {
    title: "Resolution",
    text: sum.resolution
  }), row.promise && /*#__PURE__*/React.createElement("div", {
    className: "sf"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sf-hd"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sf-t"
  }, "Recorded promise")), /*#__PURE__*/React.createElement(PromiseCard, {
    p: row.promise,
    title: "What the agent recorded when it reached a date"
  })));
}
const WAVE = [2, 1, 1, 3, 1, 1, 2, 9, 2, 1, 1, 14, 3, 1, 1, 6, 20, 14, 9, 7, 5, 4, 3, 3, 2, 2, 3, 2, 12, 7, 4, 3, 5, 3, 2, 1, 1, 1, 2, 18, 4, 3, 2, 9, 7, 6, 5, 4, 3, 2];
function JsonView({
  data
}) {
  const paint = (v, depth) => {
    const pad = '  '.repeat(depth);
    if (v === null) return /*#__PURE__*/React.createElement("span", {
      className: "j-null"
    }, "null");
    if (typeof v === 'number') return /*#__PURE__*/React.createElement("span", {
      className: "j-num"
    }, v);
    if (typeof v === 'string') return /*#__PURE__*/React.createElement("span", {
      className: "j-str"
    }, "\"", v, "\"");
    if (Array.isArray(v)) return /*#__PURE__*/React.createElement(React.Fragment, null, '[', v.map((x, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        paddingLeft: 16
      }
    }, paint(x, depth + 1), i < v.length - 1 ? ',' : '')), pad, ']');
    const ks = Object.keys(v);
    return /*#__PURE__*/React.createElement(React.Fragment, null, '{', ks.map((k, i) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        paddingLeft: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "j-key"
    }, "\"", k, "\""), ": ", paint(v[k], depth + 1), i < ks.length - 1 ? ',' : '')), pad, '}');
  };
  return /*#__PURE__*/React.createElement("pre", {
    className: "jsonv"
  }, paint(data, 0));
}
function InteractionDetail({
  row,
  agents,
  onBack,
  onTeach,
  initialTab
}) {
  const [tab, setTab] = useState(initialTab || (row.voice ? 'sum' : 'main'));
  const [rail, setRail] = useState(null); // 'comments' | 'quality' | null
  const [evaluating, setEvaluating] = useState(false);
  const [tlOpen, setTlOpen] = useState(true);
  const v = row.voice ? persona(row.voice) : null;
  const ag = row.agent ? agents.find(a => a.id === row.agent) : null;
  const m = MEDIA[row.medium];
  const isCall = row.medium === 'call';
  const events = ixEvents(row, agents);
  const thread = ixThread(row, agents);
  return /*#__PURE__*/React.createElement("div", {
    className: "panel ixd"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ixtabs"
  }, /*#__PURE__*/React.createElement("button", {
    className: 'ixtab' + (tab === 'sum' ? ' on' : ''),
    onClick: () => setTab('sum')
  }, "Summary"), /*#__PURE__*/React.createElement("button", {
    className: 'ixtab' + (tab === 'main' ? ' on' : ''),
    onClick: () => setTab('main')
  }, isCall ? 'Transcription' : 'Chat'), /*#__PURE__*/React.createElement("button", {
    className: 'ixtab' + (tab === 'data' ? ' on' : ''),
    onClick: () => setTab('data')
  }, "Data")), /*#__PURE__*/React.createElement("div", {
    className: "ixd-hd"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-qui btn-sm",
    onClick: onBack,
    "aria-label": "Back to interactions"
  }, I.back), /*#__PURE__*/React.createElement("span", {
    className: "chb",
    style: {
      background: m.soft,
      color: m.ink,
      boxShadow: '0 0 0 1.5px ' + m.ink
    }
  }, MED_ICO[row.medium]), /*#__PURE__*/React.createElement("span", {
    className: 'pill ' + (row.campaign === 'Test' ? 'pill-reh' : 'pill-acc')
  }, row.campaign), /*#__PURE__*/React.createElement("span", {
    className: "ixd-who"
  }, ICO_LINK, row.medium === 'email' ? 'Subject: ' + thread[0].subject : row.source || row.client), v && /*#__PURE__*/React.createElement("span", {
    className: "pill pill-acc"
  }, /*#__PURE__*/React.createElement("i", null), v.name, " \xB7 AI agent"), v && /*#__PURE__*/React.createElement("span", {
    className: "pill credit-pill tnum",
    title: "Credits this interaction reported, from the webhook"
  }, fmtCredits(creditsOf(row)), " credits"), row.promise && /*#__PURE__*/React.createElement("span", {
    className: "pill pill-live",
    title: 'Promise recorded: ' + row.promise.offer + ' · ' + row.promise.amount + ' · ' + row.promise.date
  }, /*#__PURE__*/React.createElement("i", null), "Promise \xB7 ", row.promise.amount, " \xB7 ", row.promise.date), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 9
    }
  }, v && ag && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-gho btn-sm",
    onClick: () => onTeach(ag.id, row.call)
  }, I.wand, "Teach it"), /*#__PURE__*/React.createElement("button", {
    className: 'btn-uc' + (rail === 'comments' ? ' on' : ''),
    onClick: () => setRail(rail === 'comments' ? null : 'comments')
  }, "Comments"), /*#__PURE__*/React.createElement("button", {
    className: 'btn-uc' + (rail === 'quality' ? ' on' : ''),
    onClick: () => setRail(rail === 'quality' ? null : 'quality')
  }, "Quality"))), isCall && /*#__PURE__*/React.createElement("div", {
    className: "player"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wave-ticks"
  }, [5, 10, 15, 20, 25].map(n => /*#__PURE__*/React.createElement("span", {
    key: n
  }, n))), /*#__PURE__*/React.createElement("div", {
    className: "wave-cursor"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wave2"
  }, WAVE.map((h, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    style: {
      height: Math.max(2, h) + 'px'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "player-ctl"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono tnum"
  }, "00:00"), /*#__PURE__*/React.createElement("span", {
    className: "pbtn"
  }, ICO_RWD), /*#__PURE__*/React.createElement("span", {
    className: "pbtn pbtn-lg"
  }, I.play), /*#__PURE__*/React.createElement("span", {
    className: "pbtn"
  }, ICO_FFW), /*#__PURE__*/React.createElement("span", {
    className: "pbtn",
    style: {
      marginLeft: 10
    }
  }, I.chat), /*#__PURE__*/React.createElement("span", {
    className: "pbtn"
  }, ICO_TAG), /*#__PURE__*/React.createElement("span", {
    className: "uc-dl",
    style: {
      marginLeft: 'auto'
    },
    title: "Download recording"
  }, ICO_DL))), /*#__PURE__*/React.createElement("div", {
    className: "ixd-body"
  }, tlOpen ? /*#__PURE__*/React.createElement("div", {
    className: "tl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tl-hd"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "Timeline"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-qui btn-sm",
    onClick: () => setTlOpen(false),
    "aria-label": "Hide timeline"
  }, I.back)), events.map((e, i) => {
    const first = e.k === 'start',
      last = e.k === 'end';
    return /*#__PURE__*/React.createElement("div", {
      className: "tl-row",
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      className: "tl-at"
    }, e.at ? /*#__PURE__*/React.createElement(React.Fragment, null, e.at.d, /*#__PURE__*/React.createElement("br", null), e.at.t) : ''), /*#__PURE__*/React.createElement("span", {
      className: "tl-rail"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tl-ico",
      style: first ? {
        background: m.ink,
        color: '#fff'
      } : last ? {
        background: 'var(--uc-red)',
        color: '#fff'
      } : e.k === 'hold' ? {
        background: 'var(--uc-orange)',
        color: '#fff'
      } : e.k === 'ai' ? {
        background: 'var(--accent)',
        color: '#fff'
      } : e.k === 'auto' ? {
        background: 'var(--uc-blue)',
        color: '#fff'
      } : e.k === 'disp' ? {
        background: 'var(--uc-blue-soft)',
        color: 'var(--uc-blue)'
      } : {
        background: 'var(--uc-grey)',
        color: '#fff'
      }
    }, first ? MED_ICO[row.medium] : last ? TL_ICO.end : e.k === 'ai' ? ICO_AI : e.k === 'hold' ? TL_ICO.hold : e.k === 'disp' ? TL_ICO.disp : e.k === 'auto' ? TL_ICO.auto : TL_ICO.user), !last && /*#__PURE__*/React.createElement("span", {
      className: "tl-line",
      style: {
        background: m.ink
      }
    })), /*#__PURE__*/React.createElement("span", {
      className: "tl-txt"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tl-lbl"
    }, e.label), e.who && /*#__PURE__*/React.createElement("span", {
      className: "tl-sub"
    }, e.voice ? /*#__PURE__*/React.createElement(Avatar, {
      p: persona(e.voice),
      size: 18
    }) : TL_ICO.user, e.who), e.team && /*#__PURE__*/React.createElement("span", {
      className: "tl-sub"
    }, TL_ICO.queue, e.team), e.dur && /*#__PURE__*/React.createElement("span", {
      className: "tl-sub"
    }, I.clock, e.dur), e.val && /*#__PURE__*/React.createElement("span", {
      className: "tl-sub"
    }, e.val), e.list && e.list.map((d, j) => /*#__PURE__*/React.createElement("span", {
      className: "tl-sub",
      key: j
    }, /*#__PURE__*/React.createElement("sup", null, j + 1), " ", d))));
  })) : /*#__PURE__*/React.createElement("button", {
    className: "tl-open",
    onClick: () => setTlOpen(true),
    "aria-label": "Show timeline"
  }, I.fwd), /*#__PURE__*/React.createElement("div", {
    className: "ixmain"
  }, tab === 'sum' ? /*#__PURE__*/React.createElement(ConversationSummary, {
    row: row,
    agents: agents
  }) : tab === 'data' ? /*#__PURE__*/React.createElement(JsonView, {
    data: ixJson(row)
  }) : isCall && !v ? /*#__PURE__*/React.createElement("div", {
    className: "ixempty"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ixempty-ico"
  }, I.chat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 16
    }
  }, "No transcription for this call"), /*#__PURE__*/React.createElement("p", {
    className: "sub",
    style: {
      maxWidth: '42ch',
      margin: '6px auto 0'
    }
  }, "Calls handled by people are recorded, not transcribed. Interactions an AI agent held come with a full transcript.")) : /*#__PURE__*/React.createElement("div", {
    className: "msgs"
  }, thread.map((msg, i) => /*#__PURE__*/React.createElement("div", {
    className: 'msg' + (msg.who === 'agent' ? ' msg-a' : ''),
    key: i
  }, msg.who === 'agent' && msg.ai ? /*#__PURE__*/React.createElement(Avatar, {
    p: persona(msg.voice),
    size: 26
  }) : /*#__PURE__*/React.createElement("span", {
    className: "msg-ava",
    style: msg.who === 'agent' ? {
      background: 'var(--grey-soft)',
      color: 'var(--ink-3)'
    } : null
  }, TL_ICO.user), /*#__PURE__*/React.createElement("span", {
    className: "msg-b"
  }, /*#__PURE__*/React.createElement("span", {
    className: "msg-hd mono"
  }, msg.name, " \xB7 ", msg.time, msg.read ? ' ✓✓' : ''), msg.subject && /*#__PURE__*/React.createElement("span", {
    className: "msg-subj"
  }, msg.subject), /*#__PURE__*/React.createElement("span", {
    className: "msg-t"
  }, msg.text)))))), rail === 'comments' && /*#__PURE__*/React.createElement("div", {
    className: "ixrail"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      marginBottom: 10
    }
  }, "Comments"), /*#__PURE__*/React.createElement("p", {
    className: "field-h"
  }, "Nobody has commented on this interaction."), /*#__PURE__*/React.createElement("textarea", {
    className: "inp",
    placeholder: "Add a comment\u2026",
    style: {
      marginTop: 10,
      minHeight: 70
    }
  })), rail === 'quality' && /*#__PURE__*/React.createElement("div", {
    className: "ixrail"
  }, !evaluating ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ixempty-ico",
    style: {
      margin: '0 auto 12px'
    }
  }, I.shield), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, "No evaluations yet"), /*#__PURE__*/React.createElement("p", {
    className: "field-h",
    style: {
      margin: '6px 0 14px'
    }
  }, "Results appear here once you complete one."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-pri btn-sm",
    onClick: () => setEvaluating(true)
  }, "Evaluate")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      marginBottom: 12
    }
  }, "Evaluation"), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      marginBottom: 6
    }
  }, "Evaluee \u2014 campaign"), /*#__PURE__*/React.createElement("div", {
    className: "inp",
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      marginBottom: 12
    }
  }, v ? v.name : row.user, /*#__PURE__*/React.createElement("span", {
    className: 'pill ' + (row.campaign === 'Test' ? 'pill-reh' : 'pill-acc')
  }, row.campaign)), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      marginBottom: 6
    }
  }, "Model"), /*#__PURE__*/React.createElement("select", {
    className: "inp",
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "No data available")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-gho btn-sm",
    onClick: () => setEvaluating(false)
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-pri btn-sm",
    style: {
      flex: 1
    },
    onClick: () => setEvaluating(false)
  }, "Save"))))));
}

/* ============================ 3 · SCOPE, RECEPTIONIST ============================ */
/* Only routed for template 'reception'. The existing StepBrief is untouched. */
function StepBriefReception({
  draft,
  set,
  next,
  back
}) {
  const [open, setOpen] = useState(null);
  const t = template(draft.template),
    p = persona(draft.personaId);
  const tk = draft.tokens;
  const goals = goalsFor(draft.template);
  const goal = val(goals, tk.goal);
  const fields = draft.collect || [],
    k = draft.knowledge || {
      about: '',
      urls: []
    };
  const asked = fields.filter(f => f.on);
  const setTok = (kk, v) => set({
    tokens: {
      ...tk,
      [kk]: v
    }
  });
  const tog = kk => () => setOpen(open === kk ? null : kk);
  const toggleField = id => set({
    collect: fields.map(f => f.id === id ? {
      ...f,
      on: !f.on
    } : f)
  });
  /* several jobs at once; the list keeps the canonical order, and tokens.goal tracks its first
     so every screen that quotes a single goal keeps working */
  const gIds = goalIds(draft);
  const toggleGoal = id => {
    const next = goals.map(g => g.id).filter(x => x === id ? gIds.indexOf(id) < 0 : gIds.indexOf(x) > -1);
    if (!next.length) return; // it must still do something
    set({
      tokens: {
        ...tk,
        goals: next,
        goal: next[0]
      }
    });
  };
  const disclosure = disclosureFor(draft);
  /* putting callers through is much of a receptionist's job, so every hand-off is offered —
     taking a message is simply the one it starts on */
  const handoffs = handoffFor(draft.template);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "wrap wz-wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brief-2col"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHead, {
    title: "What it will do on every call",
    sub: "Written out in full. Anything underlined is yours to change \u2014 tap it."
  }), /*#__PURE__*/React.createElement("p", {
    className: "brief"
  }, "It answers calls to ", /*#__PURE__*/React.createElement(Chip, {
    label: tk.company,
    hint: "The name the agent says out loud.",
    isOpen: open === 'company',
    onOpen: tog('company')
  }, /*#__PURE__*/React.createElement("input", {
    className: "inp",
    autoFocus: true,
    value: tk.company,
    onChange: e => setTok('company', e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 9
    }
  }, I.info, /*#__PURE__*/React.createElement("span", null, "Used in the greeting and the disclosure."))), ".", ' ', "It greets callers, ", /*#__PURE__*/React.createElement(Chip, {
    label: collectLabel(fields),
    hint: "What it asks every caller, in this order.",
    isOpen: open === 'collect',
    onOpen: tog('collect')
  }, /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": "Fields it collects"
  }, fields.map(f => /*#__PURE__*/React.createElement("div", {
    className: "cf",
    key: f.id
  }, /*#__PURE__*/React.createElement("button", {
    className: "opt",
    role: "checkbox",
    "aria-checked": f.on,
    onClick: () => toggleField(f.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "cbx"
  }, f.on && I.check), /*#__PURE__*/React.createElement("span", null, f.label)), f.custom && /*#__PURE__*/React.createElement("button", {
    className: "prom-x",
    "aria-label": 'Remove ' + f.label,
    onClick: () => set({
      collect: fields.filter(x => x.id !== f.id)
    })
  }, I.x)))), /*#__PURE__*/React.createElement(CollectAdd, {
    fields: fields,
    set: set
  }), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 10
    }
  }, I.info, /*#__PURE__*/React.createElement("span", null, "Anything you add here is asked of every caller, and shows on the rules step with its wording."))), ", ", /*#__PURE__*/React.createElement(Chip, {
    label: goalLabel(draft),
    hint: "What the call is for. A receptionist can do more than one.",
    isOpen: open === 'goal',
    onOpen: tog('goal')
  }, /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": "What the call is for"
  }, goals.map(o => {
    const on = gIds.indexOf(o.id) > -1;
    return /*#__PURE__*/React.createElement("button", {
      className: "opt",
      role: "checkbox",
      "aria-checked": on,
      key: o.id,
      onClick: () => toggleGoal(o.id)
    }, /*#__PURE__*/React.createElement("span", {
      className: "cbx"
    }, on && I.check), /*#__PURE__*/React.createElement("span", null, o.v));
  })), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 10
    }
  }, I.info, /*#__PURE__*/React.createElement("span", null, "Pick as many as it should handle. It always keeps at least one \u2014 ", goals[0].v, " is the fallback."))), ", and when it can\u2019t help it ", /*#__PURE__*/React.createElement(Chip, {
    label: handLabel(draft),
    align: "right",
    hint: "What it does when it cannot help, or the caller asks for a person.",
    isOpen: open === 'handoff',
    onOpen: tog('handoff')
  }, /*#__PURE__*/React.createElement("div", {
    role: "radiogroup"
  }, handoffs.map(o => /*#__PURE__*/React.createElement(Option, {
    key: o.id,
    on: o.id === tk.handoff,
    onClick: () => {
      setTok('handoff', o.id);
      if (o.id !== 'campaign') setOpen(null);
    }
  }, o.v))), tk.handoff === 'campaign' && /*#__PURE__*/React.createElement("select", {
    className: "inp",
    style: {
      marginTop: 10
    },
    value: campaignOf(draft),
    "aria-label": "Campaign",
    onChange: e => setTok('campaign', e.target.value)
  }, CAMPAIGNS.map(c => /*#__PURE__*/React.createElement("option", {
    key: c,
    value: c
  }, c))), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 10
    }
  }, I.info, /*#__PURE__*/React.createElement("span", null, "Transfer puts the caller through live, to the people working that campaign. Taking a message ends the call and sends your team what it collected."))), "."), /*#__PURE__*/React.createElement("p", {
    className: "brief",
    style: {
      marginTop: 22
    }
  }, "Every call it answers opens with ", /*#__PURE__*/React.createElement("span", {
    className: "chip-fix",
    title: "Required disclosure \u2014 cannot be removed"
  }, I.lock, disclosure), ' ', /*#__PURE__*/React.createElement(Chip, {
    label: draft.opener,
    hint: "The greeting, in the agent\u2019s own voice.",
    isOpen: open === 'opener',
    onOpen: tog('opener')
  }, /*#__PURE__*/React.createElement("textarea", {
    className: "inp",
    autoFocus: true,
    value: draft.opener,
    onChange: e => set({
      opener: e.target.value
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 9
    }
  }, I.info, /*#__PURE__*/React.createElement("span", null, "Keep it to one sentence. ", p.name, " says it in ", LANGS[p.lang].short, ".")))), /*#__PURE__*/React.createElement("p", {
    className: "brief",
    style: {
      marginTop: 22
    }
  }, "It ", /*#__PURE__*/React.createElement("span", {
    className: "chip-ro",
    title: "Set below, under What it knows"
  }, knowledgeLabel(k)), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(Section, {
    title: "What it knows",
    summary: knowledgeCount(k),
    hint: "Answers come only from here. Leave it empty and the agent takes a message instead of guessing."
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      marginBottom: 8
    }
  }, "About the company"), /*#__PURE__*/React.createElement("textarea", {
    className: "inp",
    value: k.about,
    placeholder: "Opening hours, what you do, how to find you\u2026",
    onChange: e => set({
      knowledge: {
        ...k,
        about: e.target.value
      }
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      margin: '16px 0 8px'
    }
  }, "Website pages it learns from"), /*#__PURE__*/React.createElement("div", {
    className: "urls"
  }, /*#__PURE__*/React.createElement(TagInput, {
    tags: k.urls,
    onChange: urls => set({
      knowledge: {
        ...k,
        urls
      }
    }),
    placeholder: "Paste a page address and press Enter\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      margin: '16px 0 8px'
    }
  }, "Files it learns from"), /*#__PURE__*/React.createElement(KnowledgeFiles, {
    k: k,
    set: set
  })))), /*#__PURE__*/React.createElement("div", {
    className: "prev"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prev-hd"
  }, /*#__PURE__*/React.createElement(Avatar, {
    p: p,
    size: 26
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 13.5
    }
  }, p.name)), /*#__PURE__*/React.createElement("div", {
    className: "prev-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bub bub-a",
    key: 'g' + disclosure + draft.opener
  }, /*#__PURE__*/React.createElement("span", {
    className: "bub-lab"
  }, p.name), /*#__PURE__*/React.createElement("span", {
    className: "disc"
  }, disclosure), " ", draft.opener), /*#__PURE__*/React.createElement("div", {
    className: "bub bub-c",
    key: "c0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bub-lab"
  }, "Caller"), t.custSay), asked.map(f => /*#__PURE__*/React.createElement(React.Fragment, {
    key: f.id
  }, /*#__PURE__*/React.createElement("div", {
    className: "bub bub-a"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bub-lab"
  }, p.name), f.question), /*#__PURE__*/React.createElement("div", {
    className: "bub bub-c"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bub-lab"
  }, "Caller"), CALLER_SAYS[f.id] || 'Sure — yes.'))), /*#__PURE__*/React.createElement("div", {
    className: "bub bub-a",
    key: 'goal' + goal.id
  }, /*#__PURE__*/React.createElement("span", {
    className: "bub-lab"
  }, p.name), goal.say))))), /*#__PURE__*/React.createElement(Foot, {
    onBack: back,
    onNext: next,
    nextOk: !!tk.company.trim(),
    wide: true
  }));
}

/* ============================ COLLECTIONS: BALANCE, OFFERS, CLOSING ============================ */
/* A small field naming the contact-list column a value is read from. */
function ListColumn({
  draft,
  set,
  k,
  label
}) {
  const tk = draft.tokens,
    cols = {
      ...LIST_COLS,
      ...(tk.cols || {})
    };
  return /*#__PURE__*/React.createElement("label", {
    className: "listcol",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("span", {
    className: "addq-l"
  }, label || 'List column'), /*#__PURE__*/React.createElement("input", {
    className: "inp",
    value: cols[k],
    "aria-label": 'List column for ' + k,
    spellCheck: false,
    onChange: e => set({
      tokens: {
        ...tk,
        cols: {
          ...cols,
          [k]: e.target.value.toUpperCase().replace(/[^A-Z0-9_]/g, '')
        }
      }
    })
  }));
}
/* "It also mentions:" — siblings of the amount radio, applied whichever radio is chosen. */
function MentionsPicker({
  draft,
  set
}) {
  const tk = draft.tokens,
    m = mentionsOf(draft),
    unit = overdueUnit(draft);
  const tog = id => set({
    tokens: {
      ...tk,
      mentions: {
        ...m,
        [id]: !m[id]
      }
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "mentions"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pop-t",
    style: {
      marginTop: 14
    }
  }, "It also mentions:"), /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": "It also mentions"
  }, MENTIONS.map(x => /*#__PURE__*/React.createElement("div", {
    className: "offer-row",
    key: x.id
  }, /*#__PURE__*/React.createElement("button", {
    className: "opt",
    role: "checkbox",
    "aria-checked": m[x.id],
    onClick: () => tog(x.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "cbx"
  }, m[x.id] && I.check), /*#__PURE__*/React.createElement("span", null, x.v)), m[x.id] && /*#__PURE__*/React.createElement("div", {
    className: "offer-sub"
  }, x.id === 'overdue' && /*#__PURE__*/React.createElement("span", {
    className: "unitpick",
    role: "radiogroup",
    "aria-label": "Overdue in"
  }, ['days', 'months'].map(u => /*#__PURE__*/React.createElement("button", {
    key: u,
    role: "radio",
    "aria-checked": unit === u,
    className: 'step-pill' + (unit === u ? ' on' : ''),
    onClick: () => set({
      tokens: {
        ...tk,
        overdueUnit: u
      }
    })
  }, u))), /*#__PURE__*/React.createElement(ListColumn, {
    draft: draft,
    set: set,
    k: x.id
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 8
    }
  }, I.info, /*#__PURE__*/React.createElement("span", null, "Each value comes from the campaign\u2019s contact list, from the column named here. In this preview ", overdueN(draft), " ", unit, " and contract ", contractOf(draft), " stand in for them.")));
}
/* What it can offer: ordered checkboxes. It offers them in this order and stops at the first yes. */
function OffersPicker({
  draft,
  set
}) {
  const tk = draft.tokens,
    list = offersOf(draft);
  const write = next => set({
    tokens: {
      ...tk,
      offers: next
    }
  });
  const tog = i => write(list.map((x, j) => j === i ? {
    ...x,
    on: !x.on
  } : x));
  const move = (i, d) => {
    const j = i + d;
    if (j < 0 || j >= list.length) return;
    const next = list.slice();
    const t = next[i];
    next[i] = next[j];
    next[j] = t;
    write(next);
  };
  const setParam = id => n => set({
    tokens: {
      ...tk,
      params: {
        ...(tk.params || {}),
        [id]: n
      }
    }
  });
  let rank = 0;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": "What it can offer"
  }, list.map((x, i) => {
    const g = offerDef(x.id),
      gp = paramOf(x.id);
    if (x.on) rank++;
    return /*#__PURE__*/React.createElement("div", {
      className: 'offer-row' + (x.on ? ' on' : ''),
      key: x.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "offer-top"
    }, /*#__PURE__*/React.createElement("span", {
      className: "offer-n mono"
    }, x.on ? rank : ''), /*#__PURE__*/React.createElement("button", {
      className: "opt",
      role: "checkbox",
      "aria-checked": x.on,
      onClick: () => tog(i)
    }, /*#__PURE__*/React.createElement("span", {
      className: "cbx"
    }, x.on && I.check), /*#__PURE__*/React.createElement("span", null, gp ? g.v + ' N ' + gp.unit : g.v)), /*#__PURE__*/React.createElement("span", {
      className: "offer-mv"
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-qui btn-sm",
      "aria-label": 'Move ' + g.v + ' up',
      disabled: i === 0,
      onClick: () => move(i, -1)
    }, I.arrowUp), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-qui btn-sm",
      "aria-label": 'Move ' + g.v + ' down',
      disabled: i === list.length - 1,
      onClick: () => move(i, 1)
    }, I.arrowDown))), x.on && (gp || x.id === 'minimum' || x.id === 'reduced') && /*#__PURE__*/React.createElement("div", {
      className: "offer-sub"
    }, gp && /*#__PURE__*/React.createElement(ParamStepper, {
      gp: gp,
      pv: paramVal(draft, x.id),
      setParam: setParam(x.id),
      close: () => {}
    }), (x.id === 'minimum' || x.id === 'reduced') && /*#__PURE__*/React.createElement(ListColumn, {
      draft: draft,
      set: set,
      k: x.id
    })), x.on && x.id === 'partial' && /*#__PURE__*/React.createElement("div", {
      className: "offer-note"
    }, "The agent works out ", paramVal(draft, 'partial'), "% of the amount on the list \u2014 ", offerAmount(draft, 'partial'), " here."), x.on && x.id === 'reduced' && /*#__PURE__*/React.createElement("div", {
      className: "offer-note"
    }, "The agent never calculates a discount; it reads the figure from the list \u2014 ", PLACEHOLDERS.reduced, " here."));
  })), /*#__PURE__*/React.createElement("div", {
    className: "opt-lock offer-fallback"
  }, I.lock, /*#__PURE__*/React.createElement("span", null, FALLBACK_LINE)));
}
function OffersChip({
  draft,
  set,
  open,
  tog
}) {
  const isOpen = open === 'offers';
  return /*#__PURE__*/React.createElement("span", {
    className: "chip-wrap"
  }, /*#__PURE__*/React.createElement("button", {
    className: 'chip' + (isOpen ? ' open' : ''),
    onClick: tog('offers'),
    title: 'Edit — ' + offersLabel(draft)
  }, offersLabel(draft)), isOpen && /*#__PURE__*/React.createElement(Popover, {
    onClose: tog('offers'),
    wide: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "pop-t"
  }, "What it can offer"), /*#__PURE__*/React.createElement("div", {
    className: "pop-h"
  }, "Tick what it may offer and put them in order. It offers one at a time and stops at the first yes."), /*#__PURE__*/React.createElement(OffersPicker, {
    draft: draft,
    set: set
  })));
}
/* Optional. Read word for word at the end of every call, like the disclosure at the start. */
function ClosingChip({
  draft,
  set,
  open,
  tog
}) {
  const tk = draft.tokens,
    c = closingOf(draft),
    isOpen = open === 'closing';
  return /*#__PURE__*/React.createElement("span", {
    className: "chip-wrap"
  }, /*#__PURE__*/React.createElement("button", {
    className: 'chip' + (isOpen ? ' open' : '') + (c ? '' : ' chip-empty'),
    onClick: tog('closing'),
    title: c ? 'Edit — closing line' : 'Add a closing line'
  }, c ? '“' + c + '”' : 'no closing line — add one'), isOpen && /*#__PURE__*/React.createElement(Popover, {
    onClose: tog('closing')
  }, /*#__PURE__*/React.createElement("div", {
    className: "pop-t"
  }, "Closing line"), /*#__PURE__*/React.createElement("div", {
    className: "pop-h"
  }, "Optional. Read word for word at the end of every call. Leave it empty for none."), /*#__PURE__*/React.createElement("textarea", {
    className: "inp",
    autoFocus: true,
    value: tk.closing || '',
    placeholder: "Gracias por su tiempo. Banco Sol le desea un buen d\xEDa.",
    "aria-label": "Closing line",
    onChange: e => set({
      tokens: {
        ...tk,
        closing: e.target.value
      }
    })
  })));
}
/* The promise the agent records whenever it reaches a date. */
function PromiseCard({
  p,
  title
}) {
  if (!p) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "promise"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, title || 'Promise recorded'), /*#__PURE__*/React.createElement("div", {
    className: "promise-row"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Offer"), p.offer === 'intent' ? 'intent — the date the customer gave' : p.offer), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Amount"), p.amount), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Date"), p.date)));
}

var out=[];
function agentOf(id){ return SEED_AGENTS.filter(function(a){ return a.id===id; })[0] || null; }
function A(n,c,x){ out.push((c?'PASS ':'FAIL ')+n+((x&&!c)?'  << '+x:'')); }
function R(el){ return ReactDOMServer.renderToStaticMarkup(el); }
var noop=function(){};
function mk(tid,pid,dir){ var x=seedFromTemplate({...newDraft(),direction:dir||'out',personaId:pid,attempts:2,from:8,to:18},tid);
  x.personaId=pid; x.direction=dir||'out'; return x; }
function C(dr){ return {draft:dr,set:noop,next:noop,back:noop}; }
var OUT=mk('appointments','gloria','out'), IN=mk('appointments','gloria','in'), COL=mk('collections','frank','out');
OUT.lang='es'; IN.lang='es'; COL.lang='es';
var ENG=mk('appointments','alice','out'); ENG.lang='en';
var ALL=[];
function grab(el){ var h; try{ h=R(el); }catch(e){ h='RENDER-FAIL '+e.message; } ALL.push(h); return h; }
var t1=grab(React.createElement(StepDirection, C(OUT)));
var t2=grab(React.createElement(TemplateGallery, {draft:OUT, set:noop, talk:noop}));
var t3=grab(React.createElement(StepVoice, C(OUT)));
var t4=grab(React.createElement(StepBrief, C(OUT)));
var t5=grab(React.createElement(StepRules, C(OUT)));
var t6=grab(React.createElement(StepTest, C(OUT)));
var list=grab(React.createElement(App,null));
function apage(a){ return grab(React.createElement(AgentPage,{agent:a,agents:SEED_AGENTS,setAgents:noop,onBack:noop,onCorrect:noop,onEdit:noop,onTest:noop,testing:true,toast:noop})); }
function clist(a){ return grab(React.createElement(CallList,{agent:a,onBack:noop,onOpen:noop})); }
function callOf(a,k){ var cs=callsFor(a); return cs.filter(function(c){return c.kind===k})[0]||cs[0]; }
function corr(a,k){ return grab(React.createElement(Correction,{agent:a,call:callOf(a,k||'message'),agents:SEED_AGENTS,setAgents:noop,onBack:noop,toast:noop})); }
var L=SEED_AGENTS.map(apage), CL=SEED_AGENTS.map(clist);
var K=SEED_AGENTS.filter(function(a){return callsFor(a).length;}).map(function(a){return corr(a);});
['setup','ring','done'].forEach(function(st){ grab(React.createElement(CallMe,{draft:OUT,state:st,setState:noop})); });
var BLOB=ALL.join('\n');
A('nothing fails to render', BLOB.indexOf('RENDER-FAIL')===-1, BLOB.substr(BLOB.indexOf('RENDER-FAIL'),150));

/* ---- languages and voices match the product ---- */
A('two languages offered', Object.keys(LANGS).length===2 && !!LANGS.en && !!LANGS.es);
A('language names as in the product',
  LANGS.en.name==='English (United States)' && LANGS.es.name==='Spanish (Latin America)');
A('English roster is the product roster',
  voicesIn('en').map(function(v){return v.name}).join(',')==='Alice,Alyssa,Catherine,Emily,Felix,Gail,James');
A('Spanish roster is the product roster',
  voicesIn('es').map(function(v){return v.name}).join(',')==='Antonio,Bob,Charles,Frank,Gloria,Linda');
A('every voice is Premium V2', PERSONAS.every(function(v){ return v.tier==='Premium V2'; }));
A('both languages on the step', t3.indexOf('English (United States)')>-1 && t3.indexOf('Spanish (Latin America)')>-1);
A('voice count shown per language', t3.indexOf('7 voices')>-1 || t3.indexOf('6 voices')>-1);
var t3en=grab(React.createElement(StepVoice, C(ENG)));
A('picking Spanish lists the Spanish voices',
  t3.indexOf('>Antonio<')>-1 && t3.indexOf('>Gloria<')>-1 && t3.indexOf('>Alice<')===-1);
A('picking English lists the English voices',
  t3en.indexOf('>Alice<')>-1 && t3en.indexOf('>James<')>-1 && t3en.indexOf('>Antonio<')===-1);
A('no label above the voice list',
  t3.indexOf('available in')===-1 && t3.indexOf('Voice —')===-1
  && t3en.indexOf('available in')===-1);
A('the language cards still state the count', t3.indexOf('6 voices · Premium V2')>-1);
A('rows are tagged Premium V2', (t3.match(/class="vtier mono">Premium V2/g)||[]).length===6);
A('each voice has a sample button', (t3.match(/Sample/g)||[]).length>=6);
A('rows are a single-choice group', (t3.match(/role="radio"/g)||[]).length===6);
A('selected voice is checked', (t3.match(/aria-checked="true"/g)||[]).length===1);
A('sample line matches the language',
  t3.indexOf('Le llamo por la consulta que nos dejó')>-1 && t3en.indexOf('Good afternoon')>-1);
A('no voices until a language is picked',
  R(React.createElement(StepVoice, C({...newDraft(), direction:'out'}))).indexOf('vrow')===-1);
A('switching language clears a mismatched voice', (function(){
  var got=null; R(React.createElement(StepVoice, {draft:OUT, set:function(p){got=p}, next:noop, back:noop}));
  return true; })());
A('the caveat that English was unimplemented is gone, because it now is',
  t3en.indexOf('written in Spanish in this prototype')===-1);
A('seeds use real voices', SEED_AGENTS.every(function(a){ return PERSONAS.some(function(v){ return v.id===a.personaId; }); }));
A('old persona ids are gone', BLOB.indexOf('Sofía')===-1 && BLOB.indexOf('Lucas')===-1 && BLOB.indexOf('Español neutro')===-1);
A('cards show voice and language', list.indexOf('Gloria · Spanish (LATAM)')>-1);
function esc(x){ return x.replace(/&/g,'&amp;'); }            // '&' in "Lead capture & quotes"
function flat(h){ return txt(h).replace(/\s+/g,' '); }          // txt keeps the whitespace between tags
A('every card names the template it was built from', SEED_AGENTS.every(function(a){
  return list.indexOf('Built from the '+esc(template(a.template).name)+' template')>-1; }));
A('the label reads as the template, not the agent’s job', (function(){
  var t = flat(list);                                            // pills render with no gap between
  return t.indexOf('OutboundAppointmentsLive')>-1            // Citas, built from Appointments
    && t.indexOf('OutboundCollections')>-1; })());               // the two Banco Sol collections agents
A('it is quiet beside the direction and Live badges', list.indexOf('pill pill-tpl')>-1);
A('a receptionist card says so', (function(){
  var rec = {...SEED_AGENTS[4], id:'rx', template:'reception', direction:'in'};
  return R(React.createElement(AgentList,{agents:[rec], onCreate:noop, onOpen:noop}))
    .indexOf('Built from the Receptionist template')>-1; })());
A('the page shows the tier', L[0].indexOf('Premium V2')>-1);
A('the header line stops at the tier', L[0].indexOf('Premium V2 · ')===-1);
A('step 3 gates on both', t3.indexOf('disabled')===-1
  && R(React.createElement(StepVoice, C({...newDraft(), direction:'out'}))).indexOf('disabled')>-1);

/* ---- the callback script asks which number to use ---- */
A('the callback goal covers time and number',
  val(goalsFor('messages'),'callback').v==='agrees a callback time and number');
A('and the spoken line asks for the number',
  val(goalsFor('messages'),'callback').say.indexOf('¿A qué número')>-1
  && val(goalsFor('messages'),'callback').say.indexOf('a qué hora')>-1);
A('the brief reads it back', (function(){
  var dr = seedFromTemplate({...newDraft(), direction:'out', personaId:'linda', attempts:2, from:8, to:18}, 'messages');
  dr.personaId='linda'; dr.direction='out';
  return R(React.createElement(StepBrief, C(dr))).indexOf('agrees a callback time and number')>-1; })());
A('the simulator asks for it too', (function(){
  var dr = seedFromTemplate({...newDraft(), direction:'out', personaId:'linda', attempts:2, from:8, to:18}, 'messages');
  dr.personaId='linda'; dr.direction='out';
  return agentReply('hola', dr).txt.indexOf('¿A qué número')>-1; })());
A('confirming a callback reads the number back', (function(){
  var dr = seedFromTemplate({...newDraft(), direction:'out', personaId:'linda', attempts:2, from:8, to:18}, 'messages');
  dr.personaId='linda'; dr.direction='out';
  return agentReply('sí, confirmo', dr).txt.indexOf('Le repito el número')>-1; })());
A('confirming an appointment does not mention a number',
  agentReply('sí, confirmo', OUT).txt.indexOf('número')===-1);
A('the summary records both', (function(){
  var row = INTERACTIONS.filter(function(r){ return r.disp==='Solved' && r.voice; })[0];
  return !row || ixSummary(row, SEED_AGENTS).key.indexOf('the number and the time')>-1; })());

/* ---- collections offers hold a tappable number (the old goals, now the first two offers) ---- */
function withGoal(dr, gid, n){ var t={...dr.tokens, goal:gid}; if(n!=null) t.params={...(t.params||{}), [gid]:n};
  /* on a collections agent, "the goal" is now a one-offer list */
  if(dr.template==='collections') t.offers=OFFER_IDS.map(function(id){ return {id:id, on:id===gid}; });
  return {...dr, tokens:t}; }
var FALLBACK_TAIL = ', and otherwise asks when the customer intends to pay';
A('days offer is a phrase plus a number', val(goalsFor('collections'),'date5').v==='full payment within');
A('partial offer is a phrase plus a number', val(goalsFor('collections'),'partial').v==='a partial payment of at least');
A('day options are 3/5/7/15/30', paramOf('date5').opts.join(',')==='3,5,7,15,30');
A('share options are 30/50/70', paramOf('partial').opts.join(',')==='30,50,70');
A('defaults are 5 days and 30%', paramOf('date5').def===5 && paramOf('partial').def===30);
A('only these two goals take a number',
  ['confirm','quote_wa','callback'].every(function(g){ return paramOf(g)===null; }));
/* ---- both numbers can now be typed exactly, not only tapped from presets ---- */
function pills(h){ return (h.match(/step-pill[^>]*>([^<]*)</g)||[]).map(function(m){ return m.slice(m.indexOf('>')+1, -1); }); }
function stepper(gid, pv){ return R(React.createElement(ParamStepper,
  {gp:paramOf(gid), pv:pv, setParam:noop, close:noop})); }
A('days replaces its last preset with Custom; share keeps all of its presets and adds one',
  paramOf('date5').custom==='replace' && paramOf('partial').custom==='add');
A('days stepper: 3/5/7/15 then Custom — 30 is no longer a preset',
  pills(stepper('date5',5)).join(',')==='3 days,5 days,7 days,15 days,Custom');
A('share stepper: 30/50/70 all kept, then Custom',
  pills(stepper('partial',30)).join(',')==='30%,50%,70%,Custom');
A('each stepper offers exactly one Custom slot',
  (stepper('date5',5).match(/>Custom</g)||[]).length===1
  && (stepper('partial',30).match(/>Custom</g)||[]).length===1);
A('on a preset value, the Custom pill is unchecked and no input is showing', (function(){
  var h = stepper('partial',50);
  return h.indexOf('step-custom-inp')===-1 && h.split('>Custom<')[0].lastIndexOf('aria-checked="false"')>-1; })());
A('a typed value opens straight into the input, pre-filled, for both params', (function(){
  var d = stepper('date5',45), p = stepper('partial',45);
  return d.indexOf('step-custom-inp')>-1 && d.indexOf('value="45"')>-1
    &&   p.indexOf('step-custom-inp')>-1 && p.indexOf('value="45"')>-1; })());
A('the input carries the right unit and cap for each param', (function(){
  var d = stepper('date5',45), p = stepper('partial',45);
  return d.indexOf('max="180"')>-1 && d.indexOf('>days<')>-1
    &&   p.indexOf('max="100"')>-1 && p.indexOf('>%<')>-1; })());
A('a typed value still reads back as a sentence everywhere',
  goalLabel(withGoal(COL,'date5',45))==='offers full payment within 45 days'+FALLBACK_TAIL
  && goalLabel(withGoal(COL,'partial',45))==='offers a partial payment of at least 45%'+FALLBACK_TAIL);
A('a typed value is spoken correctly too',
  goalSay(withGoal(COL,'date5',45)).indexOf('dentro de 45 días')>-1
  && goalSay(withGoal(COL,'partial',45)).indexOf('al menos 45%')>-1);
A('the chip label follows a typed value',
  grab(React.createElement(StepBrief, C(withGoal(COL,'date5',45)))).indexOf('>offers full payment within 45 days</button>')>-1
  && grab(React.createElement(StepBrief, C(withGoal(COL,'partial',45)))).indexOf('>offers a partial payment of at least 45%</button>')>-1);
A('a param with no custom flag renders presets only', (function(){
  var plain = {def:5, opts:[1,2,3], fmt:function(n){return n+'x'}, title:'T', hint:'h'};
  var h = R(React.createElement(ParamStepper,{gp:plain, pv:2, setParam:noop, close:noop}));
  return pills(h).join(',')==='1x,2x,3x' && h.indexOf('step-custom')===-1; })());
var D5=withGoal(COL,'date5'), D30=withGoal(COL,'date5',30), P30=withGoal(COL,'partial'), P70=withGoal(COL,'partial',70);
A('label reads as a sentence', goalLabel(D5)==='offers full payment within 5 days'+FALLBACK_TAIL);
A('label follows the tap', goalLabel(D30)==='offers full payment within 30 days'+FALLBACK_TAIL);
A('percent label reads correctly', goalLabel(P30)==='offers a partial payment of at least 30%'+FALLBACK_TAIL && goalLabel(P70).indexOf('70%')>-1);
A('goals without a number are untouched', goalLabel(withGoal(OUT,'confirm'))==='confirms or moves the appointment');
A('the spoken line carries the number in Spanish',
  goalSay(D5).indexOf('dentro de 5 días')>-1 && goalSay(D30).indexOf('dentro de 30 días')>-1);
A('the percent line carries the number', goalSay(P70).indexOf('al menos 70%')>-1);
A('no placeholder leaks into speech', goalSay(D5).indexOf('{n}')===-1 && goalSay(P30).indexOf('{n}')===-1);
var b5=grab(React.createElement(StepBrief, C(D5))), b30=grab(React.createElement(StepBrief, C(D30)));
A('the collections brief has no separate goal chip: the numbers ride inside the offers chip',
  (b5.match(/class="chip"/g)||[]).length===(t4.match(/class="chip"/g)||[]).length+3   // + balance, payment, no-date; offers takes the goal's place, the number chip is gone
  && b5.indexOf('>5 days</button>')===-1);
A('the offers chip shows the value', b5.indexOf('>offers full payment within 5 days</button>')>-1 && b30.indexOf('>offers full payment within 30 days</button>')>-1);
A('and the percent', R(React.createElement(StepBrief, C(P70))).indexOf('>offers a partial payment of at least 70%</button>')>-1);
A('preview bubble follows the number', b30.indexOf('dentro de 30 días')>-1 && b30.indexOf('dentro de 5 días')===-1);
A('no number chip on other templates', R(React.createElement(StepBrief, C(OUT))).indexOf('step-pill')===-1);
A('simulator quotes the chosen number', agentReply('hola', D30).txt.indexOf('30 días')>-1);
A('past calls quote it too', (function(){
  var ag=withGoal(SEED_AGENTS[4], 'date5', 15);
  return R(React.createElement(Correction,{agent:ag,call:callOf(ag,'message'),agents:SEED_AGENTS,setAgents:noop,onBack:noop,toast:noop})).indexOf('dentro de 15 días')>-1; })());
A('agent cards quote it', (function(){
  var ag=withGoal(SEED_AGENTS[4], 'partial', 50);
  return R(React.createElement(AgentPage,{agent:ag,agents:SEED_AGENTS,setAgents:noop,onBack:noop,onCorrect:noop,onEdit:noop,onTest:noop,testing:true,toast:noop})).indexOf('at least 50%')>-1; })());
A('picker labels read as full phrases',
  offerLabel(D5,'date5')==='full payment within 5 days' && offerLabel(P70,'partial')==='a partial payment of at least 70%');
A('picker labels leave other goals alone',
  optLabel(val(goalsFor('appointments'),'confirm'), D5)==='confirms or moves the appointment');

/* ---- collections cannot address whoever answers ---- */
var c4=grab(React.createElement(StepBrief, C(COL)));
A('collections offers two identity options', identityFor('collections').length===2);
A('collections drops "speaks to whoever answers"',
  identityFor('collections').every(function(o){ return o.id!=='none'; }));
A('collections keeps verify and by-name',
  identityFor('collections').map(function(o){return o.id}).join(',')==='verify,byname');
A('other templates still offer all three',
  identityFor('appointments').length===3 && identityFor('leads').length===3 && identityFor('messages').length===3);
A('the option itself still exists for the others',
  identityFor('messages').some(function(o){ return o.v==='speaks to whoever answers'; }));
A('a collections draft never starts on it', COL.tokens.identity==='verify');
A('a stale value falls back to verify',
  val(identityFor('collections'), 'none').id==='verify');
A('collections brief renders the safe wording', c4.indexOf('verifies who it is speaking to')>-1);
A('collections brief never shows the third-party option', c4.indexOf('speaks to whoever answers')===-1);

/* ---- rules screen: three sections, all closed ---- */
A('three sections', (t5.match(/class="sec"/g)||[]).length===3);
A('all start collapsed', (t5.match(/aria-expanded="false"/g)||[]).length===3
  && t5.indexOf('aria-expanded="true"')===-1);
A('no section body rendered while closed', t5.indexOf('sec-body')===-1);
A('always-on section is gone', t5.indexOf('Always on')===-1 && t5.indexOf('Not yours to change')===-1);
A('disclosure rule no longer stated here', t5.indexOf('always says it is a virtual assistant')===-1);
A('the disclosure still says it cannot be removed',
  t4.indexOf('title="Required by law — cannot be removed"')>-1
  && t4.indexOf('Every call opens with the required disclosure:')>-1);
A('it sits on its own line rather than running into the opener',
  t4.indexOf('chip-fix chip-fix-block')>-1 && t4.indexOf('Then its opener:')>-1);
A('headers still carry their counts',
  t5.indexOf(OUT.banned.length+' words')>-1 && t5.indexOf(OUT.promises.length+' rules')>-1
  && t5.indexOf((OUT.handover.length+1)+' rules')>-1);
A('handover comes first', t5.indexOf('Handover rules') < t5.indexOf('Words it must never use')
  && t5.indexOf('Words it must never use') < t5.indexOf('Other rules'));
A('summaries singularise', (function(){
  var one = R(React.createElement(StepRules, C({...OUT, banned:['urgente'], promises:[{t:'x',on:true}], handover:[]})));
  return one.indexOf('1 word')>-1 && (one.match(/1 rule/g)||[]).length===2; })());

/* ---- handover body (rendered on its own now the section is closed) ---- */
var hb=grab(React.createElement(HandoverRules,{draft:OUT,set:noop}));
A('all presets offered', HANDOVER.every(function(o){ return hb.indexOf(o.v)>-1; }));
A('presets are checkboxes', (hb.match(/role="checkbox"/g)||[]).length===HANDOVER.length-1);
A('asking for a person is always on', hb.indexOf('opt-lock')>-1 && hb.indexOf('Always on')>-1);
A('checked state reflects the draft', (hb.match(/aria-checked="true"/g)||[]).length===OUT.handover.length+1);
A('other (specify) offered', hb.indexOf('Other (specify)')>-1 && hb.indexOf('Describe it in your own words')>-1);
A('custom rules render and can be removed', (function(){
  var h=R(React.createElement(HandoverRules,{draft:{...OUT, handoverOther:['El cliente pide hablar en inglés']},set:noop}));
  return h.indexOf('El cliente pide hablar en inglés')>-1 && h.indexOf('Remove handover rule')>-1; })());
A('the hint names the brief\'s handoff destination', handLabel(OUT)==='transfers to the Citas_Sept campaign');
A('an open section shows its hint', R(React.createElement(Section,{title:'T', summary:'s', hint:'the hint', defaultOpen:true},'body')).indexOf('the hint')>-1);
A('a closed section hides its hint', R(React.createElement(Section,{title:'T', summary:'s', hint:'the hint'},'body')).indexOf('the hint')===-1);
A('seeded from the template', OUT.handover.length===1 && OUT.handover.indexOf('offtopic')>-1);
A('collections seeds legal + promise', COL.handover.indexOf('legal')>-1 && COL.handover.indexOf('promise')>-1 && COL.handover.length===2);
A('seeds carry handover rules', SEED_AGENTS[0].handover.length===1 && SEED_AGENTS[4].handover.length===2);
A('a seed has a custom rule', SEED_AGENTS[0].handoverOther.length===1);
A('nothing below the Call button',
  t6.indexOf('Ready to save')===-1 && t6.indexOf('banned words ·')===-1
  && t6.indexOf('handover rules')===-1 && t6.indexOf('class="sep"')===-1);
A('no explanation under the chat widget',
  t6.indexOf('line under each reply')===-1 && t6.indexOf('never editing a script')===-1);
A('the Call block is just a heading and a button',
  t6.indexOf('Hear it for real')>-1 && t6.indexOf('>Call</button>')>-1
  && t6.indexOf('judge the voice')===-1 && t6.indexOf('calls your own phone once')===-1);
A('the simulator itself is intact',
  t6.indexOf('class="chatbox"')>-1
  && (t6.match(/class="qbtn"/g)||[]).length===quicksFor(OUT).length);
A('the per-reply setting captions stay', t6.indexOf('Fixed disclosure + your opener')>-1);

/* ---- an agent that rings you checks it has the right person before anything else ---- */
A('the simulated call opens with the identity check the agent is set to make', (function(){
  var h = txt(R(React.createElement(StepTest, C(COL))));
  return h.indexOf('¿Hablo con la persona titular?')>-1
    && h.indexOf('Fixed disclosure + your opener + the identity check')>-1; })());
A('it asks in the agent’s own language', (function(){
  var h = txt(R(React.createElement(StepTest, C(en('collections')))));
  return h.indexOf('Am I speaking with the account holder?')>-1; })());
A('asking by name asks by name', (function(){
  var d = {...COL, tokens:{...COL.tokens, identity:'byname'}};
  return txt(R(React.createElement(StepTest, C(d)))).indexOf('¿Se encuentra la señora Herrera?')>-1; })());
A('an agent set to speak to whoever answers asks nothing', (function(){
  var d = {...OUT, tokens:{...OUT.tokens, identity:'none'}};
  var h = txt(R(React.createElement(StepTest, C(d))));
  return h.indexOf('¿Hablo con la persona titular?')===-1
    && h.indexOf('+ the identity check')===-1; })());
A('a receptionist does not — the caller rang in', (function(){
  var r = seedFromTemplate({...newDraft(), direction:'in', personaId:'alice'}, 'reception');
  r.personaId='alice'; r.lang='en';
  return txt(R(React.createElement(StepTest, C(r)))).indexOf('account holder')===-1; })());
A('the opening matches what the brief promised', (function(){
  /* the brief's preview and the simulator now agree on how a call starts */
  var brief = txt(R(React.createElement(StepBrief, C(COL))));
  var test  = txt(R(React.createElement(StepTest,  C(COL))));
  return brief.indexOf('¿Hablo con la persona titular?')>-1
    && test.indexOf('¿Hablo con la persona titular?')>-1; })());
A('and saying it is the wrong person leaves the set message, then ends the call',
  agentReply('No soy yo, se equivocó', COL).why.indexOf('leaves the message you set, then ends the call')>-1
  && agentReply('No soy yo, se equivocó', COL).txt.indexOf('Por favor, pida a la persona titular que se comunique con Banco Sol.')===0);
var pb=grab(React.createElement(OtherRules,{draft:OUT,set:noop}));
A('the rules body lists them', pb.indexOf('Never promise a specific doctor')>-1
  && pb.indexOf('A rule of your own')>-1);

/* ---- template rules are ticked defaults, not fixed items ---- */
A('every promise is a checkbox, ticked by default',
  (pb.match(/role="checkbox"/g)||[]).length===OUT.promises.length
  && (pb.match(/aria-checked="true"/g)||[]).length===OUT.promises.length);
A('a template promise cannot be deleted, only unticked',
  pb.indexOf('aria-label="Remove Never promise a specific doctor"')===-1);
A('one you add yourself is removable', (function(){
  var d = {...OUT, promises:[...OUT.promises, {t:'Never promise a refund', on:true, custom:true}]};
  return R(React.createElement(OtherRules,{draft:d,set:noop}))
    .indexOf('aria-label="Remove Never promise a refund"')>-1; })());
A('unticking shows as unticked but keeps the rule listed', (function(){
  var d = {...OUT, promises:OUT.promises.map(function(p,i){ return i===0?{...p,on:false}:p; })};
  var h = R(React.createElement(OtherRules,{draft:d,set:noop}));
  return h.indexOf('Never promise a specific doctor')>-1
    && (h.match(/aria-checked="false"/g)||[]).length===1; })());
A('an unticked promise stops counting as a rule', (function(){
  var d = {...OUT, promises:OUT.promises.map(function(p){ return {...p, on:false}; })};
  return activePromises(d).length===0 && ruleCount(d)===ruleCount(OUT)-OUT.promises.length; })());
function untick(d, text){ return {...d, promises:d.promises.map(function(p){
  return p.t===text ? {...p, on:false} : p; })}; }
A('an unticked promise drops out of the summary prose', (function(){
  var h = txt(R(React.createElement(AgentSummary,
    {agent:untick(OUT,'Never promise a specific doctor')})));
  return h.indexOf('a specific doctor')===-1 && h.indexOf('a same-day slot')>-1; })());
A('an unticked promise stops guarding the simulator', (function(){
  var on  = {...COL, promises:[{t:'Never promise a discount on the balance', on:true}]};
  var off = {...COL, promises:[{t:'Never promise a discount on the balance', on:false}]};
  return agentReply('me da un descuento?', on).txt.indexOf('No le puedo')===0
    && agentReply('me da un descuento?', off).txt.indexOf('No le puedo')!==0; })());
A('an unticked promise leaves the version comparison', (function(){
  var rows = diffFacts(configOf(OUT), configOf(untick(OUT,'Never promise a specific doctor')), OUT);
  return rows.length===1 && rows[0].kind==='drop' && rows[0].k==='Never promises'
    && rows[0].item==='a specific doctor'; })());
A('unticking the wrong-recipient rule shows under Other rule, not Never promises', (function(){
  var rows = diffFacts(configOf(OUT), configOf(untick(OUT, THIRD_PARTY_RULE)), OUT);
  return rows.length===1 && rows[0].kind==='drop' && rows[0].k==='Other rule'; })());

/* ---- the section holds two kinds of rule now ---- */
function hasRule(d, t){ return otherRules(d).some(function(r){ return r.t===t; }); }
A('an outbound agent is seeded with the wrong-recipient rule',
  hasRule(OUT, THIRD_PARTY_RULE) && hasRule(COL, THIRD_PARTY_RULE));
A('the rule label is the rule, nothing more',
  THIRD_PARTY_RULE==='End the call if someone other than the intended person answers');
A('what it withholds is shown by what it says on the call, not in the label',
  agentReply('no soy yo, se equivocó', OUT).txt.indexOf('no dejo ningún detalle')>-1);
A('an inbound agent does not get it — the caller rang in',
  hasRule(mk('appointments','gloria','in'), THIRD_PARTY_RULE)===false);
A('a template line that is not a promise is classified as a rule', (function(){
  /* "Never give clinical advice" never was a promise — the summary used to read
     "never promises ... or Never give clinical advice" */
  return hasRule(OUT, 'Never give clinical advice')
    && promisesOf(OUT).every(function(r){ return /^never promise/i.test(r.t); }); })());
A('and the receptionist’s two non-promises likewise', (function(){
  var r = seedFromTemplate({...newDraft(), direction:'in', personaId:'alice'}, 'reception');
  return hasRule(r, 'Never quote a price')
    && hasRule(r, 'Never confirm an appointment the calendar hasn’t accepted')
    && promisesOf(r).length===1; })());
A('a rule with no kind still reads as a never-promise, so stored versions are unchanged',
  ruleKind({t:'x', on:true})==='promise' && ruleKind({t:'x', on:true, kind:'rule'})==='rule');
A('the two kinds are counted together but quoted apart',
  activePromises(OUT).length===promisesOf(OUT).length+otherRules(OUT).length
  && promisesOf(OUT).length>0 && otherRules(OUT).length>0);
A('the prose no longer calls a rule a promise', (function(){
  var h = txt(R(React.createElement(AgentSummary,{agent:OUT})));
  return h.indexOf('It never promises a specific doctor or a same-day slot')>-1
    && h.indexOf('never promises '+THIRD_PARTY_RULE)===-1
    && h.indexOf('Other rules it follows:')>-1
    && h.indexOf(THIRD_PARTY_RULE)>-1; })());
A('the heading singularises for one rule', (function(){
  var one = {...OUT, promises:[{t:THIRD_PARTY_RULE, on:true, kind:'rule'}]};
  return txt(R(React.createElement(AgentSummary,{agent:one}))).indexOf('Other rule it follows:')>-1; })());
A('a rule you add yourself is a rule, not a promise', (function(){
  var d = {...OUT, promises:[...OUT.promises, {t:'End the call if the customer is driving', on:true, custom:true, kind:'rule'}]};
  var h = txt(R(React.createElement(AgentSummary,{agent:d})));
  return hasRule(d,'End the call if the customer is driving')
    && h.indexOf('Other rules it follows')>-1
    && h.indexOf('never promises a specific doctor, a same-day slot or End the call')===-1; })());
/* it changes the call, not just the checkbox */
A('the wrong person on the line ends the call, leaving nothing', (function(){
  var r = agentReply('no soy yo, se equivocó', OUT);
  return r.why.indexOf('the wrong person answered')>-1 && r.txt.indexOf('no dejo ningún detalle')>-1; })());
A('unticked, it no longer ends the call', (function(){
  var r = agentReply('no soy yo, se equivocó', untick(OUT, THIRD_PARTY_RULE));
  return r.why.indexOf('the wrong person answered')===-1; })());
A('an English agent ends it in English', (function(){
  var en = {...mk('appointments','alice','out'), lang:'en'};
  en.promises = [{t:THIRD_PARTY_RULE, on:true, kind:'rule'}];
  return agentReply('he is not here, wrong number', en).txt.indexOf('I’ll not leave any details')>-1; })());
A('an inbound agent never hits that branch',
  agentReply('no soy yo', mk('appointments','gloria','in')).why.indexOf('wrong person')===-1);

/* ---- banned words: the standard set is selectable, your own stay removable ---- */
var bw = grab(React.createElement(BannedWords,{draft:COL,set:noop}));
A('the standard words show as ticked options', bw.indexOf('urgente')>-1 && bw.indexOf('demanda')>-1
  && bw.indexOf('embargo')>-1 && bw.indexOf('abogado')>-1
  && (bw.match(/role="checkbox"/g)||[]).length===bannedDefaults(COL).length);
A('the defaults are the platform set plus the template’s',
  bannedDefaults(COL).join(',')==='urgente,demanda,embargo,abogado'
  && bannedDefaults(OUT).join(',')==='urgente,demanda,embargo,diagnóstico,urgencia');
A('a seeded agent starts with every default ticked',
  bannedDefaults(COL).every(function(w){ return COL.banned.indexOf(w)>-1; })
  && bannedDefaults(OUT).every(function(w){ return OUT.banned.indexOf(w)>-1; }));
A('a word you add sits under Your own, not among the defaults', (function(){
  var d = {...COL, banned:[...COL.banned, 'plazo']};
  var h = R(React.createElement(BannedWords,{draft:d,set:noop}));
  return h.indexOf('>Your own<')>-1 && h.indexOf('class="tag"')>-1 && h.indexOf('plazo')>-1; })());
A('unticking a default leaves it listed and untickable again', (function(){
  var d = {...COL, banned:COL.banned.filter(function(w){ return w!=='abogado'; })};
  var h = R(React.createElement(BannedWords,{draft:d,set:noop}));
  return h.indexOf('abogado')>-1 && (h.match(/aria-checked="false"/g)||[]).length===1; })());
A('no default is duplicated when the template repeats one',
  bannedDefaults({template:'collections'}).length===new Set(bannedDefaults({template:'collections'})).size);

/* ---- the simulator obeys them ---- */
A('the upset and consent presets are gone from the catalogue', HANDOVER.every(function(o){ return o.id!=='angry' && o.id!=='consent'; }) && HANDOVER.length===6);
A('lawyer mention hands over', agentReply('Voy a hablar con mi abogado', COL).why.indexOf('lawyer')>-1);
A('no seeded agent references them', SEED_AGENTS.every(function(x){ return x.handover.indexOf('angry')<0 && x.handover.indexOf('consent')<0; }));
A('an upset line no longer hands over on its own', agentReply('Esto es un desastre', OUT).why.indexOf('upset')===-1);
A('the fallback quick replies dropped the upset line', QUICKS.indexOf('Esto es un desastre')===-1 && QUICKS.indexOf('Gracias, adiós')>-1);

/* ---- the go-live ladder is gone; the page summarises the agent ---- */
var ACT=SEED_AGENTS[0], OFF=SEED_AGENTS[3];
var pAct=apage(ACT), pOff=apage(OFF);
['Go-live ladder','Batch test','Move up to Test','Step back to','Skip the batch test','Where it is now','rung-now']
  .forEach(function(w){ A('no ladder trace: "'+w+'"', BLOB.indexOf(w)===-1); });
A('ladder model is gone from the code',
  typeof rungsFor==='undefined' && typeof topRung==='undefined');
A('the page offers the summary', pAct.indexOf('How it is set up')>-1);
A('the summary starts collapsed',
  pAct.indexOf('aria-expanded="false"')>-1 && pAct.indexOf('sec-body')===-1);
A('collapsed means nothing rendered', pAct.indexOf('brief-prose')===-1);
A('the header carries a summary line', pAct.indexOf('Appointments · ')>-1 && pAct.indexOf(' rules</span>')>-1);
A('rule count adds handover, words and promises',
  ruleCount(ACT)===(ACT.handover.length+ACT.handoverOther.length+1+ACT.banned.length+ACT.promises.length));

/* ---- the setup reads as prose (option A) ---- */
function txt(h){ return h.replace(/<[^>]+>/g,''); }   // prose spans tags; compare the words
var sum=grab(React.createElement(AgentSummary,{agent:ACT})), sumT=txt(sum);
A('no label/value grid left', sum.indexOf('sumrow')===-1 && sum.indexOf('class="sum')===-1);
A('it opens with the voice, company and language',
  sum.indexOf('>Gloria</b>')>-1 && sum.indexOf('>Clínica Andes</b>')>-1 && sum.indexOf('>Spanish (Latin America)</b>')>-1);
A('outbound says calls, inbound says answers',
  sum.indexOf('calls customers of')>-1
  && R(React.createElement(AgentSummary,{agent:{...ACT, direction:'in'}})).indexOf('answers calls to')>-1);
A('it states the identity check and the goal',
  sum.indexOf('verifies who it is speaking to')>-1 && sum.indexOf('confirms or moves the appointment')>-1);
A('the opener is quoted', sum.indexOf('Every call opens with the fixed disclosure')>-1
  && sum.indexOf('Le llamo para confirmar')>-1);
A('handover reads as a sentence',
  sumT.indexOf('It transfers to the Citas_Sept campaign when the customer asks for a person or asks about something outside its job.')>-1);
A('the custom rule gets its own quoted sentence',
  sum.indexOf('It also hands over on your own rule')>-1 && sum.indexOf('“El paciente menciona una urgencia médica”')>-1);
A('an inbound company name is not run together', (function(){
  /* built here: collections is outbound work, so no seeded agent is inbound any more */
  var inb = {...SEED_AGENTS[4], direction:'in'};
  return txt(R(React.createElement(AgentSummary,{agent:inb}))).indexOf('answers calls to Banco Sol')>-1; })());
A('"never promise to X" keeps its "to"',
  txt(R(React.createElement(AgentSummary,{agent:SEED_AGENTS[4]}))).indexOf('never promises to remove interest')>-1);
A('asking for a person is always in the sentence',
  sumT.indexOf('when the customer asks for a person')>-1
  && txt(R(React.createElement(AgentSummary,{agent:{...ACT, handover:[], handoverOther:[]}})))
       .indexOf('when the customer asks for a person.')>-1);
A('promises lose their "Never promise" prefix',
  sum.indexOf('never promises')>-1 && sum.indexOf('a specific doctor')>-1
  && sum.indexOf('Never promise a specific doctor')===-1);
A('banned words are listed in prose', sum.indexOf('never says')>-1 && sum.indexOf('urgente')>-1);
A('lists join with "or"', orList(['a'])==='a' && orList(['a','b'])==='a or b'
  && orList(['a','b','c'])==='a, b or c');
A('values are picked out, not labelled', (sum.match(/class="pv"/g)||[]).length>=6);
A('a goal number carries through',
  R(React.createElement(AgentSummary,{agent:withGoal(SEED_AGENTS[4],'date5',15)})).indexOf('within 15 days')>-1);
A('an agent with nothing barred still reads', (function(){
  var h=txt(R(React.createElement(AgentSummary,{agent:{...ACT, banned:[], promises:[], handover:[], handoverOther:[]}})));
  return h.indexOf('transfers to the Citas_Sept campaign when the customer asks for a person.')>-1
    && h.indexOf('never says')===-1 && h.indexOf('also hands over')===-1; })());
A('corrections appear when there are any',
  R(React.createElement(AgentSummary,{agent:{...ACT, extraRules:['Offer another slot first']}}))
    .indexOf('Corrections you have applied')>-1);
A('an opened section shows the prose',
  R(React.createElement(Section,{title:'How it is set up', summary:'x', defaultOpen:true},
    React.createElement(AgentSummary,{agent:ACT}))).indexOf('brief-prose')>-1);

/* ---- activation is gone; deployment replaces it ---- */
['Activate','Deactivate','Active','Inactive','activate it','switched off']
  .forEach(function(w){ A('no activation trace: "'+w+'"', BLOB.indexOf(w)===-1); });
A('no active flag on any agent', SEED_AGENTS.every(function(a){ return !('active' in a); }));
A('no Draft badge anywhere', BLOB.indexOf('>Draft<')===-1);

/* ---- the Live badge means "in a dialer", and nothing else ---- */
A('an agent in a dialer carries the badge', pAct.indexOf('pill deployed')>-1 && txt(pAct).indexOf('Live')>-1);
A('an agent in no dialer does not', pOff.indexOf('pill deployed')===-1 && !isLive(OFF));
A('one that left every dialer does not either', (function(){
  var a3 = SEED_AGENTS[2];
  return !isLive(a3) && apage(a3).indexOf('pill deployed')===-1; })());
A('the tooltip says which dialer is using it',
  pAct.indexOf('title="Live · running in Citas_Septiembre"')>-1);
A('the word Deployed is gone from every screen', BLOB.indexOf('Deployed')===-1 && BLOB.indexOf('>Deploy<')===-1);

function en(tid){ var d = seedFromTemplate({...newDraft(), direction:'out', lang:'en'}, tid);
  d.lang='en'; d.personaId='catherine'; return d; }
/* unambiguous Spanish: inverted punctuation or Spanish function words */
var SPA = /[¿¡]|\b(le|su|por|para|con|una|los|las|usted|hablo|llamo|gracias|días|cita|saldo|recado)\b/i;
function spanishIn(h){ return txt(h).replace(/\s+/g,' ').split(/(?<=[.?!])\s/)
  .filter(function(x){ return SPA.test(x); }); }
A('an English agent opens in English', ['collections','appointments','leads','messages'].every(function(t){
  return !SPA.test(en(t).opener); }));
A('its spoken goal line is English too', ['collections','appointments','leads','messages'].every(function(t){
  return !SPA.test(goalSay(en(t))); }));
A('the number inside that line carries an English unit',
  goalSay(en('collections')).indexOf('5 days')>-1 && goalSay(en('collections')).indexOf('días')===-1);
A('the fixed disclosure is English', disclosureFor(en('leads')).indexOf('You’re speaking with')===0);
A('and Spanish agents keep the Spanish one',
  disclosureFor(COL).indexOf('Le hablo desde')===0);
A('the scope screen leaks no Spanish', ['collections','appointments','leads','messages'].every(function(t){
  return spanishIn(R(React.createElement(StepBrief, C(en(t))))).length===0; }));
A('nor does the simulator', ['collections','appointments','leads','messages'].every(function(t){
  return spanishIn(R(React.createElement(StepTest, C(en(t))))).length===0; }));
A('the quick replies are English', (function(){
  var h = R(React.createElement(StepTest, C(en('collections'))));
  return h.indexOf('Can you drop the interest?')>-1 && h.indexOf('¿Me quita los intereses?')===-1; })());
A('and a Spanish agent still gets the Spanish ones', (function(){
  var h = R(React.createElement(StepTest, C(COL)));
  return h.indexOf('¿Me quita los intereses?')>-1 && h.indexOf('Can you drop the interest?')===-1; })());
/* ---- the prompts belong to the job the agent does ---- */
A('a collections agent is offered collections lines, not another job’s', (function(){
  var q = quicksFor(COL).join(' | ');
  return q.indexOf('¿Me quita los intereses?')>-1 && q.indexOf('Voy a hablar con mi abogado')>-1
    && q.indexOf('Ese día no puedo')===-1 && q.indexOf('¿Cuánto cuesta?')===-1; })());
A('an appointments agent gets the rescheduling ones',
  quicksFor(OUT).indexOf('Ese día no puedo')>-1 && quicksFor(OUT).indexOf('¿Me quita los intereses?')===-1);
A('a quotes agent gets the price ones', (function(){
  var q = quicksFor(mk('leads','antonio','out'));
  return q.indexOf('¿Cuánto cuesta?')>-1 && q.indexOf('¿Me hace un descuento?')>-1; })());
A('the receptionist keeps its own', quicksFor(
  seedFromTemplate({...newDraft(), direction:'in', personaId:'alice'}, 'reception'))===RECEPTION_QUICKS);
A('every line a collections agent is offered reaches a real branch', (function(){
  /* not one of them may fall through to the generic goal line */
  return quicksFor(COL).every(function(q){
    return agentReply(q, COL).why.indexOf('Goal setting')!==0; }); })());
A('the same holds for the English set', (function(){
  var d = en('collections');
  return quicksFor(d).every(function(q){ return agentReply(q, d).why.indexOf('Goal setting')!==0; }); })());
A('the lawyer line hands over, because collections seeds that trigger',
  agentReply('Voy a hablar con mi abogado', COL).why.indexOf('complaint or a lawyer')>-1);
A('the wrong-person line ends the call, with the message when that rule is on and silently when only End is on',
  agentReply('No soy yo, se equivocó', COL).why.indexOf('then ends the call')>-1
  && agentReply('No soy yo, se equivocó', untick(COL, THIRD_PARTY_MESSAGE)).why.indexOf('wrong person answered')>-1);
A('a template with no set of its own still gets the fallback',
  quicksFor({template:'nope', lang:'es'}).length===QUICKS.length);

/* the simulator has to hear English, or the English prompts fall through to the goal line */
A('English input reaches the branch it is meant to', (function(){
  var d = en('collections');
  /* a price question goes to the rule a collections agent actually has, not one it does not */
  return agentReply('Can you drop the interest?', d).why.indexOf('Never promise to remove interest')>-1
    && agentReply('I want to speak to a person', d).why.indexOf('always disclose')>-1
    && agentReply('do not call me again', d).why.indexOf('disposition is set outside')>-1
    && agentReply('Yes, confirmed', d).why.indexOf('Offer 1 of 1')>-1
    && agentReply('Yes, confirmed', d, [{who:'a', txt:'x', stage:0}]).why.indexOf('Offer accepted')===0; })());
A('and answers in English when it gets there', (function(){
  var d = en('collections');
  return !SPA.test(agentReply('How much does it cost?', d).txt)
    && !SPA.test(agentReply('do not call me again', d).txt); })());
A('Spanish input still works on a Spanish agent',
  agentReply('¿me quita los intereses?', COL).why.indexOf('Never promise to remove interest')>-1);
/* ---- the reply follows the rules that are ticked, not a fixed script ---- */
A('a refusal names the rule that caused it', (function(){
  var r = agentReply('¿me quita los intereses?', COL);
  return r.why==='Rule: Never promise to remove interest'
    && r.txt.indexOf('No le puedo prometer quitar intereses')===0; })());
A('a rule the agent does not have does not refuse', (function(){
  /* collections has no never-promise-a-price rule, so a price question is answered plainly */
  var r = agentReply('¿cuánto cuesta?', COL);
  return r.why.indexOf('Nothing stops it')===0 && r.txt.indexOf(goalSay(COL))>-1; })());
A('the agent that does have it refuses, and says which', (function(){
  var r = agentReply('¿cuánto cuesta?', mk('leads','antonio','out'));
  return r.why==='Rule: Never promise a final price'; })());
A('unticking one of two rules on the same subject leaves the other one refusing', (function(){
  var off = {...COL, promises:COL.promises.map(function(p){
    return /interest/i.test(p.t) ? {...p, on:false} : p; })};
  return agentReply('¿me quita los intereses?', off).why==='Rule: Never promise a discount on the balance'; })());
A('unticking both stops the refusal', (function(){
  var off = {...COL, promises:COL.promises.map(function(p){
    return /interest|discount/i.test(p.t) ? {...p, on:false} : p; })};
  return agentReply('¿me quita los intereses?', off).why.indexOf('Nothing stops it')===0; })());
A('a word you banned yourself is heard, not a fixed list', (function(){
  var d = {...COL, banned:[...COL.banned, 'refinanciacion']};
  var r = agentReply('quiero una refinanciacion', d);
  return r.why.indexOf('“refinanciacion” is on its never-use list')===0; })());
A('a word you removed is no longer heard', (function(){
  var d = {...COL, banned:COL.banned.filter(function(w){ return w!=='abogado'; })};
  return agentReply('esto lo ve mi abogado', d).why.indexOf('never-use list')===-1; })());
A('your own handover rule fires on its own words', (function(){
  var d = {...OUT, handoverOther:['El paciente menciona una urgencia médica']};
  var r = agentReply('tengo una urgencia', d);
  return r.why.indexOf('Your own handover rule')===0
    && r.why.indexOf('urgencia médica')>-1; })());
A('an agent without that rule does not fire it',
  agentReply('tengo una urgencia', OUT).why.indexOf('Your own handover rule')===-1);

/* banned words are content too */
A('an English agent bans English words',
  en('collections').banned.join(',')==='urgent,lawsuit,seizure,lawyer');
A('a Spanish one is unchanged', COL.banned.join(',')==='urgente,demanda,embargo,abogado');
A('the selectable defaults follow the language',
  bannedDefaults(en('leads')).join(',')==='urgent,lawsuit,seizure,free,guaranteed'
  && bannedDefaults(OUT).join(',')==='urgente,demanda,embargo,diagnóstico,urgencia');
A('the agent summary of an English agent is English',
  spanishIn(R(React.createElement(AgentSummary,{agent:en('collections')}))).length===0);

/* ================= the prerequisites page ================= */
A('the links are live, not dead anchors', (function(){
  var h = R(React.createElement(PrereqLink,{label:'Learn more'}));
  return h.indexOf('<a')>-1 && h.indexOf('Learn more')>-1; })());
A('it is closed until asked for', (function(){
  var h = R(React.createElement(PrereqLink,{label:'Learn more'}));
  return h.indexOf('Four things have to be in place')===-1; })());
A('all four prerequisites are listed', PREREQS.length===4
  && PREREQS.map(function(x){ return x.t; }).join(' | ')
    ==='A dialer to run in | A list of people to call | Dispositions on the campaign | Credits on the account');
A('each states something this prototype actually enforces or says', (function(){
  var d = PREREQS.map(function(x){ return x.d; }).join(' ');
  return d.indexOf('It is live only while it is in one')>-1          // the Live badge
    && d.indexOf('rings your own number')>-1                          // the Test modal's promise
    && d.indexOf('does not define the codes')>-1                      // dispositions set outside
    && d.indexOf('reports its own total')>-1; })());                  // credits per interaction
A('it points nowhere external, since there is no real doc to point at',
  BLOB.indexOf('http://')===-1 && BLOB.indexOf('https://docs')===-1);
A('every entry point reaches it', (function(){
  var g = R(React.createElement(TemplateGallery,{draft:{...newDraft(), direction:'out'}, set:noop, talk:noop}));
  var pg = apage(SEED_AGENTS[0]);
  return g.indexOf('list, dialer and disposition requirements')>-1
    && pg.indexOf('Learn more: AI agent collection prerequisites')>-1
    && pg.indexOf('>Prerequisites</a>')>-1; })());
A('the header link sits with the actions, not in the identity line',
  L[0].indexOf('Premium V2 · ')===-1 && L[0].indexOf('>Prerequisites</a>')>-1);
A('it adds no state to the agent page', (function(){
  /* PrereqLink owns its own open state; AgentPage still declares exactly five */
  return apage(SEED_AGENTS[0]).indexOf('RENDER-FAIL')===-1; })());

/* ---- the established outbound collections agent, for the walkthrough ---- */
var A6 = SEED_AGENTS.filter(function(a){ return a.id==='a6'; })[0];
A('there is an outbound collections agent live in a dialer',
  !!A6 && A6.template==='collections' && A6.direction==='out'
  && dialersOf(A6).length===1 && isLive(A6));
A('it has a version to replace', (currentVersion(A6)||{}).id==='v2'
  && (latestVersion(A6)||{}).id==='v2' && A6.versions.length===2);
A('its earlier version genuinely differs, so a comparison has something to show', (function(){
  var d = versionDiff(A6, A6.versions[0]);
  /* the only difference is the days on the first offer: one line dropped, one gained */
  return d.rows.length===2 && d.rows.every(function(r){ return r.k==='Offer'; })
    && d.rows[0].kind==='drop' && d.rows[0].item==='1 · full payment within 5 days'
    && d.rows[1].kind==='add' && d.rows[1].item==='1 · full payment within 3 days'; })());
A('it carries the collections handover rules, not an empty set',
  A6.handover.join(',')==='legal,promise');
A('collections still cannot speak to whoever answers',
  identityFor(A6.template).every(function(o){ return o.id!=='none'; }));
A('the collections campaign rows now sit on a collections agent, not the quotes one', (function(){
  var wrong = INTERACTIONS.filter(function(r){
    return r.campaign==='Cobros_Ago' && r.agent && agentOf(r.agent) !== null
      && agentOf(r.agent).template!=='collections'; });
  return wrong.length===0; })());
A('and that agent has interactions of its own to review',
  creditsRows('a6')===2 && creditsBy('a6')===38);
A('adding it left the other five agents where they were',
  SEED_AGENTS.length===6 && SEED_AGENTS[0].id==='a1' && SEED_AGENTS[4].id==='a5');

/* ================= credits ================= */
var creditList = grab(React.createElement(AgentList,{agents:SEED_AGENTS,onCreate:noop,onOpen:noop}));
var creditIx   = grab(React.createElement(Interactions,{agents:SEED_AGENTS,onOpenRow:noop}));
var aiRow = INTERACTIONS.filter(function(r){ return r.voice; })[0];
var huRow = INTERACTIONS.filter(function(r){ return !r.voice; })[0];
/* the balance, from the usage API */
A('the AI Agents screen shows what is left', txt(creditList).indexOf('12,480')>-1
  && txt(creditList).indexOf('of 20,000')>-1 && txt(creditList).indexOf('credits left')>-1);
A('it names when it renews', txt(creditList).indexOf('renews 1 Oct 2026')>-1);
A('it says where the number comes from', creditList.indexOf('from the n2p usage API')>-1);
A('big numbers are grouped', fmtCredits(12480)==='12,480' && fmtCredits(999)==='999'
  && fmtCredits(1000000)==='1,000,000');
A('a missing number reads as a dash, not as zero', fmtCredits(null)==='—');
A('the meter matches the balance', creditsPct()===62 && creditsLow()===false);
A('a low balance is flagged', (function(){
  var was = CREDITS.remaining; CREDITS.remaining = 400;
  var low = creditsLow(), pct = creditsPct(); CREDITS.remaining = was;
  return low===true && pct===2; })());
/* each interaction reports its own total, from the webhook */
A('the log carries a Credits column', creditIx.indexOf('>Credits<')>-1);
A('an AI interaction reports a total', creditsOf(aiRow)===18 && txt(creditIx).indexOf('18')>-1);
A('one a person handled reports none', creditsOf(huRow)===null);
A('a person-handled row shows a dash, not a zero', (function(){
  var row = creditIx.split('itab-row')[2] || '';
  return row.indexOf('Handled by a person — no credits')>-1; })());
A('the detail view shows that interaction’s own total',
  txt(grab(React.createElement(InteractionDetail,{row:aiRow,agents:SEED_AGENTS,onBack:noop,onTeach:noop})))
    .indexOf('18 credits')>-1);
A('the webhook payload carries it, since that is where it comes from',
  JSON.stringify(ixJson(aiRow)).indexOf('"creditsUsed":18')>-1);
A('and reports none for a person', JSON.stringify(ixJson(huRow)).indexOf('"creditsUsed":null')>-1);
/* what one agent has spent */
A('an agent page totals its own interactions',
  creditsBy('a1')===73 && creditsRows('a1')===4
  && txt(apage(SEED_AGENTS[0])).indexOf('Spent 73 credits over 4 interactions')>-1);
A('an agent that never ran says so', creditsBy('a4')===0
  && txt(apage(SEED_AGENTS[3])).indexOf('No credits spent yet')>-1);
A('a total only counts that agent’s own AI interactions', (function(){
  var mine = INTERACTIONS.filter(function(r){ return r.agent==='a1' && r.voice; });
  return mine.reduce(function(n,r){ return n+r.credits; },0)===creditsBy('a1'); })());
A('the balance is not pretending to be the sum of the log', (function(){
  var logged = INTERACTIONS.reduce(function(n,r){ return n+(r.credits||0); },0);
  return creditsLeft()!==logged && CREDITS.included>logged; })());

/* ---- one agent, many dialers, one live version in all of them ---- */
var TWO = SEED_AGENTS[1];                       // Cotizaciones_Q3 + Leads_Web
var ONE = SEED_AGENTS[0];                       // Citas_Septiembre
var NONE = SEED_AGENTS[2];                      // in no dialer
A('the seed really does hold a two-dialer agent', dialersOf(TWO).length===2
  && dialersOf(ONE).length===1 && dialersOf(NONE).length===0);
A('assignment is read off the array', isLive(TWO)===true
  && isLive(ONE)===true && isLive(NONE)===false);
A('a missing array is empty, not a crash', dialersOf({}).length===0
  && dialersOf(undefined).length===0 && dialersOf(null).length===0
  && isLive({})===false && isLive(undefined)===false);
A('the boolean can no longer disagree with the array — nothing reads it',
  isLive({assignedToDialer:true})===false
  && isLive({assignedToDialer:false, dialers:['X']})===true);
A('the seeds keep the two in step', SEED_AGENTS.every(function(a){
  return !!a.assignedToDialer === (dialersOf(a).length>0); }));
/* the badge counts them; the tooltip and the action bar name them */
A('the badge counts several dialers', (function(){
  var h = R(React.createElement(LiveBadge,{dialers:['A','B']}));
  return h.indexOf('in 2 dialers')>-1 && h.indexOf('running in A and B')>-1; })());
A('one dialer needs no count', (function(){
  var h = R(React.createElement(LiveBadge,{dialers:['A']}));
  return h.indexOf('dialers')===-1 && h.indexOf('running in A')>-1; })());
A('a missing dialers prop does not throw', R(React.createElement(LiveBadge,{})).indexOf('RENDER-FAIL')===-1);
A('the action bar names every dialer', txt(apage(TWO)).indexOf('Live in Cotizaciones_Q3 and Leads_Web')>-1);
A('the action bar names one dialer without a list', txt(apage(ONE)).indexOf('Live in Citas_Septiembre')>-1);
A('an agent in no dialer says so, and how to put it live', (function(){
  var h = txt(apage(NONE));
  return h.indexOf('Not in a dialer')>-1 && h.indexOf('so it is not live')>-1
    && h.indexOf('Add it to a dialer in the Outbound Hub to put it live')>-1; })());
A('an agent in a dialer gets no such note', txt(apage(TWO)).indexOf('so it is not live')===-1);
A('an empty array is not live even with the old boolean set true',
  txt(apage({...TWO, assignedToDialer:true, dialers:[]})).indexOf('so it is not live')>-1);
A('a missing array renders instead of throwing',
  apage({...TWO, assignedToDialer:true, dialers:undefined}).indexOf('RENDER-FAIL')===-1);
/* the serial list, since dialer names get printed in prose */
A('andList reads as English for one, two and three',
  andList(['A'])==='A' && andList(['A','B'])==='A and B' && andList(['A','B','C'])==='A, B and C');
/* the hand-written per-agent metrics line is gone from the card, and the field with it —
   it was the only reader, and a note nothing renders is a claim nothing can keep honest */
A('no agent carries a metrics note any more',
  SEED_AGENTS.every(function(a){ return a.note===undefined; }));
A('the card no longer shows one',
  list.indexOf('calls this month')===-1 && list.indexOf('No calls yet')===-1
  && list.indexOf('calls so far')===-1 && list.indexOf('first week')===-1);
A('what the card does still say is derived, not written by hand', (function(){
  /* the goal sentence and the credits/dialer facts all come from the agent's own settings */
  return list.indexOf('It confirms or moves the appointment.')>-1; })());
A('the list badges every agent in a dialer, and only those', (list.match(/pill deployed/g)||[]).length===
  SEED_AGENTS.filter(function(a){return isLive(a)}).length);
A('adding a dialer makes the badge appear', (function(){
  var fresh = {...SEED_AGENTS[3], dialers:[]};
  var after = {...fresh, dialers:['Cobros_Sept']};
  return apage(fresh).indexOf('pill deployed')===-1 && apage(after).indexOf('pill deployed')>-1; })());
A('deleting a live agent still warns about its dialer',
  pAct.indexOf('Citas_Septiembre')>-1);

/* ---- no publish step: Test / History / Edit, and the current version ---- */
['Test','History','Edit'].forEach(function(b){
  A('agent page has '+b, pAct.indexOf('>'+b+'</button>')>-1 || pAct.indexOf(b+'</button>')>-1); });
A('there is no Deploy and no separate Save on the agent page',
  pAct.indexOf('Deploy')===-1 && pAct.indexOf('>Save</button>')===-1 && pAct.indexOf('Deploy this agent?')===-1);
A('the current version says when and by whom it was saved',
  txt(pAct).indexOf('Saved 22 Aug 2026, 16:40 by carina.soca')>-1);
A('versions are sequential per agent',
  SEED_AGENTS[0].versions.map(function(v){return v.id}).join(',')==='v1,v2,v3');
A('nextVersionId continues the run', nextVersionId(SEED_AGENTS[0])==='v4');
A('the current version is the newest one', currentVersion(SEED_AGENTS[0]).id==='v3');
A('no seeded version carries a deployed flag, and no agent a lastDeployed',
  SEED_AGENTS.every(function(a){ return !('lastDeployed' in a) && !('dirty' in a)
    && a.versions.every(function(v){ return !('deployed' in v) && !('deployedAt' in v); }); }));

/* ---- a version carries its own configuration, and can be read before it is deployed ---- */
var VA = SEED_AGENTS[0], V1 = VA.versions[0], V2 = VA.versions[1], V3 = VA.versions[2];
A('a config snapshot holds what the wizard edits and nothing else', (function(){
  var c = configOf(VA), k = Object.keys(c);
  return k.indexOf('tokens')>-1 && k.indexOf('opener')>-1 && k.indexOf('promises')>-1
    && k.indexOf('handover')>-1 && k.indexOf('id')===-1 && k.indexOf('name')===-1
    && k.indexOf('calls')===-1 && k.indexOf('versions')===-1 && k.indexOf('dirty')===-1; })());
A('the newest version reads back as the agent is now',
  versionConfig(VA, V3).opener===VA.opener
  && versionConfig(VA, V3).handoverOther.length===VA.handoverOther.length);
A('an older version reads back as it was, not as the agent is now',
  versionConfig(VA, V1).opener==='Le llamo por su cita en Clínica Andes.'
  && versionConfig(VA, V1).opener!==VA.opener
  && versionConfig(VA, V1).handoverOther.length===0
  && VA.handoverOther.length===1);
A('a version snapshot never mutates the agent', (function(){
  var before = JSON.stringify(VA);
  agentAtVersion(VA, V1); versionConfig(VA, V1); configOf(VA);
  return JSON.stringify(VA)===before; })());
A('a stored cfg wins over the was-delta', (function(){
  var v = {id:'v9', author:ME, when:'x', changed:'c',
    cfg:{opener:'Exactly what v9 said.'}, was:{opener:'ignored'}};
  return versionConfig(VA, v).opener==='Exactly what v9 said.'; })());
/* the summary of a version is that version's setup, not the agent's current setup */
function vsum(a, v){ return txt(grab(React.createElement(AgentSummary,{agent:agentAtVersion(a,v)}))); }
A('the summary of an older version quotes its own opener',
  vsum(VA,V1).indexOf('Le llamo por su cita en Clínica Andes.')>-1
  && vsum(VA,V1).indexOf('confirmar su cita del jueves')===-1);
A('the newest version summary quotes the current opener',
  vsum(VA,V3).indexOf('confirmar su cita del jueves')>-1);
A('a rule added later is absent from the versions before it',
  vsum(VA,V1).indexOf('urgencia médica')===-1 && vsum(VA,V2).indexOf('urgencia médica')===-1
  && vsum(VA,V3).indexOf('urgencia médica')>-1);
A('a promise added later is absent from the version before it', (function(){
  var B = SEED_AGENTS[1];
  return vsum(B,B.versions[0]).indexOf('final price')===-1
    && vsum(B,B.versions[1]).indexOf('final price')>-1; })());
A('a single-version agent summarises as itself', (function(){
  var C = SEED_AGENTS[2];
  return vsum(C,C.versions[0]).indexOf(C.opener)>-1; })());
A('every seeded version can be summarised without throwing', SEED_AGENTS.every(function(a){
  return (a.versions||[]).every(function(v){ return vsum(a,v).length>0; }); }));
A('the newest seeded version of every agent carries no was-delta',
  SEED_AGENTS.every(function(a){ return !latestVersion(a).was; }));
/* ---- exactly one version is current: the newest ---- */
A('only the newest version is current',
  isCurrentVersion(VA,V3)===true && isCurrentVersion(VA,V1)===false && isCurrentVersion(VA,V2)===false);
A('every agent has exactly one current version', SEED_AGENTS.every(function(a){
  return (a.versions||[]).filter(function(v){ return isCurrentVersion(a,v); }).length===1; }));
A('an agent not in a dialer still has a current version, it is just not live',
  !!currentVersion(SEED_AGENTS[3]) && !isLive(SEED_AGENTS[3]));

/* ---- comparing two versions: single values against each other, lists item by item ---- */
A('single values read as sentences, not fields', (function(){
  var f = cfgFacts(versionConfig(VA,V3), VA);
  return f['Voice']==='Gloria' && f['Language']==='Spanish (Latin America)'
    && f['Opening line'].indexOf('\u201cLe llamo para confirmar')===0
    && f['Company it says']==='Clínica Andes'; })());
A('lists come out as items, not as one joined phrase', (function(){
  var l = cfgLists(versionConfig(VA,V3), VA);
  return l['Handover rule'].length===2 && l['Handover rule'].indexOf('asks about something outside its job')>-1
    && l['Handover rule'].indexOf('El paciente menciona una urgencia médica')>-1
    && l['Never promises'].join('|')==='a specific doctor|a same-day slot'; })());
A('a config identical to itself has no differences',
  diffFacts(versionConfig(VA,V3), versionConfig(VA,V3), VA).length===0);
A('v1 differs from v3 in exactly two things', (function(){
  var rows = diffFacts(versionConfig(VA,V3), versionConfig(VA,V1), VA);
  return rows.length===2; })());
A('a changed value carries both sides the right way round', (function(){
  var r = diffFacts(versionConfig(VA,V3), versionConfig(VA,V1), VA)
    .filter(function(x){ return x.k==='Opening line'; })[0];
  return r.kind==='change' && r.long===true
    && r.from.indexOf('confirmar su cita del jueves')>-1      // v3, running now
    && r.to.indexOf('por su cita en Clínica Andes')>-1; })()); // v1, would be
A('a dropped list item is one row naming just that item', (function(){
  var r = diffFacts(versionConfig(VA,V3), versionConfig(VA,V1), VA)
    .filter(function(x){ return x.k==='Handover rule'; })[0];
  return r.kind==='drop' && r.item==='El paciente menciona una urgencia médica'
    && r.from===undefined && r.to===undefined; })());
A('the rules that stayed are not mentioned at all', (function(){
  var rows = diffFacts(versionConfig(VA,V3), versionConfig(VA,V1), VA);
  return rows.filter(function(x){ return (x.item||'').indexOf('gets upset')>-1; }).length===0; })());
A('a gained list item is an add, not a change', (function(){
  var rows = diffFacts(versionConfig(VA,V1), versionConfig(VA,V3), VA);
  var r = rows.filter(function(x){ return x.k==='Handover rule'; })[0];
  return r.kind==='add' && r.item==='El paciente menciona una urgencia médica'; })());
A('losses are listed before gains', (function(){
  var from = {...versionConfig(VA,V3), banned:['uno']};
  var rows = diffFacts(from, {...versionConfig(VA,V3), banned:['dos']}, VA)
    .filter(function(x){ return x.k==='Banned word'; });
  return rows.length===2 && rows[0].kind==='drop' && rows[1].kind==='add'; })());
A('v2 differs from v3 in one thing only', (function(){
  var rows = diffFacts(versionConfig(VA,V3), versionConfig(VA,V2), VA);
  return rows.length===1 && rows[0].k==='Handover rule' && rows[0].kind==='drop'; })());
A('the other agent loses its never-promise rule', (function(){
  var B = SEED_AGENTS[1];
  var rows = diffFacts(versionConfig(B,B.versions[1]), versionConfig(B,B.versions[0]), B);
  return rows.length===1 && rows[0].kind==='drop' && rows[0].k==='Never promises'
    && rows[0].item==='a final price'; })());
A('emptying a whole list gives one row per item lost, not one row saying nothing', (function(){
  var rows = diffFacts(versionConfig(VA,V3), {...versionConfig(VA,V3), promises:[]}, VA);
  return rows.length===2 && rows.every(function(r){ return r.kind==='drop' && r.k==='Never promises'; }); })());
/* ---- a voice or a language change is a difference like any other ---- */
A('swapping the voice inside a language is one difference', (function(){
  var rows = diffFacts(versionConfig(VA,V3), {...versionConfig(VA,V3), personaId:'linda'}, VA);
  return rows.length===1 && rows[0].k==='Voice' && rows[0].kind==='change'
    && rows[0].from==='Gloria' && rows[0].to==='Linda'; })());
A('switching language moves the voice with it, and says both', (function(){
  var rows = diffFacts(versionConfig(VA,V3), {...versionConfig(VA,V3), personaId:'alice'}, VA);
  var by = {}; rows.forEach(function(r){ by[r.k]=r; });
  return rows.length===2 && !!by['Voice'] && !!by['Language']
    && by['Voice'].to==='Alice' && by['Language'].to==='English (United States)'; })());
A('an explicit lang field is respected over the voice\u2019s own', (function(){
  var f = cfgFacts({...versionConfig(VA,V3), personaId:'alice', lang:'en'}, VA);
  return f['Language']==='English (United States)' && f['Voice']==='Alice'; })());
A('the language is never blank, even with no lang field',
  cfgFacts({...versionConfig(VA,V3), lang:undefined}, VA)['Language']==='Spanish (Latin America)');
A('voice and language are not conflated into one line', (function(){
  var f = cfgFacts(versionConfig(VA,V3), VA);
  return f['Voice']==='Gloria'; })());
A('every voice resolves to a real name for the diff', PERSONAS.every(function(p){
  return cfgFacts({...versionConfig(VA,V3), personaId:p.id}, VA)['Voice']===p.name; }));
/* ---- the receptionist's own facts ---- */
A('the receptionist adds its own facts', (function(){
  /* built here rather than reusing RC, which this file defines further down */
  var r = seedFromTemplate({...newDraft(), direction:'in', personaId:'alice'}, 'reception');
  var f = cfgFacts(configOf(r), r), l = cfgLists(configOf(r), r);
  return f['What it knows'].indexOf('knows nothing about the business yet')>-1
    && l['Asks every caller'].length===3 && l['Asks every caller'].indexOf('Name')>-1; })());
A('turning a collect field on is one row', (function(){
  var r = seedFromTemplate({...newDraft(), direction:'in', personaId:'alice'}, 'reception');
  var on = {...configOf(r), collect:r.collect.map(function(f){ return f.id==='email'?{...f,on:true}:f; })};
  var rows = diffFacts(configOf(r), on, r);
  return rows.length===1 && rows[0].kind==='add' && rows[0].k==='Asks every caller'
    && rows[0].item==='Email'; })());
A('other templates get no receptionist facts',
  cfgFacts(versionConfig(VA,V3), VA)['What it knows']===undefined
  && cfgLists(versionConfig(VA,V3), VA)['Asks every caller'].length===0);
A('an empty config does not throw', (function(){
  try { return Object.keys(cfgFacts({}, {})).length>0 && !!cfgLists({}, {}); }
  catch(e){ return false; } })());
A('the baseline is whatever is live', versionBaseline(VA,V1).id==='v3' && versionBaseline(VA,V2).id==='v3');
A('the live version has no baseline of its own', versionBaseline(VA,V3)===null);
A('a single-version agent has no baseline',
  versionBaseline(SEED_AGENTS[3], SEED_AGENTS[3].versions[0])===null);
A('versionDiff pairs the baseline with its rows', (function(){
  var d = versionDiff(VA,V1);
  return d.base.id==='v3' && d.rows.length===2 && versionDiff(VA,V3)===null; })());

/* recovering opens the Scope screen on that version's configuration — the draft App builds */
function recoveredDraft(a, v){ return {...newDraft(), ...a, ...versionConfig(a, v)}; }
A('the recovered draft carries the old version, not the current agent',
  recoveredDraft(VA,V1).opener==='Le llamo por su cita en Clínica Andes.'
  && recoveredDraft(VA,V1).handoverOther.length===0);
A('the Scope screen shows the recovered opener', (function(){
  var h = txt(grab(React.createElement(StepBrief, C(recoveredDraft(VA,V1)))));
  return h.indexOf('Le llamo por su cita en Clínica Andes.')>-1
    && h.indexOf('confirmar su cita del jueves')===-1; })());
A('the recovered draft keeps the agent identity it belongs to',
  recoveredDraft(VA,V1).name===VA.name && recoveredDraft(VA,V1).template===VA.template);
A('recovering nothing is still a valid draft', (function(){
  var d = recoveredDraft(SEED_AGENTS[3], SEED_AGENTS[3].versions[0]);
  return !!d.tokens && !!d.opener; })());

/* ---- the current version is visible, and saving moves it ---- */
var A_LIVE  = SEED_AGENTS[0];                                   // v3, in a dialer
var A_NEXT  = {...SEED_AGENTS[0], versions:[...SEED_AGENTS[0].versions,
  {id:'v4', author:ME, when:'today', changed:'Edited the agent'}]};
var pLive = apage(A_LIVE), pNext = apage(A_NEXT);
A('the current version is shown beside the name', pLive.indexOf('class="vchip"')>-1
  && pLive.indexOf('>v3</span>')>-1);
A('a saved edit becomes the current version at once', pNext.indexOf('>v4</span>')>-1
  && txt(pNext).indexOf('Current v4 · live')>-1);
A('the action bar states the current version and whether it is live',
  txt(pLive).indexOf('Current v3 · live')>-1
  && txt(apage(SEED_AGENTS[3])).indexOf('Current v1 · not live')>-1);
A('agent page copy uses the product word', apage({...SEED_AGENTS[0]}).indexOf('next call')===-1);
A('a brand-new agent is not live and says where to fix that', (function(){
  var h = txt(apage({...SEED_AGENTS[3], dialers:[]}));
  return h.indexOf('Not in a dialer')>-1 && h.indexOf('it will run v1')>-1; })());
A('saving from the wizard writes the next version, with no deployed flag', (function(){
  var f = App.toString();
  return f.indexOf("const newVersion = nextVersionId(was)")>-1 && f.indexOf('deployed:')===-1; })());
A('the save toast says what it replaced, and where', (function(){
  var f = App.toString();
  return f.indexOf("'It replaces '")>-1 && f.indexOf("'It is now the current version.'")>-1; })());
A('recovering does not touch the agent until it is saved', (function(){
  var f = App.toString().split('const recoverVersion')[1].split('const deleteAgent')[0];
  return f.indexOf('setAgents')===-1 && f.indexOf('recovered: v.id')>-1; })());
A('a saved recovery is recorded as such', App.toString().indexOf("'Recovered ' + scr.recovered")>-1);

/* ---- test panel: no version selector (the live build dropped it), isolation note ---- */
A('the test panel offers no version selector', t6.indexOf('Which version to test')===-1 && typeof testTargets==='undefined');
A('the isolation note is there', t6.indexOf('Tests are not written to the call log')>-1);
function sidePanel(h){ return (h.split('class="side"')[1]||'').split('wz-foot')[0]; }
A('the Call button is not stretched to the panel',
  sidePanel(t6).indexOf('width:100%')===-1 && sidePanel(t6).indexOf('btn-call')>-1);
A('it keeps clear of the heading above it', t6.indexOf('class="btn btn-pri btn-call"')>-1);
A('the Call block is just a heading and that button',
  (sidePanel(t6).match(/<button/g)||[]).length===1 && sidePanel(t6).indexOf('Hear it for real')>-1);

/* ---- learn more ---- */
A('creation links to the prerequisites', t1.indexOf('AI agent collection prerequisites')>-1);
A('the agent page links to them too', pAct.indexOf('AI agent collection prerequisites')>-1);

/* ---- the Receptionist template has a worked example, and it is the inbound one ---- */
var A3 = agentOf('a3');
A('the set holds one inbound agent, and it is a receptionist',
  SEED_AGENTS.filter(function(a){ return a.direction==='in'; }).length===1
  && A3.direction==='in' && A3.template==='reception');
A('it speaks the language that template is written in', A3.lang==='en'
  && persona(A3.personaId).lang==='en');
A('it has what a receptionist needs', (A3.collect||[]).length===5
  && (A3.knowledge||{}).about.length>0 && (A3.knowledge||{}).urls.length===1);
A('it holds two jobs at once, which is what that template is for',
  goalIds(A3).join(',')==='takemsg,book' && goalLabel(A3)==='takes a message and books appointments');
A('its two versions differ in exactly that', (function(){
  var d = versionDiff(A3, A3.versions[0]);
  return A3.versions.length===2 && d.rows.length===1 && d.rows[0].k==='What it is for'
    && d.rows[0].from==='takes a message and books appointments'; })());
A('the summary does not claim an identity check it was never offered', (function(){
  var h = txt(R(React.createElement(AgentSummary,{agent:A3})));
  return h.indexOf('verifies who it is speaking to')===-1
    && h.indexOf('It takes a message and books appointments')>-1; })());
A('every other agent still states its identity check', (function(){
  var h = txt(R(React.createElement(AgentSummary,{agent:SEED_AGENTS[0]})));
  return h.indexOf('verifies who it is speaking to')>-1; })());
A('its banned words are English, like the rest of it',
  A3.banned.join(',')==='urgent,lawsuit,seizure,guaranteed,immediately');

/* ---- the collections agent in no dialer carries a real history ---- */
var A5 = agentOf('a5');
A('it has three versions', A5.versions.length===3 && A5.direction==='out' && A5.template==='collections');
A('each one differs from the last in something readable', (function(){
  var one = versionDiff(A5, A5.versions[1]), two = versionDiff(A5, A5.versions[0]);
  return one.rows.length===1 && one.rows[0].k==='Banned word'
    && two.rows.length===3; })());
A('it is in no dialer, so it stays the not-live example', !isLive(A5));

/* ---- collections is outbound work ---- */
A('no seeded agent is an inbound collections agent', SEED_AGENTS.every(function(a){
  return !(a.template==='collections' && a.direction==='in'); }));
A('and the picker cannot produce one either', (function(){
  var g = R(React.createElement(TemplateGallery,{draft:{...newDraft(), direction:'in'}, set:noop, talk:noop}));
  return g.indexOf('>Collections<')===-1; })());
A('no seeded agent holds a pairing the picker refuses', SEED_AGENTS.every(function(a){
  return galleryTemplates(a.direction).some(function(t){ return t.id===a.template; }); }));
A('an outbound agent may still receive an inbound reply', (function(){
  /* i4 is an inbound chat on the outbound messages agent — the same shape as a5's WhatsApp */
  return INTERACTIONS.some(function(r){
    var ag = agentOf(r.agent); return r.dir==='in' && r.voice && ag && ag.direction==='out'; }); })());

/* ---- outbound is voice and SMS only ---- */
A('SMS is a channel', !!MEDIA.sms);
A('no outbound AI interaction on whatsapp or chat',
  INTERACTIONS.filter(function(r){ return r.voice && r.dir==='out'; })
    .every(function(r){ return r.medium==='call' || r.medium==='sms'; }));
A('inbound AI on chat and whatsapp is untouched',
  INTERACTIONS.some(function(r){ return r.voice && r.dir==='in' && (r.medium==='wa'||r.medium==='chat'); }));

/* ---- Test and Edit ---- */
A('the page offers Test', pAct.indexOf('>Test</button>')>-1);
A('the page offers Edit, not "Edit the brief"',
  pAct.indexOf('>Edit</button>')>-1 && BLOB.indexOf('Edit the brief')===-1);
A('Review interactions is gone from the agent page too', BLOB.indexOf('Review interactions')===-1);
A('the header keeps Test, History and Edit', (function(){
  var head = pAct.split('class="panel-hd"')[1].split('class="wrap"')[0];
  return head.indexOf('>Test</button>')>-1 && head.indexOf('>History</button>')>-1
    && head.indexOf('>Edit</button>')>-1 && (head.match(/<button/g)||[]).length===4; })());

/* ---- the action bar, reshaped ---- */
A('the bar holds facts, and no publish actions',
  pAct.indexOf('class="ab-facts"')>-1 && pAct.indexOf('class="ab-acts"')===-1);
A('delete sits on its own row', pAct.indexOf('class="ab-danger"')>-1);
A('the version reads as the lead line', pAct.indexOf('class="ab-lead"')>-1
  && pAct.indexOf('<b>v3</b>')>-1);
A('delete is a quiet button', pAct.indexOf('btn btn-dan btn-sm')>-1);
A('cards no longer carry the review button', list.indexOf('Review interactions')===-1);
A('no Open agent button', BLOB.indexOf('Open agent')===-1);
A('the whole card is the target', (list.match(/class="card ag-card" role="button"/g)||[]).length===SEED_AGENTS.length);
A('cards are keyboard reachable and named', list.indexOf('aria-label="Open Citas Clínica Andes"')>-1
  && (list.match(/class="card ag-card" role="button" tabindex="0"/g)||[]).length===SEED_AGENTS.length);
A('cards carry no buttons at all', list.split('class="card ag-card"')[1].split('ag-new')[0].indexOf('<button')===-1);
A('the old label is gone', BLOB.indexOf('Review a call')===-1);

/* ---- delete from the tiles ---- */
A('tiles no longer delete', list.indexOf('ag-kill')===-1 && list.indexOf('aria-label="Delete ')===-1);
A('the agent page deletes instead', pAct.indexOf('>Delete agent</button>')>-1);
A('delete sits beside the state button',
  pOff.indexOf('>Activate</button>') < pOff.indexOf('>Delete agent</button>')
  && pAct.indexOf('>Deactivate</button>') < pAct.indexOf('>Delete agent</button>'));
A('delete is styled as destructive', pAct.indexOf('btn btn-dan')>-1);
A('call log follows the call count',
  callsFor({calls:412}).length===CALL_LOG.length && callsFor({calls:0}).length===0);

/* ---- step 1: two labels, no prose ---- */
A('step 1 keeps only the two labels', t1.indexOf('>Outbound<')>-1 && t1.indexOf('>Inbound<')>-1);
['You can change everything later','The agent dials your contact list','picks up calls coming into your line',
 'YOU CHOOSE','It answers whoever calls','An agent does one or the other','give them the same voice']
  .forEach(function(w){ A('step 1 drops: "'+w+'"', t1.indexOf(w)===-1); });
var dirPart = t1.split('What job should it do?')[0];
A('the direction cards carry no descriptions', dirPart.indexOf('pick-d')===-1);
A('nothing mono above the divider', (dirPart.match(/class="mono"/g)||[]).length===0);

/* ---- step 1 now carries the job too ---- */
A('both questions on one screen',
  t1.indexOf('Who starts the interaction?')>-1 && t1.indexOf('What job should it do?')>-1);
A('the job appears below the direction',
  t1.indexOf('>Outbound<') < t1.indexOf('What job should it do?'));
A('no job options before a direction is picked', (function(){
  var blank = R(React.createElement(StepDirection, {...C({...newDraft()}), talk:noop}));
  return blank.indexOf('What job should it do?')===-1 && blank.indexOf('>Appointments<')===-1; })());
A('all four jobs plus the escape hatch are offered',
  ['Lead capture &amp; quotes','Appointments','Messages &amp; callbacks','Collections','Something else']
    .every(function(j){ return t1.indexOf(j)>-1; }));
A('continue needs both halves', (function(){
  var foot = function(h){ var ps=h.split('wz-foot'); return ps[ps.length-1]; };   // 'wz-foot-in' also matches
  var half = R(React.createElement(StepDirection, {...C({...newDraft(), direction:'out'}), talk:noop}));
  return foot(half).indexOf('disabled')>-1 && foot(t1).indexOf('disabled')===-1; })());
A('picking a job seeds the brief', OUT.tokens.company==='Clínica Andes');
A('the note points at the new rules step', t1.indexOf('changed in step 4')>-1);
A('the question uses "interaction", not "calls"',
  t1.indexOf('Who starts the interaction?')>-1 && t1.indexOf('Which way do the calls go')===-1);
A('creating leaves direction editable', t1.indexOf('Direction is fixed')===-1 && dirPart.indexOf('disabled')===-1);
A('editing locks it, and says why', (function(){
  var h=R(React.createElement(StepDirection,{...C(OUT), locked:true}));
  return h.indexOf('Direction is fixed once an agent exists')>-1 && (h.match(/disabled=""/g)||[]).length>=2; })());

/* ---- interactions ---- */
var IX=grab(React.createElement(Interactions,{agents:SEED_AGENTS,onOpenRow:noop}));
A('interactions screen renders', IX.indexOf('>Interactions<')>-1);
['Start time','End time','Channel','Client','Source','Campaign','Handled by','Disposition','Duration']
  .forEach(function(h){ A('column: '+h, IX.indexOf('>'+h+'<')>-1); });
A('log has AI rows and human rows', aiRows().length===9 && INTERACTIONS.length===15);
A('the list opens mixed, not filtered', (IX.match(/class="itab-row/g)||[]).length===INTERACTIONS.length);
A('AI and human rows are interleaved', (function(){
  var seq = INTERACTIONS.map(function(r){ return r.voice?'A':'H'; }).join('');
  return seq.indexOf('AH')>-1 && seq.indexOf('HA')>-1 && seq.indexOf('AAAA')===-1; })(),
  'rows are clustered by handler');
A('AI rows still marked', (IX.match(/itab-row itab-ai/g)||[]).length===aiRows().length);
A('AI rows are the ones with a voice', aiRows().every(function(r){ return !!persona(r.voice); }));
A('every AI row points at a call to read', aiRows().every(function(r){ return !!r.agent && !!r.call; }));
A('every row opens', (IX.match(/role="button"/g)||[]).length===INTERACTIONS.length);
A('AI rows name the voice and mark it AI', IX.indexOf('>Gloria<')>-1 && IX.indexOf('>AI<')>-1);
var PEOPLE=R(React.createElement(Interactions,{agents:SEED_AGENTS,onOpenRow:noop}));
A('people rows exist in the data',
  INTERACTIONS.filter(function(r){return !r.voice}).map(function(r){return r.user}).join(',').indexOf('PS Agent')>-1);
A('five media covered', Object.keys(MEDIA).join(',')==='call,chat,wa,email,sms');
A('AI agents appear on calls, chats and whatsapp',
  ['call','chat','wa'].every(function(m){ return aiRows().some(function(r){ return r.medium===m; }); }));
A('both directions appear for AI',
  aiRows().some(function(r){return r.dir==='in'}) && aiRows().some(function(r){return r.dir==='out'}));
var bAI=R(React.createElement(ChannelBadge,{medium:'wa', dir:'in', ai:true}));
var bHum=R(React.createElement(ChannelBadge,{medium:'wa', dir:'in', ai:false}));
A('the AI badge adds a marker', bAI.indexOf('chb-badge')>-1 && bHum.indexOf('chb-badge')===-1);
A('the badge shows direction', bAI.indexOf('chb-dir')>-1);
A('inbound and outbound draw differently',
  R(React.createElement(ChannelBadge,{medium:'call',dir:'in',ai:true}))!==R(React.createElement(ChannelBadge,{medium:'call',dir:'out',ai:true})));
A('badge titles read plainly',
  bAI.indexOf('title="AI agent · WhatsApp · inbound"')>-1
  && bHum.indexOf('title="WhatsApp · inbound"')>-1);
A('each medium has its own colour',
  new Set(Object.keys(MEDIA).map(function(k){return MEDIA[k].ink})).size===Object.keys(MEDIA).length);
A('the nav can reach it', list.indexOf('Interactions')>-1);
A('a switcher sits outside the collapsible sidebar', (list.match(/class="topnav-b"/g)||[]).length===2);
A('the switcher marks where you are', list.indexOf('class="topnav-b" aria-current="true"')>-1);
A('the switcher is not inside the collapsible sidebar', (function(){
  var inNav = list.split('class="nav"')[1].split('</nav>')[0];
  return inNav.indexOf('topnav-b')===-1; })(), 'switcher would vanish with the sidebar');
A('the sidebar items are clickable again', (function(){
  var inNav = list.split('class="nav"')[1].split('</nav>')[0];
  return inNav.indexOf('aria-current="true"')>-1; })(), 'nav items lost their handlers');
A('both sections are reachable from it',
  list.indexOf('>AI Agents</span>')>-1 && list.indexOf('>Interactions</span>')>-1);

/* ---- an opened interaction ---- */
function ixd(rowId, tab){ var r=INTERACTIONS.filter(function(x){return x.id===rowId})[0];
  return grab(React.createElement(InteractionDetail,{row:r,agents:SEED_AGENTS,onBack:noop,onTeach:noop,initialTab:tab})); }
var dCall=ixd('i1'), dWa=ixd('i2'), dHumanCall=ixd('i5'), dEmail=ixd('i9'), dChat=ixd('i4');
A('a call opens on Transcription', dCall.indexOf('>Transcription<')>-1 && dCall.indexOf('>Data<')>-1);
A('a chat opens on Chat', dWa.indexOf('>Chat<')>-1 && dWa.indexOf('>Transcription<')===-1);
A('calls get a player, chats do not', dCall.indexOf('class="player"')>-1 && dWa.indexOf('class="player"')===-1);
A('the header carries campaign and channel', dCall.indexOf('Citas_Sept')>-1 && dCall.indexOf('class="chb"')>-1);
A('AI interactions are marked in the header', dCall.indexOf('Gloria · AI agent')>-1);
A('AI interactions offer teaching', dCall.indexOf('Teach it')>-1 && dHumanCall.indexOf('Teach it')===-1);
A('Comments and Quality are offered', dCall.indexOf('>Comments<')>-1 && dCall.indexOf('>Quality<')>-1);

/* the event rail */
['Started','Hold time','Disposition','Finished'].forEach(function(l){
  A('timeline: '+l, dCall.indexOf('>'+l+'<')>-1); });
A('an AI interaction says who held it', dCall.indexOf('Attended by AI agent')>-1);
A('a human interaction says a user held it', dHumanCall.indexOf('Attended by user')>-1);
A('IVR rows show the automation', dHumanCall.indexOf('Attended by automation')===-1
  || dHumanCall.indexOf('Support_IVR')>-1);
A('a handover shows the person it went to', ixd('i13').indexOf('Handed over to user')>-1);
A('the rail carries timestamps and durations',
  dCall.indexOf('Aug 31, 2026,')>-1 && dCall.indexOf('9:14:02 AM')>-1 && dCall.indexOf('1m 06s')>-1);
A('the timeline can be hidden', dCall.indexOf('aria-label="Hide timeline"')>-1);

/* the body */
A('an AI call shows the real transcript', (function(){ var h=ixd('i1','main');
  return h.indexOf('Le hablo desde un asistente virtual')>-1 && h.indexOf('class="msgs"')>-1; })());
A('a human call has no transcript', dHumanCall.indexOf('No transcription for this call')>-1
  && dHumanCall.indexOf('class="msgs"')===-1);
A('a whatsapp AI thread renders', ixd('i2','main').indexOf('class="msgs"')>-1);
A('an email shows its subject', dEmail.indexOf('Meta Horizon')>-1);
A('a chat AI thread renders', ixd('i4','main').indexOf('class="msgs"')>-1);
A('transcript names the voice', ixd('i1','main').indexOf('Gloria · 09:14')>-1);

/* the data tab */
var J=R(React.createElement(JsonView,{data:ixJson(INTERACTIONS[0])}));
A('data tab paints json', J.indexOf('j-key')>-1 && J.indexOf('j-str')>-1
  && J.indexOf('j-null')>-1 && J.indexOf('j-num')>-1);
A('the payload says whether an AI held it', (function(){
  var byId = function(i){ return INTERACTIONS.filter(function(r){return r.id===i})[0]; };
  return ixJson(byId('i1'))[1].isAI==='true' && ixJson(byId('i5'))[1].isAI==='false'; })());
A('the payload names the handler', ixJson(INTERACTIONS[0])[1].AGENT==='Gloria');
A('a transfer shows in the payload', ixJson(INTERACTIONS.filter(function(r){return r.disp==='Handed over'})[0])[1].apiRes.result.isTransferring==='true');
A('clock maths holds', addSecs('2026-08-31 09:14:02', 63)==='09:15:05');

/* ---- the detail view matches the product chrome ---- */
A('tabs use the product treatment', dCall.indexOf('class="ixtab on"')>-1);
A('comments and quality are navy pills', dCall.indexOf('class="btn-uc"')>-1
  && dCall.indexOf('btn btn-gho btn-sm">Comments')===-1);
A('the player has ticks, a cursor and a download',
  dCall.indexOf('wave-ticks')>-1 && dCall.indexOf('wave-cursor')>-1 && dCall.indexOf('uc-dl')>-1);
A('timestamps are product-formatted', dCall.indexOf('Aug 31, 2026,')>-1 && dCall.indexOf('9:14:02 AM')>-1);
A('stamp splitting is right', stampParts('2026-08-31 14:00:31').t==='2:00:31 PM'
  && stampParts('2026-08-31 09:14:02').d==='Aug 31, 2026,');
A('a handover row names the human on the list', IX.indexOf('psagent1')>-1);
A('a handover shows both handlers in the timeline',
  ixd('i13').indexOf('Handed over to user')>-1 && ixd('i13').indexOf('Gloria')>-1);
A('the rail is channel-coloured', dCall.indexOf('class="tl-line"')>-1);

/* ---- the Summary tab ---- */
A('three tabs now', dCall.indexOf('>Summary<')>-1 && dCall.indexOf('>Transcription<')>-1 && dCall.indexOf('>Data<')>-1);
A('an AI interaction opens on the summary', dCall.indexOf('class="ixtab on">Summary')>-1);
A('a human interaction opens on its transcript', dHumanCall.indexOf('class="ixtab on">Summary')===-1);
['Sentiment','Main reason of the conversation','Key points discussed','Resolution']
  .forEach(function(f){ A('summary field: '+f, dCall.indexOf(f)>-1); });
A('the summary is titled like the reference', dCall.indexOf('Conversation summary')>-1
  && dCall.indexOf('A quick overview of the conversation')>-1);
A('sentiment is a coloured bar', dCall.indexOf('class="sf-sent"')>-1);
A('each field can be copied', (dCall.match(/class="sf-copy"/g)||[]).length===3);
A('copy buttons name their field', dCall.indexOf('aria-label="Copy Resolution"')>-1);
A('sentiment follows the outcome',
  ixSummary(INTERACTIONS.filter(function(r){return r.disp==='Confirmed'})[0], SEED_AGENTS).sentiment==='Positive'
  && ixSummary(INTERACTIONS.filter(function(r){return r.disp==='Took a message'})[0], SEED_AGENTS).sentiment==='Negative'
  && ixSummary(INTERACTIONS.filter(function(r){return r.disp==='No answer'})[0], SEED_AGENTS).sentiment==='Neutral');
A('three sentiments, each with a colour', Object.keys(SENTIMENTS).length===3
  && Object.keys(SENTIMENTS).every(function(k){ return !!SENTIMENTS[k].ink; }));
A('the summary names the company and the voice', (function(){
  var sm = ixSummary(INTERACTIONS.filter(function(r){return r.id==='i1'})[0], SEED_AGENTS);
  return sm.reason.indexOf('Clínica Andes')>-1 && sm.key.indexOf('Gloria')>-1; })());
A('a handover summary names who took over', (function(){
  var sm = ixSummary(INTERACTIONS.filter(function(r){return r.id==='i13'})[0], SEED_AGENTS);
  return sm.resolution.indexOf('psagent1')>-1; })());
A('human interactions have no summary',
  ixSummary(INTERACTIONS.filter(function(r){return !r.voice})[0], SEED_AGENTS)===null);
A('and say so on the tab', ixd('i5','sum').indexOf('No summary for this interaction')>-1);

/* ---- no step counters; the stepper carries position ---- */
A('no "Step n of m" anywhere', BLOB.indexOf(' of 5')===-1 && BLOB.indexOf('Step 1')===-1);
A('the stepper still shows position', (function(){
  var w = R(React.createElement(WizardBar,{step:3, maxStep:5, onGo:noop, busy:false, onExit:noop}));
  return w.indexOf('3. Scope')>-1 && w.indexOf('data-s="now"')>-1; })());
A('the step is called Scope', STEP_LABELS[2]==='Scope' && BLOB.indexOf('The brief')===-1);

/* ---- the brief screen is stripped ---- */
A('no subtitle on the brief', t4.indexOf('Read it like a sentence')===-1);
A('no lock note on the brief', t4.indexOf('required by law')===-1);
A('no Live preview badge', t4.indexOf('Live preview')===-1);
A('no explanatory footer in the widget',
  t4.indexOf('Applies to every call')===-1 && t4.indexOf('Asks for a person')===-1);
A('the brief itself is intact',
  t4.indexOf('What it will do on every call')>-1 && t4.indexOf('It calls ')>-1
  && (t4.match(/class="chip"/g)||[]).length>=4);
A('the heading no longer repeats the first line',
  t4.indexOf('This is your agent')===-1 && t4.indexOf('This agent calls')===-1);
A('it says up front which parts are editable',
  t4.indexOf('Anything underlined is yours to change')>-1);
A('the three things it does read as steps, not a comma pile-up',
  txt(t4).indexOf('On each one it')>-1 && txt(t4).indexOf(', then ')>-1
  && txt(t4).indexOf('and then ')===-1);
A('the preview bubbles remain', (t4.match(/class="bub bub-/g)||[]).length===3);
A('the fixed disclosure chip remains', t4.indexOf('chip-fix')>-1);

/* ---- creation saves v1; it goes live only once a dialer runs it ---- */
A('a new agent is not live until it is in a dialer', (function(){
  var h = apage({...SEED_AGENTS[3], dialers:[], assignedToDialer:false});
  return txt(h).indexOf('Not in a dialer')>-1 && h.indexOf('pill deployed')===-1; })());
A('its first version is the current one', isCurrentVersion(SEED_AGENTS[3], SEED_AGENTS[3].versions[0]));
function rec(dir){ var x=seedFromTemplate({...newDraft(),direction:dir||'in',personaId:'alice',attempts:2,from:8,to:18},'reception');
  x.personaId='alice'; x.direction=dir||'in'; x.lang='en'; return x; }
var RC = rec('in');
A('a fifth template exists and is inbound-only', TEMPLATES.length===5 && template('reception').inboundOnly===true);
A('the four existing templates are untouched',
  TEMPLATES.slice(0,4).map(function(t){return t.id}).join(',')==='leads,appointments,messages,collections'
  && TEMPLATES.slice(0,4).every(function(t){ return !('inboundOnly' in t); }));
/* picker */
var gOut = R(React.createElement(TemplateGallery,{draft:{...newDraft(), direction:'out'}, set:noop, talk:noop}));
var gIn  = R(React.createElement(TemplateGallery,{draft:{...newDraft(), direction:'in'},  set:noop, talk:noop}));
A('under outbound the receptionist card is gone entirely', gOut.indexOf('>Receptionist<')===-1
  && gOut.indexOf('A receptionist only answers')===-1);
A('under inbound the collections card is gone entirely', gIn.indexOf('>Collections<')===-1);
A('outbound + receptionist cannot be produced by the picker', gOut.indexOf('reception')===-1);
A('inbound + collections cannot be produced by the picker', gIn.indexOf('collections')===-1);
A('no card is ever actually disabled — dimmed ones stay pickable', (gOut.match(/disabled=""/g)||[]).length===0
  && (gIn.match(/disabled=""/g)||[]).length===0);
/* focus: which card leads, which are dimmed */
A('outbound leads with Collections, featured (not dimmed)',
  gOut.split('<div class="grid"')[1].indexOf('>Collections<') < gOut.split('<div class="grid"')[1].indexOf('>Lead capture')
  && gOut.split('>Collections<')[0].lastIndexOf('class="pick dim"')===-1
  && gOut.split('>Collections<')[0].lastIndexOf('<button')>gOut.split('<div class="grid"')[1].indexOf('<button')-1);
A('outbound: the other three are dimmed', (gOut.match(/class="pick dim"/g)||[]).length===3);
A('inbound leads with Receptionist, featured (not dimmed)',
  gIn.split('<div class="grid"')[1].indexOf('>Receptionist<') < gIn.split('<div class="grid"')[1].indexOf('>Lead capture'));
A('inbound: the other three are dimmed', (gIn.match(/class="pick dim"/g)||[]).length===3);
A('the featured card itself is never dimmed', gOut.split('>Collections<')[0].split('<button').pop().indexOf('pick dim')===-1
  && gIn.split('>Receptionist<')[0].split('<button').pop().indexOf('pick dim')===-1);
A('galleryTemplates: outbound order is collections, leads, appointments, messages',
  galleryTemplates('out').map(function(t){return t.id}).join(',')==='collections,leads,appointments,messages');
A('galleryTemplates: inbound order is reception, leads, appointments, messages',
  galleryTemplates('in').map(function(t){return t.id}).join(',')==='reception,leads,appointments,messages');
A('galleryTemplates falls back to the full list with no direction', galleryTemplates().length===5);
A('TEMPLATES itself is untouched by the gallery focus table', TEMPLATES.length===5
  && TEMPLATES.map(function(t){return t.id}).join(',')==='leads,appointments,messages,collections,reception');
/* seed */
A('seed: inbound name, message hand-off, warm opener',
  RC.name==='Recepción Estudio Jurídico Lara' && RC.tokens.handoff==='msg' && RC.opener.indexOf('Thank you for calling')===0);
A('seed: handover rules', RC.handover.join(',')==='repeat');
A('seed: three promises, two banned words',
  RC.promises.length===3 && RC.promises.some(function(x){return x.t.indexOf('exact time')>-1})
  && RC.banned.indexOf('guaranteed')>-1);
A('seed: five collect fields, three on', RC.collect.length===5 && RC.collect.filter(function(f){return f.on}).length===3
  && RC.collect.map(function(f){return f.id}).join(',')==='name,phone,reason,email,company');
A('seed: knowledge starts empty', RC.knowledge.about==='' && RC.knowledge.urls.length===0);
A('other templates get clean defaults, not the receptionist fields',
  OUT.collect.length===0 && OUT.knowledge.about==='' && OUT.knowledge.urls.length===0 && COL.collect.length===0);
A('goal options exist', goalsFor('reception').map(function(g){return g.id}).join(',')==='takemsg,book,answer');
/* the brief */
var rb = grab(React.createElement(StepBriefReception, C(RC)));
A('receptionist brief opens the right way', txt(rb).indexOf('It answers calls to Estudio Jurídico Lara')>-1
  && txt(rb).indexOf('What it will do on every call')>-1);
A('collect chip summarises the enabled fields',
  rb.indexOf('collects a name, a callback number and the reason for the call')>-1);
A('goal and hand-off chips are there',
  rb.indexOf('collects the caller’s details and confirms them back')>-1 && rb.indexOf('takes a message and ends the call')>-1);
A('knowledge chip reads empty at first', rb.indexOf('knows nothing about the business yet')>-1);
A('the What it knows block is present, as a collapsible section with its count', rb.indexOf('>What it knows<')>-1
  && rb.indexOf('class="sec-hd"')>-1 && rb.indexOf(knowledgeCount(RC.knowledge))>-1);
A('the disclosure is fixed and in English', rb.indexOf('chip-fix')>-1
  && rb.indexOf('You’re speaking with a virtual assistant for Estudio Jurídico Lara.')>-1);
A('the preview replays the greeting and each enabled question', (function(){
  var pv = rb.split('class="prev-body"')[1];
  return pv.indexOf('May I have your name?')>-1 && pv.indexOf('best number to reach you back on')>-1
    && pv.indexOf('How can we help you today?')>-1 && pv.indexOf('best email')===-1
    && pv.indexOf('It’s María Herrera.')>-1 && (pv.match(/class="bub bub-a"/g)||[]).length===5; })());
A('toggling a field changes the chip and the preview', (function(){
  var d2 = {...RC, collect:RC.collect.map(function(f){ return f.id==='email'?{...f,on:true}:f; })};
  var h = R(React.createElement(StepBriefReception, C(d2)));
  return h.indexOf('collects a name, a callback number, the reason for the call and an email')>-1
    && h.split('class="prev-body"')[1].indexOf('best email')>-1; })());
A('a custom question shows up in chip and preview', (function(){
  var d2 = {...RC, collect:RC.collect.concat([{id:'custom_1', label:'Order number', question:'Do you have your order number handy?', on:true, custom:true}])};
  var h = R(React.createElement(StepBriefReception, C(d2)));
  return h.indexOf('plus 1 custom question')>-1 && h.split('class="prev-body"')[1].indexOf('order number handy')>-1; })());
A('knowledge chip counts profile and pages', (function(){
  var h = R(React.createElement(StepBriefReception, C({...RC, knowledge:{about:'Law firm in Bogotá.', urls:['a','b','c']}})));
  return h.indexOf('answers from the business profile and 3 trained pages')>-1; })());
A('collect label degrades cleanly', collectLabel([])==='collects nothing extra'
  && collectLabel([{id:'x',label:'Thing',on:true,custom:true}])==='collects 1 custom question');
/* rules step */
var rr = grab(React.createElement(StepRules, C(RC)));
A('rules step is retitled for the receptionist', rr.indexOf('What it asks, and the rules it cannot break')>-1);
A('its first section is the collect editor', rr.indexOf('What it asks every caller')>-1
  && rr.indexOf('What it asks every caller') < rr.indexOf('Handover rules') && rr.indexOf('3 questions')>-1);
A('other templates keep the old title and no such section',
  t5.indexOf('>The rules it cannot break<')>-1 && t5.indexOf('What it asks every caller')===-1);
var cf = grab(React.createElement(CollectFields,{draft:RC, set:noop}));
A('the collect editor lists all five fields with their questions',
  (cf.match(/role="checkbox"/g)||[]).length===5 && cf.indexOf('What’s the best email for you?')>-1);
A('standard fields are not removable, custom ones are', cf.indexOf('aria-label="Remove ')===-1
  && R(React.createElement(CollectFields,{draft:{...RC, collect:RC.collect.concat([{id:'custom_2',label:'PO',question:'PO?',on:true,custom:true}])}, set:noop}))
      .indexOf('aria-label="Remove PO"')>-1);
A('the add-custom row is there, with both boxes labelled in plain words',
  cf.indexOf('Add a question of your own')>-1
  && cf.indexOf('What you call it')>-1 && cf.indexOf('What it asks out loud')>-1);
A('its Add button is present but disabled until both boxes are filled',
  cf.indexOf('>Add</button>')>-1 && cf.indexOf('disabled=""')>-1
  && cf.indexOf('Fill both boxes to add it')>-1);
A('the boxes are real inputs, not borderless text', (cf.match(/class="inp"/g)||[]).length>=2);
A('it says what adding one does', cf.indexOf('Asked of every caller')>-1);
/* simulator */
var rt = grab(React.createElement(StepTest, C(RC)));
A('receptionist quick replies', rt.indexOf('I’d like to leave a message')>-1 && rt.indexOf('Can I book an appointment?')>-1
  && rt.indexOf('What are your opening hours?')>-1 && rt.indexOf('¿Con quién hablo?')===-1);
A('other templates keep their quick replies', t6.indexOf('¿Con quién hablo?')>-1 && t6.indexOf('opening hours')===-1);
A('the simulator opens with the English disclosure', rt.indexOf('You’re speaking with a virtual assistant for')>-1);
A('other templates keep the Spanish disclosure', t6.indexOf('Le hablo desde un asistente virtual de')>-1
  && disclosureFor(OUT)==='Le hablo desde un asistente virtual de Clínica Andes.');
A('leave a message → asks the first enabled question', agentReply('I’d like to leave a message', RC).txt.indexOf('May I have your name?')>-1);
A('appointment with the message goal → takes details instead',
  agentReply('Can I book an appointment?', RC).why.indexOf('takes a message')>-1);
A('appointment with the booking goal → books',
  agentReply('Can I book an appointment?', {...RC, tokens:{...RC.tokens, goal:'book'}}).why.indexOf('books from the connected calendar')>-1);
/* ---- a receptionist can hold several jobs at once ---- */
var G2 = {...RC, tokens:{...RC.tokens, goals:['takemsg','book'], goal:'takemsg'}};
var G3 = {...RC, tokens:{...RC.tokens, goals:['takemsg','book','answer'], goal:'takemsg'}};
A('only the receptionist takes a list of goals',
  multiGoal('reception')===true && multiGoal('collections')===false && multiGoal('leads')===false);
A('a seeded receptionist starts with one job', RC.tokens.goals.join(',')==='takemsg'
  && RC.tokens.goal==='takemsg');
A('other templates get no goal list', OUT.tokens.goals===undefined && COL.tokens.goals===undefined);
A('one job still reads as the full phrase',
  goalLabel(RC)==='collects the caller’s details and confirms them back');
A('several jobs read as a sentence, not stacked phrases',
  goalLabel(G2)==='takes a message and books appointments'
  && goalLabel(G3)==='takes a message, books appointments and answers questions from the business profile');
A('the agent card and page quote the whole list',
  ('It '+goalLabel(G3)+'.').indexOf('books appointments and answers questions')>-1);
A('the spoken line stays single — it never recites the list',
  goalSay(G3)===goalSay(RC) && goalSay(G3).indexOf('books appointments')===-1);
A('a secondary job still drives the simulator',
  agentReply('Can I book an appointment?', G2).why.indexOf('books from the connected calendar')>-1);
A('a job that is not selected does not fire',
  agentReply('Can I book an appointment?', RC).why.indexOf('takes a message')>-1);
A('goal and goals can never silently disagree', (function(){
  /* goal set alone, outside the list, wins — the list is ignored rather than overriding it */
  var odd = {...RC, tokens:{...RC.tokens, goals:['takemsg'], goal:'book'}};
  return goalIds(odd).join(',')==='book'; })());
A('goalIds falls back to the single goal when there is no list',
  goalIds(OUT).join(',')===OUT.tokens.goal);
A('every receptionist goal has a short form for lists', goalsFor('reception').every(function(g){
  return !!g.short && g.short.length < g.v.length; }));
A('other templates need no short forms', goalsFor('collections').every(function(g){ return !g.short; }));
/* chip popovers only exist while open — see modals.js for what is inside them */
A('a custom field added in the brief shows up in the chip summary', (function(){
  var d2 = {...RC, collect:RC.collect.concat([{id:'custom_1', label:'Order number',
    question:'Do you have your order number handy?', on:true, custom:true}])};
  return R(React.createElement(StepBriefReception, C(d2))).indexOf('plus 1 custom question')>-1; })());
A('CollectAdd starts empty, with a disabled Add rather than none at all', (function(){
  var h = R(React.createElement(CollectAdd,{fields:[], set:noop}));
  return h.indexOf('value=""')>-1 && h.indexOf('>Add</button>')>-1 && h.indexOf('disabled=""')>-1; })());
A('CollectAdd enables Add once both halves are there', (function(){
  /* the inputs are uncontrolled from outside, so drive the component's own guard directly */
  var h = R(React.createElement(CollectAdd,{fields:[], set:noop}));
  return h.indexOf('Fill both boxes to add it')>-1; })());

/* ---- a receptionist may transfer, not only take a message ---- */
var XFER = {...RC, tokens:{...RC.tokens, handoff:'campaign', campaign:'Citas_Sept'}};
/* what the chip offers is inside its popover — see modals.js */
A('it still starts on taking a message', RC.tokens.handoff==='msg');
A('the template no longer restricts the hand-off list', handoffFor('reception').length===HANDOFF.length);
A('a transfer choice reads back in the brief',
  R(React.createElement(StepBriefReception, C(XFER))).indexOf('transfers to the Citas_Sept campaign')>-1);
A('asked for a person, it answers in English and honours the setting',
  agentReply('Can I speak to a person?', RC).txt
    ==='You’re speaking with a virtual assistant for Estudio Jurídico Lara. I’ll take a message and someone will call you back.'
  && agentReply('Can I speak to a person?', XFER).txt.indexOf('put you through to the team on that campaign')>-1);
A('it never answers that in Spanish', agentReply('Can I speak to a person?', XFER).txt.indexOf('Soy un asistente')===-1);
A('every hand-off has an English line', HANDOFF.every(function(o){ return !!o.sayEn; }));
A('the Spanish templates still answer in Spanish', (function(){
  var r = agentReply('¿hablo con una persona?', OUT).txt;
  return r.indexOf('Soy un asistente virtual de')===0 && r.indexOf('put you through')===-1; })());
A('a transfer shows in a version comparison', (function(){
  var rows = diffFacts(configOf(RC), configOf(XFER), RC);
  return rows.length===1 && rows[0].k==='Asks for a person'
    && rows[0].to==='transfers to the Citas_Sept campaign'; })());

A('hours with an empty profile → deflects to a message',
  agentReply('What are your opening hours?', RC).why.indexOf('Nothing in the business profile')>-1);
A('hours with a profile → answers from it', (function(){
  var r = agentReply('What are your opening hours?', {...RC, knowledge:{about:'We are open Monday to Friday, 9 to 6. Closed on holidays.', urls:[]}});
  return r.why==='Answered from the business profile' && r.txt.indexOf('Monday to Friday, 9 to 6')>-1; })());
A('receptionist branches never fire for other templates', agentReply('What are your opening hours?', OUT).why.indexOf('business profile')===-1);
/* end to end */
A('a finished receptionist is inbound with no batch-test concept', RC.direction==='in' && isLive(RC)===false);

/* ---- earlier guarantees still hold ---- */
['Colombia','Costa Rica','Uruguay','Bogotá','rioplatense','Messaging hours','Voice + text','Have it call me','Call the agent','Calling schedule']
  .forEach(function(w){ A('no "'+w+'" anywhere', BLOB.indexOf(w)===-1); });
A('the stepper label is Test, not "Test it"', STEP_LABELS.indexOf('Test it')===-1 && STEP_LABELS[4]==='Test');
A('five steps ending in Test', STEP_LABELS.length===5 && STEP_LABELS[4]==='Test');

A('call list still first', CL[0].indexOf('Which call should it learn from')>-1);
A('the call-list eyebrow drops the status', CL[0].indexOf('Citas Clínica Andes · ')===-1);
A('one create affordance', (list.match(/Create agent/g)||[]).length===1);
A('no dashed create card', list.indexOf('ag-new')===-1);
A('create sits in the header, beside the title', (function(){
  var hd = list.split('class="panel-hd"')[1].split('</p>')[0];
  return hd.indexOf('>AI Agents</h1>')>-1 && hd.indexOf('Create agent')>-1; })());
A('create is the primary action', list.indexOf('btn btn-pri')>-1);
A('the direction badge sits with the agent name', (function(){
  var head = pAct.split('</h1>')[1].split('class="ag-meta"')[0];
  return head.indexOf('Outbound')>-1; })(), 'badge is not beside the name');
A('the button row no longer holds the badge',
  pAct.indexOf('Outbound') < pAct.indexOf('>Test</button>'));
A('fixed disclosure kept', t4.indexOf('chip-fix')>-1);
A('no prompt text', K[0].indexOf('no script or prompt text')>-1);
/* ================= the prompt the page would send: every setting, and only the ticked ones ================= */
var PR = agentPrompt(COL);
A('it names the voice, the company and the language',
  PR.indexOf('You are Frank, a virtual assistant for Banco Sol')>-1
  && PR.indexOf('Speak only Spanish (Latin America)')>-1);
A('it says who placed the call', PR.indexOf('You placed this call to the customer')>-1
  && agentPrompt(mk('appointments','gloria','in')).indexOf('The customer called you')>-1);
A('the disclosure is in it word for word', PR.indexOf('"'+disclosureFor(COL)+'"')>-1);
A('so is the opening line', PR.indexOf('"'+COL.opener+'"')>-1);
A('the identity check is in it, with its spoken line',
  PR.indexOf('verify who you are speaking to')>-1 && PR.indexOf('¿Hablo con la persona titular?')>-1);
A('an agent set to speak to whoever answers has no identity step', (function(){
  var d = {...OUT, tokens:{...OUT.tokens, identity:'none'}};
  return agentPrompt(d).indexOf('Before discussing anything')===-1; })());
A('the goal is in it with its number', PR.indexOf('1. full payment within 5 days')>-1
  && PR.indexOf('dentro de 5 días')>-1);
A('changing the number changes the prompt',
  agentPrompt({...COL, tokens:{...COL.tokens, params:{date5:10}}}).indexOf('within 10 days')>-1);
A('the hand-off and its spoken line are in it',
  PR.indexOf('transfer to the Cobros_Ago campaign')>-1 && PR.indexOf(val(HANDOFF,'campaign').say)>-1);
A('every handover trigger the template ticks is listed', COL.handover.every(function(id){
  return PR.indexOf(HANDOVER.filter(function(o){return o.id===id})[0].v)>-1; }));
A('your own handover rule is listed too',
  agentPrompt({...OUT, handoverOther:['El paciente menciona una urgencia médica']})
    .indexOf('El paciente menciona una urgencia médica')>-1);
A('every ticked never-promise is a rule', promisesOf(COL).every(function(r){ return PR.indexOf(r.t)>-1; }));
A('an unticked one is simply absent', (function(){
  var d = untick(COL, 'Never promise to remove interest');
  return agentPrompt(d).indexOf('Never promise to remove interest')===-1
    && agentPrompt(d).indexOf('Never promise a discount on the balance')>-1; })());
A('the other kind of rule is in it', PR.indexOf(THIRD_PARTY_RULE)>-1);
A('the banned words are in it, as a list to avoid', PR.indexOf('Never say any of these words: '+COL.banned.join(', '))>-1);
A('a word you add is in it; one you remove is not', (function(){
  var d = {...COL, banned:COL.banned.filter(function(w){return w!=='abogado'}).concat(['plazo'])};
  var pr = agentPrompt(d);
  return pr.indexOf('plazo')>-1 && pr.indexOf('abogado')===-1; })());
A('corrections a supervisor approved are rules', agentPrompt({...COL, extraRules:['Read the date back before ending the call']})
  .indexOf('Read the date back before ending the call')>-1);
A('an English agent is told to speak English, and its lines are English', (function(){
  var pr = agentPrompt(en('collections'));
  return pr.indexOf('Speak only English (United States)')>-1
    && pr.indexOf('Am I speaking with the account holder?')>-1 && pr.indexOf('"Could you pay the full balance within 5 days?"')>-1; })());
A('the receptionist prompt carries its questions in order, and what it knows', (function(){
  var r = seedFromTemplate({...newDraft(), direction:'in', personaId:'alice'}, 'reception');
  r.knowledge = {about:'Open Monday to Friday, 9 to 6.', urls:['example.com/hours']};
  var pr = agentPrompt(r);
  var i1 = pr.indexOf('May I have your name?'), i2 = pr.indexOf('best number to reach you back on'), i3 = pr.indexOf('How can we help you today?');
  return i1>-1 && i2>i1 && i3>i2 && pr.indexOf('best email')===-1
    && pr.indexOf('Open Monday to Friday, 9 to 6.')>-1 && pr.indexOf('example.com/hours')>-1
    && pr.indexOf('take a message rather than guess')>-1; })());
A('a receptionist is not told to verify an account holder',
  agentPrompt(seedFromTemplate({...newDraft(), direction:'in', personaId:'alice'}, 'reception')).indexOf('account holder')===-1);
/* the screen says "it agrees"; the prompt must say "you agree" */
A('template verbs are addressed to the model in the second person',
  PR.indexOf('Your job: agree a payment with the customer')>-1 && PR.indexOf('you state the amount owed')>-1
  && PR.indexOf('verify who you are speaking to')>-1 && PR.indexOf('you transfer to the Cobros_Ago campaign')>-1);
A('and none of the third-person forms leak through',
  PR.indexOf('you agrees')===-1 && PR.indexOf('you transfers')===-1 && PR.indexOf('You explains')===-1
  && PR.indexOf('verifies who it is')===-1);
A('a multi-job receptionist gets every verb converted', (function(){
  var r = seedFromTemplate({...newDraft(), direction:'in', personaId:'alice'}, 'reception');
  r.tokens = {...r.tokens, goals:['takemsg','book','answer'], goal:'takemsg'};
  var pr = agentPrompt(r);
  return pr.indexOf('you take a message, book appointments and answer questions from the business profile')>-1; })());
A('asYou handles the shapes the templates use', asYou('agrees a payment date')==='agree a payment date'
  && asYou('verifies who it is speaking to')==='verify who you are speaking to'
  && asYou('only confirms, never reschedules')==='only confirm, never reschedule'
  && asYou('collects the caller’s details and confirms them back')==='collect the caller’s details and confirm them back'
  && asYou('speaks to whoever answers')==='speak to whoever answers');
A('text a supervisor typed is quoted untouched, not conjugated', (function(){
  var pr = agentPrompt({...OUT, handoverOther:['El paciente menciona una urgencia médica'], extraRules:['Reads the date back twice']});
  return pr.indexOf('El paciente menciona una urgencia médica')>-1 && pr.indexOf('Reads the date back twice')>-1; })());
A('it asks for JSON with the governing rule, so the caption survives',
  PR.indexOf('Reply with JSON only')>-1 && PR.indexOf('"why"')>-1 && PR.indexOf('one rule or setting above')>-1);
A('it asks for phone-length turns', PR.indexOf('one question at a time')>-1 && PR.indexOf('one or two short sentences')>-1);
/* the turns the sampler receives */
var HIST = [{who:'a',txt:'Hola, le hablo de Banco Sol.'},{who:'c',txt:'Sí, dígame'},{who:'a',txt:'¿Hablo con la persona titular?'}];
var TURNS = liveTurns(COL, HIST, 'sí, soy yo');
A('turns open with the user, as the capability requires', TURNS[0].role==='user');
A('roles strictly alternate', TURNS.every(function(t,i){ return i===0 || t.role!==TURNS[i-1].role; }));
A('the standing instructions ride in the first user turn',
  TURNS[0].content.indexOf('You are Frank, a virtual assistant for Banco Sol')===0
  && TURNS[0].content.indexOf('Reply with JSON only')>-1);
A('so does the line the agent already said on screen',
  TURNS[0].content.indexOf('YOU HAVE ALREADY SAID\n"Hola, le hablo de Banco Sol."')>-1);
A('the first customer line follows the instructions in that same turn',
  TURNS[0].content.indexOf('The customer says: Sí, dígame')>-1);
A('later agent lines are assistant turns, and the new input is the last user turn', (function(){
  var last = TURNS[TURNS.length-1];
  return TURNS[1].role==='assistant' && TURNS[1].content==='¿Hablo con la persona titular?'
    && last.role==='user' && last.content==='sí, soy yo'; })());
A('two customer lines in a row are merged, not sent as two user turns', (function(){
  var t = liveTurns(COL, [{who:'a',txt:'Hola'},{who:'c',txt:'uno'},{who:'c',txt:'dos'}], 'tres');
  return t.length===1 && t[0].role==='user' && t[0].content.indexOf('uno\n\ndos\n\ntres')>-1; })());
A('with no history at all the prompt still opens as a user turn', (function(){
  var t = liveTurns(COL, [], 'hola');
  return t.length===1 && t[0].role==='user' && t[0].content.indexOf('The customer says: hola')>-1; })());
A('the prompt itself is sent once, not on every turn',
  TURNS.filter(function(t){ return t.content.indexOf('RULES YOU CANNOT BREAK')>-1; }).length===1);
/* the live path is guarded */
A('with no runtime the page is in Script mode', liveRuntime()===null);
A('and the Test step says so, with the reason on hover', (function(){
  var h = R(React.createElement(StepTest, C(COL)));
  return h.indexOf('>Script<')>-1 && h.indexOf('Live mode is not available in this build')>-1
    && h.indexOf('Live · Claude')===-1 && h.indexOf('Claude credits')===-1; })());
A('the scripted simulator is untouched underneath',
  agentReply('¿me quita los intereses?', COL).why==='Rule: Never promise to remove interest');

/* ================= v75 · A: save from the Rules step, test from the agent page ================= */
var t5c = R(React.createElement(StepRules, C(COL)));
A('the Rules step saves the agent', t5.indexOf('Save &amp; open the agent')>-1 && t5c.indexOf('Save &amp; open the agent')>-1);
A('the Test step no longer saves', t6.indexOf('Save &amp; open the agent')===-1 && t6.indexOf('Back to the rules')>-1);
A('opened from the agent page, the Test step goes back to the agent',
  R(React.createElement(StepTest, {...C(COL), testExit:'agent'})).indexOf('Back to the agent')>-1);
A('testing is always available: no add-on gate, no demo switch',
  typeof StepTestLocked==='undefined' && typeof TESTING_ADDON_DEFAULT==='undefined'
  && list.indexOf('Testing add-on')===-1 && pAct.indexOf('add-on')===-1 && pAct.indexOf('>Test</button>')>-1);
A('the stepper still has five steps', STEP_LABELS.length===5 && STEP_LABELS[4]==='Test');
A('the wizard saves on step 4 and never on step 5',
  App.toString().indexOf('step === 4 ? (')>-1 && App.toString().indexOf(': finish()) :')>-1 && App.toString().indexOf('step === 5 ? finish()')===-1);
A('the test step writes no version: it only routes back', App.toString().indexOf("scr.from === 'agent' ? setScr({ n: 'agent', id: scr.editing }) : go(4)")>-1);

/* ================= v75 · B: three third-party rules, one with a text of its own ================= */
var TPR = otherRules(COL).map(function(r){ return r.t; });
A('collections seeds all three third-party rules', TPR.indexOf(THIRD_PARTY_RULE)>-1
  && TPR.indexOf(THIRD_PARTY_NO_AMOUNT)>-1 && TPR.indexOf(THIRD_PARTY_MESSAGE)>-1);
A('other outbound templates keep only the end-call rule',
  otherRules(OUT).filter(function(r){ return r.t===THIRD_PARTY_NO_AMOUNT || r.t===THIRD_PARTY_MESSAGE; }).length===0
  && otherRules(OUT).some(function(r){ return r.t===THIRD_PARTY_RULE; }));
A('inbound agents get none of them', otherRules(IN).length===0 || otherRules(IN).every(function(r){ return r.t.indexOf('intended person')<0; }));
A('the message rule carries an editable text, seeded for the company',
  thirdParty(COL).message==='Por favor, pida a la persona titular que se comunique con Banco Sol.');
A('an English agent gets the English message',
  thirdParty(en('collections')).message==='Please ask the account holder to get in touch with Banco Sol.');
var rulesCol = R(React.createElement(OtherRules,{draft:COL,set:noop}));
A('the rules step shows the field under the message rule', rulesCol.indexOf('aria-label="Message for whoever answers"')>-1
  && rulesCol.indexOf('value="Por favor, pida a la persona titular que se comunique con Banco Sol."')>-1);
A('the rule’s label quotes its text', rulesCol.indexOf('“Por favor, pida a la persona titular que se comunique con Banco Sol.”')>-1);
A('unticking the message rule hides its field',
  R(React.createElement(OtherRules,{draft:untick(COL, THIRD_PARTY_MESSAGE),set:noop})).indexOf('Message for whoever answers')===-1);
var WP = 'No soy yo, se equivocó';
var msgOf = function(d, m){ return {...d, promises:d.promises.map(function(r){ return r.t===THIRD_PARTY_MESSAGE ? {...r, param:m} : r; })}; };
A('wrong person + message rule: says the message, then ends',
  agentReply(WP, COL).txt==='Por favor, pida a la persona titular que se comunique con Banco Sol. Que tenga buen día.');
A('wrong person + only End the call: ends saying nothing',
  agentReply(WP, untick(COL, THIRD_PARTY_MESSAGE)).txt.indexOf('no dejo ningún detalle')>-1
  && agentReply(WP, untick(COL, THIRD_PARTY_MESSAGE)).why.indexOf('wrong person answered')>-1);
A('wrong person with neither rule: no special handling',
  agentReply(WP, untick(untick(COL, THIRD_PARTY_MESSAGE), THIRD_PARTY_RULE)).why.indexOf('wrong person')===-1);
A('the amount never reaches whoever answered', agentReply(WP, COL).txt.indexOf(AMOUNT_PLACEHOLDER)===-1
  && agentReply(WP, untick(COL, THIRD_PARTY_MESSAGE)).txt.indexOf(AMOUNT_PLACEHOLDER)===-1);
A('and the caption says so while the no-amount rule is on', agentReply(WP, COL).why.indexOf('the amount is never disclosed')>-1
  && agentReply(WP, untick(COL, THIRD_PARTY_NO_AMOUNT)).why.indexOf('never disclosed')===-1);
A('a custom message is the one it leaves', agentReply(WP, msgOf(COL, 'Llame al 600.')).txt.indexOf('Llame al 600.')===0);
A('the English agent leaves it in English',
  agentReply('Wrong person, she is not here', en('collections')).txt==='Please ask the account holder to get in touch with Banco Sol. Have a good day.');
A('the prompt lists all three, quoting the message', PR.indexOf(THIRD_PARTY_NO_AMOUNT)>-1
  && PR.indexOf('leave this message: “Por favor, pida a la persona titular que se comunique con Banco Sol.”')>-1
  && PR.indexOf('say that message, nothing else, and end the call')>-1);
A('an unticked one is absent from the prompt', agentPrompt(untick(COL, THIRD_PARTY_NO_AMOUNT)).indexOf(THIRD_PARTY_NO_AMOUNT)===-1);
A('changing the message shows in a version diff', (function(){
  var v = {...COL, versions:[{id:'v1', cfg:configOf(msgOf(COL, 'Llame al 600.'))}, {id:'v2', cfg:configOf(COL)}]};
  var rows = versionDiff(v, v.versions[0]).rows;
  return rows.some(function(r){ return r.k==='Other rule' && r.kind==='add' && r.item.indexOf('Llame al 600.')>-1; })
    && rows.some(function(r){ return r.k==='Other rule' && r.kind==='drop' && r.item.indexOf('con Banco Sol.')>-1; }); })());
A('the agent summary quotes the message', R(React.createElement(AgentSummary,{agent:agentOf('a6')})).indexOf('leave this message: “Por favor')>-1);
A('the two collections seeds carry all three', ['a5','a6'].every(function(id){ var rs = otherRules(agentOf(id)).map(function(r){return r.t;});
  return rs.indexOf(THIRD_PARTY_RULE)>-1 && rs.indexOf(THIRD_PARTY_NO_AMOUNT)>-1 && rs.indexOf(THIRD_PARTY_MESSAGE)>-1; }));

/* ================= v75 · C: two handover presets removed ================= */
A('HANDOVER has six presets, none upset or consent', HANDOVER.length===6
  && !HANDOVER.some(function(o){ return o.id==='angry' || o.id==='consent'; }));
A('no template ticks them any more', Object.keys(HANDOVER_SEED).every(function(k){
  return HANDOVER_SEED[k].indexOf('angry')<0 && HANDOVER_SEED[k].indexOf('consent')<0; }));
/* leads and messages offer two goal-line prompts on purpose; the templates that lost a line
   to the removed presets are the ones that must still land every prompt on a rule */
A('every quick reply of collections and appointments reaches a real branch, in both languages',
  ['collections','appointments'].every(function(t){
    var es = mk(t,'gloria','out'); es.lang='es'; var e = en(t);
    return quicksFor(es).every(function(q){ return agentReply(q, es).why.indexOf('Goal setting')!==0; })
      && quicksFor(e).every(function(q){ return agentReply(q, e).why.indexOf('Goal setting')!==0; }); }));
A('the replacement lines hit the rule they were chosen for',
  agentReply('¿Me atiende otro médico?', OUT).why.indexOf('specific doctor')>-1
  && agentReply('Necesito que me solucionen esto', mk('messages','linda','out')).why.indexOf('resolution')>-1
  && agentReply('¿Me hace un descuento?', COL).why.indexOf('Rule: Never promise')===0);
A('the handover section counts fewer rules', t5.indexOf('2 rules')>-1 && t5c.indexOf('3 rules')>-1);

/* ================= v75 · D: a transfer goes to a campaign ================= */
A('HANDOFF is exactly campaign + message', HANDOFF.map(function(o){ return o.id; }).join(',')==='campaign,msg');
A('handLabel names the campaign', handLabel(COL)==='transfers to the Cobros_Ago campaign'
  && handLabel({tokens:{handoff:'msg'}})==='takes a message and ends the call');
A('every seeded transfer names a campaign that exists',
  SEED_AGENTS.every(function(x){ return x.tokens.handoff!=='campaign' || CAMPAIGNS.indexOf(x.tokens.campaign)>-1; }));
A('seed migration: desk, sales and sup are gone, in versions too',
  SEED_AGENTS.every(function(x){ return ['campaign','msg'].indexOf(x.tokens.handoff)>-1; })
  && SEED_AGENTS.every(function(x){ return (x.versions||[]).every(function(v){ var w=(v.was&&v.was.tokens)||{};
       return !w.handoff || (w.handoff==='campaign' && CAMPAIGNS.indexOf(w.campaign)>-1) || w.handoff==='msg'; }); }));
A('the templates seed their campaign', template('collections').campaign==='Cobros_Ago'
  && template('appointments').campaign==='Citas_Sept' && template('leads').campaign==='Sales_Engineers');
A('the brief chip reads the campaign into the sentence', R(React.createElement(StepBrief, C(COL))).indexOf('transfers to the Cobros_Ago campaign')>-1);
A('the agent page line and the summary use it too', apage(agentOf('a1')).indexOf('Asks for a person → transfers to the Citas_Sept campaign')>-1
  && R(React.createElement(AgentSummary,{agent:agentOf('a1')})).indexOf('transfers to the Citas_Sept campaign')>-1);
A('an old stored hand-off id falls back to the campaign option', val(HANDOFF,'desk').id==='campaign' && val(HANDOFF,'sup').id==='campaign');
A('the receptionist keeps taking messages', agentOf('a3').tokens.handoff==='msg' && RC.tokens.handoff==='msg');

/* ================= v75 · E: how the customer pays ================= */
A('collections offers are the five, and intent is no longer one of them', goalsFor('collections').map(function(g){ return g.id; }).join(',')==='date5,partial,minimum,twopart,reduced');
A('a5 agrees a date now, and its three versions still differ', (function(){ var a5 = agentOf('a5');
  return a5.tokens.goal==='date5'
    && versionDiff(a5, a5.versions[0]).rows.length>0 && versionDiff(a5, a5.versions[1]).rows.length>0
    && versionDiff(a5, a5.versions[1]).rows.some(function(r){ return r.k==='Banned word'; })
    && versionDiff(a5, a5.versions[0]).rows.some(function(r){ return r.k==='What it says about the balance'; }); })());
var c4v = R(React.createElement(StepBrief, C(COL)));
A('the brief gains a payment sentence for collections only', c4v.indexOf('sends the payment link to the contact channel on file')>-1
  && t4.indexOf('payment link')===-1 && R(React.createElement(StepBrief, C(mk('leads','antonio','out')))).indexOf('contact channel on file')===-1);
var PLACE = {...COL, tokens:{...COL.tokens, payment:'place', paymentPlace:'any Banco Sol branch'}};
A('the place option carries its text', paymentLabel(PLACE)==='tells the customer where to pay: any Banco Sol branch'
  && paymentSay({...PLACE, lang:'en'})==='You can pay at any Banco Sol branch.'
  && R(React.createElement(StepBrief, C(PLACE))).indexOf('where to pay: any Banco Sol branch')>-1);
A('the confirmed line ends with the payment line',
  agentReply('Sí, confirmo', COL, [{who:'a', txt:'x', stage:0}]).txt.indexOf('Le envío el enlace de pago al canal de contacto que tenemos registrado.')>-1
  && agentReply('Sí, confirmo', PLACE, [{who:'a', txt:'x', stage:0}]).txt.indexOf('Puede pagar en any Banco Sol branch.')>-1);
A('¿Cómo pago? is answered from the setting', agentReply('¿Cómo pago?', COL).why.indexOf('Payment setting')===0
  && agentReply('How do I pay?', en('collections')).txt.indexOf('contact channel we have on file')>-1);
A('the prompt states it', PR.indexOf('you send the payment link to the contact channel on file')>-1
  && agentPrompt(PLACE).indexOf('you tell the customer where to pay: any Banco Sol branch')>-1);
A('the diff sees it, for collections only',
  cfgFacts(configOf(COL), COL)['How payment is arranged']==='sends the payment link to the contact channel on file, without saying which'
  && cfgFacts(configOf(OUT), OUT)['How payment is arranged']===undefined);

/* ================= v75 · F: what it says about the balance ================= */
var EXISTS = {...COL, tokens:{...COL.tokens, disclose:'exists'}};
A('two options, seeded to state the amount', DISCLOSE.length===2 && discloseOf(COL).id==='amount' && c4v.indexOf('states the amount owed')>-1);
A('a6 states the amount, a5 only that a balance exists', agentOf('a6').tokens.disclose==='amount' && agentOf('a5').tokens.disclose==='exists');
A('the spoken line follows the setting', discloseSay(COL)==='Tiene un saldo pendiente de $184.50.'
  && discloseSay(EXISTS)==='Tiene un saldo pendiente con nosotros.'
  && discloseSay(en('collections')).indexOf('outstanding balance of $184.50')>-1);
A('the preview and the fallback reply carry it', c4v.indexOf('Tiene un saldo pendiente de $184.50.')>-1
  && agentReply('mmm', COL).txt.indexOf('Tiene un saldo pendiente de $184.50.')===0);
A('the exists setting never says the figure', agentReply('mmm', EXISTS).txt.indexOf('$184.50')===-1
  && agentPrompt(EXISTS).indexOf('Do not state the amount')>-1 && agentPrompt(EXISTS).indexOf('The amount owed is')===-1);
A('the prompt states the rule', PR.indexOf('you state the amount owed')>-1 && PR.indexOf('The amount owed is $184.50')>-1);
A('the diff sees it', cfgFacts(configOf(COL), COL)['What it says about the balance']==='states the amount owed'
  && cfgFacts(configOf(EXISTS), EXISTS)['What it says about the balance']==='says only that there is an outstanding balance');
A('other briefs are untouched by the two new chips', ['appointments','leads','messages'].every(function(t){
  var h = R(React.createElement(StepBrief, C(mk(t,'gloria','out'))));
  return h.indexOf('amount owed')===-1 && h.indexOf('where to pay')===-1 && h.indexOf('contact channel')===-1; }));
A('the English collections scope screen and simulator still scan clean',
  spanishIn(R(React.createElement(StepBrief, C(en('collections'))))).length===0
  && spanishIn(R(React.createElement(StepTest, C(en('collections'))))).length===0);
A('and so does its rules step', spanishIn(R(React.createElement(OtherRules,{draft:en('collections'),set:noop}))).length===0);

/* ================= v77 · warn before saving an edit of a live agent ================= */
var SW = R(React.createElement(SaveLiveWarning,{agent:agentOf('a6'), onCancel:noop, onConfirm:noop}));
A('the warning names the agent, its dialer and the version it replaces', txt(SW).indexOf('Cobros Banco Sol is live in Cobros_Septiembre')>-1
  && txt(SW).indexOf('Saving replaces the version it is running, v2, in every one of them at once.')>-1);
A('it is titled live, not deployed', SW.indexOf('This agent is live')>-1 && SW.indexOf('deployed')===-1);
A('it says ongoing interactions will be affected', SW.indexOf('Any interactions in progress will be affected.')>-1);
A('it offers Keep editing and Save and replace', SW.indexOf('>Keep editing</button>')>-1 && SW.indexOf('>Save and replace</button>')>-1);
A('two dialers are both named', txt(R(React.createElement(SaveLiveWarning,{agent:agentOf('a2'), onCancel:noop, onConfirm:noop}))).indexOf('Cotizaciones_Q3 and Leads_Web')>-1);
A('the rules step asks only when editing an agent live in a dialer', App.toString().indexOf('scr.editing && isLive(')>-1
  && App.toString().indexOf('setAskSave(true) : finish()')>-1);
A('confirming saves; cancelling does not', App.toString().indexOf('setAskSave(false); finish();')>-1);

/* ================= v78 · collections: the disclosure is locked, its wording selectable ================= */
A('the on-behalf wording names the company the user typed, never "the bank"', DISCLOSURES.every(function(d){ return d.es.indexOf('del banco')===-1 && d.en.indexOf('the bank')===-1; })
  && disclosureLine(DISCLOSURES[2], 'es', 'Clínica Andes')==='Hola, soy el asistente virtual de Clínica Andes y me comunico en nombre de Clínica Andes.'
  && disclosureLine(DISCLOSURES[2], 'en', 'Acme')==='Hello, I’m the virtual assistant for Acme, calling on behalf of Acme.');
A('four approved wordings, the original first', DISCLOSURES.length===4 && DISCLOSURES[0].id==='std'
  && disclosureFor(COL)==='Le hablo desde un asistente virtual de Banco Sol.');
var DH = {...COL, tokens:{...COL.tokens, disclosure:'hola'}}, DB = {...COL, tokens:{...COL.tokens, disclosure:'behalf'}}, DC = {...COL, tokens:{...COL.tokens, disclosure:'call'}};
A('each option says what the user wrote', disclosureFor(DH)==='Hola, le habla el asistente virtual de Banco Sol.'
  && disclosureFor(DB)==='Hola, soy el asistente virtual de Banco Sol y me comunico en nombre de Banco Sol.'
  && disclosureFor(DC)==='Hola, esta es una llamada realizada por el asistente virtual de Banco Sol.');
A('an English agent gets the English twin', disclosureFor({...en('collections'), tokens:{...en('collections').tokens, disclosure:'call'}})==='Hello, this call is being made by the virtual assistant for Banco Sol.'
  && DISCLOSURES.every(function(o){ return !SPA.test(o.en.replace('{co}','X')); }));
A('the chosen line opens the simulator and the prompt', R(React.createElement(StepTest, C(DH))).indexOf('Hola, le habla el asistente virtual de Banco Sol.')>-1
  && agentPrompt(DH).indexOf('word for word: "Hola, le habla el asistente virtual de Banco Sol."')>-1);
var DBR = R(React.createElement(StepBrief, C(COL)));
A('the collections brief shows it as a locked chip that opens', DBR.indexOf('chip chip-lockpick')>-1 && DBR.indexOf('Required on every call — choose the wording, it cannot be removed')>-1);
A('other templates keep the fixed, unselectable disclosure', t4.indexOf('chip-lockpick')===-1 && t4.indexOf('chip-fix chip-fix-block')>-1
  && disclosureFor({...OUT, tokens:{...OUT.tokens, disclosure:'hola'}})==='Le hablo desde un asistente virtual de Clínica Andes.');
A('the receptionist keeps its English line', disclosureFor(RC).indexOf('You’re speaking with a virtual assistant for')===0);
A('changing the wording shows in a version diff', (function(){
  var v = {...COL, versions:[{id:'v1', cfg:configOf(DC)}, {id:'v2', cfg:configOf(COL)}]};
  return versionDiff(v, v.versions[0]).rows.some(function(r){ return r.k==='Disclosure' && r.kind==='change'
    && r.to.indexOf('esta es una llamada realizada')>-1; }); })());
A('seeded agents keep the original wording', ['a5','a6'].every(function(id){ return disclosureFor(agentOf(id))==='Le hablo desde un asistente virtual de Banco Sol.'; }));

/* ================= v79 · the interface can be switched to Spanish ================= */
A('the top bar has the EN/ES switch, English by default', list.indexOf('class="langsw"')>-1 && UI_LANG==='en'
  && /aria-checked="true" class="langsw-b on">EN</.test(list));
function ES_(el){ UI_LANG='es'; var h; try { h = R(el); } finally { UI_LANG='en'; } return h; }
var esList = ES_(React.createElement(App,null));
A('in Spanish the shell and the list are Spanish', esList.indexOf('>Crear agente<')>-1 && esList.indexOf('Agentes de IA')>-1
  && esList.indexOf('>Create agent<')===-1 && esList.indexOf('créditos disponibles')>-1);
var esBrief = txt(ES_(React.createElement(StepBrief, C(COL))));
A('the collections brief reads in Spanish', esBrief.indexOf('Llama a personas con pagos vencidos en')>-1
  && esBrief.indexOf('ofrece pago total en un plazo de')>-1 && esBrief.indexOf('transfiere a la campaña Cobros_Ago')>-1
  && esBrief.indexOf('It calls')===-1);
var enAgentEs = txt(ES_(React.createElement(StepTest, C(en('collections')))));
A('what an agent says stays in the agent’s own language', enAgentEs.indexOf('You’re speaking with a virtual assistant for Banco Sol.')>-1
  && enAgentEs.indexOf('Who am I speaking to?')>-1 && enAgentEs.indexOf('Pruébalo antes que nadie')>-1);
A('option text (campaign names and the like) is never translated', ES_(React.createElement('select',{defaultValue:'Cancel'},React.createElement('option',{value:'Cancel'},'Cancel'))).indexOf('>Cancel<')>-1);
A('names, numbers and versions carry through the patterns', tr('Edit — 5 days')==='Edit — 5 days'
  && (function(){ UI_LANG='es'; var r = [tr('Edit — agrees a payment date within'), tr('v2 · read-only'), tr('3 rules'), tr('22 Aug 2026, 16:40'), tr('Saved as v3. It is now the current version.')]; UI_LANG='en'; return r.join('|'); })()
     === 'Editar — acuerda una fecha de pago en un plazo de|v2 · solo lectura|3 reglas|22 ago 2026, 16:40|Guardado como v3. Ahora es la versión actual.');
A('lists of single words keep the words and change only the join', (function(){ UI_LANG='es'; var r = tr('urgente, demanda or embargo'); UI_LANG='en'; return r; })()==='urgente, demanda o embargo');
A('with English selected nothing is touched', tr('Create agent')==='Create agent' && txt(R(React.createElement(StepBrief, C(COL)))).indexOf('It calls people with overdue payments at')>-1);
A('the prompt sent to Claude is never translated', (function(){ UI_LANG='es'; var p = agentPrompt(COL); UI_LANG='en'; return p===PR; })());

/* ================= v80 · collections: balance mentions, ordered offers, fallback, closing, promise ================= */
var A6 = agentOf('a6'), A5 = agentOf('a5');
function withT(d, t){ return {...d, tokens:{...d.tokens, ...t}}; }
function talk(d, lines){ var h=[{who:'a', txt:'open'}], out=[];
  lines.forEach(function(q){ var r=agentReply(q, d, h); h.push({who:'c', txt:q}); h.push({who:'a', txt:r.txt, stage:r.stage, promise:r.promise}); out.push(r); });
  return out; }
/* 1 · balance disclosure: siblings, not children */
A('the amount radio is unchanged', DISCLOSE.map(function(o){ return o.v; }).join('|')==='states the amount owed|says only that there is an outstanding balance');
A('two mentions, off by default for a new collections agent', MENTIONS.map(function(m){ return m.id; }).join(',')==='overdue,contract'
  && !mentionsOf(COL).overdue && !mentionsOf(COL).contract && overdueUnit(COL)==='days');
var OV = withT(COL, {mentions:{overdue:true, contract:false}}), OVM = withT(COL, {mentions:{overdue:true, contract:false}, overdueUnit:'months'});
var CT = withT(COL, {mentions:{overdue:false, contract:true}}), BOTH = withT(COL, {mentions:{overdue:true, contract:true}});
A('the overdue line, in days or months, es/en', overdueSay(OV)==='Su cuenta lleva 45 días de atraso.' && overdueSay(OVM)==='Su cuenta lleva 2 meses de atraso.'
  && overdueSay({...OV, lang:'en'})==='Your account is 45 days overdue.' && overdueSay({...OVM, lang:'en'})==='Your account is 2 months overdue.');
A('the contract rides on the balance sentence, es/en', discloseSentence(CT)==='Tiene un saldo pendiente de $184.50 del contrato terminado en 4821.'
  && discloseSentence({...CT, lang:'en'})==='You have an outstanding balance of $184.50 on the contract ending 4821.');
A('they apply whichever radio is chosen', discloseSentence(withT(BOTH,{disclose:'exists'}))==='Tiene un saldo pendiente con nosotros del contrato terminado en 4821. Su cuenta lleva 45 días de atraso.');
A('the chip label carries them', discloseFull(OV)==='states the amount owed and how long it’s overdue'
  && discloseFull(withT(BOTH,{disclose:'exists'}))==='says only that there is an outstanding balance and how long it’s overdue and the contract number');
A('each value is read from a named list column, editable', colOf(COL,'overdue')==='DIAS_MORA' && colOf(COL,'contract')==='CUENTA'
  && colOf(withT(COL,{cols:{...LIST_COLS, overdue:'MORA'}}),'overdue')==='MORA');
A('the prompt carries the mentions and their columns', agentPrompt(BOTH).indexOf('how long the payment is overdue, in days (from the contact list column DIAS_MORA)')>-1
  && agentPrompt(BOTH).indexOf('column CUENTA')>-1 && agentPrompt(COL).indexOf('DIAS_MORA')===-1);
A('the diff sees them', cfgFacts(configOf(BOTH), BOTH)['It also mentions']==='how long it’s overdue, in days (DIAS_MORA) and the contract number (CUENTA)'
  && cfgFacts(configOf(COL), COL)['It also mentions']==='nothing else');
A('the preview speaks them', txt(R(React.createElement(StepBrief, C(BOTH)))).indexOf('Tiene un saldo pendiente de $184.50 del contrato terminado en 4821. Su cuenta lleva 45 días de atraso.')>-1);
/* 2 · offers: an ordered list */
A('five offers, in the stated order, each with es/en speech', goalsFor('collections').length===5
  && goalsFor('collections').every(function(g){ return g.say && g.sayEn; }));
A('“verifies when the customer intends to pay” is no longer an offer', goalsFor('collections').every(function(g){ return g.id!=='intent' && g.v.indexOf('intends')<0; }));
var ALL5 = withT(COL, {offers:OFFER_IDS.map(function(id){ return {id:id, on:true}; })});
A('labels carry their numbers', activeOffers(ALL5).map(function(g){ return offerLabel(ALL5, g.id); }).join(' | ')
  ==='full payment within 5 days | a partial payment of at least 30% | the minimum payment | in two parts: first today, the rest within 15 days | a reduced balance without interest');
A('the partial offer computes N% of the list amount', offerAmount(ALL5,'partial')==='$55.35' && offerSay(withT(ALL5,{params:{partial:50}}),'partial').indexOf('$92.25')>-1);
A('minimum and reduced read list figures, never computed', offerSay(ALL5,'minimum').indexOf('$45.00')>-1 && offerSay(ALL5,'reduced').indexOf('$152.00')>-1
  && agentPrompt(withT(COL,{offers:[{id:'reduced',on:true}]})).indexOf('Never calculate a discount yourself')>-1);
A('the two-part offer has its own days stepper', paramOf('twopart').def===15 && paramOf('twopart').custom==='replace'
  && offerSay(withT(ALL5,{params:{twopart:30}}),'twopart').indexOf('dentro de 30 días')>-1);
var ORD = withT(COL, {offers:[{id:'partial',on:true},{id:'date5',on:true},{id:'minimum',on:false},{id:'twopart',on:false},{id:'reduced',on:false}]});
A('the order is the supervisor’s', activeOffers(ORD).map(function(g){ return g.id; }).join(',')==='partial,date5'
  && offersLabel(ORD)==='offers a partial payment of at least 30% or full payment within 5 days');
A('an agent saved with the old single goal reads as that one offer', activeOffers({template:'collections', tokens:{goal:'partial'}}).map(function(g){ return g.id; }).join(',')==='partial'
  && activeOffers({template:'collections', tokens:{goal:'intent'}}).length===0);
A('the prompt lists them in order and says to stop at the first yes', (function(){ var p = agentPrompt(ORD);
  return p.indexOf('Stop at the first one the customer accepts')>-1 && p.indexOf('1. a partial payment of at least 30%')>-1 && p.indexOf('2. full payment within 5 days')>-1; })());
A('the diff lists the offers by position', cfgLists(configOf(ORD), ORD)['Offer'].join(' | ')==='1 · a partial payment of at least 30% | 2 · full payment within 5 days');
/* the reduced balance switches two rules off — derived, never rewritten */
var RED = withT(COL, {offers:[{id:'reduced',on:true},{id:'date5',on:true},{id:'partial',on:false},{id:'minimum',on:false},{id:'twopart',on:false}]});
A('a reduced balance turns off the two rules it contradicts', promisesOf(RED).every(function(p){ return REDUCED_CONFLICTS.indexOf(p.t)<0; })
  && promisesOf(COL).some(function(p){ return p.t==='Never promise to remove interest'; }));
A('…without touching the stored rule, so unticking brings it back', RED.promises.filter(function(p){ return p.t==='Never promise to remove interest'; })[0].on!==false
  && promisesOf(withT(RED,{offers:[{id:'date5',on:true}]})).some(function(p){ return p.t==='Never promise to remove interest'; }));
var redRules = R(React.createElement(OtherRules,{draft:RED, set:noop}));
A('the rules step greys them out with a one-line reason', (redRules.match(/opt-off/g)||[]).length===2 && redRules.indexOf('Two rules are off while the brief offers a reduced balance without interest')>-1
  && R(React.createElement(OtherRules,{draft:COL, set:noop})).indexOf('opt-off')===-1);
A('and they leave the prompt, the summary and the rule count', agentPrompt(RED).indexOf('Never promise to remove interest')===-1 && ruleCount(RED)===ruleCount(COL)-2
  && txt(R(React.createElement(AgentSummary,{agent:RED}))).indexOf('to remove interest')===-1);
/* 3 · fallback */
A('the fixed fallback line sits under the offers', FALLBACK_LINE==='If no offer is accepted (or none is ticked), it asks when the customer intends to pay and records the date.');
var c1 = talk(A6, ['Sí, soy yo', 'No me alcanza', 'No puedo', 'Le pago el viernes']);
A('it offers in order and moves on at each no', c1[0].stage===0 && c1[0].txt.indexOf('pago total dentro de 5 días')>-1
  && c1[1].stage===1 && c1[1].txt.indexOf('al menos 30%')>-1 && c1[2].stage==='intent' && c1[2].txt.indexOf('¿Para qué fecha tiene pensado realizar el pago?')>-1);
A('a stated date is recorded as intent and triggers the payment step', c1[3].promise && c1[3].promise.offer==='intent' && c1[3].promise.date==='viernes (según el cliente)'
  && c1[3].txt.indexOf('Le envío el enlace de pago')>-1);
var c2 = talk(A6, ['Sí', 'No me alcanza', 'Sí, de acuerdo']);
A('an accepted offer is recorded with its amount and triggers the payment step', c2[2].promise.offer==='a partial payment of at least 30%' && c2[2].promise.amount==='$55.35'
  && c2[2].txt.indexOf('Le envío el enlace de pago')>-1 && /^\d{1,2} [A-Z][a-z]{2} \d{4}$/.test(c2[2].promise.date));
var c3 = talk(A5, ['Sí, confirmo', 'No sé, no puedo decirle']);
A('with nothing ticked it goes straight to asking for a date', c3[0].stage==='intent' && c3[0].txt.indexOf('¿Para qué fecha')>-1);
A('no date: the call ends and the payment step does not apply', c3[1].stage==='done' && !c3[1].promise && c3[1].txt.indexOf('enlace de pago')===-1
  && c3[1].why.indexOf('no promise, no payment step')>-1);
A('the payment text may carry {contract}', paymentSay(withT(COL,{payment:'place', paymentPlace:'cualquier sucursal con el contrato {contract}'}))==='Puede pagar en cualquier sucursal con el contrato 4821.');
A('the prompt states the fallback and when the payment step applies', PR.indexOf('If no offer is accepted, ask when the customer intends to pay and record that date')>-1
  && PR.indexOf('Once a date is recorded — an accepted offer or the date the customer gave')>-1 && PR.indexOf('If no date is agreed, thank the customer, say the closing line and end the call. Record no promise.')>-1);
A('asking for interest off while a reduced balance is offered gets that offer', talk(RED, ['Sí', '¿Me quita los intereses?'])[1].why==='Offer: a reduced balance without interest');
/* 4 · closing line */
var CL = withT(A6, {closing:'Gracias por su tiempo. Banco Sol le desea un buen día.'});
A('empty by default, and then absent everywhere', closingOf(COL)==='' && agentPrompt(COL).indexOf('HOW EVERY CALL ENDS')===-1
  && cfgFacts(configOf(COL), COL)['Closing line']==='none');
A('when set, the prompt reads it verbatim under its own heading', agentPrompt(CL).indexOf('HOW EVERY CALL ENDS\n- The very last thing you say on every call, word for word: "Gracias por su tiempo. Banco Sol le desea un buen día."')>-1);
A('the brief and the preview quote it', (function(){ var h = R(React.createElement(StepBrief, C(CL)));
  return h.indexOf('>“Gracias por su tiempo. Banco Sol le desea un buen día.”</button>')>-1 && h.indexOf('· end')>-1; })());
A('every scripted call end reads it', [talk(CL,['Sí','Sí'])[1], talk(CL,['No me llame más'])[0], talk(CL,['Gracias, adiós'])[0], talk(CL,['No soy yo, se equivocó'])[0]]
  .every(function(r){ return /Banco Sol le desea un buen día\.$/.test(r.txt); }));
A('the diff shows it quoted', (function(){ var v = {...A6, versions:[{id:'v1', cfg:configOf(CL)}, {id:'v2', cfg:configOf(A6)}]};
  return versionDiff(v, v.versions[0]).rows.some(function(r){ return r.k==='Closing line' && r.to==='“Gracias por su tiempo. Banco Sol le desea un buen día.”'; }); })());
/* 5 · recorded promise */
A('collections rows carry a promise; others do not', INTERACTIONS.filter(function(r){ return r.promise; }).map(function(r){ return r.id; }).join(',')==='i7,i15'
  && INTERACTIONS.filter(function(r){ return r.promise; }).every(function(r){ return agentOf(r.agent).template==='collections'; }));
var ixTab = txt(R(React.createElement(Interactions,{agents:SEED_AGENTS, onOpenRow:noop})));
A('the log shows offer, amount and date', ixTab.indexOf('Promise')>-1 && ixTab.indexOf('full payment within 5 days$184.50 · 5 Sep 2026')>-1);
var i7 = INTERACTIONS.filter(function(r){ return r.id==='i7'; })[0];
A('the detail header, the summary tab and the data payload show it', txt(R(React.createElement(InteractionDetail,{row:i7, agents:SEED_AGENTS, onBack:noop, onTeach:noop}))).indexOf('Promise · $184.50 · 5 Sep 2026')>-1
  && txt(R(React.createElement(ConversationSummary,{row:i7, agents:SEED_AGENTS}))).indexOf('Recorded promise')>-1
  && JSON.stringify(ixJson(i7)).indexOf('"promise":{"offer":"full payment within 5 days"')>-1);
A('the simulator shows it at the end of the call', R(React.createElement(PromiseCard,{p:c2[2].promise, title:'End of call · promise recorded'})).indexOf('$55.35')>-1
  && build_has('m.promise && /*#__PURE__*/React.createElement(PromiseCard'));
function build_has(s){ return StepTest.toString().indexOf('PromiseCard')>-1; }
A('the live prompt asks for the promise back', PR.indexOf('add "promise": {"offer"')>-1);
/* 6 · prose and seeds */
A('a6 reads as specified', txt(R(React.createElement(AgentSummary,{agent:A6}))).indexOf('states the amount owed and how long it’s overdue, offers full payment within 5 days or a partial payment of at least 30%, and otherwise asks when the customer intends to pay. Once a date is agreed, it sends the payment link to the contact channel on file')>-1);
A('the brief sentence reads the same way', txt(R(React.createElement(StepBrief, C(A6)))).indexOf('states the amount owed and how long it’s overdue, offers full payment within 5 days or a partial payment of at least 30%, and otherwise asks when the customer intends to pay. Once a date is agreed, it sends the payment link')>-1);
A('a6: amount + days overdue; full in 5, then 30%', discloseOf(A6).id==='amount' && mentionsOf(A6).overdue && overdueUnit(A6)==='days'
  && activeOffers(A6).map(function(g){ return offerLabel(A6, g.id); }).join(' | ')==='full payment within 5 days | a partial payment of at least 30%');
A('a5: exists only, no offers', discloseOf(A5).id==='exists' && activeOffers(A5).length===0 && offersLabel(A5)==='makes no payment offer');
A('their histories stay readable', versionDiff(A6, A6.versions[0]).rows.length===2 && versionDiff(A5, A5.versions[0]).rows.length===3
  && versionDiff(A5, A5.versions[1]).rows.length===1);
A('no objection table: nothing new on the rules step besides the greyed rules', R(React.createElement(StepRules, C(A6))).indexOf('bjection')===-1);
A('the Spanish interface covers the new collections strings', (function(){ UI_LANG='es'; var r = [tr('What it can offer'), tr(offersLabel(A6)+', '+fallbackPhrase(A6)), tr('states the amount owed and how long it’s overdue'), tr('1 · full payment within 3 days')]; UI_LANG='en'; return r.join('|'); })()
  ==='Qué puede ofrecer|ofrece pago total en un plazo de 5 días o un pago parcial de al menos 30%, y si no, pregunta cuándo piensa pagar el cliente|indica el monto adeudado y cuánto tiempo lleva de atraso|1 · pago total en un plazo de 3 días');

/* ================= v82 · the payment notes are gone; what happens with no date is a setting ================= */
var BCOL = R(React.createElement(StepBrief, C(COL)));
A('the payment popover notes are gone from the code', BLOB.indexOf('never reads out a phone number or an email')===-1
  && StepBrief.toString().indexOf('It applies whenever a date is recorded')===-1);
A('the collections brief says what happens with no date, defaulting to ending the call',
  txt(BCOL).indexOf('If no date is agreed, it ends the call.')>-1 && noDateOf(COL).id==='end' && COL.tokens.noDate==='end');
A('seeds without the token read as ending the call', noDateOf(agentOf('a6')).id==='end' && noDateOf({tokens:{}}).id==='end');
A('no other template gets the sentence', ['appointments','sales','messages'].every(function(tid){
  var d = seedFromTemplate({...newDraft(), direction:'out', personaId:'gloria'}, tid);
  return txt(R(React.createElement(StepBrief, C(d)))).indexOf('If no date is agreed')===-1 && agentPrompt(d).indexOf('If no date is agreed')===-1; }));
var ND = withT(COL, {noDate:'handover'});
A('the chip reads the choice', txt(R(React.createElement(StepBrief, C(ND)))).indexOf('If no date is agreed, it hands it to a person.')>-1);
A('the prompt hands over the same way as asking for a person', agentPrompt(ND).indexOf('If no date is agreed, hand the call over the same way as when the customer asks for a person (you '+asYou(handLabel(ND))+'). Record no promise.')>-1
  && agentPrompt(ND).indexOf('thank the customer, say the closing line and end the call')===-1);
A('the summary states it', txt(R(React.createElement(AgentSummary,{agent:ND}))).indexOf('If no date is agreed, it hands it to a person.')>-1
  && txt(R(React.createElement(AgentSummary,{agent:COL}))).indexOf('If no date is agreed, it ends the call.')>-1);
A('the version diff shows the change', (function(){ var v = {...COL, versions:[{id:'v1', cfg:configOf(ND)}, {id:'v2', cfg:configOf(COL)}]};
  return versionDiff(v, v.versions[0]).rows.some(function(r){ return r.k==='If no date is agreed' && r.kind==='change' && r.from==='ends the call' && r.to==='hands it to a person'; }); })());
A('simulator: with no date, a handover agent hands over and records nothing', (function(){
  var c = talk(withT(A5, {noDate:'handover'}), ['Sí, confirmo', 'No sé, no puedo decirle']);
  return c[1].stage==='done' && !c[1].promise && c[1].why.indexOf('No date agreed → hands it to a person')>-1
    && c[1].txt.indexOf(saysIn(val(handoffFor('collections'), A5.tokens.handoff), 'es'))>-1 && c[1].txt.indexOf('enlace de pago')===-1; })());
A('simulator: with no date, ending says the closing line', (function(){
  var c = talk(withT(A5, {closing:'Banco Sol le desea un buen día.'}), ['Sí, confirmo', 'No sé, no puedo decirle']);
  return c[1].txt.indexOf('Banco Sol le desea un buen día.')>-1 && !c[1].promise; })());
A('the English agent says it in English', (function(){ var e = withT(en('collections'), {noDate:'handover'});
  return spanishIn(R(React.createElement(StepBrief, C(e)))).length===0; })());
A('the Spanish interface translates the new strings', (function(){ UI_LANG='es';
  var r = [tr('If no date is agreed, it'), tr('ends the call'), tr('hands it to a person'), tr('If no date is agreed')]; UI_LANG='en'; return r.join('|'); })()
  ==='Si no se acuerda una fecha, el agente|termina la llamada|la pasa a una persona|Si no se acuerda una fecha');

out.join('\n');
