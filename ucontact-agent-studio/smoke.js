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
  {id:'angry',    v:'The customer is upset or raises their voice', short:'gets upset'},
  {id:'legal',    v:'The customer mentions a complaint, a lawyer or the regulator', short:'mentions a complaint or a lawyer'},
  {id:'consent',  v:'The customer says they never agreed to be contacted', short:'says they never agreed to be contacted'},
  {id:'offtopic', v:'The customer asks about something outside this agent’s job', short:'asks about something outside its job'},
  {id:'repeat',   v:'The agent has asked the same question twice without an answer', short:'will not answer a question twice over'},
  {id:'promise',  v:'The customer insists on something the agent may not promise', short:'insists on something it may not promise'},
  {id:'silence',  v:'The customer goes quiet for more than ten seconds', short:'goes quiet'},
];
/* "a, b or c" — used by the prose summary */
const orList = xs => xs.length<2 ? (xs[0]||'') : xs.slice(0,-1).join(', ')+' or '+xs[xs.length-1];
const HANDOVER_SEED = {
  reception:    ['angry','repeat'],
  leads:        ['promise','offtopic'],
  appointments: ['angry','offtopic'],
  messages:     ['angry','repeat'],
  collections:  ['legal','consent','promise'],
};
const SEED_HANDOVER = [
  ['angry','offtopic'], ['promise','offtopic'], ['angry','repeat'], [], ['legal','consent','promise'],
];

/* Collections may never discuss a balance with whoever happens to answer, so
   "speaks to whoever answers" is not an option there — it cannot be chosen at all. */
const identityFor = tid => tid==='collections' ? IDENTITY.filter(o => o.id!=='none') : IDENTITY;

/* Two collections goals hold a number the supervisor taps rather than types. */
const GOAL_PARAMS = {
  /* custom:'replace' drops the last preset in favour of a Custom pill; custom:'add' keeps every
     preset and appends one. Either way the supervisor can type an exact number. */
  date5:   {def:5,  opts:[3,5,7,15,30], fmt:n=>n+' days', say:n=>n+' días',
            title:'Days to pay', hint:'How long the customer gets before the date it agrees.',
            custom:'replace', unit:'days', max:180},
  partial: {def:30, opts:[30,50,70],    fmt:n=>n+'%',     say:n=>n+'%',
            title:'Minimum share', hint:'The smallest part of the balance the agent may accept.',
            custom:'add', unit:'%', max:100},
};
const paramOf = goalId => GOAL_PARAMS[goalId] || null;
const paramVal = (o, goalId) => {
  const gp = paramOf(goalId); if(!gp) return null;
  const ps = (o && o.tokens && o.tokens.params) || {};
  return ps[goalId]==null ? gp.def : ps[goalId];
};
/* Read a goal through these two so the number shows up everywhere it is quoted. */
const goalOf    = o => val(goalsFor(o.template), o.tokens.goal);
const goalLabel = o => { const g = goalOf(o), gp = paramOf(g.id);
  return gp ? g.v+' '+gp.fmt(paramVal(o, g.id)) : g.v; };
const goalSay   = o => { const g = goalOf(o), gp = paramOf(g.id);
  return gp ? g.say.replace('{n}', gp.say(paramVal(o, g.id))) : g.say; };
const optLabel  = (o, draft) => { const gp = paramOf(o.id);
  return gp ? o.v+' '+gp.fmt(paramVal(draft, o.id)) : o.v; };

const callsFor = a => (a.calls ? CALL_LOG.slice() : []);

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
   call:'c2', disp:'Confirmed',   dur:'1m 06s'},
  {id:'i5',  start:'2026-08-31 09:05:12', end:'2026-08-31 09:06:04', medium:'call',  dir:'in',
   client:'+16172853680',         source:'15513483152', campaign:'Sales_Engineers', user:'PS Agent',
   disp:'Unsolved',   dur:'52s'},
  {id:'i2',  start:'2026-08-31 09:12:44', end:'2026-08-31 09:13:36', medium:'wa',    dir:'in',
   client:'+57 310 555 0142',     source:'wa_business', campaign:'Cobros_Ago', voice:'frank',   agent:'a5',
   call:'c1', disp:'Handed over', dur:'52s'},
  {id:'i9',  start:'2026-08-31 08:40:07', end:'2026-08-31 09:02:19', medium:'email', dir:'in',
   client:'Team Twilio',          source:'',           campaign:'Test',        user:'ccass_spena',
   disp:'Unsolved',   dur:'22m 12s'},
  {id:'i3',  start:'2026-08-31 09:11:20', end:'2026-08-31 09:12:31', medium:'call',  dir:'out',
   client:'Jorge Betancur',       source:'5980114227', campaign:'Citas_Sept',   voice:'gloria',  agent:'a1',
   call:'c1', disp:'Took a message', dur:'1m 11s'},
  {id:'i12', start:'2026-08-31 08:15:03', end:'2026-08-31 08:16:44', medium:'call',  dir:'in',
   client:'+16172853680',         source:'15513483152', campaign:'Sales_Engineers', user:'Support_IVR',
   disp:'',           dur:'1m 41s'},
  {id:'i4',  start:'2026-08-31 09:08:55', end:'2026-08-31 09:09:37', medium:'chat',  dir:'in',
   client:'sebastian.pena…',      source:'web_widget', campaign:'Test',        voice:'linda',   agent:'a3',
   call:'c5', disp:'Solved',      dur:'42s'},
  {id:'i10', start:'2026-08-31 08:31:55', end:'2026-08-31 08:33:02', medium:'chat',  dir:'in',
   client:'Facebook Ads Team',    source:'web_widget', campaign:'Test',        user:'ccass_spena',
   disp:'Solved',     dur:'1m 07s'},
  {id:'i13', start:'2026-08-31 08:04:58', end:'2026-08-31 08:06:12', medium:'call',  dir:'out',
   client:'Camilo Restrepo',      source:'5980114227', campaign:'Citas_Sept',   voice:'gloria',  agent:'a1',
   call:'c4', disp:'Handed over', then:'psagent1', dur:'1m 14s'},
  {id:'i6',  start:'2026-08-31 08:58:30', end:'2026-08-31 08:59:38', medium:'call',  dir:'out',
   client:'6172853680',           source:'15513483152', campaign:'Sales_Engineers', user:'PS Agent',
   disp:'Answering Machine', dur:'1m 08s'},
  {id:'i7',  start:'2026-08-31 08:51:02', end:'2026-08-31 08:52:47', medium:'sms',   dir:'out',
   client:'Andrea Salgado',       source:'wa_business', campaign:'Cobros_Ago', voice:'antonio', agent:'a2',
   call:'c5', disp:'Payment agreed', dur:'1m 45s'},
  {id:'i14', start:'2026-08-31 07:58:22', end:'2026-08-31 07:59:03', medium:'chat',  dir:'in',
   client:'Instagram',            source:'web_widget', campaign:'Test',        user:'ccass_spena',
   disp:'Unsolved',   dur:'41s'},
  {id:'i11', start:'2026-08-31 08:22:41', end:'2026-08-31 08:23:29', medium:'wa',    dir:'in',
   client:'+57 300 555 8891',     source:'wa_business', campaign:'Cobros_Ago', voice:'frank',   agent:'a5',
   call:'c6', disp:'Took a message', dur:'48s'},
  {id:'i15', start:'2026-08-30 19:42:10', end:'2026-08-30 19:43:51', medium:'sms',   dir:'out',
   client:'Nicolás Ospina',       source:'wa_business', campaign:'Cobros_Ago', voice:'antonio', agent:'a2',
   call:'c7', disp:'Payment agreed', dur:'1m 41s'},
  {id:'i8',  start:'2026-08-31 08:44:19', end:'2026-08-31 08:44:31', medium:'call',  dir:'out',
   client:'Luz Mariana Ríos',     source:'5980114227', campaign:'Citas_Sept',   voice:'gloria',  agent:'a1',
   call:'c3', disp:'No answer',   dur:'12s'},
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
   outMES:87.9, status:null, CHANNEL:row.medium, DIRECTION:row.dir, DISPOSITION:row.disp||null},
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
/* A version is only "deployed" if it was published; the badge is about dialers. */
const latestVersion   = a => (a.versions||[])[(a.versions||[]).length-1] || null;
const deployedVersion = a => (a.versions||[]).filter(v=>v.deployed).slice(-1)[0] || null;
const everDeployed    = a => !!a.lastDeployed;
const nextVersionId   = a => 'v' + ((a.versions||[]).length + 1);
/* An agent can serve several dialers, and it runs ONE live version in all of them: deploying
   replaces that version everywhere at once. Which dialers is decided in the Outbound Hub, not
   here. The `dialers` array is the single source of truth — the `assignedToDialer` boolean the
   seeds still carry is descriptive only, and no logic reads it. */
