function v0(i,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in i)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(i,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function hv(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ld={exports:{}},Jo={},cd={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function x0(){if(Um)return xt;Um=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function y(k){return k===null||typeof k!="object"?null:(k=g&&k[g]||k["@@iterator"],typeof k=="function"?k:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,b={};function x(k,ne,Ae){this.props=k,this.context=ne,this.refs=b,this.updater=Ae||S}x.prototype.isReactComponent={},x.prototype.setState=function(k,ne){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,ne,"setState")},x.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function _(){}_.prototype=x.prototype;function D(k,ne,Ae){this.props=k,this.context=ne,this.refs=b,this.updater=Ae||S}var N=D.prototype=new _;N.constructor=D,w(N,x.prototype),N.isPureReactComponent=!0;var R=Array.isArray,V=Object.prototype.hasOwnProperty,z={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function O(k,ne,Ae){var $,pe={},be=null,me=null;if(ne!=null)for($ in ne.ref!==void 0&&(me=ne.ref),ne.key!==void 0&&(be=""+ne.key),ne)V.call(ne,$)&&!F.hasOwnProperty($)&&(pe[$]=ne[$]);var Ce=arguments.length-2;if(Ce===1)pe.children=Ae;else if(1<Ce){for(var qe=Array(Ce),Oe=0;Oe<Ce;Oe++)qe[Oe]=arguments[Oe+2];pe.children=qe}if(k&&k.defaultProps)for($ in Ce=k.defaultProps,Ce)pe[$]===void 0&&(pe[$]=Ce[$]);return{$$typeof:i,type:k,key:be,ref:me,props:pe,_owner:z.current}}function P(k,ne){return{$$typeof:i,type:k.type,key:ne,ref:k.ref,props:k.props,_owner:k._owner}}function C(k){return typeof k=="object"&&k!==null&&k.$$typeof===i}function G(k){var ne={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Ae){return ne[Ae]})}var le=/\/+/g;function Q(k,ne){return typeof k=="object"&&k!==null&&k.key!=null?G(""+k.key):ne.toString(36)}function fe(k,ne,Ae,$,pe){var be=typeof k;(be==="undefined"||be==="boolean")&&(k=null);var me=!1;if(k===null)me=!0;else switch(be){case"string":case"number":me=!0;break;case"object":switch(k.$$typeof){case i:case e:me=!0}}if(me)return me=k,pe=pe(me),k=$===""?"."+Q(me,0):$,R(pe)?(Ae="",k!=null&&(Ae=k.replace(le,"$&/")+"/"),fe(pe,ne,Ae,"",function(Oe){return Oe})):pe!=null&&(C(pe)&&(pe=P(pe,Ae+(!pe.key||me&&me.key===pe.key?"":(""+pe.key).replace(le,"$&/")+"/")+k)),ne.push(pe)),1;if(me=0,$=$===""?".":$+":",R(k))for(var Ce=0;Ce<k.length;Ce++){be=k[Ce];var qe=$+Q(be,Ce);me+=fe(be,ne,Ae,qe,pe)}else if(qe=y(k),typeof qe=="function")for(k=qe.call(k),Ce=0;!(be=k.next()).done;)be=be.value,qe=$+Q(be,Ce++),me+=fe(be,ne,Ae,qe,pe);else if(be==="object")throw ne=String(k),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return me}function he(k,ne,Ae){if(k==null)return k;var $=[],pe=0;return fe(k,$,"","",function(be){return ne.call(Ae,be,pe++)}),$}function se(k){if(k._status===-1){var ne=k._result;ne=ne(),ne.then(function(Ae){(k._status===0||k._status===-1)&&(k._status=1,k._result=Ae)},function(Ae){(k._status===0||k._status===-1)&&(k._status=2,k._result=Ae)}),k._status===-1&&(k._status=0,k._result=ne)}if(k._status===1)return k._result.default;throw k._result}var ce={current:null},I={transition:null},ue={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:I,ReactCurrentOwner:z};function oe(){throw Error("act(...) is not supported in production builds of React.")}return xt.Children={map:he,forEach:function(k,ne,Ae){he(k,function(){ne.apply(this,arguments)},Ae)},count:function(k){var ne=0;return he(k,function(){ne++}),ne},toArray:function(k){return he(k,function(ne){return ne})||[]},only:function(k){if(!C(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},xt.Component=x,xt.Fragment=t,xt.Profiler=o,xt.PureComponent=D,xt.StrictMode=s,xt.Suspense=f,xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,xt.act=oe,xt.cloneElement=function(k,ne,Ae){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var $=w({},k.props),pe=k.key,be=k.ref,me=k._owner;if(ne!=null){if(ne.ref!==void 0&&(be=ne.ref,me=z.current),ne.key!==void 0&&(pe=""+ne.key),k.type&&k.type.defaultProps)var Ce=k.type.defaultProps;for(qe in ne)V.call(ne,qe)&&!F.hasOwnProperty(qe)&&($[qe]=ne[qe]===void 0&&Ce!==void 0?Ce[qe]:ne[qe])}var qe=arguments.length-2;if(qe===1)$.children=Ae;else if(1<qe){Ce=Array(qe);for(var Oe=0;Oe<qe;Oe++)Ce[Oe]=arguments[Oe+2];$.children=Ce}return{$$typeof:i,type:k.type,key:pe,ref:be,props:$,_owner:me}},xt.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},xt.createElement=O,xt.createFactory=function(k){var ne=O.bind(null,k);return ne.type=k,ne},xt.createRef=function(){return{current:null}},xt.forwardRef=function(k){return{$$typeof:d,render:k}},xt.isValidElement=C,xt.lazy=function(k){return{$$typeof:m,_payload:{_status:-1,_result:k},_init:se}},xt.memo=function(k,ne){return{$$typeof:p,type:k,compare:ne===void 0?null:ne}},xt.startTransition=function(k){var ne=I.transition;I.transition={};try{k()}finally{I.transition=ne}},xt.unstable_act=oe,xt.useCallback=function(k,ne){return ce.current.useCallback(k,ne)},xt.useContext=function(k){return ce.current.useContext(k)},xt.useDebugValue=function(){},xt.useDeferredValue=function(k){return ce.current.useDeferredValue(k)},xt.useEffect=function(k,ne){return ce.current.useEffect(k,ne)},xt.useId=function(){return ce.current.useId()},xt.useImperativeHandle=function(k,ne,Ae){return ce.current.useImperativeHandle(k,ne,Ae)},xt.useInsertionEffect=function(k,ne){return ce.current.useInsertionEffect(k,ne)},xt.useLayoutEffect=function(k,ne){return ce.current.useLayoutEffect(k,ne)},xt.useMemo=function(k,ne){return ce.current.useMemo(k,ne)},xt.useReducer=function(k,ne,Ae){return ce.current.useReducer(k,ne,Ae)},xt.useRef=function(k){return ce.current.useRef(k)},xt.useState=function(k){return ce.current.useState(k)},xt.useSyncExternalStore=function(k,ne,Ae){return ce.current.useSyncExternalStore(k,ne,Ae)},xt.useTransition=function(){return ce.current.useTransition()},xt.version="18.3.1",xt}var Im;function Yf(){return Im||(Im=1,cd.exports=x0()),cd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function _0(){if(km)return Jo;km=1;var i=Yf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,p){var m,g={},y=null,S=null;p!==void 0&&(y=""+p),f.key!==void 0&&(y=""+f.key),f.ref!==void 0&&(S=f.ref);for(m in f)s.call(f,m)&&!l.hasOwnProperty(m)&&(g[m]=f[m]);if(d&&d.defaultProps)for(m in f=d.defaultProps,f)g[m]===void 0&&(g[m]=f[m]);return{$$typeof:e,type:d,key:y,ref:S,props:g,_owner:o.current}}return Jo.Fragment=t,Jo.jsx=u,Jo.jsxs=u,Jo}var Fm;function y0(){return Fm||(Fm=1,ld.exports=_0()),ld.exports}var E=y0(),Se=Yf();const S0=hv(Se),w0=v0({__proto__:null,default:S0},[Se]);var Ll={},ud={exports:{}},Bn={},dd={exports:{}},fd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function E0(){return Om||(Om=1,function(i){function e(I,ue){var oe=I.length;I.push(ue);e:for(;0<oe;){var k=oe-1>>>1,ne=I[k];if(0<o(ne,ue))I[k]=ue,I[oe]=ne,oe=k;else break e}}function t(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var ue=I[0],oe=I.pop();if(oe!==ue){I[0]=oe;e:for(var k=0,ne=I.length,Ae=ne>>>1;k<Ae;){var $=2*(k+1)-1,pe=I[$],be=$+1,me=I[be];if(0>o(pe,oe))be<ne&&0>o(me,pe)?(I[k]=me,I[be]=oe,k=be):(I[k]=pe,I[$]=oe,k=$);else if(be<ne&&0>o(me,oe))I[k]=me,I[be]=oe,k=be;else break e}}return ue}function o(I,ue){var oe=I.sortIndex-ue.sortIndex;return oe!==0?oe:I.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();i.unstable_now=function(){return u.now()-d}}var f=[],p=[],m=1,g=null,y=3,S=!1,w=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(I){for(var ue=t(p);ue!==null;){if(ue.callback===null)s(p);else if(ue.startTime<=I)s(p),ue.sortIndex=ue.expirationTime,e(f,ue);else break;ue=t(p)}}function R(I){if(b=!1,N(I),!w)if(t(f)!==null)w=!0,se(V);else{var ue=t(p);ue!==null&&ce(R,ue.startTime-I)}}function V(I,ue){w=!1,b&&(b=!1,_(O),O=-1),S=!0;var oe=y;try{for(N(ue),g=t(f);g!==null&&(!(g.expirationTime>ue)||I&&!G());){var k=g.callback;if(typeof k=="function"){g.callback=null,y=g.priorityLevel;var ne=k(g.expirationTime<=ue);ue=i.unstable_now(),typeof ne=="function"?g.callback=ne:g===t(f)&&s(f),N(ue)}else s(f);g=t(f)}if(g!==null)var Ae=!0;else{var $=t(p);$!==null&&ce(R,$.startTime-ue),Ae=!1}return Ae}finally{g=null,y=oe,S=!1}}var z=!1,F=null,O=-1,P=5,C=-1;function G(){return!(i.unstable_now()-C<P)}function le(){if(F!==null){var I=i.unstable_now();C=I;var ue=!0;try{ue=F(!0,I)}finally{ue?Q():(z=!1,F=null)}}else z=!1}var Q;if(typeof D=="function")Q=function(){D(le)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,he=fe.port2;fe.port1.onmessage=le,Q=function(){he.postMessage(null)}}else Q=function(){x(le,0)};function se(I){F=I,z||(z=!0,Q())}function ce(I,ue){O=x(function(){I(i.unstable_now())},ue)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(I){I.callback=null},i.unstable_continueExecution=function(){w||S||(w=!0,se(V))},i.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<I?Math.floor(1e3/I):5},i.unstable_getCurrentPriorityLevel=function(){return y},i.unstable_getFirstCallbackNode=function(){return t(f)},i.unstable_next=function(I){switch(y){case 1:case 2:case 3:var ue=3;break;default:ue=y}var oe=y;y=ue;try{return I()}finally{y=oe}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(I,ue){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var oe=y;y=I;try{return ue()}finally{y=oe}},i.unstable_scheduleCallback=function(I,ue,oe){var k=i.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?k+oe:k):oe=k,I){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=oe+ne,I={id:m++,callback:ue,priorityLevel:I,startTime:oe,expirationTime:ne,sortIndex:-1},oe>k?(I.sortIndex=oe,e(p,I),t(f)===null&&I===t(p)&&(b?(_(O),O=-1):b=!0,ce(R,oe-k))):(I.sortIndex=ne,e(f,I),w||S||(w=!0,se(V))),I},i.unstable_shouldYield=G,i.unstable_wrapCallback=function(I){var ue=y;return function(){var oe=y;y=ue;try{return I.apply(this,arguments)}finally{y=oe}}}}(fd)),fd}var Bm;function b0(){return Bm||(Bm=1,dd.exports=E0()),dd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function M0(){if(zm)return Bn;zm=1;var i=Yf(),e=b0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function y(n){return f.call(g,n)?!0:f.call(m,n)?!1:p.test(n)?g[n]=!0:(m[n]=!0,!1)}function S(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,r,a,c){if(r===null||typeof r>"u"||S(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function b(n,r,a,c,h,v,M){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=M}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];x[r]=new b(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(_,D);x[r]=new b(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(_,D);x[r]=new b(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(_,D);x[r]=new b(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function N(n,r,a,c){var h=x.hasOwnProperty(r)?x[r]:null;(h!==null?h.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(w(r,a,h,c)&&(a=null),c||h===null?y(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(r=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(r):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var R=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),z=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),G=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),I=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=I&&n[I]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,k;function ne(n){if(k===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);k=r&&r[1]||""}return`
`+k+n}var Ae=!1;function $(n,r){if(!n||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ee){var c=ee}Reflect.construct(n,[],r)}else{try{r.call()}catch(ee){c=ee}n.call(r.prototype)}else{try{throw Error()}catch(ee){c=ee}n()}}catch(ee){if(ee&&c&&typeof ee.stack=="string"){for(var h=ee.stack.split(`
`),v=c.stack.split(`
`),M=h.length-1,U=v.length-1;1<=M&&0<=U&&h[M]!==v[U];)U--;for(;1<=M&&0<=U;M--,U--)if(h[M]!==v[U]){if(M!==1||U!==1)do if(M--,U--,0>U||h[M]!==v[U]){var B=`
`+h[M].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=M&&0<=U);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ne(n):""}function pe(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=$(n.type,!1),n;case 11:return n=$(n.type.render,!1),n;case 1:return n=$(n.type,!0),n;default:return""}}function be(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case z:return"Portal";case P:return"Profiler";case O:return"StrictMode";case Q:return"Suspense";case fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case G:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case le:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return r=n.displayName||null,r!==null?r:be(n.type)||"Memo";case se:r=n._payload,n=n._init;try{return be(n(r))}catch{}}return null}function me(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(r);case 8:return r===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ce(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function qe(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Oe(n){var r=qe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,v=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return h.call(this)},set:function(M){c=""+M,v.call(this,M)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(M){c=""+M},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Nt(n){n._valueTracker||(n._valueTracker=Oe(n))}function Rt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=qe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function pt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function H(n,r){var a=r.checked;return oe({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Tn(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Ce(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function _t(n,r){r=r.checked,r!=null&&N(n,"checked",r,!1)}function gt(n,r){_t(n,r);var a=Ce(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Dt(n,r.type,a):r.hasOwnProperty("defaultValue")&&Dt(n,r.type,Ce(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ze(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Dt(n,r,a){(r!=="number"||pt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var $e=Array.isArray;function L(n,r,a,c){if(n=n.options,r){r={};for(var h=0;h<a.length;h++)r["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=r.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ce(a),r=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}r!==null||n[h].disabled||(r=n[h])}r!==null&&(r.selected=!0)}}function T(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function J(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if($e(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Ce(a)}}function ge(n,r){var a=Ce(r.value),c=Ce(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function ye(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ye(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?de(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Re,et=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,h)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Re=Re||document.createElement("div"),Re.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Re.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Qe(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(n){Be.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),we[r]=we[n]})});function rt(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||we.hasOwnProperty(n)&&we[n]?(""+r).trim():r+"px"}function st(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=rt(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var ze=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vt(n,r){if(r){if(ze[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function lt(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lt=null;function j(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Pe=null,ae=null,ve=null;function Ue(n){if(n=Fo(n)){if(typeof Pe!="function")throw Error(t(280));var r=n.stateNode;r&&(r=qa(r),Pe(n.stateNode,n.type,r))}}function De(n){ae?ve?ve.push(n):ve=[n]:ae=n}function ct(){if(ae){var n=ae,r=ve;if(ve=ae=null,Ue(n),r)for(n=0;n<r.length;n++)Ue(r[n])}}function Bt(n,r){return n(r)}function tn(){}var bt=!1;function Dn(n,r,a){if(bt)return n(r,a);bt=!0;try{return Bt(n,r,a)}finally{bt=!1,(ae!==null||ve!==null)&&(tn(),ct())}}function An(n,r){var a=n.stateNode;if(a===null)return null;var c=qa(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var ys=!1;if(d)try{var ir={};Object.defineProperty(ir,"passive",{get:function(){ys=!0}}),window.addEventListener("test",ir,ir),window.removeEventListener("test",ir,ir)}catch{ys=!1}function Ni(n,r,a,c,h,v,M,U,B){var ee=Array.prototype.slice.call(arguments,3);try{r.apply(a,ee)}catch(_e){this.onError(_e)}}var Li=!1,Or=null,Br=!1,rr=null,Ma={onError:function(n){Li=!0,Or=n}};function Ss(n,r,a,c,h,v,M,U,B){Li=!1,Or=null,Ni.apply(Ma,arguments)}function Ta(n,r,a,c,h,v,M,U,B){if(Ss.apply(this,arguments),Li){if(Li){var ee=Or;Li=!1,Or=null}else throw Error(t(198));Br||(Br=!0,rr=ee)}}function Si(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Aa(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Ca(n){if(Si(n)!==n)throw Error(t(188))}function Nc(n){var r=n.alternate;if(!r){if(r=Si(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var h=a.return;if(h===null)break;var v=h.alternate;if(v===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===v.child){for(v=h.child;v;){if(v===a)return Ca(h),n;if(v===c)return Ca(h),r;v=v.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=v;else{for(var M=!1,U=h.child;U;){if(U===a){M=!0,a=h,c=v;break}if(U===c){M=!0,c=h,a=v;break}U=U.sibling}if(!M){for(U=v.child;U;){if(U===a){M=!0,a=v,c=h;break}if(U===c){M=!0,c=v,a=h;break}U=U.sibling}if(!M)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Ra(n){return n=Nc(n),n!==null?Pa(n):null}function Pa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Pa(n);if(r!==null)return r;n=n.sibling}return null}var Na=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,X=e.unstable_shouldYield,te=e.unstable_requestPaint,K=e.unstable_now,q=e.unstable_getCurrentPriorityLevel,Me=e.unstable_ImmediatePriority,Ne=e.unstable_UserBlockingPriority,Ie=e.unstable_NormalPriority,He=e.unstable_LowPriority,ot=e.unstable_IdlePriority,it=null,je=null;function St(n){if(je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(it,n,void 0,(n.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:Et,Xt=Math.log,Vt=Math.LN2;function Et(n){return n>>>=0,n===0?32:31-(Xt(n)/Vt|0)|0}var Je=64,qt=4194304;function yt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function vn(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,v=n.pingedLanes,M=a&268435455;if(M!==0){var U=M&~h;U!==0?c=yt(U):(v&=M,v!==0&&(c=yt(v)))}else M=a&~h,M!==0?c=yt(M):v!==0&&(c=yt(v));if(c===0)return 0;if(r!==0&&r!==c&&(r&h)===0&&(h=c&-c,v=r&-r,h>=v||h===16&&(v&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-ut(r),h=1<<a,c|=n[a],r&=~h;return c}function sr(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cn(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,v=n.pendingLanes;0<v;){var M=31-ut(v),U=1<<M,B=h[M];B===-1?((U&a)===0||(U&c)!==0)&&(h[M]=sr(U,r)):B<=r&&(n.expiredLanes|=U),v&=~U}}function Di(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ft(){var n=Je;return Je<<=1,(Je&4194240)===0&&(Je=64),n}function xn(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function ln(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-ut(r),n[r]=a}function pn(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-ut(a),v=1<<h;r[h]=0,c[h]=-1,n[h]=-1,a&=~v}}function cn(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-ut(a),h=1<<c;h&r|n[c]&r&&(n[c]|=r),a&=~h}}var Mt=0;function wi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var hh,Lc,ph,mh,gh,Dc=!1,La=[],or=null,ar=null,lr=null,So=new Map,wo=new Map,cr=[],Bx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vh(n,r){switch(n){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":So.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(r.pointerId)}}function Eo(n,r,a,c,h,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:v,targetContainers:[h]},r!==null&&(r=Fo(r),r!==null&&Lc(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),n)}function zx(n,r,a,c,h){switch(r){case"focusin":return or=Eo(or,n,r,a,c,h),!0;case"dragenter":return ar=Eo(ar,n,r,a,c,h),!0;case"mouseover":return lr=Eo(lr,n,r,a,c,h),!0;case"pointerover":var v=h.pointerId;return So.set(v,Eo(So.get(v)||null,n,r,a,c,h)),!0;case"gotpointercapture":return v=h.pointerId,wo.set(v,Eo(wo.get(v)||null,n,r,a,c,h)),!0}return!1}function xh(n){var r=zr(n.target);if(r!==null){var a=Si(r);if(a!==null){if(r=a.tag,r===13){if(r=Aa(a),r!==null){n.blockedOn=r,gh(n.priority,function(){ph(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Da(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Ic(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Lt=c,a.target.dispatchEvent(c),Lt=null}else return r=Fo(a),r!==null&&Lc(r),n.blockedOn=a,!1;r.shift()}return!0}function _h(n,r,a){Da(n)&&a.delete(r)}function Hx(){Dc=!1,or!==null&&Da(or)&&(or=null),ar!==null&&Da(ar)&&(ar=null),lr!==null&&Da(lr)&&(lr=null),So.forEach(_h),wo.forEach(_h)}function bo(n,r){n.blockedOn===r&&(n.blockedOn=null,Dc||(Dc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Hx)))}function Mo(n){function r(h){return bo(h,n)}if(0<La.length){bo(La[0],n);for(var a=1;a<La.length;a++){var c=La[a];c.blockedOn===n&&(c.blockedOn=null)}}for(or!==null&&bo(or,n),ar!==null&&bo(ar,n),lr!==null&&bo(lr,n),So.forEach(r),wo.forEach(r),a=0;a<cr.length;a++)c=cr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<cr.length&&(a=cr[0],a.blockedOn===null);)xh(a),a.blockedOn===null&&cr.shift()}var ws=R.ReactCurrentBatchConfig,Ua=!0;function Vx(n,r,a,c){var h=Mt,v=ws.transition;ws.transition=null;try{Mt=1,Uc(n,r,a,c)}finally{Mt=h,ws.transition=v}}function Gx(n,r,a,c){var h=Mt,v=ws.transition;ws.transition=null;try{Mt=4,Uc(n,r,a,c)}finally{Mt=h,ws.transition=v}}function Uc(n,r,a,c){if(Ua){var h=Ic(n,r,a,c);if(h===null)Jc(n,r,c,Ia,a),vh(n,c);else if(zx(h,n,r,a,c))c.stopPropagation();else if(vh(n,c),r&4&&-1<Bx.indexOf(n)){for(;h!==null;){var v=Fo(h);if(v!==null&&hh(v),v=Ic(n,r,a,c),v===null&&Jc(n,r,c,Ia,a),v===h)break;h=v}h!==null&&c.stopPropagation()}else Jc(n,r,c,null,a)}}var Ia=null;function Ic(n,r,a,c){if(Ia=null,n=j(c),n=zr(n),n!==null)if(r=Si(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Aa(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Ia=n,null}function yh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q()){case Me:return 1;case Ne:return 4;case Ie:case He:return 16;case ot:return 536870912;default:return 16}default:return 16}}var ur=null,kc=null,ka=null;function Sh(){if(ka)return ka;var n,r=kc,a=r.length,c,h="value"in ur?ur.value:ur.textContent,v=h.length;for(n=0;n<a&&r[n]===h[n];n++);var M=a-n;for(c=1;c<=M&&r[a-c]===h[v-c];c++);return ka=h.slice(n,1<c?1-c:void 0)}function Fa(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Oa(){return!0}function wh(){return!1}function Wn(n){function r(a,c,h,v,M){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=v,this.target=M,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(a=n[U],this[U]=a?a(v):v[U]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Oa:wh,this.isPropagationStopped=wh,this}return oe(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Oa)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Oa)},persist:function(){},isPersistent:Oa}),r}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fc=Wn(Es),To=oe({},Es,{view:0,detail:0}),Wx=Wn(To),Oc,Bc,Ao,Ba=oe({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ao&&(Ao&&n.type==="mousemove"?(Oc=n.screenX-Ao.screenX,Bc=n.screenY-Ao.screenY):Bc=Oc=0,Ao=n),Oc)},movementY:function(n){return"movementY"in n?n.movementY:Bc}}),Eh=Wn(Ba),jx=oe({},Ba,{dataTransfer:0}),Xx=Wn(jx),qx=oe({},To,{relatedTarget:0}),zc=Wn(qx),Yx=oe({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),$x=Wn(Yx),Kx=oe({},Es,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Zx=Wn(Kx),Jx=oe({},Es,{data:0}),bh=Wn(Jx),Qx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function n_(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=t_[n])?!!r[n]:!1}function Hc(){return n_}var i_=oe({},To,{key:function(n){if(n.key){var r=Qx[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Fa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?e_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hc,charCode:function(n){return n.type==="keypress"?Fa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Fa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),r_=Wn(i_),s_=oe({},Ba,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mh=Wn(s_),o_=oe({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hc}),a_=Wn(o_),l_=oe({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),c_=Wn(l_),u_=oe({},Ba,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),d_=Wn(u_),f_=[9,13,27,32],Vc=d&&"CompositionEvent"in window,Co=null;d&&"documentMode"in document&&(Co=document.documentMode);var h_=d&&"TextEvent"in window&&!Co,Th=d&&(!Vc||Co&&8<Co&&11>=Co),Ah=" ",Ch=!1;function Rh(n,r){switch(n){case"keyup":return f_.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ph(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var bs=!1;function p_(n,r){switch(n){case"compositionend":return Ph(r);case"keypress":return r.which!==32?null:(Ch=!0,Ah);case"textInput":return n=r.data,n===Ah&&Ch?null:n;default:return null}}function m_(n,r){if(bs)return n==="compositionend"||!Vc&&Rh(n,r)?(n=Sh(),ka=kc=ur=null,bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Th&&r.locale!=="ko"?null:r.data;default:return null}}var g_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!g_[n.type]:r==="textarea"}function Lh(n,r,a,c){De(c),r=Wa(r,"onChange"),0<r.length&&(a=new Fc("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var Ro=null,Po=null;function v_(n){Kh(n,0)}function za(n){var r=Rs(n);if(Rt(r))return n}function x_(n,r){if(n==="change")return r}var Dh=!1;if(d){var Gc;if(d){var Wc="oninput"in document;if(!Wc){var Uh=document.createElement("div");Uh.setAttribute("oninput","return;"),Wc=typeof Uh.oninput=="function"}Gc=Wc}else Gc=!1;Dh=Gc&&(!document.documentMode||9<document.documentMode)}function Ih(){Ro&&(Ro.detachEvent("onpropertychange",kh),Po=Ro=null)}function kh(n){if(n.propertyName==="value"&&za(Po)){var r=[];Lh(r,Po,n,j(n)),Dn(v_,r)}}function __(n,r,a){n==="focusin"?(Ih(),Ro=r,Po=a,Ro.attachEvent("onpropertychange",kh)):n==="focusout"&&Ih()}function y_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return za(Po)}function S_(n,r){if(n==="click")return za(r)}function w_(n,r){if(n==="input"||n==="change")return za(r)}function E_(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var si=typeof Object.is=="function"?Object.is:E_;function No(n,r){if(si(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!f.call(r,h)||!si(n[h],r[h]))return!1}return!0}function Fh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Oh(n,r){var a=Fh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Fh(a)}}function Bh(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Bh(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function zh(){for(var n=window,r=pt();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=pt(n.document)}return r}function jc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function b_(n){var r=zh(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Bh(a.ownerDocument.documentElement,a)){if(c!==null&&jc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,v=Math.min(c.start,h);c=c.end===void 0?v:Math.min(c.end,h),!n.extend&&v>c&&(h=c,c=v,v=h),h=Oh(a,v);var M=Oh(a,c);h&&M&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(r=r.createRange(),r.setStart(h.node,h.offset),n.removeAllRanges(),v>c?(n.addRange(r),n.extend(M.node,M.offset)):(r.setEnd(M.node,M.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var M_=d&&"documentMode"in document&&11>=document.documentMode,Ms=null,Xc=null,Lo=null,qc=!1;function Hh(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qc||Ms==null||Ms!==pt(c)||(c=Ms,"selectionStart"in c&&jc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Lo&&No(Lo,c)||(Lo=c,c=Wa(Xc,"onSelect"),0<c.length&&(r=new Fc("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Ms)))}function Ha(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Ts={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionend:Ha("Transition","TransitionEnd")},Yc={},Vh={};d&&(Vh=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function Va(n){if(Yc[n])return Yc[n];if(!Ts[n])return n;var r=Ts[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Vh)return Yc[n]=r[a];return n}var Gh=Va("animationend"),Wh=Va("animationiteration"),jh=Va("animationstart"),Xh=Va("transitionend"),qh=new Map,Yh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(n,r){qh.set(n,r),l(r,[n])}for(var $c=0;$c<Yh.length;$c++){var Kc=Yh[$c],T_=Kc.toLowerCase(),A_=Kc[0].toUpperCase()+Kc.slice(1);dr(T_,"on"+A_)}dr(Gh,"onAnimationEnd"),dr(Wh,"onAnimationIteration"),dr(jh,"onAnimationStart"),dr("dblclick","onDoubleClick"),dr("focusin","onFocus"),dr("focusout","onBlur"),dr(Xh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));function $h(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,Ta(c,r,void 0,n),n.currentTarget=null}function Kh(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var v=void 0;if(r)for(var M=c.length-1;0<=M;M--){var U=c[M],B=U.instance,ee=U.currentTarget;if(U=U.listener,B!==v&&h.isPropagationStopped())break e;$h(h,U,ee),v=B}else for(M=0;M<c.length;M++){if(U=c[M],B=U.instance,ee=U.currentTarget,U=U.listener,B!==v&&h.isPropagationStopped())break e;$h(h,U,ee),v=B}}}if(Br)throw n=rr,Br=!1,rr=null,n}function zt(n,r){var a=r[ru];a===void 0&&(a=r[ru]=new Set);var c=n+"__bubble";a.has(c)||(Zh(r,n,2,!1),a.add(c))}function Zc(n,r,a){var c=0;r&&(c|=4),Zh(a,n,c,r)}var Ga="_reactListening"+Math.random().toString(36).slice(2);function Uo(n){if(!n[Ga]){n[Ga]=!0,s.forEach(function(a){a!=="selectionchange"&&(C_.has(a)||Zc(a,!1,n),Zc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Ga]||(r[Ga]=!0,Zc("selectionchange",!1,r))}}function Zh(n,r,a,c){switch(yh(r)){case 1:var h=Vx;break;case 4:h=Gx;break;default:h=Uc}a=h.bind(null,r,a,n),h=void 0,!ys||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(r,a,{capture:!0,passive:h}):n.addEventListener(r,a,!0):h!==void 0?n.addEventListener(r,a,{passive:h}):n.addEventListener(r,a,!1)}function Jc(n,r,a,c,h){var v=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var M=c.tag;if(M===3||M===4){var U=c.stateNode.containerInfo;if(U===h||U.nodeType===8&&U.parentNode===h)break;if(M===4)for(M=c.return;M!==null;){var B=M.tag;if((B===3||B===4)&&(B=M.stateNode.containerInfo,B===h||B.nodeType===8&&B.parentNode===h))return;M=M.return}for(;U!==null;){if(M=zr(U),M===null)return;if(B=M.tag,B===5||B===6){c=v=M;continue e}U=U.parentNode}}c=c.return}Dn(function(){var ee=v,_e=j(a),Ee=[];e:{var xe=qh.get(n);if(xe!==void 0){var ke=Fc,Ve=n;switch(n){case"keypress":if(Fa(a)===0)break e;case"keydown":case"keyup":ke=r_;break;case"focusin":Ve="focus",ke=zc;break;case"focusout":Ve="blur",ke=zc;break;case"beforeblur":case"afterblur":ke=zc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=Eh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=Xx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=a_;break;case Gh:case Wh:case jh:ke=$x;break;case Xh:ke=c_;break;case"scroll":ke=Wx;break;case"wheel":ke=d_;break;case"copy":case"cut":case"paste":ke=Zx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=Mh}var Xe=(r&4)!==0,$t=!Xe&&n==="scroll",Y=Xe?xe!==null?xe+"Capture":null:xe;Xe=[];for(var W=ee,Z;W!==null;){Z=W;var Te=Z.stateNode;if(Z.tag===5&&Te!==null&&(Z=Te,Y!==null&&(Te=An(W,Y),Te!=null&&Xe.push(Io(W,Te,Z)))),$t)break;W=W.return}0<Xe.length&&(xe=new ke(xe,Ve,null,a,_e),Ee.push({event:xe,listeners:Xe}))}}if((r&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",ke=n==="mouseout"||n==="pointerout",xe&&a!==Lt&&(Ve=a.relatedTarget||a.fromElement)&&(zr(Ve)||Ve[Ui]))break e;if((ke||xe)&&(xe=_e.window===_e?_e:(xe=_e.ownerDocument)?xe.defaultView||xe.parentWindow:window,ke?(Ve=a.relatedTarget||a.toElement,ke=ee,Ve=Ve?zr(Ve):null,Ve!==null&&($t=Si(Ve),Ve!==$t||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(ke=null,Ve=ee),ke!==Ve)){if(Xe=Eh,Te="onMouseLeave",Y="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Xe=Mh,Te="onPointerLeave",Y="onPointerEnter",W="pointer"),$t=ke==null?xe:Rs(ke),Z=Ve==null?xe:Rs(Ve),xe=new Xe(Te,W+"leave",ke,a,_e),xe.target=$t,xe.relatedTarget=Z,Te=null,zr(_e)===ee&&(Xe=new Xe(Y,W+"enter",Ve,a,_e),Xe.target=Z,Xe.relatedTarget=$t,Te=Xe),$t=Te,ke&&Ve)t:{for(Xe=ke,Y=Ve,W=0,Z=Xe;Z;Z=As(Z))W++;for(Z=0,Te=Y;Te;Te=As(Te))Z++;for(;0<W-Z;)Xe=As(Xe),W--;for(;0<Z-W;)Y=As(Y),Z--;for(;W--;){if(Xe===Y||Y!==null&&Xe===Y.alternate)break t;Xe=As(Xe),Y=As(Y)}Xe=null}else Xe=null;ke!==null&&Jh(Ee,xe,ke,Xe,!1),Ve!==null&&$t!==null&&Jh(Ee,$t,Ve,Xe,!0)}}e:{if(xe=ee?Rs(ee):window,ke=xe.nodeName&&xe.nodeName.toLowerCase(),ke==="select"||ke==="input"&&xe.type==="file")var Ke=x_;else if(Nh(xe))if(Dh)Ke=w_;else{Ke=y_;var tt=__}else(ke=xe.nodeName)&&ke.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(Ke=S_);if(Ke&&(Ke=Ke(n,ee))){Lh(Ee,Ke,a,_e);break e}tt&&tt(n,xe,ee),n==="focusout"&&(tt=xe._wrapperState)&&tt.controlled&&xe.type==="number"&&Dt(xe,"number",xe.value)}switch(tt=ee?Rs(ee):window,n){case"focusin":(Nh(tt)||tt.contentEditable==="true")&&(Ms=tt,Xc=ee,Lo=null);break;case"focusout":Lo=Xc=Ms=null;break;case"mousedown":qc=!0;break;case"contextmenu":case"mouseup":case"dragend":qc=!1,Hh(Ee,a,_e);break;case"selectionchange":if(M_)break;case"keydown":case"keyup":Hh(Ee,a,_e)}var nt;if(Vc)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else bs?Rh(n,a)&&(at="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(Th&&a.locale!=="ko"&&(bs||at!=="onCompositionStart"?at==="onCompositionEnd"&&bs&&(nt=Sh()):(ur=_e,kc="value"in ur?ur.value:ur.textContent,bs=!0)),tt=Wa(ee,at),0<tt.length&&(at=new bh(at,n,null,a,_e),Ee.push({event:at,listeners:tt}),nt?at.data=nt:(nt=Ph(a),nt!==null&&(at.data=nt)))),(nt=h_?p_(n,a):m_(n,a))&&(ee=Wa(ee,"onBeforeInput"),0<ee.length&&(_e=new bh("onBeforeInput","beforeinput",null,a,_e),Ee.push({event:_e,listeners:ee}),_e.data=nt))}Kh(Ee,r)})}function Io(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Wa(n,r){for(var a=r+"Capture",c=[];n!==null;){var h=n,v=h.stateNode;h.tag===5&&v!==null&&(h=v,v=An(n,a),v!=null&&c.unshift(Io(n,v,h)),v=An(n,r),v!=null&&c.push(Io(n,v,h))),n=n.return}return c}function As(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Jh(n,r,a,c,h){for(var v=r._reactName,M=[];a!==null&&a!==c;){var U=a,B=U.alternate,ee=U.stateNode;if(B!==null&&B===c)break;U.tag===5&&ee!==null&&(U=ee,h?(B=An(a,v),B!=null&&M.unshift(Io(a,B,U))):h||(B=An(a,v),B!=null&&M.push(Io(a,B,U)))),a=a.return}M.length!==0&&n.push({event:r,listeners:M})}var R_=/\r\n?/g,P_=/\u0000|\uFFFD/g;function Qh(n){return(typeof n=="string"?n:""+n).replace(R_,`
`).replace(P_,"")}function ja(n,r,a){if(r=Qh(r),Qh(n)!==r&&a)throw Error(t(425))}function Xa(){}var Qc=null,eu=null;function tu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var nu=typeof setTimeout=="function"?setTimeout:void 0,N_=typeof clearTimeout=="function"?clearTimeout:void 0,ep=typeof Promise=="function"?Promise:void 0,L_=typeof queueMicrotask=="function"?queueMicrotask:typeof ep<"u"?function(n){return ep.resolve(null).then(n).catch(D_)}:nu;function D_(n){setTimeout(function(){throw n})}function iu(n,r){var a=r,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),Mo(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);Mo(r)}function fr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function tp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),Ei="__reactFiber$"+Cs,ko="__reactProps$"+Cs,Ui="__reactContainer$"+Cs,ru="__reactEvents$"+Cs,U_="__reactListeners$"+Cs,I_="__reactHandles$"+Cs;function zr(n){var r=n[Ei];if(r)return r;for(var a=n.parentNode;a;){if(r=a[Ui]||a[Ei]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=tp(n);n!==null;){if(a=n[Ei])return a;n=tp(n)}return r}n=a,a=n.parentNode}return null}function Fo(n){return n=n[Ei]||n[Ui],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Rs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function qa(n){return n[ko]||null}var su=[],Ps=-1;function hr(n){return{current:n}}function Ht(n){0>Ps||(n.current=su[Ps],su[Ps]=null,Ps--)}function Ot(n,r){Ps++,su[Ps]=n.current,n.current=r}var pr={},_n=hr(pr),Un=hr(!1),Hr=pr;function Ns(n,r){var a=n.type.contextTypes;if(!a)return pr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var h={},v;for(v in a)h[v]=r[v];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=h),h}function In(n){return n=n.childContextTypes,n!=null}function Ya(){Ht(Un),Ht(_n)}function np(n,r,a){if(_n.current!==pr)throw Error(t(168));Ot(_n,r),Ot(Un,a)}function ip(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in r))throw Error(t(108,me(n)||"Unknown",h));return oe({},a,c)}function $a(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||pr,Hr=_n.current,Ot(_n,n),Ot(Un,Un.current),!0}function rp(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=ip(n,r,Hr),c.__reactInternalMemoizedMergedChildContext=n,Ht(Un),Ht(_n),Ot(_n,n)):Ht(Un),Ot(Un,a)}var Ii=null,Ka=!1,ou=!1;function sp(n){Ii===null?Ii=[n]:Ii.push(n)}function k_(n){Ka=!0,sp(n)}function mr(){if(!ou&&Ii!==null){ou=!0;var n=0,r=Mt;try{var a=Ii;for(Mt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ii=null,Ka=!1}catch(h){throw Ii!==null&&(Ii=Ii.slice(n+1)),Na(Me,mr),h}finally{Mt=r,ou=!1}}return null}var Ls=[],Ds=0,Za=null,Ja=0,Zn=[],Jn=0,Vr=null,ki=1,Fi="";function Gr(n,r){Ls[Ds++]=Ja,Ls[Ds++]=Za,Za=n,Ja=r}function op(n,r,a){Zn[Jn++]=ki,Zn[Jn++]=Fi,Zn[Jn++]=Vr,Vr=n;var c=ki;n=Fi;var h=32-ut(c)-1;c&=~(1<<h),a+=1;var v=32-ut(r)+h;if(30<v){var M=h-h%5;v=(c&(1<<M)-1).toString(32),c>>=M,h-=M,ki=1<<32-ut(r)+h|a<<h|c,Fi=v+n}else ki=1<<v|a<<h|c,Fi=n}function au(n){n.return!==null&&(Gr(n,1),op(n,1,0))}function lu(n){for(;n===Za;)Za=Ls[--Ds],Ls[Ds]=null,Ja=Ls[--Ds],Ls[Ds]=null;for(;n===Vr;)Vr=Zn[--Jn],Zn[Jn]=null,Fi=Zn[--Jn],Zn[Jn]=null,ki=Zn[--Jn],Zn[Jn]=null}var jn=null,Xn=null,Gt=!1,oi=null;function ap(n,r){var a=ni(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function lp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,jn=n,Xn=fr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,jn=n,Xn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Vr!==null?{id:ki,overflow:Fi}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=ni(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,jn=n,Xn=null,!0):!1;default:return!1}}function cu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function uu(n){if(Gt){var r=Xn;if(r){var a=r;if(!lp(n,r)){if(cu(n))throw Error(t(418));r=fr(a.nextSibling);var c=jn;r&&lp(n,r)?ap(c,a):(n.flags=n.flags&-4097|2,Gt=!1,jn=n)}}else{if(cu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Gt=!1,jn=n}}}function cp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;jn=n}function Qa(n){if(n!==jn)return!1;if(!Gt)return cp(n),Gt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!tu(n.type,n.memoizedProps)),r&&(r=Xn)){if(cu(n))throw up(),Error(t(418));for(;r;)ap(n,r),r=fr(r.nextSibling)}if(cp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){Xn=fr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}Xn=null}}else Xn=jn?fr(n.stateNode.nextSibling):null;return!0}function up(){for(var n=Xn;n;)n=fr(n.nextSibling)}function Us(){Xn=jn=null,Gt=!1}function du(n){oi===null?oi=[n]:oi.push(n)}var F_=R.ReactCurrentBatchConfig;function Oo(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(M){var U=h.refs;M===null?delete U[v]:U[v]=M},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function el(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function dp(n){var r=n._init;return r(n._payload)}function fp(n){function r(Y,W){if(n){var Z=Y.deletions;Z===null?(Y.deletions=[W],Y.flags|=16):Z.push(W)}}function a(Y,W){if(!n)return null;for(;W!==null;)r(Y,W),W=W.sibling;return null}function c(Y,W){for(Y=new Map;W!==null;)W.key!==null?Y.set(W.key,W):Y.set(W.index,W),W=W.sibling;return Y}function h(Y,W){return Y=Er(Y,W),Y.index=0,Y.sibling=null,Y}function v(Y,W,Z){return Y.index=Z,n?(Z=Y.alternate,Z!==null?(Z=Z.index,Z<W?(Y.flags|=2,W):Z):(Y.flags|=2,W)):(Y.flags|=1048576,W)}function M(Y){return n&&Y.alternate===null&&(Y.flags|=2),Y}function U(Y,W,Z,Te){return W===null||W.tag!==6?(W=nd(Z,Y.mode,Te),W.return=Y,W):(W=h(W,Z),W.return=Y,W)}function B(Y,W,Z,Te){var Ke=Z.type;return Ke===F?_e(Y,W,Z.props.children,Te,Z.key):W!==null&&(W.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===se&&dp(Ke)===W.type)?(Te=h(W,Z.props),Te.ref=Oo(Y,W,Z),Te.return=Y,Te):(Te=bl(Z.type,Z.key,Z.props,null,Y.mode,Te),Te.ref=Oo(Y,W,Z),Te.return=Y,Te)}function ee(Y,W,Z,Te){return W===null||W.tag!==4||W.stateNode.containerInfo!==Z.containerInfo||W.stateNode.implementation!==Z.implementation?(W=id(Z,Y.mode,Te),W.return=Y,W):(W=h(W,Z.children||[]),W.return=Y,W)}function _e(Y,W,Z,Te,Ke){return W===null||W.tag!==7?(W=Zr(Z,Y.mode,Te,Ke),W.return=Y,W):(W=h(W,Z),W.return=Y,W)}function Ee(Y,W,Z){if(typeof W=="string"&&W!==""||typeof W=="number")return W=nd(""+W,Y.mode,Z),W.return=Y,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case V:return Z=bl(W.type,W.key,W.props,null,Y.mode,Z),Z.ref=Oo(Y,null,W),Z.return=Y,Z;case z:return W=id(W,Y.mode,Z),W.return=Y,W;case se:var Te=W._init;return Ee(Y,Te(W._payload),Z)}if($e(W)||ue(W))return W=Zr(W,Y.mode,Z,null),W.return=Y,W;el(Y,W)}return null}function xe(Y,W,Z,Te){var Ke=W!==null?W.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Ke!==null?null:U(Y,W,""+Z,Te);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case V:return Z.key===Ke?B(Y,W,Z,Te):null;case z:return Z.key===Ke?ee(Y,W,Z,Te):null;case se:return Ke=Z._init,xe(Y,W,Ke(Z._payload),Te)}if($e(Z)||ue(Z))return Ke!==null?null:_e(Y,W,Z,Te,null);el(Y,Z)}return null}function ke(Y,W,Z,Te,Ke){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Y=Y.get(Z)||null,U(W,Y,""+Te,Ke);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case V:return Y=Y.get(Te.key===null?Z:Te.key)||null,B(W,Y,Te,Ke);case z:return Y=Y.get(Te.key===null?Z:Te.key)||null,ee(W,Y,Te,Ke);case se:var tt=Te._init;return ke(Y,W,Z,tt(Te._payload),Ke)}if($e(Te)||ue(Te))return Y=Y.get(Z)||null,_e(W,Y,Te,Ke,null);el(W,Te)}return null}function Ve(Y,W,Z,Te){for(var Ke=null,tt=null,nt=W,at=W=0,fn=null;nt!==null&&at<Z.length;at++){nt.index>at?(fn=nt,nt=null):fn=nt.sibling;var At=xe(Y,nt,Z[at],Te);if(At===null){nt===null&&(nt=fn);break}n&&nt&&At.alternate===null&&r(Y,nt),W=v(At,W,at),tt===null?Ke=At:tt.sibling=At,tt=At,nt=fn}if(at===Z.length)return a(Y,nt),Gt&&Gr(Y,at),Ke;if(nt===null){for(;at<Z.length;at++)nt=Ee(Y,Z[at],Te),nt!==null&&(W=v(nt,W,at),tt===null?Ke=nt:tt.sibling=nt,tt=nt);return Gt&&Gr(Y,at),Ke}for(nt=c(Y,nt);at<Z.length;at++)fn=ke(nt,Y,at,Z[at],Te),fn!==null&&(n&&fn.alternate!==null&&nt.delete(fn.key===null?at:fn.key),W=v(fn,W,at),tt===null?Ke=fn:tt.sibling=fn,tt=fn);return n&&nt.forEach(function(br){return r(Y,br)}),Gt&&Gr(Y,at),Ke}function Xe(Y,W,Z,Te){var Ke=ue(Z);if(typeof Ke!="function")throw Error(t(150));if(Z=Ke.call(Z),Z==null)throw Error(t(151));for(var tt=Ke=null,nt=W,at=W=0,fn=null,At=Z.next();nt!==null&&!At.done;at++,At=Z.next()){nt.index>at?(fn=nt,nt=null):fn=nt.sibling;var br=xe(Y,nt,At.value,Te);if(br===null){nt===null&&(nt=fn);break}n&&nt&&br.alternate===null&&r(Y,nt),W=v(br,W,at),tt===null?Ke=br:tt.sibling=br,tt=br,nt=fn}if(At.done)return a(Y,nt),Gt&&Gr(Y,at),Ke;if(nt===null){for(;!At.done;at++,At=Z.next())At=Ee(Y,At.value,Te),At!==null&&(W=v(At,W,at),tt===null?Ke=At:tt.sibling=At,tt=At);return Gt&&Gr(Y,at),Ke}for(nt=c(Y,nt);!At.done;at++,At=Z.next())At=ke(nt,Y,at,At.value,Te),At!==null&&(n&&At.alternate!==null&&nt.delete(At.key===null?at:At.key),W=v(At,W,at),tt===null?Ke=At:tt.sibling=At,tt=At);return n&&nt.forEach(function(g0){return r(Y,g0)}),Gt&&Gr(Y,at),Ke}function $t(Y,W,Z,Te){if(typeof Z=="object"&&Z!==null&&Z.type===F&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case V:e:{for(var Ke=Z.key,tt=W;tt!==null;){if(tt.key===Ke){if(Ke=Z.type,Ke===F){if(tt.tag===7){a(Y,tt.sibling),W=h(tt,Z.props.children),W.return=Y,Y=W;break e}}else if(tt.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===se&&dp(Ke)===tt.type){a(Y,tt.sibling),W=h(tt,Z.props),W.ref=Oo(Y,tt,Z),W.return=Y,Y=W;break e}a(Y,tt);break}else r(Y,tt);tt=tt.sibling}Z.type===F?(W=Zr(Z.props.children,Y.mode,Te,Z.key),W.return=Y,Y=W):(Te=bl(Z.type,Z.key,Z.props,null,Y.mode,Te),Te.ref=Oo(Y,W,Z),Te.return=Y,Y=Te)}return M(Y);case z:e:{for(tt=Z.key;W!==null;){if(W.key===tt)if(W.tag===4&&W.stateNode.containerInfo===Z.containerInfo&&W.stateNode.implementation===Z.implementation){a(Y,W.sibling),W=h(W,Z.children||[]),W.return=Y,Y=W;break e}else{a(Y,W);break}else r(Y,W);W=W.sibling}W=id(Z,Y.mode,Te),W.return=Y,Y=W}return M(Y);case se:return tt=Z._init,$t(Y,W,tt(Z._payload),Te)}if($e(Z))return Ve(Y,W,Z,Te);if(ue(Z))return Xe(Y,W,Z,Te);el(Y,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,W!==null&&W.tag===6?(a(Y,W.sibling),W=h(W,Z),W.return=Y,Y=W):(a(Y,W),W=nd(Z,Y.mode,Te),W.return=Y,Y=W),M(Y)):a(Y,W)}return $t}var Is=fp(!0),hp=fp(!1),tl=hr(null),nl=null,ks=null,fu=null;function hu(){fu=ks=nl=null}function pu(n){var r=tl.current;Ht(tl),n._currentValue=r}function mu(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Fs(n,r){nl=n,fu=ks=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(kn=!0),n.firstContext=null)}function Qn(n){var r=n._currentValue;if(fu!==n)if(n={context:n,memoizedValue:r,next:null},ks===null){if(nl===null)throw Error(t(308));ks=n,nl.dependencies={lanes:0,firstContext:n}}else ks=ks.next=n;return r}var Wr=null;function gu(n){Wr===null?Wr=[n]:Wr.push(n)}function pp(n,r,a,c){var h=r.interleaved;return h===null?(a.next=a,gu(r)):(a.next=h.next,h.next=a),r.interleaved=a,Oi(n,c)}function Oi(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var gr=!1;function vu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Bi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function vr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Tt&2)!==0){var h=c.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),c.pending=r,Oi(n,a)}return h=c.interleaved,h===null?(r.next=r,gu(c)):(r.next=h.next,h.next=r),c.interleaved=r,Oi(n,a)}function il(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,cn(n,a)}}function gp(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var M={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};v===null?h=v=M:v=v.next=M,a=a.next}while(a!==null);v===null?h=v=r:v=v.next=r}else h=v=r;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:v,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function rl(n,r,a,c){var h=n.updateQueue;gr=!1;var v=h.firstBaseUpdate,M=h.lastBaseUpdate,U=h.shared.pending;if(U!==null){h.shared.pending=null;var B=U,ee=B.next;B.next=null,M===null?v=ee:M.next=ee,M=B;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,U=_e.lastBaseUpdate,U!==M&&(U===null?_e.firstBaseUpdate=ee:U.next=ee,_e.lastBaseUpdate=B))}if(v!==null){var Ee=h.baseState;M=0,_e=ee=B=null,U=v;do{var xe=U.lane,ke=U.eventTime;if((c&xe)===xe){_e!==null&&(_e=_e.next={eventTime:ke,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Ve=n,Xe=U;switch(xe=r,ke=a,Xe.tag){case 1:if(Ve=Xe.payload,typeof Ve=="function"){Ee=Ve.call(ke,Ee,xe);break e}Ee=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=Xe.payload,xe=typeof Ve=="function"?Ve.call(ke,Ee,xe):Ve,xe==null)break e;Ee=oe({},Ee,xe);break e;case 2:gr=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,xe=h.effects,xe===null?h.effects=[U]:xe.push(U))}else ke={eventTime:ke,lane:xe,tag:U.tag,payload:U.payload,callback:U.callback,next:null},_e===null?(ee=_e=ke,B=Ee):_e=_e.next=ke,M|=xe;if(U=U.next,U===null){if(U=h.shared.pending,U===null)break;xe=U,U=xe.next,xe.next=null,h.lastBaseUpdate=xe,h.shared.pending=null}}while(!0);if(_e===null&&(B=Ee),h.baseState=B,h.firstBaseUpdate=ee,h.lastBaseUpdate=_e,r=h.shared.interleaved,r!==null){h=r;do M|=h.lane,h=h.next;while(h!==r)}else v===null&&(h.shared.lanes=0);qr|=M,n.lanes=M,n.memoizedState=Ee}}function vp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var Bo={},bi=hr(Bo),zo=hr(Bo),Ho=hr(Bo);function jr(n){if(n===Bo)throw Error(t(174));return n}function xu(n,r){switch(Ot(Ho,r),Ot(zo,n),Ot(bi,Bo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ye(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Ye(r,n)}Ht(bi),Ot(bi,r)}function Os(){Ht(bi),Ht(zo),Ht(Ho)}function xp(n){jr(Ho.current);var r=jr(bi.current),a=Ye(r,n.type);r!==a&&(Ot(zo,n),Ot(bi,a))}function _u(n){zo.current===n&&(Ht(bi),Ht(zo))}var Wt=hr(0);function sl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var yu=[];function Su(){for(var n=0;n<yu.length;n++)yu[n]._workInProgressVersionPrimary=null;yu.length=0}var ol=R.ReactCurrentDispatcher,wu=R.ReactCurrentBatchConfig,Xr=0,jt=null,nn=null,un=null,al=!1,Vo=!1,Go=0,O_=0;function yn(){throw Error(t(321))}function Eu(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!si(n[a],r[a]))return!1;return!0}function bu(n,r,a,c,h,v){if(Xr=v,jt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ol.current=n===null||n.memoizedState===null?V_:G_,n=a(c,h),Vo){v=0;do{if(Vo=!1,Go=0,25<=v)throw Error(t(301));v+=1,un=nn=null,r.updateQueue=null,ol.current=W_,n=a(c,h)}while(Vo)}if(ol.current=ul,r=nn!==null&&nn.next!==null,Xr=0,un=nn=jt=null,al=!1,r)throw Error(t(300));return n}function Mu(){var n=Go!==0;return Go=0,n}function Mi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?jt.memoizedState=un=n:un=un.next=n,un}function ei(){if(nn===null){var n=jt.alternate;n=n!==null?n.memoizedState:null}else n=nn.next;var r=un===null?jt.memoizedState:un.next;if(r!==null)un=r,nn=n;else{if(n===null)throw Error(t(310));nn=n,n={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},un===null?jt.memoizedState=un=n:un=un.next=n}return un}function Wo(n,r){return typeof r=="function"?r(n):r}function Tu(n){var r=ei(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=nn,h=c.baseQueue,v=a.pending;if(v!==null){if(h!==null){var M=h.next;h.next=v.next,v.next=M}c.baseQueue=h=v,a.pending=null}if(h!==null){v=h.next,c=c.baseState;var U=M=null,B=null,ee=v;do{var _e=ee.lane;if((Xr&_e)===_e)B!==null&&(B=B.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),c=ee.hasEagerState?ee.eagerState:n(c,ee.action);else{var Ee={lane:_e,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};B===null?(U=B=Ee,M=c):B=B.next=Ee,jt.lanes|=_e,qr|=_e}ee=ee.next}while(ee!==null&&ee!==v);B===null?M=c:B.next=U,si(c,r.memoizedState)||(kn=!0),r.memoizedState=c,r.baseState=M,r.baseQueue=B,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do v=h.lane,jt.lanes|=v,qr|=v,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Au(n){var r=ei(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,v=r.memoizedState;if(h!==null){a.pending=null;var M=h=h.next;do v=n(v,M.action),M=M.next;while(M!==h);si(v,r.memoizedState)||(kn=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),a.lastRenderedState=v}return[v,c]}function _p(){}function yp(n,r){var a=jt,c=ei(),h=r(),v=!si(c.memoizedState,h);if(v&&(c.memoizedState=h,kn=!0),c=c.queue,Cu(Ep.bind(null,a,c,n),[n]),c.getSnapshot!==r||v||un!==null&&un.memoizedState.tag&1){if(a.flags|=2048,jo(9,wp.bind(null,a,c,h,r),void 0,null),dn===null)throw Error(t(349));(Xr&30)!==0||Sp(a,r,h)}return h}function Sp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=jt.updateQueue,r===null?(r={lastEffect:null,stores:null},jt.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function wp(n,r,a,c){r.value=a,r.getSnapshot=c,bp(r)&&Mp(n)}function Ep(n,r,a){return a(function(){bp(r)&&Mp(n)})}function bp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!si(n,a)}catch{return!0}}function Mp(n){var r=Oi(n,1);r!==null&&ui(r,n,1,-1)}function Tp(n){var r=Mi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:n},r.queue=n,n=n.dispatch=H_.bind(null,jt,n),[r.memoizedState,n]}function jo(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=jt.updateQueue,r===null?(r={lastEffect:null,stores:null},jt.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function Ap(){return ei().memoizedState}function ll(n,r,a,c){var h=Mi();jt.flags|=n,h.memoizedState=jo(1|r,a,void 0,c===void 0?null:c)}function cl(n,r,a,c){var h=ei();c=c===void 0?null:c;var v=void 0;if(nn!==null){var M=nn.memoizedState;if(v=M.destroy,c!==null&&Eu(c,M.deps)){h.memoizedState=jo(r,a,v,c);return}}jt.flags|=n,h.memoizedState=jo(1|r,a,v,c)}function Cp(n,r){return ll(8390656,8,n,r)}function Cu(n,r){return cl(2048,8,n,r)}function Rp(n,r){return cl(4,2,n,r)}function Pp(n,r){return cl(4,4,n,r)}function Np(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Lp(n,r,a){return a=a!=null?a.concat([n]):null,cl(4,4,Np.bind(null,r,n),a)}function Ru(){}function Dp(n,r){var a=ei();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Eu(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Up(n,r){var a=ei();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Eu(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Ip(n,r,a){return(Xr&21)===0?(n.baseState&&(n.baseState=!1,kn=!0),n.memoizedState=a):(si(a,r)||(a=Ft(),jt.lanes|=a,qr|=a,n.baseState=!0),r)}function B_(n,r){var a=Mt;Mt=a!==0&&4>a?a:4,n(!0);var c=wu.transition;wu.transition={};try{n(!1),r()}finally{Mt=a,wu.transition=c}}function kp(){return ei().memoizedState}function z_(n,r,a){var c=Sr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Fp(n))Op(r,a);else if(a=pp(n,r,a,c),a!==null){var h=Pn();ui(a,n,c,h),Bp(a,r,c)}}function H_(n,r,a){var c=Sr(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fp(n))Op(r,h);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var M=r.lastRenderedState,U=v(M,a);if(h.hasEagerState=!0,h.eagerState=U,si(U,M)){var B=r.interleaved;B===null?(h.next=h,gu(r)):(h.next=B.next,B.next=h),r.interleaved=h;return}}catch{}finally{}a=pp(n,r,h,c),a!==null&&(h=Pn(),ui(a,n,c,h),Bp(a,r,c))}}function Fp(n){var r=n.alternate;return n===jt||r!==null&&r===jt}function Op(n,r){Vo=al=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Bp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,cn(n,a)}}var ul={readContext:Qn,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useInsertionEffect:yn,useLayoutEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useMutableSource:yn,useSyncExternalStore:yn,useId:yn,unstable_isNewReconciler:!1},V_={readContext:Qn,useCallback:function(n,r){return Mi().memoizedState=[n,r===void 0?null:r],n},useContext:Qn,useEffect:Cp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,ll(4194308,4,Np.bind(null,r,n),a)},useLayoutEffect:function(n,r){return ll(4194308,4,n,r)},useInsertionEffect:function(n,r){return ll(4,2,n,r)},useMemo:function(n,r){var a=Mi();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Mi();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=z_.bind(null,jt,n),[c.memoizedState,n]},useRef:function(n){var r=Mi();return n={current:n},r.memoizedState=n},useState:Tp,useDebugValue:Ru,useDeferredValue:function(n){return Mi().memoizedState=n},useTransition:function(){var n=Tp(!1),r=n[0];return n=B_.bind(null,n[1]),Mi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=jt,h=Mi();if(Gt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),dn===null)throw Error(t(349));(Xr&30)!==0||Sp(c,r,a)}h.memoizedState=a;var v={value:a,getSnapshot:r};return h.queue=v,Cp(Ep.bind(null,c,v,n),[n]),c.flags|=2048,jo(9,wp.bind(null,c,v,a,r),void 0,null),a},useId:function(){var n=Mi(),r=dn.identifierPrefix;if(Gt){var a=Fi,c=ki;a=(c&~(1<<32-ut(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=Go++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=O_++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},G_={readContext:Qn,useCallback:Dp,useContext:Qn,useEffect:Cu,useImperativeHandle:Lp,useInsertionEffect:Rp,useLayoutEffect:Pp,useMemo:Up,useReducer:Tu,useRef:Ap,useState:function(){return Tu(Wo)},useDebugValue:Ru,useDeferredValue:function(n){var r=ei();return Ip(r,nn.memoizedState,n)},useTransition:function(){var n=Tu(Wo)[0],r=ei().memoizedState;return[n,r]},useMutableSource:_p,useSyncExternalStore:yp,useId:kp,unstable_isNewReconciler:!1},W_={readContext:Qn,useCallback:Dp,useContext:Qn,useEffect:Cu,useImperativeHandle:Lp,useInsertionEffect:Rp,useLayoutEffect:Pp,useMemo:Up,useReducer:Au,useRef:Ap,useState:function(){return Au(Wo)},useDebugValue:Ru,useDeferredValue:function(n){var r=ei();return nn===null?r.memoizedState=n:Ip(r,nn.memoizedState,n)},useTransition:function(){var n=Au(Wo)[0],r=ei().memoizedState;return[n,r]},useMutableSource:_p,useSyncExternalStore:yp,useId:kp,unstable_isNewReconciler:!1};function ai(n,r){if(n&&n.defaultProps){r=oe({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function Pu(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:oe({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var dl={isMounted:function(n){return(n=n._reactInternals)?Si(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Pn(),h=Sr(n),v=Bi(c,h);v.payload=r,a!=null&&(v.callback=a),r=vr(n,v,h),r!==null&&(ui(r,n,h,c),il(r,n,h))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Pn(),h=Sr(n),v=Bi(c,h);v.tag=1,v.payload=r,a!=null&&(v.callback=a),r=vr(n,v,h),r!==null&&(ui(r,n,h,c),il(r,n,h))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Pn(),c=Sr(n),h=Bi(a,c);h.tag=2,r!=null&&(h.callback=r),r=vr(n,h,c),r!==null&&(ui(r,n,c,a),il(r,n,c))}};function zp(n,r,a,c,h,v,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,v,M):r.prototype&&r.prototype.isPureReactComponent?!No(a,c)||!No(h,v):!0}function Hp(n,r,a){var c=!1,h=pr,v=r.contextType;return typeof v=="object"&&v!==null?v=Qn(v):(h=In(r)?Hr:_n.current,c=r.contextTypes,v=(c=c!=null)?Ns(n,h):pr),r=new r(a,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=dl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=v),r}function Vp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&dl.enqueueReplaceState(r,r.state,null)}function Nu(n,r,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},vu(n);var v=r.contextType;typeof v=="object"&&v!==null?h.context=Qn(v):(v=In(r)?Hr:_n.current,h.context=Ns(n,v)),h.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(Pu(n,r,v,a),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(r=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),r!==h.state&&dl.enqueueReplaceState(h,h.state,null),rl(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Bs(n,r){try{var a="",c=r;do a+=pe(c),c=c.return;while(c);var h=a}catch(v){h=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:h,digest:null}}function Lu(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function Du(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var j_=typeof WeakMap=="function"?WeakMap:Map;function Gp(n,r,a){a=Bi(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){xl||(xl=!0,Yu=c),Du(n,r)},a}function Wp(n,r,a){a=Bi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=r.value;a.payload=function(){return c(h)},a.callback=function(){Du(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){Du(n,r),typeof c!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var M=r.stack;this.componentDidCatch(r.value,{componentStack:M!==null?M:""})}),a}function jp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new j_;var h=new Set;c.set(r,h)}else h=c.get(r),h===void 0&&(h=new Set,c.set(r,h));h.has(a)||(h.add(a),n=s0.bind(null,n,r,a),r.then(n,n))}function Xp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function qp(n,r,a,c,h){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Bi(-1,1),r.tag=2,vr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var X_=R.ReactCurrentOwner,kn=!1;function Rn(n,r,a,c){r.child=n===null?hp(r,null,a,c):Is(r,n.child,a,c)}function Yp(n,r,a,c,h){a=a.render;var v=r.ref;return Fs(r,h),c=bu(n,r,a,c,v,h),a=Mu(),n!==null&&!kn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,zi(n,r,h)):(Gt&&a&&au(r),r.flags|=1,Rn(n,r,c,h),r.child)}function $p(n,r,a,c,h){if(n===null){var v=a.type;return typeof v=="function"&&!td(v)&&v.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=v,Kp(n,r,v,c,h)):(n=bl(a.type,null,c,r,r.mode,h),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,(n.lanes&h)===0){var M=v.memoizedProps;if(a=a.compare,a=a!==null?a:No,a(M,c)&&n.ref===r.ref)return zi(n,r,h)}return r.flags|=1,n=Er(v,c),n.ref=r.ref,n.return=r,r.child=n}function Kp(n,r,a,c,h){if(n!==null){var v=n.memoizedProps;if(No(v,c)&&n.ref===r.ref)if(kn=!1,r.pendingProps=c=v,(n.lanes&h)!==0)(n.flags&131072)!==0&&(kn=!0);else return r.lanes=n.lanes,zi(n,r,h)}return Uu(n,r,a,c,h)}function Zp(n,r,a){var c=r.pendingProps,h=c.children,v=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(Hs,qn),qn|=a;else{if((a&1073741824)===0)return n=v!==null?v.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ot(Hs,qn),qn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=v!==null?v.baseLanes:a,Ot(Hs,qn),qn|=c}else v!==null?(c=v.baseLanes|a,r.memoizedState=null):c=a,Ot(Hs,qn),qn|=c;return Rn(n,r,h,a),r.child}function Jp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Uu(n,r,a,c,h){var v=In(a)?Hr:_n.current;return v=Ns(r,v),Fs(r,h),a=bu(n,r,a,c,v,h),c=Mu(),n!==null&&!kn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,zi(n,r,h)):(Gt&&c&&au(r),r.flags|=1,Rn(n,r,a,h),r.child)}function Qp(n,r,a,c,h){if(In(a)){var v=!0;$a(r)}else v=!1;if(Fs(r,h),r.stateNode===null)hl(n,r),Hp(r,a,c),Nu(r,a,c,h),c=!0;else if(n===null){var M=r.stateNode,U=r.memoizedProps;M.props=U;var B=M.context,ee=a.contextType;typeof ee=="object"&&ee!==null?ee=Qn(ee):(ee=In(a)?Hr:_n.current,ee=Ns(r,ee));var _e=a.getDerivedStateFromProps,Ee=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";Ee||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==c||B!==ee)&&Vp(r,M,c,ee),gr=!1;var xe=r.memoizedState;M.state=xe,rl(r,c,M,h),B=r.memoizedState,U!==c||xe!==B||Un.current||gr?(typeof _e=="function"&&(Pu(r,a,_e,c),B=r.memoizedState),(U=gr||zp(r,a,U,c,xe,B,ee))?(Ee||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(r.flags|=4194308)):(typeof M.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=B),M.props=c,M.state=B,M.context=ee,c=U):(typeof M.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{M=r.stateNode,mp(n,r),U=r.memoizedProps,ee=r.type===r.elementType?U:ai(r.type,U),M.props=ee,Ee=r.pendingProps,xe=M.context,B=a.contextType,typeof B=="object"&&B!==null?B=Qn(B):(B=In(a)?Hr:_n.current,B=Ns(r,B));var ke=a.getDerivedStateFromProps;(_e=typeof ke=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==Ee||xe!==B)&&Vp(r,M,c,B),gr=!1,xe=r.memoizedState,M.state=xe,rl(r,c,M,h);var Ve=r.memoizedState;U!==Ee||xe!==Ve||Un.current||gr?(typeof ke=="function"&&(Pu(r,a,ke,c),Ve=r.memoizedState),(ee=gr||zp(r,a,ee,c,xe,Ve,B)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(c,Ve,B),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(c,Ve,B)),typeof M.componentDidUpdate=="function"&&(r.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof M.componentDidUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(r.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=Ve),M.props=c,M.state=Ve,M.context=B,c=ee):(typeof M.componentDidUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(r.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(r.flags|=1024),c=!1)}return Iu(n,r,a,c,v,h)}function Iu(n,r,a,c,h,v){Jp(n,r);var M=(r.flags&128)!==0;if(!c&&!M)return h&&rp(r,a,!1),zi(n,r,v);c=r.stateNode,X_.current=r;var U=M&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&M?(r.child=Is(r,n.child,null,v),r.child=Is(r,null,U,v)):Rn(n,r,U,v),r.memoizedState=c.state,h&&rp(r,a,!0),r.child}function em(n){var r=n.stateNode;r.pendingContext?np(n,r.pendingContext,r.pendingContext!==r.context):r.context&&np(n,r.context,!1),xu(n,r.containerInfo)}function tm(n,r,a,c,h){return Us(),du(h),r.flags|=256,Rn(n,r,a,c),r.child}var ku={dehydrated:null,treeContext:null,retryLane:0};function Fu(n){return{baseLanes:n,cachePool:null,transitions:null}}function nm(n,r,a){var c=r.pendingProps,h=Wt.current,v=!1,M=(r.flags&128)!==0,U;if((U=M)||(U=n!==null&&n.memoizedState===null?!1:(h&2)!==0),U?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Ot(Wt,h&1),n===null)return uu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(M=c.children,n=c.fallback,v?(c=r.mode,v=r.child,M={mode:"hidden",children:M},(c&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=M):v=Ml(M,c,0,null),n=Zr(n,c,a,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=Fu(a),r.memoizedState=ku,n):Ou(r,M));if(h=n.memoizedState,h!==null&&(U=h.dehydrated,U!==null))return q_(n,r,M,c,U,h,a);if(v){v=c.fallback,M=r.mode,h=n.child,U=h.sibling;var B={mode:"hidden",children:c.children};return(M&1)===0&&r.child!==h?(c=r.child,c.childLanes=0,c.pendingProps=B,r.deletions=null):(c=Er(h,B),c.subtreeFlags=h.subtreeFlags&14680064),U!==null?v=Er(U,v):(v=Zr(v,M,a,null),v.flags|=2),v.return=r,c.return=r,c.sibling=v,r.child=c,c=v,v=r.child,M=n.child.memoizedState,M=M===null?Fu(a):{baseLanes:M.baseLanes|a,cachePool:null,transitions:M.transitions},v.memoizedState=M,v.childLanes=n.childLanes&~a,r.memoizedState=ku,c}return v=n.child,n=v.sibling,c=Er(v,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function Ou(n,r){return r=Ml({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function fl(n,r,a,c){return c!==null&&du(c),Is(r,n.child,null,a),n=Ou(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function q_(n,r,a,c,h,v,M){if(a)return r.flags&256?(r.flags&=-257,c=Lu(Error(t(422))),fl(n,r,M,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=c.fallback,h=r.mode,c=Ml({mode:"visible",children:c.children},h,0,null),v=Zr(v,h,M,null),v.flags|=2,c.return=r,v.return=r,c.sibling=v,r.child=c,(r.mode&1)!==0&&Is(r,n.child,null,M),r.child.memoizedState=Fu(M),r.memoizedState=ku,v);if((r.mode&1)===0)return fl(n,r,M,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var U=c.dgst;return c=U,v=Error(t(419)),c=Lu(v,c,void 0),fl(n,r,M,c)}if(U=(M&n.childLanes)!==0,kn||U){if(c=dn,c!==null){switch(M&-M){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|M))!==0?0:h,h!==0&&h!==v.retryLane&&(v.retryLane=h,Oi(n,h),ui(c,n,h,-1))}return ed(),c=Lu(Error(t(421))),fl(n,r,M,c)}return h.data==="$?"?(r.flags|=128,r.child=n.child,r=o0.bind(null,n),h._reactRetry=r,null):(n=v.treeContext,Xn=fr(h.nextSibling),jn=r,Gt=!0,oi=null,n!==null&&(Zn[Jn++]=ki,Zn[Jn++]=Fi,Zn[Jn++]=Vr,ki=n.id,Fi=n.overflow,Vr=r),r=Ou(r,c.children),r.flags|=4096,r)}function im(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),mu(n.return,r,a)}function Bu(n,r,a,c,h){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=c,v.tail=a,v.tailMode=h)}function rm(n,r,a){var c=r.pendingProps,h=c.revealOrder,v=c.tail;if(Rn(n,r,c.children,a),c=Wt.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&im(n,a,r);else if(n.tag===19)im(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ot(Wt,c),(r.mode&1)===0)r.memoizedState=null;else switch(h){case"forwards":for(a=r.child,h=null;a!==null;)n=a.alternate,n!==null&&sl(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=r.child,r.child=null):(h=a.sibling,a.sibling=null),Bu(r,!1,h,a,v);break;case"backwards":for(a=null,h=r.child,r.child=null;h!==null;){if(n=h.alternate,n!==null&&sl(n)===null){r.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Bu(r,!0,a,null,v);break;case"together":Bu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function hl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function zi(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),qr|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Er(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Er(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function Y_(n,r,a){switch(r.tag){case 3:em(r),Us();break;case 5:xp(r);break;case 1:In(r.type)&&$a(r);break;case 4:xu(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,h=r.memoizedProps.value;Ot(tl,c._currentValue),c._currentValue=h;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(Ot(Wt,Wt.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?nm(n,r,a):(Ot(Wt,Wt.current&1),n=zi(n,r,a),n!==null?n.sibling:null);Ot(Wt,Wt.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return rm(n,r,a);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Ot(Wt,Wt.current),c)break;return null;case 22:case 23:return r.lanes=0,Zp(n,r,a)}return zi(n,r,a)}var sm,zu,om,am;sm=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},zu=function(){},om=function(n,r,a,c){var h=n.memoizedProps;if(h!==c){n=r.stateNode,jr(bi.current);var v=null;switch(a){case"input":h=H(n,h),c=H(n,c),v=[];break;case"select":h=oe({},h,{value:void 0}),c=oe({},c,{value:void 0}),v=[];break;case"textarea":h=T(n,h),c=T(n,c),v=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Xa)}vt(a,c);var M;a=null;for(ee in h)if(!c.hasOwnProperty(ee)&&h.hasOwnProperty(ee)&&h[ee]!=null)if(ee==="style"){var U=h[ee];for(M in U)U.hasOwnProperty(M)&&(a||(a={}),a[M]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(o.hasOwnProperty(ee)?v||(v=[]):(v=v||[]).push(ee,null));for(ee in c){var B=c[ee];if(U=h!=null?h[ee]:void 0,c.hasOwnProperty(ee)&&B!==U&&(B!=null||U!=null))if(ee==="style")if(U){for(M in U)!U.hasOwnProperty(M)||B&&B.hasOwnProperty(M)||(a||(a={}),a[M]="");for(M in B)B.hasOwnProperty(M)&&U[M]!==B[M]&&(a||(a={}),a[M]=B[M])}else a||(v||(v=[]),v.push(ee,a)),a=B;else ee==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,U=U?U.__html:void 0,B!=null&&U!==B&&(v=v||[]).push(ee,B)):ee==="children"?typeof B!="string"&&typeof B!="number"||(v=v||[]).push(ee,""+B):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(o.hasOwnProperty(ee)?(B!=null&&ee==="onScroll"&&zt("scroll",n),v||U===B||(v=[])):(v=v||[]).push(ee,B))}a&&(v=v||[]).push("style",a);var ee=v;(r.updateQueue=ee)&&(r.flags|=4)}},am=function(n,r,a,c){a!==c&&(r.flags|=4)};function Xo(n,r){if(!Gt)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Sn(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function $_(n,r,a){var c=r.pendingProps;switch(lu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(r),null;case 1:return In(r.type)&&Ya(),Sn(r),null;case 3:return c=r.stateNode,Os(),Ht(Un),Ht(_n),Su(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Qa(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,oi!==null&&(Zu(oi),oi=null))),zu(n,r),Sn(r),null;case 5:_u(r);var h=jr(Ho.current);if(a=r.type,n!==null&&r.stateNode!=null)om(n,r,a,c,h),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Sn(r),null}if(n=jr(bi.current),Qa(r)){c=r.stateNode,a=r.type;var v=r.memoizedProps;switch(c[Ei]=r,c[ko]=v,n=(r.mode&1)!==0,a){case"dialog":zt("cancel",c),zt("close",c);break;case"iframe":case"object":case"embed":zt("load",c);break;case"video":case"audio":for(h=0;h<Do.length;h++)zt(Do[h],c);break;case"source":zt("error",c);break;case"img":case"image":case"link":zt("error",c),zt("load",c);break;case"details":zt("toggle",c);break;case"input":Tn(c,v),zt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!v.multiple},zt("invalid",c);break;case"textarea":J(c,v),zt("invalid",c)}vt(a,v),h=null;for(var M in v)if(v.hasOwnProperty(M)){var U=v[M];M==="children"?typeof U=="string"?c.textContent!==U&&(v.suppressHydrationWarning!==!0&&ja(c.textContent,U,n),h=["children",U]):typeof U=="number"&&c.textContent!==""+U&&(v.suppressHydrationWarning!==!0&&ja(c.textContent,U,n),h=["children",""+U]):o.hasOwnProperty(M)&&U!=null&&M==="onScroll"&&zt("scroll",c)}switch(a){case"input":Nt(c),Ze(c,v,!0);break;case"textarea":Nt(c),ye(c);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(c.onclick=Xa)}c=h,r.updateQueue=c,c!==null&&(r.flags|=4)}else{M=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=M.createElement(a,{is:c.is}):(n=M.createElement(a),a==="select"&&(M=n,c.multiple?M.multiple=!0:c.size&&(M.size=c.size))):n=M.createElementNS(n,a),n[Ei]=r,n[ko]=c,sm(n,r,!1,!1),r.stateNode=n;e:{switch(M=lt(a,c),a){case"dialog":zt("cancel",n),zt("close",n),h=c;break;case"iframe":case"object":case"embed":zt("load",n),h=c;break;case"video":case"audio":for(h=0;h<Do.length;h++)zt(Do[h],n);h=c;break;case"source":zt("error",n),h=c;break;case"img":case"image":case"link":zt("error",n),zt("load",n),h=c;break;case"details":zt("toggle",n),h=c;break;case"input":Tn(n,c),h=H(n,c),zt("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=oe({},c,{value:void 0}),zt("invalid",n);break;case"textarea":J(n,c),h=T(n,c),zt("invalid",n);break;default:h=c}vt(a,h),U=h;for(v in U)if(U.hasOwnProperty(v)){var B=U[v];v==="style"?st(n,B):v==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&et(n,B)):v==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&Qe(n,B):typeof B=="number"&&Qe(n,""+B):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?B!=null&&v==="onScroll"&&zt("scroll",n):B!=null&&N(n,v,B,M))}switch(a){case"input":Nt(n),Ze(n,c,!1);break;case"textarea":Nt(n),ye(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ce(c.value));break;case"select":n.multiple=!!c.multiple,v=c.value,v!=null?L(n,!!c.multiple,v,!1):c.defaultValue!=null&&L(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Xa)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Sn(r),null;case 6:if(n&&r.stateNode!=null)am(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=jr(Ho.current),jr(bi.current),Qa(r)){if(c=r.stateNode,a=r.memoizedProps,c[Ei]=r,(v=c.nodeValue!==a)&&(n=jn,n!==null))switch(n.tag){case 3:ja(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ja(c.nodeValue,a,(n.mode&1)!==0)}v&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ei]=r,r.stateNode=c}return Sn(r),null;case 13:if(Ht(Wt),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Gt&&Xn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)up(),Us(),r.flags|=98560,v=!1;else if(v=Qa(r),c!==null&&c.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Ei]=r}else Us(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Sn(r),v=!1}else oi!==null&&(Zu(oi),oi=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Wt.current&1)!==0?rn===0&&(rn=3):ed())),r.updateQueue!==null&&(r.flags|=4),Sn(r),null);case 4:return Os(),zu(n,r),n===null&&Uo(r.stateNode.containerInfo),Sn(r),null;case 10:return pu(r.type._context),Sn(r),null;case 17:return In(r.type)&&Ya(),Sn(r),null;case 19:if(Ht(Wt),v=r.memoizedState,v===null)return Sn(r),null;if(c=(r.flags&128)!==0,M=v.rendering,M===null)if(c)Xo(v,!1);else{if(rn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(M=sl(n),M!==null){for(r.flags|=128,Xo(v,!1),c=M.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)v=a,n=c,v.flags&=14680066,M=v.alternate,M===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=M.childLanes,v.lanes=M.lanes,v.child=M.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=M.memoizedProps,v.memoizedState=M.memoizedState,v.updateQueue=M.updateQueue,v.type=M.type,n=M.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ot(Wt,Wt.current&1|2),r.child}n=n.sibling}v.tail!==null&&K()>Vs&&(r.flags|=128,c=!0,Xo(v,!1),r.lanes=4194304)}else{if(!c)if(n=sl(M),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Xo(v,!0),v.tail===null&&v.tailMode==="hidden"&&!M.alternate&&!Gt)return Sn(r),null}else 2*K()-v.renderingStartTime>Vs&&a!==1073741824&&(r.flags|=128,c=!0,Xo(v,!1),r.lanes=4194304);v.isBackwards?(M.sibling=r.child,r.child=M):(a=v.last,a!==null?a.sibling=M:r.child=M,v.last=M)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=K(),r.sibling=null,a=Wt.current,Ot(Wt,c?a&1|2:a&1),r):(Sn(r),null);case 22:case 23:return Qu(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(qn&1073741824)!==0&&(Sn(r),r.subtreeFlags&6&&(r.flags|=8192)):Sn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function K_(n,r){switch(lu(r),r.tag){case 1:return In(r.type)&&Ya(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Os(),Ht(Un),Ht(_n),Su(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return _u(r),null;case 13:if(Ht(Wt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Us()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Ht(Wt),null;case 4:return Os(),null;case 10:return pu(r.type._context),null;case 22:case 23:return Qu(),null;case 24:return null;default:return null}}var pl=!1,wn=!1,Z_=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function zs(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Yt(n,r,c)}else a.current=null}function Hu(n,r,a){try{a()}catch(c){Yt(n,r,c)}}var lm=!1;function J_(n,r){if(Qc=Ua,n=zh(),jc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,v=c.focusNode;c=c.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break e}var M=0,U=-1,B=-1,ee=0,_e=0,Ee=n,xe=null;t:for(;;){for(var ke;Ee!==a||h!==0&&Ee.nodeType!==3||(U=M+h),Ee!==v||c!==0&&Ee.nodeType!==3||(B=M+c),Ee.nodeType===3&&(M+=Ee.nodeValue.length),(ke=Ee.firstChild)!==null;)xe=Ee,Ee=ke;for(;;){if(Ee===n)break t;if(xe===a&&++ee===h&&(U=M),xe===v&&++_e===c&&(B=M),(ke=Ee.nextSibling)!==null)break;Ee=xe,xe=Ee.parentNode}Ee=ke}a=U===-1||B===-1?null:{start:U,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(eu={focusedElem:n,selectionRange:a},Ua=!1,Fe=r;Fe!==null;)if(r=Fe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Fe=n;else for(;Fe!==null;){r=Fe;try{var Ve=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var Xe=Ve.memoizedProps,$t=Ve.memoizedState,Y=r.stateNode,W=Y.getSnapshotBeforeUpdate(r.elementType===r.type?Xe:ai(r.type,Xe),$t);Y.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var Z=r.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Yt(r,r.return,Te)}if(n=r.sibling,n!==null){n.return=r.return,Fe=n;break}Fe=r.return}return Ve=lm,lm=!1,Ve}function qo(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var v=h.destroy;h.destroy=void 0,v!==void 0&&Hu(r,a,v)}h=h.next}while(h!==c)}}function ml(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Vu(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function cm(n){var r=n.alternate;r!==null&&(n.alternate=null,cm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Ei],delete r[ko],delete r[ru],delete r[U_],delete r[I_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function um(n){return n.tag===5||n.tag===3||n.tag===4}function dm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||um(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Gu(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Xa));else if(c!==4&&(n=n.child,n!==null))for(Gu(n,r,a),n=n.sibling;n!==null;)Gu(n,r,a),n=n.sibling}function Wu(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Wu(n,r,a),n=n.sibling;n!==null;)Wu(n,r,a),n=n.sibling}var mn=null,li=!1;function xr(n,r,a){for(a=a.child;a!==null;)fm(n,r,a),a=a.sibling}function fm(n,r,a){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(it,a)}catch{}switch(a.tag){case 5:wn||zs(a,r);case 6:var c=mn,h=li;mn=null,xr(n,r,a),mn=c,li=h,mn!==null&&(li?(n=mn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):mn.removeChild(a.stateNode));break;case 18:mn!==null&&(li?(n=mn,a=a.stateNode,n.nodeType===8?iu(n.parentNode,a):n.nodeType===1&&iu(n,a),Mo(n)):iu(mn,a.stateNode));break;case 4:c=mn,h=li,mn=a.stateNode.containerInfo,li=!0,xr(n,r,a),mn=c,li=h;break;case 0:case 11:case 14:case 15:if(!wn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var v=h,M=v.destroy;v=v.tag,M!==void 0&&((v&2)!==0||(v&4)!==0)&&Hu(a,r,M),h=h.next}while(h!==c)}xr(n,r,a);break;case 1:if(!wn&&(zs(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(U){Yt(a,r,U)}xr(n,r,a);break;case 21:xr(n,r,a);break;case 22:a.mode&1?(wn=(c=wn)||a.memoizedState!==null,xr(n,r,a),wn=c):xr(n,r,a);break;default:xr(n,r,a)}}function hm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Z_),r.forEach(function(c){var h=a0.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function ci(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var v=n,M=r,U=M;e:for(;U!==null;){switch(U.tag){case 5:mn=U.stateNode,li=!1;break e;case 3:mn=U.stateNode.containerInfo,li=!0;break e;case 4:mn=U.stateNode.containerInfo,li=!0;break e}U=U.return}if(mn===null)throw Error(t(160));fm(v,M,h),mn=null,li=!1;var B=h.alternate;B!==null&&(B.return=null),h.return=null}catch(ee){Yt(h,r,ee)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)pm(r,n),r=r.sibling}function pm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ci(r,n),Ti(n),c&4){try{qo(3,n,n.return),ml(3,n)}catch(Xe){Yt(n,n.return,Xe)}try{qo(5,n,n.return)}catch(Xe){Yt(n,n.return,Xe)}}break;case 1:ci(r,n),Ti(n),c&512&&a!==null&&zs(a,a.return);break;case 5:if(ci(r,n),Ti(n),c&512&&a!==null&&zs(a,a.return),n.flags&32){var h=n.stateNode;try{Qe(h,"")}catch(Xe){Yt(n,n.return,Xe)}}if(c&4&&(h=n.stateNode,h!=null)){var v=n.memoizedProps,M=a!==null?a.memoizedProps:v,U=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{U==="input"&&v.type==="radio"&&v.name!=null&&_t(h,v),lt(U,M);var ee=lt(U,v);for(M=0;M<B.length;M+=2){var _e=B[M],Ee=B[M+1];_e==="style"?st(h,Ee):_e==="dangerouslySetInnerHTML"?et(h,Ee):_e==="children"?Qe(h,Ee):N(h,_e,Ee,ee)}switch(U){case"input":gt(h,v);break;case"textarea":ge(h,v);break;case"select":var xe=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!v.multiple;var ke=v.value;ke!=null?L(h,!!v.multiple,ke,!1):xe!==!!v.multiple&&(v.defaultValue!=null?L(h,!!v.multiple,v.defaultValue,!0):L(h,!!v.multiple,v.multiple?[]:"",!1))}h[ko]=v}catch(Xe){Yt(n,n.return,Xe)}}break;case 6:if(ci(r,n),Ti(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,v=n.memoizedProps;try{h.nodeValue=v}catch(Xe){Yt(n,n.return,Xe)}}break;case 3:if(ci(r,n),Ti(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Mo(r.containerInfo)}catch(Xe){Yt(n,n.return,Xe)}break;case 4:ci(r,n),Ti(n);break;case 13:ci(r,n),Ti(n),h=n.child,h.flags&8192&&(v=h.memoizedState!==null,h.stateNode.isHidden=v,!v||h.alternate!==null&&h.alternate.memoizedState!==null||(qu=K())),c&4&&hm(n);break;case 22:if(_e=a!==null&&a.memoizedState!==null,n.mode&1?(wn=(ee=wn)||_e,ci(r,n),wn=ee):ci(r,n),Ti(n),c&8192){if(ee=n.memoizedState!==null,(n.stateNode.isHidden=ee)&&!_e&&(n.mode&1)!==0)for(Fe=n,_e=n.child;_e!==null;){for(Ee=Fe=_e;Fe!==null;){switch(xe=Fe,ke=xe.child,xe.tag){case 0:case 11:case 14:case 15:qo(4,xe,xe.return);break;case 1:zs(xe,xe.return);var Ve=xe.stateNode;if(typeof Ve.componentWillUnmount=="function"){c=xe,a=xe.return;try{r=c,Ve.props=r.memoizedProps,Ve.state=r.memoizedState,Ve.componentWillUnmount()}catch(Xe){Yt(c,a,Xe)}}break;case 5:zs(xe,xe.return);break;case 22:if(xe.memoizedState!==null){vm(Ee);continue}}ke!==null?(ke.return=xe,Fe=ke):vm(Ee)}_e=_e.sibling}e:for(_e=null,Ee=n;;){if(Ee.tag===5){if(_e===null){_e=Ee;try{h=Ee.stateNode,ee?(v=h.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(U=Ee.stateNode,B=Ee.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null,U.style.display=rt("display",M))}catch(Xe){Yt(n,n.return,Xe)}}}else if(Ee.tag===6){if(_e===null)try{Ee.stateNode.nodeValue=ee?"":Ee.memoizedProps}catch(Xe){Yt(n,n.return,Xe)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===n)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===n)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===n)break e;_e===Ee&&(_e=null),Ee=Ee.return}_e===Ee&&(_e=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:ci(r,n),Ti(n),c&4&&hm(n);break;case 21:break;default:ci(r,n),Ti(n)}}function Ti(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(um(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(Qe(h,""),c.flags&=-33);var v=dm(n);Wu(n,v,h);break;case 3:case 4:var M=c.stateNode.containerInfo,U=dm(n);Gu(n,U,M);break;default:throw Error(t(161))}}catch(B){Yt(n,n.return,B)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Q_(n,r,a){Fe=n,mm(n)}function mm(n,r,a){for(var c=(n.mode&1)!==0;Fe!==null;){var h=Fe,v=h.child;if(h.tag===22&&c){var M=h.memoizedState!==null||pl;if(!M){var U=h.alternate,B=U!==null&&U.memoizedState!==null||wn;U=pl;var ee=wn;if(pl=M,(wn=B)&&!ee)for(Fe=h;Fe!==null;)M=Fe,B=M.child,M.tag===22&&M.memoizedState!==null?xm(h):B!==null?(B.return=M,Fe=B):xm(h);for(;v!==null;)Fe=v,mm(v),v=v.sibling;Fe=h,pl=U,wn=ee}gm(n)}else(h.subtreeFlags&8772)!==0&&v!==null?(v.return=h,Fe=v):gm(n)}}function gm(n){for(;Fe!==null;){var r=Fe;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:wn||ml(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!wn)if(a===null)c.componentDidMount();else{var h=r.elementType===r.type?a.memoizedProps:ai(r.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&vp(r,v,c);break;case 3:var M=r.updateQueue;if(M!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}vp(r,M,a)}break;case 5:var U=r.stateNode;if(a===null&&r.flags&4){a=U;var B=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ee=r.alternate;if(ee!==null){var _e=ee.memoizedState;if(_e!==null){var Ee=_e.dehydrated;Ee!==null&&Mo(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}wn||r.flags&512&&Vu(r)}catch(xe){Yt(r,r.return,xe)}}if(r===n){Fe=null;break}if(a=r.sibling,a!==null){a.return=r.return,Fe=a;break}Fe=r.return}}function vm(n){for(;Fe!==null;){var r=Fe;if(r===n){Fe=null;break}var a=r.sibling;if(a!==null){a.return=r.return,Fe=a;break}Fe=r.return}}function xm(n){for(;Fe!==null;){var r=Fe;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{ml(4,r)}catch(B){Yt(r,a,B)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var h=r.return;try{c.componentDidMount()}catch(B){Yt(r,h,B)}}var v=r.return;try{Vu(r)}catch(B){Yt(r,v,B)}break;case 5:var M=r.return;try{Vu(r)}catch(B){Yt(r,M,B)}}}catch(B){Yt(r,r.return,B)}if(r===n){Fe=null;break}var U=r.sibling;if(U!==null){U.return=r.return,Fe=U;break}Fe=r.return}}var e0=Math.ceil,gl=R.ReactCurrentDispatcher,ju=R.ReactCurrentOwner,ti=R.ReactCurrentBatchConfig,Tt=0,dn=null,Zt=null,gn=0,qn=0,Hs=hr(0),rn=0,Yo=null,qr=0,vl=0,Xu=0,$o=null,Fn=null,qu=0,Vs=1/0,Hi=null,xl=!1,Yu=null,_r=null,_l=!1,yr=null,yl=0,Ko=0,$u=null,Sl=-1,wl=0;function Pn(){return(Tt&6)!==0?K():Sl!==-1?Sl:Sl=K()}function Sr(n){return(n.mode&1)===0?1:(Tt&2)!==0&&gn!==0?gn&-gn:F_.transition!==null?(wl===0&&(wl=Ft()),wl):(n=Mt,n!==0||(n=window.event,n=n===void 0?16:yh(n.type)),n)}function ui(n,r,a,c){if(50<Ko)throw Ko=0,$u=null,Error(t(185));ln(n,a,c),((Tt&2)===0||n!==dn)&&(n===dn&&((Tt&2)===0&&(vl|=a),rn===4&&wr(n,gn)),On(n,c),a===1&&Tt===0&&(r.mode&1)===0&&(Vs=K()+500,Ka&&mr()))}function On(n,r){var a=n.callbackNode;Cn(n,r);var c=vn(n,n===dn?gn:0);if(c===0)a!==null&&A(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&A(a),r===1)n.tag===0?k_(ym.bind(null,n)):sp(ym.bind(null,n)),L_(function(){(Tt&6)===0&&mr()}),a=null;else{switch(wi(c)){case 1:a=Me;break;case 4:a=Ne;break;case 16:a=Ie;break;case 536870912:a=ot;break;default:a=Ie}a=Cm(a,_m.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function _m(n,r){if(Sl=-1,wl=0,(Tt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Gs()&&n.callbackNode!==a)return null;var c=vn(n,n===dn?gn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=El(n,c);else{r=c;var h=Tt;Tt|=2;var v=wm();(dn!==n||gn!==r)&&(Hi=null,Vs=K()+500,$r(n,r));do try{i0();break}catch(U){Sm(n,U)}while(!0);hu(),gl.current=v,Tt=h,Zt!==null?r=0:(dn=null,gn=0,r=rn)}if(r!==0){if(r===2&&(h=Di(n),h!==0&&(c=h,r=Ku(n,h))),r===1)throw a=Yo,$r(n,0),wr(n,c),On(n,K()),a;if(r===6)wr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!t0(h)&&(r=El(n,c),r===2&&(v=Di(n),v!==0&&(c=v,r=Ku(n,v))),r===1))throw a=Yo,$r(n,0),wr(n,c),On(n,K()),a;switch(n.finishedWork=h,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Kr(n,Fn,Hi);break;case 3:if(wr(n,c),(c&130023424)===c&&(r=qu+500-K(),10<r)){if(vn(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){Pn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=nu(Kr.bind(null,n,Fn,Hi),r);break}Kr(n,Fn,Hi);break;case 4:if(wr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,h=-1;0<c;){var M=31-ut(c);v=1<<M,M=r[M],M>h&&(h=M),c&=~v}if(c=h,c=K()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*e0(c/1960))-c,10<c){n.timeoutHandle=nu(Kr.bind(null,n,Fn,Hi),c);break}Kr(n,Fn,Hi);break;case 5:Kr(n,Fn,Hi);break;default:throw Error(t(329))}}}return On(n,K()),n.callbackNode===a?_m.bind(null,n):null}function Ku(n,r){var a=$o;return n.current.memoizedState.isDehydrated&&($r(n,r).flags|=256),n=El(n,r),n!==2&&(r=Fn,Fn=a,r!==null&&Zu(r)),n}function Zu(n){Fn===null?Fn=n:Fn.push.apply(Fn,n)}function t0(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],v=h.getSnapshot;h=h.value;try{if(!si(v(),h))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function wr(n,r){for(r&=~Xu,r&=~vl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-ut(r),c=1<<a;n[a]=-1,r&=~c}}function ym(n){if((Tt&6)!==0)throw Error(t(327));Gs();var r=vn(n,0);if((r&1)===0)return On(n,K()),null;var a=El(n,r);if(n.tag!==0&&a===2){var c=Di(n);c!==0&&(r=c,a=Ku(n,c))}if(a===1)throw a=Yo,$r(n,0),wr(n,r),On(n,K()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Kr(n,Fn,Hi),On(n,K()),null}function Ju(n,r){var a=Tt;Tt|=1;try{return n(r)}finally{Tt=a,Tt===0&&(Vs=K()+500,Ka&&mr())}}function Yr(n){yr!==null&&yr.tag===0&&(Tt&6)===0&&Gs();var r=Tt;Tt|=1;var a=ti.transition,c=Mt;try{if(ti.transition=null,Mt=1,n)return n()}finally{Mt=c,ti.transition=a,Tt=r,(Tt&6)===0&&mr()}}function Qu(){qn=Hs.current,Ht(Hs)}function $r(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,N_(a)),Zt!==null)for(a=Zt.return;a!==null;){var c=a;switch(lu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ya();break;case 3:Os(),Ht(Un),Ht(_n),Su();break;case 5:_u(c);break;case 4:Os();break;case 13:Ht(Wt);break;case 19:Ht(Wt);break;case 10:pu(c.type._context);break;case 22:case 23:Qu()}a=a.return}if(dn=n,Zt=n=Er(n.current,null),gn=qn=r,rn=0,Yo=null,Xu=vl=qr=0,Fn=$o=null,Wr!==null){for(r=0;r<Wr.length;r++)if(a=Wr[r],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,v=a.pending;if(v!==null){var M=v.next;v.next=h,c.next=M}a.pending=c}Wr=null}return n}function Sm(n,r){do{var a=Zt;try{if(hu(),ol.current=ul,al){for(var c=jt.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}al=!1}if(Xr=0,un=nn=jt=null,Vo=!1,Go=0,ju.current=null,a===null||a.return===null){rn=1,Yo=r,Zt=null;break}e:{var v=n,M=a.return,U=a,B=r;if(r=gn,U.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ee=B,_e=U,Ee=_e.tag;if((_e.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var xe=_e.alternate;xe?(_e.updateQueue=xe.updateQueue,_e.memoizedState=xe.memoizedState,_e.lanes=xe.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var ke=Xp(M);if(ke!==null){ke.flags&=-257,qp(ke,M,U,v,r),ke.mode&1&&jp(v,ee,r),r=ke,B=ee;var Ve=r.updateQueue;if(Ve===null){var Xe=new Set;Xe.add(B),r.updateQueue=Xe}else Ve.add(B);break e}else{if((r&1)===0){jp(v,ee,r),ed();break e}B=Error(t(426))}}else if(Gt&&U.mode&1){var $t=Xp(M);if($t!==null){($t.flags&65536)===0&&($t.flags|=256),qp($t,M,U,v,r),du(Bs(B,U));break e}}v=B=Bs(B,U),rn!==4&&(rn=2),$o===null?$o=[v]:$o.push(v),v=M;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var Y=Gp(v,B,r);gp(v,Y);break e;case 1:U=B;var W=v.type,Z=v.stateNode;if((v.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(_r===null||!_r.has(Z)))){v.flags|=65536,r&=-r,v.lanes|=r;var Te=Wp(v,U,r);gp(v,Te);break e}}v=v.return}while(v!==null)}bm(a)}catch(Ke){r=Ke,Zt===a&&a!==null&&(Zt=a=a.return);continue}break}while(!0)}function wm(){var n=gl.current;return gl.current=ul,n===null?ul:n}function ed(){(rn===0||rn===3||rn===2)&&(rn=4),dn===null||(qr&268435455)===0&&(vl&268435455)===0||wr(dn,gn)}function El(n,r){var a=Tt;Tt|=2;var c=wm();(dn!==n||gn!==r)&&(Hi=null,$r(n,r));do try{n0();break}catch(h){Sm(n,h)}while(!0);if(hu(),Tt=a,gl.current=c,Zt!==null)throw Error(t(261));return dn=null,gn=0,rn}function n0(){for(;Zt!==null;)Em(Zt)}function i0(){for(;Zt!==null&&!X();)Em(Zt)}function Em(n){var r=Am(n.alternate,n,qn);n.memoizedProps=n.pendingProps,r===null?bm(n):Zt=r,ju.current=null}function bm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=$_(a,r,qn),a!==null){Zt=a;return}}else{if(a=K_(a,r),a!==null){a.flags&=32767,Zt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{rn=6,Zt=null;return}}if(r=r.sibling,r!==null){Zt=r;return}Zt=r=n}while(r!==null);rn===0&&(rn=5)}function Kr(n,r,a){var c=Mt,h=ti.transition;try{ti.transition=null,Mt=1,r0(n,r,a,c)}finally{ti.transition=h,Mt=c}return null}function r0(n,r,a,c){do Gs();while(yr!==null);if((Tt&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=a.lanes|a.childLanes;if(pn(n,v),n===dn&&(Zt=dn=null,gn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||_l||(_l=!0,Cm(Ie,function(){return Gs(),null})),v=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||v){v=ti.transition,ti.transition=null;var M=Mt;Mt=1;var U=Tt;Tt|=4,ju.current=null,J_(n,a),pm(a,n),b_(eu),Ua=!!Qc,eu=Qc=null,n.current=a,Q_(a),te(),Tt=U,Mt=M,ti.transition=v}else n.current=a;if(_l&&(_l=!1,yr=n,yl=h),v=n.pendingLanes,v===0&&(_r=null),St(a.stateNode),On(n,K()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)h=r[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(xl)throw xl=!1,n=Yu,Yu=null,n;return(yl&1)!==0&&n.tag!==0&&Gs(),v=n.pendingLanes,(v&1)!==0?n===$u?Ko++:(Ko=0,$u=n):Ko=0,mr(),null}function Gs(){if(yr!==null){var n=wi(yl),r=ti.transition,a=Mt;try{if(ti.transition=null,Mt=16>n?16:n,yr===null)var c=!1;else{if(n=yr,yr=null,yl=0,(Tt&6)!==0)throw Error(t(331));var h=Tt;for(Tt|=4,Fe=n.current;Fe!==null;){var v=Fe,M=v.child;if((Fe.flags&16)!==0){var U=v.deletions;if(U!==null){for(var B=0;B<U.length;B++){var ee=U[B];for(Fe=ee;Fe!==null;){var _e=Fe;switch(_e.tag){case 0:case 11:case 15:qo(8,_e,v)}var Ee=_e.child;if(Ee!==null)Ee.return=_e,Fe=Ee;else for(;Fe!==null;){_e=Fe;var xe=_e.sibling,ke=_e.return;if(cm(_e),_e===ee){Fe=null;break}if(xe!==null){xe.return=ke,Fe=xe;break}Fe=ke}}}var Ve=v.alternate;if(Ve!==null){var Xe=Ve.child;if(Xe!==null){Ve.child=null;do{var $t=Xe.sibling;Xe.sibling=null,Xe=$t}while(Xe!==null)}}Fe=v}}if((v.subtreeFlags&2064)!==0&&M!==null)M.return=v,Fe=M;else e:for(;Fe!==null;){if(v=Fe,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:qo(9,v,v.return)}var Y=v.sibling;if(Y!==null){Y.return=v.return,Fe=Y;break e}Fe=v.return}}var W=n.current;for(Fe=W;Fe!==null;){M=Fe;var Z=M.child;if((M.subtreeFlags&2064)!==0&&Z!==null)Z.return=M,Fe=Z;else e:for(M=W;Fe!==null;){if(U=Fe,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:ml(9,U)}}catch(Ke){Yt(U,U.return,Ke)}if(U===M){Fe=null;break e}var Te=U.sibling;if(Te!==null){Te.return=U.return,Fe=Te;break e}Fe=U.return}}if(Tt=h,mr(),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(it,n)}catch{}c=!0}return c}finally{Mt=a,ti.transition=r}}return!1}function Mm(n,r,a){r=Bs(a,r),r=Gp(n,r,1),n=vr(n,r,1),r=Pn(),n!==null&&(ln(n,1,r),On(n,r))}function Yt(n,r,a){if(n.tag===3)Mm(n,n,a);else for(;r!==null;){if(r.tag===3){Mm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(_r===null||!_r.has(c))){n=Bs(a,n),n=Wp(r,n,1),r=vr(r,n,1),n=Pn(),r!==null&&(ln(r,1,n),On(r,n));break}}r=r.return}}function s0(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Pn(),n.pingedLanes|=n.suspendedLanes&a,dn===n&&(gn&a)===a&&(rn===4||rn===3&&(gn&130023424)===gn&&500>K()-qu?$r(n,0):Xu|=a),On(n,r)}function Tm(n,r){r===0&&((n.mode&1)===0?r=1:(r=qt,qt<<=1,(qt&130023424)===0&&(qt=4194304)));var a=Pn();n=Oi(n,r),n!==null&&(ln(n,r,a),On(n,a))}function o0(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Tm(n,a)}function a0(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Tm(n,a)}var Am;Am=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Un.current)kn=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return kn=!1,Y_(n,r,a);kn=(n.flags&131072)!==0}else kn=!1,Gt&&(r.flags&1048576)!==0&&op(r,Ja,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;hl(n,r),n=r.pendingProps;var h=Ns(r,_n.current);Fs(r,a),h=bu(null,r,c,n,h,a);var v=Mu();return r.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,In(c)?(v=!0,$a(r)):v=!1,r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,vu(r),h.updater=dl,r.stateNode=h,h._reactInternals=r,Nu(r,c,n,a),r=Iu(null,r,c,!0,v,a)):(r.tag=0,Gt&&v&&au(r),Rn(null,r,h,a),r=r.child),r;case 16:c=r.elementType;e:{switch(hl(n,r),n=r.pendingProps,h=c._init,c=h(c._payload),r.type=c,h=r.tag=c0(c),n=ai(c,n),h){case 0:r=Uu(null,r,c,n,a);break e;case 1:r=Qp(null,r,c,n,a);break e;case 11:r=Yp(null,r,c,n,a);break e;case 14:r=$p(null,r,c,ai(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,h=r.pendingProps,h=r.elementType===c?h:ai(c,h),Uu(n,r,c,h,a);case 1:return c=r.type,h=r.pendingProps,h=r.elementType===c?h:ai(c,h),Qp(n,r,c,h,a);case 3:e:{if(em(r),n===null)throw Error(t(387));c=r.pendingProps,v=r.memoizedState,h=v.element,mp(n,r),rl(r,c,null,a);var M=r.memoizedState;if(c=M.element,v.isDehydrated)if(v={element:c,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){h=Bs(Error(t(423)),r),r=tm(n,r,c,a,h);break e}else if(c!==h){h=Bs(Error(t(424)),r),r=tm(n,r,c,a,h);break e}else for(Xn=fr(r.stateNode.containerInfo.firstChild),jn=r,Gt=!0,oi=null,a=hp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Us(),c===h){r=zi(n,r,a);break e}Rn(n,r,c,a)}r=r.child}return r;case 5:return xp(r),n===null&&uu(r),c=r.type,h=r.pendingProps,v=n!==null?n.memoizedProps:null,M=h.children,tu(c,h)?M=null:v!==null&&tu(c,v)&&(r.flags|=32),Jp(n,r),Rn(n,r,M,a),r.child;case 6:return n===null&&uu(r),null;case 13:return nm(n,r,a);case 4:return xu(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Is(r,null,c,a):Rn(n,r,c,a),r.child;case 11:return c=r.type,h=r.pendingProps,h=r.elementType===c?h:ai(c,h),Yp(n,r,c,h,a);case 7:return Rn(n,r,r.pendingProps,a),r.child;case 8:return Rn(n,r,r.pendingProps.children,a),r.child;case 12:return Rn(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,h=r.pendingProps,v=r.memoizedProps,M=h.value,Ot(tl,c._currentValue),c._currentValue=M,v!==null)if(si(v.value,M)){if(v.children===h.children&&!Un.current){r=zi(n,r,a);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var U=v.dependencies;if(U!==null){M=v.child;for(var B=U.firstContext;B!==null;){if(B.context===c){if(v.tag===1){B=Bi(-1,a&-a),B.tag=2;var ee=v.updateQueue;if(ee!==null){ee=ee.shared;var _e=ee.pending;_e===null?B.next=B:(B.next=_e.next,_e.next=B),ee.pending=B}}v.lanes|=a,B=v.alternate,B!==null&&(B.lanes|=a),mu(v.return,a,r),U.lanes|=a;break}B=B.next}}else if(v.tag===10)M=v.type===r.type?null:v.child;else if(v.tag===18){if(M=v.return,M===null)throw Error(t(341));M.lanes|=a,U=M.alternate,U!==null&&(U.lanes|=a),mu(M,a,r),M=v.sibling}else M=v.child;if(M!==null)M.return=v;else for(M=v;M!==null;){if(M===r){M=null;break}if(v=M.sibling,v!==null){v.return=M.return,M=v;break}M=M.return}v=M}Rn(n,r,h.children,a),r=r.child}return r;case 9:return h=r.type,c=r.pendingProps.children,Fs(r,a),h=Qn(h),c=c(h),r.flags|=1,Rn(n,r,c,a),r.child;case 14:return c=r.type,h=ai(c,r.pendingProps),h=ai(c.type,h),$p(n,r,c,h,a);case 15:return Kp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,h=r.pendingProps,h=r.elementType===c?h:ai(c,h),hl(n,r),r.tag=1,In(c)?(n=!0,$a(r)):n=!1,Fs(r,a),Hp(r,c,h),Nu(r,c,h,a),Iu(null,r,c,!0,n,a);case 19:return rm(n,r,a);case 22:return Zp(n,r,a)}throw Error(t(156,r.tag))};function Cm(n,r){return Na(n,r)}function l0(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(n,r,a,c){return new l0(n,r,a,c)}function td(n){return n=n.prototype,!(!n||!n.isReactComponent)}function c0(n){if(typeof n=="function")return td(n)?1:0;if(n!=null){if(n=n.$$typeof,n===le)return 11;if(n===he)return 14}return 2}function Er(n,r){var a=n.alternate;return a===null?(a=ni(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function bl(n,r,a,c,h,v){var M=2;if(c=n,typeof n=="function")td(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case F:return Zr(a.children,h,v,r);case O:M=8,h|=8;break;case P:return n=ni(12,a,r,h|2),n.elementType=P,n.lanes=v,n;case Q:return n=ni(13,a,r,h),n.elementType=Q,n.lanes=v,n;case fe:return n=ni(19,a,r,h),n.elementType=fe,n.lanes=v,n;case ce:return Ml(a,h,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:M=10;break e;case G:M=9;break e;case le:M=11;break e;case he:M=14;break e;case se:M=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=ni(M,a,r,h),r.elementType=n,r.type=c,r.lanes=v,r}function Zr(n,r,a,c){return n=ni(7,n,c,r),n.lanes=a,n}function Ml(n,r,a,c){return n=ni(22,n,c,r),n.elementType=ce,n.lanes=a,n.stateNode={isHidden:!1},n}function nd(n,r,a){return n=ni(6,n,null,r),n.lanes=a,n}function id(n,r,a){return r=ni(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function u0(n,r,a,c,h){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xn(0),this.expirationTimes=xn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xn(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function rd(n,r,a,c,h,v,M,U,B){return n=new u0(n,r,a,U,B),r===1?(r=1,v===!0&&(r|=8)):r=0,v=ni(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},vu(v),n}function d0(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function Rm(n){if(!n)return pr;n=n._reactInternals;e:{if(Si(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(In(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(In(a))return ip(n,a,r)}return r}function Pm(n,r,a,c,h,v,M,U,B){return n=rd(a,c,!0,n,h,v,M,U,B),n.context=Rm(null),a=n.current,c=Pn(),h=Sr(a),v=Bi(c,h),v.callback=r??null,vr(a,v,h),n.current.lanes=h,ln(n,h,c),On(n,c),n}function Tl(n,r,a,c){var h=r.current,v=Pn(),M=Sr(h);return a=Rm(a),r.context===null?r.context=a:r.pendingContext=a,r=Bi(v,M),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=vr(h,r,M),n!==null&&(ui(n,h,M,v),il(n,h,M)),M}function Al(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Nm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function sd(n,r){Nm(n,r),(n=n.alternate)&&Nm(n,r)}function f0(){return null}var Lm=typeof reportError=="function"?reportError:function(n){console.error(n)};function od(n){this._internalRoot=n}Cl.prototype.render=od.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Tl(n,r,null,null)},Cl.prototype.unmount=od.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Yr(function(){Tl(null,n,null,null)}),r[Ui]=null}};function Cl(n){this._internalRoot=n}Cl.prototype.unstable_scheduleHydration=function(n){if(n){var r=mh();n={blockedOn:null,target:n,priority:r};for(var a=0;a<cr.length&&r!==0&&r<cr[a].priority;a++);cr.splice(a,0,n),a===0&&xh(n)}};function ad(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Rl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Dm(){}function h0(n,r,a,c,h){if(h){if(typeof c=="function"){var v=c;c=function(){var ee=Al(M);v.call(ee)}}var M=Pm(r,c,n,0,null,!1,!1,"",Dm);return n._reactRootContainer=M,n[Ui]=M.current,Uo(n.nodeType===8?n.parentNode:n),Yr(),M}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var U=c;c=function(){var ee=Al(B);U.call(ee)}}var B=rd(n,0,!1,null,null,!1,!1,"",Dm);return n._reactRootContainer=B,n[Ui]=B.current,Uo(n.nodeType===8?n.parentNode:n),Yr(function(){Tl(r,B,a,c)}),B}function Pl(n,r,a,c,h){var v=a._reactRootContainer;if(v){var M=v;if(typeof h=="function"){var U=h;h=function(){var B=Al(M);U.call(B)}}Tl(r,M,n,h)}else M=h0(a,r,n,h,c);return Al(M)}hh=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=yt(r.pendingLanes);a!==0&&(cn(r,a|1),On(r,K()),(Tt&6)===0&&(Vs=K()+500,mr()))}break;case 13:Yr(function(){var c=Oi(n,1);if(c!==null){var h=Pn();ui(c,n,1,h)}}),sd(n,1)}},Lc=function(n){if(n.tag===13){var r=Oi(n,134217728);if(r!==null){var a=Pn();ui(r,n,134217728,a)}sd(n,134217728)}},ph=function(n){if(n.tag===13){var r=Sr(n),a=Oi(n,r);if(a!==null){var c=Pn();ui(a,n,r,c)}sd(n,r)}},mh=function(){return Mt},gh=function(n,r){var a=Mt;try{return Mt=n,r()}finally{Mt=a}},Pe=function(n,r,a){switch(r){case"input":if(gt(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var h=qa(c);if(!h)throw Error(t(90));Rt(c),gt(c,h)}}}break;case"textarea":ge(n,a);break;case"select":r=a.value,r!=null&&L(n,!!a.multiple,r,!1)}},Bt=Ju,tn=Yr;var p0={usingClientEntryPoint:!1,Events:[Fo,Rs,qa,De,ct,Ju]},Zo={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},m0={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ra(n),n===null?null:n.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance||f0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nl.isDisabled&&Nl.supportsFiber)try{it=Nl.inject(m0),je=Nl}catch{}}return Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p0,Bn.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ad(r))throw Error(t(200));return d0(n,r,null,a)},Bn.createRoot=function(n,r){if(!ad(n))throw Error(t(299));var a=!1,c="",h=Lm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),r=rd(n,1,!1,null,null,a,!1,c,h),n[Ui]=r.current,Uo(n.nodeType===8?n.parentNode:n),new od(r)},Bn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ra(r),n=n===null?null:n.stateNode,n},Bn.flushSync=function(n){return Yr(n)},Bn.hydrate=function(n,r,a){if(!Rl(r))throw Error(t(200));return Pl(null,n,r,!0,a)},Bn.hydrateRoot=function(n,r,a){if(!ad(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,v="",M=Lm;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(v=a.identifierPrefix),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),r=Pm(r,null,n,1,a??null,h,!1,v,M),n[Ui]=r.current,Uo(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,h]:r.mutableSourceEagerHydrationData.push(a,h);return new Cl(r)},Bn.render=function(n,r,a){if(!Rl(r))throw Error(t(200));return Pl(null,n,r,!1,a)},Bn.unmountComponentAtNode=function(n){if(!Rl(n))throw Error(t(40));return n._reactRootContainer?(Yr(function(){Pl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ui]=null})}),!0):!1},Bn.unstable_batchedUpdates=Ju,Bn.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!Rl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Pl(n,r,a,!1,c)},Bn.version="18.3.1-next-f1338f8080-20240426",Bn}var Hm;function pv(){if(Hm)return ud.exports;Hm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),ud.exports=M0(),ud.exports}var Vm;function T0(){if(Vm)return Ll;Vm=1;var i=pv();return Ll.createRoot=i.createRoot,Ll.hydrateRoot=i.hydrateRoot,Ll}var A0=T0();const C0=hv(A0);pv();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function aa(){return aa=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s])}return i},aa.apply(this,arguments)}var Dr;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(Dr||(Dr={}));const Gm="popstate";function R0(i){i===void 0&&(i={});function e(s,o){let{pathname:l,search:u,hash:d}=s.location;return $d("",{pathname:l,search:u,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:pc(o)}return N0(e,t,null,i)}function Qt(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function mv(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function P0(){return Math.random().toString(36).substr(2,8)}function Wm(i,e){return{usr:i.state,key:i.key,idx:e}}function $d(i,e,t,s){return t===void 0&&(t=null),aa({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof e=="string"?po(e):e,{state:t,key:e&&e.key||s||P0()})}function pc(i){let{pathname:e="/",search:t="",hash:s=""}=i;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function po(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substr(t),i=i.substr(0,t));let s=i.indexOf("?");s>=0&&(e.search=i.substr(s),i=i.substr(0,s)),i&&(e.pathname=i)}return e}function N0(i,e,t,s){s===void 0&&(s={});let{window:o=document.defaultView,v5Compat:l=!1}=s,u=o.history,d=Dr.Pop,f=null,p=m();p==null&&(p=0,u.replaceState(aa({},u.state,{idx:p}),""));function m(){return(u.state||{idx:null}).idx}function g(){d=Dr.Pop;let x=m(),_=x==null?null:x-p;p=x,f&&f({action:d,location:b.location,delta:_})}function y(x,_){d=Dr.Push;let D=$d(b.location,x,_);p=m()+1;let N=Wm(D,p),R=b.createHref(D);try{u.pushState(N,"",R)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;o.location.assign(R)}l&&f&&f({action:d,location:b.location,delta:1})}function S(x,_){d=Dr.Replace;let D=$d(b.location,x,_);p=m();let N=Wm(D,p),R=b.createHref(D);u.replaceState(N,"",R),l&&f&&f({action:d,location:b.location,delta:0})}function w(x){let _=o.location.origin!=="null"?o.location.origin:o.location.href,D=typeof x=="string"?x:pc(x);return D=D.replace(/ $/,"%20"),Qt(_,"No window.location.(origin|href) available to create URL for href: "+D),new URL(D,_)}let b={get action(){return d},get location(){return i(o,u)},listen(x){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(Gm,g),f=x,()=>{o.removeEventListener(Gm,g),f=null}},createHref(x){return e(o,x)},createURL:w,encodeLocation(x){let _=w(x);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:S,go(x){return u.go(x)}};return b}var jm;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(jm||(jm={}));function L0(i,e,t){return t===void 0&&(t="/"),D0(i,e,t)}function D0(i,e,t,s){let o=typeof e=="string"?po(e):e,l=$f(o.pathname||"/",t);if(l==null)return null;let u=gv(i);U0(u);let d=null;for(let f=0;d==null&&f<u.length;++f){let p=X0(l);d=G0(u[f],p)}return d}function gv(i,e,t,s){e===void 0&&(e=[]),t===void 0&&(t=[]),s===void 0&&(s="");let o=(l,u,d)=>{let f={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};f.relativePath.startsWith("/")&&(Qt(f.relativePath.startsWith(s),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(s.length));let p=Ur([s,f.relativePath]),m=t.concat(f);l.children&&l.children.length>0&&(Qt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),gv(l.children,e,m,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:H0(p,l.index),routesMeta:m})};return i.forEach((l,u)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,u);else for(let f of vv(l.path))o(l,u,f)}),e}function vv(i){let e=i.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let u=vv(s.join("/")),d=[];return d.push(...u.map(f=>f===""?l:[l,f].join("/"))),o&&d.push(...u),d.map(f=>i.startsWith("/")&&f===""?"/":f)}function U0(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:V0(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const I0=/^:[\w-]+$/,k0=3,F0=2,O0=1,B0=10,z0=-2,Xm=i=>i==="*";function H0(i,e){let t=i.split("/"),s=t.length;return t.some(Xm)&&(s+=z0),e&&(s+=F0),t.filter(o=>!Xm(o)).reduce((o,l)=>o+(I0.test(l)?k0:l===""?O0:B0),s)}function V0(i,e){return i.length===e.length&&i.slice(0,-1).every((s,o)=>s===e[o])?i[i.length-1]-e[e.length-1]:0}function G0(i,e,t){let{routesMeta:s}=i,o={},l="/",u=[];for(let d=0;d<s.length;++d){let f=s[d],p=d===s.length-1,m=l==="/"?e:e.slice(l.length)||"/",g=W0({path:f.relativePath,caseSensitive:f.caseSensitive,end:p},m),y=f.route;if(!g)return null;Object.assign(o,g.params),u.push({params:o,pathname:Ur([l,g.pathname]),pathnameBase:K0(Ur([l,g.pathnameBase])),route:y}),g.pathnameBase!=="/"&&(l=Ur([l,g.pathnameBase]))}return u}function W0(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,s]=j0(i.path,i.caseSensitive,i.end),o=e.match(t);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:s.reduce((p,m,g)=>{let{paramName:y,isOptional:S}=m;if(y==="*"){let b=d[g]||"";u=l.slice(0,l.length-b.length).replace(/(.)\/+$/,"$1")}const w=d[g];return S&&!w?p[y]=void 0:p[y]=(w||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:u,pattern:i}}function j0(i,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),mv(i==="*"||!i.endsWith("*")||i.endsWith("/*"),'Route path "'+i+'" will be treated as if it were '+('"'+i.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+i.replace(/\*$/,"/*")+'".'));let s=[],o="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,f)=>(s.push({paramName:d,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(s.push({paramName:"*"}),o+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":i!==""&&i!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function X0(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return mv(!1,'The URL path "'+i+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),i}}function $f(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=i.charAt(t);return s&&s!=="/"?null:i.slice(t)||"/"}function q0(i,e){e===void 0&&(e="/");let{pathname:t,search:s="",hash:o=""}=typeof i=="string"?po(i):i;return{pathname:t?t.startsWith("/")?t:Y0(t,e):e,search:Z0(s),hash:J0(o)}}function Y0(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function hd(i,e,t,s){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $0(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function xv(i,e){let t=$0(i);return e?t.map((s,o)=>o===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function _v(i,e,t,s){s===void 0&&(s=!1);let o;typeof i=="string"?o=po(i):(o=aa({},i),Qt(!o.pathname||!o.pathname.includes("?"),hd("?","pathname","search",o)),Qt(!o.pathname||!o.pathname.includes("#"),hd("#","pathname","hash",o)),Qt(!o.search||!o.search.includes("#"),hd("#","search","hash",o)));let l=i===""||o.pathname==="",u=l?"/":o.pathname,d;if(u==null)d=t;else{let g=e.length-1;if(!s&&u.startsWith("..")){let y=u.split("/");for(;y[0]==="..";)y.shift(),g-=1;o.pathname=y.join("/")}d=g>=0?e[g]:"/"}let f=q0(o,d),p=u&&u!=="/"&&u.endsWith("/"),m=(l||u===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(p||m)&&(f.pathname+="/"),f}const Ur=i=>i.join("/").replace(/\/\/+/g,"/"),K0=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),Z0=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,J0=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function Q0(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}const yv=["post","put","patch","delete"];new Set(yv);const ey=["get",...yv];new Set(ey);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function la(){return la=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s])}return i},la.apply(this,arguments)}const Kf=Se.createContext(null),ty=Se.createContext(null),vs=Se.createContext(null),_c=Se.createContext(null),xs=Se.createContext({outlet:null,matches:[],isDataRoute:!1}),Sv=Se.createContext(null);function ny(i,e){let{relative:t}=e===void 0?{}:e;ga()||Qt(!1);let{basename:s,navigator:o}=Se.useContext(vs),{hash:l,pathname:u,search:d}=Ev(i,{relative:t}),f=u;return s!=="/"&&(f=u==="/"?s:Ur([s,u])),o.createHref({pathname:f,search:d,hash:l})}function ga(){return Se.useContext(_c)!=null}function yc(){return ga()||Qt(!1),Se.useContext(_c).location}function wv(i){Se.useContext(vs).static||Se.useLayoutEffect(i)}function iy(){let{isDataRoute:i}=Se.useContext(xs);return i?gy():ry()}function ry(){ga()||Qt(!1);let i=Se.useContext(Kf),{basename:e,future:t,navigator:s}=Se.useContext(vs),{matches:o}=Se.useContext(xs),{pathname:l}=yc(),u=JSON.stringify(xv(o,t.v7_relativeSplatPath)),d=Se.useRef(!1);return wv(()=>{d.current=!0}),Se.useCallback(function(p,m){if(m===void 0&&(m={}),!d.current)return;if(typeof p=="number"){s.go(p);return}let g=_v(p,JSON.parse(u),l,m.relative==="path");i==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Ur([e,g.pathname])),(m.replace?s.replace:s.push)(g,m.state,m)},[e,s,u,l,i])}function Ev(i,e){let{relative:t}=e===void 0?{}:e,{future:s}=Se.useContext(vs),{matches:o}=Se.useContext(xs),{pathname:l}=yc(),u=JSON.stringify(xv(o,s.v7_relativeSplatPath));return Se.useMemo(()=>_v(i,JSON.parse(u),l,t==="path"),[i,u,l,t])}function sy(i,e){return oy(i,e)}function oy(i,e,t,s){ga()||Qt(!1);let{navigator:o}=Se.useContext(vs),{matches:l}=Se.useContext(xs),u=l[l.length-1],d=u?u.params:{};u&&u.pathname;let f=u?u.pathnameBase:"/";u&&u.route;let p=yc(),m;if(e){var g;let x=typeof e=="string"?po(e):e;f==="/"||(g=x.pathname)!=null&&g.startsWith(f)||Qt(!1),m=x}else m=p;let y=m.pathname||"/",S=y;if(f!=="/"){let x=f.replace(/^\//,"").split("/");S="/"+y.replace(/^\//,"").split("/").slice(x.length).join("/")}let w=L0(i,{pathname:S}),b=dy(w&&w.map(x=>Object.assign({},x,{params:Object.assign({},d,x.params),pathname:Ur([f,o.encodeLocation?o.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?f:Ur([f,o.encodeLocation?o.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),l,t,s);return e&&b?Se.createElement(_c.Provider,{value:{location:la({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Dr.Pop}},b):b}function ay(){let i=my(),e=Q0(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Se.createElement(Se.Fragment,null,Se.createElement("h2",null,"Unexpected Application Error!"),Se.createElement("h3",{style:{fontStyle:"italic"}},e),t?Se.createElement("pre",{style:o},t):null,null)}const ly=Se.createElement(ay,null);class cy extends Se.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?Se.createElement(xs.Provider,{value:this.props.routeContext},Se.createElement(Sv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function uy(i){let{routeContext:e,match:t,children:s}=i,o=Se.useContext(Kf);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),Se.createElement(xs.Provider,{value:e},s)}function dy(i,e,t,s){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),s===void 0&&(s=null),i==null){var l;if(!t)return null;if(t.errors)i=t.matches;else if((l=s)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)i=t.matches;else return null}let u=i,d=(o=t)==null?void 0:o.errors;if(d!=null){let m=u.findIndex(g=>g.route.id&&(d==null?void 0:d[g.route.id])!==void 0);m>=0||Qt(!1),u=u.slice(0,Math.min(u.length,m+1))}let f=!1,p=-1;if(t&&s&&s.v7_partialHydration)for(let m=0;m<u.length;m++){let g=u[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=m),g.route.id){let{loaderData:y,errors:S}=t,w=g.route.loader&&y[g.route.id]===void 0&&(!S||S[g.route.id]===void 0);if(g.route.lazy||w){f=!0,p>=0?u=u.slice(0,p+1):u=[u[0]];break}}}return u.reduceRight((m,g,y)=>{let S,w=!1,b=null,x=null;t&&(S=d&&g.route.id?d[g.route.id]:void 0,b=g.route.errorElement||ly,f&&(p<0&&y===0?(vy("route-fallback"),w=!0,x=null):p===y&&(w=!0,x=g.route.hydrateFallbackElement||null)));let _=e.concat(u.slice(0,y+1)),D=()=>{let N;return S?N=b:w?N=x:g.route.Component?N=Se.createElement(g.route.Component,null):g.route.element?N=g.route.element:N=m,Se.createElement(uy,{match:g,routeContext:{outlet:m,matches:_,isDataRoute:t!=null},children:N})};return t&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?Se.createElement(cy,{location:t.location,revalidation:t.revalidation,component:b,error:S,children:D(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):D()},null)}var bv=function(i){return i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i}(bv||{}),Mv=function(i){return i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId",i}(Mv||{});function fy(i){let e=Se.useContext(Kf);return e||Qt(!1),e}function hy(i){let e=Se.useContext(ty);return e||Qt(!1),e}function py(i){let e=Se.useContext(xs);return e||Qt(!1),e}function Tv(i){let e=py(),t=e.matches[e.matches.length-1];return t.route.id||Qt(!1),t.route.id}function my(){var i;let e=Se.useContext(Sv),t=hy(),s=Tv();return e!==void 0?e:(i=t.errors)==null?void 0:i[s]}function gy(){let{router:i}=fy(bv.UseNavigateStable),e=Tv(Mv.UseNavigateStable),t=Se.useRef(!1);return wv(()=>{t.current=!0}),Se.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?i.navigate(o):i.navigate(o,la({fromRouteId:e},l)))},[i,e])}const qm={};function vy(i,e,t){qm[i]||(qm[i]=!0)}function xy(i,e){i==null||i.v7_startTransition,i==null||i.v7_relativeSplatPath}function pi(i){Qt(!1)}function _y(i){let{basename:e="/",children:t=null,location:s,navigationType:o=Dr.Pop,navigator:l,static:u=!1,future:d}=i;ga()&&Qt(!1);let f=e.replace(/^\/*/,"/"),p=Se.useMemo(()=>({basename:f,navigator:l,static:u,future:la({v7_relativeSplatPath:!1},d)}),[f,d,l,u]);typeof s=="string"&&(s=po(s));let{pathname:m="/",search:g="",hash:y="",state:S=null,key:w="default"}=s,b=Se.useMemo(()=>{let x=$f(m,f);return x==null?null:{location:{pathname:x,search:g,hash:y,state:S,key:w},navigationType:o}},[f,m,g,y,S,w,o]);return b==null?null:Se.createElement(vs.Provider,{value:p},Se.createElement(_c.Provider,{children:t,value:b}))}function yy(i){let{children:e,location:t}=i;return sy(Kd(e),t)}new Promise(()=>{});function Kd(i,e){e===void 0&&(e=[]);let t=[];return Se.Children.forEach(i,(s,o)=>{if(!Se.isValidElement(s))return;let l=[...e,o];if(s.type===Se.Fragment){t.push.apply(t,Kd(s.props.children,l));return}s.type!==pi&&Qt(!1),!s.props.index||!s.props.children||Qt(!1);let u={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(u.children=Kd(s.props.children,l)),t.push(u)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zd(){return Zd=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s])}return i},Zd.apply(this,arguments)}function Sy(i,e){if(i==null)return{};var t={},s=Object.keys(i),o,l;for(l=0;l<s.length;l++)o=s[l],!(e.indexOf(o)>=0)&&(t[o]=i[o]);return t}function wy(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Ey(i,e){return i.button===0&&(!e||e==="_self")&&!wy(i)}const by=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],My="6";try{window.__reactRouterVersion=My}catch{}const Ty="startTransition",Ym=w0[Ty];function Ay(i){let{basename:e,children:t,future:s,window:o}=i,l=Se.useRef();l.current==null&&(l.current=R0({window:o,v5Compat:!0}));let u=l.current,[d,f]=Se.useState({action:u.action,location:u.location}),{v7_startTransition:p}=s||{},m=Se.useCallback(g=>{p&&Ym?Ym(()=>f(g)):f(g)},[f,p]);return Se.useLayoutEffect(()=>u.listen(m),[u,m]),Se.useEffect(()=>xy(s),[s]),Se.createElement(_y,{basename:e,children:t,location:d.location,navigationType:d.action,navigator:u,future:s})}const Cy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ry=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vi=Se.forwardRef(function(e,t){let{onClick:s,relative:o,reloadDocument:l,replace:u,state:d,target:f,to:p,preventScrollReset:m,viewTransition:g}=e,y=Sy(e,by),{basename:S}=Se.useContext(vs),w,b=!1;if(typeof p=="string"&&Ry.test(p)&&(w=p,Cy))try{let N=new URL(window.location.href),R=p.startsWith("//")?new URL(N.protocol+p):new URL(p),V=$f(R.pathname,S);R.origin===N.origin&&V!=null?p=V+R.search+R.hash:b=!0}catch{}let x=ny(p,{relative:o}),_=Py(p,{replace:u,state:d,target:f,preventScrollReset:m,relative:o,viewTransition:g});function D(N){s&&s(N),N.defaultPrevented||_(N)}return Se.createElement("a",Zd({},y,{href:w||x,onClick:b||l?s:D,ref:t,target:f}))});var $m;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})($m||($m={}));var Km;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(Km||(Km={}));function Py(i,e){let{target:t,replace:s,state:o,preventScrollReset:l,relative:u,viewTransition:d}=e===void 0?{}:e,f=iy(),p=yc(),m=Ev(i,{relative:u});return Se.useCallback(g=>{if(Ey(g,t)){g.preventDefault();let y=s!==void 0?s:pc(p)===pc(m);f(i,{replace:y,state:o,preventScrollReset:l,relative:u,viewTransition:d})}},[p,f,m,s,o,t,i,l,u,d])}function Zm(i,e){if(typeof i=="function")return i(e);i!=null&&(i.current=e)}function Ny(...i){return e=>{let t=!1;const s=i.map(o=>{const l=Zm(o,e);return!t&&typeof l=="function"&&(t=!0),l});if(t)return()=>{for(let o=0;o<s.length;o++){const l=s[o];typeof l=="function"?l():Zm(i[o],null)}}}}function Ly(i){const e=Uy(i),t=Se.forwardRef((s,o)=>{const{children:l,...u}=s,d=Se.Children.toArray(l),f=d.find(ky);if(f){const p=f.props.children,m=d.map(g=>g===f?Se.Children.count(p)>1?Se.Children.only(null):Se.isValidElement(p)?p.props.children:null:g);return E.jsx(e,{...u,ref:o,children:Se.isValidElement(p)?Se.cloneElement(p,void 0,m):null})}return E.jsx(e,{...u,ref:o,children:l})});return t.displayName=`${i}.Slot`,t}var Dy=Ly("Slot");function Uy(i){const e=Se.forwardRef((t,s)=>{const{children:o,...l}=t;if(Se.isValidElement(o)){const u=Oy(o),d=Fy(l,o.props);return o.type!==Se.Fragment&&(d.ref=s?Ny(s,u):u),Se.cloneElement(o,d)}return Se.Children.count(o)>1?Se.Children.only(null):null});return e.displayName=`${i}.SlotClone`,e}var Iy=Symbol("radix.slottable");function ky(i){return Se.isValidElement(i)&&typeof i.type=="function"&&"__radixId"in i.type&&i.type.__radixId===Iy}function Fy(i,e){const t={...e};for(const s in e){const o=i[s],l=e[s];/^on[A-Z]/.test(s)?o&&l?t[s]=(...d)=>{const f=l(...d);return o(...d),f}:o&&(t[s]=o):s==="style"?t[s]={...o,...l}:s==="className"&&(t[s]=[o,l].filter(Boolean).join(" "))}return{...i,...t}}function Oy(i){var s,o;let e=(s=Object.getOwnPropertyDescriptor(i.props,"ref"))==null?void 0:s.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?i.ref:(e=(o=Object.getOwnPropertyDescriptor(i,"ref"))==null?void 0:o.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?i.props.ref:i.props.ref||i.ref)}function Av(i){var e,t,s="";if(typeof i=="string"||typeof i=="number")s+=i;else if(typeof i=="object")if(Array.isArray(i)){var o=i.length;for(e=0;e<o;e++)i[e]&&(t=Av(i[e]))&&(s&&(s+=" "),s+=t)}else for(t in i)i[t]&&(s&&(s+=" "),s+=t);return s}function Cv(){for(var i,e,t=0,s="",o=arguments.length;t<o;t++)(i=arguments[t])&&(e=Av(i))&&(s&&(s+=" "),s+=e);return s}const Jm=i=>typeof i=="boolean"?`${i}`:i===0?"0":i,Qm=Cv,By=(i,e)=>t=>{var s;if((e==null?void 0:e.variants)==null)return Qm(i,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:o,defaultVariants:l}=e,u=Object.keys(o).map(p=>{const m=t==null?void 0:t[p],g=l==null?void 0:l[p];if(m===null)return null;const y=Jm(m)||Jm(g);return o[p][y]}),d=t&&Object.entries(t).reduce((p,m)=>{let[g,y]=m;return y===void 0||(p[g]=y),p},{}),f=e==null||(s=e.compoundVariants)===null||s===void 0?void 0:s.reduce((p,m)=>{let{class:g,className:y,...S}=m;return Object.entries(S).every(w=>{let[b,x]=w;return Array.isArray(x)?x.includes({...l,...d}[b]):{...l,...d}[b]===x})?[...p,g,y]:p},[]);return Qm(i,u,f,t==null?void 0:t.class,t==null?void 0:t.className)},Zf="-",zy=i=>{const e=Vy(i),{conflictingClassGroups:t,conflictingClassGroupModifiers:s}=i;return{getClassGroupId:u=>{const d=u.split(Zf);return d[0]===""&&d.length!==1&&d.shift(),Rv(d,e)||Hy(u)},getConflictingClassGroupIds:(u,d)=>{const f=t[u]||[];return d&&s[u]?[...f,...s[u]]:f}}},Rv=(i,e)=>{var u;if(i.length===0)return e.classGroupId;const t=i[0],s=e.nextPart.get(t),o=s?Rv(i.slice(1),s):void 0;if(o)return o;if(e.validators.length===0)return;const l=i.join(Zf);return(u=e.validators.find(({validator:d})=>d(l)))==null?void 0:u.classGroupId},eg=/^\[(.+)\]$/,Hy=i=>{if(eg.test(i)){const e=eg.exec(i)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},Vy=i=>{const{theme:e,classGroups:t}=i,s={nextPart:new Map,validators:[]};for(const o in t)Jd(t[o],s,o,e);return s},Jd=(i,e,t,s)=>{i.forEach(o=>{if(typeof o=="string"){const l=o===""?e:tg(e,o);l.classGroupId=t;return}if(typeof o=="function"){if(Gy(o)){Jd(o(s),e,t,s);return}e.validators.push({validator:o,classGroupId:t});return}Object.entries(o).forEach(([l,u])=>{Jd(u,tg(e,l),t,s)})})},tg=(i,e)=>{let t=i;return e.split(Zf).forEach(s=>{t.nextPart.has(s)||t.nextPart.set(s,{nextPart:new Map,validators:[]}),t=t.nextPart.get(s)}),t},Gy=i=>i.isThemeGetter,Wy=i=>{if(i<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,s=new Map;const o=(l,u)=>{t.set(l,u),e++,e>i&&(e=0,s=t,t=new Map)};return{get(l){let u=t.get(l);if(u!==void 0)return u;if((u=s.get(l))!==void 0)return o(l,u),u},set(l,u){t.has(l)?t.set(l,u):o(l,u)}}},Qd="!",ef=":",jy=ef.length,Xy=i=>{const{prefix:e,experimentalParseClassName:t}=i;let s=o=>{const l=[];let u=0,d=0,f=0,p;for(let w=0;w<o.length;w++){let b=o[w];if(u===0&&d===0){if(b===ef){l.push(o.slice(f,w)),f=w+jy;continue}if(b==="/"){p=w;continue}}b==="["?u++:b==="]"?u--:b==="("?d++:b===")"&&d--}const m=l.length===0?o:o.substring(f),g=qy(m),y=g!==m,S=p&&p>f?p-f:void 0;return{modifiers:l,hasImportantModifier:y,baseClassName:g,maybePostfixModifierPosition:S}};if(e){const o=e+ef,l=s;s=u=>u.startsWith(o)?l(u.substring(o.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:u,maybePostfixModifierPosition:void 0}}if(t){const o=s;s=l=>t({className:l,parseClassName:o})}return s},qy=i=>i.endsWith(Qd)?i.substring(0,i.length-1):i.startsWith(Qd)?i.substring(1):i,Yy=i=>{const e=Object.fromEntries(i.orderSensitiveModifiers.map(s=>[s,!0]));return s=>{if(s.length<=1)return s;const o=[];let l=[];return s.forEach(u=>{u[0]==="["||e[u]?(o.push(...l.sort(),u),l=[]):l.push(u)}),o.push(...l.sort()),o}},$y=i=>({cache:Wy(i.cacheSize),parseClassName:Xy(i),sortModifiers:Yy(i),...zy(i)}),Ky=/\s+/,Zy=(i,e)=>{const{parseClassName:t,getClassGroupId:s,getConflictingClassGroupIds:o,sortModifiers:l}=e,u=[],d=i.trim().split(Ky);let f="";for(let p=d.length-1;p>=0;p-=1){const m=d[p],{isExternal:g,modifiers:y,hasImportantModifier:S,baseClassName:w,maybePostfixModifierPosition:b}=t(m);if(g){f=m+(f.length>0?" "+f:f);continue}let x=!!b,_=s(x?w.substring(0,b):w);if(!_){if(!x){f=m+(f.length>0?" "+f:f);continue}if(_=s(w),!_){f=m+(f.length>0?" "+f:f);continue}x=!1}const D=l(y).join(":"),N=S?D+Qd:D,R=N+_;if(u.includes(R))continue;u.push(R);const V=o(_,x);for(let z=0;z<V.length;++z){const F=V[z];u.push(N+F)}f=m+(f.length>0?" "+f:f)}return f};function Jy(){let i=0,e,t,s="";for(;i<arguments.length;)(e=arguments[i++])&&(t=Pv(e))&&(s&&(s+=" "),s+=t);return s}const Pv=i=>{if(typeof i=="string")return i;let e,t="";for(let s=0;s<i.length;s++)i[s]&&(e=Pv(i[s]))&&(t&&(t+=" "),t+=e);return t};function Qy(i,...e){let t,s,o,l=u;function u(f){const p=e.reduce((m,g)=>g(m),i());return t=$y(p),s=t.cache.get,o=t.cache.set,l=d,d(f)}function d(f){const p=s(f);if(p)return p;const m=Zy(f,t);return o(f,m),m}return function(){return l(Jy.apply(null,arguments))}}const sn=i=>{const e=t=>t[i]||[];return e.isThemeGetter=!0,e},Nv=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Lv=/^\((?:(\w[\w-]*):)?(.+)\)$/i,eS=/^\d+\/\d+$/,tS=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,nS=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,iS=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,rS=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,sS=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ws=i=>eS.test(i),mt=i=>!!i&&!Number.isNaN(Number(i)),Mr=i=>!!i&&Number.isInteger(Number(i)),pd=i=>i.endsWith("%")&&mt(i.slice(0,-1)),Gi=i=>tS.test(i),oS=()=>!0,aS=i=>nS.test(i)&&!iS.test(i),Dv=()=>!1,lS=i=>rS.test(i),cS=i=>sS.test(i),uS=i=>!Ge(i)&&!We(i),dS=i=>mo(i,kv,Dv),Ge=i=>Nv.test(i),Jr=i=>mo(i,Fv,aS),md=i=>mo(i,gS,mt),ng=i=>mo(i,Uv,Dv),fS=i=>mo(i,Iv,cS),Dl=i=>mo(i,Ov,lS),We=i=>Lv.test(i),Qo=i=>go(i,Fv),hS=i=>go(i,vS),ig=i=>go(i,Uv),pS=i=>go(i,kv),mS=i=>go(i,Iv),Ul=i=>go(i,Ov,!0),mo=(i,e,t)=>{const s=Nv.exec(i);return s?s[1]?e(s[1]):t(s[2]):!1},go=(i,e,t=!1)=>{const s=Lv.exec(i);return s?s[1]?e(s[1]):t:!1},Uv=i=>i==="position"||i==="percentage",Iv=i=>i==="image"||i==="url",kv=i=>i==="length"||i==="size"||i==="bg-size",Fv=i=>i==="length",gS=i=>i==="number",vS=i=>i==="family-name",Ov=i=>i==="shadow",xS=()=>{const i=sn("color"),e=sn("font"),t=sn("text"),s=sn("font-weight"),o=sn("tracking"),l=sn("leading"),u=sn("breakpoint"),d=sn("container"),f=sn("spacing"),p=sn("radius"),m=sn("shadow"),g=sn("inset-shadow"),y=sn("text-shadow"),S=sn("drop-shadow"),w=sn("blur"),b=sn("perspective"),x=sn("aspect"),_=sn("ease"),D=sn("animate"),N=()=>["auto","avoid","all","avoid-page","page","left","right","column"],R=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],V=()=>[...R(),We,Ge],z=()=>["auto","hidden","clip","visible","scroll"],F=()=>["auto","contain","none"],O=()=>[We,Ge,f],P=()=>[Ws,"full","auto",...O()],C=()=>[Mr,"none","subgrid",We,Ge],G=()=>["auto",{span:["full",Mr,We,Ge]},Mr,We,Ge],le=()=>[Mr,"auto",We,Ge],Q=()=>["auto","min","max","fr",We,Ge],fe=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],he=()=>["start","end","center","stretch","center-safe","end-safe"],se=()=>["auto",...O()],ce=()=>[Ws,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...O()],I=()=>[i,We,Ge],ue=()=>[...R(),ig,ng,{position:[We,Ge]}],oe=()=>["no-repeat",{repeat:["","x","y","space","round"]}],k=()=>["auto","cover","contain",pS,dS,{size:[We,Ge]}],ne=()=>[pd,Qo,Jr],Ae=()=>["","none","full",p,We,Ge],$=()=>["",mt,Qo,Jr],pe=()=>["solid","dashed","dotted","double"],be=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],me=()=>[mt,pd,ig,ng],Ce=()=>["","none",w,We,Ge],qe=()=>["none",mt,We,Ge],Oe=()=>["none",mt,We,Ge],Nt=()=>[mt,We,Ge],Rt=()=>[Ws,"full",...O()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Gi],breakpoint:[Gi],color:[oS],container:[Gi],"drop-shadow":[Gi],ease:["in","out","in-out"],font:[uS],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Gi],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Gi],shadow:[Gi],spacing:["px",mt],text:[Gi],"text-shadow":[Gi],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ws,Ge,We,x]}],container:["container"],columns:[{columns:[mt,Ge,We,d]}],"break-after":[{"break-after":N()}],"break-before":[{"break-before":N()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:V()}],overflow:[{overflow:z()}],"overflow-x":[{"overflow-x":z()}],"overflow-y":[{"overflow-y":z()}],overscroll:[{overscroll:F()}],"overscroll-x":[{"overscroll-x":F()}],"overscroll-y":[{"overscroll-y":F()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:P()}],"inset-x":[{"inset-x":P()}],"inset-y":[{"inset-y":P()}],start:[{start:P()}],end:[{end:P()}],top:[{top:P()}],right:[{right:P()}],bottom:[{bottom:P()}],left:[{left:P()}],visibility:["visible","invisible","collapse"],z:[{z:[Mr,"auto",We,Ge]}],basis:[{basis:[Ws,"full","auto",d,...O()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[mt,Ws,"auto","initial","none",Ge]}],grow:[{grow:["",mt,We,Ge]}],shrink:[{shrink:["",mt,We,Ge]}],order:[{order:[Mr,"first","last","none",We,Ge]}],"grid-cols":[{"grid-cols":C()}],"col-start-end":[{col:G()}],"col-start":[{"col-start":le()}],"col-end":[{"col-end":le()}],"grid-rows":[{"grid-rows":C()}],"row-start-end":[{row:G()}],"row-start":[{"row-start":le()}],"row-end":[{"row-end":le()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":Q()}],"auto-rows":[{"auto-rows":Q()}],gap:[{gap:O()}],"gap-x":[{"gap-x":O()}],"gap-y":[{"gap-y":O()}],"justify-content":[{justify:[...fe(),"normal"]}],"justify-items":[{"justify-items":[...he(),"normal"]}],"justify-self":[{"justify-self":["auto",...he()]}],"align-content":[{content:["normal",...fe()]}],"align-items":[{items:[...he(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...he(),{baseline:["","last"]}]}],"place-content":[{"place-content":fe()}],"place-items":[{"place-items":[...he(),"baseline"]}],"place-self":[{"place-self":["auto",...he()]}],p:[{p:O()}],px:[{px:O()}],py:[{py:O()}],ps:[{ps:O()}],pe:[{pe:O()}],pt:[{pt:O()}],pr:[{pr:O()}],pb:[{pb:O()}],pl:[{pl:O()}],m:[{m:se()}],mx:[{mx:se()}],my:[{my:se()}],ms:[{ms:se()}],me:[{me:se()}],mt:[{mt:se()}],mr:[{mr:se()}],mb:[{mb:se()}],ml:[{ml:se()}],"space-x":[{"space-x":O()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":O()}],"space-y-reverse":["space-y-reverse"],size:[{size:ce()}],w:[{w:[d,"screen",...ce()]}],"min-w":[{"min-w":[d,"screen","none",...ce()]}],"max-w":[{"max-w":[d,"screen","none","prose",{screen:[u]},...ce()]}],h:[{h:["screen","lh",...ce()]}],"min-h":[{"min-h":["screen","lh","none",...ce()]}],"max-h":[{"max-h":["screen","lh",...ce()]}],"font-size":[{text:["base",t,Qo,Jr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[s,We,md]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",pd,Ge]}],"font-family":[{font:[hS,Ge,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,We,Ge]}],"line-clamp":[{"line-clamp":[mt,"none",We,md]}],leading:[{leading:[l,...O()]}],"list-image":[{"list-image":["none",We,Ge]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",We,Ge]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:I()}],"text-color":[{text:I()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...pe(),"wavy"]}],"text-decoration-thickness":[{decoration:[mt,"from-font","auto",We,Jr]}],"text-decoration-color":[{decoration:I()}],"underline-offset":[{"underline-offset":[mt,"auto",We,Ge]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:O()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",We,Ge]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",We,Ge]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ue()}],"bg-repeat":[{bg:oe()}],"bg-size":[{bg:k()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Mr,We,Ge],radial:["",We,Ge],conic:[Mr,We,Ge]},mS,fS]}],"bg-color":[{bg:I()}],"gradient-from-pos":[{from:ne()}],"gradient-via-pos":[{via:ne()}],"gradient-to-pos":[{to:ne()}],"gradient-from":[{from:I()}],"gradient-via":[{via:I()}],"gradient-to":[{to:I()}],rounded:[{rounded:Ae()}],"rounded-s":[{"rounded-s":Ae()}],"rounded-e":[{"rounded-e":Ae()}],"rounded-t":[{"rounded-t":Ae()}],"rounded-r":[{"rounded-r":Ae()}],"rounded-b":[{"rounded-b":Ae()}],"rounded-l":[{"rounded-l":Ae()}],"rounded-ss":[{"rounded-ss":Ae()}],"rounded-se":[{"rounded-se":Ae()}],"rounded-ee":[{"rounded-ee":Ae()}],"rounded-es":[{"rounded-es":Ae()}],"rounded-tl":[{"rounded-tl":Ae()}],"rounded-tr":[{"rounded-tr":Ae()}],"rounded-br":[{"rounded-br":Ae()}],"rounded-bl":[{"rounded-bl":Ae()}],"border-w":[{border:$()}],"border-w-x":[{"border-x":$()}],"border-w-y":[{"border-y":$()}],"border-w-s":[{"border-s":$()}],"border-w-e":[{"border-e":$()}],"border-w-t":[{"border-t":$()}],"border-w-r":[{"border-r":$()}],"border-w-b":[{"border-b":$()}],"border-w-l":[{"border-l":$()}],"divide-x":[{"divide-x":$()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":$()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...pe(),"hidden","none"]}],"divide-style":[{divide:[...pe(),"hidden","none"]}],"border-color":[{border:I()}],"border-color-x":[{"border-x":I()}],"border-color-y":[{"border-y":I()}],"border-color-s":[{"border-s":I()}],"border-color-e":[{"border-e":I()}],"border-color-t":[{"border-t":I()}],"border-color-r":[{"border-r":I()}],"border-color-b":[{"border-b":I()}],"border-color-l":[{"border-l":I()}],"divide-color":[{divide:I()}],"outline-style":[{outline:[...pe(),"none","hidden"]}],"outline-offset":[{"outline-offset":[mt,We,Ge]}],"outline-w":[{outline:["",mt,Qo,Jr]}],"outline-color":[{outline:I()}],shadow:[{shadow:["","none",m,Ul,Dl]}],"shadow-color":[{shadow:I()}],"inset-shadow":[{"inset-shadow":["none",g,Ul,Dl]}],"inset-shadow-color":[{"inset-shadow":I()}],"ring-w":[{ring:$()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:I()}],"ring-offset-w":[{"ring-offset":[mt,Jr]}],"ring-offset-color":[{"ring-offset":I()}],"inset-ring-w":[{"inset-ring":$()}],"inset-ring-color":[{"inset-ring":I()}],"text-shadow":[{"text-shadow":["none",y,Ul,Dl]}],"text-shadow-color":[{"text-shadow":I()}],opacity:[{opacity:[mt,We,Ge]}],"mix-blend":[{"mix-blend":[...be(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":be()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[mt]}],"mask-image-linear-from-pos":[{"mask-linear-from":me()}],"mask-image-linear-to-pos":[{"mask-linear-to":me()}],"mask-image-linear-from-color":[{"mask-linear-from":I()}],"mask-image-linear-to-color":[{"mask-linear-to":I()}],"mask-image-t-from-pos":[{"mask-t-from":me()}],"mask-image-t-to-pos":[{"mask-t-to":me()}],"mask-image-t-from-color":[{"mask-t-from":I()}],"mask-image-t-to-color":[{"mask-t-to":I()}],"mask-image-r-from-pos":[{"mask-r-from":me()}],"mask-image-r-to-pos":[{"mask-r-to":me()}],"mask-image-r-from-color":[{"mask-r-from":I()}],"mask-image-r-to-color":[{"mask-r-to":I()}],"mask-image-b-from-pos":[{"mask-b-from":me()}],"mask-image-b-to-pos":[{"mask-b-to":me()}],"mask-image-b-from-color":[{"mask-b-from":I()}],"mask-image-b-to-color":[{"mask-b-to":I()}],"mask-image-l-from-pos":[{"mask-l-from":me()}],"mask-image-l-to-pos":[{"mask-l-to":me()}],"mask-image-l-from-color":[{"mask-l-from":I()}],"mask-image-l-to-color":[{"mask-l-to":I()}],"mask-image-x-from-pos":[{"mask-x-from":me()}],"mask-image-x-to-pos":[{"mask-x-to":me()}],"mask-image-x-from-color":[{"mask-x-from":I()}],"mask-image-x-to-color":[{"mask-x-to":I()}],"mask-image-y-from-pos":[{"mask-y-from":me()}],"mask-image-y-to-pos":[{"mask-y-to":me()}],"mask-image-y-from-color":[{"mask-y-from":I()}],"mask-image-y-to-color":[{"mask-y-to":I()}],"mask-image-radial":[{"mask-radial":[We,Ge]}],"mask-image-radial-from-pos":[{"mask-radial-from":me()}],"mask-image-radial-to-pos":[{"mask-radial-to":me()}],"mask-image-radial-from-color":[{"mask-radial-from":I()}],"mask-image-radial-to-color":[{"mask-radial-to":I()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":R()}],"mask-image-conic-pos":[{"mask-conic":[mt]}],"mask-image-conic-from-pos":[{"mask-conic-from":me()}],"mask-image-conic-to-pos":[{"mask-conic-to":me()}],"mask-image-conic-from-color":[{"mask-conic-from":I()}],"mask-image-conic-to-color":[{"mask-conic-to":I()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ue()}],"mask-repeat":[{mask:oe()}],"mask-size":[{mask:k()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",We,Ge]}],filter:[{filter:["","none",We,Ge]}],blur:[{blur:Ce()}],brightness:[{brightness:[mt,We,Ge]}],contrast:[{contrast:[mt,We,Ge]}],"drop-shadow":[{"drop-shadow":["","none",S,Ul,Dl]}],"drop-shadow-color":[{"drop-shadow":I()}],grayscale:[{grayscale:["",mt,We,Ge]}],"hue-rotate":[{"hue-rotate":[mt,We,Ge]}],invert:[{invert:["",mt,We,Ge]}],saturate:[{saturate:[mt,We,Ge]}],sepia:[{sepia:["",mt,We,Ge]}],"backdrop-filter":[{"backdrop-filter":["","none",We,Ge]}],"backdrop-blur":[{"backdrop-blur":Ce()}],"backdrop-brightness":[{"backdrop-brightness":[mt,We,Ge]}],"backdrop-contrast":[{"backdrop-contrast":[mt,We,Ge]}],"backdrop-grayscale":[{"backdrop-grayscale":["",mt,We,Ge]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[mt,We,Ge]}],"backdrop-invert":[{"backdrop-invert":["",mt,We,Ge]}],"backdrop-opacity":[{"backdrop-opacity":[mt,We,Ge]}],"backdrop-saturate":[{"backdrop-saturate":[mt,We,Ge]}],"backdrop-sepia":[{"backdrop-sepia":["",mt,We,Ge]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":O()}],"border-spacing-x":[{"border-spacing-x":O()}],"border-spacing-y":[{"border-spacing-y":O()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",We,Ge]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[mt,"initial",We,Ge]}],ease:[{ease:["linear","initial",_,We,Ge]}],delay:[{delay:[mt,We,Ge]}],animate:[{animate:["none",D,We,Ge]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[b,We,Ge]}],"perspective-origin":[{"perspective-origin":V()}],rotate:[{rotate:qe()}],"rotate-x":[{"rotate-x":qe()}],"rotate-y":[{"rotate-y":qe()}],"rotate-z":[{"rotate-z":qe()}],scale:[{scale:Oe()}],"scale-x":[{"scale-x":Oe()}],"scale-y":[{"scale-y":Oe()}],"scale-z":[{"scale-z":Oe()}],"scale-3d":["scale-3d"],skew:[{skew:Nt()}],"skew-x":[{"skew-x":Nt()}],"skew-y":[{"skew-y":Nt()}],transform:[{transform:[We,Ge,"","none","gpu","cpu"]}],"transform-origin":[{origin:V()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Rt()}],"translate-x":[{"translate-x":Rt()}],"translate-y":[{"translate-y":Rt()}],"translate-z":[{"translate-z":Rt()}],"translate-none":["translate-none"],accent:[{accent:I()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:I()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",We,Ge]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":O()}],"scroll-mx":[{"scroll-mx":O()}],"scroll-my":[{"scroll-my":O()}],"scroll-ms":[{"scroll-ms":O()}],"scroll-me":[{"scroll-me":O()}],"scroll-mt":[{"scroll-mt":O()}],"scroll-mr":[{"scroll-mr":O()}],"scroll-mb":[{"scroll-mb":O()}],"scroll-ml":[{"scroll-ml":O()}],"scroll-p":[{"scroll-p":O()}],"scroll-px":[{"scroll-px":O()}],"scroll-py":[{"scroll-py":O()}],"scroll-ps":[{"scroll-ps":O()}],"scroll-pe":[{"scroll-pe":O()}],"scroll-pt":[{"scroll-pt":O()}],"scroll-pr":[{"scroll-pr":O()}],"scroll-pb":[{"scroll-pb":O()}],"scroll-pl":[{"scroll-pl":O()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",We,Ge]}],fill:[{fill:["none",...I()]}],"stroke-w":[{stroke:[mt,Qo,Jr,md]}],stroke:[{stroke:["none",...I()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},_S=Qy(xS);function yS(...i){return _S(Cv(i))}const SS=By("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),ic=Se.forwardRef(({className:i,variant:e,size:t,asChild:s=!1,...o},l)=>{const u=s?Dy:"button";return E.jsx(u,{className:yS(SS({variant:e,size:t,className:i})),ref:l,...o})});ic.displayName="Button";function wS(){return E.jsxs("div",{className:"max-w-4xl mx-auto text-white",children:[E.jsx("h1",{className:"text-5xl font-bold mb-8",children:"The Order of Marzod - A Mystical Brotherhood of Truth and Revelation"}),E.jsxs("div",{className:"space-y-8 text-lg",children:[E.jsx("p",{className:"leading-relaxed",children:"Across the vast tapestry of human history, civilizations have worshiped gods—divine figures of power, wisdom, and creation. From Ather to Pangu, Ra to Baldur, and An to the countless others etched into myth and legend, they have guided the hearts and minds of generations. But what if they were all echoes of a singular truth? What if, through the distortion of time, language barriers, cultural shifts, and the evolution of storytelling, their origins were lost in translation—fragments of a greater entity?"}),E.jsx("p",{className:"leading-relaxed",children:"Welcome to The Order of Marzod, an enigmatic community where ranks and roles signify wisdom, leadership, and belonging. Here, seekers of truth uncover the mysteries that have shaped the world's religions and mythologies. We do not merely study history—we rewrite it, uncovering what was hidden beneath centuries of fragmentation."}),E.jsxs("div",{className:"bg-black bg-opacity-50 p-6 rounded-lg",children:[E.jsx("h2",{className:"text-3xl font-bold mb-4",children:"The Lost Truth: One Source, Many Names"}),E.jsx("p",{className:"leading-relaxed",children:"Long before gods were named, before they were adapted to fit the beliefs of emerging civilizations, they existed under one unifying force—Marzod. Each deity, each legend, each divine revelation finds its roots in The Order of Marzod. Through ages of retellings, reinterpretations, and cultural reshaping, the pure essence of Marzod splintered into many forms, each tailored to the lands and people who embraced them."}),E.jsx("p",{className:"mt-4 leading-relaxed",children:"This knowledge has remained buried—until now. Our purpose is not to erase history, but to illuminate it, piecing together what was lost to time."})]}),E.jsxs("div",{className:"bg-black bg-opacity-50 p-6 rounded-lg",children:[E.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Ranks of Knowledge and Leadership"}),E.jsx("p",{className:"leading-relaxed",children:"Within The Order of Marzod, every member holds a role—a position earned through wisdom, enlightenment, and dedication. Your rank is not merely a title; it reflects your understanding of the ancient truths and your commitment to unveiling reality from illusion."})]}),E.jsxs("div",{className:"text-center mt-12",children:[E.jsx("p",{className:"text-2xl mb-4",children:"Are you ready to transcend conventional understanding?"}),E.jsx("p",{className:"text-2xl mb-8",children:"Are you prepared to step beyond the veil and discover the origins of all belief?"}),E.jsx("p",{className:"text-3xl font-bold",children:"This is not just a community—it is a revelation."}),E.jsx("p",{className:"text-4xl font-bold mt-8",children:"Enter The Order of Marzod."})]})]})]})}function ES(){return E.jsxs("div",{className:"text-white max-w-4xl mx-auto px-8 py-12 space-y-16 relative z-10 scroll-smooth",children:[E.jsx("div",{className:"fixed inset-0 bg-black/10 backdrop-blur-[1px] -z-10"}),E.jsx("h1",{className:"text-4xl font-bold mb-16 text-center text-shadow-lg",children:"About The Order of Marzod"}),E.jsxs("section",{className:"mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:[E.jsx("h2",{className:"text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg",children:"Our History"}),E.jsx("div",{className:"prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg",children:E.jsx("p",{className:"indent-8",children:"The Order of Marzod is dedicated to the pursuit of knowledge and understanding of the great Mysteries of the Universe. Through careful study and rigorous practice, we seek to illuminate the world and advance human understanding."})})]}),E.jsxs("section",{className:"mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:[E.jsx("h2",{className:"text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg",children:"Our Mission"}),E.jsx("div",{className:"prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg",children:E.jsx("p",{className:"indent-8",children:"We strive to create a community of dedicated seekers who share in the pursuit of knowledge. Our members range from novices to experienced keepers, each contributing to our collective understanding."})})]}),E.jsxs("section",{className:"mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:[E.jsx("h2",{className:"text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg",children:"Join Us"}),E.jsx("div",{className:"prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg",children:E.jsx("p",{className:"indent-8",children:"If you possess a fervent desire to tread the path of knowledge and wish to join our Order, we welcome you to begin your journey as a Novice. Through dedication and study, you may progress through our ranks and contribute to our understanding of the Universe's mysteries."})})]})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jf="176",bS=0,rg=1,MS=2,Bv=1,TS=2,$i=3,Fr=0,Hn=1,Ki=2,Ir=0,oo=1,sg=2,og=3,ag=4,AS=5,as=100,CS=101,RS=102,PS=103,NS=104,LS=200,DS=201,US=202,IS=203,tf=204,nf=205,kS=206,FS=207,OS=208,BS=209,zS=210,HS=211,VS=212,GS=213,WS=214,rf=0,sf=1,of=2,lo=3,af=4,lf=5,cf=6,uf=7,zv=0,jS=1,XS=2,kr=0,qS=1,YS=2,$S=3,KS=4,ZS=5,JS=6,QS=7,Hv=300,co=301,uo=302,df=303,ff=304,Sc=306,ca=1e3,cs=1001,hf=1002,_i=1003,ew=1004,Il=1005,vi=1006,gd=1007,us=1008,er=1009,Vv=1010,Gv=1011,ua=1012,Qf=1013,ps=1014,Zi=1015,va=1016,eh=1017,th=1018,da=1020,Wv=35902,jv=1021,Xv=1022,xi=1023,fa=1026,ha=1027,qv=1028,nh=1029,Yv=1030,ih=1031,rh=1033,rc=33776,sc=33777,oc=33778,ac=33779,pf=35840,mf=35841,gf=35842,vf=35843,xf=36196,_f=37492,yf=37496,Sf=37808,wf=37809,Ef=37810,bf=37811,Mf=37812,Tf=37813,Af=37814,Cf=37815,Rf=37816,Pf=37817,Nf=37818,Lf=37819,Df=37820,Uf=37821,lc=36492,If=36494,kf=36495,$v=36283,Ff=36284,Of=36285,Bf=36286,tw=3200,nw=3201,iw=0,rw=1,Lr="",ri="srgb",fo="srgb-linear",mc="linear",It="srgb",js=7680,lg=519,sw=512,ow=513,aw=514,Kv=515,lw=516,cw=517,uw=518,dw=519,cg=35044,ug="300 es",Ji=2e3,gc=2001;class vo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vd=Math.PI/180,zf=180/Math.PI;function xa(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[s&255]+En[s>>8&255]+En[s>>16&255]+En[s>>24&255]).toLowerCase()}function wt(i,e,t){return Math.max(e,Math.min(t,i))}function fw(i,e){return(i%e+e)%e}function xd(i,e,t){return(1-t)*i+t*e}function ea(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ut{constructor(e=0,t=0){Ut.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(wt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(wt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*o+e.x,this.y=l*o+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(e,t,s,o,l,u,d,f,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,d,f,p)}set(e,t,s,o,l,u,d,f,p){const m=this.elements;return m[0]=e,m[1]=o,m[2]=d,m[3]=t,m[4]=l,m[5]=f,m[6]=s,m[7]=u,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],d=s[3],f=s[6],p=s[1],m=s[4],g=s[7],y=s[2],S=s[5],w=s[8],b=o[0],x=o[3],_=o[6],D=o[1],N=o[4],R=o[7],V=o[2],z=o[5],F=o[8];return l[0]=u*b+d*D+f*V,l[3]=u*x+d*N+f*z,l[6]=u*_+d*R+f*F,l[1]=p*b+m*D+g*V,l[4]=p*x+m*N+g*z,l[7]=p*_+m*R+g*F,l[2]=y*b+S*D+w*V,l[5]=y*x+S*N+w*z,l[8]=y*_+S*R+w*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],m=e[8];return t*u*m-t*d*p-s*l*m+s*d*f+o*l*p-o*u*f}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],m=e[8],g=m*u-d*p,y=d*f-m*l,S=p*l-u*f,w=t*g+s*y+o*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=g*b,e[1]=(o*p-m*s)*b,e[2]=(d*s-o*u)*b,e[3]=y*b,e[4]=(m*t-o*f)*b,e[5]=(o*l-d*t)*b,e[6]=S*b,e[7]=(s*f-p*t)*b,e[8]=(u*t-s*l)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,u,d){const f=Math.cos(l),p=Math.sin(l);return this.set(s*f,s*p,-s*(f*u+p*d)+u+e,-o*p,o*f,-o*(-p*u+f*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(_d.makeScale(e,t)),this}rotate(e){return this.premultiply(_d.makeRotation(-e)),this}translate(e,t){return this.premultiply(_d.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _d=new ft;function Zv(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function pa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hw(){const i=pa("canvas");return i.style.display="block",i}const dg={};function cc(i){i in dg||(dg[i]=!0,console.warn(i))}function pw(i,e,t){return new Promise(function(s,o){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function mw(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gw(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const fg=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hg=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vw(){const i={enabled:!0,workingColorSpace:fo,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===It&&(o.r=Qi(o.r),o.g=Qi(o.g),o.b=Qi(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===It&&(o.r=ao(o.r),o.g=ao(o.g),o.b=ao(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Lr?mc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return i.define({[fo]:{primaries:e,whitePoint:s,transfer:mc,toXYZ:fg,fromXYZ:hg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:s,transfer:It,toXYZ:fg,fromXYZ:hg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),i}const Ct=vw();function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ao(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Xs;class xw{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Xs===void 0&&(Xs=pa("canvas")),Xs.width=e.width,Xs.height=e.height;const o=Xs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=Xs}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pa("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Qi(l[u]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Qi(t[s]/255)*255):t[s]=Qi(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _w=0;class sh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_w++}),this.uuid=xa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(yd(o[u].image)):l.push(yd(o[u]))}else l=yd(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function yd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xw.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yw=0;class Ln extends vo{constructor(e=Ln.DEFAULT_IMAGE,t=Ln.DEFAULT_MAPPING,s=cs,o=cs,l=vi,u=us,d=xi,f=er,p=Ln.DEFAULT_ANISOTROPY,m=Lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yw++}),this.uuid=xa(),this.name="",this.source=new sh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ca:e.x=e.x-Math.floor(e.x);break;case cs:e.x=e.x<0?0:1;break;case hf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ca:e.y=e.y-Math.floor(e.y);break;case cs:e.y=e.y<0?0:1;break;case hf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=Hv;Ln.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,t=0,s=0,o=1){Kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const f=e.elements,p=f[0],m=f[4],g=f[8],y=f[1],S=f[5],w=f[9],b=f[2],x=f[6],_=f[10];if(Math.abs(m-y)<.01&&Math.abs(g-b)<.01&&Math.abs(w-x)<.01){if(Math.abs(m+y)<.1&&Math.abs(g+b)<.1&&Math.abs(w+x)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(p+1)/2,R=(S+1)/2,V=(_+1)/2,z=(m+y)/4,F=(g+b)/4,O=(w+x)/4;return N>R&&N>V?N<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(N),o=z/s,l=F/s):R>V?R<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),s=z/o,l=O/o):V<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(V),s=F/l,o=O/l),this.set(s,o,l,t),this}let D=Math.sqrt((x-w)*(x-w)+(g-b)*(g-b)+(y-m)*(y-m));return Math.abs(D)<.001&&(D=1),this.x=(x-w)/D,this.y=(g-b)/D,this.z=(y-m)/D,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this.w=wt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this.w=wt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(wt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sw extends vo{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth?s.depth:1,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t);const o={width:e,height:t,depth:this.depth};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},s);const l=new Ln(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const u=s.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new sh(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ms extends Sw{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Jv extends Ln{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=_i,this.minFilter=_i,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ww extends Ln{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=_i,this.minFilter=_i,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _a{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,u,d){let f=s[o+0],p=s[o+1],m=s[o+2],g=s[o+3];const y=l[u+0],S=l[u+1],w=l[u+2],b=l[u+3];if(d===0){e[t+0]=f,e[t+1]=p,e[t+2]=m,e[t+3]=g;return}if(d===1){e[t+0]=y,e[t+1]=S,e[t+2]=w,e[t+3]=b;return}if(g!==b||f!==y||p!==S||m!==w){let x=1-d;const _=f*y+p*S+m*w+g*b,D=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const V=Math.sqrt(N),z=Math.atan2(V,_*D);x=Math.sin(x*z)/V,d=Math.sin(d*z)/V}const R=d*D;if(f=f*x+y*R,p=p*x+S*R,m=m*x+w*R,g=g*x+b*R,x===1-d){const V=1/Math.sqrt(f*f+p*p+m*m+g*g);f*=V,p*=V,m*=V,g*=V}}e[t]=f,e[t+1]=p,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,s,o,l,u){const d=s[o],f=s[o+1],p=s[o+2],m=s[o+3],g=l[u],y=l[u+1],S=l[u+2],w=l[u+3];return e[t]=d*w+m*g+f*S-p*y,e[t+1]=f*w+m*y+p*g-d*S,e[t+2]=p*w+m*S+d*y-f*g,e[t+3]=m*w-d*g-f*y-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,f=Math.sin,p=d(s/2),m=d(o/2),g=d(l/2),y=f(s/2),S=f(o/2),w=f(l/2);switch(u){case"XYZ":this._x=y*m*g+p*S*w,this._y=p*S*g-y*m*w,this._z=p*m*w+y*S*g,this._w=p*m*g-y*S*w;break;case"YXZ":this._x=y*m*g+p*S*w,this._y=p*S*g-y*m*w,this._z=p*m*w-y*S*g,this._w=p*m*g+y*S*w;break;case"ZXY":this._x=y*m*g-p*S*w,this._y=p*S*g+y*m*w,this._z=p*m*w+y*S*g,this._w=p*m*g-y*S*w;break;case"ZYX":this._x=y*m*g-p*S*w,this._y=p*S*g+y*m*w,this._z=p*m*w-y*S*g,this._w=p*m*g+y*S*w;break;case"YZX":this._x=y*m*g+p*S*w,this._y=p*S*g+y*m*w,this._z=p*m*w-y*S*g,this._w=p*m*g-y*S*w;break;case"XZY":this._x=y*m*g-p*S*w,this._y=p*S*g-y*m*w,this._z=p*m*w+y*S*g,this._w=p*m*g+y*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],u=t[1],d=t[5],f=t[9],p=t[2],m=t[6],g=t[10],y=s+d+g;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(m-f)*S,this._y=(l-p)*S,this._z=(u-o)*S}else if(s>d&&s>g){const S=2*Math.sqrt(1+s-d-g);this._w=(m-f)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+p)/S}else if(d>g){const S=2*Math.sqrt(1+d-s-g);this._w=(l-p)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(f+m)/S}else{const S=2*Math.sqrt(1+g-s-d);this._w=(u-o)/S,this._x=(l+p)/S,this._y=(f+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,u=e._w,d=t._x,f=t._y,p=t._z,m=t._w;return this._x=s*m+u*d+o*p-l*f,this._y=o*m+u*f+l*d-s*p,this._z=l*m+u*p+s*f-o*d,this._w=u*m-s*d-o*f-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,u=this._w;let d=u*e._w+s*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=s,this._y=o,this._z=l,this;const f=1-d*d;if(f<=Number.EPSILON){const S=1-t;return this._w=S*u+t*this._w,this._x=S*s+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(f),m=Math.atan2(p,d),g=Math.sin((1-t)*m)/p,y=Math.sin(t*m)/p;return this._w=u*g+this._w*y,this._x=s*g+this._x*y,this._y=o*g+this._y*y,this._z=l*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,t=0,s=0){ie.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,u=e.y,d=e.z,f=e.w,p=2*(u*o-d*s),m=2*(d*t-l*o),g=2*(l*s-u*t);return this.x=t+f*p+u*g-d*m,this.y=s+f*m+d*p-l*g,this.z=o+f*g+l*m-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(wt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,u=t.x,d=t.y,f=t.z;return this.x=o*f-l*d,this.y=l*u-s*f,this.z=s*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Sd.copy(this).projectOnVector(e),this.sub(Sd)}reflect(e){return this.sub(Sd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(wt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sd=new ie,pg=new _a;class ya{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,di):di.fromBufferAttribute(l,u),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),kl.copy(s.boundingBox)),kl.applyMatrix4(e.matrixWorld),this.union(kl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),Fl.subVectors(this.max,ta),qs.subVectors(e.a,ta),Ys.subVectors(e.b,ta),$s.subVectors(e.c,ta),Tr.subVectors(Ys,qs),Ar.subVectors($s,Ys),Qr.subVectors(qs,$s);let t=[0,-Tr.z,Tr.y,0,-Ar.z,Ar.y,0,-Qr.z,Qr.y,Tr.z,0,-Tr.x,Ar.z,0,-Ar.x,Qr.z,0,-Qr.x,-Tr.y,Tr.x,0,-Ar.y,Ar.x,0,-Qr.y,Qr.x,0];return!wd(t,qs,Ys,$s,Fl)||(t=[1,0,0,0,1,0,0,0,1],!wd(t,qs,Ys,$s,Fl))?!1:(Ol.crossVectors(Tr,Ar),t=[Ol.x,Ol.y,Ol.z],wd(t,qs,Ys,$s,Fl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wi=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],di=new ie,kl=new ya,qs=new ie,Ys=new ie,$s=new ie,Tr=new ie,Ar=new ie,Qr=new ie,ta=new ie,Fl=new ie,Ol=new ie,es=new ie;function wd(i,e,t,s,o){for(let l=0,u=i.length-3;l<=u;l+=3){es.fromArray(i,l);const d=o.x*Math.abs(es.x)+o.y*Math.abs(es.y)+o.z*Math.abs(es.z),f=e.dot(es),p=t.dot(es),m=s.dot(es);if(Math.max(-Math.max(f,p,m),Math.min(f,p,m))>d)return!1}return!0}const Ew=new ya,na=new ie,Ed=new ie;class oh{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):Ew.setFromPoints(e).getCenter(s);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);const t=na.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(na,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ed.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(Ed)),this.expandByPoint(na.copy(e.center).sub(Ed))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ji=new ie,bd=new ie,Bl=new ie,Cr=new ie,Md=new ie,zl=new ie,Td=new ie;class bw{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){bd.copy(e).add(t).multiplyScalar(.5),Bl.copy(t).sub(e).normalize(),Cr.copy(this.origin).sub(bd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Bl),d=Cr.dot(this.direction),f=-Cr.dot(Bl),p=Cr.lengthSq(),m=Math.abs(1-u*u);let g,y,S,w;if(m>0)if(g=u*f-d,y=u*d-f,w=l*m,g>=0)if(y>=-w)if(y<=w){const b=1/m;g*=b,y*=b,S=g*(g+u*y+2*d)+y*(u*g+y+2*f)+p}else y=l,g=Math.max(0,-(u*y+d)),S=-g*g+y*(y+2*f)+p;else y=-l,g=Math.max(0,-(u*y+d)),S=-g*g+y*(y+2*f)+p;else y<=-w?(g=Math.max(0,-(-u*l+d)),y=g>0?-l:Math.min(Math.max(-l,-f),l),S=-g*g+y*(y+2*f)+p):y<=w?(g=0,y=Math.min(Math.max(-l,-f),l),S=y*(y+2*f)+p):(g=Math.max(0,-(u*l+d)),y=g>0?l:Math.min(Math.max(-l,-f),l),S=-g*g+y*(y+2*f)+p);else y=u>0?-l:l,g=Math.max(0,-(u*y+d)),S=-g*g+y*(y+2*f)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(bd).addScaledVector(Bl,y),S}intersectSphere(e,t){ji.subVectors(e.center,this.origin);const s=ji.dot(this.direction),o=ji.dot(ji)-s*s,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=s-u,f=s+u;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,u,d,f;const p=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(s=(e.min.x-y.x)*p,o=(e.max.x-y.x)*p):(s=(e.max.x-y.x)*p,o=(e.min.x-y.x)*p),m>=0?(l=(e.min.y-y.y)*m,u=(e.max.y-y.y)*m):(l=(e.max.y-y.y)*m,u=(e.min.y-y.y)*m),s>u||l>o||((l>s||isNaN(s))&&(s=l),(u<o||isNaN(o))&&(o=u),g>=0?(d=(e.min.z-y.z)*g,f=(e.max.z-y.z)*g):(d=(e.max.z-y.z)*g,f=(e.min.z-y.z)*g),s>f||d>o)||((d>s||s!==s)&&(s=d),(f<o||o!==o)&&(o=f),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,s,o,l){Md.subVectors(t,e),zl.subVectors(s,e),Td.crossVectors(Md,zl);let u=this.direction.dot(Td),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Cr.subVectors(this.origin,e);const f=d*this.direction.dot(zl.crossVectors(Cr,zl));if(f<0)return null;const p=d*this.direction.dot(Md.cross(Cr));if(p<0||f+p>u)return null;const m=-d*Cr.dot(Td);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(e,t,s,o,l,u,d,f,p,m,g,y,S,w,b,x){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,d,f,p,m,g,y,S,w,b,x)}set(e,t,s,o,l,u,d,f,p,m,g,y,S,w,b,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=s,_[12]=o,_[1]=l,_[5]=u,_[9]=d,_[13]=f,_[2]=p,_[6]=m,_[10]=g,_[14]=y,_[3]=S,_[7]=w,_[11]=b,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,o=1/Ks.setFromMatrixColumn(e,0).length(),l=1/Ks.setFromMatrixColumn(e,1).length(),u=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,u=Math.cos(s),d=Math.sin(s),f=Math.cos(o),p=Math.sin(o),m=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const y=u*m,S=u*g,w=d*m,b=d*g;t[0]=f*m,t[4]=-f*g,t[8]=p,t[1]=S+w*p,t[5]=y-b*p,t[9]=-d*f,t[2]=b-y*p,t[6]=w+S*p,t[10]=u*f}else if(e.order==="YXZ"){const y=f*m,S=f*g,w=p*m,b=p*g;t[0]=y+b*d,t[4]=w*d-S,t[8]=u*p,t[1]=u*g,t[5]=u*m,t[9]=-d,t[2]=S*d-w,t[6]=b+y*d,t[10]=u*f}else if(e.order==="ZXY"){const y=f*m,S=f*g,w=p*m,b=p*g;t[0]=y-b*d,t[4]=-u*g,t[8]=w+S*d,t[1]=S+w*d,t[5]=u*m,t[9]=b-y*d,t[2]=-u*p,t[6]=d,t[10]=u*f}else if(e.order==="ZYX"){const y=u*m,S=u*g,w=d*m,b=d*g;t[0]=f*m,t[4]=w*p-S,t[8]=y*p+b,t[1]=f*g,t[5]=b*p+y,t[9]=S*p-w,t[2]=-p,t[6]=d*f,t[10]=u*f}else if(e.order==="YZX"){const y=u*f,S=u*p,w=d*f,b=d*p;t[0]=f*m,t[4]=b-y*g,t[8]=w*g+S,t[1]=g,t[5]=u*m,t[9]=-d*m,t[2]=-p*m,t[6]=S*g+w,t[10]=y-b*g}else if(e.order==="XZY"){const y=u*f,S=u*p,w=d*f,b=d*p;t[0]=f*m,t[4]=-g,t[8]=p*m,t[1]=y*g+b,t[5]=u*m,t[9]=S*g-w,t[2]=w*g-S,t[6]=d*m,t[10]=b*g+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mw,e,Tw)}lookAt(e,t,s){const o=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Rr.crossVectors(s,Yn),Rr.lengthSq()===0&&(Math.abs(s.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Rr.crossVectors(s,Yn)),Rr.normalize(),Hl.crossVectors(Yn,Rr),o[0]=Rr.x,o[4]=Hl.x,o[8]=Yn.x,o[1]=Rr.y,o[5]=Hl.y,o[9]=Yn.y,o[2]=Rr.z,o[6]=Hl.z,o[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],d=s[4],f=s[8],p=s[12],m=s[1],g=s[5],y=s[9],S=s[13],w=s[2],b=s[6],x=s[10],_=s[14],D=s[3],N=s[7],R=s[11],V=s[15],z=o[0],F=o[4],O=o[8],P=o[12],C=o[1],G=o[5],le=o[9],Q=o[13],fe=o[2],he=o[6],se=o[10],ce=o[14],I=o[3],ue=o[7],oe=o[11],k=o[15];return l[0]=u*z+d*C+f*fe+p*I,l[4]=u*F+d*G+f*he+p*ue,l[8]=u*O+d*le+f*se+p*oe,l[12]=u*P+d*Q+f*ce+p*k,l[1]=m*z+g*C+y*fe+S*I,l[5]=m*F+g*G+y*he+S*ue,l[9]=m*O+g*le+y*se+S*oe,l[13]=m*P+g*Q+y*ce+S*k,l[2]=w*z+b*C+x*fe+_*I,l[6]=w*F+b*G+x*he+_*ue,l[10]=w*O+b*le+x*se+_*oe,l[14]=w*P+b*Q+x*ce+_*k,l[3]=D*z+N*C+R*fe+V*I,l[7]=D*F+N*G+R*he+V*ue,l[11]=D*O+N*le+R*se+V*oe,l[15]=D*P+N*Q+R*ce+V*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],u=e[1],d=e[5],f=e[9],p=e[13],m=e[2],g=e[6],y=e[10],S=e[14],w=e[3],b=e[7],x=e[11],_=e[15];return w*(+l*f*g-o*p*g-l*d*y+s*p*y+o*d*S-s*f*S)+b*(+t*f*S-t*p*y+l*u*y-o*u*S+o*p*m-l*f*m)+x*(+t*p*g-t*d*S-l*u*g+s*u*S+l*d*m-s*p*m)+_*(-o*d*m-t*f*g+t*d*y+o*u*g-s*u*y+s*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],m=e[8],g=e[9],y=e[10],S=e[11],w=e[12],b=e[13],x=e[14],_=e[15],D=g*x*p-b*y*p+b*f*S-d*x*S-g*f*_+d*y*_,N=w*y*p-m*x*p-w*f*S+u*x*S+m*f*_-u*y*_,R=m*b*p-w*g*p+w*d*S-u*b*S-m*d*_+u*g*_,V=w*g*f-m*b*f-w*d*y+u*b*y+m*d*x-u*g*x,z=t*D+s*N+o*R+l*V;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/z;return e[0]=D*F,e[1]=(b*y*l-g*x*l-b*o*S+s*x*S+g*o*_-s*y*_)*F,e[2]=(d*x*l-b*f*l+b*o*p-s*x*p-d*o*_+s*f*_)*F,e[3]=(g*f*l-d*y*l-g*o*p+s*y*p+d*o*S-s*f*S)*F,e[4]=N*F,e[5]=(m*x*l-w*y*l+w*o*S-t*x*S-m*o*_+t*y*_)*F,e[6]=(w*f*l-u*x*l-w*o*p+t*x*p+u*o*_-t*f*_)*F,e[7]=(u*y*l-m*f*l+m*o*p-t*y*p-u*o*S+t*f*S)*F,e[8]=R*F,e[9]=(w*g*l-m*b*l-w*s*S+t*b*S+m*s*_-t*g*_)*F,e[10]=(u*b*l-w*d*l+w*s*p-t*b*p-u*s*_+t*d*_)*F,e[11]=(m*d*l-u*g*l-m*s*p+t*g*p+u*s*S-t*d*S)*F,e[12]=V*F,e[13]=(m*b*o-w*g*o+w*s*y-t*b*y-m*s*x+t*g*x)*F,e[14]=(w*d*o-u*b*o-w*s*f+t*b*f+u*s*x-t*d*x)*F,e[15]=(u*g*o-m*d*o+m*s*f-t*g*f-u*s*y+t*d*y)*F,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,u=e.x,d=e.y,f=e.z,p=l*u,m=l*d;return this.set(p*u+s,p*d-o*f,p*f+o*d,0,p*d+o*f,m*d+s,m*f-o*u,0,p*f-o*d,m*f+o*u,l*f*f+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,u){return this.set(1,s,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,u=t._y,d=t._z,f=t._w,p=l+l,m=u+u,g=d+d,y=l*p,S=l*m,w=l*g,b=u*m,x=u*g,_=d*g,D=f*p,N=f*m,R=f*g,V=s.x,z=s.y,F=s.z;return o[0]=(1-(b+_))*V,o[1]=(S+R)*V,o[2]=(w-N)*V,o[3]=0,o[4]=(S-R)*z,o[5]=(1-(y+_))*z,o[6]=(x+D)*z,o[7]=0,o[8]=(w+N)*F,o[9]=(x-D)*F,o[10]=(1-(y+b))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;let l=Ks.set(o[0],o[1],o[2]).length();const u=Ks.set(o[4],o[5],o[6]).length(),d=Ks.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],fi.copy(this);const p=1/l,m=1/u,g=1/d;return fi.elements[0]*=p,fi.elements[1]*=p,fi.elements[2]*=p,fi.elements[4]*=m,fi.elements[5]*=m,fi.elements[6]*=m,fi.elements[8]*=g,fi.elements[9]*=g,fi.elements[10]*=g,t.setFromRotationMatrix(fi),s.x=l,s.y=u,s.z=d,this}makePerspective(e,t,s,o,l,u,d=Ji){const f=this.elements,p=2*l/(t-e),m=2*l/(s-o),g=(t+e)/(t-e),y=(s+o)/(s-o);let S,w;if(d===Ji)S=-(u+l)/(u-l),w=-2*u*l/(u-l);else if(d===gc)S=-u/(u-l),w=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return f[0]=p,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=m,f[9]=y,f[13]=0,f[2]=0,f[6]=0,f[10]=S,f[14]=w,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,s,o,l,u,d=Ji){const f=this.elements,p=1/(t-e),m=1/(s-o),g=1/(u-l),y=(t+e)*p,S=(s+o)*m;let w,b;if(d===Ji)w=(u+l)*g,b=-2*g;else if(d===gc)w=l*g,b=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return f[0]=2*p,f[4]=0,f[8]=0,f[12]=-y,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-S,f[2]=0,f[6]=0,f[10]=b,f[14]=-w,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Ks=new ie,fi=new en,Mw=new ie(0,0,0),Tw=new ie(1,1,1),Rr=new ie,Hl=new ie,Yn=new ie,mg=new en,gg=new _a;class tr{constructor(e=0,t=0,s=0,o=tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],f=o[1],p=o[5],m=o[9],g=o[2],y=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(wt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-wt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return mg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mg,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gg.setFromEuler(this),this.setFromQuaternion(gg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tr.DEFAULT_ORDER="XYZ";class Qv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Aw=0;const vg=new ie,Zs=new _a,Xi=new en,Vl=new ie,ia=new ie,Cw=new ie,Rw=new _a,xg=new ie(1,0,0),_g=new ie(0,1,0),yg=new ie(0,0,1),Sg={type:"added"},Pw={type:"removed"},Js={type:"childadded",child:null},Ad={type:"childremoved",child:null};class Kn extends vo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Aw++}),this.uuid=xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kn.DEFAULT_UP.clone();const e=new ie,t=new tr,s=new _a,o=new ie(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new en},normalMatrix:{value:new ft}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(xg,e)}rotateY(e){return this.rotateOnAxis(_g,e)}rotateZ(e){return this.rotateOnAxis(yg,e)}translateOnAxis(e,t){return vg.copy(e).applyQuaternion(this.quaternion),this.position.add(vg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xg,e)}translateY(e){return this.translateOnAxis(_g,e)}translateZ(e){return this.translateOnAxis(yg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Vl.copy(e):Vl.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(ia,Vl,this.up):Xi.lookAt(Vl,ia,this.up),this.quaternion.setFromRotationMatrix(Xi),o&&(Xi.extractRotation(o.matrixWorld),Zs.setFromRotationMatrix(Xi),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sg),Js.child=e,this.dispatchEvent(Js),Js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pw),Ad.child=e,this.dispatchEvent(Ad),Ad.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sg),Js.child=e,this.dispatchEvent(Js),Js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,Cw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,Rw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function l(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let p=0,m=f.length;p<m;p++){const g=f[p];l(e.shapes,g)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,p=this.material.length;f<p;f++)d.push(l(e.materials,this.material[f]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];o.animations.push(l(e.animations,f))}}if(t){const d=u(e.geometries),f=u(e.materials),p=u(e.textures),m=u(e.images),g=u(e.shapes),y=u(e.skeletons),S=u(e.animations),w=u(e.nodes);d.length>0&&(s.geometries=d),f.length>0&&(s.materials=f),p.length>0&&(s.textures=p),m.length>0&&(s.images=m),g.length>0&&(s.shapes=g),y.length>0&&(s.skeletons=y),S.length>0&&(s.animations=S),w.length>0&&(s.nodes=w)}return s.object=o,s;function u(d){const f=[];for(const p in d){const m=d[p];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}Kn.DEFAULT_UP=new ie(0,1,0);Kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new ie,qi=new ie,Cd=new ie,Yi=new ie,Qs=new ie,eo=new ie,wg=new ie,Rd=new ie,Pd=new ie,Nd=new ie,Ld=new Kt,Dd=new Kt,Ud=new Kt;class gi{constructor(e=new ie,t=new ie,s=new ie){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),hi.subVectors(e,t),o.cross(hi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){hi.subVectors(o,t),qi.subVectors(s,t),Cd.subVectors(e,t);const u=hi.dot(hi),d=hi.dot(qi),f=hi.dot(Cd),p=qi.dot(qi),m=qi.dot(Cd),g=u*p-d*d;if(g===0)return l.set(0,0,0),null;const y=1/g,S=(p*f-d*m)*y,w=(u*m-d*f)*y;return l.set(1-S-w,w,S)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,s,o,l,u,d,f){return this.getBarycoord(e,t,s,o,Yi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,Yi.x),f.addScaledVector(u,Yi.y),f.addScaledVector(d,Yi.z),f)}static getInterpolatedAttribute(e,t,s,o,l,u){return Ld.setScalar(0),Dd.setScalar(0),Ud.setScalar(0),Ld.fromBufferAttribute(e,t),Dd.fromBufferAttribute(e,s),Ud.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Ld,l.x),u.addScaledVector(Dd,l.y),u.addScaledVector(Ud,l.z),u}static isFrontFacing(e,t,s,o){return hi.subVectors(s,t),qi.subVectors(e,t),hi.cross(qi).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),hi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return gi.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let u,d;Qs.subVectors(o,s),eo.subVectors(l,s),Rd.subVectors(e,s);const f=Qs.dot(Rd),p=eo.dot(Rd);if(f<=0&&p<=0)return t.copy(s);Pd.subVectors(e,o);const m=Qs.dot(Pd),g=eo.dot(Pd);if(m>=0&&g<=m)return t.copy(o);const y=f*g-m*p;if(y<=0&&f>=0&&m<=0)return u=f/(f-m),t.copy(s).addScaledVector(Qs,u);Nd.subVectors(e,l);const S=Qs.dot(Nd),w=eo.dot(Nd);if(w>=0&&S<=w)return t.copy(l);const b=S*p-f*w;if(b<=0&&p>=0&&w<=0)return d=p/(p-w),t.copy(s).addScaledVector(eo,d);const x=m*w-S*g;if(x<=0&&g-m>=0&&S-w>=0)return wg.subVectors(l,o),d=(g-m)/(g-m+(S-w)),t.copy(o).addScaledVector(wg,d);const _=1/(x+b+y);return u=b*_,d=y*_,t.copy(s).addScaledVector(Qs,u).addScaledVector(eo,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ex={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pr={h:0,s:0,l:0},Gl={h:0,s:0,l:0};function Id(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class kt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,s,o=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=s,Ct.toWorkingColorSpace(this,o),this}setHSL(e,t,s,o=Ct.workingColorSpace){if(e=fw(e,1),t=wt(t,0,1),s=wt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=Id(u,l,e+1/3),this.g=Id(u,l,e),this.b=Id(u,l,e-1/3)}return Ct.toWorkingColorSpace(this,o),this}setStyle(e,t=ri){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ri){const s=ex[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return Ct.fromWorkingColorSpace(bn.copy(this),e),Math.round(wt(bn.r*255,0,255))*65536+Math.round(wt(bn.g*255,0,255))*256+Math.round(wt(bn.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(bn.copy(this),t);const s=bn.r,o=bn.g,l=bn.b,u=Math.max(s,o,l),d=Math.min(s,o,l);let f,p;const m=(d+u)/2;if(d===u)f=0,p=0;else{const g=u-d;switch(p=m<=.5?g/(u+d):g/(2-u-d),u){case s:f=(o-l)/g+(o<l?6:0);break;case o:f=(l-s)/g+2;break;case l:f=(s-o)/g+4;break}f/=6}return e.h=f,e.s=p,e.l=m,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=ri){Ct.fromWorkingColorSpace(bn.copy(this),e);const t=bn.r,s=bn.g,o=bn.b;return e!==ri?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Pr),this.setHSL(Pr.h+e,Pr.s+t,Pr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Pr),e.getHSL(Gl);const s=xd(Pr.h,Gl.h,t),o=xd(Pr.s,Gl.s,t),l=xd(Pr.l,Gl.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new kt;kt.NAMES=ex;let Nw=0;class wc extends vo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nw++}),this.uuid=xa(),this.name="",this.type="Material",this.blending=oo,this.side=Fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tf,this.blendDst=nf,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==oo&&(s.blending=this.blending),this.side!==Fr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==tf&&(s.blendSrc=this.blendSrc),this.blendDst!==nf&&(s.blendDst=this.blendDst),this.blendEquation!==as&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==lo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(s.stencilFail=this.stencilFail),this.stencilZFail!==js&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const u=[];for(const d in l){const f=l[d];delete f.metadata,u.push(f)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class tx extends wc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.combine=zv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new ie,Wl=new Ut;let Lw=0;class Pi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lw++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=cg,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Wl.fromBufferAttribute(this,t),Wl.applyMatrix3(e),this.setXY(t,Wl.x,Wl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=ea(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=zn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ea(t,this.array)),t}setX(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ea(t,this.array)),t}setY(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ea(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ea(t,this.array)),t}setW(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),s=zn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),s=zn(s,this.array),o=zn(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),s=zn(s,this.array),o=zn(o,this.array),l=zn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cg&&(e.usage=this.usage),e}}class nx extends Pi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class ix extends Pi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class fs extends Pi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let Dw=0;const ii=new en,kd=new Kn,to=new ie,$n=new ya,ra=new ya,hn=new ie;class _s extends vo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dw++}),this.uuid=xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zv(e)?ix:nx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ft().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,s){return ii.makeTranslation(e,t,s),this.applyMatrix4(ii),this}scale(e,t,s){return ii.makeScale(e,t,s),this.applyMatrix4(ii),this}lookAt(e){return kd.lookAt(e),kd.updateMatrix(),this.applyMatrix4(kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new fs(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];$n.setFromBufferAttribute(l),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const s=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];ra.setFromBufferAttribute(d),this.morphTargetsRelative?(hn.addVectors($n.min,ra.min),$n.expandByPoint(hn),hn.addVectors($n.max,ra.max),$n.expandByPoint(hn)):($n.expandByPoint(ra.min),$n.expandByPoint(ra.max))}$n.getCenter(s);let o=0;for(let l=0,u=e.count;l<u;l++)hn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(hn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],f=this.morphTargetsRelative;for(let p=0,m=d.count;p<m;p++)hn.fromBufferAttribute(d,p),f&&(to.fromBufferAttribute(e,p),hn.add(to)),o=Math.max(o,s.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),d=[],f=[];for(let O=0;O<s.count;O++)d[O]=new ie,f[O]=new ie;const p=new ie,m=new ie,g=new ie,y=new Ut,S=new Ut,w=new Ut,b=new ie,x=new ie;function _(O,P,C){p.fromBufferAttribute(s,O),m.fromBufferAttribute(s,P),g.fromBufferAttribute(s,C),y.fromBufferAttribute(l,O),S.fromBufferAttribute(l,P),w.fromBufferAttribute(l,C),m.sub(p),g.sub(p),S.sub(y),w.sub(y);const G=1/(S.x*w.y-w.x*S.y);isFinite(G)&&(b.copy(m).multiplyScalar(w.y).addScaledVector(g,-S.y).multiplyScalar(G),x.copy(g).multiplyScalar(S.x).addScaledVector(m,-w.x).multiplyScalar(G),d[O].add(b),d[P].add(b),d[C].add(b),f[O].add(x),f[P].add(x),f[C].add(x))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let O=0,P=D.length;O<P;++O){const C=D[O],G=C.start,le=C.count;for(let Q=G,fe=G+le;Q<fe;Q+=3)_(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const N=new ie,R=new ie,V=new ie,z=new ie;function F(O){V.fromBufferAttribute(o,O),z.copy(V);const P=d[O];N.copy(P),N.sub(V.multiplyScalar(V.dot(P))).normalize(),R.crossVectors(z,P);const G=R.dot(f[O])<0?-1:1;u.setXYZW(O,N.x,N.y,N.z,G)}for(let O=0,P=D.length;O<P;++O){const C=D[O],G=C.start,le=C.count;for(let Q=G,fe=G+le;Q<fe;Q+=3)F(e.getX(Q+0)),F(e.getX(Q+1)),F(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Pi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let y=0,S=s.count;y<S;y++)s.setXYZ(y,0,0,0);const o=new ie,l=new ie,u=new ie,d=new ie,f=new ie,p=new ie,m=new ie,g=new ie;if(e)for(let y=0,S=e.count;y<S;y+=3){const w=e.getX(y+0),b=e.getX(y+1),x=e.getX(y+2);o.fromBufferAttribute(t,w),l.fromBufferAttribute(t,b),u.fromBufferAttribute(t,x),m.subVectors(u,l),g.subVectors(o,l),m.cross(g),d.fromBufferAttribute(s,w),f.fromBufferAttribute(s,b),p.fromBufferAttribute(s,x),d.add(m),f.add(m),p.add(m),s.setXYZ(w,d.x,d.y,d.z),s.setXYZ(b,f.x,f.y,f.z),s.setXYZ(x,p.x,p.y,p.z)}else for(let y=0,S=t.count;y<S;y+=3)o.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),u.fromBufferAttribute(t,y+2),m.subVectors(u,l),g.subVectors(o,l),m.cross(g),s.setXYZ(y+0,m.x,m.y,m.z),s.setXYZ(y+1,m.x,m.y,m.z),s.setXYZ(y+2,m.x,m.y,m.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(d,f){const p=d.array,m=d.itemSize,g=d.normalized,y=new p.constructor(f.length*m);let S=0,w=0;for(let b=0,x=f.length;b<x;b++){d.isInterleavedBufferAttribute?S=f[b]*d.data.stride+d.offset:S=f[b]*m;for(let _=0;_<m;_++)y[w++]=p[S++]}return new Pi(y,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _s,s=this.index.array,o=this.attributes;for(const d in o){const f=o[d],p=e(f,s);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const f=[],p=l[d];for(let m=0,g=p.length;m<g;m++){const y=p[m],S=e(y,s);f.push(S)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,f=u.length;d<f;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const f in s){const p=s[f];e.data.attributes[f]=p.toJSON(e.data)}const o={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],m=[];for(let g=0,y=p.length;g<y;g++){const S=p[g];m.push(S.toJSON(e.data))}m.length>0&&(o[f]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const p in o){const m=o[p];this.setAttribute(p,m.clone(t))}const l=e.morphAttributes;for(const p in l){const m=[],g=l[p];for(let y=0,S=g.length;y<S;y++)m.push(g[y].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,m=u.length;p<m;p++){const g=u[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eg=new en,ts=new bw,jl=new oh,bg=new ie,Xl=new ie,ql=new ie,Yl=new ie,Fd=new ie,$l=new ie,Mg=new ie,Kl=new ie;class Ri extends Kn{constructor(e=new _s,t=new tx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){$l.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const m=d[f],g=l[f];m!==0&&(Fd.fromBufferAttribute(g,e),u?$l.addScaledVector(Fd,m):$l.addScaledVector(Fd.sub(t),m))}t.add($l)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),jl.copy(s.boundingSphere),jl.applyMatrix4(l),ts.copy(e.ray).recast(e.near),!(jl.containsPoint(ts.origin)===!1&&(ts.intersectSphere(jl,bg)===null||ts.origin.distanceToSquared(bg)>(e.far-e.near)**2))&&(Eg.copy(l).invert(),ts.copy(e.ray).applyMatrix4(Eg),!(s.boundingBox!==null&&ts.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,s){let o;const l=this.geometry,u=this.material,d=l.index,f=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,y=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(u))for(let w=0,b=y.length;w<b;w++){const x=y[w],_=u[x.materialIndex],D=Math.max(x.start,S.start),N=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let R=D,V=N;R<V;R+=3){const z=d.getX(R),F=d.getX(R+1),O=d.getX(R+2);o=Zl(this,_,e,s,p,m,g,z,F,O),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const w=Math.max(0,S.start),b=Math.min(d.count,S.start+S.count);for(let x=w,_=b;x<_;x+=3){const D=d.getX(x),N=d.getX(x+1),R=d.getX(x+2);o=Zl(this,u,e,s,p,m,g,D,N,R),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(u))for(let w=0,b=y.length;w<b;w++){const x=y[w],_=u[x.materialIndex],D=Math.max(x.start,S.start),N=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let R=D,V=N;R<V;R+=3){const z=R,F=R+1,O=R+2;o=Zl(this,_,e,s,p,m,g,z,F,O),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const w=Math.max(0,S.start),b=Math.min(f.count,S.start+S.count);for(let x=w,_=b;x<_;x+=3){const D=x,N=x+1,R=x+2;o=Zl(this,u,e,s,p,m,g,D,N,R),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function Uw(i,e,t,s,o,l,u,d){let f;if(e.side===Hn?f=s.intersectTriangle(u,l,o,!0,d):f=s.intersectTriangle(o,l,u,e.side===Fr,d),f===null)return null;Kl.copy(d),Kl.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(Kl);return p<t.near||p>t.far?null:{distance:p,point:Kl.clone(),object:i}}function Zl(i,e,t,s,o,l,u,d,f,p){i.getVertexPosition(d,Xl),i.getVertexPosition(f,ql),i.getVertexPosition(p,Yl);const m=Uw(i,e,t,s,Xl,ql,Yl,Mg);if(m){const g=new ie;gi.getBarycoord(Mg,Xl,ql,Yl,g),o&&(m.uv=gi.getInterpolatedAttribute(o,d,f,p,g,new Ut)),l&&(m.uv1=gi.getInterpolatedAttribute(l,d,f,p,g,new Ut)),u&&(m.normal=gi.getInterpolatedAttribute(u,d,f,p,g,new ie),m.normal.dot(s.direction)>0&&m.normal.multiplyScalar(-1));const y={a:d,b:f,c:p,normal:new ie,materialIndex:0};gi.getNormal(Xl,ql,Yl,y.normal),m.face=y,m.barycoord=g}return m}class Sa extends _s{constructor(e=1,t=1,s=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const f=[],p=[],m=[],g=[];let y=0,S=0;w("z","y","x",-1,-1,s,t,e,u,l,0),w("z","y","x",1,-1,s,t,-e,u,l,1),w("x","z","y",1,1,e,s,t,o,u,2),w("x","z","y",1,-1,e,s,-t,o,u,3),w("x","y","z",1,-1,e,t,s,o,l,4),w("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(f),this.setAttribute("position",new fs(p,3)),this.setAttribute("normal",new fs(m,3)),this.setAttribute("uv",new fs(g,2));function w(b,x,_,D,N,R,V,z,F,O,P){const C=R/F,G=V/O,le=R/2,Q=V/2,fe=z/2,he=F+1,se=O+1;let ce=0,I=0;const ue=new ie;for(let oe=0;oe<se;oe++){const k=oe*G-Q;for(let ne=0;ne<he;ne++){const Ae=ne*C-le;ue[b]=Ae*D,ue[x]=k*N,ue[_]=fe,p.push(ue.x,ue.y,ue.z),ue[b]=0,ue[x]=0,ue[_]=z>0?1:-1,m.push(ue.x,ue.y,ue.z),g.push(ne/F),g.push(1-oe/O),ce+=1}}for(let oe=0;oe<O;oe++)for(let k=0;k<F;k++){const ne=y+k+he*oe,Ae=y+k+he*(oe+1),$=y+(k+1)+he*(oe+1),pe=y+(k+1)+he*oe;f.push(ne,Ae,pe),f.push(Ae,$,pe),I+=6}d.addGroup(S,I,P),S+=I,y+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ho(i){const e={};for(const t in i){e[t]={};for(const s in i[t]){const o=i[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function Nn(i){const e={};for(let t=0;t<i.length;t++){const s=ho(i[t]);for(const o in s)e[o]=s[o]}return e}function Iw(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function rx(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const kw={clone:ho,merge:Nn};var Fw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ow=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nr extends wc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fw,this.fragmentShader=Ow,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ho(e.uniforms),this.uniformsGroups=Iw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class ah extends Kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nr=new ie,Tg=new Ut,Ag=new Ut;class mi extends ah{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zf*2*Math.atan(Math.tan(vd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z)}getViewSize(e,t){return this.getViewBounds(e,Tg,Ag),t.subVectors(Ag,Tg)}setViewOffset(e,t,s,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vd*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/f,t-=u.offsetY*s/p,o*=u.width/f,s*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const no=-90,io=1;class Bw extends Kn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new mi(no,io,e,t);o.layers=this.layers,this.add(o);const l=new mi(no,io,e,t);l.layers=this.layers,this.add(l);const u=new mi(no,io,e,t);u.layers=this.layers,this.add(u);const d=new mi(no,io,e,t);d.layers=this.layers,this.add(d);const f=new mi(no,io,e,t);f.layers=this.layers,this.add(f);const p=new mi(no,io,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,u,d,f]=t;for(const p of t)this.remove(p);if(e===Ji)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===gc)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,f,p,m]=this.children,g=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(t,l),e.setRenderTarget(s,1,o),e.render(t,u),e.setRenderTarget(s,2,o),e.render(t,d),e.setRenderTarget(s,3,o),e.render(t,f),e.setRenderTarget(s,4,o),e.render(t,p),s.texture.generateMipmaps=b,e.setRenderTarget(s,5,o),e.render(t,m),e.setRenderTarget(g,y,S),e.xr.enabled=w,s.texture.needsPMREMUpdate=!0}}class sx extends Ln{constructor(e=[],t=co,s,o,l,u,d,f,p,m){super(e,t,s,o,l,u,d,f,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zw extends ms{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new sx(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Sa(5,5,5),l=new nr({name:"CubemapFromEquirect",uniforms:ho(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Hn,blending:Ir});l.uniforms.tEquirect.value=t;const u=new Ri(o,l),d=t.minFilter;return t.minFilter===us&&(t.minFilter=vi),new Bw(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,o);e.setRenderTarget(l)}}class Jl extends Kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hw={type:"move"};class Od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,u=null;const d=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const b of e.hand.values()){const x=t.getJointPose(b,s),_=this._getHandJoint(p,b);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const m=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=m.position.distanceTo(g.position),S=.02,w=.005;p.inputState.pinching&&y>S+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=S-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Hw)))}return d!==null&&(d.visible=o!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Jl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}class Vw extends Kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tr,this.environmentIntensity=1,this.environmentRotation=new tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Bd=new ie,Gw=new ie,Ww=new ft;class ss{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=Bd.subVectors(s,t).cross(Gw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Bd),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||Ww.getNormalMatrix(e),o=this.coplanarPoint(Bd).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new oh,Ql=new ie;class ox{constructor(e=new ss,t=new ss,s=new ss,o=new ss,l=new ss,u=new ss){this.planes=[e,t,s,o,l,u]}set(e,t,s,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(s),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Ji){const s=this.planes,o=e.elements,l=o[0],u=o[1],d=o[2],f=o[3],p=o[4],m=o[5],g=o[6],y=o[7],S=o[8],w=o[9],b=o[10],x=o[11],_=o[12],D=o[13],N=o[14],R=o[15];if(s[0].setComponents(f-l,y-p,x-S,R-_).normalize(),s[1].setComponents(f+l,y+p,x+S,R+_).normalize(),s[2].setComponents(f+u,y+m,x+w,R+D).normalize(),s[3].setComponents(f-u,y-m,x-w,R-D).normalize(),s[4].setComponents(f-d,y-g,x-b,R-N).normalize(),t===Ji)s[5].setComponents(f+d,y+g,x+b,R+N).normalize();else if(t===gc)s[5].setComponents(d,g,b,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(Ql.x=o.normal.x>0?e.max.x:e.min.x,Ql.y=o.normal.y>0?e.max.y:e.min.y,Ql.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ql)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ax extends Ln{constructor(e,t,s=ps,o,l,u,d=_i,f=_i,p,m=fa){if(m!==fa&&m!==ha)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,l,u,d,f,m,s,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wa extends _s{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(s),f=Math.floor(o),p=d+1,m=f+1,g=e/d,y=t/f,S=[],w=[],b=[],x=[];for(let _=0;_<m;_++){const D=_*y-u;for(let N=0;N<p;N++){const R=N*g-l;w.push(R,-D,0),b.push(0,0,1),x.push(N/d),x.push(1-_/f)}}for(let _=0;_<f;_++)for(let D=0;D<d;D++){const N=D+p*_,R=D+p*(_+1),V=D+1+p*(_+1),z=D+1+p*_;S.push(N,R,z),S.push(R,V,z)}this.setIndex(S),this.setAttribute("position",new fs(w,3)),this.setAttribute("normal",new fs(b,3)),this.setAttribute("uv",new fs(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.width,e.height,e.widthSegments,e.heightSegments)}}class jw extends wc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xw extends wc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cg={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class qw{constructor(e,t,s){const o=this;let l=!1,u=0,d=0,f;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(m){d++,l===!1&&o.onStart!==void 0&&o.onStart(m,u,d),l=!0},this.itemEnd=function(m){u++,o.onProgress!==void 0&&o.onProgress(m,u,d),u===d&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(m){o.onError!==void 0&&o.onError(m)},this.resolveURL=function(m){return f?f(m):m},this.setURLModifier=function(m){return f=m,this},this.addHandler=function(m,g){return p.push(m,g),this},this.removeHandler=function(m){const g=p.indexOf(m);return g!==-1&&p.splice(g,2),this},this.getHandler=function(m){for(let g=0,y=p.length;g<y;g+=2){const S=p[g],w=p[g+1];if(S.global&&(S.lastIndex=0),S.test(m))return w}return null}}}const Yw=new qw;class lh{constructor(e){this.manager=e!==void 0?e:Yw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const s=this;return new Promise(function(o,l){s.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}lh.DEFAULT_MATERIAL_NAME="__DEFAULT";class $w extends lh{constructor(e){super(e)}load(e,t,s,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=Cg.get(e);if(u!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0),u;const d=pa("img");function f(){m(),Cg.add(e,this),t&&t(this),l.manager.itemEnd(e)}function p(g){m(),o&&o(g),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){d.removeEventListener("load",f,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",f,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),l.manager.itemStart(e),d.src=e,d}}class Kw extends lh{constructor(e){super(e)}load(e,t,s,o){const l=new Ln,u=new $w(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(d){l.image=d,l.needsUpdate=!0,t!==void 0&&t(l)},s,o),l}}class Zw extends ah{constructor(e=-1,t=1,s=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,u=s+e,d=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=m*this.view.offsetY,f=d-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Jw extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Rg(i,e,t,s){const o=Qw(s);switch(t){case jv:return i*e;case qv:return i*e/o.components*o.byteLength;case nh:return i*e/o.components*o.byteLength;case Yv:return i*e*2/o.components*o.byteLength;case ih:return i*e*2/o.components*o.byteLength;case Xv:return i*e*3/o.components*o.byteLength;case xi:return i*e*4/o.components*o.byteLength;case rh:return i*e*4/o.components*o.byteLength;case rc:case sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oc:case ac:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mf:case vf:return Math.max(i,16)*Math.max(e,8)/4;case pf:case gf:return Math.max(i,8)*Math.max(e,8)/2;case xf:case _f:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wf:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case bf:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Tf:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Af:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Cf:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Rf:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Lf:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Df:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Uf:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case lc:case If:case kf:return Math.ceil(i/4)*Math.ceil(e/4)*16;case $v:case Ff:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Of:case Bf:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qw(i){switch(i){case er:case Vv:return{byteLength:1,components:1};case ua:case Gv:case va:return{byteLength:2,components:1};case eh:case th:return{byteLength:2,components:4};case ps:case Qf:case Zi:return{byteLength:4,components:1};case Wv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lx(){let i=null,e=!1,t=null,s=null;function o(l,u){t(l,u),s=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function eE(i){const e=new WeakMap;function t(d,f){const p=d.array,m=d.usage,g=p.byteLength,y=i.createBuffer();i.bindBuffer(f,y),i.bufferData(f,p,m),d.onUploadCallback();let S;if(p instanceof Float32Array)S=i.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=i.HALF_FLOAT:S=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=i.SHORT;else if(p instanceof Uint32Array)S=i.UNSIGNED_INT;else if(p instanceof Int32Array)S=i.INT;else if(p instanceof Int8Array)S=i.BYTE;else if(p instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,f,p){const m=f.array,g=f.updateRanges;if(i.bindBuffer(p,d),g.length===0)i.bufferSubData(p,0,m);else{g.sort((S,w)=>S.start-w.start);let y=0;for(let S=1;S<g.length;S++){const w=g[y],b=g[S];b.start<=w.start+w.count+1?w.count=Math.max(w.count,b.start+b.count-w.start):(++y,g[y]=b)}g.length=y+1;for(let S=0,w=g.length;S<w;S++){const b=g[S];i.bufferSubData(p,b.start*m.BYTES_PER_ELEMENT,m,b.start,b.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(i.deleteBuffer(f.buffer),e.delete(d))}function u(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const m=e.get(d);(!m||m.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,f));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,f),p.version=d.version}}return{get:o,remove:l,update:u}}var tE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,uE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,SE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,EE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ME=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,TE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,AE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,CE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NE="gl_FragColor = linearToOutputTexel( gl_FragColor );",LE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,UE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,OE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,GE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,YE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$E=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,QE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ib=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ob=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ab=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ub=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,db=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_b=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Eb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ab=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Pb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Db=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ub=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ib=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Fb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ob=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$b=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,aM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_M=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,SM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,MM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,LM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:tE,alphahash_pars_fragment:nE,alphamap_fragment:iE,alphamap_pars_fragment:rE,alphatest_fragment:sE,alphatest_pars_fragment:oE,aomap_fragment:aE,aomap_pars_fragment:lE,batching_pars_vertex:cE,batching_vertex:uE,begin_vertex:dE,beginnormal_vertex:fE,bsdfs:hE,iridescence_fragment:pE,bumpmap_pars_fragment:mE,clipping_planes_fragment:gE,clipping_planes_pars_fragment:vE,clipping_planes_pars_vertex:xE,clipping_planes_vertex:_E,color_fragment:yE,color_pars_fragment:SE,color_pars_vertex:wE,color_vertex:EE,common:bE,cube_uv_reflection_fragment:ME,defaultnormal_vertex:TE,displacementmap_pars_vertex:AE,displacementmap_vertex:CE,emissivemap_fragment:RE,emissivemap_pars_fragment:PE,colorspace_fragment:NE,colorspace_pars_fragment:LE,envmap_fragment:DE,envmap_common_pars_fragment:UE,envmap_pars_fragment:IE,envmap_pars_vertex:kE,envmap_physical_pars_fragment:qE,envmap_vertex:FE,fog_vertex:OE,fog_pars_vertex:BE,fog_fragment:zE,fog_pars_fragment:HE,gradientmap_pars_fragment:VE,lightmap_pars_fragment:GE,lights_lambert_fragment:WE,lights_lambert_pars_fragment:jE,lights_pars_begin:XE,lights_toon_fragment:YE,lights_toon_pars_fragment:$E,lights_phong_fragment:KE,lights_phong_pars_fragment:ZE,lights_physical_fragment:JE,lights_physical_pars_fragment:QE,lights_fragment_begin:eb,lights_fragment_maps:tb,lights_fragment_end:nb,logdepthbuf_fragment:ib,logdepthbuf_pars_fragment:rb,logdepthbuf_pars_vertex:sb,logdepthbuf_vertex:ob,map_fragment:ab,map_pars_fragment:lb,map_particle_fragment:cb,map_particle_pars_fragment:ub,metalnessmap_fragment:db,metalnessmap_pars_fragment:fb,morphinstance_vertex:hb,morphcolor_vertex:pb,morphnormal_vertex:mb,morphtarget_pars_vertex:gb,morphtarget_vertex:vb,normal_fragment_begin:xb,normal_fragment_maps:_b,normal_pars_fragment:yb,normal_pars_vertex:Sb,normal_vertex:wb,normalmap_pars_fragment:Eb,clearcoat_normal_fragment_begin:bb,clearcoat_normal_fragment_maps:Mb,clearcoat_pars_fragment:Tb,iridescence_pars_fragment:Ab,opaque_fragment:Cb,packing:Rb,premultiplied_alpha_fragment:Pb,project_vertex:Nb,dithering_fragment:Lb,dithering_pars_fragment:Db,roughnessmap_fragment:Ub,roughnessmap_pars_fragment:Ib,shadowmap_pars_fragment:kb,shadowmap_pars_vertex:Fb,shadowmap_vertex:Ob,shadowmask_pars_fragment:Bb,skinbase_vertex:zb,skinning_pars_vertex:Hb,skinning_vertex:Vb,skinnormal_vertex:Gb,specularmap_fragment:Wb,specularmap_pars_fragment:jb,tonemapping_fragment:Xb,tonemapping_pars_fragment:qb,transmission_fragment:Yb,transmission_pars_fragment:$b,uv_pars_fragment:Kb,uv_pars_vertex:Zb,uv_vertex:Jb,worldpos_vertex:Qb,background_vert:eM,background_frag:tM,backgroundCube_vert:nM,backgroundCube_frag:iM,cube_vert:rM,cube_frag:sM,depth_vert:oM,depth_frag:aM,distanceRGBA_vert:lM,distanceRGBA_frag:cM,equirect_vert:uM,equirect_frag:dM,linedashed_vert:fM,linedashed_frag:hM,meshbasic_vert:pM,meshbasic_frag:mM,meshlambert_vert:gM,meshlambert_frag:vM,meshmatcap_vert:xM,meshmatcap_frag:_M,meshnormal_vert:yM,meshnormal_frag:SM,meshphong_vert:wM,meshphong_frag:EM,meshphysical_vert:bM,meshphysical_frag:MM,meshtoon_vert:TM,meshtoon_frag:AM,points_vert:CM,points_frag:RM,shadow_vert:PM,shadow_frag:NM,sprite_vert:LM,sprite_frag:DM},Le={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Ci={basic:{uniforms:Nn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Nn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new kt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Nn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Nn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Nn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new kt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Nn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Nn([Le.points,Le.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Nn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Nn([Le.common,Le.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Nn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Nn([Le.sprite,Le.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Nn([Le.common,Le.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Nn([Le.lights,Le.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ci.physical={uniforms:Nn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const ec={r:0,b:0,g:0},is=new tr,UM=new en;function IM(i,e,t,s,o,l,u){const d=new kt(0);let f=l===!0?0:1,p,m,g=null,y=0,S=null;function w(N){let R=N.isScene===!0?N.background:null;return R&&R.isTexture&&(R=(N.backgroundBlurriness>0?t:e).get(R)),R}function b(N){let R=!1;const V=w(N);V===null?_(d,f):V&&V.isColor&&(_(V,1),R=!0);const z=i.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,u):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,u),(i.autoClear||R)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(N,R){const V=w(R);V&&(V.isCubeTexture||V.mapping===Sc)?(m===void 0&&(m=new Ri(new Sa(1,1,1),new nr({name:"BackgroundCubeMaterial",uniforms:ho(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(z,F,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),is.copy(R.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.material.uniforms.envMap.value=V,m.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(UM.makeRotationFromEuler(is)),m.material.toneMapped=Ct.getTransfer(V.colorSpace)!==It,(g!==V||y!==V.version||S!==i.toneMapping)&&(m.material.needsUpdate=!0,g=V,y=V.version,S=i.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new Ri(new wa(2,2),new nr({name:"BackgroundMaterial",uniforms:ho(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=Ct.getTransfer(V.colorSpace)!==It,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(g!==V||y!==V.version||S!==i.toneMapping)&&(p.material.needsUpdate=!0,g=V,y=V.version,S=i.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,R){N.getRGB(ec,rx(i)),s.buffers.color.setClear(ec.r,ec.g,ec.b,R,u)}function D(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,R=1){d.set(N),f=R,_(d,f)},getClearAlpha:function(){return f},setClearAlpha:function(N){f=N,_(d,f)},render:b,addToRenderList:x,dispose:D}}function kM(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},o=y(null);let l=o,u=!1;function d(C,G,le,Q,fe){let he=!1;const se=g(Q,le,G);l!==se&&(l=se,p(l.object)),he=S(C,Q,le,fe),he&&w(C,Q,le,fe),fe!==null&&e.update(fe,i.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,R(C,G,le,Q),fe!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function f(){return i.createVertexArray()}function p(C){return i.bindVertexArray(C)}function m(C){return i.deleteVertexArray(C)}function g(C,G,le){const Q=le.wireframe===!0;let fe=s[C.id];fe===void 0&&(fe={},s[C.id]=fe);let he=fe[G.id];he===void 0&&(he={},fe[G.id]=he);let se=he[Q];return se===void 0&&(se=y(f()),he[Q]=se),se}function y(C){const G=[],le=[],Q=[];for(let fe=0;fe<t;fe++)G[fe]=0,le[fe]=0,Q[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:le,attributeDivisors:Q,object:C,attributes:{},index:null}}function S(C,G,le,Q){const fe=l.attributes,he=G.attributes;let se=0;const ce=le.getAttributes();for(const I in ce)if(ce[I].location>=0){const oe=fe[I];let k=he[I];if(k===void 0&&(I==="instanceMatrix"&&C.instanceMatrix&&(k=C.instanceMatrix),I==="instanceColor"&&C.instanceColor&&(k=C.instanceColor)),oe===void 0||oe.attribute!==k||k&&oe.data!==k.data)return!0;se++}return l.attributesNum!==se||l.index!==Q}function w(C,G,le,Q){const fe={},he=G.attributes;let se=0;const ce=le.getAttributes();for(const I in ce)if(ce[I].location>=0){let oe=he[I];oe===void 0&&(I==="instanceMatrix"&&C.instanceMatrix&&(oe=C.instanceMatrix),I==="instanceColor"&&C.instanceColor&&(oe=C.instanceColor));const k={};k.attribute=oe,oe&&oe.data&&(k.data=oe.data),fe[I]=k,se++}l.attributes=fe,l.attributesNum=se,l.index=Q}function b(){const C=l.newAttributes;for(let G=0,le=C.length;G<le;G++)C[G]=0}function x(C){_(C,0)}function _(C,G){const le=l.newAttributes,Q=l.enabledAttributes,fe=l.attributeDivisors;le[C]=1,Q[C]===0&&(i.enableVertexAttribArray(C),Q[C]=1),fe[C]!==G&&(i.vertexAttribDivisor(C,G),fe[C]=G)}function D(){const C=l.newAttributes,G=l.enabledAttributes;for(let le=0,Q=G.length;le<Q;le++)G[le]!==C[le]&&(i.disableVertexAttribArray(le),G[le]=0)}function N(C,G,le,Q,fe,he,se){se===!0?i.vertexAttribIPointer(C,G,le,fe,he):i.vertexAttribPointer(C,G,le,Q,fe,he)}function R(C,G,le,Q){b();const fe=Q.attributes,he=le.getAttributes(),se=G.defaultAttributeValues;for(const ce in he){const I=he[ce];if(I.location>=0){let ue=fe[ce];if(ue===void 0&&(ce==="instanceMatrix"&&C.instanceMatrix&&(ue=C.instanceMatrix),ce==="instanceColor"&&C.instanceColor&&(ue=C.instanceColor)),ue!==void 0){const oe=ue.normalized,k=ue.itemSize,ne=e.get(ue);if(ne===void 0)continue;const Ae=ne.buffer,$=ne.type,pe=ne.bytesPerElement,be=$===i.INT||$===i.UNSIGNED_INT||ue.gpuType===Qf;if(ue.isInterleavedBufferAttribute){const me=ue.data,Ce=me.stride,qe=ue.offset;if(me.isInstancedInterleavedBuffer){for(let Oe=0;Oe<I.locationSize;Oe++)_(I.location+Oe,me.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Oe=0;Oe<I.locationSize;Oe++)x(I.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let Oe=0;Oe<I.locationSize;Oe++)N(I.location+Oe,k/I.locationSize,$,oe,Ce*pe,(qe+k/I.locationSize*Oe)*pe,be)}else{if(ue.isInstancedBufferAttribute){for(let me=0;me<I.locationSize;me++)_(I.location+me,ue.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let me=0;me<I.locationSize;me++)x(I.location+me);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let me=0;me<I.locationSize;me++)N(I.location+me,k/I.locationSize,$,oe,k*pe,k/I.locationSize*me*pe,be)}}else if(se!==void 0){const oe=se[ce];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(I.location,oe);break;case 3:i.vertexAttrib3fv(I.location,oe);break;case 4:i.vertexAttrib4fv(I.location,oe);break;default:i.vertexAttrib1fv(I.location,oe)}}}}D()}function V(){O();for(const C in s){const G=s[C];for(const le in G){const Q=G[le];for(const fe in Q)m(Q[fe].object),delete Q[fe];delete G[le]}delete s[C]}}function z(C){if(s[C.id]===void 0)return;const G=s[C.id];for(const le in G){const Q=G[le];for(const fe in Q)m(Q[fe].object),delete Q[fe];delete G[le]}delete s[C.id]}function F(C){for(const G in s){const le=s[G];if(le[C.id]===void 0)continue;const Q=le[C.id];for(const fe in Q)m(Q[fe].object),delete Q[fe];delete le[C.id]}}function O(){P(),u=!0,l!==o&&(l=o,p(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:O,resetDefaultState:P,dispose:V,releaseStatesOfGeometry:z,releaseStatesOfProgram:F,initAttributes:b,enableAttribute:x,disableUnusedAttributes:D}}function FM(i,e,t){let s;function o(p){s=p}function l(p,m){i.drawArrays(s,p,m),t.update(m,s,1)}function u(p,m,g){g!==0&&(i.drawArraysInstanced(s,p,m,g),t.update(m,s,g))}function d(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,g);let S=0;for(let w=0;w<g;w++)S+=m[w];t.update(S,s,1)}function f(p,m,g,y){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<p.length;w++)u(p[w],m[w],y[w]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,m,0,y,0,g);let w=0;for(let b=0;b<g;b++)w+=m[b]*y[b];t.update(w,s,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function OM(i,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==xi&&s.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const O=F===va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==er&&s.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Zi&&!O)}function f(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const m=f(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const g=t.logarithmicDepthBuffer===!0,y=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),N=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),V=w>0,z=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:w,maxTextureSize:b,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:D,maxVaryings:N,maxFragmentUniforms:R,vertexTextures:V,maxSamples:z}}function BM(i){const e=this;let t=null,s=0,o=!1,l=!1;const u=new ss,d=new ft,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const S=g.length!==0||y||s!==0||o;return o=y,s=g.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,y){t=m(g,y,0)},this.setState=function(g,y,S){const w=g.clippingPlanes,b=g.clipIntersection,x=g.clipShadows,_=i.get(g);if(!o||w===null||w.length===0||l&&!x)l?m(null):p();else{const D=l?0:s,N=D*4;let R=_.clippingState||null;f.value=R,R=m(w,y,N,S);for(let V=0;V!==N;++V)R[V]=t[V];_.clippingState=R,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=D}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function m(g,y,S,w){const b=g!==null?g.length:0;let x=null;if(b!==0){if(x=f.value,w!==!0||x===null){const _=S+b*4,D=y.matrixWorldInverse;d.getNormalMatrix(D),(x===null||x.length<_)&&(x=new Float32Array(_));for(let N=0,R=S;N!==b;++N,R+=4)u.copy(g[N]).applyMatrix4(D,d),u.normal.toArray(x,R),x[R+3]=u.constant}f.value=x,f.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}function zM(i){let e=new WeakMap;function t(u,d){return d===df?u.mapping=co:d===ff&&(u.mapping=uo),u}function s(u){if(u&&u.isTexture){const d=u.mapping;if(d===df||d===ff)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const p=new zw(f.height);return p.fromEquirectangularTexture(i,u),e.set(u,p),u.addEventListener("dispose",o),t(p.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const so=4,Pg=[.125,.215,.35,.446,.526,.582],ls=20,zd=new Zw,Ng=new kt;let Hd=null,Vd=0,Gd=0,Wd=!1;const os=(1+Math.sqrt(5))/2,ro=1/os,Lg=[new ie(-os,ro,0),new ie(os,ro,0),new ie(-ro,0,os),new ie(ro,0,os),new ie(0,os,-ro),new ie(0,os,ro),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)],HM=new ie;class Dg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,o=100,l={}){const{size:u=256,position:d=HM}=l;Hd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,s,o,f,d),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ig(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hd,Vd,Gd),this._renderer.xr.enabled=Wd,e.scissorTest=!1,tc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===co||e.mapping===uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:va,format:xi,colorSpace:fo,depthBuffer:!1},o=Ug(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ug(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=VM(l)),this._blurMaterial=GM(l,e,t)}return o}_compileMaterial(e){const t=new Ri(this._lodPlanes[0],e);this._renderer.compile(t,zd)}_sceneToCubeUV(e,t,s,o,l){const f=new mi(90,1,t,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,S=g.toneMapping;g.getClearColor(Ng),g.toneMapping=kr,g.autoClear=!1;const w=new tx({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),b=new Ri(new Sa,w);let x=!1;const _=e.background;_?_.isColor&&(w.color.copy(_),e.background=null,x=!0):(w.color.copy(Ng),x=!0);for(let D=0;D<6;D++){const N=D%3;N===0?(f.up.set(0,p[D],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x+m[D],l.y,l.z)):N===1?(f.up.set(0,0,p[D]),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y+m[D],l.z)):(f.up.set(0,p[D],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y,l.z+m[D]));const R=this._cubeSize;tc(o,N*R,D>2?R:0,R,R),g.setRenderTarget(o),x&&g.render(b,f),g.render(e,f)}b.geometry.dispose(),b.material.dispose(),g.toneMapping=S,g.autoClear=y,e.background=_}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===co||e.mapping===uo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=kg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ig());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Ri(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const f=this._cubeSize;tc(t,0,0,3*f,2*f),s.setRenderTarget(t),s.render(u,zd)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Lg[(o-l-1)%Lg.length];this._blur(e,l-1,l,u,d)}t.autoClear=s}_blur(e,t,s,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,s,o,"latitudinal",l),this._halfBlur(u,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,u,d){const f=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Ri(this._lodPlanes[o],p),y=p.uniforms,S=this._sizeLods[s]-1,w=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ls-1),b=l/w,x=isFinite(l)?1+Math.floor(m*b):ls;x>ls&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ls}`);const _=[];let D=0;for(let F=0;F<ls;++F){const O=F/b,P=Math.exp(-O*O/2);_.push(P),F===0?D+=P:F<x&&(D+=2*P)}for(let F=0;F<_.length;F++)_[F]=_[F]/D;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=_,y.latitudinal.value=u==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:N}=this;y.dTheta.value=w,y.mipInt.value=N-s;const R=this._sizeLods[o],V=3*R*(o>N-so?o-N+so:0),z=4*(this._cubeSize-R);tc(t,V,z,3*R,2*R),f.setRenderTarget(t),f.render(g,zd)}}function VM(i){const e=[],t=[],s=[];let o=i;const l=i-so+1+Pg.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);t.push(d);let f=1/d;u>i-so?f=Pg[u-i+so-1]:u===0&&(f=0),s.push(f);const p=1/(d-2),m=-p,g=1+p,y=[m,m,g,m,g,g,m,m,g,g,m,g],S=6,w=6,b=3,x=2,_=1,D=new Float32Array(b*w*S),N=new Float32Array(x*w*S),R=new Float32Array(_*w*S);for(let z=0;z<S;z++){const F=z%3*2/3-1,O=z>2?0:-1,P=[F,O,0,F+2/3,O,0,F+2/3,O+1,0,F,O,0,F+2/3,O+1,0,F,O+1,0];D.set(P,b*w*z),N.set(y,x*w*z);const C=[z,z,z,z,z,z];R.set(C,_*w*z)}const V=new _s;V.setAttribute("position",new Pi(D,b)),V.setAttribute("uv",new Pi(N,x)),V.setAttribute("faceIndex",new Pi(R,_)),e.push(V),o>so&&o--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Ug(i,e,t){const s=new ms(i,e,t);return s.texture.mapping=Sc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function tc(i,e,t,s,o){i.viewport.set(e,t,s,o),i.scissor.set(e,t,s,o)}function GM(i,e,t){const s=new Float32Array(ls),o=new ie(0,1,0);return new nr({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function Ig(){return new nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function kg(){return new nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function ch(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function WM(i){let e=new WeakMap,t=null;function s(d){if(d&&d.isTexture){const f=d.mapping,p=f===df||f===ff,m=f===co||f===uo;if(p||m){let g=e.get(d);const y=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return t===null&&(t=new Dg(i)),g=p?t.fromEquirectangular(d,g):t.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return p&&S&&S.height>0||m&&S&&o(S)?(t===null&&(t=new Dg(i)),g=p?t.fromEquirectangular(d):t.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",l),g.texture):null}}}return d}function o(d){let f=0;const p=6;for(let m=0;m<p;m++)d[m]!==void 0&&f++;return f===p}function l(d){const f=d.target;f.removeEventListener("dispose",l);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:u}}function jM(i){const e={};function t(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(s)}return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&cc("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function XM(i,e,t,s){const o={},l=new WeakMap;function u(g){const y=g.target;y.index!==null&&e.remove(y.index);for(const w in y.attributes)e.remove(y.attributes[w]);y.removeEventListener("dispose",u),delete o[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function d(g,y){return o[y.id]===!0||(y.addEventListener("dispose",u),o[y.id]=!0,t.memory.geometries++),y}function f(g){const y=g.attributes;for(const S in y)e.update(y[S],i.ARRAY_BUFFER)}function p(g){const y=[],S=g.index,w=g.attributes.position;let b=0;if(S!==null){const D=S.array;b=S.version;for(let N=0,R=D.length;N<R;N+=3){const V=D[N+0],z=D[N+1],F=D[N+2];y.push(V,z,z,F,F,V)}}else if(w!==void 0){const D=w.array;b=w.version;for(let N=0,R=D.length/3-1;N<R;N+=3){const V=N+0,z=N+1,F=N+2;y.push(V,z,z,F,F,V)}}else return;const x=new(Zv(y)?ix:nx)(y,1);x.version=b;const _=l.get(g);_&&e.remove(_),l.set(g,x)}function m(g){const y=l.get(g);if(y){const S=g.index;S!==null&&y.version<S.version&&p(g)}else p(g);return l.get(g)}return{get:d,update:f,getWireframeAttribute:m}}function qM(i,e,t){let s;function o(y){s=y}let l,u;function d(y){l=y.type,u=y.bytesPerElement}function f(y,S){i.drawElements(s,S,l,y*u),t.update(S,s,1)}function p(y,S,w){w!==0&&(i.drawElementsInstanced(s,S,l,y*u,w),t.update(S,s,w))}function m(y,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,y,0,w);let x=0;for(let _=0;_<w;_++)x+=S[_];t.update(x,s,1)}function g(y,S,w,b){if(w===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<y.length;_++)p(y[_]/u,S[_],b[_]);else{x.multiDrawElementsInstancedWEBGL(s,S,0,l,y,0,b,0,w);let _=0;for(let D=0;D<w;D++)_+=S[D]*b[D];t.update(_,s,1)}}this.setMode=o,this.setIndex=d,this.render=f,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function YM(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,d){switch(t.calls++,u){case i.TRIANGLES:t.triangles+=d*(l/3);break;case i.LINES:t.lines+=d*(l/2);break;case i.LINE_STRIP:t.lines+=d*(l-1);break;case i.LINE_LOOP:t.lines+=d*l;break;case i.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function $M(i,e,t){const s=new WeakMap,o=new Kt;function l(u,d,f){const p=u.morphTargetInfluences,m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=m!==void 0?m.length:0;let y=s.get(d);if(y===void 0||y.count!==g){let C=function(){O.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var S=C;y!==void 0&&y.texture.dispose();const w=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let R=0;w===!0&&(R=1),b===!0&&(R=2),x===!0&&(R=3);let V=d.attributes.position.count*R,z=1;V>e.maxTextureSize&&(z=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const F=new Float32Array(V*z*4*g),O=new Jv(F,V,z,g);O.type=Zi,O.needsUpdate=!0;const P=R*4;for(let G=0;G<g;G++){const le=_[G],Q=D[G],fe=N[G],he=V*z*4*G;for(let se=0;se<le.count;se++){const ce=se*P;w===!0&&(o.fromBufferAttribute(le,se),F[he+ce+0]=o.x,F[he+ce+1]=o.y,F[he+ce+2]=o.z,F[he+ce+3]=0),b===!0&&(o.fromBufferAttribute(Q,se),F[he+ce+4]=o.x,F[he+ce+5]=o.y,F[he+ce+6]=o.z,F[he+ce+7]=0),x===!0&&(o.fromBufferAttribute(fe,se),F[he+ce+8]=o.x,F[he+ce+9]=o.y,F[he+ce+10]=o.z,F[he+ce+11]=fe.itemSize===4?o.w:1)}}y={count:g,texture:O,size:new Ut(V,z)},s.set(d,y),d.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",u.morphTexture,t);else{let w=0;for(let x=0;x<p.length;x++)w+=p[x];const b=d.morphTargetsRelative?1:1-w;f.getUniforms().setValue(i,"morphTargetBaseInfluence",b),f.getUniforms().setValue(i,"morphTargetInfluences",p)}f.getUniforms().setValue(i,"morphTargetsTexture",y.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}return{update:l}}function KM(i,e,t,s){let o=new WeakMap;function l(f){const p=s.render.frame,m=f.geometry,g=e.get(f,m);if(o.get(g)!==p&&(e.update(g),o.set(g,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",d)===!1&&f.addEventListener("dispose",d),o.get(f)!==p&&(t.update(f.instanceMatrix,i.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,i.ARRAY_BUFFER),o.set(f,p))),f.isSkinnedMesh){const y=f.skeleton;o.get(y)!==p&&(y.update(),o.set(y,p))}return g}function u(){o=new WeakMap}function d(f){const p=f.target;p.removeEventListener("dispose",d),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}const cx=new Ln,Fg=new ax(1,1),ux=new Jv,dx=new ww,fx=new sx,Og=[],Bg=[],zg=new Float32Array(16),Hg=new Float32Array(9),Vg=new Float32Array(4);function xo(i,e,t){const s=i[0];if(s<=0||s>0)return i;const o=e*t;let l=Og[o];if(l===void 0&&(l=new Float32Array(o),Og[o]=l),e!==0){s.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,i[u].toArray(l,d)}return l}function on(i,e){if(i.length!==e.length)return!1;for(let t=0,s=i.length;t<s;t++)if(i[t]!==e[t])return!1;return!0}function an(i,e){for(let t=0,s=e.length;t<s;t++)i[t]=e[t]}function Ec(i,e){let t=Bg[e];t===void 0&&(t=new Int32Array(e),Bg[e]=t);for(let s=0;s!==e;++s)t[s]=i.allocateTextureUnit();return t}function ZM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function JM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2fv(this.addr,e),an(t,e)}}function QM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;i.uniform3fv(this.addr,e),an(t,e)}}function eT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4fv(this.addr,e),an(t,e)}}function tT(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(on(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,s))return;Vg.set(s),i.uniformMatrix2fv(this.addr,!1,Vg),an(t,s)}}function nT(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(on(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,s))return;Hg.set(s),i.uniformMatrix3fv(this.addr,!1,Hg),an(t,s)}}function iT(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(on(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,s))return;zg.set(s),i.uniformMatrix4fv(this.addr,!1,zg),an(t,s)}}function rT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function sT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2iv(this.addr,e),an(t,e)}}function oT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3iv(this.addr,e),an(t,e)}}function aT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4iv(this.addr,e),an(t,e)}}function lT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function cT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2uiv(this.addr,e),an(t,e)}}function uT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3uiv(this.addr,e),an(t,e)}}function dT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4uiv(this.addr,e),an(t,e)}}function fT(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o);let l;this.type===i.SAMPLER_2D_SHADOW?(Fg.compareFunction=Kv,l=Fg):l=cx,t.setTexture2D(e||l,o)}function hT(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||dx,o)}function pT(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||fx,o)}function mT(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||ux,o)}function gT(i){switch(i){case 5126:return ZM;case 35664:return JM;case 35665:return QM;case 35666:return eT;case 35674:return tT;case 35675:return nT;case 35676:return iT;case 5124:case 35670:return rT;case 35667:case 35671:return sT;case 35668:case 35672:return oT;case 35669:case 35673:return aT;case 5125:return lT;case 36294:return cT;case 36295:return uT;case 36296:return dT;case 35678:case 36198:case 36298:case 36306:case 35682:return fT;case 35679:case 36299:case 36307:return hT;case 35680:case 36300:case 36308:case 36293:return pT;case 36289:case 36303:case 36311:case 36292:return mT}}function vT(i,e){i.uniform1fv(this.addr,e)}function xT(i,e){const t=xo(e,this.size,2);i.uniform2fv(this.addr,t)}function _T(i,e){const t=xo(e,this.size,3);i.uniform3fv(this.addr,t)}function yT(i,e){const t=xo(e,this.size,4);i.uniform4fv(this.addr,t)}function ST(i,e){const t=xo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function wT(i,e){const t=xo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ET(i,e){const t=xo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function bT(i,e){i.uniform1iv(this.addr,e)}function MT(i,e){i.uniform2iv(this.addr,e)}function TT(i,e){i.uniform3iv(this.addr,e)}function AT(i,e){i.uniform4iv(this.addr,e)}function CT(i,e){i.uniform1uiv(this.addr,e)}function RT(i,e){i.uniform2uiv(this.addr,e)}function PT(i,e){i.uniform3uiv(this.addr,e)}function NT(i,e){i.uniform4uiv(this.addr,e)}function LT(i,e,t){const s=this.cache,o=e.length,l=Ec(t,o);on(s,l)||(i.uniform1iv(this.addr,l),an(s,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||cx,l[u])}function DT(i,e,t){const s=this.cache,o=e.length,l=Ec(t,o);on(s,l)||(i.uniform1iv(this.addr,l),an(s,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||dx,l[u])}function UT(i,e,t){const s=this.cache,o=e.length,l=Ec(t,o);on(s,l)||(i.uniform1iv(this.addr,l),an(s,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||fx,l[u])}function IT(i,e,t){const s=this.cache,o=e.length,l=Ec(t,o);on(s,l)||(i.uniform1iv(this.addr,l),an(s,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||ux,l[u])}function kT(i){switch(i){case 5126:return vT;case 35664:return xT;case 35665:return _T;case 35666:return yT;case 35674:return ST;case 35675:return wT;case 35676:return ET;case 5124:case 35670:return bT;case 35667:case 35671:return MT;case 35668:case 35672:return TT;case 35669:case 35673:return AT;case 5125:return CT;case 36294:return RT;case 36295:return PT;case 36296:return NT;case 35678:case 36198:case 36298:case 36306:case 35682:return LT;case 35679:case 36299:case 36307:return DT;case 35680:case 36300:case 36308:case 36293:return UT;case 36289:case 36303:case 36311:case 36292:return IT}}class FT{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=gT(t.type)}}class OT{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kT(t.type)}}class BT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],s)}}}const jd=/(\w+)(\])?(\[|\.)?/g;function Gg(i,e){i.seq.push(e),i.map[e.id]=e}function zT(i,e,t){const s=i.name,o=s.length;for(jd.lastIndex=0;;){const l=jd.exec(s),u=jd.lastIndex;let d=l[1];const f=l[2]==="]",p=l[3];if(f&&(d=d|0),p===void 0||p==="["&&u+2===o){Gg(t,p===void 0?new FT(d,i,e):new OT(d,i,e));break}else{let g=t.map[d];g===void 0&&(g=new BT(d),Gg(t,g)),t=g}}}class uc{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);zT(l,u,this)}}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],f=s[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&s.push(u)}return s}}function Wg(i,e,t){const s=i.createShader(e);return i.shaderSource(s,t),i.compileShader(s),s}const HT=37297;let VT=0;function GT(i,e){const t=i.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;s.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return s.join(`
`)}const jg=new ft;function WT(i){Ct._getMatrix(jg,Ct.workingColorSpace,i);const e=`mat3( ${jg.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(i)){case mc:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Xg(i,e,t){const s=i.getShaderParameter(e,i.COMPILE_STATUS),o=i.getShaderInfoLog(e).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+GT(i.getShaderSource(e),u)}else return o}function jT(i,e){const t=WT(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function XT(i,e){let t;switch(e){case qS:t="Linear";break;case YS:t="Reinhard";break;case $S:t="Cineon";break;case KS:t="ACESFilmic";break;case JS:t="AgX";break;case QS:t="Neutral";break;case ZS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nc=new ie;function qT(){Ct.getLuminanceCoefficients(nc);const i=nc.x.toFixed(4),e=nc.y.toFixed(4),t=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YT(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function $T(i){const e=[];for(const t in i){const s=i[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function KT(i,e){const t={},s=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=i.getActiveAttrib(e,o),u=l.name;let d=1;l.type===i.FLOAT_MAT2&&(d=2),l.type===i.FLOAT_MAT3&&(d=3),l.type===i.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:i.getAttribLocation(e,u),locationSize:d}}return t}function oa(i){return i!==""}function qg(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hf(i){return i.replace(ZT,QT)}const JT=new Map;function QT(i,e){let t=ht[e];if(t===void 0){const s=JT.get(e);if(s!==void 0)t=ht[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Hf(t)}const e1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $g(i){return i.replace(e1,t1)}function t1(i,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Kg(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function n1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bv?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===TS?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function i1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case co:case uo:e="ENVMAP_TYPE_CUBE";break;case Sc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function r1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case uo:e="ENVMAP_MODE_REFRACTION";break}return e}function s1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zv:e="ENVMAP_BLENDING_MULTIPLY";break;case jS:e="ENVMAP_BLENDING_MIX";break;case XS:e="ENVMAP_BLENDING_ADD";break}return e}function o1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function a1(i,e,t,s){const o=i.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const f=n1(t),p=i1(t),m=r1(t),g=s1(t),y=o1(t),S=YT(t),w=$T(l),b=o.createProgram();let x,_,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(oa).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(oa).join(`
`),_.length>0&&(_+=`
`)):(x=[Kg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),_=[Kg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kr?"#define TONE_MAPPING":"",t.toneMapping!==kr?ht.tonemapping_pars_fragment:"",t.toneMapping!==kr?XT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,jT("linearToOutputTexel",t.outputColorSpace),qT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oa).join(`
`)),u=Hf(u),u=qg(u,t),u=Yg(u,t),d=Hf(d),d=qg(d,t),d=Yg(d,t),u=$g(u),d=$g(d),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===ug?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ug?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=D+x+u,R=D+_+d,V=Wg(o,o.VERTEX_SHADER,N),z=Wg(o,o.FRAGMENT_SHADER,R);o.attachShader(b,V),o.attachShader(b,z),t.index0AttributeName!==void 0?o.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function F(G){if(i.debug.checkShaderErrors){const le=o.getProgramInfoLog(b).trim(),Q=o.getShaderInfoLog(V).trim(),fe=o.getShaderInfoLog(z).trim();let he=!0,se=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(he=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,b,V,z);else{const ce=Xg(o,V,"vertex"),I=Xg(o,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+le+`
`+ce+`
`+I)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(Q===""||fe==="")&&(se=!1);se&&(G.diagnostics={runnable:he,programLog:le,vertexShader:{log:Q,prefix:x},fragmentShader:{log:fe,prefix:_}})}o.deleteShader(V),o.deleteShader(z),O=new uc(o,b),P=KT(o,b)}let O;this.getUniforms=function(){return O===void 0&&F(this),O};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(b,HT)),C},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=VT++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=V,this.fragmentShader=z,this}let l1=0;class c1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new u1(e),t.set(e,s)),s}}class u1{constructor(e){this.id=l1++,this.code=e,this.usedTimes=0}}function d1(i,e,t,s,o,l,u){const d=new Qv,f=new c1,p=new Set,m=[],g=o.logarithmicDepthBuffer,y=o.vertexTextures;let S=o.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(P){return p.add(P),P===0?"uv":`uv${P}`}function x(P,C,G,le,Q){const fe=le.fog,he=Q.geometry,se=P.isMeshStandardMaterial?le.environment:null,ce=(P.isMeshStandardMaterial?t:e).get(P.envMap||se),I=ce&&ce.mapping===Sc?ce.image.height:null,ue=w[P.type];P.precision!==null&&(S=o.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const oe=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,k=oe!==void 0?oe.length:0;let ne=0;he.morphAttributes.position!==void 0&&(ne=1),he.morphAttributes.normal!==void 0&&(ne=2),he.morphAttributes.color!==void 0&&(ne=3);let Ae,$,pe,be;if(ue){const bt=Ci[ue];Ae=bt.vertexShader,$=bt.fragmentShader}else Ae=P.vertexShader,$=P.fragmentShader,f.update(P),pe=f.getVertexShaderID(P),be=f.getFragmentShaderID(P);const me=i.getRenderTarget(),Ce=i.state.buffers.depth.getReversed(),qe=Q.isInstancedMesh===!0,Oe=Q.isBatchedMesh===!0,Nt=!!P.map,Rt=!!P.matcap,pt=!!ce,H=!!P.aoMap,Tn=!!P.lightMap,_t=!!P.bumpMap,gt=!!P.normalMap,Ze=!!P.displacementMap,Dt=!!P.emissiveMap,$e=!!P.metalnessMap,L=!!P.roughnessMap,T=P.anisotropy>0,J=P.clearcoat>0,ge=P.dispersion>0,ye=P.iridescence>0,de=P.sheen>0,Ye=P.transmission>0,Re=T&&!!P.anisotropyMap,et=J&&!!P.clearcoatMap,Qe=J&&!!P.clearcoatNormalMap,we=J&&!!P.clearcoatRoughnessMap,Be=ye&&!!P.iridescenceMap,rt=ye&&!!P.iridescenceThicknessMap,st=de&&!!P.sheenColorMap,ze=de&&!!P.sheenRoughnessMap,vt=!!P.specularMap,lt=!!P.specularColorMap,Lt=!!P.specularIntensityMap,j=Ye&&!!P.transmissionMap,Pe=Ye&&!!P.thicknessMap,ae=!!P.gradientMap,ve=!!P.alphaMap,Ue=P.alphaTest>0,De=!!P.alphaHash,ct=!!P.extensions;let Bt=kr;P.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Bt=i.toneMapping);const tn={shaderID:ue,shaderType:P.type,shaderName:P.name,vertexShader:Ae,fragmentShader:$,defines:P.defines,customVertexShaderID:pe,customFragmentShaderID:be,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Oe,batchingColor:Oe&&Q._colorsTexture!==null,instancing:qe,instancingColor:qe&&Q.instanceColor!==null,instancingMorph:qe&&Q.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:fo,alphaToCoverage:!!P.alphaToCoverage,map:Nt,matcap:Rt,envMap:pt,envMapMode:pt&&ce.mapping,envMapCubeUVHeight:I,aoMap:H,lightMap:Tn,bumpMap:_t,normalMap:gt,displacementMap:y&&Ze,emissiveMap:Dt,normalMapObjectSpace:gt&&P.normalMapType===rw,normalMapTangentSpace:gt&&P.normalMapType===iw,metalnessMap:$e,roughnessMap:L,anisotropy:T,anisotropyMap:Re,clearcoat:J,clearcoatMap:et,clearcoatNormalMap:Qe,clearcoatRoughnessMap:we,dispersion:ge,iridescence:ye,iridescenceMap:Be,iridescenceThicknessMap:rt,sheen:de,sheenColorMap:st,sheenRoughnessMap:ze,specularMap:vt,specularColorMap:lt,specularIntensityMap:Lt,transmission:Ye,transmissionMap:j,thicknessMap:Pe,gradientMap:ae,opaque:P.transparent===!1&&P.blending===oo&&P.alphaToCoverage===!1,alphaMap:ve,alphaTest:Ue,alphaHash:De,combine:P.combine,mapUv:Nt&&b(P.map.channel),aoMapUv:H&&b(P.aoMap.channel),lightMapUv:Tn&&b(P.lightMap.channel),bumpMapUv:_t&&b(P.bumpMap.channel),normalMapUv:gt&&b(P.normalMap.channel),displacementMapUv:Ze&&b(P.displacementMap.channel),emissiveMapUv:Dt&&b(P.emissiveMap.channel),metalnessMapUv:$e&&b(P.metalnessMap.channel),roughnessMapUv:L&&b(P.roughnessMap.channel),anisotropyMapUv:Re&&b(P.anisotropyMap.channel),clearcoatMapUv:et&&b(P.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&b(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&b(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&b(P.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&b(P.iridescenceThicknessMap.channel),sheenColorMapUv:st&&b(P.sheenColorMap.channel),sheenRoughnessMapUv:ze&&b(P.sheenRoughnessMap.channel),specularMapUv:vt&&b(P.specularMap.channel),specularColorMapUv:lt&&b(P.specularColorMap.channel),specularIntensityMapUv:Lt&&b(P.specularIntensityMap.channel),transmissionMapUv:j&&b(P.transmissionMap.channel),thicknessMapUv:Pe&&b(P.thicknessMap.channel),alphaMapUv:ve&&b(P.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(gt||T),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!he.attributes.uv&&(Nt||ve),fog:!!fe,useFog:P.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ce,skinning:Q.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:ne,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Nt&&P.map.isVideoTexture===!0&&Ct.getTransfer(P.map.colorSpace)===It,decodeVideoTextureEmissive:Dt&&P.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(P.emissiveMap.colorSpace)===It,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Ki,flipSided:P.side===Hn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ct&&P.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&P.extensions.multiDraw===!0||Oe)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return tn.vertexUv1s=p.has(1),tn.vertexUv2s=p.has(2),tn.vertexUv3s=p.has(3),p.clear(),tn}function _(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const G in P.defines)C.push(G),C.push(P.defines[G]);return P.isRawShaderMaterial===!1&&(D(C,P),N(C,P),C.push(i.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function D(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function N(P,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),P.push(d.mask)}function R(P){const C=w[P.type];let G;if(C){const le=Ci[C];G=kw.clone(le.uniforms)}else G=P.uniforms;return G}function V(P,C){let G;for(let le=0,Q=m.length;le<Q;le++){const fe=m[le];if(fe.cacheKey===C){G=fe,++G.usedTimes;break}}return G===void 0&&(G=new a1(i,C,P,l),m.push(G)),G}function z(P){if(--P.usedTimes===0){const C=m.indexOf(P);m[C]=m[m.length-1],m.pop(),P.destroy()}}function F(P){f.remove(P)}function O(){f.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:R,acquireProgram:V,releaseProgram:z,releaseShaderCache:F,programs:m,dispose:O}}function f1(){let i=new WeakMap;function e(u){return i.has(u)}function t(u){let d=i.get(u);return d===void 0&&(d={},i.set(u,d)),d}function s(u){i.delete(u)}function o(u,d,f){i.get(u)[d]=f}function l(){i=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function h1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Zg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jg(){const i=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function u(g,y,S,w,b,x){let _=i[e];return _===void 0?(_={id:g.id,object:g,geometry:y,material:S,groupOrder:w,renderOrder:g.renderOrder,z:b,group:x},i[e]=_):(_.id=g.id,_.object=g,_.geometry=y,_.material=S,_.groupOrder=w,_.renderOrder=g.renderOrder,_.z=b,_.group=x),e++,_}function d(g,y,S,w,b,x){const _=u(g,y,S,w,b,x);S.transmission>0?s.push(_):S.transparent===!0?o.push(_):t.push(_)}function f(g,y,S,w,b,x){const _=u(g,y,S,w,b,x);S.transmission>0?s.unshift(_):S.transparent===!0?o.unshift(_):t.unshift(_)}function p(g,y){t.length>1&&t.sort(g||h1),s.length>1&&s.sort(y||Zg),o.length>1&&o.sort(y||Zg)}function m(){for(let g=e,y=i.length;g<y;g++){const S=i[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:d,unshift:f,finish:m,sort:p}}function p1(){let i=new WeakMap;function e(s,o){const l=i.get(s);let u;return l===void 0?(u=new Jg,i.set(s,[u])):o>=l.length?(u=new Jg,l.push(u)):u=l[o],u}function t(){i=new WeakMap}return{get:e,dispose:t}}function m1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new kt};break;case"SpotLight":t={position:new ie,direction:new ie,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new kt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":t={color:new kt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return i[e.id]=t,t}}}function g1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let v1=0;function x1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _1(i){const e=new m1,t=g1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ie);const o=new ie,l=new en,u=new en;function d(p){let m=0,g=0,y=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let S=0,w=0,b=0,x=0,_=0,D=0,N=0,R=0,V=0,z=0,F=0;p.sort(x1);for(let P=0,C=p.length;P<C;P++){const G=p[P],le=G.color,Q=G.intensity,fe=G.distance,he=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)m+=le.r*Q,g+=le.g*Q,y+=le.b*Q;else if(G.isLightProbe){for(let se=0;se<9;se++)s.probe[se].addScaledVector(G.sh.coefficients[se],Q);F++}else if(G.isDirectionalLight){const se=e.get(G);if(se.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const ce=G.shadow,I=t.get(G);I.shadowIntensity=ce.intensity,I.shadowBias=ce.bias,I.shadowNormalBias=ce.normalBias,I.shadowRadius=ce.radius,I.shadowMapSize=ce.mapSize,s.directionalShadow[S]=I,s.directionalShadowMap[S]=he,s.directionalShadowMatrix[S]=G.shadow.matrix,D++}s.directional[S]=se,S++}else if(G.isSpotLight){const se=e.get(G);se.position.setFromMatrixPosition(G.matrixWorld),se.color.copy(le).multiplyScalar(Q),se.distance=fe,se.coneCos=Math.cos(G.angle),se.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),se.decay=G.decay,s.spot[b]=se;const ce=G.shadow;if(G.map&&(s.spotLightMap[V]=G.map,V++,ce.updateMatrices(G),G.castShadow&&z++),s.spotLightMatrix[b]=ce.matrix,G.castShadow){const I=t.get(G);I.shadowIntensity=ce.intensity,I.shadowBias=ce.bias,I.shadowNormalBias=ce.normalBias,I.shadowRadius=ce.radius,I.shadowMapSize=ce.mapSize,s.spotShadow[b]=I,s.spotShadowMap[b]=he,R++}b++}else if(G.isRectAreaLight){const se=e.get(G);se.color.copy(le).multiplyScalar(Q),se.halfWidth.set(G.width*.5,0,0),se.halfHeight.set(0,G.height*.5,0),s.rectArea[x]=se,x++}else if(G.isPointLight){const se=e.get(G);if(se.color.copy(G.color).multiplyScalar(G.intensity),se.distance=G.distance,se.decay=G.decay,G.castShadow){const ce=G.shadow,I=t.get(G);I.shadowIntensity=ce.intensity,I.shadowBias=ce.bias,I.shadowNormalBias=ce.normalBias,I.shadowRadius=ce.radius,I.shadowMapSize=ce.mapSize,I.shadowCameraNear=ce.camera.near,I.shadowCameraFar=ce.camera.far,s.pointShadow[w]=I,s.pointShadowMap[w]=he,s.pointShadowMatrix[w]=G.shadow.matrix,N++}s.point[w]=se,w++}else if(G.isHemisphereLight){const se=e.get(G);se.skyColor.copy(G.color).multiplyScalar(Q),se.groundColor.copy(G.groundColor).multiplyScalar(Q),s.hemi[_]=se,_++}}x>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2)),s.ambient[0]=m,s.ambient[1]=g,s.ambient[2]=y;const O=s.hash;(O.directionalLength!==S||O.pointLength!==w||O.spotLength!==b||O.rectAreaLength!==x||O.hemiLength!==_||O.numDirectionalShadows!==D||O.numPointShadows!==N||O.numSpotShadows!==R||O.numSpotMaps!==V||O.numLightProbes!==F)&&(s.directional.length=S,s.spot.length=b,s.rectArea.length=x,s.point.length=w,s.hemi.length=_,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=R+V-z,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=F,O.directionalLength=S,O.pointLength=w,O.spotLength=b,O.rectAreaLength=x,O.hemiLength=_,O.numDirectionalShadows=D,O.numPointShadows=N,O.numSpotShadows=R,O.numSpotMaps=V,O.numLightProbes=F,s.version=v1++)}function f(p,m){let g=0,y=0,S=0,w=0,b=0;const x=m.matrixWorldInverse;for(let _=0,D=p.length;_<D;_++){const N=p[_];if(N.isDirectionalLight){const R=s.directional[g];R.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(x),g++}else if(N.isSpotLight){const R=s.spot[S];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(x),R.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(x),S++}else if(N.isRectAreaLight){const R=s.rectArea[w];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(x),u.identity(),l.copy(N.matrixWorld),l.premultiply(x),u.extractRotation(l),R.halfWidth.set(N.width*.5,0,0),R.halfHeight.set(0,N.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),w++}else if(N.isPointLight){const R=s.point[y];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(x),y++}else if(N.isHemisphereLight){const R=s.hemi[b];R.direction.setFromMatrixPosition(N.matrixWorld),R.direction.transformDirection(x),b++}}}return{setup:d,setupView:f,state:s}}function Qg(i){const e=new _1(i),t=[],s=[];function o(m){p.camera=m,t.length=0,s.length=0}function l(m){t.push(m)}function u(m){s.push(m)}function d(){e.setup(t)}function f(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:f,pushLight:l,pushShadow:u}}function y1(i){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new Qg(i),e.set(o,[d])):l>=u.length?(d=new Qg(i),u.push(d)):d=u[l],d}function s(){e=new WeakMap}return{get:t,dispose:s}}const S1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function E1(i,e,t){let s=new ox;const o=new Ut,l=new Ut,u=new Kt,d=new jw({depthPacking:nw}),f=new Xw,p={},m=t.maxTextureSize,g={[Fr]:Hn,[Hn]:Fr,[Ki]:Ki},y=new nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:S1,fragmentShader:w1}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const w=new _s;w.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ri(w,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bv;let _=this.type;this.render=function(z,F,O){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||z.length===0)return;const P=i.getRenderTarget(),C=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),le=i.state;le.setBlending(Ir),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const Q=_!==$i&&this.type===$i,fe=_===$i&&this.type!==$i;for(let he=0,se=z.length;he<se;he++){const ce=z[he],I=ce.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;o.copy(I.mapSize);const ue=I.getFrameExtents();if(o.multiply(ue),l.copy(I.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/ue.x),o.x=l.x*ue.x,I.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/ue.y),o.y=l.y*ue.y,I.mapSize.y=l.y)),I.map===null||Q===!0||fe===!0){const k=this.type!==$i?{minFilter:_i,magFilter:_i}:{};I.map!==null&&I.map.dispose(),I.map=new ms(o.x,o.y,k),I.map.texture.name=ce.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const oe=I.getViewportCount();for(let k=0;k<oe;k++){const ne=I.getViewport(k);u.set(l.x*ne.x,l.y*ne.y,l.x*ne.z,l.y*ne.w),le.viewport(u),I.updateMatrices(ce,k),s=I.getFrustum(),R(F,O,I.camera,ce,this.type)}I.isPointLightShadow!==!0&&this.type===$i&&D(I,O),I.needsUpdate=!1}_=this.type,x.needsUpdate=!1,i.setRenderTarget(P,C,G)};function D(z,F){const O=e.update(b);y.defines.VSM_SAMPLES!==z.blurSamples&&(y.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ms(o.x,o.y)),y.uniforms.shadow_pass.value=z.map.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,i.setRenderTarget(z.mapPass),i.clear(),i.renderBufferDirect(F,null,O,y,b,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,i.setRenderTarget(z.map),i.clear(),i.renderBufferDirect(F,null,O,S,b,null)}function N(z,F,O,P){let C=null;const G=O.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(G!==void 0)C=G;else if(C=O.isPointLight===!0?f:d,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const le=C.uuid,Q=F.uuid;let fe=p[le];fe===void 0&&(fe={},p[le]=fe);let he=fe[Q];he===void 0&&(he=C.clone(),fe[Q]=he,F.addEventListener("dispose",V)),C=he}if(C.visible=F.visible,C.wireframe=F.wireframe,P===$i?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:g[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,O.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const le=i.properties.get(C);le.light=O}return C}function R(z,F,O,P,C){if(z.visible===!1)return;if(z.layers.test(F.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&C===$i)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,z.matrixWorld);const Q=e.update(z),fe=z.material;if(Array.isArray(fe)){const he=Q.groups;for(let se=0,ce=he.length;se<ce;se++){const I=he[se],ue=fe[I.materialIndex];if(ue&&ue.visible){const oe=N(z,ue,P,C);z.onBeforeShadow(i,z,F,O,Q,oe,I),i.renderBufferDirect(O,null,Q,oe,z,I),z.onAfterShadow(i,z,F,O,Q,oe,I)}}}else if(fe.visible){const he=N(z,fe,P,C);z.onBeforeShadow(i,z,F,O,Q,he,null),i.renderBufferDirect(O,null,Q,he,z,null),z.onAfterShadow(i,z,F,O,Q,he,null)}}const le=z.children;for(let Q=0,fe=le.length;Q<fe;Q++)R(le[Q],F,O,P,C)}function V(z){z.target.removeEventListener("dispose",V);for(const O in p){const P=p[O],C=z.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const b1={[rf]:sf,[of]:cf,[af]:uf,[lo]:lf,[sf]:rf,[cf]:of,[uf]:af,[lf]:lo};function M1(i,e){function t(){let j=!1;const Pe=new Kt;let ae=null;const ve=new Kt(0,0,0,0);return{setMask:function(Ue){ae!==Ue&&!j&&(i.colorMask(Ue,Ue,Ue,Ue),ae=Ue)},setLocked:function(Ue){j=Ue},setClear:function(Ue,De,ct,Bt,tn){tn===!0&&(Ue*=Bt,De*=Bt,ct*=Bt),Pe.set(Ue,De,ct,Bt),ve.equals(Pe)===!1&&(i.clearColor(Ue,De,ct,Bt),ve.copy(Pe))},reset:function(){j=!1,ae=null,ve.set(-1,0,0,0)}}}function s(){let j=!1,Pe=!1,ae=null,ve=null,Ue=null;return{setReversed:function(De){if(Pe!==De){const ct=e.get("EXT_clip_control");De?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT),Pe=De;const Bt=Ue;Ue=null,this.setClear(Bt)}},getReversed:function(){return Pe},setTest:function(De){De?me(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(De){ae!==De&&!j&&(i.depthMask(De),ae=De)},setFunc:function(De){if(Pe&&(De=b1[De]),ve!==De){switch(De){case rf:i.depthFunc(i.NEVER);break;case sf:i.depthFunc(i.ALWAYS);break;case of:i.depthFunc(i.LESS);break;case lo:i.depthFunc(i.LEQUAL);break;case af:i.depthFunc(i.EQUAL);break;case lf:i.depthFunc(i.GEQUAL);break;case cf:i.depthFunc(i.GREATER);break;case uf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=De}},setLocked:function(De){j=De},setClear:function(De){Ue!==De&&(Pe&&(De=1-De),i.clearDepth(De),Ue=De)},reset:function(){j=!1,ae=null,ve=null,Ue=null,Pe=!1}}}function o(){let j=!1,Pe=null,ae=null,ve=null,Ue=null,De=null,ct=null,Bt=null,tn=null;return{setTest:function(bt){j||(bt?me(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(bt){Pe!==bt&&!j&&(i.stencilMask(bt),Pe=bt)},setFunc:function(bt,Dn,An){(ae!==bt||ve!==Dn||Ue!==An)&&(i.stencilFunc(bt,Dn,An),ae=bt,ve=Dn,Ue=An)},setOp:function(bt,Dn,An){(De!==bt||ct!==Dn||Bt!==An)&&(i.stencilOp(bt,Dn,An),De=bt,ct=Dn,Bt=An)},setLocked:function(bt){j=bt},setClear:function(bt){tn!==bt&&(i.clearStencil(bt),tn=bt)},reset:function(){j=!1,Pe=null,ae=null,ve=null,Ue=null,De=null,ct=null,Bt=null,tn=null}}}const l=new t,u=new s,d=new o,f=new WeakMap,p=new WeakMap;let m={},g={},y=new WeakMap,S=[],w=null,b=!1,x=null,_=null,D=null,N=null,R=null,V=null,z=null,F=new kt(0,0,0),O=0,P=!1,C=null,G=null,le=null,Q=null,fe=null;const he=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,ce=0;const I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(I)[1]),se=ce>=1):I.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),se=ce>=2);let ue=null,oe={};const k=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),Ae=new Kt().fromArray(k),$=new Kt().fromArray(ne);function pe(j,Pe,ae,ve){const Ue=new Uint8Array(4),De=i.createTexture();i.bindTexture(j,De),i.texParameteri(j,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(j,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ct=0;ct<ae;ct++)j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?i.texImage3D(Pe,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,Ue):i.texImage2D(Pe+ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ue);return De}const be={};be[i.TEXTURE_2D]=pe(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[i.TEXTURE_2D_ARRAY]=pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),me(i.DEPTH_TEST),u.setFunc(lo),_t(!1),gt(rg),me(i.CULL_FACE),H(Ir);function me(j){m[j]!==!0&&(i.enable(j),m[j]=!0)}function Ce(j){m[j]!==!1&&(i.disable(j),m[j]=!1)}function qe(j,Pe){return g[j]!==Pe?(i.bindFramebuffer(j,Pe),g[j]=Pe,j===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Pe),j===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Oe(j,Pe){let ae=S,ve=!1;if(j){ae=y.get(Pe),ae===void 0&&(ae=[],y.set(Pe,ae));const Ue=j.textures;if(ae.length!==Ue.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let De=0,ct=Ue.length;De<ct;De++)ae[De]=i.COLOR_ATTACHMENT0+De;ae.length=Ue.length,ve=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,ve=!0);ve&&i.drawBuffers(ae)}function Nt(j){return w!==j?(i.useProgram(j),w=j,!0):!1}const Rt={[as]:i.FUNC_ADD,[CS]:i.FUNC_SUBTRACT,[RS]:i.FUNC_REVERSE_SUBTRACT};Rt[PS]=i.MIN,Rt[NS]=i.MAX;const pt={[LS]:i.ZERO,[DS]:i.ONE,[US]:i.SRC_COLOR,[tf]:i.SRC_ALPHA,[zS]:i.SRC_ALPHA_SATURATE,[OS]:i.DST_COLOR,[kS]:i.DST_ALPHA,[IS]:i.ONE_MINUS_SRC_COLOR,[nf]:i.ONE_MINUS_SRC_ALPHA,[BS]:i.ONE_MINUS_DST_COLOR,[FS]:i.ONE_MINUS_DST_ALPHA,[HS]:i.CONSTANT_COLOR,[VS]:i.ONE_MINUS_CONSTANT_COLOR,[GS]:i.CONSTANT_ALPHA,[WS]:i.ONE_MINUS_CONSTANT_ALPHA};function H(j,Pe,ae,ve,Ue,De,ct,Bt,tn,bt){if(j===Ir){b===!0&&(Ce(i.BLEND),b=!1);return}if(b===!1&&(me(i.BLEND),b=!0),j!==AS){if(j!==x||bt!==P){if((_!==as||R!==as)&&(i.blendEquation(i.FUNC_ADD),_=as,R=as),bt)switch(j){case oo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sg:i.blendFunc(i.ONE,i.ONE);break;case og:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ag:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case oo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sg:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case og:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ag:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}D=null,N=null,V=null,z=null,F.set(0,0,0),O=0,x=j,P=bt}return}Ue=Ue||Pe,De=De||ae,ct=ct||ve,(Pe!==_||Ue!==R)&&(i.blendEquationSeparate(Rt[Pe],Rt[Ue]),_=Pe,R=Ue),(ae!==D||ve!==N||De!==V||ct!==z)&&(i.blendFuncSeparate(pt[ae],pt[ve],pt[De],pt[ct]),D=ae,N=ve,V=De,z=ct),(Bt.equals(F)===!1||tn!==O)&&(i.blendColor(Bt.r,Bt.g,Bt.b,tn),F.copy(Bt),O=tn),x=j,P=!1}function Tn(j,Pe){j.side===Ki?Ce(i.CULL_FACE):me(i.CULL_FACE);let ae=j.side===Hn;Pe&&(ae=!ae),_t(ae),j.blending===oo&&j.transparent===!1?H(Ir):H(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),u.setFunc(j.depthFunc),u.setTest(j.depthTest),u.setMask(j.depthWrite),l.setMask(j.colorWrite);const ve=j.stencilWrite;d.setTest(ve),ve&&(d.setMask(j.stencilWriteMask),d.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),d.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Dt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(j){C!==j&&(j?i.frontFace(i.CW):i.frontFace(i.CCW),C=j)}function gt(j){j!==bS?(me(i.CULL_FACE),j!==G&&(j===rg?i.cullFace(i.BACK):j===MS?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),G=j}function Ze(j){j!==le&&(se&&i.lineWidth(j),le=j)}function Dt(j,Pe,ae){j?(me(i.POLYGON_OFFSET_FILL),(Q!==Pe||fe!==ae)&&(i.polygonOffset(Pe,ae),Q=Pe,fe=ae)):Ce(i.POLYGON_OFFSET_FILL)}function $e(j){j?me(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function L(j){j===void 0&&(j=i.TEXTURE0+he-1),ue!==j&&(i.activeTexture(j),ue=j)}function T(j,Pe,ae){ae===void 0&&(ue===null?ae=i.TEXTURE0+he-1:ae=ue);let ve=oe[ae];ve===void 0&&(ve={type:void 0,texture:void 0},oe[ae]=ve),(ve.type!==j||ve.texture!==Pe)&&(ue!==ae&&(i.activeTexture(ae),ue=ae),i.bindTexture(j,Pe||be[j]),ve.type=j,ve.texture=Pe)}function J(){const j=oe[ue];j!==void 0&&j.type!==void 0&&(i.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function ge(){try{i.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ye(){try{i.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function de(){try{i.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ye(){try{i.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Re(){try{i.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function et(){try{i.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Qe(){try{i.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function we(){try{i.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Be(){try{i.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function rt(){try{i.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function st(j){Ae.equals(j)===!1&&(i.scissor(j.x,j.y,j.z,j.w),Ae.copy(j))}function ze(j){$.equals(j)===!1&&(i.viewport(j.x,j.y,j.z,j.w),$.copy(j))}function vt(j,Pe){let ae=p.get(Pe);ae===void 0&&(ae=new WeakMap,p.set(Pe,ae));let ve=ae.get(j);ve===void 0&&(ve=i.getUniformBlockIndex(Pe,j.name),ae.set(j,ve))}function lt(j,Pe){const ve=p.get(Pe).get(j);f.get(Pe)!==ve&&(i.uniformBlockBinding(Pe,ve,j.__bindingPointIndex),f.set(Pe,ve))}function Lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},ue=null,oe={},g={},y=new WeakMap,S=[],w=null,b=!1,x=null,_=null,D=null,N=null,R=null,V=null,z=null,F=new kt(0,0,0),O=0,P=!1,C=null,G=null,le=null,Q=null,fe=null,Ae.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:me,disable:Ce,bindFramebuffer:qe,drawBuffers:Oe,useProgram:Nt,setBlending:H,setMaterial:Tn,setFlipSided:_t,setCullFace:gt,setLineWidth:Ze,setPolygonOffset:Dt,setScissorTest:$e,activeTexture:L,bindTexture:T,unbindTexture:J,compressedTexImage2D:ge,compressedTexImage3D:ye,texImage2D:Be,texImage3D:rt,updateUBOMapping:vt,uniformBlockBinding:lt,texStorage2D:Qe,texStorage3D:we,texSubImage2D:de,texSubImage3D:Ye,compressedTexSubImage2D:Re,compressedTexSubImage3D:et,scissor:st,viewport:ze,reset:Lt}}function T1(i,e,t,s,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ut,m=new WeakMap;let g;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(L,T){return S?new OffscreenCanvas(L,T):pa("canvas")}function b(L,T,J){let ge=1;const ye=$e(L);if((ye.width>J||ye.height>J)&&(ge=J/Math.max(ye.width,ye.height)),ge<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const de=Math.floor(ge*ye.width),Ye=Math.floor(ge*ye.height);g===void 0&&(g=w(de,Ye));const Re=T?w(de,Ye):g;return Re.width=de,Re.height=Ye,Re.getContext("2d").drawImage(L,0,0,de,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+de+"x"+Ye+")."),Re}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),L;return L}function x(L){return L.generateMipmaps}function _(L){i.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function N(L,T,J,ge,ye=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let de=T;if(T===i.RED&&(J===i.FLOAT&&(de=i.R32F),J===i.HALF_FLOAT&&(de=i.R16F),J===i.UNSIGNED_BYTE&&(de=i.R8)),T===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(de=i.R8UI),J===i.UNSIGNED_SHORT&&(de=i.R16UI),J===i.UNSIGNED_INT&&(de=i.R32UI),J===i.BYTE&&(de=i.R8I),J===i.SHORT&&(de=i.R16I),J===i.INT&&(de=i.R32I)),T===i.RG&&(J===i.FLOAT&&(de=i.RG32F),J===i.HALF_FLOAT&&(de=i.RG16F),J===i.UNSIGNED_BYTE&&(de=i.RG8)),T===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(de=i.RG8UI),J===i.UNSIGNED_SHORT&&(de=i.RG16UI),J===i.UNSIGNED_INT&&(de=i.RG32UI),J===i.BYTE&&(de=i.RG8I),J===i.SHORT&&(de=i.RG16I),J===i.INT&&(de=i.RG32I)),T===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(de=i.RGB8UI),J===i.UNSIGNED_SHORT&&(de=i.RGB16UI),J===i.UNSIGNED_INT&&(de=i.RGB32UI),J===i.BYTE&&(de=i.RGB8I),J===i.SHORT&&(de=i.RGB16I),J===i.INT&&(de=i.RGB32I)),T===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(de=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(de=i.RGBA16UI),J===i.UNSIGNED_INT&&(de=i.RGBA32UI),J===i.BYTE&&(de=i.RGBA8I),J===i.SHORT&&(de=i.RGBA16I),J===i.INT&&(de=i.RGBA32I)),T===i.RGB&&J===i.UNSIGNED_INT_5_9_9_9_REV&&(de=i.RGB9_E5),T===i.RGBA){const Ye=ye?mc:Ct.getTransfer(ge);J===i.FLOAT&&(de=i.RGBA32F),J===i.HALF_FLOAT&&(de=i.RGBA16F),J===i.UNSIGNED_BYTE&&(de=Ye===It?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(de=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(de=i.RGB5_A1)}return(de===i.R16F||de===i.R32F||de===i.RG16F||de===i.RG32F||de===i.RGBA16F||de===i.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function R(L,T){let J;return L?T===null||T===ps||T===da?J=i.DEPTH24_STENCIL8:T===Zi?J=i.DEPTH32F_STENCIL8:T===ua&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ps||T===da?J=i.DEPTH_COMPONENT24:T===Zi?J=i.DEPTH_COMPONENT32F:T===ua&&(J=i.DEPTH_COMPONENT16),J}function V(L,T){return x(L)===!0||L.isFramebufferTexture&&L.minFilter!==_i&&L.minFilter!==vi?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function z(L){const T=L.target;T.removeEventListener("dispose",z),O(T),T.isVideoTexture&&m.delete(T)}function F(L){const T=L.target;T.removeEventListener("dispose",F),C(T)}function O(L){const T=s.get(L);if(T.__webglInit===void 0)return;const J=L.source,ge=y.get(J);if(ge){const ye=ge[T.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&P(L),Object.keys(ge).length===0&&y.delete(J)}s.remove(L)}function P(L){const T=s.get(L);i.deleteTexture(T.__webglTexture);const J=L.source,ge=y.get(J);delete ge[T.__cacheKey],u.memory.textures--}function C(L){const T=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(T.__webglFramebuffer[ge]))for(let ye=0;ye<T.__webglFramebuffer[ge].length;ye++)i.deleteFramebuffer(T.__webglFramebuffer[ge][ye]);else i.deleteFramebuffer(T.__webglFramebuffer[ge]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[ge])}else{if(Array.isArray(T.__webglFramebuffer))for(let ge=0;ge<T.__webglFramebuffer.length;ge++)i.deleteFramebuffer(T.__webglFramebuffer[ge]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ge=0;ge<T.__webglColorRenderbuffer.length;ge++)T.__webglColorRenderbuffer[ge]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[ge]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const J=L.textures;for(let ge=0,ye=J.length;ge<ye;ge++){const de=s.get(J[ge]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),u.memory.textures--),s.remove(J[ge])}s.remove(L)}let G=0;function le(){G=0}function Q(){const L=G;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),G+=1,L}function fe(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function he(L,T){const J=s.get(L);if(L.isVideoTexture&&Ze(L),L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){const ge=L.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(J,L,T);return}}t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+T)}function se(L,T){const J=s.get(L);if(L.version>0&&J.__version!==L.version){$(J,L,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+T)}function ce(L,T){const J=s.get(L);if(L.version>0&&J.__version!==L.version){$(J,L,T);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+T)}function I(L,T){const J=s.get(L);if(L.version>0&&J.__version!==L.version){pe(J,L,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+T)}const ue={[ca]:i.REPEAT,[cs]:i.CLAMP_TO_EDGE,[hf]:i.MIRRORED_REPEAT},oe={[_i]:i.NEAREST,[ew]:i.NEAREST_MIPMAP_NEAREST,[Il]:i.NEAREST_MIPMAP_LINEAR,[vi]:i.LINEAR,[gd]:i.LINEAR_MIPMAP_NEAREST,[us]:i.LINEAR_MIPMAP_LINEAR},k={[sw]:i.NEVER,[dw]:i.ALWAYS,[ow]:i.LESS,[Kv]:i.LEQUAL,[aw]:i.EQUAL,[uw]:i.GEQUAL,[lw]:i.GREATER,[cw]:i.NOTEQUAL};function ne(L,T){if(T.type===Zi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===vi||T.magFilter===gd||T.magFilter===Il||T.magFilter===us||T.minFilter===vi||T.minFilter===gd||T.minFilter===Il||T.minFilter===us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,ue[T.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,ue[T.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,ue[T.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,oe[T.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,oe[T.minFilter]),T.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,k[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===_i||T.minFilter!==Il&&T.minFilter!==us||T.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Ae(L,T){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",z));const ge=T.source;let ye=y.get(ge);ye===void 0&&(ye={},y.set(ge,ye));const de=fe(T);if(de!==L.__cacheKey){ye[de]===void 0&&(ye[de]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,J=!0),ye[de].usedTimes++;const Ye=ye[L.__cacheKey];Ye!==void 0&&(ye[L.__cacheKey].usedTimes--,Ye.usedTimes===0&&P(T)),L.__cacheKey=de,L.__webglTexture=ye[de].texture}return J}function $(L,T,J){let ge=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ge=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ge=i.TEXTURE_3D);const ye=Ae(L,T),de=T.source;t.bindTexture(ge,L.__webglTexture,i.TEXTURE0+J);const Ye=s.get(de);if(de.version!==Ye.__version||ye===!0){t.activeTexture(i.TEXTURE0+J);const Re=Ct.getPrimaries(Ct.workingColorSpace),et=T.colorSpace===Lr?null:Ct.getPrimaries(T.colorSpace),Qe=T.colorSpace===Lr||Re===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let we=b(T.image,!1,o.maxTextureSize);we=Dt(T,we);const Be=l.convert(T.format,T.colorSpace),rt=l.convert(T.type);let st=N(T.internalFormat,Be,rt,T.colorSpace,T.isVideoTexture);ne(ge,T);let ze;const vt=T.mipmaps,lt=T.isVideoTexture!==!0,Lt=Ye.__version===void 0||ye===!0,j=de.dataReady,Pe=V(T,we);if(T.isDepthTexture)st=R(T.format===ha,T.type),Lt&&(lt?t.texStorage2D(i.TEXTURE_2D,1,st,we.width,we.height):t.texImage2D(i.TEXTURE_2D,0,st,we.width,we.height,0,Be,rt,null));else if(T.isDataTexture)if(vt.length>0){lt&&Lt&&t.texStorage2D(i.TEXTURE_2D,Pe,st,vt[0].width,vt[0].height);for(let ae=0,ve=vt.length;ae<ve;ae++)ze=vt[ae],lt?j&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ze.width,ze.height,Be,rt,ze.data):t.texImage2D(i.TEXTURE_2D,ae,st,ze.width,ze.height,0,Be,rt,ze.data);T.generateMipmaps=!1}else lt?(Lt&&t.texStorage2D(i.TEXTURE_2D,Pe,st,we.width,we.height),j&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we.width,we.height,Be,rt,we.data)):t.texImage2D(i.TEXTURE_2D,0,st,we.width,we.height,0,Be,rt,we.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){lt&&Lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,st,vt[0].width,vt[0].height,we.depth);for(let ae=0,ve=vt.length;ae<ve;ae++)if(ze=vt[ae],T.format!==xi)if(Be!==null)if(lt){if(j)if(T.layerUpdates.size>0){const Ue=Rg(ze.width,ze.height,T.format,T.type);for(const De of T.layerUpdates){const ct=ze.data.subarray(De*Ue/ze.data.BYTES_PER_ELEMENT,(De+1)*Ue/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,De,ze.width,ze.height,1,Be,ct)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,ze.width,ze.height,we.depth,Be,ze.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,st,ze.width,ze.height,we.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?j&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,ze.width,ze.height,we.depth,Be,rt,ze.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,st,ze.width,ze.height,we.depth,0,Be,rt,ze.data)}else{lt&&Lt&&t.texStorage2D(i.TEXTURE_2D,Pe,st,vt[0].width,vt[0].height);for(let ae=0,ve=vt.length;ae<ve;ae++)ze=vt[ae],T.format!==xi?Be!==null?lt?j&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,ze.width,ze.height,Be,ze.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,st,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?j&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ze.width,ze.height,Be,rt,ze.data):t.texImage2D(i.TEXTURE_2D,ae,st,ze.width,ze.height,0,Be,rt,ze.data)}else if(T.isDataArrayTexture)if(lt){if(Lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,st,we.width,we.height,we.depth),j)if(T.layerUpdates.size>0){const ae=Rg(we.width,we.height,T.format,T.type);for(const ve of T.layerUpdates){const Ue=we.data.subarray(ve*ae/we.data.BYTES_PER_ELEMENT,(ve+1)*ae/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ve,we.width,we.height,1,Be,rt,Ue)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Be,rt,we.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,st,we.width,we.height,we.depth,0,Be,rt,we.data);else if(T.isData3DTexture)lt?(Lt&&t.texStorage3D(i.TEXTURE_3D,Pe,st,we.width,we.height,we.depth),j&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Be,rt,we.data)):t.texImage3D(i.TEXTURE_3D,0,st,we.width,we.height,we.depth,0,Be,rt,we.data);else if(T.isFramebufferTexture){if(Lt)if(lt)t.texStorage2D(i.TEXTURE_2D,Pe,st,we.width,we.height);else{let ae=we.width,ve=we.height;for(let Ue=0;Ue<Pe;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,st,ae,ve,0,Be,rt,null),ae>>=1,ve>>=1}}else if(vt.length>0){if(lt&&Lt){const ae=$e(vt[0]);t.texStorage2D(i.TEXTURE_2D,Pe,st,ae.width,ae.height)}for(let ae=0,ve=vt.length;ae<ve;ae++)ze=vt[ae],lt?j&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Be,rt,ze):t.texImage2D(i.TEXTURE_2D,ae,st,Be,rt,ze);T.generateMipmaps=!1}else if(lt){if(Lt){const ae=$e(we);t.texStorage2D(i.TEXTURE_2D,Pe,st,ae.width,ae.height)}j&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Be,rt,we)}else t.texImage2D(i.TEXTURE_2D,0,st,Be,rt,we);x(T)&&_(ge),Ye.__version=de.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function pe(L,T,J){if(T.image.length!==6)return;const ge=Ae(L,T),ye=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+J);const de=s.get(ye);if(ye.version!==de.__version||ge===!0){t.activeTexture(i.TEXTURE0+J);const Ye=Ct.getPrimaries(Ct.workingColorSpace),Re=T.colorSpace===Lr?null:Ct.getPrimaries(T.colorSpace),et=T.colorSpace===Lr||Ye===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);const Qe=T.isCompressedTexture||T.image[0].isCompressedTexture,we=T.image[0]&&T.image[0].isDataTexture,Be=[];for(let ve=0;ve<6;ve++)!Qe&&!we?Be[ve]=b(T.image[ve],!0,o.maxCubemapSize):Be[ve]=we?T.image[ve].image:T.image[ve],Be[ve]=Dt(T,Be[ve]);const rt=Be[0],st=l.convert(T.format,T.colorSpace),ze=l.convert(T.type),vt=N(T.internalFormat,st,ze,T.colorSpace),lt=T.isVideoTexture!==!0,Lt=de.__version===void 0||ge===!0,j=ye.dataReady;let Pe=V(T,rt);ne(i.TEXTURE_CUBE_MAP,T);let ae;if(Qe){lt&&Lt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,vt,rt.width,rt.height);for(let ve=0;ve<6;ve++){ae=Be[ve].mipmaps;for(let Ue=0;Ue<ae.length;Ue++){const De=ae[Ue];T.format!==xi?st!==null?lt?j&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue,0,0,De.width,De.height,st,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue,vt,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue,0,0,De.width,De.height,st,ze,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue,vt,De.width,De.height,0,st,ze,De.data)}}}else{if(ae=T.mipmaps,lt&&Lt){ae.length>0&&Pe++;const ve=$e(Be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,vt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(we){lt?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Be[ve].width,Be[ve].height,st,ze,Be[ve].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,vt,Be[ve].width,Be[ve].height,0,st,ze,Be[ve].data);for(let Ue=0;Ue<ae.length;Ue++){const ct=ae[Ue].image[ve].image;lt?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue+1,0,0,ct.width,ct.height,st,ze,ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue+1,vt,ct.width,ct.height,0,st,ze,ct.data)}}else{lt?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,st,ze,Be[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,vt,st,ze,Be[ve]);for(let Ue=0;Ue<ae.length;Ue++){const De=ae[Ue];lt?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue+1,0,0,st,ze,De.image[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue+1,vt,st,ze,De.image[ve])}}}x(T)&&_(i.TEXTURE_CUBE_MAP),de.__version=ye.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function be(L,T,J,ge,ye,de){const Ye=l.convert(J.format,J.colorSpace),Re=l.convert(J.type),et=N(J.internalFormat,Ye,Re,J.colorSpace),Qe=s.get(T),we=s.get(J);if(we.__renderTarget=T,!Qe.__hasExternalTextures){const Be=Math.max(1,T.width>>de),rt=Math.max(1,T.height>>de);ye===i.TEXTURE_3D||ye===i.TEXTURE_2D_ARRAY?t.texImage3D(ye,de,et,Be,rt,T.depth,0,Ye,Re,null):t.texImage2D(ye,de,et,Be,rt,0,Ye,Re,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),gt(T)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,ye,we.__webglTexture,0,_t(T)):(ye===i.TEXTURE_2D||ye>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ge,ye,we.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(L,T,J){if(i.bindRenderbuffer(i.RENDERBUFFER,L),T.depthBuffer){const ge=T.depthTexture,ye=ge&&ge.isDepthTexture?ge.type:null,de=R(T.stencilBuffer,ye),Ye=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=_t(T);gt(T)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,de,T.width,T.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,de,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,de,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ye,i.RENDERBUFFER,L)}else{const ge=T.textures;for(let ye=0;ye<ge.length;ye++){const de=ge[ye],Ye=l.convert(de.format,de.colorSpace),Re=l.convert(de.type),et=N(de.internalFormat,Ye,Re,de.colorSpace),Qe=_t(T);J&&gt(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,et,T.width,T.height):gt(T)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qe,et,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,et,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=s.get(T.depthTexture);ge.__renderTarget=T,(!ge.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),he(T.depthTexture,0);const ye=ge.__webglTexture,de=_t(T);if(T.depthTexture.format===fa)gt(T)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0);else if(T.depthTexture.format===ha)gt(T)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function qe(L){const T=s.get(L),J=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const ge=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ge){const ye=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ge.removeEventListener("dispose",ye)};ge.addEventListener("dispose",ye),T.__depthDisposeCallback=ye}T.__boundDepthTexture=ge}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const ge=L.texture.mipmaps;ge&&ge.length>0?Ce(T.__webglFramebuffer[0],L):Ce(T.__webglFramebuffer,L)}else if(J){T.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ge]),T.__webglDepthbuffer[ge]===void 0)T.__webglDepthbuffer[ge]=i.createRenderbuffer(),me(T.__webglDepthbuffer[ge],L,!1);else{const ye=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer[ge];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,de)}}else{const ge=L.texture.mipmaps;if(ge&&ge.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),me(T.__webglDepthbuffer,L,!1);else{const ye=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,de)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(L,T,J){const ge=s.get(L);T!==void 0&&be(ge.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&qe(L)}function Nt(L){const T=L.texture,J=s.get(L),ge=s.get(T);L.addEventListener("dispose",F);const ye=L.textures,de=L.isWebGLCubeRenderTarget===!0,Ye=ye.length>1;if(Ye||(ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture()),ge.__version=T.version,u.memory.textures++),de){J.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[Re]=[];for(let et=0;et<T.mipmaps.length;et++)J.__webglFramebuffer[Re][et]=i.createFramebuffer()}else J.__webglFramebuffer[Re]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let Re=0;Re<T.mipmaps.length;Re++)J.__webglFramebuffer[Re]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Ye)for(let Re=0,et=ye.length;Re<et;Re++){const Qe=s.get(ye[Re]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=i.createTexture(),u.memory.textures++)}if(L.samples>0&&gt(L)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Re=0;Re<ye.length;Re++){const et=ye[Re];J.__webglColorRenderbuffer[Re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Re]);const Qe=l.convert(et.format,et.colorSpace),we=l.convert(et.type),Be=N(et.internalFormat,Qe,we,et.colorSpace,L.isXRRenderTarget===!0),rt=_t(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,Be,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,J.__webglColorRenderbuffer[Re])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),me(J.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,ge.__webglTexture),ne(i.TEXTURE_CUBE_MAP,T);for(let Re=0;Re<6;Re++)if(T.mipmaps&&T.mipmaps.length>0)for(let et=0;et<T.mipmaps.length;et++)be(J.__webglFramebuffer[Re][et],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,et);else be(J.__webglFramebuffer[Re],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);x(T)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ye){for(let Re=0,et=ye.length;Re<et;Re++){const Qe=ye[Re],we=s.get(Qe);t.bindTexture(i.TEXTURE_2D,we.__webglTexture),ne(i.TEXTURE_2D,Qe),be(J.__webglFramebuffer,L,Qe,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,0),x(Qe)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let Re=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Re=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Re,ge.__webglTexture),ne(Re,T),T.mipmaps&&T.mipmaps.length>0)for(let et=0;et<T.mipmaps.length;et++)be(J.__webglFramebuffer[et],L,T,i.COLOR_ATTACHMENT0,Re,et);else be(J.__webglFramebuffer,L,T,i.COLOR_ATTACHMENT0,Re,0);x(T)&&_(Re),t.unbindTexture()}L.depthBuffer&&qe(L)}function Rt(L){const T=L.textures;for(let J=0,ge=T.length;J<ge;J++){const ye=T[J];if(x(ye)){const de=D(L),Ye=s.get(ye).__webglTexture;t.bindTexture(de,Ye),_(de),t.unbindTexture()}}}const pt=[],H=[];function Tn(L){if(L.samples>0){if(gt(L)===!1){const T=L.textures,J=L.width,ge=L.height;let ye=i.COLOR_BUFFER_BIT;const de=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ye=s.get(L),Re=T.length>1;if(Re)for(let Qe=0;Qe<T.length;Qe++)t.bindFramebuffer(i.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer);const et=L.texture.mipmaps;et&&et.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let Qe=0;Qe<T.length;Qe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ye|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ye|=i.STENCIL_BUFFER_BIT)),Re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ye.__webglColorRenderbuffer[Qe]);const we=s.get(T[Qe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,we,0)}i.blitFramebuffer(0,0,J,ge,0,0,J,ge,ye,i.NEAREST),f===!0&&(pt.length=0,H.length=0,pt.push(i.COLOR_ATTACHMENT0+Qe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(pt.push(de),H.push(de),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,H)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Re)for(let Qe=0;Qe<T.length;Qe++){t.bindFramebuffer(i.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.RENDERBUFFER,Ye.__webglColorRenderbuffer[Qe]);const we=s.get(T[Qe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.TEXTURE_2D,we,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&f){const T=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function _t(L){return Math.min(o.maxSamples,L.samples)}function gt(L){const T=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ze(L){const T=u.render.frame;m.get(L)!==T&&(m.set(L,T),L.update())}function Dt(L,T){const J=L.colorSpace,ge=L.format,ye=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==fo&&J!==Lr&&(Ct.getTransfer(J)===It?(ge!==xi||ye!==er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),T}function $e(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=le,this.setTexture2D=he,this.setTexture2DArray=se,this.setTexture3D=ce,this.setTextureCube=I,this.rebindTextures=Oe,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=gt}function A1(i,e){function t(s,o=Lr){let l;const u=Ct.getTransfer(o);if(s===er)return i.UNSIGNED_BYTE;if(s===eh)return i.UNSIGNED_SHORT_4_4_4_4;if(s===th)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Wv)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===Vv)return i.BYTE;if(s===Gv)return i.SHORT;if(s===ua)return i.UNSIGNED_SHORT;if(s===Qf)return i.INT;if(s===ps)return i.UNSIGNED_INT;if(s===Zi)return i.FLOAT;if(s===va)return i.HALF_FLOAT;if(s===jv)return i.ALPHA;if(s===Xv)return i.RGB;if(s===xi)return i.RGBA;if(s===fa)return i.DEPTH_COMPONENT;if(s===ha)return i.DEPTH_STENCIL;if(s===qv)return i.RED;if(s===nh)return i.RED_INTEGER;if(s===Yv)return i.RG;if(s===ih)return i.RG_INTEGER;if(s===rh)return i.RGBA_INTEGER;if(s===rc||s===sc||s===oc||s===ac)if(u===It)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===rc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===sc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===oc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ac)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===rc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===sc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===oc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ac)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===pf||s===mf||s===gf||s===vf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===pf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===mf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===gf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===xf||s===_f||s===yf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===xf||s===_f)return u===It?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===yf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Sf||s===wf||s===Ef||s===bf||s===Mf||s===Tf||s===Af||s===Cf||s===Rf||s===Pf||s===Nf||s===Lf||s===Df||s===Uf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Sf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ef)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===bf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Mf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Tf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Af)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Cf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Rf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Pf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Nf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Lf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Df)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Uf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===lc||s===If||s===kf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===lc)return u===It?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===If)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===kf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===$v||s===Ff||s===Of||s===Bf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===lc)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Ff)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Of)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Bf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===da?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:t}}const C1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class P1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const o=new Ln,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!==s.depthNear||t.depthFar!==s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new nr({vertexShader:C1,fragmentShader:R1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ri(new wa(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class N1 extends vo{constructor(e,t){super();const s=this;let o=null,l=1,u=null,d="local-floor",f=1,p=null,m=null,g=null,y=null,S=null,w=null;const b=new P1,x=t.getContextAttributes();let _=null,D=null;const N=[],R=[],V=new Ut;let z=null;const F=new mi;F.viewport=new Kt;const O=new mi;O.viewport=new Kt;const P=[F,O],C=new Jw;let G=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let pe=N[$];return pe===void 0&&(pe=new Od,N[$]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function($){let pe=N[$];return pe===void 0&&(pe=new Od,N[$]=pe),pe.getGripSpace()},this.getHand=function($){let pe=N[$];return pe===void 0&&(pe=new Od,N[$]=pe),pe.getHandSpace()};function Q($){const pe=R.indexOf($.inputSource);if(pe===-1)return;const be=N[pe];be!==void 0&&(be.update($.inputSource,$.frame,p||u),be.dispatchEvent({type:$.type,data:$.inputSource}))}function fe(){o.removeEventListener("select",Q),o.removeEventListener("selectstart",Q),o.removeEventListener("selectend",Q),o.removeEventListener("squeeze",Q),o.removeEventListener("squeezestart",Q),o.removeEventListener("squeezeend",Q),o.removeEventListener("end",fe),o.removeEventListener("inputsourceschange",he);for(let $=0;$<N.length;$++){const pe=R[$];pe!==null&&(R[$]=null,N[$].disconnect(pe))}G=null,le=null,b.reset(),e.setRenderTarget(_),S=null,y=null,g=null,o=null,D=null,Ae.stop(),s.isPresenting=!1,e.setPixelRatio(z),e.setSize(V.width,V.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){l=$,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return g},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function($){if(o=$,o!==null){if(_=e.getRenderTarget(),o.addEventListener("select",Q),o.addEventListener("selectstart",Q),o.addEventListener("selectend",Q),o.addEventListener("squeeze",Q),o.addEventListener("squeezestart",Q),o.addEventListener("squeezeend",Q),o.addEventListener("end",fe),o.addEventListener("inputsourceschange",he),x.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(V),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,me=null,Ce=null;x.depth&&(Ce=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=x.stencil?ha:fa,me=x.stencil?da:ps);const qe={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:l};g=new XRWebGLBinding(o,t),y=g.createProjectionLayer(qe),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),D=new ms(y.textureWidth,y.textureHeight,{format:xi,type:er,depthTexture:new ax(y.textureWidth,y.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const be={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,be),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new ms(S.framebufferWidth,S.framebufferHeight,{format:xi,type:er,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(f),p=null,u=await o.requestReferenceSpace(d),Ae.setContext(o),Ae.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function he($){for(let pe=0;pe<$.removed.length;pe++){const be=$.removed[pe],me=R.indexOf(be);me>=0&&(R[me]=null,N[me].disconnect(be))}for(let pe=0;pe<$.added.length;pe++){const be=$.added[pe];let me=R.indexOf(be);if(me===-1){for(let qe=0;qe<N.length;qe++)if(qe>=R.length){R.push(be),me=qe;break}else if(R[qe]===null){R[qe]=be,me=qe;break}if(me===-1)break}const Ce=N[me];Ce&&Ce.connect(be)}}const se=new ie,ce=new ie;function I($,pe,be){se.setFromMatrixPosition(pe.matrixWorld),ce.setFromMatrixPosition(be.matrixWorld);const me=se.distanceTo(ce),Ce=pe.projectionMatrix.elements,qe=be.projectionMatrix.elements,Oe=Ce[14]/(Ce[10]-1),Nt=Ce[14]/(Ce[10]+1),Rt=(Ce[9]+1)/Ce[5],pt=(Ce[9]-1)/Ce[5],H=(Ce[8]-1)/Ce[0],Tn=(qe[8]+1)/qe[0],_t=Oe*H,gt=Oe*Tn,Ze=me/(-H+Tn),Dt=Ze*-H;if(pe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Dt),$.translateZ(Ze),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ce[10]===-1)$.projectionMatrix.copy(pe.projectionMatrix),$.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const $e=Oe+Ze,L=Nt+Ze,T=_t-Dt,J=gt+(me-Dt),ge=Rt*Nt/L*$e,ye=pt*Nt/L*$e;$.projectionMatrix.makePerspective(T,J,ge,ye,$e,L),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ue($,pe){pe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(pe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(o===null)return;let pe=$.near,be=$.far;b.texture!==null&&(b.depthNear>0&&(pe=b.depthNear),b.depthFar>0&&(be=b.depthFar)),C.near=O.near=F.near=pe,C.far=O.far=F.far=be,(G!==C.near||le!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),G=C.near,le=C.far),F.layers.mask=$.layers.mask|2,O.layers.mask=$.layers.mask|4,C.layers.mask=F.layers.mask|O.layers.mask;const me=$.parent,Ce=C.cameras;ue(C,me);for(let qe=0;qe<Ce.length;qe++)ue(Ce[qe],me);Ce.length===2?I(C,F,O):C.projectionMatrix.copy(F.projectionMatrix),oe($,C,me)};function oe($,pe,be){be===null?$.matrix.copy(pe.matrixWorld):($.matrix.copy(be.matrixWorld),$.matrix.invert(),$.matrix.multiply(pe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(pe.projectionMatrix),$.projectionMatrixInverse.copy(pe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=zf*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&S===null))return f},this.setFoveation=function($){f=$,y!==null&&(y.fixedFoveation=$),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=$)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(C)};let k=null;function ne($,pe){if(m=pe.getViewerPose(p||u),w=pe,m!==null){const be=m.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let me=!1;be.length!==C.cameras.length&&(C.cameras.length=0,me=!0);for(let Oe=0;Oe<be.length;Oe++){const Nt=be[Oe];let Rt=null;if(S!==null)Rt=S.getViewport(Nt);else{const H=g.getViewSubImage(y,Nt);Rt=H.viewport,Oe===0&&(e.setRenderTargetTextures(D,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(D))}let pt=P[Oe];pt===void 0&&(pt=new mi,pt.layers.enable(Oe),pt.viewport=new Kt,P[Oe]=pt),pt.matrix.fromArray(Nt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Nt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),Oe===0&&(C.matrix.copy(pt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),me===!0&&C.cameras.push(pt)}const Ce=o.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&g){const Oe=g.getDepthInformation(be[0]);Oe&&Oe.isValid&&Oe.texture&&b.init(e,Oe,o.renderState)}}for(let be=0;be<N.length;be++){const me=R[be],Ce=N[be];me!==null&&Ce!==void 0&&Ce.update(me,pe,p||u)}k&&k($,pe),pe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:pe}),w=null}const Ae=new lx;Ae.setAnimationLoop(ne),this.setAnimationLoop=function($){k=$},this.dispose=function(){}}}const rs=new tr,L1=new en;function D1(i,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function s(x,_){_.color.getRGB(x.fogColor.value,rx(i)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function o(x,_,D,N,R){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(x,_):_.isMeshToonMaterial?(l(x,_),g(x,_)):_.isMeshPhongMaterial?(l(x,_),m(x,_)):_.isMeshStandardMaterial?(l(x,_),y(x,_),_.isMeshPhysicalMaterial&&S(x,_,R)):_.isMeshMatcapMaterial?(l(x,_),w(x,_)):_.isMeshDepthMaterial?l(x,_):_.isMeshDistanceMaterial?(l(x,_),b(x,_)):_.isMeshNormalMaterial?l(x,_):_.isLineBasicMaterial?(u(x,_),_.isLineDashedMaterial&&d(x,_)):_.isPointsMaterial?f(x,_,D,N):_.isSpriteMaterial?p(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Hn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Hn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const D=e.get(_),N=D.envMap,R=D.envMapRotation;N&&(x.envMap.value=N,rs.copy(R),rs.x*=-1,rs.y*=-1,rs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),x.envMapRotation.value.setFromMatrix4(L1.makeRotationFromEuler(rs)),x.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function u(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function d(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function f(x,_,D,N){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*D,x.scale.value=N*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function p(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function m(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function g(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function y(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function S(x,_,D){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Hn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=D.texture,x.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function w(x,_){_.matcap&&(x.matcap.value=_.matcap)}function b(x,_){const D=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(D.matrixWorld),x.nearDistance.value=D.shadow.camera.near,x.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function U1(i,e,t,s){let o={},l={},u=[];const d=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function f(D,N){const R=N.program;s.uniformBlockBinding(D,R)}function p(D,N){let R=o[D.id];R===void 0&&(w(D),R=m(D),o[D.id]=R,D.addEventListener("dispose",x));const V=N.program;s.updateUBOMapping(D,V);const z=e.render.frame;l[D.id]!==z&&(y(D),l[D.id]=z)}function m(D){const N=g();D.__bindingPointIndex=N;const R=i.createBuffer(),V=D.__size,z=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,V,z),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,N,R),R}function g(){for(let D=0;D<d;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(D){const N=o[D.id],R=D.uniforms,V=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,N);for(let z=0,F=R.length;z<F;z++){const O=Array.isArray(R[z])?R[z]:[R[z]];for(let P=0,C=O.length;P<C;P++){const G=O[P];if(S(G,z,P,V)===!0){const le=G.__offset,Q=Array.isArray(G.value)?G.value:[G.value];let fe=0;for(let he=0;he<Q.length;he++){const se=Q[he],ce=b(se);typeof se=="number"||typeof se=="boolean"?(G.__data[0]=se,i.bufferSubData(i.UNIFORM_BUFFER,le+fe,G.__data)):se.isMatrix3?(G.__data[0]=se.elements[0],G.__data[1]=se.elements[1],G.__data[2]=se.elements[2],G.__data[3]=0,G.__data[4]=se.elements[3],G.__data[5]=se.elements[4],G.__data[6]=se.elements[5],G.__data[7]=0,G.__data[8]=se.elements[6],G.__data[9]=se.elements[7],G.__data[10]=se.elements[8],G.__data[11]=0):(se.toArray(G.__data,fe),fe+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,le,G.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function S(D,N,R,V){const z=D.value,F=N+"_"+R;if(V[F]===void 0)return typeof z=="number"||typeof z=="boolean"?V[F]=z:V[F]=z.clone(),!0;{const O=V[F];if(typeof z=="number"||typeof z=="boolean"){if(O!==z)return V[F]=z,!0}else if(O.equals(z)===!1)return O.copy(z),!0}return!1}function w(D){const N=D.uniforms;let R=0;const V=16;for(let F=0,O=N.length;F<O;F++){const P=Array.isArray(N[F])?N[F]:[N[F]];for(let C=0,G=P.length;C<G;C++){const le=P[C],Q=Array.isArray(le.value)?le.value:[le.value];for(let fe=0,he=Q.length;fe<he;fe++){const se=Q[fe],ce=b(se),I=R%V,ue=I%ce.boundary,oe=I+ue;R+=ue,oe!==0&&V-oe<ce.storage&&(R+=V-oe),le.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=R,R+=ce.storage}}}const z=R%V;return z>0&&(R+=V-z),D.__size=R,D.__cache={},this}function b(D){const N={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(N.boundary=4,N.storage=4):D.isVector2?(N.boundary=8,N.storage=8):D.isVector3||D.isColor?(N.boundary=16,N.storage=12):D.isVector4?(N.boundary=16,N.storage=16):D.isMatrix3?(N.boundary=48,N.storage=48):D.isMatrix4?(N.boundary=64,N.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),N}function x(D){const N=D.target;N.removeEventListener("dispose",x);const R=u.indexOf(N.__bindingPointIndex);u.splice(R,1),i.deleteBuffer(o[N.id]),delete o[N.id],delete l[N.id]}function _(){for(const D in o)i.deleteBuffer(o[D]);u=[],o={},l={}}return{bind:f,update:p,dispose:_}}class I1{constructor(e={}){const{canvas:t=hw(),context:s=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=u;const w=new Uint32Array(4),b=new Int32Array(4);let x=null,_=null;const D=[],N=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let V=!1;this._outputColorSpace=ri;let z=0,F=0,O=null,P=-1,C=null;const G=new Kt,le=new Kt;let Q=null;const fe=new kt(0);let he=0,se=t.width,ce=t.height,I=1,ue=null,oe=null;const k=new Kt(0,0,se,ce),ne=new Kt(0,0,se,ce);let Ae=!1;const $=new ox;let pe=!1,be=!1;const me=new en,Ce=new en,qe=new ie,Oe=new Kt,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function pt(){return O===null?I:1}let H=s;function Tn(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jf}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",De,!1),H===null){const X="webgl2";if(H=Tn(X,A),H===null)throw Tn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let _t,gt,Ze,Dt,$e,L,T,J,ge,ye,de,Ye,Re,et,Qe,we,Be,rt,st,ze,vt,lt,Lt,j;function Pe(){_t=new jM(H),_t.init(),lt=new A1(H,_t),gt=new OM(H,_t,e,lt),Ze=new M1(H,_t),gt.reverseDepthBuffer&&y&&Ze.buffers.depth.setReversed(!0),Dt=new YM(H),$e=new f1,L=new T1(H,_t,Ze,$e,gt,lt,Dt),T=new zM(R),J=new WM(R),ge=new eE(H),Lt=new kM(H,ge),ye=new XM(H,ge,Dt,Lt),de=new KM(H,ye,ge,Dt),st=new $M(H,gt,L),we=new BM($e),Ye=new d1(R,T,J,_t,gt,Lt,we),Re=new D1(R,$e),et=new p1,Qe=new y1(_t),rt=new IM(R,T,J,Ze,de,S,f),Be=new E1(R,de,gt),j=new U1(H,Dt,gt,Ze),ze=new FM(H,_t,Dt),vt=new qM(H,_t,Dt),Dt.programs=Ye.programs,R.capabilities=gt,R.extensions=_t,R.properties=$e,R.renderLists=et,R.shadowMap=Be,R.state=Ze,R.info=Dt}Pe();const ae=new N1(R,H);this.xr=ae,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=_t.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=_t.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(A){A!==void 0&&(I=A,this.setSize(se,ce,!1))},this.getSize=function(A){return A.set(se,ce)},this.setSize=function(A,X,te=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,ce=X,t.width=Math.floor(A*I),t.height=Math.floor(X*I),te===!0&&(t.style.width=A+"px",t.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(se*I,ce*I).floor()},this.setDrawingBufferSize=function(A,X,te){se=A,ce=X,I=te,t.width=Math.floor(A*te),t.height=Math.floor(X*te),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(G)},this.getViewport=function(A){return A.copy(k)},this.setViewport=function(A,X,te,K){A.isVector4?k.set(A.x,A.y,A.z,A.w):k.set(A,X,te,K),Ze.viewport(G.copy(k).multiplyScalar(I).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,X,te,K){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,X,te,K),Ze.scissor(le.copy(ne).multiplyScalar(I).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(A){Ze.setScissorTest(Ae=A)},this.setOpaqueSort=function(A){ue=A},this.setTransparentSort=function(A){oe=A},this.getClearColor=function(A){return A.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,te=!0){let K=0;if(A){let q=!1;if(O!==null){const Me=O.texture.format;q=Me===rh||Me===ih||Me===nh}if(q){const Me=O.texture.type,Ne=Me===er||Me===ps||Me===ua||Me===da||Me===eh||Me===th,Ie=rt.getClearColor(),He=rt.getClearAlpha(),ot=Ie.r,it=Ie.g,je=Ie.b;Ne?(w[0]=ot,w[1]=it,w[2]=je,w[3]=He,H.clearBufferuiv(H.COLOR,0,w)):(b[0]=ot,b[1]=it,b[2]=je,b[3]=He,H.clearBufferiv(H.COLOR,0,b))}else K|=H.COLOR_BUFFER_BIT}X&&(K|=H.DEPTH_BUFFER_BIT),te&&(K|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",De,!1),rt.dispose(),et.dispose(),Qe.dispose(),$e.dispose(),T.dispose(),J.dispose(),de.dispose(),Lt.dispose(),j.dispose(),Ye.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ys),ae.removeEventListener("sessionend",ir),Ni.stop()};function ve(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const A=Dt.autoReset,X=Be.enabled,te=Be.autoUpdate,K=Be.needsUpdate,q=Be.type;Pe(),Dt.autoReset=A,Be.enabled=X,Be.autoUpdate=te,Be.needsUpdate=K,Be.type=q}function De(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ct(A){const X=A.target;X.removeEventListener("dispose",ct),Bt(X)}function Bt(A){tn(A),$e.remove(A)}function tn(A){const X=$e.get(A).programs;X!==void 0&&(X.forEach(function(te){Ye.releaseProgram(te)}),A.isShaderMaterial&&Ye.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,te,K,q,Me){X===null&&(X=Nt);const Ne=q.isMesh&&q.matrixWorld.determinant()<0,Ie=Aa(A,X,te,K,q);Ze.setMaterial(K,Ne);let He=te.index,ot=1;if(K.wireframe===!0){if(He=ye.getWireframeAttribute(te),He===void 0)return;ot=2}const it=te.drawRange,je=te.attributes.position;let St=it.start*ot,ut=(it.start+it.count)*ot;Me!==null&&(St=Math.max(St,Me.start*ot),ut=Math.min(ut,(Me.start+Me.count)*ot)),He!==null?(St=Math.max(St,0),ut=Math.min(ut,He.count)):je!=null&&(St=Math.max(St,0),ut=Math.min(ut,je.count));const Xt=ut-St;if(Xt<0||Xt===1/0)return;Lt.setup(q,K,Ie,te,He);let Vt,Et=ze;if(He!==null&&(Vt=ge.get(He),Et=vt,Et.setIndex(Vt)),q.isMesh)K.wireframe===!0?(Ze.setLineWidth(K.wireframeLinewidth*pt()),Et.setMode(H.LINES)):Et.setMode(H.TRIANGLES);else if(q.isLine){let Je=K.linewidth;Je===void 0&&(Je=1),Ze.setLineWidth(Je*pt()),q.isLineSegments?Et.setMode(H.LINES):q.isLineLoop?Et.setMode(H.LINE_LOOP):Et.setMode(H.LINE_STRIP)}else q.isPoints?Et.setMode(H.POINTS):q.isSprite&&Et.setMode(H.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)cc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))Et.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Je=q._multiDrawStarts,qt=q._multiDrawCounts,yt=q._multiDrawCount,vn=He?ge.get(He).bytesPerElement:1,sr=$e.get(K).currentProgram.getUniforms();for(let Cn=0;Cn<yt;Cn++)sr.setValue(H,"_gl_DrawID",Cn),Et.render(Je[Cn]/vn,qt[Cn])}else if(q.isInstancedMesh)Et.renderInstances(St,Xt,q.count);else if(te.isInstancedBufferGeometry){const Je=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,qt=Math.min(te.instanceCount,Je);Et.renderInstances(St,Xt,qt)}else Et.render(St,Xt)};function bt(A,X,te){A.transparent===!0&&A.side===Ki&&A.forceSinglePass===!1?(A.side=Hn,A.needsUpdate=!0,Ss(A,X,te),A.side=Fr,A.needsUpdate=!0,Ss(A,X,te),A.side=Ki):Ss(A,X,te)}this.compile=function(A,X,te=null){te===null&&(te=A),_=Qe.get(te),_.init(X),N.push(_),te.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),A!==te&&A.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),_.setupLights();const K=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Me=q.material;if(Me)if(Array.isArray(Me))for(let Ne=0;Ne<Me.length;Ne++){const Ie=Me[Ne];bt(Ie,te,q),K.add(Ie)}else bt(Me,te,q),K.add(Me)}),_=N.pop(),K},this.compileAsync=function(A,X,te=null){const K=this.compile(A,X,te);return new Promise(q=>{function Me(){if(K.forEach(function(Ne){$e.get(Ne).currentProgram.isReady()&&K.delete(Ne)}),K.size===0){q(A);return}setTimeout(Me,10)}_t.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Dn=null;function An(A){Dn&&Dn(A)}function ys(){Ni.stop()}function ir(){Ni.start()}const Ni=new lx;Ni.setAnimationLoop(An),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(A){Dn=A,ae.setAnimationLoop(A),A===null?Ni.stop():Ni.start()},ae.addEventListener("sessionstart",ys),ae.addEventListener("sessionend",ir),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(X),X=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,X,O),_=Qe.get(A,N.length),_.init(X),N.push(_),Ce.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),$.setFromProjectionMatrix(Ce),be=this.localClippingEnabled,pe=we.init(this.clippingPlanes,be),x=et.get(A,D.length),x.init(),D.push(x),ae.enabled===!0&&ae.isPresenting===!0){const Me=R.xr.getDepthSensingMesh();Me!==null&&Li(Me,X,-1/0,R.sortObjects)}Li(A,X,0,R.sortObjects),x.finish(),R.sortObjects===!0&&x.sort(ue,oe),Rt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Rt&&rt.addToRenderList(x,A),this.info.render.frame++,pe===!0&&we.beginShadows();const te=_.state.shadowsArray;Be.render(te,A,X),pe===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=x.opaque,q=x.transmissive;if(_.setupLights(),X.isArrayCamera){const Me=X.cameras;if(q.length>0)for(let Ne=0,Ie=Me.length;Ne<Ie;Ne++){const He=Me[Ne];Br(K,q,A,He)}Rt&&rt.render(A);for(let Ne=0,Ie=Me.length;Ne<Ie;Ne++){const He=Me[Ne];Or(x,A,He,He.viewport)}}else q.length>0&&Br(K,q,A,X),Rt&&rt.render(A),Or(x,A,X);O!==null&&F===0&&(L.updateMultisampleRenderTarget(O),L.updateRenderTargetMipmap(O)),A.isScene===!0&&A.onAfterRender(R,A,X),Lt.resetDefaultState(),P=-1,C=null,N.pop(),N.length>0?(_=N[N.length-1],pe===!0&&we.setGlobalState(R.clippingPlanes,_.state.camera)):_=null,D.pop(),D.length>0?x=D[D.length-1]:x=null};function Li(A,X,te,K){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)te=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$.intersectsSprite(A)){K&&Oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ce);const Ne=de.update(A),Ie=A.material;Ie.visible&&x.push(A,Ne,Ie,te,Oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||$.intersectsObject(A))){const Ne=de.update(A),Ie=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Oe.copy(A.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Oe.copy(Ne.boundingSphere.center)),Oe.applyMatrix4(A.matrixWorld).applyMatrix4(Ce)),Array.isArray(Ie)){const He=Ne.groups;for(let ot=0,it=He.length;ot<it;ot++){const je=He[ot],St=Ie[je.materialIndex];St&&St.visible&&x.push(A,Ne,St,te,Oe.z,je)}}else Ie.visible&&x.push(A,Ne,Ie,te,Oe.z,null)}}const Me=A.children;for(let Ne=0,Ie=Me.length;Ne<Ie;Ne++)Li(Me[Ne],X,te,K)}function Or(A,X,te,K){const q=A.opaque,Me=A.transmissive,Ne=A.transparent;_.setupLightsView(te),pe===!0&&we.setGlobalState(R.clippingPlanes,te),K&&Ze.viewport(G.copy(K)),q.length>0&&rr(q,X,te),Me.length>0&&rr(Me,X,te),Ne.length>0&&rr(Ne,X,te),Ze.buffers.depth.setTest(!0),Ze.buffers.depth.setMask(!0),Ze.buffers.color.setMask(!0),Ze.setPolygonOffset(!1)}function Br(A,X,te,K){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[K.id]===void 0&&(_.state.transmissionRenderTarget[K.id]=new ms(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?va:er,minFilter:us,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const Me=_.state.transmissionRenderTarget[K.id],Ne=K.viewport||G;Me.setSize(Ne.z*R.transmissionResolutionScale,Ne.w*R.transmissionResolutionScale);const Ie=R.getRenderTarget();R.setRenderTarget(Me),R.getClearColor(fe),he=R.getClearAlpha(),he<1&&R.setClearColor(16777215,.5),R.clear(),Rt&&rt.render(te);const He=R.toneMapping;R.toneMapping=kr;const ot=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),_.setupLightsView(K),pe===!0&&we.setGlobalState(R.clippingPlanes,K),rr(A,te,K),L.updateMultisampleRenderTarget(Me),L.updateRenderTargetMipmap(Me),_t.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let je=0,St=X.length;je<St;je++){const ut=X[je],Xt=ut.object,Vt=ut.geometry,Et=ut.material,Je=ut.group;if(Et.side===Ki&&Xt.layers.test(K.layers)){const qt=Et.side;Et.side=Hn,Et.needsUpdate=!0,Ma(Xt,te,K,Vt,Et,Je),Et.side=qt,Et.needsUpdate=!0,it=!0}}it===!0&&(L.updateMultisampleRenderTarget(Me),L.updateRenderTargetMipmap(Me))}R.setRenderTarget(Ie),R.setClearColor(fe,he),ot!==void 0&&(K.viewport=ot),R.toneMapping=He}function rr(A,X,te){const K=X.isScene===!0?X.overrideMaterial:null;for(let q=0,Me=A.length;q<Me;q++){const Ne=A[q],Ie=Ne.object,He=Ne.geometry,ot=Ne.group;let it=Ne.material;it.allowOverride===!0&&K!==null&&(it=K),Ie.layers.test(te.layers)&&Ma(Ie,X,te,He,it,ot)}}function Ma(A,X,te,K,q,Me){A.onBeforeRender(R,X,te,K,q,Me),A.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(R,X,te,K,A,Me),q.transparent===!0&&q.side===Ki&&q.forceSinglePass===!1?(q.side=Hn,q.needsUpdate=!0,R.renderBufferDirect(te,X,K,q,A,Me),q.side=Fr,q.needsUpdate=!0,R.renderBufferDirect(te,X,K,q,A,Me),q.side=Ki):R.renderBufferDirect(te,X,K,q,A,Me),A.onAfterRender(R,X,te,K,q,Me)}function Ss(A,X,te){X.isScene!==!0&&(X=Nt);const K=$e.get(A),q=_.state.lights,Me=_.state.shadowsArray,Ne=q.state.version,Ie=Ye.getParameters(A,q.state,Me,X,te),He=Ye.getProgramCacheKey(Ie);let ot=K.programs;K.environment=A.isMeshStandardMaterial?X.environment:null,K.fog=X.fog,K.envMap=(A.isMeshStandardMaterial?J:T).get(A.envMap||K.environment),K.envMapRotation=K.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,ot===void 0&&(A.addEventListener("dispose",ct),ot=new Map,K.programs=ot);let it=ot.get(He);if(it!==void 0){if(K.currentProgram===it&&K.lightsStateVersion===Ne)return Si(A,Ie),it}else Ie.uniforms=Ye.getUniforms(A),A.onBeforeCompile(Ie,R),it=Ye.acquireProgram(Ie,He),ot.set(He,it),K.uniforms=Ie.uniforms;const je=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=we.uniform),Si(A,Ie),K.needsLights=Nc(A),K.lightsStateVersion=Ne,K.needsLights&&(je.ambientLightColor.value=q.state.ambient,je.lightProbe.value=q.state.probe,je.directionalLights.value=q.state.directional,je.directionalLightShadows.value=q.state.directionalShadow,je.spotLights.value=q.state.spot,je.spotLightShadows.value=q.state.spotShadow,je.rectAreaLights.value=q.state.rectArea,je.ltc_1.value=q.state.rectAreaLTC1,je.ltc_2.value=q.state.rectAreaLTC2,je.pointLights.value=q.state.point,je.pointLightShadows.value=q.state.pointShadow,je.hemisphereLights.value=q.state.hemi,je.directionalShadowMap.value=q.state.directionalShadowMap,je.directionalShadowMatrix.value=q.state.directionalShadowMatrix,je.spotShadowMap.value=q.state.spotShadowMap,je.spotLightMatrix.value=q.state.spotLightMatrix,je.spotLightMap.value=q.state.spotLightMap,je.pointShadowMap.value=q.state.pointShadowMap,je.pointShadowMatrix.value=q.state.pointShadowMatrix),K.currentProgram=it,K.uniformsList=null,it}function Ta(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=uc.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Si(A,X){const te=$e.get(A);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.batchingColor=X.batchingColor,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.instancingMorph=X.instancingMorph,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function Aa(A,X,te,K,q){X.isScene!==!0&&(X=Nt),L.resetTextureUnits();const Me=X.fog,Ne=K.isMeshStandardMaterial?X.environment:null,Ie=O===null?R.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:fo,He=(K.isMeshStandardMaterial?J:T).get(K.envMap||Ne),ot=K.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,it=!!te.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),je=!!te.morphAttributes.position,St=!!te.morphAttributes.normal,ut=!!te.morphAttributes.color;let Xt=kr;K.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Xt=R.toneMapping);const Vt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Et=Vt!==void 0?Vt.length:0,Je=$e.get(K),qt=_.state.lights;if(pe===!0&&(be===!0||A!==C)){const pn=A===C&&K.id===P;we.setState(K,A,pn)}let yt=!1;K.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==qt.state.version||Je.outputColorSpace!==Ie||q.isBatchedMesh&&Je.batching===!1||!q.isBatchedMesh&&Je.batching===!0||q.isBatchedMesh&&Je.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Je.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Je.instancing===!1||!q.isInstancedMesh&&Je.instancing===!0||q.isSkinnedMesh&&Je.skinning===!1||!q.isSkinnedMesh&&Je.skinning===!0||q.isInstancedMesh&&Je.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Je.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Je.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Je.instancingMorph===!1&&q.morphTexture!==null||Je.envMap!==He||K.fog===!0&&Je.fog!==Me||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==we.numPlanes||Je.numIntersection!==we.numIntersection)||Je.vertexAlphas!==ot||Je.vertexTangents!==it||Je.morphTargets!==je||Je.morphNormals!==St||Je.morphColors!==ut||Je.toneMapping!==Xt||Je.morphTargetsCount!==Et)&&(yt=!0):(yt=!0,Je.__version=K.version);let vn=Je.currentProgram;yt===!0&&(vn=Ss(K,X,q));let sr=!1,Cn=!1,Di=!1;const Ft=vn.getUniforms(),xn=Je.uniforms;if(Ze.useProgram(vn.program)&&(sr=!0,Cn=!0,Di=!0),K.id!==P&&(P=K.id,Cn=!0),sr||C!==A){Ze.buffers.depth.getReversed()?(me.copy(A.projectionMatrix),mw(me),gw(me),Ft.setValue(H,"projectionMatrix",me)):Ft.setValue(H,"projectionMatrix",A.projectionMatrix),Ft.setValue(H,"viewMatrix",A.matrixWorldInverse);const cn=Ft.map.cameraPosition;cn!==void 0&&cn.setValue(H,qe.setFromMatrixPosition(A.matrixWorld)),gt.logarithmicDepthBuffer&&Ft.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ft.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Cn=!0,Di=!0)}if(q.isSkinnedMesh){Ft.setOptional(H,q,"bindMatrix"),Ft.setOptional(H,q,"bindMatrixInverse");const pn=q.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Ft.setValue(H,"boneTexture",pn.boneTexture,L))}q.isBatchedMesh&&(Ft.setOptional(H,q,"batchingTexture"),Ft.setValue(H,"batchingTexture",q._matricesTexture,L),Ft.setOptional(H,q,"batchingIdTexture"),Ft.setValue(H,"batchingIdTexture",q._indirectTexture,L),Ft.setOptional(H,q,"batchingColorTexture"),q._colorsTexture!==null&&Ft.setValue(H,"batchingColorTexture",q._colorsTexture,L));const ln=te.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&st.update(q,te,vn),(Cn||Je.receiveShadow!==q.receiveShadow)&&(Je.receiveShadow=q.receiveShadow,Ft.setValue(H,"receiveShadow",q.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(xn.envMap.value=He,xn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&X.environment!==null&&(xn.envMapIntensity.value=X.environmentIntensity),Cn&&(Ft.setValue(H,"toneMappingExposure",R.toneMappingExposure),Je.needsLights&&Ca(xn,Di),Me&&K.fog===!0&&Re.refreshFogUniforms(xn,Me),Re.refreshMaterialUniforms(xn,K,I,ce,_.state.transmissionRenderTarget[A.id]),uc.upload(H,Ta(Je),xn,L)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(uc.upload(H,Ta(Je),xn,L),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ft.setValue(H,"center",q.center),Ft.setValue(H,"modelViewMatrix",q.modelViewMatrix),Ft.setValue(H,"normalMatrix",q.normalMatrix),Ft.setValue(H,"modelMatrix",q.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const pn=K.uniformsGroups;for(let cn=0,Mt=pn.length;cn<Mt;cn++){const wi=pn[cn];j.update(wi,vn),j.bind(wi,vn)}}return vn}function Ca(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Nc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(A,X,te){const K=$e.get(A);K.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),$e.get(A.texture).__webglTexture=X,$e.get(A.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:te,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const te=$e.get(A);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0};const Ra=H.createFramebuffer();this.setRenderTarget=function(A,X=0,te=0){O=A,z=X,F=te;let K=!0,q=null,Me=!1,Ne=!1;if(A){const He=$e.get(A);if(He.__useDefaultFramebuffer!==void 0)Ze.bindFramebuffer(H.FRAMEBUFFER,null),K=!1;else if(He.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(He.__hasExternalTextures)L.rebindTextures(A,$e.get(A.texture).__webglTexture,$e.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const je=A.depthTexture;if(He.__boundDepthTexture!==je){if(je!==null&&$e.has(je)&&(A.width!==je.image.width||A.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const ot=A.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Ne=!0);const it=$e.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(it[X])?q=it[X][te]:q=it[X],Me=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?q=$e.get(A).__webglMultisampledFramebuffer:Array.isArray(it)?q=it[te]:q=it,G.copy(A.viewport),le.copy(A.scissor),Q=A.scissorTest}else G.copy(k).multiplyScalar(I).floor(),le.copy(ne).multiplyScalar(I).floor(),Q=Ae;if(te!==0&&(q=Ra),Ze.bindFramebuffer(H.FRAMEBUFFER,q)&&K&&Ze.drawBuffers(A,q),Ze.viewport(G),Ze.scissor(le),Ze.setScissorTest(Q),Me){const He=$e.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+X,He.__webglTexture,te)}else if(Ne){const He=$e.get(A.texture),ot=X;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,He.__webglTexture,te,ot)}else if(A!==null&&te!==0){const He=$e.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,He.__webglTexture,te)}P=-1},this.readRenderTargetPixels=function(A,X,te,K,q,Me,Ne){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=$e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ie=Ie[Ne]),Ie){Ze.bindFramebuffer(H.FRAMEBUFFER,Ie);try{const He=A.texture,ot=He.format,it=He.type;if(!gt.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-K&&te>=0&&te<=A.height-q&&H.readPixels(X,te,K,q,lt.convert(ot),lt.convert(it),Me)}finally{const He=O!==null?$e.get(O).__webglFramebuffer:null;Ze.bindFramebuffer(H.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(A,X,te,K,q,Me,Ne){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=$e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ie=Ie[Ne]),Ie)if(X>=0&&X<=A.width-K&&te>=0&&te<=A.height-q){Ze.bindFramebuffer(H.FRAMEBUFFER,Ie);const He=A.texture,ot=He.format,it=He.type;if(!gt.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,je),H.bufferData(H.PIXEL_PACK_BUFFER,Me.byteLength,H.STREAM_READ),H.readPixels(X,te,K,q,lt.convert(ot),lt.convert(it),0);const St=O!==null?$e.get(O).__webglFramebuffer:null;Ze.bindFramebuffer(H.FRAMEBUFFER,St);const ut=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await pw(H,ut,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,je),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Me),H.deleteBuffer(je),H.deleteSync(ut),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,te=0){const K=Math.pow(2,-te),q=Math.floor(A.image.width*K),Me=Math.floor(A.image.height*K),Ne=X!==null?X.x:0,Ie=X!==null?X.y:0;L.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,te,0,0,Ne,Ie,q,Me),Ze.unbindTexture()};const Pa=H.createFramebuffer(),Na=H.createFramebuffer();this.copyTextureToTexture=function(A,X,te=null,K=null,q=0,Me=null){Me===null&&(q!==0?(cc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=q,q=0):Me=0);let Ne,Ie,He,ot,it,je,St,ut,Xt;const Vt=A.isCompressedTexture?A.mipmaps[Me]:A.image;if(te!==null)Ne=te.max.x-te.min.x,Ie=te.max.y-te.min.y,He=te.isBox3?te.max.z-te.min.z:1,ot=te.min.x,it=te.min.y,je=te.isBox3?te.min.z:0;else{const ln=Math.pow(2,-q);Ne=Math.floor(Vt.width*ln),Ie=Math.floor(Vt.height*ln),A.isDataArrayTexture?He=Vt.depth:A.isData3DTexture?He=Math.floor(Vt.depth*ln):He=1,ot=0,it=0,je=0}K!==null?(St=K.x,ut=K.y,Xt=K.z):(St=0,ut=0,Xt=0);const Et=lt.convert(X.format),Je=lt.convert(X.type);let qt;X.isData3DTexture?(L.setTexture3D(X,0),qt=H.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(L.setTexture2DArray(X,0),qt=H.TEXTURE_2D_ARRAY):(L.setTexture2D(X,0),qt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const yt=H.getParameter(H.UNPACK_ROW_LENGTH),vn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),sr=H.getParameter(H.UNPACK_SKIP_PIXELS),Cn=H.getParameter(H.UNPACK_SKIP_ROWS),Di=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Vt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Vt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ot),H.pixelStorei(H.UNPACK_SKIP_ROWS,it),H.pixelStorei(H.UNPACK_SKIP_IMAGES,je);const Ft=A.isDataArrayTexture||A.isData3DTexture,xn=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const ln=$e.get(A),pn=$e.get(X),cn=$e.get(ln.__renderTarget),Mt=$e.get(pn.__renderTarget);Ze.bindFramebuffer(H.READ_FRAMEBUFFER,cn.__webglFramebuffer),Ze.bindFramebuffer(H.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let wi=0;wi<He;wi++)Ft&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,$e.get(A).__webglTexture,q,je+wi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,$e.get(X).__webglTexture,Me,Xt+wi)),H.blitFramebuffer(ot,it,Ne,Ie,St,ut,Ne,Ie,H.DEPTH_BUFFER_BIT,H.NEAREST);Ze.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ze.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||$e.has(A)){const ln=$e.get(A),pn=$e.get(X);Ze.bindFramebuffer(H.READ_FRAMEBUFFER,Pa),Ze.bindFramebuffer(H.DRAW_FRAMEBUFFER,Na);for(let cn=0;cn<He;cn++)Ft?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ln.__webglTexture,q,je+cn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ln.__webglTexture,q),xn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,pn.__webglTexture,Me,Xt+cn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pn.__webglTexture,Me),q!==0?H.blitFramebuffer(ot,it,Ne,Ie,St,ut,Ne,Ie,H.COLOR_BUFFER_BIT,H.NEAREST):xn?H.copyTexSubImage3D(qt,Me,St,ut,Xt+cn,ot,it,Ne,Ie):H.copyTexSubImage2D(qt,Me,St,ut,ot,it,Ne,Ie);Ze.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ze.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else xn?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(qt,Me,St,ut,Xt,Ne,Ie,He,Et,Je,Vt.data):X.isCompressedArrayTexture?H.compressedTexSubImage3D(qt,Me,St,ut,Xt,Ne,Ie,He,Et,Vt.data):H.texSubImage3D(qt,Me,St,ut,Xt,Ne,Ie,He,Et,Je,Vt):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Me,St,ut,Ne,Ie,Et,Je,Vt.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Me,St,ut,Vt.width,Vt.height,Et,Vt.data):H.texSubImage2D(H.TEXTURE_2D,Me,St,ut,Ne,Ie,Et,Je,Vt);H.pixelStorei(H.UNPACK_ROW_LENGTH,yt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,vn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,sr),H.pixelStorei(H.UNPACK_SKIP_ROWS,Cn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Di),Me===0&&X.generateMipmaps&&H.generateMipmap(qt),Ze.unbindTexture()},this.copyTextureToTexture3D=function(A,X,te=null,K=null,q=0){return cc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,te,K,q)},this.initRenderTarget=function(A){$e.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),Ze.unbindTexture()},this.resetState=function(){z=0,F=0,O=null,Ze.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}const k1=`
    void main() {
        gl_Position = vec4( position, 1.0 );
    }
`,F1=`
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform float u_time;
    uniform sampler2D u_noise;
    
    #define PI 3.141592653589793
    #define TAU 6.
    
    const float multiplier = 15.5;
    const float zoomSpeed = 10.;
    const int layers = 10;
    const int octaves = 5;

    vec2 hash2(vec2 p) {
        vec2 o = texture2D( u_noise, (p+0.5)/256.0, -100.0 ).xy;
        return o;
    }
    
    mat2 rotate2d(float _angle) {
        return mat2(cos(_angle),sin(_angle),
                    -sin(_angle),cos(_angle));
    }
    
    vec3 hsb2rgb( in vec3 c ) {
        vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),
                                6.0)-3.0)-1.0,
                        0.0,
                        1.0 );
        rgb = rgb*rgb*(3.0-2.0*rgb);
        return c.z * mix( vec3(1.0), rgb, c.y);
    }
    
    float hash(vec2 p) {
        float o = texture2D( u_noise, (p+0.5)/256.0, -100.0 ).x;
        return o;
    }

    float noise(vec2 uv) {
        vec2 id = floor(uv);
        vec2 subuv = fract(uv);
        vec2 u = subuv * subuv * (3. - 2. * subuv);
        float a = hash(id);
        float b = hash(id + vec2(1., 0.));
        float c = hash(id + vec2(0., 1.));
        float d = hash(id + vec2(1., 1.));
        return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
    }

    float fbm(in vec2 uv) {
        float s = .0;
        float m = .0;
        float a = .5;
        for(int i = 0; i < octaves; i++) {
            s += a * noise(uv);
            m += a;
            a *= .5;
            uv *= 2.;
        }
        return s / m;
    }
    
    vec3 domain(vec2 z) {
        return vec3(hsb2rgb(vec3(atan(z.y,z.x)/TAU,1.,1.)));
    }

    vec3 colour(vec2 z) {
        return domain(z);
    }
    
    vec3 render(vec2 uv, float scale, vec3 colour) {
        vec2 id = floor(uv);
        vec2 subuv = fract(uv);
        vec2 rand = hash2(id);
        float bokeh = abs(scale) * 1.;
        
        float particle = 0.;
        
        if(length(rand) > 1.3) {
            vec2 pos = subuv-.5;
            float field = length(pos);
            particle = smoothstep(.3, 0., field);
            particle += smoothstep(.4 * bokeh, 0.34 * bokeh, field);
        }
        return vec3(particle*2.);
    }
    
    vec3 renderLayer(int layer, int layers, vec2 uv, inout float opacity, vec3 colour, float n) {
        vec2 _uv = uv;
        float scale = mod((u_time + zoomSpeed / float(layers) * float(layer)) / zoomSpeed, -1.);
        uv *= 20.;
        uv *= scale*scale;
        uv = rotate2d(u_time / 10.) * uv;
        uv += vec2(25. + sin(u_time*.1)) * float(layer);

        vec3 pass = render(uv * multiplier, scale, colour) * .2;

        opacity = 1. + scale;
        float _opacity = opacity;
        
        float endOpacity = smoothstep(0., 0.4, scale * -1.);
        opacity += endOpacity;

        return pass * _opacity * endOpacity;
    }

    void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy);

        if(u_resolution.y < u_resolution.x) {
            uv /= u_resolution.y;
        } else {
            uv /= u_resolution.x;
        }
    
        float n = fbm((uv + vec2(sin(u_time*.1), u_time*.1)) * 2. - 2.);

        vec3 colour = vec3(0.);
        colour = n * mix(vec3(0., .5, 1.5)*-1.5, clamp(vec3(1., .5, .25)*2., 0., 1.), n);

        float opacity = 1.;
        float opacity_sum = 1.;

        for(int i = 1; i <= layers; i++) {
            colour -= renderLayer(i, layers, uv, opacity, colour, n);
            opacity_sum += opacity;
        }

        colour /= opacity_sum;

        gl_FragColor = vec4(clamp(colour * 15., 0., 1.), 0.8);
    }
`;function hx(){const i=Se.useRef(null);return Se.useEffect(()=>{let e,t,s,o,l;(async()=>{e=new ah,e.position.z=1,t=new Vw;const d=new wa(2,2),f=new Kw;f.setCrossOrigin("anonymous");const p=await new Promise(b=>{f.load("https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/noise.png",x=>{x.wrapS=ca,x.wrapT=ca,x.minFilter=vi,b(x)})});o={u_time:{type:"f",value:1},u_resolution:{type:"v2",value:new Ut},u_noise:{type:"t",value:p},u_mouse:{type:"v2",value:new Ut}};const m=new nr({uniforms:o,vertexShader:k1,fragmentShader:F1});m.extensions.derivatives=!0;const g=new Ri(d,m);t.add(g),s=new I1,s.setPixelRatio(window.devicePixelRatio),i.current&&i.current.appendChild(s.domElement);const y=()=>{i.current&&(s.setSize(i.current.clientWidth,i.current.clientHeight),o.u_resolution.value.x=s.domElement.width,o.u_resolution.value.y=s.domElement.height)};window.addEventListener("resize",y),y();const S=b=>{const x=window.innerHeight/window.innerWidth;o.u_mouse.value.x=(b.pageX-window.innerWidth/2)/window.innerWidth/x,o.u_mouse.value.y=(b.pageY-window.innerHeight/2)/window.innerHeight*-1};window.addEventListener("pointermove",S);const w=()=>{l=requestAnimationFrame(w),o.u_time.value=-1e4+performance.now()*5e-4,s.render(t,e)};return w(),()=>{window.removeEventListener("resize",y),window.removeEventListener("pointermove",S),l&&cancelAnimationFrame(l),i.current&&s.domElement&&i.current.removeChild(s.domElement),s.dispose()}})()},[]),E.jsx("div",{ref:i,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1,overflow:"hidden"}})}const O1={book1:"/books/book-of-water.txt",book2:"/books/book-of-metal.txt",book3:"/books/3- The Book of Earth.pdf",book4:"/books/book-of-fire.txt",book5:"/books/book-of-air.txt",book6:"/books/book-of-wood.txt",foundational:"/books/foundational-accords.txt",bible:"/books/bible-analysis.txt"};function B1(){const i=async(e,t)=>{try{const o=await(await fetch(O1[e])).text(),l=document.createElement("a"),u=new Blob([o],{type:"text/plain"});l.href=URL.createObjectURL(u),l.download=`${t}.txt`,document.body.appendChild(l),l.click(),document.body.removeChild(l)}catch(s){console.error("Error downloading book:",s),alert("Error downloading book. Please try again later.")}};return E.jsxs(E.Fragment,{children:[E.jsx(hx,{}),E.jsxs("div",{className:"text-white max-w-4xl mx-auto px-8 py-12 space-y-12 relative z-10",children:[E.jsx("div",{className:"fixed inset-0 bg-black/20 backdrop-blur-[2px] -z-10"}),E.jsx("h1",{className:"text-4xl font-bold mb-8 text-center text-shadow-lg",children:"Books of The Order of Marzod"}),E.jsxs("nav",{className:"mb-8 sticky top-0 bg-gray-900/90 p-4 rounded shadow backdrop-blur-sm",children:[E.jsx("h2",{className:"text-2xl font-semibold mb-4 text-shadow-lg",children:"Table of Contents"}),E.jsxs("ul",{className:"list-disc list-inside space-y-2 text-shadow-lg",children:[E.jsx("li",{children:E.jsx("a",{href:"#book1",className:"text-blue-400 hover:underline",children:"Book 1: The Book of Water - Spiritual Foundations & Religious Unity"})}),E.jsx("li",{children:E.jsx("a",{href:"#book2",className:"text-blue-400 hover:underline",children:"Book 2: The Book of Metal - Science, Magic & Technology"})}),E.jsx("li",{children:E.jsx("a",{href:"#book3",className:"text-blue-400 hover:underline",children:"Book 3: The Book of Earth - Practical Living & Personal Growth"})}),E.jsx("li",{children:E.jsx("a",{href:"#book4",className:"text-blue-400 hover:underline",children:"Book 4: The Book of Fire - Transformation & Change"})}),E.jsx("li",{children:E.jsx("a",{href:"#book5",className:"text-blue-400 hover:underline",children:"Book 5: The Book of Air - Mind, Communication & Connection"})}),E.jsx("li",{children:E.jsx("a",{href:"#book6",className:"text-blue-400 hover:underline",children:"Book 6: The Book of Wood - Growth, Flexibility & Strength"})}),E.jsx("li",{children:E.jsx("a",{href:"#foundational",className:"text-blue-400 hover:underline",children:"Foundational Accords"})}),E.jsx("li",{children:E.jsx("a",{href:"#bible",className:"text-blue-400 hover:underline",children:"The Bible - An Analysis"})})]})]}),E.jsxs("article",{id:"book1",className:"mb-32 bg-black/30 backdrop-blur-sm rounded-lg p-8",children:[E.jsx("h2",{className:"text-4xl font-bold mb-12 pb-4 border-b-2 border-gray-600 text-shadow-lg",children:"Book 1: The Book of Water"}),E.jsx("div",{className:"prose prose-invert max-w-none",children:E.jsxs("pre",{className:"whitespace-pre-wrap font-sans text-lg leading-relaxed space-y-8 text-shadow-lg",children:[E.jsx("h3",{className:"text-2xl font-semibold mb-6 text-shadow-lg",children:"Introduction to The Book of Water"}),E.jsx("p",{className:"mb-8 indent-8 text-shadow-lg",children:"I want to tell you all how I came to be here today, writing this book. For most of my life, I was an Atheist. I never was all that solid with God, because when I was around 3 or 4, I convinced myself my Dad was going to Hell."}),E.jsx("p",{className:"mb-8 indent-8 text-shadow-lg",children:"He drank, smoked, cussed, and I didn't have a real firm grip on the difference between breaking rules and sinning, so I pretty much considered it a done deal, that when he died he'd go to Hell, and I was bound and determined to go with him."}),E.jsx("p",{className:"mb-8 indent-8 text-shadow-lg",children:"I eventually grew out of that, just in time to discover the really early stages of social media that we had back in the early 2000s. I was about 13, and for those of you that don't know, the Internet is just packed full of Atheists."}),E.jsx("p",{className:"mb-8 indent-8 text-shadow-lg",children:"Now, it had never occurred to me to ask whether God was actually real in all my 13 years, but it turned out every time I got in an argument with somebody about which side made more sense, I'd get my argument ripped to shreds and just feel like an absolute fool."})]})}),E.jsx("button",{onClick:()=>i("book1","The Book of Water"),className:"mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold text-lg transition",children:"Download Full Book"})]}),E.jsxs("article",{id:"book2",className:"mb-32 bg-black/30 backdrop-blur-sm rounded-lg p-8",children:[E.jsx("h2",{className:"text-4xl font-bold mb-12 pb-4 border-b-2 border-gray-600 text-shadow-lg",children:"Book 2: The Book of Metal"}),E.jsx("div",{className:"prose prose-invert max-w-none",children:E.jsxs("pre",{className:"whitespace-pre-wrap font-sans text-lg leading-relaxed space-y-8 text-shadow-lg",children:[E.jsx("h3",{className:"text-2xl font-semibold mb-6 text-shadow-lg",children:"Introduction to The Book of Metal"}),E.jsx("p",{className:"mb-8 indent-8 text-shadow-lg",children:"Now that we've talked about tradition in the Book of Water, and how a unified view of it is possible if you choose to see things that way, let's talk about reconciling that unified view with hard facts. Part One will talk about science, the speculative concepts involved in explaining the supernatural, and how our understanding of the Universe is finally starting to advance to the point that it tells us what was really happening in ancient times. Part Two will be on history of cultures, to give you an idea of the context that went along with the stories. Part Three will deal in mythology, what it is and how it evolves. With it, I hope you'll get a clearer view of why myths get told the way they do, and how things change over time."})]})}),E.jsx("button",{onClick:()=>i("book2","The Book of Metal"),className:"mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold text-lg transition",children:"Download Full Book"})]}),E.jsxs("article",{id:"book3",className:"mb-32 bg-black/30 backdrop-blur-sm rounded-lg p-8",children:[E.jsx("h2",{className:"text-4xl font-bold mb-12 pb-4 border-b-2 border-gray-600 text-shadow-lg",children:"Book 3: The Book of Earth"}),E.jsx("div",{className:"prose prose-invert max-w-none",children:E.jsxs("pre",{className:"whitespace-pre-wrap font-sans text-lg leading-relaxed space-y-8 text-shadow-lg",children:[E.jsx("h3",{className:"text-2xl font-semibold mb-6 text-shadow-lg",children:"Introduction to The Book of Earth"}),E.jsx("p",{className:"mb-8 indent-8 text-shadow-lg",children:"Preview not available (PDF format). Please download the full book to view its contents."})]})}),E.jsx("button",{onClick:()=>i("book3","The Book of Earth"),className:"mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold text-lg transition",children:"Download Full Book"})]}),E.jsxs("article",{id:"book4",className:"mb-32 bg-black/30 backdrop-blur-sm rounded-lg p-8",children:[E.jsx("h2",{className:"text-4xl font-bold mb-12 pb-4 border-b-2 border-gray-600 text-shadow-lg",children:"Book 4: The Book of Fire"}),E.jsx("div",{className:"prose prose-invert max-w-none",children:E.jsxs("pre",{className:"whitespace-pre-wrap font-sans text-lg leading-relaxed space-y-8 text-shadow-lg",children:[E.jsx("h3",{className:"text-2xl font-semibold mb-6 text-shadow-lg",children:"Introduction to The Book of Fire"}),E.jsx("p",{className:"mb-8 indent-8 text-shadow-lg",children:"The most important aspect of practice is the focus of the Practitioner. Lacking focus, all else is irrelevant, and the effects limited to the mere physical. To that end, the focus of the Book of Fire is the alignment of the Practitioner with the intended work, in addition to other fundamentals of extreme importance. It is hoped that, through mastery of the Book of Fire, when more complex work is attempted, the Practitioner shall find themselves equal to the task, well grounded in the most basic principles. As Fire is the element of passion and self-indulgence, this book aims to tame and control those qualities, that the Practitioner may be the controller rather than the controlled."})]})}),E.jsx("button",{onClick:()=>i("book4","The Book of Fire"),className:"mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold text-lg transition",children:"Download Full Book"})]}),E.jsxs("article",{id:"book5",className:"mb-32 bg-black/30 backdrop-blur-sm rounded-lg p-8",children:[E.jsx("h2",{className:"text-4xl font-bold mb-12 pb-4 border-b-2 border-gray-600 text-shadow-lg",children:"Book 5: The Book of Air"}),E.jsx("div",{className:"prose prose-invert max-w-none",children:E.jsxs("pre",{className:"whitespace-pre-wrap font-sans text-lg leading-relaxed space-y-8 text-shadow-lg",children:[E.jsx("h3",{className:"text-2xl font-semibold mb-6 text-shadow-lg",children:"Introduction to The Book of Air"}),E.jsx("p",{className:"mb-8 indent-8 text-shadow-lg",children:"The Book of Air will deal primarily in fully linking spiritually with an intelligent being, including seance and invocation of gods. As explained in the Book of Fire, this form of linking is very dangerous, and should not be attempted by those of insufficient experience. The method of the link is the same as a Reading, but is rendered more difficult by the need to bypass two personalities. The more fundamental the differences between the personalities, the less likely is success to be found. It cannot be overemphasized that caution must be exercised in this endeavor."})]})}),E.jsx("button",{onClick:()=>i("book5","The Book of Air"),className:"mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold text-lg transition",children:"Download Full Book"})]}),E.jsxs("article",{id:"book6",className:"mb-32 bg-black/30 backdrop-blur-sm rounded-lg p-8",children:[E.jsx("h2",{className:"text-4xl font-bold mb-12 pb-4 border-b-2 border-gray-600 text-shadow-lg",children:"Book 6: The Book of Wood"}),E.jsx("div",{className:"prose prose-invert max-w-none",children:E.jsxs("pre",{className:"whitespace-pre-wrap font-sans text-lg leading-relaxed space-y-8 text-shadow-lg",children:[E.jsx("h3",{className:"text-2xl font-semibold mb-6 text-shadow-lg",children:"Introduction to The Book of Wood"}),E.jsx("p",{className:"mb-8 indent-8 text-shadow-lg",children:"As we turn our focus now to outward effects, it should be known there exist two extremes of magical work: Fire, whose purpose is harm, and Water, whose effects upon the target are positive. Neither may be classed simply as good or evil, as that determination depends mainly upon the target. If a Water ritual is used to aid an evil person, it is generally evil, and if Fire harms an evil person, it is generally good. Therefore, both types of work have their appropriate time and place. The Practitioner should in all cases strive to increase the good in the world based upon all relevant information, rather than limit themselves to certain actions based upon generalizations and predetermined categories."})]})}),E.jsx("button",{onClick:()=>i("book6","The Book of Wood"),className:"mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold text-lg transition",children:"Download Full Book"})]}),E.jsxs("article",{id:"foundational",className:"mb-32 bg-black/30 backdrop-blur-sm rounded-lg p-8",children:[E.jsx("h2",{className:"text-4xl font-bold mb-12 pb-4 border-b-2 border-gray-600 text-shadow-lg",children:"Foundational Accords"}),E.jsx("div",{className:"prose prose-invert max-w-none",children:E.jsxs("pre",{className:"whitespace-pre-wrap font-sans text-lg leading-relaxed space-y-8 text-shadow-lg",children:[E.jsx("h3",{className:"text-2xl font-semibold mb-6 text-shadow-lg",children:"Introduction to Foundational Accords"}),E.jsx("p",{className:"mb-8 indent-8 text-shadow-lg",children:"Our sacred charge is the tireless pursuit of Knowledge in all its manifold and wondrous forms, and above all, the earnest seeking of understanding concerning the great Mysteries of the Universe. In the service of this divine charge, let there be naught forbidden, save that which brings forth harm surpassing the value of its end."})]})}),E.jsx("button",{onClick:()=>i("foundational","Foundational Accords"),className:"mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold text-lg transition",children:"Download Full Text"})]}),E.jsxs("article",{id:"bible",className:"mb-32 bg-black/30 backdrop-blur-sm rounded-lg p-8",children:[E.jsx("h2",{className:"text-4xl font-bold mb-12 pb-4 border-b-2 border-gray-600 text-shadow-lg",children:"The Bible - An Analysis"}),E.jsx("div",{className:"prose prose-invert max-w-none",children:E.jsxs("pre",{className:"whitespace-pre-wrap font-sans text-lg leading-relaxed space-y-8 text-shadow-lg",children:[E.jsx("h3",{className:"text-2xl font-semibold mb-6 text-shadow-lg",children:"Introduction to The Bible Analysis"}),E.jsx("p",{className:"mb-8 indent-8 text-shadow-lg",children:"I want to start by telling you what this isn't, because we're going to walk over a minefield here, but I don't think that's any reason not to talk about things. It's just a reason to talk about them carefully."})]})}),E.jsx("button",{onClick:()=>i("bible","The Bible - An Analysis"),className:"mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold text-lg transition",children:"Download Full Text"})]})]})]})}function px(i,e){return function(){return i.apply(e,arguments)}}const{toString:z1}=Object.prototype,{getPrototypeOf:uh}=Object,{iterator:bc,toStringTag:mx}=Symbol,Mc=(i=>e=>{const t=z1.call(e);return i[t]||(i[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),yi=i=>(i=i.toLowerCase(),e=>Mc(e)===i),Tc=i=>e=>typeof e===i,{isArray:_o}=Array,ma=Tc("undefined");function H1(i){return i!==null&&!ma(i)&&i.constructor!==null&&!ma(i.constructor)&&Vn(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const gx=yi("ArrayBuffer");function V1(i){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(i):e=i&&i.buffer&&gx(i.buffer),e}const G1=Tc("string"),Vn=Tc("function"),vx=Tc("number"),Ac=i=>i!==null&&typeof i=="object",W1=i=>i===!0||i===!1,dc=i=>{if(Mc(i)!=="object")return!1;const e=uh(i);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(mx in i)&&!(bc in i)},j1=yi("Date"),X1=yi("File"),q1=yi("Blob"),Y1=yi("FileList"),$1=i=>Ac(i)&&Vn(i.pipe),K1=i=>{let e;return i&&(typeof FormData=="function"&&i instanceof FormData||Vn(i.append)&&((e=Mc(i))==="formdata"||e==="object"&&Vn(i.toString)&&i.toString()==="[object FormData]"))},Z1=yi("URLSearchParams"),[J1,Q1,eA,tA]=["ReadableStream","Request","Response","Headers"].map(yi),nA=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ea(i,e,{allOwnKeys:t=!1}={}){if(i===null||typeof i>"u")return;let s,o;if(typeof i!="object"&&(i=[i]),_o(i))for(s=0,o=i.length;s<o;s++)e.call(null,i[s],s,i);else{const l=t?Object.getOwnPropertyNames(i):Object.keys(i),u=l.length;let d;for(s=0;s<u;s++)d=l[s],e.call(null,i[d],d,i)}}function xx(i,e){e=e.toLowerCase();const t=Object.keys(i);let s=t.length,o;for(;s-- >0;)if(o=t[s],e===o.toLowerCase())return o;return null}const ds=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,_x=i=>!ma(i)&&i!==ds;function Vf(){const{caseless:i}=_x(this)&&this||{},e={},t=(s,o)=>{const l=i&&xx(e,o)||o;dc(e[l])&&dc(s)?e[l]=Vf(e[l],s):dc(s)?e[l]=Vf({},s):_o(s)?e[l]=s.slice():e[l]=s};for(let s=0,o=arguments.length;s<o;s++)arguments[s]&&Ea(arguments[s],t);return e}const iA=(i,e,t,{allOwnKeys:s}={})=>(Ea(e,(o,l)=>{t&&Vn(o)?i[l]=px(o,t):i[l]=o},{allOwnKeys:s}),i),rA=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),sA=(i,e,t,s)=>{i.prototype=Object.create(e.prototype,s),i.prototype.constructor=i,Object.defineProperty(i,"super",{value:e.prototype}),t&&Object.assign(i.prototype,t)},oA=(i,e,t,s)=>{let o,l,u;const d={};if(e=e||{},i==null)return e;do{for(o=Object.getOwnPropertyNames(i),l=o.length;l-- >0;)u=o[l],(!s||s(u,i,e))&&!d[u]&&(e[u]=i[u],d[u]=!0);i=t!==!1&&uh(i)}while(i&&(!t||t(i,e))&&i!==Object.prototype);return e},aA=(i,e,t)=>{i=String(i),(t===void 0||t>i.length)&&(t=i.length),t-=e.length;const s=i.indexOf(e,t);return s!==-1&&s===t},lA=i=>{if(!i)return null;if(_o(i))return i;let e=i.length;if(!vx(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=i[e];return t},cA=(i=>e=>i&&e instanceof i)(typeof Uint8Array<"u"&&uh(Uint8Array)),uA=(i,e)=>{const s=(i&&i[bc]).call(i);let o;for(;(o=s.next())&&!o.done;){const l=o.value;e.call(i,l[0],l[1])}},dA=(i,e)=>{let t;const s=[];for(;(t=i.exec(e))!==null;)s.push(t);return s},fA=yi("HTMLFormElement"),hA=i=>i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,s,o){return s.toUpperCase()+o}),ev=(({hasOwnProperty:i})=>(e,t)=>i.call(e,t))(Object.prototype),pA=yi("RegExp"),yx=(i,e)=>{const t=Object.getOwnPropertyDescriptors(i),s={};Ea(t,(o,l)=>{let u;(u=e(o,l,i))!==!1&&(s[l]=u||o)}),Object.defineProperties(i,s)},mA=i=>{yx(i,(e,t)=>{if(Vn(i)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const s=i[t];if(Vn(s)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},gA=(i,e)=>{const t={},s=o=>{o.forEach(l=>{t[l]=!0})};return _o(i)?s(i):s(String(i).split(e)),t},vA=()=>{},xA=(i,e)=>i!=null&&Number.isFinite(i=+i)?i:e;function _A(i){return!!(i&&Vn(i.append)&&i[mx]==="FormData"&&i[bc])}const yA=i=>{const e=new Array(10),t=(s,o)=>{if(Ac(s)){if(e.indexOf(s)>=0)return;if(!("toJSON"in s)){e[o]=s;const l=_o(s)?[]:{};return Ea(s,(u,d)=>{const f=t(u,o+1);!ma(f)&&(l[d]=f)}),e[o]=void 0,l}}return s};return t(i,0)},SA=yi("AsyncFunction"),wA=i=>i&&(Ac(i)||Vn(i))&&Vn(i.then)&&Vn(i.catch),Sx=((i,e)=>i?setImmediate:e?((t,s)=>(ds.addEventListener("message",({source:o,data:l})=>{o===ds&&l===t&&s.length&&s.shift()()},!1),o=>{s.push(o),ds.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",Vn(ds.postMessage)),EA=typeof queueMicrotask<"u"?queueMicrotask.bind(ds):typeof process<"u"&&process.nextTick||Sx,bA=i=>i!=null&&Vn(i[bc]),re={isArray:_o,isArrayBuffer:gx,isBuffer:H1,isFormData:K1,isArrayBufferView:V1,isString:G1,isNumber:vx,isBoolean:W1,isObject:Ac,isPlainObject:dc,isReadableStream:J1,isRequest:Q1,isResponse:eA,isHeaders:tA,isUndefined:ma,isDate:j1,isFile:X1,isBlob:q1,isRegExp:pA,isFunction:Vn,isStream:$1,isURLSearchParams:Z1,isTypedArray:cA,isFileList:Y1,forEach:Ea,merge:Vf,extend:iA,trim:nA,stripBOM:rA,inherits:sA,toFlatObject:oA,kindOf:Mc,kindOfTest:yi,endsWith:aA,toArray:lA,forEachEntry:uA,matchAll:dA,isHTMLForm:fA,hasOwnProperty:ev,hasOwnProp:ev,reduceDescriptors:yx,freezeMethods:mA,toObjectSet:gA,toCamelCase:hA,noop:vA,toFiniteNumber:xA,findKey:xx,global:ds,isContextDefined:_x,isSpecCompliantForm:_A,toJSONObject:yA,isAsyncFn:SA,isThenable:wA,setImmediate:Sx,asap:EA,isIterable:bA};function dt(i,e,t,s,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=i,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),s&&(this.request=s),o&&(this.response=o,this.status=o.status?o.status:null)}re.inherits(dt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:re.toJSONObject(this.config),code:this.code,status:this.status}}});const wx=dt.prototype,Ex={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(i=>{Ex[i]={value:i}});Object.defineProperties(dt,Ex);Object.defineProperty(wx,"isAxiosError",{value:!0});dt.from=(i,e,t,s,o,l)=>{const u=Object.create(wx);return re.toFlatObject(i,u,function(f){return f!==Error.prototype},d=>d!=="isAxiosError"),dt.call(u,i.message,e,t,s,o),u.cause=i,u.name=i.name,l&&Object.assign(u,l),u};const MA=null;function Gf(i){return re.isPlainObject(i)||re.isArray(i)}function bx(i){return re.endsWith(i,"[]")?i.slice(0,-2):i}function tv(i,e,t){return i?i.concat(e).map(function(o,l){return o=bx(o),!t&&l?"["+o+"]":o}).join(t?".":""):e}function TA(i){return re.isArray(i)&&!i.some(Gf)}const AA=re.toFlatObject(re,{},null,function(e){return/^is[A-Z]/.test(e)});function Cc(i,e,t){if(!re.isObject(i))throw new TypeError("target must be an object");e=e||new FormData,t=re.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,x){return!re.isUndefined(x[b])});const s=t.metaTokens,o=t.visitor||m,l=t.dots,u=t.indexes,f=(t.Blob||typeof Blob<"u"&&Blob)&&re.isSpecCompliantForm(e);if(!re.isFunction(o))throw new TypeError("visitor must be a function");function p(w){if(w===null)return"";if(re.isDate(w))return w.toISOString();if(!f&&re.isBlob(w))throw new dt("Blob is not supported. Use a Buffer instead.");return re.isArrayBuffer(w)||re.isTypedArray(w)?f&&typeof Blob=="function"?new Blob([w]):Buffer.from(w):w}function m(w,b,x){let _=w;if(w&&!x&&typeof w=="object"){if(re.endsWith(b,"{}"))b=s?b:b.slice(0,-2),w=JSON.stringify(w);else if(re.isArray(w)&&TA(w)||(re.isFileList(w)||re.endsWith(b,"[]"))&&(_=re.toArray(w)))return b=bx(b),_.forEach(function(N,R){!(re.isUndefined(N)||N===null)&&e.append(u===!0?tv([b],R,l):u===null?b:b+"[]",p(N))}),!1}return Gf(w)?!0:(e.append(tv(x,b,l),p(w)),!1)}const g=[],y=Object.assign(AA,{defaultVisitor:m,convertValue:p,isVisitable:Gf});function S(w,b){if(!re.isUndefined(w)){if(g.indexOf(w)!==-1)throw Error("Circular reference detected in "+b.join("."));g.push(w),re.forEach(w,function(_,D){(!(re.isUndefined(_)||_===null)&&o.call(e,_,re.isString(D)?D.trim():D,b,y))===!0&&S(_,b?b.concat(D):[D])}),g.pop()}}if(!re.isObject(i))throw new TypeError("data must be an object");return S(i),e}function nv(i){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g,function(s){return e[s]})}function dh(i,e){this._pairs=[],i&&Cc(i,this,e)}const Mx=dh.prototype;Mx.append=function(e,t){this._pairs.push([e,t])};Mx.toString=function(e){const t=e?function(s){return e.call(this,s,nv)}:nv;return this._pairs.map(function(o){return t(o[0])+"="+t(o[1])},"").join("&")};function CA(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Tx(i,e,t){if(!e)return i;const s=t&&t.encode||CA;re.isFunction(t)&&(t={serialize:t});const o=t&&t.serialize;let l;if(o?l=o(e,t):l=re.isURLSearchParams(e)?e.toString():new dh(e,t).toString(s),l){const u=i.indexOf("#");u!==-1&&(i=i.slice(0,u)),i+=(i.indexOf("?")===-1?"?":"&")+l}return i}class iv{constructor(){this.handlers=[]}use(e,t,s){return this.handlers.push({fulfilled:e,rejected:t,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){re.forEach(this.handlers,function(s){s!==null&&e(s)})}}const Ax={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},RA=typeof URLSearchParams<"u"?URLSearchParams:dh,PA=typeof FormData<"u"?FormData:null,NA=typeof Blob<"u"?Blob:null,LA={isBrowser:!0,classes:{URLSearchParams:RA,FormData:PA,Blob:NA},protocols:["http","https","file","blob","url","data"]},fh=typeof window<"u"&&typeof document<"u",Wf=typeof navigator=="object"&&navigator||void 0,DA=fh&&(!Wf||["ReactNative","NativeScript","NS"].indexOf(Wf.product)<0),UA=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",IA=fh&&window.location.href||"http://localhost",kA=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:fh,hasStandardBrowserEnv:DA,hasStandardBrowserWebWorkerEnv:UA,navigator:Wf,origin:IA},Symbol.toStringTag,{value:"Module"})),Mn={...kA,...LA};function FA(i,e){return Cc(i,new Mn.classes.URLSearchParams,Object.assign({visitor:function(t,s,o,l){return Mn.isNode&&re.isBuffer(t)?(this.append(s,t.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)}},e))}function OA(i){return re.matchAll(/\w+|\[(\w*)]/g,i).map(e=>e[0]==="[]"?"":e[1]||e[0])}function BA(i){const e={},t=Object.keys(i);let s;const o=t.length;let l;for(s=0;s<o;s++)l=t[s],e[l]=i[l];return e}function Cx(i){function e(t,s,o,l){let u=t[l++];if(u==="__proto__")return!0;const d=Number.isFinite(+u),f=l>=t.length;return u=!u&&re.isArray(o)?o.length:u,f?(re.hasOwnProp(o,u)?o[u]=[o[u],s]:o[u]=s,!d):((!o[u]||!re.isObject(o[u]))&&(o[u]=[]),e(t,s,o[u],l)&&re.isArray(o[u])&&(o[u]=BA(o[u])),!d)}if(re.isFormData(i)&&re.isFunction(i.entries)){const t={};return re.forEachEntry(i,(s,o)=>{e(OA(s),o,t,0)}),t}return null}function zA(i,e,t){if(re.isString(i))try{return(e||JSON.parse)(i),re.trim(i)}catch(s){if(s.name!=="SyntaxError")throw s}return(t||JSON.stringify)(i)}const ba={transitional:Ax,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const s=t.getContentType()||"",o=s.indexOf("application/json")>-1,l=re.isObject(e);if(l&&re.isHTMLForm(e)&&(e=new FormData(e)),re.isFormData(e))return o?JSON.stringify(Cx(e)):e;if(re.isArrayBuffer(e)||re.isBuffer(e)||re.isStream(e)||re.isFile(e)||re.isBlob(e)||re.isReadableStream(e))return e;if(re.isArrayBufferView(e))return e.buffer;if(re.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let d;if(l){if(s.indexOf("application/x-www-form-urlencoded")>-1)return FA(e,this.formSerializer).toString();if((d=re.isFileList(e))||s.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return Cc(d?{"files[]":e}:e,f&&new f,this.formSerializer)}}return l||o?(t.setContentType("application/json",!1),zA(e)):e}],transformResponse:[function(e){const t=this.transitional||ba.transitional,s=t&&t.forcedJSONParsing,o=this.responseType==="json";if(re.isResponse(e)||re.isReadableStream(e))return e;if(e&&re.isString(e)&&(s&&!this.responseType||o)){const u=!(t&&t.silentJSONParsing)&&o;try{return JSON.parse(e)}catch(d){if(u)throw d.name==="SyntaxError"?dt.from(d,dt.ERR_BAD_RESPONSE,this,null,this.response):d}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Mn.classes.FormData,Blob:Mn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};re.forEach(["delete","get","head","post","put","patch"],i=>{ba.headers[i]={}});const HA=re.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),VA=i=>{const e={};let t,s,o;return i&&i.split(`
`).forEach(function(u){o=u.indexOf(":"),t=u.substring(0,o).trim().toLowerCase(),s=u.substring(o+1).trim(),!(!t||e[t]&&HA[t])&&(t==="set-cookie"?e[t]?e[t].push(s):e[t]=[s]:e[t]=e[t]?e[t]+", "+s:s)}),e},rv=Symbol("internals");function sa(i){return i&&String(i).trim().toLowerCase()}function fc(i){return i===!1||i==null?i:re.isArray(i)?i.map(fc):String(i)}function GA(i){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=t.exec(i);)e[s[1]]=s[2];return e}const WA=i=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());function Xd(i,e,t,s,o){if(re.isFunction(s))return s.call(this,e,t);if(o&&(e=t),!!re.isString(e)){if(re.isString(s))return e.indexOf(s)!==-1;if(re.isRegExp(s))return s.test(e)}}function jA(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,s)=>t.toUpperCase()+s)}function XA(i,e){const t=re.toCamelCase(" "+e);["get","set","has"].forEach(s=>{Object.defineProperty(i,s+t,{value:function(o,l,u){return this[s].call(this,e,o,l,u)},configurable:!0})})}let Gn=class{constructor(e){e&&this.set(e)}set(e,t,s){const o=this;function l(d,f,p){const m=sa(f);if(!m)throw new Error("header name must be a non-empty string");const g=re.findKey(o,m);(!g||o[g]===void 0||p===!0||p===void 0&&o[g]!==!1)&&(o[g||f]=fc(d))}const u=(d,f)=>re.forEach(d,(p,m)=>l(p,m,f));if(re.isPlainObject(e)||e instanceof this.constructor)u(e,t);else if(re.isString(e)&&(e=e.trim())&&!WA(e))u(VA(e),t);else if(re.isObject(e)&&re.isIterable(e)){let d={},f,p;for(const m of e){if(!re.isArray(m))throw TypeError("Object iterator must return a key-value pair");d[p=m[0]]=(f=d[p])?re.isArray(f)?[...f,m[1]]:[f,m[1]]:m[1]}u(d,t)}else e!=null&&l(t,e,s);return this}get(e,t){if(e=sa(e),e){const s=re.findKey(this,e);if(s){const o=this[s];if(!t)return o;if(t===!0)return GA(o);if(re.isFunction(t))return t.call(this,o,s);if(re.isRegExp(t))return t.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=sa(e),e){const s=re.findKey(this,e);return!!(s&&this[s]!==void 0&&(!t||Xd(this,this[s],s,t)))}return!1}delete(e,t){const s=this;let o=!1;function l(u){if(u=sa(u),u){const d=re.findKey(s,u);d&&(!t||Xd(s,s[d],d,t))&&(delete s[d],o=!0)}}return re.isArray(e)?e.forEach(l):l(e),o}clear(e){const t=Object.keys(this);let s=t.length,o=!1;for(;s--;){const l=t[s];(!e||Xd(this,this[l],l,e,!0))&&(delete this[l],o=!0)}return o}normalize(e){const t=this,s={};return re.forEach(this,(o,l)=>{const u=re.findKey(s,l);if(u){t[u]=fc(o),delete t[l];return}const d=e?jA(l):String(l).trim();d!==l&&delete t[l],t[d]=fc(o),s[d]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return re.forEach(this,(s,o)=>{s!=null&&s!==!1&&(t[o]=e&&re.isArray(s)?s.join(", "):s)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const s=new this(e);return t.forEach(o=>s.set(o)),s}static accessor(e){const s=(this[rv]=this[rv]={accessors:{}}).accessors,o=this.prototype;function l(u){const d=sa(u);s[d]||(XA(o,u),s[d]=!0)}return re.isArray(e)?e.forEach(l):l(e),this}};Gn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);re.reduceDescriptors(Gn.prototype,({value:i},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>i,set(s){this[t]=s}}});re.freezeMethods(Gn);function qd(i,e){const t=this||ba,s=e||t,o=Gn.from(s.headers);let l=s.data;return re.forEach(i,function(d){l=d.call(t,l,o.normalize(),e?e.status:void 0)}),o.normalize(),l}function Rx(i){return!!(i&&i.__CANCEL__)}function yo(i,e,t){dt.call(this,i??"canceled",dt.ERR_CANCELED,e,t),this.name="CanceledError"}re.inherits(yo,dt,{__CANCEL__:!0});function Px(i,e,t){const s=t.config.validateStatus;!t.status||!s||s(t.status)?i(t):e(new dt("Request failed with status code "+t.status,[dt.ERR_BAD_REQUEST,dt.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function qA(i){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(i);return e&&e[1]||""}function YA(i,e){i=i||10;const t=new Array(i),s=new Array(i);let o=0,l=0,u;return e=e!==void 0?e:1e3,function(f){const p=Date.now(),m=s[l];u||(u=p),t[o]=f,s[o]=p;let g=l,y=0;for(;g!==o;)y+=t[g++],g=g%i;if(o=(o+1)%i,o===l&&(l=(l+1)%i),p-u<e)return;const S=m&&p-m;return S?Math.round(y*1e3/S):void 0}}function $A(i,e){let t=0,s=1e3/e,o,l;const u=(p,m=Date.now())=>{t=m,o=null,l&&(clearTimeout(l),l=null),i.apply(null,p)};return[(...p)=>{const m=Date.now(),g=m-t;g>=s?u(p,m):(o=p,l||(l=setTimeout(()=>{l=null,u(o)},s-g)))},()=>o&&u(o)]}const vc=(i,e,t=3)=>{let s=0;const o=YA(50,250);return $A(l=>{const u=l.loaded,d=l.lengthComputable?l.total:void 0,f=u-s,p=o(f),m=u<=d;s=u;const g={loaded:u,total:d,progress:d?u/d:void 0,bytes:f,rate:p||void 0,estimated:p&&d&&m?(d-u)/p:void 0,event:l,lengthComputable:d!=null,[e?"download":"upload"]:!0};i(g)},t)},sv=(i,e)=>{const t=i!=null;return[s=>e[0]({lengthComputable:t,total:i,loaded:s}),e[1]]},ov=i=>(...e)=>re.asap(()=>i(...e)),KA=Mn.hasStandardBrowserEnv?((i,e)=>t=>(t=new URL(t,Mn.origin),i.protocol===t.protocol&&i.host===t.host&&(e||i.port===t.port)))(new URL(Mn.origin),Mn.navigator&&/(msie|trident)/i.test(Mn.navigator.userAgent)):()=>!0,ZA=Mn.hasStandardBrowserEnv?{write(i,e,t,s,o,l){const u=[i+"="+encodeURIComponent(e)];re.isNumber(t)&&u.push("expires="+new Date(t).toGMTString()),re.isString(s)&&u.push("path="+s),re.isString(o)&&u.push("domain="+o),l===!0&&u.push("secure"),document.cookie=u.join("; ")},read(i){const e=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(i){this.write(i,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function JA(i){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function QA(i,e){return e?i.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):i}function Nx(i,e,t){let s=!JA(e);return i&&(s||t==!1)?QA(i,e):e}const av=i=>i instanceof Gn?{...i}:i;function gs(i,e){e=e||{};const t={};function s(p,m,g,y){return re.isPlainObject(p)&&re.isPlainObject(m)?re.merge.call({caseless:y},p,m):re.isPlainObject(m)?re.merge({},m):re.isArray(m)?m.slice():m}function o(p,m,g,y){if(re.isUndefined(m)){if(!re.isUndefined(p))return s(void 0,p,g,y)}else return s(p,m,g,y)}function l(p,m){if(!re.isUndefined(m))return s(void 0,m)}function u(p,m){if(re.isUndefined(m)){if(!re.isUndefined(p))return s(void 0,p)}else return s(void 0,m)}function d(p,m,g){if(g in e)return s(p,m);if(g in i)return s(void 0,p)}const f={url:l,method:l,data:l,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,withXSRFToken:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:d,headers:(p,m,g)=>o(av(p),av(m),g,!0)};return re.forEach(Object.keys(Object.assign({},i,e)),function(m){const g=f[m]||o,y=g(i[m],e[m],m);re.isUndefined(y)&&g!==d||(t[m]=y)}),t}const Lx=i=>{const e=gs({},i);let{data:t,withXSRFToken:s,xsrfHeaderName:o,xsrfCookieName:l,headers:u,auth:d}=e;e.headers=u=Gn.from(u),e.url=Tx(Nx(e.baseURL,e.url,e.allowAbsoluteUrls),i.params,i.paramsSerializer),d&&u.set("Authorization","Basic "+btoa((d.username||"")+":"+(d.password?unescape(encodeURIComponent(d.password)):"")));let f;if(re.isFormData(t)){if(Mn.hasStandardBrowserEnv||Mn.hasStandardBrowserWebWorkerEnv)u.setContentType(void 0);else if((f=u.getContentType())!==!1){const[p,...m]=f?f.split(";").map(g=>g.trim()).filter(Boolean):[];u.setContentType([p||"multipart/form-data",...m].join("; "))}}if(Mn.hasStandardBrowserEnv&&(s&&re.isFunction(s)&&(s=s(e)),s||s!==!1&&KA(e.url))){const p=o&&l&&ZA.read(l);p&&u.set(o,p)}return e},eC=typeof XMLHttpRequest<"u",tC=eC&&function(i){return new Promise(function(t,s){const o=Lx(i);let l=o.data;const u=Gn.from(o.headers).normalize();let{responseType:d,onUploadProgress:f,onDownloadProgress:p}=o,m,g,y,S,w;function b(){S&&S(),w&&w(),o.cancelToken&&o.cancelToken.unsubscribe(m),o.signal&&o.signal.removeEventListener("abort",m)}let x=new XMLHttpRequest;x.open(o.method.toUpperCase(),o.url,!0),x.timeout=o.timeout;function _(){if(!x)return;const N=Gn.from("getAllResponseHeaders"in x&&x.getAllResponseHeaders()),V={data:!d||d==="text"||d==="json"?x.responseText:x.response,status:x.status,statusText:x.statusText,headers:N,config:i,request:x};Px(function(F){t(F),b()},function(F){s(F),b()},V),x=null}"onloadend"in x?x.onloadend=_:x.onreadystatechange=function(){!x||x.readyState!==4||x.status===0&&!(x.responseURL&&x.responseURL.indexOf("file:")===0)||setTimeout(_)},x.onabort=function(){x&&(s(new dt("Request aborted",dt.ECONNABORTED,i,x)),x=null)},x.onerror=function(){s(new dt("Network Error",dt.ERR_NETWORK,i,x)),x=null},x.ontimeout=function(){let R=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const V=o.transitional||Ax;o.timeoutErrorMessage&&(R=o.timeoutErrorMessage),s(new dt(R,V.clarifyTimeoutError?dt.ETIMEDOUT:dt.ECONNABORTED,i,x)),x=null},l===void 0&&u.setContentType(null),"setRequestHeader"in x&&re.forEach(u.toJSON(),function(R,V){x.setRequestHeader(V,R)}),re.isUndefined(o.withCredentials)||(x.withCredentials=!!o.withCredentials),d&&d!=="json"&&(x.responseType=o.responseType),p&&([y,w]=vc(p,!0),x.addEventListener("progress",y)),f&&x.upload&&([g,S]=vc(f),x.upload.addEventListener("progress",g),x.upload.addEventListener("loadend",S)),(o.cancelToken||o.signal)&&(m=N=>{x&&(s(!N||N.type?new yo(null,i,x):N),x.abort(),x=null)},o.cancelToken&&o.cancelToken.subscribe(m),o.signal&&(o.signal.aborted?m():o.signal.addEventListener("abort",m)));const D=qA(o.url);if(D&&Mn.protocols.indexOf(D)===-1){s(new dt("Unsupported protocol "+D+":",dt.ERR_BAD_REQUEST,i));return}x.send(l||null)})},nC=(i,e)=>{const{length:t}=i=i?i.filter(Boolean):[];if(e||t){let s=new AbortController,o;const l=function(p){if(!o){o=!0,d();const m=p instanceof Error?p:this.reason;s.abort(m instanceof dt?m:new yo(m instanceof Error?m.message:m))}};let u=e&&setTimeout(()=>{u=null,l(new dt(`timeout ${e} of ms exceeded`,dt.ETIMEDOUT))},e);const d=()=>{i&&(u&&clearTimeout(u),u=null,i.forEach(p=>{p.unsubscribe?p.unsubscribe(l):p.removeEventListener("abort",l)}),i=null)};i.forEach(p=>p.addEventListener("abort",l));const{signal:f}=s;return f.unsubscribe=()=>re.asap(d),f}},iC=function*(i,e){let t=i.byteLength;if(t<e){yield i;return}let s=0,o;for(;s<t;)o=s+e,yield i.slice(s,o),s=o},rC=async function*(i,e){for await(const t of sC(i))yield*iC(t,e)},sC=async function*(i){if(i[Symbol.asyncIterator]){yield*i;return}const e=i.getReader();try{for(;;){const{done:t,value:s}=await e.read();if(t)break;yield s}}finally{await e.cancel()}},lv=(i,e,t,s)=>{const o=rC(i,e);let l=0,u,d=f=>{u||(u=!0,s&&s(f))};return new ReadableStream({async pull(f){try{const{done:p,value:m}=await o.next();if(p){d(),f.close();return}let g=m.byteLength;if(t){let y=l+=g;t(y)}f.enqueue(new Uint8Array(m))}catch(p){throw d(p),p}},cancel(f){return d(f),o.return()}},{highWaterMark:2})},Rc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Dx=Rc&&typeof ReadableStream=="function",oC=Rc&&(typeof TextEncoder=="function"?(i=>e=>i.encode(e))(new TextEncoder):async i=>new Uint8Array(await new Response(i).arrayBuffer())),Ux=(i,...e)=>{try{return!!i(...e)}catch{return!1}},aC=Dx&&Ux(()=>{let i=!1;const e=new Request(Mn.origin,{body:new ReadableStream,method:"POST",get duplex(){return i=!0,"half"}}).headers.has("Content-Type");return i&&!e}),cv=64*1024,jf=Dx&&Ux(()=>re.isReadableStream(new Response("").body)),xc={stream:jf&&(i=>i.body)};Rc&&(i=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!xc[e]&&(xc[e]=re.isFunction(i[e])?t=>t[e]():(t,s)=>{throw new dt(`Response type '${e}' is not supported`,dt.ERR_NOT_SUPPORT,s)})})})(new Response);const lC=async i=>{if(i==null)return 0;if(re.isBlob(i))return i.size;if(re.isSpecCompliantForm(i))return(await new Request(Mn.origin,{method:"POST",body:i}).arrayBuffer()).byteLength;if(re.isArrayBufferView(i)||re.isArrayBuffer(i))return i.byteLength;if(re.isURLSearchParams(i)&&(i=i+""),re.isString(i))return(await oC(i)).byteLength},cC=async(i,e)=>{const t=re.toFiniteNumber(i.getContentLength());return t??lC(e)},uC=Rc&&(async i=>{let{url:e,method:t,data:s,signal:o,cancelToken:l,timeout:u,onDownloadProgress:d,onUploadProgress:f,responseType:p,headers:m,withCredentials:g="same-origin",fetchOptions:y}=Lx(i);p=p?(p+"").toLowerCase():"text";let S=nC([o,l&&l.toAbortSignal()],u),w;const b=S&&S.unsubscribe&&(()=>{S.unsubscribe()});let x;try{if(f&&aC&&t!=="get"&&t!=="head"&&(x=await cC(m,s))!==0){let V=new Request(e,{method:"POST",body:s,duplex:"half"}),z;if(re.isFormData(s)&&(z=V.headers.get("content-type"))&&m.setContentType(z),V.body){const[F,O]=sv(x,vc(ov(f)));s=lv(V.body,cv,F,O)}}re.isString(g)||(g=g?"include":"omit");const _="credentials"in Request.prototype;w=new Request(e,{...y,signal:S,method:t.toUpperCase(),headers:m.normalize().toJSON(),body:s,duplex:"half",credentials:_?g:void 0});let D=await fetch(w);const N=jf&&(p==="stream"||p==="response");if(jf&&(d||N&&b)){const V={};["status","statusText","headers"].forEach(P=>{V[P]=D[P]});const z=re.toFiniteNumber(D.headers.get("content-length")),[F,O]=d&&sv(z,vc(ov(d),!0))||[];D=new Response(lv(D.body,cv,F,()=>{O&&O(),b&&b()}),V)}p=p||"text";let R=await xc[re.findKey(xc,p)||"text"](D,i);return!N&&b&&b(),await new Promise((V,z)=>{Px(V,z,{data:R,headers:Gn.from(D.headers),status:D.status,statusText:D.statusText,config:i,request:w})})}catch(_){throw b&&b(),_&&_.name==="TypeError"&&/Load failed|fetch/i.test(_.message)?Object.assign(new dt("Network Error",dt.ERR_NETWORK,i,w),{cause:_.cause||_}):dt.from(_,_&&_.code,i,w)}}),Xf={http:MA,xhr:tC,fetch:uC};re.forEach(Xf,(i,e)=>{if(i){try{Object.defineProperty(i,"name",{value:e})}catch{}Object.defineProperty(i,"adapterName",{value:e})}});const uv=i=>`- ${i}`,dC=i=>re.isFunction(i)||i===null||i===!1,Ix={getAdapter:i=>{i=re.isArray(i)?i:[i];const{length:e}=i;let t,s;const o={};for(let l=0;l<e;l++){t=i[l];let u;if(s=t,!dC(t)&&(s=Xf[(u=String(t)).toLowerCase()],s===void 0))throw new dt(`Unknown adapter '${u}'`);if(s)break;o[u||"#"+l]=s}if(!s){const l=Object.entries(o).map(([d,f])=>`adapter ${d} `+(f===!1?"is not supported by the environment":"is not available in the build"));let u=e?l.length>1?`since :
`+l.map(uv).join(`
`):" "+uv(l[0]):"as no adapter specified";throw new dt("There is no suitable adapter to dispatch the request "+u,"ERR_NOT_SUPPORT")}return s},adapters:Xf};function Yd(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new yo(null,i)}function dv(i){return Yd(i),i.headers=Gn.from(i.headers),i.data=qd.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1),Ix.getAdapter(i.adapter||ba.adapter)(i).then(function(s){return Yd(i),s.data=qd.call(i,i.transformResponse,s),s.headers=Gn.from(s.headers),s},function(s){return Rx(s)||(Yd(i),s&&s.response&&(s.response.data=qd.call(i,i.transformResponse,s.response),s.response.headers=Gn.from(s.response.headers))),Promise.reject(s)})}const kx="1.9.0",Pc={};["object","boolean","number","function","string","symbol"].forEach((i,e)=>{Pc[i]=function(s){return typeof s===i||"a"+(e<1?"n ":" ")+i}});const fv={};Pc.transitional=function(e,t,s){function o(l,u){return"[Axios v"+kx+"] Transitional option '"+l+"'"+u+(s?". "+s:"")}return(l,u,d)=>{if(e===!1)throw new dt(o(u," has been removed"+(t?" in "+t:"")),dt.ERR_DEPRECATED);return t&&!fv[u]&&(fv[u]=!0,console.warn(o(u," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(l,u,d):!0}};Pc.spelling=function(e){return(t,s)=>(console.warn(`${s} is likely a misspelling of ${e}`),!0)};function fC(i,e,t){if(typeof i!="object")throw new dt("options must be an object",dt.ERR_BAD_OPTION_VALUE);const s=Object.keys(i);let o=s.length;for(;o-- >0;){const l=s[o],u=e[l];if(u){const d=i[l],f=d===void 0||u(d,l,i);if(f!==!0)throw new dt("option "+l+" must be "+f,dt.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new dt("Unknown option "+l,dt.ERR_BAD_OPTION)}}const hc={assertOptions:fC,validators:Pc},Ai=hc.validators;let hs=class{constructor(e){this.defaults=e||{},this.interceptors={request:new iv,response:new iv}}async request(e,t){try{return await this._request(e,t)}catch(s){if(s instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const l=o.stack?o.stack.replace(/^.+\n/,""):"";try{s.stack?l&&!String(s.stack).endsWith(l.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+l):s.stack=l}catch{}}throw s}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=gs(this.defaults,t);const{transitional:s,paramsSerializer:o,headers:l}=t;s!==void 0&&hc.assertOptions(s,{silentJSONParsing:Ai.transitional(Ai.boolean),forcedJSONParsing:Ai.transitional(Ai.boolean),clarifyTimeoutError:Ai.transitional(Ai.boolean)},!1),o!=null&&(re.isFunction(o)?t.paramsSerializer={serialize:o}:hc.assertOptions(o,{encode:Ai.function,serialize:Ai.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),hc.assertOptions(t,{baseUrl:Ai.spelling("baseURL"),withXsrfToken:Ai.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let u=l&&re.merge(l.common,l[t.method]);l&&re.forEach(["delete","get","head","post","put","patch","common"],w=>{delete l[w]}),t.headers=Gn.concat(u,l);const d=[];let f=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(t)===!1||(f=f&&b.synchronous,d.unshift(b.fulfilled,b.rejected))});const p=[];this.interceptors.response.forEach(function(b){p.push(b.fulfilled,b.rejected)});let m,g=0,y;if(!f){const w=[dv.bind(this),void 0];for(w.unshift.apply(w,d),w.push.apply(w,p),y=w.length,m=Promise.resolve(t);g<y;)m=m.then(w[g++],w[g++]);return m}y=d.length;let S=t;for(g=0;g<y;){const w=d[g++],b=d[g++];try{S=w(S)}catch(x){b.call(this,x);break}}try{m=dv.call(this,S)}catch(w){return Promise.reject(w)}for(g=0,y=p.length;g<y;)m=m.then(p[g++],p[g++]);return m}getUri(e){e=gs(this.defaults,e);const t=Nx(e.baseURL,e.url,e.allowAbsoluteUrls);return Tx(t,e.params,e.paramsSerializer)}};re.forEach(["delete","get","head","options"],function(e){hs.prototype[e]=function(t,s){return this.request(gs(s||{},{method:e,url:t,data:(s||{}).data}))}});re.forEach(["post","put","patch"],function(e){function t(s){return function(l,u,d){return this.request(gs(d||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:l,data:u}))}}hs.prototype[e]=t(),hs.prototype[e+"Form"]=t(!0)});let hC=class Fx{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(l){t=l});const s=this;this.promise.then(o=>{if(!s._listeners)return;let l=s._listeners.length;for(;l-- >0;)s._listeners[l](o);s._listeners=null}),this.promise.then=o=>{let l;const u=new Promise(d=>{s.subscribe(d),l=d}).then(o);return u.cancel=function(){s.unsubscribe(l)},u},e(function(l,u,d){s.reason||(s.reason=new yo(l,u,d),t(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=s=>{e.abort(s)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new Fx(function(o){e=o}),cancel:e}}};function pC(i){return function(t){return i.apply(null,t)}}function mC(i){return re.isObject(i)&&i.isAxiosError===!0}const qf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(qf).forEach(([i,e])=>{qf[e]=i});function Ox(i){const e=new hs(i),t=px(hs.prototype.request,e);return re.extend(t,hs.prototype,e,{allOwnKeys:!0}),re.extend(t,e,null,{allOwnKeys:!0}),t.create=function(o){return Ox(gs(i,o))},t}const Pt=Ox(ba);Pt.Axios=hs;Pt.CanceledError=yo;Pt.CancelToken=hC;Pt.isCancel=Rx;Pt.VERSION=kx;Pt.toFormData=Cc;Pt.AxiosError=dt;Pt.Cancel=Pt.CanceledError;Pt.all=function(e){return Promise.all(e)};Pt.spread=pC;Pt.isAxiosError=mC;Pt.mergeConfig=gs;Pt.AxiosHeaders=Gn;Pt.formToJSON=i=>Cx(re.isHTMLForm(i)?new FormData(i):i);Pt.getAdapter=Ix.getAdapter;Pt.HttpStatusCode=qf;Pt.default=Pt;const{Axios:TC,AxiosError:AC,CanceledError:CC,isCancel:RC,CancelToken:PC,VERSION:NC,all:LC,Cancel:DC,isAxiosError:UC,spread:IC,toFormData:kC,AxiosHeaders:FC,HttpStatusCode:OC,formToJSON:BC,getAdapter:zC,mergeConfig:HC}=Pt;function gC(){const[i,e]=Se.useState(localStorage.getItem("userId")||""),[t,s]=Se.useState(localStorage.getItem("code")||""),[o,l]=Se.useState(""),u=async()=>{try{await Pt.post("http://localhost:5000/api/referrals/use",{userId:i,referralCode:o}),alert("Referral code accepted!")}catch{alert("Error submitting referral code.")}},d=()=>{navigator.clipboard.writeText(t),alert("Referral code copied!")};return E.jsxs("div",{className:"text-white max-w-4xl mx-auto px-8 py-12 space-y-16 relative z-10",children:[E.jsx("div",{className:"fixed inset-0 bg-black/10 backdrop-blur-[1px] -z-10"}),E.jsx("h1",{className:"text-4xl font-bold mb-16 text-center text-shadow-lg",children:"Referral Program"}),E.jsxs("section",{className:"mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:[E.jsx("h2",{className:"text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg",children:"Invite Others"}),E.jsxs("div",{className:"space-y-6",children:[E.jsx("p",{className:"text-lg leading-relaxed text-shadow-lg",children:"Share us and invite. For each person who signs up using your link and makes a post, you will be rewarded."}),E.jsxs("div",{className:"flex items-center gap-4",children:[E.jsx("input",{type:"text",className:"flex-1 p-4 rounded bg-black/30 text-white border border-white/20 focus:border-white/40 focus:outline-none transition-all",readOnly:!0,value:t}),E.jsx("button",{onClick:d,className:"px-6 py-4 bg-blue-600/80 hover:bg-blue-600 rounded transition-all text-white font-semibold text-shadow whitespace-nowrap",children:"Copy Code"})]})]})]}),E.jsxs("section",{className:"mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:[E.jsx("h2",{className:"text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg",children:"Were you invited?"}),E.jsxs("div",{className:"space-y-6",children:[E.jsx("p",{className:"text-lg leading-relaxed text-shadow-lg",children:"Enter the invite code to give credit to the person who referred you:"}),E.jsxs("div",{className:"space-y-4",children:[E.jsx("input",{type:"text",className:"w-full p-4 rounded bg-black/30 text-white border border-white/20 focus:border-white/40 focus:outline-none transition-all",value:o,onChange:f=>l(f.target.value),placeholder:"Enter referral code..."}),E.jsx("button",{onClick:u,className:"px-6 py-4 bg-green-600/80 hover:bg-green-600 rounded transition-all text-white font-semibold text-shadow",children:"Submit Code"})]})]})]})]})}function vC(){const[i,e]=Se.useState([]),[t,s]=Se.useState(""),[o]=Se.useState(localStorage.getItem("userId")||null),[l,u]=Se.useState({}),[d,f]=Se.useState({});Se.useEffect(()=>{p()},[]);const p=async()=>{const b=(await Pt.get("http://localhost:5000/api/posts")).data;e(b);for(let x of b)m(x.id)},m=async w=>{const b=await Pt.get(`http://localhost:5000/api/comments/${w}`);u(x=>({...x,[w]:b.data}))},g=async()=>{t.trim()&&(await Pt.post("http://localhost:5000/api/posts",{userId:o,content:t}),s(""),p())},y=async w=>{d[w]&&(await Pt.post("http://localhost:5000/api/comments",{userId:o,postId:w,content:d[w]}),f(b=>({...b,[w]:""})),m(w))},S=async(w,b)=>{await Pt.post(`http://localhost:5000/api/posts/${w}/vote`,{vote:b}),p()};return E.jsxs("div",{className:"text-white max-w-4xl mx-auto px-8 py-12 space-y-16 relative z-10",children:[E.jsx("div",{className:"fixed inset-0 bg-black/10 backdrop-blur-[1px] -z-10"}),E.jsx("h1",{className:"text-4xl font-bold mb-16 text-center text-shadow-lg",children:"Community"}),E.jsxs("section",{className:"mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:[E.jsx("h2",{className:"text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg",children:"Share Your Thoughts"}),E.jsxs("div",{className:"space-y-4",children:[E.jsx("textarea",{className:"w-full p-4 rounded bg-black/30 text-white border border-white/20 focus:border-white/40 focus:outline-none resize-none transition-all",rows:"4",placeholder:"Share your thoughts...",value:t,onChange:w=>s(w.target.value)}),E.jsx("button",{className:"px-6 py-2 bg-blue-600/80 hover:bg-blue-600 rounded transition-all text-white font-semibold text-shadow",onClick:g,children:"Post"})]})]}),E.jsx("section",{className:"space-y-8",children:i.map(w=>{var b;return E.jsxs("div",{className:"bg-black/20 backdrop-blur-sm rounded-lg p-6 transition-all hover:bg-black/25",children:[E.jsxs("div",{className:"mb-4",children:[E.jsx("p",{className:"font-semibold text-lg text-shadow-lg mb-2",children:w.username}),E.jsx("p",{className:"text-lg leading-relaxed text-shadow-lg mb-4",children:w.content}),E.jsxs("div",{className:"flex gap-6",children:[E.jsxs("button",{onClick:()=>S(w.id,"up"),className:"flex items-center gap-2 text-shadow hover:text-blue-400 transition-colors",children:["👍 ",E.jsx("span",{children:w.upvotes})]}),E.jsxs("button",{onClick:()=>S(w.id,"down"),className:"flex items-center gap-2 text-shadow hover:text-red-400 transition-colors",children:["👎 ",E.jsx("span",{children:w.downvotes})]})]})]}),E.jsxs("div",{className:"bg-black/30 rounded-lg p-4",children:[E.jsx("h4",{className:"text-lg font-semibold mb-4 text-shadow-lg",children:"Comments"}),E.jsxs("div",{className:"space-y-4",children:[(b=l[w.id])==null?void 0:b.map(x=>E.jsx("div",{className:"border-t border-white/10 pt-3",children:E.jsxs("p",{className:"text-shadow-lg",children:[E.jsx("strong",{className:"text-blue-400",children:x.username}),": ",x.content]})},x.id)),E.jsxs("div",{className:"mt-4 space-y-2",children:[E.jsx("textarea",{className:"w-full p-3 rounded bg-black/30 text-white border border-white/20 focus:border-white/40 focus:outline-none resize-none transition-all",rows:"2",placeholder:"Add a comment...",value:d[w.id]||"",onChange:x=>f(_=>({..._,[w.id]:x.target.value}))}),E.jsx("button",{onClick:()=>y(w.id),className:"px-4 py-1 bg-green-600/80 hover:bg-green-600 rounded transition-all text-white font-semibold text-shadow",children:"Comment"})]})]})]})]},w.id)})})]})}function xC(){return E.jsxs("div",{className:"text-white max-w-4xl mx-auto px-8 py-12 space-y-16 relative z-10 scroll-smooth",children:[E.jsx("div",{className:"fixed inset-0 bg-black/10 backdrop-blur-[1px] -z-10"}),E.jsx("h1",{className:"text-4xl font-bold mb-16 text-center text-shadow-lg",children:"Ranks and Roles in The Order of Marzod"}),E.jsxs("nav",{className:"sticky top-4 mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:[E.jsx("h2",{className:"text-2xl font-semibold mb-6 text-shadow-lg",children:"Table of Contents"}),E.jsxs("ul",{className:"space-y-3 text-lg",children:[E.jsx("li",{children:E.jsx("a",{href:"#council",className:"text-blue-400 hover:text-blue-300 text-shadow-lg",children:"1. The Marzodian Council"})}),E.jsx("li",{children:E.jsx("a",{href:"#specialties",className:"text-blue-400 hover:text-blue-300 text-shadow-lg",children:"1.1. Of Specialties and Refinements"})}),E.jsx("li",{children:E.jsx("a",{href:"#collectives",className:"text-blue-400 hover:text-blue-300 text-shadow-lg",children:"1.2. Of Collectives"})}),E.jsx("li",{children:E.jsx("a",{href:"#ranks",className:"text-blue-400 hover:text-blue-300 text-shadow-lg",children:"2. Ranks"})}),E.jsx("li",{children:E.jsx("a",{href:"#trials-ascension",className:"text-blue-400 hover:text-blue-300 text-shadow-lg",children:"Trials of Ascension"})}),E.jsx("li",{children:E.jsx("a",{href:"#trials",className:"text-blue-400 hover:text-blue-300 text-shadow-lg",children:"The Trials"})})]})]}),E.jsxs("section",{id:"council",className:"mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:[E.jsx("h2",{className:"text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg",children:"1. The Marzodian Council"}),E.jsxs("div",{className:"prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg",children:[E.jsx("p",{className:"indent-8",children:"The Marzodian Council is the chief body of the Order, the final authority in the interpretation of doctrine, and shall be comprised of the three Keepers possessing the greatest number of Specialties and Refinements. Should one fit to serve choose not to do so, the mantle of leadership shall pass to the next in succession."}),E.jsx("p",{className:"indent-8",children:"A seat upon the Council may not be revoked, save by death, voluntary resignation, or by the will of the other two members. In all matters brought before the Council, the decision of the majority shall prevail, and such a ruling may not be revisited for one year, save by the Council's own unanimous decree."}),E.jsx("p",{className:"indent-8",children:"A gathering of the Council shall be called upon the following occasions to render a decision, and no decree thus made may be reversed except by the formal declaration of no less than nine tenths of all Chief Keepers, or unanimous decree of the Council."})]})]}),E.jsxs("section",{id:"specialties",className:"mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:[E.jsx("h2",{className:"text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg",children:"1.1. Of Specialties and Refinements"}),E.jsxs("div",{className:"prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg",children:[E.jsx("p",{className:"indent-8",children:"A Specialty is attained through the submission of a treatise, composed by a Keeper, containing no fewer than seven pages on a singular subject. Acceptable subject matter shall generally encompass fields such as physics, chemistry, alchemy, mathematics, natural history, psychology, mythology, religion, ancient cultures, philosophy, mysticism or the occult, and other matters which advance knowledge of the nature of the universe or ancient peoples, from whom much insight into mysterious forces may be gleaned."}),E.jsx("p",{className:"indent-8",children:"This treatise shall be presented before the Council, who shall judge it according to its merit in truth, insight, and distinction from the Keeper's other Specialties, which is to say, whether it sufficiently broadens the Keeper's knowledge to merit further accreditation. Should the work fail in this last, but otherwise be of good quality, it shall be considered a Refinement of a Specialty, or a deepening of existing knowledge. By their judgment, the Council may approve or reject such a work."})]})]}),E.jsxs("section",{id:"collectives",className:"mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:[E.jsx("h2",{className:"text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg",children:"1.2. Of Collectives"}),E.jsxs("div",{className:"prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg",children:[E.jsx("p",{className:"indent-8",children:"A Collective is the local manifestation of the Order, a sanctuary of knowledge, a place of learning for its students, and a gathering ground for its members. It is incumbent upon all members of the Order to be attached to a Collective, most often the one nearest their home, though this is not of necessity."}),E.jsx("p",{className:"indent-8",children:"Service to the Collective is commanded by the Chief Keeper and is the shared duty of all its members. Should a Keeper desire to head a Collective, they may do so by decree of the Council, dedicating their time to the recruitment and instruction of students."}),E.jsx("p",{className:"indent-8",children:"If any Keeper desires to found a Collective, or lay claim to one established, let the matter be presented to the Council, who shall bestow the position upon the Keeper most suited, choosing by the number of Specialties and Refinements they possess and the greatest need among the regions of the Earth. Yet, as with the Council itself, no Keeper is bound to accept such a charge, but may refuse it if they so wish."})]})]}),E.jsxs("section",{id:"ranks",className:"mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:[E.jsx("h2",{className:"text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg",children:"2. Ranks"}),E.jsxs("div",{className:"space-y-12",children:[E.jsxs("div",{className:"prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg",children:[E.jsx("h3",{className:"text-2xl font-semibold mb-4",children:"Chief Keeper"}),E.jsx("p",{className:"indent-8",children:"As the sovereign of their Collective, a Chief Keeper may in all things follow their own counsel and govern the Collective according to their wisdom, provided they do not transgress the Prime nor Secondary Laws. Nevertheless, if a Chief Keeper is unable or disinclined to resolve a matter, let him bring the matter before the Council for their judgment."})]}),E.jsxs("div",{className:"prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg",children:[E.jsx("h3",{className:"text-2xl font-semibold mb-4",children:"Keeper"}),E.jsx("p",{className:"indent-8",children:"Any Seeker, upon the acquisition of a Specialty, ascends to the station of Keeper, thereby gaining sufficient stature to guide a Collective or serve as an Overseer. Additional Specialties and Refinements may be obtained, augmenting and enhancing their station, advancing their standing in appointment to Chief Keeper or to the Council."})]}),E.jsxs("div",{className:"prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg",children:[E.jsx("h3",{className:"text-2xl font-semibold mb-4",children:"Seeker"}),E.jsx("p",{className:"indent-8",children:"A Seeker is numbered among the Order, although not yet of such stature as may permit them into positions of leadership, which are generally reserved for the Keepers, though a Chief Keeper may assign certain duties to Seekers should no qualified Keeper be found to accept the role."})]}),E.jsxs("div",{className:"prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg",children:[E.jsx("h3",{className:"text-2xl font-semibold mb-4",children:"Disciple"}),E.jsx("p",{className:"indent-8",children:"A Disciple is one who has attained an advanced stage of study, in which they may begin to bear minor responsibilities of membership and perform in sacred rituals involving human spirits and deities."})]}),E.jsxs("div",{className:"prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg",children:[E.jsx("h3",{className:"text-2xl font-semibold mb-4",children:"Initiate"}),E.jsx("p",{className:"indent-8",children:"An Initiate is one who has but commenced the journey of knowledge, and is constrained to performance in rituals involving the spirits of Nature and the Elements."})]}),E.jsxs("div",{className:"prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg",children:[E.jsx("h3",{className:"text-2xl font-semibold mb-4",children:"Novice"}),E.jsx("p",{className:"indent-8",children:"A Novice is one who possesses the fervent desire to tread the path of knowledge. There exists no particular requirement to attain this rank, save for the earnest wish to learn and the judgment of a Chief Keeper that the individual may bring credit and honor to the Order. Novices may not perform in rituals, but devote themselves to study of the foundational tenets of the Order and understanding of the Mysteries of the Universe."})]})]})]}),E.jsxs("section",{id:"trials-ascension",className:"mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:[E.jsx("h2",{className:"text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg",children:"Trials of Ascension"}),E.jsx("div",{className:"prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg",children:E.jsx("p",{className:"indent-8",children:"The Trials of Ascension are the means by which one may ascend in station. They may be administered by any Keeper, who, upon a student's request, is bound to honor it within seven days, or else seek another Keeper to act in their stead. The full procedure is set forth below."})}),E.jsxs("div",{className:"mt-8 space-y-12",children:[E.jsxs("div",{children:[E.jsx("h3",{className:"text-2xl font-semibold mb-4 text-shadow-lg",children:"1. Of Overseers"}),E.jsx("p",{className:"indent-8 text-lg leading-relaxed text-shadow-lg",children:"Overseers shall hold no station lower than that of Keeper, and it is their charge to conduct the Trials. An Overseer shall adhere scrupulously to all established forms of the Trials, and the word of the Overseer shall be deemed absolute, save in cases as specified in the following section, or by order of the Council."})]}),E.jsxs("div",{children:[E.jsx("h3",{className:"text-2xl font-semibold mb-4 text-shadow-lg",children:"2. Of Special Permissions"}),E.jsx("p",{className:"indent-8 text-lg leading-relaxed text-shadow-lg",children:"In the ensuing requirements, the Aspirant is invited to exercise their own judgement in the choosing of many of the particulars. In such matters, the Overseer may exercise their discretion regarding the validity of the Aspirant's choices, but must yield to any prior permissions granted by a Keeper."})]}),E.jsxs("div",{children:[E.jsx("h3",{className:"text-2xl font-semibold mb-4 text-shadow-lg",children:"3. Of Marzodian Runes"}),E.jsx("p",{className:"indent-8 text-lg leading-relaxed text-shadow-lg",children:"Fluency in the Runes is expected of all Seekers, and all material in attainment of the station of Keeper and any further Specialties or Refinements must be executed by hand using the Runes. The mysteries of the Runes are not to be revealed to any below the rank of Seeker, on pain of expulsion from the Order."})]})]})]}),E.jsxs("section",{id:"trials",className:"mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:[E.jsx("h2",{className:"text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg",children:"The Trials"}),E.jsxs("div",{className:"space-y-12",children:[E.jsxs("div",{children:[E.jsx("h3",{className:"text-2xl font-semibold mb-4 text-shadow-lg",children:"1. Novice"}),E.jsxs("ul",{className:"list-disc list-inside space-y-4 text-lg leading-relaxed text-shadow-lg ml-4",children:[E.jsx("li",{children:"Comprehends and accepts the Statement of Purpose, Core Principle, the Three Laws, and any further laws, vows, or rituals required of them by their Collective."}),E.jsx("li",{children:"Privileges and Responsibilities of Station: The Novice is granted admission into a Collective, though they must not disturb the peace. They shall share equally in toils of the community and perform in no rituals until advancing to the station of Initiate."}),E.jsx("li",{children:"During this time, the Novice shall receive and study materials of general education, including the Books of Water, Metal, and Earth."})]})]}),E.jsxs("div",{children:[E.jsx("h3",{className:"text-2xl font-semibold mb-4 text-shadow-lg",children:"2. Initiate"}),E.jsxs("ul",{className:"list-disc list-inside space-y-4 text-lg leading-relaxed text-shadow-lg ml-4",children:[E.jsx("li",{children:"Journal: Seven pages"}),E.jsxs("li",{children:["Treatises:",E.jsxs("ul",{className:"list-disc list-inside ml-8 mt-2",children:[E.jsx("li",{children:"One Mythology Treatise"}),E.jsx("li",{children:"The Nature of Marzod, Spirits, and the Fourth Dimension"})]})]}),E.jsxs("li",{children:["Writings:",E.jsxs("ul",{className:"list-disc list-inside ml-8 mt-2",children:[E.jsx("li",{children:"Letter and Reply"}),E.jsx("li",{children:"Languages"})]})]}),E.jsx("li",{children:"Privileges and Responsibilities of Rank: In addition to the privileges granted as a Novice, the Initiate may now partake in rituals befitting their station. However, they remain under the guidance of more experienced members and shall not yet assume leadership of such rituals."})]})]}),E.jsxs("div",{children:[E.jsx("h3",{className:"text-2xl font-semibold mb-4 text-shadow-lg",children:"3. Disciple"}),E.jsxs("ul",{className:"list-disc list-inside space-y-4 text-lg leading-relaxed text-shadow-lg ml-4",children:[E.jsx("li",{children:"Journal: Fourteen pages"}),E.jsx("li",{children:"Rituals: Three"}),E.jsxs("li",{children:["Treatises:",E.jsxs("ul",{className:"list-disc list-inside ml-8 mt-2",children:[E.jsx("li",{children:"Two Mythology Treatises"}),E.jsx("li",{children:"100 Medicinal and Ritual Herbs"})]})]}),E.jsxs("li",{children:["Writings:",E.jsxs("ul",{className:"list-disc list-inside ml-8 mt-2",children:[E.jsx("li",{children:"Letter and Reply"}),E.jsx("li",{children:"Languages"}),E.jsx("li",{children:"Three rituals"})]})]}),E.jsx("li",{children:"Privileges and Responsibilities of Rank: In addition to the privileges of Initiate, the student may now engage in rituals suited to their new station and may lead rituals suited to the rank of Initiate."})]})]}),E.jsxs("div",{children:[E.jsx("h3",{className:"text-2xl font-semibold mb-4 text-shadow-lg",children:"4. Seeker"}),E.jsxs("ul",{className:"list-disc list-inside space-y-4 text-lg leading-relaxed text-shadow-lg ml-4",children:[E.jsxs("li",{children:["Journal: Twenty-one pages total",E.jsxs("ul",{className:"list-disc list-inside ml-8 mt-2",children:[E.jsx("li",{children:"The fourteen pages requisite to attain the rank of Disciple must be written once more and perfected"}),E.jsx("li",{children:"A treatise addressing misconceptions previously held and now corrected"}),E.jsx("li",{children:"Seven additional pages"})]})]}),E.jsx("li",{children:"Rituals: Four"}),E.jsxs("li",{children:["Treatises:",E.jsxs("ul",{className:"list-disc list-inside ml-8 mt-2",children:[E.jsx("li",{children:"Four Mythology Treatises"}),E.jsx("li",{children:"Comparison: 20 Deities of Disparate Cultures"}),E.jsx("li",{children:"Incorrect Items of Student Journal"})]})]}),E.jsx("li",{children:"Privileges and Responsibilities of Rank: Upon reaching the station of Seeker, the individual has become a full member of the Order."})]})]}),E.jsxs("div",{children:[E.jsx("h3",{className:"text-2xl font-semibold mb-4 text-shadow-lg",children:"5. Keeper"}),E.jsx("p",{className:"mb-4 text-lg leading-relaxed text-shadow-lg",children:"While the preceding stations may be attained through Trials administered by any Keeper, the final station must be secured through a Trial overseen by the Council. All written materials composed for attainment of this station must be executed using the Marzodian Runes."}),E.jsxs("ul",{className:"list-disc list-inside space-y-4 text-lg leading-relaxed text-shadow-lg ml-4",children:[E.jsx("li",{children:"Rituals: Seven"}),E.jsxs("li",{children:["Treatises:",E.jsxs("ul",{className:"list-disc list-inside ml-8 mt-2",children:[E.jsx("li",{children:"Seven Mythology Treatises"}),E.jsx("li",{children:"Seven pages upon a singular subject, to be the Keeper's Specialty"})]})]}),E.jsxs("li",{children:["Writings:",E.jsxs("ul",{className:"list-disc list-inside ml-8 mt-2",children:[E.jsx("li",{children:"Letter and Reply"}),E.jsx("li",{children:"Languages, consisting of new Writings in all three previous languages and one new language"}),E.jsx("li",{children:"Seven rituals"})]})]}),E.jsx("li",{children:"Privileges and Responsibilities of Rank: By order of the Council, a Keeper may ascend to the position of Head of a Collective, granted upon the grounds of knowledge and need."})]})]})]})]})]})}function _C(){return E.jsxs("div",{className:"text-white max-w-4xl mx-auto px-8 py-12 space-y-16 relative z-10 scroll-smooth",children:[E.jsx("div",{className:"fixed inset-0 bg-black/10 backdrop-blur-[1px] -z-10"}),E.jsx("h1",{className:"text-4xl font-bold mb-16 text-center text-shadow-lg",children:"Statement of Purpose"}),E.jsx("section",{className:"mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:E.jsx("pre",{className:"whitespace-pre-wrap text-lg leading-relaxed text-shadow-lg",children:`Statement of Purpose

Our sacred charge is the tireless pursuit of Knowledge in all its manifold and wondrous forms, and above all, the earnest seeking of understanding concerning the great Mysteries of the Universe. In the service of this divine charge, let there be naught forbidden, save that which bringeth forth harm surpassing the value of its end.

Core Principle

The Mysteries of the Universe being most elusive to all pursuers, and the human race being prone to adhere to tradition rather than reliance upon their own intellect and experience, no culture may be relied upon in full regarding its interpretation of those Mysteries, though they have been touched by all peoples. Therefore, only by careful study of the common elements of various traditions, through a lens of logical and scientific understanding, may entire comprehension of those Mysteries be attained.

The Laws of Governance

The Prime Law is as thus: That no member of the Order shall, in any dealing, cause discomfort, nor inconvenience, nor any manner of pain unto others, save where such may not, with due care, be avoided.

The Secondary Law is as thus: That due care shall be taken in all matters of revelation, and the individual responsible shall be held accountable for events unfolding as a result of any information revealed. Whilst secrecy is oft esteemed among societies of like kind, the Order layeth no such yoke upon its members in general, for our holy purpose is the illumination of the world, yet in matters wherein the sacred function of the Order might be undone, secrecy shall be paramount. Such compromised knowledge shall be reckoned as that which pertaineth unto the Marzodian Runes, any weaknesses which may be found in the security or process of the Order, or any knowledge which transgresseth the Prime Law, for as knowledge may bring harm unto others, secrecy is oft enforced indirectly through the Prime Law.

The Third Law is as thus: That the Chief Keeper shall be sovereign over his Collective, and answerable only unto the Marzodian Council, under circumstances named hereafter. Let the Council make no law that bindeth a Collective in its particular affairs, but only such decrees as are most necessary and most widely applicable unto the public good. The Chief shall make those decrees over his Collective which seem unto himself most fit and righteous, and though he may not expel a member from the Order, as that privilege is reserved unto the Council, the Chief may cast forth a member from within his own ranks upon his commandment. And except it be for cause of inaptitude or corruption, or for transgression of the Prime or Secondary Laws, or for unlawful meddling in the governance of another Collective, his decrees shall be beyond the reach of the Council, nor may any, save himself, revoke them.

The Degrees and Dignities of the Order of Marzod

1. The Marzodian Council

The Marzodian Council is the chief body of the Order, the final authority in the interpretation of doctrine, and shall be comprised of the three Keepers possessing the greatest number of Specialties and Refinements. Should one fit to serve choose not to do so, the mantle of leadership shall pass to the next in succession. A seat upon the Council may not be revoked, save by death, voluntary resignation, or by the will of the other two members. In all matters brought before the Council, the decision of the majority shall prevail, and such a ruling may not be revisited for one year, save by the Council’s own unanimous decree. A gathering of the Council shall be called upon the following occasions to render a decision, and no decree thus made may be reversed except by the formal declaration of no less than nine tenths of all Chief Keepers, or unanimous decree of the Council.

1.1. Of Specialties and Refinements
A Specialty is attained through the submission of a treatise, composed by a Keeper, containing no fewer than seven pages on a singular subject. Acceptable subject matter shall generally encompass fields such as physics, chemistry, alchemy, mathematics, natural history, psychology, mythology, religion, ancient cultures, philosophy, mysticism or the occult, and other matters which advance knowledge of the nature of the universe or ancient peoples, from whom much insight into mysterious forces may be gleaned. This treatise shall be presented before the Council, who shall judge it according to its merit in truth, insight, and distinction from the Keeper's other Specialties, which is to say, whether it sufficiently broadens the Keeper's knowledge to merit further accreditation. Should the work fail in this last, but otherwise be of good quality, it shall be considered a Refinement of a Specialty, or a deepening of existing knowledge. By their judgment, the Council may approve or reject such a work.

1.2. Of Collectives
A Collective is the local manifestation of the Order, a sanctuary of knowledge, a place of learning for its students, and a gathering ground for its members. It is incumbent upon all members of the Order to be attached to a Collective, most often the one nearest their home, though this is not of necessity. Service to the Collective is commanded by the Chief Keeper and is the shared duty of all its members. Should a Keeper desire to head a Collective, they may do so by decree of the Council, dedicating their time to the recruitment and instruction of students. If any Keeper desires to found a Collective, or lay claim to one established, let the matter be presented to the Council, who shall bestow the position upon the Keeper most suited, choosing by the number of Specialties and Refinements they possess and the greatest need among the regions of the Earth. Yet, as with the Council itself, no Keeper is bound to accept such a charge, but may refuse it if they so wish.

1.3. Of Corruption or Inaptitude
Should any member bring accusation of corruption or inaptitude against a Chief Keeper, the matter shall be presented to the Council, who shall convene to give it due consideration.

2. Chief Keeper
As the sovereign of their Collective, a Chief Keeper may in all things follow their own counsel and govern the Collective according to their wisdom, provided they do not transgress the Prime nor Secondary Laws. Nevertheless, if a Chief Keeper is unable or disinclined to resolve a matter, let him bring the matter before the Council for their judgment.
2. Keeper

Any Seeker, upon the acquisition of a Specialty, ascends to the station of Keeper, thereby gaining sufficient stature to guide a Collective or serve as an Overseer. Additional Specialties and Refinements may be obtained, augmenting and enhancing their station, advancing their standing in appointment to Chief Keeper or to the Council.

3. Seeker
A Seeker is numbered among the Order, although not yet of such stature as may permit them into positions of leadership, which are generally reserved for the Keepers, though a Chief Keeper may assign certain duties to Seekers should no qualified Keeper be found to accept the role.

4. Disciple
A Disciple is one who has attained an advanced stage of study, in which they may begin to bear minor responsibilities of membership and perform in sacred rituals involving human spirits and deities.

5. Initiate
An Initiate is one who has but commenced the journey of knowledge, and is constrained to performance in rituals involving the spirits of Nature and the Elements.

6. Novice
A Novice is one who possesses the fervent desire to tread the path of knowledge. There exists no particular requirement to attain this rank, save for the earnest wish to learn and the judgment of a Chief Keeper that the individual may bring credit and honor to the Order. Novices may not perform in rituals, but devote themselves to study of the foundational tenets of the Order and understanding of the Mysteries of the Universe.

Trials of Ascension

The Trials of Ascension are the means by which one may ascend in station. They may be administered by any Keeper, who, upon a student's request, is bound to honor it within seven days, or else seek another Keeper to act in their stead. The full procedure is set forth below.

1. Of Overseers
Overseers shall hold no station lower than that of Keeper, and it is their charge to conduct the Trials. An Overseer shall adhere scrupulously to all established forms of the Trials, and the word of the Overseer shall be deemed absolute, save in cases as specified in the following section, or by order of the Council.

2. Of Special Permissions
In the ensuing requirements, the Aspirant is invited to exercise their own judgement in the choosing of many of the particulars. In such matters, the Overseer may exercise their discretion regarding the validity of the Aspirant's choices, but must yield to any prior permissions granted by a Keeper. The Keeper or Keepers of import, at the time of the Trials, must readily answer the Overseer's inquiries, and, should their prior approval of the Aspirant's methods and selections be affirmed, the matter shall be considered settled, and the method or choice in question deemed valid. Nevertheless, all restrictions of the Trials shall remain in place, and may not be countermanded, save by decree of the Council. Should corruption or inaptitude on the part of a Keeper in such matters be suspected by the Overseer, the matter shall not be examined within the Trial, but must be presented to the Chief of the Keeper's Collective or to the Council.

3. Of Marzodian Runes

Fluency in the Runes is expected of all Seekers, and all material in attainment of the station of Keeper and any further Specialties or Refinements must be executed by hand using the Runes. The mysteries of the Runes are not to be revealed to any below the rank of Seeker, on pain of expulsion from the Order.

4. Of Journaling
The Aspirant shall keep a faithful journal, summarizing their knowledge. As a guide, every square inch of paper should bear two to three words. The journal is intended to serve as summary and aid to memory, rather than a detailed exposition. Therefore, it is advised to limit each subject to two hundred fifty words, occupying a single side of the majority of paper types, with an absolute constraint of five hundred words on any single subject counted toward the total. Each advancement of station shall impose a requisite page count, understood as a collection of five hundred words, and thus may be adjusted by the Overseer to more precisely reflect the number of words expected. The tally of pages shall encompass both old and new, with seven new pages prescribed for every rank.

5. Of Rituals
A ritual is to be understood as any spellwork, potion, invocation, or similar endeavor, involving multiple participants and overseen or led by one of worthy qualification. The Aspirant must, by the discerning judgment of the ritual's leader, acquit themselves with skill in all tasks for which their station may be expected to have prepared them. The tally of rituals for each rank must not incorporate those in which the Aspirant has partaken for prior ranks, and shall consist solely of rituals befitting the Aspirant's current station.

6. Of Treatises
Treatises shall be composed prior to the Trials. There are no requirements concerning the number of words used, provided that the main particulars are clearly discerned and adequately explored, and the materials examined must be distinct from those of prior Trials.
6A. Of Mythology: A treatise dealing in mythology shall comprise a summary of two myths of dissimilar cultures, preferably predating any contact between them. The myths shall be of similar substance, and their similarities and differences fully explored within the treatise.

7. Of Writings
Writings are composed by the sole aid of memory, in the presence of the Overseer. Corrections are permitted, provided the final result is legible, and a time limit shall not be imposed unless specifically declared in the instructions. In recounting the particulars of rituals, it is perfectly acceptable for the rituals described and engaged in to share commonality, the only requirement being that the steps must be correctly defined and the true reason for these steps discerned. As with Treatises, the materials presented must not emulate those in prior Trials.

7A. Of Letter and Reply
The Overseer shall compose a letter to the Aspirant, consisting of approximately seven hundred words regarding their standing and accomplishments since the most recent Trials, which the Aspirant shall read aloud. Afterward, the Aspirant shall compose a reply of no less than seventy words.

7B. Of Languages
The Aspirant must select a tongue of notable historical roots and compose a Writing concerning the alphabet of the language, naming all characters, then translating the names of the Elements in order of Hierarchy, Alignment, the Path to Marzod, the Circles of Provision and Control, their Planets, their Metals, their corporeal attributes, and their dispositions into that tongue. The most common approved languages include Latin, Ancient Hebrew, Ancient Greek, Egyptian Demotic, and Arabic, though any language of similar age and standing may be employed. The language selected must not have been used in prior Trials.

The Trials

1. Novice
*Comprehends and accepts the Statement of Purpose, Core Principle, the Three Laws, and any further laws, vows, or rituals required of them by their Collective.
*Privileges and Responsibilities of Station: The Novice is granted admission into a Collective, though they must not disturb the peace. They shall share equally in toils of the community and perform in no rituals until advancing to the station of Initiate. During this time, the Novice shall receive and study materials of general education, including the Books of Water, Metal, and Earth.

2. Initiate
*Journal: Seven pages
*Treatises
One Mythology Treatise
The Nature of Marzod, Spirits, and the Fourth Dimension
*Writings
Letter and Reply
Languages
*Privileges and Responsibilities of Rank: In addition to the privileges granted as a Novice, the Initiate may now partake in rituals befitting their station. However, they remain under the guidance of more experienced members and shall not yet assume leadership of such rituals.

3. Disciple
*Journal: Fourteen pages
*Rituals: Three
*Treatises
Two Mythology Treatises
100 Medicinal and Ritual Herbs
*Writings
Letter and Reply
Languages
Three rituals
*Privileges and Responsibilities of Rank: In addition to the privileges of Initiate, the student may now engage in rituals suited to their new station and may lead rituals suited to the rank of Initiate. They are expected to further deepen their understanding of the Universe, Marzod, and ancient cultures, and may begin to act in some roles as full members.

4. Seeker
*Journal: The fourteen pages requisite to attain the rank of Disciple must be written once more and perfected, with a treatise addressing misconceptions previously held and now corrected. Seven additional pages are to be written, for a total of twenty-one pages. All twenty-one pages shall be examined by the Overseer to discern lingering fallacies.

*Rituals: Four
*Treatises
Four Mythology Treatises
Comparison: 20 Deities of Disparate Cultures
Incorrect Items of Student Journal
*Writings
Letter and Reply
Languages
Four rituals
*Privileges and Responsibilities of Rank: Upon reaching the station of Seeker, the individual has become a full member of the Order. The sole restriction remaining is that they may not govern their own Collective, but must serve under the authority of a Chief Keeper. It is also advised that Chief Keepers prioritize the appointment of Keepers to roles of authority within their Collectives before considering the appointment of Seekers, although this is not a binding law.

5. Keeper
While the preceding stations may be attained through Trials administered by any Keeper, the final station must be secured through a Trial overseen by the Council. All written materials composed for attainment of this station must be executed using the Marzodian Runes.
*Rituals: Seven
*Treatises
Seven Mythology Treatises
Seven pages upon a singular subject, to be the Keeper's Specialty
*Writings
Letter and Reply
Languages, consisting of new Writings in all three previous languages and one new language
Seven rituals
*Privileges and Responsibilities of Rank: By order of the Council, a Keeper may ascend to the position of Head of a Collective, granted upon the grounds of knowledge and need. In this station, the Keeper shall be expected to devote the greater part of their time to the recruitment and training of students.`})})]})}function yC(){const[i,e]=Se.useState(""),[t,s]=Se.useState(""),[o,l]=Se.useState(null),u=async()=>{try{const d=await Pt.post("http://localhost:5000/api/users/login",{username:i,password:t});l(d.data.userId),localStorage.setItem("userId",d.data.userId),localStorage.setItem("code",d.data.code),alert("Login successful")}catch{alert("Invalid credentials")}};return E.jsxs("div",{className:"text-white max-w-4xl mx-auto px-8 py-12 space-y-16 relative z-10",children:[E.jsx("div",{className:"fixed inset-0 bg-black/10 backdrop-blur-[1px] -z-10"}),E.jsx("h1",{className:"text-4xl font-bold mb-16 text-center text-shadow-lg",children:"Login"}),E.jsx("section",{className:"max-w-md mx-auto mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:E.jsxs("div",{className:"space-y-6",children:[E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"block text-lg font-semibold text-shadow-lg",children:"Username"}),E.jsx("input",{className:"w-full p-4 rounded bg-black/30 text-white border border-white/20 focus:border-white/40 focus:outline-none transition-all",type:"text",placeholder:"Enter your username",value:i,onChange:d=>e(d.target.value)})]}),E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"block text-lg font-semibold text-shadow-lg",children:"Password"}),E.jsx("input",{className:"w-full p-4 rounded bg-black/30 text-white border border-white/20 focus:border-white/40 focus:outline-none transition-all",type:"password",placeholder:"Enter your password",value:t,onChange:d=>s(d.target.value)})]}),E.jsx("button",{className:"w-full px-6 py-4 bg-green-600/80 hover:bg-green-600 rounded transition-all text-white font-semibold text-shadow text-lg",onClick:u,children:"Login"})]})})]})}function SC(){const[i,e]=Se.useState(""),[t,s]=Se.useState(""),[o,l]=Se.useState(""),[u,d]=Se.useState(null),f=async()=>{try{const p=await Pt.post("http://localhost:5000/api/users/register",{username:i,password:t,inviteCode:o});d(p.data.code),localStorage.setItem("code",p.data.code),alert("Signup successful! Your referral code is: "+p.data.code)}catch(p){alert("Signup failed: "+p.response.data.error)}};return E.jsxs("div",{className:"text-white max-w-4xl mx-auto px-8 py-12 space-y-16 relative z-10",children:[E.jsx("div",{className:"fixed inset-0 bg-black/10 backdrop-blur-[1px] -z-10"}),E.jsx("h1",{className:"text-4xl font-bold mb-16 text-center text-shadow-lg",children:"Sign Up"}),E.jsxs("section",{className:"max-w-md mx-auto mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:[E.jsxs("div",{className:"space-y-6",children:[E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"block text-lg font-semibold text-shadow-lg",children:"Username"}),E.jsx("input",{className:"w-full p-4 rounded bg-black/30 text-white border border-white/20 focus:border-white/40 focus:outline-none transition-all",type:"text",placeholder:"Choose a username",value:i,onChange:p=>e(p.target.value)})]}),E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"block text-lg font-semibold text-shadow-lg",children:"Password"}),E.jsx("input",{className:"w-full p-4 rounded bg-black/30 text-white border border-white/20 focus:border-white/40 focus:outline-none transition-all",type:"password",placeholder:"Choose a password",value:t,onChange:p=>s(p.target.value)})]}),E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"block text-lg font-semibold text-shadow-lg",children:"Referral Code"}),E.jsx("input",{className:"w-full p-4 rounded bg-black/30 text-white border border-white/20 focus:border-white/40 focus:outline-none transition-all",type:"text",placeholder:"Enter referral code (optional)",value:o,onChange:p=>l(p.target.value)})]}),E.jsx("button",{className:"w-full px-6 py-4 bg-blue-600/80 hover:bg-blue-600 rounded transition-all text-white font-semibold text-shadow text-lg",onClick:f,children:"Sign Up"})]}),u&&E.jsxs("div",{className:"mt-8 bg-black/30 p-6 rounded-lg border border-white/10",children:[E.jsx("p",{className:"text-lg font-semibold text-shadow-lg mb-2",children:"Your referral code:"}),E.jsx("code",{className:"block p-4 bg-black/40 rounded text-blue-400 text-lg font-mono text-shadow-lg",children:u})]})]})]})}function wC(){const[i,e]=Se.useState([]),t=async()=>{const l=await Pt.get("http://localhost:5000/api/admin/users");e(l.data)},s=async l=>{await Pt.post("http://localhost:5000/api/admin/ban",{userId:l}),t()},o=async l=>{await Pt.post("http://localhost:5000/api/admin/unban",{userId:l}),t()};return Se.useEffect(()=>{t()},[]),E.jsxs("div",{className:"text-white max-w-6xl mx-auto px-8 py-12 space-y-16 relative z-10",children:[E.jsx("div",{className:"fixed inset-0 bg-black/10 backdrop-blur-[1px] -z-10"}),E.jsx("h1",{className:"text-4xl font-bold mb-16 text-center text-shadow-lg",children:"Admin Dashboard"}),E.jsx("section",{className:"mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25",children:E.jsx("div",{className:"overflow-x-auto",children:E.jsxs("table",{className:"w-full text-left",children:[E.jsx("thead",{children:E.jsxs("tr",{className:"border-b border-white/20",children:[E.jsx("th",{className:"p-4 text-lg font-semibold text-shadow-lg",children:"ID"}),E.jsx("th",{className:"p-4 text-lg font-semibold text-shadow-lg",children:"Username"}),E.jsx("th",{className:"p-4 text-lg font-semibold text-shadow-lg",children:"Referral Code"}),E.jsx("th",{className:"p-4 text-lg font-semibold text-shadow-lg",children:"Status"}),E.jsx("th",{className:"p-4 text-lg font-semibold text-shadow-lg",children:"Actions"})]})}),E.jsx("tbody",{children:i.map(l=>E.jsxs("tr",{className:"border-t border-white/10 transition-colors hover:bg-white/5",children:[E.jsx("td",{className:"p-4 text-shadow-lg",children:l.id}),E.jsx("td",{className:"p-4 text-shadow-lg",children:l.username}),E.jsx("td",{className:"p-4 font-mono text-blue-400 text-shadow-lg",children:l.code}),E.jsx("td",{className:"p-4",children:E.jsx("span",{className:`px-3 py-1 rounded-full text-sm font-semibold text-shadow-lg ${l.is_banned?"bg-red-500/50 text-red-100":"bg-green-500/50 text-green-100"}`,children:l.is_banned?"Banned":"Active"})}),E.jsx("td",{className:"p-4",children:l.is_banned?E.jsx("button",{onClick:()=>o(l.id),className:"px-4 py-2 bg-yellow-600/80 hover:bg-yellow-600 rounded transition-all text-white font-semibold text-shadow",children:"Unban"}):E.jsx("button",{onClick:()=>s(l.id),className:"px-4 py-2 bg-red-600/80 hover:bg-red-600 rounded transition-all text-white font-semibold text-shadow",children:"Ban"})})]},l.id))})]})})})]})}function EC(){const[i,e]=Se.useState(!1);return E.jsx(Ay,{children:E.jsxs("div",{className:"min-h-screen bg-cover bg-center text-white relative",style:{backgroundImage:"url('/background.jpg')"},children:[E.jsx(hx,{}),E.jsxs("header",{className:"bg-transparent backdrop-blur-sm py-4 px-6 flex justify-between items-center fixed w-full top-0 z-50",children:[E.jsxs("div",{className:"relative",children:[E.jsx(ic,{onClick:()=>e(!i),variant:"ghost",className:"text-white hover:bg-white/10",children:"Home"}),i&&E.jsxs("div",{className:"absolute mt-2 bg-black/90 backdrop-blur-md rounded-lg shadow-xl border border-white/10 w-48",children:[E.jsx(Vi,{to:"/",className:"block px-4 py-2 hover:bg-white/10 text-white",children:"Home"}),E.jsx(Vi,{to:"/about",className:"block px-4 py-2 hover:bg-white/10 text-white",children:"About"}),E.jsx(Vi,{to:"/books",className:"block px-4 py-2 hover:bg-white/10 text-white",children:"Books"}),E.jsx(Vi,{to:"/referral",className:"block px-4 py-2 hover:bg-white/10 text-white",children:"Referral"}),E.jsx(Vi,{to:"/community",className:"block px-4 py-2 hover:bg-white/10 text-white",children:"Community"}),E.jsx(Vi,{to:"/ranks",className:"block px-4 py-2 hover:bg-white/10 text-white",children:"Ranks and Roles"}),E.jsx(Vi,{to:"/purpose",className:"block px-4 py-2 hover:bg-white/10 text-white",children:"Statement of Purpose"})]})]}),E.jsxs("div",{children:[E.jsx(Vi,{to:"/login",children:E.jsx(ic,{variant:"ghost",className:"text-white hover:bg-white/10 mr-2",children:"Login"})}),E.jsx(Vi,{to:"/signup",children:E.jsx(ic,{variant:"ghost",className:"text-white hover:bg-white/10 border border-white/50",children:"Sign Up"})})]})]}),E.jsxs("div",{className:"pt-16",children:[" ",E.jsx("main",{className:"p-6 relative z-10",children:E.jsxs(yy,{children:[E.jsx(pi,{path:"/admin",element:E.jsx(wC,{})}),E.jsx(pi,{path:"/signup",element:E.jsx(SC,{})}),E.jsx(pi,{path:"/login",element:E.jsx(yC,{})}),E.jsx(pi,{path:"/",element:E.jsx(wS,{})}),E.jsx(pi,{path:"/about",element:E.jsx(ES,{})}),E.jsx(pi,{path:"/books",element:E.jsx(B1,{})}),E.jsx(pi,{path:"/referral",element:E.jsx(gC,{})}),E.jsx(pi,{path:"/community",element:E.jsx(vC,{})}),E.jsx(pi,{path:"/ranks",element:E.jsx(xC,{})}),E.jsx(pi,{path:"/purpose",element:E.jsx(_C,{})})]})})]})]})})}C0.createRoot(document.getElementById("root")).render(E.jsx(EC,{}));