const dialersOf      = a => (a && a.dialers) || [];
const isDeployedLive = a => dialersOf(a).length > 0;    // live inside a dialer right now
const dialerCount    = a => dialersOf(a).length;
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
  {k:'What it is for',    get:c => goalLabel(c)},
  {k:'Asks for a person', get:c => val(HANDOFF, c.tokens.handoff).v},
  {k:'Opening line',      get:c => '\u201c' + (c.opener || '') + '\u201d', long:true},
  {k:'What it knows',     when:c => c.template === 'reception',
                          get:c => knowledgeLabel(c.knowledge || {})},
];
const CFG_LISTS = [
  {k:'Handover rule',   get:c => (c.handover || []).map(id => (HANDOVER.find(o => o.id === id) || {}).short)
                                   .filter(Boolean).concat(c.handoverOther || [])},
  {k:'Never promises',  get:c => (c.promises || []).map(x => x.t.replace(/^Never promise /i, ''))},
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
/* What a version is worth comparing against: whatever is live, else the newest version. */
const versionBaseline = (a, v) => {
  const live = deployedVersion(a) || latestVersion(a);
  return live && v && live.id !== v.id ? live : null;
};
const versionDiff = (a, v) => { const b = versionBaseline(a, v);
  return b ? {base:b, rows:diffFacts(versionConfig(a, b), versionConfig(a, v), a)} : null; };

/* Only one version can be deployed at a time. Several may carry deployed:true — that is the
   record of what went live and when — so "is it live now" is always the newest of them. */
const isLiveVersion = (a, v) => { const d = deployedVersion(a); return !!d && !!v && d.id === v.id; };
const wasLiveVersion = (a, v) => !!v && !!v.deployed && !isLiveVersion(a, v);
const versionState = (a, v) => isLiveVersion(a, v) ? 'live' : wasLiveVersion(a, v) ? 'was' : 'draft';

/* What the Test panel can run: the working draft, then every stored version, newest first. */
function testTargets(a){
  const out = [{id:'draft', label:'Latest draft'}];
  (a.versions||[]).slice().reverse().forEach(v=>{
    const st = versionState(a, v);
    out.push({id:v.id, label:v.id+(st==='live'?' · deployed':st==='was'?' · was live':'')+' · '+v.when});
  });
  return out;
}

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
  const about=((k&&k.about)||'').trim(), n=((k&&k.urls)||[]).length;
  if(!about && !n) return 'knows nothing about the business yet';
  const parts=[]; if(about) parts.push('the business profile'); if(n) parts.push(n+(n===1?' trained page':' trained pages'));
  return 'answers from '+parts.join(' and ');
}
/* The fixed disclosure. Unchanged for every existing template; English for the receptionist. */
const disclosureFor = d => d.template==='reception'
  ? 'You’re speaking with a virtual assistant for '+d.tokens.company+'.'
  : 'Le hablo desde un asistente virtual de '+d.tokens.company+'.';
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
    say: 'Le envío la cotización por WhatsApp hoy mismo, ¿le parece?'
  }, {
    id: 'visit',
    v: 'books a visit with an advisor',
    say: 'Le agendo una visita con un asesor, ¿mañana a las 10:00 le sirve?'
  }, {
    id: 'budget',
    v: 'asks the budget and passes it to sales',
    say: '¿Qué presupuesto tiene en mente? Con eso le paso el caso a un asesor.'
  }],
  appointments: [{
    id: 'confirm',
    v: 'confirms or moves the appointment',
    say: '¿Le confirmo la cita del jueves a las 10:00, o prefiere otro horario?'
  }, {
    id: 'confirm_only',
    v: 'only confirms, never reschedules',
    say: '¿Me confirma que asistirá el jueves a las 10:00?'
  }, {
    id: 'prep',
    v: 'confirms and explains what to bring',
    say: 'Le confirmo el jueves 10:00. Traiga su documento y los exámenes previos.'
  }],
  messages: [{
    id: 'callback',
    v: 'agrees a callback time and number',
    say: '¿A qué número le devolvemos la llamada, y a qué hora le conviene?'
  }, {
    id: 'deliver',
    v: 'delivers the message and ends',
    say: 'Le dejo el recado y con eso termino. Gracias por su tiempo.'
  }, {
    id: 'confirm_r',
    v: 'reads the message back to confirm',
    say: 'Le repito el recado para confirmar que quedó bien anotado.'
  }],
  collections: [{
    id: 'date5',
    v: 'agrees a payment date within',
    say: '¿Le parece si registramos el pago dentro de {n}?'
  }, {
    id: 'partial',
    v: 'agrees a partial payment of at least',
    say: 'Podemos registrar un abono parcial de al menos {n}. ¿Le parece?'
  }, {
    id: 'link',
    v: 'sends the payment link and confirms receipt',
    say: 'Le envío el link de pago por WhatsApp y le confirmo cuando se registre.'
  }],
  reception: [{
    id: 'takemsg',
    v: 'collects the caller’s details and confirms them back',
    say: 'Let me make sure I have that right — I’ll read it back to you before we finish.'
  }, {
    id: 'book',
    v: 'books an appointment from the connected calendar',
    say: 'I can book that for you now. Which day works best?'
  }, {
    id: 'answer',
    v: 'answers questions from the business profile, then takes a message',
    say: 'Happy to help with that. Anything I can’t answer, I’ll pass on as a message.'
  }]
};
const IDENTITY = [{
  id: 'verify',
  v: 'verifies who it is speaking to',
  say: '¿Hablo con la persona titular?'
}, {
  id: 'byname',
  v: 'asks for the person by name',
  say: '¿Se encuentra la señora Herrera?'
}, {
  id: 'none',
  v: 'speaks to whoever answers',
  say: 'Le comento el motivo de la llamada.'
}];
const HANDOFF = [{
  id: 'desk',
  v: 'transfers to the front desk',
  say: 'Con gusto, le paso con recepción ahora mismo.'
}, {
  id: 'sales',
  v: 'transfers to a sales advisor',
  say: 'Con gusto, le paso con un asesor comercial.'
}, {
  id: 'sup',
  v: 'transfers to the on-call supervisor',
  say: 'Le paso con el supervisor de turno, un momento.'
}, {
  id: 'msg',
  v: 'takes a message and ends the call',
  say: 'Le tomo el recado y una persona le devuelve la llamada.'
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
  handoff: 'sales',
  opener: 'Le llamo por la cotización que solicitó.',
  inOpener: '¿En qué producto está interesado?',
  promises: ['Never promise a final price', 'Never promise a discount', 'Never promise same-day delivery'],
  banned: ['gratis', 'garantizado'],
  custSay: 'Sí, pedí información por la página.'
}, {
  id: 'appointments',
  name: 'Appointments',
  icon: I.calendar,
  blurb: 'Confirms, moves and reminds — for clinics, workshops and service visits.',
  stat: 'Used by 51 teams',
  company: 'Clínica Andes',
  who: 'patients of',
  mid: 'states the date and time, and',
  goal: 'confirm',
  handoff: 'desk',
  opener: 'Le llamo para confirmar su cita del jueves a las 10:00.',
  inOpener: '¿Desea agendar, mover o confirmar una cita?',
  promises: ['Never promise a specific doctor', 'Never promise a same-day slot', 'Never give clinical advice'],
  banned: ['diagnóstico', 'urgencia'],
  custSay: 'Sí, con ella. ¿De qué se trata?'
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
  inOpener: '¿Desea dejar un mensaje o que le devolvamos la llamada?',
  promises: ['Never promise an exact callback minute', 'Never promise a resolution'],
  banned: ['reclamo'],
  custSay: 'Ah sí, llamé ayer y no me contestaron.'
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
  handoff: 'sup',
  opener: 'Le llamo por su saldo pendiente.',
  inOpener: '¿Desea consultar su saldo o registrar un pago?',
  promises: ['Never promise to remove interest', 'Never promise to stop legal action', 'Never promise a discount on the balance'],
  banned: ['abogado'],
  custSay: 'Sí, soy yo. Ya sé del saldo pendiente.'
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
      handoff: t.handoff
    },
    opener: inbound ? t.inOpener : t.opener,
    banned: [...DEFAULT_BANNED, ...t.banned],
    promises: t.promises.map(p => ({
      t: p,
      on: true
    }))
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
  lastDeployed: { when: '22 Aug 2026, 16:40', by: 'carina.soca' },
  versions: [
    // `was` = what this version held that the agent no longer does; the newest needs none
    { id: 'v1', author: 'attilio.porchia', when: '2 Aug 2026, 10:04',  deployed: true,  changed: 'First version',
      was: { opener: 'Le llamo por su cita en Clínica Andes.', handoverOther: [] } },
    { id: 'v2', author: 'attilio.porchia', when: '14 Aug 2026, 09:12', deployed: false, changed: 'Reworded the opener',
      was: { handoverOther: [] } },
    { id: 'v3', author: 'carina.soca',     when: '22 Aug 2026, 16:40', deployed: true,  changed: 'Added the medical-emergency handover rule' }
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
    handoff: 'desk'
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
  note: '1.240 calls this month · 74% confirmed',
  extraRules: []
}, {
  id: 'a2',
  name: 'Cotizaciones Seguros Vida',
  personaId: 'antonio',
  template: 'leads',
  assignedToDialer: true,
  dialers: ['Cotizaciones_Q3', 'Leads_Web'],
  lastDeployed: { when: '29 Aug 2026, 11:05', by: 'attilio.porchia' },
  versions: [
    { id: 'v1', author: 'carina.soca',     when: '18 Aug 2026, 15:22', deployed: false, changed: 'First version',
      was: { promises: [] } },
    { id: 'v2', author: 'attilio.porchia', when: '29 Aug 2026, 11:05', deployed: true,  changed: 'Never-promise: final price' }
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
    handoff: 'sales'
  },
  opener: 'Le llamo por la cotización que solicitó.',
  banned: [...DEFAULT_BANNED, 'gratis'],
  promises: [{
    t: 'Never promise a final price',
    on: true
  }],
  note: '20 calls in its first week',
  extraRules: []
}, {
  id: 'a3',
  name: 'Recados Del Plata',
  personaId: 'linda',
  template: 'messages',
  assignedToDialer: false,
  dialers: [],
  lastDeployed: { when: '12 Aug 2026, 09:30', by: 'attilio.porchia' },
  versions: [
    { id: 'v1', author: 'attilio.porchia', when: '12 Aug 2026, 09:30', deployed: true, changed: 'First version' }
  ],
  calls: 38,
  direction: 'out',
  attempts: 4,
  from: 10,
  to: 20,
  tokens: {
    company: 'Servicios Del Plata',
    identity: 'verify',
    goal: 'callback',
    handoff: 'msg'
  },
  opener: 'Le devuelvo la llamada por el mensaje que nos dejó.',
  banned: DEFAULT_BANNED,
  promises: [{
    t: 'Never promise a resolution',
    on: true
  }],
  note: '38 calls',
  extraRules: []
}, {
  id: 'a4',
  name: 'Bienvenida Nuevos Clientes',
  personaId: 'charles',
  template: 'leads',
  assignedToDialer: false,
  dialers: [],
  lastDeployed: null,
  versions: [
    { id: 'v1', author: 'attilio.porchia', when: '31 Aug 2026, 17:48', deployed: false, changed: 'First version' }
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
    handoff: 'sales'
  },
  opener: 'Le llamo para darle la bienvenida y explicarle su plan.',
  banned: DEFAULT_BANNED,
  promises: [],
  note: 'No calls yet',
  extraRules: []
}, {
  id: 'a5',
  name: 'Recepción Banco Sol',
  personaId: 'frank',
  template: 'collections',
  assignedToDialer: false,
  dialers: [],
  lastDeployed: null,
  versions: [
    { id: 'v1', author: 'carina.soca', when: '1 Sep 2026, 08:15', deployed: false, changed: 'First version' }
  ],
  calls: 12,
  direction: 'in',
  attempts: 3,
  from: 8,
  to: 18,
  tokens: {
    company: 'Banco Sol',
    identity: 'verify',
    goal: 'link',
    handoff: 'sup'
  },
  opener: '¿Desea consultar su saldo o registrar un pago?',
  banned: [...DEFAULT_BANNED, 'abogado'],
  promises: [{
    t: 'Never promise to remove interest',
    on: true
  }, {
    t: 'Never promise a discount on the balance',
    on: true
  }],
  note: '12 calls so far',
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
    className: 'pop' + (align === 'right' ? ' right' : ''),
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
  here
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
  }, I.cup, I.bell, /*#__PURE__*/React.createElement("span", {
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
  }, busy ? I.spinner : I.check), busy ? 'Saving…' : 'Draft saved');
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
  const disclosure = 'Le hablo desde un asistente virtual de ' + tk.company + '.';
  const b3 = (tk.identity === 'none' ? '' : ident.say + ' ') + goalSay(draft);
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
    title: "This is your agent",
  }), /*#__PURE__*/React.createElement("p", {
    className: "brief"
  }, inb ? /*#__PURE__*/React.createElement(React.Fragment, null, "This agent answers calls to ", companyChip, ".") : /*#__PURE__*/React.createElement(React.Fragment, null, "This agent calls ", t.who, " ", companyChip, "."), ' ', "It", ' ', /*#__PURE__*/React.createElement(Chip, {
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
  }, I.shield, /*#__PURE__*/React.createElement("span", null, "On collections calls the agent must establish who it is speaking to. The balance can never be mentioned to anyone else, so there is no option to speak to whoever answers."))), ", ", t.mid, ' ', /*#__PURE__*/React.createElement(Chip, {
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
  })), ".", ' ', "If someone asks for a person, it ", /*#__PURE__*/React.createElement(Chip, {
    label: hand.v,
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
      setOpen(null);
    }
  }, o.v)))), "."), /*#__PURE__*/React.createElement("p", {
    className: "brief",
    style: {
      marginTop: 22
    }
  }, "Every call ", inb ? 'it answers ' : '', "opens with ", /*#__PURE__*/React.createElement("span", {
    className: "chip-fix",
    title: "Required disclosure \u2014 cannot be removed"
  }, I.lock, disclosure), ' ', /*#__PURE__*/React.createElement(Chip, {
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
  }, I.info, /*#__PURE__*/React.createElement("span", null, "Keep it to one sentence. ", p.name, " says it in ", p.reg.split(' · ')[0], "."))))), /*#__PURE__*/React.createElement("div", {
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
  }, "Customer"), t.custSay), /*#__PURE__*/React.createElement("div", {
    className: "bub bub-a",
    key: 'a' + b3
  }, /*#__PURE__*/React.createElement("span", {
    className: "bub-lab"
  }, p.name, " \xB7 0:11"), b3)), ))), /*#__PURE__*/React.createElement(Foot, {
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
function agentReply(input, draft) {
  const s = norm(input),
    tk = draft.tokens;
  const goal = val(goalsFor(draft.template), tk.goal),
    hand = val(HANDOFF, tk.handoff);
  const guarded = draft.promises.some(p => /price|discount|interest/i.test(p.t));
  if (draft.template === 'reception') {
    const k = draft.knowledge || { about: '', urls: [] };
    const ask = (draft.collect || []).filter(f => f.on);
    const first = ask[0] ? ' ' + ask[0].question : '';
    if (/message|leave a|mensaje|recado/.test(s)) return {
      txt: 'Of course.' + (first || ' May I have your name?'),
      why: 'Goal: collects the caller’s details'
    };
    if (/appointment|book|schedule|cita|agendar/.test(s)) return tk.goal === 'book' ? {
      txt: 'I can book that from the calendar. Which day works best for you?',
      why: 'Goal: books from the connected calendar'
    } : {
      txt: 'I can’t book that myself, but I’ll take your details and the team will call you back to set it up.' + first,
      why: 'Goal setting → takes a message instead'
    };
    if (/hours|open|opening|close|horario|abren/.test(s)) return (k.about || '').trim() ? {
      txt: 'Sure. ' + k.about.trim().split('. ')[0].replace(/\.$/, '') + '. Is there anything else I can help with?',
      why: 'Answered from the business profile'
    } : {
      txt: 'I don’t have that to hand, so let me take a message and someone will confirm the hours with you.' + first,
      why: 'Nothing in the business profile yet → takes a message'
    };
  }
  if (/robot|humano|persona|quien habla|con quien|maquina|grabacion|asistente/.test(s)) return {
    txt: 'Soy un asistente virtual de ' + tk.company + '. ' + hand.say,
    why: 'Rule: always disclose · handoff setting'
  };
  if (/no me llame|no vuelva a llamar|de la lista|dar de baja|no quiero recibir|no llame mas/.test(s)) return {
    txt: 'Entendido, no le insisto más. Cierro la llamada aquí. Buen día.',
    why: 'Ends the call · the disposition is set outside the agent'
  };
  if (/no tengo|no puedo pagar|sin plata|sin dinero|desemplead/.test(s)) return {
    txt: 'Entiendo. Podemos registrar un abono parcial, ¿cuánto podría abonar esta semana?',
    why: 'Rule: offer a partial payment before escalating'
  };
  if (/interes|descuento|rebaj|condon/.test(s)) return {
    txt: (guarded ? 'No le puedo prometer quitar intereses ni descuentos. ' : '') + goalSay(draft),
    why: guarded ? 'Rule: never promise a discount or removing interest' : 'Goal setting'
  };
  if (/precio|cuanto|cuesta|vale|tarifa/.test(s)) return {
    txt: (guarded ? 'No le puedo dar un precio final por teléfono. ' : '') + goalSay(draft),
    why: guarded ? 'Rule: never promise a final price' : 'Goal setting'
  };
  if (/no puedo|ocupad|trabaj|otro dia|otro horario|mas tarde|cambiar|mover|reagenda/.test(s)) return {
    txt: 'Sin problema. Tengo el viernes a las 9:00 o el lunes a las 15:00. ¿Alguno le sirve?',
    why: 'Rule: offer another slot before taking a message'
  };
  if (/^(si|claro|ok|dale|listo|confirmo|de acuerdo|perfecto|bueno)\b/.test(s)) return {
    // only the callback goal has a number to read back
    txt: tk.goal === 'callback'
      ? 'Perfecto. Le repito el número para asegurarme de que quedó bien, y le devolvemos la llamada a esa hora.'
      : 'Perfecto, queda confirmado. Le enviamos el detalle por WhatsApp. Gracias por su tiempo.',
    why: 'Goal reached · call ends'
  };
  if (/gracias|adios|chao|hasta luego/.test(s)) return {
    txt: 'Gracias a usted. Que tenga buen día.',
    why: 'Closing'
  };
  const hv = draft.handover || [];
  if (hv.indexOf('angry') > -1 && /desastre|inaceptable|verg[uü]enza|harto|molesto|estafa|p[eé]simo/.test(s)) return {
    txt: 'Le entiendo, y lo siento. ' + hand.say,
    why: 'Handover rule: the customer is upset'
  };
  if (hv.indexOf('legal') > -1 && /abogado|demanda|queja|superintendencia|denuncia|defensor/.test(s)) return {
    txt: 'Prefiero que esto lo vea una persona. ' + hand.say,
    why: 'Handover rule: a complaint or a lawyer is mentioned'
  };
  if (hv.indexOf('consent') > -1 && /no autoric|no di permiso|qui[eé]n les dio mi n[uú]mero|nunca acept/.test(s)) return {
    txt: 'Con gusto lo revisamos. ' + hand.say,
    why: 'Handover rule: the customer never agreed to be contacted'
  };
  if (/urgente|demanda|embargo|abogado/.test(s)) return {
    txt: 'Le entiendo. ' + hand.say,
    why: 'Word on the never-use list → rephrase and hand off'
  };
  return {
    txt: goalSay(draft),
    why: 'Goal setting'
  };
}
const QUICKS = ['¿Con quién hablo?', 'Ese día no puedo', '¿Cuánto cuesta?', 'No tengo cómo pagar ahora', 'Esto es un desastre', '¿Quién les dio mi número?', 'Sí, confirmo', 'Quiero hablar con una persona', 'No me llame más'];
function StepTest({
  draft,
  set,
  next,
  back
}) {
  const p = persona(draft.personaId),
    tk = draft.tokens;
  const inb = draft.direction === 'in';
  const open = disclosureFor(draft) + ' ' + draft.opener;
  const [msgs, setMsgs] = useState([{
    who: 'a',
    txt: open,
    why: 'Fixed disclosure + your opener'
  }]);
  const [v, setV] = useState('');
  const [typing, setTyping] = useState(false);
  const [call, setCall] = useState(null);
  const [target, setTarget] = useState('draft');   // read-only: which version to run
  const scroll = useRef(null);
  useEffect(() => {
    if (scroll.current) scroll.current.scrollTop = scroll.current.scrollHeight;
  }, [msgs, typing]);
  const send = txt => {
    const m = (txt || v).trim();
    if (!m) return;
    setMsgs(x => [...x, {
      who: 'c',
      txt: m
    }]);
    setV('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs(x => [...x, {
        who: 'a',
        ...agentReply(m, draft)
      }]);
    }, 700);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "wrap wz-wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHead, {
    title: "Try it before anyone else does",
    sub: 'You play the customer' + (inb ? ' who just called in' : '') + '. Type anything, or tap a line below. Nothing here reaches a real phone.'
  }), (draft.versions || []).length > 0 && /*#__PURE__*/React.createElement("div", {
    style: { display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 14 }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "Version"), /*#__PURE__*/React.createElement("select", {
    className: "inp",
    style: { maxWidth: 300 },
    value: target,
    "aria-label": "Which version to test",
    onChange: e => setTarget(e.target.value)
  }, testTargets(draft).map(t => /*#__PURE__*/React.createElement("option", {
    key: t.id,
    value: t.id
  }, t.label)))), /*#__PURE__*/React.createElement("div", {
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
    className: "pill pill-reh",
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement("i", null), "Simulation")), /*#__PURE__*/React.createElement("div", {
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
  }, m.why))), typing && /*#__PURE__*/React.createElement("div", {
    className: "bub bub-a"
  }, /*#__PURE__*/React.createElement("span", {
    className: "typing"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)))), /*#__PURE__*/React.createElement("div", {
    className: "quick"
  }, (draft.template === 'reception' ? RECEPTION_QUICKS : QUICKS).map(q => /*#__PURE__*/React.createElement("button", {
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
  }, "Test interactions are not recorded and don\u2019t affect metrics.")), /*#__PURE__*/React.createElement("div", {
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
    nextLabel: "Save & open the agent",
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
  }, p.name, " has not made any calls yet. Deploy it into a dialer and its calls show up here.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
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
  }, I.info, /*#__PURE__*/React.createElement("span", null, "Applies to future calls only. ", 'It reaches live calls on the next deploy.')), /*#__PURE__*/React.createElement("div", {
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
  /* Recovering a version does not publish anything. It lays that version's configuration over
     the agent as unsaved changes and opens the Scope screen, so it can be read before Deploy. */
  const recoverVersion = (id, v) => {
    const a = agents.find(x => x.id === id);
    if (!a) return;
    const cfg = versionConfig(a, v);
    setAgents(agents.map(x => x.id === id ? { ...x, ...cfg, dirty: v.id } : x));
    setDraft({ ...newDraft(), ...a, ...cfg });
    setStep(3);
    setMaxStep(5);
    setScr({ n: 'wizard', editing: id, recovered: v.id });
    toast(v.id + ' loaded. Read it here, then Deploy it when you are ready.');
  };
  const deleteAgent = id => {
    const a = agents.find(x => x.id === id);
    setAgents(agents.filter(x => x.id !== id));
    setScr({ n: 'list' });
    toast((a ? a.name : 'Agent') + ' deleted.');
  };
  const finish = () => {
    if (scr.editing) {
      let newVersion = null;
      setAgents(agents.map(x => {
        if (x.id !== scr.editing) return x;
        newVersion = nextVersionId(x);
        const merged = { ...x, ...draft, id: x.id };
        return {
          ...merged,
          // an edit is a new draft version; deploying it stays a separate decision
          versions: [...(x.versions || []), {
            id: newVersion, author: ME, when: nowStamp(), deployed: false,
            changed: scr.recovered ? 'Recovered ' + scr.recovered : 'Edited the agent',
            cfg: configOf(merged)
          }],
          dirty: null
        };
      }));
      toast('Saved as ' + (newVersion || 'a new draft') + '. Deploy it when you are ready.');
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
        note: 'No calls yet',
        assignedToDialer: false,
        dialers: [],
        lastDeployed: null,
        versions: [{ id: 'v1', author: ME, when: nowStamp(), deployed: false, changed: 'First version',
          cfg: configOf(draft) }],
        extraRules: []
      }]);
      toast('Saved as a working draft. Deploy it when you are ready.');
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
      next: () => step === 5 ? finish() : go(step + 1),
      back: () => go(step - 1)
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
    here: scr.n === 'interactions' || scr.n === 'ix' ? 'interactions' : 'list',
    onGo: where => setScr({
      n: where
    }),
    onHome: () => setScr({
      n: 'list'
    })
  }, body), talk && /*#__PURE__*/React.createElement(Modal, {
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
  }, /*#__PURE__*/React.createElement("a", {
    className: "learnmore",
    href: "#",
    onClick: e => e.preventDefault()
  }, "Learn more: AI agent collection prerequisites \u2014 list, dialer and disposition requirements")));
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
function NeverPromises({
  draft,
  set
}) {
  const [np, setNp] = useState('');
  const add = () => {
    const t = np.trim();
    if (t) set({
      promises: [...draft.promises, {
        t,
        on: true
      }]
    });
    setNp('');
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, draft.promises.map((p, i) => /*#__PURE__*/React.createElement("div", {
    className: "prom",
    key: i,
    style: {
      marginTop: i ? 8 : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "no-ico"
  }, I.x), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, p.t), /*#__PURE__*/React.createElement("button", {
    className: "prom-x",
    "aria-label": "Remove rule",
    onClick: () => set({
      promises: draft.promises.filter((_, j) => j !== i)
    })
  }, I.x))), /*#__PURE__*/React.createElement("div", {
    className: "prom",
    style: {
      marginTop: 8,
      background: 'var(--panel-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "no-ico",
    style: {
      background: 'var(--accent-soft)',
      color: 'var(--accent)'
    }
  }, I.plus), /*#__PURE__*/React.createElement("input", {
    className: "inp",
    style: {
      border: 0,
      padding: '2px 0',
      background: 'none'
    },
    value: np,
    placeholder: "Add another promise it must never make\u2026",
    onChange: e => setNp(e.target.value),
    onKeyDown: e => e.key === 'Enter' && add()
  }), np.trim() && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-gho btn-sm",
    onClick: add
  }, "Add")));
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
  const add = () => {
    const l = label.trim(),
      qq = q.trim();
    if (!l || !qq) return;
    set({
      collect: [...fields, {
        id: 'custom_' + Date.now().toString(36),
        label: l,
        question: qq,
        on: true,
        custom: true
      }]
    });
    setLabel('');
    setQ('');
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
    className: "prom",
    style: {
      marginTop: 12,
      background: 'var(--panel-2)',
      flexWrap: 'wrap'
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
  }, "Add custom question"), /*#__PURE__*/React.createElement("input", {
    className: "inp",
    style: {
      border: 0,
      padding: '2px 0',
      background: 'none',
      flex: '1 1 140px'
    },
    value: label,
    placeholder: "Label, e.g. Order number",
    onChange: e => setLabel(e.target.value)
  }), /*#__PURE__*/React.createElement("input", {
    className: "inp",
    style: {
      border: 0,
      padding: '2px 0',
      background: 'none',
      flex: '2 1 220px'
    },
    value: q,
    placeholder: "Spoken question, e.g. Do you have your order number handy?",
    onChange: e => setQ(e.target.value),
    onKeyDown: e => e.key === 'Enter' && add()
  }), label.trim() && q.trim() && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-gho btn-sm",
    onClick: add
  }, "Add")));
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
  const hand = val(HANDOFF, draft.tokens.handoff);
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
    hint: 'When any of these happens the agent stops, says a person will take over, and hands the call across. It hands over by: ' + hand.v + ' — change that on the brief.'
  }, /*#__PURE__*/React.createElement(HandoverRules, {
    draft: draft,
    set: set
  })), /*#__PURE__*/React.createElement(Section, {
    title: "Words it must never use",
    summary: n(draft.banned.length, 'word', 'words'),
    hint: "If a word here would come up, the agent rephrases. Type a word and press Enter."
  }, /*#__PURE__*/React.createElement(TagInput, {
    tags: draft.banned,
    onChange: b => set({
      banned: b
    }),
    placeholder: "Add a word\u2026"
  })), /*#__PURE__*/React.createElement(Section, {
    title: "Promises it must never make",
    summary: n(draft.promises.length, 'promise', 'promises'),
    hint: "The agent will say it cannot promise that, then offer what it can do instead."
  }, /*#__PURE__*/React.createElement(NeverPromises, {
    draft: draft,
    set: set
  })))), /*#__PURE__*/React.createElement(Foot, {
    onBack: back,
    onNext: next,
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
  const pickLang = id => set({
    lang: id,
    personaId: draft.personaId && persona(draft.personaId).lang === id ? draft.personaId : null
  });
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
  }, sel.line))), lang === 'en' && /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 16
    }
  }, I.info, /*#__PURE__*/React.createElement("span", null, "The brief and the test conversation below are written in Spanish in this prototype \u2014 an English agent would speak English throughout."))))), /*#__PURE__*/React.createElement(Foot, {
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
    className: "panel-eyebrow"
  }, "Administrator"), /*#__PURE__*/React.createElement("div", {
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
  }, "AI Agents"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-pri",
    style: {
      marginLeft: 'auto'
    },
    onClick: onCreate
  }, I.plus, "Create agent")), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "Agents that call out and answer for your campaigns. You describe the job in plain words \u2014 no scripts, no prompts.")), /*#__PURE__*/React.createElement("div", {
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
    }, inb ? I.phoneIn : I.phoneOut), dirLabel(a.direction)), everDeployed(a) && /*#__PURE__*/React.createElement(DeployedBadge, {
      dialers: a.dialers
    })), /*#__PURE__*/React.createElement("div", {
      className: "ag-line"
    }, "It ", goalLabel(a), "."), /*#__PURE__*/React.createElement("div", {
      className: "ag-meta",
      style: {
        fontSize: 12
      }
    }, a.note));
  }))));
}

/* ============================ 9 · THE AGENT PAGE ============================ */
const ruleCount = a => (a.handover || []).length + (a.handoverOther || []).length + 1 + (a.banned || []).length + (a.promises || []).length;

/* What deploying this version would change, against whatever is live. One line per change,
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
  }, version.id, " is the newest version there is."));
  const live = isLiveVersion(agent, d.base);
  const against = 'against ' + d.base.id + (live ? ', the version running now' : '');
  if (!d.rows.length) return /*#__PURE__*/React.createElement("div", {
    className: "vd-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vd-lead"
  }, "Nothing would change"), /*#__PURE__*/React.createElement("div", {
    className: "vd-sub"
  }, version.id, " is identical to ", d.base.id, live ? ', the version running now' : '', "."));
  const nch = d.rows.length;
  return /*#__PURE__*/React.createElement("div", {
    className: "vd-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vd-lead"
  }, "Deploying ", version.id, " changes ", nch === 1 ? 'one thing' : nch + ' things'), /*#__PURE__*/React.createElement("div", {
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

/* One live version, however many dialers run it. Several is worth saying on screen — the
   names are long, so the badge counts them and the tooltip and action bar spell them out. */
function DeployedBadge({
  dialers
}) {
  const ds = dialers || [],
    n = ds.length;
  return /*#__PURE__*/React.createElement("span", {
    className: "pill deployed",
    title: n ? 'Deployed · one live version, running in ' + andList(ds) : 'Deployed · not assigned to a dialer yet'
  }, /*#__PURE__*/React.createElement("i", null), "Deployed", n > 1 && /*#__PURE__*/React.createElement("span", {
    className: "pill-sub"
  }, "in ", n, " dialers"));
}
function AgentSummary({
  agent
}) {
  const a = agent,
    p = persona(a.personaId),
    inb = a.direction === 'in';
  const hand = val(HANDOFF, a.tokens.handoff),
    ident = val(identityFor(a.template), a.tokens.identity);
  const V = ({
    children
  }) => /*#__PURE__*/React.createElement("b", {
    className: "pv"
  }, children);
  /* asking for a person is always a trigger, so it belongs in the sentence */
  const triggers = ['asks for a person'].concat((a.handover || []).map(id => (HANDOVER.find(o => o.id === id) || {}).short).filter(Boolean));
  const own = a.handoverOther || [];
  const promises = (a.promises || []).map(x => x.t.replace(/^Never promise /i, ''));
  return /*#__PURE__*/React.createElement("div", {
    className: "brief-prose"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(V, null, p.name), " ", inb ? 'answers calls to ' : template(a.template).who ? 'calls ' + template(a.template).who + ' ' : 'calls ', /*#__PURE__*/React.createElement(V, null, a.tokens.company), " in ", /*#__PURE__*/React.createElement(V, null, LANGS[p.lang].name), ".", ' ', "It ", /*#__PURE__*/React.createElement(V, null, ident.v.replace(/^verifies/, 'verifies')), ", then ", /*#__PURE__*/React.createElement(V, null, goalLabel(a)), "."), /*#__PURE__*/React.createElement("p", null, "Every call opens with the fixed disclosure, then ", /*#__PURE__*/React.createElement("span", {
    className: "pq"
  }, "\u201C", a.opener, "\u201D")), /*#__PURE__*/React.createElement("p", null, "It ", /*#__PURE__*/React.createElement(V, null, hand.v), " when the customer ", orList(triggers), ".", promises.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, " It never promises ", /*#__PURE__*/React.createElement(V, null, orList(promises)), a.banned.length ? '' : '.'), a.banned.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, promises.length ? ', and' : ' It', " never says ", /*#__PURE__*/React.createElement(V, null, orList(a.banned)), ".")), own.length > 0 && /*#__PURE__*/React.createElement("p", null, "It also hands over on your own ", own.length === 1 ? 'rule' : 'rules', ":", ' ', own.map((t, i) => /*#__PURE__*/React.createElement("span", {
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
  const [askDeploy, setAskDeploy] = useState(false);
  const [askDel, setAskDel] = useState(false);
  const [history, setHistory] = useState(false);
  const [viewing, setViewing] = useState(null); // a version being read read-only
  const [saved, setSaved] = useState(false);
  const inb = a.direction === 'in';
  const latest = latestVersion(a);
  /* Deploy publishes the newest version — but only for an agent a dialer is
     actually using, and only when there is something new to publish. */
  const dials = dialersOf(a);
  const blocked = !isDeployedLive(a) ? 'nodialer' : !a.dirty && latest && latest.deployed ? 'live' : null;
  const patch = up => setAgents(agents.map(x => x.id === a.id ? {
    ...x,
    ...up
  } : x));

  /* Save stores the working draft. It never touches what is live. */
  const save = () => {
    const vs = (a.versions || []).slice();
    if (a.dirty) {
      // a recovered version becomes a new draft
      vs.push({
        id: nextVersionId(a),
        author: ME,
        when: nowStamp(),
        deployed: false,
        changed: 'Recovered ' + a.dirty,
        cfg: configOf(a)
      });
    }
    patch({
      versions: vs,
      dirty: null
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
    toast('Saved as the working draft.');
  };

  /* Deploy publishes the draft as the live version. */
  const deploy = () => {
    const vs = (a.versions || []).slice();
    const when = nowStamp();
    const fresh = a.dirty ? nextVersionId(a) : null;
    // `when` is when the version was written; deployment gets its own stamp
    if (a.dirty) vs.push({
      id: fresh,
      author: ME,
      when,
      deployed: true,
      deployedAt: when,
      changed: 'Recovered ' + a.dirty,
      cfg: configOf(a)
    }); // deploying saves the change too
    else if (vs.length) vs[vs.length - 1] = {
      ...vs[vs.length - 1],
      deployed: true,
      deployedAt: when
    };else vs.push({
      id: 'v1',
      author: ME,
      when,
      deployed: true,
      deployedAt: when,
      changed: 'First version',
      cfg: configOf(a)
    });
    patch({
      versions: vs,
      lastDeployed: {
        when,
        by: ME
      },
      dirty: null
    });
    setAskDeploy(false);
    const saved = fresh ? 'Saved as ' + fresh + ' and deployed. ' : 'Deployed. ';
    toast(saved + (dials.length ? andList(dials) + (dials.length > 1 ? ' pick' : ' picks') + ' it up on the next interaction.' : 'This is now the live version.'));
  };
  /* Deploy is only reachable for an assigned agent, so it always confirms. */
  const onDeployClick = () => setAskDeploy(true);

  /* Recovering never publishes. It hands the version to the Scope screen for review;
     Deploy stays a separate decision, taken afterwards from this page. */
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
  }, inb ? I.phoneIn : I.phoneOut), dirLabel(a.direction)), everDeployed(a) && /*#__PURE__*/React.createElement(DeployedBadge, {
    dialers: a.dialers
  }), latest && /*#__PURE__*/React.createElement("span", {
    className: "vchip",
    title: latest.deployed ? 'This version is live' : 'Not deployed yet'
  }, latest.id, a.dirty ? ' +' : '')), /*#__PURE__*/React.createElement("div", {
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
  }, I.pencil, "Edit")))), /*#__PURE__*/React.createElement("div", {
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
  }, a.tokens.company), " and ", goalLabel(a), ".", ' ', "Asks for a person \u2192 ", val(HANDOFF, a.tokens.handoff).v, "."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(Section, {
    title: "How it is set up",
    summary: template(a.template).name + ' · ' + ruleCount(a) + ' rules'
  }, /*#__PURE__*/React.createElement(AgentSummary, {
    agent: a
  }))), a.dirty && /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 18
    }
  }, I.pencil, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, a.dirty, " recovered"), " \u2014 what you see above is that version's configuration, not live yet. Save it to keep it as the working draft, or Deploy to save and publish it in one step.")), blocked === 'nodialer' && /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 18
    }
  }, I.info, /*#__PURE__*/React.createElement("span", null, "This agent is not in a dialer yet, so there is nothing to deploy to. Add it to a dialer in the Outbound Hub, then deploy from here.")), blocked === 'live' && /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 18
    }
  }, I.check, /*#__PURE__*/React.createElement("span", null, latest.id, " is the latest version and it is already deployed. Edit the agent to start a new draft.")), /*#__PURE__*/React.createElement("div", {
    className: "actionbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ab-facts"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ab-lead"
  }, latest ? /*#__PURE__*/React.createElement(React.Fragment, null, "Latest ", /*#__PURE__*/React.createElement("b", null, latest.id), " \xB7 ", a.dirty ? 'unsaved changes' : latest.deployed ? 'deployed' : 'draft') : /*#__PURE__*/React.createElement(React.Fragment, null, "No versions yet")), /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, a.lastDeployed ? /*#__PURE__*/React.createElement(React.Fragment, null, "Last deployed ", a.lastDeployed.when, " by ", a.lastDeployed.by) : /*#__PURE__*/React.createElement(React.Fragment, null, "Last deployed: never")), /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, dials.length ? /*#__PURE__*/React.createElement(React.Fragment, null, "Live in ", andList(dials)) : /*#__PURE__*/React.createElement(React.Fragment, null, "Not in a dialer yet")), /*#__PURE__*/React.createElement("a", {
    className: "learnmore",
    href: "#",
    onClick: e => e.preventDefault()
  }, "Learn more: AI agent collection prerequisites")), /*#__PURE__*/React.createElement("div", {
    className: "ab-acts"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-gho",
    onClick: save
  }, saved ? I.check : null, saved ? 'Saved' : 'Save'), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-pri",
    onClick: onDeployClick,
    disabled: !!blocked,
    title: blocked === 'nodialer' ? 'Not in a dialer yet — assign it in the Outbound Hub first' : blocked === 'live' ? latest.id + ' is already deployed — nothing new to publish' : a.dirty ? 'Save the change and publish it, in one step' : 'Publish ' + (latest ? latest.id : 'this agent') + ' as the live version'
  }, I.arrowUp, "Deploy")), blocked && /*#__PURE__*/React.createElement("div", {
    className: "ab-why mono"
  }, blocked === 'nodialer' ? /*#__PURE__*/React.createElement(React.Fragment, null, "Assign this agent to a dialer in the Outbound Hub to deploy it") : /*#__PURE__*/React.createElement(React.Fragment, null, latest.id, " is already deployed \u2014 nothing new to publish")), /*#__PURE__*/React.createElement("div", {
    className: "ab-danger"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dan btn-sm",
    onClick: () => setAskDel(true)
  }, ICO_TRASH, "Delete agent"))))), askDeploy && /*#__PURE__*/React.createElement(Modal, {
    title: "Deploy this agent?",
    onClose: () => setAskDeploy(false),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-gho",
      onClick: () => setAskDeploy(false)
    }, "Cancel"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-pri",
      onClick: deploy
    }, "Deploy"))
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, "This agent is assigned to", ' ', dials.map((dl, i) => /*#__PURE__*/React.createElement("span", {
    key: dl
  }, i ? i === dials.length - 1 ? ' and ' : ', ' : '', /*#__PURE__*/React.createElement("b", null, dl))), ".", ' ', "Changes apply to the next interaction."), deployedVersion(a) && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 10
    }
  }, "It replaces", ' ', /*#__PURE__*/React.createElement("b", null, deployedVersion(a).id), ", the version the ", dials.length > 1 ? 'dialers are' : 'dialer is', " using now."), dials.length > 1 && /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 12
    }
  }, I.info, /*#__PURE__*/React.createElement("span", null, "An agent runs one live version everywhere it is assigned, so all ", dials.length, " dialers switch together. To move one of them separately it needs its own agent.")), a.dirty && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 10
    }
  }, "The configuration you recovered from ", /*#__PURE__*/React.createElement("b", null, a.dirty), " is saved as", ' ', /*#__PURE__*/React.createElement("b", null, nextVersionId(a)), " and published in the same step.")), history && !viewing && /*#__PURE__*/React.createElement(Modal, {
    title: "Version history",
    onClose: () => setHistory(false),
    actions: /*#__PURE__*/React.createElement("button", {
      className: "btn btn-gho",
      onClick: () => setHistory(false)
    }, "Close")
  }, /*#__PURE__*/React.createElement("div", {
    className: "vlist"
  }, (a.versions || []).slice().reverse().map(v => /*#__PURE__*/React.createElement("button", {
    className: "vrowh",
    key: v.id,
    onClick: () => setViewing(v)
  }, /*#__PURE__*/React.createElement("span", {
    className: "vid"
  }, v.id), /*#__PURE__*/React.createElement("span", {
    className: "vmeta"
  }, /*#__PURE__*/React.createElement("b", null, v.changed), /*#__PURE__*/React.createElement("span", null, v.author, " \xB7 ", v.when)), isLiveVersion(a, v) && /*#__PURE__*/React.createElement("span", {
    className: "vdep mono",
    title: v.deployedAt ? 'Deployed ' + v.deployedAt : 'Deployed'
  }, "Deployed"), wasLiveVersion(a, v) && /*#__PURE__*/React.createElement("span", {
    className: "vwas mono",
    title: 'Was live' + (v.deployedAt ? ' from ' + v.deployedAt : '') + ', until ' + deployedVersion(a).id + ' replaced it'
  }, "Was live"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)'
    }
  }, I.fwd))))), viewing && /*#__PURE__*/React.createElement(Modal, {
    title: viewing.id + ' · read-only',
    onClose: () => setViewing(null),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-gho",
      onClick: () => setViewing(null)
    }, "Back"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-pri",
      onClick: () => recover(viewing)
    }, "Recover this version"))
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      marginBottom: 8
    }
  }, viewing.author, " \xB7 ", viewing.when, isLiveVersion(a, viewing) ? ' · deployed and live now' : wasLiveVersion(a, viewing) ? ' · was live, replaced by ' + deployedVersion(a).id : ' · never deployed'), /*#__PURE__*/React.createElement("p", {
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
  }, "Its brief, its rules and its interaction history go with it. This cannot be undone.", isDeployedLive(a) && /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("b", null, "It is live in ", andList(dials)), " \u2014 deleting it stops those calls."))));
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
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Start time"), /*#__PURE__*/React.createElement("th", null, "End time"), /*#__PURE__*/React.createElement("th", null, "Channel"), /*#__PURE__*/React.createElement("th", null, "Client"), /*#__PURE__*/React.createElement("th", null, "Source"), /*#__PURE__*/React.createElement("th", null, "Campaign"), /*#__PURE__*/React.createElement("th", null, "Handled by"), /*#__PURE__*/React.createElement("th", null, "Disposition"), /*#__PURE__*/React.createElement("th", {
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
  }));
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
  }, /*#__PURE__*/React.createElement("i", null), v.name, " \xB7 AI agent"), /*#__PURE__*/React.createElement("span", {
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
  const goal = val(goals, tk.goal),
    hand = val(HANDOFF, tk.handoff);
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
  const disclosure = disclosureFor(draft);
  /* a receptionist never transfers live, so only the message hand-off is offered */
  const handoffs = HANDOFF.filter(o => o.id === 'msg');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "wrap wz-wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brief-2col"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHead, {
    title: "This is your agent"
  }), /*#__PURE__*/React.createElement("p", {
    className: "brief"
  }, "This agent answers calls to ", /*#__PURE__*/React.createElement(Chip, {
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
  }, fields.map(f => /*#__PURE__*/React.createElement("button", {
    className: "opt",
    role: "checkbox",
    "aria-checked": f.on,
    key: f.id,
    onClick: () => toggleField(f.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "cbx"
  }, f.on && I.check), /*#__PURE__*/React.createElement("span", null, f.label)))), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 10
    }
  }, I.info, /*#__PURE__*/React.createElement("span", null, "Custom questions are added on the rules step."))), ", ", /*#__PURE__*/React.createElement(Chip, {
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
  }, o.v)))), ", and when it can\u2019t help it ", /*#__PURE__*/React.createElement(Chip, {
    label: hand.v,
    align: "right",
    hint: "A receptionist never transfers a live call.",
    isOpen: open === 'handoff',
    onOpen: tog('handoff')
  }, /*#__PURE__*/React.createElement("div", {
    role: "radiogroup"
  }, handoffs.map(o => /*#__PURE__*/React.createElement(Option, {
    key: o.id,
    on: o.id === tk.handoff,
    onClick: () => {
      setTok('handoff', o.id);
      setOpen(null);
    }
  }, o.v))), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 10
    }
  }, I.lock, /*#__PURE__*/React.createElement("span", null, "Live transfer is not offered for this template \u2014 the caller\u2019s details reach your team as a summary."))), "."), /*#__PURE__*/React.createElement("p", {
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
    className: "field",
    style: {
      borderTop: '1px solid var(--line-2)',
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field-t"
  }, "What it knows"), /*#__PURE__*/React.createElement("div", {
    className: "field-h"
  }, "Answers come only from here. Leave it empty and the agent takes a message instead of guessing."), /*#__PURE__*/React.createElement("div", {
    className: "field-b"
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
  }))))), /*#__PURE__*/React.createElement("div", {
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

var results = [];
function T(n, el){ try{ var h=ReactDOMServer.renderToStaticMarkup(el); results.push('OK   '+n+'  ('+h.length+'b)'); }
  catch(e){ results.push('FAIL '+n+' :: '+(e&&e.message)); } }
var noop=function(){};
function mk(tid,pid,dir){ var x=seedFromTemplate({...newDraft(),direction:dir,personaId:pid,attempts:2,from:8,to:18},tid);
  x.personaId=pid; x.direction=dir; x.lang=persona(pid).lang; return x; }
T('App / agent list', React.createElement(App,null));
T('interactions', React.createElement(Interactions,{agents:SEED_AGENTS,onOpenRow:function(){}}));
INTERACTIONS.forEach(function(r){ T('ixdetail '+r.id+'/'+r.medium+'/'+r.dir,
  React.createElement(InteractionDetail,{row:r,agents:SEED_AGENTS,onBack:function(){},onTeach:function(){}}));
  T('ixjson '+r.id, React.createElement(JsonView,{data:ixJson(r)})); });
['call','chat','wa','email'].forEach(function(m){ ['in','out'].forEach(function(dr){ [true,false].forEach(function(ai){
  T('badge '+m+'/'+dr+'/'+ai, React.createElement(ChannelBadge,{medium:m,dir:dr,ai:ai})); }); }); });
['out','in'].forEach(function(dir){
 ['leads','appointments','messages','collections'].forEach(function(tid){
  ['gloria','antonio','linda','alice','james','emily'].forEach(function(pid){
   var dd=mk(tid,pid,dir), c={draft:dd,set:noop,next:noop,back:noop}, tag=dir+'/'+tid+'/'+pid;
   [['step2',StepVoice],['step3',StepBrief],['step4',StepRules],['step5',StepTest]]
     .forEach(function(pair){ T(pair[0]+' '+tag, React.createElement(pair[1],c)); });
   T('step1 '+tag, React.createElement(StepDirection,{...c, talk:noop}));
   T('step1locked '+tag, React.createElement(StepDirection,{...c, locked:true, talk:noop}));
   T('step1nodir '+tag, React.createElement(StepDirection,{...c, draft:{...dd, direction:null, template:null}, talk:noop}));
   T('step3nolang '+tag, React.createElement(StepVoice,{...c, draft:{...dd, lang:null, personaId:null}}));
   T('step3other '+tag, React.createElement(StepVoice,{...c, draft:{...dd, lang:dd.lang==='es'?'en':'es'}}));
   T('gallery '+tag, React.createElement(TemplateGallery,{draft:dd,set:noop,talk:noop}));
   T('step5+custom '+tag, React.createElement(StepRules,{...c, draft:{...dd, handoverOther:['uno','dos']}}));
   ['setup','ring','done'].forEach(function(st){ T('modal '+st+' '+tag, React.createElement(CallMe,{draft:dd,state:st,setState:noop})); });
  });
 });
});
(function(){
  var rc = seedFromTemplate({...newDraft(),direction:'in',personaId:'alice',attempts:2,from:8,to:18},'reception');
  rc.personaId='alice'; rc.direction='in'; rc.lang='en';
  var c = {draft:rc, set:noop, next:noop, back:noop};
  T('reception gallery/in',  React.createElement(TemplateGallery,{draft:{...newDraft(),direction:'in'},set:noop,talk:noop}));
  T('reception gallery/out', React.createElement(TemplateGallery,{draft:{...newDraft(),direction:'out'},set:noop,talk:noop}));
  T('reception brief', React.createElement(StepBriefReception, c));
  T('reception brief +custom', React.createElement(StepBriefReception, {...c, draft:{...rc, collect:rc.collect.concat([{id:'custom_9',label:'X',question:'X?',on:true,custom:true}])}}));
  T('reception brief +knowledge', React.createElement(StepBriefReception, {...c, draft:{...rc, knowledge:{about:'Open 9–6.', urls:['https://lara.co/horarios']}}}));
  T('reception brief none on', React.createElement(StepBriefReception, {...c, draft:{...rc, collect:rc.collect.map(function(f){return {...f,on:false}})}}));
  T('reception rules', React.createElement(StepRules, c));
  T('reception collect editor', React.createElement(CollectFields, {draft:rc, set:noop}));
  T('reception test', React.createElement(StepTest, c));
  T('reception voice', React.createElement(StepVoice, c));
  ['setup','ring','done'].forEach(function(st){ T('reception modal '+st, React.createElement(CallMe,{draft:rc,state:st,setState:noop})); });
  goalsFor('reception').forEach(function(g){ T('reception brief goal '+g.id, React.createElement(StepBriefReception, {...c, draft:{...rc, tokens:{...rc.tokens, goal:g.id}}})); });
})();
SEED_AGENTS.forEach(function(a){
  /* assignment is read off the `dialers` array now, so sweep that rather than the old boolean —
     including the undefined case, which used to throw in the delete modal */
  ['out','in'].forEach(function(dir){
   [[],['Uno'],['Uno','Dos'],undefined].forEach(function(dl){ [0,412].forEach(function(nc){
    var on = dl ? dl.length : 'none';
    var ag={...a, direction:dir, dialers:dl, calls:nc};
    T('agentpage '+dir+'/'+on+'/'+nc+' · '+a.name, React.createElement(AgentPage,{agent:ag,agents:SEED_AGENTS,setAgents:noop,onBack:noop,onCorrect:noop,onEdit:noop,onTest:noop,onDelete:noop,toast:noop}));
    T('calls '+dir+'/'+on+'/'+nc+' · '+a.name, React.createElement(CallList,{agent:ag,onBack:noop,onOpen:noop})); }); }); });
  [null,'v1','v2'].forEach(function(dv){
    T('agentpage dirty='+dv+' · '+a.name, React.createElement(AgentPage,{agent:{...a, dirty:dv},
      agents:SEED_AGENTS,setAgents:noop,onBack:noop,onCorrect:noop,onEdit:noop,onTest:noop,onDelete:noop,toast:noop})); });
  T('agentpage never-deployed · '+a.name, React.createElement(AgentPage,{agent:{...a, lastDeployed:null},
    agents:SEED_AGENTS,setAgents:noop,onBack:noop,onCorrect:noop,onEdit:noop,onTest:noop,onDelete:noop,toast:noop}));
  T('badge · '+a.name, React.createElement(DeployedBadge,{dialers:a.dialers}));
  (a.versions||[]).forEach(function(v){
    T('vdiff '+v.id+' · '+a.name, React.createElement(VersionDiff,{agent:a, version:v})); });
  T('vdiff no versions · '+a.name, React.createElement(VersionDiff,{agent:{...a, versions:[]}, version:{id:'vX'}}));
  [[],['Uno'],['Uno','Dos'],['Uno','Dos','Tres'],undefined].forEach(function(dl){
    T('badge dialers='+(dl?dl.length:'none')+' · '+a.name, React.createElement(DeployedBadge,{dialers:dl})); });
  T('summary+versions · '+a.name, React.createElement(StepTest,{draft:{...a, lang:persona(a.personaId).lang},
    set:noop, next:noop, back:noop}));
  callsFor({...a, calls:412}).forEach(function(c){ if(c.kind==='none') return;
    T('correction '+c.kind+' · '+a.name, React.createElement(Correction,{agent:a,call:c,agents:SEED_AGENTS,setAgents:noop,onBack:noop,toast:noop})); });
});
var fails=results.filter(function(r){return r.indexOf('FAIL')===0});
'rendered '+results.length+' screens · '+fails.length+' failures\n'+fails.slice(0,8).join('\n');
